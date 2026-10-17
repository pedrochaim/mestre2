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
      "nome": "Sandshrew",
      "descricao": "Pokémon tatu da primeira geração, do tipo Terrestre, que tem uma forma regional de Alola dos tipos Gelo e Aço."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Em Sun e Moon, as formas de Alola de Vulpix e de Sandshrew, que vivem no alto das montanhas, ganharam o mesmo tipo novo. Que tipo é esse?",
    "resposta": "Gelo",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Sandshrew_(Pok%C3%A9mon)",
      "https://bulbapedia.bulbagarden.net/wiki/Vulpix_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/List_of_generation_I_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Sandshrew_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Vulpix_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_generation_I_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "The first generation (generation I) of the Pokémon franchise features the original 151 fictional species of monsters introduced to the core video game series in the 1996 Game Boy games Pocket Monsters Red, Green and Blue (known as Pokémon Red, Green and Blue outside of Japan). Later, Pokémon Yellow and Blue were released in Japan."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_I",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os assuntos básicos das espécies Pokémon. Para detalhes detalhados do universo, por favor consulte os wikis sobre o assunto.\n[…]\nA lista a seguir descreve 151 Pokémon da Geração I em sua sequência do Pokédex Nacional - uma enciclopédia eletrônica no jogo, que fornece várias informações sobre números de Pokémon. O primeiro Pokémon, Bulbassauro, numerado de 001 e o último de Mew, numerado de 151. Formas alternativas que resultam em mudanças de tipo são incluídas por conveniência. Mega evoluções e formas regionais são incluídas nas páginas da geração em que foram introduzidas. MissingNo., uma falha, também está nesta lista.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Gyarados",
      "descricao": "Pokémon dos tipos Água e Voador, número 130 da Pokédex Nacional."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "A fúria de Gyarados fica ainda maior quando ele megaevolui. Nessa forma, ele é dos tipos Água e qual outro?",
    "resposta": "Sombrio",
    "distratores": [
      "Dragão",
      "Voador",
      "Elétrico"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Gyarados_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/List_of_generation_I_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Gyarados_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_generation_I_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "The first generation (generation I) of the Pokémon franchise features the original 151 fictional species of monsters introduced to the core video game series in the 1996 Game Boy games Pocket Monsters Red, Green and Blue (known as Pokémon Red, Green and Blue outside of Japan). Later, Pokémon Yellow and Blue were released in Japan.\n[…]\nThe following list details the 151 Pokémon of generation I in order of their National Pokédex number. The first Pokémon, Bulbasaur, is number 0001 and the last, Mew, is number 0151. Alternate forms that result in type changes are included for convenience. Mega evolutions and regional forms are included on the pages for the generation in which they were introduced. MissingNo., a glitch, is also on this list."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_I",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os assuntos básicos das espécies Pokémon. Para detalhes detalhados do universo, por favor consulte os wikis sobre o assunto.\n[…]\nA lista a seguir descreve 151 Pokémon da Geração I em sua sequência do Pokédex Nacional - uma enciclopédia eletrônica no jogo, que fornece várias informações sobre números de Pokémon. O primeiro Pokémon, Bulbassauro, numerado de 001 e o último de Mew, numerado de 151. Formas alternativas que resultam em mudanças de tipo são incluídas por conveniência. Mega evoluções e formas regionais são incluídas nas páginas da geração em que foram introduzidas. MissingNo., uma falha, também está nesta lista.\n[…]\nAlguns Pokémon podem se transformar em espécies mais fortes por meio de um processo chamado evolução, através de vários meios, como a exposição a itens específicos. Cada Pokémon possui um ou dois tipos elementais, que definem suas vantagens e desvantagens ao batalhar contra outros Pokémon.\n[…]\nQuando os jogos foram localizados para o público de língua inglesa como Red e Blue, a Nintendo of America deu às várias espécies de Pokémon \"nomes inteligentes e descritivos\" relacionados à sua aparência ou características, como forma de torná-los mais identificáveis ​​para as crianças americanas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Ponyta",
      "descricao": "Pokémon cavalo de fogo da primeira geração, que tem uma forma regional de Galar do tipo Psíquico, parecida com um unicórnio."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Em Galar, Ponyta não tem crina de fogo: é um pequeno unicórnio de pelo claro, que vive numa floresta escura. De que tipo ele é?",
    "resposta": "Psíquico",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Ponyta_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/List_of_generation_I_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Ponyta_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_generation_I_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "The first generation (generation I) of the Pokémon franchise features the original 151 fictional species of monsters introduced to the core video game series in the 1996 Game Boy games Pocket Monsters Red, Green and Blue (known as Pokémon Red, Green and Blue outside of Japan). Later, Pokémon Yellow and Blue were released in Japan."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_I",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os assuntos básicos das espécies Pokémon. Para detalhes detalhados do universo, por favor consulte os wikis sobre o assunto.\n[…]\nA lista a seguir descreve 151 Pokémon da Geração I em sua sequência do Pokédex Nacional - uma enciclopédia eletrônica no jogo, que fornece várias informações sobre números de Pokémon. O primeiro Pokémon, Bulbassauro, numerado de 001 e o último de Mew, numerado de 151. Formas alternativas que resultam em mudanças de tipo são incluídas por conveniência. Mega evoluções e formas regionais são incluídas nas páginas da geração em que foram introduzidas. MissingNo., uma falha, também está nesta lista.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Sirfetch'd",
      "descricao": "Pokémon do tipo Lutador da oitava geração, evolução do Farfetch'd de Galar, um guerreiro que usa um alho-poró como lança."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Em Sword e Shield, o Farfetch'd de Galar ganhou uma evolução inédita, um guerreiro que empunha o alho-poró como lança. Que pokémon é esse?",
    "resposta": "Sirfetch'd",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Sirfetch%27d_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/List_of_generation_VIII_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Sirfetch%27d_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_generation_VIII_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "The eighth generation (Generation VIII) of the Pokémon franchise features 96 titular species of creatures introduced to the core video game series, including 89 in the 2019 Nintendo Switch games Pokémon Sword and Shield as of version 1.3.0 and 7 further species introduced in the 2022 Nintendo Switch game Pokémon Legends: Arceus. The temporary Dynamax and Gigantamax transformations were also introd\n[…]\nThe Pokémon Sword and Shield starter Pokémon were the first Pokémon of the generation to be revealed on February 27, 2019.\n[…]\nThe development of Pokémon Sword and Shield began in 2016, immediately following the development period of Pokémon Sun and Moon. The conceptual phase lasted approximately a year, and the debugging process continued into 2019. With the Galar region based in Great Britain, some of the native Pokémon draw inspiration from British fauna, folklore, and mythology.\n[…]\nThe legendary Pokémon Zacian and Zamazenta resemble real-world wolves, drawing inspiration from wolves that frequently appear in British mythology. Shigeru Ohmori, the director for Sword and Shield, stated that the design team keeps a Pokémon's habitat in mind when coming up with its design so as to make the Pokémon believable.\n[…]\nLike the previous generation, redesigned versions of previously released Pokémon (\"Galarian Forms\" and \"Hisuian Forms\") were included alongside brand-new creatures.\n[…]\nFor the first time, many new Pokémon and regional forms were added to the generation through game patches rather than through the release of a new game. Acquiring these Pokémon requires purchasing an add-on downloadable content pass separate from the base game or utilizing the in-game trade feature. Further patches added other new species, including legendary and mythical Pokémon Kubfu, Urshifu, and Zarude in June 2020 and Regieleki, Regidrago, Glastrier, Spectrier, and Calyrex in October 2020."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_VIII",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os conceitos básicos das espécies Pokémon. Para informações detalhadas sobre o universo, por favor consulte wiki sobre o assunto.\n[…]\nA oitava geração (Geração VIII) da franquia Pokémon apresentou 96 criaturas fictícias, incluindo 89 introduzidos nos jogos da Nintendo Switch de 2019, Pokémon Sword e Shield, a partir da versão 1.3.0 e 7 outras criaturas introduzidos no jogo da Nintendo Switch de 2022, Pokémon Legends: Arceus. Os Pokémon iniciais de Pokémon Sword e Shield foram os primeiros da geração a serem revelados em 27 de fevereiro de 2019.\n[…]\nAlguns Pokémon podem se transformar em espécies mais fortes por meio de um processo chamado evolução, através de vários meios, como a exposição a itens específicos. Cada Pokémon possui um ou dois tipos elementais, que definem suas vantagens e desvantagens ao batalhar contra outros Pokémon.\n[…]\nDesenvolvimento de Pokémon Sword e Shield começou em 2016, imediatamente após o período de desenvolvimento de Pokémon Sun e Moon. A fase conceitual durou aproximadamente um ano e o processo de depuração continuou em 2019. Com a região de Galar, baseada na Grã-Bretanha, os Pokémon nativos inspiram-se na fauna, folclore e mitologia britânico. Os Pokémon lendários Zacian e Zamazenta são criaturas parecidas com lobos, inspirando-se em lobos que frequentemente aparecem na mitologia britânica.\n[…]\nDesign dos Pokémon iniciais giravam em torno da área em que seriam encontrados pelo personagem do jogador.\n[…]\nComo na geração anterior, versões redesenhadas de Pokémon lançados anteriormente (\"Formas de Galar\" e \"Formas de Hisui\") foram incluídas ao lado de novas criaturas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Farfetch’d",
      "descricao": "Pokémon de tipo Normal/Voador, número 83 da Pokédex Nacional, um pato selvagem que carrega um talo de alho-poró."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "O Farfetch'd de Galar não evolui subindo de nível. Que proeza ele precisa conseguir numa única batalha para evoluir?",
    "resposta": "Acertar três golpes críticos",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Farfetch%27d_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/List_of_generation_VIII_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Farfetch%27d_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_generation_VIII_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "The eighth generation (Generation VIII) of the Pokémon franchise features 96 titular species of creatures introduced to the core video game series, including 89 in the 2019 Nintendo Switch games Pokémon Sword and Shield as of version 1.3.0 and 7 further species introduced in the 2022 Nintendo Switch game Pokémon Legends: Arceus. The temporary Dynamax and Gigantamax transformations were also introd\n[…]\nThe development of Pokémon Sword and Shield began in 2016, immediately following the development period of Pokémon Sun and Moon. The conceptual phase lasted approximately a year, and the debugging process continued into 2019. With the Galar region based in Great Britain, some of the native Pokémon draw inspiration from British fauna, folklore, and mythology."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_VIII",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os conceitos básicos das espécies Pokémon. Para informações detalhadas sobre o universo, por favor consulte wiki sobre o assunto.\n[…]\nAlguns Pokémon podem se transformar em espécies mais fortes por meio de um processo chamado evolução, através de vários meios, como a exposição a itens específicos. Cada Pokémon possui um ou dois tipos elementais, que definem suas vantagens e desvantagens ao batalhar contra outros Pokémon.\n[…]\nUm dos principais objetivos em cada jogo é completar a Pokédex, uma enciclopédia Pokémon abrangente, capturando, evoluindo e trocando com outros Treinadores para obter indivíduos de todas as espécies de Pokémon.\n[…]\nDesenvolvimento de Pokémon Sword e Shield começou em 2016, imediatamente após o período de desenvolvimento de Pokémon Sun e Moon. A fase conceitual durou aproximadamente um ano e o processo de depuração continuou em 2019. Com a região de Galar, baseada na Grã-Bretanha, os Pokémon nativos inspiram-se na fauna, folclore e mitologia britânico. Os Pokémon lendários Zacian e Zamazenta são criaturas parecidas com lobos, inspirando-se em lobos que frequentemente aparecem na mitologia britânica.\n[…]\nComo na geração anterior, versões redesenhadas de Pokémon lançados anteriormente (\"Formas de Galar\" e \"Formas de Hisui\") foram incluídas ao lado de novas criaturas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Slowbro",
      "descricao": "Pokémon dos tipos Água e Psíquico da primeira geração, evolução de Slowpoke, com um Shellder preso ao corpo, que tem uma forma regional de Galar."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "No Slowbro comum, o Shellder morde a cauda. No Slowbro de Galar, em que parte do corpo esse Shellder fica preso?",
    "resposta": "No braço",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Slowbro_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/List_of_generation_I_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Slowbro_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_generation_I_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "The first generation (generation I) of the Pokémon franchise features the original 151 fictional species of monsters introduced to the core video game series in the 1996 Game Boy games Pocket Monsters Red, Green and Blue (known as Pokémon Red, Green and Blue outside of Japan). Later, Pokémon Yellow and Blue were released in Japan."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_I",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os assuntos básicos das espécies Pokémon. Para detalhes detalhados do universo, por favor consulte os wikis sobre o assunto.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Marowak",
      "descricao": "Pokémon do tipo Terrestre da primeira geração, evolução de Cubone, que tem uma forma regional de Alola dos tipos Fogo e Fantasma."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "O que o Marowak de Alola, que gira um osso em chamas, e o Typhlosion de Hisui têm em comum nos seus tipos?",
    "resposta": "Fogo e Fantasma",
    "distratores": [
      "Fogo e Sombrio",
      "Fogo e Terrestre",
      "Fogo e Psíquico"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Marowak_(Pok%C3%A9mon)",
      "https://bulbapedia.bulbagarden.net/wiki/Typhlosion_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/List_of_generation_I_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Marowak_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Typhlosion_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_generation_I_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "The first generation (generation I) of the Pokémon franchise features the original 151 fictional species of monsters introduced to the core video game series in the 1996 Game Boy games Pocket Monsters Red, Green and Blue (known as Pokémon Red, Green and Blue outside of Japan). Later, Pokémon Yellow and Blue were released in Japan."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_I",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os assuntos básicos das espécies Pokémon. Para detalhes detalhados do universo, por favor consulte os wikis sobre o assunto.\n[…]\nAlguns Pokémon podem se transformar em espécies mais fortes por meio de um processo chamado evolução, através de vários meios, como a exposição a itens específicos. Cada Pokémon possui um ou dois tipos elementais, que definem suas vantagens e desvantagens ao batalhar contra outros Pokémon.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Diglett",
      "descricao": "Pokémon toupeira do tipo Terrestre da primeira geração, que tem uma forma regional de Alola dos tipos Terrestre e Aço."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Em Alola, Diglett tem na cabeça três fios brilhantes, que lembram cabelos loiros. Além de Terrestre, qual é o tipo dele?",
    "resposta": "Aço",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Diglett_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/List_of_generation_I_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Diglett_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_generation_I_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "The first generation (generation I) of the Pokémon franchise features the original 151 fictional species of monsters introduced to the core video game series in the 1996 Game Boy games Pocket Monsters Red, Green and Blue (known as Pokémon Red, Green and Blue outside of Japan). Later, Pokémon Yellow and Blue were released in Japan."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_I",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os assuntos básicos das espécies Pokémon. Para detalhes detalhados do universo, por favor consulte os wikis sobre o assunto.\n[…]\nA lista a seguir descreve 151 Pokémon da Geração I em sua sequência do Pokédex Nacional - uma enciclopédia eletrônica no jogo, que fornece várias informações sobre números de Pokémon. O primeiro Pokémon, Bulbassauro, numerado de 001 e o último de Mew, numerado de 151. Formas alternativas que resultam em mudanças de tipo são incluídas por conveniência. Mega evoluções e formas regionais são incluídas nas páginas da geração em que foram introduzidas. MissingNo., uma falha, também está nesta lista.\n[…]\nOs designs de cada Pokémon começaram como sprites em pixel art criados pela equipe de desenvolvimento, com uma identidade de cor única escolhida para se adequar às limitações de hardware do Super Game Boy. Com a equipe inicial de desenvolvimento composta por três homens, o designer de personagens Ken Sugimori trouxe desenvolvedoras para o projeto, acreditando que elas seriam mais capazes de criar designs \"fofos\".\n[…]\nDurante o desenvolvimento, surgiram problemas com o espaço nos cartuchos digitais, e muitos Pokémon foram removidos. Especificamente, vários Pokémon que possuíam uma linha evolutiva de três estágios foram alterados para evoluir apenas uma vez, resultando na remoção da evolução final planejada para Pikachu, chamada \"Gorochu\", do jogo final.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Clodsire",
      "descricao": "Pokémon dos tipos Venenoso e Terrestre da nona geração, evolução do Wooper de Paldea."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Em Paldea, o Wooper é marrom, venenoso e não evolui em Quagsire. Em que pokémon ele se transforma?",
    "resposta": "Clodsire",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Clodsire_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/List_of_generation_IX_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Clodsire_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_generation_IX_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "The ninth generation (Generation IX) of the Pokémon franchise features 120 titular species of creatures introduced to the core video game series in the Nintendo Switch games Pokémon Scarlet and Violet. The first Pokémon of the generation were revealed on 27 February 2022 in a Pokémon Presents livestream presentation. Scarlet and Violet were released on 18 November 2022.\n[…]\nSome Pokémon can transform into stronger species through a process called evolution via various means, such as exposure to specific items. Each Pokémon have one or two elemental types, which define its advantages and disadvantages when battling other Pokémon. A major goal in each game is to complete the Pokédex, a comprehensive Pokémon encyclopedia, by capturing, evolving, and trading with other Trainers to obtain individuals from all Pokémon species.\n[…]\nPokémon Scarlet and Violet take place in Paldea, which is heavily based on Spain, as well as other areas in the Iberian Peninsula, with the game's DLC expansions The Teal Mask and The Indigo Disk taking place in the Kitakami region and the Blueberry Academy, respectively. Kitakami is based on Japan, while the Blueberry Academy is a school environment set in the Unova region, the main location of the 2010 games Pokémon Black and White.\n[…]\nJoe Parlock of TheGamer praised the sleek designs of the starters and the designs of several other Pokémon, including Smoliv, Fidough, Koraidon, and Miraidon.\n[…]\nHe described the individuality of the designs and how each of the designs helped build Paldea's culture, stating that it was \"the most holistic approach to Pokémon design we've seen in decades.\" In a discussion among Nintendo Life staff about the best designs in the generation, the group highlighted many Pokémon, including Glimmora, Tandemaus, and Charcadet."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_IX",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os conceitos básicos das espécies Pokémon. Para informações detalhadas sobre o universo, por favor consulte wiki sobre o assunto.\n[…]\nAlguns Pokémon podem se transformar em espécies mais fortes por meio de um processo chamado evolução, através de vários meios, como a exposição a itens específicos. Cada Pokémon possui um ou dois tipos elementais, que definem suas vantagens e desvantagens ao batalhar contra outros Pokémon.\n[…]\nUm dos principais objetivos em cada jogo é completar a Pokédex, uma enciclopédia Pokémon abrangente, capturando, evoluindo e trocando com outros Treinadores para obter indivíduos de todas as espécies de Pokémon.\n[…]\nPokémon Scarlet e Violet se passa em Paldea, que é fortemente inspirada na Espanha, assim como em outras áreas da Península Ibérica, com as expansões DLC do jogo The Teal Mask e The Indigo Disk se passando na região de Kitakami. and the Blueberry Academy, respectivamente. Kitakami é baseado no Japão, enquanto o Blueberry Academy é um ambiente escolar situado na região de Unova, o principal local dos jogos de 2010 Pokémon Black e White.\n[…]\nScarlet e Violet também apresentam um mecanismo especial conhecido como \"Terastallização\" que permitem que o Pokémon do jogador mude de tipo durante a batalha. O jogo Pokémon Legends: Z-A se passa na região de Kalos, o cenário principal dos jogos de 2013 Pokémon X e Y. Ele também marcou o retorno da mecânica de \"Mega Evolução\", que foi introduzida pela primeira vez nesses jogos; Mega Evoluções são formas poderosas de Pokémon que podem ser usadas durante as batalhas Pokémon.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Zapdos",
      "descricao": "Pokémon lendário ave do tipo Elétrico e Voador, de número 145 da Pokédex Nacional."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Em Galar, as três aves lendárias de Kanto ganharam formas novas. Zapdos, que corre em vez de voar, ganhou qual tipo além de Voador?",
    "resposta": "Lutador",
    "distratores": [
      "Psíquico",
      "Sombrio",
      "Terrestre"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Zapdos_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/List_of_generation_I_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Zapdos_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_generation_I_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "The first generation (generation I) of the Pokémon franchise features the original 151 fictional species of monsters introduced to the core video game series in the 1996 Game Boy games Pocket Monsters Red, Green and Blue (known as Pokémon Red, Green and Blue outside of Japan). Later, Pokémon Yellow and Blue were released in Japan."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_I",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os assuntos básicos das espécies Pokémon. Para detalhes detalhados do universo, por favor consulte os wikis sobre o assunto.\n[…]\nA lista a seguir descreve 151 Pokémon da Geração I em sua sequência do Pokédex Nacional - uma enciclopédia eletrônica no jogo, que fornece várias informações sobre números de Pokémon. O primeiro Pokémon, Bulbassauro, numerado de 001 e o último de Mew, numerado de 151. Formas alternativas que resultam em mudanças de tipo são incluídas por conveniência. Mega evoluções e formas regionais são incluídas nas páginas da geração em que foram introduzidas. MissingNo., uma falha, também está nesta lista.\n[…]\nOs designs de cada Pokémon começaram como sprites em pixel art criados pela equipe de desenvolvimento, com uma identidade de cor única escolhida para se adequar às limitações de hardware do Super Game Boy. Com a equipe inicial de desenvolvimento composta por três homens, o designer de personagens Ken Sugimori trouxe desenvolvedoras para o projeto, acreditando que elas seriam mais capazes de criar designs \"fofos\".\n[…]\nDurante o desenvolvimento, surgiram problemas com o espaço nos cartuchos digitais, e muitos Pokémon foram removidos. Especificamente, vários Pokémon que possuíam uma linha evolutiva de três estágios foram alterados para evoluir apenas uma vez, resultando na remoção da evolução final planejada para Pikachu, chamada \"Gorochu\", do jogo final.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Altaria",
      "descricao": "Pokémon ave de asas de nuvem dos tipos Dragão e Voador, da terceira geração, evolução de Swablu, que tem uma megaevolução."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Na megaevolução, a ave nuvem Altaria passa a combinar Dragão com um tipo que estreou na mesma geração das megaevoluções. Que tipo é esse?",
    "resposta": "Fada",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Altaria_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/List_of_generation_III_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Altaria_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_generation_III_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "The third generation (generation III) of the Pokémon franchise features 386 fictional species of creatures and 135 Pokémon introduced to the core video game series in the 2002 Game Boy Advance games Pokémon Ruby and Sapphire, and later in the 2004 game Pokémon Emerald. These games were accompanied by the television series Pokémon Advanced, which aired from November 21, 2002, until August 28, 2003,\n[…]\nThe following list details the 135 Pokémon of generation III in order of their National Pokédex number. The first Pokémon, Treecko, is number 252 and the last, Deoxys, is number 386. Alternate forms that result in type changes are included for convenience. Mega Evolutions and regional forms are included on the pages for the generation in which they were introduced."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_III",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os assuntos básicos das espécies Pokémon. Para detalhes detalhados do universo, por favor consulte os wikis sobre o assunto.\n[…]\nFormulários alternativos que resultam em alterações de tipo são incluídos por conveniência. Mega evolução e formas regionais estão incluídas nas páginas da geração em que foram introduzidas.\n[…]\nA recepção aos Pokémon da terceira geração tem sido polarizada. Alex Carlson de Hardcore Gamer escreveram em 2014 que a terceira geração de jogos de Pokémon não foi bem recebida pelos fãs da série, com algumas pessoas chamando a geração de \"a pior da história da série\".\n[…]\nEm contraste, alguns designs, incluindo Breloom, Aggron e o já mencionado Castform, foram elogiados por seu estilo, com a grande variedade de Pokémon lendários únicos também ajudando a terceira geração a parecer nova e original. Embora Ruby e Sapphire tenham sido reconhecidos por introduzir designs menos memoráveis ​​do que seus antecessores, designs como Milotic, Salamence, Metagross, Rayquaza e Blaziken fizeram da geração como um todo um complemento satisfatório à Pokédex existente.\n[…]\nA terceira geração teve sua parcela de designs populares e duradouros. Dezoito anos após o lançamento de Ruby e Sapphire, Rayquaza e Gardevoir terminaram em oitavo e nono lugar na votação de Pokémon do Ano de 2020, com Flygon, Sceptile e Blaziken também entre os 30 melhores. Rayquaza também terminou em oitavo lugar em uma pesquisa japonesa de 2016, com Jirachi e Kyogre entre os 25 melhores.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Kangaskhan",
      "descricao": "Pokémon do tipo Normal da primeira geração, parecido com um canguru, que carrega um filhote numa bolsa na barriga e tem uma megaevolução."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Kangaskhan carrega o filhote numa bolsa na barriga. Quando ela megaevolui, o que o filhote passa a fazer na batalha?",
    "resposta": "Sai da bolsa e luta junto",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Kangaskhan_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/List_of_generation_I_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Kangaskhan_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_generation_I_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "The first generation (generation I) of the Pokémon franchise features the original 151 fictional species of monsters introduced to the core video game series in the 1996 Game Boy games Pocket Monsters Red, Green and Blue (known as Pokémon Red, Green and Blue outside of Japan). Later, Pokémon Yellow and Blue were released in Japan.\n[…]\nThe following list details the 151 Pokémon of generation I in order of their National Pokédex number. The first Pokémon, Bulbasaur, is number 0001 and the last, Mew, is number 0151. Alternate forms that result in type changes are included for convenience. Mega evolutions and regional forms are included on the pages for the generation in which they were introduced. MissingNo., a glitch, is also on this list."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_I",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os assuntos básicos das espécies Pokémon. Para detalhes detalhados do universo, por favor consulte os wikis sobre o assunto.\n[…]\nA lista a seguir descreve 151 Pokémon da Geração I em sua sequência do Pokédex Nacional - uma enciclopédia eletrônica no jogo, que fornece várias informações sobre números de Pokémon. O primeiro Pokémon, Bulbassauro, numerado de 001 e o último de Mew, numerado de 151. Formas alternativas que resultam em mudanças de tipo são incluídas por conveniência. Mega evoluções e formas regionais são incluídas nas páginas da geração em que foram introduzidas. MissingNo., uma falha, também está nesta lista.\n[…]\nAlguns Pokémon podem se transformar em espécies mais fortes por meio de um processo chamado evolução, através de vários meios, como a exposição a itens específicos. Cada Pokémon possui um ou dois tipos elementais, que definem suas vantagens e desvantagens ao batalhar contra outros Pokémon.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Alakazam",
      "descricao": "Pokémon do tipo Psíquico da primeira geração, evolução final de Abra, que segura duas colheres e tem uma megaevolução."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "O psíquico Alakazam segura duas colheres. Ao megaevoluir, quantas colheres passam a flutuar ao redor dele?",
    "resposta": "Cinco",
    "distratores": [
      "Três",
      "Quatro",
      "Seis"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Alakazam_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/List_of_generation_I_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Alakazam_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_generation_I_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "The first generation (generation I) of the Pokémon franchise features the original 151 fictional species of monsters introduced to the core video game series in the 1996 Game Boy games Pocket Monsters Red, Green and Blue (known as Pokémon Red, Green and Blue outside of Japan). Later, Pokémon Yellow and Blue were released in Japan.\n[…]\nThe following list details the 151 Pokémon of generation I in order of their National Pokédex number. The first Pokémon, Bulbasaur, is number 0001 and the last, Mew, is number 0151. Alternate forms that result in type changes are included for convenience. Mega evolutions and regional forms are included on the pages for the generation in which they were introduced. MissingNo., a glitch, is also on this list."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_I",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os assuntos básicos das espécies Pokémon. Para detalhes detalhados do universo, por favor consulte os wikis sobre o assunto.\n[…]\nA lista a seguir descreve 151 Pokémon da Geração I em sua sequência do Pokédex Nacional - uma enciclopédia eletrônica no jogo, que fornece várias informações sobre números de Pokémon. O primeiro Pokémon, Bulbassauro, numerado de 001 e o último de Mew, numerado de 151. Formas alternativas que resultam em mudanças de tipo são incluídas por conveniência. Mega evoluções e formas regionais são incluídas nas páginas da geração em que foram introduzidas. MissingNo., uma falha, também está nesta lista.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Gengar",
      "descricao": "Pokémon dos tipos Fantasma e Veneno, número 94 da Pokédex Nacional."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Ao megaevoluir, Gengar fica com parte do corpo afundada nas sombras e ganha algo novo no meio da testa. O quê?",
    "resposta": "Um terceiro olho",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Gengar_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/Gengar"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Gengar_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Gengar",
        "situacao": "ok",
        "texto": "Gengar ( ; Japanese: ゲンガー, Hepburn: Gengā) is a Pokémon species in Nintendo and Game Freak's Pokémon media franchise. First introduced in the video games Pokémon Red and Blue, it was created by Ken Sugimori, and has appeared in multiple games including Pokémon GO and the Pokémon Trading Card Game, as well as various merchandise related to the franchise.\n[…]\nGengar was one of the earliest designs conceived for Red and Blue, and was described by Pokémon artist Ken Sugimori as one of his favorites. In the series' canon, it is classified as a Ghost and Poison-type Pokémon. Gengar is a round, ghost-like being that evolves from the Pokémon Gastly and Haunter. Gengar has several alternate forms within the series, such as the in-battle transformations known as Mega Gengar and Gigantamax Gengar.\n[…]\nGengar also appears in the Pokémon anime series, where it is used by series protagonist Ash Ketchum.\n[…]\nIn the sequel games Pokémon X and Y, Gengar can temporarily transform into a new form called Mega Gengar. In this form, it becomes significantly larger with his legs embedded into the ground, while its spikes become more pronounced. In addition its arms become longer, with the forearms more pronounced and also embedded into the ground. Lastly, a gold-colored third eye appears upon its forehead. A second form, called Gigantamax Gengar, was added in Pokémon Sword and Shield.\n[…]\nGengar appeared in several sequels, including Pokémon X and Y, where it gains a battle transformation called Mega Gengar, and Pokémon Sword and Shield, where it gains a battle transformation called Gigantamax Gengar as part of the Dynamax mechanic.\n[…]\nShe added that while many Pokémon would shine with a proper focus from Nintendo, \"few of them have the ingredients lined up as perfectly as Gengar does\".\n[…]\nGengar  at Bulbapedia, a Pokémon wiki\n[…]\nGengar on Pokemon.com"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Duraludon",
      "descricao": "Pokémon dos tipos Aço e Dragão da oitava geração, da região de Galar, feito de um metal leve e resistente, que tem forma Gigantamax."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Duraludon, o dragão de metal de Galar, cresce muito na forma Gigantamax e passa a parecer qual construção, cheia de janelas iluminadas?",
    "resposta": "Um arranha-céu",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Duraludon_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/List_of_generation_VIII_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Duraludon_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_generation_VIII_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "The eighth generation (Generation VIII) of the Pokémon franchise features 96 titular species of creatures introduced to the core video game series, including 89 in the 2019 Nintendo Switch games Pokémon Sword and Shield as of version 1.3.0 and 7 further species introduced in the 2022 Nintendo Switch game Pokémon Legends: Arceus. The temporary Dynamax and Gigantamax transformations were also introd\n[…]\nThe development of Pokémon Sword and Shield began in 2016, immediately following the development period of Pokémon Sun and Moon. The conceptual phase lasted approximately a year, and the debugging process continued into 2019. With the Galar region based in Great Britain, some of the native Pokémon draw inspiration from British fauna, folklore, and mythology."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_VIII",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os conceitos básicos das espécies Pokémon. Para informações detalhadas sobre o universo, por favor consulte wiki sobre o assunto.\n[…]\nDesenvolvimento de Pokémon Sword e Shield começou em 2016, imediatamente após o período de desenvolvimento de Pokémon Sun e Moon. A fase conceitual durou aproximadamente um ano e o processo de depuração continuou em 2019. Com a região de Galar, baseada na Grã-Bretanha, os Pokémon nativos inspiram-se na fauna, folclore e mitologia britânico. Os Pokémon lendários Zacian e Zamazenta são criaturas parecidas com lobos, inspirando-se em lobos que frequentemente aparecem na mitologia britânica.\n[…]\nComo na geração anterior, versões redesenhadas de Pokémon lançados anteriormente (\"Formas de Galar\" e \"Formas de Hisui\") foram incluídas ao lado de novas criaturas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Burmy",
      "descricao": "Pokémon do tipo Inseto da quarta geração, uma larva que se cobre com uma capa feita do ambiente ao redor."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Burmy, de Sinnoh, se protege com uma capa feita de folhas, de areia ou de lixo. O que decide qual dessas capas ele usa?",
    "resposta": "O lugar da última batalha",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Burmy_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/List_of_generation_IV_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Burmy_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_generation_IV_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "The fourth generation (generation IV) of the Pokémon franchise features 107 species of pokémon introduced to the core video game series in the 2006 Nintendo DS games Pokémon Diamond and Pearl. Some Pokémon in this generation were introduced in games and animated adaptations of the franchise before Diamond and Pearl, such as Bonsly, Mime Jr., and Munchlax, which were recurring characters in the Pok"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_IV",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os assuntos básicos das espécies Pokémon. Para detalhes detalhados do universo, por favor consulte os wikis sobre o assunto.\n[…]\nAlguns Pokémon podem se transformar em espécies mais fortes por meio de um processo chamado evolução, através de vários meios, como a exposição a itens específicos. Cada Pokémon possui um ou dois tipos elementais, que definem suas vantagens e desvantagens ao batalhar contra outros Pokémon.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Shellos",
      "descricao": "Pokémon lesma-do-mar do tipo Água da quarta geração, com uma forma rosa e outra azul na região de Sinnoh."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em Sinnoh, a lesma-do-mar Shellos é rosa num lado da região e azul no outro. Que lugar separa essas duas formas?",
    "resposta": "Monte Coronet",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Shellos_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/List_of_generation_IV_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Shellos_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_generation_IV_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "The fourth generation (generation IV) of the Pokémon franchise features 107 species of pokémon introduced to the core video game series in the 2006 Nintendo DS games Pokémon Diamond and Pearl. Some Pokémon in this generation were introduced in games and animated adaptations of the franchise before Diamond and Pearl, such as Bonsly, Mime Jr., and Munchlax, which were recurring characters in the Pok"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_IV",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os assuntos básicos das espécies Pokémon. Para detalhes detalhados do universo, por favor consulte os wikis sobre o assunto.\n[…]\nA lista a seguir descreve 107 Pokémon da Geração IV na ordem numérica do Pokédex Nacional. O primeiro Pokémon, Turtwig, numerado de 387 e o último, Arceus, numerado de 493. Formulários alternativos que resultam em alterações de tipo são incluídos por conveniência. Formas alternativas que resultam em mudanças de tipo estão incluídas para facilitar a consulta. Mega Evoluções e formas regionais estão incluídas nas páginas da geração em que foram introduzidas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Vivillon",
      "descricao": "Pokémon borboleta dos tipos Inseto e Voador da sexta geração, evolução de Spewpa, com muitas estampas de asas diferentes."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em X e Y, a borboleta Vivillon pode ter asas de muitas estampas. O que define a estampa que aparece no jogo de cada pessoa?",
    "resposta": "O lugar real onde o jogador mora",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Vivillon_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/List_of_generation_VI_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Vivillon_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_generation_VI_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "The sixth generation (Generation VI) of the Pokémon franchise features 72 fictional species of creatures introduced to the core video game series in the 2013 Nintendo 3DS games Pokémon X and Y. Some Pokémon in this generation were introduced in animated adaptations of the franchise before X and Y. This generation featured the series' largest graphical overhaul: a shift from two-dimensional sprites\n[…]\nSome Pokémon can transform into stronger species through a process called evolution via various means, such as exposure to specific items. Each Pokémon have one or two elemental types, which define its advantages and disadvantages when battling other Pokémon. A major goal in each game is to complete the Pokédex, a comprehensive Pokémon encyclopedia, by capturing, evolving, and trading with other Trainers to obtain individuals from all Pokémon species."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_VI",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os assuntos básicos das espécies Pokémon. Para detalhes detalhados do universo, por favor consulte os wikis sobre o assunto.\n[…]\nPokémon são uma espécie de criaturas fictícias criadas para a franquia de mídia Pokémon. Desenvolvida pela Game Freak e publicada pela Nintendo, a franquia japonesa começou em 1996 com os jogos Pokémon Red e Green para Game Boy, que foram posteriormente lançados na América do Norte como Pokémon Red e Blue em 1998. Nesses jogos e suas sequências, o jogador assume o papel de um Treinador cujo objetivo é capturar e usar as habilidades especiais das criaturas para combater outros Pokémon.\n[…]\nAlguns Pokémon podem se transformar em espécies mais fortes por meio de um processo chamado evolução, através de vários meios, como a exposição a itens específicos. Cada Pokémon possui um ou dois tipos elementais, que definem suas vantagens e desvantagens ao batalhar contra outros Pokémon.\n[…]\nUm dos principais objetivos em cada jogo é completar a Pokédex, uma enciclopédia Pokémon abrangente, capturando, evoluindo e trocando com outros Treinadores para obter indivíduos de todas as espécies de Pokémon.\n[…]\nEles foram feitos temporariamente para manter o equilíbrio nas batalhas e somente são possíveis quando um Pokémon está segurando sua respectiva Mega Pedra para impedir que os jogadores lhes dêem um item de espera vantajoso diferente. O único Pokémon da Geração VI capaz de Mega Evolução é Diancie. Uma variante do Mega Evolução chamada \"Reversão Primitiva\" foi introduzida em Omega Ruby e Alpha Sapphire; esse mecânico é exclusivo do lendário Pokémon Groudon e Kyogre.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Lycanroc",
      "descricao": "Pokémon lobo do tipo Pedra da sétima geração, evolução de Rockruff, que tem as formas Diurna, Noturna e Crepúsculo."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Rockruff, o filhote de cachorro de Alola, pode evoluir em três formas diferentes de Lycanroc. O que decide qual delas surge?",
    "resposta": "A hora do dia",
    "distratores": [
      "A fase da lua",
      "O clima",
      "A pedra usada"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Lycanroc_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/List_of_generation_VII_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Lycanroc_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_generation_VII_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "The seventh generation (Generation VII) of the Pokémon franchise features 86 fictional species of collectible creatures called \"Pokémon\" introduced to the core video game series in the 2016 Nintendo 3DS games Pokémon Sun and Moon and the 2017 3DS games Pokémon Ultra Sun and Ultra Moon. Two further species were introduced in a 2018 update to the spin-off mobile game Pokémon Go, as well as the 2018 \n[…]\nFollowing Pokémon X and Y, all Pokémon have been designed by a team of roughly 20 artists, led by Ken Sugimori and Hironobu Yoshida. The events of Sun and Moon take place in the fictional region of Alola, composed entirely of tropical islands. Let's Go, Pikachu! and Let's Go, Eevee! are set in the Kanto region, the same setting as generation one.\n[…]\nPokémon Sun and Moon introduced \"Alolan Forms\" of various generation I Pokémon. These versions are to represent the different microclimates in the Alola region. The Alolan versions of Pokémon like Vulpix and Exeggutor have different appearances and types and were introduced alongside generation VII Pokémon.\n[…]\nAlex Hern of The Guardian suggested that the developers likely decided to redesign various generation I Pokémon because, according to him, \"fan connection with the original 150 Pokémon is as strong as it ever was, the number of people who can tell a Pancham from a Swirlix is much smaller\"."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_VII",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os conceitos básicos das espécies Pokémon. Para informações detalhadas sobre o universo, por favor, consulte wiki sobre o assunto.\n[…]\nDois Pokémon míticos, Meltan e Melmetal, estreou em Pokémon GO em 2018; Meltan aparece em estado selvagem em Pokémon GO, quando um Pokémon é transferido para Let's Go, Pikachu! ou Let's Go, Eevee!, enquanto Melmetal só pode ser obtido evoluindo Meltan em Pokémon GO, quando o jogador coleta doces.\n[…]\nAlém das novas espécies de Pokémon, duas novas formas de Zygarde aparecem em Sun e Moon—tendo aparecido anteriormente no anime Pokémon: o cachorro \"Zygarde 10% Forme\" e mecha \"Zygarde Complete (100%) Forme\". Formas alternativos que resultam em alterações de tipo e regionais são incluídos por conveniência.\n[…]\nUm dos principais objetivos em cada jogo é completar a Pokédex, uma enciclopédia Pokémon abrangente, capturando, evoluindo e trocando com outros Treinadores para obter indivíduos de todas as espécies de Pokémon.\n[…]\nPokémon Sun e Moon introduzem \"Formas de Alola\" de vários Pokémon da primeira geração. Essas versões devem representar \"os diferentes microclimas da região de Alola\". As versões de Pokémon em Alola como Vulpix e Exeggutor têm aparências e tipos diferentes e foram introduzidas juntamente com os Pokémon da sétima geração.\n[…]\nDiversas \"Formas de Alola\" de Pokémon da geração I foram introduzidas em Pokémon Sun e Pokémon Moon.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Wishiwashi",
      "descricao": "Pokémon peixe do tipo Água da sétima geração, da região de Alola, que tem uma forma Solo e uma forma Cardume."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Que peixinho de Alola, fraquíssimo sozinho, chama outros da espécie durante a batalha e forma com eles um cardume gigante e assustador?",
    "resposta": "Wishiwashi",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Wishiwashi_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/List_of_generation_VII_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Wishiwashi_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_generation_VII_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "The seventh generation (Generation VII) of the Pokémon franchise features 86 fictional species of collectible creatures called \"Pokémon\" introduced to the core video game series in the 2016 Nintendo 3DS games Pokémon Sun and Moon and the 2017 3DS games Pokémon Ultra Sun and Ultra Moon. Two further species were introduced in a 2018 update to the spin-off mobile game Pokémon Go, as well as the 2018 \n[…]\nFollowing Pokémon X and Y, all Pokémon have been designed by a team of roughly 20 artists, led by Ken Sugimori and Hironobu Yoshida. The events of Sun and Moon take place in the fictional region of Alola, composed entirely of tropical islands. Let's Go, Pikachu! and Let's Go, Eevee! are set in the Kanto region, the same setting as generation one.\n[…]\nPokémon Sun and Moon introduced \"Alolan Forms\" of various generation I Pokémon. These versions are to represent the different microclimates in the Alola region. The Alolan versions of Pokémon like Vulpix and Exeggutor have different appearances and types and were introduced alongside generation VII Pokémon."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_VII",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os conceitos básicos das espécies Pokémon. Para informações detalhadas sobre o universo, por favor, consulte wiki sobre o assunto.\n[…]\nPokémon são uma espécie de criaturas fictícias criadas para a franquia de mídia Pokémon. Desenvolvida pela Game Freak e publicada pela Nintendo, a franquia japonesa começou em 1996 com os jogos Pokémon Red e Green para Game Boy, que foram posteriormente lançados na América do Norte como Pokémon Red e Blue em 1998. Nesses jogos e suas sequências, o jogador assume o papel de um Treinador cujo objetivo é capturar e usar as habilidades especiais das criaturas para combater outros Pokémon.\n[…]\nAlguns Pokémon podem se transformar em espécies mais fortes por meio de um processo chamado evolução, através de vários meios, como a exposição a itens específicos. Cada Pokémon possui um ou dois tipos elementais, que definem suas vantagens e desvantagens ao batalhar contra outros Pokémon.\n[…]\nUm dos principais objetivos em cada jogo é completar a Pokédex, uma enciclopédia Pokémon abrangente, capturando, evoluindo e trocando com outros Treinadores para obter indivíduos de todas as espécies de Pokémon.\n[…]\nPokémon Sun e Moon introduzem \"Formas de Alola\" de vários Pokémon da primeira geração. Essas versões devem representar \"os diferentes microclimas da região de Alola\". As versões de Pokémon em Alola como Vulpix e Exeggutor têm aparências e tipos diferentes e foram introduzidas juntamente com os Pokémon da sétima geração.\n[…]\nDiversas \"Formas de Alola\" de Pokémon da geração I foram introduzidas em Pokémon Sun e Pokémon Moon.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Sliggoo",
      "descricao": "Pokémon lesma do tipo Dragão da sexta geração, evolução de Goomy, que evolui para Goodra."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Em Kalos, a lesma Sliggoo só evolui em Goodra se subir de nível sob qual condição do tempo?",
    "resposta": "Chuva",
    "distratores": [
      "Neve",
      "Neblina",
      "Sol forte"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Sliggoo_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/List_of_generation_VI_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Sliggoo_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_generation_VI_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "The sixth generation (Generation VI) of the Pokémon franchise features 72 fictional species of creatures introduced to the core video game series in the 2013 Nintendo 3DS games Pokémon X and Y. Some Pokémon in this generation were introduced in animated adaptations of the franchise before X and Y. This generation featured the series' largest graphical overhaul: a shift from two-dimensional sprites\n[…]\nDevelopment of Pokémon X and Y began in 2010 and the games were released worldwide on October 12, 2013. Director Junichi Masuda stated the three main themes of the games to be beauty, bonds and evolution. Beauty was the core focus and Masuda felt France to be a prime example of such; he brought a team to the country for study in 2011. With the games taking place in a region based on France (called Kalos), design inspiration stemmed more from European culture (e.g."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_VI",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os assuntos básicos das espécies Pokémon. Para detalhes detalhados do universo, por favor consulte os wikis sobre o assunto.\n[…]\nUm dos principais objetivos em cada jogo é completar a Pokédex, uma enciclopédia Pokémon abrangente, capturando, evoluindo e trocando com outros Treinadores para obter indivíduos de todas as espécies de Pokémon.\n[…]\nDesenvolvido de Pokémon X e Y começou em 2010 e os jogos foram lançados em todo o mundo em 12 de outubro de 2013. Diretor Junichi Masuda revelou que os três principais temas de Pokémon X e Y se beleza, vínculos e evolução. A beleza era o foco principal e Masuda considerava a França um excelente exemplo disso; ele trouxe uma equipe para o país para estudar em 2011 Com os jogos ocorrendo em uma região baseada na França (chamada Kalos), a inspiração do design surgiu mais da cultura européia.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Pancham",
      "descricao": "Pokémon panda do tipo Lutador da sexta geração, da região de Kalos, que evolui para Pangoro."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Pancham, o panda brigão de Kalos, só evolui em Pangoro se subir de nível tendo na equipe um pokémon de qual tipo?",
    "resposta": "Sombrio",
    "distratores": [
      "Lutador",
      "Fantasma",
      "Fada"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Pancham_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/List_of_generation_VI_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pancham_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_generation_VI_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "The sixth generation (Generation VI) of the Pokémon franchise features 72 fictional species of creatures introduced to the core video game series in the 2013 Nintendo 3DS games Pokémon X and Y. Some Pokémon in this generation were introduced in animated adaptations of the franchise before X and Y. This generation featured the series' largest graphical overhaul: a shift from two-dimensional sprites\n[…]\nDevelopment of Pokémon X and Y began in 2010 and the games were released worldwide on October 12, 2013. Director Junichi Masuda stated the three main themes of the games to be beauty, bonds and evolution. Beauty was the core focus and Masuda felt France to be a prime example of such; he brought a team to the country for study in 2011. With the games taking place in a region based on France (called Kalos), design inspiration stemmed more from European culture (e.g.\n[…]\nThe titles X and Y, representing the x-axis and y-axis—also reflecting different forms of thinking—were chosen early in development. The simplicity of the names was also related to the simultaneous worldwide release of the games. Designers additionally sought to make the Pokémon names the same in every country whenever possible. Masuda expressed that this effort proved exceptionally difficult as the names have to feel fitting to their physical appearance and not infringe upon any rights.\n[…]\nAt the request of Masuda, the shapes \"X\" and \"Y\" were used as the framework for the boxart legendary Pokémon: Xerneas and Yveltal. Normally, Sugimori designs the legendary Pokémon by himself; however, he required assistance from designer Atsuko Nishida to create Xerneas and Yveltal. Finalization of their designs took about 18 months, 3 times longer than normal. Manga artist Hitoshi Ariga was requested to assist in creating Pokémon for X and Y; Ariga ultimately designed ten species for the games."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_VI",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os assuntos básicos das espécies Pokémon. Para detalhes detalhados do universo, por favor consulte os wikis sobre o assunto.\n[…]\nDesenvolvido de Pokémon X e Y começou em 2010 e os jogos foram lançados em todo o mundo em 12 de outubro de 2013. Diretor Junichi Masuda revelou que os três principais temas de Pokémon X e Y se beleza, vínculos e evolução. A beleza era o foco principal e Masuda considerava a França um excelente exemplo disso; ele trouxe uma equipe para o país para estudar em 2011 Com os jogos ocorrendo em uma região baseada na França (chamada Kalos), a inspiração do design surgiu mais da cultura européia.\n[…]\nUma grande mudança de design da franquia foi a mudança de sprites dois-dimensionais para polígono três-dimensionais. Isso exigia uma equipe de desenvolvimento maior que os jogos anteriores, com mais de 500 pessoas envolvidas no desenvolvimento dos jogos, incluindo equipes de localização. Ênfase foi dada à manutenção do estilo icônico do diretor de arte Pokémon Ken Sugimori, que desenha Pokémon e criava a arte oficial da franquia desde Red e Green em 1996.\n[…]\nVários Pokémon de gerações anteriores, como Jigglypuff, Gardevoir e Marill, receberam retroativamente o novo tipo enquanto 13 novos Pokémon, mais notavelmente Sylveon, vestiu o tipo. Uma nova mecânica chamado Mega Evolução—uma forma temporária muda a forma para evolução normal—também foi adicionado para batalhas mais dinâmicas e surgiu dos conceitos de vínculos e evolução. Mega Evoluções de \"projetos refinados para um novo extremo\", segundo Yoshida, e exigiram um esforço considerável.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Mantyke",
      "descricao": "Pokémon bebê raia dos tipos Água e Voador da quarta geração, forma anterior de Mantine."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O filhote Mantyke só evolui em Mantine se houver na equipe outro pokémon, um peixe que na natureza costuma nadar grudado em Mantine. Qual?",
    "resposta": "Remoraid",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Mantyke_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/List_of_generation_IV_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Mantyke_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_generation_IV_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "The fourth generation (generation IV) of the Pokémon franchise features 107 species of pokémon introduced to the core video game series in the 2006 Nintendo DS games Pokémon Diamond and Pearl. Some Pokémon in this generation were introduced in games and animated adaptations of the franchise before Diamond and Pearl, such as Bonsly, Mime Jr., and Munchlax, which were recurring characters in the Pok\n[…]\nThe following list details the 107 Pokémon of generation IV in order of their National Pokédex number. The first Pokémon, Turtwig, is number 387 and the last, Arceus, is number 493. Alternate forms that result in type changes are included for convenience. Mega Evolutions and regional forms are included on the pages for the generation in which they were introduced.\n[…]\nPokémon are a species of fictional creatures created for the Pokémon media franchise. Developed by Game Freak and published by Nintendo, the Japanese franchise began in 1996 with the video games Pokémon Red and Green for the Game Boy, which were later released in North America as Pokémon Red and Blue in 1998. In these games and their sequels, the player assumes the role of a Trainer whose goal is to capture and use the creatures' special abilities to combat other Pokémon.\n[…]\nSome Pokémon can transform into stronger species through a process called evolution via various means, such as exposure to specific items. Each Pokémon have one or two elemental types, which define its advantages and disadvantages when battling other Pokémon. A major goal in each game is to complete the Pokédex, a comprehensive Pokémon encyclopedia, by capturing, evolving, and trading with other Trainers to obtain individuals from all Pokémon species."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_IV",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os assuntos básicos das espécies Pokémon. Para detalhes detalhados do universo, por favor consulte os wikis sobre o assunto.\n[…]\nA lista a seguir descreve 107 Pokémon da Geração IV na ordem numérica do Pokédex Nacional. O primeiro Pokémon, Turtwig, numerado de 387 e o último, Arceus, numerado de 493. Formulários alternativos que resultam em alterações de tipo são incluídos por conveniência. Formas alternativas que resultam em mudanças de tipo estão incluídas para facilitar a consulta. Mega Evoluções e formas regionais estão incluídas nas páginas da geração em que foram introduzidas.\n[…]\nPokémon são uma espécie de criaturas fictícias criadas para a franquia de mídia Pokémon. Desenvolvida pela Game Freak e publicada pela Nintendo, a franquia japonesa começou em 1996 com os jogos Pokémon Red e Green para Game Boy, que foram posteriormente lançados na América do Norte como Pokémon Red e Blue em 1998. Nesses jogos e suas sequências, o jogador assume o papel de um Treinador cujo objetivo é capturar e usar as habilidades especiais das criaturas para combater outros Pokémon.\n[…]\nAlguns Pokémon podem se transformar em espécies mais fortes por meio de um processo chamado evolução, através de vários meios, como a exposição a itens específicos. Cada Pokémon possui um ou dois tipos elementais, que definem suas vantagens e desvantagens ao batalhar contra outros Pokémon.\n[…]\nUm dos principais objetivos em cada jogo é completar a Pokédex, uma enciclopédia Pokémon abrangente, capturando, evoluindo e trocando com outros Treinadores para obter indivíduos de todas as espécies de Pokémon.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Applin",
      "descricao": "Pokémon dos tipos Planta e Dragão da oitava geração, que vive dentro de uma maçã e evolui para Flapple ou Appletun."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em Sword e Shield, o pequeno dragão Applin vive dentro de uma maçã. O que decide se ele evolui em Flapple ou em Appletun?",
    "resposta": "A maçã que recebe, azeda ou doce",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Applin_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/List_of_generation_VIII_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Applin_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_generation_VIII_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "The eighth generation (Generation VIII) of the Pokémon franchise features 96 titular species of creatures introduced to the core video game series, including 89 in the 2019 Nintendo Switch games Pokémon Sword and Shield as of version 1.3.0 and 7 further species introduced in the 2022 Nintendo Switch game Pokémon Legends: Arceus. The temporary Dynamax and Gigantamax transformations were also introd\n[…]\nThe Pokémon Sword and Shield starter Pokémon were the first Pokémon of the generation to be revealed on February 27, 2019.\n[…]\nThe development of Pokémon Sword and Shield began in 2016, immediately following the development period of Pokémon Sun and Moon. The conceptual phase lasted approximately a year, and the debugging process continued into 2019. With the Galar region based in Great Britain, some of the native Pokémon draw inspiration from British fauna, folklore, and mythology.\n[…]\nThe legendary Pokémon Zacian and Zamazenta resemble real-world wolves, drawing inspiration from wolves that frequently appear in British mythology. Shigeru Ohmori, the director for Sword and Shield, stated that the design team keeps a Pokémon's habitat in mind when coming up with its design so as to make the Pokémon believable."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_VIII",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os conceitos básicos das espécies Pokémon. Para informações detalhadas sobre o universo, por favor consulte wiki sobre o assunto.\n[…]\nA oitava geração (Geração VIII) da franquia Pokémon apresentou 96 criaturas fictícias, incluindo 89 introduzidos nos jogos da Nintendo Switch de 2019, Pokémon Sword e Shield, a partir da versão 1.3.0 e 7 outras criaturas introduzidos no jogo da Nintendo Switch de 2022, Pokémon Legends: Arceus. Os Pokémon iniciais de Pokémon Sword e Shield foram os primeiros da geração a serem revelados em 27 de fevereiro de 2019.\n[…]\nUm dos principais objetivos em cada jogo é completar a Pokédex, uma enciclopédia Pokémon abrangente, capturando, evoluindo e trocando com outros Treinadores para obter indivíduos de todas as espécies de Pokémon.\n[…]\nDesenvolvimento de Pokémon Sword e Shield começou em 2016, imediatamente após o período de desenvolvimento de Pokémon Sun e Moon. A fase conceitual durou aproximadamente um ano e o processo de depuração continuou em 2019. Com a região de Galar, baseada na Grã-Bretanha, os Pokémon nativos inspiram-se na fauna, folclore e mitologia britânico. Os Pokémon lendários Zacian e Zamazenta são criaturas parecidas com lobos, inspirando-se em lobos que frequentemente aparecem na mitologia britânica.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Ursaring",
      "descricao": "Pokémon urso do tipo Normal da segunda geração, evolução de Teddiursa, que em Pokémon Legends: Arceus ganhou a evolução Ursaluna."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em Legends: Arceus, Ursaring evolui em Ursaluna quando recebe um item da terra numa noite de lua cheia. Que item é esse?",
    "resposta": "Peat Block",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Ursaluna_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/List_of_generation_VIII_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Ursaluna_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_generation_VIII_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "The eighth generation (Generation VIII) of the Pokémon franchise features 96 titular species of creatures introduced to the core video game series, including 89 in the 2019 Nintendo Switch games Pokémon Sword and Shield as of version 1.3.0 and 7 further species introduced in the 2022 Nintendo Switch game Pokémon Legends: Arceus. The temporary Dynamax and Gigantamax transformations were also introd\n[…]\nThe legendary Pokémon Zacian and Zamazenta resemble real-world wolves, drawing inspiration from wolves that frequently appear in British mythology. Shigeru Ohmori, the director for Sword and Shield, stated that the design team keeps a Pokémon's habitat in mind when coming up with its design so as to make the Pokémon believable.\n[…]\nPokémon Legends: Arceus introduces the Hisui Region, based on the real-world Japanese island of Hokkaido. The Hisui Region is a reimagining of the Generation IV games' Sinnoh Region set in the past prior to the events of those games.\n[…]\nFor the first time, many new Pokémon and regional forms were added to the generation through game patches rather than through the release of a new game. Acquiring these Pokémon requires purchasing an add-on downloadable content pass separate from the base game or utilizing the in-game trade feature. Further patches added other new species, including legendary and mythical Pokémon Kubfu, Urshifu, and Zarude in June 2020 and Regieleki, Regidrago, Glastrier, Spectrier, and Calyrex in October 2020."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_VIII",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os conceitos básicos das espécies Pokémon. Para informações detalhadas sobre o universo, por favor consulte wiki sobre o assunto.\n[…]\nA oitava geração (Geração VIII) da franquia Pokémon apresentou 96 criaturas fictícias, incluindo 89 introduzidos nos jogos da Nintendo Switch de 2019, Pokémon Sword e Shield, a partir da versão 1.3.0 e 7 outras criaturas introduzidos no jogo da Nintendo Switch de 2022, Pokémon Legends: Arceus. Os Pokémon iniciais de Pokémon Sword e Shield foram os primeiros da geração a serem revelados em 27 de fevereiro de 2019.\n[…]\nUm dos principais objetivos em cada jogo é completar a Pokédex, uma enciclopédia Pokémon abrangente, capturando, evoluindo e trocando com outros Treinadores para obter indivíduos de todas as espécies de Pokémon.\n[…]\nPokémon Legends: Arceus apresenta a região de Hisui, baseada na ilha japonesa de Hokkaido no mundo real. A região de Hisui é uma releitura da região de Sinnoh dos jogos da Geração IV, ambientada no passado antes dos eventos desses jogos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Zygarde",
      "descricao": "Pokémon lendário do tipo Dragão/Terra da sexta geração, número 718 da Pokédex Nacional."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "O lendário Zygarde muda de tamanho e de forma conforme a quantidade de algo que ele reúne no corpo. O quê?",
    "resposta": "Células e núcleos de Zygarde",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Zygarde_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/List_of_generation_VI_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Zygarde_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_generation_VI_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "The sixth generation (Generation VI) of the Pokémon franchise features 72 fictional species of creatures introduced to the core video game series in the 2013 Nintendo 3DS games Pokémon X and Y. Some Pokémon in this generation were introduced in animated adaptations of the franchise before X and Y. This generation featured the series' largest graphical overhaul: a shift from two-dimensional sprites\n[…]\nthe legendary trio of Xerneas, Yveltal and Zygarde have their roots in Norse mythology). More focus than usual was placed on giving new Pokémon unique elements for this generation."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_VI",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os assuntos básicos das espécies Pokémon. Para detalhes detalhados do universo, por favor consulte os wikis sobre o assunto.\n[…]\nTodos os Pokémon foram criados por uma equipe de aproximadamente 20 artistas, liderado por Ken Sugimori e Hironobu Yoshida. Pela primeira vez na franquia, as gerações de Pokémon Lendários—especificam Xerneas e Yveltal—não foram projetados apenas por Sugimori; ele pediu a ajuda de Atsuko Nishida para avançar seus projetos.\n[…]\nO trio lendário de Xerneas, Yveltal e Zygarde têm suas raízes na mitologia nórdica, por exemplo. Mais foco do que o habitual foi colocado em dar aos novos Pokémon elementos únicos para esta geração.\n[…]\nVários Pokémon de gerações anteriores, como Jigglypuff, Gardevoir e Marill, receberam retroativamente o novo tipo enquanto 13 novos Pokémon, mais notavelmente Sylveon, vestiu o tipo. Uma nova mecânica chamado Mega Evolução—uma forma temporária muda a forma para evolução normal—também foi adicionado para batalhas mais dinâmicas e surgiu dos conceitos de vínculos e evolução. Mega Evoluções de \"projetos refinados para um novo extremo\", segundo Yoshida, e exigiram um esforço considerável.\n[…]\nMasuda expressou que esse esforço se mostrou excepcionalmente difícil, pois os nomes devem parecer adequados à aparência física e não infringir nenhum direito. O pedido de Masuda, as formas \"X\" e \"Y\" foram usadas como estrutura para os Pokémon lendários da arte em caixas: Xerneas e Yveltal. Normalmente, Sugimori cria o Pokémon lendário sozinho; no entanto, ele precisou da assistência do designer Atsuko Nishida para criar Xerneas e Yveltal.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Zacian",
      "descricao": "Pokémon do tipo Fada, número 888 da Pokédex Nacional."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Segurando a Rusted Sword, uma espada enferrujada, Zacian assume uma forma coroada e ganha um segundo tipo além de Fada. Qual?",
    "resposta": "Aço",
    "distratores": [
      "Lutador",
      "Psíquico",
      "Dragão"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Zacian_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/List_of_generation_VIII_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Zacian_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_generation_VIII_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "The eighth generation (Generation VIII) of the Pokémon franchise features 96 titular species of creatures introduced to the core video game series, including 89 in the 2019 Nintendo Switch games Pokémon Sword and Shield as of version 1.3.0 and 7 further species introduced in the 2022 Nintendo Switch game Pokémon Legends: Arceus. The temporary Dynamax and Gigantamax transformations were also introd\n[…]\nThe Pokémon Sword and Shield starter Pokémon were the first Pokémon of the generation to be revealed on February 27, 2019.\n[…]\nPokémon are a species of fictional creatures created for the Pokémon media franchise. Developed by Game Freak and published by Nintendo, the Japanese franchise began in 1996 with the video games Pokémon Red and Green for the Game Boy, which were later released in North America as Pokémon Red and Blue in 1998. In these games and their sequels, the player assumes the role of a Trainer whose goal is to capture and use the creatures' special abilities to combat other Pokémon.\n[…]\nThe development of Pokémon Sword and Shield began in 2016, immediately following the development period of Pokémon Sun and Moon. The conceptual phase lasted approximately a year, and the debugging process continued into 2019. With the Galar region based in Great Britain, some of the native Pokémon draw inspiration from British fauna, folklore, and mythology.\n[…]\nThe legendary Pokémon Zacian and Zamazenta resemble real-world wolves, drawing inspiration from wolves that frequently appear in British mythology. Shigeru Ohmori, the director for Sword and Shield, stated that the design team keeps a Pokémon's habitat in mind when coming up with its design so as to make the Pokémon believable."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_VIII",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os conceitos básicos das espécies Pokémon. Para informações detalhadas sobre o universo, por favor consulte wiki sobre o assunto.\n[…]\nA oitava geração (Geração VIII) da franquia Pokémon apresentou 96 criaturas fictícias, incluindo 89 introduzidos nos jogos da Nintendo Switch de 2019, Pokémon Sword e Shield, a partir da versão 1.3.0 e 7 outras criaturas introduzidos no jogo da Nintendo Switch de 2022, Pokémon Legends: Arceus. Os Pokémon iniciais de Pokémon Sword e Shield foram os primeiros da geração a serem revelados em 27 de fevereiro de 2019.\n[…]\nPokémon são uma espécie de criaturas fictícias criadas para a franquia de mídia Pokémon. Desenvolvida pela Game Freak e publicada pela Nintendo, a franquia japonesa começou em 1996 com os jogos Pokémon Red e Green para Game Boy, que foram posteriormente lançados na América do Norte como Pokémon Red e Blue em 1998. Nesses jogos e suas sequências, o jogador assume o papel de um Treinador cujo objetivo é capturar e usar as habilidades especiais das criaturas para combater outros Pokémon.\n[…]\nDesenvolvimento de Pokémon Sword e Shield começou em 2016, imediatamente após o período de desenvolvimento de Pokémon Sun e Moon. A fase conceitual durou aproximadamente um ano e o processo de depuração continuou em 2019. Com a região de Galar, baseada na Grã-Bretanha, os Pokémon nativos inspiram-se na fauna, folclore e mitologia britânico. Os Pokémon lendários Zacian e Zamazenta são criaturas parecidas com lobos, inspirando-se em lobos que frequentemente aparecem na mitologia britânica.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Stunfisk",
      "descricao": "Pokémon peixe achatado da quinta geração, dos tipos Terrestre e Elétrico, que tem uma forma regional de Galar dos tipos Terrestre e Aço."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Que pokémon achatado de Galar, dos tipos Terrestre e Aço, imita uma armadilha de dentes de ferro e prende quem pisa nele?",
    "resposta": "Stunfisk de Galar",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Stunfisk_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/List_of_generation_V_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Stunfisk_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_generation_V_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "The fifth generation (Generation V) of the Pokémon franchise features 156 fictional species of creatures introduced to the core video game series in the 2010 Nintendo DS games Pokémon Black and White. Some Pokémon in this generation were introduced in animated adaptations of the franchise before Black and White.\n[…]\nThe following list details the 156 Pokémon of Generation V in order of their National Pokédex number. The first Pokémon, Victini, is #494 and the last, Genesect, is #649. In total, this generation added the most unique Pokémon of any generation. Alternate forms that result in type changes are included for convenience. Mega evolutions and regional forms are included on the pages for the generation in which they were introduced.\n[…]\nPokémon are a species of fictional creatures created for the Pokémon media franchise. Developed by Game Freak and published by Nintendo, the Japanese franchise began in 1996 with the video games Pokémon Red and Green for the Game Boy, which were later released in North America as Pokémon Red and Blue in 1998. In these games and their sequels, the player assumes the role of a Trainer whose goal is to capture and use the creatures' special abilities to combat other Pokémon.\n[…]\nSome Pokémon can transform into stronger species through a process called evolution via various means, such as exposure to specific items. Each Pokémon have one or two elemental types, which define its advantages and disadvantages when battling other Pokémon. A major goal in each game is to complete the Pokédex, a comprehensive Pokémon encyclopedia, by capturing, evolving, and trading with other Trainers to obtain individuals from all Pokémon species."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_V",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os assuntos básicos das espécies Pokémon. Para detalhes detalhados do universo, por favor consulte os wikis sobre o assunto.\n[…]\nA lista a seguir descreve 156 Pokémon da Geração V na ordem numérica do Pokédex Nacional. O primeiro Pokémon, Victini, numerado de 494 e o último, Genesect, numerado de 649. Formulários alternativos que resultam em alterações de tipo são incluídos por conveniência. Mega Evolução e formas regionais estão incluídas nas páginas da geração em que foram introduzidas.\n[…]\nPokémon são uma espécie de criaturas fictícias criadas para a franquia de mídia Pokémon. Desenvolvida pela Game Freak e publicada pela Nintendo, a franquia japonesa começou em 1996 com os jogos Pokémon Red e Green para Game Boy, que foram posteriormente lançados na América do Norte como Pokémon Red e Blue em 1998. Nesses jogos e suas sequências, o jogador assume o papel de um Treinador cujo objetivo é capturar e usar as habilidades especiais das criaturas para combater outros Pokémon.\n[…]\nAlguns Pokémon podem se transformar em espécies mais fortes por meio de um processo chamado evolução, através de vários meios, como a exposição a itens específicos. Cada Pokémon possui um ou dois tipos elementais, que definem suas vantagens e desvantagens ao batalhar contra outros Pokémon.\n[…]\nUm dos principais objetivos em cada jogo é completar a Pokédex, uma enciclopédia Pokémon abrangente, capturando, evoluindo e trocando com outros Treinadores para obter indivíduos de todas as espécies de Pokémon.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Runerigus",
      "descricao": "Pokémon dos tipos Terrestre e Fantasma da oitava geração, evolução do Yamask de Galar, com o corpo de uma placa de pedra."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O que Perrserker, Cursola e Runerigus, pokémon apresentados em Sword e Shield, têm em comum na sua origem?",
    "resposta": "Evoluem de formas de Galar",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Runerigus_(Pok%C3%A9mon)",
      "https://bulbapedia.bulbagarden.net/wiki/Perrserker_(Pok%C3%A9mon)",
      "https://bulbapedia.bulbagarden.net/wiki/Cursola_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/List_of_generation_VIII_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Runerigus_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Perrserker_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Cursola_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Glaceon",
      "descricao": "Pokémon do tipo Gelo da quarta geração, uma das evoluções de Eevee."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Em Diamond e Pearl, o que Leafeon e Glaceon tinham em comum na maneira de evoluir a partir de Eevee?",
    "resposta": "Subir de nível perto de uma rocha especial",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Glaceon_(Pok%C3%A9mon)",
      "https://bulbapedia.bulbagarden.net/wiki/Leafeon_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/List_of_generation_IV_Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Glaceon_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Leafeon_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_generation_IV_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "The fourth generation (generation IV) of the Pokémon franchise features 107 species of pokémon introduced to the core video game series in the 2006 Nintendo DS games Pokémon Diamond and Pearl. Some Pokémon in this generation were introduced in games and animated adaptations of the franchise before Diamond and Pearl, such as Bonsly, Mime Jr., and Munchlax, which were recurring characters in the Pok"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_IV",
        "situacao": "ok",
        "texto": "Este artigo apenas destaca os assuntos básicos das espécies Pokémon. Para detalhes detalhados do universo, por favor consulte os wikis sobre o assunto.\n[…]\nA quarta geração (Geração IV) da franquia Pokémon apresentou 107 criaturas fictícias introduzidas em 2006 no jogo de Nintendo DS, Pokémon Diamond e Pearl. Alguns Pokémon desta geração foram introduzidos nas adaptações animadas da franquia antes de Diamond e Pearl, como Bonsly, Mime Jr. e Munchlax, que eram personagens recorrentes da série de anime Pokémon em 2005 e 2006.\n[…]\nPokémon são uma espécie de criaturas fictícias criadas para a franquia de mídia Pokémon. Desenvolvida pela Game Freak e publicada pela Nintendo, a franquia japonesa começou em 1996 com os jogos Pokémon Red e Green para Game Boy, que foram posteriormente lançados na América do Norte como Pokémon Red e Blue em 1998. Nesses jogos e suas sequências, o jogador assume o papel de um Treinador cujo objetivo é capturar e usar as habilidades especiais das criaturas para combater outros Pokémon.\n[…]\nAlguns Pokémon podem se transformar em espécies mais fortes por meio de um processo chamado evolução, através de vários meios, como a exposição a itens específicos. Cada Pokémon possui um ou dois tipos elementais, que definem suas vantagens e desvantagens ao batalhar contra outros Pokémon.\n[…]\nUm dos principais objetivos em cada jogo é completar a Pokédex, uma enciclopédia Pokémon abrangente, capturando, evoluindo e trocando com outros Treinadores para obter indivíduos de todas as espécies de Pokémon.",
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
