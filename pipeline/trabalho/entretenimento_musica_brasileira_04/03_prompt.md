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
      "nome": "Bandolim",
      "descricao": "Instrumento de cordas dedilhadas da família do alaúde, com oito cordas em quatro ordens e caixa em forma de pera."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Quantas cordas tem o bandolim, o instrumento que Jacob do Bandolim consagrou no choro?",
    "resposta": "Oito",
    "distratores": [
      "Seis",
      "Dez",
      "Doze"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Bandolim"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Bandolim",
        "situacao": "ok",
        "texto": "Um bandolim é um instrumento musical da família dos cordofones, de cordas duplas e formato semelhante a uma pera, podendo ter as costas abauladas ou rectas. Tradicionalmente é composto por quatro pares de cordas, dispostos em intervalos de quinta: Sol-Sol, Ré-Ré, Lá-La, Mi-Mi (do par de cordas mais grave ao mais agudo, tendo, portanto, a mesma afinação do violino). As origens do bandolim remontam \n[…]\nO relativamente raro bandolão de oito cordas, ou \"tremolo-baixo\", também existe, com cursos duplos como o restante da família do bandolim, e é afinado em G1–D2–A2–E3, duas oitavas abaixo do bandolim, ou em C1–G1–D2–A2, duas oitavas abaixo da bandola.\n[…]\nO estilo napolitano tem um corpo em forma de amêndoa, semelhante a uma bacia, construído com tiras curvas de madeira. Costuma ter uma caixa harmônica curvada, inclinada em dois planos com o design para suportar a tensão das oito cordas de metal dispostas em quatro cursos. Uma escala de madeira rígida fica em cima ou nivelada com a caixa harmônica. Instrumentos muito antigos podem usar cravelhas de madeira, enquanto os instrumentos mais novos tendem a usar cravelhas de metal como regulagem.\n[…]\nNo Brasil esse instrumento forma historicamente o conjunto básico, junto com o cavaquinho (instrumento português), a flauta e o violão, para execução de choros. Jacob do Bandolim é considerado o maior bandolinista brasileiro de todos os tempos.\n[…]\nA estrutura de uma orquestra de bandolins tradicional contemporânea consiste em: primeiro e segundo bandolins, bandolas (bandolas de oitava, afinadas uma oitava abaixo do bandolim, ou bandolas de tenor, afinadas como a viola), bandoloncelos (afinados como o violoncelo) e instrumentos de baixo (baixo de cordas convencional ou, raramente, um bandolão). Também é possível encontrar conjuntos menores, como quartetos compostos por dois bandolins, bandola e bandoloncelo.\n[…]\nChoro\n[…]\nBandolim ou mandolin, qual a diferença?"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Elis Regina",
      "descricao": "Cantora gaúcha, uma das maiores intérpretes da MPB, morta em 1982."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Elis Regina morreu em janeiro de 1982, em São Paulo, no auge da carreira. Com quantos anos?",
    "resposta": "36 anos",
    "distratores": [
      "29 anos",
      "32 anos",
      "41 anos"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Elis_Regina"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Elis_Regina",
        "situacao": "ok",
        "texto": "Elis Regina Carvalho Costa (Porto Alegre, 17 de março de 1945 – São Paulo, 19 de janeiro de 1982) foi uma cantora brasileira. Conhecida por \"pimentinha\" e pela competência vocal, musicalidade e presença de palco, foi aclamada tanto no Brasil quanto internacionalmente, e comparada a cantoras como Ella Fitzgerald, Sarah Vaughan e Billie Holiday. Com os sucessos de Falso Brilhante (1975–1977) e Trans\n[…]\nElis Regina morreu precocemente, aos 36 anos, no auge de sua carreira, causando forte comoção no país e deixando uma vasta obra na música popular brasileira. Embora tenham havido controvérsias e contestações quanto à causa da morte, os exames comprovaram que a causa foi o consumo de cocaína associado a bebida alcoólica, que provocou uma parada cardíaca.\n[…]\nLembrando de uma prima sua nascida na semana anterior e batizada como Sandra Regina, Romeu sugeriu então que ela fosse chamada Elis Regina Carvalho Costa, uma vez que Elis Sandra não soava bem aos seus ouvidos. A outra versão diz que seu nome seria uma homenagem à filha dos padrinhos de casamento de seus pais. O Regina apareceu porque a mãe de Elis acreditava que era preciso colocar um nome bíblico nas crianças e que este seria um nome bíblico.\n[…]\nElis morreu na manhã de 19 de janeiro de 1982, aos 36 anos, em circunstâncias trágicas. Sob grande comoção popular, o velório foi realizado no Teatro Bandeirantes no centro de São Paulo. Depois o cortejo seguiu pelas ruas da cidade em uma viatura do Corpo de Bombeiros levando o corpo da artista até o Cemitério do Morumbi, na zona sul da capital, sendo acompanhado por cerca de quinze mil pessoas.\n[…]\nElis Regina no IMDb\n[…]\n«Elis Regina no programa Jogo da Verdade». Arquivado em 1 de fevereiro de  2019, no Wayback Machine. – TV Cultura, 5 de janeiro de 1982. Elis apresentou-se neste programa duas semanas antes de sua morte."
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Cazuza",
      "descricao": "Agenor de Miranda Araújo Neto, cantor e compositor carioca, ex-vocalista do Barão Vermelho, morto em 1990."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Depois de anos lutando contra a aids, Cazuza morreu em julho de 1990. Quantos anos ele tinha?",
    "resposta": "32 anos",
    "distratores": [
      "27 anos",
      "36 anos",
      "40 anos"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Cazuza"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Cazuza",
        "situacao": "ok",
        "texto": "Agenor de Miranda Araújo Neto OMC (Rio de Janeiro, 4 de abril de 1958 – Rio de Janeiro, 7 de julho de 1990), mais conhecido como Cazuza, foi um cantor, compositor e poeta brasileiro. Além do reconhecimento por sua aclamada carreira musical, tornou-se um símbolo da luta contra a síndrome da imunodeficiência adquirida (AIDS), que o acometeu e causou sua morte precoce em 1990.\n[…]\nEm entrevistas, o cantor assumiu sua bissexualidade. Nos últimos períodos de sua vida, Cazuza fez um segundo tratamento em Boston e retornou ao Rio de Janeiro. Morreu em 1990, aos 32 anos, no seu apartamento em Ipanema.\n[…]\nNo dia 27 de abril de 1989, compareceu de cadeira de rodas na segunda edição do Prêmio Sharp, realizada no Golden Room do Copacabana Palace. Durante a cerimônia, foi lido um manifesto da classe artística em solidariedade ao artista e contra a polêmica e equivocada reportagem de capa da revista Veja, que trazia a manchete \"Cazuza: uma vítima da AIDS agoniza em praça pública\". O texto condenava a postura antiética da revista e reconhecia Cazuza como um \"herói do nosso tempo\".\n[…]\nNa manhã do dia 7 de julho de 1990, Cazuza morreu no apartamento de seus pais, em Ipanema, aos 32 anos, por um choque séptico causado pela AIDS. O enterro, que contou com mais de mil pessoas, entre parentes, amigos e fãs, ocorreu no cemitério de São João Batista, no Rio de Janeiro.\n[…]\nA cantora e jornalista Mona Gadelha escreveu que Cazuza “fez época com discursos de protesto contra as mazelas do Brasil da época, que são quase as mesmas”, compara. “Ele tinha muita personalidade e colocava isso nas letras, na escolha das temáticas. Cazuza acreditava muito no que escrevia, sem se preocupar em agradar. O rock, além de ser uma música, é um comportamento, uma postura crítica em relação ao mundo. Cazuza cumpriu essa função muito bem com o que escreveu”, avança.\n[…]\nSongbook Cazuza Vol. 2 (1990)"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Mamonas Assassinas",
      "descricao": "Banda de rock humorístico de Guarulhos, sucesso nacional em 1995 e 1996."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Com o nome Mamonas Assassinas, quantos discos de estúdio a banda de Pelados em Santos chegou a lançar?",
    "resposta": "Um",
    "distratores": [
      "Dois",
      "Três",
      "Quatro"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Mamonas_Assassinas",
      "https://pt.wikipedia.org/wiki/Mamonas_Assassinas_(%C3%A1lbum)"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Mamonas_Assassinas",
        "situacao": "ok",
        "texto": "Mamonas Assassinas, comumente abreviado como Mamonas, foi uma banda brasileira de rock cômico formada em Guarulhos, São Paulo.\n[…]\nEm seus pouco mais de oito meses de trajetória, eles gravaram um único álbum de estúdio, Mamonas Assassinas (1995), que vendeu mais de 3 milhões de cópias no Brasil, feito que lhes rendeu um certificado de disco de diamante comprovado pela Associação Brasileira dos Produtores de Discos (ABPD). O disco foi produzido pelo músico Rick Bonadio, que recebeu da banda o apelido de Creuzebek.\n[…]\nO logotipo da banda é uma inversão da logomarca da Volkswagen, colocada de cabeça para baixo (com a adição de uma barra horizontal para formar o A), formando assim um M e um A de \"Mamonas Assassinas\". Dois veículos da empresa alemã são citados nas canções: em \"Pelados em Santos\", a Volkswagen Brasília, e em \"Lá vem o Alemão\", a Volkswagen Kombi. Também usavam como identidade visual um logotipo que consistia numa mamona com sorriso.\n[…]\nMamonas Assassinas - O Show Deve Continuar... (2004)\n[…]\nOs também paulistas Titãs dedicaram seu álbum Acústico MTV, de 1997, aos Mamonas Assassinas. Em 1999, os Titãs regravariam o sucesso \"Pelados em Santos\", no álbum de covers As Dez Mais.\n[…]\nA Turma da Mônica fez a história \"Mamonamania\" pouco antes do acidente. Em outra história, Mônica conhece o grupo Azeitonas Assassinas, que toca uma versão de \"Pelados em Santos\": \"Mina… seu jumento é da hora… mas como ele demooora…\"\n[…]\nEm 2014, no filme Capitão América 2: O Soldado Invernal, o nome da banda Mamonas Assassinas aparece escrito num bloco de notas de Steve Rogers na versão exibida nos cinemas brasileiros."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mamonas_Assassinas_(%C3%A1lbum)",
        "situacao": "ok",
        "texto": "Mamonas Assassinas é o álbum de estreia da banda brasileira rock cômico Mamonas Assassinas. O álbum foi lançado em 23 de junho de 1995 por meio da gravadora EMI. Foi o único álbum gravado pelo grupo, uma vez que, nove meses após seu lançamento, todos os integrantes do grupo morreriam num acidente aéreo quando voltavam de uma apresentação.\n[…]\n\"Pelados em Santos\" — Segundo Dinho, esta foi a primeira música composta por ele, ainda em 1991. Ela fora regravada em espanhol com o nome \"Desnudos en Cancún\". A versão em português foi regravada pelos também paulistas Titãs no álbum As Dez Mais, de 1999.\n[…]\n\"Jumento Celestino\" — Foi, juntamente com \"Pelados em Santos\" e \"Robocop Gay\", uma das três canções que o grupo já havia composto e gravado, de forma independente, em uma fita demo que eles enviaram para diversas gravadoras. No início da canção, há uma referência a música \"Rock do Jegue (de Quem é Esse Jegue)\", de Genival Lacerda.\n[…]\n\"Sábado de Sol\" — Esta é uma das duas únicas canções que não são de autoria dos Mamonas, sendo composta pelos 3 membros da banda Baba Cósmica (Pedro Knoedt, Rafael Ramos - filho do produtor João Augusto Soares, diretor artístico da gravadora EMI na época - e Felipe Knoblitch).\n[…]\nMixado no Estúdio The Enterprise, em Los Angeles, Estados Unidos, por Jerry Napier\n[…]\nMamonas Assassinas – concepção da capa\n[…]\nLista de recordistas de vendas de discos no Brasil\n[…]\nRevista Personalidades (18 de março de 2016). Mamonas Assassinas: Revista Personalidades Especial. [S.l.]: On Line Editora. 36 páginas. Cópia arquivada em 12 de dezembro de 2024\n[…]\nCréditos do álbum Mamonas Assassinas por Mamonas Assassinas [CD, LP, K7]. 23 de junho de 1995.\n[…]\nBueno, Eduardo (1996). Mamonas Assassinas: Blá, Blá, Blá - A Biografia Autorizada. Brasil: L&PM Editores. ISBN 9788525405524"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Rock in Rio",
      "descricao": "Festival de música criado por Roberto Medina no Rio de Janeiro."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "A primeira edição do Rock in Rio, em janeiro de 1985, ocupou a Cidade do Rock por quantos dias?",
    "resposta": "Dez",
    "distratores": [
      "Três",
      "Sete",
      "Quinze"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Rock_in_Rio",
      "https://en.wikipedia.org/wiki/Rock_in_Rio"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Rock_in_Rio",
        "situacao": "ok",
        "texto": "O Rock in Rio é um festival de música idealizado pelo empresário brasileiro Roberto Medina pela primeira vez em 1985. É reconhecido como um dos maiores festivais musicais do planeta. Foi originalmente organizado no Rio de Janeiro, de onde vem o nome. Tornou-se um evento de repercussão em nível mundial e teve em 2004 sua primeira edição fora do Brasil, em Lisboa, Portugal.\n[…]\nA primeira edição do Rock in Rio foi realizada no Rio de Janeiro, entre 11 e 20 de janeiro de 1985 em uma área especialmente construída para receber o evento.\n[…]\nApós novo hiato, em 2001, foi realizado, entre 12 e 21 de janeiro de 2001, o Rock in Rio III. Nesta ocasião, os organizadores decidiram construir uma nova \"Cidade do Rock\", no mesmo local onde ocorreu a primeira edição, com a inédita capacidade de 250 mil espectadores por dia e \"tendas\" alternativas onde realizaram-se concertos paralelos aos do palco principal.\n[…]\nEm maio de 2015, ocorreu a primeira edição do Rock in Rio nos Estados Unidos. Foram feitos quatro dias de festival e cerca de 170 mil pessoas compareceram ao evento, que ocorreu na cidade de Las Vegas. Em setembro do mesmo ano, aconteceu a sexta edição do Rock in Rio no Brasil, comemorando o aniversário de 30 anos da primeira edição do festival.\n[…]\nEm setembro de 2021 foi anunciada as datas do Rock in Rio IX, que ocorreu entre 2 e 11 de setembro de 2022 no Rio de Janeiro.\n[…]\nNo final do mesmo ano, o site oficial do Rock in Rio anunciou a realização de sua primeira edição em São Paulo, e que esse festival se chamaria The Town. O festival acontecerá em 2023 no Autódromo de Interlagos, onde será construída a nova \"Cidade do Rock\".\n[…]\nA edição de 2024 do Rock in Rio Lisboa está prevista para os dias 15, 16, 22 e 23 de junho, no Parque Tejo, com a participação de Ed Sheeran, Scorpions, Evanescence, Extreme, Xutos & Pontapés, Europe, Ivete Sangalo, Jonas Brothers, e outros."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Rock_in_Rio",
        "situacao": "ok",
        "texto": "Rock in Rio is a biennial Brazilian multi-day music festival held at City of Rock in Rio de Janeiro. It later branched into other locations such as Lisbon, Madrid and Las Vegas.\n[…]\nTen incarnations of the festival have been held in Rio de Janeiro, in 1985, 1991, 2001, 2011, 2013, 2015, 2017, 2019, 2022 and 2024; nine in Lisbon, in 2004, 2006, 2008, 2010, 2012, 2014, 2016, 2018 and 2022; three in Madrid in 2008, 2010 and 2012; and one in Las Vegas, in 2015. Brazilian entrepreneur and advertiser Roberto Medina was responsible for the inception and organization of the festival, as well as moving the 2004 edition to Lisbon, while controversially keeping the brand \"Rock in Rio\".\n[…]\nIn 2011, Rock in Rio returned to its original location, Rio de Janeiro, with a new line-up of singers and groups.\n[…]\nThe second edition of Rock in Rio Lisboa was held in 2006, on 26/27 May and 2/3/4 June.\n[…]\nRock Street:\n[…]\nRock Street:\n[…]\nRock Street:\n[…]\nRock Street:\n[…]\nRock Street:\n[…]\n\"Rock in Rio USA\" was the first North American edition of the festival, being held in Las Vegas on 8, 9, 15 and 16 May 2015. The festival took place on two weekends, oriented towards rock and pop music. Rock Weekend took place on 8 and 9 May, and Pop Weekend took place on 15 and 16 May. It took place in the City of Rock (Las Vegas), located north of the Las Vegas Strip.\n[…]\nThe TV Globo Networks broadcast selected Rock in Rio concerts in Brazil, with cable affiliate Multishow broadcasting live concerts. In Nigeria, TNT and A&E broadcasts the festival live.\n[…]\nIn Portugal, Rock in Rio Lisboa is broadcast by SIC Radical.\n[…]\nList of historic rock festivals\n[…]\nMedia related to Rock in Rio at Wikimedia Commons"
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
    "pergunta": "O poeta que pediu que o amor fosse infinito enquanto dure, Vinicius de Moraes, casou-se quantas vezes?",
    "resposta": "Nove",
    "distratores": [
      "Três",
      "Cinco",
      "Doze"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Vinicius_de_Moraes"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Vinicius_de_Moraes",
        "situacao": "ok",
        "texto": "Marcus Vinícius da Cruz de Mello Moraes (Rio de Janeiro, 19 de outubro de 1913 – Rio de Janeiro, 9 de julho de 1980), mais conhecido como Vinicius de Moraes, foi um poeta, dramaturgo, jornalista, diplomata, cantor e compositor brasileiro.\n[…]\nO Poetinha casou-se por nove vezes ao longo de sua vida e suas esposas foram, respectivamente: Beatriz Azevedo de Melo (mais conhecida como Tati de Moraes), Regina Pederneiras, Lila Bôscoli, Maria Lúcia Proença, Nelita de Abreu, Cristina Gurjão, Gessy Gesse, Marta Rodrigues Santamaria (a Martita) e Gilda de Queirós Mattoso.\n[…]\nNo fim da década de 1920, Vinicius de Moraes produziu letras para dez canções gravadas - nove delas parcerias com os Irmãos Tapajós. Seu primeiro registro como letrista veio em 1928, quando compôs (com Haroldo) \"Loira ou Morena\", gravado em 1932 pela dupla de irmãos. Vinicius teve publicado seu primeiro livro de poemas, O Caminho para a Distância, em 1933, e lançou outros livros de poemas nessa década.\n[…]\nAinda naquele ano, enquanto \"Canção da Eterna Despedida\" (composta com Tom Jobim) \"Em Noite de Luar\" (composta com Ary Barroso) foram gravadas por Orlando Silva e Ângela Maria, respectivamente, Vinicius de Moraes publicou três livros: Antologia Poética, Procura-se Uma Rosa e Para Viver Um Grande Amor.\n[…]\nEm 1969, Vinicius de Moraes publicou o livro Obra Poética e se apresentou ao lado de Maria Creuza e Dorival Caymmi em Punta del Este. O poetinha também fez recital na Livraria Quadrante, em Lisboa, apresentando, entre outros, os poemas \"A Uma Mulher\", \"O Falso Mendigo\", \"Sob o Trópico de Câncer\" (no qual trabalhou durante nove anos) e \"Soneto da Intimidade\". O evento foi gravado ao vivo e lançado em LP pelo selo Festa.\n[…]\n«Portal oficial do poeta»"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Heitor Villa-Lobos",
      "descricao": "Compositor brasileiro (1887–1959), autor das Bachianas Brasileiras e dos Choros."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Heitor Villa-Lobos misturou Bach e música brasileira numa série de peças chamadas Bachianas Brasileiras. Quantas são?",
    "resposta": "Nove",
    "distratores": [
      "Três",
      "Cinco",
      "Doze"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Bachianas_Brasileiras",
      "https://en.wikipedia.org/wiki/Bachianas_Brasileiras"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Bachianas_Brasileiras",
        "situacao": "ok",
        "texto": "As Bachianas brasileiras são uma série de nove composições por Heitor Villa-Lobos, escritas entre 1930 e 1945.\n[…]\nNessas suítes, escritas para formações diversas, Villa-Lobos fundiu material folclórico brasileiro (em especial a música caipira) às formas pré-clássicas de Bach, cuja influência é sentida até mesmo no título da série - o sufixo \"-ana\" é frequentemente usado nos títulos de obras musicais como uma forma de prestar homenagem a um compositor anterior -  e nos movimentos, que receberam dois títulos: um inspirado na tradição barroca e outro brasileiro.\n[…]\nNas Bachianas, Villa-Lobos emprega o contraponto e a complexidade harmônica típicos da música de Bach e os combina com a qualidade lírica do canto operático e da canção brasileira.\n[…]\nApesar de referenciar titularmente e estruturalmente a musicalidade barroca de Bach, as Bachianas são, antes de tudo, obras modernistas. É importante ressaltar a diferença entre o moderno e o modernista; o primeiro se torna pela virtude de existir em um determinado período de termo, o modernista, no entanto, propõe-se a um projeto específico de sociedade e cultura que no Brasil foi pautado em um retorno às formas populares de expressão cultural.\n[…]\nEstreou em 1947, tendo como pianista José Vieira Brandão e como regente o próprio Villa-Lobos. Contém quatro movimentos:\n[…]\nDedicada a Arminda Villa-Lobos. A letra deste movimento é de Ruth Valadares Corrêa, e a composição possui semelhanças com obras como a \"Ária\" de Bach e o \"Vocalise\" de Rachmaninov.\n[…]\nFabio Gomes (2004). «Bachianas brasileiras: Villa-Lobos e a Influência de Bach». Consultado em 16 de dezembro de 2007"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Bachianas_Brasileiras",
        "situacao": "ok",
        "texto": "The Bachianas Brasileiras (Portuguese pronunciation: [bakiˈɐ̃nɐz bɾaziˈlejɾɐs]) (an approximate English translation might be Bach-inspired Brazilian pieces) are a series of nine suites by the Brazilian composer Heitor Villa-Lobos, written for various combinations of instruments and voices between 1930 and 1945.\n[…]\nCBS radio premiered Bachianas Brasileras No. 3 on February 19, 1947, New York with José Vieira Brandão (piano), CBS Orchestra, Villa-Lobos (conductor)\n[…]\nScored for soprano and orchestra of eight cellos and dedicated to Arminda Villa-Lobos, Bachianas Brasileiras No. 5 (1938/45) consists of two movements:\n[…]\nScored for symphony orchestra and dedicated to Mindinha, Bachianas Brasileiras No. 8 (1944) consists of four movements:\n[…]\nScored for chorus or string orchestra, Bachianas Brasileiras No. 9 (1945) consists of two movements:\n[…]\nVilla-Lobos made a number of recordings of the Bachianas Brasileiras, including a complete recording of all nine compositions made in Paris for EMI in the 1950s, with the French National Orchestra and Victoria de los Ángeles as the soprano soloist in No. 5. These landmark recordings were issued in several configurations on LP and were later reissued on CD.\n[…]\nRound, Michael. 1989. \"Bachianas Brasileiras in Performance\". Tempo, new series, no. 169 (June, \"50th Anniversary 1939–1989\"): 34–41.\n[…]\nArcanjo, Loque. 2008. O ritmo da mistura e o compasso da história: o modernismo musical nas Bachianas Brasileiras de Heitor Villa-Lobos. Rio de Janeiro: E-papers. ISBN 978-85-7650-164-0.\n[…]\nNóbrega, Adhemar. 1976. As Bachianas brasileiras de Villa-Lobos, second edition. Rio de Janeiro: Museu Villa-Lobos.\n[…]\nPalma, Enos da Costa, and Edgard de Brito Chaves Júnior. 1971. As Bachianas brasileiras de Villa-Lobos. Rio de Janeiro: Companhia Editôra Americana."
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Raul Seixas",
      "descricao": "Cantor e compositor baiano, pioneiro do rock brasileiro, chamado de Maluco Beleza."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Numa canção de 1976, que dá nome ao disco, Raul Seixas diz ter nascido há quantos anos atrás?",
    "resposta": "Dez mil",
    "distratores": [
      "Mil",
      "Cem mil",
      "Um milhão"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/H%C3%A1_10_Mil_Anos_Atr%C3%A1s",
      "https://pt.wikipedia.org/wiki/Raul_Seixas"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/H%C3%A1_10_Mil_Anos_Atr%C3%A1s",
        "situacao": "ok",
        "texto": "Há 10 Mil Anos Atrás é o quinto álbum de estúdio solo do cantor e compositor brasileiro Raul Seixas, lançado em dezembro de 1976 pela gravadora Philips Records e gravado entre maio e novembro do mesmo ano nos estúdios Phonogram na Barra da Tijuca, no Rio de Janeiro. Este disco representou uma volta ao misticismo que marcou o auge de sua carreira, após a relativa baixa de vendas de Novo Aeon, no an\n[…]\nO disco fecha com \"Eu Nasci Há 10 Mil Anos Atrás\", um rock estilizado com pitadas de música country e o título, tema e letra da música são inspirados em uma canção gravada por Elvis Presley - ídolo de Raul - em seu álbum Elvis Now, de 1972. A canção chama-se \"I Was Born About Ten Thousand Years Ago\" e foi adaptada e arranjada por Elvis, já que se trata de uma canção tradicional, de domínio público.\n[…]\nA recepção da crítica especializada esteve entre o frio e o favorável com diversos dos críticos musicais tarimbados não tendo se dedicado a escutar e realizar uma apreciação da obra, resultado do esfriamento da crítica relativamente ao cantor baiano e sua obra após o lançamento de Novo Aeon. O disco aposta na imagem do místico, lugar comum nesta fase inicial da carreira de Raul Seixas.\n[…]\nO álbum foi relançado em LP em 1983, pelos selos Philips Records (série azul) e Fontana Records (série verde). Seu primeiro lançamento em CD foi feito no ano de 1994, pelo selo Philips Records. O álbum seria relançado dentro de uma caixa contendo os seis discos lançados por Raul na gravadora (Os 24 Maiores Sucessos da Era do Rock, Krig-ha, Bandolo!, Gita, Novo Aeon, Há 10 Mil Anos Atrás e Raul Rock Seixas), intitulada Maluco Beleza.\n[…]\nBAHIANA, Ana Maria. É Raul Seixas, a metamorfose ambulante. O Globo, 16 de dezembro de 1976.\n[…]\nCAMBARÁ, Isa. Raul Seixas: cada cabeça é um mundo. Folha de S.Paulo, 27 de dezembro de 1976.\n[…]\nMOTTA, Nelson. O novo Raul de sempre: melhor do que nunca. O Globo, 9 de novembro de 1976."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Raul_Seixas",
        "situacao": "ok",
        "texto": "Raul Santos Seixas OMC (Salvador, 28 de junho de 1945 – São Paulo, 21 de agosto de 1989) foi um cantor, compositor, produtor e multi-instrumentista brasileiro, frequentemente considerado um dos pioneiros do rock brasileiro. Também foi produtor musical da CBS, durante sua estadia na cidade do Rio de Janeiro e, por vezes, é chamado de Pai do Rock Brasileiro e Maluco Beleza. Sua obra musical é compos\n[…]\nAinda em 1975, Raul lê um manifesto e canta a Sociedade Alternativa no documentário Ritmo Alucinante, que foi um festival de rock realizado no Rio de Janeiro, gravado no álbum Hollywood Rock, lançado no mesmo ano. Em 1976, Raul supera a má-vendagem do disco Novo Aeon com o álbum Há Dez Mil Anos Atrás. Neste mesmo ano, nasce sua segunda filha, Scarlet. Chega então ao fim, o seu contrato com a gravadora Philips e sua parceria com Paulo Coelho, embora continuassem amigos (ou inimigos íntimos).\n[…]\nLogo depois, com a ajuda de Kika, é convidado por Augusto César Vanucci a gravar o especial infantil Plunct, Plact, Zuuum da Rede Globo, onde canta a música \"Carimbador Maluco\". O álbum Raul Seixas (1983), que continha a canção, dá à Raul mais um disco de ouro.\n[…]\nAs 50 apresentações pelo Brasil resultaram naquele que seria o último disco lançado em vida por Raul Seixas. O disco, intitulado A Panela do Diabo, foi lançado pela Warner Music Brasil no dia 19 de agosto de 1989.\n[…]\nDe acordo com Kiko Zambianchi, quase nenhum artista compareceu ao enterro de Raul: \"Contato com Raul Seixas? Não tive, não conheci pessoalmente, mas fui ao enterro dele. Foi estranho porque quase nenhum outro artista compareceu, só eu e mais dois, talvez o Marcelo Nova, que havia gravado um disco com o Raul. Os fãs acabaram me associando a ele por causa desse lance de eu ter ido ao enterro.\n[…]\nRaul Rock Seixas (1977)\n[…]\nRaul Seixas (1983)\n[…]\nRaul Seixas no Instagram\n[…]\nCanal de Raul Seixas no YouTube\n[…]\nRaul Seixas no TikTok"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Faroeste Caboclo",
      "descricao": "Canção da Legião Urbana lançada em 1987, que narra a saga de João de Santo Cristo."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Em mais de nove minutos contando a saga de João de Santo Cristo, quantas vezes aparece um refrão em Faroeste Caboclo?",
    "resposta": "Nenhuma",
    "distratores": [
      "Duas",
      "Quatro",
      "Seis"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Faroeste_Caboclo"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Faroeste_Caboclo",
        "situacao": "ok",
        "texto": "\"Faroeste Caboclo\" é uma canção composta por Renato Russo em 1979 e lançada por seu grupo, Legião Urbana, no álbum Que País É Este, de 1987. Ganhou bastante atenção quando do lançamento do álbum e, por isso, foi lançada como o terceiro single promocional em 1988. Por motivo de censura, houve a necessidade de editar a canção para a aprovação pela censura federal.\n[…]\nNarra a história de João de Santo Cristo, que, ao ver toda sua família morta, se rebela e vai para Salvador. Lá chegando, encontra um boiadeiro que vai para Brasília mas que pede para João ir no seu lugar. Ele vai e começa uma nova vida lá. Porém, diante de dificuldades econômicas, vira traficante, seguindo os passos de um peruano chamado Pablo. Posteriormente, ele tenta se redimir ao apaixonar-se por uma mulher chamada Maria Lúcia.\n[…]\nA canção tem 168 versos. Segundo o jornalista e historiador Marcelo Fróes, no manuscrito original com a letra de \"Faroeste Caboclo\" havia uma anotação de Renato dizendo que imaginava a música como um baião cantado por Luiz Gonzaga.\n[…]\nApesar disto, a música foi um grande sucesso, tendo sido a 24ª mais tocada de 1988.\n[…]\nAo final de 1987, o jornalista Arthur Dapieve afirmou que a canção era uma \"incontestável obra-prima, narrando a paixão e a morte do tal João de Santo Cristo, traficante que, oscilando entre o banditismo e a santidade, encarna o próprio Brasil\". Ele apreciou o fato da faixa começar country, passar pelo reggae e terminar em rock.\n[…]\nEm 30 de maio de 2013, foi lançado Faroeste Caboclo, adaptação da canção, dirigida por René Sampaio e com roteiro de Victor Atherino e Marcos Bernstein a partir da letra original, e com distribuição da Europa Filmes. No elenco, atuaram Fabrício Boliveira (João de Santo-Cristo), Ísis Valverde (Maria Lúcia), Felipe Abib (Jeremias) e César Troncoso (Pablo)."
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Clube da Esquina (álbum)",
      "descricao": "Disco duplo de 1972 de Milton Nascimento e Lô Borges, marco do movimento mineiro de mesmo nome."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "A famosa capa do disco Clube da Esquina, de 1972, mostra quantos meninos sentados à beira de uma estrada de terra?",
    "resposta": "Dois",
    "distratores": [
      "Um",
      "Três",
      "Quatro"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Clube_da_Esquina_(album)",
      "https://pt.wikipedia.org/wiki/Clube_da_Esquina_(%C3%A1lbum)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Clube_da_Esquina_(album)",
        "situacao": "ok",
        "texto": "Clube da Esquina (Brazilian Portuguese pronunciation: [ˈklubi dɐjsˈkinɐ], in English \"Corner Club\") is a collaborative album by Brazilian musicians Milton Nascimento and Lô Borges, released as a double album in March 1972 by EMI-Odeon Records. It was Nascimento's fifth studio album and Lô's first, after which the latter pursued a solo career.\n[…]\nClube da Esquina was released in March 1972 as a double album on two LP records through EMI-Odeon. In the United States, it was released through Blue Note and Capitol, in cassette and CD formats. The double LP was quickly reprinted twice in 1972 and later reissued by EMI-Odeon in 1976, 1985, 1988 and 1989. To promote the album, the album's debut show took place in the Rio de Janeiro-based theater São Sebastião Crusade, a place that was considered \"weird\" by Márcio Borges and Ronaldo Bastos.\n[…]\nCommercially, the album sold well and was available in American record shops with international sections. The album was also successful among students and drop-outs in general, and the members of the group achieved commercial success as recording artists. Clube da Esquina debuted at number nine on 15 April 1972, peaking at number eight on 22 April 1972 and spent a total of five weeks at the IBOPE charts of Rio de Janeiro, reported by the Brazilian magazine Jornal do Brasil.\n[…]\nThe album also connects to its predecessor through song continuations or the recurrence of similar musical elements. Nascimento mentioned in an interview in 2013 that his 1994 album Angelus could be considered a \"Clube da Esquina 3\".\n[…]\nClube da Esquina 2\n[…]\nMello, Paulo Thiago de (2020). Milton Nascimento e Lô Borges: Clube da Esquina [Milton Nascimento and Lô Borges: Clube da Esquina]. O Livro do Disco (in Brazilian Portuguese). Editora Cobogó (published 21 April 2020). ISBN 978-65-5691-002-4.\n[…]\nClube da Esquina at Discogs."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Clube_da_Esquina_(%C3%A1lbum)",
        "situacao": "ok",
        "texto": "Clube da Esquina é um álbum colaborativo dos músicos brasileiros Milton Nascimento e Lô Borges, lançado como um álbum duplo em março de 1972 pela EMI-Odeon Records. Foi o quinto álbum de estúdio de Milton e o primeiro de Lô, após o qual este último seguiu carreira solo. A dupla gravou o álbum em novembro de 1971 na Praia de Piratininga, em Niterói, e nos Estúdios Odeon, no Rio de Janeiro, onde col\n[…]\nA capa, fotografada por Carlos da Silva Assunção Filho, mais conhecido como Cafi, mostra dois meninos, Cacau e Tonho, em uma estrada de terra perto de Nova Friburgo, na serra do Rio de Janeiro, próximo de onde moravam os pais adotivos de Milton.\n[…]\nClube da Esquina foi lançado em março de 1972 como um álbum duplo em dois discos de vinil pela EMI-Odeon. Nos Estados Unidos, foi lançado pela Blue Note e Capitol, em formatos de cassete e CD. O LP duplo foi rapidamente reimpresso duas vezes em 1972 e posteriormente relançado pela EMI-Odeon em 1976, 1985, 1988 e 1989. Para promover o álbum, o show de estreia aconteceu no teatro Cruzada São Sebastião, no Rio de Janeiro, um lugar considerado \"estranho\" por Márcio Borges e Ronaldo Bastos.\n[…]\nA capa do álbum apresenta dois meninos, identificados pseudônimos como Cacau e Tonho, em uma estrada de terra perto de Nova Friburgo, próximo de onde moravam os pais adotivos de Milton. Tirada de dentro de um carro, por Carlos da Silva Assunção Filho, o fotógrafo mais conhecido como Cafi, de Recife, Pernambuco, a capa do álbum representava \"a ruralidade do Clube da Esquina\".\n[…]\nEm 1978, a EMI-Odeon lançou Clube da Esquina 2, servindo como continuação do álbum e do coletivo musical. O álbum manteve a abordagem coletiva, a variedade estilística e os aspectos experimentais de seu antecessor, abrangendo dois LPs com 23 faixas. Incluiu uma gama mais ampla de artistas nacionais que colaboraram no álbum, como Elis Regina, Chico Buarque e Francis Hime."
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Frevo",
      "descricao": "Ritmo e dança do carnaval de Pernambuco, de andamento acelerado e passos acrobáticos com sombrinha."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome do frevo, ritmo do carnaval do Recife e de Olinda, vem de uma pronúncia popular de qual verbo?",
    "resposta": "Ferver",
    "distratores": [
      "Frear",
      "Folgar",
      "Revirar"
    ],
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
    "indice": 12,
    "ancora": {
      "nome": "Forró",
      "descricao": "Gênero musical e dança do Nordeste brasileiro, e a palavra que os nomeia"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Segundo a explicação mais aceita, a palavra forró é uma redução de qual outra palavra?",
    "resposta": "Forrobodó",
    "distratores": [
      "For all",
      "Forrageira",
      "Fuzuê"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Forr%C3%B3"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Forr%C3%B3",
        "situacao": "ok",
        "texto": "Forró é uma festa e um gênero musical originário da Região Nordeste do Brasil, bastante popular e comum, especialmente, nas festas juninas. O nome da festa \"forró\" é usado para nomear distintos gêneros musicais como o xote, baião, arrasta-pé e o xaxado, por isso quem não conhece suas histórias, as confundem com um gênero único. As músicas são executadas tradicionalmente por trios instrumentais com\n[…]\nO termo \"forró\", segundo o filólogo pernambucano Evanildo Bechara, é uma redução de forrobodó, que por sua vez é uma variante do antigo vocábulo galego-português forbodó, corruptela do francês faux-bourdon, que teria a conotação de desentoação.\n[…]\nO elo semântico entre forbodó e forrobodó tem origem, segundo Fermín Bouza-Brey, na região noroeste da Península Ibérica (Galiza e norte de Portugal), onde \"a gente dança a golpe de bumbo, com pontos monorrítmicos monótonos desse baile que se chama forbodó\".\n[…]\nApesar da versão bem-humorada, não há nenhuma sustentação para tal etimologia do termo. Em 1912, estreou a peça teatral \"Forrobodó\", escrita por Carlos Bettencourt (1890-1941) e Luís Peixoto (1889-1973), musicada por Chiquinha Gonzaga e em 1937, cinco anos antes da instalação da referida base militar em território potiguar, a palavra \"forró\" já se encontrava registrada na história musical na gravação fonográfica de “Forró na roça”, canção composta por Manuel Queirós e Xerém.\n[…]\nOs bailes populares eram conhecidos em Pernambuco por \"forrobodó\" ou \"forrobodança\" ou ainda \"forrobodão\" já em fins do século XIX.\n[…]\nNa década de 2010 o cantor Wesley Safadão se tornou um dos nomes mais conhecidos do \"forró estilizado\" em nível nacional no Brasil.\n[…]\nO forró eletrônico, marcado por uma dança mais envolvente e com maior apelo sensual entre os pares, recebe forte influência de ritmos como a lambada, a salsa e até a bachata dominicana."
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Gal Costa",
      "descricao": "Cantora brasileira, figura central da Tropicália."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome Gal veio de um apelido de infância da cantora baiana. Qual era o nome de batismo de Gal Costa?",
    "resposta": "Maria da Graça",
    "distratores": [
      "Maria Helena",
      "Gabriela Maria",
      "Maria do Carmo"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Gal_Costa"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Gal_Costa",
        "situacao": "ok",
        "texto": "Gal Maria da Graça Penna Burgos Costa (nascida Maria da Graça Costa Penna Burgos; Salvador, 26 de setembro de 1945 – São Paulo, 9 de novembro de 2022) (/ɡaw ˈkɔs ta/ () foi uma cantora e compositora brasileira.\n[…]\nNo início da carreira e no primeiro compacto, a cantora se apresentava como Maria da Graça. Por sugestão do produtor Guilherme Araújo, no entanto, adotou o nome artístico Gal, derivado de seu apelido e soletrado seguindo a sugestão jocosa GAL: Guilherme Araújo Limitada. Caetano Veloso não gostou da mudança, argumentando que Gal é abreviatura de general, de modo que o nome Gal Costa a fazia parecer homônima do então Presidente da República, o Gal. Costa e Silva.\n[…]\nEm entrevista concedida a Jô Soares, em 2013, a cantora revelou que havia alterado o registro civil para incluir o apelido pelo qual ficou conhecida nacionalmente, passando a se chamar oficialmente Gal Maria da Graça Penna Burgos Costa.\n[…]\nParticipou também do III Festival de Música Popular Brasileira defendendo as canções Bom Dia (Gilberto Gil/Nana Caymmi) e Dadá Maria (Renato Teixeira), esta última em dueto com Sílvio César no festival e com Renato Teixeira na gravação.\n[…]\nEm 1981, em seu especial produzido e exibido na TV Globo no programa Grandes Nomes, ao qual o nome do seu especial foi seu nome de batismo, Maria da Graça Costa Penna Burgos, ao qual no fim do especial usou uma roupa de franjas rosas, que foi comparado a um boneco infantil da época. No entanto, os críticos disseram que o que salvou o especial foi sua apresentação com a renomada cantora Elis Regina — o encontro de duas divas populares, além de uma aula de musicalidade.\n[…]\nMaria da Graça Costa Pena Burgos - Globo\n[…]\nMaria Bethânia\n[…]\nAvenida Gal Costa no OpenStreetMap"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Zezé Di Camargo & Luciano",
      "descricao": "Dupla sertaneja brasileira formada pelos irmãos Zezé e Luciano, nascidos em Pirenópolis, Goiás."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Antes de virar Zezé Di Camargo, o cantor goiano da dupla com Luciano foi registrado com qual nome?",
    "resposta": "Mirosmar",
    "distratores": [
      "Emival",
      "Welson",
      "Valdeci"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Zez%C3%A9_Di_Camargo"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Zez%C3%A9_Di_Camargo",
        "situacao": "ok",
        "texto": "Mirosmar José de Camargo (Pirenópolis, 17 de agosto de 1962), mais conhecido pelo nome artístico Zezé Di Camargo, é um cantor e compositor brasileiro. Integra juntamente com seu irmão, Luciano Camargo, a dupla sertaneja Zezé Di Camargo & Luciano, que vendeu mais de 30 milhões de discos. Zezé é considerado um ícone sertanejo, responsável pela ascensão do gênero nas décadas de 1990 e 2000 com compos\n[…]\nMirosmar nasceu no povoado de Capela do Rio do Peixe, Pirenópolis, filho mais velho de Helena Siqueira de Camargo (2 de agosto de 1945), e do lavrador Francisco José de Camargo (Pirenópolis, 16 de maio de 1937 – Goiânia, 23 de novembro de 2020). Zezé tem mais tempo de carreira musical do que seu irmão Welson que viria adotar o nome artístico de Luciano. Começou tocando gaita de boca e, aos 11 anos, ganhou um acordeom de seu pai.\n[…]\nAlguns meses depois, o trio seria desfeito, mas Ary e Zé Neto continuariam juntos na dupla Zazá & Zezé, e gravaram três discos. Em uma entrevista dada em 2017, Zezé contou que passou a usar o sobrenome Di Camargo porque Zazá teria registrado o nome Zazá & Zezé sem o seu consentimento.\n[…]\nFoi só em 1990 que Zezé resolveu formar dupla com seu irmão mais novo, Welson David de Camargo, que viria adotar o nome artístico de Luciano. A canção \"É o Amor\", gravada no final de 1990 e lançada em abril de 1991, no primeiro álbum da dupla, alavancou o sucesso dos dois que segue até hoje. Atualmente, investem em vários negócios fora da música, incluindo empresas em Goiás.\n[…]\nTem como irmãos Wellington Camargo, Luciano Camargo, Luciele Di Camargo, Emanuel Camargo, Marlene Camargo, Werley Camargo (Camarguinho) e Walter Camargo. Zezé também é tio da cantora e compositora Day Camargo.\n[…]\n1986: Zezé Di Camargo - 3M\n[…]\n1988: Zezé Di Camargo - 3M\n[…]\nZazá (cantor) - cantor com quem Zezé Di Camargo formou a dupla Zazá & Zezé\n[…]\nLuciano Camargo - atual parceiro de dupla\n[…]\nZezé Di Camargo & Luciano"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Chitãozinho & Xororó",
      "descricao": "Dupla sertaneja brasileira formada pelos irmãos José Lima Sobrinho e Durval de Lima, ativa desde a década de 1970."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "A dupla Chitãozinho e Xororó tirou o nome de uma moda de viola que cita dois tipos de quê?",
    "resposta": "Pássaros",
    "distratores": [
      "Peixes",
      "Cavalos",
      "Árvores"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Chit%C3%A3ozinho_%26_Xoror%C3%B3"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Chit%C3%A3ozinho_%26_Xoror%C3%B3",
        "situacao": "ok",
        "texto": "Chitãozinho & Xororó é uma dupla brasileira de música sertaneja formada pelos irmãos José Lima Sobrinho, utilizando o nome artístico de Chitãozinho, e Durval de Lima, utilizando o nome artístico de Xororó. Chitãozinho & Xororó são recordistas em vendas de discos no Brasil: eles venderam mais de 40 milhões de álbuns e ganharam seis prêmios Grammy Latino.\n[…]\nEm 1986, começaram a apresentar aos domingos o programa de TV \"Chitãozinho e Xororó Especial\" no SBT, no qual cantavam e recebiam convidados.\n[…]\nA dupla apresentou, em 2004, na TV Record, o programa Raízes do Campo, que era um show gravado numa casa de espetáculo, com convidados, e a famosa Roda de Viola gravada na chácara de Chitãozinho no interior de São Paulo. O programa ficou no ar até maio de 2005.\n[…]\nEm 2010, gravaram o CD e DVD Chitãozinho & Xororó 40 Anos Nova Geração, que fez parte da comemoração dos 40 anos de carreira da dupla. Esse disco teve a participação de várias duplas da nova geração do sertanejo, chamado universitário, como Jorge & Mateus, João Bosco & Vinícius, Guilherme & Santiago, Hugo Pena e Gabriel, Eduardo Costa, João Neto & Frederico, Luan Santana, Zé Henrique & Gabriel, Maria Cecília & Rodolfo, entre outros.\n[…]\nChitãozinho & Xororó foram creditados por introduzir a música sertaneja nos veículos de massa do Brasil numa época em que o gênero tinha pouco espaço nas rádios e televisão. \"Antes deles, [a música sertaneja] era encerrada na cultura do campo.\" Eles são recordistas em vendas de discos no Brasil, com mais de 40 milhões de CDs e DVDs vendidos. A dupla também se tornou conhecida por modernizar a música sertaneja, introduzindo instrumentos como a guitarra elétrica e o banjo em seus álbuns.\n[…]\n\"Não dá para escrever um livro sobre a música popular brasileira sem que seja dedicado um grande capítulo a Chitãozinho & Xororó.\"– Zezé Di Camargo"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Maria Bethânia",
      "descricao": "Cantora brasileira baiana, irmã de Caetano Veloso."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Ainda menino, Caetano Veloso escolheu o nome da irmã Maria Bethânia inspirado numa canção de qual compositor pernambucano?",
    "resposta": "Capiba",
    "distratores": [
      "Nelson Ferreira",
      "Luiz Gonzaga",
      "Ary Barroso"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Maria_Beth%C3%A2nia"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Maria_Beth%C3%A2nia",
        "situacao": "ok",
        "texto": "Maria Bethânia Vianna Telles Velloso (Santo Amaro, 18 de junho de 1946) é uma cantora e compositora brasileira. Natural de Santo Amaro, Bahia, iniciou sua carreira no Rio de Janeiro em 1964 com o espetáculo \"Opinião\", sendo considerada \"A Rainha da Música Brasileira\". Bethânia é irmã do cantor e compositor Caetano Veloso e da escritora e compositora Mabel Velloso, além de ser tia dos cantores Belô\n[…]\nSeu nome foi escolhido pelo irmão Caetano Veloso, inspirado em uma canção, a valsa \"Maria Betânia\", do compositor Capiba, então um sucesso na voz de Nélson Gonçalves. Bethânia é membro de uma família de artistas, irmã da escritora Mabel Velloso, do cantor, compositor e poeta Caetano Veloso, e tia dos cantores Belô Velloso e Jota Velloso.\n[…]\nDo espetáculo surgiu o primeiro sucesso de Bethânia, a canção de protesto \"Carcará\", composta originalmente para Nara Leão.\n[…]\nO disco contou com a participação especial da mãe, Canô Veloso, Gilberto Gil (violão e voz) e Nair de Cândia, nas respectivas faixas \"Ladainha de Nossa Senhora\", \"Mãe de Deus das Candeias\" e uma versão em latim da Ave Maria. Bethânia também atua em direções, com a direção de vários artistas, entre eles o irmão Caetano Veloso e Alcione.\n[…]\nAo mesmo tempo, produziu a homenagem Namorando a Rosa, a violonista Rosinha de Valença, que tocou alguns anos em sua banda, falecida em 2004; dirigiu o espetáculo Comigo Me Desavim (1967); e nove anos depois gravou os álbuns Cheiro de Mato, Maria Bethânia e Caetano Veloso ao Vivo, Alteza, Olho d'Água e Álibi, onde tocou violão em todas as faixas; o álbum contou com a participação especial de diversos nomes consagrados da MPB, como o irmão Caetano Veloso, Alcione, Chico Buarque, Bebel Gilberto, Ivone Lara, Délcio Carvalho, Yamandú Costa, Martinho da Vila, Turíbio Santos, Miúcha, Joanna, Hermeto Paschoal.\n[…]\nMaria Bethânia no Instagram\n[…]\nMaria Bethânia no IMDb\n[…]\nMaria Bethânia no Spotify"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Os Mutantes",
      "descricao": "Banda de rock paulistana ligada à Tropicália, formada em 1966."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Que cantor e apresentador de TV sugeriu o nome Os Mutantes, tirado de um livro de ficção científica?",
    "resposta": "Ronnie Von",
    "distratores": [
      "Erasmo Carlos",
      "Wilson Simonal",
      "Chacrinha"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Os_Mutantes",
      "https://en.wikipedia.org/wiki/Os_Mutantes"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Os_Mutantes",
        "situacao": "ok",
        "texto": "Os Mutantes são uma banda brasileira de rock psicodélico, formada em São Paulo, no ano de 1966. A banda é considerada um dos principais grupos do rock brasileiro, tendo participado ativamente do movimento tropicalista. Foi fundada por Arnaldo Baptista, Rita Lee e Sérgio Dias. Posteriormente, Liminha e Dinho Leme foram incluídos à banda.\n[…]\nOs Mutantes iniciaram suas atividades no dia 15 de outubro de 1966, como um trio, quando se apresentaram no programa O Pequeno Mundo de Ronnie Von, da TV Record. Na véspera da estreia do programa, o trio tinha o nome de \"Os Bruxos\", mas nem Rita Lee nem os irmãos Baptista (Arnaldo e Sérgio) estavam satisfeitos com esse nome e queriam mudá-lo.\n[…]\nDe acordo com Carlos Calado, a ideia do nome \"Os Mutantes\" veio de uma brincadeira irônica de Alberto Helena Júnior, produtor do programa, com Ronnie Von, que, na época, andava lendo O Império dos Mutantes, de Stefan Wul, e não falava de outro assunto. Alberto teria proposto: \"Vocês ainda estão procurando um nome para o conjunto dos meninos? Por que não Os Mutantes?\". Ronnie Von gostou da ideia e levou-a ao grupo, que a aprovou imediatamente.\n[…]\nNo início de 1967, as mudanças na direção artística do programa de Ronnie Von começaram a reduzir as apresentações dos Mutantes e a liberdade dos artistas. Por discordar das novas diretrizes, eles deixaram a Record, passando a se apresentar também em outras emissoras. À convite do maestro Chiquinho de Moraes, da Rede Bandeirantes, Os Mutantes tocaram no programa Quadrado e Redondo, apresentado por Sérgio Galvão. Nessa época, conheceram também o maestro Rogério Duprat.\n[…]\nCalado, Carlos (1995). A Divina Comédia dos Mutantes. São Paulo: Editora 34. ISBN 978-8573260090\n[…]\nOs Mutantes no Facebook\n[…]\nCanal de Os Mutantes no YouTube\n[…]\nOs Mutantes no Twitter\n[…]\nOs Mutantes no Dicionário Cravo Albin de Música Popular Brasileira"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Os_Mutantes",
        "situacao": "ok",
        "texto": "Os Mutantes (Brazilian Portuguese: [uz muˈtɐ̃tʃis], The Mutants) is a Brazilian rock band that were linked with the Tropicália movement of the late 1960s. Heavily influenced by Anglo-American psychedelic pop, they bridged Brazilian sensibilities together with studio trickery, feedback, distortion, and musique concrète. They released their now-acclaimed self-titled debut album in 1968.\n[…]\nSérgio Dias's guitar, the Golden Guitar (Guitarra de Ouro), was created by Arnaldo and Sérgio's brother, Cláudio César Dias Baptista, who built many of their instruments and electronic effects. Their current name was settled upon immediately before a performance on a Brazilian television program and given to them by Ronnie Von .\n[…]\nIn 2022–2023, Os Mutantes, fronted by Sérgio Dias, went on a North American tour.\n[…]\nCobain was introduced to them by Pat Fear from White Flag (whose collaboration with Redd Kross and other friends under the name The Tater Totz was the first American band to cover or even cite Os Mutantes on their 1988 LP Alien Sleestaks from Brazil). Beck paid tribute to the group with his single \"Tropicália\" from the album Mutations. The Bees covered \"A Minha Menina\" on their first album, Sunshine Hit Me.\n[…]\nRed Hot Chili Peppers bass player Flea has stated on his Twitter account that \"Os Mutantes the Brazilian band is so great\". Kevin Barnes of Of Montreal cites Os Mutantes as an important influence. Talking Heads frontman David Byrne has worked to publish and promote the group's music through his Luaka Bop label.\n[…]\nThe discography of Os Mutantes consists of ten studio albums, two live albums, ten compilation albums, four extended plays, ten singles and one video album\n[…]\nOs Mutantes's channel on YouTube\n[…]\n(in English) Os Mutantes: Album Guide\n[…]\nOs Mutantes discography at Discogs\n[…]\nOs Mutantes at IMDb"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Garota de Ipanema",
      "descricao": "Canção de bossa nova de Tom Jobim e Vinicius de Moraes, de 1962."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Na primeira versão da letra escrita por Vinicius de Moraes, Garota de Ipanema tinha outro título. Qual?",
    "resposta": "Menina que Passa",
    "distratores": [
      "Moça do Arpoador",
      "Garota de Copacabana",
      "Brisa do Mar"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Garota_de_Ipanema"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Garota_de_Ipanema",
        "situacao": "ok",
        "texto": "\"Garota de Ipanema\" é uma canção brasileira de bossa nova. Foi composta por Antônio Carlos Jobim e letrada por Vinicius de Moraes em 1962. É considerada a segunda canção mais executada da história da música mundial, depois de Yesterday. Teve mais de quinhentas versões com diferentes intérpretes, além de ser incluída em cerca de 1,5 mil álbuns, vinis e coletâneas ao redor do planeta.\n[…]\nIpanema é um bairro à beira-mar localizado na região sul da cidade do Rio de Janeiro. A pedido do empresário Oscar Ornstein, Vinícius de Moraes e Antônio Carlos Jobim se juntaram para criar uma canção que iria integrar a peça musical Dirigível, um trabalho que estava em andamento mas nunca estreou. O título original era \"Menina que Passa\".\n[…]\nEm Revelação: uma verdadeira Garota de Ipanema, Moraes escreveu que ela era \"o paradigma do bruto carioca; a moça dourada, misto de flor e sereia, cheia de luz e de graça mas cuja visão é também triste, pois carrega consigo, a caminho do mar, o sentimento da que passa, da beleza que não é só nossa – é um dom da vida em seu lindo e melancólico fluir e refluir constante.\" Provavelmente em retribuição à homenagem, quando ela se casou, convidou Tom Jobim e sua esposa Teresa para serem padrinhos.\n[…]\nUma versão em língua italiana, intitulada \"La ragazza di Ipanema\", foi gravada em 1965 por Caterina Valente pela gravadora Decca Records. A cantora, que já havia gravado \"Desafinado\" e \"Samba de Uma Nota Só\", no entanto, gravou a canção em três ou quatro outras línguas. O texto italiano de \"Garota de Ipanema\" foi escrito por Giorgio Calabrese e, apesar do título coerente com o original, falou de um \"Garoto de Ipanema\" disputado por uma turma de meninas.\n[…]\nA série de televisão Coisa Mais Linda, cujo tema é a ascensão da bossa nova, lançada em março de 2019 e exibida pela Netflix, teve o título inspirado no primeiro verso de Garota de Ipanema."
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Carmen Miranda",
      "descricao": "Cantora e atriz luso-brasileira famosa pelos turbantes de frutas em Hollywood"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Pela baixa estatura e pelo enorme talento, Carmen Miranda ganhou qual apelido ainda nos tempos do rádio?",
    "resposta": "A Pequena Notável",
    "distratores": [
      "A Divina",
      "A Rainha do Rádio",
      "A Favorita"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Carmen_Miranda"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Carmen_Miranda",
        "situacao": "ok",
        "texto": "Maria do Carmo Miranda da Cunha (Marco de Canaveses, 9 de fevereiro de 1909 – Beverly Hills, 5 de agosto de 1955), mais conhecida como Carmen Miranda, foi uma cantora, dançarina, e atriz luso-brasileira. Sua carreira artística transcorreu no Brasil e nos Estados Unidos entre as décadas de 1930 e 1950. Trabalhou no rádio, no teatro de revista, no cinema e na televisão.\n[…]\nEra a segunda filha do barbeiro José Maria Pinto da Cunha (Marco de Canaveses, Várzea da Ovelha e Aliviada, 17 de fevereiro de 1887 – Rio de Janeiro, 20 de junho de 1938) e de sua mulher, Maria Emília de Miranda (Marco de Canaveses, Várzea da Ovelha e Aliviada, 3 de março de 1886 – Rio de Janeiro, 9 de novembro de 1971). Ganhou o apelido de Carmen no Brasil, graças ao gosto que seu tio Amaro tinha por óperas.\n[…]\nO êxito do filme levou a Cinédia a chamá-la para um novo musical, Bonequinha de Seda. Esta, por algum motivo não elucidado, provavelmente devido a uma viagem à Argentina, não aceitou o papel, que foi dado a Gilda de Abreu. Miranda logo passou a ser chamada de \"A Pequena Notável\" — devido à sua estatura baixa, apelido dado, na época, pelo radialista César Ladeira. Em seu filme seguinte, Estudantes (1935), Carmen Miranda foi, pela primeira vez, escalada para um papel narrativo.\n[…]\nRichard Brody, do The New Yorker, escreveu que o filme é um exemplo notável de como a arte cinematográfica pode expandir os limites do gênero musical e permanecer relevante décadas depois. Durante as filmagens, Carmen Miranda estava lidando com uma pequena falha no nariz, resultado de uma plástica mal-sucedida, mas conseguiu escondê-la com maquiagem. Após o término das gravações, ela passou por outra cirurgia, que quase lhe custou a vida devido a uma infecção no fígado.\n[…]\n1999 - \"Carmen Miranda - A Pequena Notável\"\n[…]\nCarmen Miranda no IMDb\n[…]\nCarmen Miranda no Dicionário Cravo Albin da Música Popular Brasileira"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Milton Nascimento",
      "descricao": "Cantor e compositor nascido no Rio de Janeiro e criado em Minas Gerais, líder do Clube da Esquina."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Entre amigos e parceiros do Clube da Esquina, Milton Nascimento sempre foi chamado por qual apelido?",
    "resposta": "Bituca",
    "distratores": [
      "Bolacha",
      "Tuca",
      "Miltinho"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Milton_Nascimento"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Milton_Nascimento",
        "situacao": "ok",
        "texto": "Milton Silva Campos do Nascimento OMC (Rio de Janeiro, 26 de outubro de 1942) é um cantor, compositor e multi-instrumentista brasileiro atualmente aposentado de apresentações ao vivo, é reconhecido como um dos mais influentes artistas da história da música nacional. Nascido no Rio de Janeiro e criado em Três Pontas, tornou-se conhecido nacionalmente quando sua composição \"Travessia\", co-escrita co\n[…]\nFoi apelidado de \"Bituca\" ainda criança, por fazer um bico quando estava contrariado, numa referência aos índios botocudos. Milton começou a gostar de música por influência da mãe, que havia estudado com Heitor Villa-Lobos. Aos quatro anos, ganhou uma sanfona de dois baixos, e desde cedo explorou sua voz. Aos 13 anos, era crooner do conjunto Continental de Duilio Tiso Cougo, grupo musical de baile de Três Pontas.\n[…]\nO filho sempre manteve relação com a mãe, Sandra, mas, desde muito jovem, não tinha qualquer laço com o pai biológico. Milton apegou-se a ele como um pai, e perguntou se ele queria ser seu filho. Augusto aceitou, e passou a se dividir entre Juiz de Fora e Rio de Janeiro.[carece de fontes]? Quando o rapaz completou 23 anos, em 2016, foi oficialmente adotado, passando a assinar Augusto Kesrouani do Nascimento, mantendo o sobrenome da mãe, e incluindo o “Nascimento”, do pai.[carece de fontes]?\n[…]\nBituca foi homenageado três vezes no carnaval brasileiro. A primeira vez foi no carnaval carioca de 1989, pela Unidos do Cabuçu, com o enredo \"Milton Nascimento, Sou do Mundo, Sou de Minas Gerais\". O desfile foi ecologicamente correto, sem utilização de plumas e enfeites de origem animal, conforme pedido do próprio cantor, que desfilou na última alegoria.\n[…]\nClube da Esquina\n[…]\nBORGES, Márcio. Os Sonhos não Envelhecem: Histórias do Clube da Esquina. 1996. Editorial Geração. Postfácio: Milton Nascimento.\n[…]\nMilton Nascimento no Instagram\n[…]\nMilton Nascimento no TikTok\n[…]\nMilton Nascimento no Twitter"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Marília Mendonça",
      "descricao": "Cantora e compositora brasileira de sertanejo, conhecida pela música Infiel."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Pelas letras de dor de cotovelo, Marília Mendonça ganhou o título de rainha de quê?",
    "resposta": "Sofrência",
    "distratores": [
      "Arrocha",
      "Balada",
      "Piseiro"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Mar%C3%ADlia_Mendon%C3%A7a"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Mar%C3%ADlia_Mendon%C3%A7a",
        "situacao": "ok",
        "texto": "Marília Dias Mendonça OMC (Cristianópolis, 22 de julho de 1995 – Piedade de Caratinga, 5 de novembro de 2021) foi uma cantora, compositora e instrumentista brasileira. Reconhecida como uma das maiores vozes da música sertaneja, sua contribuição para o empoderamento feminino revolucionou o universo da música sertaneja entre as décadas de 2010 e 2020.\n[…]\nEm 2015, lançou seu EP de estreia homônimo, porém Mendonça só ganhou destaque após lançar seu primeiro DVD homônimo em 2016, que lhe concedeu certificado de tripla platina pelas 240 mil cópias vendidas. A canção \"Infiel\", incluída no álbum, tornou-se uma das músicas mais tocadas no Brasil e recebeu certificado de disco de diamante triplo, fazendo Marília ganhar visibilidade nacional.\n[…]\nNa Índia, a morte da cantora teve ampla repercussão. A 'rainha da sofrência' foi designada pela imprensa indiana como की 'पीड़ा की रानी' (tradução literal para Rainha da Dor).\n[…]\nPara eternizar a história de Marília, o Mercado da 74 de Goiânia passou a carregar seu nome desde o dia 21 de outubro de 2022, passando a ser denominado Centro Cultural Mercado Popular da Rua 74 Marília Mendonça.\n[…]\nEm Caratinga, cidade em que Marília iria se apresentar à ocasião em que sofreu o acidente, anualmente a cantora vem sendo homenageada na data em que morreu, e tramita a alteração do nome do Parque de Exposições João da Costa Mafra para Parque de Exposições Marília Mendonça e João da Costa Mafra. A cantora Emely Rodrigues também realizou homenagens à Marília Mendonça durante os festejos de São João, em Salvador, na Bahia.\n[…]\nA dupla sertaneja Henrique & Juliano também homenageou Marília Mendonça por ocasião de gravação de DVD nos Estados Unidos, emocionando o público da Times Square.\n[…]\nMarília Mendonça no Instagram\n[…]\nMarília Mendonça no Facebook\n[…]\nMarília Mendonça no Twitter"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Aquarela do Brasil",
      "descricao": "Samba-exaltação composto por Ary Barroso em 1939."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "O filme distópico Brazil, de 1985, usa Aquarela do Brasil como tema do começo ao fim. Quem o dirigiu?",
    "resposta": "Terry Gilliam",
    "distratores": [
      "Ridley Scott",
      "Stanley Kubrick",
      "Steven Spielberg"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Brazil_(1985_film)",
      "https://pt.wikipedia.org/wiki/Aquarela_do_Brasil"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Brazil_(1985_film)",
        "situacao": "ok",
        "texto": "Brazil is a 1985 dystopian science fiction black comedy film directed by Terry Gilliam and written by Gilliam, Charles McKeown, and Tom Stoppard. A co-production between the United Kingdom and the United States, the film stars Jonathan Pryce, Robert De Niro, Katherine Helmond, Ian Holm, Bob Hoskins, Michael Palin, Ian Richardson, Peter Vaughan, and Kim Greist.\n[…]\nIn addition, director Terry Gilliam appeared in an uncredited cameo as the smoking man at Shang-ri La Towers.\n[…]\nIn an interview with Salman Rushdie, Gilliam stated:\n[…]\nOn the review aggregator website Rotten Tomatoes, 98% of 65 critics' reviews are positive, with an average rating of 9.1/10. The website's consensus reads: \"Brazil, Terry Gilliam's visionary Orwellian fantasy, is an audacious dark comedy, filled with strange, imaginative visuals.\" On Metacritic, the film received a score of 84 based on 18 reviews, indicating \"universal acclaim\".\n[…]\nJanet Maslin of The New York Times was very positive towards the film on its release, stating, \"Terry Gilliam's Brazil, a jaunty, wittily observed vision of an extremely bleak future, is a superb example of the power of comedy to underscore serious ideas, even solemn ones.\"\n[…]\nJupiter Ascending (2015) features a scene that is deliberately designed to resemble the bureaucracy in Brazil, featuring Terry Gilliam in a cameo role and a reference to a \"statute 27B-stroke-6\".\n[…]\nBrazil at Box Office Mojo\n[…]\nWide Angle Closeup: The Terry Gilliam Files – Interviews and production stories on Brazil\n[…]\nBrazil Screenplay, Terry Gilliam, Tom Stoppard & Charles McKeown, Daily Script website\n[…]\nDGA magazine interview with Gilliam\n[…]\nHamel, James Keith. Modernity and Mise-en-scene: Terry Gilliam and Brazil, from Images: Journal of Film and Popular Culture\n[…]\n‘Robert De Niro prepared to play a plumber by watching a brain surgeon’: Terry Gilliam and Jonathan Pryce on making Brazil"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Aquarela_do_Brasil",
        "situacao": "ok",
        "texto": "\"Aquarela do Brasil\" é uma canção brasileira escrita pelo compositor mineiro Ary Barroso em 1939. O samba foi gravado a primeira vez por seu parceiro Francisco Alves, e depois por diversos artistas que vão de Carmen Miranda a Frank Sinatra, passando por João Gilberto, Tom Jobim, Caetano Veloso, Tim Maia, Gal Costa, Erasmo Carlos e Elis Regina.\n[…]\nA canção \"Aquarela do Brasil\" recebeu esse título porque foi composta numa noite de 1939 na qual Barroso foi impedido de sair de casa devido a uma forte tempestade. Naquela mesma noite, também compôs \"Três Lágrimas\" antes que a chuva acabasse.\n[…]\nAntes de ser gravada, \"Aquarela do Brasil\", inicialmente chamada de \"Aquarela Brasileira\", foi apresentada pelo barítono Cândido Botelho no musical Joujoux e balangandans, espetáculo beneficente patrocinado por Darcy Vargas, a então primeira-dama. A canção foi originalmente gravada por Francisco Alves, com arranjos e acompanhamento de Radamés Gnattali e sua orquestra, e lançada pela Odeon Records naquele mesmo ano.\n[…]\nO sucesso de \"Aquarela do Brasil\" demorou a se perpetuar. Em 1940, não conseguiu ficar entre as três primeiras colocadas no concurso de sambas carnavalescos, cujo júri era presidido por Heitor Villa-Lobos, com quem Barroso cortou relações, que só foram retomadas quinze anos depois, quando ambos receberam a Comenda Nacional do Mérito. O sucesso só veio após a inclusão no filme de animação Saludos Amigos, lançado em 1942 pelos Estúdios Disney.\n[…]\n1980: Gal Costa em Aquarela do Brasil\n[…]\n1988: Emílio Santiago em Aquarela Brasileira Vol. 1\n[…]\n1995: Dionne Warwick em Aquarela do Brazil\n[…]\n1942: Aquarela do Brasil\n[…]\n1942: Saludos Amigos (segmento Aquarela do Brasil)\n[…]\n1944: Brazil\n[…]\n1985: Brazil, o filme\n[…]\n2000: Aquarela do Brasil (tema de abertura)\n[…]\nGravações de \"Aquarela do Brasil\" por Daniella Thompson\n[…]\n\"Aquarela do Brasil\" no All Music Guide"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Elis Regina",
      "descricao": "Cantora gaúcha, uma das maiores intérpretes da MPB, morta em 1982."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Antes de César Camargo Mariano, Elis Regina foi casada com qual compositor e produtor da bossa nova?",
    "resposta": "Ronaldo Bôscoli",
    "distratores": [
      "Roberto Menescal",
      "Carlos Lyra",
      "Nelson Motta"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Elis_Regina",
      "https://pt.wikipedia.org/wiki/Ronaldo_B%C3%B4scoli"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Elis_Regina",
        "situacao": "ok",
        "texto": "Elis Regina Carvalho Costa (Porto Alegre, 17 de março de 1945 – São Paulo, 19 de janeiro de 1982) foi uma cantora brasileira. Conhecida por \"pimentinha\" e pela competência vocal, musicalidade e presença de palco, foi aclamada tanto no Brasil quanto internacionalmente, e comparada a cantoras como Ella Fitzgerald, Sarah Vaughan e Billie Holiday. Com os sucessos de Falso Brilhante (1975–1977) e Trans\n[…]\nFoi casada com Ronaldo Bôscoli, então diretor d'O Fino da Bossa, com quem teve João Marcello Bôscoli (1970); em 1973, casou-se com o pianista César Camargo Mariano, com quem teve mais dois filhos: Pedro Mariano (1975) e Maria Rita (1977).\n[…]\nAssim, foram lançados Ellis Regina e O Bem do Amor, novamente com vendas baixas.\n[…]\nAinda no primeiro semestre de 1964, Elis fez um teste para ser a cantora na gravação em disco do espetáculo Pobre Menina Rica, composto por canções de Carlos Lyra e Vinicius de Moraes. O show havia sido um dos sucessos tardios da bossa nova no ano anterior, quando havia ficado em cartaz com Lyra e Vinicius tocando as canções cantadas pela então estreante Nara Leão na boate Au Bon Gourmet, com direção de Aloysio de Oliveira.\n[…]\nEntretanto, a briga e o fim da temporada naquele bar abriu a oportunidade para os produtores de shows no bar vizinho - o Little Club - buscarem contratar a cantora gaúcha para um show lá. Assim, Miele e Bôscoli produziram, na sequência, um novo show para Elis no Beco, negociando uma participação maior no couvert artístico para a cantora. O show contava com a participação da bailarina Marly Tavares, do pandeirista e humorista Gaguinho, e do conjunto Bossa Três.\n[…]\nElis Regina é mãe de João Marcello Bôscoli (n. 1970), filho do seu primeiro casamento com o músico Ronaldo Bôscoli (1928-1994), e de Pedro Camargo Mariano (n. 1975) e Maria Rita (n. 1977), filhos de seu segundo marido, o pianista César Camargo Mariano (n. 1943).\n[…]\nElis Regina no IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ronaldo_B%C3%B4scoli",
        "situacao": "ok",
        "texto": "Ronaldo Fernando Esquerdo e Bôscoli (Rio de Janeiro, 28 de outubro de 1928 — Rio de Janeiro, 18 de novembro de 1994) foi um compositor, produtor musical e jornalista brasileiro.\n[…]\nNascido na afamada família Bôscoli de artistas, é sobrinho-bisneto da compositora Chiquinha Gonzaga e primo do ator Jardel Filho e de Bibi Ferreira. Teve como primeira profissão, em 1951, o trabalho em um jornal, Diário da Noite, como jornalista esportivo, período limitado à juventude. Na mesma época iniciou amizade com Vinicius de Moraes, que já havia jogado o seu charme para sua irmã, Lila, com quem se casaria tempos depois.\n[…]\nCompunha com outros artistas as canções que ficariam conhecidas como estilo bossa nova. Um dos grandes nomes do movimento, compôs, com Roberto Menescal, as célebres \"O Barquinho\", \"Nós e o Mar\", \"Telefone\" e \"Balançamba\". Escreveu com Carlos Lyra duas canções – \"Lobo Bobo\" e \"Saudade Fez Um Samba\" – para o histórico disco \"Chega de Saudade\", de João Gilberto, lançado em 1959.\n[…]\nAinda ao lado de Miele, trabalhou como produtor musical durante 24 anos, tendo produzido os espetáculos de Roberto Carlos, e na Rede Globo originando programas como \"Brasil Pandeiro\" (com Beth Faria), \"Alerta Geral\" (com Alcione) e \"Brasil 78 e 79\" (com Bibi Ferreira).\n[…]\nParticipou do programa televisivo de \"O Fino da Bossa\", apresentado por Elis Regina e Jair Rodrigues. Casou-se com Elis Regina em 5 de dezembro de 1967, numa mansão de estilo colonial mexicano que o casal construiu na avenida Niemeyer.\n[…]\nÉ pai do produtor musical João Marcelo Bôscoli, filho que teve com Elis Regina e de Mariana Bôscoli, modelo.\n[…]\nRonaldo Bôscoli no IMDb"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Gilberto Gil",
      "descricao": "Cantor e compositor baiano, um dos líderes da Tropicália, que também foi ministro da Cultura."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "No festival da TV Record de 1967, Gilberto Gil cantou Domingo no Parque acompanhado de qual banda de rock?",
    "resposta": "Os Mutantes",
    "distratores": [
      "Os Incríveis",
      "The Beat Boys",
      "Renato e Seus Blue Caps"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Domingo_no_Parque",
      "https://pt.wikipedia.org/wiki/Gilberto_Gil"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Domingo_no_Parque",
        "situacao": "ok",
        "texto": "Gilberto Gil (também conhecido como \"Frevo Rasgado\", título da primeira faixa) é o segundo álbum de estúdio do cantor e compositor brasileiro Gilberto Gil, lançado em 1968, pela Philips. Tido como um dos álbuns fundamentais da Tropicália, movimento do qual Gil é um dos fundadores, o projeto apresenta \"um rock maluco\", ao lado de Os Mutantes, com letras de Torquato Neto, de Bruno Ferreira, além do \n[…]\nEm outubro de 2007, o álbum entrou na lista dos 100 maiores discos da música brasileira feita pela revista Rolling Stone Brasil, ocupando a 78ª colocação. A primeira canção a ser lançada, \"Domingo no Parque\", foi apresentada no III Festival da Record, em outubro de 1967, obtendo o 2º Lugar.\n[…]\nEm entrevista publicada dada à Lais de Castro, para a revista InTerValo, em 14 de janeiro de 1968, Gil fala sobre as canções e a produção de seu novo LP, Gilberto Gil. Ao lado de Torquato Neto, ele compôs \"Domingou\", que, segundo De Castro, \"trata-se de um domingo no Rio, mas, não tem nada a ver com 'Domingo no Parque'\". Nesta entrevista, Gil diz que \"as coisas que têm que ser ditas, têm que ser ditas. Em uma ou dez palavras. A gente abre mão da letra curta, às vezes, para dizer o que quer\".\n[…]\nA allmusic, diz que o álbum traz \"algumas das melhores canções\" da carreira de Gilberto Gil, dizendo que as canções \"Domingo no Parque\", \"Frevo Rasgado\" e o single \"Pega a Voga, Cabeludo\", possuem um \"pop eufórico, que foram igualmente inspirados pelo bombástico Carnaval\" e do rock'n'roll inteligente, vindo do Reino Unido\". John Bush, finaliza sua crítica dizendo que o álbum é \"agradável\" e dando ao mesmo a pontuação máxima de cinco estrelas.\n[…]\nTodas as faixas escritas por Gilberto Gil, exceto onde notado."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Gilberto_Gil",
        "situacao": "ok",
        "texto": "Gilberto Passos Gil Moreira (Salvador, 26 de junho de 1942) é um cantor, compositor, músico, político e escritor brasileiro. Com uma carreira de mais de seis décadas, é conhecido por sua relevante contribuição na música brasileira e por ser vencedor de prêmios Grammy Awards, Grammy Latino e galardoado pelo governo francês com a Ordem Nacional do Mérito (1997). Em 1999, foi nomeado \"Artista pela Pa\n[…]\nEm contrapartida Gil, influenciado pelos Beatles, resolveu incluir o rock e a música brasileira em \"Domingo no Parque\", interpretado ao lado de Os Mutantes.\n[…]\nA partir de 1968, o movimento começou a ser consolidado. Caetano e Gil, ao lado de Os Mutantes, passaram a participar frequentemente de programas de televisão, especialmente por Chacrinha, apresentador que tornou-se ícone do movimento. Gilberto Gil participou do espetáculo Momento 68, patrocinado pela Rhodia, levando o artista para Portugal e Espanha.\n[…]\nNesta época, ele começou a trabalhar com seu novo álbum solo e mais um projeto ao lado de outros tropicalistas, como Caetano, Gal Costa, Tom Zé, Nara Leão, Os Mutantes e Rogério Duprat. Em março, a gravadora lançou o primeiro single do novo álbum de Gilberto Gil, \"Pega a Yoga, Cabeludo\". Já em maio, sob o título de Gilberto Gil, também conhecido como \"Frevo Rasgado\", a Philips Records lançou o segundo álbum solo de Gil.\n[…]\nO documentário, ainda deve conter cenas do carnaval de Salvador em terreiros de candomblé, e encontros de Gilberto Gil com pensadores e artistas sul-africanos, poetas e líderes e cantores australianos. Connecting South: The New World, ainda não tem data de lançamento, mas, a previsão é que seja lançada ainda em 2012. Inspirada na canção \"Domingo no Parque\" (1967), a Companhia de Teatro O Cidadão de Papel, fez uma montagem dirigida por Marcos Oliveira, em Salvador.\n[…]\nGilberto Gil no IMDb\n[…]\nGilberto Gilno Spotify\n[…]\nCanal de Gilberto Gil no YouTube\n[…]\nGilberto Gil na ABL"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Milton Nascimento",
      "descricao": "Cantor e compositor nascido no Rio de Janeiro e criado em Minas Gerais, líder do Clube da Esquina."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Em 1975, Milton Nascimento gravou o disco Native Dancer em parceria com qual saxofonista americano de jazz?",
    "resposta": "Wayne Shorter",
    "distratores": [
      "Stan Getz",
      "Sonny Rollins",
      "Gerry Mulligan"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Native_Dancer_(album)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Native_Dancer_(album)",
        "situacao": "ok",
        "texto": "Native Dancer is an album by Wayne Shorter featuring Milton Nascimento, and features some of his most acclaimed compositions. It is notable for blending jazz, rock and funk elements with Brazilian rhythms in an attempt to create \"world\" music broadly accessible to people from many different cultures. Many American musicians have mentioned being influenced by the album, including bassist Esperanza \n[…]\n\"Ponta de Areia\" (Milton Nascimento, Fernando Brant) – 5:18\n[…]\n\"Beauty and the Beast\" (Wayne Shorter) – 5:04\n[…]\n\"Tarde\" (Nascimento, Márcio Borges) – 5:49\n[…]\n\"Miracle of the Fishes\" (Nascimento, Brant) – 4:48\n[…]\n\"Diana\" (Wayne Shorter) – 3:04\n[…]\n\"From the Lonely Afternoons\" (Nascimento, Brant) – 3:15\n[…]\n\"Ana Maria\" (Shorter) – 5:10\n[…]\n\"Lilia\" (Nascimento) – 7:03\n[…]\nWayne Shorter – soprano saxophone (tracks 1–2, 4, 7–9), tenor saxophone (tracks 4–6), piano (tracks 5–7), electric piano (track 8)\n[…]\nMilton Nascimento – vocals (tracks 1, 3–4, 6, 8), acoustic guitar (tracks 3–4, 6, 8)\n[…]\nWeather Report, Tale Spinnin' (1975)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Native_Dancer",
        "situacao": "ok",
        "texto": "Native Dancer é o 15º álbum  de Wayne Shorter feito em parceria com o músico brasileiro Milton Nascimento, com algumas de suas composições mais aclamadas, incluindo \"Ponta de Areia\" e \"Milagre dos Peixes\". É notável a junção de jazz rock e elementos do funk, além de ritmos regionais e influência brasileira, em uma tentativa de criar uma música \"global\" acessível a partir de muitas perspectivas.\n[…]\nMuitos músicos americanos foram influenciados por este álbum, incluindo Esperanza Spalding  e Maurice White do Earth, Wind & Fire, que regravou \"Ponta de Areia\" em seu álbum All 'N All, sucesso de 1977.\n[…]\nTodas as faixas foram compostas por Wayne Shorter, exceto onde indicado.\n[…]\n\"Ponta de Areia\" (Milton Nascimento, Fernando Brant) - 5:18\n[…]\n\"Tarde\" (Milton Nascimento, Márcio Borges) - 5:49\n[…]\n\"Miracle of the Fishes\" (Nascimento, Brant) - 4:48\n[…]\n\"From the Lonely Afternoons\" (Nascimento, Brant) - 3:15\n[…]\n\"Lilia\" (Nascimento) - 7:03\n[…]\nWayne Shorter - Saxofone\n[…]\nMilton Nascimento - Guitarra, Voz",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Pixinguinha",
      "descricao": "Alfredo da Rocha Vianna Filho, compositor, flautista e saxofonista carioca, mestre do choro."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "O Dia Nacional do Choro, comemorado em vinte e três de abril, lembra o nascimento de qual músico?",
    "resposta": "Pixinguinha",
    "distratores": [
      "Jacob do Bandolim",
      "Waldir Azevedo",
      "Ernesto Nazareth"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Dia_Nacional_do_Choro",
      "https://pt.wikipedia.org/wiki/Pixinguinha"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Dia_Nacional_do_Choro",
        "situacao": "inexistente",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pixinguinha",
        "situacao": "ok",
        "texto": "Alfredo da Rocha Vianna Filho, conhecido como Pixinguinha (Rio de Janeiro, 4 de maio de 1897 — Rio de Janeiro, 17 de fevereiro de 1973), foi um compositor, arranjador, maestro, professor, flautista e saxofonista brasileiro.\n[…]\nNascido no Rio de Janeiro em 4 de maio de 1897, Pixinguinha era filho de Raimunda Maria da Conceição e Alfredo da Rocha Vianna, funcionário dos Telégrafos e flautista amador, que fez parte de um grupo de burocratas e músicos que sistematizou e divulgou a linguagem do choro na virada do século XIX para o XX. Teve treze irmãos.\n[…]\nSua esposa morreu em 1972. Pixinguinha já estava doente com arteriosclerose e problemas cardíacos, e morreu em 17 de fevereiro de 1973, quando estava na Igreja de Nossa Senhora da Paz em Ipanema, participando de um batismo. A causa da morte foi diagnosticada como ruptura de um aneurisma da aorta abdominal. Deixou um filho adotivo, Alfredo da Rocha Vianna Neto.\n[…]\nPixinguinha foi um caso raro entre os músicos populares de sua geração pela amplitude de suas atividades: compositor, instrumentista, arranjador, maestro e professor, além de ser um dos poucos que sabiam ler e escrever partituras.\n[…]\nFrequentemente é chamado de \"São Pixinguinha\".\n[…]\nEm 4 de setembro de 2000 foi sancionada lei originada por iniciativa do bandolinista Hamilton de Holanda e seus alunos da Escola de Choro Raphael Rabello, criando o Dia Nacional do Choro, a ser comemorado no dia 23 de abril. A data foi escolhida como homenagem ao que se acreditava ser a data de nascimento de Pixinguinha. Em novembro de 2016, entretanto, foi descoberto que a verdadeira data de nascimento do compositor é 4 de maio de 1897, e não 23 de abril.\n[…]\nPixinguinha no IMDb\n[…]\nEspecial Pixinguinha — ao Mestre com Carinho. TV Brasil"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Luiz Gonzaga",
      "descricao": "Sanfoneiro, cantor e compositor pernambucano, chamado de Rei do Baião."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Gonzaguinha, autor de O Que É, O Que É, era filho de qual sanfoneiro?",
    "resposta": "Luiz Gonzaga",
    "distratores": [
      "Dominguinhos",
      "Sivuca",
      "Abdias"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Gonzaguinha"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Gonzaguinha",
        "situacao": "ok",
        "texto": "Luiz Gonzaga do Nascimento Júnior (Rio de Janeiro, 22 de setembro de 1945 – Renascença ou Marmeleiro, 29 de abril de 1991), mais conhecido como Gonzaguinha, foi um cantor e compositor brasileiro.\n[…]\nGonzaguinha era filho registrado, mas não biológico, do cantor e compositor pernambucano Luiz Gonzaga e de Odaleia Guedes dos Santos, cantora do Dancing Brasil.\n[…]\nEmbora seja oficialmente reconhecido como filho de Luiz Gonzaga, o próprio Gonzaga durante a sua vida fez declarações dúbias sobre a paternidade de Gonzaguinha. Numa das fitas, diz-lhe: “Deus escreve certo por linhas tortas. Veja você: seu sangue não corre nas minhas veias. Você tem essas coisas todas, as pessoas chegadas a mim, porque você é meu filho.\n[…]\nAcho que a pessoa que mais gosta de mim é você.” Na mesma fita, Gonzaguinha encara a questão: “Não tenho o menor temor de ser ou não ser filho de Luiz Gonzaga. Se você falar que meu pai é outro, não vai bulir com meus sentimentos, não estou preocupado com isso.”\n[…]\nGonzaga descobriu-se estéril quando se casou com a segunda mulher, Helena das Neves Cavalcanti, em 1948. Gonzaguinha tinha 3 anos.\n[…]\nA escola de samba Império Serrano escolheu como enredo para seu desfile no Grupo Especial em 2019, o sucesso de Gonzaguinha O Que É, o Que É?, usando a canção também como o samba-enredo, num recurso inédito no carnaval carioca.\n[…]\nAMARAL, Euclides. Alguns Aspectos da MPB. Rio de Janeiro: Edição do Autor, 2008. 2ª ed. Esteio Editora, 2010.\n[…]\nECHEVERRIA, Regina. Gonzaguinha e Gonzagão – Uma história brasileira. Rio de Janeiro: Ediouro, 2007.\n[…]\nMedia relacionados com Gonzaguinha no Wikimedia Commons\n[…]\nO Wikiquote possui citações de ou sobre: Gonzaguinha\n[…]\n«Luiz Gonzaga Jr. (Gonzaguinha)», MPBNet, Músicos"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Renato Russo",
      "descricao": "Renato Manfredini Júnior, cantor e compositor, líder da banda Legião Urbana, morto em 1996."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Antes da Legião Urbana, Renato Russo tocava no Aborto Elétrico, cujos ex-integrantes depois formaram qual banda?",
    "resposta": "Capital Inicial",
    "distratores": [
      "Plebe Rude",
      "Ultraje a Rigor",
      "Paralamas do Sucesso"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Aborto_El%C3%A9trico"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Aborto_El%C3%A9trico",
        "situacao": "ok",
        "texto": "Aborto Elétrico foi uma banda de punk rock brasileira que esteve na ativa entre 1978 e 1982. Segundo uma entrevista concedida à MTV Brasil, o próprio Renato Russo relata quando questionado sobre a formação do Aborto Elétrico: \"O Aborto Elétrico era uma banda que o André Pretorius iria formar com o André Müller e o Fê Lemos\". Entretanto, sua formação original contava com Renato Russo (baixo), André\n[…]\nA banda fez parte da Turma da Colina, movimento de bandas de Brasília fundado no fim dos anos 70, ao lado de bandas como Os Paralamas do Sucesso e Plebe Rude. O Aborto Elétrico foi a banda responsável pelo surgimento das bandas Capital Inicial e Legião Urbana, ambas em 1982, após frequentes desentendimentos entre Fê Lemos e Renato Russo.\n[…]\nFoi nessa época que várias músicas do repertório do Capital Inicial e da Legião Urbana foram compostas, como \"Que País é Esse?\", da Legião Urbana e \"Veraneio Vascaína\", do Capital Inicial.\n[…]\nTrês meses depois, em março de 1982 era decretado o fim do Aborto Elétrico. Mesmo sem Renato Russo, Fê tentou manter o Aborto Elétrico. Afinal, eles já tinham uma certa fama no circuito alternativo de Brasília. Como numa despedida oficial, Fê chamou Renato para uma última apresentação com o grupo. Renato foi e o Aborto Elétrico teve a sua derradeira aparição. Seis meses depois do fim da banda, Fê e Flávio, juntamente com Dinho Ouro Preto, formam a banda Capital Inicial.\n[…]\nNo mesmo ano, Renato formou a Legião Urbana juntamente com Eduardo Paraná, Marcelo Bonfá e Paulo Paulista.\n[…]\nParte de seu repertório foi esquecida, e a outra parte foi dividida entre Capital Inicial e Legião Urbana.\n[…]\nEm 2005, o Capital Inicial lançou o álbum MTV Especial: Aborto Elétrico, com dezoito canções do repertório do Aborto Elétrico, quatro que já haviam sido gravadas pelo Capital Inicial, cinco que já haviam sido gravadas pela Legião Urbana e mais nove inéditas."
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Cazuza",
      "descricao": "Agenor de Miranda Araújo Neto, cantor e compositor carioca, ex-vocalista do Barão Vermelho, morto em 1990."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Cazuza era filho do produtor João Araújo, que comandou por décadas qual gravadora ligada à TV Globo?",
    "resposta": "Som Livre",
    "distratores": [
      "Odeon",
      "Polygram",
      "Continental"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Cazuza",
      "https://pt.wikipedia.org/wiki/Jo%C3%A3o_Ara%C3%BAjo"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Cazuza",
        "situacao": "ok",
        "texto": "Agenor de Miranda Araújo Neto OMC (Rio de Janeiro, 4 de abril de 1958 – Rio de Janeiro, 7 de julho de 1990), mais conhecido como Cazuza, foi um cantor, compositor e poeta brasileiro. Além do reconhecimento por sua aclamada carreira musical, tornou-se um símbolo da luta contra a síndrome da imunodeficiência adquirida (AIDS), que o acometeu e causou sua morte precoce em 1990.\n[…]\nPara evitar que o filho continuasse a manter uma atitude rebelde perante a vida, João Araújo criou um emprego para ele na gravadora Som Livre, da qual foi fundador e presidente. Na Som Livre, Cazuza trabalhou no departamento artístico, onde fez triagem de fitas de novos cantores. Logo depois trabalhou na assessoria de imprensa, onde escreveu releases para divulgar os artistas. No final de 1979 fez um curso de fotografia na Universidade da Califórnia, em Berkeley, nos Estados Unidos.\n[…]\nJuntos convencem o relutante João Araújo a apostar no projeto de seu filho.\n[…]\nNo tampo de mármore do túmulo, seu último grande sucesso, \"O Tempo Não Para\", consta como um epitáfio. Em sua lápide, nada além de sua assinatura com o famoso apelido. Em 30 de novembro de 2013, seu pai e então presidente da Som Livre, João Araújo, morreu depois de uma parada cardíaca, aos 78 anos, e foi enterrado na mesmo lugar que o filho.\n[…]\nCazuza: Uma Prova de Amor (1989; Globo vídeo VHS)\n[…]\nEm apenas dez anos de carreira, Cazuza deixou 126 canções gravadas, 78 inéditas e 34 para outros intérpretes. As canções de Cazuza já foram reinterpretadas pelos mais diversos artistas brasileiros dos mais diversos gêneros musicais. Em 1999, a Som Livre realizou o show Tributo a Cazuza, posteriormente lançando em CD e DVD, do qual participaram Ney Matogrosso, Barão Vermelho, Engenheiros do Hawaii, Kid Abelha, Zélia Duncan, Sandra de Sá, Arnaldo Antunes e Leoni.\n[…]\nCazuza: Segredos de Liquidificador (2019)\n[…]\n«Acervo Cazuza»\n[…]\n«Cazuza». no AllMusic"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jo%C3%A3o_Ara%C3%BAjo",
        "situacao": "desambiguacao",
        "texto": "João Araújo pode referir-se a:\n\nJoão Araújo (empresário), empresário e produtor musical brasileiro;\nJoão Eduardo Farias de Araújo, físico e poeta brasileiro, também conhecido por João Araújo;\nJohnny Araújo, cineasta brasileiro, também conhecido por João Araújo."
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Racionais MC's",
      "descricao": "Grupo de rap paulistano formado em 1988 por Mano Brown, Ice Blue, Edi Rock e KL Jay."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Em 2018, o disco Sobrevivendo no Inferno, dos Racionais, virou leitura obrigatória no vestibular de qual universidade?",
    "resposta": "Unicamp",
    "distratores": [
      "USP",
      "UFRJ",
      "Unesp"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Sobrevivendo_no_Inferno"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Sobrevivendo_no_Inferno",
        "situacao": "ok",
        "texto": "Sobrevivendo no Inferno é o segundo álbum de estúdio do grupo brasileiro de hip-hop Racionais MC's, lançado em 20 de dezembro de 1997. O álbum foi produzido durante um período de mudanças sociopolíticas no Brasil, com a transição do país para políticas neoliberais após décadas de ditadura militar. Essa época foi marcada por um aumento da violência, particularmente em periferias urbanas como São Pa\n[…]\nOs Racionais MC's estava na ativa desde 1988 e já havia conquistado reconhecimento com lançamentos anteriores.\n[…]\nDurante as primeiras gravações do grupo, o acompanhamento musical, composto por samples rítmicos e scratches, transmitia uma sensação de vitalidade e movimento que lembrava uma dança ou festa de rua, mesmo que as letras retratassem as duras realidades sociais da vida na periferia urbana. Sobrevivendo no Inferno foi lançado de forma independente em 20 de dezembro de 1997 pela gravadora independente Cosa Nostra, fundada pelos Racionais MC's.\n[…]\nO álbum foi recebido com aclamação majoritariamente positiva. O jornalista Israel do Vale, do Folha de S.Paulo, avaliou o álbum positivamente, descrevendo Sobrevivendo no Inferno como uma progressão radical na experiência do Racionais MC's e afirmando que o álbum \"radicaliza a experiência de Sobrevivendo no Inferno\". Ele observou como a música do grupo serve tanto como arte quanto como literatura, e como exige a atenção total do ouvinte.\n[…]\nEm 2018, o álbum foi incluído pela Universidade Estadual de Campinas na lista de leituras obrigatórias para o vestibular de 2020, sendo a primeira vez que um álbum musical foi recomendado para este exame. Em 31 de outubro de 2018, o álbum se tornou um livro escrito pelos Racionais MC's, publicado pela Companhia das Letras, contendo fotos inéditas e informações sobre o grupo.\n[…]\n«Sobrevivendo no Inferno». Perfil do álbum em Discos do Brasil"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Olodum",
      "descricao": "Bloco afro e grupo percussivo de Salvador, criado em 1979."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Em 1990, a percussão do Olodum abriu a faixa The Obvious Child, de qual cantor americano?",
    "resposta": "Paul Simon",
    "distratores": [
      "David Byrne",
      "Michael Jackson",
      "Stevie Wonder"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Obvious_Child"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Obvious_Child",
        "situacao": "ok",
        "texto": "\"The Obvious Child\" is a song recorded by American singer-songwriter Paul Simon. It was the lead single from his eighth studio album, The Rhythm of the Saints (1990), released by Warner Bros. Records. Written by Simon, its lyrics explore mortality and aging. The song is accompanied by a performance from Brazilian drumming collective Olodum in a live recording.\n[…]\nThe single, released in September 1990, was commercially successful, performing well on charts worldwide. In the United States, it was mainly successful on the Album Rock Tracks chart, where it peaked at number 21. Outside the US, \"The Obvious Child\" was a top 15 hit in the United Kingdom and the Netherlands. The song received highly positive reviews upon its release. Simon promoted the song alongside Olodum in a performance on Saturday Night Live.\n[…]\nThe song \"The Obvious Child\" [...] sounds like nothing else in contemporary pop. With its juxtaposition of early rock-and-roll and South American percussion that echoes the martial drumbeats on Mr. Simon's 1975 hit, \"Fifty Ways to Leave Your Lover\", it telescopes pop fragments that span more than three decades and three continents into an allusive musical reverie that is beyond generic designation. Even more than on his 1986 masterpiece, the album Graceland, Mr.\n[…]\nGreg Sandow of Entertainment Weekly praised the song's \"confident drums that resound with special exuberant zing\". The pan-European magazine Music & Media thought that the drumming on \"The Obvious Child\" gave the \"fragile song a solid body\". A reviewer for People felt that \"the more exotic musical elements are subsumed by Simon's pretty pop structures [...] You never get the impression that Paul has truly gone native or even considered it.\n[…]\nAll songs written by Paul Simon, except where noted."
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Beth Carvalho",
      "descricao": "Cantora, violonista, cavaquinista e compositora brasileira de samba (1946–2019)."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Em 1997, uma engenheira brasileira da NASA despertou o robô Sojourner, em Marte, com qual samba gravado por Beth Carvalho?",
    "resposta": "Coisinha do Pai",
    "distratores": [
      "Vou Festejar",
      "Andança",
      "Camarão que Dorme"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Coisinha_do_Pai",
      "https://pt.wikipedia.org/wiki/Beth_Carvalho"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Coisinha_do_Pai",
        "situacao": "ok",
        "texto": "Coisinha do Pai é um samba composto por Jorge Aragão, Almir Guineto e Luiz Carlos, que fez sucesso na voz de Beth Carvalho. A música foi lançada no álbum \"Beth Carvalho no Pagode\", de 1979, e logo adentrou nas paradas de sucesso, tocando à exaustão nas rádios.\n[…]\nEm 1997, a música foi gravada por Elba Ramalho e Jair Rodrigues no CD \"Casa de samba 1\". Foi esta versão que, em 1997, foi tocada no espaço sideral, quando a engenheira brasileira da Nasa, Jacqueline Lyra, colocou \"Coisinha do Pai\" para ‘acordar’ o robô Sojourner em Marte.\n[…]\nEm 1998, Beth Carvalho incluiu em seu disco \"Pérolas do pagode\" a composição \"Samba de Marte\", onde os autores, que a composeram especialmente para a cantora, registaram a história de como a música \"Coisinha do pai\" chegou ao planeta Marte."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Beth_Carvalho",
        "situacao": "ok",
        "texto": "Elizabeth \"Beth\" Santos Leal de Carvalho (Rio de Janeiro, 5 de maio de 1946 – Rio de Janeiro, 30 de abril de 2019), foi uma cantora, compositora e instrumentista brasileira. Desde que começou a fazer sucesso, na década de 1970, Beth se tornou uma das maiores intérpretes do samba, ajudando a revelar nomes como Luiz Carlos da Vila, Jorge Aragão, Zeca Pagodinho, Almir Guineto, grupo Fundo de Quintal,\n[…]\nBeth era filha de João Francisco Leal de Carvalho, piauiense, e Maria Nair Santos. Tinha uma única irmã, chamada Vânia Santos Leal de Carvalho. Decidiu seguir a carreira artística após ganhar um violão da mãe. Aos oito anos, ouvia emocionada as canções de Sílvio Caldas, Elizeth Cardoso e Aracy de Almeida, grandes amigos de seu pai, que era advogado. Sua avó paterna, dona Ressu, tocava bandolim e violão. Sua mãe tocava piano clássico. Sua irmã Vânia cantava e gravou discos de samba.\n[…]\nEm 1997, viu a música “Coisinha do Pai”, grande sucesso de seu repertório, ser tocada no espaço sideral, quando a engenheira brasileira da Nasa Jacqueline Lyra, programou para ‘acordar’ o robô em Marte. Beth Carvalho gravou o 25º disco, Pagode de Mesa ao vivo, em apresentação na gravadora Universal Music.\n[…]\nEm 2007, a cantora lançou também pelo selo Andança, o CD/DVD Beth Carvalho canta o Samba da Bahia, com um repertório de sambas de compositores baianos, de diferentes gerações. O DVD foi gravado pela Conspiração Filmes em agosto de 2006, no Teatro Castro Alves, em Salvador. Entre os convidados, estavam Gilberto Gil, Maria Bethânia, Caetano Veloso, Margareth Menezes, Carlinhos Brown, Daniela Mercury, Ivete Sangalo, Olodum, Riachão, Danilo Caymmi, entre outros.\n[…]\n2006 - Beth Carvalho canta o samba da Bahia - Teatro Castro Alves - Salvador, BA\n[…]\n2007 - Beth Carvalho canta o samba da Bahia - Canecão - Rio de Janeiro.\n[…]\n«Beth Carvalho no Dicionário Cravo Albin da Música Popular Brasileira»"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Chico Buarque",
      "descricao": "Francisco Buarque de Hollanda, cantor, compositor e escritor carioca."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Em 1969, temendo a repressão da ditadura, Chico Buarque passou mais de um ano em qual país europeu?",
    "resposta": "Itália",
    "distratores": [
      "França",
      "Portugal",
      "Inglaterra"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Chico_Buarque"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Chico_Buarque",
        "situacao": "ok",
        "texto": "Francisco Buarque de Hollanda OMC • ComIH, mais conhecido como Chico Buarque (Rio de Janeiro, DF, 19 de junho de 1944), é um cantor, compositor, violonista, dramaturgo, escritor e ator brasileiro. É considerado por muitos críticos o maior artista vivo da música brasileira. Sua discografia conta com aproximadamente oitenta obras, entre elas discos-solo, em parceria com outros músicos e compactos.\n[…]\nGanhou destaque como cantor a partir de 1966, quando lançou seu primeiro álbum, Chico Buarque de Hollanda, e venceu o Festival de Música Popular Brasileira com a música A Banda. Autoexilou-se na Itália em 1969, devido à crescente repressão do regime militar do Brasil nos chamados \"anos de chumbo\", tornando-se, ao retornar, em 1970, um dos artistas mais ativos na crítica política e na luta pela democratização no país.\n[…]\nEm 1953, Sérgio Buarque de Holanda, pai do cantor, foi convidado para lecionar na Universidade de Roma. A família Buarque de Hollanda, então, muda-se para a Itália. Chico aprende dois idiomas estrangeiros, na escola fala inglês, e nas ruas, italiano. Nessa época, compõe as suas primeiras marchinhas de Carnaval.\n[…]\nAmeaçado pelo regime militar, esteve autoexilado na Itália em 1969, onde chegou a fazer espetáculos com Toquinho. Nessa época, teve suas canções Apesar de você (que dizem ser uma alusão negativa ao presidente Emílio Garrastazu Médici, mas que Chico sustenta ser em referência à situação) e \"Cálice\" proibidas pela censura brasileira. Adotou o pseudônimo de Julinho da Adelaide, com o qual publicou apenas três canções: Milagre Brasileiro, Acorda amor e Jorge Maravilha.\n[…]\nNa Itália, Chico tornou-se amigo do cantor Lucio Dalla, de quem fez a Minha História, versão em português (1970) da canção Gesù Bambino (título verdadeiro 4 marzo 1943), de Lucio Dalla e Paola Palotino.\n[…]\nChico Buarque no Facebook\n[…]\nChico Buarque no Twitter\n[…]\nChico Buarque no TikTok\n[…]\nChico Buarque no Spotify"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Caetano Veloso",
      "descricao": "Cantor e compositor baiano, um dos criadores do movimento Tropicália."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Os irmãos Caetano Veloso e Maria Bethânia nasceram em qual cidade do Recôncavo Baiano?",
    "resposta": "Santo Amaro da Purificação",
    "distratores": [
      "Cachoeira",
      "São Félix",
      "Feira de Santana"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Caetano_Veloso",
      "https://pt.wikipedia.org/wiki/Maria_Beth%C3%A2nia"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Caetano_Veloso",
        "situacao": "ok",
        "texto": "Caetano Emanuel Viana Teles Veloso (Santo Amaro, 7 de agosto de 1942) é um cantor, músico, compositor, produtor, arranjador e escritor brasileiro. Com uma carreira que ultrapassa seis décadas, Caetano construiu uma obra musical marcada pela releitura e renovação e considerada amplamente como possuidora de grande valor intelectual e poético.\n[…]\nCaetano Veloso nasceu em 7 de agosto de 1942 em Santo Amaro, na Bahia, como o quinto dos sete filhos de José Teles Velloso (1901–1983), o \"Seu Zezinho\", funcionário público da Empresa Brasileira de Correios e Telégrafos, e Claudionor Viana Teles Velloso, mais conhecida como \"Dona Canô\" (1907–2012), casados em 7 de janeiro de 1931. Sua família possui ascendência portuguesa com elementos Afro-brasileiros e indígenas mais precisamente da etnia pataxó por parte de sua bisavó paterna.\n[…]\nNeste mesmo ano, lançou \"Maria Bethânia e Caetano Veloso — ao vivo\", que inicialmente seria concebido apenas na cidade natal para levantar fundos para a recuperação da catedral local, mas acabou sendo levado a várias cidades brasileiras. No ano seguinte, lançou o elogiado \"Cinema Transcendental\", cujo título era extraído da canção \"Trilhos urbanos\", no repertório.\n[…]\nO relacionamento dos dois durou de 1986 a 2004. Paula Lavigne trabalha como empresária de Caetano, e afirma ter feito o rendimento dele multiplicar por dez. O casal tem dois filhos, Zeca Veloso e Tom Veloso. Após o divórcio, ambos mantiveram uma postura amigável e ela continuou sendo empresária de Caetano. Se reconciliaram em fevereiro de 2016.\n[…]\nMorais Junior, Luís Carlos de (2004). Crisólogo. O estudante de poesia Caetano Veloso. Rio de Janeiro: HP Comunicação\n[…]\nCaetano Veloso no Instagram\n[…]\nCaetano Veloso no Facebook\n[…]\nCaetano Veloso no Twitter\n[…]\nCaetano Veloso no TikTok\n[…]\nCaetano Veloso no IMDb\n[…]\nCaetano Velosono Spotify\n[…]\nCanal de Caetano Veloso no YouTube"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Maria_Beth%C3%A2nia",
        "situacao": "ok",
        "texto": "Maria Bethânia Vianna Telles Velloso (Santo Amaro, 18 de junho de 1946) é uma cantora e compositora brasileira. Natural de Santo Amaro, Bahia, iniciou sua carreira no Rio de Janeiro em 1964 com o espetáculo \"Opinião\", sendo considerada \"A Rainha da Música Brasileira\". Bethânia é irmã do cantor e compositor Caetano Veloso e da escritora e compositora Mabel Velloso, além de ser tia dos cantores Belô\n[…]\nMaria Bethânia Viana Teles Veloso nasceu em 18 de junho de 1946 na cidade de Santo Amaro na Bahia. Maria Bethânia é a sexta filha de José Teles Veloso (Seu Zezinho), funcionário público dos Correios, e da funcionária do lar Claudionor Viana Teles Velloso mais conhecida como \"Dona Canô\" (1907–2012), casados em 7 de janeiro de 1931. Descende de uma família de origem portuguesa, afro-brasileira e indígena, mais precisamente da etnia pataxó, por parte de sua bisavó paterna.\n[…]\nNo mesmo ano, Bethânia participou dos shows Nova Bossa Velha, Velha Bossa Nova e Mora na Filosofia.\n[…]\nO disco contou com a participação especial da mãe, Canô Veloso, Gilberto Gil (violão e voz) e Nair de Cândia, nas respectivas faixas \"Ladainha de Nossa Senhora\", \"Mãe de Deus das Candeias\" e uma versão em latim da Ave Maria. Bethânia também atua em direções, com a direção de vários artistas, entre eles o irmão Caetano Veloso e Alcione.\n[…]\nLançou em 2007 pela Biscoito Fino o DVD duplo que contempla dois documentários sobre a artista: Pedrinha de Aruanda e Bethânia Bem de Perto. Este primeiro é um registro da intimidade da cantora e tem com ponto de partida a comemoração do seu aniversário de sessenta anos, celebrados durante uma apresentação em Salvador e uma missa em Santo Amaro, sua cidade natal, em 2006. Ainda em 2007, é a maior vencedora do Prêmio TIM, dividindo o protagonismo do prêmio com Marisa Monte.\n[…]\nOmara & Bethânia - Cuba & Bahia (2008)\n[…]\nMaria Bethânia no Instagram\n[…]\nMaria Bethânia no IMDb\n[…]\nMaria Bethânia no Spotify"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Carmen Miranda",
      "descricao": "Cantora e atriz luso-brasileira famosa pelos turbantes de frutas em Hollywood"
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Símbolo do Brasil em Hollywood, com seus turbantes de frutas, Carmen Miranda nasceu em qual país?",
    "resposta": "Portugal",
    "distratores": [
      "Brasil",
      "Espanha",
      "Argentina"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Carmen_Miranda"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Carmen_Miranda",
        "situacao": "ok",
        "texto": "Maria do Carmo Miranda da Cunha (Marco de Canaveses, 9 de fevereiro de 1909 – Beverly Hills, 5 de agosto de 1955), mais conhecida como Carmen Miranda, foi uma cantora, dançarina, e atriz luso-brasileira. Sua carreira artística transcorreu no Brasil e nos Estados Unidos entre as décadas de 1930 e 1950. Trabalhou no rádio, no teatro de revista, no cinema e na televisão.\n[…]\n2003 - \"O melhor de Carmen Miranda\"\n[…]\nA escolha de Miranda para representar a edição de 2009 refletiu seu simbolismo de alegria e seu papel na representação do espírito brasileiro na temática dos desfiles.Nesse mesmo ano, a gravação de \"O Que É que a Baiana Tem?\", interpretada por Carmen Miranda e composta por Dorival Caymmi, foi selecionada para preservação em um arquivo sonoro especial da Biblioteca do Congresso dos EUA, sublinhando sua importância histórica e cultural.\n[…]\nEm 2015, o grupo português Real Combo Lisbonense lançou o álbum Saudade De Você, pela Pataca Discos, que apresenta interpretações de algumas das canções mais conhecidas de Carmen Miranda, celebrando sua música e legado.\n[…]\nSegundo o músico brasileiro Caetano Veloso, \"Carmen Miranda foi inicialmente uma causa tanto de orgulho quanto de vergonha, e mais tarde, um símbolo que inspirou o olhar implacável que começamos a lançar sobre nós mesmos...\n[…]\nDesde sua morte, Carmen Miranda é lembrada como uma artista brasileira importante e uma das mais influentes em Hollywood. Ela foi uma das 500 estrelas indicadas para a lista das 50 maiores lendas do cinema do American Film Institute.\n[…]\nEm 25 de setembro de 1998, uma praça em Hollywood foi nomeada Praça Carmen Miranda em uma cerimônia presidida pelo prefeito honorário de Hollywood, Johnny Grant (um dos amigos de Miranda desde a Segunda Guerra Mundial), e contou com a presença do cônsul-geral do Brasil, Jorió Gama, e de antigos integrantes do grupo Bando da Lua.\n[…]\nCarmen Miranda no IMDb"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Anitta",
      "descricao": "Larissa de Macedo Machado, cantora carioca de funk e pop."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Antes da fama internacional, a cantora Anitta cresceu em qual bairro do subúrbio carioca?",
    "resposta": "Honório Gurgel",
    "distratores": [
      "Madureira",
      "Bangu",
      "Realengo"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Anitta_(cantora)"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Anitta_(cantora)",
        "situacao": "ok",
        "texto": "Larissa de Macedo Machado (Rio de Janeiro, 30 de março de 1993), mais conhecida pelo nome artístico Anitta, é uma cantora, compositora, atriz e empresária brasileira. Uma das artistas mais proeminentes do Brasil, tornou-se conhecida por seu estilo versátil e por misturar gêneros como pop, funk brasileiro, reggaeton e música eletrônica.\n[…]\nEla começou a cantar aos sete anos de idade em um coral de uma igreja católica no bairro de Honório Gurgel, no Rio de Janeiro; na mesma época ela fez aulas de dança de salão e chegou a dar aulas como professora de dança, e até hoje se aproveita de sua habilidade como dançarina em seus shows e videoclipes, embora tenha trocado a dança de salão pelo stiletto, a dança do salto alto, chegando a ter a música \"Bang\" no game Just Dance 2017.\n[…]\nAnitta nasceu em Honório Gurgel, no Rio de Janeiro, Brasil, em 30 de março de 1993. Ela é a filha mais nova da artesã paraibana Miriam Macedo com o vendedor mineiro Mauro Machado. Seu irmão, Renan Machado, trabalha como seu produtor artístico. Seu pai divorciou-se de sua mãe Miriam quando Anitta ainda era pequena. Começou a carreira aos 8 anos de idade cantando no coral da Igreja Santa Luzia, no bairro Honório Gurgel, no Rio de Janeiro, por intervenção de seus avós maternos.\n[…]\nEm 6 de julho, a cantora argentina Tini lançou \"La Loto\", uma colaboração com Anitta e a cantora americana Becky G.\n[…]\nEm 2016, foi indicada pela terceira vez ao EMA, vencendo na categoria de \"Melhor Artista Brasileiro\". Ela concorreu com os cantores Tiago Iorc, Ludmilla, Karol Conká e Projota. O resultado da premiação foi revelado no dia 6 de novembro em Roterdã, na Holanda. Em novembro de 2017, na sétima edição do prêmio Men of the Year, concedido pela revista masculina GQ, Anitta foi eleita a Mulher do Ano por conta de sua projeção no cenário musical internacional.\n[…]\nAnitta (2013)"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Novos Baianos",
      "descricao": "Grupo musical baiano dos anos 1970 que misturou samba, choro, frevo e rock."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "No começo dos anos setenta, os Novos Baianos viveram em comunidade num sítio de qual bairro carioca?",
    "resposta": "Jacarepaguá",
    "distratores": [
      "Santa Teresa",
      "Vila Isabel",
      "Ilha do Governador"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Novos_Baianos"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Novos_Baianos",
        "situacao": "ok",
        "texto": "Novos Baianos é uma banda  brasileira de Rock e MPB originário da Bahia, ativo em seu auge entre os anos de 1969 e 1979, que se reuniu em 1990, 1996, 2015 e 2023.\n[…]\nEm 1971 lançaram compacto Novos Baianos com o single \"Dê um Rolê\", no mesmo ano gravaram o segundo compacto simples, \"Volta que o Mundo dá\", e receberam a visita de João Gilberto, que viria a influenciá-los com o samba.\n[…]\nCom a grande fusão de gêneros brasileiros, sugerida por João Gilberto e a guitarra de Pepeu Gomes, surgiu o mais consistente e lembrado disco do grupo, Acabou Chorare, pela Som Livre; o álbum foi considerado o melhor da música popular brasileira pela revista Rolling Stone em sua Lista dos 100 maiores discos da música brasileira.Em Vargem Grande, na época uma localidade de Jacarepaguá, alugaram um sítio apelidado de \"Cantinho do Vovô\". Viviam de forma quase anárquica em pleno regime militar.\n[…]\nEm março de 2017, realizaram a gravação de seu primeiro DVD, no Metropolitan, no Rio, onde Acabou Chorare foi tocado na íntegra. Para viabilizar o lançamento do DVD, os Novos Baianos assinaram contrato com a Som Livre. O CD e DVD ao vivo Novos Baianos Acabou Chorare – Novos Baianos Se Encontram foi lançado no segundo semestre do mesmo ano.\n[…]\nA turnê \"Acabou Chorare - Novos Baianos Se Encontram\" terminou em 2018.\n[…]\nEm novembro de 2019, estreia o musical Novos Baianos, com direção sonora de Davi Moraes e Pedro Baby.\n[…]\n1973 – Novos Baianos F.C. (Continental)\n[…]\n1974 – Novos Baianos (Continental)\n[…]\n2017 – Acabou Chorare - Novos Baianos Se Encontram (Som Livre)\n[…]\nNovos Baianos no Facebook\n[…]\nNovos Baianos no Instagram\n[…]\nNovos Baianos no Twitter\n[…]\nCanal de Novos Baianos no YouTube"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Jorge Ben Jor",
      "descricao": "Cantor e compositor brasileiro de samba-rock, autor de Mas Que Nada."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "No fim dos anos oitenta, Jorge Ben virou Jorge Ben Jor, em parte para evitar confusão com qual músico americano?",
    "resposta": "George Benson",
    "distratores": [
      "George Duke",
      "Ben E. King",
      "Tony Bennett"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Jorge_Ben_Jor",
      "https://pt.wikipedia.org/wiki/Jorge_Ben_Jor"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Jorge_Ben_Jor",
        "situacao": "ok",
        "texto": "Jorge Duílio Lima Menezes (born March 22, 1939) is a Brazilian popular musician, performing under the stage name Jorge Ben Jor since the 1980s, though commonly known by his former stage name Jorge Ben (Brazilian Portuguese: [ˌʒɔʁʒi ˈbẽj]). Performing in a samba style that also explored soul, funk, rock and bossa nova sounds, Ben has recorded such well-known songs as \"Chove Chuva\", \"Mas Que Nada\", \n[…]\nIn 1989, Jorge changed his recording label as well as his artistic name, becoming Jorge Benjor (or Jorge Ben Jor). At the time, it was said that there were numerous reasons for his change in name; other sources say it was in response to an incident where some of his royalties accidentally went to American guitarist George Benson.\n[…]\nAn estimated 3 million people attended Jorge's New Year's Eve open concert in 1993.\n[…]\nIn 2012, Jorge was included in an unranked list of Rolling Stone Brasil's of the 30 greatest guitarists of the country.\n[…]\nJorge was a participant in the 2016 Summer Olympics opening ceremony.\n[…]\nIn 2025, Jorge was ordered to pay R$977,000 to a former collaborator.\n[…]\nJorge Ben married Domingas Terezinha in 1971. They have two children. Since 2018, he has resided at the Copacabana Palace due to his home being destroyed in a flood.\n[…]\n1969: Jorge Ben\n[…]\n1975: Jorge Ben à l'Olympia\n[…]\n1975: Gil e Jorge (with Gilberto Gil)\n[…]\n2002: Acústico MTV – Double CD release, available jointly or separately, consisting of Admiral Jorge V and Banda do Zé Pretinho\n[…]\n2010: Salve Jorge! Inéditas e Raridades\n[…]\nCaz, Greg (December 15, 2011). \"Brute Force: A Look At Jorge Ben's Recorded Work\". Revive. Archived from the original on September 24, 2018. Retrieved September 23, 2018.\n[…]\n'Brazil's alchemist of funk' – 2004 interview with Jorge Ben Jor (in English)\n[…]\n1996 interview with Jorge Ben Jor from Brazilian Music Up to Date (in English and Portuguese)\n[…]\nJorge Ben discography on Slipcue.com\n[…]\nJorge Ben profiled by Bobby Brazuka"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jorge_Ben_Jor",
        "situacao": "ok",
        "texto": "Jorge Duílio Lima Menezes (Rio de Janeiro, 22 de março de 1939), mais conhecido como Jorge Ben (AFI: [ˌʒɔʁʒi ˈbẽj̃]) ou Jorge Ben Jor, é um cantor, compositor e músico brasileiro. Em 2008, a revista Rolling Stone Brasil o nomeou como o 5.º maior artista da história da música brasileira. Foi incluído na lista dos 30 maiores ícones brasileiros da guitarra e do violão, também pela Rolling Stone Brasi\n[…]\nDe um modo geral, a imprensa contestou a afirmação, apresentando tanto incongruências com entrevistas dadas no início da carreira, quanto a improbabilidade de Jorge ter lançado seu primeiro disco, Samba Esquema Novo, aos dezoito anos ou de ter feito parte da Turma do Divino com Tim Maia, Roberto Carlos e Erasmo Carlos, que haviam nascido no início da década de 1940.\n[…]\nFinalmente, em novembro de 2020, foi lançado o livro África Brasil – Um dia Jorge Ben voou para toda a gente ver, que analisa o álbum África Brasil — considerado um divisor na carreira do músico. A autora, a jornalista musical Kamille Viola, após extensa pesquisa nos registros civis, encontrou uma certidão de nascimento que confirma a data de 22 de março de 1939 como sendo a correta.\n[…]\nNa década seguinte, Jorge Ben dedicou-se a divulgar suas músicas no exterior. Em 1989, ele mudou o nome artístico de Jorge Ben para Jorge Benjor, logo depois alterado para Jorge Ben Jor. Na época, foi especulado que a mudança teria sido provocada pela numerologia, mas o mais plausível é que tenha ocorrido para evitar confusões com o músico americano George Benson, pois Jorge Ben estava começando a se tornar muito conhecido nos Estados Unidos na época.\n[…]\n1965 - \"Agora Ninguém Chora Mais\" / \"George Well\" (Philips 365.089)\n[…]\n2009 - \"Ogum\" (Zeca Pagodinho com Jorge Ben Jor) (Promo Airplay Universal)\n[…]\n2012 - \"Quero Toda Noite\" (Fiuk com Jorge Ben Jor) (Warner 5052498895625)\n[…]\nJorge Ben Jor no Facebook\n[…]\nJorge Ben Jor no Instagram\n[…]\nJorge Ben Jor no Twitter"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Noel Rosa",
      "descricao": "Sambista e compositor carioca dos anos 1930, autor de Conversa de Botequim e Feitiço da Vila."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "O queixo afundado de Noel Rosa foi causado por um acidente, na hora do parto, com qual instrumento médico?",
    "resposta": "Fórceps",
    "distratores": [
      "Bisturi",
      "Tesoura cirúrgica",
      "Espéculo"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Noel_Rosa"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Noel_Rosa",
        "situacao": "ok",
        "texto": "Noel de Medeiros Rosa (Rio de Janeiro, 11 de dezembro de 1910 – Rio de Janeiro, 4 de maio de 1937) foi um sambista, cantor, compositor, bandolinista e violonista brasileiro, considerado um dos mais importantes artistas da música no Brasil.\n[…]\nFilho do mineiro Manuel de Medeiros Rosa (1880-1935) e da carioca Marta Correia de Azevedo (1889-1940), Noel nasceu de um parto muito difícil e complicado, que incluiu o uso de fórceps pelo médico obstetra como medida para salvar as vidas da mãe e bebê. O instrumento fraturou sua mandíbula, deformando sua face.\n[…]\nO próprio Ricardo Van Steen, realizador de Noel - Poeta da Vila, dirigiu um curta-metragem, Com Que Roupa? (1997), com Cacá Carvalho no papel do compositor.\n[…]\nE, em 1999, André Sampaio realiza uma ficção experimental, Polêmica, a partir da famosa polêmica musical entre Noel Rosa e Wilson Batista.\n[…]\nAntes de ser tema de filmes, a música de Noel Rosa esteve presente em vários filmes brasileiros.\n[…]\nEnquanto ainda era vivo: na comédia musical Alô, Alô, Carnaval, de Adhemar Gonzaga (produção Cinédia — 1936), duas marchas de carnaval de Noel Rosa estavam em sua trilha sonora: Pierrot Apaixonado (parceria com Heitor dos Prazeres) e Não Resta a Menor Dúvida (parceria com Hervé Cordovil).\n[…]\nEm 2010, cem anos depois do seu nascimento, o GRES Unidos de Vila Isabel, escola de samba sediada na Zona Norte do Rio de Janeiro, no bairro de Vila Isabel, levou Noel Rosa como seu enredo do carnaval de 2010. Fez-se um desfile em sua homenagem, com o samba intitulado Noel: A Presença do \"Poeta da Vila\", de autoria do compositor Martinho da Vila. O desfile realizado pela Unidos de Vila Isabel ocorreu na segunda-feira de carnaval, dia 15 de fevereiro de 2010.\n[…]\nNoel Rosa compôs 259 canções:"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Herbert Vianna",
      "descricao": "Cantor, guitarrista e compositor brasileiro, líder dos Paralamas do Sucesso, nascido em João Pessoa em 1961."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Em 2001, Herbert Vianna ficou paraplégico após a queda de que tipo de aeronave que ele mesmo pilotava?",
    "resposta": "Ultraleve",
    "distratores": [
      "Helicóptero",
      "Planador",
      "Jatinho executivo"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Herbert_Vianna"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Herbert_Vianna",
        "situacao": "ok",
        "texto": "Herbert Lemos de Souza Vianna (João Pessoa, 4 de maio de 1961) é um cantor, compositor e músico brasileiro. É o vocalista, guitarrista e principal compositor do grupo Os Paralamas do Sucesso, um dos grupos-base do rock brasileiro surgido na década de 1980. Foi considerado um dos 30 maiores ícones brasileiros da guitarra e do violão pela revista Rolling Stone Brasil\n[…]\nHerbert é irmão do antropólogo e pesquisador cultural Hermano Vianna.\n[…]\nSeu quarto disco solo, Victoria, de 2012, consiste em músicas que Herbert compôs para outros artistas.\n[…]\nHerbert namorou por anos Paula Toller, do Kid Abelha, até 1984, e posteriormente casou-se com a jornalista inglesa Lucy Needham, com quem teve os filhos Luca, Hope Izabel e Phoebe Rita.\n[…]\nDesde cedo, Herbert gostava de pilotar helicópteros e ultraleves. No dia 4 de fevereiro de 2001, Vianna e sua esposa viajaram para a casa de Dado Villa-Lobos para comemorarem o aniversário de sua esposa. Enquanto sobrevoavam a casa de Dado, o avião caiu, mergulhando no mar durante uma tentativa do cantor de executar um looping. Lucy Needham-Vianna, esposa de Herbert, morreu afogada no local.\n[…]\nO músico ficou internado durante 44 dias, parte deles em estado de coma e ficou paraplégico, além de perder parcialmente a memória. Como é poliglota, comunicava-se no hospital em inglês e francês, até que se lembrasse do português novamente. O artista moveu uma ação indenizatória contra o fabricante da aeronave, alegando que houve uma falha de fabricação na cauda do ultraleve.\n[…]\nO Instituto Tecnológico de Aeronáutica (ITA) periciou uma aeronave do mesmo fabricante, similar à que Herbert pilotava, e confirmou que o material utilizado na cauda sofria degradação quando exposto a temperatura superior a 40 °C. O fabricante admitiu a falha e ofereceu uma indenização de R$ 400 mil.\n[…]\nHerbert Vianna no Facebook\n[…]\nHerbert Vianna no Instagram"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Trem das Onze",
      "descricao": "Samba de Adoniran Barbosa lançado em 1964, popularizado pelos Demônios da Garoa."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Em Trem das Onze, além do horário do último trem, que outro motivo o narrador dá para ir embora?",
    "resposta": "A mãe não dorme",
    "distratores": [
      "Trabalha bem cedo",
      "A esposa o espera",
      "Está sem dinheiro"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Trem_das_Onze"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Trem_das_Onze",
        "situacao": "ok",
        "texto": "\"Trem das Onze\" é o samba-canção mais famoso do compositor paulista Adoniran Barbosa, projetando-se enquanto compositor de alcance nacional. Obra musical popularizada pelo grupo Demônios da Garoa, cuja gravação foi realizada em 1964 narra a visão do sambista em relação à cidade e suas transformações. Aliado às relações sociais expressas no contexto metropolitano.\n[…]\nEmbora morasse no município de Santo André na época, o compositor preferiu escrever Jaçanã, pois rimava melhor com a palavra \"manhã\".\n[…]\nEm 1974, Adoniran gravou seu primeiro LP com \"Trem das Onze\" no repertório, consagrando em definitivo a canção com sua voz e sotaque “ítalo-paulista”.\n[…]\nMati Kaspi - (1987) - https://he.wikipedia.org/wiki/Trem_das_Onze"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Desafinado",
      "descricao": "Canção de bossa nova de Tom Jobim e Newton Mendonça, gravada por João Gilberto em 1959."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Desafinado, canção que virou uma espécie de manifesto da bossa nova, foi composta por Tom Jobim e por qual pianista?",
    "resposta": "Newton Mendonça",
    "distratores": [
      "Johnny Alf",
      "João Donato",
      "Luiz Eça"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Desafinado",
      "https://en.wikipedia.org/wiki/Desafinado"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Desafinado",
        "situacao": "ok",
        "texto": "\"Desafinado\" é uma canção do gênero bossa nova composta por Antônio Carlos Jobim e Newton Mendonça e gravada por João Gilberto em 10 de novembro de 1958, nos Estúdios Odeon, no Rio de Janeiro. A canção seria lançada em fevereiro de 1959 como um single pela gravadora EMI-Odeon e incluída em seu álbum de estreia, Chega de Saudade, lançado na segunda semana de março daquele ano. É considerada uma das\n[…]\nA canção é uma resposta à crítica da época, que considerava a bossa nova como \"música para cantores desafinados\". A canção foi posteriormente gravada por diversos artistas, incluindo Antônio Carlos Jobim, Herb Alpert, Nara Leão , Ella Fitzgerald e Stan Getz que, em 1963, ganhou o Grammy de Melhor Performance de Jazz por um Solista ou Grupo Pequeno pela canção. Duas adaptações da canção para a língua inglesa foram realizadas: \"Slightly Out of Tune\", por Jon Hendricks e \"Off Key\", por Gene Lees."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Desafinado",
        "situacao": "ok",
        "texto": "\"Desafinado\" (a Portuguese word usually rendered into English as either \"Out of Tune\" or \"Off Key\") is a 1959 bossa nova song and jazz standard composed by Antônio Carlos Jobim with lyrics (in Portuguese) by Newton Mendonça.\n[…]\n\"Desafinado\" was a response to critics who claimed that the bossa nova genre was created for singers who cannot sing. The song has more than one English-language adaptation. Jon Hendricks, along with The Richmond Organisation (credited under the pseudonym \"Jessie Cavanaugh\"), created lyrics that employ consonance to reframe the concept as a love song about lovers who have fallen \"slightly out of tune\".\n[…]\nHendricks's lyrics were recorded by Ella Fitzgerald on her 1962 single, and by Perry Como on his 1963 album, The Songs I Love. Gene Lees's English version, which (though not a direct translation) is more closely aligned with Mendonça's original, appears on some recordings.\n[…]\nList of bossa nova standards"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Manguebeat",
      "descricao": "Movimento musical dos anos 1990 que misturou maracatu, rock, hip hop e funk, liderado por Chico Science."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Que vocalista da banda Mundo Livre escreveu o manifesto Caranguejos com Cérebro, de 1992, marco do manguebeat?",
    "resposta": "Fred Zero Quatro",
    "distratores": [
      "Jorge du Peixe",
      "Lenine",
      "Lula Queiroga"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Manguebeat"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Manguebeat",
        "situacao": "ok",
        "texto": "Manguebeat (também grafado como manguebit ou mangue beat) é um movimento de contracultura brasileiro. Surgiu a partir de 1991, na cidade de Recife, e se destaca pela combinação original de diversos gêneros musicais, unindo ritmos regionais, como o maracatu, o rock, o hip hop, o funk e a música eletrônica.\n[…]\nÉ representado por um caranguejo, animal típico dos mangues e fonte de alimentação para as comunidades locais, sendo o início do movimento marcado pelo manifesto Caranguejos com Cérebro — é interessante observar que no manifesto, a imagem símbolo descrita pelo seu autor, Fred Zero Quatro, é uma antena parabólica enfiada na lama e não um caranguejo). Alcançou sucesso internacional com a banda Chico Science & Nação Zumbi.\n[…]\nO termo \"Manguebit\" foi utilizado pela primeira vez em 1992, por Fred Zero Quatro, como nome de uma faixa lançada por sua banda, Mundo Livre S/A, e composta em resposta a \"Manguetown\", de Chico Science & Nação Zumbi. Quando elaborou o termo, Fred Zero Quatro já pensava em gerar confusão entre os termos bit e beat, mas não tinha como objetivo dar este nome ao movimento.\n[…]\nFred Zero Quatro falaria sobre este \"ciclo do caranguejo\" e seu eventual colapso em Sob o Calçamento, presente no álbum Samba Esquema Noise, enquanto Chico Science abordaria a dinâmica em Manguetown, lançada no álbum de 1996, Afrociberdelia, mas já performada em shows da Nação Zumbi desde antes de seu álbum de estreia.\n[…]\nEm 2022, Zero Quatro declarou que uma atualização do Manifesto dos Caranguejos com Cérebro deveria trazer uma crítica à hegemonia dos algoritmos, a todo tipo de fundamentalismo tecnológico e às fake news. O álbum Walking Dead Folia traz em suas músicas críticas aos avanços da tecnologia, ao agronegócio no Brasil e à gestão de Jair Bolsonaro durante a pandemia de COVID-19 no Brasil"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "O Que É Que a Baiana Tem?",
      "descricao": "Samba de Dorival Caymmi de 1939, lançado por Carmen Miranda no filme Banana da Terra."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Vestida de baiana, Carmen Miranda cantou O Que É Que a Baiana Tem no filme Banana da Terra, de 1939. Quem compôs?",
    "resposta": "Dorival Caymmi",
    "distratores": [
      "Ary Barroso",
      "Assis Valente",
      "Lamartine Babo"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Banana_da_Terra",
      "https://pt.wikipedia.org/wiki/Dorival_Caymmi"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Banana_da_Terra",
        "situacao": "ok",
        "texto": "Banana da Terra é um filme musical brasileiro lançado em 1939, produzido por Wallace Downey e dirigido por Ruy Costa, também conhecido pelos pseudônimos Jaime Rui e E. Sá. O filme é notável por ser a última aparição de Carmen Miranda no cinema brasileiro. O roteiro foi escrito por João de Barro e Mário Lago.\n[…]\nAo que se sabe, não há cópias preservadas do filme, e o único segmento conhecido atualmente é o número musical  \"O que é que a baiana tem?\", interpretado por Carmen Miranda.\n[…]\nNeste filme, Carmen Miranda aparece pela primeira vez vestida de baiana, interpretando a icônica canção \"O que é que a baiana tem?\". A inclusão dessa música foi crucial para consolidar Dorival Caymmi como um grande compositor e marcou o início de sua trajetória de prestígio tanto no Brasil quanto no exterior. Além disso, a canção inspirou o figurino mais famoso da atriz, que é diretamente baseado nos versos de Caymmi.\n[…]\nCuriosamente, \"O que é que a baiana tem?\" foi escolhida para o filme após Ary Barroso solicitar um valor elevado para liberar o samba “Na Baixa do Sapateiro”, que originalmente deveria ser cantado por Carmen.\n[…]\nO que é que a Baiana Tem? — interpretada por Carmen Miranda (de Dorival Caymmi)\n[…]\nUma reportagem publicada em O Globo em 17 de fevereiro de 1939 afirmou que o filme \"Banana da Terra\" estava obtendo um sucesso sem precedentes na sala do Metro-Passeio. Destacou duas atrações: a dança do \"Pirulito\" e o impressionante samba de Carmen Miranda, \"O que é que a Baiana tem?\", que foi considerado o grande samba do ano. O texto elogiou a performance de Almirante e Carmen, descrevendo-a como uma deliciosa invenção, enquanto ressaltou a notabilidade e expressividade do samba.\n[…]\nBanana-da-terra\n[…]\nBanana da Terra (em português) no Cinema Clássico\n[…]\nBanana da Terra (em português) na Cinemateca Brasileira"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dorival_Caymmi",
        "situacao": "ok",
        "texto": "Dorival Caymmi (Salvador, 30 de abril de 1914 – Rio de Janeiro, 16 de agosto de 2008) foi um cantor, compositor, instrumentista, poeta, pintor e ator brasileiro.\n[…]\nFoi apresentado ao diretor da Rádio Tupi, e, em 24 de junho de 1938, estreou na rádio cantando duas composições, embora ainda sem contrato. Saiu-se bem como calouro e iniciou a cantar dois dias por semana, além de participar do programa Dragão da Rua Larga. Neste programa, interpretou O que é que a Baiana Tem?, composta em 1938. Com a canção, fez com que Carmen Miranda tivesse uma carreira no exterior, a partir do filme Banana da Terra, de 1938.\n[…]\nEm 1986, a Escola de Samba Estação Primeira de Mangueira apresentou o enredo \"Caymmi mostra ao Mundo o que a Bahia e a Mangueira tem\". Nesse desfile, com um belo samba a Estação Primeira de Mangueira conquistou o principal título do Carnaval Carioca. Em 2014 foi homenageado pela Escola de Samba Águia de Ouro, que apresentou o enredo: \"A Velha Bahia apresenta o centenário do poeta cancioneiro Dorival Caymmi\" homenageando o centenário de Dorival Caymmi.\n[…]\nApesar das produções anteriores, as composições de Caymmi são as mais lembradas sobre a cultura baiana.\n[…]\nEm sua homenagem, o Governador da Bahia, Jaques Wagner (PT) e o Governador do Rio de Janeiro, Sérgio Cabral Filho (PMDB), decretaram luto oficial de três dias em seus estados. O então Presidente da República, Lula (PT), escreveu uma nota de pesar em homenagem ao músico: \"Dorival Caymmi é um dos fundadores da música popular brasileira, patriarca de uma linhagem de músicos de talento. Suas canções praieiras e seus sambas-canção são patrimônio da cultura nacional.\n[…]\nDorival Caymmi no IMDb"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "País Tropical",
      "descricao": "Canção de Jorge Ben de 1969, sucesso na voz de Wilson Simonal, do verso moro num país tropical."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "País Tropical, a do abençoado por Deus e bonito por natureza, estourou na voz de Wilson Simonal. Quem a compôs?",
    "resposta": "Jorge Ben Jor",
    "distratores": [
      "Tim Maia",
      "Erasmo Carlos",
      "Carlos Imperial"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Pa%C3%ADs_Tropical"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Pa%C3%ADs_Tropical",
        "situacao": "ok",
        "texto": "\"País Tropical\" é uma canção composta pelo cantor e compositor brasileiro Jorge Ben. A canção foi gravada originalmente pelo cantor Wilson Simonal, em 22 de julho de 1969 e lançada no mês seguinte, tornando-se o maior sucesso de sua carreira. Em dezembro daquele ano viriam a versão de Gal Costa, no álbum Gal, e a do compositor, para seu álbum homônimo.\n[…]\nEm julho de 1969, Jorge Ben levou Wilson Simonal, seu amigo, para um show de Gal Costa, com quem o primeiro estava tendo um caso. Naquela apresentação, Gal cantou \"País Tropical\" e Wilson Simonal adorou a música, descobrindo com o seu amigo que ela já estava prometida para ser gravada pela cantora baiana.\n[…]\nChegando lá, o cantor fez Jorge Ben mostrar a música para César que bolou o arranjo em cima da reorganização que o próprio Simonal havia feito, retirando estrofes inteiras e incluindo um bis no qual apenas as primeiras sílabas das palavras eram pronunciadas: assim, \"Moro num país tropical\" virou \"Mó' num pa' tropi\".\n[…]\nLançada em agosto de 1969, rapidamente a canção tornou-se um enorme sucesso casando com o clima de ufanismo que o regime militar utiliza em sua propaganda no país. Isso acabaria corroborando, futuramente, para a fama de delator que o cantor teria no futuro, embora o mesmo não tenha acontecido com Jorge Ben. A música seria tema de uma sátira de Juca Chaves, intitulada \"Paris Tropical\" e que geraria a tréplica de Jorge Ben, gravada por Simonal como \"Resposta\".\n[…]\nComposta exclusivamente por Jorge Ben, a canção foi lançada como parte de seu álbum homônimo Jorge Ben, um dos álbuns de maior sucesso do cantor. Com o passar dos anos, a canção tornou-se o maior sucesso da carreira de Jorge Ben.\n[…]\nAo ser lançada às rádios, a canção recebeu uma edição externa, na qual foi destacada apenas País Tropical para ser lançada."
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
    "pergunta": "Junto com a baqueta, o tocador de berimbau segura um pequeno chocalho de palha trançada. Como ele se chama?",
    "resposta": "Caxixi",
    "distratores": [
      "Agogô",
      "Ganzá",
      "Xequerê"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Berimbau",
      "https://pt.wikipedia.org/wiki/Caxixi"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Berimbau",
        "situacao": "ok",
        "texto": "O berimbau(português brasileiro) ou hungo(português angolano) é um instrumento de corda com origem em Angola e tradicional da Bahia.\n[…]\nO tocador de hungo usa a mão esquerda para sustentar o conjunto e pratica um movimentos de vai e vem contra o ventre, utilizando uma pedra ou uma moeda (dobrão), para pressionar o fio. A mão direita, com uma varinha, percute a corda. É usado, também, o caxixi, que é um pequeno chocalho preso aos dedos do tocador.\n[…]\nNa capoeira, até três berimbaus podem ser tocados conjuntamente, cada um com uma função mais ou menos definida.\n[…]\nEm 1826, o artista francês Jean-Baptiste Debret retratou um tocador de berimbau em \"Joueur d'Uruncungo\".\n[…]\nAs variações dos toques (ritmos) do berimbau são inúmeras, entre elas:\n[…]\nSão Bento Pequeno (ou Angola Invertido): similar ao Angola, mas com os tons altos e baixos invertidos ; geralmente tocado com o berimbau médio, enquanto se toca o toque Angola no berimbau mais grave.\n[…]\nSegura-se o berimbau com uma das mãos, à altura da cabaça; com a mesma mão, segura-se a moeda ou uma pedra de areia lavada que, durante o toque do instrumento, será, várias vezes, pressionada contra o arame, de forma a modificar o tom do berimbau. A cabaça posiciona-se à altura do abdome do tocador, pois este modifica-lhe o som, quando aproxima ou afasta a cabaça de seu corpo.\n[…]\nCom a vareta na outra mão, executam-se as batidas no arame; e, na mesma mão da vareta, o tocador segura o caxixi, de forma a preencher o som da batida da vareta com o som do caxixi: uma espécie de chocalho.\n[…]\nComo surgiu o berimbau?, na revista Superinteressante.\n[…]\nBeat! Percussion Fever. \"Berimbau\""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Caxixi",
        "situacao": "ok",
        "texto": "O caxixi é um instrumento idiofone do tipo chocalho, de origem africana. É um pequeno cesto de palha trançado, em forma de campânula, pode ter vários tamanhos e ser simples, duplo ou triplo; a abertura é fechada por uma rodela de cabaça (Cucurbita lagenária). Tem uma alça no vértice. Possui pedaços de acrílico, arroz, conchas ou sementes secas no interior para fazê-lo soar.\n[…]\nApós sua introdução no Brasil foi usado como instrumento componente das rodas de capoeira, complementar ao berimbau.\n[…]\nOriundo da região do Congo e Angola, era ali usado com funções religiosas, em rituais e cerimônias; o berço do caxixi foi o antigo Reino do Congo, com o povo bantu, onde recebem o nome de dikasá; musicalmente, têm a função de marcar o ritmo (como os chocalhos nas baterias das escolas de samba).\n[…]\nNo Brasil, mais especificamente na Bahia, seu uso se associou ao berimbau nos toques da capoeira, em momento impreciso por falta de registros históricos: este uso conjunto do caxixi com o arco de corda (que em África possui várias conformações distintas do berimbau) não é conhecida.\n[…]\nA mão direita que segura a vareta entre o polegar e o indicador, segura também o Caxixi, com o médio e o anular, desta  maneira, cada pancada da vareta sobre a corda é acompanhada pelo som seco e vegetal do caxixi.\n[…]\nEm 2013, por ocasião da Copa do Mundo FIFA de 2014, o caxixi foi usado como base para a criação do instrumento nativo oficial, dando origem à caxirola, nome derivado da junção de caxixi com castanhola. O instrumento foi apresentado pelo músico Carlinhos Brown após parceria com empresas que fabricaram o produto. Todavia, o produto derivado do caxixi foi proibido nos eventos esportivos para os quais foi proposta sua participação.\n[…]\nNa cidade baiana de Santo Amaro existe a \"Feira do Caxixi\"."
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Alegria, Alegria",
      "descricao": "Canção de Caetano Veloso apresentada no festival da TV Record de 1967, marco inicial da Tropicália."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Na letra de Alegria, Alegria, de Caetano Veloso, o narrador toma qual bebida enquanto ela pensa em casamento?",
    "resposta": "Coca-Cola",
    "distratores": [
      "Guaraná",
      "Cerveja",
      "Cachaça"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Alegria,_Alegria"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Alegria,_Alegria",
        "situacao": "ok",
        "texto": "\"Alegria, Alegria\" é uma canção composta por Caetano Veloso que foi o marco inicial do movimento Tropicalismo em 1967. O single foi lançado (com Remelexo no lado B) em 1967 e também integrou o álbum Caetano Veloso, do mesmo ano.\n[…]\nO nome da música veio, por sua vez, de um bordão que o cantor Wilson Simonal utilizava em seu programa na TV Record, Show em Si... Monal. O cantor carioca aproveitaria para intitular também de Alegria, Alegria seu álbum que saíria em novembro de 1967, assim como os próximos três.\n[…]\nCaetano Veloso, em parte inspirado pelo sucesso de A Banda, de Chico Buarque, que havia concorrido no festival da Record de 1966, quis compor uma marcha assim como a canção de Chico. Ao mesmo tempo, queria que fosse uma música contemporânea, pop, lidando com elementos da cultura de massa da época.\n[…]\nA letra possui uma estrutura cinematográfica, conforme definiu Décio Pignatari, trata-se de uma \"letra-câmera-na-mão\", citando o mote do Cinema Novo. Caetano ainda incluíu uma pequena citação do livro As Palavras, de Jean-Paul Sartre: \"nada nos bolsos e nada nas mãos\", que acabou virando \"nada no bolso ou nas mãos\". Como a ideia do arranjo incluía guitarras elétricas, Caetano e seu empresário na época, Guilherme Araújo convidaram o grupo argentino radicado em São Paulo Beat Boys.\n[…]\nCom o improvável sucesso de Alegria, Alegria, Caetano se tornou de imediato um popstar, febre que só passou após alguns meses, embora a música tenha lançado Caetano para a fama, e sua carreira posterior só confirmado sua popularidade.\n[…]\nLetra da canção"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Mestre-sala e porta-bandeira",
      "descricao": "Casal de dançarinos que conduz e protege o pavilhão de uma escola de samba durante o desfile."
    },
    "angulo": "identidade",
    "tipo": "multipla",
    "pergunta": "No desfile de uma escola de samba, que casal dança conduzindo e protegendo o pavilhão da agremiação?",
    "resposta": "Mestre-sala e porta-bandeira",
    "distratores": [
      "Rei Momo e rainha",
      "Puxador e madrinha",
      "Destaque e passista"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Mestre-sala_e_porta-bandeira"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Mestre-sala_e_porta-bandeira",
        "situacao": "ok",
        "texto": "Mestre-sala e porta-bandeira são um casal de dançarinos que exercem a função de conduzir e apresentar a bandeira de uma escola de samba durante o seu desfile no carnaval.\n[…]\nA dança do mestre-sala e da porta-bandeira surgiu nos ranchos, em que o baliza e o porta-estandarte deviam defender os símbolos da associação. A defesa, nesse caso, não era apenas simbólica: membros de um rancho costumavam tentar roubar a bandeira do outro. Por isso, muitos dos primeiros porta-bandeiras eram homens, inclusive quando as figuras foram incorporadas pelas escolas de samba. Um dos primeiros porta-bandeiras de que se tem registro foi Ubaldo, da GRES Portela.\n[…]\nCom o tempo, a atuação dos balizas e porta-estandartes evoluiu para o giro da porta-bandeira acompanhada pelo gingado do mestre-sala. Uma hipótese é de que essa mudança foi influenciada por danças rituais pré-nupciais das adolescentes africanas cortejadas pelos jovens guerreiro. Outra possível origem do formato atual é a dança encontrada nas festas populares e sepultamentos, em que as tribos eram identificadas por bandeiras coloridas.\n[…]\nEm 1938, a fantasia do mestre-sala e da porta-bandeira passou a ser um quesito de julgamento no desfile das escolas de samba do Rio de Janeiro. A partir de 1958 o quesito passou a incluir a dança do casal.\n[…]\nEm São Paulo, os jurados devem avaliar o bailado do casal e a integridade de suas fantasias. Também devem tirar pontos caso a porta-bandeira se curve diante de alguém, ou se deixar a bandeira se enrolar ou tocar no seu rosto ou no do parceiro. O mestre-sala não pode cair nem tocar o joelho no chão. os dois também perdem pontos se conversarem entre si"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Carmen Miranda",
      "descricao": "Cantora e atriz luso-brasileira famosa pelos turbantes de frutas em Hollywood"
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Carmen Miranda morreu em casa, em Beverly Hills, horas depois de gravar um programa de TV. Em que ano?",
    "resposta": "1955",
    "distratores": [
      "1951",
      "1958",
      "1962"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Carmen_Miranda"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Carmen_Miranda",
        "situacao": "ok",
        "texto": "Maria do Carmo Miranda da Cunha (Marco de Canaveses, 9 de fevereiro de 1909 – Beverly Hills, 5 de agosto de 1955), mais conhecida como Carmen Miranda, foi uma cantora, dançarina, e atriz luso-brasileira. Sua carreira artística transcorreu no Brasil e nos Estados Unidos entre as décadas de 1930 e 1950. Trabalhou no rádio, no teatro de revista, no cinema e na televisão.\n[…]\nOs exames realizados no Brasil não constataram alterações na frequência cardíaca. Ligeiramente recuperada, Carmen Miranda retornou aos Estados Unidos em 4 de abril de 1955. Imediatamente começou com as apresentações. Fez uma turnê por Las Vegas para a inauguração do Cassino New Frontier, onde ficou por seis semanas. Em seguida, embarcou para uma temporada de duas semanas no clube Tropicana, em Havana, Cuba.\n[…]\nDe volta a Los Angeles, ela recebeu uma proposta da CBS para ter seu próprio programa semanal na televisão, The Carmen Miranda Show, que seria coestrelado por Dennis O'Keefe, em um formato semelhante ao de I Love Lucy. Mas, antes disso, concordou em gravar uma participação no programa de Jimmy Durante para a NBC, em 4 de agosto de 1955, sendo esta a sua última aparição.\n[…]\nCarmen Miranda foi encontrada morta em um corredor de sua casa em Beverly Hills na manhã de 5 de agosto de 1955. A atriz havia terminado na noite anterior as filmagens de um episódio do The Jimmy Durante Show para a NBC. De acordo com Durante, Miranda reclamou de se sentir mal antes das filmagens; ele se ofereceu para encontrar uma substituta para ela, mas ela recusou. Depois de completar \"Jackson, Miranda e Gomez\", um número de música e dança com Durante, ela caiu desmaiada de joelhos.\n[…]\n'Pra Você Gostar de Mim' é a história da Carmen Miranda nos Estados Unidos e sobre como ela morreu cedo porque não permitiram ela deixar de ser Carmen Miranda. É um drama sobre identidade.\n[…]\nCarmen Miranda no IMDb"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Cartola",
      "descricao": "Angenor de Oliveira, sambista carioca, fundador da Estação Primeira de Mangueira."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Esquecido nos anos cinquenta, Cartola foi reencontrado pelo jornalista Sérgio Porto trabalhando em quê?",
    "resposta": "Lavador de carros",
    "distratores": [
      "Porteiro de prédio",
      "Motorista de táxi",
      "Garçom de bar"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Cartola_(compositor)"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Cartola_(compositor)",
        "situacao": "ok",
        "texto": "Angenor de Oliveira (Rio de Janeiro, 11 de outubro de 1908 – Rio de Janeiro, 30 de novembro de 1980), mais conhecido por Cartola, foi um cantor, compositor, poeta e violonista brasileiro. Tendo como seus principais sucessos as músicas \"As Rosas Não Falam\", \"O Mundo É um Moinho\", \"Preciso me Encontrar\" e \"Alvorada\". Ajudou na fundação da agremiação Estação Primeira de Mangueira.\n[…]\nCartola vivia um período difícil em sua vida. Sem mais a atenção de Deolinda e o prestígio no morro da Mangueira, o sambista morava em uma favela no bairro do Caju, com uma mulher chamada Donária. Ele conseguiu trabalhos modestos, como o de lavador de carros e vigia de edifícios. Mas a entrada em cena de uma nova — e definitiva — mulher em sua vida alterou o seu destino.\n[…]\nEm 1957, Cartola trabalhava como vigia e lavador dos carros dos moradores de um edifício em Ipanema. Nessa função, foi identificado em uma madrugada pelo jornalista Sérgio Porto (conhecido como Stanislaw Ponte Preta), sobrinho do crítico musical Lúcio Rangel, que havia dado ao sambista, anos antes, o apelido de Divino Cartola. Ao ver o compositor magro e maltrapilho em um macacão molhado, Stanislaw decidiu ajudá-lo, começando por divulgar a redescoberta, que fizera, do sambista.\n[…]\nÀquela altura, Cartola era dado como desaparecido ou mesmo morto por muitos de seus conhecidos e admiradores. O reencontro com o jornalista foi definitivo para a retomada de sua carreira como músico e compositor.\n[…]\nO Zicartola se tornou um marco na história da música popular brasileira no início da década de 1960. Além da boa cozinha administrada por Zica, Cartola fazia as vezes de mestre de cerimônias, propiciando o encontro entre sambistas do morro e compositores e músicos de classe média, especialmente ligados à Bossa Nova, além de poetas-letristas como Hermínio Bello de Carvalho e jornalistas musicais como Sérgio Cabral.\n[…]\n1974 — Cartola"
      }
    ]
  }
]

---

# MANIFESTO

# Manifesto de Perguntas — Mestre2

> **Versão preliminar 0.93 — 2026-10-30**
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
