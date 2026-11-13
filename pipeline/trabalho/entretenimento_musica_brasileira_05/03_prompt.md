Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Música Brasileira** (tema **Entretenimento**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Jorge Ben Jor",
      "descricao": "Cantor e compositor brasileiro de samba-rock, autor de Mas Que Nada."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Em 1989, Jorge Ben passou a se chamar Jorge Ben Jor, porque seus direitos autorais eram confundidos com os de qual músico americano?",
    "resposta": "George Benson",
    "distratores": [
      "Tony Bennett",
      "Ben E. King",
      "George Michael"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Jorge_Ben_Jor"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Jorge_Ben_Jor",
        "situacao": "ok",
        "texto": "Jorge Duílio Lima Menezes (Rio de Janeiro, 22 de março de 1939), mais conhecido como Jorge Ben (AFI: [ˌʒɔʁʒi ˈbẽj̃]) ou Jorge Ben Jor, é um cantor, compositor e músico brasileiro. Em 2008, a revista Rolling Stone Brasil o nomeou como o 5.º maior artista da história da música brasileira. Foi incluído na lista dos 30 maiores ícones brasileiros da guitarra e do violão, também pela Rolling Stone Brasi\n[…]\nSeu estilo característico possui diversos elementos, entre eles: rock, samba, samba-rock, bossa nova, jazz, maracatu, funk, ska e até mesmo hip hop, com letras que misturam humor e sátira, além de temas esotéricos. A obra de Jorge Ben tem uma importância singular para a música brasileira, por incorporar elementos novos no suingue e na maneira de tocar violão, com características do rock, soul e funk norte-americanos.\n[…]\nFinalmente, em novembro de 2020, foi lançado o livro África Brasil – Um dia Jorge Ben voou para toda a gente ver, que analisa o álbum África Brasil — considerado um divisor na carreira do músico. A autora, a jornalista musical Kamille Viola, após extensa pesquisa nos registros civis, encontrou uma certidão de nascimento que confirma a data de 22 de março de 1939 como sendo a correta.\n[…]\nNa década seguinte, Jorge Ben dedicou-se a divulgar suas músicas no exterior. Em 1989, ele mudou o nome artístico de Jorge Ben para Jorge Benjor, logo depois alterado para Jorge Ben Jor. Na época, foi especulado que a mudança teria sido provocada pela numerologia, mas o mais plausível é que tenha ocorrido para evitar confusões com o músico americano George Benson, pois Jorge Ben estava começando a se tornar muito conhecido nos Estados Unidos na época.\n[…]\n2007 - Coisa de Jorge\n[…]\n1965 - \"Agora Ninguém Chora Mais\" / \"George Well\" (Philips 365.089)\n[…]\n2012 - \"Quero Toda Noite\" (Fiuk com Jorge Ben Jor) (Warner 5052498895625)\n[…]\nJorge Ben Jor no Facebook\n[…]\nJorge Ben Jor no Instagram\n[…]\nJorge Ben Jor no Twitter"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Zeca Pagodinho",
      "descricao": "Cantor e compositor brasileiro de samba e pagode."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O apelido Zeca Pagodinho nasceu nas rodas de samba do subúrbio carioca. Qual é o nome de batismo do cantor?",
    "resposta": "Jessé Gomes da Silva Filho",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Zeca_Pagodinho"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Zeca_Pagodinho",
        "situacao": "ok",
        "texto": "Jessé Gomes da Silva Filho, conhecido pelo nome artístico Zeca Pagodinho (Rio de Janeiro, 4 de fevereiro de 1959), é um cantor e compositor brasileiro atuante desde o final da década de 1980 e atualmente tido pela crítica e pela imprensa especializada como um dos mais exponenciais nomes do samba.\n[…]\nFilho de Irinéia e Jessé, Zeca nasceu no Irajá, onde desde pequeno passou a frequentar rodas de samba por influência de sua família. Durante a juventude, foi office-boy e apontador de jogo do bicho. Morou em diversos bairros do Rio, mas sempre demonstrou apreço especial por Xerém (distrito do município de Duque de Caxias), onde possui um sítio (no qual foram gravados os DVDs da série O Quintal do Pagodinho) e uma escola de música para crianças carentes da região.\n[…]\nAtualmente, Zeca reside na Barra da Tijuca com a mulher, Mônica Silva, e seus quatro filhos: Eduardo, Louis, Elisa e Maria Eduarda.\n[…]\nZeca Pagodinho é considerado por especialistas e estudiosos da história do samba como um dos mais prodigiosos versadores de partido-alto da sua geração, dada sua intensa participação em rodas de samba do bloco Cacique de Ramos no início de sua carreira.\n[…]\nApesar da imagem constantemente endossada de uma figura boêmia e desregrada, Pagodinho contrasta expondo publicamente momentos de intensa vida familiar em suas redes sociais oficiais. Pagodinho casou-se em 1986 com Mônica Silva, com quem teve quatro filhos: Louis, Eduardo, Elisa e Maria Eduarda. Pagodinho é ainda avô de Noah (nascido em 2010 e a quem o cantor dedicou a canção Orgulho do Vovô em parceria com Arlindo Cruz) e Catarina (nascida em 2019).\n[…]\nEm 2015, Pagodinho perdeu seu filho mais velho, Elias Gabriel, fruto de um relacionamento anterior ao seu casamento atual. Na ocasião, o cantor e seus filhos lamentaram a morte precoce de Elias."
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Beth Carvalho",
      "descricao": "Cantora, violonista, cavaquinista e compositora brasileira de samba (1946–2019)."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Por ter revelado Zeca Pagodinho, Jorge Aragão e o Fundo de Quintal, Beth Carvalho ganhou qual apelido?",
    "resposta": "Madrinha do Samba",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Beth_Carvalho"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Beth_Carvalho",
        "situacao": "ok",
        "texto": "Elizabeth \"Beth\" Santos Leal de Carvalho (Rio de Janeiro, 5 de maio de 1946 – Rio de Janeiro, 30 de abril de 2019), foi uma cantora, compositora e instrumentista brasileira. Desde que começou a fazer sucesso, na década de 1970, Beth se tornou uma das maiores intérpretes do samba, ajudando a revelar nomes como Luiz Carlos da Vila, Jorge Aragão, Zeca Pagodinho, Almir Guineto, grupo Fundo de Quintal,\n[…]\nFrequentadora assídua dos pagodes, entre eles os do bloco carnavalesco Cacique de Ramos, Beth Carvalho revelou artistas como o grupo Fundo de Quintal, Zeca Pagodinho, Almir Guineto, Sombra, Sombrinha, Arlindo Cruz, Luiz Carlos da Vila, Jorge Aragão , Bezerra da Silva e muitos outros. Por essa característica, Beth ganhou a alcunha de \"Madrinha do Samba\".\n[…]\nNa segunda metade da história do samba pós bossa nova no final da década de 1970 e início de 1980 lançou novo o décimo primeiro álbum em LP denominado “Pé no Chão\", precisamente, em 1978. Assim nasce mais uma contribuição da reconhecida Madrinha do Samba a cantora, instrumentista e compositora Beth Carvalho com nova proposta de instrumentação musical de relevância para o samba e cultura brasileira.\n[…]\nO DVD traz ainda um histórico documentário sobre o samba de roda da Bahia. Em 2013 recebeu homenagem da escola de samba paulistana Acadêmicos do Tatuapé com o enredo \"Beth Carvalho, a madrinha do samba\".\n[…]\nNo começo de 2014, Beth gravou um DVD no Parque Madureira, com antigos sucessos da época em que efervesceu o Bloco Cacique de Ramos e novos sucessos do CD Nosso Samba Tá Na Rua, com participações especiais de Zeca Pagodinho e de sua sobrinha Lu Carvalho e ganhou uma exposição sobre sua vida e carreira no Imperator - Centro Cultural João Nogueira.\n[…]\n2004 - \"Beth Carvalho - A Madrinha do Samba Ao Vivo Convida\" (Indie Records)\n[…]\n2004 - \"Beth Carvalho - A Madrinha do Samba Ao Vivo Convida\" (Indie Records)\n[…]\n1987 - Beth Carvalho ao vivo em Montreux"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Mamonas Assassinas",
      "descricao": "Banda de rock humorístico de Guarulhos, sucesso nacional em 1995 e 1996."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Antes de virar Mamonas Assassinas e apostar no humor, a banda de Dinho tocava rock sério com qual nome?",
    "resposta": "Utopia",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Mamonas_Assassinas"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Mamonas_Assassinas",
        "situacao": "ok",
        "texto": "Mamonas Assassinas, comumente abreviado como Mamonas, foi uma banda brasileira de rock cômico formada em Guarulhos, São Paulo.\n[…]\nNotabilizaram-se por suas composições que conciliavam pop rock com gêneros musicais populares, tais como sertanejo, heavy metal, pagode romântico, vira e forró, e também por suas apresentações irreverentes e excêntricas. Tais fatores tornaram o grupo um notável expoente do rock cômico, gênero antagônico ao rock alternativo que seus integrantes vinham aplicando no repertório da banda Utopia. Hinoto e os irmãos Reoli formaram a banda Ponte Aérea, que se tornou Utopia e, por fim, Mamonas Assassinas.\n[…]\nEste show ficou marcado por conta da banda de abertura desse show terem sido os próprios Mamonas Assassinas porém vestidos de acordo com a banda Utopia e tocando músicas do antigo grupo (realizando o desejo deles de anos antes) e também por vídeos amadores que mostram o momento em que Dinho senta no palco e, em tom de desabafo, manda uma mensagem energética, repleta de energia positiva e críticas àqueles que não acreditaram no seu trabalho, dizendo que nunca se deve deixar de acreditar nos seus sonhos, pois ele e os demais integrantes sempre quiseram se apresentar ali porém eram rejeitados.\n[…]\nNo final dos anos 1980, Sérgio, Bento e Samuel formaram a banda Ponte Aérea, que depois se tornaria Utopia.\n[…]\nUtopia (1992)\n[…]\nMamonas Assassinas - O Show Deve Continuar... (2004)\n[…]\nA banda paulistana 365 compôs a canção \"Manhã de Domingo\", presente no disco \"Do Outro Lado do Rio\" (2005), em homenagem aos Mamonas. Vale lembrar que, quando ainda se chamavam Utopia, os Mamonas abriram vários shows para o 365."
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Samba",
      "descricao": "Gênero musical e dança brasileira de raízes africanas, consolidado no Rio de Janeiro no início do século vinte."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "A palavra samba vem provavelmente de semba, termo da língua quimbundo, de Angola, que designa qual movimento de dança?",
    "resposta": "Umbigada",
    "distratores": [
      "Rodopio",
      "Pisada",
      "Palmas"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Samba"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Samba",
        "situacao": "ok",
        "texto": "Samba é um gênero musical brasileiro originado a partir de tradições afro-brasileiras da Bahia no final do século XIX e desenvolvido no Rio de Janeiro no início do século XX. A palavra também é usada como prefixo para suas derivações, como o samba urbano carioca ou o samba de roda.\n[…]\nO samba tem suas raízes na expressão cultural da África Ocidental e nas tradições folclóricas brasileiras, especialmente aquelas ligadas ao samba rural primitivo dos períodos colonial e imperial, é considerado um dos mais importantes fenômenos culturais do Brasil e um dos símbolos do país. Presente na língua portuguesa ao menos desde o século XIX, a palavra “samba” era originariamente empregada para designar uma “dança popular” ou um “bailado popular”.\n[…]\nNão existe consenso entre estudiosos sobre a etimologia do termo “samba”. Uma corrente tradicionalista defende que o étimo seja oriundo das línguas bantas. Segundo Nei Lopes e Luiz Antônio Simas, precisamente dos verbos semba (em quimbundo, “rejeitar, separar” ou “agradar, encantar, galantear”), sàmba (em quicongo, um tipo de dança em que “um dançarino bate contra o peito de outro”) e samba (em chócue, “brincar, cabriolar”).\n[…]\nJá na América espanhola do passado, os termos samba e semba designavam na região do rio da Prata o candombe, uma dança popular com atabaques, enquanto zamba, na Bolívia, era uma antiga dança das festas de coroação dos reis negros.\n[…]\nNo estado de São Paulo, desenvolveu-se outra modalidade primitiva de samba rural conhecida, praticada basicamente em cidades ao longo do rio Tietê – a partir da capital paulista, até o seu curso médio – e tradicionalmente dividida entre samba de bumbo – com apenas instrumentos de percussão, tendo como regente o bumbo – e o batuque de umbigada – com o tambu, o quinjengue e o guaiá."
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Frevo",
      "descricao": "Gênero musical e dança do carnaval de Pernambuco, de ritmo acelerado, dançado com sombrinhas coloridas."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome do frevo, ritmo frenético do carnaval do Recife, vem de uma pronúncia popular de qual verbo?",
    "resposta": "Ferver",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Frevo"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Frevo",
        "situacao": "ok",
        "texto": "O frevo é um ritmo musical e uma dança brasileira com origem no estado de Pernambuco. Sua música baseia-se na fusão de gêneros como marcha, maxixe, dobrado e polca, e sua dança foi influenciada pela capoeira.\n[…]\nA palavra frevo vem de ferver, por sua corruptela, frever, que passou a designar: efervescência, agitação, confusão, rebuliço; apertão nas reuniões de grande massa popular no seu vai e vem em direções opostas, como o Carnaval, de acordo com o \"Vocabulário Pernambucano\", de Pereira da Costa.\n[…]\nNa terceira e última fase, que vai de 1920 até os dias atuais, com a Proclamação da República e abolição da escravatura, tem-se o surgimento de vários clubes oriundos das classes populares que, apesar dos incentivos do governo e da imprensa que prestigiavam o carnaval burguês europeu, faziam as ruas ferverem. Nesse contexto, nascia o frevo.\n[…]\nEm 2006, reuniu 150 mil pessoas no Recife na gravação do DVD carnavalesco Marco Zero. Em 2013, lançou o disco Amigo da Arte, também dedicado ao frevo e aos gêneros do carnaval. Seu show anual de carnaval no Marco Zero é um dos principais eventos do calendário da música e da cultura de Pernambuco.\n[…]\nNa década de 1930, surgiu a divisão do frevo em três tipos:\n[…]\nUm clássico nas ruas do carnaval do Recife e de Olinda, este frevo é uma das opções utilizadas na disputa musical das ruas no carnaval. Um terceiro exemplo encontrado é o frevo “Canhão 75”, de Nino Galvão, composto em 1951. Trata-se de um frevo com características que lembram os dobrados pertencentes ao repertório das bandas de música que originou o frevo. Inicia com os saxofones executando a melodia, que será reexposta em tutti mais adiante.\n[…]\nCarnaval Recife–Olinda\n[…]\nOsvaldo de Almeida, o pai do frevo"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Bossa nova",
      "descricao": "Gênero musical surgido no Rio de Janeiro no fim dos anos 1950, que mistura samba e jazz."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Na gíria carioca dos anos cinquenta, que deu nome à bossa nova, a palavra bossa significava o quê?",
    "resposta": "Jeito ou talento",
    "distratores": [
      "Festa",
      "Onda",
      "Batida"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Bossa_nova"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Bossa_nova",
        "situacao": "ok",
        "texto": "Bossa nova é o gênero musical resultante de um movimento de transformação do samba irradiado a partir da Zona Sul da cidade do Rio de Janeiro no final da década de 1950 e que, por conseguinte, passou a dar nome ao estilo de interpretação e acompanhamento rítmico dele surgido, que ficou conhecido como “batida diferente”. De acordo com o musicólogo Gilberto Mendes, a vertente era uma das “três fases\n[…]\nA palavra \"bossa\" apareceu pela primeira vez na década de 1930, em \"Coisas Nossas\", samba de Noel Rosa: \"O samba, a prontidão/e outras bossas,/são nossas coisas (...)\". A expressão \"bossa nova\" passou a ser utilizada também na década seguinte para aqueles sambas de breque, baseado no talento de improvisar paradas súbitas durante a música para encaixar falas.\n[…]\nOs cantores Dick Farney e Lúcio Alves, que fizeram sucesso nos anos da década de 1950 com um jeito suave e minimalista de cantar - em oposição a cantores de grande potência sonora de gerações anteriores como Vicente Celestino, Nelson Gonçalves, Silvio Caldas e Dorival Caymmi - foram influências nos futuros artistas da bossa nova.\n[…]\nAlves também tinha um jeito suave de cantar e como Farney também tentou fazer carreira nos EUA por um ano. Ao voltar ao Brasil, retomou sua carreira como cantor independente.\n[…]\nComo diretor musical do CPC, a ideia do Carlos Lyra era levar a bossa nova para as ruas, mas também levar a música do povo para a classe média universitária. Com o apoio de Sérgio Cabral, ao mesmo tempo um intelectual da zona sul carioca e uma pessoa com trânsito com os então chamados sambistas de morro, o CPC promoveu shows de sambistas como Cartola, Nelson Cavaquinho, Ismael Silva e Zé Keti, artistas que estavam à época ignorados pelas gravadoras e pela grande mídia.\n[…]\nEsta seção lista alguns filmes onde a Bossa Nova é a temática principal do enredo e/ou também nos quais houve largo uso de seu repertório na sua trilha sonora."
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Raul Seixas",
      "descricao": "Cantor e compositor baiano, pioneiro do rock brasileiro."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Que apelido de Raul Seixas vem do título de uma canção do seu disco O Dia em que a Terra Parou, de 1977?",
    "resposta": "Maluco Beleza",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Raul_Seixas"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Raul_Seixas",
        "situacao": "ok",
        "texto": "Raul Santos Seixas OMC (Salvador, 28 de junho de 1945 – São Paulo, 21 de agosto de 1989) foi um cantor, compositor, produtor e multi-instrumentista brasileiro, frequentemente considerado um dos pioneiros do rock brasileiro. Também foi produtor musical da CBS, durante sua estadia na cidade do Rio de Janeiro e, por vezes, é chamado de Pai do Rock Brasileiro e Maluco Beleza. Sua obra musical é compos\n[…]\nSegundo Raul, um dos personagens principais dessas histórias era um cientista maluco chamado \"Melô\" (algo como \"amalucado\"), que viajava para diversos lugares imaginários como o \"Nada\", o \"Tudo\", \"Vírgula\", \"Xis ao Cubo\" e \"Oceanos de Cores\". Segundo Raul, \"Melô\" era sua \"outra parte, a que buscava as respostas, o eu fantástico, viajando fora da lógica em uma maquinazinha em que só cabia um só passageiro...\n[…]\nEm 1977, nasce no Brasil uma nova gravadora, a WEA, que se interessa em contratar Raul Seixas. Por volta deste período, intensifica-se a parceria com o amigo Cláudio Roberto, com quem Raul compôs várias de suas canções mais conhecidas. Juntos, realizaram o LP O Dia Em Que A Terra Parou. A crítica não gostou. Foi dito que não mantinha o mesmo nível dos trabalhos anteriores. Mas os fãs se deliciam com “Maluco Beleza”, “Sapato 36” e a faixa-título.\n[…]\nLogo depois, com a ajuda de Kika, é convidado por Augusto César Vanucci a gravar o especial infantil Plunct, Plact, Zuuum da Rede Globo, onde canta a música \"Carimbador Maluco\". O álbum Raul Seixas (1983), que continha a canção, dá à Raul mais um disco de ouro.\n[…]\nDesde 2002, o nome de uma de suas canções mais famosas, \"Maluco Beleza\", é utilizada para dar nome a uma rádio em Campinas que é feita por pessoas com problemas de saúde mental e usuários de drogas, voltada a reintroduzi-las na sociedade.\n[…]\nRaul Rock Seixas (1977)\n[…]\nO Dia em que a Terra Parou (1977)\n[…]\n2025 - Carimbador Maluco - Livro Infantil produzido e ilustrado por Diego Calvo"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Chitãozinho & Xororó",
      "descricao": "Dupla sertaneja brasileira formada pelos irmãos José Lima Sobrinho e Durval de Lima."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome da dupla Chitãozinho e Xororó foi tirado de uma antiga moda de viola. Na canção, chitãozinho e xororó são o quê?",
    "resposta": "Pássaros",
    "distratores": [
      "Cavalos",
      "Peixes",
      "Bois"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Chit%C3%A3ozinho_%26_Xoror%C3%B3"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Chit%C3%A3ozinho_%26_Xoror%C3%B3",
        "situacao": "ok",
        "texto": "Chitãozinho & Xororó é uma dupla brasileira de música sertaneja formada pelos irmãos José Lima Sobrinho, utilizando o nome artístico de Chitãozinho, e Durval de Lima, utilizando o nome artístico de Xororó. Chitãozinho & Xororó são recordistas em vendas de discos no Brasil: eles venderam mais de 40 milhões de álbuns e ganharam seis prêmios Grammy Latino.\n[…]\nAinda na infância, adotavam o nome artístico de \"irmãos Lima\". A troca do nome artístico da dupla para Chitãozinho e Xororó foi uma escolha do radialista Geraldo Meirelles, com base na canção homônima Chitãozinho e Xororó, originalmente lançada em 1939 pelos compositores Serrinha e Athos Campos. Na música, o cantor diz que vive só e só se alegra quando cantam o inhambu-chintã (Crypturellus tataupa) e o inhambu-chororó (Crypturellus parvirostris)..\n[…]\nChitãozinho & Xororó foram creditados por introduzir a música sertaneja nos veículos de massa do Brasil numa época em que o gênero tinha pouco espaço nas rádios e televisão. \"Antes deles, [a música sertaneja] era encerrada na cultura do campo.\" Eles são recordistas em vendas de discos no Brasil, com mais de 40 milhões de CDs e DVDs vendidos. A dupla também se tornou conhecida por modernizar a música sertaneja, introduzindo instrumentos como a guitarra elétrica e o banjo em seus álbuns.\n[…]\n\"Chitãozinho & Xororó foram os primeiros a mostrar um tipo de expressão que o grande Brasil não conhecia. A música brasileira tem que reverenciar Chitãozinho & Xororó. Foram os primeiros a colocar a canção sertaneja na Billboard, nas rádios FM, em todos os programas de TV e vender milhões.\"– Lenine\n[…]\n\"Não dá para escrever um livro sobre a música popular brasileira sem que seja dedicado um grande capítulo a Chitãozinho & Xororó.\"– Zezé Di Camargo\n[…]\nDe acordo com o site oficial, a dupla já passou de 40 milhões de discos vendidos."
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Gusttavo Lima",
      "descricao": "Cantor, compositor e produtor sertanejo brasileiro, conhecido pela canção Balada."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O cantor sertanejo Gusttavo Lima, de Balada, foi registrado com qual nome?",
    "resposta": "Nivaldo Batista Lima",
    "distratores": [
      "Gustavo Henrique Lima",
      "Nivaldo Gomes Pereira",
      "Luiz Gustavo Batista"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Gusttavo_Lima"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Gusttavo_Lima",
        "situacao": "ok",
        "texto": "Nivaldo Batista Lima (Presidente Olegário, 3 de setembro de 1989), mais conhecido pelo nome artístico Gusttavo Lima, é um cantor, compositor, produtor musical e empresário brasileiro.\n[…]\nGusttavo nasceu em Presidente Olegário, interior do estado de Minas Gerais, em 3 de setembro de 1989. Sua mãe, Sebastiana Maria de Lima, instruiu seu pai, Alcino Lima, que batizasse o filho como Samuel, porém ele acabou encontrando um primo durante a ida ao cartório e, após ficar embriagado, esqueceu-se da escolha de sua esposa e decidiu homenagear aquele primo, batizando Gusttavo como Nivaldo Batista Lima.\n[…]\nO repertório é composto por 25 faixas, entre sucessos dos anos 1990 e dos anos 2000, com novos arranjos e pegada acústica, além de algumas músicas do próprio repertório do cantor. No mesmo ano, o cantor anunciou sua saída da Audiomix após seis anos de parceria e abriu seu próprio escritório, o Balada Eventos. O CD/DVD Buteco do Gusttavo Lima foi lançado oficialmente no dia 24 de julho de 2015, pouco mais de um ano após sua gravação.\n[…]\nCom 19 músicas, sendo 12 inéditas na voz do cantor mineiro, o álbum ao vivo O Embaixador teve seu título referente ao fato de o artista ter sido eleito por dois anos consecutivos o embaixador da festa, evento tradicional no calendário sertanejo. No repertório inclui músicas românticas, como \"Respeita o Nosso Fim\" e \"DNA\", e canções que falam de amor e de família, como \"Carrinho Na Areia\", marcam o repertório que reflete a atual fase de Gusttavo Lima.\n[…]\nGusttavo Lima (2009)\n[…]\n2015–2016: Turnê Buteco do Gusttavo Lima\n[…]\n2018: Turnê Buteco do Gusttavo Lima 2\n[…]\nGusttavo Lima no Facebook\n[…]\nGusttavo Lima no Twitter\n[…]\nGusttavo Lima no Instagram\n[…]\nGusttavo Lima no YouTube"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Elza Soares",
      "descricao": "Cantora carioca de samba e MPB (1930–2022), intérprete de Se Acaso Você Chegasse e A Carne."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Em 1999, que título a rádio BBC de Londres deu à cantora Elza Soares?",
    "resposta": "Cantora brasileira do milênio",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Elza_Soares"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Elza_Soares",
        "situacao": "ok",
        "texto": "Elza Soares, nome artístico de Elza Gomes da Conceição (Rio de Janeiro, 23 de junho de 1930 – Rio de Janeiro, 20 de janeiro de 2022), foi uma cantora, compositora e intérprete de samba-enredo brasileira, que flertou com vários gêneros musicais como samba, jazz, soul, rock, hip hop e música eletrônica.\n[…]\nEm 1999, foi eleita pela Rádio BBC de Londres como a cantora brasileira do milênio. A escolha teve origem no projeto The Millennium Concerts, da rádio inglesa, criado para comemorar a chegada do ano 2000. Além disso, Soares aparece na 16.ª posição da lista das 100 maiores vozes da música brasileira elaborada pela revista Rolling Stone Brasil.\n[…]\nA partir de 2008, a vida e obra da cantora começou a ser pesquisada pela cineasta e jornalista Elizabete Martins Campos, que roteirizou, dirigiu e produziu o longa-metragem My Name is Now, Elza Soares.\n[…]\nA cantora ficou desesperada, entrou em depressão, tentou o suicídio, passou a tomar antidepressivos, até decidir deixar o tratamento e viajar pelo mundo a trabalho, focando exclusivamente na sua carreira, fazendo muitos shows, o que a fez morar em diversos países, até ter condições psicológicas de retornar ao Brasil, quatro anos depois. Elza, então, começou uma terapia para conseguir lidar com mais esta perda.\n[…]\nNo âmbito político, a voz de Elza em defesa da democracia foi lembrada pelo ex-presidente Lula: \"Perdemos não só uma das melhores cantoras e vozes mais potentes do Brasil, mas também uma grande mulher, que sempre defendeu a democracia e as boas causas\". A ex-presidente Dilma Rousseff afirmou que Elza “segue sendo um exemplo de determinação, força e coragem no universo musical do país”. Eduardo Paes, prefeito do Rio de Janeiro, decretou luto oficial de 3 dias por sua morte.\n[…]\nRaízes do Samba (EMI Brasil, 1999)\n[…]\nNegra (EMI Brasil, 2003)"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Lupicínio Rodrigues",
      "descricao": "Compositor gaúcho de sambas-canção sobre amores perdidos, como Nervos de Aço e Vingança."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O gaúcho Lupicínio Rodrigues é tido como o criador de qual expressão para o sofrimento de quem perdeu um amor?",
    "resposta": "Dor de cotovelo",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Lupic%C3%ADnio_Rodrigues"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Lupic%C3%ADnio_Rodrigues",
        "situacao": "ok",
        "texto": "Lupicínio Rodrigues (Porto Alegre, 16 de setembro de 1914 — Porto Alegre, 27 de agosto de 1974) foi um cantor e compositor brasileiro.\n[…]\nLupi, como era chamado desde pequeno, compôs marchinhas de carnaval e sambas-canção, músicas que expressam muito sentimento, principalmente a melancolia por um amor perdido. Foi o inventor do termo dor-de-cotovelo, que se refere à prática de quem crava os cotovelos em um balcão ou mesa de bar, pede um uísque duplo, e chora pela perda da pessoa amada.\n[…]\nConstantemente abandonado pelas mulheres, Lupicínio buscou em sua própria vida a inspiração para suas canções, onde a traição e o amor andavam sempre juntos.\n[…]\nEm 21 de agosto de 1974, Lupicínio foi internado no Hospital Ernesto Dornelles em decorrência de uma insuficiência cardíaca, doença que provocou sua morte pouco menos de uma semana depois, no dia 27. Encontra-se sepultado no Cemitério São Miguel e Almas em Porto Alegre.\n[…]\nEm 4 de novembro de 2014, a Câmara Municipal de Porto Alegre concedeu o título in memoriam de Cidadão Emérito de Porto Alegre a Lupicínio Rodrigues.\n[…]\nFrancisco Egydio (com Walter Wanderley e Seu Conjunto) - Vive os Sucessos de Lupicínio Rodrigues - LP 1963 (Odeon)\n[…]\nJamelão - Interpreta Lupicínio Rodrigues - LP 1972 (Continental)\n[…]\nLupicínio Rodrigues - Dor de Cotovelo - LP 1973 (Rosicler)\n[…]\nLupicinio Rodrigues - Gravações Originais - LP 1974 (Discos Copacabana)\n[…]\nLista dos vinte gaúchos que marcaram o século XX segundo o jornal Zero Hora"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Cálice",
      "descricao": "Canção de Chico Buarque e Gilberto Gil de 1973, censurada pela ditadura militar."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "No show Phono 73, em São Paulo, Chico Buarque e Gilberto Gil tentaram cantar Cálice, que estava proibida. O que aconteceu então?",
    "resposta": "Os microfones foram desligados",
    "fonte": [
      "https://pt.wikipedia.org/wiki/C%C3%A1lice_(can%C3%A7%C3%A3o)"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/C%C3%A1lice_(can%C3%A7%C3%A3o)",
        "situacao": "ok",
        "texto": "\"Cálice\" é uma canção composta em 1973 pelos músicos brasileiros Chico Buarque e Gilberto Gil, lançada oficialmente em 1978. Escrita durante a ditadura militar brasileira, a canção utiliza imagens bíblicas e jogos de palavras — principalmente um trocadilho com \"cálice\" e \"cale-se\" — para criticar a censura estatal e a repressão política, disfarçando-as sob um tema religioso.\n[…]\nA canção foi censurada pelo governo logo após sua conclusão, e uma tentativa de apresentação ao vivo no festival Phono 73 de 1973 foi interrompida à força pela polícia federal. Após seu lançamento oficial em 1978, \"Cálice\" tornou-se um sucesso comercial e de crítica, recebendo ampla execução nas rádios. Desde então, tem sido descrita como uma das obras mais emblemáticas da música popular brasileira e uma importante declaração cultural contra a ditadura.\n[…]\n\"Cálice\" foi escrita em 1973 pelos músicos brasileiros Chico Buarque e Gilberto Gil durante um período de intensa repressão política no Brasil sob a ditadura militar. A canção foi concebida durante a ditadura de Emílio Garrastazu Médici, época marcada por ampla censura, violência estatal e a implementação do Ato Institucional n.º 5 (AI-5), que restringiu as liberdades civis e aumentou o controle autoritário. Muitos artistas, incluindo Gil e Caetano Veloso , foram presos ou forçados ao exílio.\n[…]\nApesar disso, a dupla tentou uma apresentação no festival de música Phono 73, organizado pela Phonogram em 11 de maio de 1973, empregando grammelots e letras fragmentadas para burlar a censura. Enquanto Buarque e Gil tentavam se apresentar, a polícia federal interveio entrando no palco no meio da apresentação e o som dos cinco microfones no palco foi cortado um a um, até que Buarque foi forçado a abandonar a apresentação.\n[…]\nChico Buarque – compositor e vocais\n[…]\n«Cálice». Letras em português e espanhol no site oficial de Chico Buarque."
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Raul Seixas",
      "descricao": "Cantor e compositor baiano, pioneiro do rock brasileiro."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Em agosto de 1989, Raul Seixas foi encontrado morto em seu apartamento em São Paulo. Que doença, agravada pelo álcool, causou a morte?",
    "resposta": "Pancreatite",
    "distratores": [
      "Cirrose",
      "Tuberculose",
      "Pneumonia"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Raul_Seixas"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Raul_Seixas",
        "situacao": "ok",
        "texto": "Raul Santos Seixas OMC (Salvador, 28 de junho de 1945 – São Paulo, 21 de agosto de 1989) foi um cantor, compositor, produtor e multi-instrumentista brasileiro, frequentemente considerado um dos pioneiros do rock brasileiro. Também foi produtor musical da CBS, durante sua estadia na cidade do Rio de Janeiro e, por vezes, é chamado de Pai do Rock Brasileiro e Maluco Beleza. Sua obra musical é compos\n[…]\nNaquele final de década as coisas começaram a ficar ruins para Raul. A partir do ano de 1978, começa a ter problemas de saúde devido ao alcoolismo lhe causando a perda de 1/3 do pâncreas. Raul passa alguns meses numa fazenda na Bahia, para se recuperar da pancreatite. Ele separa-se de Glória, que, assim como Edith, também voltou aos Estados Unidos, levando a filha Scarlet. Neste ano, conhece Tania Menna Barreto, com quem passa a viver.\n[…]\nAs 50 apresentações pelo Brasil resultaram naquele que seria o último disco lançado em vida por Raul Seixas. O disco, intitulado A Panela do Diabo, foi lançado pela Warner Music Brasil no dia 19 de agosto de 1989.\n[…]\nNa manhã do dia 21 de agosto, Raul Seixas foi encontrado morto sobre a cama, por volta das oito horas da manhã, em seu apartamento em São Paulo, vítima de uma parada cardíaca: seu alcoolismo, agravado pelo fato de ser diabético, e por não ter tomado insulina na noite anterior, causaram-lhe uma pancreatite aguda fulminante.\n[…]\nEm 2015, a gravadora Som Livre lançou o DVD e em formato CD O Baú do Raul – 25 Anos Sem Raul Seixas, gravado em agosto de 2014 na Fundição Progresso no mês em que se completaram exatos 25 anos da morte do cantor e que contou com a participação dos seus sucessos nas vozes de Jerry Adriani, Nação Zumbi, Baía, Ana Cañas, Forfun, Zeca Baleiro, Marcelo Nova, Marcelo Jeneci, Digão, Tico Santa Cruz, Cachorro Grande, entre outros, além da presença da banda original do músico, Os Panteras.\n[…]\nRaul Seixas (1983)\n[…]\nRaul Seixas no TikTok"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Roberto Carlos",
      "descricao": "Cantor e compositor capixaba, chamado de Rei da música brasileira."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Por que Roberto Carlos passou décadas sem cantar Quero Que Vá Tudo pro Inferno, um dos maiores sucessos da Jovem Guarda?",
    "resposta": "Por convicção religiosa",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Quero_que_V%C3%A1_Tudo_pro_Inferno"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Quero_que_V%C3%A1_Tudo_pro_Inferno",
        "situacao": "ok",
        "texto": "\"Quero que Vá Tudo pro Inferno\" é uma canção dos compositores brasileiros Roberto Carlos e Erasmo Carlos. Gravada e lançada em 1965, a música foi a primeira faixa do álbum Jovem Guarda, de Roberto. Está inclusa na lista das 100 maiores músicas brasileiras da Rolling Stone Brasil.\n[…]\nLançada inicialmente em compacto simples em 1965, \"Quero que Vá Tudo pro Inferno\" é tida como um marco na carreira de Roberto Carlos. Ela se tornaria seu maior sucesso na fase Jovem Guarda e um dos maiores hits de toda sua carreira. Febre nas rádios brasileiras, ela elevou Roberto Carlos a condição de fenômeno musical no país.\n[…]\nA música foi inspirada em Magda Fonseca, então namorada do cantor, e que estava nos Estados Unidos para fazer um curso de inglês. A letra expressava tanto a saudade que o cantor sentia de Magda quanto um desabafo - que tudo fosse para o inferno. Roberto compôs inicialmente a primeira parte da canção e a apresentou ao parceiro Erasmo Carlos, que o ajudou no restante da letra.\n[…]\nDepois de dois meses, Roberto finalizou a canção e, em agosto, encaminhou uma fita com sua gravação para Magda. Logo depois, o cantor apresentou \"Quero que Vá Tudo pro Inferno\" para Othon Russo, diretor de relações públicas da CBS, que pediu a ele que a gravasse imediatamente e que ela seria a faixa de abertura do próximo LP de Roberto, chamado Jovem Guarda.\n[…]\nEm 2016, após anos sem apresentar a canção ao vivo por conta de seu transtorno obsessivo-compulsivo (que fazia-o evitar palavras como \"inferno\"), voltou a cantá-la no Roberto Carlos Especial daquele ano. No final da apresentação, ele justificou que \"isso é só força da expressão\" ao se referir ao termo em questão."
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Chiquinha Gonzaga",
      "descricao": "Compositora, pianista e maestrina brasileira, autora da marcha carnavalesca Ó Abre Alas."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "No Rio do século dezenove, por que a família de Chiquinha Gonzaga a renegou e a deu como morta?",
    "resposta": "Separou-se do marido",
    "distratores": [
      "Envolveu-se com política",
      "Fugiu para a Europa",
      "Mudou de religião"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Chiquinha_Gonzaga"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Chiquinha_Gonzaga",
        "situacao": "ok",
        "texto": "Francisca Edviges Neves \"Chiquinha\" Gonzaga (Rio de Janeiro, 17 de outubro de 1847 – Rio de Janeiro, 28 de fevereiro de 1935), foi uma compositora, instrumentista, maestrina e abolicionista brasileira.\n[…]\nA pressão da família era intensa para que retornasse para o marido. Chiquinha se manteve firme por um tempo, mas ao descobrir que estava grávida do terceiro filho, decidiu ceder e voltou para Jacinto. A reconciliação, porém, não durou muito. Hilário nasceu em janeiro de 1870, sendo batizado em março. Diferente dos dois primeiros filhos do casal, parecidos com o pai, Hilário era parecido com a mãe.\n[…]\nEsse novo filho, entretanto, não mudou o comportamento de Jacinto e a situação conjugal declinou rapidamente e assim Chiquinha decidiu abandonar de vez o marido.\n[…]\nSeu sucesso também exasperava a família, principalmente seu pai, que a considerava morta desde que abandonara o marido. Basileu sentia que tinha um nome e um patrimônio a zelar, sendo ele um militar de carreira e herói de guerra. Quando Chiquinha contratou um garoto para vender suas músicas pela cidade, o nome Gonzaga se espalhou rapidamente. Muitas vezes o garoto voltava com a mercadoria danificada, pois pessoas da família de Chiquinha rasgavam suas composições quando o viam.\n[…]\nCom o mesmo empenho com que se dedicou à abolição, Chiquinha também se dedicou à causa republicana. Em locais públicos era comum ela estar presente, fazendo campanha contra o regime do qual sua família, principalmente seu pai e seu ex-marido, eram representantes. Chiquinha era vista com frequência ao lado de Lopes Trovão, um dos homens mais populares da cidade e orador republicano.\n[…]\nChiquinha Gonzaga no Almanaque da Folha de S. Paulo"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Carmen Miranda",
      "descricao": "Cantora e atriz luso-brasileira famosa pelos turbantes de frutas em Hollywood."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Recebida com frieza no Rio em 1940, acusada de ter ficado estrangeira demais em Hollywood, Carmen Miranda respondeu com qual samba?",
    "resposta": "Disseram que Voltei Americanizada",
    "distratores": [
      "Taí",
      "Camisa Listrada",
      "South American Way"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Carmen_Miranda"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Carmen_Miranda",
        "situacao": "ok",
        "texto": "Maria do Carmo Miranda da Cunha (Marco de Canaveses, 9 de fevereiro de 1909 – Beverly Hills, 5 de agosto de 1955), mais conhecida como Carmen Miranda, foi uma cantora, dançarina, e atriz luso-brasileira. Sua carreira artística transcorreu no Brasil e nos Estados Unidos entre as décadas de 1930 e 1950. Trabalhou no rádio, no teatro de revista, no cinema e na televisão.\n[…]\nDois meses depois, Carmen Miranda voltaria ao mesmo palco e seria fartamente aplaudida por uma plateia mais afeita ao seu repertório, então já atualizado com respostas como \"Disseram que Voltei Americanizada\", especialmente composta por Vicente Paiva e Luiz Peixoto. No mesmo mês, ela gravou seus últimos discos no Brasil.\n[…]\nCom o fim da Segunda Guerra Mundial, os filmes seguintes de Carmen Miranda na 20th Century Fox foram feitos em preto e branco, o que refletia o interesse cada vez menor de Hollywood nela e na representação dos latino-americanos em geral. A Carmen monocromática apresentada nesses musicais não era o que o público esperava, e isso, sem dúvida, contribuiu para reduzir o apelo de bilheteira do musical Doll Face (1945), no qual Miranda foi rebaixada para a quarta posição no elenco.\n[…]\nEm 25 de setembro de 1998, foi inaugurada uma quadra em Hollywood com o nome de \"Carmen Miranda Square\", uma homenagem duradoura à sua contribuição para a cultura local. A produção e o legado de Carmen Miranda foram novamente celebrados em 2002 com o musical South American Way, dirigido por Miguel Falabella. A produção, com um orçamento de 1,2 milhão de reais, trouxe a magia da cantora de volta aos palcos.\n[…]\nDesde sua morte, Carmen Miranda é lembrada como uma artista brasileira importante e uma das mais influentes em Hollywood. Ela foi uma das 500 estrelas indicadas para a lista das 50 maiores lendas do cinema do American Film Institute.\n[…]\nCarmen Miranda: A Embaixatriz do Samba"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Asa Branca",
      "descricao": "Toada de baião lançada por Luiz Gonzaga em 1947."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Na letra de Asa Branca, o que faz até a asa-branca bater asas e o sertanejo deixar sua terra e sua Rosinha?",
    "resposta": "A seca",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Asa_Branca_(can%C3%A7%C3%A3o)"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Asa_Branca_(can%C3%A7%C3%A3o)",
        "situacao": "inexistente",
        "texto": ""
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Novos Baianos",
      "descricao": "Grupo musical baiano dos anos 1970 que misturou samba, choro, frevo e rock."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Os Novos Baianos começaram no rock, mas trocaram a guitarra distorcida pelo samba e pelo choro depois das visitas de qual cantor?",
    "resposta": "João Gilberto",
    "distratores": [
      "Dorival Caymmi",
      "Gilberto Gil",
      "Caetano Veloso"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Novos_Baianos",
      "https://pt.wikipedia.org/wiki/Acabou_Chorare"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Novos_Baianos",
        "situacao": "ok",
        "texto": "Novos Baianos é uma banda  brasileira de Rock e MPB originário da Bahia, ativo em seu auge entre os anos de 1969 e 1979, que se reuniu em 1990, 1996, 2015 e 2023.\n[…]\nEm 1971 lançaram compacto Novos Baianos com o single \"Dê um Rolê\", no mesmo ano gravaram o segundo compacto simples, \"Volta que o Mundo dá\", e receberam a visita de João Gilberto, que viria a influenciá-los com o samba.\n[…]\nCom a grande fusão de gêneros brasileiros, sugerida por João Gilberto e a guitarra de Pepeu Gomes, surgiu o mais consistente e lembrado disco do grupo, Acabou Chorare, pela Som Livre; o álbum foi considerado o melhor da música popular brasileira pela revista Rolling Stone em sua Lista dos 100 maiores discos da música brasileira.Em Vargem Grande, na época uma localidade de Jacarepaguá, alugaram um sítio apelidado de \"Cantinho do Vovô\". Viviam de forma quase anárquica em pleno regime militar.\n[…]\nEm 1977 lança álbum Praga de Baiano, já enfraquecidos pelo processo inicial das carreiras solo de Paulinho, Pepeu e Baby. O disco trazia o trio elétrico, frevo, e bastante música instrumental. Tornaram-se atração dos trios-elétricos, e Baby do Brasil foi a primeira cantora desse tipo de evento. Conhecidos como Trio Elétrico Novos Baianos no Carnaval de Salvador.\n[…]\nTambém em 2009 o grupo se apresentou na Virada Cultural, no palco localizado na Avenida São João em São Paulo, em show visto por um milhão de pessoas. A apresentação contou com Baby do Brasil, Pepeu Gomes, Luis Galvão e Paulinho Boca de Cantor, da formação clássica.\n[…]\n1974 – Novos Baianos (Continental)\n[…]\nNovos Baianos no Facebook\n[…]\nNovos Baianos no Instagram\n[…]\nNovos Baianos no Twitter\n[…]\nCanal de Novos Baianos no YouTube"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Acabou_Chorare",
        "situacao": "ok",
        "texto": "Acabou Chorare é o segundo álbum de estúdio do grupo musical brasileiro Novos Baianos. O disco foi lançado em 1972 pela gravadora Som Livre, após o relativo sucesso de É Ferro na Boneca (1970), momento em que os músicos baianos ainda procuravam por identidade própria. O álbum adotou a guitarra expressiva de Jimi Hendrix e a brasilidade de Assis Valente, sobretudo a influência estrondosa de João Gi\n[…]\nGalvão conta que, para os Novos Baianos, João Gilberto lhes apresentava \"o samba de verdade de Assis Valente\" e os aconselhou, junto com a proposta da gravação de \"Brasil Pandeiro\", \"a se voltarem para dentro de si mesmos\".\n[…]\nDiversos autores apontam que foi justamente a presença de Gilberto que possibilitou a criação de Acabou Chorare.\n[…]\n\"Estávamos influenciados pelo rock, ouvíamos muito Jimi Hendrix, Janis Joplin, todas aquelas bandas dos anos 70. Mas foi ali, com o João Gilberto, que a gente acordou para o samba. Quando ele nos mostrou \"Brasil Pandeiro\", do Assis Valente – chegou a hora dessa gente bronzeada mostrar o seu valor –, entendemos qual era a mensagem dele. Começamos a incorporar no nosso som o cavaquinho, o pandeiro, tudo isso, sem perder a pegada do rock. Era samba com energia de rock.\n[…]\nHoje, o que é underground, três semanas depois aparece no Fantástico.\" Voltando ao tempo, assim como João Gilberto influenciou Acabou Chorare, este influenciou seu álbum de 1973, João Gilberto, considerado o seu mais psicodélico, a começar pelos arranjos minimalistas e transgressores da percussão, com ritmo e dinamismo típicos dos Novos Baianos.\n[…]\nNesse âmbito, Acabou Chorare é um marco do período pós-tropicalista porque equilibra sons elétricos e acústicos com maestria, chegando a elevar o samba à música erudita, como certa vez proclamou Tom Zé. Este disco consagrou os Novos Baianos e sua linguagem musical, que sintetizava João Gilberto, o Tropicalismo e a música popular mais tradicional."
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Arnaldo Antunes",
      "descricao": "Cantor, compositor e poeta brasileiro, ex-integrante dos Titãs e dos Tribalistas."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Em 1985, junto com Tony Bellotto, Arnaldo Antunes, então nos Titãs, foi preso em São Paulo por causa de qual droga?",
    "resposta": "Heroína",
    "distratores": [
      "Cocaína",
      "Maconha",
      "LSD"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Arnaldo_Antunes"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Arnaldo_Antunes",
        "situacao": "ok",
        "texto": "Arnaldo Augusto Nora Antunes Filho (São Paulo, 2 de setembro de 1960) é um músico, poeta, compositor, artista visual e escritor brasileiro.\n[…]\nEm 13 de novembro de 1985, foi preso por tráfico de heroína após a polícia encontrar 128 mg da droga em seu apartamento em São Paulo. As autoridades chegaram ao local após prenderem seu colega de banda Tony Bellotto, que foi flagrado com 30 mg num táxi após sair da casa de Arnaldo. Devido à quantidade de que Arnaldo dispunha, ele foi autuado como traficante, enquanto que o colega respondeu apenas por porte.\n[…]\nArnaldo havia comprado a droga na boate Rose Bom Bom, com dinheiro do cachê que recebera após show organizado pelo comitê de Fernando Henrique Cardoso, então candidato a prefeito de São Paulo. Na delegacia, ficou preso em uma cela individual, após o delegado julgar imprudente colocá-lo em uma outra cela com 90 assaltantes perigosos.\n[…]\nA faixa teve a participação de outros 17 artistas brasileiros: Chico Buarque, Tiê, Dado Villa-Lobos, Paulo Miklos (seu ex-companheiro de Titãs), Tiago Iorc, Lucas Silveira, Filipe Catto, Zélia Duncan, Pedro Luís (Pedro Luís & A Parede), Fernando Anitelli (O Teatro Mágico), André Whoong, Lucas Santtana, Miranda Kassin, Tetê Espíndola, Helio Flanders (Vanguart), Felipe Roseno e Xuxa Levy.\n[…]\nAcústico MTV - Arnaldo Antunes (2012)\n[…]\nTitãs (1984)\n[…]\nTelevisão (1985)\n[…]\nAcústico MTV - Arnaldo Antunes (2012)\n[…]\nFamília (2015). em coautoria com Tony Bellotto\n[…]\nEm 1985, atuou no filme Areias Escaldantes, um musical brasileiro.\n[…]\nEm 2018, foi tema do documentário autobiográfica Com a palavra, Arnaldo Antunes, dirigido pelo cineasta Marcelo Machado."
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Gonzaguinha",
      "descricao": "Luiz Gonzaga do Nascimento Júnior, cantor e compositor carioca (1945–1991), autor de O Que É, O Que É?"
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O autor de O Que É, O Que É?, Gonzaguinha, era filho de qual cantor e sanfoneiro?",
    "resposta": "Luiz Gonzaga",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Gonzaguinha"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Gonzaguinha",
        "situacao": "ok",
        "texto": "Luiz Gonzaga do Nascimento Júnior (Rio de Janeiro, 22 de setembro de 1945 – Renascença ou Marmeleiro, 29 de abril de 1991), mais conhecido como Gonzaguinha, foi um cantor e compositor brasileiro.\n[…]\nGonzaguinha era filho registrado, mas não biológico, do cantor e compositor pernambucano Luiz Gonzaga e de Odaleia Guedes dos Santos, cantora do Dancing Brasil.\n[…]\nEmbora seja oficialmente reconhecido como filho de Luiz Gonzaga, o próprio Gonzaga durante a sua vida fez declarações dúbias sobre a paternidade de Gonzaguinha. Numa das fitas, diz-lhe: “Deus escreve certo por linhas tortas. Veja você: seu sangue não corre nas minhas veias. Você tem essas coisas todas, as pessoas chegadas a mim, porque você é meu filho.\n[…]\nAcho que a pessoa que mais gosta de mim é você.” Na mesma fita, Gonzaguinha encara a questão: “Não tenho o menor temor de ser ou não ser filho de Luiz Gonzaga. Se você falar que meu pai é outro, não vai bulir com meus sentimentos, não estou preocupado com isso.”\n[…]\nGonzaga descobriu-se estéril quando se casou com a segunda mulher, Helena das Neves Cavalcanti, em 1948. Gonzaguinha tinha 3 anos.\n[…]\nEm 2017, Gonzaguinha foi tema do carnaval da Estácio de Sá, no Rio de Janeiro, com o enredo É! O Moleque desceu o São Carlos, pegou um sonho e partiu com a Estácio!. A Estácio era a escola de coração do cantor, nascido no Morro de São Carlos, no bairro do Estácio, no Rio de Janeiro.\n[…]\nECHEVERRIA, Regina. Gonzaguinha e Gonzagão – Uma história brasileira. Rio de Janeiro: Ediouro, 2007.\n[…]\nMedia relacionados com Gonzaguinha no Wikimedia Commons\n[…]\nO Wikiquote possui citações de ou sobre: Gonzaguinha\n[…]\n«Luiz Gonzaga Jr. (Gonzaguinha)», MPBNet, Músicos"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Os Oito Batutas",
      "descricao": "Conjunto musical carioca formado em 1919 por Pixinguinha, Donga e outros músicos de choro e maxixe."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Que milionário carioca, dono do Copacabana Palace, bancou a viagem de Pixinguinha e Os Oito Batutas a Paris, em 1922?",
    "resposta": "Arnaldo Guinle",
    "distratores": [
      "Assis Chateaubriand",
      "Roberto Marinho",
      "Francisco Matarazzo"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Os_Oito_Batutas"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Os_Oito_Batutas",
        "situacao": "ok",
        "texto": "Oito Batutas foi um conjunto musical brasileiro criado em 1919 no Rio de Janeiro e formado por Pixinguinha na flauta, Donga e Raul Palmieri no violão, Nelson Alves no cavaquinho, China no canto, violão e piano, José Alves no bandolim e ganzá e Luis de Oliveira na bandola e reco-reco. O repertório do conjunto incluía choros, maxixes, canções sertanejas, batuques e cateretê.\n[…]\nO conjunto foi formado para apresentar-se no Cine Palais a pedido de seu gerente, Isaac Frankel, que ouvira o Grupo Caxangá, no qual tocavam Donga, Pixinguinha e João Pernambuco, um dos maiores violonistas da história do choro, autor de Luar do Sertão em parceria com Catulo. Estreou na sala de espera deste cinema, tornando-se uma atração a parte, maior até que os próprios filmes.\n[…]\nPelo sucesso do grupo, os Batutas começaram a apresentar-se em festas em casas da alta sociedade, bem como no cabaré Assírio, no subsolo do Teatro Municipal - onde acompanharam os dançarinos Duque e Gaby. A convite destes, e com patrocínio de Arnaldo Guinle, os Batutas viajaram a Paris em 1922, apresentando-se por 6 meses na boate Schéhérazade. Depois de voltar ao Brasil, excursionaram também para Buenos Aires, onde fizeram gravações para a Victor argentina.\n[…]\n\"Oito Batutas\" (1995) Revivendo CD\n[…]\nPixinguinha\n[…]\nGravações dos Oito Batutas no International Music Score Library Project (IMSLP)\n[…]\nGravações dos Oito Batutas no Discografia Brasileira (Instituto Moreira Salles)"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Chico Buarque",
      "descricao": "Francisco Buarque de Hollanda, cantor, compositor e escritor carioca."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O pai de Chico Buarque escreveu Raízes do Brasil, um clássico para entender o país. Quem era ele?",
    "resposta": "Sérgio Buarque de Holanda",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Chico_Buarque"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Chico_Buarque",
        "situacao": "ok",
        "texto": "Francisco Buarque de Hollanda, mais conhecido como Chico Buarque (Rio de Janeiro, DF, 19 de junho de 1944), é um cantor, compositor, violonista, dramaturgo, escritor e ator brasileiro. É considerado por muitos críticos o maior artista vivo da música brasileira. Sua discografia conta com aproximadamente oitenta obras, entre elas discos-solo, em parceria com outros músicos e compactos.\n[…]\nFrancisco Buarque de Hollanda nasceu em 19 de junho de 1944 na cidade do Rio de Janeiro, filho de Sérgio Buarque de Holanda (1902–1982), um importante historiador e jornalista brasileiro, e de Maria Amélia Cesário Alvim (1910–2010), pintora e pianista. Foi casado por 33 anos (de 1966 a 1999) com a atriz Marieta Severo, com quem teve três filhas, a atriz Sílvia Buarque, Helena Buarque e Luísa Buarque.. O cantor tem, também, cinco netos.\n[…]\nEm 1953, Sérgio Buarque de Holanda, pai do cantor, foi convidado para lecionar na Universidade de Roma. A família Buarque de Hollanda, então, muda-se para a Itália. Chico aprende dois idiomas estrangeiros, na escola fala inglês, e nas ruas, italiano. Nessa época, compõe as suas primeiras marchinhas de Carnaval.\n[…]\nO pai de Chico, Sérgio Buarque de Holanda, é primo em primeiro grau da mãe de Aurélio Buarque de Hollanda Ferreira, Maria Buarque Cavalcanti Accioly Lins, sendo ambos netos de Manuel Buarque de Gusmão Lima. A avó materna de Aurélio Buarque de Hollanda Ferreira, Luísa Buarque de Hollanda Cavalcanti, é irmã do avô paterno de Francisco Buarque de Hollanda, Cristóvão Buarque de Hollanda. Uma genealogia parcial,\n[…]\nAurélio Buarque de Holanda Ferreira\n[…]\nJosé Luís Pais Barreto Buarque\n[…]\nSérgio Buarque de Holanda\n[…]\nFrancisco Buarque de Holanda\n[…]\nChico Buarque: Histórias de Canções\n[…]\nChico Buarque no Instagram\n[…]\nChico Buarque no IMDb\n[…]\nChico Buarque no Facebook\n[…]\nChico Buarque no Twitter\n[…]\nChico Buarque no TikTok\n[…]\nChico Buarque no Spotify"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Caetano Veloso",
      "descricao": "Cantor e compositor baiano, um dos criadores do movimento Tropicália."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Em qual filme de Pedro Almodóvar, de 2002, Caetano Veloso aparece cantando Cucurrucucú Paloma?",
    "resposta": "Fale com Ela",
    "distratores": [
      "Tudo Sobre Minha Mãe",
      "Volver",
      "Má Educação"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Talk_to_Her"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Talk_to_Her",
        "situacao": "ok",
        "texto": "Talk To Her (Spanish: Hable con ella) is a 2002 Spanish psychological melodrama film, written and directed by Pedro Almodóvar. It stars Javier Cámara, Darío Grandinetti, Leonor Watling, Geraldine Chaplin, and Rosario Flores. The film follows two men who form an unlikely friendship, as they care for two women who are both in comas.\n[…]\nThe closing-night presentation at the 2002 New York Film Festival, the film was a widespread critical and commercial success, with singled-out praise towards its direction, performances and especially its screenplay. It won the BAFTA for Best Film Not in the English Language, and the Golden Globe for Best Foreign Language Film, while Almodóvar won the Academy Award for Best Original Screenplay, marking one of the few times where a non-English-speaking film won this category.\n[…]\nA scene shows the Brazilian singer Caetano Veloso singing \"Cucurrucucú paloma\" (in Spanish) at a party.\n[…]\nOn Rotten Tomatoes the film has an approval rating of 91% based on reviews from 137 critics, and an average rating of 8.1/10. The website's consensus states: \"Another masterful, compassionate work from Pedro Almodóvar\". On Metacritic, the film has a weighted average score of 86 out of 100, based on reviews from 34 critics.\n[…]\n2002 Academy Awards:\n[…]\nBest Original Screenplay - Pedro Almodóvar\n[…]\nBest Original Screenplay - Pedro Almodóvar\n[…]\n2003 Bangkok International Film Festival (\"Golden Kinnaree Award\"): Best Film, Best Director - Pedro Almodóvar\n[…]\nEuropean Film Awards: Best Film, Best Director (Pedro Almodóvar), Best Screenwriter - Pedro Almodóvar\n[…]\nLos Angeles Film Critics Association: Best Director - Pedro Almodóvar\n[…]\nSatellite Awards: Best Motion Picture: Foreign Language, Best Original Screenplay - Pedro Almodóvar\n[…]\n2002 Academy Awards:\n[…]\nBest Director - Pedro Almodóvar\n[…]\nSatellite Awards: Best Director - Pedro Almodóvar"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hable_con_ella",
        "situacao": "ok",
        "texto": "Hable con ella (bra: Fale com Ela; prt: Fala com Ela) é um filme espanhol de 2002, escrito e realizado por Pedro Almodóvar.\n[…]\nVenceu na categoria de melhor filme estrangeiro",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Vinicius de Moraes",
      "descricao": "Poeta, compositor e diplomata carioca, parceiro de Tom Jobim na bossa nova."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "A peça Orfeu da Conceição, de Vinicius de Moraes, virou qual filme de Marcel Camus, vencedor da Palma de Ouro em Cannes?",
    "resposta": "Orfeu Negro",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Orfeu_Negro"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Orfeu_Negro",
        "situacao": "ok",
        "texto": "Orfeu Negro ou Orfeu do Carnaval (na França, Orphée Noir; na Itália, Orfeo Negro) é um filme ítalo-franco-brasileiro de 1959, dirigido por Marcel Camus e com roteiro adaptado por Camus e Jacques Viot a partir da peça teatral Orfeu da Conceição, de Vinícius de Moraes.\n[…]\nA trilha sonora é de Tom Jobim e Luís Bonfá. Vinícius e Antônio Maria também tiveram músicas incluídas, mas, assim como Agostinho dos Santos, que interpretou a música-tema de Orfeu, \"Manhã de Carnaval\", não receberam os créditos. O filme teve outra versão em 1999, sob o nome Orfeu, dirigida por Cacá Diegues.\n[…]\nA ambulância chega e leva o corpo ao Instituto Médico Legal. Ele não pode ir junto. Quarta-feira de cinzas e Orfeu só sabe chorar. Ele vai atrás do corpo, faz uma sessão espírita na qual Eurídice baixa no corpo de uma senhora, mas, enfim, Orfeu acha seu corpo. Ele sequestra-o e leva à favela. Mira vê, e enfurecida,  joga uma pedra na cabeça de Orfeu. Com a pancada ele cai de uma ribanceira com o corpo morto de Eurídice nos braços e morre também.\n[…]\nBreno Mello .... Orfeu\n[…]\nVencedor na categoria de melhor filme em língua estrangeira (português/diretor).\n[…]\nOrfeu Negro foi citado por Jean-Michel Basquiat como uma de suas primeiras influências musicais, enquanto Barack Obama observa em seu livro de memórias Dreams from My Father (1995) que era o filme favorito de sua mãe.\n[…]\nEm 1999, um novo filme, Orfeu, foi feita por Cacá Diegues, com uma trilha sonora que caracteriza o cantor e compositor brasileiro Caetano Veloso. O diretor disse que não era um remake de Orfeu Negro, mas um filme baseado na peça original de Vinicius de Moraes, de 1956.\n[…]\nEm julho de 2014, uma adaptação musical de Broadway Orfeu Negro foi anunciada, a ser escrita por Lynn Nottage e dirigido por George C. Wolfe."
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Mas que Nada",
      "descricao": "Samba lançado em 1963, sucesso mundial com Sérgio Mendes & Brasil '66 em 1966."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Em 2006, Mas que Nada voltou às paradas numa nova versão de Sérgio Mendes com qual grupo americano de hip hop?",
    "resposta": "Black Eyed Peas",
    "distratores": [
      "Fugees",
      "Outkast",
      "Run-DMC"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Mas_que_Nada"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Mas_que_Nada",
        "situacao": "ok",
        "texto": "\"Mas que Nada\" é uma canção composta pelo cantor brasileiro Jorge Ben Jor.\n[…]\nO sucesso da canção nos Estados Unidos viria após uma excursão de três meses naquele país, no qual Jorge Ben se apresentou em universidades e clubes, em 1965. No ano seguinte, Sérgio Mendes lançou uma versão da canção, em seu álbum Herb Alpert presents Sergio Mendes & Brazil 66. Foi aí que se tornou grande sucesso nas paradas norte-americanas, alcançando a posição #4 na parada \"Adult Contemporary\" e #47 na parada \"Pop Singles\" - ambas da Billboard.\n[…]\nA importância da versão de Sérgio Mendes é traduzida por inúmeras versões feitas por artistas como Ella Fitzgerald, Al Jarreau, Trini Lopez e José Feliciano. Em 2013 ela foi incluída no Hall da Fama do Grammy Latino.\n[…]\nEm 2006, \"Mas que Nada\" foi remixada e regravada pelo grupo Black Eyed Peas com o próprio Sérgio Mendes, chegando a posição de #13 na parada Hot Dance Music/Club Play da Billboard.\n[…]\nA faixa foi incluída no jogo eletrônico para Playstation 3, Xbox 360, Wii e WiiU \"Just Dance 4\", contendo apenas os vocais dos integrantes do Black Eyed Peas.\n[…]\nEm 2006, Sérgio Mendes regravou a canção junto com os Black Eyed Peas e vocais adicionais por Gracinha Leporace (esposa de Mendes); uma versão que está incluída em seu álbum Timeless (2006).\n[…]\n\"Mas que Nada\" (participação de Black Eyed Peas) 3:32\n[…]\n\"Mas que Nada\" (Masters At Work Remix) 8:03\n[…]\n\"Mas que Nada\" 2:39\n[…]\nPaulinho Nogueira, lançada no álbum \"A Nova Bossa É o Violão\" (1964)\n[…]\n«Mas Que Nada - Versão original deJorge Ben Jor.» 🔗\n[…]\n«Mas Que Nada - Versão do grupo Black Eyed Peas com Sérgio Mendes.» 🔗"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Carmen Miranda",
      "descricao": "Cantora e atriz luso-brasileira famosa pelos turbantes de frutas em Hollywood."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "No filme Você Já Foi à Bahia?, da Disney, o Pato Donald se encanta por uma cantora brasileira, irmã de Carmen Miranda. Quem é ela?",
    "resposta": "Aurora Miranda",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Aurora_Miranda"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Aurora_Miranda",
        "situacao": "ok",
        "texto": "Aurora Miranda da Cunha Richaid  (Rio de Janeiro, 20 de abril de 1915 — Rio de Janeiro, 22 de dezembro de 2005) foi uma atriz e cantora brasileira. Era irmã da famosa cantora Carmen Miranda.\n[…]\nEstreou na Rádio Mayrink Veiga em 1932, transferindo-se logo para a Philips. Em 1933, gravou seu primeiro disco, \"Cai, Cai, Balão\", cantada em dupla com Francisco Alves. Além de fazer dupla com a irmã mais famosa, Carmen Miranda, Aurora também teve sucesso como cantora na década de 1930. As duas irmãs imortalizaram a canção \"Cantores de Rádio\" (composição de João de Barro, Lamartine Babo e Alberto Ribeiro) no filme Alô, Alô Carnaval.\n[…]\nNascida no Rio de Janeiro, Aurora Miranda era a irmã mais famosa de Carmen Miranda. Assim como suas irmãs — além de Carmen, havia também Cecilia, que não seguiu carreira como cantora — ela gostava, desde pequena, de cantar em casa, alegrando os frequentadores da pensão que sua mãe, a imigrante portuguesa Maria Emília, dirigia.\n[…]\nAurora foi sepultada no Cemitério São João Batista, próximo ao túmulo de sua irmã, Carmen Miranda.\n[…]\n\"Aurora Miranda criou seu próprio nicho\", escreveu o The Guardian, primeiro como uma cantora pioneira e, mais tarde, como a primeira artista a interagir com desenhos animados em uma produção da Walt Disney. Ela apareceu no filme The Three Caballeros, uma mistura de cinema e animação, onde estrelou ao lado do Pato Donald. No entanto, talvez seu maior legado tenha sido a primeira gravação do hino não oficial do Rio de Janeiro, \"Cidade Maravilhosa\", em 1934.\n[…]\nAurora Miranda (em inglês) no Find a Grave\n[…]\nAurora Miranda (em Português) no Cinema Clássico\n[…]\nAurora Miranda em Cantoras do Brasil\n[…]\nHomenagem a Aurora Miranda em Cinemabrasileiro.net"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Jorge Ben Jor",
      "descricao": "Cantor e compositor brasileiro de samba-rock, autor de Mas Que Nada."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que roqueiro britânico reconheceu ter usado a melodia de Taj Mahal, de Jorge Ben, no sucesso Da Ya Think I'm Sexy?",
    "resposta": "Rod Stewart",
    "fonte": [
      "https://en.wikipedia.org/wiki/Da_Ya_Think_I%27m_Sexy%3F"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Da_Ya_Think_I%27m_Sexy%3F",
        "situacao": "ok",
        "texto": "\"Da Ya Think I'm Sexy?\", also written \"Da' Ya' Think I'm Sexy\", is a song by British singer Rod Stewart from his ninth studio album, Blondes Have More Fun (1978). It was written by Stewart, Carmine Appice, and Duane Hitchings, though it incorporates the melody from the song \"Taj Mahal\" by Jorge Ben Jor and the string arrangement from the song \"(If You Want My Love) Put Something Down On It\" by Bob\n[…]\nIt has been noted that Stewart created parts of the song through musical plagiarism. A copyright infringement lawsuit by Brazilian musician Jorge Ben Jor claimed the chorus of the song had been derived from his song \"Taj Mahal\". The case was \"settled amicably\" according to Jorge Ben Jor, in Ben Jor's favor; the single’s royalties were donated to UNICEF.\n[…]\nGuitarist Jim Cregan claimed that the song was \"inspired in part\" by the Rolling Stones' \"Miss You\". Ian McLagan, who played electric piano on \"Miss You\" and has also played with Stewart, claimed that \"It's a rip-off of 'Miss You'\".\n[…]\nLarry Flick from Billboard described the song as \"another slice of flashback fever\". He noted that \"with its recognizable hook, booty-shakin' baseline, guest rap by Ricardo da Force, diva wailings by Kelly Llorenna, and Stewart himself, this updated remake could very well become the surprise radio hit of the summer. Of course, it could also become this month's novelty record.\" British magazine Music Week rated N-Trance's version four out of five in their review.\n[…]\nOn 25 August 2017, Rod Stewart released a remix version, which features a guest appearance from American band DNCE. He sings along with Joe Jonas, the lead singer of the band. The singer and the band performed the song together at 2017 MTV Video Music Awards two days later.\n[…]\nIn 1979, Steve Dahl along with his band Teenage Radiation released a parody titled \"Do You Think I'm Disco?\""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Da_Ya_Think_I%27m_Sexy%3F",
        "situacao": "ok",
        "texto": "\"Da Ya Think I'm Sexy?\" é uma canção escrita por Rod Stewart, Carmine Appice e Duane Hitchings. Lançada por Stewart em seu álbum Blondes Have More Fun e como single no final de 1978, Da Ya Think I'm Sexy? passou uma semana no topo das paradas britânicas em dezembro daquele ano e quatro semanas no topo da Billboard Hot 100 em fevereiro de 1979. Também liderou as paradas na Austrália por duas semana\n[…]\nEm 2003, Da Ya Think I'm Sexy? foi incluida na lista das 500 melhores canções da revista Rolling Stone (#301).\n[…]\nSobre o grande sucesso da canção que até hoje, Rod Stewart comentou em sua autobiografia que \"Nunca se tem uma ideia de como uma canção será recebida e que trajeto fará. Mas isto de imediato ficou claro quando Da ya think i’m sexy foi lançada, porque um horror de pessoas adoraram a música.\n[…]\nEmbora tenha atingindo grande sucesso comercial, a canção foi criticada por muitos especialistas da imprensa rock, que acusavam Rod de trair suas raízes blues devido ao seu arranjo disco, mas Stewart e outros favoravéis a música foram rápidos em apontar que os outros artistas amplamente respeitados, como Paul McCartney e os Rolling Stones, também tinham lançado canções que bebiam da mesma fonte de inspiração da era disco.\n[…]\nO cantor e compositor brasileiro Jorge Ben Jor descobriu que, no refrão da canção \"Da Ya Think I'm Sexy?\", havia notas iguais às da frase\n[…]\n\"tete/tete/rete/tete/tete/rete\", contidas em sua composição \"Taj Mahal\"\n[…]\n. O cantor reclamou a autoria da expressão e iniciou um processo por plágio contra Rod. Stewart doou os lucros obtidos com a veiculação da faixa ao UNICEF em 1979 e cantou-a no Music for UNICEF Concert, feito na Assembléia Geral das Nações Unidas realizado ainda no mesmo ano.\n[…]\nA partir de 1979 os royalties de \"Da Ya Think I'm Sexy?\" passaram a ser destinados a Ben Jor. Em autobiografia lançada em 2012, Rod Stewart admitiu o plágio na melodia:",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Hermeto Pascoal",
      "descricao": "Compositor e multi-instrumentista brasileiro (1936–2025), de barba branca e chapéu."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que trompetista americano gravou composições de Hermeto Pascoal no disco Live-Evil, de 1971?",
    "resposta": "Miles Davis",
    "fonte": [
      "https://en.wikipedia.org/wiki/Live-Evil"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Live-Evil",
        "situacao": "desambiguacao",
        "texto": "Live Evil may refer to:\n\nLive-Evil (Miles Davis album), 1971\nLive Evil (Black Sabbath album), 1982\n\"Live Evil\" (song), by Flatlinerz, 1994\nLive Evil (film), a 2009 American horror film"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Live_Evil_%28desambigua%C3%A7%C3%A3o%29",
        "situacao": "desambiguacao",
        "texto": "Live Evil pode referir-se a:\n\nLive Evil - álbum de Black Sabbath\nLive-Evil - álbum de Miles Davis\n\n\n== Ver também ==\nEvil Live - álbum da banda Diamond Head\nA Touch of Evil: Live - álbum da banda Judas Priest",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Djavan",
      "descricao": "Cantor, compositor e violonista brasileiro nascido em Maceió em 1949."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que astro americano da soul music tocou gaita na gravação de Samurai, de Djavan, lançada em 1982?",
    "resposta": "Stevie Wonder",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Djavan"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Djavan",
        "situacao": "ok",
        "texto": "Djavan Caetano Viana, ou simplesmente Djavan (Maceió, 27 de janeiro de 1949) é um cantor, compositor, arranjador, produtor musical, empresário e violonista brasileiro. Um dos maiores nomes da MPB, é reconhecido por sua originalidade artística e versatilidade, tendo construído uma das obras mais singulares da música brasileira, marcada pela sofisticação melódica e harmônica, pela diversidade rítmic\n[…]\nO álbum Seduzir foi avaliado pela Allmusic com nota máxima, onde o crítico Alex Henderson compara as composições e estilo musical de Djavan aos do Beatles e Stevie Wonder, além de citar como significantes faixas musicais como \"Seduzir\", \"Morena de Endoidecer\", \"Jogral\" e \"Faltando um Pedaço\". Outra herança do Seduzir foi a primeira banda própria, de nome \"Sururu de Capote\", composta por Luiz Avellar no piano, Sizão Machado no baixo, Téo Lima na bateria e Zé Nogueira nos sopros.\n[…]\nChega o convite da gravadora CBS, futura Sony Music, e Djavan embarca para Los Angeles para gravar, sob a produção de Ronnie Foster, um dos principais nomes da música soul norte-americana, o disco Luz, que tem a participação de Stevie Wonder na canção \"Samurai\", além de outros grandes sucessos que se eternizariam como \"Sina\", \"Pétala\", \"Açaí\" e \"Capim\". O trabalho resulta em uma mescla da musicalidade brasileira típica de se exportar com a influência jazzy americana.\n[…]\nPresente em outras canções, a ancestralidade africana está impressa em Meu lado, com a \"Hino da Juventude Negra da África do Sul\" e com ainda maior vigor em \"Soweto\", sua primeira canção efetivamente de protesto, música que abre com Não é azul, mas é mar (1987), gravado novamente em Los Angeles e lançado como Bird of Paradise, com canções em inglês de Djavan: \"Stephe's Kingdom\" (com participação de Stevie Wonder), \"Bird of Paradise\" e \"Miss Sussana\".\n[…]\n1982 — Luz\n[…]\nDjavan oficial no Twitter\n[…]\n«Nota sobre Djavan en Frontera Musical» (em espanhol)"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Gal Costa",
      "descricao": "Cantora brasileira, figura central da Tropicália."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Em 1969, Gal Costa gravou Meu Nome é Gal, canção feita especialmente para ela por quem?",
    "resposta": "Roberto e Erasmo Carlos",
    "distratores": [
      "Caetano Veloso",
      "Gilberto Gil",
      "Jorge Ben"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Gal_Costa"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Gal_Costa",
        "situacao": "ok",
        "texto": "Gal Maria da Graça Penna Burgos Costa (nascida Maria da Graça Costa Penna Burgos; Salvador, 26 de setembro de 1945 – São Paulo, 9 de novembro de 2022) (/ɡaw ˈkɔs ta/ () foi uma cantora e compositora brasileira.\n[…]\nLançou seu primeiro disco solo, Gal Costa (1969), que além de Baby e Divino Maravilhoso trouxe Que Pena (Ele já não gosta mais de mim) (Jorge Ben Jor) e Não Identificado (Caetano Veloso), todos grandes sucessos. No mesmo ano gravou o segundo disco solo, Gal, conhecido como o psicodélico, que trouxe os hits Meu Nome É Gal (Roberto e Erasmo Carlos) e Cinema Olympia (Caetano Veloso).\n[…]\nEm 2001, gravou o CD Gal de tantos amores, contendo a canção Caminhos do mar (Dorival Caymmi, Danilo Caymmi e Dudu Falcão). Nesse mesmo ano, foi incluída no Hall of Fame do Carnegie Hall (única cantora brasileira a participar do Hall), após participar do show 40 anos de Bossa Nova, em homenagem a Tom Jobim, ao lado de César Camargo Mariano e outros artistas.\n[…]\nEm 2005, lançou pela gravadora Trama o CD Hoje, produzido por César Camargo Mariano, onde Gal reuniu várias canções novas de compositores pouco conhecidos do grande público, tendo se destacado Mar e sol (Carlos Rennó e Lokua Kanza).\n[…]\nNo dia 25 de novembro, o Multishow exibiu, ao vivo, Gal Costa, Gilberto Gil, e Nando Reis juntos no show da turnê Trinca de Ases, que também virou um CD e DVD em 2018. Neste mesmo ano lançou o elogiado álbum A Pele Do Futuro, com uma sonoridade que buscou remeter ao estilo musical soul e disco da década de 1970. As canções de trabalho foram Palavras No Corpo, Sublime e Cuidando De Longe, e o título do álbum foi retirado da letra da canção Viagem Passageira.\n[…]\nCanal de Gal Costa no YouTube\n[…]\nAvenida Gal Costa no OpenStreetMap"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Trio elétrico",
      "descricao": "Caminhão com som e palco que conduz os foliões no carnaval de Salvador, surgido em 1950."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "No carnaval de Salvador de 1950, que dupla tocou guitarras elétricas em cima de um velho Ford, a Fobica, criando o trio elétrico?",
    "resposta": "Dodô e Osmar",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Trio_el%C3%A9trico"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Trio_el%C3%A9trico",
        "situacao": "ok",
        "texto": "No entretenimento, o trio elétrico é um veículo adaptado com aparelhos de sonorização e alto-falantes, para a apresentação de música ao vivo ao ar livre, criado na cidade brasileira de Salvador (estado da Bahia) em 1950, pelos músicos Dodô e Osmar Macedo. Através das caixas amplificadoras com alto-falantes, normalmente montados em um caminhão/carreta, são normalmente emitidos as músicas dos gênero\n[…]\nVendo a animação com que o público reagira ao frevo e para suprir a frustração provocada pela interrupção do desfile, os músicos Dodô e Osmar Macedo, adaptaram um veículo Ford 1929, ligando à bateria do automóvel a um violão e um protótipo de guitarra, criando assim a \"fobica\", que mais tarde seria reconhecida como o primeiro trio elétrico do mundo. A dupla elétrica Dodô e Osmar saiu pelas ruas executando o ritmo recifense.\n[…]\nOs trios foram ampliando em tamanho, na década de 1960, pelo uso de caminhões cada vez maiores (época em que Dodô e Osmar deixaram de se apresentar). Ligados a blocos identificados por camisões coloridos - as mortalhas - os grupos passam a se isolar dos demais foliões por meio de cordas de separação. Destacava-se, desde então, o Trio Elétrico Tapajós, que era contratado pela Prefeitura do Recife para se apresentar naquela cidade.\n[…]\nEmbora o crescimento do trio tenha permitido a criação de uma nova indústria de relativa importância na Bahia, sua essência permanece na relação entre o artista e o folião; a este respeito Betinho, músico filho de Osmar Macedo, declarou: \"Quando a gente está tocando em cima do trio e vê aquele negão pulando lá embaixo... De repente, o negão pensa que você está tocando para ele dançar, mas não é. Ele é que está dançando para você tocar.\n[…]\n50 anos do trio elétrico - Fred de Góes, Editora Corrupio, 2000, ISBN 8586551082, 168 pág.\n[…]\nSonhos Elétricos - Moraes Moreira, Azougue Editorial, 2011."
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Chega de Saudade",
      "descricao": "Canção cuja gravação por João Gilberto é considerada o marco da bossa nova."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Tom Jobim fez a música de Chega de Saudade, marco da bossa nova. Quem escreveu a letra?",
    "resposta": "Vinicius de Moraes",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Chega_de_Saudade_(can%C3%A7%C3%A3o)"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Chega_de_Saudade_(can%C3%A7%C3%A3o)",
        "situacao": "ok",
        "texto": "\"Chega de Saudade\" é uma canção escrita por Vinicius de Moraes (letra) e por Antonio Carlos Jobim (música), no final dos anos 50 e gravada por diversos artistas, como João Gilberto, Elizeth Cardoso, Angra e Os Cariocas. Esta canção tornou-se um dos símbolos da bossa nova, sendo que a sua gravação por João Gilberto em 10 de julho de 1958, pela gravadora EMI-Odeon, é considerada o marco inicial dest\n[…]\nComposta em 1956, foi gravada pela primeira vez em abril de 1958, na voz de Elizeth Cardoso, com arranjos de Jobim e acompanhada também pelo violão de João Gilberto, para o disco Canção do Amor Demais, que seria lançado em maio daquele ano pelo selo Festa. Embora esta gravação seja a primeira vez que se ouviria a famosa batida de João no violão - que caracterizaria a bossa nova -, o violonista acabaria não sendo creditado no lançamento original.\n[…]\nA versão de João tornar-se-ia muito famosa devido ao seu modo de cantar e pela sua batida no violão, sendo que a sua gravação em 10 de julho de 1958 ficaria reconhecida como o marco inicial da bossa nova.\n[…]\nCréditos dados pela página oficial de Tom Jobim.\n[…]\nO próprio Jobim cantou e tocou piano em «Chega de Saudade» no seu álbum Inédito em 1987. O filho dele tocou bateria e a esposa e filha dele cantou também na gravação.\n[…]\nQuincy Jones gravou uma versão para seu álbum Big Band Bossa Nova em 1962.\n[…]\n(em português) Helena Jobim, Um Homem Iluminado, Editora Nova Fronteira, Rio de Janeiro, 1996, ISBN 8520906842\n[…]\nCastro, Ruy (2016). Chega de Saudade - A história e as histórias da bossa nova. São Paulo: Companhia das Letras. ISBN 9788535927528\n[…]\n(em português) Sérgio Cabral, Antônio Carlos Jobim, Uma Biografia, Lumiar Editora, Rio de Janeiro, 1997, ISBN 858542642X"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Acabou Chorare",
      "descricao": "Álbum dos Novos Baianos lançado em 1972."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "No disco Acabou Chorare, dos Novos Baianos, quem escreveu as letras das canções de Moraes Moreira, como Preta Pretinha?",
    "resposta": "Luiz Galvão",
    "distratores": [
      "Paulinho Boca de Cantor",
      "Pepeu Gomes",
      "Baby Consuelo"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Acabou_Chorare"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Acabou_Chorare",
        "situacao": "ok",
        "texto": "Acabou Chorare é o segundo álbum de estúdio do grupo musical brasileiro Novos Baianos. O disco foi lançado em 1972 pela gravadora Som Livre, após o relativo sucesso de É Ferro na Boneca (1970), momento em que os músicos baianos ainda procuravam por identidade própria. O álbum adotou a guitarra expressiva de Jimi Hendrix e a brasilidade de Assis Valente, sobretudo a influência estrondosa de João Gi\n[…]\n— Luiz Galvão, letrista, biógrafo e mentor intelectual do grupo, no encarte de Acabou Chorare.\n[…]\nSob a cartilha da transgressão, Pepeu Gomes, Paulinho Boca de Cantor, Luiz Galvão, Baby Consuelo e Moraes Moreira realizaram o primeiro disco dos Novos Baianos, É Ferro na Boneca (1970), em São Paulo. Tocaram juntos pela primeira vez em Salvador, 1969, no espetáculo \"Desembarque dos bichos depois do dilúvio\", com a banda dos irmãos Pepeu e Jorginho Gomes, que era baterista.\n[…]\nFoi isso que fez os Novos Baianos chegar diferente. Fizemos o disco Acabou Chorare, foi um marco.\"\n[…]\n\"Preta Pretinha\" é uma balada de seis minutos composta por Moreira e com versos de Galvão, feitos para uma moça que este conheceu em Niterói. Segundo ele, \"A jovem combinou comigo para que eu fosse a Niterói conhecer seu pai e, na volta, ela viria morar comigo no apartamento dos Novos Baianos, em Botafogo. Pegamos a barca, conheci o pai dela, mas, na volta, ela se arrependeu e voltou para o seu namorado.\n[…]\nMoreira, em 1995, lançou seu Acústico da Mtv com metade do repertório dos Novos Baianos, com o seguinte argumento: \"São músicas que atravessam o tempo\". Em 2009, Galvão afirmou, com orgulho do grupo, que \"nós éramos a alegria em meio a uma época terrível.\"\n[…]\nLuiz Galvão, Anos 70: novos e baianos. Editora 34, 1997. ISBN 8573260556\n[…]\nMoraes Moreira e Romero Cavalcanti, A história dos Novos Baianos e outros versos. Lingua Geral, 2007. ISBN 8560160183\n[…]\n«Novos Baianos». no site CliqueMusic"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Rock in Rio",
      "descricao": "Festival de música criado no Rio de Janeiro em 1985."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que empresário e publicitário carioca criou o festival Rock in Rio, em 1985?",
    "resposta": "Roberto Medina",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Rock_in_Rio"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Rock_in_Rio",
        "situacao": "ok",
        "texto": "O Rock in Rio é um festival de música idealizado pelo empresário brasileiro Roberto Medina pela primeira vez em 1985. É reconhecido como um dos maiores festivais musicais do planeta. Foi originalmente organizado no Rio de Janeiro, de onde vem o nome. Tornou-se um evento de repercussão em nível mundial e teve em 2004 sua primeira edição fora do Brasil, em Lisboa, Portugal.\n[…]\nEntretanto, a mídia brasileira e o público foram totalmente contra a realização do festival no país, mas ignorados devidos a pensamentos ambiciosos por parte de Roberto Medina.\n[…]\nSegundo Roberto Medina, \"Com o novo local, que também ganhará o nome de \"Cidade do Rock\", o Rock in Rio poderá acontecer a cada dois anos, da mesma forma que é o Rock in Rio Lisboa. O espaço não servirá apenas para o festival, será multiúso e poderá abrigar outros shows e eventos\".\n[…]\nRoberto Medina já havia afirmado que o Rock in Rio Lisboa \"veio para ficar\". Em 2019, a organização confirmou a realização de mais dois eventos nos anos de 2021 e 2023, com as edições ocorrendo no Rio de Janeiro.\n[…]\nO Rock in Rio XI foi realizado em setembro de 2026. 700 mil pessoas compareceram, e em contraste à todas as edições entre 2011 e 2022 esgotando todos os dias, apenas 3 dos 7 dias do festival tiveram capacidade máxima.\n[…]\nA enorme popularidade da marca \"Rock in Rio\" na cidade do Rio de Janeiro levou Roberto Medina a abrir, na cidade, um café com o nome Rock in Rio Café, em 4 de março de 1997. Localizado na Barra da Tijuca, o local seguia a receita da cadeia de restaurantes Hard Rock Cafe, contando com fotos, instrumentos musicais e outros objetos das três edições do evento, além de loja de lembranças com o logotipo do evento.\n[…]\nThe Town Festival\n[…]\nLuiz Felipe Carneiro (2011) \"Rock in Rio - A História do Maior Festival de Música do Mundo\", Globo Livros.\n[…]\nCobertura especial do Rock in Rio 2011\n[…]\nRock in Rio ao vivo\n[…]\nTransporte Rock in Rio"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Olodum",
      "descricao": "Bloco afro e grupo percussivo de Salvador, criado em 1979."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Nos anos oitenta, que mestre de bateria do Olodum criou a batida do samba-reggae?",
    "resposta": "Neguinho do Samba",
    "distratores": [
      "Carlinhos Brown",
      "Mestre Bimba",
      "Luiz Caldas"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Neguinho_do_Samba"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Neguinho_do_Samba",
        "situacao": "ok",
        "texto": "Antônio Luís Alves de Souza, mais conhecido como Neguinho do Samba (Salvador, 21 de junho de 1955 — Salvador, 31 de outubro de 2009), foi um músico brasileiro, a quem foi atribuída a criação do samba-reggae, mestre de bateria e grande responsável pela projeção do grupo Olodum e fundador da Associação Educativa e Cultural Didá, ambos com sede no Pelourinho, em Salvador.\n[…]\nNeguinho do Samba e o grupo Olodum participaram, em 1996, da gravação do videoclipe de They Don't Care About Us, de Michael Jackson, realizada no Brasil. Participou também da gravação do disco The Rhythm of the Saints, de Paul Simon, de 1990.\n[…]\nNeguinho morreu aos 54 anos em consequência de problemas cardíacos..\n[…]\nCom a permanência do bloco afro fiel às tradições rítmicas, ele mudou-se para o Olodum onde, em 1983, foi convidado a reger sua bateria; foi nesta época que ganhara o apelido a partir de um fato prosaico, que ele narrou assim: \"Um dia eu parei em frente ao Bar do Reggae com um carro cheio de instrumentos e aí um amigo disse: você é o Neguinho do samba mesmo, né, rapaz? Aí pegou.\"\n[…]\nNo Olodum, com plena liberdade de trabalho, ele inseriu modificações nos instrumentos que integram os grupos típicos de samba, propôs novas formas de percussão, fazendo assim a renovação do ritmo; na época o Pelourinho era um reduto de Reggae, o que certamente influenciou a mudança de batida que Neguinho introduziu, sendo ele um dos seus criadores; a este respeito assinala Goli Guerreiro: \"...apesar do consenso construído em torno de Neguinho do Samba e do papel fundamental que ele teve, não se pode creditar a um só músico a invenção do samba-reggae.\n[…]\nEm 1996 Neguinho aparece regendo o Olodum no videoclipe de Michael Jackson da canção They Don't Care About Us (\"Eles não se importam conosco\", em livre tradução) filmado por Spike Lee no Pelourinho."
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "João Gilberto",
      "descricao": "Cantor e violonista baiano, considerado o pai da bossa nova."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Nos anos cinquenta, João Gilberto se trancava no banheiro da casa da irmã para criar a batida da bossa nova. Em qual cidade mineira?",
    "resposta": "Diamantina",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Jo%C3%A3o_Gilberto"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Jo%C3%A3o_Gilberto",
        "situacao": "ok",
        "texto": "João Gilberto Prado Pereira de Oliveira, mais conhecido como João Gilberto (Juazeiro, 10 de junho de 1931 – Rio de Janeiro, 6 de julho de 2019), foi um cantor, violonista e compositor brasileiro. Considerado um artista genial por musicólogos e jornalistas especializados, revolucionou a música brasileira ao criar uma nova batida de violão para tocar samba: a \"Bossa Nova\". O seu jeito suave de canta\n[…]\nO ano de 1958 foi um marco para a música popular brasileira. Em julho, Elizete Cardoso lançou o famoso LP Canção do Amor Demais, contendo músicas de Tom Jobim e Vinicius de Moraes. O disco, entretanto, entraria na história da música popular brasileira por outro motivo: João Gilberto acompanhava Elizete ao violão nas faixas Chega de Saudade e Outra Vez, sendo essas as primeiras gravações da chamada \"batida da bossa nova\".\n[…]\nEm 1960, com a febre da batida de João, realizaram-se vários festivais de bossa nova pelo Rio, como no Grupo Universitário Hebraico, na Escola Naval, na Rádio Globo - transmitido ao vivo -, e no Teatro de Arena da Faculdade Nacional de Arquitetura, este último com participação de João Gilberto e Chico Pereira, que gravou o espetáculo, além de presença de Vinicius de Moraes e Tom Jobim e ampla cobertura da mídia.\n[…]\nApresentou-se em Paris, em duas performances no Olympia, lotados, principalmente de jovens. A França vivia mais uma explosão de bossa nova, desta vez fruto da música eletrônica. Enlouqueceu o público ao tocar Que Reste-t-il de nos Amours. Com frequência, em seus shows, João Gilberto homenageava a cidade em que se apresentava. Em São Paulo, sempre tocava Saudosa Maloca, de Adoniran Barbosa; em Portugal, para delírio do público, apresentou Casa Portuguesa; em Recife, tocava Recife, Cidade Lendária.\n[…]\nMAMMI, Lorenzo. João Gilberto e o projeto utópico da bossa nova. São Paulo: Novos Estudos, n° 72, 1992. pp. 63 – 70.\n[…]\n«Discografia de João Gilberto» (em inglês)"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Tim Maia",
      "descricao": "Sebastião Rodrigues Maia, cantor e compositor carioca, nome central do soul brasileiro."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Em março de 1998, Tim Maia passou mal no palco e morreu dias depois. Em que cidade era esse último show?",
    "resposta": "Niterói",
    "distratores": [
      "Petrópolis",
      "São Paulo",
      "Belo Horizonte"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Tim_Maia"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Tim_Maia",
        "situacao": "ok",
        "texto": "Sebastião Rodrigues Maia (Rio de Janeiro, 28 de setembro de 1942 – Niterói, 15 de março de 1998), mais conhecido como Tim Maia (AFI: [tʃĩ ˈmajɐ]), foi um cantor, compositor, maestro, produtor musical, multi-instrumentista, empresário e político brasileiro, um dos pioneiros na introdução dos gêneros soul e funk na música popular brasileira e reconhecido como um dos maiores ícones da música no Brasi\n[…]\nEm 8 de março de 1998, enquanto gravava um show para a televisão no Teatro Municipal de Niterói, Tim Maia se sentiu mal e foi internado no Hospital Universitário Antônio Pedro com crise hipertensiva e edema pulmonar. Um quadro grave de infecção se desenvolveu nos dias seguintes e ele acabou morrendo aos 55 anos em 15 de março daquele ano, de falência de múltiplos órgãos, causando grande comoção em todo o Brasil.\n[…]\nEm 1998, Tim Maia voltou a focar em sua carreira, e agendou um show no Teatro Municipal de Niterói, show esse que renderia um disco acústico e seria exibido pelo canal de televisão por assinatura Multishow. A apresentação se iniciaria inicialmente às 20h, mas teve um atraso de 30 minutos. O cantor entrou no palco e começou a cantar os primeiros versos de \"Não Quero Dinheiro\", quando fez gestos com as mãos pedindo para se retirar.\n[…]\nA equipe perguntou se havia algum médico assistindo à apresentação; Drauzio Varella estava presente com a esposa, contudo o cantor foi transferido antes mesmo que algo pudesse ser feito ainda no teatro. Devido às suas condições de saúde — Tim teve uma crise de hipertensão —, foi levado para o Hospital Universitário Antônio Pedro logo em seguida. Após uma semana internado, Tim Maia morreu em 15 de março de 1998 em Niterói, aos 55 anos e com 140 quilos, devido a uma infecção generalizada.\n[…]\nMotta, Nelson (2007). Vale Tudo - O Som e a Fúria de Tim Maia. São Paulo: Editora Objetiva. ISBN 9788573028744\n[…]\n«Tim Maia». no site da Editora Abril"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Daniela Mercury",
      "descricao": "Cantora baiana de axé music, nascida em 1965, autora de O Canto da Cidade."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em 1992, um show de Daniela Mercury em São Paulo reuniu tanta gente que causou medo pela estrutura de qual museu, sob cujo vão ela cantava?",
    "resposta": "MASP",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Daniela_Mercury"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Daniela_Mercury",
        "situacao": "ok",
        "texto": "Daniela Mercuri de Almeida Verçosa (Salvador, 28 de julho de 1965), mais conhecida como Daniela Mercury, é uma cantora, compositora, bailarina e filantropa brasileira. Daniela é licenciada em dança pela Universidade Federal da Bahia, tendo iniciado seus estudos nessa arte desde os quatro anos de idade, tornando-se posteriormente professora de jazz, dança moderna e balé clássico, além de ter se esp\n[…]\nDaniela Mercury acabou por vender cerca de 400.000 cópias no país. O sucesso do disco levou a cantora a realizar 130 apresentações em 1991, sob um cachê estimado em US$ 5 mil. No dia 5 de junho de 1992, apresentou-se no projeto \"Som do Meio-Dia\" no vão livre do Museu de Arte de São Paulo (MASP), voltado para artistas iniciantes. Para surpresa da artista, o show reuniu cerca de 30 mil espectadores, o que acabou por deixar o trânsito engarrafado nas imediações do local.\n[…]\nApós 40 minutos de apresentação, Mercury foi retirada do palco por representantes da secretaria de turismo de São Paulo que, preocupados com a estrutura do museu e com as obras que ele abrigava, obtiveram uma ordem da Polícia Militar do estado para interromper o concerto, e o projeto acabou por ser mudado de lugar após o show. O concerto de Mercury no MASP foi reconhecido como um dos fatores determinantes para projetar a axé music no país.\n[…]\nO álbum, bem como sua faixa-título, são vistos como responsáveis por consolidar a carreira de Mercury, bem como a axé music em todas as regiões do Brasil. Mercury experimentou durante este período um auge de popularidade pouco antes visto na história da indústria musical brasileira. No final de 1992, a TV Globo veiculou o especial de fim de ano O Canto da Cidade, que registrou o primeiro grande show da cantora, reunindo 30 mil pessoas na Praça da Apoteose no Rio de Janeiro.\n[…]\nDaniela Mercury no Twitter\n[…]\n«Daniela Mercury no Dicionário Cravo Albin da Música Popular Brasileira»"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Garota de Ipanema",
      "descricao": "Canção de bossa nova de Tom Jobim e Vinicius de Moraes, de 1962."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Tom e Vinicius viam a garota de Ipanema passar sentados num bar que depois ganhou o nome da canção. Como o bar se chamava antes?",
    "resposta": "Bar Veloso",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Garota_de_Ipanema"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Garota_de_Ipanema",
        "situacao": "ok",
        "texto": "\"Garota de Ipanema\" é uma canção brasileira de bossa nova. Foi composta por Antônio Carlos Jobim e letrada por Vinicius de Moraes em 1962. É considerada a segunda canção mais executada da história da música mundial, depois de Yesterday. Teve mais de quinhentas versões com diferentes intérpretes, além de ser incluída em cerca de 1,5 mil álbuns, vinis e coletâneas ao redor do planeta.\n[…]\nA canção foi inspirada em Heloísa Eneida Menezes Paes Pinto (agora conhecida como Helô Pinheiro), uma garota de dezessete anos que vivia na Rua Montenegro em Ipanema. Diariamente, ela passava pelo bar-café Veloso a caminho da praia. Às vezes, ela entrava no bar para comprar cigarros para a mãe. No inverno de 1962, os compositores viram a garota passar pelo bar e inspirados nela compuseram a canção.\n[…]\nPraticamente todos os cantores brasileiros gravaram sua própria versão da canção, incluindo aqueles mais distantes da bossa nova, como os tropicalistas Caetano Veloso e Gal Costa. Muito bem sucedido é a versão de Elis Regina no festival de Montreux em 1979.\n[…]\nO legado de \"Garota de Ipanema\" foi reconhecido em vários aspectos nos Jogos Olímpicos e Paralímpicos de Verão em 2016: as mascote olímpicas e paraolímpicas foram, respectivamente, nomeadas Vinícius e Tom por meio de votação pública, enquanto a cerimônia de abertura dos Jogos Olímpicos apresentou um segmento temático em torno da música e da arquitetura de Oscar Niemeyer.\n[…]\nEm 2001, os proprietários dos direitos autorais da canção (os herdeiros dos compositores) processaram Helô por usar o título da canção como nome de sua loja. Em sua queixa, eles declararam que seu título de \"Garota de Ipanema\" não lhe conferiu o direito de usar um nome que pertencesse legalmente a eles. O apoio público foi fortemente favorável a Helô.\n[…]\n\"Garota de Ipanema\" no YouTube (por Tom, Vinicius e João)\n[…]\n\"Garota de Ipanema\" no YouTube (por Frank Sinatra e Jobim)"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Pelo Telefone",
      "descricao": "Samba registrado em 1916 e gravado em 1917, considerado o primeiro samba gravado."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "O samba Pelo Telefone nasceu nas rodas da casa de qual quituteira baiana, na Praça Onze, no Rio de Janeiro?",
    "resposta": "Tia Ciata",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Pelo_Telefone"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Pelo_Telefone",
        "situacao": "ok",
        "texto": "Pelo Telefone é considerado o primeiro samba a ser gravado no Brasil segundo a maioria dos autores, a partir dos registros existentes na Biblioteca Nacional, embora existam gravações de samba anteriores não tão bem sucedidas como \"Um Samba na Penha\" (Pepa Delgado), \"Samba - Em Casa da Bahiana\"(1912) e  \"Urubu Malandro\"(1914)\n[…]\nA canção foi composta em 1916, no quintal da casa da Tia Ciata, na Praça Onze. A melodia, originalmente, intitulava-se Roceiro  e foi uma criação coletiva, com participação de João da Baiana, Pixinguinha, Caninha, Hilário Jovino Ferreira  e Sinhô, entre outros. Sobre a paternidade da música, Donga a registrou antes, justificando a ação com a máxima atribuída a Sinhô: \"música é como passarinho, de quem pegar primeiro\".\n[…]\nExistem controvérsias quanto à autoria e quanto à data da composição. Segundo alguns, a canção teria sido composta em 1916, no quintal da casa da Tia Ciata, na Praça Onze. A melodia, originalmente, intitulava-se Roceiro  e foi uma criação coletiva, com participação de João da Baiana, Pixinguinha, Caninha, Hilário Jovino Ferreira  e Sinhô, entre outros.\n[…]\nO Jornal do Brasil, em 4 de fevereiro de 1917, publicou uma nota do Grêmio Fala Gente comunicando que “o verdadeiro tango Pelo Telefone”, dos autores João da Mata, Germano, Tia Ciata e Hilário, seria cantado na Avenida Rio Branco,  dedicado “ao bom e lembrado amigo Mauro”. O próprio Almirante acusou Donga de se ter apropriado de uma criação coletiva. Donga respondeu que as músicas eram diferentes. Mas concordou que não foi o autor da letra de Pelo Telefone, que é de Mauro de Almeida.\n[…]\nCulpou a gravadora por ter omitido o nome do parceiro. “A omissão do nome de Mauro na gravação da Casa Edison não pode ser atribuída a mim”, disse.\n[…]\n«\"Pelo Telefone\"». no site da Biblioteca Nacional do Brasil\n[…]\n«O Samba completa cem anos»"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Festival Internacional da Canção de 1968",
      "descricao": "Terceira edição do festival de música, com fase paulista e final no Maracanãzinho."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Na fase paulista do Festival Internacional da Canção de 1968, Caetano Veloso, vaiado, fez um discurso furioso enquanto cantava qual canção?",
    "resposta": "É Proibido Proibir",
    "distratores": [
      "Alegria, Alegria",
      "Tropicália",
      "Superbacana"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Festival_Internacional_da_Can%C3%A7%C3%A3o",
      "https://pt.wikipedia.org/wiki/Caetano_Veloso"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Festival_Internacional_da_Can%C3%A7%C3%A3o",
        "situacao": "ok",
        "texto": "O Festival Internacional da Canção Popular (FIC) foi um concurso anual de músicas nacionais e estrangeiras, realizado no ginásio do Maracanazinho, no Rio de Janeiro, que mais posteriormente foi alvo de críticas por causa da acústica considerada inadequada para música ao vivo. Foi transmitido pela TV Rio (primeira edição) e pela TV Globo. A música de abertura era composta por Erlon Chaves e chamava\n[…]\nA fase de 1968 (III FIC) é considerada emblemática porque conflitou com o endurecimento da ditadura militar no Brasil e se tornou símbolo de resistência e contestação — canções como \"É Proibido Proibir\", de Caetano Veloso, foram vaiadas, apesar de terem forte impacto.\n[…]\nA III edição, realizada em 1968, tornou-se histórica tanto musical quanto politicamente. Na fase nacional a vencedora foi “Sabiá”, de Tom Jobim e Chico Buarque, interpretada por Cynara e Cybele. Na fase internacional essa mesma canção também levou o primeiro lugar. Essa edição ficou marcada pelas vaias à música “É proibido proibir”, de Caetano Veloso, que, embora não tenha sido vencedora, simbolizou o choque entre arte e política no Brasil sob a ditadura militar.\n[…]\nNa edição VI de 1971, a fase nacional teve como vencedora a canção \"Kyrie\", de Paulinho Soares e Marcelo Silva, interpretada pelo Trio Ternura. Na fase internacional, venceu a canção \"Y Después del Amor\" (México). Essa edição ocorre em um momento de diminuição relativa dos festivais de canção na TV, com menor repercussão que as edições dos anos 60.\n[…]\nA sétima e última edição do festival ocorreu em 30 de setembro de 1972 e marcou o fim da “era dos festivais” no Brasil. A vencedora nacional foi “Fio Maravilha”, de Jorge Ben (posteriormente Jorge Ben Jor), interpretada por Maria Alcina. Na fase internacional, a canção “Nobody Calls me Prophet”, dos EUA (interprete David Clayton-Thomas) levou o prêmio.\n[…]\nCanção pra senhora (Sérgio Bittencourt), com O Grupo."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Caetano_Veloso",
        "situacao": "ok",
        "texto": "Caetano Emanuel Viana Teles Veloso (Santo Amaro, 7 de agosto de 1942) é um cantor, músico, compositor, produtor, arranjador e escritor brasileiro. Com uma carreira que ultrapassa seis décadas, Caetano construiu uma obra musical marcada pela releitura e renovação e considerada amplamente como possuidora de grande valor intelectual e poético.\n[…]\nEm 1968, face ao endurecimento do regime militar no Brasil, compôs o hino \"É Proibido Proibir\", que foi desclassificado e amplamente vaiado durante o III Festival Internacional da Canção. Em 1969, foi preso pelo regime militar e partiu para exílio político em Londres, onde lançou o disco Caetano Veloso (1971), disco com temática melancólica e com canções compostas em inglês e endereçadas aos que ficaram no Brasil.\n[…]\nFicou associada a este contexto a canção \"É Proibido Proibir\", da sua autoria (mesmo compacto que incluía a canção Torno a repetir, de domínio público), que ocasionou um dos muitos episódios antológicos da eliminatória do 3.º Festival Internacional da Canção (TV Globo), no Teatro da Universidade Católica (São Paulo, 15 de setembro de 1968). Vestido com roupa de plástico, acompanhado pelas guitarras distorcidas d'Os Mutantes, ele lança de improviso um histórico discurso contra a plateia e o júri.\n[…]\nEm 1979, apresentou-se em um festival na TV Tupi defendendo a canção \"Dona culpa ficou solteira\", de Jorge Ben, onde foi vaiado e a canção desclassificada.\n[…]\nEla também fez parte do repertório do disco \"Caetano\" (1987), que vendeu 100 000 cópias. Inclusive esta canção foi proibida na época do lançamento. Diferentemente dos lançamentos anteriores, este \"Caetano\" não foi acompanhado de entrevistas. Caetano, desgostoso com a imprensa, quis cortar relações com ela. O espetáculo realizado em Paris (março de 1988), lhe garantiu uma aparição exclusiva na revista Vogue."
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Tropicália ou Panis et Circencis",
      "descricao": "Álbum coletivo que serviu de manifesto musical da Tropicália."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Na capa do disco Tropicália ou Panis et Circencis, o maestro Rogério Duprat posa segurando, como se fosse uma xícara, qual objeto?",
    "resposta": "Um penico",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Tropic%C3%A1lia_ou_Panis_et_Circencis"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Tropic%C3%A1lia_ou_Panis_et_Circencis",
        "situacao": "ok",
        "texto": "Tropicalia ou Panis et Circencis (Latim para Pão e Circo) é um álbum de estúdio de Caetano Veloso, Gal Costa, Gilberto Gil, Nara Leão, Os Mutantes e Tom Zé lançado em julho de 1968 pela gravadora Philips Records. Considerado um marco importante da Tropicália, o álbum conta com contribuições líricas dos poetas José Capinam e Torquato Neto, e arranjos do maestro Rogério Duprat.\n[…]\nAntes de fins sociais e políticos, a Tropicália foi um movimento nitidamente estético e comportamental.\n[…]\nEm maio de 1968, começaram as gravações do álbum que seria o manifesto musical do movimento, do qual participaram artistas como Gal Costa, Nara Leão, Os Mutantes (trio então composto por Arnaldo Baptista, Rita Lee e Sérgio Dias), Tom Zé, além dos poetas José Capinam e Torquato Neto e do maestro Rogério Duprat (responsável pelos arranjos do LP).\n[…]\nA capa foi criada por Rubens Gerchman a partir de uma foto de Olivier Perroy. Rita Lee e Guilherme Araújo sugeriram a maior parte das roupas, de forma a predominarem tons de verde e amarelo. Gil aparece sentado no chão, repetindo a pose de Oswald de Andrade num retrato dos modernistas de 1922. Caetano segura um retrato de Nara, numa referência a fotos de grupos de artistas dadaístas de 1921. Tom Zé se veste como um homem da mala.\n[…]\nMariante da Silva, Bruno Sanches; Gonçalves, Jéssica Yohana (janeiro–junho de 2018). Contracultura e Transgressão: uma análise do álbum \"Tropicalia ou Panis et Circencis\" (1968). CLIO: Revista de Pesquisa Histórica. Recife: UFPE - Universidade Federal de Pernambuco. pp. 234–254. ISSN 2525-5649"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Getz/Gilberto",
      "descricao": "Álbum de 1964 que reuniu Stan Getz e João Gilberto, com Tom Jobim ao piano."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Na cerimônia de 1965, incluindo o de álbum do ano, quantos prêmios Grammy o disco Getz Gilberto ganhou?",
    "resposta": "Quatro",
    "distratores": [
      "Um",
      "Dois",
      "Seis"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Getz/Gilberto"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Getz/Gilberto",
        "situacao": "ok",
        "texto": "Getz/Gilberto is an album by American saxophonist Stan Getz and Brazilian singer and guitarist João Gilberto, featuring pianist and composer Antônio Carlos Jobim (Tom Jobim), who also composed many of the tracks. It was released in March 1964 by Verve Records. The album features the vocals of Astrud Gilberto on two tracks, \"Garota de Ipanema\" (\"The Girl from Ipanema\") and \"Corcovado\". The artwork \n[…]\nGetz/Gilberto is a jazz and bossa nova album and includes tracks such as \"Desafinado\", \"Corcovado\", and \"Garota de Ipanema\". The last received a Grammy Award for Record of the Year and started Astrud Gilberto's career. \"Doralice\" and \"Para Machucar Meu Coração\" strengthened Gilberto's and Jobim's respect for the tradition of pre-bossa nova samba.\n[…]\nGetz/Gilberto received Grammy Awards for Best Jazz Instrumental Album, Individual or Group and Best Engineered Recording - Non-Classical; it also became the first non-American album to win Album of the Year, in 1965.\n[…]\nDue to these artistic differences, Getz/Gilberto #2 features Getz and his quartet on side A, and Gilberto, by himself, on side B. In spite of the tension in the studio Gilberto would continue to collaborate with Getz. Twelve years after the release of Getz/Gilberto the pair reunited at the Keystone Korner club in San Francisco for a six-day engagement promoting their new album, The Best of Two Worlds.\n[…]\nThe album won the 1965 Grammy Awards for Best Album of the Year, Best Jazz Instrumental Album, Individual or Group and Best Engineered Recording - Non-Classical. \"The Girl from Ipanema\" also won the award for Record of the Year in 1965. This was the second time a jazz album received Album of the Year. The first time was The Music from Peter Gunn by Henry Mancini in 1959.\n[…]\nIt was listed by Rolling Stone Brazil as one of the 100 best Brazilian albums in history. The album was inducted into the Latin Grammy Hall of Fame in 2001."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Getz/Gilberto",
        "situacao": "ok",
        "texto": "Getz/Gilberto é um álbum de jazz e bossa nova lançado em 1964 pelo violonista brasileiro João Gilberto e pelo saxofonista estadunidense Stan Getz, com participação especial de Tom Jobim no piano e Astrud Gilberto nos vocais de algumas faixas.\n[…]\nO maior prestígio satisfatório da crítica veio no ano seguinte, em 1965, com o Grammy de Melhor Álbum do Ano, Melhor Disco de Jazz e Melhor Arranjo Não Clássico. A canção \"The Girl from Ipanema\" ganhou o Grammy de Melhor Gravação do Ano. Reconhecimentos sem precedentes, pois foi a primeira vez que um álbum de jazz conquistou a principal categoria do Grammy: o fato só se repetiria em 2008 com River: The Joni Letters de Herbie Hancock.\n[…]\nEm 2008, a Fnac (França) foi mais longe e o elegeu como 47º melhor disco de todos os tempos entre outros 1000. Getz/Gilberto aparece também em dois dos mais famosos livros de referência musical: 1001 Albums You Must Hear Before You Die (2007), escrito por Robert Dimery, e 1,000 Recordings to Hear Before You Die (2008), de Tom Moon.\n[…]\nGetz/Gilberto definiu a música brasileira às audiências norte-americanas para sempre, sendo considerado o disco seminal que popularizou a bossa nova no mundo todo. Jobim e Gilberto, que já sentiam o fim do auge do gênero no Brasil, começaram a ser reconhecidos no mercado internacional. Depois deste disco, que inaugurou a carreira fonográfica de ambos no exterior, vieram Getz/Gilberto 2, Antonio Carlos Jobim, the composer of Desafinado, plays, Sinatra/Jobim, e outros.\n[…]\nGetz, no encarte do disco, comenta a crise artística e comercial que o jazz passava durante a descoberta pré-bossa nova, apontando, assim, o enriquecimento que o gênero norte-americano ganhou ao encontrar-se com o estilo brasileiro.\n[…]\nStan Getz - saxofone tenor",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Berimbau",
      "descricao": "Instrumento de corda de arco e cabaça que comanda o ritmo da roda de capoeira."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Quantas cordas de arame tem o berimbau, o arco de madeira com cabaça que comanda a roda de capoeira?",
    "resposta": "Uma",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Berimbau"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Berimbau",
        "situacao": "ok",
        "texto": "O berimbau(português brasileiro) ou hungo(português angolano) é um instrumento de corda com origem em Angola e tradicional da Bahia.\n[…]\nÉ constituído por uma vara em arco, de madeira ou verga, com comprimento aproximado de 1,50 metros a 1,70 metros e um fio de aço (arame) preso nas extremidades da vara. Na sua base, é amarrada uma cabaça (Lagenaria siceraria) ou um coité (da planta Crescentia cujete), sendo mais comum a cabaça com o fundo cortado, que funciona como caixa de ressonância.\n[…]\nO berimbau é um elemento fundamental na capoeira, sendo reverenciado pelos capoeiristas antes de iniciarem um jogo. Alguns o consideram um instrumento sagrado. Ele comanda a roda de capoeira, dita o ritmo e o estilo de jogo. São dados nomes às variações de toques mais conhecidas, e quando se toca repetidamente um mesmo toque, diz-se que está jogando a capoeira daquele estilo. As variações mais comuns são \"Angola\" e \"São Bento Grande\".\n[…]\nEntre os capoeiristas, há uma divisão em subtipos de berimbau.\n[…]\nEssas categorias relacionam-se ao som, não ao tamanho. A qualidade de um berimbau não depende do comprimento do arco nem do tamanho da cabaça, mas sim do diâmetro e resistência do arco e da qualidade sonora da cabaça.\n[…]\nSegura-se o berimbau com uma das mãos, à altura da cabaça; com a mesma mão, segura-se a moeda ou uma pedra de areia lavada que, durante o toque do instrumento, será, várias vezes, pressionada contra o arame, de forma a modificar o tom do berimbau. A cabaça posiciona-se à altura do abdome do tocador, pois este modifica-lhe o som, quando aproxima ou afasta a cabaça de seu corpo.\n[…]\nArco musical\n[…]\nBeat! Percussion Fever. \"Berimbau\""
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Tom Jobim",
      "descricao": "Antônio Carlos Jobim, compositor, pianista e maestro carioca, um dos criadores da bossa nova."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Antes de se dedicar de vez à música, Tom Jobim começou uma faculdade e trabalhou num escritório de qual profissão?",
    "resposta": "Arquitetura",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Tom_Jobim"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Tom_Jobim",
        "situacao": "ok",
        "texto": "Antônio Carlos Brasileiro de Almeida \"Tom\" Jobim (Rio de Janeiro, 25 de janeiro de 1927 – Nova Iorque, 8 de dezembro de 1994) foi um compositor, pianista, violonista, arranjador e cantor brasileiro. Considerado um dos grandes expoentes da música brasileira, Jobim internacionalizou a bossa nova e, com a ajuda de importantes artistas estadunidenses, fundiu-a com o jazz nos anos 1960 para criar uma n\n[…]\nJobim e Elis Regina se conheceram em 1974 na cidade de Los Angeles, quando Regina tinha apenas 29 anos e ainda era uma cara nova na indústria musical brasileira. Regina era uma força a ser reconhecida, sendo referida como “furacão” por aqueles que trabalharam com ela e ao seu redor. Os dois artistas se uniram para criar o álbum “Elis & Tom” que inesperadamente se tornaria tremendamente popular nos Estados Unidos, assim como em todo o mundo.\n[…]\nJobim casou-se com Thereza Otero Hermanny em 15 de outubro de 1949 e teve dois filhos: o arquiteto e músico Paulo Jobim (1950–2022) - pai de Daniel Jobim (nascido em 1973) e Dora Jobim (nascida em 1976) - e a pintora Elizabeth \"Beth\" Jobim (nascida em 1957). Jobim e Thereza se divorciaram em 1978. Em 30 de abril de 1986, casou-se com a fotógrafa Ana Beatriz Lontra, de 29 anos, com quem teve mais dois filhos: João Francisco Jobim (1979–1998) e Maria Luiza Jobim (nascida em 1987).\n[…]\nOs colaboradores e intérpretes brasileiros da música de Jobim incluem Vinicius de Moraes, João Gilberto (muitas vezes creditado como co-criador ou criador da bossa nova), Chico Buarque, Edu Lobo, Gal Costa, Elis Regina, Sérgio Mendes, Astrud Gilberto e Flora Purim. Arranjos significativos das composições de Jobim foram escritos por Eumir Deodato, Nelson Riddle e, principalmente, pelo maestro e compositor Claus Ogerman.\n[…]\nTom Jobim Arquivado em 25 de novembro de  2010, no Wayback Machine. no Dicionário Cravo Albin da Música Popular Brasileira\n[…]\nTom Jobim no IMDb"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Faroeste Caboclo",
      "descricao": "Canção da Legião Urbana lançada em 1987, que narra a saga de João de Santo Cristo."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Faroeste Caboclo tem cento e cinquenta e nove versos, mas não tem uma parte que quase toda canção popular repete. Qual?",
    "resposta": "Refrão",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Faroeste_Caboclo"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Faroeste_Caboclo",
        "situacao": "ok",
        "texto": "\"Faroeste Caboclo\" é uma canção composta por Renato Russo em 1979 e lançada por seu grupo, Legião Urbana, no álbum Que País É Este, de 1987. Ganhou bastante atenção quando do lançamento do álbum e, por isso, foi lançada como o terceiro single promocional em 1988. Por motivo de censura, houve a necessidade de editar a canção para a aprovação pela censura federal.\n[…]\nEm 2013, a canção ganhou uma adaptação cinematográfica, dirigida por René Sampaio e com roteiro de Victor Atherino.\n[…]\nA canção tem 168 versos. Segundo o jornalista e historiador Marcelo Fróes, no manuscrito original com a letra de \"Faroeste Caboclo\" havia uma anotação de Renato dizendo que imaginava a música como um baião cantado por Luiz Gonzaga.\n[…]\nA canção foi censurada, junto com \"Conexão Amazônica\", do mesmo disco. \"Faroeste\" pela presença de palavrões, enquanto \"Conexão\" por causa da temática, já que falava sobre o tráfico de drogas. Porém, em \"Faroeste\", foi feita uma edição onde se colocou um sinal sonoro sobre os palavrões. Com isso, a música foi liberada para radiodifusão. Outras rádios optaram por fazer edições, como a 89 FM, que fez uma edição de 8'49\" para retirar os palavrões.\n[…]\nAinda hoje, a canção é uma das mais bem lembradas da banda, estando em todas as coletâneas e álbuns ao vivo dela. Foi, ainda, regravada por Toni Platão no álbum Renato Russo - Uma Celebração, de 2006, e pela banda Tianastácia no álbum Tianastácia no País das Maravilhas de 2009.\n[…]\nEm 30 de maio de 2013, foi lançado Faroeste Caboclo, adaptação da canção, dirigida por René Sampaio e com roteiro de Victor Atherino e Marcos Bernstein a partir da letra original, e com distribuição da Europa Filmes. No elenco, atuaram Fabrício Boliveira (João de Santo-Cristo), Ísis Valverde (Maria Lúcia), Felipe Abib (Jeremias) e César Troncoso (Pablo).\n[…]\nVideoclipe da canção, em versão acústica gravada em 1992."
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Construção",
      "descricao": "Canção de Chico Buarque sobre a morte de um operário."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Em plena ditadura militar, Chico Buarque lançou a canção Construção, a do operário que morreu na contramão atrapalhando o tráfego. Em que ano?",
    "resposta": "1971",
    "distratores": [
      "1965",
      "1968",
      "1977"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Constru%C3%A7%C3%A3o_(%C3%A1lbum)"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Constru%C3%A7%C3%A3o_(%C3%A1lbum)",
        "situacao": "ok",
        "texto": "Construção é o oitavo álbum de estúdio do cantor e compositor brasileiro Chico Buarque, lançado em 1971 e composto em períodos entre o exílio de Chico na Itália e sua volta ao Brasil.\n[…]\nO disco marca o aguçamento da vertente crítica da poética do autor. Se antes ele harmonizava Bossa Nova com composições veladamente críticas à ditadura brasileira, em \"Construção\" o cantor mostrou-se mais ousado - como indica os versos iniciais de \"Deus lhe Pague\", faixa que abre o LP (\"Por esse pão pra comer, por esse chão pra dormir\"). Em \"Samba de Orly\", parceria com Toquinho e Vinicius de Moraes, Chico canta abertamente sobre o exílio - o que fez com que a canção fosse parcialmente censurada.\n[…]\nAntes da criação do álbum Construção, Chico Buarque vivia um período de intensa efervescência artística e política. Exilado na Itália em 1969 devido à repressão do regime militar brasileiro, ele aproveitou o tempo para compor novas canções que refletiam suas críticas sociais e seu engajamento político.\n[…]\nO retorno de Chico ao Brasil, em 1970, coincidiu com uma fase mais dura da ditadura militar, com censura rígida e perseguição aos artistas engajados. Isso influenciou diretamente a temática do álbum, que aborda as contradições sociais e o cotidiano opressivo do trabalhador brasileiro.\n[…]\nO álbum Construção foi amplamente aclamado pela crítica e pelo público, consolidando-se como um marco na música brasileira. Em 1972, a revista Realidade descreveu o disco como “o melhor feito nos últimos vinte anos no Brasil”, destacando sua importância na luta contra o \"som importado\" e reafirmando a relevância de Chico Buarque na cena musical nacional.\n[…]\nConstrução no site oficial de Chico Buarque"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Axé music",
      "descricao": "Gênero musical surgido em Salvador, ligado ao carnaval baiano."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "A canção Fricote, de Luiz Caldas, a do nega do cabelo duro, é tida como marco inicial do axé. Em que década foi lançada?",
    "resposta": "Década de 1980",
    "distratores": [
      "Década de 1960",
      "Década de 1970",
      "Década de 1990"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Ax%C3%A9_music"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Ax%C3%A9_music",
        "situacao": "ok",
        "texto": "O axé, ou axé music, é um gênero musical que surgiu no estado da Bahia na década de 1980 durante as manifestações populares do Carnaval de Salvador, misturando o samba-reggae, frevo, samba duro, samba afro, ijexá e outros ritmos do Candomblé, pop rock, bem como outros ritmos afro-brasileiros e afro-latinos.\n[…]\nMais tarde, Moraes Moreira, dos Novos Baianos, teria a ideia de subir num trio (que era apenas instrumental) para cantar — foi o marco zero da tradição de cantores \"puxando\" os trios elétricos. A partir da década de 1960, paralelamente ao movimento dos trios, aconteceu o da proliferação dos blocos afro: Filhos de Gandhi (do qual Gilberto Gil faz parte), Badauê, Ilê Aiyê, Muzenza, Araketu e Olodum.\n[…]\nSob a influência das letras e canções de Bob Marley nos ouvidos, surgiu, no Olodum — sob a batuta do mestre Neguinho do Samba —, um ritmo que misturava reggae e samba duro, num estilo com forte caráter de afirmação da negritude, que fez sucesso em Salvador a partir da década de 1980: o samba-reggae.\n[…]\nEm meados da década de 1980, mais precisamente em 1985, Luiz Caldas e Paulinho Camafeu compuseram juntos o primeiro sucesso nacional daquela cena musical de Salvador: \"Fricote (Nega do cabelo duro)\", gravado por Luiz Caldas. O ritmo era o deboche, criado por Alfredo Moura e Carlinhos Brown. O arranjo inovador e de alta qualidade técnica foi marcante para que a canção (de apenas dois acordes) se tornasse um dos maiores sucessos brasileiros.\n[…]\nElegibô reuniu as principais canções do primeiro e segundo álbum lançado também nos Estados Unidos e no Japão Ellegibô chegou ao topo da Billboard World Albums nos Estados Unidos, permanecendo durante onze semanas,[carece de fontes]? Além disso, a revista Rolling Stone, elegeu o álbum como um dos cinco melhores da \"world music\", em todo o mundo.."
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Secos & Molhados",
      "descricao": "Grupo de rock brasileiro dos anos 1970 que revelou Ney Matogrosso."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Em que ano saiu o primeiro disco do Secos e Molhados, aquele cuja capa mostra as cabeças dos integrantes servidas numa mesa?",
    "resposta": "1973",
    "distratores": [
      "1969",
      "1976",
      "1979"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Secos_%26_Molhados"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Secos_%26_Molhados",
        "situacao": "ok",
        "texto": "Secos & Molhados foi uma banda de rock brasileira da década de 1970, tendo como formação clássica João Ricardo (vocais, violão e harmônica), Ney Matogrosso (vocais) e Gérson Conrad (vocais e violão). O som da banda consiste em uma mistura de rock e balé com ritmos brasileiros, como MPB e o samba. João havia criado o nome da banda sozinho em 1970, até juntar-se com as diferentes formações nos anos \n[…]\nSo álbum de estréia, Secos e Molhados I (1973), foi possível graças às tais performances que despertaram interesse nas gravadoras, e projetou o grupo no cenário nacional, vendendo mais de um milhão de cópias no país. Desentendimentos financeiros, entretanto, fizeram essa formação se desintegrar em 1974, ano do Secos & Molhados II, embora João Ricardo tenha prosseguido com a marca em Secos & Molhados III (1978), Secos e Molhados IV (1980), A Volta do Gato Preto (1988), Teatro?\n[…]\nNo dia 23 de maio de 1973, o grupo entra no estúdio \"Prova\" para gravar – em sessões de seis horas ao dia, por quinze dias, em quatro canais – seu primeiro disco, que vendeu mais de 300 mil cópias em apenas dois meses, atingindo um milhão de cópias em pouco tempo.\n[…]\nJoão Ricardo adquiriu os direitos autorais sob o nome Secos & Molhados, após algumas brigas na justiça, e saiu à busca de novos músicos para que a banda tivesse novas formações.\n[…]\nNo mês de agosto de 1980, junto com os irmãos Lempé – César e Roberto – o Secos e Molhados lançaram o quarto disco, que não teve sucesso comercial. A quinta formação do grupo nasceu no dia 30 de junho de 1987, com o enigmático Totô Braxil (à vezes grafado Tôto), em um concerto no Palace, em São Paulo. Em maio de 1988, saiu o álbum A Volta do Gato Preto, que foi o último da década. Sozinho, em 1999, João Ricardo lançou Teatro? mostrando a marca do criador dos Secos e Molhados."
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
