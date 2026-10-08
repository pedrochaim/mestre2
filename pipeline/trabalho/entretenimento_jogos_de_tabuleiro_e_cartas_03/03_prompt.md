Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Jogos de Tabuleiro e Cartas** (tema **Entretenimento**). Avalie **cada uma**, independentemente, e decida:

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
7. **Distratores** (só em `multipla`): críveis, da mesma categoria da resposta e com no máximo 4 palavras (MANIFESTO §6).
8. **Duplicatas:** se duas perguntas do lote perguntam o mesmo fato, mantenha a melhor e descarte a outra.

Devolva exatamente uma avaliação para cada pergunta, usando o `indice` informado.

# Lote

[
  {
    "indice": 1,
    "ancora": {
      "nome": "Cavalo (xadrez)",
      "descricao": "Peça de xadrez com cabeça de cavalo, que se move em L e salta sobre as outras peças."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "No primeiro lance de uma partida de xadrez, além dos peões, qual é a única peça que já pode se mover?",
    "resposta": "Cavalo",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Cavalo_(xadrez)",
      "https://en.wikipedia.org/wiki/Knight_(chess)"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Cavalo_(xadrez)",
        "situacao": "ok",
        "texto": "O Cavalo é uma peça menor do xadrez ocidental de um valor aproximado de três peões. Tem um movimento assemelhado a um \"L\" e, diferente das outras peças, pode pular as peças intervenientes. Captura tomando a casa ocupada pela peça adversária, sendo sempre no final do L.\n[…]\nNo início de uma partida, cada jogador tem duas peças que são dispostas nas colunas b e g, na primeira fileira para as brancas e na oitava para as pretas. A peça é mais ativa no centro ampliado onde pode atacar mais casas do que no canto e é a única que não consegue perder um tempo e em função disso não consegue evitar posições de zugzwang. Jogadores inexperientes normalmente temem o cavalo por não compreender o modo excêntrico de seu movimento, sendo pegos de surpresa com a tática do garfo.\n[…]\nAo final da partida, sua vantagem nem sempre é o suficiente para garantir a vitória por não conseguir atravessar o tabuleiro em um só movimento embora seja um bom bloqueador de peões.\n[…]\nPor ser uma peça de curto alcance, o cavalo deve ser empregado no centro do tabuleiro no qual pode se movimentar por mais casas. Na primeira e segunda fileiras, é considerado uma peça defensiva que deve ser movida para a terceira ou a quarta fileiras, onde pode tanto atacar quanto defender com facilidade. Na quinta e sexta fileiras, sua posição é agressiva e deve ser baseada em pontos de apoio onde não pode ser atacado por peões adversários, ou se o for enfraqueça as defesas adversárias.\n[…]\nO nightrider é uma peça que tem o seu movimento semelhante ao cavalo, tendo sido inventada por W. S. Andrews em 1907 para utilização em problemas de xadrez. Um nightrider em a1 pode-se mover para c2, e3 e g4 ou em outra linha para b3, c5 e d7 podendo pular as peças intervenientes exceto as localizadas no ponto onde passa."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Knight_(chess)",
        "situacao": "ok",
        "texto": "The knight (♘, ♞) is a piece in the game of chess. It moves two squares vertically and one square horizontally, or two squares horizontally and one square vertically, jumping over other pieces. Each player starts the game with two knights on the b- and g-files, each located between a rook and a bishop."
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Pôquer",
      "descricao": "Jogo de cartas de apostas e blefe em que vence a melhor combinação de cinco cartas."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "No pôquer, qual destas mãos é a mais forte?",
    "resposta": "Full house",
    "distratores": [
      "Flush",
      "Sequência",
      "Trinca"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/List_of_poker_hands"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/List_of_poker_hands",
        "situacao": "ok",
        "texto": "In poker, players form sets of five playing cards, called hands, according to the rules of the game. Each hand has a rank, which is compared against the ranks of other hands participating in the showdown to decide who wins the pot. In high games, like Texas hold 'em and seven-card stud, the highest-ranking hands win. In low games, like razz, the lowest-ranking hands win.\n[…]\nFour of a kind, also known as quads or four cards, is a hand that contains four cards of one rank and one card of another rank (the kicker), such as 9♣ 9♠ 9♦ 9♥ J♥ (\"four of a kind, nines\" or \"quad nines\"). It ranks below a straight flush and above a full house.\n[…]\nA full house, also known as a full boat or a tight or a boat (and originally called a full hand), is a hand that contains three cards of one rank and two cards of another rank, such as 3♣ 3♠ 3♦ 6♣ 6♥ (a \"full house, threes over sixes\" or \"threes full of sixes\" or \"threes full\"). It ranks below four of a kind and above a flush.\n[…]\nEach full house is ranked first by the rank of its triplet, and then by the rank of its pair. For example, 8♠ 8♦ 8♥ 7♦ 7♣ ranks higher than 4♦ 4♠ 4♣ 9♦ 9♣, which ranks higher than 4♦ 4♠ 4♣ 5♣ 5♦. Full house hands that differ by suit alone, such as K♣ K♠ K♦ J♣ J♠ and K♣ K♥ K♦ J♣ J♥, are of equal rank.\n[…]\nA flush is a hand that contains five cards all of the same suit, not all of sequential rank, such as K♣ 10♣ 7♣ 6♣ 4♣ (a \"king-high flush\" or a \"king-ten-high flush\"). It ranks below a full house and above a straight. Under ace-to-five low rules, flushes are not possible (so J♥ 8♥ 4♥ 3♥ 2♥ is a jack-high hand).\n[…]\nGlossary of poker terms\n[…]\nNon-standard poker hand\n[…]\nPoker probability\n[…]\nMedia related to Poker hands at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_jogadas_do_p%C3%B4quer",
        "situacao": "ok",
        "texto": "Esta lista reúne todas as possibilidades de combinações possíveis no jogo de poker.\n[…]\nProbabilidade no pôquer\n[…]\nPrintable chart of poker hand rankings (.pdf format)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Scrabble",
      "descricao": "Jogo de tabuleiro de formar palavras com peças de letras, criado pelo arquiteto americano Alfred Butts."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "No Scrabble em inglês, duas letras valem dez pontos, o máximo do jogo. Uma delas é o Q. Qual é a outra?",
    "resposta": "Z",
    "distratores": [
      "X",
      "J",
      "K"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Scrabble_letter_distributions"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Scrabble_letter_distributions",
        "situacao": "ok",
        "texto": "Editions of the word board game Scrabble in different languages have differing letter distributions of the tiles, because the frequency of each letter of the alphabet is different for every language. As a general rule, the rarer the letter, the more points it is worth.\n[…]\nMath sets in Scrabble3D use these 100 tiles:\n[…]\nThis set of Tamil Scrabble is played on a 45×45 board (or a 15×15×15 board in 3D), and 20 tiles are on a rack at a time (but can be lowered to as low as 15 for experts). Note that ங, ஙா, ஙி, ஙீ, ஙு, ஙூ, ஙெ, ஙே, ஙை, ஙொ, ஙோ, ஙௌ, ஞி, ஞீ, ஞு, ஞூ, ஞெ, ஞே, ஞை, ஞொ, ஞோ, ஞௌ, டௌ, ணொ, ணௌ, நௌ, யௌ, ரௌ, லௌ, ழீ, ழூ, ழெ, ழே, ழொ, ழோ, ழௌ, ளௌ, றௌ and னௌ have no tiles because they are very rare in Tamil; these letters can still be played with a blank.\n[…]\nஶ், ஶ, ஶா, ஶி, ஶீ, ஶு, ஶூ, ஶெ, ஶே, ஶை, ஶொ, ஶோ and ஶௌ have no tiles because these are only used in very few Sanskrit loanwords, but can still be played with a blank. Tamil Scrabble can be also played with smaller boards with smaller letter sets (with as low as 15 tiles on the rack, depending on the set) or with larger boards with larger letter sets.\n[…]\nA smaller set of the easy version in Scrabble3D which is played on a 21×21 board, but without including some of the rarely used Tamil letters uses these 200 tiles:\n[…]\nThai Scrabble sets, which are called Khum Khom (คำคม), uses these 104 tiles. Note that the slashed tiles can be used for one of the two following letters:\n[…]\nTuvan-language Scrabble sets, which use Cyrillic letters, use these 125 tiles:\n[…]\nAnother Vietnamese board game based on Scrabble, called \"Cờ Ô Chữ\", released in 2022, contains these tiles:\n[…]\nZhuyin Chinese-language editions of Scrabble use these 100 tiles:\n[…]\nMore information on Scrabble in these languages can be found at the Wordgame Programmers site."
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Truco",
      "descricao": "Jogo de cartas de blefe, muito popular no Brasil, jogado com baralho sem oitos, noves e dez."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "No truco mineiro, a carta mais forte é o zap, o quatro de paus. Qual é a segunda carta mais forte do jogo?",
    "resposta": "Sete de copas",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Truco"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Truco",
        "situacao": "ok",
        "texto": "Truco é um jogo de cartas surgido no Reino de Valência (atual Comunidade Valenciana, Espanha) praticado em diversos locais da América do Sul, algumas regiões da Espanha (Valência e Ilhas Baleares) e Itália. É um jogo de vazas jogado com o baralho espanhol, por dois, quatro ou seis jogadores, divididos em dois lados opostos. Na Região Sudeste do Brasil é jogado com o baralho francês, enquanto na Re\n[…]\nO jogo é disputado em mãos. Cada mão vale inicialmente 1 ponto, e ganha o jogo a dupla, trio, etc. que fizer 12 pontos. A mão é dividida em três rodadas (ou vazas). Em cada rodada cada jogador coloca uma de suas cartas na mesa, e o jogador com a carta mais forte vence a rodada. Quem ganhar duas dessas rodadas ganha a mão e marca 1 ponto, e uma nova mão se inicia.\n[…]\nO jogo é disputado em mãos. Cada mão vale inicialmente 2 pontos, e ganha o jogo a dupla, trio, etc. que fizer 12 pontos. A mão é dividida em três rodadas (ou vazas). Em cada rodada cada jogador coloca uma de suas cartas na mesa, e o jogador com a carta mais forte vence a rodada. Quem ganhar duas dessas rodadas ganha a mão e marca 2 pontos, e uma nova mão se inicia.\n[…]\nA qualquer hora o jogador pode pedir Truco. É o grande momento do jogo. O Truco é pedido para elevar a aposta a Quatro tentos. Ao ser trucada, a dupla adversária tem direito a três ações:\n[…]\nFinalmente, pela segunda ação, a dupla que pediu queda deixa à dupla que pediu jogo duas ações:\n[…]\nEm cada mão são distribuídas três cartas para cada jogador. A cada vez, um dos participantes será o mão, responsável por jogar a primeira carta e a vitória no caso de empate na jogada das cartas. As mãos são formadas por três rodadas, começadas pelo jogador mão (que ficará sempre à direita de quem deu as cartas). Em cada rodada, o jogador abre uma carta na mesa, e vence aquele que tiver a mais forte. O vencedor é o jogador ou dupla que vencer duas das três rodadas."
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "War (jogo)",
      "descricao": "Jogo de tabuleiro brasileiro de estratégia e conquista de territórios lançado pela Grow, inspirado no Risk."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "No War, jogo de conquista de territórios, que continente dá mais exércitos de bônus a quem o domina por inteiro?",
    "resposta": "Ásia",
    "distratores": [
      "América do Norte",
      "Europa",
      "África"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/War_(jogo)",
      "https://en.wikipedia.org/wiki/Risk_(game)"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/War_(jogo)",
        "situacao": "inexistente",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Risk_(game)",
        "situacao": "ok",
        "texto": "Risk is a strategy board game of diplomacy, conflict and conquest for two to six players. The standard version is played on a board depicting a political map of the world, divided into 42 territories, which are grouped into six continents. Turns rotate among players who control armies of playing pieces with which they attempt to capture territories from other players, with results determined by di\n[…]\nSetup consists of determining order of play, issuing armies to players, and allocating the territories on the board among players, who place one or more armies on each one they own. At the beginning of a player's turn, they receive reinforcement armies proportional to the number of territories held, bonus armies for holding whole continents, and additional armies for turning in matched sets of territory cards obtained by conquering new territories.\n[…]\nWhen attacking, a battle may continue until the attacker decides to stop attacking, the attacker has no more armies with which to attack, or the defender has lost their last army at the defending territory, at which point the attacker takes over the territory by moving armies onto it and draws a territory card for that turn.\n[…]\nPlayers should control entire continents to get the bonus reinforcement armies.\n[…]\nHolding continents is the most common way to increase reinforcements. Players often attempt to gain control of Australia early in the game, since Australia is the only continent that can be successfully defended by heavily fortifying one country (either Siam or Indonesia). Generally, continents with fewer access routes are easier to defend as they possess fewer territories that can be attacked by other players.\n[…]\nSouth America has 2 access points, North America and Africa each have 3, Europe has 4, and Asia has 5.\n[…]\nRisk: Halo Wars Collector's Edition (2009) – Includes UNSC, Covenant, and The Flood. It has 42 territories and 6 sectors."
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Uno",
      "descricao": "Jogo de cartas americano de descarte por cor e número, criado em 1971."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Ao fim de uma rodada de Uno, as cartas que sobram na mão dos adversários viram pontos para o vencedor. Quais cartas valem mais?",
    "resposta": "Os curingas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Uno_(card_game)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Uno_(card_game)",
        "situacao": "ok",
        "texto": "Uno ( ; from Spanish and Italian for 'one'), stylized in all caps as UNO, is a proprietary American shedding-type card game originally developed in 1971 by Merle Robbins in Reading, Ohio, a suburb of Cincinnati, that housed International Inc., a gaming company acquired by Mattel on January 23, 1992."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Uno_%28jogo_de_cartas%29",
        "situacao": "ok",
        "texto": "Uno (estilizado UNO) é um jogo de cartas estadunidense com detalhes especiais (que o diferenciam do Mau-mau), desenvolvido por Merle Robbins e familiares (com a participação de Samuel Sosthenes) em 1971. Hoje é vendido nos Estados Unidos pela Mattel e no Brasil pela Copag. Uno é um dos jogos de cartas mais famosos e mais vendidos no mundo todo.\n[…]\nDepois de um jogador jogar a sua carta, o próximo ao sentido horário ou anti-horário - se estiver invertida a ordem - joga. As cartas podem ser jogadas na sequência (crescente ou decrescente) dos números, caso possuam a mesma cor.\n[…]\n. Lembrando que para vencer o jogo tem que restar na mão uma carta apenas e o jogador deve avisar todos dizendo uno. Não se pode esvaziar todas as cartas da mão de uma vez só. Caso alguém esvazie as cartas da mão de uma vez só ou esqueça de dizer uno deve comprar mais cinco cartas, e mesmo que a pessoa não perceba que ela não falou uno, ela mesmo assim tem que comprar.\n[…]\nUm outro método para encerrar o jogo é quando no final de cada partida (quando algum jogador estiver sem nenhuma carta) os outros jogadores revelam suas mãos e a contagem de pontos é feita. As cartas que restaram na mão de cada oponente deve ser somadas seguindo as regras abaixo. Ganha o jogador que consegue 500 pontos(ou o mais próximo disso).\n[…]\nNão importa quem não tiver mais cartas, quem termina as cartas  primeiro sempre será o vencedor da partida e quem somar 500 primeiro será o vencedor do jogo.\n[…]\nCartas de 0 a 9 tem o valor de sua face;\n[…]\nComprar duas, reverter e pular valem 20 pontos;\n[…]\nCoringa e Coringa comprar quatro, coringa personalizável, trocar de mãos e embaralhar cartas valem 50 pontos.\n[…]\nSe foi legal, quem olhou deve pegar mais duas cartas de penalização. Só o jogador que recebeu quatro cartas pode pedir para olhar a mão do outro jogador.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Dado de vinte faces",
      "descricao": "Dado em forma de icosaedro, com faces numeradas de um a vinte, símbolo dos jogos de RPG de mesa."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "No conjunto clássico de dados dos jogos de RPG, como Dungeons and Dragons, qual é o dado com mais faces?",
    "resposta": "O de vinte faces",
    "fonte": [
      "https://en.wikipedia.org/wiki/Dice"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Dice",
        "situacao": "ok",
        "texto": "A die (plural: dice, sometimes also used as singular) is a small, throwable object with marked sides that can rest in multiple positions. Dice are used for generating random values, commonly as part of tabletop games, including dice games, board games, role-playing games, and games of chance.\n[…]\n\"Uniform fair dice\" are dice where all faces have an equal probability of outcome due to the symmetry of the die as it is face-transitive. In addition to the Platonic solids, these theoretically include:\n[…]\nTrapezohedra, the duals of the infinite set of antiprisms, with kite faces: any even number not divisible by 4 (so that a facet faces up), starting from 6\n[…]\nBipyramids, the duals of the infinite set of prisms, with triangle faces: any multiple of 4 (so that a facet faces up), starting from 8\n[…]\nLong dice and teetotums can, in principle, be made with any number of faces, including odd numbers. Long dice are based on the infinite set of prisms. All the rectangular faces are mutually face-transitive, so they are equally probable. The two ends of the prism may be rounded or capped with a pyramid, designed so that the die cannot rest on those faces. 4-sided long dice are easier to roll than tetrahedra and are used in the traditional board games dayakattai and daldøs.\n[…]\nThe faces of most dice are labelled using sequences of whole numbers, usually starting at one, expressed with either pips or digits. However, there are some applications that require results other than numbers. Examples include letters for Boggle, directions for Warhammer, Fudge dice, playing card symbols for poker dice, and instructions for sexual acts using sex dice."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dado_%28pe%C3%A7a%29",
        "situacao": "ok",
        "texto": "Os dados são pequenos poliedros gravados com determinadas instruções. O dado mais clássico é o cubo (seis faces), gravado com números de um a seis. Existem também dados de duas faces (representados por moedas), três faces (igual a um dado clássico de seis lados, mas com apenas três números, sendo cada um repetido duas vezes), quatro faces (em formato piramidal), oito faces, dez faces, 12 faces, 20\n[…]\nUma pequena curiosidade quanto aos dados clássicos (fabricados de forma correta), de seis lados: a soma dos lados opostos resulta no número sete. Ou seja, se de um lado temos o número um automaticamente teríamos o número seis do outro lado. Isso ocorre também com o dois casando com o cinco, e o três com o quatro. Isso se aplica também a qualquer outro dado, a soma de dois lados opostos sempre é igual ao número de faces mais um.\n[…]\nDados com imagens do Kamasutra;\n[…]\nDados poliédricos são dados com quatro(mínimo) ou mais lados . Eles foram quase uma exclusividade de adivinhos e outras práticas ocultas, mas rapidamente tornaram-se populares entre os jogadores de RPG, Jogos de cartas e alguns jogos de tabuleiro. Embora o uso de dados poliédricos seja relativamente novo na nossa cultura atual, algumas civilizações antigas usavam algo parecido em jogos (uma evidência são os dois dados de 20 faces datados da era romana em exposição no Museu Britânico).\n[…]\nMuitas vezes quando se utiliza dados multifacetados, refere-se a eles pelo número de faces e a letra 'd', como d6 para um dado de seis faces, d10 para um dado de dez faces, e assim por diante. Caso seja necessário mais de um dado é acrescentado um número a frente do 'd' - Número de dados 'd' Número de lados de cada dado. Combinações de dados e de outros números também são possíveis, tais como '1d10-3' seria um dado de dez lados e o seu resultado menos três.\n[…]\n«A Brief History of Dice» (em inglês)  (História dos dados nos jogos Dungeons & Dragons)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Roleta",
      "descricao": "Jogo de cassino em que uma bolinha cai em um dos compartimentos numerados e coloridos de uma roda giratória."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "A roleta americana tem uma casa a mais que a roleta europeia. Que número aparece nessa casa extra?",
    "resposta": "Duplo zero",
    "fonte": [
      "https://en.wikipedia.org/wiki/Roulette",
      "https://pt.wikipedia.org/wiki/Roleta"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Roulette",
        "situacao": "ok",
        "texto": "Roulette (named after the French word meaning \"little wheel\") is a casino game which was likely developed from the Italian game Biribi. In the game, a player may choose to place a bet on a single number, various groupings of numbers, the color red or black, whether the number is odd or even, or if the number is high or low.\n[…]\nIn some forms of early American roulette wheels, there were numbers 1 to 28, plus a single zero, a double zero, and an American Eagle. The Eagle slot, which was a symbol of American liberty, was a house slot that brought the casino an extra edge. Soon, the tradition vanished and since then the wheel features only numbered slots.\n[…]\nThe double zero wheel is found in the United States, Canada, South America, and the Caribbean, while the single zero wheel is predominant elsewhere.\n[…]\nTriple-zero wheel\n[…]\nThe European-style layout has a single zero, and the American style layout is usually a double-zero. The American-style roulette table with a wheel at one end is now used in most casinos because it has a higher house edge compared to a European layout.\n[…]\nThis type of bet is popular in Germany and many European casinos. It is also offered as a 5-chip bet in many Eastern European casinos. As a 5-chip bet, it is known as \"zero spiel naca\" and includes, in addition to the chips placed as noted above, a straight-up on number 19.\n[…]\nWhereas betting systems are essentially an attempt to beat the fact that a geometric series with initial value of 0.95 (American roulette) or 0.97 (European roulette) will inevitably over time tend to zero, engineers instead attempt to overcome the house edge through predicting the mechanical performance of the wheel, most notably by Joseph Jagger at Monte Carlo in 1873. These schemes work by determining that the ball is more likely to fall at certain numbers."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Roleta",
        "situacao": "ok",
        "texto": "A roleta é um jogo de azar muito comum em casinos. O termo deriva do francês roulette, que significa \"roda pequena\". O uso da roleta como elemento de jogo de azar, em configurações distintas da atual, não está documentado na entrada da Idade Média. É de suspeitar que a sua referência mais antiga seja a chamada \"Roda da Fortuna\", conhecida ao longo de toda a história. A \"magia\" do movimento das rod\n[…]\nAo usar a roda de estilo americano com 0 e 00, a vantagem (“vigorosa”) para o banco aumenta para 2 partes extras em 38, ou cerca de 5,26% de todas as apostas. A única exceção é a aposta na linha de 5 números, em que a vantagem da casa é de cerca de 7,89%.\n[…]\nA roleta, conforme jogada em outros locais que não os Estados Unidos e o Caribe, é a mesma, exceto que a roda e o layout contêm apenas um único zero (0). Isso reduz a vantagem do banco para cerca de 2,7 por cento. Em alguns casinos, quando 0 aparece, todas as apostas de dinheiro par - vermelho, preto, ímpar, par, alto, baixo — estão na prisão (“aprisionadas”).\n[…]\nVoisins du Zéro cobre 17 bols consecutivos da roleta europeia: o setor começa no 22, passa pelo 0 e termina no 25. Tiers du Cylindre está localizado no lado oposto da roda e inclui 12 números; normalmente é coberto por seis apostas split. Para apostas nessas secções utiliza‑se a pista — um esquema oval adicional que reproduz a ordem física dos números na roda, e não a grelha retangular do campo principal.\n[…]\nNa roleta europeia e na francesa, as apostas vizinhas e as apostas de chamada formam grupos de números com base na sua posição na roda, e não pela proximidade das casas no tapete principal. Para Voisins du Zéro, a disposição padrão exige nove fichas: duas são colocadas no trio 0–2–3, duas no corner 25–26–28–29, e as restantes cinco em splits 4/7, 12/15, 18/21, 19/22 e 32/35.\n[…]\nRoleta russa"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Peão (xadrez)",
      "descricao": "Peça mais numerosa do xadrez, oito para cada lado, que avança para a frente e captura na diagonal."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Rei, dama, torre, bispo, cavalo e peão: qual dessas peças do xadrez só pode se mover para a frente?",
    "resposta": "Peão",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pawn_(chess)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pawn_(chess)",
        "situacao": "ok",
        "texto": "The pawn (♙, ♟) is the most numerous and weakest piece in the game of chess. It can move one vacant square directly forward, or one or two vacant squares directly forward on its first move, and can capture one square diagonally forward. Each player begins a game with eight pawns, one on each square of their second rank. The white pawns start on a2 through h2, while the black pawns start on a7 thro"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pe%C3%A3o_%28xadrez%29",
        "situacao": "ok",
        "texto": "O peão (♙, ♟) é uma peça menor do xadrez. No início de uma partida, cada jogador tem oito peças que são dispostas nas fileiras 2 para as brancas e 7 para as pretas. O peão move-se verticalmente na coluna que encontra-se, sendo incapaz de recuar. No primeiro movimento de cada peão, a partir do ponto de partida, pode avançar duas casas e, a partir daí, uma.\n[…]\nAo atingir a oitava linha transforma-se em qualquer outra peça, excluindo o rei, movimento chamado de coroação ou promoção; o peão será substituído imediatamente por outra peça: cavalo, bispo, torre ou dama (rainha) e deverá ser removido do tabuleiro, quando promovido, ele não pode ser removido novamente do jogo na mesma jogada. Está presente inclusive em variantes do jogo, tendo servido de inspiração para algumas peças não-ortodoxas.\n[…]\nFazendeiro (peão da Torre da Dama, para quem ele trabalha);\n[…]\nTecelão (peão do Bispo da Dama);\n[…]\nEstalajadeiro (peão do Bispo do Rei);\n[…]\nO peão tem a possibilidade de tornar-se torre, cavalo, bispo ou dama, uma vez que alcançou a última fileira, ou seja, em qualquer peça da mesma cor exceto peão ou rei. Isso é chamado de promoção, e representa um tema importante a considerar em táticas e estratégias. A medida que o peão avança, seu valor relativo aumenta e deve-se evitar que o peão seja bloqueado pelas peças adversárias, que irão mobilizar esforços para impedir seu avanço.\n[…]\nPortanto, em certos casos, pode ser preferível a promoção para uma torre, cavalo ou bispo, o que também é chamado de \"subpromoção\".\n[…]\nExistem diversas peças não-ortodoxas de xadrez baseadas no peão. Com movimento similar ao do peão, consta o superpeão que pode avançar pelo número de casas disponíveis à frente e captura na diagonal de modo à frente de modo similar ao bispo. O peão berolina possui o movimento invertido, isto é, avança na diagonal e captura a peça à sua frente na mesma coluna.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Texas Hold'em",
      "descricao": "Modalidade de pôquer em que cada jogador recebe duas cartas fechadas e divide com os outros cinco cartas comunitárias."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No pôquer Texas Hold'em, como se chamam as três primeiras cartas comunitárias, abertas juntas no meio da mesa?",
    "resposta": "Flop",
    "fonte": [
      "https://en.wikipedia.org/wiki/Texas_hold_%27em"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Texas_hold_%27em",
        "situacao": "ok",
        "texto": "Texas hold 'em (also known as Texas holdem, hold 'em, and holdem) is a popular variant of the card game of poker. Two cards, known as hole cards, are dealt face down to each player, and then five community cards are dealt face up in three stages. The stages consist of a series of three cards (\"the flop\" or \"third street\"), later an additional single card (\"the turn\" or \"fourth street\"), and a fina\n[…]\nEach player seeks the best five-card poker hand from any combination of the seven cards: the five community cards and their two hole cards. Players have betting options to check, call, raise, or fold. Rounds of betting take place before the flop is dealt and after each subsequent deal. The player who has the best hand and has not folded by the end of all betting rounds wins all the money bet for the hand, known as the pot.\n[…]\nThe three most common variations of hold 'em are limit hold 'em, no-limit hold 'em and pot-limit hold 'em. Limit hold 'em has historically been the most popular form of hold 'em found in casino live action games in the United States. In limit hold 'em, bets and raises during the first two rounds of betting (pre-flop and flop) must be equal to the big blind; this amount is called the small bet.\n[…]\nThese are the only cards each player will receive individually, and they will (possibly) be revealed only at the showdown, making Texas hold 'em a closed poker game.\n[…]\nPineapple and Omaha hold 'em both vary the number of cards an individual receives before the flop (along with the rules regarding how they may be used to form a hand), but are dealt identically afterward. In Double Texas Hold'em, each player receives 3 hole cards and establishes a middle common card that plays with each of the other cards, but the outer cards don't play with each other (each player has two 2-card hands).\n[…]\nPoker probability\n[…]\nOmaha hold'em\n[…]\nMedia related to Texas hold 'em at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Texas_hold_%27em",
        "situacao": "ok",
        "texto": "Texas Hold'em (também Hold'em ou Holdem) é um estilo de jogo de poker onde o jogador recebe duas cartas (essas cartas iniciais geralmente são conhecidas como hole cards) e podem utilizar mais cinco cartas comunitárias. É também a variante de pôquer mais popular na maioria dos cassinos. Seu formato sem limite de apostas é utilizado em vários grandes eventos da World Series of Poker.\n[…]\nRobstown, Texas, na primeira década do século XX.\n[…]\nComo várias outras variantes do pôquer, o objetivo do Texas hold 'em é ganhar o pote, isto é, ganhar a soma em dinheiro de aposta apostada pelos outros jogadores da mesa. Um pote é ganho tanto pela descida do melhor jogo de cinco cartas das sete possíveis, ou pela desistência de todos os outros jogadores por apostas não acompanhadas.\n[…]\nTendo sido satisfeitas essas condições, a primeira rodada é finalizada. Se nesse caso todos cobriram a aposta do \"big blind\" e ninguém deu um \"raise\", então a rodada de apostas é finalizada. Esta fase de distribuição de cartas aos jogadores e de apostas se chama Pré-Flop.\n[…]\nApós essa rodada, o carteador descarta uma carta do baralho e mostra o Flop, que consiste em três cartas comunitárias. Novas apostas são iniciadas pelo small blind, seguindo o sentido horário. Vamos supor que o \"small blind\" não queira fazer nenhuma aposta ou \"raise\". Ele também não tem como dar um \"call\", ou seja, cobrir uma aposta, já que a rodada é nova e ninguém fez um \"raise\" antes dele. Vamos supor também que ele não queira abandonar, ou seja, dar um \"fold\".\n[…]\nEm 1998, o filme Rounders, com a participação de Matt Damon e Edward Norton, mostrou um lado romântico de jogo como um estilo de vida. O Texas hold 'em era o jogo mais utilizado, com a variante sem limite de apostas. O filme mostra um vídeo de uma descida de cartas clássica entre Johnny Chan e Erik Seidel da World Series of Poker de 1988.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Cluedo",
      "descricao": "Jogo de tabuleiro britânico de investigação de assassinato, lançado no Brasil como Detetive."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No Cluedo britânico original, que no Brasil virou o Detetive, quem é a vítima do assassinato investigado pelos jogadores?",
    "resposta": "Doutor Black",
    "fonte": [
      "https://en.wikipedia.org/wiki/Cluedo"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cluedo",
        "situacao": "ok",
        "texto": "Cluedo (), known as Clue in North America, is a murder mystery game for three to six players (depending on editions) that was devised in 1943 by British board game designer Anthony E. Pratt. The game was first manufactured by Waddingtons in the United Kingdom in 1949. Since then, it has been relaunched and updated several times, and it is currently owned and published by the American game and toy \n[…]\nThe murder victim in the game was known as Dr. Black in the UK edition and Mr. Boddy in North American versions. Updated editions of the game, released by Hasbro in 2023, refer to him as Boden \"Boddy\" Black Jr.\n[…]\nClue/Cluedo is a digital adaptation based on the official Hasbro board game developed by Marmalade Game Studio for iOS and Android mobile devices as well as Steam and Nintendo Switch. The object of the game is to determine who killed the game's victim Dr. Black (or Mr. Boddy). The player, as one of the six suspects, will ask questions and take notes. The overall goal is to solve the crime first.\n[…]\nClue \"Nostalgia Edition\" (2003, 2007) is a retro Nostalgia edition of the game, essentially a re-issue of the 1963 design in a wooden box. A custom version of the game was also released in the US by Restoration Hardware as Wooden Box Clue with different cover art. In the UK it was released under the Cluedo brand, and was an official re-issue of the original 1949 Waddingtons' design.\n[…]\nThe North American versions of Clue also replace the character \"Reverend Green\" from the original Cluedo with \"Mr. Green\". This is the only region to continue to make such a change. Minor changes include \"Miss Scarlett\" with her name spelled with one 't', the spanner being called a wrench, and the dagger being renamed a knife. In the 2016 U.S. edition, the knife was changed to a dagger. Until 2003, the lead piping was known as the lead pipe only in the North American edition.\n[…]\nCluedo   at BoardGameGeek"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cluedo",
        "situacao": "ok",
        "texto": "Cluedo ( [ˈkluːdoʊ] ) (conhecido como Clue na EUA,  O Clássico Jogo de Detetives em Portugal e Detetive no Brasil), é um jogo de estratégia e investigação para três a seis jogadores (dependendo das edições) que foi desenvolvido em 1943 pelo designer britânico de jogos de tabuleiro Anthony E. Pratt. O jogo foi fabricado pela primeira vez pela Waddingtons no Reino Unido em 1949. Desde então, foi rel\n[…]\nO objetivo do jogo é determinar quem assassinou a vítima do jogo, Dr. Black, onde ocorreu o crime e qual arma foi utilizada. Cada jogador assume o papel de um dos suspeitos e tenta deduzir a resposta correta movendo-se estrategicamente num tabuleiro de jogo que representa as divisões da mansão da vítima, coletando pistas dos outros jogadores sobre as circunstâncias do assassinato.\n[…]\nProfessor Plum/Black (Roxo ou Preto)\n[…]\nO nome original do jogo era “Murder!” (Assassinato, em inglês) e foi inspirado em romances policiais ingleses de Agatha Christie e Raymond Chandler, bem como no clássico jogo de festa em que um jogador secreto, o assassino, tenta eliminar os outros com piscadelas, enquanto outro jogador, o detetive, precisa encontrá-lo. Elva Rosaline, mulher de Pratt, desenhou o primeiro tabuleiro do jogo. Na versão original, o jogo tinha dez personagens, onze salas e nove armas.\n[…]\nPor falta de insumos na indústria gráfica pós Segunda Guerra Mundial, o Cluedo foi lançado apenas em 1949. Pratt vendeu os direitos internacionais do jogo em 1953 para a Waddingtons por 5 mil libras.\n[…]\nNos Estados Unidos e no Canadá, o jogo foi rebatizado de Clue pela Parker Brothers pois o Ludo é conhecido como Parcheesi na região.\n[…]\nNo Brasil, ele foi lançado pela Estrela com o nome Detetive em 1977, com o mesmo tabuleiro da versão americana de 1972. Na primeira versão brasileira, os personagens se chamam Coronel Mostarda, Dona Branca, Dona Violeta, Professor Black, Senhor Marinho e Senhorita Rosa.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Mahjong",
      "descricao": "Jogo chinês para quatro jogadores, jogado com peças ilustradas de naipes, ventos e dragões."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No mahjong, jogo chinês de peças, além dos naipes de círculos, bambus e caracteres, há peças de honra com dragões e com o quê?",
    "resposta": "Ventos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mahjong_tiles"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mahjong_tiles",
        "situacao": "ok",
        "texto": "Mahjong tiles (Chinese: 麻將牌 or 麻雀牌; pinyin: májiàngpái; Cantonese Jyutping: maa4zoek3paai2; Japanese: 麻雀牌; rōmaji: mājanpai) are tiles of Chinese origin that are used to play mahjong as well as mahjong solitaire and other games. Although they are most commonly tiles, they may refer to playing cards with similar contents as well.\n[…]\nThe earliest known Chinese sets contained twelve flowers but no Four Gentlemen tiles and the Four Seasons were unadorned. Sets with large numbers of flowers were once popular in Northern China to play the game of \"Flower Mahjong\" (花麻雀). They typically had 20 or more flowers with some described as having up to 44.\n[…]\nBetween 1943 and 1971, American mahjong sets experimented with the number of flower and joker tiles. During that period, the number of flower tiles range from six tiles to as many as 24 tiles, before settling to eight. For modern American sets, the first quartet is the four seasons, and the second quartet is the \"Three Stars\" (Chinese: 三星; pinyin: sān xīng) and \"Nobility.\"\n[…]\nNobility (Chinese: 貴; pinyin: guì): a cypress tree\n[…]\nJoker tiles (百搭牌, pinyin bǎidāpái) can be used to replace any suited or honor tile in putting together a hand subject to local restrictions. Four jokers are sometimes used in certain variants of Southeast Asian and Chinese mahjong, including Shanghainese mahjong. American mahjong uses eight jokers.\n[…]\nVietnamese mahjong is related to extinct Chinese variants which used specialized jokers such as \"King Mahjong\" (王麻雀). Vietnamese mahjong sets commonly contain eight unique jokers:\n[…]\nDesigns of mahjong tiles are different between regions. Here are some examples.\n[…]\nMahjong tiles were added to the Unicode Standard in April, 2008 with the release of version 5.1.\n[…]\nThe Unicode block for mahjong tiles is U+1F000–U+1F02B:\n[…]\nMahjong mat\n[…]\nThe Mahjong Tile Set"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Magic: The Gathering",
      "descricao": "Jogo de cartas colecionáveis de fantasia lançado em 1993 pela Wizards of the Coast."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "No jogo de cartas Magic, a mana tem cinco cores: branco, azul, preto, vermelho e qual outra?",
    "resposta": "Verde",
    "distratores": [
      "Amarelo",
      "Roxo",
      "Laranja"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Magic:_The_Gathering"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Magic:_The_Gathering",
        "situacao": "ok",
        "texto": "Magic: The Gathering (colloquially known as Magic or MTG) is a collectible, tabletop, and digital collectible card game created by Richard Garfield. It was released by Wizards of the Coast in 1993 as the company's first trading card game. From 2008 to 2016, over twenty billion Magic cards were printed as the game grew in popularity. For the 2022 fiscal year, Hasbro—the parent company of Wizards of\n[…]\nCards in Magic: The Gathering generally have a consistent format, with half of the face of the card showing the card's art, and the other half listing the card's mechanics, often relying on commonly-reused keywords to simplify the card's text. Cards fall into two classes: lands and spells. Lands produce mana, or magical energy. Players usually can only play one land card per turn, with most lands providing a specific color of mana when they are \"tapped\" (rotating the card 90 degrees).\n[…]\nMost cards in Magic: The Gathering are based on a single color, shown along the card's border. The cost to play them requires some mana of that color and potentially any amount of mana from any other color. Multicolored cards were introduced in the Legends expansion and typically use a gold border. Their casting cost includes mana from at least two colors plus additional mana from any color. Hybrid cards, included with Ravnica, use a two-color gradient border.\n[…]\nWhile the game was simply called Magic through most of playtesting, when the game had to be officially named a lawyer informed them that the name Magic was too generic to be trademarked. Mana Clash was instead chosen to be the name used in the first solicitation of the game. However, everybody involved with the game continued to refer to it simply as Magic. After further legal consultation, it was decided to rename the game Magic: The Gathering, thus enabling the name to be trademarked.\n[…]\nMagic the Gathering wiki"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Magic%3A_The_Gathering",
        "situacao": "ok",
        "texto": "Magic: the Gathering, MTG ou simplesmente Magic, é um jogo de cartas colecionáveis (TCG, Trading Card Game) criado por Richard Garfield, no qual os jogadores utilizam um baralho de cartas construído de acordo com o seu modo individual de jogo para tentar vencer o baralho adversário. Em 2003, na comemoração do aniversário de 10 anos de lançamento do Magic, a revista Games selecionou-o para o seu Ha\n[…]\nMana Vault\n[…]\nNo Magic, as cartas existem em cinco cores distintas: Branco, Azul, Preto, Vermelho e Verde. Existem ainda cartas incolores (artefatos e terrenos), assim como multicoloridas que são as cartas que têm mais de uma identidade de cor.\n[…]\nA mana Branca retira o seu poder das planícies, cuja teoria segue rigidamente. Representa a ordem, a justiça, proteção, a cura, a luz e a lei. No jogo, a cor branca apresenta-se como o equilíbrio, por possuir muitos recursos, muitos deles encontrados nas outras cores. Tem como sua grande fraqueza a quase completa falta de compras de cartas efetiva, o que a pode enfraquecer sem uma boa combinação com outras cores.\n[…]\nA mana Verde retira o seu poder das florestas. Representa a natureza, a vida, o crescimento e a força bruta. Entre as cartas verdes encontram-se a maioria dos aceleradores de mana, assim como conectores para criar mana de outras cores, criaturas com grande poder e a habilidade de deixar suas criaturas mais fortes. Geralmente, a magia verde é usada por magos, que visa o poder da força que cresce a cada instante.\n[…]\nExistem programas para jogar magic de forma online. Magic: The Gathering Online é uma alternativa oferecida pela Wizards of the Coast para os jogadores, um mundo virtual onde os jogadores podem trocar, comprar e vender cartas com dinheiro vivo, com as cartas existindo apenas no mundo virtual. É atualmente uma alternativa bastante completa em relação ao jogo jogado cara a cara.\n[…]\nEm 1995, a Devir Livraria lançou Magic no Brasil.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Jogo do mico",
      "descricao": "Jogo de cartas infantil de formar pares em que perde quem fica com a carta sem par do mico, conhecido em inglês como Old Maid."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No jogo do mico, perde quem fica com a carta sem par. Na versão inglesa do jogo, que figura aparece nessa carta, no lugar do mico?",
    "resposta": "Uma solteirona",
    "fonte": [
      "https://en.wikipedia.org/wiki/Old_maid_(card_game)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Old_maid_(card_game)",
        "situacao": "ok",
        "texto": "Old Maid is a 19th-century American card game for two or more players, presumed to have derived from an ancient European gambling game in which the loser pays for the drinks.\n[…]\nThat player selects a card and discards it by pairing or adds it to the hand. Play continues clockwise in this manner, players dropping out when they have no hand cards left. The player left holding the single queen is the 'old maid' and loses.\n[…]\nA joker is added to the pack. This card acts as the Old Maid.\n[…]\nA card is removed from the pack at random. The resulting unmatchable card, the Old Maid, cannot be identified as easily.\n[…]\nPlayers take a new card before giving one up. This can result in a player being stuck in \"old maid purgatory\", i.e. with one card and no way to get rid of it.\n[…]\nScabby queen is a modern variation of Old Maid played with a standard pack of cards from which the Queen of Clubs has been removed. The player left with the \"scabby queen\" (♠Q) is the loser and receives a number of raps on the knuckles with the edge of the pack. The number of raps is decided by reshuffling the pack and getting the loser to draw a card. The player get the number of raps based on the face value of the card or, if it is a jack or king, 10 raps; if it is a queen, 21 raps.\n[…]\nTurkey: Papaz kaçtı (\"Priest eloped\"). As Old Maid, but king is removed instead of queen or knave.\n[…]\nMedia related to Old Maid (game) at Wikimedia Commons\n[…]\nRules of Card Games: Old Maid on Pagat.com"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Risk",
      "descricao": "Jogo de tabuleiro de estratégia militar e conquista de territórios, criado na França em 1957, que inspirou o War brasileiro."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "No Risk, jogo que inspirou o War, as cartas de território mostram três tipos de tropa: infantaria, cavalaria e qual outro?",
    "resposta": "Artilharia",
    "distratores": [
      "Marinha",
      "Aviação",
      "Engenharia"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Risk_(game)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Risk_(game)",
        "situacao": "ok",
        "texto": "Risk is a strategy board game of diplomacy, conflict and conquest for two to six players. The standard version is played on a board depicting a political map of the world, divided into 42 territories, which are grouped into six continents. Turns rotate among players who control armies of playing pieces with which they attempt to capture territories from other players, with results determined by di\n[…]\nAlso included is a deck of Risk cards, comprising forty-two territory cards, two wild cards, and twelve or twenty-eight mission cards. The territory cards correspond to the 42 territories on the playing board. Each of the territory cards also depicts a symbol of an infantry, cavalry, or artillery piece. One of these cards is awarded to a player at the end of each turn if the player has successfully conquered at least one territory during that turn. No more than one card may be awarded per turn.\n[…]\nRisk Express (2006) – Designed by Reiner Knizia as part of Hasbro's Express line of games (although not as part of the US-released series). Roll different combinations of infantry, cavalry, artillery & generals to capture the territory cards.\n[…]\nRisk: Halo Wars Collector's Edition (2009) – Includes UNSC, Covenant, and The Flood. It has 42 territories and 6 sectors.\n[…]\nRisk: Europe (2016)\n[…]\nRisk Strike: Game of Thrones (2025)\n[…]\nAn example of a board game inspired by Risk is the Argentine TEG.\n[…]\nIn addition to Risk clones, third-party products have been created which slightly modify traditional gameplay. Among the most popular third-party editions are virtual dice-rolling simulators. These can act as virtual replacements to traditional dice or be used to automatically simulate the results of large battles between territories—significantly speeding up gameplay.\n[…]\nHonary, E. (2007). Total Diplomacy: The Art of Winning RISK. North Charleston, SC: BookSurge Publishing. ISBN 978-1419661938.\n[…]\nRisk   at BoardGameGeek"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Risco_%28jogo%29",
        "situacao": "ok",
        "texto": "Risco é um jogo de tabuleiro e de estratégia, produzido pela Parker Brothers (actualmente uma subsidiária da Hasbro). Foi inventado pelo realizador de cinema francês Albert Lamorisse e foi inicialmente lançado em 1957, como La Conquête du Monde (\"A Conquista do Mundo\"), em Francês.\n[…]\nUma partida de Risk tem de 3 a 5 jogadores, decorrendo num tabuleiro representando um mapa politico do mundo, dividido em 42 territórios agrupados em 6 continentes. Os jogadores capturam territórios uns dos outros jogando dados e obtendo uma pontuação mais elevada. Vence quem conquistar três objetivos do jogo. Estes objetivos são divididos entre principais e secundários (os objetivos principais tem uma dificuldade mais elevada).\n[…]\nHá também a opção de dominação mundial, ou seja, vence o jogador que conquistar todos os territórios.\n[…]\nEm Portugal, o jogo foi introduzido como Risco, e atualmente é comercializado pela Hasbro com o nome em inglês. No Brasil é comercializado um jogo muito semelhante chamado War.\n[…]\nJogo de mesa\n[…]\nJogo de tabuleiro",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Tangram",
      "descricao": "Quebra-cabeça formado por sete peças geométricas planas que se combinam para montar figuras."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "O tangram tem sete peças: cinco triângulos, um quadrado e qual outra figura geométrica?",
    "resposta": "Paralelogramo",
    "distratores": [
      "Trapézio",
      "Losango",
      "Retângulo"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Tangram",
      "https://en.wikipedia.org/wiki/Tangram"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Tangram",
        "situacao": "ok",
        "texto": "O Tangram (chinês: 七巧板; pinyin: qīqiǎobǎn; lit. \"sete peças de habilidade\") é um quebra-cabeças geométrico chinês formado por 7 peças, chamadas tans: são 2 triângulos grandes, 2 pequenos, 1 médio, 1 quadrado e 1 paralelogramo. Utilizando todas essas peças sem sobrepô-las, podemos formar várias figuras. Segundo a Enciclopédia do Tangram é possível montar mais de 5000 figuras.\n[…]\nNão se sabe ao certo como surgiu o Tangram, mas acredita-se ter sido inventado na China durante a Dinastia Song e levado para Europa por navios mercantes no início do século XIX, onde se tornou muito popular. Há várias lendas sobre a sua origem e o seu renascimento no mundo dos mortos. Uma diz que uma pedra preciosa  se desfez em sete pedaços, e com eles era possível formar várias formas.\n[…]\nOutra diz que um imperador deixou um espelho quadrado cair, e este se desfez em 7 pedaços que poderiam ser usados para formar várias figuras,de diversas formas. Segundo algumas, o nome Tangram vem da palavra inglesa \"tangam\", de significado \"misturas\" ou \"desconhecidos\". Outros dizem que a palavra vem da dinastia chinesa Tang, ou até do barco cantonês \"bundumocu\", onde mulheres entretinham os marinheiros americanos. Na Ásia o jogo é chamado de \"300 placas\".\n[…]\nEsse quebra-cabeças, também conhecido como jogo das 1000 peças, é utilizado pelos professores de geometria como instrumento facilitador da compreensão das formas geométricas. Além de facilitar o estudo da geometria, ele desenvolve a criatividade e o raciocínio lógico, que também são fundamentais para o estudo da matemática e da ciência.\n[…]\nTangram\n[…]\nA Origem do Tangram\n[…]\nThe Tangram\n[…]\n«Peces». Programa gratuito com 40 tangram e mais de 31.000 figuras ."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Tangram",
        "situacao": "ok",
        "texto": "The tangram (Chinese: 七巧板; pinyin: qīqiǎobǎn; lit. 'seven boards of skill') is a dissection puzzle consisting of seven flat polygons, called tans, which are put together to form shapes. The objective is to replicate a pattern (given only an outline) generally found in a puzzle book using all seven pieces without overlap.\n[…]\nThe prominent third-century mathematician Liu Hui made use of construction proofs in his works and some bear a striking resemblance to the subsequently developed banquet tables which in turn seem to anticipate the tangram. While there is no reason to suspect that tangrams were used in the proof of the Pythagorean theorem, as is sometimes reported, it is likely that this style of geometric reasoning went on to exert an influence on Chinese cultural life that led directly to the puzzle.\n[…]\nThe Magic Dice Cup tangram paradox – from Sam Loyd's book The 8th Book of Tan (1903). Each of these cups was composed using the same seven geometric shapes. But the first cup is whole, and the others contain vacancies of different sizes. (Notice that the one on the left is slightly shorter than the other two. The one in the middle is ever-so-slightly wider than the one on the right, and the one on the left is narrower still.)\n[…]\nSlocum, Jerry (2003). The Tangram Book. Sterling. ISBN 978-1-4027-0413-0.\n[…]\nGardner, Martin. \"Mathematical Games—on the Fanciful History and the Creative Challenges of the Puzzle Game of Tangrams\", Scientific American Aug. 1974, p. 98–103.\n[…]\nGardner, Martin. \"More on Tangrams\", Scientific American Sep. 1974, p. 187–191.\n[…]\nLoyd, Sam. Sam Loyd's Book of Tangram Puzzles (The 8th Book of Tan Part I). Mineola, New York: Dover Publications, 1968.\n[…]\nPast & Future: The Roots of Tangram and Its Developments\n[…]\nTurning Your Set of Tangram Into A Magic Math Puzzle by puzzle designer G. Sarcone"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Xadrez chinês",
      "descricao": "Jogo de estratégia para dois jogadores, popular na China, com peças redondas e um rio no meio do tabuleiro."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No xadrez chinês, o que corta o tabuleiro ao meio, separando os territórios dos dois exércitos?",
    "resposta": "Um rio",
    "fonte": [
      "https://en.wikipedia.org/wiki/Xiangqi"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Xiangqi",
        "situacao": "ok",
        "texto": "Xiangqi (; Chinese: 象棋; pinyin: xiàngqí), commonly known in the West as Chinese chess, is a strategy board game for two players. It is the most popular board game in China. Xiangqi is in the same family of games as shogi, janggi, Western chess, chaturanga, and Indian chess.\n[…]\nSan Guo Qi \"Game of the Three Kingdoms\" is played on a special hexagonal board with three xiangqi armies (red, blue, and green) vying for dominance. A Y-shaped river divides the board into three gem-shaped territories, each containing the grid found on one side of a xiangqi board, but distorted to make the game playable by three people. Each player has eighteen pieces: the sixteen of regular xiangqi, plus two new ones that stand on the same rank as the cannons.\n[…]\nLi, David H. First Syllabus on Xiangqi: Chinese Chess 1. Premier Publishing, Bethesda, Maryland, 1996. ISBN 0-9637852-5-7.\n[…]\nLi, David H. Xiangqi Syllabus on Cannon: Chinese Chess 2. Premier Publishing, Bethesda, Maryland, 1998. ISBN 0-9637852-7-3.\n[…]\nLi, David H. Xiangqi Syllabus on Elephant: Chinese Chess 3. Premier Publishing, Bethesda, Maryland, 2000. ISBN 0-9637852-0-6.\n[…]\nLi, David H. Xiangqi Syllabus on Pawn: Chinese Chess 4. Premier Publishing, Bethesda, Maryland, 2002. ISBN 0-9711690-1-2.\n[…]\nLi, David H. Xiangqi Syllabus on Horse: Chinese Chess 5. Premier Publishing, Bethesda, Maryland, 2004. ISBN 0-9711690-2-0.\n[…]\nXiangqi.com Play Xiangqi for free\n[…]\nXiangqi Championships\n[…]\nLearn Chinese Chess in English Rules, openings, strategy, ancient manuals\n[…]\nAn Introduction to Xiangqi for Chess Players Archived 2020-11-11 at the Wayback Machine\n[…]\nXiangqi, Chinese Chess Presentation, rules, history and variants, by Jean-Louis Cazaux\n[…]\nXiangqi (象棋): Chinese Chess by Hans Bodlaender, ed. Fergus Duniho, The Chess Variant Pages"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Xiangqi",
        "situacao": "ok",
        "texto": "O xiangqi (chinês: 象棋; pinyin: xiàngqí), xadrez chinês, ou xadrez-elefante é um jogo de estratégia jogado em um tabuleiro com nove linhas de largura por dez de comprimento. É um passatempo comum tanto na China quanto no Vietnã.\n[…]\nUm jogo de xiangqi apresenta várias particularidades entre qualquer variante de xadrez: existência de uma peça chamada canhão - que para capturar precisa pular outra peça -, uma regra que proíbe que os generais avistem um ao outro (na mesma linha sem qualquer peça no meio do caminho), áreas especiais no tabuleiro (rio e palácio), restrição no movimento de algumas peças de acordo com zonas do tabuleiro; e o posicionamento das peças nas interseções das linhas ao invés de coloca-las no centro das casas.\n[…]\nO xiangqi é similar ao shogi e ao xadrez e supostamente partilha um ancestral comum com esses dois jogos: o chaturanga, esta teoria é contestado pelo especialista Samuel Howard Sloan. Vale destacar que no passado (pré-1 000 a.C.) o nome xiangqi foi aplicado a outros jogos de tabuleiro além do xadrez chinês.\n[…]\nOs generais são identificados pelo carácter chinês (帥 shuài) no lado vermelho e (將 jiàng) no lado azul. Eles são na verdade generais militares, embora sejam equivalentes ao rei no xadrez. Diz a lenda que um imperador executou dois jogadores por estes terem matado ou capturado a peça imperador. Os jogadores passaram então a chamar a essa peça de general.\n[…]\nO carro utiliza o carácter (車 jū) ou (车 jū) tanto para o vermelho como para o azul. Como a torre do xadrez internacional, o carro desloca-se e toma peças numa linha reta horizontal ou vertical. Os dois carros começam o jogo nos cantos do tabuleiro.\n[…]\nXadrez\n[…]\nIntrodução ao xadrez chinês, história, jogos exemplo e um final clássico",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Bingo",
      "descricao": "Jogo de sorte em que se marcam numa cartela os números sorteados, até completar uma linha ou a cartela."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Na cartela do bingo americano, com cinco colunas e cinco linhas, o que ocupa a casa bem do centro?",
    "resposta": "Um espaço livre",
    "fonte": [
      "https://en.wikipedia.org/wiki/Bingo_(American_version)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bingo_(American_version)",
        "situacao": "ok",
        "texto": "Bingo is a game of chance in which each player matches the numbers printed in different arrangements on cards. The game host (known as a caller) draws balls at random, marking the selected numbers with tiles.\n[…]\nBingo is often used as an instructional tool in American schools and in teaching English as a foreign language in many countries. Typically, the numbers are replaced with beginning reader words, pictures, or unsolved math problems. Custom bingo creation programs now allow teachers and parents to create bingo cards using their own content.\n[…]\nNative American games usually offer only one or two sessions a day and are often played for higher stakes than charity games to attract players from distant places. Some also offer a special progressive jackpot game that may link players from multiple bingo halls.\n[…]\nIn both Canada and the United States, some gay bars and other LGBT-oriented organizations host bingo events, often combined with a drag show and marketed as \"Drag Bingo\" or \"Drag Queen Bingo\". \"Drag Bingo\" events originated in Seattle in the early 1990s as a fundraiser for local HIV/AIDS charities. They have since expanded to many other cities across North America, supporting a diverse range of charities.\n[…]\nCheektowaga, New York, with one bingo hall for every 6,800 residents, is believed to have the highest concentration of bingo halls in the United States. The suburb of Buffalo's large Polish-American Catholic  population is thought to be a factor in bingo's significant popularity in Western New York, which has five times as many bingo halls per capita as the rest of the state.\n[…]\nBingo America, a bingo-based viewer-participation game show on GSN\n[…]\nDirectory of Bingo Halls in USA"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bingo",
        "situacao": "ok",
        "texto": "O bingo é um jogo de azar onde bolas numeradas são colocadas dentro de um globo e sorteadas uma a uma. O jogo é comum em cassinos, salas de bingo online,  casas de bingo, quermesses e festas juninas (no Brasil), além de servir como diversão caseira entre famíliares e amigos.\n[…]\nOs números devem ser marcados em cartelas aleatórias, geralmente com 24 números, dispostos no formato de 5 colunas por 5 linhas, para facilitar a localização dos mesmos, quando sorteados.\n[…]\nEm algumas casas de bingo, a cada rodada são acertadas as regras, podendo assim, valer as 3 linhas, também as colunas.\n[…]\nOutra modalidade muito semelhante ao bingo comum é o keno, jogado em cassinos. Neste tipo de jogo as regras são basicamente as mesmas, mas ao contrário de ter os números pré-definidos na cartela, é o jogador que escolhe os números com os quais deseja jogar.\n[…]\nO bingo continua a ser um jogo de azar numérico, em que o resultado é determinado pelo sorteio ou geração de números, e o jogador os compara com a sua cartela. No formato online, o princípio básico mantém‑se, mas o jogo é transferido para um ambiente digital, onde as cartelas, os sorteios e as notificações de prémio são exibidos através da interface do site.\n[…]\nNas páginas com as regras do bingo online costuma‑se descrever separadamente a compra de cartelas, a ordem do sorteio dos números e as condições de término da partida.\n[…]\nAo comparar o bingo online, o usuário avalia de facto um conjunto de condições: o custo da cartela, a frequência dos sorteios, as regras de formação do fundo de prêmio, o licenciamento e as ferramentas disponíveis de controle de risco. Por isso a descrição moderna do bingo inclui não só a mecânica das cartelas e dos números, mas também o regime jurídico, o formato de acesso e as medidas de redução de danos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Banco Imobiliário",
      "descricao": "Jogo de tabuleiro brasileiro de compra e venda de imóveis lançado pela Estrela, versão nacional do Monopoly."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No Banco Imobiliário, ao cair em certas casas, o jogador tira uma carta que pode trazer prêmio ou castigo. Como essas cartas são chamadas?",
    "resposta": "Sorte ou Revés",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Banco_Imobili%C3%A1rio"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Banco_Imobili%C3%A1rio",
        "situacao": "ok",
        "texto": "Banco Imobiliário é um jogo de tabuleiro lançado no Brasil pela Brinquedos Estrela. É uma variação local do jogo internacionalmente conhecido como Monopoly.\n[…]\nO Super Banco Imobiliário é uma versão que possui cartões de crédito e débito no lugar de dinheiro. O tabuleiro é composto por propriedades (ruas, avenidas) que se agrupam em grupos de cores, ações de companhias, notícias (cartas de sorte e revés), feriados, prisão/visitas, camburão e o início que, ao passar, o jogador recebe o pró-labore, além da receita federal e o imposto de renda. O jogo acompanha uma máquina, na qual retira e adiciona crédito em um dos 6 cartões de crédito.\n[…]\nAções do Banco Itaú\n[…]\nO Banco Imobiliário Luxo tem peças mais luxuosas: em vez de casas e prédios, há mansões e arranha-céus; o Banco Imobiliário Júnior tem a mecânica mais simples e pode ser jogado por crianças a partir de 6 anos (na versão tradicional, a indicação é para crianças a partir de 8 anos); o Banco Imobiliário Brasil traz pontos turísticos brasileiros que foram escolhidos por internautas em uma ação realizada pela Estrela em 2008; o Banco Imobiliário Sustentável é de material reciclável e foi o primeiro produto a usar plástico verde (seus peões são feitos com este polietileno obtido a partir da cana de açúcar).\n[…]\nCada vez que um jogador participa de uma partida, é apresentado a uma carta de Sorte ou Revés. Se tiver sorte, o usuário pode descobrir petróleo, por exemplo. Se tiver revés, pode ter de pagar impostos, multas etc. Além de interagir com o Foursquare, as ações realizadas no Banco Imobiliário Geo também podem ser compartilhadas via Facebook."
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Amarelinha",
      "descricao": "Brincadeira infantil de pular num pé só por casas numeradas riscadas no chão, conhecida em Portugal como jogo da macaca."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Na amarelinha, brincadeira de pular casas riscadas no chão, como se chama a casa do topo, aonde se chega no fim do percurso?",
    "resposta": "Céu",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Amarelinha"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Amarelinha",
        "situacao": "ok",
        "texto": "Amarelinha (português brasileiro) ou Jogo da Macaca (português europeu) (ou simplesmente macaca) é uma brincadeira popular entre crianças.\n[…]\nAcredita-se que amarelinha teria sido inventada pelos romanos, já que gravuras mostram crianças brincando de amarelinha nos pavilhões de mármore nas vias da Roma antiga. Na época, o percurso carregava o simbolismo da passagem do homem pela vida. Por isso, em uma das pontas se escrevia céu e, na outra, inferno.\n[…]\nPorém, as primeiras referências ao jogo de que se tem registro confirmado datam do século 17. No manuscrito Book of Games (“Livro de jogos”, em português), compilado entre os anos de 1635 e 1672, o estudioso inglês Francis Willughby já descrevia a brincadeira em que crianças pulavam sobre linhas no chão no percurso que simbolizava a trajetória do homem através da vida.\n[…]\nO jogo consiste em saltar num pé sobre oito quadrados gizados ou riscado no chão, que compõem uma figura geométrica, salvo sobre aquele onde cair a pedra ou malha, que é lançada pelos jogadores antes de começarem a jogar.\n[…]\nChegando ao céu, pisa com os dois pés e retorna, pulando da mesma forma até as casas 2-3, de onde o jogador tem de apanhar a pedrinha do chão, sem perder o equilíbrio, e saltar de volta ao ponto de partida. Não cometendo erros, atira a pedrinha à casa 2 e depois continua assim sucessivamente, por todas as casas numeradas.\n[…]\nPisar as linhas do jogo\n[…]\nNa Bahia e no Pará, diz-se pular macaco ou macaca, semelhante a Portugal.\n[…]\nEm Sergipe se chama macacão.\n[…]\nEm Moçambique, chama-se avião ou neca.\n[…]\nEm Portugal, há outras variações: jogo da macaca, jogar ou saltar à macaca e, ainda, jogo-do-homem e pé-coxinho."
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Jogo da onça",
      "descricao": "Jogo de tabuleiro de origem indígena brasileira em que uma onça enfrenta um grupo de cachorros que tenta encurralá-la."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No jogo da onça, de origem indígena, um jogador move a onça. O que representam as catorze peças do adversário?",
    "resposta": "Cachorros",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Jogo_da_on%C3%A7a"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Jogo_da_on%C3%A7a",
        "situacao": "ok",
        "texto": "O Jogo da onça ou adugo (onça, na língua dos Bororo) é um jogo de tabuleiro de origem indígena brasileiro jogado no chão, também conhecido como \"adugo.\" Possui grande semelhança com o jogo nepalês Bagha-Chall e com o antigo jogo da Puma, de origem inca, sendo isso um possível exemplo de Convergência tecnológica.\n[…]\nCom o tabuleiro traçado na areia e usando-se pedras como peças: uma peça representa a onça e 14 outras (iguais entre si) representam os cachorros. Trata-se de um jogo de estratégia para dois jogadores, em que um deles atua como onça, com o objetivo de capturar as peças do adversário. A captura é feita como no jogo de Damas. O jogador que atua com os cachorros tem o objetivo de encurralar a onça e deixá-la sem possibilidade de movimentação.\n[…]\nOs povos Bororo (com autodenominação \"Boe\") no Mato Grosso,  Manchineri no Acre, e os Guaranis, em São Paulo jogaram este jogo no passado, antes mesmo da colonização portuguesa fazer contato com não indígenas.\n[…]\nAtualmente na aldeia Meruri (terra demarcada como Território Indígena Bororo) no município de General Carneiro - MT, há pessoas indígenas que conhecem este jogo e esporadicamente o jogam. Eles utilizam um ou mais triângulos de encurralamento de \"Adugo\" (jaguar).\n[…]\n2. Os jogadores decidem com qual animal brincar. A onça se move primeiro. Os jogadores alternam seus turnos. Apenas uma peça é usada para movimentação ou captura por turno.\n[…]\n3. A onça e os cães movem-se uma casa de cada vez por turno seguindo o padrão do tabuleiro.\n[…]\n4. A onça pode capturar pelo salto curto como em um jogo de Damas. A onça salta sobre um cachorro adjacente e pousa do outro lado em linha reta, seguindo o padrão do tabuleiro apenas um vez.\n[…]\n6. O jogo termina com os cães vencedores se a onça não conseguir mais se mover. A onça vence ao capturar 5 cães.==Referências=="
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Blackjack",
      "descricao": "Jogo de cartas de cassino, também chamado vinte e um, em que se tenta somar vinte e um pontos sem passar."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "No blackjack, o vinte e um dos cassinos, qual carta pode valer um ou onze pontos, conforme for melhor para a mão?",
    "resposta": "Ás",
    "fonte": [
      "https://en.wikipedia.org/wiki/Blackjack"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Blackjack",
        "situacao": "ok",
        "texto": "Blackjack (formerly black jack or vingt-un) is a casino banking game. It is the most widely played casino banking game in the world. It uses decks of 52 cards and descends from a global family of casino banking games known as \"twenty-one\". This family of card games also includes the European games vingt-et-un and pontoon, and the Russian game Ochko. The game is a comparing card game where players \n[…]\nDouble attack blackjack has liberal blackjack rules and the option of increasing one's wager after seeing the dealer's up card. This game is dealt from a Spanish shoe, and blackjacks only pay even money.\n[…]\nDepaulis, Thierry (April–June 2010). \"Dawson's Game: Blackjack and the Klondike\". In Endebrock, Peter (ed.). The Playing-Card. Journal of the International Playing-Card Society. Vol. 38 (4). The International Playing-Card Society. ISSN 0305-2133.\n[…]\nBlackbelt in Blackjack, Arnold Snyder, 1998 (1980), ISBN 978-0-910575-05-8\n[…]\nBlackjack and the Law, I. Nelson Rose and Robert A. Loeb, 1998, ISBN 0-910575-08-8\n[…]\nBlackjack: A Winner's Handbook, Jerry L. Patterson, 2001, (1978), ISBN 978-0-399-52683-1\n[…]\nKen Uston on Blackjack, Ken Uston, 1986,  ISBN 978-0-8184-0411-5\n[…]\nKnock-Out Blackjack, Olaf Vancura and Ken Fuchs, 1998, ISBN 978-0-929712-31-4\n[…]\nMillion Dollar Blackjack, Ken Uston, 1994 (1981), ISBN 978-0-89746-068-2\n[…]\nPlaying Blackjack as a Business, Lawrence Revere, 1998 (1971), ISBN 978-0-8184-0064-3\n[…]\nProfessional Blackjack, Stanford Wong, 1994 (1975), ISBN 978-0-935926-21-7\n[…]\nThe Blackjack Life, Nathaniel Tilton, 2012, ISBN 978-1935396338\n[…]\nThe Theory of Blackjack, Peter Griffin, 1996 (1979), ISBN 978-0-929712-12-3\n[…]\nThe World's Greatest Blackjack Book, Lance Humble and Carl Cooper, 1980, ISBN 978-0-385-15382-9\n[…]\nLuck, Logic, and White Lies: The Mathematics of Games, Jörg Bewersdorff, 2021 (2004), ISBN 978-1-00-309287-2, doi:10.1201/9781003092872, 121–141, online supplement: Blackjack calculator (JavaScript)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Blackjack",
        "situacao": "ok",
        "texto": "Blackjack ou vinte-e-um é um jogo praticado com cartas em casinos e que pode ser jogado com 1 a 8 baralhos de 52 cartas, em que o objetivo é ter mais pontos do que o adversário, mas sem ultrapassar os 21 (caso em que se perde). O dealer só pode pedir até um máximo de 5 cartas ou até chegar ao número 17.\n[…]\nDominar a estratégia básica é essencial para alcançar o sucesso no blackjack. Isso implica fazer as melhores escolhas possíveis para cada combinação de mãos concebível, levando em consideração a sua mão e a carta virada para cima do dealer. Seguir esta estratégia pode reduzir a vantagem do cassino e permitir que você tome decisões estatisticamente favoráveis de forma consistente.\n[…]\nUtilize um guia de referência rápida de blackjack ou uma chamada folha de truques de blackjack que descreve as melhores escolhas em todas as circunstâncias possíveis.\n[…]\nMãos com 10 ou 11 pontos são ideais para dobrar, já que as chances de obter 20 pontos ou um Blackjack são altas. No entanto, quando o dealer tem um Ás, a estratégia correta é não dobrar e apenas pedir mais cartas, pois o dealer pode conseguir um Blackjack ou uma mão alta.\n[…]\nUma pontuação total de 16 pontos só é favorável quando a primeira carta do dealer é baixa. Quando o dealer tem um 10, a probabilidade de ele obter 17, 18, 19, 20 ou um Blackjack é alta. Portanto, sempre que você tiver um total de 16 e a carta do dealer for um 10, peça mais cartas até atingir no mínimo 17 pontos.\n[…]\nO par de 9s, por ser um par alto, pode levar os jogadores a tentarem sempre obter duas mãos fortes. É um erro dividir um par de 9s quando o dealer tem um 7 virado; a opção correta é parar. A lógica aqui é que, com um 7, a probabilidade de o dealer obter 17 pontos na primeira carta é alta, garantindo a vitória do jogador com 18 pontos no par de 9s.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Damas brasileiras",
      "descricao": "Variante do jogo de damas jogada no Brasil num tabuleiro de oito por oito casas, com dama que anda várias casas."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Nas damas como se jogam no Brasil, quando há mais de um jeito de capturar, qual jogada o jogador é obrigado a escolher?",
    "resposta": "A que captura mais peças",
    "fonte": [
      "https://en.wikipedia.org/wiki/Brazilian_draughts",
      "https://pt.wikipedia.org/wiki/Damas"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Brazilian_draughts",
        "situacao": "ok",
        "texto": "Brazilian draughts (or Brazilian Checkers) is a variant of the  strategy board game draughts. Brazilian draughts follows the same rules and conventions as international draughts, the only differences are the smaller gameboard (8×8 squares instead of 10×10) and, therefore, fewer checkers per player (12 instead of 20).\n[…]\nAll moves and captures are made diagonally. All references to squares refer to the dark squares only. The main differences from English draughts are: pieces can also capture backward (not only forward), the long-range moving and capturing capability of queens, and the requirement that the maximum number of pieces be captured whenever a player has capturing options.\n[…]\nOpposing pieces can and must be captured by jumping over the opposing piece, two squares. If one has the possibility to capture a piece then this must be done even if it is disadvantageous.\n[…]\nIf there is one unoccupied square before or behind opposing pieces then jumps multiple times over opposing pieces in a single turn forward or backward can and must be made, making angles of 90 degrees. It is compulsory to jump over as many pieces as possible. One must play with the piece that can make the maximum captures.\n[…]\nA piece is crowned if it stops on the far edge of the board at the end of its turn (that is, not if it reaches the edge but must then jump another piece backward). Another piece is placed on top of it to mark it. Crowned pieces, sometimes called queens, can move freely multiple steps in any direction and may jump over and hence capture an opponent piece some distance away and choose where to stop afterwards, but must still capture the maximum number of pieces possible."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Damas",
        "situacao": "ok",
        "texto": "O jogo de damas ou damas (no inglês draughts ou checkers), é um esporte intelectivo e um jogo de tabuleiro de estratégia para dois jogadores em turnos, com movimentações de peças na diagonais com capturas obrigatórias saltando sobre as peças do oponente. Damas é desenvolvido a partir do jogo alquerque. No Brasil e em Portugal é mais conhecida a versão de 64 casas (8 por 8), porém a mais conhecida \n[…]\nMesmas regras das damas tradicionais, exceptuando-se o fato do jogador poder optar por capturar qualquer peça e não fazer obrigatoriamente a jogada que o permita tomar o maior número de peças. Além disso, as damas não se movem em longa distância. A única vantagem de uma dama sobre uma peça normal é a capacidade de se mover e capturar para trás, bem como para frente.\n[…]\nPossivelmente a mais exótica das variantes tradicionais de damas.\n[…]\nVariante em que as regras são as mesmas do jogo oficial, mas, nesta variante, aquele que ficar sem peças é quem ganha. O jogador, portanto, deve oferecer suas peças ao adversário, o mais rápido possível.\n[…]\nTratar-se-ia de um jogo de sorte e de estratégia, com semelhanças ao gamão moderno. As peças, que seriam entre 12 e 30, representavam homens, sendo que, por vezes, eram designadas exactamente como tal, e apresentavam as cores preta e branca. Havia capturas de peças saltando sobre a peça do adversário e ocupando a casa por ela ocupada. As peças capturadas saiam do tabuleiro e regressavam ao jogo mais tarde.\n[…]\nO objectivo do jogo é ir capturando peças ao adversário até que não lhe sobrem mais peças ou, então, impedir o adversário de capturar mais peças, o que se consegue quando se põem as peças ao longo das arestas do tabuleiro, deixando de haver a possibilidade de saltar por cima delas, por não haver linhas paralelas ou diagonais, que permitam passar por cima da peça e aterrar numa casa livre (a isto chama-se coloquialmente \"afogar o jogo\")."
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Gamão",
      "descricao": "Jogo de tabuleiro para dois jogadores, com dados e quinze peças cada, que andam por vinte e quatro casas triangulares."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Além dos dados comuns, o gamão usa um cubo marcado com os números de dois a sessenta e quatro. Para que ele serve?",
    "resposta": "Para dobrar a aposta",
    "fonte": [
      "https://en.wikipedia.org/wiki/Doubling_cube",
      "https://en.wikipedia.org/wiki/Backgammon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Doubling_cube",
        "situacao": "ok",
        "texto": "Backgammon is a two-player board game played with counters and dice on tables boards. It is the most widespread Western member of the large family of tables games, whose ancestors date back at least 1,600 years. The earliest record of backgammon itself dates to 17th-century England, being descended from the 16th-century game of Irish.\n[…]\nBackgammon involves a combination of strategy and luck from rolling of the dice. While the dice may determine the outcome of a single game, the better player will accumulate the better record over a series of many games. With each roll of the dice, players must choose from numerous options for moving their pieces and anticipate possible counter-moves by the opponent. The optional use of a doubling cube allows players to raise the stakes during the game.\n[…]\nBackgammon has been studied considerably by computer scientists. Neural networks and other approaches have offered significant advances to software for gameplay and analysis. With 15 white and 15 black counters and 24 possible positions, backgammon has 18 quintillion possible legal positions.\n[…]\nThe strength of these programs lies in their neural networks' weight tables, which are the result of extensive training. Without them, these programs play no better than a human novice. For the bearoff phase, backgammon software usually relies on a database containing precomputed equities for all possible bearoff positions. There are 54,263 bearoff positions for each side. This means there are 54,2632 total bearoff positions (approximately 3 billion positions).\n[…]\nBackgammon notation\n[…]\nThe dictionary definition of Appendix:Glossary of backgammon terms at Wiktionary\n[…]\nBackgammon at Wikibooks\n[…]\nMedia related to Backgammon at Wikimedia Commons\n[…]\n\"Backgammon\" . Encyclopædia Britannica (11th ed.). 1911.\n[…]\nBackgammon World Championship - Monte Carlo"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Backgammon",
        "situacao": "ok",
        "texto": "Backgammon is a two-player board game played with counters and dice on tables boards. It is the most widespread Western member of the large family of tables games, whose ancestors date back at least 1,600 years. The earliest record of backgammon itself dates to 17th-century England, being descended from the 16th-century game of Irish.\n[…]\nBackgammon involves a combination of strategy and luck from rolling of the dice. While the dice may determine the outcome of a single game, the better player will accumulate the better record over a series of many games. With each roll of the dice, players must choose from numerous options for moving their pieces and anticipate possible counter-moves by the opponent. The optional use of a doubling cube allows players to raise the stakes during the game.\n[…]\nBackgammon has been studied considerably by computer scientists. Neural networks and other approaches have offered significant advances to software for gameplay and analysis. With 15 white and 15 black counters and 24 possible positions, backgammon has 18 quintillion possible legal positions.\n[…]\nThe strength of these programs lies in their neural networks' weight tables, which are the result of extensive training. Without them, these programs play no better than a human novice. For the bearoff phase, backgammon software usually relies on a database containing precomputed equities for all possible bearoff positions. There are 54,263 bearoff positions for each side. This means there are 54,2632 total bearoff positions (approximately 3 billion positions).\n[…]\nBackgammon notation\n[…]\nThe dictionary definition of Appendix:Glossary of backgammon terms at Wiktionary\n[…]\nBackgammon at Wikibooks\n[…]\nMedia related to Backgammon at Wikimedia Commons\n[…]\n\"Backgammon\" . Encyclopædia Britannica (11th ed.). 1911.\n[…]\nBackgammon World Championship - Monte Carlo"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Gam%C3%A3o",
        "situacao": "ok",
        "texto": "Gamão é um jogo de tabuleiro para dois jogadores, realizado num caminho unidimensional, no qual os adversários movem suas peças em sentidos contrários, à medida que jogam os dados e estes determinam quantas \"casas\" serão avançadas, sendo vitorioso aquele que conseguir retirar todas as peças primeiro (de onde pode ser tido como sendo também um \"jogo de corrida\" ou \"de percurso\").\n[…]\nAlém do tabuleiro o gamão compõe-se de um dado clássico (de seis faces) e trinta peças em formato circular (discos), sendo cada metade do total de peças em cores distintas da outra metade, uma é mais escura e a outra é mais clara, semelhante às do jogo de damas, e que pertencerão a cada um dos contendores. Para o lançamento dos dados os jogadores possuem um copo próprio e, opcionalmente, pode haver um dado para apostas (com numeração de 2, 4, 8, 16, 32 e 64 nas seis faces).\n[…]\nDuas variantes do gamão tiveram grande sucesso no século XIX: o triquetraque e o chaquete (adaptação no nome francês Jacquet); a variante estadunidense, criada no começo do século XX, passou a incorporar o dado de apostas, dando início às regras do gamão moderno.\n[…]\nApós a invenção do dado de apostas nos Estados Unidos, na década de 1920, o interesse pelo gamão ganhou novo impulso, e houve a formação de diversos clubes a reunir os adeptos, tanto naquele país quanto em outros. Em 1931 Wheaton Vaughan, presidente do comitê de gamão do New York Racquet and Tennis Club, escreveu as regras que hoje são adotadas para as competições.\n[…]\nProsper Mérimée (1803-1870), célebre autor de Carmen, escreveu o conto \"A partida de gamão\", onde mantém a sua característica de narrar a história por um personagem que é estranho aos fatos. O conto relata como, para tirar os pontos 6 e 4 que lhe dariam a vitória e o resultado de vultosa aposta, um jovem trapaceia - e as tristes consequências deste ato.\n[…]\n«Gamão online» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Canastra",
      "descricao": "Jogo de cartas da família do rummy, jogado com dois baralhos, criado em Montevidéu em 1939."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Na canastra, além dos curingas, que cartas comuns do baralho também podem substituir qualquer outra carta?",
    "resposta": "Os dois",
    "fonte": [
      "https://en.wikipedia.org/wiki/Canasta"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Canasta",
        "situacao": "ok",
        "texto": "Canasta (; Spanish for \"basket\") is a card game of the rummy family of games believed to be a variant of 500 rum. Although many variations exist for two, three, five or six players, it is most commonly played by four in two partnerships with two standard decks of cards. Players attempt to make melds of seven cards of the same rank and \"go out\" by playing all cards in their hands.\n[…]\nThe Canasta League of America, founded in 2011, has been focused on standardizing the most common rules played in North America.\n[…]\nIt is exactly like the original canasta, in its original version.\n[…]\nA player must have a minimum of three red (no wild cards) and 4 black canastas.\n[…]\nThe total value of all cards melded by that player/team, including cards in canastas minus the total value of all cards remaining in the team's hands, plus any bonuses:\n[…]\nThe discard pile is blocked for canastas. Only non-canasta melds can be used to pick up the discard pile.\n[…]\nCard points inside canastas are counted as well as the canasta score.\n[…]\nThere is a special case where any player/team that manages to meld 7 canastas in one hand (natural or mixed) automatically gain 5000 points and thus win the game.\n[…]\nA concealed canasta occurs when a canasta is melded directly from a player's hand. Usually in also going out: going out concealed which earns an extra 100 point bonus over the standard 100 point going out bonus.\n[…]\nSilbertein, Sue/Alan and Jackson-Strage, Jennifer, Ultimate Guide to Modern Canasta (2nd. Edition), Master Point Press 2025\n[…]\nCulbertson, Ely, Culbertson on Canasta: a Complete Guide for Beginners and Advanced Players With the Official Laws of Canasta, Faber 1949\n[…]\nHolmberg, H.H. and Öhrling, Erkki, Canasta, Samba ja Sitoumussamba, 1962\n[…]\nCollins, Dara and Miller-Small, Donna, Modern American Canasta: The Complete Guide, 2023\n[…]\nCLA – Canasta League of America\n[…]\nHow to Play Canasta—How Stuff Works\n[…]\nHistory of Canasta"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Canasta",
        "situacao": "ok",
        "texto": "A canasta (\"cesto\" em espanhol), que no Brasil é também chamada de canastra ou tranca, é um jogo de cartas da família de jogos do mexe-mexe, que se acredita ser uma variação do 500 Rum. Apesar de existirem muitas variações pra dois, três, cinco ou seis jogadores, é mais comum ser jogada por quatro jogadores organizados em duas duplas, com dois baralhos padrão de cartas. Os jogadores tentam fazer a\n[…]\nO jogo de Canasta foi criado por Segundo Santos e Alberto Serrato em Montevidéu, Uruguai, em 1939. Nos anos 1940 o jogo espalhou-se na forma de milhares de variações para o Chile, Peru, Brasil e Argentina, onde suas regras foram refinadas antes de ser introduzidos nos Estados Unidos em 1949 por Josefina Artayeta de Vel (Nova Iorque), onde ele era chamado de Argentine Rummy por Ittilie H. Reilly em 1949 e Michael Scully da Coronet magazine em 1953.\n[…]\nEm 1949/1951 o Regency Club de Nova Iorque escreveu as Official Canasta Laws (\"Leis Oficiais de Canasta\"), que foram publicadas junto com especialistas do jogo da América do Sul pela National Canasta Laws Commissions dos EUA e Argentina. O jogo rapidamente se tornou um sucesso nos anos 1950 gerando uma avalanche de vendas de baralhos, suportes de baralhos e livros sobre o assunto.\n[…]\nHistory of Canasta",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Combate (jogo)",
      "descricao": "Jogo de tabuleiro de estratégia militar com peças de patente escondida, versão brasileira do Stratego lançada pela Estrela."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "No jogo Combate, o espião é a peça mais fraca, mas pode derrotar qual peça, a de patente mais alta, quando é ele quem ataca?",
    "resposta": "O marechal",
    "fonte": [
      "https://en.wikipedia.org/wiki/Stratego",
      "https://pt.wikipedia.org/wiki/Stratego"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Stratego",
        "situacao": "ok",
        "texto": "Stratego ( strə-TEE-goh) is a chess-like strategy board wargame for two players on a board of 10×10 squares. Each player controls an army of 40 pieces representing individual officer and soldier ranks through a numbering scheme. The pieces have Napoleonic insignia. The objective of the game is to either find and capture the opponent's Flag or to capture all movable enemy pieces so that the opponen\n[…]\nThe French patent has 36 pieces for each player and also has a slightly different board layout, but it introduced the same hierarchical rules of attack and movement followed by modern versions of the game. Depaulis further notes the 1910 version had two armies, divided into red and blue colors. The rules of L'attaque were basically the same as Stratego. It featured standing cardboard rectangular pieces, color printed with soldiers who wore contemporary (to 1900) uniforms, not Napoleonic uniforms.\n[…]\nWorld Championships Stratego Barrage (8 pieces)\n[…]\n2010 Computer Stratego World Championship. The 2010 tournament was held in December. Once again, StrategoUSA hosted the tournament online. The winner was Probe, with a record of 24–3–3 (W–L–D).\n[…]\n2016 - today Patras Battles. Since 2016 almost every year in Patras the local team Patras Stratego Team organizes this international tournament inviting the best players from all over the world.\n[…]\nList of abstract strategy games\n[…]\nStratego Piece by Piece: History, Strategy, Tactics and Deployment, 1999, Prof. Michael Ziegler, Manor College, PA (private printing and distribution, not generally available)\n[…]\nRoyal Jumbo (Stratego trademark owner) Stratego marketing website Archived 1999-01-25 at the Wayback Machine\n[…]\nOfficial rules of Stratego by Hasbro (U.S. licensee)\n[…]\nProbe, an online Stratego automaton (3 time Computer Stratego World Champion)\n[…]\nInternational Computer Gaming Association, whose ICGA Journal publishes occasional current research on computer Stratego"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Stratego",
        "situacao": "inexistente",
        "texto": ""
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Super Trunfo",
      "descricao": "Jogo de cartas brasileiro da Grow em que os jogadores comparam características de carros, bichos e outros temas para ganhar as cartas dos adversários."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "No Super Trunfo, a carta Super Trunfo vence quase todas as outras do baralho. Que cartas podem derrotá-la?",
    "resposta": "As do grupo A",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Super_Trunfo"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Super_Trunfo",
        "situacao": "ok",
        "texto": "Super Trunfo é um jogo de cartas colecionáveis distribuído no Brasil pela Grow, que consiste em tomar todas as cartas em jogo dos outros participantes por meio de escolhas de características de cada carta (ex: velocidade, altura, longevidade). O jogo comporta de dois a oito participantes e tem classificação livre, podendo ser disputado por qualquer pessoa alfabetizada.\n[…]\nO jogo é caracterizado pela embalagem plástica simples que vem em uma cartela de papelão, as regras vêm encartadas no verso da própria etiqueta. Tradicionalmente, estão em disputa 32 cartas, divididas em oito grupos de quatro cartas (1A-1D, 2A-2D,… 8A-8D), sendo que uma delas é a carta \"Super Trunfo\" que ao entrar em disputa pode ser invocada para tomar as outras cartas na mão dos oponentes.\n[…]\nComeçou a ser produzido no Brasil nos anos 70, voltado a automóveis e outros veículos, e se popularizou nos anos 80. Atualmente conta com vários temas, entre os tradicionais sobre carros e aviões até os mais novos como Cães de Raça e de super-heróis. Muitos tentaram produzir jogos semelhantes, como o Super Coluna e o 4 Match (que chegaram a rivalizar com o Super Trunfo nos anos 80), mas não são mais produzidos.\n[…]\nEle pode ser considerado jogo de azar, porque antes de começar o jogo as cartas se misturam e também porque não depende de habilidade alguma do jogador e sim de sorte como prevem os jogos de azar.\n[…]\nA versão oficial online do Super Trunfo está disponível para se jogar pela internet com outras pessoas no portal de jogos multiplayers Gametrack. O serviço é cobrado em forma de assinaturas (mensais, trimestrais ou semestrais), mas há disponível um período grátis para experimentação. Esta versão do jogo está fiel às regras do original e foi feita sob licença da Grow, pela desenvolvedora brasileira de jogos Devworks.\n[…]\njogo de cartas colecionáveis\n[…]\n«Super Trunfo». site da GROW"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Dama (xadrez)",
      "descricao": "Peça mais poderosa do xadrez, que se move em linha reta e na diagonal por quantas casas quiser, também chamada rainha."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Ao montar o xadrez, há uma regra para não trocar o rei e a dama de lugar. Em que cor de casa a dama preta começa?",
    "resposta": "Preta",
    "fonte": [
      "https://en.wikipedia.org/wiki/Queen_(chess)",
      "https://pt.wikipedia.org/wiki/Dama_(xadrez)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Queen_(chess)",
        "situacao": "ok",
        "texto": "The queen (♕, ♛) is the most powerful piece in the game of chess. It can move any number of squares vertically, horizontally, or diagonally, combining the powers of the rook and bishop. Each player starts the game with one queen, placed in the middle of the first rank next to the king. Because the queen is the strongest piece, a pawn is promoted to a queen in the vast majority of cases; if a pawn \n[…]\nDuring the great chess reform at the end of the 15th century, Catholic nations kept using an equivalent of Latin domina ('lady'), such as dama in Spanish, donna in Italy, and dame in France, all of which evoke \"Our Lady\". Protestant nations such as Germany and England, however, refused any derivatives of domina as it might have suggested some cult of the Virgin Mary, and instead opted for secular terms such as Königin in German and \"queen\" in English.\n[…]\nIn most languages the piece is known as \"queen\" or \"lady\" (e.g. Italian regina or Spanish dama). Asian and Eastern European languages tend to refer to it as vizier, minister, or advisor (e.g. Arabic/Persian وزیر wazir (vazir), Russian/Persian ферзь/فرز ferz). In Polish it is known as the hetman, the name of a major historical military-political office, while in Estonian it is called lipp ('flag', 'standard')."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dama_(xadrez)",
        "situacao": "ok",
        "texto": "A Dama ou Rainha é uma peça maior do jogo de xadrez, representada nos países lusófonos pela letra D nas notações algébricas. É a peça de maior valor relativo do jogo, usualmente valorada entre nove e dez pontos. Assim como a Torre, é capaz de, com o auxílio do seu Rei, vencer uma partida contra um Rei solitário. Por sua alta mobilidade é a peça preferida do enxadrista iniciante.\n[…]\nNo chaturanga e xatranje, antecessores mais antigos do xadrez, o lugar da Dama era ocupado pelo Firzan ou Firz, equivalente ao vizir ou conselheiro real. Na Europa, durante a Idade Média, a Dama lentamente substituiu seu antecessor, apesar dos movimentos serem os mesmos, e já no final do século XIII estava presente em todo o continente. No fim do século XV, seu movimento foi ampliado atingindo a regra atual, embora as condições de promoção do peão a uma nova Dama ainda fossem restritas.\n[…]\nA ascensão da Dama como a peça de maior valor relativo do xadrez coincidiu com o reinado influente de Isabel I de Castela, entretanto é provável que outras rainhas como Leonor da Aquitânia, Branca de Castela, Teofânia Escleraina e Matilde de Canossa tenham influenciado a inclusão da figura feminina da Dama sobre o tabuleiro. O culto a virgem Maria na França do século XIII também poderia ter influenciado o jogo.\n[…]\nCada enxadrista inicia o jogo com uma Dama, posicionada no meio da primeira fileira ao lado do Rei. A Dama branca inicia o jogo numa casa clara, e a negra numa casa escura, daí a regra \"Dama na cor\". Na notação algébrica, a Dama branca começa o jogo em d1 e a negra em d8.\n[…]\nEm finais sem peões, uma Dama é capaz de derrotar um adversário com somente uma Torre, ou uma peça menor e devido a multiplicidade de movimentos  consegue forçar um empate por repetição da mesma posição no tabuleiro ou pela regra dos 50 movimentos, embora a nível profissional a partida seja considerada empatada antes."
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Pipa (brinquedo)",
      "descricao": "Brinquedo de papel e varetas empinado ao vento preso a uma linha, muito popular no Brasil."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Nos estados do Sul do Brasil, sobretudo no Rio Grande do Sul, a pipa costuma ser chamada por qual outro nome?",
    "resposta": "Pandorga",
    "distratores": [
      "Papagaio",
      "Raia",
      "Arraia"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Pipa_(brinquedo)"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Pipa_(brinquedo)",
        "situacao": "ok",
        "texto": "A pipa (português brasileiro) ou papagaio (português europeu), também chamada pandorga ou raia, é um brinquedo que voa baseado na oposição entre a força do vento e a da corda segurada pelo operador.\n[…]\nNo Brasil, a pipa (como é chamada no Rio de Janeiro) também recebe os nomes de cafifa (em Niterói), arraia, morcego, lebreque, bebeu, coruja, tapioca (em várias partes do estado do Rio de Janeiro), papagaio, curica , cângula, jamanta, casqueta, cometa, chambeta (no estado de São Paulo), quadrado (no Paraná), pandorga (no Rio Grande do Sul e Santa Catarina), barril, estilão, pião, bolacha (na Bahia) e pepeta (em estados como Acre e Amazonas).\n[…]\nMuito populares nos subúrbios da cidade do Rio de Janeiro, são chamadas de pipas propriamente ditas aquelas em formato de pentágono, com cabresto triangular e rabiola. Já as arraias não possuem rabiola, e são mais comuns em Niterói.\n[…]\nO político e inventor norte-americano Benjamin Franklin utilizou uma pipa para investigar e inventar o para-raios. Hoje, a pipa mantém a sua popularidade entre  crianças de todas as culturas.\n[…]\nSuru — pipa que não tem rabiola e também em sua fabricação só utiliza duas taletas (varetas) em forma de cruz e é totalmente encapada.\n[…]\nRaia — não utiliza rabiola e tem formato de losango.\n[…]\nCafifa — espécie de raia, muito parecido com a pipa.\n[…]\nPeixinho — raia pequena com rabiola\n[…]\nCapucheta — pipa feita de uma única folha de jornal e sem varetas; a rabiola também é feita de jornal. Com algumas dobraduras e com a linha amarrada nos dois lados da dobradura, formando um triângulo, ou delta, ao centro por onde é empinado.\n[…]\nExperiência da pipa, de Benjamin Franklin"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Valete (carta de baralho)",
      "descricao": "Carta de figura do baralho que representa um jovem da corte, abaixo da dama e do rei."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O valete do baralho tem nome de origem francesa. O que significa a palavra valet nessa língua?",
    "resposta": "Criado",
    "distratores": [
      "Cavaleiro",
      "Bobo",
      "Soldado"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Jack_(playing_card)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Jack_(playing_card)",
        "situacao": "ok",
        "texto": "A Jack or Knave, in some games referred to as a Bower, in Tarot card games as a Valet, is a playing card which, in traditional French and English decks, pictures a man in the traditional or historic aristocratic or courtier dress generally associated with Europe of the 16th or 17th century. The usual rank of a jack is between the ten and the queen. The Jack corresponds to the Unter in German and S\n[…]\nThe earliest predecessor of the knave was the thānī nā'ib (second or under-deputy) in the Mamluk card deck. This was the lowest of the three court cards, and, like all court cards, was depicted via abstract art or calligraphy. When brought over to Italy and Spain, the thānī nā'ib was made into the fante (an infantry soldier) and the sota (a page, which ranks below the knight card) respectively. In France, where the card was called the valet, the queen was inserted between the king and the knight.\n[…]\nThe knight was subsequently dropped out of non-Tarot decks, leaving the valet directly under the queen. The king-queen-valet format then made its way into England.\n[…]\nU+1F0AB 🂫 PLAYING CARD JACK OF SPADES\n[…]\nU+1F0BB 🂻 PLAYING CARD JACK OF HEARTS\n[…]\nU+1F0CB 🃋 PLAYING CARD JACK OF DIAMONDS\n[…]\nU+1F0DB 🃛 PLAYING CARD JACK OF CLUBS\n[…]\nOne-eyed jack\n[…]\n\"The Jack\", a song by AC/DC, in which the playing card is a metaphor for an enthusiastic sexual partner with expertise-level \"hand stuff\" skills.\n[…]\nThe Jack of Diamonds, a group of artists founded in 1909 in Moscow\n[…]\n\"Jack of Diamonds\", a traditional folk song\n[…]\nJack of Diamonds, the title used by George de Sand in the 1994 anime Mobile Fighter G Gundam\n[…]\nThe Jack of Hearts (Jack Hart), a Marvel Comics superhero\n[…]\nThe Jack of Hearts, a 1919 short Western film\n[…]\n\"Lily, Rosemary and the Jack of Hearts\", a song by Bob Dylan\n[…]\nPub (trans. The Jack), an album by Đorđe Balašević.\n[…]\n\"Jack of Speed\", a song by Steely Dan, a group of musicians, see: Donald Fagen"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Valete",
        "situacao": "ok",
        "texto": "Valete é uma carta de baralho. A palavra deriva do francês valet, que designa um empregado doméstico masculino, subordinado a alguém - normalmente ao senhor da casa. Poderia ter-se um ou mais valetes, sendo muito usual até a metade do século XIX, principalmente à nobreza. Tendo surgido na Baixa Idade Média (século XI ao XV) a prática de ter-se um ou mais valetes.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Peão (xadrez)",
      "descricao": "Peça mais numerosa do xadrez, oito para cada lado, que avança para a frente e captura na diagonal."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome do peão do xadrez vem do latim e indica como esse guerreiro se deslocava na batalha. Como era?",
    "resposta": "A pé",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pawn_(chess)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pawn_(chess)",
        "situacao": "ok",
        "texto": "The pawn (♙, ♟) is the most numerous and weakest piece in the game of chess. It can move one vacant square directly forward, or one or two vacant squares directly forward on its first move, and can capture one square diagonally forward. Each player begins a game with eight pawns, one on each square of their second rank. The white pawns start on a2 through h2, while the black pawns start on a7 thro\n[…]\nOutside of the game of chess, \"pawn\" is often taken to mean \"one who is manipulated to serve another's purpose\". Because the pawn is the weakest piece, it is often used metaphorically to indicate unimportance or outright disposability, only having utility in the ability to be controlled; for example, \"She's only a pawn in their game.\""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pe%C3%A3o_%28xadrez%29",
        "situacao": "ok",
        "texto": "O peão (♙, ♟) é uma peça menor do xadrez. No início de uma partida, cada jogador tem oito peças que são dispostas nas fileiras 2 para as brancas e 7 para as pretas. O peão move-se verticalmente na coluna que encontra-se, sendo incapaz de recuar. No primeiro movimento de cada peão, a partir do ponto de partida, pode avançar duas casas e, a partir daí, uma.\n[…]\nQuando o xadrez chegou a Europa na Idade Média, os monges atribuíram uma profissão plebeia medieval a cada peão. Com isso, os peões de a2 a h2 eram, respectivamente:\n[…]\nO posicionamento dos peões é um elemento chave na estratégia do xadrez devido a sua baixa mobilidade que cria fraquezas permanentes na cadeia de peões. São utilizados para controlar casas importantes do tabuleiro ou impedir o avanço de peões adversários. Quando tem o caminho desobstruído, o avanço do peão no tabuleiro aumenta a probabilidade de promoção a Dama o que pode influenciar na estratégia a ser adotada a medida que o oponente desloca suas peças para bloquear o peão.\n[…]\nExistem diversas peças não-ortodoxas de xadrez baseadas no peão. Com movimento similar ao do peão, consta o superpeão que pode avançar pelo número de casas disponíveis à frente e captura na diagonal de modo à frente de modo similar ao bispo. O peão berolina possui o movimento invertido, isto é, avança na diagonal e captura a peça à sua frente na mesma coluna.\n[…]\nNo xiangqi, a variante chinesa do xadrez, o peão pode se mover para frente, e para os lados uma vez atravessada parte do tabuleiro, capturando também desta forma. No shogi, variante japonesa, move somente para frente, capturando caso a casa estiver ocupada por uma peça adversária e quando promovido retorna a posição inicial com a patente \"ouro\" e movimento similar ao general. No xadrez Avalanche, o jogador pode mover um peão adversário na sua vez de jogar além de mover sua própria peça.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Mahjong",
      "descricao": "Jogo chinês para quatro jogadores, jogado com peças ilustradas de naipes, ventos e dragões."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Em alguns dialetos chineses, o nome do mahjong, jogo de peças ilustradas, é o mesmo de qual pássaro?",
    "resposta": "Pardal",
    "distratores": [
      "Grou",
      "Pavão",
      "Garça"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Mahjong"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mahjong",
        "situacao": "ok",
        "texto": "Mahjong is a tile-based game for two to four players. Though regional variations may exclude certain tiles or add unique ones, it is typically played with a set of 144 tiles based on Chinese characters and symbols. Players hold one of four \"wind\" positions referred to as the East, South, West, and North. Once each player draws a hand of thirteen tiles, in clockwise order beginning with the \"prevai\n[…]\nMahjong became a central part of cultural bonding for Chinese Americans in the 1920s and '30s in Chinatown, Manhattan and was part of community building for suburban American Jewish women in the 1940s and 50s.\n[…]\nThe game has taken on a number of trademarked names, such as \"Pung Chow\" and the \"Game of Thousand Intelligences\". Mahjong nights in America often involved dressing and decorating rooms in Chinese style. Several hit songs were recorded during the Mahjong fad, most notably \"Since Ma Is Playing Mah Jong\" by Eddie Cantor.\n[…]\nHong Kong mahjong or Cantonese mahjong is a more common form of mahjong, differing in minor scoring details from the Chinese Classical variety. It does not allow multiple players to win from a single discard.\n[…]\nEuropean classical mahjong is a family of European variants that remained closer to Chinese classical mahjong than most modern Chinese variants, some of which are still actively played today. Most notably:\n[…]\nJapanese classical mahjong is still used in tournaments. It is closer to the Chinese classical scoring system but only the winner scores.\n[…]\nThere are variations that feature specific use of tiles. Some three-player versions remove the North wind and one Chinese provincial version has no honors. Korean mahjong removes the bamboo suit or at least its numbers 2–8 so that terminals can be used. Japanese mahjong rarely uses flowers or seasons. Korean mahjong uses seasons but calls them flowers, while many Southeast Asian sets have more flower series."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mahjong",
        "situacao": "ok",
        "texto": "Mahjong (mah jongg, majiang, majongue, majong, ma-jong) é um jogo de mesa de origem chinesa que foi exportado, a partir de 1920, para o resto do mundo e principalmente para o ocidente. É composto de 144 peças, chamadas comumente de “pedras”. São elas:\n[…]\nUm jogo ocidental que muito se assemelha ao Mahjong é o Rummy e também a Canastra (Buraco), ao que se trata de fazer conjuntos de pedras, como uma sequência de três pedras do mesmo naipe, três ou quatro pedras iguais. As flores e as estações que dão pontos extras não são utilizadas em todas as versões do jogo.\n[…]\nEm toda a Ásia o Mahjong adquiriu enorme popularidade, de modo que muitos países o consideram como jogo nacional; existem variantes japonesa, coreana, vietnamita, filipina, e é normal que quaisquer festas, celebrações e até mesmo negócios importantes acabem em algumas partidas de Mahjong. Também devemos nos lembrar que existe uma variante israelita.\n[…]\nOs suportes, os dados, as fichas de contagem e os discos com símbolos dos quatro ventos às vezes são inclusos com o jogo de peças.\n[…]\nTradicionalmente, o jogo de mahjong vem com fichas específicas de contagem, que são retângulos compridos com pequenos círculos pintados, sendo que cada tipo corresponde a um valor (semelhante a cédulas de dinheiro):\n[…]\nNo início de cada jogo, cada jogador recebe 2 peças de 500 pontos, 9 peças de 100 pontos, 8 peças de 10 pontos e 10 peças de 2 pontos, perfazendo um total de 2000 pontos para cada jogador. Ao término de cada partida os pagamentos são feitos utilizando essas fichas.<\n[…]\nPor completar Mah Jong com a primeira pedra descartada pelo Jogador Leste no início do jogo -Limite.\n[…]\nOrganização Mundial de Mahjong (página em chinês)\n[…]\nTenpai.com.br - tudo sobre Riichi Mahjong\n[…]\nMahjong para Android\n[…]\nMahjong Online",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Chaturanga",
      "descricao": "Jogo de estratégia da Índia antiga, surgido por volta do século seis, ancestral do xadrez."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Chaturanga, o nome do ancestral indiano do xadrez, quer dizer quatro partes. Quatro partes de quê?",
    "resposta": "Do exército",
    "fonte": [
      "https://en.wikipedia.org/wiki/Chaturanga"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Chaturanga",
        "situacao": "ok",
        "texto": "Chaturanga (Sanskrit: चतुरङ्ग, IAST: caturaṅga, pronounced [tɕɐt̪uˈɾɐŋɡɐ]) is an ancient Indian strategy board game. It is first known from India around the seventh century CE.\n[…]\nWhile there is some uncertainty, the prevailing view among chess historians is that chaturanga is the common ancestor of the board games chess, xiangqi (Chinese), janggi (Korean), shogi (Japanese), sittuyin (Burmese), makruk (Thai), ouk chatrang (Cambodian) and modern Indian chess. It was adopted as chatrang (shatranj) in Sassanid Persia, which in turn was the form of chess brought to late-medieval Europe.\n[…]\nSanskrit caturaṅga is a bahuvrihi compound word, meaning \"having four limbs or parts\" and in epic poetry often meaning \"army\". The name comes from a battle formation mentioned in the Indian epic Mahabharata. Chaturanga refers to four divisions of an army, namely elephantry, chariotry, cavalry and infantry. An ancient battle formation, akshauhini, is like the setup of chaturanga.\n[…]\nWhile there is some uncertainty, the prevailing view among chess historians is that chaturanga is the common ancestor of the board games chess, xiangqi (Chinese), janggi (Korean), shogi (Japanese), sittuyin (Burmese), makruk (Thai), ouk chatrang (Cambodian) and modern Indian chess.\n[…]\nThe general in Chinese xiangqi lacks diagonals, which might be the earliest move of the raja. The minority view that chaturanga developed from a form of xiangqi implies such an evolution, but it is also logical to assume such a move as the case for an Indian proto-chaturanga.\n[…]\nThe same move is used for the boat in Indian chaturaji, a four-player version of chaturanga.\n[…]\nChaturanga by Hans Bodlaender, The Chess Variant Pages"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Chaturanga",
        "situacao": "ok",
        "texto": "Chaturanga é um antigo jogo de tabuleiro indiano que se acredita estar na origem do Jogo de Xadrez, o Shogi e o Makruk, e é relacionado com o Xiang Qi (ou Janggi). Surgiu provavelmente no século VI, sendo considerado o predecessor do Xatranje que, por sua vez, veio a originar o xadrez moderno.\n[…]\nAssim como nos jogos de tabuleiro atuais, o chaturanga se joga com dois jogadores, mas também há uma versão para quatro jogadores, o Chaturaji.\n[…]\nChaturanga é um adjetivo composto por duas palavras, chatur que significa \"quatro\" e anga que significa \"membro\" e tem o significado literal de \"quadripartido\". Em seu sentido original aparece no Rigveda em referência as quatro partes do corpo humano e no Shatapatha Brahmana.\n[…]\nO termo apareceu também no Mahābhārata que existe desde o século V, Ramáiana (século V a.C.), Nitisara (Kamandaki) do início da era cristã e no Atarvaveda Parsistas (~250) tanto com a palavra bata (exército) ou como substantivo neutro ou feminino no sentido de \"exército composto por quatro membros\" e \"exército\" em geral, ficando claro o uso da palavra como nome do exército em sânscrito.\n[…]\nO significado destas quatro partes fica claro da conexão da palavra chaturanga com bigas, elefantes, cavalaria e infantaria no Ramáiana, no Mahābhārata e no Amarakosa no qual o exército é expressamente chamado de hasty-ashwa-ratha-padatam que era a composição do exército desde século IV a.C. de acordo com relatos gregos da invasão do noroeste indiano por Alexandre, o Grande. O historiador grego Megástenes passou algum tempo na corte de Pataliputra no século III a.C.\n[…]\ne afirmou que havia seis divisões no exército: Elefantes, Bigas, Cavalaria, Soldados, suprimentos e barcos. (hasty-aswa-ratha-padati-senepati-karmakara).\n[…]\nXadrez na Índia\n[…]\nChessVariants.org: Chaturanga (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Canastra",
      "descricao": "Jogo de cartas da família do rummy, jogado com dois baralhos, criado em Montevidéu em 1939."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome original da canastra, canasta, é uma palavra espanhola. Que objeto ela designa?",
    "resposta": "Cesto",
    "fonte": [
      "https://en.wikipedia.org/wiki/Canasta"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Canasta",
        "situacao": "ok",
        "texto": "Canasta (; Spanish for \"basket\") is a card game of the rummy family of games believed to be a variant of 500 rum. Although many variations exist for two, three, five or six players, it is most commonly played by four in two partnerships with two standard decks of cards. Players attempt to make melds of seven cards of the same rank and \"go out\" by playing all cards in their hands.\n[…]\nThe game of Canasta was devised by attorney Segundo Sánchez Santos and his Bridge partner, architect Alberto Serrato in Montevideo, Uruguay, in 1939, in an attempt to design a time-efficient game that was as engaging as Bridge. They tried different formulas before combining Bridge, Rummy and Conquan into a game  , and then inviting Arturo Gómez Hartley and Ricardo Sanguinetti to test their game.\n[…]\nThe name canasta likely is named for the tray (basket) originally placed in the center of the table for the stack of undealt cards and discards. The game was also called Samba and Bolivia.Santos and Serrato never patented the game rules, and thus never received royalties from the later Canasta boom.\n[…]\nIt is exactly like the original canasta, in its original version.\n[…]\nThis variation originates in Slovakia. Since the definition of Canasta rules differed from player to player a strong urge has risen for unified rules. This in turn was satisfied by the creation of Boat Canasta, which really is a mix of other known rules, but thoroughly optimized. Currently this variant of Canasta is steadily gaining popularity mainly in Slovakia, but also in countries such as France, Germany and England.\n[…]\nCard points inside canastas are counted as well as the canasta score.\n[…]\nHolmberg, H.H. and Öhrling, Erkki, Canasta, Samba ja Sitoumussamba, 1962\n[…]\nCollins, Dara and Miller-Small, Donna, Modern American Canasta: The Complete Guide, 2023\n[…]\nCLA – Canasta League of America\n[…]\nHow to Play Canasta—How Stuff Works\n[…]\nHistory of Canasta"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Canasta",
        "situacao": "ok",
        "texto": "A canasta (\"cesto\" em espanhol), que no Brasil é também chamada de canastra ou tranca, é um jogo de cartas da família de jogos do mexe-mexe, que se acredita ser uma variação do 500 Rum. Apesar de existirem muitas variações pra dois, três, cinco ou seis jogadores, é mais comum ser jogada por quatro jogadores organizados em duas duplas, com dois baralhos padrão de cartas. Os jogadores tentam fazer a\n[…]\nO jogo de Canasta foi criado por Segundo Santos e Alberto Serrato em Montevidéu, Uruguai, em 1939. Nos anos 1940 o jogo espalhou-se na forma de milhares de variações para o Chile, Peru, Brasil e Argentina, onde suas regras foram refinadas antes de ser introduzidos nos Estados Unidos em 1949 por Josefina Artayeta de Vel (Nova Iorque), onde ele era chamado de Argentine Rummy por Ittilie H. Reilly em 1949 e Michael Scully da Coronet magazine em 1953.\n[…]\nEm 1949/1951 o Regency Club de Nova Iorque escreveu as Official Canasta Laws (\"Leis Oficiais de Canasta\"), que foram publicadas junto com especialistas do jogo da América do Sul pela National Canasta Laws Commissions dos EUA e Argentina. O jogo rapidamente se tornou um sucesso nos anos 1950 gerando uma avalanche de vendas de baralhos, suportes de baralhos e livros sobre o assunto.\n[…]\nHistory of Canasta",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Rainha de Copas (Alice)",
      "descricao": "Personagem tirana de Alice no País das Maravilhas, de Lewis Carroll, que vive mandando cortar cabeças."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Em Alice no País das Maravilhas, a rainha que manda cortar cabeças tem soldados e jardineiros que, na verdade, são o quê?",
    "resposta": "Cartas de baralho",
    "fonte": [
      "https://en.wikipedia.org/wiki/Queen_of_Hearts_(Alice%27s_Adventures_in_Wonderland)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Queen_of_Hearts_(Alice%27s_Adventures_in_Wonderland)",
        "situacao": "ok",
        "texto": "The Queen of Hearts is a fictional character and the main antagonist in the 1865 book Alice's Adventures in Wonderland by Lewis Carroll. She is a childish, foul-tempered monarch whom Carroll himself describes as \"a blind fury\", and who is quick to give death sentences at even the slightest of offenses. One of her most famous lines is the oft-repeated \"Off with his/her/their head(s)!\"\n[…]\nIt's implied that after Alice was placed in the asylum the Red Queen and the Queen of Hearts fused together which explains why the Queen of Hearts is able to control the red piece and the cards at the same time.\n[…]\nIn the two-part series Alice, hosted by the SyFy Channel, the Queen of Hearts is portrayed by Kathy Bates as a refined but ruthless drug lord. The miniseries is set one hundred and fifty years after the original Alice's first visit to Wonderland (the heroine is an unrelated character) and the Queen is (as usual) the primary villain of the series. As is customary, the Queen is depicted as narcissistic, declaring herself as \"the most powerful woman in the history of literature\" and obese.\n[…]\nThe Queen is portrayed by Angelina Jolie in the 2020 movie Come Away, and is depicted as an imaginary counterpart to Alice's alcoholic mother Rose (also played by Jolie). This version of the Queen of Hearts is kept as separate character from the Red Queen, who is the imaginary counterpart to Rose's stuffy and disapproving older sister Eleanor.\n[…]\nThe Queen of Hearts features in Unsuk Chin's 2007 opera Alice in Wonderland; the role was created for Dame Gwyneth Jones.\n[…]\nIn Andrzej Sapkowski's short story Złote popołudnie (The Golden Afternoon) which is postmodern retelling of Alice's Adventures in Wonderland the Queen of Hearts is identified with Queen Mab.\n[…]\nIn the 2025 Russian musical film Alice in Wonderland, the Queen of Hearts is portrayed by Irina Gorbacheva."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rainha_de_Copas",
        "situacao": "ok",
        "texto": "A Rainha de Copas é uma personagem do livro Alice no País das Maravilhas, de Lewis Carroll. É descrita como tirânica, temperamental e frequentemente ordenando a decapitação dos seus súbditos.\n[…]\nAlice é recomendada por três cartas pintando rosas (para que fiquem da cor certa para a rainha) a jogar-se ao chão de bruços a fim evitar o confronto com a rainha. Alice ignora este conselho, pois nunca viu a Rainha.\n[…]\nQuando a rainha chega e pergunta a Alice quem está deitado na terra (já que as partes traseiras das cartas são idênticas), Alice diz-lhe que não sabe. A rainha então fica frustrada e ordena que cortem a cabeça de Alice, mas seu marido comparativamente moderado convence-a a desistir, lembrando-lhe que Alice é apenas uma criança.\n[…]\nUm dos passatempos da rainha além de requisitar execuções é croquet, porém é o croquet do País das Maravilhas é diferente. As bolas são ouriços vivos e os tacos são flamingos. Presumivelmente o objetivo do sistema seria que os flamingos acertassem as bolas (ouriços) com seu bico pontudo, mas, como Alice observa, isso complica-se pelo fato de os flamingos se voltarem para os jogadores, e também pela tendência dos ouriços de sair rolando sem esperar ser acertados.\n[…]\nApesar da freqüência das sentenças de morte, poucas pessoas apareceriam realmente decapitadas. O rei de Copas silenciosamente perdoa muitos condenados quando a rainha não está olhando, e seus soldados a humorizam mas não obedecem as ordens. Não obstante, todas as criaturas no País das Maravilhas temem a rainha. Nos capítulos finais, a rainha sentencia Alice outra vez (por defender o valete de copas) e oferece uma visão interessante da justiça: sentença antes do veredicto.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Peças de xadrez de Lewis",
      "descricao": "Conjunto de peças de xadrez medievais do século doze encontrado na Ilha de Lewis, na Escócia."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "As peças de xadrez de Lewis, esculpidas no século doze, serviram de modelo para o xadrez gigante de qual filme de 2001?",
    "resposta": "Harry Potter e a Pedra Filosofal",
    "fonte": [
      "https://en.wikipedia.org/wiki/Lewis_chessmen"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lewis_chessmen",
        "situacao": "ok",
        "texto": "The Lewis chessmen (Scottish Gaelic: Fir-thàilisg Leòdhais [fiɾʲˈhaːlɪʃkʲ loː.ɪʃ]) or Uig chessmen, named after the island or the bay where they were found, are a group of distinctive 12th-century chess pieces, along with other game pieces, most of which are carved from walrus ivory.\n[…]\nOn 3 April 2013, £1.8 million from the European Regional Development Fund was granted to transform Lews Castle, Isle of Lewis, into a museum for the Western Isles. Around £14 million in total was allocated for restoring and converting the property, which had been shuttered for nearly 25 years. The Museum nan Eilean, located on the castle grounds, features a display of six Lewis chessmen on loan from the British Museum.\n[…]\nLinda Fabiani, Scottish Minister for Europe, External Affairs and Culture, stated that \"it is unacceptable that only 11 Lewis chessmen rest at the National Museum of Scotland while the other 67 (as well as the 14 tablemen) remain in the British Museum in London.\"\n[…]\nThe historical society in Uig, Comann Eachdraidh Ùig, which operates its museum near the find site, features detailed information about the chessmen and Norse occupation in Lewis. It has published that it cannot claim to own the pieces and would allow the normal museum market to determine whether more originals should rest in Edinburgh. It welcomes short-term loans.\n[…]\nCharlemagne chessmen\n[…]\nMedia related to Lewis chessmen at Wikimedia Commons\n[…]\nThe British Museum's page on the chessmen.\n[…]\nNational Museums Scotland's pages on the chessmen\n[…]\nA History of the World in 100 Objects, Number 61: The Lewis Chessmen\n[…]\nA website dedicated to the Lewis chessmen, their form and history"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pe%C3%A7as_de_xadrez_de_Lewis",
        "situacao": "ok",
        "texto": "As peças de xadrez de Lewis são um conjunto de noventa e três peças de xadrez medievais que foi encontrado na ilha de Lewis, na Escócia, em circunstâncias misteriosas. Talhadas em sua grande maioria de marfim de morsa, presume-se que sejam de origem escandinava e que tenham sido feitas na segunda metade do século XII. As estatuetas são esculpidas minuciosamente, com expressões de espanto nas peque\n[…]\nRelatos mais antigos e mais confiáveis, incluindo o do próprio Sharpe, indicam que as peças estavam dentro duma câmara redonda de pedra insossa, possivelmente uma oficina, localizada próximo às ruínas de um convento que teria existido na região chamado Taigh nan Cailleachan Dubha, ou \"Casa das Mulheres Pretas\". De fato, a existência deste convento em Mèalasta, quase dez quilômetros ao sul da baía de Uig, é atestada em 1709.\n[…]\nAlém do mais, Nidaros, que era a capital do Reino da Noruega na época e, portanto, um centro cultural muito influente, passou a receber tributo da Groenlândia na forma de matérias-primas, incluindo grandes quantidades de marfim de morsa. De fato, os desenhos nos tronos das peças de xadrez de Lewis têm sido comparados favoravelmente a padrões arquitetônicos nas igrejas de madeira da Noruega e, inclusive, com os esculpidos na arquitetura da Catedral de Nidaros.\n[…]\nEm 2010, os islandês Gudmundur G. Thórarinsson, publicou um artigo intitulado The enigma of the Lewis chessmen (\"O enigma das peças de xadrez de Lewis\") onde propõe a hipótese de que as peças teriam sido feitas na Islândia.\n[…]\nIncomodado com a aceitação desta hipótese por parte do mundo do xadrez, o norueguês Morten Lilleøren fez uma crítica contundente ao artigo de Thórarinsson num artigo intitulado The Lewis chessmen were never anywhere near Iceland! (\"As peças de xadrez de Lewis nunca estiveram nem perto da Islândia!\"), publicado no site ChessCafe.com.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Battleship: A Batalha dos Mares",
      "descricao": "Filme americano de ação e ficção científica de 2012, dirigido por Peter Berg, sobre uma batalha naval contra alienígenas."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Em 2012, a cantora Rihanna estreou no cinema num filme de ação com alienígenas inspirado em qual jogo de tabuleiro?",
    "resposta": "Batalha naval",
    "fonte": [
      "https://en.wikipedia.org/wiki/Battleship_(film)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Battleship_(film)",
        "situacao": "ok",
        "texto": "Battleship is a 2012 American military science fiction film loosely based on the board game of the same name by Hasbro. The film was co-produced and directed by Peter Berg and written by Jon and Erich Hoeber. It stars Taylor Kitsch, Alexander Skarsgård, Rihanna in her feature film debut, Brooklyn Decker, Tadanobu Asano and Liam Neeson.\n[…]\nThe film follows the crews of a small group of warships as they are forced to battle against a naval fleet of extraterrestrial origin in order to thwart their destructive goals.\n[…]\nU.S. Navy sailors were used as extras in various parts of this film. Sailors from assorted commands in Navy Region Hawaii assisted with line handling to take Missouri in and out of port for a day of shooting in mid 2010. A few months later, the production team put out a casting call for sailors stationed at various sea commands at Naval Station Mayport, Florida to serve as extras.\n[…]\nSailors were also taken from various ships stationed at Naval Station Mayport, Jacksonville, Florida, namely USS Hué City, USS Carney and USS Vicksburg were some of the ships that provided sailors.\n[…]\nBattleship grossed $65.4 million in the United States and Canada, and $237.6 million in other territories, for a worldwide total of $303 million, against a production budget of $209 million. In May 2012, The Hollywood Reporter estimated that Universal would lose $150 million on the film. However, a decade later, the film was a huge success on streaming services.\n[…]\nA video game based on the film, titled Battleship, was released in May 2012, to coincide with the film's international release. The game was published by Activision and developed by Double Helix Games for PlayStation 3 and Xbox 360, and developed by Magic Pockets for Wii, Nintendo 3DS, and Nintendo DS.\n[…]\nBattleship at Rotten Tomatoes\n[…]\nBattleship at the TCM Movie Database (archived)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Battleship",
        "situacao": "ok",
        "texto": "Battleship (prt: Battleship - Batalha Naval, ou Batalha Naval; bra: Battleship - A Batalha dos Mares) é um filme norte-americano de 2012, dos gêneros ficção científica e guerra naval, dirigido por Peter Berg para a Universal Studios e a Hasbro Studios, baseado no jogo de tabuleiro Batalha Naval.\n[…]\nChegou aos cinemas em 11 de abril de 2012 no Reino Unido, 19 de abril em Portugal, 11 de maio no Brasil, e 18 de maio nos Estados Unidos. Na trama, a Marinha dos Estados Unidos - que inclui os destróieres USS John Paul Jones e Sampson, além de cientistas e especialistas em armas - é atacada por uma força extraterrestre invasora.\n[…]\nRihanna...Artilheira Cora Raikes\n[…]\nO projeto começou a ser gravado na Austrália, no Gold Coast em 2010, mas devido à falta de apoio do governo, o negócio de 100 milhões de dólares foi cancelado. Teria sido um dos filmes mais caros já filmados no país, Battleship foi filmado então em Baton Rouge, Louisiana, e no estado do Havaí, que incluiu a base de Pearl Harbor, com direito a filmar no encouraçado USS Missouri. Um navio da Força Marítima de Autodefesa do Japão também aparece no filme.\n[…]\nO filme foi mal recebido pelos críticos. O Rotten Tomatoes deu ao filme uma pontuação de 34% de aprovação, baseado em opiniões de 162 críticos especializados.com a resenha \"Pode oferecer escapismo energético para cinéfilos menos exigentes, mas battleship é muito alto, mal escrito, e estereotipada para justificar a sua despesa - e muito menos divertido do que o seu material de origem\".\n[…]\nO filme também foi um grande fracasso de bilheteria não conseguindo arrecadar nem o dobro do orçamento total de produção.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Baralho francês",
      "descricao": "Baralho de cinquenta e duas cartas com os naipes copas, espadas, paus e ouros, o mais usado no Brasil e no mundo."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O baralho comum, sem os curingas, tem o mesmo número de cartas que um ano tem de quê?",
    "resposta": "Semanas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Standard_52-card_deck"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Standard_52-card_deck",
        "situacao": "ok",
        "texto": "The standard 52-card deck of French-suited playing cards is the most common pack of playing cards used today. A key feature of most playing card decks is their double-sided design: the backs of all cards are identical, helping to conceal each card's identity during play, while the faces are unique and display a suit and rank used in game mechanics.\n[…]\nThere are also numerous others such as the Berlin pattern, Nordic pattern, Dondorf Rhineland pattern (pictured right) and the variants of the European pattern.\n[…]\nAlthough French-suited, 52-card packs are the most common playing cards used internationally, there are many countries or regions where the traditional pack size is only 36 (Russia, Bavaria) or 32 (north and central Germany, Austria) or where regional cards with smaller packs are preferred for many games.\n[…]\nFor example, 40- or 48-card Italian-suited packs are common in Italy; 40- and 48-card Spanish-suited packs on the Iberian peninsula; and 36-card German-suited packs are very common in Bavaria and Austria. In addition, tarot cards are required for games such as French Tarot (78 cards), which is widely played in France, and the Tarock family of games (42 or 54 cards) played in countries like Austria and Hungary.\n[…]\nThe thickness and weight of modern playing cards are subject to numerous variables related to their purpose of use and associated material design for durability, stiffness, texture and appearance.\n[…]\nCommon collective and individual terms for playing cards that are relevant, but not exclusive to, the 52-card pack are:\n[…]\nAs of Unicode 7.0, playing cards are now represented. Note that the following chart (\"Cards\", Range: 1F0A0–1F0FF) includes cards from the Tarot Nouveau deck, as well as the standard 52-card deck."
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Combate (jogo)",
      "descricao": "Jogo de tabuleiro de estratégia militar com peças de patente escondida, versão brasileira do Stratego lançada pela Estrela."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O Combate, jogo de estratégia militar com peças de patente escondida lançado pela Estrela, é a versão brasileira de qual jogo europeu?",
    "resposta": "Stratego",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Stratego",
      "https://en.wikipedia.org/wiki/Stratego"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Stratego",
        "situacao": "inexistente",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Stratego",
        "situacao": "ok",
        "texto": "Stratego ( strə-TEE-goh) is a chess-like strategy board wargame for two players on a board of 10×10 squares. Each player controls an army of 40 pieces representing individual officer and soldier ranks through a numbering scheme. The pieces have Napoleonic insignia. The objective of the game is to either find and capture the opponent's Flag or to capture all movable enemy pieces so that the opponen\n[…]\nStratego was created by Dutchman Jacques Johan Mogendorff sometime before 1942. The name was registered as a trademark in 1942 by the Dutch company Van Perlstein & Roeper Bosch N.V. (which also produced the first edition of Monopoly). After WW2, Mogendorff licensed Stratego to Smeets and Schippers, a Dutch company, in 1946. Hausemann and Hotte acquired a license in 1958 for European distribution, and in 1959 for global distribution.\n[…]\nOfficial Modern Version: Also known as Stratego Original. Redesigned pieces and game art. The pieces now use stickers attached to new \"castle-like\" plastic pieces. The stickers must be applied by the player after purchase. Rank numbering is reversed in European style (higher numbers equals higher rank). Comes with an optional alternate piece, the Infiltrator.\n[…]\nIn this version of the game, each side has only 20 pieces. A few pieces have variant moves and there are a few rule differences. Games take only a fraction of the time needed for Classic Stratego. Competitions in this version include the \"Ultimate Lightning World Championships\" and the \"Ultimate Lightning European Championships\".\n[…]\nDuel Stratego\n[…]\nRoyal Jumbo (Stratego trademark owner) Stratego marketing website Archived 1999-01-25 at the Wayback Machine\n[…]\nOfficial rules of Stratego by Hasbro (U.S. licensee)\n[…]\nProbe, an online Stratego automaton (3 time Computer Stratego World Champion)\n[…]\nInternational Computer Gaming Association, whose ICGA Journal publishes occasional current research on computer Stratego"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Carta de baralho",
      "descricao": "Cartão de papel ou plástico com figuras e números usado em jogos de cartas."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Por que as figuras do baralho, como reis e damas, são desenhadas espelhadas, com duas metades iguais de cabeça para baixo?",
    "resposta": "Para ficarem certas de qualquer lado",
    "fonte": [
      "https://en.wikipedia.org/wiki/Playing_card"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Playing_card",
        "situacao": "ok",
        "texto": "A playing card is a piece of specially prepared card stock, heavy paper, thin cardboard, plastic-coated paper, cotton-paper blend, or thin plastic that is marked with distinguishing motifs. Often the front (face) and back of each card has a finish to make handling easier. They are most commonly used for playing card games, and are also used in magic tricks, cardistry, card throwing, and card house\n[…]\nThe Japanese video game company Nintendo was founded in 1889 to produce and distribute karuta (かるた; from Portuguese carta, 'card'), most notably hanafuda (花札, 'flower cards'). Hanafuda cards had become popular after Japan banned most forms of gambling in 1882 but largely left hanafuda untouched. Sales of hanafuda cards were popular with the yakuza-run gaming parlors in Kyoto."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Baralho",
        "situacao": "ok",
        "texto": "O baralho é um conjunto de cartas feitas de cartolina, papel couché, papelão fino, papel cartão, ou plástico fino, ilustradas e numeradas criado por volta do século X na China, depois espalhando-se por todo o mundo. Além do uso em vários tipos de jogos de cartas, também tem sido utilizados para adivinhação, educação e ilusionismo.\n[…]\nO naipe jogos de baralho é um retângulo de papel grosso, cartolina, cartão ou plástico, com um lado estampado com diversas cores e símbolos (geralmente número e naipes) chamado de face e o outro estampado num padrão comum a todas as cartas de cada baralho de modo que se esconda o valor da face.\n[…]\nA quantidade de cartas mais comum, e que é utilizada em vários jogos, é a que que compõe o baralho inglês de 52 cartas (o qual podem ser acrescentados uma ou duas cartas chamadas jokers ou, no Brasil, curingas), divididas nos quatro naipes franceses, com cada naipe contendo cartas numeradas de 2 a 10, o Ás, e as cartas figuradas valete, dama e rei. Os jogos que utilizam este baralho podem usá-lo todo ou um subconjunto obtendo uma menor quantidade de cartas.\n[…]\nVale ressaltar que o papel do Curinga varia de acordo com cada jogo. Em alguns, ele pode substituir qualquer carta; em outros, é a carta de menor valor e muitas vezes simplesmente é excluído do baralho, entre outras possibilidades.\n[…]\nTambém é comum ver a carta 2 como curinga nos jogos de canastra.\n[…]\nEm um baralho de cartas existem quatro naipes: Espadas (♠️); Paus (♣); Copas (♥️); Ouros (♦️). Dependendo da região, os naipes são denominados por outros símbolos e nomes das figuras.\n[…]\nA partir de 2013, no Brasil, a Copag passou a fazer uma campanha para se comemorar o Dia do Baralho. O dia escolhido foi 13/09, em homenagem ao baralho \"Copag 139\", o mais vendido do Brasil.\n[…]\n«História do baralho no mundo»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Shogi",
      "descricao": "Jogo de tabuleiro japonês de estratégia, parente do xadrez, com peças pentagonais que podem ser recolocadas após a captura."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "No shogi, a peça capturada pode voltar ao jogo do lado de quem a capturou. Que característica das peças torna isso possível?",
    "resposta": "Todas têm a mesma cor",
    "fonte": [
      "https://en.wikipedia.org/wiki/Shogi"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Shogi",
        "situacao": "ok",
        "texto": "Shogi (将棋, shōgi; English: , Japanese: [ɕo̞ːɡʲi]), also known as Japanese chess, is an abstract strategy board game for two players. It is one of the most popular board games in Japan and is in the same family of games as Western chess, chaturanga, xiangqi, Indian chess, makruk, and janggi. Shōgi means general's (shō 将) board game (gi 棋).\n[…]\nAround the 15th century, the rules of dai shogi were simplified, creating the game of chu shogi. Chu shogi, like its parent dai shogi, contains many distinct pieces, such as the queen (identical with Western chess) and the lion (which moves like a king, but twice per turn, potentially being able to capture twice, among other idiosyncrasies). The popularity of dai shogi soon waned in favour of chu shogi, until it stopped being played commonly.\n[…]\nAfter the Second World War, SCAP (occupational government mainly led by US) tried to eliminate all \"feudal\" factors from Japanese society and shogi was included in the possible list of items to be banned along with Bushido (philosophy of samurai) and other things. SCAP's reason for banning shogi was that the game uniquely utilized captured pieces. SCAP insisted that this could lead to the idea of prisoner abuse.\n[…]\nLikewise, shogi endgames are not characterized by a diminished number of pieces on the board as they are in chess. Positional play in shogi is also very different due to the forward capture of shogi pawns, which means there are no pawn chains in shogi like in chess. Instead, pawns are useful as tools for sacrifices and drops (which can be used to repair pawn formations).\n[…]\nShogi.Net\n[…]\nPlayOK shogi\n[…]\nGoldToken online turn-based shogi\n[…]\nHamShogi handicap shogi against the computer, instructions\n[…]\n将棋DB2 shogi game record database (in Japanese)\n[…]\nShogi Playground record or play through games, mate problems, board positions\n[…]\nCreate Shogi Diagram on the Web"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Shogi",
        "situacao": "ok",
        "texto": "Shogi (em japonês:  将棋, shōgi /  pronúncia em japonês: [ɕo̞ːŋi] ou [ɕo̞ːɡʲi] ), também conhecido como Xadrez Japonês ou Jogo dos Generais, é um jogo de estratégia de tabuleiro para dois jogadores, sendo a variante japonesa do xadrez. É a variante mais popular do xadrez no Japão.\n[…]\nO shogi foi a primeira variante do xadrez em permitir que peças capturadas retornassem para o tabuleiro através do jogador que as capturou. Especula-se que essa regra de reposição tenha sido inventada no século XV e possivelmente está associada a prática de mercenários do mesmo século trocarem sua lealdade quando capturados ao invés de serem mortos.\n[…]\nCada peça tem seu nome escrito na superfície na forma de dois kanji (caracteres chineses usados no japonês), usando uma tinta preta. No lado reverso de cada peça, com exceções do rei ou do general de ouro, existem um ou dois outros caracteres, sendo no conjunto de peças amadoras de outra cor (usualmente o vermelho); esse lado é virado durante a partida indicando que a peça foi promovida.\n[…]\nA tabela a seguir são as peças em japonês e suas representações em nomes equivalentes em português. As abreviações usadas para o jogo são para fins de anotações e geralmente são usadas pelos caracteres em japonês e seu significado literal nesse idioma e também as abreviações em inglês.\n[…]\nApós os arremessos de peças pelo furigoma, o jogo procede. Se vários jogos são jogados, então os jogadores se alternam em quem joga primeiro nos jogos subsequentes. Em cada turno, um jogador pode tanto mover uma peça que está naquele momento no tabuleiro (e potencialmente promovê-la, capturar uma peça adversária, ou ambas as opções), ou repõe uma peça que foi previamente capturada e colocada novamente no tabuleiro. Essas opções são explicadas abaixo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Xadrez 960",
      "descricao": "Variante do xadrez em que a posição inicial das peças da última fileira é sorteada entre 960 possibilidades."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Bobby Fischer propôs sortear a posição inicial das peças, no xadrez 960, para reduzir a vantagem de quem fazia o quê?",
    "resposta": "Decorava aberturas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Chess960"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Chess960",
        "situacao": "ok",
        "texto": "Chess960, also known as Fischer Random Chess, is a chess variant that randomizes the starting position of the pieces on the back rank. It was introduced by former world chess champion Bobby Fischer in 1996 to reduce the emphasis on opening preparation and to encourage creativity in play. Chess960 uses the same board and pieces as classical chess, but the starting position of the pieces on the play\n[…]\nThe eight-player Freestyle Chess G.O.A.T. Challenge was the first major Chess960 tournament that used classical chess time controls. It took place in Germany from February 9–16, 2024. Fischer Random world champion Nakamura was reportedly invited, but did not play in the event. Magnus Carlsen won the tournament by defeating Fabiano Caruana in the finals.\n[…]\nTo correctly record a Fischer Random Chess game in PGN, an additional \"Variant\" tag (not \"Variation\" tag, which has a different meaning) must be used to identify the rules; the rule named \"Fischerandom\" is accepted by many chess programs as identifying Fischer Random Chess, though \"Chess960\" should be accepted as well. This means that in a PGN-recorded game, one of the PGN tags (after the initial seven tags) would look like this: [Variant \"Fischerandom\"].\n[…]\nFEN is capable of expressing all possible starting positions of Fischer Random Chess; however, unmodified FEN cannot express all possible positions of a Chess960 game. In a game, a rook may move into the back row on the same side of the king as the other rook, or pawn(s) may be underpromoted into rook(s) and moved into the back row. If a rook is unmoved and can still castle, yet there is more than one rook on that side, FEN notation as traditionally interpreted is ambiguous.\n[…]\nScharnagl, Reinhard (2004). Fischer-Random-Schach (FRC/Chess960) (in German). Books on Demand GmbH. ISBN 978-3833413223.\n[…]\nFischer Describes his Fischer Random Chess Rules audio clip of Bobby Fischer"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Xadrez_de_Fischer",
        "situacao": "ok",
        "texto": "Xadrez de Fischer, também conhecido como Xadrez Aleatório de Fischer (do inglês Fischer Random Chess) ou Chess960 (em referência às suas 960 posições iniciais possíveis das peças), é um jogo variante do xadrez, anunciado por Robert James Fischer em 1996 na cidade de Buenos Aires (Argentina), onde a ordem das peças é escolhida aleatoriamente, mas seguindo alguns parâmetros pré-estabelecidos.\n[…]\nEm 2008, a Federação Internacional de Xadrez (FIDE) adicionou o Chess960 a um apêndice das Leis do Xadrez. O primeiro campeonato mundial oficialmente sancionado pela FIDE, o FIDE World Fischer Random Chess Championship 2019, trouxe destaque adicional para a variante.\n[…]\nBobby Fischer esperava criar uma variante do xadrez que não tivesse ênfase na memorização das jogadas iniciais, chamadas aberturas do xadrez, valorizando a criatividade e o talento dos jogadores. No xadrez convencional existe apenas uma posição inicial, que possui dezenas de aberturas e para cada abertura, dezenas de variantes. Pessoas com boa memória, como Grandes Mestres, conseguem um bom domínio em relação a essas centenas de possibilidades para o xadrez convencional.\n[…]\nJá no xadrez de Fischer há 960 posições inicias, para cada posição haverá dezenas de aberturas e, para cada abertura haverá dezenas de variantes. As possibilidades são cerca de 1000 vezes maiores que na forma convencional, tornando impossível um estudo de aberturas para o xadrez randômico.\n[…]\nAtualmente já existem softwares para jogar o Fischer Random, e o domínio das máquinas sobre os humanos é ainda mais forte do que no xadrez convencional, pelo fato de que os humanos podem recorrer menos à sua experiência de aberturas uma vez que as peças surgem em diferentes posições em cada jogo enquanto que a capacidade de realizar uma longa sequência de cálculos dos motores de xadrez mais modernos como Stockfish, é amplamente maior.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Xadrez chinês",
      "descricao": "Jogo de estratégia para dois jogadores, popular na China, com peças redondas e um rio no meio do tabuleiro."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "No xadrez ocidental, as brancas começam. No xadrez chinês, de que cor são as peças que fazem o primeiro lance?",
    "resposta": "Vermelhas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Xiangqi"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Xiangqi",
        "situacao": "ok",
        "texto": "Xiangqi (; Chinese: 象棋; pinyin: xiàngqí), commonly known in the West as Chinese chess, is a strategy board game for two players. It is the most popular board game in China. Xiangqi is in the same family of games as shogi, janggi, Western chess, chaturanga, and Indian chess.\n[…]\nThe Asian Xiangqi Federation also bestows the title of grandmaster to select individuals around the world who have excelled at xiangqi or made special contributions to the game. There are no specific criteria for becoming a grandmaster and there are only approximately 100 grandmasters as of 2020. The titles of grandmaster is bestowed by bodies such as the AXF and the Chinese Xiangqi Association (CXA).\n[…]\nBanqi This variation is more well known in Hong Kong than in mainland China. It uses the xiangqi pieces and board, but does not follow any of its rules, bearing more of a resemblance to the Western game Stratego as well as the Chinese game Luzhanqi.\n[…]\nLi, David H. First Syllabus on Xiangqi: Chinese Chess 1. Premier Publishing, Bethesda, Maryland, 1996. ISBN 0-9637852-5-7.\n[…]\nLi, David H. Xiangqi Syllabus on Cannon: Chinese Chess 2. Premier Publishing, Bethesda, Maryland, 1998. ISBN 0-9637852-7-3.\n[…]\nLi, David H. Xiangqi Syllabus on Elephant: Chinese Chess 3. Premier Publishing, Bethesda, Maryland, 2000. ISBN 0-9637852-0-6.\n[…]\nLi, David H. Xiangqi Syllabus on Pawn: Chinese Chess 4. Premier Publishing, Bethesda, Maryland, 2002. ISBN 0-9711690-1-2.\n[…]\nLi, David H. Xiangqi Syllabus on Horse: Chinese Chess 5. Premier Publishing, Bethesda, Maryland, 2004. ISBN 0-9711690-2-0.\n[…]\nXiangqi.com Play Xiangqi for free\n[…]\nXiangqi Championships\n[…]\nXiangqi, Chinese Chess Presentation, rules, history and variants, by Jean-Louis Cazaux\n[…]\nXiangqi (象棋): Chinese Chess by Hans Bodlaender, ed. Fergus Duniho, The Chess Variant Pages"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Xiangqi",
        "situacao": "ok",
        "texto": "O xiangqi (chinês: 象棋; pinyin: xiàngqí), xadrez chinês, ou xadrez-elefante é um jogo de estratégia jogado em um tabuleiro com nove linhas de largura por dez de comprimento. É um passatempo comum tanto na China quanto no Vietnã.\n[…]\nAs peças são discos grafados com caracteres chineses, e um lado tem a cor vermelha enquanto o outro é caracterizado pelo cor preta ou azul.\n[…]\nOs generais são identificados pelo carácter chinês (帥 shuài) no lado vermelho e (將 jiàng) no lado azul. Eles são na verdade generais militares, embora sejam equivalentes ao rei no xadrez. Diz a lenda que um imperador executou dois jogadores por estes terem matado ou capturado a peça imperador. Os jogadores passaram então a chamar a essa peça de general.\n[…]\nNa verdade, denomina-se ministro (相 xiàng) à peça vermelha e elefante (象 xiàng) à azul. Estas peças estão localizadas uma à esquerda do guarda da esquerda e a outra à direita do guarda da direita. Movem-se exatamente duas casas na diagonal, e não podem pular as peças que estiverem no caminho. Seu propósito é estritamente defensivo, uma vez que não podem atravessar o rio.\n[…]\nIdentificada pelo carácter (馬 mǎ) ou (马 mǎ) tanto para o vermelho como para o azul, esta peça é semelhante ao cavalo do xadrez internacional. Importa notar que o cavalo chinês se move uma casa na horizontal ou na vertical e depois um ponto na diagonal afastando-se da posição inicial, porque não pode saltar sobre outras peças como o cavalo do xadrez internacional.\n[…]\nO carro utiliza o carácter (車 jū) ou (车 jū) tanto para o vermelho como para o azul. Como a torre do xadrez internacional, o carro desloca-se e toma peças numa linha reta horizontal ou vertical. Os dois carros começam o jogo nos cantos do tabuleiro.\n[…]\nHistória do Xadrez",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Baralho francês",
      "descricao": "Baralho de cinquenta e duas cartas com os naipes copas, espadas, paus e ouros, o mais usado no Brasil e no mundo."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Os naipes do baralho comum, com corações, espadas, trevos e losangos, surgiram na França por volta de que século?",
    "resposta": "Século quinze",
    "fonte": [
      "https://en.wikipedia.org/wiki/French-suited_playing_cards"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/French-suited_playing_cards",
        "situacao": "ok",
        "texto": "French-suited playing cards or French-suited cards are cards that use the French suits of trèfles (clovers or clubs ♣), carreaux (tiles or diamonds ♦), cœurs (hearts ♥), and piques (pikes or spades ♠). Each suit contains three or four face/court cards. In a standard 52-card deck these are the valet (knave or jack), the dame (lady or queen), and the roi (king). In addition, in Tarot packs, there is\n[…]\nThe Paris pattern came to dominate in France around 1780 and became known as the portrait officiel. From the 19th century to 1945, the appearance of the cards used for domestic consumption was regulated by the French government. All cards were produced on watermarked paper made by the state to show payment of the stamp tax. The most common deck sold in France is the 32-card deck with the 2 to 6 removed and 1s as the index for aces. 52-card packs are also popular.\n[…]\nThey are also commonly found in France's former colonies. Within Belgium, the Francophone Walloons are the primary users of this pattern, while the Flemish prefer the Dutch pattern. This is the second most common pattern in the world after the English pattern. Belgian packs come in either 32 or 52 cards as they do in France. It was named the Belgian-Genoese pattern because of its popularity in both places and is the national pattern of Belgium.\n[…]\nSwedes used to use Bavarian-derived patterns. In the early 20th century, the firm Öberg & Son invented a new pattern unrelated to the old ones. This pattern has spread to neighboring Finland. The clothing for the figures in the court cards are color coordinated; green for spades, red for hearts, purple for clubs, and blue for diamonds. They are used in the standard 52-card format.\n[…]\nToday the Vienna pattern in Austria comes in pack of 24 (lacking the 2s to 8s), 32 (lacking 2s to 6s), or 52 cards, the last with corner indices and three jokers.\n[…]\nStandard 52-card deck"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Bobby Fischer",
      "descricao": "Enxadrista americano, campeão mundial de xadrez em 1972 após vencer o soviético Boris Spassky."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Bobby Fischer, campeão mundial de xadrez em 1972, recebeu cidadania no fim da vida e está enterrado em qual país?",
    "resposta": "Islândia",
    "fonte": [
      "https://en.wikipedia.org/wiki/Bobby_Fischer"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bobby_Fischer",
        "situacao": "ok",
        "texto": "Robert James Fischer (March 9, 1943 – January 17, 2008) was an American  chess grandmaster and the eleventh World Chess Champion. A chess prodigy, he won his first of a record eight US Championships at the age of 14. In 1964, he won with an 11–0 score, the only perfect score in the history of the tournament. Qualifying for the 1972 World Championship, Fischer swept matches with Mark Taimanov and B\n[…]\nIn March 1949, six-year-old Bobby and his sister Joan learned how to play chess using the instructions from a set bought at a candy store. When Joan lost interest in chess, and Regina did not have time to play, Fischer was left to play many of his first games against himself. When the family vacationed at Patchogue, Long Island, New York, that summer, Bobby found a book of old chess games and studied it intensely.\n[…]\nFischer vs. Boris Spassky, World Chess Championship 1972; 6th match game, Queen's Gambit Declined, Tartakower Defense (D59), 1–0; annotated on the 1972 match page. Fischer called this game his best of the match. Efim Geller had told Spassky about the strong move 14...Qb7 during their preparation, but Spassky had forgotten the advice and played 14...a6. Geller won with 14...Qb7 against Jan Timman in the AVRO 1973 tournament.\n[…]\nBoris Spassky vs. Fischer, World Chess Championship 1972; 13th match game, Alekhine Defense, Modern Variation, Alburt Variation (B04), 0–1; annotated on the 1972 match page. Botvinnik called this game \"the highest creative achievement of Fischer\". He resolved a drawish opposite-colored bishops endgame by sacrificing his bishop and trapping his own rook. \"Then five passed pawns struggled with the white rook. Nothing similar had been seen before in chess.\"\n[…]\nBibliography of works on Bobby Fischer\n[…]\nBobby Fischer player profile and games at Chessgames.com\n[…]\nBobby Fischer Live Radio Interviews (1999–2006)\n[…]\nArticles about Bobby Fischer by Edward Winter"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bobby_Fischer",
        "situacao": "ok",
        "texto": "Robert James \"Bobby\" Fischer (Chicago, 9 de março de 1943 – Reykjavík, 17 de janeiro de 2008) foi um grande mestre de xadrez americano, naturalizado islandês, e décimo primeiro campeão mundial de xadrez, sendo o primeiro e único campeão nascido nos Estados Unidos.\n[…]\nEm 1972, venceu o Campeonato Mundial de Xadrez ao derrotar o soviético Boris Spassky em um match disputado em Reykjavík, Islândia, considerado um confronto símbolo da Guerra Fria, o \"Match do Século\" atraiu um interesse midiático maior que qualquer outra partida de xadrez já disputada. Em 1975, Fischer recusou-se a defender seu título ao não chegar a um acordo com a Federação Internacional de Xadrez (FIDE) em relação ao modelo de disputa da partida.\n[…]\nA desistência tornou Anatoly Karpov campeão do Torneio de Candidatos de 1974, o novo campeão mundial.\n[…]\nApós esses acontecimentos, passou a viver no exílio. Em 2004, foi preso no Japão por utilizar-se de um passaporte que havia sido revogado pelo governo dos Estados Unidos. O parlamento islandês o ofereceu passaporte e cidadania islandeses, permitindo-o viver no país até sua morte em 2008.\n[…]\nFischer foi preso no Japão e lutou contra sua extradição para os Estados Unidos por quase um ano. A Islândia ofereceu cidadania a Fischer, tendo ele aceitado. Livre então pela cidadania islandesa, Fischer seguiu viagem para a Islândia chegando no dia 23 de março de 2005.\n[…]\nBobby Fischer morreu em 17 de janeiro de 2008, na Islândia, aos 64 anos.\n[…]\nFischer fez parte da equipe dos EUA em quatro edições das Olimpíadas de Xadrez.\n[…]\nXadrez de Fischer\n[…]\nCampeonato Mundial de Xadrez de 1972\n[…]\nBobby Fischer Against the World\n[…]\nSearching for Bobby Fischer\n[…]\n«Bobby-Fischer.net» (em inglês)\n[…]\n«Relato de Nigel Short sobre possíveis jogos contra Bobby Fischer no ICC» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Pôquer",
      "descricao": "Jogo de cartas de apostas e blefe em que vence a melhor combinação de cinco cartas."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "No século dezenove, o pôquer se espalhou pelos Estados Unidos a bordo de barcos a vapor que navegavam por qual rio?",
    "resposta": "Mississippi",
    "fonte": [
      "https://en.wikipedia.org/wiki/Poker"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Poker",
        "situacao": "ok",
        "texto": "Poker is a family of comparing card games in which players wager over which hand is best according to that specific game's rules. It is played worldwide, with varying rules in different places. While the earliest known form of the game was played with just 20 cards, today it is usually played with a standard 52-card deck, although in countries where short packs are common, it may be played with 32\n[…]\nWhat is certain, however, is that poker was popularized in the American South in the early 19th century, as gambling riverboats in the Mississippi River and around New Orleans during the 1830s helped spread the game. One early description of poker that was played on a steamboat in 1829 is recorded by the English actor, Joe Cowell. The game was played with twenty cards ranking from Ace (high) to Ten (low).\n[…]\nCommunity card poker\n[…]\nConsequently, their ability to rapidly calculate and retrieve millions of possible move combinations is generally superior to the human capacity for abstract tactical thinking. In poker, however, the computer does not know the other players' cards, and therefore has to play a game of imperfect information.\n[…]\nA variety of computer poker players have been developed by researchers at the University of Alberta, Carnegie Mellon University, and the University of Auckland amongst others.\n[…]\nIn a January 2015 article published in Science, a group of researchers mostly from the University of Alberta announced that they \"essentially weakly solved\" heads-up limit Texas Hold 'em with their development of their Cepheus poker bot.\n[…]\nThe authors claimed that Cepheus would lose at most 0.001 big blinds per game on average against its worst-case opponent, and the strategy is thus so \"close to optimal\" that \"it can't be beaten with statistical significance within a lifetime of human poker playing.\"\n[…]\nGlossary of poker terms\n[…]\nList of poker hands\n[…]\nOnline poker\n[…]\nOutline of poker\n[…]\nUnderground poker"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/P%C3%B4quer",
        "situacao": "ok",
        "texto": "Pôquer (português brasileiro) ou póquer (português europeu) (do inglês poker) é um jogo de cartas jogado por duas ou mais pessoas muito comum em casinos.\n[…]\nEste jogo, popular na região de Mississippi, foi batizado por Green como pôquer, todavia, não estão claras as razões pelas quais ele usou este vocábulo.\n[…]\nOutros historiadores do jogo dizem que sua origem está em uma palavra francesa, “poque”, que era o nome de um jogo desse país. Segundo essa teoria, o jogo foi levado da França para os Estados Unidos através de um grupo de colonizadores franceses que teriam fundado a cidade de Nova Orleans. A partir de então, se difundiria ao longo da rota do Rio Mississippi durante o século XVIII e se popularizaria nos Estados Unidos durante o século XIX, quando o país começou sua expansão até o oeste.\n[…]\nNo início do século XX, o pôquer é declarado ilegal no estado de Nevada, nos Estados Unidos. Entretanto, devido ao fato do pôquer ser considerado mais um jogo de habilidade do que de azar, as autoridades da Califórnia determinaram que as leis contra os jogos de azar não poderiam ser aplicadas a ele. Esta decisão, permitiu ao jogo se desenvolver e ganhar popularidade, e posteriormente o estado de Nevada acaba abolindo a sua proibição, legalizando-o em seus cassinos no ano de 1931.\n[…]\nStrip poker é uma variante do jogo de cartas pôquer, na qual uma das regras requer que os jogadores removam peças de roupa como consequência negativa das perdas de jogadas. As peças de roupa podem, também, ser usadas como aposta, substituindo as fichas.[carece de fontes]?\n[…]\nStrip poker\n[…]\nWorld Series of Poker\n[…]\nBrazilian Series of Poker\n[…]\nEuropean Poker Tour\n[…]\nWorld Poker Tour",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Jenga",
      "descricao": "Jogo de habilidade em que se retiram blocos de madeira de uma torre e se recolocam no topo sem derrubá-la."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Quantos blocos de madeira formam uma torre de Jenga completa, pronta para começar o jogo?",
    "resposta": "Cinquenta e quatro",
    "distratores": [
      "Quarenta e oito",
      "Sessenta",
      "Trinta e seis"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Jenga"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Jenga",
        "situacao": "ok",
        "texto": "Jenga is a game of physical skill created by British board game designer and author Leslie Scott and marketed by Hasbro. The name comes from the Swahili word \"kujenga\" which means 'to build or construct'. Players take turns removing one block at a time from a tower constructed of 54 blocks. Each block removed is then placed on top of the tower, creating a progressively more unstable structure. The\n[…]\nCasino Jenga: Las Vegas Edition employed roulette-style game play, featuring a felt game board, betting chips, and additional rules.\n[…]\nHello Kitty Jenga, Transformers Jenga, Tarzan Jenga, Tim Burton's The Nightmare Before Christmas Jenga, Donkey Kong Jenga, Bob's Burgers Jenga, National Parks Jenga, Jenga Ocean, The Walking Dead Jenga, Super Mario Jenga, Fortnite Jenga, Godzilla Jenga, Rick and Morty Jenga, Onyx Jenga, and Harry Potter Jenga are some of the licensed variations of Jenga.\n[…]\nJenga XXL and Jenga Giant are licensed giant Jenga games manufactured and distributed by Art's Ideas. There are Jenga Giant variations which can reach 5 feet (150 cm) or higher in play, with very similar rules. Jenga XXL starts at over 4 feet (1.2 m) high and can reach 8 feet (2.4 m) or higher in play. Rules are the same as in classic Jenga, except that players may use two hands to move the eighteen-inch-long blocks.\n[…]\nJenga Pass Challenge includes a handheld platform that the game is played on. Players remove a block while holding the platform, then pass the platform to the next player. This variant includes only half the number of blocks (27), which means the tower starts at 9 levels high instead of 18.\n[…]\n56 Leonard Street, nicknamed \"the Jenga Building\"\n[…]\nDread, a role-playing game that uses a Jenga tower\n[…]\nJenga Giant\n[…]\nThe Jenga Chair (Archived 2016-12-20 at the Wayback Machine) in the Bröhan Museum\n[…]\nThe Jenga House\n[…]\nJenga at the V&A Museum of Childhood"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jenga",
        "situacao": "ok",
        "texto": "Jenga é um jogo de habilidade física, criado por Leslie Scott, promovido pela Pokonobe Associates e comercializado pela Milton Bradley Company, uma divisão da Hasbro, nos Estados Unidos, e no Brasil. Os jogadores se revezam para remover blocos de uma torre, equilibrando-os em cima, criando uma estrutura cada vez maior e mais instável à medida que o jogo progride. A palavra \"jenga\" é a forma impera\n[…]\nJenga foi criado por Leslie Scott  baseado em um jogo desenvolvido por sua família, no início dos anos 1970, utilizando blocos de madeira para crianças comprados pela família de um serralheiro em Takoradi, Gana. Scott fabricou e lançou o jogo na London Toy Fair em 1983, vendendo-o através de sua própria empresa, Leslie Scott Associates, até a Irwin Toy, no Canadá, e a Milton Bradley (Hasbro), nos Estados Unidos, adquirirem as licenças para produzir Jenga, em 1986.\n[…]\nexistem blocos de três cores: vermelho, verde e \"natural\" (cor de madeira), em vez de apenas a cor natural de Jenga. O jogo é o mesmo, mas se você mover um bloco vermelho no seu jogo, você deve completar o desafio impresso sobre ele antes de empilhar o bloco em cima. Se você mover um bloco verde, você tem que responder, com sinceridade, à pergunta impressa no bloco antes de empilhá-lo. Os blocos de cor natural não tem nada impresso sobre eles e são jogados como em Jenga.\n[…]\nJenga Xtreme utiliza blocos com um corte chanfrado (em forma de ) em vez de blocos de corte reto.\n[…]\nUno Stacko é uma combinação de  Jenga com Uno. Os blocos são vermelhos, azuis, verdes ou amarelos, e numerados de um a quatro. Nas versões iniciais, cada jogador rola um dado, com quatro faces coloridas e numeradas de um a quatro; em seguida, puxa um bloco com a mesma cor ou número. Versões posteriores tiraram o dado, e cada jogador tem de puxar um bloco da mesma cor ou número do bloco puxado pelo jogador anterior.\n[…]\nJenga - V&A Museum of Childhood",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Cara a Cara",
      "descricao": "Jogo de tabuleiro de adivinhar o personagem do adversário com perguntas de sim ou não, conhecido em inglês como Guess Who."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Na versão clássica do Cara a Cara, quantos personagens aparecem no tabuleiro de cada jogador?",
    "resposta": "Vinte e quatro",
    "fonte": [
      "https://en.wikipedia.org/wiki/Guess_Who%3F"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Guess_Who%3F",
        "situacao": "ok",
        "texto": "Guess Who? is a two-player board game in which players each guess the identity of the other's chosen character. The game was developed by Israeli game inventors Ora and Theo Coster, the founders of Theora Design. It was first released in Dutch in 1979 under the name Wie is het?. Milton Bradley then produced the game in the United Kingdom, and it was brought to the United States in 1982. It is now \n[…]\n\"Does your person wear a hat?\"\n[…]\n\"Does your person wear glasses?\"\n[…]\n\"Is your person a man?\"\n[…]\nGuess Who? has been used in educational contexts, including the development of deductive reasoning skills. In addition, the game can be used for a wide range of speech and language development goals, including:\n[…]\nSome have noted a bias toward white and male characters in Guess Who?. In 2012, a freelance journalist wrote to Hasbro on behalf of her six-year-old daughter, asking why there were only five female characters to choose from, as opposed to nineteen male characters.\n[…]\nThe original version of Guess Who? featured only one non-white character—Anne, a black woman who was redrawn in a subsequent edition as white. More recently, Hasbro has redesigned the board to feature a more racially diverse set of people.\n[…]\nGuess Who? at BoardGameGeek"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Paciência do Windows",
      "descricao": "Versão digital do jogo de cartas Paciência incluída pela Microsoft no Windows a partir de 1990."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Na Paciência do Windows, quantas colunas de cartas são montadas na mesa no começo de cada partida?",
    "resposta": "Sete",
    "fonte": [
      "https://en.wikipedia.org/wiki/Klondike_(solitaire)",
      "https://en.wikipedia.org/wiki/Microsoft_Solitaire"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Klondike_(solitaire)",
        "situacao": "ok",
        "texto": "Klondike is a card game for one player and the best known and most popular version of the solitaire family, as well as one of the most challenging in widespread play. It has spawned numerous variants including Batsford, Easthaven, King Albert, Thumb and Pouch, Somerset or Usk and Whitehead, as well as the American variants of the games, Agnes and Westcliff.\n[…]\nKlondike's inclusion in Microsoft Windows in the 1990s in the form of Microsoft Solitaire contributed significantly to its current popularity. It is considered the most popular version of solitaire.\n[…]\nKlondike has been turned into a two-player game under the name Double Solitaire. Players have their own packs and may not play to each other's tableaus but share their foundations. Players take turns until they are unable to play a card from their talons. The first player to play all 52 cards is the winner. Informally, \"Double\" Solitaire can be played as a party game with more than 2 players.\n[…]\nA software version of Klondike named simply Solitaire has been a regular inclusion in the Microsoft Windows operating system, beginning with Windows 3.0 in 1990. Initially Microsoft included the game as both a diversion and a teaching tool: for many users, Solitaire was their first introduction to using a computer mouse. Microsoft officials stated in 1994 that \"for years, Solitaire was the most-used application for Windows\".\n[…]\nIn 1981, the Atari Program Exchange published Mark Reid's implementation of Klondike for Atari 8-bit computers, simply titled Solitaire.\n[…]\nScoring in the Microsoft Windows Solitaire version of Klondike is as follows:\n[…]\nList of solitaires\n[…]\nGlossary of solitaire\n[…]\nSolitaire\n[…]\nCoops, Helen Leslie (1939). 100 Games of Solitaire. Whitman. 128 pp.\n[…]\nMorehead, Albert and Geoffrey Mott-Smith (2001). The Complete Book of Solitaire and Patience. Foulsham, Slough."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Microsoft_Solitaire",
        "situacao": "ok",
        "texto": "Solitaire is a computer game included with Microsoft Windows, based on a card game of the same name, also known as Klondike. Its original version was programmed by Wes Cherry, and the cards were designed by Susan Kare. It has been called the most prolific PC game of all time due to its inclusion in Windows.\n[…]\nAccording to Microsoft telemetry, Solitaire was among the three most-used Windows programs and FreeCell was seventh, ahead of Word and Microsoft Excel. Lost business productivity by employees playing Solitaire has become a common concern since it became standard on Microsoft Windows. In 2006, a New York City worker was fired after Mayor Michael Bloomberg saw the Solitaire game on the man's office computer.\n[…]\nIn October 2012, along with the release of the Windows 8 operating system, Microsoft released a new version of Solitaire called Microsoft Solitaire Collection. This version, game designed by Microsoft Studios, with visual design led by William Bredbeck, and developed by Arkadium, is advertisement supported and introduced many new features to the game.\n[…]\nIn 2019, The Strong National Museum of Play inducted Microsoft Solitaire to its World Video Game Hall of Fame.\n[…]\nUntil the Windows XP version, the card backs were the original works designed by Susan Kare, and many were animated.\n[…]\nOn Windows 8, Windows 10, Windows 11, Windows Phone, Android and iOS, the game is issued as Microsoft Solitaire Collection, where in addition to Klondike four other game modes were featured, Spider, FreeCell (both of which had been previously featured in versions of Windows as Microsoft Spider Solitaire and Microsoft FreeCell), Pyramid, and TriPeaks (both of which were previously part of the Microsoft Entertainment Pack series, the former under the name Tut's Tomb).\n[…]\nList of games included with Windows"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Klondike_%28jogo%29",
        "situacao": "ok",
        "texto": "Klondike (América do Norte) ou Canfield (tradicional) é um jogo eletrônico de paciência (jogo de cartas). Nos EUA e no Canadá, Klondike é o jogo de cartas de paciência mais conhecido, a ponto de o termo \"paciência\", na ausência de qualificadores adicionais, normalmente se referir a Klondike. Igualmente no Reino Unido, costuma ser conhecido como \"paciência\". Enquanto isso, em outros lugares o jogo \n[…]\nA primeira pilha e a mais à esquerda contém uma única carta virada para cima, a segunda pilha contém duas cartas (uma virada para baixo, uma virada para cima), a terceira contém três (duas viradas para baixo, uma virada para cima) e assim por diante, até a sétima pilha que contém sete cartas. cartões (seis virados para baixo, um virado para cima). A carta mais acima de cada pilha é virada para cima.\n[…]\nA pontuação padrão no jogo Windows Solitaire é determinada da seguinte maneira:\n[…]\nEm Easthaven (também conhecido como Ases Up ), vinte e uma cartas são distribuídas em sete pilhas de três, duas com a face para baixo e uma com a face para cima. Um espaço neste jogo só pode ser preenchido por um rei ou qualquer sequência que comece com um rei (embora eles possam simplificar a regra e colocar qualquer carta ou sequência em um espaço vazio, como ocorre em várias regras), e quando uma jogada fica parado, sete novas cartas são distribuídas para o quadro, uma no topo de cada pilha.\n[…]\nNo Nine Across, nove colunas de cartas são distribuídas, em oposição às sete da Klondike convencional. O jogador pode escolher quais cartas formarão as fundações; se um ou mais oitos são expostos, por exemplo, o jogador pode decidir construir sobre oitos, e as pilhas são acumuladas 8-9-10-JQK-Ace-2-3-4-5-6-7. Se oito são construídos, setes preenchem espaços e assim por diante. O estoque é tratado uma a uma quantas vezes for necessário.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Turochamp",
      "descricao": "Programa de xadrez escrito em 1948 por Alan Turing e David Champernowne, antes de existir computador capaz de executá-lo."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1948, antes de existir computador capaz de rodá-lo, que matemático britânico escreveu com um colega um dos primeiros programas de xadrez?",
    "resposta": "Alan Turing",
    "fonte": [
      "https://en.wikipedia.org/wiki/Turochamp"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Turochamp",
        "situacao": "ok",
        "texto": "Turochamp is a chess program developed by Alan Turing and David Champernowne in 1948. It was created as part of research by the pair into computer science and machine learning. Turochamp is capable of playing an entire chess game against a human player at a low level of play by calculating all potential moves and all potential player moves in response, as well as some further moves it deems consid\n[…]\nAlan Turing was an English mathematician, computer scientist,  logician, cryptanalyst, philosopher and theoretical biologist. Turing was highly influential in the development of theoretical computer science, providing a formalisation of the concepts of algorithm and computation with the Turing machine, which can be considered a model of a general-purpose computer. Turing is widely considered to be the father of theoretical computer science and artificial intelligence.\n[…]\nIn the late summer of 1948 Turing and Champernowne, then his colleague at King's College, Cambridge, devised a system of theoretical rules to determine the next move of a chess game. They designed a program that would enact an algorithm that would follow these rules, though the program was too complex to able to be run on the ACE or any other computer of the time. The program was named Turochamp, a combination of their surnames. It is sometimes misreported as \"Turbochamp\".\n[…]\nThe resulting recreation was presented at the Alan Turing Centenary Conference on 22–25 June 2012, in a game with chess grandmaster and former world champion Garry Kasparov. Kasparov won the game in 16 moves, and complimented the program for its place in history and the \"exceptional achievement\" of developing a working computer chess program without being able to ever run it on a computer.\n[…]\nList of things named after Alan Turing\n[…]\nAlan Turing vs Alick Glennie (1952) \"Turing Test\" at Chessgames.com"
      }
    ]
  }
]

---

# MANIFESTO

# Manifesto de Perguntas — Mestre2

> **Versão preliminar 0.44 — 2026-10-02**
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
