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
      "nome": "Saffron",
      "descricao": "Grande cidade no centro da região de Kanto, nos jogos Pokémon Red e Blue, sede da Silph e do ginásio psíquico de Sabrina."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "O mapa de Kanto copia a região japonesa de mesmo nome. Saffron, a metrópole no centro desse mapa, corresponde a qual cidade real?",
    "resposta": "Tóquio",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Saffron_City",
      "https://bulbapedia.bulbagarden.net/wiki/Kanto"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Saffron_City",
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
    "indice": 2,
    "ancora": {
      "nome": "Saffron",
      "descricao": "Grande cidade no centro da região de Kanto, nos jogos Pokémon Red e Blue, sede da Silph e do ginásio psíquico de Sabrina."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em Red e Blue, guardas com sede bloqueiam os portões de Saffron. O que o jogador precisa entregar a eles para conseguir passar?",
    "resposta": "Uma bebida (água, refrigerante ou limonada)",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Saffron_City",
      "https://bulbapedia.bulbagarden.net/wiki/Fresh_Water"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Saffron_City",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Fresh_Water",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Dojo de Luta de Saffron",
      "descricao": "Dojo de lutadores ao lado do ginásio de Saffron, em Kanto, nos jogos Pokémon Red e Blue, que dá um pokémon de prêmio a quem vence seu mestre."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Em Red e Blue, ao lado do ginásio de Saffron, quem vence o dojo de luta escolhe um prêmio: Hitmonlee ou qual outro pokémon?",
    "resposta": "Hitmonchan",
    "distratores": [
      "Machamp",
      "Primeape",
      "Hitmontop"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Fighting_Dojo"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Fighting_Dojo",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Moltres",
      "descricao": "Pokémon lendário ave de fogo da primeira geração, número 146 da Pokédex Nacional."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Em Red e Blue, Moltres, a ave lendária de fogo, espera o jogador em qual lugar de Kanto, o último caminho antes do Platô Índigo?",
    "resposta": "Victory Road",
    "distratores": [
      "Mt. Moon",
      "Rock Tunnel",
      "Diglett's Cave"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Moltres_(Pok%C3%A9mon)",
      "https://bulbapedia.bulbagarden.net/wiki/Kanto_Victory_Road"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Moltres_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Kanto_Victory_Road",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Eevee",
      "descricao": "Pokémon do tipo Normal, número 133 da Pokédex Nacional."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Em Red e Blue, o jogador ganha um Eevee de presente no último andar de um prédio residencial. Em que cidade de Kanto fica esse prédio?",
    "resposta": "Celadon",
    "distratores": [
      "Saffron",
      "Fuchsia",
      "Lavender"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Celadon_Mansion",
      "https://bulbapedia.bulbagarden.net/wiki/Eevee_(Pok%C3%A9mon)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Celadon_Mansion",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Eevee_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Zona Safári de Kanto",
      "descricao": "Área de captura dos jogos Pokémon Red e Blue em que o jogador atira iscas e pedras nos pokémon em vez de batalhar."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em Red e Blue, o guarda da Zona Safári de Fuchsia dá ao jogador a Máquina Oculta de Força, ou Strength, se ele achar algo que o velho perdeu. O quê?",
    "resposta": "A dentadura de ouro",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Gold_Teeth",
      "https://bulbapedia.bulbagarden.net/wiki/Kanto_Safari_Zone"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Gold_Teeth",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Kanto_Safari_Zone",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Goldenrod",
      "descricao": "Grande cidade comercial da região de Johto, nos jogos Pokémon Gold e Silver, com loja de departamentos, torre de rádio e o ginásio de Whitney."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Goldenrod, a grande cidade comercial de Johto, com loja de departamentos e torre de rádio, se inspira em qual cidade japonesa?",
    "resposta": "Osaka",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Goldenrod_City",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Gold_and_Silver"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Goldenrod_City",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Gold_and_Silver",
        "situacao": "ok",
        "texto": "Pokémon Gold Version and Pokémon Silver Version are 1999 role-playing video games developed by Game Freak and published by Nintendo for the Game Boy Color. They are the first installments in the second generation of the Pokémon video game series. They were released in Japan on November 21st, 1999, Australia and North America on October 15th, 2000, and Europe on April 6th, 2001.\n[…]\nPokémon Gold and Silver are set in the region of Johto, situated to the west of the Kanto Region from the previous Red and Blue games, and three years after the conclusion of the previous games. The design of Johto was inspired by Japan's Kansai and Tōkai regions, with many of the region's temples and more traditional Japanese aesthetics finding their way into Johto.\n[…]\nOpposing him is his mysterious rival, a boy who stole one of the other Pokémon from Professor Elm and regularly challenges the player to test his strengths. The player also encounters the villainous Team Rocket, having reunited to seek out their previous leader Giovanni to return the group to their former glory. Eventually, the player thwarts Team Rocket once and for all and defeats the Elite Four and the Johto League Champion on Indigo Plateau.\n[…]\nAs a precursor to the North American release, Gold and Silver were displayed for audiences to interact with at the 2000 American International Toy Fair in New York City. To further promote the games, Nintendo modified five Chrysler PT Cruisers to resemble the new Pokémon Lugia and had them driven around the United States. The vehicles had fins and tails attached to them and were painted with logos and images of the Pokémon franchise."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Gold_%26_Silver",
        "situacao": "ok",
        "texto": "Pokémon Gold Version e Pokémon Silver Version (ポケットモンスター 金・銀, Poketto Monsutā Kin・Gin; tradução: Monstros de Bolso Ouro・Prata) são jogos eletrônicos de RPG de 1999, desenvolvidos pela Game Freak e publicadas pela Nintendo para o Game Boy Color. Esses dois jogos iniciaram a segunda geração da série Pokémon. Eles foram lançados no Japão em 1999, na Austrália e América do Norte em 2000 e Europa em 20\n[…]\nOs jogos introduzem 100 novas espécies de Pokémon e seguem o progresso do personagem do jogador em sua busca para dominar a batalha Pokémon. Ambos os jogos são independentes um do outro, mas apresentam em grande parte o mesmo enredo, e embora ambos possam ser jogados separadamente, é necessário trocar entre esses jogos e seus predecessores para completar totalmente a Pokédex dos jogos. A saga Johto do anime Pokémon é baseada na nova região introduzida nos jogos.\n[…]\nPokémon Gold e Silver são ambientados na região de Johto, situada a oeste da região de Kanto dos jogos anteriores Red e Blue, e três anos após a conclusão dos jogos anteriores. O design do Johto foi inspirado nas regiões japonesas de Kansai e Tōkai, com muitos dos templos da região e a estética japonesa mais tradicional chegando até Johto.[carece de fontes]?\n[…]\nOs locais no jogo em Johto incluem New Bark Town (ワカバタウン Wakaba Town), Cherrygrove City (ヨシノシティ Yoshino City), Violet City (キキョウシティ Kikyō City), Azalea Town (ヒワダタウン Hiwada Town), Goldenrod City (コガネシティ Kogane City), Ecruteak City (エンジュシティ Enju City), Olivine City (アサギシティ Asagi City), Cianwood City (タンバシティ Tanba City), Mahogany Town (チョウジタウン Chōji Town) e Blackthorn City (フスベシティ Fusube City).\n[…]\nComercialmente, eles estão entre os jogos Nintendo DS mais vendidos de todos os tempos, com vendas combinadas de 10 milhões de unidades em 29 de julho de 2010.\n[…]\nSítio oficial (em japonês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Tohjo Falls",
      "descricao": "Caverna com cachoeiras na rota que liga as regiões de Johto e Kanto, nos jogos Pokémon Gold e Silver."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Em Gold e Silver, uma caverna com cachoeiras, na estrada entre as duas regiões do jogo, se chama Tohjo Falls. Que dois nomes se juntam em Tohjo?",
    "resposta": "Kanto e Johto",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Tohjo_Falls"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Tohjo_Falls",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Ho-Oh",
      "descricao": "Pokémon dos tipos Fogo e Voador, número 250 da Pokédex Nacional."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Em Pokémon Gold, com a Rainbow Wing em mãos, o jogador sobe ao topo de qual torre de Ecruteak para enfrentar o lendário Ho-Oh?",
    "resposta": "Tin Tower",
    "distratores": [
      "Burned Tower",
      "Sprout Tower",
      "Radio Tower"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Bell_Tower",
      "https://bulbapedia.bulbagarden.net/wiki/Ho-Oh_(Pok%C3%A9mon)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Bell_Tower",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Ho-Oh_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Platô Índigo",
      "descricao": "Planalto na região de Kanto onde fica a Liga Pokémon enfrentada pelo jogador em Red e Blue e em Gold e Silver."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O que a Liga Pokémon que o jogador enfrenta em Red e Blue e a que ele enfrenta em Gold e Silver têm em comum no mapa?",
    "resposta": "Ficam no mesmo lugar, o Platô Índigo (Indigo Plateau)",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Indigo_Plateau",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Gold_and_Silver"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Indigo_Plateau",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Gold_and_Silver",
        "situacao": "ok",
        "texto": "Pokémon Gold Version and Pokémon Silver Version are 1999 role-playing video games developed by Game Freak and published by Nintendo for the Game Boy Color. They are the first installments in the second generation of the Pokémon video game series. They were released in Japan on November 21st, 1999, Australia and North America on October 15th, 2000, and Europe on April 6th, 2001.\n[…]\nOpposing him is his mysterious rival, a boy who stole one of the other Pokémon from Professor Elm and regularly challenges the player to test his strengths. The player also encounters the villainous Team Rocket, having reunited to seek out their previous leader Giovanni to return the group to their former glory. Eventually, the player thwarts Team Rocket once and for all and defeats the Elite Four and the Johto League Champion on Indigo Plateau.\n[…]\nSilver's caves is Red, the main protagonist of Red, Green, Blue and Yellow and Indigo League Champion, whom the player can challenge for the most difficult final battle in the game.\n[…]\nSo from these experiences in childhood, these ideas for Pokémon came out\". In the same vein as the Pokémon Mew of Red and Blue, the exclusive Pokémon Celebi was included in the Gold and Silver games but is only accessible after attending a Nintendo promotional event. The first official event offering Celebi was Nintendo Space World 2000 in Japan, in which 100,000 attendees would be awarded the rare Pokémon.\n[…]\nPokémon Gold and Silver continued the enormous success of Pokémon Red and Blue, beginning the formation of Pokémon into a multi-billion dollar franchise. Upon its first day of release in Japan, the game sold 1,425,768 units. As of April 2000, roughly 6.5 million copies of the games had been sold in Japan. Silver proved to be the slightly more popular version, edging out Gold by approximately 100,000 copies."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Gold_%26_Silver",
        "situacao": "ok",
        "texto": "Pokémon Gold Version e Pokémon Silver Version (ポケットモンスター 金・銀, Poketto Monsutā Kin・Gin; tradução: Monstros de Bolso Ouro・Prata) são jogos eletrônicos de RPG de 1999, desenvolvidos pela Game Freak e publicadas pela Nintendo para o Game Boy Color. Esses dois jogos iniciaram a segunda geração da série Pokémon. Eles foram lançados no Japão em 1999, na Austrália e América do Norte em 2000 e Europa em 20\n[…]\nEventualmente, o jogador derrota a Equipe Rocket de uma vez por todas e derrota a Elite dos Quatro e o Campeão da Liga Pokémon no Indigo Plateau. O jogador pode então viajar para a região de Kanto dos jogos anteriores e desafiar os Líderes de Ginásio de lá, descobrindo o quanto mudou nos três anos após os eventos de Red e Blue.\n[…]\nAlém disso, foram equipados com uma televisão ligada a consolas de jogos que permitiam aos espectadores jogar Pokémon Puzzle League, Hey You, Pikachu! e Pokémon Gold e Silver. A série de televisão Pokémon GS, baseada nos jogos, foi anunciada para fazer parte da programação de outono do Kids' WB. O show apresenta o mesmo protagonista Ash Ketchum em uma nova região com diferentes espécies de Pokémon dos jogos.\n[…]\nAté agora em 2000, o jogo mais vendido na América para qualquer console doméstico é Pokémon Stadium para Nintendo 64, e o jogo mais vendido para qualquer jogo eletrônico portátil é Pokémon Yellow para Game Boy Color, mas Pokémon Gold e Silver eclipsarão até mesmo esses totais de vendas impressionantes. Projetamos vendas de 10 milhões unidades totais desses dois jogos em menos de seis meses\". Em 2010, as vendas registradas de ouro e prata foram de 23 milhões de unidades vendidas.\n[…]\nPokémon Crystal foi bem recebido pelos críticos, embora muitos comentassem que não havia novas adições e recursos suficientes para diferenciá-lo significativamente do Pokémon Gold e Silver. Pokémon Crystal vendeu quase 6,4 milhões de unidades em todo o mundo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Mossdeep",
      "descricao": "Cidade-ilha da região de Hoenn, nos jogos Pokémon Ruby e Sapphire, onde fica um centro espacial e o ginásio psíquico de Tate e Liza."
    },
    "angulo": "identidade",
    "tipo": "multipla",
    "pergunta": "Em Ruby e Sapphire, que cidade-ilha de Hoenn, sede de um centro espacial, se inspira em Tanegashima, a ilha japonesa de onde partem foguetes?",
    "resposta": "Mossdeep",
    "distratores": [
      "Lilycove",
      "Slateport",
      "Dewford"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Mossdeep_City",
      "https://bulbapedia.bulbagarden.net/wiki/Mossdeep_Space_Center"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Mossdeep_City",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Mossdeep_Space_Center",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Fortree",
      "descricao": "Cidade da região de Hoenn, nos jogos Pokémon Ruby e Sapphire, com casas no alto das árvores e o ginásio de tipo Voador de Winona."
    },
    "angulo": "identidade",
    "tipo": "multipla",
    "pergunta": "Em Ruby e Sapphire, em que cidade de Hoenn as casas ficam no alto das árvores, ligadas por pontes de madeira?",
    "resposta": "Fortree",
    "distratores": [
      "Pacifidlog",
      "Lilycove",
      "Verdanturf"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Fortree_City"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Fortree_City",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Pacifidlog",
      "descricao": "Pequena cidade no meio do mar da região de Hoenn, nos jogos Pokémon Ruby e Sapphire."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "No meio do mar de Hoenn, a pequena cidade de Pacifidlog não tem chão firme. Sobre o que ela é construída?",
    "resposta": "Troncos flutuantes",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Pacifidlog_Town"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pacifidlog_Town",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Castform",
      "descricao": "Pokémon do clima, tipo Normal na forma normal, da terceira geração, número 351 da Pokédex Nacional."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em Ruby e Sapphire, o jogador ganha Castform de presente depois de expulsar os vilões de um centro de pesquisas da Rota 119. Que lugar é esse?",
    "resposta": "Weather Institute",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Weather_Institute",
      "https://bulbapedia.bulbagarden.net/wiki/Castform_(Pok%C3%A9mon)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Weather_Institute",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Castform_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Cresselia",
      "descricao": "Pokémon do tipo Psíquico, número 488 da Pokédex Nacional."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Em Diamond e Pearl, para acabar com os pesadelos do filho de um marinheiro de Canalave, o jogador procura Cresselia em qual ilha?",
    "resposta": "Fullmoon Island",
    "distratores": [
      "Newmoon Island",
      "Iron Island",
      "Fight Area"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Fullmoon_Island",
      "https://bulbapedia.bulbagarden.net/wiki/Cresselia_(Pok%C3%A9mon)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Fullmoon_Island",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Cresselia_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Veilstone",
      "descricao": "Cidade da região de Sinnoh, nos jogos Pokémon Diamond e Pearl, escavada na rocha, com loja de departamentos e o quartel da Equipe Galáctica."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Veilstone, a cidade de Sinnoh escavada na rocha, exibe enormes pedras espalhadas pela cidade. Segundo os moradores, o que são essas pedras?",
    "resposta": "Meteoritos que caíram do céu",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Veilstone_City"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Veilstone_City",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Old Chateau",
      "descricao": "Mansão abandonada e assombrada na floresta de Eterna, em Sinnoh, nos jogos Pokémon Diamond, Pearl e Platinum."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em Diamond e Pearl, numa mansão abandonada na floresta de Eterna, o fantasma Rotom aparece à noite quando o jogador examina qual aparelho?",
    "resposta": "A televisão",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Old_Chateau",
      "https://bulbapedia.bulbagarden.net/wiki/Rotom_(Pok%C3%A9mon)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Old_Chateau",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Rotom_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Volcarona",
      "descricao": "Pokémon dos tipos Inseto e Fogo, número 637 da Pokédex Nacional."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em Black e White, em que ruínas antigas, quase soterradas pela areia do deserto de Unova, o jogador encontra uma Volcarona no andar mais fundo?",
    "resposta": "Relic Castle",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Relic_Castle",
      "https://bulbapedia.bulbagarden.net/wiki/Volcarona_(Pok%C3%A9mon)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Relic_Castle",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Volcarona_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Geosenge",
      "descricao": "Cidadezinha da região de Kalos, nos jogos Pokémon X e Y, cercada de pedras antigas, sob a qual está escondida a arma suprema."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em X e Y, as fileiras de pedras antigas da cidadezinha de Geosenge, em Kalos, se inspiram em qual sítio pré-histórico francês?",
    "resposta": "Alinhamentos de Carnac",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Geosenge_Town",
      "https://en.wikipedia.org/wiki/Carnac_stones"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Geosenge_Town",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Carnac_stones",
        "situacao": "ok",
        "texto": "The Carnac stones (Breton: Steudadoù Karnag) are an exceptionally dense collection of megalithic sites near the south coast of Brittany in northwestern France, consisting of stone alignments (rows), dolmens (stone tombs), tumuli (burial mounds), and single menhirs. More than 3,000 prehistoric standing stones were hewn from local granite and erected by the pre-Celtic people of Brittany and form the\n[…]\nAccording to Neil Oliver's BBC documentary A History of Ancient Britain, the alignments were built by hunter-gatherer people (\"These weren't erected by Neolithic farmers, but by Mesolithic hunters\"). That would place them in a different category from Stonehenge in England, which has been claimed to be the work of Early European Farmers. The question of which people Carnac stones are to be attributed to is still debated.\n[…]\nThe first extensive excavation was performed in the 1860s by Scottish antiquary James Miln (1819–1881), who reported that by then fewer than 700 of the 3,000 stones were still standing. Towards 1875, Miln engaged a local boy, Zacharie Le Rouzic (1864–1939), as his assistant, and Zacharie learnt archaeology on the job. After Miln's death, he left the results of his excavations to the town of Carnac, and the James Miln Museum was established there by his brother Robert to house the artifacts.\n[…]\n(in French) Carnac official website\n[…]\nCarnac at france-for-visitors.com (includes map)\n[…]\nOnline photo exhibition of the Carnac region's megaliths includes the giant menhir of Loqmariaquer, and marked and inscribed stones\n[…]\nAn amateur's guide to visiting the Carnac stones by car\n[…]\nThe megaliths of Carnac: Dolmen / passage graves – comprehensive list of dolmens in area with photos.\n[…]\nMegaliths of Carnac: Dolmen / Passage Graves  – main sites in the Morbihan area\n[…]\nCarnac – historical map\n[…]\nCarnac - a megalithic wonderland - M E g A L i T h i A  – basic arrangement of the main alignments"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rochas_de_Carnac",
        "situacao": "ok",
        "texto": "As Rochas de Carnac são um alinhamento de mais de 3000 megálitos que foram erguidos na comuna de Carnac, na Bretanha, França, por volta de 2000 a.C.\n[…]\nOs alinhamentos foram erigidos no Neolítico por comunidades sedentárias entre o quinto e o segundo milênio a.C.\n[…]\nEssas tribos moravam em grandes casas de madeira e argila praticando a pecuária e a agricultura. O processo de sedentarismo tê-los-ia levado a criar um culto aos mortos por meio da construção coletiva de enormes túmulos, estelas gigantes, antas e fileiras de menires.\n[…]\nOs homens conheciam o jeito de manobrar as pesadas pedras com troncos e cordas. Experiências têm demonstrado a viabilidade de que poucos homens manejassem pesadas pedras. O grande menir de Locmariaquer, com um peso de 300 toneladas e de 20 metros de comprimento, de granito, é um exemplo de transporte e elevação de monólitos.\n[…]\nAlinhamento de Ménec - formados por 1.099 menires fincados ao longo de 1 km, seguindo o eixo SO/NE. O. Estes alinhamentos, erguidos no Neolítico Médio (3000 a.C.), constituem o conjunto mais representativo de menires: 1099 menires fincados em 11 fileiras, espalhados ao longo de 1165 metros de comprimento por 100 metros de largura. Os menires crescem de tamanho para oeste (o mais alto deles mede 4 m), finalizando com um cromeleque que ainda conserva 71 blocos.\n[…]\nAlinhamento de Kermario - composto por 1.029 menires, contemporâneos aos de Ménec, descrevem 10 linhas paralelas de 1.120 metros de comprimento, o tamanho dos menires vai crescendo de leste para oeste.\n[…]\nAlinhamento de Kerlescan\n[…]\nAlinhamento do Petit-Ménec\n[…]\nAlinhamento megalítico",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Tower of Mastery",
      "descricao": "Torre da cidade de Shalour, em Kalos, nos jogos Pokémon X e Y, ligada aos segredos da megaevolução."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em X e Y, a Tower of Mastery, a torre da cidade de Shalour ligada aos segredos da megaevolução, lembra qual abadia francesa erguida sobre um rochedo?",
    "resposta": "Monte Saint-Michel",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Tower_of_Mastery",
      "https://en.wikipedia.org/wiki/Mont-Saint-Michel"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Tower_of_Mastery",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Mont-Saint-Michel",
        "situacao": "ok",
        "texto": "Mont-Saint-Michel (French pronunciation: [lə mɔ̃ sɛ̃ miʃɛl]; Norman: Mont Saint Miché; English: Saint Michael's Mount) is a tidal island and mainland commune in Normandy, France.\n[…]\nMont-Saint-Michel and its surrounding bay were inscribed on the UNESCO list of World Heritage Sites in 1979 for its unique aesthetic and importance as a Catholic site. It is visited by more than three million people each year, and is the most-visited tourist attraction in France outside of Paris. Over 60 buildings within the commune are protected as historical monuments.\n[…]\nWhen Louis XI of France founded the Order of Saint Michael in 1469, he intended that the abbey church of Mont-Saint-Michel become the chapel for the order, but because of its great distance from Paris, his intention could never be realized.\n[…]\nDuring the occupation of France in World War II, German soldiers occupied Mont-Saint-Michel, where they used St. Aubert church as a lookout post. The island was a major attraction for German tourists and soldiers, with around 325,000 German tourists from July 18, 1940, to the end of the occupation of France.\n[…]\nMonte-Saint-Michel was also featured in the final episode of the first season of The Walking Dead: Daryl Dixon as well as the second season.\n[…]\nMont-Saint-Michel Abbey\n[…]\nSaint-Malo\n[…]\nMont Saint-Michel：A World Heritage Site\n[…]\nFreeing Mont Saint-Michel\n[…]\nMont-Saint-Michel Celebrates 1,300 yrs of History[link removed]\n[…]\nMont Saint-Michel between history and legends\n[…]\nOfficial Mont-Saint-Michel Tourist site (English version). Archived 16 June 2019 at the Wayback Machine\n[…]\nHigh-resolution 360° Panoramas and Images of Mont Saint-Michel | Art Atlas. Archived 12 September 2019 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Monte_Saint-Michel",
        "situacao": "ok",
        "texto": "O Monte Saint-Michel (francês Mont-Saint-Michel) é uma ilha rochosa na foz do Rio Couesnon, no departamento da Mancha, na França, onde foi construída uma abadia (abadia do Monte Saint-Michel) e santuário em homenagem ao arcanjo São Miguel. Seu antigo nome é \"Monte Saint-Michel em perigo do mar\" (Mons Sancti Michaeli in periculo mari).\n[…]\nA arquitetura prodigiosa do monte Saint-Michel e sua baía constituem o ponto turístico mais frequentado da Normandia e um dos primeiros da França, com cerca de 3 200 000 visitantes por ano. Uma estátua de São Miguel colocada no topo da igreja abacial culmina a 170 metros de altura. Diversos prédios e habitações do sítio são, a título individual, classificados como monumentos históricos (a igreja paroquial desde 1909, por exemplo) ou inscritos no inventário suplementar de monumentos históricos.\n[…]\nCrê-se que a história da abadia do monte Saint-Michel começou em 708, quando Aubert, bispo de Avranches, mandou construir no monte Tombe um santuário em honra a São Miguel Arcanjo (Saint-Michel). No século X os monges beneditinos instalaram-se na abadia e uma pequena vila foi-se formando aos seus pés.\n[…]\nDurante a Guerra dos Cem Anos, entre França e Inglaterra, o Monte Saint-Michel foi uma fortaleza inexpugnável, resistindo a todas as tentativas inglesas de tomá-la e constituindo-se, assim, em símbolo da identidade nacional francesa. Após a dissolução da ordens religiosas ditadas pela Revolução Francesa de 1789 até 1863 o Monte foi utilizado como prisão. Declarado monumento histórico em 1987, o sítio figura desde 1979 na lista do Patrimônio Mundial da UNESCO.\n[…]\nAbadia do Monte Saint-Michel\n[…]\n«Site oficial do Monte Saint-Michel» (em francês)\n[…]\n«Turismo ao Mont Saint Michel»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Battle Château",
      "descricao": "Castelo de batalhas da região de Kalos, nos jogos Pokémon X e Y, onde os treinadores sobem de posto a cada vitória."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "No Battle Château de Kalos, em X e Y, os treinadores sobem de posto conforme vencem batalhas. Que tipo de título eles recebem?",
    "resposta": "Títulos de nobreza",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Battle_Ch%C3%A2teau"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Battle_Ch%C3%A2teau",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Mewtwo",
      "descricao": "Pokémon do tipo Psíquico, número 150 da Pokédex Nacional."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Em X e Y, Mewtwo se esconde numa caverna perto de um refúgio de pokémon que fugiram de maus-tratos humanos. Que lugar de Kalos é esse?",
    "resposta": "Pokémon Village",
    "distratores": [
      "Lost Hotel",
      "Snowbelt",
      "Couriway"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Village",
      "https://bulbapedia.bulbagarden.net/wiki/Unknown_Dungeon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Village",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Unknown_Dungeon",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Akala",
      "descricao": "Segunda ilha da região de Alola, nos jogos Pokémon Sun e Moon, comandada pela kahuna Olivia."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O que os nomes das quatro ilhas principais de Alola, Melemele, Akala, Ula'ula e Poni, têm em comum?",
    "resposta": "São nomes de cores em havaiano",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Akala_Island",
      "https://bulbapedia.bulbagarden.net/wiki/Melemele_Island",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Sun_and_Moon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Akala_Island",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Melemele_Island",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Sun_and_Moon",
        "situacao": "ok",
        "texto": "Pokémon Sun and Pokémon Moon are 2016 role-playing video games developed by Game Freak and published by The Pokémon Company and Nintendo for the Nintendo 3DS. They are the first installments in the seventh generation of the Pokémon video game series. First announced in February 2016, Sun and Moon were released worldwide on 18 November 2016, commemorating the franchise's 20th anniversary.\n[…]\nThe player starts off moving from Kanto Region to Melemele Island of the Alola Region with their mother. After meeting a young blonded girl named Lillie and rescuing her special Pokémon she calls Nebby, the player obtains a Starter Pokémon from local Professor Kukui and embarks on the Island Challenge, a coming-of-age custom spanning trials across Alola, along with local youngster Hau.\n[…]\nThis causes Nebby to evolve into a cocoon-like form while Ultra Beasts are unleashed onto Alola's islands, forcing the island Kahunas and guardian deities to fight them.\n[…]\nAfter defeating the crazed Lusamine, the player returns to Alola and ascends Mount Lanakila to challenge the newly formed Alola League and defeating the Elite Four members. In the last match, they defeated Kukui to become the first-ever Alola League Champion. In the credits, the player battles Melemele's guardian deity Tapu Koko after a celebration, with Lillie and Lusamine departing Alola for Kanto the following day.\n[…]\nAccording to composer Junichi Masuda, who co-produced the game, the soundtracks used in Sun and Moon were based on traditional Hawaiian music styles. However, while it utilizes their core rhythms, Alola's music employs \"completely different\" melodies while still invoking a tropical island feel. On 30 November 2016 the Nintendo 3DS Pokémon Sun and Moon Super Music Complete, a four-disk soundtrack containing 169 songs, 160 from the games and 9 special tracks, was released in Japan."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Sun_e_Moon",
        "situacao": "ok",
        "texto": "Pokémon Sun (ポケットモンスター　サン, Poketto Monsutā San; \"Monstros de Bolso Sun\", que traduzido do inglês para o português significa Sol, Sol em japonês é 太陽 Taiyō) e Pokémon Moon (ポケットモンスター　ムーン, Poketto Monsutā Mūn; \"Monstros de Bolso Moon\"\", que traduzido do inglês para o português significa Lua, Lua em japonês é 月 Tsuki) são dois jogos eletrônicos de RPG de 2016, faz parte da sétima geração da série Pok\n[…]\nO principal cientista da região de Alola é o professor Kukui, cujo nome vem do kukui, também conhecido como nogueira-de-iguape, a árvore do estado havaiano, continuando a tendência de os professores Pokémon terem nomes de árvores. Equipe Skull é o nome do grupo vilão de Alola. A Fundação Aether é uma organização que estuda Ultra Bestas, criaturas misteriosas de outra dimensão. Embora o Professor Carvalho não apareça em Sun e Moon, seu primo Gabriel Carvalho toma seu lugar.\n[…]\nIsso faz com que Nebby evolua para uma forma semelhante a um casulo enquanto Ultra Besta são soltos nas ilhas de Alola, forçando a ilha Kahunas e divindades guardiãs para lutar contra eles.\n[…]\nApós derrotar o enlouquecido Lusamine, o jogador retorna a Alola e sobe o Monte Lanakila para desafiar o recém-formado Equipe dos Quatro da Liga de Alola Pokémon. Na última partida, eles derrotaram Kukui para se tornar o primeiro campeão da Liga Pokémon de Alola. Nos créditos, o jogador luta contra a divindade guardiã de Melemele, Tapu Koko após uma celebração, com Lillie e Lusamine partindo de Alola para Kanto no dia seguinte.\n[…]\nDe acordo com o compositor Junichi Masuda, que co-produziu o jogo, as trilhas sonoras usadas em Sun e Moon foram baseadas em estilos musicais tradicionais havaianos. No entanto, embora utilize seus ritmos básicos, a música de Alola emprega melodias \"completamente diferentes\", ao mesmo tempo que invoca uma sensação de ilha tropical.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Hau'oli",
      "descricao": "Maior cidade da região de Alola, na ilha Melemele, nos jogos Pokémon Sun e Moon."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Hau'oli, a maior cidade de Alola, com prédios, lojas e praia na ilha Melemele, se inspira em qual cidade havaiana?",
    "resposta": "Honolulu",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Hau%CA%BBoli_City"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Hau%CA%BBoli_City",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Turffield",
      "descricao": "Vilarejo rural da região de Galar, nos jogos Pokémon Sword e Shield, onde fica o ginásio de Planta de Milo e um grande desenho antigo num morro."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em Sword e Shield, perto de Turffield, um desenho gigantesco e antigo cobre a encosta de um morro. Que tipo de monumento britânico ele imita?",
    "resposta": "As figuras de giz das colinas inglesas",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Turffield",
      "https://en.wikipedia.org/wiki/Uffington_White_Horse"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Turffield",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Uffington_White_Horse",
        "situacao": "ok",
        "texto": "The Uffington White Horse is a prehistoric hill figure, 110 m (360 ft) long, formed from deep trenches filled with crushed white chalk. The figure is situated on the upper slopes of Whitehorse Hill in the English civil parish of Uffington in Oxfordshire, some 16 km (10 mi) east of Swindon, 8 km (5.0 mi) south of the town of Faringdon and a similar distance west of the town of Wantage; or 2.5 km (1\n[…]\nThe Uffington White Horse was created some time between 1380 and 550 BC, during the late Bronze Age or early Iron Age. The site is owned and managed by the National Trust and is a scheduled monument. The Guardian stated in 2003 that \"for more than 3,000 years, the Uffington White Horse has been jealously guarded as a masterpiece of minimalist art.\" The Uffington Horse is by far the oldest of the white horse figures in Britain; the others inspired by it have an entirely different design.\n[…]\nSteadman novel Skandar and The Unicorn Thief. The White Horse is also an important narrative element of the 2022 video game tie-in novel Assassin's Creed Valhalla: Sword of the White Horse written by Elsa Sjunneson."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cavalo_Branco_de_Uffington",
        "situacao": "ok",
        "texto": "O Cavalo Branco de Uffington é uma figura pré-histórica numa colina, com 110 metros (360 ft) de comprimento, formado por valas profundas preenchidas com giz branco triturado. A figura está situada nas encostas superiores de Whitehorse Hill, na paróquia civil inglesa de Uffington, em Oxfordshire, cerca de 16 km a leste de Swindon, 8 km ao sul da cidade de Faringdon e uma distância equivalente a oes\n[…]\nA colina faz parte da escarpa de Berkshire Downs e tem vista para o Vale of White Horse ao norte.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Stow-on-Side",
      "descricao": "Cidade da região de Galar, nos jogos Pokémon Sword e Shield, com um mural antigo e o ginásio de Bea ou de Allister."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome de Stow-on-Side, a cidade de Galar do mural antigo, brinca com o de qual cidadezinha inglesa da região dos Cotswolds?",
    "resposta": "Stow-on-the-Wold",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Stow-on-Side",
      "https://en.wikipedia.org/wiki/Stow-on-the-Wold"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Stow-on-Side",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Stow-on-the-Wold",
        "situacao": "ok",
        "texto": "Stow-on-the-Wold ( ) is a market town and civil parish in Gloucestershire, England, on top of an 800-foot (244 m) hill at the junction of main roads through the Cotswolds, including the Fosse Way (A429), which is of Roman origin. The town was founded by Norman lords to absorb trade from the roads converging there. Fairs have been held by royal charter since 1330; a horse fair is still held on the \n[…]\nThe town belongs to the Stow electoral ward, which covers the parishes of Stow-on-the-Wold, Maugersbury and Swell. In 2010 these parishes had a total population of 2,594. Stow ward is represented on Cotswold District Council by the Liberal Democrat Councillor Dilys Neill, who was first elected in the 2016 local elections. The Stow Division is represented on Gloucestershire County Council by the Conservative Councillor Mark Mackenzie-Charrington.\n[…]\nStow-on-the-Wold also has a Parish Council with 10 members.\n[…]\nFrom 1881 until 1962, the town was served by Stow-on-the-Wold railway station on the Great Western Railway's Banbury and Cheltenham Direct Railway. The nearest station is now at Moreton-in-Marsh, which is 4 miles (6.4 km) away, on the Cotswold Line between Hereford and London Paddington; services are provided by Great Western Railway. An alternative is at Kingham, 5 miles (8.0 km) away from Stow on the same line.\n[…]\nGiven its exposed spot on the top of Stow Hill, the town is often referred to as \"Stow on the Wold, where the winds blow cold.\"\n[…]\nStow-on-the-Wold, Where the wind blows cold.\n[…]\nHigh on the freezing Cotswold.\n[…]\nClement Barksdale (1609–1687), writer and poet, was Rector of Stow-on-the-Wold from 1660 to 1687.\n[…]\nGeorge Wilkinson (1814–1890), was the architect of Stow-on-the-Wold Workhouse in 1836.\n[…]\nJohn Entwistle (1944–2002), musician, producer and bass guitarist of the Who, bought Quarwood in Stow-on-the-Wold in 1976. His funeral was held at St Edward's Church."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Stow-on-the-Wold",
        "situacao": "ok",
        "texto": "Stow-on-the-Wold é uma paróquia e pequena cidade-mercado do distrito de Cotswold, no condado de Gloucestershire, na Inglaterra. De acordo com o Censo de 2011, tinha 2042 habitantes. Tem uma área de 1,5 km².\n[…]\nMedia relacionados com Stow-on-the-Wold no Wikimedia Commons\n[…]\n(em inglês) Lista das paróquias em Gloucestershire.gov.uk\n[…]\n(em inglês) Página da paróquia de Stow-on-the-Wold",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Spikemuth",
      "descricao": "Cidade decadente da região de Galar, nos jogos Pokémon Sword e Shield, onde fica o ginásio de tipo Sombrio de Piers."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em Sword e Shield, a batalha contra Piers em Spikemuth acontece sem Dynamax. Por que o fenômeno não funciona naquela cidade?",
    "resposta": "Ela não fica sobre um Power Spot",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Spikemuth",
      "https://bulbapedia.bulbagarden.net/wiki/Power_Spot"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Spikemuth",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Power_Spot",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Eternatus",
      "descricao": "Pokémon lendário dos tipos Venenoso e Dragão da oitava geração, fonte da energia do Dynamax em Pokémon Sword e Shield."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em Sword e Shield, o jogador enfrenta Eternatus no alto da torre de uma usina de energia. Em que cidade de Galar fica essa usina?",
    "resposta": "Hammerlocke",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Energy_Plant",
      "https://bulbapedia.bulbagarden.net/wiki/Eternatus_(Pok%C3%A9mon)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Energy_Plant",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Eternatus_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Grusha",
      "descricao": "Líder do ginásio de tipo Gelo de Paldea, ex-atleta de snowboard, nos jogos Pokémon Scarlet e Violet."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em Scarlet e Violet, Grusha, ex-atleta de snowboard e líder do ginásio de Gelo, recebe os desafiantes no alto de qual montanha de Paldea?",
    "resposta": "Glaseado",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Grusha",
      "https://bulbapedia.bulbagarden.net/wiki/Glaseado_Mountain"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Grusha",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Glaseado_Mountain",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Hisui",
      "descricao": "Antiga região do jogo Pokémon Legends: Arceus, que corresponde a Sinnoh muitos anos antes dos jogos Diamond e Pearl."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "A antiga Hisui, de Legends: Arceus, recebe colonos vindos de longe para desbravar a região. Ela se inspira na ocupação de Hokkaido em qual era japonesa?",
    "resposta": "Era Meiji",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Hisui",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Legends:_Arceus"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Hisui",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Legends:_Arceus",
        "situacao": "ok",
        "texto": "Pokémon Legends: Arceus is a 2022 action role-playing game developed by Game Freak and published by Nintendo and The Pokémon Company for the Nintendo Switch. It is part of the eighth generation of the Pokémon video game series and serves as a prequel to the fourth-generation titles Pokémon Diamond and Pearl (2006). The game was first announced as part of the Pokémon 25th Anniversary event in Febru\n[…]\nThe game follows the protagonist, who is sent back in time and travels through the Hisui region, which is based on the island of Hokkaido during early Japanese colonization. The game is centered around exploration of the region's several open areas populated with Pokémon, with its main objective being to complete the Pokédex by catching all Pokémon. Pokémon Legends: Arceus was a commercial success, having sold over 14.83 million copies by 31 March 2023.\n[…]\nAfter the player proves themselves in battle, Arceus bestows upon them a part of itself so that it can explore the world that it created by their side.\n[…]\nJordan Middler of Nintendo Life praised Pokémon Legends: Arceus for its \"rewarding\" exploration, \"addictive\" catching mechanics, quality of the Pokémon roster, and its \"genuine sense of scale\", while stating that \"Pokémon Legends: Arceus is quite simply one of the greatest Pokémon games ever made\".\n[…]\nPokémon Legends: Arceus was nominated for several end of the year awards; it was nominated for Best RPG at The Game Awards, as well as nominated for Game of the Year by GamesRadar, GamingBolt, The Washington Post, Empire, VGC, GamesHub, and Polygon.\n[…]\nIn the United States, Legends: Arceus was the best-selling video game in January 2022 (excluding digital downloads). It was the second best-selling game the following month and sixth in March, making it the second best-selling game during the first quarter of 2022 (second only to Elden Ring)."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Legends%3A_Arceus",
        "situacao": "ok",
        "texto": "Pokémon Legends: Arceus (Pokémon LEGENDS アルセウス, Pokemon Rejenzu: Aruseusu; tradução: Pokémon Lendas: Arceus) é um jogo eletrônico de RPG de ação desenvolvido pela Game Freak e publicado pela The Pokémon Company e Nintendo. Faz parte da oitava geração da série de jogos eletrônicos Pokémon e serve como uma prequela para os jogos eletrônicos de RPG do Nintendo DS, Pokémon Diamond e Pearl, de 2006. Fo\n[…]\nPokémon Legends: Arceus é um RPG de ação, uma estreia na série principal de jogos Pokémon. Apesar desta distinção e das mudanças que vêm com ela, Legends: Arceus é dito para homenagear a jogabilidade principal de entradas anteriores na série. Ele apresenta um cenário de mundo aberto na área selvagem introduzido no Pokémon Sword e Shield. O jogo se passa em uma era passada da história da região de Sinnoh, muito antes dos eventos de Pokémon Diamond e Pearl acontecerem.\n[…]\nPokémon Legends: Arceus está sendo desenvolvido pela Game Freak. É o primeiro projeto conhecido no subgênero de RPG de ação realizado pelo estúdio. Foi revelado pela primeira vez em uma apresentação em 26 de fevereiro de 2021, como parte do evento Pokémon 25th Anniversary ao lado de Pokémon Brilliant Diamond e Shining Pearl. Ele servirá como uma prequela de Diamond e Pearl. Foi lançado mundialmente em 28 de janeiro de 2022.\n[…]\nPokémon Legends: Arceus recebeu \"críticas geralmente favoráveis\" de acordo com o agregador de resenhas Metacritic.\n[…]\nA Nintendo informou que o jogo vendeu 6,5 milhões de cópias em todo o mundo dentro de uma semana de seu lançamento, superando outros títulos da série Pokémon lançados para Nintendo Switch, como Sword e Shield e Brilliant Diamond e Shining Pearl. No Japão, vendeu 1,43 milhão de unidades em três dias. Nos Estados Unidos, apenas as vendas físicas de Legends: Arceus (excluindo downloads digitais) fizeram dele o jogo eletrônico mais vendido de janeiro de 2022.\n[…]\nSítio oficial (em japonês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  }
]

---

# MANIFESTO

# Manifesto de Perguntas — Mestre2

> **Versão preliminar 0.71 — 2026-10-16**
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
- no máximo **3 perguntas por âncora** no banco inteiro, somando texto e figura, e no máximo **2 com figura**. As exclusivas de uma coleção têm conta à parte (§6, "Coleções");
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

---

# Regras de conteúdo do modo (modo_pokemon.md)

Estas são as regras de conteúdo do **modo Pokémon**, que valem para as perguntas exclusivas dele (`colecao: "pokemon"`, `exclusiva: true`). Elas partem da Parte I do MANIFESTO acima: princípios, classificação, ângulos, tipos de pergunta, redação para voz e critérios de qualidade continuam valendo. **Onde estas regras e o MANIFESTO divergirem, valem estas.**

### Público e profundidade

- **O público é quem gosta de pokémon:** já jogou alguns jogos, viu o anime e conhece pokémon de várias gerações. Isso substitui o "público informado, mas leigo" do MANIFESTO §7: termos da franquia (tipo, evolução, ginásio, insígnia, lendário, Pokédex, megaevolução, iniciais) dispensam explicação.
- **Pode ir mais fundo que no jogo original**, mas a régua da justiça continua: um fã diria "boa pergunta", e não "que detalhe arbitrário". Profundidade vem do fato, não da obscuridade (MANIFESTO, princípio 4).
- **Entram:** a origem dos nomes, a inspiração dos desenhos, as lendas dos lendários, como e em quem um pokémon evolui, as formas regionais, o enredo e os lugares dos jogos, os líderes e campeões, os bastidores da criação, o anime, os filmes, a dublagem e o Pokémon no Brasil.
- **Ficam de fora:** números da Pokédex, estatísticas, valores de dano e de atributos, probabilidades e mecânicas internas (a chance de um brilhante, taxas de captura), golpes e habilidades obscuros, falhas de programação e dados escondidos (MissingNo., itens duplicados), detalhes que só um competidor saberia, e perguntas que pedem listas. A exceção são os cartões feitos de dados, o de tipo e atributos base e o de golpe ("Qual é esse ataque?"), em que os números aparecem na figura como pista e ninguém precisa sabê-los de cor.

### Cobertura

A franquia inteira, distribuída por **todas as gerações**, e não só Kanto. Cada lote de texto tem um dos três subtemas do modo como foco e procura fatos ainda não usados.

### Variedade

- **Não há cota de ângulos nos lotes:** não valem o máximo de 25% num mesmo ângulo, o mínimo de 6 ângulos, o máximo de 30% para `identidade` + `atributo` nem o piso de 20% para `conexao` + `nome` (MANIFESTO §9). Um lote pode se concentrar no ângulo que o foco pede.
- **Continuam valendo:** no máximo 2 perguntas por âncora no mesmo lote, nunca com o mesmo ângulo; no máximo 2 perguntas com o mesmo ângulo por âncora, na coleção; e perguntas do mesmo ângulo não repetem o mesmo molde de frase (MANIFESTO §5).
- Na silhueta e no cartão de tipo e atributos **não há cota de emblemáticos: todos os pokémon entram**, famosos ou não, de todas as gerações e em todas as formas da linha evolutiva.

### Saturação e repetição

- **A conta é só na coleção.** Na saturação de uma âncora, contam as perguntas com `colecao: "pokemon"`, exclusivas ou não, e não as do jogo original. As exclusivas, por sua vez, não contam na saturação do jogo original, porque uma partida nunca sorteia os dois conjuntos.
- **No máximo 5 perguntas por âncora** na coleção, somando texto e figura, e no máximo **2 com figura**. Isso substitui o limite de 3 do MANIFESTO §4.
- **Silhueta e cartão ficam fora da saturação.** A silhueta da casa "Quem é esse pokémon?", qualquer que seja a pergunta, e o cartão de tipo e atributos não contam nos limites acima, e o mesmo pokémon pode ter os dois. Cada pokémon tem no máximo **uma silhueta** e **um cartão**.
- **Um fato, uma pergunta, na coleção inteira:** uma pergunta nova não pode perguntar um fato que outra pergunta da coleção já pergunta, **mesmo com outra âncora**. Ash e Satoshi é o mesmo fato, pela âncora Ash ou pela âncora Satoshi Tajiri; os nomes de cores das cidades de Kanto também, por Pallet ou por Viridian.

### Nomes

Os jogos ganharam tradução oficial para o português do Brasil a partir de Scarlet e Violet, e o anime sempre foi dublado. Os fãs mais antigos conhecem os nomes em inglês, e os mais novos, os brasileiros. Por isso:

- **Golpes, itens, habilidades, lugares, organizações e personagens:** quando o nome oficial brasileiro é diferente do inglês, a pergunta usa **os dois**.
  - **No enunciado:** o brasileiro primeiro, depois o inglês, ligados por "ou", sem parênteses: "Nos jogos de Kanto, quem lidera a Equipe Rocket, ou Team Rocket?".
  - **Na resposta:** o brasileiro, com o inglês entre parênteses: "Equipe Rocket (Team Rocket)". É o caso de parênteses "muito apropriado" do MANIFESTO §7.
  - **Na múltipla escolha:** as quatro alternativas seguem a mesma forma, para a resposta não se destacar. O limite de 4 palavras vale para cada nome.
  - **Nas variantes da âncora:** os dois nomes.
- **Só nome brasileiro oficial**, de que se tenha certeza: o dos jogos traduzidos, o da dublagem ou o do material oficial da The Pokémon Company no Brasil. Nada de tradução livre: na dúvida, só o nome em inglês.
- **Os nomes dos pokémon** são os mesmos no Brasil e em inglês, e vão uma vez só.
- Os **tipos** usam sempre os nomes oficiais brasileiros (Planta, Venenoso, Fantasma), como nos cartões.
- **"pokémon"**, em minúsculas, é o nome comum da criatura e não vai para o plural ("os pokémon"); **"Pokémon"**, com maiúscula, é a franquia.

### Redação para voz

Além do MANIFESTO §7:
- Nomes com símbolos ou sinais vão na forma falada: "Nidoran fêmea" e "Nidoran macho", e não com ♀ e ♂; "Porygon Z", sem hífen.
- Gerações por ordinal, por extenso: "na quarta geração", e não "na Gen 4".
- Siglas da comunidade (PP, HM, TM, IV, EV) não entram no enunciado; se o conceito importar, diga o que ele é.

### Atemporalidade

A franquia continua lançando jogos e pokémon. Nada de "o jogo mais recente", "a geração atual", "o último pokémon", "quantos pokémon existem", "quantas regiões há" nem de recordes de venda ou de audiência que ainda podem ser batidos. Contagens só de conjuntos fechados: "quantos pokémon tinha a primeira geração" vale.

### Fontes

A Bulbapedia é a referência da franquia, mas bloqueia acesso automatizado: o crítico não lê os trechos dela. Por isso, toda pergunta cita, além da Bulbapedia, uma página da **Wikipédia**, em inglês ou em português, que sustente o fato, sempre que houver uma. Uma pergunta só com a Bulbapedia depende do conhecimento do crítico e só passa com fato amplamente documentado.

### Distratores

Sempre da franquia: outros pokémon, personagens, lugares, itens ou jogos de Pokémon, de preferência da mesma geração ou de gerações vizinhas. Nunca uma alternativa de fora do universo Pokémon.
