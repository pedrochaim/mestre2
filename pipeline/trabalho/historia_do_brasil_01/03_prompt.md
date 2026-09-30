Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **História do Brasil** (tema **História**). Avalie **cada uma**, independentemente, e decida:

- **aprovar:** passa em todos os critérios.
- **reescrever:** tem um problema corrigível. Devolva em `reescrita` a versão corrigida **completa** (`angulo`, `tipo`, `pergunta`, `resposta`, `fonte` e, se o tipo for `multipla`, exatamente 3 `distratores`). **Toda decisão `reescrever` precisa vir com `reescrita` preenchida**, mesmo quando a correção é pequena, como trocar um distrator ou encurtar a resposta: sem ela, a pergunta se perde. Nas decisões `aprovar` e `descartar`, `reescrita` é `null`.
- **descartar:** o problema não tem conserto, ou o fato é fraco demais para valer uma pergunta.

Em `motivo`, explique a decisão em uma frase curta. Na dúvida entre reescrever e descartar, descarte: o MANIFESTO diz "menos e melhor".

# O que verificar

1. **Precisão literal (obrigatório):** leia o enunciado palavra por palavra. Cada verbo, adjetivo e afirmação precisa ser **literalmente** verdadeiro, e não só a resposta. Desconfie especialmente de verbos como *batizou*, *inventou*, *descobriu*, *fundou*, *criou*, e de palavras como *único*, *primeiro*, *maior*, *sempre*, *nunca*. Exemplo: dizer que Colombo *batizou* a Colômbia é falso, porque o país recebeu o nome *em homenagem* a ele. Se houver qualquer imprecisão, reescreva.
2. **Fato e fonte (obrigatório):** você não tem acesso à internet. Cada pergunta traz em `trechos` o que o pipeline baixou das URLs de `fonte`: a abertura de cada página e as passagens mais ligadas à pergunta, separadas por `[…]`. Confira o fato nesses trechos e informe em `apoio`:
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
      "nome": "João Cândido",
      "descricao": "Marinheiro gaúcho que liderou a Revolta da Chibata no Rio de Janeiro em 1910."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Líder da Revolta da Chibata em 1910, o marinheiro João Cândido recebeu qual apelido?",
    "resposta": "Almirante Negro",
    "fonte": [
      "https://pt.wikipedia.org/wiki/João_Cândido_Felisberto"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/João_Cândido_Felisberto",
        "situacao": "ok",
        "texto": "João Cândido Felisberto, também conhecido como \"Almirante Negro\" (Encruzilhada do Sul, 24 de junho de 1880 – Rio de Janeiro, 6 de dezembro de 1969), foi um militar brasileiro da Marinha de Guerra do Brasil, líder da Revolta da Chibata (1910).\n[…]\nEm 22 de novembro de 2007 (aniversário de 97 anos da Revolta), foi inaugurada uma estátua em homenagem ao \"Almirante Negro\", nos jardins do Museu da República, antigo Palácio do Catete, bombardeado durante a revolta. A estátua de corpo inteiro de João Cândido com o leme nas mãos, foi erigida de frente para o mar e de costas para o palácio do governo brasileiro, que em 1910 traiu sua própria palavra, quebrando a anistia aos marinheiros rebeldes.\n[…]\nA entidade UMNA - Unidade de Mobilização Nacional pela Anistia, reivindicou junto à Transpetro (Petrobras Transportes S.A.) que o nome do navio receba o justo complemento e, antes do lançamento ao mar, se tornasse: Marinheiro João Cândido, a exemplo de outros navios como o Marinheiro Marcílio Dias, ou recebesse o nome João Cândido Felisberto, uma vez que com primeiros nomes \"João Cândido\" já existiam muitos e mais famosos do que o líder da revolta (João Candido Portinari, João Cândido Ferreira, João Cândido da Silva, e até mesmo o Almirante João Cândido Brasil e engenheiro naval, que é nome de rua no Rio de Janeiro e em São Paulo, e faleceu em 1906.\n[…]\nCHIBATA - A Vida de João Cândido - projeto de longa-metragem em fase de produção no Brasil.\n[…]\n\"João Cândido, o Almirante Negro\". Rio de Janeiro: Museu da Imagem e do Som, 1999. il. fotos.\n[…]\nGRANATO, Fernando. O negro da chibata: o marinheiro que colocou a República na mira dos canhões. Rio de Janeiro: Objetiva, 2000.\n[…]\nMarinha libera ficha do \"almirante negro\", Folha de S. Paulo, 6 de março de 2008."
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Tiradentes",
      "descricao": "Joaquim José da Silva Xavier, alferes e principal mártir da Inconfidência Mineira, executado em 1792."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O alferes Joaquim José da Silva Xavier ganhou o apelido pelo qual é lembrado por exercer qual ofício?",
    "resposta": "Dentista",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Tiradentes"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Tiradentes",
        "situacao": "ok",
        "texto": "Joaquim José da Silva Xavier (Fazenda do Pombal, termo da Vila de São José del-Rei, batizado em 12 de novembro de 1746 - Rio de Janeiro, 21 de abril de 1792), conhecido como Tiradentes, foi um militar e ativista político do Brasil, notabilizado por sua participação na Conjuração Mineira, conspiração de caráter separatista contra o domínio de Portugal.\n[…]\nEra filho de Domingos da Silva Santos e Antônia da Encarnação Xavier, proprietários rurais de relativo prestígio local.\n[…]\nAo longo da juventude, exerceu atividades variadas, incluindo mineração, comércio e práticas ligadas à medicina empírica e à odontologia, atividade que lhe rendeu o apelido pelo qual se tornaria conhecido.\n[…]\nNesse contexto, Tiradentes passou a frequentar círculos que reuniam proprietários, militares, religiosos e letrados, entre os quais se destacavam Cláudio Manuel da Costa, Tomás António Gonzaga e Inácio José de Alvarenga Peixoto.\n[…]\nEntre seus participantes destacavam-se figuras como Cláudio Manuel da Costa, Tomás António Gonzaga, Inácio José de Alvarenga Peixoto e Francisco de Paula Freire de Andrade, além de Tiradentes.\n[…]\nA naturalidade de Tiradentes tem sido objeto de debate na historiografia e na memória regional, tendo sido objeto, inclusive, de processo judicial visando reconhecimento de naturalidade tardio. Embora tenha nascido na Fazenda do Pombal, atual município de Ritápolis, a localidade encontrava-se, no século XVIII, sob a jurisdição da Vila de São José del-Rei, e não da Vila de São João del-Rei.\n[…]\n2017 - Joaquim, de Marcelo Gomes\n[…]\nBarreiros, Eduardo Canabrava; Instituto Nacional do Livro (1976). As Vilas del-Rei e a Cidadania de Tiradentes. Col: Documentos Brasileiros. 172. Rio de Janeiro: José Olympio\n[…]\nSilva, Joaquim Norberto de Souza (1873). História da Conjuração Mineira. Rio de Janeiro: B. L. Garnier\n[…]\nTiradentes e seus juízes"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Pau-brasil",
      "descricao": "Árvore nativa da Mata Atlântica, cuja madeira avermelhada foi o primeiro produto explorado pelos portugueses no Brasil."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Segundo a explicação mais aceita, a árvore que deu nome ao nosso país foi chamada assim porque sua madeira tinha a cor de quê?",
    "resposta": "Brasa",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Pau-brasil"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Pau-brasil",
        "situacao": "ok",
        "texto": "O pau-brasil (atual Paubrasilia echinata (Lam.) Gagnon, H.C.Lima & G.P.Lewis, antiga Caesalpinia echinata Lam.), também chamado arabutã, ibirapiranga, ibirapitá, ibirapitanga, orabutã, pau-de-tinta, pau-pernambuco, pau-de-pernambuco e pau-rosado, é uma árvore leguminosa nativa da Mata Atlântica, no Brasil.\n[…]\nO nome vernáculo \"pau-brasil\", segundo alguns estudiosos, deriva do francês brésil, que deriva do toscano verzino, nome de pelo menos um tipo de madeira utilizada na tinturaria medieval na Itália, a madeira-de-sapão (Biancaea sappan). Verzino, por sua vez, deriva do árabe wars, que designa uma planta tintória do Iêmen. Outra versão aponta que a palavra se origina do português brasa, devido à tonalidade avermelhada ou abrasada da madeira.\n[…]\nQuanto ao nome científico, Paubrasilia é o gênero da árvore. Já echinata significa \"com espinhos\", uma referência ao fato de as vagens do pau-brasil terem acúleos, que são uma especialização da epiderme que se parece com espinhos.\n[…]\nEm pouco menos de um século, já não havia mais árvores suficientes para suprir a demanda, e a atividade econômica foi deixada de lado, embora espécimens continuassem a ser abatidos ocasionalmente para a utilização da madeira (até os dias de hoje, usada na confecção de arcos para violino e móveis finos).\n[…]\nNo século XX, a sociedade brasileira descobriu o pau-brasil como um símbolo do país em perigo de extinção, e algumas iniciativas foram feitas no sentido de reproduzir a planta a partir de sementes e utilizá-la em projetos de recuperação florestal, com algum sucesso. Atualmente, o pau-brasil tornou-se uma árvore popularmente usada como ornamental.\n[…]\nSímbolos do Brasil\n[…]\nSite oficial da Câmara dos Deputados do Brasil [1]\n[…]\nPaubrasilia equinata na Flora do Brasil\n[…]\nCaesalpinia echinata (Instituto de Pesquisas e Estudos Florestais)"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Revolução Farroupilha",
      "descricao": "Guerra separatista travada no Rio Grande do Sul contra o Império do Brasil entre 1835 e 1845."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A guerra travada no Rio Grande do Sul entre 1835 e 1845 também é chamada por um apelido pejorativo dado aos rebeldes. Que apelido é esse?",
    "resposta": "Farrapos",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Revolução_Farroupilha"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Revolução_Farroupilha",
        "situacao": "ok",
        "texto": "Guerra dos Farrapos, também chamada de Revolução Farroupilha ou Revolta Farroupilha, foi como ficou conhecida a revolução, guerra ou revolta regional, de caráter republicano, contra o governo imperial do Brasil, na então província de São Pedro do Rio Grande do Sul, e que resultou na declaração de independência da província como estado republicano, dando origem à República Rio-Grandense. Estendeu-s\n[…]\nFarroupilhas ou farrapos é a maneira como foram chamados aqueles que se revoltaram contra o governo imperial, culminando com a Proclamação da República Rio-Grandense. Era termo considerado originalmente pejorativo, já utilizado pelo menos uma década antes da Guerra dos Farrapos para designar os sul-rio-grandenses vinculados ao Partido Liberal, oposicionistas e radicais ao governo central, destacando-se os chamados jurujubas.\n[…]\nUma pesquisa ao acervo da Biblioteca Central da UFRGS localizou apenas oito livros que faziam menções à presença indígena na Guerra dos Farrapos entre mais de 50 obras. Dentre as oito obras, quatro falavam sobre o assassinato do líder farrapo João Manoel de Lima e Silva pelo capitão indígena Roque Faustino em 1837 (História da República Rio-Grandense: 1834-1845, de Dante de Laytano (1936); O Sentido e o Espírito da Revolução Farroupilha, de J. P.\n[…]\nForam conclamadas as demais províncias brasileiras a unirem-se como entes federados no sistema republicano, foi criado um hino nacional e bandeira própria do novo estado, até hoje cultivados pelo Estado do Rio Grande do Sul. Também foi estabelecida a capital na pequena cidade de Piratini, donde surgiu uma nova alcunha, a República de Piratini. A partir deste momento, ocorreu a falência imediata da Revolta Farroupilha e o início da Guerra dos Farrapos propriamente dita.\n[…]\nCom isso, novamente Bento Manuel foi aceito no seio farrapo, passando a combater novamente os imperiais.\n[…]\nCronologia da Guerra dos Farrapos"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Inconfidência Mineira",
      "descricao": "Conspiração separatista descoberta em 1789 na capitania de Minas Gerais, da qual participou Tiradentes."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A palavra inconfidência, que dá nome à conspiração mineira de 1789, significa falta de quê em relação à Coroa?",
    "resposta": "Fidelidade",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Inconfidência_Mineira",
      "https://pt.wiktionary.org/wiki/inconfidência"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Inconfidência_Mineira",
        "situacao": "ok",
        "texto": "Inconfidência Mineira, também denominada Conjuração Mineira, foi um movimento conspiratório de caráter independentista ocorrido na Capitania de Minas Gerais entre 1788 e 1789, no contexto da crise da mineração aurífera e do aprofundamento das políticas fiscais impostas pela Coroa portuguesa ao Estado do Brasil.\n[…]\nA partir da segunda metade do século XX, parte significativa da historiografia passou a adotar a denominação Conjuração Mineira, entendida como mais adequada para caracterizar o caráter conspiratório do movimento. O termo conjuração enfatiza a articulação política sigilosa entre seus participantes e evita a carga penal inerente à noção de inconfidência, permitindo uma abordagem analítica menos vinculada ao vocabulário repressivo do Antigo Regime .\n[…]\nDo ponto de vista administrativo, a repressão à Conjuração Mineira reforçou temporariamente o controle da Coroa sobre a Capitania de Minas Gerais. A suspensão da derrama em 1789 evitou um agravamento das tensões sociais naquele momento, mas não representou uma mudança estrutural na política fiscal portuguesa .\n[…]\nEntre os símbolos associados à Inconfidência Mineira, destaca-se a bandeira concebida pelos conjurados, composta por fundo branco, triângulo vermelho e a divisa latina Libertas quæ sera tamen. Originalmente vinculada ao projeto conspiratório de 1789, a bandeira foi posteriormente adotada como símbolo oficial do Estado de Minas Gerais, consolidando a apropriação institucional da memória inconfidente .\n[…]\nConspiração do Curvelo (1776)\n[…]\nConjuração dos Pintos (1787)\n[…]\nConjuração Carioca (1794)\n[…]\nConjuração Baiana (1796)\n[…]\nConspiração dos Suassunas (1801)\n[…]\nMuseu da Inconfidência\n[…]\nRomanceiro da Inconfidência, conjunto de poemas sobre a Inconfidência Mineira.\n[…]\nHistória da Conjuração Mineira, obra de Joaquim Norberto de Sousa Silva, para download."
      },
      {
        "url": "https://pt.wiktionary.org/wiki/inconfidência",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Encilhamento",
      "descricao": "Bolha especulativa e crise financeira ocorrida no Brasil nos primeiros anos da República, entre 1889 e 1891."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "A bolha especulativa dos primeiros anos da República ficou conhecida como Encilhamento, termo emprestado de qual atividade?",
    "resposta": "Corridas de cavalos",
    "distratores": [
      "Criação de gado",
      "Mineração de ouro",
      "Navegação a vela"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Encilhamento"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Encilhamento",
        "situacao": "ok",
        "texto": "A crise do encilhamento foi uma crise econômica que ocorreu no Brasil, entre o final da Monarquia e início da República. Marcada por uma forte inflação e pela formação de uma bolha de crédito (bolha econômica), estourou durante a República da Espada (1889-1894), desencadeando então uma crise financeira e institucional.\n[…]\nO termo \"encilhamento\" foi inspirado no procedimento adotado no hipismo de arrear (equipar com arreios) o cavalo, preparando-o para a corrida. O termo foi utilizado para dar nome ao movimento especulativo devido à sua analogia com a crença de tentar se aproveitar, a qualquer custo, de oportunidades \"únicas\" de enriquecimento quando elas se apresentam. Esta analogia é reforçada no ditado popular \"cavalo encilhado não passa duas vezes\".\n[…]\nO uso da palavra encilhamento como apelido da situação econômica na praça do Rio de Janeiro à época, foi feito pela primeira vez em Retrospecto Commercial, no Jornal do Commercio, em 1890. Nesse jornal, o termo por ser considerado pejorativo, só era usado em matéria paga, mas outros periódicos passaram a repeti-lo como gíria para denominar a febre financeira posterior a 1888.\n[…]\nO deslumbre com a possibilidade de enriquecimento pessoal rápido, tanto nos gestores da economia da época, que trabalharam para se beneficiar do movimento, quanto da multidão de pequenos especuladores, que prejudicou a si própria ao se deixar manipular, ajudando a inflar uma bolha econômica, participando do processo sem ter vocação, conhecimento e experiência mínimos necessários para que, atentando aos detalhes legais, pudessem tentar tirar real proveito do movimento, dispondo de estratégias de negociação próprias e controle de risco individual adequados que, teriam evitado inúmeras quebras e suas nefastas consequências.\n[…]\nRepública da Espada"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Riacho do Ipiranga",
      "descricao": "Curso d'água de São Paulo às margens do qual Dom Pedro proclamou a Independência do Brasil em 1822."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O riacho às margens do qual Dom Pedro proclamou a Independência tem um nome tupi que significa rio de qual cor?",
    "resposta": "Vermelho",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Riacho_do_Ipiranga"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Riacho_do_Ipiranga",
        "situacao": "ok",
        "texto": "Riacho do Ipiranga é um córrego localizado na cidade de São Paulo, no Brasil. Dá o seu nome ao bairro onde se situa, ao Monumento do Ipiranga e ao Museu do Ipiranga, todos localizados em suas circunvizinhanças. Junto às margens desse curso d'água é que simbolicamente foi declarada a Independência do Brasil pelo então príncipe e herdeiro do trono de Portugal, Dom Pedro I, em 7 de setembro de 1822.\n[…]\n\"Ipiranga\" é uma palavra de origem tupi que significa \"rio vermelho\", através da junção dos termos 'y (rio), pirang (vermelho), e o sufixo substantivador -a, que não se traduz. Recebeu esse nome certamente devido a suas águas turvas, enlamaçadas.\n[…]\nAli, naquele ponto, o príncipe recebeu as cartas do ministro José  Bonifácio e da mulher, a princesa Maria Leopoldina, que desencadearam o grito de independência do Brasil de Portugal. Foi assim que um até então inexpressivo riacho (e não rio, por causa do pequeno volume de água) passou pela vida de Dom Pedro e entrou para a história brasileira.\n[…]\nAlém disso, o referido riacho também é retratado na icônica pintura Independência ou Morte, de Pedro Américo, estando reposicionado à frente na tela, de maneira a receber certo destaque na cena representada.\n[…]\nO Ipiranga nasce no Parque do Estado, acompanha hoje importantes avenidas da zona Sul de São Paulo – Professor Abrahão de Morais, Ricardo Jafet e Teresa Cristina – até desaguar no Rio Tamanduateí, onde está a Avenida do Estado. A maior parte de seus 9 quilômetros está coberta por concreto. “Ele foi canalizado em 1942, como quase todos os demais riachos e rios da cidade de São Paulo”, explica o historiador Paulo Rezzutti, autor de D. Pedro – A História Não Contada.\n[…]\nIpiranga (distrito de São Paulo)\n[…]\nIpiranga (página de desambiguação)\n[…]\nIndependência do Brasil\n[…]\nMonumento do Ipiranga\n[…]\nMuseu do Ipiranga"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Revolta dos Malês",
      "descricao": "Levante de africanos escravizados e libertos ocorrido em Salvador, na Bahia, em janeiro de 1835."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Em 1835, africanos se rebelaram em Salvador na Revolta dos Malês. O termo malê indicava seguidores de qual religião?",
    "resposta": "Islamismo",
    "distratores": [
      "Candomblé",
      "Catolicismo",
      "Judaísmo"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Revolta_dos_Malês"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Revolta_dos_Malês",
        "situacao": "ok",
        "texto": "A Revolta dos Malês foi uma rebelião de africanos escravizados que ocorreu no Brasil, durante o Primeiro Reinado, em Salvador, capital da Bahia, em 24 de janeiro de 1835. É considerada como o maior levante de escravizados da história do país.\n[…]\nHá muitas dúvidas sobre quais eram os reais objetivos da Revolta dos Malês, mas pode-se dizer que se pretendia criar uma rebelião escrava generalizada e provavelmente instituir em Salvador um governo malê, liderado por muçulmanos.\n[…]\nJoão José Reis indaga se os revoltosos iriam copiar o modelo de sociedade recentemente instituída no país hauçá africano, que era um Estado islâmico escravista, ou se o modelo seria o pré-jihad, onde outras formas de fé chegaram a ser toleradas, ou mesmo se os revoltosos adotariam um outro modelo de sociedade desconhecido.\n[…]\nEm decorrência disso, após 1835, e a Revolta dos Malês no início do ano, as condições de vida para negros africanos pioraram. Eles foram responsabilizados pelo levante e se tornaram uma espécie de inimigos da população e do seu bem-estar. Esse sentimento em consenso gerou um ambiente \"antiafricano\" que desencadeou leis que tinham como objetivo controlar e punir os africanos.\n[…]\nOutro fato é que, embora a revolta tenha sido feita por africanos muçulmanos, nem todos os negros africanos que eram adeptos ao Islã participaram dela. Por isso, muitos inocentes foram presos, devido apenas a critérios religiosos e aos documentos escritos pelos malês.\n[…]\nCentro Cultural Islâmico da Bahia\n[…]\nIslamismo no Brasil\n[…]\nFreitas, Décio (1985). A Revolução dos Malês. Porto Alegre: Movimento. 106 páginas\n[…]\nReis, João José (2003). Rebelião Escrava no Brasil - A história do levante dos Malês em 1835. São Paulo: Companhia das Letras. 680 páginas. ISBN 9788535903942"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Dom Pedro I",
      "descricao": "Primeiro imperador do Brasil, que proclamou a Independência em 1822 e depois foi rei de Portugal."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Dom Pedro Primeiro também foi rei de Portugal. Com que nome ele reinou por lá?",
    "resposta": "Dom Pedro Quarto",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Pedro_I_do_Brasil"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Pedro_I_do_Brasil",
        "situacao": "ok",
        "texto": "Pedro I & IV (Queluz, 12 de outubro de 1798 – Queluz, 24 de setembro de 1834), cognominado \"o Libertador\", \"Pai da Pátria\" e \"o Rei Soldado\", foi o primeiro Imperador do Brasil como Pedro I de 1822 até sua abdicação em 1831, e também Rei de Portugal e Algarves como Pedro IV entre março e maio de 1826. Foi o quarto filho do rei João VI e de sua esposa, a rainha Carlota Joaquina da Espanha, e portan\n[…]\nPedro era o segundo filho homem mais velho do casal e o quarto filho no total. Em 1801, com a morte de seu irmão mais velho Francisco Antônio, tornou-se o herdeiro aparente de seu pai, recebendo o título de Príncipe da Beira. Desde 1792, João exercia a regência em nome de sua mãe, a rainha Maria I, declarada mentalmente incapaz de governar.\n[…]\nA usurpação do trono português aprofundou a crise pessoal e política de Pedro, que passou a concentrar esforços na tentativa de obter apoio internacional para restaurar os direitos de Maria II. Segundo a historiografia, esse envolvimento crescente com a questão portuguesa contribuiu para o agravamento das tensões internas no Brasil e para o progressivo desgaste de sua posição no Primeiro Reinado.\n[…]\nJornais e panfletos liberais usaram o nascimento português de Pedro no apoio a acusações válidas (como por exemplo que boa parte de sua energia era dedicada a assuntos relacionados a Portugal) e também falsas (que ele estava envolvido em conspirações para suprimir a constituição e reunificar o Brasil e Portugal).\n[…]\nEle também insistiu que quaisquer pedidos de retorno como regente fossem constitucionalmente válidos. A vontade do povo teria de ser transmitida através de seus representantes locais e sua nomeação precisaria ser aprovada pelo parlamento. Apenas assim, e \"sob a apresentação de uma petição a ele em Portugal por uma delegação oficial do parlamento brasileiro\", Pedro consideraria aceitar o pedido.\n[…]\nPedro IV de Portugal\n[…]\nRelações luso-brasileiras"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Conjuração Baiana",
      "descricao": "Movimento separatista e igualitário descoberto em Salvador, na Bahia, em 1798."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Por causa do ofício de vários de seus participantes, a Conjuração Baiana de 1798 também é chamada de Revolta dos quê?",
    "resposta": "Alfaiates",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Conjuração_Baiana"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Conjuração_Baiana",
        "situacao": "ok",
        "texto": "Conjuração Baiana, também denominada como Revolta dos Alfaiates (uma vez que alguns participantes da trama exerciam este ofício) e recentemente também chamada de Revolta dos Búzios, foi um movimento de caráter emancipacionista, ocorrido no final do século XVIII (1798-1799), na Capitania da Bahia, no Brasil Colonial.\n[…]\nO movimento teve participação de pessoas com profissões mais simples, como sapateiros, bordadores, ex-escravos e escravos, além de alfaiates.\n[…]\nEntre os principais líderes do movimento destacaram-se os soldados Luís Gonzaga das Virgens e Lucas Dantas e os alfaiates Manuel Faustino dos Santos Lira e João de Deus Nascimento. Os quatro conjurados eram negros e pardos, e foram condenados à forca. Também esteve envolvido na conjuração o jornalista e cirurgião Cipriano Barata, que recebeu pena branda.\n[…]\nNo ano de 1798, Portugal e a Europa como um todo, passavam por problemas e mudanças políticos, que anos mais tarde resultaria na vinda da família real para o Brasil. Vale ressaltar que a França — um grande agente histórico dessas mudanças — teve alguma participação direta na Conjuração Baiana.\n[…]\nOs 6 pontos da conjuração baiana eram:\n[…]\nFinalmente, no dia 8 de novembro de 1799, procedeu-se à execução dos condenados à pena capital, por enforcamento, na seguinte ordem: soldado Lucas Dantas do Amorim Torres, aprendiz de alfaiate Manuel Faustino dos Santos Lira, soldado Luís Gonzaga das Virgens e mestre alfaiate João de Deus Nascimento. De acordo com o frei, tropas militares ocupavam a Praça da Liberdade e havia ampla presença do povo, que se reuniu para assistir. Havia banda de cornetas e tambores.\n[…]\nConjuração Carioca (1794)\n[…]\nInconfidência Baiana. Revista Impressões Rebeldes. Universidade Federal Fluminense\n[…]\n«Conjuração dos Búzios». Instituto Búzios. Cópia arquivada em 28 de setembro de 2017"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Ouro Preto",
      "descricao": "Cidade histórica de Minas Gerais, centro do ciclo do ouro e palco da Inconfidência Mineira."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Na época da Inconfidência, como se chamava a cidade mineira hoje conhecida como Ouro Preto?",
    "resposta": "Vila Rica",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Ouro_Preto"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Ouro_Preto",
        "situacao": "ok",
        "texto": "Ouro Preto é um município brasileiro do estado de Minas Gerais, Região Sudeste do país. Localiza-se a cerca de 100 km a sudeste da capital estadual. Ocupa uma área de aproximadamente 1 250 km², sendo que 23 km² estão em área urbana, e sua população foi estimada em 77 914 habitantes em 2025. Situa-se na latitude 20º23'08\" sul, longitude 43º30'29\" oeste e altitude média de 1 179 metros.\n[…]\nO município chegou a ser uma das cidades mais populosas da América, contando com cerca de 40 mil pessoas em 1730 e, décadas após, 80 mil, mas é bom lembrar que a área de Villa Rica/Ouro Preto era muito maior englobando as atuais Congonhas, Ouro Branco e Itabirito. Àquela época, a população de Nova York era de menos da metade desse número de habitantes e a população de São Paulo não ultrapassava 8 mil.\n[…]\nOuro Preto foi criada em 24 de junho de 1698 pela bandeira de Antonio Dias e Padre Faria. A elevação de Ouro Preto a vila se deu em 8 de julho de 1711, por meio da fusão de diversos arraiais, fundados por bandeirantes, tornando-se sede de concelho, com a designação de \"Vila Rica\". Inicialmente Vila Rica de Albuquerque e depois Vila Rica de Nossa Senhora do Pilar de Ouro Preto.\n[…]\nNesse ano foram criadas as três primeiras vilas de Minas Gerais: em 8 de abril Ribeirão do Carmo, atual Mariana, em 8 de julho Vila Rica, atual Ouro Preto, e em 17 de julho Nossa Senhora da Conceição de Sabarabussu, atual Sabará.\n[…]\nEm 1823, após a Independência do Brasil, Vila Rica recebeu o título de Imperial Cidade, conferido por Pedro I, tornando-se oficialmente capital da então província das Minas Gerais e passando a ser designada como Imperial Cidade de Ouro Preto. Em 1839, foi fundada a Escola de Farmácia, tida como a primeira escola de farmácia da América do Sul. Em 12 de outubro de 1876, a pedido de Pedro II, Claude Henri Gorceix fundou a Escola de Minas em Ouro Preto.\n[…]\nOuro Preto no IBGE Cidades"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Francisco José do Nascimento",
      "descricao": "Jangadeiro cearense que liderou em 1881 a greve dos jangadeiros contra o embarque de escravizados em Fortaleza."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O jangadeiro cearense Francisco José do Nascimento, que se recusou a embarcar escravizados em Fortaleza, entrou para a história com que apelido?",
    "resposta": "Dragão do Mar",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Francisco_José_do_Nascimento"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Francisco_José_do_Nascimento",
        "situacao": "ok",
        "texto": "Francisco José do Nascimento (Canoa Quebrada, Aracati, 15 de abril de 1839 — Fortaleza, 5 de março de 1914), também conhecido como Dragão do Mar ou Chico da Matilde, foi um líder jangadeiro, prático-mor e abolicionista, com participação ativa no Movimento Abolicionista no Ceará, estado pioneiro na abolição da escravidão, antes conhecido como Terra da Luz.\n[…]\nPosteriormente, em agosto de 1881, houve uma nova tentativa de embarcar escravizados que seriam vendidos em São Paulo e no Rio de Janeiro, contudo, novamente os jangadeiros, liderados por Chico da Matilde e pelo escravizado liberto José Luis Napoleão, se recusaram a fazer o transporte e o porto do Ceará foi considerado, pelo movimento abolicionista, oficialmente fechado para o tráfico interprovincial.\n[…]\nAssim, Chico da Matilde foi levado para corte com sua jangada, desfilou pelas ruas, recebeu homenagens da multidão e ganhou novo nome: Dragão do Mar ou Navegante Negro. De lá, escreveu à mulher: \"(...) seu velho está tonto com tanta festa e cumprimentos de tanta gente importante\".\n[…]\nFrancisco José do Nascimento é um símbolo da resistência popular cearense contra a escravidão, e foi homenageado pelo governo do Ceará, com seu nome dado ao Centro Dragão do Mar de Arte e Cultura, pelo que ele e seus colegas realizaram em nome da liberdade, em 1881, na Praia de Iracema.\n[…]\nAlém do já referido Centro Dragão do Mar, há uma escola pública estadual cujo nome também homenageia o Chico da Matilde, localizada no bairro do Mucuripe, Escola de Ensino Médio Dragão do Mar, que foi fundada em 1955, com o objetivo de alfabetizar os filhos de pescadores que moravam na região àquela época. Um tradicional grupo de estudos liberal com sede no Ceará também recebe o título Dragão do Mar em sua homenagem.\n[…]\nGreve dos Jangadeiros\n[…]\nCentro Dragão-do-mar de Arte e Cultura"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Revolta da Vacina",
      "descricao": "Motim popular ocorrido no Rio de Janeiro em novembro de 1904 contra a vacinação obrigatória."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1904, o Rio de Janeiro viveu dias de conflito contra a vacinação obrigatória. A vacina era contra qual doença?",
    "resposta": "Varíola",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Revolta_da_Vacina"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Revolta_da_Vacina",
        "situacao": "ok",
        "texto": "A Revolta da Vacina foi um motim popular ocorrido entre 10 e 16 de novembro de 1904 na cidade do Rio de Janeiro, então capital do Brasil. Seu pretexto imediato foi uma lei que determinava a obrigatoriedade da vacinação contra a varíola, mas também é associada a causas mais profundas, como as reformas urbanas que estavam sendo realizadas pelo prefeito Pereira Passos e as campanhas de saneamento lid\n[…]\nAs condições sanitárias precárias favoreciam a proliferação de doenças como a peste bubônica, varíola e febre amarela, endêmicas no Rio de Janeiro, especialmente nas regiões mais pobres. As epidemias deram ao Rio de Janeiro a fama de cidade empesteada e mortífera, afastando os estrangeiros, receosos de contrair doenças, e o planejamento urbano herdado do período colonial e do império não condizia mais com a condição de capital e centro das atividades econômicas do Brasil daquele período.\n[…]\nNo início da década de 1900, o Rio de Janeiro era um foco endêmico de diversas doenças, entre elas, febre amarela, febre tifoide, impaludismo, varíola, peste bubônica e tuberculose. Destas, a febre amarela e a varíola causavam o maior número de vítimas na capital. As tripulações e passageiros que chegavam ao porto muitas vezes sequer desciam dos navios para não contrair tais doenças.\n[…]\nO combate à varíola, por sua vez, dependia da vacinação. Um projeto de lei que tornava a vacina contra a varíola obrigatória em todo o território nacional foi apresentado no dia 29 junho de 1904 pelo senador alagoano Manuel José Duarte. O projeto foi aprovado com 11 votos contrários, em 20 de julho, dando entrada na Câmara em 18 de agosto e sendo aprovado por larga maioria no final de outubro, tornando-se lei em 31 desse mês. O projeto gerou um debate exaltado entre os legisladores e a população.\n[…]\nMedia relacionados com Revolta da Vacina no Wikimedia Commons"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Transferência da corte portuguesa para o Brasil",
      "descricao": "Mudança da família real e da corte de Portugal para o Brasil entre 1807 e 1808."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Entre 1807 e 1808, a família real portuguesa mudou-se para o Brasil fugindo das tropas de qual governante?",
    "resposta": "Napoleão Bonaparte",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Transferência_da_corte_portuguesa_para_o_Brasil"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Transferência_da_corte_portuguesa_para_o_Brasil",
        "situacao": "ok",
        "texto": "A transferência da corte portuguesa para o Brasil foi o deslocamento da sede da monarquia portuguesa de Lisboa para o Rio de Janeiro, realizado entre o final de 1807 e o início de 1808, no contexto das Guerras Napoleônicas e da invasão francesa de Portugal. A operação envolveu a família real, membros da corte, funcionários régios, militares e outros agentes ligados ao funcionamento da monarquia.\n[…]\nA saída da Corte ocorreu às vésperas da entrada das tropas francesas. Jean-Andoche Junot chegou a Lisboa em 30 de novembro de 1807, quando a família real já havia deixado o Tejo. Em correspondência dirigida a Napoleão, o próprio Junot registrou sua frustração por ter chegado tarde demais para capturar o príncipe regente.\n[…]\nAo evitar-se que a família real portuguesa fosse aprisionada em Lisboa pelas tropas francesas, inviabilizou-se o projeto de Napoleão Bonaparte para a península ibérica, que consistia em estabelecer nela famílias reais da sua própria família, como ainda se tentou em Espanha com a deposição de Fernando VII e Carlos IV, colocando no trono José Bonaparte.\n[…]\nO \"partido francês\" em Portugal, não se dando por derrotado, começou imediatamente a difundir a ideia de que a retirada estratégica da Corte para o Brasil mais não era do que uma \"fuga\", que teria deixado Portugal sem Rei e sem Lei. Por esse motivo foi enviada uma delegação sua ao encontro de Junot para que Napoleão Bonaparte lhes desse uma Constituição e um Rei.\n[…]\nApós a derrota de Napoleão, a transferência da Corte para o Brasil veio também a ter como consequência a Revolução de 1820 em Portugal, que exigiu o retorno da família real portuguesa e da Corte a Lisboa. O comportamento dos deputados às Cortes Constituintes face ao Brasil depois também veio a provocar a proclamação da sua Independência.\n[…]\nIndependência do Brasil\n[…]\nA fuga para o Brasil da família real — A Corte carioca, RTP Ensina, por Rita Marrafa de Carvalho"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Ciclo da borracha",
      "descricao": "Período de prosperidade da Amazônia brasileira baseado na extração do látex da seringueira, entre o fim do século dezenove e o início do vinte."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "O ciclo da borracha amazônica entrou em crise quando sementes de seringueira, levadas por um inglês, prosperaram em plantações de qual continente?",
    "resposta": "Ásia",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Ciclo_da_borracha"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Ciclo_da_borracha",
        "situacao": "ok",
        "texto": "O ciclo da borracha foi um período de expansão econômica e reconfiguração territorial ocorrido principalmente na Amazônia brasileira entre 1879 e 1912, com uma retomada conjuntural entre 1942 e 1945 durante a Segunda Guerra Mundial.\n[…]\nNo século XX, a combinação entre crise econômica, abandono de seringais e posterior ocupação agropecuária alterou dinâmicas ecológicas regionais, demonstrando como a economia da borracha foi parte de processos mais amplos de incorporação da Amazônia ao mercado nacional e internacional.\n[…]\nDe modo geral, o ciclo da borracha é atualmente interpretado menos como episódio isolado de prosperidade e decadência e mais como parte de processos estruturais de inserção da Amazônia na economia capitalista global, marcados por dependência externa, desigualdade regional e integração territorial desigual.\n[…]\nEmbora o ciclo da borracha tenha perdido centralidade econômica após as primeiras décadas do século XX, seus efeitos estruturais permaneceram visíveis na organização territorial e urbana da Amazônia. Cidades como Manaus e Belém conservaram parte significativa do patrimônio arquitetônico erguido durante o período de prosperidade, incluindo teatros, mercados e edifícios administrativos que se tornaram marcos simbólicos da chamada Belle Époque amazônica.\n[…]\nA partir da segunda metade do século XX, políticas de ocupação territorial e integração nacional, como a abertura de rodovias e incentivos à agropecuária, ocorreram em cenário já marcado pela memória do auge e da crise da borracha. Nesse sentido, o ciclo permanece elemento central para a compreensão histórica da formação econômica e social da Amazônia brasileira.\n[…]\nAmazônia: do ciclo da borracha à cultura do empreendedorismo\n[…]\nBatalha da borracha"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Transferência da capital colonial para o Rio de Janeiro",
      "descricao": "Mudança da sede do governo do Brasil colonial de Salvador para o Rio de Janeiro, em 1763."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1763, a capital da colônia saiu de Salvador para o Rio de Janeiro, principalmente para controlar o escoamento de qual riqueza?",
    "resposta": "Ouro",
    "fonte": [
      "https://en.wikipedia.org/wiki/Rio_de_Janeiro",
      "https://en.wikipedia.org/wiki/Colonial_Brazil"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rio_de_Janeiro",
        "situacao": "ok",
        "texto": "Rio de Janeiro, also known simply as Rio, is the capital and largest city of the state of Rio de Janeiro. It is the second-largest city in Brazil after São Paulo, and the largest by international tourists. It has a population of 6 million in the city proper, and 13 million people in its metropolitan area as of 2025. It is also the sixth-most-populous city in the Americas.\n[…]\nIn the late 17th century, Bandeirantes discovered gold and diamonds in the neighboring captaincy of Minas Gerais, thus Rio de Janeiro became a much more practical port for exporting diversified sources of wealth (gold, precious stones, besides sugar) than Salvador, Bahia, much farther northeast. On 27 January 1763, the colonial administration in Portuguese America was moved from Salvador to Rio de Janeiro.\n[…]\nThe city remained primarily a colonial capital until 1808, when the Portuguese royal family and most of the associated Lisbon nobles, fleeing from Napoleon's invasion of Portugal, moved to Rio de Janeiro.\n[…]\nThe city of Rio de Janeiro was successively the capital of the Portuguese colony of the State of Brazil (1621–1815), after the United Kingdom of Portugal, Brazil and the Algarves (1815–1822), the Empire of Brazil (1822–1889) and from the Republic of the United States of Brazil (1889–1968) until 1960, when the seat of government was definitively transferred to the then newly built Brasília.\n[…]\nRio de Janeiro is a part of the Union of Ibero-American Capital Cities.\n[…]\nBenefiting from the federal capital position it had for a long period (1763–1960), the city became a dynamic administrative, financial, commercial, and cultural center. Rio de Janeiro became an attractive place for companies to locate when it was the capital of Brazil, as important sectors of society and of the government were present in the city.\n[…]\nGeographic data related to Rio de Janeiro at OpenStreetMap"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Colonial_Brazil",
        "situacao": "ok",
        "texto": "Colonial Brazil (Portuguese: Brasil Colonial), sometimes referred to as Portuguese America, comprises the period from 1500, with the arrival of the Portuguese, until 1815, when Brazil was elevated to a kingdom in union with Portugal.\n[…]\nAfter 1640, the governors of Brazil coming from the high nobility started to use the title of Vice-rei (Viceroy). In 1763 the capital of the State of Brazil was transferred from Salvador to Rio de Janeiro. In 1775 all Brazilian States (Brasil, Maranhão and Grão-Pará) were unified into the Viceroyalty of Brazil, with Rio de Janeiro as capital, and the title of the king's representative was officially changed to that of Viceroy of Brazil.\n[…]\nIn 1763, the capital of colonial Brazil was transferred from Salvador to Rio de Janeiro, which was located closer to the mining region and provided a harbor to ship the gold to Europe.\n[…]\nIn 1763, the capital city of the State of Brazil was transferred from Salvador to Rio de Janeiro. At the same time, the title of the King's representative heading the government of the State of Brazil was officially changed from Governor General to Viceroy (Governors coming from the high nobility had been using the title of Viceroy since about 1640). However, the name of Brazil was never changed to Viceroyalty of Brazil.\n[…]\nIndeed, with the reorganization of 1775, for the first time since 1654, all the Portuguese territories in the New World were once again united under a single colonial government. Rio de Janeiro, that had become the capital of the State of Brazil in 1763, continued to be the capital, now of the unified colony.\n[…]\nPortuguese Empire#Colonization efforts in the Americas\n[…]\n\"Colonial history of Brazil in the Rio de Janeiro Municipality\" website (in Portuguese)."
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Inconfidência Mineira",
      "descricao": "Conspiração separatista descoberta em 1789 na capitania de Minas Gerais, da qual participou Tiradentes."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "A Inconfidência Mineira pretendia eclodir no dia de uma cobrança forçada de impostos atrasados sobre o ouro. Como se chamava essa cobrança?",
    "resposta": "Derrama",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Inconfidência_Mineira"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Inconfidência_Mineira",
        "situacao": "ok",
        "texto": "Inconfidência Mineira, também denominada Conjuração Mineira, foi um movimento conspiratório de caráter independentista ocorrido na Capitania de Minas Gerais entre 1788 e 1789, no contexto da crise da mineração aurífera e do aprofundamento das políticas fiscais impostas pela Coroa portuguesa ao Estado do Brasil.\n[…]\nA conspiração desenvolveu-se em meio à redução progressiva da produção de ouro e ao endurecimento da arrecadação tributária, particularmente pela ameaça de aplicação da derrama, mecanismo extraordinário destinado a garantir o pagamento das cotas mínimas exigidas pela metrópole .\n[…]\nA revolta deveria ser deflagrada no momento da decretação da derrama, quando se esperava obter apoio popular e adesão de setores militares, mas foi desarticulada antes de sua execução em razão de denúncias feitas às autoridades coloniais .\n[…]\nCaso o valor não fosse atingido, previa-se a aplicação da derrama, um imposto extraordinário de caráter coletivo, cujo montante seria rateado entre os moradores da capitania, independentemente de sua condição econômica .\n[…]\nA estratégia dos conjurados previa que a revolta fosse deflagrada no momento da decretação da derrama, quando se esperava que a insatisfação generalizada da população favorecesse a adesão ao movimento. A expectativa era contar com o apoio de tropas locais e com a mobilização de setores urbanos, sobretudo em Vila Rica .\n[…]\nDo ponto de vista administrativo, a repressão à Conjuração Mineira reforçou temporariamente o controle da Coroa sobre a Capitania de Minas Gerais. A suspensão da derrama em 1789 evitou um agravamento das tensões sociais naquele momento, mas não representou uma mudança estrutural na política fiscal portuguesa .\n[…]\nMuseu da Inconfidência\n[…]\nHistória da Conjuração Mineira, obra de Joaquim Norberto de Sousa Silva, para download."
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Lei Eusébio de Queirós",
      "descricao": "Lei brasileira de 1850 que proibiu o tráfico de africanos escravizados para o Brasil."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "A lei que em 1850 proibiu o tráfico de escravizados para o Brasil, a Lei Eusébio de Queirós, foi aprovada sob forte pressão de qual país?",
    "resposta": "Inglaterra",
    "distratores": [
      "França",
      "Estados Unidos",
      "Portugal"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Lei_Eusébio_de_Queirós"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Lei_Eusébio_de_Queirós",
        "situacao": "ok",
        "texto": "Na legislação brasileira, a Lei Eusébio de Queirós ou lei n.º 581/1850, promulgada no Segundo Reinado, proibiu a entrada de africanos escravos no Brasil, criminalizando quem a infringisse, conforme o seu artigo 3.º (ver Gabinete Monte Alegre).\n[…]\nUm dos principais motivos de sua promulgação foi a pressão da Inglaterra, materializada pela aplicação unilateral, por aquele país, do chamado Bill Aberdeen, ato do Parlamento Britânico, promulgado em 9 de agosto de 1845, que autorizava os britânicos a prender qualquer navio suspeito de transportar escravos no oceano Atlântico.\n[…]\nA continuidade da escravatura no Brasil foi ficando insustentável com o passar do tempo, colocando o país entre as nações vistas como \"não civilizadas\". A pressão inglesa foi tanta, que dois meses antes da aprovação dessa lei, a esquadra britânica atacou a costa brasileira belicamente.\n[…]\nNão demorou muito para que a Inglaterra pressionasse o Brasil a deter o tráfico interno também. A medida definitivamente tomada, então, foi a utilização da mão de obra assalariada.\n[…]\nEm vista disso, países como a Alemanha, determinaram a proibição da emigração para o Brasil. Para contornar essa dificuldade, o país adotou um sistema de imigração subvencionada, passando a financiar a vinda e as despesas iniciais dessas pessoas.\n[…]\nPartindo desse ponto de vista, a Lei Eusébio de Queiroz chegou a incentivar a continuação do tráfico, por ter resultado no aumento do preço da mercadoria humana, e, portanto, dos benefícios monetários dos traficantes brasileiros e portugueses que, durante alguns anos, ainda tiveram na ausência da proibição, a garantia da continuidade de seus \"investimentos\"."
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Semana de Arte Moderna",
      "descricao": "Festival de arte realizado em fevereiro de 1922 no Theatro Municipal de São Paulo, marco do modernismo brasileiro."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "A Semana de Arte Moderna foi realizada em 1922, ano escolhido por coincidir com qual comemoração nacional?",
    "resposta": "Centenário da Independência",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Semana_de_Arte_Moderna"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Semana_de_Arte_Moderna",
        "situacao": "ok",
        "texto": "Semana de Arte Moderna, também chamada de Semana de 22, foi um evento cultural que ocorreu no Theatro Municipal de São Paulo de 13 a 17 de fevereiro de 1922. Contou com exposição de pinturas, esculturas e maquetes arquitetônicas, além de conferências e concertos nas noites dos dias 13, 15 e 17. Foi financiada principalmente por membros da elite paulista que haviam enriquecido com a produção cafeei\n[…]\nParte dessa proposta tinha raízes na agitação nacional que ocorria no início da década de 1920 em razão da comemoração do Centenário da Independência em 1922. O sentimento nacionalista da época estava associado ao antilusitanismo derivado da presença portuguesa no comércio, indústria, imprensa e literatura. Por mais que não partilhassem das ideias antilusitanas, os fatores sociais e políticos também afetaram os modernistas na elaboração da crítica estética.\n[…]\nA escolha do ano de 1922 para a realização do evento foi uma tentativa de tornar a comemoração do Centenário da Independência do Brasil em manifesto de emancipação artística. Assim sendo, em 1921, O grupo estabeleceu contato com empresários com prestígio na sociedade para patrocinar o evento, tais como Antônio Prado Júnior, Armando Penteado, José Carlos de Macedo Soares, Olívia Guedes Penteado e Oscar Rodrigues Alves.\n[…]\nNas comemorações do centenário da Semana em 2022, vários eventos, mostras, publicações e seminários foram organizados, tentando formar uma visão mais exata sobre como se formou e o que representou o movimento no contexto histórico e identificar as distorções da historiografia tradicional. É um exemplo a exposição Raio-que-o-parta: ficções do moderno no Brasil, inaugurada no dia 16 de fevereiro no SESC 24 de Maio, em São Paulo.\n[…]\nArte moderna\n[…]\nModernismo no Brasil\n[…]\nAjzenberg, Elza (2012). «A Semana de Arte Moderna de 1922». Revista de Cultura e Extensão USP: 25–29. ISSN 2316-9060. doi:10.11606/issn.2316-9060.v7i0p25-29"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Tratado de Petrópolis",
      "descricao": "Acordo assinado em 1903 entre Brasil e Bolívia que incorporou o território do Acre ao Brasil."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Pelo Tratado de Petrópolis, que incorporou o Acre ao Brasil em 1903, o país se comprometeu a construir qual ferrovia?",
    "resposta": "Estrada de Ferro Madeira-Mamoré",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Tratado_de_Petrópolis"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Tratado_de_Petrópolis",
        "situacao": "ok",
        "texto": "O Tratado de Petrópolis, firmado em 17 de novembro de 1903 em Petrópolis, pôs fim à disputa territorial entre Brasil e Bolívia pelo território do Acre. Nele foi estipulado a venda do território do Acre da Bolívia para o Brasil. Em compensação, o Brasil cedeu para a Bolívia territórios na bacia do rio Paraguai, dentre eles a Bahia Negra, além do Triângulo do Abunã.\n[…]\nAdemais, o governo brasileiro também se comprometeu a construir a Estrada de Ferro Madeira-Mamoré para dar trânsito às trocas comerciais bolivianas pelo rio Amazonas, além de pagar à Bolívia a quantia de 2 milhões de libras esterlinas (cerca de 2,3 bilhões de reais a preços atuais) para indenizar o Bolivian Syndicate, um consórcio de investidores estadunidenses, pela rescisão do contrato de arrendamento, firmado em 1901 com o governo boliviano.\n[…]\nO Brasil assumiu também a obrigação de construir uma ferrovia \"desde o porto de Santo Antônio, no Rio Madeira, até Guajará-Mirim, no Mamoré\", com um ramal que atingisse o território boliviano. Era a Estrada de Ferro Madeira-Mamoré: sua licitação se deu em 1905, a construção da ferrovia foi iniciada em 1907 sendo concluída em 1912, a um custo estimado em 25 milhões de dólares (623 milhões a preços atuais ou cerca de dois bilhões de reais).\n[…]\nO território do Acre também era disputado pelo Peru, e o final da contenda só ocorreu com a celebração do Tratado do Rio de Janeiro de 1909, depois que o Brasil abriu mão de cerca de 40 000 km² do território acreano.\n[…]\nPor fim, mais de 80 ilhas dos trechos limítrofes nos rios Mamoré e Guaporé, entre elas a Ilha de Guajará-Mirim ainda estão sem a soberania definida; além de que, no rio Paraguai, nove ilhas ainda não foram adjudicadas a um ou outro país. As ilhas, algumas delas com até 300 hectares, são cobertas de vegetação nativa e algumas são habitadas por indígenas.\n[…]\nEstrada de Ferro Madeira-Mamoré"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Lampião",
      "descricao": "Virgulino Ferreira da Silva, o mais famoso líder do cangaço no sertão nordestino, morto em 1938."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1926, o cangaceiro Lampião recebeu uma patente de capitão para ajudar a combater qual movimento rebelde?",
    "resposta": "Coluna Prestes",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Lampião",
      "https://en.wikipedia.org/wiki/Lampião"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Lampião",
        "situacao": "ok",
        "texto": "Lampião, lanterna, luminária, lamparina ou candeeiro é um objeto destinado à iluminação, geralmente constituído por uma armação de metal (embora pudesse ser de outro material, como cerâmica) com um anteparo transparente (geralmente de vidro) para proteger a fonte de luz, que pode ser uma vela, uma chama abastecida por combustível (querosene ou gás, por exemplo) ou mesmo vagalumes, como era costume\n[…]\nAntes do surgimento das lâmpadas elétricas, as lanternas eram usadas para iluminação noturna, sendo carregadas em carruagens, . O lampião a gás foi inventado em 1792, e foi uma das circunstâncias que possibilitaram o aumento da jornada de trabalho nas fábricas, principalmente da Inglaterra. O lampião ainda é usado em diversas culturas, como objeto de iluminação ou de decoração para atividades noturnas.\n[…]\nSeu uso atual se dá em residências para casos de falta de energia elétrica (ou onde não há fornecimento desta), acampamentos ou minas. O lampião é um tipo de lanterna."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Lampião",
        "situacao": "ok",
        "texto": "\"Captain\" Virgulino Ferreira da Silva (Brazilian Portuguese: [feˈʁejɾɐ da ˈsiwvɐ]; 7 July 1897 – 28 July 1938), better known as Lampião (older spelling: Lampeão, Portuguese pronunciation: [lɐ̃piˈɐ̃w], meaning \"lantern\" or \"oil lamp\"), was probably the twentieth century's most successful traditional bandit leader. The banditry endemic to the Northeast of Brazil, called Cangaço, had origins in the l\n[…]\nEventually José Ferreira was killed in a confrontation with the police on May 18, 1921. Virgulino sought vengeance and proved to be extremely violent in doing so. He became an outlaw, a cangaceiro, and was incessantly pursued by the police (whom he called macacos or monkeys). Virgulino had acquired the nickname 'Lampião' as early as 1921, allegedly because he could fire a lever-action rifle so fast, that at night it looked as though he was holding a lamp.\n[…]\nA number of cangaceiras joined the band over the many years of its existence and Lampião usually attended any births these women had personally. Such children, including Lampião's own, were fostered out to settled relatives or friends of the cangaceiros, or left with priests. Expedita, Maria and Lampião's daughter, born in 1932, was raised by her uncle João after the deaths of her parents. João Ferreira was the only one of Lampião's brothers not to become an outlaw.\n[…]\nAntônio Ferreira – Lampião's eldest brother, died in an accident in 1926.\n[…]\nLevino Ferreira – Lampião's brother, killed in battle with police in July 1925.\n[…]\nLuis Pedro – a prominent lieutenant and member of the band for over a decade, he returned to die by Lampião's side even though he may have been able to escape. He accidentally killed Antônio Ferreira in 1926 when a gun went off during a wrestling bout. When told of his brother's death Lampião said that Luis must take his place."
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Zumbi dos Palmares",
      "descricao": "Último líder do Quilombo dos Palmares, morto em 1695."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Zumbi dos Palmares e Tiradentes foram mortos pelas autoridades coloniais. Que destino semelhante tiveram as suas cabeças?",
    "resposta": "Foram expostas em praça pública",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Zumbi_dos_Palmares",
      "https://pt.wikipedia.org/wiki/Tiradentes"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Zumbi_dos_Palmares",
        "situacao": "ok",
        "texto": "Zumbi, também conhecido como Zumbi dos Palmares (morto em 20 de novembro de 1695), foi uma das principais lideranças políticas e militares dos Palmares, conjunto de mocambos estabelecido na Capitania de Pernambuco, em território hoje pertencente sobretudo ao estado de Alagoas. Não se conhecem fontes contemporâneas que permitam determinar sua data ou local de nascimento, filiação, infância ou juven\n[…]\nA data de sua morte tornou-se um marco da memória pública de Zumbi e de Palmares. Em 1971, o Grupo Palmares, de Porto Alegre, realizou uma homenagem em 20 de novembro, e, em 1978, o Movimento Negro Unificado passou a adotar nacionalmente a data como Dia da Consciência Negra. Em 2011, o 20 de novembro foi instituído oficialmente como Dia Nacional de Zumbi e da Consciência Negra e, por lei sancionada em 2023, tornou-se feriado nacional, celebrado em todo o país a partir de 2024.\n[…]\nA cabeça de Zumbi foi enviada a Caetano de Melo e Castro, que ordenou que fosse colocada num poste; na carta, o local é referido apenas como \"o lugar mais público desta praça\", com o propósito declarado de atemorizar os negros que, segundo o governador, julgavam Zumbi imortal.\n[…]\nO local exato da morte não é indicado na carta de 1696. A identificação posterior com a Serra Dois Irmãos baseia-se numa interpretação publicada por Alfredo Brandão em 1914, a partir da referência documental a um \"sumidouro\" onde Zumbi procurara ocultar-se; a localização permaneceu posteriormente discutida.\n[…]\nA afirmação de que Zumbi pessoalmente possuía escravos constitui uma alegação distinta. As fontes que documentam formas de cativeiro e estratificação em Palmares não atribuem a Zumbi a propriedade individual de cativos. A alegação tornou-se especialmente presente em polêmicas públicas recentes, mas tem sido assinalada na literatura acadêmica como não demonstrada documentalmente."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tiradentes",
        "situacao": "ok",
        "texto": "Joaquim José da Silva Xavier (Fazenda do Pombal, termo da Vila de São José del-Rei, batizado em 12 de novembro de 1746 - Rio de Janeiro, 21 de abril de 1792), conhecido como Tiradentes, foi um militar e ativista político do Brasil, notabilizado por sua participação na Conjuração Mineira, conspiração de caráter separatista contra o domínio de Portugal.\n[…]\nSua circulação por áreas urbanas e rotas comerciais contribuiu para a ampliação do alcance dessas ideias, embora também tenha exposto sua atuação a maior vigilância por parte das autoridades coloniais.\n[…]\nSua cabeça foi enviada para Vila Rica, onde foi exibida em local público como forma de exemplificação punitiva.\n[…]\nA institucionalização dessa memória incluiu a criação de cerimônias cívicas, a denominação de espaços públicos e a consagração da data de sua execução como feriado nacional.\n[…]\nReivindicações contemporâneas de descendência, bem como concessões de pensões estatais a supostos herdeiros, têm sido objeto de debate público e jurídico, embora a documentação histórica disponível não comprove de forma conclusiva a existência de linhagem direta de Tiradentes.\n[…]\nA partir do final do século XIX, sua imagem passou a ser incorporada a cerimônias oficiais, monumentos públicos e instituições estatais, configurando um processo de monumentalização da memória histórica. Além de nomear importantes logradouros pelo Brasil: como a Avenida Tiradentes e o bairro Cidade Tiradentes (São Paulo); Praça Tiradentes(Ouro Preto); Praça Tiradentes (Belo Horizonte); Praça Tiradentes (Rio de Janeiro); Praça Tiradentes (Curitiba).\n[…]\nA presença de Tiradentes na cultura popular manifesta-se em diferentes expressões, incluindo festas cívicas, denominação de espaços públicos e representações carnavalescas.\n[…]\nFigueiredo, Lucas (2018). O Tiradentes. São Paulo: Companhia das Letras\n[…]\nTiradentes e seus juízes"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Lei do Ventre Livre",
      "descricao": "Lei brasileira de 1871 que declarou livres os filhos de mulheres escravizadas nascidos a partir de então."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que integrante da família imperial assinou tanto a Lei do Ventre Livre, de 1871, quanto a Lei Áurea, de 1888?",
    "resposta": "Princesa Isabel",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Lei_do_Ventre_Livre",
      "https://pt.wikipedia.org/wiki/Lei_Áurea"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Lei_do_Ventre_Livre",
        "situacao": "ok",
        "texto": "Lei do Ventre Livre (Lei n.º 2040/1871), também conhecida como Lei Rio Branco, foi uma lei apresentada na Câmara dos Deputados em 12 de maio de 1871, sendo promulgada em 28 de setembro do mesmo ano. A fim de limitar a duração da escravidão no Brasil Imperial, a lei propunha, a partir da data de sua promulgação, a concessão da alforria às crianças nascidas de mulheres escravas no Império do Brasil.\n[…]\nDe toda forma, em 28 de setembro de 1871, o Senado aprova a lei nº 2040, que já havia sido aprovada pela Câmara dos Deputados. A Lei do Ventre Livre foi aprovada sob o Gabinete do Visconde do Rio Branco, José Maria da Silva Paranhos, cujo objetivo era possibilitar a transição, lenta e gradual, no Brasil do sistema de escravidão para o de mão-de-obra livre, de forma a não romper bruscamente com os interesses econômicos escravocratas.\n[…]\nAntecedida pela Lei Bill Aberdeen e sucedida pela Lei dos Sexagenários e pela Lei Áurea, a Lei do Ventre Livre representa o clímax do período de emancipação da escravatura. Após sua promulgação, dá-se início ao período de abolição da escravatura, diferença observada pelo historiador Evaristo de Morais; enquanto aquele é caracterizado pela preparação progressiva do escravo para a liberdade, este consiste no fim imediato do sistema escravocrata.\n[…]\nFirmada pela Princesa Isabel, em sua Primeira Regência, em virtude da primeira viagem do Imperador D. Pedro II à Europa, a Lei foi patrocinada pelo gabinete liderado por José Maria da Silva Paranhos, Visconde do Rio Branco.\n[…]\nPolítico, diplomata e jornalista, o visconde foi responsável pelo patrocínio da Lei do Ventre Livre, denominada Lei Rio Branco. Nascido em 1819 na capitania da Baía de Todos-os-Santos, Rio Branco entrou para a política na década de 1840, vindo a ser nomeado Presidente do Conselho de Ministros em 1871.\n[…]\nLei Áurea\n[…]\nDiretoria da Agricultura (Império)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lei_Áurea",
        "situacao": "ok",
        "texto": "Lei Áurea, oficialmente Lei n.º 3 353 de 13 de maio de 1888, é a lei que extinguiu a escravidão no Brasil.\n[…]\nAprovado com 85 votos favoráveis e 9 votos contrários na Câmara Geral (Câmara dos Deputados), e um contrário no Senado do Império, foi à sanção da princesa regente Isabel, em 13 de maio. A única alteração do projeto de lei do governo, feita pela Câmara Geral, foi introduzir no texto a expressão \"desde a data desta lei\", para que a lei entrasse em vigor imediatamente, antes de ser publicada nas províncias, o que costumava levar um mês, no mínimo.\n[…]\nEstudos mais recentes de alguns historiadores e juristas, principalmente com a divulgação, pela Revista Nossa História, de uma carta que a princesa Isabel endereçou ao Visconde de Santa Vitória, datada de 11 de agosto de 1889, tem traçado um revisionismo na questão histórica da pós-escravatura a respeito da corrente dominante de pensamento na historiografia política, no contexto do abandono social dos afro-brasileiros após a efetivação da Lei Áurea.\n[…]\nTendo sido editada em três vias, cada cópia da Lei Áurea foi assinada por três penas douradas idênticas. Pedro Carlos de Orleães e Bragança vendeu, ao Museu Imperial de Petrópolis, a pena dourada com a qual sua bisavó, a princesa Isabel do Brasil, assinou a primeira via da Lei Áurea, pela soma de 500 000 reais. A pena dourada havia sido mantida como herança entre os primogênitos do Ramo de Petrópolis dos descendentes de Isabel do Brasil.\n[…]\nAnais do Parlamento Discussão e votação da Lei Áurea no Senado do Império\n[…]\nAnais da Câmara Geral dos Deputados, sessões de 27 de abril a 02 de junho de 1888"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Hino da Carta",
      "descricao": "Hino nacional de Portugal entre 1834 e 1910, com música composta por Dom Pedro."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O Hino da Independência do Brasil e o antigo hino nacional de Portugal tiveram a música composta pela mesma pessoa. Quem?",
    "resposta": "Dom Pedro I",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Hino_da_Carta",
      "https://pt.wikipedia.org/wiki/Hino_da_Independência_do_Brasil"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Hino_da_Carta",
        "situacao": "ok",
        "texto": "O Hino da Carta (Hymno da Carta na grafia antiga) foi o hino nacional do Reino de Portugal entre maio de 1834 e outubro de 1910. Escrito pelo então Príncipe Real, D. Pedro — futuro rei de Portugal — no Brasil, em 1821, ficou associado à Carta Constitucional que o próprio outorgou aos portugueses em 1826, sendo comumente considerado uma homenagem a ela, apesar de ter sido composto antes da promulga\n[…]\nVigorou ao longo de todas as reformas da Constituição de 1826, assim como durante a segunda vigência da Carta de 1822 e a vigência da Constituição de 1838.\n[…]\nO hino generalizou-se com a denominação oficial de Hymno da Carta, tendo sido considerado oficialmente como Hymno Nacional, e por isso obrigatório em todas as solenidades públicas, a partir de sua oficialização por D. Maria II em maio de 1834.\n[…]\nCom a música do Hymno da Carta compuseram-se variadas obras de natureza popular (modas) ou dedicadas a acontecimentos e personalidades de relevo, identificando-se em pleno com a vida política e social dos últimos setenta anos da monarquia em Portugal.\n[…]\nDepois da implantação da República, em 5 de outubro de 1910, o Hino da Carta foi substituído pel'A Portuguesa como hino nacional português.\n[…]\nAlberto José Vieira Pacheco e Rui Magno Pinto realizaram uma análise musicológica do Hino da Carta, junto a outros hinos compostos por Pedro IV e seu mestre Marcos Portugal."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hino_da_Independência_do_Brasil",
        "situacao": "ok",
        "texto": "O Hino da Independência é uma canção patriótica oficial comemorando a declaração da Independência do Brasil. A letra do Hino da Independência, escrita pelo jornalista e político Evaristo da Veiga (1799–1837) em agosto de 1822, recebeu inicialmente o título de \"Hino Constitucional Brasiliense\", com música de Marcos Portugal. Foi transformado em Hino da Independência, musicado por D. Pedro I, em 182\n[…]\nSomente em 1922, quando do centenário da independência, ele voltaria a ser executado.\n[…]\nDe acordo com uma versão divulgada por Eugênio Egas em 1909, a música teria sido composta pelo Imperador na tarde do mesmo dia da Independência do Brasil, 7 de setembro de 1822 (quando já estava de volta a São Paulo vindo de Santos), tendo sido partiturado às pressas pelo mestre de capela da Catedral de São Paulo, André da Silva Gomes, para execução na noite desse dia, na Casa da Ópera (ao pátio do Palácio do Governo, antigo Colégio dos Jesuítas), por cantores e uma pequena orquestra.\n[…]\nA versão de Eugênio Egas, por outro lado, nunca foi referida nos jornais brasileiros de 1822 e nunca foi comprovada com documentação do período, tendo circulado somente a partir do início do século XX. A letra do Hino Constitucional Brasiliense foi publicada pela Typographia do Diário, em 1822, conforme documentação do Arquivo Nacional.\n[…]\nIndependência do Brasil\n[…]\nHino Nacional Brasileiro\n[…]\nHino da Carta\n[…]\nSímbolo nacional\n[…]\nSímbolos do Brasil\n[…]\n«Símbolos Nacionais — Presidência da República Federativa do Brasil»\n[…]\n«Partitura do Hino»"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Conjunto Moderno da Pampulha",
      "descricao": "Conjunto arquitetônico em torno da lagoa da Pampulha, em Belo Horizonte, projetado por Oscar Niemeyer nos anos 1940."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que político encomendou tanto o conjunto arquitetônico da Pampulha, em Belo Horizonte, quanto a construção de Brasília?",
    "resposta": "Juscelino Kubitschek",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Conjunto_Moderno_da_Pampulha",
      "https://pt.wikipedia.org/wiki/Juscelino_Kubitschek"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Conjunto_Moderno_da_Pampulha",
        "situacao": "inexistente",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Juscelino_Kubitschek",
        "situacao": "ok",
        "texto": "Juscelino Kubitschek de Oliveira (Diamantina, 12 de setembro de 1902 – Resende, 22 de agosto de 1976), também conhecido pelas suas iniciais JK, foi um médico, oficial da Polícia Militar mineira e político brasileiro. Foi o 21.º Presidente do Brasil, entre 1956 e 1961. Concluiu o curso de humanidades do Seminário de Diamantina e em 1920 mudou-se para Belo Horizonte. Em 1927, formou-se em medicina p\n[…]\nEm seu mandato presidencial, Juscelino Kubitscheck lançou o Plano Nacional de Desenvolvimento, também chamado de Plano de Metas, que tinha o célebre lema \"Cinquenta anos em cinco\". O plano tinha 31 metas distribuídas em cinco grandes grupos: energia, transportes, alimentação, indústria de base, educação e a meta principal ou meta-síntese: a construção de Brasília.\n[…]\nApesar do crescimento econômico, a construção de Brasília fez com que o mandato de Juscelino Kubitschek terminasse com crescimento da inflação, aumento da concentração de renda e arrocho salarial. Em 1956, a taxa de inflação era de 19,2%, e em 1960, de 30,9%. Ocorreram várias manifestações populares, com greves na zona rural e nos centros industriais que se alastram nos governos seguintes.\n[…]\nUm ano antes de sua morte, seu nome ainda era proibido na televisão brasileira. Assim, a telenovela Escalada, exibida em 1975, pela Rede Globo, em que era tratado o tema da construção de Brasília, não pôde mencionar o seu nome. O recurso usado pelo autor Lauro César Muniz foi mostrar os personagens assoviando a música \"Peixe-Vivo\" que identificava Juscelino Kubitschek.\n[…]\nJuscelino Kubitschek é geralmente admirado pela população brasileira como um visionário empreendedor, que concretizou seus planos em grandes obras, dando sequência ao processo de modernização do país iniciado por Getúlio Vargas - conquanto Juscelino não mantivesse o mesmo apelo nacionalista que caracterizara o governo de seu antecessor."
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Maria Leopoldina da Áustria",
      "descricao": "Arquiduquesa austríaca, primeira esposa de Dom Pedro I e primeira imperatriz do Brasil."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que parentesco unia a imperatriz Leopoldina, esposa de Dom Pedro Primeiro, a Maria Luísa, segunda esposa de Napoleão?",
    "resposta": "Eram irmãs",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Maria_Leopoldina_da_Áustria"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Maria_Leopoldina_da_Áustria",
        "situacao": "ok",
        "texto": "Maria Leopoldina da Áustria (nome pessoal em alemão: Caroline Josepha Leopoldine Franziska Ferdinanda; Viena, 22 de janeiro de 1797 – Rio de Janeiro, 11 de dezembro de 1826) foi a primeira imperatriz consorte do Brasil, como esposa do imperador Pedro I, de 12 de outubro de 1822 até sua morte. Também foi rainha consorte de Portugal durante o breve reinado de seu marido como rei Pedro IV, entre 10 d\n[…]\nNascida em Viena, no Império Austríaco, era filha de Francisco II, Sacro Imperador Romano-Germânico e de sua segunda esposa, Maria Teresa de Nápoles e Sicília. Entre seus irmãos estavam o imperador Fernando I da Áustria e Maria Luísa, duquesa de Parma, segunda esposa de Napoleão Bonaparte. Recebeu uma educação ampla e sólida, característica da Casa de Habsburgo, que incluía formação científica, cultural e política.\n[…]\nMaria Leopoldina foi a quinta filha, terceira sobrevivente, e a quarta menina, segunda sobrevivente, nascida do segundo casamento de Francisco com Maria Teresa de Nápoles e Sicília. Seus avós paternos eram Leopoldo II, Sacro Imperador Romano, e a infanta Maria Luísa da Espanha. Seus avós maternos eram o rei Fernando IV e III de Nápoles e Sicília, posteriormente Fernando I das Duas Sicílias, e a arquiduquesa Maria Carolina da Áustria.\n[…]\nMaria Leopoldina nasceu em um período particularmente turbulento da história europeia. Em 1799, Napoleão Bonaparte tornou-se Primeiro Cônsul da França e, posteriormente, Imperador, dando início a uma série de conflitos e à formação de sistemas de alianças conhecidos como \"Coalizões\", que frequentemente redefiniram as fronteiras do continente europeu. A Áustria participou ativamente de todas as Guerras Napoleônicas, combatendo a França, sua tradicional inimiga.\n[…]\nEste artigo foi inicialmente traduzido, total ou parcialmente, do artigo da Wikipédia em inglês cujo título é «Maria Leopoldina of Austria», especificamente desta versão."
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Floriano Peixoto",
      "descricao": "Marechal que foi o segundo presidente do Brasil, entre 1891 e 1894."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Além de serem marechais, o que Deodoro da Fonseca e Floriano Peixoto, os dois primeiros presidentes do Brasil, têm em comum na origem?",
    "resposta": "Nasceram em Alagoas",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Floriano_Peixoto",
      "https://pt.wikipedia.org/wiki/Deodoro_da_Fonseca"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Floriano_Peixoto",
        "situacao": "ok",
        "texto": "Floriano Vieira Peixoto (Maceió, 30 de abril de 1839 – Barra Mansa, 29 de junho de 1895), cognominado \"O Marechal de Ferro\" ou \"Consolidador da República\", foi um militar e político brasileiro que serviu como segundo presidente do Brasil de 1891 a 1894. Anteriormente, de fevereiro a novembro de 1891, foi o primeiro vice-presidente do Brasil. Seu governo abrange a maior parte do período da história\n[…]\nRetornou à capital em 1870 para completar seu bacharelado em ciências físicas e matemáticas, concluindo a disciplina de mineralogia, única que restava para concluir o curso. Dois anos depois, em 11 de maio, casou-se com a filha de seu pai adotivo Josina Vieira Peixoto, no engenho de Itamaracá, perto de Murici, Alagoas, com quem viria a ter oito filhos.\n[…]\nAconteceu em 1893, desta vez contra o presidente, marechal Floriano Peixoto. Esta também foi chefiada pelo almirante Custódio de Melo, depois substituído pelo almirante Saldanha da Gama. Floriano não cedeu às ameaças; assim, o almirante ordena o bombardeio da capital brasileira. No ano seguinte Floriano e o exército brasileiro obtiveram apoio da marinha de guerra norte-americana no rompimento do bloqueio naval imposto pela marinha brasileira.\n[…]\nFloriano Peixoto, em seus três anos de governo como presidente, enfrentou a Revolução Federalista no Rio Grande do Sul, iniciada em fevereiro de 1893. Ao atacá-la, apoiou Júlio Prates de Castilhos.[carece de fontes]? O apelido de \"Marechal de Ferro\" se popularizou devido a sua impiedade diante das mortes que causou afim de suprimir a população envolvida na Revolução Federalista, que ocorreu na cidade de Desterro (atual Florianópolis), como na Segunda Revolta da Armada.\n[…]\nMinistros do Governo Floriano Peixoto\n[…]\nSILVA, Hélio, Floriano Peixoto - Segundo Presidente do Brasil - 1891 1894, Editora Três, 1983.\n[…]\n«Sítio oficial da Presidência da República do Brasil - O governo Floriano Peixoto»"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Deodoro_da_Fonseca",
        "situacao": "ok",
        "texto": "Manuel Deodoro da Fonseca (Alagoas da Lagoa do Sul, 5 de agosto de 1827 – Rio de Janeiro, 23 de agosto de 1892) foi um militar e político brasileiro, conhecido por ser o primeiro presidente do Brasil, após liderar o movimento que resultou na Proclamação da República em 15 de novembro de 1889.\n[…]\nCoronel honorário do exército brasileiro, Pedro Paulino da Fonseca foi governador de Alagoas, logo quando proclamaram a república, e também senador pelo mesmo estado. Além disso, foi pai de Orsina da Fonseca, esposa do filho de um outro irmão seu, também seu sobrinho, o presidente da República marechal Hermes da Fonseca, compondo, portanto, um casamento entre primos.\n[…]\nDeodoro da Fonseca nasceu em 5 de agosto de 1827, na Vila de Alagoas da Lagoa do Sul, na antiga província homônima, hoje cidade que leva o nome de Marechal Deodoro. Ele era filho de Manuel Mendes da Fonseca (1785-1859) e Rosa Maria Paulina da Fonseca (1802-1873). Seu pai também foi militar, chegando à patente de tenente-coronel, e pertencia ao Partido Conservador. Em 1845, já era cadete de primeira classe.\n[…]\nDeodoro da Fonseca apresentou-se como candidato a Presidente, tendo, como candidato a vice, na mesma chapa, o almirante Eduardo Wandenkolk. Presidente e vice seriam eleitos separadamente. Como já havia forte oposição a Deodoro, esta articulou a candidatura de Prudente de Morais, o presidente do Congresso, tendo o marechal Floriano Peixoto como candidato a vice. Floriano, além de candidatar-se a vice-presidente, na chapa de Prudente de Morais, apresentou, também, candidatura própria à Presidência.\n[…]\nNa sua terra natal, Marechal Deodoro (Alagoas), na casa onde nasceu, existe o Museu Marechal Deodoro da Fonseca.\n[…]\n«O governo Deodoro da Fonseca no sítio oficial da Presidência da República do Brasil»"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Theatro da Paz",
      "descricao": "Teatro histórico de Belém, no Pará, inaugurado em 1878."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O Teatro Amazonas, em Manaus, e o Theatro da Paz, em Belém, foram erguidos com a riqueza de qual produto?",
    "resposta": "Borracha",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Theatro_da_Paz",
      "https://pt.wikipedia.org/wiki/Teatro_Amazonas"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Theatro_da_Paz",
        "situacao": "ok",
        "texto": "Theatro da Paz (inicialmente chamado Nossa Senhora da Paz) localiza-se na Praça da República, em Belém, Pará. Foi projetado pelo engenheiro pernambucano José Tibúrcio Pereira Magalhães no estilo neoclássico e inaugurado em 1878 no contexto da então província do Grão-Pará (1821–1889) e do período áureo da exploração da borracha na Amazônia (1871–1914).\n[…]\nA presença do teatro na Praça Dom Pedro II impactou a região, valorizando-a e consolidando-a como polo cultural da cidade de Belém; criava-se assim o Polígono da Cultura, formado pelo Palace Bolonha, Grande Hotel, Cine Olympia e pelo Theatro da Paz, local onde ocorriam muitas visitas ilustres e local comum de reunião da aristocracia de Belém que, elegantemente trajada à moda parisiense, desfilava joias e vaidades.\n[…]\nAli Carlos Gomes encenou sua ópera O Guarani, e a bailarina russa Anna Pavlova passou com suas sapatilhas. O decorador desse cenário privilegiado foi o italiano Domenico de Angelis, que, posteriormente, decorou o Teatro Amazonas de Manaus. Ele foi também o autor do belo painel representando os deuses gregos Apolo e Diana no cenário amazônico que fica no teto da sala de espetáculos. Dele também era o teto de jover, perdido por causa de uma infiltração.\n[…]\nDurante o ciclo da borracha, as mais famosas companhias líricas se apresentaram ali. Com o declínio da borracha, o Theatro da Paz passou por grandes dificuldades. Sem apresentações, estava quase sempre fechado, e as restaurações não eram suficientes para lhe garantir um bom funcionamento.[carece de fontes]?\n[…]\nO Theatro mistura o estilo neoclássico com elementos amazônicos, como se vê no hall de entrada, com seu piso formado por pedras portuguesas com desenhos marajoaras e piso em acapu e pau-amarelo, lustres de cristal francês, estátuas de ferro inglesas e escadas de mármore italiano.\n[…]\n«Festival de ópera do Theatro (FOTP)»"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Teatro_Amazonas",
        "situacao": "ok",
        "texto": "Teatro Amazonas é uma casa de ópera localizada em Manaus, no estado do Amazonas, sendo o principal cartão-postal da cidade. Situado no Largo de São Sebastião, no Centro Histórico, foi inaugurado em 1896 para atender ao desejo da elite amazonense da época, que idealizava a cidade à altura dos grandes centros culturais. É amplamente considerado como um dos mais belos teatros do mundo.\n[…]\nPor ser uma obra singular no Brasil e representar o apogeu de Manaus durante o ciclo da borracha, foi reconhecido como Patrimônio Mundial pela UNESCO em 2026.\n[…]\nManaus estava no auge do ciclo da borracha e era embalada pela riqueza provida da extração do látex amazônico, altamente valorizado pelas indústrias europeias e americanas. O projeto arquitetônico foi escolhido pelo Gabinete Português de Engenharia e Arquitetura de Lisboa em 1883. No entanto, devido as discussões sobre o terreno para a construção e os custos do trabalho, foi iniciado em 1884 com a pedra fundamental.\n[…]\nNesse salão, que tem características barrocas, o piso de madeira brasileira e européia exige cuidados para que sua beleza se perpetue. Nele, os barões da borracha se encontravam quando do intervalo das representações teatrais e dele se utilizavam para realizar os seus bailes. A pintura do teto, obra-prima de autoria de Domenico, é denominada A Glorificação das Bellas Artes na Amazônia.\n[…]\nNo romance policial português “Longe de Manaus”, o Teatro Amazonas é algumas vezes citado; tal qual nas obras literárias de Eva Ibbotson, “Journey to the River Sea” e “A Company of Swans”;\n[…]\nNa minissérie da teledramaturgia brasileira “Amazônia, de Galvez a Chico Mendes” de 2007, o teatro serviu como plano de fundo na primeira parte da minissérie para o cenário de Manaus do século XIX.\n[…]\n«Secretaria de Estado de Cultura do Amazonas»\n[…]\n«Museu do Teatro Amazonas»\n[…]\n«Teatro Amazonas no Youtube»\n[…]\n«Viva Manaus»"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Brasília",
      "descricao": "Capital federal do Brasil, cidade planejada inaugurada em 1960."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Brasília foi inaugurada em vinte e um de abril de 1960, data escolhida para homenagear qual personagem da história do Brasil?",
    "resposta": "Tiradentes",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Brasília"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Brasília",
        "situacao": "ok",
        "texto": "Brasília (AFI: [bɾaˈzilja] ou AFI: [bɾaˈziʎa]) é a capital federal do Brasil e a sede de governo do Distrito Federal. A capital está localizada na região Centro-Oeste do país, ao longo da região geográfica conhecida como Planalto Central. Segundo o Censo do Instituto Brasileiro de Geografia e Estatística (IBGE)/2022, sua população é de 2 817 381 habitantes, sendo, então, a terceira cidade mais pop\n[…]\nInaugurada em 21 de abril de 1960, pelo então presidente Juscelino Kubitschek, Brasília tornou-se formalmente a terceira capital do Brasil, após Salvador e Rio de Janeiro. Vista de cima, a principal área da cidade é descrita frequentemente como tendo o formato de um avião, mas a proposta inicial de Lúcio Costa era de que se assemelhasse ao sinal da cruz, e um dos eixos foi depois arqueado para se adaptar ao relevo da região.\n[…]\nPara fazer a transferência simbólica da capital do Rio para Brasília, Juscelino fechou solenemente os portões do Palácio do Catete, então transformado em Museu da República, às 9 da manhã do dia 21 de abril de 1960, ao que a multidão reagiu com aplausos. A cidade de Brasília foi inaugurada no mesmo dia e mês em que ocorreu a execução de Joaquim José da Silva Xavier, líder da Inconfidência Mineira, e a fundação de Roma.\n[…]\nAinda na história meteorológica de Brasília, houve geada em 10 de junho de 1985, quando a temperatura mínima chegou a 3,3 °C, a mais baixa registrada em um mês de junho.\n[…]\nOs principais museus de Brasília estão localizados no Eixo Monumental. O Panteão da Pátria e da Liberdade Tancredo Neves, projetado por Oscar Niemeyer em forma de pomba e inaugurado em 1986 traz o \"Livro dos Heróis da Pátria\" com a história daqueles que teriam lutado pela união da nação. O Memorial JK apresenta diversos objetos pessoais (fotos, presentes, cartas) e o próprio túmulo do idealizador da cidade.\n[…]\nHistória do Brasil\n[…]\nNaturais de Brasília\n[…]\nBrasília no WikiMapia"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Carmen Miranda",
      "descricao": "Cantora e atriz que se tornou símbolo do Brasil em Hollywood nos anos 1940."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Símbolo do Brasil em Hollywood nos anos quarenta, a cantora Carmen Miranda nasceu em qual país?",
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
        "texto": "Maria do Carmo Miranda da Cunha (Marco de Canaveses, 9 de fevereiro de 1909 – Beverly Hills, 5 de agosto de 1955), mais conhecida como Carmen Miranda, foi uma cantora, dançarina, e atriz luso-brasileira. Sua carreira artística transcorreu no Brasil e nos Estados Unidos entre as décadas de 1930 e 1950. Trabalhou no rádio, no teatro de revista, no cinema e na televisão.\n[…]\nNasceu a 9 de fevereiro de 1909 no lugar da Obra Nova, freguesia da Aliviada (posteriormente, Várzea da Ovelha e Aliviada), no concelho de Marco de Canaveses, em Portugal. Foi batizada com o nome de Maria do Carmo na igreja de São Martinho da Aliviada (posteriormente, Várzea da Ovelha e Aliviada), anexa à igreja de Várzea da Ovelha, a 14 de fevereiro de 1909.\n[…]\nEra a segunda filha do barbeiro José Maria Pinto da Cunha (Marco de Canaveses, Várzea da Ovelha e Aliviada, 17 de fevereiro de 1887 – Rio de Janeiro, 20 de junho de 1938) e de sua mulher, Maria Emília de Miranda (Marco de Canaveses, Várzea da Ovelha e Aliviada, 3 de março de 1886 – Rio de Janeiro, 9 de novembro de 1971). Ganhou o apelido de Carmen no Brasil, graças ao gosto que seu tio Amaro tinha por óperas.\n[…]\nEm 2015, o grupo português Real Combo Lisbonense lançou o álbum Saudade De Você, pela Pataca Discos, que apresenta interpretações de algumas das canções mais conhecidas de Carmen Miranda, celebrando sua música e legado.\n[…]\nOs direitos autorais de Carmen Miranda, segundo as leis brasileiras, estiveram em posse dos seus herdeiros até 2025, quando se completaram setenta anos da sua morte. Em 2008, Carmem Guimarães e Maria Paula (sobrinhas de Carmen) se juntaram com outros dois herdeiros, Gabriel (irmão de Maria Paula) e Suely (filha adotiva de Mário, irmão de Carmen) e criaram a Carmen Miranda Administração e Licenciamento, com o objetivo de gerir a imagem da artista e aumentar a sua receita.\n[…]\nCarmen Miranda no IMDb"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Lampião",
      "descricao": "Virgulino Ferreira da Silva, o mais famoso líder do cangaço no sertão nordestino, morto em 1938."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em 1938, Lampião e Maria Bonita foram mortos numa emboscada na Grota de Angico. Em que estado fica esse lugar?",
    "resposta": "Sergipe",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Lampião",
      "https://en.wikipedia.org/wiki/Lampião"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Lampião",
        "situacao": "ok",
        "texto": "Lampião, lanterna, luminária, lamparina ou candeeiro é um objeto destinado à iluminação, geralmente constituído por uma armação de metal (embora pudesse ser de outro material, como cerâmica) com um anteparo transparente (geralmente de vidro) para proteger a fonte de luz, que pode ser uma vela, uma chama abastecida por combustível (querosene ou gás, por exemplo) ou mesmo vagalumes, como era costume\n[…]\nAntes do surgimento das lâmpadas elétricas, as lanternas eram usadas para iluminação noturna, sendo carregadas em carruagens, . O lampião a gás foi inventado em 1792, e foi uma das circunstâncias que possibilitaram o aumento da jornada de trabalho nas fábricas, principalmente da Inglaterra. O lampião ainda é usado em diversas culturas, como objeto de iluminação ou de decoração para atividades noturnas.\n[…]\nSeu uso atual se dá em residências para casos de falta de energia elétrica (ou onde não há fornecimento desta), acampamentos ou minas. O lampião é um tipo de lanterna."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Lampião",
        "situacao": "ok",
        "texto": "\"Captain\" Virgulino Ferreira da Silva (Brazilian Portuguese: [feˈʁejɾɐ da ˈsiwvɐ]; 7 July 1897 – 28 July 1938), better known as Lampião (older spelling: Lampeão, Portuguese pronunciation: [lɐ̃piˈɐ̃w], meaning \"lantern\" or \"oil lamp\"), was probably the twentieth century's most successful traditional bandit leader. The banditry endemic to the Northeast of Brazil, called Cangaço, had origins in the l\n[…]\nIn 1935 Lampião and his band were filmed by Benjamin Abrahão Botto. Once reassured that the camera did not conceal a gun, Lampião co-operated enthusiastically with the filming. The film-stock was soon confiscated by the police, and Abrahão died in 1938. This cinematographic record was rediscovered in 1957, but had physically deteriorated to a great extent. However, several scenes survived, a unique example of moving images of Lampião, Maria Bonita and many other cangaceiros.\n[…]\nOn July 28, 1938, Lampião and his band were betrayed by one of his supporters, Joca Bernardes, and were ambushed in one of his hideouts, the Angicos farm, in the Poço Redondo area of  the state of Sergipe. Bernardes, after first meeting Lampião in 1928, had dreamed that he would play a part in causing the famous bandit's death. A police troop, led by João Bezerra and armed with machine guns, attacked the encamped bandits at daybreak.\n[…]\nLevino Ferreira – Lampião's brother, killed in battle with police in July 1925.\n[…]\nFor the 2023 edition of the Carnival parade of the Rio de Janeiro samba schools Imperatriz Leopoldinense dedicated their performance to Lampião’s memory, complete with themes and images from his life. Expedita Ferreira, Lampião and Maria Bonita's only child, participated in the parade being featured on the last float in the procession.\n[…]\nO lugar que ele habita, não falta moça bonita ---       The place he lives in, does not lack pretty girls"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Batalha dos Guararapes",
      "descricao": "Confrontos de 1648 e 1649 em que tropas luso-brasileiras venceram os holandeses no Nordeste."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Considerada o marco de origem do Exército Brasileiro, a Batalha dos Guararapes, contra os holandeses, ocorreu em qual atual estado?",
    "resposta": "Pernambuco",
    "distratores": [
      "Bahia",
      "Paraíba",
      "Rio Grande do Norte"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/First_Battle_of_Guararapes",
      "https://pt.wikipedia.org/wiki/Batalha_dos_Guararapes"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/First_Battle_of_Guararapes",
        "situacao": "ok",
        "texto": "The First Battle of Guararapes took place during the Insurrection of Pernambuco, between Dutch and Portuguese forces in Pernambuco, in a dispute for the dominion of that part of the Portuguese colony of Brazil.\n[…]\nCommanders of the resistance called for a march of 2,000 combatants towards the Jaboatão dos Guararapes (\"Drums\" in native language) Hills against an enemy better equipped and in superior numbers.\n[…]\nFrancisco Barreto de Meneses, the Portuguese commander (Mestre-de-Campo-General), had recently arrived to that region and decided to follow his subordinate's suggestions: they would go to their enemy instead, and force the Dutch troops into a decisive encounter. This was a bold move, considering they had half the numbers of their adversaries, and no artillery.\n[…]\nSecond Battle of Guararapes\n[…]\nParque Histórico Nacional dos Guararapes\n[…]\nGarcia, Rodolfo (2012). Obras do Barão do Rio Branco VI: efemérides brasileiras (in Portuguese). Brasília: Fundação Alexandre de Gusmão. ISBN 978-85-7631-357-1."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Batalha_dos_Guararapes",
        "situacao": "ok",
        "texto": "A Batalha dos Guararapes foi um confronto militar travado em 18 e 19 de abril de 1648 e depois em 19 de fevereiro de 1649, entre o Exército da Holanda e as tropas do Império Português. As batalhas aconteceram no Monte dos Guararapes, localizado na atual Jaboatão dos Guararapes, município da Região Metropolitana do Recife, na então Capitania de Pernambuco, atual estado de Pernambuco.\n[…]\nA dupla vitória portuguesa, nos montes Guararapes, é considerada o episódio decisivo da Insurreição Pernambucana, que pôs fim às invasões holandesas no Brasil e ao chamado \"Brasil Holandês\" (Nova Holanda, para os holandeses), no século XVII. A assinatura da capitulação holandesa deu-se em 1654, no Recife, de onde partiram os últimos navios batavos em direção à Europa.\n[…]\nO primeiro confronto travado entre o exército da Holanda e os defensores do Império Português aconteceu em 18 e 19 de abril de 1648 no Morro dos Guararapes, Capitania de Pernambuco, Brasil Colonial.\n[…]\nPorém, os generais Fernandes Vieira e Vidal de Negreiros, sabendo dos planos de invasão, impediram a ação no Morro dos Guararapes, por onde os holandeses, vindos do Recife, teriam que passar para chegar a Muribeca. Este primeiro confronto terminou com vitória luso-brasileira, apesar do seu efetivo não passar de 2 200 homens, contra 7 400 do exército inimigo. O saldo da guerra foi de 1 200 holandeses mortos, sendo 180 oficiais e sargentos. Do lado luso-brasileiro, foram 84 mortos.\n[…]\nQuanto às perdas sofridas pelos holandeses às mãos dos portugueses, existe um documento contemporâneo publicado em Viena, no próprio ano da batalha (1649), por um autor anónimo, em alemão e traduzido para castelhano sob o título Relación de la Victoria que los Portugueses de Pernambuco Alcançaron de los de la Compañia del Brasil en los Garerapes 19 de Febrero de 1649, onde se afirma que:\n[…]\nNova Holanda\n[…]\n1ª Batalha dos Guararapes, Áreamilitar"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Tiradentes",
      "descricao": "Joaquim José da Silva Xavier, alferes e principal mártir da Inconfidência Mineira, executado em 1792."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Condenado pela Inconfidência Mineira, Tiradentes foi enforcado em 1792 em qual cidade?",
    "resposta": "Rio de Janeiro",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Tiradentes"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Tiradentes",
        "situacao": "ok",
        "texto": "Joaquim José da Silva Xavier (Fazenda do Pombal, termo da Vila de São José del-Rei, batizado em 12 de novembro de 1746 - Rio de Janeiro, 21 de abril de 1792), conhecido como Tiradentes, foi um militar e ativista político do Brasil, notabilizado por sua participação na Conjuração Mineira, conspiração de caráter separatista contra o domínio de Portugal.\n[…]\nTiradentes foi preso em maio de 1789, na cidade do Rio de Janeiro, onde se encontrava em viagem.\n[…]\nTiradentes foi executado por enforcamento em 21 de abril de 1792, na cidade do Rio de Janeiro, conforme determinação da sentença judicial.\n[…]\nA partir do final do século XIX, sua imagem passou a ser incorporada a cerimônias oficiais, monumentos públicos e instituições estatais, configurando um processo de monumentalização da memória histórica. Além de nomear importantes logradouros pelo Brasil: como a Avenida Tiradentes e o bairro Cidade Tiradentes (São Paulo); Praça Tiradentes(Ouro Preto); Praça Tiradentes (Belo Horizonte); Praça Tiradentes (Rio de Janeiro); Praça Tiradentes (Curitiba).\n[…]\nAutos da Devassa da Inconfidência Mineira. Rio de Janeiro: Biblioteca Nacional. 1976\n[…]\nBarreiros, Eduardo Canabrava; Instituto Nacional do Livro (1976). As Vilas del-Rei e a Cidadania de Tiradentes. Col: Documentos Brasileiros. 172. Rio de Janeiro: José Olympio\n[…]\nDolci, Mariana de Carvalho (2014). Personagem imortal: a construção da memória de Tiradentes no Museu Paulista e no Museu da Inconfidência (Tese de doutorado). São Paulo: Pontifícia Universidade Católica de São Paulo. Cópia arquivada em 14 de janeiro de 2026\n[…]\nKoselleck, Reinhart (2006). Futuro passado. Rio de Janeiro: Contraponto\n[…]\nJardim, Márcio (1989). A Inconfidência Mineira: uma síntese factual. Rio de Janeiro: Biblioteca do Exército. ISBN 857011141X\n[…]\nSilva, Joaquim Norberto de Souza (1873). História da Conjuração Mineira. Rio de Janeiro: B. L. Garnier"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Dom Pedro II",
      "descricao": "Segundo e último imperador do Brasil, que reinou de 1831 a 1889."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Deposto pela República em 1889, Dom Pedro Segundo morreu no exílio dois anos depois. Em qual cidade?",
    "resposta": "Paris",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Pedro_II_do_Brasil"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Pedro_II_do_Brasil",
        "situacao": "ok",
        "texto": "Pedro II (nome completo: Pedro de Alcântara João Carlos Leopoldo Salvador Bibiano Francisco Xavier de Paula Leocádio Miguel Gabriel Rafael Gonzaga; Rio de Janeiro, 2 de dezembro de 1825 – Paris, 5 de dezembro de 1891), cognominado \"o Magnânimo\", foi o segundo e último monarca do Império do Brasil, reinando por 58 anos (1831–1889). Filho mais novo do imperador Pedro I do Brasil e da imperatriz cons\n[…]\nDeposto com a Proclamação da República em 1889, recusou-se a apoiar medidas de força para reverter sua remoção e não endossou tentativas de restauração monárquica por meio de guerra. Viveu os últimos anos em exílio na Europa, falecendo em Paris.\n[…]\nPedro nasceu às 02h30 da manhã do dia 2 de dezembro de 1825 no Palácio de São Cristóvão, na cidade do Rio de Janeiro, Brasil. Batizado em homenagem a São Pedro de Alcântara, seu nome completo era Pedro de Alcântara João Carlos Leopoldo Salvador Bibiano Francisco Xavier de Paula Leocádio Miguel Gabriel Rafael Gonzaga.\n[…]\nA Imperatriz Teresa Cristina morreu na cidade do Porto, três semanas após a sua chegada à Europa e Isabel e sua família se mudaram para outro lugar enquanto seu pai se estabeleceu em Paris. Seus últimos dois anos de vida foram solitários e melancólicos, vivendo em hotéis modestos com quase nenhum recurso, ajudado financeiramente pelo seu amigo Conde de Alves Machado, e escrevendo em seu diário sobre sonhos em que lhe era permitido retornar ao Brasil.\n[…]\nA Princesa Isabel desejava realizar uma cerimônia discreta e íntima, mas acabou por aceitar o pedido do governo francês de realizar um funeral de Estado. No dia seguinte, milhares de personalidades compareceram a cerimônia realizada na Igreja de la Madeleine. Além da família de Pedro II, estavam: o rei Francisco II das Duas Sicílias, a rainha Isabel II da Espanha, Luís Filipe, Conde de Paris, e diversos outros membros da realeza europeia.\n[…]\nBrasileiras:"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Maria II de Portugal",
      "descricao": "Rainha de Portugal no século dezenove, filha mais velha de Dom Pedro I e da imperatriz Leopoldina."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Maria Segunda, rainha de Portugal e filha de Dom Pedro Primeiro, era natural de qual cidade?",
    "resposta": "Rio de Janeiro",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Maria_II_de_Portugal"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Maria_II_de_Portugal",
        "situacao": "ok",
        "texto": "Maria II (nome completo: Maria da Glória Joana Carlota Leopoldina da Cruz Francisca Xavier de Paula Isidora Micaela Gabriela Rafaela Gonzaga; Rio de Janeiro, 4 de abril de 1819 – Lisboa, 15 de novembro de 1853), cognominada \"a Educadora\" e \"a Boa Mãe\", foi Rainha de Portugal e Algarves em duas ocasiões diferentes, primeiro de 1826 até 1828, quando foi deposta pelo seu tio D.\n[…]\nD. Maria da Glória Joana Carlota Leopoldina da Cruz Francisca Xavier de Paula Isidora Micaela Gabriela Rafaela Gonzaga, filha primogênita de D. Pedro I do Brasil e IV de Portugal, então Príncipe Real de Portugal, e de Maria Leopoldina da Áustria, nasceu em 4 de abril de 1819, no Paço de São Cristóvão, no Rio de Janeiro, Brasil, para onde a corte portuguesa havia se transferido em 1807 em decorrência da invasão de Portugal pelos exércitos de Napoleão Bonaparte.\n[…]\nNessa época, D. Maria II ainda vivia no Brasil, sob a proteção do pai. A notícia da usurpação do trono por D. Miguel chegou ao Rio de Janeiro, tornando evidente que ela não poderia viajar para Portugal para assumir a Coroa. Em setembro de 1828, partiu do Rio de Janeiro em direção à Europa, mas não desembarcou em Portugal. Como D. Miguel já havia consolidado o seu poder, permaneceu primeiro em Gibraltar, sob a proteção do Marquês de Barbacena, e, em seguida, na Inglaterra.\n[…]\nSomente em 1831, após abdicar do trono do Brasil em favor de seu filho, D. Pedro II, D. Pedro I regressou à Europa, acompanhado de sua segunda esposa, Amélia de Leuchtenberg, bem como de D. Maria II, para liderar a campanha liberal destinada a restaurar os direitos da filha e reconquistá-la o trono de Portugal. Renunciando definitivamente às suas pretensões à Coroa portuguesa, assumiu o título de Duque de Bragança e exerceu a Regência em nome de D. Maria II.\n[…]\n6 de março de 1821 – 4 de fevereiro de 1822: Sua Alteza, a Infanta D. Maria da Glória de Portugal"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Pátio do Colégio",
      "descricao": "Local no centro de São Paulo onde os jesuítas fundaram o colégio que deu origem à cidade."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Em que ano os jesuítas fundaram o colégio que deu origem à cidade de São Paulo?",
    "resposta": "1554",
    "distratores": [
      "1532",
      "1565",
      "1580"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Pátio_do_Colégio",
      "https://pt.wikipedia.org/wiki/São_Paulo"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Pátio_do_Colégio",
        "situacao": "ok",
        "texto": "Pátio do Colégio é onde foi levantada a primeira construção da cidade de São Paulo, no atual Centro Histórico, quando o padre Manuel da Nóbrega e o então noviço José de Anchieta, bem como outros padres jesuítas a pedido de Portugal e da Companhia de Jesus, estabeleceram um núcleo para fins de catequização de indígenas no Planalto.\n[…]\nEm 25 de janeiro de 1554, foi realizada, diante da cabana coberta de folhas de palmeira de cerca de noventa metros quadrados - ou, como descrita por Anchieta, de dez por catorze passos craveiros (passo craveiro era uma medida linear portuguesa) - a missa que oficializou o nascimento do colégio jesuíta. Este conhecido como Real Colégio de São Paulo de Piratininga.\n[…]\nRemodelou-se totalmente a fachada principal; e sua ala perpendicular, local onde funcionou a primeira sede do Correio Geral de São Paulo, foi derrubada.\n[…]\nA instituição mantém uma programação de concertos com orquestras e corais. O público adulto pode apreciar concertos e apresentações de grupos folclóricos, já as crianças participam de uma série de oficinas de arte e história, teatro de fantoche, caça ao tesouro etc. O museu possui um acervo de arte sacra e diferentes suportes da memória, como iconografia inédita, textos explicativos, mapas e maquete sobre a história do Pátio do Colégio e da cidade de São Paulo no século XVI.\n[…]\nColégio de São Paulo dos Jesuítas: a primeira escola, em pau a pique, data de 1554. A segunda, em taipa de pilão, de 1556. O colégio foi reconstruído entre 1680 e 1694. De 1759 a 1765, sediou a residência da Arquidiocese. De 1765 a 1912, foi sede do Palácio dos Governadores e residência oficial dos Capitães-Generais Governadores de São Paulo. De 1835 a 1879, foi sede também do Legislativo Paulista. O imóvel foi demolido parcialmente e modificado em 1896.\n[…]\n«Pátio do Colégio»\n[…]\n«Pátio do Colégio»"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/São_Paulo",
        "situacao": "ok",
        "texto": "São Paulo é a capital do estado brasileiro de São Paulo. Classificada pela Globalization and World Cities Research Network (GaWC) como uma cidade global alfa, é a área urbana mais populosa do mundo fora da Ásia e exerce significativa influência internacional no comércio, finanças, cultura, gastronomia, artes, moda, tecnologia, entretenimento e mídia, o que lhe garantiu a integração à Rede de Cidad\n[…]\nFundada em 1554 por padres jesuítas, São Paulo é uma das primeiras cidades do Brasil e uma das mais antigas continuadamente habitadas do continente americano, desempenhando um papel estratégico durante o período colonial brasileiro como centro e ponto de partida das expedições dos bandeirantes e núcleo propagador dos costumes e culinária caipiras a outras regiões no período da Paulistânia.\n[…]\nA povoação de São Paulo dos Campos de Piratininga (topônimo indígena que significa \"peixe seco\" ou \"peixe a secar\", após a cheia do rio), por sua vez, surgiu em 25 de janeiro de 1554 com a construção de um colégio jesuíta (atual Pátio do Colégio) por doze padres, entre eles Manuel da Nóbrega e José de Anchieta, no alto de uma colina escarpada, entre os rios Anhangabaú e Tamanduateí.\n[…]\nO nome São Paulo foi escolhido porque o dia da fundação do colégio foi 25 de janeiro, mesmo dia no qual a Igreja Católica celebra a conversão do apóstolo Paulo de Tarso, conforme disse o padre José de Anchieta em carta à Companhia de Jesus: \"A 25 de Janeiro do Ano do Senhor de 1554 celebramos, em paupérrima e estreitíssima casinha, a primeira missa, no dia da conversão do Apóstolo São Paulo e, por isso, a ele dedicamos nossa casa!\".\n[…]\nA literatura na cidade de São Paulo começa com a chegada dos missionários da Companhia de Jesus, cujos membros são conhecidos como jesuítas, no início do século XVI. Os padres jesuítas Manuel da Nóbrega e José de Anchieta são considerados os fundadores da capital paulista."
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Voto feminino no Brasil",
      "descricao": "Conquista do direito de voto pelas mulheres brasileiras, garantido pelo Código Eleitoral da era Vargas."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Em que ano um código eleitoral assinado por Getúlio Vargas garantiu às mulheres o direito de votar no Brasil?",
    "resposta": "1932",
    "distratores": [
      "1891",
      "1946",
      "1962"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Women%27s_suffrage_in_Brazil"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Women%27s_suffrage_in_Brazil",
        "situacao": "ok",
        "texto": "Women's societal roles in Brazil have been heavily impacted by the patriarchal traditions of Iberian culture, which holds women subordinate to men in familial and community relationships. The Iberian Peninsula, which is made up of Spain, Portugal and Andorra, has traditionally been the cultural and military frontier between Christianity and Islam, developing a strong tradition for military conques\n[…]\nWomen in Brazil were granted the right to vote in 1932. Though a feminist movement had existed in Brazil since the mid-nineteenth century and women did petition for suffrage to be included in the 1891 Republican Constitution, the drive towards enfranchisement only began in earnest under the leadership of feminist, biologist and lawyer, Bertha Lutz.\n[…]\nHence, the campaign for suffrage was by no means a mass movement, and was decidedly moderate in nature. The conservative character of the suffrage movement provoked little resistance from government, and suffrage was declared by Getúlio Vargas in 1932 and later confirmed in the 1934 Constitution.\n[…]\nSince the explosion of human rights, women's movements in Brazil have become more connected with broader political issues, and have been articulated within the context of more general social issues related to democratization and socioeconomic inequality. Most of those women involved in the feminist movement of the 1970s were also involved in other political movements, such as the human rights movement, and the formation of leftist political parties.\n[…]\nThe Amnesty International movement was one that gained much support from feminists, evident in the establishment of the Feminine Movement for Amnesty of the 1970s. At the same time, feminist movements have attempted to maintain balance between their specific goals and wider political demands.\n[…]\nFeminine Movement for Amnesty\n[…]\nFeminism in Brazil"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Tratado de Tordesilhas",
      "descricao": "Acordo entre Portugal e Espanha que dividiu as terras descobertas e por descobrir fora da Europa por um meridiano."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "O Tratado de Tordesilhas, que dividiu entre Portugal e Espanha as terras a descobrir, foi assinado em que ano?",
    "resposta": "1494",
    "distratores": [
      "1492",
      "1500",
      "1532"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Tratado_de_Tordesilhas"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Tratado_de_Tordesilhas",
        "situacao": "ok",
        "texto": "Tratado de Tordesilhas foi um acordo internacional assinado na povoação castelhana de Tordesilhas em 7 de junho de 1494, celebrado entre o Reino de Portugal e a Coroa de Castela para dividir as terras \"descobertas e por descobrir\" por ambas as Coroas fora da Europa.\n[…]\nO seu único herdeiro, o príncipe Afonso de Portugal estava prometido desde a infância a Isabel de Aragão e Castela, ameaçando herdar os tronos de Castela e Aragão. Contudo o jovem príncipe morreu numa misteriosa queda em 1491 e durante o resto da sua vida D. João II tentou, sem sucesso, obter a legitimação do seu filho bastardo Jorge de Lancastre. Em 1494, na sequência da viagem de Cristóvão Colombo, que recusara, D. João II negociou o Tratado de Tordesilhas com os reis católicos.\n[…]\nComo resultado das negociações, os termos do tratado foram ratificados por Castela a 2 de julho de 1494 e, por Portugal, a 5 de setembro do mesmo ano. Contrariando a bula anterior de Alexandre VI, Inter Coetera (1493), que atribuía a Castela a posse das terras localizadas a partir de uma linha demarcada a 100 léguas de Cabo Verde, o novo tratado foi aprovado pelo Papa Júlio II em 1506. Na América do Sul a linha passava entre Belém do Pará (PA) e Cananéia (SP). (Marco de Cananéia).\n[…]\nMas a descoberta pelos portugueses em 1512 das valiosas \"ilhas das Especiarias\", as Molucas, desencadeou a contestação espanhola, argumentando que o Tratado de Tordesilhas dividia o mundo em dois hemisférios equivalentes.\n[…]\nDeutsche Welle - 1494: Portugal e Espanha dividem o mundo\n[…]\nO Papel da Diplomacia Portuguesa do Tratado de Tordesilhas, por Humberto Baquero Moreno, Revista da Faculdade de Letras do Porto, pág, 141\n[…]\nO Tratado de Tordesilhas, Aconteceu - Tratado de Tordesilhas (Extrato de Programa), por António Silva, RTP, 2006"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Guerra de Canudos",
      "descricao": "Conflito entre o Exército brasileiro e a comunidade liderada por Antônio Conselheiro no sertão da Bahia, entre 1896 e 1897."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Quantas expedições militares o governo enviou contra o arraial de Canudos até destruí-lo, em 1897?",
    "resposta": "Quatro",
    "distratores": [
      "Duas",
      "Três",
      "Seis"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Guerra_de_Canudos"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Guerra_de_Canudos",
        "situacao": "ok",
        "texto": "Guerra de Canudos ou Campanha de Canudos foi um conflito armado ocorrido no final do século XIX entre, por um lado, as tropas regulares do estado da Bahia primeiro, e da república do Brasil depois, e por outro lado, um grupo de cerca de 30 000 colonos estabelecidos em comunidade autônoma num povoado fundado por eles no nordeste da Bahia, perto da antiga fazenda de Canudos, e rebatizado de Belo Mon\n[…]\nFoi ele também quem escreveu o primeiro livro sobre Canudos, e é a ele sem dúvida que se deve a maior quantidade de informações sobre as campanhas militares contra Belo Monte. Nesse livro, relato da guerra, intitulado Ultima expedição a Canudos, que fez publicar em 1899, ele apresenta o jagunço como sendo representativo do sertanejo, e, por conseguinte, Canudos como sendo representativo do sertão.\n[…]\nEuclides da Cunha, engenheiro militar de formação, republicano convicto, dirigiu-se a Canudos na qualidade de jornalista e redigiu para o jornal O Estado de S. Paulo uma série de artigos sobre o conflito em curso. Contudo, teve de, por motivo de doença, deixar Canudos quatro dias antes do fim da quarta e última expedição, e não assistiu, portanto, ao desfecho do dito conflito no início de outubro de janeiro.\n[…]\nEssa vasta obra (seiscentas páginas) se decompõe em três partes principais, a Terra, o Homem, e a Luta, nas quais o autor expõe, respectivamente: as características geológicas, botânicas, zoológicas, hidrográficas e climatológicas do sertão; a vida, os costumes, a cultura oral, os trabalhos e a espiritualidade religiosa dos sertanejos, em particular do vaqueiro, o guardião do sertão, que concretiza o casamento do homem com essa terra; e por fim, as peripécias, contadas com força detalhes e vislumbres militares, das quatro expedições enviadas pelas autoridades contra o povoado dirigido por Antônio Conselheiro.\n[…]\nAcervo da Guerra de Canudos"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Tratado do Rio de Janeiro de 1825",
      "descricao": "Tratado pelo qual Portugal reconheceu a independência do Brasil em 1825."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Para Portugal reconhecer a Independência, em 1825, o Brasil aceitou pagar uma indenização de quantos milhões de libras esterlinas?",
    "resposta": "Dois milhões",
    "fonte": [
      "https://en.wikipedia.org/wiki/Treaty_of_Rio_de_Janeiro_(1825)",
      "https://pt.wikipedia.org/wiki/Independência_do_Brasil"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Treaty_of_Rio_de_Janeiro_(1825)",
        "situacao": "ok",
        "texto": "The Treaty of Rio de Janeiro is the treaty between the Kingdom of Portugal and the Empire of Brazil, signed August 29, 1825, which recognized Brazil as an independent nation, formally ending the Brazilian War of Independence.\n[…]\nThe treaty was ratified by the Emperor of Brazil on August 24, 1825, and by the King of Portugal on November 15, 1825, and on that same date the two instruments of ratification were exchanged between Brazilian and Portuguese diplomats in Lisbon.\n[…]\nThe Treaty entered into force on November 15, 1825, upon the exchange of the ratification documents. It was proclaimed in Portugal on that same date, and was proclaimed in Brazil on April 10, 1826.\n[…]\nART. I – His Most Faithful Majesty recognizes Brazil in the category of independent Empire and separated from the Kingdoms of Portugal and the Algarves; And to his most beloved and dear son Pedro by Emperor, yielding and transferring from his free will the sovereignty of the said Empire to his son and to his legitimate successors. His Most Faithful Majesty only takes and reserves for himself the same title.\n[…]\nART. III – His Imperial Majesty promises not to accept the proposal of any Portuguese Colonies to join the Empire of Brazil.\n[…]\nART. X – Trade relations between both Portuguese and Brazilian Nations will be restored from the outset, with all commodities repaying 15 percent of consumer rights provisionally; With the duties of re-exporting and re-exporting the same as that practiced before the separation.\n[…]\nDone in the city of Rio de Janeiro, on the 29th day of August, 1825.\n[…]\nBrazilian Declaration of Independence"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Independência_do_Brasil",
        "situacao": "ok",
        "texto": "Independência do Brasil foi o processo histórico de separação política entre o Reino do Brasil e o Reino de Portugal e Algarves, ocorrido entre 1821 e 1825, no contexto das transformações políticas do mundo atlântico provocadas pelas revoluções liberais e pelas guerras napoleônicas. O processo envolveu disputas políticas, militares e diplomáticas entre grupos favoráveis à manutenção do vínculo com\n[…]\nEssas resoluções provocaram forte reação no Brasil, tanto entre setores da elite luso-brasileira quanto entre grupos populares, alimentando um ambiente de crescente polarização política. Dois agrupamentos passaram a se destacar: os chamados liberais, ligados a Joaquim Gonçalves Ledo, e os bonifacianos, liderados por José Bonifácio de Andrada e Silva. Apesar das divergências entre ambos, compartilhavam a oposição às tentativas de recolonização promovidas pelas Cortes.\n[…]\nA mediação britânica foi decisiva para o reconhecimento formal por Portugal. Interessada em preservar seus privilégios comerciais no Brasil e manter a aliança histórica com Lisboa, a Grã-Bretanha atuou como intermediária nas negociações entre os dois países.\n[…]\nO processo resultou na assinatura do Tratado de Amizade e Aliança firmado entre Brasil e Portugal em 29 de agosto de 1825, pelo qual Portugal reconheceu oficialmente a independência brasileira. Em contrapartida, o Brasil comprometeu-se ao pagamento de uma indenização financeira e à celebração de acordos comerciais favoráveis aos interesses britânicos.\n[…]\nA independência política não foi acompanhada por estabilidade econômica imediata. O novo Estado brasileiro herdou uma situação financeira frágil, agravada pelos custos da guerra, pelas indenizações pagas a Portugal e pela dependência de empréstimos externos, sobretudo junto a casas bancárias britânicas.\n[…]\nIndependência da América Espanhola\n[…]\nSímbolos do Brasil\n[…]\nIndependência do Brasil em Histórianet"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Coluna Prestes",
      "descricao": "Movimento militar tenentista que marchou pelo interior do Brasil entre 1925 e 1927."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "A Coluna Prestes marchou pelo interior do Brasil entre 1925 e 1927. Aproximadamente, qual distância ela percorreu?",
    "resposta": "25 mil quilômetros",
    "distratores": [
      "5 mil quilômetros",
      "60 mil quilômetros",
      "120 mil quilômetros"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Coluna_Prestes"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Coluna_Prestes",
        "situacao": "ok",
        "texto": "A Coluna Prestes ou Coluna Miguel Costa-Prestes, formalmente designada 1.ª Divisão Revolucionária, foi um movimento político-militar brasileiro de teor tenentista ocorrido entre 1924 e 1927. O principal motivo para a criação do movimento foi a insatisfação com o governo de Artur Bernardes e o regime oligárquico, característico da República Velha, conhecido como política do café com leite.\n[…]\nSuas reivindicações foram a implementação do voto secreto, a defesa do ensino público e a obrigatoriedade do ensino secundário para toda a população, além de acabar com a miséria e a injustiça social no Brasil. Em seus dois anos e meio de duração, a Coluna, composta de 1,5 mil homens, percorreu cerca de 25 mil quilômetros, através de treze estados do Brasil.\n[…]\nDeu-se início ao confronto de oito horas que ficou conhecido como \"Combate da Ramada\" no dia 3 de janeiro de 1925, onde mais uma vez a tática que Prestes concebeu como \"guerra de movimento\" foi decisiva para a vitória da Coluna apesar de cinquenta de seus soldados terem sido mortos e cem foram feridos. A marcha, agora com cerca de 600 homens, continuou para a travessia do norte do Rio Grande do Sul no Rio Uruguai.\n[…]\nDe Barracão, Prestes, em uma carta ao general Isidoro Dias Lopes, revela seu plano de ataque ao general Cândido Rondon em Mallet. Prestes então liderou os revolucionários até o oeste paranaense com o objetivo de encontrar os rebeldes remanescentes da Revolta Paulista de 1924. A tropas paulistas foram incorporadas à Coluna em abril de 1925 em Foz do Iguaçu. No dia 12 de abril, Prestes se reuniu com Dias Lopes e Miguel Costa para formar a 1.ª Divisão Revolucionária.\n[…]\nMiguel Costa seguiu para Paso de los Libres enquanto Prestes e mais duzentos homens rumaram para La Gaiba, em Santa Cruz. Em 5 de julho de 1927, os exilados inauguraram em Gaiba um monumento em homenagem aos mortos da campanha da Coluna."
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Rio de Janeiro",
      "descricao": "Cidade do Sudeste brasileiro, fundada em 1565, que foi capital do Brasil de 1763 a 1960."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1565, durante a luta contra os franceses na Baía de Guanabara, quem fundou a cidade do Rio de Janeiro?",
    "resposta": "Estácio de Sá",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Estácio_de_Sá",
      "https://pt.wikipedia.org/wiki/Rio_de_Janeiro"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Estácio_de_Sá",
        "situacao": "ok",
        "texto": "Estácio de Sá (Santarém, 1520 – São Sebastião do Rio de Janeiro, 20 de fevereiro de 1567) foi um militar português, fundador da cidade do Rio de Janeiro, e primeiro governador-geral da Capitania do Rio de Janeiro, no período colonial.\n[…]\nSeja como for, Estácio era sobrinho de Mem de Sá e chegou a São Salvador da Bahia de Todos os Santos, na atual Baía de Todos os Santos, em 1564 com a missão de expulsar definitivamente os franceses remanescentes na Baía de Guanabara e ali fundar uma cidade. Devido às dificuldades do início da colonização, somente em 1565, com reforços obtidos na então Capitania de São Vicente e com o auxílio dos jesuítas, conseguiu reunir uma força de ataque para cumprir a sua missão.\n[…]\nDeixando o Espírito Santo em 20 de janeiro de 1565, em 1 de março, fundou a cidade de São Sebastião do Rio de Janeiro, em terreno plano entre o Morro Cara de Cão e o Morro do Pão de Açúcar, sua base de operações. O objetivo da fundação foi dar início à expulsão dos franceses que já estavam na área há dez anos.\n[…]\nExiste uma capela na Igreja de São Sebastião dos Frades Capuchinhos do Rio de Janeiro, no bairro da Tijuca, onde está a sua campa tumular onde encontra-se a seguinte inscrição: \"Aqui jaz Estácio de Saa, 1o Capitam e Conquistador desta terra cidade, e a campa mandou fazer Salvador Correa de Saa, seu primo, 2o Capitam e Governador, com suas armas e essa Capela acabou o ano de 1583.\"\n[…]\nAtualmente, apenas a antiga lápide encontra-se na Igreja de São Sebastião dos Capuchinhos, pois seus restos mortais encontram-se no Monumento a Estácio de Sá, no Aterro do Flamengo, projetado por Lúcio Costa em 1973.\n[…]\nInvasões francesas do Brasil"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rio_de_Janeiro",
        "situacao": "ok",
        "texto": "Rio de Janeiro, simplesmente referido como Rio, é a capital do estado brasileiro do Rio de Janeiro. Um dos maiores destinos turísticos internacionais no Brasil, na América Latina e também do Hemisfério Sul, é uma das primeiras cidades do país. É a segunda maior metrópole do Brasil (depois de São Paulo), a sétima maior da América e a décima oitava do mundo. Sua população segundo o censo de 2022 do \n[…]\nA Baía de Guanabara, à margem da qual a cidade foi fundada, foi descoberta pelo explorador português Gaspar de Lemos em 1.º de janeiro de 1502. No entanto, em 1.º de novembro de 1555, os franceses, capitaneados por Nicolas Durand de Villegagnon, apossaram-se da Baía da Guanabara, estabelecendo uma colônia na ilha de Sergipe (atual ilha de Villegagnon). Lá, ergueram o Forte Coligny, enquanto consolidavam alianças com os índios tupinambás locais.\n[…]\nPersistindo a presença francesa na região, os portugueses, sob o comando de Estácio de Sá, acompanhado por um grupo de fundadores incluindo também D. Antônio de Mariz, desembarcaram num istmo entre o Morro Cara de Cão e o Morro do Pão de Açúcar, fundando, em 1.º de março de 1565, a cidade de \"São Sebastião do Rio de Janeiro\".\n[…]\nA expulsão e derrota definitiva dos franceses e seus aliados indígenas, no entanto, só se deu em janeiro de 1567. A vitória de Estácio de Sá, subjugando elementos remanescentes franceses (os quais, aliados aos tamoios, dedicavam-se ao comércio e ameaçavam o domínio português na costa do Brasil), garantiu a posse do Rio de Janeiro, rechaçando, a partir daí, novas tentativas de invasões estrangeiras e expandindo, à custa de guerras, seu domínio sobre as ilhas e o continente.\n[…]\nEm 18 de janeiro de 2019, a cidade foi eleita pela UNESCO como a primeira Capital Mundial da Arquitetura.\n[…]\nFluminenses da cidade do Rio de Janeiro\n[…]\nPlanejamento estratégico do Rio de Janeiro\n[…]\nLista de consulados no Rio de Janeiro"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Brasília",
      "descricao": "Capital federal do Brasil, cidade planejada inaugurada em 1960."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Oscar Niemeyer desenhou os prédios, mas quem projetou o traçado urbano de Brasília, conhecido como Plano Piloto?",
    "resposta": "Lúcio Costa",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Brasília",
      "https://pt.wikipedia.org/wiki/Lúcio_Costa"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Brasília",
        "situacao": "ok",
        "texto": "Brasília (AFI: [bɾaˈzilja] ou AFI: [bɾaˈziʎa]) é a capital federal do Brasil e a sede de governo do Distrito Federal. A capital está localizada na região Centro-Oeste do país, ao longo da região geográfica conhecida como Planalto Central. Segundo o Censo do Instituto Brasileiro de Geografia e Estatística (IBGE)/2022, sua população é de 2 817 381 habitantes, sendo, então, a terceira cidade mais pop\n[…]\nO plano urbanístico original da capital, conhecido como \"Plano Piloto\" (nome que seria dado à região administrativa onde fica localizada), foi elaborado pelo urbanista e arquiteto Lúcio Costa, que, aproveitando o relevo da região, adequou-o ao projeto do lago Paranoá, concebido em 1893 pela Missão Cruls. A cidade começou a ser planejada e desenvolvida em 1956 por Lúcio Costa, pelo também arquiteto Oscar Niemeyer e pelo engenheiro estrutural Joaquim Cardozo.\n[…]\nO traçado de ruas de Brasília obedece ao plano piloto implantado pela empresa Novacap a partir de um anteprojeto do arquiteto Lúcio Costa, escolhido através de concurso público nacional. O arquiteto Oscar Niemeyer e o engenheiro estrutural Joaquim Cardozo projetaram os principais prédios públicos da cidade.\n[…]\nBrasília é classificada como Patrimônio Cultural da Humanidade pela Unesco, uma agência da ONU e recebe cerca de um milhão de visitantes anualmente. Entre as suas atrações mais visitadas estão os diversos projetos arquitetônicos de Oscar Niemeyer e Joaquim Cardozo.\n[…]\nA Praça dos Três Poderes é um amplo espaço aberto entre os três edifícios monumentais que representam os três poderes da República: o Palácio do Planalto (Executivo), o Supremo Tribunal Federal (Judiciário) e o Congresso Nacional (Legislativo). Como em quase todos os logradouros de Brasília, a parte urbanística foi idealizada por Lúcio Costa e as construções foram concebidas por Oscar Niemeyer com projetos estruturais de Joaquim Cardozo.\n[…]\nBrasília no WikiMapia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lúcio_Costa",
        "situacao": "ok",
        "texto": "Lúcio Marçal Ferreira Ribeiro de Lima Costa OMC (Toulon, 27 de fevereiro de 1902 – Rio de Janeiro, 13 de junho de 1998) foi um arquiteto, urbanista e professor brasileiro nascido na França. Pioneiro da arquitetura modernista no Brasil, ficou conhecido mundialmente pelo projeto do Plano Piloto de Brasília.\n[…]\nEm 1939, Lucio Costa venceu o concurso nacional para o Pavilhão do Brasil na Feira Mundial de Nova Iorque, enquanto que Oscar Niemeyer ficou com o segundo lugar. Costa convidou Niemeyer para que projetassem juntos uma nova versão do Pavilhão, combinando elementos de ambos os projetos originais.\n[…]\nO projeto de Lúcio Costa venceu por quase unanimidade (apenas um jurado não votou nele), sofrendo diversas acusações dos concorrentes. Desenvolveu o Plano Piloto de Brasília e, como Niemeyer, passou a ser conhecido em todo o mundo como autor de grande parte dos prédios públicos.\n[…]\nBrasília possui diretrizes que remetem aos projetos de Le Corbusier na década de 1920 e ainda ao seu projeto para a cidade de Chandigarh, pela escala monumental dos edifícios governamentais. A cidade de Lucio Costa também possui conceitos semelhantes aos dos estudos de Hilberseimer.\n[…]\nEm 1969, Lúcio Costa foi convidado pelo governador do Estado da Guanabara, Negrão de Lima, para desenhar o Plano urbanístico da Baixada de Jacarepaguá, região que na época englobava a Barra da Tijuca e parte de Jacarepaguá. Embora tenha sido originalmente projetado para essa região, o plano piloto era visto por Lucio Costa como a solução urbanística para toda a Guanabara.\n[…]\nOutra questão polêmica foi o favorecimento que o Sr. Lúcio Costa deu à herança da colonização portuguesa acima de outras influências culturais brasileiras, com exceção apenas dos seus projetos modernistas.\n[…]\n1962 - Lúcio Costa: Sobre Arquitetura\n[…]\n«Casa de Lucio Costa»"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Carta de Pero Vaz de Caminha",
      "descricao": "Carta enviada ao rei Dom Manuel I em 1500, relatando a chegada da frota de Cabral ao Brasil."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Quem escreveu ao rei Dom Manuel a carta que narra a chegada da frota de Cabral ao Brasil, em 1500?",
    "resposta": "Pero Vaz de Caminha",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Carta_de_Pero_Vaz_de_Caminha"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Carta_de_Pero_Vaz_de_Caminha",
        "situacao": "ok",
        "texto": "A Carta de Pero Vaz de Caminha é o documento no qual Pero Vaz de Caminha registrou as suas impressões sobre a terra que posteriormente viria a ser chamada de Brasil. É o primeiro documento escrito da história do Brasil. Costuma ser considerada marco inicial da obra literária brasileira, apesar de, formalmente, ser documento de mero registro, já que traz em suas linhas a escrita da época, o estilo;\n[…]\nEscrivão da frota de Pedro Álvares Cabral, Caminha enviou a carta para o rei D. Manuel I (1469-1521) para comunicar-lhe o descobrimento das novas terras. Datada de Porto Seguro (no litoral sul baiano da atual de acordo com Francisco Adolfo de Varnhagen), no dia 1 de maio de 1500, foi levada a Portugal por Gaspar de Lemos, comandante do navio de mantimentos da frota.\n[…]\nViu um deles umas contas de rosário, brancas; fez sinal que lhas dessem, e folgou muito com elas, e lançou-as ao pescoço; e depois tirou-as e meteu-as em volta do braço, e acenava para a terra e novamente para as contas e para o colar do Capitão, como se dariam ouro por aquilo.\"CAMINHA, Pero de Vaz.\n[…]\nAlém da Carta de Pero Vaz de Caminha, importante documento na historiografia do país, o primeiro texto impresso que se refere exclusivamente ao descobrimento do Brasil é o panfleto anônimo, escrito em italiano, \"Copia di una lettera del Re di Portogallo mandata al Re di Castella del viaggio & successo dell' India\" (Cópia de uma carta do Rei de Portugal mandada ao Rei de Castela acerca da viagem e sucesso da Índia), publicada inicialmente em Roma, em 23 de outubro de 1505, por mestre João de Basicken e logo a seguir em Milão, no mesmo ano:\n[…]\nDescoberta do Brasil\n[…]\nA carta de Pero Vaz de Caminha\n[…]\nCarta de Pero Vaz de Caminha: História e análise do texto, em UOL Educação.\n[…]\n«Carta de Pêro Vaz de Caminha - Arquivo Nacional Torre do Tombo»\n[…]\n«Fac símile da Carta de Caminha»\n[…]\nFundação Pero Vaz de Caminha\n[…]\nUma Revisitação da Carta de Caminha"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Tríplice Aliança",
      "descricao": "Aliança militar formada em 1865 contra o Paraguai na Guerra do Paraguai."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Além do Brasil, quais dois países formaram a Tríplice Aliança na guerra contra o Paraguai?",
    "resposta": "Argentina e Uruguai",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Guerra_do_Paraguai"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Guerra_do_Paraguai",
        "situacao": "ok",
        "texto": "Guerra do Paraguai foi o maior conflito armado internacional ocorrido na América Latina, travada entre o Paraguai e a Tríplice Aliança, composta pelo Império do Brasil, Argentina e Uruguai. Ela se estendeu de dezembro de 1864 a março de 1870. É também chamada Guerra da Tríplice Aliança, na Argentina e no Uruguai, e de Guerra Grande, Guerra Contra a Tríplice Aliança e Guerra-Guaçu no Paraguai.\n[…]\nEm maio de 1865, o Paraguai também fez várias incursões armadas em território argentino, com objetivo de conquistar o Rio Grande do Sul. Contra as pretensões do governo paraguaio, o Brasil, a Argentina e o Uruguai reagiram, firmando o acordo militar chamado de Tríplice Aliança. O Império do Brasil, a Argentina mitrista e o Uruguai florista, aliados, derrotaram o Paraguai após mais de cinco anos de lutas durante os quais o Império enviou em torno de 150 mil homens à guerra.\n[…]\nNo mesmo dia, a Argentina declarou guerra ao Paraguai, mas dias antes disso, em 1 de maio de 1865, Brasil, Argentina e Uruguai assinaram secretamente o Tratado da Tríplice Aliança em Buenos Aires. Eles nomearam Bartolomé Mitre, presidente da Argentina, como comandante supremo das forças aliadas. Os signatários do tratado foram Rufino de Elizalde (Argentina), Francisco Otaviano de Almeida Rosa (Brasil) e Carlos de Castro (Uruguai).\n[…]\nEle sabia que teria que superar essa divisão ou arriscar que fosse explorado pela Tríplice Aliança. Até certo ponto, Lopez conseguiu fazer com que os indígenas expandissem sua identidade comunal para incluir todo o Paraguai. Como resultado disso, qualquer ataque ao Paraguai foi considerado um ataque à nação paraguaia, apesar da retórica do Brasil, Uruguai e Argentina dizendo o contrário.\n[…]\nEsse país se tornou um dos mais ricos do mundo, no início do século XX. Foi a última vez que Brasil e Argentina assumiram abertamente um papel tão intervencionista na política interna do Uruguai."
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Reino Unido de Portugal, Brasil e Algarves",
      "descricao": "Estado criado em 1815 que elevou o Brasil à condição de reino unido a Portugal."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em 1815, o Brasil foi elevado a reino e passou a formar um reino unido com Portugal e com qual outra região?",
    "resposta": "Algarves",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Reino_Unido_de_Portugal,_Brasil_e_Algarves"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Reino_Unido_de_Portugal,_Brasil_e_Algarves",
        "situacao": "ok",
        "texto": "Reino Unido de Portugal, Brasil e Algarves foi um Estado criado em 16 de dezembro de 1815, com a elevação do Estado do Brasil à condição de reino, no contexto da transferência da corte portuguesa para o Rio de Janeiro.\n[…]\nAo reconhecer a independência do Brasil do Reino Unido de Portugal, Brasil e Algarves, o Rei João VI, pela sua carta de lei de 15 de novembro de 1825, mudou novamente o nome do Estado português e os Títulos Reais para \"Reino de Portugal\" e \"Rei de Portugal e Algarves\", respetivamente. O título do herdeiro aparente português foi mudado para \"Príncipe Real de Portugal e Algarves\" pelo mesmo édito.\n[…]\nO Reino Unido de Portugal, Brasil e Algarves integrava os domínios portugueses na Europa, América, África e Ásia, configurando uma monarquia pluricontinental cuja extensão territorial figurava entre as maiores estruturas políticas do início do século XIX.\n[…]\nA historiografia tem interpretado o Reino Unido de Portugal, Brasil e Algarves como uma experiência singular de reorganização da monarquia portuguesa no contexto das transformações do mundo atlântico no início do século XIX.\n[…]\nA experiência do Reino Unido de Portugal, Brasil e Algarves foi decisiva para a formação do Estado imperial brasileiro, ao transferir para a América o centro político da monarquia e criar as estruturas administrativas, militares, judiciais e culturais que seriam mantidas após a independência. A permanência dessas instituições garantiu a continuidade do aparelho estatal e permitiu que a ruptura com Portugal ocorresse com relativa estabilidade institucional.\n[…]\nImpério do Brasil\n[…]\nPríncipe Real do Reino Unido de Portugal, Brasil e Algarves\n[…]\nReino do Algarve\n[…]\nReino do Brasil\n[…]\nReino de Portugal e dos Algarves\n[…]\nOs Algarves"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Política do café com leite",
      "descricao": "Arranjo político da Primeira República em que oligarquias de dois estados se alternavam na presidência."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Na política do café com leite da Primeira República, São Paulo se alternava na presidência com qual estado, famoso por sua pecuária leiteira?",
    "resposta": "Minas Gerais",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Política_do_café_com_leite"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Política_do_café_com_leite",
        "situacao": "ok",
        "texto": "Política do café com leite visava a predominância do poder nacional por parte das oligarquias paulista e mineira, executada na República Velha a partir da Presidência de Campos Sales (1898-1902), por presidentes civis fortemente influenciados pelo setor agrário dos estados de São Paulo — com grande produção de café — e Minas Gerais — produtor de leite e maior polo eleitoral do país de então —, imp\n[…]\nO poder financeiro das aristocracias rurais de Minas Gerais e São Paulo, crescente durante o século anterior, havia permitido que seus políticos adquirissem projeção nacional. Desta forma, a política do café com leite consolidou o poder das famílias mais abastadas, formando as oligarquias. Os paulistas e os mineiros ocupavam os cargos de presidente da República, vice-presidente e os Ministérios da Justiça, das Finanças e da Agricultura, entre outros.\n[…]\nSão Paulo (produtor de café) e Minas Gerais (produtor de leite) eram os estados mais ricos e populosos no Brasil da República Velha. A oligarquia paulista estava reunida no Partido Republicano Paulista (PRP), e a mineira, no Partido Republicano Mineiro (PRM). Ciente disso, esses dois partidos se aliavam para fazer prevalecer seus interesses.\n[…]\nPor diversas vezes o PRP e o PRM escolheram um único candidato à eleição para presidente: ora o candidato era indicado por São Paulo e apoiado por Minas Gerais, ora se dava o contrário. Por isso, a maioria dos presidentes da República Velha representou os interesses das oligarquias paulista e mineira. Essa alternância entre São Paulo e Minas na presidência da República é chamada de política do café com leite.\n[…]\nTudo isso somado à grande e rápida concentração populacional explica as posições de destaque que Minas Gerais e São Paulo hoje possuem entre os estados brasileiros.\n[…]\nWashington Luís - presidente da República (1926-1930), era natural do estado do Rio de Janeiro.\n[…]\nCiclo do café"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Abolição da escravidão no Ceará",
      "descricao": "Libertação dos escravizados na província do Ceará, decretada em 25 de março de 1884."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Em 1884, quatro anos antes da Lei Áurea, qual província foi a primeira do Brasil a abolir a escravidão?",
    "resposta": "Ceará",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Ceará",
      "https://pt.wikipedia.org/wiki/Francisco_José_do_Nascimento"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Ceará",
        "situacao": "ok",
        "texto": "Ceará é uma das 27 unidades federativas do Brasil. Está situado no norte da Região Nordeste, faz divisa com Rio Grande do Norte e Paraíba a leste, Pernambuco ao sul e Piauí a oeste, além de ser banhado pelo Oceano Atlântico a norte e nordeste. Sua área total é de 148 894,442 km², ocupando 9,37% da área do Nordeste e 1,74% da superfície do Brasil. A população do estado em 2022 era de 8 794 957 habi\n[…]\nÉ terra natal de escritores como José de Alencar, Rachel de Queiroz, Patativa do Assaré e Juvenal Galeno, além de nomes de destaque das ciências exatas, como Casimiro Montenegro Filho, Fernando de Mendonça, Maurício Peixoto e Cláudio Lenz Cesar. O Ceará também é conhecido como \"Terra da Luz\", numa referência à grande quantidade de dias ensolarados, mas que, principalmente, remonta ao fato de o estado ter sido o primeiro da federação a abolir a escravidão, em 1884, quatro anos antes da Lei Áurea.\n[…]\nPor esse fato, o jornalista José do Patrocínio cunhou o título de \"a terra da luz\" ao Ceará, e todo dia 25 de março, é celebrado o dia da Data Magna, feriado instituído em homenagem ao aniversário da abolição.\n[…]\nAnos antes da proclamação da República, notabilizou-se a campanha abolicionista no Ceará, que logrou abolir a escravidão no estado em 25 de março de 1884, quatro anos antes da Lei Áurea, fazendo da província a primeira do Império do Brasil a conseguir tal feito.\n[…]\nO Miss Ceará é um dos eventos de maior tradição do estado. Sua primeira edição ocorreu em 1955, e logo com a eleição de Emília Barreto Correia Lima como Miss Brasil, segunda eleita na história do concurso. Outra Miss Brasil do Ceará foi Flávia Cavalcanti Rebelo, apesar de ser natural de Salvador, representava o Ceará na competição nacional. Vanessa Vidal, Miss Ceará de 2008, ficou em segundo lugar e foi a primeira concorrente a Miss Brasil com deficiência auditiva.\n[…]\n«Tribunal de Justiça do Ceará»\n[…]\n«Página do IBGE sobre o Ceará»"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Francisco_José_do_Nascimento",
        "situacao": "ok",
        "texto": "Francisco José do Nascimento (Canoa Quebrada, Aracati, 15 de abril de 1839 — Fortaleza, 5 de março de 1914), também conhecido como Dragão do Mar ou Chico da Matilde, foi um líder jangadeiro, prático-mor e abolicionista, com participação ativa no Movimento Abolicionista no Ceará, estado pioneiro na abolição da escravidão, antes conhecido como Terra da Luz.\n[…]\nO paradeiro do túmulo de Francisco Nascimento — desconhecido há mais de 100 anos — foi descoberto pelo historiador cearense Licínio Nunes de Miranda em julho de 2020, no âmbito de um trabalho de investigação acadêmica sobre a abolição da escravidão no Ceará.\n[…]\nEm 25 de março de 1884, o Ceará tornou-se a primeira província brasileira a abolir a escravidão. O Movimento Abolicionista Cearense, surgido em 1879, contribuiu — embora não decisivamente — para essa abolição pioneira.\n[…]\nChefe dos jangadeiros, ele e seus colegas se engajaram à luta pela abolição em janeiro de 1881, recusando-se a transportar para os navios negreiros os escravizados que seriam vendidos para o Rio de Janeiro, tendo proferido, segundo algumas fontes, a célebre frase \"no porto do Ceará não embarcam mais escravos\".\n[…]\nPosteriormente, em agosto de 1881, houve uma nova tentativa de embarcar escravizados que seriam vendidos em São Paulo e no Rio de Janeiro, contudo, novamente os jangadeiros, liderados por Chico da Matilde e pelo escravizado liberto José Luis Napoleão, se recusaram a fazer o transporte e o porto do Ceará foi considerado, pelo movimento abolicionista, oficialmente fechado para o tráfico interprovincial.\n[…]\nAngelo Agostini registrou e homenageou o fato na capa da Revista Illustrada, com uma litogravura com ilustração alegórica de Francisco Nascimento, com a seguinte legenda: \"À testa dos jangadeiros cearenses, Nascimento impede o tráfico dos escravos da província do Ceará vendidos para o sul\"."
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Prudente de Morais",
      "descricao": "Político paulista que presidiu o Brasil entre 1894 e 1898."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Depois de dois marechais no poder, quem foi o primeiro presidente civil do Brasil, eleito em 1894?",
    "resposta": "Prudente de Morais",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Prudente_de_Morais"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Prudente_de_Morais",
        "situacao": "ok",
        "texto": "Prudente José de Morais Barros (Mairinque, 4 de outubro de 1841 – Piracicaba, 3 de dezembro de 1902) foi um advogado e político brasileiro, terceiro presidente do Brasil e primeiro civil a ocupar a Presidência da República pelo voto direto.\n[…]\nSua memória foi preservada em acervos como o Museu Prudente de Moraes, a Biblioteca Brasiliana Guita e José Mindlin, o Arquivo Público do Estado de São Paulo, a Biblioteca Nacional, a Biblioteca da Presidência da República e o Senado Federal.\n[…]\nPrudente José de Morais Barros nasceu em 4 de outubro de 1841, nas proximidades de Itu, então Província de São Paulo. Era filho de José Marcelino de Barros e de Catarina Maria de Morais. A trajetória familiar foi marcada por perda precoce: seu pai, comerciante e tropeiro, foi assassinado quando Prudente ainda era criança, episódio que levou a família a reorganizar sua vida em torno da mãe e de parentes próximos.\n[…]\nSegundo documentação preservada pelo Senado, o pleito de 1894 teve centenas de nomes votados. Prudente saiu vencedor com ampla vantagem sobre os demais candidatos, enquanto Manuel Vitorino foi eleito vice-presidente. A vitória representou a ascensão dos civis ao Executivo federal e o início de um esforço de estabilização institucional depois da fase militar da República.\n[…]\nA imagem de Prudente de Morais foi construída em torno da moderação, da austeridade e do legalismo. Biografias e homenagens oficiais ressaltam o presidente civil que teria encerrado a instabilidade militar inicial e afirmado a autoridade constitucional da República.\n[…]\nLista de presidentes do Brasil\n[…]\n«Verbete Prudente de Morais no CPDOC/FGV» (PDF)\n[…]\n«Biblioteca da Presidência da República — Prudente de Morais»\n[…]\n«Perfil de Prudente de Morais no Senado Federal»"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Anita Garibaldi",
      "descricao": "Revolucionária nascida em Santa Catarina, companheira de Giuseppe Garibaldi, morta na Itália em 1849."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Nascida em Santa Catarina, que mulher lutou na Revolução Farroupilha e na unificação da Itália, ficando conhecida como heroína de dois mundos?",
    "resposta": "Anita Garibaldi",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Anita_Garibaldi"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Anita_Garibaldi",
        "situacao": "ok",
        "texto": "Ana Maria de Jesus Ribeiro (Laguna, 30 de agosto de 1821 – Ravena, 4 de agosto de 1849) mais conhecida como Anita Garibaldi foi uma revolucionária brasileira, conhecida por sua participação na Revolução Farroupilha e no processo de unificação da Itália junto com o marido e revolucionário italiano Giuseppe Garibaldi. Por esse motivo, é conhecida como a \"Heroína dos Dois Mundos\".\n[…]\nAlguns estudiosos alegam que Anita Garibaldi teria nascido em Lages, que na cúria metropolitana daquela cidade estaria o registro dos irmãos mais velho e mais novo dela, e que teria sido retirada do livro a folha do registro de Ana Maria de Jesus Ribeiro. Em 1998, entidades representativas da sociedade civil de Laguna promoveram uma ação judicial para obter o registro de nascimento tardio de Anita Garibaldi.\n[…]\nAnita tinha 18 anos em 1839 quando encontrou-se com Giuseppe Garibaldi. Com 32 anos, Garibaldi liderou pelo mar as tropas farroupilhas de David Canabarro que tomaram Laguna e proclamaram a República Catarinense.\n[…]\nEm 20 de outubro de 1839, Anita decide seguir Garibaldi, subindo a bordo de seu navio para uma expedição militar.\n[…]\nConsiderada, no Brasil e na Itália, um exemplo de dedicação e coragem, Anita foi homenageada pelos brasileiros com a designação de dois municípios, ambos no estado de Santa Catarina: Anita Garibaldi e Anitápolis. Muitas cidades brasileiras possuem bairros, ruas e avenidas com seu nome, como o bairro Anita Garibaldi em Joinville, e a avenida Anita Garibaldi, em Salvador.\n[…]\nNa minissérie A Casa das Sete Mulheres, de Maria Adelaide Amaral e Walther Negrão, transmitida pela TV Globo, em 2003, Anita Garibaldi foi interpretada por Giovanna Antonelli, enquanto Giuseppe Garibaldi foi interpretado por Thiago Lacerda. Camila Morgado fez o papel de Manuela de Paula Ferreira.\n[…]\nCadorin, Adílcio (2001). Anita Garibaldi: a Guerreira das Repúblicas 2 ed. Florianópolis: Ioesc"
      }
    ]
  }
]

---

# MANIFESTO

# Manifesto de Perguntas — Mestre2

> **Versão preliminar 0.19 — 2026-09-30**
>
> Este documento define **o que é uma boa pergunta** no Mestre2 e **como o banco de perguntas é organizado e produzido**. Vale para qualquer pessoa ou modelo que crie, revise ou processe perguntas.
>
> Ele tem duas partes:
> - **Parte I — Regras de conteúdo (§1 a §9):** o que uma pergunta deve ser. É a parte que o gerador e o crítico automáticos recebem.
> - **Parte II — Organização e processo (§10 a §17):** esquemas, fluxo de produção, decisões, pendências, o jogo e o app. É a referência de quem mantém o projeto.
>
> Arquivos relacionados:
> - [`pergunta.schema.json`](pergunta.schema.json) e [`ancora.schema.json`](ancora.schema.json): esquemas
> - [`temas_subtemas.json`](temas_subtemas.json): lista canônica de temas e subtemas
> - [`exemplos_perguntas.json`](exemplos_perguntas.json) · [`exemplos_ancoras.json`](exemplos_ancoras.json)
> - [`proposta_temas_subtemas.md`](proposta_temas_subtemas.md): histórico da revisão da lista canônica
> - [`../pipeline/README.md`](../pipeline/README.md): o pipeline que produz as perguntas
> - [`../app/`](../app/): o app que usa as perguntas numa partida (§16)

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

A lista canônica tem **8 temas e 69 subtemas** e fica em [`temas_subtemas.json`](temas_subtemas.json):

| Tema | Subtemas |
|---|---|
| Geografia | Países e Capitais · Cidades e Monumentos · Relevo e Maravilhas Naturais · Rios e Lagos · Oceanos, Mares e Ilhas · Clima e Biomas · Povos e Idiomas · Bandeiras e Símbolos |
| História | Pré-História e Idade do Bronze · Egito Antigo · Grécia Antiga · Roma Antiga · Antigas Civilizações do Oriente · Américas Pré-Colombianas · Idade Média · Idade Moderna · Idade Contemporânea · Primeira Guerra Mundial · Segunda Guerra Mundial · História do Brasil |
| Natureza | Mamíferos · Aves, Répteis e Anfíbios · Vida Marinha · Insetos e Invertebrados · Plantas e Fungos · Dinossauros e Fósseis · Evolução Humana · Ecossistemas e Ambientes Extremos · Geologia e História da Terra |
| Ciências | Astronomia e Espaço · Física · Química · Matemática · Corpo Humano e Medicina · Tecnologia e Computação · Invenções e História da Ciência |
| Artes e Pensamento | Literatura Brasileira · Literatura Mundial · Pintura · Escultura e Arquitetura · Música Clássica · Teatro e Ópera · Mitologia · Religiões · Filosofia |
| Entretenimento | Cinema · Séries e TV · Música Brasileira · Música Internacional · Jogos Eletrônicos · Anime e Mangá · Quadrinhos · Jogos de Tabuleiro e Cartas |
| Esportes | Futebol · Vôlei · Basquete · Tênis · Automobilismo · Olimpíadas · Lutas e Artes Marciais · Outras Modalidades |
| Cotidiano | Culinária e Bebidas · Língua Portuguesa e Expressões · Marcas e Produtos · Folclore e Tradições Brasileiras · Costumes pelo Mundo · Objetos do Dia a Dia · Moda e Vestuário · Transportes |

- Cada pergunta tem **um tema e um subtema**, escritos **exatamente** como na lista, com acentos e maiúsculas.
- Uma **pequena sobreposição** entre subtemas é tolerada.
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
- no máximo **2 perguntas com o mesmo ângulo** para uma mesma âncora, no banco inteiro.

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

> **Por enquanto, o gerador automático não cria perguntas com figura.** Elas só são escritas por quem tem a imagem em mãos e a examinou. Uma pergunta sem o campo `imagem` nunca se refere a uma foto ou figura.

- **O enunciado aponta para a figura e é curto:** "Que cidade aparece nesta foto?", "Esta igreja fica em qual capital?". Ele pode trazer um fato que ajude, desde que não entregue a resposta.
- **O ângulo segue a regra de sempre (§5).** Foto de um monumento e pergunta pela cidade: a âncora é o monumento, e o ângulo é `lugar`.
- **Tipos de figura, por ordem de prioridade:** lugares (cidades, monumentos, paisagens) e contornos de mapa. Obras de arte, animais e plantas ficam para depois.
- **Só imagens do Wikimedia Commons**, com licença livre (CC BY, CC BY-SA ou domínio público). Autor e licença são sempre registrados.
- **Proibido:** capas de álbuns, pôsteres, logotipos, fotos de imprensa e fotos de pessoas que não sejam figuras públicas.

**Critérios da figura**, além dos de §8:
- [ ] **Nada na imagem entrega a resposta:** placas, legendas, letreiros, marcas d'água, bandeiras.
- [ ] **Resposta única diante da imagem:** atenção a réplicas, paisagens parecidas e monumentos que ficam entre duas cidades. A Ponte Luís I liga o Porto a Vila Nova de Gaia, por isso a pergunta é pela cidade "do outro lado da ponte".
- [ ] **Legível num celular** a um braço de distância.
- [ ] **O enunciado é verdadeiro para esta foto específica**, e não só para o assunto: o ponto de vista, o lado e o que aparece nela.
- [ ] **Não é óbvia demais:** a Torre Eiffel de frente não ensina nada. Prefira um ângulo menos visto, um detalhe ou um fato no enunciado que torne a pergunta interessante (princípio 4).

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
