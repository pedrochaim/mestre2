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
      "nome": "Torre Queimada",
      "descricao": "Torre em ruínas da cidade de Ecruteak, em Johto, nos jogos Pokémon Gold e Silver, antiga Torre de Bronze destruída por um incêndio."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Segundo a lenda de Ecruteak, em Johto, um incêndio destruiu a antiga Torre de Bronze e matou três pokémon. O que provocou esse incêndio?",
    "resposta": "Um raio",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Burned_Tower"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Burned_Tower",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Kyogre",
      "descricao": "Pokémon lendário do tipo Água da terceira geração, mascote de Pokémon Sapphire."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em Pokémon Sapphire, a Equipe Aqua desperta o lendário Kyogre. O que esses vilões pretendem fazer com o poder dele?",
    "resposta": "Expandir os mares",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Team_Aqua",
      "https://bulbapedia.bulbagarden.net/wiki/Kyogre_(Pok%C3%A9mon)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Team_Aqua",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Kyogre_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Giratina",
      "descricao": "Pokémon lendário dos tipos Fantasma e Dragão da quarta geração, mascote de Pokémon Platinum."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Segundo a mitologia de Sinnoh, Giratina foi banido para um mundo paralelo pelo próprio Arceus. Por que ele recebeu esse castigo?",
    "resposta": "Por ser violento",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Giratina_(Pok%C3%A9mon)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Giratina_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Uxie",
      "descricao": "Pokémon lendário do tipo Psíquico da quarta geração, o ser do conhecimento, que vive no Lago Acuity, em Sinnoh."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Segundo a lenda de Sinnoh, o que acontece com quem encara os olhos do lendário Uxie, o pokémon do conhecimento?",
    "resposta": "Perde a memória",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Uxie_(Pok%C3%A9mon)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Uxie_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Reshiram",
      "descricao": "Pokémon lendário dos tipos Dragão e Fogo da quinta geração, mascote de Pokémon Black, símbolo da verdade."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Na lenda de Unova, um único dragão se dividiu em dois, Reshiram e Zekrom. O que provocou essa divisão?",
    "resposta": "A briga de dois irmãos gêmeos",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Reshiram_(Pok%C3%A9mon)",
      "https://bulbapedia.bulbagarden.net/wiki/Zekrom_(Pok%C3%A9mon)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Reshiram_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Zekrom_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Dynamax",
      "descricao": "Fenômeno dos jogos Pokémon Sword e Shield que faz os pokémon crescerem até ficar gigantes durante as batalhas na região de Galar."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em Sword e Shield, a energia que faz os pokémon de Galar ficarem gigantes nas batalhas vem de qual lendário, caído do céu há milênios?",
    "resposta": "Eternatus",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Eternatus_(Pok%C3%A9mon)",
      "https://bulbapedia.bulbagarden.net/wiki/Dynamax"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Eternatus_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Dynamax",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Pokémon 2000",
      "descricao": "Segundo filme da franquia Pokémon, em que Ash ajuda o lendário Lugia a salvar o mundo."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "No filme Pokémon 2000, o clima do planeta enlouquece e o mar ameaça o mundo. Que ação de um colecionador desencadeia esse caos?",
    "resposta": "Capturar as aves lendárias",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_The_Movie_2000",
      "https://bulbapedia.bulbagarden.net/wiki/M02"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_The_Movie_2000",
        "situacao": "ok",
        "texto": "Pokémon the Movie 2000 is a 1999 Japanese animated fantasy adventure film directed by Kunihiko Yuyama. It is the second film of the Pokémon anime series and of Pokémon the Series: The Beginning.\n[…]\nAn ancient prophecy predicts that a conflict between \"the Titans of Fire, Ice, and Lightning\" will only be quelled by the \"Water's Great Guardian\" with the help of a \"Chosen One\". Lawrence III, a Pokémon collector, plans to capture the legendary Pokémon Articuno, Zapdos, and Moltres and sets out in his flying fortress to the Orange Islands, where he locates and captures Moltres.\n[…]\nMoltres' capture upsets the balance of power the birds have over the world's climate and storms start to erupt worldwide. In Pallet Town, Professor Oak notices a change in Pokémon behavior and he and Ash's mother, Delia Ketchum, fly to the Orange Islands after receiving word of what is happening there by Professor Ivy. As the weather starts to change, Ash and his Pikachu are brought by boat to Fire Island, where they find Moltres' treasure, but they are interrupted by Team Rocket.\n[…]\nZapdos attempts to claim the empty island, but is then captured by Lawrence, alongside Ash, his friends, and Team Rocket. The group discover Lawrence's plan and, while he attempts to capture Articuno (which he failed to do), Ash's Pokémon free Moltres, who in turn frees Zapdos, and the two begin fighting, which causes the fortress to crash on Lightning Island.\n[…]\nPokémon The Movie 2000 was released on VHS and DVD on November 14, 2000.\n[…]\nList of Pokémon films\n[…]\nPokémon the Movie 2000 at IMDb\n[…]\nPokémon the Movie 2000 (anime) at Anime News Network's encyclopedia\n[…]\nPokémon the Movie 2000 at Rotten Tomatoes"
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/M02",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon%3A_The_Movie_2000",
        "situacao": "ok",
        "texto": "Pokémon: The Movie 2000: The Power of One, geralmente referido como Pokémon O Filme 2000, originalmente lançado no Japão como Pocket Monsters the Movie: Revelation Lugia (劇場版ポケットモンスター 幻のポケモン ルギア爆誕, Gekijōban Poketto Monsutā Maboroshi no Pokemon Rugia Bakutan; lit. \"Mirage Pokémon: Lugia's Explosive Birth\"), é um filme de animação de 1999 dirigido por Kunihiko Yuyama. É o segundo filme da franquia \n[…]\nEnquanto Ash, Misty e Tracey viajam num barco, Giraldan, um colecionador de bichinhos pokémon, prepara seu mais novo plano: capturar o raro Lugia. Para tanto, provoca uma catástrofe climática quando ataca e retira de suas ilhas os três pássaros sagrados: Moltres, o pássaro-guardião de fogo; Zapdos, o pássaro-guardião do trovão; e Articuno, o pássaro-guardião do gelo.\n[…]\nMundo Pokémon - SNZ\n[…]\nPokémon: O Filme 2000 foi lançado pela 1ª vez nos cinemas japoneses no dia 17 de Julho de 1999 no Japão pela distribuição da Toho. No ano seguinte, o filme foi lançado no dia 21 de Julho de 2000 nos Estados Unidos, no Canadá e no Brasil, pelo licenciamento da 4Kids Entertainment e da Kids' WB. Foi exibido em Portugal no dia 15 de Dezembro no mesmo ano.\n[…]\nApós o lançamento nos cinemas, Pokémon: O Filme 2000 foi lançado em VHS no Japão em 2 de fevereiro de 2000 e também foi lançado em DVD em 22 de novembro de 2000. No mesmo ano, foi lançado em VHS e DVD nos Estados Unidos em 14 de novembro de 2000 e no Brasil pela Warner Home Video.\n[…]\nApós os anos seguintes, foi relançado em DVD no dia 21 de setembro de 2007 no Japão, fazendo parte da coleção Pikachu the Movie Box 1998-2002. Nos Estados Unidos, foi relançado em DVD no dia 7 de abril de 2009 pela Warner Home Video, fazendo parte da coleção Pokémon: The First Three Movies. Em 28 de novembro de 2012, o filme foi remasterizado digitalmente e lançado pela 1ª vez em Blu-ray, fazendo parte da coleção Pikachu the Movie Premium Box 1998-2010.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Lunala",
      "descricao": "Pokémon lendário dos tipos Psíquico e Fantasma da sétima geração, mascote de Pokémon Moon."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Solgaleo e Lunala, os lendários das capas de Sun e Moon, têm algo raro entre os lendários. O que os dois têm em comum?",
    "resposta": "Evoluem de Cosmog",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Lunala_(Pok%C3%A9mon)",
      "https://bulbapedia.bulbagarden.net/wiki/Cosmog_(Pok%C3%A9mon)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Lunala_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Cosmog_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Manaphy",
      "descricao": "Pokémon mítico do tipo Água da quarta geração, o príncipe do mar, estrela do nono filme da franquia."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Quando o mítico Manaphy é cruzado com um Ditto, o ovo choca qual outro pokémon, que nunca evolui para Manaphy?",
    "resposta": "Phione",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Phione_(Pok%C3%A9mon)",
      "https://bulbapedia.bulbagarden.net/wiki/Manaphy_(Pok%C3%A9mon)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Phione_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Manaphy_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Keldeo",
      "descricao": "Pokémon mítico dos tipos Água e Lutador da quinta geração, o jovem que se junta aos Espadachins da Justiça."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Cobalion, Terrakion e Virizion lembram os três mosqueteiros. Keldeo, o jovem que se junta a eles, corresponde a qual personagem do romance?",
    "resposta": "D'Artagnan",
    "distratores": [
      "Athos",
      "Porthos",
      "Aramis"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Keldeo_(Pok%C3%A9mon)",
      "https://bulbapedia.bulbagarden.net/wiki/Swords_of_Justice"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Keldeo_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Swords_of_Justice",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Diancie",
      "descricao": "Pokémon mítico dos tipos Pedra e Fada da sexta geração, a princesa das joias, estrela do filme Diancie e o Casulo da Destruição."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Diancie, a mítica princesa das joias, seria uma mutação súbita de qual pokémon de pedra, que vive no subterrâneo?",
    "resposta": "Carbink",
    "distratores": [
      "Sableye",
      "Nosepass",
      "Minior"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Diancie_(Pok%C3%A9mon)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Diancie_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Darkrai",
      "descricao": "Pokémon mítico do tipo Sombrio da quarta geração, que provoca pesadelos em quem dorme por perto."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Em Diamond e Pearl, um menino de Canalave não acorda de um pesadelo provocado por Darkrai. A pena de qual lendário o salva?",
    "resposta": "Cresselia",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Lunar_Wing",
      "https://bulbapedia.bulbagarden.net/wiki/Darkrai_(Pok%C3%A9mon)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Lunar_Wing",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Darkrai_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Aves lendárias de Kanto",
      "descricao": "Trio de pokémon lendários da primeira geração formado por Articuno, Zapdos e Moltres."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Os nomes de Articuno, Zapdos e Moltres terminam com os números um, dois e três em qual idioma?",
    "resposta": "Espanhol",
    "distratores": [
      "Italiano",
      "Português",
      "Latim"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Articuno_(Pok%C3%A9mon)",
      "https://bulbapedia.bulbagarden.net/wiki/Zapdos_(Pok%C3%A9mon)",
      "https://bulbapedia.bulbagarden.net/wiki/Moltres_(Pok%C3%A9mon)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Articuno_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Zapdos_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Moltres_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Victini",
      "descricao": "Pokémon mítico dos tipos Psíquico e Fogo da quinta geração, com orelhas em forma de V."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O mítico Victini, de Unova, traria triunfo a quem o tem ao lado. Seu nome vem de qual palavra inglesa?",
    "resposta": "Victory (vitória)",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Victini_(Pok%C3%A9mon)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Victini_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Tapu Koko",
      "descricao": "Pokémon lendário dos tipos Elétrico e Fada, guardião da ilha Melemele, em Alola."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Os guardiões de Alola, como Tapu Koko, levam no nome a palavra polinésia tapu, que significa sagrado. Ela deu origem a qual palavra do português?",
    "resposta": "Tabu",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Tapu_Koko_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/Tapu_(Polynesian_culture)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Tapu_Koko_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Tapu_(Polynesian_culture)",
        "situacao": "ok",
        "texto": "Tapu is a Polynesian traditional concept denoting something holy or sacred, with \"spiritual restriction\" or \"implied prohibition\"; it involves rules and prohibitions. The English word taboo derives from the latter meaning and dates from Captain James Cook's visit to Tonga in 1777.\n[…]\nThe root also exists outside Polynesian languages, in the broader Austronesian family: e.g. Fijian tabu, Hiw (Vanuatu) toq [tɔkʷ] 'holy, sacred', Mwotlap ne-teq [nɛ-tɛk​͡pʷ] 'cemetery', and others.\n[…]\nWhether Polynesian or not, all modern forms go back to a Proto-Oceanic etymon reconstructed as *tabu [taᵐbu], and whose meaning was “forbidden, off limits; sacred, due to a sentiment of awe before spiritual forces”.\n[…]\nManuhiri/manuwhiri guests or visitors at a Marae are considered tapu until food has touched or passed through their mouths.\n[…]\nTapu is also still observed at the site of whale strandings. Whales are regarded as spiritual treasures as being descendants of the ocean god, Tangaroa, and are as such held in very high respect. Sites of whale strandings and any whale carcasses from strandings are treated as sacred ground.\n[…]\nNoa, on the other hand, lifts the tapu from the person or the object. Noa is similar to a blessing. Tapu and noa remain part of Māori culture today, although persons today are not subject to the same tapu as that of previous times. A new house today, for example, may have a noa ceremony to remove the tapu, in order to make the home safe before the family moves in.\n[…]\nFrançois, Alexandre (2022). \"Awesome forces and warning signs: Charting the semantic history of *tabu words in Vanuatu\" (PDF). Oceanic Linguistics. 61 (1): 212–255. doi:10.1353/ol.2022.0017. ISSN 1527-9421. S2CID 240387414. Retrieved 2022-07-11."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tapu",
        "situacao": "ok",
        "texto": "Tapu, tabu ou kapu é um conceito tradicional polinésio que denota que algo é santo ou sagrado, com \"restrição espiritual\" ou \"proibição implícita\"; que envolve regras e proibições. O palavra em português \"tabu\" deriva deste significado, trazido à Europa após a visita do capitão James Cook, em 1777, a Tonga.\n[…]\nO conceito existe em muitas sociedades, incluindo a de Fiji, Maori, Samoa, Rapanui, Taitiana, havaiana, e as culturas de Tonga, na maioria dos casos, utilizando uma palavra reconhecidamente semelhante.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Cosmog",
      "descricao": "Pokémon lendário do tipo Psíquico da sétima geração, uma pequena nuvem cósmica que evolui até Solgaleo ou Lunala."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Em Sun e Moon, Lillie esconde na bolsa um pequeno Cosmog, que ela chama por um apelido carinhoso. Qual?",
    "resposta": "Nebby",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Nebby"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Nebby",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Xerneas",
      "descricao": "Pokémon lendário do tipo Fada da sexta geração, um cervo de chifres coloridos, mascote de Pokémon X."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O cervo lendário Xerneas, de Pokémon X, tem o nome inspirado em Cernunnos, o deus chifrudo de qual mitologia?",
    "resposta": "Celta",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Xerneas_(Pok%C3%A9mon)",
      "https://en.wikipedia.org/wiki/Cernunnos"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Xerneas_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Cernunnos",
        "situacao": "ok",
        "texto": "Cernunnos is a Celtic god whose name is only clearly attested once, on the 1st-century CE Pillar of the Boatmen from Paris, where it is identified with an image of an aged, antlered figure with torcs around his horns.\n[…]\nCernunnos has also been suggested to have survived in other legends. Justin Favrod suggests that a fertility festival (perhaps involving deer costumes), held on the 1 January in some Celtic countries and suppressed by the church after Christianisation, represented a festival to Cernunnos. Gwilherm Berthou equated Cernunnos with the mythical Breton Saint Cornély, protector of cattle. R.\n[…]\nLowe Thompson suggested that Herne the Hunter, an antlered ghost of English folklore first attested in Shakespeare, was cognate with Cernunnos.\n[…]\nWithin neopaganism, specifically the Wiccan tradition, the Horned God is a deity that is believed to be the equal to the Great Goddess and syncretizes various horned or antlered gods from various cultures. The name Cernunnos became associated with the Wiccan horned god through the adoption of the writings of Margaret Murray, an Egyptologist and folklorist of the early 20th century.\n[…]\nWithin the Wiccan tradition, the Horned God reflects the seasons of the year in an annual cycle of life, death and rebirth and his imagery is a blend of the Gaulish god Cernunnos, the Greek god Pan, The Green Man motif, and various other horned spirit imagery.\n[…]\nAltjohann, Michael (2002) \"Cernunnos?\" in Ternes, C.-M.; Zinser, H. (eds.) Dieux des Celtes / Goetter der Kelten / Gods of the Celts. Luxembourg: Association européenne pour l’étude scientifique des religions.\n[…]\nMedia related to Cernunnos at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cernuno",
        "situacao": "ok",
        "texto": "Cernuno (em latim e  nos idiomas celtas, Cernunnos) é o nome convencional dado nos estudos celtas às representações do deus com chifres do politeísmo celta. O próprio nome é apenas atestado uma vez, no Pilar dos Barqueiros, do século I, mas as representações de uma figura com chifres, frequentemente sentada em \"posição de lótus\", e frequentemente associada a animais e a manter ou vestir torques, s\n[…]\nO étimo karn- \"corno\" aparece tanto no gaulês como nos ramos gálatas do celta continental. Hesíquio de Alexandria lustra a palavra gálata karnon (κάρνον) como \"trompete gálico\", isto é, o corno militar celta listado como o carnyx (κάρνυξ) de Eustácio de Tessalônica, que nota sino com forma animal do instrumento.\n[…]\nEntre os celtas ibéricos, figuras cornudas ou chifrudas do tipo Cernuno incluem um deus \"tipo-Janus\" de Candelario (Salamanca) com dois rostos e dois pequenos cornos; um deus cornudo das colinas de Ríotinto (Huelva); e uma representação possível da deidade Vestius Aloniecus próximo ao seu altar em Lourizán (Pontevedra). Os cornos são aceitos representar \"força agressiva, vigor genético e fecundidade.\"\n[…]\nAlguns vêem as qualidades de Cernuno agrupadas na vida de São Ciarán de Saighir, um dos Doze Apóstolos da Irlanda. Quando estava construindo sua pequenina primeira célula, como seu hagiógrafo se estende, seu primeiro discípulo e monge era um porco do mato que tinha sido representado meigo por Deus. Este foi seguido por uma raposa, um texugo, um lobo e um veado.\n[…]\nNa Wicca e outras formas de neopaganismo um Deus Cornudo é reverenciado; esta divindade sincretiza um número de deuses cornudos e chifrudos de várias culturas, incluindo Cernuno. O deus cornudo reflete as estações do ano em um ciclo anual da vida, morte e renascimento.\n[…]\nNa tradição do Wicca Gardneriana, o deus cornudo é às vezes especificamente referido como Cernunnos, ou às vezes também como Kernunno.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Ho-Oh",
      "descricao": "Pokémon lendário dos tipos Fogo e Voador da segunda geração, mascote de Pokémon Gold."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Ho-Oh só estreou nos jogos em Gold e Silver, mas Ash já o tinha visto voando junto a um arco-íris. Em que episódio do anime?",
    "resposta": "No primeiro episódio",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/EP001",
      "https://bulbapedia.bulbagarden.net/wiki/Ho-Oh_(Pok%C3%A9mon)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/EP001",
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
    "indice": 19,
    "ancora": {
      "nome": "Miraidon",
      "descricao": "Pokémon lendário dos tipos Elétrico e Dragão da nona geração, mascote e montaria de Pokémon Violet."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Em Scarlet, o lendário Koraidon vem do passado remoto de Paldea. Em Violet, o lendário Miraidon vem de quando?",
    "resposta": "Do futuro",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Miraidon_(Pok%C3%A9mon)",
      "https://bulbapedia.bulbagarden.net/wiki/Koraidon_(Pok%C3%A9mon)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Miraidon_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Koraidon_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Celebi",
      "descricao": "Pokémon mítico dos tipos Psíquico e Planta da segunda geração, que viaja no tempo e protege as florestas."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Em Pokémon Crystal, levar a misteriosa GS Ball a um pequeno santuário faz surgir o mítico Celebi. Em que floresta de Johto fica esse santuário?",
    "resposta": "Floresta Ilex",
    "distratores": [
      "Floresta Viridian",
      "Floresta Eterna",
      "Bosque Petalburg"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/GS_Ball",
      "https://bulbapedia.bulbagarden.net/wiki/Ilex_Forest"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/GS_Ball",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Ilex_Forest",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Zapdos",
      "descricao": "Pokémon lendário ave dos tipos Elétrico e Voador da primeira geração."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Em Red e Blue, o lendário Zapdos espera o jogador dentro de qual construção abandonada de Kanto?",
    "resposta": "Usina Elétrica",
    "distratores": [
      "Torre Pokémon",
      "Mansão Pokémon",
      "Silph Co."
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Power_Plant",
      "https://bulbapedia.bulbagarden.net/wiki/Zapdos_(Pok%C3%A9mon)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Power_Plant",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Zapdos_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Rayquaza",
      "descricao": "Pokémon lendário dos tipos Dragão e Voador da terceira geração, mascote de Pokémon Emerald."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em Pokémon Emerald, o jogador sobe uma torre antiga, numa ilha de Hoenn, para despertar Rayquaza lá no alto. Que torre é essa?",
    "resposta": "Pilar Celeste (Sky Pillar)",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Sky_Pillar",
      "https://bulbapedia.bulbagarden.net/wiki/Rayquaza_(Pok%C3%A9mon)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Sky_Pillar",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Rayquaza_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Arceus",
      "descricao": "Pokémon mítico do tipo Normal da quarta geração, que segundo a mitologia de Sinnoh criou o universo."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em Diamond e Pearl, a Flauta Azul, nunca distribuída na época, criaria uma escada até o lugar onde Arceus espera. Como esse lugar se chama?",
    "resposta": "Salão da Origem (Hall of Origin)",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Hall_of_Origin",
      "https://bulbapedia.bulbagarden.net/wiki/Azure_Flute"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Hall_of_Origin",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Azure_Flute",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Lucario e o Mistério de Mew",
      "descricao": "Oitavo filme da franquia Pokémon, de 2005, em que Ash conhece um Lucario ligado ao antigo cavaleiro Aaron."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "No filme Lucario e o Mistério de Mew, Lucario desperta depois de passar séculos selado dentro de qual objeto do seu mestre, Aaron?",
    "resposta": "O cajado de Aaron",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Lucario_and_the_Mystery_of_Mew",
      "https://bulbapedia.bulbagarden.net/wiki/M08"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_Lucario_and_the_Mystery_of_Mew",
        "situacao": "ok",
        "texto": "Pokémon: Lucario and the Mystery of Mew is a 2005 Japanese animated fantasy film directed by Kunihiko Yuyama and produced by OLM, Inc. It is the eighth film of the Pokémon anime series and the third film of Pokémon the Series: Ruby and Sapphire.\n[…]\nIn the distant past, a war is about to break out between Pokémon outside the Tree of Beginning. The Pokémon Lucario informs his master, the Aura Guardian Sir Aaron, of the danger, however to his shock, Aaron seemingly betrays him as he proceeds to leave, sealing Lucario away in his staff. After the staff is given to the Queen of Cameron Palace by a Pidgeot, she witnesses the Tree of Beginning start to shine brightly, which also stops the impending conflict of the war.\n[…]\nHowever, the disruption of energy flow in the tree due to the defense system sends the tree into shock, and as Mew and the tree are symbiotic creatures that depend on each other for survival, Mew also becomes very ill. Traveling to the tree's heart, Ash, Kidd, and Lucario witness a time flower's vision of Aaron, revealing that he actually sacrificed himself using his Aura power into the Tree to stop the war.\n[…]\nFollowing the tree's restoration, a worn-out Lucario stumbles upon one last time flower. Through the vision he sees a dying Aaron, and learns his master sealed him away to ensure that he wouldn't die too. Aaron thanks Lucario for being his friend. Lucario, having been touched by Aaron's last words, peacefully passes on. As Kidd and Ash reunite with their team, Kidd decides to keep her discovery under wraps and Ash vows to keep Lucario's memory with him.\n[…]\nPokémon: Lucario and the Mystery of Mew at Box Office Mojo\n[…]\nPokémon: Lucario and the Mystery of Mew at Rotten Tomatoes"
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/M08",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon%3A_Lucario_and_the_Mystery_of_Mew",
        "situacao": "ok",
        "texto": "Pokémon: Lucario e o Mistério de Mew é o terceiro filme de Pocket Monsters Advanced Generation e o oitavo da série inteira.\n[…]\nLucario é atacado pelos três Houndooms de armadura vermelha mas vence usando o raio da energia das ondas. Aaron, ainda no castelo, levanta seu cajado com um cristal e seu grande Pidgeot aparece. Ele monta no Pokémon e vai até Lucario, sendo atacado por três Skarmorys do exército verde no caminho. Aaron diz para Lucario que iria ao castelo e nunca mais voltaria. Ele joga seu cajado e de alguma forma aprisiona Lucario dentro do cristal.\n[…]\nO Pokémon foge com a comida e Lucario aparece, pegando a comida de volta e entregando uma fruta para Bonsly.\n[…]\nMeowth planeja voltar mas Mew deseja apenas brincar, pegando uma corneta em forma de Shuckle e um pião em forma de Hitmontop. Pikachu parece triste e isso acaba despertando Ash, que está longe. De manhã eles continuam e chegam até onde Lucario foi selado no cetro por Aaron. Ele se ajoelha se perguntando por que seu treinador fez isso, e acaba \"acionando\" uma Flor do Tempo. Ela mostra o momento em que Lucario foi preso no cajado e quando Aaron foi embora em seu Pidgeot.\n[…]\nNos créditos finais, todos voltam para o castelo de Rotha no carro de Kid. A rainha cumprimenta todos e os heróis observam a pintura de Aaron, que agora tem Lucario ao seu lado. Para sair da cidade, os heróis usam um bondinho, e dentro dele se despedem de Kid. Na \"Árvore do Gênesis\", os três Regis aparecem sentados, e Mew aparece brincando com Bonsly. Kid aparece em Florina, lar de Jirachi, ao lado de Butler e Daiane, personagens do sexto filme Pokémon.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Deoxys",
      "descricao": "Pokémon mítico do tipo Psíquico da terceira geração, um alienígena que muda de forma."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "O alienígena Deoxys tem quatro formas: a Normal, a de Ataque, a de Defesa e qual outra?",
    "resposta": "Velocidade",
    "distratores": [
      "Especial",
      "Psíquica",
      "Resistência"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Deoxys_(Pok%C3%A9mon)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Deoxys_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Genesect",
      "descricao": "Pokémon mítico dos tipos Inseto e Aço da quinta geração, um inseto pré-histórico modificado pela Equipe Plasma."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Genesect é um inseto pré-histórico revivido pela Equipe Plasma, que o modificou. Que arma os vilões acrescentaram às suas costas?",
    "resposta": "Um canhão",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Genesect_(Pok%C3%A9mon)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Genesect_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Calyrex",
      "descricao": "Pokémon lendário dos tipos Psíquico e Planta da oitava geração, antigo rei de Galar."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Calyrex, o antigo rei de Galar, cavalga um de dois corcéis: Glastrier, de gelo, ou qual outro, fantasma?",
    "resposta": "Spectrier",
    "distratores": [
      "Rapidash",
      "Mudsdale",
      "Zebstrika"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Calyrex_(Pok%C3%A9mon)",
      "https://bulbapedia.bulbagarden.net/wiki/Spectrier_(Pok%C3%A9mon)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Calyrex_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Spectrier_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Palkia",
      "descricao": "Pokémon lendário dos tipos Água e Dragão da quarta geração, mascote de Pokémon Pearl."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Na mitologia de Sinnoh, Dialga é o senhor do tempo. E Palkia, o lendário da capa de Pearl, domina o quê?",
    "resposta": "O espaço",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Palkia_(Pok%C3%A9mon)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Palkia_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Regirock",
      "descricao": "Pokémon lendário do tipo Pedra da terceira geração, membro do trio de golens lendários de Hoenn."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Em Ruby e Sapphire, as pistas para encontrar Regirock, Regice e Registeel estão gravadas nas paredes de cavernas em qual sistema de escrita?",
    "resposta": "Braile",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Legendary_titans",
      "https://bulbapedia.bulbagarden.net/wiki/Regirock_(Pok%C3%A9mon)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Legendary_titans",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Regirock_(Pok%C3%A9mon)",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Magearna",
      "descricao": "Pokémon mítico dos tipos Aço e Fada da sétima geração, um pokémon artificial construído por humanos."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Magearna, o mítico mecânico de Alola, foi construído por inventores humanos há cerca de quantos anos?",
    "resposta": "500 anos",
    "distratores": [
      "50 anos",
      "2000 anos",
      "10 mil anos"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Magearna_(Pok%C3%A9mon)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Magearna_(Pok%C3%A9mon)",
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
