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
7. **Distratores** (só em `multipla`): críveis, da mesma categoria da resposta e com no máximo 4 palavras (MANIFESTO §6). Uma pergunta `aberta` cuja resposta é um ano ou uma data deve ser reescrita como `multipla`, com 3 anos ou datas próximos e críveis (MANIFESTO §6).
8. **Duplicatas:** se duas perguntas do lote perguntam o mesmo fato, mantenha a melhor e descarte a outra.

Devolva exatamente uma avaliação para cada pergunta, usando o `indice` informado.

# Lote

[
  {
    "indice": 1,
    "ancora": {
      "nome": "Iemanjá",
      "descricao": "Orixá das águas salgadas nas religiões afro-brasileiras, homenageada com oferendas no mar."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Na virada do ano, muita gente entra no mar e pula ondas em homenagem a Iemanjá. Quantas ondas a tradição manda pular?",
    "resposta": "Sete",
    "distratores": [
      "Três",
      "Cinco",
      "Doze"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Iemanjá",
      "https://pt.wikipedia.org/wiki/Réveillon"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Iemanjá",
        "situacao": "ok",
        "texto": "Iemanjá (Yemọjá na Nigéria, Yemayá em Cuba ou ainda Dona Janaína no Brasil; ver seção Nome e Epítetos) é o orixá dos ebás, a deusa da fertilidade originalmente associada aos rios e desembocaduras. Seu culto principal estabeleceu-se em Abeocutá após migrações forçadas, tomando como suporte o rio Ogum de onde manifesta-se em qualquer outro corpo de água. Também é reverenciada em partes da América do\n[…]\nSegundo A. Vallado, \"qualidade\" é o termo que designa as múltiplas invocações ou avatares de um mesmo orixá. Também é, por vezes, chamado de \"caminho\", como observamos no esclarecimento apresentado por L. Cabrera de que \"não existe mais do que uma única Iemanjá, uma só, com sete caminhos\". Muitas dessas qualidades parecem tratar-se de outras divindades, como explora S. Poli, o que também se apoia em E.\n[…]\nIemanjá Ogunté\n[…]\nRosas brancas e estrelas douradas, desprendidas de sua cauda, flutuam suavemente no marulho das ondas. Iemanjá aparece magra e esbelta, com pequenos seios e o corpo imponentemente encurvado.\"\n[…]\nOutra festa importante dedicada a Iemanjá ocorre durante a passagem de ano no Rio de Janeiro e em todo litoral brasileiro. Milhares de pessoas comparecem e depositam no mar, oferendas para a divindade. A celebração também inclui o tradicional \"banho de pipoca\" e as sete ondas que os fiéis, ou até mesmo seguidores de outras religiões, pulam como forma de pedir sorte à orixá. Na umbanda, é considerada a divindade do mar.\n[…]\nEm Cuba, as celebrações realizam-se todos os anos no dia 7 de Setembro. Yemayá também tem as cores azul e branca, é uma rainha do mar negra, assume o nome cristão de La Virgen de Regla e faz parte da santería como santa padroeira dos portos de Havana. Lydia Cabrera fala em sete nomes igualmente, especificando que apenas uma Iemanjá existe, à qual se chega por sete caminhos. Seu nome indica o lugar onde ela se encontra.\n[…]\nMais sobre origem e festa de Iemanjá (vídeos)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Réveillon",
        "situacao": "ok",
        "texto": "Um réveillon é um longo jantar realizado na véspera de Natal ou na véspera de ano-novo. Seu nome deriva da palavra réveil (que significa \"acordar\"), porque a participação envolve ficar acordado até de manhã, quando a refeição termina.\n[…]\nNos Estados Unidos, a tradição do réveillon ainda é observada em Nova Orleães devido à forte herança franco-crioula da cidade, com vários restaurantes da cidade oferecendo menus especiais de réveillon na véspera de Natal. Também é observada por muitas famílias franco-americanas em toda a Nova Inglaterra."
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Iemanjá",
      "descricao": "Orixá das águas salgadas nas religiões afro-brasileiras, homenageada com oferendas no mar."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Em Porto Alegre, a festa de Iemanjá, em 2 de fevereiro, se mistura à de qual santa católica, celebrada no mesmo dia?",
    "resposta": "Nossa Senhora dos Navegantes",
    "distratores": [
      "Nossa Senhora Aparecida",
      "Nossa Senhora de Nazaré",
      "Nossa Senhora do Rosário"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Iemanjá",
      "https://pt.wikipedia.org/wiki/Nossa_Senhora_dos_Navegantes"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Iemanjá",
        "situacao": "ok",
        "texto": "Iemanjá (Yemọjá na Nigéria, Yemayá em Cuba ou ainda Dona Janaína no Brasil; ver seção Nome e Epítetos) é o orixá dos ebás, a deusa da fertilidade originalmente associada aos rios e desembocaduras. Seu culto principal estabeleceu-se em Abeocutá após migrações forçadas, tomando como suporte o rio Ogum de onde manifesta-se em qualquer outro corpo de água. Também é reverenciada em partes da América do\n[…]\nIemanjá sendo uma divindade possuidora de grande popularidade no Brasil e em Cuba é celebrada com grandes festas públicas, entre as quais se destacam o presente de Iemanjá na praia do Rio Vermelho na Bahia no dia 2 de fevereiro, e a festa no dia 8 de dezembro juntamente as festividades de Nossa Senhora da Conceição no Brasil. Em Cuba, suas festividades ocorrem no dia da Virgem de Regla, em 8 de setembro.\n[…]\nUma das maiores festas ocorre em Rio Grande, no Rio Grande do Sul, devido ao sincretismo com Nossa Senhora dos Navegantes. No mesmo estado, em Pelotas a imagem de Nossa Senhora dos Navegantes vai até o Porto de Pelotas. Antes do encerramento da festividade católica acontece um dos momentos mais marcantes da festa de Nossa Senhora dos Navegantes em Pelotas, que em 2008 chegou à 77ª edição.\n[…]\nA Festa de Nossa Senhora dos Navegantes em Porto Alegre é a maior festa religiosa da cidade brasileira do sul do Brasil, e homenageia Nossa Senhora dos Navegantes e seu sincretismo afro-brasileiro. É realizada no dia 2 de fevereiro de cada ano desde 1870.\n[…]\nOriginalmente, constava de uma procissão fluvial, com embarcações que singravam o Lago Guaíba desde o cais do porto, levando a imagem da santa do Centro da cidade até a Igreja de Nossa Senhora dos Navegantes. Hoje, por determinação impeditiva da Capitania dos Portos, a procissão é terrestre, levando a imagem desde a Igreja de Nossa Senhora do Rosário, no Centro da cidade, até a Igreja de Nossa Senhora dos Navegantes.\n[…]\nFesta de Iemanjá (vídeo)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Nossa_Senhora_dos_Navegantes",
        "situacao": "ok",
        "texto": "Nossa Senhora dos Navegantes é um título dado à Mãe de Jesus, Maria.\n[…]\nEm Pelotas, no estado do Rio Grande do Sul, a imagem de Nossa Senhora dos Navegantes vai até o Porto de Pelotas. Antes do encerramento da festividade católica acontece um dos momentos mais marcantes da festa de Nossa Senhora dos Navegantes em Pelotas, que em 2009 chegou à 78ª edição.\n[…]\nA fé em Nossa Senhora dos Navegantes chegou ao Brasil através dos navegadores portugueses e espanhóis. Em Porto Alegre, cidade de colonização açoriana, Nossa Senhora dos Navegantes é a maior festa religiosa da cidade, mesmo não sendo a padroeira.\n[…]\nTodos os anos é realizada em Porto Alegre uma procissão fluvial no Rio Guaíba. A festa é realizada todo dia 2 de fevereiro e, na festa de 2008, a procissão em honra à Nossa Senhora dos Navegantes reuniu mais de 100 mil pessoas.\n[…]\nNossa Senhora dos Navegantes é, também em Portugal, associada ao mar e à proteção dos marinheiros pela Santa Mãe de Deus. Mas a diferença é que os portugueses associam-na, principalmente, às comunidades pescatórias. A sua festa realiza-se a 15 de Agosto com procissões em várias comunidades de pescadores por todo o país. Uma das grandes festas a Nossa Senhora dos Navegantes realiza-se em Cascais entre os dias 3 e 15 de Agosto.\n[…]\nTambém é realizada uma festa em honra da Nossa Senhora dos Navegantes em Armação de Pêra. Nesta festa há uma procissão pelas ruas da vila e também há uma procissão pelo mar, com os barcos dos pescadores e outros barcos.\n[…]\nFesta de Nossa Senhora dos Navegantes de Porto Alegre\n[…]\nIgreja de Nossa Senhora dos Navegantes"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Iansã",
      "descricao": "Orixá dos ventos, raios e tempestades nas religiões afro-brasileiras."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Segundo a explicação mais difundida, o que significa em iorubá o nome da orixá Iansã, senhora dos ventos e das tempestades?",
    "resposta": "Mãe de nove filhos",
    "distratores": [
      "Rainha do trovão",
      "Dona da espada",
      "Mãe das águas"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Iansã"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Iansã",
        "situacao": "ok",
        "texto": "Oiá (em iorubá:  Ọya), também grafada Oyá ou Oya, é uma das mais importantes divindades femininas da religião iorubá. No Brasil, é amplamente conhecida como Iansã. Seu culto associa-se aos ventos, tempestades, ao fogo e ao movimento, além do poder de controlar e conduzir os Eguns (espíritos ancestrais).\n[…]\nA veneração a Oyá tem origem na região do rio Níger, especialmente nas cidades iorubás situadas próximas ao antigo rio Oyá. Com a diáspora africana, seus cultos foram recriados nas Américas, ocupando posição central no Candomblé e presença significativa na Umbanda.\n[…]\nO título mais difundido de Oiá no Brasil é Iansã, derivado de Ìyá Mésàn-Òrun (“Mãe dos Nove Céus”). A expressão remete ao brilho do entardecer e ao poder transformador do fogo.\n[…]\nUm mito relata que, após consulta a um babalawo, Oiá realiza um sacrifício e dá à luz nove filhos, tornando-se “Mãe dos Nove”.\n[…]\nNa santería cubana, Oiá é sincretizada com Nossa Senhora da Candelária e com Nossa Senhora da Anunciação.\n[…]\nA compreensão moderna de Oyá/Iansã resulta de diferentes tradições historiográficas e etnográficas.\n[…]\nPrandi aborda os mitos de Oyá como um corpus coerente, propondo uma “mitologia comparada dos orixás”. Sua análise destaca as funções simbólicas de Oiá (fogo, ventos, morte, mudança), organizando narrativas dispersas e produzindo acessibilidade didática.\n[…]\nMatory analisa Oyá/Iansã dentro das dinâmicas de poder e gênero no Candomblé contemporâneo. Para ele, a centralidade de Oiá no Brasil reflete processos transnacionais, disputas entre casas, circulação de conhecimento sacerdotal e agência feminina. Sua abordagem desloca Oyá do mito para a sociologia política do culto.\n[…]\nVerger, Pierre (1992). Orixás: Deuses iorubás na África e no Novo Mundo. Salvador: Corrupio"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Oxum",
      "descricao": "Orixá das águas doces, dos rios e cachoeiras, nas religiões afro-brasileiras."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Vaidosa e ligada ao ouro, a orixá Oxum costuma ser representada segurando qual objeto?",
    "resposta": "Um espelho",
    "distratores": [
      "Uma espada",
      "Um machado duplo",
      "Um arco e flecha"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Oxum"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Oxum",
        "situacao": "ok",
        "texto": "Oxum (em iorubá: Oṣun), na religião iorubá, é uma orixá que reina sobre as águas doces, considerada a senhora da beleza, da fertilidade, do dinheiro e da sensibilidade. Intimamente associada à riqueza espiritual e material, à vaidade e à capacitação da mulher, é representada por uma mulher africana elegante, adornada da cabeça aos pés com joias de ouro, sentada à beira de um rio, com um espelho re\n[…]\nÉ cultuada no Candomblé, na Umbanda e em diversas religiões afro-americanas. Oxum é dona do ouro e das pedras preciosas, e é cultuada como rainha da nação ijexá. Tem o título de ialodê (em iorubá: ìyálodè), ou seja, senhora da sociedade.\n[…]\nOxum é filha de Iemanjá e Oxalá. Oxum, Iansã e Obá eram esposas de Xangô. Ipondá é a mãe de Logunedé, orixá menino que compartilha dos seus axés. Ambos dançam ao som do ritmo ijexá, toque que recebe o nome de sua região de origem. Usa um abebé (espelho de metal)  nas mãos, uma alfange (adaga), por ser guerreira, e um ofá (arco e flecha) dourado, por sua ligação com Oxóssi. É uma das mais jovens.\n[…]\nNa Umbanda, o culto a Oxum apresenta poucas diferenças em relação à Religião iorubá e ao Candomblé.\n[…]\nNo Haiti, Oxum é a orixá do amor, do dinheiro e da felicidade. Também conhecida como Erzile ou Erzulie, Erzulie Freda no vodum.\n[…]\nTemplo de Oxum"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Saci",
      "descricao": "Personagem do folclore brasileiro, menino negro de uma perna só que usa um gorro vermelho e faz travessuras."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Segundo a crença popular, o saci passa sete anos dentro de um gomo de bambu. Depois disso, quantos anos ele vive?",
    "resposta": "Setenta e sete",
    "distratores": [
      "Sete",
      "Cem",
      "Trinta e três"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Saci"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Saci",
        "situacao": "ok",
        "texto": "Saci é um personagem bastante conhecido do folclore brasileiro. Tem sua origem presumida entre os indígenas da Região das Missões, no Sul do país, de onde teria se espalhado por todo o território brasileiro. A figura do saci surge como um ser maléfico, como somente brincalhão ou como gracioso, conforme as versões comuns ao sul.\n[…]\nAntes disso, em 1913, João Simões Lopes Neto havia incluído em Lendas do Sul um breve texto sobre o saci, no qual o descreve como \"um caboclinho, dum pé só, muito ajil, que saltava na garupa dos cavalos dos viajantes\"; outros, segundo o autor, diziam que o saci era apenas manco de um pé, que usava um barrete feito de marrequinhas (flores da corticeira) e que governava as moscas, as mutucas e os mosquitos.\n[…]\nNa música popular, a primeira referência ao personagem data de 1909, ano da composição de \"Saci-Pererê\", de Chiquinha Gonzaga, gravada pela dupla Os Geraldos. Em 1913, foi a vez de \"Saci\", uma polca de J.B. Nascimento gravada pelo Sexteto da Casa. Gastão Formenti também gravou duas músicas intituladas \"Saci-Pererê\": uma toada de Joubert de Carvalho, em 1918 e uma canção de J. Aimberê e Bide, em 1929.\n[…]\nEm 2005, foi instituído o Dia do Saci no Estado de São Paulo, a data também é celebrado em Vitória (Espírito Santo); Poços de Caldas(Minas Gerais) e Fortaleza(Ceará) comemorado no dia 31 de outubro, a fim de restaurar as figuras do folclore brasileiro, em contraposição a influências folclóricas estrangeiras, como o Dia das Bruxas. Apesar da iniciativa, a data acabou não se popularizando, e é frequentemente preterida em relação a data internacional.\n[…]\n«SOSACI - Sociedade dos Observadores de Saci»\n[…]\n«Caricatura de Monteiro Lobato e seus personagens: Narizinho, Emília, Saci-Pererê e o Visconde de Sabugosa - ilustração de Belmonte» 🔗"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Iara",
      "descricao": "Sereia do folclore brasileiro que vive nos rios e encanta pescadores com seu canto."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Antes de virar sereia, Iara era uma guerreira indígena. Segundo a lenda, por que o próprio pai a jogou no rio?",
    "resposta": "Ela matou os irmãos",
    "distratores": [
      "Fugiu com um pescador",
      "Desobedeceu ao pajé",
      "Roubou o fogo sagrado"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Iara_(mitologia)",
      "https://en.wikipedia.org/wiki/Iara_(mythology)"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Iara_(mitologia)",
        "situacao": "inexistente",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Iara_(mythology)",
        "situacao": "ok",
        "texto": "Iara, also spelled Uiara, Yara or Hiara (Portuguese pronunciation: [iˈaɾɐ], [wiˈaɾɐ], [ujˈaɾɐ]) or Mãe das Águas ([ˌmɐ̃j̃ dɐz ˈaɡwɐs], \"mother of the waters\"), is a figure from Brazilian mythology based on Tupi and Guaraní mythology.\n[…]\nOne of the beaches in the coast city of São Luís, Maranhão, the Olho D'Água beach is linked to the myth of Iara. The beach is said to be originated from the tears of a young indigenous woman who fell for an indigenous warrior. Iara seduced the warrior and took him away to her underwater realm. The heartbroken woman died and was buried in the sand, where two source \"eyes of water\" (olhos d'água, which name the beach) sprouted.\n[…]\nModernists poets also alluded to the iara. Cassiano Ricardo in Martim Cererê (1928) described her as \"a strange woman, very beautiful, very fair, like no other in the world: Green hair, yellow eyes. Her name was Uiara\". Mário de Andrade in Clã do Jabuti ('Clan of the Turtle', 1927) writes of a siren in the river, presumed to refer to the Mãe d'Água, as having \"hair of green river slime\" (limo verde do rio).\n[…]\nThe belief in Yoruba religion of the African immigrant influenced orisha, Iemanjá has been conflated with the Iara. One analysis contends that both Iara and Iemanjá share a common root origin as the purely indigenous Ipupiara.\n[…]\nIara (or Yara) is a very popular female name in Brazil.\n[…]\nIn the 2021 DC Comics' Wonder Girl comic book starring the future Brazilian Wonder Woman, Yara Flor, Iara was a great Brazilian warrior who was later transformed into a mermaid-like divine being as the protector of the sacred waters. It was she who bestowed on Yara Flor her characteristic weapon of power, the Golden Boleadoras."
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Lobisomem",
      "descricao": "Criatura lendária, homem que se transforma em lobo ou bicho peludo, presente no folclore brasileiro de origem europeia."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Segundo a crença popular brasileira, em que noite da semana, à meia-noite, o lobisomem se transforma e sai correndo pelos campos?",
    "resposta": "Sexta-feira",
    "distratores": [
      "Segunda-feira",
      "Sábado",
      "Domingo"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Lobisomem"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Lobisomem",
        "situacao": "ok",
        "texto": "Lobisomem ou Licantropo (do grego λυκάνθρωπος: λύκος, lýkos, \"lobo\" e άνθρωπος, ánthrōpos, \"humano\"), é um ser lendário que é descrito como um homem capaz de se transformar em lobo ou em algo semelhante a um lobo.\n[…]\nEm algumas regiões, o Lobisomem se transforma à meia noite de sexta-feira, em uma encruzilhada. Como o nome diz, é metade lobo, metade homem. Depois de transformado, sai à noite procurando sangue, matando ferozmente tudo que se move. Antes do amanhecer, ele procura a mesma encruzilhada para voltar a ser homem.\n[…]\nNo interior do estado de Rondônia, o lobisomem após se transformar, tem de atravessar correndo sete cemitérios até o amanhecer para voltar a ser humano. Caso contrário ficará em forma de besta até a morte.\n[…]\nO escritor brasileiro João Simões Lopes Neto escreveu assim sobre o lobisomem: \"Diziam que eram homens que havendo tido relações impuras com as suas comadres, emagreciam; todas as sextas-feiras, alta noite, saíam de suas casas transformados em cachorro ou em porco, e mordiam as pessoas que a tais desoras encontravam; estas, por sua vez, ficavam sujeitas a transformarem-se em Lobisomens…\"\n[…]\nNos seus estudos sobre mitologia popular, o escritor e etnógrafo português Alexandre Parafita reconhece que, embora a designação sugira tratar-se de um ser híbrido de homem e lobo, muitas das crenças sobre esta criatura identificam-na na figura tanto de lobo, como cavalo, burro ou bode, consistindo o seu fadário em ir despir-se à meia-noite numa encruzilhada, espojando-se no chão, onde um animal já antes fizera o mesmo, após o que se transforma nesse animal para ir “correr fado”.\n[…]\nPARAFITA, A. – O Maravilhoso Popular – Lendas. Contos. Mitos. , Lisboa, Plátano Editora, 2000"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Mula sem cabeça",
      "descricao": "Assombração do folclore brasileiro: uma mulher transformada em mula que solta fogo pelo pescoço."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Segundo a lenda, para desfazer o encanto da mula sem cabeça é preciso arrancar dela qual peça de ferro?",
    "resposta": "O freio",
    "distratores": [
      "A ferradura",
      "A sela",
      "O estribo"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Mula_sem_cabeça"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Mula_sem_cabeça",
        "situacao": "ok",
        "texto": "Mula sem cabeça é um personagem do folclore brasileiro. Segundo a crença popular, é uma assombração de uma mulher que foi amaldiçoada por ter tido relações amorosas com um padre. Como punição, ela foi condenada a transformar-se em uma mula sem cabeça, aterrorizando as pessoas.\n[…]\nCavaleiro sem cabeça\n[…]\nImagem da mula sem cabeça\n[…]\nA mula sem cabeça no programa de TV brasileiro Sítio do Picapau Amarelo\n[…]\n«Mythical Brazilian creatures,». Everything2.com (The Headless Mule, \"A Mula Sem-cabeça\", é um dos mitos brasileiros descritos)"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Boitatá",
      "descricao": "Ser do folclore brasileiro em forma de serpente de fogo que protege os campos contra quem os incendeia."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Para muitos estudiosos, a lenda do Boitatá nasceu de qual fenômeno natural, causado por gases de pântanos e cemitérios?",
    "resposta": "Fogo-fátuo",
    "distratores": [
      "Aurora boreal",
      "Fogo de santelmo",
      "Raio globular"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Boitatá",
      "https://pt.wikipedia.org/wiki/Fogo-fátuo"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Boitatá",
        "situacao": "ok",
        "texto": "Boitatá é um termo oriundo da língua tupi usado para designar, em todo o Brasil, o fenômeno do fogo-fátuo, e deste derivando algumas entidades míticas, das primeiras registradas no país.\n[…]\nNo folclore brasileiro, o Boitatá (Mboitatá) é uma gigantesca cobra-de-fogo, que assim como o Cobra-Grande é um terror que viva nas águas. É o guardião do campo servindo sob a Jaci (deusa geral dos vegetaes), u se transformar também numa tora em brasa, queimando aqueles que põem fogo nas campos, matas e florestas.\n[…]\nA origem deste mito está ligada a um fenômeno chamado fogo-fátuo. A decomposição de matéria orgânica, seja de vegetação ou animais mortos, libera gases que inflamam-se espontaneamente em contato com ar. Correntes de ar causadas pela passagem de uma pessoa nas proximidades podem deslocar as chamas fazendo com que pareçam uma cobra de fogo que a persegue.\n[…]\nO boitáta em Santa Catarina, descrito por Crispim Mira (1920), foi \"grande como um touro, com patas como a dos gigantes e com um enorme olho bem no meio da testa, a brilhar que nem um tição de fogo\".\n[…]\nApesar do tamanho gigante, a serpente é tão discreta, que só conseguem vê-la aqueles que ela mesmo captura”. Também João Simões Lopes Neto, em obra supramencionada, refere-se ao ser no feminino, valendo citar o trecho: “Foi assim e foi por isso que os homens, quando pela primeira vez viram a boiguaçu tão demudada, não a conheceram mais. Não conheceram e julgando que era outra, muito outra, chamam-na desde então, de boitatá, cobra do fogo, boitatá, a boitatá!”."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Fogo-fátuo",
        "situacao": "ok",
        "texto": "Fogo-fátuo (do latim i̅gnis fatuus), também chamado de fogo tolo ou, no interior do Brasil, fogo corredor, boitatá ou João-galafoice. No Alentejo Litoral, é conhecido por \"Luz da Carniceira\"/\"Luz da Caniceira\", sendo associado a uma lenda local. É uma luz azulada que pode ser avistada em pântanos, brejos, etc.\n[…]\nNa ciência moderna, é geralmente aceito que a maioria dos ignis fatuus são causados pela oxidação de fosfina (PH3), difosfano (P2H4) e metano (CH4) junto a ionização de suas moléculas, formando o plasma. Esses compostos, produzidos pela decomposição orgânica, podem causar emissões de fótons.\n[…]\nO fogo-fátuo chegou a ser descrito, ainda em 1560, pelo sacerdote jesuíta espanhol José de Anchieta: «Junto do mar e dos rios, não se vê outra coisa senão o boitatá, o facho cintilante de fogo que rapidamente acomete os índios e mata-os.»\n[…]\nA expressão também foi descrita por Fernando Pessoa em sua obra \"Mensagem\" (1934): \"Nem rei nem lei, nem paz nem guerra, Define com perfil e ser Este fulgor baço da terra Que é Portugal a entristecer — Brilho sem luz e sem arder, Como o que o fogo-fátuo encerra. Ninguém sabe que coisa quer. Ninguém conhece que alma tem, Nem o que é mal nem o que é bem. (Que ânsia distante perto chora?) Tudo é incerto e derradeiro. Tudo é disperso, nada é inteiro. Ó Portugal, hoje és nevoeiro... É a Hora!\"\n[…]\nBoitatá\n[…]\nFogo de santelmo"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Festa junina",
      "descricao": "Conjunto de festas populares de junho no Brasil em homenagem a Santo Antônio, São João e São Pedro."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Que cidade da Paraíba disputa com Caruaru, em Pernambuco, o título de maior São João do mundo?",
    "resposta": "Campina Grande",
    "distratores": [
      "João Pessoa",
      "Patos",
      "Sousa"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/O_Maior_São_João_do_Mundo",
      "https://pt.wikipedia.org/wiki/Campina_Grande"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/O_Maior_São_João_do_Mundo",
        "situacao": "ok",
        "texto": "São João de Campina Grande é um evento anual realizado pela prefeitura de Campina Grande, no estado brasileiro da Paraíba, durante o mês de junho. Na cultura do Nordeste brasileiro, é típico comemorar o dia de São João através de espetáculos, danças e quadrilhas. A festa dura 31 dias e é realizada em vários polos espalhados pelo município, e principalmente no Parque do Povo, chamado de \"o quartel-\n[…]\nO São João de Campina Grande é reconhecido pelo Instituto Ranking Brasil como a maior festa de São João do país.\n[…]\nEm cinco anos, o São João de Campina Grande já era uma festa de grande proporção pelo nome e pelo tempo de duração. Por isso, em 1987 o “Maior São João do Mundo” foi incluído no calendário oficial do Instituto Brasileiro de Turismo. Na época, o presidente da Embratur era João Dória Júnior.\n[…]\nA cidade cenográfica conta com réplica do Telegrapho, Cassino El Dourado, Cine Capitólio, a Catedral de Nossa Senhora da Conceição e a representação da Vila Nova da Rainha, onde surgiu a população que deu origem a Campina Grande.\n[…]\nO Parque do Povo é o epicentro dos festejos juninos em Campina Grande, considerado O Maior São João do Mundo. A festa atrai visitantes de todo o país e é um dos eventos mais importantes e aguardados do calendário cultural brasileiro. O parque tem 42 mil metros quadrados e abriga diversas atividades durante as festas juninas, como shows, apresentações culturais, barracas de comidas típicas, parques de diversão e muito mais.\n[…]\nGalante é um dos 6 distritos de Campina Grande, na Paraíba. Se localiza no extremo leste do município. Situa-se no Planalto da Borborema, em uma região de superfície de ondulações suaves e médias, com altitudes em torno de 605 metros. Nas festividades do Maior São João do Mundo, Galante recebe o Expresso Forrozeiro, um trem com 800 passageiros que parte da estação velha em Campina Grande em direção ao distrito."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Campina_Grande",
        "situacao": "ok",
        "texto": "Campina Grande é um município brasileiro no estado da Paraíba. Considerada um dos principais polos industriais da Região Nordeste e um dos maiores centros tecnológicos da América Latina, foi fundada em 1 de dezembro de 1697, tendo sido elevada à categoria de cidade em 11 de outubro de 1864. Pertence à Região Geográfica Imediata de Campina Grande e à Região Geográfica Intermediária de Campina Grand\n[…]\nO algodão no início do século XX foi para Campina Grande a principal atividade responsável pelo crescimento da cidade, atraindo comerciantes de todas as regiões da Paraíba e de todo o Nordeste. Até a década de 1940, Campina Grande era a segunda maior exportadora de algodão do mundo, atrás somente de Liverpool, na Inglaterra. Por isto, Campina Grande já foi chamada de a \"Liverpool brasileira\".\n[…]\nCampina Grande também é a sede do maior encontro de apologia cristã do mundo, o Encontro para a Consciência Cristã, que reúne milhares de pessoas das mais diversas denominações cristãs durante o carnaval, para debater temas ligados à fé, ética e sociedade. O evento foi incluído do calendário oficial da cidade em 2007 e no calendário turístico do Estado da Paraíba em 2015.\n[…]\nO Parque do Povo, onde é realizado O Maior São João do Mundo e o Encontro para a Consciência Cristã, possui uma área de 42 mil e 500 metros quadrados situada no centro de Campina Grande. É no Parque do Povo que se situa a \"Pirâmide do Parque do Povo\", que é a única área coberta do Parque, em formato de uma pirâmide.\n[…]\nMuseu Histórico e Geográfico de Campina Grande - Localiza-se no centro da cidade.\n[…]\nCampina Grande possui o maior colégio estadual de ensino médio da região como também o segundo maior colégio do estado da Paraíba, o Colégio Estadual da Prata (Colégio Estadual Dr. Elpídio de Almeida), fundado em 1954, com capacidade de mais de 3500 alunos, que beneficia não somente estudantes campinenses, mas de diversas cidades."
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Santo Antônio",
      "descricao": "Santo Antônio de Lisboa ou de Pádua, frade franciscano celebrado em 13 de junho e conhecido como santo casamenteiro."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Santo Antônio, o casamenteiro das festas de junho, nasceu em Lisboa. Em que cidade italiana ele morreu?",
    "resposta": "Pádua",
    "distratores": [
      "Assis",
      "Roma",
      "Florença"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/António_de_Lisboa",
      "https://en.wikipedia.org/wiki/Anthony_of_Padua"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/António_de_Lisboa",
        "situacao": "ok",
        "texto": "Santo António (português europeu) ou Antônio (português brasileiro) de Lisboa ou de Pádua, (Lisboa, 15 de agosto de 1195? — Pádua, 13 de junho de 1231) foi um Doutor da Igreja que viveu na viragem do século XII para o século XIII. Foi batizado com o nome de Fernando, mas o seu sobrenome de família é incerto, embora seja comum referir-se de Bulhões.\n[…]\nPosteriormente, quando a sua eloquência e cultura teológica se tornaram conhecidas, foi nomeado mestre de teologia em Bolonha, tendo, a seguir, pregado contra os albigenses e valdenses em diversas cidades do norte da Itália e no sul de França. Em seguida foi para Pádua, onde morreu aos 36 ou 40 anos.\n[…]\nSanto António é o padroeiro principal da cidade de Lisboa (São Vicente é o padroeiro do Patriarcado de Lisboa), sendo também o padroeiro secundário de Portugal (a padroeira principal é Nossa Senhora da Conceição). É igualmente padroeiro da cidade italiana de Pádua, como também, padroeiro da cidade de Campo Grande, capital do Mato Grosso do Sul.\n[…]\nPouco depois da Páscoa de 1231 sentiu-se mal e deixou Pádua para dirigir-se ao eremitério de Camposanpiero, nos arredores da cidade. Outras versões dizem que terá sido hospedado pelo conde Tiso, devido ao estado de saúde precário. Percebendo que a morte estava próxima, pediu para ser levado de volta a Pádua, mas quando chegou ao convento das clarissas de Arcella, subúrbio de Pádua, ali morreu, a 13 de junho de 1231.\n[…]\nO Santo António tem a devoção das noivas, Se o bendito Santo António / este ano me casar / cá voltarei para o ano / pôr flores no seu altar, e celebram-se casamentos na Sé. O manjericão enfeita o trono do Santo existente em cada bairro. Algumas fogueiras ainda se veem, resquícios das velhas festas dos solstícios que celebravam o sol.\n[…]\nBasílica de Santo Antônio de Pádua\n[…]\nMuseu de Santo António, em Lisboa"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Anthony_of_Padua",
        "situacao": "ok",
        "texto": "Anthony of Padua or Anthony of Lisbon (born Fernando Martins de Bulhões; 15 August 1195 – 13 June 1231) was a Portuguese Catholic priest and member of the Order of Friars Minor.\n[…]\nSt. Anthony gives his name to Mission San Antonio de Padua, the third Franciscan mission dedicated along El Camino Real in California in 1771.\n[…]\nIn 1511, Titian painted three large frescoes in the Scuola del Santo in Padua, depicting scenes of the miracles from the life of Saint Anthony: The Miracle of the Jealous Husband, which depicts the murder of a young woman by her husband; A Child Testifying to Its Mother's Innocence; and The Saint Healing the Young Man with a Broken Limb.\n[…]\nThe Austrian composer Gustav Mahler's song cycle Des Knaben Wunderhorn contains the song Des Antonius von Padua Fischpredigt, whose lyrics recount the story of Saint Anthony's sermon to the fish. This song later formed the basis for the scherzo movement of Mahler's Symphony No. 2. In correspondence, Mahler expressed amusement that his sinuous musical setting could imply St. Anthony of Padua was himself drunk as he preached to the fish.\n[…]\nThe 1931 silent film Saint Anthony of Padua (Antonio di Padova, il santo dei miracoli) was directed by Giulio Antamoro.\n[…]\nHe was played in the 1949 Italian film Anthony of Padua by Aldo Fiorelli.\n[…]\nUmberto Marino's 2002 Sant'Antonio di Padova or Saint Anthony: The Miracle Worker of Padua is an Italian TV movie about the saint. While the VHS format is without English subtitles, the DVD version released in 2005 is simply called Saint Anthony and is subtitled.\n[…]\n\"Saint Anthony of Padua\" at the Christian Iconography website\n[…]\n\"St Anthony of Padua – St Peter's Square Colonnade Saints\""
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Bumba meu boi",
      "descricao": "Folguedo popular brasileiro, muito forte no Maranhão, que encena a morte e a ressurreição de um boi."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "No Maranhão, os grupos de bumba meu boi se dividem em estilos chamados sotaques, como o de matraca e o de orquestra. Quantos são os sotaques tradicionais?",
    "resposta": "Cinco",
    "distratores": [
      "Três",
      "Sete",
      "Dez"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Bumba_meu_boi"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Bumba_meu_boi",
        "situacao": "ok",
        "texto": "Bumba meu boi, boi-bumbá ou búfalo-bumbá é uma festa do folclore popular brasileiro, com personagens humanos e animais fantásticos, que gira em torno de uma lenda sobre a morte e ressurreição de um boi.\n[…]\nEm Pernambuco é chamado boi-calemba ou bumbá; no Maranhão, Rio Grande do Norte, Alagoas e Piauí é chamado bumba meu boi; no Ceará, é boi de reis, boi-surubim e boi-zumbi; na Bahia é boi-janeiro, boi-estrela-do-mar e mulinha-de-ouro; em Minas Gerais e no Rio de Janeiro é bumba ou folguedo-do-boi; no Espírito Santo é boi de reis; em São Paulo é boi de jacá e dança-do-boi; no Pará, Rondônia e Amazonas é boi-bumbá; no Paraná e em Santa Catarina é boi-de-mourão ou boi-de-mamão; e no Rio Grande do Sul é bumba, boizinho ou boi-mamão.\n[…]\nOutro registro ocorre num jornal denominado \"O carapuceiro\", em Recife, Pernambuco, no ano de 1840.Mas, é no estado do Maranhão que o bumba meu boi tem sido mais valorizado em todo o Nordeste e, dali, foi exportado para o estado do Amazonas com o nome de boi-bumbá, visitado anualmente por milhares de turistas que vão conhecer o famoso Festival Folclórico de Parintins, realizado desde 1965.\n[…]\nO Búfalo-Bumbá de Mestre Damasceno é uma manifestação cultural que acontece todos os anos na cidade de Salvaterra, na Ilha de Marajó, estado do Pará. A manifestação popular surgiu em 1973, quando Mestre Damasceno colocou o 1º Boi-Bumbá da carreira, chamado “Estrela de Ouro”. Desde então, muitos outros bois-bumbás vieram, entre nascimentos, batizados, mortes, ressurreições e retornos de bois fugidos.\n[…]\nBumba meu boi do Maranhão\n[…]\nCARVALHO, Maria Michol Pinho de. 1995. Matracas que desafiam o tempo: é o bumba-boi do Maranhão. São Luís: s/e.\n[…]\n«Ritmos do Maranhão» [ligação inativa]"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Festival Folclórico de Parintins",
      "descricao": "Festa anual de bois-bumbás realizada em Parintins, no Amazonas, com a disputa entre os bois Garantido e Caprichoso."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "No fim de junho, o Festival de Parintins põe frente a frente os bois Garantido e Caprichoso. Por quantas noites dura a disputa?",
    "resposta": "Três",
    "distratores": [
      "Duas",
      "Cinco",
      "Sete"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Festival_Folclórico_de_Parintins"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Festival_Folclórico_de_Parintins",
        "situacao": "ok",
        "texto": "O Festival Folclórico de Parintins é uma festa popular brasileira criada em 1965 no município de Parintins, interior do estado do Amazonas, sendo o maior festival folclórico a céu aberto do mundo. O festival é reconhecido como Patrimônio Cultural do Brasil pelo Instituto do Patrimônio Histórico e Artístico Nacional (IPHAN). O atual campeão é o Boi-Bumbá Caprichoso, vencendo a edição de 2026.\n[…]\nAo longo de sua história, o Festival Folclórico de Parintins teve 59 edições. As apresentações, que começam na última sexta-feira do mês de junho e vão até o domingo, simbolizam uma disputa a céu aberto entre duas agremiações folclóricas, a do Boi Caprichoso (azul)  e a do Boi Garantido (vermelho), que acontece no Centro Cultural de Parintins — mais conhecido como Bumbódromo, com capacidade para 35 mil espectadores.\n[…]\nA primeira edição do Festival Folclórico a ser transmitido ao vivo foi em 1994, pela TV Amazonas, afiliada da Rede Globo. Este contrato vigorou até 1999. No ano seguinte, a transmissão passou a TV A Crítica, então afiliada ao SBT. À época, foi firmado um contrato de três anos entre os bois e a emissora, por um valor de R$ 1,2 milhão. Em 2001, o vínculo foi estendido até 2007.\n[…]\nDevido à essa zona de influência que expandiu o festival, há componentes dos bois oriundos de diversas cidades dentro dessas regiões. Podemos citar um exemplo de cada agremiação: Marciele Albuquerque, a cunhã-poranga do Caprichoso, é natural de Juruti, no Pará (onde ocorre o Festribal, com larga influência de Parintins) e vivia em Manaus; e Valentina Coimbra, sinhazinha do Garantido, é natural de Santarém, também no Pará, onde disputava o \"Festival dos Botos\" de Alter do Chão.\n[…]\n1966: Primeira participação conjunta dos bois Caprichoso e Garantido no festival com disputa oficial, com o Garantido sendo o primeiro campeão do Festival de Parintins;\n[…]\nSite do Festival 2027\n[…]\nSite do Festival 2026"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Festival Folclórico de Parintins",
      "descricao": "Festa anual de bois-bumbás realizada em Parintins, no Amazonas, com a disputa entre os bois Garantido e Caprichoso."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Em Parintins, o boi Garantido traz um coração na testa. Que símbolo leva na testa o Caprichoso, seu rival azul?",
    "resposta": "Uma estrela",
    "distratores": [
      "Uma lua",
      "Uma cruz",
      "Um sol"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Boi_Caprichoso",
      "https://pt.wikipedia.org/wiki/Boi_Garantido"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Boi_Caprichoso",
        "situacao": "ok",
        "texto": "O Boi Caprichoso, cujo nome completo em razão social é Associação Cultural Boi-Bumbá Caprichoso, é uma das duas agremiações culturais que competem no Festival Folclórico de Parintins, um dos mais importantes festivais populares e culturais do Brasil. As cores oficiais do Caprichoso são o azul e o branco, embora seja conhecido como \"touro negro\" por conta da sua representação ser um touro de pelos \n[…]\nDe lá para cá, o Boi Caprichoso ganhou os quintais e as ruas, sempre brincando e alegrando gente pobre, negra, indígena e ribeirinha, refletida na estrela azul e branca da testa do Boi Negro da Ilha, lindo e popular.\n[…]\nEm 1967, com a participação dos bois no Festival Folclórico de Parintins, o Caprichoso é aclamado pelo público como o melhor boi na saída de São João. O Boi Caprichoso reconhece esse momento como sua primeira vitória, marco que simboliza o início das disputas entre os bois e de sua trajetória de conquistas no Festival.\n[…]\nEntre 1976 e 1979, o Caprichoso conquista quatro títulos consecutivos, estabelecendo uma sequência de vitórias que o torna o primeiro tetracampeão da história do Festival Folclórico de Parintins. As conquistas de 1976, 1977, 1978 e 1979 consolidam uma das primeiras grandes hegemonias do boi azul na competição.\n[…]\nEssa narrativa passou a ser amplamente difundida a partir das comemorações do centenário da agremiação e é atualmente reconhecida pelas instituições ligadas ao Festival de Parintins.\n[…]\nRealizado a 30 anos, o Bar do Boi é um tradicional evento do Boi Caprichoso em Manaus, promovido pelo Movimento Marujada e é considerado vitrine do Festival Folclórico de Parintins para o Brasil e o mundo. É um grande show realizado com a presença de todos os itens, bandas e grupos de danças do Boi e atrai um grande público.\n[…]\n«Página oficial do Boi Caprichoso»"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Boi_Garantido",
        "situacao": "ok",
        "texto": "O Boi Garantido, cuja razão social é Associação Folclórica Boi-Bumbá Garantido, é uma associação cultural e popular conhecida como boi folclórico, que participa do Festival Folclórico de Parintins. Se caracteriza por ter como cores principais o vermelho e o branco, sendo esta última cor representada na pelagem do touro que identifica a agremiação, este apresentando um símbolo de coração vermelho n\n[…]\nA brincadeira foi evoluindo e, em 1965, aconteceu o primeiro Festival Folclórico de Parintins, mas não houve participação dos Bumbás. A primeira disputa veio no segundo Festival, quando o Boi Garantido enfrentou o Contrário, vencendo, sagrando-se o primeiro campeão do Festival Folclórico de Parintins.\n[…]\nO tema do 58º Festival Folclórico de Parintins, foi anunciado em 11 de outubro e terá como título o famoso bordão criado por Paulinho Faria nos anos 80:  \"Boi do Povo, Boi do Povão\".Em 19 de fevereiro, a diretoria anunciou a despedida de Edilene Tavares e David Assayag dos cargos de Rainha do Folclore e Levantador de Toadas, respectivamente.\n[…]\nA nova rainha do folclore se tornou Lívia Christina e para porta-estandarte Jeveny Mendonça.No dia 21 de junho, ocorreu o sorteio da ordem de apresentação dos bumbás, onde foi acordado que o Garantido faria a abertura e o encerramento do festival. Em 26 de junho, um dia antes do festival, a agremiação apresentou em coletiva de imprensa o projeto de arena e os subtemas dos três dias de apresentação, sendo estes: \"Somos os Povos da Amazônia\", \"Terra Brasileira\" e \"Boi do Brasil\".\n[…]\nSouza, Luciano Souza de (2023). Ritual indígena Karõ Krahó : uma análise da produção imagética no Festival Folclórico de Parintins (2022) (Dissertação de Mestrado). Porto Alegre: Universidade Federal do Rio Grande do Sul. 127 páginas. Cópia arquivada em 18 de janeiro de 2026\n[…]\nBoi Garantido no Twitter\n[…]\nBatucada do Garantido no Instagram\n[…]\nComando Garantido no Instagram"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Carnaval",
      "descricao": "Festa popular brasileira que precede a Quaresma, com desfiles de escolas de samba e blocos."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "A palavra carnaval vem do latim e lembra o jejum que vem depois da festa, na Quaresma. A que ela se refere?",
    "resposta": "Adeus à carne",
    "distratores": [
      "Festa dos carros",
      "Dança do povo",
      "Banquete dos deuses"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Carnaval",
      "https://en.wikipedia.org/wiki/Carnival"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Carnaval",
        "situacao": "ok",
        "texto": "Carnaval é um festival do cristianismo ocidental que ocorre antes da estação litúrgica da Quaresma. Os principais eventos ocorrem tipicamente durante fevereiro ou início de março, durante o período historicamente conhecido como Tempo da Septuagésima (ou pré-quaresma). O Carnaval normalmente envolve uma festa pública e/ou desfile, combinando alguns elementos circenses, máscaras e uma festa pública \n[…]\nO consumo excessivo de álcool, de carne e outros alimentos proscritos durante a Quaresma é extremamente comum. Outras características comuns do carnaval incluem batalhas simuladas, como lutas de alimentos; sátira social e zombaria das autoridades e uma inversão geral das regras e normas do dia à dia.\n[…]\nAs etimologias populares afirmam que a palavra vem da expressão do latim tardio carne vale, que significa \"adeus à carne\", simbolizando o período de jejum que se aproxima. No entanto, esta interpretação não é apoiada por filológos.\n[…]\nA expressão carne levare, do italiano, é uma possível origem, que significa \"remover a carne\", uma vez que a carne é proibida durante a Quaresma.\n[…]\nOs gauleses tinham festas análogas, especialmente a grande festa do inverno, marcada pelo adeus à carne, visto que, a partir dela, se fazia um grande período de abstinência e jejum, como o seu próprio nome em latim \"carnis levale\" o indica.\n[…]\nO período quaresmal do calendário litúrgico, as seis semanas imediatamente anteriores à Páscoa, era historicamente marcado pelo jejum, estudo e outras práticas piedosas ou penitenciais. Durante a Quaresma, não haviam festas ou celebrações, e as pessoas se abstinham de comer alimentos ricos, como carne, laticínios, gordura e açúcar. As primeiras três classes eram muitas vezes totalmente indisponíveis durante o final do inverno.\n[…]\nCarnaval do Brasil\n[…]\nPortal Oficial do Carnaval do Rio de Janeiro\n[…]\nPortal de Carnaval no Brasil\n[…]\nPróximas Datas e Informações do Carnaval no Brasil"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Carnival",
        "situacao": "ok",
        "texto": "Carnival (known as Shrovetide in certain localities) is a festive season at the close of the Christian pre-Lenten period, consisting of Quinquagesima or Shrove Sunday, Shrove Monday, and Shrove Tuesday or Mardi Gras.\n[…]\nThe word carnival is said to come from the Late Latin expression carne levare, which means \"remove meat\"; a folk etymology derives it from carne vale, \"farewell to meat\". In either case, this signifies the approaching fast of Lent. The word carne may also be translated as flesh, producing \"a farewell to the flesh\", a phrase embraced by certain Carnival celebrants to embolden the festival's carefree spirit.\n[…]\n\"Al aproximarse la cuaresma el indio de Tayabas se prepara á despedirse de comer carne, con las fiestas de lapasan, las que siempre se celebran en las sementeras. Si los que las dan son ricos, asiste la música; si no lo son, la guitarra, las voces y las palmas la sustituyen.\n[…]\nCarnival is Carnaval in Portugal, celebrated throughout the country, most famously in Ovar, Sesimbra, Madeira, Loulé, Nazaré, Mealhada, and Torres Vedras. Carnaval in Podence and Lazarim incorporates pagan traditions such as the careto, while the Torres Vedras celebration is probably the most typical.\n[…]\nCarnaval de Solsona takes place in Solsona, Lleida. It is one of the longest; free events in the streets and nightly concerts run for more than a week. The Carnival is known for a legend that explains how a donkey was hung at the tower bell − because the animal wanted to eat grass that grew on the top of the tower. To celebrate this legend, locals hang a stuffed donkey at the tower that \"pisses\" above the excited crowd using a water pump."
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Carnaval",
      "descricao": "Festa popular brasileira que precede a Quaresma, com desfiles de escolas de samba e blocos."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "A data do carnaval muda todo ano porque depende da Páscoa. A terça-feira de carnaval cai sempre quantos dias antes do domingo de Páscoa?",
    "resposta": "Quarenta e sete",
    "distratores": [
      "Quarenta",
      "Quarenta e seis",
      "Cinquenta"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Carnaval",
      "https://en.wikipedia.org/wiki/Carnival"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Carnaval",
        "situacao": "ok",
        "texto": "Carnaval é um festival do cristianismo ocidental que ocorre antes da estação litúrgica da Quaresma. Os principais eventos ocorrem tipicamente durante fevereiro ou início de março, durante o período historicamente conhecido como Tempo da Septuagésima (ou pré-quaresma). O Carnaval normalmente envolve uma festa pública e/ou desfile, combinando alguns elementos circenses, máscaras e uma festa pública \n[…]\nO Carnaval ocorre 47 dias antes da Páscoa, em fevereiro, geralmente, ou em março. Conforme o Cálculo da Páscoa, ocorre próximo do dia de Lua Nova.\n[…]\nTodas as datas eclesiásticas são calculadas em função da data da Páscoa, com exceção do Natal. Como o Domingo de Páscoa ocorre no primeiro domingo após a primeira lua cheia que se verificar a partir do equinócio da primavera (no hemisfério norte) ou do equinócio do outono (no hemisfério sul), e a Sexta-feira da Paixão é a que antecede o Domingo de Páscoa, então a Terça-feira de Carnaval ocorre 47 dias antes da Páscoa.\n[…]\nA celebração em São Nicolau é mais tradicional, onde os grupos estabelecidos desfilar pela Ribeira Brava, reunindo-se na praça da cidade, embora tenha adotado tambores, carros alegóricos e trajes do Brasil. Em São Nicolau, três grupos, Copa Cabana, Estrela Azul e Brilho Da Zona, constroem um flutuador pintado com fogo, jornal para o molde e ferro e aço para estrutura. Carnaval São Nicolau é comemorado em três dias: amanhecer sábado, domingo à tarde e terça-feira.\n[…]\nNa ilha da Madeira, a capital da ilha, o Funchal, acorda na sexta-feira, antes da Quarta-Feira de Cinzas, ao som de bandas de música e desfiles de Carnaval no centro da cidade. As festividades continuam com concertos e shows na Praça do Município por cinco dias consecutivos. O desfile principal de Carnaval acontece no sábado à noite, com milhares de sambistas encheram as ruas. O tradicional evento de rua acontece na terça-feira, apresentando caricaturas ousadas."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Carnival",
        "situacao": "ok",
        "texto": "Carnival (known as Shrovetide in certain localities) is a festive season at the close of the Christian pre-Lenten period, consisting of Quinquagesima or Shrove Sunday, Shrove Monday, and Shrove Tuesday or Mardi Gras.\n[…]\nIn Mexico, Carnaval is celebrated in about 225 cities and towns. The largest are in Mazatlán and the city of Veracruz, with others in Baja California and Yucatán. The larger city Carnavals employ costumes, elected queens, and parades with floats, but Carnaval celebrations in smaller and rural areas vary widely depending on the level of European influence during Mexico's colonial period.\n[…]\nThe Helsinki Samba Carnaval, modelled after the samba carnivals in Brazil, takes place every year in middle June. The carnival lacks a proper historical tradition and has instead mostly grown from experimenting.\n[…]\nThe Lazarim Carnaval cycle encompasses two periods, the first starting on the fifth Sunday before Quinquagesima Sunday. Masked figures and people wearing large sculpted heads walk through the town. The locals feast on meats, above all pork. The second cycle, held on Sundays preceding Ash Wednesday, incorporates the tradition of the Compadres and Comadres, with men and women displaying light-hearted authority over the other.\n[…]\nCarnaval de Solsona takes place in Solsona, Lleida. It is one of the longest; free events in the streets and nightly concerts run for more than a week. The Carnival is known for a legend that explains how a donkey was hung at the tower bell − because the animal wanted to eat grass that grew on the top of the tower. To celebrate this legend, locals hang a stuffed donkey at the tower that \"pisses\" above the excited crowd using a water pump."
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Escola de samba",
      "descricao": "Agremiação carnavalesca brasileira que desfila com enredo, alas, bateria, mestre-sala e porta-bandeira."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Conta-se que as escolas de samba ganharam esse nome porque os sambistas do Estácio, no Rio, se reuniam perto de que tipo de escola?",
    "resposta": "Uma Escola Normal",
    "distratores": [
      "Uma escola militar",
      "Uma escola de música",
      "Uma escola de belas-artes"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Escola_de_samba",
      "https://pt.wikipedia.org/wiki/Deixa_Falar"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Escola_de_samba",
        "situacao": "ok",
        "texto": "Escola de samba é um tipo de agremiação de cunho popular que se caracteriza pelo canto e dança do samba, quase sempre com intuito competitivo.\n[…]\nJá os sambistas do Estácio, com a fundação da Deixa Falar em 1928, organizaram as bases das atuais escolas de samba. Entre eles Ismael Silva, na sua ideia de criar um bloco carnavalesco diferente, que pudesse dançar e evoluir ao som do samba.\n[…]\nAtualmente, desde pelo menos os anos 1990, as escolas do Grupo Especial do Rio costumam desfilar com três ou quatro casais de mestre-sala e porta-bandeira, mas apenas o primeiro deles é avaliado, sendo os outros dois ou três apenas decorativos, e opcionais. Normalmente, existem para representar a escola em determinados eventos, quando o casal principal não puder comparecer. Um desses casais pode ser formado por crianças ou adolescentes, sendo assim denominado \"casal mirim\".\n[…]\nÉ o profissional responsável pelo andamento do samba-enredo durante o desfile, normalmente auxiliado por um grupo de cantores de apoio, que desfilam ao lado ou sobre o carro de som. Portando microfone, normalmente mais potente do que o dos cantores de apoio, sua voz sobressai sobre os demais integrantes da escola, fazendo com que assim seu objetivo de cadenciar o canto possa ser cumprido.\n[…]\nO livro infantil A Rainha de Bateria, de Martinho da Vila (2009), conta a história de uma menina que mora perto de uma quadra de escola de e se torna rainha de bateria.\n[…]\nO romance Desde que o samba é samba, do escritor carioca Paulo Lins (2012), conta sobre a criação da primeira escola de samba no Estácio, nos anos 1920.\n[…]\nEscola de samba virtual\n[…]\n«Escolas de Samba do interior do Brasil»"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Deixa_Falar",
        "situacao": "ok",
        "texto": "Deixa Falar foi uma agremiação carnavalesca brasileira, com sede no Rio de Janeiro. É considerada a primeira escola de samba a existir, além de ter sido a entidade criadora do termo. Ainda que a Portela, por exemplo, tenha sido fundada anteriormente, a Deixa Falar é considerada a escola de samba pioneira por ter lançado as bases do que seria uma escola de samba.\n[…]\nFundada em 12 de agosto de 1928, na Rua do Estácio, nº 27 (esquina com Rua Maia de Lacerda), na casa de Chystalino, sargento da polícia e pai do sambista Biju, a escola tinha entre seus grandes nomes o sambista Ismael Silva, que foi quem lhe batizou.\n[…]\nNas imediações da sede da escola, no Largo do Estácio, funcionava a Escola Normal, daí, segundo Ismael, veio a analogia criada por ele, pois sua agremiação formaria professores de samba. Esta versão, entretanto, é contestada por pesquisadores contemporâneos que detectaram a utilização do termo \"escola de samba\" em data anterior a 1928.[carece de fontes]?\n[…]\nTrês grupos de sambistas - ou seja, as \"escolas de samba\" - se apresentaram: o Conjunto Oswaldo Cruz, o Bloco Carnavalesco Estação Primeira, e a Deixa Falar, que acabou desclassificada por apresentar instrumentos de sopro.\n[…]\nAinda em 1929, Bide, sambista da escola, participou da gravação de \"Na Pavuna\", a primeira gravação em disco em que foram usados os instrumentos típicos das escolas de samba - sem banda ou orquestra para fazer a base - usando a marcação típica de escola de samba. Foram membros do Deixa Falar que introduziram ao samba a cuíca e que inventaram o surdo.\n[…]\nEm 1980 a escola de samba Estácio de Sá, ainda com o nome de Unidos de São Carlos desfilou no grupo principal com o enredo \"Deixa Falar\", em homenagem à escola pioneira. Em 2010 a mesma escola de samba desfilou no grupo de acesso com o enredo \"Deixa Falar, a Estácio é isso aí. Eu visto esse manto e vou por aí\"."
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Galo da Madrugada",
      "descricao": "Bloco de carnaval do Recife, fundado em 1978, cujo símbolo é um galo gigante."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Em que dia do carnaval o bloco Galo da Madrugada arrasta sua multidão pelas ruas do centro do Recife?",
    "resposta": "Sábado de carnaval",
    "distratores": [
      "Domingo de carnaval",
      "Segunda de carnaval",
      "Terça de carnaval"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Galo_da_Madrugada"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Galo_da_Madrugada",
        "situacao": "ok",
        "texto": "O Galo da Madrugada é um tradicional bloco carnavalesco, considerado o maior do mundo, que desfila durante o carnaval do Recife, saindo no sábado de carnaval e marcando a abertura do mesmo. Desde o seu desfile inaugural, o Galo, como também é conhecido, ganhou enorme adesão de foliões desfile após desfile, e desde 1994, passou a ser considerado o maior bloco de carnaval do mundo, segundo o Guinnes\n[…]\nNo intuito de reviver os antigos carnavais de rua, um grupo de amigos, liderados por Enéas Freire, criaram no final de 1977, o Clube de Máscaras O Galo da Madrugada, que teve o seu primeiro desfile no dia 23 de janeiro de 1978, às 5h da madrugada nas ruas do bairro de São José, no Recife, e reunindo 75 foliões. Em 1979, o número de foliões subiu para 350, número que continuou a crescer nos anos seguintes. Em 1991, o número de foliões ultrapassava um milhão.\n[…]\nBairros do centro histórico do Recife, na Ilha de Antônio Vaz (São José e Santo Antônio), são tomados pela multidão. O trajeto do Galo começa em frente ao Forte das Cinco Pontas e segue o seguinte percurso:\n[…]\nA movimentação de pessoas no centro do Recife no sábado de carnaval do Galo da Madrugada dura todo o dia. Os foliões começam a chegar de manhã — por volta das 7 horas da manhã — e o bloco tem sua saída oficial pontualmente as 9 horas; os trios elétricos tocam até o fim da tarde. No início da noite, é comum que muitos foliões sigam direto para o polo central do carnaval do Recife na praça do Marco Zero no bairro vizinho.\n[…]\nUm ano após a fundação daquele que viria a ser o maior bloco de carnaval do mundo, a diretoria do clube sentiu a necessidade de criar uma música própria cuja letra transmitisse ao folião a mensagem principal do Galo: convocar a todos, como num canto matinal, a participarem da folia que voltara às ruas do Recife.\n[…]\n«História do Galo da Madrugada»\n[…]\n«Fotos do Galo da Madrugada»\n[…]\n«Programação Galo da Madrugada»"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Bonecos de Olinda",
      "descricao": "Bonecos gigantes do carnaval de Olinda, em Pernambuco."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Criado em 1932, que famoso boneco gigante de Olinda tem esse nome por sair às ruas exatamente quando começa o domingo de carnaval?",
    "resposta": "Homem da Meia-Noite",
    "distratores": [
      "Mulher do Dia",
      "Menino da Tarde",
      "Zé Pereira"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Bonecos_de_Olinda",
      "https://pt.wikipedia.org/wiki/Homem_da_Meia-Noite"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Bonecos_de_Olinda",
        "situacao": "ok",
        "texto": "Bonecos de Olinda são bonecos gigantes originados na cidade de  Olinda e usados em eventos festivos como o Carnaval de Pernambuco. São feitos de tecido, isopor, papel, madeira, fibra de vidro e alumínio.\n[…]\nOs bonecos gigantes surgiram na Europa e em Portugal por volta da Idade Média, onde eram utilizados em procissões em forma de santos católicos. Eles chegam a Pernambuco através da pequena cidade de Belém do São Francisco, no sertão do estado, com a vinda de um padre belga que levou ao conhecimento de seus discípulos esta tradição europeia, sendo desta cidade a origem a criação do primeiro boneco gigante do Brasil em 1919, Zé Pereira, e em seguida, Vitalina.\n[…]\nA tradição dos bonecos gigantes iniciada em Belém do São Francisco ganhou as ladeiras de Olinda em 1931, com a criação do boneco Homem da Meia Noite. Daí em diante se popularizou a tradição do Encontro dos Bonecos Gigantes, onde vários deles se encontram no sitio histórico de Olinda, durante o período de carnaval. No início de 2007, o empresário cultural Leandro Castro criou a nova geração de Bonecos Gigantes juntamente com sua equipe de artistas.\n[…]\nOs bonecos da nova geração fazem a alegria dos foliões em Olinda no principal desfile de carnaval e em Recife saindo no sitio histórico do Recife Antigo também no período de carnaval. Em Recife os bonecos permanecem em exposição o ano inteiro na Embaixada de Pernambuco - Bonecos Gigantes de Olinda localizada na Rua Bom Jesus, 183 no Recife Antigo.O acervo da Embaixada atualmente ultrapassa mais de 340 bonecos.\n[…]\nCarnaval de Olinda\n[…]\nCarnaval do Recife\n[…]\nGigantones"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Homem_da_Meia-Noite",
        "situacao": "inexistente",
        "texto": ""
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Trio elétrico",
      "descricao": "Caminhão com equipamento de som e músicos que arrasta foliões no carnaval, criado em Salvador."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Em 1951, o carro elétrico de Dodô e Osmar passou a ser chamado de trio. De onde veio essa palavra?",
    "resposta": "Eram três músicos",
    "distratores": [
      "Tinha três alto-falantes",
      "Eram três carros",
      "Tocava três ritmos"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Trio_elétrico"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Trio_elétrico",
        "situacao": "ok",
        "texto": "No entretenimento, o trio elétrico é um veículo adaptado com aparelhos de sonorização e alto-falantes, para a apresentação de música ao vivo ao ar livre, criado na cidade brasileira de Salvador (estado da Bahia) em 1950, pelos músicos Dodô e Osmar Macedo. Através das caixas amplificadoras com alto-falantes, normalmente montados em um caminhão/carreta, são normalmente emitidos as músicas dos gênero\n[…]\nVendo a animação com que o público reagira ao frevo e para suprir a frustração provocada pela interrupção do desfile, os músicos Dodô e Osmar Macedo, adaptaram um veículo Ford 1929, ligando à bateria do automóvel a um violão e um protótipo de guitarra, criando assim a \"fobica\", que mais tarde seria reconhecida como o primeiro trio elétrico do mundo. A dupla elétrica Dodô e Osmar saiu pelas ruas executando o ritmo recifense.\n[…]\nNo ano seguinte trocaram de carro por uma pick-up Chrysler Fargo e adicionaram um triolim (guitarra tenor) tocado pelo músico Temístocles Aragão formando, assim, o \"trio elétrico\"; em 1952 mais inovações foram introduzidas, formando um total de oito alto-falantes, geradores adicionais, e receberam o apoio da fábrica baiana de refrigerantes Fratelli Vita; em 1953 a invenção foi copiada por outros grupos (\"5 Irmãos\", \"Ipiranga\" e \"Conjunto Atlas\") e o conceito do \"Trio Elétrico\" consagrou-se.\n[…]\nEmbora o crescimento do trio tenha permitido a criação de uma nova indústria de relativa importância na Bahia, sua essência permanece na relação entre o artista e o folião; a este respeito Betinho, músico filho de Osmar Macedo, declarou: \"Quando a gente está tocando em cima do trio e vê aquele negão pulando lá embaixo... De repente, o negão pensa que você está tocando para ele dançar, mas não é. Ele é que está dançando para você tocar.\n[…]\n50 anos do trio elétrico - Fred de Góes, Editora Corrupio, 2000, ISBN 8586551082, 168 pág."
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Lavagem do Bonfim",
      "descricao": "Festa popular de Salvador em que baianas lavam as escadarias da Igreja do Senhor do Bonfim com água perfumada."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "O cortejo da Lavagem do Bonfim, com baianas e seus potes de água de cheiro, sai de qual igreja de Salvador?",
    "resposta": "Igreja da Conceição da Praia",
    "distratores": [
      "Igreja de São Francisco",
      "Catedral Basílica",
      "Rosário dos Pretos"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Lavagem_do_Bonfim"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Lavagem_do_Bonfim",
        "situacao": "ok",
        "texto": "A Lavagem do Bonfim é uma celebração inter-religiosa que tem lugar em Salvador da Bahia, Brasil. Acontece na quinta-feira que antecede o segundo domingo após o Dia de Reis, no mês de janeiro.\n[…]\nNeste período também ocorre o novenário solene e exposição do Santíssimo Sacramento, interrompido apenas no dia da Lavagem, quando ocorre o cortejo entre a Igreja da Conceição da Praia e a Igreja do Bonfim, havendo a exposição de uma pequena imagem do Senhor do Bonfim pelo capelão da Igreja do Bonfim na fachada do templo, com uma bênção especial a todos os presentes. A Lavagem é um \"Símbolo do sincretismo religioso da Bahia\"\n[…]\nPosteriormente, para os adeptos do candomblé, a lavagem da igreja do Senhor do Bonfim passou a ser parte da cerimônia das Águas de Oxalá. A Arquidiocese de Salvador, então, proibiu a lavagem na parte interna do templo e transferiu o ritual para as escadarias e o adro.\n[…]\nA lavagem festiva acontece com a saída, pela manhã da quinta-feira, do tradicional cortejo de baianas da Igreja de Nossa Senhora da Conceição da Praia, o qual segue a pé até o alto do Bonfim, para lavar com vassouras e água de cheiro as escadarias e o átrio da Igreja do Nosso Senhor do Bonfim.\n[…]\nTodos se vestem de branco, a cor do orixá, e percorrem 8 quilômetros em procissão, desde o largo da Conceição até o largo do Bonfim. O ponto alto da festa ocorre quando as escadarias da igreja são lavadas por cerca de 200 baianas vestidas a caráter que, de suas \"quartinhas\" — vasos, que trazem aos ombros — despejam água nas escadarias e no átrio da igreja, ao som de palmas, toque de atabaque e cânticos de origem africana.\n[…]\nFesta do Bonfim, no site da Fundação Gregório de Mattos"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Círio de Nazaré",
      "descricao": "Grande procissão católica em honra de Nossa Senhora de Nazaré realizada em Belém do Pará em outubro."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "No Círio de Nazaré, em Belém, milhares de promesseiros se espremem para segurar que objeto, preso à berlinda da santa?",
    "resposta": "A corda",
    "distratores": [
      "As fitas",
      "O andor",
      "O estandarte"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Círio_de_Nazaré"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Círio_de_Nazaré",
        "situacao": "ok",
        "texto": "O Círio de Nazaré é uma manifestação religiosa católica, herdada dos colonizadores portugueses, marcada por procissões (romarias) em devoção a Nossa Senhora de Nazaré, que ocorre na cidade brasileira de Belém (estado do Pará). É celebrado anualmente desde 1793, no segundo domingo de outubro, reunindo atualmente cerca de dois milhões de pessoas.\n[…]\nA corda do círio foi introduzida pela primeira vez na procissão em 1855 com o objetivo de puxar a berlinda que levava a imagem de Nossa Senhora de Nazaré devido a água que transbordava da Baía do Guajará na área do Ver-o-peso. O elemento só foi oficializado em 1868.\n[…]\nCom a berlinda, a imagem de Nossa Senhora de Nazaré passou a ir sozinha. Até a introdução da corda, o carro era puxado por cavalos. Em 1926, a berlinda é substituída por um andor, fruto de mudanças sugeridas pelo então Arcebispo de Belém, Dom João Irineu Joffily, ficando até 1930, quando voltou a ser utilizada. Entre esse período, a corda também deixou de ser utilizada com um pretexto de ser violenta, voltando em 1931 junto com a berlinda.\n[…]\n1855 - O palanquim e o portador que conduziam a imagem de Nossa Senhora de Nazaré, são substituídos por uma carruagem, que servia como uma espécie de Berlinda, inicialmente puxada por cavalos. A corda é usada pela primeira vez na romaria, para puxar a berlinda, devido a água que transbordava da Baía do Guajará, ás margens do Ver-o-peso, pelo fato da berlinda ter atolado por lá. Ocorre uma epidemia de cólera em Belém, mas não impedindo a realização do Círio.\n[…]\n1868 - A corda é oficializada no Círio de Nazaré.\n[…]\n1926 - A corda é retirada do Círio por determinação do Arcebispo de Belém, Dom João Irineu Joffily, tendo como motivo a violência pela disputa de vagas. A berlinda é substituída por um andor.\n[…]\n«Basílica Nossa Senhora de Nazaré»\n[…]\n«Santuário de Nossa Senhora de Nazaré (Portugal)»"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Círio de Nazaré",
      "descricao": "Grande procissão católica em honra de Nossa Senhora de Nazaré realizada em Belém do Pará em outubro."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Em que domingo de outubro acontece a grande procissão do Círio de Nazaré, pelas ruas de Belém do Pará?",
    "resposta": "Segundo domingo",
    "distratores": [
      "Primeiro domingo",
      "Terceiro domingo",
      "Último domingo"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Círio_de_Nazaré"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Círio_de_Nazaré",
        "situacao": "ok",
        "texto": "O Círio de Nazaré é uma manifestação religiosa católica, herdada dos colonizadores portugueses, marcada por procissões (romarias) em devoção a Nossa Senhora de Nazaré, que ocorre na cidade brasileira de Belém (estado do Pará). É celebrado anualmente desde 1793, no segundo domingo de outubro, reunindo atualmente cerca de dois milhões de pessoas.\n[…]\nO seu retorno ocorreu em outubro desse mesmo ano, tendo a imagem sido transportada do porto da cidade até o santuário por fiéis em romaria, acompanhada pelo governador, pelo bispo e pelas demais autoridades civis e eclesiásticas, sendo considerado este episódio o primeiro Círio. Desde então o Círio de Nazaré é realizado anualmente, no segundo domingo do mês de outubro.\n[…]\nInicialmente, o Círio ocorria entre os meses de setembro e novembro, sem data especifica. Apenas em 1901, o bispo Dom Francisco de Rego Maia oficializou o segundo domingo de outubro como data oficial da grande romaria.\n[…]\n1901 - É instaurado o segundo domingo de outubro como data oficial do Círio de Nazaré.\n[…]\n1918 - Devido à Pandemia da Gripe Espanhola, o Círio aconteceu no último domingo de outubro.\n[…]\n2018 - Neste ano, segundo dados de mapeamentos de satélite da Secretaria de Estado de Segurança e Defesa Social (Segup), a Trasladação pela primeira vez é a romaria com maior número de romeiros do Círio, alcançando 1,3 milhões de pessoas superando a grande procissão de domingo, que naquele ano contabilizou cerca de 1,1 milhões de fiéis.\n[…]\nA procissão do Círio acontece a cada segundo domingo de Outubro, sua data portanto é móvel. A seguir a numeração ordinal dos Círios de Nazaré, as suas datas, e a quantidade aproximada de pessoas que participaram. Informações a partir de 1902, envolvendo também temas da festividade que passaram a ser adotados em definitivo a partir do Círio 1995.\n[…]\nMuseu do Círio\n[…]\n«Basílica Nossa Senhora de Nazaré»"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Cosme e Damião",
      "descricao": "Santos gêmeos médicos do cristianismo, cuja festa popular no Brasil inclui a distribuição de doces às crianças."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Na Bahia, o caruru de Cosme e Damião é servido primeiro a um grupo de crianças sentadas no chão. Quantos meninos manda a tradição?",
    "resposta": "Sete",
    "distratores": [
      "Três",
      "Dois",
      "Doze"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Cosme_e_Damião",
      "https://pt.wikipedia.org/wiki/Caruru"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Cosme_e_Damião",
        "situacao": "ok",
        "texto": "Os Santos Cosme e Damião, irmãos gêmeos, morreram por volta de 300 d.C. Crê-se que foram médicos, e sua santidade é atribuída pelo motivo de haverem exercido a medicina sem cobrar por isso, devotados à fé. Na Igreja Católica, sua festa é celebrada no dia 26 de setembro, de acordo com o atual Calendário Litúrgico Romano do Rito Ordinário, e no dia 27 de setembro, pelo Calendário Litúrgico Romano do\n[…]\nO dia de São Cosme e Damião é celebrado também pelo candomblé, batuque, xangô do Nordeste, xambá e pelos centros de umbanda onde são associados aos meninos de angola, que trazem bem estar por onde passam, possuem conhecimento de desfazer feitiços e auxiliam na cura de enfermidades.\n[…]\nAcredita-se ainda que trazem alegria, deixando harmonia e felicidade no ambiente a sua volta, descarregando o ambiente de energias densas, trabalham na caridade, auxiliando principalmente, pessoas em situações de desamparo, fragilizadas, como crianças, idosos, enfermos. Têm a inocência das crianças consigo, gostam de doces, frutas doces e guloseimas. O nome Cosme significa \"o enfeitado\" e Damião, \"o popular\".\n[…]\nEstas religiões os celebram no dia 27 de setembro, enfeitando seus templos com bandeirolas e alegres desenhos, tendo-se o costume, no Brasil, de dar doces e brinquedos às crianças que lotam as ruas em busca dos agrados. Na Bahia, as pessoas comemoram oferecendo caruru, vatapá, doces e pipoca para a vizinhança.\n[…]\nSão Vicente ficou com o dia 27, já que era a data sabida de sua morte; já Santos Cosme e Damião, como não se sabe a data de morte deles, tiveram sua Memória movida para o dia 26 de setembro. Ainda assim, católicos tradicionalistas, devotos mais antigos e as religiões afro-brasileiras que também os cultuam, como o Candomblé e a Umbanda, continuam a comemorá-los no dia 27."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Caruru",
        "situacao": "ok",
        "texto": "Caruru é a designação comum a certas plantas do gênero Amaranthus, da família das amarantáceas, algumas de folhas comestíveis, bastante utilizada em culinária. A maioria delas é invasora de plantações. É também conhecida como bredo em Pernambuco e na Bahia, onde é utilizado na culinária local, reservando-se o termo \"caruru\" a um prato que, geralmente, não leva esta planta nos seus ingredientes.\n[…]\nCaruru vem do tupi antigo kararu, conforme registrado na Historia naturalis Brasiliae, de Marcgrave. Uma proposta etimológica (incerta) é que o nome seria uma contração de caá-riru, a erva de comer, como define Câmara Cascudo.[carece de fontes]? \"Bredo\" é originário do termo grego blíton através do termo latino blitu.\n[…]\nPlanta nativa das Américas, foi a primeira vez conhecido pelos europeus através dos Maias no México.\n[…]\nTodas as partes do caruru são comestíveis. É um alimento rico em ferro, potássio, cálcio e vitaminas A, B1, B2 e C. Tendo funções medicinais como lactígeno, combate também infecções, problemas hepáticos, hidropsia e catarro da bexiga. As sementes podem ser ingeridas torradas ou em pães e outras receitas, e são conhecidas como amaranto.\n[…]\nAmaranthus viridis L. (es): caruru-de-mancha, caruru-pequeno, caruru-de-porco, caruru, bredo, bredo-verdadeiro.\n[…]\nAmaranthus hybridus L. (es): bredo-vermelho, caruru-bravo, caruru-roxo, chorão, crista-de-galo.\n[…]\nAmaranthus spinosus L. (es): bredo, bredo-de-chifre, bredo-de-espinho, caruru-bravo, caruru-de-espinho, caruru.\n[…]\nAmaranthus lividus L. (en): caruru-de-cuia."
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Chimarrão",
      "descricao": "Infusão quente de erva-mate tomada na cuia, bebida tradicional do Sul do Brasil"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome do chimarrão vem da palavra espanhola cimarrón, usada na região do Prata. O que ela significava?",
    "resposta": "Bravio, selvagem",
    "distratores": [
      "Quente",
      "Folha verde",
      "Bebida de roda"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Chimarrão"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Chimarrão",
        "situacao": "ok",
        "texto": "Chimarrão (do espanhol rioplatense: \"cimarrón\") ou mate (do quíchua: \"mati\") é uma das maneiras de tomar a infusão da erva-mate. É uma bebida característica da cultura do Cone Sul, legado da cultura indígena (caingangue, guarani, aimará e quíchua), produzido pela infusão da planta erva-mate (Ilex paraguariensis) moída e infusionada em água quente à aproximadamente 70 graus Celsius, em uma cuia com\n[…]\nO termo \"mate\", oriundo do quíchua mati, é mais utilizado nos países de língua castelhana. O termo \"chimarrão\" é o mais adotado no Brasil, sendo oriundo da palavra castelhana rioplatense cimarrón, que significa \"puro\", \"selvagem\", \"sem aditivos\". Por isso, também pode designar qualquer bebida (como café ou chá) preparada sem açúcar; o gado domesticado que retornou ao estado de vida selvagem; ou o cão sem dono e bravio, que se alimenta de animais que caça.\n[…]\nOs primeiros povos de que se tem conhecimento de terem feito uso da erva-mate são os indígenas guaranis, que habitavam a região definida pelas bacias dos rios Paraná, Paraguai e Uruguai na época da chegada dos colonizadores espanhóis; e os indígenas caingangues, que habitavam na região dos atuais estados do Rio Grande do Sul, Santa Catarina, Paraná e Misiones.\n[…]\nNas últimas décadas, o chimarrão tem se popularizado em algumas regiões da Região Sudeste como o sul de Minas Gerais, o sul do Rio de Janeiro e algumas regiões do interior de São Paulo, regiões essas onde o consumo do chá-mate quente ou gelado é mais comum.\n[…]\nNa Região Centro-Oeste do Brasil há um refrigerante à base de erva-mate chamado Mate Chimarrão.\n[…]\nO chimarrão se espalhou pela América do Sul com a colonização espanhola da América e chegou ao Oriente Médio com imigrantes sírios e libaneses que retornaram aos seus países após a Primeira Guerra Mundial. A Síria é o maior importador mundial de erva-mate, superando o Uruguai em 2022.\n[…]\nMuseu Paranaense: Histórico da Erva-Mate"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Semana Farroupilha",
      "descricao": "Festa tradicionalista do Rio Grande do Sul, com desfiles e acampamentos gaúchos, que lembra a Revolução Farroupilha."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Em 1947, que jovem tradicionalista gaúcho tirou uma centelha da Pira da Pátria e acendeu a chama que deu origem à Semana Farroupilha?",
    "resposta": "Paixão Côrtes",
    "distratores": [
      "Barbosa Lessa",
      "Teixeirinha",
      "Simões Lopes Neto"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Semana_Farroupilha",
      "https://pt.wikipedia.org/wiki/Paixão_Côrtes"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Semana_Farroupilha",
        "situacao": "ok",
        "texto": "A Semana Farroupilha é um evento festivo da Cultura gaúcha, que se comemora de 13 a 20 de setembro com desfiles em homenagem a líderes da Revolução Farroupilha. O evento é dedicado ao marco da Revolução Farroupilha, liderada pelo gaúcho Bento Gonçalves no século XIX.\n[…]\nA Revolução Farroupilha foi mais longa revolução do Brasil, ocorreu entre os anos de 1835 a 1845 e tinha como ideais liberdade, igualdade e humanidade. Durante a semana farroupilha os gaúchos montam acampamentos e comemoram, tomando chimarrão e celebrando com desfiles e shows. Usam vestimentas a caráter: as prendas usam vestidos rodados e os homens bombacha, lenço, guaiaca e chapéu. Ocorre em todas as cidades gaúchas e algumas regiões de Santa Catarina.\n[…]\nSegundo a etimologia desta palavra, o termo farroupilha vem de “farrapo” ou “roupas velhas”. Na época, os revolucionários gaúchos eram chamados assim por causa das roupas que vestiam.\n[…]\nRevolução Farroupilha"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Paixão_Côrtes",
        "situacao": "ok",
        "texto": "João Carlos D'Ávila Paixão Côrtes (Santana do Livramento, 12 de julho de 1927 — Porto Alegre, 27 de agosto de 2018) foi um folclorista, compositor, cantor, radialista e pesquisador rio-grandense. É também um dos fundadores do Movimento Tradicionalista Gaúcho (MTG).\n[…]\nAs danças, vestimentas e culinária eram coisas que estavam sendo esquecidas, mas Paixão Côrtes lhes trouxe novamente à vida. Em 1948 ele fundou o primeiro CTG (Centro de Tradições Gaúchas) o 35 CTG. Com o passar dos anos foram fundados vários CTGs no Rio Grande do Sul, e atualmente em outros estados brasileiros da região sul, tem um CTG.\n[…]\nEx-aluno do Colégio União quando seu pai era diretor da Estação Experimental de Uruguaiana, foi ele que carinhosamente deu o apelido para o Colégio União de Baio Velho. Também estudou no Instituto Porto Alegre e no Colégio Estadual Júlio de Castilhos. Paixão Côrtes é um personagem decisivo da cultura gaúcha e do movimento tradicionalista no Rio Grande do Sul, do qual foi um dos formuladores, juntamente com Luiz Carlos Barbosa Lessa e Glauco Saraiva.\n[…]\nEm 1956, Inezita Barroso gravou as músicas tradicionais gaúchas Chimarrita-balão, Balaio, Maçanico e Quero-Mana, Tirana do Lenço, Rilo, Xote Sete Voltas, Xote Inglês, Xote Carreirinha, Havaneira Marcada, recolhidas por Paixão Cortes e Barbosa Lessa.\n[…]\nO hospital informou que Paixão Côrtes entrou em óbito por volta das 16h 05m do dia 27 de agosto de 2018, mas não informou a causa da morte. O governador José Ivo Sartori declarou luto oficial de três dias no Rio Grande do Sul e também ofereceu à família as dependências oficiais como forma de demonstrar a importância do maior tradicionalista gaúcho e a admiração do povo da região por ele.\n[…]\n1970 - Paixão Côrtes (Sobre o Folclore Gaúcho)"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Negrinho do Pastoreio",
      "descricao": "Lenda gaúcha de um menino escravizado castigado num formigueiro que reaparece milagrosamente."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Na lenda, o estancieiro volta ao formigueiro e encontra o Negrinho do Pastoreio vivo e sem feridas. Quem está ao lado do menino?",
    "resposta": "Nossa Senhora",
    "distratores": [
      "São Jorge",
      "Um anjo",
      "A mãe dele"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Negrinho_do_Pastoreio"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Negrinho_do_Pastoreio",
        "situacao": "ok",
        "texto": "O Negrinho do Pastoreio é uma lenda afro-cristã muito contada no final do século XIX pelos brasileiros que defendiam o fim da escravidão, sendo muito popular na região Sul do Brasil.\n[…]\nNa versão da lenda escrita por João Simões Lopes Neto, o protagonista é um menino negro e pequeno, escravo de um estancieiro muito mau; este menino não tinha padrinhos nem nome, sendo conhecido como Negrinho, e se dizia afilhado da Virgem Maria. Após perder uma corrida e ser cruelmente punido pelo estancieiro, o Negrinho caiu no sono, e perdeu o pastoreio. Ele foi castigado de novo, mas depois achou o pastoreio, mas, caindo no sono, o perdeu pela segunda vez.\n[…]\nDesta vez, além da surra, o estancieiro jogou o menino sobre um formigueiro, para que as formigas o comessem, e foi embora quando elas cobriram o seu corpo. Três dias depois, o estancieiro foi até o formigueiro, e viu o Negrinho, em pé, com a pele lisa, e tirando as últimas formigas do seu corpo; em frente a ele estava a sua madrinha, a Virgem Maria, indicando que o Negrinho agora estava no céu. A partir de então, foram vistos vários pastoreios, tocados por um Negrinho, montado em um cavalo baio.\n[…]\nA lenda o negrinho do pastoreio possui muitas cenas fortes e duras, como muitos contos de fadas europeus. Assim como esses contos, a lenda gaúcha possui algumas adaptações que abordam a história de forma branda e bastante lúdica, em formato de livro infantil ou história em quadrinho. Como por exemplo: Lendas Brasileiras da Turma da Mônica, da Editora Girassol, e Coleção Folclore Mágico, da editora Ciranda Cultural."
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Abayomi",
      "descricao": "Boneca de pano afro-brasileira feita sem costura e sem cola, criada por Lena Martins na década de 1980."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "A boneca abayomi, feita só com nós de pano, tem nome tirado da língua iorubá. O que essa palavra significa?",
    "resposta": "Encontro precioso",
    "distratores": [
      "Filha da terra",
      "Mãe protetora",
      "Pano sagrado"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Abayomi"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Abayomi",
        "situacao": "ok",
        "texto": "As Abayomi são bonecas de pano, criação original de Lena Martins, artista e artesã natural de São Luís do Maranhão. A boneca foi criada na década de 1980, em oficinas que Lena fazia, então, com comunidades do Rio de Janeiro.\n[…]\nLena Martins era educadora popular e militante do Movimento de Mulheres Negras, que procurava na arte popular um instrumento de conscientização e sociabilização. Nesse contexto, criou em 1987 a boneca sem costura e sem cola, que mais tarde recebeu o nome de Abayomi, dado pela própria Lena por ocasião do nascimento do filho de uma amiga sua, o qual, sendo menina, se chamaria Abayomi. Lena, achou o nome lindo e não quis desperdiçá-lo, dando-o à boneca de sua criação.\n[…]\nNo final dos anos 1990, e sobretudo a partir da década de 2000, as bonecas Abayomi de Lena Martins começaram sendo associadas a uma lenda falsa, fazendo remontar a sua origem à época da escravidão. Segundo a falsa lenda, estas bonecas seriam confeccionadas a bordo de navios negreiros, por mães escravizadas que as fariam para seus filhos com os retalhos de suas roupas, as quais rasgariam à unha na esperança de os acalentar naqueles momentos dolorosos que viviam.\n[…]\nNão obstante, não só a origem das bonecas é comprovadamente diferente, como não existe qualquer registo ou indício histórico que sustente o relato da falsa lenda.\n[…]\nGomes, Edlaine de Campos; Bizarria, Júlio; Collet, Célia; Sales, Marcos Vinícius (16 de agosto de 2017). «A Boneca Abayomi: entre retalhos, saberes e memórias». ILUMINURAS (44). ISSN 1984-1191. doi:10.22456/1984-1191.75745\n[…]\nSouza, Letícia Lima de (2017). «Prática Pedagógica sobre a cultura afro-brasileira: oficina de bonecas Abayomi». Revista Três Pontos. 14 (2): 80-85"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Cabeça de Cuia",
      "descricao": "Lenda piauiense do pescador Crispim, amaldiçoado a vagar pelos rios de Teresina com a cabeça enorme."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Segundo a lenda piauiense, para se livrar da maldição, o Cabeça de Cuia precisa devorar quantas moças virgens chamadas Maria?",
    "resposta": "Sete",
    "distratores": [
      "Três",
      "Nove",
      "Doze"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Cabeça_de_Cuia"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Cabeça_de_Cuia",
        "situacao": "ok",
        "texto": "Cabeça de Cuia é uma lenda brasileira da região Nordeste, mais precisamente contada no estado do Piauí, ao longo da bacia do rio Parnaíba.[carece de fontes]?\n[…]\nHá várias versões de lendas que envolvem a figura do Cabeça de Cuia. Em uma das lendas mais difundidas trata-se da história de Crispim, um jovem pescador que morava às margens do rio Parnaíba.\n[…]\nA lenda do Cabeça de Cuia ganhou notoriedade no Piauí no final do século XIX.\n[…]\nEm 3 de outubro de 2023, a Assembleia Legislativa do Piauí (Alepi) aprovou um projeto de lei que reconhece a lenda do Cabeça de Cuia como Patrimônio Cultural Imaterial do Piauí. Em 23 de outubro de 2023, o projeto foi sancionado pelo governador do estado, Rafael Fonteles.\n[…]\nO Cabeça de Cuia é uma figura lendária do folclore brasileiro, especialmente do estado do Piauí. A lenda narra a trajetória de Crispim, um jovem magro, cabeludo e oriundo de uma família pobre, que vivia próximo às margens do rio Parnaíba, no município de Teresina, capital do Piauí. Certo dia, ao deparar-se com uma refeição escassa preparada por sua mãe, ele teria se enfurecido e atirado um osso de boi contra a cabeça dela, causando sua morte.\n[…]\nAntes de falecer, a mãe o amaldiçoou, condenando-o a vagar dia e noite pelos rios Parnaíba e Poti sob a forma de uma criatura com uma cabeça grande, semelhante a uma cuia, daí o nome \"Cabeça de Cuia\". A lenda ainda afirma que Crispim só poderia quebrar a maldição após devorar sete moças virgens chamadas Maria. Após ser amaldiçoado, ele teria corrido em direção ao rio Parnaíba e se lançado nas águas, afogando-se.\n[…]\nLenda\n[…]\nReinaldo Coutinho; Cabeça de Cuia: Monstro ou ET?, Edições do autor, 2002."
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Lenda da vitória-régia",
      "descricao": "Lenda indígena amazônica sobre a jovem Naiá, transformada em planta aquática pela Lua."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Na lenda da vitória-régia, a jovem Naiá sonha em virar estrela ao lado da Lua. Que nome tupi a Lua recebe nessa história?",
    "resposta": "Jaci",
    "distratores": [
      "Guaraci",
      "Tupã",
      "Rudá"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Vitória-régia",
      "https://pt.wikipedia.org/wiki/Jaci"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Vitória-régia",
        "situacao": "ok",
        "texto": "A vitória-régina ou victória-régia (Victoria amazonica) é uma planta aquática da família das Nymphaeaceae, típica da região amazônica.\n[…]\nOs ingleses deram-lhe o nome em homenagem à Rainha Vitória, quando o explorador alemão a serviço da Coroa Britânica Robert Hermann Schomburgk levou suas sementes para os jardins de um palácio inglês.\n[…]\nJoseph Paxton (para o duque de Devonshire) foi o primeiro em novembro de 1849, replicando o habitat quente e pantanoso da vitória-régia (não é fácil no inverno na Inglaterra, com apenas caldeiras a carvão), e um “Sr. Ivison” o segundo e mais constantemente bem-sucedido (para Northumberland) em Syon House .\n[…]\nA espécie capturou a imaginação do público e foi tema de várias monografias dedicadas. As ilustrações botânicas de espécimes cultivados na obra Victoria Regia de Fitch e WJ Hooker de 1851 foram aclamadas pela crítica no Athenaeum, “elas são precisas e lindas”. “O Duque de Devonshire presenteou a Rainha Vitória com uma das primeiras dessas flores e a nomeou em sua homenagem.\n[…]\nO caule e a parte inferior das folhas são revestidos com muitos espinhos para se defender de peixes e outros herbívoros subaquáticos, embora também possam desempenhar um papel ofensivo ao esmagar plantas rivais nas proximidades, à medida que a vitória-régia se desenvolve agressivamente., privando outras plantas diretamente abaixo de suas folhas desse recurso vital e escurecendo significativamente as águas abaixo.\n[…]\nVitória-régia em Jardineiro.net - foto e descrição\n[…]\nA Vitória-régia em Indaial\n[…]\nLenda da vitória-régia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jaci",
        "situacao": "ok",
        "texto": "Jaci (do tupi Îasy e do guarani Jasy) é o deus Lua na religião e mitologia tupi-guarani, protetor das plantas, da vida marinha, da fertilidade e da reprodução. Ele é o irmão gêmeo mais novo de Quaraci, o deus Sol.\n[…]\nAs estrelas no céu noturno são conhecidas em tupi-guarani como jaci-tatá (îasytatá em tupi, “fogos-da-lua”), pois a maioria delas foi criada por Jaci para serem suas companheiras.\n[…]\nSegundo uma lenda da Amazônia, uma moça (que em menções populares é chamada de Jaçanã, Jaciara, Naiá ou Maraí) queria ser transformada em estrela pelo belo guerreiro da Lua, Jaci, mas, por mais que ela o buscasse, nunca era escolhida. Certa noite, cansada e definhada de tristeza, viu o reflexo de Lua numa lagoa e pensou que ele viera buscá-la. Mergulhando na água, acabou percebendo que era só uma imagem refletida, mas, estando fraca, não conseguiu nadar de volta para a margem e morreu afogada.\n[…]\nJaci, comovido pela morte da jovem, transformou-a na “estrela das águas”, o uapé, que o homem branco chama de vitória-régia. O uapé abre suas pétalas nas noites de luar para revelar sua impressionante beleza e suave perfume para agradar o deus.\n[…]\nEstas, ao contrário da maioria das estrelas, como se viu, não foram criadas por Jaci.\n[…]\nEla só fica ao lado do seu marido enquanto ele é jovem (Lua nova, Jasy Pyaú [“Lua Nova”] em guarani ou Îasy-semamo [\"Jaci-despontando\"] em tupi), afastando-se dele à medida que fica mais velho (Lua cheia, Jasy Guasu [“Lua Grande”] em guarani ou Îasy-obagûasu [\"Jaci-de-face-grande\"] em tupi). Esse mito foi relatado pelos guaranis do Sul do Brasil e pelos tembés (tupis) do Norte do país, duas etnias da família tupi-guarani que não têm contato entre si.\n[…]\nMitologia tupi-guarani"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Cobra Norato (poema)",
      "descricao": "Poema modernista de Raul Bopp, publicado em 1931, inspirado na lenda amazônica da Cobra Grande e de Honorato."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Que poeta modernista gaúcho escreveu Cobra Norato, poema de 1931 inspirado nas lendas da cobra grande da Amazônia?",
    "resposta": "Raul Bopp",
    "distratores": [
      "Oswald de Andrade",
      "Mário de Andrade",
      "Cassiano Ricardo"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Cobra_Norato",
      "https://pt.wikipedia.org/wiki/Raul_Bopp"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Cobra_Norato",
        "situacao": "ok",
        "texto": "Cobra Norato é o primeiro livro de poesias do poeta modernista brasileiro Raul Bopp e a obra-prima deste, publicado em 1931.\n[…]\nInspirado no movimento antropofágico, trata-se de um drama épico e mitológico situado nas selvas da Amazônia. Seus poemas de verso livre incorporam elementos do folclore e da fala regional, fundindo imagens originais com o ritmo tenso, sintético, sincopado, quase telegráfico.\n[…]\nO herói da história deseja casar-se com a filha da Rainha Luzia e, para isso, mata a Cobra Norato e veste sua pele para percorrer melhor os caminhos amazônicos, cuja fauna e flora são descritas. Norato consegue vencer os obstáculos da floresta e, no final, rouba a sua amada da Cobra Grande."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Raul_Bopp",
        "situacao": "ok",
        "texto": "Raul Bopp (Vila Pinhal, 4 de agosto de 1898 – Rio de Janeiro, 2 de junho de 1984) foi um poeta modernista e diplomata brasileiro.\n[…]\n\"Cobra Norato\" é considerado seu principal livro e obra mais importante do movimento antropofágico. A obra ostenta a grandeza do mundo em formação que é o Amazonas. Pela força de suas descrições, pelo lirismo que informa o poema, pelo seu aproveitamento das raízes populares, é um documento de valor definitivo do Modernismo brasileiro.\n[…]\nEm 1931 lançou \"Cobra Norato\", seu primeiro livro de poesia e um dos mais importantes do modernismo. Nele, o poeta cria um drama épico e mitológico nas selvas amazônicas, incorporando à estrutura do verso livre elementos do folclore e da fala regional.\n[…]\nEm \"Urucungo\" (1932), Bopp volta-se para a cultura africana e sua influência na formação histórica do Brasil, traçando uma viagem das aldeias às margens do rio Congo à realidade das favelas.\n[…]\nPublicou, entre outros, os livros em prosa \"América, Notas de um Caderno sobre o Itamaraty\", \"Movimentos Modernistas no Brasil: 1922/1928\", \"Memórias de um Embaixador\", \"Bopp Passado a Limpo por Ele Mesmo\", \"Vida e Morte da Antropofagia\" e \"Longitudes\".\n[…]\nFoi Bopp quem deu o apelido de Pagu à escritora e jornalista Patrícia Rehder Galvão, figura importante na história cultural brasileira pelas participações em movimentos culturais e relações com artistas modernistas. Raul Bopp criou o apelido ao imaginar erroneamente que o nome verdadeiro de Pagu fosse Patrícia Goulart.\n[…]\nCobra Norato (1931)\n[…]\nMovimentos Modernistas no Brasil: 1922/1928\n[…]\nMemórias de um Embaixador, Bopp Passado a Limpo por Ele Mesmo"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Kuarup",
      "descricao": "Principal ritual funerário dos povos indígenas do Alto Xingu, com troncos pintados que representam os mortos."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Em 1967, que escritor carioca publicou o romance Quarup, cujo título vem do ritual funerário dos povos do Alto Xingu?",
    "resposta": "Antonio Callado",
    "distratores": [
      "Darcy Ribeiro",
      "Jorge Amado",
      "Guimarães Rosa"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Antonio_Callado",
      "https://pt.wikipedia.org/wiki/Kuarup"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Antonio_Callado",
        "situacao": "ok",
        "texto": "Antônio Carlos Callado (Niterói, 26 de janeiro de 1917 – Rio de Janeiro, 28 de janeiro de 1997) foi um jornalista, romancista, biógrafo e dramaturgo brasileiro.\n[…]\nNascido em Niterói (RJ), em 1917, Antônio Carlos Callado começou a escrever em jornais, desde a sua juventude.\n[…]\nAntônio Callado, apesar de formado em Direito (1939), nunca exerceu atividade na área jurídica. Militou na imprensa diária no período entre 1937 a 1941, nos jornais cariocas O Globo e Correio da Manhã. Em 1941, em plena Segunda Guerra Mundial, transfere-se para Londres onde trabalhou para a BBC até 1947. Depois da libertação de Paris, trabalhou no serviço brasileiro da Radiodiffusion Française.\n[…]\nCallado estreou na literatura em 1951, mas sua produção na década de 1950 consiste basicamente em peças teatrais, todas encenadas com enorme sucesso de crítica e público. Mas a mais bem sucedida foi Pedro Mico, dirigida por Paulo Francis, com o arquiteto Oscar Niemeyer em inusitada incursão pela cenografia, e Milton Moraes criando o papel-título. Foi transformada em filme estrelado por Pelé.\n[…]\nA produção de romances toma impulso nas décadas de 1960 e 1970, período em que surgem seus trabalhos mais importantes. Alinhado entre os intelectuais que se opunham ao regime militar, tendo por isso sido preso duas vezes, Callado revela em seus romances seu compromisso político, principalmente naquele que muitos consideram o romance mais engajado daquelas décadas, Quarup.\n[…]\nO teatro de Callado\n[…]\nTextos de Callado online"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Kuarup",
        "situacao": "ok",
        "texto": "O Quarup é um ritual de homenagem aos mortos ilustres celebrado pelos povos indígenas da região do Xingu, no Brasil. O rito é centrado na figura de Mawutzinin, o demiurgo e primeiro homem do mundo da sua mitologia. Em sua origem o Quarup teria sido um rito que objetiva trazer os mortos de novo à vida.\n[…]\nApenas um índio foi por isso impedido, mas não aguentando a curiosidade, saiu também, quebrando o encanto, e os kuarup voltaram a ser madeira.\n[…]\nTipicamente o ritual inicia com a chegada de grupos de índios de outras aldeias, que ocorre em meio a muitas danças. Depois alguns índios vão ao mato e cortam um tronco de kuarup, constroem uma cabana de palha em frente à Casa dos Homens, e sob ela fincam o tronco no chão. A seguir o tronco recebe uma decoração, acompanhada de cantoria que elogia o aspecto formoso do morekwat (chefe) que está sendo,. homenageado, falando com ele como se se tratasse de uma pessoa viva.\n[…]\nÀ noite acontece o momento de ressurreição simbólica do chefe homenageado, sendo um momento de grande emoção. Então as carpideiras começam o choro ritual, sem que os cantos em volta sejam interrompidos. Aos primeiros raios do sol do dia seguinte o choro e o canto cessam, os visitantes anunciam sua chegada com gritos, e iniciam competições entre os campeões de cada tribo, seguidas de lutas grupais para os jovens.\n[…]\nEntão o morekwat da aldeia que sedia o Quarup se ajoelha diante do morekwat de cada tribo visitante e, em sinal de boas vindas, lhe oferece peixe e biju, que são distribuídos entre os seus.\n[…]\nTerminadas as lutas ocorre um ritual de troca, moitará, onde cada aldeia oferece produtos de sua especialidade. O ritual é encerrado com o tronco sendo lançado às águas.\n[…]\nZARUR, George de Cerqueira Leite. Kuarup. Rota Brasil Oeste, 25/08/2003."
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Muiraquitã",
      "descricao": "Amuleto de pedra verde, em geral em forma de sapo, produzido por povos antigos da Amazônia."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Que herói de Mário de Andrade passa o romance tentando recuperar o muiraquitã que ganhou de Ci, a Mãe do Mato?",
    "resposta": "Macunaíma",
    "distratores": [
      "Jeca Tatu",
      "Policarpo Quaresma",
      "Peri"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Macunaíma_(livro)",
      "https://pt.wikipedia.org/wiki/Muiraquitã"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Macunaíma_(livro)",
        "situacao": "ok",
        "texto": "Macunaíma, o herói sem nenhum caráter é um livro publicado em 1928 pelo polímata brasileiro Mário de Andrade, considerado a sua obra-prima.\n[…]\nContudo, é preciso fazer uma interpretação mais atenta dessa abordagem, pois, se Macunaíma é congruência de traços característicos do povo brasileiro, estes trazidos, em especial, da leitura feita por Mário de Andrade da obra de Paulo Prado, é preciso salientar que o anti-herói é revestido de uma identidade plural.\n[…]\nDurante a escrita de Macunaíma Mário de Andrade fez uma viagem pela Amazônia e Nordeste do Brasil, e no diário que manteve são frequentes as declarações a respeito do caráter sublime da natureza selvagem, mas enfatizava a incapacidade das palavras transmitirem adequadamente a essência da experiência.\n[…]\nEm Morfologia de Macunaíma (1973), Haroldo de Campos estudou sua forma, estrutura e linguagem, aproximando o método de Mário com o de Oswald de Andrade em seus romances, descrevendo a obra como um mosaico e uma paródia e enfatizando seus aspectos antropofágicos e primitivistas, buscando definir sua localização dentro da estética e dos métodos modernistas.\n[…]\nEm 2008 a cantora Iara Rennó gravou o CD Macunaó.peraí.matupi ou Macunaíma Ópera Tupi, com 13 canções inspiradas pelo livro. Em 2017 foi lançado o livro Mário, o Modernista a Caráter, biografia satírica escrita por Valquíria Maroti Carozze. Na obra, Macunaíma, criação de Mário de Andrade, personifica a função literária de seu criador e escreve a biografia do modernista paulistano. A metamorfose do herói em escritor e biógrafo de seu \"pai\" resulta em passagens descritas com humor e ironia.\n[…]\nMacunaíma, 1ª edição, em pdf."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Muiraquitã",
        "situacao": "ok",
        "texto": "Muiraquitãs ou muyrakytãs (do tupi ybyrakytã) são artefatos talhados em pedra, chamada de amazonita, representando animais (especialmente sapos, mas também tartarugas ou serpentes). Teriam sido usados pelos povos indígenas Tapajós e Konduri, que habitavam o Baixo Amazonas até a chegada do colonizador europeu, como amuletos, símbolos de poder, e ainda como material para compra e troca de objetos va\n[…]\nA trama de Macunaíma (1928), de Mário de Andrade, importante marco do modernismo brasileiro, gira em torno do resgate de um muiraquitã. Entre 1993 e 1994, circulou no Brasil a cédula de 500 mil cruzeiros com tema dedicado ao autor, a qual continha a figura do artefato.\n[…]\nNo jogo eletrônico brasileiro Aritana e a Pena da Harpia do estúdio Duaik, baseado na mitologia indígena brasileira, os muiraquitãs são itens coletáveis que concedem acesso às fases bônus do jogo.\n[…]\nAssociação Brasileira dos Organizadores de Festivais de Folclore e Artes Populares. Estatuetas,  [4]. Muiraquitã,  [5].\n[…]\nMeirelles, Anna Cristina Resque (2011). Muiraquitã e contas do Tapajós no imaginário indígena: uma análise químico - mineralógica dos artefatos dos povos pré - históricos da Amazônia (PDF) (Tese de de Doutorado em Geoquímica e Petrologia). Belém: Universidade Federal do Pará. 102 páginas. Consultado em 28 de julho de 2015\n[…]\nResque Meirelles, Anna Cristina; Costa, Marcondes Lima da (2012). «Mineralogy and chemistry of the green stone artifacts (muiraquitãs) of the museums of the Brazilian State of Pará». Rem: Revista Escola de Minas. 65 (1): 59-64. ISSN 0370-4467. doi:10.1590/S0370-44672012000100008. Consultado em 28 de julho de 2015\n[…]\nTorres, M. (2007). «A pedra muiraquitã: O caso do rio Uruará no enfrentamento dos povos da floresta às madeireiras na Amazônia» (PDF). Revista de Direito Agrário. 20 (21): 89-119. Consultado em 28 de julho de 2015"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Renda de bilro",
      "descricao": "Renda artesanal feita trançando fios presos a pequenos fusos sobre uma almofada, tradicional no litoral brasileiro"
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Que canção do cangaço, atribuída a Lampião e famosa no filme O Cangaceiro, homenageia as moças que trabalham com bilros?",
    "resposta": "Mulher Rendeira",
    "distratores": [
      "Asa Branca",
      "Acorda Maria Bonita",
      "Luar do Sertão"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Mulher_Rendeira",
      "https://en.wikipedia.org/wiki/O_Cangaceiro"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Mulher_Rendeira",
        "situacao": "ok",
        "texto": "Mulher Rendeira, também conhecida como Mulé Rendeira ou Muié Rendeira (regionalismo), é uma canção brasileira de xaxado.\n[…]\nSegundo a versão mais conhecida, do Padre Frederico Bezerra Maciel, regionalista pernambucano e biógrafo de Virgulino Ferreira da Silva, o Lampião, o afamado cangaceiro teria escrito os versos da versão original da canção. A ele se acrescenta Câmara Cascudo, segundo o qual Lampião teria escrito a letra em homenagem ao aniversário de sua avó Dona Maria Jocosa Vieria Lopes (\"Tia Jacosa\") em 15 de setembro, que era uma rendeira.\n[…]\nCompôs a canção entre setembro de 1921 e fevereiro de 1922, quando a apresentou em Floresta (Pernambuco). A canção tornou-se praticamente um hino de guerra dos cangaceiros do bando de Lampião, tendo inclusive relatos de que o seu ataque a Mossoró em 1927 teria sido feito com mais de 50 cangaceiros cantando \"Mulher Rendeira\".\n[…]\nA canção se tornou internacionalmente famosa após a versão adaptada por Zé do Norte e cantada por Vanja Orico para o filme O Cangaceiro (1953), que além de ganhar o prêmio de \"Melhor Filme de Aventura\" no Festival de Cannes, também recebeu menção especial do júri pela trilha sonora.\n[…]\nFoi gravada em 1957 por Volta Seca, um ex-membro do bando de Lampião, no álbum Cantigas de Lampião pela Todamerica. Além destes, foi interpretada por vários cantores brasileiros, como Luiz Gonzaga, Elba Ramalho, Chico César, Demônios da Garoa, e outros.\n[…]\n«Mulher Rendeira» (em inglês). RhythmandRoots. Consultado em 5 de janeiro de 2012"
      },
      {
        "url": "https://en.wikipedia.org/wiki/O_Cangaceiro",
        "situacao": "ok",
        "texto": "O Cangaceiro (lit. \"The Cangaceiro\"; also known as The Bandit and The Bandits) is a 1953 Brazilian adventure Western film directed by Lima Barreto. After some reluctance by its studio Vera Cruz, Barreto shot it in 1952. After its release it was a national and international success, and won several awards, including the Adventure Film Award at the 1953 Cannes Film Festival.\n[…]\nO Cangaceiro was released on January 20, 1953, and was  a public success; it grossed ₢$30 million (about US$1.5 million) in the 24 Brazilian theaters in which it spent six weeks. After its national success, it was distributed to over 80 countries, becoming one of the most internationally successful Brazilian films—a feat uncommon in that time.\n[…]\nAfter praising its cast performances and its \"thrilling\" musical score, Bosley Crowther of The New York Times said, \"This [O] Cangaceiro is a picture that will cause the Western fans to rub their eyes.\" However, Cinema Novo representants—mainly Glauber Rocha—would criticize it for borrowing too much the style of American films. Critics also went on to comment on its \"sociological inaccuracies.\"\n[…]\nIt is the first film to mix cangaço with Western, starting a genre called \"Nordestern\" —an amalgam of the words \"Nordeste\" (Northeast) and \"Western\". It would be followed by successful films such as Carlos Coimbra's A Morte Comanda o Cangaço (1960), Lampião, o Rei do Cangaço (1964) and Corisco, o Diabo Louro (1969), and Aurélio Teixeira's Os Três Cabras de Lampião.\n[…]\nIt also established cangaço as a subgenre in Brazilian cinema; subsequently, cangaço would be featured as a theme from comedy—such as Os Três Cangaceiro and O Lamparina—to pornochanchada films—As Cangaceiras Eróticas and A Ilha das Cangaceiras Virgens. Also, Ruschel and Ribeiro would reprise the role of \"good cangaceiro\" and \"bad cangaceiro\" in other films.\n[…]\nO Cangaceiro at IMDb"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Cangaço",
      "descricao": "Fenômeno de banditismo social do sertão do Nordeste brasileiro, entre fins do século dezenove e começo do vinte, com bandos de cangaceiros de chapéu de couro."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "A palavra cangaço vem de canga, porque os cangaceiros levavam as armas atravessadas nos ombros. O que é uma canga?",
    "resposta": "Peça que prende os bois",
    "distratores": [
      "Chapéu de couro",
      "Bolsa de couro",
      "Faca comprida"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Cangaço"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Cangaço",
        "situacao": "ok",
        "texto": "Cangaço foi um fenômeno do banditismo, crimes e violência ocorrido em quase todo o sertão da região Nordeste, no Brasil, entre o século XIX e meados do século XX. Seus membros vagavam em grupos, atravessando estados e atacando cidades, onde cometiam pilhagens, assassinatos e estupros.\n[…]\nPara muitos especialistas o cangaço nasceu como uma forma de defesa dos sertanejos diante de graves problemas sociais e da ineficácia do Estado em manter a ordem e aplicar a lei. Um dos principais líderes do cangaço foi Virgulino Ferreira da Silva, conhecido como Lampião. O termo cangaço vem da palavra canga, uma peça de madeira usada para prender junta de bois a carro ou arado, conhecida também como jugo.\n[…]\nAlguns deles portavam as então modernas metralhadoras Hotchkiss, armas que os cangaceiros rapidamente aprenderam a temer, mas estavam sempre dispostos a roubar para seu próprio uso.\n[…]\nAs armas dos cangaceiros eram principalmente revólveres, espingardas e a famosa párabelo, que é uma corruptela em português da palavra latina parabellum, que era o nome oficial da pistola Luger P08. A palavra  significa preparar para a guerra, e vem do provérbio latino si vis pacem, para bellum. Foi designada como arma oficial das tropas governamentais brasileiras e por alguns soldados responsáveis pela aplicação da lei.\n[…]\nOs cangaceiros também ficaram famosos por usarem uma faca fina, longa e bem afiada chamada peixeira, criada originalmente para a limpeza de peixe, além disso, também usavam o famoso punhal. Essas armas brancas eram utilizadas pelos cangaceiros para torturar e matar seus inimigos.\n[…]\nZagor, série de faroeste também publicada pela Bonelli, encontrou com cangaceiros em Zagor nas edições 452 (março de 2002) e 573 (abril de 2013).\n[…]\nCangaço Novo (Série)\n[…]\n«Ceará de Luz - História do Cangaço»"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Lampião",
      "descricao": "Virgulino Ferreira da Silva, o mais famoso líder do cangaço no sertão nordestino, morto em 1938."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Segundo a versão mais contada, por que o cangaceiro Virgulino Ferreira ganhou o apelido de Lampião?",
    "resposta": "Seus tiros iluminavam a noite",
    "distratores": [
      "Dormia de lamparina acesa",
      "Tinha olhos claros",
      "Roubou uma lanterna"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Lampião_(cangaceiro)"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Lampião_(cangaceiro)",
        "situacao": "ok",
        "texto": "Virgulino Ferreira da Silva, mais conhecido como Lampião (Vila Bela, entre 1897 e 1900 – Porto da Folha, 28 de julho de 1938), foi um cangaceiro brasileiro atuante no Sertão nordestino entre as décadas de 1920 e 1930. Por ser considerado o líder do movimento de banditismo mais bem-sucedido da história do Brasil e do século XX, ganhou o apelido de \"Rei do Cangaço\".\n[…]\nNo dia 27 de julho de 1938, o bando se acampou na Fazenda Angicos, situada no sertão de Sergipe, esconderijo tido por Lampião como o de maior segurança. Era noite, chovia muito e todos dormiam em suas barracas. A volante chegou tão silenciosamente que nem os cães perceberam. Por volta das cinco horas da manhã do dia 28, os cangaceiros levantaram para rezar o ofício e se preparavam para tomar café; quando um cangaceiro deu o alarme, já era tarde demais.\n[…]\n27 de julho de 1924 — Lampião manda um subgrupo com 84 cangaceiros, tendo o comando dos cangaceiros Antônio Ferreira, Levino Ferreira, Sabino Gomes, Paizinho, Meia-Noite e o fazendeiro Chico Pereira atacar e saquear a cidade de Sousa - PB. Tudo na cidade virou alvo de saque, os cangaceiros roubaram o comércio, residências, tendo a cidade um prejuízo incalculável. O principal alvo era o coronel Otávio Mariz, desafeto de Chico Pereira, que fugiu. O juiz Dr.\n[…]\nBelarmino então atira e mata. Era o cangaceiro Levino Ferreira da Silva, irmão de Lampião. No outro dia, ao saber disso, o capitão Zé Caetano e o cabo Pedro Monteiro vão até a fazenda Tenório e encontram os 3 corpos sem as cabeças, prática esta utilizada pelos cangaceiros para dificultar o reconhecimento pela polícia.\n[…]\n7 de julho de 1926 — Lampião manda o cangaceiro Sabino Gomes atacar a cidade de Triunfo - PE, saqueando o comércio local. Houve troca de tiros com a polícia, saindo mortos 2 soldados e o comandante da polícia local.\n[…]\nDe Lampião apenas Antônio Ferreira foi baleado."
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Padre Cícero",
      "descricao": "Cícero Romão Batista, sacerdote cearense venerado pela religiosidade popular nordestina e alvo de grandes romarias."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Que apelido carinhoso os romeiros nordestinos dão ao sacerdote de Juazeiro do Norte, venerado como santo popular?",
    "resposta": "Padim Ciço",
    "distratores": [
      "Frei Damião",
      "Beato do Horto",
      "Pai Romão"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Padre_Cícero"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Padre_Cícero",
        "situacao": "ok",
        "texto": "Cícero Romão Batista (Crato, 24 de março de 1844 – Juazeiro do Norte, 20 de julho de 1934) foi um sacerdote católico brasileiro. Na devoção popular, é conhecido como Padre Cícero ou Padim (padrinho, na norma culta) padre Ciço. Obteve grande prestígio e influência sobre a vida social, política e religiosa do Ceará, bem como do Nordeste.\n[…]\nO padre Cícero morreu em Juazeiro do Norte em 20 de julho de 1934, aos 90 anos, encontrando-se sepultado na Igreja de Nossa Senhora do Perpétuo Socorro, na mesma cidade.\n[…]\nNo dia 20 de agosto de 2022, durante uma missa realizada no largo da Capela do Socorro, em Juazeiro do Norte, o bispo de Crato, Dom Magnus Henrique Lopes, afirmou que recebera da Dicastério para as Causas dos Santos o nihil obstat, datado de 24 de junho de 2022, para dar início ao processo de beatificação de Padre Cícero, agora intitulado \"servo de Deus\". Em 30 de novembro, deu-se início à fase diocesana do processo. O postulador desta causa é o Dr. Paolo Vilotta.\n[…]\nEm 6 de julho de 1973, Padre Cícero foi canonizado pela Igreja Católica Apostólica Brasileira, que não tem comunhão com a Igreja Católica Romana. Sua canonização foi idealizada pelo então bispo de Maceió, Dom Wanillo Galvão Barros, que observava a devoção dos nordestinos ao religioso. Ela foi sustentada com pesquisas sobre sua santidade e milagres atribuídos a sua intercessão. Sua festa é celebrada no dia 20 de julho, contando com festejos religiosos e populares.\n[…]\nOs Romeiros de Padre Cícero — documentário dirigido por Eduardo Coutinho\n[…]\nAQUINO, Pedro Ferreira de. O Santo do Meu Nordeste - Padre Cícero Romão Batista. São Paulo: Ed. Letras & Letras, 1997. ISBN 85-85-387-63-7\n[…]\nNOBRE, Edianne S. O Teatro de Deus: as beatas do Padre Cícero e o espaço sagrado de Juazeiro (1889-1898). Fortaleza: Edições IMEPH/UFC, 2011.\n[…]\nPágina dedicada à vida de Padre Cícero"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Carimbó",
      "descricao": "Ritmo e dança de roda de origem indígena e africana típicos do Pará."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Que cantor paraense, que levou o carimbó às rádios de todo o país nos anos setenta, ficou conhecido como Rei do Carimbó?",
    "resposta": "Pinduca",
    "distratores": [
      "Beto Barbosa",
      "Nilson Chaves",
      "Fafá de Belém"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Pinduca",
      "https://pt.wikipedia.org/wiki/Carimbó"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Pinduca",
        "situacao": "ok",
        "texto": "Aurino Quirino Gonçalves (Igarapé-Miri, 4 de junho de 1937), mais conhecido pelo nome artístico Pinduca ou \"Rei do Carimbó\", é um cantor e compositor brasileiro, um dos principais representantes do gênero carimbó, típico do Pará. Sua música se distingue do tradicional \"Carimbó Pau e Corda\", sendo marcada por influências de outros ritmos da América Central, das Guianas e do Suriname, países frontei\n[…]\nPertencente a uma família de músicos, Pinduca iniciou sua carreira aos quatorze anos de idade cantando carimbó. Ao longo de sua trajetória ele se destacou por sua capacidade de mesclar as influências internacionais com o carimbó raiz, gênero consolidado por grandes nomes como o Mestre Verequete e Mestre Lucindo, o \"Rei do Carimbó do Salgado Paraense\".\n[…]\n1973 - Carimbó e sirimbó do Pinduca (Beverly Som e Eletrônica LTDA)\n[…]\n1974 - Carimbó e sirimbó no embalo do Pinduca v.2 (Beverly Som e Eletrônica LTDA)\n[…]\n1974 - Carimbó e sirimbó no embalo do Pinduca v.3 (Beverly Som e Eletrônica LTDA)\n[…]\n1975 - Carimbó e sirimbó no embalo do Pinduca v.4 (Beverly Som e Eletrônica LTDA)\n[…]\n1976 - Pinduca no embalo do carimbó e sirimbó v.5 (Som Indústria e Comércio S/A)\n[…]\n1977 - Pinduca no embalo do carimbó e sirimbó v.6 (Beverly Som e Eletrônica LTDA)\n[…]\n1978 - Pinduca no embalo do carimbó e sirimbó v.7 (Som Indústria e Comércio S/A)\n[…]\n1979 - Pinduca no embalo do carimbó e sirimbó v.8 (Som Indústria e Comércio S/A)\n[…]\n1980 - Pinduca no embalo do carimbó e sirimbó v.9 (Som Indústria e Comércio S/A)\n[…]\n1981 - Pinduca no embalo do carimbó e sirimbó v.10\n[…]\n1983 - Pinduca O Rei do Carimbó v.12\n[…]\n1984 - Pinduca o Rei do Carimbó v.13\n[…]\n1985 - Pinduca o Rei do Carimbó, Eu Faço o Show\n[…]\n1986 - Pinduca v.15\n[…]\n1988 - Pinduca Apresenta Kizomba\n[…]\n1989 - Pinduca Na Onda do Surubá\n[…]\n1993 - Pinduca Na Explosão Do Carimbó  (BMG)\n[…]\n1997 - Pinduca Na base do Xengo Xengo\n[…]\n2003 - Pinduca Sempre\n[…]\n2005 - Pinduca: ao Vivo\n[…]\n2007 - Pinduca 40 anos de Sucesso\n[…]\n2009 - Pinduca Vol.33"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Carimbó",
        "situacao": "ok",
        "texto": "O carimbó ou curimbó é uma manifestação cultural brasileira de origem afro-indígena, formado por gênero musical e dança, criado no século XVII no então Império das Amazonas/Conquista do Pará (atual estado do Pará) na então América Portuguesa/Brasil Colônia. Evoluindo como uma celebração interiorana entre amigos e familiares após pescarias e plantios acompanhado pelo batuque do tambor artesanal cur\n[…]\nAssim a história do carimbó ficou definida, em dois momentos: a fase na qual o gênero era produzido por setores populares (interioranos e suburbanos) e conhecido apenas por folcloristas e intelectuais como uma manifestação cultural local; e a fase de urbanização e consumo na indústria fonográfica de massa (rádios) e no cenário cultural em nível de estado, consolidando as duas tendências do gênero: “pau e corda” e “moderno”.\n[…]\nDando início a grupos carimbozeiros e bandas, tornando-se popular e comum nas rádios e nos bailes, quando artistas gravaram os primeiros discos LP, a exemplo de Lucindo, Pinduca, Cupijó e Verequete.\n[…]\nParalelo a este processo, começaram a perceber um produto comercializável, como por exemplo: no início de 1970, o cantor Pinduca tenta introduzir o gênero nos bailes populares (após algumas tentativas sem sucesso foi aos poucos sendo aceito). Enquanto, Verequete cria o grupo “O Uirapuru do Amazonas”, com apresentações principalmente no distrito belenense de Icoaraci.\n[…]\nNa capital Belém, teriam se organizado duas correntes de carimbó distintas: estilo tradicional e estilo moderno. O primeiro, representado pelo cantor Verequete, manteve a estrutura musical do referencial marapaniense. O segundo, representado pelo cantador Pinduca, alterou essa estrutura, a fim de atribuir-lhe uma feição de modernidade. Essa diferenciação criou uma histórica rivalidade entre defensores da tradição e da modernidade.\n[…]\n«\"Prêmio valoriza mestres e mestras do carimbó paraense\"». IPHAN"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Pipa",
      "descricao": "Brinquedo de papel ou tecido sobre varetas, empinado ao vento preso a uma linha, também chamado de papagaio ou pandorga."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Que mistura de cola com vidro moído, perigosa e proibida em muitas cidades, é passada na linha da pipa para cortar a dos outros?",
    "resposta": "Cerol",
    "distratores": [
      "Rabiola",
      "Breu",
      "Grude"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Cerol",
      "https://pt.wikipedia.org/wiki/Pipa_(brinquedo)"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Cerol",
        "situacao": "ok",
        "texto": "O cerol é uma mistura de cola (normalmente usado cola branca ou cola de madeira) com pó de vidro moído (ou limalha de ferro ou pó de quartzo) que é aplicada em linhas de pipas para cortar as linhas de outras pipas no ar, numa espécie de desafio com finalidade recreativa. O cerol é colocado diretamente na linha que será usada para empinar a pipa. A cola serve como aglomerante para fixar o pó de vid\n[…]\nO cerol tradicional é uma mistura de pó de vidro (normalmente de bulbos de lâmpadas) com cola, porém existem também varias modificações do cerol. Uma delas é substituir o vidro por pó de ferro, que é facilmente adquirido em serralherias. Por causa da presença do ferro, as linhas impregnadas com esta variante de cerol conduzem a eletricidade, bastando um único contato da linha com os fios de alta tensão para que a pessoa seja eletrocutada.\n[…]\nA linha chilena é uma variação de linha cortante que geralmente é produzida de forma industrial ou artesanal. Diferentemente da linha comum com cerol, ela é preparada com uma mistura de cola e pó abrasivo, como pó de quartzo ou óxido de alumínio, sendo engomada em passadas e dependendo da receita também pode ser usado calcita para \"blindar\" a linha, o que aumenta significativamente sua capacidade de cortar outras linhas durante disputas aéreas entre praticantes.\n[…]\nMuitos acidentes fatais ocorrem com motociclistas e ciclistas que passam por áreas onde crianças e adolescentes empinam pipas. Geralmente, nos casos fatais, é o pescoço do motociclista, ciclista ou pedestre que entra em contato com a linha de pipa com cerol. São, também, vítimas do cerol: aeronaves, pedestres,paraquedistas, skatistas e outros. Atualmente, em alguns municípios brasileiros, existem leis que proíbem o seu uso e venda. O vendedor de cerol pode ser preso, além de pagar multa."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pipa_(brinquedo)",
        "situacao": "ok",
        "texto": "A pipa (português brasileiro) ou papagaio (português europeu), também chamada pandorga ou raia, é um brinquedo que voa baseado na oposição entre a força do vento e a da corda segurada pelo operador.\n[…]\nNo Brasil, a pipa (como é chamada no Rio de Janeiro) também recebe os nomes de cafifa (em Niterói), arraia, morcego, lebreque, bebeu, coruja, tapioca (em várias partes do estado do Rio de Janeiro), papagaio, curica , cângula, jamanta, casqueta, cometa, chambeta (no estado de São Paulo), quadrado (no Paraná), pandorga (no Rio Grande do Sul e Santa Catarina), barril, estilão, pião, bolacha (na Bahia) e pepeta (em estados como Acre e Amazonas).\n[…]\nMuito populares nos subúrbios da cidade do Rio de Janeiro, são chamadas de pipas propriamente ditas aquelas em formato de pentágono, com cabresto triangular e rabiola. Já as arraias não possuem rabiola, e são mais comuns em Niterói.\n[…]\nO cerol é uma mistura cortante de pó de vidro e cola de madeira utilizado na linha da pipa com o objetivo de cortar a linha de outra pipa oponente. Acidentes fatais relacionado com o cerol ocorrem em áreas onde existe a prática com aeronaves, pedestres, ciclistas, motociclistas e paraquedistas que eventualmente tenham contato com a linha.\n[…]\nSuru — pipa que não tem rabiola e também em sua fabricação só utiliza duas taletas (varetas) em forma de cruz e é totalmente encapada.\n[…]\nCafifa — espécie de raia, muito parecido com a pipa.\n[…]\nCapucheta — pipa feita de uma única folha de jornal e sem varetas; a rabiola também é feita de jornal. Com algumas dobraduras e com a linha amarrada nos dois lados da dobradura, formando um triângulo, ou delta, ao centro por onde é empinado.\n[…]\nExperiência da pipa, de Benjamin Franklin"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Dia do Folclore",
      "descricao": "Data comemorativa brasileira dedicada às tradições populares, instituída por decreto em 1965."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Por que o Dia do Folclore é comemorado no Brasil em 22 de agosto?",
    "resposta": "Criação da palavra, em 1846",
    "distratores": [
      "Nascimento de Câmara Cascudo",
      "Morte de Monteiro Lobato",
      "Fundação do IPHAN"
    ],
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
        "texto": "Folclore (do inglês folk-lore) é um gênero da cultura de origem popular, que representa a identidade social de uma comunidade através de atividades culturais que nasceram, individualmente ou coletivamente, e se desenvolveram com o povo (costumes e tradições) transmitidos entre gerações.\n[…]\nO primeiro registro do uso público de \"folk-lore\" ocorreu em agosto de 1845. Na ocasião, a revista londrina “The Atheneum” publicou uma carta recebida de Willian Thoms (sob o pseudônimo Ambrose Merton). Em comemoração, instituiu-se mundialmente o Dia do Folclore em 22 de agosto.\n[…]\nJá não são raros os elementos do povo que usam gravadores, câmeras de vídeo, internet ou outros meios de alta tecnologia para o registro e difusão das manifestações folclóricas, tornando a delimitação do campo de estudo e a caracterização do fato folclórico cada vez mais difíceis. Roberto Benjamin, presidente da Comissão Nacional de Folclore do Brasil em 2001, declarou que\n[…]\nPode-se dividir as manifestações folclóricas em oito categorias:\n[…]\nPara ser considerado um fato é folclórico, deve apresentar as seguintes características: tradicionalidade, dinamicidade, funcionalidade e aceitação coletiva.\n[…]\nUm exemplo disso é a literatura de cordel brasileira, geralmente com autoria definida, mas tida como elemento genuíno da cultura popular.\n[…]\nPode-se acrescentar a esses o critério da espontaneidade, já que o fato folclórico não nasce de decretos governamentais nem dentro de laboratórios científicos; é antes uma criação surgida organicamente dentro do contexto maior da cultura de uma certa comunidade.\n[…]\nFolclore brasileiro\n[…]\nCarta do Folclore Brasileiro\n[…]\nLendas do folclore brasileiro\n[…]\nFolclore inglês\n[…]\nCentro Nacional de Folclore e Cultura Popular\n[…]\nFolclore: cultura brasileira na sala de aula"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Chupa-cabra",
      "descricao": "Criatura lendária (críptido) das Américas, supostamente sugadora de sangue de animais de criação, retratada como réptil com espinhos nas costas."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Em que ilha do Caribe surgiram, em 1995, os relatos que tornaram famoso o chupa-cabra, matador de cabras e galinhas?",
    "resposta": "Porto Rico",
    "distratores": [
      "Cuba",
      "Jamaica",
      "Trinidad"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Chupacabra",
      "https://pt.wikipedia.org/wiki/Chupa-cabra"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Chupacabra",
        "situacao": "ok",
        "texto": "The chupacabra or chupacabras (Spanish pronunciation: [tʃupaˈkaβɾas], literally meaning 'goat-sucker', from Spanish: chupa, 'sucks', and cabras, 'goats') is a legendary creature, or cryptid, in the folklore of parts of the Americas. It is said to prey on livestock, particularly goats, although reports also attribute attacks to sheep, chickens and other domesticated animals.\n[…]\nThe first reported attack later associated with the chupacabras phenomenon occurred in Puerto Rico in March 1995. Eight sheep were found dead, each reportedly bearing three puncture wounds to the chest and alleged to have been completely drained of blood. Several months later, in August, a resident named Madelyne Tolentino reported a sighting of the creature in the municipality of Canóvanas.\n[…]\nIn 2019 a video recorded by Mundo Ovni showed the results of a supposed attack on chickens in the Seburuquillo sector of Lares, Puerto Rico.\n[…]\nA five-year investigation by Benjamin Radford, documented in his 2011 book Tracking the Chupacabra, concluded that the description given by the original eyewitness in Puerto Rico, Madelyne Tolentino, was based on the creature Sil in the 1995 science-fiction horror film Species. The alien creature Sil is nearly identical to Tolentino's chupacabra eyewitness account and she had seen the movie before her report: \"It was a creature that looked like the chupacabra, with spines on its back and all...\n[…]\nThe chupacabra panic first started in late 1995, Puerto Rico: farmers were mass reporting the mysterious killings of various livestock. In these reports, the farmers recalled two puncture wounds on the animal carcasses. Chupacabra killings were soon associated with a seemingly untouched animal carcass other than puncture wounds which were said to be used to suck the blood out of the victim.\n[…]\nChupacabra mystery solved from Seeker.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Chupa-cabra",
        "situacao": "ok",
        "texto": "O chupacabra ou chupa-cabra é uma criatura lendária no folclore de partes das Américas. O nome vem do vampirismo relatado do animal — diz-se que o chupacabra ataca e bebe o sangue do gado, incluindo cabras.\n[…]\nAs descrições físicas da criatura variam, alguns a descrevem como reptiliana e alienígena (em Porto Rico e na América Latina), geralmente como uma criatura pesada do tamanho de um pequeno urso com uma fileira de espinhos que vão do pescoço até a base da cauda. Outros o descrevem como mais parecido com um cachorro (particularmente no sudoeste dos Estados Unidos).\n[…]\nOs avistamentos e as descrições iniciais foram relatados pela primeira vez em Porto Rico em 1995. Desde então, a criatura foi relatada no extremo norte do Maine, no sul do Chile e até mesmo fora das Américas em países como Rússia e Filipinas. Todos os relatórios são anedóticos e foram desconsiderados como não corroborados ou sem evidências. Avistamentos no norte do México e no sul dos Estados Unidos foram verificados como canídeos afetados pela sarna.\n[…]\nÉ conhecido como chupacabras e chupacabra em todas as Américas, sendo o primeiro o nome original, e o segundo uma regularização. O nome é atribuído ao comediante porto-riquenho Silverio Pérez, que cunhou o rótulo em 1995 ao comentar os ataques como DJ de uma rádio de San Juan.\n[…]\nA popularidade do chupacabra resultou em destaque em muitos tipos de mídia:\n[…]\nA busca por um chupacabra foi apresentada no episódio \"El Mundo Gira\" de The X-Files.\n[…]\nAlleged chupacabra likely a \"Xolo dog\"; story a hoax\n[…]\nLundborg, Pam (25 de setembro de 2009). «\"Chupacabra\" remains bought by Oswego County man». Syracuse.com. Consultado em 20 de janeiro de 2016\n[…]\nChupacabra mystery solved from Seeker.com"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Balangandã",
      "descricao": "Joia crioula de prata, com vários pingentes e amuletos, patrimônio da cultura afro-brasileira da Bahia."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Que cantora levou ao mundo a fantasia de baiana com balangandãs, inspirada num samba de Dorival Caymmi gravado em 1939?",
    "resposta": "Carmen Miranda",
    "distratores": [
      "Aurora Miranda",
      "Linda Batista",
      "Emilinha Borba"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Carmen_Miranda",
      "https://pt.wikipedia.org/wiki/Balangandã"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Carmen_Miranda",
        "situacao": "ok",
        "texto": "Maria do Carmo Miranda da Cunha (Marco de Canaveses, 9 de fevereiro de 1909 – Beverly Hills, 5 de agosto de 1955), mais conhecida como Carmen Miranda, foi uma cantora, dançarina, e atriz luso-brasileira. Sua carreira artística transcorreu no Brasil e nos Estados Unidos entre as décadas de 1930 e 1950. Trabalhou no rádio, no teatro de revista, no cinema e na televisão.\n[…]\nEm 1990, a cantora Rita Lee e seu marido, o músico Roberto de Carvalho, lançaram a música \"La Miranda\" em tributo a Carmen Miranda. A canção foi utilizada na abertura da telenovela Lua Cheia de Amor, da Rede Globo, onde uma modelo vestia um figurino inspirado na artista.\n[…]\nA escolha de Miranda para representar a edição de 2009 refletiu seu simbolismo de alegria e seu papel na representação do espírito brasileiro na temática dos desfiles.Nesse mesmo ano, a gravação de \"O Que É que a Baiana Tem?\", interpretada por Carmen Miranda e composta por Dorival Caymmi, foi selecionada para preservação em um arquivo sonoro especial da Biblioteca do Congresso dos EUA, sublinhando sua importância histórica e cultural.\n[…]\nEmbora tenha sido mais popular no exterior do que no Brasil na época de sua morte, Carmen Miranda fez contribuições significativas para a música e a cultura brasileira. Ela foi a primeira intérprete do samba a divulgar o gênero em âmbito internacional. Além disso, a fantasia de baiana que ela popularizou tornou-se uma característica central do carnaval para homens e mulheres.\n[…]\nEm 2008, a gravação de O que é que a baiana tem? de Dorival Caymmi foi selecionada para preservação na lista do National Recording Registry da Biblioteca do Congresso dos Estados Unidos. Três anos depois, em 2011, Carmen Miranda, ao lado de ícones como Selena, Celia Cruz, Carlos Gardel e Tito Puente, foi imortalizada em uma série de selos comemorativos do Serviço Postal dos EUA, celebrando a música latina."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Balangandã",
        "situacao": "ok",
        "texto": "As pencas de balangandãs são joias crioulas dos século XVIII-XIX que são consideradas um patrimônio da Bahia e da cultura afro-brasileira. Essas joias são artefatos que marcam a resistência negra contra o regime escravocrata, porque foram uma das manifestações artísticas afro-descendentes mais antigas no país. Essa jóia, por ser uma peça híbrida, possui aspectos africanos e portugueses, era produz\n[…]\nA palavra balangandã tem origem banto e possui diferentes significados, mas o mais aceito é um vocábulo oriundo do regionalismo no Brasil e onomatopaico, uma forma de representação que evoca o seu objeto por semelhança sonora, numa relação icônica, ou seja, uma palavra originária da imitação do som daquilo que representa.\n[…]\nOs balangandãs nunca deixaram de ser confeccionados, sendo uma jóia ainda vendida e usada em Salvador na contemporaneidade. Estas joias podem ter diferentes significados, como um objeto do cotidiano baiano ou um souvenir. Alguns objetos, como guias e imagens de orixás, que antes pertenciam a ritos das religiões de matriz africana, como candomblé e umbanda, passaram a ser vendidos apenas pela beleza da peça, e isso, também aconteceu com os balangandãs.\n[…]\nOutra mudança que também ocorreu foi o material do qual os balangandãs são confeccionados, antigamente eram feitos a partir de ouro ou prata, mas, devido ao custo e a pouca busca, os balangandãs passaram a ser pouco comercializados como joias e mais como símbolo cultural. As peças iniciais eram utilizadas na cintura e atualmente podem ser vistas como broches e pingente de colares.\n[…]\nOs balangandãs são constituídos por diversos penduricalhos/pingentes, e cada um deles representa uma coisa, tem um objetivo e uma devoção:\n[…]\nCajado: Oxalá – Orixá da vida, considerado como pai de todos, criador dos seres humanos e do mundo.\n[…]\nThe Miranda Look: Os Balangandãs"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Viola caipira",
      "descricao": "Instrumento de cordas símbolo da música sertaneja de raiz."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Na viola caipira tradicional, as cordas são tocadas em pares. Quantas cordas ela tem no total?",
    "resposta": "Dez",
    "distratores": [
      "Seis",
      "Oito",
      "Doze"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Viola_caipira"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Viola_caipira",
        "situacao": "ok",
        "texto": "A viola caipira  é um instrumento musical de cordas dedilhadas e uma das variantes regionais da viola brasileira. É também conhecido como viola sertaneja ou viola cabocla mas, a depender da cultura local, ainda pode ter  várias outras denominações: viola de pinho, viola caipira, viola sertaneja, viola de arame, viola nordestina, viola cabocla, viola cantadeira, viola de dez cordas, viola chorosa, \n[…]\nA viola caipira tem características muito semelhantes ao violão. Tanto no formato quanto na disposição das cordas e acústica, porém é um pouco menor.\n[…]\nA disposição das cordas da viola varia razoavelmente, embora sempre haja cinco ordens, estes geralmente consistindo em dez cordas dispostas em cinco pares. De forma geral, os dois pares mais agudos são afinados em uníssono, enquanto os demais pares são afinados na mesma nota, mas com diferença de alturas de uma oitava. De qualquer forma, cada ordem é sempre tocada com todas as cordas simultâneas, como se fosse uma única corda.\n[…]\nA viola é o símbolo da música caipira, conhecida popularmente como moda de viola.\n[…]\nEm certas regiões, por tradição, as violas carregam pequenos chocalhos feitos de guizo de cascavel, pois segundo a lenda, tem poder de proteção para a viola e para o violeiro. Segundo contam os violeiros de antigamente, o poder do guizo chega a quebrar as cordas e até mesmo o instrumento do violeiro adversário.\n[…]\nBruna Viola\n[…]\nViola brasileira\n[…]\nAraújo, Rui Torneze de (1998). Viola Caipira. Estudo Dirigido. São Paulo: Irmãos Vitale S/A. 64 páginas. CDD 787.3\n[…]\nMoura, Reis (2000). Descomplicando a Viola. Método Básico de Viola Caipira. 1. Brasília: Edição do autor. 62 páginas. ISBN 85-901637-1-7\n[…]\nQueiroz, Enúbio Divino de (2000). Repertório de Ouro para Viola Caipira. São José do Rio Preto: Ricordi. 76 páginas\n[…]\nViola, Braz da (1992). A Viola Caipira. São Paulo: Ricordi. 47 páginas\n[…]\n«Viola caipira no Centro Nacional de Folclore e Cultura Popular»"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Jangada",
      "descricao": "Embarcação de pesca de madeira, com vela triangular, típica do litoral do Nordeste do Brasil."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Em 1941, uma jangada saiu de Fortaleza e navegou até o Rio para levar as reivindicações dos pescadores a Getúlio Vargas. Quantos jangadeiros estavam a bordo?",
    "resposta": "Quatro",
    "distratores": [
      "Dois",
      "Seis",
      "Oito"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/It%27s_All_True_(film)",
      "https://pt.wikipedia.org/wiki/Jangada"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/It%27s_All_True_(film)",
        "situacao": "ok",
        "texto": "It's All True is an unfinished Orson Welles feature film comprising three stories about Latin America. \"My Friend Bonito\" was supervised by Welles and directed by Norman Foster in Mexico in 1941. \"Carnaval\" (also known as \"The Story of Samba\") and \"Jangadeiros\" (also known as \"Four Men on a Raft\") were directed by Welles in Brazil in 1942. It was to have been Welles's third film for RKO Radio Pict\n[…]\nAn article in the December 8, 1941, issue of Time, titled \"Four Men on a Raft\", inspired the third part of the film. It related the story of four impoverished Brazilian fishermen who set sail from Fortaleza on the São Pedro, a simple sailing raft (jangada), in September 1941. Led by Manoel Olimpio Meira (called \"Jacaré\"), the jangadeiros were protesting an economically exploitative system in which all fishermen were forced to give half of their catch to the jangada owners.\n[…]\nThe remaining half barely supported the men and their families. Jangadeiros also were not eligible for social security benefits accorded other Brazilians. After 61 days and 1,650 miles without any navigating instruments, braving the wind, rain and fierce sun, and making many friendly stops along the way, they sailed into Rio de Janeiro harbor as national heroes. The four men arrived in what was then the Brazilian capital to file their grievances directly to President Getúlio Vargas.\n[…]\nThe result was a bill that was signed into law by President Vargas that entitled the jangadeiros to the same benefits awarded to all union laborers—retirement funds, pensions for widows and children, housing, education and medical care.\n[…]\nTest footage of the fishermen in Fortaleza\n[…]\nThe reenactment of the arrival of the jangadeiros in Rio harbor\n[…]\nNegative matching 15 reels of \"Jangadeiros\"\n[…]\n\"Jangadeiros\" — Approximately 28,000 feet of black-and-white not preserved; approximately 35,950 feet preserved."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jangada",
        "situacao": "ok",
        "texto": "Jangada refere-se, entre outros significados, a uma embarcação de madeira utilizada por pescadores artesanais da Região Nordeste do Brasil.\n[…]\nOs pescadores tradicionais sempre obedeceram a regras bem conhecidas de uso das marés, dos regimes de ventos, das correntes, da sazonalidade da pesca. Em função disso, suas incursões no mar variam bastante quanto ao tempo de permanência, ao trajeto navegado, e ao tipo de pesca que conseguem. Um período de permanência comum era de três dias a uma semana (algumas vezes mais, como relatam os antigos pescadores) no mar alto, a até 120 quilômetros da costa.\n[…]\nEssa duração é cada vez mais rara, e os jangadeiros dificilmente ultrapassam os três dias, na atualidade, com incursões de até 50 quilômetros distanciados da costa. Da mesma forma, as incursões de grupos de jangadas também são cada vez mais raras, sendo mais frequente a pesca de uma turma isolada, numa única jangada.\n[…]\nAinda assim, em vários pontos do litoral cearense há corridas de jangadas, sendo muito famosa a que ocorre anualmente na região do porto do Mucuripe (na capital do Estado do Ceará, Fortaleza). Dezenas de jangadas participam dessas competições populares, num espetáculo sem paralelo no extenso litoral brasileiro.\n[…]\nFoi na Índia que os portugueses viram pela primeira vez uma pequena embarcação chamadas de jang. Eram três ou quatro toras de madeira amarrados com cordas de fibras vegetais. Os portugueses descreveram essa embarcação com jangá, changgh ou ainda  xanga. Jangada (ou Chabgadam) era seu aumentativo, ou seja, uma janga grande, construída com cinco ou seis toras."
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Capoeira",
      "descricao": "Arte marcial afro-brasileira que combina luta, dança, música e acrobacia."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Em que ano entrou em vigor o Código Penal que transformou a prática da capoeira em crime no Brasil?",
    "resposta": "1890",
    "distratores": [
      "1824",
      "1888",
      "1910"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Capoeira"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Capoeira",
        "situacao": "ok",
        "texto": "A capoeira ou capoeiragem é uma expressão cultural e esporte afro-brasileiro que mistura arte marcial, dança e música. Acredita-se que foi desenvolvida no Brasil através do Engolo, arte marcial angolana introduzida no Brasil por escravizados africanos.\n[…]\nEm pouco tempo, mais especificamente em 1890, a República Brasileira decretou a proibição da capoeira em todo o território nacional, vista a situação caótica da capital brasileira e a notável vantagem que um capoeirista levava no confronto corporal contra um policial. Código Penal da República, adapto pelo estado brasileiro em 1890, considerou a capoeira ilegal debaixo o artigo 402 que disse que uma pessoa vista participando da capoeira pode pegar de dois a seis anos de prisão.\n[…]\nEm 1937, Bimba fundou o centro de Cultura Física e Luta Regional, com alvará da secretaria da Educação, Saúde e Assistência de Salvador. Seu trabalho obteve aceitação social, passando a ensinar para as elites econômicas, políticas, militares e universitárias. Finalmente, em 1940, a capoeira saiu do código Penal brasileiro e deixou definitivamente a ilegalidade. Começou, então, um longo processo de desmarginalização da capoeira.\n[…]\n1) Confederação Brasileira de Capoeira\n[…]\nSistema mais comumente usado por muitos grupos regularizados, porém não-filiados por opção à Confederação Brasileira de Capoeira por variadas razões. Este sistema utiliza as cores primárias e secundárias, sendo as misturas de cores nas cordas descritas como \"Transformações\", ou seja, simbolizando a saída de uma graduação e ingresso à outra seguinte.\n[…]\nMúsica afro-brasileira\n[…]\nAssociação Brasileira de Capoeira Angola (ABCA)\n[…]\nFederação Internacional de Capoeira (FICA)\n[…]\nConfederação Brasileira de Capoeira (CBC)\n[…]\nA História da Capoeira - Buenas Ideias"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Berimbau",
      "descricao": "Instrumento de corda de arco e cabaça que comanda o ritmo da roda de capoeira."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Para mudar o som do berimbau, o tocador encosta no arame uma moeda ou uma pedra lisa. Como se chama essa peça?",
    "resposta": "Dobrão",
    "distratores": [
      "Caxixi",
      "Baqueta",
      "Cabaça"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Berimbau"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Berimbau",
        "situacao": "ok",
        "texto": "O berimbau(português brasileiro) ou hungo(português angolano) é um instrumento de corda com origem em Angola e tradicional da Bahia.\n[…]\nO tocador de hungo usa a mão esquerda para sustentar o conjunto e pratica um movimentos de vai e vem contra o ventre, utilizando uma pedra ou uma moeda (dobrão), para pressionar o fio. A mão direita, com uma varinha, percute a corda. É usado, também, o caxixi, que é um pequeno chocalho preso aos dedos do tocador.\n[…]\nNa capoeira, até três berimbaus podem ser tocados conjuntamente, cada um com uma função mais ou menos definida.\n[…]\nEm 1826, o artista francês Jean-Baptiste Debret retratou um tocador de berimbau em \"Joueur d'Uruncungo\".\n[…]\nAs variações dos toques (ritmos) do berimbau são inúmeras, entre elas:\n[…]\nSão Bento Pequeno (ou Angola Invertido): similar ao Angola, mas com os tons altos e baixos invertidos ; geralmente tocado com o berimbau médio, enquanto se toca o toque Angola no berimbau mais grave.\n[…]\nSegura-se o berimbau com uma das mãos, à altura da cabaça; com a mesma mão, segura-se a moeda ou uma pedra de areia lavada que, durante o toque do instrumento, será, várias vezes, pressionada contra o arame, de forma a modificar o tom do berimbau. A cabaça posiciona-se à altura do abdome do tocador, pois este modifica-lhe o som, quando aproxima ou afasta a cabaça de seu corpo.\n[…]\nCom a vareta na outra mão, executam-se as batidas no arame; e, na mesma mão da vareta, o tocador segura o caxixi, de forma a preencher o som da batida da vareta com o som do caxixi: uma espécie de chocalho.\n[…]\nComo surgiu o berimbau?, na revista Superinteressante.\n[…]\nBeat! Percussion Fever. \"Berimbau\""
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Literatura de cordel",
      "descricao": "Poesia popular nordestina impressa em folhetos baratos, geralmente ilustrados com xilogravuras."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Que poeta paraibano, morto em 1918, é considerado o pai da literatura de cordel no Brasil?",
    "resposta": "Leandro Gomes de Barros",
    "distratores": [
      "Patativa do Assaré",
      "Cego Aderaldo",
      "João Martins de Athayde"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Leandro_Gomes_de_Barros",
      "https://pt.wikipedia.org/wiki/Literatura_de_cordel"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Leandro_Gomes_de_Barros",
        "situacao": "ok",
        "texto": "Leandro Gomes de Barros (Pombal, 19 de novembro de 1865 — Recife, 4 de março de 1918) foi um poeta de literatura de cordel brasileiro.\n[…]\nEm 19 de novembro é comemorado o Dia do Cordelista, em homenagem ao nascimento de Leandro Gomes de Barros.\n[…]\nÉ considerado como o primeiro escritor brasileiro de literatura de Cordel, tendo escrito aproximadamente 240 obras. No seu tempo, era cognominado \"O Primeiro sem Segundo\", e ainda é considerado o maior poeta popular do Brasil de todos os tempos, autor de vários clássicos e campeão absoluto de vendas, com muitos folhetos que ultrapassam a casa dos 3 milhões de exemplares vendidos.\n[…]\nDepois de fundar uma pequena gráfica, em 1906, seus folhetos se espalharam pelo Nordeste, sendo considerado por Câmara Cascudo o mais lido dos escritores populares.\n[…]\nEm 1909, Leandro Gomes de Barros publicou seus poemas na seção \"Lyra Popular\" no jornal O Rebate de Juazeiro do Norte, Ceará.\n[…]\nSegundo Carlos Drummond de Andrade, Leandro Gomes de Barros foi \"o rei da poesia do sertão e do Brasil\".\n[…]\nSegundo Permínio Ásfora, teria sido preso no ano de 1918 porque o chefe de polícia considerou afronta às autoridades alguns dos versos da obra O Punhal e a Palmatória, trama que tratava de um senhor de engenho assassinado por um homem em quem teria dado uma surra e deixando-o sangrando os olhos. A estrofe considerada desrespeitosa:\n[…]\nSebastião Nunes Batista, na Antologia da Literatura de Cordel, dá como causa da morte do cordelista a gripe espanhola.\n[…]\nÉ o patrono da cadeira número um da Academia Brasileira de Literatura de Cordel.\n[…]\nLeandro Gomes de Barros Portal Domínio Público"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Literatura_de_cordel",
        "situacao": "ok",
        "texto": "Literatura de cordel também conhecida no Brasil como folheto, literatura popular em verso, ou simplesmente cordel, é um gênero literário popular escrito frequentemente em versos, na forma rimada, originado em relatos orais e depois impresso em folhetos. Remonta ao século XVI, quando o Renascimento popularizou a impressão de relatos orais, e mantém-se uma forma literária popular no Brasil.\n[…]\nNa  segunda metade do século XIX começaram as impressões de folhetos brasileiros, com suas características próprias. Os temas incluem fatos do cotidiano, episódios históricos, lendas, temas religiosos, entre muitos outros. Leandro Gomes de Barros foi influenciado pelo cordel nos romances de cavalaria conhecidos como Ciclo Carolíngio ou Matéria de França.\n[…]\nEm 1909, o cordelista Leandro Gomes de Barros publicou seus poemas na seção \"Lyra Popular\", no jornal O Rebate, de Juazeiro do Norte, Ceará.\n[…]\nForam esses bardos do improviso os precursores da literatura de cordel escrita. Os registros são muito vagos, sem consistência confiável, de repentistas ou violeiros antes de Manoel Riachão ou Mergulhão, mas Leandro Gomes de Barros teria escrito a peleja de Manoel Riachão com o Diabo em fins do século passado.\n[…]\nOs poetas Leandro Gomes de Barros (1865-1918) e João Martins de Athayde (1880-1959) estão entre os principais autores do passado.\n[…]\nA literatura de cordel exerceu influência sobre outras mídias. O dramaturgo Ariano Suassuna usou o cordel como fonte de inspiração em sua peça de teatro, Auto da Compadecida (1955), usando o personagem João Grilo, personagem do folclore português, presente na literatura de cordel brasileira desde 1932, parte do enredo foi inspirada em dois folhetos de Leandro Gomes de Barros (1865-1918), \"O Dinheiro\", também chamado de \"O testamento do cachorro\" e \"O cavalo que defecava dinheiro\".\n[…]\nAcademia Brasileira de Literatura de Cordel"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Literatura de cordel",
      "descricao": "Poesia popular nordestina impressa em folhetos baratos, geralmente ilustrados com xilogravuras."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Ariano Suassuna tirou episódios do Auto da Compadecida, como o enterro do cachorro, de qual tradição popular nordestina?",
    "resposta": "Literatura de cordel",
    "distratores": [
      "Bumba meu boi",
      "Maracatu",
      "Reisado"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Auto_da_Compadecida",
      "https://pt.wikipedia.org/wiki/Literatura_de_cordel"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Auto_da_Compadecida",
        "situacao": "ok",
        "texto": "Auto da Compadecida é uma peça teatral em forma de auto, em três atos, escrita pelo autor brasileiro Ariano Suassuna em 1955. Sua primeira encenação aconteceu em 1956, no Recife, em Pernambuco. A peça também foi encenada em 1974, com direção de João Cândido. Em 2 de outubro de 1957 a peça foi publicada em forma de livro pela editora Agir no Rio de Janeiro.\n[…]\nTrata-se de um drama ocorrido na região Nordeste do Brasil, com elementos da tradição da literatura de cordel, do gênero comédia e traços do barroco católico brasileiro, com a marcante mistura da cultura popular e da tradição religiosa.\n[…]\nDa literatura de cordel, Suassuna pegou emprestado o personagem João Grilo, personagem folclórico presente tanto no Brasil, quanto em Portugal. Também buscou inspiração em dois folhetos de Leandro Gomes de Barros (1865-1918), O Dinheiro, também chamado de O testamento do cachorro e O cavalo que defecava dinheiro.\n[…]\nO Auto da Compadecida projetou Suassuna em todo o país e foi considerada por Sábato Magaldi, em 1962, \"o texto mais popular do moderno teatro brasileiro\".\n[…]\nA peça foi adaptada para o cinema pela primeira vez em 1969, com o filme A Compadecida. A segunda adaptação veio em 1987, com o filme Os Trapalhões no Auto da Compadecida.\n[…]\nAuto da Compadecida foi encenada pela primeira vez no dia 11 de setembro de 1956, no Teatro de Santa Isabel, pelo Teatro Adolescente do Recife, sob direção de Clênio Wanderley, figurino de Victor Moreira e cenários de Aloísio Magalhães, tendo como elenco os seguintes atores:\n[…]\nA Compadecida: Córdula Reis\n[…]\nA Compadecida (filme de 1969)\n[…]\nOs Trapalhões no Auto da Compadecida (filme de 1987)\n[…]\nO Auto da Compadecida (minissérie de 1999)\n[…]\nO Auto da Compadecida (filme de 2000)\n[…]\nO Auto da Compadecida (teatro de 2017)\n[…]\nO Auto da Compadecida 2 (filme de 2024)\n[…]\nO Auto da Compadecida, montagem do Grupo Maria Cutia (2025)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Literatura_de_cordel",
        "situacao": "ok",
        "texto": "Literatura de cordel também conhecida no Brasil como folheto, literatura popular em verso, ou simplesmente cordel, é um gênero literário popular escrito frequentemente em versos, na forma rimada, originado em relatos orais e depois impresso em folhetos. Remonta ao século XVI, quando o Renascimento popularizou a impressão de relatos orais, e mantém-se uma forma literária popular no Brasil.\n[…]\nOriunda de Portugal, a literatura de cordel chegou ao Brasil em fins do século XVIII, ganhando força a partir do século XIX no interior nordestino.[carece de fontes]?\n[…]\nPelo fato de funcionar como divulgadora da arte do cotidiano, das tradições populares e dos autores locais, a literatura de cordel é de inestimável importância na manutenção das identidades locais e das tradições literárias regionais, contribuindo para a perpetuação do folclore brasileiro;\n[…]\nNo caso da literatura de cordel nordestina, faz parte da tradição do gênero o uso de rimas consoantes. Se um folheto de cordel usa rimas toantes, o conhecedor de cordel pensa logo que o autor daquele folheto desconhece a existência destas regras. Um cordel escrito assim pode até ser um grande poema, mas não se pode dizer que se trata de 'um cordel autêntico'.\n[…]\nA literatura de cordel exerceu influência sobre outras mídias. O dramaturgo Ariano Suassuna usou o cordel como fonte de inspiração em sua peça de teatro, Auto da Compadecida (1955), usando o personagem João Grilo, personagem do folclore português, presente na literatura de cordel brasileira desde 1932, parte do enredo foi inspirada em dois folhetos de Leandro Gomes de Barros (1865-1918), \"O Dinheiro\", também chamado de \"O testamento do cachorro\" e \"O cavalo que defecava dinheiro\".\n[…]\n«Métricas e Cordel: Aprenda as métricas para escrever um Cordel» (PDF). Texto retirado do livro “Vertentes e Evolução da Literatura de Cordel”. Consultado em 5 de maio de 2024"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "J. Borges",
      "descricao": "José Francisco Borges, xilogravurista e cordelista pernambucano famoso pelas capas de folhetos de cordel."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Que escritor uruguaio teve o livro Palavras Andantes ilustrado com as xilogravuras do pernambucano J. Borges?",
    "resposta": "Eduardo Galeano",
    "distratores": [
      "Mario Benedetti",
      "Jorge Luis Borges",
      "Juan Carlos Onetti"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/J._Borges",
      "https://en.wikipedia.org/wiki/J._Borges"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/J._Borges",
        "situacao": "ok",
        "texto": "José Francisco Borges, conhecido artisticamente como J. Borges (Bezerros, 4 de agosto de 1935 – Bezerros, 26 de julho de 2024), foi um artista, cordelista e poeta brasileiro. Foi um dos mais famosos xilógrafos de Pernambuco. Começou o trabalho com xilogravura para ilustrar suas histórias em cordéis, e hoje elas são vendidas a colecionadores, artistas e intelectuais. Também já publicou vários álbun\n[…]\nJosé Francisco Borges nasceu em 4 de agosto de 1935, no município de Bezerros, Pernambuco, onde deu início a sua vida artística e onde residiu até sua morte, escrevendo, ilustrando e publicando os seus folhetos.\n[…]\nAos 8 anos, José Francisco Borges já trabalhava na terra com o pai. Aos dez, já fabricava e vendia colheres de pau na feira. Foi oleiro, confeccionou brinquedos artesanais e vendeu livros de cordel.\n[…]\nDescoberto por colecionadores e marchands, viu seu trabalho ser levado aos meios acadêmicos do país. Na década de 1970, José Borges desenhou a capa de \"As Palavras Andantes\", de Eduardo Galeano. e gravuras suas foram usadas na abertura da Telenovela Roque Santeiro, da Rede Globo. Nessa época, começou a gravar matrizes dissociadas dos cordéis, de maior tamanho. Isso permitiu expor no exterior: em 1992, na Galeria Stähli, em Zurique, e no Museu de Arte Popular de Santa Fé, na cidade de Novo México.\n[…]\nJ. Borges foi condecorado com a comenda da Ordem do Mérito pelo presidente Fernando Henrique Cardoso, recebeu o prêmio UNESCO na categoria Ação Educativa/Cultural. Em 2002, foi um dos treze artistas escolhidos para ilustrar o calendário anual das Nações Unidas. Sua xilogravura A Vida na Floresta abre o ano no calendário. Em 2006, foi tema de reportagem no The New York Times. O escritor Ariano Suassuna o considerava o melhor gravador popular do Nordeste.\n[…]\nTesoros Trading Company reprint of New York Times article about Jose Borges"
      },
      {
        "url": "https://en.wikipedia.org/wiki/J._Borges",
        "situacao": "inexistente",
        "texto": ""
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Mestre Vitalino",
      "descricao": "Vitalino Pereira dos Santos, artesão pernambucano famoso por seus bonecos de barro que retratam o cotidiano nordestino."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Em Caruaru, em que bairro viveu Mestre Vitalino, hoje cheio de ateliês de artesãos que seguem sua arte em barro?",
    "resposta": "Alto do Moura",
    "distratores": [
      "Alto da Sé",
      "Morro da Conceição",
      "Alto do Pascoal"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Mestre_Vitalino",
      "https://pt.wikipedia.org/wiki/Alto_do_Moura"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Mestre_Vitalino",
        "situacao": "ok",
        "texto": "Vitalino Pereira dos Santos, conhecido como Mestre Vitalino (Caruaru, 10 de julho de 1909 – Caruaru, 20 de janeiro de 1963), foi um importante artesão, ceramista popular e músico, sendo considerado um dos maiores artistas da História da arte do barro no Brasil.\n[…]\nVitalino Pereira dos Santos nasceu na cidade de Caruaru, Pernambuco. Era filho de um lavrador e de uma artesã que fazia panelas de barro para vender na feira. Ainda criança, começou a modelar pequenos animais de seu repertório rural, como bois e cavalos, com as sobras do barro usado por sua mãe na produção de utensílios domésticos para serem vendidos na feira de Caruaru.\n[…]\nA produção do artista passou a ser iconográfica e inspirou a formação de novas gerações de artistas, especialmente no Alto do Moura, um bairro que fica na cidade de Caruaru, onde viveu. A casa onde viveu parte de sua vida atualmente é a instalação da Casa Museu Mestre Vitalino. O entorno é ocupado por oficinas de artesãos.\n[…]\nParte de sua obra pode ser contemplada no Museu do Louvre, em Paris, na França. No Brasil, a maior parte está nos museus Casa do Pontal e Chácara do Céu, Rio de Janeiro; Acervo Museológico da Universidade Federal de Pernambuco, em Recife; e no Alto do Moura.\n[…]\nO tipo de arte que produziu foi batizado por especialistas como arte figurativa.\n[…]\nEm 2017, por unanimidade, os membros do Conselho Estadual de Preservação do Patrimônio Cultural (CEPPC) aprovaram o tombamento do acervo de Mestre Vitalino. O tombamento incluiu 232 peças do mestre, que fazem parte do acervo de quatro instituições públicas: O Museu do Barro de Caruaru (Mubac), o Centro Cultural Benfica, o Museu de Arte Popular do Recife (MAP) e o Museu do Homem do Nordeste.\n[…]\nPágina oficial do Museu Casa do Mestre Vitalino"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Alto_do_Moura",
        "situacao": "ok",
        "texto": "O Alto do Moura é um bairro do município de Caruaru, principal cidade do agreste pernambucano, localizado a cerca de 135 km de Recife. O bairro é considerado um dos maiores centros de arte figurativa das Américas, destacando-se por meio do artesanato figurativo em barro, tradição inaugurada por Mestre Vitalino (1909-1963) que retrata personagens e cenários cotidianos da região.\n[…]\nSeu modo de fazer cerâmica continuou a ser cultivado por seus filhos e por outros artesãos do Alto do Moura que aprenderam com ele, sendo ainda hoje considerado o Mestre artesão do bairro e referência do que seria a tradição em barro do local. Severino Vitalino (1940-2019) foi o maior representante da prática de seu pai, produzindo suas réplicas e usando o chão como base de trabalho, mantendo a Casa-Museu Mestre Vitalino como ateliê aberto.\n[…]\nA Casa-Museu é o principal patrimônio material do Alto do Moura, sendo um dos principais cartões postais do bairro e do município de Caruaru. Foi a última residência de Mestre Vitalino e mantém a mesma estrutura de sua construção, em 1959.\n[…]\nManuel Eudócio (1931-2016) foi um artesão nascido no Alto do Moura e contemporâneo de Vitalino, com quem aprendeu o ofício na cerâmica. Seu repertório retrata temas de seu cotidiano, recriando brincantes do reisado e do maracatu, carroças e animais, além de renovar imagens tradicionais, como Lampião e Maria Bonita. Eudócio também moldou em barro a figura de Mestre Vitalino.\n[…]\nA tradição em cerâmica do Alto do Moura tem como referência a técnica de Mestre Vitalino de criação de bonecos, que se mantém ativa até hoje pelas novas gerações de artesãos que ali moram e trabalham. Entretanto, com as novas dinâmicas sociais e as transações de conhecimento surgiu uma nova categoria técnica no manuseio do barro, com processos produtivos e valor atribuído distintos."
      }
    ]
  }
]

---

# MANIFESTO

# Manifesto de Perguntas — Mestre2

> **Versão preliminar 0.83 — 2026-10-27**
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
- **Resposta que é um ano ou uma data: sempre `multipla`.** Quando a resposta é um ano específico ("1969") ou uma data mais detalhada ("15 de novembro de 1889", "2 de fevereiro"), a pergunta é obrigatoriamente de múltipla escolha, com ou sem figura. Os distratores são anos (ou datas) próximos e críveis, no mesmo formato da resposta, nenhum deles também correto. A regra vale só quando **a resposta é o próprio ano ou a data**: século e década ("século dezenove", "década de 1970") e respostas em que o ano identifica outra coisa, como uma edição de Olimpíada ou de Copa ("Londres 2012", "1970, no México"), podem continuar abertas.
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
- No máximo **3 perguntas por âncora**, nunca com o mesmo ângulo (§4).
- **Prefira âncoras centrais e conhecidas**, mesmo que já tenham perguntas, a âncoras novas e obscuras (desde 2026-10-27; antes, "prefira âncoras novas"). O gerador recebe a lista das âncoras e perguntas já existentes no subtema, para aprofundá-las com fatos e ângulos novos, sem repetir fatos.
- **Tentar incluir uma âncora nova a cada 50 perguntas**, tão conhecida quanto as centrais, para manter alguma variedade. Se for difícil achar uma assim, o lote fica sem: uma âncora nova obscura não vale a troca.

**No banco, por subtema:**
- `conexao` + `nome` somam pelo menos **20%**.
- A distribuição por ângulo e por âncora é acompanhada pelo relatório do pipeline, e os lotes seguintes são **encomendados para preencher as lacunas**.
