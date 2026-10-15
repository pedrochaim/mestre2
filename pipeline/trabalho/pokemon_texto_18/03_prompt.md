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
      "nome": "Máquina Oculta",
      "descricao": "Item dos jogos Pokémon que ensinava golpes usados também fora das batalhas, como Surf e Força, para abrir caminho pelo mapa."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "As Máquinas Ocultas, com golpes como Surf e Força, existiam na série desde Red e Blue. Em que par de jogos elas foram abolidas?",
    "resposta": "Sun e Moon",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/HM",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Sun_and_Moon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/HM",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Sun_and_Moon",
        "situacao": "ok",
        "texto": "Pokémon Sun and Pokémon Moon are 2016 role-playing video games developed by Game Freak and published by The Pokémon Company and Nintendo for the Nintendo 3DS. They are the first installments in the seventh generation of the Pokémon video game series. First announced in February 2016, Sun and Moon were released worldwide on 18 November 2016, commemorating the franchise's 20th anniversary.\n[…]\nPokémon Sun and Moon introduce a powerful new type of move known as Z-Moves which can only be used once per battle. Hidden moves, which were used to navigate terrain in past games, have been replaced by specialized Pokémon that can be summoned at will. The \"Poké Finder\" is a function of the Rotom Pokédex which allows players to take photos of Pokémon in the wild, similar to Pokémon Snap.\n[…]\nPokémon caught or obtained in Pokémon X, Y, Omega Ruby and Alpha Sapphire can be transferred to Sun and Moon. The games are also compatible with Pokémon Bank, an online Pokémon storage system introduced during the previous generation of Pokémon games. In a special Pokémon Direct on 26 February 2016, Tsunekazu Ishihara from The Pokémon Company announced that Pokémon caught in the Virtual Console versions of Red, Blue, and Yellow are transferable to Sun and Moon via Pokémon Bank.\n[…]\nThe international release, known as Pokémon Sun & Pokémon Moon: Super Music Collection, was released on iTunes on the same date.\n[…]\nAlex Olney of Nintendo Life said that \"the plot in Sun & Moon is the deepest and most ambitious Game Freak has dared attempt\", he also called them the best Pokémon games ever produced, commenting that Alola's design felt natural and organic, praising Game Freak for successfully balancing additional mechanics without alienating existing fans. Chris Tapsell of Eurogamer said the games were \"the best generation in more than a decade\". They earned an \"essential\" ranking from the site."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Sun_e_Moon",
        "situacao": "ok",
        "texto": "Pokémon Sun (ポケットモンスター　サン, Poketto Monsutā San; \"Monstros de Bolso Sun\", que traduzido do inglês para o português significa Sol, Sol em japonês é 太陽 Taiyō) e Pokémon Moon (ポケットモンスター　ムーン, Poketto Monsutā Mūn; \"Monstros de Bolso Moon\"\", que traduzido do inglês para o português significa Lua, Lua em japonês é 月 Tsuki) são dois jogos eletrônicos de RPG de 2016, faz parte da sétima geração da série Pok\n[…]\nPokémon Sun e Moon são as primeiras entradas da série a estarem disponíveis em chinês simplificado e tradicional, junto com inglês, francês, espanhol, italiano, alemão, japonês e coreano, para um total de nove idiomas disponíveis. Os jogos apresentam variantes de Pokémon introduzidas em jogos mais antigos com novas tipificações e aparências, conhecidas como Formas de Alola. Vulpix e Ninetales de Alola, que são tipos de fogo em outras regiões, são respectivamente os tipos Gelo duplo e Fada.\n[…]\nPokémon Sun e Moon apresentam um novo tipo de movimento poderoso conhecido como Movimento-Z, que só pode ser usado uma vez por batalha. Hidden Moves, que eram usados ​​para navegar por terreno em jogos anteriores, foram substituídos por Pokémon especializados que podem ser convocados à vontade. O \"Poké Finder\" é uma função do Rotom Pokédex que permite aos jogadores tirar fotos de Pokémon na natureza, semelhante ao Pokémon Snap.\n[…]\nPokémon capturados em Pokémon X, Y, Omega Ruby e Alpha Sapphire podem ser transferidos para Sun e Moon. Os jogos também são compatíveis com Pokémon Bank, um sistema de armazenamento Pokémon online introduzido durante a geração anterior de jogos Pokémon. Em um Pokémon Direct especial em 26 de fevereiro de 2016, Tsunekazu Ishihara da The Pokémon Company anunciou que Pokémon capturados nas versões do Virtual Console de Red, Blue e Yellow são transferíveis para a Sun e Moon via Pokémon Bank.\n[…]\nPlaylist Pokémon Sun e Moon no YouTube  Canal Oficial da Pokémon em Português",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Desafio das Ilhas",
      "descricao": "Jornada de Pokémon Sun e Moon que substitui os ginásios, com provas em cada ilha da região de Alola."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No Desafio das Ilhas de Sun e Moon, os kahunas comandam as grandes provas. Que título têm os jovens que comandam as provas comuns?",
    "resposta": "Capitão",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Island_challenge",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Sun_and_Moon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Island_challenge",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Sun_and_Moon",
        "situacao": "ok",
        "texto": "Pokémon Sun and Pokémon Moon are 2016 role-playing video games developed by Game Freak and published by The Pokémon Company and Nintendo for the Nintendo 3DS. They are the first installments in the seventh generation of the Pokémon video game series. First announced in February 2016, Sun and Moon were released worldwide on 18 November 2016, commemorating the franchise's 20th anniversary.\n[…]\nThe games take place on a tropical archipelago, a group of islands known as the Alola Region. Joe Skrebels of IGN describes it as \"Pokémon's take on Hawaii\". During an interview at E3 2016, Shigeru Ohmori noted that Game Freak staff took trips to Hawaii to conduct research for Sun and Moon.\n[…]\nUnlike in previous games, trials involve battles with powered-up Pokémon, followed by battles with each island's Kahuna upon completion of an island's trials. Throughout this, the player encounters Team Skull, a gang of people who quit the island trials whose members include their boss Guzma, and enforcer Gladion. The player also encounters the Aether Foundation, an organization led by a blonded woman named Lusamine aiming to shelter Pokémon from various threats.\n[…]\nThis causes Nebby to evolve into a cocoon-like form while Ultra Beasts are unleashed onto Alola's islands, forcing the island Kahunas and guardian deities to fight them.\n[…]\nAccording to composer Junichi Masuda, who co-produced the game, the soundtracks used in Sun and Moon were based on traditional Hawaiian music styles. However, while it utilizes their core rhythms, Alola's music employs \"completely different\" melodies while still invoking a tropical island feel. On 30 November 2016 the Nintendo 3DS Pokémon Sun and Moon Super Music Complete, a four-disk soundtrack containing 169 songs, 160 from the games and 9 special tracks, was released in Japan."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Sun_e_Moon",
        "situacao": "ok",
        "texto": "Pokémon Sun (ポケットモンスター　サン, Poketto Monsutā San; \"Monstros de Bolso Sun\", que traduzido do inglês para o português significa Sol, Sol em japonês é 太陽 Taiyō) e Pokémon Moon (ポケットモンスター　ムーン, Poketto Monsutā Mūn; \"Monstros de Bolso Moon\"\", que traduzido do inglês para o português significa Lua, Lua em japonês é 月 Tsuki) são dois jogos eletrônicos de RPG de 2016, faz parte da sétima geração da série Pok\n[…]\nOs jogos acontecem em um arquipélago tropical, um grupo de ilhas conhecido como região de Alola. Joe Skrebels da IGN descreve-o como \"Pokémon\" takes no Havaí\". Durante uma entrevista na E3 2016, Shigeru Ohmori observou que a equipe da Game Freak fez viagens ao Havaí para realizar pesquisas para Sun e Moon.\n[…]\nIsso faz com que Nebby evolua para uma forma semelhante a um casulo enquanto Ultra Besta são soltos nas ilhas de Alola, forçando a ilha Kahunas e divindades guardiãs para lutar contra eles.\n[…]\nO diretor do jogo Shigeru Ohmori afirmou que a escolha de Sun e Moon como título foi inspirada na representação metafórica dos dois corpos celestes das relações humanas. O Havaí foi escolhido como base para a região do jogo após a determinação do título, devido às suas noites claras e sol abundante. O desenvolvimento começou imediatamente após Pokémon Omega Ruby e Alpha Sapphire ser concluído e Ohmori manter sua posição de diretor de jogo.\n[…]\nDe acordo com a Nintendo of America, Sun e Moon foram os títulos mais vendidos na história da Nintendo na época. Em 30 de setembro de 2020, Sun e lua vendeu 16.20 milhões de cópias, classificando-os como os terceiros mais vendido títulos Nintendo 3DS por trás de ambos Mario Kart 7 e Pokémon X e Y. Durante uma teleconferência de resultados do GameStop Q3, Pokémon Sun e Moon foram considerados como tendo o maior número de encomendas de qualquer videogame nos últimos cinco anos.\n[…]\nPlaylist Pokémon Sun e Moon no YouTube  Canal Oficial da Pokémon em Português",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Rotom Dex",
      "descricao": "Pokédex falante de Pokémon Sun e Moon, habitada por um Rotom, que dá dicas e mostra o mapa ao jogador."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em Sun e Moon, a Pokédex do jogador fala, dá dicas e mostra o mapa. Que pokémon vive dentro dela?",
    "resposta": "Rotom",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Rotom_Pok%C3%A9dex"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Rotom_Pok%C3%A9dex",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Forma regional",
      "descricao": "Variante de um pokémon já conhecido, com aparência e às vezes tipos diferentes, introduzida em Pokémon Sun e Moon com as formas de Alola."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em Sun e Moon, Vulpix e Sandshrew aparecem em Alola com tipo Gelo e outra aparência. Segundo o jogo, por que isso acontece?",
    "resposta": "Adaptação ao ambiente de Alola",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Regional_form",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Sun_and_Moon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Regional_form",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Sun_and_Moon",
        "situacao": "ok",
        "texto": "Pokémon Sun and Pokémon Moon are 2016 role-playing video games developed by Game Freak and published by The Pokémon Company and Nintendo for the Nintendo 3DS. They are the first installments in the seventh generation of the Pokémon video game series. First announced in February 2016, Sun and Moon were released worldwide on 18 November 2016, commemorating the franchise's 20th anniversary.\n[…]\nPokémon Sun and Moon are role-playing video games with adventure elements, set in the fictional Alola Region (loosely based on Hawaii), presented in a third-person, overhead perspective. The player controls a young Trainer who goes on a quest to catch and train creatures known as Pokémon, and win battles against other Trainers.\n[…]\nThe games take place on a tropical archipelago, a group of islands known as the Alola Region. Joe Skrebels of IGN describes it as \"Pokémon's take on Hawaii\". During an interview at E3 2016, Shigeru Ohmori noted that Game Freak staff took trips to Hawaii to conduct research for Sun and Moon.\n[…]\nThe leading scientist in the Alola Region is Professor Kukui, whose name comes from the kukui, also known as the candlenut, the Hawaiian state tree, continuing the trend of Pokémon professors being named after trees. Team Skull is the name of the villainous group in Alola. The Aether Foundation is an organization which studies Ultra Beasts, mysterious creatures from another dimension. Though Professor Samuel Oak does not appear in Sun and Moon, his cousin Samson Oak takes his place.\n[…]\nThis causes Nebby to evolve into a cocoon-like form while Ultra Beasts are unleashed onto Alola's islands, forcing the island Kahunas and guardian deities to fight them.\n[…]\nThe international release, known as Pokémon Sun & Pokémon Moon: Super Music Collection, was released on iTunes on the same date."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Sun_e_Moon",
        "situacao": "ok",
        "texto": "Pokémon Sun (ポケットモンスター　サン, Poketto Monsutā San; \"Monstros de Bolso Sun\", que traduzido do inglês para o português significa Sol, Sol em japonês é 太陽 Taiyō) e Pokémon Moon (ポケットモンスター　ムーン, Poketto Monsutā Mūn; \"Monstros de Bolso Moon\"\", que traduzido do inglês para o português significa Lua, Lua em japonês é 月 Tsuki) são dois jogos eletrônicos de RPG de 2016, faz parte da sétima geração da série Pok\n[…]\nPokémon Sun e Moon são as primeiras entradas da série a estarem disponíveis em chinês simplificado e tradicional, junto com inglês, francês, espanhol, italiano, alemão, japonês e coreano, para um total de nove idiomas disponíveis. Os jogos apresentam variantes de Pokémon introduzidas em jogos mais antigos com novas tipificações e aparências, conhecidas como Formas de Alola. Vulpix e Ninetales de Alola, que são tipos de fogo em outras regiões, são respectivamente os tipos Gelo duplo e Fada.\n[…]\nSandshrew e Sandslash de Alola, que são tipos Solo em outras regiões, são do tipo Gelo e Metal. Meowth e Persa de Alola, que são tipos normais em outras regiões, são tipos Escuros. Algumas evoluções de Pokémon também ganharam tipificações duplas, como Marowak de Alola que agora é do tipo Fogo e Fantasma e Raichu de Alola, do tipo Elétrico e Psíquico.\n[…]\nO principal cientista da região de Alola é o professor Kukui, cujo nome vem do kukui, também conhecido como nogueira-de-iguape, a árvore do estado havaiano, continuando a tendência de os professores Pokémon terem nomes de árvores. Equipe Skull é o nome do grupo vilão de Alola. A Fundação Aether é uma organização que estuda Ultra Bestas, criaturas misteriosas de outra dimensão. Embora o Professor Carvalho não apareça em Sun e Moon, seu primo Gabriel Carvalho toma seu lugar.\n[…]\nPlaylist Pokémon Sun e Moon no YouTube  Canal Oficial da Pokémon em Português",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Ultracriaturas",
      "descricao": "Pokémon misteriosos de Pokémon Sun e Moon, como Nihilego e Buzzwole, vindos de outra dimensão por fendas chamadas Ultra Wormholes."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em Sun e Moon, as Ultracriaturas, como Nihilego, chegam a Alola por fendas abertas no céu. De onde elas vêm?",
    "resposta": "Do Ultra Espaço",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Ultra_Beast",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Sun_and_Moon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Ultra_Beast",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Sun_and_Moon",
        "situacao": "ok",
        "texto": "Pokémon Sun and Pokémon Moon are 2016 role-playing video games developed by Game Freak and published by The Pokémon Company and Nintendo for the Nintendo 3DS. They are the first installments in the seventh generation of the Pokémon video game series. First announced in February 2016, Sun and Moon were released worldwide on 18 November 2016, commemorating the franchise's 20th anniversary.\n[…]\nThe leading scientist in the Alola Region is Professor Kukui, whose name comes from the kukui, also known as the candlenut, the Hawaiian state tree, continuing the trend of Pokémon professors being named after trees. Team Skull is the name of the villainous group in Alola. The Aether Foundation is an organization which studies Ultra Beasts, mysterious creatures from another dimension. Though Professor Samuel Oak does not appear in Sun and Moon, his cousin Samson Oak takes his place.\n[…]\nThe player then proceeds to battle through Aether Paradise with Hau and Gladion's help, eventually defeating Aether Foundation President Lusamine, who is revealed to be Gladion and Lillie's mother. Despite this, Lusamine and Guzma manage to open an Ultra Wormhole, with the former overclocking Nebby's powers, transporting them to Ultra Space, the Ultra Beasts' dimension.\n[…]\nThis causes Nebby to evolve into a cocoon-like form while Ultra Beasts are unleashed onto Alola's islands, forcing the island Kahunas and guardian deities to fight them.\n[…]\nIn the postgame, the player is contacted by two members of the International Police: Anabel, who was head of the Battle Tower in Pokémon Emerald, and Looker, a recurring detective since Pokémon Platinum. The player assists the two with handling the wild Ultra Beasts that Lusamine let loose into Alola in a series of quests. Following the final quest, Looker reveals that he saw another Ultra Beast, although Anabel dismisses this."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Sun_e_Moon",
        "situacao": "ok",
        "texto": "Pokémon Sun (ポケットモンスター　サン, Poketto Monsutā San; \"Monstros de Bolso Sun\", que traduzido do inglês para o português significa Sol, Sol em japonês é 太陽 Taiyō) e Pokémon Moon (ポケットモンスター　ムーン, Poketto Monsutā Mūn; \"Monstros de Bolso Moon\"\", que traduzido do inglês para o português significa Lua, Lua em japonês é 月 Tsuki) são dois jogos eletrônicos de RPG de 2016, faz parte da sétima geração da série Pok\n[…]\nSun e Moon introduziram 81 novas espécies Pokémon e novos recursos, como formas de Alola de Pokémon da geração anterior, movimentos poderosos conhecidos como Movimento-Z, criaturas alienígenas conhecidas como Ultra Bestas, batalha atualizada e mecânica de treinamento e gráficos 3D poligonais aprimorados.\n[…]\nO principal cientista da região de Alola é o professor Kukui, cujo nome vem do kukui, também conhecido como nogueira-de-iguape, a árvore do estado havaiano, continuando a tendência de os professores Pokémon terem nomes de árvores. Equipe Skull é o nome do grupo vilão de Alola. A Fundação Aether é uma organização que estuda Ultra Bestas, criaturas misteriosas de outra dimensão. Embora o Professor Carvalho não apareça em Sun e Moon, seu primo Gabriel Carvalho toma seu lugar.\n[…]\nO jogador então prossegue para a batalha em Aether Paradise com a ajuda de Hau e Gladion, eventualmente derrotando o presidente da Aether, Lusamine, que se revela ser a mãe de Gladion e Lillie. Apesar disso, Lusamine e Guzma conseguem abrir um Ultra Wormhole, com o ex-overclock dos poderes de Nebby, transportando-os para o Ultra Espaço, a dimensão dos Ultra Bestas.\n[…]\nPokémon Ultra Sun (ポケットモンスター ウルトラサン, Poketto Monsutā Urutora San; \"Pocket Monsters: Ultra Sun\") e Pokémon Ultra Moon (ポケットモンスター ウルトラムーン, Poketto Monsutā Urutora Mūn; \"Pocket Monsters: Ultra Moon\") são versões aprimoradas de Pokémon Sun e Moon desenvolvidas pela Game Freak e publicadas pela The Pokémon Company e Nintendo para o Nintendo 3DS.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Professor Kukui",
      "descricao": "Professor pokémon da região de Alola, que entrega o inicial ao jogador em Pokémon Sun e Moon."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "O Professor Kukui, que recebe o jogador em Alola em Sun e Moon, dedica suas pesquisas a que aspecto dos pokémon?",
    "resposta": "Os golpes",
    "distratores": [
      "A megaevolução",
      "Os ovos",
      "A evolução"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Kukui"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Kukui",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Pokémon Sun e Moon",
      "descricao": "Par de jogos Pokémon da sétima geração, para Nintendo 3DS, ambientado na região tropical de Alola."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Pokémon Sun segue o horário real do console. Em Pokémon Moon, o relógio do jogo fica deslocado em quantas horas?",
    "resposta": "Doze horas",
    "distratores": [
      "Seis horas",
      "Três horas",
      "Oito horas"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Sun_and_Moon",
      "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Sun_and_Moon_Versions"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Sun_and_Moon",
        "situacao": "ok",
        "texto": "Pokémon Sun and Pokémon Moon are 2016 role-playing video games developed by Game Freak and published by The Pokémon Company and Nintendo for the Nintendo 3DS. They are the first installments in the seventh generation of the Pokémon video game series. First announced in February 2016, Sun and Moon were released worldwide on 18 November 2016, commemorating the franchise's 20th anniversary.\n[…]\nA pair of enhanced versions, Pokémon Ultra Sun and Pokémon Ultra Moon, were released for the same consoles on 17 November 2017.\n[…]\nPokémon caught or obtained in Pokémon X, Y, Omega Ruby and Alpha Sapphire can be transferred to Sun and Moon. The games are also compatible with Pokémon Bank, an online Pokémon storage system introduced during the previous generation of Pokémon games. In a special Pokémon Direct on 26 February 2016, Tsunekazu Ishihara from The Pokémon Company announced that Pokémon caught in the Virtual Console versions of Red, Blue, and Yellow are transferable to Sun and Moon via Pokémon Bank.\n[…]\nPokémon Sun and Moon received a score of 87/100 on Metacritic based on 84 reviews, indicating \"generally favorable reviews\". Fellow review aggregator OpenCritic assessed that the games received \"mighty\" approval, being recommended by 95% of critics. This placed Sun and Moon as the 5th and 6th highest-rated 3DS games in 2016, and the 19th and 20th on the console of all time.\n[…]\nIt is GameStop's best-selling game of 2016, outselling Call of Duty: Infinite Warfare. On its first day of release, Pokémon Sun and Moon shipped 10 million units worldwide. The games sold over 1.9 million copies in Japan in its first three days on the market and are Nintendo's biggest game launch of all time in Europe, with the United Kingdom and France launches selling 368,000 and 450,000 copies respectively within a week out of the continent's 1.5 million sales."
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Sun_and_Moon_Versions",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Sun_e_Moon",
        "situacao": "ok",
        "texto": "Pokémon Sun (ポケットモンスター　サン, Poketto Monsutā San; \"Monstros de Bolso Sun\", que traduzido do inglês para o português significa Sol, Sol em japonês é 太陽 Taiyō) e Pokémon Moon (ポケットモンスター　ムーン, Poketto Monsutā Mūn; \"Monstros de Bolso Moon\"\", que traduzido do inglês para o português significa Lua, Lua em japonês é 月 Tsuki) são dois jogos eletrônicos de RPG de 2016, faz parte da sétima geração da série Pok\n[…]\nAlém disso, os relógios dos dois jogos são ajustados com 12 horas de diferença um do outro, com o Sun operando no tempo do 3DS e a Moon operando 12 horas à frente. Personalização de personagens como visto anteriormente em X e Y retornam no Sun e Moon. Um novo recurso \"Pokémon Refresh\" permite aos jogadores cuidar e alimentar seus Pokémon. Mega Evolução, uma mecânica de jogo introduzida pela primeira vez em X e Y, retorna em Sun e Moon.\n[…]\nEles foram anunciados no dia 6 de junho de 2017 durante um Pokémon com tema apresentação Nintendo Direct e foram lançado mundialmente em 17 de novembro de 2017. Eles apresentam um conjunto enredo alternativo no mundo de Sun e Moon, e incluir Pokémon e não locais disponível nos jogos originais.\n[…]\nPor outro lado, Tapsell também observou que as primeiras horas dos jogos incluíam muitos tutoriais e jogabilidade protegida. Jeremy Freguesia de US Gamer avaliou que \"Movimento-Z sentir assombroso\" tomar \"um caminho muito longo\", apesar de ser a campanha mais envolvente da série ofereceu em um longo tempo, enquanto Allegra Frank de Polygon criticou sua jogabilidade linear e falta de conteúdo além do enredo principal, embora os jogos tenham \"a jornada Pokémon mais memorável em anos\".\n[…]\nÉ o jogo mais vendido da GameStop em 2016, superando as vendas de Call of Duty: Infinite Warfare. Em seu primeiro dia de lançamento, Pokémon Sun e Moon vendeu 10 milhões de unidades em todo o mundo.\n[…]\nPlaylist Pokémon Sun e Moon no YouTube  Canal Oficial da Pokémon em Português",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Tapu Koko",
      "descricao": "Pokémon dos tipos Elétrico e Fada, número 785 da Pokédex Nacional."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Cada ilha de Alola tem um tapu protetor. Qual deles guarda Melemele, a ilha onde começa a jornada de Sun e Moon?",
    "resposta": "Tapu Koko",
    "distratores": [
      "Tapu Lele",
      "Tapu Bulu",
      "Tapu Fini"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Tapu_Koko_(Pok%C3%A9mon)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Tapu_Koko_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Pokémon Ultra Sun e Ultra Moon",
      "descricao": "Versões ampliadas de Pokémon Sun e Moon para Nintendo 3DS, com nova história na região de Alola centrada em Necrozma."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Pokémon Ultra Sun e Ultra Moon, as versões ampliadas da aventura em Alola, foram lançados em que ano?",
    "resposta": "2017",
    "distratores": [
      "2016",
      "2018",
      "2019"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Ultra_Sun_and_Ultra_Moon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Ultra_Sun_and_Ultra_Moon",
        "situacao": "ok",
        "texto": "Pokémon Ultra Sun and Pokémon Ultra Moon are 2017 role-playing video games developed by Game Freak and published by The Pokémon Company and Nintendo for the Nintendo 3DS. Part of the seventh generation of the Pokémon video game series, the games are enhanced versions of Pokémon Sun and Pokémon Moon, which released the previous year. Announced in June 2017, they were released worldwide on 17 Novemb\n[…]\nIn the post-game, the games include a tribute to former Nintendo CEO Satoru Iwata, mentioning his role in the development of Pokémon Gold and Silver. The games received their first patch in December 2017, fixing several bugs.\n[…]\nUltra Sun and Ultra Moon were revealed in a Pokémon Direct on 6 June 2017. Initial clerical errors in the Pokémon website showed that the games' release date for the Nintendo Switch were \"TBA\", although The Pokémon Company later clarified that the games were exclusive to the Nintendo 3DS.\n[…]\nPrior to the release, both games were among the most highly anticipated titles for the Nintendo 3DS in 2017, according to Nielsen.\n[…]\nFollowing release, the two games sold 1.2 million physical copies—excluding digital copies purchased from the Nintendo eShop—within the first three days on sale in Japan. By the end of the year, the two games had sold over 2 million copies in Japan alone, making it the best-selling video game in the country for 2017. Sales from Ultra Sun and Ultra Moon pushed the cumulative sales of the franchise to exceed the 300 million copies sold milestone.\n[…]\nAccording to Amazon, Ultra Sun and Ultra Moon were their seventh-best selling video games in 2017—however, they drop to 25th for Ultra Sun and 28th for Ultra Moon if other video game-related products and console variations are accounted for. As of March 31, 2025, a combined total of 9.26 million units have been sold worldwide, ranking them as the ninth-best-selling Nintendo 3DS titles of all time."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Ultra_Sun_e_Ultra_Moon",
        "situacao": "ok",
        "texto": "Pokémon Ultra Sun e Pokémon Ultra Moon (ポケットモンスター ウルトラサン・ウルトラムーン, Poketto Monsutā Urutora San・Urutora Mūn; \"Monstros de Bolso: Ultra Sun・Ultra Moon, que traduzido do inglês para o português significa Ultra Sol e Ultra Lua, Sol e Lua em japonês é respectivamente 太陽 Taiyō e 月 Tsuki) são dois jogos eletrônicos de RPG de 2017, desenvolvidos pela Game Freak, publicados pela The Pokémon Company, e distr\n[…]\nOs jogos foram anunciados oficialmente pela Nintendo Direct no dia 6 de junho de 2017. Os títulos são versões melhoradas de Pokémon Sun e Moon com um enredo modificado, semelhante às \"versões superiores\" anteriores como Yellow, Crystal, Emerald e Platinum. Os dois jogos são da sétima geração e o último jogo da série principal de Pokémon para linha de consoles do Nintendo 3DS.\n[…]\nOs jogos foram lançados mundialmente no dia 17 de novembro de 2017.\n[…]\nNo pós-jogo, os jogos incluem uma homenagem ao ex-CEO da Nintendo, Satoru Iwata, mencionando seu papel no desenvolvimento de Pokémon Gold e Silver. Os jogos receberam seu primeiro patch em dezembro de 2017, corrigindo vários erros.\n[…]\nUltra Sun e Ultra Moon foram revelados em um Pokémon Direct em 6 de junho de 2017. Erros de escrita iniciais no site Pokémon mostraram que a data de lançamento dos jogos para o Nintendo Switch era \"TDA\", embora The Pokémon Company posteriormente esclarecesse que os jogos eram exclusivos para o Nintendo 3DS.\n[…]\nDe acordo com a Amazon, Ultra Sun e Ultra Moon foram seus sétimos jogos eletrônicos mais vendidos em 2017 – no entanto, caíram para 25º para Ultra Sun e 28º para Ultra Moon se outros produtos relacionados a jogo eletrônico e variações de console forem levados em consideração. Em 31 de março de 2020, os jogos venderam 8,77 milhões de cópias, classificando-os como o nono título de Nintendo 3DS mais vendido de todos os tempos.\n[…]\nPlaylist Pokémon Ultra Sun e Ultra Moon no YouTube  Canal Oficial da Pokémon em Português",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Pokémon Ultra Sun e Ultra Moon",
      "descricao": "Versões ampliadas de Pokémon Sun e Moon para Nintendo 3DS, com nova história na região de Alola centrada em Necrozma."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "As capas de Ultra Sun e Ultra Moon mostram Solgaleo e Lunala fundidos com qual outro pokémon lendário?",
    "resposta": "Necrozma",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Ultra_Sun_and_Ultra_Moon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Ultra_Sun_and_Ultra_Moon",
        "situacao": "ok",
        "texto": "Pokémon Ultra Sun and Pokémon Ultra Moon are 2017 role-playing video games developed by Game Freak and published by The Pokémon Company and Nintendo for the Nintendo 3DS. Part of the seventh generation of the Pokémon video game series, the games are enhanced versions of Pokémon Sun and Pokémon Moon, which released the previous year. Announced in June 2017, they were released worldwide on 17 Novemb\n[…]\nUltra Sun and Ultra Moon introduce some new Ultra Beasts: Stakataka, Blacephalon, Poipole and its evolution, Naganadel. In addition, there are new forms for the legendary Pokémon Necrozma, dubbed \"Dusk Mane\" and \"Dawn Wings\" forms, which are achieved by absorbing the legendary Pokémon Solgaleo and Lunala, respectively; it is conceptually similar to Black and White Kyurem from Black 2 and White 2. Also, a new Lycanroc form was added, Dusk Lycanroc.\n[…]\nNew Z-Moves are available for multiple Pokémon, including Solgaleo, Lunala, Lycanroc, Mimikyu and Necrozma. An upgrade to the Rotom Pokédex adds Roto-Loto, which allows the player to use boosts, akin to O-Powers from the previous generation; and Z-Rotom Power, which allows players to use up to two Z-Moves per battle.\n[…]\nMuch of the story revolves around multiple Legendary Pokémon: a Cosmog, nicknamed Nebby, who eventually evolves into a Solgaleo in Ultra Sun, or Lunala in Ultra Moon; and Necrozma, who attempts to seize the light from Alola.\n[…]\nNecrozma then absorbs the Legendary Pokémon, gaining its Dusk Mane or Dawn Wings form in the respective version, and unleashes the Ultra Beasts upon Alola before fighting the player. After the player defeats it, Necrozma escapes into the Ultra Megalopolis, taking the world's light with it while the player, with the help of the Ultra Recon Squad, travels on the opposite Legendary featured in each game—Lunala in Ultra Sun or Solgaleo in Ultra Moon—through Ultra Space to reach the Ultra Megalopolis."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Ultra_Sun_e_Ultra_Moon",
        "situacao": "ok",
        "texto": "Pokémon Ultra Sun e Pokémon Ultra Moon (ポケットモンスター ウルトラサン・ウルトラムーン, Poketto Monsutā Urutora San・Urutora Mūn; \"Monstros de Bolso: Ultra Sun・Ultra Moon, que traduzido do inglês para o português significa Ultra Sol e Ultra Lua, Sol e Lua em japonês é respectivamente 太陽 Taiyō e 月 Tsuki) são dois jogos eletrônicos de RPG de 2017, desenvolvidos pela Game Freak, publicados pela The Pokémon Company, e distr\n[…]\nUltra Sun e Ultra Moon apresentam novos Ultra Bestas: Stakataka, Blacephalon, Poipole e sua evolução, Naganadel. Além disso, existem novas formas para o lendário Pokémon Necrozma, apelidado de \"Dusk Mane\" e \"Dawn Wings\", que são obtidas absorvendo os lendários Pokémon Solgaleo e Lunala, respectivamente; é conceitualmente semelhante a Black e White Kyurem de Black 2 e White 2 e a forma mudada de Lusamine do Sun e Moon originais.\n[…]\nGrande parte da história gira em torno de vários Pokémon lendários: um Cosmog, apelidado de Nebby, Ultra Sun ou Lunala em Ultra Moon; e um Necrozma, que tenta tirar a luz de Alola.\n[…]\nDurante o clímax, Lusamine usa Nebby para criar um buraco de minhoca para a Ultra Megalopolis, onde ela e Guzma tentam lutar contra Necrozma pelo bem do Esquadrão Ultra Recon. No entanto, eles falham e são jogados de volta em sua dimensão mais tarde na história, com Necrozma os seguindo. Necrozma luta com Nebby, agora um Solgaleo ou Lunala, e vence.\n[…]\nNecrozma então absorve o lendário Pokémon, ganhando sua forma Dusk Mane ou Dawn Wings na respectiva versão, e libera as Ultra Bestas em Alola antes de lutar contra o jogador. Depois que o jogador o derrota, Necrozma foge para a Ultra Megalopolis, levando a luz do mundo consigo enquanto o jogador, com a ajuda do Ultra Recon Squad, viaja no lendário oposto apresentado em cada jogo - Lunala no Ultra Sun ou Solgaleo no Ultra Lua - através do Ultra Espaço para chegar à Ultra Megalopolis.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Pokémon Sword e Shield",
      "descricao": "Par de jogos Pokémon da oitava geração, lançado em 2019 para o Nintendo Switch e ambientado na região de Galar."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Pokémon Sword e Shield, que levaram os jogadores à região de Galar, chegaram às lojas em que ano?",
    "resposta": "2019",
    "distratores": [
      "2018",
      "2020",
      "2017"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Sword_and_Shield"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Sword_and_Shield",
        "situacao": "ok",
        "texto": "Pokémon Sword and Pokémon Shield are 2019 role-playing video games developed by Game Freak and published by The Pokémon Company and Nintendo for the Nintendo Switch console. They are the first instalments in the 8th generation of the Pokémon video game series. First teased at E3 2017 and announced in February 2019, the games were released on 15 November 2019.\n[…]\nSword and Shield received generally positive reviews from critics, who praised the games' gameplay, exploration, and mechanics, although the lack of innovation and mediocre visuals received some criticism. As of December 2025, the games had sold more than 27 million copies worldwide, making them the third best-selling titles in the Pokémon video game series. The games won awards at the SXSW Gaming Awards and Famitsu Dengeki Game Awards 2019.\n[…]\nThe games additionally have content exclusive to certain versions of the game, with certain Gym Leaders and Pokémon species being available only in Sword or Shield.\n[…]\nUnlike previous core series games, many pre-existing Pokémon are not available in Sword and Shield, and only Pokémon that appear in the Galar region can be transferred from previous titles via Pokémon Home.\n[…]\nA second Nintendo Direct about the games was held on 5 June 2019, and it further revealed the games' new features, characters, and Pokémon. A release date of 15 November 2019, was also announced as part of this presentation.\n[…]\nProducer of the games Junichi Masuda formally responded to the controversy on 28 June 2019, two weeks later, expressing appreciation for the love and passion shown by fans. He reiterated that the removal of certain Pokémon was a difficult decision to make and that they would be available in different games in the future. Michael McWhertor of Polygon noted that while Masuda's statement acknowledged the fans' discontent, it \"did not amount to much\"."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Sword_e_Shield",
        "situacao": "ok",
        "texto": "Pokémon Sword e Pokémon Shield (ポケットモンスター ソード・シールド, Poketto Monsutā Sōdo・Shīrudo; Monstros de Bolso Sword・Shield, que traduzidos do inglês para o português significa Espada e Escudo, Espada e Escudo em japonês é respectivamente 剣 Ken e 盾 Tate) são dois jogos eletrônicos de RPG, desenvolvidos pela Game Freak e publicados pela The Pokémon Company e Nintendo. Fazem parte da oitava geração da série Po\n[…]\ne Let's Go, Eevee!, lançados em um console doméstico. Incitados originalmente na E3 2017 e anunciados em fevereiro de 2019, Pokémon Sword e Shield foram lançados em novembro de 2019 para Nintendo Switch. Os jogos receberam dois pacotes de expansão de conteúdo para download por meio de um pacote com The Isle of Armor, lançados em junho de 2020 e The Crown Tundra, lançados em outubro de 2020.\n[…]\nUma das primeiras ideias que a equipe teve foi tornar o Pokémon gigante, pois o jogo poderia ser jogado em uma tela grande, graças à capacidade do Switch de se conectar a uma televisão. Ohmori então pensou em ter uma espada e um escudo Pokémon para derrotar o Pokémon gigante; foi assim que os títulos dos jogos foram decididos.\n[…]\nSword e Shield foram totalmente revelados em uma apresentação especial do Nintendo Direct em 27 de fevereiro de 2019, apresentando a região dos jogos e o Pokémon inicial. A apresentação coincidiu com o Pokémon Day, uma celebração dos fãs de Pokémon no aniversário do lançamento japonês de Pokémon Red e Green.\n[…]\nNo Japão, Sword e Shield vendeu dois milhões de cópias durante os primeiros três dias de venda, superando Super Smash Bros. Ultimate como o jogo Switch de venda mais rápida naquela região. Nos Estados Unidos, eles venderam mais de dois milhões de cópias em seu fim de semana de estreia. Em 21 de novembro de 2019, Sword e Shield vendeu mais de seis milhões de cópias em todo o mundo, ultrapassando Super Smash Bros. Ultimate como o jogo Switch de venda mais rápida.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Área Selvagem",
      "descricao": "Grande área aberta de Pokémon Sword e Shield, no centro de Galar, com câmera livre, clima variável e batalhas Max Raid."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Na Área Selvagem de Sword e Shield, os pokémon que surgem em cada trecho de Galar variam de um dia para outro. O que provoca essa variação?",
    "resposta": "O clima",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Wild_Area",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Sword_and_Shield"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Wild_Area",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Sword_and_Shield",
        "situacao": "ok",
        "texto": "Pokémon Sword and Pokémon Shield are 2019 role-playing video games developed by Game Freak and published by The Pokémon Company and Nintendo for the Nintendo Switch console. They are the first instalments in the 8th generation of the Pokémon video game series. First teased at E3 2017 and announced in February 2019, the games were released on 15 November 2019.\n[…]\nPokémon Sword and Shield are set in the Galar Region, inspired by the United Kingdom. Galar consists of numerous cities and towns, with a route system separating major settlements. Random encounters with wild Pokémon typically occur in tall grass or bodies of water along routes and they might chase or run away from the player depending on their disposition.\n[…]\nThe games additionally have content exclusive to certain versions of the game, with certain Gym Leaders and Pokémon species being available only in Sword or Shield.\n[…]\nInternet connectivity to other players is supported for functionality such as trades, battles, and encountering other trainers in the Wild Area; these functions however require a paid subscription to the Nintendo Switch Online subscription service. Sword and Shield only support direct game-to-game connectivity between themselves. The games are also compatible with Pokémon Home, an online cloud storage service for storing Pokémon, released in February 2020.\n[…]\nUnlike previous core series games, many pre-existing Pokémon are not available in Sword and Shield, and only Pokémon that appear in the Galar region can be transferred from previous titles via Pokémon Home.\n[…]\nA promotional crossover between Sword and Shield and Tetris 99 occurred from 8–11 November, during which a limited-time unlockable theme based on the games was available. A web app was also released, allowing the viewer to explore the Wild Area online. In Super Smash Bros."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Sword_e_Shield",
        "situacao": "ok",
        "texto": "Pokémon Sword e Pokémon Shield (ポケットモンスター ソード・シールド, Poketto Monsutā Sōdo・Shīrudo; Monstros de Bolso Sword・Shield, que traduzidos do inglês para o português significa Espada e Escudo, Espada e Escudo em japonês é respectivamente 剣 Ken e 盾 Tate) são dois jogos eletrônicos de RPG, desenvolvidos pela Game Freak e publicados pela The Pokémon Company e Nintendo. Fazem parte da oitava geração da série Po\n[…]\nSword e Shield ocorre na região de Galar, que fica no Reino Unido. Tal como acontece com todas as regiões, Galar consiste em várias cidades e vilas ligadas por \"Rotas\"; no entanto, há também uma área de mundo aberto no centro da região conhecida como \"Área Selvagem\", um conceito novo para a série. Encontros aleatórios com Pokémon selvagens pode ocorrer em grama alta ou em corpos d'água ao longo de rotas ou na área selvagem.\n[…]\nOs jogos apresentam vários novos recursos à série. Isso inclui encontros cooperativos de ataque, \"Dynamaxing\" e \"Gigantamaxing\", os quais permitem temporariamente que o Pokémon cresça para tamanhos maiores e a Wild Area. A última é uma área de mundo aberto totalmente explorável com movimento de câmera livre e clima dinâmico, o que tem implicações em quais espécies de Pokémon aparecem em um determinado momento.\n[…]\nAbrangendo uma grande parte da parte centro-sul da região está a Wild Area, uma área de mundo aberto com inúmeras espécies de Pokémon errantes. O clima em toda a área selvagem muda regularmente. Como no Pokémon Sun e Moon, Pokémon anteriormente introduzidos em jogos mais antigos, como Weezing, ganham formas galarianas regionais com novas tipificações, estatísticas e aparências. Alguns Pokémon, como Linoone e Meowth, até ganham evoluções regionais.\n[…]\nAo contrário de outros jogos Pokémon básicos, nem todas as espécies Pokémon existentes aparecem ou podem ser usadas no Sword e Shield.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Acampamento Pokémon",
      "descricao": "Recurso de Pokémon Sword e Shield em que o jogador monta uma barraca, brinca e cozinha com seus pokémon."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Em Sword e Shield, o jogador pode montar uma barraca e acampar com seus pokémon. Que prato ele cozinha para eles?",
    "resposta": "Curry",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Camp"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Camp",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Miraidon",
      "descricao": "Pokémon dos tipos Elétrico e Dragão, número 1008 da Pokédex Nacional."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome de Miraidon, o lendário elétrico e dragão de Paldea, vem da palavra japonesa mirai. O que ela significa?",
    "resposta": "Futuro",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Miraidon_(Pok%C3%A9mon)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Miraidon_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Urshifu",
      "descricao": "Pokémon lendário do tipo Lutador da oitava geração, evolução de Kubfu, introduzido na expansão The Isle of Armor."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em The Isle of Armor, Kubfu evolui em Urshifu, que pode ter dois estilos de luta diferentes. O que decide qual será o estilo?",
    "resposta": "A torre que Kubfu escala",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Urshifu_(Pok%C3%A9mon)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Urshifu_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Mustard",
      "descricao": "Velho mestre do dojo da Ilha da Armadura, na expansão The Isle of Armor de Pokémon Sword e Shield, que treina o jogador e Kubfu."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Mustard, o velho mestre do dojo de The Isle of Armor, foi no passado o quê na Liga Pokémon de Galar?",
    "resposta": "Campeão",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Mustard"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Mustard",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Peony",
      "descricao": "Aventureiro exagerado que acompanha o jogador na expansão The Crown Tundra, de Pokémon Sword e Shield."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Peony, o aventureiro que acompanha o jogador em The Crown Tundra, é irmão mais velho de qual personagem de Sword e Shield?",
    "resposta": "Rose, presidente da Liga",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Peony"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Peony",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "The Teal Mask",
      "descricao": "Primeira parte da expansão de Pokémon Scarlet e Violet, em que o jogador viaja à terra de Kitakami e conhece Ogerpon."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "The Teal Mask, a primeira parte da expansão de Scarlet e Violet, foi lançada em que ano?",
    "resposta": "2023",
    "distratores": [
      "2022",
      "2024",
      "2025"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Scarlet_and_Violet"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Scarlet_and_Violet",
        "situacao": "ok",
        "texto": "Pokémon Scarlet and Pokémon Violet are 2022 role-playing video games developed by Game Freak and published by Nintendo and The Pokémon Company for the Nintendo Switch. They are the first installments in the ninth generation of the Pokémon video game series. They were announced in February 2022 and released on 18 November 2022. The games later received a downloadable content (DLC) expansion pass st\n[…]\nThe first part, The Teal Mask, was released on 13 September 2023, and the second part, The Indigo Disk, was released on 14 December 2023. A post-game expansion, Mochi Mayhem, considered the epilogue to the DLC and the games themselves, was released on 11 January 2024.\n[…]\nAfter choosing Nemona and Penny for assistance, Arven and the player set out towards the Zero Lab, the professor's laboratory in Area Zero. This unlocks the final story, The Way Home. Inside, they encounter Paradox Pokémon—biological relatives of extant Pokémon from either the ancient past (Scarlet) or far future (Violet).\n[…]\nOn 27 February 2023, the Pokémon Day presentation featured an announcement trailer for the downloadable expansion pack, The Hidden Treasure of Area Zero, which contained two DLC expansions: The Teal Mask and The Indigo Disk. The first part, The Teal Mask, focusing on the Legendary Pokémon Ogerpon, was released on 13 September 2023, and the second, The Indigo Disk, focusing on the Legendary Pokémon Terapagos, was released on 14 December 2023.\n[…]\nThe anime series Pokémon Horizons: The Series featured several tie-ins to Pokémon Scarlet and Violet. Several locations, characters, and species from the games make appearances in the series. In August 2023, during a Pokémon Presents presentation, a limited 4-episode web series based on the games, subtitled Pokémon: Paldean Winds, was announced; it premiered on YouTube on 6 September 2023, and ended on 13 December 2023."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Scarlet_e_Violet",
        "situacao": "ok",
        "texto": "Pokémon Scarlet (ポケットモンスター スカーレット, Poketto Monsutā Sukāretto, Monstros de Bolso Escarlate) e Pokémon Violet (ポケットモンスター バイオレット, Poketto Monsutā Baioretto, Monstros de Bolso Violeta) são dois jogos eletrônicos de RPG desenvolvidos pela Game Freak e publicados pela Nintendo e The Pokémon Company para Nintendo Switch. Eles são os primeiros parcelas da nona geração da série de jogos eletrônicos Pokémon\n[…]\nOs jogos receberam posteriormente um conteúdo para download (DLC) com uma história adicional, The Hidden Treasure of Area Zero. A primeira parte, The Teal Mask, foi lançada em 13 de setembro de 2023, e a segunda parte, The Indigo Disk, foi lançada em 14 de dezembro de 2023. Uma expansão pós-jogo, Mochi Mayhem, considerada o epílogo do DLC e dos próprios jogos, foi lançada em 11 de janeiro de 2024.\n[…]\nEm 27 de fevereiro de 2023, a apresentação do Dia de Pokémon contou com um trailer de anúncio do pacote de expansão para download, The Hidden Treasure of Area Zero, que continha duas expansões de DLC: The Teal Mask e The Indigo Disk. A primeira parte, The Teal Mask, com foco no Pokémon Lendário Ogerpon, foi lançada em 13 de setembro de 2023, e a segunda, The Indigo Disk, com foco no Pokémon Lendário Terapagos, foi lançada em 14 de dezembro de 2023.\n[…]\nEm 11 de janeiro de 2024, o epílogo do DLC, Mochi Mayhem, foi lançado, onde o jogador retorna à terra de Kitakami para capturar um novo Pokémon Mítico, Pecharunt.\n[…]\nEm 16 de novembro de 2023, a dupla pop Yoasobi e a The Pokémon Company anunciaram uma colaboração para celebrar o primeiro aniversário dos jogos com uma música intitulada \"Biri-Biri\". Biri-Biri foi lançada simultaneamente em versões em japonês e inglês em 18 de novembro de 2023. Um videoclipe foi lançado no mesmo dia. A história do vídeo se concentra principalmente em Nemona e uma estudante transferida chamada Anna, que partem em uma jornada para encontrar seu \"tesouro\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Kitakami",
      "descricao": "Terra rural de arrozais, montanhas e festivais visitada pelo jogador na expansão The Teal Mask, de Pokémon Scarlet e Violet."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em The Teal Mask, a turma da academia viaja para Kitakami, uma terra de arrozais, montanhas e festivais. O interior de qual país a inspirou?",
    "resposta": "Japão",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Kitakami"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Kitakami",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Ogerpon",
      "descricao": "Pokémon lendário do tipo Planta da nona geração, uma pequena ogra mascarada de Kitakami, estrela da expansão The Teal Mask."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em The Teal Mask, a pequena Ogerpon, de tipo Planta, pode ganhar um segundo tipo, como Água, Fogo ou Pedra. O que define qual será?",
    "resposta": "A máscara que ela usa",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Ogerpon_(Pok%C3%A9mon)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Ogerpon_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Iniciais de Pokémon Legends: Arceus",
      "descricao": "Os três pokémon iniciais oferecidos ao jogador no jogo Pokémon Legends: Arceus, na antiga região de Hisui."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em Legends: Arceus, o jogador escolhe o primeiro pokémon entre três iniciais vindos de regiões diferentes. Quais são eles?",
    "resposta": "Rowlet, Cyndaquil e Oshawott",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Legends:_Arceus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Legends:_Arceus",
        "situacao": "ok",
        "texto": "Pokémon Legends: Arceus is a 2022 action role-playing game developed by Game Freak and published by Nintendo and The Pokémon Company for the Nintendo Switch. It is part of the eighth generation of the Pokémon video game series and serves as a prequel to the fourth-generation titles Pokémon Diamond and Pearl (2006). The game was first announced as part of the Pokémon 25th Anniversary event in Febru\n[…]\nThe game follows the protagonist, who is sent back in time and travels through the Hisui region, which is based on the island of Hokkaido during early Japanese colonization. The game is centered around exploration of the region's several open areas populated with Pokémon, with its main objective being to complete the Pokédex by catching all Pokémon. Pokémon Legends: Arceus was a commercial success, having sold over 14.83 million copies by 31 March 2023.\n[…]\nBy battling, capturing, or engaging with other interactions with Pokémon, players progress in completing their Pokédex entries. Players can also take on and complete side quests given by NPCs in the game. In total, the game featured 242 Pokémon on release, including 7 new species and 17 new iterations (\"forms\") of existing Pokémon. At the start of the game, three starter Pokémon are available: Rowlet (from Sun and Moon), Cyndaquil (from Gold and Silver) and Oshawott (from Black and White).\n[…]\nJordan Middler of Nintendo Life praised Pokémon Legends: Arceus for its \"rewarding\" exploration, \"addictive\" catching mechanics, quality of the Pokémon roster, and its \"genuine sense of scale\", while stating that \"Pokémon Legends: Arceus is quite simply one of the greatest Pokémon games ever made\".\n[…]\nPokémon Legends: Arceus was nominated for several end of the year awards; it was nominated for Best RPG at The Game Awards, as well as nominated for Game of the Year by GamesRadar, GamingBolt, The Washington Post, Empire, VGC, GamesHub, and Polygon."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Legends%3A_Arceus",
        "situacao": "ok",
        "texto": "Pokémon Legends: Arceus (Pokémon LEGENDS アルセウス, Pokemon Rejenzu: Aruseusu; tradução: Pokémon Lendas: Arceus) é um jogo eletrônico de RPG de ação desenvolvido pela Game Freak e publicado pela The Pokémon Company e Nintendo. Faz parte da oitava geração da série de jogos eletrônicos Pokémon e serve como uma prequela para os jogos eletrônicos de RPG do Nintendo DS, Pokémon Diamond e Pearl, de 2006. Fo\n[…]\nFoi declarado que o objetivo do jogo seria criar a primeira Pokédex de Sinnoh. O mítico Pokémon Arceus terá um papel importante na história.\n[…]\nNo início do jogo, três opções iniciais de Pokémon estão disponíveis: Rowlet (do Pokémon Sun e Moon), Cyndaquil (do Pokémon Gold e Silver) e Oshawott (do Pokémon Black e White), tornando-o o primeiro jogo da série principal a apresentar Pokémon iniciais de três gerações diferentes de jogos.\n[…]\nPokémon Legends: Arceus está sendo desenvolvido pela Game Freak. É o primeiro projeto conhecido no subgênero de RPG de ação realizado pelo estúdio. Foi revelado pela primeira vez em uma apresentação em 26 de fevereiro de 2021, como parte do evento Pokémon 25th Anniversary ao lado de Pokémon Brilliant Diamond e Shining Pearl. Ele servirá como uma prequela de Diamond e Pearl. Foi lançado mundialmente em 28 de janeiro de 2022.\n[…]\nPokémon Legends: Arceus recebeu \"críticas geralmente favoráveis\" de acordo com o agregador de resenhas Metacritic.\n[…]\nA Nintendo informou que o jogo vendeu 6,5 milhões de cópias em todo o mundo dentro de uma semana de seu lançamento, superando outros títulos da série Pokémon lançados para Nintendo Switch, como Sword e Shield e Brilliant Diamond e Shining Pearl. No Japão, vendeu 1,43 milhão de unidades em três dias. Nos Estados Unidos, apenas as vendas físicas de Legends: Arceus (excluindo downloads digitais) fizeram dele o jogo eletrônico mais vendido de janeiro de 2022.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Pokémon Alfa",
      "descricao": "Pokémon selvagens maiores, mais fortes e agressivos que os comuns, introduzidos em Pokémon Legends: Arceus."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Em Legends: Arceus, os pokémon Alfa são mais fortes e agressivos que os outros. Além do tamanho maior, o que os denuncia de longe?",
    "resposta": "Olhos vermelhos brilhantes",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Alpha_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Alpha_Pok%C3%A9mon",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Clã Pérola",
      "descricao": "Um dos dois clãs rivais da região de Hisui em Pokémon Legends: Arceus, adversário do Clã Diamante."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Em Legends: Arceus, os clãs rivais de Hisui veneram lendários diferentes. Que lendário o Clã Pérola venera?",
    "resposta": "Palkia",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Pearl_Clan"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pearl_Clan",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Volo",
      "descricao": "Mercador simpático de Pokémon Legends: Arceus, membro da Guilda Ginkgo, que se revela antagonista no fim do jogo."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Em Legends: Arceus, o simpático mercador Volo se revela inimigo do jogador no fim da aventura. Ao lado de qual lendário ele luta?",
    "resposta": "Giratina",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Volo"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Volo",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Pokémon Titã",
      "descricao": "Pokémon gigantes de Pokémon Scarlet e Violet, enfrentados pelo jogador com Arven na história do Caminho das Lendas."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em Scarlet e Violet, os pokémon Titãs que o jogador enfrenta ao lado de Arven cresceram muito além do normal. Por quê?",
    "resposta": "Comeram Ervas Místicas",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Titan_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Titan_Pok%C3%A9mon",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Pokémon Scarlet e Violet",
      "descricao": "Par de jogos Pokémon da nona geração para o Nintendo Switch, ambientado na região de Paldea, com mundo aberto."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Qual destes pokémon lendários estampa a capa de Pokémon Scarlet?",
    "resposta": "Koraidon",
    "distratores": [
      "Miraidon",
      "Zamazenta",
      "Solgaleo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Scarlet_and_Violet"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Scarlet_and_Violet",
        "situacao": "ok",
        "texto": "Pokémon Scarlet and Pokémon Violet are 2022 role-playing video games developed by Game Freak and published by Nintendo and The Pokémon Company for the Nintendo Switch. They are the first installments in the ninth generation of the Pokémon video game series. They were announced in February 2022 and released on 18 November 2022. The games later received a downloadable content (DLC) expansion pass st\n[…]\nScarlet and Violet have open worlds, which include both urban areas and open wilderness without borders between the two, unlike previous installments in the Pokémon series. Players can use either Koraidon or Miraidon, depending on the games' version, as a mount in the overworld, allowing access to several abilities that can be used to traverse Paldea's terrain.\n[…]\nIn Scarlet and Violet, the player attends either the Naranja (Scarlet) or Uva (Violet) Academy, which has an annual \"Treasure Hunt\" that encourages students to seek something they treasure by exploring the region. After encountering either the Legendary Pokémon Koraidon or Miraidon, who joins and assists the player despite having lost its ability to battle, they are encouraged to participate in three stories: Victory Road, Starfall Street, and Path of Legends.\n[…]\nPokémon Scarlet and Violet were announced as part of a Pokémon Presents presentation on 27 February 2022, through a partially live-action trailer, which revealed the 3 starters; Sprigatito, Fuecoco, and Quaxly. On 1 June 2022, a second trailer was released, officially revealing Koraidon and Miraidon, more gameplay footage, the Pokémon Smoliv, Lechonk, and Pawmi, and the characters of Nemona, Sada, and Turo.\n[…]\nOn 11 January 2024, the DLC's epilogue Mochi Mayhem released where the player goes back to the land of Kitakami to catch a new Mythical Pokémon, Pecharunt.\n[…]\nMedia related to Pokémon Scarlet and Violet at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Scarlet_e_Violet",
        "situacao": "ok",
        "texto": "Pokémon Scarlet (ポケットモンスター スカーレット, Poketto Monsutā Sukāretto, Monstros de Bolso Escarlate) e Pokémon Violet (ポケットモンスター バイオレット, Poketto Monsutā Baioretto, Monstros de Bolso Violeta) são dois jogos eletrônicos de RPG desenvolvidos pela Game Freak e publicados pela Nintendo e The Pokémon Company para Nintendo Switch. Eles são os primeiros parcelas da nona geração da série de jogos eletrônicos Pokémon\n[…]\nScarlet e Violet têm mundos abertos, que incluem tanto áreas urbanas quanto áreas selvagens abertas, sem fronteiras entre as duas, ao contrário dos jogos anteriores da série Pokémon. Os jogadores podem usar Koraidon ou Miraidon, dependendo da versão do jogo, como montaria no mundo aberto, o que lhes permite acessar diversas habilidades que podem ser usadas para atravessar o terreno de Paldea.\n[…]\nEm Scarlet e Violet, o jogador frequenta a Academia Naranja (Scarlat) ou a Academia Uva (Violet), que realiza anualmente uma \"Treasure Hunt\" incentivando os alunos a buscarem algo que considerem valioso, explorando a região. Depois de encontrar o lendário Pokémon Koraidon ou Miraidon, que se junta e auxilia o jogador apesar de ter perdido sua capacidade de batalha, o jogador é encorajado a participar de três histórias: Victory Road, Starfall Street e Path of Legends.\n[…]\nPokémon Scarlet e Violet foram anunciados como parte de uma apresentação do Pokémon Presents em 27 de fevereiro de 2022, através de um trailer parcialmente em live-action, que revelou os 3 Pokémon iniciais: Sprigatito, Fuecoco e Quaxly. Em 1 de junho de 2022, um segundo trailer foi lançado, revelando oficialmente Koraidon e Miraidon, mais cenas de jogabilidade, os Pokémon Smoliv, Lechonk e Pawmi, e os personagens Nemona, Sada e Turo.\n[…]\nEm 11 de janeiro de 2024, o epílogo do DLC, Mochi Mayhem, foi lançado, onde o jogador retorna à terra de Kitakami para capturar um novo Pokémon Mítico, Pecharunt.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Pokémon Paradoxo",
      "descricao": "Versões antigas ou futuristas de pokémon conhecidos que vivem na Área Zero, no fundo da Grande Cratera de Paldea, em Pokémon Scarlet e Violet."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em Scarlet e Violet, os pokémon Paradoxo, versões antigas e futuristas de pokémon conhecidos, vivem na Área Zero. Como eles chegaram lá?",
    "resposta": "Por uma máquina do tempo",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Paradox_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Paradox_Pok%C3%A9mon",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Gimmighoul",
      "descricao": "Pokémon do tipo Fantasma da nona geração, que vive dentro de um baú e evolui para Gholdengo."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Em Scarlet e Violet, Gimmighoul só evolui em Gholdengo quando o jogador junta uma grande quantidade de moedas. Quantas?",
    "resposta": "999",
    "distratores": [
      "100",
      "500",
      "777"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Gimmighoul_(Pok%C3%A9mon)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Gimmighoul_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Clavell",
      "descricao": "Diretor da academia de Paldea em Pokémon Scarlet e Violet."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Em Scarlet e Violet, o diretor Clavell se disfarça de aluno para investigar a Equipe Star. Que nome falso ele usa?",
    "resposta": "Clive",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Clavell"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Clavell",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Tipo Estelar",
      "descricao": "Teratipo especial introduzido na expansão The Indigo Disk, de Pokémon Scarlet e Violet, ligado ao lendário Terapagos."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Em The Indigo Disk, ligado ao lendário Terapagos, surgiu um Teratipo inédito, que fortalece golpes de qualquer tipo. Como ele se chama?",
    "resposta": "Tipo Estelar",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Stellar_(type)",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Scarlet_and_Violet"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Stellar_(type)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Scarlet_and_Violet",
        "situacao": "ok",
        "texto": "Pokémon Scarlet and Pokémon Violet are 2022 role-playing video games developed by Game Freak and published by Nintendo and The Pokémon Company for the Nintendo Switch. They are the first installments in the ninth generation of the Pokémon video game series. They were announced in February 2022 and released on 18 November 2022. The games later received a downloadable content (DLC) expansion pass st\n[…]\nThe first part, The Teal Mask, was released on 13 September 2023, and the second part, The Indigo Disk, was released on 14 December 2023. A post-game expansion, Mochi Mayhem, considered the epilogue to the DLC and the games themselves, was released on 11 January 2024.\n[…]\nOn 27 February 2023, the Pokémon Day presentation featured an announcement trailer for the downloadable expansion pack, The Hidden Treasure of Area Zero, which contained two DLC expansions: The Teal Mask and The Indigo Disk. The first part, The Teal Mask, focusing on the Legendary Pokémon Ogerpon, was released on 13 September 2023, and the second, The Indigo Disk, focusing on the Legendary Pokémon Terapagos, was released on 14 December 2023.\n[…]\nIn The Teal Mask, based on the legend of Momotarō, the player embarks on a school trip organized by the academy to the land of Kitakami, which would also coincide with a festival in the village, while uncovering the truth behind a local legend. In The Indigo Disk, the player studies at their Academy's sister school, Blueberry Academy, as an exchange student, eventually traveling back to Area Zero to conclude the plot."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Scarlet_e_Violet",
        "situacao": "ok",
        "texto": "Pokémon Scarlet (ポケットモンスター スカーレット, Poketto Monsutā Sukāretto, Monstros de Bolso Escarlate) e Pokémon Violet (ポケットモンスター バイオレット, Poketto Monsutā Baioretto, Monstros de Bolso Violeta) são dois jogos eletrônicos de RPG desenvolvidos pela Game Freak e publicados pela Nintendo e The Pokémon Company para Nintendo Switch. Eles são os primeiros parcelas da nona geração da série de jogos eletrônicos Pokémon\n[…]\nTambém introduz o fenômeno Terastal (ラスタル, Terasutaru), que permite que um Pokémon se transforme em seu exclusivo \"Tipo Tera\". Os jogos mantêm características dos jogos Pokémon modernos anteriores, incluindo grandes áreas abertas e Pokémon aparecendo no mapa.\n[…]\nOs jogadores também podem usar um novo recurso de \"Auto Battle\", que permite enviar seus Pokémon pelo mapa e derrotá-los sem precisar entrar em batalhas por turnos. Além disso, os jogadores têm a opção de participar de três rotas de história diferentes, e os objetivos dentro das rotas podem ser realizados em qualquer ordem.\n[…]\nScarlet e Violet introduzem o fenômeno Terastal, que confere aos Pokémon uma aparência cristalina e altera seu tipo, um atributo elemental de um Pokémon que determina seus pontos fortes ou fracos para combinar com seu \"Tipo Tera\" único. Ele também usa movimentos especiais como Tera Blast, que, quando usado por um Pokémon Terastalizado, se torna um movimento do mesmo tipo que o Tipo Tera do Pokémon. Esses tipos Tera podem ser alterados pelos jogadores.\n[…]\nEm 27 de fevereiro de 2023, a apresentação do Dia de Pokémon contou com um trailer de anúncio do pacote de expansão para download, The Hidden Treasure of Area Zero, que continha duas expansões de DLC: The Teal Mask e The Indigo Disk. A primeira parte, The Teal Mask, com foco no Pokémon Lendário Ogerpon, foi lançada em 13 de setembro de 2023, e a segunda, The Indigo Disk, com foco no Pokémon Lendário Terapagos, foi lançada em 14 de dezembro de 2023.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  }
]

---

# MANIFESTO

# Manifesto de Perguntas — Mestre2

> **Versão preliminar 0.66 — 2026-10-13**
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
