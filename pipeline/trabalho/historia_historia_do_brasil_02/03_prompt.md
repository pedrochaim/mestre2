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
      "nome": "Quilombo dos Palmares",
      "descricao": "Maior e mais duradouro quilombo do Brasil colonial, formado no século dezessete na Serra da Barriga, no Nordeste."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "A Serra da Barriga, onde ficava o Quilombo dos Palmares, pertence hoje a qual estado nordestino?",
    "resposta": "Alagoas",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Quilombo_dos_Palmares"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Quilombo_dos_Palmares",
        "situacao": "ok",
        "texto": "Quilombo dos Palmares, também conhecido como Palmares, Mocambo dos Palmares e/ou Angola Janga, foi uma comunidade de pessoas fugitivas da escravidão durante o período do Brasil Colônia. Fundado no final da década de 1590 e localizado na Serra da Barriga, na então capitania de Pernambuco (atual município de União dos Palmares, Alagoas), atingiu seu auge na década de 1690, quando sua população vario\n[…]\nPor outro lado, outros autores apontam a existência de uma escravidão até mesmo predatória por parte dos habitantes do quilombo dos Palmares, que realizavam incursões nos territórios vizinhos, de onde traziam à força indivíduos para trabalharem como escravos em suas plantações, desenvolvendo assim uma espécie de \"escravismo dentro da própria 'república'\". Escravos que se recusavam a fugir das fazendas e ir para os quilombos também eram capturados e convertidos em cativos dos quilombolas.\n[…]\nEle atribui a etimologia da palavra quilombo ao ki-lombo, um campo de circuncisão comum entre os ambundos de Angola que serviu para forjar a unidade cultural entre grupos étnicos locais díspares e argumenta que essa prática pode ter influenciado a diversidade de Palmares. Ele também observa a estratificação de classes dentro do quilombo; aqueles sequestrados em ataques eram frequentemente escravizados pelo povo de Palmares.\n[…]\nO Parque Memorial Quilombo dos Palmares, criado em 2007 na Serra da Barriga (AL) e tombado pelo IPHAN em 1985, recria em tamanho natural o ambiente da histórica República dos Palmares, o maior e mais duradouro quilombo das Américas. O espaço conta com construções típicas como casas de farinha e ervas, ocas indígenas e locais simbólicos que preservam a cultura negra, além de áudio em quatro idiomas narrando a história do quilombo.\n[…]\nQuilombo, de Cacá Diegues, 1983\n[…]\nSite oficial Parque Memorial Quilombo dos Palmares\n[…]\nImagens da Serra da Barriga\n[…]\nParque Memorial Quilombo dos Palmares"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Quilombo dos Palmares",
      "descricao": "Maior e mais duradouro quilombo do Brasil colonial, formado no século dezessete na Serra da Barriga, no Nordeste."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "No fim do século dezessete, qual bandeirante paulista comandou as tropas que destruíram o Quilombo dos Palmares?",
    "resposta": "Domingos Jorge Velho",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Quilombo_dos_Palmares",
      "https://pt.wikipedia.org/wiki/Domingos_Jorge_Velho"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Quilombo_dos_Palmares",
        "situacao": "ok",
        "texto": "Quilombo dos Palmares, também conhecido como Palmares, Mocambo dos Palmares e/ou Angola Janga, foi uma comunidade de pessoas fugitivas da escravidão durante o período do Brasil Colônia. Fundado no final da década de 1590 e localizado na Serra da Barriga, na então capitania de Pernambuco (atual município de União dos Palmares, Alagoas), atingiu seu auge na década de 1690, quando sua população vario\n[…]\nEntre 1680 e 1686, ao menos seis expedições foram enviadas para destruir Palmares, mas todas falharam. Em 1694, no entanto, uma ofensiva liderada pelo governador da capitania de Pernambuco, Pedro de Almeida, e executada por grandes forças militares, incluindo os bandeirantes paulistas liderados por Domingos Jorge Velho, resultou na destruição final da comunidade. Muitos habitantes foram massacrados ou reescravizados, marcando o fim da comunidade independente.\n[…]\nApós várias investidas relativamente infrutíferas contra Palmares, em janeiro de 1694, após um ataque frustrado, as forças do bandeirante Domingos Jorge Velho iniciaram uma empreitada vitoriosa, com um contingente de seis mil homens, bem armados e municiados, inclusive com artilharia.\n[…]\nUm quilombola, Antônio Soares, foi capturado e, mediante a promessa de Domingos Jorge Velho de que seria libertado em troca da revelação do esconderijo do líder, Zumbi foi encurralado e morto em uma emboscada, a 20 de novembro de 1695. A cabeça de Zumbi foi cortada e conduzida para Recife, onde foi exposta em praça pública no Pátio do Carmo, no alto de um mastro, para servir de exemplo a outros escravos.\n[…]\nMas isso não significa que Palmares era uma democracia: o local ainda tinha muitas das características sociais do século\".\n[…]\nQuilombo, de Cacá Diegues, 1983\n[…]\nGuerras do Brasil - As guerras de Palmares, Luiz Bolognesi, 2019\n[…]\nSite oficial Parque Memorial Quilombo dos Palmares\n[…]\nParque Memorial Quilombo dos Palmares"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Domingos_Jorge_Velho",
        "situacao": "ok",
        "texto": "Domingos Jorge Velho (Vila de Parnaíba, 13 de março de 1641 – Piancó, 2 de abril de 1705) foi um bandeirante paulista. Notório caçador de indígenas e de escravizados fugitivos das mãos dos portugueses. Liderou as tropas que destruíram o Quilombo dos Palmares.\n[…]\nDomingos Jorge Velho — que tinha a patente de mestre de campo — e o capitão-mor Bernardo Vieira de Melo foram contratados pelo governador e capitão-general da Capitania de Pernambuco Caetano de Melo e Castro para erradicar o Quilombo dos Palmares. A ação foi iniciada em janeiro de 1694, com as tropas partindo em direção à Serra da Barriga.\n[…]\nEm fevereiro de 1694, após um sítio de 42 dias, Macaco foi tomada e Domingos Jorge Velho reivindicou o botim, tendo vitimado 200 quilombolas e aprisionado 500, a serem vendidos fora da capitania. Duzentos teriam fugido, entre os quais Zumbi, capturado e morto em 20 de novembro de 1695.\n[…]\nTambém foi notável a sua participação em atividades militares durante a “guerra dos bárbaros” desenvolvidas por Domingos Jorge Velho entre 1688 e 1691, no Vale do Açu, na então capitania do Rio Grande, e na região do Seridó (que abrange espaços geográficos dos atuais estados do Rio Grande do Norte e Paraíba), onde comandou o genocídio de tribos indígens na região nesse período, como no massacre aos índios Janduís ocorrido na atual Serra da Rajada (então chamada de Serra do Acauã) entre os dias 26 e 30 de agosto de 1689, onde extravasou todo seu caráter violento, matando 1.500 deles e aprisionando 300 tapuias, sofrendo apenas 30 baixas.\n[…]\nPor seus feitos, Domingos Jorge Velho foi honrado como Mestre de Campo. Ele faleceu em 1705, aos 64 anos, no Arraial de Piancó, na então capitania de Paraíba.\n[…]\n«Domingos Dias Velho, Inventário e Testamento.»"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Monte Pascoal",
      "descricao": "Monte no litoral sul da Bahia, primeira terra avistada pela frota de Pedro Álvares Cabral em 1500."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "O Monte Pascoal, primeira terra avistada pela frota de Cabral em 1500, está no litoral de qual estado?",
    "resposta": "Bahia",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Monte_Pascoal"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Monte_Pascoal",
        "situacao": "ok",
        "texto": "O Monte Pascoal é uma elevação de 586 metros situada no extremo sul da Bahia, reconhecida pela historiografia como um dos principais marcos associados à chegada da armada de Pedro Álvares Cabral ao litoral brasileiro em 22 de abril de 1500, segundo o calendário juliano.\n[…]\nA identificação do monte como a primeira terra oficialmente avistada pelos portugueses baseia-se em interpretações da Carta de Pero Vaz de Caminha e na tradição historiográfica consolidada desde o período colonial.\n[…]\nDe acordo com a carta de Pero Vaz de Caminha, Pedro Álvares Cabral, o capitão da esquadra, nomeou a montanha avistada como \"Monte Pascoal\" como consequência da proximidade da data do avistamento a data da Páscoa daquele ano.\n[…]\nNeste mesmo dia, a horas de véspera, houvemos vista de terra! A saber, primeiramente de um grande monte, muito alto e redondo; e de outras serras mais baixas ao sul dele; e de terra chã, com grandes arvoredos; ao qual monte alto o capitão pôs o nome de O Monte Pascoal (monte da Páscoa) e à terra A Terra de Vera Cruz!\n[…]\nO Monte Pascoal destaca-se como elevação isolada no litoral sul baiano, com ampla visibilidade a partir do mar e recobrimento de floresta ombrófila densa. A formação situa-se a cerca de 62 km de Porto Seguro, compondo a transição entre ambientes costeiros, tabuleiros arenosos, restingas e remanescentes da Mata Atlântica.\n[…]\nNa cartografia e iconografia colonial, o Monte Pascoal aparece com frequência como símbolo do início da presença portuguesa no território brasileiro.\n[…]\nO Parque Nacional e Histórico do Monte Pascoal foi criado pelo Decreto nº 242, de 29 de novembro de 1961, abrangendo cerca de 22 500 hectares.\n[…]\nParque Nacional e Histórico do Monte Pascoal\n[…]\nMatéria da WWF sobre o Parque Nacional do Monte Pascoal"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Abertura dos portos às nações amigas",
      "descricao": "Carta régia de 1808 do príncipe regente Dom João que abriu os portos do Brasil ao comércio com nações amigas de Portugal."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Antes de chegar ao Rio, Dom João assinou em 1808 a abertura dos portos às nações amigas. Em que cidade ele estava?",
    "resposta": "Salvador",
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
    "indice": 5,
    "ancora": {
      "nome": "Batalha do Jenipapo",
      "descricao": "Batalha de março de 1823, na Guerra de Independência do Brasil, travada às margens do riacho Jenipapo, em Campo Maior."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Em 1823, na guerra pela Independência, a Batalha do Jenipapo opôs brasileiros a tropas portuguesas em qual atual estado?",
    "resposta": "Piauí",
    "distratores": [
      "Maranhão",
      "Ceará",
      "Bahia"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Batalha_do_Jenipapo"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Batalha_do_Jenipapo",
        "situacao": "ok",
        "texto": "A Batalha do Jenipapo, um dos confrontos mais sangrentos da Guerra da Independência do Brasil, foi um embate ocorrido no dia 13 de março de 1823 às margens do rio de mesmo nome na vila de Campo Maior, Piauí. Consistiu na luta de piauienses, maranhenses e cearenses contra as tropas do Major português João José da Cunha Fidié, que era o comandante das tropas portuguesas, encarregadas de manter o nor\n[…]\nOs portugueses, em sua maioria mercenários bem treinados, ganharam a batalha, mas perderam a guerra da independência graças às táticas de guerrilha dos sertanejos: após o combate do Jenipapo, num assalto de surpresa ao acampamento militar, eles se apoderaram dos armamentos e da munição, de dinheiro e bagagem do Major Fidié, e cercaram o caminho para Oeiras, forçando o comandante português a se retirar do Piauí.\n[…]\nQuando Pedro I, às margens do Ipiranga, deu o grito de independência, não houve derramamento de sangue. Foi no Piauí, às margens do Rio Jenipapo, na cidade de Campo Maior, que os portugueses perderam a esperança de ter uma colônia na América, sendo afastados definitivamente das terras brasileiras. A Batalha do Jenipapo, luta e glória do povo piauiense, assegurou a unidade territorial do Brasil.[carece de fontes]?\n[…]\nAo contrário do que se imagina, a independência do Brasil não se limitou ao grito de Dom Pedro I no riacho do Ipiranga e nem se deu de forma pacífica como relata a história oficial. Ela foi um processo que demorou quase dois anos, marcado por lutas violentas e sangrentas, como a da Batalha do Jenipapo ocorrida no Piauí em 13 de março de 1823. Além de consolidar a independência na região, o embate pôs fim aos planos portugueses de manterem uma colônia no norte do Brasil\n[…]\nA bandeira constituía-se das mesmas cores da bandeira brasileira e a estrela corresponde ao Piauí como um estado da Nação.[carece de fontes]?\n[…]\nLista do patrimônio histórico no Piauí"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Guerra do Contestado",
      "descricao": "Conflito armado entre 1912 e 1916 entre camponeses e as forças do governo numa região disputada no Sul do Brasil."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "A Guerra do Contestado, entre 1912 e 1916, foi travada numa região disputada por quais dois estados do Sul?",
    "resposta": "Paraná e Santa Catarina",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Guerra_do_Contestado"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Guerra_do_Contestado",
        "situacao": "ok",
        "texto": "A Guerra do Contestado foi um conflito armado ocorrido de outubro de 1912 a agosto de 1916, que teve como partes beligerantes posseiros e pequenos proprietários de terras contra os governos dos estados de Santa Catarina e Paraná, além do Governo Federal brasileiro. O palco foi uma região rica em  erva-mate e madeira, disputada por ambos os estados e que ficou conhecida como \"Contestado\".\n[…]\nUma faixa de terras com aproximadamente trinta quilômetros de largura, que atravessava os estados do Paraná e de Santa Catarina, foi desapropriada para a construção da Estrada de Ferro que ligaria São Paulo ao Rio Grande do Sul, o que provocou a expulsão dos posseiros da região e a falência de vários pequenos fazendeiros que viviam da extração da madeira.\n[…]\nAção judicial de Santa Catarina contra o Paraná em 1900, por limites;\n[…]\nA guerra do Contestado inicia-se neste ponto: em defesa de suas terras, várias tropas do Regimento de Segurança do Paraná são enviadas para o local, a fim de obrigar os invasores a voltar para Santa Catarina.\n[…]\nEm 8 de fevereiro de 1914, numa ação conjunta de Santa Catarina, Paraná e governo federal, foi enviado a Taquaruçu um efetivo de 700 soldados, equipados por artilharia e metralhadoras. Estes logram êxito na empreitada, incendeiam completamente o acampamento dos jagunços, mas sem muitas perdas humanas, já que os caboclos e fiéis da causa do Contestado se refugiaram em Caraguatá, local de difícil acesso e onde já viviam cerca de 20 mil pessoas.\n[…]\nMunicípios de Santa Catarina, na época: Lages, Curitibanos, Campos Novos, Canoinhas e Porto União;\n[…]\n20 de outubro de 1916: Assinatura do Acordo de Limites Paraná-Santa Catarina, no Rio de Janeiro;\n[…]\nCombatentes militares no auge da guerra: 8 mil homens, sendo 7 mil soldados do Exército Brasileiro, do Regimento de Segurança do Paraná, do Regimento de Segurança de Santa Catarina, mais mil civis contratados;"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Revolta da Chibata",
      "descricao": "Rebelião de marinheiros da Marinha do Brasil no Rio de Janeiro, em novembro de 1910, contra os castigos físicos."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em 1910, o marinheiro João Cândido comandou a revolta contra os castigos físicos a bordo de qual encouraçado?",
    "resposta": "Minas Geraes",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Revolta_da_Chibata",
      "https://en.wikipedia.org/wiki/Revolt_of_the_Lash"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Revolta_da_Chibata",
        "situacao": "ok",
        "texto": "A Revolta da Chibata, inicialmente chamada de Revolta dos Dreadnoughts, foi uma rebelião militar ocorrida no Rio de Janeiro, Brasil, acontecida no final de novembro de 1910. Foi liderada por marinheiros e suboficiais da Marinha do Brasil que se rebelaram contra as condições de vida e de trabalho nas forças armadas, sendo resultado direto do uso de chibatadas por oficiais navais brancos ao punir ma\n[…]\nTripulantes a bordo do: Minas Geraes começaram a planejar uma revolta anos antes de 1910, de acordo com João Cândido, um marinheiro experiente que mais tarde se tornaria o líder da Revolta da Chibata. Os conspiradores foram motivados pelo tratamento dado aos praças na Marinha do Brasil, estendendo-se além da chibata a até mesmo seus alimentos precários, o que levou a surtos não-incomuns de beribéri. Alguns haviam formado um comitê e se reuniam secretamente durante anos no Rio de Janeiro.\n[…]\nDepois que o sol nasceu, os corpos dos marinheiros mortos no navio Minas Geraes foram enviados em uma lancha para a Ilha das Cobras, juntamente com uma carta de João Cândido Felisberto — que estava no comando da armada rebelde — e seus companheiros marinheiros ao presidente brasileiro, Fonseca, que era o sobrinho do primeiro presidente da República e estava no cargo por apenas uma semana.\n[…]\nHistoriadores agora sustentam que provavelmente não houve polinização cruzada entre a Revolta da Revolta e essas revoltas subsequentes. O ex-amotinado Minas Geraes, sob o comando de João Cândido, depois que os oficiais abandonaram o navio, usaram uma arma escondida (como o navio tinha sido desarmado após a Revolta da Chibata) para disparar contra a infantaria da marinha e demonstrar sua lealdade.\n[…]\nMaestri, Mário. Cisnes negros: 1910: a revolta dos marinheiros contra a Chibata. 3 edição revista e ampliada, Passo Fundo: UPF Editora; Porto Alegre, FCM Editora, 2014."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Revolt_of_the_Lash",
        "situacao": "ok",
        "texto": "The Revolt of the Lash (Portuguese: Revolta da Chibata) was a naval mutiny in Rio de Janeiro, Brazil, in late November 1910. It was the direct result of the use of whips (\"lashes\") by white naval officers when punishing Afro-Brazilian and mixed-race enlisted sailors.\n[…]\nThese ships would be named Minas Geraes and São Paulo, and would be accompanied by two smaller cruisers, Bahia and Rio Grande do Sul, and ten destroyers of the Pará class.\n[…]\nCrewmen aboard Minas Geraes began planning for a revolt years before 1910, according to João Cândido, an experienced sailor who would later become the leader of the Revolt of the Lash. The conspirators were motivated by the treatment of enlisted men in the Brazilian Navy, extending beyond the lash to even their substandard food, which led to not-uncommon outbreaks of beriberi. Some had formed a committee and had been meeting secretly for years in Rio de Janeiro.\n[…]\nMarinheiros\n[…]\nThe executive's apprehension was heightened by Barbosa's speech given before the revolt's end, as he also used the occasion to attack the government—what he called the \"brutal militaristic regime.\" Still, the Brazilians ordered Armstrong to cease working towards laying down a third Minas Geraes-class dreadnought, which induced the Argentine government to not pick up their contractual option for a third dreadnought.\n[…]\nHistorians now hold that there was likely no cross-pollination between the Revolt of the Lash and these subsequent revolts. The formerly mutinous Minas Geraes, under the command of João Cândido after the officers abandoned the ship, used a hidden-away gun (as the ship had otherwise been disarmed after the Revolt of the Lash) to fire on the marine infantry and demonstrate their loyalty."
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Suicídio de Getúlio Vargas",
      "descricao": "Morte do presidente Getúlio Vargas, que se matou com um tiro em 24 de agosto de 1954, no Rio de Janeiro."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em agosto de 1954, o presidente Getúlio Vargas se matou com um tiro no peito. Em qual palácio do Rio de Janeiro?",
    "resposta": "Palácio do Catete",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Palácio_do_Catete",
      "https://en.wikipedia.org/wiki/Catete_Palace"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Palácio_do_Catete",
        "situacao": "ok",
        "texto": "O Palácio do Catete é um prédio histórico localizado na cidade do Rio de Janeiro, sendo um exemplar da arquitetura neoclássica brasileira do final do século XIX. O palácio foi palco de diversos episódios importantes da história do Brasil, tal como o suicídio de Getúlio Vargas, e abriga atualmente o Museu da República.\n[…]\nDa inauguração em 1897 até a mudança da capital federal em 1960, dezenove pessoas ocuparam o Palácio do Catete como Presidentes da República: Manuel Vitorino (vice, 1897) Prudente de Moraes (1897-1898; seu mandato começou em 1894), Campos Sales (1898-1902), Rodrigues Alves (1902-1906), Afonso Pena (1906-1909), Nilo Peçanha (vice, 1909-1910), Hermes da Fonseca (1910-1914), Venceslau Braz (1914-1918), Delfim Moreira (vice, 1918-1919), Epitácio Pessoa (1919-1922), Artur Bernardes (1922-1926), Washington Luís (1926-1930), Getúlio Vargas (1930-1945 e 1954), José Linhares (interino, 1945-1946) Eurico Gaspar Dutra (1946-1950), Café Filho (vice, 1954-1955), Carlos Luz (interino, 1955), Nereu Ramos (interino, 1955-1956)  e Juscelino Kubitschek (1956-1961).\n[…]\nOs relevos coloridos nas paredes são inspirados na ornamentação do palácio fortaleza de Alhambra em Sevilha, na Espanha.\n[…]\nFicava neste andar o quarto onde se suicidou Getúlio Vargas, em 24 de agosto de 1954. Logo após a morte do ex-presidente, a mobília foi transferida do Palácio do Catete para uma sala do Museu Histórico Nacional, na qual se buscou recriar o cenário onde ocorreu o episódio. Com a inauguração do Museu da República, o quarto foi novamente montado no Palácio do Catete. Nele são expostos o pijama usado por Getúlio naquela madrugada, bem como o revólver e a bala utilizados na ocasião.\n[…]\nCaracterísticas arquitetônicas e decorativas do Palácio do Catete"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Catete_Palace",
        "situacao": "ok",
        "texto": "The Catete Palace (Portuguese: Palácio do Catete, IPA: [paˈlasju du kaˈtetʃi]) is an urban mansion in the Flamengo neighborhood of Rio de Janeiro, Brazil. The property stretches from Rua do Catete (Catete Street) to Praia do Flamengo (Flamengo Beach). Construction began in 1858 and ended in 1867. It was Brazil's presidential palace from 1897 to 1960, and the site of Getúlio Vargas' suicide. It now\n[…]\nThe Catete underground rail station is adjacent.\n[…]\nThe seat of the executive branch of Brazil was the Itamaraty Palace in Rio de Janeiro. In 1897, President Prudente de Morais became ill and Vice President Manuel Vitorino took office as interim. He acquired the Catete Palace and over there installed the seat of government. Officially, the palace was the seat of the Federal Government from 1897 until 1960, when the capital and the Federal District were transferred to Brasília.\n[…]\nVarious historical events happened in the palace halls, such as the death of President Afonso Pena in 1909; the signing of the declaration of war against the German Empire and its allies in 1917, during World War I; the visit and hosting of Cardinal Eugenio Pacelli, the future Pope Pius XII, in 1934; the declaration of war against the Axis in World War II in 1942; the suicide of President Getúlio Vargas in 1954, with a shot in the heart, in his bedroom on the third floor of the palace; among others.\n[…]\nPalácio do Planalto\n[…]\nPalácio da Alvorada"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Tratado de Tordesilhas",
      "descricao": "Acordo entre Portugal e Espanha que dividiu as terras descobertas e por descobrir fora da Europa por um meridiano."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "O Tratado de Tordesilhas, que repartiu o mundo entre Portugal e Espanha, leva o nome de uma vila de qual país?",
    "resposta": "Espanha",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Tratado_de_Tordesilhas",
      "https://en.wikipedia.org/wiki/Treaty_of_Tordesillas"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Tratado_de_Tordesilhas",
        "situacao": "ok",
        "texto": "Tratado de Tordesilhas foi um acordo internacional assinado na povoação castelhana de Tordesilhas em 7 de junho de 1494, celebrado entre o Reino de Portugal e a Coroa de Castela para dividir as terras \"descobertas e por descobrir\" por ambas as Coroas fora da Europa.\n[…]\nMas a descoberta pelos portugueses em 1512 das valiosas \"ilhas das Especiarias\", as Molucas, desencadeou a contestação espanhola, argumentando que o Tratado de Tordesilhas dividia o mundo em dois hemisférios equivalentes.\n[…]\nO Tratado de Tordesilhas serviu como base para as negociações da Junta de Badajoz-Elvas (1524), quando Portugal e Espanha negociaram sobre as Molucas e as Filipinas, originalmente situadas na órbita portuguesa, consideradas castelhanas, em troca das pretensões portuguesas sobre a bacia do rio da Prata, no Brasil.\n[…]\nPara solucionar esta nova disputa, celebrou-se o Tratado de Saragoça a 22 de abril de 1529. Este definiu a continuação do meridiano de Tordesilhas no hemisfério oposto, a 297,5 léguas do leste das ilhas Molucas, cedidas pela Espanha mediante o pagamento, por Portugal, de 350 000 ducados de ouro. Ressalvava-se que em todo o seu tempo se o imperador ou sucessores quisessem restituir aquela avultada quantia, ficaria desfeita a venda e cada um \"ficará com o direito e a acção que agora tem\".\n[…]\nEm 1750, o Tratado de Tordesilhas que já não era mais respeitado na prática, deixou de vigorar, com a assinatura do Tratado de Madri – quando as coroas portuguesa e espanhola estabeleceram novos limites fronteiriços para a divisão territorial nas colônias sul-americanas, finalizando às disputas. Ambas as partes reconheciam ter violado o Tratado de Tordesilhas na América e concordavam que, a partir de então, rios e montanhas seriam usados para demarcação dos limites."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Treaty_of_Tordesillas",
        "situacao": "ok",
        "texto": "The Treaty of Tordesillas, signed in Tordesillas, Spain, on 7 June 1494, and ratified in Setúbal, Portugal, divided the newly discovered lands outside Europe between the Kingdom of Portugal and the Crown of Castile, along a meridian 370 leagues (c. 2,100 km or 1,300 mi) west of the Cape Verde islands, off the west coast of Africa.\n[…]\nInitially, the line of demarcation did not encircle the earth. Instead, Spain and Portugal could conquer any new lands they were the first to discover, Spain to the west and Portugal to the east, even if they passed each other on the other side of the globe. But Portugal's discovery of the highly valued Moluccas in 1512 caused Spain to argue in 1518 that the Treaty of Tordesillas divided the earth into two equal hemispheres.\n[…]\nThe Treaty of Zaragoza did not modify or clarify the line of demarcation provided by the Treaty of Tordesillas, nor did it validate Spain's claim to equal hemispheres (180° each), so the two lines divided the earth into unequal hemispheres. Portugal's portion was roughly 191° whereas Spain's portion was roughly 169°. Both portions have a large uncertainty of ±4° because of the wide variation in the opinions regarding the location of the Tordesillas line.\n[…]\nOn January 13, 1750, King John V of Portugal and Ferdinand VI of Spain signed the Treaty of Madrid, in which both parties sought to establish the borders between Brazil and Spanish America, admitting that the Treaty of Tordesillas, as it had been envisioned in 1494, had been superseded, and was considered void. Spanish sovereignty was acknowledged over the Philippines, while Portugal would get the territory of the Amazon River basin.\n[…]\nHouses of Treaty of Tordesillas\n[…]\nTreaty of Tordesillas (Portuguese) from Archivo General de Indias\n[…]\nTreaty of Tordesillas English Translation with Images of the Spanish Version"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Tomás Antônio Gonzaga",
      "descricao": "Poeta árcade e jurista, autor de Marília de Dirceu, condenado como participante da Inconfidência Mineira."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Condenado pela Inconfidência Mineira, o poeta Tomás Antônio Gonzaga cumpriu o degredo em qual colônia portuguesa na África?",
    "resposta": "Moçambique",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Tomás_Antônio_Gonzaga"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Tomás_Antônio_Gonzaga",
        "situacao": "ok",
        "texto": "Tomás António Gonzaga (Miragaia, Porto, 11 de agosto de 1744 — Ilha de Moçambique, 1810), cujo nome arcádico é Dirceu, foi um jurista, poeta e ativista político participante da Inconfidência Mineira, movimento pela independência de Minas Gerais, precursor do processo que conduziu à separação do Brasil de Portugal. Considerado o mais proeminente dos poetas árcades, é ainda hoje estudado em escolas \n[…]\nPermaneceu em reclusão por três anos, durante os quais, teria escrito a maior parte das liras atribuídas a ele, pois não há registros de assinatura em qualquer uma de suas poesias. Em 1792, sua pena é comutada em degredo, a pedido pessoal de D. Maria I e o poeta é enviado a costa oriental da África, a fim de cumprir, em Moçambique, a sentença de dez anos.\n[…]\nÉ interessante atentar para alguns aspectos dessa obra de Gonzaga. Cada lira é um dialogo de Dirceu com sua pastora Marília, mas, embora a obra tenha a estrutura de um diálogo, só Dirceu fala (trata-se de um monólogo), chamando Marília em geral com vocativos. Para o crítico Antonio Candido, o melhor título para a obra seria Dirceu de Marília, mas o patriarcalismo de Gonzaga nunca lhe permitiria pôr-se como a coisa possuída. Sem esquecer que Tomás António Gonzaga morreu de paixão.\n[…]\nEle foi mandado para a ilha das Cobras no Rio de Janeiro, depois para Moçambique na África. Casando-se com uma filha de um mercador de escravos; diga-se de passagem: Logo ele que era totalmente contra a escravidão.\n[…]\nTomás António Gonzaga já foi retratado como personagem no cinema e na televisão, interpretado por Gianfrancesco Guarnieri na telenovela Dez Vidas (1969), Luiz Linhares no filme Os Inconfidentes (1972) e Eduardo Galvão no filme Tiradentes (1999).\n[…]\n«Tomás António Gonzaga - Biografia»\n[…]\nTexto Marília de Dirceu no Projeto Gutenberg"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Chico Mendes",
      "descricao": "Francisco Alves Mendes Filho, seringueiro, sindicalista e ambientalista acreano assassinado em 1988."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "O seringueiro e ambientalista Chico Mendes foi assassinado em 1988 na cidade do Acre onde vivia. Qual?",
    "resposta": "Xapuri",
    "distratores": [
      "Rio Branco",
      "Brasileia",
      "Cruzeiro do Sul"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Chico_Mendes"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Chico_Mendes",
        "situacao": "ok",
        "texto": "Francisco Alves \"Chico\" Mendes Filho (Xapuri, 15 de dezembro de 1944 – Xapuri, 22 de dezembro de 1988) foi um seringueiro, sindicalista, ativista político brasileiro. Lutou a favor dos seringueiros da Bacia Amazônica, cuja subsistência dependia da preservação da floresta e das seringueiras nativas. Seu ativismo lhe trouxe reconhecimento internacional, ao mesmo tempo em que provocou a ira dos grand\n[…]\nChico Mendes nasceu no seringal Porto Rico em Xapuri, no Acre, em 15 de dezembro de 1944, filho do migrante cearense Francisco Alves Mendes e de Maria Rita Mendes. Começou no ofício de seringueiro ainda criança, acompanhando o pai em incursões pela mata. Aprendeu a ler aos 19 anos, já que na maioria dos seringais não havia escolas, e tampouco os proprietários de terras tinham intenção de implantá-las em suas propriedades.\n[…]\nApós o assassinato do líder extrativista, mais de trinta entidades — sindicalistas, religiosas, políticas, de direitos humanos e ambientalistas — se reuniram para formar o Comitê Chico Mendes. Elas exigiam, através de articulação nacional e internacional e de pressão aos órgãos estatais, que os autores do crime fossem punidos. Em dezembro de 1990, a justiça condenou os fazendeiros Darly Alves da Silva e seu filho, Darcy Alves Ferreira a 19 anos de prisão pela morte de Chico Mendes.\n[…]\nA morte de Chico Mendes evidenciou a urgência de ações conservacionistas para a preservação da Amazônia e o fim dos conflitos por terra. Com base na pressão internacional, fundou-se a Reserva Extrativista Chico Mendes (Resex), em 1990, exemplo seguido por outras. Referência para o mundo, a Resex alcança as cidades de Assis Brasil, Brasileia, Capixaba, Epitaciolândia, Sena Madureira, Xapuri e Rio Branco; tem cerca de 970 mil quilômetros de floresta e quase 1 milhão de hectares.\n[…]\nJornal do Brasil: 22 de dezembro de 1988 - O assassinato de Chico Mendes"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "José de Anchieta",
      "descricao": "Padre jesuíta do século dezesseis, missionário no Brasil e um dos fundadores de São Paulo, canonizado em 2014."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "O jesuíta José de Anchieta, que ajudou a fundar São Paulo, nasceu em qual arquipélago espanhol?",
    "resposta": "Ilhas Canárias",
    "fonte": [
      "https://pt.wikipedia.org/wiki/José_de_Anchieta"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/José_de_Anchieta",
        "situacao": "ok",
        "texto": "José de Anchieta SJ (San Cristóbal de La Laguna, 19 de março de 1534 – Reritiba, 9 de junho de 1597) foi um padre jesuíta espanhol que ingressou na Companhia de Jesus no Reino de Portugal, ficando ao seu serviço, e um dos fundadores das cidades brasileiras de São Paulo e do Rio de Janeiro.\n[…]\nOutra relíquia de São José de Anchieta, um fêmur completo, está localizado na Basílica de São José de Anchieta, no Pátio do Colégio, em São Paulo.\n[…]\nOs principais santuários dedicados a São José de Anchieta, no Brasil e nas Ilhas Canárias são aqueles que estão diretamente relacionados com a sua vida:\n[…]\nEspanha (Ilhas Canárias): na cidade de San Cristóbal de La Laguna (local de nascimento), o principal santuário diocesano é a própria Catedral de Nossa Senhora dos Remédios. Neste templo Anchieta foi batizado em 1534. A cada 9 de junho uma oferenda de flores é deixada na grande estátua de bronze do santo, e mais tarde uma missa é realizada na catedral, presidida pelo bispo de Tenerife, seguida de procissão com a imagem do santo pelas ruas até a casa nativa.\n[…]\nJosé de Anchieta é amplamente reverenciado tanto no Brasil, quanto nas Ilhas Canárias (local de seu nascimento). Na cidade de San Cristóbal de La Laguna há uma imponente estátua de bronze em sua homenagem, trabalho do artista brasileiro Bruno Giorgi. A estátua retrata José de Anchieta caminhando para Portugal, e foi um presente do Governo do Brasil para a sua cidade natal.\n[…]\nNa Basílica de Nossa Senhora da Candelária, santuário da padroeira das Ilhas Canárias, localizada no sudeste da ilha de Tenerife, há uma pintura que apresenta José de Anchieta fundando o povoado de São Paulo de Piratininga, origem da cidade de São Paulo.\n[…]\nMonumento ao Padre José de Anchieta em Tenerife\n[…]\nLista de santos e beatos das Ilhas Canárias"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Revolta dos 18 do Forte de Copacabana",
      "descricao": "Primeira revolta do movimento tenentista, ocorrida no Rio de Janeiro em 5 de julho de 1922."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em julho de 1922, jovens tenentes rebelados marcharam pela orla contra as tropas do governo. De qual forte carioca eles saíram?",
    "resposta": "Forte de Copacabana",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Revolta_dos_18_do_Forte_de_Copacabana"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Revolta_dos_18_do_Forte_de_Copacabana",
        "situacao": "ok",
        "texto": "A Revolta dos 18 do Forte ou Revolta do Forte de Copacabana foi um movimento de integrantes do Exército Brasileiro contra o presidente do Brasil, Epitácio Pessoa, e o vencedor da eleição presidencial, Artur Bernardes, em 5 de julho de 1922.\n[…]\nA maior fama do julho de 1922 ficou com o Forte de Copacabana e a disposição suicida de um número diminuto de revoltosos a enfrentar as tropas legais, episódio que adquiriu caráter mítico. É famoso o número de 18 que teriam participado do combate final, mas a quantidade real era provavelmente menor.\n[…]\nOs vivos levantem!”. Os mortos e feridos foram recolhidos na praia. A companhia do 3.º RI seguiu ao Forte de Copacabana, onde prendeu, sem resistência, oito soldados e cerca de 15 civis.\n[…]\nA data de 5 de julho adquiriu valor simbólico. Os conspiradores da Revolta Paulista de 1924 haviam escolhido várias datas de início anteriores, desde 28 de março, mas repetidamente mudaram por imprevistos. Sob crescente pressão das autoridades, no final de junho eles escolheram o aniversário da revolta de 1922 como data de início. Na deposição de Washington Luís em 1930, ele foi preso no Forte de Copacabana.\n[…]\nEm 1927, com a Coluna Prestes ainda em operação, o deputado Maurício de Lacerda propôs um monumento em bronze aos “18 do Forte”, mas a Câmara não aceitou. À época, as autoridades do Exército consideravam Siqueira Campos como um criminoso. Ele morreu em 1930. O outro tenente sobrevivente da praia de Copacabana, Eduardo Gomes, teve uma carreira longa e destacada, tornando-se presidenciável em 1945; à época, sua participação em 1922 era vista como ponto de prestígio.\n[…]\nAtlas Histórico do Brasil — A marcha dos ‘18’ do Forte de Copacabana e O Rio de 5 de Julho de 1922. CPDOC FGV."
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Salvador",
      "descricao": "Capital da Bahia, fundada por Tomé de Sousa como sede do governo-geral do Brasil colonial."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Salvador foi fundada por Tomé de Sousa para ser a sede do governo-geral do Brasil. Em que ano?",
    "resposta": "1549",
    "distratores": [
      "1532",
      "1555",
      "1565"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Salvador_(Bahia)"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Salvador_(Bahia)",
        "situacao": "ok",
        "texto": "Salvador é um município brasileiro, capital do estado da Bahia. Fundada em 29 de março de 1549 por Tomé de Sousa, por conta da implantação do Governo-Geral do Brasil pelo Império Português, foi a primeira capital do Brasil Colonial e está entre as cidades mais antigas continuadamente habitadas do continente americano e uma das primeiras cidades do Brasil, sendo estabelecida como uma cidade planeja\n[…]\nSalvador é sede, ainda, do Consórcio Nordeste e abriga o único escritório da Agência Nacional de Petróleo na região Nordeste do Brasil.\n[…]\nSalvador foi nomeada em homenagem a Jesus Cristo, o Salvador, conforme o cristianismo seguido pelos colonizadores católicos do Império Português. Portanto, trata-se de um hierotopônimo na toponímia do Brasil, mas também é uma redução da primeira designação, São Salvador da Bahia de Todos os Santos.\n[…]\nEm 29 de março de 1549, chegam, pela Ponta do Padrão, na Barra, Tomé de Sousa e comitiva, em seis embarcações: três naus, duas caravelas e um bergantim, com ordens de D. João III de fundar uma cidade-fortaleza chamada do São Salvador. Nasce assim a cidade de Salvador: já cidade, já capital, sem nunca ter sido província. Todos os donatários das capitanias hereditárias eram submetidos à autoridade do primeiro governador-geral do Brasil, Tomé de Sousa.\n[…]\nA Cidade do São Salvador da Baía de Todos os Santos foi a capital e sede da administração colonial do Brasil até 1763, até ser substituída pela cidade do Rio de Janeiro. Em 1798, ocorreu a Revolta dos Alfaiates, também conhecida como Conjuração Baiana, na qual estavam envolvidos homens do povo como Lucas Dantas e João de Deus, e intelectuais da elite, como Cipriano Barata e outros profissionais liberais.\n[…]\nHino de Salvador\n[…]\nA fundação de Salvador, na Baía de Todos os Santos, Os Dias da História - A Conferência de Berlim Fundação da cidade de Salvador, no Brasil, por Paulo Sousa Pinto, Antena 2, Portugal, 2017"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Kasato Maru",
      "descricao": "Navio que trouxe ao porto de Santos o primeiro grupo oficial de imigrantes japoneses ao Brasil."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "O navio Kasato Maru, que trouxe a Santos o primeiro grupo oficial de imigrantes japoneses, atracou no porto em que ano?",
    "resposta": "1908",
    "distratores": [
      "1888",
      "1918",
      "1924"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Kasato_Maru"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Kasato_Maru",
        "situacao": "ok",
        "texto": "Kasato Maru (Kasato Maru (笠戸丸)) foi o navio que, em 1908, transportou o primeiro grupo de imigrantes japoneses vinculados ao acordo estabelecido entre o Brasil e o Japão.\n[…]\nO Kasato Maru foi originalmente um navio russo chamado Kazan que foi utilizado como navio-hospital durante a Guerra Russo-Japonesa. No final da guerra, passou para os japoneses como indenização de guerra ou capturado. Foi adaptado para ser navio de passageiros e transportou os soldados que tinham combatido na Manchúria de volta para o Japão.\n[…]\nEm seguida, passou a ser utilizado para transporte de imigrantes japoneses para o Havaí, em 1906, e para o Peru e o México, em 1907.\n[…]\nEm 1908, trouxe o primeiro grupo oficial de imigrantes japoneses para o Brasil. A viagem começou no porto de Kobe e terminou, 52 dias depois, no Porto de Santos em 18 de Junho de 1908. Vieram 165 famílias (781 pessoas) que foram trabalhar nos cafezais do oeste paulista.\n[…]\nAlguns imigrantes japoneses chegaram ao Brasil antes do Kasato Maru, e até chegaram a fundar uma colônia agrícola na fazenda Santo Antônio, no atual município de Conceição de Macabu (então distrito de Macaé), no estado do Rio de Janeiro. Entretanto, foi a chegada deste primeiro grupo trazido pelo Kasato Maru que iniciou um fluxo contínuo de imigração de japoneses para o Brasil.\n[…]\nDepois de algum tempo, Kasato Maru foi transformado em navio cargueiro e ainda voltou ao Brasil uma segunda e última vez, em 1917, transportando cargas a serviço da Osaka Shosen Kaisha (OSK) Line.\n[…]\nAfrica Maru\n[…]\nBuenos Aires Maru\n[…]\nRio de Janeiro Maru\n[…]\nMedia relacionados com Kasato Maru no Wikimedia Commons\n[…]\n«História do navio Kasato Maru»"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Consolidação das Leis do Trabalho",
      "descricao": "Decreto-lei da era Vargas que reuniu as leis trabalhistas brasileiras num único código."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Getúlio Vargas assinou a Consolidação das Leis do Trabalho num primeiro de maio. De que ano?",
    "resposta": "1943",
    "distratores": [
      "1937",
      "1940",
      "1946"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Consolidação_das_Leis_do_Trabalho"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Consolidação_das_Leis_do_Trabalho",
        "situacao": "ok",
        "texto": "A Consolidação das Leis do Trabalho (CLT) é uma lei do Brasil referente ao direito do trabalho e ao direito processual do trabalho. Ela foi criada através do Decreto-Lei n.º 5 452, de 1 de maio de 1943 e sancionada pelo então presidente Getúlio Vargas durante o período do Estado Novo, entre 1937 e 1945, unificando toda legislação trabalhista e existente no Brasil.\n[…]\nA CLT surgiu como uma necessidade constitucional após a criação da Justiça do Trabalho em 1939. O país passava por um momento de desenvolvimento, mudando a economia de agrária para industrial. Em janeiro de 1942 o então presidente Getúlio Vargas e o Ministro do Trabalho e Emprego Alexandre Marcondes Filho trocaram as primeiras ideias sobre a necessidade de fazer uma consolidação das leis do trabalho. A ideia primária foi de criar a \"Consolidação das Leis do Trabalho e da Previdência Social\".\n[…]\nA terceira foi a própria Encíclica Rerum Novarum e, finalmente, os pareceres dos consultores jurídicos Oliveira Viana e Oscar Saraiva, aprovados pelo ministro do Trabalho.Em novembro de 1943, foi apresentado o anteprojeto da CLT, publicado posteriormente no Diário Oficial para receber sugestões.\n[…]\nApós estudar o projeto, Getúlio Vargas nomeou os coautores para examinar as sugestões e redigir o projeto final, finalmente assinado em 1º de maio de 1943, mas que não substituiu o publicado no DOU de 9 de agosto do mesmo ano.\n[…]\nHá constantes debates no intuito de promover uma reforma da CLT para flexibilizá-la. O conjunto de artigos já sofreu mais de 500 modificações desde 1943.\n[…]\nDireito do trabalho no Brasil\n[…]\nReforma trabalhista no Brasil em 2017\n[…]\nTribunal Superior do Trabalho\n[…]\nMinistério do Trabalho e Emprego\n[…]\nConsolidação das Leis Trabalhistas (Decreto-lei nº 5.452, de 1º de Maio de 1943)"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Ato Institucional Número Cinco",
      "descricao": "Decreto do regime militar brasileiro que fechou o Congresso e suspendeu garantias constitucionais, como o habeas corpus."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Em que ano o regime militar decretou o Ato Institucional Número Cinco, que fechou o Congresso e suspendeu o habeas corpus?",
    "resposta": "1968",
    "distratores": [
      "1964",
      "1966",
      "1970"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Institutional_Act_Number_Five"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Institutional_Act_Number_Five",
        "situacao": "ok",
        "texto": "The Institutional Act Number Five (Portuguese: Ato Institucional Número Cinco), commonly known as AI-5, was the fifth of seventeen extra-legal Institutional Acts issued by the military dictatorship in the years following the 1964 Brazilian coup d'état.\n[…]\nThe AI-5 suspended most civil rights, including habeas corpus, and allowed the removal from office of opposition politicians, and federal interventions in municipalities and states. It enabled institutionalization of arbitrary detention, torture, and extrajudicial killing by the regime. It was issued by President Artur da Costa e Silva on December 13, 1968.\n[…]\nInstitutional Acts were not subject to judicial review, and superseded both the previous 1946 constitution and the 1967 constitution enacted by the regime. By suspending habeas corpus, the AI-5 enabled  human rights abuses by the regime.\n[…]\nA classified meeting held in December 1968 by the military regime's cabinet discussing the introduction of AI-5, discussing legalised torture, etc.,  was recorded, although the recording only came to light decades later. João Pedro Bim made a documentary film, A Portas Fechadas (Behind Closed Doors), in 2023 contrasting propaganda newsreels of the time with the recording to reveal the covert machinations of the dictatorship.\n[…]\nthe suspension of habeas corpus for \"crimes of political motivation\";\n[…]\nOn 13 October 1978, President Ernesto Geisel allowed Congress to pass a constitutional amendment putting an end to the AI-5 and restoring habeas corpus, as part of his policy of distensão (détente) and abertura política (political opening). The constitutional amendment came into force on January 1, 1979.\n[…]\nText of Institutional Act #5, from Universidade Federal do Rio de Janeiro (in Portuguese)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ato_Institucional_n.%C2%BA_5",
        "situacao": "ok",
        "texto": "Ato Institucional n.º 5 (AI-5) foi o mais duro dentre os 17 atos institucionais decretados pela ditadura militar nos anos que se seguiram ao golpe de estado de 1964 no Brasil.\n[…]\nInstituído em 13 de dezembro de 1968, no governo de Artur da Costa e Silva, o AI-5 permitiu a cassação de políticos eleitos nas esferas federal, estadual e municipal, autorizou o presidente da República a intervir nos governos de estados e municípios e permitiu a suspensão de direitos e garantias constitucionais individuais como habeas corpus, entre outras medidas.\n[…]\nO AI-5 decorreu, também, da decisão da Câmara dos Deputados de negar autorização ao governo para processar criminalmente o deputado federal Márcio Moreira Alves, cujo discurso de 2 de setembro de 1968 irritou as autoridades militares, ao chamar o Exército Brasileiro de \"valhacouto de torturadores\", instar a população a boicotar os desfiles do 7 de setembro e as mulheres a não se relacionarem com militares.\n[…]\nNo dia 13 de dezembro de 1968, quando se discutia a aprovação do AI-5, o então vice-presidente, Pedro Aleixo, foi o único a discordar dos termos do decreto. Dirigindo-se ao presidente Artur da Costa e Silva, ele afirmou:  \"Presidente, o problema de uma lei assim não é o senhor, nem os que com o senhor governam o país; o problema é o guarda da esquina.\"\n[…]\nAs consequências imediatas do Ato Institucional Número Cinco foram:\n[…]\nA suspensão do habeas corpus por crimes de motivação política;\n[…]\nIsso, de facto, transformou o Congresso Nacional, as Assembleias Legislativas e as Câmaras de Vereadores em um \"carimbo de aprovação\" das elites militares.\n[…]\n«Texto Integral do Ato Institucional nº 5, de 13 de dezembro de 1968»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Independência da Bahia",
      "descricao": "Guerra travada na Bahia entre 1822 e 1823 que expulsou as tropas portuguesas de Salvador e consolidou a Independência do Brasil."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Na Bahia, a expulsão das tropas portuguesas de Salvador, em 1823, é festejada todo ano em que data?",
    "resposta": "2 de julho",
    "distratores": [
      "7 de setembro",
      "13 de maio",
      "20 de novembro"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Independência_da_Bahia"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Independência_da_Bahia",
        "situacao": "ok",
        "texto": "A Independência da Bahia, também chamada de Independência do Brasil na Bahia, foi um movimento que, iniciado em 19 de fevereiro de 1822 e com desfecho em 2 de julho de 1823, motivado pelo sentimento emancipador de seu povo, terminou pela inserção da então província na unidade nacional brasileira, consolidando a Independência do Brasil.\n[…]\nEmbora antecedida pela Convenção de Beberibe e pelas reações ao Dia do Fico, a luta pela Independência na Bahia veio antes da independência brasileira, e só concretizou-se quase um ano depois do 7 de setembro de 1822: ao contrário da pacífica proclamação às margens do riacho Ipiranga, só ao custo de muitas vidas e batalhas por terra e mar emancipou-se de Portugal, de tal modo que seu Hino afirma ter o Sol que nasceu ao 2 de julho brilhado mais que o primeiro.\n[…]\nEm abril de 1823, chegou em Salvador a esquadra real comandada pelo Almirante inglês Thomas Cochrane, bloqueando o porto. Sem abastecimento de gêneros alimentícios e impossibilitados de receber reforços, os portugueses se retiraram na madrugada do dia 1 para o dia 2 de julho com as riquezas que puderam levar, e aos 2 dias do mês de julho de 1823, o Exército Libertador entrou triunfante na cidade já desocupada pelo inimigo.\n[…]\nDe junho de 1822 a julho de 1823 a luta se prolongou entre o governo provisório da província, eleito em junho, favorável à independência, e as forças portuguesas sob o comando do brigadeiro Madeira de Melo, concentradas em Salvador.\n[…]\nEm maio de 1823, chegou à costa da província a esquadra comandada por Thomas Cochrane, para participar do bloqueio marítimo à capital da província. A derrota final de Madeira se deu em 2 de julho.\n[…]\nAo todo chegam a Salvador, no 2 de julho, um total de 8 686 oficiais e soldados, sem contar as mais de mil mulheres que os acompanhavam no auxílio, cozinha e socorro."
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Revolução Constitucionalista de 1932",
      "descricao": "Levante armado do estado de São Paulo contra o governo provisório de Getúlio Vargas, em 1932."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Em que data começou a Revolução Constitucionalista de 1932, hoje feriado estadual em São Paulo?",
    "resposta": "9 de julho",
    "distratores": [
      "23 de maio",
      "25 de janeiro",
      "2 de outubro"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Revolução_Constitucionalista_de_1932"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Revolução_Constitucionalista_de_1932",
        "situacao": "ok",
        "texto": "Revolução Constitucionalista de 1932, também conhecida como Revolução de 1932 ou Guerra Paulista, foi um movimento armado no Brasil para derrubar o governo provisório de Getúlio Vargas, de julho a outubro de 1932, com suas principais frentes ao redor do estado de São Paulo. O movimento é largamente creditado como tendo possibilitado a Assembleia Nacional Constituinte de 1934 e evitado a extensão i\n[…]\nO levante armado começou de fato em 9 de julho de 1932, precipitado pela revolta popular após a morte de quatro jovens por tropas getulistas, em 23 de maio de 1932, durante um protesto contra o Governo Federal.\n[…]\nAtualmente, o dia 9 de julho, que marca o início da Revolução de 1932, é a data cívica mais importante do estado de São Paulo e feriado estadual. Os paulistas consideram a Revolução Constitucionalista como sendo o maior movimento cívico de sua história. A lei 12.430, de 20 de junho de 2011, inscreveu os nomes de Martins, Miragaia, Dráusio e Camargo, heróis paulistas de 1932, no Livro dos Heróis da Pátria.\n[…]\nSegundo a socióloga Aspásia Camargo, em artigo para o jornal O Estado de S. Paulo, em texto comemorativo dos sessenta anos da Revolução Constitucionalista de 1932, publicado em 9 de julho de 1992, o constitucionalismo paulista resultou de um conflito entre duas concepções de democracia: Democracia Social e Democracia Liberal. Para Getúlio Vargas e os tenentes, a democracia liberal formal era um engodo, tanto quanto o liberalismo brasileiro.\n[…]\nO 9 de julho é feriado civil no estado de São Paulo e também é a sua data magna, instituída pela lei nº 9.497 de 5 de março de 1997. Desde 1934, anualmente nessa data é realizado o desfile cívico-militar comemorativo na capital paulista, atualmente sediado no Parque do Ibirapuera, o que também é realizado em cidades do interior do estado, em memória ao conflito e em homenagem àqueles que tombaram pela causa Constitucionalista."
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Cristo Redentor",
      "descricao": "Estátua art déco de Jesus Cristo no alto do morro do Corcovado, no Rio de Janeiro."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Em que década foi inaugurada a estátua do Cristo Redentor, no alto do Corcovado?",
    "resposta": "Década de 1930",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Cristo_Redentor"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Cristo_Redentor",
        "situacao": "ok",
        "texto": "Cristo Redentor é uma estátua que retrata Jesus Cristo, localizada no topo do morro do Corcovado, a 709 metros acima do nível do mar, dentro do Parque Nacional da Tijuca. Tem vista para parte considerável da cidade brasileira do Rio de Janeiro, sendo a frente da estátua voltada para a Baía de Guanabara e as costas para a Floresta da Tijuca.\n[…]\nO direito de gerenciar a estátua foi concedido pela União à Arquidiocese do Rio na década de 1930, mas o acesso à estátua e a administração do platô onde ela se localiza são realizados pelo Parque Nacional da Tijuca, uma Unidade de Conservação federal gerida pelo Instituto Chico Mendes de Conservação da Biodiversidade (ICMBio).\n[…]\nA ideia de construir uma grande estátua no alto do Corcovado foi sugerida pela primeira vez em meados da década de 1850, quando o padre Pedro Maria Boss sugeriu a colocação de um monumento cristão no Monte do Corcovado para homenagear a Princesa Isabel, regente do Brasil e filha do Imperador Dom Pedro II. A princesa gostou da ideia e chegou a dar apoio à construção da obra.\n[…]\nTornando-se famoso na França como retratista, ele foi incluído por Paul Landowski na equipe que começou a trabalhar no Cristo Redentor em 1922. Gheorghe Leonida contribuiu retratando o rosto de Jesus Cristo na estátua, fato que o tornou famoso.\n[…]\nO monumento está em área cedida pela União à Arquidiocese do Rio na década de 1930, mas o acesso à estátua é realizado através do Parque Nacional da Tijuca, administrado pelo Instituto Chico Mendes de Conservação da Biodiversidade (ICMBio) e que realiza a cobrança de ingresso. Apesar de a manutenção do monumento demandar recursos consideráveis da Arquidiocese do Rio, o valor referente à bilheteria de acesso à estátua segue integralmente para o órgão federal.\n[…]\nCristo Redentor no Instagram\n[…]\nCristo Redentor no Facebook\n[…]\nCristo Redentor no YouTube"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Zumbi dos Palmares",
      "descricao": "Último líder do Quilombo dos Palmares, morto em 1695."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "O Dia da Consciência Negra, vinte de novembro, relembra qual acontecimento da vida de Zumbi dos Palmares?",
    "resposta": "A morte dele, em 1695",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Dia_da_Consciência_Negra",
      "https://pt.wikipedia.org/wiki/Zumbi_dos_Palmares"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Dia_da_Consciência_Negra",
        "situacao": "ok",
        "texto": "Dia Nacional de Zumbi e da Consciência Negra é celebrado, no Brasil, em 20 de novembro. Concebido em 1971, ganhou reconhecimento como efeméride nos calendários escolares em 2003, até ser instituído como data comemorativa em 2011. Em 21 de dezembro de 2023, o presidente Lula sancionou a lei que decretou o 20 de novembro como feriado nacional, consolidando-o como o Dia Nacional de Zumbi e da Consciê\n[…]\nEm contraposição ao 13 de maio, data de assinatura da Lei Áurea pela Princesa Isabel, o dia 20 de novembro foi proposto na década de 1970 pelo Grupo Palmares, em referência ao dia atribuído à morte de Zumbi dos Palmares, em 1695 – um dos maiores líderes negros do Brasil que lutou pela libertação do povo contra o sistema escravista – com o propósito de ressaltar o protagonismo das pessoas negras.[carece de fontes]?\n[…]\nEm analogia à construção da figura heroica de Tiradentes, ele propôs uma data que comemorasse o valor da comunidade negra e sua fundamental contribuição ao país. Em uma publicação da editora Abril constava que a data de 20 de novembro como dia da morte de Zumbi dos Palmares, o que inspirou Oliveira Silveira e a proposta foi aprovada pelos demais integrantes: Vilmar Nunes, Ilmo da Silva e Antônio Carlos Côrtes, todos universitários.\n[…]\nO dia simboliza a resistência e a reflexão sobre a importância da ancestralidade dos povos africanos no Brasil, por meio da homenagem do líder do Quilombo dos Palmares, Zumbi, morto em uma emboscada pelas tropas coloniais brasileiras, no ano de 1695, após sucessivos ataques. Zumbi, que teve sua cabeça exibida em praça pública, faz parte do Livro dos Heróis da Pátria, no Panteão da Pátria e da Liberdade, desde 1997.\n[…]\nTodos os anos a Coordenação Nacional de Entidades Negras organiza no dia a tradicional Marcha Zumbi dos Palmares, que a cada edição enfoca temas diferentes relacionados às lutas e interesses da comunidade negra."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Zumbi_dos_Palmares",
        "situacao": "ok",
        "texto": "Zumbi, também conhecido como Zumbi dos Palmares (morto em 20 de novembro de 1695), foi uma das principais lideranças políticas e militares dos Palmares, conjunto de mocambos estabelecido na Capitania de Pernambuco, em território hoje pertencente sobretudo ao estado de Alagoas. Não se conhecem fontes contemporâneas que permitam determinar sua data ou local de nascimento, filiação, infância ou juven\n[…]\nA data de sua morte tornou-se um marco da memória pública de Zumbi e de Palmares. Em 1971, o Grupo Palmares, de Porto Alegre, realizou uma homenagem em 20 de novembro, e, em 1978, o Movimento Negro Unificado passou a adotar nacionalmente a data como Dia da Consciência Negra. Em 2011, o 20 de novembro foi instituído oficialmente como Dia Nacional de Zumbi e da Consciência Negra e, por lei sancionada em 2023, tornou-se feriado nacional, celebrado em todo o país a partir de 2024.\n[…]\nNão se conhecem fontes contemporâneas que permitam determinar a data ou o local de nascimento de Zumbi, a sua filiação, infância ou juventude. A documentação seiscentista conhecida fornece informações sobre a sua atuação em Palmares e sobre a sua morte, mas não contém dados biográficos sobre os primeiros anos da sua vida.\n[…]\nZumbi sobreviveu à queda da cerca do Barriga, em fevereiro de 1694. A data da sua morte é indicada por Domingos Jorge Velho num requerimento posterior, no qual afirmou que uma partida do seu terço encontrara e matara o \"régulo Zumbi\" em 20 de novembro de 1695.\n[…]\nEm 20 de novembro de 1995, no tricentenário da morte de Zumbi, ocorreu em Brasília a Marcha Zumbi dos Palmares contra o Racismo, pela Cidadania e a Vida, mobilização nacional do movimento negro que apresentou ao governo federal propostas de combate ao racismo e às desigualdades raciais.\n[…]\nOliveira, Maria Lêda (2005). «A primeira rellação do último assalto a Palmares». Afro-Ásia (33): 251–324"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Capitanias hereditárias",
      "descricao": "Sistema de divisão do território do Brasil colonial em faixas de terra doadas a particulares pela Coroa portuguesa a partir de 1534."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "A partir de 1534, qual rei português dividiu o Brasil em capitanias hereditárias?",
    "resposta": "Dom João III",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Capitanias_do_Brasil",
      "https://en.wikipedia.org/wiki/Captaincies_of_Brazil"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Capitanias_do_Brasil",
        "situacao": "ok",
        "texto": "As capitanias do Brasil foram divisões territoriais e administrativas criadas por Portugal para organizar seus territórios na América. De 1534 a 1753, o sistema predominante era o das capitanias hereditárias, concedidas a particulares. A partir de 1753, no entanto, o sistema tornou-se centralizado, com a implantação das capitanias gerais, diretamente subordinadas à Coroa, que se consolidaram como \n[…]\nO modelo de capitanias e donatarias já era utilizado por Portugal desde o século XV nas ilhas da Madeira e de Cabo Verde. Em 1504, o rei Manuel I concedeu, por meio de Carta Régia, a doação da então chamada Ilha de São João a Fernão de Noronha. Em carta dirigida a Martim Afonso de Sousa em 1532, o rei João III comunicou sua decisão de dividir o território português na América em várias capitanias e, em 1534, oficializou as primeiras doações.\n[…]\nJoão III acatou as recomendações do seu conselheiro Diogo de Gouveia e, além de promover o povoamento, decretou que o território fosse dividido em capitanias para serem doadas aos seus vassalos. Portugal já conhecia esse sistema, tendo êxito no desenvolvimento das capitanias nas ilhas da Madeira e dos Açores. Em uma carta a Martim Afonso de Sousa datada em 28 de setembro de 1532, João III informou que realizaria a divisão, prosseguindo a doação das capitanias no ano de 1534.\n[…]\na Capitania-comarca de São João das Duas Barras, correspondente aos atuais territórios do Estado de Tocantins e sul do Pará. Existiu entre 1808 e 1814, perdendo o status de capitania logo depois, restando somente a comarca.\n[…]\nAlmeida Prado, João Fernando de. Pernambuco e as capitanias do norte do Brasil. São Paulo: Companhia Editora Nacional, 1939.\n[…]\nAlmeida Prado, João Fernando de. A Bahia e as capitanias do centro do Brasil. São Paulo: Companhia Editora Nacional, 1945.\n[…]\nAlmeida Prado, João Fernando de. São Vicente e as capitanias do sul do Brasil. São Paulo: Nacional, 1961."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Captaincies_of_Brazil",
        "situacao": "ok",
        "texto": "The Captaincies of Brazil (Portuguese: Capitanias do Brasil) were captaincies of the Portuguese Empire, administrative divisions and hereditary fiefs of Portugal in the colony of Terra de Santa Cruz, later called Brazil, on the Atlantic coast of northeastern South America. Each was granted to a single donee, a Portuguese nobleman who was given the title captain General.\n[…]\nEach would become owner and administrator of a capitania or captaincy, a land grant. This system had previously been successful in settling of the Portuguese colonies, first in Madeira, the Azores and various islands mostly along the coast of Africa.\n[…]\nThe first captaincies were drawn in strips parallel to the equator, commencing at the Atlantic coast and terminating in the west at the Tordesillas Line (where Spanish territory began). They were established by King John III of Portugal, starting with Pernambuco by the royal \"Golden Letter\" (Carto Dourado) on 24 September 1534.\n[…]\nIn 1548 when the captaincy of Baía de Todos os Santos (Bahia) reverted to the Crown due to the massacre, by indigenous cannibals, of its donee, Francisco Pereira Coutinho and his settlers; the King, Dom João III, established a royal governor (later a governor-general) at Bahia. At the same time Dom João rescinded some of the expansive privileges he had previously granted the donatarios (lords-proprietor).\n[…]\nHowever, clearly demonstrating the crowns desire to accommodate whatever worked, Dom João instructed his first Governor to visit all the remaining captaincies, except for Pernambuco, the one singularly successful captaincy. In fact no royal governor visited Pernambuco until the Seventeenth Century. The captaincies continued to exist as governments subordinate to the royal governors, governors-general, and viceroys."
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "São Vicente",
      "descricao": "Cidade do litoral paulista, fundada em 1532 como uma das primeiras vilas portuguesas do Brasil."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que navegador português fundou em 1532 a vila de São Vicente, no litoral paulista?",
    "resposta": "Martim Afonso de Sousa",
    "fonte": [
      "https://pt.wikipedia.org/wiki/São_Vicente_(São_Paulo)",
      "https://pt.wikipedia.org/wiki/Martim_Afonso_de_Sousa"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/São_Vicente_(São_Paulo)",
        "situacao": "ok",
        "texto": "São Vicente, oficialmente Estância Balneária de São Vicente, é um município brasileiro do estado de São Paulo e primeira cidade do Brasil. Pertencente à Região Metropolitana da Baixada Santista, sua população, no censo de 2022, era de 329 911 habitantes, sendo a terceira cidade mais populosa do litoral paulista, atrás apenas de Santos e Praia Grande. Sua área territorial é de 148,151 km², o que lh\n[…]\nSão Vicente marca o início efetivo da colonização no Brasil e torna-se o primeiro núcleo institucionalizado em todo o território brasileiro, estando entre as cidades mais antigas continuadamente habitadas do continente americano. Fundada em 1532 pelo militar e administrador colonial português Martim Afonso de Sousa, na Capitania de São Vicente, a criação da vila atendeu às ordens do Rei Dom João III de Portugal.\n[…]\nEntre 1530 e 1532, a expedição liderada pelo fidalgo português Martim Afonso de Sousa explorou a costa brasileira. No dia 22 de janeiro de 1532, Martim Afonso e um grupo de colonos portugueses desembarcaram na Ilha de São Vicente e o fidalgo ordenou ali a construção de casas, igreja, pelourinho, fortim, estaleiro e edifícios de órgãos administrativos, assim fundando a vila de São Vicente, sob oposição dos indígenas locais.\n[…]\nMartim Afonso também introduziu a cultura canavieira na região de São Vicente, mas ela durou pouco tempo, devido às condições geográficas desfavoráveis. As primeiras cabeças de gado a chegarem ao Brasil vieram do arquipélago de Cabo Verde, em 1534, para a capitania de São Vicente.\n[…]\nEm 1624, devido a disputas entre os descendentes de Martim Afonso, a sede da Capitania de São Vicente foi transferida de São Vicente para Itanhaém. O berço da democracia nas Américas recuperou o título de sede da capitania em 1679, mas o perdeu para a vila de São Paulo dois anos depois."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Martim_Afonso_de_Sousa",
        "situacao": "ok",
        "texto": "Martim Afonso de Sousa (Vila Viçosa, c. 1500 – Lisboa, 21 de julho de 1564) foi um nobre, militar e administrador colonial português que foi, de 1533 até a sua morte, o primeiro donatário da Capitania de São Vicente e, de 1542 a 1545, governador da Índia portuguesa.\n[…]\nMartim Afonso era filho primogênito de Lopo de Sousa, alcaide-mor de Bragança. Passou ao serviço do rei Manuel I em 1516 e, em 1530, foi incumbido pelo seu filho João III de comandar a armada que haveria de expulsar os franceses da costa da América portuguesa, e iniciar a colonização efetiva do território. Nessa expedição fundou a Capitania de São Vicente e seu irmão, Pero Lopes de Sousa, recebeu as donatarias das Capitania de Santana, Santo Amaro e Itamaracá.\n[…]\nDurante o ano de 1532, perdeu parte de sua tropa nesta expedição infrutífera para acessar o império Inca, o que posteriormente resultaria na primeira guerra entre portugueses e espanhóis na America do Sul, a Guerra de Iguape, que ocorreria em 1536, com a invasão e saque da vila de São Vicente pelo Bacharel de Cananeia, que se vingou por haver sido expulso em 1531 por Martim Afonso de Sousa.\n[…]\nAna Pimentel, esposa de Martim Afonso de Sousa, ficou procuradora do marido em Lisboa relativamente aos negócios do Brasil, quando este partiu para a Índia. Natural da Espanha, era dama de companhia da Rainha D. Catarina. Foi ela quem, em 1534, providenciou para que se introduzisse o primeiro ”gado vacum” na Capitania de São Vicente e quem, em 1544, revogou a ordem do esposo, que proibia a entrada de europeus no campo de Piratininga e, assim, permitiu a expansão portuguesa para os Campos de S.\n[…]\nFora do casamento teve Martim Afonso de Sousa:\n[…]\nTristão de Sousa, que passou pela Índia e foi capitão de Maluco\n[…]\nCasa-forte de Martim Afonso de Sousa"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "São Luís",
      "descricao": "Capital do Maranhão, fundada em 1612 numa ilha do litoral norte do Brasil."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "A cidade de São Luís, no Maranhão, foi fundada em 1612 por colonos vindos de qual país europeu?",
    "resposta": "França",
    "fonte": [
      "https://pt.wikipedia.org/wiki/São_Luís_(Maranhão)",
      "https://pt.wikipedia.org/wiki/França_Equinocial"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/São_Luís_(Maranhão)",
        "situacao": "ok",
        "texto": "São Luís, também chamada de São Luís do Maranhão, é a capital do estado brasileiro do Maranhão. É a única capital brasileira fundada por franceses, no dia 8 de setembro de 1612, posteriormente invadida por holandeses e, por fim, colonizada pelos portugueses. Localiza-se na ilha de Upaon-Açu no Atlântico Sul, entre as baías de São Marcos e São José de Ribamar, no Golfão Maranhense.\n[…]\nO nome da cidade é uma homenagem dada pelos franceses ao rei da França, Luís XIII, conforme registrou o cronista da França Equinocial, o Capuchinho Claude D'Abbeville. Posteriormente, o nome passou a referenciar Luís IX, chamado de \"São Luís Rei de França\". O rei Luís IX ficou popular, pois morreu numa Cruzada na Idade Média, sendo posteriormente canonizado pela Igreja Católica.\n[…]\nDaniel de La Touche, conhecido como Senhor de La Ravardière, acompanhado de cerca de 500 homens vindos das cidades francesas de Cancale, Granville e Saint-Malo, chegou à região em 1612 para fundar a França Equinocial e realizar o sonho francês de se instalar na região dos trópicos.\n[…]\nUma missa rezada por capuchinhos e a construção de um forte nomeado de Saint-Louis (\"São Luís\"), em homenagem prestada a Luís IX patrono da França, e ao rei francês da época Luís XIII, marcaram a data de fundação da nova cidade: 8 de setembro. Logo se aliaram aos indígenas, que foram fiéis companheiros na batalha contra portugueses vindos de Pernambuco decididos a reconquistar o território, o que acabou por acontecer alguns anos depois.\n[…]\nNesse período, a fase de ouro da economia maranhense, São Luís passou a viver uma efervescência cultural. A cidade, que se  relacionava mais com as capitais europeias que as outras cidades brasileiras, foi a primeira a receber uma companhia italiana de ópera. Possuía calçamento e iluminação como poucas do país. Recebia semanalmente as últimas novidades da literatura francesa."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/França_Equinocial",
        "situacao": "ok",
        "texto": "Denomina-se França Equinocial aos esforços franceses de colonização da América do Sul em torno da linha do Equador (antigamente denominada de linha Equinocial), no século XVII. O mais significativo legado desse empreendimento colonial é a cidade de São Luís,  atual capital do estado brasileiro do Maranhão, originalmente uma feitoria francesa.\n[…]\nNo fim de 1612, os franceses deliberaram que Razilly retornasse à França para pedir mais recursos para a colônia, uma vez que o número de colonos e de religiosos era considerado pequeno. Em 30 de novembro desse ano, Ravardière cedeu a ele sua parcela como governante da colônia, visando evitar possíveis divisões, e prometeu retornar à França quando Razilly voltasse ao Maranhão.\n[…]\nEm sua extensão máxima, o território sob domínio da França Equinocial se estendia desde o litoral maranhense, até o norte do atual estado do Tocantins, dominando também quase todo o leste do Pará e boa parte do Amapá. Os franceses se estabeleceram em São Luís, explorando a região até o Rio Tocantins. Os franceses foram os primeiros europeus a chegar à foz do Rio Araguaia (região do Bico do Papagaio) em 1613.\n[…]\nQuando esses fidalgos retornassem para comunicar a decisão, o grupo destinado a sair deveria deixar o Maranhão em até 3 meses, pacificamente. Gregório Fragoso de Albuquerque e Monsieur du Prat partiram para a França, e no mês seguinte, Diogo de Campos e Matieu Maillar partiram para Lisboa.\n[…]\nOs nomes de alguns logradouros de São Luís fazem alusão à presença francesa: Avenida dos Franceses (ligando o aeroporto ao Centro da cidade); Avenida São Luís Rei de França (ligando a Cohab ao Turu); Avenida Daniel de La Touche (ligando a Cohama ao bairro Maranhão Novo); o Palácio La Ravadiére (sede da Prefeitura de São Luís); entre outros.\n[…]\nFrança Antártica"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Expulsão dos jesuítas de 1759",
      "descricao": "Expulsão da Companhia de Jesus de Portugal e de suas colônias, inclusive o Brasil, decretada em 1759."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1759, os jesuítas foram expulsos de Portugal e de suas colônias por ordem de qual poderoso ministro?",
    "resposta": "Marquês de Pombal",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Marquês_de_Pombal",
      "https://en.wikipedia.org/wiki/Suppression_of_the_Society_of_Jesus"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Marquês_de_Pombal",
        "situacao": "ok",
        "texto": "Sebastião José de Carvalho e Melo, Marquês de Pombal e Conde de Oeiras (Sernancelhe, Viseu, 13 de maio de 1699– Pombal, 8 de maio de 1782) foi um nobre, diplomata e estadista português. Foi secretário de Estado do Reino durante o reinado de D. José I (1750-1777), sendo considerado, ainda hoje, uma das figuras mais controversas e carismáticas da História Portuguesa.\n[…]\nDevido à expulsão dos jesuítas e consequente fim das suas escolas o número de alunos que chega à universidade baixa enormemente nos tempos do Marquês de Pombal, de 3 mil na universidade de Coimbra mais 1,5 mil na universidade de Évora em poucos anos a universidade sobrante, a de Coimbra fica apenas com 500 alunos.\n[…]\nCom a expulsão violenta dos jesuítas do império português, o Marquês determinou que a educação na colónia passasse a ser transmitida por leigos nas chamadas Aulas Régias. Até então, o ensino formal estivera a cargo da Igreja. O ministro regulamentou ainda o funcionamento das missões, afastando os padres de sua administração, e criou, em 1757, o Directório, órgão composto por homens de confiança do governo português, cuja função era gerir os antigos aldeamentos.\n[…]\nO autor brasileiro José Joaquim de Sousa Nunes viajou a Portugal para publicar em 1758 \"Discursos Político-morais\", dedicado ao Marquês de Pombal. Mas ao tomar conhecimento da obra, Pombal mandou queimar todas as edições impressas, pois não autorizara a dedicatória e não concordara com determinados conteúdos. Apenas três edições se salvaram, de propriedade do poeta Alberto de Oliveira, entregues à Biblioteca Nacional do Rio de Janeiro.\n[…]\nFraschini Neto, M.. O Marquês de Pombal e o Brasil: contribuições às comemorações do 2º Centenário da morte do Marquês de Pombal. Lisboa: Tipografia Minerva do Comércio, 1981.\n[…]\nObras do Marquês de Pombal (Sebastião José de Carvalho e Melo) na Biblioteca Nacional de Portugal"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Suppression_of_the_Society_of_Jesus",
        "situacao": "ok",
        "texto": "The suppression of the Society of Jesus was the removal of all members of the Jesuits from most of Western Europe and their respective colonies beginning in 1759 along with the abolition of the order by the Holy See in 1773; the papacy acceded to anti-Jesuit demands without much resistance.\n[…]\nThere were long-standing tensions between the Portuguese crown and the Jesuits, which increased when the Count of Oeiras (later the Marquis of Pombal) became the monarch's minister of state, culminating in the expulsion of the Jesuits in 1759. The Távora affair in 1758 could be considered a pretext for the expulsion and crown confiscation of Jesuit assets. According to historians James Lockhart and Stuart B.\n[…]\nOn 1 April 1758, Pombal persuaded the aged Pope Benedict XIV to appoint the Portuguese cardinal Francisco de Saldanha da Gama to investigate allegations against the Jesuits. Benedict was skeptical about the gravity of the alleged abuses. He ordered a \"minute inquiry\", but to safeguard the Society's reputation, all serious matters were to be referred back to him. Benedict died the following month, on May 3.\n[…]\nPombal implicated the Jesuits in the Távora affair, an attempted assassination of the King on 3 September 1758, on the grounds of their friendship with some of the supposed conspirators. On 19 January 1759, he issued a decree sequestering the property of the Society in the Portuguese dominions. The following September, he deported the Portuguese fathers, about one thousand in number, to the Papal States, keeping the foreigners in prison.\n[…]\nThe Suppression in Spain and the Spanish colonies, and in its dependencies the Kingdom of Naples and Kingdom of Sicily, was the last of the expulsions, with Portugal (1759) and France (1764) having already set the pattern."
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Café no Brasil",
      "descricao": "Introdução e cultivo do café no Brasil, iniciado no Pará no século dezoito e base da economia do país no século dezenove."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Segundo a tradição, quem trouxe as primeiras mudas de café da Guiana Francesa para o Brasil, em 1727?",
    "resposta": "Francisco de Melo Palheta",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Francisco_de_Melo_Palheta",
      "https://en.wikipedia.org/wiki/Coffee_production_in_Brazil"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Francisco_de_Melo_Palheta",
        "situacao": "ok",
        "texto": "Francisco de Melo Palheta (Belém do Pará, 1670 — cerca de 1750) foi um militar luso-brasileiro (sargento-mor) e responsável pela introdução do cultivo do café no Brasil e em Portugal.\n[…]\nO café foi primeiro introduzido na América do Sul através do Suriname. De lá, passou para a Guiana Francesa, por iniciativa do governador de Caiena, que conseguiu, de um francês chamado Morgues, um punhado de sementes, tendo-as semeado no pomar de sua residência.\n[…]\nPortugal ainda não possuía mudas de café quando, em 1727, por determinação do governador e capitão-general do estado do Maranhão, João da Maia da Gama, o sargento-mor Francisco de Melo Palheta dirigiu-se para a Guiana Francesa com a missão de restabelecer a fronteira fixada pelo Tratado de Utrecht de 1713, ou seja, no rio Oiapoque que estaria sendo violada pelos franceses.\n[…]\nCom uma missão secundário \"especial\", de adquirir mudas e sementes de café para implantar o seu cultivo no Brasil, devido possuir grande valor comercial. Tendo êxito, tornou-se o introdutor do cultivo de café no Brasil, cultura esta que se tornaria a principal do país no século seguinte.\n[…]\nDocumentário biográfico \"Sementes de Ouro Negro – a história de Francisco de Melo Palheta\", produzido pelo cineasta português José Borges em parceria com o jornalista brasileiro Nélio Palheta, que em 54 minutos de duração retrata cenas da cafeteria portuguesa Colombo do Porto e da cidade do Rio de Janeiro. Documentário este financiado pela rede de televisão portuguesa RTP, com apoio da prefeitura do município paraense de Vigia de Nazaré."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Coffee_production_in_Brazil",
        "situacao": "ok",
        "texto": "Brazil produces about a third of the world's coffee, making the country by far the world's largest producer. Coffee plantations, covering some 27,000 km2 (10,000 sq mi), are mainly located in the southeastern states of Minas Gerais, São Paulo and Espírito Santo where the environment and climate provide ideal growing conditions.\n[…]\nCoffee was not native to the Americas but was imported to the country. The first crop arrived in Brazil in the 18th century making it the dominant producer by the 1840s. The first coffee bush in Brazil was planted by Francisco de Melo Palheta in Pará in 1727. According to legend, the Portuguese were looking for a cut of the coffee market, but could not obtain seeds from bordering French Guiana due to the governor's unwillingness to export the seeds.\n[…]\nPalheta was sent to French Guiana on a diplomatic mission to resolve a border dispute. On his way back home, he managed to smuggle the seeds into Brazil by seducing the governor's wife who secretly gave him a bouquet spiked with seeds.\n[…]\nThe second boom ran from the 1880s to the 1930s, corresponding to a period in Brazilian politics called café com leite (\"coffee with milk\"). The name refers to the largest states' dominant industries: coffee in São Paulo and dairy in Minas Gerais."
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Batalha Naval do Riachuelo",
      "descricao": "Batalha fluvial de junho de 1865, na Guerra do Paraguai, em que a esquadra brasileira venceu a paraguaia no rio Paraná."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1865, na Guerra do Paraguai, quem comandou a esquadra brasileira vitoriosa na Batalha Naval do Riachuelo?",
    "resposta": "Almirante Barroso",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Batalha_Naval_do_Riachuelo"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Batalha_Naval_do_Riachuelo",
        "situacao": "ok",
        "texto": "A Batalha Naval do Riachuelo, ou simplesmente Batalha do Riachuelo, travou-se a 11 de junho de 1865 às margens do arroio Riachuelo, um afluente do rio Paraná, na província de Corrientes, na Argentina. Foi evento decisivo e vitorioso, o marco da vitória brasileira na guerra sendo considerada pelos historiadores militares como uma das mais importantes batalhas da Guerra do Paraguai (1864-1870).\n[…]\nCoube ao Almirante Joaquim Marques Lisboa, Visconde de Tamandaré, depois Marquês de Tamandaré, o comando das Forças Navais do Brasil em Operações de Guerra contra o Governo do Paraguai. A Marinha do Brasil representava praticamente a totalidade do Poder Naval presente no teatro de operações. O Comando-Geral dos Exércitos Aliados era exercido pelo Presidente da República da Argentina, General Bartolomeu Mitre.\n[…]\nCom o avanço das tropas paraguaias ao longo da margem esquerda do Paraná, na Província de Corrientes, Tamandaré resolveu designar seu Chefe do Estado-Maior o Chefe de Divisão (posto que correspondia a comodoro, ou almirante de uma estrela em outras Marinhas) Francisco Manuel Barroso da Silva, para comandar a força naval que estava rio acima. Barroso partiu de Montevidéu em 28 de abril de 1865, na Fragata Amazonas, e se juntou à força naval em Bela Vista.\n[…]\nA frota composta de nove navios de guerra estava armada com 59 bocas de fogo, levando a bordo 1 113 fuzileiros navais e 1 174 soldados do Exército Imperial. Somavam um total de 2 287 homens. Seu comandante em chefe era o Almirante Francisco Manuel Barroso da Silva.\n[…]\nÀs 17h30m a batalha está terminada, com clara vitória da esquadra comandada por Barroso. A Belmonte se acha alagada e inutilizada e a Jequitinhonha encalhada.\n[…]\nFicaram famosas na História Militar Brasileira as mensagens transmitidas às embarcações brasileiras pelo Almirante Barroso, através da sinalização de bandeiras:\n[…]\nBatalha Naval do Riachuelo, Marinha do Brasil."
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Bandeira do Império do Brasil",
      "descricao": "Bandeira verde com losango amarelo e o brasão imperial, usada pelo Brasil de 1822 a 1889."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Qual pintor francês, que viveu no Rio de Janeiro, desenhou a bandeira do Império do Brasil?",
    "resposta": "Jean-Baptiste Debret",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Bandeira_do_Império_do_Brasil",
      "https://en.wikipedia.org/wiki/Flag_of_the_Empire_of_Brazil"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Bandeira_do_Império_do_Brasil",
        "situacao": "ok",
        "texto": "A Bandeira do Império do Brasil foi a primeira bandeira oficial do Brasil independente de Portugal, sendo adotada como símbolo nacional de 18 de setembro de 1822, dia em que Dom Pedro I escreveu o decreto que a oficializou, até 15 de novembro de 1889, data da Proclamação da República. A bandeira consiste em um paralelogramo verde sobreposto por um losango dourado, ficando no centro deste o escudo \n[…]\nTendo a nobreza e a família real portuguesa se mudado para o Brasil devido à invasão de Napoleão Bonaparte e a capital do Império Português sendo transferida de Lisboa para o Rio de Janeiro, o Príncipe Regente Dom João VI viu como necessário ampliar o status do Brasil, que até então era uma colônia portuguesa.\n[…]\nDesse modo, em meados de 1820 o rei Dom João encomendou do artista Jean-Baptiste Debret um pavilhão, possivelmente para ser usado pelo príncipe do Reino Unido, que depois seria modificado por Dom Pedro para criar a bandeira do Império brasileiro. Sua bandeira compreendia um losango amarelo em fundo verde, tendo uma esfera armilar com a cruz da Ordem de Cristo sob dois ramos de tabaco e café, rodeados de dezenove estrelas, com a maior delas abaixo da coroa real.\n[…]\nEvidentemente, Debret se inspirou em bandeiras militares da Revolução Francesa e da Era Napoleônica para criar o estandarte, já que o elemento do losango teria se popularizado entre os franceses depois da queda da bastilha.\n[…]\nApós a proclamação da independência D. Pedro estabeleceu o verde e o amarelo dourado como as cores nacionais do Império, as cores que estão presentes na bandeira e no laço imperial, que junta os ramos de café e tabaco no brasão de armas imperial. São as cores que representam as casas imperiais brasileiras, assim como o verde representa a cor dos serpes nas armas da Dinastia de Bragança, e o amarelo representa a cor dourada nas armas da Casa de Habsburgo-Lorena."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Flag_of_the_Empire_of_Brazil",
        "situacao": "inexistente",
        "texto": ""
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Ordem e Progresso",
      "descricao": "Lema inscrito na bandeira republicana do Brasil, adotada em 1889."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "O lema Ordem e Progresso, da bandeira brasileira, foi inspirado nas ideias de qual filósofo francês?",
    "resposta": "Auguste Comte",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Ordem_e_Progresso",
      "https://en.wikipedia.org/wiki/Flag_of_Brazil"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Ordem_e_Progresso",
        "situacao": "ok",
        "texto": "A expressão Ordem e Progresso é o lema político do positivismo, forma abreviada do lema positivista formulado pelo filósofo francês Auguste Comte:\n[…]\n\"O Amor por princípio e a Ordem por base; o Progresso por fim\" (em francês L'amour pour principe et l'ordre pour base; le progrès pour but.).\n[…]\nA Ordem consiste na conservação e manutenção de tudo o que é bom, belo e positivo.\n[…]\nO progresso é a consequência do desenvolvimento e aperfeiçoamento da Ordem.\n[…]\nAssim sendo, do desenvolvimento da Ordem resulta o Progresso individual, moral e social.\n[…]\nO lema político \"Ordem e Progresso\" origina-se da corrente filosófica positivista, criada por Auguste Comte e John Stuart Mill no século XIX (por meio da obra \"Sistema de Política Positiva\" (1851-1854), institui a Religião da Humanidade) surgida a partir da divisa comteana O Amor por princípio e a Ordem por base; o Progresso por meta, representando as aspirações a uma sociedade justa, fraterna e progressista.\n[…]\nO lema \"Ordem e Progresso\" encontra-se escrito na Bandeira Nacional do Brasil idealizada por Raimundo Teixeira Mendes e desenhada pelo artista Décio Villares, com a fundação da República brasileira por Benjamin Constant.\n[…]\nBandeira do Brasil\n[…]\nBrasão de armas do Brasil\n[…]\nProclamação da República do Brasil\n[…]\nSelo Nacional do Brasil\n[…]\nSímbolos do Brasil\n[…]\n«BRAZIL: Order and Progress, Ronald Hilton, World Association of International Studies Forum Q&A»"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Flag_of_Brazil",
        "situacao": "ok",
        "texto": "The national flag of Brazil is a blue disc depicting a starry sky (which includes the Southern Cross) spanned by a curved band inscribed with the national motto Ordem e Progresso (Brazilian Portuguese pronunciation: [ˈɔʁdẽj i pɾoˈɡɾɛsu]) ('Order and Progress'), within a yellow rhombus on a green field. It was officially adopted on 19 November 1889, four days after the Proclamation of the Republic,\n[…]\nA blue circle with white five-pointed stars replaced the arms of the Empire of Brazil –its position in the flag reflects the sky over the city of Rio de Janeiro on 15 November 1889. The motto Ordem e Progresso is derived from Auguste Comte's motto of positivism: \"L'amour pour principe et l'ordre pour base; le progrès pour but\" (\"Love for principle and order for/as the basis; progress for/as the purpose\").\n[…]\nThe caption \"Ordem e Progresso\" is written in green letters. The letter P lies on the vertical diameter of the circle. The letters of the word \"Ordem\" and the word \"Progresso\" are a third of a module (0.33 m) tall. The width of these letters is three-tenths of a module (0.30 m). The conjunction E has a height of three-tenths of a module (0.30 m) and a width of a quarter of a module (0.25 m).\n[…]\nIn 2021, the movement \"Amor na Bandeira\" (in English, Love in the Flag) proposed to update the flag's motto from \"Ordem e Progresso\" to \"Amor, Ordem e Progresso\" (Love, Order and Progress), in allusion to the motto of positivism \"L'amour pour principe et l'ordre pour base; le progrès pour but\" (Love as a principle and order as the basis; progress as the goal), formulated by the French philosopher Auguste Comte, which inspired the original motto in the flag.\n[…]\nBandeira Nacional at the Brazilian Government\n[…]\nBandeira – Insígnia at the Brazilian Government"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Constituição brasileira de 1988",
      "descricao": "Constituição em vigor no Brasil, promulgada em 5 de outubro de 1988 ao fim do regime militar."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Quem presidiu a Assembleia Constituinte que escreveu a Constituição de 1988, por ele chamada de Constituição Cidadã?",
    "resposta": "Ulysses Guimarães",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Ulysses_Guimarães",
      "https://pt.wikipedia.org/wiki/Constituição_brasileira_de_1988"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Ulysses_Guimarães",
        "situacao": "ok",
        "texto": "Ulysses Silveira Guimarães (Rio Claro, 6 de outubro de 1916 – Angra dos Reis, 12 de outubro de 1992) foi um político e advogado brasileiro, um dos principais opositores à ditadura militar. Foi o presidente da Assembleia Nacional Constituinte de 1987–1988, que inaugurou a nova ordem democrática, após 21 anos sob a ditadura militar.\n[…]\nCom nomes como Tancredo Neves, Orestes Quércia, Mario Covas, Fernando Henrique Cardoso, Luiz Inácio Lula da Silva e Franco Montoro, Ulysses liderou novas campanhas pela redemocratização, como a das eleições diretas, popularmente conhecidas pelo slogan Diretas Já. Ulysses Guimarães quase foi o candidato a presidente da República em 1985 pelo PMDB, quando as eleições foram realizadas no colégio eleitoral.\n[…]\nExerceu a presidência da Câmara dos Deputados em três períodos (1956–1957, 1985–1986 e 1987–1988); presidindo a Assembleia Nacional Constituinte, em 1987–1988. A nova Constituição, na qual Ulysses teve papel fundamental, enfim foi aprovada em 5 de outubro de 1988, tendo sido por ele chamada de Constituição Cidadã, pelos avanços sociais que incorporou no documento.\n[…]\nOs acervos do Conselho Nacional de Segurança, da Comissão Geral de Investigações (CGI) e do próprio Serviço Nacional de Informações (SNI), revelam que o então deputado Ulysses Guimarães foi alvo de investigação, mesmo no período de redemocratização do país, enquanto dirigia a Câmara e a Assembleia Nacional Constituinte e o PMDB. A avaliação registrada em 1987, afirmava que Ulysses poderia causar crise partidária entre os aliados.\n[…]\nNo dia 17 de abril de 1995, a antiga Fundação Pedroso Horta, instituída pelo Movimento Democrático Brasileiro (MDB), foi rebatizada e passou a se chamar Fundação Ulysses Guimarães, em homenagem ao líder político, que partilhava dos mesmos ideais e valores da Fundação."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Constituição_brasileira_de_1988",
        "situacao": "ok",
        "texto": "Constituição da República Federativa do Brasil de 1988, extraoficialmente conhecida como Constituição Federal de 1988, é a lei fundamental e suprema do Brasil, servindo de parâmetro de validade a todas as demais espécies normativas, situando-se no topo do ordenamento jurídico. Foi aprovada pela Assembleia Nacional Constituinte em 22 de setembro de 1988 e promulgada em 5 de outubro de 1988.\n[…]\nO presidente, entretanto, morreu antes de assumir o cargo. Ficou nas mãos de José Sarney assumir o Palácio do Planalto e instalar a Assembleia. Os trabalhos da Constituinte duraram 20 meses, sendo encerrados em 22 de setembro de 1988, após a votação e aprovação do texto final da nova Constituição brasileira. Participaram de sua elaboração 559 parlamentares (72 senadores e 487 deputados federais), com intensa participação da sociedade. Dos 559 parlamentares, apenas 26 eram mulheres.\n[…]\nEm 29 de outubro de 2013 foi realizada uma sessão especial no Congresso Nacional brasileiro alusiva aos 25 anos da Carta Política com a participação de atores políticos e sociais da época da constituinte e foi entregue a Medalha Ulysses Guimarães para várias personalidades, entre eles, Bernardo Cabral que fora relator na assembleia que construiu o texto constitucional de 1988.\n[…]\nA Constituição de 1988 está dividida em nove títulos; são eles:\n[…]\nA capa da atual Constituição Brasileira foi criada em 1988 pelo artista Cosme Coelho Rocha, tendo sido aprovada por Ulysses Guimarães, \"por sua simplicidade e por seu simbolismo\". Cosme reestilizou a bandeira do Brasil, tornando-a mais simples, sem as estrelas e sem a faixa \"Ordem e Progresso\". Foi colocada no sentido vertical, para transmitir a ideia de algo que estava \"nascendo, começando a crescer\".\n[…]\nAssembleia Nacional Constituinte de 1987\n[…]\nControle de constitucionalidade no Brasil\n[…]\nSímbolos do Brasil\n[…]\nConstituição da República Federativa do Brasil de 1988"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Fordlândia",
      "descricao": "Cidade-empresa construída nos anos 1920 às margens do rio Tapajós, no Pará, para a produção de borracha."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Nos anos 1920, qual empresário americano criou uma cidade inteira na Amazônia paraense para produzir borracha?",
    "resposta": "Henry Ford",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Fordlândia",
      "https://en.wikipedia.org/wiki/Fordlândia"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Fordlândia",
        "situacao": "ok",
        "texto": "Fordlândia é um distrito brasileiro de 14 568 km² de extensão, no município paraense de Aveiro, situado às margens do Rio Tapajós, na Amazônia. Recebeu este nome porque foi uma cidade operária do projeto agroindustrial \"Fordlândia\" do empresário estadunidense Henry Ford em 1927.\n[…]\nOs termos da concessão, proposta pelo então governador Dionísio Bentes, isentavam a Companhia Ford do Brasil pagamento de qualquer taxa de exportação dos bens produzidos na gleba (borracha, látex, pele, couro, petróleo, sementes, madeira e outros). Jorge Dumont Villares, representante do governador, conduziu as negociações em visita a Henry Ford nos EUA, enquanto no Brasil \"O. Z. Ide\" e \"W. L. Reeves Blakeley\" representaram a Ford.\n[…]\nNa literatura, o historiador da Universidade de Nova Iorque Greg Grandin lançou o livro Fordlândia – A Ascensão e a Queda da Cidade Perdida na Selva de Henry Ford, considerado um dos cem melhores livros publicados em 2009 (no ranking do The New York Times). Além disso, um documentário sobre a cidade também foi desenvolvido pelos brasileiros Marinho Andrade e Daniel Augusto.\n[…]\nGaley, John (1979), «Industrialist in the Wilderness: Henry Ford's Amazon Venture», Journal of Interamerican Studies and World Affairs, ISSN 0022-1937, 21 (2): 261-89 .\n[…]\nGrandin, Greg (2009), Fordlandia: The Rise and Fall of Henry Ford's Forgotten Jungle City, ISBN 0-80508236-0 .\n[…]\nFordlandia: The Rise and Fall of Henry Ford’s Forgotten Jungle City, video e discussão - Democracy Now, postado em 2 de julho de 2009 (transcrição avaliada).\n[…]\nFordlandia on Flickr, imagens históricas por Benson Ford Research Center, biblioteca localizada no the Henry Ford Museum.\n[…]\n\"Deep in Brazil’s Amazon, Exploring the Ruins of Ford’s Fantasyland,\" by SIMON ROMERO, The New York Times, Feb. 20, 2017"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Fordlândia",
        "situacao": "ok",
        "texto": "Fordlândia is a district and adjacent area of 14,268 square kilometres (5,509 sq mi) in the city of Aveiro, Pará, Brazil. It is located on the east banks of the Tapajós river roughly 300 kilometres (190 mi) south of the city of Santarém.\n[…]\nIt was established by American industrialist Henry Ford in the Amazon rainforest in 1928 as a prefabricated industrial town intended to be inhabited by 10,000 people to secure a source of cultivated rubber for the automobile manufacturing operations of the Ford Motor Company in the United States.\n[…]\nIn spite of the huge investment and numerous invitations, Henry Ford never visited either of his ill-fated towns. A 2009 NPR article reported, \"Not one drop of latex from Fordlândia ever made it into a Ford car\".\n[…]\nIn 2009, Greg Grandin published his non-fiction account Fordlandia: The Rise and Fall of Henry Ford's Forgotten Jungle City, and Montreal artist Scott Chandler produced photos.\n[…]\nIn the PC game The Amazon Trail, the player travels back in time to meet Henry Ford there.\n[…]\nBraudeau, Michel (2004). \"Henry Ford vaincu par la « rouille »\". Le rêve amazonien [Henry Ford defeated by 'rust'] (in French). éditions Gallimard. ISBN 2-07-077049-4.\n[…]\nColón, Marcos (2018). Beyond Fordlândia: An Environmental Account of Henry Ford's Adventures in the Amazon. Amazônia Latitude Films.\n[…]\nGrandin, Greg (2009). Fordlandia: The Rise and Fall of Henry Ford's Forgotten Jungle City. Metropolitan Books. ISBN 978-0805082364.\n[…]\nFordlandia: The Rise and Fall of Henry Ford’s Forgotten Jungle City - Democracy Now, broadcast 2 July 2009, Video and Discussion (transcript available).\n[…]\nFordlandia on Flickr - Historic images from the Benson Ford Research Center, a library and archive located at the Henry Ford Museum."
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Parque Indígena do Xingu",
      "descricao": "Território indígena criado em 1961 no norte do Mato Grosso, onde vivem vários povos da bacia do rio Xingu."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Quais irmãos sertanistas lideraram a luta pela criação do Parque Indígena do Xingu, em 1961?",
    "resposta": "Irmãos Villas-Bôas",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Irmãos_Villas-Bôas",
      "https://en.wikipedia.org/wiki/Xingu_Indigenous_Park"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Irmãos_Villas-Bôas",
        "situacao": "ok",
        "texto": "Os Irmãos Villas-Bôas, Orlando (1914-2002), Cláudio (1916-1998) e Leonardo Villas-Bôas (1918-1961), foram importantes sertanistas brasileiros.\n[…]\nComo decorrência dos esforços envidados pelos irmãos Villas-Bôas e pelo auxílio das personalidades citadas, foi criado, em 1961, o Parque Nacional do Xingu, a mais importante reserva indígena das Américas.\n[…]\nAo contrário, a partir dos contatos e das relações privilegiadas que tiveram com as populações indígenas do Xingu, os irmãos Villas-Bôas puderam apreender toda a riqueza cultural das mesmas, o que os levou a defender não apenas a sua integridade física, mas também sua integridade cultural.\n[…]\nEm oposição à filosofia dos irmãos Villas-Bôas era um segundo modelo de política indigenista que foi desenvolvido pelo Serviço de Proteção ao Índio Brasileiro nos últimos anos de sua existência e, posteriormente, assumido pela FUNAI.\n[…]\nNo aspecto dos índios, os irmãos Villas-Bôas implantaram uma nova política indigenista, que, basicamente, consiste na defesa dos valores culturais dos índios, como único meio de evitar a marginalização e o desaparecimento dos grupos tribais. A partir da máxima segundo a qual “O índio só sobrevive na sua própria cultura”, os irmãos Villas-Bôas conseguiram implantar uma nova forma de relacionamento entre nossa sociedade e as comunidades indígenas brasileiras.\n[…]\n1961\t  Criação do Parque Indígena do Xingu e morte de Leonardo Villas-Bôas, de miocardite reumática\n[…]\nEm abril de 2012 foi lançado o longa-metragem Xingu, sobre a vida dos três irmãos. Os irmãos Villas-Bôas foram interpretados por Felipe Camargo, João Miguel e Caio Blat. Cao Hamburger dirigiu o longa."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Xingu_Indigenous_Park",
        "situacao": "ok",
        "texto": "The Xingu Indigenous Park (Parque Indígena do Xingu, pronounced [ʃĩˈɡu]) is an indigenous territory of Brazil, first created in 1961 as a national park in the state of Mato Grosso, Brazil. Its official purposes are to protect the environment and the several nations of Xingu Indigenous peoples in the area.\n[…]\nThe first explorer to contact and write about the people of the region was the German anthropologist Karl von den Steinen in the 1880s, followed by short visits by other anthropologists and government surveyors. But the first outside permanent residence there was by the São Paulo brothers Orlando and Claudio Villas-Bôas, from 1947 to 1976. They devised a new system for helping indigenous peoples, as friends, helpers and equals rather than as colonialist officials.\n[…]\nLeaders of Xingu indigenous groups such as Aritana Yawalapiti and Raoni Metuktire, both trained by the Villas-Bôas brothers, are now spokesmen for all Brazil's indigenous peoples on a world stage. Ever since the late 1970s the Director of the Xingu Indigenous Park has been indigenous, chosen by the area's chiefs.\n[…]\nIn the sixty years after contact with Von den Steinen, the Xingu peoples had been struck by alien diseases such as measles and influenza that reduced their small populations by two-thirds. The Villas-Bôas brothers completely reversed this decline through an agreement with Professor Roberto Baruzzi of a São Paulo teaching hospital, whereby for over fifty years teams of volunteer doctors have inoculated and tended the Xingu peoples to the highest medical standards.\n[…]\nInterview with Orlando Villas Boas on the history of the park Archived 2012-04-30 at the Wayback Machine (in Portuguese)\n[…]\n(in English) \"Indigenous Park of the Xingu Archived 2022-12-06 at the Wayback Machine\", Instituto Socioambiental"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "14-bis",
      "descricao": "Avião de Alberto Santos-Dumont que voou em Paris em 1906."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O avião 14-bis ganhou esse nome porque foi testado pendurado em qual outro invento de Santos-Dumont?",
    "resposta": "Dirigível número 14",
    "fonte": [
      "https://pt.wikipedia.org/wiki/14-bis",
      "https://en.wikipedia.org/wiki/Santos-Dumont_14-bis"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/14-bis",
        "situacao": "ok",
        "texto": "14-bis, também conhecido como Oiseau de Proie (francês para “ave de rapina”), foi um avião construído pelo inventor brasileiro Alberto Santos Dumont que em 12 de novembro de 1906 conquistou o Prêmio Archdeacon e o Prêmio do Aeroclube da França ao realizar um voo de 220 metros em Paris.\n[…]\nA concepção do 14-bis é uma síntese de ideias. Sua estrutura celular de biplano foi diretamente inspirada nas pipas-caixa (box kites) do inventor australiano Lawrence Hargrave, conhecidas por sua notável estabilidade aerodinâmica. O nome \"14-bis\" (ou \"14-de novo\") surgiu de sua concepção inicial. Santos Dumont primeiro testou o aeroplano acoplado ao seu dirigível Nº 14 em meados de 1906.\n[…]\nA ideia era que o balão, preenchido com hidrogênio, compensasse o peso da máquina, facilitando os testes de controle e estabilidade. A aeronave era, literalmente, um \"anexo\" do dirigível 14. No entanto, o enorme arrasto aerodinâmico do balão impedia que o avião ganhasse velocidade, tornando o sistema inviável para o voo autônomo.\n[…]\nA jornada do 14-bis até o voo foi uma série de testes públicos, erros e modificações rápidas.\n[…]\nPrimeiros Saltos (Agosto-Setembro de 1906): Após abandonar o balão Nº 14, Santos Dumont realizou os primeiros testes no solo em Bagatelle. Em 13 de setembro, com o motor de 24 hp, conseguiu um \"salto\" de 7 a 11 metros, que terminou com o trem de pouso danificado. Ele então instalou o motor mais potente de 50 hp e rebatizou a aeronave de Oiseau de Proie.\n[…]\nCerimônia de Abertura das Olimpíadas Rio 2016: O 14-bis teve um papel de destaque na Cerimônia de abertura dos Jogos Olímpicos de Verão de 2016, com uma réplica \"voando\" sobre o estádio do Maracanã em uma homenagem a Santos Dumont como um dos grandes inventores do Brasil.\n[…]\nVoo da réplica do 14-bis em Brasília (2006) no YouTube"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Santos-Dumont_14-bis",
        "situacao": "ok",
        "texto": "The 14-bis (French: Quatorze-bis; (Portuguese: Quatorze-bis; English: Fourteen-again, approximating \"14B\"), also known as Oiseau de proie (\"bird of prey\" in French), was a pioneer era, canard-style biplane designed and built by Brazilian aviation pioneer Alberto Santos-Dumont. In 1906, near Paris, the 14-bis made a manned powered flight that was the first to be publicly witnessed by a crowd and al\n[…]\nOn the morning of 12 November 1906 the aviation community of France assembled at the Château de Bagatelle's grounds to witness Santos-Dumont's next attempt. As Santos-Dumont allowed the 14-bis to run down the field, a car drove alongside, from which Henry Farman dropped a plate each time he observed the wheels of the aircraft leave the ground or touch down again.\n[…]\nThe Santos-Dumont 14-bis did not use a catapult and ran on wheels located at the back of the aircraft – said to have been adopted by Santos-Dumont for his 14-bis after personally witnessing Traian Vuia's contemporary, four-wheeled aircraft's flight attempts earlier in 1906 in the western suburbs of Paris, not far from the Château de Bagatelle's grounds – with a \"nose-skid\" under the front of the 14-bis' fuselage.\n[…]\nFurthermore, written and photographic documentation by the Wrights authenticated by historians shows that the 1903 Wright Flyer accomplished takeoffs in a strong headwind without a catapult and made controlled and sustained flight; nearly three years before Santos-Dumont made his first heavier-than-air takeoff. In addition, although the Hargrave cells gave the 14-bis lateral stability, there was no lateral control, which is required for making turns, rolling, and banking.\n[…]\nBitencourt; Pogorzelski; Freitas; Azevedo (2011). \"A CFD-based Analysis of the 14-Bis Aircraft Aerodynamics and Stability\". J. Aerosp. Technol. Manag. 3 (2): 137–146. doi:10.5028/jatm.2011.03021711.\n[…]\nSantos-dumont.net"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Duque de Caxias",
      "descricao": "Luís Alves de Lima e Silva, militar do Império do Brasil, o Pacificador, patrono do Exército."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O título de Caxias, dado a Luís Alves de Lima e Silva, vem de uma cidade onde ele sufocou uma revolta. Em que estado ela fica?",
    "resposta": "Maranhão",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Luís_Alves_de_Lima_e_Silva",
      "https://pt.wikipedia.org/wiki/Balaiada"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Luís_Alves_de_Lima_e_Silva",
        "situacao": "ok",
        "texto": "Luís Alves de Lima e Silva, Duque de Caxias (Magé, 25 de agosto de 1803 – Valença, 7 de maio de 1880), apelidado de \"O Pacificador\" e \"O Marechal de Ferro\", foi um militar, político e monarquista brasileiro. Caxias seguiu uma carreira militar, assim como seu pai e tios. Lutou em 1823 contra Portugal na Independência do Brasil e depois passou três anos na Cisplatina enquanto o governo tentou resist\n[…]\nEle foi promovido a coronel em 2 de dezembro de 1839 e enviado pelo gabinete Regressista para a província do Maranhão, a fim de suprimir uma revolta que ficou conhecida como Balaiada. Luís Alves foi nomeado para as posições civil e militar mais altas da província: presidente e comandante das armas, tendo assim autoridade sobre as unidades provinciais da Guarda Nacional e do exército (restaurado para sua força total pelo gabinete Regressista).\n[…]\nLuís Alves chegou em São Luís no dia 4 de fevereiro de 1840 e, depois de vários confrontos, derrotou os rebeldes. Por suas realizações foi promovido em 18 de julho de 1841 a brigadeiro e elevado por Pedro II para o título de Barão de Caxias. Luís Alves recebeu a rara honra de poder escolher o nome de seu título; ele decidiu celebrar sua recaptura da cidade de Caxias, a segunda cidade mais rica do Maranhão, que havia caído nas mãos dos rebeldes.\n[…]\nCaxias (como Luís Alves ficou conhecido) voltou do Maranhão e logo percebeu que o clima político havia mudado. O Partido Liberal de Francisco de Lima havia conseguido em 23 de julho de 1840 a declaração prematura da maioridade do imperador, o chamado Golpe da Maioridade.\n[…]\nDossiê com documentos Memória do Mundo sobre o Duque de Caxias\n[…]\n«Fala que recitou o exmo. presidente e comandante das armas da província do Maranhão, o coronel Luís Alves de Lima e Silva, na abertura da Assembléia Legislativa Provincial no dia 3 de maio de 1840.»  Disponibilizado pelo Center for Research Libraries."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Balaiada",
        "situacao": "ok",
        "texto": "A Balaiada, chamada ainda Guerra dos Bem-te-vis, foi uma revolta popular e social ocorrida no estado brasileiro do Maranhão entre os anos de 1838 e 1841 (uma das mais longas e numerosas revoltas, com início em 13 de dezembro de 1838). Os primeiros indícios da revolta ecoaram da então vila da Manga do Iguará, também conhecida simplesmente Manga (atual cidade de Nina Rodrigues), na região do Maranhã\n[…]\nA Balaiada terminou oficialmente em 4 de março de 1841, quando o governo imperial conseguiu sufocar a revolta no Maranhão. O conflito foi pacificado após a nomeação do coronel Luís Alves de Lima e Silva (futuro Duque de Caxias) como comandante das forças imperiais. Ele conseguiu restaurar a ordem na região, combinando estratégias de repressão militar e negociações com os líderes revoltosos. Porém, a paz só foi alcançada quando o Imperador do Brasil concedeu anistia geral aos últimos rebeldes.\n[…]\nQuando não havia mais como defender a vila, o Capitão Sabino simulou haver aderido à revolta, mas disparou um canhão, causando pânico entre os balaios, resultando na evacuação da vila. Esta vitória animou o partido dos Bem-te-vi, que enviou emissários à capital São Luís, pedindo a rendição ao presidente do Maranhão.\n[…]\nPara combater a situação, a Regência enviou ao Maranhão, como Presidente e Comandante das Armas da Província o coronel Luís Alves de Lima e Silva, que tinha experiência militar por ter lutado na Guerra de Independência e na Guerra da Cisplatina, de 1825 a 1828. Ele recebeu o comando de todas as tropas em operação no Maranhão, Piauí e Ceará, e assumiu o comando em 7 de fevereiro de 1840.\n[…]\nEm 23 de agosto de 1840, quando foi proclamada a maioridade do imperador Dom Pedro II, Lima e Silva anunciou aos maranhenses a quase extinção da guerra civil.\n[…]\nLima e Silva receberia, mais tarde, o título de Barão de Caxias por esta campanha."
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Estrada de Ferro Madeira-Mamoré",
      "descricao": "Ferrovia construída entre 1907 e 1912 em Rondônia, ligando Porto Velho a Guajará-Mirim."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Pelas milhares de mortes de trabalhadores durante a construção, a ferrovia Madeira-Mamoré, em Rondônia, ganhou qual apelido?",
    "resposta": "Ferrovia do Diabo",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Estrada_de_Ferro_Madeira-Mamoré",
      "https://en.wikipedia.org/wiki/Madeira-Mamoré_Railroad"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Estrada_de_Ferro_Madeira-Mamoré",
        "situacao": "ok",
        "texto": "Estrada de Ferro Madeira-Mamoré (EFMM) é uma ferrovia no atual estado de Rondônia, no Brasil, considerada um ícone ferroviário mundial.\n[…]\nO primeiro projeto de construção de uma ferrovia na região dos rios Madeira e Mamoré teve início no dia 10 de outubro de 1867 – em meio à Guerra do Paraguai, durante a qual o Governo Imperial já percebendo as dificuldades nas comunicações territoriais autorizou o livre comércio na região à Bolívia e iniciava às pressas o desenvolvimento da estrada de ferro – quando o então ministro da Agricultura, Manuel Pinto de Sousa Dantas, incumbiu os engenheiros José e Francisco Keller de planejarem uma estrada de ferro na região das cachoeiras do rio Madeira.\n[…]\nMesmo com todos os esforços, foram registradas 1.522 mortes no Hospital da Candelária, e um total estimado de seis mil mortos (do total de cerca de trinta mil trabalhadores contratados pela empreiteira, autônomos e sub-empreiteiros) ao longo dos cinco anos de duração da construção da ferrovia; o que contribuiu para o surgimento da alcunha Ferrovia do Diabo, de acordo com a lenda popular de possuir a linha férrea um homem morto para cada dormente assentado.\n[…]\nDurante a 2ª Guerra Mundial, a Estrada de Ferro Madeira-Mamoré voltou a ter grande valor estratégico para o Brasil, operando plenamente para suprir o transporte de borracha, utilizada no esforço de guerra aliado. Em 1957, quando ainda registrava um intenso tráfego de passageiros e cargas, a ferrovia integrava as dezoito empresas constituintes da Rede Ferroviária Federal.\n[…]\n«Estrada de Ferro Madeira-Mamoré.»\n[…]\nFotografias da construção da Estrada de Ferro Madeira-Mamoré"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Madeira-Mamoré_Railroad",
        "situacao": "ok",
        "texto": "The Madeira-Mamoré Railroad is an abandoned railroad built in the Brazilian state of Rondônia between 1907 and 1912, during the rubber boom. The railroad links the cities of Porto Velho and Guajará-Mirim. It became known as the \"Devil's Railroad\" because thousands of construction workers died from tropical diseases and violence.\n[…]\nA successful bid to build the railroad began with the Treaty of Petrópolis (1903) whereby Bolivia gave Brazil the territory of Acre (191,000 km²), in exchange for Brazilian territory, a monetary payment, and a pledge that Brazil would build a rail link to bypass the rapids on the Madeira river. Construction began in 1907, and on April 30, 1912, the final leg of the Madeira-Mamoré Railway was inaugurated. The Chief Accountant from Oct 1911 - Sept 1913 was Mark E. Smith.\n[…]\nBy comparison, construction of the Panama Canal claimed 30,609 lives (5609 workers died during the 10 year US management, the remainder perished while under the jurisdiction of France) because of yellow fever. However, much of the \"devil's railroad\" legend is based on the much deadlier failed attempts by George Church, and on the Brazilian rubber boom itself, which cost tens of thousands of lives.\n[…]\nNeeleman, Gary  and Rose Neeleman. Tracks in the Amazon: The Day-to-Day Life of the Workers on the Madeira-Mamoré Railroad. Salt Lake City: University of Utah Press, 2013. ISBN 978-1-60781-275-3\n[…]\nRalph Anderson Bennitt: The Madeira-Mamoré Railway. Archived 2019-05-08 at the Wayback Machine 1913.\n[…]\nNeville B. Craig (1847-1926) in cooperation with members of the Madeira and Mamore of Philadelphia. \"Recollections of an Ill-Fated Expedition to the Headwaters of the Madeira River in Brazil\". Philadelphia & London: J.B.Lippincott Company, 1907. Library of Congress Call Number HE2930.M2 C82. LCCN Number 07-29709"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Rui Barbosa",
      "descricao": "Jurista, político e diplomata baiano, primeiro ministro da Fazenda da República e delegado do Brasil na Conferência de Haia de 1907."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Por sua atuação na Conferência de Paz de 1907, na Holanda, Rui Barbosa ganhou qual apelido?",
    "resposta": "Águia de Haia",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Rui_Barbosa"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Rui_Barbosa",
        "situacao": "ok",
        "texto": "Rui Barbosa de Oliveira (Salvador, 5 de novembro de 1849 – Petrópolis, 1 de março de 1923) foi um político, jurista, advogado, diplomata, escritor, filólogo, jornalista, tradutor e orador brasileiro. Um dos intelectuais mais conhecidos do seu tempo, foi designado por Deodoro da Fonseca como representante do nascente governo republicano, tornando-se um de seus principais organizadores, além de coau\n[…]\nNotável orador e estudioso da língua portuguesa, foi membro fundador da Academia Brasileira de Letras (1897), ocupando a cadeira n.º 10, e seu presidente entre 1908 e 1919. Como delegado do Brasil na II Conferência da Paz, em Haia (Holanda, 1907), notabilizou-se pela defesa do princípio da igualdade dos Estados. Por sua atuação nessa conferência, recebeu do Barão do Rio Branco o epíteto de \"O Águia de Haia\". Teve papel decisivo na entrada do Brasil na Primeira Guerra Mundial.\n[…]\nEm junho de 1907, Rui vai à Conferência da Haia atendendo ao convite do então ministro das Relações Exteriores, Barão do Rio Branco, sendo esta a sua consagração mundial. Sobre isso escreveu o jornalista William Thomas Stead: \"As duas maiores forças pessoais da Conferência foram o Barão Marschall da Alemanha, e o Dr. Barbosa, do Brasil… Todavia ao acabar da conferência, Dr. Barbosa pesava mais do que o Barão de Marschall\".\n[…]\nRio Branco sugeriu que os dois formassem a delegação, que chamou de \"delegação das águias\" em referência ao \"ministério das águias\" – 21º Gabinete Conservador de Pedro de Araújo Lima, Marquês de Olinda – assim chamado por Joaquim Nabuco em virtude da experiência dos ministros que o compuseram. Nabuco não aceitou o convite e Rui, depois de sua atuação, passou à história como o \"Águia de Haia\".\n[…]\nGoverno Provisório dos Estados Unidos do Brasil. Relatório do Ministro da Fazenda Rui Barbosa. Em janeiro de 1891\n[…]\nA escultura Cabeça de Rui Barbosa e seu criador Mário Cravo Junior. Foto: Arquivo MCJ"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Descobrimento do Brasil",
      "descricao": "Chegada da frota portuguesa de Pedro Álvares Cabral ao litoral da Bahia, em abril de 1500."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Em 1500, que primeiro nome os portugueses deram à terra encontrada pela frota de Cabral?",
    "resposta": "Ilha de Vera Cruz",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Descobrimento_do_Brasil",
      "https://en.wikipedia.org/wiki/Name_of_Brazil"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Descobrimento_do_Brasil",
        "situacao": "ok",
        "texto": "Descoberta do Brasil ou descobrimento do Brasil é a designação tradicional do episódio da chegada da armada comandada por Pedro Álvares Cabral ao litoral da América do Sul em 1500, evento que resultou na incorporação do território à esfera de domínio do Reino de Portugal e marcou o início da presença europeia contínua na região que viria a constituir o Brasil.\n[…]\nO avistamento da costa ocorreu nas imediações do Monte Pascoal, sendo a nova terra denominada inicialmente Ilha de Vera Cruz e, posteriormente, Terra de Santa Cruz. A data tradicional de 22 de abril de 1500 baseia-se na Carta de Pero Vaz de Caminha, quando prevalecia o calendário Juliano, e corresponde a 3 de maio de 1500 no calendário gregoriano.\n[…]\nA presença da Terra de Santa Cruz na cartografia tão pouco tempo após a viagem demonstra que o conhecimento geográfico não permaneceu restrito à Coroa portuguesa, apesar das tentativas de controle das informações consideradas estratégicas. Mapas como o de Juan de la Cosa, de 1500, já registravam a costa setentrional da América do Sul explorada por navegadores castelhanos, indicando a simultaneidade das explorações ibéricas no Atlântico.\n[…]\nEntre as obras mais influentes destaca-se Desembarque de Cabral em Porto Seguro (1904), de Oscar Pereira da Silva, que apresenta a chegada dos portugueses como um encontro pacífico e hierarquizado, com destaque para a presença simbólica da cruz e para a centralidade da autoridade europeia. Essa composição visual dialoga com o projeto político e cultural do período, marcado pela busca de uma narrativa de origem harmoniosa para o país.\n[…]\nEra dos Descobrimentos\n[…]\nDescoberta marítima do Brasil por Pedro Álvares Cabral, por António Ferronha, RDP Internacional, 1998\n[…]\nA chegada ao Brasil, por Pêro Vaz de Caminha, Cuidado com a Língua! (Extrato de Programa), por José Mário Costa, até ao Fim do Mundo"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Name_of_Brazil",
        "situacao": "ok",
        "texto": "The name Brazil is a shortened form of Terra do Brasil (\"Land of Brazil\"), a reference to the brazilwood tree. The name was given in the early 16th century to the territories leased to the merchant consortium led by Fernão de Loronha, to exploit brazilwood for the production of wood dyes for the European textile industry.\n[…]\nThe land of what became Brazil was first called Ilha de Vera Cruz (\"Island of the True Cross\") by the Portuguese captain Pedro Álvares Cabral upon the Portuguese discovery of the land in 1500, probably in honor of the Feast of the Cross (3 May on the liturgical calendar).\n[…]\nThe 1516 map of Martin Waldseemüller drops his earlier America designation and refers to it now as Brasilia sive Terra Papagalli (\"Brasilia, or the Land of Parrots\").\n[…]\nThe Santa Cruz (\"Holy Cross\") name did not disappear altogether. In the 1527 map of the Visconte Maggiolo it re-appears in the dual label Terre Sante Crusis de lo Brasil e del Portugal (\"Land of the Holy Cross of Brazil and of Portugal\"). Years later, in 1552, the chronicler João de Barros grumbled at the change in name.\n[…]\nBarros notes how, before leaving in 1500, Pedro Álvares Cabral erected a huge wooden cross as the marker of the land, but that later, because brazilwood was brought from this land, \"this name (Brazil) became stuck in the mouth of the people, and the name Santa Cruz was lost, as if the name of some wood which tinctured cloths was more important than that wood which has tinctured all the Sacraments by which we were saved, by the blood of Jesus Christ, which was spilled upon it.\" Barros goes on to moan that he can do little but remind his readers of the solemnity of the original name and urge them to use it lest, on Judgment Day, \"they be accused of being worshipers of brazilwood\" rather than worshipers of the Holy Cross."
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Florianópolis",
      "descricao": "Capital de Santa Catarina, cidade situada principalmente na ilha de Santa Catarina, antes chamada Desterro."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Em 1894, a cidade de Desterro, capital de Santa Catarina, mudou de nome para homenagear qual presidente?",
    "resposta": "Floriano Peixoto",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Florianópolis",
      "https://en.wikipedia.org/wiki/Florianópolis"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Florianópolis",
        "situacao": "ok",
        "texto": "Florianópolis, conhecido coloquialmente como Floripa, é a capital do estado brasileiro de Santa Catarina, na região Sul do país. Florianópolis é também apelidado de \"Ilha da Magia\", decorrente de seus folclóricos contos e histórias de bruxas e criaturas mágicas que habitam na ilha, popularizados pelo escritor Franklin Cascaes.\n[…]\nCom o fim da Revolução Federalista, em 1894, em homenagem ao então presidente da República Floriano Peixoto, o governador do estado, Hercílio Luz, mudou o nome para Florianópolis. A escolha do nome foi, contudo, uma afronta à própria população desterrense, pois Floriano Peixoto não era uma autoridade com popularidade na cidade e enfrentou grande resistência de seu governo em Desterro.\n[…]\nEm 1737, devido à sua posição estratégica para os domínios portugueses no sul do Brasil, iniciou-se uma ocupação militar da vila de Nossa Senhora do Desterro, liderada pelo brigadeiro José da Silva Pais, nomeado, em 1739, primeiro governador da Capitania de Santa Catarina.\n[…]\nEm 1893, chegou a Desterro, com o apoio da população local, a Revolução Federalista, contra o governo do presidente da República Floriano Peixoto, liderada na cidade por Elesbão Pinto da Luz. A revolta foi reprimida e seus participantes, fuzilados, junto com civis, por ordem do presidente brasileiro na Fortaleza de Santa Cruz de Anhatomirim em abril de 1894, no episódio conhecido como massacre do Anhatomirim.\n[…]\nDevido à vitória das forças federais, em 1º de outubro de 1894, o então governador de Santa Catarina, Hercílio Luz, sancionou a Lei Estadual nº 111, que alterou o nome de Desterro para Florianópolis, em homenagem a Floriano Peixoto. Em 1898, foi fundado um importante colégio pela Congregação das Irmãs da Divina Providência, o Colégio Coração de Jesus.\n[…]\nAs Cidades irmãs de Florianópolis são:\n[…]\n«Florianópolis no WikiMapia»"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Florianópolis",
        "situacao": "ok",
        "texto": "Florianópolis (English:  FLOR-ee-ə-NOP-əl-iss, Brazilian Portuguese: [floɾiaˈnɔpolis]) is the capital and second largest city of the state of Santa Catarina, in the South Region of Brazil. The city encompasses Santa Catarina Island and surrounding small islands, as well as part of the mainland. It has a population of 537,211, according to the 2022 Brazilian census, the second-most populous city in\n[…]\nThe name Florianópolis is a tribute to Marshal Floriano Peixoto, the second President (1891–1894) of the Republic of the United States of Brazil and from Greek term polis, meaning \"city\". Until 1893, the city was called Nossa Senhora do Desterro (Portuguese: [ˈnɔsɐ siˈɲɔɾɐ du desˈteʁu] or [dʒisˈteʁu]; lit. 'Our Lady of Banishment') or simply Desterro.\n[…]\nRegional elites, unhappy with the government centralization, staged the Federalist Revolt at the beginning of the Brazilian Republic. The movement that started in Rio Grande do Sul spread to Santa Catarina and turned Desterro into the Federalist Capital of the Republic. The then president of Brazil, Marshal Floriano Peixoto, known as the Iron Marshal, suppressed the rebellion and ordered the shooting of many people who were considered enemies of the state, in the Anhatomirim Island Fortress.\n[…]\nPossibly to show loyalty to the marshal, 1893 saw the change of the state capital's name: from Desterro to Florianópolis, that is to say, the city of Floriano.\n[…]\nThe Florianópolis Air Space Control Detachment is responsible for controlling the aircraft that cross, arrive, or leave the capital of the state of Santa Catarina, as well as for the production and dissemination of meteorological and aeronautical information, using a wide range of equipment. Detection and communications, in addition to specialized and qualified personnel.\n[…]\nThe following countries have consular representations in Florianópolis:\n[…]\nFlorianópolis is twinned with:"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Dia do Fico",
      "descricao": "Episódio de 9 de janeiro de 1822 em que o príncipe regente Dom Pedro anunciou que permaneceria no Brasil."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "No Dia do Fico, em 1822, o príncipe Dom Pedro desobedeceu às Cortes de Lisboa. O que elas exigiam dele?",
    "resposta": "Que voltasse a Portugal",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Dia_do_Fico"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Dia_do_Fico",
        "situacao": "ok",
        "texto": "Dia do Fico refere-se ao episódio ocorrido em 9 de janeiro de 1822, quando o então príncipe regente Pedro de Alcântara anunciou que permaneceria no Brasil, contrariando as determinações das Cortes portuguesas, que exigiam seu retorno a Lisboa. O evento é considerado um marco no processo político que culminou na Independência do Brasil.\n[…]\nCom a transferência da corte portuguesa para o Brasil em 1808, o território americano passou a desempenhar papel central na administração do Império Português, sendo elevado à condição de reino em 1815, no contexto da criação do Reino Unido de Portugal, Brasil e Algarves.\n[…]\nEm 1821, eclodiu a Revolução liberal do Porto, movimento que resultou na convocação das Cortes com o objetivo de elaborar uma Constituição. Nesse contexto, o rei João VI retornou à Europa, deixando seu filho, Pedro de Alcântara, na condição de príncipe regente no Brasil.\n[…]\nAs Cortes portuguesas emitiram diversas determinações ao príncipe regente, entre as quais se destacava a exigência de seu retorno imediato a Portugal, bem como a instituição de uma junta governativa para administrar o Brasil.\n[…]\nA decisão do príncipe regente contribuiu para o acirramento das tensões políticas entre os setores favoráveis à manutenção dos vínculos com Portugal e aqueles que defendiam maior autonomia administrativa e política para o Brasil.\n[…]\nEsse conjunto de eventos integrou o processo que culminou na Independência do Brasil, proclamada em 7 de setembro de 1822.\n[…]\nSegundo Laurentino Gomes, o episódio teve papel central na consolidação da liderança política de Pedro de Alcântara e na aceleração do processo de ruptura entre Brasil e Portugal.\n[…]\nGomes, Laurentino (dezembro de 2010). «O dia do vou: o que aconteceria se dom Pedro tivesse voltado para Portugal em 1822?». Aventuras na História (89): 32–33"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Frei Caneca",
      "descricao": "Joaquim do Amor Divino Rabelo, frade carmelita pernambucano e líder da Confederação do Equador, executado em 1825."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Condenado à forca por liderar a Confederação do Equador, Frei Caneca acabou fuzilado em 1825. Por quê?",
    "resposta": "Nenhum carrasco aceitou enforcá-lo",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Frei_Caneca"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Frei_Caneca",
        "situacao": "ok",
        "texto": "Joaquim da Silva Rabelo, depois Frei Joaquim do Amor Divino Rabelo, popularmente conhecido como Frei Caneca (Recife, 20 de agosto de 1779 — Recife, 13 de janeiro de 1825), foi um escritor, clérigo católico e político brasileiro. Esteve implicado na Revolução Pernambucana (1817) e foi líder e mártir da Confederação do Equador (1824). Como jornalista, esteve à frente do Typhis Pernambucano.\n[…]\nA 13 de janeiro de 1825, foi armado o espetáculo do enforcamento diante dos muros do Forte das Cinco Pontas. Despojado do hábito religioso, ou seja, \"desautorado das ordens\" na igreja do Terço, na forma dos sagrados cânones\", ainda assim tendo três carrascos que se recusaram a enforcá-lo.\n[…]\nA Comissão Militar ordenou seu arcabuzamento (Ação ou efeito de assassinar ou machucar através de tiros), (\"visto não poder ser enforcado pela desobediência dos carrascos\"), atado a uma das hastes da forca, por um pelotão sob o comando do mesmo oficial. Seu corpo foi colocado num caixão de pinho e deixado no centro do Recife, em frente ao Convento das Carmelitas, junto a uma das portas, de onde os padres o recolheram e enterraram em um local até hoje não identificado.\n[…]\nO poeta e escritor João Cabral de Melo Neto descreveu, em versos, o último dia de Frei Caneca, em sua obra O Auto do Frade. Seu irmão, o historiador Evaldo Cabral de Mello, foi o organizador e redigiu a introdução ao livro Frei Joaquim do Amor Divino Caneca Coleção Formadores do Brasil, Editora 34, Ltda., 2001, intitulada Frei Caneca ou a Outra Independência.\n[…]\nCANECA, frei Joaquim do Amor Divino. Obras políticas e literárias de frei Joaquim do Amor Divino Caneca. Organização de Antônio Joaquim de Melo. Recife: Assembleia Legislativa de Pernambuco, 1972.\n[…]\nCANECA, Frei Joaquim do Amor Divino (1779-1825). Organização e introdução de Evaldo Cabral de Mello. Coleção Formadores do Brasil, 2001."
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Guerra da Cisplatina",
      "descricao": "Guerra entre o Império do Brasil e as Províncias Unidas do Rio da Prata, de 1825 a 1828, pelo controle da Província Cisplatina."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Encerrada em 1828, a Guerra da Cisplatina teve como resultado a independência de qual país sul-americano?",
    "resposta": "Uruguai",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Guerra_da_Cisplatina",
      "https://en.wikipedia.org/wiki/Cisplatine_War"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Guerra_da_Cisplatina",
        "situacao": "ok",
        "texto": "A Guerra da Cisplatina (1825–1828), denominada na historiografia argentina e uruguaia como Guerra do Brasil ou Guerra argentino-brasileira, foi um conflito armado entre o Império do Brasil e as Províncias Unidas do Rio da Prata, com a participação de forças políticas e militares da Banda Oriental, pela posse da Província Cisplatina, território correspondente em grande parte ao atual Uruguai.\n[…]\nO bloqueio naval brasileiro comprometeu as receitas aduaneiras de Buenos Aires, ao passo que os custos financeiros e a impopularidade da guerra agravaram a crise política do Primeiro Reinado. A mediação diplomática do Reino Unido, interessada na manutenção da liberdade de comércio e do equilíbrio regional, conduziu à assinatura da Convenção Preliminar de Paz em 1828, que estabeleceu a independência da região como o Estado Oriental do Uruguai.\n[…]\nAs negociações resultaram na assinatura da Convenção Preliminar de Paz, em 28 de agosto de 1828, pela qual o Brasil e as Províncias Unidas reconheceram a independência da região, que passou a constituir o Estado Oriental do Uruguai.\n[…]\nA Guerra da Cisplatina tem sido objeto de interpretações distintas nas historiografias brasileira, argentina e uruguaia, refletindo os processos de construção das narrativas nacionais e as diferentes leituras sobre a formação do sistema político na bacia do rio da Prata.\n[…]\nNa historiografia uruguaia, a guerra foi tradicionalmente associada ao processo de independência nacional e à atuação dos Trinta e Três Orientais como momento fundador da nacionalidade. Essa leitura conferiu centralidade à mobilização local e à resistência ao domínio brasileiro.\n[…]\nA Guerra da Cisplatina desempenhou papel relevante na construção das memórias nacionais no Brasil, na Argentina e no Uruguai, sendo reinterpretada de acordo com os projetos políticos e identitários de cada país ao longo do século XIX e início do XX.\n[…]\nHistória do Uruguai"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Cisplatine_War",
        "situacao": "ok",
        "texto": "The Cisplatine War was an armed conflict fought in the 1820s between the Empire of Brazil and the United Provinces of the Río de la Plata over control of the Banda Oriental following its annexation by Brazil as the Cisplatina province. It was fought in the aftermath of the United Provinces' and Brazil's independence from Spain and Portugal, respectively, and resulted in the independence of Cisplat\n[…]\nIn Carranza's words, the insurgents' \"crusade\" was \"generously supported by donations from Argentines and Orientals [Uruguayans]\".\n[…]\n1828\n[…]\nThe Argentines gained some notable successes—most notably by defeating the Brazilian flotilla on the Uruguay River at the Battle of Juncal and by beating off a Brazilian attack on Carmen de Patagones. But by 1828, the superior numbers of Brazil's blockading squadrons had effectively destroyed Brown's naval force at the Monte Santiago and was successfully strangling the trade of Buenos Aires and the government revenue it generated.\n[…]\nThe stalemate in the Cisplatine War was caused by the inability of the Argentine and Uruguayan land forces to capture major cities in Uruguay and Brazil, the severe economic consequences imposed by the Brazilian blockade of Buenos Aires, and the lack of manpower for a full-scale Brazilian land offensive against Argentine forces. There was also increasing public pressure in Brazil to end the war. All of this motivated the interest on both sides for a peaceful solution.\n[…]\nGiven the high cost of the war for both sides and the threat it posed to trade between the United Provinces and the United Kingdom, the latter pressed the two belligerent parties to engage in peace negotiations in Rio de Janeiro. Under British mediation, the United Provinces and the Empire of Brazil signed the 1828 Treaty of Montevideo, which acknowledged the independence of Cisplatina under the name Eastern Republic of Uruguay.\n[…]\nArgentina–Uruguay relations"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Maria II de Portugal",
      "descricao": "Rainha de Portugal no século dezenove, filha mais velha de Dom Pedro I e da imperatriz Leopoldina."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Maria Segunda, rainha de Portugal, e Dom Pedro Segundo, imperador do Brasil, reinaram na mesma época. Qual era o parentesco entre eles?",
    "resposta": "Eram irmãos",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Maria_II_de_Portugal",
      "https://en.wikipedia.org/wiki/Maria_II_of_Portugal"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Maria_II_de_Portugal",
        "situacao": "ok",
        "texto": "Maria II (nome completo: Maria da Glória Joana Carlota Leopoldina da Cruz Francisca Xavier de Paula Isidora Micaela Gabriela Rafaela Gonzaga; Rio de Janeiro, 4 de abril de 1819 – Lisboa, 15 de novembro de 1853), cognominada \"a Educadora\" e \"a Boa Mãe\", foi Rainha de Portugal e Algarves em duas ocasiões diferentes, primeiro de 1826 até 1828, quando foi deposta pelo seu tio D.\n[…]\nInicialmente, predominava a expectativa de que D. Maria da Glória, intitulada Princesa da Beira ao nascer, herdasse a Coroa do Brasil, enquanto um eventual irmão do sexo masculino sucederia a D. João VI no trono português. Esse cenário foi alterado com o nascimento de seu irmão D. Pedro, futuro imperador D. Pedro II do Brasil, em 2 de dezembro de 1825.\n[…]\nEm 1821, após a Revolução do Porto, D. João VI retornou a Portugal, enquanto D. Pedro, juntamente com sua esposa e seus filhos, permaneceu no Brasil como Príncipe Regente. No ano seguinte, proclamou a Independência do Brasil e foi aclamado imperador como D. Pedro I. Em decorrência da reorganização da sucessão dinástica, D. Maria da Glória recebeu o título de Princesa Imperial do Brasil, tornando-se a herdeira presuntiva do novo Império brasileiro.\n[…]\nSomente em 1831, após abdicar do trono do Brasil em favor de seu filho, D. Pedro II, D. Pedro I regressou à Europa, acompanhado de sua segunda esposa, Amélia de Leuchtenberg, bem como de D. Maria II, para liderar a campanha liberal destinada a restaurar os direitos da filha e reconquistá-la o trono de Portugal. Renunciando definitivamente às suas pretensões à Coroa portuguesa, assumiu o título de Duque de Bragança e exerceu a Regência em nome de D. Maria II.\n[…]\n6 de março de 1821 – 4 de fevereiro de 1822: Sua Alteza, a Infanta D. Maria da Glória de Portugal\n[…]\nLista de títulos nobiliárquicos atribuídos por Maria II de Portugal\n[…]\nComemorações do bicentenário do nascimento de D. Maria da Glória"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Maria_II_of_Portugal",
        "situacao": "ok",
        "texto": "Dona Maria II (Maria da Glória Joana Carlota Leopoldina da Cruz Francisca Xavier de Paula Isidora Micaela Gabriela Rafaela Gonzaga de Habsburgo-Lorena e Bragança; 4 April 1819 – 15 November 1853) also known as \"the Educator\" (Portuguese: a Educadora) or as \"the Good Mother\" (a Boa Mãe), was Queen of Portugal from 1826 to 1828, and again from 1834 to 1853. Her supporters considered her to be the ri\n[…]\nMost people considered Pedro to be the legitimate heir, but Brazil did not want him to unite the Portuguese and Brazilian thrones again.\n[…]\nMaria and her stepmother crossed from France to England, were received by King William IV and Queen Adelaide at Windsor, and then left for Portugal on a British naval ship, finally arriving in Lisbon for the first time in September 1833. Pedro pursued the war, eventually forcing his brother, Miguel, to abdicate in 1834. Maria was thereupon restored as undisputed queen, and obtained an annulment of her betrothal.\n[…]\nOn 7 February 1833, in order to protect the Queen, the 2nd Lancers Regiment was created, first known as the Regimento de Lanceiros da Rainha (Queen's Lancers Regiment), with the motto Morte ou Glória, \"Death or Glory\" (the same as the 17th Lancers, since Lt. Col. Sir Anthony Bacon was its first commander), a fortunate coincidence since the queen's name was Maria da Glória.\n[…]\nOccupying the Portuguese throne, Maria II was still heir presumptive to her brother Pedro II as Princess Imperial of Brazil, until her exclusion from the Brazilian line of succession by law no. 91 of 30 October 1835.\n[…]\nOn 9 April 1836, Maria married the cultured Prince Ferdinand of Saxe-Coburg and Gotha. In accordance with Portuguese law, he was proclaimed King Dom Fernando II upon the birth of their first child and heir, Pedro.\n[…]\nPortuguese India\n[…]\nPortuguese East Africa\n[…]\nPortuguese Angola\n[…]\nPortuguese Guinea\n[…]\nPortuguese Timor"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "João Goulart",
      "descricao": "Político gaúcho, presidente do Brasil de 1961 a 1964, deposto pelo golpe militar de 1964."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Os presidentes Getúlio Vargas e João Goulart nasceram no mesmo município gaúcho. Qual?",
    "resposta": "São Borja",
    "fonte": [
      "https://pt.wikipedia.org/wiki/João_Goulart",
      "https://pt.wikipedia.org/wiki/Getúlio_Vargas"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/João_Goulart",
        "situacao": "ok",
        "texto": "João Belchior Marques Goulart (São Borja, 1 de março de 1919 – Mercedes, 6 de dezembro de 1976), conhecido popularmente como Jango, foi um advogado, agropecuarista e político brasileiro, que serviu como o 24.º presidente do Brasil, de 7 de setembro de 1961 a 2 de abril de 1964, quando foi deposto por um golpe militar. Anteriormente, foi o 14.º vice-presidente do Brasil, de 31 de janeiro de 1956 a \n[…]\nJoão Goulart nasceu na Estância de Iguariaçá, no então distrito de Itacurubi (hoje município emancipado), em São Borja, Rio Grande do Sul, em 1º de março de 1919. Era filho de Vicente Rodrigues Goulart, um abastado estancieiro e coronel da Guarda Nacional que havia combatido ao lado de Borges de Medeiros na Revolução de 1923, e de Vicentina Marques Goulart, conhecida como \"Dona Vicentina\", uma dona de casa.\n[…]\nRecusando um convite inicial para se filiar ao PSD por intermédio de Protásio Vargas, Jango aceitou, por influência direta de Getúlio, ingressar no recém-fundado Partido Trabalhista Brasileiro (PTB). Tornou-se o primeiro presidente do diretório do PTB em São Borja e, posteriormente, ascenderia à presidência estadual e nacional do partido.\n[…]\nDe Porto Alegre, Jango seguiu para sua fazenda em São Borja e, em 2 de abril, cruzou a fronteira para o Uruguai, iniciando seu exílio.\n[…]\nJoão Goulart faleceu em 6 de dezembro de 1976, aos 57 anos, em sua fazenda \"La Villa\", no município de Mercedes, província de Corrientes, na Argentina. A causa oficial da morte foi um infarto agudo do miocárdio. A pedido da família, não foi realizada autópsia na época, o que alimentou especulações sobre um possível assassinato. Seu funeral em São Borja atraiu cerca de 30 mil pessoas, apesar da censura imposta pela ditadura militar à cobertura do evento.\n[…]\nOs restos mortais de Jango receberam honras de Chefe de Estado em Brasília antes de retornarem a São Borja.\n[…]\nInstituto João Goulart\n[…]\nInstituto João Goulart"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Getúlio_Vargas",
        "situacao": "ok",
        "texto": "Getúlio Dorneles Vargas (São Borja, 19 de abril de 1882 – Rio de Janeiro, 24 de agosto de 1954) foi um militar, advogado e político brasileiro. Foi o presidente do Brasil de 1930 até 1945, durante a Era Vargas, e, posteriormente, de 1951 até o seu suicídio em 1954.\n[…]\nNo dia 29 de outubro de 1945, Getúlio Vargas, como o próprio ressalta em sua carta-testamento, renunciou ante a iminência de ser deposto por um golpe militar, sendo conduzido ao exílio na sua cidade natal, São Borja. No dia 2 de dezembro do mesmo ano, foram realizadas eleições livres para o parlamento e presidência, nas quais Getúlio seria eleito senador pela maior votação da época. Era o fim da Era Vargas, mas não o fim de Getúlio Vargas, que em 1951 retornaria à presidência pelo voto popular.\n[…]\nGetúlio foi afastado do poder sem sofrer nenhuma punição, nem mesmo o exílio, como o que ele próprio impusera ao presidente Washington Luís ao depô-lo. Getúlio não teve os seus direitos políticos cassados e não respondeu a qualquer processo judicial. Getúlio Vargas retirou-se para sua estância em São Borja, a Estância Santos Reis, no Rio Grande do Sul.\n[…]\nUma versão datilografada, feita em três vias, e mais extensa desta carta-testamento, foi lida, de maneira emocionada, por João Goulart, no enterro de Getúlio em São Borja. Nesta versão datilografada é que aparece a frase \"Saio da vida para entrar na história\". Esta versão datilografada da carta-testamento até hoje é alvo de discussões sobre sua autenticidade. Chama muito a atenção nela, a frase em castelhano: \"Se queda desamparado\".\n[…]\nNo cinquentenário de sua morte, em 2004, os restos mortais de Getúlio foram trasladados para um monumento no centro de sua cidade natal, São Borja.\n[…]\nExposição virtual \"Com a palavra: Getúlio Vargas\", no CPDOC FGV"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Chica da Silva",
      "descricao": "Francisca da Silva de Oliveira, mulher escravizada e depois liberta que viveu no Arraial do Tijuco, em Minas Gerais, no século dezoito."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que cidade mineira liga a vida de Chica da Silva, ex-escravizada do tempo dos diamantes, à do presidente Juscelino Kubitschek?",
    "resposta": "Diamantina",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Chica_da_Silva",
      "https://pt.wikipedia.org/wiki/Juscelino_Kubitschek"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Chica_da_Silva",
        "situacao": "ok",
        "texto": "Francisca \"Chica\" da Silva de Oliveira (Serro, ca. 1732 – 15 de fevereiro de 1796) foi uma escrava do Brasil Colonial, posteriormente alforriada, que viveu no Arraial do Tijuco, posteriormente Diamantina, pertencente ao município do Serro, Minas Gerais, durante a segunda metade do século XVIII.\n[…]\nO sobrenome Silva, bastante comum no mundo português, era adotado normalmente por pessoas sem procedência ou origem definida, fato que indica que Chica conquistou sua liberdade por conta própria, sem apadrinhamentos ou conexões. Com o nascimento da primeira filha, foi identificada no registro de batismo como \"Francisca da Silva de Oliveira\", denotando um pacto informal com seu companheiro, o contratador de diamantes João Fernandes de Oliveira.\n[…]\nEm 1753, João Fernandes de Oliveira chegou ao Arraial do Tijuco, para assumir a função de contratador dos diamantes, que vinha sendo exercida por seu pai homônimo desde 1740. No mesmo ano, João comprou Chica da Silva, que no ano seguinte foi alforriada por ele, quando então passaram a viver juntos, ainda que nunca tivessem se casado oficialmente.\n[…]\nChica da Silva ficou no Arraial do Tijuco, na companhia do filho mais novo e com a posse das propriedades deixadas pelo ex-companheiro, o que lhe garantiu uma vida confortável. Ela também continuou ativa na economia diamantífera, alugando escravizados para a Real Extração dos Diamantes das Minas do Brasil, companhia que viria a substituir os contratos dos diamantes.\n[…]\nApós a sua morte, Chica da Silva tornou-se desconhecida do grande público. Contudo, na segunda metade do século XIX, Joaquim Felício dos Santos, nas Memórias do Distrito Diamantino da Comarca do Serro Frio, trouxe à tona a existência da ex-escrava."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Juscelino_Kubitschek",
        "situacao": "ok",
        "texto": "Juscelino Kubitschek de Oliveira (Diamantina, 12 de setembro de 1902 – Resende, 22 de agosto de 1976), também conhecido pelas suas iniciais JK, foi um médico, oficial da Polícia Militar mineira e político brasileiro. Foi o 21.º Presidente do Brasil, entre 1956 e 1961. Concluiu o curso de humanidades do Seminário de Diamantina e em 1920 mudou-se para Belo Horizonte. Em 1927, formou-se em medicina p\n[…]\nJuscelino Kubitschek de Oliveira nasceu em 12 de setembro de 1902 em Diamantina, num casarão colonial na rua Direita. Seu pai, João César de Oliveira (1872-1905), foi caixeiro-viajante e também exerceu várias outras profissões, de garimpeiro a delegado de polícia. Durante uma viagem de serviço, João contraiu um resfriado que se transformou em pneumonia e deu origem a uma tuberculose.\n[…]\nEm 11 de abril de 1964, o Congresso Nacional elegeu indiretamente o general Castelo Branco presidente da república e o antigo amigo de Juscelino, do tempo do seminário em Diamantina, José Maria Alkmin, como vice-presidente da república. Juscelino, na condição de senador por Goiás, votou em Castelo Branco e em Alkmin. Seu voto foi um dos mais ovacionados e aplaudidos da sessão.\n[…]\nNo ano de 1985, foi fundado o Museu Casa de Juscelino Kubitschek, localizado em Diamantina, sua cidade natal. Em 1986, no décimo aniversário de morte de Juscelino Kubitschek, o compositor Cláudio Santoro escreveu, por encomenda do então Governador do Distrito Federal José Aparecido de Oliveira, a obra Réquiem para JK, baseada no texto rito fúnebre católico.\n[…]\nA Rodovia Juscelino Kubitschek que liga Brasília à cidade Rio de Janeiro, o Aeroporto Internacional de Brasília, a Rodovia Presidente Juscelino Kubitschek que compreende o trecho da BR-020 entre Formosa e Fortaleza, e as cidades de Presidente Juscelino (Minas Gerais), Presidente Kubitschek (Minas Gerais) e Presidente Juscelino (Maranhão) foram nomeadas em sua homenagem."
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Golpe da Maioridade",
      "descricao": "Antecipação da maioridade de Dom Pedro Segundo, aprovada em 1840, que encerrou o Período Regencial."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Com o Golpe da Maioridade, em 1840, Dom Pedro Segundo assumiu o trono com quantos anos de idade?",
    "resposta": "Quatorze anos",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Golpe_da_Maioridade",
      "https://en.wikipedia.org/wiki/Pedro_II_of_Brazil"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Golpe_da_Maioridade",
        "situacao": "ok",
        "texto": "A Declaração da Maioridade de Pedro II, também referida na História do Brasil como Golpe da Maioridade, ocorreu em 23 de julho de 1840 com o apoio do Partido Liberal e pôs fim ao período regencial brasileiro. Os liberais agitaram o povo, que pressionou o Senado para declarar o jovem Pedro II maior de idade antes de completar 15 anos.\n[…]\nEm 1834, o Parlamento Português já havia declarado maioridade para uma irmã de Pedro II, no caso, foi Maria II de Portugal, que com o ato, passou a reinar sem o regente.\n[…]\nEntre 1831 e 1840, o Brasil passou por uma transição na qual o país foi governado por regentes, aguardando Pedro de Alcântara atingir a idade necessária. Considerado um dos períodos com mais crises do Império, o país passou por uma experiência de descentralização, grande polaridade partidária e experimentou diversas revoltas.\n[…]\nA manobra política aconteceu quando Pedro II não tinha ainda idade suficiente para ascender ao trono. Elaborou-se então, no Poder Legislativo, projeto antecipando a sua maioridade para pôr fim às disputas políticas que estavam em curso nesse período.\n[…]\nPara antecipar o Governo de Pedro II, os representantes liberais apresentaram à Assembleia Geral um projeto de declaração da maioridade.\n[…]\nPedro II, com que a Divina Providência favoreceu o Império de Santa Cruz; reconhecendo igualmente os males inerentes a governos excepcionais, e presenciando o desejo unânime do povo desta capital; convencida de que com este desejo está de acordo o de todo o Império, para conferir-se ao mesmo Augusto Senhor o exercício dos poderes que, pela Constituição lhe competem, houve por bem, por tão ponderosos motivos, declará-lo em maioridade, para o efeito de entrar imediatamente no pleno exercício desses poderes, como Imperador Constitucional e Defensor Perpétuo do Brasil."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pedro_II_of_Brazil",
        "situacao": "ok",
        "texto": "Dom Pedro II (Pedro de Alcântara João Carlos Leopoldo Salvador Bibiano Francisco Xavier de Paula Leocádio Miguel Gabriel Rafael Gonzaga; 2 December 1825 – 5 December 1891), known as \"the Magnanimous\" (Portuguese: O Magnânimo), was the second and final emperor of the Empire of Brazil. He reigned from 1831 until his deposition in the military coup of 1889, presiding over the longest and most stable \n[…]\nBarman stated that by 1840, \"they had lost all faith in their ability to rule the country on their own. They accepted Pedro II as an authority figure whose presence was indispensable for the country's survival\". When asked by politicians if he would like to assume full powers, Pedro II accepted. On the following day, 23 July 1840, the General Assembly (the Brazilian Parliament) formally declared the 14-year-old Pedro II of age. He was later acclaimed, crowned, and consecrated on 18 July 1841.\n[…]\nOnce again, the Emperor traveled abroad, this time going to the United States for the Centennial Exposition of the Declaration of Independence. He was accompanied by his faithful servant Rafael, who had raised him from childhood. Pedro II arrived in New York City on 15 April 1876, and set out from there to travel throughout the country; going as far as San Francisco in the west, New Orleans in the south, Washington, D.C., and north to Toronto, Ontario, Canada.\n[…]\nA national holiday was declared and the return of the Emperor as a national hero was celebrated throughout the country. Thousands attended the main ceremony in Rio de Janeiro where, according to historian Pedro Calmon, the \"elderly people cried. Many knelt down. All clapped hands. There was no distinction between republicans and monarchists. They were all Brazilians.\" This homage marked the reconciliation of Republican Brazil with its monarchical past.\n[…]\nThe ancestry of Emperor Pedro II:\n[…]\nWorks by or about Pedro II of Brazil at Wikisource"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Lei Áurea",
      "descricao": "Lei brasileira de 13 de maio de 1888 que extinguiu a escravidão no Brasil."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Quantos artigos tinha o texto da Lei Áurea, que aboliu a escravidão no Brasil em 1888?",
    "resposta": "Dois",
    "distratores": [
      "Um",
      "Cinco",
      "Doze"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Lei_Áurea"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Lei_Áurea",
        "situacao": "ok",
        "texto": "Lei Áurea, oficialmente Lei n.º 3 353 de 13 de maio de 1888, é a lei que extinguiu a escravidão no Brasil.\n[…]\nEra permitido, pelo artigo 14 do Código Criminal do Império, apenas castigos moderados aos escravos, castigos estes que passaram a ser proibidos pela citada lei n.º 3 310 de 1886:\"Art. 14.\n[…]\nNa versão do historiador Pedro Calmon, o Conselheiro Antônio Prado, que se encontrava em São Paulo, elaborou e enviou ao Presidente do Conselho de Ministros João Alfredo, através de seu cunhado, Elias Chaves, em 20 de abril de 1888, um projeto de lei longo, sugerindo, porém, que se aproveitasse apenas o seu primeiro artigo (\"Fica abolida a escravidão no Brasil\") para que não acontecesse que um texto extenso causasse longas discussões no parlamento.\n[…]\nAcrescenta o historiador Tobias Monteiro que o segundo artigo do projeto de lei proposto pelo Conselheiro Antônio Prado obrigava os libertos a trabalharem para seus antigos senhores, mediante paga, e a residirem durante dois anos onde se achassem na data da abolição. Pouco após a abolição dos escravos, o Conselheiro Antônio Prado retornou ao ministério da agricultura.\n[…]\nAlguns pesquisadores recentes da historiografia brasileira têm outro ponto de vista sobre a abolição da escravatura e sobre a Lei Áurea. Afirmam eles que a abolição teria sido fruto de um estado semi-insurrecional que ameaçava a ordem imperial e escravista. Tal interpretação acentua o caráter ativo, e não passivo, das populações escravizadas.\n[…]\nEscravidão moderna no Brasil\n[…]\nA Lei Áurea no sítio do Planalto\n[…]\nAnais do Parlamento Discussão e votação da Lei Áurea no Senado do Império"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Lei dos Sexagenários",
      "descricao": "Lei Saraiva-Cotegipe, de 1885, que libertava os escravizados idosos no Brasil."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "A Lei Saraiva-Cotegipe, de 1885, libertava os escravizados a partir de qual idade?",
    "resposta": "Sessenta anos",
    "distratores": [
      "Cinquenta anos",
      "Setenta anos",
      "Setenta e cinco anos"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Lei_dos_Sexagenários"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Lei_dos_Sexagenários",
        "situacao": "ok",
        "texto": "A Lei dos Sexagenários, oficialmente Lei n.º 3.270/1885, também conhecida como Lei Saraiva-Cotegipe, foi uma lei abolicionista promulgada no Império do Brasil em 28 de setembro de 1885. A lei concedia liberdade aos escravizados com 60 anos de idade ou mais, mediante uma complexa série de condições, incluindo a prestação de trabalho forçado por três anos a título de indenização aos seus antigos sen\n[…]\n§ 1º - A \"Indenização\" através do Trabalho: O liberto ficaria \"obrigado a prestar, a título de indenização pela sua alforria, serviços por mais 3 anos ao seu ex-senhor\". A obrigação cessaria se o liberto atingisse 65 anos de idade. Isso significava que um escravizado de 60 anos ainda trabalharia de graça por três anos, e um de 64, por um ano.\n[…]\n§ 4º - Prioridade de Libertação: O fundo passaria a ser usado prioritariamente para libertar, por indenização, os escravos em propriedades agrícolas e de engenhos, atendendo diretamente aos interesses dos grandes latifundiários.\n[…]\nOs senhores, ademais, frequentemente fraudavam a idade de seus escravos nos registros, \"rejuvenescendo-os\" para evitar a alforria, uma prática que a nova matrícula visava, sem muito sucesso, coibir.\n[…]\nUma das consequências mais graves e menos discutidas da lei foi a consolidação do desvio de finalidade do Fundo de Emancipação. Estudos demonstram que, entre 1884 e 1888, a maior parte dos recursos que deveriam ser usados para libertar escravos foi, na verdade, alocada para subsidiar a vinda de imigrantes europeus, principalmente para as lavouras de café de São Paulo.\n[…]\nEm um contexto comparativo, a Lei dos Sexagenários se assemelha à Lei Moret, promulgada pela Espanha em 1870 para suas colônias, especialmente Cuba e Porto Rico. A Lei Moret também previa a liberdade dos nascituros (similar à Lei do Ventre Livre) e dos escravos com mais de 60 anos."
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Plano de Metas",
      "descricao": "Programa de desenvolvimento econômico do governo Juscelino Kubitschek, entre 1956 e 1961."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "O lema do governo de Juscelino Kubitschek prometia quantos anos de progresso em apenas cinco?",
    "resposta": "Cinquenta",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Plano_de_Metas"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Plano_de_Metas",
        "situacao": "ok",
        "texto": "O Plano de Metas foi um programa de industrialização e modernização levado a cabo no Governo Juscelino Kubitschek, na forma de um \"ambicioso conjunto de objetivos setoriais\" que \"daria continuidade ao processo de substituição de importações que se vinha desenrolando nos dois decênios anteriores\".\n[…]\nO plano, que contemplou apenas marginalmente o setor industrial, continha metas tanto para o setor público como para o setor privado, impulsionando um período de crescimento econômico acelerado, às custas de um alto endividamento público. Apesar de ter sido realizada na presidência de Juscelino, o plano teve consequências em administrações futuras, quando aconteceram diversos planos para recuperação da economia do país.\n[…]\nPara isso, JK (Juscelino Kubitschek) comprometeu-se com o processo de industrialização, confiado a ele pelos nacionalistas. E assim, lutava contra o Imperialismo através da batalha contra o subdesenvolvimento brasileiro, embora seu Plano de Metas venha a ser criado com investimentos diretos do capital externo, o que recebeu apoio dos liberais e oposição das esquerdas que eram contra a entrada do capital estrangeiro.\n[…]\nSubdividido em setores, o Plano de Metas de Juscelino Kubitschek era marcado por investimentos em estradas, em siderúrgicas, em usinas hidrelétricas, na marinha mercante e pela construção de Brasília e baseava-se em “30 metas”, divididas em: Setores da energia (1 a 5), Setores do transporte (6 a 12), Setores da alimentação (13 a 18), Setor da indústria de base (19 a 29), Setor da educação (30).\n[…]\nO Plano também buscava\n[…]\nOutros investimentos estatais durante o Plano de Metas:\n[…]\nAgricultura - expansão da fronteira agrícola - menor crescimento do Plano(40%)"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Constituição brasileira de 1824",
      "descricao": "Primeira constituição do Brasil, outorgada por Dom Pedro Primeiro em 1824 e vigente durante todo o Império."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Além dos três poderes clássicos, a Constituição do Império, de 1824, criou um quarto, exercido pelo imperador. Qual?",
    "resposta": "Poder Moderador",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Constituição_brasileira_de_1824"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Constituição_brasileira_de_1824",
        "situacao": "ok",
        "texto": "Constituição Política do Império do Brasil, comumente referida como Constituição de 1824, foi a primeira constituição do Brasil, outorgada em 25 de março de 1824 e revogada em 24 de fevereiro de 1891.\n[…]\nPermaneceu em vigor por 65 anos, até a promulgação da Constituição de 1891, que, na sequência do decreto n.°1, de 15 de novembro de 1889, substituiu o ordenamento político do Império do Brasil por um de caráter republicano. Foi a constituição que vigorou por mais tempo no Brasil. Entre suas inovações estavam a liberdade de culto religioso (embora a religião oficial permanecesse a católica romana) e a liberdade de imprensa e de opinião, e originalidades como a instituição do Poder Moderador.\n[…]\nCapítulo I – Do Poder Moderador.\n[…]\nTítulo 6º – Do Poder Judicial.\n[…]\nA existência de 4 poderes: o Legislativo, o Executivo, o Judiciário e o Poder Moderador, este acima dos demais poderes, exercido pelo imperador;\n[…]\nPor meio do Poder Moderador o imperador nomeava os membros vitalícios do Conselho de Estado, os presidentes de província, as autoridades eclesiásticas da Igreja Católica Apostólica Romana e os membros do Senado vitalício. Também nomeava e suspendia os magistrados do Poder Judiciário, assim como nomeava e destituía os ministros do Poder Executivo.\n[…]\nArt. 98. O Poder Moderador é a chave de toda a organização política e é delegada privativamente ao imperador, como Chefe Supremo da Nação e seu Primeiro Representante, para que incessantemente vele sobre a manutenção da independência, equilíbrio e harmonia dos mais Poderes políticos;\n[…]\nArt. 102. O imperador é o Chefe do Poder Executivo e o exercita pelos seus ministros de Estado;\n[…]\nPolítica do Império do Brasil\n[…]\nConstituição Política do Império do Brazil"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Plano Real",
      "descricao": "Programa de estabilização econômica lançado no Brasil em 1993 e 1994, que criou a moeda real e controlou a hiperinflação."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em 1994, antes de a nova moeda circular, preços e salários passaram a ser medidos numa unidade de transição. Como ela se chamava?",
    "resposta": "Unidade Real de Valor",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Plano_Real",
      "https://pt.wikipedia.org/wiki/Unidade_Real_de_Valor"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Plano_Real",
        "situacao": "ok",
        "texto": "Plano Real foi um programa brasileiro com o objetivo de estabilização e reformas econômicas, iniciado em 27 de fevereiro de 1994 com a publicação da medida provisória número 434, implantado no governo Itamar Franco. Tal medida provisória instituiu a Unidade Real de Valor (URV), estabeleceu regras de conversão e uso de valores monetários, iniciou a desindexação da economia, e determinou o lançament\n[…]\nA partir de 28 de fevereiro de 1994, como efeito da Medida Provisória nº 434, iniciou-se a publicação dos valores diários da Unidade Real de Valor (URV), baseados nos índices IPCA-E do IBGE, IPC da FIPE e IGM-M da FGV. A URV serviria como moeda escritural para todas as transações econômicas, com conversão obrigatória de valores, promovendo uma desindexação geral da economia.\n[…]\nA segunda fase do Plano Real visava a criação de uma quase moeda indexada com o objetivo de eliminar o componente inercial. A Unidade Real de Valor (URV), lançada no dia primeiro de março de 1994, era uma nova moeda que circulava paralelamente ao Cruzeiro Real. A ideia era simular a hiperinflação no Cruzeiro Real enquanto a URV seria mantida atrelada ao dólar, tendo o seu valor em Cruzeiros reajustados diariamente.\n[…]\nO lançamento do Real significava a junção das duas funções em uma só moeda.\n[…]\nDurante muitos anos a correção monetária foi uma salvaguarda que permitia aos brasileiros que tinham maior poder aquisitivo defender-se parcialmente da corrosão do valor real da moeda, com aplicações bancárias de rendimento diário. A grande maioria da população, entretanto, não tinha acesso a esses mecanismos e sofria com a desvalorização diária dos recursos recebidos como salário, aposentadoria ou pensão, sendo os maiores prejudicados com a alta inflação.[carece de fontes]?\n[…]\nOs efeitos em longo prazo esperados pelo governo à época do lançamento do Plano Real foram:\n[…]\nDesvalorização do real em 1999\n[…]\nPlano Cruzado II\n[…]\nPlano Verão"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Unidade_Real_de_Valor",
        "situacao": "ok",
        "texto": "Unidade real de valor (URV) foi a parte escritural da atual moeda corrente do Brasil, cujo curso obrigatório se iniciou em 1º de março de 1993. Foi um índice que procurou refletir a variação do poder aquisitivo da moeda, servindo apenas como unidade de conta e referência de valores. Teve curso juntamente com o cruzeiro real (CR$) até o dia 1º de julho de 1994, quando foi lançada a nova base monetá\n[…]\nInstituída pela Medida Provisória nº 434, de 27 de fevereiro de 1993, (posteriormente transformada na Lei nº 8.880), foi a segunda etapa do Plano Real, sendo uma parte fundamental dele, contribuindo positivamente para a mudança de moeda e estabilização monetária e econômica, sem medidas de choque como confiscos e congelamentos.\n[…]\nO ministro da Fazenda responsável em gerir a equipe de economistas que planejaram a entrada do real como moeda corrente no Brasil foi o sociólogo Fernando Henrique Cardoso, futuramente eleito Presidente da República em outubro de 1994. Todavia, quem era o ministro da fazenda quando se pôs em pratica o plano foi Rubens Ricupero tendo sido prosseguido por Ciro Gomes que continuou no cargo até o fim do governo Itamar Franco."
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
