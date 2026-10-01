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
      "nome": "Xeque-mate",
      "descricao": "Lance do xadrez em que o rei está atacado e não tem como escapar, encerrando a partida."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A expressão xeque-mate vem do persa e fala do rei. Literalmente, em que situação ela diz que o rei está?",
    "resposta": "Indefeso (popularmente, morto)",
    "fonte": [
      "https://en.wikipedia.org/wiki/Checkmate",
      "https://pt.wikipedia.org/wiki/Xeque-mate"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Checkmate",
        "situacao": "ok",
        "texto": "Checkmate (often shortened to mate) is any game position in chess and other chess-like games in which a player's king is in check (threatened with capture) and there is no possible escape. Checkmating the opponent wins the game.\n[…]\nWith the side with the rook to move, checkmate can be forced in at most sixteen moves from any starting position. Again, see Wikibooks – Chess/The Endgame for a demonstration of how the king and rook versus king mate is achieved.\n[…]\nThe two bishops mate is the checkmate of a bare king by the opponent's two bishops and king.\n[…]\nA back-rank checkmate is a checkmate delivered by a rook or queen along a back rank (that is, the row on which the pieces [not pawns] stand at the start of the game) in which the mated king is unable to move up the board because the king is blocked by friendly pieces (usually pawns) on the second rank. An example of a back-rank checkmate is shown in the diagram. It is also known as the corridor mate.\n[…]\nThe scholar's mate (also known as the four-move checkmate) is the checkmate achieved by the moves:\n[…]\nThe moves might be played in a different order or in slight variation, but the basic idea is the same: the queen and bishop combine in a simple mating attack on f7 (or f2 if Black is performing the mate). There are also other ways to checkmate in four moves.\n[…]\nThe fool's mate, also known as the two-move checkmate, is the quickest possible checkmate. A prime example consists of the moves:\n[…]\nA smothered mate is a checkmate delivered by a knight in which the mated king is unable to move because it is surrounded (or smothered) by its own pieces.\n[…]\nThis checkmate occurred in Jesús Nogueiras–Maikel Gongora, 2001 Cuban Championship (see diagram), which proceeded:"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Xeque-mate",
        "situacao": "ok",
        "texto": "Xeque-mate (em persa شاه مات‎, significando rei se render), ou simplesmente mate, é uma expressão usada no enxadrismo para designar o lance que põe fim à partida, quando o Rei atacado por uma ou mais peças adversárias não pode movimentar-se para outra casa, tomar a peça que o ameaça ou bloquear o ataque com outra peça.\n[…]\nA maioria dos termos de xadrez, usados pelos europeus, tem origem persa. Shah, que quer dizer rei, deu origem a check e chess em inglês, echec e echecs em francês, scacco em italiano e xaque em espanhol. Shâh-mât significa o rei está morto.\n[…]\nA expressão Shâh-mât não é usada quando o adversário é seu soberano, quando a expressão usada é Shâh-em!, ou Ó meu rei! Houve um rei da Pérsia que proibiu o jogo de xadrez, por causa da expressão shâh-mât. Seu sucessor voltou a permitir o jogo, mas ordenou que a expressão usada fosse Nefs-mât, ou a pessoa está morta.\n[…]\nOs mates básicos são aqueles em que um lado (aqui por convenção, as pretas) tem apenas o Rei e o outro lado tem um conjunto mínimo de peças para dar o mate.\n[…]\nPara a execução desse tipo de mate, o Rei precisa apoiar-se na dama, não para forçar o movimento do Rei adversário para uma das bordas, mas para efetuar o mate.\n[…]\nPara a execução desse tipo de mate, é necessário bloquear o avanço do Rei adversário para o centro do tabuleiro, usando o Rei. Para então dar xeque-mate com a Torre.\n[…]\nPara executar esse mate, deve-se forçar o Rei adversário a mover-se para um dos cantos do tabuleiro, e o mate será efetuado com o Bispo respectivo a casa (clara ou escura) que ocupa o canto para o qual o Rei adversário irá se situar.\n[…]\nEsse mate é executado em casa angular da mesma cor do rei adversário ou em uma das duas casas adjacentes.\n[…]\nMate Pastor\n[…]\nXeque"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Bispo (xadrez)",
      "descricao": "Peça do xadrez que se move na diagonal, chamada al-fil no xadrez árabe."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "No xadrez árabe, a peça que hoje chamamos de bispo se chamava al-fil. Que animal essa palavra designa?",
    "resposta": "Elefante",
    "fonte": [
      "https://en.wikipedia.org/wiki/Bishop_(chess)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bishop_(chess)",
        "situacao": "ok",
        "texto": "The bishop (♗, ♝) is a piece in the game of chess. It moves and captures along diagonals without jumping over interfering pieces. Each player begins the game with two bishops. The starting squares are c1 and f1 for White's bishops, and c8 and f8 for Black's bishops.\n[…]\nA king and two bishops on opposite-colored squares, however, can force mate.\n[…]\nThe bishop is the third-tallest piece in chess, often portrayed as the advisor in chess as indicated by its placement next to the king and queen. The design is characterized by a slanted top with a distinctive slit, or \"mitre\", which represents a stylized version of a mitre hat worn by a bishop. This slit is a key feature for distinguishing it from a pawn.\n[…]\nThe bishop's predecessor in medieval chess, shatranj (originally chaturanga), was the alfil, meaning \"elephant\", which could leap two squares along any diagonal, and could jump over an intervening piece. As a consequence, each alfil was restricted to eight squares, and no alfil could attack another. The modern bishop first appeared shortly after 1200 in Courier chess.\n[…]\nIn Bulgarian the bishop is called \"officer\" (Bulgarian: офицер), which is also the piece's alternative name in Russian; it is also called αξιωματικός (axiomatikos) in Greek, афіцэр (afitser) in Belarusian and oficeri in Albanian.\n[…]\nUnicode defines three codepoints for a bishop:\n[…]\n♗ U+2657 White Chess Bishop\n[…]\n♝ U+265D Black Chess Bishop\n[…]\n🨃 U+1FA03 Neutral Chess Bishop\n[…]\nHooper, David; Whyld, Kenneth (1996) [First pub. 1992], \"bishop\", The Oxford Companion to Chess (2nd ed.), Oxford University Press, p. 41, ISBN 0-19-280049-3\n[…]\nMednis, Edmar (1990), Practical Bishop Endings, Chess Enterprises, ISBN 0-945470-04-5\n[…]\nPiececlopedia: Bishop by Fergus Duniho and Hans Bodlaender, The Chess Variant Pages"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bispo_%28xadrez%29",
        "situacao": "ok",
        "texto": "O Bispo é uma peça menor do xadrez ocidental de valor aproximado de três peões. Movimenta-se em diagonal, não podendo pular peças intervenientes, e captura tomando o lugar ocupado pela peça adversária. Devido às características de seu movimento tem a deficiência da fraqueza da cor onde seu movimento fica limitado à cor da casa de onde inicia a partida.\n[…]\nInicialmente, o bispo não fazia parte do Chaturanga e de seu sucessor árabe Xatranje - jogos de tabuleiro orientais que teriam originado o xadrez - tendo sido incluído no jogo somente por volta do século XII, já na Europa. Seu antecessor, o alfil tinha seu nome ligado a palavra Elefante e os historiadores indicam que a mudança do nome decorreu da influência da Igreja Católica na Idade Média e da semelhança da peça abstrata árabe com a mitra utilizada pelos bispos na época.\n[…]\nO predecessor do bispo no Xatranje era o Alfil ou Pīl, que podia se mover duas casas em diagonal, pulando a primeira mesmo quando esta estava ocupada. Como consequência, cada Alfil ficava restrito a oito casas do tabuleiro e não podia atacar o Alfil adversário. O Bispo moderno surgiu primeiro por volta do século XII no Xadrez Courier. Uma peça com este movimento, chamada cocatriz ou crocodilo era parte do Grande Acedrez no livro de jogo compilado em 1283 pelo Rei Afonso X de Castela.\n[…]\nA origem do nome é obscura. Acredita-se que tenha sido provocada pelo formato abstrato do Pīl, com duas protuberâncias no topo, que originalmente simbolizavam as presas de um elefante, fizesse lembrar a mitra dos bispos. A tradução do nome da peça a partir do árabe, diferente das outras peças, não foi homogênea. Na Espanha, influenciada diretamente pelos árabes, se reteve o nome original \"Alfil\", enquanto na Itália foi modificado para Alfiere, com o significado de porta-estandarte.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Copas (naipe)",
      "descricao": "Naipe vermelho do baralho representado por corações, cujo nome em português vem do naipe de taças do baralho latino."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "No Brasil, os naipes herdaram os nomes do antigo baralho latino. Nesse baralho, o naipe de copas era desenhado como qual objeto?",
    "resposta": "Taças",
    "fonte": [
      "https://en.wikipedia.org/wiki/Suit_(cards)",
      "https://pt.wikipedia.org/wiki/Naipe"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Suit_(cards)",
        "situacao": "ok",
        "texto": "In playing cards, a suit is one of the categories into which the cards of a deck are divided. Most often, each card bears one of several pips (symbols) showing to which suit it belongs; the suit may alternatively or additionally be indicated by the color printed on the card. The rank for each card is determined by the number of pips on it, except on face cards.\n[…]\nRank is used to indicate the major (spades and hearts) versus minor (diamonds and clubs) suits.\n[…]\nShape is used to denote the pointed (diamonds and spades, which visually have a sharp point uppermost) versus rounded (hearts and clubs) suits. This is used in bridge as a mnemonic.\n[…]\nSome decks, while using the French suits, give each suit a different color to make the suits more distinct from each other. In bridge, such decks are known as no-revoke decks, and the most common colors are black spades, red hearts, blue diamonds and green clubs, although in the past the diamond suit usually appeared in a golden yellow-orange.\n[…]\nA pack occasionally used in Germany uses green spades (comparable to leaves), red hearts, yellow diamonds (comparable to bells) and black clubs (comparable to acorns). This is a compromise deck devised to allow players from East Germany (who used German suits) and West Germany (who adopted the French suits) to be comfortable with the same deck when playing tournament Skat after the German reunification.\n[…]\nTSR Hobbies' DragonLance Fifth Age uses a 9-suited deck, numbered 1-9 in the suits of Shields, Arrows, Helms, Swords, Crescent Moons, Orbs, Hearts, and Crowns, each tied to one of the 8 attributes, and one suit, Dragons, numbered 1-10. Trump is set by the action's governing attribute, and playing trump grants adding a card drawn from the deck to the total.\n[…]\nHearts (♥) identified the 502nd PIR; currently worn by the 2nd Brigade Combat Team."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Naipe",
        "situacao": "ok",
        "texto": "Naipe é cada \"família\" ou tipo das cartas. Cada naipe traz todos os números de 2 a 10, o Ás (que representa ora 1, ora 14), Valete, Dama e Rei. As 52 cartas representam as 52 semanas do ano. Os 4 naipes representam as 4 estações do ano. As 13 cartas de cada naipe representam as 13 semanas que compõem cada estação (carece de fontes).\n[…]\nOs principais sistemas de naipes são o latino, o germânico e o francês.\n[…]\nOs naipes latinos se distinguem entre si pelo formato dos símbolos: há os naipes longos (Paus e Espadas) e os naipes curtos (Ouros e Copas).\n[…]\nO baralho espanhol, ou baraja, é adaptado do Ganjifa vindo do Egito no século XIV (tais cartas supostamente foram criadas na Pérsia, e depois se popularizaram na Índia, mas os registros escritos mais antigos vêm do país africano). As cartas representam a sociedade da época em que foi criado. Os nomes dos naipes são:\n[…]\nCopas - Pode ser traduzido do espanhol como Taças e é exatamente esse o símbolo usado, representa os oratores (religiosos, ou seja, o clero).\n[…]\nO baralho português originou-se simultaneamente com os espanhol, e os naipes, pelo menos a partir do século XV, apresentavam características próximas mas muito distintas (Rei-Cavaleiro-Dama, Ases com figuras de dragão, figuras em algumas cartas numéricas). Foram objeto de monopólio real (Real Fábrica das Cartas de Jogar) e tiveram uma grande evolução na iconografia mas extinguiram-se no fim do século XIX.\n[…]\nA seguir eis uma lista dos nomes mais comuns em cada país dados aos naipes franceses, apesar de haver jogos específicos em que o naipe é chamado e/ou desenhado de outra forma.\n[…]\nAs funções que utilizam os bytes de 0000 0011 (3) a 0000 0110 (6) podem ser representadas (ou digitadas) por naipes de baralho, utilizando-se o teclado numérico à direita do teclado.\n[…]\nBaralho latino (espanhol, italiano, português)\n[…]\nBaralho germânico"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Truco",
      "descricao": "Jogo de cartas de blefe, muito popular no Brasil, jogado com baralho sem oitos, noves e dez."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "No truco mineiro, a carta mais forte do jogo, o quatro de paus, é conhecida por qual apelido?",
    "resposta": "Zap",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Truco"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Truco",
        "situacao": "ok",
        "texto": "Truco é um jogo de cartas surgido no Reino de Valência (atual Comunidade Valenciana, Espanha) praticado em diversos locais da América do Sul, algumas regiões da Espanha (Valência e Ilhas Baleares) e Itália. É um jogo de vazas jogado com o baralho espanhol, por dois, quatro ou seis jogadores, divididos em dois lados opostos. Na Região Sudeste do Brasil é jogado com o baralho francês, enquanto na Re\n[…]\nA forma mais comum do jogo é a versão com quatro jogadores, em que há duas equipes de dois jogadores, que se sentam em frente um ao outro. Para seis jogadores, há duas equipes de três jogadores.\n[…]\nO jogo é disputado em mãos. Cada mão vale inicialmente 1 ponto, e ganha o jogo a dupla, trio, etc. que fizer 12 pontos. A mão é dividida em três rodadas (ou vazas). Em cada rodada cada jogador coloca uma de suas cartas na mesa, e o jogador com a carta mais forte vence a rodada. Quem ganhar duas dessas rodadas ganha a mão e marca 1 ponto, e uma nova mão se inicia.\n[…]\nO jogo é disputado em mãos. Cada mão vale inicialmente 2 pontos, e ganha o jogo a dupla, trio, etc. que fizer 12 pontos. A mão é dividida em três rodadas (ou vazas). Em cada rodada cada jogador coloca uma de suas cartas na mesa, e o jogador com a carta mais forte vence a rodada. Quem ganhar duas dessas rodadas ganha a mão e marca 2 pontos, e uma nova mão se inicia.\n[…]\nA qualquer hora o jogador pode pedir Truco. É o grande momento do jogo. O Truco é pedido para elevar a aposta a Quatro tentos. Ao ser trucada, a dupla adversária tem direito a três ações:\n[…]\nFugir: a dupla que pediu queda leva o jogo.\n[…]\nTruco paulista ou ponta acima é um jogo de Vaza, variação do truco mineiro, e se diferencia desta pela manilha (trunfo), que varia a cada rodada. É jogada com o baralho francês de 52 cartas, removendo-se as cartas 8, 9 e 10 do baralho, como forma de obter as 40 cartas necessárias para jogar, conjunto conhecido como Baralho Espanhol."
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Ludo",
      "descricao": "Jogo de tabuleiro de corrida com dados e peões coloridos, derivado do pachisi indiano."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome do ludo, jogo de dados com peões coloridos, é uma forma de verbo em latim. Que frase curta essa palavra significa?",
    "resposta": "Eu jogo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ludo"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ludo",
        "situacao": "ok",
        "texto": "Ludo (; from Latin  ludo '[I] play') is a strategy-based board game for two to four players, in which the players race their four tokens from start to finish according to the rolls of a single die. Ludo shares characteristics with other cross-and-circle games from around the world; these types of games include the pre-Columbian Mesoamerican game Patolli, and the Indian game Pachisi. The game and i\n[…]\nLudo uses a cubic die with a dice cup and was marketed as \"Ludo\" in England in 1896 by Alfred Coller. Coller eventually patented the game and sold it as \"Royal Ludo\". The board game Uckers, popular in the Royal Navy, is based on Ludo.\n[…]\nLudo exists under different names and brands, and in various game derivations:\n[…]\nHasbro has multiple brand names for ludo-like games from its acquisitions including:\n[…]\nAeroplane chess: A Chinese cross-and-circle board game derived from Ludo, it uses aeroplanes as tokens, with additional features such as coloured cells, jumps, and shortcuts.\n[…]\nLudo played in the Indian subcontinent features a safe square in each quadrant, normally the fourth square from the top in the rightmost column. These squares are usually marked with a star. In India Ludo is often played with two dice, and rolling one on a die also allows a token to enter active play. Thus if a player rolls a one and a six, they may get a token out and move it six steps.\n[…]\nThe Indian Ludo is based on the ancient game Pachisi. It was first played on cloth boards using cowrie shells and small tokens. Over time, it changed into a simpler version with a square board and a single die. This version is now played in homes across the country.\n[…]\nThe game can be played digitally through Indian mobile apps like Zupee Ludo and Ludo King, and on the web."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ludo",
        "situacao": "ok",
        "texto": "Ludo (\"eu jogo\" em latim, e também nomeado popularmente no Brasil de \"Fubica\" ou \"Ranzinza\") é o nome utilizado em português para uma versão do jogo indiano Pachisi. É um jogo de tabuleiro e corrida para dois a quatro jogadores.\n[…]\nO Pachisi foi criado na Índia no século VI d.C. Posteriormente, ele foi modificado para ser jogado com um dado, em vez de búzios, e patenteado como \"Ludo\" na Inglaterra em 1896. Antes da criação do jogo para dispositivos, era muito jogado em várias partes do mundo.\n[…]\nO objetivo do jogo é ser o primeiro que, partindo de uma casa de origem, chega com quatro peões à casa final. Para isso, deve-se dar a volta inteira no tabuleiro e chegar antes dos adversários.\n[…]\nCada jogador por sua vez lança um dado e faz avançar um dos seus peões em jogo o número de casas indicado. O seis permite colocar em jogo um peão que esteja na casa inicial ou fazer avançar um peão seis casas, e ainda um novo lançamento de dados. O número um também permite que o jogador tire o peão, mas é só o seis que permite o jogador a lançar o dado novamente.\n[…]\nQuando dois peões de uma mesma cor se encontram em uma mesma casa, forma-se uma torre, impedindo outro peão de ocupar esta casa. Só poderá comer a torre com outra torre. Dois peões somente poderão caminhar como torre (ou seja, ambos juntos) caso haja uma torre no meio do caminho para ser \"comida\" uma vez que somente uma torre poderá comer outra, mandando os dois peões para casa inicial.\n[…]\nExistem quatro peões ou cavalos de cada cor (azul, verde, amarelo e vermelho) o tabuleiro tem a casa de saída logo após a parte final, como o peão (cavalo) não pode retroceder, é necessário dar outra volta.\n[…]\nArtigo sobre Ludo no blog \"Átomo - idéias em fusão\"",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Pega-varetas",
      "descricao": "Jogo de habilidade em que se retiram varetas coloridas de um monte sem mexer nas outras, chamado Mikado na Europa."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Em boa parte da Europa, o pega-varetas se chama Mikado, nome da vareta mais valiosa. Quem era chamado de mikado?",
    "resposta": "O imperador do Japão",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pick-up_sticks",
      "https://en.wikipedia.org/wiki/Emperor_of_Japan"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pick-up_sticks",
        "situacao": "ok",
        "texto": "Pick-up sticks, pick-a-stick, jackstraws, jack straws, spillikins, spellicans, or fiddlesticks is a game of physical and mental skill in which a bundle of sticks, between 8 and 20 centimeters long, is dropped as a loose bunch onto a table top into a random pile. Each player, in turn, tries to remove a stick from the pile without disturbing any of the others. The object of the game is to pick up th\n[…]\nIn the 1800s, pick-up sticks were generally made from ivory or bone; modern sticks may be made of almost any material, such as wood, bamboo, straw, reed, rush, yarrow, or plastics.\n[…]\nThe indigenous Haida nation in North America play  a game similar to pick-up sticks with sticks made of plain maple wood decorated with abalone shell and copper.\n[…]\nIn a game of pick-up sticks, there are typically 30 or more sticks and at least two players. At the beginning of game play, the bundle of sticks is randomly distributed or dropped so the sticks end up in a tangled pile. The more tangled the pile, the more challenging the game. In some versions of the game any sticks not touching at least one other stick are removed. The first player (sometimes the youngest) attempts to remove a single stick at a time, without moving any other stick.\n[…]\nThe object of the game is for a player to pick up more sticks than any other players. In more complex games, different-colored sticks are worth different numbers of points, and the winner is the person with the highest score.\n[…]\nIn some versions of the game, the next player can opt to begin a turn by asking the player after that to pick up all the sticks and randomly remake the pile.\n[…]\nMikado is a pick-up-sticks game originating in Europe, played with a set of longer sticks which can measure between 17 and 20 centimetres (6.7 and 7.9 in), all having the same length. The game is named for the highest-scoring (blue) stick, the \"Mikado\" (Emperor of Japan)."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Emperor_of_Japan",
        "situacao": "ok",
        "texto": "The Emperor of Japan is the hereditary monarch and head of state of Japan. The emperor is defined by the Constitution of Japan as the symbol of the Japanese state and the unity of the Japanese people, his position deriving from \"the will of the people with whom resides sovereign power\". The Imperial Household Law governs the line of imperial succession.\n[…]\nIn English, the term mikado (御門 or 帝), literally meaning \"the honorable gate\" (i.e. the gate of the imperial palace, which indicates the person who lives in and possesses the palace; compare Sublime Porte, an old term for the Ottoman government), was once used (as in The Mikado, a 19th-century operetta), but this term is now obsolete."
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Peteca",
      "descricao": "Brinquedo brasileiro de origem indígena, com base pesada e penas, golpeado com a palma da mão."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "De origem tupi, a palavra peteca descreve a própria ação de quem brinca com ela. Que ação é essa?",
    "resposta": "Bater",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Peteca"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Peteca",
        "situacao": "ok",
        "texto": "Peteca (do verbo tupi petek, bater, espalmar) é o nome dado tanto a um esporte quanto ao artefato esportivo utilizado em sua prática, sendo ambos de origem indígena brasileira.\n[…]\nO nome \"peteca\" vem do verbo petek do tupi e significa \"esbofetear, golpear com a mão espalmada\", junto com um -a final, que é um sufixo substantivador. No tupi moderno, ou nheengatu, falado atualmente em regiões da Amazônia, o verbo petek ainda é bastante usado, sendo elemento de várias composições e verbos derivados.\n[…]\nEm 1936, o professor de esportes alemão Karlhans Krohn, durante um passeio por Copacabana, observou os jovens jogando peteca e a introduziu em seu país. Posteriormente, Heinz Karl Kraus tratou de juntar os inúmeros clubes alemães dentro de uma só federação, a Liga Alemã de Esportes (DTB).\n[…]\nA Federação Francesa de Peteca (FFP) foi criada em fevereiro de 1999 por Jean-François Impinna, um jogador de rugby.\n[…]\nEm agosto de 2001 foi realizado, na Estônia, o primeiro campeonato mundial de peteca, sendo realizado, neste mesmo país-sede, o segundo campeonato em 2006.\n[…]\nAtualmente, milhares de aficionados, de qualquer idade, dedicam horários diários para jogar peteca em clubes, escolas, nas praias, nos bosques, em quadras residenciais e nos igapós.\n[…]\nCBP - Confederação Brasileira de Peteca\n[…]\nFFP - Federation Française de Peteca (França)\n[…]\nUKPA - United Kingdom Peteca Association (Reino Unido)\n[…]\nFEMPE - Federação Mineira de Peteca\n[…]\nFEPAPE - Federação Paulista de Peteca\n[…]\nFEPPE - Federação Paranaense de Peteca\n[…]\nFEBRAPE - Federação Brasiliense de Peteca\n[…]\nFEGOPE - Federação Goiana de Peteca\n[…]\nFETOPE - Federação Tocantinense de Peteca"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Cluedo",
      "descricao": "Jogo de tabuleiro britânico de investigação de assassinato, lançado no Brasil como Detetive."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome Cluedo, jogo britânico de investigação que inspirou o Detetive, junta a palavra inglesa clue, pista, com o nome de qual outro jogo?",
    "resposta": "Ludo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Cluedo"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cluedo",
        "situacao": "ok",
        "texto": "Cluedo (), known as Clue in North America, is a murder mystery game for three to six players (depending on editions) that was devised in 1943 by British board game designer Anthony E. Pratt. The game was first manufactured by Waddingtons in the United Kingdom in 1949. Since then, it has been relaunched and updated several times, and it is currently owned and published by the American game and toy \n[…]\nPratt and his wife, Elva Pratt (1913–1990), who had helped design the game, presented it to Waddingtons' executive Norman Watson, who immediately purchased it and provided its trademark name of Cluedo (a play on \"clue\" and \"ludo\", the Latin word for \"I play\", as used for the name of \"Ludo\", a popular board game based on Pachisi).\n[…]\nAlthough the patent was granted in 1947, postwar shortages postponed the game's official United Kingdom launch until 1949. It was simultaneously licensed to Parker Brothers in the United States for publication, where it was renamed Clue, as the name \"Ludo\" was not widely known there, Pachisi-style games having been published under other names and brands, so the play on words would not have been generally understood.\n[…]\nIn Canada and the U.S., the game is known as Clue. It was retitled because the traditional British board game Ludo, on which the name is based, was less well known there than its American variant Parcheesi.\n[…]\nThe North American versions of Clue also replace the character \"Reverend Green\" from the original Cluedo with \"Mr. Green\". This is the only region to continue to make such a change. Minor changes include \"Miss Scarlett\" with her name spelled with one 't', the spanner being called a wrench, and the dagger being renamed a knife. In the 2016 U.S. edition, the knife was changed to a dagger. Until 2003, the lead piping was known as the lead pipe only in the North American edition.\n[…]\nList of international Cluedo/Clue editions at Cluedofan.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cluedo",
        "situacao": "ok",
        "texto": "Cluedo ( [ˈkluːdoʊ] ) (conhecido como Clue na EUA,  O Clássico Jogo de Detetives em Portugal e Detetive no Brasil), é um jogo de estratégia e investigação para três a seis jogadores (dependendo das edições) que foi desenvolvido em 1943 pelo designer britânico de jogos de tabuleiro Anthony E. Pratt. O jogo foi fabricado pela primeira vez pela Waddingtons no Reino Unido em 1949. Desde então, foi rel\n[…]\nChave inglesa\n[…]\nO nome original do jogo era “Murder!” (Assassinato, em inglês) e foi inspirado em romances policiais ingleses de Agatha Christie e Raymond Chandler, bem como no clássico jogo de festa em que um jogador secreto, o assassino, tenta eliminar os outros com piscadelas, enquanto outro jogador, o detetive, precisa encontrá-lo. Elva Rosaline, mulher de Pratt, desenhou o primeiro tabuleiro do jogo. Na versão original, o jogo tinha dez personagens, onze salas e nove armas.\n[…]\nEm 1945, a empresa de jogos Waddingtons se interessou pela ideia de Pratt, fazendo adaptações e mudando o nome para Cluedo, mistura de Clue (“pista” em inglês) e Ludo (“eu jogo” em latim), fazendo referência ao tradicional jogo de tabuleiro em que os jogadores movimentam pinos coloridos ao jogar dados. O jogo ficou com seis personagens, nove salas e seis armas. Os personagens do Cluedo são Colonel Mostard, Mrs.\n[…]\nNos Estados Unidos e no Canadá, o jogo foi rebatizado de Clue pela Parker Brothers pois o Ludo é conhecido como Parcheesi na região.\n[…]\nEm 2008, Cluedo: Descobre os Segredos foi criado (com alterações no tabuleiro, na jogabilidade e nos personagens) como um spin-off moderno, mas foi criticado na mídia e pelos fãs do jogo original. Cluedo: O Clássico Jogo de Descobrir o Mistério foi então introduzido em 2012, retornando à fórmula clássica de Pratt, mas também adicionando diversas variações. Em 2023, foi feita uma nova revisão, lançada em Portugal como Cluedo: O Clássico Jogo dos Investigadores.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Gambito",
      "descricao": "Abertura de xadrez em que um jogador sacrifica material, geralmente um peão, em troca de vantagem."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "A palavra gambito, de aberturas como o Gambito da Rainha, vem de um termo italiano para qual golpe?",
    "resposta": "Rasteira",
    "distratores": [
      "Cotovelada",
      "Cabeçada",
      "Joelhada"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Gambit"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Gambit",
        "situacao": "ok",
        "texto": "A gambit (from Italian gambetto, the act of tripping someone with the leg to make them fall) is a chess opening in which a player sacrifices material with the aim of achieving a subsequent positional advantage.\n[…]\nThe Spanish word gambito was originally applied to chess openings in 1561 by Ruy López de Segura, from an Italian expression dare il gambetto (to put a leg forward in order to trip someone). In English, the word first appeared in Francis Beale's 1656 translation of a Gioachino Greco manuscript, The Royall Game of Chesse-play (\"illustrated with almost one hundred Gambetts\"). The Spanish gambito led to French gambit, which has influenced the English spelling of the word.\n[…]\nBudapest Gambit:  1.d4 Nf6 2.c4 e5\n[…]\nLatvian Gambit: 1.e4 e5 2.Nf3 f5\n[…]\nDanish Gambit:  1.e4 e5 2.d4 exd4 3. c3\n[…]\nBlackburne Shilling Gambit: 1.e4 e5 2.Nf3 Nc6 3.Bc4 Nd4?!\n[…]\nElephant Gambit: 1.e4 e5 2.Nf3 d5!?\n[…]\nEnglund Gambit: 1.d4 e5?!\n[…]\nItalian Gambit: 1.e4 e5 2.Nf3 Nc6 3.Bc4 Bc5 4.d4\n[…]\nBenko Gambit:  1.d4 Nf6 2.c4 c5 3.d5 b5\n[…]\nMilner Barry Gambit: 1.e4 e6 2.d4 d5 3.e5 c5 4.c3 Nc6 5.Nf3 Qb6 6.Bd3 cxd4 7.cxd4 Bd7 8.Nc3 Nxd4 9.Nxd4 Qxd4\n[…]\nVienna Gambit: 1.e4 e5 2.Nc3 Nf6 3.f4\n[…]\nSchiller, Eric (2002). Gambit Chess Openings. Simon & Schuster. ISBN 978-1-58042-038-9.\n[…]\nGuide to Chess Gambits (Part 1)\n[…]\nGuide to Chess Gambits (Part 2)\n[…]\nEmil Diemer (1908–1990) et les gambits sur le site Mieux jouer aux échecs\n[…]\nLe gambit letton sur le site Mieux jouer aux échecs\n[…]\nLe gambit Humphrey Bogart sur le site Mieux jouer aux échecs\n[…]\nLe gambit Fajarowicz sur le site Mieux jouer aux échecs\n[…]\nLe gambit Boden sur le site Mieux jouer aux échecs\n[…]\nDavid Gedult (1897-1981) et les gambits sur le site Mieux jouer aux échecs\n[…]\nScacchi: Enciclopedia pratica dei Gambetti (in Italian)"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Sistema de classificação Elo",
      "descricao": "Método estatístico de pontuação de jogadores de xadrez criado pelo físico húngaro-americano Arpad Elo."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Muita gente pensa que é uma sigla, mas de onde vem o nome do sistema Elo, que classifica os jogadores de xadrez?",
    "resposta": "Do criador, o físico Arpad Elo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Elo_rating_system",
      "https://en.wikipedia.org/wiki/Arpad_Elo"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Elo_rating_system",
        "situacao": "ok",
        "texto": "The Elo rating system is a method for calculating the relative skill levels of players, originally designed for rating chess players. It is a special case of the Bradley–Terry model. The Elo system was invented as an improved chess rating system over the previously used Harkness rating system and has since been adapted for use in other zero-sum games and sports, including tennis, association footb\n[…]\nIt is named after its creator Arpad Elo, a Hungarian-American chess master and physics professor.\n[…]\nArpad Elo was a chess master and an active participant in the United States Chess Federation (USCF) from its founding in 1939. The USCF used a numerical ratings system devised by Kenneth Harkness to enable members to track their individual progress in terms other than tournament wins and losses. The Harkness system was reasonably fair, but in some circumstances gave rise to ratings many observers considered inaccurate.\n[…]\nAnalogously, the update for the rating\n[…]\nElo, Arpad E. (March 5, 1960). \"The USCF Rating System\" (PDF). Chess Life. XIV (13).\n[…]\nElo, Arpad E. (April 5, 1960). \"The USCF Rating System. Part II\" (PDF). Chess Life. XIV (15).\n[…]\nElo, Arpad E. (May 5, 1960). \"The USCF Rating System. Part III\" (PDF). Chess Life. XIV (17).\n[…]\nElo, Arpad E. (May 20, 1960). \"The USCF Rating System. Part IV\" (PDF). Chess Life. XIV (18).\n[…]\nElo, Arpad E. (June 1961). \"The USCF Rating System, A Scientific Achievement\" (PDF). Chess Life. XVI (6): 160–161.\n[…]\nElo, Arpad E. (1966). Theory of Rating Systems. Privately printed monograph.\n[…]\nElo, Arpad E. (July 1967). \"The USCF Rating System\" (PDF). Chess Life. XXII (7): 205–206.\n[…]\nElo, Arpad E. (August 1967). \"The Proposed USCF Rating System, Its Development, Theory, and Applications\" (PDF). Chess Life. XXII (8): 242–247.\n[…]\nElo, Arpad (1986) [1st pub. 1978]. The Rating of Chessplayers, Past and Present (Second ed.). New York: Arco Publishing, Inc. ISBN 978-0-668-04721-0."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Arpad_Elo",
        "situacao": "ok",
        "texto": "Arpad Emmerich Elo (né Élő Árpád Imre; August 25, 1903 – November 5, 1992) was a Hungarian-American physics professor who created the Elo rating system for two-player games such as chess.\n[…]\nElo is known for his chess player rating system. The original player rating system was developed in 1950 by Kenneth Harkness, the Business Manager of the United States Chess Federation. By 1960, using the data developed through the Harkness Rating System, Elo developed his own formula, which had a sound statistical basis and constituted an improvement on the Harkness System. The new rating system was approved and passed at a meeting of the United States Chess Federation in St. Louis in 1960.\n[…]\nIn 1970, FIDE, the World Chess Federation, agreed to adopt the Elo Rating System. From then on until the mid-1980s, Elo himself made the rating calculations. At the time, the computational task was relatively easy because fewer than 2000 players were rated by FIDE. FIDE reassigned the task of managing and computing the ratings to others, excluding Elo.\n[…]\nFIDE also added new \"Qualification for Rating\" rules to its handbook awarding arbitrary ratings (typically in the 2200 range, which is the low end for a chess master) for players who scored at least 50 percent in the games played at selected events, such as named Chess Olympiads.\n[…]\nThe Rating of Chess Players, Past and Present (First Edition 1978, Second Edition 1986), Arco. ISBN 0-668-04721-6.\n[…]\nArpad Elo player profile and games at Chessgames.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rating_Elo",
        "situacao": "ok",
        "texto": "O Rating Elo é um método estatístico utilizado para se calcular a força relativa entre jogadores de xadrez, inventado pelo físico americano Arpad Elo e utilizado no Ranking FIDE. O método funciona adequadamente quando utilizado da maneira que foi projetado, embora existam algumas limitações. O rating também foi adaptado para outros esportes como por exemplo o Tênis.\n[…]\nVários métodos foram utilizados, mas o que foi adotado oficialmente pela FIDE foi o apresentado por Arpad Elo, professor de física e mestre de xadrez.\n[…]\nEra um melhoramento do sistema de avaliação e classificação de jogadores (rating) inventado por Kenneth Harkness, que se baseava na adição de novos parâmetros, entre eles, os resultados de duzentos jogadores dentre os melhores jogadores do mundo escolhidos dentro do intervalo de tempo entre 1966 e 1969, o segundo parâmetro era que estes jogadores tivessem disputado no mínimo trinta partidas com outros membros deste grupo de desempenho.\n[…]\nO Sistema de Rating Elo sugeriu como ponto de partida uma classificação de tal forma que uma diferença de 200 pontos significaria que o jogador \"mais forte\" terá um pontuação esperada de 0,75.\n[…]\nPerde para um jogador de rating 1609 e\n[…]\nEste método de atualização de ratings é a base dos sistemas utilizados pela FIDE, FICS e diversos outros grupos e entidades de xadrez.\n[…]\nNo entanto, cada organização tem tomado um caminho diferente para lidar com a incerteza inerente às avaliações, em especial às classificações dos recém-chegados, e para lidar com o problema das inflações / deflação das classificações, costumam adotar o hábito de atribuir classificações provisórias para novos jogadores cujos ratings são ajustados muito mais vezes do que os ratings de jogadores regulares.\n[…]\nHá de se considerar que o sistema Elo não é utilizado apenas no xadrez, é também aplicado em outros jogos que envolvam mecanismos de empate.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Jenga",
      "descricao": "Jogo de habilidade em que se retiram blocos de madeira de uma torre e se recolocam no topo sem derrubá-la."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Que verbo da língua suaíli deu nome ao Jenga, o jogo de tirar blocos de uma torre de madeira?",
    "resposta": "Construir",
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
        "texto": "Jenga é um jogo de habilidade física, criado por Leslie Scott, promovido pela Pokonobe Associates e comercializado pela Milton Bradley Company, uma divisão da Hasbro, nos Estados Unidos, e no Brasil. Os jogadores se revezam para remover blocos de uma torre, equilibrando-os em cima, criando uma estrutura cada vez maior e mais instável à medida que o jogo progride. A palavra \"jenga\" é a forma impera\n[…]\nUma vez que a torre tenha sido construída, o construtor deve iniciar o jogo. Uma jogada consiste em retirar um e apenas um bloco de qualquer andar que não esteja logo abaixo do andar incompleto mais alto. O bloco retirado deve ser posto no topo da torre, de modo que os blocos formem novos andares.\n[…]\nJenga foi criado por Leslie Scott  baseado em um jogo desenvolvido por sua família, no início dos anos 1970, utilizando blocos de madeira para crianças comprados pela família de um serralheiro em Takoradi, Gana. Scott fabricou e lançou o jogo na London Toy Fair em 1983, vendendo-o através de sua própria empresa, Leslie Scott Associates, até a Irwin Toy, no Canadá, e a Milton Bradley (Hasbro), nos Estados Unidos, adquirirem as licenças para produzir Jenga, em 1986.\n[…]\nAfora o fato de que o dado determina o movimento correcto, o jogo se joga como o Jenga regular.\n[…]\nexistem blocos de três cores: vermelho, verde e \"natural\" (cor de madeira), em vez de apenas a cor natural de Jenga. O jogo é o mesmo, mas se você mover um bloco vermelho no seu jogo, você deve completar o desafio impresso sobre ele antes de empilhar o bloco em cima. Se você mover um bloco verde, você tem que responder, com sinceridade, à pergunta impressa no bloco antes de empilhá-lo. Os blocos de cor natural não tem nada impresso sobre eles e são jogados como em Jenga.\n[…]\nJenga Xtreme utiliza blocos com um corte chanfrado (em forma de ) em vez de blocos de corte reto.\n[…]\nThe Jenga House\n[…]\nJenga - V&A Museum of Childhood",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Pebolim",
      "descricao": "Jogo de mesa que simula uma partida de futebol com bonequinhos presos em barras giratórias."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "No Rio de Janeiro, o pebolim, aquele jogo de mesa com bonequinhos de futebol presos em barras giratórias, é chamado por qual nome?",
    "resposta": "Totó",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Pebolim"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Pebolim",
        "situacao": "ok",
        "texto": "Futebol de mesa, pebolim (em português brasileiro) ou matraquilhos (português europeu), é um jogo de mesa vagamente baseado no futebol de associação. Seu objetivo é mover a bola para o gol do adversário manipulando hastes que possuem figuras anexadas que se assemelham a jogadores de futebol de duas equipes adversárias.\n[…]\nHá duas formas básicas de jogar futebol de mesa: individual ou em duplas. Jogando de forma individual, há um competidor de cada lado, cada um responsável pelas quatro manipulas que comandas as barras dos bonecos. No jogo de duplas, um jogador de cada time fica responsável por \"goleiro\" e \"defesa\" e o outro, por \"meio-de-campo\" (ou \"meio-campo\") e \"ataque\".\n[…]\nEm cada país, o futebol de mesa tem um nome diferente, sendo que no Brasil há três nomenclaturas mais comuns. O nome mais comum para a maioria dos estados brasileiros é \"totó\", porém em São Paulo, Paraná, sul de Minas Gerais, e Santa Catarina o jogo é chamado de \"pebolim\". No Rio Grande do Sul, já foi chamado de pacal.\n[…]\nPorém, embora os dois times de futebol mais populares sejam o Grêmio e o Internacional, cuja disputa chama-se gre-nal, o jogo é popularmente chamado de fla-flu, uma alusão à disputa entre Flamengo e o Fluminense.\n[…]\nEm Portugal, o termo dicionarizado é \"matraquilhos\", embora também seja comum chamar ao jogo \"matrecos\". Agora, com as competições internacionais, o desporto é mais recentemente reconhecido e reinvidicado como: \"Table Soccer - futebol de mesa\". Na região do Porto é ainda comum apelidar o jogo de \"perceberitos\". Na Região Autónoma da Madeira também é apelidado de \"roleta\", devido aos movimentos de rodar que se efectua.\n[…]\nFutebol de botão\n[…]\nFutebol de pino\n[…]\nFutebol Club\n[…]\nRegras Oficiais do jogo em Portugal - Federação Portuguesa de Matraquilhos e Futebol de Mesa - Regras Oficiais do jogo em Portugall"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Rei (carta de baralho)",
      "descricao": "Carta de figura do baralho francês que, na tradição francesa, homenageia um rei histórico ou lendário em cada naipe."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Na tradição francesa, cada rei do baralho homenageia um personagem histórico. O rei de espadas representa qual rei bíblico?",
    "resposta": "Davi",
    "fonte": [
      "https://en.wikipedia.org/wiki/King_(playing_card)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/King_(playing_card)",
        "situacao": "ok",
        "texto": "The king is a playing card with a picture of a king displayed on it. The king is usually the highest-ranking face card. In the French version of playing cards and tarot decks, the king immediately outranks the queen. In Italian and Spanish playing cards, the king immediately outranks the knight. In German and Swiss playing cards, the king immediately outranks the Ober. In some games, the king is t\n[…]\nThe king card is the oldest and most universal court card. It most likely originated in Persian Ganjifeh where kings are depicted as seated on thrones and outranking the viceroy cards which are mounted on horses. Playing cards were transmitted to Italy and Spain via the Mamluks and Moors. The best preserved and most complete deck of Mamluk cards, the Topkapı pack, did not display human figures but just listed their rank most likely due to religious prohibition.\n[…]\nIt is not entirely sure if the Topkapı pack was representative of all Mamluk decks as it was a custom-made luxury item used for display. A fragment of what may be a seated king card was recovered in Egypt which may explain why the poses of court cards in Europe resemble those in Persia and India.\n[…]\nThe king of hearts is sometimes called the \"suicide king\" because he appears to be sticking his sword into his head. This is a result of centuries of bad copying by English card makers where the king's axe head has disappeared.\n[…]\nMost French-suited continental European patterns are descended from the Paris pattern but they have dropped the names associated with each card.\n[…]\nKings from Russian playing cards:\n[…]\nKings from Italian playing cards:\n[…]\nKings from Spanish playing cards:\n[…]\nKings from German playing cards:\n[…]\nThe kings are included in the Playing Cards:\n[…]\nU+1F0AE 🂮 PLAYING CARD KING OF SPADES\n[…]\nU+1F0BE 🂾 PLAYING CARD KING OF HEARTS\n[…]\nU+1F0CE 🃎 PLAYING CARD KING OF DIAMONDS\n[…]\nU+1F0DE 🃞 PLAYING CARD KING OF CLUBS"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rei_%28baralho%29",
        "situacao": "ok",
        "texto": "O rei é a terceira carta da corte e está presente nos principais sistemas de baralho: latino, anglo-francês e germânico, sempre simbolizando um monarca coroado. A iconografia tradicional mostra o rei com atributos de poder, como espadas, cetros ou machados, embora o estilo varie conforme a tradição gráfica.\n[…]\nSua representação varia conforme a tradição: nos baralhos franceses, aparece com a letra R (Roi); nos ingleses, com a letra K (King); e nos germânicos, também pode aparecer como K (König).\n[…]\nNo baralho francês tradicional, cada rei simboliza uma figura histórica ou bíblica — como Carlos Magno, Alexandre, o Grande, Júlio César e o rei David —, ainda que essas associações tenham se perdido em edições modernas.\n[…]\nOs reis sentados eram geralmente comuns em toda a Europa. Durante o século XV, os espanhóis começaram a produzir reis permanentes. Os franceses usaram originalmente cartas espanholas antes de desenvolverem seus padrões de baralho regionais. Muitos projetos da corte espanhola foram simplesmente reutilizados quando os franceses inventaram seu próprio sistema de trajes por volta de 1480. The English imported their cards from Rouen until the early 17th century when foreign card imports were banned.\n[…]\nA partir do século XV, os fabricantes franceses atribuíram a cada uma das cartas da corte nomes retirados da história ou da mitologia. Esta prática sobrevive apenas no padrão de Paris, que derrubou todos os seus rivais, incluindo o padrão de Rouen por volta de 1780.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Através do Espelho",
      "descricao": "Livro de Lewis Carroll, de 1871, continuação de Alice no País das Maravilhas, estruturado como uma partida de xadrez."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Em Através do Espelho, de Lewis Carroll, Alice cruza um tabuleiro de xadrez gigante como peão. Em que peça ela se transforma ao chegar à última casa?",
    "resposta": "Rainha",
    "fonte": [
      "https://en.wikipedia.org/wiki/Through_the_Looking-Glass"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Through_the_Looking-Glass",
        "situacao": "ok",
        "texto": "Through the Looking-Glass, and What Alice Found There is a novel published in December 1871 by Lewis Carroll, the pen name of Charles Lutwidge Dodgson, a mathematics lecturer at Christ Church, Oxford. It is the sequel to his Alice's Adventures in Wonderland (1865), in which many of the characters were anthropomorphic playing cards. In this second novel the theme is chess.\n[…]\nMost stage and screen adaptations of the Lewis Carroll novels concentrate on the more familiar Alice's Adventures in Wonderland, although many of them import characters from Through the Looking-Glass.\n[…]\nAn almost complete adaptation of both of Carroll's novels, Through the Looking-Glass was adapted in act 2. The cast included Katherine Heath (Alice Liddell/Alice), Sarah Redmond (Tiger Lily), Jamie Golding (Tweedledum), Adam Sims (Tweedledee), Robert Howell (Walrus) and Chris Lamer (Carpenter).\n[…]\nAlthough many later writers, including Jean Ingelow, Christina Rossetti, Charles E. Carryl and E. F. Benson, attempted to follow Carroll's lead, Through the Looking Glass, as opposed to Alice's Adventures in Wonderland, is rarely the identifiable influence. Lawrence Durrell draws on \"Jabberwocky\" in his collection of comic short stories Sauve qui peut (1966): \"You can damn well take a hundred lines, Dovebasket ... 'In future I must not be such a blasted Borogrove'\".\n[…]\nAngus Wilson drew on Through the Looking Glass for the title of his 1956 novel Anglo-Saxon Attitudes but otherwise his book has nothing to do with Carroll's story. Another title drawn from Carroll's book is the Red Queen hypothesis – derived from her words to Alice \"It takes all the running you can do to keep in the same place.\n[…]\nCarroll, Lewis (1998) [1871]. \"Through the Looking-Glass\". Alice: A Special Centenary Edition. London: Macmillan. ISBN 0-333-72272-8.\n[…]\nThrough the Looking-Glass public domain audiobook at LibriVox"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Through_the_Looking-Glass",
        "situacao": "ok",
        "texto": "Through the Looking-Glass and What Alice Found There (publicado em Portugal como Alice do Outro Lado do Espelho e no Brasil como Alice Através do Espelho e O Que Ela Encontrou Por Lá e ainda Alice No País Dos Espelhos) é um livro de 1871, a continuação do célebre Alice's Adventures in Wonderland (Alice no País das Maravilhas), de 1865. O autor é Charles Lutwidge Dodgson, conhecido como Lewis Carro\n[…]\nEm Alice no País das Maravilhas, a menina protagonista segue o Coelho Branco, cai no País das Maravilhas e conhece os mais variados e estranhos personagens. Nesta continuação, Alice tem de ultrapassar vários obstáculos — estruturados como etapas de um jogo de xadrez — para se tornar rainha. À medida que ela avança no tabuleiro, surgem outros tantos personagens instigantes e enigmáticos. O livro exalta essa esperteza que os adultos tantas vezes tomam por insolência.\n[…]\nCarroll, apaixonado por crianças, elaborou as duas narrativas como um contraponto fantasioso e feérico que ridicularizava a compostura exigida às histórias edificantes e moralistas que eram lidas para os pequenos súditos da Inglaterra vitoriana. Um claro exemplo é o momento em que a sentenciosa Rainha Vermelha diz: \"Fale só quando falarem com você\". Alice observa que, se essa regra fosse seguida por todos igualmente, a conversa deixaria de existir.\n[…]\nNum episódio de Popeye chamado de Sweapea Thru the Looking Glass, Gugu e Chip entraram no espelho e encontraram um coelho, um canguru e um elefante apressados para jogar golfe. Nisso, Chip é capturado pela rainha de copas (Bruxa do Mar) e pelo rei de copas (Brutus), cabendo ao Gugu salvá-lo.\n[…]\nAlice Através do Espelho (2016), continuação de Alice no País das Maravilhas (2010), dirigido por James Bobin com produção de Tim Burton, estrelado por Johnny Depp, como o Chapeleiro Maluco e Mia Wasikowska como Alice.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "O Sétimo Selo",
      "descricao": "Filme sueco de 1957 dirigido por Ingmar Bergman, sobre um cavaleiro medieval que enfrenta a Morte."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "No filme O Sétimo Selo, de Ingmar Bergman, um cavaleiro que volta das Cruzadas joga uma partida de xadrez contra quem?",
    "resposta": "A Morte",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Seventh_Seal"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Seventh_Seal",
        "situacao": "ok",
        "texto": "The Seventh Seal (Swedish: Det sjunde inseglet) is a 1957 Swedish historical fantasy film written and directed by Ingmar Bergman. It stars Max von Sydow as Antonius Block, a medieval knight returning to Sweden during the Black Death after the Crusades, who challenges the personification of Death (Bengt Ekerot) to a game of chess in an attempt to delay his fate. The cast also features Gunnar Björns\n[…]\nOn Rotten Tomatoes, the film holds an approval rating of 93% based on 72 reviews, with an average rating of 9.20/10. The website's critical consensus reads: \"Narratively bold and visually striking, The Seventh Seal brought Ingmar Bergman to the world stage – and remains every bit as compelling today\". On Metacritic, the film has a rating of 88/100 based on 15 reviews, indicating \"universal acclaim\".\n[…]\nThe Seventh Seal significantly helped Bergman in gaining his position as a world-class director. When the film won the Special Jury Prize at the 1957 Cannes Film Festival, the attention generated by it (along with the previous year's Smiles of a Summer Night) made Bergman and his stars Max von Sydow and Bibi Andersson well known to the European film community, and the critics and readers of Cahiers du Cinéma, among others, discovered him with this movie.\n[…]\nIn 2016, composer João MacDowell premiered in New York City at Scandinavia House the music for the first act of The Seventh Seal, a work in progress under contract with the Ingmar Bergman Foundation, sung in Swedish. The work was under production by the International Brazilian Opera (IBOC) as part of the celebrations for the Ingmar Bergman centenary in 2018.\n[…]\nBergman, Ingmar (1960). The Seventh Seal. Touchstone.\n[…]\nBragg, Melvyn (1998). The Seventh Seal (Det Sjunde Inseglet). BFI Publishing. ISBN 978-0-85170-391-6.\n[…]\nThe Seventh Seal an essay by Peter Cowie at The Criterion Collection\n[…]\nThe Seventh Seal PDF\n[…]\nThe Seventh Seal at Internet Archive"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/O_S%C3%A9timo_Selo",
        "situacao": "ok",
        "texto": "Det sjunde inseglet (O Sétimo Selo em português) é um filme sueco de 1957, do gênero drama, escrito e dirigido por Ingmar Bergman. O filme é baseado numa peça de teatro de autoria do diretor.\n[…]\nO Sétimo Selo tem por tema fundamentalmente a questão do medo da morte; um cavaleiro que volta da Cruzada da Fé para encontrar em sua terra a peste e morte. Quando ele mesmo se depara com a personificação da morte, aceita-a como um visitante esperado, mas propõe-lhe uma negociação – numa disputa de xadrez – para que possa ganhar tempo e indagar sobre o sentido da vida e, conseqüentemente, o sentido da morte.\n[…]\nDessa forma, abre-se uma pausa no caminho da morte para vermos qual é o sentido da aflição que está sendo promovida e qual o caminho possível para fugir desse destino. O jogo de xadrez aparece talvez como uma alegoria da busca do cavaleiro a um entendimento da vida através da racionalidade que, ao final do filme, fica evidente que não seria possível, assim como, o cavaleiro mesmo percebe, não seria possível vencer a Morte.\n[…]\nNo filme, vários aspectos espirituais são contemplados: o cavaleiro medita a morte, o bem e o mal, a ação divina na vida humana, os vícios, e a fraqueza humana, porém nunca com respostas definitivas. Nenhuma presença sobrenatural se manifesta ao cavaleiro durante o filme, mas aparecem variadas cenas de sacerdotes, monges, e outros religiosos.\n[…]\nApesar do filme retratar o tempo inteiro uma humanidade desesperada e moribunda, sob o agouro implacável da Morte, Bergman apresenta-nos um final onde é possível ter esperanças. A família de artistas são os únicos personagens que sobrevivem à “caçada” da Morte.\n[…]\nDet Sjunde Inseglet (em italiano)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Dungeons & Dragons",
      "descricao": "Jogo de RPG de mesa de fantasia lançado nos Estados Unidos em 1974."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O desenho animado Caverna do Dragão, sucesso na TV brasileira, foi baseado em qual famoso jogo de RPG de mesa?",
    "resposta": "Dungeons & Dragons",
    "fonte": [
      "https://en.wikipedia.org/wiki/Dungeons_%26_Dragons_(TV_series)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Dungeons_%26_Dragons_(TV_series)",
        "situacao": "ok",
        "texto": "Dungeons & Dragons is an American fantasy animated television series based on TSR's Dungeons & Dragons role-playing game. It is a co-production of Marvel Productions and TSR, with animation services provided by Japanese studio Toei Animation. It ran on CBS from 1983 through 1985 for three seasons, for a total of twenty-seven episodes.\n[…]\nSidney Miller – Dungeon Master\n[…]\nAn Advanced Dungeons & Dragons toy line was produced by LJN in 1983, including original characters such as Warduke, Strongheart the Paladin, and the evil Wizard Kelek, who would later appear in campaigns for the Basic Set of the roleplaying game. None of the main characters from the TV series are in the toy line, but Warduke, Strongheart, and Kelek each appear in one episode of the series. Only in Spain and Portugal were PVC figures of the main characters produced.\n[…]\nThe Brazilian company Iron Studios released in 2019 an entire set of polystone collectible statues for most of the Dungeons & Dragons cartoon characters, using a 1/10 scale and forming a full diorama. The same year, PCS Collectibles released two versions of Venger in 1:4 scale, both fully sculpted and hand painted polystone statues. In 2022, Hasbro launched the Cartoon Classics action figurine series based on Dungeons & Dragons.\n[…]\nThe 2023 film Dungeons & Dragons: Honor Among Thieves featured adult versions of Hank, Bobby, Sheila, Diana, Eric and Presto in live-action cameos with Edgar Abram as Hank, Luke Bennett as Bobby, Emer McDaid as Sheila, Moe Sasegbon as Diana, Trevor Kaneswaran as Eric, and Seamus O'Hara as Presto. They are seen competing in a special tournament in Neverwinter and have made it to a cage in the middle of a shifting labyrinth.\n[…]\nD&D Animated Series on the Official Dungeons & Dragons YouTube channel\n[…]\nDungeons & Dragons at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dungeons_%26_Dragons_%28s%C3%A9rie_animada%29",
        "situacao": "ok",
        "texto": "Dungeons & Dragons (Brasil: Caverna do Dragão ) é uma série de animação baseada no jogo de RPG homônimo da TSR, coproduzida pela Marvel Productions, TSR e Toei Animation. A série possui 27 episódios divididos em três temporadas, transmitidas originalmente entre os anos de 1983 e 1985 pela rede de televisão estadunidense CBS. A animação da série ficou a cargo da empresa japonesa Toei Animation. A s\n[…]\nNão há consenso sobre qual foi o cenário de Dungeons & Dragons utilizado para ambientar o seriado. Greyhawk, um dos primeiros cenários de Dungeons & Dragons e cuja autoria é de Gary Gygax, um dos criadores do desenho animado, teve alguns de seus personagens utilizados ao longo da série, dentre os quais: Warduke (Duque Guerreiro), Tiamat, o Beholder (Observador) e Lolth (os três últimos passaram a, posteriormente, compor o universo básico de Dungeons & Dragons).\n[…]\nO mundo de Caverna do Dragão é simplesmente chamado de \"O Reino\" (Realm of Dungeons & Dragons, no original). Há diversas cidades pequenas (vilarejos ou burgos) espalhadas pelo Reino, chefiadas por pessoas denominadas \"prefeitos\" (ou burgo-mestres). Há cidadelas maiores, cercadas por grandes muros e governadas como um principado ou um reino. A maioria das aglomerações urbanas tem ciência do Vingador e muitas demonstram temor e obediência a ele.\n[…]\nDungeons & Dragons 3.5 – Animated Series Handbook: produzido pela Wizards of the Coast e publicado no box de DVD lançado pela Ink & Paint em 2006, o livro de 32 páginas é finalmente uma publicação oficial de D&D sobre Caverna do Dragão. Traz fichas de cada protagonista e uma história para ser jogada, ambientada cronologicamente antes do episódio O Cemitério dos Dragões.\n[…]\nSérgio Peixoto (2011). «Dungeons and Dragons ou Caverna do Dragão». Revista Clube dos Heróis (10). São Paulo, Brasil: Editora Minuano. pp. 3–26\n[…]\n«Caverna do Dragão». no site do Canal Gloob",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Pachisi",
      "descricao": "Jogo de tabuleiro tradicional da Índia, em forma de cruz, ancestral do ludo."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que jogo de tabuleiro popular no Brasil, de peões coloridos que dão a volta no tabuleiro, é uma versão simplificada do pachisi indiano?",
    "resposta": "Ludo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pachisi",
      "https://en.wikipedia.org/wiki/Ludo"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pachisi",
        "situacao": "ok",
        "texto": "Pachisi (, Hindustani: [pəˈtʃiːsiː]) is a cross and circle board game that originated in Ancient India. It is described in the ancient text Mahabharata under the name of \"Pasha\". It is played on a board shaped like a symmetrical cross. A player's pieces move around the board based upon a throw of six or seven cowrie shells as lots, with the number of shells resting with the aperture upward indicat\n[…]\nIn addition to chaupar, there are similar games that have originated around the world. Barjis (barsis) is popular in the Levant, mainly Syria, while Parchís is another game popular in Spain and northern Morocco. Parqués is its Colombian equivalent. Parcheesi, Patchesi, Sorry!, and Ludo are among the commercial versions of similar games. The jeu des petits chevaux ('game of little horses') is played in France, and Mensch ärgere Dich nicht is a popular German cross-and-circle game.\n[…]\nIn a similar period, a board identical to pachisi was discovered in the Ellora cave system. A Song dynasty (960–1279) document referencing the Chinese game Chupu (Chinese: 樗蒲; pinyin: chūpú), \"invented in western India and spread to China in the time of the Wei dynasty (AD 220–265)\" may relate to Chaupar, but the actual nature of the Chinese game (which may be more closely related to backgammon) is uncertain.\n[…]\nIt is said that the Emperor took such a fancy to playing the game on this grand scale that he had a court for pachisi constructed in all his palaces, and traces of such are still visible at Agra and Allahabad.\n[…]\nPachisi is a game for two, three, or four players, four usually play in two teams. One team has yellow and black pieces, the other team has red and green. The team which moves all its pieces to the finish first wins the game.\n[…]\nLudo\n[…]\nPachisi   at BoardGameGeek\n[…]\n\"Pachisi\" . Encyclopædia Britannica (11th ed.). 1911."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Ludo",
        "situacao": "ok",
        "texto": "Ludo (; from Latin  ludo '[I] play') is a strategy-based board game for two to four players, in which the players race their four tokens from start to finish according to the rolls of a single die. Ludo shares characteristics with other cross-and-circle games from around the world; these types of games include the pre-Columbian Mesoamerican game Patolli, and the Indian game Pachisi. The game and i\n[…]\nLudo uses a cubic die with a dice cup and was marketed as \"Ludo\" in England in 1896 by Alfred Coller. Coller eventually patented the game and sold it as \"Royal Ludo\". The board game Uckers, popular in the Royal Navy, is based on Ludo.\n[…]\nLudo exists under different names and brands, and in various game derivations:\n[…]\nPachisi, Indian\n[…]\nParchís, Spanish\n[…]\nHasbro has multiple brand names for ludo-like games from its acquisitions including:\n[…]\nBased on Pachisi\n[…]\nAeroplane chess: A Chinese cross-and-circle board game derived from Ludo, it uses aeroplanes as tokens, with additional features such as coloured cells, jumps, and shortcuts.\n[…]\nLudo played in the Indian subcontinent features a safe square in each quadrant, normally the fourth square from the top in the rightmost column. These squares are usually marked with a star. In India Ludo is often played with two dice, and rolling one on a die also allows a token to enter active play. Thus if a player rolls a one and a six, they may get a token out and move it six steps.\n[…]\nThe Indian Ludo is based on the ancient game Pachisi. It was first played on cloth boards using cowrie shells and small tokens. Over time, it changed into a simpler version with a square board and a single die. This version is now played in homes across the country.\n[…]\nThe game can be played digitally through Indian mobile apps like Zupee Ludo and Ludo King, and on the web."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pachisi",
        "situacao": "ok",
        "texto": "Pachisi é um jogo de tabuleiro que se originou na Índia antiga e que é considerado o \"jogo nacional da Índia\". É jogado em uma placa com o formato de uma cruz simétrica. As peças de um jogador se deslocam placa baseada em um lance de seis ou sete búzios, com a quantidade de conchas descansando com a abertura para cima indicando o número de espaços para mover.\n[…]\nO nome do jogo deriva da palavra em hindi pachis, que significa vinte e cinco, a maior pontuação que pode ser alcançada com os búzios. O ludo é uma das muitas versões comerciais ocidentalizadas do jogo.\n[…]\nLudo\n[…]\nPachisi no BoardGameGeek\n[…]\nThe Rules of Pachisi & Chaupar\n[…]\nDownload do jogo pachisi para imprimir e jogar nos formatos A4 e carta",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Simon (jogo)",
      "descricao": "Brinquedo eletrônico de memória com quatro botões coloridos que acendem em sequência, lançado em 1978."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Ralph Baer, considerado o pai do videogame, coinventou um brinquedo de memória com luzes coloridas. Com que nome a Estrela o lançou no Brasil?",
    "resposta": "Genius",
    "fonte": [
      "https://en.wikipedia.org/wiki/Simon_(game)",
      "https://pt.wikipedia.org/wiki/Genius_(jogo)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Simon_(game)",
        "situacao": "ok",
        "texto": "Simon is an electronic game of short-term memory skill invented by Ralph H. Baer and Howard J. Morrison, working for toy design firm Marvin Glass and Associates, with software programming by Lenny Cope. The device creates a series of tones and lights and requires a user to repeat the sequence. If the user succeeds, the series becomes progressively longer and more complex. Once the user fails or th\n[…]\nBaer developed the tones of the game, inspired by the notes of a bugle. When they pitched the demo, an 8-by-8-inch console, to the Milton Bradley Company, the name of the game was changed to Simon. Simon debuted in 1978 at a retail price of $24.95 (equivalent to $123 in 2025). It became one of the top-selling toys that Christmas shopping season. U.S. patent 4,207,087: \"Microcomputer controlled game\", was granted in 1980.\n[…]\nIn 2005, Hasbro released Simon Tricks (also known as Simon Trickster  in US and as Simon Genius in Brazil), which featured four game modes, in a similar fashion to another Hasbro game, Bop It, and colored lenses instead of buttons. \"Simon Classic\" mode played up to 35 tones (notes). \"Simon Bounce\" was similar to \"Simon Classic\", but the colors of the lenses changed. In \"Simon Surprise,\" every lens became the same color and the player had to memorize the location.\n[…]\n\"Simon Rewind\" required the player to memorize the sequence backwards. During each game, the player was paid a compliment after completing a certain number of tones. On reaching five and eleven tones, the computer would randomly choose \"Awesome!\", \"Nice!\", \"Sweet!\", or \"Respect!\". On reaching 18 tones, the game would play a victory melody three times. On reaching the ultimate 35 tones, the game would play the victory melody again and say \"Respect!\".\n[…]\nGenius, launched in the 1980s in Brazil, by Brinquedos Estrela.\n[…]\nHasbro is the current maker of Simon"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Genius_(jogo)",
        "situacao": "ok",
        "texto": "Genius era um brinquedo muito popular na década de 1980 distribuído pela Brinquedos Estrela.\n[…]\nO brinquedo buscava estimular a memorização de cores e sons. Com um formato semelhante a um OVNI, possuía botões coloridos que emitiam sons harmônicos e se iluminavam em seqüência. Cabia aos jogadores repetir o processo sem errar.\n[…]\nO Genius lançado em 1980 pela Estrela foi o primeiro jogo eletrônico vendido no Brasil, sendo a versão do Simon, do fabricante americano Hasbro. Muitos brinquedos eletrônicos da Estrela dos anos 80, como o Pégasus, Colossus, Gênius e outros, saíram de linha.\n[…]\nEm 1987, a Prosoft desenvolveu um Genius para MSX 1 O programa foi desenvolvido em Basic.\n[…]\nO Genius original possuía três jogos diferentes e quatro níveis de dificuldade.\n[…]\nVoltou a ser fabricado pela Estrela em 2012.\n[…]\n«Video of someone playing Simon»\n[…]\n«Hasbro's current line of Simon games»\n[…]\n«Includes the story about how Simon was \"adapted\" from Atari's game»\n[…]\n«Pictures of the various versions of Simon». and Simon Squared\n[…]\n«Craterfish Simon»\n[…]\n«Flash version of Simon by Paul Neave»\n[…]\n«Silverlight version of Simon, by Vertigo»\n[…]\n«John Scalo & Rich Dellinger's Simon Extreme 1.1.1 (Mac)»\n[…]\n«\"Mimeo\"». Simon game produced by Kudit\n[…]\n«Simon Game Webapp». produced by Kudit\n[…]\n«ProRattaFactor's Simon inspired memory game \"Memory Attack\" is part of 3 game suite Whack Attack! Games»\n[…]\n«Neuro». Advanced Simon variation for Android 1.5.\n[…]\n«Jon Kent's Simon v1.0 (PPC)»\n[…]\n«Ringo Sammon's Crazyfaces (Simon clone with faces and alternate play, such as repeating a sequence in reverse)»"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Marcel Duchamp",
      "descricao": "Artista francês do século vinte, ligado ao dadaísmo e criador dos ready-mades, que também foi enxadrista."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que artista francês, famoso por expor objetos prontos do cotidiano como obras de arte, jogou pela França em olimpíadas de xadrez?",
    "resposta": "Marcel Duchamp",
    "fonte": [
      "https://en.wikipedia.org/wiki/Marcel_Duchamp"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Marcel_Duchamp",
        "situacao": "ok",
        "texto": "Henri-Robert-Marcel Duchamp (UK: , US: ; French: [maʁsɛl dyʃɑ̃]; 28 July 1887 – 2 October 1968) was a French American artist, chess player, and inventor who played a key role in the development of the avant-garde in the United States and in New York City, where he spent the last 25 years of his life.\n[…]\nAs the last surviving member of the Duchamp family of artists, in 1967 Duchamp helped to organize an exhibition in Rouen, France, called Les Duchamp: Jacques Villon, Raymond Duchamp-Villon, Marcel Duchamp, Suzanne Duchamp. Parts of this family exhibition were later shown again at the Musée National d'Art Moderne in Paris.\n[…]\nThe Prix Marcel Duchamp (Marcel Duchamp Prize), established in 2000, is an annual award given to a young artist by the Centre Georges Pompidou. In 2004, as a testimony to the legacy of Duchamp's work to the art world, a panel of prominent artists and art historians voted Fountain \"the most influential artwork of the 20th century\". In his 2025 art history book Shock Factory: The Visual Culture of Industrial Music, Nicolas Ballet points out Duchamp's explicit influence on Industrial Music.\n[…]\nMarc Décimo: Marcel Duchamp mis à nu. A propos du processus créatif (Marcel Duchamp Stripped Bare. Apropos of the creative Act), Les presses du réel, Dijon (France), 2004 ISBN 978-2-84066-119-1.\n[…]\nMarc Décimo:The Marcel Duchamp Library, perhaps (La Bibliothèque de Marcel Duchamp, peut-être), Les presses du réel, Dijon (France), 2002.\n[…]\nEssays by Duchamp\n[…]\nPhiladelphia Museum of Art Archives Marcel Duchamp Exhibition Records: contain material created and collected by the PMA’s Department of Modern and Contemporary Art (formerly the Twentieth Century Art Department) during the course of organizing and/or participating in exhibitions (from 1967-1993) about the artist Marcel Duchamp"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Marcel_Duchamp",
        "situacao": "ok",
        "texto": "Marcel Duchamp (Blainville-Crevon, 28 de julho de 1887 – Neuilly-sur-Seine, 2 de outubro de 1968) foi um pintor, escultor e poeta francês naturalizado americano. Inventor dos ready made, foi o mais conhecido artista do dadaísmo, uma vanguarda artística do início do século XX com expressiva influência na formação da arte moderna.[carece de fontes]?\n[…]\nDuchamp é um dos precursores da arte conceitual e introduziu a ideia de ready made como objeto de arte. Irmão de Jacques Villon, de Suzanne Duchamp e Raymond Duchamp-Villon, estes também artistas que gozaram de reputação no cenário artístico europeu, Marcel Duchamp começou sua carreira como artista criando pinturas de inspiração romantista, expressionista e cubista.\n[…]\nDuchamp foi o responsável pelo conceito de ready made, que é o transporte de um elemento da vida cotidiana, a princípio não reconhecido como artístico, para o campo das artes. A princípio como uma brincadeira entre seus amigos, entre os quais Francis Picabia e Henri-Pierre Roché, Duchamp passou a incorporar material de uso comum nas suas esculturas. Em vez de trabalhá-los artisticamente, ele simplesmente os considerava prontos e os exibia como obras de arte.\n[…]\nVale a pena ressaltar que a obra de Duchamp deixou um legado importante para as experimentações artísticas subsequentes, tais como o Dadaísmo, o Surrealismo, o Expressionismo abstrato, a Arte conceitual, entre outros. Muitos dos artistas identificados com essas tendências prestaram tributo a Duchamp, quando não o conheceram de fato, tendo com ele um contato direto (ou, às vezes, íntimo), o que influenciou as suas respectivas obras.\n[…]\nMedia relacionados com Marcel Duchamp no Wikimedia Commons\n[…]\n«José D'Assunção Barros: Arte e Conceito em Marcel Duchamp - \"Domínios da Arte\", UEL, vol.2, janeiro-julho de 2008»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Chess (musical)",
      "descricao": "Musical de 1984 sobre um duelo de xadrez entre um americano e um soviético durante a Guerra Fria."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "O musical Chess, sobre um duelo de xadrez na Guerra Fria, tem músicas compostas por dois integrantes de qual banda?",
    "resposta": "ABBA",
    "distratores": [
      "Bee Gees",
      "Roxette",
      "Genesis"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Chess_(musical)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Chess_(musical)",
        "situacao": "ok",
        "texto": "Chess is a 1986 musical with music by Benny Andersson and Björn Ulvaeus of the pop group ABBA, lyrics by Ulvaeus and Tim Rice, and book by Rice. The story involves a politically charged, Cold War–era chess tournament between two grandmasters, one American and the other Soviet, and their fight over a woman who manages one and falls in love with the other.\n[…]\nSome of the songs on the resulting album contained elements of music Andersson and Ulvaeus had previously written for ABBA. For example, the chorus of \"I Know Him So Well\" was based on the chorus of \"I Am An A\", a song from their 1977 tour, while the chorus of \"Anthem\" used the chord structures from the guitar solo from their 1980 ABBA song \"Our Last Summer\".\n[…]\nUlvaeus would also provide dummy lyrics to emphasise the rhythmic patterns of the music, and since Rice found a number of these \"embarrassingly good\" as they were, incorporated a few in the final version. An example is \"One night in Bangkok makes a hard man humble\". One song, which became \"Heaven Help My Heart\", was recorded with an entire set of lyrics, sung by ABBA's Agnetha Fältskog with the title \"Every Good Man\", although none of the original lyrics from this song were used.\n[…]\nOwing in part to the different countries in which the lyricist and composers resided, recording on the album musical of Chess began in Stockholm in early November 1983, with Andersson recording the many layered keyboard parts himself along with other basic work at their usual Polar Studios, and choral and orchestral work then recorded in London by The Ambrosian Singers along with the London Symphony Orchestra.\n[…]\nThe album was then sound-engineered and mixed back at Polar by longtime ABBA sound engineer Michael B. Tretow.\n[…]\nChess The Musical Online History & Archive by RJS\n[…]\nChess the Musical 2010\n[…]\n\"CHESS The Musical\" by Edward Winter"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Chess_%28musical%29",
        "situacao": "ok",
        "texto": "Chess é uma peça musical com música de Benny Andersson e Björn Ulvaeus, ex-integrantes do ABBA, e com a letra de Tim Rice. A história envolve um triângulo amoroso entre dois jogadores, durante a disputa do Campeonato Mundial de Xadrez, pelo amor de uma mulher.\n[…]\nO musical se passa no contexto da Guerra Fria entre os Estados Unidos e a União Soviética e embora os produtores não tivessem a intenção de representar nenhum indivíduo, o papel do jogador americano foi baseado livremente no Grande Mestre e ex-campeão mundial Bobby Fischer, enquanto os elementos da história podem ter sido inspirados nas carreiras dos ex-campeões mundiais russos Viktor Korchnoi e Anatoly Karpov.\n[…]\nAssim como foi feito para os musicais Jesus Christ Superstar e Evita, um bem sucedido álbum conceptual de Chess foi lançado em 1984. A primeira produção teatral foi realizada no West End em Londres em 1986 e foi exibida por três anos. Uma versão bastante alterada foi lançada na Broadway em 1988 por somente dois meses. Chess é frequentemente revisada para novas produções, muitas das quais tentam juntar elementos destas duas produções.\n[…]\nXadrez no teatro\n[…]\nXadrez nas artes",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Hanafuda",
      "descricao": "Baralho tradicional japonês com ilustrações de flores, plantas e animais dos doze meses do ano."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Em 1889, em Quioto, foi fundada uma empresa para fabricar hanafuda, as cartas japonesas de flores. Que empresa é essa?",
    "resposta": "Nintendo",
    "distratores": [
      "Sega",
      "Bandai",
      "Konami"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Hanafuda",
      "https://en.wikipedia.org/wiki/Nintendo"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hanafuda",
        "situacao": "ok",
        "texto": "Hanafuda (花札; lit. 'flower cards')) are a type of Japanese playing cards. They are typically smaller than Western playing cards, only 5.4 by 3.2 centimetres (2.1 by 1.3 in), but thicker and stiffer. On the face of each card is a depiction of plants, tanzaku (短冊; 'paper strips'), animals, birds, or man-made objects. One single card depicts a human. The back side is usually plain, without a pattern \n[…]\nSo as a loophole to the ban, early hanafuda were made to have old poems on some of the cards, disguising them as Uta-garuta. Remnants of this can be seen via the tanzaku-ranked cards.\n[…]\nIn 1889, Fusajiro Yamauchi founded Nintendo for the purposes of producing and selling hand-crafted hanafuda. Nintendo has focused on video games since the 1970s but continues to produce cards in Japan, including themed sets based on Mario, Pokémon, and Kirby. The Koi-Koi game played with hanafuda is included in Nintendo's own Clubhouse Games (2006) for the Nintendo DS, and Clubhouse Games: 51 Worldwide Classics (2020) for the Nintendo Switch.\n[…]\nThough modern Japanese hanafuda is primarily made today by either of the long-standing Oishi Tengudo (1800) or Nintendo (1889), dozens of others have manufactured hanafuda, such as Angel, Tamura Shogundo, Matsui Tengudo, Ace, Maruē, and many more.\n[…]\nIn Unicode, a symbol to represent hanafuda is available at U+1F3B4 🎴 FLOWER PLAYING CARDS in the Miscellaneous Symbols and Pictographs block. This character is typically rendered as the Full Moon with Red Sky card. It was added as part of Unicode 6.0 in 2010 for compatibility with a KDDI emoji character, and was added to Unicode Emoji 1.0 in 2015.\n[…]\nCategory:Films about hanafuda\n[…]\nCategory:Hanafuda manufacturers\n[…]\nMedia related to Hanafuda at Wikimedia Commons\n[…]\nThe dictionary definition of hanafuda at Wiktionary\n[…]\nHanafuda   at BoardGameGeek\n[…]\nHanafuda rules\n[…]\nCommentary on Hanafuda cards, including Korean variants"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Nintendo",
        "situacao": "ok",
        "texto": "Nintendo Co., Ltd. is a Japanese multinational video game company headquartered in Kyoto. It develops, publishes, and manufactures both video games and video game consoles.\n[…]\nThe history of Nintendo began when craftsman Fusajiro Yamauchi founded the company in 1889 to produce handmade hanafuda playing cards. After venturing into various lines of business and becoming a public company, Nintendo began producing toys in the 1960s, and later video games. Nintendo developed its first arcade games in the 1970s, and distributed its first system, the Color TV-Game in 1977.\n[…]\nNintendo was founded as Nintendo Koppai on 23 September 1889 by craftsman Fusajiro Yamauchi in Shimogyō-ku, Kyoto, Japan, as an unincorporated establishment, to produce and distribute Japanese playing cards, or karuta (かるた; from Portuguese carta, 'card'), most notably hanafuda (花札, 'flower cards').\n[…]\nNintendo reached an agreement with Embracer Group in May 2024 to acquire 100% of the shares in Shiver Entertainment, a company that has specialized in porting triple-A games like Hogwarts Legacy and Mortal Kombat 1 to the Switch, making it a wholly owned subsidiary of Nintendo, subject to closing conditions. In October 2024, the company opened the Nintendo Museum on the site of its former Uji Ogura plant, where it had manufactured playing and hanafuda cards.\n[…]\nSuper Nintendo World\n[…]\nUniversal City Studios, Inc. v. Nintendo Co., Ltd.\n[…]\nSloan, Daniel (2011). Playing to Wiin: Nintendo and the Video Game Industry's Greatest Comeback. Wiley. ISBN 978-0-470-82512-9. OCLC 707935885.\n[…]\n\"Nintendo: Company History\". Nintendo.com. Nintendo of America. 1996. Archived from the original on 5 February 1998."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hanafuda",
        "situacao": "ok",
        "texto": "O hanafuda (em japonês: 花札, em português: \"cartas de flores\") é um baralho japonês de 48 cartas, geralmente feitas de cartão. Suas cartas são menores que as do baralho francês, medindo 5,4 × 3,2 cm. O baralho é dividido em doze naipes de quatro cartas, cada um representando um mês do ano. As cartas trazem ilustrações detalhadas de paisagens japonesas, com uma flor nativa para cada naipe. O verso d\n[…]\nQuando os navios portugueses chegavam ao Japão, as cartas já haviam perdido boa parte de seu tamanho, o que deu às cartas japonesas suas características dimensões reduzidas. Os primeiros baralhos feitos no Japão, chamados de tenshō karuta, eram imitações fiéis desses baralhos, ao ponto dos cavalos dos valetes serem desenhados sem as cabeças, perdidas nas aparas do original durante a viagem. O jogo mais popular era um derivado do ombre renegado, o jogo de baralho mais popular da Europa à época.\n[…]\nO documento mais antigo que cita o hanafuda, ainda sob o nome de hana awase, é datado de 1816, listando-o como um jogo de azar proibido. Enquanto seus antecessores em sua maioria possuíam quatro naipes de doze cartas, o hanafuda traz doze naipes de quatro cartas. Os baralhos só voltariam a ser tolerados pelas autoridades durante a era Meiji.\n[…]\nEm 1889, a Nintendo foi fundada como uma fabricante de hanafuda feito à mão. Apesar de ter mudado seu foco por diversas vezes, a empresa continua fabricando os baralhos até hoje para o mercado japonês.\n[…]\nO hanafuda possui 48 cartas divididas em doze naipes, que representam os meses do ano. Cada naipe é representado por uma flor e possui quatro cartas.\n[…]\nAlgumas cartas do hanafuda contêm texto. Além das cartas da tabela abaixo, as kasu de dezembro geralmente trazem na borda inferior a marca do baralho, de forma semelhante ao ás de espadas do baralho francês. Na Coreia, também é comum sobrepor-se a logomarca do fabricante à lua cheia da hikari de agosto.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Monopoly",
      "descricao": "Jogo de tabuleiro americano de compra e venda de imóveis, lançado pela Parker Brothers em 1935."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "No início do século vinte, Elizabeth Magie criou o jogo que deu origem ao Monopoly. O que ela queria denunciar com ele?",
    "resposta": "A concentração de terras nas mãos de proprietários",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Landlord%27s_Game",
      "https://en.wikipedia.org/wiki/Monopoly_(game)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Landlord%27s_Game",
        "situacao": "ok",
        "texto": "The Landlord's Game is a board game patented in 1904 by Elizabeth Magie as U.S. patent 748,626. A realty and taxation game intended to educate users about Georgism, it is the inspiration for the 1935 board game Monopoly.\n[…]\nScott Nearing, socialist professor of economics at Wharton School of Finance from 1906 to 1915, lived in Arden in 1910, where Magie invented the game, learned about the game and taught it to his students. College students made up their own boards to use with her rules. Various versions of the game popped up over the following years under a variety of names, Monopoly, Finance, and Auction being among them.\n[…]\nRobert Baron had Parker Brothers design its own version, called Fortune, before they began negotiating to purchase Magie's patents, in case the discussion fell apart or she sold to another potential buyer, Dave Knapp, publisher of Finance. Magie held her 1923 patent until 1935, when she sold it to Parker Brothers for $500, equivalent to $11,742 in 2025. The company had recently started distributing Monopoly, which it had purchased from Charles Darrow who claimed to have invented it.\n[…]\nThe claims of Magie's second patent could not include those of the first (now in the public domain) and leaned more towards the single tax theory of play. One common misconception is that Parker Brothers acquired the rights to Magie's original invention of Monopoly play and the unique design by purchasing the later 1924 patent. Parker Brothers acquired Magie's patent to The Landlord's Game but although both patents had the same name they covered different claims.\n[…]\nRalph Anspach's Anti-Monopoly\n[…]\nThe Straight Dope: Was Monopoly originally meant to teach people about the evils of capitalism?"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Monopoly_(game)",
        "situacao": "ok",
        "texto": "Monopoly is a multiplayer economics-themed board game. In the game, players roll two standard dice (or one extra special red die depending on the game) to move their token clockwise around the board, buying and trading properties and railroads and developing them with houses and hotels. Players collect rent from their opponents and aim to drive them into bankruptcy. Money can also be gained or los\n[…]\nThe game is named after the economic concept of a monopoly—the domination of a market by a single entity. A core strategy is to buy up (or trade for) every property of a certain color, or all the railroads. The game is derived from The Landlord's Game, created in 1903 in the United States by Lizzie Magie, as a way to demonstrate that an economy rewarding individuals is better than one where monopolies hold all the wealth.\n[…]\nThe history of Monopoly can be traced back to 1903,when American anti-monopolist Lizzie Magie created a game called  Landlord's that she hoped would explain the single-tax theory of Henry George as laid out in his book Progress and Poverty. She devised the key features of the game. It was meant as an educational tool to illustrate the negative aspects of concentrating land in private monopolies. She took out a patent in 1904.\n[…]\nMagie created two sets of rules: an anti-monopolist set in which all were rewarded when wealth was created, and a monopolist set in which the goal was to create monopolies and crush opponents.\n[…]\nBesides demonstrating the dangers of land rents and monopolies, Lizzie Magie also intended The Landlord's Game for children as a teaching tool to learn how to add and subtract through the usage of paper money, which was inherited by Monopoly and the vast majority of its spin-offs. However, some Monopoly variations use bank cards instead of paper money.\n[…]\nworldofmonopoly.com Monopoly history, properties around the world and various editions."
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Curinga",
      "descricao": "Carta extra do baralho, geralmente com a figura de um bobo da corte, que pode substituir outras cartas."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "O curinga surgiu nos Estados Unidos, por volta de 1860, como carta extra para qual jogo?",
    "resposta": "Euchre",
    "distratores": [
      "Pôquer",
      "Bridge",
      "Blackjack"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Joker_(playing_card)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Joker_(playing_card)",
        "situacao": "ok",
        "texto": "The Joker is a playing card found in most modern French-suited card decks, as an addition to the standard four suits (Clubs, Diamonds, Hearts, and Spades). Since the second half of the 20th century, they have also been found in Spanish- and Italian-suited decks, excluding stripped decks.\n[…]\nThe idea behind the three top cards in Euchre, the game popular credited as the creator of the Joker appears to have originated from Germany where the games Juckerspiel and Bester Bube (\"Best Bower\") also used Jacks as best, right and left bowers. It is also believed that the term \"Joker\" comes from Juckerspiel, which is also known as Jucker, the original German spelling of Euchre. One British manufacturer, Charles Goodall, was manufacturing packs with Jokers for the American market in 1871.\n[…]\nOther games, such as a 25‑card variant of Euchre which uses the Joker as the highest trump, make it one of the most important in the game. Often, the Joker is a wild card, which allows it to represent other existing cards. The term \"Joker's wild\" originates from this practice. However, in Zwicker, Jokers are higher value, matching and scoring cards while, in one variant, a normal suit card is the only one that is wild.\n[…]\nThe Joker can be an extremely good or extremely bad card to have, depending on the game you are playing. In Euchre it is often used to represent the highest trump. In Rummy it is wild. However, in the children's game of Old Maid, a solitary Joker represents the Old Maid, the card to be avoided.\n[…]\nEuchre, 500: As the highest trump or \"top Bower\".\n[…]\nPyramid: the Joker is discarded together with any available card. In this case, the stock is dealt one card at time and can be reused twice."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Curinga_%28baralho%29",
        "situacao": "ok",
        "texto": "Curinga (português brasileiro) ou jóquer (português europeu), também conhecido como coringa ou melé em algumas regiões, é a carta do baralho que, em certos jogos, muda de valor conforme a combinação de cartas que o jogador tem em mãos.\n[…]\nO Coringa é uma carta de baralho encontrada na maioria dos baralhos modernos de cartas francesas, como um acréscimo aos quatro naipes padrão (Paus, Ouros, Copas e Espadas). A partir da segunda metade do século XX, também foi encontrado em baralhos espanhóis e italianos, excluindo baralhos despojados.\n[…]\nO Coringa teve origem nos Estados Unidos durante a Guerra Civil e foi criado como uma carta de trunfo para o jogo de Euchre.\n[…]\nDesde então, foi adotado em muitos outros jogos de cartas, onde muitas vezes atua como uma carta coringa, mas pode ter outras funções, como a carta mais poderosa, uma carta que faz outro jogador perder uma rodada, a carta de menor valor, a de maior valor ou uma carta com um valor diferente das demais do baralho (veja, por exemplo, o Zwicker, que tem seis Coringas com essa função).\n[…]\nNormalmente, o curinga é uma carta de conteúdo especial, com o desenho de um palhaço estilizado, às vezes com o escrito em inglês joker, o jocoso, brincalhão, do latim iocōsus. Porém, em muitos jogos, outras cartas podem assumir o valor de curinga, como o dois no buraco. No jogo do pôquer, por exemplo, a carta muda de valor segundo a combinação de cartas que o parceiro tem na mão.\n[…]\n\"Curinga\" origina-se do termo quimbundo kuringa, que significa \"matar\".\n[…]\nCaracteres-curinga",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Ás de espadas",
      "descricao": "Carta do baralho francês, o ás do naipe de espadas, muitas vezes impressa com desenho ornamentado."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Por que, em muitos baralhos, o ás de espadas tem um desenho bem mais caprichado que o dos outros ases?",
    "resposta": "Por causa de um antigo imposto inglês",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ace_of_spades"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ace_of_spades",
        "situacao": "ok",
        "texto": "The ace of spades (also known as the Spadille, Old Frizzle, Lancer, and Death Card) is traditionally the highest and most valued card in the deck of playing cards. The actual value of the card varies from game to game.\n[…]\nThe ace of spades has been employed on several occasions in the theatre of war. In the First World War, the 12th (Eastern) Division of the British Army used the Ace of spades symbol as their insignia. In the Second World War, the 25th Infantry Division of the Indian Army used an Ace of Spades on a green background as their insignia.\n[…]\nThis custom was said to be so common that the United States Playing Card Company was asked by Charlie Company, 2nd Battalion, 35th Infantry Regiment to supply crates of that single card in bulk. The plain white tuck cases were marked \"Bicycle Secret Weapon\", and the cards were deliberately scattered in villages and in the jungle during raids. The ace of spades, while not a symbol of superstitious fear to the Viet Cong forces, did help the morale of American soldiers. Some U.S.\n[…]\nAce cards are used to symbolise asexuality, in reference to the phonetic shortening of that word. The ace of spades symbolises aromantic asexuality; those who are both asexual and alloromantic use the ace of hearts.\n[…]\nVarious idioms involving the ace of spades include \"black as the ace of spades,\" which may refer either to completely black; totally without light or colour, colour, race, (lack of) morality, or (lack of) cleanliness in a person.\n[…]\nThe French expression fagoté comme l'as de pique translates to \"(badly) dressed like the ace of spades.\"\n[…]\nThe ace of spades is encoded into Unicode with the code point U+1F0A1, as part of the playing cards Unicode block.\n[…]\nBlack Spades"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/%C3%81s_de_espadas",
        "situacao": "ok",
        "texto": "O Ás de Espadas (também conhecido como o Espadilha ou Carta da Morte) é, tradicionalmente, a carta mais alta do baralho em vários jogos e contextos. O real valor do cartão varia de jogo para jogo.\n[…]\nO desenho ornamentado do ás de espadas, comum em pacotes de hoje, originou-se a partir do século XVII, quando Jaime I e, mais tarde, a Rainha Anne impuseram leis que exigiam que o ás de espadas tivesse uma insígnia da casa de impressão. Imposto de selo, uma ideia importada para a Inglaterra por Charles I, foi estendido para jogar cartas em 1711 pela Rainha Anne e durou até 1960.\n[…]\nAo longo dos anos, muitos métodos foram usados para mostrar que o imposto tivesse sido pago. A partir de 1712 em diante, uma das cartas no pacote, normalmente, o ás de espadas, era carimbado à mão. Em 1765, o carimbo feito à mão foi substituída pela impressão de um ás de espadas oficial pelo escritório de selos, incorporando o brasão real. Em 1828, a taxa do Ás de Espadas (conhecida como \"Old Frizzle\") foi impressa para indicar a taxa de um shilling tinha sido pago.\n[…]\nEm 2003, um baralho de cartas de iraquianos mais procurados foi entregue aos soldados dos EUA durante a Operação Liberdade no Iraque, com cada carta exibindo a foto de um oficial iraquiano procurado. Saddam Hussein, o alvo mais importante, recebeu a carta \"Ás de Espadas\".\n[…]\nDentro da comunidade assexual, o Ás de Espadas representa a assexualidade e arromanticidade, mais especificamente indivíduos assexuais arromânticos, com base na abreviação homófona em inglês, ace.\n[…]\nU+1F0A1 🂡 a carta de jogo Ás de Espada faz parte das cartas de baralho em Unicode.\n[…]\nCartas de baralho dos iraquianos mais procurados",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Paciência do Windows",
      "descricao": "Versão digital do jogo de cartas Paciência incluída pela Microsoft no Windows a partir de 1990."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1990, a Microsoft incluiu o jogo Paciência no Windows com um objetivo prático, além de divertir. Qual era?",
    "resposta": "Ensinar a usar o mouse",
    "fonte": [
      "https://en.wikipedia.org/wiki/Microsoft_Solitaire"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Microsoft_Solitaire",
        "situacao": "ok",
        "texto": "Solitaire is a computer game included with Microsoft Windows, based on a card game of the same name, also known as Klondike. Its original version was programmed by Wes Cherry, and the cards were designed by Susan Kare. It has been called the most prolific PC game of all time due to its inclusion in Windows.\n[…]\nMicrosoft intended Solitaire \"to soothe people intimidated by the operating system,\" and at a time when many users were still unfamiliar with graphical user interfaces, it proved useful in familiarizing them with the use of a mouse, such as the drag-and-drop technique required for moving cards.\n[…]\nIn October 2012, along with the release of the Windows 8 operating system, Microsoft released a new version of Solitaire called Microsoft Solitaire Collection. This version, game designed by Microsoft Studios, with visual design led by William Bredbeck, and developed by Arkadium, is advertisement supported and introduced many new features to the game.\n[…]\nMicrosoft Solitaire celebrated its 25th anniversary on May 18, 2015 with a tournament broadcast on the Microsoft campus and broadcast the main event on Twitch.\n[…]\nIn 2019, The Strong National Museum of Play inducted Microsoft Solitaire to its World Video Game Hall of Fame.\n[…]\nOn Windows 8, Windows 10, Windows 11, Windows Phone, Android and iOS, the game is issued as Microsoft Solitaire Collection, where in addition to Klondike four other game modes were featured, Spider, FreeCell (both of which had been previously featured in versions of Windows as Microsoft Spider Solitaire and Microsoft FreeCell), Pyramid, and TriPeaks (both of which were previously part of the Microsoft Entertainment Pack series, the former under the name Tut's Tomb).\n[…]\nList of games included with Windows"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Scrabble",
      "descricao": "Jogo de tabuleiro de formar palavras com peças de letras, criado pelo arquiteto americano Alfred Butts."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Para decidir quantas peças de cada letra o Scrabble teria, o inventor Alfred Butts contou as letras de qual jornal?",
    "resposta": "The New York Times",
    "distratores": [
      "The Washington Post",
      "Chicago Tribune",
      "The Boston Globe"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Scrabble"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Scrabble",
        "situacao": "ok",
        "texto": "Scrabble is a word game in which two to four players score points by placing tiles, each bearing a single letter, onto a game board divided into a 15×15 grid of squares. The tiles must form words that, in crossword fashion, read left to right in rows or downward in columns and are included in a standard dictionary or lexicon.\n[…]\nAmerican architect Alfred Mosher Butts invented the game in 1931. Scrabble is produced in the United States and Canada by Hasbro, under the brands of both of its subsidiaries, Milton Bradley and Parker Brothers. Mattel owns the rights to manufacture Scrabble outside the U.S. and Canada.\n[…]\nIn 1931 in Poughkeepsie, New York, the American architect Alfred Mosher Butts created the game as a variation on an earlier word game he invented, called Lexiko. The two games had the same set of letter tiles, whose distributions and point values Butts worked out by performing a frequency analysis of letters from various sources, including The New York Times. The new game, which he called Criss-Crosswords, added the 15×15 gameboard and the crossword-style gameplay.\n[…]\nThe \"box rules\" included in each copy of the North American edition have been edited four times: in 1953, 1976, 1989, and 1999.\n[…]\n{\\displaystyle ({\\color {Cyan}{\\bf {2}}}\\times 10+1+1+1+1)\\times {\\color {CarnationPink}{\\bf {2}}}=48}\n[…]\n{\\displaystyle (3+1+1+10+1+1+1+1)\\times {\\color {red}{\\bf {3}}}=57}\n[…]\n{\\displaystyle (3+1+2+1+1+1+1)\\times {\\color {CarnationPink}{\\bf {2}}}\\times {\\color {CarnationPink}{\\bf {2}}}=40}\n[…]\n{\\displaystyle 3+4+1+({\\color {blue}{\\bf {3}}}\\times 4)=20}\n[…]\n{\\displaystyle 1+({\\color {blue}{\\bf {3}}}\\times 4)=13}\n[…]\n{\\displaystyle 8+({\\color {Cyan}{\\bf {2}}}\\times 1)+3+5+1+({\\color {Cyan}{\\bf {2}}}\\times 0)+1=20}\n[…]\nAssociation of British Scrabble Players\n[…]\nScrabble Australia\n[…]\nWorld English-Language Scrabble Players Association (WESPA)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Scrabble",
        "situacao": "ok",
        "texto": "Scrabble (mais conhecido no Brasil com o nome de palavras-cruzadas) é um jogo de tabuleiro em que dois a quatro jogadores procuram marcar pontos formando palavras interligadas, usando pedras com letras num quadro dividido em 225 casas (15 x 15).\n[…]\nO Scrabble foi inventado em 1938, durante a Grande Depressão, por Alfred Mosher Butts, um arquiteto de Nova York, na época desempregado. Butts desenvolveu a ideia a partir de um outro jogo de palavras também criado por ele, chamado Lexiko, e chamou-o originalmente 'Criss-cross'.\n[…]\nA fabricante de jogos Estrela chegou a produzir uma variante do tabuleiro em plástico e com ranhuras, com letras em peças plásticas encaixáveis em cima das ranhuras do tabuleiro e em outras peças. Atualmente o jogo é distribuído no Brasil pela Xalingo, com o nome palavras-cruzadas e pela Hasbro, com o seu nome internacional.\n[…]\n0 pontos: Peças brancas ×2\n[…]\nO valor de cada peça é indicado com valores de pontos (entre 1 e 10, com espaços em branco valendo zero pontos), e a pontuação de cada nova palavra formada é igual à soma dos valores dos pontos das letras dessa palavra. Se uma jogada cobrir quaisquer quadrados premium (como quadrados DLS ou TWS), o valor em pontos da letra ou palavra correspondente é multiplicado por 2 ou 3, respectivamente. A estrela central também é um quadrado DWS.\n[…]\nTodos os jogadores podem usar a sua vez para trocar uma ou todas as pedras que têm no seu suporte. Para fazê-lo, têm que colocar as pedras que nao querem sobre a mesa, viradas para baixo, retirar do saco quantas quiser trocar e depois devolver aquelas trocadas. Se o jogador usar a sua vez para trocar pedras, perde a vez. A escolha pela troca de peças é feita no início da jogada, ou se formam palavras ou se trocam as pedras.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Tarô",
      "descricao": "Baralho com arcanos ilustrados surgido na Itália no século quinze, hoje associado à adivinhação."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Hoje associado à adivinhação, o tarô surgiu no norte da Itália, no século quinze. Para que ele foi criado?",
    "resposta": "Para jogar um jogo de cartas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Tarot"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tarot",
        "situacao": "ok",
        "texto": "Tarot (, first known as trionfi and later as tarocchi or tarocks) is a set of playing cards used in Tarot card games and fortune-telling or divination. From at least the mid-15th century, the tarot was used to play trick-taking card games such as Tarocchini. From their Italian roots, tarot games spread to most of Europe, evolving into new forms including German Grosstarok and modern examples such \n[…]\nTarot cards, then known as tarocchi (Italian), first appeared in Ferrara and Milan in northern Italy, with the Fool and 21 trumps (then called trionfi) being added to the standard Italian pack of four suits: batons, coins, cups and swords. Scholarship has established that early European playing cards were probably based on the Egyptian Mamluk deck invented in or before the 14th century, which followed the introduction of paper from Asia into Western Europe.\n[…]\nThe word \"tarot\" and German Tarock derive from the Italian Tarocchi, the origin of which is uncertain, although taroch was used as a synonym for foolishness in the late 15th and early 16th centuries. The decks were known exclusively as Trionfi during the fifteenth century. The new name first appeared in Brescia around 1502 as Tarocho. During the 16th century, a new game played with a standard deck but sharing a very similar name (Trionfa) was quickly becoming popular.\n[…]\nThe earliest evidence of a tarot deck used for cartomancy comes from an anonymous manuscript from around 1750 which documents rudimentary divinatory meanings for the cards of the Tarocco Bolognese. The popularization of esoteric tarot started with Antoine Court and Jean-Baptiste Alliette (Etteilla) in Paris during the 1780s, using the Tarot of Marseilles.\n[…]\nBerti, Giordano (2025). The History of Tarot.Thruth and Legends behind the World's Most Enigmatic Cards. Torino: Rinascimento Italian Style Art. ISBN 9798275213072."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tar%C3%B4",
        "situacao": "ok",
        "texto": "O tarô (do francês, tarot) é um oráculo e baralho de uso recreativo e esotérico utilizado majoritariamente no século XVIII, geralmente composto por 78 cartas. Há relatos de seu uso pela nobreza italiana desde o período renascentista e suas regras oficiais são publicadas pela Federação Francesa de Tarot.\n[…]\nAs cartas de tarô surgiram entre os séculos XV e XVI no norte da Itália, e foram criadas para um jogo de mesmo nome, que era jogado pelos nobres e pelos senhores das casas mais tradicionais da Europa continental.\n[…]\nAs cartas de tarô são muito usadas na Europa em jogos de cartas, como o Tarocchini italiano e o Tarot francês. Nos países lusófonos, onde esse jogo é bastante desconhecido, as cartas de tarô são usadas principalmente para uso divinatórios, para o qual os trunfos e o curinga são conhecidos como arcanos maiores e as cinquenta e seis cartas de naipe são arcanos menores. Os significados divinatórios são derivados principalmente da Cabala — vertente mística do judaísmo — e da alquimia medieval.\n[…]\nO que faz do baralho de Tortona mais semelhante ao tarô que os outros baralhos descritos na época é obviamente a presença de cartas de trunfo no conjunto. Cerca de vinte e cinco anos depois, Jacopo Antonio Marcello, um contemporâneo de Da Tortona, denominou-os de ludus triumphorum, ou \"jogo dos triunfos\".\n[…]\nCom o passar do tempo, diferentes regiões desenvolveram versões do jogo que utilizam baralhos incompletos ou adaptados, dando origem a maços especializados. Um baralho completo de 78 cartas, como o Tarot Nouveau, pode ser usado em qualquer jogo da família de Triunfos. Já os baralhos de tarock austríacos e húngaros e os de tarocco italianos geralmente contêm um número menor de cartas (54, 62 ou 66), adequados apenas às variantes locais específicas.\n[…]\nTarot nouveau",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Henrique Mecking",
      "descricao": "Enxadrista brasileiro nascido em Santa Cruz do Sul, conhecido como Mequinho, que esteve entre os melhores do mundo nos anos setenta."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "No fim dos anos setenta, que doença afastou do xadrez o gaúcho Henrique Mecking, o Mequinho, então entre os melhores jogadores do mundo?",
    "resposta": "Miastenia grave",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Henrique_Mecking",
      "https://en.wikipedia.org/wiki/Henrique_Mecking"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Henrique_Mecking",
        "situacao": "ok",
        "texto": "Henrique Costa Mecking (Santa Cruz do Sul, 23 de janeiro de 1952), mais conhecido como Mequinho, é um enxadrista e teólogo católico brasileiro. Foi o primeiro grande mestre de xadrez da América Latina e é amplamente reconhecido como o maior enxadrista brasileiro de todos os tempos. Em 1977, durante seu auge, foi colocado como o terceiro melhor jogador do mundo no ranking da FIDE.\n[…]\nDurante a década de 1970, disputou por duas vezes o Torneio de Candidatos e foi atleta do Flamengo (tendo seu nome registrado na Calçada da Fama do Clube de Regatas do Flamengo). Em 1978, foi diagnosticado com miastenia grave e teve que se afastar de torneios competitivos, o que prejudicou a sua carreira. O seu rating ELO máximo foi de 2 635 pontos.\n[…]\nUma doença grave, - a miastenia grave, que compromete seriamente o sistema nervoso e os músculos - fez Mequinho abandonar as competições em 1978. Chegou a iniciar sua participação no Torneio Interzonal do Rio de Janeiro de 1979, em uma tentativa de classificar-se para o Torneio dos Candidatos pela terceira vez consecutiva, mas, atendendo a ordens médicas, deixou a competição antes da conclusão da segunda rodada. Depois disso afastou-se dos tabuleiros por mais de dez anos.\n[…]\nNo estágio mais grave da doença passou a frequentar a Renovação Carismática Católica. Após superar a doença, passou a se dedicar integralmente à religião, mas sempre alimentou a esperança de voltar a jogar xadrez. Em 1981, publicou o livro \"Como Jesus Cristo salvou a minha vida\" e formou-se em filosofia e teologia católica.\n[…]\nBobby Fischer x Henrique Mecking. Palma de Maiorca Interzonal (1970). Ataque Nimzo-Larsen: Variação Clássica (A01 ). O match ganhou repercussão internacional. Mecking ocupava o 3 lugar dos melhores enxadristas do mundo da FIDE.\n[…]\n1977 – Terceiro melhor jogador de xadrez do mundo pelo ranking da Federação Internacional de Xadrez (ELO 2635);"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Henrique_Mecking",
        "situacao": "ok",
        "texto": "Henrique Costa Mecking (born 23 January 1952), also known as Mequinho, is a Brazilian chess grandmaster, and was one of the leading players in the world in the 1970s. He was a chess prodigy, drawing comparisons to Bobby Fischer, although he did not achieve the International Grandmaster title until 1972. He won the Interzonals of Petropolis 1973 and Manila 1976. His highest FIDE rating is 2635, ach\n[…]\nMecking played for Brazil in the Chess Olympiads of 1968, 1974, 2002 and 2004.\n[…]\nHe was subsequently eliminated from the Candidates Tournament in the quarterfinals, after losing his match against Korchnoi. Still, from this time (in the aftermath of Bobby Fischer's effective retirement in 1972) until 1979, Mecking was the strongest player born in the West.\n[…]\nMecking is a convert to Catholicism, to which he credits the improvement of his medical condition. He is a member of the Catholic charismatic renewal.\n[…]\nMecking vs. Bobby Fischer, Buenos Aires (1970); Grünfeld Defense, ½–½.\n[…]\nMark Taimanov vs. Mecking, Palma de Mallorca Interzonal (1970); Nimzo-Indian Defense, 0–1.\n[…]\nMecking vs. Mikhail Tal, Las Palmas (1975); Najdorf Sicilian, 1–0.\n[…]\nVasily Smyslov vs. Mecking, Petrópolis Interzonal (1973); English Four Knights, 0–1.\n[…]\nMecking vs. Viktor Korchnoi, Sousse Interzonal (1967); King's Indian Defense, 1–0.\n[…]\nMecking vs. Aivars Gipslis, Sousse Interzonal (1967); Bogo-Indian Defense, 1–0. A game from Mecking's first Interzonal, played when he was 15 years old.\n[…]\nHenrique Mecking rating card at FIDE\n[…]\nHenrique Mecking chess games at 365Chess.com\n[…]\nHenrique Mecking player profile and games at Chessgames.com\n[…]\nHappy Birthday Mequinho! Archived 2013-05-30 at the Wayback Machine Chessdom\n[…]\nChess – \"Boy Wonder\" Challenges the Master – 1969, a contemporary video report by British Movietone on the 1969 Hastings International Chess Congress. Mecking, then fourteen years old, features."
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Jogo do bicho",
      "descricao": "Jogo de apostas brasileiro baseado numa tabela de animais, criado em 1892 no Rio de Janeiro."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1892, o Barão de Drummond criou o jogo do bicho no Rio de Janeiro. Qual era o objetivo original dele?",
    "resposta": "Arrecadar dinheiro para seu zoológico",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Jogo_do_bicho"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Jogo_do_bicho",
        "situacao": "ok",
        "texto": "O jogo do bicho é uma modalidade de loteria ilegal amplamente difundida no Brasil, organizada de maneira informal e não regulamentada no país. Baseado na associação de números a 25 animais, o jogo permite apostas em diferentes combinações numéricas ou em animais específicos. Cada um dos 25 animais tem quatro números correspondentes, e as opções de apostas e premiações variam conforme as combinaçõe\n[…]\nA loteria surgiu no Rio de Janeiro em 1892, criada por João Batista Viana Drummond, proprietário do Jardim Zoológico de Vila Isabel, com autorização do poder público. Inicialmente consistia em sorteios diários realizados dentro do zoológico, com os visitantes recebendo bilhetes contendo imagens de animais. Sua fama levou à expansão do jogo de azar para fora do parque, com bilhetes vendidos em diversos pontos da cidade.\n[…]\nAs raízes do jogo do bicho contemporâneo situam-se no Rio de Janeiro entre o final do período monárquico brasileiro e o início da era republicana. Criado pelo empresário João Batista Viana Drummond, o jogo surgiu inicialmente dentro do Jardim Zoológico de Vila Isabel, fundado por ele em 1888. Para incrementar as receitas do zoológico, Drummond obteve permissão em 1890 para explorar \"jogos públicos lícitos\".\n[…]\nO sucesso da loteria foi imediato, gerando grande popularidade e atraindo tanto a elite quanto o público popular. O jogo se espalhou pela cidade com a ajuda de intermediários e comerciantes, criando uma rede de apostas além do zoológico. Entre 1892 e 1894, o jogo era legal e controlado por Drummond, mas logo fugiu ao controle, com comerciantes criando operações próprias de apostas.\n[…]\nO zoológico da Vila Isabel entrou em declínio, e o jogo do bicho passou a ser realizado clandestinamente por redes de banqueiros que continuaram a desafiar a repressão das autoridades nas décadas seguintes.\n[…]\nOs números atuais do jogo são os seguintes:"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Risk",
      "descricao": "Jogo de tabuleiro de estratégia militar e conquista de territórios, criado na França em 1957, que inspirou o War brasileiro."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Que cineasta francês, diretor do curta O Balão Vermelho, inventou o jogo de estratégia que deu origem ao War?",
    "resposta": "Albert Lamorisse",
    "distratores": [
      "Jacques Tati",
      "François Truffaut",
      "Jean Renoir"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Risk_(game)",
      "https://en.wikipedia.org/wiki/Albert_Lamorisse"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Risk_(game)",
        "situacao": "ok",
        "texto": "Risk is a strategy board game of diplomacy, conflict and conquest for two to six players. The standard version is played on a board depicting a political map of the world, divided into 42 territories, which are grouped into six continents. Turns rotate among players who control armies of playing pieces with which they attempt to capture territories from other players, with results determined by di\n[…]\nRisk was invented in 1957 by Albert Lamorisse; it became one of the most popular board games in history and inspired other popular games such as Axis & Allies and Settlers of Catan. It is still in production by Hasbro with numerous editions and variants with popular media themes and different rules, including PC software versions, video games, and mobile apps.\n[…]\nRisk was invented by French film director Albert Lamorisse and originally released in 1957 as La Conquête du Monde (The Conquest of the World) in France. It was bought by Parker Brothers and released in 1959 with some modifications to the rules as Risk: The Continental Game. In 1975, Parker Brothers retitled the game as Risk: The Game of Global Domination. Some time between Hasbro's acquisition of the Parker Brothers brand in 1991 and 2026,  Risk was rebranded under \"Hasbro Gaming\".\n[…]\nThe mission cards each specifying some secret mission (something less than 'conquer the world') are used in the Secret Mission Risk rule variant.\n[…]\nIf the conquering player has six or more Risk cards after taking the cards of another player, the cards must be immediately turned in for reinforcements until the player has fewer than five cards and then may continue attacking.\n[…]\nRisk: Europe (2016)\n[…]\nRisk Strike: Game of Thrones (2025)\n[…]\nRealpolitik, a play-by-mail game compared by two 1990s reviewers to Risk\n[…]\nHonary, E. (2007). Total Diplomacy: The Art of Winning RISK. North Charleston, SC: BookSurge Publishing. ISBN 978-1419661938.\n[…]\nRisk   at BoardGameGeek"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Albert_Lamorisse",
        "situacao": "ok",
        "texto": "Albert Lamorisse (French: [lamɔʁis]; 13 January 1922 – 2 June 1970) was a French filmmaker, film producer, and writer of short films which he began making in the late 1940s.\n[…]\nLamorisse was born in Paris, France. He first came into prominence – just after Bim  (1950) – for directing and producing White Mane (1953). This is a short film that tells a fable of how a young boy befriends an untamable wild white stallion in the marshes of Camargue (the Petite Camargue) in Southern France.\n[…]\nLamorisse also wrote, directed and produced the films Stowaway in the Sky (1960) and Circus Angel, as well as the documentaries Versailles and Paris Jamais Vu. In addition to films, he created the popular strategy board game Risk in 1957, originally with the title La Conquête du Monde (The Conquest of the World). In the mid-1960s Lamorisse shot parts of The Prospect of Iceland, a documentary about Iceland, which was made by Henry Sandoz and commissioned by NATO.\n[…]\nAlbert and Claude Lamorisse had three children named Pascal, Sabine, and Fanny. Pascal and Sabine were featured in The Red Balloon.\n[…]\nCannes Film Festival: Palme d'Or, White Mane, Best Short Film, Albert Lamorisse; 1953.\n[…]\nPrix Jean Vigo: Prix Jean Vigo, White Mane, Short Film, Albert Lamorisse; 1953.\n[…]\nPrix Louis Delluc: Prix Louis Delluc; The Red Balloon, Albert Lamorisse; 1956.\n[…]\nCannes Film Festival: Palme d'Or du court métrage/Golden Palm; The Red Balloon, Best Short Film, Albert Lamorisse; 1956.\n[…]\nAcademy Awards: Oscar; The Red Balloon, Best Writing, Best Original Screenplay, Albert Lamorisse; 1957.\n[…]\nAlbert Lamorisse at IMDb\n[…]\nAlbert Lamorisse at Google Books\n[…]\nAlbert Lamorisse at Cinema Encyclopedie (in French)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Risco_%28jogo%29",
        "situacao": "ok",
        "texto": "Risco é um jogo de tabuleiro e de estratégia, produzido pela Parker Brothers (actualmente uma subsidiária da Hasbro). Foi inventado pelo realizador de cinema francês Albert Lamorisse e foi inicialmente lançado em 1957, como La Conquête du Monde (\"A Conquista do Mundo\"), em Francês.\n[…]\nUma partida de Risk tem de 3 a 5 jogadores, decorrendo num tabuleiro representando um mapa politico do mundo, dividido em 42 territórios agrupados em 6 continentes. Os jogadores capturam territórios uns dos outros jogando dados e obtendo uma pontuação mais elevada. Vence quem conquistar três objetivos do jogo. Estes objetivos são divididos entre principais e secundários (os objetivos principais tem uma dificuldade mais elevada).\n[…]\nEm Portugal, o jogo foi introduzido como Risco, e atualmente é comercializado pela Hasbro com o nome em inglês. No Brasil é comercializado um jogo muito semelhante chamado War.\n[…]\nJogo de mesa\n[…]\nJogo de tabuleiro",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Uno",
      "descricao": "Jogo de cartas americano de descarte por cor e número, criado em 1971."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "O Uno foi criado em 1971, no estado americano de Ohio, por Merle Robbins. Qual era a profissão dele?",
    "resposta": "Barbeiro",
    "distratores": [
      "Carteiro",
      "Taxista",
      "Professor"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Uno_(card_game)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Uno_(card_game)",
        "situacao": "ok",
        "texto": "Uno ( ; from Spanish and Italian for 'one'), stylized in all caps as UNO, is a proprietary American shedding-type card game originally developed in 1971 by Merle Robbins in Reading, Ohio, a suburb of Cincinnati, that housed International Inc., a gaming company acquired by Mattel on January 23, 1992.\n[…]\nThe game was originally developed in 1971 by Merle Robbins in Reading, Ohio, a suburb of Cincinnati. When his family and friends began to play more and more, he and his family mortgaged their home to raise $8,000 to have 5,000 copies of the game made. He sold it from his barbershop at first, and local businesses began to sell it as well.\n[…]\nRobbins later sold the rights to Uno to a group of friends headed by Robert Tezak, a funeral parlor owner in Joliet, Illinois, for $50,000 plus royalties of 10 cents per game. Tezak formed International Games, Inc., to market Uno, with offices behind his funeral parlor. The games were produced by Lewis Saltzman of Saltzman Printers in Maywood, Illinois.\n[…]\nThe UNO slot machine featured a basic vertical 3 wheel system, along with 3 additional horizontal wheels that would activate when 3 UNO bonus symbols in any position were landed with the maximum bet wagered. Meanwhile, the UNO Video Slot Machine featured a 5 reel, 15 line Video system with additional UNO Attack and UNO Triple bonus games awarded based on the symbols landed. Both versions saw limited releases to various Native American gaming centers."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Uno_%28jogo_de_cartas%29",
        "situacao": "ok",
        "texto": "Uno (estilizado UNO) é um jogo de cartas estadunidense com detalhes especiais (que o diferenciam do Mau-mau), desenvolvido por Merle Robbins e familiares (com a participação de Samuel Sosthenes) em 1971. Hoje é vendido nos Estados Unidos pela Mattel e no Brasil pela Copag. Uno é um dos jogos de cartas mais famosos e mais vendidos no mundo todo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Jogo da Vida",
      "descricao": "Jogo de tabuleiro em que os jogadores percorrem etapas da vida, como carreira, casamento e aposentadoria."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "O Jogo da Vida descende de um jogo de 1860 criado por um americano cujo nome virou o de uma grande fabricante de jogos. Quem?",
    "resposta": "Milton Bradley",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Game_of_Life"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Game_of_Life",
        "situacao": "ok",
        "texto": "The Game of Life, also known simply as Life, is a board game originally created in 1860 by Milton Bradley as The Checkered Game of Life, the first ever board game for his own company, the Milton Bradley Company. The game simulates a person's travels through their life, from early adulthood to retirement, with college if chosen, jobs, marriage, and possible children along the way. Up to six players\n[…]\nThe game was originally created in 1860 by Milton Bradley as The Checkered Game of Life, and was the first game created by Bradley, a successful lithographer. The game sold 45,000 copies by the end of its first year. Like many 19th-century games, such as The Mansion of Happiness by S. B. Ives in 1843, it had a strong moral message.\n[…]\nThe Game of Life, copyrighted by the Milton Bradley Company in 1960, had some differences from later versions. For example, once a player reached the \"Day of Reckoning\" space, they had to choose one of two options. The first was to continue along the road to \"Millionaire Acres,\" if the player believed they had enough money to out-score all opponents. The second option was to try to become a \"Millionaire Tycoon\" by betting everything on one number and spinning the wheel.\n[…]\nExactly seven years after Hasbro acquired the Milton Bradley Company, The Game of Life was updated in 1991 to reward players for good behavior, such as recycling trash and helping the homeless, by awarding players \"Life Tiles\", each of which was worth a certain amount. At the end of the game, players added up the amounts on the tiles to their cash total, and counted towards the final total. The spaces that forced players to go back were removed, starting with this version.\n[…]\nThe Game of Life   at BoardGameGeek\n[…]\nThe Game of Life rules from 1977 at Hasbro.com\n[…]\nThe Game of Life rules from 1991 at Hasbro.com\n[…]\nThe Game of Life rules from 2000 at Hasbro.com\n[…]\nThe Game of Life PS1 instructions"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jogo_da_Vida_%28jogo%29",
        "situacao": "ok",
        "texto": "Jogo da Vida é um jogo de tabuleiro da Estrela.\n[…]\nEstrela e Hasbro, na década de 1970, fecharam um acordo que a empresa americana pudesse lançar seus produtos no Brasil, com adaptações ao mercado local. Nesse contexto, The Game of Life virou Jogo da Vida.\n[…]\nOs direitos autorais do jogo pertencem à Hasbro International, Inc.[carece de fontes]? desde 1992 e o jogo é de autoria de Milton Bradley e Reuben Klamer[carece de fontes]?. Foi trazido ao Brasil em 1986 pela Brinquedos Estrela.\n[…]\n«Página oficial do jogo»\n[…]\nJogo Online (em português)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Magic: The Gathering",
      "descricao": "Jogo de cartas colecionáveis de fantasia lançado em 1993 pela Wizards of the Coast."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "O jogo de cartas colecionáveis Magic, lançado em 1993, foi criado por qual matemático americano?",
    "resposta": "Richard Garfield",
    "fonte": [
      "https://en.wikipedia.org/wiki/Magic:_The_Gathering",
      "https://en.wikipedia.org/wiki/Richard_Garfield"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Magic:_The_Gathering",
        "situacao": "ok",
        "texto": "Magic: The Gathering (colloquially known as Magic or MTG) is a collectible, tabletop, and digital collectible card game created by Richard Garfield. It was released by Wizards of the Coast in 1993 as the company's first trading card game. From 2008 to 2016, over twenty billion Magic cards were printed as the game grew in popularity. For the 2022 fiscal year, Hasbro—the parent company of Wizards of\n[…]\nRichard Garfield had an early attachment to games during his youth: before settling down in Oregon, his father, an architect, had taken his family to Bangladesh and Nepal during his work projects. Garfield did not speak the native languages, but was able to make friends with the local youth through playing cards or marbles.\n[…]\nBy 1993, Garfield and Adkison had gotten everything ready to debut Magic: The Gathering at that year's Gen Con in Milwaukee that August, but did not have the funds for production to have cards shipped to game stores in time. Adkison took a single box of cards with a handful of complete decks to the Wizards booth at Origins Game Fair hoping to secure the funds by demonstrating the game.\n[…]\n1999: Inducted alongside Richard Garfield into the Origins Hall of Fame\n[…]\nIn addition, several individuals including Richard Garfield and Donato Giancola won personal awards for their contributions to Magic.\n[…]\nIn an attempt to avoid breaching copyright and Richard Garfield's patent, each starter deck of Havic had printed on the back side, \"This is a Parody\", and on the bottom of the rule card was printed, \"Do not have each player: construct their own library of predetermined number of game components by examining and selecting [the] game components from [a] reservoir of game components or you may infringe on U.S. Patent No. 5,662,332 to Garfield.\"\n[…]\nGarfield, Richard. \"The expanding worlds of magic\". The Duelist. No. 4. Wizards of the Coast. pp. 15–17.\n[…]\nMagic the Gathering wiki"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Richard_Garfield",
        "situacao": "ok",
        "texto": "Richard Channing Garfield (born June 26, 1963) is an American mathematician, inventor, and game designer. Garfield created Magic: The Gathering, which is considered to be the first collectible card game (CCG). Magic debuted in 1993, and its success spawned many imitations.\n[…]\nMagic: The Gathering launched in 1993. Playtesters began independently developing expansion packs, which were then passed to Garfield for his final edit. In June 1994, Garfield left academia to join Wizards of the Coast as a full-time game designer. Garfield managed the hit game wisely, balancing player experience with business needs and allowing other designers to contribute creatively to the game.\n[…]\nIn 1999, Garfield was inducted into the Adventure Gaming Hall of Fame alongside Magic. He was a primary play tester for the Dungeons & Dragons 3rd edition bookset, released by Wizards in 2000. He eventually left Wizards to become an independent game designer.\n[…]\nAs of 2011, Garfield still sporadically contributes to Magic: The Gathering. More recently, he has created the board games Pecking Order (2006) and Rocketville (2006). The latter was published by Avalon Hill, a subsidiary of Wizards of the Coast. He has shifted more of his attention to video games, having worked on the design and development of Schizoid and Spectromancer as part of Three Donkeys LLC. He has been a game designer and consultant for companies including Electronic Arts and Microsoft.\n[…]\nMagic: The Gathering (1993)\n[…]\nRichard Garfield   at BoardGameGeek\n[…]\nRichard Garfield at the Mathematics Genealogy Project\n[…]\n\"Immer für eine Überraschung gut: Richard Garfield: Der Mann hinter Magic\" (PDF). Amigo Spiele (in German). 2004-01-30. Archived from the original (PDF) on 2007-11-27. Retrieved 2004-12-27."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Magic%3A_The_Gathering",
        "situacao": "ok",
        "texto": "Magic: the Gathering, MTG ou simplesmente Magic, é um jogo de cartas colecionáveis (TCG, Trading Card Game) criado por Richard Garfield, no qual os jogadores utilizam um baralho de cartas construído de acordo com o seu modo individual de jogo para tentar vencer o baralho adversário. Em 2003, na comemoração do aniversário de 10 anos de lançamento do Magic, a revista Games selecionou-o para o seu Ha\n[…]\nPro Tour (PT) é uma das maiores formas de jogo competitivo para o Magic: The Gathering. É constituída por uma série de torneios de pagamento realizado em todo o mundo, cada um exigindo um convite para participar. Todos os prêmios PT um total de $ 230.000 em prêmios, com $ 40.000 para o vencedor. O segundo colocado também recebe Pontos no ranking Pro Tour.\n[…]\nAo longo dos anos, o jogo de cartas colecionáveis foi adquirindo uma densa e intrincada trama de histórias que versam sobre as cartas lançadas nas várias edições e expansões.\n[…]\nExistem programas para jogar magic de forma online. Magic: The Gathering Online é uma alternativa oferecida pela Wizards of the Coast para os jogadores, um mundo virtual onde os jogadores podem trocar, comprar e vender cartas com dinheiro vivo, com as cartas existindo apenas no mundo virtual. É atualmente uma alternativa bastante completa em relação ao jogo jogado cara a cara.\n[…]\nEm 2018 foi lançado pela Wizards Digital Games Studio, Magic: The Gathering Arena, lançado como sucessor de Magic Online. Possui gráficos e jogabilidade melhorados em relação à versão anterior e é possível participar de campeonatos online nos mais diversos estilos de jogo presentes no jogo da vida real. Esta é a versão digital que mais se aproxima de toda a grandiosidade de possibilidades da versão física do jogo.\n[…]\nRichard Garfield, designer do jogo, criou outros jogos famosos, como KeyForge, Battletech e Vampire: The Eternal Struggle.\n[…]\nEm 1995, a Devir Livraria lançou Magic no Brasil.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Campeonato Mundial de Xadrez de 1972",
      "descricao": "Disputa pelo título mundial de xadrez entre o americano Bobby Fischer e o soviético Boris Spassky, conhecida como Match do Século."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em plena Guerra Fria, em 1972, o americano Bobby Fischer tomou o título mundial de xadrez do soviético Boris Spassky. Em que cidade foi o duelo?",
    "resposta": "Reykjavík",
    "fonte": [
      "https://en.wikipedia.org/wiki/World_Chess_Championship_1972"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/World_Chess_Championship_1972",
        "situacao": "ok",
        "texto": "The World Chess Championship 1972 was a match for the World Chess Championship between challenger Bobby Fischer of the United States and defending champion Boris Spassky of the Soviet Union. The match took place in the Laugardalshöll in Reykjavík, Iceland, and has been dubbed the Match of the Century. Fischer became the first US-born player to win the world title. Fischer's win also ended, for a s\n[…]\nJuly 18. The chief arbiter, ensuring the players would proceed to play the third game, appealed to Spassky \"as a sportsman\" to agree to play in a backstage room without cameras and audience. Spassky agreed, but only for one game. Fischer already booked all three flights that would take him from Reykjavik back to New York City, but was persuaded to \"give it [the match] a trial\" with newly established conditions.\n[…]\nThe musical Chess, with lyrics by Tim Rice and music by Björn Ulvaeus and Benny Andersson, tells the story of two chess champions, referred to only as \"The American\" and \"The Russian\". The musical is loosely based on the 1972 World Championship match between Fischer and Spassky.\n[…]\nDuring the 1972 Fischer–Spassky match, the Soviet bard Vladimir Vysotsky wrote an ironic two-song cycle \"Honor of the Chess Crown\". The first song is about a rank-and-file Soviet worker's preparation for the match with Fischer; the second is about the game. Many expressions from the songs have become catchphrases in Russian culture.\n[…]\nFischer–Spassky (1992 match)\n[…]\nRoberts, Richard; Schonberg, Harold C.; Horowitz, Al; Reshevsky, Samuel (1972). Fischer/Spassky • The New York Times Report on the Chess Match of the Century. Bantam Books. ISBN 978-0-553-07667-7.\n[…]\nSteiner, George (1974). Fields of Force: Fischer and Spassky at Reykjavik. Viking Press.\n[…]\nBrief comments by Bobby Fischer on the upcoming 1972 Match video clip\n[…]\n“Spassky v Fischer, Reykjavik, 1972” by Edward Winter"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Campeonato_Mundial_de_Xadrez_de_1972",
        "situacao": "ok",
        "texto": "O título do Campeonato Mundial de Xadrez de 1972 foi disputado entre o então campeão Boris Spassky da União Soviética e o desafiante Bobby Fischer dos Estados Unidos. O match foi realizado em Reiquiavique, capital da Islândia e ficou conhecido como o Match do Século, devido ao contexto em que ocorreu e a polarização entre as duas superpotências da Guerra Fria. A primeira partida foi disputada em 1\n[…]\nO match foi disputado durante a Guerra Fria, e mesmo em um período de crescente distensão, marcou um episódio de polarização entre as duas maiores superpotências da época. A Escola de Xadrez soviética tinha um domínio de 24 anos do título do Campeonato Mundial de Xadrez. Spassky era o mais recente detentor do título em uma linhagem de campeões mundiais de xadrez soviéticos que se iniciou  em 1948.\n[…]\nSpassky já havia jogado dois matches pelo campeonato mundial anteriormente e era mais experiente nesse formato de competição do que Fischer. No match pelo Campeonato Mundial de Xadrez de 1966, Spassky perdeu para Tigran Petrosian. No ciclo do campeonato mundial de 1969, ele venceu os matches contra Efim Geller, Bent Larsen e Viktor Korchnoi ganhando o direito de desafiar Petrosian uma segunda vez. Então Spassky venceu Petrosian por 12½-10½ tornando-se o décimo campeão mundial de xadrez.\n[…]\nFischer também tinha um Rating ELO mais alto do que Spassky. Na lista de classificação da FIDE de julho de 1972, Fischer aparecia com um rating de 2785, 125 pontos à frente do jogador número dois, Spassky, que tinha 2660 pontos. Os resultados recentes de Fischer e seu rating o tornavam favoritos para o match. Outros comentaristas, entretanto, notavam que Fischer nunca havia vencido uma partida contra Spassky.\n[…]\nO match pelo campeonato mundial de xadrez de 1972 foi jogado em uma melhor de 24 partidas. Em caso de empate em 12 a 12, o campeão  Spassky manteria o título.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Jogo Real de Ur",
      "descricao": "Jogo de tabuleiro da antiga Mesopotâmia, com cerca de quatro mil e quinhentos anos, encontrado no cemitério real de Ur."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "O Jogo Real de Ur, com uns quatro mil e quinhentos anos, foi encontrado em tumbas reais no território de qual país atual?",
    "resposta": "Iraque",
    "distratores": [
      "Irã",
      "Egito",
      "Síria"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Royal_Game_of_Ur"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Royal_Game_of_Ur",
        "situacao": "ok",
        "texto": "The Royal Game of Ur is a two-player strategy race board game of the tables family that was first played in ancient Mesopotamia during the early third millennium BC. The game was popular across the Middle East among people of all social strata, and boards for playing it have been found at locations as far away from Mesopotamia as Crete and Sri Lanka. One board, held by the British Museum, is dated\n[…]\nMurray and James Masters argue for paths that render a rosette tile every 4th space; assuming this space allows for an extra roll, a player's piece may make an entire run-through of the board with successive rolls of 4 (the royal game discovered by Woolley was found with 3 binary tetrahedral dice, which when rolled together can only produce 4 different results).\n[…]\nThe Game of Twenty or Game of Twenty Squares is another ancient tables game similar to the Royal Game of Ur. Egyptian gaming boxes often have a board for this game on the opposite side to that for the better-known game of senet. It dates roughly to the period from 1500 BC to 300 BC and is known to have been played in the region that includes Babylon, Mesopotamia and Persia, as well as Egypt.\n[…]\nThe board comprises two distinct sections; a quadrant of 3 × 4 squares, like that in the Ur game, and a row or 'arm' of 8 squares projecting from the central row of the quadrant. It has five rosettes. The rules are not precisely known but it appears likely that players entered all their 5 pieces onto the arm and aimed to bear them off from the sides of the quadrant, perhaps having contested the arm by hitting opposing pieces off.\n[…]\nFinkel, Irving (2007), \"On the Royal Game of Ur,\" in Ancient Board Games in Perspective, ed. Irving Finkel. London: British Museum Press, pp. 16–32.\n[…]\nTom Scott vs Irving Finkel: The Royal Game of Ur – The British Museum\n[…]\nPlay the Royal Game of Ur on GouziGouza"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jogo_Real_de_Ur",
        "situacao": "ok",
        "texto": "O Jogo Real de Ur é um jogo de tabuleiro para dois jogadores, de corrida e estratégia, que foi primeiramente jogado na Mesopotâmia, durante o início do terceiro milênio a.C. Era popular no Oriente Médio, entre todas as classes sociais. Tabuleiros foram encontrados em lugares distantes de sua criação, como Creta e Sri Lanka.\n[…]\nO Jogo Real de Ur recebeu este nome porque foi primeiramente descoberto pelo arqueólogo inglês Leonard Woolley, durante suas escavações no Cemitério Real de Ur, entre 1922 e 1934. Outros exemplares desde então foram encontrados por outros arqueólogos no Oriente Médio. As regras do Jogo Real de Ur, como eram jogadas no século II a.C., acabaram sendo preservadas em uma tabuleta escrita por um rei escriba chamado Iti-Marduque-balatu.\n[…]\nO Jogo Real de Ur foi popular no Oriente Médio. Tabuleiros foram encontrados no Irã, Síria, Egito, Líbano, Sri Lanka, Chipre e Creta. Quatro deles foram encontrados na Tumba de Tutancâmon. Tinham caixas pequenas para guardar os dados e as peças. Muitos deles tinham tabuleiros de senet no lado inverso, com a ideia de que ambos os jogos pudessem ser jogados ao meramente virar o lado do objeto. O jogo era popular entre todas as classes sociais.\n[…]\nUma escavação arqueológica desenterrou vinte e um potes brancos juntamente a um set do Jogo de Ur. Boterman (2008) acredita que esses potes eram usados para colocar dinheiro apostado. De acordo com a tabuleta de Iti-Marduque-balatu, quando uma de suas peças pulava alguma das casas com imagem de roseta, o jogador deveria colocar uma ficha no pote. Por outro lado, quando uma das peças caía em uma casa com roseta, o jogador deveria pegar uma ficha do pote.\n[…]\nTom Scott vs Irving Finkel: O Jogo Real de Ur (em inglês)\n[…]\nJogar o Jogo Real de Ur no website RoyalUr.net (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Canastra",
      "descricao": "Jogo de cartas da família do rummy, jogado com dois baralhos, criado em Montevidéu em 1939."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "A canastra, jogo de cartas muito popular nas famílias brasileiras, foi inventada em 1939 em qual país vizinho do Brasil?",
    "resposta": "Uruguai",
    "fonte": [
      "https://en.wikipedia.org/wiki/Canasta"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Canasta",
        "situacao": "ok",
        "texto": "Canasta (; Spanish for \"basket\") is a card game of the rummy family of games believed to be a variant of 500 rum. Although many variations exist for two, three, five or six players, it is most commonly played by four in two partnerships with two standard decks of cards. Players attempt to make melds of seven cards of the same rank and \"go out\" by playing all cards in their hands.\n[…]\nThe game of Canasta was devised by attorney Segundo Sánchez Santos and his Bridge partner, architect Alberto Serrato in Montevideo, Uruguay, in 1939, in an attempt to design a time-efficient game that was as engaging as Bridge. They tried different formulas before combining Bridge, Rummy and Conquan into a game  , and then inviting Arturo Gómez Hartley and Ricardo Sanguinetti to test their game.\n[…]\nCanasta became rapidly popular in the United States in the 1950s with many card sets, card trays and books being produced. Interest in the game began to wane there during the 1960s, but the game still enjoys some popularity today, with Canasta leagues and clubs still existing in several parts of the United States.\n[…]\nThis variation originates in Slovakia. Since the definition of Canasta rules differed from player to player a strong urge has risen for unified rules. This in turn was satisfied by the creation of Boat Canasta, which really is a mix of other known rules, but thoroughly optimized. Currently this variant of Canasta is steadily gaining popularity mainly in Slovakia, but also in countries such as France, Germany and England.\n[…]\nCard points inside canastas are counted as well as the canasta score.\n[…]\nHolmberg, H.H. and Öhrling, Erkki, Canasta, Samba ja Sitoumussamba, 1962\n[…]\nCollins, Dara and Miller-Small, Donna, Modern American Canasta: The Complete Guide, 2023\n[…]\nCLA – Canasta League of America\n[…]\nHow to Play Canasta—How Stuff Works\n[…]\nHistory of Canasta"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Canasta",
        "situacao": "ok",
        "texto": "A canasta (\"cesto\" em espanhol), que no Brasil é também chamada de canastra ou tranca, é um jogo de cartas da família de jogos do mexe-mexe, que se acredita ser uma variação do 500 Rum. Apesar de existirem muitas variações pra dois, três, cinco ou seis jogadores, é mais comum ser jogada por quatro jogadores organizados em duas duplas, com dois baralhos padrão de cartas. Os jogadores tentam fazer a\n[…]\nÉ o único jogo de parcerias da família de jogos mexe-mexe que alcançou o status de clássico.\n[…]\nO jogo de Canasta foi criado por Segundo Santos e Alberto Serrato em Montevidéu, Uruguai, em 1939. Nos anos 1940 o jogo espalhou-se na forma de milhares de variações para o Chile, Peru, Brasil e Argentina, onde suas regras foram refinadas antes de ser introduzidos nos Estados Unidos em 1949 por Josefina Artayeta de Vel (Nova Iorque), onde ele era chamado de Argentine Rummy por Ittilie H. Reilly em 1949 e Michael Scully da Coronet magazine em 1953.\n[…]\nEm 1949/1951 o Regency Club de Nova Iorque escreveu as Official Canasta Laws (\"Leis Oficiais de Canasta\"), que foram publicadas junto com especialistas do jogo da América do Sul pela National Canasta Laws Commissions dos EUA e Argentina. O jogo rapidamente se tornou um sucesso nos anos 1950 gerando uma avalanche de vendas de baralhos, suportes de baralhos e livros sobre o assunto.\n[…]\nHistory of Canasta",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Catan",
      "descricao": "Jogo de tabuleiro moderno de colonização de uma ilha com troca de recursos, criado por Klaus Teuber em 1995."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "O Catan, jogo moderno de colonizar uma ilha trocando madeira, tijolo e trigo, nasceu em 1995 em qual país europeu?",
    "resposta": "Alemanha",
    "fonte": [
      "https://en.wikipedia.org/wiki/Catan"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Catan",
        "situacao": "ok",
        "texto": "Catan (), previously known as The Settlers of Catan or simply Settlers, is a multiplayer board game designed by Klaus Teuber. It was first published in 1995 in Germany by Franckh-Kosmos Verlag (Kosmos). Its release, The Settlers of Catan became one of the first Eurogames to achieve popularity outside Europe. As of 2020, more than 32 million boxed sets in 40 languages had been sold.\n[…]\nThe popularity of The Settlers of Catan led to the creation of spinoff games and products, starting in 1996 with The Settlers of Catan card game (later renamed to Catan Card Game), and the 2003 novel, Die Siedler von Catan, by German historical fiction author Rebecca Gablé, which tells the story of a group of Norse seafarers who set out in search of the mythical island of Catan.\n[…]\n1995: Meeples' Choice Award\n[…]\nIn 2005, Capcom edited the first portable version of Settlers of Catan on the N-Gage Nokia handheld device.\n[…]\nThe Settlers of Catan online game was announced on 16 December 2002. Catan Online World allows players to download a Java application that serves as a portal for the online world and allows online play with other members. The base game may be played for free, while expansions require a subscription membership.\n[…]\nIn 2010, Vectorform showcased a Microsoft PixelSense game for Settlers of Catan. USM also developed an Android and iOS mobile app version simply called \"Catan\" with the various expansions available as DLC.\n[…]\nIn February 2015, Variety announced that producer Gail Katz had purchased the film and TV rights to The Settlers of Catan. Katz said, \"The island of Catan is a vivid, visual, exciting and timeless world with classic themes and moral challenges that resonate today. There is a tremendous opportunity to take what people love about the game and its mythology as a starting point for the narrative\".\n[…]\nSettlers of Catan and the Catan series  at BoardGameGeek"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Descobridores_de_Catan",
        "situacao": "ok",
        "texto": "Colonizadores de Catan (no Brasil) ou Descobridores de Catan (em Portugal) é um Jogo de Tabuleiro criado por Klaus Teuber.\n[…]\nA Editora Kosmos publicou o jogo na Alemanha em 1995 com o nome Die Siedler von Catan.\n[…]\nNos Estados Unidos, é publicado desde 1996, com o título de Settlers of Catan, pela Mayfair Games.\n[…]\nGreater Catan (IV) / (VI): jogo de 18 pontos\n[…]\nA seguir, seguindo a ordem inversa, cada jogar efectua a segunda colocação. Cada jogador começa o jogo com os recursos produzidos pelos hexágonos adjacentes à sua segunda aldeia colocada. Muitas vezes os jogadores acham útil começar o jogo com certo tipo de recursos em seu poder, por exemplo: uma estrada (madeira e barro), uma carta de desenvolvimento (trigo, minério e ovelha), ou também cartas para construir uma cidade (minério e trigo).\n[…]\nNo Brasil:Colonizadores de Catan\n[…]\nDescobridores de Catan: o jogo  tandard, Settlers of Catan (1995), é requerido para jogar a todos os mapas. Foi traduzido para português e encontra-se disponível através da Devir.\n[…]\nSettlers of Catan, 5 to 6 player expansion (1996), necessário para jogar Standard (V-VI)\n[…]\nSettlers of Catan, The Card Game (1996)\n[…]\nSettlers of Catan The Card Game expansion\n[…]\nSettlers of Catan, Travel Edition (2003)\n[…]\n«Java Settlers of Catan by Robb Thomas»  - jogo Standard (IV)\n[…]\n«Catan Online Welt»  (alemão) - portal oficial de jogos com uma subscrição mensal, oferece a maioria dos tabuleiros e o jogo de cartas\n[…]\n«Mayfair Games's Settlers of Catan Section»\n[…]\n«Mayfair Games's Settlers of Catan Scenarios and Variants Section»\n[…]\n«Settlers of Catan Bulletin at BoardGameGeek»\n[…]\n«Trevor Dewey's Settlers of Catan Overview»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Monopoly",
      "descricao": "Jogo de tabuleiro americano de compra e venda de imóveis, lançado pela Parker Brothers em 1935."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Os nomes das ruas do tabuleiro clássico americano do Monopoly foram tirados de qual cidade litorânea de Nova Jersey?",
    "resposta": "Atlantic City",
    "fonte": [
      "https://en.wikipedia.org/wiki/Monopoly_(game)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Monopoly_(game)",
        "situacao": "ok",
        "texto": "Monopoly is a multiplayer economics-themed board game. In the game, players roll two standard dice (or one extra special red die depending on the game) to move their token clockwise around the board, buying and trading properties and railroads and developing them with houses and hotels. Players collect rent from their opponents and aim to drive them into bankruptcy. Money can also be gained or los\n[…]\nMonopoly has become a part of international popular culture, having been licensed locally in more than 113 countries and printed in more than 46 languages. As of 2015, it was estimated that the game had sold 275 million copies worldwide. The properties on the original game board were named after locations in and around Atlantic City, New Jersey.\n[…]\nDespite the updated Luxury Tax space, and the Income Tax space no longer using the 10% option, this edition uses paper Monopoly money, and not an electronic banking unit like the Here and Now World Edition. However, a similar edition of Monopoly, the Electronic Banking edition, does feature an electronic banking unit and bank cards, as well as a different set of tokens. Both Here and Now and Electronic Banking feature an updated set of tokens from the Atlantic City edition.\n[…]\nWinning Moves Games released The Mega Edition, with a 30% larger game-board and revised game play, in 2006. Other streets from Atlantic City (eight, one per color group) were included, along with a third utility, the Gas Company. In addition, $1,000 denomination notes (first seen in Winning Moves' Monopoly: The Card Game) are included.\n[…]\nGames magazine included Monopoly in their \"Top 100 Games of 1980\", praising it as \"the original landlord game in which players buy, sell, and rent Atlantic City real estate at pre-casino prices\" and noting that at the time it was \"so popular that Parker Brothers prints more paper money each year than the U.S Government\"."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Monopoly",
        "situacao": "ok",
        "texto": "Monopoly  (em Portugal, Monopólio; no Brasil, Monopoly) é um jogo de tabuleiro multijogador com temática econômica. No jogo, os jogadores lançam dois dados comuns (ou um dado vermelho especial adicional, dependendo da versão) para mover sua peça no sentido horário pelo tabuleiro, comprando e negociando propriedades como bairros e empresas  e desenvolvendo-as com casas e hotéis. Os jogadores cobram\n[…]\nO jogo recebeu o nome do conceito econômico de monopólio,a dominação de um mercado por uma única entidade. Uma estratégia central do jogo é comprar (ou negociar para obter) todas as propriedades de uma determinada cor ou todas as ferrovias. As propriedades do tabuleiro original receberam nomes de locais de Atlantic City e arredores, no estado de Nova Jersey.\n[…]\nMonopoly tornou-se um dos jogos de tabuleiro mais populares do mundo, tendo sido licenciado localmente em mais de 113 países e publicado em mais de 46 idiomas. Em 2015, estimava-se que o jogo tivesse vendido 275 milhões de cópias no mundo todo.\n[…]\nO jogo de tabuleiro chegou ao mercado brasileiro poucos anos depois do lançamento pela Parker Brothers, embora sua versão oficialmente licenciada pela Brinquedos Estrela só tenha sido lançada em 1944, sob o nome Banco Imobiliário e  trazia como propriedades ruas e bairros das cidades de São Paulo e Rio de Janeiro. Antes da edição da Estrela, entretanto, já circulava no Brasil uma versão do jogo da Parker Brothers denominada Bolsa de Immoveis, da A.L.\n[…]\nEm Portugal, o jogo foi editado pela Majora/Parker Brothers Portugal na década de 1950, com o nome traduzido para Monopólio. Em 1961 a Majora fez uma nova edição que, por pressão da Parker Brothers, já usou a designação internacional Monopoly. Nas edições portuguesas são usados nomes de ruas importantes, principalmente da capital (Lisboa) e da segunda cidade do país (Porto), bem como de estações de caminho-de-ferro.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Carta de baralho",
      "descricao": "Cartão de papel ou plástico com figuras e números usado em jogos de cartas."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Onde surgiram as mais antigas cartas de baralho conhecidas, por volta do século nove?",
    "resposta": "China",
    "fonte": [
      "https://en.wikipedia.org/wiki/Playing_card"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Playing_card",
        "situacao": "ok",
        "texto": "A playing card is a piece of specially prepared card stock, heavy paper, thin cardboard, plastic-coated paper, cotton-paper blend, or thin plastic that is marked with distinguishing motifs. Often the front (face) and back of each card has a finish to make handling easier. They are most commonly used for playing card games, and are also used in magic tricks, cardistry, card throwing, and card house\n[…]\nThe Playing-Card – international publication incorporating research articles on playing cards and card games\n[…]\nBecause of the long history and wide variety in designs, playing cards are also collector's items. In 1911, the New York Times described May King Van Rensselaer's playing card collection of over 900 decks as the largest in the world. According to Guinness World Records, the largest playing card collection comprises 11,087 decks and is owned by Liu Fuchang of China.\n[…]\nPlaying cards themselves may also be used to make art, such as being used as a canvas for an artist trading card.\n[…]\nPlaying cards are a useful tool to pass information to troops during downtime. In World War II, the United States Playing Card Company produced a deck of cards featuring silhouettes of American, British, German, Italian, and Japanese aircraft. The Allies also produced maps concealed in playing cards. During the 2003 invasion of Iraq, the US military produced Most-wanted Iraqi playing cards to help soldiers identify enemy leaders.\n[…]\nLater, Unicode 7.0 added the 52 cards of the modern French pack, plus 4 knights, and a character for \"Playing Card Back\" and black, red and white jokers, in the Playing Cards block (U+1F0A0–1F0FF).\n[…]\nMaltese playing cards. Bonello, Giovanni (January 2005). Michael Cooper (ed.). \"The Playing-Card\" (PDF). Journal of the International Playing-Card Society. 32 (3): 191–197. ISSN 0305-2133. Archived from the original (PDF) on 29 April 2005."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Baralho",
        "situacao": "ok",
        "texto": "O baralho é um conjunto de cartas feitas de cartolina, papel couché, papelão fino, papel cartão, ou plástico fino, ilustradas e numeradas criado por volta do século X na China, depois espalhando-se por todo o mundo. Além do uso em vários tipos de jogos de cartas, também tem sido utilizados para adivinhação, educação e ilusionismo.\n[…]\nOs subconjuntos mais comuns são os que excluem os 10s, 9s e 8s dos quatro naipes, totalizando 40 cartas (A K Q J 7 6 5 4 3 2) são chamados de \"baralho sujo\", e os que excluem os 10s, 9s, 8s, 7s, 6s, 5s e 4s, totalizando 24 cartas (A K Q J 3 2) são chamados de \"baralho limpo\".[carece de fontes]?\n[…]\nO baralho mais usado nos países lusófonos tem 52 cartas, distribuídas em 4 grupos - também chamados de naipes - os quais têm 13 cartas de valores diferentes. Os nomes dos naipes em português (mas não os símbolos) são similares aos usados no baralho espanhol de quarenta cartas. São eles espadas (♠), paus (♣), copas (♥) e ouros (♦), embora sejam usados os símbolos franceses.\n[…]\nO baralho de tarot de 78 cartas, e subconjuntos do mesmo, são usados para uma variedade de jogos europeus de trick-tracking. O baralho de tarot se distingue da maioria dos outros baralhos pelo uso de um naipe de trunfos separado de 21 cartas, e um bobo, cujo papel varia de acordo com o jogo específico. Além disso, ele difere do baralho francês de 52 cartas pela utilização de uma carta de corte adicional em cada naipe, o cavaleiro ou cavalo.\n[…]\nNa Europa, o baralho é conhecido principalmente como um baralho de cartas de jogar; nas Américas, o baralho é conhecido sobretudo por seu uso em cartomancia, os trunfos e o bobo compõem os arcanos maiores, enquanto as 56 cartas de naipe compõem os arcanos menores.\n[…]\nJoseph Needham, Science & Civilisation in China, Cambridge University Press, 2004, volume IV:1, ISBN 0-521-05802-3",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "War (jogo)",
      "descricao": "Jogo de tabuleiro brasileiro de estratégia e conquista de territórios lançado pela Grow, inspirado no Risk."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "O War, jogo de conquistar territórios com exércitos de plástico, foi lançado pela Grow em que década?",
    "resposta": "Anos 1970",
    "fonte": [
      "https://pt.wikipedia.org/wiki/War_(jogo)"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/War_(jogo)",
        "situacao": "inexistente",
        "texto": ""
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Banco Imobiliário",
      "descricao": "Jogo de tabuleiro brasileiro de compra e venda de imóveis lançado pela Estrela, versão nacional do Monopoly."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "A Estrela lançou o Banco Imobiliário no Brasil enquanto o mundo ainda vivia qual grande conflito?",
    "resposta": "Segunda Guerra Mundial",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Banco_Imobiliário"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Banco_Imobiliário",
        "situacao": "ok",
        "texto": "Banco Imobiliário é um jogo de tabuleiro lançado no Brasil pela Brinquedos Estrela. É uma variação local do jogo internacionalmente conhecido como Monopoly.\n[…]\nO jogo de tabuleiro chegou ao mercado brasileiro poucos anos depois do lançamento do Monopoly pela Parker Brothers nos Estados Unidos, embora sua versão oficialmente licenciada pela Brinquedos Estrela só tenha sido lançada em 1944, sob o nome Banco Imobiliário e  trazia como propriedades ruas e bairros das cidades de São Paulo e Rio de Janeiro. Antes da edição da Estrela, entretanto, já circulava no Brasil uma versão do jogo da Parker Brothers denominada Bolsa de Immoveis, da A.L.\n[…]\nNo ano de 1944, quando a Brinquedos Estrela lançou o Banco Imobiliário, prever os rumos do mercado imobiliário era uma preocupação de empresários e pesquisadores brasileiros, tanto que foi neste ano, em janeiro, que a Fundação Getúlio Vargas (FGV) começou a medir o INCC (Índice Nacional de Custo da Construção). Na época, o índice se chamava ICC e era medido apenas na cidade do Rio de Janeiro, que era a capital federal do Brasil.\n[…]\nAv. Brasil\n[…]\nAções do Banco Itaú\n[…]\nEm licenciamentos, o Banco Imobiliário tem atualmente as versões Banco Imobiliário Disney e Banco Imobiliário Júnior Princesas Disney. No primeiro, estão à venda logradouros ligados ao Toy Story, Monstros S.A, Mickey, Princesas, entre outros. Entre os imóveis disponíveis, estão a Terra do Nunca, a Casa do Mickey, a Casa do Pooh, a Creche Sunnyside do filme Toy Story ou Radiator Spring do filme Carros. No segundo, os jogadores podem adquirir as propriedades mais valorizadas dos contos de fadas."
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Campeonato Mundial de Xadrez de 1886",
      "descricao": "Primeira disputa oficial pelo título mundial de xadrez, entre Wilhelm Steinitz e Johannes Zukertort."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "O primeiro campeonato mundial oficial de xadrez, vencido por Wilhelm Steinitz contra Johannes Zukertort, foi disputado em que século?",
    "resposta": "Século dezenove",
    "fonte": [
      "https://en.wikipedia.org/wiki/World_Chess_Championship_1886"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/World_Chess_Championship_1886",
        "situacao": "ok",
        "texto": "The World Chess Championship 1886 was the first official World Chess Championship match contested by Wilhelm Steinitz and Johannes Zukertort. The match took place in the United States from 11 January to 29 March, the first five games being played in New York City, the next four being played in St. Louis and the final eleven in New Orleans. The winner was the first player to achieve ten wins. Wilhe\n[…]\nHowever, most historians now accept that the 1886 match between Steinitz and Zukertort was the first official World Championship match.\n[…]\nZukertort staked his rival claim to being the world's leading player by a number of tournament wins, notably Paris 1878 and London 1883. Steinitz did not compete in Paris. But at the London 1883 chess tournament, a prestigious 14-player, double-round, all-play-all tournament, Zukertort was the convincing winner with 22/26, ahead of Steinitz (19/26). They were followed by Joseph Henry Blackburne (16½/22) and Mikhail Chigorin (16/22).\n[…]\nA common story relates to an incident that occurred at the tournament banquet, when the St. George Chess Club President proposed a toast to the best chess player in the world and both Steinitz and Zukertort stood up at the same time to thank him. Research by Edward G. Winter suggests that this story has been embellished.\n[…]\nThe final game ended on March 29, 1886 when Zukertort tendered his resignation and congratulated the new World Champion.\n[…]\nThe winner would be the first to 10 wins, draws not counting. In the event of a 9–9 tie, neither player would be champion. Steinitz won, thus becoming the first official world champion.\n[…]\nHartston, William (1986). The Kings of Chess. Pavilion. ISBN 1-85145-075-0.\n[…]\nKazić, Bozidar M. (1974). International Championship Chess. Batsford. ISBN 0-7134-2795-7."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Campeonato_Mundial_de_Xadrez_de_1886",
        "situacao": "ok",
        "texto": "O Campeonato Mundial de Xadrez de 1886 foi a primeira edição do Campeonato Mundial de Xadrez sendo disputada por Wilhelm Steinitz e Johannes Zukertort. A competição ocorreu no EUA, sendo as primeiras 5 partidas disputadas em Nova Iorque, as quatro seguintes em St. Louis e a última em Nova Orleans. O vencedor foi Wilhelm Steinitz que venceu por um placar de 10 - 5, vencedo o seu 10º jogo em 20, ten\n[…]\nAnteriormente houve inúmeras partidas entre os enxadristas mais proeminentes do período, o que sugere que a alcunha de campeão mundial já fosse utilizada no meio enxadrístico. No período de 1866 a 1876 Stenitz enfrentou os enxadristas mais fortes da época como Anderssen, Bird, Blackburne e Zukertort, tendo vencido todos. Porém a maioria dos historiadores aceita que a partida de 1886 entre Steinitz e Zukertort foi oficialmente o primeiro campeonato mundial do esporte..\n[…]\nNo torneio de Londres de 1883, uma competição com os quatorze melhores enxadristas numa disputa de todos contra todos, Zukertort vence de maneira convincente ficando a frente de Steinitz, Blackburne e Chigorin. Sob vários aspectos, este evento guarda semelhanças com o Torneio de Candidatos, onde os mais proeminentes enxadristas disputam as duas vagas como os desafiantes do título mundial.\n[…]\nA disputa começou em 11 de Janeiro de 1886, às 14:00h no Cartiers Academy Hall em Nova Iorque. Após os primeiros cinco jogos, a disputa foi para St. Louis para mais quatro partidas. Com o resultado balanceado de 4 vitórias para cada um e um empate, a conclusão ficaria para Nova Orleans. A esta altura do campeonato Zukertort havia dito que estava fisicamente cansado e próximo de um colapso mental enquanto que Steinitz parecia jogar melhor ainda, com um poço interminável de Estamina mental.\n[…]\nO jogo final ocorreu no dia 29 de março de 1886 quando Zukertort ofereceu sua resignação e congratulou Steinitz como Campeão Mundial.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Dominó",
      "descricao": "Jogo de peças retangulares divididas em duas metades marcadas com pontos de zero a seis."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Um jogo de dominó tradicional, com pontos que vão de zero a seis, tem quantas peças no total?",
    "resposta": "Vinte e oito",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Dominó",
      "https://en.wikipedia.org/wiki/Dominoes"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Dominó",
        "situacao": "ok",
        "texto": "Dominó é um jogo de mesa que utiliza peças com formatos retangulares, dotadas normalmente de uma espessura que lhes dá a forma de paralelepípedo, em que uma das faces está marcada por pontos indicando valores numéricos. O termo é também usado para designar individualmente as peças que compõem este jogo. O nome provavelmente deriva da expressão latina \"domino gratias\" (\"graças ao Senhor\"), dita pel\n[…]\nO jogo aparentemente surgiu na China e sua criação é atribuída a um santo soldado chinês chamado Hung Ming, que viveu de 243 a.C a 182 a.C. O conjunto tradicional de dominós, conhecido como sino-europeu, é formado por 28 peças, ou pedras. Cada face retangular de dominó é dividida em duas partes quadradas, ou \"pontas\", que são marcadas por um número de pontos de 1 a 6 ou deixadas em branco, para representar o zero.\n[…]\nTradicionalmente feito de marfim, osso ou madeiras escuras, como ébano, com os pontos marcados em cores contrastantes, hoje o dominó é facilmente encontrado em uma diversidade de materiais que vão desde versões semidescartáveis em papel cartão a modelos de luxo em pedras como mármore, granito, pedra-sabão, ou metais diversos, além de plásticos variados. É comum também as peças trazerem pontos de cores diferentes associadas ao número representado, ou ainda a substituição dos pontos por imagens.\n[…]\nGeralmente uma disputa de dominó é feita em várias partidas consecutivas e a dupla que acumular 6 pontos primeiro é a vencedora. Uma batida normal (em uma única \"cabeça\") vale 1 ponto, mesma pontuação quando o jogo trancar e acontecer a contagem, batida de \"carroça\" vale 2 pontos, o famoso \"lá e lô\" que significar bater com uma pedra simples nas duas pontas, vale 3 pontos, já o \"lá e lô\" de carroça, também chamada de \"quadrada\", \"cruzada\" ou \"carroça cruzada\" vale 4 pontos.\n[…]\nDominó belga\n[…]\nVariantes que usam pedras derivadas do dominó tradicional\n[…]\nDominó Mexicano.\n[…]\nDominó de baralho"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Dominoes",
        "situacao": "ok",
        "texto": "Dominoes are a family of tile-based games played with pieces. Each domino is a rectangular tile, usually with a line dividing its face into two square ends. Each end is marked with a number of spots (also called pips or dots) or is blank. The backs of the tiles in a set are indistinguishable, either blank or having some common design. The gaming pieces make up a domino set, sometimes called a deck\n[…]\nis made equal to the total number of doubles in the domino set:\n[…]\nThe total number of pips in a double-n set is found by:\n[…]\nAn \"end\" stops when one of the players is out, i.e., has played all of their tiles. In the event no player is able to empty their hand, then the player with the lowest domino left in hand is deemed to be out and scores one point. A game consists of any number of ends with points scored in the ends accumulating towards a total. The game ends when one of the pair's total score exceeds a set number of points. A running total score is often kept on a cribbage board.\n[…]\nA popular domino game in Texas is 42. The game is similar to the card game spades. It is played with four players paired into teams. Each player draws seven tiles, and the tiles are played into tricks. Each trick counts as one point, and any domino with a multiple of five dots counts toward the total of the hand. These 35 points of \"five count\" and seven tricks equals 42 points, hence the name.\n[…]\nSince April 2008, the character encoding standard Unicode includes characters that represent the double-six domino tiles. While a complete domino set has only 28 tiles, the Unicode set has \"reversed\" versions of the 21 tiles with different numbers on each end, a \"back\" image, and everything duplicated as horizontal and vertical orientations, for a total of 100 glyphs. Few fonts are known to support these glyphs.\n[…]\nHow to Play Draughts, Backgammon, Dominoes and Minor Games at Cards. London: Stevens. 1863."
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Dado",
      "descricao": "Pequeno cubo com faces numeradas de um a seis, usado para sortear números em jogos."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Num dado comum de seis faces, quanto dá a soma dos pontos de duas faces opostas?",
    "resposta": "Sete",
    "fonte": [
      "https://en.wikipedia.org/wiki/Dice"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Dice",
        "situacao": "ok",
        "texto": "A die (plural: dice, sometimes also used as singular) is a small, throwable object with marked sides that can rest in multiple positions. Dice are used for generating random values, commonly as part of tabletop games, including dice games, board games, role-playing games, and games of chance.\n[…]\nNormally, the faces on a die are placed so that opposite faces add up to one more than the number of faces. (This is not possible with 4-sided dice and dice with an odd number of faces.) Some dice, such as those with 10 sides, are usually numbered sequentially beginning with 0, in which case the opposite faces add to one less than the number of faces.\n[…]\n\"Uniform fair dice\" are dice where all faces have an equal probability of outcome due to the symmetry of the die as it is face-transitive. In addition to the Platonic solids, these theoretically include:\n[…]\nLong dice and teetotums can, in principle, be made with any number of faces, including odd numbers. Long dice are based on the infinite set of prisms. All the rectangular faces are mutually face-transitive, so they are equally probable. The two ends of the prism may be rounded or capped with a pyramid, designed so that the die cannot rest on those faces. 4-sided long dice are easier to roll than tetrahedra and are used in the traditional board games dayakattai and daldøs.\n[…]\nThe faces of most dice are labelled using sequences of whole numbers, usually starting at one, expressed with either pips or digits. However, there are some applications that require results other than numbers. Examples include letters for Boggle, directions for Warhammer, Fudge dice, playing card symbols for poker dice, and instructions for sexual acts using sex dice.\n[…]\nKnizia, Reiner, Dice Games Properly Explained, Elliot Right Way Books, 1999, ISBN 0-7160-2112-9"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dado_%28pe%C3%A7a%29",
        "situacao": "ok",
        "texto": "Os dados são pequenos poliedros gravados com determinadas instruções. O dado mais clássico é o cubo (seis faces), gravado com números de um a seis. Existem também dados de duas faces (representados por moedas), três faces (igual a um dado clássico de seis lados, mas com apenas três números, sendo cada um repetido duas vezes), quatro faces (em formato piramidal), oito faces, dez faces, 12 faces, 20\n[…]\nUma pequena curiosidade quanto aos dados clássicos (fabricados de forma correta), de seis lados: a soma dos lados opostos resulta no número sete. Ou seja, se de um lado temos o número um automaticamente teríamos o número seis do outro lado. Isso ocorre também com o dois casando com o cinco, e o três com o quatro. Isso se aplica também a qualquer outro dado, a soma de dois lados opostos sempre é igual ao número de faces mais um.\n[…]\nUm dado com dois números um e sem o número seis;\n[…]\nDado dos elementos, contendo seis desenhos: Fogo, Água, Terra, Ar, Vida e Morte.\n[…]\nMuitas vezes quando se utiliza dados multifacetados, refere-se a eles pelo número de faces e a letra 'd', como d6 para um dado de seis faces, d10 para um dado de dez faces, e assim por diante. Caso seja necessário mais de um dado é acrescentado um número a frente do 'd' - Número de dados 'd' Número de lados de cada dado. Combinações de dados e de outros números também são possíveis, tais como '1d10-3' seria um dado de dez lados e o seu resultado menos três.\n[…]\nQuando não se tem dois dados com mesmo número de lados para um '2d8', por exemplo, joga-se o mesmo dado duas vezes. Isso é muito útil para jogos como Banco Imobiliário e RPGs em geral. O dado estilo peão tem uma forma semi-cilíndrica quando com mais de dez lados. Também propiciam a possibilidade de um dado com três lados (sem contar os outros seis das pontas), em forma de uma barraca.\n[…]\n«Wolfram MathWorld: Dice» (em inglês)  Análise das probabilidades de um dado.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Damas brasileiras",
      "descricao": "Variante do jogo de damas jogada no Brasil num tabuleiro de oito por oito casas, com dama que anda várias casas."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "No início de uma partida de damas como se joga no Brasil, quantas peças cada jogador tem no tabuleiro?",
    "resposta": "Doze",
    "fonte": [
      "https://en.wikipedia.org/wiki/Brazilian_draughts"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Brazilian_draughts",
        "situacao": "ok",
        "texto": "Brazilian draughts (or Brazilian Checkers) is a variant of the  strategy board game draughts. Brazilian draughts follows the same rules and conventions as international draughts, the only differences are the smaller gameboard (8×8 squares instead of 10×10) and, therefore, fewer checkers per player (12 instead of 20).\n[…]\nAll moves and captures are made diagonally. All references to squares refer to the dark squares only. The main differences from English draughts are: pieces can also capture backward (not only forward), the long-range moving and capturing capability of queens, and the requirement that the maximum number of pieces be captured whenever a player has capturing options.\n[…]\nList of Draughts-64 World Championship winners"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Jogo do bicho",
      "descricao": "Jogo de apostas brasileiro baseado numa tabela de animais, criado em 1892 no Rio de Janeiro."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Do avestruz à vaca, quantos animais formam a tabela do jogo do bicho?",
    "resposta": "Vinte e cinco",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Jogo_do_bicho"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Jogo_do_bicho",
        "situacao": "ok",
        "texto": "O jogo do bicho é uma modalidade de loteria ilegal amplamente difundida no Brasil, organizada de maneira informal e não regulamentada no país. Baseado na associação de números a 25 animais, o jogo permite apostas em diferentes combinações numéricas ou em animais específicos. Cada um dos 25 animais tem quatro números correspondentes, e as opções de apostas e premiações variam conforme as combinaçõe\n[…]\nO jogo dos bichos do zoológico da então capital federal seria estruturado com bilhetes sorteados, associados a imagens de animais, formando a base do jogo como o conhecemos hoje. A primeira extração do jogo aconteceu em 3 de julho de 1892, com o avestruz como animal sorteado.\n[…]\nO jogo do bicho é baseado em um sistema de apostas numéricas, onde cada animal corresponde a uma sequência numérica específica entre 00 e 99. Por exemplo, o leão (16) poderia ser associado aos números de 61 a 64, enquanto o camelo (8) poderia corresponder aos números 29 a 32. Atualmente, a associação é feita com números que vão de 0000 a 9999, distribuídos entre os animais, com o prêmio variando conforme o número apostado.\n[…]\nOtavio, Chico (21 de fevereiro de 2021). «Novos chefes do jogo do bicho apostam em aliança com milícia». Extra. Consultado em 1 de janeiro de 2025. Cópia arquivada em 11 de março de 2026\n[…]\n«Chefes do jogo do bicho são presença marcante em 40 anos de Sambódromo». O Globo. 6 de fevereiro de 2024. Consultado em 26 de dezembro de 2024. Cópia arquivada em 9 de março de 2026\n[…]\nSimas, Luiz Antonio (7 de fevereiro de 2024). «Como a negociação com o jogo do bicho garantiu a sobrevivência das escolas de samba do Rio». The Intercept Brasil. Consultado em 26 de dezembro de 2024. Cópia arquivada em 9 de fevereiro de 2026\n[…]\n«Ao Encontro da Cor - Figurinhas do Jogo do Bicho». Biblioteca Nacional do Brasil. 2024. Consultado em 26 de dezembro de 2024. Cópia arquivada em 22 de fevereiro de 2026"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Catan",
      "descricao": "Jogo de tabuleiro moderno de colonização de uma ilha com troca de recursos, criado por Klaus Teuber em 1995."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No Catan, que peça, movida quando os dados somam sete, impede um terreno de produzir recursos?",
    "resposta": "O ladrão",
    "fonte": [
      "https://en.wikipedia.org/wiki/Catan"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Catan",
        "situacao": "ok",
        "texto": "Catan (), previously known as The Settlers of Catan or simply Settlers, is a multiplayer board game designed by Klaus Teuber. It was first published in 1995 in Germany by Franckh-Kosmos Verlag (Kosmos). Its release, The Settlers of Catan became one of the first Eurogames to achieve popularity outside Europe. As of 2020, more than 32 million boxed sets in 40 languages had been sold.\n[…]\nThe popularity of The Settlers of Catan led to the creation of spinoff games and products, starting in 1996 with The Settlers of Catan card game (later renamed to Catan Card Game), and the 2003 novel, Die Siedler von Catan, by German historical fiction author Rebecca Gablé, which tells the story of a group of Norse seafarers who set out in search of the mythical island of Catan.\n[…]\nIn 2005, Capcom edited the first portable version of Settlers of Catan on the N-Gage Nokia handheld device.\n[…]\nThe Settlers of Catan online game was announced on 16 December 2002. Catan Online World allows players to download a Java application that serves as a portal for the online world and allows online play with other members. The base game may be played for free, while expansions require a subscription membership.\n[…]\nIn 2010, Vectorform showcased a Microsoft PixelSense game for Settlers of Catan. USM also developed an Android and iOS mobile app version simply called \"Catan\" with the various expansions available as DLC.\n[…]\nIn February 2015, Variety announced that producer Gail Katz had purchased the film and TV rights to The Settlers of Catan. Katz said, \"The island of Catan is a vivid, visual, exciting and timeless world with classic themes and moral challenges that resonate today. There is a tremendous opportunity to take what people love about the game and its mythology as a starting point for the narrative\".\n[…]\nSettlers of Catan and the Catan series  at BoardGameGeek"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Descobridores_de_Catan",
        "situacao": "ok",
        "texto": "Colonizadores de Catan (no Brasil) ou Descobridores de Catan (em Portugal) é um Jogo de Tabuleiro criado por Klaus Teuber.\n[…]\nCada hexágono de terreno, à excepção do deserto, produz um recurso natural específico para os jogadores que tenham construído nos seus cantos. Dois dados de seis lados são rolados em cada turno, todos os hexágonos de terreno com o número resultante produzem um recurso por cada aldeia aí colocada, e dois recursos por cada cidade. As probabilidades que governam o resultado dos dados ditam que o hexágonos marcados com seis ou oito são os que se \"esperam\" mais produtivos.\n[…]\nNo início de cada jogo, uma peça preta, que representa o ladrão, reside no hexágono de deserto. Sempre que um sete resulta dos dados, o jogador que lançou os dados deve mudar o ladrão da sua posição  para um hexágono de terreno, que produza recursos, diferente. O jogador que lançou os dados também pode roubar uma carta de um dos jogadores presentes nesse hexágono, desde que este tenha cartas na mão. Uma carta deve ser roubada sempre que fisicamente possível.\n[…]\nO hexágono onde o ladrão está colocado torna-se improdutivo enquanto o ladrão aí permanecer; isto é, quando o número desse hexágono for obtido pelos dados, os jogadores aí colocados não têm direito a nenhuma produção. O ladrão não tem nenhum efeito sobre a funcionalidade dos portos.\n[…]\nColocar o ladrão e roubar um recurso. (obrigatório se o resultado dos dados foi 7)\n[…]\n«Mayfair Games's Settlers of Catan Section»\n[…]\n«Mayfair Games's Settlers of Catan Scenarios and Variants Section»\n[…]\n«Settlers of Catan Bulletin at BoardGameGeek»\n[…]\n«Trevor Dewey's Settlers of Catan Overview»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Peças de xadrez de Lewis",
      "descricao": "Conjunto de peças de xadrez medievais do século doze encontrado na Ilha de Lewis, na Escócia."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "As peças de xadrez de Lewis, do século doze, achadas numa ilha da Escócia, foram esculpidas principalmente em que material?",
    "resposta": "Marfim de morsa",
    "distratores": [
      "Marfim de elefante",
      "Ébano",
      "Chifre de veado"
    ],
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
        "texto": "As peças de xadrez de Lewis são um conjunto de noventa e três peças de xadrez medievais que foi encontrado na ilha de Lewis, na Escócia, em circunstâncias misteriosas. Talhadas em sua grande maioria de marfim de morsa, presume-se que sejam de origem escandinava e que tenham sido feitas na segunda metade do século XII. As estatuetas são esculpidas minuciosamente, com expressões de espanto nas peque\n[…]\nAlém do mais, Nidaros, que era a capital do Reino da Noruega na época e, portanto, um centro cultural muito influente, passou a receber tributo da Groenlândia na forma de matérias-primas, incluindo grandes quantidades de marfim de morsa. De fato, os desenhos nos tronos das peças de xadrez de Lewis têm sido comparados favoravelmente a padrões arquitetônicos nas igrejas de madeira da Noruega e, inclusive, com os esculpidos na arquitetura da Catedral de Nidaros.\n[…]\nEm 2010, os islandês Gudmundur G. Thórarinsson, publicou um artigo intitulado The enigma of the Lewis chessmen (\"O enigma das peças de xadrez de Lewis\") onde propõe a hipótese de que as peças teriam sido feitas na Islândia.\n[…]\nA grande maioria das peças de xadrez de Lewis foram talhadas a partir de marfim de morsa, mas pelo menos três são feitas de dente de baleia. Elas se dividem em 8 reis, 8 rainhas, 16 bispos, 15 cavaleiros, 16 sentinelas (no lugar das torres) e 19 peões em forma de obeliscos, perfazendo um total de 78 peças, que constituiriam quatro jogos incompletos portanto. A altura das peças figurativas varia de 7 a 10 cm e a dos peões de 4 a 6 cm aproximadamente.\n[…]\nOs peões variam em tamanho e forma porém tem em comum uma base octogonal, e somente dois possuem desenhos gravados. Foram fabricados em marfim de dentes de morsa e estima-se sua confecção por volta do século XII. Onze das peças possuem uma saliência no topo.\n[…]\n«The Isle of Lewis Chess Pieces. Site dedicado às peças de xadrez de Lewis» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Bridge",
      "descricao": "Jogo de cartas de vazas jogado em duplas, com uma fase de leilão para definir o contrato."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "No leilão do bridge, os naipes seguem uma ordem de valor. Qual naipe é o mais alto?",
    "resposta": "Espadas",
    "distratores": [
      "Copas",
      "Ouros",
      "Paus"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Contract_bridge"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Contract_bridge",
        "situacao": "ok",
        "texto": "Contract bridge, or simply bridge, is a trick-taking card game using a standard 52-card deck. In its basic format, it is played by four players in two competing partnerships, with partners sitting opposite each other around a table.\n[…]\nThere are no universally accepted rules for rubber bridge, but some zonal organisations have published their own. An example for those wishing to abide by a published standard is The Laws of Rubber Bridge as published by the American Contract Bridge League.\n[…]\nIn 1925 when contract bridge first evolved, bridge tournaments were becoming popular, but the rules were somewhat in flux, and several different organizing bodies were involved in tournament sponsorship: the American Bridge League (formerly the American Auction Bridge League, which changed its name in 1929), the American Whist League, and the United States Bridge Association. In 1937, the first officially recognized world championship was held in Budapest.\n[…]\nMuch of the complexity in bridge arises from the difficulty of arriving at a good final contract in the auction (or deciding to let the opponents declare the contract).\n[…]\nSome national contract bridge organizations now offer online bridge play to their members, including the English Bridge Union, the Dutch Bridge Federation and the Australian Bridge Federation. MSN and Yahoo! Games have several online rubber bridge rooms. In 2001, the WBF issued a special edition of the lawbook adapted for internet and other electronic forms of the game.\n[…]\nGlossary of contract bridge terms\n[…]\nList of bridge books\n[…]\nList of bridge competitions and awards\n[…]\nList of bridge magazines\n[…]\nList of contract bridge people\n[…]\nAmerican Contract Bridge League (ACBL)\n[…]\nWorld Bridge Federation (WBF)\n[…]\nThe Bridge Library"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bridge_%28jogo_de_cartas%29",
        "situacao": "ok",
        "texto": "Bridge ou brídege é um jogo de cartas, que usa a mecânicas de leilão e de vazas, jogado por dois pares de jogadores e com as 52 cartas de um baralho - 13 em cada naipe (♣Paus, ♦Ouros, ♥Copas e ♠Espadas)\n[…]\nUm jogo de bridge é dividido em duas partes, o leilão e o carteio e o objectivo do jogo é realizar o maior número de vazas possível. No leilão chega-se a um contrato que pode ser trunfado, isto é, existe um trunfo que poderá ser um dos 4 naipes (Paus, Ouros, Copas ou Espadas) ou Sem Trunfo (não existe trunfo). O par que ganhar o leilão vai tentar cumprir o contrato com que se comprometeu (fazer entre 7 e 13 vazas, jogando com ou sem trunfo).\n[…]\nDo par que ganhou o leilão o jogador que primeiro falou no naipe (ou sem trunfo) que será jogado vai cartear e é denominado como o Declarante. O adversário à esquerda do Declarante joga a primeira carta (Carta de Saída) e o parceiro do Declarante (designa-se Morto) coloca as cartas na mesa (com o trunfo à direita), que ficam à vista de todos, e só jogará as que parceiro nomear.\n[…]\nFederação Mundial de Bridge (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Damas inglesas",
      "descricao": "Variante do jogo de damas jogada em tabuleiro de oito por oito, em que a dama anda uma casa por vez, resolvida por computador em 2007."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Em 2007, cientistas canadenses resolveram as damas inglesas com o programa Chinook. Se os dois lados jogarem perfeitamente, qual é o resultado?",
    "resposta": "Empate",
    "fonte": [
      "https://en.wikipedia.org/wiki/Chinook_(computer_program)",
      "https://en.wikipedia.org/wiki/English_draughts"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Chinook_(computer_program)",
        "situacao": "ok",
        "texto": "Chinook is a computer program that plays checkers (also known as draughts). It was developed between the years 1989 to 2007 at the University of Alberta, by a team led by Jonathan Schaeffer and consisting of Rob Lake, Paul Lu, Martin Bryant, and Norman Treloar.\n[…]\nIn 1990 Chinook won the right to play in the human World Championship by being second to Marion Tinsley in the US Nationals. At first, the American Checkers Federation and English Draughts Association were against the participation of a computer in a human championship. When Tinsley resigned his title in protest, the ACF and EDA created the new title Man vs. Machine World Championship, and competition proceeded. Tinsley won with four wins to Chinook's two, with 33 draws.\n[…]\nIn 1995, Chinook defended its man-machine title against Don Lafferty in a 32-game match. The final score was 1–0 with 31 draws for Chinook over Lafferty. After the match, Jonathan Schaeffer decided not to let Chinook compete any more, but instead try to solve checkers. At the time it was rated at 2814 Elo. The solution was achieved, and the result published in 2007.\n[…]\nChinook's program algorithm includes an opening book, a library of opening moves from games played by grandmasters; a deep search algorithm; a good move evaluation function; and an end-game database for all positions with eight pieces or fewer. The linear handcrafted evaluation function considers several features of the game board, including piece count, kings count, trapped kings, turn, runaway checkers (unimpeded path to be kinged), and other minor factors.\n[…]\nMarch 10, 2007 - Jonathan Schaeffer announces (at the ACM SIGCSE 2007 conference) that a final solution to checkers is expected within 3–5 months."
      },
      {
        "url": "https://en.wikipedia.org/wiki/English_draughts",
        "situacao": "ok",
        "texto": "Draughts (British English) or checkers (American English), also called straight checkers or chequers, is a form of the strategy board game checkers (or draughts). It is played on an 8×8 checkerboard with 12 pieces per side. The pieces move and capture diagonally forward, until they reach the opposite end of the board, when they are crowned and can thereafter move and capture both backward and forw\n[…]\nHuffing does not appear in the official rules of the World Checkers Draughts Federation, of which the American Checker Federation and English Draughts Association are members.\n[…]\nU+26C3 ⛃ BLACK DRAUGHTS KING\n[…]\nThe first English draughts computer program was written by Christopher Strachey at the National Physical Laboratory (NPL), London. Strachey finished the programme, written in his spare time, in February 1951. It ran for the first time on the NPL's Pilot ACE computer on 30 July 1951. He soon modified the programme to run on the Manchester Mark 1 computer.\n[…]\nIn July 2007, in an article published in Science Magazine, Chinook's developers announced that the program had been improved to the point where it could not lose a game. If no mistakes were made by either player, the game would always end in a draw. After eighteen years, they have computationally proven a weak solution to the game of checkers.\n[…]\nThe number of possible positions in English draughts is 500,995,484,682,338,672,639 and it has a game-tree complexity of approximately 1040. By comparison, chess is estimated to have between 1043 and 1050 legal positions.\n[…]\nThe July 2007 announcement by Chinook's team stating that the game had been solved must be understood in the sense that, with perfect play on both sides, the game will always finish with a draw. However, not all positions that could result from imperfect play have been analysed.\n[…]\nSome top draughts programs are Chinook, and KingsRow.\n[…]\nWorld Checkers Draughts Federation (WCDF)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Chinook_%28programa_de_computador%29",
        "situacao": "ok",
        "texto": "Chinook é um programa de computador que joga damas desenvolvido pela equipe liderada pelo cientista da computação Jonathan Schaeffer na Universidade de Alberta em 1989. Em julho de 2007, os desenvolvedores anunciaram que o programa havia solucionado o jogo, tornando-se invencível.\n[…]\nO jogo de damas portanto é um jogo de empate se ambos jogadores realizarem os movimentos corretos.\n[…]\n«Sítio oficial» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  }
]

---

# MANIFESTO

# Manifesto de Perguntas — Mestre2

> **Versão preliminar 0.34 — 2026-10-01**
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
- no máximo **2 perguntas com o mesmo ângulo** para uma mesma âncora, no banco inteiro.

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

> **Por enquanto, o gerador automático não cria perguntas com figura.** Elas só são escritas por quem tem a imagem em mãos e a examinou. Uma pergunta sem o campo `imagem` nunca se refere a uma foto ou figura.

- **A figura é a pergunta.** A resposta sai de **reconhecer o que a imagem mostra**: "Que cidade é esta?", "Que animal é este?", "Qual é este pokémon?", "Quem pintou este quadro?", "Em que museu fica este quadro?". Teste: se trocar "este animal" pelo nome dele deixasse a pergunta igualmente boa, a figura é só enfeite, e a pergunta está errada.
- **O enunciado é curto** e diz o que se deve reconhecer (cidade, animal, monumento). Pode trazer uma pista que ajude, desde que não entregue a resposta.
- **Âncora e ângulo:** a âncora é o que aparece na figura. Perguntar o que ela é dá o ângulo `identidade`; perguntar algo que só se sabe depois de reconhecê-la usa o ângulo correspondente (`autoria` para o pintor, `lugar` para o museu). As regras de variedade (§9), que limitam `identidade`, valem para os lotes do gerador e não para as perguntas com figura.
- **Tipos de figura:** lugares (cidades, monumentos, paisagens), animais, plantas, objetos e artesanato, festas populares, contornos de mapa, personagens de lendas e obras de arte em domínio público (pinturas, gravuras). Obras com direitos autorais, como as de Tarsila do Amaral, Portinari ou Dalí, ficam de fora.
- **Um único assunto por imagem:** nada de montagens nem pranchas com várias espécies. Vale foto; ilustração ou escultura só para o que não pode ser fotografado, como os personagens de lendas (Saci, Mula sem cabeça).
- **Pessoas:** figuras públicas, ou brincantes e participantes de festas públicas (Parintins, bumba meu boi, cavalhadas). Fotos de pessoas comuns em outros contextos continuam proibidas.
- **Recorte permitido:** uma placa ou legenda que entregue a resposta pode ser cortada da imagem, já que as licenças livres permitem obras derivadas.
- **Só imagens do Wikimedia Commons**, com licença livre (CC BY, CC BY-SA ou domínio público). Autor e licença são sempre registrados.
- **Exceção, Pokémon:** a arte oficial, com o crédito "© Nintendo / Creatures / GAME FREAK", e a Bulbapedia como fonte da âncora e da pergunta. A imagem vem do Bulbagarden Archives ou, como a Bulbapedia bloqueia acesso automatizado, da mesma arte oficial no repositório público do PokéAPI (`raw.githubusercontent.com/PokeAPI/sprites`), que fica registrado em `origem`. É uso privado, num jogo entre amigos, e não licença livre.
- **Proibido:** capas de álbuns, pôsteres, logotipos e fotos de imprensa.

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
- num lote de figuras de um tema, **pelo menos três famílias** e **pelo menos três catálogos**;
- nenhum catálogo passa de **40%** das perguntas com figura do seu tema;
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
