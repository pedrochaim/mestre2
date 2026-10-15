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
      "nome": "Campeonato Mundial de Pokémon",
      "descricao": "Torneio anual oficial da The Pokémon Company que reúne os melhores jogadores do mundo no card game, nos jogos principais e em outros jogos da franquia."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em 2023, o Campeonato Mundial de Pokémon foi disputado no Japão, terra natal da franquia. Em que cidade japonesa?",
    "resposta": "Yokohama",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_World_Championships"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_World_Championships",
        "situacao": "ok",
        "texto": "The Pokémon World Championships is an invite-only trading card game and esports event organized by Play! Pokémon. It is held annually in August and features games from the Pokémon series, including the Pokémon Trading Card Game, Pokémon video games and Pokémon Go. Players earn invitations to the World Championships based on their performance in qualifiers and other tournaments held throughout the \n[…]\nThe 2023 Pokémon World Championships marked its third tournament to be held outside United States, the first time to be hosted in their franchise's country of origin, and the first in the Asian region, at the Pacifico Yokohama in Yokohama, Japan (the basis of Vermilion City in the Kanto region). After the PWC ended, The Pokémon Company announced that the Pokémon World Championships would return to Hawaii for the first time since the previous World Championships in the state was held back in 2012.\n[…]\nAt the conclusion of the 2026 event, it was announced that Singapore would host the 2027 event, marking the return of the tournament to Asia for the first time since the 2023 event in Yokohama and the first time Southeast Asia is given the hosting rights, and the fourth overall outside United States. The tournament rules and season lineup were published on September 8, and also announced that Pokémon Unite is rotated out from the tournament rotation.\n[…]\nIn January 2023, there were changes to the competitive structure and Regional Zones. Pokémon World Championships nearly doubled available spots from 16, to 31 teams. Regional Zones controlled by TPCi were also changed, with Central America, South America-East and South America West being changed to LATAM North, LATAM South, and Brazil. TPC had also taken control of the India and Asia-Pacific Regional Zones, and split Asia-Pacific into 2 regions; Asia-Pacific East and Asia-Pacific West.\n[…]\n2014 World Champion"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Campeonato_Mundial_de_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "Pokémon World Championships (Campeonato Mundial de Pokémon no Brasil) é um evento de e-Sports organizado pela Play! Pokémon, exclusivo para convidados. Realizado anualmente em agosto, apresenta jogos da série Pokémon, como os jogos eletrônicos de Pokémon, o Pokémon Trading Card Game, Pokémon GO, Pokémon Unite e Pokkén Tournament (até a edição de 2022).\n[…]\nO Campeonato Mundial Pokémon começou com o Pokémon Trading Card Game (TCG) em 2004, época em que a franquia estava recuperando sua popularidade. Em 2008, a Play! Pokémon começou a organizar torneios competitivos para a série de jogos Pokémon, juntamente com o TCG, conhecidos coletivamente como Video Game Championships (VGC).\n[…]\nA partir de 2026, todos os torneios do VGC serão disputados em Pokémon Champions.\n[…]\nNa edição de 2022 do evento, foi anunciado que o Campeonato Mundial de 2023 aconteceria em Yokohama, Japão (na cidade de Vermilion, região de Kanto). Quando o evento de 2023 ocorreu, foi o primeiro Campeonato Mundial a ser realizado no país de origem da franquia e na Ásia.\n[…]\nNo final do evento de 2023, a The Pokémon Company anunciou que o Campeonato Mundial de Pokémon retornaria ao Havaí pela primeira vez desde que o último Campeonato Mundial no estado foi realizado em 2012. O evento de 2025 foi realizado em Anaheim, Califórnia, e foi a primeira edição do torneio a ter o Championship Sunday realizado em uma arena. O evento de 2026 foi realizado em São Francisco, Califórnia.\n[…]\nEm 2015, o programa Play! Pokémon expandiu-se para incluir países da América Latina e da Ásia (exceto Japão e Coreia do Sul). No entanto, em 10 de junho de 2020, foi anunciado que a Ásia deixaria de fazer parte do programa Play! Pokémon e passaria a ter seu próprio sistema de qualificação para o Campeonato Mundial de Pokémon.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Pokémon Center (loja)",
      "descricao": "Rede de lojas oficiais dedicadas só a produtos da franquia Pokémon, aberta primeiro em Tóquio."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em 2001, a primeira loja Pokémon Center fora do Japão abriu numa grande cidade americana e anos depois virou loja da Nintendo. Que cidade?",
    "resposta": "Nova York",
    "fonte": [
      "https://en.wikipedia.org/wiki/Nintendo_New_York"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Nintendo_New_York",
        "situacao": "ok",
        "texto": "Nintendo New York (previously known as Nintendo World and Pokémon Center New York) is the flagship specialty store of video game corporation Nintendo. Located in 10 Rockefeller Plaza, at Rockefeller Center in New York City, the two-story, 10,000-square-foot (930 m2) store opened on May 14, 2005.\n[…]\nNintendo New York regularly holds tournaments and shows for new games, giving early releases and prizes to winners. In addition, they have held screenings for multiple official Nintendo broadcasts including Nintendo Directs.\n[…]\nOn November 1, 2001, Pokémon USA, Inc. announced the opening of Pokémon Center New York on November 16. The two-story, 13,000-square-foot (1,200 m2) would combine a functioning retail store with various interactive facilities, including an \"Ultra Pokédex\" and a Poké Ball prop that would engush fog and light effects. Game Boy Color systems on the second floor would allow attendees to try out various Pokémon games alongside receiving exclusive Pokémon for their games.\n[…]\nOn January 19, 2016, the Nintendo World store was closed for renovation, and reopened its doors one month later, February 19, 2016, with new features in the store. On its re-opening, the store was renamed \"Nintendo New York.\"\n[…]\nOn March 14, 2020, Nintendo NY shortened the hours open to the public. Two days later, on March 16, 2020, it announced on Twitter the store would officially shut down due to the COVID-19 pandemic in New York City. On August 5, 2020, Nintendo NY announced it would be reopening the store on August 8. However, visitors had to follow the correct guidelines during the pandemic, and if they wanted to enter the store, they had to book reservations online.\n[…]\nArchive copy of The Pokémon Center's official website at the Wayback Machine (archived November 18, 2001)"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Pokémon Go Fest 2017",
      "descricao": "Primeiro festival presencial do jogo Pokémon Go, realizado em julho de 2017 em Chicago e marcado por falhas de conexão."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "O primeiro Pokémon Go Fest, em 2017, ficou marcado por falhas de conexão e reembolsos aos jogadores. Em que cidade americana ele aconteceu?",
    "resposta": "Chicago",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Go"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Go",
        "situacao": "ok",
        "texto": "Pokémon Go (stylized as Pokémon GO) is a 2016 augmented reality (AR) mobile game originally developed and published by Niantic and since 2025 by Scopely Explore, in partnership with Nintendo and the Pokémon Company, for iOS and Android devices. The game uses GPS to locate, capture, train, and battle Pokémon. It is free-to-play, featuring a freemium model that includes in-app purchases for addition\n[…]\nIn addition to standard gameplay, the game has hosted several in-game and live events. The first live event officially held by Niantic was held in Charlotte, North Carolina, in May 2017. In July 2017, a community event was held in Grant Park, Chicago, in honor of the first anniversary of the game's release. Although almost no information about the event, including ticket prices and attractions, was released by Niantic ahead of the ticket sale, over 20,000 tickets sold out within half an hour.\n[…]\nFollowing the event in Chicago, other events have been hosted in Chester, Yokohama, and San Jose. In September 2017, a series of events named \"Safari Zone\" were held in Unibail-Rodamco shopping centers in Oberhausen, Paris, and Barcelona, with events for the following month in Copenhagen, Prague, Stockholm, and Amstelveen.\n[…]\nJapan's National Police Agency said it was the 79th Pokémon Go-related accident in the country. On August 11, 2016, a young girl in Cambodia was reportedly killed after being hit by a car while trying to capture a Pokémon on a road. The case was the first death related to Pokémon Go among Southeast Asian countries. In January 2017, a Chinese-American civilian, Jiansheng Chen, was shot dead while playing Pokémon Go.\n[…]\nstates, Niantic is firm on not keeping the pandemic bonuses. Players began boycotting Pokémon Go since the first week of August 2021.\n[…]\nList of Pokémon, the list of all of the original Pokémon by order\n[…]\nMedia related to Pokémon Go at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_GO",
        "situacao": "ok",
        "texto": "Pokémon GO é um jogo eletrônico free-to-play de realidade aumentada voltado para smartphones. O jogo é desenvolvido e publicado pela Niantic, Inc., em colaboração com a Nintendo e a The Pokémon Company para as plataformas iOS e Android. O jogo foi inicialmente lançado em julho de 2016 para alguns países, eventualmente foi expandindo para o resto do mundo.\n[…]\nNesses lugares são distribuídas Pokébolas, Poções, Frutas, Itens de evolução e até mesmo ovos Pokémon que, assim como no jogo, irão chocar conforme o jogador anda pela cidade.\n[…]\nNa Coreia do Sul, existem grandes restrições sobre o uso de dados do mapeamento online e os jogadores descobriram um ginásio em Panmunjeom, ao longo da Zona Desmilitarizada da Coreia; no entanto, a Niantic posteriormente o removeu do jogo. Após o lançamento de Pokémon Go no Japão, o jogo também se tornou jogável em partes de Busan, bem como em partes da cidade consideradas como pertencentes à área de mapeamento do Japão devido à proximidade com a Ilha de Tsushima.\n[…]\nNo lançamento, o jogo sofreu paralisações frequentes dos servidores devido ao uso extremo. Falhas frequentes e erros de autenticação atormentaram o lançamento do jogo e persistido por vários dias. Nos dois primeiros dias após o lançamento, os jogadores não foram capazes de acessar o jogo através de suas contas Pokémon Trainer Club, com somente contas baseadas no Gmail sendo capazes de obter acesso ao jogo.\n[…]\nA distribuição de PokéStops e ginásios no jogo (baseados nos portais de Ingress, jogo de realidade aumentada com temática em ficção científica) foi apontado como sendo mais disperso em muitos bairros minoritários, em um reflexo da demografia americana. No subúrbio de Rhodes em Sydney, tornou-se grande o número de jogadores que capturam pokémon em sua área.\n[…]\nPokémon\n[…]\nPokémon GO no X\n[…]\n«Pokémon GO». para Google Play\n[…]\n«Pokémon GO». para App Store.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Balão de Pikachu da Macy's",
      "descricao": "Balão gigante de Pikachu que desfila no tradicional desfile de Ação de Graças da loja Macy's, em Nova York."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Um balão gigante de Pikachu desfilou pela primeira vez no tradicional desfile de Ação de Graças da Macy's, em Nova York, em que ano?",
    "resposta": "2001",
    "distratores": [
      "1998",
      "2004",
      "2007"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pikachu",
      "https://en.wikipedia.org/wiki/Macy%27s_Thanksgiving_Day_Parade"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pikachu",
        "situacao": "ok",
        "texto": "Pikachu ( ; Japanese: ピカチュウ, Hepburn: Pikachū) is a Pokémon species in Nintendo and Game Freak's Pokémon media franchise, and the franchise's mascot. First introduced in the video games Pokémon Red and Blue, it was created by Atsuko Nishida at the request of lead designer Ken Sugimori, with the design finalized by Sugimori. Since Pikachu's debut, it has appeared in multiple games including Pokémon\n[…]\nAccording to Sugimori, these changes originated from the anime adaptation of the franchise where it made Pikachu easier to animate, and were adopted to the games for consistency. The older design, nicknamed \"Fat Pikachu\" by fans of the series, was revisited in Pokémon Sword and Shield, where Pikachu received a special in-battle \"Gigantamax\" form resembling its original design. This Gigantamax form was designed by James Turner, who served as art director for Sword and Shield.\n[…]\nAnother promotional stunt, used to promote Pokémon's debut in the United States, involved dropping 700 Pikachu plushes into a field by plane, while skydivers leapt from the planes and drove off in Pikachu themed cars. A \"got milk?\" advertisement featured Pikachu on April 25, 2000. A Pikachu balloon has been featured in the Macy's Thanksgiving Day Parade since 2001, with different balloon designs being introduced since.\n[…]\nIn 2016, the Pikachu, also known as the Pokemonument, a fiberglass sculpture depicting Pikachu by an unknown artist, was installed in Lower Garden District, a New Orleans neighborhood. Within a few days, the sculpture was vandalized by someone with a baseball bat, but repaired. Some two weeks after its placement, the \"Pokemonument\" was removed, and an online statement from the artist said that the artwork would be auctioned to benefit restoration of the park's fountains.\n[…]\nPikachu on Pokemon.com\n[…]\nPikachu  at Bulbapedia, a Pokémon wiki\n[…]\nPikachu on Serebii"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Macy%27s_Thanksgiving_Day_Parade",
        "situacao": "ok",
        "texto": "The Macy's Thanksgiving Day Parade, the world's largest parade, is an annual parade in New York City presented by the American department store chain Macy's. While not the first such event held in the United States, the Macy's Parade has become a traditional event watched by many millions of television viewers and in-person spectators each year.\n[…]\nIn 2001, in the aftermath of the September 11 attacks, which caused the collapse of the World Trade Center in New York City two months prior, there were debates about whether to cancel the parade. With the lingering scent of burnt metal and the continued rescue efforts being done at the World Trade Center site, some people felt it was insensitive to host the parade.\n[…]\nBalloons were tethered to a \"specially rigged anchor vehicle framework of five specialty vehicles\" rather than carried by handlers. Mayor of New York City Bill de Blasio stated that it would not be \"a live parade, but something that will really give us that warmth and that great feeling we have on Thanksgiving day.\" In 2021, the Macy's Thanksgiving Day Parade returned to its traditional in-person procession with 6,500 participants marching.\n[…]\nSince 2002, Macy's Studios has partnered with the Universal Orlando Resort (owned by NBC parent NBCUniversal) to bring balloons and floats from New York City to the theme park in Florida every holiday season in an event known as the Macy's Holiday Parade. The parade is performed daily and includes the Santa Claus float used in New York's parade. Performers from the Orlando area are cast as various clowns, and the park used to invite guests to be \"balloon handlers\" for the parade.\n[…]\nIn the 2016 Ghostbusters film, the Ghostbusters fight a haunted balloon parade including several Macy's balloons from the 1920s, 1930s and 1940s.\n[…]\n1997 Macy's Thanksgiving Day Parade"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pikachu",
        "situacao": "ok",
        "texto": "Pikachu (ピカチュウ, Pikachū) é uma espécie fictícia pertencente à franquia de mídia Pokémon da Nintendo. Ele apareceu pela primeira vez no Japão em 1996, nos jogos eletrônicos Pokémon Red e Pokémon Green, sendo lançados fora do Japão em 1998 como Pokémon Red and Blue, e foi criado por Atsuko Nishida a pedidos do designer principal  Ken Sugimori.\n[…]\nPikachu apareceu pela primeira vez em 1996 nos jogos eletrônicos japoneses Pokémon Red e Green. E hoje está presente em quase todos os jogos eletrônicos da franquia, tendo geralmente um papel secundário; e ocupa um dos papéis centrais na série de televisão, filmes e mangás baseados no universo Pokémon, e no jogo eletrônico Pokémon Yellow. É também um dos Pokémons representados em Pokémon Trading Card Game.\n[…]\nPikachu aparece quase em toda a série de jogos eletrônicos de Pokémon, aparecendo pela primeira vez em 1996 nos jogos japoneses Pokémon Red (ポケットモンスター 赤, Poketto Monsutā Aka) e Pokémon Green (ポケットモンスター 緑, Poketto Monsutā Midori), no Ocidente, foi lançado sob o título Pokémon Red e Blue. Desde a primeira edição destes jogos, Pikachu sempre aparece de nível baixo e que pode ser capturado e nunca comercializado, exceto nas versões Black e White e Black 2 e White 2 no qual ele não aparece.\n[…]\nNo primeiro episódio, Ash recebe seu Pikachu do Professor Carvalho como Pokémon inicial. Primeiramente, Pikachu ignora os pedidos de Ash, atacando-o frequentemente e se recusando a ser armazenado na forma convencional de transporte Pokémon, a Pokébola. Porém, Ash se arrisca para salvá-lo de um ataque de Spearow selvagens e o leva para um Centro Pokémon para curá-lo. Depois do fato, Pikachu começa a se aproximar de Ash e os dois se tornam amigos, mas ele continua a recusar a Pokébola.\n[…]\n«Pikachu». no site oficial",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Versão brasileira do anime Pokémon",
      "descricao": "Exibição dublada em português do anime Pokémon no Brasil, que estreou na TV aberta no fim dos anos noventa."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Dublado em português, o anime Pokémon estreou na TV aberta brasileira, pela Rede Record, em que ano?",
    "resposta": "1999",
    "distratores": [
      "1997",
      "2000",
      "2001"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_(anime)"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_(anime)",
        "situacao": "ok",
        "texto": "Pokémon (ポケモン, Pokemon), abreviação do título japonês Pocket Monsters (ポケットモンスター, Poketto Monsutā; lit. \"Monstros de Bolso\"), e atualmente marcado em inglês como Pokémon: the Series (テレビ アニメ 「「 ポケット モンスター シリーズ, Terebi Anime 'Poketto Mansutā' Shirīzu; lit. TV Anime \"Monstros de Bolso\" As Séries) e Pokémon Horizons: the Series, é uma série de anime de televisão japonesa, que faz parte da franquia de\n[…]\nA tabela a seguir lista a receita anual de conteúdo de mídia de anime Pokémon no Japão, conforme relatado pela empresa de pesquisa de mercado Hakuhodo.\n[…]\nNos Estados Unidos, o anime foi exibido no Kids' WB como um desenho animado nas manhãs de sábado a partir de fevereiro de 1999.\n[…]\nPokémon chegou ao Brasil no dia 10 de maio de 1999, sendo transmitido inicialmente no programa \"Eliana e Alegria\" da Record. No Cartoon Network, o anime estreou em 6 de setembro do mesmo ano, sendo transmitido inicialmente no \"Talismã\" e esteve transmitido até setembro de 2021. Na TV aberta, Pokémon foi transmitido pela Record da 1ª até a 4ª temporada.\n[…]\nCarl Kimlinger, em uma crítica de agosto de 2008 da série Diamante e Pérola para o Anime News Network, deu à versão dublada uma nota geral C. Ele escreveu: \"A fórmula já está definida...\n[…]\nApesar de ter sido comum a troca de dubladores em diversos países do mundo, poucos personagem principais do anime haviam tido o dublador trocado no Brasil, até 2015, quando por uma recusa do cliente da dublagem em permitir a dublagem a distância do dublador do protagonista, Fábio Lucindo, que à época estava em Portugal e não poderia comparecer presencialmente ao estúdio de dublagem, e por isso optou pela troca do dublador do protagonista depois de mais de 10 anos.\n[…]\nPágina oficial de Pokémon (em japonês)\n[…]\nPágina oficial do anime Pokémon na TV Tokyo (em japonês)\n[…]\nPágina oficial do anime Pokémon na página oficial de Pokémon (em japonês)\n[…]\nPágina oficial de Pokémon (em inglês)"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Pokémon Center (loja)",
      "descricao": "Rede de lojas oficiais dedicadas só a produtos da franquia Pokémon, aberta primeiro em Tóquio."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "A primeira loja Pokémon Center, dedicada só a produtos da franquia, abriu as portas em Tóquio em que ano?",
    "resposta": "1998",
    "distratores": [
      "1996",
      "2000",
      "2002"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Center"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Center",
        "situacao": "ok",
        "texto": "The Pokémon Center is a chain of specialty stores selling Pokémon-related merchandise. Pokémon Centers are predominantly located in Japan, the first having opened in Tokyo in 1998. Stores have also opened in Singapore, the United States, and Taiwan. As of 2026, there are 25 active stores with two located outside Japan.\n[…]\nThe Pokémon Company opened the first Pokémon Center store in Tokyo in April 1998. This original Pokémon Center eventually closed and reopened in a different location. Pokémon Center Osaka, one of the franchise' bigger locations at 830 square meters, was the country's seventh Pokémon Center and opened in 2010.\n[…]\nOn November 16, 2001, Nintendo opened a store called the Pokémon Center in Rockefeller Center, New York City. The Pokémon Center was closed and replaced by the Nintendo World Store in 2005. This store was renovated and rebranded to Nintendo New York in 2016.\n[…]\nOnly one Pokémon Center out of 15, along with three smaller locations, remained open at the height of the COVID-19 pandemic in Japan, and the location in Okayama closed permanently. There are over 20 Pokémon Center locations in Japan as of 2023.\n[…]\nOn December 8, 2023, the second permanent Pokémon Center outside of Japan opened in Taipei at the Shin Kong Mitsukoshi department store near Taipei 101.\n[…]\nThe Pokémon Company International launched an online Pokémon Center store in 2014.\n[…]\nAs of 2026, there are 23 Pokémon locations in Japan, including five labelled \"Pokémon Store\". They include ten locations in the Greater Tokyo Area. These exclude temporary pop-up stores, for example: one such store operated in London during the Pokémon World Championships in 2022, and another operated for three weeks in June 2014 at the Cremerie de Paris, near the Louvre in Paris.\n[…]\nMedia related to Pokémon Centers at Wikimedia Commons"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Electric (canção de Katy Perry)",
      "descricao": "Canção lançada em 2021 pela cantora Katy Perry como parte do projeto musical dos 25 anos de Pokémon, com clipe ao lado de Pikachu."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Para comemorar os 25 anos de Pokémon, em 2021, que cantora americana lançou a música Electric, com um clipe ao lado de Pikachu?",
    "resposta": "Katy Perry",
    "fonte": [
      "https://en.wikipedia.org/wiki/Electric_(Katy_Perry_song)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Electric_(Katy_Perry_song)",
        "situacao": "ok",
        "texto": "\"Electric\" is a song by the American singer-songwriter Katy Perry from the Pokémon 25 soundtrack album (2021). It was released on May 14, 2021, by Capitol Records as the second single from the album. It is an electropop ballad written by Perry, Jon Bellion, Lucas Marx, Rachel Kanner, Al Calderon, and the producers Jordan Johnson, Oliver \"German\" Peterhof and Stefan Johnson of the Monsters & Strang\n[…]\nAccompanying video was directed by Carlos López Estrada. In it, Perry and Pikachu assist younger versions of themselves. The younger version of Perry is played by Meili Aspen Caputo. Commercially, \"Electric\" charted in the low-tier positions of Billboard-published Canadian Hot 100 (number 97) and Global 200 (number 120). It entered digital component charts in the United States and Germany.\n[…]\nOn January 13, 2021, it was announced that the celebration of the 25th anniversary of Japanese media franchise Pokémon would commence with a musical collaboration with Perry. Describing herself as a \"lifelong Pokémon fan\", she stated that \"In this moment of unknown, there are dependable places and characters and institutions and people, and I hope I can be one of them.\n[…]\nPerry also mentioned: \"[Caputo] put her hair in pigtails and she looks identical to this one from that video I have of me playing.\"\n[…]\nGood Morning America shared a thirty-second sneak peek of the \"Electric\" music video on May 13, 2021, which premiered in full the following day. The behind-the-scenes video was published on Perry's official YouTube channel on June 7, 2021.\n[…]\nAfterwards, she gets her younger version to join a talent competition being held at the island. By the end of the video, the younger version of Perry gives her first club performance as the older version of Perry and Pikachu looks on from the crowd until they wake up from their meditation."
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Pokémon: O Filme",
      "descricao": "Primeiro filme da franquia Pokémon, em que Ash e Pikachu enfrentam o clone Mewtwo, lançado no Japão no fim dos anos noventa."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1999, o primeiro filme de Pokémon, com Mewtwo, chegou aos cinemas dos Estados Unidos pelas mãos de qual grande estúdio americano?",
    "resposta": "Warner Bros.",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_The_First_Movie"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon:_The_First_Movie",
        "situacao": "ok",
        "texto": "Pokémon: The First Movie is a 1998 Japanese animated fantasy adventure film directed by Kunihiko Yuyama. It is the first in the Pokémon anime film series. The film was first released in Japan on July 18, 1998, to positive reviews, with praise directed at the film's emotional impact and exploration of ethical topics such as cloning, genetic modification, and existentialism.\n[…]\nThe English-language adaptation was released in North America and other countries on November 12, 1999, by Warner Bros. Pictures. This version was received far less positively than the original Japanese release, with much criticism pointed at the inclusion of an anti-violence message contradictory to the series' overall concept.\n[…]\nThese changes were not well received by the original Japanese production crew, with executive producer Masakazu Kubo describing Warner Bros.' proposed changes \"a hassle\".\n[…]\nOn March 9, 1999, Warner Bros. Pictures negotiated a deal with 4Kids Entertainment and The Summit Media Group to acquire worldwide distribution rights to the film outside Asia. The deal was verified on June 24, with an announcement that the film would be released on November 12 in the United States. Prior to that date, the film premiered on November 6 at Grauman's Chinese Theatre in Hollywood.\n[…]\nIn the U.S. box office, Pokémon: The First Movie was an instant commercial success, debuting at number one and earning $10.1 million on its Wednesday opening day. This day is commonly called the \"Pokéflu\" because so many children missed school to see the film, much to the chagrin of educators. This was the biggest animated film opening for any film in the history of Warner Bros. The film remained the only anime film to top the U.S.\n[…]\nPokémon: The First Movie  at Anime News Network's encyclopedia\n[…]\nPokémon: The First Movie at Rotten Tomatoes\n[…]\nPokémon: The First Movie at Box Office Mojo"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon%3A_The_First_Movie",
        "situacao": "ok",
        "texto": "Pokémon: The First Movie: Mewtwo Strikes Back, geralmente referido como Pokémon: The First Movie, originalmente lançado como Pocket Monsters the Movie: Mewtwo Strikes Back! (劇場版ポケットモンスター ミュウツーの逆襲, Gekijōban Poketto Monsutā: Myūtsū no Gyakushū), é um filme de anime de 1998, dirigido por Kunihiko Yuyama, o diretor chefe da série de televisão Pokémon. Foi o primeiro filme da franquia Pokémon.\n[…]\nPokémon: The First Movie é a trilha sonora do primeiro filme de Pokémon lançada nos Estados Unidos em 10 de novembro de 1999. Mais tarde, foi lançado o álbum Pokémon: The First Movie Original Motion Picture Score.\n[…]\nPokémon: O Filme - Mewtwo Contra-Ataca foi exibido pela 1ª vez nos cinemas no dia 18 de julho de 1998 no Japão pela distribuição da Toho. No ano seguinte, o filme foi exibido nos Estados Unidos no dia 10 de novembro de 1999, de acordo com o licenciamento da 4Kids Entertainment e da Kids' WB. No Brasil, o filme foi exibido no dia 7 de janeiro de 2000 e em Portugal no dia 19 de março de 2000.\n[…]\nApós a exibição nos cinemas, Pokémon: O Filme - Mewtwo Contra-Ataca foi lançado no Japão em VHS no dia 12 de fevereiro de 1999, também foi lançado em DVD no dia 23 de junho de 2000. Nos Estados Unidos, foi lançado em VHS e DVD no dia 21 de março de 2000, no Brasil e em Portugal no mesmo ano pela distribuição da Warner Home Video.\n[…]\nApós os anos seguintes, foi relançado em DVD no dia 21 de setembro de 2007 no Japão, fazendo parte da coleção Pikachu the Movie Box 1998-2002. Nos Estados Unidos, foi relançado em DVD no dia 7 de abril de 2009 pela Warner Home Video, fazendo parte da coleção Pokémon: The First Three Movies. Em 28 de novembro de 2012, o filme foi remasterizado digitalmente e lançado pela 1ª vez em Blu-ray, fazendo parte da coleção Pikachu the Movie Premium Box 1998-2010.\n[…]\nPokémon: The First Movie no IMDb\n[…]\nPokémon: The First Movie (em inglês). no Box Office Mojo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Pikachu Illustrator",
      "descricao": "Carta promocional rara do card game Pokémon, distribuída no Japão no fim dos anos noventa, considerada uma das cartas mais caras do mundo."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "A carta Pikachu Illustrator, uma das mais caras do mundo, nunca foi vendida em pacotes. Por que existem tão poucos exemplares dela?",
    "resposta": "Foi prêmio de concurso de ilustração",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pikachu_Illustrator",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pikachu_Illustrator",
        "situacao": "inexistente",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game",
        "situacao": "ok",
        "texto": "The Pokémon Trading Card Game (Japanese: ポケモンカードゲーム, Hepburn: Pokemon Kādo Gēmu; \"Pokémon Card Game\"), abbreviated as PTCG or Pokémon TCG, is a tabletop and collectible card game developed by Creatures Inc. based on the Pokémon franchise. Originally published in Japan by Media Factory in 1996, publishing worldwide is currently handled by the Pokémon Company. In the United States, the game was orig\n[…]\nPSA-graded 10 \"Pikachu Illustrator\".\n[…]\nThe \"Pikachu Illustrator\" is the rarest and most expensive Pokémon card ever sold in history, and it was acquired by the celebrity and collector Logan Paul for $5,275,000 in July 2021. In February 2026, it was sold for $16.5 million.\n[…]\nThis card was created as a prize for the 1997-1998 Pokémon design contests organized by the Japanese manga-magazine CoroCoro Comic and with only 41 copies printed, it is the only Pokémon card to say \"Illustrator\" instead of \"Trainer\" like other Trainer cards. The card was illustrated by Atsuko Nishida, the original designer of the Pokémon species including Pikachu. The Japanese imprint reads: \"We certify that your illustration is an excellent entry in the Pokémon Card Game Illust Contest.\n[…]\nTherefore, we state that you are an Officially Authorized Pokémon Card Illustrator and admire your skill.\"\n[…]\nWhile the Pikachu Illustrator Card purchased by Logan Paul has the record for the most expensive Pokémon Card ever sold, other lower grade versions of the card have been sold for high prices elsewhere. Shopping platform ZenPlus, a subsidiary of shopping service ZenMarket (now part of ZenGroup), sold two of the cards in 2020, for the Japanese Yen equivalent of US$233,000 and US$208,496 respectively. A third card was sold on the platform in 2022 for US$772,000.\n[…]\nIn March 2026, another 1998 CoroCoro Comic PSA 9-graded Pokémon Pikachu Illustrator promo card was sold for $1,406,250 at Heritage Auctions."
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Colaboração entre Pokémon e o Museu Van Gogh",
      "descricao": "Parceria de 2023 entre a The Pokémon Company e o Museu Van Gogh, de Amsterdã, que incluiu uma carta de Pikachu com chapéu de feltro cinza."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Em 2023, numa colaboração com um museu de Amsterdã, uma carta mostrou Pikachu de chapéu de feltro cinza, imitando um autorretrato famoso. De qual pintor?",
    "resposta": "Vincent van Gogh",
    "distratores": [
      "Rembrandt",
      "Johannes Vermeer",
      "Claude Monet"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Van_Gogh_Museum"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Van_Gogh_Museum",
        "situacao": "ok",
        "texto": "The Van Gogh Museum (Dutch pronunciation: [vɑŋˈɣɔx mʏˌzeːjʏm]) is a Dutch art museum dedicated to the works of Vincent van Gogh and his contemporaries in the Museum Square in Amsterdam South, close to the Stedelijk Museum, the Rijksmuseum, and the Concertgebouw. The museum opened on 2 June 1973, and its buildings were designed by Gerrit Rietveld and Kisho Kurokawa.\n[…]\nThe museum contains the largest collection of Van Gogh's paintings and drawings in the world. In 2017, the museum had 2.3 million visitors and was the most-visited museum in the Netherlands, and the 23rd-most-visited art museum in the world. In 2019, the Van Gogh Museum launched the Meet Vincent Van Gogh Experience, a technology-driven \"immersive exhibition\" on Van Gogh's life and works, which has toured globally.\n[…]\nThe collection was inherited by her son Vincent Willem van Gogh in 1925, eventually loaned to the Stedelijk Museum in Amsterdam, where it was displayed for many years, and was transferred to the state-initiated Vincent van Gogh Foundation in 1962. In the years following her husband’s death, Johanna van Gogh-Bonger organized exhibitions of Vincent van Gogh's work in the Netherlands and abroad, significantly contributing to his posthumous recognition.\n[…]\nThe Van Gogh Museum manages an official Meet Vincent Van Gogh Experience, described as a travelling \"3D immersive exhibition\" using technology and computer audio-visual techniques to cover the story of Van Gogh's life through images of his works. The first \"experience\" was in 2016 in Beijing, and it has since been toured globally to Europe, Asia and North America.\n[…]\nVan Gogh House\n[…]\nList of works by Vincent van Gogh\n[…]\nMeet Vincent Van Gogh Experience Archived 22 January 2022 at the Wayback Machine website\n[…]\nVirtual tour of the Van Gogh Museum provided by Google Arts & Culture\n[…]\nMedia related to Van Gogh Museum at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Museu_Van_Gogh",
        "situacao": "ok",
        "texto": "O Museu Van Gogh (em neerlandês:  Van Gogh Museum) é um museu de arte localizado no município de Amsterdã, na província de Holanda do Norte nos Países Baixos. O museu é responsável pela preservação, conservação e difusão da obra do pintor holandês Vincent van Gogh. Situa-se na Praça dos Museus, próximo do Stedelijk Museum e do Rijksmuseum, na zona sul de Amsterdã.\n[…]\nO museu possui a maior coleção de obras do pintor holandês, com aproximadamente 1.400 obras, que incluím pinturas, desenhos e cartas de Van Gogh, como também pinturas de artistas contemporâneos provenientes do século XIX. Realiza projetos de pesquisa e de aprendizagem sobre o pintor. Abriga exposições fixas e temporárias. Sua biblioteca conta com mais de 35.000 livros e artigos sobre Vincent van Gogh e seus contemporâneos.\n[…]\nEm comemoração aos cinquenta anos do Museu Van Gogh, o museu realizou na noite do dia 2 de junho de 2023 um show de luzes com duzentos drones na Praça dos Museus.\n[…]\nEm 27 de setembro de 2023, foi anunciado uma colaboração entre o Museu Van Gogh e a franquia japonesa Pokémon para comemorar o 50º jubileu do museu. A colaboração consiste, entre outros, em expor no museu pinturas de artistas japoneses que retratam personagens do Pokémon no estilo das pinturas de Vincent van Gogh com intiuto de atrair crianças e o público jovem no museu.\n[…]\nO Museu Van Gogh tem uma esposição com uma experiência oficial intitulada Meet Vincent Van Gogh, que foi descrita como uma \"exposição imersiva em 3D\" itinerante usando tecnologia e técnicas audiovisuais de computador para cobrir a história da vida de Van Gogh através de imagens de suas obras. A primeira \"experiência\" foi realizada em 2016, em Pequim, e desde então excursionou globalmente pela Europa, Ásia e América do Norte.\n[…]\n«Website da Meet Vincent Van Gogh Experience» (em inglês)\n[…]\n«Tour virtual do Museu Van Gogh» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Pokémon VGC",
      "descricao": "Circuito competitivo oficial dos jogos principais de Pokémon, disputado em batalhas duplas e encerrado no Campeonato Mundial."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Nos campeonatos oficiais de Pokémon, as disputas com os jogos de videogame da série principal formam o circuito VGC. O que significa essa sigla em inglês?",
    "resposta": "Video Game Championships",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_World_Championships"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_World_Championships",
        "situacao": "ok",
        "texto": "The Pokémon World Championships is an invite-only trading card game and esports event organized by Play! Pokémon. It is held annually in August and features games from the Pokémon series, including the Pokémon Trading Card Game, Pokémon video games and Pokémon Go. Players earn invitations to the World Championships based on their performance in qualifiers and other tournaments held throughout the \n[…]\nThe defending Video Game champions were Arash Ommati from Italy (Masters Division), Hayden McTavish from the United States (Senior Division), and Brendan Zheng from the United States (Junior Division). The opening ceremony of the event was attended by Junichi Masuda, the video game designer for the Pokémon franchise and a member of the board of directors of Game Freak.\n[…]\nThe tournament was transmitted with live streaming from the official Pokémon Twitch channel. The defending Video Game champions for the year were Se Jun Park from South Korea (Masters Division), Nikolai Zielinsky from the United States (Senior Division) and Kota Yamamoto from Japan (Junior Division).\n[…]\nPlayers could only gain an invitation to play in the Video Game World Championships by either being the 2014 Pokémon World Champions, or by obtaining enough Championship Points in their respective geographic zone designated by Play! Pokémon. However, the only exception to this rule are for players from Japan and South Korea, as their tournaments are not overseen by Play! Pokémon and their invites are governed through a different system of qualification.\n[…]\nThe 2015 Pokémon Video Game World Championship was intended to be played under two Swiss tournaments and one single-elimination tournament which would then determine the 2015 World Champions. As such, there are two types of invites:\n[…]\nThe Video Game Championships consisted of two Swiss tournaments and one single elimination tournament played across three days."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Campeonato_Mundial_de_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "Pokémon World Championships (Campeonato Mundial de Pokémon no Brasil) é um evento de e-Sports organizado pela Play! Pokémon, exclusivo para convidados. Realizado anualmente em agosto, apresenta jogos da série Pokémon, como os jogos eletrônicos de Pokémon, o Pokémon Trading Card Game, Pokémon GO, Pokémon Unite e Pokkén Tournament (até a edição de 2022).\n[…]\nO Campeonato Mundial Pokémon começou com o Pokémon Trading Card Game (TCG) em 2004, época em que a franquia estava recuperando sua popularidade. Em 2008, a Play! Pokémon começou a organizar torneios competitivos para a série de jogos Pokémon, juntamente com o TCG, conhecidos coletivamente como Video Game Championships (VGC).\n[…]\nA partir de 2026, todos os torneios do VGC serão disputados em Pokémon Champions.\n[…]\nEm 31 de março de 2020, a Play! Pokémon cancelou o Campeonato Mundial de Pokémon de 2020 e suspendeu sua temporada de 2020 devido a preocupações com a saúde em relação à pandemia de COVID-19. Isso ocorreu após anúncios anteriores em março, que previam o cancelamento do European International Championships de 2020 e parte de sua temporada entre março e junho de 2020. Em 9 de fevereiro de 2021, foi anunciado que o Campeonato Mundial de Pokémon de 2021 seria adiado para 2022 pelos mesmos motivos.\n[…]\nEm maio de 2022, após seis temporadas de competições, a Play! Pokémon anunciou o fim do Pokkén Tournament Championship Series após a temporada de 2022.\n[…]\nNo final do evento de 2023, a The Pokémon Company anunciou que o Campeonato Mundial de Pokémon retornaria ao Havaí pela primeira vez desde que o último Campeonato Mundial no estado foi realizado em 2012. O evento de 2025 foi realizado em Anaheim, Califórnia, e foi a primeira edição do torneio a ter o Championship Sunday realizado em uma arena. O evento de 2026 foi realizado em São Francisco, Califórnia.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Pokémon VGC",
      "descricao": "Circuito competitivo oficial dos jogos principais de Pokémon, disputado em batalhas duplas e encerrado no Campeonato Mundial."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "No circuito oficial de Pokémon, disputado em batalhas duplas, cada treinador leva seis pokémon. Quantos deles ele escolhe para usar em cada partida?",
    "resposta": "Quatro",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_World_Championships"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_World_Championships",
        "situacao": "ok",
        "texto": "The Pokémon World Championships is an invite-only trading card game and esports event organized by Play! Pokémon. It is held annually in August and features games from the Pokémon series, including the Pokémon Trading Card Game, Pokémon video games and Pokémon Go. Players earn invitations to the World Championships based on their performance in qualifiers and other tournaments held throughout the \n[…]\nThe defending Video Game champions were Arash Ommati from Italy (Masters Division), Hayden McTavish from the United States (Senior Division), and Brendan Zheng from the United States (Junior Division). The opening ceremony of the event was attended by Junichi Masuda, the video game designer for the Pokémon franchise and a member of the board of directors of Game Freak.\n[…]\nThe tournament was transmitted with live streaming from the official Pokémon Twitch channel. The defending Video Game champions for the year were Se Jun Park from South Korea (Masters Division), Nikolai Zielinsky from the United States (Senior Division) and Kota Yamamoto from Japan (Junior Division).\n[…]\nPlayers could only gain an invitation to play in the Video Game World Championships by either being the 2014 Pokémon World Champions, or by obtaining enough Championship Points in their respective geographic zone designated by Play! Pokémon. However, the only exception to this rule are for players from Japan and South Korea, as their tournaments are not overseen by Play! Pokémon and their invites are governed through a different system of qualification.\n[…]\nThe 2015 Pokémon Video Game World Championship was intended to be played under two Swiss tournaments and one single-elimination tournament which would then determine the 2015 World Champions. As such, there are two types of invites:\n[…]\nThe Video Game Championships consisted of two Swiss tournaments and one single elimination tournament played across three days."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Campeonato_Mundial_de_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "Pokémon World Championships (Campeonato Mundial de Pokémon no Brasil) é um evento de e-Sports organizado pela Play! Pokémon, exclusivo para convidados. Realizado anualmente em agosto, apresenta jogos da série Pokémon, como os jogos eletrônicos de Pokémon, o Pokémon Trading Card Game, Pokémon GO, Pokémon Unite e Pokkén Tournament (até a edição de 2022).\n[…]\nO Campeonato Mundial Pokémon começou com o Pokémon Trading Card Game (TCG) em 2004, época em que a franquia estava recuperando sua popularidade. Em 2008, a Play! Pokémon começou a organizar torneios competitivos para a série de jogos Pokémon, juntamente com o TCG, conhecidos coletivamente como Video Game Championships (VGC).\n[…]\nAssim como no Campeonato de TCG, os jogadores competem entre si em suas respectivas categorias de idade (Junior, Senior e Master) em diferentes Torneios Premier, e a temporada culmina com os melhores jogadores recebendo um convite para jogar o Campeonato Mundial de Pokémon em agosto. Os torneios do VGC foram disputados com um jogo diferente a cada ano, principalmente o jogo Pokémon mais recente da série principal, até 2025.\n[…]\nA partir de 2026, todos os torneios do VGC serão disputados em Pokémon Champions.\n[…]\nNo início de janeiro de 2022, foi confirmado que Pokémon Unite seria jogado no Campeonato Mundial, tornando-se o mais novo jogo MOBA a ter um torneio oficial de e-sports, depois de League of Legends.\n[…]\nEm maio de 2022, após seis temporadas de competições, a Play! Pokémon anunciou o fim do Pokkén Tournament Championship Series após a temporada de 2022.\n[…]\nPlay! Pokémon é um programa que jogadores localizados em um país (ou seja, na América do Norte, Europa, América Latina e Oceania) competem em um calendário regular de torneios para obter Championship Points e recebem convites quando atingem um limite predeterminado pontos no final da temporada.",
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
