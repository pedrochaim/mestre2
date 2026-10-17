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
      "nome": "Jungle (coleção)",
      "descricao": "Segunda coleção do card game Pokémon lançada em inglês, em 1999, com pokémon como Scyther, Kangaskhan e Snorlax."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Em 1999, a segunda coleção do card game lançada em inglês reuniu pokémon de florestas e campos, como Scyther, Kangaskhan e Snorlax. Como ela se chama?",
    "resposta": "Jungle",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Jungle_(TCG)",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Jungle_(TCG)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game",
        "situacao": "ok",
        "texto": "The Pokémon Trading Card Game (Japanese: ポケモンカードゲーム, Hepburn: Pokemon Kādo Gēmu; \"Pokémon Card Game\"), abbreviated as PTCG or Pokémon TCG, is a tabletop and collectible card game developed by Creatures Inc. based on the Pokémon franchise. Originally published in Japan by Media Factory in 1996, publishing worldwide is currently handled by the Pokémon Company. In the United States, the game was orig\n[…]\nexcept for the error \"no-symbol\" Jungle cards).\n[…]\n\"The Pokémon Demo Game Plastic Pack\", \"Base Set\", along with the subsequent expansions \"Jungle\", \"Fossil\", \"Base Set 2\", \"Team Rocket\", \"Gym Heroes\", \"Gym Challenge\", make up the \"First Generation Sets\" published by the original English-edition publisher Wizards of the Coast.\n[…]\n\"Kangaskhan-Holo #115 Family Event Trophy Card\"\n[…]\nThe Pokémon Card Game: How to Play DS (ポケモンカードゲーム あそびかたDS, Pokemon Kādo Gēmu asobi kata DS) how-to-guide video game adaptation was released in Japan on August 5, 2011, for Nintendo DS, alongside three bundled 30-card decks, a play mat, and damage counters tokens.\n[…]\nUpon the full release, Pokémon Trading Card Game Live replaced Pokémon Trading Card Game Online, and the latter was discontinued shortly after. Crown Zenith was the final set supported on Pokémon Trading Card Game Online. Existing players of Pokémon Trading Card Game Online can transfer their account and in-game data to Pokémon Trading Card Game Live.\n[…]\nOn February 27, 2024, another Pokémon Trading Card Game-based video game for Android and iOS was announced in the Pokémon Presents presentation  developed by Creatures (company) and DeNA titled Pokémon Trading Card Game Pocket. The game features entirely original digital cards not present in the physical card game featuring dynamic artwork, as well as the ability to look into the artwork of certain cards to see obscured elements. The gameplay utilizes streamlined battle and trading systems."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game",
        "situacao": "ok",
        "texto": "Pokémon Trading Card Game ou Pokémon Estampas Ilustradas no Brasil (originalmente: ポケモンカードゲーム, Pokemon Card Game), é um jogo de cartas colecionáveis, desenvolvidos pela Creatures Inc. baseadas na franquia japonesa Pokémon. Foi publicado pela primeira vez em outubro de 1996, pela Media Factory, no Japão. Nos Estados Unidos, foi inicialmente publicado pela Wizards of the Coast; sendo assumida pela N\n[…]\nEstampas Ilustradas tem sido objeto de torneios informais e oficialmente sancionados. Os torneios oficiais são atualmente supervisionados pela Play! Pokémon, uma divisão da The Pokémon Company, e são hospedados em uma base local, nacional e internacional. Além disso, inúmeras adaptações de videogame foram publicadas, incluindo Pokémon Trading Card Game (Game Boy Color), a série Pokémon: Play It! (PC), Pokémon TCG Online (PC).\n[…]\nApós o fechamento do TCG Online em 2023, ele foi substituído por Pokémon Trading Card Game Live (PC) e Pokémon Trading Card Game Pocket (celular) em 2024.\n[…]\nOs Pokémon Básicos podem evoluir de um Bebê ou não. Eles geralmente têm HP baixo, são comuns, têm ataques fracos e não precisam de tanta energia. Um Pokémon Bebê é considerado um Básico com a habilidade \"Evolução do Bebê\" (ou Baby Evolution, se a carta estiver em inglês).\n[…]\nA partir de fevereiro de 2011, a Copag passa a produzir as cartas no Brasil. Lançando em português brasileiro e com traduções de alta qualidade. A coleção lançada é Maravilhas Secretas (Secret Wonders) com os temas Fluxo de Lava e Casa de Força.\n[…]\nNa carta do Pokémon de Estágio 1, deve estar escrito \"Evolui de…\" e o nome do Pokémon Básico.\n[…]\nColocar um Pokémon Básico no banco.\n[…]\nUsar uma carta Ferramenta Pokémon. (Apenas uma vez)\n[…]\nLigar uma carta Energy a um de seus Pokémon. (Apenas uma vez)\n[…]\nEvoluir um Pokémon\n[…]\n«Site oficial de Pokémon» (em inglês)\n[…]\n«Site oficial brasileiro do Pokémon Trading Card Game»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Fossil (coleção)",
      "descricao": "Terceira coleção do card game Pokémon lançada em inglês, em 1999, com Aerodactyl, Ditto e as aves lendárias de Kanto."
    },
    "angulo": "identidade",
    "tipo": "multipla",
    "pergunta": "Qual coleção do card game, de 1999, trouxe Aerodactyl, Ditto e as três aves lendárias de Kanto em cartas holográficas?",
    "resposta": "Fossil",
    "distratores": [
      "Jungle",
      "Team Rocket",
      "Gym Challenge"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Fossil_(TCG)",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Fossil_(TCG)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game",
        "situacao": "ok",
        "texto": "The Pokémon Trading Card Game (Japanese: ポケモンカードゲーム, Hepburn: Pokemon Kādo Gēmu; \"Pokémon Card Game\"), abbreviated as PTCG or Pokémon TCG, is a tabletop and collectible card game developed by Creatures Inc. based on the Pokémon franchise. Originally published in Japan by Media Factory in 1996, publishing worldwide is currently handled by the Pokémon Company. In the United States, the game was orig\n[…]\n\"The Pokémon Demo Game Plastic Pack\", \"Base Set\", along with the subsequent expansions \"Jungle\", \"Fossil\", \"Base Set 2\", \"Team Rocket\", \"Gym Heroes\", \"Gym Challenge\", make up the \"First Generation Sets\" published by the original English-edition publisher Wizards of the Coast.\n[…]\n\"Black Star Ishihara Signed GX Promo Card\"\n[…]\n\"1999 First Edition Shadowless Holographic Charizard #4\"\n[…]\nThe Pokémon Card Game: How to Play DS (ポケモンカードゲーム あそびかたDS, Pokemon Kādo Gēmu asobi kata DS) how-to-guide video game adaptation was released in Japan on August 5, 2011, for Nintendo DS, alongside three bundled 30-card decks, a play mat, and damage counters tokens.\n[…]\nUpon the full release, Pokémon Trading Card Game Live replaced Pokémon Trading Card Game Online, and the latter was discontinued shortly after. Crown Zenith was the final set supported on Pokémon Trading Card Game Online. Existing players of Pokémon Trading Card Game Online can transfer their account and in-game data to Pokémon Trading Card Game Live.\n[…]\nOn February 27, 2024, another Pokémon Trading Card Game-based video game for Android and iOS was announced in the Pokémon Presents presentation  developed by Creatures (company) and DeNA titled Pokémon Trading Card Game Pocket. The game features entirely original digital cards not present in the physical card game featuring dynamic artwork, as well as the ability to look into the artwork of certain cards to see obscured elements. The gameplay utilizes streamlined battle and trading systems."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game",
        "situacao": "ok",
        "texto": "Pokémon Trading Card Game ou Pokémon Estampas Ilustradas no Brasil (originalmente: ポケモンカードゲーム, Pokemon Card Game), é um jogo de cartas colecionáveis, desenvolvidos pela Creatures Inc. baseadas na franquia japonesa Pokémon. Foi publicado pela primeira vez em outubro de 1996, pela Media Factory, no Japão. Nos Estados Unidos, foi inicialmente publicado pela Wizards of the Coast; sendo assumida pela N\n[…]\nApós o fechamento do TCG Online em 2023, ele foi substituído por Pokémon Trading Card Game Live (PC) e Pokémon Trading Card Game Pocket (celular) em 2024.\n[…]\nA partir de fevereiro de 2011, a Copag passa a produzir as cartas no Brasil. Lançando em português brasileiro e com traduções de alta qualidade. A coleção lançada é Maravilhas Secretas (Secret Wonders) com os temas Fluxo de Lava e Casa de Força.\n[…]\nExistem 4 tipos de cartas Trainer: Normais; Estádio; Ferramentas Pokémon; e Suporte.\n[…]\nAs normais podem fazer você comprar cartas (como Bill), recuperar um Pokémon (como Poção), colocar um Pokémon Básico no campo (como Poké Ball), pegar uma carta Energy no baralho (como Busca de energia) e até evoluir para um Pokémon (como Fóssil Misterioso).\n[…]\nAs cartas de suporte, conhecidas como apoiador na tradução brasileira, só duram um turno. Elas têm muitos efeitos, como pegar três cartas e descartar uma (como TV Reporter) ou pegar três cartas suporte ou estádio e mostrar ao adversário (como Scott). O fato curioso dessas cartas é que, quando essas deixaram de ser Trainer, não receberam mais tradução, ficando, somente, Supporter.\n[…]\nDecks são um conjunto de cartas vendidas. Existem decks de iniciantes já feitos, mas também se pode fazer os próprios decks. Diferentes expansões têm diferentes cartas, e diferentes decks. Algumas das últimas expansões são:\n[…]\n«Site oficial brasileiro do Pokémon Trading Card Game»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Team Rocket (coleção)",
      "descricao": "Coleção do card game Pokémon lançada em inglês em 2000, que estreou as cartas de pokémon malvados da Equipe Rocket."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Na coleção Team Rocket, de 2000, apareceram versões malvadas de pokémon como Charizard e Blastoise. Que palavra inglesa vinha antes do nome deles?",
    "resposta": "Dark",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Team_Rocket_(TCG)",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Team_Rocket_(TCG)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game",
        "situacao": "ok",
        "texto": "The Pokémon Trading Card Game (Japanese: ポケモンカードゲーム, Hepburn: Pokemon Kādo Gēmu; \"Pokémon Card Game\"), abbreviated as PTCG or Pokémon TCG, is a tabletop and collectible card game developed by Creatures Inc. based on the Pokémon franchise. Originally published in Japan by Media Factory in 1996, publishing worldwide is currently handled by the Pokémon Company. In the United States, the game was orig\n[…]\nOther Pokémon attributes include Owner's Pokémon, Baby Pokémon, Crystal Pokémon, Dark Pokémon, Light Pokémon, Team Magma's cards, Team Aqua's cards, δ Delta Species, Pokémon Prime, Pokémon SP, Restored Pokémon, Team Plasma cards, Ancient Trait, Ultra Beasts, Single Strike, Rapid Strike, Fusion Strike, Ancient, and Future cards.\n[…]\n\"The Pokémon Demo Game Plastic Pack\", \"Base Set\", along with the subsequent expansions \"Jungle\", \"Fossil\", \"Base Set 2\", \"Team Rocket\", \"Gym Heroes\", \"Gym Challenge\", make up the \"First Generation Sets\" published by the original English-edition publisher Wizards of the Coast.\n[…]\n\"2000 Pokémon Neo Genesis 1st Edition Holo Lugia #9\"\n[…]\n\"Pokémon Blastoise #009/165R Commissioned Presentation Galaxy Star Hologram\"\n[…]\nEuropean countries can qualify for positions at the Pokémon Trading Card Game World Championships each year, through National Championships and European Rankings.\n[…]\nThe video game was accompanied by Pokémon Card GB2: Great Rocket-Dan Sanjō!, a Japan-exclusive sequel released in March 2001. In addition to the Pokémon Trading Card Game video game, Wizards has developed another digitized adaptation, Pokémon Play It!, which consisted of two versions that offer players a beginner's introduction to the different gameplay aspects of TCG as they slowly transitioned into \"Advanced Challenges\" in the 2nd version. The first version of Pokémon Play It!\n[…]\nwas released in 1999, followed by its sequel Pokémon Play It! Version 2 in 2000.\n[…]\nScrye Pokemon Price and Players Guide 2000"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game",
        "situacao": "ok",
        "texto": "Pokémon Trading Card Game ou Pokémon Estampas Ilustradas no Brasil (originalmente: ポケモンカードゲーム, Pokemon Card Game), é um jogo de cartas colecionáveis, desenvolvidos pela Creatures Inc. baseadas na franquia japonesa Pokémon. Foi publicado pela primeira vez em outubro de 1996, pela Media Factory, no Japão. Nos Estados Unidos, foi inicialmente publicado pela Wizards of the Coast; sendo assumida pela N\n[…]\nOs Bebês têm 30 ou 40 HP (pontos de vida), e são os mais fracos do jogo, mas têm uma habilidade em comum. Todas as vezes que forem atacados, o atacante joga uma moeda. Se der coroa, o ataque não funciona. Os Pokémon Bebê podem evoluir para um Básico. Esse tipo de carta deixou de aparecer depois da expansão EX Ruby and Sapphire, tornando-se a partir daí, tipo Básico.\n[…]\nOs Pokémon Básicos podem evoluir de um Bebê ou não. Eles geralmente têm HP baixo, são comuns, têm ataques fracos e não precisam de tanta energia. Um Pokémon Bebê é considerado um Básico com a habilidade \"Evolução do Bebê\" (ou Baby Evolution, se a carta estiver em inglês).\n[…]\nPara chegar no Estágio 1, os Pokémon precisam evoluir (Veja mais adiante em \"Evolução\") de um Básico. Normalmente têm 70, 80 ou 90 HP (pontos de vida). Os seus ataques são mais poderosos e precisam de mais energia. Eles também podem ser especiais, com a palavra \"Light\" (Luz) ou \"Dark\" (Sombrio) no nome.\n[…]\nNa carta do Pokémon de Estágio 1, deve estar escrito \"Evolui de…\" e o nome do Pokémon Básico.\n[…]\nVocê pode também \"Mega Evoluir\" um Pokémon, mas você passa seu turno, a não ser que tenha ligado ao seu Pokémon o item Elo Espiritual de (Nome do Pokémon), para não passar o turno.\n[…]\nColocar um Pokémon Básico no banco.\n[…]\nUsar uma carta Ferramenta Pokémon. (Apenas uma vez)\n[…]\nLigar uma carta Energy a um de seus Pokémon. (Apenas uma vez)\n[…]\nEvoluir um Pokémon\n[…]\n«Site oficial de Pokémon» (em inglês)\n[…]\n«Site oficial brasileiro do Pokémon Trading Card Game»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Gym Heroes (coleção)",
      "descricao": "Coleção do card game Pokémon de 2000 que estreou as cartas de pokémon pertencentes a líderes de ginásio de Kanto."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Em 2000, o card game estreou cartas de pokémon dos líderes de ginásio de Kanto, como Brock e Misty, numa coleção depois seguida por Gym Challenge. Qual era ela?",
    "resposta": "Gym Heroes",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Gym_Heroes_(TCG)",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Gym_Heroes_(TCG)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game",
        "situacao": "ok",
        "texto": "The Pokémon Trading Card Game (Japanese: ポケモンカードゲーム, Hepburn: Pokemon Kādo Gēmu; \"Pokémon Card Game\"), abbreviated as PTCG or Pokémon TCG, is a tabletop and collectible card game developed by Creatures Inc. based on the Pokémon franchise. Originally published in Japan by Media Factory in 1996, publishing worldwide is currently handled by the Pokémon Company. In the United States, the game was orig\n[…]\n\"The Pokémon Demo Game Plastic Pack\", \"Base Set\", along with the subsequent expansions \"Jungle\", \"Fossil\", \"Base Set 2\", \"Team Rocket\", \"Gym Heroes\", \"Gym Challenge\", make up the \"First Generation Sets\" published by the original English-edition publisher Wizards of the Coast.\n[…]\nThe video game was accompanied by Pokémon Card GB2: Great Rocket-Dan Sanjō!, a Japan-exclusive sequel released in March 2001. In addition to the Pokémon Trading Card Game video game, Wizards has developed another digitized adaptation, Pokémon Play It!, which consisted of two versions that offer players a beginner's introduction to the different gameplay aspects of TCG as they slowly transitioned into \"Advanced Challenges\" in the 2nd version. The first version of Pokémon Play It!\n[…]\nThe Pokémon Trading Card Game Online was a prominent video game adaptation of the Pokémon TCG. It was released on March 24, 2011, as Pokémon Trainer Challenge for Microsoft Windows, Android, macOS, iOS, and iPadOS. The game initially offered three starting decks but significantly expanded its card collection shortly after release. Card packs and premade decks could be redeemed using in-game currencies and rewards.\n[…]\nThe Pokémon Card Game: How to Play DS (ポケモンカードゲーム あそびかたDS, Pokemon Kādo Gēmu asobi kata DS) how-to-guide video game adaptation was released in Japan on August 5, 2011, for Nintendo DS, alongside three bundled 30-card decks, a play mat, and damage counters tokens.\n[…]\nScrye Pokemon Price and Players Guide 2000"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game",
        "situacao": "ok",
        "texto": "Pokémon Trading Card Game ou Pokémon Estampas Ilustradas no Brasil (originalmente: ポケモンカードゲーム, Pokemon Card Game), é um jogo de cartas colecionáveis, desenvolvidos pela Creatures Inc. baseadas na franquia japonesa Pokémon. Foi publicado pela primeira vez em outubro de 1996, pela Media Factory, no Japão. Nos Estados Unidos, foi inicialmente publicado pela Wizards of the Coast; sendo assumida pela N\n[…]\nEstampas Ilustradas tem sido objeto de torneios informais e oficialmente sancionados. Os torneios oficiais são atualmente supervisionados pela Play! Pokémon, uma divisão da The Pokémon Company, e são hospedados em uma base local, nacional e internacional. Além disso, inúmeras adaptações de videogame foram publicadas, incluindo Pokémon Trading Card Game (Game Boy Color), a série Pokémon: Play It! (PC), Pokémon TCG Online (PC).\n[…]\nApós o fechamento do TCG Online em 2023, ele foi substituído por Pokémon Trading Card Game Live (PC) e Pokémon Trading Card Game Pocket (celular) em 2024.\n[…]\nExistem 4 tipos de cartas Trainer: Normais; Estádio; Ferramentas Pokémon; e Suporte.\n[…]\nAs cartas estádio causam diversos efeitos, como impedir mais de cinco Pokémon no campo (como Ginásio Narrow), dar a chance de puxar várias cartas (como Speed Stadium) e muitos outros mais. O fato curioso dessas cartas é que quando essas deixaram de ser Trainer, não receberam mais tradução, ficando, somente, Stage.\n[…]\nCada jogador deve ter um deck de 60 cartas com pelo menos um Pokémon Básico. Um embaralha o deck do outro e coloca seis cartas viradas para baixo. Essas são as \"cartas prêmio\". Depois, os decks são devolvidos aos donos e cada um pega uma mão de sete cartas. Se não houver Pokémon Básicos, este reembaralha o deck e pega mais uma mão de sete cartas. O outro jogador tem a opção de pegar mais uma carta por nova mão do adversário.\n[…]\nEvoluir um Pokémon\n[…]\n«Site oficial brasileiro do Pokémon Trading Card Game»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Neo Genesis (coleção)",
      "descricao": "Primeira coleção do card game Pokémon com os pokémon de Johto, lançada em inglês em 2000."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Para receber os tipos Aço e Sombrio, estreantes em Gold e Silver, a coleção Neo Genesis criou dois novos tipos de energia no card game. Quais?",
    "resposta": "Metal e Darkness",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Neo_Genesis_(TCG)",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Neo_Genesis_(TCG)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game",
        "situacao": "ok",
        "texto": "The Pokémon Trading Card Game (Japanese: ポケモンカードゲーム, Hepburn: Pokemon Kādo Gēmu; \"Pokémon Card Game\"), abbreviated as PTCG or Pokémon TCG, is a tabletop and collectible card game developed by Creatures Inc. based on the Pokémon franchise. Originally published in Japan by Media Factory in 1996, publishing worldwide is currently handled by the Pokémon Company. In the United States, the game was orig\n[…]\nEnergy cards are attached to Pokémon in play to power their attacks. Only one Energy card may be attached per turn, unless a player has an effect that specifies otherwise. There are two categories of Energy cards: Basic Energy and Special Energy. The nine different Basic Energy types which correspond to Pokémon card types are Grass, Fire, Water, Lightning, Psychic, Fighting, Darkness, Metal, and Fairy.\n[…]\nPokémon Types are elemental attributes, determining the strengths and weaknesses for each Pokémon and its attacks. Pokémon take double damage from attacks of types they are weak to and less damage from attacks they resist. These type matchups offset one another in rock–paper–scissors-style relationships. Pokémon Types in the TCG include Fire, Fighting, Dragon, Lightning, Grass, Water, Fairy, Psychic, Darkness, Metal, and Colorless.\n[…]\nA simplified type system was adopted from the video games for use in the trading card game. Darkness and Metal types was introduced alongside the corresponding Pokémon Gold and Silver video game, the Dragon-type was introduced in the Japanese Dragon Selection set; and Fairy type was introduced in the XY set to correspond to its introduction in the franchise, but they were later categorized under Psychic type starting with Sword and Pokémon Shield.\n[…]\n\"Black Star Ishihara Signed GX Promo Card\"\n[…]\nEuropean countries can qualify for positions at the Pokémon Trading Card Game World Championships each year, through National Championships and European Rankings."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game",
        "situacao": "ok",
        "texto": "Pokémon Trading Card Game ou Pokémon Estampas Ilustradas no Brasil (originalmente: ポケモンカードゲーム, Pokemon Card Game), é um jogo de cartas colecionáveis, desenvolvidos pela Creatures Inc. baseadas na franquia japonesa Pokémon. Foi publicado pela primeira vez em outubro de 1996, pela Media Factory, no Japão. Nos Estados Unidos, foi inicialmente publicado pela Wizards of the Coast; sendo assumida pela N\n[…]\nApós o fechamento do TCG Online em 2023, ele foi substituído por Pokémon Trading Card Game Live (PC) e Pokémon Trading Card Game Pocket (celular) em 2024.\n[…]\nPara chegar no Estágio 1, os Pokémon precisam evoluir (Veja mais adiante em \"Evolução\") de um Básico. Normalmente têm 70, 80 ou 90 HP (pontos de vida). Os seus ataques são mais poderosos e precisam de mais energia. Eles também podem ser especiais, com a palavra \"Light\" (Luz) ou \"Dark\" (Sombrio) no nome.\n[…]\nExistiam 9 elementos de energia básica: Fogo, planta, água, elétrica, metal, fada, sombria, luta e psíquica. Com o início da série Espada e Escudo (Sword & Shield), a energia fada passou a ser representado pela energia psíquica.\n[…]\nAlém da energia psíquica, outras energias representam mais de um tipo de pokémon, como por exemplo a de luta, que representa também os pokémon de terra e de pedra; a de planta, que também vale para inseto; A de água, que também serve para gelo; Sombrio, que representa também fantasma e venenoso. Os pokémon do tipo normal e voador utilizam quaisquer energias para atacar e os do tipo dragão costumam utilizar combinações de energias (como fogo e água ou elétrico e psíquico) para produzir ataques.\n[…]\nAs normais podem fazer você comprar cartas (como Bill), recuperar um Pokémon (como Poção), colocar um Pokémon Básico no campo (como Poké Ball), pegar uma carta Energy no baralho (como Busca de energia) e até evoluir para um Pokémon (como Fóssil Misterioso).\n[…]\n«Site oficial brasileiro do Pokémon Trading Card Game»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Legendary Collection (coleção)",
      "descricao": "Coleção de reimpressões do card game Pokémon lançada em 2002, que estreou as cartas de brilho invertido."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Em 2002, uma coleção de reimpressões do card game estreou as cartas de brilho invertido, em que brilha a moldura e não a ilustração. Que coleção é essa?",
    "resposta": "Legendary Collection",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Legendary_Collection_(TCG)",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Legendary_Collection_(TCG)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game",
        "situacao": "ok",
        "texto": "The Pokémon Trading Card Game (Japanese: ポケモンカードゲーム, Hepburn: Pokemon Kādo Gēmu; \"Pokémon Card Game\"), abbreviated as PTCG or Pokémon TCG, is a tabletop and collectible card game developed by Creatures Inc. based on the Pokémon franchise. Originally published in Japan by Media Factory in 1996, publishing worldwide is currently handled by the Pokémon Company. In the United States, the game was orig\n[…]\nSimilarly, the \"Second Generation Sets\" published by Wizards comprised \"Neo Genesis\", \"Neo Discovery\", \"Southern Islands\", \"Neo Revelation\", \"Neo Destiny\", \"Legendary Collection\", \"Expedition Base Set\", \"Aquapolis\", and \"Skyridge\". The \"Second Generation Sets\" is the last collection set published by Wizards before Nintendo transferred the publishing right to The Pokémon Company In July 2003.\n[…]\nThe \"Pikachu Illustrator\" is the rarest and most expensive Pokémon card ever sold in history, and it was acquired by the celebrity and collector Logan Paul for $5,275,000 in July 2021. In February 2026, it was sold for $16.5 million.\n[…]\nIn addition to the collectible aspect of the card game, The Pokémon Company International (formerly known as Pokémon USA) has also organized Play! Pokémon, a program run by Pokémon Organized Play (POP), players can compete against others in tournaments and earn player points, two-card booster packets for promotional sets, badges, stickers and other prizes. POP are governed by League Leaders and League Owners. Play!\n[…]\nThe Pokémon Trading Card Game Online was a prominent video game adaptation of the Pokémon TCG. It was released on March 24, 2011, as Pokémon Trainer Challenge for Microsoft Windows, Android, macOS, iOS, and iPadOS. The game initially offered three starting decks but significantly expanded its card collection shortly after release. Card packs and premade decks could be redeemed using in-game currencies and rewards."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game",
        "situacao": "ok",
        "texto": "Pokémon Trading Card Game ou Pokémon Estampas Ilustradas no Brasil (originalmente: ポケモンカードゲーム, Pokemon Card Game), é um jogo de cartas colecionáveis, desenvolvidos pela Creatures Inc. baseadas na franquia japonesa Pokémon. Foi publicado pela primeira vez em outubro de 1996, pela Media Factory, no Japão. Nos Estados Unidos, foi inicialmente publicado pela Wizards of the Coast; sendo assumida pela N\n[…]\nEstampas Ilustradas tem sido objeto de torneios informais e oficialmente sancionados. Os torneios oficiais são atualmente supervisionados pela Play! Pokémon, uma divisão da The Pokémon Company, e são hospedados em uma base local, nacional e internacional. Além disso, inúmeras adaptações de videogame foram publicadas, incluindo Pokémon Trading Card Game (Game Boy Color), a série Pokémon: Play It! (PC), Pokémon TCG Online (PC).\n[…]\nApós o fechamento do TCG Online em 2023, ele foi substituído por Pokémon Trading Card Game Live (PC) e Pokémon Trading Card Game Pocket (celular) em 2024.\n[…]\nAs cartas de Pokémon são divididas em Pokémon Bebê, Básico, Estágio 1, Estágio 2, Estágio LV.X, Legend, Mega, EX, GX, V, VMax e ex tera\n[…]\nA partir de fevereiro de 2011, a Copag passa a produzir as cartas no Brasil. Lançando em português brasileiro e com traduções de alta qualidade. A coleção lançada é Maravilhas Secretas (Secret Wonders) com os temas Fluxo de Lava e Casa de Força.\n[…]\nAs normais podem fazer você comprar cartas (como Bill), recuperar um Pokémon (como Poção), colocar um Pokémon Básico no campo (como Poké Ball), pegar uma carta Energy no baralho (como Busca de energia) e até evoluir para um Pokémon (como Fóssil Misterioso).\n[…]\nDecks são um conjunto de cartas vendidas. Existem decks de iniciantes já feitos, mas também se pode fazer os próprios decks. Diferentes expansões têm diferentes cartas, e diferentes decks. Algumas das últimas expansões são:\n[…]\n«Site oficial brasileiro do Pokémon Trading Card Game»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Expedition Base Set (coleção)",
      "descricao": "Primeira coleção da série e-Card do card game Pokémon, lançada em 2002, com cartas compatíveis com o e-Reader."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Na coleção Expedition, de 2002, as cartas traziam tiras de código na borda, que podiam ser lidas por qual acessório do Game Boy Advance?",
    "resposta": "e-Reader",
    "fonte": [
      "https://en.wikipedia.org/wiki/Nintendo_e-Reader",
      "https://bulbapedia.bulbagarden.net/wiki/Expedition_Base_Set_(TCG)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Nintendo_e-Reader",
        "situacao": "ok",
        "texto": "The Nintendo e-Reader, commonly abbreviated as e-Reader, is an add-on accessory by Japanese manufacturer Nintendo for its Game Boy Advance handheld video game console. It has an LED scanner that reads \"e-Reader cards\" — paper cards with specially encoded data printed on them as dot codes. It was released in Japan in December 2001 and in North America in September 2002.\n[…]\nTwo promotional cards come packed in with every US and Australian copy of the game sold. Five additional cards were released for a very short time and were packed in with the game and sold exclusively at Walmart stores in the US. These five cards have become extremely hard to find, as the e-Reader was discontinued in North America not long after the release of the game. The two e-Reader cards that were initially bundled with Super Mario Advance 4 have since been discontinued.\n[…]\nThe Japanese Mega Man games for GBA use Card Reader e+ cards to customize their game with the e-Reader +. The cards cause various effects, such as Base HP, Abilities, Buster Changes, Charge Shot Modifications, and B+ Back Abilities. There are also Item Cards which can give out sets of Battle Chips, Sub Chips, BugFrags, Zenny, or Navi Customizer Programs (only introduced in Mega Man Battle Network 6 Modification Card Part 1 & Battle Network 6 Modification Card Part 2).\n[…]\nE3 2002 Promo Pack: A very rare promotional pack given away at the 2002 E3 conference, this pack contains a variant Manhole e-card, two Pokémon trading card game cards and a Kirby card that, when scanned, tells the player if they have won a prize. The Kirby card is considered to be the rarest e-Reader card produced.\n[…]\nMario Party-e Promo Card: While not an e-Reader Card (the card contains no dot codes), a promotional \"Two Coin Card\" was packed with GamePro magazine and can be fully used with the Mario Party-e game."
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Expedition_Base_Set_(TCG)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Nintendo_e-Reader",
        "situacao": "ok",
        "texto": "Nintendo e-Reader é um dispositivo feito pela Nintendo para seu sistema portátil Game Boy Advance. Tem um digitalizador à laser que lê os \"cartões e-Reader\", que são cartões de papel com dados especialmente codificados impressos neles. O e-Reader não é nem um console nem um acessório, mas um dispositivo adicional, como o Sistema de Disco do Famicom.\n[…]\nGame Boy Advance",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Ancient Mew",
      "descricao": "Carta promocional de Mew, escrita numa língua inventada, distribuída nos cinemas americanos que exibiam o filme Pokémon 2000."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Nos cinemas americanos, quem ia ver Pokémon 2000 ganhava uma carta promocional de Mew, com textos numa escrita inventada. Por que nome essa carta ficou conhecida?",
    "resposta": "Ancient Mew",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_the_Movie_2000",
      "https://bulbapedia.bulbagarden.net/wiki/Ancient_Mew"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_the_Movie_2000",
        "situacao": "ok",
        "texto": "Pokémon the Movie 2000 is a 1999 Japanese animated fantasy adventure film directed by Kunihiko Yuyama. It is the second film of the Pokémon anime series and of Pokémon the Series: The Beginning.\n[…]\nAn ancient prophecy predicts that a conflict between \"the Titans of Fire, Ice, and Lightning\" will only be quelled by the \"Water's Great Guardian\" with the help of a \"Chosen One\". Lawrence III, a Pokémon collector, plans to capture the legendary Pokémon Articuno, Zapdos, and Moltres and sets out in his flying fortress to the Orange Islands, where he locates and captures Moltres.\n[…]\nPokémon The Movie 2000 was released on VHS and DVD on November 14, 2000.\n[…]\nThe North American soundtrack was released alongside the film in 2000 by WB's then-sister company Atlantic Records on compact disc and compact cassette and includes many songs by popular artists, many of which do not appear in the film. In the English dub, Donna Summer sings the closing song in the film, \"The Power of One\". The melody of has been noted as having a close resemblance to Rick Wakeman's theme for the film The Burning, with the two opening bars being identical.\n[…]\nPokémon the Movie 2000 Original Motion Picture Score is the orchestral soundtrack to the movie. The CD was originally released in some European countries in 2000. In 2004, it became available for download worldwide on iTunes.\n[…]\nList of Pokémon films\n[…]\nPokémon the Movie 2000 at IMDb\n[…]\nPokémon the Movie 2000 (anime) at Anime News Network's encyclopedia\n[…]\nPokémon the Movie 2000 at Rotten Tomatoes"
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Ancient_Mew",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon%3A_The_Movie_2000",
        "situacao": "ok",
        "texto": "Pokémon: The Movie 2000: The Power of One, geralmente referido como Pokémon O Filme 2000, originalmente lançado no Japão como Pocket Monsters the Movie: Revelation Lugia (劇場版ポケットモンスター 幻のポケモン ルギア爆誕, Gekijōban Poketto Monsutā Maboroshi no Pokemon Rugia Bakutan; lit. \"Mirage Pokémon: Lugia's Explosive Birth\"), é um filme de animação de 1999 dirigido por Kunihiko Yuyama. É o segundo filme da franquia \n[…]\nMundo Pokémon - SNZ\n[…]\nPokémon World - Youngstown feat. Nobody's Angel\n[…]\nPokémon: O Filme 2000 foi lançado pela 1ª vez nos cinemas japoneses no dia 17 de Julho de 1999 no Japão pela distribuição da Toho. No ano seguinte, o filme foi lançado no dia 21 de Julho de 2000 nos Estados Unidos, no Canadá e no Brasil, pelo licenciamento da 4Kids Entertainment e da Kids' WB. Foi exibido em Portugal no dia 15 de Dezembro no mesmo ano.\n[…]\nApós o lançamento nos cinemas, Pokémon: O Filme 2000 foi lançado em VHS no Japão em 2 de fevereiro de 2000 e também foi lançado em DVD em 22 de novembro de 2000. No mesmo ano, foi lançado em VHS e DVD nos Estados Unidos em 14 de novembro de 2000 e no Brasil pela Warner Home Video.\n[…]\nApós os anos seguintes, foi relançado em DVD no dia 21 de setembro de 2007 no Japão, fazendo parte da coleção Pikachu the Movie Box 1998-2002. Nos Estados Unidos, foi relançado em DVD no dia 7 de abril de 2009 pela Warner Home Video, fazendo parte da coleção Pokémon: The First Three Movies. Em 28 de novembro de 2012, o filme foi remasterizado digitalmente e lançado pela 1ª vez em Blu-ray, fazendo parte da coleção Pikachu the Movie Premium Box 1998-2010.\n[…]\nNos Estados Unidos, foi relançado em DVD e lançado em Blu-ray no dia 2 de fevereiro de 2016 pela Viz Media, fazendo parte da coleção Pokémon: The Movies 1-3 Collection, depois foi relançado em 2 de outubro de 2018 em formato padrão. Em 2017, está disponível em formato digital no Brasil pela iTunes e pelo Google Play.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Cartas Gold Star",
      "descricao": "Cartas raríssimas da era EX do card game Pokémon, com pokémon de cor rara e uma estrela ao lado do nome."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Na era EX do card game, raríssimas cartas mostravam pokémon brilhantes, de cor rara, com uma estrela ao lado do nome. Como os colecionadores as chamam?",
    "resposta": "Gold Star",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_%E2%98%86_(TCG)",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_%E2%98%86_(TCG)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game",
        "situacao": "ok",
        "texto": "The Pokémon Trading Card Game (Japanese: ポケモンカードゲーム, Hepburn: Pokemon Kādo Gēmu; \"Pokémon Card Game\"), abbreviated as PTCG or Pokémon TCG, is a tabletop and collectible card game developed by Creatures Inc. based on the Pokémon franchise. Originally published in Japan by Media Factory in 1996, publishing worldwide is currently handled by the Pokémon Company. In the United States, the game was orig\n[…]\nA simplified type system was adopted from the video games for use in the trading card game. Darkness and Metal types was introduced alongside the corresponding Pokémon Gold and Silver video game, the Dragon-type was introduced in the Japanese Dragon Selection set; and Fairy type was introduced in the XY set to correspond to its introduction in the franchise, but they were later categorized under Psychic type starting with Sword and Pokémon Shield.\n[…]\nPokémon card collectables are valued based on their rarity, though some lower rarity cards can be worth more than higher rarity ones. This depends on the popularity of the card within competitive play, the age of the card, number of cards printed, and various other factors. From the lowest to the highest level, cards rarities are indicated by different shapes on the bottom corner, i.e. Common (circle), Uncommon (diamond), and Rare (star).\n[…]\n\"20th Anniversary 24-karat real-gold Pikachu\"\n[…]\n\"Espeon and Umbreon Gold Star POP Series 5\"\n[…]\n\"Black Star Ishihara Signed GX Promo Card\"\n[…]\n\"Pokémon Blastoise #009/165R Commissioned Presentation Galaxy Star Hologram\"\n[…]\nUpon the full release, Pokémon Trading Card Game Live replaced Pokémon Trading Card Game Online, and the latter was discontinued shortly after. Crown Zenith was the final set supported on Pokémon Trading Card Game Online. Existing players of Pokémon Trading Card Game Online can transfer their account and in-game data to Pokémon Trading Card Game Live.\n[…]\nScrye Pokemon Price and Players Guide 2000"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game",
        "situacao": "ok",
        "texto": "Pokémon Trading Card Game ou Pokémon Estampas Ilustradas no Brasil (originalmente: ポケモンカードゲーム, Pokemon Card Game), é um jogo de cartas colecionáveis, desenvolvidos pela Creatures Inc. baseadas na franquia japonesa Pokémon. Foi publicado pela primeira vez em outubro de 1996, pela Media Factory, no Japão. Nos Estados Unidos, foi inicialmente publicado pela Wizards of the Coast; sendo assumida pela N\n[…]\nEstampas Ilustradas tem sido objeto de torneios informais e oficialmente sancionados. Os torneios oficiais são atualmente supervisionados pela Play! Pokémon, uma divisão da The Pokémon Company, e são hospedados em uma base local, nacional e internacional. Além disso, inúmeras adaptações de videogame foram publicadas, incluindo Pokémon Trading Card Game (Game Boy Color), a série Pokémon: Play It! (PC), Pokémon TCG Online (PC).\n[…]\nApós o fechamento do TCG Online em 2023, ele foi substituído por Pokémon Trading Card Game Live (PC) e Pokémon Trading Card Game Pocket (celular) em 2024.\n[…]\nExistem 4 tipos de cartas Trainer: Normais; Estádio; Ferramentas Pokémon; e Suporte.\n[…]\nAs cartas estádio causam diversos efeitos, como impedir mais de cinco Pokémon no campo (como Ginásio Narrow), dar a chance de puxar várias cartas (como Speed Stadium) e muitos outros mais. O fato curioso dessas cartas é que quando essas deixaram de ser Trainer, não receberam mais tradução, ficando, somente, Stage.\n[…]\nCada jogador deve ter um deck de 60 cartas com pelo menos um Pokémon Básico. Um embaralha o deck do outro e coloca seis cartas viradas para baixo. Essas são as \"cartas prêmio\". Depois, os decks são devolvidos aos donos e cada um pega uma mão de sete cartas. Se não houver Pokémon Básicos, este reembaralha o deck e pega mais uma mão de sete cartas. O outro jogador tem a opção de pegar mais uma carta por nova mão do adversário.\n[…]\nEvoluir um Pokémon\n[…]\n«Site oficial brasileiro do Pokémon Trading Card Game»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Pokémon LV.X",
      "descricao": "Tipo de carta da era Diamond e Pearl do card game Pokémon, colocada por cima do pokémon ativo de mesmo nome."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Na era Diamond e Pearl do card game, um tipo de carta era posto por cima do pokémon ativo de mesmo nome, como uma evolução extra. Como ele se chama?",
    "resposta": "Pokémon LV.X (nível X)",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_LV.X_(TCG)",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_LV.X_(TCG)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game",
        "situacao": "ok",
        "texto": "The Pokémon Trading Card Game (Japanese: ポケモンカードゲーム, Hepburn: Pokemon Kādo Gēmu; \"Pokémon Card Game\"), abbreviated as PTCG or Pokémon TCG, is a tabletop and collectible card game developed by Creatures Inc. based on the Pokémon franchise. Originally published in Japan by Media Factory in 1996, publishing worldwide is currently handled by the Pokémon Company. In the United States, the game was orig\n[…]\nTrainer cards create a wide range of effects that influence the game, such as drawing cards, healing Pokémon, removing Energy from opposing Pokémon, or recovering cards from the discard pile. Before the Diamond & Pearl series, all non-Pokémon and non-Energy cards were simply classified as Trainer cards. Afterward, they were divided into three categories: Item, Stadium, and Supporter.\n[…]\nThe Pokémon Card Game: How to Play DS (ポケモンカードゲーム あそびかたDS, Pokemon Kādo Gēmu asobi kata DS) how-to-guide video game adaptation was released in Japan on August 5, 2011, for Nintendo DS, alongside three bundled 30-card decks, a play mat, and damage counters tokens.\n[…]\nUpon the full release, Pokémon Trading Card Game Live replaced Pokémon Trading Card Game Online, and the latter was discontinued shortly after. Crown Zenith was the final set supported on Pokémon Trading Card Game Online. Existing players of Pokémon Trading Card Game Online can transfer their account and in-game data to Pokémon Trading Card Game Live.\n[…]\nOn February 27, 2024, another Pokémon Trading Card Game-based video game for Android and iOS was announced in the Pokémon Presents presentation  developed by Creatures (company) and DeNA titled Pokémon Trading Card Game Pocket. The game features entirely original digital cards not present in the physical card game featuring dynamic artwork, as well as the ability to look into the artwork of certain cards to see obscured elements. The gameplay utilizes streamlined battle and trading systems."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game",
        "situacao": "ok",
        "texto": "Pokémon Trading Card Game ou Pokémon Estampas Ilustradas no Brasil (originalmente: ポケモンカードゲーム, Pokemon Card Game), é um jogo de cartas colecionáveis, desenvolvidos pela Creatures Inc. baseadas na franquia japonesa Pokémon. Foi publicado pela primeira vez em outubro de 1996, pela Media Factory, no Japão. Nos Estados Unidos, foi inicialmente publicado pela Wizards of the Coast; sendo assumida pela N\n[…]\nEstampas Ilustradas tem sido objeto de torneios informais e oficialmente sancionados. Os torneios oficiais são atualmente supervisionados pela Play! Pokémon, uma divisão da The Pokémon Company, e são hospedados em uma base local, nacional e internacional. Além disso, inúmeras adaptações de videogame foram publicadas, incluindo Pokémon Trading Card Game (Game Boy Color), a série Pokémon: Play It! (PC), Pokémon TCG Online (PC).\n[…]\nApós o fechamento do TCG Online em 2023, ele foi substituído por Pokémon Trading Card Game Live (PC) e Pokémon Trading Card Game Pocket (celular) em 2024.\n[…]\nOs Bebês têm 30 ou 40 HP (pontos de vida), e são os mais fracos do jogo, mas têm uma habilidade em comum. Todas as vezes que forem atacados, o atacante joga uma moeda. Se der coroa, o ataque não funciona. Os Pokémon Bebê podem evoluir para um Básico. Esse tipo de carta deixou de aparecer depois da expansão EX Ruby and Sapphire, tornando-se a partir daí, tipo Básico.\n[…]\nOs Pokémon Básicos podem evoluir de um Bebê ou não. Eles geralmente têm HP baixo, são comuns, têm ataques fracos e não precisam de tanta energia. Um Pokémon Bebê é considerado um Básico com a habilidade \"Evolução do Bebê\" (ou Baby Evolution, se a carta estiver em inglês).\n[…]\nNa carta do Pokémon de Estágio 1, deve estar escrito \"Evolui de…\" e o nome do Pokémon Básico.\n[…]\nUsar uma carta Ferramenta Pokémon. (Apenas uma vez)\n[…]\nLigar uma carta Energy a um de seus Pokémon. (Apenas uma vez)\n[…]\nEvoluir um Pokémon\n[…]\n«Site oficial brasileiro do Pokémon Trading Card Game»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Pokémon BREAK",
      "descricao": "Tipo de carta da era X e Y do card game Pokémon, impressa na horizontal e colocada sobre o pokémon que evolui."
    },
    "angulo": "identidade",
    "tipo": "multipla",
    "pergunta": "Que tipo de carta da era X e Y, impressa na horizontal e com fundo dourado, era colocada por cima do pokémon que evoluía?",
    "resposta": "Pokémon BREAK",
    "distratores": [
      "Pokémon LV.X",
      "Pokémon GX",
      "Pokémon VMAX"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_BREAK_(TCG)",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_BREAK_(TCG)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game",
        "situacao": "ok",
        "texto": "The Pokémon Trading Card Game (Japanese: ポケモンカードゲーム, Hepburn: Pokemon Kādo Gēmu; \"Pokémon Card Game\"), abbreviated as PTCG or Pokémon TCG, is a tabletop and collectible card game developed by Creatures Inc. based on the Pokémon franchise. Originally published in Japan by Media Factory in 1996, publishing worldwide is currently handled by the Pokémon Company. In the United States, the game was orig\n[…]\nTherefore, we state that you are an Officially Authorized Pokémon Card Illustrator and admire your skill.\"\n[…]\nwas released in 1999, followed by its sequel Pokémon Play It! Version 2 in 2000.\n[…]\nOn September 20, 2021, another Pokémon Trading Card Game-based video game was announced, titled Pokémon Trading Card Game Live. A closed beta of Pokémon Trading Card Game Live was released for Canadian players on February 22, 2022. Later, a global beta of Pokémon Trading Card Game Live was released on November 15, 2022 on Android, iOS, Microsoft Windows. The game is now also available on macOS.\n[…]\nUpon the full release, Pokémon Trading Card Game Live replaced Pokémon Trading Card Game Online, and the latter was discontinued shortly after. Crown Zenith was the final set supported on Pokémon Trading Card Game Online. Existing players of Pokémon Trading Card Game Online can transfer their account and in-game data to Pokémon Trading Card Game Live.\n[…]\nOn February 27, 2024, another Pokémon Trading Card Game-based video game for Android and iOS was announced in the Pokémon Presents presentation  developed by Creatures (company) and DeNA titled Pokémon Trading Card Game Pocket. The game features entirely original digital cards not present in the physical card game featuring dynamic artwork, as well as the ability to look into the artwork of certain cards to see obscured elements. The gameplay utilizes streamlined battle and trading systems.\n[…]\nScrye Pokemon Price and Players Guide 2000"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game",
        "situacao": "ok",
        "texto": "Pokémon Trading Card Game ou Pokémon Estampas Ilustradas no Brasil (originalmente: ポケモンカードゲーム, Pokemon Card Game), é um jogo de cartas colecionáveis, desenvolvidos pela Creatures Inc. baseadas na franquia japonesa Pokémon. Foi publicado pela primeira vez em outubro de 1996, pela Media Factory, no Japão. Nos Estados Unidos, foi inicialmente publicado pela Wizards of the Coast; sendo assumida pela N\n[…]\nOs Bebês têm 30 ou 40 HP (pontos de vida), e são os mais fracos do jogo, mas têm uma habilidade em comum. Todas as vezes que forem atacados, o atacante joga uma moeda. Se der coroa, o ataque não funciona. Os Pokémon Bebê podem evoluir para um Básico. Esse tipo de carta deixou de aparecer depois da expansão EX Ruby and Sapphire, tornando-se a partir daí, tipo Básico.\n[…]\nOs Pokémon Básicos podem evoluir de um Bebê ou não. Eles geralmente têm HP baixo, são comuns, têm ataques fracos e não precisam de tanta energia. Um Pokémon Bebê é considerado um Básico com a habilidade \"Evolução do Bebê\" (ou Baby Evolution, se a carta estiver em inglês).\n[…]\nAs normais podem fazer você comprar cartas (como Bill), recuperar um Pokémon (como Poção), colocar um Pokémon Básico no campo (como Poké Ball), pegar uma carta Energy no baralho (como Busca de energia) e até evoluir para um Pokémon (como Fóssil Misterioso).\n[…]\nNa carta do Pokémon de Estágio 1, deve estar escrito \"Evolui de…\" e o nome do Pokémon Básico.\n[…]\nCada jogador deve ter um deck de 60 cartas com pelo menos um Pokémon Básico. Um embaralha o deck do outro e coloca seis cartas viradas para baixo. Essas são as \"cartas prêmio\". Depois, os decks são devolvidos aos donos e cada um pega uma mão de sete cartas. Se não houver Pokémon Básicos, este reembaralha o deck e pega mais uma mão de sete cartas. O outro jogador tem a opção de pegar mais uma carta por nova mão do adversário.\n[…]\nLigar uma carta Energy a um de seus Pokémon. (Apenas uma vez)\n[…]\nEvoluir um Pokémon",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Pokémon GX",
      "descricao": "Tipo de carta da era Sun e Moon do card game Pokémon, com um ataque GX especial."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Os pokémon GX, da era Sun e Moon do card game, tinham ataques GX poderosíssimos. Quantos ataques desses o jogador podia usar em toda a partida?",
    "resposta": "Apenas um",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon-GX_(TCG)",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon-GX_(TCG)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game",
        "situacao": "ok",
        "texto": "The Pokémon Trading Card Game (Japanese: ポケモンカードゲーム, Hepburn: Pokemon Kādo Gēmu; \"Pokémon Card Game\"), abbreviated as PTCG or Pokémon TCG, is a tabletop and collectible card game developed by Creatures Inc. based on the Pokémon franchise. Originally published in Japan by Media Factory in 1996, publishing worldwide is currently handled by the Pokémon Company. In the United States, the game was orig\n[…]\n\"Black Star Ishihara Signed GX Promo Card\"\n[…]\nEuropean countries can qualify for positions at the Pokémon Trading Card Game World Championships each year, through National Championships and European Rankings.\n[…]\nOn September 20, 2021, another Pokémon Trading Card Game-based video game was announced, titled Pokémon Trading Card Game Live. A closed beta of Pokémon Trading Card Game Live was released for Canadian players on February 22, 2022. Later, a global beta of Pokémon Trading Card Game Live was released on November 15, 2022 on Android, iOS, Microsoft Windows. The game is now also available on macOS.\n[…]\nUpon the full release, Pokémon Trading Card Game Live replaced Pokémon Trading Card Game Online, and the latter was discontinued shortly after. Crown Zenith was the final set supported on Pokémon Trading Card Game Online. Existing players of Pokémon Trading Card Game Online can transfer their account and in-game data to Pokémon Trading Card Game Live.\n[…]\nOn February 27, 2024, another Pokémon Trading Card Game-based video game for Android and iOS was announced in the Pokémon Presents presentation  developed by Creatures (company) and DeNA titled Pokémon Trading Card Game Pocket. The game features entirely original digital cards not present in the physical card game featuring dynamic artwork, as well as the ability to look into the artwork of certain cards to see obscured elements. The gameplay utilizes streamlined battle and trading systems.\n[…]\nScrye Pokemon Price and Players Guide 2000"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game",
        "situacao": "ok",
        "texto": "Pokémon Trading Card Game ou Pokémon Estampas Ilustradas no Brasil (originalmente: ポケモンカードゲーム, Pokemon Card Game), é um jogo de cartas colecionáveis, desenvolvidos pela Creatures Inc. baseadas na franquia japonesa Pokémon. Foi publicado pela primeira vez em outubro de 1996, pela Media Factory, no Japão. Nos Estados Unidos, foi inicialmente publicado pela Wizards of the Coast; sendo assumida pela N\n[…]\nOs Pokémon também podem ajustar outros fatores de jogabilidade e evoluir para estágios mais poderosos. Os jogadores podem usar cartas de Treinador para comprar cartas em suas mãos, prejudicar seu oponente ou executar outras funções de jogo. Os efeitos das cartas geralmente dependem de elementos de sorte, como jogadas de dados e cara ou coroa, para decidir um resultado. A jogabilidade depende do uso de contadores para indicar o dano causado e os efeitos de status.\n[…]\nApós o fechamento do TCG Online em 2023, ele foi substituído por Pokémon Trading Card Game Live (PC) e Pokémon Trading Card Game Pocket (celular) em 2024.\n[…]\nPara chegar no Estágio 1, os Pokémon precisam evoluir (Veja mais adiante em \"Evolução\") de um Básico. Normalmente têm 70, 80 ou 90 HP (pontos de vida). Os seus ataques são mais poderosos e precisam de mais energia. Eles também podem ser especiais, com a palavra \"Light\" (Luz) ou \"Dark\" (Sombrio) no nome.\n[…]\nOs Pokémon no Estágio 2 são os fortes. Têm ataques que precisam de mais energia. Geralmente são raros e holográficos; e podem ter entre 90 a 140 HP. São evoluídos dos Pokémon do Estágio 1.\n[…]\nPegar uma carta do deck. (Obrigatório) (Apenas uma vez) (Inicial)\n[…]\nUsar uma carta Trainer normal.\n[…]\nUsar uma carta Ferramenta Pokémon. (Apenas uma vez)\n[…]\nUsar uma carta Estádio. (Apenas uma vez)\n[…]\nLigar uma carta Energy a um de seus Pokémon. (Apenas uma vez)\n[…]\nEvoluir um Pokémon\n[…]\nAtacar (Apenas uma vez) (Final)\n[…]\n«Site oficial de Pokémon» (em inglês)\n[…]\n«Site oficial brasileiro do Pokémon Trading Card Game»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "TAG TEAM (card game)",
      "descricao": "Tipo de carta da era Sun e Moon do card game Pokémon que reúne dois ou mais pokémon numa única carta GX."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Na era Sun e Moon do card game, que tipo de carta reunia dois pokémon numa só, como Pikachu e Zekrom ou Eevee e Snorlax?",
    "resposta": "TAG TEAM",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/TAG_TEAM_(TCG)",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/TAG_TEAM_(TCG)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game",
        "situacao": "ok",
        "texto": "The Pokémon Trading Card Game (Japanese: ポケモンカードゲーム, Hepburn: Pokemon Kādo Gēmu; \"Pokémon Card Game\"), abbreviated as PTCG or Pokémon TCG, is a tabletop and collectible card game developed by Creatures Inc. based on the Pokémon franchise. Originally published in Japan by Media Factory in 1996, publishing worldwide is currently handled by the Pokémon Company. In the United States, the game was orig\n[…]\nWhile most Pokémon have only one type, three exceptions are EX Team Magma vs Team Aqua which introduced dual-type Pokémon that have two different types, as well as XY and HeartGold and SoulSilver series sets. Dual types were also utilized in Pokémon-Legend cards from HeartGold and SoulSilver. In August 2016, XY Steam Siege reintroduced the dual-type mechanic, but this time on regular Pokémon and Pokémon-EX.\n[…]\n\"The Pokémon Demo Game Plastic Pack\", \"Base Set\", along with the subsequent expansions \"Jungle\", \"Fossil\", \"Base Set 2\", \"Team Rocket\", \"Gym Heroes\", \"Gym Challenge\", make up the \"First Generation Sets\" published by the original English-edition publisher Wizards of the Coast.\n[…]\nUnlike the basic Common and Uncommon, Rare collectables are divided into many different sub-groups, comprising Holo Rare, Reverse Holo, Half Art/Half Body, Full Art/Full Body, Secret Rare, Ultra Rare, Rainbow Rare, Promo, and card mechanics including EX/GX, V/VSTAR/VMAX, and Tag Team.\n[…]\nPSA-graded 10 \"Pikachu Illustrator\".\n[…]\nThis card was created as a prize for the 1997-1998 Pokémon design contests organized by the Japanese manga-magazine CoroCoro Comic and with only 41 copies printed, it is the only Pokémon card to say \"Illustrator\" instead of \"Trainer\" like other Trainer cards. The card was illustrated by Atsuko Nishida, the original designer of the Pokémon species including Pikachu. The Japanese imprint reads: \"We certify that your illustration is an excellent entry in the Pokémon Card Game Illust Contest."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game",
        "situacao": "ok",
        "texto": "Pokémon Trading Card Game ou Pokémon Estampas Ilustradas no Brasil (originalmente: ポケモンカードゲーム, Pokemon Card Game), é um jogo de cartas colecionáveis, desenvolvidos pela Creatures Inc. baseadas na franquia japonesa Pokémon. Foi publicado pela primeira vez em outubro de 1996, pela Media Factory, no Japão. Nos Estados Unidos, foi inicialmente publicado pela Wizards of the Coast; sendo assumida pela N\n[…]\nEstampas Ilustradas tem sido objeto de torneios informais e oficialmente sancionados. Os torneios oficiais são atualmente supervisionados pela Play! Pokémon, uma divisão da The Pokémon Company, e são hospedados em uma base local, nacional e internacional. Além disso, inúmeras adaptações de videogame foram publicadas, incluindo Pokémon Trading Card Game (Game Boy Color), a série Pokémon: Play It! (PC), Pokémon TCG Online (PC).\n[…]\nApós o fechamento do TCG Online em 2023, ele foi substituído por Pokémon Trading Card Game Live (PC) e Pokémon Trading Card Game Pocket (celular) em 2024.\n[…]\nOs Bebês têm 30 ou 40 HP (pontos de vida), e são os mais fracos do jogo, mas têm uma habilidade em comum. Todas as vezes que forem atacados, o atacante joga uma moeda. Se der coroa, o ataque não funciona. Os Pokémon Bebê podem evoluir para um Básico. Esse tipo de carta deixou de aparecer depois da expansão EX Ruby and Sapphire, tornando-se a partir daí, tipo Básico.\n[…]\nAs normais podem fazer você comprar cartas (como Bill), recuperar um Pokémon (como Poção), colocar um Pokémon Básico no campo (como Poké Ball), pegar uma carta Energy no baralho (como Busca de energia) e até evoluir para um Pokémon (como Fóssil Misterioso).\n[…]\nNa carta do Pokémon de Estágio 1, deve estar escrito \"Evolui de…\" e o nome do Pokémon Básico.\n[…]\nUsar uma carta Ferramenta Pokémon. (Apenas uma vez)\n[…]\nLigar uma carta Energy a um de seus Pokémon. (Apenas uma vez)\n[…]\nEvoluir um Pokémon\n[…]\n«Site oficial brasileiro do Pokémon Trading Card Game»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Pokémon VMAX",
      "descricao": "Tipo de carta da era Sword e Shield do card game Pokémon que representa pokémon em Dynamax ou Gigantamax."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "No card game, quando um pokémon VMAX, a forma Dynamax da era Sword e Shield, é nocauteado, quantas cartas de prêmio o adversário pega?",
    "resposta": "Três",
    "distratores": [
      "Uma",
      "Duas",
      "Quatro"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_VMAX_(TCG)",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_VMAX_(TCG)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game",
        "situacao": "ok",
        "texto": "The Pokémon Trading Card Game (Japanese: ポケモンカードゲーム, Hepburn: Pokemon Kādo Gēmu; \"Pokémon Card Game\"), abbreviated as PTCG or Pokémon TCG, is a tabletop and collectible card game developed by Creatures Inc. based on the Pokémon franchise. Originally published in Japan by Media Factory in 1996, publishing worldwide is currently handled by the Pokémon Company. In the United States, the game was orig\n[…]\nA simplified type system was adopted from the video games for use in the trading card game. Darkness and Metal types was introduced alongside the corresponding Pokémon Gold and Silver video game, the Dragon-type was introduced in the Japanese Dragon Selection set; and Fairy type was introduced in the XY set to correspond to its introduction in the franchise, but they were later categorized under Psychic type starting with Sword and Pokémon Shield.\n[…]\nEuropean countries can qualify for positions at the Pokémon Trading Card Game World Championships each year, through National Championships and European Rankings.\n[…]\nUpon the full release, Pokémon Trading Card Game Live replaced Pokémon Trading Card Game Online, and the latter was discontinued shortly after. Crown Zenith was the final set supported on Pokémon Trading Card Game Online. Existing players of Pokémon Trading Card Game Online can transfer their account and in-game data to Pokémon Trading Card Game Live.\n[…]\nOn February 27, 2024, another Pokémon Trading Card Game-based video game for Android and iOS was announced in the Pokémon Presents presentation  developed by Creatures (company) and DeNA titled Pokémon Trading Card Game Pocket. The game features entirely original digital cards not present in the physical card game featuring dynamic artwork, as well as the ability to look into the artwork of certain cards to see obscured elements. The gameplay utilizes streamlined battle and trading systems."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game",
        "situacao": "ok",
        "texto": "Pokémon Trading Card Game ou Pokémon Estampas Ilustradas no Brasil (originalmente: ポケモンカードゲーム, Pokemon Card Game), é um jogo de cartas colecionáveis, desenvolvidos pela Creatures Inc. baseadas na franquia japonesa Pokémon. Foi publicado pela primeira vez em outubro de 1996, pela Media Factory, no Japão. Nos Estados Unidos, foi inicialmente publicado pela Wizards of the Coast; sendo assumida pela N\n[…]\nApós o fechamento do TCG Online em 2023, ele foi substituído por Pokémon Trading Card Game Live (PC) e Pokémon Trading Card Game Pocket (celular) em 2024.\n[…]\nAs cartas de Pokémon são divididas em Pokémon Bebê, Básico, Estágio 1, Estágio 2, Estágio LV.X, Legend, Mega, EX, GX, V, VMax e ex tera\n[…]\nAs cartas de suporte, conhecidas como apoiador na tradução brasileira, só duram um turno. Elas têm muitos efeitos, como pegar três cartas e descartar uma (como TV Reporter) ou pegar três cartas suporte ou estádio e mostrar ao adversário (como Scott). O fato curioso dessas cartas é que, quando essas deixaram de ser Trainer, não receberam mais tradução, ficando, somente, Supporter.\n[…]\nAs cartas estádio causam diversos efeitos, como impedir mais de cinco Pokémon no campo (como Ginásio Narrow), dar a chance de puxar várias cartas (como Speed Stadium) e muitos outros mais. O fato curioso dessas cartas é que quando essas deixaram de ser Trainer, não receberam mais tradução, ficando, somente, Stage.\n[…]\nCada jogador deve ter um deck de 60 cartas com pelo menos um Pokémon Básico. Um embaralha o deck do outro e coloca seis cartas viradas para baixo. Essas são as \"cartas prêmio\". Depois, os decks são devolvidos aos donos e cada um pega uma mão de sete cartas. Se não houver Pokémon Básicos, este reembaralha o deck e pega mais uma mão de sete cartas. O outro jogador tem a opção de pegar mais uma carta por nova mão do adversário.\n[…]\nEvoluir um Pokémon\n[…]\n«Site oficial brasileiro do Pokémon Trading Card Game»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Pokémon Radiant",
      "descricao": "Cartas da era Sword e Shield do card game Pokémon que mostram pokémon brilhantes, com limite de uma por baralho."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Na era Sword e Shield do card game, as cartas de pokémon Radiant mostram pokémon brilhantes e poderosos. Quantas delas um baralho pode ter?",
    "resposta": "Uma",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Radiant_Pok%C3%A9mon_(TCG)",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Radiant_Pok%C3%A9mon_(TCG)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game",
        "situacao": "ok",
        "texto": "The Pokémon Trading Card Game (Japanese: ポケモンカードゲーム, Hepburn: Pokemon Kādo Gēmu; \"Pokémon Card Game\"), abbreviated as PTCG or Pokémon TCG, is a tabletop and collectible card game developed by Creatures Inc. based on the Pokémon franchise. Originally published in Japan by Media Factory in 1996, publishing worldwide is currently handled by the Pokémon Company. In the United States, the game was orig\n[…]\nA simplified type system was adopted from the video games for use in the trading card game. Darkness and Metal types was introduced alongside the corresponding Pokémon Gold and Silver video game, the Dragon-type was introduced in the Japanese Dragon Selection set; and Fairy type was introduced in the XY set to correspond to its introduction in the franchise, but they were later categorized under Psychic type starting with Sword and Pokémon Shield.\n[…]\nEuropean countries can qualify for positions at the Pokémon Trading Card Game World Championships each year, through National Championships and European Rankings.\n[…]\nUpon the full release, Pokémon Trading Card Game Live replaced Pokémon Trading Card Game Online, and the latter was discontinued shortly after. Crown Zenith was the final set supported on Pokémon Trading Card Game Online. Existing players of Pokémon Trading Card Game Online can transfer their account and in-game data to Pokémon Trading Card Game Live.\n[…]\nOn February 27, 2024, another Pokémon Trading Card Game-based video game for Android and iOS was announced in the Pokémon Presents presentation  developed by Creatures (company) and DeNA titled Pokémon Trading Card Game Pocket. The game features entirely original digital cards not present in the physical card game featuring dynamic artwork, as well as the ability to look into the artwork of certain cards to see obscured elements. The gameplay utilizes streamlined battle and trading systems."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game",
        "situacao": "ok",
        "texto": "Pokémon Trading Card Game ou Pokémon Estampas Ilustradas no Brasil (originalmente: ポケモンカードゲーム, Pokemon Card Game), é um jogo de cartas colecionáveis, desenvolvidos pela Creatures Inc. baseadas na franquia japonesa Pokémon. Foi publicado pela primeira vez em outubro de 1996, pela Media Factory, no Japão. Nos Estados Unidos, foi inicialmente publicado pela Wizards of the Coast; sendo assumida pela N\n[…]\nOs Pokémon também podem ajustar outros fatores de jogabilidade e evoluir para estágios mais poderosos. Os jogadores podem usar cartas de Treinador para comprar cartas em suas mãos, prejudicar seu oponente ou executar outras funções de jogo. Os efeitos das cartas geralmente dependem de elementos de sorte, como jogadas de dados e cara ou coroa, para decidir um resultado. A jogabilidade depende do uso de contadores para indicar o dano causado e os efeitos de status.\n[…]\nEstampas Ilustradas tem sido objeto de torneios informais e oficialmente sancionados. Os torneios oficiais são atualmente supervisionados pela Play! Pokémon, uma divisão da The Pokémon Company, e são hospedados em uma base local, nacional e internacional. Além disso, inúmeras adaptações de videogame foram publicadas, incluindo Pokémon Trading Card Game (Game Boy Color), a série Pokémon: Play It! (PC), Pokémon TCG Online (PC).\n[…]\nApós o fechamento do TCG Online em 2023, ele foi substituído por Pokémon Trading Card Game Live (PC) e Pokémon Trading Card Game Pocket (celular) em 2024.\n[…]\nAs normais podem fazer você comprar cartas (como Bill), recuperar um Pokémon (como Poção), colocar um Pokémon Básico no campo (como Poké Ball), pegar uma carta Energy no baralho (como Busca de energia) e até evoluir para um Pokémon (como Fóssil Misterioso).\n[…]\nEm um turno, você pode realizar as ações a seguir quantas vezes quiser na ordem que quiser.\n[…]\n«Site oficial de Pokémon» (em inglês)\n[…]\n«Site oficial brasileiro do Pokémon Trading Card Game»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Tipo Fada (card game)",
      "descricao": "Tipo de pokémon e de energia do card game Pokémon, criado na era X e Y e abolido na era Sword e Shield."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "O tipo Fada ganhou energia própria no card game na era X e Y, mas foi abolido em Sword e Shield. Para que tipo os pokémon fada passaram?",
    "resposta": "Psíquico",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Fairy_(TCG)",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Fairy_(TCG)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game",
        "situacao": "ok",
        "texto": "The Pokémon Trading Card Game (Japanese: ポケモンカードゲーム, Hepburn: Pokemon Kādo Gēmu; \"Pokémon Card Game\"), abbreviated as PTCG or Pokémon TCG, is a tabletop and collectible card game developed by Creatures Inc. based on the Pokémon franchise. Originally published in Japan by Media Factory in 1996, publishing worldwide is currently handled by the Pokémon Company. In the United States, the game was orig\n[…]\nA simplified type system was adopted from the video games for use in the trading card game. Darkness and Metal types was introduced alongside the corresponding Pokémon Gold and Silver video game, the Dragon-type was introduced in the Japanese Dragon Selection set; and Fairy type was introduced in the XY set to correspond to its introduction in the franchise, but they were later categorized under Psychic type starting with Sword and Pokémon Shield.\n[…]\nEuropean countries can qualify for positions at the Pokémon Trading Card Game World Championships each year, through National Championships and European Rankings.\n[…]\nUpon the full release, Pokémon Trading Card Game Live replaced Pokémon Trading Card Game Online, and the latter was discontinued shortly after. Crown Zenith was the final set supported on Pokémon Trading Card Game Online. Existing players of Pokémon Trading Card Game Online can transfer their account and in-game data to Pokémon Trading Card Game Live.\n[…]\nOn February 27, 2024, another Pokémon Trading Card Game-based video game for Android and iOS was announced in the Pokémon Presents presentation  developed by Creatures (company) and DeNA titled Pokémon Trading Card Game Pocket. The game features entirely original digital cards not present in the physical card game featuring dynamic artwork, as well as the ability to look into the artwork of certain cards to see obscured elements. The gameplay utilizes streamlined battle and trading systems."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game",
        "situacao": "ok",
        "texto": "Pokémon Trading Card Game ou Pokémon Estampas Ilustradas no Brasil (originalmente: ポケモンカードゲーム, Pokemon Card Game), é um jogo de cartas colecionáveis, desenvolvidos pela Creatures Inc. baseadas na franquia japonesa Pokémon. Foi publicado pela primeira vez em outubro de 1996, pela Media Factory, no Japão. Nos Estados Unidos, foi inicialmente publicado pela Wizards of the Coast; sendo assumida pela N\n[…]\nEstampas Ilustradas tem sido objeto de torneios informais e oficialmente sancionados. Os torneios oficiais são atualmente supervisionados pela Play! Pokémon, uma divisão da The Pokémon Company, e são hospedados em uma base local, nacional e internacional. Além disso, inúmeras adaptações de videogame foram publicadas, incluindo Pokémon Trading Card Game (Game Boy Color), a série Pokémon: Play It! (PC), Pokémon TCG Online (PC).\n[…]\nApós o fechamento do TCG Online em 2023, ele foi substituído por Pokémon Trading Card Game Live (PC) e Pokémon Trading Card Game Pocket (celular) em 2024.\n[…]\nAs cartas de energia são o \"combustível\" para o Pokémon. Elas são necessárias para atacar; e na maioria das vezes, também para recuar.\n[…]\nExistiam 9 elementos de energia básica: Fogo, planta, água, elétrica, metal, fada, sombria, luta e psíquica. Com o início da série Espada e Escudo (Sword & Shield), a energia fada passou a ser representado pela energia psíquica.\n[…]\nAlém da energia psíquica, outras energias representam mais de um tipo de pokémon, como por exemplo a de luta, que representa também os pokémon de terra e de pedra; a de planta, que também vale para inseto; A de água, que também serve para gelo; Sombrio, que representa também fantasma e venenoso. Os pokémon do tipo normal e voador utilizam quaisquer energias para atacar e os do tipo dragão costumam utilizar combinações de energias (como fogo e água ou elétrico e psíquico) para produzir ataques.\n[…]\n«Site oficial brasileiro do Pokémon Trading Card Game»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Pokémon Estampas Ilustradas",
      "descricao": "Card game colecionável oficial da franquia Pokémon, lançado no Japão em 1996."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "No começo de uma partida do card game Pokémon, depois de embaralhar, cada jogador compra quantas cartas para formar a mão inicial?",
    "resposta": "Sete",
    "distratores": [
      "Cinco",
      "Seis",
      "Oito"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game",
      "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Trading_Card_Game"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game",
        "situacao": "ok",
        "texto": "The Pokémon Trading Card Game (Japanese: ポケモンカードゲーム, Hepburn: Pokemon Kādo Gēmu; \"Pokémon Card Game\"), abbreviated as PTCG or Pokémon TCG, is a tabletop and collectible card game developed by Creatures Inc. based on the Pokémon franchise. Originally published in Japan by Media Factory in 1996, publishing worldwide is currently handled by the Pokémon Company. In the United States, the game was orig\n[…]\n\"Black Star Ishihara Signed GX Promo Card\"\n[…]\nEuropean countries can qualify for positions at the Pokémon Trading Card Game World Championships each year, through National Championships and European Rankings.\n[…]\nOn September 20, 2021, another Pokémon Trading Card Game-based video game was announced, titled Pokémon Trading Card Game Live. A closed beta of Pokémon Trading Card Game Live was released for Canadian players on February 22, 2022. Later, a global beta of Pokémon Trading Card Game Live was released on November 15, 2022 on Android, iOS, Microsoft Windows. The game is now also available on macOS.\n[…]\nUpon the full release, Pokémon Trading Card Game Live replaced Pokémon Trading Card Game Online, and the latter was discontinued shortly after. Crown Zenith was the final set supported on Pokémon Trading Card Game Online. Existing players of Pokémon Trading Card Game Online can transfer their account and in-game data to Pokémon Trading Card Game Live.\n[…]\nOn February 27, 2024, another Pokémon Trading Card Game-based video game for Android and iOS was announced in the Pokémon Presents presentation  developed by Creatures (company) and DeNA titled Pokémon Trading Card Game Pocket. The game features entirely original digital cards not present in the physical card game featuring dynamic artwork, as well as the ability to look into the artwork of certain cards to see obscured elements. The gameplay utilizes streamlined battle and trading systems.\n[…]\nScrye Pokemon Price and Players Guide 2000"
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Trading_Card_Game",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game",
        "situacao": "ok",
        "texto": "Pokémon Trading Card Game ou Pokémon Estampas Ilustradas no Brasil (originalmente: ポケモンカードゲーム, Pokemon Card Game), é um jogo de cartas colecionáveis, desenvolvidos pela Creatures Inc. baseadas na franquia japonesa Pokémon. Foi publicado pela primeira vez em outubro de 1996, pela Media Factory, no Japão. Nos Estados Unidos, foi inicialmente publicado pela Wizards of the Coast; sendo assumida pela N\n[…]\nEstampas Ilustradas tem sido objeto de torneios informais e oficialmente sancionados. Os torneios oficiais são atualmente supervisionados pela Play! Pokémon, uma divisão da The Pokémon Company, e são hospedados em uma base local, nacional e internacional. Além disso, inúmeras adaptações de videogame foram publicadas, incluindo Pokémon Trading Card Game (Game Boy Color), a série Pokémon: Play It! (PC), Pokémon TCG Online (PC).\n[…]\nApós o fechamento do TCG Online em 2023, ele foi substituído por Pokémon Trading Card Game Live (PC) e Pokémon Trading Card Game Pocket (celular) em 2024.\n[…]\nExistem 4 tipos de cartas Trainer: Normais; Estádio; Ferramentas Pokémon; e Suporte.\n[…]\nAs normais podem fazer você comprar cartas (como Bill), recuperar um Pokémon (como Poção), colocar um Pokémon Básico no campo (como Poké Ball), pegar uma carta Energy no baralho (como Busca de energia) e até evoluir para um Pokémon (como Fóssil Misterioso).\n[…]\nCada jogador deve ter um deck de 60 cartas com pelo menos um Pokémon Básico. Um embaralha o deck do outro e coloca seis cartas viradas para baixo. Essas são as \"cartas prêmio\". Depois, os decks são devolvidos aos donos e cada um pega uma mão de sete cartas. Se não houver Pokémon Básicos, este reembaralha o deck e pega mais uma mão de sete cartas. O outro jogador tem a opção de pegar mais uma carta por nova mão do adversário.\n[…]\nColocar um Pokémon Básico no banco.\n[…]\nEvoluir um Pokémon\n[…]\n«Site oficial de Pokémon» (em inglês)\n[…]\n«Site oficial brasileiro do Pokémon Trading Card Game»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Pokémon Estampas Ilustradas",
      "descricao": "Card game colecionável oficial da franquia Pokémon, lançado no Japão em 1996."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No card game, o baralho mistura três grandes tipos de carta. Além de Pokémon e Energia, qual é o terceiro, que inclui Itens, Apoiadores e Estádios?",
    "resposta": "Treinador (Trainer)",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game",
      "https://bulbapedia.bulbagarden.net/wiki/Trainer_card_(TCG)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game",
        "situacao": "ok",
        "texto": "The Pokémon Trading Card Game (Japanese: ポケモンカードゲーム, Hepburn: Pokemon Kādo Gēmu; \"Pokémon Card Game\"), abbreviated as PTCG or Pokémon TCG, is a tabletop and collectible card game developed by Creatures Inc. based on the Pokémon franchise. Originally published in Japan by Media Factory in 1996, publishing worldwide is currently handled by the Pokémon Company. In the United States, the game was orig\n[…]\nThe Pokémon Trading Card Game is a strategy-based card game that is usually played on a designated playmat or digitally on an official game client (usually Pokémon Trading Card Game Live) where two players (assuming the role of Pokémon Trainer) use their Pokémon to battle one another.\n[…]\nStarting with Scarlet & Violet, Pokémon Tool cards are considered as a separate category from Item cards; existing Pokémon Tool cards have received errata to conform to this change. ACE SPEC Trainer cards have powerful unique effects but only one ACE SPEC card is allowed in the deck.\n[…]\nThis card was created as a prize for the 1997-1998 Pokémon design contests organized by the Japanese manga-magazine CoroCoro Comic and with only 41 copies printed, it is the only Pokémon card to say \"Illustrator\" instead of \"Trainer\" like other Trainer cards. The card was illustrated by Atsuko Nishida, the original designer of the Pokémon species including Pikachu. The Japanese imprint reads: \"We certify that your illustration is an excellent entry in the Pokémon Card Game Illust Contest.\n[…]\nThe Pokémon Trading Card Game Online was a prominent video game adaptation of the Pokémon TCG. It was released on March 24, 2011, as Pokémon Trainer Challenge for Microsoft Windows, Android, macOS, iOS, and iPadOS. The game initially offered three starting decks but significantly expanded its card collection shortly after release. Card packs and premade decks could be redeemed using in-game currencies and rewards."
      },
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Trainer_card_(TCG)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game",
        "situacao": "ok",
        "texto": "Pokémon Trading Card Game ou Pokémon Estampas Ilustradas no Brasil (originalmente: ポケモンカードゲーム, Pokemon Card Game), é um jogo de cartas colecionáveis, desenvolvidos pela Creatures Inc. baseadas na franquia japonesa Pokémon. Foi publicado pela primeira vez em outubro de 1996, pela Media Factory, no Japão. Nos Estados Unidos, foi inicialmente publicado pela Wizards of the Coast; sendo assumida pela N\n[…]\nOs jogadores assumem o papel de treinadores Pokémon envolvidos na batalha e jogam com baralhos de 60 cartas. As cartas de jogo padrão incluem cartas de Pokémon, cartas de energia e cartas de treinador. Os Pokémon são introduzidos na batalha de um \"banco\" e realizam ataques em seu oponente até esgotar seus pontos de saúde. Os ataques são ativados pela anexação de um número suficiente de cartas de energia ao Pokémon ativo.\n[…]\nEstampas Ilustradas tem sido objeto de torneios informais e oficialmente sancionados. Os torneios oficiais são atualmente supervisionados pela Play! Pokémon, uma divisão da The Pokémon Company, e são hospedados em uma base local, nacional e internacional. Além disso, inúmeras adaptações de videogame foram publicadas, incluindo Pokémon Trading Card Game (Game Boy Color), a série Pokémon: Play It! (PC), Pokémon TCG Online (PC).\n[…]\nExistem 4 tipos de cartas Trainer: Normais; Estádio; Ferramentas Pokémon; e Suporte.\n[…]\nAs cartas de suporte, conhecidas como apoiador na tradução brasileira, só duram um turno. Elas têm muitos efeitos, como pegar três cartas e descartar uma (como TV Reporter) ou pegar três cartas suporte ou estádio e mostrar ao adversário (como Scott). O fato curioso dessas cartas é que, quando essas deixaram de ser Trainer, não receberam mais tradução, ficando, somente, Supporter.\n[…]\nUsar uma carta Trainer normal.\n[…]\nLigar uma carta Energy a um de seus Pokémon. (Apenas uma vez)\n[…]\nEvoluir um Pokémon\n[…]\n«Site oficial brasileiro do Pokémon Trading Card Game»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Banco (card game Pokémon)",
      "descricao": "Área da mesa no card game Pokémon onde ficam os pokémon do jogador que não estão na posição ativa."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "No card game, além do pokémon ativo, quantos pokémon um jogador pode manter no Banco, ou Bench, esperando a vez de lutar?",
    "resposta": "Cinco",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Bench_(TCG)",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Bench_(TCG)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game",
        "situacao": "ok",
        "texto": "The Pokémon Trading Card Game (Japanese: ポケモンカードゲーム, Hepburn: Pokemon Kādo Gēmu; \"Pokémon Card Game\"), abbreviated as PTCG or Pokémon TCG, is a tabletop and collectible card game developed by Creatures Inc. based on the Pokémon franchise. Originally published in Japan by Media Factory in 1996, publishing worldwide is currently handled by the Pokémon Company. In the United States, the game was orig\n[…]\n\"Black Star Ishihara Signed GX Promo Card\"\n[…]\nEuropean countries can qualify for positions at the Pokémon Trading Card Game World Championships each year, through National Championships and European Rankings.\n[…]\nOn September 20, 2021, another Pokémon Trading Card Game-based video game was announced, titled Pokémon Trading Card Game Live. A closed beta of Pokémon Trading Card Game Live was released for Canadian players on February 22, 2022. Later, a global beta of Pokémon Trading Card Game Live was released on November 15, 2022 on Android, iOS, Microsoft Windows. The game is now also available on macOS.\n[…]\nUpon the full release, Pokémon Trading Card Game Live replaced Pokémon Trading Card Game Online, and the latter was discontinued shortly after. Crown Zenith was the final set supported on Pokémon Trading Card Game Online. Existing players of Pokémon Trading Card Game Online can transfer their account and in-game data to Pokémon Trading Card Game Live.\n[…]\nOn February 27, 2024, another Pokémon Trading Card Game-based video game for Android and iOS was announced in the Pokémon Presents presentation  developed by Creatures (company) and DeNA titled Pokémon Trading Card Game Pocket. The game features entirely original digital cards not present in the physical card game featuring dynamic artwork, as well as the ability to look into the artwork of certain cards to see obscured elements. The gameplay utilizes streamlined battle and trading systems.\n[…]\nScrye Pokemon Price and Players Guide 2000"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game",
        "situacao": "ok",
        "texto": "Pokémon Trading Card Game ou Pokémon Estampas Ilustradas no Brasil (originalmente: ポケモンカードゲーム, Pokemon Card Game), é um jogo de cartas colecionáveis, desenvolvidos pela Creatures Inc. baseadas na franquia japonesa Pokémon. Foi publicado pela primeira vez em outubro de 1996, pela Media Factory, no Japão. Nos Estados Unidos, foi inicialmente publicado pela Wizards of the Coast; sendo assumida pela N\n[…]\nOs jogadores assumem o papel de treinadores Pokémon envolvidos na batalha e jogam com baralhos de 60 cartas. As cartas de jogo padrão incluem cartas de Pokémon, cartas de energia e cartas de treinador. Os Pokémon são introduzidos na batalha de um \"banco\" e realizam ataques em seu oponente até esgotar seus pontos de saúde. Os ataques são ativados pela anexação de um número suficiente de cartas de energia ao Pokémon ativo.\n[…]\nEstampas Ilustradas tem sido objeto de torneios informais e oficialmente sancionados. Os torneios oficiais são atualmente supervisionados pela Play! Pokémon, uma divisão da The Pokémon Company, e são hospedados em uma base local, nacional e internacional. Além disso, inúmeras adaptações de videogame foram publicadas, incluindo Pokémon Trading Card Game (Game Boy Color), a série Pokémon: Play It! (PC), Pokémon TCG Online (PC).\n[…]\nApós o fechamento do TCG Online em 2023, ele foi substituído por Pokémon Trading Card Game Live (PC) e Pokémon Trading Card Game Pocket (celular) em 2024.\n[…]\nAs cartas estádio causam diversos efeitos, como impedir mais de cinco Pokémon no campo (como Ginásio Narrow), dar a chance de puxar várias cartas (como Speed Stadium) e muitos outros mais. O fato curioso dessas cartas é que quando essas deixaram de ser Trainer, não receberam mais tradução, ficando, somente, Stage.\n[…]\nColocar um Pokémon Básico no banco.\n[…]\nEvoluir um Pokémon\n[…]\n«Site oficial de Pokémon» (em inglês)\n[…]\n«Site oficial brasileiro do Pokémon Trading Card Game»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Carta de Energia (card game Pokémon)",
      "descricao": "Tipo de carta do card game Pokémon ligada aos pokémon para pagar o custo dos ataques."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Pela regra básica do card game, quantas cartas de energia da mão o jogador pode ligar aos seus pokémon a cada turno?",
    "resposta": "Uma",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Energy_card_(TCG)",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Energy_card_(TCG)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game",
        "situacao": "ok",
        "texto": "The Pokémon Trading Card Game (Japanese: ポケモンカードゲーム, Hepburn: Pokemon Kādo Gēmu; \"Pokémon Card Game\"), abbreviated as PTCG or Pokémon TCG, is a tabletop and collectible card game developed by Creatures Inc. based on the Pokémon franchise. Originally published in Japan by Media Factory in 1996, publishing worldwide is currently handled by the Pokémon Company. In the United States, the game was orig\n[…]\n\"Black Star Ishihara Signed GX Promo Card\"\n[…]\nEuropean countries can qualify for positions at the Pokémon Trading Card Game World Championships each year, through National Championships and European Rankings.\n[…]\nOn September 20, 2021, another Pokémon Trading Card Game-based video game was announced, titled Pokémon Trading Card Game Live. A closed beta of Pokémon Trading Card Game Live was released for Canadian players on February 22, 2022. Later, a global beta of Pokémon Trading Card Game Live was released on November 15, 2022 on Android, iOS, Microsoft Windows. The game is now also available on macOS.\n[…]\nUpon the full release, Pokémon Trading Card Game Live replaced Pokémon Trading Card Game Online, and the latter was discontinued shortly after. Crown Zenith was the final set supported on Pokémon Trading Card Game Online. Existing players of Pokémon Trading Card Game Online can transfer their account and in-game data to Pokémon Trading Card Game Live.\n[…]\nOn February 27, 2024, another Pokémon Trading Card Game-based video game for Android and iOS was announced in the Pokémon Presents presentation  developed by Creatures (company) and DeNA titled Pokémon Trading Card Game Pocket. The game features entirely original digital cards not present in the physical card game featuring dynamic artwork, as well as the ability to look into the artwork of certain cards to see obscured elements. The gameplay utilizes streamlined battle and trading systems.\n[…]\nScrye Pokemon Price and Players Guide 2000"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game",
        "situacao": "ok",
        "texto": "Pokémon Trading Card Game ou Pokémon Estampas Ilustradas no Brasil (originalmente: ポケモンカードゲーム, Pokemon Card Game), é um jogo de cartas colecionáveis, desenvolvidos pela Creatures Inc. baseadas na franquia japonesa Pokémon. Foi publicado pela primeira vez em outubro de 1996, pela Media Factory, no Japão. Nos Estados Unidos, foi inicialmente publicado pela Wizards of the Coast; sendo assumida pela N\n[…]\nOs jogadores assumem o papel de treinadores Pokémon envolvidos na batalha e jogam com baralhos de 60 cartas. As cartas de jogo padrão incluem cartas de Pokémon, cartas de energia e cartas de treinador. Os Pokémon são introduzidos na batalha de um \"banco\" e realizam ataques em seu oponente até esgotar seus pontos de saúde. Os ataques são ativados pela anexação de um número suficiente de cartas de energia ao Pokémon ativo.\n[…]\nExistem também cartas de energia especial que possuem limitação de quantidade em um deck e que trazem atributos diferentes das básicas, como por exemplo evitar danos do inimigo ou então aumentar os PSs (Pontos de saúde) do pokémon.\n[…]\nAs normais podem fazer você comprar cartas (como Bill), recuperar um Pokémon (como Poção), colocar um Pokémon Básico no campo (como Poké Ball), pegar uma carta Energy no baralho (como Busca de energia) e até evoluir para um Pokémon (como Fóssil Misterioso).\n[…]\nCada jogador deve ter um deck de 60 cartas com pelo menos um Pokémon Básico. Um embaralha o deck do outro e coloca seis cartas viradas para baixo. Essas são as \"cartas prêmio\". Depois, os decks são devolvidos aos donos e cada um pega uma mão de sete cartas. Se não houver Pokémon Básicos, este reembaralha o deck e pega mais uma mão de sete cartas. O outro jogador tem a opção de pegar mais uma carta por nova mão do adversário.\n[…]\nLigar uma carta Energy a um de seus Pokémon. (Apenas uma vez)\n[…]\n«Site oficial de Pokémon» (em inglês)\n[…]\n«Site oficial brasileiro do Pokémon Trading Card Game»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Baralho do card game Pokémon",
      "descricao": "Conjunto de sessenta cartas que cada jogador monta para disputar uma partida padrão do card game Pokémon."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Num baralho de sessenta cartas do card game Pokémon, quantas cópias com o mesmo nome o jogador pode incluir, sem contar as energias básicas?",
    "resposta": "Quatro",
    "distratores": [
      "Duas",
      "Três",
      "Seis"
    ],
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Deck_(TCG)",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Deck_(TCG)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game",
        "situacao": "ok",
        "texto": "The Pokémon Trading Card Game (Japanese: ポケモンカードゲーム, Hepburn: Pokemon Kādo Gēmu; \"Pokémon Card Game\"), abbreviated as PTCG or Pokémon TCG, is a tabletop and collectible card game developed by Creatures Inc. based on the Pokémon franchise. Originally published in Japan by Media Factory in 1996, publishing worldwide is currently handled by the Pokémon Company. In the United States, the game was orig\n[…]\n\"Black Star Ishihara Signed GX Promo Card\"\n[…]\nEuropean countries can qualify for positions at the Pokémon Trading Card Game World Championships each year, through National Championships and European Rankings.\n[…]\nOn September 20, 2021, another Pokémon Trading Card Game-based video game was announced, titled Pokémon Trading Card Game Live. A closed beta of Pokémon Trading Card Game Live was released for Canadian players on February 22, 2022. Later, a global beta of Pokémon Trading Card Game Live was released on November 15, 2022 on Android, iOS, Microsoft Windows. The game is now also available on macOS.\n[…]\nUpon the full release, Pokémon Trading Card Game Live replaced Pokémon Trading Card Game Online, and the latter was discontinued shortly after. Crown Zenith was the final set supported on Pokémon Trading Card Game Online. Existing players of Pokémon Trading Card Game Online can transfer their account and in-game data to Pokémon Trading Card Game Live.\n[…]\nOn February 27, 2024, another Pokémon Trading Card Game-based video game for Android and iOS was announced in the Pokémon Presents presentation  developed by Creatures (company) and DeNA titled Pokémon Trading Card Game Pocket. The game features entirely original digital cards not present in the physical card game featuring dynamic artwork, as well as the ability to look into the artwork of certain cards to see obscured elements. The gameplay utilizes streamlined battle and trading systems.\n[…]\nScrye Pokemon Price and Players Guide 2000"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game",
        "situacao": "ok",
        "texto": "Pokémon Trading Card Game ou Pokémon Estampas Ilustradas no Brasil (originalmente: ポケモンカードゲーム, Pokemon Card Game), é um jogo de cartas colecionáveis, desenvolvidos pela Creatures Inc. baseadas na franquia japonesa Pokémon. Foi publicado pela primeira vez em outubro de 1996, pela Media Factory, no Japão. Nos Estados Unidos, foi inicialmente publicado pela Wizards of the Coast; sendo assumida pela N\n[…]\nOs jogadores assumem o papel de treinadores Pokémon envolvidos na batalha e jogam com baralhos de 60 cartas. As cartas de jogo padrão incluem cartas de Pokémon, cartas de energia e cartas de treinador. Os Pokémon são introduzidos na batalha de um \"banco\" e realizam ataques em seu oponente até esgotar seus pontos de saúde. Os ataques são ativados pela anexação de um número suficiente de cartas de energia ao Pokémon ativo.\n[…]\nExistem também cartas de energia especial que possuem limitação de quantidade em um deck e que trazem atributos diferentes das básicas, como por exemplo evitar danos do inimigo ou então aumentar os PSs (Pontos de saúde) do pokémon.\n[…]\nAs normais podem fazer você comprar cartas (como Bill), recuperar um Pokémon (como Poção), colocar um Pokémon Básico no campo (como Poké Ball), pegar uma carta Energy no baralho (como Busca de energia) e até evoluir para um Pokémon (como Fóssil Misterioso).\n[…]\nCada jogador deve ter um deck de 60 cartas com pelo menos um Pokémon Básico. Um embaralha o deck do outro e coloca seis cartas viradas para baixo. Essas são as \"cartas prêmio\". Depois, os decks são devolvidos aos donos e cada um pega uma mão de sete cartas. Se não houver Pokémon Básicos, este reembaralha o deck e pega mais uma mão de sete cartas. O outro jogador tem a opção de pegar mais uma carta por nova mão do adversário.\n[…]\nEm um turno, você pode realizar as ações a seguir quantas vezes quiser na ordem que quiser.\n[…]\n«Site oficial brasileiro do Pokémon Trading Card Game»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Condições Especiais (card game Pokémon)",
      "descricao": "Estados do card game Pokémon, como Adormecido, Confuso e Paralisado, marcados pela posição da carta na mesa."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "No card game Pokémon, quando a carta do pokémon ativo fica virada de cabeça para baixo na mesa, em que condição especial ele está?",
    "resposta": "Confuso (Confused)",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Special_Conditions_(TCG)",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Special_Conditions_(TCG)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game",
        "situacao": "ok",
        "texto": "The Pokémon Trading Card Game (Japanese: ポケモンカードゲーム, Hepburn: Pokemon Kādo Gēmu; \"Pokémon Card Game\"), abbreviated as PTCG or Pokémon TCG, is a tabletop and collectible card game developed by Creatures Inc. based on the Pokémon franchise. Originally published in Japan by Media Factory in 1996, publishing worldwide is currently handled by the Pokémon Company. In the United States, the game was orig\n[…]\nMost Pokémon have attacks that require a certain amount of Energies to use. Attacks deal damage to the opponent's Active Pokémon and sometimes deal additional damage to their Benched Pokémon; they may have additional effects like drawing cards, inflicting Special Conditions (Asleep, Burned, Confused, Paralyzed, or Poisoned) or altering the opponent's deck and/or board state.\n[…]\nThe Pokémon Card Game: How to Play DS (ポケモンカードゲーム あそびかたDS, Pokemon Kādo Gēmu asobi kata DS) how-to-guide video game adaptation was released in Japan on August 5, 2011, for Nintendo DS, alongside three bundled 30-card decks, a play mat, and damage counters tokens.\n[…]\nUpon the full release, Pokémon Trading Card Game Live replaced Pokémon Trading Card Game Online, and the latter was discontinued shortly after. Crown Zenith was the final set supported on Pokémon Trading Card Game Online. Existing players of Pokémon Trading Card Game Online can transfer their account and in-game data to Pokémon Trading Card Game Live.\n[…]\nOn February 27, 2024, another Pokémon Trading Card Game-based video game for Android and iOS was announced in the Pokémon Presents presentation  developed by Creatures (company) and DeNA titled Pokémon Trading Card Game Pocket. The game features entirely original digital cards not present in the physical card game featuring dynamic artwork, as well as the ability to look into the artwork of certain cards to see obscured elements. The gameplay utilizes streamlined battle and trading systems."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game",
        "situacao": "ok",
        "texto": "Pokémon Trading Card Game ou Pokémon Estampas Ilustradas no Brasil (originalmente: ポケモンカードゲーム, Pokemon Card Game), é um jogo de cartas colecionáveis, desenvolvidos pela Creatures Inc. baseadas na franquia japonesa Pokémon. Foi publicado pela primeira vez em outubro de 1996, pela Media Factory, no Japão. Nos Estados Unidos, foi inicialmente publicado pela Wizards of the Coast; sendo assumida pela N\n[…]\nEstampas Ilustradas tem sido objeto de torneios informais e oficialmente sancionados. Os torneios oficiais são atualmente supervisionados pela Play! Pokémon, uma divisão da The Pokémon Company, e são hospedados em uma base local, nacional e internacional. Além disso, inúmeras adaptações de videogame foram publicadas, incluindo Pokémon Trading Card Game (Game Boy Color), a série Pokémon: Play It! (PC), Pokémon TCG Online (PC).\n[…]\nApós o fechamento do TCG Online em 2023, ele foi substituído por Pokémon Trading Card Game Live (PC) e Pokémon Trading Card Game Pocket (celular) em 2024.\n[…]\nOs Pokémon Básicos podem evoluir de um Bebê ou não. Eles geralmente têm HP baixo, são comuns, têm ataques fracos e não precisam de tanta energia. Um Pokémon Bebê é considerado um Básico com a habilidade \"Evolução do Bebê\" (ou Baby Evolution, se a carta estiver em inglês).\n[…]\nCada jogador deve ter um deck de 60 cartas com pelo menos um Pokémon Básico. Um embaralha o deck do outro e coloca seis cartas viradas para baixo. Essas são as \"cartas prêmio\". Depois, os decks são devolvidos aos donos e cada um pega uma mão de sete cartas. Se não houver Pokémon Básicos, este reembaralha o deck e pega mais uma mão de sete cartas. O outro jogador tem a opção de pegar mais uma carta por nova mão do adversário.\n[…]\nUsar uma carta Ferramenta Pokémon. (Apenas uma vez)\n[…]\nLigar uma carta Energy a um de seus Pokémon. (Apenas uma vez)\n[…]\n«Site oficial de Pokémon» (em inglês)\n[…]\n«Site oficial brasileiro do Pokémon Trading Card Game»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Pikachu Illustrator",
      "descricao": "Carta promocional rara do card game Pokémon, distribuída no Japão no fim dos anos noventa, considerada uma das cartas mais caras do mundo."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "A carta Pikachu Illustrator, prêmio de um concurso de ilustração da revista CoroCoro, traz um Pikachu desenhado por qual ilustradora japonesa?",
    "resposta": "Atsuko Nishida",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pikachu_Illustrator"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pikachu_Illustrator",
        "situacao": "inexistente",
        "texto": ""
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Base Set",
      "descricao": "Primeira coleção do card game Pokémon, lançada no Japão em 1996 e em inglês em 1999, famosa pelo Charizard holográfico."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Os colecionadores chamam de Shadowless, sem sombra, uma das primeiras tiragens em inglês do Base Set. Que sombra falta nessas cartas?",
    "resposta": "A da moldura da ilustração",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Base_Set_(TCG)",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Base_Set_(TCG)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game",
        "situacao": "ok",
        "texto": "The Pokémon Trading Card Game (Japanese: ポケモンカードゲーム, Hepburn: Pokemon Kādo Gēmu; \"Pokémon Card Game\"), abbreviated as PTCG or Pokémon TCG, is a tabletop and collectible card game developed by Creatures Inc. based on the Pokémon franchise. Originally published in Japan by Media Factory in 1996, publishing worldwide is currently handled by the Pokémon Company. In the United States, the game was orig\n[…]\nIn the United States, the \"1998 Pokémon Demo Game Plastic Pack\" was the earliest introduction to the Pokémon TCG, preceding the \"1st Starter & Expansion Pack\"; and consisting of 24 Base Set shadowless cards and an instruction manual.\n[…]\n\"The Pokémon Demo Game Plastic Pack\", \"Base Set\", along with the subsequent expansions \"Jungle\", \"Fossil\", \"Base Set 2\", \"Team Rocket\", \"Gym Heroes\", \"Gym Challenge\", make up the \"First Generation Sets\" published by the original English-edition publisher Wizards of the Coast.\n[…]\nSimilarly, the \"Second Generation Sets\" published by Wizards comprised \"Neo Genesis\", \"Neo Discovery\", \"Southern Islands\", \"Neo Revelation\", \"Neo Destiny\", \"Legendary Collection\", \"Expedition Base Set\", \"Aquapolis\", and \"Skyridge\". The \"Second Generation Sets\" is the last collection set published by Wizards before Nintendo transferred the publishing right to The Pokémon Company In July 2003.\n[…]\nRarities can be also account for old card collectibles such as \"1st-edition Base Set\" and \"First Generation Sets\", and such collectibles are some of the rarest and most expensive Pokémon cards with some valuing at thousands and millions of dollars.\n[…]\n\"1996 Pokémon Japanese Base Set No Rarity Symbol Holo Venusaur\"\n[…]\n\"1999 First Edition Shadowless Holographic Charizard #4\""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game",
        "situacao": "ok",
        "texto": "Pokémon Trading Card Game ou Pokémon Estampas Ilustradas no Brasil (originalmente: ポケモンカードゲーム, Pokemon Card Game), é um jogo de cartas colecionáveis, desenvolvidos pela Creatures Inc. baseadas na franquia japonesa Pokémon. Foi publicado pela primeira vez em outubro de 1996, pela Media Factory, no Japão. Nos Estados Unidos, foi inicialmente publicado pela Wizards of the Coast; sendo assumida pela N\n[…]\nEstampas Ilustradas tem sido objeto de torneios informais e oficialmente sancionados. Os torneios oficiais são atualmente supervisionados pela Play! Pokémon, uma divisão da The Pokémon Company, e são hospedados em uma base local, nacional e internacional. Além disso, inúmeras adaptações de videogame foram publicadas, incluindo Pokémon Trading Card Game (Game Boy Color), a série Pokémon: Play It! (PC), Pokémon TCG Online (PC).\n[…]\nA partir de fevereiro de 2011, a Copag passa a produzir as cartas no Brasil. Lançando em português brasileiro e com traduções de alta qualidade. A coleção lançada é Maravilhas Secretas (Secret Wonders) com os temas Fluxo de Lava e Casa de Força.\n[…]\nExistem também cartas de energia especial que possuem limitação de quantidade em um deck e que trazem atributos diferentes das básicas, como por exemplo evitar danos do inimigo ou então aumentar os PSs (Pontos de saúde) do pokémon.\n[…]\nAs normais podem fazer você comprar cartas (como Bill), recuperar um Pokémon (como Poção), colocar um Pokémon Básico no campo (como Poké Ball), pegar uma carta Energy no baralho (como Busca de energia) e até evoluir para um Pokémon (como Fóssil Misterioso).\n[…]\nDecks são um conjunto de cartas vendidas. Existem decks de iniciantes já feitos, mas também se pode fazer os próprios decks. Diferentes expansões têm diferentes cartas, e diferentes decks. Algumas das últimas expansões são:\n[…]\nSM3 - Sol & Lua: Sombras Ardentes\n[…]\n«Site oficial de Pokémon» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Campeonato Mundial de Pokémon",
      "descricao": "Torneio anual oficial da The Pokémon Company que reúne os melhores jogadores do mundo no card game, nos jogos principais e em outros jogos da franquia."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "O Campeonato Mundial de Pokémon, que no começo reunia só jogadores do card game, foi disputado pela primeira vez em que ano?",
    "resposta": "2004",
    "distratores": [
      "2001",
      "2007",
      "2009"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_World_Championships"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_World_Championships",
        "situacao": "ok",
        "texto": "The Pokémon World Championships is an invite-only trading card game and esports event organized by Play! Pokémon. It is held annually in August and features games from the Pokémon series, including the Pokémon Trading Card Game, Pokémon video games and Pokémon Go. Players earn invitations to the World Championships based on their performance in qualifiers and other tournaments held throughout the \n[…]\nThe Pokémon World Championships first began with the Pokémon Trading Card Game (TCG) in 2004, which was around the time that the franchise was regaining its popularity. In 2008, Play! Pokémon began to organize competitive tournaments for the Pokémon video game series alongside the TCG, which is collectively known as the Video Game Championships (VGC). Like the TCG Championships, players compete with other players in their own age divisions (i.e.\n[…]\nThe winners of these qualifiers then participated in Regionals to earn a spot for Pokémon World Championships.\n[…]\nThe 2014 Pokémon World Championships was the sixth annual edition of the championships. The event took place in the Walter E. Washington Convention Center on Washington, D.C., alongside the 2014 Pokémon Trading Card Game World Championship who were in their eleventh edition.\n[…]\nTop 4 players from the 2013 Pokémon World Championships,\n[…]\nThe 2015 Pokémon World Championships was the seventh  annual edition of the championships. The event was held alongside the Pokémon Trading Card Game World Championships at the Hynes Convention Center in Boston, Massachusetts.\n[…]\nDuring the 2015 World Championships, two Trading Card Game competitors from Iowa (Kevin Norton, 18, and James Stumbo, 27) brought weapons in their vehicle, which were recovered by the police. The two posted status updates and images of their weaponry on social media, which were noticed by various Pokémon fans who treated them as supposed threats against the tournament."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Campeonato_Mundial_de_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "Pokémon World Championships (Campeonato Mundial de Pokémon no Brasil) é um evento de e-Sports organizado pela Play! Pokémon, exclusivo para convidados. Realizado anualmente em agosto, apresenta jogos da série Pokémon, como os jogos eletrônicos de Pokémon, o Pokémon Trading Card Game, Pokémon GO, Pokémon Unite e Pokkén Tournament (até a edição de 2022).\n[…]\nO Campeonato Mundial Pokémon começou com o Pokémon Trading Card Game (TCG) em 2004, época em que a franquia estava recuperando sua popularidade. Em 2008, a Play! Pokémon começou a organizar torneios competitivos para a série de jogos Pokémon, juntamente com o TCG, conhecidos coletivamente como Video Game Championships (VGC).\n[…]\nA partir de 2026, todos os torneios do VGC serão disputados em Pokémon Champions.\n[…]\nEm 2019, foi anunciado que o Campeonato Mundial de Pokémon de 2020 aconteceria em Londres, Reino Unido, a primeira vez que o Campeonato Mundial seria realizado em um local fora da América do Norte. Isso provavelmente se deve ao cenário de Pokémon Sword e Shield, que se passa em uma região inspirada no Reino Unido, conhecida como região de Galar, e esse é o conjunto de jogos que seria disputado pela divisão de jogos do Campeonato Mundial.\n[…]\nNo início de janeiro de 2022, foi confirmado que Pokémon Unite seria jogado no Campeonato Mundial, tornando-se o mais novo jogo MOBA a ter um torneio oficial de e-sports, depois de League of Legends.\n[…]\nNo final do evento de 2023, a The Pokémon Company anunciou que o Campeonato Mundial de Pokémon retornaria ao Havaí pela primeira vez desde que o último Campeonato Mundial no estado foi realizado em 2012. O evento de 2025 foi realizado em Anaheim, Califórnia, e foi a primeira edição do torneio a ter o Championship Sunday realizado em uma arena. O evento de 2026 foi realizado em São Francisco, Califórnia.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Campeonato Mundial de Pokémon",
      "descricao": "Torneio anual oficial da The Pokémon Company que reúne os melhores jogadores do mundo no card game, nos jogos principais e em outros jogos da franquia."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No Campeonato Mundial de Pokémon, os jogadores se dividem por idade em Júnior, Sênior e qual outra categoria, a dos mais velhos?",
    "resposta": "Masters",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_World_Championships"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_World_Championships",
        "situacao": "ok",
        "texto": "The Pokémon World Championships is an invite-only trading card game and esports event organized by Play! Pokémon. It is held annually in August and features games from the Pokémon series, including the Pokémon Trading Card Game, Pokémon video games and Pokémon Go. Players earn invitations to the World Championships based on their performance in qualifiers and other tournaments held throughout the \n[…]\nJunior, Senior and Masters) in different Premier Tournaments, and the season culminates with the best players earning an invitation to play the Pokémon World Championships in August. The tournaments in VGC were played with a different game each year, mainly the latest Pokémon game from its main series, up until 2025. From 2026, all VGC tournaments will be played on Pokémon Champions.\n[…]\nThe 2022 Pokémon GO Championship Series is a series with a purpose of acting as a qualification system to the 2022 Pokémon World Championship. The series consists of events spread throughout the globe. The series is divided into the Senior's and Master's divisions. The series' format revolves around the Great League. Players can enter the championship either by attaining Legend rank during either Season 9 or Season 10 of the GO Battle League, or by registering via Play!\n[…]\nMasters Division\n[…]\nMasters Division\n[…]\nAs an example, the invitations for the Masters Division were distributed as follows:\n[…]\n2014 World Champion\n[…]\nBoth the Pokémon VGC and TCG were divided into three age divisions: the Junior Division (born 2005 or later), the Senior Division (born between 2001 and 2004), and the Masters Division (born 2000 or earlier). For the Pokkén Tournament invitational, players were grouped into either the Senior Division (born 2001 or later) or Masters Division (born 2000 or earlier).\n[…]\nFor the Masters Division, the following table lists the Championship Points requirement for an invitation to the 2016 World Championships:"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Campeonato_Mundial_de_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "Pokémon World Championships (Campeonato Mundial de Pokémon no Brasil) é um evento de e-Sports organizado pela Play! Pokémon, exclusivo para convidados. Realizado anualmente em agosto, apresenta jogos da série Pokémon, como os jogos eletrônicos de Pokémon, o Pokémon Trading Card Game, Pokémon GO, Pokémon Unite e Pokkén Tournament (até a edição de 2022).\n[…]\nAssim como no Campeonato de TCG, os jogadores competem entre si em suas respectivas categorias de idade (Junior, Senior e Master) em diferentes Torneios Premier, e a temporada culmina com os melhores jogadores recebendo um convite para jogar o Campeonato Mundial de Pokémon em agosto. Os torneios do VGC foram disputados com um jogo diferente a cada ano, principalmente o jogo Pokémon mais recente da série principal, até 2025.\n[…]\nEm 2016, a Play! Pokémon anunciou que Pokkén Tournament teria sua própria série de campeonatos e seria jogado no Campeonato Mundial de Pokémon. A partir de 2018, Pokkén Tournament DX foi usado para apoiar suas qualificatórias e competições.\n[…]\nNo início de janeiro de 2022, foi confirmado que Pokémon Unite seria jogado no Campeonato Mundial, tornando-se o mais novo jogo MOBA a ter um torneio oficial de e-sports, depois de League of Legends.\n[…]\nEm maio de 2022, após seis temporadas de competições, a Play! Pokémon anunciou o fim do Pokkén Tournament Championship Series após a temporada de 2022.\n[…]\nNo final do evento de 2023, a The Pokémon Company anunciou que o Campeonato Mundial de Pokémon retornaria ao Havaí pela primeira vez desde que o último Campeonato Mundial no estado foi realizado em 2012. O evento de 2025 foi realizado em Anaheim, Califórnia, e foi a primeira edição do torneio a ter o Championship Sunday realizado em uma arena. O evento de 2026 foi realizado em São Francisco, Califórnia.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Play! Pokémon",
      "descricao": "Programa oficial da The Pokémon Company que organiza ligas, torneios e campeonatos de card game e videogames Pokémon."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Como se chama o programa oficial da The Pokémon Company que organiza ligas, torneios e campeonatos do card game e dos videogames da franquia?",
    "resposta": "Play! Pokémon",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Play!_Pok%C3%A9mon",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_World_Championships"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Play!_Pok%C3%A9mon",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_World_Championships",
        "situacao": "ok",
        "texto": "The Pokémon World Championships is an invite-only trading card game and esports event organized by Play! Pokémon. It is held annually in August and features games from the Pokémon series, including the Pokémon Trading Card Game, Pokémon video games and Pokémon Go. Players earn invitations to the World Championships based on their performance in qualifiers and other tournaments held throughout the \n[…]\nThe Pokémon World Championships first began with the Pokémon Trading Card Game (TCG) in 2004, which was around the time that the franchise was regaining its popularity. In 2008, Play! Pokémon began to organize competitive tournaments for the Pokémon video game series alongside the TCG, which is collectively known as the Video Game Championships (VGC). Like the TCG Championships, players compete with other players in their own age divisions (i.e.\n[…]\nPlayers located in a country with a Play! Pokémon program (i.e. in North America, Europe, Latin America and Oceania) compete in a regular schedule of tournaments for Championship Points and receive invitations when they meet a predetermined threshold of points at the end of the season.\n[…]\nAs of September 1, 2026, the list of territories in each rating zone sanctioned to organize Play! Pokémon events are as follows:\n[…]\nTournaments in Japan and South Korea are organized independently from Play! Pokémon, and as such, players from these countries have a different system of qualification.\n[…]\nPlayers could only gain an invitation to play in the Video Game World Championships by either being the 2014 Pokémon World Champions, or by obtaining enough Championship Points in their respective geographic zone designated by Play! Pokémon. However, the only exception to this rule are for players from Japan and South Korea, as their tournaments are not overseen by Play! Pokémon and their invites are governed through a different system of qualification."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Campeonato_Mundial_de_Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "Pokémon World Championships (Campeonato Mundial de Pokémon no Brasil) é um evento de e-Sports organizado pela Play! Pokémon, exclusivo para convidados. Realizado anualmente em agosto, apresenta jogos da série Pokémon, como os jogos eletrônicos de Pokémon, o Pokémon Trading Card Game, Pokémon GO, Pokémon Unite e Pokkén Tournament (até a edição de 2022).\n[…]\nOs jogadores conquistam convites para o Campeonato Mundial com base em seu desempenho nas eliminatórias e em outros torneios realizados ao longo da temporada, competindo por bolsas de estudo, prêmios e o título de Campeão Mundial. Com exceção da Ásia, os convites para o Campeonato Mundial são administrados pelo programa Play! Pokémon.\n[…]\nO Campeonato Mundial Pokémon começou com o Pokémon Trading Card Game (TCG) em 2004, época em que a franquia estava recuperando sua popularidade. Em 2008, a Play! Pokémon começou a organizar torneios competitivos para a série de jogos Pokémon, juntamente com o TCG, conhecidos coletivamente como Video Game Championships (VGC).\n[…]\nEm maio de 2022, após seis temporadas de competições, a Play! Pokémon anunciou o fim do Pokkén Tournament Championship Series após a temporada de 2022.\n[…]\nPlay! Pokémon é um programa que jogadores localizados em um país (ou seja, na América do Norte, Europa, América Latina e Oceania) competem em um calendário regular de torneios para obter Championship Points e recebem convites quando atingem um limite predeterminado pontos no final da temporada.\n[…]\nEm 2015, o programa Play! Pokémon expandiu-se para incluir países da América Latina e da Ásia (exceto Japão e Coreia do Sul). No entanto, em 10 de junho de 2020, foi anunciado que a Ásia deixaria de fazer parte do programa Play! Pokémon e passaria a ter seu próprio sistema de qualificação para o Campeonato Mundial de Pokémon.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Pokémon Trading Card Game (jogo de Game Boy Color)",
      "descricao": "Jogo de 1998 para Game Boy Color que adapta o card game Pokémon, chamado Pokémon Card GB no Japão."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "No jogo Pokémon Trading Card Game, de Game Boy Color, o objetivo final é ganhar quatro cartas lendárias: as três aves de Kanto e qual outro pokémon?",
    "resposta": "Dragonite",
    "distratores": [
      "Mewtwo",
      "Mew",
      "Charizard"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game_(video_game)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game_(video_game)",
        "situacao": "ok",
        "texto": "Pokémon Trading Card Game, known in Japan as Pokémon Card GB, is a 1998 digital collectible card video game developed by Hudson Soft and Creatures and published by Nintendo for the Game Boy Color. It is an adaptation of the card game of the same name. It was initially released in Japan in December 1998 and internationally in 2000. The game includes the first three sets of the trading card game, as\n[…]\nAlthough Pokémon Trading Card Game features most cards from the first three sets of the collectible card game, two real-life cards are absent from the Game Boy Color version: Electrode from the base set, and Ditto from Fossil. The cards were excluded as it was difficult to translate their tabletop effects to the video game engine, but they are replaced by game-exclusive cards of the same Pokémon (the Electrode card was later made available in Japan via an online card shop).\n[…]\nPokémon Card GB2: Great Rocket-Dan Sanjō!, released March 28, 2001, is a Japanese-exclusive sequel to the original Pokémon Trading Card Game, also for the Game Boy Color. Like its predecessor, the game was developed by Hudson Soft and Creatures, but unlike its predecessor, it was only published by The Pokémon Company, which also marks the first time a Pokémon game was ever published by The Pokémon Company. It was first announced in January 2001 by Japanese website WatchImpress.\n[…]\nThe game features all cards from the original game, along with new cards from the fourth set, Team Rocket, as well as cards originally exclusive to Japanese vending machines and the Pokémon Trading Card Game Instructional Video Intro Pack, bringing the total number of cards to 445.\n[…]\nThough an English release in North America was deemed \"likely\" by website IGN in 2001, the game has not been made available outside Japan. Pokémon Card GB2 earned a 29 out of 40 score from Japanese Weekly Famitsu magazine."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game_%28jogo_eletr%C3%B4nico%29",
        "situacao": "ok",
        "texto": "Pokémon Trading Card Game (ポケモンカードGB, Pokemon Kādo GB) é um jogo da série Pokémon baseado na famosa série Pokémon Trading Card Game, o jogo de cartas dos Pokémon. Apresenta cartas de todos os 151 primeiros Pokémon em uma Região onde não há Pokémon, apenas duelistas com cartas dos mesmos.\n[…]\nApós derrotar o Grand Masters e o rival pela primeira vez, o jogador entra para o Hall of Honor do jogo e recebe cartas exclusivas como Charizard, Venusaur e até Mew.\n[…]\nPokémon Card GB2: Great Rocket-Dan Sanjō! (ポケモンカードGB2　GR団参上！, Pokémon Card GB2: Here Comes Team Great Rocket!), lançado em 28 de março de 2001, é a continuação exclusiva em japonês do original  Pokémon Trading Card Game , também para o Game Boy Color. Como o seu antecessor, o jogo foi desenvolvido pela Hudson Soft and Creatures, e publicado pela Nintendo. Foi anunciado pela primeira vez em janeiro de 2001 pelo site japonês WatchImpress.\n[…]\nO jogo apresenta todas as cartas do jogo original, juntamente com novas cartas do quarto set, Team Rocket, bem como cartas originalmente exclusivo das máquinas de venda automática japonesas e do Pacote de Introdução à Instrução de Vídeo Instrucional Pokémon Trading Card, elevando o número total de cartões para 445.\n[…]\nDerrotando um total de 16 Battle Masters nas antigas e novas ilhas, os jogadores podem desafiar o chefe final do jogo, o Rei Biruritchi. Apesar de um lançamento em inglês na América do Norte ter sido considerado \"provável\" pelo site IGN em 2001, o jogo não foi disponibilizado fora do Japão. \"Pokémon Card GB2 \"ganhou 29 de 40 pontos da revista japonesa Weekly Famitsu.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Pokémon Trading Card Game (jogo de Game Boy Color)",
      "descricao": "Jogo de 1998 para Game Boy Color que adapta o card game Pokémon, chamado Pokémon Card GB no Japão."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Pokémon Trading Card Game, a adaptação do card game para o Game Boy Color, foi lançada no Japão em que ano?",
    "resposta": "1998",
    "distratores": [
      "1997",
      "1999",
      "2000"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game_(video_game)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game_(video_game)",
        "situacao": "ok",
        "texto": "Pokémon Trading Card Game, known in Japan as Pokémon Card GB, is a 1998 digital collectible card video game developed by Hudson Soft and Creatures and published by Nintendo for the Game Boy Color. It is an adaptation of the card game of the same name. It was initially released in Japan in December 1998 and internationally in 2000. The game includes the first three sets of the trading card game, as\n[…]\nAlthough Pokémon Trading Card Game features most cards from the first three sets of the collectible card game, two real-life cards are absent from the Game Boy Color version: Electrode from the base set, and Ditto from Fossil. The cards were excluded as it was difficult to translate their tabletop effects to the video game engine, but they are replaced by game-exclusive cards of the same Pokémon (the Electrode card was later made available in Japan via an online card shop).\n[…]\nThe game was revealed in November 1998 and released in Japan on December 18, under the title Pokémon Card GB (ポケモンカードGB, Pokemon Kādo Jī Bī) one month before the tabletop version debuted in English. In September 1999, Nintendo of America announced that they would be releasing an English version in North America with the proposed title of simply Pokémon Card.\n[…]\nAn exclusive tabletop version promotional card from Wizards of the Coast featuring Meowth was included with the game.\n[…]\nPokémon Card GB2: Great Rocket-Dan Sanjō!, released March 28, 2001, is a Japanese-exclusive sequel to the original Pokémon Trading Card Game, also for the Game Boy Color. Like its predecessor, the game was developed by Hudson Soft and Creatures, but unlike its predecessor, it was only published by The Pokémon Company, which also marks the first time a Pokémon game was ever published by The Pokémon Company. It was first announced in January 2001 by Japanese website WatchImpress.\n[…]\nPokémon Play It!, a PC game with a similar concept"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game_%28jogo_eletr%C3%B4nico%29",
        "situacao": "ok",
        "texto": "Pokémon Trading Card Game (ポケモンカードGB, Pokemon Kādo GB) é um jogo da série Pokémon baseado na famosa série Pokémon Trading Card Game, o jogo de cartas dos Pokémon. Apresenta cartas de todos os 151 primeiros Pokémon em uma Região onde não há Pokémon, apenas duelistas com cartas dos mesmos.\n[…]\nPokémon Card GB2: Great Rocket-Dan Sanjō! (ポケモンカードGB2　GR団参上！, Pokémon Card GB2: Here Comes Team Great Rocket!), lançado em 28 de março de 2001, é a continuação exclusiva em japonês do original  Pokémon Trading Card Game , também para o Game Boy Color. Como o seu antecessor, o jogo foi desenvolvido pela Hudson Soft and Creatures, e publicado pela Nintendo. Foi anunciado pela primeira vez em janeiro de 2001 pelo site japonês WatchImpress.\n[…]\nO jogo apresenta todas as cartas do jogo original, juntamente com novas cartas do quarto set, Team Rocket, bem como cartas originalmente exclusivo das máquinas de venda automática japonesas e do Pacote de Introdução à Instrução de Vídeo Instrucional Pokémon Trading Card, elevando o número total de cartões para 445.\n[…]\nComo no título anterior, os jogadores devem viajar pelo mundo do jogo desafiando personagens que não sejam jogadores a batalhas simuladas usando regras adotadas da versão original do tabletop. Todos os locais do original estão presentes, juntamente com uma nova configuração conhecida como GR Island, que contém seus próprios Battle Masters para os jogadores encontrarem.\n[…]\nDerrotando um total de 16 Battle Masters nas antigas e novas ilhas, os jogadores podem desafiar o chefe final do jogo, o Rei Biruritchi. Apesar de um lançamento em inglês na América do Norte ter sido considerado \"provável\" pelo site IGN em 2001, o jogo não foi disponibilizado fora do Japão. \"Pokémon Card GB2 \"ganhou 29 de 40 pontos da revista japonesa Weekly Famitsu.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Celebrations (coleção)",
      "descricao": "Coleção comemorativa dos 25 anos de Pokémon, lançada em 2021, com reimpressões de cartas clássicas do card game."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Para os 25 anos de Pokémon, em 2021, que coleção do card game reimprimiu cartas clássicas, como o Charizard holográfico do Base Set?",
    "resposta": "Celebrations",
    "fonte": [
      "https://bulbapedia.bulbagarden.net/wiki/Celebrations_(TCG)",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game"
    ],
    "trechos": [
      {
        "url": "https://bulbapedia.bulbagarden.net/wiki/Celebrations_(TCG)",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game",
        "situacao": "ok",
        "texto": "The Pokémon Trading Card Game (Japanese: ポケモンカードゲーム, Hepburn: Pokemon Kādo Gēmu; \"Pokémon Card Game\"), abbreviated as PTCG or Pokémon TCG, is a tabletop and collectible card game developed by Creatures Inc. based on the Pokémon franchise. Originally published in Japan by Media Factory in 1996, publishing worldwide is currently handled by the Pokémon Company. In the United States, the game was orig\n[…]\nThe \"Pikachu Illustrator\" is the rarest and most expensive Pokémon card ever sold in history, and it was acquired by the celebrity and collector Logan Paul for $5,275,000 in July 2021. In February 2026, it was sold for $16.5 million.\n[…]\nOn September 20, 2021, another Pokémon Trading Card Game-based video game was announced, titled Pokémon Trading Card Game Live. A closed beta of Pokémon Trading Card Game Live was released for Canadian players on February 22, 2022. Later, a global beta of Pokémon Trading Card Game Live was released on November 15, 2022 on Android, iOS, Microsoft Windows. The game is now also available on macOS.\n[…]\nUpon the full release, Pokémon Trading Card Game Live replaced Pokémon Trading Card Game Online, and the latter was discontinued shortly after. Crown Zenith was the final set supported on Pokémon Trading Card Game Online. Existing players of Pokémon Trading Card Game Online can transfer their account and in-game data to Pokémon Trading Card Game Live.\n[…]\nOn February 27, 2024, another Pokémon Trading Card Game-based video game for Android and iOS was announced in the Pokémon Presents presentation  developed by Creatures (company) and DeNA titled Pokémon Trading Card Game Pocket. The game features entirely original digital cards not present in the physical card game featuring dynamic artwork, as well as the ability to look into the artwork of certain cards to see obscured elements. The gameplay utilizes streamlined battle and trading systems."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game",
        "situacao": "ok",
        "texto": "Pokémon Trading Card Game ou Pokémon Estampas Ilustradas no Brasil (originalmente: ポケモンカードゲーム, Pokemon Card Game), é um jogo de cartas colecionáveis, desenvolvidos pela Creatures Inc. baseadas na franquia japonesa Pokémon. Foi publicado pela primeira vez em outubro de 1996, pela Media Factory, no Japão. Nos Estados Unidos, foi inicialmente publicado pela Wizards of the Coast; sendo assumida pela N\n[…]\nEstampas Ilustradas tem sido objeto de torneios informais e oficialmente sancionados. Os torneios oficiais são atualmente supervisionados pela Play! Pokémon, uma divisão da The Pokémon Company, e são hospedados em uma base local, nacional e internacional. Além disso, inúmeras adaptações de videogame foram publicadas, incluindo Pokémon Trading Card Game (Game Boy Color), a série Pokémon: Play It! (PC), Pokémon TCG Online (PC).\n[…]\nApós o fechamento do TCG Online em 2023, ele foi substituído por Pokémon Trading Card Game Live (PC) e Pokémon Trading Card Game Pocket (celular) em 2024.\n[…]\nExistem 4 tipos de cartas Trainer: Normais; Estádio; Ferramentas Pokémon; e Suporte.\n[…]\nAs cartas estádio causam diversos efeitos, como impedir mais de cinco Pokémon no campo (como Ginásio Narrow), dar a chance de puxar várias cartas (como Speed Stadium) e muitos outros mais. O fato curioso dessas cartas é que quando essas deixaram de ser Trainer, não receberam mais tradução, ficando, somente, Stage.\n[…]\nCada jogador deve ter um deck de 60 cartas com pelo menos um Pokémon Básico. Um embaralha o deck do outro e coloca seis cartas viradas para baixo. Essas são as \"cartas prêmio\". Depois, os decks são devolvidos aos donos e cada um pega uma mão de sete cartas. Se não houver Pokémon Básicos, este reembaralha o deck e pega mais uma mão de sete cartas. O outro jogador tem a opção de pegar mais uma carta por nova mão do adversário.\n[…]\nEvoluir um Pokémon\n[…]\n«Site oficial brasileiro do Pokémon Trading Card Game»",
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
