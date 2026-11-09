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
      "nome": "Curupira",
      "descricao": "Protetor das matas do folclore brasileiro, com cabelos vermelhos e os pés virados para trás."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "O registro escrito mais antigo do Curupira está numa carta do padre José de Anchieta. Em que século essa carta foi escrita?",
    "resposta": "Século dezesseis",
    "distratores": [
      "Século quinze",
      "Século dezessete",
      "Século dezoito"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Curupira"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Curupira",
        "situacao": "ok",
        "texto": "Curupira é uma entidade da mitologia tupi e do folclore brasileiro, conhecido como o protetor e guardião das florestas e dos animais e por ter os pés voltados para trás.\n[…]\n\"Curupira\" procede do tupi Kurupira, \"o coberto de pústulas\".\n[…]\nO Curupira é um dos mitos mais antigos conhecidos do Brasil. É caracterizado como uma entidade das matas e, de acordo com as lendas, tem cabelo cor-de-fogo ou pode ser feito de fogo. Assemelha-se a um homem, um menino ou um anão, mas seus pés estão virados para trás para confundir os caçadores sem escrúpulos, deixando rastros enganosos. Também é famoso por ser o protetor das florestas e por castigar aqueles que fazem mal a elas.\n[…]\nFoi considerado uma classe de demônios pelo padre jesuíta espanhol José de Anchieta no século XVI e elencado junto a outras entidades nativas (como Taguaigba, Macachera, Anhanga e Jurupari) como sendo o próprio Demônio pelos padres jesuítas portugueses Antônio de Araújo e Fernão Cardim no século XVII.\n[…]\nA mais antiga menção de seu nome foi do padre jesuíta espanhol José de Anchieta em São Vicente, a 30 de maio de 1560: \"É coisa sabida e pela boca de todos corre que há certos demônios e que os brasis chamam corupira, que acometem aos índios muitas vezes no mato, dão-lhe de açoites, machucam-nos e matam-nos. São testemunhas disto os nossos irmãos, que viram algumas vezes os mortos por eles.\n[…]\nCoração e figado são as iguarias que mais aprecia; segundo uns, com essas vísceras faz farinha, segundo outros, óleo com que se unta. É inimigo de crianças. Dizem que se pode chamar o Curupira, mas para isso é preciso ser um pajé, que se veste com estopa da casca da castanheira.\n[…]\nCurupi"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Saci",
      "descricao": "Personagem do folclore brasileiro, menino negro de uma perna só que usa um gorro vermelho e faz travessuras."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Além do menino de uma perna só, o nome saci também batiza um bicho brasileiro de canto difícil de localizar. Que tipo de bicho é esse?",
    "resposta": "Um pássaro",
    "distratores": [
      "Um sapo",
      "Um macaco",
      "Um grilo"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Saci_(ave)",
      "https://en.wikipedia.org/wiki/Striped_cuckoo"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Saci_(ave)",
        "situacao": "ok",
        "texto": "Tapera naevia, conhecido popularmente como saci, martim-pererê, martimpererê, matinta-pereira, matintaperera, matitaperê, peixe-frito, peito-ferido, peitica, piriguá, roceiro-planta, seco-fico, sem-fim, sede-sede, tempo-quente, crispim, fenfém, saitica e piririguá, é uma ave cuculiforme, cuculídea, típica do Brasil. Se divide em duas subespécies: a do sul e a do norte e leste do país.\n[…]\n\"Saci\" é oriundo do tupi sa'si. \"Martim-pererê\", \"martimpererê\", \"matinta-pereira\", \"matintaperera\" e \"matitaperê\" são oriundos do termo tupi matintape're. \"Peitica\" é oriundo do tupi pei'tika.\n[…]\nO topete é avermelhado e manchado em tons claros e escuros; o peito, abdome e sobre os olhos a cor é branca. É uma ave insetívora e sua postura costuma ocorrer em ninhos alheios, da espécie do joão-teneném. Possui duas subespécies, sendo uma delas ocorrente no Norte e Leste do Brasil; outra ocorre no Sul.\n[…]\nA ave está presente por todo o Brasil, e está presente no México, Argentina e Bolívia.\n[…]\nTapera naevia naevia (Linnaeus, 1766) - ocorre no Brasil, na Argentina, na Venezuela (Ilha Margarita) e na ilha de Trinidad;\n[…]\n\"Matinta-pereira\" é citado em um verso da canção Águas de Março, de Antônio Carlos Jobim, onde também há um reprodução de seu assobio no instrumental da música. O pássaro também dá nome ao álbum Matita Peré, do mesmo compositor.==Referências=="
      },
      {
        "url": "https://en.wikipedia.org/wiki/Striped_cuckoo",
        "situacao": "ok",
        "texto": "The striped cuckoo (Tapera naevia) is a bird, the only member of the genus Tapera. This resident cuckoo is found from Mexico and Trinidad south to Bolivia and Argentina and Colombia.\n[…]\nThis bird is very important in Brazilian folklore, being related to the legend of the saci, or matita-perê. Other than saci, the bird is also known as matinta-pereira, pitica (Pará), crispim, fenfém, martim-pererê, matimpererê, matintapereira, matintaperera, matitaperê, peitica, peito-ferido, roceiro-planta, seco-fico, sede-sede, saci-do-campo, sem-fim, fém-fém, tempo-quente, bulhões, bolinhas, feijão, feijoada, jotalhão, gansolino, peixe-frito (Bahia), e peixe-frito-seu-veríssimo."
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Lenda do boto",
      "descricao": "Lenda amazônica do boto-cor-de-rosa que vira um rapaz elegante para seduzir moças nas festas."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Na Amazônia, que situação da vida real a lenda do boto sedutor costuma servir para explicar?",
    "resposta": "Filho de pai desconhecido",
    "distratores": [
      "Sumiço de pescadores",
      "Enchentes dos rios",
      "Desaparecimento de crianças"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Boto_(folclore)",
      "https://en.wikipedia.org/wiki/Amazon_river_dolphin"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Boto_(folclore)",
        "situacao": "inexistente",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Amazon_river_dolphin",
        "situacao": "ok",
        "texto": "The Amazon river dolphin (Inia geoffrensis), also known as the boto, bufeo or pink river dolphin, is a species of toothed whale endemic to South America and is classified in the family Iniidae. Three subspecies are currently recognized: I. g. geoffrensis (Amazon river dolphin), I. g. boliviensis (Bolivian river dolphin) and I. g. humboldtiana (Orinoco river dolphin). The position of the Araguaian \n[…]\nboliviensis, in the southern part of the Amazon basin in Bolivia.\n[…]\nAccording to the pink Amazon river dolphin myth, it is said that this creature takes form of a human and seduces men and women to the Underworld of Encante. This underworld place is said to be 'Atlantis-like Paradise', yet no one has come back from it alive. Myths say that whoever kills the amazon dolphin will have bad luck, but it's worse for whoever eats it.\n[…]\nLocal legends also state that the dolphin is the guardian of the Amazonian manatee, and that if one should wish to find a manatee, one must first make peace with the dolphin.\n[…]\nAssociated with these legends is the use of various fetishes, such as dried eyeballs and genitalia. These may or may not be accompanied by the intervention of a shaman. A recent study has shown, despite the claim of the seller and the belief of the buyers, none of these fetishes is derived from the boto. They are derived from Sotalia guianensis, are most likely harvested along the coast and the Amazon River delta, and then are traded up the Amazon River.\n[…]\nRiver Dolphin Research Program Archived 12 November 2010 at the Wayback Machine—Research project devoted to the study of the ecology and conservation of river dolphins in the Amazon basin, based in the Federal University of Western Pará. The scope of this research project focuses on ecological studies, as well as the impact that human activities have on their survival.\n[…]\nConvention on Migratory Species page on the Amazon Dolphin"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Lenda do boto",
      "descricao": "Lenda amazônica do boto-cor-de-rosa que vira um rapaz elegante para seduzir moças nas festas."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Segundo a lenda, em que época de festas o boto costuma aparecer transformado em rapaz nos bailes das comunidades ribeirinhas?",
    "resposta": "Festas juninas",
    "distratores": [
      "Carnaval",
      "Natal",
      "Semana Santa"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Boto_(folclore)"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Boto_(folclore)",
        "situacao": "inexistente",
        "texto": ""
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Mula sem cabeça",
      "descricao": "Assombração do folclore brasileiro: uma mulher transformada em mula que solta fogo pelo pescoço."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Segundo a lenda, para quebrar o encanto da mula sem cabeça, o que alguém precisa arrancar dela?",
    "resposta": "O freio de ferro",
    "distratores": [
      "As ferraduras",
      "A crina",
      "O rabo"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Mula_sem_cabe%C3%A7a"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Mula_sem_cabe%C3%A7a",
        "situacao": "ok",
        "texto": "Mula sem cabeça é um personagem do folclore brasileiro. Segundo a crença popular, é uma assombração de uma mulher que foi amaldiçoada por ter tido relações amorosas com um padre. Como punição, ela foi condenada a transformar-se em uma mula sem cabeça, aterrorizando as pessoas.\n[…]\nCavaleiro sem cabeça\n[…]\nImagem da mula sem cabeça\n[…]\nA mula sem cabeça no programa de TV brasileiro Sítio do Picapau Amarelo\n[…]\n«Mythical Brazilian creatures,». Everything2.com (The Headless Mule, \"A Mula Sem-cabeça\", é um dos mitos brasileiros descritos)"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Cuca",
      "descricao": "Bruxa do folclore brasileiro que pega crianças desobedientes, popularizada pelo Sítio do Picapau Amarelo."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "A Cuca herdou o nome de uma figura das procissões portuguesas, uma espécie de dragão que assustava o povo. Como se chama essa figura?",
    "resposta": "Coca",
    "distratores": [
      "Moura Torta",
      "Papão",
      "Bruxa de Évora"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Cuca",
      "https://en.wikipedia.org/wiki/Coco_(folklore)"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Cuca",
        "situacao": "ok",
        "texto": "Cuca é um dos principais seres mitológicos do folclore brasileiro.\n[…]\nOutras versões, a cuca é uma entidade do mal que assume a forma de bruxa velha com aspecto de jacaré, que não se sabe ao certo sua idade mas que pode ter mais de 3 mil anos, como também existem versões em que pode se existir mais de uma cuca, como se fosse uma subclasse de bicho-papão, como é descrito no livro “O Saci” (1921), de Monteiro Lobato.\n[…]\nEm seu livro \"Geografia dos Mitos Brasileiros\", Luís da Câmara Cascudo (1898-1986) diz que a Cuca é um mito de origem portuguesa relacionado à Coca, figura que aparecia nas procissões da província do Minho, em Portugal. Também no Minho, \"cuca\" é o nome popular de uma espécie de abóbora que costumava-se perfurar com contornos de olhos e boca, e dentro da qual era colocada uma vela acesa (de forma semelhante ao que se faz no Halloween americano).\n[…]\nOutra origem possível seria o “Farricoco”, personagem que acompanhava a procissão de Passos, no Algarve, também em Portugal.\"\n[…]\nCoca\n[…]\nCuca (personagem)\n[…]\nCuca - Turma do Folclore"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Coco_(folklore)",
        "situacao": "ok",
        "texto": "The Coco or Coca (also known as the Cucuy, Cuco, Cuca, Cucu, Cucuí or El Cucuí) is a mythical ghost-like monster, equivalent to the bogeyman, found in Portugal and Spain. Those beliefs have also spread in many Hispanophone and Lusophone countries. It can also be considered an Iberian version of a bugbear as it is a commonly used figure of speech representing an irrational or exaggerated fear. The \n[…]\nMany Latin American countries refer to the monster as El Cuco. In northern New Mexico and southern Colorado, where there is a large Hispanic population, it is referred to by its anglicized name, \"the Coco Man\". In Brazilian folklore, the monster is referred to as Cuca and pictured as a female humanoid alligator with blond hair. Though this reptilian form resembles the Portuguese coca, a dragon, it actually originates from the 1952's TV show Sítio do Pica-pau Amarelo (1952 TV series).\n[…]\nIn Brazil, the Coco appears as a humanoid female alligator called Cuca. She is dressed like a woman with ugly hair and a sack on her back. Cuca appears as one of the main villains in children's books Sítio do Picapau Amarelo by Monteiro Lobato, but in the books she appears like a powerful witch that attacks innocent children. Artists illustrating these books depicted the Cuca as an anthropomorphic alligator. She is an allusion to Coca, a dragon from the folklore of Portugal and Galicia.\n[…]\nIn Portugal, coca is a name for a hooded cloak; it was also the name of the traditional hooded black wedding gown still in use at the beginning of the 20th century. In Portimão during the holy week celebrations, in the procissão dos Passos (Spanish: Procesión de los Pasos), a procession organized by the Catholic brotherhoods, the herald, a man dressed with a black hooded cloak that covered his face and had three holes for the eyes and mouth, led the procession and announced the death of Christ."
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Matinta Perera",
      "descricao": "Figura do folclore amazônico, velha bruxa que se transforma em pássaro e assobia à noite."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Para não ser perturbado pela Matinta Perera ou pela Caipora, o morador da mata costuma oferecer a elas o quê?",
    "resposta": "Fumo",
    "distratores": [
      "Farinha de mandioca",
      "Mel",
      "Sal grosso"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Matinta_Pereira",
      "https://pt.wikipedia.org/wiki/Caipora"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Matinta_Pereira",
        "situacao": "ok",
        "texto": "Matinta-Pereira, às vezes, também grafado Matinta-Perera, é uma personagem do folclore brasileiro, mais precisamente na Região Norte do país.\n[…]\nTrata-se de uma bruxa velha que à noite se transforma em um pássaro agourento que pousa sobre os muros e telhados das casas e se põe a assobiar, e só para quando o morador, já muito enfurecido pelo estridente assobio, promete a ela algo para que pare (geralmente tabaco, mas também pode ser café, cachaça ou peixe). Assim, a Matinta para e voa, e no dia seguinte vai até a casa do morador perturbado para cobrar o combinado.\n[…]\nA grafia original abrasileirada, escrita em livros do século XIX, como ocorre nos escritos de Frederico José de Santana Néri, é com \"i\" e hífen (Matinta-Pereira) e o uso \"Perera\", constante em livros mais recentes, é uma tentativa de reproduzir graficamente a fala popular (\"linguagem matuta\"), mas desaconselhável por não ser fiel à origem da lenda.\n[…]\nSegundo as versões mais populares, a união foi desfeita pelo boto, por não aturar o cheiro de cachaça e de fumo com que a esposa chegava em casa todas as noites, mas também é comum se encontrar versões relegando à jovem Matinta o fim das núpcias, dado que o Boto era muito afeito a procurar jovens donzelas à beira do Rio Guamá.[carece de fontes]?\n[…]\nNo ano de 2015, a lenda foi mencionada no enredo da São Clemente, \"A Incrível História do Homem que Só Tinha Medo da Matinta-Pereira, da Tocandira e da Onça Pé de Boi\", uma homenagem ao carnavalesco Fernando Pamplona.\n[…]\nMatinta é descrita na letra da música \"Matinta\", da banda brasileira Armahda."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Caipora",
        "situacao": "ok",
        "texto": "Caipora ou caapora é uma entidade da mitologia tupi-guarani. A palavra “caipora” vem do tupi ka'a, mato, e pora, habitante, termos que em relação genitiva significam \"habitante do mato\". No folclore brasileiro, é representada como uma pequena indígena, ágil e nua. De acordo com a crença indígena, ela pode dar azar a quem a encontra ou vê. A exemplo do curupira, a caipora é protetora da floresta.\n[…]\nNo imaginário popular em diferentes regiões do País, a figura da Caipora está intimamente associada à vida da floresta. Ele é o guardião da vida animal selvagem. Apronta toda sorte de ciladas para o caçador, sobretudo aquele que abate animais além de suas necessidades. Afugenta as presas, espanca os cães farejadores, e desorienta o caçador simulando os ruídos dos animais da mata. Assobia, estala os galhos e assim dá falsas pistas fazendo com que ele se perca no meio do mato.\n[…]\nMas, de acordo com a crença popular, é sobretudo nas sextas-feiras, nos domingos e dias santos, quando não se deve sair para a caça, que a sua atividade se intensifica. Mas há um meio de driblá-la. A Caipora aprecia o fumo. Assim, reza o costume que, antes de sair numa noite de quinta-feira para caçar no mato, deve-se deixar fumo de corda no tronco de uma árvore e dizer: \"Toma, Caipora, deixa eu ir embora\". A boa sorte de um caçador é atribuída também aos presentes que ele oferece.\n[…]\nEm Casa-Grande & Senzala, Gilberto Freyre incluiu o caiporismo em uma nota em que o menciona como uma mitologia rústica dos recifenses.\n[…]\nA Caipora foi um dos personagens do programa infantil Castelo Rá-Tim-Bum. Neste programa, a Caipora aparecia toda vez que alguém assobiava, e só desaparecia quando alguém adivinhava a palavra secreta que ela havia escolhido. Ela contava histórias e lendas indígenas, sempre protagonizadas por dois indiozinhos. Era interpretada por Patrícia Gasppar."
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Bumba meu boi",
      "descricao": "Folguedo popular brasileiro, muito forte no Maranhão, que encena a morte e a ressurreição de um boi."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "No nome do folguedo bumba meu boi, a palavra bumba é uma interjeição que indica qual ação?",
    "resposta": "Bater",
    "distratores": [
      "Dançar",
      "Correr",
      "Cantar"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Bumba_meu_boi"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Bumba_meu_boi",
        "situacao": "ok",
        "texto": "Bumba meu boi, boi-bumbá ou búfalo-bumbá é uma festa do folclore popular brasileiro, com personagens humanos e animais fantásticos, que gira em torno de uma lenda sobre a morte e ressurreição de um boi.\n[…]\nEm Pernambuco é chamado boi-calemba ou bumbá; no Maranhão, Rio Grande do Norte, Alagoas e Piauí é chamado bumba meu boi; no Ceará, é boi de reis, boi-surubim e boi-zumbi; na Bahia é boi-janeiro, boi-estrela-do-mar e mulinha-de-ouro; em Minas Gerais e no Rio de Janeiro é bumba ou folguedo-do-boi; no Espírito Santo é boi de reis; em São Paulo é boi de jacá e dança-do-boi; no Pará, Rondônia e Amazonas é boi-bumbá; no Paraná e em Santa Catarina é boi-de-mourão ou boi-de-mamão; e no Rio Grande do Sul é bumba, boizinho ou boi-mamão.\n[…]\nO Bumba Meu Boi tem sua gênese no Piauí e Maranhão, desenvolvendo-se durante o ciclo do gado no Brasil, ao incorporar elementos dos folguedos portugueses, culturas africana e indígena. O Ciclo do Gado, iniciado na Bahia, expandiu-se no século XVII por duas rotas principais ao longo do rio São Francisco: uma seguia o curso do rio em comboios e a outra o atravessava em direção ao Norte, até chegar ao Piauí, apontado por Câmara Cascudo como “o grande produtor de gadaria”.\n[…]\nO Festival Folclórico de Parintins é um festival de boi-bumbá que acontece todos os anos na cidade de Parintins, no interior do Amazonas. É considerado Patrimônio Cultural do Brasil pelo Instituto do Patrimônio Histórico e Artístico Nacional (IPHAN).\n[…]\nBúfalo-Bumbá de Mestre Damasceno\n[…]\nBumba meu boi do Maranhão\n[…]\nCARVALHO, Maria Michol Pinho de. 1995. Matracas que desafiam o tempo: é o bumba-boi do Maranhão. São Luís: s/e."
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Festa junina",
      "descricao": "Conjunto de festas populares de junho no Brasil em homenagem a Santo Antônio, São João e São Pedro."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Antes de ganhar o nome ligado ao mês de junho, a festa junina era chamada de joanina. De onde vinha esse nome?",
    "resposta": "De São João",
    "distratores": [
      "De Dom João Sexto",
      "De Joana d'Arc",
      "De São João del-Rei"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Festa_junina"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Festa_junina",
        "situacao": "ok",
        "texto": "Festas juninas, festas dos santos populares ou celebração do meio do verão são uma celebração da estação do verão do hemisfério norte, geralmente realizada em uma data próxima ao solstício de verão. Tem raízes pagãs pré-cristãs na Europa.\n[…]\nNo final do século VI, a Natividade de João Batista (24 de junho) tornou-se uma festa importante, contrabalançando no meio do verão a festa do Natal no meio do inverno.\n[…]\nA Fête de la Saint-Jean (Festa de São João), tal como no Brasil e em Portugal, é comemorada em 24 de junho e tem, como maior característica, a fogueira. Em certos municípios franceses, uma alta fogueira é erigida pelos habitantes homenageando São João Batista. Trata-se de uma festa católica, embora ainda sejam mantidas certas tradições pagãs que a originaram. Na região de Vosges, a fogueira é chamada chavande.[carece de fontes]?\n[…]\nAs tradições juninas da Polônia estão associadas principalmente às regiões da Pomerânia e da Casúbia, e a festa é comemorada em 23 de junho, chamada localmente 'Noc Świętojańska\" (Noite de São João). A festa dura o dia todo, começando às 8h da manhã e varando a madrugada. De maneira análoga à festa brasileira, uma das características mais marcantes é o uso de fantasias; no entanto, não de trajes camponeses como no Brasil, mas de vestimentas de piratas.\n[…]\nA festa de Ivan Kupala (João Batista) é conhecida como a mais importante de todas as festas dos povos eslavos orientais de origem pagã, e vai desde 23 de junho até 6 de julho. Há a lenda de que na noite de Ivan Kupala, aparece a flor da samambaia e quem a encontrar será rico e feliz para sempre (essa flor não existe). É um rito de celebração pelo verão, que foi absorvido pela Igreja Ortodoxa.\n[…]\nVéspera de São João\n[…]\nFlor-de-são-joão"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Festa junina",
      "descricao": "Conjunto de festas populares de junho no Brasil em homenagem a Santo Antônio, São João e São Pedro."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Por que pratos de milho, como pamonha, canjica e curau, dominam as mesas das festas juninas no Nordeste?",
    "resposta": "Junho é época da colheita",
    "distratores": [
      "Promessa a São João",
      "Herança dos franceses",
      "Proibição de carne"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Festa_junina"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Festa_junina",
        "situacao": "ok",
        "texto": "Festas juninas, festas dos santos populares ou celebração do meio do verão são uma celebração da estação do verão do hemisfério norte, geralmente realizada em uma data próxima ao solstício de verão. Tem raízes pagãs pré-cristãs na Europa.\n[…]\nNo final do século VI, a Natividade de João Batista (24 de junho) tornou-se uma festa importante, contrabalançando no meio do verão a festa do Natal no meio do inverno.\n[…]\nNa Dinamarca, a celebração solsticial é chamada de sankthans ou sankthansaften (\"véspera de São João\"). Foi um feriado oficial até 1770 e, de acordo com a tradição dinamarquesa de comemorar um feriado na noite anterior do dia real, é celebrado na noite de 23 de Junho. É o dia em que os homens e mulheres sábias medievais (os médicos da época) reuniam ervas especiais que precisavam durante o resto do ano para curar as pessoas.[carece de fontes]?\n[…]\nAs tradições juninas da Polônia estão associadas principalmente às regiões da Pomerânia e da Casúbia, e a festa é comemorada em 23 de junho, chamada localmente 'Noc Świętojańska\" (Noite de São João). A festa dura o dia todo, começando às 8h da manhã e varando a madrugada. De maneira análoga à festa brasileira, uma das características mais marcantes é o uso de fantasias; no entanto, não de trajes camponeses como no Brasil, mas de vestimentas de piratas.\n[…]\nA festa de Ivan Kupala (João Batista) é conhecida como a mais importante de todas as festas dos povos eslavos orientais de origem pagã, e vai desde 23 de junho até 6 de julho. Há a lenda de que na noite de Ivan Kupala, aparece a flor da samambaia e quem a encontrar será rico e feliz para sempre (essa flor não existe). É um rito de celebração pelo verão, que foi absorvido pela Igreja Ortodoxa.\n[…]\nFlor-de-são-joão"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Frevo",
      "descricao": "Ritmo e dança do carnaval de Pernambuco, com passos acrobáticos e sombrinhas coloridas."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "O frevo tem três tipos principais. Qual deles é só instrumental, tocado pela orquestra para os passistas dançarem?",
    "resposta": "Frevo de rua",
    "distratores": [
      "Frevo-canção",
      "Frevo de bloco",
      "Frevo de salão"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Frevo"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Frevo",
        "situacao": "ok",
        "texto": "O frevo é um ritmo musical e uma dança brasileira com origem no estado de Pernambuco. Sua música baseia-se na fusão de gêneros como marcha, maxixe, dobrado e polca, e sua dança foi influenciada pela capoeira.\n[…]\nNa década de 1930, surgiu a divisão do frevo em três tipos:\n[…]\nA seguir, seguem as análises e exemplos dos três tipos de frevo de rua, comumente encontrados nos textos sobre o assunto.\n[…]\nNo frevo canção, a melodia principal é realizada pela voz e a orquestra a acompanha com diversos tipos de abordagens e técnicas. Como este subgênero do frevo possui instrumentação próxima ao frevo de rua, destacam-se os diversos tipos de contrapontos, que são realizados para compor o arranjo, sejam eles passivos, ativos e/ou harmonizados .\n[…]\nAo contrário dos outros dois tipos de frevo, a instrumentação do frevo de bloco é feita com a chamada banda de pau e corda, com violões, cavaquinhos, somando-se a instrumentos de sopro da família das madeiras, como flauta, clarinete, saxofone.\n[…]\nFrevo do Trio em 4 Movimentos para piano, violino e violoncelo (S/D) e Frevo Fugato para coro misto e piano (S/D), André no frevo para vibrafone, sopros e banda (piano, bateria etc.), André no frevo para piano solo (S/D),  Frevata para quarteto de trombones e banda ou orquestra, de Edmundo Villani-Côrtes.\n[…]\nA presença do clube carnavalesco pernambucano Vassourinhas no carnaval de Salvador, em 1951, insipirou os baianos Dodô e Osmar a tocarem o frevo num instrumento por eles inventado, o pau elétrico - que viria a ser conhecido como guitarra baiana, (nome esse dado por Armandinho Macêdo, que introduziu uma 5ª corda- Dó). -, em cima de um Ford 1929 (a famosa Fobica), dando origem ao trio elétrico.\n[…]\nOsvaldo de Almeida, o pai do frevo"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Capoeira",
      "descricao": "Arte marcial afro-brasileira que combina luta, dança, música e acrobacia."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Como se chama o balanço contínuo do corpo, de um lado para o outro, que é o movimento básico da capoeira?",
    "resposta": "Ginga",
    "distratores": [
      "Meia-lua",
      "Rasteira",
      "Aú"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Capoeira",
      "https://en.wikipedia.org/wiki/Ginga_(capoeira)"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Capoeira",
        "situacao": "ok",
        "texto": "A capoeira ou capoeiragem é uma expressão cultural e esporte afro-brasileiro que mistura arte marcial, dança e música. Acredita-se que foi desenvolvida no Brasil através do Engolo, arte marcial angolana introduzida no Brasil por escravizados africanos.\n[…]\nSoldados portugueses relataram ser necessário mais de um dragão (militar) para capturar um quilombola, porque se defendiam com estranha técnica de ginga e luta. O governador-geral da Capitania de Pernambuco declarou ser mais difícil derrotar os quilombolas do que os invasores holandeses.\n[…]\nA ginga é o movimento básico da capoeira, mas além da ginga, também são muito comuns os chutes em rotação, rasteiras, floreios (como o aú ou a bananeira), golpes com as mãos, cabeçadas, esquivas, acrobacias (como o salto mortal), giros apoiados nas mãos ou na cabeça e movimentos de grande elasticidade.\n[…]\nA ginga é importantíssima para a defesa e para o ataque do capoeirista, tornando o capoeirista imprevisível durante o ataque e dificultando um possível contra-ataque, além de evitar que o capoeirista se torne um alvo fixo.[carece de fontes]? Completam a técnica as cabeçadas, floreios (acrobacias no solo), tesouras, cotoveladas e outras.[carece de fontes]?\n[…]\n2) Outro sistema\n[…]\nAs cordas iniciais, como a verde e a amarela, podem ser conquistadas em menos de um ano; por outro lado, chegar às cordas avançadas, notadamente as de contramestre e mestre, pode levar anos, e exige-se profundo conhecimento da capoeira para serem conquistadas — esse conhecimento, no entanto, não quer dizer saltos ou acrobacias, mas conhecimento instrumental, teórico, prática de docência, qualidade de jogo, respeito, cursos de aperfeiçoamento e boa índole pessoal são alguns dos requisitos básicos para tais graduações."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Ginga_(capoeira)",
        "situacao": "ok",
        "texto": "The ginga (pronounced jeen-gah; from gingar - to sway) is the fundamental footwork (or dancing move) of capoeira. It is a sidestep that can be a prance or a shuffle and it sets the rhythm of the game. The ginga embodies the extraordinary cunning of capoeira, which is its fundamental characteristic.\n[…]\nGinga is a key move which holds diverse parts of the capoeira game together. It enables capoeiristas to hide, dodge, feint, and attack  while continuously shifting stances to cause confusion and make the capoeirista a frustrating target for a forward-advancing opponent. The ginga also allows the capoeirista to continuously maintain enough torque to use in a strike while providing a synchronization of arm movement to avoid and slip under attacks.\n[…]\nAt the congress of capoeristas in Brazil in 1984, a conversation ensued about how to perform ginga. Mestre Itapoan claimed that mestre Camisa distorts capoeira because all of his students do the ginga in the same way. Itapoan noted that he had seen a theater play in which one actor did the ginga in a way that made it obvious that he was a student of Camisa. Itapoan pointed out that in Bahia and in Mestre Bimba's school, no one does the ginga in the same way.\n[…]\nHe said that the ginga is the capoeirista's identity, and that is why he believed that Camisa was distorting capoeira.\n[…]\nCamisa agreed that the ginga is something personal, but he also pointed out that capoeira is a fighting form, and that some body positions are better than others in combat. Camisa explained that his method is to relate attack and defense positions to an axis. For example, he does not allow his students to stretch out their front leg during the ginga, because if they receive a pisao kick on a stretched knee, they could be seriously injured.\n[…]\nList of capoeira techniques"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Capoeira regional",
      "descricao": "Estilo de capoeira sistematizado na Bahia na década de 1930, com método de ensino próprio."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Comparada à capoeira regional de Mestre Bimba, qual estilo de capoeira é jogado de forma mais lenta e mais rente ao chão?",
    "resposta": "Capoeira angola",
    "distratores": [
      "Capoeira contemporânea",
      "Capoeira carioca",
      "Capoeira de rua"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Capoeira_Angola",
      "https://pt.wikipedia.org/wiki/Capoeira_Regional"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Capoeira_Angola",
        "situacao": "ok",
        "texto": "Capoeira Angola é um estilo de capoeira anterior a capoeira regional (ou luta regional baiana) criada por Mestre Bimba. Embora mais antiga, sua designação surgiu apenas após a criação de Mestre Bimba e em referência à população negra da África Austral traficada para o Brasil. Trata-se de uma arte marcial, um estilo específico de capoeira, desenvolvida sobretudo na Bahia.\n[…]\nPastinha, posterior a Bimba, cria o CECA em conjunto com outros associados, como Amorzinho, Noronha, Totonho de Maré, Livino Diogo, Onça Preta, Olímpio, Zeir, Victor H.U. e Alemão, que era filho de Maré. Na década de 1950,Waldemar da Paixão/da Liberdade e Mestre Cobrinha Verde, e suas academias de Capoeira angola, deram continuidade à capoeiragem baiana, desempenhando relevante papel em sua história.\n[…]\nAtualmente, essas diferentes leituras acerca da capoeira estão manifestadas através da prática dos diferentes grupos e declaradas em suas principais vertentes: a Capoeira Angola, que possui como referência Mestre Pastinha, a Capoeira Regional, que tem como seu principal personagem Mestre Bimba e, embora com menos adeptos, a Capoeira Utilitária, a qual foi desenvolvido por Mestre Zuma e Sinhozinho.\n[…]\nA capoeira Angola diferencia-se da luta regional baiana de Mestre Bimba por representar uma modalidade da capoeira com mais conexão ao seu passado, sendo concebida como um jogo, no qual a luta, a dança, a mímica e outros elementos se conjugam. Além disso, a capoeira angola privilegia a  “mandinga”  como  estratégia  de  luta  e  enfrentamento. Além disso, outra particularidade, evidencia-se no “jogo  baixo”,  algo  facilmente  reconhecido no jogo de Angola.\n[…]\nMestre Pastinha\n[…]\nMestre Curió\n[…]\nAssociação de Capoeira Angola Dobrada\n[…]\nCentro de Capoeira Angola Angoleiro Sim Sinhô\n[…]\nFederação Internacional de Capoeira Angola\n[…]\nCapoeira Angola Irmaos Guerreiros\n[…]\nAssociação de Capoeira Angola Dobrada, na Alemanha"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Capoeira_Regional",
        "situacao": "ok",
        "texto": "A capoeira ou capoeiragem é uma expressão cultural e esporte afro-brasileiro que mistura arte marcial, dança e música. Acredita-se que foi desenvolvida no Brasil através do Engolo, arte marcial angolana introduzida no Brasil por escravizados africanos.\n[…]\nA capoeira praticada na atualidade possui duas grandes vertentes: a capoeira Angola (do banto ngolo), que apresenta movimentos mais rasteiros e teve como principal expoente o mestre Pastinha; e a regional (inicialmente chamada Luta Regional Baiana), que possui movimentos mais aéreos e teve como principal expoente o mestre Bimba. Esta última foi criada em Salvador, cidade onde foi fundada a primeira academia/escola de capoeira do Brasil, em 1937.\n[…]\nDessa forma, Bimba, com auxílio de seu aluno José Cisnando Lima, tornoU-a mais eficiente para o combate, inserindo alguns movimentos/golpes de outras artes marciais, como o batuque. Mestre Bimba também desenvolveu um dos primeiros métodos de treinamento sistemático para a capoeira. Como a palavra capoeira ainda era proibida pelo código Penal, Bimba chamou seu novo estilo de luta regional baiana.\n[…]\nSão Bento Grande de Angola\n[…]\nA capoeira Angola refere-se a toda a capoeira que mantém as tradições da época anterior à da criação do estilo Regional. Em outras palavras, é a capoeira mais tradicional. Existindo em diversas áreas do país desde tempos mais remotos, notadamente no Rio de Janeiro, em Salvador e em Recife, é impossível precisar onde e quando a capoeira Angola começou a tomar sua forma atual.\n[…]\nCom o tempo, toda capoeira que não seguia as linhas da Regional ou da Angola, mesmo as amalgamadas com outras artes marciais, passou a se denominar \"Contemporânea\".\n[…]\nCoutinho, Daniel. O ABC da capoeira angola; Os Manuscritos do mestre Noronha."
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Berimbau",
      "descricao": "Instrumento de corda de arco e cabaça que comanda o ritmo da roda de capoeira."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Muito antes da capoeira, o nome berimbau já designava em Portugal um pequeno instrumento de metal, tocado preso entre os dentes. Qual?",
    "resposta": "Harpa de boca",
    "distratores": [
      "Gaita de foles",
      "Flauta doce",
      "Cavaquinho"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Berimbau_de_boca",
      "https://pt.wikipedia.org/wiki/Berimbau"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Berimbau_de_boca",
        "situacao": "ok",
        "texto": "O  berimbau de índio ou berimbau de boca (português brasileiro) ou berimbau (português europeu) é um instrumento de lamelofone, que consiste em uma língua flexível de metal ou bambu ou palheta presa a uma armação. Foi inventado na China no século 3 AEC.\n[…]\nO instrumento é conhecido por inúmeras culturas diferentes por no mínimo quarenta nomes diferentes. Sendo que transes são facilitados por sons, a harpa de boca é associada a magia e é um instrumento comum em rituais xamânicos.\n[…]\nO berimbau toca-se da seguinte maneira: coloca-se na boca a parte mais fina e fricciona-se a lingueta, produzindo variados sons.\n[…]\nBerimbau origina-se do termo quimbundo mbirimbau."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Berimbau",
        "situacao": "ok",
        "texto": "O berimbau(português brasileiro) ou hungo(português angolano) é um instrumento de corda com origem em Angola e tradicional da Bahia.\n[…]\nPreservado na Bahia até o presente, o berimbau sempre foi um suvenir no estado, vendido aos turistas muito mais como adorno que como instrumento — colorido e enfeitado, bem diferente daquele que os capoeiristas utilizam.[carece de fontes]?\n[…]\nNa capoeira, até três berimbaus podem ser tocados conjuntamente, cada um com uma função mais ou menos definida.\n[…]\nO gunga toca a linha grave, raramente com improvisações. O tocador de berra-boi no começo de uma roda de capoeira geralmente é seu líder, sendo seguido pelos outros instrumentos. O tocador principal do gunga geralmente também lidera a cantoria, além de convidar os jogadores ao \"pé do berimbau\" (para inciarem o jogo).\n[…]\nNão há muitas regras formais no toque do berimbau na capoeira, sendo que cada mestre de roda determina a interação entre seus músicos. Alguns preferem todos os instrumentos em uníssono, ao passo que outros dividem os tocadores entre iniciantes e avançados, requerendo dos últimos variações mais complexas.\n[…]\nEntre os capoeiristas, há uma divisão em subtipos de berimbau.\n[…]\nMestre Pastinha recorda que os capoeiristas, durante o período de proibição, costumavam prender uma foice de lâmina dupla ao instrumento, transformando-o em uma arma mortal quando necessário:“No momento da verdade, deixava de ser um instrumento musical e se transformava em uma foice de mão.”Mestre Noronha também afirmava que o berimbau era uma arma muito útil para os antigos mestres de capoeira da década de 1920 que resistiam à repressão policial."
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Lampião",
      "descricao": "Virgulino Ferreira da Silva, o mais famoso líder do cangaço no sertão nordestino, morto em 1938."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Depois da emboscada de 1938 na Grota de Angico, em Sergipe, o que as tropas fizeram com Lampião e os cangaceiros mortos?",
    "resposta": "Cortaram suas cabeças",
    "distratores": [
      "Queimaram os corpos",
      "Jogaram no rio",
      "Enterraram em segredo"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Lampi%C3%A3o_(cangaceiro)"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Lampi%C3%A3o_(cangaceiro)",
        "situacao": "ok",
        "texto": "Virgulino Ferreira da Silva, mais conhecido como Lampião (Vila Bela, entre 1897 e 1900 – Porto da Folha, 28 de julho de 1938), foi um cangaceiro brasileiro atuante no Sertão nordestino entre as décadas de 1920 e 1930. Por ser considerado o líder do movimento de banditismo mais bem-sucedido da história do Brasil e do século XX, ganhou o apelido de \"Rei do Cangaço\".\n[…]\nFoi executado junto com outros 10 membros do seu bando, incluindo a sua companheira Maria Bonita, pela força policial volante do então tenente João Bezerra da Silva na Grota do Angico, no município sergipano de Porto da Folha, em 28 de julho de 1938; Lampião e seus companheiros tiveram seus corpos decapitados, e suas cabeças postas em exibição em diversos pontos do país. Os crânios do casal foram enterrados junto aos restos mortais somente em 1969.\n[…]\nLevino Ferreira da Silva dá um tiro no canto da rua e Odilon Flor, filho de João Flor, revida, quase atingindo Lampião na cabeça. Começa o tiroteio e Levino é ferido e vai até a casa de Chico Euzébio, onde é preso e levado para Floresta. Levino é solto e os Ferreiras vão embora para Água Branca, em Alagoas.\n[…]\nBelarmino então atira e mata. Era o cangaceiro Levino Ferreira da Silva, irmão de Lampião. No outro dia, ao saber disso, o capitão Zé Caetano e o cabo Pedro Monteiro vão até a fazenda Tenório e encontram os 3 corpos sem as cabeças, prática esta utilizada pelos cangaceiros para dificultar o reconhecimento pela polícia.\n[…]\n\"Al Capone\", de Raul Seixas e Paulo Coelho, presente no disco Krig-ha, Bandolo!, faz referência à execução do cangaceiro nos versos: \"Ei Lampião, dá no pé, desapareça / pois eles vão à feira exibir sua cabeça\". Para além do personagem, a música cita o ditador romano Júlio César, o músico americano Jimmy Hendrix, Jesus Cristo, entre outros.\n[…]\nAraújo, Antônio Amaury Correa. Ferreira, Vera. De Virgulino a Lampião"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Padre Cícero",
      "descricao": "Cícero Romão Batista, sacerdote cearense venerado pela religiosidade popular nordestina e alvo de grandes romarias."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Em 1889, em Juazeiro, a fama de milagreiro do Padre Cícero explodiu quando a hóstia teria virado o quê na boca da beata Maria de Araújo?",
    "resposta": "Sangue",
    "distratores": [
      "Água",
      "Mel",
      "Vinho"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Padre_C%C3%ADcero",
      "https://en.wikipedia.org/wiki/C%C3%ADcero_Rom%C3%A3o_Batista"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Padre_C%C3%ADcero",
        "situacao": "ok",
        "texto": "Cícero Romão Batista (Crato, 24 de março de 1844 – Juazeiro do Norte, 20 de julho de 1934) foi um sacerdote católico brasileiro. Na devoção popular, é conhecido como Padre Cícero ou Padim (padrinho, na norma culta) padre Ciço. Obteve grande prestígio e influência sobre a vida social, política e religiosa do Ceará, bem como do Nordeste.\n[…]\nEm 1.º de março de 1889, durante uma missa celebrada pelo padre Cícero, a hóstia ministrada pelo sacerdote à religiosa Maria de Araújo se transformou em sangue na boca da religiosa. Segundo relatos, tal fenômeno se repetiu diversas vezes durante cerca de dois anos. Rapidamente espalhou-se a notícia de que acontecera um milagre em Juazeiro. A pedido de padre Cícero a diocese formou uma comissão de padres e profissionais da área da saúde para investigar o suposto milagre.\n[…]\nDom Joaquim se posicionou favorável ao segundo parecer e, com base nele, suspendeu as ordens sacerdotais de padre Cícero e determinou que Maria de Araújo, que viria a morrer em 1914, fosse enclausurada.[carece de fontes]?\n[…]\nO padre Cícero morreu em Juazeiro do Norte em 20 de julho de 1934, aos 90 anos, encontrando-se sepultado na Igreja de Nossa Senhora do Perpétuo Socorro, na mesma cidade.\n[…]\nAQUINO, Pedro Ferreira de. O Santo do Meu Nordeste - Padre Cícero Romão Batista. São Paulo: Ed. Letras & Letras, 1997. ISBN 85-85-387-63-7\n[…]\nBARBOSA, Geraldo Menezes. Relíquia: o mistério do sangue das hóstias de Juazeiro do Norte. Juazeiro do Norte: Gráfica e Editora Royal, 2004.\n[…]\nNOBRE, Edianne S. O Teatro de Deus: as beatas do Padre Cícero e o espaço sagrado de Juazeiro (1889-1898). Fortaleza: Edições IMEPH/UFC, 2011.\n[…]\nNOBRE, Edianne S. Incêndios da Alma: A beata Maria de Araújo e a experiência mística no Brasil do Oitocentos. Rio de Janeiro UFRJ, 2014. Tese de Doutorado. Ganhadora do Prêmio Capes 2015."
      },
      {
        "url": "https://en.wikipedia.org/wiki/C%C3%ADcero_Rom%C3%A3o_Batista",
        "situacao": "ok",
        "texto": "Cícero Romão Batista (24 March 1844 – 20 July 1934), also known as Padre Cícero (Father Cícero), was a Brazilian Catholic priest who became a spiritual leader to the people of Northeastern Brazil.\n[…]\nBatista was actively involved in the politics of his time and was a member of the Conservative Republican Party of Brazil. When Juazeiro was raised to the status of a municipality in 1911, he was appointed its first mayor. He governed the city in this capacity for most of the next twenty years. In 1926 he was elected federal deputy, but he did not take office.\n[…]\nToday, a large statue of Batista stands in Juazeiro do Norte, where he is considered to be the patron saint of the city. A pilgrimage to this statue takes place in his honour every November, attracting hundreds of thousands of followers.\n[…]\nOn 13 December 2015, as part of the opening ceremonies of the Holy Year proclaimed by Pope Francis, the Bishop of Crato, Fernando Panico, declared the rehabilitation of Batista's status with the Catholic Church. He further declared Batista to have been a man of extraordinary virtues, formally reconciling him with the church.\n[…]\nOn August 20, 2022, during a Mass held in Largo da Capela do Socorro, in Juazeiro do Norte, the bishop of the Diocese of Crato, Magnus Henrique Lopes, announced that he had received a letter from the Dicastery for the Causes of Saints, the Vatican body responsible for beatification and canonization processes, informing about the authorization of Pope Francis for the opening of the beatification process of Batista.\n[…]\nPequena Biografia do Padre Cícero - O Cearense do Século (archived copy)"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Oxum",
      "descricao": "Orixá das águas doces, dos rios e cachoeiras, nas religiões afro-brasileiras."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "O culto à orixá Oxum nasceu às margens de um rio africano que leva o nome dela. Em que país fica esse rio?",
    "resposta": "Nigéria",
    "distratores": [
      "Angola",
      "Gana",
      "Moçambique"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Oxum",
      "https://en.wikipedia.org/wiki/Osun_River"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Oxum",
        "situacao": "ok",
        "texto": "Oxum (em iorubá: Oṣun), na religião iorubá, é uma orixá que reina sobre as águas doces, considerada a senhora da beleza, da fertilidade, do dinheiro e da sensibilidade. Intimamente associada à riqueza espiritual e material, à vaidade e à capacitação da mulher, é representada por uma mulher africana elegante, adornada da cabeça aos pés com joias de ouro, sentada à beira de um rio, com um espelho re\n[…]\nÉ cultuada no Candomblé, na Umbanda e em diversas religiões afro-americanas. Oxum é dona do ouro e das pedras preciosas, e é cultuada como rainha da nação ijexá. Tem o título de ialodê (em iorubá: ìyálodè), ou seja, senhora da sociedade.\n[…]\nOxum é filha de Iemanjá e Oxalá. Oxum, Iansã e Obá eram esposas de Xangô. Ipondá é a mãe de Logunedé, orixá menino que compartilha dos seus axés. Ambos dançam ao som do ritmo ijexá, toque que recebe o nome de sua região de origem. Usa um abebé (espelho de metal)  nas mãos, uma alfange (adaga), por ser guerreira, e um ofá (arco e flecha) dourado, por sua ligação com Oxóssi. É uma das mais jovens.\n[…]\nNa Umbanda, o culto a Oxum apresenta poucas diferenças em relação à Religião iorubá e ao Candomblé.\n[…]\nNo Haiti, Oxum é a orixá do amor, do dinheiro e da felicidade. Também conhecida como Erzile ou Erzulie, Erzulie Freda no vodum.\n[…]\nTemplo de Oxum\n[…]\nFestival de Osun em Osogbo\n[…]\nBBC News, Osogbo, Nigeria"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Osun_River",
        "situacao": "ok",
        "texto": "The  Oṣun River (sometimes spelt Oshun, Yoruba: Odò Ọ̀ṣun), is a river of Yorubaland that rises in Ekiti State and flows westwards into Osun State before turning southwestwards at its confluence with the Erinle River near the town of Ede and then heading south at the Asejire reservoir flowing though the rest of the state and Ogun State in Southwestern Nigeria before eventually discharging into the\n[…]\nA century ago there were many sacred groves in Yorubaland: every town had one. Most of these groves have now been abandoned or have shrunk to quite small areas. Osun-Osogbo, in the heart of Osogbo, the capital of Osun State, founded some 400 years ago in southwest Nigeria, at a distance of 250 km from Lagos is the largest sacred grove to have survived and one that is still revered.\n[…]\nThe dense forest of the Osun Sacred Grove is some of the last remnants of primary high forest in southern Nigeria. Through the forest meanders the river Osun, the spiritual abode of the river goddess Osun. Set within the forest sanctuary are forty shrines, sculptures and art works erected in honour of Osun and other Yoruba deities, many created in the past forty years, two palaces, five sacred places and nine worship points strung along the river banks with designated priests and priestesses.\n[…]\nUnder the Land Use Act of 1990 the Federal Government of Nigeria conferred trusteeship of the Grove to the Government of Osun State.\n[…]\nArtisanal mining is more prevalent in Nigeria. While some artisans specialize on alluvial deposits and use light tools like shovels, others, supported by smaller businesses, utilize heavier tools like excavators. Residents of Osun identified Chinese backers who engaged armed security personnel and operated in secrecy. There are numerous mining sites spread out along the river and its tributaries. However, Osun is also the location of Nigeria's sole sizable commercial gold mine."
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Oxalá",
      "descricao": "Orixá criador da humanidade nas religiões afro-brasileiras, associado ao branco e ao opaxorô."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Em homenagem a Oxalá, orixá associado à cor branca, muitos baianos se vestem de branco em qual dia da semana?",
    "resposta": "Sexta-feira",
    "distratores": [
      "Segunda-feira",
      "Quinta-feira",
      "Domingo"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Oxal%C3%A1"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Oxal%C3%A1",
        "situacao": "ok",
        "texto": "Oxalá, do iorubá \"Òriṣànlá\", é nome de um orixá também conhecido como Obatalá. \"Oxalufã\", \"Oxaguiã\" e \"Obatalá\" são termos procedentes da língua iorubá.\n[…]\nOxalá, Orixalá, Orixaguinã, Gunocô ou Obatalá é o orixá associado à criação do mundo e da espécie humana. Apresenta-se de várias maneiras (qualidades) sendo as duas principais qualidades: a forma jovem, em que Oxalá é chamado de Oxaguiã e seus símbolos são uma idá (espada), um pilão de metal branco e um escudo. Na sua forma idosa, Oxalá é chamado Oxalufã e seu símbolo é um cajado de metal chamado opaxorô.\n[…]\nA cor de Oxaguiã é o branco levemente mesclado com azul no Candomblé e somente branco no Batuque do Rio Grande do Sul; a de Oxalufã é somente branco de gossa em ambos. O dia consagrado para oxalá moço é a sexta-feira e o domingo para oxalá velho e oxalá de orumilaia. Sua saudação é èpao, èpa bàbá! Oxalá é considerado e cultuado como o maior e mais respeitado de todos os orixás do panteão africano. Simboliza a paz, é o pai maior nas nações das religiões de tradição africana.\n[…]\nObatalá, Oxalá, Oxalufã, Oxaguiã e Oxá-Popô, todos eles denominados orixá funfum (Òrìsà funfun; branco), devido à cor que os simboliza, a branca. Obatalá e Odudua são associados de diversas maneiras nos mitos da criação.\n[…]\nOrixá-Lá\n[…]\nObatalá\n[…]\nOxalufã\n[…]\nTambém em função das lendas, o dia de Oxalá é a sexta-feira.\n[…]\nNo candomblé, tanto no Brasil quanto em outros países, todos os iniciados e frequentadores costumam vestir-se de branco em homenagem a Oxalá. Os filhos de Oxalá não comem comida de sal e muitos adotaram não comer carne na sexta-feira (somente peixe).\n[…]\nÁguas de Oxalá"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "São Jorge no Rio de Janeiro",
      "descricao": "Devoção popular carioca ao santo guerreiro São Jorge, celebrado em 23 de abril e sincretizado com um orixá."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Segundo a crença popular brasileira, onde se pode ver São Jorge montado em seu cavalo, lutando contra o dragão?",
    "resposta": "Na Lua",
    "distratores": [
      "No Cruzeiro do Sul",
      "Nas nuvens",
      "Nas chamas da fogueira"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Jorge_da_Capad%C3%B3cia"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Jorge_da_Capad%C3%B3cia",
        "situacao": "ok",
        "texto": "São Jorge (em grego: Άγιος Γεώργιος; romaniz.: Ágios Geṓrgios; em latim: Georgius; entre 275 e 280 — 23 de abril de 303), também conhecido como Jorge da Capadócia e Jorge de Lida foi, conforme a tradição, um soldado romano no exército do imperador Diocleciano, venerado como mártir cristão. Na hagiografia, São Jorge é um dos santos mais venerados no Catolicismo, na Igreja Ortodoxa, bem como na Comu\n[…]\nA mais conhecida imagem brasileira de São Jorge seria, possivelmente, de autoria de Martinelli.\n[…]\nSão Jorge também é sincretizado em diversas religiões afro-brasileiras, como a Umbanda, na forma de Ogum.\n[…]\nTodavia, a ligação de São Jorge com a Lua é algo puramente brasileiro, com forte influência da cultura africana, e em nada relacionado com o santo europeu. Em estados como Pernambuco, Rio Grande do Sul e Rio de Janeiro, o santo foi sincretizado a Ogum, enquanto na Bahia, sincretizado a Oxóssi. A tradição diz que as manchas apresentadas pela Lua representam o milagroso santo, seu cavalo e sua espada pronto para defender aqueles que buscam sua ajuda.\n[…]\nAo ouvir a história, Jorge ficou determinado em salvar a princesa. Ele passou a noite na cabana do eremita e quando amanheceu partiu para o vale onde o dragão morava. Ao chegar lá, viu um pequeno cortejo de mulheres lideradas por uma bela moça vestindo trajes de pura seda árabe. Era a princesa, que estava sendo conduzida pelas mulheres para o local do sacrifício. São Jorge se colocou na frente das mulheres com seu cavalo e, com bravas palavras, convenceu a princesa a voltar para casa.\n[…]\nApós tal juramento, Jorge partiu atrás da princesa e do \"dragão\". Ao encontrar a fera, Jorge a atinge com sua lança, mas esta se despedaça ao ir de encontro à pele do monstro e, com o impacto, São Jorge cai de seu cavalo. Ao cair, ele rola o seu corpo, até uma árvore de laranjeira, onde fica protegido por ela do veneno do dragão até recuperar suas forças."
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Entrudo",
      "descricao": "Festa popular de origem portuguesa, antecessora do carnaval brasileiro, em que se atiravam água, farinha e limões de cheiro."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome entrudo, antiga folia portuguesa que antecedeu o carnaval, vem da palavra latina introitus. O que ela significa?",
    "resposta": "Entrada",
    "distratores": [
      "Festa",
      "Despedida",
      "Brincadeira"
    ],
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
    "indice": 21,
    "ancora": {
      "nome": "Trio elétrico",
      "descricao": "Caminhão com equipamento de som e músicos que arrasta foliões no carnaval, criado em Salvador."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Que apelido tinha o velho Ford em que Dodô e Osmar saíram tocando pelas ruas de Salvador, dando origem ao trio elétrico?",
    "resposta": "Fobica",
    "distratores": [
      "Calhambeque",
      "Lambreta",
      "Baratinha"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Trio_el%C3%A9trico",
      "https://pt.wikipedia.org/wiki/Dod%C3%B4_e_Osmar"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Trio_el%C3%A9trico",
        "situacao": "ok",
        "texto": "No entretenimento, o trio elétrico é um veículo adaptado com aparelhos de sonorização e alto-falantes, para a apresentação de música ao vivo ao ar livre, criado na cidade brasileira de Salvador (estado da Bahia) em 1950, pelos músicos Dodô e Osmar Macedo. Através das caixas amplificadoras com alto-falantes, normalmente montados em um caminhão/carreta, são normalmente emitidos as músicas dos gênero\n[…]\nVendo a animação com que o público reagira ao frevo e para suprir a frustração provocada pela interrupção do desfile, os músicos Dodô e Osmar Macedo, adaptaram um veículo Ford 1929, ligando à bateria do automóvel a um violão e um protótipo de guitarra, criando assim a \"fobica\", que mais tarde seria reconhecida como o primeiro trio elétrico do mundo. A dupla elétrica Dodô e Osmar saiu pelas ruas executando o ritmo recifense.\n[…]\nOs trios foram ampliando em tamanho, na década de 1960, pelo uso de caminhões cada vez maiores (época em que Dodô e Osmar deixaram de se apresentar). Ligados a blocos identificados por camisões coloridos - as mortalhas - os grupos passam a se isolar dos demais foliões por meio de cordas de separação. Destacava-se, desde então, o Trio Elétrico Tapajós, que era contratado pela Prefeitura do Recife para se apresentar naquela cidade.\n[…]\nEmbora o crescimento do trio tenha permitido a criação de uma nova indústria de relativa importância na Bahia, sua essência permanece na relação entre o artista e o folião; a este respeito Betinho, músico filho de Osmar Macedo, declarou: \"Quando a gente está tocando em cima do trio e vê aquele negão pulando lá embaixo... De repente, o negão pensa que você está tocando para ele dançar, mas não é. Ele é que está dançando para você tocar.\n[…]\n50 anos do trio elétrico - Fred de Góes, Editora Corrupio, 2000, ISBN 8586551082, 168 pág.\n[…]\nSonhos Elétricos - Moraes Moreira, Azougue Editorial, 2011."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dod%C3%B4_e_Osmar",
        "situacao": "ok",
        "texto": "Dodô e Osmar foi uma dupla de músicos formada por Adolfo Antônio Nascimento (Salvador, 10 de novembro de 1920 – Salvador, 15 de junho de 1978) e por Osmar Álvares Macedo (Salvador, 22 de março de 1923 – Salvador, 30 de junho de 1997). A eles é atribuída a invenção do trio elétrico e da guitarra baiana, inicialmente chamada de pau elétrico.\n[…]\nConheceram-se em um programa de rádio em 1938. Os dois estudavam música e eletrônica e pesquisavam uma forma de amplificar o som dos instrumentos de corda. A amplificação por volta de 1942 com a criação do pau elétrico considerado a primeira guitarra elétrica do Brasil, no carnaval de 1950, a dupla saiu em cima de um Ford 1929 escrito na lateral \"A Dupla Elétrica\" tocando em instrumentos adaptados as canções do grupo Vassourinhas Recife, que se apresentava na ocasião em Salvador.\n[…]\nEm um ano fizeram aperfeiçoamentos e incluíram mais um membro, Temístocles Aragão, formando assim o trio elétrico em 1951. No ano seguinte uma empresa de refrigerantes, a Fratelli Vita, percebeu o enorme sucesso do trio e colocou um caminhão decorado à disposição dos músicos, inaugurando o formato consagrado por todos os carnavais até hoje.\n[…]\nOsmar Macedo faleceu após uma infecção generalizada, no dia 30 de junho de 1997 em Salvador, na Bahia.\n[…]\nTrio Elétrico Dodô e Osmar Dicionário Cravo Albin da Música Popular Brasileira\n[…]\nTrio Elétrico Dodô e Osmar Discogs"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Chimarrão",
      "descricao": "Infusão quente de erva-mate tomada na cuia, bebida tradicional do Sul do Brasil"
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Como se chama o canudo de metal, com um filtro na ponta, usado para sorver o chimarrão da cuia?",
    "resposta": "Bomba",
    "distratores": [
      "Chaleira",
      "Taquara",
      "Térmica"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Chimarr%C3%A3o"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Chimarr%C3%A3o",
        "situacao": "ok",
        "texto": "Chimarrão (do espanhol rioplatense: \"cimarrón\") ou mate (do quíchua: \"mati\") é uma das maneiras de tomar a infusão da erva-mate. É uma bebida característica da cultura do Cone Sul, legado da cultura indígena (caingangue, guarani, aimará e quíchua), produzido pela infusão da planta erva-mate (Ilex paraguariensis) moída e infusionada em água quente à aproximadamente 70 graus Celsius, em uma cuia com\n[…]\nOs povos indígenas utilizavam recipientes semelhantes às cuias atuais para preparar a erva-mate, confeccionados com materiais como taquara (bambu), madeira, chifre de boi e porongo.A banda do Rio Grande do Sul, Engenheiros do Hawaii, compôs uma canção chamada \"Ilex Paraguariensis\", em homenagem ao chimarrão. No mesmo estado brasileiro, a microcervejaria Dado Bier lançou uma cerveja de mate, a \"Ilex\".\n[…]\nNa Região Centro-Oeste do Brasil há um refrigerante à base de erva-mate chamado Mate Chimarrão.\n[…]\nO chimarrão se espalhou pela América do Sul com a colonização espanhola da América e chegou ao Oriente Médio com imigrantes sírios e libaneses que retornaram aos seus países após a Primeira Guerra Mundial. A Síria é o maior importador mundial de erva-mate, superando o Uruguai em 2022.\n[…]\nDurante a 43.ª edição do Acampamento Farroupilha, em Porto Alegre, foi comercializado sorvete artesanal com sabor de chimarrão, feito com erva-mate.\n[…]\nO município brasileiro de Venâncio Aires, no Rio Grande do Sul, reconhecida como a Capital Nacional do Chimarrão, está construindo um monumento em formato de cuia com 20 metros de altura total. A estrutura terá três andares internos, com exposições sobre a erva-mate e no topo da bomba de chimarrão haverá um mirante.\n[…]\nBARROS, Sérgio Gabriel Silva de et al. Mate (chimarrão) é consumido em alta temperatura por população sob risco para o carcinoma epidermoide de esôfago. Arq. Gastroenterol., São Paulo, v. 37, n. 1, Jan. 2000.\n[…]\nMuseu Paranaense: Histórico da Erva-Mate"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Chimarrão",
      "descricao": "Infusão quente de erva-mate tomada na cuia, bebida tradicional do Sul do Brasil"
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Antes da chegada dos colonizadores europeus, que povo indígena já tomava a infusão de erva-mate que deu origem ao chimarrão?",
    "resposta": "Guaranis",
    "distratores": [
      "Tupinambás",
      "Xavantes",
      "Pataxós"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Chimarr%C3%A3o",
      "https://pt.wikipedia.org/wiki/Erva-mate"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Chimarr%C3%A3o",
        "situacao": "ok",
        "texto": "Chimarrão (do espanhol rioplatense: \"cimarrón\") ou mate (do quíchua: \"mati\") é uma das maneiras de tomar a infusão da erva-mate. É uma bebida característica da cultura do Cone Sul, legado da cultura indígena (caingangue, guarani, aimará e quíchua), produzido pela infusão da planta erva-mate (Ilex paraguariensis) moída e infusionada em água quente à aproximadamente 70 graus Celsius, em uma cuia com\n[…]\nOs primeiros povos de que se tem conhecimento de terem feito uso da erva-mate são os indígenas guaranis, que habitavam a região definida pelas bacias dos rios Paraná, Paraguai e Uruguai na época da chegada dos colonizadores espanhóis; e os indígenas caingangues, que habitavam na região dos atuais estados do Rio Grande do Sul, Santa Catarina, Paraná e Misiones.\n[…]\nOs povos indígenas utilizavam recipientes semelhantes às cuias atuais para preparar a erva-mate, confeccionados com materiais como taquara (bambu), madeira, chifre de boi e porongo.A banda do Rio Grande do Sul, Engenheiros do Hawaii, compôs uma canção chamada \"Ilex Paraguariensis\", em homenagem ao chimarrão. No mesmo estado brasileiro, a microcervejaria Dado Bier lançou uma cerveja de mate, a \"Ilex\".\n[…]\nNa Região Centro-Oeste do Brasil há um refrigerante à base de erva-mate chamado Mate Chimarrão.\n[…]\nO chimarrão se espalhou pela América do Sul com a colonização espanhola da América e chegou ao Oriente Médio com imigrantes sírios e libaneses que retornaram aos seus países após a Primeira Guerra Mundial. A Síria é o maior importador mundial de erva-mate, superando o Uruguai em 2022.\n[…]\nO município brasileiro de Venâncio Aires, no Rio Grande do Sul, reconhecida como a Capital Nacional do Chimarrão, está construindo um monumento em formato de cuia com 20 metros de altura total. A estrutura terá três andares internos, com exposições sobre a erva-mate e no topo da bomba de chimarrão haverá um mirante.\n[…]\nComo fazer um chimarrão"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Erva-mate",
        "situacao": "ok",
        "texto": "A erva-mate (nome científico: Ilex paraguariensis), também chamada mate ou congonha, é uma árvore da família das aquifoliáceas, originária da região subtropical da América do Sul. É consumida como chá mate (quente ou gelado), chimarrão ou tereré no Brasil, no Paraguai, na Argentina, no Uruguai, na Bolívia e no Chile.\n[…]\no carijo, processo rústico utilizado pelos indígenas (a denominação foi determinada pelos guaranis, referindo-se ao \"jirau\" - armação de madeira semelhante a estrado ou palanque - onde se colocava a erva) utilizando uma espécie de estrado feito de varas e cipó nos quais se colocavam as folhas, as quais deveriam secar durante horas sobre um braseiro;\n[…]\nOs guaranis da região nordeste da Argentina parecem ter sido os descobridores do uso da erva-mate. No Século XVI, os guaranis passaram este conhecimento aos colonizadores espanhóis, que o disseminaram por todo o Vice-Reino do Rio da Prata. A erva chegou a ser proibida no sul do Brasil durante o século XVI, sendo considerada \"erva do diabo\" pelos padres jesuítas das reduções do Guayrá.\n[…]\nA lenda dos avá-guaranis da origem da erva-mate (caá ou ka’a, “erva” em guarani) diz que um ancião tinha uma filha única lindíssima que era cobiçada por diversos homens, mesmo de outros lugares. Num sonho, porém, esse ancião recebeu a visita de Nhanderu, que lhe explicou que sua filha não podia pertencer a uma pessoa só, e o fez prometer que, quando ela morresse, a enterraria em frente à sua casa.\n[…]\nAlém disso, transformou Yaríi em deusa dos ervais e protetora do povo Guarani, a renomeando de Caá-Yaríi (ka'a jarýi, “dono[a] das ervas”, é como os guaranis chamam a espíritos que regem as ervas, sobretudo da erva-mate). Desde então, a nova planta cresce, oferecendo folhas e galhos para preparar o mate.\n[…]\nMuseu Paranaense: Histórico da Erva-Mate"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Semana Farroupilha",
      "descricao": "Festa tradicionalista do Rio Grande do Sul, com desfiles e acampamentos gaúchos, que lembra a Revolução Farroupilha."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Que fogo simbólico, aceso e levado a cavalo por todo o Rio Grande do Sul, abre os festejos da Semana Farroupilha?",
    "resposta": "Chama Crioula",
    "distratores": [
      "Tocha Farrapa",
      "Fogo de chão",
      "Chama Gaúcha"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Semana_Farroupilha",
      "https://pt.wikipedia.org/wiki/Chama_Crioula"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Semana_Farroupilha",
        "situacao": "ok",
        "texto": "A Semana Farroupilha é um evento festivo da Cultura gaúcha, que se comemora de 13 a 20 de setembro com desfiles em homenagem a líderes da Revolução Farroupilha. O evento é dedicado ao marco da Revolução Farroupilha, liderada pelo gaúcho Bento Gonçalves no século XIX.\n[…]\nA Revolução Farroupilha foi mais longa revolução do Brasil, ocorreu entre os anos de 1835 a 1845 e tinha como ideais liberdade, igualdade e humanidade. Durante a semana farroupilha os gaúchos montam acampamentos e comemoram, tomando chimarrão e celebrando com desfiles e shows. Usam vestimentas a caráter: as prendas usam vestidos rodados e os homens bombacha, lenço, guaiaca e chapéu. Ocorre em todas as cidades gaúchas e algumas regiões de Santa Catarina.\n[…]\nSegundo a etimologia desta palavra, o termo farroupilha vem de “farrapo” ou “roupas velhas”. Na época, os revolucionários gaúchos eram chamados assim por causa das roupas que vestiam.\n[…]\nRio Grande do Sul\n[…]\nRevolução Farroupilha"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Chama_Crioula",
        "situacao": "ok",
        "texto": "A Chama Crioula é uma expressão da cultura gaúcha, tratando-se de uma chama que é acesa previamente aos festejos da Semana Farroupilha e levada para cada uma das 30 regiões tradicionalistas espalhadas pelo Rio Grande do Sul (RS). Segundo o portal do Governo do RS, é \"considerada um símbolo que une o Estado, representa a história, a tradição e a alma da sociedade gaúcha. Em torno dela, é construído\n[…]\nA primeira Chama Crioula foi acesa em 07 de setembro de 1947.\n[…]\nNo momento da extinção do Fogo Simbólico da Pátria, os jovens foram chamados para a retirada da centelha, conforme haviam acordado com a Liga Da Defesa Nacional. Paixão subiu em uma escada com o archote improvisado, feito de cabo de vassoura, envolto por estopa embebida em querosene, presa por arames, e acendeu solenemente aquela que seria eternizada na história como a primeira Chama Crioula\", explicao MTG do RS em seu portal.\n[…]\nUma outra história que virou lenda no estado é que o primeiro fogo que deu origem à Chama Crioula seria mantido aceso há oito gerações pela família Pires de São Sepé. Segundo o g1-RS, \"a história data de 1800, quando o local era rota de tropeiros e carreteiros. Desde aquela época, de acordo com Gilda Simões Pires, proprietária das terras, era habitual que os passageiros parassem ali para se alimentar. 'Esse fogo foi aceso por necessidade. Essas pessoas precisavam preparar a sua alimentação.\n[…]\nAnualmente, em agosto, uma das cidades do Rio Grande do Sul realiza a cerimônia de Geração e Distribuição da Chama Crioula. Em 2019 a 72º Geração e Distribuição da Chama Crioula aconteceu em Tentente Portela  e em 2022 a 73ª Geração e Distribuição da Chama Crioula do Rio Grande do Sul aconteceu em Canguçu. Após acesa, uma centelha da Chama Crioula percorre as 30 Regiões Tradicionalistas gaúchas, carregada por grupos de cavaleiros, que espalham o fogo simbólico pelos 497 municípios do estado."
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Forró",
      "descricao": "Gênero musical e dança popular do Nordeste brasileiro, tocado tradicionalmente com sanfona, zabumba e triângulo."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Diz a lenda que o nome forró vem do inglês for all, mas os estudiosos apontam outra origem. De que palavra ele viria?",
    "resposta": "Forrobodó",
    "distratores": [
      "Forrageira",
      "Fuzuê",
      "Fole"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Forr%C3%B3",
      "https://en.wikipedia.org/wiki/Forr%C3%B3"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Forr%C3%B3",
        "situacao": "ok",
        "texto": "Forró é uma festa e um gênero musical originário da Região Nordeste do Brasil, bastante popular e comum, especialmente, nas festas juninas. O nome da festa \"forró\" é usado para nomear distintos gêneros musicais como o xote, baião, arrasta-pé e o xaxado, por isso quem não conhece suas histórias, as confundem com um gênero único. As músicas são executadas tradicionalmente por trios instrumentais com\n[…]\nEm 2021 o forró foi reconhecido como patrimônio cultural imaterial do Brasil.\n[…]\nO termo \"forró\", segundo o filólogo pernambucano Evanildo Bechara, é uma redução de forrobodó, que por sua vez é uma variante do antigo vocábulo galego-português forbodó, corruptela do francês faux-bourdon, que teria a conotação de desentoação.\n[…]\nO elo semântico entre forbodó e forrobodó tem origem, segundo Fermín Bouza-Brey, na região noroeste da Península Ibérica (Galiza e norte de Portugal), onde \"a gente dança a golpe de bumbo, com pontos monorrítmicos monótonos desse baile que se chama forbodó\".\n[…]\nNa etimologia popular (ou pseudoetimologia) é frequente associar a origem da palavra \"forró\" à expressão da língua inglesa for all (para todos). Para essa versão foi inventada uma engenhosa história: no início do século XX, os engenheiros britânicos, instalados em Pernambuco para construir a ferrovia Great Western, promoviam bailes abertos ao público, ou seja for all. Assim, o termo passaria a ser pronunciado \"forró\" pelos nordestinos.\n[…]\nApesar da versão bem-humorada, não há nenhuma sustentação para tal etimologia do termo. Em 1912, estreou a peça teatral \"Forrobodó\", escrita por Carlos Bettencourt (1890-1941) e Luís Peixoto (1889-1973), musicada por Chiquinha Gonzaga e em 1937, cinco anos antes da instalação da referida base militar em território potiguar, a palavra \"forró\" já se encontrava registrada na história musical na gravação fonográfica de “Forró na roça”, canção composta por Manuel Queirós e Xerém."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Forr%C3%B3",
        "situacao": "ok",
        "texto": "The term forró (Brazilian Portuguese pronunciation: [fɔˈʁɔ]) refers to a musical genre, a rhythm, a dance and the event itself where forró music is played and danced. Forró is an important part of the culture of the Northeastern Region of Brazil. It encompasses various dance types as well as a number of different musical genres. Their music genres and dances have gained widespread popularity in al\n[…]\nThe popular dances, according to the Pernambucan press, were known as \"forrobodó\" or \"forrobodança\" or even \"forrobodão\" already by the end of the 19th century.\n[…]\nThere are several theories on the origin of the name. The main theory is that forró is a clipping of forrobodó, meaning \"great party\" or \"commotion\". This is the view held by Brazilian folklorist Luís da Câmara Cascudo, who studied the Brazilian Northeast through most of his life. Forrobodó is believed to come from the Galician–Portuguese word forbodó (itself a corruption of fauxbourdon), which was used in the Portuguese court to define a dull party.\n[…]\nThe word forrobodó is itself very common in Portuguese popular conversation to describe a fun, but almost depraved and limitless party. This word was carried by Portuguese migration waves to Brazil, and lost the light negative meaning and was slowly simplified by their children.\n[…]\nThis musical style, commonly called also forró pé-de-serra, is played by a trio combination of\n[…]\nUniversitário forró supposedly evolved from (and is very similar to) the pé-de-serra/baião styles, while Nordestino is used to refer to the styles more like the original xote.\n[…]\nJack Draper, Forró and Redemptive Regionalism from the Brazilian Northeast: Popular Music in a Culture of Migration (New York: Lang, 2011) ISBN 9781433110764\n[…]\n\"What is forró – Broschure by Ivan Dias and Sandrinho Dupan (2017)"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Luiz Gonzaga",
      "descricao": "Sanfoneiro, cantor e compositor pernambucano, chamado de Rei do Baião."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Luiz Gonzaga, o Rei do Baião, nasceu numa fazenda do sertão pernambucano, perto de qual cidade?",
    "resposta": "Exu",
    "distratores": [
      "Caruaru",
      "Serra Talhada",
      "Garanhuns"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Luiz_Gonzaga"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Luiz_Gonzaga",
        "situacao": "ok",
        "texto": "Luiz Gonzaga do Nascimento (Exu, 13 de dezembro de 1912 – Recife, 2 de agosto de 1989) foi um cantor, compositor e multi-instrumentista brasileiro. Também conhecido como o Rei do Baião, é tido como um dos mais destacados nomes do forró.\n[…]\nNasceu na sexta-feira, dia 13 de dezembro de 1912, numa casa de barro batido na Fazenda Caiçara (povoado do Araripe), a 12 km da área urbana do município de Exu, extremo noroeste do estado de Pernambuco.\n[…]\nEm 2003, o então governador de Pernambuco, Jarbas Vasconcelos, sancionou lei que denomina “Rodovia Luiz Gonzaga” o trecho da BR-232 que liga o Recife a Caruaru. O trecho foi estadualizado e recebeu, à época, a importante obra de duplicação.[carece de fontes]?\n[…]\nA Usina Hidrelétrica Luiz Gonzaga, localizada no município de Petrolândia, no sertão pernambucano, foi assim denominada em homenagem ao cantor.\n[…]\nEm 2012, Luiz Gonzaga foi tema do carnaval da GRES Unidos da Tijuca, no Rio de Janeiro, com o enredo \"O Dia em Que Toda a Realeza Desembarcou na Avenida para Coroar o Rei Luiz do Sertão\", fazendo com que a escola ganhasse o carnaval carioca daquele ano.\n[…]\nEm homenagem ao centenário do artista  na cidade de Exu, no sertão pernambucano, Gilberto Gil e Dominguinhos entoaram o \"Asa branca\"  com Daniel (neto de Gonzaga e filho de Gonzaguinha) e Joquinha (sobrinho do Rei do Baião) encontro de gerações. No Plenário da Câmara, o Rei do Baião foi celebrado em sessão solene.\n[…]\nAguiar, Ronaldo Conde (2013). «Jackson do Pandeiro e Luiz Gonzaga - O Rei do Ritmo e o O  Rei do Baião». Os Reis da Voz. Rio de Janeiro: Casa da Palavra. ISBN 978-85-773-4398-0\n[…]\nGonzagão Online — A Vida, História e a Obra de Luiz Gonzaga, O Rei do Baião e Pernambucano do Século\n[…]\nMemorial Luiz Gonzaga - Prefeitura de Recife"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Bonecos de Olinda",
      "descricao": "Bonecos gigantes do carnaval de Olinda, em Pernambuco."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Que boneco gigante de Olinda, de fraque e cartola, criado em 1932, é considerado o grande símbolo do carnaval da cidade?",
    "resposta": "Homem da Meia-Noite",
    "distratores": [
      "Mulher do Meio-Dia",
      "Zé Pereira",
      "Menino da Tarde"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Homem_da_Meia-Noite",
      "https://pt.wikipedia.org/wiki/Carnaval_de_Olinda"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Homem_da_Meia-Noite",
        "situacao": "inexistente",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Carnaval_de_Olinda",
        "situacao": "ok",
        "texto": "O Carnaval de Olinda, parte do Carnaval Recife–Olinda, diz respeito à festa de momo realizada na cidade de Olinda, no estado brasileiro de Pernambuco. É reconhecido mundialmente pelos desfiles dos Bonecos de Olinda, bonecos de mais de dois metros, coloridos e de fácil localização, que saem às ruas junto com os foliões. É realizado no Centro Histórico de Olinda, ou Cidade Alta.\n[…]\nSimbolicamente a abertura do carnaval de Olinda é feita pelo Cariri Olindense, desde 1921 quando o Velho do Cariri, símbolo do troça, sai às 4h00 montado em um jumento e desce as ladeiras. Foi assim até 1931, quando alguns de seus membros fundaram O Homem da Meia-Noite, que sai na meia noite do sábado de Zé Pereira e o domingo de rei Momo.\n[…]\nEntão, a partir de 1932, O Homem da Meia-Noite faz a entrega simbolica da \"chave do carnaval de Olinda\" para que o Cariri Olindense siga a tradição de abrir os festejos de Momo.\n[…]\nEntre as suas atrações, ostenta dezenas de bonecos gigantes, sendo o mais conhecido deles é O Homem da Meia-Noite. Além dos tradicionais blocos e troças que percorrem suas ladeiras, embalados pelo ritmo do frevo.\n[…]\nSão exemplos destes a Pitombeira dos Quatro Cantos, fundada em 1947, quando um grupo de rapazes desfilou pelas ruas da Cidade Alta cantando e empunhando galhos de pitombeira; e o \"Elefante de Olinda\", fundado em 1952 por um grupo de rapazes da Cidade Alta, que durante o Carnaval saíram pelas ruas com um elefante de porcelana cantando uma música improvisada em homenagem ao animal.\n[…]\nA grande concentração destes blocos e troças se dá na frente da Prefeitura Municipal, onde pode-se encontrar o maior número de foliões por metro quadrado.\n[…]\nDezenas de blocos desfilam pelas ruas de Olinda, tocando troças e portando estandartes e alguns são associados a algum boneco. Dentre estes, podemos citar:\n[…]\nElefante de Olinda\n[…]\nO Homem da Meia-Noite"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Pipa",
      "descricao": "Brinquedo de papel ou tecido sobre varetas, empinado ao vento preso a uma linha, também chamado de papagaio ou pandorga."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "As pipas, empinadas pelas crianças em todo o Brasil, teriam surgido há mais de dois mil anos em qual país?",
    "resposta": "China",
    "distratores": [
      "Índia",
      "Japão",
      "Egito"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Pipa_(brinquedo)",
      "https://en.wikipedia.org/wiki/Kite"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Pipa_(brinquedo)",
        "situacao": "ok",
        "texto": "A pipa (português brasileiro) ou papagaio (português europeu), também chamada pandorga ou raia, é um brinquedo que voa baseado na oposição entre a força do vento e a da corda segurada pelo operador.\n[…]\nNo Brasil, a pipa (como é chamada no Rio de Janeiro) também recebe os nomes de cafifa (em Niterói), arraia, morcego, lebreque, bebeu, coruja, tapioca (em várias partes do estado do Rio de Janeiro), papagaio, curica , cângula, jamanta, casqueta, cometa, chambeta (no estado de São Paulo), quadrado (no Paraná), pandorga (no Rio Grande do Sul e Santa Catarina), barril, estilão, pião, bolacha (na Bahia) e pepeta (em estados como Acre e Amazonas).\n[…]\nEm Portugal é designado papagaio ou papagaio de papel e, em algumas zonas do norte do país, estrela. No arquipélago da Madeira é conhecido como joeira.\n[…]\nMuito populares nos subúrbios da cidade do Rio de Janeiro, são chamadas de pipas propriamente ditas aquelas em formato de pentágono, com cabresto triangular e rabiola. Já as arraias não possuem rabiola, e são mais comuns em Niterói.\n[…]\nAs pipas nasceram na China antiga. Sabe-se que por volta do ano 1 200 a.C. foram utilizadas como dispositivo de sinalização militar. Os movimentos e as cores das pipas eram mensagens transmitidas à distância entre destacamentos militares.\n[…]\nO político e inventor norte-americano Benjamin Franklin utilizou uma pipa para investigar e inventar o para-raios. Hoje, a pipa mantém a sua popularidade entre  crianças de todas as culturas.\n[…]\nCapucheta — pipa feita de uma única folha de jornal e sem varetas; a rabiola também é feita de jornal. Com algumas dobraduras e com a linha amarrada nos dois lados da dobradura, formando um triângulo, ou delta, ao centro por onde é empinado."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Kite",
        "situacao": "ok",
        "texto": "A kite is a tethered heavier-than-air craft with wing surfaces that react against the air to create lift and drag forces. A kite consists of wings, tethers and anchors. Kites often have a bridle and tail to guide the face of the kite so the wind can lift it. Some kite designs do not need a bridle; box kites can have a single attachment point. A kite may have fixed or moving anchors that can balanc\n[…]\nIn China, the kite has been claimed as the invention of the 5th-century BC Chinese philosophers Mozi and Lu Ban, who flew wooden kites called muyuan (木鸢). With the invention of paper in the Han dynasty, kites made of paper became popular, and kites were called zhiyuan (纸鸢). Materials ideal for kite building were readily available, including silk fabric for sail material; fine, high-tensile-strength silk for flying line; and resilient bamboo for a strong, lightweight framework.\n[…]\nAfter its introduction into India, the kite further evolved into the fighter kite, known as the patang in India, where thousands are flown every year on festivals such as Makar Sankranti. Kites were known throughout Polynesia, as far as New Zealand, with the assumption being that the knowledge diffused from China along with the people. Anthropomorphic kites made from cloth and wood were used in religious ceremonies to send prayers to the gods.\n[…]\nKites have been flown in China since ancient times. Weifang is home to the largest kite museum in the world. It also hosts an annual international kite festival on the large salt flats south of the city. There are several kite museums in Japan, UK, Malaysia, Indonesia, Taiwan, Thailand and the US. In the pre-modern period, Malays in Singapore used kites for fishing."
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Carrinho de rolimã",
      "descricao": "Carrinho artesanal de madeira com rolamentos, usado em corridas ladeira abaixo."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "A palavra rolimã, que batiza o carrinho de madeira das corridas ladeira abaixo, é uma adaptação de um termo de qual língua?",
    "resposta": "Francês",
    "distratores": [
      "Inglês",
      "Italiano",
      "Alemão"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Carrinho_de_rolim%C3%A3",
      "https://pt.wiktionary.org/wiki/rolim%C3%A3"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Carrinho_de_rolim%C3%A3",
        "situacao": "ok",
        "texto": "Carrinho de rolimã ou carrinho de rolamentos é um carrinho, geralmente construído de madeira e rolamentos de aço, para a disputa de corridas ladeira abaixo. Ele geralmente é utilizado em descidas asfaltadas e lisas.\n[…]\nO freio deve ser um pouco maior que a distância do carrinho até o chão e precisa ficar em posição diagonal; para diminuir a velocidade deve puxar-se o pedaço de madeira ou uma barra de ferro para uma posição em que encoste no chão.\n[…]\nA primeira Kinderautomobilrennen (em português, \"corrida de automóvel infantil\") ocorreu em Oberursel, Alemanha, em 1904. Mais tarde, durante a década de 1930, o termo Seifenkisten (em português: \"caixa de sabão\") passou a ser usado na Alemanha. Esta designação tem origem nos Estados Unidos, quanto um fabricante americano de sabão popularizou o nome soap box nos anos 1930, ao imprimir os planos para construir um carro de corrida infantil em suas caixas de sabão.\n[…]\nO rolamento de esferas, designado com frequência desde tempos muito recentes também como rolimã, forma nominal que é corruptela do estrangeirismo rolemã , redução do nome francês roulement à billes , mecanismo utilizado na montagem dos carrinhos mais conhecidos como então, atrás das referidas nas cidades sempre como “carrinho de rolemã” e quase sempre todos os rolemãs , tal como então se designavam  na linguagem corrente e como ainda hoje são assim designados , eram obtidos em oficinas que faziam manutenção dos carros da  época e a madeira, de sobra de caixas ou tábuas utilizadas em obras."
      },
      {
        "url": "https://pt.wiktionary.org/wiki/rolim%C3%A3",
        "situacao": "inexistente",
        "texto": ""
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Chita",
      "descricao": "Tecido barato de algodão com estampas florais coloridas, tradicional no Brasil"
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "A chita, tecido de flores coloridas das festas juninas, chegou ao Brasil com os portugueses, mas nasceu em qual país asiático?",
    "resposta": "Índia",
    "distratores": [
      "China",
      "Japão",
      "Pérsia"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Chita_(tecido)",
      "https://en.wikipedia.org/wiki/Chintz"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Chita_(tecido)",
        "situacao": "ok",
        "texto": "Chita é um tecido de planta barato, e antigamente de pouca qualidade, com estampas de cores fortes, geralmente negras, e tramas difíceis. A estamparia é feita sobre o tecido conhecido como momo. Uma estampa característica de chita sobre outro suporte que não seja morim não é chita.\n[…]\nChita era originariamente um tecido estampado produzido na Índia desde épocas muito recuadas; os portugueses começaram a importar chitas da Índia, c. 1518, para as reexportar para a costa africana e para o Brasil. Entre 1600 e 1800 a chita (importada sobretudo do porto de Maçulipatão (Macchilapattanam), na costa oriental da Península hindustânica, tornou-se bastante popular na Europa como roupa de cama e para patchwork.\n[…]\nA chita veio para o Brasil com os europeus a partir do século XVI. O tecido originário da Índia passou por várias melhorias até chegar ao que temos hoje. Após um longo processo burocrático, cultural e financeiro, a chita passou a ser produzida também no Brasil. A produção do tecido no país o barateou, e muito, tornando populares as peças confeccionadas com o material, transformando-o, assim, em um dos ícones da identidade nacional.\n[…]\nA década de 30 chegou com Getúlio Vargas no poder e a necessidade de solucionar graves problemas financeiros nacionais, reflexos da crise internacional.\n[…]\nNo final da década de 1950, a Fiação e Tecelagem São José voltou-se à demanda especifica de sua clientela, e começou a fazer testes para fabricar tecidos – entre os quais a chita – com largura maior. A essa nova chita, mais larga, deu-se o nome de chitão, que “só deu certo e foi divulgado na década de 1960, quando todo mundo começou a fazer também”, recorda-se Oziris Cimino, diretor comercial da Fiação e Tecelagem São José.\n[…]\nMedia relacionados com Chita (tecido) no Wikimedia Commons"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Chintz",
        "situacao": "ok",
        "texto": "Chintz () is a woodblock printed, painted, stained or glazed calico textile that originated in Golconda (present day Hyderabad, India) in the 15th century. The cloth is printed with designs featuring flowers and other patterns in different colours, typically on a light, plain background.\n[…]\nChintz was originally a woodblock printed, painted or stained calico produced in Hyderabad, India from 1600 to 1800 and popular for bed covers, quilts, and draperies. In the Deccan region, chintz-like painted patterns are featured on the ceiling of the Cine diddi mosque at Bijapur. Chintz designs often featured visual elements borrowed from Persian, Chinese and Turkish traditions. After Vasco da Gama successfully reached Calicut in India in 1498, the fabric became known in Europe.\n[…]\nAround 1600, Portuguese and Dutch traders were bringing examples of Indian chintz into Europe on a small scale, but the English and French merchants began sending large quantities. It was significantly shaped by European tastes and imagination to meet the demands of Western market. By 1680 more than a million pieces of chintz were being imported into England per year, and a similar quantity was going to France and the Dutch Republic.\n[…]\nEven though chintz was outlawed, there were loopholes in the legislation. The Court of Versailles was outside the law and fashionable young courtiers continued wearing chintz. In 1734, French naval officer M. de Beaulieu, who was stationed at Pondicherry, India, sent home letters along with actual samples of chintz fabric during each stage of the process to a chemist friend detailing the dyeing process of cotton chintz."
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Agogô",
      "descricao": "Instrumento de percussão de metal formado por dois sinos cônicos de alturas diferentes, de origem iorubá."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O agogô, instrumento de metal das baterias de samba e dos terreiros, tem nome de origem iorubá. O que essa palavra significa?",
    "resposta": "Sino",
    "distratores": [
      "Ferro",
      "Chamado",
      "Pássaro"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Agog%C3%B4",
      "https://en.wikipedia.org/wiki/Agog%C3%B4"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Agog%C3%B4",
        "situacao": "ok",
        "texto": "O agogô, também conhecido como gã, é um instrumento musical formado por um único ou múltiplos sinos originado da música iorubá, da África Ocidental. Está presente no maracatu e capoeira. Tradicionalmente usado no candomblé, o agogô ainda é utilizado no samba de roda e no samba carioca.\n[…]\nA palavra \"agogô\" vem do iorubá agogô, que significa \"sino\". É o nome usado pelos povos Yoruba-, Igala- e Edo, que vivem na Nigéria, para descrever um sino golpeado sem badalo.\n[…]\nO sino era utilizado na terra iorubá e em certas outras regiões da Nigéria antes do desenvolvimento das redes sociais, das telecomunicações e das estações de rádio para comunicar informações à população. Usando o sino para chamar atenção, o arauto da cidade informa o povo sobre mensagens vindas do monarca ou dos líderes. Assim que o sino é tocado com um bastão de madeira, todos se reúnem em um único local para ouvir o que o arauto tem a dizer.\n[…]\nO sino, que pode ser comparado ao tweet atual enviado ao mundo inteiro, é tão significativo nessa situação quanto o próprio arauto.\n[…]\nUm sino conhecido como agogo é usado para fins religiosos além de seu uso como sino de percussão. Ele possui uma lingueta e um badalo utilizados para gerar som ao golpear o corpo metálico. Congregações pentecostais o utilizam como um tipo de instrumento musical e para oração. A importância do agogo é a mesma em todo o mundo.\n[…]\nO agogô é um instrumento musical idiofone, compõe-se de duas até 4 campânulas de ferro, ou dois cones ocos e sem base, de tamanhos diferentes, de folhas de Flandres, ligados entre si pelas vértices.\n[…]\nFaz parte da \"bateria\" da roda da capoeira, onde é mais conhecido por \"gã\" - nome este que vem de akokô, palavra nagô que significa \"relógio\"  \"tempo\", assim como um som extraído de um instrumento metálico ou de madeira."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Agog%C3%B4",
        "situacao": "ok",
        "texto": "An agogô (Yoruba: ['aɡoɡo]) is idiophone bell percussion instrument. With origins in West African music, it is now commonly used in traditional and popular Brazilian music. Agogôs are typically made from two cone-shaped pieces of metal with different pitches.\n[…]\nThe agogô is played by gripping the instrument in one hand, so that the handle is in the player's palm. The openings of the bells should face away from the player and the smaller bell should be above the larger one. The bells may be struck by a drumstick or another beater made from either wood or metal.\n[…]\nDrums are a foundational component of Yoruba music, which, in turn, is integral to Yoruba cultural and religious life. The agogo features prominently in Ìpèsè, a drum ensemble used in Ifá festivals. The ensemble also plays during rituals to appease the gods. Additionally, the agogo plays a significant role in the Yoruba musical subgenres of Juju, Afro-juju, Apala, Fuji, and others. The instrument is often used by Nigerian performers to bring traditional Yoruba music to a larger audience.\n[…]\nEnslaved West Africans were the first to introduce the agogô to Brazil. There, it is used in African-derived religious practices such as Candomblé, as well as to accompany capoeira, an Afro-Brazilian martial art. Along with European instruments, such as the seven-string guitar, and indigenous instruments, such as maracas, the âgogo played a significant role in 1920s choro ensembles. It has also gained a place in samba baterias, a rhythmic component of secular Carnival celebrations.\n[…]\nMany Brazilian and Afro-Brazilian popular musicians use the âgogo in their songs, especially to create Afro-Brazilian rhythms and grooves.\n[…]\nCowbell (instrument)\n[…]\nBateria Sounds"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Atabaque",
      "descricao": "Tambor alto e de madeira, de origem afro-brasileira, afinado por cordas e cunhas."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Apesar de o tambor estar ligado aos terreiros afro-brasileiros, a palavra atabaque chegou ao português vinda de qual língua?",
    "resposta": "Árabe",
    "distratores": [
      "Iorubá",
      "Quimbundo",
      "Tupi"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Atabaque",
      "https://en.wikipedia.org/wiki/Atabaque"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Atabaque",
        "situacao": "ok",
        "texto": "Atabaque (do árabe \"al-Tabaq\": \"prato\") é um instrumento musical de percussão africano da família dos membranofones percutidos. É usualmente tocado em rituais religiosos afro-brasileiros como o candomblé e umbanda, empregado para convocar as divinidades (orixás, inquices e voduns).\n[…]\nConstitui-se de um tambor cilíndrico ou ligeiramente cônico feito em madeira e aros de ferro, com uma das bocas coberta por um couro seco de animal (normalmente boi, veado ou bode), que nos ritos afro-brasileiros são oferecidos as entidades.\n[…]\nÉ tocado com as mãos, com duas baquetas, ou por vezes com uma mão e uma baqueta, dependendo do ritmo e do tambor que está sendo tocado. Pode ser usado em kits de percussão em ritmos brasileiros, tais como o samba e o axé music.\n[…]\nOs atabaques nos ritos afro-brasileiros são objetos sagrados e renovam anualmente o Axé. São usados unicamente nas dependências do terreiro ritualísticos, não saem para a rua (como os que são usados nos blocos de afoxés), estes são preparados exclusivamente para esse fim.\n[…]\nNos terreiros afro-brasileiros, os atabaques são tocados em trio, e são chamados de \"rum\", \"rumpi\" e \"le\". O rum, o maior de todos, possui o registro grave; o rumpi, tem o registro médio; o lé, o menor, possui o registro agudo. O trio de atabaques executa, ao longo do xirê, uma série de toques que devem estar de acordo com os orixás que são evocados em cada momento da festa (é o condutor do Axé do Orixá).\n[…]\nOs atabaques são chamados de Ilubatá ou Ilu na nação Queto, e ingomba na nação Angola, mas todas as nações adotaram também os nomes Rum, Rumpi e Le para os atabaques, apesar de serem uma denominação Jeje.\n[…]\nOutros instrumentos musicais associados ao atabaque são:\n[…]\nInstrumentos de percussão brasileiros"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Atabaque",
        "situacao": "ok",
        "texto": "The atabaque (UK:  AT-ə-BAK-ee, US:  AH-tə-BAH-kee, Brazilian Portuguese: [ataˈbaki]) is a tall, wooden, Afro-Brazilian hand drum, similar to conga.\n[…]\nIn Africa, cord-and-peg tension atabaques had a distribution area roughly congruent with the iron double bell (Agogo). This included the Guinea Coast from the Niger River and west to Benin, Togo, and Ghana. Beyond West Africa, cord-and-peg tension drums appeared in Bahia, Suriname, St. Domingue, Cuba, and the southern states of America. These drums traveled with the Ewe, Fon, Akan, and Yoruba people during the New World diaspora.\n[…]\nThe atabaque is used in Capoeira, Maculelê and the Afro-Brazilian religions of Candomblé and Umbanda. It is considered sacred in Candomblé and Umbanda. The main instrument in Candomblé is the drum (Atabaque), skinned with cord-and-peg tension.\n[…]\nThere are three types of atabaque: rum, the tallest with the lowest pitch; rum-pi, of medium height and in the middle pitch range; and lê, the smallest and highest-pitched.\n[…]\nIn Maculelê and the rituals of Candomblé and Umbanda, as many as three Atabaques are used (usually one of each type), but in Capoeira, traditionally only one is used.\n[…]\nThe atabaque has several distinct parts. Some of these are the couro de boi (oxhide), the corda (rope) and the aro (hoop), forming where together the corda de aro (rope hoop). The acunhas are the Wedges, and the suporte is the atabaque stand."
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Cuíca",
      "descricao": "Tambor de fricção brasileiro, com uma haste presa no centro da pele, que produz o som de ronco característico do samba."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Para fazer a cuíca roncar no samba, o músico esfrega com um pano úmido uma peça presa por dentro, no centro do couro. Que peça é essa?",
    "resposta": "Uma vareta de bambu",
    "distratores": [
      "Um arame",
      "Uma corda",
      "Uma mola"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Cu%C3%ADca",
      "https://en.wikipedia.org/wiki/Cu%C3%ADca"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Cu%C3%ADca",
        "situacao": "ok",
        "texto": "A cuíca ou puíta (em Angola pwita) é um instrumento musical, semelhante a um tambor, com uma haste de madeira presa no centro da membrana de couro, pelo lado interno. O som é obtido friccionando a haste com um pedaço de tecido molhado e pressionando a parte externa da cuíca com dedo, produzindo um som de ronco característico. Quanto mais perto do centro da cuíca o dedo do instrumentista estiver, m\n[…]\nA cuíca desempenha um papel rítmico importante em todos os tipos de samba. Ela é particularmente notável como elemento permanente dos grupos do Carnaval do Rio de Janeiro, que apresentam seções inteiras de tocadores de cuíca. É tão comumente usada no samba voltado para o rádio que, na ausência de um cuíca player, cantores ou outros músicos brasileiros imitam o som da cuíca com a voz.\n[…]\nExistem muitos tamanhos de cuíca, e embora seja geralmente considerada um instrumento de percussão ela não é percutida. Encaixada na parte de baixo da pele está uma haste de bambu. A extensão tonal da cuíca pode chegar a duas oitavas. Os tons produzidos tentam imitar a voz na forma de grunhidos, gemidos, soluços e guinchos, e podem estabelecer assim um ostinato rítmico.\n[…]\nA cuíca possui uma vareta de madeira fixada em uma das extremidades, no interior do tambor, no centro da pele. Essa vareta é resinada e friccionada com um pano. Alterar a pressão sobre a pele do tambor pelo lado de fora produz diferentes alturas e timbres.\n[…]\nO polegar, o indicador e o dedo médio seguram a haste no interior do instrumento com um pedaço de pano úmido, e os ritmos são articulados pelo deslizamento deste tecido ao longo do bambu. A outra mão segura a cuíca e com os dedos exerce uma pressão na pele. Quanto mais forte a haste for segurada e mais pressão for aplicada na pele mais altos serão os tons obtidos. Um toque mais leve e menos pressão irão produzir tons mais baixos.\n[…]\nJorge Ben usa a cuíca em muitas de suas canções."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Cu%C3%ADca",
        "situacao": "ok",
        "texto": "The cuíca (Portuguese pronunciation: [kuˈikɐ]) is a Brazilian friction drum with a large pitch range, produced by changing tension on the head of the drum. Cuíca is Portuguese for the gray four-eyed opossum (Philander opossum) which is known for its high-pitched cry. The cuíca is frequently used in carnivals, as well as often in samba music. The tone it produces has a high-pitched squeaky timbre. \n[…]\nThe cuíca is used to accompany a variety of different folk and urban popular dances. For example, it may be part of the instrumental ensemble for the Dança de Santa Cruz (Dance of the Holy Cross) celebrated every May in Santa Cruz, California or for the moçambique (Mozambique) dramatic dance,  bailado, in Minas Gerais. It also is used in Feast of the Cross (Feast Of The Holy Cross) dances and processions and in samba music\n[…]\nThe cuíca plays an important rhythmic role in samba music of all kinds. It is particularly notable as a fixture of Rio de Janeiro's Carnival groups, which feature entire sections of cuíca players. It is so commonly used in radio-oriented samba music that in the absence of a cuíca player, Brazilian singers or other musicians imitate the sound of the cuíca with their voices.\n[…]\nAn example of this imitation can be heard on the intro part of Dizzy Gillespie's version of \"Chega de Saudade\" (from the \"Dizzy on the French Riviera\" album, 1965) composed by Antônio Carlos Jobim. The cuíca can also be heard played by the Brazilian percussionist Airto Moreira on the 1999 reissue bonus track \"Feio\", on Miles Davis' album Bitches Brew.\n[…]\nThe instrument was also used in \"Could You Be Loved\" by Bob Marley and The Wailers, \"Soul Bossa Nova\" by Quincy Jones, \"Bird of Beauty\" by Stevie Wonder, and \"Me and Julio Down by the Schoolyard\" by Paul Simon. Along with samba, the cuíca is one of the mainly used Brazilian instruments in jazz-rock, free jazz, and Latin jazz."
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Viola caipira",
      "descricao": "Instrumento de cordas símbolo da música sertaneja de raiz."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Quantas cordas tem a viola caipira, instrumento símbolo da música sertaneja de raiz?",
    "resposta": "Dez",
    "distratores": [
      "Seis",
      "Sete",
      "Doze"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Viola_caipira"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Viola_caipira",
        "situacao": "ok",
        "texto": "A viola caipira  é um instrumento musical de cordas dedilhadas e uma das variantes regionais da viola brasileira. É também conhecido como viola sertaneja ou viola cabocla mas, a depender da cultura local, ainda pode ter  várias outras denominações: viola de pinho, viola caipira, viola sertaneja, viola de arame, viola nordestina, viola cabocla, viola cantadeira, viola de dez cordas, viola chorosa, \n[…]\nÉ um instrumento muito popular, sobretudo  no interior do Brasil, sendo um dos símbolos da música popular brasileira e especialmente da música caipira.\n[…]\nA viola caipira tem características muito semelhantes ao violão. Tanto no formato quanto na disposição das cordas e acústica, porém é um pouco menor.\n[…]\nUma característica que destaca a viola dos demais instrumentos é que o ponteio da viola utiliza muito as cordas soltas, o que resulta um som forte e sem distorções, se bem afinada. As notas ficam com timbre ainda mais forte pois este é um instrumento que exige o uso de palheta, dedeira ou principalmente unhas compridas, já que todas as cordas são feitas de aço e algumas são muito finas e duras.\n[…]\nAs 3ª e 4ª cordas são chamadas de “Requinta”, ambas afinadas em Si (B). Posuem este nome faz devido ao instrumento de sopro requinta, além de nomear um tipo menor de viola, chamado de viola requinta.\n[…]\nA viola é o símbolo da música caipira, conhecida popularmente como moda de viola.\n[…]\nNo Brasil, é um instrumento tradicional. Músicas entoadas em suas cordas atravessaram gerações e até hoje estão presentes no  dia a dia da cultura brasileira da Paulistânia.\n[…]\nEm certas regiões, por tradição, as violas carregam pequenos chocalhos feitos de guizo de cascavel, pois segundo a lenda, tem poder de proteção para a viola e para o violeiro. Segundo contam os violeiros de antigamente, o poder do guizo chega a quebrar as cordas e até mesmo o instrumento do violeiro adversário.\n[…]\nNestor da Viola\n[…]\nViola brasileira"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Maria Bonita",
      "descricao": "Maria Gomes de Oliveira, companheira de Lampião e a mais famosa mulher do cangaço, morta em 1938."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Maria Bonita, companheira de Lampião no cangaço, nasceu em qual estado nordestino?",
    "resposta": "Bahia",
    "distratores": [
      "Pernambuco",
      "Sergipe",
      "Alagoas"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Maria_Bonita"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Maria_Bonita",
        "situacao": "ok",
        "texto": "Maria Gomes de Oliveira (Santo Antônio da Glória, 17 de janeiro de 1910 – Poço Redondo, 28 de julho de 1938), conhecida como Maria de Déa ou Maria Bonita, foi uma cangaceira brasileira. Era a companheira de Virgulino Ferreira da Silva, vulgo Lampião, e a primeira mulher a participar de um grupo de cangaceiros.\n[…]\nConstantemente traída por seu companheiro, Maria tinha diversas crises de ciúmes de Lampião, mas o cangaceiro tratava sua esposa com paciência e carinho. Em 1931, inclusive, os dois viajaram para uma fazenda, a fim de desfrutar da lua de mel que nunca tiveram. Para a jovem cangaceira, no entanto, aquilo não era o suficiente. Diversos relatos afirmam que Maria, por vingança, iniciou um caso extraconjugal com João Maria de Carvalho, um comerciante.\n[…]\nExistem, porém, dúvidas sobre o parentesco dos supostos gêmeos Arlindo e Ananias Gomes de Oliveira, ambos até então considerados filhos de Maria Bonita e Lampião. Outras fontes afirmam que eles eram, na verdade, irmãos caçulas de Maria.\n[…]\nA baiana Maria Gomes de Oliveira era chamada desde a infância de Maria de Déa, em referência a sua mãe. Nem a família nem o bando de Lampião a tratavam por Maria Bonita, apelido que só se difundiu após sua morte. Há algumas versões sobre a origem desse nome. Uma delas diz que se tratou de invenção dos repórteres dos jornais do Rio de Janeiro, possivelmente inspirados no filme Maria Bonita, lançado em 1937 e baseado na obra de mesmo nome de Afrânio Peixoto, de 1921.\n[…]\nEm 2018, a jornalista Adriana Negreiros lançou o livro Maria Bonita: sexo, violência e mulheres no cangaço pela Objetiva.\n[…]\nEm 2025 ganhou a série Maria e o Cangaço na Disney+, inspirada no livro Maria Bonita: Sexo, Violência e Mulheres no Cangaço, de Adriana Negreiros -  (2025)\n[…]\nMedia relacionados com Maria Bonita no Wikimedia Commons"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Mamulengo",
      "descricao": "Teatro popular de bonecos de luva e vara do Nordeste, especialmente de Pernambuco."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "No Rio Grande do Norte, o teatro popular de bonecos que os pernambucanos chamam de mamulengo recebe qual nome?",
    "resposta": "João Redondo",
    "distratores": [
      "Babau",
      "Cassimiro Coco",
      "Briguela"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Mamulengo"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Mamulengo",
        "situacao": "ok",
        "texto": "Mamulengo é um tipo de fantoche típico do nordeste brasileiro, especialmente do estado de Pernambuco. A origem do nome é controversa, mas acredita-se que ela se originou de mão molenga - mão mole, ideal para dar movimentos vivos ao fantoche. Um ou mais manipuladores dão voz e movimento aos bonecos.\n[…]\nNa cidade  Olinda o Espaço Tiridá - Museu do Mamulengo procura preservar a tradição dos bonecos, contando em seu acervo com cerca de mil e quinhentas peças, além de realizar apresentações diárias.\n[…]\nEm Glória do Goitá, cidade da zona da mata de Pernambuco, conhecida como a \"Capital do Mamulengo\", também há o Museu do Mamulengo, que é dirigido pela Associação dos Mamulengueiros e Artesãos da Glória do Goitá, promovendo sempre apresentações e oficinas. Sem contar que, no próprio museu, podemos encontrar artesãos e mamulengueiros diariamente.\n[…]\nQuando solo, o 'brincante\" principal é o mestre da cerimônia, porém, quando há formação grupal, os mamulengueiros se dividem em uma hierarquia, sendo ela:\n[…]\nA transmissão dos saberes do mamulengo ocorre, em grande parte, por meio de linhagens familiares que preservam modos de fazer, repertórios e técnicas ao longo de gerações. Em Pernambuco, um dos exemplos mais conhecidos é o legado de *Mestre Zé Lopes* (1950–2020), reconhecido como referência do Teatro de Bonecos Popular Nordestino e atuante por décadas em Glória do Goitá, município frequentemente associado à tradição do mamulengo.\n[…]\nCida Lopes integra e coordena o *Mamulengando Alegria, grupo fundado em 2008 inicialmente por mulheres da família Lopes, dedicado à preservação e recriação do mamulengo tradicional. O grupo desenvolve apresentações, oficinas e ações culturais e, desde 2024, é reconhecido como **Ponto de Cultura*, fortalecendo a transmissão intergeracional do teatro de bonecos popular."
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Muiraquitã",
      "descricao": "Amuleto de pedra verde, em geral em forma de sapo, produzido por povos antigos da Amazônia."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "No romance Macunaíma, de Mário de Andrade, o herói passa boa parte da história tentando recuperar qual amuleto perdido?",
    "resposta": "Muiraquitã",
    "distratores": [
      "Figa de guiné",
      "Patuá",
      "Olho de boto"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Macuna%C3%ADma_(livro)",
      "https://pt.wikipedia.org/wiki/Muiraquit%C3%A3"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Macuna%C3%ADma_(livro)",
        "situacao": "ok",
        "texto": "Macunaíma, o herói sem nenhum caráter é um livro publicado em 1928 pelo polímata brasileiro Mário de Andrade, considerado a sua obra-prima.\n[…]\nEscrito em pouco tempo, mas fruto de pesquisas anteriores que o autor fazia sobre as origens e as especificidades da cultura e do povo brasileiro, narra a história do herói índio Macunaíma, desde seu nascimento na selva até sua morte e transfiguração, uma trajetória movimentada e aventuresca, em que é ajudado por seus irmãos e outros personagens, em busca de uma pedra mágica, o muiraquitã, que havia recebido de seu grande amor, Ci, a Mãe do Mato, mas que fora perdida e acabara em posse de Piaimã, um gigante comedor de gente que vivia como abastado burguês em São Paulo.\n[…]\nSempre acompanhado por seus irmãos e por um séquito de araras e jandaias, recebe homenagens por onde passa. Na viagem encontra Naipi, transformada em cachoeira por Capei, a Boiuna. O monstro aparece e é decapitado por Macunaíma, mas a cabeça permanece viva e passa a persegui-lo. No atropelo, o muiraquitã é perdido. Porém, descobre-se que a pedra havia ido parar nas mãos de um mascate peruano, Venceslau Pietro Pietra, que vivia folgadamente em São Paulo.\n[…]\nCom todo esse sucesso acadêmico, segundo Vieira & Rodrigues o Macunaíma ainda não foi estudado com profundidade no plano histórico e social, e a maioria das publicações se concentra na questão da linguagem, na intertextualidade e no gênero narrativo. A celebrada rapsódia de Mário de Andrade tem-se revelado uma fonte inesgotável para interpretações as mais variadas e também para a polêmica, e de muitas formas é uma obra \"indomável\".\n[…]\nMacunaíma, 1ª edição, em pdf."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Muiraquit%C3%A3",
        "situacao": "ok",
        "texto": "Muiraquitãs ou muyrakytãs (do tupi ybyrakytã) são artefatos talhados em pedra, chamada de amazonita, representando animais (especialmente sapos, mas também tartarugas ou serpentes). Teriam sido usados pelos povos indígenas Tapajós e Konduri, que habitavam o Baixo Amazonas até a chegada do colonizador europeu, como amuletos, símbolos de poder, e ainda como material para compra e troca de objetos va\n[…]\nApós dormirem com os Guacaris, homens de outra tribo especialmente convidados para a festividade, as índias mergulhavam no lago e traziam um barro esverdeado com o qual modelavam muiraquitãs, que eram oferecidos como amuletos aos Guacaris.\n[…]\nA trama de Macunaíma (1928), de Mário de Andrade, importante marco do modernismo brasileiro, gira em torno do resgate de um muiraquitã. Entre 1993 e 1994, circulou no Brasil a cédula de 500 mil cruzeiros com tema dedicado ao autor, a qual continha a figura do artefato.\n[…]\nEm As Aventuras de Benjamim: o Muiraquitã (2004), livro de literatura infanto-juvenil, o personagem Benjamim usa um muiraquitã (um fruto de guaraná) que concede desejos para encontrar seu pai perdido, e depois encontra uma Iara que distribui pedras de jade no formato de bichos para índias. Ao receber um muiraquitã, Benjamim se transforma em um guerreiro.[carece de fontes]?\n[…]\nMeirelles, Anna Cristina Resque (2011). Muiraquitã e contas do Tapajós no imaginário indígena: uma análise químico - mineralógica dos artefatos dos povos pré - históricos da Amazônia (PDF) (Tese de de Doutorado em Geoquímica e Petrologia). Belém: Universidade Federal do Pará. 102 páginas. Consultado em 28 de julho de 2015\n[…]\nTorres, M. (2007). «A pedra muiraquitã: O caso do rio Uruará no enfrentamento dos povos da floresta às madeireiras na Amazônia» (PDF). Revista de Direito Agrário. 20 (21): 89-119. Consultado em 28 de julho de 2015"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Muiraquitã",
      "descricao": "Amuleto de pedra verde, em geral em forma de sapo, produzido por povos antigos da Amazônia."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Segundo a lenda amazônica, quem dava os muiraquitãs de presente aos guerreiros que recebiam uma vez por ano?",
    "resposta": "As icamiabas",
    "distratores": [
      "As mães-d'água",
      "As cunhãs-poranga",
      "Os pajés"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Muiraquit%C3%A3",
      "https://pt.wikipedia.org/wiki/Icamiabas"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Muiraquit%C3%A3",
        "situacao": "ok",
        "texto": "Muiraquitãs ou muyrakytãs (do tupi ybyrakytã) são artefatos talhados em pedra, chamada de amazonita, representando animais (especialmente sapos, mas também tartarugas ou serpentes). Teriam sido usados pelos povos indígenas Tapajós e Konduri, que habitavam o Baixo Amazonas até a chegada do colonizador europeu, como amuletos, símbolos de poder, e ainda como material para compra e troca de objetos va\n[…]\nO amuleto também foi visto pelas icamiabas (ou ykamiabas) que atacaram a esquadra de Orellana em 1542, quando os espanhóis passavam pelo Espelho da Lua, região da atual cidade de Nhamundá, no Amazonas.\n[…]\nAs primeiras documentações sobre os muiraquitãs, ainda que indiretas, surgem com Orellana, que entre 1540 e 1542 desceu o rio Amazonas em toda sua extensão. Embora não mencione o objeto, através de Frei Gaspar de Carvajal, seu cronista, relata ter encontrado índias guerreiras, sem maridos, por ele denominadas Amazonas, mas chamadas pelos índios de Icamiabas, as quais possuem lendas relacionadas ao artefato.\n[…]\nAs indígenas Icamiabas, ou Amazonas de Orellana, eram mulheres guerreiras, sem maridos, que habitavam o Baixo Amazonas. Uma vez ao ano, nas fontes do rio Nhamundá, na serra Yacy-taperê (serra da lua), onde havia um lago, Yacy-uaruá (espelho da lua), faziam uma festa em nome de Iacinará ou Iaci, a lua.\n[…]\nMeirelles, Anna Cristina Resque (2011). Muiraquitã e contas do Tapajós no imaginário indígena: uma análise químico - mineralógica dos artefatos dos povos pré - históricos da Amazônia (PDF) (Tese de de Doutorado em Geoquímica e Petrologia). Belém: Universidade Federal do Pará. 102 páginas. Consultado em 28 de julho de 2015\n[…]\nTorres, M. (2007). «A pedra muiraquitã: O caso do rio Uruará no enfrentamento dos povos da floresta às madeireiras na Amazônia» (PDF). Revista de Direito Agrário. 20 (21): 89-119. Consultado em 28 de julho de 2015"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Icamiabas",
        "situacao": "ok",
        "texto": "As Icamiabas ou Iacamiabas (do tupi i + kama + îaba, \"peito partido\", ou \"mulheres sem marido\") são uma nação lendária de mulheres guerreiras da Amazônia que deu origem ao mito das Amazonas no Brasil.\n[…]\nQuando o conquistador espanhol Francisco de Orellana desceu o rio vindo dos Andes em busca de ouro, a vitória das icamiabas (nome que ele nunca usa) contra os invasores espanhóis foi narrada ao rei Carlos I, o qual, inspirado na lenda as antigas guerreiras amazonas da mitologia grega, batizou o grande rio de Rio das Amazonas. Os relatos de Orellana afirmam que a tropa fora advertida da existência dessas indígenas antes mesmo de entrar em contato com elas.\n[…]\nNo livro Macunaíma (1928) de Mário de Andrade, as icamiabas presenteavam seus amantes depois do acasalamento na Festa de Iaci com um muiraquitã, tradicional amuleto indígena. O presente serviria como recordação e tinha como intuito encorajá-los à fidelidade.\n[…]\nA semideusa indígena Yara Flor, filha da amazona que encontrou essa tribo, foi levada ainda criança para os Estados Unidos por questões de segurança, mas retornou na vida adulta, tornando-se a sua defensora, a terceira Moça Maravilha e, pelo menos em um futuro possível, a nova Mulher Maravilha. Essas mulheres guerreiras são também chamadas de Coniupuiaras, Iamaricumã e Gaboymilas, mas ainda não foram chamadas de Icamiabas.\n[…]\nUma versão anterior delas, estreando em Wonder Woman #314 (1984), mostrava uma cidade na Amazônia brasileira habitada por amazonas gregas, mas não se sabe se elas foram inspiradas na lenda das Icamiabas como a moderna versão delas.\n[…]\nAmazonas\n[…]\nMuiraquitã\n[…]\nMulheres guerreiras na cultura\n[…]\nFolclore Amazônico, Amazonas ou Icamiabas"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Dia do Folclore",
      "descricao": "Data comemorativa brasileira dedicada às tradições populares, instituída por decreto em 1965."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Por que o Dia do Folclore é comemorado justamente em 22 de agosto?",
    "resposta": "Nasceu a palavra folklore",
    "distratores": [
      "Nascimento de Câmara Cascudo",
      "Morte de Monteiro Lobato",
      "Estreia do Sítio"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Folclore",
      "https://en.wikipedia.org/wiki/William_Thoms"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Folclore",
        "situacao": "ok",
        "texto": "Folclore (do inglês folk-lore) é um gênero da cultura de origem popular, que representa a identidade social de uma comunidade através de atividades culturais que nasceram, individualmente ou coletivamente, e se desenvolveram com o povo (costumes e tradições) transmitidos entre gerações.\n[…]\nO primeiro registro do uso público de \"folk-lore\" ocorreu em agosto de 1845. Na ocasião, a revista londrina “The Atheneum” publicou uma carta recebida de Willian Thoms (sob o pseudônimo Ambrose Merton). Em comemoração, instituiu-se mundialmente o Dia do Folclore em 22 de agosto.\n[…]\nO interesse pelo folclore nasceu no fim do século XVIII, quando estudiosos como os Irmãos Grimm e Herder iniciaram pesquisas sobre a poesia tradicional na Alemanha e \"descobriu-se\" a cultura popular como oposta à cultura erudita cultivada pelas elites e pelas instituições oficiais. Logo esse interesse se espalhou por outros países e se ampliou para o estudo de outras formas literárias, músicas, práticas religiosas e outros fatos chamados na época de \"antiguidades populares\".\n[…]\nDepois de iniciar e frutificar na Europa, o estudo do folclore se estendeu ao Novo Mundo, chegando ao Brasil na segunda metade do século XIX através dos precursores Celso de Magalhães e Sílvio Romero, e aos Estados Unidos, onde em 1888, William Wells Newell, Mark Twain, Rutherford Hayes e um grupo de outros interessados fundaram a Sociedade Americana de Folclore (do inglês \"American Folklore Society\"), que publica um jornal em atividade até hoje, o Journal of American Folklore.\n[…]\nPode-se dividir as manifestações folclóricas em oito categorias:\n[…]\nFolclore brasileiro\n[…]\nCarta do Folclore Brasileiro\n[…]\nLendas do folclore brasileiro\n[…]\nFolclore inglês\n[…]\nCentro Nacional de Folclore e Cultura Popular\n[…]\nFolclore: cultura brasileira na sala de aula"
      },
      {
        "url": "https://en.wikipedia.org/wiki/William_Thoms",
        "situacao": "ok",
        "texto": "William John Thoms (16 November 1803 – 15 August 1885) was a British writer credited with coining the term \"folklore\" in 1846. Thoms' investigation of folklore and myth led to a later career of debunking longevity myths, and he was a pioneer demographer.\n[…]\nThoms is credited with inventing the term \"folklore\" in an 1846 letter to the Athenaeum. He invented this compound word to replace the various other terms used at the time, including \"popular antiquities\" or \"popular literature\". He was fond of the works of Jacob Grimm, which he considered remarkable.\n[…]\nThis corpus has been hailed as one of Thoms's \"foremost achievements: the importance of which is heightened by the absence of any national folklore archive in England\".\n[…]\nThe Folklore Society was eventually founded in 1878 and Thoms was a leading member of the Society in its early years.\n[…]\nFolklore\n[…]\nIntro to folklore\n[…]\nBoyer, R. Troy (1997). \"The Forsaken Founder, William Thoms: From Antiquities to Folklore\". The Folklore Historian. 14: 55–61.\n[…]\nWinick, Stephen (22 August 2014). \"The Two First \"Folk-Lore\" Columns | Folklife Today\". The Library of Congress. Retrieved 3 July 2024."
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Santo Antônio",
      "descricao": "Santo Antônio de Lisboa ou de Pádua, frade franciscano celebrado em 13 de junho e conhecido como santo casamenteiro."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "O santo casamenteiro nasceu em Lisboa, mas morreu numa cidade italiana que também lhe dá nome. Que cidade é essa?",
    "resposta": "Pádua",
    "distratores": [
      "Assis",
      "Florença",
      "Veneza"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Ant%C3%B3nio_de_Lisboa",
      "https://en.wikipedia.org/wiki/Anthony_of_Padua"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Ant%C3%B3nio_de_Lisboa",
        "situacao": "ok",
        "texto": "Santo António (português europeu) ou Antônio (português brasileiro) de Lisboa ou de Pádua, (Lisboa, 15 de agosto de 1195? — Pádua, 13 de junho de 1231) foi um Doutor da Igreja que viveu na viragem do século XII para o século XIII. Foi batizado com o nome de Fernando, mas o seu sobrenome de família é incerto, embora seja comum referir-se de Bulhões.\n[…]\nPosteriormente, quando a sua eloquência e cultura teológica se tornaram conhecidas, foi nomeado mestre de teologia em Bolonha, tendo, a seguir, pregado contra os albigenses e valdenses em diversas cidades do norte da Itália e no sul de França. Em seguida foi para Pádua, onde morreu aos 36 ou 40 anos.\n[…]\nSanto António é o padroeiro principal da cidade de Lisboa (São Vicente é o padroeiro do Patriarcado de Lisboa), sendo também o padroeiro secundário de Portugal (a padroeira principal é Nossa Senhora da Conceição). É igualmente padroeiro da cidade italiana de Pádua, como também, padroeiro da cidade de Campo Grande, capital do Mato Grosso do Sul.\n[…]\nSanto António nasceu em Lisboa em data incerta, numa casa, assim se pensa, próxima da Sé, às portas da cidade, no local onde posteriormente se ergueu a igreja que lhe foi dedicada. A tradição indica 15 de agosto de 1195, mas não há documento fidedigno que confirme esta data. Também foi proposto o ano de 1191, mas, segundo um seu biógrafo, o padre Fernando Lopes, as contradições em sua cronologia só se resolveriam se ele tivesse nascido em torno de 1188. Tampouco se sabe quem foram seus pais.\n[…]\nO seu esqueleto também foi preservado, bem como sua famosa língua e suas cordas vocais, além de uma túnica que usava e um manto. Essas relíquias estão depositadas na basílica do santo em Pádua.\n[…]\nBasílica de Santo Antônio de Pádua\n[…]\nIgreja de Santo António de Lisboa\n[…]\nMuseu de Santo António, em Lisboa"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Anthony_of_Padua",
        "situacao": "ok",
        "texto": "Anthony of Padua or Anthony of Lisbon (born Fernando Martins de Bulhões; 15 August 1195 – 13 June 1231) was a Portuguese Catholic priest and member of the Order of Friars Minor.\n[…]\nSt. Anthony gives his name to Mission San Antonio de Padua, the third Franciscan mission dedicated along El Camino Real in California in 1771.\n[…]\nIn 1511, Titian painted three large frescoes in the Scuola del Santo in Padua, depicting scenes of the miracles from the life of Saint Anthony: The Miracle of the Jealous Husband, which depicts the murder of a young woman by her husband; A Child Testifying to Its Mother's Innocence; and The Saint Healing the Young Man with a Broken Limb.\n[…]\nThe Austrian composer Gustav Mahler's song cycle Des Knaben Wunderhorn contains the song Des Antonius von Padua Fischpredigt, whose lyrics recount the story of Saint Anthony's sermon to the fish. This song later formed the basis for the scherzo movement of Mahler's Symphony No. 2. In correspondence, Mahler expressed amusement that his sinuous musical setting could imply St. Anthony of Padua was himself drunk as he preached to the fish.\n[…]\nThe 1931 silent film Saint Anthony of Padua (Antonio di Padova, il santo dei miracoli) was directed by Giulio Antamoro.\n[…]\nHe was played in the 1949 Italian film Anthony of Padua by Aldo Fiorelli.\n[…]\nUmberto Marino's 2002 Sant'Antonio di Padova or Saint Anthony: The Miracle Worker of Padua is an Italian TV movie about the saint. While the VHS format is without English subtitles, the DVD version released in 2005 is simply called Saint Anthony and is subtitled.\n[…]\n\"Saint Anthony of Padua\" at the Christian Iconography website\n[…]\n\"St Anthony of Padua – St Peter's Square Colonnade Saints\""
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Santo Antônio",
      "descricao": "Santo Antônio de Lisboa ou de Pádua, frade franciscano celebrado em 13 de junho e conhecido como santo casamenteiro."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "No dia de Santo Antônio, igrejas distribuem pãezinhos bentos. Segundo a crença, guardá-los na lata de mantimentos garante o quê?",
    "resposta": "Que nunca falte comida",
    "distratores": [
      "Casamento no ano",
      "Proteção contra raios",
      "Sorte no jogo"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Ant%C3%B3nio_de_Lisboa",
      "https://en.wikipedia.org/wiki/Anthony_of_Padua"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Ant%C3%B3nio_de_Lisboa",
        "situacao": "ok",
        "texto": "Santo António (português europeu) ou Antônio (português brasileiro) de Lisboa ou de Pádua, (Lisboa, 15 de agosto de 1195? — Pádua, 13 de junho de 1231) foi um Doutor da Igreja que viveu na viragem do século XII para o século XIII. Foi batizado com o nome de Fernando, mas o seu sobrenome de família é incerto, embora seja comum referir-se de Bulhões.\n[…]\nSanto António nasceu em Lisboa em data incerta, numa casa, assim se pensa, próxima da Sé, às portas da cidade, no local onde posteriormente se ergueu a igreja que lhe foi dedicada. A tradição indica 15 de agosto de 1195, mas não há documento fidedigno que confirme esta data. Também foi proposto o ano de 1191, mas, segundo um seu biógrafo, o padre Fernando Lopes, as contradições em sua cronologia só se resolveriam se ele tivesse nascido em torno de 1188. Tampouco se sabe quem foram seus pais.\n[…]\nA título de exemplo, no Brasil moças casadoiras retiram o Menino Jesus das estátuas e só o devolvem quando arranjam casamento; uma prece especial, os \"responsos\", são feitas para que ele ajude a encontrar objetos perdidos; no dia da sua festa muitas igrejas distribuem pães especialmente abençoados, os \"pãezinhos de Santo António\", que devem ser guardados numa lata de mantimentos para que não falte alimento na casa.\n[…]\nEm Salvador, na Bahia, o santo é reverenciado em praticamente todas as paróquias com a celebração da trezena, procissões e carreata, culminando com a missa festiva no dia 13 de junho, havendo duas igrejas com seu nome em que as festividades são bem mais elaboradas, quais sejam, Santo Antônio Além do Carmo, no centro histórico de Salvador, e em Santo Antônio da Barra, sem esquecer a tradicional distribuição do pão bento.\n[…]\nBasílica de Santo Antônio de Pádua\n[…]\nIgreja de Santo António de Lisboa\n[…]\nMuseu de Santo António, em Lisboa"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Anthony_of_Padua",
        "situacao": "ok",
        "texto": "Anthony of Padua or Anthony of Lisbon (born Fernando Martins de Bulhões; 15 August 1195 – 13 June 1231) was a Portuguese Catholic priest and member of the Order of Friars Minor.\n[…]\nSt. Anthony gives his name to Mission San Antonio de Padua, the third Franciscan mission dedicated along El Camino Real in California in 1771.\n[…]\nIn 1511, Titian painted three large frescoes in the Scuola del Santo in Padua, depicting scenes of the miracles from the life of Saint Anthony: The Miracle of the Jealous Husband, which depicts the murder of a young woman by her husband; A Child Testifying to Its Mother's Innocence; and The Saint Healing the Young Man with a Broken Limb.\n[…]\nThe Austrian composer Gustav Mahler's song cycle Des Knaben Wunderhorn contains the song Des Antonius von Padua Fischpredigt, whose lyrics recount the story of Saint Anthony's sermon to the fish. This song later formed the basis for the scherzo movement of Mahler's Symphony No. 2. In correspondence, Mahler expressed amusement that his sinuous musical setting could imply St. Anthony of Padua was himself drunk as he preached to the fish.\n[…]\nThe 1931 silent film Saint Anthony of Padua (Antonio di Padova, il santo dei miracoli) was directed by Giulio Antamoro.\n[…]\nUmberto Marino's 2002 Sant'Antonio di Padova or Saint Anthony: The Miracle Worker of Padua is an Italian TV movie about the saint. While the VHS format is without English subtitles, the DVD version released in 2005 is simply called Saint Anthony and is subtitled.\n[…]\nFranciscan Media: Who Was St. Anthony of Padua?\n[…]\n\"Saint Anthony of Padua\". Invisible Monastery of charity and fraternity – Christian family prayer. Archived from the original on 28 February 2018."
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Maracatu rural",
      "descricao": "Folguedo carnavalesco da Zona da Mata de Pernambuco, também chamado maracatu de baque solto."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Que cidade da Zona da Mata Norte de Pernambuco, berço de muitos grupos de caboclos de lança, é conhecida como a terra do maracatu?",
    "resposta": "Nazaré da Mata",
    "distratores": [
      "Goiana",
      "Carpina",
      "Vitória de Santo Antão"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Nazar%C3%A9_da_Mata",
      "https://pt.wikipedia.org/wiki/Maracatu_rural"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Nazar%C3%A9_da_Mata",
        "situacao": "ok",
        "texto": "Nazaré da Mata é um município brasileiro da zona da mata do estado de Pernambuco, que se estende por uma área de 141,3 km², com uma altitude média de 89 metros acima do nível do mar. Sua população é de 30.647 habitantes, sendo 24.704 residentes na zona urbana e 5.943 na zona rural.\n[…]\nNazaré da Mata é conhecida como a Capital Estadual dos Maracatus. Não é apenas uma dança, uma brincadeira das camadas menos favorecidas, mas uma tradição passada de pai para filho em que os passos, as cores perpassam uma aculturação milenar da história da região.\n[…]\nDurante o Carnaval, é a vez do povo de Nazaré da Mata mostrar o que tem de melhor: o colorido, a animação, o brilho e toda a beleza de seus maracatus como o Piaba Dourado, Estrela de Ouro e, o mais antigo de Pernambuco, o Cambinda Brasileira. O tão esperado Encontro de Maracatus acontece na segunda-feira e terça-feira de Carnaval, na praça principal. São mais de 50 grupos de brincantes com seus reis, rainhas, baianas e caboclos de lança que dançam e cantam em homenagem aos orixás.\n[…]\nEm Nazaré da Mata situa-se a Faculdade de Formação de Professores de Nazaré da Mata, um dos campi da Universidade de Pernambuco que tem sede em Recife, o qual recebeu o nome de Campus Mata Norte. Como também, a GRE Mata Norte (Gerência Regional de Educação da Mata Norte) fazendo parte da educação do município.\n[…]\nAdministrativamente, Nazaré da Mata é constituída unicamente pelo distrito sede. No município, encontra-se a Diocese de Nazaré e o palácio episcopal, abrangendo diversas cidades da região da mata norte.\n[…]\nMonsenhor Petronilo Pedrosa, foi professor da Faculdade de Formação de Professores de Nazaré da Mata e capelão do colégio de Santa Cristina.\n[…]\nDiocese de Nazaré\n[…]\n«Página oficial do município da Nazaré da Mata»"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Maracatu_rural",
        "situacao": "ok",
        "texto": "O Maracatu Rural ou Maracatu de Baque Solto é um tipo de maracatu, uma manifestação folclórica com origem no estado de Pernambuco. Tem como principal símbolo o caboclo de lança, e distingue-se do Maracatu Nação por sua organização, personagens e ritmo.\n[…]\nO Maracatu Rural significa para seus integrantes algo a mais que uma brincadeira: é uma herança secular, motivo de muito orgulho e admiração. É formado por pessoas simples, principalmente por trabalhadores rurais que com as mesmas mãos que cortam cana, lavram a terra e carregam peso, também bordam golas de caboclo, cortam fantasias, enfeitam guiadas, relhos e chapéus; dedicando-se ao bem mais valioso que possuem: a cultura.[parcial?]\n[…]\nO cortejo do Maracatu Rural diferencia-se dos outros maracatus por suas características musicais próprias e pela essência de sua origem refletida no sincretismo de seus personagens. A orquestra é formada por instrumentos de percussão e sopro.\n[…]\nOs mais antigos maracatus foram criados em engenhos de Nazaré da Mata (Zona da Mata de Pernambuco), onde seus fundadores eram trabalhadores rurais, trabalhadores do canavial e cortadores de cana-de-açúcar, entre fins do século XIX e início do XX.\n[…]\nOs personagens do Maracatu Rural são:\n[…]\nCaboclos de lança (ícones do Carnaval de Pernambuco, assim como os passistas de frevo)\n[…]\nMaracatu Nação\n[…]\nCarnaval de Pernambuco\n[…]\nHistória e fotos do Maracatu Rural\n[…]\nNazaré da Mata\n[…]\nVídeos e histórias de Cabolcos e Mestres do Maracatu pernambucano"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Panela de barro de Goiabeiras",
      "descricao": "Panela de cerâmica escura modelada à mão pelas paneleiras do bairro de Goiabeiras, em Vitória, no Espírito Santo."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Em Vitória, as paneleiras de Goiabeiras modelam panelas de barro escuro consideradas indispensáveis para qual prato típico do Espírito Santo?",
    "resposta": "Moqueca",
    "distratores": [
      "Feijoada",
      "Bobó de camarão",
      "Vatapá"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Moqueca_capixaba"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Moqueca_capixaba",
        "situacao": "ok",
        "texto": "A moqueca, muqueca ou poqueca (do quimbundo mu'keka: 'caldeirada de peixe' ou do tupi opokeka: 'fazer embrulho') é um cozido, geralmente de peixe, típico da culinária brasileira.\n[…]\nA moqueca é um prato típico presente em todo o litoral nordestino e faz parte dos destaques de cardápios de restaurantes e barracas de praias de todo o Nordeste — especialmente na Bahia. Constitui, portanto, mais uma receita que agrega valor cultural junto às mais diversas especialidades litorâneas nordestinas, como vatapá, pirão, bobó de camarão, dentre outras.\n[…]\nNa região litorânea do estado do Espírito Santo, a moqueca está presente no cardápio de 87%[carece de fontes]? dos estabelecimentos voltados à venda de refeições, como uma especialidade de forte apelo identitário. A receita é bem semelhante em todos esses estabelecimentos, com pequenas variações na forma de preparo. Na receita típica capixaba, a cor vem da tintura de urucum; o azeite é de oliva.\n[…]\nA moldura perfeita fica por conta da panela de barro, feita pelas paneleiras do bairro de Goiabeiras Velha, em Vitória. Essas artesãs moldam, queimam e tingem as panelas com cascas tiradas do manguezal. O costume de preparar e servir moqueca em panela de barro está presente em todo o Brasil.\n[…]\nAs moquecas e a torta capixaba (outra iguaria local característica da Semana Santa) são parte da identidade cultural do povo do Espírito Santo, e isso certamente explica a continuidade histórica da fabricação artesanal das panelas de barro. A cidade  de Vitória cresceu e alcançou Goiabeiras, que se transformou em um bairro da capital. Mas ali continuam sendo feitas, como sempre, as panelas pretas.\n[…]\nReceita de moqueca de peixe baiana"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Nossa Senhora Aparecida",
      "descricao": "Imagem de Nossa Senhora da Conceição encontrada por pescadores no rio Paraíba do Sul, padroeira do Brasil venerada em Aparecida, São Paulo."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Em que século três pescadores encontraram, nas águas do rio Paraíba do Sul, a imagem de Nossa Senhora Aparecida?",
    "resposta": "Século dezoito",
    "distratores": [
      "Século dezesseis",
      "Século dezessete",
      "Século dezenove"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Nossa_Senhora_da_Concei%C3%A7%C3%A3o_Aparecida"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Nossa_Senhora_da_Concei%C3%A7%C3%A3o_Aparecida",
        "situacao": "ok",
        "texto": "Nossa Senhora da Conceição Aparecida, popularmente chamada Nossa Senhora Aparecida, é um dos títulos da Virgem Maria, mãe de Jesus Cristo, referente a sua aparição a três pescadores no Rio Paraíba do Sul, em outubro de 1717. É reconhecida oficialmente como a Padroeira do Brasil.\n[…]\nNa ocasião das comemorações do tricentenário (1717-2017) do encontro da venerável imagem de Nossa Senhora da Conceição Aparecida, a Virgem Maria foi homenageada com diversos títulos eclesiásticos e civis concedidos em reconhecimento.\n[…]\nEm 12 de agosto de 2025, a Câmara dos Deputados do Brasil concedeu ao Arcanjo Miguel o título de Comandante Espiritual da Nação Brasileira, contando com a presença da imagem de Nossa Senhora da Conceição Aparecida, a qual teve seu posto renomeado para Generalíssima das Forças Armadas.\n[…]\nMuito se especula sobre a história da imagem de Nossa Senhora Aparecida antes de ser encontrada pelos pescadores, em especial os motivos pelos quais ela foi parar no leito do rio Paraíba do Sul.\n[…]\nEm 1862, às margens do Rio Paraíba do Sul, residia a família de um jovem chamado Marcelino, que tinha apenas três anos de idade naquela época. Em um momento a bordo de um barco, infelizmente, o garoto acabou caindo nas águas turbulentas do Rio Paraíba. Diante dessa situação angustiante, sua mãe, Angélica, e sua irmã, Antônia, se ajoelharam em desespero e fizeram uma fervorosa súplica à Nossa Senhora, pedindo sua intervenção divina para evitar uma tragédia.\n[…]\nA devoção nasceu em 1964, quando a professora e cafeicultora Ana Maria Negrini, de Espírito Santo do Pinhal, escreveu o artigo \"Minha Nossa Senhora de Café\", relacionando a cor da imagem de Nossa Senhora da Conceição Aparecida ao tom do café.\n[…]\nSantuário Nacional de Nossa Senhora da Conceição Aparecida\n[…]\nNossa Senhora das Lágrimas"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Iansã",
      "descricao": "Orixá dos ventos, raios e tempestades nas religiões afro-brasileiras."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Nas religiões afro-brasileiras, por qual outro nome de origem iorubá a orixá Iansã, senhora dos ventos, também é chamada?",
    "resposta": "Oiá",
    "distratores": [
      "Obá",
      "Ewá",
      "Nanã"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Ians%C3%A3",
      "https://en.wikipedia.org/wiki/Oya"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Ians%C3%A3",
        "situacao": "ok",
        "texto": "Oiá (em iorubá:  Ọya), também grafada Oyá ou Oya, é uma das mais importantes divindades femininas da religião iorubá. No Brasil, é amplamente conhecida como Iansã. Seu culto associa-se aos ventos, tempestades, ao fogo e ao movimento, além do poder de controlar e conduzir os Eguns (espíritos ancestrais).\n[…]\nA veneração a Oyá tem origem na região do rio Níger, especialmente nas cidades iorubás situadas próximas ao antigo rio Oyá. Com a diáspora africana, seus cultos foram recriados nas Américas, ocupando posição central no Candomblé e presença significativa na Umbanda.\n[…]\nO título mais difundido de Oiá no Brasil é Iansã, derivado de Ìyá Mésàn-Òrun (“Mãe dos Nove Céus”). A expressão remete ao brilho do entardecer e ao poder transformador do fogo.\n[…]\nNa santería cubana, Oiá é sincretizada com Nossa Senhora da Candelária e com Nossa Senhora da Anunciação.\n[…]\nA compreensão moderna de Oyá/Iansã resulta de diferentes tradições historiográficas e etnográficas.\n[…]\nMatory analisa Oyá/Iansã dentro das dinâmicas de poder e gênero no Candomblé contemporâneo. Para ele, a centralidade de Oiá no Brasil reflete processos transnacionais, disputas entre casas, circulação de conhecimento sacerdotal e agência feminina. Sua abordagem desloca Oyá do mito para a sociologia política do culto.\n[…]\nEm conjunto, esses autores mostram que o culto de Oyá é ao mesmo tempo africano, brasileiro, dinâmico e politicamente situado.\n[…]\nBastide, Roger (1985). As Religiões Africanas no Brasil. São Paulo: Edusp/Pioneira\n[…]\nLuz, Marco Aurélio (1995). Agadá: Dinâmica da Civilização Africano-Brasileira. Rio de Janeiro: Mazola\n[…]\nMatory, James Lorand (2005). Black Atlantic Religion. Princeton: Princeton University Press\n[…]\nVerger, Pierre (1992). Orixás: Deuses iorubás na África e no Novo Mundo. Salvador: Corrupio"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Oya",
        "situacao": "ok",
        "texto": "Ọya (Yorùbá: Ọya, also known as Oyá, Oiá, Yànsàn-án, Yansã, Iyámsá, or Iansã) is one of the principal female deities of the Yoruba pantheon. She is the oriṣa of winds, lightning, and storms and is the only oriṣa capable of controlling the Eégún (spirits of the dead), a power given to her by Babalú Ayé.\n[…]\nIn Candomblé, Oyá is known as Iansã or lyá Mésàn, or most commonly, Iansã, from the Yoruba Yánsán. She is revered as a fierce warrior, the queen of the Niger River, and the mother of nine. Iansã controls mysteries surrounding the dead and is commonly associated with the color red in the Angola-Congo nation. Her salutation is \"Eeparrei!\" or \"Epahhey, Oia!\"\n[…]\nIansã, as in Yoruba religion, commands winds, storms, and lightning. She is the queen of the river Niger and the mother of nine. She is a warrior and is unbeatable. Attributes of Iansã include great intensity of feelings, sensations, and charm. Another ability attributed to Iansã is control over the mysteries that surround the dead. Iansã is syncretized with Saint Barbara. In the Candomblé nação (association) of Angola Congo, Iansã is associated with the color red.\n[…]\nAcarajé is a spherical patty made with peeled, crushed black-eyed peas, stuffed with small shrimp, okra, crushed peanuts, and other savory, piquant spices. The ball-like patty is fried in dendê oil (red palm oil). It's a traditional Afro-Brazilian dish that is also a traditional offering to Iansã in the Candomblé tradition. A simple, unseasoned form of acarajé is used in rituals and a version served with various condiments is sold as a common street food in Bahia in the northeast of Brazil.\n[…]\nIpeté and bobo de inhame are also associated with Iansã.\n[…]\nYoruba religion\n[…]\nCharles Spencer King. Nature's Ancient Religion."
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Oxóssi",
      "descricao": "Orixá da caça e das matas nas religiões afro-brasileiras, representado com arco e flecha."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "No Rio de Janeiro, o orixá caçador Oxóssi é associado a qual santo católico, padroeiro da cidade?",
    "resposta": "São Sebastião",
    "distratores": [
      "São Jorge",
      "São Jerônimo",
      "São Lázaro"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Ox%C3%B3ssi"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Ox%C3%B3ssi",
        "situacao": "ok",
        "texto": "Oxóssi ou Oxoce, em Iorubá Ọ̀ṣọ́ọ̀sì, é o Òrìṣà (Orixá) da caça, das florestas, dos animais, da fartura, do sustento. Sua história origina-se na religião tradicional Yorubá, bem como os demais Orixás. É o caçador de Àṣẹ (Axé), aquele que caça e busca as energias positivas e todas as coisas boas para um Ilé (Casa), para um Kanzo (Terreiro).\n[…]\nO nome Oxóssi (Ọ̀ṣọ́ọ̀sì, em Iorubá) vem do termo iorubá Ọ̀ṣọ́wùsì, que significa \"Caçador Popular\" e \"Guardião Popular\".\n[…]\nỌdẹ Dana Dana– Ọdẹ Dana Dana em verdade é um Vodum da tradição Jeje-Fom do Benim, que nos territórios Ketu e de tradições Iorubas acaba aparecendo associado como esta mais uma qualidade de Oxóssi. Assim, tem ligação com o Orixá Èṣù e Òsányìn (Ossanhe), o Orixá das folhas com o qual Oxóssi vive na floresta, de forma semelhante àỌdẹ Onisewe.[carece de fontes]? É ele o Orixá que entra e sai da mata sem temer a Eguns e a própria morte. Veste azul claro, muito impetuoso e não foge à toa.\n[…]\nApesar de ser possível fazer preces e oferendas a Oxóssi para as mais diversas facetas da vida, é justamente pelas características de expansão e fartura desse Orixá que os fiéis costumam solicitar o seu auxílio para solucionar problemas no trabalho e desemprego. Afinal, a \"busca pelo pão de cada dia\" no trabalho assalariado hoje se paraleliza com o antigo papel do caçador na alimentação tribal.\n[…]\nOxóssi era uma das entidades cultuadas, embora os santos católicos a ele relacionado não tenham espaço nos seus ritos, cantos e cosmovisão. Em Pernambuco foi relacionado com o Arcanjo Miguel, na Bahia foi relacionando a São Jorge, e no centro-sul com São Sebastião. Em Salvador, no dia de Corpus Christi, é realizada uma missa chamada de \"missa de Oxóssi\", com a participação das ialorixás do candomblé da Casa Branca do Engenho Velho.\n[…]\nÒsóòsì Ode òkè àró\n[…]\nOxóssi na Umbanda - Luz Umbanda"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Boi de mamão",
      "descricao": "Folguedo popular do litoral do Sul do Brasil, com personagens como o boi, a bernúncia e a Maricota."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Com a bernúncia e a gigante Maricota, o boi de mamão de Santa Catarina é uma variante sulista de qual folguedo popular?",
    "resposta": "Bumba meu boi",
    "distratores": [
      "Cavalhada",
      "Folia de Reis",
      "Congada"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Boi_de_mam%C3%A3o"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Boi_de_mam%C3%A3o",
        "situacao": "ok",
        "texto": "O boi de mamão é uma expressiva manifestação folclórica típica do litoral do estado de Santa Catarina, Brasil. Ocorre também em algumas cidades do interior de Santa Catarina e litoral do Paraná, até onde se tem notícia, trazido até lá por imigrantes catarinenses. Trata-se de um auto em tom cômico, mas com um elemento central dramático: a morte e a ressurreição do boi, apresentando elementos comuns\n[…]\nPesquisadores como o folclorista Doralécio Soares, citando diversos argumentos (como registros históricos oficiais e semelhanças entre o enredo, cantorias, musicalidade e teatralidade) acreditam que o boi-de-mamão nasceu em Santa Catarina, mas originado do bumba-meu-boi nordestino, trazido provavelmente por imigrantes vindos da Região Nordeste.\n[…]\nDe acordo com o mesmo pesquisador, o primeiro registro oficial no Brasil citando o \" boi-de-mamão\" data de 1870, registrado pelo catarinense José Boiteux em seu livro de 1930 \"Águas Passadas\", o qual afirma, no mesmo registro, que a brincadeira também era chamada de \"bumba-meu-boi\".\n[…]\nFato é que brincadeiras populares, das quais o boi (vivo ou de fantasia) é o personagem principal são tradicionais em toda a Península Ibérica e datam muito antes da Idade Moderna, o que deve ter contribuído ou para criação do boi-de-mamão por imigrantes europeus em Santa Catarina a partir do século XVIII ou pelo menos na assimilação do \"bumba-meu-boi\" nordestino pelos imigrantes ibéricos e seus descendentes no Estado.\n[…]\nAlém de denominação antiga de \"bumba-meu-boi\", registrada no século XIX por José Boiteux, o \"boi-de-mamão\", denominação mais popular da brincandeira, também fora chamado de \"boi-de-pano\", \"boi falso\", \"boi-mamão\", entre outras.\n[…]\nCada grupo deveria ser único com sua criatividade e apetrechos (que não falta na ilha de Santa Catarina). (2022)\n[…]\n«Página sobre o boi-de-mamão (com fotos)»\n[…]\n«Cultura, Costumes e Tradições da Ilha de Santa Catarina»"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Maracatu nação",
      "descricao": "Cortejo carnavalesco afro-brasileiro de Pernambuco, também chamado maracatu de baque virado, com rei, rainha e batuque."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Nos anos noventa, que movimento musical do Recife, liderado por Chico Science, misturou os tambores do maracatu com rock e hip-hop?",
    "resposta": "Manguebeat",
    "distratores": [
      "Tropicália",
      "Axé music",
      "Movimento Armorial"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Manguebeat"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Manguebeat",
        "situacao": "ok",
        "texto": "Manguebeat (também grafado como manguebit ou mangue beat) é um movimento de contracultura brasileiro. Surgiu a partir de 1991, na cidade de Recife, e se destaca pela combinação original de diversos gêneros musicais, unindo ritmos regionais, como o maracatu, o rock, o hip hop, o funk e a música eletrônica.\n[…]\nA base do Manguebeat começou no final da ditadura militar no Brasil, no início da década de 1980. O relaxamento da censura aumentou a disponibilidade de música importada, especialmente dos Estados Unidos e do Reino Unido, levando a um aumento do rock brasileiro. No Recife, universitários, entre eles alguns dos fundadores do movimento, DJ Renato L.\n[…]\nAo ouvir Chico Science pela primeira vez em uma performance mashup de Loustal e Lamento Negro, Fred 04 pensou que a combinação da justaposição local/global, bem como a localização geográfica, poderia lançar o que viria a ser o movimento Mangue em algo que destacaria a diversidade do Recife.\n[…]\nEm 1996, Chico Science entendia que o manguebeat não tinha alcançado sucesso comercial coletivamente pois o mercado nacional estava mais interessado em grupos como É o Tchan! e as bandas do movimento não pretendiam fazer parte disso. O jornalista Ricardo Alexandre entende que bandas de manguebeat como Mestre Ambrósio e Paulo Francis Vai Pro Céu não tiveram sucesso nessa época pois o rock alternativo não conseguia mais ter o destaque dos anos anteriores.\n[…]\nO mangue beat, movimento musical e estético que nasceu em Pernambuco nos anos 1990, mudou a visibilidade das periferias e das manifestações culturais da Região Metropolitana do Recife e colocou o estado na rota do mercado musical mundial, após o lançamento de bandas como Chico Science e Nação Zumbi e Mundo Livre S.A.\n[…]\n«Site oficial do movimento»\n[…]\n«Mangue, Site Trama»"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Jangada",
      "descricao": "Embarcação de pesca de madeira, com vela triangular, típica do litoral do Nordeste do Brasil."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Em 1942, que cineasta americano filmava a saga dos jangadeiros cearenses quando o líder deles, Jacaré, morreu afogado no Rio?",
    "resposta": "Orson Welles",
    "distratores": [
      "Walt Disney",
      "John Ford",
      "Alfred Hitchcock"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/It%27s_All_True_(film)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/It%27s_All_True_(film)",
        "situacao": "ok",
        "texto": "It's All True is an unfinished Orson Welles feature film comprising three stories about Latin America. \"My Friend Bonito\" was supervised by Welles and directed by Norman Foster in Mexico in 1941. \"Carnaval\" (also known as \"The Story of Samba\") and \"Jangadeiros\" (also known as \"Four Men on a Raft\") were directed by Welles in Brazil in 1942. It was to have been Welles's third film for RKO Radio Pict\n[…]\nIn 1981 Fred Chandler, Paramount's director of technical services, was looking for storage space in the studio's Hollywood vault when he happened across the long-forgotten footage from It's All True. He found 250 metal film cans labeled \"Bonito\" and \"Brazil\", each holding held eight to ten rolls of black-and-white nitrate negative. Seeing a few shots of the \"Jangadeiros\" sequence, Chandler recognized it immediately. Orson Welles was told of the discovery but he refused to look at it.\n[…]\nThe six-part 1987 BBC-TV series, The RKO Story, devoted its fourth episode—titled \"It's All True\"—to Orson Welles's time at RKO. The last 20 minutes of the hour-long episode recount the troubled production of It's All True. Music, sound effects and an excerpt from the first episode of Welles's subsequent CBS Radio series, Hello Americans, were added to the silent recovered footage, nearly all from the \"Carnaval\" episode.\n[…]\nIn her book, It's All True: Orson Welles's Pan-American Odyssey (2007), Catherine L. Benamou presents an inventory of the surviving It's All True footage stored in the UCLA Film and Television Archive nitrate vaults. These materials were present in a June 2000 inventory.\n[…]\n\"Life Goes to Rio Party; Orson Welles frolics at famous Mardi Gras\". Life, May 18, 1942, pp. 99–101\n[…]\nOrson Welles filming at Urca Casino (April 1942), b+w, silent, 2:33 (stock footage)\n[…]\nOrson Welles and the Hollywood System — program about It's All True at the UCLA Film and Television Archive (August 10, 2006)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/It%27s_All_True",
        "situacao": "ok",
        "texto": "It's All True é um filme estadunidense não finalizado de 1942 dirigido por Orson Welles. Era para ter sido o terceiro trabalho de Welles para a RKO Pictures, depois de Cidadão Kane (1941) e Soberba (1942). O projeto foi uma coprodução da RKO e do Escritório do Coordenador de Assuntos Interamericanos que foi posteriormente extinto pela RKO.\n[…]\nIt's All True foi considerado um filme perdido, até que, em 1985, os negativos de \"Four Men on a Raft\" foram descobertos num depósito da Paramount e cuidadosamente recuperados graças à colaboração de instituições de diversos países. A produção inacabada foi o tema de um documentário de 1993, É tudo verdade – Um filme inacabado de Orson Welles, escrito e dirigido por Richard Wilson, Bill Krohn e Myron Meisel.\n[…]\nEm 1941, Orson Welles concebeu It's All True como um filme antológico que mistura documentários e docuficção. Era para ser o terceiro filme feito pelo diretor para a RKO Pictures, com a qual ele rodou Cidadão Kane (1941) e Soberba (1942). Composto de três episódios, tem uma parte filmada no México, chamada My friend Bonito, e duas no Brasil, Carnaval (ou The story of samba) e Jangadeiros (Four men on a raft).\n[…]\nElliot Paul, que estava sob contrato com Welles para escrever \"The Story of Jazz\", é creditado como roteirista do filme.\n[…]\nEm 1956, RKO lançou Arenas Sangrentas, um filme sobre a amizade entre um jovem mexicano e um touro que está destinado a morrer na arena, mas é poupado pela multidão. Muita controvérsia cercou o filme quando seu roteirista, \"Robert Rich\", recebeu um Oscar de Melhor História Original. Orson Welles disse mais tarde que como não tinha permissão para trabalhar por ter seu nome incluído na lista negra de Hollywood, Dalton Trumbo escreveu o roteiro de Arenas Sangrentas sob o pseudônimo Robert Rich.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Nanã",
      "descricao": "Orixá das religiões afro-brasileiras ligada à lama, aos pântanos e à morte, considerada a mais velha das divindades das águas."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Nanã, orixá anciã ligada à lama e aos pântanos, é associada no sincretismo a qual santa católica, avó de Jesus?",
    "resposta": "Sant'Ana",
    "distratores": [
      "Santa Bárbara",
      "Santa Luzia",
      "Santa Rita"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Nan%C3%A3"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Nan%C3%A3",
        "situacao": "ok",
        "texto": "Nanã, Nanan Buluku, Anamburucu, Borocô, Nanamburucu (em iorubá: Nanan Buruku) ou Nanã Buruquê é o ser supremo na religião do povo Fon (África Ocidental), e um vodum e orixá em tradições afro-americanas. No Candomblé brasileiro, é responsável pelos portais de entrada (reencarnação) e saída (desencarne), identificada no jogo do merindilogum pelo odu ejilobom e representada materialmente através do a\n[…]\nNanã é cultuada no candomblé Jeje como vodum e, no Candomblé Queto como um orixá da chuva, das águas paradas, mangue, pântano, terra molhada, lama e considerada a mãe dos orixás Obaluaiê, Iroco, Oçânhim, Oxumarê e Ieuá. Nanã é chamada carinhosamente de \"Avó\", por ser usualmente imaginada como uma anciã. É cultuada em todo o Brasil nas religiões afro-brasileiras. Seu emblema é o ibiri, que caracteriza sua relação com os espíritos ancestrais.\n[…]\nTambém conta-se que Nanã era como uma juíza, mas era tendenciosa em ajudar mais as mulheres.\n[…]\nA associação de Nanã com as lagoas, a lama, os pântanos e as águas profundas é profundamente desenvolvida nas religiões afro-brasileiras. No candomblé, Nanã é descrita por como o «orixá da lama do fundo das águas», tendo como elementos naturais a «lama» e o «pântano» e estando associada à senioridade, sabedoria e também à morte.\n[…]\nA representação de Nanã por meio de águas paradas ou profundas também a diferencia, no sistema simbólico afro-brasileiro, de outras divindades aquáticas. Enquanto Oxum é principalmente associada a rios, lagoas e cachoeiras e Iemanjá ao mar e aos grandes rios, Nanã é relacionada à lama existente no fundo das águas e aos pântanos.\n[…]\nAssim, nas tradições afro-brasileiras, Nanã encontra-se especialmente associada à lama, aos pântanos, às águas profundas e ao fundo dos corpos d'água; elementos que se articulam simbolicamente com temas como antiguidade, ancestralidade, criação, senioridade, sabedoria e morte.\n[…]\nMistérios de Nanã"
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
