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
      "nome": "Bulbasaur de Ash",
      "descricao": "Bulbasaur que pertence a Ash Ketchum no anime Pokémon, capturado na primeira temporada, em Kanto."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "No anime, Ash deixou seu Bulbasaur morando no laboratório do Professor Carvalho em vez de levá-lo na viagem. Que tarefa o pokémon assumiu por lá?",
    "resposta": "Manter a paz entre os pokémon",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Bulbasaur"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Bulbasaur",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Squirtle de Ash",
      "descricao": "Squirtle que pertence a Ash Ketchum no anime Pokémon, antigo líder do Esquadrão Squirtle."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em Johto, Ash reencontra o Esquadrão Squirtle, antiga gangue do seu Squirtle, que tinha virado uma brigada de bombeiros. Por que Ash se despede do Squirtle nessa visita?",
    "resposta": "Para ele voltar a liderar o esquadrão",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Squirtle"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Squirtle",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Squirtle de Ash",
      "descricao": "Squirtle que pertence a Ash Ketchum no anime Pokémon, antigo líder do Esquadrão Squirtle."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Ash teve no anime os três iniciais clássicos de Kanto: Bulbasaur, Charmander e Squirtle. Qual deles entrou na equipe dele por último?",
    "resposta": "Squirtle",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Squirtle",
      "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Charmander"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Squirtle",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Charmander",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Primeape de Ash",
      "descricao": "Primeape que pertenceu a Ash Ketchum na primeira temporada do anime Pokémon, deixado com o lutador Anthony."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Depois de um torneio de luta em Kanto, Ash deixa seu Primeape com Anthony, um lutador experiente. Por que ele toma essa decisão?",
    "resposta": "Para treinar até virar campeão de luta",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Primeape"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Primeape",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Krabby de Ash",
      "descricao": "Krabby capturado por Ash Ketchum na primeira temporada do anime Pokémon, que depois evoluiu para Kingler."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Assim que foi capturado por Ash, o Krabby desapareceu e foi parar no laboratório do Professor Carvalho, sem que Ash pedisse. Por quê?",
    "resposta": "Ash já tinha seis pokémon",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Kingler"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Kingler",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "A Lenda de Dratini (episódio)",
      "descricao": "Episódio da primeira temporada do anime Pokémon em que Ash procura um Dratini na Zona Safári, nunca exibido nos Estados Unidos."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "O episódio A Lenda de Dratini, passado na Zona Safári, ficou de fora da exibição do anime nos Estados Unidos. Qual foi o motivo?",
    "resposta": "Cenas com armas de fogo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_episodes_removed_from_rotation",
      "https://bulbapedia.bulbagarden.net/wiki/EP035"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_episodes_removed_from_rotation",
        "situacao": "ok",
        "texto": "Pokémon is an anime television series that originally debuted in Japan on April 1, 1997. Throughout its run of over 1,300 episodes, specific episodes have been pulled from airing, banned from airing in certain countries, or never aired at all.\n[…]\n\"The Legend of Miniryu\" (ミニリュウのでんせつ, Miniryū no Densetsu), also known as \"The Legend of Dratini,\" was aired in Japan on November 25, 1997. The episode has Ash and his friends enter a location known as the Safari Zone to catch Pokémon. The area's warden, named Kaiser, points a gun at them, and other guns and bombs appear in various capacities throughout the episode.\n[…]\nThe episode never received an official English translation.\n[…]\nThe anime series Pokémon the Series: Black & White planned to adapt the characters of Team Plasma from the games in the two-part episode \"Team Rocket vs. Team Plasma!\" The episodes would have featured Team Rocket dueling with Team Plasma and would have ended with a city being threatened by explosions hailing from the energy-conducting Meteonite item. The episodes were originally scheduled to be broadcast on March 17 and 24, 2011.\n[…]\nDue to this, it was speculated that the episodes were never aired due to similarities to the destruction caused by the Tōhoku earthquake and tsunami.\n[…]\nThe episode \"Battle of the Quaking Island! Dojoach vs. Namazun!!\", which would have been released as part of Pokémon: Advanced Battle, was never aired due to the 2004 Chūetsu earthquake. The episode featured the Pokémon Whiscash, which is capable of causing earthquakes, and is widely believed to be the reason for the episode's removal. This had also lead to the banning of three moves in the anime, Earthquake, Magnitude, and Fissure.\n[…]\nList of banned episodes of Pokémon from Serebii.net"
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/EP035",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_epis%C3%B3dios_censurados_de_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "O anime Pokémon, que estreou no Japão em 1 de abril de 1997, teve mais de 1.000 episódios exibidos em 2018. Por várias razões, alguns não são distribuídos ou não foram reexibidos em certos países, enquanto outros foram alterados ou completamente banidos.\n[…]\nHavia planos para os episódios serem transmitidos em uma data posterior, mas o episódio nunca foi ao ar. Cenas deste episódio foram posteriormente usadas no episódio \"Meloetta and the Undersea Temple\", que foi ao ar em 27 de setembro de 2012, bem como em \"Strong Strategy Steals the Show\", que foi ao ar em 13 de dezembro de 2012. Estes foram os 682 e 83º episódios da série de anime Pokémon.\n[…]\n\"A Lenda de Miniryu (Dratini)\" (ミニリュウの伝説, Miniryū no Densetsu), nos Estados Unidos, \"The Legend of Dratini\" foi o segundo episódio a ser pulado pela 4Kids Entertainment, e o primeiro episódio que nunca foi ao ar em qualquer formato dublado. Este foi o 35º episódio da série original japonesa.\n[…]\nEste episódio foi proibido em quase todos os países fora do Japão, em grande parte devido ao uso frequente de armas de fogo. Uma cena em particular envolve o diretor do safári, Kaiser, apontando um revólver para Ash e perguntando se ele quer levar um tiro. Também nesse episódio, há uma cena em que Meowth aparece com um bigode de broxa semelhante ao de Adolf Hitler.\n[…]\nEste episódio foi temporariamente retirado de exibição após os ataques de 11 de setembro de 2001, principalmente por causa das semelhanças entre os ataques e o ataque de Tentacruel à cidade. A personagem Nastina também usou armas de estilo militar durante as cenas de luta do episódio. No entanto, Tentacruel batendo em um prédio não foi removido do tema de abertura da dublagem, e o episódio foi lançado nos Estados Unidos em DVD.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Pikachu's Goodbye (episódio)",
      "descricao": "Episódio da primeira temporada do anime Pokémon em que Ash pensa em deixar Pikachu numa floresta com um bando de Pikachu selvagens."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Num episódio da primeira temporada, Ash quase se despede para sempre de Pikachu numa floresta. Por que ele decide deixar o parceiro ali?",
    "resposta": "Para viver com outros Pikachu",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/EP039"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/EP039",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Aipom de Ash",
      "descricao": "Aipom que pertenceu a Ash Ketchum na série Diamante e Pérola do anime Pokémon, trocado com Dawn."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em Diamante e Pérola, Ash trocou com Dawn seu Aipom pelo Buizel dela. O que motivou essa troca?",
    "resposta": "Aipom preferia concursos, e Buizel, batalhas",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Dawn%27s_Ambipom",
      "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Buizel"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Dawn%27s_Ambipom",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Buizel",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Carnivine de James",
      "descricao": "Carnivine que pertence a James, da Equipe Rocket, na série Diamante e Pérola do anime Pokémon."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Em Diamante e Pérola, James ganha um Carnivine que vive abocanhando a cabeça dele, como fazia um antigo pokémon seu. Que pokémon era esse?",
    "resposta": "Victreebel",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/James%27s_Carnivine",
      "https://bulbapedia.bulbagarden.net/wiki/James%27s_Victreebel"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/James%27s_Carnivine",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/James%27s_Victreebel",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Johanna",
      "descricao": "Mãe de Dawn na série Diamante e Pérola do anime Pokémon, moradora de Twinleaf, em Sinnoh."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O que Dawn e a mãe dela, Johanna, têm em comum no mundo pokémon?",
    "resposta": "São coordenadoras de concursos",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Johanna"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Johanna",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Tyson",
      "descricao": "Treinador dono de um Meowth de botas e chapéu, que elimina Ash e vence a Liga de Hoenn no anime Pokémon."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Ritchie em Kanto, Harrison em Johto, Tyson em Hoenn e Tobias em Sinnoh. O que esses quatro treinadores do anime têm em comum?",
    "resposta": "Eliminaram Ash da Liga",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Tyson",
      "https://bulbapedia.bulbagarden.net/wiki/Ritchie",
      "https://bulbapedia.bulbagarden.net/wiki/Harrison",
      "https://bulbapedia.bulbagarden.net/wiki/Tobias"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Tyson",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Ritchie",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Harrison",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "May (anime)",
      "descricao": "Companheira de viagem de Ash na série Pokémon Advanced, filha do líder de ginásio Norman, chamada Haruka no Japão."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Misty, em Kanto, e May, em Hoenn, tiveram o mesmo azar logo que conheceram Ash. Que azar foi esse?",
    "resposta": "Pikachu destruiu a bicicleta delas",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/May",
      "https://bulbapedia.bulbagarden.net/wiki/Misty"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/May",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Misty",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Butch e Cassidy",
      "descricao": "Dupla de agentes da Equipe Rocket no anime Pokémon, rivais de Jessie e James."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Butch e Cassidy, a dupla rival de Jessie e James na Equipe Rocket, juntos formam o nome de qual fora da lei do Velho Oeste americano?",
    "resposta": "Butch Cassidy",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Butch",
      "https://en.wikipedia.org/wiki/Butch_Cassidy"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Butch",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Butch_Cassidy",
        "situacao": "ok",
        "texto": "Robert LeRoy Parker (April 13, 1866 – November 7, 1908), better known as Butch Cassidy, was an American cowboy, train and bank robber and the leader of a gang of criminal outlaws known as the \"Wild Bunch\" in the Old West.\n[…]\nThe two bodies were buried at the small San Vicente cemetery, near the grave of a German miner named Gustav Zimmer. American forensic anthropologist Clyde Snow and his researchers attempted to find the graves in 1991, but they did not find any remains with DNA matching the living relatives of Cassidy and Longabaugh. Snow's search formed the basis of the British documentary Wanted - Butch Cassidy and the Sundance Kid (Channel 4, April 22, 1993; later screened on Nova, October 12, 1993).\n[…]\nButch Cassidy\n[…]\n2024: The Outlaw Noble Salt by Amy Harmon. The plot shows Parker (Butch Cassidy) using the alias Noble Salt while working as a bodyguard of a well-known singer and her young son. He and Longabaugh had parted ways after their time in South America.\n[…]\n1998: In Pokemon: The Series, two recurring Team Rocket members, named Butch and Cassidy in homage to the real-life person, debuted in the episode \"The Breeding Center Secret\".\n[…]\n2014: In the PBS: American Experience episode \"Butch Cassidy and the Sundance Kid\"\n[…]\n2006: Outlaw Trail: The Treasure of Butch Cassidy is an adventure film about a fictional \"lost treasure\" hidden by Butch Cassidy.\n[…]\n2011:  Blackthorn is a film that has Sam Shepard as an aged Butch Cassidy living under the assumed name James Blackthorn in a secluded village in Bolivia 20 years after his disappearance in 1908.\n[…]\nMedia related to Butch Cassidy at Wikimedia Commons\n[…]\nButch Cassidy's Surrender Offer article by Richard Patterson\n[…]\nIn Search Of…Butch Cassidy hosted by Leonard Nimoy"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Butch_Cassidy",
        "situacao": "ok",
        "texto": "Robert LeRoy Parker, mais conhecido como Butch Cassidy (Beaver, 13 de abril de 1866 – San Vicente, ca. 7 de novembro de 1908) foi um famoso criminoso norte-americano, assaltante de comboios,  e líder da quadrilha de foras-da-lei Hole in the Wall Gang.\n[…]\nRobert LeRoy Parker nasceu a 13 de abril de 1866, em Beaver (Utah). Ainda jovem adoptou o pseudónimo de Butch Cassidy, em homenagem a  Mike Cassidy, um antigo ladrão que o ensinou a roubar gado.\n[…]\nApós a prisão de Elzy Lay, Butch Cassidy juntou-se a Sundance Kid (Harry Longabaugh), formando uma dupla que se tornaria lendária. Afirma-se que, embora fosse assaltante e usasse armas, nunca matou pessoa alguma.\n[…]\nA morte de Cassidy é motivo de disputa por parte dos historiadores, existindo várias versões.\n[…]\nA versão oficial da morte de Butch e Sundance, diz que, em 1908, próximo a San Vicente, Bolívia, os dois bandidos foram perseguidos por soldados bolivianos, e foram mortos com rajadas de metralhadora.\n[…]\nLula Parker Betenson, irmã de Butch, teria alegado que o criminoso retornou aos Estados Unidos, onde viveu no anonimato. Lula também relata uma reunião dela, Cassidy, seu irmão Max e de seu pai Maxi, em 1925. A suportar essa versão, existem cartas datadas de 1930, com passagem pelo Brasil, 1937  enviadas de Rio de Janeiro e 1938, cartas trocadas entre os dois enviadas de São Paulo que supostamente foram enviadas para Sundance Kid e escritas por Cassidy.\n[…]\nButch Cassidy and the Sundance Kid\n[…]\nButch Cassidy é encarnado pelo actor Paul Newman\n[…]\nButch and Sundance: The Early Days\n[…]\nButch Cassidy é encarnado pelo actor Tom Berenger.\n[…]\nOutlaw Trail: The Treasure of Butch Cassidy\n[…]\nButch Cassidy é encarnado pelo actor Brian Wimmer.\n[…]\nButch Cassidy é encarnado pelo actor Sam Shepard.\n[…]\nHistory of Butch Cassidy (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Gotta Catch 'Em All",
      "descricao": "Slogan em inglês da franquia Pokémon, presente na primeira abertura americana do anime, adaptado no Brasil como Temos que pegar."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "No Brasil, o famoso slogan de Pokémon, cantado na abertura do anime, virou Temos que pegar. Qual é a frase original em inglês?",
    "resposta": "Gotta catch 'em all",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Theme",
      "https://bulbapedia.bulbagarden.net/wiki/Gotta_Catch_%27Em_All"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Theme",
        "situacao": "ok",
        "texto": "\"Pokémon Theme\" (also known as \"Gotta catch 'em all!\") is a song written by John Siegler and John Loeffler and performed by Jason Paige. It is the original theme song for the first season of the English adaptation of the Pokémon anime. Since its release, the song has been virtually synonymous with the Pokémon franchise because the line \"Gotta catch 'em all!\" has become its official English slogan;\n[…]\nAccording to Norman Grossfeld, the then-president of 4Kids Productions, the line \"Gotta catch 'em all!\" was created as a \"tagline for marketing purposes that would also be included in the theme song\". It is derived from the Japanese tagline \"(ポケモンGETだぜ!, Pokémon getto da ze!)\". One other contender for the tagline was \"Catch 'em if you can\", which was used in an earlier version of the theme song.\n[…]\nThe theme song was featured in the 2000 video game Pokémon Puzzle League, as well as the 2004 video game, Donkey Konga.\n[…]\nIn 2016, the original vocalist Jason Paige performed a parody of the song featuring Dwayne Johnson as well as YouTube stars MatPat and Ali-A.\n[…]\nDuring the 2012 primary election, the original vocalist Jason Paige performed a parody of the song in support of the Republican candidate Ron Paul.\n[…]\nOn September 22, 2025, the Department of Homeland Security used the song in a video of alleged illegal immigrants getting captured by officers, intercut with footage of Ash Ketchum throwing Poké Balls. The video ends with Pokémon cards featuring some of the arrested individuals. It was also posted by the official White House TikTok account.\n[…]\nTwo days later, The Pokémon Company International released a statement in response to the videos, noting that \"permission was not granted for the use of our intellectual property.\"\n[…]\nList of Pokémon theme songs"
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Gotta_Catch_%27Em_All",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tema_de_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "\"Tema de Pokémon\" (também conhecido como \"Temos que Pegar\") é uma canção escrita por John Siegler e John Loeffler para ser a abertura do anime Pokémon. Foi originalmente escrita em inglês com o título \"Gotta Catch'em All\", e interpretada por Jason Paige. No Brasil, a canção recebeu a voz de Janaína Bianchi.\n[…]\nDe acordo com Norman Grossfeld, na época presidente da 4Kids Productions, a frase \"Gotta catch 'em all!\" foi criada como um \"slogan para fins de marketing que também seria incluído na música tema\". Ela deriva do slogan japonês \"(ポケモンGETだぜ!, Pokémon getto da ze!)\".\n[…]\nEm julho de 2016, após o lançamento do jogo para celular Pokémon Go, a música original teve um aumento de 382% no número de ouvintes na plataforma de streaming de música Spotify. Houve casos de carros da polícia tocando a música por alto-falantes enquanto dirigiam perto de jogadores de Pokémon Go, bem como grupos de pessoas cantando a música em público.\n[…]\nNo Brasil, o CD Pokémon - Para Ser Um Mestre, contendo o tema e outras músicas do anime em português, ganhou disco de ouro. Apesar do enorme sucesso, Bianchi recebeu apenas um cachê e a gravação não rendeu muito financeiramente para ela, mas ganhou enorme carinho dos fãs e gravou seu nome na história da franquia no Brasil.\n[…]\nA música tema fez parte do jogo de vídeo game Pokémon Puzzle League de 2000, bem como do jogo Donkey Konga de 2004.\n[…]\nA música recebeu um novo arranjo para servir como abertura para a 17ª temporada do anime, sendo chamada de \"versão XY”, e cantada por Iuri Stocco.\n[…]\nEm 21 de novembro de 2025, Janaína Bianchi cantou a música na abertura do Campeonato Internacional Pokémon da América Latina.\n[…]\nDois dias depois, a Pokémon Company divulgou um comunicado em resposta aos vídeos, dizendo que \"a permissão para o uso de nossa propriedade intelectual não foi concedida\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Professor Carvalho",
      "descricao": "Pesquisador pokémon de Kanto, que entrega o primeiro pokémon ao jogador nos jogos Red e Blue e a Ash no anime."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "No anime, o Professor Carvalho, que entrega Pikachu a Ash na cidade de Pallet, tem qual primeiro nome?",
    "resposta": "Samuel",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Professor_Oak"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Professor_Oak",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Conferência Lily of the Valley",
      "descricao": "Liga Pokémon de Sinnoh no anime, disputada por Ash numa ilha no fim da série Diamante e Pérola."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "No anime, a Liga de Sinnoh disputada por Ash acontece na ilha Lily of the Valley, que dá nome à conferência. Esse nome é de qual flor?",
    "resposta": "Lírio-do-vale",
    "distratores": [
      "Tulipa",
      "Camélia",
      "Orquídea"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Lily_of_the_Valley_Conference",
      "https://en.wikipedia.org/wiki/Lily_of_the_valley"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Lily_of_the_Valley_Conference",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Lily_of_the_valley",
        "situacao": "ok",
        "texto": "Lily-of-the-valley (Convallaria majalis), also written as lily of the valley, is a woodland flowering plant with sweetly scented, pendent, bell-shaped white flowers borne in sprays in spring. It is native to Europe, Western Asia and Northern Asia.\n[…]\nThe lily-of-the-valley was the national flower of Yugoslavia, and it also became the national flower of Finland in 1967.\n[…]\nIn the \"language of flowers\", the lily of the valley signifies the return of happiness.\n[…]\nThe lily of the valley is represented both literally and symbolically in art, literature, music, and other media. The flower is the theme of a poem by Paul Laurence Dunbar, and Tchaikovsky wrote the poem \"Lilies of the Valley\" (Ландыши) in December 1878 while in Florence. In Anton Chekhov's 1898 short story \"A Doctor's Visit\", drops of convallaria are mentioned as medicine. Marc Chagall produced the painting Lillies-of-the-Valley in 1916.\n[…]\nLily of the valley was reputedly Queen Elizabeth II's favourite flower, and so it was the theme of the poem \"Floral Tribute\" by the Poet Laureate Simon Armitage, written in memory of the Queen and published in the week after her death. Previously, an eponymous song was written by English rock band Queen and released as part of the 1974 studio album Sheer Heart Attack.\n[…]\n\"Face Off\", the finale of the fourth season of the television series Breaking Bad, features the use of berries from lily of the valley as poison because the symptoms are similar to ricin poisoning. In the third episode of Outlander, children are revealed to have been dying after confusing Lily of the Valley for garlic and eating it.\n[…]\nList of plants known as lily"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Convallaria_majalis",
        "situacao": "ok",
        "texto": "Convallaria majalis L., conhecida pelo nome comum de lírio-do-vale, é uma espécie herbácea altamente venenosa, nativa do Hemisfério norte de clima temperado e fresco, mais presente na Ásia e Europa. É uma planta da família das convalariáceas, típica de formações florestais abertas. Chega a medir 30 cm. Também é conhecida pelos nomes populares de campainhas, círio-de-nossa-senhora, convalária, flor\n[…]\nEm 1956, a Dior produziu uma fragrância simulando o cheiro do lírio-do-vale, que por sinal era a flor favorita de Christian Dior.\n[…]\nO perfume leva o nome de Diorissimo e foi feita por Edmond Roudnitska., Penhaligon's Lily of the Valley (1976) e Olivia Giacobetti's En Passant (2000).==Referências==",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Oficial Jenny",
      "descricao": "Policial do anime Pokémon que aparece em quase todas as cidades, sempre com a mesma aparência."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "No Japão, a Oficial Jenny se chama Junsar, nome tirado de uma palavra japonesa. O que essa palavra significa?",
    "resposta": "Policial",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Officer_Jenny"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Officer_Jenny",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Pikachu de Ash",
      "descricao": "Pikachu parceiro de Ash Ketchum no anime Pokémon, recebido do Professor Carvalho no primeiro episódio."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Ao contrário da maioria dos pokémon do anime, o Pikachu de Ash se recusa a fazer algo que os treinadores costumam pedir. O quê?",
    "resposta": "Entrar na Poké Bola",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Pikachu"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Ash%27s_Pikachu",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "James (Equipe Rocket)",
      "descricao": "Integrante da Equipe Rocket no anime Pokémon, parceiro de Jessie e Meowth, chamado Kojiro no Japão."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "James, da Equipe Rocket, filho de uma família rica, tem um passatempo de colecionador que guarda com carinho. O que ele coleciona?",
    "resposta": "Tampinhas de garrafa",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/James"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/James",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Misty",
      "descricao": "Líder de ginásio do tipo Água de Cerulean, nos jogos, e companheira de viagem de Ash no início do anime Pokémon."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "No anime, Misty adora pokémon de água, mas tem pavor de pokémon de um outro tipo. Qual?",
    "resposta": "Inseto",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Misty"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Misty",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Croagunk de Brock",
      "descricao": "Croagunk que pertence a Brock na série Diamante e Pérola do anime Pokémon."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Em Diamante e Pérola, que pokémon de Brock o acerta com um golpe venenoso e o arrasta para longe sempre que ele se derrete por uma moça?",
    "resposta": "Croagunk",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Brock%27s_Croagunk"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Brock%27s_Croagunk",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Harrison",
      "descricao": "Treinador dono de um Blaziken que elimina Ash da Conferência Prata, a Liga de Johto, no anime Pokémon."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Harrison, o rival que derrota Ash em Johto com um Blaziken, inspira o herói a visitar a região natal dele na série seguinte. Que região é essa?",
    "resposta": "Hoenn",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Harrison"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Harrison",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Versão brasileira do anime Pokémon",
      "descricao": "Exibição dublada em português do anime Pokémon no Brasil, que estreou na TV aberta no fim dos anos noventa."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Em que emissora de TV aberta o anime Pokémon estreou no Brasil, provocando uma febre entre as crianças?",
    "resposta": "Rede Record",
    "distratores": [
      "SBT",
      "Rede Globo",
      "Band"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_(anime)"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_(anime)",
        "situacao": "ok",
        "texto": "Pokémon (ポケモン, Pokemon), abreviação do título japonês Pocket Monsters (ポケットモンスター, Poketto Monsutā; lit. \"Monstros de Bolso\"), e atualmente marcado em inglês como Pokémon: the Series (テレビ アニメ 「「 ポケット モンスター シリーズ, Terebi Anime 'Poketto Mansutā' Shirīzu; lit. TV Anime \"Monstros de Bolso\" As Séries) e Pokémon Horizons: the Series, é uma série de anime de televisão japonesa, que faz parte da franquia de\n[…]\nPokémon, a Série\n[…]\nA tabela a seguir lista a receita anual de conteúdo de mídia de anime Pokémon no Japão, conforme relatado pela empresa de pesquisa de mercado Hakuhodo.\n[…]\nPokémon chegou ao Brasil no dia 10 de maio de 1999, sendo transmitido inicialmente no programa \"Eliana e Alegria\" da Record. No Cartoon Network, o anime estreou em 6 de setembro do mesmo ano, sendo transmitido inicialmente no \"Talismã\" e esteve transmitido até setembro de 2021. Na TV aberta, Pokémon foi transmitido pela Record da 1ª até a 4ª temporada.\n[…]\nNa pesquisa da TV Asahi sobre os \"100 Melhores Animes\", Pokémon ficou em 38º lugar. A Paste classificou a série em 44º lugar em sua lista de outubro de 2018 com os \"50 Melhores Animes de Todos os Tempos\", com Sarra Sedghi escrevendo: \"Para a alegria das crianças dos anos 90 em todos os lugares, Pokémon ajudou a consolidar o anime (e com sorte, os bons trocadilhos) no Ocidente\".\n[…]\nApesar de ter sido comum a troca de dubladores em diversos países do mundo, poucos personagem principais do anime haviam tido o dublador trocado no Brasil, até 2015, quando por uma recusa do cliente da dublagem em permitir a dublagem a distância do dublador do protagonista, Fábio Lucindo, que à época estava em Portugal e não poderia comparecer presencialmente ao estúdio de dublagem, e por isso optou pela troca do dublador do protagonista depois de mais de 10 anos.\n[…]\nPágina oficial do anime Pokémon na TV Tokyo (em japonês)\n[…]\nPágina oficial do anime Pokémon na página oficial de Pokémon (em japonês)"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Versão brasileira do anime Pokémon",
      "descricao": "Exibição dublada em português do anime Pokémon no Brasil, que estreou na TV aberta no fim dos anos noventa."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Depois do sucesso no Japão e nos Estados Unidos, o anime Pokémon estreou na TV brasileira em que ano?",
    "resposta": "1999",
    "distratores": [
      "1997",
      "2001",
      "2003"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_(anime)"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_(anime)",
        "situacao": "ok",
        "texto": "Pokémon (ポケモン, Pokemon), abreviação do título japonês Pocket Monsters (ポケットモンスター, Poketto Monsutā; lit. \"Monstros de Bolso\"), e atualmente marcado em inglês como Pokémon: the Series (テレビ アニメ 「「 ポケット モンスター シリーズ, Terebi Anime 'Poketto Mansutā' Shirīzu; lit. TV Anime \"Monstros de Bolso\" As Séries) e Pokémon Horizons: the Series, é uma série de anime de televisão japonesa, que faz parte da franquia de\n[…]\nPokémon, a Série\n[…]\nA tabela a seguir lista a receita anual de conteúdo de mídia de anime Pokémon no Japão, conforme relatado pela empresa de pesquisa de mercado Hakuhodo.\n[…]\nNos Estados Unidos, o anime foi exibido no Kids' WB como um desenho animado nas manhãs de sábado a partir de fevereiro de 1999.\n[…]\nPokémon foi originalmente licenciado nos Estados Unidos pela 4Kids Entertainment, que produziu uma adaptação localizada em inglês, distribuída pela The Summit Media Group. A versão localizada estreou em distribuição em 8 de setembro de 1998, vinte dias antes do lançamento norte-americano de Pokémon Red e Blue. Pokémon foi distribuído em VHS e DVD pela Pioneer Entertainment e Viz Video, que venderam 25 milhões de unidades da série em 2000.\n[…]\nPokémon chegou ao Brasil no dia 10 de maio de 1999, sendo transmitido inicialmente no programa \"Eliana e Alegria\" da Record. No Cartoon Network, o anime estreou em 6 de setembro do mesmo ano, sendo transmitido inicialmente no \"Talismã\" e esteve transmitido até setembro de 2021. Na TV aberta, Pokémon foi transmitido pela Record da 1ª até a 4ª temporada.\n[…]\nPokémon está atualmente disponível para streaming na Netflix em 216 regiões e países com diferentes dublagens e legendas; todos os países têm pelo menos áudio em inglês. Pokémon é globalmente um dos programas mais assistidos na Netflix, em 2016. Também está disponível no Hulu (nos Estados Unidos e Japão), Amazon Prime Video (nos Estados Unidos), e Jiohotstar (na Índia).\n[…]\nPágina oficial de Pokémon (em inglês)"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Grande Festival",
      "descricao": "Torneio final dos concursos pokémon de cada região no anime Pokémon, disputado por coordenadores como May e Dawn."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "No anime, May e Dawn ganham fitas ao vencer concursos pokémon. Quantas fitas um coordenador precisa juntar para disputar o Grande Festival?",
    "resposta": "Cinco",
    "distratores": [
      "Três",
      "Quatro",
      "Oito"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Grand_Festival",
      "https://bulbapedia.bulbagarden.net/wiki/Contest_Ribbon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Grand_Festival",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Contest_Ribbon",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Irmãs Sensacionais",
      "descricao": "Irmãs mais velhas de Misty, Daisy, Violet e Lily, que cuidam do ginásio de Cerulean no anime Pokémon."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "No anime, Misty é a caçula de uma família que cuida do ginásio de Cerulean. Quantas irmãs mais velhas ela tem?",
    "resposta": "Três",
    "distratores": [
      "Duas",
      "Quatro",
      "Cinco"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Sensational_Sisters"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Sensational_Sisters",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Brandon",
      "descricao": "Rei da Pirâmide, o último cérebro da Frente de Batalha enfrentado por Ash no anime Pokémon."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Brandon, o Rei da Pirâmide, é o último desafio de Ash na Frente de Batalha do anime. Que trio de lendários ele usa nesse confronto final?",
    "resposta": "Regirock, Regice e Registeel",
    "distratores": [
      "Articuno, Zapdos e Moltres",
      "Uxie, Mesprit e Azelf",
      "Raikou, Entei e Suicune"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Brandon"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Brandon",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "A Ascensão de Darkrai",
      "descricao": "Décimo filme da franquia Pokémon, de 2007, em que Darkrai protege a cidade de Alamos de uma batalha entre lendários."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "No filme A Ascensão de Darkrai, o pokémon dos pesadelos defende uma cidade de uma batalha devastadora entre quais dois lendários?",
    "resposta": "Dialga e Palkia",
    "distratores": [
      "Groudon e Kyogre",
      "Latios e Latias",
      "Reshiram e Zekrom"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_The_Rise_of_Darkrai"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_The_Rise_of_Darkrai",
        "situacao": "ok",
        "texto": "Pokémon: The Rise of Darkrai is a 2007 Japanese animated fantasy adventure film produced by OLM, Inc. and distributed by Toho. The film was directed by Kunihiko Yuyama and written by Hideki Sonoda. It is the tenth film in the Pokémon anime series and the first film of Pokémon the Series: Diamond and Pearl, created by Satoshi Tajiri, Junichi Masuda and Ken Sugimori.\n[…]\nIn the film, Dialga and Palkia, two Pokémon known to be deities who were never meant to meet, fight in the space between dimensions. The brawling causes disturbances in the space around Alamos Town. The townsfolk blame the events on a nightmare-causing Pokémon called Darkrai, which is trying to protect the town from Dialga and Palkia's clash. The film was released in Japan on July 14, 2007, to a mixed critical reception but a positive audience reception.\n[…]\nIn the present, Godey's foretelling comes true when the Legendary Pokémon Palkia, who can control space, and Dialga, who rules over time, cause disturbances in the air around Alamos Town as they brawl in the space between dimensions. At the same time, Ash Ketchum, Brock, and Dawn arrive in the town for Dawn's next Pokémon Contest inside the Space-Time Towers. Palkia and Dialga's clashing causes a disturbance in space, which damages the garden. Baron Alberto believes this is the work of Darkrai.\n[…]\nThe next day, Palkia, injured and attempting to hide from Dialga, emerges in Alamos Town. It moves the town to another dimension with no way of escaping. Darkrai reappears in the town square, telling someone to go away. Alberto, joined by Ash, Dawn, and other Pokémon trainers, engage in combat with it. Outraged, Darkrai traps many Pokémon in the town square in nightmares. Later that evening, Tonio finds Palkia resting between the Towers.\n[…]\nPokémon: The Rise of Darkrai at IMDb\n[…]\nPokémon: The Rise of Darkrai  at Anime News Network's encyclopedia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon%3A_The_Rise_of_Darkrai",
        "situacao": "ok",
        "texto": "Pokémon: The Rise of Darkrai, originalmente lançado no Japão como Pocket Monsters Diamond & Pearl the Movie: Dialga vs. Palkia vs. Darkrai (劇場版ポケットモンスター ダイヤモンド&パール ディアルガVSパルキアVSダークライ, Gekijōban Poketto Monsutā Daiyamondo Pāru Diaruga tai Parukia tai Dākurai) é o décimo filme de animação da franquia Pokémon. Foi lançado nos cinemas japoneses em 14 de julho de 2007.\n[…]\nDialga e Palkia dispertam e se encontram numa fenda entre o espaço e tempo. Lá eles começam uma batalha, mas Palkia ferido foge de Dialga. E Ash e seus amigos sentem um vento estranho causado por esses dois deuses. Em Alamos eles conhecem Alice que os guia pela cidade e Alberto um barão que culpa Darkrai por tudo e Tonio um cientista local. Ash e seus amigos vêm Darkrai um Pokémon que causa pesadelos. Ele é atacado e faz Ash ter pesadelos mostrando uma imagem. Ele acorda no centro Pokémon.\n[…]\nLogo após Palkia luta com Dialga e tenta fugir dele indo para alamos onde tenta se recuperar. Darkrai tenta impedir Palkia, mas a cidade e levada a outra dimensão por Palkia. Eis que Dialga aparece e os tres começam uma luta que começa a destruir a cidade. Dialga e Palkia vão dar um ataque que destruia Alamos Town e Darkrai cria uma esfera que se mistura aos ataques. A esfera some e Dialga e Palkia derrotam Darkrai que some em uma nuvem de pó.\n[…]\nNa torre Tempo-Espaço Ash e Dawn ativam a maquina que começa a tocar uma canção chamada oracion,essa canção foi ensinada a Alice por sua vó, quando Dialga e Palkia escutam a canção se acalmão e percebem que sua luta e errada.Então Dialga e Palkia retornam a cidade para sua verdadeira posição.\n[…]\nWebsite do filme (em inglês)\n[…]\nPokémon: The Rise of Darkrai (filme) na enciclopédia do Anime News Network (em inglês)\n[…]\nPokémon: The Rise of Darkrai no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Pokémon Theme",
      "descricao": "Primeira abertura da versão americana do anime Pokémon, que começa com os versos I wanna be the very best."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "A primeira abertura americana do anime Pokémon, que começa com I wanna be the very best, foi cantada por quem?",
    "resposta": "Jason Paige",
    "distratores": [
      "John Siegler",
      "John Loeffler",
      "Ralph Schuckett"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Theme",
      "https://en.wikipedia.org/wiki/Jason_Paige"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Theme",
        "situacao": "ok",
        "texto": "\"Pokémon Theme\" (also known as \"Gotta catch 'em all!\") is a song written by John Siegler and John Loeffler and performed by Jason Paige. It is the original theme song for the first season of the English adaptation of the Pokémon anime. Since its release, the song has been virtually synonymous with the Pokémon franchise because the line \"Gotta catch 'em all!\" has become its official English slogan;\n[…]\nJohn Siegler and John Loeffler wrote the lyrics to the song. Siegler produced the track, also playing keyboards, bass, and programming drum machines. David Rolfe, the vocalist for later themes of the series, played the guitar while Jason Paige provided the vocals. Kati Mac, Loeffler, Ken Cummings and Louis Cortelezzi provided background vocals. The song was written in G minor.\n[…]\nSiegler initially felt the show's concept was \"incomprehensible\" but decided it had potential after viewing its debut episode. Jason Paige recorded the original theme song in four hours. Paige initially received a \"standard, three-figure flat fee\" for the recording, but did not receive any royalties from the song. He received a one-time payment \"in the mid-five figures\" for the song in 2000.\n[…]\nPaige claimed that he \"didn't really know much about Pokémon\" when he did the demo, other than a scene in the animated series that caused bouts of epileptic seizures in Japan. The theme song premiered on the debut episode \"Pokémon, I Choose You!\" on September 8, 1998. In 1999, Paige recorded an extended version of the theme song for the album Pokémon 2.B.A. Master.\n[…]\nIn 2016, the original vocalist Jason Paige performed a parody of the song featuring Dwayne Johnson as well as YouTube stars MatPat and Ali-A.\n[…]\nDuring the 2012 primary election, the original vocalist Jason Paige performed a parody of the song in support of the Republican candidate Ron Paul.\n[…]\nList of Pokémon theme songs"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Jason_Paige",
        "situacao": "ok",
        "texto": "Jason Paige (born January 6, 1969) is an American singer, writer, record producer and actor. He sang the first theme song for the English version of the Pokémon television series.\n[…]\nPaige is best known for singing the first theme song for the English version of the Pokémon anime. In an interview with the New York Post in 2016, Paige said he did not expect the song to become popular. In fact, he said that he \"didn't really know much about Pokémon when I did the demo, other than [that] a scene in the cartoon caused a giant bout of epileptic seizures in Japan\", referring to the infamous episode \"Dennō Senshi Porygon.\"\n[…]\nDuring the 2012 primary election, Paige himself sang a parody of the Pokémon Theme in support of the Republican candidate Ron Paul. In an interview with Spin Magazine in 2016, Paige said he was inspired by Paul's message of liberty. Later that year, Paige completed a year-long run as the lead singer for Blood, Sweat & Tears. He is a long time member of Broadway Inspirational Voices and has appeared at Mandalay Bay's LIGHT in For The Record  Baz named after the director Baz Luhrmann.\n[…]\nIn response to the massive popularity of the Pokémon Go mobile game, Paige re-recorded the theme during the height of the game's popularity in July 2016. Later that month, Paige sang another parody of the theme song featuring Dwayne Johnson as a Pokémon. He performed the song in Los Angeles as well.\n[…]\nJason Paige at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tema_de_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "\"Tema de Pokémon\" (também conhecido como \"Temos que Pegar\") é uma canção escrita por John Siegler e John Loeffler para ser a abertura do anime Pokémon. Foi originalmente escrita em inglês com o título \"Gotta Catch'em All\", e interpretada por Jason Paige. No Brasil, a canção recebeu a voz de Janaína Bianchi.\n[…]\nPara a versão original, John Siegler e John Loeffler escreveram a letra da música. Siegler produziu a faixa, tocando também teclados, baixo e programando as baterias eletrônicas. David Rolfe, o vocalista dos temas posteriores da série, tocou guitarra enquanto Jason Paige forneceu os vocais. Kati Mac, Loeffler, Ken Cummings e Louis Cortelezzi forneceram vocais de apoio. A música foi escrita em Sol menor.\n[…]\nInicialmente, Siegler achou o conceito do programa \"incompreensível\", mas decidiu que tinha potencial depois de assistir ao episódio de estreia. Jason Paige gravou a música em quatro horas. Inicialmente, Paige recebeu um \"cachê fixo padrão de três dígitos\" pela gravação, mas não recebeu nenhum direito autoral pela música. Ele recebeu um pagamento único \"na casa das dezenas de milhares de libras\" pela música em 2000.\n[…]\nNo mesmo mês, após um aumento de 1.079% nas vendas, a música alcançou o quarto lugar na parada de canções digitais infantis da Billboard, depois de ter atingido o 10º lugar em 2010. Devido à popularidade de Pokémon Go, Jason Paige lançou uma versão regravada do tema.\n[…]\nA música tema fez parte do jogo de vídeo game Pokémon Puzzle League de 2000, bem como do jogo Donkey Konga de 2004.\n[…]\nEm 2016, o vocalista original Jason Paige fez uma paródia da música com Dwayne Johnson, bem como com as estrelas do YouTube MatPat e Ali-A.\n[…]\nDurante as eleições primárias de 2012, o vocalista original Jason Paige apresentou uma paródia da música em apoio ao candidato republicano Ron Paul.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Lucario e o Mistério de Mew",
      "descricao": "Oitavo filme da franquia Pokémon, de 2005, em que Ash conhece um Lucario ligado ao antigo cavaleiro Aaron."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "No filme Lucario e o Mistério de Mew, Lucario passa séculos preso dentro de um cajado. Quem o selou ali?",
    "resposta": "Sir Aaron, seu antigo mestre",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Lucario_and_the_Mystery_of_Mew",
      "https://bulbapedia.bulbagarden.net/wiki/Sir_Aaron"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Lucario_and_the_Mystery_of_Mew",
        "situacao": "ok",
        "texto": "Pokémon: Lucario and the Mystery of Mew is a 2005 Japanese animated fantasy film directed by Kunihiko Yuyama and produced by OLM, Inc. It is the eighth film of the Pokémon anime series and the third film of Pokémon the Series: Ruby and Sapphire.\n[…]\nIn the distant past, a war is about to break out between Pokémon outside the Tree of Beginning. The Pokémon Lucario informs his master, the Aura Guardian Sir Aaron, of the danger, however to his shock, Aaron seemingly betrays him as he proceeds to leave, sealing Lucario away in his staff. After the staff is given to the Queen of Cameron Palace by a Pidgeot, she witnesses the Tree of Beginning start to shine brightly, which also stops the impending conflict of the war.\n[…]\nHowever, the disruption of energy flow in the tree due to the defense system sends the tree into shock, and as Mew and the tree are symbiotic creatures that depend on each other for survival, Mew also becomes very ill. Traveling to the tree's heart, Ash, Kidd, and Lucario witness a time flower's vision of Aaron, revealing that he actually sacrificed himself using his Aura power into the Tree to stop the war.\n[…]\nFollowing the tree's restoration, a worn-out Lucario stumbles upon one last time flower. Through the vision he sees a dying Aaron, and learns his master sealed him away to ensure that he wouldn't die too. Aaron thanks Lucario for being his friend. Lucario, having been touched by Aaron's last words, peacefully passes on. As Kidd and Ash reunite with their team, Kidd decides to keep her discovery under wraps and Ash vows to keep Lucario's memory with him.\n[…]\nPokémon: Lucario and the Mystery of Mew at Box Office Mojo\n[…]\nPokémon: Lucario and the Mystery of Mew at Rotten Tomatoes"
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Sir_Aaron",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon%3A_Lucario_and_the_Mystery_of_Mew",
        "situacao": "ok",
        "texto": "Pokémon: Lucario e o Mistério de Mew é o terceiro filme de Pocket Monsters Advanced Generation e o oitavo da série inteira.\n[…]\nEileen encerra o baile e Ash faz uma pose de herói, imitando o retrato de Aaron. Fogos de artifícios estouram fora do castelo e Ash ouve a voz novamente, segurando o cetro que começa a se descontrolar, brilhando. Há um forte disparo vindo do cetro e Lucario aparece. \"Vendo\" através de ondas, Lucario se aproxima de Ash pensando que o treinador é seu mestre. Ele abre seus olhos e percebe que não é Aaron, e sai correndo do castelo.\n[…]\nO Pokémon foge com a comida e Lucario aparece, pegando a comida de volta e entregando uma fruta para Bonsly.\n[…]\nTodos os cristais, inclusive os da floresta e do castelo de Rotha, se desintegram e formam uma espessa fumaça negra. Mesmo quente e debilitado, refletindo o estado do lugar, Mew leva todos a outra sala onde há um enorme cristal laranja. Por ali, Lucario encontra as luvas de seu mestre Aaron e o encontra dentro de alguns cristais. Kid diz que Aaron deve ter vindo até o lugar depois que selou Lucario. Ela diz que o lugar deve ser o coração da árvore.\n[…]\nNos créditos finais, todos voltam para o castelo de Rotha no carro de Kid. A rainha cumprimenta todos e os heróis observam a pintura de Aaron, que agora tem Lucario ao seu lado. Para sair da cidade, os heróis usam um bondinho, e dentro dele se despedem de Kid. Na \"Árvore do Gênesis\", os três Regis aparecem sentados, e Mew aparece brincando com Bonsly. Kid aparece em Florina, lar de Jirachi, ao lado de Butler e Daiane, personagens do sexto filme Pokémon.",
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
