Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Geografia do Brasil** (tema **Geografia**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Rio Amazonas",
      "descricao": "Grande rio da América do Sul que nasce nos Andes peruanos e atravessa o norte do Brasil até o Atlântico."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome do maior rio brasileiro vem do relato de espanhóis do século dezesseis que enfrentaram guerreiras indígenas. A quais figuras da mitologia grega elas foram comparadas?",
    "resposta": "Amazonas",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Rio_Amazonas",
      "https://en.wikipedia.org/wiki/Amazon_River"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Rio_Amazonas",
        "situacao": "ok",
        "texto": "Rio Amazonas é o maior rio em vazão de água da Terra e o segundo mais extenso do mundo, após o Rio Nilo. Com 6 992,06 quilômetros, percorre o norte da América do Sul, a floresta amazônica e desagua no Oceano Atlântico. Possui mais de mil afluentes, sendo que alguns deles, como o Madeira, o Negro e o Japurá, estão entre os 10 maiores rios do planeta.\n[…]\nO rio foi inicialmente conhecido pelos europeus como Marañón (Maranhão) e a parte peruana do rio ainda é conhecida com esse nome até hoje. O nome Amazonas, no entanto, foi dado depois de guerreiros nativos terem atacado uma expedição do século XVI de Francisco de Orellana. Os guerreiros eram liderados por mulheres, lembrando Orellana das guerreiras amazônicas, uma tribo de mulheres guerreiras relacionadas aos citas e sármatas iranianos mencionados na mitologia grega.\n[…]\nHá ampla evidência de que as áreas ao redor do Rio Amazonas abrigavam sociedades indígenas complexas e de grande escala, principalmente chefaturas que desenvolveram vilas e cidades. Os arqueólogos estimam que na época em que o conquistador espanhol Francisco de Orellana viajou pela Amazônia em 1541, mais de 3 milhões de indígenas já viviam na região. Estes assentamentos pré-colombianos criaram civilizações altamente desenvolvidas.\n[…]\nO Amazonas disputa com o rio Nilo o primeiro lugar entre os rios de maior extensão territorial.\n[…]\nSegundo estudos brasileiros e peruanos efectuados em 2007 e 2008, foram acrescentados à nascente do Amazonas os canais de maré da bacia do interior sul da Amazónia, concluindo-se dessa forma que o Amazonas tem um comprimento de 6 992 km sendo portanto maior que o Nilo, cujos estudos até a data apontavam para um comprimento calculado em 6 853 km, quando se suponha que a nascente do Nilo era no rio Akagera.\n[…]\nBacia do rio Amazonas\n[…]\nAmazônia\n[…]\nMedia relacionados com Rio Amazonas no Wikimedia Commons"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Amazon_River",
        "situacao": "ok",
        "texto": "The Amazon River in South America is the largest river in the world by discharge volume of water, and the second-longest or longest river system in the world, a title which is disputed with the Nile.\n[…]\nSince colonial times, the Portuguese portion of the Amazon basin has remained a land largely undeveloped by agriculture and occupied by indigenous people who survived the arrival of European diseases.\n[…]\nThe Lower Amazon begins where the darkly colored waters of the Rio Negro meets the sandy-colored Rio Solimões (the upper Amazon), and for over 6 km (3.7 mi) these waters run side by side without mixing. At Óbidos, a bluff 17 m (56 ft) above the river is backed by low hills. The lower Amazon seems to have once been a gulf of the Atlantic Ocean, the waters of which washed the cliffs near Óbidos.\n[…]\nThe Amazon and its tributaries are the main habitat of the giant otter (Pteronura brasiliensis). Sometimes known as the \"river wolf,\" it is one of South America's top carnivores. Because of habitat destruction and hunting, its population has dramatically decreased. It is now listed on Appendix I of the Convention on International Trade in Endangered Species (CITES), which effectively bans international trade.\n[…]\nThe Amazon River serves as a vital lifeline for more than 47 million people in its basin and faces a multitude of challenges that threaten both its ecosystem and the indigenous communities dependent on its resources. According to the Office of the United Nations High Commissioner for Human Rights (OHCHR), the Yanomami, a tribe of approximately 30,000, struggles to preserve their land, culture, and traditional way of life due to encroaching illegal gold miners, malnutrition, and malaria."
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Rio Amazonas",
      "descricao": "Grande rio da América do Sul que nasce nos Andes peruanos e atravessa o norte do Brasil até o Atlântico."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "O rio Amazonas já entra no Brasil carregando muita água. Em que país, no alto da cordilheira dos Andes, fica a sua nascente?",
    "resposta": "Peru",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Rio_Amazonas",
      "https://en.wikipedia.org/wiki/Amazon_River"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Rio_Amazonas",
        "situacao": "ok",
        "texto": "Rio Amazonas é o maior rio em vazão de água da Terra e o segundo mais extenso do mundo, após o Rio Nilo. Com 6 992,06 quilômetros, percorre o norte da América do Sul, a floresta amazônica e desagua no Oceano Atlântico. Possui mais de mil afluentes, sendo que alguns deles, como o Madeira, o Negro e o Japurá, estão entre os 10 maiores rios do planeta.\n[…]\nO Amazonas tem sua origem no Nevado Mismi, a nascente do rio Apurímaque (alto da parte ocidental da cordilheira dos Andes), no sul do Peru, e deságua no oceano Atlântico, no norte brasileiro. Ao longo de seu percurso recebe, ainda no Peru, os nomes de Carhuasanta, Lloqueta, Apurímaque, Ene, Tambo, Ucaiáli e Amazonas.\n[…]\nEm 2008, a Sociedade Geográfica de Lima, Peru, apoiada por entidades da comunidade científica internacional, teria colocado fim à polêmica sobre a origem do rio Amazonas. Com nascente nos Andes do sul do Peru, o Amazonas seria o maior rio do mundo, com quase 7 mil km, sendo maior que o rio Nilo, na África.\n[…]\nA verdadeira nascente do Amazonas foi identificada na quebrada Apacheta, na base do Nevado Quehuisha, no departamento de Arequipa, Peru, a 5 150 m de altitude, percorrendo 7 062 km de extensão, pelo Peru e Brasil, até a sua desembocadura no oceano Atlântico. Meses mais tarde, o Instituto Nacional de Pesquisas Espaciais (INPE) do Brasil afirmou que tinha efetuado medições corretas e que afinal o Amazonas seria 140 km mais longo que o Nilo, tendo os rios respectivamente 6 992,06 km e 6 852,15 km.\n[…]\nOs portos mais importantes do rio Amazonas ficam nas cidades de Iquitos (Peru), Letícia (Colômbia), Tabatinga, Manaus, Santarém e Santana (Brasil). O Amazonas transporta enormes quantidades de cargas e passageiros, sendo o tronco referencial de transporte de tonelagem do interior norte sul-americano.\n[…]\nAmazônia\n[…]\nMedia relacionados com Rio Amazonas no Wikimedia Commons"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Amazon_River",
        "situacao": "ok",
        "texto": "The Amazon River in South America is the largest river in the world by discharge volume of water, and the second-longest or longest river system in the world, a title which is disputed with the Nile.\n[…]\nFor nearly a century, the headwaters of the Apurímac River on Nevado Mismi in Peru had been considered the Amazon basin's most distant source, until a 2014 study found the farthest source to be the headwaters of the Mantaro River on the Cordillera Rumi Cruz in Peru.\n[…]\nThe Mantaro and Apurímac rivers join, and with other tributaries form the Ucayali River, which in turn meets the Marañón River upstream of Iquitos, Peru, forming what countries other than Brazil consider to be the main stem of the Amazon. Brazilians call this section the Solimões River above its confluence with the Rio Negro forming what Brazilians call the Amazon at the Meeting of Waters (Portuguese: Encontro das Águas) at Manaus, the largest city on the river.\n[…]\nIn the 1860s, approximately 3,000 tons of rubber were being exported annually, and by 1911 annual exports had grown to 44,000 tons, representing 9.3% of Peru's exports. During the rubber boom it is estimated that diseases brought by immigrants, such as typhus and malaria, killed 40,000 native Amazonians.\n[…]\nAlthough the Ucayali–Marañón confluence is the point at which most geographers place the beginning of the Amazon River proper, in Brazil the river is known at this point as the Solimões das Águas. The river systems and flood plains in Brazil, Peru, Ecuador, Colombia, and Venezuela, whose waters drain into the Solimões and its tributaries, are called the \"Upper Amazon\".\n[…]\nPeruvian Amazonia in Peru\n[…]\nGeographic data related to Amazon River at OpenStreetMap"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Caatinga",
      "descricao": "Bioma semiárido do sertão nordestino brasileiro"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Na seca, a vegetação do sertão perde as folhas e fica acinzentada. Por isso os indígenas a chamaram de caatinga, que em tupi significa o quê?",
    "resposta": "Mata branca",
    "distratores": [
      "Terra seca",
      "Mata de espinhos",
      "Campo de pedras"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Caatinga",
      "https://en.wikipedia.org/wiki/Caatinga"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Caatinga",
        "situacao": "ok",
        "texto": "Caatinga (do tupi: ka'a [mata] + ting [branco] + -a [sufixo substantivador] = mata branca) é o único bioma brasileiro exclusivamente dentro do território nacional, o que significa que grande parte do seu patrimônio biológico não pode ser encontrado em nenhum outro país do planeta. Seu nome decorre da alusão à paisagem esbranquiçada apresentada pela vegetação durante o período seco. A maioria das p\n[…]\nUma primeira divisão que pode ser feita é entre o agreste e o sertão. O agreste é uma faixa de transição entre o interior seco (sertão) e a Mata Atlântica (Zona da Mata). Já o sertão apresenta vegetação mais rústica. Outras subdivisões comuns incluem Seridó, Curimataú, Caatinga e Carrasco. Em termos de tipos de vegetação, a caatinga do Seridó é uma transição entre campo e a caatinga arbórea. Cariri é a caatinga com vegetação menos rústica.\n[…]\nDeste modo, ka'a + ting pode ser traduzido como mata branca, ou, mais precisamente, como mata clara. A tradução mata branca, contudo, não está errada, pois em português brasileiro a palavra \"branco\" nem sempre tem sentido literal (fala-se em vinho branco, ou pessoa branca).\n[…]\nCaatinga arbórea\n[…]\nMata seca (= Floresta Estacional Decídua Montana, ou Floresta Tropical Caducifólia)\n[…]\nA caatinga apresenta vegetação típica de regiões semiáridas com perda de folhagem pela vegetação durante a estação seca. Anteriormente acreditava-se que a caatinga seria o resultado da degradação de formações vegetais mais exuberantes, como a Mata Atlântica ou a Floresta Amazônica.\n[…]\nAtualmente, a Caatinga ainda conta com vários povos indígenas, sendo o maior deles, os Potyguaras, de origem Tupi e também nativos da Mata Atlântica, somando mais de 20 mil indígenas. No interior, os maiores grupos são os Xukurus e Pankarus, da caatinga pernambucana, totalizando 12 mil e 7 mil indígenas respectivamente, provavelmente são de origem Macro-Jê.\n[…]\nLista de plantas da vegetação da Caatinga"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Caatinga",
        "situacao": "ok",
        "texto": "Caatinga (; [kaaˈt͡ʃĩɡɐ]) is a type of semi-arid tropical vegetation, and an ecoregion characterized by this vegetation in interior northeastern Brazil. The name \"Caatinga\" comes from the Old Tupi word ka'atinga, meaning 'white forest' (ka'a = 'forest, vegetation'; tinga = 'white').\n[…]\nMost authors divide the Caatinga into two different subtypes: dry (\"sertão\") and humid (\"agreste\"), but categorizations vary to as many as eight different vegetative regimes.\n[…]\nThe caatinga was inhabited by two major indigenous groups, the Macro-Jê and the Kariris, who have been in the Caatinga for at least two thousand years. After the 11th century, the Tupis arrived in the region, coming from the southeast and through the Atlantic coast. Contact with colonizers starting in the 16th century decimated numerous indigenous nations and tribes through diseases, enslavement, and invasion of territories for cattle ranching, sugar mills, and new settlements.\n[…]\nCurrently, the Caatinga still has indigenous peoples, the largest of which are the Potyguaras, of Tupi origin and also native to the Atlantic Forest, totaling more than 20,000 indigenous peoples. In the interior, the largest groups are the Xukurus and Pankarus, from the Pernambuco Caatinga, totaling 12,000 and 7,000 indigenous peoples, possibly of Macro-Jê origin.\n[…]\nThe Fulni-Ô people are known for being the only indigenous ethnic group in the Northeast to have kept their ancestral language alive, as well as having saved unique cultural elements such as the Ouricuri Ritual; they are one of the least acculturated Northeastern peoples by European invaders. Other notable Caatinga peoples are the Kambiwás, Tremembés, Pitaguarys, Kariris, Kiriris, and Tabajaras.\n[…]\nSertão\n[…]\nList of plants of Caatinga vegetation of Brazil"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Mercado Ver-o-Peso",
      "descricao": "Grande mercado e feira à beira da baía do Guajará, no centro de Belém, no Pará."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O mercado Ver-o-Peso, em Belém, herdou o nome de um posto colonial português à beira do rio. Para que as mercadorias eram pesadas ali?",
    "resposta": "Para cobrar impostos",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Mercado_Ver-o-Peso"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Mercado_Ver-o-Peso",
        "situacao": "ok",
        "texto": "O Mercado Ver-o-Peso ou Mercado Municipal Bolonha de Peixe ou Mercado de Ferro ou somente Ver-o-Peso, é um mercado público, feira-livre, zona portuária de pequeno porte, inaugurado em 1901 (substituindo a \"Casa de Haver-o-Peso\", 1625-1899) que faz parte do Complexo do Ver-o-Peso (1625), situado na cidade paraense de Belém (Pará) no bairro da Campina, às margens da baía do Guajará, ao lado da Estaç\n[…]\nEntão em 1625, na área do igarapé do Piri (no atual Mercado Ver-o-Peso), os portugueses instalaram o posto de fiscal comercial Casa de Haver o Peso, para controle do peso e, arrecadação de tributos dos gêneros trazidos para a sede da Capitania do Grão-Pará (Estado do Maranhão), concedido por provisão real à Câmara de Belém.\n[…]\nEm 1803, no governo de Dom Marcos de Noronha e Brito, Conde dos Arcos, o igarapé do Piri foi aterrado para atender aos avanços urbanísticos da Belém. A foz foi transformada na Doca do Ver-o-Peso e na Pedra do Peixe, feito com pedras de lioz inglesas, mantendo-se ali as atividades do posto de fiscal.\n[…]\nEm 1899, após a demolição da \"Casa de Haver-o-Peso\" (1625) teve início a edificação do Mercado de Ferro, com o projeto de Henrique La Rocque, próximo ao Mercado Municipal de Carnes ou Mercado Bolonha. Sendo inaugurado em 1901, na forma de um dodecágono medindo 1 197 m², com estrutura metálica em zinco veille-montaine (trazida pré-fabricado da Inglaterra e de Nova Iorque transportado fluvialmente para Belém)\n[…]\nO mercado de ferro e a feira livre fazem parte do complexo arquitetônico e paisagístico do Ver-o-Peso tombado pelo IPHAN, em 1977, que compreende uma área de 35 mil metros quadrados, com uma série de construções históricas, incluindo o Mercado da Carne, a Praça do Pescador, a Praça do Relógio, a Doca, a Feira do Açaí, a Ladeira do Castelo e o Solar da Beira.\n[…]\nRegião Geográfica Intermediária de Belém\n[…]\n«Ver-o-Peso - Pará»\n[…]\n«O Mercado do Ver-o-Peso»"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Ouro Preto",
      "descricao": "Cidade histórica de Minas Gerais, antiga capital da capitania e da província, famosa pelo barroco colonial."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "No auge da mineração do século dezoito, a cidade que hoje chamamos de Ouro Preto era conhecida por qual nome?",
    "resposta": "Vila Rica",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Ouro_Preto",
      "https://en.wikipedia.org/wiki/Ouro_Preto"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Ouro_Preto",
        "situacao": "ok",
        "texto": "Ouro Preto é um município brasileiro do estado de Minas Gerais, Região Sudeste do país. Localiza-se a cerca de 100 km a sudeste da capital estadual. Ocupa uma área de aproximadamente 1 250 km², sendo que 23 km² estão em área urbana, e sua população foi estimada em 77 914 habitantes em 2025. Situa-se na latitude 20º23'08\" sul, longitude 43º30'29\" oeste e altitude média de 1 179 metros.\n[…]\nO município chegou a ser uma das cidades mais populosas da América, contando com cerca de 40 mil pessoas em 1730 e, décadas após, 80 mil, mas é bom lembrar que a área de Villa Rica/Ouro Preto era muito maior englobando as atuais Congonhas, Ouro Branco e Itabirito. Àquela época, a população de Nova York era de menos da metade desse número de habitantes e a população de São Paulo não ultrapassava 8 mil.\n[…]\nOuro Preto foi criada em 24 de junho de 1698 pela bandeira de Antonio Dias e Padre Faria. A elevação de Ouro Preto a vila se deu em 8 de julho de 1711, por meio da fusão de diversos arraiais, fundados por bandeirantes, tornando-se sede de concelho, com a designação de \"Vila Rica\". Inicialmente Vila Rica de Albuquerque e depois Vila Rica de Nossa Senhora do Pilar de Ouro Preto.\n[…]\nNesse ano foram criadas as três primeiras vilas de Minas Gerais: em 8 de abril Ribeirão do Carmo, atual Mariana, em 8 de julho Vila Rica, atual Ouro Preto, e em 17 de julho Nossa Senhora da Conceição de Sabarabussu, atual Sabará.\n[…]\nEm 1823, após a Independência do Brasil, Vila Rica recebeu o título de Imperial Cidade, conferido por Pedro I, tornando-se oficialmente capital da então província das Minas Gerais e passando a ser designada como Imperial Cidade de Ouro Preto. Em 1839, foi fundada a Escola de Farmácia, tida como a primeira escola de farmácia da América do Sul. Em 12 de outubro de 1876, a pedido de Pedro II, Claude Henri Gorceix fundou a Escola de Minas em Ouro Preto.\n[…]\nOuro Preto no IBGE Cidades"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Ouro_Preto",
        "situacao": "ok",
        "texto": "Ouro Preto (Portuguese pronunciation: [ˈo(w)ɾu ˈpɾetu], lit. 'Black Gold'), formerly Vila Rica (Portuguese pronunciation: [ˈvilɐ ˈʁikɐ], lit. 'Rich Town'), is a municipality in the state of Minas Gerais, Brazil. The city, a former colonial mining town located in the Serra do Espinhaço mountains, was designated a World Heritage Site by UNESCO due to its Baroque colonial architecture. Ouro Preto use\n[…]\nIn 1695, at Rio das Velhas, Manuel Borba Gato discovered gold, the start of the Brazilian Gold Rush. In 1698, Vila Rica (later Ouro Preto) was established, becoming the capital of Minas Gerais from 1720 to 1897. In 1697, the Estrada Real was established by the crown to promote development of the interior, reaching from the coast through Ouro Preto onwards to Diamantina.\n[…]\nFounded at the end of the 17th century, Ouro Preto (meaning Black Gold) was originally called Vila Rica, or \"Rich Village\", the focal point of the gold rush and Brazil's golden age in the 18th century under Portuguese rule. Between 1695 and 1696, a gold-bearing stream was discovered in Itacolomi, which would be renamed Gualacho do Sul. In 1711, several small settlements were united as a municipality called Villa Rica, which later came to be called Ouro Preto.\n[…]\nThe tremendous wealth from gold mining in the 18th century created a city which attracted the intelligentsia of Europe. Philosophy and art flourished, and evidence of a baroque revival called the \"Barroco Mineiro\" is illustrated in architecture as well as by sculptors such as Aleijadinho, painters such as Manoel da Costa Ataíde, composers such as Lobo de Mesquita, and poets such as Tomás António Gonzaga. At that time, Vila Rica was the largest city in Brazil, with 100,000 inhabitants.\n[…]\nMinerals of note in the city are: gold, hematite, dolomite, tourmaline, pyrite, muscovite, topaz and imperial topaz, which is a stone only found in Ouro Preto.\n[…]\nOuro Preto World"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Ouro Preto",
      "descricao": "Cidade histórica de Minas Gerais, antiga capital da capitania e da província, famosa pelo barroco colonial."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Em 1980, qual cidade se tornou o primeiro bem brasileiro inscrito na lista do Patrimônio Mundial da UNESCO?",
    "resposta": "Ouro Preto",
    "distratores": [
      "Olinda",
      "Salvador",
      "Diamantina"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Ouro_Preto",
      "https://whc.unesco.org/en/list/124"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Ouro_Preto",
        "situacao": "ok",
        "texto": "Ouro Preto é um município brasileiro do estado de Minas Gerais, Região Sudeste do país. Localiza-se a cerca de 100 km a sudeste da capital estadual. Ocupa uma área de aproximadamente 1 250 km², sendo que 23 km² estão em área urbana, e sua população foi estimada em 77 914 habitantes em 2025. Situa-se na latitude 20º23'08\" sul, longitude 43º30'29\" oeste e altitude média de 1 179 metros.\n[…]\nNesse ano foram criadas as três primeiras vilas de Minas Gerais: em 8 de abril Ribeirão do Carmo, atual Mariana, em 8 de julho Vila Rica, atual Ouro Preto, e em 17 de julho Nossa Senhora da Conceição de Sabarabussu, atual Sabará.\n[…]\nEm 1823, após a Independência do Brasil, Vila Rica recebeu o título de Imperial Cidade, conferido por Pedro I, tornando-se oficialmente capital da então província das Minas Gerais e passando a ser designada como Imperial Cidade de Ouro Preto. Em 1839, foi fundada a Escola de Farmácia, tida como a primeira escola de farmácia da América do Sul. Em 12 de outubro de 1876, a pedido de Pedro II, Claude Henri Gorceix fundou a Escola de Minas em Ouro Preto.\n[…]\nAs igrejas barrocas/rococós a certas influências neoclássicas e o casario colonial de Ouro Preto só voltaram a ficar evidenciados de forma positiva pelo movimento modernista, na década de 1920. Nesse momento, as obras de Aleijadinho e Mestre Ataíde passaram a ser vistas como manifestações primeiras de uma cultura genuinamente brasileira. O próprio tombamento da cidade faz parte do projeto de construção de nacionalidade brasileira, sendo o primeiro local do país considerado monumento nacional.\n[…]\nA cidade se tornou conhecida como um \"museu a céu aberto\", preservando um grande núcleo de casario colonial essencialmente intacto, prestigiado em todo o Brasil e mesmo no estrangeiro, tanto que a Cidade Histórica foi inscrita na Lista do Patrimônio Mundial da UNESCO.\n[…]\nOuro Preto no IBGE Cidades\n[…]\nMuseu Virtual de Ouro Preto"
      },
      {
        "url": "https://whc.unesco.org/en/list/124",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Rio de Janeiro (cidade)",
      "descricao": "Capital do estado do Rio de Janeiro, às margens da Baía de Guanabara, capital do Brasil de 1763 a 1960."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Navegadores portugueses chegaram à Baía de Guanabara em janeiro de 1502. Eles a confundiram com o quê, dando origem ao nome da cidade?",
    "resposta": "A foz de um rio",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Rio_de_Janeiro",
      "https://en.wikipedia.org/wiki/Rio_de_Janeiro"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Rio_de_Janeiro",
        "situacao": "ok",
        "texto": "Rio de Janeiro, simplesmente referido como Rio, é a capital do estado brasileiro do Rio de Janeiro. Um dos maiores destinos turísticos internacionais no Brasil, na América Latina e também do Hemisfério Sul, é uma das primeiras cidades do país. É a segunda maior metrópole do Brasil (depois de São Paulo), a sétima maior da América e a décima oitava do mundo. Sua população segundo o censo de 2022 do \n[…]\nA Baía de Guanabara, à margem da qual a cidade se organizou, foi descoberta pelo explorador português Gaspar de Lemos em 1 de janeiro de 1502. Embora se afirme que o nome \"Rio de Janeiro\" tenha sido escolhido em virtude de os portugueses acreditarem tratar-se a baía da foz de um rio, na verdade, à época, não havia qualquer distinção de nomenclatura entre rios, sacos e baías — motivo pelo qual foi o corpo d'água corretamente designado como rio.\n[…]\nO litoral do atual estado do Rio de Janeiro era habitado por índios do tronco linguístico macro-jê há milhares de anos. Por volta do ano 1000, a região foi conquistada por povos de língua tupi procedentes da Amazônia. Um destes povos, os tamoios, também conhecidos como tupinambás, ocupava a região ao redor da Baía de Guanabara no século XVI, quando os portugueses chegaram à região.\n[…]\nA Baía de Guanabara, à margem da qual a cidade foi fundada, foi descoberta pelo explorador português Gaspar de Lemos em 1.º de janeiro de 1502. No entanto, em 1.º de novembro de 1555, os franceses, capitaneados por Nicolas Durand de Villegagnon, apossaram-se da Baía da Guanabara, estabelecendo uma colônia na ilha de Sergipe (atual ilha de Villegagnon). Lá, ergueram o Forte Coligny, enquanto consolidavam alianças com os índios tupinambás locais.\n[…]\nEm 18 de janeiro de 2019, a cidade foi eleita pela UNESCO como a primeira Capital Mundial da Arquitetura.\n[…]\nFluminenses naturais da cidade do Rio de Janeiro\n[…]\nLista de consulados no Rio de Janeiro"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Rio_de_Janeiro",
        "situacao": "ok",
        "texto": "Rio de Janeiro, also known simply as Rio, is the capital and largest city of the state of Rio de Janeiro. It is the second-largest city in Brazil after São Paulo, and the largest by number of international tourists. It has a population of 6 million in the city proper, and 13 million in its metropolitan area as of 2025. It is also the sixth-most-populous city in the Americas.\n[…]\nEuropeans first encountered Guanabara Bay on 1 January 1502 (hence Rio de Janeiro, \"January River\"), during a Portuguese expedition under explorer Gaspar de Lemos, captain of a ship in Pedro Álvares Cabral's fleet, or under Gonçalo Coelho. Allegedly the Florentine explorer Amerigo Vespucci participated as an observer at the invitation of King Manuel I in the same expedition.\n[…]\nThe city of Rio de Janeiro proper was founded on 1 March 1565 by the Portuguese, led by Estácio de Sá, including Antônio de Mariz. It was named São Sebastião do Rio de Janeiro, in honor of St. Sebastian, the saint who was the namesake and patron of the Portuguese then-monarch Sebastião. Rio de Janeiro was the name of Guanabara Bay.\n[…]\nRio de Janeiro is near the west end of a strip (from Cabo Frio to just east of Ilha Grande) of Brazil's Atlantic coast close to the Tropic of Capricorn where the shoreline is oriented east and west; the city thus faces largely south. It was founded at the entrance to an inlet, Guanabara Bay (Baía de Guanabara), which is marked by a point of land called Sugar Loaf (Pão de Açúcar) – a \"calling card\" of the city.\n[…]\nIt was originally organized in Rio de Janeiro, from where the name comes, and has become a world-level event and, in 2004, had its first edition abroad in Lisbon, Portugal, before Madrid, Spain, and Las Vegas, United States. The festival is considered the eighth best in the world by the specialized site Fling Festival.\n[…]\nRio de Janeiro City Hall website (in Portuguese)"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Rio de Janeiro (cidade)",
      "descricao": "Capital do estado do Rio de Janeiro, às margens da Baía de Guanabara, capital do Brasil de 1763 a 1960."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O que as cidades de Salvador, Rio de Janeiro e Brasília têm em comum na história do país?",
    "resposta": "Foram capitais do Brasil",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Rio_de_Janeiro",
      "https://pt.wikipedia.org/wiki/Capitais_do_Brasil"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Rio_de_Janeiro",
        "situacao": "ok",
        "texto": "Rio de Janeiro, simplesmente referido como Rio, é a capital do estado brasileiro do Rio de Janeiro. Um dos maiores destinos turísticos internacionais no Brasil, na América Latina e também do Hemisfério Sul, é uma das primeiras cidades do país. É a segunda maior metrópole do Brasil (depois de São Paulo), a sétima maior da América e a décima oitava do mundo. Sua população segundo o censo de 2022 do \n[…]\nEm 1960, com a transferência da capital federal para Brasília, o Rio de Janeiro foi transformado em uma cidade-estado com o nome de Guanabara, cujo primeiro governador foi José Sette Câmara Filho, de forma interina. No censo demográfico daquele ano, a população do município era de 3 307 163 habitantes, porém o Rio de Janeiro perderia o posto de município mais populoso do país para São Paulo. Naquele mesmo ano também foi inaugurado o Elevado da Perimetral.\n[…]\nEm 2022, o índice passou a ser de 21,2 homicídios para cada 100 mil habitantes, revelando uma queda brusca e ocupando o lugar de 8ª capital menos letal no Brasil, apesar da intensa cobertura midiática em torno da cidade e dos crimes cometidos dentro de suas fronteiras.\n[…]\nApesar da mudança da capital federal, 59% dos servidores civis do Poder Executivo de órgãos federais e empresas públicas permaneceram na cidade. O Rio de Janeiro é também o único estado brasileiro onde o número de servidores federais supera o número dos servidores estaduais.\n[…]\nO professor Christian Lynch, do Instituto de Estudos Sociais e Políticos (IESP) da Universidade do Estado do Rio de Janeiro (UERJ), tem proposto que a cidade do Rio e a sua região metropolitana sejam federalizadas, formando uma segunda cidade federal no Brasil. De acordo com Lynch, a mudança da capital teria criado um ciclo de crises no Rio, que não poderia ser solucionado de outra forma, dada a marcada presença da União na cidade.\n[…]\nFluminenses naturais da cidade do Rio de Janeiro"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Capitais_do_Brasil",
        "situacao": "ok",
        "texto": "Esta lista de capitais do Brasil apresenta localidades que são ou já foram local onde está estabelecida a sede de governo. Assim, estão incluídas sedes coloniais, capitais nacionais e estaduais do Brasil, bem como transferências simbólicas comemorativas.\n[…]\nUma capital temática é um título honorífico concedido a um município para reconhecer sua relevância nacional em um tema específico, como cultura, economia, esporte ou turismo.\n[…]\nLista de capitais nacionais temáticas do Brasil\n[…]\nLista de capitais nacionais\n[…]\nLista de capitais estaduais dos Estados Unidos\n[…]\nInterior do Brasil\n[…]\nSilvestrin, Celsi Brönstrup; Noll, Gisele; Jacks, Nilda (1 de janeiro de 2017). Capitais brasileiras: dados históricos, demográficos, culturais e midiáticos. [S.l.]: Appris Editora e Livraria Eireli - ME. ISBN 9788547302917. Cópia arquivada em 28 de setembro de 2025\n[…]\nGerodetti, João Emilio; Cornejo, Carlos (2004). Lembranças do Brasil: as capitais brasileiras nos cartões-postais e álbuns de lembranças (em inglês). [S.l.]: Solaris Editorial. ISBN 9788589820011. Cópia arquivada em 25 de setembro de 2025"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Rio de Janeiro (cidade)",
      "descricao": "Capital do estado do Rio de Janeiro, às margens da Baía de Guanabara, capital do Brasil de 1763 a 1960."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1565, no meio da luta para expulsar os franceses da Guanabara, qual capitão português fundou a cidade do Rio de Janeiro?",
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
        "texto": "Rio de Janeiro, simplesmente referido como Rio, é a capital do estado brasileiro do Rio de Janeiro. Um dos maiores destinos turísticos internacionais no Brasil, na América Latina e também do Hemisfério Sul, é uma das primeiras cidades do país. É a segunda maior metrópole do Brasil (depois de São Paulo), a sétima maior da América e a décima oitava do mundo. Sua população segundo o censo de 2022 do \n[…]\nA Baía de Guanabara, à margem da qual a cidade foi fundada, foi descoberta pelo explorador português Gaspar de Lemos em 1.º de janeiro de 1502. No entanto, em 1.º de novembro de 1555, os franceses, capitaneados por Nicolas Durand de Villegagnon, apossaram-se da Baía da Guanabara, estabelecendo uma colônia na ilha de Sergipe (atual ilha de Villegagnon). Lá, ergueram o Forte Coligny, enquanto consolidavam alianças com os índios tupinambás locais.\n[…]\nPersistindo a presença francesa na região, os portugueses, sob o comando de Estácio de Sá, acompanhado por um grupo de fundadores incluindo também D. Antônio de Mariz, desembarcaram num istmo entre o Morro Cara de Cão e o Morro do Pão de Açúcar, fundando, em 1.º de março de 1565, a cidade de \"São Sebastião do Rio de Janeiro\".\n[…]\nA expulsão e derrota definitiva dos franceses e seus aliados indígenas, no entanto, só se deu em janeiro de 1567. A vitória de Estácio de Sá, subjugando elementos remanescentes franceses (os quais, aliados aos tamoios, dedicavam-se ao comércio e ameaçavam o domínio português na costa do Brasil), garantiu a posse do Rio de Janeiro, rechaçando, a partir daí, novas tentativas de invasões estrangeiras e expandindo, à custa de guerras, seu domínio sobre as ilhas e o continente.\n[…]\nEm 18 de janeiro de 2019, a cidade foi eleita pela UNESCO como a primeira Capital Mundial da Arquitetura.\n[…]\nFluminenses naturais da cidade do Rio de Janeiro\n[…]\nPlanejamento estratégico do Rio de Janeiro\n[…]\nLista de consulados no Rio de Janeiro"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Rio Grande do Norte",
      "descricao": "Estado do Nordeste do Brasil, na ponta nordeste da América do Sul, com capital em Natal."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O Rio Grande do Norte deve seu nome a um rio que os portugueses chamaram de Rio Grande. Que nome indígena esse rio, que banha Natal, tem hoje?",
    "resposta": "Potengi",
    "distratores": [
      "Capibaribe",
      "Jaguaribe",
      "Parnaíba"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Rio_Grande_do_Norte",
      "https://en.wikipedia.org/wiki/Rio_Grande_do_Norte"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Rio_Grande_do_Norte",
        "situacao": "ok",
        "texto": "Rio Grande do Norte é uma das 27 unidades federativas do Brasil. Banhado a norte e a leste pelo Oceano Atlântico, está situado a nordeste da Região Nordeste, fazendo divisas com outros dois estados, a Paraíba a sul e o Ceará a oeste. É dividido em 167 municípios e sua área total é de 52 809,601 km², o que equivale a 3,42% da área do Nordeste e a 0,62% da superfície do Brasil, sendo um pouco maior \n[…]\nEm 28 de janeiro de 1943, Natal recebeu a visita dos presidentes brasileiro (Getúlio Vargas) e estadunidense (Franklin Delano Roosevelt), sediou a Conferência do Potengi.\n[…]\nMais de 85% do território do Rio Grande do Norte é dividido em um conjunto de quatorze bacias hidrográficas: Apodi-Mossoró, Boqueirão, Catu, Ceará-Mirim, Curimataú, Doce, Guaju, Jacu, Maxaranguape, Piranhas-Açu, Potengi, Pirangi, Punaú e Trairi. Outros 10,8% estão na faixa litorânea norte de escoamento difuso e 1,2% na faixa leste, ambas constituídas por pequenos cursos d'água que fluem diretamente para o oceano, sem uma área delimitada pelos divisores de águas.\n[…]\nOutros rios importantes do estado são Curimataú, Jacu, Jundiaí, Potengi, Seridó e Trairi.\n[…]\nNo transporte marítimo, o estado conta com dois portos, ambos administrados pela Companhia Docas do Rio Grande do Norte (CODERN). O primeiro é o Porto de Natal, que se localiza na capital potiguar, na margem direita do Rio Potengi, inaugurado em outubro de 1932 e administrado pela CODERN desde 1983. O segundo é o Porto-Ilha de Areia Branca, construído em alto mar, em uma área de 15 mil metros quadrados, a 26 km da zona urbana de Areia Branca e a catorze quilômetros da costa.\n[…]\nA preservação e a divulgação dessa produção estão associadas à Pinacoteca Potiguar, instalada no Palácio Potengi, em Natal, desde o final da década de 1990, cujo acervo reúne pinturas, gravuras, tapeçarias e esculturas de diferentes períodos.\n[…]\n«Ministério Público do Rio Grande do Norte»"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Rio_Grande_do_Norte",
        "situacao": "ok",
        "texto": "Rio Grande do Norte (UK: , US: , Brazilian Portuguese: [ˈʁi.u ˈɡɾɐ̃dʒ(i) du ˈnɔʁtʃi] ) is one of the states of Brazil. It is located in the northeastern region of the country, forming the northeasternmost tip of the South American continent. The name literally translates to \"Great Northern River\", referring to the mouth of the Potenji River.\n[…]\nThe semi-arid climate is characterized not only by the low level but also the irregularity of rainfall; some years can go by with no or very little rain; most of the interior of the State is part of the Polygon of Droughts (an area which receives special attention from the federal government). There are also many mangroves in the state, and the interior is dominated by rainforest. Rocas Atoll in the Atlantic Ocean, 260 km Northeast of Natal, also belongs to the state of Rio Grande do Norte.\n[…]\nThe Vespucci expedition also named the Potengi (Tupi for \"River of Shrimps\") river, whose considerably large mouth contrasted with the nearby bodies of water, \"Rio Grande\" (Portuguese for \"Great River\"), after which the Captaincy, Province, and State were named. For decades thereafter, no permanent European settlement was established in the area, inhabited by the Potiguara people.\n[…]\nThe Brazilian Institute of Geography and Statistics estimates that the population of Rio Grande do Norte was 3,568,765 on 1 December 2021, a 14.76% increase since the 2000 census. As of the 2022 census, multiracial people make up 50.9% of the total population. The second largest group composed by white people was 39.5% of the total population, followed by black people (9.2%), indigenous people 0.3% and Asian people (0.2%).\n[…]\nList of governors of Rio Grande do Norte\n[…]\nList of municipalities in Rio Grande do Norte\n[…]\n(in Portuguese) Nominuto.com Newspaper\n[…]\n(in English) Rio Grande do Norte Travel Report"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Arquipélago dos Abrolhos",
      "descricao": "Arquipélago no litoral sul da Bahia, protegido pelo primeiro parque nacional marinho do Brasil."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Segundo a tradição, o nome do arquipélago baiano de Abrolhos vem de um alerta aos navegadores sobre os recifes da região. Que alerta era esse?",
    "resposta": "Abram os olhos",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Arquipélago_dos_Abrolhos",
      "https://en.wikipedia.org/wiki/Abrolhos_Archipelago"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Arquipélago_dos_Abrolhos",
        "situacao": "ok",
        "texto": "Abrolhos é um arquipélago costeiro localizado no Oceano Atlântico, a cerca de 65 quilômetros do litoral sul do estado brasileiro da Bahia. É constituído por cinco ilhas, estando a trinta e seis milhas náuticas da costa de Caravelas. As cinco ilhas do arquipélago são: Ilha de Santa Bárbara (sob controle da Marinha do Brasil, onde está o farol e também a única habitada), Ilha Siriba, Ilha Redonda, I\n[…]\nAs ilhas estão dispersas numa área total de 913 quilômetros quadrados, área que pertence ao Parque Nacional Marinho dos Abrolhos, controlado pelo Instituto Chico Mendes de Conservação da Biodiversidade (ICMBio) com apoio da Marinha do Brasil. O arquipélago foi a primeira área do Brasil que recebeu o título de \"Parque Nacional Marinho\", pelo decreto n.° 88.218, de 6 de abril de 1983.\n[…]\nA origem do seu nome vem da língua portuguesa, tendo primeiramente sido registrado em diversos mapas como um aviso aos navegadores por frequentes acidentes e naufrágios causados pela formação de corais e que dificultavam a navegação: \"Abre Olhos\".\n[…]\nEntretanto, no mês seguinte as ilhas do arquipélago começaram a receber pequenas manchas de óleo provenientes do vazamento misterioso que atingiu toda a costa Nordeste do Brasil. O evento atingiu seis aves marinhas, que foram resgatadas e transportadas até o Espírito Santo para remoção da substância. Felizmente, o evento não chegou ao Parque Nacional Marinho dos Abrolhos com magnitude suficiente a ponto de causar danos em grande escala.\n[…]\nParque Nacional Marinho dos Abrolhos\n[…]\nRegião dos Abrolhos\n[…]\nAbrolho (geografia)\n[…]\nAbrolhos (Oceania)\n[…]\n«Parque Nacional Marinho dos Abrolhos»\n[…]\n«Grupo reconfigura mapa subaquático de Abrolhos» , Folha de S.Paulo"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Abrolhos_Archipelago",
        "situacao": "ok",
        "texto": "The Abrolhos Archipelago (Portuguese: Arquipélago de Abrolhos) are a group of 5 small islands with coral reefs off the southern coast of Bahia state in the northeast of Brazil, between 17º25’—18º09’ S and 38º33’—39º05’ W. Caravelas is the nearest town. Their name comes from the Portuguese: abrolho (\"Abre Olhos\" meaning: Open your eyes), a rock awash or submerged sandbank that is a danger to ships.\n[…]\nThese islets were surveyed by  Baron Roussin. As part of the instructions for the second survey voyage of HMS Beagle, the Admiralty noted \"the great importance of knowing the true position of the Abrolhos Banks, and the certainty that they extend much further out than the limits assigned to them by Baron Roussin\", and asked Captain Robert FitzRoy to take soundings and establish the position of the reefs.\n[…]\nKnown to the Royal Navy in the First World War as the Abrolhos Rocks, the area was used as a refuelling point (coal) during Doveton Sturdee's operations against the German cruisers of Admiral Von Spee in late 1914. This operation ended with the Battle of the Falklands and the subsequent sinking of the only survivor, SMS Dresden.\n[…]\nParcel dos Abrolhos, a large submerged reef extending from north to south east of the archipelago. Located 5 kilometres (3.1 miles) to the east of Santa Barbara Island, its limits are not well defined.\n[…]\nParcel das Paredes, located to the northwest of the archipelago and the largest feature of the wider Abrolhos.\n[…]\nThe Abrolhos Marine National Park (Portuguese: Parque Nacional Marinho dos Abrolhos) is a Marine Park located in the Abrolhos Archipelago since 1983. It is strictly forbidden to disembark on Ilha Guarita and Ilha Suest.\n[…]\nAbrolhos Isle Portal\n[…]\nAbrolhos - The South Atlantic Largest Coral Reef Complex\n[…]\nABROLHOS (en espanhol)"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Arquipélago dos Abrolhos",
      "descricao": "Arquipélago no litoral sul da Bahia, protegido pelo primeiro parque nacional marinho do Brasil."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Famoso pelas baleias-jubarte que visitam suas águas, o arquipélago de Abrolhos, no sul da Bahia, é formado por quantas ilhas?",
    "resposta": "Cinco",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Arquipélago_dos_Abrolhos",
      "https://en.wikipedia.org/wiki/Abrolhos_Archipelago"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Arquipélago_dos_Abrolhos",
        "situacao": "ok",
        "texto": "Abrolhos é um arquipélago costeiro localizado no Oceano Atlântico, a cerca de 65 quilômetros do litoral sul do estado brasileiro da Bahia. É constituído por cinco ilhas, estando a trinta e seis milhas náuticas da costa de Caravelas. As cinco ilhas do arquipélago são: Ilha de Santa Bárbara (sob controle da Marinha do Brasil, onde está o farol e também a única habitada), Ilha Siriba, Ilha Redonda, I\n[…]\nAs ilhas estão dispersas numa área total de 913 quilômetros quadrados, área que pertence ao Parque Nacional Marinho dos Abrolhos, controlado pelo Instituto Chico Mendes de Conservação da Biodiversidade (ICMBio) com apoio da Marinha do Brasil. O arquipélago foi a primeira área do Brasil que recebeu o título de \"Parque Nacional Marinho\", pelo decreto n.° 88.218, de 6 de abril de 1983.\n[…]\nAlém disso, possui uma grande diversidade de fauna marinha, com inúmeras espécies de peixes, moluscos, corais, esponjas, tartarugas marinhas e vegetação que apresenta plantas suculentas, gramínea, arbustos e cactos. O Parque é aberto todos os dias, mas com visitação controlada. Diversas embarcações oferecem passeio de um dia ou mais à unidade. A partir de julho inicia-se a temporada das baleias-jubarte que vai até novembro.\n[…]\nEntretanto, no mês seguinte as ilhas do arquipélago começaram a receber pequenas manchas de óleo provenientes do vazamento misterioso que atingiu toda a costa Nordeste do Brasil. O evento atingiu seis aves marinhas, que foram resgatadas e transportadas até o Espírito Santo para remoção da substância. Felizmente, o evento não chegou ao Parque Nacional Marinho dos Abrolhos com magnitude suficiente a ponto de causar danos em grande escala.\n[…]\nParque Nacional Marinho dos Abrolhos\n[…]\nRegião dos Abrolhos\n[…]\nAbrolho (geografia)\n[…]\nLista de ilhas da Bahia\n[…]\nAbrolhos (Oceania)\n[…]\n«Parque Nacional Marinho dos Abrolhos»\n[…]\n«Grupo reconfigura mapa subaquático de Abrolhos» , Folha de S.Paulo"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Abrolhos_Archipelago",
        "situacao": "ok",
        "texto": "The Abrolhos Archipelago (Portuguese: Arquipélago de Abrolhos) are a group of 5 small islands with coral reefs off the southern coast of Bahia state in the northeast of Brazil, between 17º25’—18º09’ S and 38º33’—39º05’ W. Caravelas is the nearest town. Their name comes from the Portuguese: abrolho (\"Abre Olhos\" meaning: Open your eyes), a rock awash or submerged sandbank that is a danger to ships.\n[…]\nThese islets were surveyed by  Baron Roussin. As part of the instructions for the second survey voyage of HMS Beagle, the Admiralty noted \"the great importance of knowing the true position of the Abrolhos Banks, and the certainty that they extend much further out than the limits assigned to them by Baron Roussin\", and asked Captain Robert FitzRoy to take soundings and establish the position of the reefs.\n[…]\nKnown to the Royal Navy in the First World War as the Abrolhos Rocks, the area was used as a refuelling point (coal) during Doveton Sturdee's operations against the German cruisers of Admiral Von Spee in late 1914. This operation ended with the Battle of the Falklands and the subsequent sinking of the only survivor, SMS Dresden.\n[…]\nParcel dos Abrolhos, a large submerged reef extending from north to south east of the archipelago. Located 5 kilometres (3.1 miles) to the east of Santa Barbara Island, its limits are not well defined.\n[…]\nParcel das Paredes, located to the northwest of the archipelago and the largest feature of the wider Abrolhos.\n[…]\nThe Abrolhos Marine National Park (Portuguese: Parque Nacional Marinho dos Abrolhos) is a Marine Park located in the Abrolhos Archipelago since 1983. It is strictly forbidden to disembark on Ilha Guarita and Ilha Suest.\n[…]\nAbrolhos Isle Portal\n[…]\nAbrolhos - The South Atlantic Largest Coral Reef Complex\n[…]\nABROLHOS (en espanhol)"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Usina de Itaipu",
      "descricao": "Usina hidrelétrica binacional de Brasil e Paraguai, no rio Paraná."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "A usina de Itaipu herdou o nome de uma ilha que existia no rio Paraná, perto da obra. O que esse nome indígena significa?",
    "resposta": "Pedra que canta",
    "distratores": [
      "Rio do peixe",
      "Ilha das aves",
      "Água vermelha"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Usina_Hidrelétrica_de_Itaipu",
      "https://en.wikipedia.org/wiki/Itaipu_Dam"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Usina_Hidrelétrica_de_Itaipu",
        "situacao": "ok",
        "texto": "Usina Hidrelétrica de Itaipu (em castelhano:  Itaipú, em guarani:  Itaipu) é uma hidrelétrica binacional localizada no Rio Paraná, na fronteira entre o Brasil e o Paraguai. A barragem foi construída pelos dois países entre 1975 e 1982. O nome Itaipu foi tirado de uma ilha que existia perto do local de construção. Na língua tupi, o termo significa \"pedra na qual a água faz barulho\", através da junç\n[…]\nItaipu é uma palavra de origem tupi-guarani que significa \"pedra que canta\", através da junção de itá = pedra e ipo'ú = cantora, ou então \"pedra na qual a água faz barulho\", através da junção de itá (pedra), y (água, rio), e pu (barulho). Era o nome da pequena ilha que havia no atual local da usina, antes da obra.\n[…]\nAs primeiras pesquisas de campo para a elaboração do projeto foram feitas em pequenas balsas por técnicos brasileiros e paraguaios. O local escolhido para a construção foi um ponto do rio conhecido como Itaipu, que em tupi quer dizer \"a pedra que canta\". As dimensões do projeto também foram traçadas desde o início: a área da hidrelétrica vai de Foz do Iguaçu, no Brasil, e Ciudad del Este, no sul do Paraguai, até Guaíra e Salto del Guairá, no norte deste país.\n[…]\nEntretanto, caso houvesse o rompimento da represa de Itaipu, na verdade boa parte da água seria absorvida pela profunda calha do Rio Paraná poucos quilômetros depois da barragem e a Argentina ainda estaria protegida pela represa da Usina de Yacyretá, localizada 400 km abaixo de Itaipu.\n[…]\nSegundo um relatório produzido ao longo de três anos pela Procuradoria Geral da República, a construção da usina hidrelétrica gerou graves violações de direitos dos povos indígenas, com adulteração de procedimentos para subestimar o número de índios que habitavam a região. Para criar o lago artificial, por exemplo, a obra inundou cerca de 135 mil hectares e transferiu 40 mil pessoas entre índios e não índios no Paraná."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Itaipu_Dam",
        "situacao": "ok",
        "texto": "The Itaipu Dam (Guarani: Yjoko Itaipu [itajˈpu]; Portuguese: Barragem de Itaipu [itajˈpu]; Spanish: Represa de Itaipú [itajˈpu]) is a hydroelectric dam on the Paraná River located on the border between Brazil and Paraguay.\n[…]\nIn 1970, the consortium formed by the companies ELC Electroconsult S.p.A. (from Italy) and IECO (from the United States)  won the international competition for the realization of the viability studies and for the elaboration of the construction project. Design studies began in February 1971. On April 26, 1973, Brazil and Paraguay signed the Itaipu Treaty, the legal instrument for the hydroelectric exploitation of the Paraná River by the two countries.\n[…]\nThe Santa Maria Ecological Corridor now connects the Iguaçu National Park with the protected margins of Lake Itaipu, and via these margins with the Ilha Grande National Park.\n[…]\nItaipu is one of the most expensive objects ever built.\n[…]\nThe maximum flow of Itaipu's fourteen segmented spillways is 62.2 thousand cubic metres per second (2.20×10^6 cu ft/s), into three ski slope-formed canals. It is equivalent to 40 times the average flow of the nearby natural Iguaçu Falls.\n[…]\nElectricity is 55% cheaper when made by the Itaipu Dam than by the other types of power plants in the area.\n[…]\nIn the period 2012–2021, the Itaipu Dam maintained the second-highest average annual hydroelectric production in the world, averaging 89.22 TWh per year, second to the 97.22 TWh per year average of the Three Gorges Dam in that period.\n[…]\nItaipu Company Site (in Portuguese, English, and Spanish)\n[…]\nThe Itaipu Transmission System[link removed]\n[…]\nPanoramic – Itaipu Binacional – Foz do Iguaçu – Brazil Archived 2019-06-28 at the Wayback Machine"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Usina de Itaipu",
      "descricao": "Usina hidrelétrica binacional de Brasil e Paraguai, no rio Paraná."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Dividida entre Brasil e Paraguai, a usina de Itaipu gera energia com quantas unidades geradoras, cada uma com sua turbina?",
    "resposta": "Vinte",
    "distratores": [
      "Oito",
      "Doze",
      "Quarenta"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Usina_Hidrelétrica_de_Itaipu",
      "https://en.wikipedia.org/wiki/Itaipu_Dam"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Usina_Hidrelétrica_de_Itaipu",
        "situacao": "ok",
        "texto": "Usina Hidrelétrica de Itaipu (em castelhano:  Itaipú, em guarani:  Itaipu) é uma hidrelétrica binacional localizada no Rio Paraná, na fronteira entre o Brasil e o Paraguai. A barragem foi construída pelos dois países entre 1975 e 1982. O nome Itaipu foi tirado de uma ilha que existia perto do local de construção. Na língua tupi, o termo significa \"pedra na qual a água faz barulho\", através da junç\n[…]\nA usina hidrelétrica de Itaipu começou a ser pensada ainda na década de 1960, quando foram assinados os primeiros acordos de cooperação entre Brasil e Paraguai.\n[…]\nA capacidade de geração da usina é de 14 GW, sendo que a potência nominal de cada unidade geradora (turbina e gerador) é de 700 MW. No entanto, devido ao fato de a queda bruta real ser um pouco maior do que a queda bruta projetada, a potência disponível em cada unidade geradora é de aproximadamente 750 MW na maior parte do tempo, aumentando a capacidade de geração de energia da usina.\n[…]\nEm 32 anos de operação, a Itaipu Binacional é líder mundial em produção de energia limpa e renovável, tendo produzido mais de 2,5 bilhões de MWh. Com 20 unidades geradoras e 14 mil MW de potência instalada, fornece cerca de 17% da energia consumida no Brasil e 75% no Paraguai. Sua maior produção anual foi estabelecida em 2016, com 103 068 366 de MWh. O recorde anterior ocorreu em 2013, com a geração de 98 630 035 de MWh.\n[…]\nApesar de gerar menos do que em anos de recorde, Itaipu atingiu em 2014 o melhor índice de eficiência operacional dos 32 anos, com 99,3%. Na prática, isso significa que a operação da usina, que tem o objetivo de maximizar a utilização da água (energia disponível), atendendo as demandas dos sistemas elétricos brasileiro e paraguaio, teve quase zero de perdas. Ou seja, da água que poderia ser turbinada, quase nada foi vertido em 2014.\n[…]\nTudo o que chegou de água turbinável foi usado na produção de energia.\n[…]\nTratado de Itaipu"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Itaipu_Dam",
        "situacao": "ok",
        "texto": "The Itaipu Dam (Guarani: Yjoko Itaipu [itajˈpu]; Portuguese: Barragem de Itaipu [itajˈpu]; Spanish: Represa de Itaipú [itajˈpu]) is a hydroelectric dam on the Paraná River located on the border between Brazil and Paraguay.\n[…]\nThe concept behind the Itaipu Power Plant was the result of serious negotiations between the two countries during the 1960s. The \"Ata do Iguaçu\" (Iguaçu Act) was signed on July 22, 1966, by the Brazilian and Paraguayan Ministers of Foreign Affairs, Juracy Magalhães and Raúl Sapena Pastor.\n[…]\nIn 1970, the consortium formed by the companies ELC Electroconsult S.p.A. (from Italy) and IECO (from the United States)  won the international competition for the realization of the viability studies and for the elaboration of the construction project. Design studies began in February 1971. On April 26, 1973, Brazil and Paraguay signed the Itaipu Treaty, the legal instrument for the hydroelectric exploitation of the Paraná River by the two countries.\n[…]\nOn November 10, 2009, transmission from the plant was completely disrupted, possibly due to a storm damaging up to three high-voltage transmission lines. Itaipu itself was not damaged. This caused massive power outages in Brazil and Paraguay, blacking out the entire country of Paraguay for 15 minutes, and plunging Rio de Janeiro and São Paulo into darkness for more than 2 hours. 50 million people were reportedly affected. The blackout occurred at 22:13 local time.\n[…]\nThe Itaipu Transmission System[link removed]\n[…]\nVoith-Siemens Hydro Power Generation, one of the hydro turbines and generators manufacturer for this project\n[…]\nPanoramic – Itaipu Binacional – Foz do Iguaçu – Brazil Archived 2019-06-28 at the Wayback Machine"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Cataratas do Iguaçu",
      "descricao": "Conjunto de quedas d'água do rio Iguaçu, na fronteira entre o Paraná, no Brasil, e a província argentina de Misiones."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Bem antes de ficar famoso pelas cataratas, o rio Iguaçu já tinha esse nome em guarani. O que ele quer dizer?",
    "resposta": "Água grande",
    "distratores": [
      "Rio das pedras",
      "Água que cai",
      "Rio barulhento"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Cataratas_do_Iguaçu",
      "https://en.wikipedia.org/wiki/Iguazu_Falls"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Cataratas_do_Iguaçu",
        "situacao": "ok",
        "texto": "Cataratas do Iguaçu (em castelhano: Cataratas del Iguazú) é um conjunto de cerca de 275 quedas de água no rio Iguaçu (na Bacia hidrográfica do rio Paraná), localizada entre o Parque Nacional do Iguaçu, Paraná, no Brasil, e o Parque Nacional Iguazú em Misiones, na Argentina, na fronteira entre os dois países. A área total de ambos os parques nacionais corresponde a 250 mil hectares de floresta subt\n[…]\nSeu nome vem das palavras Tupi ou Guarani y ɨ (água) e ûasú waˈsu (grande). Reza a lenda que um deus planejava se casar com uma bela mulher chamada Naipi, que fugiu com seu amante mortal Tarobá em uma canoa. Com raiva, o deus cortou o rio, criando as cachoeiras e condenando os amantes a uma queda eterna. O primeiro europeu a descobrir e descrever as cataratas foi o conquistador espanhol Álvar Núñez Cabeza de Vaca, em 31 de janeiro de 1542, e uma das quedas no lado argentino recebeu seu nome.\n[…]\nA área das Cataratas do Iguaçu passou a ser predominantemente ocupada por povos guaranis, pertencentes ao tronco linguístico tupi-guarani, que migraram para o sul da América do Sul e estabeleceram aldeias ao longo dos rios Paraná e Iguaçu. Diversas narrativas tradicionais associadas às cataratas sobreviveram entre os povos indígenas da região, destacando-se a lenda de Naipi e Tarobá, que explica a origem das quedas d'água por meio da ação de uma divindade ligada às forças da natureza.\n[…]\nO sistema consiste de 275 cachoeiras ao longo de 2,7 km do rio Iguaçu. Algumas das quedas individuais têm  até 82 metros de altura, embora a maioria tenha cerca de 64 metros. A Garganta do Diabo é a queda com maior fluxo das Cataratas do Iguaçu, que têm cerca de 275 quedas de água, com uma altura superior a 70 metros ao longo de 2,7 km do Rio Iguaçu. A Garganta do Diabo principia em forma de \"U\" invertido com 150 metros de largura e 80 metros de altura.\n[…]\nCataratas do Iguaçu no Google Maps"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Iguazu_Falls",
        "situacao": "ok",
        "texto": "The Iguazú Falls or Iguaçu Falls are waterfalls of the Iguazu River on the border of the Argentine province of Misiones and the Brazilian state of Paraná. Together, they make up the largest waterfall system in the world. The falls divide the river into the upper and lower Iguazu. The Iguazu River rises near the heart of the city of Curitiba. For most of its course, the river flows through Brazil; \n[…]\nThe first proposal for a Brazilian national park aimed at providing a pristine environment to \"future generations\", just as \"it had been created by God\" and endowed with \"all possible preservation, from the beautiful to the sublime, from the picturesque to the awesome\" and \"an unmatched flora\" located in the \"magnificent Iguaçu waterfalls\".\n[…]\nThese were the words used by André Rebouças, an engineer, in his book Provinces of Paraná, Railways to Mato Grosso and Bolivia, which started up the campaign aimed at preserving the Iguaçu Falls in 1876. At this time, Yellowstone National Park in the US, the first national park in the world, was four years old.\n[…]\nAerolíneas Argentinas has direct flights from Buenos Aires to Iguazu International Airport. Azul, GOL, and LATAM Brasil offer services from main Brazilian cities to Foz do Iguaçu. From Foz do Iguaçu airport, the park may be reached by taking a taxi or bus to the entrance of the park. Their park has an entrance fee on both sides. Once inside, free and frequent buses are provided to various points within the park.\n[…]\nThe town of Foz do Iguaçu is about 20 km (12 mi) away, and the airport is between the park and the town.\n[…]\nFoz do Iguaçu; Brazilian government site (archived; in Portuguese)\n[…]\nCopel Monitoramento Hydrológico (Iguazu River flow rate measurements; leftmost green dot gives flow rate at Hotel Cataratas)"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Cataratas do Iguaçu",
      "descricao": "Conjunto de quedas d'água do rio Iguaçu, na fronteira entre o Paraná, no Brasil, e a província argentina de Misiones."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Nas Cataratas do Iguaçu, a principal e mais impressionante queda forma um paredão em U, de onde sobe uma nuvem de vapor. Qual é o nome dela?",
    "resposta": "Garganta do Diabo",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Cataratas_do_Iguaçu",
      "https://en.wikipedia.org/wiki/Iguazu_Falls"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Cataratas_do_Iguaçu",
        "situacao": "ok",
        "texto": "Cataratas do Iguaçu (em castelhano: Cataratas del Iguazú) é um conjunto de cerca de 275 quedas de água no rio Iguaçu (na Bacia hidrográfica do rio Paraná), localizada entre o Parque Nacional do Iguaçu, Paraná, no Brasil, e o Parque Nacional Iguazú em Misiones, na Argentina, na fronteira entre os dois países. A área total de ambos os parques nacionais corresponde a 250 mil hectares de floresta subt\n[…]\nO sistema consiste de 275 cachoeiras ao longo de 2,7 km do rio Iguaçu. Algumas das quedas individuais têm  até 82 metros de altura, embora a maioria tenha cerca de 64 metros. A Garganta do Diabo é a queda com maior fluxo das Cataratas do Iguaçu, que têm cerca de 275 quedas de água, com uma altura superior a 70 metros ao longo de 2,7 km do Rio Iguaçu. A Garganta do Diabo principia em forma de \"U\" invertido com 150 metros de largura e 80 metros de altura.\n[…]\nEstá localizada no Parque Nacional do Iguaçu  estado do Paraná, Brasil, fazendo fronteira com o Parque Nacional Iguazú, na província de Misiones, Argentina. Embora o território brasileiro abrigue mais de 95% da bacia do rio Iguaçu, dois terços das cataratas ficam em território argentino.\n[…]\nO acesso pela Argentina é facilitado pelo Trem Ecológico da Selva, que leva os visitantes diretamente para a entrada da Garganta do Diabo, bem como as trilhas superiores e inferiores.\n[…]\nA lenda de Naipi e Tarobá, de origem kaingang, é uma das narrativas mais simbólicas associadas às Cataratas do Iguaçu e à cultura de Foz do Iguaçu. Segundo a tradição, Mboi, uma divindade em forma de serpente e guardião das águas, exigia o sacrifício anual de uma jovem para manter a harmonia entre a natureza e a comunidade. Quando Naipi foi escolhida para o ritual, seu amado, o guerreiro Tarobá, fugiu com ela pelo Rio Iguaçu.\n[…]\nCataratas do Iguaçu no Twitter\n[…]\nCataratas do Iguaçu no YouTube\n[…]\nCataratas do Iguaçu no TripAdvisor\n[…]\nCataratas do Iguaçu no Google Maps"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Iguazu_Falls",
        "situacao": "ok",
        "texto": "The Iguazú Falls or Iguaçu Falls are waterfalls of the Iguazu River on the border of the Argentine province of Misiones and the Brazilian state of Paraná. Together, they make up the largest waterfall system in the world. The falls divide the river into the upper and lower Iguazu. The Iguazu River rises near the heart of the city of Curitiba. For most of its course, the river flows through Brazil; \n[…]\nThe falls are protected within Iguazú National Park in Argentina and Iguaçu National Park in Brazil, inscribed on the UNESCO World Heritage List in 1984 and 1986 respectively.\n[…]\nAbout half of the river's flow falls into a long and narrow chasm called the Devil's Throat (Garganta del Diablo in Spanish or Garganta do Diabo in Portuguese).\n[…]\nAerolíneas Argentinas has direct flights from Buenos Aires to Iguazu International Airport. Azul, GOL, and LATAM Brasil offer services from main Brazilian cities to Foz do Iguaçu. From Foz do Iguaçu airport, the park may be reached by taking a taxi or bus to the entrance of the park. Their park has an entrance fee on both sides. Once inside, free and frequent buses are provided to various points within the park.\n[…]\nThe town of Foz do Iguaçu is about 20 km (12 mi) away, and the airport is between the park and the town.\n[…]\nThe Argentine access, across the forest, is by a Rainforest Ecological Train very similar to the one in Disney's Animal Kingdom. The train brings visitors to the entrance of Devil's Throat, as well as the upper and lower trails. The Paseo Garganta del Diablo is a 1 km-long (0.6 mi) trail that brings visitors directly over the falls of Devil's Throat, the highest and deepest of the falls.\n[…]\nFoz do Iguaçu; Brazilian government site (archived; in Portuguese)\n[…]\nCopel Monitoramento Hydrológico (Iguazu River flow rate measurements; leftmost green dot gives flow rate at Hotel Cataratas)"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Rondônia",
      "descricao": "Estado da Região Norte do Brasil, na fronteira com a Bolívia, com capital em Porto Velho."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Quando foi criado, em 1943, o território federal que hoje é Rondônia levava o nome de qual rio da fronteira com a Bolívia?",
    "resposta": "Guaporé",
    "distratores": [
      "Madeira",
      "Mamoré",
      "Juruá"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Rondônia",
      "https://pt.wikipedia.org/wiki/Território_Federal_do_Guaporé"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Rondônia",
        "situacao": "ok",
        "texto": "Rondônia é uma das 27 unidades federativas do Brasil. Está localizado na região Norte e tem como limites os estados de Mato Grosso a leste, Amazonas a norte, Acre a oeste e o Estado Plurinacional da Bolívia a oeste e sul. É dividido em 52 municípios e ocupa uma área de 237 590,547 km², equivalente ao território da Romênia e quase cinco vezes maior que a Croácia. Sua capital e município mais populo\n[…]\nAntigo Território do Guaporé, em virtude do Rio Guaporé, fronteira natural entre Brasil e Bolívia, manteve este nome até 17 de fevereiro de 1956, quando passou a se chamar Território de Rondônia,  em homenagem ao Marechal Rondon, explorador da região. Segundo o naturalista alemão von Martius (1794-1868), a palavra \"Guaporé\" origina-se do tupi, sendo wa \"campo\" e poré \"catarata\", isto é, \"cachoeira do campo, rio campestre\".\n[…]\nComo em muitos casos da geonímia, o nome Guaporé designou inicialmente o rio, passando em seguida a se referir à região. Em 1982, ao ser elevado a condição de estado, recebeu o nome de Estado de Rondônia.\n[…]\nEm 1943 foi constituído o Território Federal de Guaporé, com capital em Porto Velho, com o desmembramento de parte de Mato Grosso e do Amazonas. A intenção era apoiar de maneira mais direta a ocupação e o desenvolvimento da área. Em 1956, o território passou a se chamar Rondônia.\n[…]\nRicos em borracha, cassiterita e produtos como pescado, castanha-do-pará, couros e peles silvestres, os municípios de Porto Velho e Guajará-Mirim foram desmembrados em 1943 dos estados do Amazonas e Mato Grosso e passaram a constituir uma nova unidade da federação, o Território Federal do Guaporé, com capital em Porto Velho, elevada a cidade em 2 de outubro de 1914. Em 1956, por decisão do Congresso Nacional o nome do território passou a ser Rondônia, em homenagem ao grande sertanista.\n[…]\n«Página da Assembleia Legislativa de Rondônia»\n[…]\n«Página do Tribunal de Justiça de Rondônia»"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Território_Federal_do_Guaporé",
        "situacao": "ok",
        "texto": "O Território Federal do Guaporé, chamado a partir de 1956 de Território Federal de Rondônia, foi um território federal do Brasil. O território foi desmembrado do Estado do Amazonas e do Estado do Mato Grosso em 13 de setembro de 1943, durante o governo Getúlio Vargas durante o Estado Novo. O nome Guaporé é uma referência ao Rio Guaporé, que compõe a fronteira sul de Rondônia com a Bolívia.\n[…]\nEm 1981, o território foi elevado a categoria de estado, o estado de Rondônia.\n[…]\n- a Nordeste, Leste e Sudeste, o rio Curuim, da sua foz no rio Purús até o paralelo que passa pela nascente do Igarapé Cuniã, continua pelo referido paralelo até alcançar a cabeceira do Igarapé Cuniã, descendo por este até a sua confluência com o rio Madeira, e por este abaixo até à foz do rio Ji-Paraná (ou rio Machado) subindo até à foz do rio Comemoração ou Floriano prossegue subindo por este até à sua, nascente, daí segue pelo divisor de águas do planalto de Vilhena, contornando-o até à nascente do rio Cabixi e descendo pelo mesmo até à foz no rio Guaporé;\n[…]\n- ao Sul, Sudoeste e Oeste pelos limites com a República da Bolívia, desde a confluência do rio Cabixí no rio Guaporé, até o limite entre o Território do Acre e o Estado do Amazonas, por cuja linha limítrofe continua até encontrar a margem direita do rio Ituxí, ou Iquirí.\n[…]\nA Lei Ordinária nº 2731, de 17 de fevereiro de 1956, muda a denominação do Território Federal do Guaporé para Território Federal de Rondônia, em homenagem ao sertanista Marechal Cândido Rondon (1865-1958).\n[…]\nO território foi elevado a condição de estado em dezembro de 1981, com o primeiro governo estadual tomando posse em 4 de janeiro de 1982.\n[…]\nRondônia\n[…]\nDecreto-Lei nº 5.812, de 13 de setembro 1943 - Cria os Territórios Federais do Amapá, do Rio Branco, do Guaporé, de Ponta Porã e do Iguassú"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "São Luís",
      "descricao": "Capital do estado do Maranhão, situada na ilha de Upaon-Açu e fundada em 1612."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Fundada por franceses em 1612, a capital do Maranhão recebeu seu nome em homenagem a qual rei da França, ainda menino na época?",
    "resposta": "Luís Treze",
    "distratores": [
      "Luís Catorze",
      "Luís Doze",
      "Henrique Quarto"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/São_Luís_(Maranhão)",
      "https://en.wikipedia.org/wiki/São_Luís,_Maranhão"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/São_Luís_(Maranhão)",
        "situacao": "ok",
        "texto": "São Luís, também chamada de São Luís do Maranhão, é a capital do estado brasileiro do Maranhão. É a única capital brasileira fundada por franceses, no dia 8 de setembro de 1612, posteriormente invadida por holandeses e, por fim, colonizada pelos portugueses. Localiza-se na ilha de Upaon-Açu no Atlântico Sul, entre as baías de São Marcos e São José de Ribamar, no Golfão Maranhense.\n[…]\nUma missa rezada por capuchinhos e a construção de um forte nomeado de Saint-Louis (\"São Luís\"), em homenagem prestada a Luís IX patrono da França, e ao rei francês da época Luís XIII, marcaram a data de fundação da nova cidade: 8 de setembro. Logo se aliaram aos indígenas, que foram fiéis companheiros na batalha contra portugueses vindos de Pernambuco decididos a reconquistar o território, o que acabou por acontecer alguns anos depois.\n[…]\nA Catedral de São Luís do Maranhão foi erguida por ordem do terceiro capitão-mor Diogo Machado da Costa em 1629, quando a cidade passava por um surto de varíola. É uma homenagem à protetora dos portugueses na Batalha de Guaxenduba (vitória sobre os franceses). Foi reconstruída várias vezes até 1922, quando assumiu o aspecto neoclássico. No interior destaca-se o altar-mor talhado em ouro.\n[…]\nNesse período, a fase de ouro da economia maranhense, São Luís passou a viver uma efervescência cultural. A cidade, que se  relacionava mais com as capitais europeias que as outras cidades brasileiras, foi a primeira a receber uma companhia italiana de ópera. Possuía calçamento e iluminação como poucas do país. Recebia semanalmente as últimas novidades da literatura francesa.\n[…]\nUm sistema de ferry-boats realiza a Travessia São Luís-Alcântara, cruzando a Baía de São Marcos e encurtando a distância entre a capital e a Baixada Maranhense, transportando mais de 1,8 milhão de passageiros por ano.\n[…]\nRegião Metropolitana de São Luís\n[…]\nMaranhenses de São Luís"
      },
      {
        "url": "https://en.wikipedia.org/wiki/São_Luís,_Maranhão",
        "situacao": "ok",
        "texto": "São Luís (; Brazilian Portuguese: [ˌsɐ̃w̃ luˈis]; \"Saint Louis\") is the capital and largest city of the Brazilian state of Maranhão. The city is located on São Luís Island, in the Baía de São Marcos (Saint Mark's Bay), an extension of the Atlantic Ocean which forms the estuary of Pindaré, Mearim, Itapecuru and other rivers. Its coordinates are 2.53° south, 44.30° west. São Luís has the second larg\n[…]\nSão Luís, created originally as Saint-Louis-de-Maragnan, is the only Brazilian state capital founded by France (see France Équinoxiale) and it is one of the three Brazilian state capitals located on islands (the others are Vitória and Florianópolis). The historic center of the city (dating from the 17th century) has its original street plan preserved and was named a UNESCO World Heritage Site in 1997.\n[…]\nIn 1677, the city was made the seat of the new Roman Catholic Diocese of São Luís do Maranhão.\n[…]\nDuring this golden period of the Maranhão economy São Luís had a lively cultural effervescence. The city had more in common with the European capitals than the other Brazilian cities. It was the first to receive an Italian opera and received the latest news about French literature every week. The rich cotton producers and local businessmen sent their children to study in Recife, Salvador, Rio de Janeiro and as far as Europe.\n[…]\nSão Luís is known as the Brazilian capital of reggae, a very popular rhythm in the city. In 2018, the Reggae Museum of Maranhão was founded, the first museum dedicated to reggae outside of Jamaica and the second in the world.\n[…]\nFootball is the most popular sport in São Luís, though its clubs aren't much well known in the rest of Brazil. The professional clubs in São Luís are: Sampaio Corrêa who currently play in Brazil's second division, Moto Club who play in the fourth division and Maranhão Atlético Clube who take part in the regional Campeonato Maranhense."
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Campo Grande",
      "descricao": "Capital do estado de Mato Grosso do Sul."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Por causa da cor avermelhada da sua terra, Campo Grande, capital de Mato Grosso do Sul, ganhou qual apelido?",
    "resposta": "Cidade Morena",
    "distratores": [
      "Cidade Verde",
      "Cidade Jardim",
      "Cidade do Sol"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Campo_Grande_(Mato_Grosso_do_Sul)"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Campo_Grande_(Mato_Grosso_do_Sul)",
        "situacao": "ok",
        "texto": "Campo Grande é capital do estado brasileiro de Mato Grosso do Sul, na região Centro-Oeste do país. Reduto histórico de divisionistas entre o sul e o norte, Campo Grande foi fundada por mineiros, que vieram aproveitar os campos de pastagens nativas e as águas cristalinas da região dos cerrados.\n[…]\nApresenta, ainda nos dias de hoje, forte relação com a cultura indígena e suas raízes históricas. Por causa da cor de sua terra (roxa ou vermelha), recebeu a alcunha de Cidade Morena. A cidade está localizada em uma região de planalto, em que é possível ver os limites da linha do horizonte ao fundo de qualquer paisagem.\n[…]\nEntretanto, a expansão horizontal da cidade acabou provocando baixa densidade populacional, grandes distâncias, bairros com pouca infraestrutura, além de inúmeros terrenos vagos. Segundo urbanistas, caberia outra Campo Grande dentro dela mesma. Há estudos para urbanizar os vazios da cidade.[carece de fontes]?\n[…]\nA cidade é servida pelo Autódromo Internacional Orlando Moura, que fica 15 km a oeste do Centro de Campo Grande e possui uma pista com 3.433 metros de extensão. Recebe todos os anos etapa nacional da Stock Car, Fórmula Truck e Motovelocidade e Kartódromo Ayrton Senna, que está a 15 km a sul do Centro de Campo Grande, no bairro Cidade Morena, possuindo uma pista de 930 metros de extensão.[carece de fontes]?\n[…]\nOutros times profissionais do município são: Moreninhas, Portuguesa, Campo Grande, Taveirópolis (inativo), Guaicurus e MS Saad (inativo) e o clube mais novo da Capital Novoperário Futebol Clube. A cidade possui alguns estádios, como o Morenão; Estádio das Moreninhas (localizado no Parque Jacques da Luz) e Olho do Furacão (de propriedade do Cene). Outros locais, como Elias Gadia e Belmar Fidalgo, foram transformados em praças.\n[…]\nCampo Grande no IBGE Cidades"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Monte Roraima",
      "descricao": "Tepui de topo plano na tríplice fronteira entre Brasil, Venezuela e Guiana."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Que romance de Arthur Conan Doyle, sobre dinossauros que sobrevivem num platô isolado da América do Sul, teria sido inspirado no Monte Roraima?",
    "resposta": "O Mundo Perdido",
    "distratores": [
      "A Terra da Bruma",
      "Um Estudo em Vermelho",
      "O Cão dos Baskervilles"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Monte_Roraima",
      "https://en.wikipedia.org/wiki/Mount_Roraima"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Monte_Roraima",
        "situacao": "ok",
        "texto": "Monte Roraima é uma montanha localizada na América do Sul, na tríplice fronteira entre Brasil, Venezuela e Guiana. Constitui um tepui, um tipo de monte em formato de mesa bastante característico do planalto das Guianas. Delimitado por escarpas de cerca de 1 000 metros de altura, seu planalto apresenta um ambiente totalmente diferente da floresta tropical e da savana que se estende a seus pés.\n[…]\nConhecido pelos ocidentais apenas no século XIX, o monte Roraima foi escalado pela primeira vez em 1884, por uma expedição britânica chefiada por Everard Ferdinand im Thurn. Entretanto, apesar das diversas expedições posteriores, sua fauna, flora e geologia permanecem largamente desconhecidas. A história de uma dessas incursões inspirou sir Arthur Conan Doyle a escrever o livro O Mundo Perdido, em 1912.\n[…]\nNo interior do planalto, inúmeras cavernas e sumidouros conferem ao monte Roraima uma estrutura pseudocárstica. Essas cavernas formam uma verdadeira rede, denominada \"Monte Roraima Sur\" (\"Monte Roraima Sul\") Com 10 820 metros de extensão e um desnível de setenta e dois metros, é a maior caverna de quartzo do mundo.\n[…]\nO monte Roraima foi descoberto pelos europeus em 1595, durante a colonização espanhola e britânica dessa parte da América do Sul. A \"montanha de cristal\" impossível de escalar e de onde surgiam numerosas cascatas - conforme descrição do poeta, oficial e explorador britânico Walter Raleigh – pode ser o monte Roraima.\n[…]\nNa Venezuela, o maciço do monte Roraima está inserido no Parque Nacional Canaíma, uma das maiores áreas de conservação da América Latina com mais de três milhões de hectares de extensão. No parque, que é declarado patrimônio da humanidade pela UNESCO, o monte Roraima é só mais um dos vários tepuis, montanhas em formato de mesa.\n[…]\nSaiba tudo sobre o Monte Roraima - Muitas Informações - Portal Evolution"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Mount_Roraima",
        "situacao": "ok",
        "texto": "Mount Roraima (Spanish: Monte Roraima; Tepuy Roraima; Cerro Roraima; Portuguese: Monte Roraima) is the highest of the Pacaraima chain of tepuis (table-top mountain) or plateaux in South America. It is located at the junction of Brazil, Guyana and Venezuela. A characteristic, large, flat-topped mountain surrounded by cliffs 400–1,000 m (1,300–3,300 ft) high, its highest point is located on the sout\n[…]\nMount Roraima is located in the Pacaraima Mountains in the eastern part of the Guiana Highlands, in northern South America. Its area is shared among three countries: Brazil to the east (5%), Guyana to the north (10%), and Venezuela to the south and west (85%). Access to Mount Roraima from the Venezuelan side is close to the road and relatively easy; however, for both Brazil and Guyana the area is completely isolated and can be reached only by a few days of forest hikes or small local airstrip.\n[…]\nEuropean discovery was in 1595, during a Spanish and British race to colonize this part of South America. The English poet, army officer and explorer Walter Raleigh described it as an immeasurable \"crystal mountain\" gushing countless waterfalls. The first expedition to Mount Roraima took place in 1838, when German scientist and explorer Robert Hermann Schomburgk observed it during a Royal Geographical Society-funded expedition to explore British Guiana (1835–1839).\n[…]\n\"Mount Roraima information\". mountroraima.net.\n[…]\n\"Mount Roraima\". SummitPost.org.\n[…]\nBrazilian climber Eliseu Frechou and his team (2010). Dias de Tempestade [Days of Storm]. Vimeo (28m short documentary) (in Portuguese). 15300288. — shows a 2010 climb of Mount Roraima from the Guyana side\n[…]\n\"Mount Roraima guide\". explorationjunkie.com.\n[…]\n\"Mount Roraima interesting facts\". ospreyexpeditions.com. 2022."
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Atol das Rocas",
      "descricao": "Atol no oceano Atlântico, a nordeste do Brasil, protegido como reserva biológica."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Desde 2001, o Atol das Rocas e o arquipélago de Fernando de Noronha formam juntos um bem inscrito em qual lista internacional?",
    "resposta": "Patrimônio Mundial da UNESCO",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Atol_das_Rocas",
      "https://whc.unesco.org/en/list/1000"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Atol_das_Rocas",
        "situacao": "ok",
        "texto": "Reserva Biológica Atol das Rocas é uma unidade de conservação de proteção integral brasileira situada a 144 mn (267 km) a lés-nordeste da cidade de Natal (RN) e a 80 mn (148 km)  a oeste do arquipélago de Fernando de Noronha (PE), na zona econômica exclusiva do Brasil.\n[…]\nApesar de ser conhecido desde o século XVI, o primeiro mapa detalhado de Rocas surgiu apenas em 1852, desenhado pelo capitão-tenente Phillip Lee, com a denominação de Baixo das Rocas ou Baixo das Cabras. Rocas aparece caracterizado como atol em 1858, num levantamento batimétrico feito pelo Comandante Vital de Farias. O primeiro naturalista a mencionar Rocas foi Jean de Léry, em 1580.[carece de fontes]?\n[…]\nA Reserva Biológica Marinha do Atol das Rocas está inserida em uma área de 37,820 ha, delimitada pela isóbata de 1,000 m de um monte submarino pertencente à Cadeia Fernando de Noronha, a partir da Ilha do Farol. O atol tem uma área de aproximadamente 755,1 ha e abriga, além da Ilha do Farol, a Ilha do Cemitério, ambas de origem biogênica.\n[…]\nOs recifes que compõem Rocas crescem no topo de um monte submarino pertencente à Zona de Fratura de Fernando de Noronha.\n[…]\nCom uma área de aproximadamente 755,1 ha, o Atol das Rocas está entre os menores do mundo. De formato oval, tem 3,7 km de comprimento, 2,5 km de largura e um perímetro 7 km.\n[…]\nFarol das Rocas\n[…]\nEntrada na lista de candidatos a Sítio do Patrimônio da Humanidade da UNESCO em Francês e em Inglês\n[…]\nEntrada na lista do Patrimônio da Humanidade da UNESCO em Francês, Inglês e em Espanhol\n[…]\n«Informativo sobre o Atol das Rocas». Instituto Ecológico Aqualung. 5 de junho de 1979\n[…]\n«A vida fervilha no Atol das Rocas». Revista Galileu. 2002\n[…]\n«Uma aventura no paraíso de Atol das Rocas». Globo Video News. 5 de junho de 1979 [ligação inativa]"
      },
      {
        "url": "https://whc.unesco.org/en/list/1000",
        "situacao": "ok",
        "texto": "Brazilian Atlantic Islands: Fernando de Noronha and Atol das Rocas Reserves - UNESCO World Heritage Centre\n[…]\nBrazilian Atlantic Islands: Fernando de Noronha and Atol das Rocas Reserves\n[…]\nBrazilian Atlantic Islands: Fernando de Noronha and Atol das Rocas Reserves\n[…]\nÎles atlantiques brésiliennes : les Réserves de Fernando de Noronha et de l'atol das Rocas\n[…]\nBraziliaanse Atlantische eilanden Fernando de Noronha en het reservaat Atol das Rocas\n[…]\nDe pieken van de Zuid-Atlantische onderzeese bergkam vormen de Fernando de Noronha archipel en het Rocas atol voor de kust van Brazilië. Ze beslaan het grootste deel van het eilandoppervlak in de Zuid-Atlantische Oceaan. Hun rijke wateren zijn zeer belangrijk voor de voortplanting en het voedsel van tonijnen, haaien, schildpadden en zeezoogdieren. De eilanden vormen het leefgebied van de grootste concentratie tropische zeevogels in de West-Atlantische Oceaan.\n[…]\nThe Atol das Rocas Biological Reserve, the only atoll in the South Atlantic, is located about 150 km west of Fernando de Noronha. It is an elliptical reef including two small islands surrounded by a marine reserve. With these two protected areas, the property covers an area of 42,270 ha and a buffer zone of 140,713 ha.\n[…]\nCriterion (ix ) : The Fernando de Noronha and Atol das Rocas represents over half the insular coastal waters of the Southern Atlantic Ocean. These highly productive waters provide feeding ground for species such as tuna, billfish, cetaceans, sharks and marine turtles as they migrate to the African coast.\n[…]\nBrazilian youth joins UNESCO environmental DNA sampling at Fernando de Noronha"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Rio Branco",
      "descricao": "Capital do estado do Acre, às margens do rio Acre."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "A capital do Acre tem o mesmo nome do principal rio de outro estado da Região Norte, que banha a capital desse estado. Que estado é esse?",
    "resposta": "Roraima",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Rio_Branco_(Acre)",
      "https://en.wikipedia.org/wiki/Branco_River"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Rio_Branco_(Acre)",
        "situacao": "ok",
        "texto": "Rio Branco é a capital do estado brasileiro do Acre, na região Norte do país. Situada a 3 030 quilômetros de distância de Brasília, é a capital mais ocidental do Brasil e localiza-se às margens do rio Acre.\n[…]\nA capital do estado do Acre surgiu a partir do seringal fundado em 28 de dezembro de 1882, pelo cearense Neutel Maia. Segundo a tradição, em fins de 1882, numa pronunciada volta do rio Acre, uma frondosa gameleira chamou a atenção de exploradores que subiam o rio e levou-os a abrir um seringal ali mesmo. Tratava-se do seringalista Neutel Maia, que, com sua família e trabalhadores, chegava à região do Acre.\n[…]\nNo que toca à criminalidade, Rio Branco é a capital mais segura da Região Norte e o Acre, o estado mais seguro da Região Norte do Brasil.\n[…]\nAs principais rádios da cidade são a Gazeta FM, a Rádio CBN e a Rádio Cidade FM. Entre as principais estações de televisão do estado se destacam a TV Norte Acre (SBT),TV Rio Branco (TV Cultura), a Rede Amazônica (Rede Globo), a TV5 (Band) e a TV Gazeta (RecordTV).\n[…]\nO Festival do Açaí de Feijó e Festival de Praia é um evento que acontece todos os anos no mês de Agosto, na cidade de Feijó. O evento marca principalmente o grande consumo da fruta tipicamente do Norte do Brasil, o açaí. O açaí produzido em Feijó é considerado por muitos críticos da área como o melhor do Brasil, com a sua espessura mais grossa e com o sabor mais doce por natureza. Este festival mobiliza o Estado inteiro que se dirige a cidade de acontecimento do mesmo.\n[…]\nEstádio da Federação de Futebol do Estado do Acre - O estádio tem capacidade para cerca de 40 000 espectadores e fica na nova Via Verde no oeste da capital acreana.\n[…]\nPágina da Câmara Municipal de Rio Branco - Acre"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Branco_River",
        "situacao": "ok",
        "texto": "The Branco River (Portuguese: Rio Branco; Engl: White River) is the principal affluent of the Rio Negro from the north.\n[…]\nAverage, minimum and maximum discharge of the Branco River at near mouth. Period from 1998 to 2022.\n[…]\nEspecially the river's upper parts at the headwaters are clear and flow through rocky country, leading to the suggestion that sediments mainly originate from the lower parts. Furthermore, its chemistry and color may contradict each other compared to the traditional Amazonian river classifications. The Branco River has pH 6–7 and low levels of dissolved organic carbon.\n[…]\nAlfred Russel Wallace mentioned the coloration in \"On the Rio Negro\", a paper read at the 13 June 1853 meeting of the Royal Geographical Society, in which he said: \"[The Rio Branco] is white to a remarkable degree, its waters being actually milky in appearance\". Alexander von Humboldt attributed the color to the presence of silicates in the water, principally mica and talc. There is a visible contrast with the waters of the Rio Negro at the confluence of the two rivers.\n[…]\nUntil approximately 20,000 years ago the headwaters of the Branco River flowed not into the Amazon, but via the Takutu Graben in the Rupununi area of Guyana towards the Caribbean. Currently in the rainy season much of the Rupununi area floods, with water draining both to the Amazon (via the Branco River) and the Essequibo River.\n[…]\nEncyclopædia Britannica Online.com: \"Branco River\" . retrieved 19 September 2009."
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Cidade de Goiás",
      "descricao": "Município histórico de Goiás, antiga capital do estado, também chamado Goiás Velho."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "A antiga capital goiana, a Cidade de Goiás, foi o lar de qual poeta, que doceira de profissão só publicou o primeiro livro depois dos setenta anos?",
    "resposta": "Cora Coralina",
    "distratores": [
      "Cecília Meireles",
      "Adélia Prado",
      "Hilda Hilst"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Cora_Coralina",
      "https://pt.wikipedia.org/wiki/Goiás_(município)"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Cora_Coralina",
        "situacao": "ok",
        "texto": "Cora Coralina, pseudônimo de Anna Lins dos Guimarães Peixoto Bretas (Cidade de Goiás, 20 de agosto de 1889 — Goiânia, 10 de abril de 1985), foi uma poetisa e contista brasileira. Considerada uma das mais importantes escritoras brasileiras, teve seu primeiro livro, Poemas dos Becos de Goiás e Estórias Mais, publicado em junho de 1965, quando já tinha quase 76 anos de idade, apesar de escrever seus \n[…]\nEla nasceu e foi criada às margens do Rio Vermelho. Estima-se que essa casa foi construída em meados do Século XVIII, tendo sido uma das primeiras edificações da antiga Vila Boa (Goiás), tendo vários moradores, dentre eles o Capitão-Mor da Coroa Portuguesa. Em 1825 a casa foi posta em hasta pública pela fazenda Real e adquirida pelo Sargento-Mor João José do Couto Guimarães, trisavô de Cora Coralina.\n[…]\nCora Coralina morreu em Goiânia, aos 95 anos, de pneumonia. A sua casa na Cidade de Goiás foi transformada num museu em homenagem à sua história de vida e produção literária.\n[…]\nEm 2016, o perfil de Cora Coralina foi incluído na primeira edição do livro Histórias de Ninar para Garotas Rebeldes: Cem fábulas sobre mulheres extraordinárias, como uma das cem mulheres mais influentes.\n[…]\nCriado pela Fundação Cora Coralina e inaugurado em 20 de agosto de 1989, no centenário de nascimento da escritora, o museu é mantido da mesma forma de quando Cora habitava, abriga em seu acervo objetos de uso pessoais de Cora Coralina, como roupas, móveis, utensílios domésticos, fotos, livros e cartas no interior da casa, além do jardim nos fundos da casa e a bica de água potável. O Museu está localizado nas margens do Rio Vermelho na Cidade de Goiás.\n[…]\nMuseu Casa de Cora Coralina na Cidade de Goiás\n[…]\nDoodle de comemoração do 128º aniversário de Cora Coralina\n[…]\nCasa de Cora Coralina, juntamente com o busto e o poema que se encontra do lado direito da porta principal.\n[…]\nCora Coralina - História de vida"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Goiás_(município)",
        "situacao": "ok",
        "texto": "Goiás, também conhecido como Goiás Velho e Cidade de Goiás, é um município brasileiro, antiga capital do estado homônimo. Foi reconhecido em 2001 pela Unesco como Patrimônio Mundial, por sua arquitetura barroca peculiar, por suas tradições culturais seculares e pela natureza exuberante que o circunda.\n[…]\nGoiás se localiza em terreno bastante acidentado onde se destacam a Serra Dourada e os Morros de São Francisco, Canta Galo e das Lages. O município é cortado pelo Rio Vermelho (afluente do Rio Araguaia) e está situado na bacia do Tocantins-Araguaia, que compartilha a foz com o Rio Amazonas. Ele passa do lado da casa da poetisa Cora Coralina. Há também os rios Urú, do Peixe, Ferreira e Índio.\n[…]\nCasa de Cora Coralina: Museu permanente com objetos pessoais da poetisa de mesmo nome.\n[…]\nCasa de Cora Coralina: Casa da poetisa e doceira, nas margens do Rio Vermelho, o museu é um ícone da paisagem de Vila Boa de Goiás.\n[…]\nMunicípio histórico, mais conhecido como Goiás Velho, foi capital do Estado, conserva mais de 90% de sua arquitetura barroco-colonial original, graças ao tombamento, desde os anos 50, desse patrimônio arquitetônico do século XVIII. A Cidade de Goiás é considerada um magnifico mostruário do Brasil oitocentista. Além disso, situa-se dentro de um cenário topográfico, singularmente bonito, dentro de um vale envolvido pelos morros verdes e ao sopé da Serra Dourada.\n[…]\nO município tornou-se um centro turístico e permite praticamente uma viagem no tempo do Brasil colonial. Em 2001, o Centro Histórico de Goiás foi declarado Patrimônio Mundial. Na cidade todos os anos ocorre o Festival Internacional de Cinema e Vídeo Ambiental, que tem a participação de países da África, Europa, América e Ásia.[carece de fontes]?\n[…]\nUniversidade Estadual de Goiás - Unidade Cora Coralina - Goiás/GO"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Serra Gaúcha",
      "descricao": "Região serrana do nordeste do Rio Grande do Sul, com cidades como Caxias do Sul, Bento Gonçalves e Gramado."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Caxias do Sul e Bento Gonçalves, terras de parreirais na Serra Gaúcha, foram colonizadas a partir de 1875 por imigrantes de qual país?",
    "resposta": "Itália",
    "distratores": [
      "Alemanha",
      "Polônia",
      "Portugal"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Serra_Gaúcha",
      "https://pt.wikipedia.org/wiki/Imigração_italiana_no_Rio_Grande_do_Sul"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Serra_Gaúcha",
        "situacao": "ok",
        "texto": "A serra Gaúcha, localmente também conhecida como Serra do Nordeste (para distingui-la da também gaúcha Serra do Sudeste), é um acidente geográfico no nordeste do estado do Rio Grande do Sul, no Brasil. Apresenta características socioculturais específicas, como acentuada influência alemã e italiana, grande produção de uvas e vinho e desenvolvida indústria turística.\n[…]\nA área era habitada por indígenas caingangues desde tempos imemoriais, mas estes foram desalojados violentamente pelos bugreiros, abrindo espaço, no final do século XIX, para que o governo do Império do Brasil decidisse colonizar a região com uma população europeia. Desta forma, milhares de imigrantes, em sua maioria italianos da região do Vêneto e alemães da região do Hunsrück, cruzaram o mar e subiram a serra Gaúcha, desbravando uma área ainda quase inteiramente virgem.\n[…]\nA região italiana, também chamada de \"Pequena Itália\", engloba cidades como Farroupilha, Carlos Barbosa, Garibaldi, Bento Gonçalves, Flores da Cunha e Caxias do Sul. Caxias do Sul é a cidade mais populosa da região, mas foi em Farroupilha o ponto de partida da colonização italiana. Essa teve início em 1875, quando ali chegaram os primeiros imigrantes italianos, famílias de Stefano Crippa, Tommaso Radaelli e Luigi Sperafico, sendo considerada o berço italiano do Rio Grande do Sul.\n[…]\nOs primeiros cerros, elevações de pouca altitude, com menos de 400 metros do nível do mar, começam a ser observados a nordeste de São Francisco de Assis, região também influenciada pela colonização italiana, estendendo-se para leste, já com maiores elevações, em direção a Jaguari, norte de São Vicente do Sul, norte de São Pedro do Sul, Santa Maria, Agudo e, a partir daí, se estendendo por completo.\n[…]\nA sua cultura europeia herdada de imigrantes alemães e italianos recriaram um pedaço da Europa em terras gaúchas."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Imigração_italiana_no_Rio_Grande_do_Sul",
        "situacao": "ok",
        "texto": "A imigração italiana no Rio Grande do Sul é um processo de transferência de população nativa da Itália para o estado brasileiro do Rio Grande do Sul.\n[…]\nQuando foi celebrado o cinquentenário da imigração em 1925, o governo do estado organizou uma grande exposição em Porto Alegre, trazendo os melhores produtos agroindustriais e artísticos das colônias, que foi um grande sucesso de público, e ao mesmo tempo publicou uma substancial coleção de ensaios históricos e científicos e artigos informativos e estatísticos sobre a presença italiana no estado do Rio Grande do Sul, em dois volumes, intitulada Cinquantenario della Colonizzazione Italiana nel Rio Grande del Sud, 1875-1925.\n[…]\nTambém foram declarados pelo governo como Patrimônio Histórico e Cultural do Rio Grande do Sul a Capela de São Romédio de Caxias, situada no local em que se formou a primeira comunidade organizada de italianos, o Santuário de Nossa Senhora de Caravaggio em Farroupilha, e o roteiro histórico Caminhos de Pedra em Bento Gonçalves. O Monumento Nacional ao Imigrante e a antiga Cantina Antunes em Caxias e 48 edificações do Centro Histórico de Antônio Prado foram tombadas em nível nacional pelo IPHAN.\n[…]\nJá o IPHAE tombou em nível estadual o Arquivo Histórico Municipal e o Sítio Ferroviário em Caxias do Sul; a Casa de Pedra em Farroupilha; o Casarão dos Veronese em Flores da Cunha; a Antiga Cantina do Vinho em Serafina Corrêa, e a Casa Saretta em Veranópolis. Em Nova Milano, local onde ficava o principal barracão de acolhimento dos imigrantes no topo da serra, foi criado em 1975 o Parque da Imigração Italiana.\n[…]\nQuarta Colônia de Imigração Italiana"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Fortaleza",
      "descricao": "Capital do estado do Ceará, no litoral do Nordeste brasileiro."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "No século dezessete, tanto Recife quanto o forte que deu origem a Fortaleza ficaram sob o domínio de qual povo europeu?",
    "resposta": "Holandeses",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Fortaleza",
      "https://en.wikipedia.org/wiki/Fortaleza"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Fortaleza",
        "situacao": "ok",
        "texto": "Fortaleza é a capital do estado brasileiro do Ceará, na Região Nordeste do país. Distante 2 285 km de Brasília, capital federal, a cidade desenvolveu-se às margens do riacho Pajeú, e sua toponímia é uma alusão ao Forte Schoonenborch, construído pelos holandeses durante sua segunda permanência no local, entre 1649 e 1654, e que deu origem ao município. O lema de Fortaleza, presente em seu brasão, é\n[…]\nEm 1649, deu-se o segundo período de domínio holandês do Siará. Com uma nova expedição, antes negociada com os indígenas, foi construído, no monte Marajaitiba, às margens do riacho Pajeú, o Forte Schoonenborch, considerado o marco inicial do desenvolvimento de Fortaleza e da sua história, cujo responsável foi o comandante holandês Matias Beck. Em 1654, com a retirada dos batavos, novamente expulsos pelos lusos, a construção foi rebatizada de Forte de Nossa Senhora da Assunção.\n[…]\nMesmo tendo surgido a partir de ocupação protestante holandesa e sido estabelecida como vila em função de uma fortificação e não de uma missão religiosa, o Catolicismo mostrou-se dominante em Fortaleza desde o início de sua história. Segundo censo de 2010, 1 664 521 pessoas, 67,88% da população fortalezense, seguiam o Catolicismo Apostólico Romano, 523 456 (21,35%) eram adeptas do protestantismo, 31 691 (1,29%) representavam o Espiritismo e 162 985 (6,65%) não possuíam religião alguma.\n[…]\nCom a construção do Forte Schoonenborch pelos holandeses em 1649, nas proximidades do riacho Pajeú, uma grande estrutura de atracação foi pretendida como porto por 300 anos. Construções como a Ponte Metálica e a Ponte dos Ingleses fizeram parte desse intento.\n[…]\nCearenses de Fortaleza\n[…]\n«Prefeitura Municipal de Fortaleza»\n[…]\n«Câmara Municipal de Fortaleza»\n[…]\n«Secretaria de Turismo de Fortaleza»\n[…]\n«Mapa de Fortaleza WikiMapia» 🔗\n[…]\n«Mapa de Fortaleza OpenStreetMap» 🔗"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Fortaleza",
        "situacao": "ok",
        "texto": "Fortaleza ( FOR-tə-LAY-zə ; Brazilian Portuguese: [foʁtaˈlezɐ] ; Portuguese for 'Fortress') is the state capital and largest city of the state of Ceará, located in Northeastern Brazil. It is Brazil's fourth-most-populous city after Sao Paulo, Rio De Janeiro, and Brasilia, with a population of 2,578,483 as of 2025, and 12th-largest among cities with the highest gross domestic product. It forms the \n[…]\nIn 1983, the city began to integrate the territory of the new city of Maracanaú, which, just some years ago, was made again part of the Greater Fortaleza (the city's Metropolitan area). In the 1980s, Fortaleza exceeded Recife in population terms, becoming the second most populous city in Northeastern Brazil, with 2,571,896 inhabitants.\n[…]\nAccording to a genetic study from 2011, 'pardos' and whites' from Fortaleza, which comprise the largest share of the population, showed European ancestry of about 70%, the rest divided between Native American and African ancestries. A 2015 study, however, found out the following composition in Fortaleza: 48.9% of European contribution, 35.4% of Native American input and 15.7% of African ancestry.\n[…]\nFortaleza has the largest Gross Domestic Product (GDP) in the Northeast Region, surpassing Recife and Salvador. In 2021, the GDP of Fortaleza reached the value of 73.4 billion Reais, the eleventh highest of the country. In the same year, the value of taxes on products net of subsidies at current prices was R$12,811,311,235 and the municipality's GDP per capita was R$27.164,45.\n[…]\nAcquario Ceará, due to be one of the largest oceanariums in Brazil, is currently under construction. Attractions such as the Beach Park theme park, located in the Great Fortaleza, Avenida Beira Mar and its bars, restaurants and music clubs, the beaches of Futuro and Iracema and Pirata Bar have placed Fortaleza among the Brazilian destinations preferred by Europeans."
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Ilhéus",
      "descricao": "Cidade do litoral sul da Bahia, cenário de romances de Jorge Amado."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Que romance de Jorge Amado, sobre uma retirante que conquista um dono de bar na época do cacau, se passa em Ilhéus nos anos 1920?",
    "resposta": "Gabriela, Cravo e Canela",
    "distratores": [
      "Capitães da Areia",
      "Tieta do Agreste",
      "Mar Morto"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Gabriela,_Cravo_e_Canela",
      "https://pt.wikipedia.org/wiki/Ilhéus"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Gabriela,_Cravo_e_Canela",
        "situacao": "ok",
        "texto": "Gabriela, Cravo e Canela é um dos mais célebres romances do escritor brasileiro Jorge Amado, publicado em 1958.\n[…]\nRepresenta um momento de mudança na produção literária do autor, que até então abordava temas sociais. Nesta fase faz uma crônica de costumes, marcada por tipos populares, poderosos coronéis e mulheres sensuais. \"A crítica aponta Gabriela, cravo e canela, que tem ambiência em Ilhéus, como o divisor de águas da obra amadiana. Além de Gabriela, Cravo e Canela, os romances Dona Flor e seus dois maridos, Tieta do Agreste e Teresa Batista cansada de guerra são representativos deste tempo.\n[…]\nGabriela personifica as transformações de uma sociedade patriarcal, arcaica e autoritária, afetada pelos sopros de renovação cultural, política e econômica. O enredo da obra Gabriela Cravo e Canela está  dividido em duas partes, e essas estão divididas em duas outras partes. A primeira é intitulada como “Um Brasileiro das Arábias” e a sua em primeira divisão chama-se “O langor de Ofenísia”.\n[…]\nDevido ao grande desempenho nas vendas e nome Gabriela se tornou popular após o romance, sendo utilizado para denominar de bares e restaurantes a suco de cacau, além de empresas dos mais diversos ramos.\n[…]\nGabriela, Cravo e Canela - telenovela produzida pela extinta TV Tupi em 1960, com adaptação de Zora Seljan, e Janete Vollu no papel principal, além de Paulo Autran como Mundinho Falcão.\n[…]\nGabriela, cravo e canela, filme dirigido por Bruno Barreto, de 1983, com Sônia Braga no papel principal.\n[…]\nEm 1970, Manuel d'Almeida Filho publicou pela Editora Prelúdio, um romance em versos de cordel baseado em Gabriela."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ilhéus",
        "situacao": "ok",
        "texto": "Ilhéus é um município brasileiro do litoral e sul do estado da Bahia, região Nordeste. Conta com o mais extenso litoral do estado.\n[…]\nIlhéus foi fundada em 1534 como \"Vila de São Jorge dos Ilheos\" e elevada à cidade em 1881. Considerada a \"Capital do Cacau\" e denominada por seus habitantes como a \"Princesinha do Sul\", tem sua economia baseada na agricultura, no turismo e na indústria. É conhecida por ambientar os romances de Jorge Amado, famoso escritor baiano, como Gabriela, Cravo e Canela e Terras do Sem Fim.\n[…]\nA cidade era movimentada, haviam cabarés, clubes noturnos, casinos que serviram de inspiração para o cenário dos romances de Jorge Amado. Uma época de muito dinheiro, luxo e desmandos. O grande fluxo financeiro originado pela produção e exportação do cacau, deu origem a peculiaridades no desenvolvimento da região da Costa do Cacau, região geoestratégica da Bahia.\n[…]\nCasa de Cultura Jorge Amado - Quarteirão Jorge Amado\n[…]\nMuseu da Capitania de Ilhéus\n[…]\nPalacete Misael Tavares - Quarteirão Jorge Amado\n[…]\nTeatro Municipal de Ilhéus - Quarteirão Jorge Amado\n[…]\nSeu trajeto vai de Ilhéus a Uruçuca e o projeto prevê a implantação de dois pórticos: um na Terra de Gabriela e outro na BR-101. O objetivo é levar os turistas para a conhecerem o processo de produção do cacau e do chocolate, com visitas às fazendas, fábricas e lojas. Os atrativos, porém, oferecem muito mais que isso: passeios por reservas de Mata Atlântica, por localidades históricas, dentre outros locais como casarões dos séculos 18 e 19.\n[…]\nCentro (Ilhéus)\n[…]\nBarcelona de Ilhéus Futebol Clube\n[…]\nPrefeitura de Ilhéus\n[…]\nCâmara de Ilhéus\n[…]\nDados do IBGE de Ilhéus"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Rio de Janeiro (estado)",
      "descricao": "Estado da Região Sudeste do Brasil, cuja capital é a cidade do Rio de Janeiro."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Entre todos os estados brasileiros, o que São Paulo e Rio de Janeiro têm em comum que só eles têm?",
    "resposta": "A capital tem o mesmo nome do estado",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Unidades_federativas_do_Brasil",
      "https://pt.wikipedia.org/wiki/Rio_de_Janeiro_(estado)"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Unidades_federativas_do_Brasil",
        "situacao": "ok",
        "texto": "Unidades federativas do Brasil são entidades subnacionais com certo grau de autonomia (autogoverno, autolegislação e autoarrecadação) e dotadas de governo e constituição próprios. Segundo o artigo 1.º da Constituição brasileira de 1988, a República Federativa do Brasil é definida constitucionalmente como uma federação formada pela união indissolúvel de 26 estados, o Distrito Federal e 5571 municíp\n[…]\nEm 1960, um território quadrangular foi desmembrado do estado de Goiás, na divisa com o estado de Minas Gerais, para abrigar a nova capital do país, Brasília, que foi sediada no novo Distrito Federal. Simultaneamente, o território do antigo Distrito Federal foi transformado em estado da Guanabara, compreendendo apenas a cidade do Rio de Janeiro e sua área rural. Em 1962, o Território Federal do Acre foi elevado à condição de estado.\n[…]\nEm 1975, o estado da Guanabara foi incorporado ao estado do Rio de Janeiro, e a cidade do Rio de Janeiro passou a ser sua capital, sucedendo a Niterói. Já em 1977 a porção sul de Mato Grosso foi emancipada, formando o estado de Mato Grosso do Sul, com capital em Campo Grande. Em 22 de dezembro de 1981, foi criado o estado de Rondônia e instalado em 4 de janeiro de 1982, pelo então presidente do Brasil João Batista Figueiredo, tendo a cidade de Porto Velho como capital.\n[…]\nA Constituição de 1988 deixou a estrutura das divisões como ela é atualmente. Apesar de manter a definição legal de territórios federais, acabou com os existentes até então, elevando Roraima e Amapá à condição de estados e integrando Fernando de Noronha ao estado de Pernambuco como distrito estadual. No mesmo ato, a porção norte de Goiás foi desmembrada como estado do Tocantins, tendo como capital provisória a cidade de Miracema do Tocantins."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rio_de_Janeiro_(estado)",
        "situacao": "ok",
        "texto": "Rio de Janeiro é uma das 27 unidades federativas do Brasil. Encontra-se situado a sudeste da Região Sudeste do país e possui divisas, ao norte e noroeste, com Minas Gerais; a nordeste, com o Espírito Santo; a leste e ao sul, com o Oceano Atlântico e a sudoeste, com São Paulo. Tem uma superfície de 43 750,425 km², equivalente à da Dinamarca, e abriga uma população de mais de 16 milhões de pessoas, \n[…]\nO estado é o segundo mais desenvolvido industrialmente do Brasil, atrás de São Paulo. A maioria das fábricas está concentrada no município da capital e em sua região metropolitana.\n[…]\nAs linhas da Central do Brasil atendem à periferia da capital e à porção oeste do estado, por intermédio de um tronco que conecta a capital estadual com os estados de São Paulo e Minas Gerais. Já as do Centro-Oeste atendem a algumas cidades próximas ao sul de Minas Gerais. Sua única entrada mais acentuada no estado alcança Angra dos Reis, cujo porto serve à região central de Minas Gerais.\n[…]\nA história do cinema no Rio de Janeiro remonta ao final do século XIX, quando ocorreu, em 8 de julho de 1896, a primeira sessão pública cinematográfica do Brasil, na então capital federal onde ,em 1897, foi inaugurado a primeira sala de cinema do Brasil, o Salão de Novidades Paris,  Ainda naquele mesmo ano, o cinema se expandiria para outras cidades do estado, entre elas Petrópolis e Campos dos Goytacazes.\n[…]\nNo século XXI, o Rio de Janeiro manteve-se, ao lado de São Paulo, como um dos principais polos cinematográficos do Brasil, com participação expressiva na produção nacional. Paralelamente, a produção audiovisual independente ganhou espaço em outras regiões do estado, particularmente na Baixada Fluminense. Apesar disso, a distribuição das salas de cinema no território fluminense continua apresentando desigualdades, com concentração de equipamentos na capital e acesso limitado em outras regiões."
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Amapá",
      "descricao": "Estado brasileiro da Região Norte, na fronteira com a Guiana Francesa, com capital em Macapá."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Em relação à Linha do Equador, o que o Amapá e Roraima têm em comum que os diferencia dos demais estados brasileiros?",
    "resposta": "Ficam quase todos no Hemisfério Norte",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Amapá",
      "https://pt.wikipedia.org/wiki/Roraima"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Amapá",
        "situacao": "ok",
        "texto": "Amapá (pronúncia em português: [amaˈpa]  ouça, região inicialmente chamada de Mairi) é uma das 27 unidades federativas do Brasil. Está situado a nordeste da Região Norte, no Platô das Guianas. O seu território é de 142 828,521 km², o que o torna o 18º maior estado do Brasil.\n[…]\nÉ limitado pelo estado do Pará, a oeste e sul (sendo, juntamente com o Rio Grande do Sul, os únicos estados brasileiros que possuem divisa com apenas um outro estado); pela Guiana Francesa, a norte; pelo Oceano Atlântico a nordeste; pela foz do Rio Amazonas, a leste; e pelo Suriname, a noroeste.\n[…]\nDe acordo com estimativas de 2016 do Instituto Brasileiro de Geografia e Estatística (IBGE), a população do estado é 782 295 habitantes, sendo o vigésimo sexto estado mais populoso do Brasil, o penúltimo da Região Norte. Macapá concentra sozinha quase 60% da população estadual. Em 2007, a taxa de urbanização do estado era de 89,7%. A densidade demográfica do estado no ano de 2010, era 4,68 habitantes por km².\n[…]\nNo levantamento realizado pelo Ministério da Justiça no ano de 2008, foi mostrado que a região norte do Brasil representa 8,9% de todos os homicídios dolosos do país. Em 2022, Amapá é o estado mais violento do país, tendo 50,6 mortes para cada grupo de 100 mil habitantes.\n[…]\nA BR-210 é a segunda rodovia federal no estado, ela também recebe o nome de Perimetral Norte e é menor em relação a BR-156, tendo um pouco mais de 471 quilômetros de extensão. A estrada passa pelas cidades de Macapá, Porto Grande, Pedra Branca do Amapari e Serra do Navio, terminando na divisa do estado com o Pará. Foi projetada durante o regime militar para \"cortar\" a Amazônia (desde o Amazonas até o Amapá). A obra tem inúmeros trechos que passam por dentro de terras indígenas.\n[…]\nAmapá no Facebook (em Português)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Roraima",
        "situacao": "ok",
        "texto": "Roraima (pronúncia em português: [ʁoˈɾajmɐ]  ouça) é uma das 27 unidades federativas do Brasil. Está situado na Região Norte do país, sendo o estado mais setentrional (ao norte) da federação. Tem por limites a Venezuela, ao norte e noroeste; Guiana, ao leste; Pará, ao sudeste; e Amazonas, ao sul e oeste. Ocupa uma área aproximada de 223 644 km², pouco maior que a Bielorrússia, sendo o décimo quart\n[…]\nOs portugueses derrotaram e expulsaram todos os invasores e estabeleceram a soberania de Portugal sobre a região de Roraima e de parte do Amazonas.\n[…]\nHá ainda, a BR-210, também chamada de Perimetral norte, um projeto oriundo de meados do Século XX, do Governo Federal, que fora realizado apenas parcialmente e que, a princípio, ligaria o estado ao Pará, Amapá e ao município de São Gabriel da Cachoeira (AM). Esta rodovia possui 481 quilômetros de extensão e corta o estado no sentido leste-oeste. Outra rodovia em Roraima que cruza o Brasil é a BR-401, fazendo a comunicação do estado com a Guiana.\n[…]\nNeste segmento, o rio Branco apresenta calado máximo de 5,0 metros no período de cheias e mínimo de 0,7 metros, no período de estiagem. Roraima fica em desvantagem em relação aos demais estados amazônicos quanto ao sistema hidroviário. Por ser o único destes em que todos os seus rios notórios têm sua nascente no seu próprio território - o sistema hidrográfico estadual é 100% roraimense -, fica fadado a ter poucas saídas fluviais.\n[…]\nAs principais unidades das Forças Armadas presentes em Roraima são: no Exército Brasileiro, Roraima é integrante do Comando Militar da Amazônia, este sediado em Manaus, capital do Amazonas e abrange todos os estados da Região Norte do Brasil, com exceção do Tocantins. na Marinha do Brasil, o estado faz parte do 9º Distrito Naval (com sede em Manaus); e na Força Aérea Brasileira, Roraima integra o 1.º Esquadrão do 3.º Grupo de Aviação, sediado na própria cidade."
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Rio São Francisco",
      "descricao": "Rio que nasce na Serra da Canastra, em Minas Gerais, atravessa o sertão nordestino e deságua no Atlântico."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "O rio São Francisco nasce em Minas Gerais e corre até o Atlântico. Contando aquele em que nasce, por quantos estados ele passa?",
    "resposta": "Cinco",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Rio_São_Francisco",
      "https://en.wikipedia.org/wiki/São_Francisco_River"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Rio_São_Francisco",
        "situacao": "ok",
        "texto": "O rio São Francisco (popularmente conhecido por Velho Chico) é um curso de água inteiramente em território brasileiro, sendo o quarto maior rio do Brasil e da América do Sul. Passa por cinco estados e 521 municípios do país, iniciando seu percurso no estado de Minas Gerais, atravessando a Bahia, determinando os limites interestaduais entre ela e Pernambuco e entre Sergipe e Alagoas para, por fim, \n[…]\nAtravessa regiões com condições naturais das mais diversas e tem seis usinas hidrelétricas. Apresenta dois estirões navegáveis: o médio, com cerca de 1 371 quilômetros de extensão, entre Pirapora (em Minas Gerais) e Juazeiro (na Bahia) / Petrolina (em Pernambuco), e o baixo, com 208 quilômetros, entre Piranhas (em Alagoas) e a foz, no Oceano Atlântico.\n[…]\nAs partes extremas superior e inferior da bacia apresentam bons índices pluviométricos, enquanto seus cursos médio e submédio atravessam áreas de clima bastante seco. Assim, cerca de 75% do deflúvio do São Francisco é gerado em Minas Gerais, cuja área da bacia, ali inserida, é de apenas 37% da área total. A área compreendida entre a fronteira Minas Gerais–Bahia e a cidade de Juazeiro (na Bahia), representa 45% do vale e contribui com apenas 20% do deflúvio anual.\n[…]\nO rio São Francisco banha cinco estados, recebendo água de 90 afluentes pela margem direita e 78 afluentes pela margem esquerda, num total de 168 afluentes, sendo 99 deles perenes. É um rio de grande importância econômica, social e cultural para os estados que atravessa. Folcloricamente, é citado em várias canções e há muitas lendas em torno das carrancas[carece de fontes]? que até hoje persistem. Os trechos navegáveis estão nos seus médio e baixo cursos.\n[…]\nCompanhia Hidrelétrica do São Francisco\n[…]\nTransposição do rio São Francisco\n[…]\nO São Francisco e seus números\n[…]\n«Medeiros-MG, a nova nascente do rio São Francisco». [ligação inativa]"
      },
      {
        "url": "https://en.wikipedia.org/wiki/São_Francisco_River",
        "situacao": "ok",
        "texto": "The São Francisco River (Portuguese: Rio São Francisco, pronounced [ˈʁiu sɐ̃w fɾɐ̃ˈsisku]), known in English as the San Francisco River, is a large river in Brazil. With a length of 2,914 kilometres (1,811 mi), it is the longest river that runs entirely in Brazilian territory, and the fourth longest in South America and overall in Brazil (after the Amazon, the Paraná and the Madeira). It is also l\n[…]\nThe river is named for Saint Francis of Assisi, from its first discovery by Europeans on his feast day (4 October) in 1501. The nickname \"Velho Chico\" may be translated as \"Old Frank\": velho means old, and chico is a diminutive of Francisco, itself the Portuguese form of the name Francis.\n[…]\nThe high part, from its source to Pirapora in Minas Gerais\n[…]\nThe low part, from Paulo Afonso to the river's mouth on the Atlantic Ocean\n[…]\nThe São Francisco is naturally navigable all through the year between Pirapora (Minas Gerais) and the twin cities of Petrolina (Pernambuco) and Juazeiro (Bahia), a length of 1,371 kilometres (852 mi). However, there are large variations in depth depending on the rainfall. Because of the diversity of physical characteristics over the course of the navigable stretch, it may be divided into three substretches, as follows:\n[…]\nThe area crossed by the river is vast and sparsely populated, but several towns lie on the river. Beginning in Minas Gerais, the river passes by Pirapora, São Francisco, Januária, Bom Jesus da Lapa, the twin cities of Petrolina and Juazeiro, and Paulo Afonso. The hinterland is arid and underpopulated, so most of the towns are small and isolated. Only Petrolina and Juazeiro have grown into medium-sized cities and have become prosperous because of fruit production based on irrigation.\n[…]\nCourse of the São Francisco River and the Navigation Along It from São Paulo to the Pitangui Mines is a map from 1700 (in French and English)"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Rio São Francisco",
      "descricao": "Rio que nasce na Serra da Canastra, em Minas Gerais, atravessa o sertão nordestino e deságua no Atlântico."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Depois de cruzar o sertão, o rio São Francisco chega ao oceano numa foz que marca a divisa entre quais dois estados?",
    "resposta": "Alagoas e Sergipe",
    "distratores": [
      "Bahia e Sergipe",
      "Pernambuco e Alagoas",
      "Pernambuco e Bahia"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Rio_São_Francisco",
      "https://en.wikipedia.org/wiki/São_Francisco_River"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Rio_São_Francisco",
        "situacao": "ok",
        "texto": "O rio São Francisco (popularmente conhecido por Velho Chico) é um curso de água inteiramente em território brasileiro, sendo o quarto maior rio do Brasil e da América do Sul. Passa por cinco estados e 521 municípios do país, iniciando seu percurso no estado de Minas Gerais, atravessando a Bahia, determinando os limites interestaduais entre ela e Pernambuco e entre Sergipe e Alagoas para, por fim, \n[…]\nAtravessa regiões com condições naturais das mais diversas e tem seis usinas hidrelétricas. Apresenta dois estirões navegáveis: o médio, com cerca de 1 371 quilômetros de extensão, entre Pirapora (em Minas Gerais) e Juazeiro (na Bahia) / Petrolina (em Pernambuco), e o baixo, com 208 quilômetros, entre Piranhas (em Alagoas) e a foz, no Oceano Atlântico.\n[…]\nEm Paulo Afonso na Bahia existe um museu que reúne a biota do rio chamada \"Coleção de Referência do Rio São Francisco\", em Petrolina o Instituto Federal do Sertão Pernambucano também possui uma coleção exposta na sua sede.\n[…]\nA transposição do rio São Francisco se refere ao antigo projeto de transposição de parte das águas do rio São Francisco, nomeado pelo governo brasileiro como \"Projeto de Integração do rio São Francisco com Bacias Hidrográficas do Nordeste Setentrional\". O projeto é um empreendimento do Governo Federal, sob a responsabilidade do Ministério da Integração Nacional (MI). Orçado, atualmente, em 6,8 bilhões de reais, que prevê a construção de dois canais que totalizam 700 quilômetros de extensão.\n[…]\nA Adutora do Algodão (oficialmente Sistema Integrado de Abastecimento de Água do Algodão - SIAA do Algodão), é o sistema de fornecimento hídrico a municípios do Alto Sertão do estado brasileiro da Bahia e que integram a sub-bacia do rio das Rãs a partir da captação de água no rio São Francisco.\n[…]\nTransposição do rio São Francisco\n[…]\nO São Francisco e seus números\n[…]\n«Medeiros-MG, a nova nascente do rio São Francisco». [ligação inativa]"
      },
      {
        "url": "https://en.wikipedia.org/wiki/São_Francisco_River",
        "situacao": "ok",
        "texto": "The São Francisco River (Portuguese: Rio São Francisco, pronounced [ˈʁiu sɐ̃w fɾɐ̃ˈsisku]), known in English as the San Francisco River, is a large river in Brazil. With a length of 2,914 kilometres (1,811 mi), it is the longest river that runs entirely in Brazilian territory, and the fourth longest in South America and overall in Brazil (after the Amazon, the Paraná and the Madeira). It is also l\n[…]\nThe São Francisco originates in the Canastra mountain range in the central-western part of the state of Minas Gerais. It runs generally north in the states of Minas Gerais and Bahia, behind the coastal range, draining an area of over 630,000 square kilometres (240,000 sq mi), before turning east to form the border between Bahia on the right bank and the states of Pernambuco and Alagoas on the left one.\n[…]\nAfter that, it ends on the boundaries between the states of Alagoas and Sergipe and washes into the Atlantic Ocean. In addition to the five states which the São Francisco directly traverses or borders, its drainage basin also includes tributaries from the state of Goiás and the Federal District.\n[…]\nThe river's hydroelectric potential started being harnessed in 1955, when the Paulo Afonso dam was built between Bahia and Alagoas. The Paulo Afonso plant now provides electric power for the whole of Northeastern Brazil. Four other large hydroelectric plants were later built: Três Marias in Minas Gerais, built in 1961, Sobradinho in Bahia, built in 1977, Luiz Gonzaga (Itaparica), between Bahia and Pernambuco, in 1988 and the Xingó near Piranhas in 1994.\n[…]\nFrom Paulo Afonso to the historic town of Penedo (Alagoas), the river lies at the bottom of a gorge or steep sided valley. Piranhas, a nearby town, was once the terminus of a railroad. The town has a number of abandoned historical buildings from that period. They have been restored and are emerging as a tourist attraction."
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Pão de Açúcar",
      "descricao": "Morro de granito na entrada da Baía de Guanabara, no Rio de Janeiro, ligado ao Morro da Urca por um teleférico."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Na entrada da Baía de Guanabara, o Pão de Açúcar se ergue direto do mar. Qual é, aproximadamente, a altura do seu topo?",
    "resposta": "Cerca de 400 metros",
    "distratores": [
      "Cerca de 200 metros",
      "Cerca de 700 metros",
      "Cerca de 1000 metros"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Sugarloaf_Mountain"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sugarloaf_Mountain",
        "situacao": "ok",
        "texto": "Sugarloaf Mountain (Portuguese: Pão de Açúcar, pronounced [ˈpɐ̃w̃ d(ʒi) aˈsukaʁ]) is a peak situated in Rio de Janeiro, Brazil, on a peninsula at the mouth of Guanabara Bay. Rising 396 m (1,299 ft) above the harbor, the peak is named for its resemblance to the traditional shape of concentrated refined sugarloaf. It is known worldwide for its  cable car and panoramic views of the city and beyond.\n[…]\nA glass-walled cable car (bondinho or, more formally, teleférico), capable of holding 65 people, runs along a 1,400 m (4,600 ft) route between the peaks of Sugarloaf and Morro da Urca every 20 minutes. The original cable car line was built in 1912, rebuilt around 1972–73, and rebuilt again in 2008. The cable car goes from a ground station, at the base of Morro da Babilônia, to Morro da Urca and thence to Sugarloaf's summit.\n[…]\nTo reach the summit, passengers take two cable cars. The first ascends to the shorter Morro da Urca, 220 m (722 ft) high. The second car ascends to Pão de Açúcar. The Swiss-made bubble-shaped cars offer passengers 360° views of the surrounding city. The ascent takes three minutes."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/P%C3%A3o_de_A%C3%A7%C3%BAcar",
        "situacao": "ok",
        "texto": "Monumento Natural dos Morros do Pão de Açúcar e da Urca é um complexo de morros localizado no bairro da Urca, na cidade do Rio de Janeiro, no Brasil. É composto pelo Morro do Pão de Açúcar (que dá nome ao complexo) e pelo Morro da Urca. Junto com a estátua do Cristo Redentor, é o maior cartão-postal da cidade do Rio de Janeiro e um dos mais famosos do Brasil.\n[…]\nO Morro do Pão de Açúcar, que dá nome ao complexo de morros, situa-se ao lado do Morro da Urca e possui 396 metros de altitude. O acesso ao topo do morro é dado exclusivamente pelo Bondinho do Pão de Açúcar, entretanto, os praticantes de montanhismo podem realizar escalada na face do morro. Junto com o Morro da Urca, há mais de 150 vias de escalada. Em seu cume, situam-se uma estação do Bondinho do Pão de Açúcar, uma lanchonete e algumas lojas.\n[…]\nCom 220 metros de altitude, o Morro da Urca é um dos morros que compõem o Pão de Açúcar. O acesso ao seu topo é dado por dois meios: pelo Bondinho do Pão de Açúcar ou por uma trilha. Entretanto, os praticantes de montanhismo podem realizar escalada na face do morro. Junto com o Morro do Pão de Açúcar, há mais de 150 vias de escalada.\n[…]\nNo topo do Morro da Urca, existe, desde 2008, o museu Cocuruto, que mostra a história do teleférico do Pão de Açúcar. O Museu do Cocuruto é uma atração que permite aos visitantes ver a história do Pão de Açúcar através do módulo interativo \"O fio da memória\".\n[…]\nAlgumas visitas notáveis foram registradas, como a do histórico escalador Wolfgang Güllich na segunda metade dos anos 1980, que abriu a primeira via de décimo grau no Brasil (graduação brasileira), batizada por Southern Comfort, ou Via do Alemão, na Pedra do Urubu, situada junto ao mar e a pista de lazer Cláudio Coutinho, pista esta de 1 250 metros de extensão, que margeia as faces sul dos morros da Urca e do Pão de Açúcar.\n[…]\n«As mulheres no Pão de Açúcar»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Ponte Rio-Niterói",
      "descricao": "Ponte sobre a Baía de Guanabara que liga as cidades do Rio de Janeiro e de Niterói, inaugurada em 1974."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Atravessando a Baía de Guanabara, a Ponte Rio-Niterói tem aproximadamente quantos quilômetros de extensão?",
    "resposta": "Cerca de 13 quilômetros",
    "distratores": [
      "Cerca de 3 quilômetros",
      "Cerca de 7 quilômetros",
      "Cerca de 25 quilômetros"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Ponte_Rio-Niterói",
      "https://en.wikipedia.org/wiki/Rio–Niterói_Bridge"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Ponte_Rio-Niterói",
        "situacao": "ok",
        "texto": "Ponte Presidente Costa e Silva, popularmente conhecida como Ponte Rio-Niterói, é uma ponte que atravessa a Baía de Guanabara, no estado do Rio de Janeiro, no Brasil. Ela conecta os municípios do Rio de Janeiro e Niterói. Seu nome é em homenagem a Artur da Costa e Silva, presidente durante a ditadura militar brasileira que deu a ordem para a construção da estrutura.\n[…]\nO seu projeto foi idealizado por Mario Andreazza, então Ministro dos Transportes. A obra demorou pouco menos de seis anos para ser concluída e foi entregue no dia 4 de março de 1974. A estrutura liga a Ponta do Caju (Rio de Janeiro) à Avenida do Contorno (Niterói). Antes do funcionamento da ponte, era necessário percorrer cerca de 120 km em estradas ou optar pelo uso de balsas.\n[…]\nA ponte tem 13,29 quilômetros de comprimento, sendo 8,8 quilômetros sobre a água e um vão central de 300 metros de extensão com 72 metros de altura para permitir a passagem de centenas de navios que entram e saem da Baía de Guanabara todos os meses. Desde a sua conclusão em 1974 até 1985, foi a segunda ponte mais extensa do mundo, atrás da Ponte do Lago Pontchartrain, nos Estados Unidos.\n[…]\nCom extensão total de 13,29 km, dos quais 8,83 km sobre a água, e 72 m de altura em seu ponto mais alto, e com um vão central de 300 m, atualmente é considerada a maior ponte em concreto protendido do hemisfério sul e o maior vão livre em reta contínua construído no mundo.\n[…]\nOutra opção metroviária seria a continuação da Linha 2 do Metrô Rio, atravessando a Baía da Guanabara embaixo d’água até Niterói, fazendo uma ligação com a Praça da Cruz Vermelha, no Rio, passando pelo Largo da Carioca, a Praça XV e a Baía da Guanabara, debaixo d’água, até Niterói, próximo à Estação das Barcas, no Centro.\n[…]\nPontes mais extensas do mundo\n[…]\nEcoPonte, concessionária responsável pela ponte\n[…]\nPonte Rio-Niterói no G1\n[…]\nPonte Rio-Niterói no OpenStreetMap"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Rio–Niterói_Bridge",
        "situacao": "ok",
        "texto": "The Rio–Niterói Bridge (in Portuguese: Ponte Rio-Niterói), officially the President Costa e Silva Bridge, is a box girder bridge spanning the Guanabara Bay, connecting the cities of Rio de Janeiro and Niterói in the State of Rio de Janeiro, Brazil. It is currently the second longest bridge in Latin America, after the Metro Line 1 bridge, and the  48th longest in the world in 2020.\n[…]\nIt is 13.29 kilometres (8.26 mi) long – 8.836 kilometres (5.490 mi) over water and the bridge's 300-metre (980 ft) central span is 72 metres (236 ft) high in order to allow the passage of hundreds of ships entering and leaving the bay every month.\n[…]\nOfficially, it is part of federal highway BR-101. From 1 June 1995,  it was under the management of Ponte S.A. under a 20-year concession until 1 June 2015 since when Ecoponte has managed the bridge.\n[…]\nThe concept dates to 1875, when a bridge-and-tunnel connection was envisioned between two cities separated by Guanabara Bay and connected by road only via inland journey of more than 100 kilometers (62 mi) through the city of Magé.\n[…]\nThe bridge opened on 4 March 1974, on a Monday morning, with the official name of President Costa e Silva Bridge. \"Rio-Niterói\" started as a descriptive nickname that soon became better known than the official name. Today hardly anyone refers to it by its official name.\n[…]\nOfficial website with live feed from the bridge's surveillance cameras: Ponte S.A. homepage"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Piauí",
      "descricao": "Estado da Região Nordeste do Brasil, com o menor litoral do país e capital em Teresina."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "O Piauí tem o litoral mais curto entre os estados brasileiros banhados pelo mar. Quantos quilômetros de costa ele tem, aproximadamente?",
    "resposta": "Cerca de 66 quilômetros",
    "distratores": [
      "Cerca de 15 quilômetros",
      "Cerca de 180 quilômetros",
      "Cerca de 300 quilômetros"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Piauí",
      "https://en.wikipedia.org/wiki/Piauí"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Piauí",
        "situacao": "ok",
        "texto": "Piauí é uma das 27 unidades federativas do Brasil. Localiza-se no noroeste da Região Nordeste, englobando as sub-regiões do Meio-Norte e Sertão. Limita-se com cinco estados: Ceará e Pernambuco a leste, Bahia a sul e sudeste, Tocantins a sudoeste e Maranhão a oeste. Delimitado pelo Oceano Atlântico ao norte, o Piauí tem o menor litoral do Brasil, com 66 km. Sua área é de 251 577,738 km², sendo pouc\n[…]\nO relevo piauiense é modesto e de topografia regular, com cerca de 92% do território do estado se encontrando abaixo de 600 m de altitude e 53% abaixo de 300 m. É constituído das seguintes unidades morfológicas: baixada litorânea, planalto de chapadas e cuestas e planície do Parnaíba. A baixada litorânea, no norte, é composta de terrenos arenosos e baixos, com tabuleiros areníticos, estando nela o delta do Parnaíba, o único em mar aberto das Américas.\n[…]\nEm outubro de 2011, no entanto, o diálogo entre os dois estados foi abalado pela decisão do governo do Piauí de entrar com uma ação civil ordinária no Supremo Tribunal Federal (STF), reivindicando uma área total de 2.821 quilômetros quadrados que hoje pertence ao Ceará. Se o STF acatar o pedido do governo piauiense, o estado do Ceará perderia 66% do município de Poranga, 32% de Croatá, 21% de Guaraciaba do Norte, 18% de Carnaubal, 8% de Crateús, além de 7% de Ipaporanga.\n[…]\nCom 66 km, o litoral do Piauí é o menor dentre os estados litorâneos brasileiros e é marcado pelas dunas e lagoas. O Delta do Parnaíba, um dos maiores do mundo, é constituído de várias ilhas e é uma área de proteção ambiental com mangues, espelhos d’água e dunas. Parnaíba se destaca pelo seu centro histórico, Luís Correia por suas praias e Cajueiro da Praia, pela Praia de Barra Grande, uma das mais conhecidas do estado.\n[…]\nCT Piauí (D-31), um navio militar da Marinha do Brasil\n[…]\n«Tribunal de Justiça do Estado do Piauí». Consultado em 26 de outubro de 2013"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Piauí",
        "situacao": "ok",
        "texto": "Piauí (, pyow-EE; pronounced [pi.aˈwi] or [pjaˈwi] ) is one of the states of Brazil, located in the country's Northeast Region. The state has 1.6% of the Brazilian population and produces 0.7% of the Brazilian GDP.\n[…]\nPiauí has the shortest coastline of any coastal Brazilian state at 66 km (41 mi), and the capital, Teresina, is the only state capital in the northeast to be located inland. Unlike the rest of the area, Piauí was first colonised inland and slowly expanded towards the ocean, rather than the other way around. In the southeast of the state, the National Park of Serra da Capivara is a UNESCO World Heritage Site.\n[…]\nEducational institutions in Piauí include:\n[…]\nUniversidade Estadual do Piauí (Uespi) (State University of Piauí)\n[…]\nInstituto Federal do Piauí (IFPI)\n[…]\nFaculdade de Saúde, Ciências Humanas e Tecnológicas do Piauí\n[…]\nThe state government has been involved in a number of initiatives to develop aspects of the state's economy. 10,000-18,000 hectares of land worth a reported R$50 million was given to Brasil Biodiesel, a green energy company. The company suffered a number of setbacks and in 2009 said it was selling the land. A second biodiesel company, Piauí Ecodiesel Ltda, is reported to be receiving up to R$81.1 million of investment.\n[…]\nThe flag of Piauí was unveiled on 24 July 1922. The blue canton and a star represents the state itself and the green and yellow bars represent Piauí's union with Brazil. In 2005 the words \"13 DE MARÇO DE 1823\" were added below the star to commemorate the date of the Battle of Jenipapo, an engagement in Brazil's war of independence.\n[…]\nSome cities in Piauí include:\n[…]\nCeará-Piauí border dispute\n[…]\nPiauí Tourism Website Archived 2013-02-01 at the Wayback Machine"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Unidades federativas do Brasil",
      "descricao": "Conjunto dos estados e do Distrito Federal que compõem a federação brasileira."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Somando todos os estados e o Distrito Federal, quantas unidades federativas tem o Brasil?",
    "resposta": "Vinte e sete",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Unidades_federativas_do_Brasil",
      "https://en.wikipedia.org/wiki/Federative_units_of_Brazil"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Unidades_federativas_do_Brasil",
        "situacao": "ok",
        "texto": "Unidades federativas do Brasil são entidades subnacionais com certo grau de autonomia (autogoverno, autolegislação e autoarrecadação) e dotadas de governo e constituição próprios. Segundo o artigo 1.º da Constituição brasileira de 1988, a República Federativa do Brasil é definida constitucionalmente como uma federação formada pela união indissolúvel de 26 estados, o Distrito Federal e 5571 municíp\n[…]\nA abordagem dos dispositivos que organizam a estrutura do Estado corresponde ao Título III, que contém sete capítulos (sobre a organização político-administrativa, a união federal, os estados federados, os municípios, o distrito federal e os territórios, a intervenção federal, e a administração pública, nessa ordem) e vai do artigo de número 18 ao 43.\n[…]\nDe todos os Estados brasileiros, 17 são litorâneos e 11 são fronteiriços, destes somente Mato Grosso, Rondônia e Santa Catarina possuem fronteira com apenas um país. Somente Amapá, Pará, Paraná, Rio Grande do Sul e Santa Catarina acumulam ambas as funções. A linha do equador passa por quatro Estados (AM, AP, PA e RR) e o trópico de Capricórnio por outros três (MS, PR e SP). Todos (à exceção do Distrito Federal) possuem municípios que realizam segundo turno eleitoral a nível municipal.\n[…]\nPara isto, conta com o auxílio do Tribunal de Contas do Distrito Federal que exerce a função de orientar e fiscalizar o uso das verbas públicas.\n[…]\nAtualmente existem 5 571 municípios (Juridicamente há 5 569 municípios legais, pois o IBGE conta como \"municípios\", para efeitos estatísticos, duas entidades a mais: Brasília, a capital federal, como cidade coextensiva ao Distrito Federal, e Fernando de Noronha, um distrito estadual de Pernambuco) em todo território nacional., O estado da Federação com menos municípios é Roraima, com apenas quinze. Enquanto isso, Minas Gerais possui a maior quantidade, chegando a 853."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Federative_units_of_Brazil",
        "situacao": "ok",
        "texto": "Brazil is divided into federative units which have a certain degree of autonomy (self-government, self-regulation, and self-collection) and are endowed with their own government and constitution. There are 26 states (estados) and one federal district (distrito federal). The states are generally based on historical, conventional borders which have developed over time. The states are divided into mu\n[…]\nAll states and the Federal District are represented in the national congress, each with three senators and between eight and 70 deputies, depending on their population. The citizens of all states and the Federal District vote for these national representatives and for president and vice president.\n[…]\nIn 1549, the Portuguese Crown appointed Tomé de Sousa as the first governor-general of the vast Portuguese dominion in South America, known as the State of Brazil (Estado do Brasil). In 1621, the northern part of the dominion was detached, becoming a separate entity known as the State of Maranhão. However, captaincies continued existing under both states as regional administrations.\n[…]\nWhen Brazil became a republic in 1889, all provinces became states, and the Neutral Municipality became the Federal District. In 1903, Brazil acquired the territory of Acre from Bolivia with the Treaty of Petrópolis.\n[…]\nIn 1960, the rectangular-shaped Distrito Federal was carved out of Goiás to contain the new capital, Brasília. The previous federal district became the state of Guanabara, but in 1975 it was reincorporated into its original state of Rio de Janeiro, becoming its capital as the city of Rio de Janeiro.\n[…]\nEconomic statistical data for Brazil's 26 states and federal district (in English, Portuguese, and Spanish)"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Fronteiras do Brasil",
      "descricao": "Conjunto das fronteiras terrestres do Brasil com os países vizinhos da América do Sul."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Somadas, as fronteiras terrestres do Brasil com os países vizinhos têm aproximadamente quantos quilômetros?",
    "resposta": "Cerca de 16 mil quilômetros",
    "distratores": [
      "Cerca de 5 mil quilômetros",
      "Cerca de 9 mil quilômetros",
      "Cerca de 30 mil quilômetros"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Fronteiras_do_Brasil"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Fronteiras_do_Brasil",
        "situacao": "ok",
        "texto": "As fronteiras do Brasil são as fronteiras internacionais que o Brasil compartilha com os países vizinhos. O Brasil tem fronteiras com dez países, todos os países da América do Sul, com exceção do Chile e do Equador, totalizando 16 885 quilômetros. O Brasil tem a terceira maior fronteira terrestre do mundo, atrás da China e da Rússia. A Bolívia é o país que partilha a maior fronteira com o territór\n[…]\nDentro do território nacional, o Amazonas é o único dos 11 estados fronteiriços a ter 3 fronteiras: com Peru, Colômbia e Venezuela – enquanto Santa Catarina, Mato Grosso e Rondônia são os 3 únicos estados fronteiriços a ter fronteira exclusiva com um único país: Santa Catarina com a Argentina; Mato Grosso e Rondônia (ambos) com a Bolívia. Os outros 7 estados fronteiriços restantes têm exatamente 2 países como limites externos (fronteiras).\n[…]\nBoa parte desses estados não têm litoral (interioranos– sem acesso ao Oceano Atlântico), exceto os estados sulistas (Rio Grande do Sul, Santa Catarina e Paraná) e os estados do Pará e Amapá. Os estados fronteiriços restantes são: Acre, Roraima e Mato Grosso do Sul.\n[…]\nOs comprimentos das fronteiras que o Brasil compartilha com diferentes países, em sentido anti-horário em todo o Brasil, desde a Guiana Francesa até o Uruguai, estão listados abaixo:\n[…]\nIlha de Guajará-mirim (nome brasileiro), ou Isla Suárez (nome boliviano), uma ilha fluvial no rio Mamoré é reivindicada tanto pela Bolívia quanto pelo Brasil.\n[…]\nUma região triangular, chamada Rincão de Artigas em português, é reivindicada tanto pelo Uruguai quanto pelo Brasil. A disputa é devido a um desacordo sobre qual fluxo deve ser chamado de Arroyo de la Invernada e formar a fronteira oficial entre os dois países.\n[…]\nIlha Brasileira, uma ilha fluvial na junção do rio Quaraí e o rio Uruguai, na fronteira entre Argentina, Brasil e Uruguai é reivindicada por ambos Uruguai e Brasil.\n[…]\nProteção das Fronteiras"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Cerrado",
      "descricao": "Bioma de savana do Brasil central, com árvores de troncos retorcidos e nascentes de grandes bacias hidrográficas."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Depois da Amazônia, qual é o maior bioma brasileiro em área?",
    "resposta": "Cerrado",
    "distratores": [
      "Caatinga",
      "Mata Atlântica",
      "Pantanal"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Cerrado",
      "https://en.wikipedia.org/wiki/Cerrado"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Cerrado",
        "situacao": "ok",
        "texto": "Cerrado é bioma brasileiro de savanas, sendo o segundo maior em extensão territorial depois da Amazônia, ocupando uma área de mais de dois milhões de quilômetros quadrados. O termo \"cerrado\" pode ser utilizado em três sentidos O primeiro, a \"fisionomia do cerrado sensu stricto\" é uma das fisionomias do bioma savana e parte da província florística cerrado sensu lato.\n[…]\nFitofisionomias presentes no \"bioma\" (domínio) cerrado, segundo Ribeiro & Walter (1998):[p.150]\n[…]\nApesar de sua importância ecológica, as políticas agrícolas e o planejamento de uso da terra no Brasil historicamente consideraram o Cerrado como de baixo valor de conservação. Como resultado, apenas 1,5% do bioma está protegido por reservas federais. Em 1994, aproximadamente 695.000 km² (69.500.000 ha), representando 35% de sua área total, já haviam sido convertidos em paisagens antropogênicas.\n[…]\nDe acordo com o Cadastro Nacional de Unidades de Conservação do Brasil, existiam, em novembro de 2024, 560 áreas protegidas no bioma Cerrado. No Brasil, as áreas protegidas são conhecidas como unidades de conservação, e as do Cerrado representam 19% de todas as unidades do país. Embora uma avaliação em março de 2026 tenha constatado que existiam 645 unidades de conservação no bioma, totalizando 186.416 km² (18641,6 ha), isto representava apenas cerca de 9,81% da área total do Cerrado protegida.\n[…]\nAs terras privadas são essenciais para os esforços de conservação, visto que a maior parte da vegetação nativa remanescente no Cerrado encontra-se em propriedades e fazendas privadas. Em 2019, as terras privadas detinham 57,9% da vegetação nativa remanescente no Cerrado. O Código Florestal brasileiro exige que os proprietários de terras conservem 20% da vegetação nativa como Reservas Legais em suas propriedades em todos os biomas, exceto na Amazônia, onde o percentual é de 80%.\n[…]\n«EMBRAPA: Bioma Cerrado»"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Cerrado",
        "situacao": "ok",
        "texto": "The Cerrado (Portuguese pronunciation: [seˈʁadu]) (lit. \"closed,\" \"dense\") is a vast ecoregion of tropical savanna in central Brazil, being present in the states of Goiás, Mato Grosso do Sul, Mato Grosso, Tocantins, Maranhão, Piauí, Bahia, Minas Gerais, São Paulo, Paraná and the Federal District. The core areas of the Cerrado biome are the Brazilian Highlands – the Planalto. The main habitat types\n[…]\nThe second largest of Brazil's major habitat types, after the Amazonian rainforest, the Cerrado accounts for a full 21 percent of the country's land area (extending marginally into Paraguay and Bolivia). About 75% of the Cerrado’s 2 million km2 is privately owned.\n[…]\nPrivately owned land is essential for conservation efforts as the majority of remaining native vegetation in the Cerrado occurs in private properties and farms. In 2019, private lands held 57.9% of the remaining native vegetation in the Cerrado. Brazil’s Forest Code requires land owners to retain 20% of native vegetation as Legal Reserves on their properties in all biomes except the Amazon, where the number is 80%.\n[…]\nIndigenous lands (IL) remain an important sector for biodiversity conservation in the Cerrado. The government of Brazil has recognized 4.8% of the Cerrado’s area as IL. In 2019, 6.72% of remaining native vegetation occurred within IL, compared to the 2.27% that was preserved within conservation units. Indigenous lands also effectively represent the ecosystem services and biodiversity characteristic of the Cerrado biome and are efficient in reducing habitat conversion and deforestation.\n[…]\n\"Bioma Cerrado\". www.agencia.cnptia.embrapa.br. EMBRAPA (in Portuguese). Brazilian Government. Archived from the original on 15 June 2020. Retrieved 30 April 2007.\n[…]\n\"Cerrado\". Brazilian Government. Archived from the original on 24 December 2005.\n[…]\n\"Cerrado\". Terrestrial Ecoregions. World Wildlife Fund."
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Sergipe",
      "descricao": "Menor estado do Brasil em área, na Região Nordeste, entre Bahia e Alagoas, com capital em Aracaju."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Entre os vinte e seis estados brasileiros, qual é o menor em área?",
    "resposta": "Sergipe",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Sergipe",
      "https://en.wikipedia.org/wiki/Sergipe"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Sergipe",
        "situacao": "ok",
        "texto": "Sergipe é uma das 27 unidades federativas do Brasil. Está situado na Região Nordeste e tem por limites o oceano Atlântico a leste e os estados da Bahia, a oeste e a sul, e de Alagoas, a norte, do qual está separado pelo Rio São Francisco. Está dividido em 75 municípios e é o menor dos estados brasileiros, ocupando uma área total de 21 910 km², tornando-o pouco maior que El Salvador.\n[…]\nEm 1822, após a independência do Brasil, Sergipe tornou-se uma província.\n[…]\nFoi no estado de Sergipe, o local de fundação da quarta maior rede de supermercado do Brasil, o G.Barbosa. A rede que tem sua sede localizada em Sergipe opera também na Bahia em Alagoas e, mais recentemente, no Ceará. Além da citada anteriormente, operam no estado as seguintes redes de supermercados: Bompreço (fundada pelo Sergipano João Carlos Paes Mendonça em Casa Amarela, Recife, posteriormente vendido ao Walmart), Extra, Makro e Atacadão.\n[…]\nO principal porto do estado é o Porto de Sergipe, em Barra dos Coqueiros.\n[…]\nA educação em Sergipe, é provida, como em todo o Brasil de escolas públicas e privadas. Administrada pela Secretaria de Estado da Educação possui orçamento de R$ 1 053 000 000,00 em 2016 e com projeção de redução de 30 milhões para 2017. O IDEB é considerado abaixo da média nacional e de maneira mais acentuada no ensino médio. O ensino fundamental ainda é gerido prioritariamente pela rede estadual suprindo as necessidades locais dos municípios descumprindo o que é claramente determinado pela LDB.\n[…]\nEm Sergipe existem três complexos de cinemas localizados na capital do estado, dois pertencentes à rede Cinemark, e o Cinema Vitória, (Sala Avenida Brasil), localizado no Mini Shopping Rua do Turista, reinaugurado em 13 de maio de 2013, um projeto da Casa Curta-Se em parceria com a Secretaria de Estado da Cultura e Ministério da Cultura.\n[…]\n«Assembleia Legislativa de Sergipe»\n[…]\n«Tribunal de Justiça de Sergipe»"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Sergipe",
        "situacao": "ok",
        "texto": "Sergipe (English: , sair-ZHEE-pee ; Brazilian Portuguese: [sɛʁˈʒipi] ), officially the State of Sergipe, is a state of Brazil. Located in the Northeast Region along the Atlantic coast of the country, Sergipe is the smallest state in Brazil by geographical area at 21,910 square kilometres (8,460 mi2), larger only than the Federal District. Sergipe borders Bahia to the south and west and Alagoas to \n[…]\nThe area was fully brought under Portuguese rule after approximately two decades of warfare during which thousands of natives were murdered and thousands more enslaved to work on sugar plantations. São Cristóvão was the site of the first Portuguese settlement, in 1591, at Sergipe D'El-Rey.\n[…]\nFaculdade Sergipana (FASER);\n[…]\nIt has a draft of 10.5 meters and its main advantage is a backport area of 2 million m2 for the installation of new projects, of which 800 thousand m2 are already bonded. In the same region of the port is also located the Barra dos Coqueiros wind farm operated by Statkraft with an installed capacity of 35MW and the Porto de Sergipe Thermoelectric Complex, the largest LNG thermoelectric plant in Brazil and Latin America, operated by Eneva with an installed capacity of 1.6GW.\n[…]\nSão Cristóvão is the fourth oldest town in the country, and was Sergipe's state capital until 1855. It is located some 25 km (16 mi) from the current capital Aracaju.\n[…]\nNavigating between the rocks of this cliff, located in Sergipe's Alto Sertão, involves valleys forming a 50 m-high canyon surrounding a lake that reaches a depth of 190 m in certain points. The area includes nests of herons and river islands. The rocks contain traces of the area's first inhabitants who lived there more than 8,000 years ago.\n[…]\nList of municipalities in Sergipe\n[…]\nList of villages in Sergipe\n[…]\n(in Portuguese) Official Website (Agência Sergipe de Notícias - Governo de Sergipe)\n[…]\n(in Portuguese) History of Colonial Sergipe"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Região Centro-Oeste do Brasil",
      "descricao": "Uma das cinco grandes regiões do Brasil definidas pelo IBGE, formada por Goiás, Mato Grosso, Mato Grosso do Sul e o Distrito Federal."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Das cinco grandes regiões brasileiras, qual é a única que não tem litoral?",
    "resposta": "Centro-Oeste",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Região_Centro-Oeste_do_Brasil",
      "https://en.wikipedia.org/wiki/Central-West_Region,_Brazil"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Região_Centro-Oeste_do_Brasil",
        "situacao": "ok",
        "texto": "Região Centro-Oeste do Brasil é a segunda maior em extensão territorial do país, com 1 606 403,506 km², cerca de um quinto da área do país. As porções oriental e meridional de seu território, inclusive o limite meridional de Tocantins, localizado ao sul do paralelo 12 S, estão subordinadas à Região geoeconômica Centro-Sul do Brasil. Ao passo disso, boa parte do estado de Mato Grosso integra a Regi\n[…]\nCom cerca de quatro cabeças de gado, em média, para cada morador, a região Centro-Oeste do Brasil conta com uma grande produção animal, principalmente de boi.\n[…]\nA região de maior industrialização do Centro-Oeste do Brasil se prolonga de Goiânia até Brasília, compreendendo a cidade de Anápolis. Sobressaem as fábricas de alimentos, tecidos, produtos minerais e bebidas. Demais centros industriais relevantes são Campo Grande (fábricas de alimentos), Cuiabá (alimentos e pneus) e Corumbá, possibilitada pela imediação do maciço de Urucum para a extração de matérias-primas minerais (ferro e manganês).\n[…]\nLocalizada no centro geográfico do Brasil, a região Centro-Oeste do Brasil compreende uma malha viária incompleta. Sobressaem as conexões de Brasília com praticamente todas as demais capitais por intermédio de grandes rodovias, como a Brasília-Acre e a Belém-Brasília. Além dessas, existe a Cuiabá-Porto Velho, a Cuiabá-Santarém e a Transpantaneira, interconectando Corumbá e Cuiabá e vários outras partes do Pantanal Mato-Grossense.\n[…]\nA região Centro-Oeste do Brasil conta, também, com aeroportos de fluxo intenso, como o Aeroporto Internacional de Brasília - Presidente Juscelino Kubitschek (BSB) — principal polo aéreo —, Aeroporto Internacional de Goiânia/Santa Genoveva (GYN), Aeroporto Internacional Marechal Rondon (CGB) em Várzea Grande/Cuiabá e o Aeroporto Internacional de Campo Grande (CGR), além de ser atendida por pequenos aeroplanos que a cortam em todas as direções.\n[…]\nBrasília"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Central-West_Region,_Brazil",
        "situacao": "ok",
        "texto": "The Central-West or Center-West Region of Brazil (Portuguese: Região Centro-Oeste do Brasil [ʁeʒiˈɐ̃w ˌsẽtɾoˈɛstʃi du bɾaˈziw]) is composed of the states of Goiás, Mato Grosso and Mato Grosso do Sul; along with the Distrito Federal (Federal District), where Brazil's national capital, Brasília, is situated. The region comprises 18.86% of the national territory, and is the least populated in Brazil.\n[…]\nBrasília International Airport, Marechal Rondon International Airport, Campo Grande International Airport and Santa Genoveva Airport connects the Center-West region with many Brazilian cities and also operates some international flights.\n[…]\nLocated in the state of Goiás in a region called Planalto Central, the Federal District is divided in 31 administrative regions. Brasília - where the three branches of the federal government are located - is the main attraction of this dry area with only two seasons. The rainy season is from October to March.\n[…]\nUniversity of Brasília (UnB)\n[…]\nIn the Federal District, the National Park of Brasília is one of the greatest local attractions.\n[…]\nBrasília\n[…]\nBrasília International Airport - President Juscelino Kubitschek (BSB/SBBR) serves the metropolitan area with major domestic and international flights.\n[…]\nBrasília International Airport is the third largest in Brazil in terms of passenger movement. Because of its strategic location it is considered a civil aviation hub for the rest of the country. This makes for a large number of takeoffs and landings and it is not unusual flights to have to wait in the holding pattern to land. Following the airport's master plan, Infraero built a second runway, which was finished in 2006.\n[…]\nCampo Grande\n[…]\nThe operation of Campo Grande International Airport is shared with the Campo Grande Air Base. The airport has two runways."
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Ilha de Marajó",
      "descricao": "Grande ilha do estado do Pará, na foz do rio Amazonas."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Banhada ao mesmo tempo por rios e pelo oceano, qual ilha do Pará é considerada a maior ilha fluviomarinha do mundo?",
    "resposta": "Ilha de Marajó",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Ilha_de_Marajó",
      "https://en.wikipedia.org/wiki/Marajó"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Ilha_de_Marajó",
        "situacao": "ok",
        "texto": "A Ilha do Marajó (inicialmente chamada de Marinatambal) é uma ilha costeira do tipo fluviomarítima situada na Área de Proteção Ambiental do arquipélago do Marajó, no estado do Pará, na região norte do Brasil. Considerada, segundo algumas fontes, a maior ilha fluviomarítima do planeta.\n[…]\nCom uma área de 40.100 km², é a maior ilha costeira do Brasil e a maior ilha fluviomarítima do planeta (banhada ao mesmo tempo tanto por águas fluviais quanto por oceânicas), banhada pelo rio Amazonas a oeste e noroeste, pelo oceano Atlântico ao norte e nordeste, pela baía do Marajó a leste e sudeste e pelo complexo de canais distributários do rio Tocantins e do rio Pará a sul.\n[…]\nMarajós é a maior ilha fluviomarinha do mundo e possui uma rica biodiversidade devido à sua localização estratégica entre a floresta amazônica e o oceano Atlântico .\n[…]\nAinda no setor primário, uma das atividades de maior importância para a Ilha do Marajó é a pecuária extensiva de búfalos, chamada de bubalinocultura. O leite e seus derivados estão entre os principais produtos dessa atividade, seguidos da carne.[carece de fontes]?\n[…]\nAlém disso, a Ilha de Marajó atrai turistas interessados em explorar suas belas paisagens naturais, fazer passeios de barco pelos rios e desfrutar das praias de água doce. Também é possível visitar fazendas de búfalos, experimentar a culinária local, que inclui pratos à base de peixe e búfalo, e participar de festivais culturais, como o Búfalo-Bumbá Junino de Mestre Damasceno, que tem 51 anos de tradição, o Festival de Boi-Bumbá de Mestre Damasceno, o MarajóFest e o Festival do Carimbó .\n[…]\nVariação lexical e fonética na ilha do Marajó\n[…]\nArtigo \"Uma interpretação das culturas da Ilha de Marajó\" (1954), de Betty Jane Meggers e Clifford Evans, Instituto de Antropologia e Etnologia do Pará"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Marajó",
        "situacao": "ok",
        "texto": "Marajó ( MARR-ə-ZHOH; Brazilian Portuguese: [maɾaˈʒɔ]) is a large coastal island in Pará, Brazil. It is the main and largest of the islands in the Marajó Archipelago. Marajó Island is separated from the mainland by Marajó Bay, Pará River, smaller rivers (especially Macacos and Tajapuru), Companhia River, Jacaré Grande River, Vieira Grande Bay and the Atlantic Ocean.\n[…]\nEast: Marajó Bay\n[…]\nThe island is in the Marajó várzea ecoregion, an area of seasonally and tidally flooded várzea forest.\n[…]\nSince the 1990s, there has been debate over the origins and sophistication of Marajó's pre-Cabraline society. Based on fieldwork in the 1940s and 1950s, the archaeologist Betty Meggers initially argued that the Marajoara culture had been founded by emigrants from the Andes and that the society steadily declined until its final collapse at approximately 1400 AD, due to the Marajó's poor soil fertility and other environmental factors.\n[…]\nMegger's hypotheses subsequently became associated with environmental determinism. Her theory has since been rejected, however, by the archaeologist Anna Curtenius Roosevelt, who re-excavated Marajó in the 1980s. According to Roosevelt, the Marajoara culture developed independently within the Amazon and featured both intensive subsistence agriculture and major public works.\n[…]\nRoosevelt estimated that Marajó may have had a population of more than 100,000 people at its peak. The population lived in homes with tamped earth floors, organized themselves into matrilineal clans, and divided tasks by sex, age, and skill level.\n[…]\nIn contrast, however, during the 1918–1919 pandemic worldwide of  Spanish influenza, Marajó was the only major populated area not to have any documented cases of the illness.\n[…]\nThe island is also the location of the Roman Catholic Territorial Prelature of Marajó.\n[…]\nMarajó Island and Pará state at V-Brazil.com"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Pantanal",
      "descricao": "Grande planície alagável do centro da América do Sul, que ocupa partes de Mato Grosso e Mato Grosso do Sul."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "O Pantanal fica quase todo no Brasil, mas também avança sobre dois países vizinhos. Quais?",
    "resposta": "Bolívia e Paraguai",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Pantanal",
      "https://en.wikipedia.org/wiki/Pantanal"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Pantanal",
        "situacao": "ok",
        "texto": "Complexo do Pantanal, ou simplesmente Pantanal, é um bioma constituído principalmente por uma savana estépica, alagada em sua maior parte, com 250 000 quilômetros quadrados de extensão e uma altitude média de 100 m. Devido às dificuldades de mensurar o tamanho do Pantanal, é possível encontrar referências de sua área em 210 000 km².\n[…]\nEstá situado no sul do estado do Mato Grosso, e no noroeste de Mato Grosso do Sul, além de partes do norte do Paraguai e do leste da Bolívia (onde é chamado de chaco boliviano). O Pantanal é considerado a maior planície alagada contínua do mundo, com 140 000 km² em território brasileiro. De acordo com o Instituto SOS Pantanal, do total de 195 000 km² considerados do Pantanal, 151 000 km² se encontram no Brasil e os restantes 44 000 km² estão divididos entre Bolívia e Paraguai.\n[…]\nO Pantanal Boliviano possui 31 898 km².\n[…]\nA Planície do Pantanal possui aproximadamente, no Brasil, 150 000 km², medida estimada pelos estudiosos que explicam que dificilmente pode ser estabelecido um cálculo exato de suas dimensões, pois a cada fechamento de ciclo de estações de seca e de águas o Pantanal se modifica. Sua área total é de 210 000 km², esta área inclui partes do Brasil, Bolívia e Paraguai, com a maior parte situada no Brasil. Na Bolívia é conhecido também como Pantanal Boliviano ou ainda Gran Pantanal.\n[…]\nA vegetação pantaneira é um mosaico de cinco regiões distintas: Floresta Amazônica, Cerrado, Caatinga, Mata Atlântica e Chaco (paraguaio, argentino e boliviano). Durante a seca, os campos se tornam amarelados e constantemente a temperatura desce a níveis abaixo de 0 °C, e registra geadas, influenciada pelos ventos que chegam do sul do continente.\n[…]\nPântano\n[…]\n«Ministério do Meio Ambiente - Pantanal»\n[…]\n«Previsão de Níveis d'Água no Pantanal»\n[…]\n«Enciclopedia do Pantanal (Planeta Pantanal)»"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pantanal",
        "situacao": "ok",
        "texto": "The Pantanal (Portuguese pronunciation: [pɐ̃taˈnaw], Spanish pronunciation: [pantaˈnal]) is a natural region encompassing the world's largest tropical wetland area, and the world's largest flooded grasslands. It is located mostly within the Brazilian state of Mato Grosso do Sul, but it extends into Mato Grosso and portions of Bolivia and Paraguay. It sprawls over an area estimated at between 140,0\n[…]\nElevation of the Pantanal ranges from 80 to 150 m (260 to 490 ft) above sea level. Annual rainfall over the flood basin is between 1,000 and 1,500 mm (39 and 59 in), with most rainfall occurring between November and March. Annual average precipitation ranged from 920 to 1,540 mm in the years 1968–2000. In the Paraguay River portion of the Pantanal, water levels rise between two meters to five meters seasonally; water fluctuations in other parts of the Pantanal are less than this.\n[…]\nThe vegetation of the Pantanal, often referred to as the \"Pantanal complex\", is a mixture of plant communities typical of a variety of surrounding biome regions: these include moist tropical Amazonian rainforest plants, semiarid woodland plants typical of northeast Brazil, Brazilian cerrado savanna plants, and plants of the Chaco savannas of Bolivia and Paraguay. Forests usually occur at higher altitudes of the region, while grasslands cover the seasonally inundated areas.\n[…]\nEncontro das Águas State Park and Guirá State Park are state parks of Mato Grosso in the Pantanal.\n[…]\nOtuquis National Park and Integrated Management Natural Area and San Matías Integrated Management Natural Area are protected areas of Bolivia in the Pantanal. The entrance to Otuquis National Park is through the town of Puerto Suarez.\n[…]\nLadário, Mato Grosso do Sul\n[…]\nPoconé, Mato Grosso\n[…]\nBolivia:\n[…]\nParaguay:\n[…]\nBahía Negra, Alto Paraguay\n[…]\nFuerte Olimpo, Alto Paraguay\n[…]\nPantanal maps and tourist information\n[…]\nPantanal Nature. Information on wildlife in Pantanal."
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Pantanal",
      "descricao": "Grande planície alagável do centro da América do Sul, que ocupa partes de Mato Grosso e Mato Grosso do Sul."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Todos os anos, as cheias de um grande rio e de seus afluentes inundam a planície do Pantanal. Qual é esse rio principal?",
    "resposta": "Rio Paraguai",
    "distratores": [
      "Rio Paraná",
      "Rio Araguaia",
      "Rio Xingu"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Pantanal",
      "https://en.wikipedia.org/wiki/Pantanal"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Pantanal",
        "situacao": "ok",
        "texto": "Complexo do Pantanal, ou simplesmente Pantanal, é um bioma constituído principalmente por uma savana estépica, alagada em sua maior parte, com 250 000 quilômetros quadrados de extensão e uma altitude média de 100 m. Devido às dificuldades de mensurar o tamanho do Pantanal, é possível encontrar referências de sua área em 210 000 km².\n[…]\nDo ponto de vista da fisiografia e geomorfologia, o Pantanal é definido como uma \"grande e relativamente complexa planície de coalescência detrítico-aluvial\". Silva & Abdon (1998), usando como critério a inundação e o relevo, dividem a área em onze sub-regiões (Cáceres, Poconé, Barão de Melgaço, Paraguai, Paiaguás, Nhecolândia, Abobral, Aquidauana, Miranda, Nabileque, Porto Murtinho).\n[…]\nO rio Paraguai passa pela cidade de Cáceres, Mato Grosso, onde é conhecida como \"Princesinha do Rio Paraguai\" e seus afluentes percorrem o Pantanal, formando extensas áreas inundadas que servem de abrigo para muitos peixes, como o pintado, o dourado, o pacu, e também para outros animais, como os jacarés, as capivaras e ariranhas, entre outras espécies.\n[…]\nAnimais que estão presentes no mar também existem no pantanal, formando o que se pode chamar de mar interior. A área alagada do pantanal se deve a lentidão de drenagem das águas que fluem lentamente, pela região do médio Paraguai, num local chamado de Fecho dos Morros do Sul.\n[…]\nSegundo dados da Embrapa Pantanal, a instalação de 116 pequenas centrais hidrelétricas (PCHs) no Alto Paraguai, grande responsável pelas inundações periódicas do Pantanal, ameaçam a pesca, agricultura familiar, pecuária bovina e o turismo pesqueiro, especialmente porque 70% ficarão concentradas na mesma região. As barragens impedem que os peixes subam os rios e ocorra o trânsito de nutrientes. Por consequência, há o impacto na desova e alimentação dos peixes.\n[…]\nPântano"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pantanal",
        "situacao": "ok",
        "texto": "The Pantanal (Portuguese pronunciation: [pɐ̃taˈnaw], Spanish pronunciation: [pantaˈnal]) is a natural region encompassing the world's largest tropical wetland area, and the world's largest flooded grasslands. It is located mostly within the Brazilian state of Mato Grosso do Sul, but it extends into Mato Grosso and portions of Bolivia and Paraguay. It sprawls over an area estimated at between 140,0\n[…]\nIt constitutes an enormous internal river delta, in which several rivers flowing from the surrounding plateau merge, depositing their sediments and erosion residues, which have been filling the large depression area of the Pantanal. This area is also one of the distinct physiographic provinces of the larger Parana-Paraguay Plain area, which encompasses a total of 1.5×10^6 km2 (580,000 sq mi).\n[…]\nElevation of the Pantanal ranges from 80 to 150 m (260 to 490 ft) above sea level. Annual rainfall over the flood basin is between 1,000 and 1,500 mm (39 and 59 in), with most rainfall occurring between November and March. Annual average precipitation ranged from 920 to 1,540 mm in the years 1968–2000. In the Paraguay River portion of the Pantanal, water levels rise between two meters to five meters seasonally; water fluctuations in other parts of the Pantanal are less than this.\n[…]\nThe vegetation of the Pantanal, often referred to as the \"Pantanal complex\", is a mixture of plant communities typical of a variety of surrounding biome regions: these include moist tropical Amazonian rainforest plants, semiarid woodland plants typical of northeast Brazil, Brazilian cerrado savanna plants, and plants of the Chaco savannas of Bolivia and Paraguay. Forests usually occur at higher altitudes of the region, while grasslands cover the seasonally inundated areas.\n[…]\nPoconé, Mato Grosso\n[…]\nParaguay:\n[…]\nBahía Negra, Alto Paraguay\n[…]\nFuerte Olimpo, Alto Paraguay\n[…]\nPantanal Nature. Information on wildlife in Pantanal."
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Pampa",
      "descricao": "Bioma de campos e coxilhas do sul da América do Sul, que no Brasil ocupa a metade sul do Rio Grande do Sul."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "O bioma Pampa, de campos baixos e coxilhas onde se cria gado, aparece em apenas um estado brasileiro. Qual?",
    "resposta": "Rio Grande do Sul",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Pampa",
      "https://en.wikipedia.org/wiki/Pampas"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Pampa",
        "situacao": "ok",
        "texto": "O Pampa é uma região natural e pastoril de planícies com coxilhas cobertas por campos localizada no sul da América do Sul. Geograficamente abrange a metade meridional do estado brasileiro do Rio Grande do Sul (ocupando cerca de 69% do território do estado), o Uruguai e as províncias argentinas de Buenos Aires, La Pampa, Santa Fé, Córdoba, Entre Ríos e Corrientes.\n[…]\nNo âmbito brasileiro, os pampas podem ser designados com o termo regionalista campanha gaúcha. Quando em conjunto com os campos do planalto meridional (abrangendo regiões do norte do Rio Grande do Sul, Santa Catarina e Paraná, incluindo os Campos de Cima da Serra e os Campos Gerais do Paraná), são chamados campos do sul ou campos sulinos.\n[…]\nNa classificação dos \"biomas\" (mais propriamente, domínios) brasileiros pelo IBGE (2004), tal região está subdividida entre os biomas Mata Atlântica (planalto meridional, ou  planalto das araucárias, do Paraná ao Rio Grande do Sul) e Pampa (sul do Rio Grande do Sul).\n[…]\nE a soja, por ser cultivada em várias partes do país, influenciou a agricultura sulina, ela acabou substituindo em grande parte cultivo do milho. As monoculturas como um todo, são a principal causa de desmatamento, não apenas no Pampa, mas no país inteiro.\n[…]\nLindman (1900) considera o Rio Grande do Sul como uma zona de transição entre a mata virgem brasileira e os pampas argentinos, e o divide em duas regiões geográficas: parte norte (ou Planalto) e parte sul e oeste (ou Campanha). Do ponto de vista da vegetação, Lindman apresenta as seguintes regiões e tipos de vegetação (mantendo-se a grafia original):\n[…]\nLindman descreve também algumas formações que ocorrem nas orlas do Rio Grande do Sul: ao norte, campos cerrados (hadrodryades pyknophyllae); a oeste, esteros (pantanaes), palmares (parques de Copernicia) e espinales; ao sul e sudoeste: pampas de diversos tipos).\n[…]\nRepública Rio-Grandense"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pampas",
        "situacao": "ok",
        "texto": "The Pampas (; from Quechua pampa 'plain'), also known as the Pampas Plains, are fertile low grasslands in southern  South America that cover more than 1,200,000 km2 (460,000 sq mi) and include the Argentine provinces of Buenos Aires, La Pampa, Santa Fe, Entre Ríos, and Córdoba; all of Uruguay; and Brazil's southernmost state, Rio Grande do Sul.\n[…]\nThis region has generally low elevations, whose highest levels generally do not exceed 600 metres (2,000 ft) in altitude. The coastal areas and most of the Buenos Aires Province are predominantly plain (with some wetlands) and the interior areas (mainly in the southern part of the Brazilian state of Rio Grande do Sul and Uruguay) have low ranges of hills (like Serras de Sudeste in Brazil and Cuchilla Grande in Uruguay).\n[…]\nThe climate of the Pampas is generally temperate, gradually giving way to a more humid subtropical climate in the north (Cfa, according to the Köppen climate classification, with a Cwa tendency (drier winters) in the northwestern edge); a cold semi-arid climate (BSk) on the southern and western fringes (like San Luis Province, western La Pampa Province and southern Buenos Aires Province); and an oceanic climate (Cfb) in the southeastern part (in the localities of Mar del Plata, Necochea, Tandil and the Sierra de la Ventana mountains, Argentina).\n[…]\nThe World Wildlife Fund divides the Pampas into three distinct ecoregions. The Uruguayan Savanna lies east of the Paraná River, and includes all of Uruguay, most of Entre Ríos and Corrientes provinces in Argentina, and the southern portion of Brazil's state of Rio Grande do Sul. The Humid Pampas include eastern Buenos Aires Province, and southern Entre Ríos Province. The Semiarid Pampas includes western Buenos Aires Province and adjacent portions of Santa Fe, Córdoba, and La Pampa provinces.\n[…]\nFederal University of Pampa"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Rio Grande do Sul",
      "descricao": "Estado mais ao sul do Brasil, cuja capital é Porto Alegre."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "O Rio Grande do Sul faz fronteira com a Argentina e o Uruguai, mas com apenas um estado brasileiro. Qual?",
    "resposta": "Santa Catarina",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Rio_Grande_do_Sul",
      "https://en.wikipedia.org/wiki/Rio_Grande_do_Sul"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Rio_Grande_do_Sul",
        "situacao": "ok",
        "texto": "Rio Grande do Sul é uma das 27 unidades federativas do Brasil. Situado na região Sul do país, tem como limites, ao norte, com Santa Catarina; ao sul, com os departamentos uruguaios de Artigas, Rivera, Cerro Largo, Treinta y Tres e Rocha; a leste, com o Oceano Atlântico; e a oeste, com as províncias argentinas de Misiones e Corrientes.\n[…]\nEsta é fragmentada em cinco: Cachoeira do Sul, Cruz Alta, Santa Cruz do Sul, Santo Ângelo e Uruguaiana.\n[…]\nEm contrapartida, a de suínos (5,7 milhões de cabeças), consome parcela considerável do fornecimento de milho e mandioca, sendo característica das áreas das florestas. Em 2012, o Rio Grande do Sul foi também o maior criador brasileiro de coelhos, com um efetivo de 83 796 rebanhos, superando Santa Catarina.\n[…]\nO conjunto ferroviário passa ao redor do eixo central constituído pela linha. Esta sai de Porto Alegre, se desloca em direção ao oeste por intermédio da depressão central. Vai atingir o limite com a Argentina, em Uruguaiana. Desse ramo longitudinal se deslocam vários ramos. De grande relevância para o estado, constituem as ferrovias que o conectam com o restante do país. Uma delas sai de Santa Maria, no tronco longitudinal, anda para o norte e corta os estados de Santa Catarina e Paraná.\n[…]\nNo Exército Brasileiro, o Rio Grande do Sul faz parte, junto aos estados do Paraná e Santa Catarina, do Comando Militar do Sul, tendo sede no estado a 3.ª Divisão de Exército, com sede em Santa Maria, e a 6.ª Divisão de Exército, com sede em Porto Alegre e merecendo destaque as seguintes unidades: 8.ª Brigada de Infantaria Motorizada (Pelotas), 6.ª Brigada de Infantaria Blindada (Santa Maria), 1.ª Brigada de Cavalaria Mecanizada (Santiago), 2.ª Brigada de Cavalaria Mecanizada (Uruguaiana), 3.ª Brigada de Cavalaria Mecanizada (Bagé).\n[…]\nSímbolos oficiais do Rio Grande do Sul"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Rio_Grande_do_Sul",
        "situacao": "ok",
        "texto": "Rio Grande do Sul (UK: , US: , Brazilian Portuguese: [ˈʁi.u ˈɡɾɐ̃dʒ(i) du ˈsuw] ; lit. 'Great River of the South') is a state in the southern region of Brazil. It is the fifth-most populous state and the ninth-largest by area and it is divided into 497 municipalities.\n[…]\nLocated in the southernmost part of the country, Rio Grande do Sul is bordered clockwise by Santa Catarina to the north and northeast, the Atlantic Ocean to the east, the Uruguayan departments of Rocha, Treinta y Tres, Cerro Largo, Rivera, and Artigas to the south and southwest, and the Argentine provinces of Corrientes and Misiones to the west and northwest. The capital and largest city is Porto Alegre.\n[…]\nRio Grande do Sul is bordered to the northeast by the Brazilian State of Santa Catarina, to the southeast by the Atlantic Ocean, on the southwest by Uruguay, and to the northwest by the Argentine provinces of Corrientes and Misiones.\n[…]\nIn those large latifundia, cattle raising was the predominant economic activity. The Guaranis, under Jesuit rule, had started raising cattle in the Missões. The destruction of the Missões left astray immense herds, which went feral. Thus the newcomers from São Paulo and Santa Catarina settled by re-domesticating these feral herds, called \"gado xucro\".\n[…]\nAs it's a coal of inferior quality, it's used only in the generation of thermoelectric energy and at the site of the deposit. The oil crisis in the 1970s led the Brazilian government to create the Energy Mobilization Plan, with intense research to discover new coal reserves. The Geological Survey of Brazil, through works carried out in Rio Grande do Sul and Santa Catarina, greatly increased the reserves of coal previously known, between 1970 and 1986 (mainly between 1978 and 1983)."
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Lençóis Maranhenses",
      "descricao": "Parque nacional no litoral do Maranhão, com grandes dunas brancas e lagoas de água doce entre elas."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Entre as dunas brancas dos Lençóis Maranhenses surgem centenas de lagoas azuis e verdes durante parte do ano. De onde vem a água delas?",
    "resposta": "Da chuva",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Parque_Nacional_dos_Lençóis_Maranhenses",
      "https://en.wikipedia.org/wiki/Lençóis_Maranhenses_National_Park"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Parque_Nacional_dos_Lençóis_Maranhenses",
        "situacao": "ok",
        "texto": "O Parque Nacional dos Lençóis Maranhenses é uma unidade de conservação brasileira de proteção integral à natureza localizada na região nordeste do estado do Maranhão. O território do parque, com uma área de 156 584 ha, está distribuído pelos municípios de Barreirinhas, Primeira Cruz e Santo Amaro do Maranhão. O parque foi criado com a finalidade precípua de \"proteger a flora, a fauna e as belezas \n[…]\nO parque localiza-se na Microrregião dos Lençóis Maranhenses, ao norte do Brasil, no litoral nordeste do estado do Maranhão. Com um perímetro de 270 km e 156 584 ha de área, o parque está inserido no bioma costeiro marinho, com ecossistemas de mangue, restinga e dunas. Lençóis Maranhenses abriga em seu interior aproximadamente 90 000 ha de dunas livres e lagoas interdunares de água doce, além de grandes áreas de restinga e de costa oceânica.\n[…]\nAs lagoas do parque estão muitas vezes interligadas umas às outras, assim como os rios que correm pela área. Eles abrigam uma série de espécies de peixes e insetos, incluindo o traíra, que se esconde em camadas molhadas de lama e permanece adormecido durante a estação seca. Além das dunas que formam a peça central do parque, o ecossistema também inclui área de cerrado, restinga e manguezal.\n[…]\nNa área do Parque Nacional e na APA dos Pequenos Lençóis Maranhenses abriga espécie endêmica a tartaruga-pininga (Trachemys adiutrix).\n[…]\nO Parque Nacional dos Lençóis Maranhenses recebe mais de cem mil visitantes por ano, tendo alcançado o número de 280 878 visitas em 2021, e cerca de 408 mil turistas em 2023, segundo o Instituto Chico Mendes de Conservação da Biodiversidade (ICMBio). Atividades comuns dentro do parque incluem surfe, canoagem e passeios a cavalo.\n[…]\nParques nacionais do Brasil\n[…]\nParque dos Lençóis, Secretaria de Turismo do Maranhão.\n[…]\nParque Nacional dos Lençóis Maranhenses na UNESCO"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Lençóis_Maranhenses_National_Park",
        "situacao": "ok",
        "texto": "Lençóis Maranhenses National Park (, Parque Nacional dos Lençóis Maranhenses) is a national park in Maranhão state in northeastern Brazil, just east of the Baía de São José. Protected on June 2, 1981, the 155,000 ha (380,000-acre) park includes 70 km (43 mi) of coastline, and an interior composed of rolling sand dunes. During the rainy season, the valleys among the dunes fill with freshwater lagoo\n[…]\nThe park is located on the northeastern coast of Brazil in the state of Maranhão along the eastern coast, bordered by 70 kilometres (43 mi) of beaches along the Atlantic Ocean. Inland, it is bordered by the Parnaíba River, the São José Basin, and the rivers of Itapecuru, Munim, and Periá. The park encompasses an area of 155,000 hectares (380,000 acres), composed mainly of expansive coastal dune fields (composed of barchanoid dunes), which formed during the late Quaternary period.\n[…]\nLençóis Maranhenses National Park receives as many as 60,000 visitors a year. Common activities within the park include surfing, canoeing and horse riding.\n[…]\nFormer Lençóis Maranhenses National Park's Official site"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Jalapão",
      "descricao": "Região de cerrado no leste do Tocantins, conhecida por dunas, cachoeiras e fervedouros."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Nos fervedouros do Jalapão, quem entra na água fica boiando e não consegue afundar. O que provoca esse efeito?",
    "resposta": "A pressão da água que brota do fundo",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Jalapão",
      "https://pt.wikipedia.org/wiki/Parque_Estadual_do_Jalapão"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Jalapão",
        "situacao": "ok",
        "texto": "O parque estadual do Jalapão é uma unidade de conservação brasileira de proteção integral à natureza localizada na região leste do estado do Tocantins. O território do parque, com uma área de 158 970,95 ha, está distribuído pelos municípios de Mateiros e\n[…]\nSua posição estratégica possui continuidade com a área de proteção ambiental do Jalapão, a estação ecológica Serra Geral do Tocantins e o parque nacional das Nascentes do Rio Parnaíba.\n[…]\nO Jalapão é uma região árida pontilhada de oásis. Está situada a leste do estado do Tocantins. Possui temperatura média de 30 graus Celsius. Sua área total é de 34 mil quilômetros quadrados. É cortado por imensa teia de rios, riachos e ribeirões, todos de água límpida e transparente.\n[…]\nÉ possível passar dias no Jalapão sem ver uma única pessoa. A densidade populacional é de 0,8 habitante por quilômetro quadrado.\n[…]\nEm complemento à grande teia aquática, já vários pontos turísticos e curiosidades, como os \"fervedouros\", que são minas de água que jorram água com força suficiente para que uma pessoa não afunde em seu interior. Outro ponto turístico bastante interessante da região são as Dunas. Um ponto bastante visitado e que várias pessoas o procuram para admirar o pôr do sol. Atualmente a região possui boa estrutura para turistas nas cidades, sobretudo em Mateiros e Ponte Alta do Tocantins.\n[…]\nSão nascentes de rios subterrâneos que não encontram local de vazão e brotam em poços. Os fervedouros são as maiores atrações do Jalapão já que que por causa da pressão da água, os banhistas não afundam. Há algumas regras para as visitações, como o número limitado de visitantes por vez, para evitar a degradação do ambiente.\n[…]\nMedia relacionados com Parque Estadual do Jalapão no Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Parque_Estadual_do_Jalapão",
        "situacao": "ok",
        "texto": "O parque estadual do Jalapão é uma unidade de conservação brasileira de proteção integral à natureza localizada na região leste do estado do Tocantins. O território do parque, com uma área de 158 970,95 ha, está distribuído pelos municípios de Mateiros e\n[…]\nSua posição estratégica possui continuidade com a área de proteção ambiental do Jalapão, a estação ecológica Serra Geral do Tocantins e o parque nacional das Nascentes do Rio Parnaíba.\n[…]\nO Jalapão é uma região árida pontilhada de oásis. Está situada a leste do estado do Tocantins. Possui temperatura média de 30 graus Celsius. Sua área total é de 34 mil quilômetros quadrados. É cortado por imensa teia de rios, riachos e ribeirões, todos de água límpida e transparente.\n[…]\nÉ possível passar dias no Jalapão sem ver uma única pessoa. A densidade populacional é de 0,8 habitante por quilômetro quadrado.\n[…]\nEm complemento à grande teia aquática, já vários pontos turísticos e curiosidades, como os \"fervedouros\", que são minas de água que jorram água com força suficiente para que uma pessoa não afunde em seu interior. Outro ponto turístico bastante interessante da região são as Dunas. Um ponto bastante visitado e que várias pessoas o procuram para admirar o pôr do sol. Atualmente a região possui boa estrutura para turistas nas cidades, sobretudo em Mateiros e Ponte Alta do Tocantins.\n[…]\nSão nascentes de rios subterrâneos que não encontram local de vazão e brotam em poços. Os fervedouros são as maiores atrações do Jalapão já que que por causa da pressão da água, os banhistas não afundam. Há algumas regras para as visitações, como o número limitado de visitantes por vez, para evitar a degradação do ambiente.\n[…]\nMedia relacionados com Parque Estadual do Jalapão no Wikimedia Commons"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Floresta da Tijuca",
      "descricao": "Floresta urbana replantada no século dezenove no maciço da Tijuca, no Rio de Janeiro, hoje parte do Parque Nacional da Tijuca."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "No século dezenove, Dom Pedro Segundo mandou replantar a Floresta da Tijuca, devastada pelas fazendas de café. Que problema da cidade ele queria resolver?",
    "resposta": "A falta de água",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Floresta_da_Tijuca",
      "https://en.wikipedia.org/wiki/Tijuca_Forest"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Floresta_da_Tijuca",
        "situacao": "ok",
        "texto": "Parque Nacional da Tijuca é uma unidade de conservação brasileira de proteção integral da natureza localizada integralmente na cidade do Rio de Janeiro.\n[…]\nA área é composta por vegetação secundária, uma vez que é fruto de um reflorestamento promovido à época do Segundo Reinado, quando se tornou patente que o desmatamento causado pelas fazendas de café estava prejudicando o abastecimento de água potável da então capital do Império. Vivem, no parque, mais de 230 espécies de animais e aves: entre eles, macaco-prego, quati, cutia, cachorro-do-mato, sagui, beija-flor e sabiá.\n[…]\nNo início do século XIX, após longo período de devastação para uso da madeira e lavouras de cana-de-açúcar e café, a cidade começou a sofrer com a falta de água potável, pois, sem a proteção da vegetação, os mananciais começaram a secar. Por isso, a partir de 1862, Dom Pedro II ordenou o reflorestamento do local. A missão foi confiada ao major da polícia militar Archer, que iniciou o trabalho com seis escravos.\n[…]\nMagnanini foi uma das principais forças por trás da realização do sonho de Castro Maya de transformar a Floresta da Tijuca em Parque Nacional.\n[…]\nCom isso a cidade começou a sofrer com a falta de água potável, pois, sem a proteção da vegetação, os mananciais começaram a secar. A partir de 1862, por ordem do imperador dom Pedro II, a área começou a ser reflorestada com mudas de árvores nativas. Juntamente com a regeneração natural, a área foi recuperada, formando a floresta que vemos hoje, com uma rica e diversificada flora e tornando-se uma das maiores florestas artificiais urbanas do mundo.\n[…]\nParque Nacional do Itatiaia\n[…]\nParque Nacional da Tijuca no Facebook"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Tijuca_Forest",
        "situacao": "ok",
        "texto": "The Tijuca National Park (Portuguese: Parque Nacional da Tijuca) is an urban national park in the mountains of the city of Rio de Janeiro, Brazil. The park is part of the Atlantic Forest Biosphere Preserve, and is administered by the Chico Mendes Institute for Biodiversity Conservation (ICMBio).\n[…]\nEmperor Pedro II of Brazil established federal control over the area in 1861, and efforts began to restore the former forest on the bare slopes and abandoned fields. The re-planting of trees was carried out by 6 enslaved persons. Their names were Eleutério, Constantino, Manuel, Mateus, Leopoldo, and Maria. These people were enslaved by the Portuguese government and under the supervision of the Tijuca Forest manager Major Manuel Gomes Archer.\n[…]\nOne favela exists in the Tijuca Forest, called Mata Machado. Its inhabitants are mainly the descendants of those who migrated to the region in the 1930s to take part in the replanting effort. Though conditions have improved recently under the Favela-Bairro Project, it still contributes to environmental degradation in the forest.\n[…]\nThere are numerous hiking trails. Common destinations are: Diamantina's waterfall, Parrot's Beak (Bico do Papagaio), Tijuca's Peak (Pico da Tijuca), Cave Circuit (Circuito das Grutas), Archer's Hill (Morro do Archer), Anhanguera's Hill (Morro da Anhanguera), the Excelsior Lookout (Mirante do Excelsior) and the Bat's Cave (Caverna dos Morcegos).\n[…]\nList of mammals of Tijuca National Park\n[…]\nOfficial site of Tijuca National Park at ICMBio (in Portuguese)\n[…]\nTijuca National Park, Rio de Janeiro - by the Royal Geographical Society's Hidden Journeys project"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Região Sudeste do Brasil",
      "descricao": "Uma das cinco grandes regiões do Brasil definidas pelo IBGE, formada por São Paulo, Rio de Janeiro, Minas Gerais e Espírito Santo."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Dos quatro estados que formam a Região Sudeste, três têm praias. Qual é o único sem litoral?",
    "resposta": "Minas Gerais",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Região_Sudeste_do_Brasil",
      "https://en.wikipedia.org/wiki/Southeast_Region,_Brazil"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Região_Sudeste_do_Brasil",
        "situacao": "ok",
        "texto": "Região Sudeste do Brasil é uma das cinco regiões brasileiras definidas pelo Instituto Brasileiro de Geografia e Estatística (IBGE). Região mais desenvolvida e populosa do Brasil, sua superfície terrestre compreende uma área de 924 620,678 km², sendo a segunda menor em extensão territorial. Boa parte de seu território está subordinada à Região geoeconômica Centro-Sul do Brasil, ao passo que o norte\n[…]\nNa porção sudeste de Minas Gerais, situam-se a Serra da Canastra, já nas delimitações do planalto Meridional.\n[…]\nA Região Sudeste do Brasil, composta pelos estados de São Paulo, Minas Gerais, Rio de Janeiro e Espírito Santo, é uma das mais politicamente influentes do país, desempenhando um papel fundamental tanto no cenário nacional quanto local. Cada um dos estados dessa região possui sua própria estrutura de governo, com a divisão dos três poderes: executivo, legislativo e judiciário, além de exercer uma forte influência no eleitorado nacional.\n[…]\nA Região Sudeste do Brasil, composta pelos estados de São Paulo, Rio de Janeiro, Minas Gerais e Espírito Santo, possui uma estrutura de segurança pública composta por diversas instituições militares e forças policiais. Cada estado mantém suas próprias corporações, como a Polícia Militar e a Polícia Civil, responsáveis pelo policiamento ostensivo e pela investigação de crimes, respectivamente. Essas instituições operam de forma coordenada para garantir a ordem pública e a segurança da população.\n[…]\nA fabricação de arreios e caçambas (estribos simples de lenha em formato de chinelo) é característica da região sudeste do Brasil, onde ainda são abundantes as panelas e utensílios de decoração de pedra sabão, principalmente em Minas Gerais. Tapetes, colchas e cortinas produzidas em teares toscos e, na região mineira do rio São Francisco, rendas de bilro, redes e chapéus de palha, mormente do buriti, formam o artesanato da região.\n[…]\nMinas Gerais"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Southeast_Region,_Brazil",
        "situacao": "ok",
        "texto": "The Southeast Region of Brazil (Portuguese: Região Sudeste do Brasil, pronounced [ʁeʒiˈɐ̃w suˈdɛstʃi du bɾaˈziw]) is composed of the states of Espírito Santo, Minas Gerais, Rio de Janeiro, and São Paulo. It is the richest region of the country, responsible for approximately 53% of the Brazilian GDP (2022), as São Paulo, Rio de Janeiro, and Minas Gerais are the three richest states of Brazil, the t\n[…]\nThese companies employed more than 1,600,000 workers, making the food and beverage industry the largest employer in manufacturing. There are around 570 large companies in Brazil, which account for a good part of the industry's total income. São Paulo created companies such as: Yoki, Vigor, Minerva Foods, Bauducco, Santa Helena, Marilan, Ceratti, Fugini, Chocolates Pan, Embaré, among others. Minas Gerais created food companies of national importance such as Itambé and Pif Paf Alimentos.\n[…]\n52% of children's shoes in the country are produced in this city. From Birigui came most of the most famous children's shoe factories in the country. Jaú has 150 factories that produce around 130 thousand pairs of cheap women's shoes per day. The footwear sector in Franca has around 550 companies and employs about 20,000 employees. Most of the most famous men's shoe factories in the country come from São Paulo. Minas Gerais has a pole specialized in cheap shoes and shoes in Nova Serrana.\n[…]\nThe gross value of production, which includes the consumption of intermediate goods and services, of the Brazilian textile industry corresponded to almost R $40 billion in 2015, 1.6% of the gross value of industrial production in Brazil. São Paulo (37.4%) is the largest producer. The main productive areas of São Paulo are the Metropolitan Region of São Paulo and Campinas. Minas Gerais has 8.51% (third largest production in the country).\n[…]\nUniversidade Federal de Minas Gerais (UFMG);"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Brasília",
      "descricao": "Capital federal do Brasil, cidade planejada inaugurada em 1960."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Em 1960, Juscelino Kubitschek inaugurou Brasília na mesma data em que se lembra a morte de Tiradentes. Que dia era esse?",
    "resposta": "21 de abril",
    "distratores": [
      "7 de setembro",
      "15 de novembro",
      "12 de outubro"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Brasília",
      "https://en.wikipedia.org/wiki/Brasília"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Brasília",
        "situacao": "ok",
        "texto": "Brasília (AFI: [bɾaˈzilja] ou AFI: [bɾaˈziʎa]) é a capital federal do Brasil e a sede de governo do Distrito Federal. A capital está localizada na região Centro-Oeste do país, ao longo da região geográfica conhecida como Planalto Central. Segundo o Censo do Instituto Brasileiro de Geografia e Estatística (IBGE)/2022, sua população é de 2 817 381 habitantes, sendo, então, a terceira cidade mais pop\n[…]\nInaugurada em 21 de abril de 1960, pelo então presidente Juscelino Kubitschek, Brasília tornou-se formalmente a terceira capital do Brasil, após Salvador e Rio de Janeiro. Vista de cima, a principal área da cidade é descrita frequentemente como tendo o formato de um avião, mas a proposta inicial de Lúcio Costa era de que se assemelhasse ao sinal da cruz, e um dos eixos foi depois arqueado para se adaptar ao relevo da região.\n[…]\nPara fazer a transferência simbólica da capital do Rio para Brasília, Juscelino fechou solenemente os portões do Palácio do Catete, então transformado em Museu da República, às 9 da manhã do dia 21 de abril de 1960, ao que a multidão reagiu com aplausos. A cidade de Brasília foi inaugurada no mesmo dia e mês em que ocorreu a execução de Joaquim José da Silva Xavier, líder da Inconfidência Mineira, e a fundação de Roma.\n[…]\nOutros acumulados iguais ou superiores a 100 mm foram: 131 mm em 21 de abril de 1992, 111,8 mm em 31 de março de 1964, 110,7 mm em 28 de fevereiro de 2005, 106,8 mm em 22 de dezembro de 1963, 103,1 mm em 27 de outubro de 2006 e 102,1 mm em 29 de outubro de 2000. Em janeiro de 1979 foram registrados 602,4 mm de precipitação, o maior acumulado mensal desde então. Por outro lado, o recorde de dias sem chuva ocorreu em 2024, com 167 dias consecutivos, sendo o recorde anterior de 1963, com 163 dias.\n[…]\nHistória do Brasil\n[…]\nNaturais de Brasília\n[…]\n«Administração Regional de Brasília»\n[…]\nBrasília no WikiMapia"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Brasília",
        "situacao": "ok",
        "texto": "Brasília ( brə-ZIL-ee-ə; Brazilian Portuguese: [bɾaˈziliɐ, bɾaˈziljɐ] ) is the capital city of Brazil and the Federal District. Located in the Brazilian Highlands in the country's Central-West region, it was founded by President Juscelino Kubitschek on 21 April 1960, to replace Rio de Janeiro as the national capital. Brasília is Brazil's third-most populous city after São Paulo and Rio de Janeiro,\n[…]\nOscar Niemeyer was the chief architect of most public buildings, Joaquim Cardozo was the structural engineer, and Roberto Burle Marx was the landscape designer. Brasília was built in 41 months, and was officially inaugurated in 21 April 1960.\n[…]\nBrasília has a tropical savanna climate (Aw, according to the Köppen climate classification), milder due to the elevation and with two distinct seasons: the rainy season, from October to April, and the dry season, from May to September. The average temperature is 21.4 °C (70.5 °F). September, at the end of the dry season, has the highest average temperature, 29.1 °C (84.4 °F), while July has the lowest average temperature at 13.9 °C (57.0 °F).\n[…]\nThe investments increased the airport's capacity from approximately 15 million passengers per year to 21 million by 2014. Brasília Air Force Base - ALA1, one of their most important bases of the Brazilian Air Force, is located in Brasília.\n[…]\nThe Juscelino Kubitschek bridge, also known as the 'President JK Bridge' or the 'JK Bridge', crosses Lake Paranoá in Brasília. It is named after Juscelino Kubitschek, former president of Brazil. It was designed by architect Alexandre Chan and structural engineer Mário Vila Verde.\n[…]\nThe main stadiums are Estadio Nacional Mané Garrincha (re-inaugurated on 18 May 2013), the Serejão Stadium (home for Brasiliense) and the Bezerrão Stadium (home for Gama).\n[…]\nGeographic data related to Brasília at OpenStreetMap\n[…]\nExplore Brasília in the UNESCO collection on Google Arts & Culture"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "São Paulo",
      "descricao": "Capital do estado de São Paulo, cidade fundada em 1554 a partir de um colégio jesuíta."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Ao lado de Manuel da Nóbrega, que padre jesuíta, declarado santo em 2014, participou da fundação de São Paulo, em 1554?",
    "resposta": "José de Anchieta",
    "fonte": [
      "https://pt.wikipedia.org/wiki/José_de_Anchieta",
      "https://pt.wikipedia.org/wiki/São_Paulo"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/José_de_Anchieta",
        "situacao": "ok",
        "texto": "José de Anchieta SJ (San Cristóbal de La Laguna, 19 de março de 1534 – Reritiba, 9 de junho de 1597) foi um padre jesuíta espanhol que ingressou na Companhia de Jesus no Reino de Portugal, ficando ao seu serviço, e um dos fundadores das cidades brasileiras de São Paulo e do Rio de Janeiro.\n[…]\nEm 2014 José de Anchieta é declarado padroeiro dos catequistas.\n[…]\nTendo o padre Manuel da Nóbrega, Provincial dos Jesuítas no Brasil, solicitado mais braços para a atividade de evangelização do Brasil (mesmo os fracos de engenho e os doentes do corpo), o Provincial da Ordem, Simão Rodrigues, indicou, entre outros, José de Anchieta. Desde jovem, Anchieta padecia de tuberculose óssea, que lhe causou uma escoliose, agravada durante o noviciado na Companhia de Jesus. Este fato foi determinante para que deixasse os estudos religiosos e viajasse para o Brasil.\n[…]\nAnchieta foi enterrado em frente ao altar principal da Igreja de São Tiago, em Vitória, ao lado de outro padre jesuíta, Gregório Serrão. Os ossos de Anchieta foram removidos para o Colégio dos Jesuítas da Bahia, em Salvador, em 1610, e depois para Roma. Os jesuítas enviaram uma relíquia de José de Anchieta, um pedaço de seu fêmur, e uma lápide foi encomendada em Portugal no final do século XVI.\n[…]\nNo dia 3 de abril de 2014, o Papa Francisco assinou o decreto que proclamou a santidade do beato José de Anchieta. Três semanas depois, em 24 de abril, o papa celebrou uma missa em ação de graças pela canonização de Anchieta, realizada na Igreja de Santo Inácio de Loyola, em Roma. Na homilia, o papa disse que \"ele [José de Anchieta], juntamente com Nóbrega [padre Manuel da Nóbrega], é o primeiro jesuíta que Inácio [santo Inácio de Loyola] envia para a América. Um jovem de 19 anos...\n[…]\nMonumento ao Padre José de Anchieta em Tenerife"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/São_Paulo",
        "situacao": "ok",
        "texto": "São Paulo é a capital do estado brasileiro de São Paulo. Classificada pela Globalization and World Cities Research Network (GaWC) como uma cidade global alfa, é a área urbana mais populosa do mundo fora da Ásia e exerce significativa influência internacional no comércio, finanças, cultura, gastronomia, artes, moda, tecnologia, entretenimento e mídia, o que lhe garantiu a integração à Rede de Cidad\n[…]\nA povoação de São Paulo dos Campos de Piratininga (topônimo indígena que significa \"peixe seco\" ou \"peixe a secar\", após a cheia do rio), por sua vez, surgiu em 25 de janeiro de 1554 com a construção de um colégio jesuíta (atual Pátio do Colégio) por doze padres, entre eles Manuel da Nóbrega e José de Anchieta, no alto de uma colina escarpada, entre os rios Anhangabaú e Tamanduateí.\n[…]\nO nome São Paulo foi escolhido porque o dia da fundação do colégio foi 25 de janeiro, mesmo dia no qual a Igreja Católica celebra a conversão do apóstolo Paulo de Tarso, conforme disse o padre José de Anchieta em carta à Companhia de Jesus: \"A 25 de Janeiro do Ano do Senhor de 1554 celebramos, em paupérrima e estreitíssima casinha, a primeira missa, no dia da conversão do Apóstolo São Paulo e, por isso, a ele dedicamos nossa casa!\".\n[…]\nDe 1993 a 1997, o ex-prefeito Paulo Maluf administrou a cidade pela segunda vez, sendo sucedido por Celso Pitta (1997-2000), Marta Suplicy (2001-2004), José Serra (2005-2006) e seu vice Gilberto Kassab (2006-2012), Fernando Haddad (2013-2016), João Doria (2017-2018), Bruno Covas (2019-2021) e Ricardo Nunes (2021-presente).\n[…]\nA literatura na cidade de São Paulo começa com a chegada dos missionários da Companhia de Jesus, cujos membros são conhecidos como jesuítas, no início do século XVI. Os padres jesuítas Manuel da Nóbrega e José de Anchieta são considerados os fundadores da capital paulista."
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Boa Vista",
      "descricao": "Capital do estado de Roraima, às margens do rio Branco, inteiramente no Hemisfério Norte."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "O centro de Boa Vista, capital de Roraima, foi planejado com avenidas que se abrem a partir de uma praça. Que objeto esse traçado lembra?",
    "resposta": "Leque",
    "distratores": [
      "Tabuleiro de xadrez",
      "Avião",
      "Ferradura"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Boa_Vista_(Roraima)",
      "https://en.wikipedia.org/wiki/Boa_Vista,_Roraima"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Boa_Vista_(Roraima)",
        "situacao": "ok",
        "texto": "Boa Vista (também chamada Princesa do Norte e Capital da Primeira Infância) é um município brasileiro e capital do estado de Roraima, Região Norte do país. Concentrando cerca de dois terços dos habitantes do estado, situa-se na margem direita do rio Branco. Sua população, de acordo com o Censo 2022 do Instituto Brasileiro de Geografia e Estatística (IBGE), era de 413 486 habitantes, e a estimativa\n[…]\nÀ vila original, com algumas dezenas de quadras irregulares em três vias paralelas ao rio, sobrepôs-se um traçado parcialmente radioconcêntrico, que combina doze vias irradiadas a partir de uma grande praça e cinco avenidas envoltórias com ruas em padrão de xadrez; previu-se ainda um cinturão verde para conter o crescimento da cidade e acomodar equipamentos como o aeroporto, o hipódromo e o estádio.\n[…]\nA implantação seguiu as boas práticas sanitárias da época, começando pelas redes de esgoto e de águas pluviais e só depois pela abertura das avenidas radiais; o plano previa a ocupação total em 25 anos. Na década de 1950, já havia cinco bairros — Porto da Olaria, Rói-couro, Caxangá, Praça da Bandeira e Centro — e 17 mil habitantes, e o traçado original só foi rompido nos anos 1980, com o crescimento demográfico.\n[…]\nA Universidade Federal de Roraima (UFRR), com sede em Boa Vista, teve sua criação autorizada pela lei federal n.º 7.364, de 12 de setembro de 1985, e o Instituto Federal de Roraima (IFRR), com reitoria na capital, foi criado pela lei n.º 11.892, de 29 de dezembro de 2008, por transformação do Centro Federal de Educação Tecnológica de Roraima.\n[…]\nEm 2025, Boa Vista recebeu o título de Capital Nacional da Paçoca de Carne com Farinha. Prato tradicional no estado, a iguaria é preparada com farinha amarela e faz parte da cultura e da alimentação dos roraimenses.\n[…]\nRoraimenses de Boa Vista\n[…]\nRegião Metropolitana de Boa Vista\n[…]\n«Boa Vista no IBGE Cidades»"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Boa_Vista,_Roraima",
        "situacao": "ok",
        "texto": "Boa Vista (Brazilian Portuguese: [ˈbo(w)ɐ ˈvistɐ], literally Good View; figuratively \"Fairview\") is the capital of the Brazilian state of Roraima. Situated on the western bank of the Branco River, the city lies 109 km from Brazil's border with Venezuela, and 58 km away from the border with Guyana. It is the only Brazilian state capital located entirely north of the equator.\n[…]\nAs a modern city, Boa Vista stands out among the other capitals of the North Region of Brazil as it is a planned city with a radial plan. It was planned by the architect Darci Aleixo Derenusson who based his design for the city on one that is similar to that of Paris, France. The city was built under the direction of Captain Ene Garcez, the first governor of Roraima.\n[…]\nThe municipality of Boa Vista formed the first urban area of the state of Roraima. The São Joaquim do Rio Branco Fort, founded in 1775, is located on the banks of the Uraricoera River about 32 km from the capital and is considered to be of great importance to the region.\n[…]\nIn 1943, during the middle of World War II, Boa Vista became the capital of the recently created Federal Territory of Rio Branco. The territory grew from mining operations in the area. The then Federal Territory of Rio Branco was elevated to statehood, later being renamed as \"Roraima\". Later, machine-based mining was prohibited (because of the resulting damage to the landscape), which ended up hindering the economy of the state and the municipality.\n[…]\nBoa Vista had significant relative growth in the 1970s and 1980s, especially due to its placement as the state of Roraima's capital, with the urban population of the city growing exponentially from 1970 to 1980 relative to the outer rings of countryside, with it more than quadrupling since 1980.\n[…]\nAtlético Roraima Clube\n[…]\nGuyana has a Consulate in Boa Vista.\n[…]\nSite of Boa Vista's City Hall (in Portuguese)"
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
