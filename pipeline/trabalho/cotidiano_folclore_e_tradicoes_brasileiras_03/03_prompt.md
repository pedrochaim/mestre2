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
      "nome": "Quadrilha junina",
      "descricao": "Dança coletiva típica das festas juninas, derivada de uma dança de salão europeia."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Na quadrilha das festas juninas, os dançarinos costumam encenar qual cerimônia, com noivos, padre e até delegado?",
    "resposta": "Um casamento caipira",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Quadrilha_(dança)",
      "https://pt.wikipedia.org/wiki/Festa_junina"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Quadrilha_(dança)",
        "situacao": "ok",
        "texto": "Quadrilha (do francês quadrille) é uma modalidade de dança de salão que, no dizer de Câmara Cascudo, foi \"a grande dança palaciana do séc. XIX\". Era originalmente dançada por quatro pares em formação retangular.\n[…]\nResultado da mistura de várias danças europeias ao longo dos séculos das quais foi incorporando elementos, especialmente da contradança, teve seu auge no século XIX, quando foi introduzida no Brasil e, com suas variações juninas, voltou a ser praticada nos bailes comemorativos aos santos do mês de junho (São Pedro, São João e Santo Antônio) realizados em cidades como Rio de Janeiro, Salvador, Fortaleza e Recife a partir da década de 1990.\n[…]\nFoi introduzida no país no começo do século XIX, durante o Período Regencial, \"trazida por mestres de orquestras de dança francesas, como Milliet e Cavallier, que tocavam as músicas de Musard, \"o pai das quadrilhas\", e Tolbecque\", no registro de Cascudo.\n[…]\nEm 1842 o pernambucano Padre Carapuceiro publicava no seu jornal em Recife os versos críticos:\n[…]\nA quadrilha: da partitura aos espaços festivos: música, dança e sociabilidade no Rio de Janeiro oitocentista, Rosa Maria Barbosa Zamith, e-Papers, Rio de Janeiro, 2011, ISBN 9788576503095\n[…]\nFesta junina no Brasil"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Festa_junina",
        "situacao": "ok",
        "texto": "Festas juninas, festas dos santos populares ou celebração do meio do verão são uma celebração da estação do verão do hemisfério norte, geralmente realizada em uma data próxima ao solstício de verão. Tem raízes pagãs pré-cristãs na Europa.\n[…]\nNa maioria dos lugares, o evento principal é a queima de uma grande fogueira. No oeste da Noruega, um costume de arranjar casamentos simulados, tanto entre adultos como entre crianças, ainda é mantido vivo.\n[…]\nFestas de São João são ainda celebradas em alguns países europeus católicos, protestantes e ortodoxos (França, Irlanda, os países nórdicos e do Leste europeu). As fogueiras de São João e a celebração de casamentos reais ou encenados (como o casamento fictício no baile da quadrilha nordestina e na tradição portuguesa) são costumes ainda hoje praticados em festas de São João europeias. É ainda costume a realização de fogueiras onde o combustível é o rosmaninho.[carece de fontes]?\n[…]\nMuitos dos rituais das festas juninas eslavas estão relacionados com o fogo, a água, a fertilidade e a auto-purificação. As moças, por exemplo, colocam guirlandas de flores na água dos rios para ter sorte. É bastante comum também a brincadeira de saltar por cima das fogueiras. As festas juninas eslavas inspiraram o compositor Modest Mussorgsky a compor sua famosa obra \"Noite no Monte Calvo\".\n[…]\nAs festas juninas do solstício do verão na Suécia (Midsommar, literalmente ”solstício do verão”) são as mais famosas do mundo. É considerada a festividade nacional sueca por excelência, a par do Natal, sendo comemorada vulgarmente na companhia de muitas outras pessoas, em contraste com o Natal que é principalmente uma festa familiar.\n[…]\nMedia relacionados com Festa junina no Wikimedia Commons"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Escola de samba",
      "descricao": "Agremiação carnavalesca brasileira que desfila com enredo, alas, bateria, mestre-sala e porta-bandeira."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Na escola de samba, ao lado do mestre-sala, quem desfila carregando o pavilhão com o símbolo da agremiação?",
    "resposta": "A porta-bandeira",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Mestre-sala_e_porta-bandeira",
      "https://pt.wikipedia.org/wiki/Escola_de_samba"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Mestre-sala_e_porta-bandeira",
        "situacao": "ok",
        "texto": "Mestre-sala e porta-bandeira são um casal de dançarinos que exercem a função de conduzir e apresentar a bandeira de uma escola de samba durante o seu desfile no carnaval.\n[…]\nA dança do mestre-sala e da porta-bandeira surgiu nos ranchos, em que o baliza e o porta-estandarte deviam defender os símbolos da associação. A defesa, nesse caso, não era apenas simbólica: membros de um rancho costumavam tentar roubar a bandeira do outro. Por isso, muitos dos primeiros porta-bandeiras eram homens, inclusive quando as figuras foram incorporadas pelas escolas de samba. Um dos primeiros porta-bandeiras de que se tem registro foi Ubaldo, da GRES Portela.\n[…]\nCom o tempo, a atuação dos balizas e porta-estandartes evoluiu para o giro da porta-bandeira acompanhada pelo gingado do mestre-sala. Uma hipótese é de que essa mudança foi influenciada por danças rituais pré-nupciais das adolescentes africanas cortejadas pelos jovens guerreiro. Outra possível origem do formato atual é a dança encontrada nas festas populares e sepultamentos, em que as tribos eram identificadas por bandeiras coloridas.\n[…]\nEm 1938, a fantasia do mestre-sala e da porta-bandeira passou a ser um quesito de julgamento no desfile das escolas de samba do Rio de Janeiro. A partir de 1958 o quesito passou a incluir a dança do casal.\n[…]\nEm São Paulo, os jurados devem avaliar o bailado do casal e a integridade de suas fantasias. Também devem tirar pontos caso a porta-bandeira se curve diante de alguém, ou se deixar a bandeira se enrolar ou tocar no seu rosto ou no do parceiro. O mestre-sala não pode cair nem tocar o joelho no chão. os dois também perdem pontos se conversarem entre si"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Escola_de_samba",
        "situacao": "ok",
        "texto": "Escola de samba é um tipo de agremiação de cunho popular que se caracteriza pelo canto e dança do samba, quase sempre com intuito competitivo.\n[…]\nEm Porto Alegre, a primeira Escola de Samba considerada \"moderna\" foi a Academia de Samba Praiana, que em 1961, revolucionou o desfile de Porto Alegre. Até então, existiam blocos, cordões e tribos carnavalescas. A Praiana foi a primeira escola de samba do Rio Grande do Sul a introduzir enredos, alas, baianas, mestre-sala e porta-bandeira e outras características das escolas de samba do Rio de Janeiro.\n[…]\nNo ritual, a porta-bandeira da escola pagã, acompanhada pelo respectivo mestre-sala, carrega o pavilhão oficial para o sacramento. A escola madrinha será representada pelo presidente da agremiação, acompanhado pelo mestre-sala e a porta-bandeira que carregará o pavilhão oficial da agremiação.\n[…]\nO mestre-sala e a porta-bandeira, no samba, são um casal que executa um determinado bailado especial e deve apresentar com graciosidade o pavilhão da escola. Suas fantasias assemelham-se a trajes de gala típicos do século XVIII, porém \"carnavalizados\", ou seja, com uma quantidade exagerada de cores e enfeites. Em determinado momento, durante o desfile, eles param em frente à cabine dos jurados para apresentar sua dança, onde são avaliados.\n[…]\nA bandeira ou pavilhão empunhado pela 1ª porta-bandeira é sempre o pavilhão principal da escola, com as cores e o símbolo que a representam. Aos outros casais é permitido desfilar com uma variante da bandeira oficial ou um pavilhão temático conforme o enredo daquele carnaval, como é o caso dos desfiles de São Paulo.[carece de fontes]?\n[…]\nEscola de samba virtual"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Bumba meu boi",
      "descricao": "Folguedo popular brasileiro, muito forte no Maranhão, que encena a morte e a ressurreição de um boi."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No bumba meu boi maranhense, como se chama o brincante que fica escondido debaixo da armação do boi, fazendo-o dançar?",
    "resposta": "Miolo do boi",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Bumba_meu_boi"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Bumba_meu_boi",
        "situacao": "ok",
        "texto": "Bumba meu boi, boi-bumbá ou búfalo-bumbá é uma festa do folclore popular brasileiro, com personagens humanos e animais fantásticos, que gira em torno de uma lenda sobre a morte e ressurreição de um boi.\n[…]\nEmbora com gênese no Piauí, é mais popular no Maranhão. O bumba meu boi maranhense recebeu do Instituto do Patrimônio Histórico e Artístico Nacional (IPHAN) o título de Patrimônio Cultural do Brasil, e o de Patrimônio Cultural Imaterial da Humanidade pela UNESCO.\n[…]\nO Bumba Meu Boi tem sua gênese no Piauí e Maranhão, desenvolvendo-se durante o ciclo do gado no Brasil, ao incorporar elementos dos folguedos portugueses, culturas africana e indígena. O Ciclo do Gado, iniciado na Bahia, expandiu-se no século XVII por duas rotas principais ao longo do rio São Francisco: uma seguia o curso do rio em comboios e a outra o atravessava em direção ao Norte, até chegar ao Piauí, apontado por Câmara Cascudo como “o grande produtor de gadaria”.\n[…]\nOutro registro ocorre num jornal denominado \"O carapuceiro\", em Recife, Pernambuco, no ano de 1840.Mas, é no estado do Maranhão que o bumba meu boi tem sido mais valorizado em todo o Nordeste e, dali, foi exportado para o estado do Amazonas com o nome de boi-bumbá, visitado anualmente por milhares de turistas que vão conhecer o famoso Festival Folclórico de Parintins, realizado desde 1965.\n[…]\nQuando você fala que vai para o Marajó, sabe que vai andar de búfalo, tomar leite, comer queijo de búfalo, e por quê não brincar com o boneco do búfalo-bumbá?!\n[…]\nBúfalo-Bumbá de Mestre Damasceno\n[…]\nBumba meu boi do Maranhão\n[…]\nCARVALHO, Maria Michol Pinho de. 1995. Matracas que desafiam o tempo: é o bumba-boi do Maranhão. São Luís: s/e.\n[…]\n«Ritmos do Maranhão» [ligação inativa]"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Festa do Divino",
      "descricao": "Festa católica popular em honra do Espírito Santo, trazida de Portugal, com coroação de imperador e folias."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Na Festa do Divino, que personagem, escolhido entre os devotos e muitas vezes uma criança, é coroado e reina durante a festa?",
    "resposta": "O imperador do Divino",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Festa_do_Divino"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Festa_do_Divino",
        "situacao": "ok",
        "texto": "Festa do Divino Espírito Santo é um culto ao Espírito Santo, em suas diversas manifestações, é uma das mais antigas e difundidas práticas do catolicismo popular.\n[…]\nToda a festa do Divino gira em torno de um grupo de crianças, chamado império ou reinado. Essas crianças são vestidas com trajes de nobres e tratadas como tais durante os dias da festa, com todas as regalias. O império se estrutura de acordo com uma hierarquia no topo da qual estão o imperador e a imperatriz (ou rei e rainha), abaixo do qual ficam o mordomo-régio e a mordoma-régia, que por sua vez estão acima do mordomo-mor e da mordoma-mor.\n[…]\nA Festa do Divino Espírito Santo de Santo Amaro da Imperatriz é uma das maiores e mais tradicionais Festas do Divino do Brasil.[carece de fontes]? Teve início no dia 29 de maio de 1854, após consulta ao Pe.\n[…]\nEm todas as celebrações litúrgicas o Imperador é coroado, e em seguida oferta sua coroa ao Divino Espírito Santo. A Celebração segue em ritmo festivo animada pelas mais tradicionais equipes de Liturgia da Paróquia. O Imperador sempre está com sua Espada e a Imperatriz com o cetro. Na missa do domingo as 19:00 horas é anunciado o festeiro do próximo ano que assume o compromisso junto com o novo casal Imperial na missa das 10:00 horas de segunda-feira.\n[…]\nO Vale do Guaporé, região as margens do Rio Guaporé, fronteira Brasil-Bolívia, presencia uma grande manifestação que ocorre em celebração ao Divino Espírito Santo. Nesse ambiente, a celebração tem duração total de 50 dias. A missão ao divino envolve ações fluviais e terrestres, e personagens escolhidos e sorteados, como imperadores, remadores, foliões, encarregados, mensageiros e etc."
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Literatura de cordel",
      "descricao": "Poesia popular nordestina impressa em folhetos baratos, geralmente ilustrados com xilogravuras."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Nos folhetos de cordel, qual é o tipo de estrofe mais usado pelos poetas populares?",
    "resposta": "Sextilha",
    "distratores": [
      "Quadra",
      "Décima",
      "Oitava"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Literatura_de_cordel"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Literatura_de_cordel",
        "situacao": "ok",
        "texto": "Literatura de cordel também conhecida no Brasil como folheto, literatura popular em verso, ou simplesmente cordel, é um gênero literário popular escrito frequentemente em versos, na forma rimada, originado em relatos orais e depois impresso em folhetos. Remonta ao século XVI, quando o Renascimento popularizou a impressão de relatos orais, e mantém-se uma forma literária popular no Brasil.\n[…]\nNa indagação dos pesquisadores, no entanto, há lógica, porque os poetas de bancada ou de gabinete, como ficaram conhecidos os autores da literatura de cordel, demoraram a emergir do seio bom da terra natal. Mais tarde, por volta de 1750 é que apareceram os primeiros vates da literatura de cordel oral. Engatinhando e sem nome, depois de relativo longo período, a literatura de cordel recebeu o batismo de poesia popular.\n[…]\nCarlos Drummond de Andrade, reconhecido como um dos maiores poetas brasileiros do século XX, assim definiu, certa feita, a literatura de cordel: \"A poesia de cordel é uma das manifestações mais puras do espírito inventivo, do senso de humor e da capacidade crítica do povo brasileiro, em suas camadas modestas do interior. O poeta cordelista exprime com felicidade aquilo que seus companheiros de vida e de classe econômica sentem realmente.\n[…]\nA literatura de cordel exerceu influência sobre outras mídias. O dramaturgo Ariano Suassuna usou o cordel como fonte de inspiração em sua peça de teatro, Auto da Compadecida (1955), usando o personagem João Grilo, personagem do folclore português, presente na literatura de cordel brasileira desde 1932, parte do enredo foi inspirada em dois folhetos de Leandro Gomes de Barros (1865-1918), \"O Dinheiro\", também chamado de \"O testamento do cachorro\" e \"O cavalo que defecava dinheiro\".\n[…]\nAcademia Brasileira de Literatura de Cordel\n[…]\nLiteratura de cordel na Fundação Casa de Rui Barbosa\n[…]\nCordelteca Centro Nacional de Folclore e Cultura Popular"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Capoeira",
      "descricao": "Arte marcial afro-brasileira que combina luta, dança, música e acrobacia."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Na capoeira angola, que canto solo, em tom de lamento, é puxado pelo mestre antes de o jogo começar?",
    "resposta": "Ladainha",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Capoeira",
      "https://pt.wikipedia.org/wiki/Capoeira_Angola"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Capoeira",
        "situacao": "ok",
        "texto": "A capoeira ou capoeiragem é uma expressão cultural e esporte afro-brasileiro que mistura arte marcial, dança e música. Acredita-se que foi desenvolvida no Brasil através do Engolo, arte marcial angolana introduzida no Brasil por escravizados africanos.\n[…]\nAs canções de capoeira são divididas em partes solistas e respostas do coro, formado por todos os demais capoeiristas presentes na roda. Dependendo do seu conteúdo, podem ser classificadas como ladainhas, chulas, corridos ou quadras. A ladainha ou lamento é utilizada unicamente no início da roda de capoeira. É parte do longo grito \"iê\", seguido de uma narrativa solista cantada em tom solene. Geralmente, é cantada pelo capoeirista mais respeitado ou graduado da roda.\n[…]\nNeste momento, não existe jogo, não se bate palmas e alguns instrumentos não são tocados. A narrativa é seguida pelas homenagens tradicionais feitas pelo solista (a Deus, ao seu mestre, a quem o ensinou e mais qualquer personagem importante ou fator relevante à capoeira, como a malandragem), respondidas intercaladamente pela louvação do coro e pelo início das palmas e dos instrumentos complementares. O jogo de capoeira somente pode iniciar após o fim da ladainha.\n[…]\nSão Bento Grande de Angola\n[…]\nEm alguns locais, a população se referia ao jogo de capoeira como \"brincar de Angola\" e, de acordo com Mestre Noronha, o \"Centro de Capoeira Angola Conceição da Praia\", criado pela nata da capoeiragem baiana, já utilizava ilegalmente o nome \"capoeira Angola\" no início da década de 1920.\n[…]\nMestre: vermelha - 22 anos de capoeira - idade mínima 35 anos\n[…]\nAbib, Pedro. Mestres e Capoeiras Famosos na Bahia. EDUFBA, 2009.\n[…]\nCoutinho, Daniel. O ABC da capoeira angola; Os Manuscritos do mestre Noronha.\n[…]\nAssociação Brasileira de Capoeira Angola (ABCA)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Capoeira_Angola",
        "situacao": "ok",
        "texto": "Capoeira Angola é um estilo de capoeira anterior a capoeira regional (ou luta regional baiana) criada por Mestre Bimba. Embora mais antiga, sua designação surgiu apenas após a criação de Mestre Bimba e em referência à população negra da África Austral traficada para o Brasil. Trata-se de uma arte marcial, um estilo específico de capoeira, desenvolvida sobretudo na Bahia.\n[…]\nA capoeira Angola diferencia-se da luta regional baiana de Mestre Bimba por representar uma modalidade da capoeira com mais conexão ao seu passado, sendo concebida como um jogo, no qual a luta, a dança, a mímica e outros elementos se conjugam. Além disso, a capoeira angola privilegia a  “mandinga”  como  estratégia  de  luta  e  enfrentamento. Além disso, outra particularidade, evidencia-se no “jogo  baixo”,  algo  facilmente  reconhecido no jogo de Angola.\n[…]\nO jogo de Angola é acompanhado por uma música mais lenta; geralmente a música é antecedida por uma ladainha, que é uma espécie de lamento, que quase sempre fala da escravidão e da vida do escravizado. O canto (ladainha) é o fundamento dado pelos mestres de antigamente que agora vão passando pelas gerações.\n[…]\nMuitas canções são na forma de pequenas estrofes intercaladas por um refrão, enquanto outras vêm na forma de longas narrativas (ladainhas). As canções de capoeira têm assuntos dos mais variados. Algumas canções são sobre histórias de capoeiristas famosos, outras podem falar do cotidiano de uma lavadeira. Algumas canções são sobre o que está acontecendo na roda de capoeira, outras sobre a vida ou um amor perdido, e outras ainda são alegres e falam de coisas tolas, cantadas apenas para se divertir.\n[…]\nMestre Curió\n[…]\nAssociação de Capoeira Angola Dobrada\n[…]\nCentro de Capoeira Angola Angoleiro Sim Sinhô\n[…]\nFederação Internacional de Capoeira Angola\n[…]\nCapoeira Angola Irmaos Guerreiros\n[…]\nAssociação de Capoeira Angola Dobrada, na Alemanha"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Pastoril",
      "descricao": "Auto popular natalino do Nordeste brasileiro em que pastoras cantam e dançam divididas em dois cordões."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "No pastoril, auto natalino do Nordeste, as pastoras se dividem em dois cordões rivais de quais cores?",
    "resposta": "Azul e encarnado",
    "distratores": [
      "Verde e amarelo",
      "Azul e branco",
      "Vermelho e preto"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Pastoril"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Pastoril",
        "situacao": "ok",
        "texto": "Um pastor é alguém que se dedica a domesticar, alimentar ou guardar animais como ovelhas, cabras e outros. Os historiadores acreditam que a domesticação de animais pelos seres humanos tenha ocorrido no período neolítico.\n[…]\nMaioral (chefe dos pastores)\n[…]\nGanadeiro (guardador de gado) - no Vale do Sado e Alentejo este tipo de pastores é conhecido por maioral ou moiral\n[…]\nOs abrigos de pastor são feitos de diversos materiais: xisto, granito, madeira etc. e servem para resguardar o pastor das intempéries. Muitos deles têm, também, a função de abrigar os próprios animais.\n[…]\nEm Portugal, há os cortelhos  - pequenas construções usadas para abrigo dos pastores, encontradas por exemplo na Serra da Peneda e noutros locais da Europa (picos de Europa, Pirenéus e\n[…]\nIrlanda). A tipologia dos cortelhos é geralmente de base circular, podem ter um ou dois pisos, com um diâmetro que pode ir até cerca de 3 metros e uma altura que pode atingir 4 metros. Algumas destas construções eram cercadas por um muro, chamado \"bezerreira\". Estas construções fazem parte do património etnográfico e cultural português.Na Serra Amarela são chamados de casarotas e no no Alto Minho de Cardenhas ou Cortelhos.\n[…]\nExistem, também, pequenas carroças de madeira móveis (em alemão: Schäferkarren), puxadas por uma vaca ou cavalo, dando espaço somente para o pastor. Hoje, na maioria, apodrecidas, encontram-se em museus especializados. Desde 1974, o eremita e artista alemão Hans Anthon Wagner vive numa destas carroças.\n[…]\nEm Portugal, as várias peças do vestuário de um pastor diferem em nomes conforme a zona do país. Em geral os pastores usam:\n[…]\nCasacão grande, de pele de ovelha, espécie de samarra com mangas, que protege o pastor do rigor do inverno."
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Chimarrão",
      "descricao": "Infusão quente de erva-mate tomada na cuia, bebida tradicional do Sul do Brasil"
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Que canudo de metal, com um filtro na ponta, se usa para tomar o chimarrão na cuia?",
    "resposta": "Bomba",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Chimarrão"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Chimarrão",
        "situacao": "ok",
        "texto": "Chimarrão (do espanhol rioplatense: \"cimarrón\") ou mate (do quíchua: \"mati\") é uma das maneiras de tomar a infusão da erva-mate. É uma bebida característica da cultura do Cone Sul, legado da cultura indígena (caingangue, guarani, aimará e quíchua), produzido pela infusão da planta erva-mate (Ilex paraguariensis) moída e infusionada em água quente à aproximadamente 70 graus Celsius, em uma cuia com\n[…]\nOs povos indígenas utilizavam recipientes semelhantes às cuias atuais para preparar a erva-mate, confeccionados com materiais como taquara (bambu), madeira, chifre de boi e porongo.A banda do Rio Grande do Sul, Engenheiros do Hawaii, compôs uma canção chamada \"Ilex Paraguariensis\", em homenagem ao chimarrão. No mesmo estado brasileiro, a microcervejaria Dado Bier lançou uma cerveja de mate, a \"Ilex\".\n[…]\nNa Região Centro-Oeste do Brasil há um refrigerante à base de erva-mate chamado Mate Chimarrão.\n[…]\nO chimarrão se espalhou pela América do Sul com a colonização espanhola da América e chegou ao Oriente Médio com imigrantes sírios e libaneses que retornaram aos seus países após a Primeira Guerra Mundial. A Síria é o maior importador mundial de erva-mate, superando o Uruguai em 2022.\n[…]\nDurante a 43.ª edição do Acampamento Farroupilha, em Porto Alegre, foi comercializado sorvete artesanal com sabor de chimarrão, feito com erva-mate.\n[…]\nO município brasileiro de Venâncio Aires, no Rio Grande do Sul, reconhecida como a Capital Nacional do Chimarrão, está construindo um monumento em formato de cuia com 20 metros de altura total. A estrutura terá três andares internos, com exposições sobre a erva-mate e no topo da bomba de chimarrão haverá um mirante.\n[…]\nBARROS, Sérgio Gabriel Silva de et al. Mate (chimarrão) é consumido em alta temperatura por população sob risco para o carcinoma epidermoide de esôfago. Arq. Gastroenterol., São Paulo, v. 37, n. 1, Jan. 2000.\n[…]\nMuseu Paranaense: Histórico da Erva-Mate"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Círio de Nazaré",
      "descricao": "Grande procissão católica em honra de Nossa Senhora de Nazaré realizada em Belém do Pará em outubro."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No Círio de Nazaré, em Belém, milhares de promesseiros se espremem para segurar qual objeto que acompanha a berlinda da santa?",
    "resposta": "A corda",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Círio_de_Nazaré"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Círio_de_Nazaré",
        "situacao": "ok",
        "texto": "O Círio de Nazaré é uma manifestação religiosa católica, herdada dos colonizadores portugueses, marcada por procissões (romarias) em devoção a Nossa Senhora de Nazaré, que ocorre na cidade brasileira de Belém (estado do Pará). É celebrado anualmente desde 1793, no segundo domingo de outubro, reunindo atualmente cerca de dois milhões de pessoas.\n[…]\nA corda do círio foi introduzida pela primeira vez na procissão em 1855 com o objetivo de puxar a berlinda que levava a imagem de Nossa Senhora de Nazaré devido a água que transbordava da Baía do Guajará na área do Ver-o-peso. O elemento só foi oficializado em 1868.\n[…]\n1855 - O palanquim e o portador que conduziam a imagem de Nossa Senhora de Nazaré, são substituídos por uma carruagem, que servia como uma espécie de Berlinda, inicialmente puxada por cavalos. A corda é usada pela primeira vez na romaria, para puxar a berlinda, devido a água que transbordava da Baía do Guajará, ás margens do Ver-o-peso, pelo fato da berlinda ter atolado por lá. Ocorre uma epidemia de cólera em Belém, mas não impedindo a realização do Círio.\n[…]\n1868 - A corda é oficializada no Círio de Nazaré.\n[…]\n1926 - A corda é retirada do Círio por determinação do Arcebispo de Belém, Dom João Irineu Joffily, tendo como motivo a violência pela disputa de vagas. A berlinda é substituída por um andor.\n[…]\n1974 - É criada a Guarda de Nazaré de Belém. É realizado o primeiro Círio de Brasília.\n[…]\n1995 - O atrelamento da Corda à Berlinda passa a acontecer na Avenida Boulevard Castillo França, em frente ao Mercado Ver-o-Peso, na procissão do Círio, o que ocorre até os dias atuais, como forma de agilizar a procissão. Até 1994, o atrelamento acontecia no Largo da Sé. A Rádio Nazaré FM passou a fazer a sonorização da romaria, que até então acontecia em pequenos carros de som instalados em algumas vias da cidade.\n[…]\n«Círio de Nazaré (Oficial)»"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Filhos de Gandhy",
      "descricao": "Afoxé do carnaval de Salvador, fundado em 1949, cujos integrantes desfilam de branco e azul com turbantes e colares."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Os Filhos de Gandhy desfilam no carnaval de Salvador ao som de qual ritmo, vindo do candomblé?",
    "resposta": "Ijexá",
    "distratores": [
      "Samba-reggae",
      "Maracatu",
      "Xote"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Filhos_de_Gandhy",
      "https://pt.wikipedia.org/wiki/Ijexá"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Filhos_de_Gandhy",
        "situacao": "ok",
        "texto": "Filhos de Gandhy é um afoxé brasileiro fundado por estivadores portuários de Salvador no dia 18 de fevereiro de 1949. Contando com aproximadamente 10 mil integrantes, tornou-se o maior afoxé do Carnaval de Salvador, município e capital do estado da Bahia. Constituído exclusivamente por homens e inspirado nos princípios de não-violência e paz do ativista indiano Mahatma Gandhi, o bloco traz a tradi\n[…]\nTradicionalmente a \"fantasia\" contém, além do turbante e das vestimentas, um perfume de alfazema e colares azul e branco. Os colares já são conhecidos tradicionalmente por \"colar dos filhos de Gandhy\", que são oferecidos para os admiradores como forma de desejar-lhes paz durante o carnaval e ao longo do ano. As cores dos colares são um referencial de paz e o afoxé enfoca Oxalá, que é o orixá maior.\n[…]\nDentre as regras do bloco, determinou-se que as mulheres apenas poderiam participar assistindo aos desfiles e na confecção das indumentárias e roupas dos filhos de Gandhy, além de levar comida e bebidas aos participantes do desfile durante o cortejo.\n[…]\nOs colares tradicionais dos Filhos de Gandhy, feitos com miçangas brancas e azuis de Gandhy, também são parte de uma tradição peculiar: durante o Carnaval, são oferecidos em troca de beijos na boca.\n[…]\nO nome do bloco foi sugerido por \"Vavá Madeira\", inspirado na vida do líder pacifista Mohandas Karamchand Gandhi, trocando-se, entretanto, a letra \"i\" por \"y\", com a intenção de evitar possíveis represálias pelo uso do nome de uma importante figura do cenário mundial. Batizou-se então o bloco com o nome \"Filhos de Gandhy\".\n[…]\nEm 1974 o Afoxé Filhos de Gandhy fechou por questões administrativo-financeiras, na presidência de Alberto Anastácio da Cruz. O bloco foi despejado de sua sede e todas as suas alegorias foram jogadas na rua. Durante dois anos o bloco não desfilou no carnaval de Salvador."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ijexá",
        "situacao": "ok",
        "texto": "Os ijexás ou povo ijexá (em inglês Ijesha, em iorubá Ìjẹ̀ṣà), são um sub-grupo étnico dos Iorubás e um reino histórico nigeriano.\n[…]\nA região que habitam, na costa ocidental da África, é chamada de Ijexalândia, no estado nigeriano de Oxum, território que limita-se com o Equiti ao leste, Oió a oeste, Ibomina ao norte e Ifé pelo sul, e as principais cidades são Ipetu-Ijexá, Exá-Oquê, Ibocum, Ijebu-Ijexá, Ifeuará, Erim-Ijexá, Exá-Odô, Cajolá, Imeci-Ilê, Iqueji-Ilê, Ouena-Ijexá e Otã-Ilê.\n[…]\nDiversas lendas tratam da origem do povo ijexá, todas elas trazendo em comum o fato de que seria originário de Ilê-Ifé; uma das versões narra que o povo seria descente de Odudua, o mesmo do povo iorubá, por meio de seu filho Ouá (ou Ajibogum \"aquele que busca a água do mar\", termo que mais tarde designaria o rei local) que teria sido orientado pelo sacerdote de Ifá a que, para curar a cegueira do pai, fosse ao mar buscar um pouco de sua água para com ela, junto a outros ingredientes, curar a cegueira dele, o que de fato se deu.\n[…]\nA principal atração da terra dos ijexás são as quedas Erim-Ijexá (ou Olumirim), composta por sete degraus; no mais alto deles fica a vila de Abake; a paisagem é formada pela queda d'água entre as rochas e a rica vegetação que a ladeia.\n[…]\nTambém compõem o acervo histórico e cultural o \"Museu da Guerra Quiriji\", situado em Imeci-Ilê; os santuários de Agirigiri em Ijebu-Ijexá e de Ogum em Ipolê e os palácios Ouá-Obocum e Obanlá, em Ilexá."
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Pilcha",
      "descricao": "Indumentária tradicional do gaúcho, com bombacha, botas, lenço e chapéu para os homens."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Na pilcha, a roupa tradicional do gaúcho, como se chama a calça larga presa nos tornozelos?",
    "resposta": "Bombacha",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Pilcha",
      "https://pt.wikipedia.org/wiki/Bombacha"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Pilcha",
        "situacao": "ok",
        "texto": "Pilcha é a indumentária tradicional da cultura gauchesca, utilizada por homens e mulheres de todas as idades. Tanto no Rio Grande do Sul quanto em Santa Catarina e Paraná, é considerada por lei, traje de honra e de uso preferencial inclusive em atos oficiais públicos, desde que se observe as recomendações ditadas pelo Movimento Tradicionalista Gaúcho (MTG). É a expressão da tradição, da cultura e \n[…]\nA origem da indumentária gaúcha data entre os séculos XVII e XVIII e é resultado da união de influências históricas, sociais e culturais adaptadas à realidade, ocupação e trabalho campeiro. Historicamente a indumentária gaúcha pode ser dividida em quatro fases, existindo para cada uma a peça feminina correspondente.\n[…]\nO vestido de prenda foi criado na fundação do 35 CTG a partir de 1948 pelo Movimento Tradicionalista Gaúcho (MTG) com o propósito de representar a figura feminina gaúcha em harmonia com o traje masculino dos peões. Inspirado em elementos culturais herdados de povos como os açorianos e indígenas, o vestido tornou-se o traje oficial da mulher gaúcha.\n[…]\nO traje do peão inclui a bombacha, geralmente feita de jeans ou tecidos mistos, com tonalidades que vão do claro ao escuro. As estampas costumam ser discretas, podendo ser lisas, listradas ou em xadrez suave. A camisa apresenta cores neutras e é são feitas em materiais como algodão, tricoline, linho ou viscose. O lenço no pescoço, uma peça fundamental no traje, tem geralmente as cores branca, vermelha, verde ou em xadrez miúdo.\n[…]\nJá o chapéu deve seguir os modelos tradicionais, respeitando o formato das \"copas\" típicas da indumentária gaúcha, evitando o estilo cowboy.\n[…]\nÉ desaconselhado o uso exagerado de maquiagem, como sombras e batons vibrantes, cílios artificiais e esmaltes em cores não tradicionais.\n[…]\n«Diretrizes para a Pilcha Gaúcha, em 2025» (PDF). Movimento Tradicionalista Gaúcho. Consultado em 27 de agosto de 2025"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bombacha",
        "situacao": "ok",
        "texto": "A bombacha é uma peça de roupa, calças típicas abotoadas no tornozelo, usada pelos gaúchos e pelos chamados Peões de boiadeiro paulistas na primeira metade do século XX. O nome foi adotado do termo espanhol \"bombacho\", que significa \"calças largas\".\n[…]\nNo Rio Grande do Sul, a bombacha, juntamente com toda a indumentária característica do gaúcho, é considerada traje oficial desde 1989, quando foi aprovada a Lei Estadual da Pilcha  pela Assembléia Legislativa. De acordo com a Lei, a pilcha gaúcha, o conjunto de vestes tradicionais tanto masculino quanto feminino, pode substituir trajes sociais—ex.\n[…]\nA origem do uso da bombacha pelo gaúcho não é precisa. Existem várias versões para a sua origem.\n[…]\nOutra tese afirma que a bombacha teria vindo com os habitantes da Ilha da Madeira.\n[…]\na largura das pernas da bombacha devem coincidir com a medida da cintura; ou seja, uma bombacha com 40 cm de cintura deve ter 40 cm de largura em cada perna;\n[…]\ndeve-se sempre utilizar a bombacha por dentro das botas;\n[…]\né vedado o uso de bombachas coloridas ou plissadas, bem como de camisas de cetim e estampadas, de bonés ou boinas e túnicas militares, quando se está vestindo a pilcha gaúcha;\n[…]\nnão é recomendado o conjunto todo em cor preta (botas, bombacha e camisa), caracterizando o que se chama popularmente por zorro;\n[…]\né vedado o uso de bombachas por mulheres em ocasiões formais e fandangos.\n[…]\nA bombacha atualmente é fortemente associada aos Gauchos, porém o traje já foi parte da Traia(Pilcha) do antigo Peão de boiadeiro. A bombacha era comum nos seguintes estados:São Paulo (estado), Mato Grosso, Mato Grosso do Sul, Paraná, Sul de Minas Gerais e Triângulo Mineiro.\n[…]\nPilcha\n[…]\nRecomendações oficiais sobre a indumentária gaúcha"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Caipora",
      "descricao": "Ser do folclore brasileiro protetor dos animais e das florestas, que castiga os caçadores."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Curupira e Caipora são muitas vezes confundidos. Qual dos dois costuma ser descrito montado num porco-do-mato?",
    "resposta": "Caipora",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Caipora"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Caipora",
        "situacao": "ok",
        "texto": "Caipora ou caapora é uma entidade da mitologia tupi-guarani. A palavra “caipora” vem do tupi ka'a, mato, e pora, habitante, termos que em relação genitiva significam \"habitante do mato\". No folclore brasileiro, é representada como uma pequena indígena, ágil e nua. De acordo com a crença indígena, ela pode dar azar a quem a encontra ou vê. A exemplo do curupira, a caipora é protetora da floresta.\n[…]\nHabitante das florestas, reina sobre todos os animais e ela destrói os caçadores que não cumprem o acordo de caça feito com ela. Seu corpo é todo coberto por pelos. Ela vive montada numa espécie de peccarideo (queixada ou cateto) e ela carrega uma vara. Prima do Curupira, protege os animais da floresta. Os índios acreditavam que a Caipora temesse a claridade, por isso protegiam-se dele andando com tições acesos durante a noite.\n[…]\nMas, de acordo com a crença popular, é sobretudo nas sextas-feiras, nos domingos e dias santos, quando não se deve sair para a caça, que a sua atividade se intensifica. Mas há um meio de driblá-la. A Caipora aprecia o fumo. Assim, reza o costume que, antes de sair numa noite de quinta-feira para caçar no mato, deve-se deixar fumo de corda no tronco de uma árvore e dizer: \"Toma, Caipora, deixa eu ir embora\". A boa sorte de um caçador é atribuída também aos presentes que ele oferece.\n[…]\nO direito de cidade apareceu na peça O Zé Caipora de Oscar Pederneiras (1860–1890), encenada no Rio de Janeiro, sobre a história de um homem azarado que se envolvia em muitas peripécias.\n[…]\nA Caipora foi um dos personagens do programa infantil Castelo Rá-Tim-Bum. Neste programa, a Caipora aparecia toda vez que alguém assobiava, e só desaparecia quando alguém adivinhava a palavra secreta que ela havia escolhido. Ela contava histórias e lendas indígenas, sempre protagonizadas por dois indiozinhos. Era interpretada por Patrícia Gasppar."
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Capoeira Angola",
      "descricao": "Estilo tradicional de capoeira, de jogo mais lento e baixo, preservado por mestres como Pastinha."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Entre os dois grandes estilos de capoeira, angola e regional, qual tem o jogo mais lento e mais rente ao chão?",
    "resposta": "Capoeira angola",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Capoeira_Angola"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Capoeira_Angola",
        "situacao": "ok",
        "texto": "Capoeira Angola é um estilo de capoeira anterior a capoeira regional (ou luta regional baiana) criada por Mestre Bimba. Embora mais antiga, sua designação surgiu apenas após a criação de Mestre Bimba e em referência à população negra da África Austral traficada para o Brasil. Trata-se de uma arte marcial, um estilo específico de capoeira, desenvolvida sobretudo na Bahia.\n[…]\nEm termos gerais, a Angola pode ser conceituada enquanto um jogo mais lúdicos, livres (espontaneidade) e cadenciado que presa pela leveza técnica do movimento, podendo ser mais rápido ou mais lento a depender da dinâmica do jogo. Ainda, também é compreendida enquanto folguedo e manifestação cultural popular afro-brasileira que encontra graus de institucionalização como o Grupo de Capoeira Angola Pelourinho (GECAP), que organizou o Encontro Internacional de Capoeira Angola.\n[…]\nA capoeira Angola diferencia-se da luta regional baiana de Mestre Bimba por representar uma modalidade da capoeira com mais conexão ao seu passado, sendo concebida como um jogo, no qual a luta, a dança, a mímica e outros elementos se conjugam. Além disso, a capoeira angola privilegia a  “mandinga”  como  estratégia  de  luta  e  enfrentamento. Além disso, outra particularidade, evidencia-se no “jogo  baixo”,  algo  facilmente  reconhecido no jogo de Angola.\n[…]\nSobre a bateria de Angola, a capoeira angola também tem orquestra, sendo formada sempre por oito instrumentos posicionados normalmente no seguinte arranjo da esquerda para direita: atabaque; dois pandeiros; berimbau viola; berimbau médio; berimbau gunga ou berra-boi; reco-reco; agogô. Já os toques do berimbau são o São Bento Grande e o Angola.\n[…]\nAssociação de Capoeira Angola Dobrada\n[…]\nCentro de Capoeira Angola Angoleiro Sim Sinhô\n[…]\nFederação Internacional de Capoeira Angola\n[…]\nCapoeira Angola Irmaos Guerreiros\n[…]\nAssociação de Capoeira Angola Dobrada, na Alemanha"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Festa junina",
      "descricao": "Conjunto de festas populares de junho no Brasil em homenagem a Santo Antônio, São João e São Pedro."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Dos três santos juninos, qual dá nome às maiores festas do mês no Nordeste brasileiro?",
    "resposta": "São João",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Festa_junina"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Festa_junina",
        "situacao": "ok",
        "texto": "Festas juninas, festas dos santos populares ou celebração do meio do verão são uma celebração da estação do verão do hemisfério norte, geralmente realizada em uma data próxima ao solstício de verão. Tem raízes pagãs pré-cristãs na Europa.\n[…]\nPor volta do século VI, várias igrejas foram dedicadas em homenagem a São João Batista e uma vigília, Véspera de São João, foi acrescentada à festa de São João Batista e os padres cristãos celebraram três missas nas igrejas para a celebração.\n[…]\nO monge do século XIII de Winchcomb, Gloucestershire, que compilou um livro de sermões para os dias de festa cristã, registrou como a véspera de São João era celebrada em sua época:Falemos das festas que costumam ser feitas na véspera de São João, das quais existem três tipos.\n[…]\nAs tradições juninas da Polônia estão associadas principalmente às regiões da Pomerânia e da Casúbia, e a festa é comemorada em 23 de junho, chamada localmente 'Noc Świętojańska\" (Noite de São João). A festa dura o dia todo, começando às 8h da manhã e varando a madrugada. De maneira análoga à festa brasileira, uma das características mais marcantes é o uso de fantasias; no entanto, não de trajes camponeses como no Brasil, mas de vestimentas de piratas.\n[…]\nEm Portugal, estas festividades, genericamente conhecidas pelo nome de \"Festas dos Santos Populares\", correspondem a diferentes feriados municipais. Nas cidades do Porto e de Braga, o São João é festejado, sendo que a festa é, à semelhança do que acontece no Nordeste do Brasil, entregue às pessoas que passam o dia e a noite nas ruas das cidades, que são autênticos arraiais urbanos.[carece de fontes]?\n[…]\nTanto o majstången quanto o mastro de São João brasileiro se originaram do \"mastro de maio\" dos povos germânicos."
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Surdo",
      "descricao": "Grande tambor grave usado no samba e na percussão brasileira, tocado com baqueta."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Na bateria de uma escola de samba, qual tambor tem o som mais grave e marca o pulso do samba?",
    "resposta": "Surdo",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Surdo"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Surdo",
        "situacao": "ok",
        "texto": "Chama-se pessoa surda (ou surdo) aquela que possui algum grau de surdez, seja ele leve, moderado, severo ou profundo.\n[…]\nA comunicação é vital na construção da identidade. O contacto precoce entre o adulto surdo e a criança surda, através de uma língua gestual, é o que proporcionará o acesso à linguagem. Desta forma, estará também assegurada a identidade e cultura surda, que serão transmitidas naturalmente à criança surda pelo adulto surdo em questão. Quanto mais precoce o acesso à língua gestual, mais cedo a criança adquirirá uma identidade própria, consciente e sólida.\n[…]\nNo entanto, o surdo como pessoa existe - esta é uma diferença que existe, que estigmatiza o surdo - a sua negação estigmatiza-o ainda mais, já que não permite o seu desenvolvimento, a sua formação de identidade como ser inteiro e integrante de uma comunidade de indivíduos diferentes como ele mesmo.\n[…]\nNono artigo: Serviços de Interpretação - todo o surdo tem direito ao serviço gratuito de intérpretes de língua gestual.\n[…]\nDécimo primeiro artigo: Informação e Cultura - todo o surdo tem direito ao acesso à informação e à cultura, através da língua gestual.\n[…]\nDécimo terceiro artigo: Medicina - a pessoa surda tem direito de decidir submeter-se ou não a qualquer intervenção ou tratamento médico-cirúrgico. Nenhum tratamento da surdez, que possa afectar a sua integridade pessoal, pode ser imposto a um menor surdo.\n[…]\nDécimo quinto artigo: Actividades Culturais, Desportivas e de Lazer - mostra este artigo que todo o surdo tem direito a aceder às actividades culturais, desportivas e de lazer."
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Tererê",
      "descricao": "Infusão de erva-mate tomada fria, típica do Paraguai e de Mato Grosso do Sul."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "O tererê é primo do chimarrão e também usa erva-mate. O que o diferencia na hora do preparo?",
    "resposta": "É feito com água gelada",
    "fonte": [
      "https://en.wikipedia.org/wiki/Terer%C3%A9"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Terer%C3%A9",
        "situacao": "ok",
        "texto": "Tereré (of Guaraní origin) is an infusion of yerba mate (botanical name Ilex paraguariensis) prepared with cold water, plentiful ice, and pohã ñana (medicinal herbs) in a large vessel. This infusion has its roots in Pre-Columbian America, which established itself as traditional during the time of Governorate of Paraguay. There is also a variant made with juice, called \"Juice tereré\" or \"Russian te\n[…]\nOriginally consumed by the Guaraní, its use was adopted during the Guaraní-Jesuit Missions time in the area of their missions. Tereré was spread by the emigrants, and has been a social beverage for centuries. People usually prepare one jar of water and a guampa (or mate, or porongo) (Spanish) or cuia (Portuguese) with a bombilla (Spanish) or bomba (Portuguese) which is shared among the group of people.\n[…]\nMany people drink tereré with added herbs, both medicinal and refreshing. In northeastern Argentina it is commonly prepared either with water, medicinal herbs and ice cubes (called tereré de agua (tereré prepared with water)) or citrus, as in south-western Brazil, with fruit juices like lemon, lime, orange, or pineapple. This practice varies depending on the region, for example, in the Formosa Province (Argentina), as well in the majority of Paraguay, it is normally prepared with medicinal herbs.\n[…]\nMost preparations of tereré begin by filling a guampa 2⁄3 to 3⁄4 full of yerba mate. Then, ice cubes are added to water and usually stored in a vacuum flask. If herbs or juice are part of the preparation, they are added to the water at this point. When consuming, the water is poured over the yerba held in the guampa and extracted from the yerba with a metallic straw (with a filter included on it) called \"bombilla\". The liquid is refilled as desired.\n[…]\nMate con malicia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Terer%C3%A9",
        "situacao": "ok",
        "texto": "Tererê (terere em guarani),  também chamando de Tereré (na língua espanhola) , é uma bebida feita com a infusão da erva-mate (Ilex paraguariensis) em água fria com ervas medicinais (pojhá ñaná en guarani) como limão, hortelã, erva-cidreira, cocú, salsaparrilha, pé-de-cabra, rabo de cavalo, taropé, verbena, entre outros. Tem suas raízes na América pré-colombiana, que se consolidou como tradicional \n[…]\nA bebida mais consumida atualmente em Ponta Porã é o Tererê (feito com erva-mate verde, água e gelo). As rodas de tereré então são vistas em qualquer parte da cidade, unindo brasileiros e paraguaios. Por isso, as duas cidades (Ponta Porã e Pedro Juan Caballero) são consideradas cidades gêmeas por causa de sua proximidade cultural: a cultura fronteiriça.\n[…]\nDiferentemente do mate quente, no tererê a erva pode ser colocado em um vidro (que tem mais capacidade volumétrica do que o porongo tererê ipiente tradicional para mate). No Paraguai, o recipiente para o tereré chama-se guampa e é, geralmente, feito de chifre de boi e, por vezes, adornado com prata ou outro metal. Faz-se também \"mates\" (recipientes para tomar mate) de palosanto (Bulnesia sarmientoi).\n[…]\nQuanto ao líquido a ser usado para a infusão, o mais popular no Paraguai e também no Brasil é água gelada e, opcionalmente, gotas de limão, ou até mesmo suco de frutas. No Paraguai, costuma-se adicionar ervas e plantas medicinais à água. Outras combinações também são possíveis, porém não indicadas pelos consumidores mais tradicionais.\n[…]\nEm guarani, os paraguaios chamam de tererê rupá (literalmente, \"cama ou ninho de mate frio\") uma espécie de aperitivo antes do tereré da manhã, que é habitualmente tomado por volta das dez da manhã, para a água fria não \"bater\" o estômago.\n[…]\nDiferentemente do chimarrão, que é feito com água quente, o tererê é consumido com água fria, resultando em uma bebida agradável e refrescante.\n[…]\nPoesia do Tereré",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Oxum",
      "descricao": "Orixá das águas doces, dos rios e cachoeiras, nas religiões afro-brasileiras."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Se Iemanjá reina sobre as águas salgadas, qual orixá é a senhora das águas doces dos rios e cachoeiras?",
    "resposta": "Oxum",
    "distratores": [
      "Iansã",
      "Nanã",
      "Obá"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Oxum"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Oxum",
        "situacao": "ok",
        "texto": "Oxum (em iorubá: Oṣun), na religião iorubá, é uma orixá que reina sobre as águas doces, considerada a senhora da beleza, da fertilidade, do dinheiro e da sensibilidade. Intimamente associada à riqueza espiritual e material, à vaidade e à capacitação da mulher, é representada por uma mulher africana elegante, adornada da cabeça aos pés com joias de ouro, sentada à beira de um rio, com um espelho re\n[…]\nÉ cultuada no Candomblé, na Umbanda e em diversas religiões afro-americanas. Oxum é dona do ouro e das pedras preciosas, e é cultuada como rainha da nação ijexá. Tem o título de ialodê (em iorubá: ìyálodè), ou seja, senhora da sociedade.\n[…]\nOxum é filha de Iemanjá e Oxalá. Oxum, Iansã e Obá eram esposas de Xangô. Ipondá é a mãe de Logunedé, orixá menino que compartilha dos seus axés. Ambos dançam ao som do ritmo ijexá, toque que recebe o nome de sua região de origem. Usa um abebé (espelho de metal)  nas mãos, uma alfange (adaga), por ser guerreira, e um ofá (arco e flecha) dourado, por sua ligação com Oxóssi. É uma das mais jovens.\n[…]\nNa Umbanda, o culto a Oxum apresenta poucas diferenças em relação à Religião iorubá e ao Candomblé.\n[…]\nNas religiões afro-brasileiras, é sincretizada com diversas Nossas Senhoras. Na Bahia, ela é tida como Nossa Senhora das Candeias ou Nossa Senhora dos Prazeres, enquanto em Pernambuco e nos demais estados do Nordeste é sincretizada com Nossa Senhora do Carmo. No Sul do Brasil, é muitas vezes sincretizada com Nossa Senhora da Conceição.\n[…]\nNo Centro-Oeste e Sudeste é associada ora à denominação de Nossa Senhora, ora com Nossa Senhora da Conceição Aparecida, e especificamente em Minas Gerais é sincretizada com Nossa Senhora das Dores. No Norte do Brasil, é sincretizada com Nossa Senhora de Nazaré.\n[…]\nNo Haiti, Oxum é a orixá do amor, do dinheiro e da felicidade. Também conhecida como Erzile ou Erzulie, Erzulie Freda no vodum.\n[…]\nTemplo de Oxum"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Santo Antônio",
      "descricao": "Santo Antônio de Lisboa ou de Pádua, frade franciscano celebrado em 13 de junho e conhecido como santo casamenteiro."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Que santo é conhecido popularmente como casamenteiro, alvo das simpatias das moças para arranjar marido?",
    "resposta": "Santo Antônio",
    "distratores": [
      "São João",
      "São Pedro",
      "São Benedito"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Festa_junina",
      "https://en.wikipedia.org/wiki/Anthony_of_Padua"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Festa_junina",
        "situacao": "ok",
        "texto": "Festas juninas, festas dos santos populares ou celebração do meio do verão são uma celebração da estação do verão do hemisfério norte, geralmente realizada em uma data próxima ao solstício de verão. Tem raízes pagãs pré-cristãs na Europa.\n[…]\nNa maioria dos lugares, o evento principal é a queima de uma grande fogueira. No oeste da Noruega, um costume de arranjar casamentos simulados, tanto entre adultos como entre crianças, ainda é mantido vivo.\n[…]\nEm Lisboa é festejado o Santo António a 13 de Junho, sendo realizadas as marchas populares representando vários bairros da cidade, que desfilam pela Avenida da Liberdade, com centenas de figurantes, música, trajes e decorações coloridas e muito público. Os arraiais são feitos nos próprios bairros, com destaque para Alfama, mas também a Graça, Bica, Mouraria ou Madragoa, sendo tradição comer-se o caldo verde e sardinha assada.\n[…]\nCanta-se o fado e outras músicas tradicionais e dança-se até de madrugada. Outro momento grande é a procissão de Santo António, que sai da Igreja de Santo António de Lisboa, situada em Alfama, junto à Sé de Lisboa, no local do seu nascimento, cerca de 1193.;\n[…]\nDurante a festa, cantam-se vários cânticos tradicionais da época e as pessoas se vestem num estilo rural, tal como no Brasil. Por acontecer no início do verão, são comuns as mesas cheias de alimentos típicos da época, tais como morangos e batatas. Também são tradicionais as simpatias, sendo a mais famosa a das moças que constroem buquês de sete ou nove flores de espécies diferentes e os colocam sob o travesseiro na esperança de sonhar com o futuro marido."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Anthony_of_Padua",
        "situacao": "ok",
        "texto": "Anthony of Padua or Anthony of Lisbon (born Fernando Martins de Bulhões; 15 August 1195 – 13 June 1231) was a Portuguese Catholic priest and member of the Order of Friars Minor.\n[…]\ncity of San Antonio, Texas.\n[…]\nSt. Anthony gives his name to Mission San Antonio de Padua, the third Franciscan mission dedicated along El Camino Real in California in 1771.\n[…]\nAnthony intensifies in the days leading up to his feast. Saint Anthony is patron saint of at least 105 cities through Brazil, in 10 states, being one of the most venerated saints in that country. In 1918, the region in Maranhão previously known as \"Furo\" was renamed as \"Porto de Santo Antônio\" in his homage, being renamed in 1925 as \"Magalhães de Almeida\".\n[…]\nThe Austrian composer Gustav Mahler's song cycle Des Knaben Wunderhorn contains the song Des Antonius von Padua Fischpredigt, whose lyrics recount the story of Saint Anthony's sermon to the fish. This song later formed the basis for the scherzo movement of Mahler's Symphony No. 2. In correspondence, Mahler expressed amusement that his sinuous musical setting could imply St. Anthony of Padua was himself drunk as he preached to the fish.\n[…]\nThe 1931 silent film Saint Anthony of Padua (Antonio di Padova, il santo dei miracoli) was directed by Giulio Antamoro.\n[…]\nUmberto Marino's 2002 Sant'Antonio di Padova or Saint Anthony: The Miracle Worker of Padua is an Italian TV movie about the saint. While the VHS format is without English subtitles, the DVD version released in 2005 is simply called Saint Anthony and is subtitled.\n[…]\nAntonello Belluco's 2006 Antonio guerriero di Dio or Anthony, Warrior of God is a biopic about the saint.\n[…]\nFranciscan Media: Who Was St. Anthony of Padua?"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Zabumba",
      "descricao": "Tambor grave de duas peles, tocado com maceta e vareta, base do trio de forró pé de serra."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "No trio pé de serra do forró, que instrumento de percussão faz a marcação mais grave?",
    "resposta": "Zabumba",
    "distratores": [
      "Triângulo",
      "Pandeiro",
      "Agogô"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Zabumba"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Zabumba",
        "situacao": "ok",
        "texto": "A zabumba (pronúncia em português: [zaˈbũbɐ]) é um tipo de bumbo usado na música popular brasileira. O tocador usa o tambor em pé e usa as duas mãos enquanto toca.\n[…]\nA zabumba geralmente varia em diâmetro de 16 a 22 polegadas e tem 5 a 8 polegadas de altura. O casco é feito de madeira e pode utilizar pele ou peles de tambor de plástico e geralmente é tensionado através de terminais de metal e hastes de tensão. A cabeça superior é geralmente silenciada com fita ou tira(s) de pano e golpeada com um martelo coberto de pano (segurado na mão direita) para produzir uma nota fundamental baixa com tons mínimos.\n[…]\nA cabeça inferior é afinada mais apertada e é atingida com uma vara fina, semelhante a um galho, chamada bacalhau, que é segurada na mão esquerda para produzir um fundamental alto com um ataque agudo e numerosos harmônicos.\n[…]\nNa construção, afinação e técnica de execução, a zabumba é muito semelhante aos bumbos encontrados na região do Mediterrâneo oriental, como o davul.\n[…]\nA zabumba tornou-se conhecida em outras regiões do Brasil, inicialmente, através utilizada nos gêneros de forró, coco, baião e, posteriormente, do trio de forró incluindo xote, xaxado, arrasta-pé ou marcha. O trio instrumental do baião, constituído por sanfona, triângulo e zabumba, foi consagrado por Luiz Gonzaga, que afirma ter incorporado o membranofone inspirado na banda de pífanos. A zabumba é o instrumento responsável pela marcação do ritmo nos trios de forró.\n[…]\nEla é a única responsável pela base de sustentação do pulso, por possuir um som grave e profundo."
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Cuíca",
      "descricao": "Instrumento de fricção do samba, com uma vareta presa por dentro do couro, que produz um som parecido com um ronco."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Na cuíca, o som que lembra um ronco nasce quando o músico esfrega o quê na vareta presa ao couro?",
    "resposta": "Um pano úmido",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Cuíca"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Cuíca",
        "situacao": "ok",
        "texto": "A cuíca ou puíta (em Angola pwita) é um instrumento musical, semelhante a um tambor, com uma haste de madeira presa no centro da membrana de couro, pelo lado interno. O som é obtido friccionando a haste com um pedaço de tecido molhado e pressionando a parte externa da cuíca com dedo, produzindo um som de ronco característico. Quanto mais perto do centro da cuíca o dedo do instrumentista estiver, m\n[…]\nA cuíca desempenha um papel rítmico importante em todos os tipos de samba. Ela é particularmente notável como elemento permanente dos grupos do Carnaval do Rio de Janeiro, que apresentam seções inteiras de tocadores de cuíca. É tão comumente usada no samba voltado para o rádio que, na ausência de um cuíca player, cantores ou outros músicos brasileiros imitam o som da cuíca com a voz.\n[…]\nExistem muitos tamanhos de cuíca, e embora seja geralmente considerada um instrumento de percussão ela não é percutida. Encaixada na parte de baixo da pele está uma haste de bambu. A extensão tonal da cuíca pode chegar a duas oitavas. Os tons produzidos tentam imitar a voz na forma de grunhidos, gemidos, soluços e guinchos, e podem estabelecer assim um ostinato rítmico.\n[…]\nA cuíca possui uma vareta de madeira fixada em uma das extremidades, no interior do tambor, no centro da pele. Essa vareta é resinada e friccionada com um pano. Alterar a pressão sobre a pele do tambor pelo lado de fora produz diferentes alturas e timbres.\n[…]\nO polegar, o indicador e o dedo médio seguram a haste no interior do instrumento com um pedaço de pano úmido, e os ritmos são articulados pelo deslizamento deste tecido ao longo do bambu. A outra mão segura a cuíca e com os dedos exerce uma pressão na pele. Quanto mais forte a haste for segurada e mais pressão for aplicada na pele mais altos serão os tons obtidos. Um toque mais leve e menos pressão irão produzir tons mais baixos.\n[…]\nJorge Ben usa a cuíca em muitas de suas canções."
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Cuca",
      "descricao": "Bruxa do folclore brasileiro que pega crianças desobedientes, popularizada pelo Sítio do Picapau Amarelo."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Nas adaptações do Sítio do Picapau Amarelo, a Cuca, bruxa que assusta crianças, ganhou a aparência de qual animal?",
    "resposta": "Jacaré",
    "distratores": [
      "Coruja",
      "Cobra",
      "Sapo"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Cuca"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Cuca",
        "situacao": "ok",
        "texto": "Cuca é um dos principais seres mitológicos do folclore brasileiro.\n[…]\nOutras versões, a cuca é uma entidade do mal que assume a forma de bruxa velha com aspecto de jacaré, que não se sabe ao certo sua idade mas que pode ter mais de 3 mil anos, como também existem versões em que pode se existir mais de uma cuca, como se fosse uma subclasse de bicho-papão, como é descrito no livro “O Saci” (1921), de Monteiro Lobato.\n[…]\nEm seu livro \"Geografia dos Mitos Brasileiros\", Luís da Câmara Cascudo (1898-1986) diz que a Cuca é um mito de origem portuguesa relacionado à Coca, figura que aparecia nas procissões da província do Minho, em Portugal. Também no Minho, \"cuca\" é o nome popular de uma espécie de abóbora que costumava-se perfurar com contornos de olhos e boca, e dentro da qual era colocada uma vela acesa (de forma semelhante ao que se faz no Halloween americano).\n[…]\nCoca\n[…]\nCuca (personagem)\n[…]\nCuca - Turma do Folclore"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Matinta Perera",
      "descricao": "Figura do folclore amazônico, velha bruxa que se transforma em pássaro e assobia à noite."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Na Amazônia, a Matinta Perera, velha bruxa que vira pássaro, anuncia sua presença à noite com qual som?",
    "resposta": "Um assobio agudo",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Matinta_Perera"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Matinta_Perera",
        "situacao": "ok",
        "texto": "Matinta-Pereira, às vezes, também grafado Matinta-Perera, é uma personagem do folclore brasileiro, mais precisamente na Região Norte do país.\n[…]\nTrata-se de uma bruxa velha que à noite se transforma em um pássaro agourento que pousa sobre os muros e telhados das casas e se põe a assobiar, e só para quando o morador, já muito enfurecido pelo estridente assobio, promete a ela algo para que pare (geralmente tabaco, mas também pode ser café, cachaça ou peixe). Assim, a Matinta para e voa, e no dia seguinte vai até a casa do morador perturbado para cobrar o combinado.\n[…]\nNo caso de não haver herdeira para a sina, a dona da maldição se esconde na floresta e espera que uma mulher passe por lá. Quando uma mulher finalmente passa, então ela pergunta: \"Quem quer?\". Se a moça responder: \"Eu quero!\" então ela se torna ainda naquela noite a Matinta-Pereira.[carece de fontes]?\n[…]\nA grafia original abrasileirada, escrita em livros do século XIX, como ocorre nos escritos de Frederico José de Santana Néri, é com \"i\" e hífen (Matinta-Pereira) e o uso \"Perera\", constante em livros mais recentes, é uma tentativa de reproduzir graficamente a fala popular (\"linguagem matuta\"), mas desaconselhável por não ser fiel à origem da lenda.\n[…]\nNo ano de 2015, a lenda foi mencionada no enredo da São Clemente, \"A Incrível História do Homem que Só Tinha Medo da Matinta-Pereira, da Tocandira e da Onça Pé de Boi\", uma homenagem ao carnavalesco Fernando Pamplona.\n[…]\nAparece em uma peça das \"Lendas Amazônicas\" de Waldemar Henrique.\n[…]\nMatinta é descrita na letra da música \"Matinta\", da banda brasileira Armahda."
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Tambor de crioula",
      "descricao": "Dança afro-brasileira de roda, com tambores e a umbigada chamada punga, registrada como patrimônio cultural do Brasil."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "No tambor de crioula do Maranhão, os homens tocam os tambores. Quem dança no meio da roda?",
    "resposta": "As mulheres",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Tambor_de_crioula"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Tambor_de_crioula",
        "situacao": "ok",
        "texto": "Tambor de crioula ou punga é uma dança de origem africana praticada por descendentes de escravos africanos no estado brasileiro do Maranhão, em louvor a São Benedito, um dos santos mais populares entre os negros. É uma dança alegre, marcada por muito movimento dos brincantes e muita descontração.\n[…]\nA coreografia da dança apresenta vibrantes formas de expressão corporal, principalmente pelas mulheres, que ressaltam, em movimentos coordenados e harmoniosos, cada parte do corpo (cabeça, ombros, braços, cintura, quadris, pernas e pés). As dançantes se apresentam individualmente no interior de uma roda formada por um grupo de vários brincantes, incluindo dirigentes, dançantes, cantadores e tocadores. Da roda, participam também os acompanhantes do tambor. Todos acompanham o ritmo com palmas.\n[…]\nA dança apresenta uma particularidade: a punga ou umbigada. Entre as mulheres, caracteriza-se como um convite para entrar na roda. Quando a brincante está no centro e quer sair, avança em direção a outra companheira, aplicando-lhe a punga, que consiste no toque com a barriga. A que estiver na roda vai para o centro para continuar a brincadeira.\n[…]\nCada tambor tem uma função específica na roda:\n[…]\nA animação da dança é feita pelo canto puxado pelos homens, acompanhado pelas mulheres. Um brincante inicia a toada de levantamento, que pode ser uma melodia já existente ou improvisada. Em seguida, o coro, formado pelos instrumentistas e pelas mulheres, acompanha, e esse canto se torna o refrão para os improvisos que se seguem.\n[…]\nRecordações amorosas e homenagem às mulheres.\n[…]\nDesse modo, o Tambor de Crioula é uma \"forma ritual de reafirmação de valores dos negros do Maranhão\", expressando liberdade, força cultural, ritmo, alegria e a criação de um espaço próprio em meio a imposições.\n[…]\nTambor de Crioula"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Bonecos de Olinda",
      "descricao": "Bonecos gigantes do carnaval de Olinda, em Pernambuco."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Pelas ladeiras de Olinda, como são carregados os bonecos gigantes, que podem passar de três metros de altura?",
    "resposta": "Por uma pessoa dentro deles",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Bonecos_de_Olinda"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Bonecos_de_Olinda",
        "situacao": "ok",
        "texto": "Bonecos de Olinda são bonecos gigantes originados na cidade de  Olinda e usados em eventos festivos como o Carnaval de Pernambuco. São feitos de tecido, isopor, papel, madeira, fibra de vidro e alumínio.\n[…]\nA tradição dos bonecos gigantes iniciada em Belém do São Francisco ganhou as ladeiras de Olinda em 1931, com a criação do boneco Homem da Meia Noite. Daí em diante se popularizou a tradição do Encontro dos Bonecos Gigantes, onde vários deles se encontram no sitio histórico de Olinda, durante o período de carnaval. No início de 2007, o empresário cultural Leandro Castro criou a nova geração de Bonecos Gigantes juntamente com sua equipe de artistas.\n[…]\nO principal objetivo foi a construção e materialização de grandes ícones da história e da cultura brasileira, assim como de personalidades mundiais. Essa nova geração de bonecos tem impressionado bastante a todos pelo grande realismo das expressões faciais e figurinos.O peso atual dos bonecos que atingem até 4 metros de altura são de 20 quilos confeccionados em fibra apos terem sido moldados na argila.\n[…]\nOs bonecos da nova geração fazem a alegria dos foliões em Olinda no principal desfile de carnaval e em Recife saindo no sitio histórico do Recife Antigo também no período de carnaval. Em Recife os bonecos permanecem em exposição o ano inteiro na Embaixada de Pernambuco - Bonecos Gigantes de Olinda localizada na Rua Bom Jesus, 183 no Recife Antigo.O acervo da Embaixada atualmente ultrapassa mais de 340 bonecos.\n[…]\nCarnaval de Olinda\n[…]\nGigantones"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Abayomi",
      "descricao": "Boneca de pano afro-brasileira feita sem costura e sem cola, criada por Lena Martins na década de 1980."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Que característica marcante tem o rosto das bonecas abayomi tradicionais, feitas só com nós de pano?",
    "resposta": "Não tem feições desenhadas",
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
    "indice": 26,
    "ancora": {
      "nome": "Mapinguari",
      "descricao": "Monstro peludo do folclore amazônico, descrito com um só olho e uma boca na barriga."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Segundo a lenda, o Mapinguari tem o couro quase invulnerável. Em que parte do corpo ele pode ser ferido?",
    "resposta": "Umbigo",
    "distratores": [
      "Olho",
      "Pescoço",
      "Calcanhar"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Mapinguari"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Mapinguari",
        "situacao": "ok",
        "texto": "O mapinguari (ou mapinguary) é uma criatura lendária (criptídeo) descrito como sendo coberta de um longo pelo vermelho, e vivendo na floresta amazônica do Brasil e Bolívia.[carece de fontes]? O significado do nome é incerto, mas é possível que tenha origem na língua tupi.\n[…]\nOs cientistas ainda desconhecem essa criatura. Uma hipótese que explicaria a existência do Mapinguari, sugerida pelo paleontólogo argentino Florentino Ameghino no fim do século XIX, seria o fato da sobrevivência de algumas preguiças gigantes (Pleistoceno, 12 mil anos atrás) no interior da floresta amazônica.[carece de fontes]?\n[…]\nEntre muitos, o ornitólogo David Oren chegou a empreender expedições em busca de provas da existência real da criatura. Não obteve nenhum resultado conclusivo. Pelos recolhidos mostraram ser de uma cutia, amostras de fezes de um tamanduá e moldes de pegadas não serviriam muito, já que, como declarou, “podem ser facilmente forjadas”. O mapinguari seria semelhante ao pé-grande.\n[…]\nVelden, Felipe Ferreira Vander (2016). «Realidade, ciência e fantasia nas controvérsias sobre o Mapinguari no sudoeste amazônico». Boletim do Museu Paraense Emílio Goeldi. Ciências Humanas. 11 (1): 209–224. ISSN 1981-8122. doi:10.1590/1981.81222016000100011"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Ex-voto",
      "descricao": "Objeto oferecido a um santo em agradecimento a uma graça, como as peças de cera ou madeira das salas de milagres."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Nas salas de milagres das igrejas, fiéis deixam cabeças, pernas e mãos de cera ou madeira para agradecer uma graça. Como se chamam essas peças?",
    "resposta": "Ex-votos",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Ex-voto"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Ex-voto",
        "situacao": "ok",
        "texto": "O ex-voto (do latim: Por força de uma promessa, de um voto; ou a abreviação de ex-voto suscepto - o voto realizado) é o presente dado pelo fiel ao seu santo de devoção em consagração, renovação ou agradecimento de uma promessa. As expressões votivas são tradicionalmente reconhecidas sob as formas de pinturas ou desenhos, figuras esculpidas em madeira, modeladas em argila ou moldadas em cera, muita\n[…]\nA origem cristã do ex-voto data do século IV, a partir da absorção de antigas práticas pagãs.\n[…]\nA Difunta Correa é regularmente lembrada com a oferta de garrafas de água de beber. No Chile, como em boa parte da Argentina e da Venezuela, são encontradas as animas, espaços onde muitos ex-votos são ofertados, em geral, em devoções não-canônicas. Ao contrário do Brasil, na América do Sul as peças votivas tridimensionais (esculpidas em madeira, modeladas em argila ou moldadas em cera) são mais raras nas \"salas dos milagres\", bem como o uso de fotografias.\n[…]\nEm Salvador, a Sala dos Milagres da Igreja de Nosso Senhor do Bonfim, reserva de chuteiras de futebol a teses de doutorado. Há nesta igreja um museu dedicado à tradição. Em Aparecida, uma sala da mesma modalidade, localizada no subsolo da Basílica Nova, reserva ex-votos, majoritariamente representados por fotos, mas também há espaço para peças do corpo em cera, principalmente cabeças. A sala é o segundo local mais visitado, atrás apenas da imagem de Aparecida.\n[…]\nEm Congonhas, Minas Gerais, há uma sala exclusiva para a prática, com pequenas tábuas - do século XVIII ao XX - que representam a doença e a graça alcançada. Os temas mais comuns, além das doenças, são os desafios cotidianos de diversos segmentos sociais. Os textos que acompanham os ex-votos em Congonhas mostram a relação dos devotos em \"contratos de promessa e dívida\"."
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Chita",
      "descricao": "Tecido de algodão barato, estampado com flores grandes e coloridas, símbolo das festas juninas."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Que tecido de algodão barato, estampado com flores grandes e coloridas, enfeita as festas juninas e virou símbolo do Brasil popular?",
    "resposta": "Chita",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Chita_(tecido)"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Chita_(tecido)",
        "situacao": "ok",
        "texto": "Chita é um tecido de planta barato, e antigamente de pouca qualidade, com estampas de cores fortes, geralmente negras, e tramas difíceis. A estamparia é feita sobre o tecido conhecido como momo. Uma estampa característica de chita sobre outro suporte que não seja morim não é chita.\n[…]\nChita era originariamente um tecido estampado produzido na Índia desde épocas muito recuadas; os portugueses começaram a importar chitas da Índia, c. 1518, para as reexportar para a costa africana e para o Brasil. Entre 1600 e 1800 a chita (importada sobretudo do porto de Maçulipatão (Macchilapattanam), na costa oriental da Península hindustânica, tornou-se bastante popular na Europa como roupa de cama e para patchwork.\n[…]\nDe 1931 a 1938 a produção nacional de tecidos de algodão cresceu em cerca de 50%, alcançando os 963.757.666 metros anuais. É desse período a fundação da Fiação e Tecelagem São José, em Mariana, Minas Gerais. Nela começou a produção de chita e a gestação do chitão.\n[…]\nEm 1944 era aberta em Contagem, cidade na região metropolitana de Belo Horizonte, a Estamparia S.A., que é uma das poucas empresas que ainda produz chita, mas apenas 100 mil a 150 mil metros por mês, o que corresponde a 5% de sua produção mensal de tecidos.\n[…]\nA Fábrica de Tecidos Bangu deixara de produzir Chita para pesquisar, desenvolver e produzir tecidos de qualidade à altura do mercado internacional, usando principalmente o algodão como matéria-prima. Encerraria, assim, sua função inicial de grande produtora de morins e chitas. Até o encerramento de suas atividades existia, na sede da fábrica, no Rio de Janeiro, a chamada Sala das Chitas.\n[…]\nMedia relacionados com Chita (tecido) no Wikimedia Commons"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Rei Momo",
      "descricao": "Personagem que reina simbolicamente sobre o carnaval e recebe a chave da cidade."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O Rei Momo, que recebe a chave da cidade no carnaval, tem o nome de um deus grego ligado a quê?",
    "resposta": "Ao sarcasmo e à zombaria",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Rei_Momo",
      "https://pt.wikipedia.org/wiki/Momo_(mitologia)"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Rei_Momo",
        "situacao": "ok",
        "texto": "Rei Momo é um personagem da mitologia grega que se tornou um símbolo do Carnaval em alguns países da América Latina, incluindo Brasil e Colômbia.\n[…]\nPela mesma época o enterro do Rei Momo era festejado no Carnaval de Montevideu, sendo-lhe dedicadas quadras, como esta de 1892: \"El Rey Momo ya murió / lo llevamos a enterrar / envuelto en una mortaja / de ajo, pimienta y sal...\". Esta figura substitui na abertura dos corsos carnavalescos o clássico espanhol Marqués de las Cabriolas.\n[…]\nDurante muito tempo o Rei Momo fez parte do Carnaval carioca, como de outros carnavais, sem no entanto incorporar uma figura específica.\n[…]\nA figura actual do Rei Momo carioca terá surgido em 1933, quando Edgard Pilar Drumond, também conhecido por Plamenta, cronista carnavalesco, juntamente com o jornalista Vasco Lima e outros jornalistas do jornal A Noite, criaram um boneco de papelão a que chamaram Rei Momo I e Único, esculpido pelo artista Hipólito Colomb.\n[…]\nEm 1934, o jornal decidiu passar o rei para carne e osso, sendo consenso que devia ser alguém alegre, bonacheirão, bem falante e com cara de glutão, uma visão peculiar do Rei Momo e diversa da de carnavais como o de Nice, Nova Orleães e Colônia. O eleito foi Moraes Cardoso, cronista de turfe na redacção do mesmo jornal, que prontamente concordou.\n[…]\nA importância do Rei Momo para a cidade do Rio de Janeiro pode ser atestata pelo fato de vários prefeitos, nos primeiros dias do carnaval, entregarem as chaves da cidade ao Rei Momo, como se, a partir deste momento, quem governasse a cidade não fosse mais o prefeito, mas o Rei Momo."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Momo_(mitologia)",
        "situacao": "ok",
        "texto": "Momo (em grego clássico: Μώμος; romaniz.: Mómos; lit. \"burla\" ou \"deboche\"; em latim: Momus), na mitologia grega, é a personificação do sarcasmo, das burlas e da ironia. É a divindade dos escritores e poetas.\n[…]\nPorém, mais tarde, estando Zeus preocupado com o fato de que a Terra oscilava com o peso que a humanidade fazia, permitiu o retorno de Momo ao convívio do Olimpo desde que o ajudasse a descobrir um remédio para tal problema. De forma descontraída e irônica, ela sugeriu que ele criasse uma mulher, muito bonita, pela qual muitas nações guerreassem e assim se destruíssem. Zeus levou-a a sério e assim nasceu Helena, que levou os gregos à guerra de Troia.\n[…]\nÉ representada com uma máscara que levanta para exibir seu rosto, e com um boneco numa das mãos, simbolizando a loucura. É constantemente representada no cortejo de Baco, sempre ao lado de Sileno e Como, o deus das farras e da dissolução.\n[…]\nQuando sir Francis Bacon escreveu um ensaio intitulado \"Of Building\", afirmou, ali, que \"Aquele que constrói uma boa casa sobre uma base ruim, condena-se a si mesmo à prisão. […] Não é apenas o ar que faz ruim uma base, mas as estradas ruins, os mercados ruins e, se faz consultas com Momo, tem vizinhos ruins\".\n[…]\nLaurence Sterne aventou a possibilidade de existir uma janela de Momo para a alma, numa digressão incoerente, típica de seu estilo, na obra Tristram Shandy.\n[…]\n\"Momo\" é um romance de fantasia publicada por Michael Ende em 1973; trata do conceito de tempo e da falta de tempo na sociedade moderna."
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Chimarrão",
      "descricao": "Infusão quente de erva-mate tomada na cuia, bebida tradicional do Sul do Brasil"
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome do chimarrão vem do espanhol cimarrón, palavra usada na região do Prata para descrever que tipo de animal?",
    "resposta": "Animal xucro, selvagem",
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
    "indice": 31,
    "ancora": {
      "nome": "Curupira",
      "descricao": "Protetor das matas do folclore brasileiro, com cabelos vermelhos e os pés virados para trás."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Na língua tupi, o nome do Curupira, guardião das matas de cabelos vermelhos, quer dizer o quê?",
    "resposta": "Corpo de menino",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Curupira"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Curupira",
        "situacao": "ok",
        "texto": "Curupira é uma entidade da mitologia tupi e do folclore brasileiro, conhecido como o protetor e guardião das florestas e dos animais e por ter os pés voltados para trás.\n[…]\n\"Curupira\" procede do tupi Kurupira, \"o coberto de pústulas\".\n[…]\nO Curupira é um dos mitos mais antigos conhecidos do Brasil. É caracterizado como uma entidade das matas e, de acordo com as lendas, tem cabelo cor-de-fogo ou pode ser feito de fogo. Assemelha-se a um homem, um menino ou um anão, mas seus pés estão virados para trás para confundir os caçadores sem escrúpulos, deixando rastros enganosos. Também é famoso por ser o protetor das florestas e por castigar aqueles que fazem mal a elas.\n[…]\nÉ o mais popular dos entes fantásticos das matas brasileiras e, entre os guaranis, é conhecido como Curupi, com o qual, em algumas versões, compartilha características como os pés virados e, às vezes, o falo descomunal – embora sua predileção em procurar mulheres não é tão típica como neste.\n[…]\nHá quem diga que é casado com alguma tapuia velha, feia e má que o auxilia nos seus malefícios e da qual dizem que tem também filhos, o mais novo dos quais é o Saci ou Korupira pitanga ou mitanga (\"Curupira vermelho\").\n[…]\nO estado de São Paulo, pela lei de 11 de setembro de 1970, assinada pelo Governador Abreu Sodré, instituiu o Curupira como símbolo estadual do guardião das florestas e dos animais que nelas vivem. No Horto Florestal da capital paulista há um monumento ao Curupira, inaugurado no Dia da Árvore, 21 de setembro daquele ano. A estátua foi doada pelo prefeito de Ribeirão Preto, Antônio Duarte Nogueira, feita a partir de uma estátua do Curupira existente no bosque Fábio Barreto, naquele município."
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Iemanjá",
      "descricao": "Orixá das águas salgadas nas religiões afro-brasileiras, homenageada com oferendas no mar."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome do orixá Iemanjá vem da língua iorubá. O que ele significa?",
    "resposta": "Mãe dos filhos peixes",
    "distratores": [
      "Rainha do mar",
      "Senhora das ondas",
      "Estrela das águas"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Iemanjá"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Iemanjá",
        "situacao": "ok",
        "texto": "Iemanjá (Yemọjá na Nigéria, Yemayá em Cuba ou ainda Dona Janaína no Brasil; ver seção Nome e Epítetos) é o orixá dos ebás, a deusa da fertilidade originalmente associada aos rios e desembocaduras. Seu culto principal estabeleceu-se em Abeocutá após migrações forçadas, tomando como suporte o rio Ogum de onde manifesta-se em qualquer outro corpo de água. Também é reverenciada em partes da América do\n[…]\n\"Iemanjá\", nome que deriva da contração da expressão em iorubá Yèyé omo ejá (\"Mãe cujos filhos são peixes\") ou simplesmente Yemọjá em referência a um rio homônimo cultuado nos primórdios do culto deste orixá. Na Nigéria, Yemọjá pronuncia-se com o som de \"djá\" na última sílaba. A versão lusófona amplamente mais aceita no âmbito acadêmico é Iemanjá, por vezes também assume a grafia de Yemanjá onde a letra inicial alude a origem do nome. Isso também observa-se no caso de Yemayá na Santeria em Cuba.\n[…]\n\"Quando Iemanjá veio do Orum [mundo ancestral] para o Aiê [planeta Terra], ao chegar descobriu que cada orixá já tinha seu domínio na terra dos homens, e nada havia sobrado para ela. Queixou-se a Olodumarê [deus criador], que disse a ela ser seu dever cuidar da casa de seu marido Obatalá [rei das roupas brancas], de sua comida, de sua roupa, de seus filhos. Iemanjá se revoltou. Ela não tinha vindo do Orum para o Aiê para ser dona de casa e doméstica.\n[…]\nL. Cabrera também escreve sobre a suntuosidade dos filhos de Iemanjá mesmo quando pobres.\n[…]\nOmari-Tunkara é primorosa em sua descrição: \"Suas imagens contemporâneas são esculturas em madeira pintada a esmalte que geralmente retratam uma mulher com seios muito grandes amamentando um ou mais filhos e, muitas vezes cercada por outras crianças. As esculturas figuram o papel de Iemanjá como mãe carinhosa, protetora, vigilante e agente de fertilidade.\n[…]\nFesta de Iemanjá (vídeo)\n[…]\nA Outra origem de Janaína\n[…]\nMais sobre origem e festa de Iemanjá (vídeos)"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Boiuna",
      "descricao": "Monstro do folclore amazônico, serpente gigantesca e escura que vive nos rios, também chamada Cobra Grande."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "No nome da Boiuna, a Cobra Grande da Amazônia, a terminação una vem do tupi e indica qual cor?",
    "resposta": "Preta",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Boiuna"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Boiuna",
        "situacao": "ok",
        "texto": "A boiuna, Mboi-Una (cobra negra), cobra-grande, mãe-do-rio ou senhora-das-águas é um mito amazônico de origem ameríndia. É descrita como uma enorme cobra escura capaz de virar as embarcações. Também pode imitar as formas das embarcações, atraindo náufragos para o fundo do rio ou assumir a forma de uma mulher.\n[…]\n\"Boiuna\" deriva do tupi mbóiuna, que significa \"cobra preta\", através da junção de mbói (cobra) e una (preta).\n[…]\nPorém sua irmã Maria Canina cresceu uma garota má e amarga, afogando embarcações e fazendo muitas maldades, igual seu pai o Cobra Grande ou Boiúna\n[…]\nCom isso a Cobra Grande começou a aterrorizar e devorar as pessoas próximas do Rio. Essa versão conta a origem da Cobra Grande, de forma bem curiosa e controversa.\n[…]\nEssa versão da lenda é bastante conhecida no Pará. A lenda conta que uma Cobra Grande conhecida como Boiúna está adormecida debaixo da cidade de Belém, com sua cabeça na Catedral da Sé e seu corpo se estendendo até a Basílica de Nazaré. A lenda conta que se a corda acordar, a cidade de Belém será engolida por um grande rio.\n[…]\nExistem várias vertentes desse acontecimento. alguns acreditam que ela pode se irritar, outros afirmam que ela já se moveu algumas vezes, causando tremores de terra em Belém. Há também quem diga que a cobra só permanece adormecida graças à procissão do Círio, e que a corda usada na procissão é uma representação da própria Cobra Grande. Essas diferentes interpretações mostram a complexidade da lenda.\n[…]\nMuitas pessoas confundem a Boiúna com o Norato, mas na verdade, segundo a lenda, Norato (ou Honorato) é um dos filhos da Boiúna, sendo irmão de Maria Caninana. A Boiúna é uma cobra gigantesca que habita as profundezas dos rios ou lagos, com olhos luminosos que aterrorizam aqueles que a encontram.\n[…]\nSucuri - serpente chamada populamente de boiuna"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Cordão da Bola Preta",
      "descricao": "Tradicional bloco de carnaval do Rio de Janeiro, fundado em 1918."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Fundado no Rio de Janeiro em 1918, o Cordão da Bola Preta tirou seu nome de quê?",
    "resposta": "Do vestido de bolinhas de uma moça",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Cordão_da_Bola_Preta"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Cordão_da_Bola_Preta",
        "situacao": "ok",
        "texto": "O Cordão da Bola Preta (ou simplesmente Bola Preta), fundado em 1918, é  o mais antigo bloco de carnaval do Rio de Janeiro, um dos mais antigos do país e último representante remanescente dos antigos Cordões Carnavalescos que existiam no Rio de Janeiro no início do século XX.\n[…]\nSuas cores são o Branco e o Preto, e o uniforme oficial é qualquer roupa branca com bolinhas pretas. Muita gente vai fantasiada e até monta alas.\n[…]\nO músico Jacob do Bandolim também compôs uma música em homenagem ao bloco. No caso, um choro: \"Bola Preta\", gravado pela primeira vez em 1954 pelo próprio Jacob ao bandolim.\n[…]\nOu então no Bola Preta.\n[…]\nO Cordão foi começou suas atividades em 1918 na Rua da Glória nº 88, e foi fundado por Álvaro Gomes de Oliveira (Caveirinha), Francisco Brício Filho (Chico Brício), Eugênio Ferreira, João Torres e os três irmãos Oliveira Roxo, Jair, Joel e Arquimedes Guimarães.\n[…]\nNo Carnaval de 2013, o Bola Preta foi homenageado pela Alegria da Zona Sul, que falou dos 95 anos de existência do Cordão com o enredo \"Quem não chora, não mama...\", fazendo assim, uma concentração de luxo para o Bola Preta já que a Alegria da Zona Sul desfilou na madrugada de sexta para sábado de Carnaval, ou seja, a madrugada antes do desfile do bloco, que começa todos os anos na manhã de sábado.\n[…]\nNo carnaval  de 2018,  o GRES União de Maricá, tomou a responsabilidade de homenagear, em seu desfile de 2018, a trajetória centenária do Cordão do Bola Preta, através do enredo \"100Sacional! Um maxixético e rebolativo baile\", do carnavalesco Renato Figueiredo. Uma autêntica e envolvente narrativa do carnaval; das mais remotas lembranças de um Pierrô pelo reencontro e reconquista do amor de sua Colombina; revivendo inesquecíveis carnavais, dos áureos tempos de Arlequins, Cabrochas e afins."
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Iansã",
      "descricao": "Orixá dos ventos, raios e tempestades nas religiões afro-brasileiras."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Senhora dos raios e das tempestades, a orixá Iansã é associada no sincretismo a qual santa católica?",
    "resposta": "Santa Bárbara",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Iansã"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Iansã",
        "situacao": "ok",
        "texto": "Oiá (em iorubá:  Ọya), também grafada Oyá ou Oya, é uma das mais importantes divindades femininas da religião iorubá. No Brasil, é amplamente conhecida como Iansã. Seu culto associa-se aos ventos, tempestades, ao fogo e ao movimento, além do poder de controlar e conduzir os Eguns (espíritos ancestrais).\n[…]\nNos mitos recolhidos por estudiosos, Oiá surge como uma divindade dinâmica, associada ao fogo, às águas turbulentas e ao movimento. Em diversas narrativas, ela é o vento que precede a tempestade de Xangô, com quem compartilha vínculos míticos e afetivos.\n[…]\nO sincretismo brasileiro associa Oiá a Santa Bárbara, cuja festa de 4 de dezembro reúne procissões, terreiros e grupos populares.\n[…]\nNa santería cubana, Oiá é sincretizada com Nossa Senhora da Candelária e com Nossa Senhora da Anunciação.\n[…]\nNo vodu haitiano, Oiá é associada a forças de transição, fogo e loucura, frequentemente aproximada de espíritos da família Guédé.\n[…]\nA compreensão moderna de Oyá/Iansã resulta de diferentes tradições historiográficas e etnográficas.\n[…]\nBastide descreve Oiá como resultado de um processo de “dupla pertença”, no qual elementos africanos e católicos se sobrepõem. Para ele, Santa Bárbara não substitui Oyá, mas cria uma camada interpretativa adicional em contexto colonial. O foco é sociológico: como comunidades reorganizam identidades religiosas.\n[…]\nMatory analisa Oyá/Iansã dentro das dinâmicas de poder e gênero no Candomblé contemporâneo. Para ele, a centralidade de Oiá no Brasil reflete processos transnacionais, disputas entre casas, circulação de conhecimento sacerdotal e agência feminina. Sua abordagem desloca Oyá do mito para a sociologia política do culto.\n[…]\nBastide → sincretismo"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Frevo",
      "descricao": "Ritmo e dança do carnaval de Pernambuco, com passos acrobáticos e sombrinhas coloridas."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O que o frevo pernambucano, o samba de roda baiano e o Círio de Nazaré, de Belém, têm em comum?",
    "resposta": "São patrimônio da humanidade pela Unesco",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Frevo",
      "https://pt.wikipedia.org/wiki/Samba_de_roda",
      "https://pt.wikipedia.org/wiki/Círio_de_Nazaré"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Frevo",
        "situacao": "ok",
        "texto": "O frevo é um ritmo musical e uma dança brasileira com origem no estado de Pernambuco. Sua música baseia-se na fusão de gêneros como marcha, maxixe, dobrado e polca, e sua dança foi influenciada pela capoeira.\n[…]\nFoi declarado Patrimônio Imaterial da Humanidade pela UNESCO no ano de 2012, sob a designação \"Frevo: Arte do Espetáculo do Carnaval do Recife\".\n[…]\nAlceu Valença iniciou-se no gênero com a série de discos Asas da América, idealizada por Carlos Fernando, nos anos 1980. Nesse período, compôs os frevos Homem da Meia-Noite, Sou Eu Teu Amor, Menina Pernambucana, Pitomba Pitombeira. Recriou o clássico Voltei, Recife, de Luiz Bandeira. Seguiram-se sucessos como Bom Demais, Me Segura Que Senão Eu Caio, Beijando a Flora, Roda e Avisa, De Janeiro a Janeiro, entre outros. Tropicana ganhou versão em frevo, orquestrada pelo maestro Duda.\n[…]\nEm cerimônia realizada na cidade de Paris, França, no ano de 2012, a UNESCO anunciou que, aprovado com unanimidade pelos votantes, o frevo foi eleito Patrimônio Cultural Imaterial da Humanidade.\n[…]\nSegundo Leonardo Dantas, é no frevo de bloco que está a melhor parte da poesia do carnaval pernambucano.\n[…]\nA presença do clube carnavalesco pernambucano Vassourinhas no carnaval de Salvador, em 1951, insipirou os baianos Dodô e Osmar a tocarem o frevo num instrumento por eles inventado, o pau elétrico - que viria a ser conhecido como guitarra baiana, (nome esse dado por Armandinho Macêdo, que introduziu uma 5ª corda- Dó). -, em cima de um Ford 1929 (a famosa Fobica), dando origem ao trio elétrico.\n[…]\nNo final dos anos 1980, o frevo elétrico se misturaria ao samba-reggae e outros ritmos afro-baianos, afro-brasileiros e caribenhos, dando origem ao axé music.\n[…]\nCoco de roda"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Samba_de_roda",
        "situacao": "ok",
        "texto": "O samba de roda é uma forma ancestral de dança do samba originária no Recôncavo Baiano e é tido como a matriz fundamental para o nascimento do samba urbano carioca e do samba rural, especialmente do baiano.\n[…]\nDevido a sua importância cultural e artística, recebeu reconhecimento como patrimônio cultural imaterial brasileiro pelo Instituto do Patrimônio Histórico e Artístico Nacional em 2004 e patrimônio cultural imaterial da humanidade pela Organização das Nações Unidas para a Educação, a Ciência e a Cultura em 2005.\n[…]\nO samba de roda está ligado ao culto aos orixás e caboclos, à capoeira e à comida de azeite. A cultura portuguesa está também presente na manifestação cultural por meio do violão, do pandeiro e da língua utilizada nas canções. Foi considerado pelo Instituto do Patrimônio Histórico e Artístico Nacional (IPHAN) como patrimônio imaterial.\n[…]\nO ritmo e dança teve sua candidatura ao Livro de Registro (que registra os patrimônios imateriais protegidos pelo IPHAN) lançada em 4 de outubro de 2004, e, depois de ampla pesquisa a respeito de sua história, o samba de roda foi finalmente registrado como patrimônio imaterial em 25 de novembro de 2005, status que traz muitos benefícios para a cultura popular e, sobretudo, para a cultura do Recôncavo Baiano, berço do samba de roda.\n[…]\nDos ritmos derivativos do samba, o mais controverso foi o da Bossa Nova, na década de 1950.\n[…]\nO samba de roda designa uma mistura de música, dança, poesia e festa. Presente em todo o estado da Bahia, é praticado principalmente, na região do Recôncavo. Mas o ritmo se espalhou por várias partes do país, sobretudo Pernambuco e Rio de Janeiro.\n[…]\nSamba\n[…]\n«Samba de Roda»\n[…]\n«Samba de Roda do Recôncavo Baiano»"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Círio_de_Nazaré",
        "situacao": "ok",
        "texto": "O Círio de Nazaré é uma manifestação religiosa católica, herdada dos colonizadores portugueses, marcada por procissões (romarias) em devoção a Nossa Senhora de Nazaré, que ocorre na cidade brasileira de Belém (estado do Pará). É celebrado anualmente desde 1793, no segundo domingo de outubro, reunindo atualmente cerca de dois milhões de pessoas.\n[…]\nO Círio é a maior manifestação católica do Brasil e uma das maiores aglomerações deste tipo no mundo [en]. Foi, em 2004, reconhecido como patrimônio cultural imaterial pelo Instituto do Patrimônio Histórico e Artístico Nacional (Iphan) e, em 2013, declarado Patrimônio Cultural da Humanidade pela UNESCO.\n[…]\n1793 - É realizado o primeiro Círio de Nazaré em Belém.\n[…]\n1974 - É criada a Guarda de Nazaré de Belém. É realizado o primeiro Círio de Brasília.\n[…]\n1992 - Acontece a 200.ª edição do Círio de Nazaré, tendo como novidade a introdução do Traslado para Ananindeua, graças a sugestão de um morador, acontecendo na sexta-feira. Por conta disso, a Romaria Rodoviária passa a ter como ponto de saída à Praça Matriz de Ananindeua, ocorrendo no sábado, nas primeiras horas do dia. Nesse mesmo ano, a imagem original participou do Círio, ficando à frente da procissão. A Basílica de Nazaré é declarada Patrimônio Histórico do Estado do Pará.\n[…]\n2000 - O Círio chega na Praça Santuário por volta das 15h45, batendo o recorde de 1996. Introdução do Carro de Plácido na romaria. É criada a Guarda Mirim de Nazaré de Belém.\n[…]\nAlém diso, problemas no atrelamento e a mudança inesperada no formato da corda, que deixou de usar o formato de U e passou a adotar o modelo linear, usado até os dias atuais, acabaram atrasando a passagem da procissão. A procissão é tombada pelo IPHAN como Patrimônio Imaterial da Humanidade. É realizada a primeira Ciclo Romaria.\n[…]\nMuseu do Círio\n[…]\n«Banco de dados do patrimônio imaterial - Iphan»"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Lenda do guaraná",
      "descricao": "Lenda do povo indígena Sateré-Mawé sobre a origem do guaraná a partir dos olhos de um menino."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Nas lendas indígenas, o que têm em comum a origem da mandioca e a origem do guaraná?",
    "resposta": "Brotaram da cova de uma criança",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Guaraná",
      "https://pt.wikipedia.org/wiki/Mandioca"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Guaraná",
        "situacao": "ok",
        "texto": "O guaraná (nome científico: Paullinia cupana), comumente chamado guaranazeiro e uaraná, é um cipó originário da Amazônia. É encontrado no Brasil, Peru, Colômbia, Guiana e Venezuela, sendo cultivado principalmente no município de Maués, estado do Amazonas, e na Bahia. Pertence a família Sapindaceae.\n[…]\nContém de uma a quatro sementes, as quais apresentam coloração castanho-escuro e têm arilo abundante antes da maturidade. Na região próxima ao município de Maués, onde é cultivada, os índios da nação saterê-mawé têm lendas sobre a origem da planta.\n[…]\nNasceu ali uma nova planta, travessa como as crianças, com hastes escuras e sulcadas como os músculos dos guerreiros da tribo. E quando ela frutificou, seus frutos de negro azeviche, envoltos de um arilo branco com duas cápsulas de cor vermelho-vivo. Diziam os índios:\n[…]\nDurante séculos, tribos amazônicas de etnia Saterê-Maué utilizam o guaraná para tratar diarreia crônica, hipertensão, nevralgia, disenteria e enxaqueca. Além disso, os indígenas também utilizam o material vegetal como antipirético, estimulante, analgésico, antídoto para venenos e para diversos outros fins terapêuticos. Suas sementes costumam ser mastigadas ou então adicionadas a alimentos e bebidas.\n[…]\nA bebida inicialmente era adstringente e acentuadamente amarga e por isso não se disseminou muito (não há como comprovar se o guaraná era gaseificado, o registro de guaraná gaseificado é de 1922).\n[…]\nNa Sérvia e em outros países do Leste Europeu, fabrica-se uma bebida energética à base de guaraná, comercializada com este nome, mas que, em vez do gosto doce do refrigerante, tem sabor amargo e efeito cardioacelerador.\n[…]\n«Description de la Guarana et de ses effets» (em francês)\n[…]\n«Teste comprova que guaraná precisa ser consumido com moderação». [ligação inativa] (em português)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mandioca",
        "situacao": "ok",
        "texto": "Manihot esculenta, conhecida como mandioca, macaxeira, aipim, castelinha, uaipi, mandioca-doce, mandioca-mansa, maniva, maniveira, pão-de-pobre, mandioca-brava e mandioca-amarga, é uma planta da família das Euphorbiaceae. Esta planta é nativa da América do Sul, no entanto está presente em muitas regiões do mundo.\n[…]\nO chefe tinha deliberado matá-la, quando lhe apareceu em sonho um homem branco que lhe disse que não matasse a moça, porque ela efetivamente era inocente, e não tinha tido relação com homem. Passados os nove meses, ela deu à luz uma menina lindíssima e branca, causando este último fato a surpresa não só da tribo como das nações vizinhas, que vieram visitar a criança, para ver aquela nova e desconhecida raça.\n[…]\nA criança, que teve o nome de Mani e que andava e falava precocemente, morreu ao cabo de um ano, sem ter adoecido e sem dar mostras de dor. Foi ela enterrada dentro da própria casa, descobrindo-se e regando-se diariamente a sepultura, segundo o costume do povo. Ao cabo de algum tempo, brotou da cova uma planta que, por ser inteiramente desconhecida, deixaram de arrancar. Cresceu, floresceu e deu frutos.\n[…]\nDela, também são feitas bebidas como o cauim (indígena), feito através de fermentação. Por meio de um processo de destilação, também é produzida uma cachaça ou aguardente de mandioca: a tiquira. Possui elevado teor alcoólico. É comum no estado do Maranhão mas é pouco conhecida no restante do Brasil.\n[…]\nAs mães alimentavam crianças pequenas com a giroba, que, segundo a crença, permitia-lhes que se desenvolvessem em adultos fortes e saudáveis.\n[…]\nManiaca — caldo venenoso que sai da mandioca espremida. Depois de fervido, vira o tucupi.\n[…]\nPisaregue — pão de mandioca dos calapalos de Mato Grosso.\n[…]\nFabricação de farinha de mandioca\n[…]\nPágina da Embrapa Mandioca e Fruticultura Tropical"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Maracatu nação",
      "descricao": "Cortejo carnavalesco afro-brasileiro de Pernambuco, também chamado maracatu de baque virado, com rei, rainha e batuque."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O que o maracatu nação pernambucano e a congada de Minas Gerais têm em comum na sua origem?",
    "resposta": "A coroação de reis do Congo",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Maracatu",
      "https://pt.wikipedia.org/wiki/Congada"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Maracatu",
        "situacao": "ok",
        "texto": "Maracatu é um ritmo musical, dança e ritual de sincretismo religioso com origem no estado brasileiro de Pernambuco.\n[…]\nExistem dois tipos, conforme o \"baque\" ou batida: Maracatu Nação (Baque Virado) e Maracatu Rural (Baque Solto). O primeiro, bastante comum na área metropolitana do Recife, é o mais antigo ritmo afro-brasileiro; e o segundo é característico da cidade de Nazaré da Mata (Zona da Mata Norte de Pernambuco).\n[…]\nO registro mais antigo que se tem sobre o Maracatu Nação data de 1711, mas o ano de sua origem é incerto. O que se sabe é que ele surgiu em Pernambuco e vem se transformando desde então.\n[…]\nUma das peculiaridades deste maracatu é o costume de conduzir três calungas (bonecas negras) ao invés de duas como é comum aos outros maracatus. São elas: Dona Leopoldina, Dom Luís e Dona Emília, que representam os orixás Iansã, Xangô e Oxum, respectivamente. Outra característica singular do Nação Elefante é o fato de ter sido o primeiro a ser conduzido por uma matriarca, pois até então os maracatus sempre tinham sido regidos por uma figura masculina.\n[…]\nO maracatu de baque virado é caracterizado pelo uso predominante de instrumentos de origem africana. Na percussão chamam atenção os grandes tambores, chamados alfaias, que são tocados com baquetas específicas. Estes dão o ritmo ou o baque da música e são acompanhados pelas caixas ou taróis, ganzás, abês e um gonguê ou agogô.\n[…]\nMaracatu Nação\n[…]\nMaracatu Rural\n[…]\nCongada\n[…]\nCultura de Pernambuco\n[…]\nMaracatu Nação\n[…]\nMaracatu na RDB"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Congada",
        "situacao": "ok",
        "texto": "A congada ou congado é uma manifestação cultural e religiosa afro-brasileira, caracterizada por cortejos, danças, cânticos e encenações que articulam elementos do catolicismo popular com tradições de origem africana. Trata-se de um complexo ritual que, em muitas de suas formas, recria simbolicamente a coroação de um rei do Reino do Congo.\n[…]\nOs registros mais antigos da congada no Brasil remontam ao período colonial. Em 1674, já se realizavam coroações de reis do Congo na Igreja do Rosário dos Pretos do Recife, vinculadas às irmandades negras.\n[…]\nA congada configura-se como um folguedo dramático que articula música, dança e encenação em uma estrutura performática complexa, na qual diferentes planos simbólicos se sobrepõem. Seus enredos frequentemente mobilizam a coroação de reis negros, associada à memória de estruturas políticas africanas, bem como narrativas devocionais vinculadas a São Benedito e Nossa Senhora do Rosário, integrando elementos do catolicismo popular a matrizes culturais de origem africana.\n[…]\nHistoricamente, essa articulação remonta às irmandades de Nossa Senhora do Rosário formadas no período colonial, nas quais populações africanas e afrodescendentes encontraram espaços de organização social e expressão religiosa. Nessas associações, a coroação de reis do Congo assumiu papel central, configurando o que a historiografia denomina Reinado do Rosário.\n[…]\nA congada desenvolveu-se em estreita relação com o cristianismo colonial. As coroações de reis do Congo, frequentemente realizadas em igrejas, articulavam conversão religiosa e organização comunitária.\n[…]\nCongado\n[…]\nReis, João José (1991). A morte é uma festa. São Paulo: Companhia das Letras\n[…]\nSouza, Marina de Mello e (2002). Reis negros no Brasil escravista. Belo Horizonte: UFMG"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Pedro Malasartes",
      "descricao": "Personagem malandro e espertalhão dos contos populares de origem portuguesa, muito difundido no Brasil."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que comediante, famoso por seus caipiras no cinema, viveu o espertalhão Pedro Malasartes num filme de 1960?",
    "resposta": "Mazzaropi",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Pedro_Malasartes",
      "https://pt.wikipedia.org/wiki/As_Aventuras_de_Pedro_Malasartes"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Pedro_Malasartes",
        "situacao": "ok",
        "texto": "Pedro Malasartes, Malazartes, das Malasartes ou ainda Malasarte e Malazarte é um personagem tradicional da cultura portuguesa e da cultura brasileira.\n[…]\nO personagem também está presente na literatura de cordel, como em Encontro de Cancão de Fogo com Pedro Malasartes, de Minelvino Francisco Silva (1957)\n[…]\nO personagem chegou ao cinema em As Aventuras de Pedro Malasartes, de 1960, com Mazzaropi no papel principal.\n[…]\nO comediante brasileiro Renato Aragão honrou a influência do personagem em seu trabalho encenando Didi Malasartes no programa Renato Aragão Especial em 1998.\n[…]\nA dupla caipira Zé Tapera & Teodoro criou uma canção chamada Pedro Malazarte.\n[…]\nPedro Malasartes também foi personagem da série infantojuvenil O Sítio do Pica-Pau Amarelo, interpretado pelo comediante Canarinho.\n[…]\nA Cia. Circunstância, grupo de circo-teatro de Belo Horizonte, lançou em 2013 o espetáculo \"De Mala às Artes — Um espetáculo sobre Pedro Malasartes\", onde interpretam algumas histórias de Pedro Malasartes, com direção de Rodrigo Robleño. Neste mesmo ano, este projeto foi contemplado com o Prêmio Funarte Myriam Muniz, onde puderam excursionar pelo norte do Brasil.\n[…]\nEm 2012, o cordelista Marco Haurélio publicou uma nova versão do conto de fadas A Roupa Nova do Rei de Hans Christian Andersen com Pedro Malasartes e outro personagem recorrente na literatura de cordel, João Grilo, atuando como alfaiates. O cordel teve desenhos do ilustrador e cordelista Klévisson Viana e foi publicado pela editora Tupynanquim de Viana.\n[…]\nEm 2017, é lançado o filme Malasartes e o Duelo com a Morte, de Paulo Morelli, estrelado por Jesuíta Barbosa."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/As_Aventuras_de_Pedro_Malasartes",
        "situacao": "ok",
        "texto": "As Aventuras de Pedro Malasartes (ou \"Malazartes\", na ortografia da época) é um filme brasileiro de 1960, do gênero comédia, produzido e estrelado por  Mazzaropi. Conta com números musicais de Lana Bitencourt, Conjunto Farroupilha e de Mazzaropi.\n[…]\nPedro Malasartes, um conhecido personagem da cultura oral popular, é enganado por seus dois irmãos, que lhe roubam o dinheiro, o gado e a fazenda do pai recém-falecido. Agora, apenas com um velho tacho, um ganso e uma trouxa de poucas roupas na mão, Pedro abandona a fazenda e a noiva Maria, decidido a vagar para longe em busca de uma vida melhor.\n[…]\nAos poucos, a lista de pessoas enganadas aumenta e Pedro se vê metido numa série de confusões, tentando fugir de seus vários perseguidores, que após o encontrarem, levam-no aos tribunais.\n[…]\nAmácio Mazzaropi - Pedro Malasartes\n[…]\nNena Viana - Marcolina (mulher da carroça enganada por Pedro, com a história  do raro passarinho \"Furta-cor\")\n[…]\nNoêmia Marcondes - Senhora que ajuda Pedro com o leite para criança\n[…]\nMachadinho - juiz do julgamento de Pedro (creditado como Augusto Machado de Campos)\n[…]\nOswaldo de Barros - promotor no Julgamento de Pedro\n[…]\nKléber Afonso - advogado de Pedro\n[…]\nHamilton Saraiva - Irmão de Pedro\n[…]\n\"Coração Amigo\" e \"Meu Defeito\" -  Mazzaropi (de Elpídio dos Santos e Zé do Rancho)\n[…]\n(em inglês) As Aventuras de Pedro Malazartes no IMDb\n[…]\n(em português) As Aventuras de Pedro Malazartes no Museu Mazzaropi"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Fogueira de São João",
      "descricao": "Fogueira acesa nas festas juninas em homenagem a São João Batista."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Segundo a tradição católica, as fogueiras juninas lembram o sinal que Isabel acendeu para avisar qual parente do nascimento de João?",
    "resposta": "Maria, mãe de Jesus",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Festa_junina"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Festa_junina",
        "situacao": "ok",
        "texto": "Festas juninas, festas dos santos populares ou celebração do meio do verão são uma celebração da estação do verão do hemisfério norte, geralmente realizada em uma data próxima ao solstício de verão. Tem raízes pagãs pré-cristãs na Europa.\n[…]\nO Dia de São João, dia da festa de São João Batista, foi instituído pela Igreja Cristã indivisa no século IV d.C., em homenagem ao nascimento de São João Batista, que o Evangelho de Lucas registra como sendo seis meses antes de Jesus. Como as Igrejas Cristãs Ocidentais marcam o nascimento de Jesus em 25 de dezembro, Natal, a Festa de São João (Dia de São João) foi instituída no meio do verão, exatamente seis meses antes da festa anterior.\n[…]\nA Fête de la Saint-Jean (Festa de São João), tal como no Brasil e em Portugal, é comemorada em 24 de junho e tem, como maior característica, a fogueira. Em certos municípios franceses, uma alta fogueira é erigida pelos habitantes homenageando São João Batista. Trata-se de uma festa católica, embora ainda sejam mantidas certas tradições pagãs que a originaram. Na região de Vosges, a fogueira é chamada chavande.[carece de fontes]?\n[…]\nFestas de São João são ainda celebradas em alguns países europeus católicos, protestantes e ortodoxos (França, Irlanda, os países nórdicos e do Leste europeu). As fogueiras de São João e a celebração de casamentos reais ou encenados (como o casamento fictício no baile da quadrilha nordestina e na tradição portuguesa) são costumes ainda hoje praticados em festas de São João europeias. É ainda costume a realização de fogueiras onde o combustível é o rosmaninho.[carece de fontes]?\n[…]\nVéspera de São João\n[…]\nFlor-de-são-joão\n[…]\nMedia relacionados com Festa junina no Wikimedia Commons"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Fita do Senhor do Bonfim",
      "descricao": "Fitinha colorida de lembrança da Igreja do Senhor do Bonfim, em Salvador, amarrada no pulso com nós de pedidos."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Segundo a crença, o pedido feito ao amarrar a fitinha do Senhor do Bonfim no pulso se realiza quando acontece o quê?",
    "resposta": "Ela arrebenta sozinha",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Fita_do_Senhor_do_Bonfim"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Fita_do_Senhor_do_Bonfim",
        "situacao": "ok",
        "texto": "A Fita do Senhor do Bonfim, Fita do Bonfim ou fitinha do Bonfim é um souvenir e amuleto típico de Salvador, capital do estado brasileiro da Bahia.\n[…]\nNão se sabe quando a transição para a atual fita, de pulso, ocorreu, sendo fato que em meados da década de 1960 a nova fita já era comercializada nas ruas de Salvador, quando foi adotada pelos hippies baianos como parte de sua indumentária. A fita vendida por ambulantes em volta da Igreja do Senhor do Bonfim e amarradas sob o gradil do local, em Salvador, precipuamente é uma lembrança e atestado da visita que o devoto ou turista tenha realizado àquele templo católico.\n[…]\nAlguns atribuem a criação da fita a Manuel Antônio da Silva Serva.\n[…]\nConfeccionada atualmente em tecido de algodão e vendida em diversas cores com a frase característica \"Lembrança do Senhor do Bonfim da Bahia\", a Fita do Senhor do Bonfim possui um lado que poucos conhecem: cada cor simboliza um Orixá, apesar da tradição católica devido a sua origem e seu nome. Verde escuro para Oxóssi, azul claro para Iemanjá, amarelo para Oxum.\n[…]\nSeja qual for a cor, a fita possui uma representação simbólica, estética e espiritual típicas das raízes africanas e sincretismo da Bahia.\n[…]\nNa tradição popular, supersticiosa e folclórica, a fita do Senhor do Bonfim é enrolada duas vezes no pulso ou no tornozelo, e amarrada com três nós. A cada nó precede um pedido, realizado mentalmente, e que deve ser mantido em segredo até a fita se romper por desgaste natural. Significa que os desejos ou pedidos foram atendidos."
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Frevo",
      "descricao": "Ritmo e dança do carnaval de Pernambuco, com passos acrobáticos e sombrinhas coloridas."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "A sombrinha colorida do frevo descende dos guarda-chuvas que os capoeiristas levavam no carnaval do Recife. Para que eles serviam?",
    "resposta": "Como arma de defesa",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Frevo"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Frevo",
        "situacao": "ok",
        "texto": "O frevo é um ritmo musical e uma dança brasileira com origem no estado de Pernambuco. Sua música baseia-se na fusão de gêneros como marcha, maxixe, dobrado e polca, e sua dança foi influenciada pela capoeira.\n[…]\nDa junção da capoeira com o ritmo do frevo nasceu o passo. A dança do frevo foi utilizada inicialmente como arma de defesa dos passistas que remete diretamente a luta, resistência e camuflagem, herdada da capoeira e dos capoeiristas, que faziam uso de porretes ou cabos de velhos guarda-chuvas como arma contra grupos rivais.\n[…]\nO Galo da Madrugada é um bloco carnavalesco que preserva as tradições locais. Eles tocam ritmos pernambucanos e desfilam sem cordões de isolamento. O desfile do galo da madrugada é um dos momentos para se ouvir e se dançar frevo no carnaval. É considerado desde 1994 o maior bloco de carnaval do mundo pelo Guinness Book.\n[…]\nO frevo canção em muito se aproxima do frevo de rua. A principal e óbvia diferença é a presença do canto. O subgênero está presente no carnaval pernambucano desde os primórdios do frevo. Segundo Leonardo Saldanha, “Banha de cheirosa”, sem autor identificado, é considerado o primeiro frevo-canção. À época, a música era entoada pelos capoeiras e simpatizante do “Quarto”. A letra é apresentada abaixo.Quem quiser comprar banha cheirosa\n[…]\nA presença do clube carnavalesco pernambucano Vassourinhas no carnaval de Salvador, em 1951, insipirou os baianos Dodô e Osmar a tocarem o frevo num instrumento por eles inventado, o pau elétrico - que viria a ser conhecido como guitarra baiana, (nome esse dado por Armandinho Macêdo, que introduziu uma 5ª corda- Dó). -, em cima de um Ford 1929 (a famosa Fobica), dando origem ao trio elétrico.\n[…]\nCarnaval Recife–Olinda"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Iara",
      "descricao": "Sereia do folclore brasileiro que vive nos rios e encanta pescadores com seu canto."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Numa das versões da lenda, Iara era uma guerreira indígena atirada ao rio pelo próprio pai. Que crime ela tinha cometido?",
    "resposta": "Matou os próprios irmãos",
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
    "indice": 44,
    "ancora": {
      "nome": "Bonecas do Vale do Jequitinhonha",
      "descricao": "Bonecas de cerâmica feitas por artesãs do Vale do Jequitinhonha, retratando mulheres sertanejas."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "As famosas bonecas de cerâmica do Vale do Jequitinhonha, com rostos de mulheres sertanejas, são feitas em qual estado?",
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
    "indice": 45,
    "ancora": {
      "nome": "Capim-dourado",
      "descricao": "Planta do cerrado de hastes douradas, usada num artesanato tradicional de bolsas, chapéus e bijuterias."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "O artesanato de capim dourado, que brilha como ouro em bolsas e chapéus, é típico de qual região do Tocantins?",
    "resposta": "Jalapão",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Capim-dourado",
      "https://pt.wikipedia.org/wiki/Jalapão"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Capim-dourado",
        "situacao": "inexistente",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jalapão",
        "situacao": "ok",
        "texto": "O parque estadual do Jalapão é uma unidade de conservação brasileira de proteção integral à natureza localizada na região leste do estado do Tocantins. O território do parque, com uma área de 158 970,95 ha, está distribuído pelos municípios de Mateiros e\n[…]\nSão Félix do Tocantins. Criado em 12 de janeiro de 2001, Jalapão é o maior parque estadual do Tocantins. A vegetação no parque é predominantemente a de cerrado ralo e a de campo limpo com veredas.\n[…]\nSua posição estratégica possui continuidade com a área de proteção ambiental do Jalapão, a estação ecológica Serra Geral do Tocantins e o parque nacional das Nascentes do Rio Parnaíba.\n[…]\nO Jalapão é uma região árida pontilhada de oásis. Está situada a leste do estado do Tocantins. Possui temperatura média de 30 graus Celsius. Sua área total é de 34 mil quilômetros quadrados. É cortado por imensa teia de rios, riachos e ribeirões, todos de água límpida e transparente.\n[…]\nO Jalapão abrange os municípios de Ponte Alta do Tocantins, Mateiros, São Félix do Tocantins, Lizarda, Rio Sono, Novo Acordo, Santa Tereza do Tocantins, Lagoa do Tocantins e Rio da Conceição, ocupando uma área equivalente ao estado de Sergipe. Passou à condição de parque estadual em 2001.\n[…]\nÉ possível passar dias no Jalapão sem ver uma única pessoa. A densidade populacional é de 0,8 habitante por quilômetro quadrado.\n[…]\nSão nascentes de rios subterrâneos que não encontram local de vazão e brotam em poços. Os fervedouros são as maiores atrações do Jalapão já que que por causa da pressão da água, os banhistas não afundam. Há algumas regras para as visitações, como o número limitado de visitantes por vez, para evitar a degradação do ambiente.\n[…]\nCapim dourado\n[…]\nMedia relacionados com Parque Estadual do Jalapão no Wikimedia Commons"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Panelas de barro de Goiabeiras",
      "descricao": "Panelas de barro pretas feitas artesanalmente pelas paneleiras do bairro de Goiabeiras, registradas como patrimônio imaterial."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "As panelas de barro pretas feitas pelas paneleiras de Goiabeiras, patrimônio cultural do Brasil, são produzidas em qual capital?",
    "resposta": "Vitória",
    "distratores": [
      "Salvador",
      "Belém",
      "São Luís"
    ],
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
        "texto": "A moqueca, muqueca ou poqueca (do quimbundo mu'keka: 'caldeirada de peixe' ou do tupi opokeka: 'fazer embrulho') é um cozido, geralmente de peixe, típico da culinária brasileira.\n[…]\nA moldura perfeita fica por conta da panela de barro, feita pelas paneleiras do bairro de Goiabeiras Velha, em Vitória. Essas artesãs moldam, queimam e tingem as panelas com cascas tiradas do manguezal. O costume de preparar e servir moqueca em panela de barro está presente em todo o Brasil.\n[…]\nEsse saber foi apropriado dos índios pelos afrodescendentes que vieram a ocupar a margem do manguezal, local historicamente identificado com a produção de panelas de barro. O naturalista Auguste de Saint-Hilaire visitou a região em 1815 e fez a primeira referência a essas panelas, descritas como \"caldeira de terracota, de orla muito baixa e fundo muito raso\", utilizadas para torrar farinha e fabricadas \"num lugar chamado Goiabeiras, próximo da capital do Espírito Santo\".\n[…]\nAs moquecas e a torta capixaba (outra iguaria local característica da Semana Santa) são parte da identidade cultural do povo do Espírito Santo, e isso certamente explica a continuidade histórica da fabricação artesanal das panelas de barro. A cidade  de Vitória cresceu e alcançou Goiabeiras, que se transformou em um bairro da capital. Mas ali continuam sendo feitas, como sempre, as panelas pretas.\n[…]\nEnquanto a cidade crescia, as paneleiras foram progressivamente se profissionalizando e fazendo de seu ofício a mais visível atividade cultural e econômica do lugar.\n[…]\nProjeto institui a Moqueca Capixaba Patrimônio Cultural Imaterial do ES"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Festa do Divino",
      "descricao": "Festa católica popular em honra do Espírito Santo, trazida de Portugal, com coroação de imperador e folias."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "A Festa do Divino celebra o Espírito Santo na época de qual data cristã, cinquenta dias depois da Páscoa?",
    "resposta": "Pentecostes",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Festa_do_Divino",
      "https://pt.wikipedia.org/wiki/Pentecostes"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Festa_do_Divino",
        "situacao": "ok",
        "texto": "Festa do Divino Espírito Santo é um culto ao Espírito Santo, em suas diversas manifestações, é uma das mais antigas e difundidas práticas do catolicismo popular.\n[…]\nEssas celebrações aconteciam cinquenta dias após a Páscoa, comemorando o dia de Pentecostes, quando o Espírito Santo desceu do céu sobre a Virgem Maria e os apóstolos de Cristo sob a forma de línguas como de fogo, segundo conta o Novo Testamento.\n[…]\n19 de maio - Festa do Divino Espírito Santo\n[…]\nNovena (período de 9 dias antecedem a pentecostes): É a preparação religiosa para a Festa do Divino, e ocorre todo ano no período de Pentecostes (50 dias após à Páscoa). onde, equipes das Paróquias de Santo Antônio de Jacobina e de São José Operário, jurisdicionadas à Diocese de Bonfim visitam capelas e casas nas comunidades, tanto na zona rural quanto urbana. Nessas visitas, são cantadas músicas que falam sobre os feitos do Divino Espírito Santo e recolhidas doações para a festa.\n[…]\nMissa Solene (Domingo de Pentecostes): É a celebração final do Domingo de Pentecostes, realizada na Igreja Matriz depois do Cortejo Imperial. Marca o encerramento oficial da festa e reúne a comunidade para agradecer e celebrar a presença do Divino Espírito Santo.\n[…]\nAs celebrações ocorrem durante as festividades de Pentecostes, 50 dias após a Páscoa, e em Pirenópolis reúne diversas manifestações, como congadas, reinados, juizados, folias, queima de fogos, pastorinhas, missas, novena do Divino (entoada em latim pela Orquestra e Coral Nossa Senhora do Rosário), Levantamento do mastro de 30 metros de altura, Mascarados e as tradicionais Cavalhadas de Pirenópolis."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pentecostes",
        "situacao": "ok",
        "texto": "Pentecostes, também conhecido como Domingo de Pentecostes ou Dia de Pentecostes, é um feriado cristão que ocorre no 49º dia (50º dia quando a contagem inclusiva é usada) após a Páscoa. Comemora a descida do Espírito Santo sobre os apóstolos de Jesus enquanto eles estavam em Jerusalém celebrando a Festa das Semanas, conforme descrito nos Atos dos Apóstolos (Atos 2:1-31).\n[…]\nPentecostes é uma das grandes festas da Igreja Ortodoxa Oriental, uma solenidade no Rito Romano da Igreja Católica, um festival nas Igrejas Luteranas e uma festa principal na Comunhão Anglicana. Muitas denominações cristãs oferecem uma liturgia especial para esta celebração sagrada. Como sua data depende da data da Páscoa, Pentecostes é uma \"festa móvel\". A segunda-feira após Pentecostes é um feriado legal em muitos países europeus, africanos e caribenhos.\n[…]\nFesta de Pentecostes. As razões deste novo nome são várias: nos séculos III-I a.C., os gregos assumiram o controle do mundo, impondo sua língua, que se tornou muito popular entre os judeus. Os nomes hebraicos (hag haqasir e hag xabu'ot) perderam as suas atualidades, e foram substituídos pela denominação Pentecostes, cujo significado é «cinquenta dias depois (da Páscoa)».\n[…]\nComo o Império Grego passou a ter hegemonia em 331 a.C., é provável que o nome Pentecostes tenha ganhado popularidade a partir desse período.\n[…]\nPentecostes é o símbolo do Cenáculo, onde os apóstolos se reuniram, pela primeira vez, à espera do Espírito Santo. O Cenáculo, a partir deste momento, passa a ser considerado um símbolo de sacralidade na ótica cristã, pois até então era considerado pelos judeus como apenas um lugar de reuniões. Atualmente o 50 º dia após a Páscoa é considerado pelos cristãos como o dia de Pentecostes, e também foi o dia da descida do Espírito Santo (Espírito de Deus) sobre os apóstolos.\n[…]\nEspírito Santo\n[…]\nDons do Espírito Santo\n[…]\nPentecostalismo"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Bumba meu boi",
      "descricao": "Folguedo popular brasileiro, muito forte no Maranhão, que encena a morte e a ressurreição de um boi."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "No Maranhão, os grupos de bumba meu boi saem às ruas principalmente durante qual ciclo de festas do ano?",
    "resposta": "As festas juninas",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Bumba_meu_boi"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Bumba_meu_boi",
        "situacao": "ok",
        "texto": "Bumba meu boi, boi-bumbá ou búfalo-bumbá é uma festa do folclore popular brasileiro, com personagens humanos e animais fantásticos, que gira em torno de uma lenda sobre a morte e ressurreição de um boi.\n[…]\nA festa tem ligações com diversas tradições, africanas, indígenas e europeias, inclusive com festas religiosas católicas, sendo associada fortemente ao período de festas juninas.\n[…]\nO Bumba Meu Boi tem sua gênese no Piauí e Maranhão, desenvolvendo-se durante o ciclo do gado no Brasil, ao incorporar elementos dos folguedos portugueses, culturas africana e indígena. O Ciclo do Gado, iniciado na Bahia, expandiu-se no século XVII por duas rotas principais ao longo do rio São Francisco: uma seguia o curso do rio em comboios e a outra o atravessava em direção ao Norte, até chegar ao Piauí, apontado por Câmara Cascudo como “o grande produtor de gadaria”.\n[…]\nA mais antiga menção conhecida ao bumba-meu-boi, com o uso explícito desse termo, encontra-se no jornal Sentinela da Liberdade, em Salvador, Bahia, durante o Carnaval da cidade, no ano de 1831, em um depoimento de Cipriano Barata. No mesmo texto, o autor também faz referência aos reisados do boi, associados às festas de Natal e Ano-Novo daquele período.\n[…]\nBúfalo-Bumbá de Mestre Damasceno\n[…]\nBumba meu boi do Maranhão\n[…]\nCiclo do gado\n[…]\nCARVALHO, Maria Michol Pinho de. 1995. Matracas que desafiam o tempo: é o bumba-boi do Maranhão. São Luís: s/e.\n[…]\nPRADO, Regina de Paula Santos. 1977. Todo ano tem: as festas na estrutura social camponesa. Dissertação de Mestrado em Antropologia. Rio de Janeiro: PPGAS-MN/UFRJ.\n[…]\n«Ritmos do Maranhão» [ligação inativa]"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Viola caipira",
      "descricao": "Instrumento de cordas símbolo da música sertaneja de raiz."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "A viola caipira, símbolo da música sertaneja de raiz, tem as cordas agrupadas em pares. Quantas cordas ela tem ao todo?",
    "resposta": "Dez",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Viola_caipira"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Viola_caipira",
        "situacao": "ok",
        "texto": "A viola caipira  é um instrumento musical de cordas dedilhadas e uma das variantes regionais da viola brasileira. É também conhecido como viola sertaneja ou viola cabocla mas, a depender da cultura local, ainda pode ter  várias outras denominações: viola de pinho, viola caipira, viola sertaneja, viola de arame, viola nordestina, viola cabocla, viola cantadeira, viola de dez cordas, viola chorosa, \n[…]\nÉ um instrumento muito popular, sobretudo  no interior do Brasil, sendo um dos símbolos da música popular brasileira e especialmente da música caipira.\n[…]\nA viola caipira tem características muito semelhantes ao violão. Tanto no formato quanto na disposição das cordas e acústica, porém é um pouco menor.\n[…]\nA disposição das cordas da viola varia razoavelmente, embora sempre haja cinco ordens, estes geralmente consistindo em dez cordas dispostas em cinco pares. De forma geral, os dois pares mais agudos são afinados em uníssono, enquanto os demais pares são afinados na mesma nota, mas com diferença de alturas de uma oitava. De qualquer forma, cada ordem é sempre tocada com todas as cordas simultâneas, como se fosse uma única corda.\n[…]\nA viola é o símbolo da música caipira, conhecida popularmente como moda de viola.\n[…]\nHá diversas lendas e histórias a respeito das afinações da viola. O nome da afinação Cebolão seria do fato de as mulheres chorarem, emocionadas ao ouvir a música, como quem corta cebola.\n[…]\nAraújo, Rui Torneze de (1998). Viola Caipira. Estudo Dirigido. São Paulo: Irmãos Vitale S/A. 64 páginas. CDD 787.3\n[…]\nMoura, Reis (2000). Descomplicando a Viola. Método Básico de Viola Caipira. 1. Brasília: Edição do autor. 62 páginas. ISBN 85-901637-1-7\n[…]\nQueiroz, Enúbio Divino de (2000). Repertório de Ouro para Viola Caipira. São José do Rio Preto: Ricordi. 76 páginas\n[…]\nViola, Braz da (1992). A Viola Caipira. São Paulo: Ricordi. 47 páginas\n[…]\n«Viola caipira no Centro Nacional de Folclore e Cultura Popular»"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Tambor de crioula",
      "descricao": "Dança afro-brasileira de roda, com tambores e a umbigada chamada punga, registrada como patrimônio cultural do Brasil."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Na roda do tambor de crioula maranhense, quantos tambores formam a parelha que acompanha a dança?",
    "resposta": "Três",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Tambor_de_crioula"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Tambor_de_crioula",
        "situacao": "ok",
        "texto": "Tambor de crioula ou punga é uma dança de origem africana praticada por descendentes de escravos africanos no estado brasileiro do Maranhão, em louvor a São Benedito, um dos santos mais populares entre os negros. É uma dança alegre, marcada por muito movimento dos brincantes e muita descontração.\n[…]\nO processo de registro do Tambor de Crioula como Patrimônio Cultural Imaterial do Brasil pelo IPHAN foi resultado de uma pesquisa abrangente que durou dois anos, estruturada em três fases sucessivas.\n[…]\nTambores: grande, meião e crivador. Juntos, formam a parelha.\n[…]\nToda a marcação dos passos da dança é feita por um conjunto de tambores que os brincantes chamam de parelha. São três tambores nos tamanhos pequeno, médio e grande, feitos de troncos de mangue, pau d'arco, soró ou angelim. Um par de matracas batidas no corpo do tambor grande auxilia na marcação. O tambor pequeno é conhecido como crivador ou pererengue; o médio é chamado de meião, meio ou chamador e o grande recebe, entre os tocadores, os nomes de roncador ou rufador.\n[…]\nHá divergência de pontos de vista conceituais sobre a dimensão religiosa e o caráter ritualístico do Tambor de Crioula na bibliografia. Domingos Vieira Filho afirma que o Tambor de Crioula é uma \"simples dança para se divertir, sem a menor pertinência ou ligação com a religiosidade do negro maranhense e seus descendentes\". Para ele, o conceito de ritual está estritamente ligado a propriedades mágico-religiosas, e, como a dança não teria traços religiosos, não seria ritualística.\n[…]\nO local conta um espaço multiuso destinado à exposição permanente, com artefatos, painéis e informação sobre o Tambor de Crioula. Na área de vivência, ocorrem as apresentações dos grupos. Há salas de dança, oficinas, estúdio de gravação e auditório.\n[…]\nTambor de Crioula"
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
