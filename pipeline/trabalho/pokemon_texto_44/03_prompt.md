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
      "nome": "Koga",
      "descricao": "Líder ninja do ginásio de tipo Venenoso de Fuchsia, em Kanto, nos jogos Pokémon Red e Blue, e depois membro da Elite dos Quatro de Johto."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Em Red e Blue, o ginásio do ninja Koga, em Fuchsia, esconde um truque para atrapalhar quem tenta chegar até ele. Que truque é esse?",
    "resposta": "Paredes invisíveis",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Fuchsia_Gym",
      "https://bulbapedia.bulbagarden.net/wiki/Koga"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Fuchsia_Gym",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Koga",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Bruno",
      "descricao": "Treinador especialista em pokémon lutadores, membro da Elite dos Quatro de Kanto em Pokémon Red e Blue e de Johto em Gold e Silver."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em Red e Blue, Bruno, o lutador da Elite dos Quatro de Kanto, leva no time dois exemplares de um pokémon de pedra. Qual?",
    "resposta": "Onix",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Bruno"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Bruno",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Lance",
      "descricao": "Treinador especialista em pokémon dragão, último membro da Elite dos Quatro em Red e Blue e campeão da Liga em Gold e Silver."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Em Gold e Silver, o campeão Lance leva no time três exemplares do mesmo dragão. Que pokémon é esse?",
    "resposta": "Dragonite",
    "distratores": [
      "Dragonair",
      "Kingdra",
      "Gyarados"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Lance",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Gold_and_Silver"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Lance",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Gold_and_Silver",
        "situacao": "ok",
        "texto": "Pokémon Gold Version and Pokémon Silver Version are 1999 role-playing video games developed by Game Freak and published by Nintendo for the Game Boy Color. They are the first installments in the second generation of the Pokémon video game series. They were released in Japan on November 21st, 1999, Australia and North America on October 15th, 2000, and Europe on April 6th, 2001.\n[…]\nPokémon Gold and Silver were both critical and commercial successes; the games sold over 23 million units, making them the best-selling games for the Game Boy Color and the third-best-selling for the Game Boy family of systems. In retrospect, they are both cited as some of the most significant titles of the fifth generation of video games, two of the best entries in the series, if not the best, and both are touted as being amongst the greatest video games of all time.\n[…]\nWhile Pokémon Gold and Silver retain the basic mechanics of capturing, battling, and evolving introduced in Pokémon Red and Blue, new features were added. A time system was introduced using a real-time internal clock that keeps track of the current time and day of the week. Certain events, including Pokémon appearances, are influenced by this feature. New items were added, with some designed to exploit a new mechanic: Pokémon being able to hold items.\n[…]\nTrainers will call for a rematch and others will call about rare Pokémon that can be caught in a certain area.\n[…]\nSo far in 2000 the best-selling game in America for any home console is Pokémon Stadium for Nintendo 64, and the best-selling game for any handheld video game system is Pokémon Yellow for Game Boy Color, but Pokémon Gold and Silver will eclipse even those impressive sales totals. We project sales of 10 million units total of these two games in less than six months time\". The game sold 2.9 million copies in the U.S. within a few weeks."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Gold_%26_Silver",
        "situacao": "ok",
        "texto": "Pokémon Gold Version e Pokémon Silver Version (ポケットモンスター 金・銀, Poketto Monsutā Kin・Gin; tradução: Monstros de Bolso Ouro・Prata) são jogos eletrônicos de RPG de 1999, desenvolvidos pela Game Freak e publicadas pela Nintendo para o Game Boy Color. Esses dois jogos iniciaram a segunda geração da série Pokémon. Eles foram lançados no Japão em 1999, na Austrália e América do Norte em 2000 e Europa em 20\n[…]\nEm 2009, no 10º aniversário de Gold e Silver, recriações intitulados Pokémon HeartGold e SoulSilver foram lançados para o Nintendo DS.\n[…]\nIshihara afirmou que Gold e Silver começaram o desenvolvimento logo após o lançamento de Pokémon Red e Green no Japão. A intenção original era lançar o jogo em 1998, mesmo a sincronização com o suposto fim da primeira temporada do anime. Problemas de desenvolvimento, agravados pelo Game Freak sendo desviado para o Pokémon Stadium e a localização da primeira geração, levaram o jogo a ser adiado, e o lançamento original foi assumido pelo Pokémon Yellow.\n[…]\nAlém disso, foram equipados com uma televisão ligada a consolas de jogos que permitiam aos espectadores jogar Pokémon Puzzle League, Hey You, Pikachu! e Pokémon Gold e Silver. A série de televisão Pokémon GS, baseada nos jogos, foi anunciada para fazer parte da programação de outono do Kids' WB. O show apresenta o mesmo protagonista Ash Ketchum em uma nova região com diferentes espécies de Pokémon dos jogos.\n[…]\nAté agora em 2000, o jogo mais vendido na América para qualquer console doméstico é Pokémon Stadium para Nintendo 64, e o jogo mais vendido para qualquer jogo eletrônico portátil é Pokémon Yellow para Game Boy Color, mas Pokémon Gold e Silver eclipsarão até mesmo esses totais de vendas impressionantes. Projetamos vendas de 10 milhões unidades totais desses dois jogos em menos de seis meses\". Em 2010, as vendas registradas de ouro e prata foram de 23 milhões de unidades vendidas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Blue (rival)",
      "descricao": "Rival do protagonista e neto do Professor Carvalho nos jogos Pokémon Red, Green e Blue, chamado Green no Japão."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Em Red e Blue, depois de vencer a Elite dos Quatro, o jogador descobre que o campeão da Liga é alguém que conhece desde o começo da jornada. Quem?",
    "resposta": "O rival, Blue",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Blue_(game)",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Red,_Blue,_and_Yellow"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Blue_(game)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Red,_Blue,_and_Yellow",
        "situacao": "ok",
        "texto": "Pokémon Red Version and Pokémon Blue Version are popular 1996 role-playing video games (RPGs) developed by Game Freak and published by Nintendo for the Game Boy. They are the first installments of the Pokémon video game series and were first released in Japan as Pocket Monsters Red and Pocket Monsters Green, followed by the special edition Pocket Monsters Blue later that year.\n[…]\nIt was later released to general retail on October 10, 1999. It features updated in-game artwork and new dialogue. Using Blastoise as its mascot, the code, script, and artwork for Blue were used for the international releases of Red and Green, which were renamed to Red and Blue.\n[…]\nTwo years after Red, Green and Blue Nintendo released Pokémon Yellow, an enhanced version of Red and Blue, in Japan in 1998, and in North America and Europe in 1999 and 2000. The game was designed to resemble the Pokémon anime series, with the player receiving a Pikachu as their starter Pokémon and their rival starting with an Eevee. Some non-player characters resemble those from the anime, including Team Rocket's Jessie and James.\n[…]\nBy 1998, 10 million units had been sold in Japan. Pokémon Red, Green and Blue ultimately sold 10.23 million copies in Japan, and until November 2022, was the country's best-selling video games. The video games were accompanied by the Pokémon Trading Card Game; both the video games and card game grossed combined sales revenue of more than $4 billion in Japan, as of 2000.\n[…]\nIn 2017, The Strong National Museum of Play inducted Pokémon Red and Green to its World Video Game Hall of Fame. In October 2021, the Japan Sumo Association formed a partnership with The Pokémon Company to celebrate the 25th anniversary of Pokémon Red and Blue and gyōji (professional sumo referee) were seen wearing Poké Ball-themed kimono during the January 2022 tournament."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Red_%26_Blue",
        "situacao": "ok",
        "texto": "Pokémon Red Version e Pokémon Blue Version, lançados no Brasil oficialmente como Pokémon Versão Vermelho e Pokémon Versão Azul, são dois jogos eletrônicos de RPG de 1996, desenvolvidos pela Game Freak e publicados pela Nintendo para o console portátil Game Boy. São os primeiros jogos eletrônicos da série Pokémon.\n[…]\nCada cidade tem um Líder de Ginásio, servindo como chefe e a Elite dos Quatro e a batalha rival final ocorre no Indigo Plateau. As áreas nas quais o jogador pode capturar Pokémon variam de cavernas ao mar, onde os tipos de Pokémon disponíveis para capturar variam. Por exemplo, Tentacool só pode ser capturado através da pesca ou quando o jogador está em um corpo de água, enquanto Zubat só pode ser capturado em uma caverna.\n[…]\nO jogador começa em sua cidade natal, a Cidade de Pallet. Depois de tentar prosseguir para fora da cidade, o jogador é interrompido pelo Professor Carvalho, um famoso pesquisador Pokémon. O Professor Carvalho explica ao jogador que Pokémon selvagens podem estar morando naquele local e encontrá-los sozinho pode ser muito perigoso. Ele leva o jogador para seu laboratório, onde o jogador conhece o neto de Carvalho, um aspirante a Treinador Pokémon rival.\n[…]\nLá, o jogador enfrentará a Elite dos Quatro e finalmente, o novo campeão: o rival do jogador. Além disso, ao longo do jogo, o jogador terá que lutar contra a Equipe Rocket, uma organização criminosa da região de Kanto que roubam Pokémon. Eles elaboram vários planos para roubar Pokémon raros, como os lendários da região de Kanto.\n[…]\nPortanto, os jogos foram baseados na versão japonesa mais moderna do Blue; modelando sua programação e arte após Blue, mas mantendo a mesma distribuição de Pokémon encontrada nos cartuchos Red e Green, respectivalmente.\n[…]\nPocket Monsters Blue - Nintendo Japão (em japonês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Will",
      "descricao": "Treinador mascarado especialista em pokémon psíquicos, primeiro membro da Elite dos Quatro de Johto em Pokémon Gold e Silver."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Em Gold e Silver, o primeiro adversário da Elite dos Quatro de Johto é um treinador mascarado que usa pokémon psíquicos. Qual é o nome dele?",
    "resposta": "Will",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Will"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Will",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Bugsy",
      "descricao": "Jovem líder do ginásio de tipo Inseto de Azalea, em Johto, nos jogos Pokémon Gold e Silver."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Em Gold e Silver, qual pokémon é o mais forte do time de Bugsy, o jovem líder de insetos de Azalea?",
    "resposta": "Scyther",
    "distratores": [
      "Heracross",
      "Pinsir",
      "Ledian"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Bugsy"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Bugsy",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Falkner",
      "descricao": "Líder do ginásio de tipo Voador de Violet, o primeiro de Johto, nos jogos Pokémon Gold e Silver."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Falkner, que aprendeu com o pai a amar os pokémon voadores, é o primeiro líder de ginásio de Gold e Silver. Em que cidade de Johto ele espera os desafiantes?",
    "resposta": "Violet",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Falkner",
      "https://bulbapedia.bulbagarden.net/wiki/Violet_Gym"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Falkner",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Violet_Gym",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Roxanne",
      "descricao": "Líder do ginásio de tipo Pedra de Rustboro, o primeiro de Hoenn, nos jogos Pokémon Ruby, Sapphire e Emerald."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em Ruby e Sapphire, a primeira insígnia de Hoenn é disputada com Roxanne, especialista em pokémon de pedra. Onde fica o ginásio dela?",
    "resposta": "Rustboro",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Roxanne",
      "https://bulbapedia.bulbagarden.net/wiki/Rustboro_Gym"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Roxanne",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Rustboro_Gym",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Brawly",
      "descricao": "Líder surfista do ginásio de tipo Lutador de Dewford, em Hoenn, nos jogos Pokémon Ruby, Sapphire e Emerald."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Brawly, o lutador de Hoenn apaixonado por surfe, recebe os desafiantes num ginásio escuro, numa ilha pequena. Que ilha é essa?",
    "resposta": "Dewford",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Brawly",
      "https://bulbapedia.bulbagarden.net/wiki/Dewford_Gym"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Brawly",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Dewford_Gym",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Wattson",
      "descricao": "Velho líder do ginásio de tipo Elétrico de Mauville, em Hoenn, nos jogos Pokémon Ruby, Sapphire e Emerald, famoso pela risada."
    },
    "angulo": "identidade",
    "tipo": "multipla",
    "pergunta": "Em Ruby e Sapphire, que velho líder elétrico, de risada escandalosa, comanda o ginásio de Mauville?",
    "resposta": "Wattson",
    "distratores": [
      "Volkner",
      "Clemont",
      "Elesa"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Wattson"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Wattson",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Drake",
      "descricao": "Velho marinheiro especialista em pokémon dragão, último membro da Elite dos Quatro de Hoenn nos jogos Pokémon Ruby, Sapphire e Emerald."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Drake, o velho marinheiro que fecha a Elite dos Quatro de Hoenn, tem qual dragão como pokémon mais forte?",
    "resposta": "Salamence",
    "distratores": [
      "Dragonite",
      "Garchomp",
      "Hydreigon"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Drake_(game)"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Drake_(game)",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Phoebe",
      "descricao": "Treinadora especialista em pokémon fantasmas, membro da Elite dos Quatro de Hoenn nos jogos Pokémon Ruby, Sapphire e Emerald."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Phoebe, a especialista em fantasmas da Elite dos Quatro de Hoenn, conta que treinou numa montanha que serve de cemitério de pokémon. Que montanha é essa?",
    "resposta": "Monte Pyre (Mt. Pyre)",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Phoebe"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Phoebe",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Steven Stone",
      "descricao": "Campeão da Liga Pokémon de Hoenn nos jogos Ruby e Sapphire, colecionador de pedras raras."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em Ruby e Sapphire, qual pokémon dos tipos Aço e Psíquico é o ás de Steven Stone, o campeão de Hoenn?",
    "resposta": "Metagross",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Steven_Stone",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Ruby_and_Sapphire"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Steven_Stone",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Ruby_and_Sapphire",
        "situacao": "ok",
        "texto": "Pokémon Ruby Version and Pokémon Sapphire Version are 2002 role-playing video games developed by Game Freak for the Game Boy Advance. Although the games were published by Nintendo internationally in 2003, The Pokémon Company published them in Japan in late 2002, making them the first mainline games to have this distinction, as well as the second games to have it overall, after Pokémon Card GB2: Gr\n[…]\nPokémon Ruby and Sapphire occur in the Hoenn Region, some distance from the Kanto and Johto Regions featured in previous games. The design of Hoenn was based on the Japanese island and region of Kyushu; however, Hoenn is rotated 90° relative to Kyushu, as Junichi Masuda felt that it would provide a better gameplay balance. Like Kyushu, Hoenn possesses many smaller islands, and part of the region is dominated by sea routes, several of which contain areas where the player can dive underwater.\n[…]\nThe games' two main goals are defeating the eight Gym Leaders, proving oneself worthy of challenging the Elite Four and Hoenn League Champion to become the new Hoenn League Champion and completing the Pokédex by capturing, evolving, and trading to obtain all 202 Pokémon available between Ruby and Sapphire. It is possible to obtain all 386 Pokémon, but this requires trading with Pokémon FireRed and LeafGreen or Pokémon XD: Gale of Darkness and Pokémon Colosseum.\n[…]\nThe most prominent subplot involves Team Aqua and Team Magma, crime syndicates who want to use Pokémon to alter the climate of Hoenn: in Ruby, the villains, Team Magma, want to use the legendary Pokémon Groudon to dry up the oceans of Hoenn and increase the region's landmass; in Sapphire, Team Aqua are the villains and they try to use Groudon's counterpart, Kyogre, to flood the landmasses of Hoenn and increase the region's ocean."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Ruby_e_Sapphire",
        "situacao": "ok",
        "texto": "Pokémon Ruby e Pokémon Sapphire (ポケットモンスター ルビー&サファイア, Poketto Monsutā Rubī & Safaia) são dois jogos que correspondem à terceira geração da série Pokémon. Desenvolvidos pela Game Freak e publicados pela Nintendo para Game Boy Advance, foram lançados no Japão em 21 de Novembro de 2002 e lançado no resto do mundo no ano seguinte, em 2003. Pokémon Emerald, uma versão especial do jogo, foi lançada dois\n[…]\nPokémon Ruby  e Sapphire se passa na região de Hoenn, localizada a uma distância desconhecida das regiões Kanto e Johto, que são destaques dos jogos anteriores. O design de Hoenn foi baseado na ilha e região japonesa de Kyushu; no entanto, Hoenn é virada em 90º quando comparada a  Kyushu, pois Junichi Masuda sentiu que isso iria fornecer uma melhor jogabilidade.\n[…]\nEm Ruby, os vilões, Team Magma, querem o Pokémon lendário Groudon para secar os oceanos de Hoenn e aumentar a massa de terra da região; em Sapphire, o Team Aqua querem Kyogre para aumentar os níveis de água da região. O pai do jogador também o apresenta a Wally, um menino doente que ensina o protagonista a capturar um Pokémon. Wally eventualmente supera sua doença e se torna um treinador Pokémon de sucesso, desafiando o jogador antes de enfrentar a Elite Four.\n[…]\nA Nintendo não promoveu Ruby  e Sapphire na convenção E3 2002; no entanto, investiu $7 milhões em campanhas promocionais que duraram de março a maio de 2003. Além de compensar as pessoas que fizeram a pré-encomenda dos jogos com outro produto da franquia, a Nintendo realizou um concurso no qual os participantes mandavam vídeos deles mesmos cantando o tema de Pokémon com as letras reescritas; o vencedor do evento ganhou um PT Cruiser Lugia.\n[…]\nPokémon Ruby  e Sapphire tiveram uma aprovação de 84% dos que votaram no site Game Rankings.\n[…]\nDetalhes de Pokémon Ruby  e Sapphire no Pokemon-Games.com",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Crasher Wake",
      "descricao": "Líder do ginásio de tipo Água de Pastoria, em Sinnoh, nos jogos Pokémon Diamond, Pearl e Platinum, vestido de lutador mascarado."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Em Diamond e Pearl, o ginásio de água de Pastoria é comandado por um homem fantasiado de lutador mascarado de luta livre. Como ele se chama?",
    "resposta": "Crasher Wake",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Crasher_Wake"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Crasher_Wake",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Volkner",
      "descricao": "Líder do ginásio de tipo Elétrico de Sunyshore, o último de Sinnoh, nos jogos Pokémon Diamond, Pearl e Platinum."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em Diamond e Pearl, Volkner, o líder elétrico de Sunyshore, anda entediado e sem vontade de batalhar. Por quê?",
    "resposta": "Não encontra desafiantes fortes",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Volkner"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Volkner",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Lucian",
      "descricao": "Treinador especialista em pokémon psíquicos, membro da Elite dos Quatro de Sinnoh nos jogos Pokémon Diamond, Pearl e Platinum."
    },
    "angulo": "identidade",
    "tipo": "multipla",
    "pergunta": "Em Diamond e Pearl, que especialista em psíquicos da Elite dos Quatro de Sinnoh está sempre com o nariz enfiado num livro quando o desafiante chega?",
    "resposta": "Lucian",
    "distratores": [
      "Will",
      "Caitlin",
      "Aaron"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Lucian"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Lucian",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Elesa",
      "descricao": "Líder do ginásio de tipo Elétrico de Nimbasa, em Unova, nos jogos Pokémon Black e White, também conhecida como modelo."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Em Black e White, para chegar até Elesa, a líder elétrica de Nimbasa, o jogador atravessa o ginásio a bordo de quê?",
    "resposta": "Montanhas-russas",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Nimbasa_Gym",
      "https://bulbapedia.bulbagarden.net/wiki/Elesa"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Nimbasa_Gym",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Elesa",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Marshal",
      "descricao": "Treinador especialista em pokémon lutadores, membro da Elite dos Quatro de Unova nos jogos Pokémon Black e White."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Marshal, o lutador da Elite dos Quatro de Unova, é discípulo de um treinador famoso da região. Que campeão é esse?",
    "resposta": "Alder",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Marshal"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Marshal",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Alder",
      "descricao": "Campeão da Liga Pokémon de Unova nos jogos Pokémon Black e White, treinador andarilho de cabelo ruivo."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em Black e White, quando o jogador finalmente enfrenta Alder, o campeão de Unova, qual pokémon é o ás do time dele?",
    "resposta": "Volcarona",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Alder",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Black_and_White"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Alder",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Black_and_White",
        "situacao": "ok",
        "texto": "Pokémon Black Version and Pokémon White Version are 2010 role-playing video games developed by Game Freak and published by The Pokémon Company and Nintendo for the Nintendo DS. They are the first installments in the fifth generation of the Pokémon video game series. First released in Japan on 18 September 2010, they were later released in Europe, North America and Australia in March 2011. Sequels \n[…]\nThroughout the game, the player has some encounters with N, who claims that by capturing one of the Legendary Pokémon (Reshiram and Zekrom) of Unova and defeating the Unova League Champion Alder, he will be recognized as Unova's hero and will be able to convince the humans to part with their Pokémon. Depending on the game version, N will capture Reshiram in White or Zekrom in Black.\n[…]\nThe player also gains access to the eastern portion of Unova, which contains Pokémon from the previous games in the series, as well as access to an area unique to each game version: the ultra-metropolitan Black City, home to powerful Pokémon Trainers; and the White Forest, home to humans and Pokémon living in harmony. Cynthia, the former Sinnoh League Champion, is also found in this area of the game and can be challenged.\n[…]\nPokémon Black and White were released in Japan on 18 September 2010. They were later released in Europe on 4 March 2011, in North America on 6 March 2011, and in Australia on 10 March 2011.\n[…]\nAll three of these Pokémon still enabled the event for Zoroark in the North American Black and White versions. These three Pokémon were later distributed via the Nintendo Wi-Fi Connection for European, Australian, and North American markets (for a second time) starting 7 to 13 February with Raikou, again, with subsequent staggered releases for Entei and Suicune throughout February.\n[…]\nSequels to Black and White, Pokémon Black 2 and Pokémon White 2, were released for the Nintendo DS in 2012."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Black_e_White",
        "situacao": "ok",
        "texto": "Pokémon Black Version e White Version (ポケットモンスターブラック・ホワイト, Poketto Monsutā Burakku・Howaito; Monstros de Bolso Black・White, Black e White significam Preto e Branco quando traduzidos do inglês para o português, Preto e Branco em japonês seria 黒・白, Kuro・Shiro) são jogos eletrônicos de RPG lançados em 2010, desenvolvidos pela Game Freak e publicados pela The Pokémon Company e Nintendo lançados para o \n[…]\nAo longo do jogo, o jogador tem alguns encontros com N, que afirma que ao capturar um dos lendários Pokémon (Reshiram e Zekrom) de Unova e derrotar o Campeão Pokémon Alder, ele será reconhecido como o herói de Unova e será capaz de convencer os humanos para se separarem de seus Pokémon. Dependendo da versão do jogo, N irá capturar Zekrom em Black ou Reshiram em White.\n[…]\nDepois que o jogador derrota a Elite dos Quatro e entra na câmara do Campeão, ele descobre que N derrotou Alder e se tornou o mais novo Campeão de Pokémon. Logo depois, ele invoca um grande castelo que cerca a Liga Pokémon, desafiando o jogador a encontrá-lo para participar de uma batalha final. Quando o jogador finalmente o alcança, Reshiram em Black ou Zekrom em White aparece antes do jogador, e o jogador deve capturar o lendário Pokémon antes de desafiar N.\n[…]\nO jogador também ganha acesso à porção oriental de Unova, que contém Pokémon dos jogos anteriores da série, bem como acesso a uma área exclusiva para cada versão do jogo: a ultrametropolitana Black City, lar de poderosos treinadores Pokémon; e a White Florest, lar de humanos e Pokémon que vivem em harmonia. Cynthia, uma ex-Campeã da região de Sinnoh, também é encontrada nesta área do jogo e pode ser desafiada.\n[…]\nSequências de Black e White, Pokémon Black 2 e White 2, foram lançadas para o Nintendo DS em 2012. São as primeiras e únicas, até à data, sequências da franquia da série principal.\n[…]\nPokemon Black and White",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Valerie",
      "descricao": "Líder do ginásio de tipo Fada de Laverre, em Kalos, nos jogos Pokémon X e Y."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Em X e Y, o tipo Fada estreou com uma líder de ginásio só dele, na cidade de Laverre. Quem é ela?",
    "resposta": "Valerie",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Valerie"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Valerie",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Viola",
      "descricao": "Fotógrafa e líder do ginásio de tipo Inseto de Santalune, o primeiro de Kalos, nos jogos Pokémon X e Y."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Viola, a fotógrafa que lidera o ginásio de insetos de Santalune, em Kalos, é irmã de qual jornalista que ajuda o jogador?",
    "resposta": "Alexa",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Viola",
      "https://bulbapedia.bulbagarden.net/wiki/Alexa"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Viola",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Alexa",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Olivia",
      "descricao": "Kahuna especialista em pokémon de pedra nos jogos Pokémon Sun e Moon, membro da Elite dos Quatro de Alola."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em Sun e Moon, Olivia, a kahuna especialista em pokémon de pedra, é a chefe de qual ilha de Alola?",
    "resposta": "Akala",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Olivia"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Olivia",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Nanu",
      "descricao": "Kahuna da ilha Ula'ula e policial nos jogos Pokémon Sun e Moon, especialista em pokémon sombrios."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Em Sun e Moon, a ilha de Ula'ula tem como kahuna um policial desanimado, especialista em pokémon sombrios. Qual é o nome dele?",
    "resposta": "Nanu",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Nanu"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Nanu",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Kahili",
      "descricao": "Treinadora especialista em pokémon voadores e golfista, membro da Elite dos Quatro de Alola nos jogos Pokémon Sun e Moon."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Kahili, a especialista em pokémon voadores da Elite dos Quatro de Alola, também é uma estrela de qual esporte?",
    "resposta": "Golfe",
    "distratores": [
      "Surfe",
      "Patinação",
      "Snowboard"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Kahili"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Kahili",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Kabu",
      "descricao": "Veterano líder do ginásio de tipo Fogo de Motostoke, em Galar, nos jogos Pokémon Sword e Shield."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Kabu, o veterano líder de fogo de Motostoke, em Galar, nasceu em outra região dos jogos. Qual?",
    "resposta": "Hoenn",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Kabu"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Kabu",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Allister",
      "descricao": "Menino mascarado, líder do ginásio de tipo Fantasma de Stow-on-Side em Pokémon Shield, na região de Galar."
    },
    "angulo": "identidade",
    "tipo": "multipla",
    "pergunta": "Em Pokémon Sword, o ginásio de Stow-on-Side é da lutadora Bea. Em Shield, quem o comanda, com pokémon fantasmas?",
    "resposta": "Allister",
    "distratores": [
      "Opal",
      "Piers",
      "Melony"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Allister",
      "https://bulbapedia.bulbagarden.net/wiki/Stow-on-Side_Stadium"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Allister",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Stow-on-Side_Stadium",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Melony",
      "descricao": "Líder do ginásio de tipo Gelo de Circhester em Pokémon Shield, na região de Galar."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Em Galar, Gordie, o líder de pedra de Circhester em Sword, e Melony, a líder de gelo da mesma cidade em Shield, têm que parentesco?",
    "resposta": "Ela é mãe dele",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Melony",
      "https://bulbapedia.bulbagarden.net/wiki/Gordie"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Melony",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Gordie",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Raihan",
      "descricao": "Líder do ginásio de tipo Dragão de Hammerlocke, em Galar, nos jogos Pokémon Sword e Shield."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Raihan, o líder de dragões de Hammerlocke, em Sword e Shield, se apresenta como eterno rival de qual treinador de Galar?",
    "resposta": "Leon",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Raihan"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Raihan",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Poppy",
      "descricao": "Menina especialista em pokémon de aço, membro da Elite dos Quatro de Paldea nos jogos Pokémon Scarlet e Violet."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Em Scarlet e Violet, a Elite dos Quatro de Paldea tem uma integrante bem pequena, especialista em aço e dona de um Tinkaton. Quem é ela?",
    "resposta": "Poppy",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Poppy"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Poppy",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Geeta",
      "descricao": "Campeã e presidente da Liga Pokémon de Paldea nos jogos Pokémon Scarlet e Violet."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Em Scarlet e Violet, Geeta, a campeã que testa o jogador no fim da Liga de Paldea, ocupa também qual cargo?",
    "resposta": "Presidente da Liga Pokémon",
    "distratores": [
      "Diretora da academia",
      "Professora da academia",
      "Chefe da Equipe Star"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Geeta"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Geeta",
        "situacao": "inacessivel",
        "texto": ""
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
