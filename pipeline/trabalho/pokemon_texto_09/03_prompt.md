Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Jogos Eletrônicos** (tema **Entretenimento**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Galar",
      "descricao": "Região fictícia dos jogos Pokémon Sword e Shield, da oitava geração, inspirada na Grã-Bretanha."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Trens a vapor, castelos, chá e estádios lotados: a região de Galar, de Pokémon Sword e Shield, foi desenhada a partir de qual país?",
    "resposta": "Reino Unido",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Galar",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Sword_and_Shield"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Galar",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Sword_and_Shield",
        "situacao": "ok",
        "texto": "Pokémon Sword and Pokémon Shield are 2019 role-playing video games developed by Game Freak and published by The Pokémon Company and Nintendo for the Nintendo Switch console. They are the first instalments in the 8th generation of the Pokémon video game series. First teased at E3 2017 and announced in February 2019, the games were released on 15 November 2019.\n[…]\nPokémon Sword and Shield are set in the Galar Region, inspired by the United Kingdom. Galar consists of numerous cities and towns, with a route system separating major settlements. Random encounters with wild Pokémon typically occur in tall grass or bodies of water along routes and they might chase or run away from the player depending on their disposition.\n[…]\nSword and Shield are set in Galar, a fictional region inspired by the United Kingdom, with several of its landmarks resembling places such as Bath, Somerset and York. Within the Galar Region lie countryside towns featuring cottages and Victorian architecture to the south. There are also Industrial Revolution and steampunk references. Many of the region's towns and cities feature Pokémon Gyms stylised like football stadiums, showcasing the games' Dynamax and Gigantamax mechanic.\n[…]\nThree days later, the player faces and defeats Leon in the final battle and becomes the new Galar League Champion.\n[…]\nUnlike previous core series games, many pre-existing Pokémon are not available in Sword and Shield, and only Pokémon that appear in the Galar region can be transferred from previous titles via Pokémon Home.\n[…]\nPokémon Scarlet and Violet managed to sell more copies and became the fastest-selling switch game, surpassing Sword and Shield. As of May 2025, the games had sold 26.72 million copies worldwide, becoming the third best-selling titles in the Pokémon video game series, behind Pokémon Red and Blue and Pokémon Scarlet and Violet."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Sword_e_Shield",
        "situacao": "ok",
        "texto": "Pokémon Sword e Pokémon Shield (ポケットモンスター ソード・シールド, Poketto Monsutā Sōdo・Shīrudo; Monstros de Bolso Sword・Shield, que traduzidos do inglês para o português significa Espada e Escudo, Espada e Escudo em japonês é respectivamente 剣 Ken e 盾 Tate) são dois jogos eletrônicos de RPG, desenvolvidos pela Game Freak e publicados pela The Pokémon Company e Nintendo. Fazem parte da oitava geração da série Po\n[…]\nO planejamento do conceito de Sword e Shield começou imediatamente após a conclusão de Pokémon Sun e Moon em 2016, enquanto a produção total começou um ano depois, em setembro de 2017. Como nos títulos anteriores, eles narram a jornada de um jovem treinador Pokémon com o objetivo de se tornar o Pokémon Campeão, desta vez na nova região de Galar, que fica no Reino Unido.\n[…]\nSword e Shield ocorre na região de Galar, que fica no Reino Unido. Tal como acontece com todas as regiões, Galar consiste em várias cidades e vilas ligadas por \"Rotas\"; no entanto, há também uma área de mundo aberto no centro da região conhecida como \"Área Selvagem\", um conceito novo para a série. Encontros aleatórios com Pokémon selvagens pode ocorrer em grama alta ou em corpos d'água ao longo de rotas ou na área selvagem.\n[…]\nPokemon Sword e Pokémon Shield acontece na região de Galar (ガラル地方, Galar-chihō), uma grande e estreita extensão de terra e uma das muitas regiões do mundo Pokémon. O diretor do jogo Shigeru Ohmori descreveu-o como um cenário mais moderno. A região em si é inspirada na Grã-Bretanha, com seus muitos marcos que se assemelham a lugares como as Casas do Parlamento e o gigante de Cerne Abbas. Na região de Galar encontram-se cidades rurais com casas de campo e arquitetura vitoriana ao sul.\n[…]\nAo contrário de outros jogos Pokémon básicos, nem todas as espécies Pokémon existentes aparecem ou podem ser usadas no Sword e Shield.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Wyndon",
      "descricao": "Metrópole do sul da região de Galar, nos jogos Pokémon Sword e Shield, onde acontece a final do torneio da Liga."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Em Sword e Shield, a final do torneio de Galar acontece em Wyndon, a grande metrópole do sul da região. Ela se inspira em qual cidade?",
    "resposta": "Londres",
    "distratores": [
      "Edimburgo",
      "Manchester",
      "Liverpool"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Wyndon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Wyndon",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Goldenrod",
      "descricao": "Maior cidade da região de Johto, nos jogos Pokémon Gold e Silver, com loja de departamentos, torre de rádio e estação do Trem Magnético."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Goldenrod, a maior cidade de Johto, com loja de departamentos, torre de rádio e trem magnético, se inspira em qual cidade japonesa?",
    "resposta": "Osaka",
    "distratores": [
      "Kobe",
      "Nara",
      "Nagoya"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Goldenrod_City"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Goldenrod_City",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Palácio Parfum",
      "descricao": "Palácio luxuoso com grandes jardins na região de Kalos, nos jogos Pokémon X e Y."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Em X e Y, o Palácio Parfum, de Kalos, com jardins enormes e salões dourados, se inspira em qual palácio francês?",
    "resposta": "Versalhes",
    "distratores": [
      "Fontainebleau",
      "Louvre",
      "Chambord"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Parfum_Palace"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Parfum_Palace",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Equipe Rocket",
      "descricao": "Organização criminosa da franquia Pokémon, representada no anime pela dupla Jessie e James e pelo Meowth falante."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em Red e Blue, o esconderijo secreto da Equipe Rocket fica escondido debaixo de um salão de jogos. Em que cidade de Kanto?",
    "resposta": "Celadon",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Rocket_Hideout"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Rocket_Hideout",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Pokémon: O Filme",
      "descricao": "Primeiro filme da franquia Pokémon, em que Ash e Pikachu enfrentam o clone Mewtwo, lançado no Japão no fim dos anos noventa."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em Pokémon: O Filme, Mewtwo convida os melhores treinadores para o castelo dele, numa ilha cercada por uma tempestade. Que ilha é essa?",
    "resposta": "Ilha Nova (New Island)",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/New_Island",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_The_First_Movie"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/New_Island",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_The_First_Movie",
        "situacao": "ok",
        "texto": "Pokémon: The First Movie is a 1998 Japanese animated fantasy adventure film directed by Kunihiko Yuyama. It is the first in the Pokémon anime film series. The film was first released in Japan on July 18, 1998, to positive reviews, with praise directed at the film's emotional impact and exploration of ethical topics such as cloning, genetic modification, and existentialism.\n[…]\nHowever, after Mewtwo realizes his purpose as a weapon for Giovanni's benefit, he destroys Team Rocket's headquarters and returns to New Island, plotting to exact revenge against humanity and Pokémon alike.\n[…]\nBack in Old Shore Wharf, the now-restored Nurse Joy reopens the Pokémon Center to shelter the trainers. As the storm outside clears up, Ash spots Mew flying through the clouds and tells his friends how he saw another legendary Pokémon the day he left Pallet Town for his journey. Meanwhile, Team Rocket find themselves stranded on a revitalized New Island, unable to remember how they got there, but enjoy their time nonetheless.\n[…]\nfor Nintendo 3DS and Wii U was heralded by the tagline \"Mewtwo Strikes Back!\" in a gameplay trailer. Instead of Ichimura, Mewtwo is voiced by Keiji Fujiwara in Super Smash Bros. for Nintendo 3DS and Wii U and Super Smash Bros. Ultimate. Elements and references from the second Mewtwo in Pokémon the Movie: Genesect and the Legend Awakened are included in later games such as its Mega Evolution, Final Smash, and Boxing Ring title.\n[…]\nDuring the end credits of Pokémon the Movie: The Power of Us (2018), it was announced that a CGI remake was set to release in the following year. In December 2018, the release date of the remake was revealed as July 12, 2019. Pokémon fansite Serebii reported that the film, titled Pokémon: Mewtwo Strikes Back – Evolution, would be directed by Kunihiko Yuyama and Motonori Sakakibara.\n[…]\nPokémon: The First Movie at Box Office Mojo"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon%3A_The_First_Movie",
        "situacao": "ok",
        "texto": "Pokémon: The First Movie: Mewtwo Strikes Back, geralmente referido como Pokémon: The First Movie, originalmente lançado como Pocket Monsters the Movie: Mewtwo Strikes Back! (劇場版ポケットモンスター ミュウツーの逆襲, Gekijōban Poketto Monsutā: Myūtsū no Gyakushū), é um filme de anime de 1998, dirigido por Kunihiko Yuyama, o diretor chefe da série de televisão Pokémon. Foi o primeiro filme da franquia Pokémon.\n[…]\nPrestes a embarcar para New Island, onde o duelo ocorrerá, uma tempestade se forma impedindo de os treinadores embarcarem, além de que o sumiço da Enfermeira Joy da cidade impede que, caso algum Pokémon se machuque, este possa ser recuperado no Centro Pokémon. Mas a tempestade não impede treinadores de se arriscarem por água ou ar. Ash e seus amigos também decidem atravessar o oceano, pegando carona em um barco com a Equipe Rocket, disfarçada de Vikings.\n[…]\nAsh, Brock e Misty chegam à ilha onde ocorrerá o campeonato e são recebidos pela serva do treinador. A Equipe Rocket não tem a mesma sorte. Sem Pokémon de água, eles usam seus Pokémon normais e quase se afogam, chegando com desespero à ilha e infiltrando-se nela. No saguão principal, Ash encontra outros treinadores que conseguiram chegar a New Island, enquanto aguarda a apresentação do anfitrião.\n[…]\nQuando este é apresentado, alguns treinadores ficam inconformados, ao verem que o treinador é também um Pokémon. Mesmo assim, Mewtwo convida os treinadores a enfrentá-lo em uma arena especial. Ao mesmo tempo, a Equipe Rocket explora o subsolo do castelo, encontrando um pequeno laboratório com Venusaur, Charizard e Blastoise em tubos. Jessie e James descobrem que estes são Pokémon clonados e também o último depoimento do criador de Mewtwo.\n[…]\nOs clones saem do estado de hibernação, para se juntarem a Mewtwo na arena de batalha. Mew, o misterioso Pokémon que seguiu a Equipe Rocket até a ilha, vai atrás dos clones.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Academia Blueberry",
      "descricao": "Escola de intercâmbio da expansão The Indigo Disk, de Pokémon Scarlet e Violet, famosa pelo Terário subaquático."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Na expansão The Indigo Disk, de Scarlet e Violet, o jogador faz intercâmbio na Academia Blueberry. Em que região ela fica?",
    "resposta": "Unova",
    "distratores": [
      "Kalos",
      "Galar",
      "Kanto"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Blueberry_Academy",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Scarlet_and_Violet"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Blueberry_Academy",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Scarlet_and_Violet",
        "situacao": "ok",
        "texto": "Pokémon Scarlet and Pokémon Violet are 2022 role-playing video games developed by Game Freak and published by Nintendo and The Pokémon Company for the Nintendo Switch. They are the first installments in the ninth generation of the Pokémon video game series. They were announced in February 2022 and released on 18 November 2022. The games later received a downloadable content (DLC) expansion pass st\n[…]\n\"Celestial\" was later remixed by Fox for the end credits of the Scarlet and Violet's DLC expansions. Unlike other songs in the games, \"Celestial\" is not included in the official soundtrack release for Scarlet and Violet.\n[…]\nOn 27 February 2023, the Pokémon Day presentation featured an announcement trailer for the downloadable expansion pack, The Hidden Treasure of Area Zero, which contained two DLC expansions: The Teal Mask and The Indigo Disk. The first part, The Teal Mask, focusing on the Legendary Pokémon Ogerpon, was released on 13 September 2023, and the second, The Indigo Disk, focusing on the Legendary Pokémon Terapagos, was released on 14 December 2023.\n[…]\nIn The Teal Mask, based on the legend of Momotarō, the player embarks on a school trip organized by the academy to the land of Kitakami, which would also coincide with a festival in the village, while uncovering the truth behind a local legend. In The Indigo Disk, the player studies at their Academy's sister school, Blueberry Academy, as an exchange student, eventually traveling back to Area Zero to conclude the plot.\n[…]\nProduced by Wit Studio, it is based on the Paldea region as a tie-in to Scarlet and Violet, although it is not part of the main anime series. Each episode focuses on a different student at the Academy, with each overcoming a problem over the course of the episode.\n[…]\nMedia related to Pokémon Scarlet and Violet at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Scarlet_e_Violet",
        "situacao": "ok",
        "texto": "Pokémon Scarlet (ポケットモンスター スカーレット, Poketto Monsutā Sukāretto, Monstros de Bolso Escarlate) e Pokémon Violet (ポケットモンスター バイオレット, Poketto Monsutā Baioretto, Monstros de Bolso Violeta) são dois jogos eletrônicos de RPG desenvolvidos pela Game Freak e publicados pela Nintendo e The Pokémon Company para Nintendo Switch. Eles são os primeiros parcelas da nona geração da série de jogos eletrônicos Pokémon\n[…]\nEm Scarlet e Violet, o jogador frequenta a Academia Naranja (Scarlat) ou a Academia Uva (Violet), que realiza anualmente uma \"Treasure Hunt\" incentivando os alunos a buscarem algo que considerem valioso, explorando a região. Depois de encontrar o lendário Pokémon Koraidon ou Miraidon, que se junta e auxilia o jogador apesar de ter perdido sua capacidade de batalha, o jogador é encorajado a participar de três histórias: Victory Road, Starfall Street e Path of Legends.\n[…]\n\"Celestial\" foi posteriormente remixada pela Fox para os créditos finais das expansões DLC de Scarlet e Violet. Ao contrário de outras músicas nos jogos, \"Celestial\" não está incluída no lançamento oficial da trilha sonora de Scarlet e Violet.\n[…]\nEm The Teal Mask, baseado na lenda de Momotarō, o jogador embarca em uma viagem escolar organizada pela academia para a terra de Kitakami, que também coincidiria com um festival na vila, enquanto descobre a verdade por trás de uma lenda local. Em The Indigo Disk, o jogador estuda na escola irmã de sua Academia, a Academia Blueberry, como aluno de intercâmbio, eventualmente viajando de volta para a Área Zero para concluir a trama.\n[…]\nProduzida pelo Wit Studio, ela é baseada na região de Paldea como uma conexão com Scarlet e Violet, embora não faça parte da série principal de anime. Cada episódio se concentra em um aluno diferente da Academia, com cada um superando um problema ao longo do episódio.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Ilhas Seafoam",
      "descricao": "Arquipélago de cavernas geladas ao sul de Kanto, nos jogos Pokémon Red e Blue."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em Red e Blue, qual ave lendária espera o jogador no fundo das cavernas geladas das Ilhas Seafoam?",
    "resposta": "Articuno",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Seafoam_Islands"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Seafoam_Islands",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Ruínas de Alph",
      "descricao": "Ruínas antigas da região de Johto, nos jogos Pokémon Gold e Silver, com câmaras de painéis de pedra e inscrições misteriosas."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em Gold e Silver, que pokémon psíquico, com corpo em forma de símbolos, habita as câmaras das Ruínas de Alph, em Johto?",
    "resposta": "Unown",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Ruins_of_Alph"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Ruins_of_Alph",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Grande Cratera de Paldea",
      "descricao": "Enorme cratera no centro da região de Paldea, nos jogos Pokémon Scarlet e Violet."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em Scarlet e Violet, no fundo da Grande Cratera de Paldea, fica um lugar proibido onde vivem os pokémon paradoxo. Como ele se chama?",
    "resposta": "Área Zero",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Area_Zero"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Area_Zero",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Mt. Moon",
      "descricao": "Montanha com cavernas entre Pewter e Cerulean, em Kanto, nos jogos Pokémon Red e Blue, famosa pelos Clefairy e pelos fósseis."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em Red e Blue, no fim do Mt. Moon, o jogador fica com um de dois fósseis. Que pokémon podem renascer deles?",
    "resposta": "Kabuto e Omanyte",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Mt._Moon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Mt._Moon",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Sootopolis",
      "descricao": "Cidade da região de Hoenn, nos jogos Pokémon Ruby e Sapphire, cercada de paredões de rocha e acessível por mergulho ou voo."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Em Ruby e Sapphire, a cidade de Sootopolis, onde fica o ginásio de Wallace, foi construída dentro de quê?",
    "resposta": "Uma cratera",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Sootopolis_City"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Sootopolis_City",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Silph",
      "descricao": "Empresa da cidade de Saffron, em Kanto, fabricante de Poké Bolas e outros itens nos jogos Pokémon."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em Red e Blue, a Equipe Rocket toma o prédio da Silph, em Saffron. Que invenção da empresa os vilões querem roubar?",
    "resposta": "A Master Ball",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Silph_Co."
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Silph_Co.",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Slowpoke",
      "descricao": "Pokémon da Água/Psíquico de primeira geração, número 79 da Pokédex Nacional, rosado e de cauda longa."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em Gold e Silver, por que a Equipe Rocket invade o poço dos Slowpoke, na cidade de Azalea, em Johto?",
    "resposta": "Para cortar e vender as caudas",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Slowpoke_Well"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Slowpoke_Well",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Lago da Fúria",
      "descricao": "Lago da região de Johto, nos jogos Pokémon Gold e Silver, onde aparece um Gyarados vermelho."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em Gold e Silver, os Magikarp do Lago da Fúria são forçados a evoluir em Gyarados furiosos. O que provoca isso?",
    "resposta": "Um sinal de rádio da Equipe Rocket",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Lake_of_Rage"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Lake_of_Rage",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Vermilion",
      "descricao": "Cidade portuária da região de Kanto, nos jogos Pokémon Red e Blue, onde fica o ginásio elétrico do Tenente Surge."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Viridian, Cerulean, Vermilion, Lavender, Celadon e Fuchsia são cidades de Kanto. O que esses nomes têm em comum?",
    "resposta": "São nomes de cores",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Vermilion_City",
      "https://bulbapedia.bulbagarden.net/wiki/Kanto"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Vermilion_City",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Kanto",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Oficial Jenny",
      "descricao": "Policial do anime Pokémon que aparece em quase todas as cidades, sempre com a mesma aparência."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "No anime, o que a Enfermeira Joy, do Centro Pokémon, e a Oficial Jenny, da polícia, têm em comum?",
    "resposta": "Há uma idêntica em cada cidade",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Officer_Jenny",
      "https://bulbapedia.bulbagarden.net/wiki/Nurse_Joy"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Officer_Jenny",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Nurse_Joy",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Monte Pyre",
      "descricao": "Montanha da região de Hoenn, nos jogos Pokémon Ruby e Sapphire, que serve de cemitério de pokémon e guarda as orbes de Groudon e Kyogre."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O que a Torre Pokémon, de Kanto, e o Monte Pyre, de Hoenn, têm em comum?",
    "resposta": "São cemitérios de pokémon",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Mt._Pyre",
      "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Tower"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Mt._Pyre",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Tower",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Red (treinador)",
      "descricao": "Protagonista silencioso dos jogos Pokémon Red, Green e Blue, que reaparece como desafio final na segunda geração."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Red, o protagonista dos primeiros jogos, e Ash, do anime, partem em jornada da mesma pequena cidade de Kanto. Que cidade é essa?",
    "resposta": "Pallet",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Pallet_Town",
      "https://bulbapedia.bulbagarden.net/wiki/Red_(game)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pallet_Town",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Red_(game)",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Professor Birch",
      "descricao": "Professor pokémon da região de Hoenn, que entrega o inicial ao jogador nos jogos Pokémon Ruby e Sapphire."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O que os nomes dos professores pokémon Elm, de Johto, Birch, de Hoenn, Rowan, de Sinnoh, e Sycamore, de Kalos, têm em comum?",
    "resposta": "São nomes de árvores",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Professor_Birch",
      "https://bulbapedia.bulbagarden.net/wiki/Professor_Elm"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Professor_Birch",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Professor_Elm",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Kalos",
      "descricao": "Região fictícia dos jogos Pokémon X e Y, da sexta geração, cuja capital é a cidade de Lumiose."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome da região de Kalos, de Pokémon X e Y, vem de uma palavra grega. O que ela significa?",
    "resposta": "Belo",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Kalos"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Kalos",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Hisui",
      "descricao": "Antiga região do jogo Pokémon Legends: Arceus, que corresponde a Sinnoh muitos anos antes dos jogos Diamond e Pearl."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Hisui, a antiga região de Pokémon Legends: Arceus, tem um nome japonês que designa qual pedra verde?",
    "resposta": "Jade",
    "distratores": [
      "Esmeralda",
      "Malaquita",
      "Turmalina"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Hisui"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Hisui",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Academia Naranja e Uva",
      "descricao": "Escola de Paldea onde estuda o protagonista de Pokémon Scarlet e Violet, com nome diferente em cada versão."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Em Scarlet, a escola de Paldea se chama Academia Naranja; em Violet, Academia Uva. De que idioma vêm esses nomes?",
    "resposta": "Espanhol",
    "distratores": [
      "Italiano",
      "Catalão",
      "Português"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Naranja_Academy"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Naranja_Academy",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Ilhas Laranja",
      "descricao": "Arquipélago exclusivo do anime Pokémon, visitado por Ash depois de Kanto, onde ele vence a Liga Laranja."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "No anime, Ash visita ilhas chamadas Valencia, Tangelo, Kumquat e Pummelo. De onde vêm esses nomes?",
    "resposta": "De frutas cítricas",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Orange_Archipelago"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Orange_Archipelago",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Torre Sprout",
      "descricao": "Torre de madeira da cidade de Violet, em Johto, onde monges treinam, nos jogos Pokémon Gold e Silver."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Em Violet, em Johto, monges treinam numa torre de madeira cujo pilar central balança sem parar. Que pokémon inspira o nome e o pilar dessa torre?",
    "resposta": "Bellsprout",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Sprout_Tower"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Sprout_Tower",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Lumiose",
      "descricao": "Grande cidade no centro da região de Kalos, nos jogos Pokémon X e Y, inspirada em Paris e marcada pela Torre Prisma."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome de Lumiose, a grande cidade de Kalos inspirada em Paris, vem de uma palavra francesa. O que ela significa?",
    "resposta": "Luz",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Lumiose_City"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Lumiose_City",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Pokémon FireRed e LeafGreen",
      "descricao": "Recriações de Pokémon Red e Green para o Game Boy Advance, ambientadas na região de Kanto."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "FireRed e LeafGreen, que recriaram os primeiros jogos e levaram Kanto ao Game Boy Advance, saíram no Japão em que ano?",
    "resposta": "2004",
    "distratores": [
      "2002",
      "2003",
      "2006"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_FireRed_and_LeafGreen"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_FireRed_and_LeafGreen",
        "situacao": "ok",
        "texto": "Pokémon FireRed Version and Pokémon LeafGreen Version are 2004 remakes of the 1996 role-playing video games Pokémon Red and Green. They were developed by Game Freak and published by The Pokémon Company and Nintendo for the Game Boy Advance. FireRed and LeafGreen were first released in Japan in January 2004  and was released in the same year as FireRed and LeafGreen versions in North America and Eu\n[…]\nThe exclusive Japanese production run for FireRed and LeafGreen was limited to half a million copies, despite the success of Pokémon Ruby and Sapphire. IGN speculated that Nintendo was expecting less demand for the new games or that it was limited by the production of the bundled wireless adapter. The North American versions of FireRed and LeafGreen were indirectly announced at DICE in 2004.\n[…]\nGameSpot's Greg Kasavin, who gave the games 8.4 out of 10, commented that \"though Pokémon could probably use a few new twists after all these years, FireRed and LeafGreen are great role-playing games on their own merits, filled with lots more content and more challenges than last year's Ruby and Sapphire, and offering up plenty of addictive gameplay that can be a lot of fun for players of all ages.\" Unlike Harris, Kasavin praised the games' graphics for their \"colorful good looks and the endearing character designs that the series is known for.\" GameSpot later named LeafGreen the best Game Boy Advance game of September 2004.\n[…]\nIn Japan, a \"Special Edition\" physical release is available which includes a reproduction of the original FireRed and LeafGreen Game Boy Advance boxes. These releases contain a download code for the games, as well as a set of three laser engraved glass Poké Balls, including Bulbasaur, Charmander, and Squirtle, with green, red, and blue light-up stands and a display case."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_FireRed_e_LeafGreen",
        "situacao": "ok",
        "texto": "Pokémon FireRed Version e Pokémon LeafGreen Version (ポケットモンスター ファイアレッド・リーフグリーン, Poketto Monsutā Faiareddo・Rīfugurīn; Monstros de Bolso Fire Red・Leaf Green, que traduzido do inglês para o português significa Fogo Vermelho e Folha Verde, que em japonês seria 赤い炎 Akai honō e 緑色の葉 Midoriiro no ha) são dois jogos eletrônicos de RPG de 2004 recriado pelo Pokémon Red e Blue de Game Boy em 1996.\n[…]\nEles foram desenvolvidos pela Game Freak e publicados pela The Pokémon Company e pela Nintendo para o Game Boy Advance. FireRed e LeafGreen foram lançados pela primeira vez no Japão em janeiro de 2004 e na América do Norte e Europa em setembro e outubro de 2004, respectivamente. Os jogos fazem parte da terceira geração da série de jogos eletrônicos Pokémon e têm a distinção de serem os primeiras recriações aprimoradas de jogos anteriores da franquia.\n[…]\nAo contrário de Harris, Kasavin elogiou os gráficos dos jogos por sua “aparência colorida e os designs de personagens cativantes pelos quais a série é conhecida.\" GameSpot posteriormente chamou LeafGreen de o melhor jogo Game Boy Advance de setembro de 2004. Game Informer classificaram os jogos como \"Muito bons\" 8/10 por serem \"muito divertidos\", mas consideraram os gráficos \"absolutamente nada notáveis\" quando comparados com outros jogos portáteis.\n[…]\nDurante sua primeira semana de lançamento no Japão, FireRed e LeafGreen venderam um total combinado de 885 039 cópias, que foi menos do que a quantidade vendida por Pokémon Ruby e Sapphire naquele período, mas IGN raciocinou que as vendas menores foram devido aos novos títulos sendo recriações. Na primeira metade de agosto, antes de FireRed e LeafGreen serem lançados nos Estados Unidos, os jogos receberam mais de 150 000 pré-encomendas , mais do dobro da quantia que Ruby e Sapphire receberam.\n[…]\nOs dois jogos formam junto com Ruby, Sapphire e Emerald os RPGs originais de terceira geração.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Alola",
      "descricao": "Região tropical formada por ilhas, cenário dos jogos Pokémon Sun e Moon, da sétima geração."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Sem contar a ilha artificial da Fundação Aether, quantas ilhas principais formam a região de Alola?",
    "resposta": "Quatro",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Alola"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Alola",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Alola",
      "descricao": "Região tropical formada por ilhas, cenário dos jogos Pokémon Sun e Moon, da sétima geração."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Qual destas regiões troca os tradicionais ginásios por provas comandadas por jovens capitães?",
    "resposta": "Alola",
    "distratores": [
      "Kanto",
      "Hoenn",
      "Galar"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Alola",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Sun_and_Moon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Alola",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Sun_and_Moon",
        "situacao": "ok",
        "texto": "Pokémon Sun and Pokémon Moon are 2016 role-playing video games developed by Game Freak and published by The Pokémon Company and Nintendo for the Nintendo 3DS. They are the first installments in the seventh generation of the Pokémon video game series. First announced in February 2016, Sun and Moon were released worldwide on 18 November 2016, commemorating the franchise's 20th anniversary.\n[…]\nIn the postgame, the player is contacted by two members of the International Police: Anabel, who was head of the Battle Tower in Pokémon Emerald, and Looker, a recurring detective since Pokémon Platinum. The player assists the two with handling the wild Ultra Beasts that Lusamine let loose into Alola in a series of quests. Following the final quest, Looker reveals that he saw another Ultra Beast, although Anabel dismisses this.\n[…]\nAccording to composer Junichi Masuda, who co-produced the game, the soundtracks used in Sun and Moon were based on traditional Hawaiian music styles. However, while it utilizes their core rhythms, Alola's music employs \"completely different\" melodies while still invoking a tropical island feel. On 30 November 2016 the Nintendo 3DS Pokémon Sun and Moon Super Music Complete, a four-disk soundtrack containing 169 songs, 160 from the games and 9 special tracks, was released in Japan.\n[…]\nAlex Olney of Nintendo Life said that \"the plot in Sun & Moon is the deepest and most ambitious Game Freak has dared attempt\", he also called them the best Pokémon games ever produced, commenting that Alola's design felt natural and organic, praising Game Freak for successfully balancing additional mechanics without alienating existing fans. Chris Tapsell of Eurogamer said the games were \"the best generation in more than a decade\". They earned an \"essential\" ranking from the site."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Sun_e_Moon",
        "situacao": "ok",
        "texto": "Pokémon Sun (ポケットモンスター　サン, Poketto Monsutā San; \"Monstros de Bolso Sun\", que traduzido do inglês para o português significa Sol, Sol em japonês é 太陽 Taiyō) e Pokémon Moon (ポケットモンスター　ムーン, Poketto Monsutā Mūn; \"Monstros de Bolso Moon\"\", que traduzido do inglês para o português significa Lua, Lua em japonês é 月 Tsuki) são dois jogos eletrônicos de RPG de 2016, faz parte da sétima geração da série Pok\n[…]\nPokémon Sun e Moon são as primeiras entradas da série a estarem disponíveis em chinês simplificado e tradicional, junto com inglês, francês, espanhol, italiano, alemão, japonês e coreano, para um total de nove idiomas disponíveis. Os jogos apresentam variantes de Pokémon introduzidas em jogos mais antigos com novas tipificações e aparências, conhecidas como Formas de Alola. Vulpix e Ninetales de Alola, que são tipos de fogo em outras regiões, são respectivamente os tipos Gelo duplo e Fada.\n[…]\nSandshrew e Sandslash de Alola, que são tipos Solo em outras regiões, são do tipo Gelo e Metal. Meowth e Persa de Alola, que são tipos normais em outras regiões, são tipos Escuros. Algumas evoluções de Pokémon também ganharam tipificações duplas, como Marowak de Alola que agora é do tipo Fogo e Fantasma e Raichu de Alola, do tipo Elétrico e Psíquico.\n[…]\nIsso faz com que Nebby evolua para uma forma semelhante a um casulo enquanto Ultra Besta são soltos nas ilhas de Alola, forçando a ilha Kahunas e divindades guardiãs para lutar contra eles.\n[…]\nDe acordo com o compositor Junichi Masuda, que co-produziu o jogo, as trilhas sonoras usadas em Sun e Moon foram baseadas em estilos musicais tradicionais havaianos. No entanto, embora utilize seus ritmos básicos, a música de Alola emprega melodias \"completamente diferentes\", ao mesmo tempo que invoca uma sensação de ilha tropical.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Bolas de Apricorn",
      "descricao": "Poké Bolas especiais feitas à mão a partir de frutos chamados Apricorn, nos jogos Pokémon Gold e Silver."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em Gold e Silver, um velho artesão da cidade de Azalea transforma frutos Apricorn em Poké Bolas especiais. Como ele se chama?",
    "resposta": "Kurt",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Kurt",
      "https://bulbapedia.bulbagarden.net/wiki/Apricorn"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Kurt",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Apricorn",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  }
]

---

# MANIFESTO

# Manifesto de Perguntas — Mestre2

> **Versão preliminar 0.65 — 2026-10-13**
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
