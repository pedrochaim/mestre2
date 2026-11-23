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
7. **Distratores** (só em `multipla`): críveis, da mesma categoria da resposta e com no máximo 4 palavras (MANIFESTO §6). Uma pergunta `aberta` cuja resposta é um ano ou uma data deve ser reescrita como `multipla`, com 3 anos ou datas próximos e críveis (MANIFESTO §6).
8. **Duplicatas:** se duas perguntas do lote perguntam o mesmo fato, mantenha a melhor e descarte a outra.

Devolva exatamente uma avaliação para cada pergunta, usando o `indice` informado.

# Lote

[
  {
    "indice": 1,
    "ancora": {
      "nome": "Valete (carta de baralho)",
      "descricao": "Carta de figura do baralho que representa um jovem da corte, abaixo da dama e do rei."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Na tradição francesa, o valete de copas homenageia La Hire, um capitão da Guerra dos Cem Anos. Ao lado de qual heroína ele lutou?",
    "resposta": "Joana d'Arc",
    "fonte": [
      "https://en.wikipedia.org/wiki/Jack_(playing_card)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Jack_(playing_card)",
        "situacao": "ok",
        "texto": "A Jack or Knave, in some games referred to as a Bower, in Tarot card games as a Valet, is a playing card which, in traditional French and English decks, pictures a man in the traditional or historic aristocratic or courtier dress generally associated with Europe of the 16th or 17th century. The usual rank of a jack is between the ten and the queen. The Jack corresponds to the Unter in German and S\n[…]\nIn the English pattern, the jack and the other face cards represent no one in particular, in contrast to the historical French practice, in which each court card is said to represent a particular historical or mythological personage.\n[…]\nThe valets in the Paris pattern have traditionally been associated with such figures as Ogier the Dane (a knight of Charlemagne and legendary hero of the chansons de geste) for the jack of spades; La Hire (French warrior) for the Jack of Hearts; Hector (mythological hero of the Iliad) for the jack of diamonds; and  Lancelot or Judas Maccabeus for the jack of clubs.\n[…]\nU+1F0AB 🂫 PLAYING CARD JACK OF SPADES\n[…]\nU+1F0BB 🂻 PLAYING CARD JACK OF HEARTS\n[…]\nU+1F0CB 🃋 PLAYING CARD JACK OF DIAMONDS\n[…]\nU+1F0DB 🃛 PLAYING CARD JACK OF CLUBS\n[…]\nOne-eyed jack\n[…]\n\"The Jack\", a song by AC/DC, in which the playing card is a metaphor for an enthusiastic sexual partner with expertise-level \"hand stuff\" skills.\n[…]\nThe Jack of Diamonds, a group of artists founded in 1909 in Moscow\n[…]\n\"Jack of Diamonds\", a traditional folk song\n[…]\nJack of Diamonds, the title used by George de Sand in the 1994 anime Mobile Fighter G Gundam\n[…]\nThe Jack of Hearts (Jack Hart), a Marvel Comics superhero\n[…]\nThe Jack of Hearts, a 1919 short Western film\n[…]\n\"Lily, Rosemary and the Jack of Hearts\", a song by Bob Dylan\n[…]\nPub (trans. The Jack), an album by Đorđe Balašević.\n[…]\n\"Jack of Speed\", a song by Steely Dan, a group of musicians, see: Donald Fagen"
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
    "indice": 2,
    "ancora": {
      "nome": "Dama (carta de baralho)",
      "descricao": "Carta de baralho francês com figura de rainha, entre o rei e o valete."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Na tradição francesa, a dama de copas se chama Judite, heroína bíblica. Já a dama de espadas leva o nome de qual deusa grega?",
    "resposta": "Palas Atena",
    "distratores": [
      "Afrodite",
      "Hera",
      "Ártemis"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Queen_(playing_card)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Queen_(playing_card)",
        "situacao": "ok",
        "texto": "The queen is a playing card with a picture of a queen on it. In many European languages, the king and queen begin with the same letter so the latter is often called dame (lady) or variations thereof. In French playing cards, the usual rank of a queen is between the king and the jack. In tarot decks, it outranks the knight which in turn outranks the jack.\n[…]\nIn several card games, including the middle eastern Trex and French Barbu, the queen is a major card to avoid taking, with each queen taken inflicting a penalty on the player. Similarly, in Hearts, the queen of spades is to be avoided, and is called a variety of unsavoury names.\n[…]\nQueens may have been an invention of early German cardmakers. One of the earliest surviving packs of playing cards, the Stuttgart pack (circa 1440), consists of all female courts in two of the four suits where Queens have replaced Kings. The Ambraser Hofjagdspiel (circa 1440 to 1445) and many other surviving 15th-century packs include the Queen as a fourth independent rank from the King, Ober, and Unter.\n[…]\nModern German-suited playing cards have dropped the Queen rank, but French-suited playing cards have since adopted it as a replacement for the Knights.\n[…]\nRegarding the anonymous nursery rhyme, \"The Queen of Hearts\" (published 1782), Katherine Elwes Thomas claims, in The Real Personage of Mother Goose, that the Queen of Hearts was based on Elizabeth of Bohemia. Benham, in his book Playing Cards: History of the Pack and Explanations of its Many Secrets, notes that French playing cards from the mid-17th century have Judith from the Hebrew Bible as the Queen of Hearts. See also: Queen of Hearts (Alice's Adventures in Wonderland).\n[…]\nU+1F0AD 🂭 PLAYING CARD QUEEN OF SPADES\n[…]\nU+1F0BD 🂽 PLAYING CARD QUEEN OF HEARTS\n[…]\nU+1F0CD 🃍 PLAYING CARD QUEEN OF DIAMONDS\n[…]\nU+1F0DD 🃝 PLAYING CARD QUEEN OF CLUBS"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dama_%28baralho%29",
        "situacao": "ok",
        "texto": "A Dama é uma carta presente tanto no baralho francês quanto em alguns baralhos latinos.\n[…]\nNo baralho francês é uma carta com a figura de uma rainha, sendo uma para cada naipe. Normalmente seu nível de importância está entre o rei e o valete. Os baralhos costumam representá-la com a letra Q, do inglês queen (rainha), seguindo o padrão de muitos países.\n[…]\nEm baralhos latinos, como no português ou no siciliano, sua hierarquia é anterior à do cavaleiro e à do rei.\n[…]\nRainha de Copas, personagem do livro Alice no País das Maravilhas\n[…]\nPikovaya Dama, ópera de Piotr Ilitch Tchaikovsky",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Espadas (naipe)",
      "descricao": "Naipe preto do baralho francês, com símbolo em forma de coração invertido com haste."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Em francês, o naipe de espadas não se chama espada, e sim pique. Que arma essa palavra designa?",
    "resposta": "Lança",
    "fonte": [
      "https://en.wikipedia.org/wiki/Spades_(suit)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Spades_(suit)",
        "situacao": "ok",
        "texto": "Spades (♠) (French: Pique) is one of the four playing card suits in the standard French-suited playing cards. It has the same shape as the leaf symbol in German-suited playing cards but its appearance is more akin to that of an upside down black heart with a stalk at its base. It symbolises the pike or halberd, two medieval weapons, but is actually an adaptation of the German suit symbol of Leaves\n[…]\nIn bridge, spades rank as the highest suit. In skat and similar games, it is the second-highest suit.\n[…]\nThe French name for this suit (pique) means a pike, a kind of spear. In German it is known as Pik. It corresponds to the suit of leaves  (Laub, Grün, Schippen or, in Bavaria, Gras) in the German-suited playing cards. In Switzerland, the suit is known as Schuufle ('shovel') and in many German regions, e.g., the Rhineland, as Schüppe/Schippe ('shovel').\n[…]\nGenerally, spades are black so they can be used in some games as a pair with Clubs (suit), like Klondike (solitaire). They form one of the two major suits in bridge (with hearts). In the official skat tournament deck, spades are green, assuming the color of their German-deck equivalent.\n[…]\nThe following gallery shows the spades in a standard 52-card deck of French-suited playing cards. Not shown is the Knight of Spades used in Tarot card games:\n[…]\nIn four-colour packs Spades may be:\n[…]\nSpades (card game)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Espadas",
        "situacao": "ok",
        "texto": "Espadas é um dos quatro naipes dos jogos de baralho. Tem o mesmo formato do símbolo da folha nas cartas de naipe alemão, mas sua aparência é mais parecida com a de um coração preto de cabeça para baixo com uma haste na base. Simboliza o lúcio ou alabarda, duas armas medievais, mas na verdade é uma adaptação do símbolo do traje alemão das Folhas, criado quando os trajes franceses foram inventados p\n[…]\nNo bridge, as espadas são o naipe mais alto. No skat e jogos similares, é o segundo naipe\n[…]\nEm português, o termo se deriva de um dos naipes do baralho espanhol, espadas. Em inglês é \"Spades\", se referindo a uma pá com tábua reta.\n[…]\nO símbolo da espada é uma forma de ponta de lança muito estilizada, apontando para cima, a parte inferior se alargando em dois arcos de círculo e varrendo em direção ao centro para formar uma espécie de pé.\n[…]\nGeralmente, as espadas são pretas. Eles formam um dos dois naipes principais do bridge (com copas ). No baralho oficial do torneio de skat, as espadas são verdes, assumindo a cor do baralho alemão equivalente.\n[…]\nA galeria a seguir mostra as espadas em um baralho padrão de 52 cartas de naipes franceses . Não é mostrado o Cavaleiro de Espadas usado em jogos de cartas de Tarô :\n[…]\nBaralhos de quatro cores às vezes são usados em torneios ou online. Em pacotes de quatro cores, as Espadas podem ser:\n[…]\nNaipe",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Curinga",
      "descricao": "Carta extra do baralho, geralmente com a figura de um bobo da corte, que pode substituir outras cartas."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A palavra curinga, a carta que substitui qualquer outra, vem de um verbo do quimbundo, língua falada em Angola. Que verbo?",
    "resposta": "Matar",
    "fonte": [
      "https://pt.wiktionary.org/wiki/curinga"
    ],
    "trechos": [
      {
        "url": "https://pt.wiktionary.org/wiki/curinga",
        "situacao": "ok",
        "texto": "artigo curinga Não utilize esta predefinição; use a predefinição { { interwiki }}\n[…]\n</span>boilerplate seealso\"}]],\"parts\":[{\"template\":{\"target\":{\"wt\":\"confundir\",\"href\":\"./Predefinição:confundir\"},\"params\":{\"1\":{\"wt\":\"coringa\"}},\"i\":0}}]}'>Não confundir com coringa .\n[…]\n( Carteado ) carta de baralho cuja imagem é a de um bobo da corte ou louco\n[…]\n( Brasil ) ( Carteado ) carta de baralho que pode assumir qualquer valor em alguns jogos\n[…]\n( ciência da informação ) caractere que indica qualquer cadeia de caracteres possível (normalmente o asterisco ou a porcentagem )\n[…]\nObtida de \" https://pt.wiktionary.org/w/index.php?title=curinga&oldid=3147757 \""
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Uno",
      "descricao": "Jogo de cartas americano de descarte por cor e número, criado em 1971."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Merle Robbins criou o Uno em 1971, depois de uma discussão com o filho sobre as regras de qual jogo de cartas?",
    "resposta": "Crazy Eights (oito maluco)",
    "distratores": [
      "Pôquer",
      "Canastra",
      "Blackjack"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Uno_(card_game)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Uno_(card_game)",
        "situacao": "ok",
        "texto": "Uno ( ; from Spanish and Italian for 'one'), stylized in all caps as UNO, is a proprietary American shedding-type card game originally developed in 1971 by Merle Robbins in Reading, Ohio, a suburb of Cincinnati, that housed International Inc., a gaming company acquired by Mattel on January 23, 1992.\n[…]\nThe game is played with a dedicated deck derived from the crazy eights family of card games which, in turn, is based on the traditional German game of mau-mau.\n[…]\nThe game was originally developed in 1971 by Merle Robbins in Reading, Ohio, a suburb of Cincinnati. When his family and friends began to play more and more, he and his family mortgaged their home to raise $8,000 to have 5,000 copies of the game made. He sold it from his barbershop at first, and local businesses began to sell it as well.\n[…]\nRobbins later sold the rights to Uno to a group of friends headed by Robert Tezak, a funeral parlor owner in Joliet, Illinois, for $50,000 plus royalties of 10 cents per game. Tezak formed International Games, Inc., to market Uno, with offices behind his funeral parlor. The games were produced by Lewis Saltzman of Saltzman Printers in Maywood, Illinois.\n[…]\nThe Games magazine included Uno in their \"Top 100 Games of 1980\", noting that the game \"borrows so much from the familiar card game of Crazy Eights\" but that \"it's a much better game and just as simple to learn\". They would later include the game in their \"Top 100 Games of 1982\", noting that its \"popularity is based on its simplicity, not on its strategic aspects\" and that \"the game has a rummylike scoring system\"."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Uno_%28jogo_de_cartas%29",
        "situacao": "ok",
        "texto": "Uno (estilizado UNO) é um jogo de cartas estadunidense com detalhes especiais (que o diferenciam do Mau-mau), desenvolvido por Merle Robbins e familiares (com a participação de Samuel Sosthenes) em 1971. Hoje é vendido nos Estados Unidos pela Mattel e no Brasil pela Copag. Uno é um dos jogos de cartas mais famosos e mais vendidos no mundo todo.\n[…]\nO Uno possui algumas similaridades com o jogo de cartas Centocinque originário da Itália.\n[…]\nO jogo deve ser jogado por\n[…]\nO jogo começa com a pessoa posicionada ao sentido horário de quem distribuiu as cartas.\n[…]\nSe as cartas que eram utilizadas para comprar esgotarem, as jogadas na mesa são embaralhadas novamente e colocadas como pilha. O jogo termina quando um jogador está sem nenhuma carta na mão e ganha os pontos resultante da soma dos valores das cartas que ficaram na mão dos demais jogadores, seguindo as regras de contagem abaixo\n[…]\n. Lembrando que para vencer o jogo tem que restar na mão uma carta apenas e o jogador deve avisar todos dizendo uno. Não se pode esvaziar todas as cartas da mão de uma vez só. Caso alguém esvazie as cartas da mão de uma vez só ou esqueça de dizer uno deve comprar mais cinco cartas, e mesmo que a pessoa não perceba que ela não falou uno, ela mesmo assim tem que comprar.\n[…]\nUm outro método para encerrar o jogo é quando no final de cada partida (quando algum jogador estiver sem nenhuma carta) os outros jogadores revelam suas mãos e a contagem de pontos é feita. As cartas que restaram na mão de cada oponente deve ser somadas seguindo as regras abaixo. Ganha o jogador que consegue 500 pontos(ou o mais próximo disso).\n[…]\nNão importa quem não tiver mais cartas, quem termina as cartas  primeiro sempre será o vencedor da partida e quem somar 500 primeiro será o vencedor do jogo.\n[…]\nCartas de 0 a 9 tem o valor de sua face;\n[…]\nDe acordo com as regras oficiais do Uno:",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Roleta",
      "descricao": "Jogo de cassino em que uma bolinha cai em um dos compartimentos numerados e coloridos de uma roda giratória."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Segundo a tradição, uma forma primitiva da roleta surgiu no século dezessete, quando qual matemático francês tentava criar uma máquina de movimento perpétuo?",
    "resposta": "Blaise Pascal",
    "distratores": [
      "René Descartes",
      "Pierre de Fermat",
      "Pierre-Simon Laplace"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Roulette"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Roulette",
        "situacao": "ok",
        "texto": "Roulette French pronunciation: [rü-ˈlet] (named after the French word meaning \"little wheel\") is a casino game which was likely developed from the Italian game Biribi. In the game, a player may choose to place a bet on a single number, various groupings of numbers, the color red or black, whether the number is odd or even, or if the number is high or low.\n[…]\nThe first form of roulette was devised in 18th-century France. Many historians believe Blaise Pascal introduced a primitive form of roulette in the 17th century in his search for a perpetual motion machine. The roulette mechanism is a hybrid of a gaming wheel invented in 1720 and the Italian game Biribi. A primitive form of roulette, known as \"EO\" (Even/Odd), was played in England in the late 18th century using a gaming wheel similar to that used in roulette.\n[…]\nThe description included the house pockets: \"There are exactly two slots reserved for the bank, whence it derives its sole mathematical advantage.\" It then goes on to describe the layout with \"two betting spaces containing the bank's two numbers, zero and double zero\". The book was published in 1801. An even earlier reference to a game of this name was published in regulations for New France (Québec) in 1758, which banned the games of \"dice, hoca, faro, and roulette\".\n[…]\nBetting systems in roulette can be divided in to two main categories:\n[…]\nIn the early 1990s, Gonzalo García-Pelayo performed computer analysis on many roulette spins at the Casino de Madrid in Madrid, Spain, winning 600,000 euros in a single day, and two million euros in total. Legal action against him by the casino was unsuccessful, it being ruled that the casino should fix its wheel.\n[…]\nRussian roulette\n[…]\nThe Gambler, a novel written by Fyodor Dostoevsky inspired by his addiction to roulette\n[…]\nLe multicolore; a game similar to roulette"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Roleta",
        "situacao": "ok",
        "texto": "A roleta é um jogo de azar muito comum em casinos. O termo deriva do francês roulette, que significa \"roda pequena\". O uso da roleta como elemento de jogo de azar, em configurações distintas da atual, não está documentado na entrada da Idade Média. É de suspeitar que a sua referência mais antiga seja a chamada \"Roda da Fortuna\", conhecida ao longo de toda a história. A \"magia\" do movimento das rod\n[…]\nAs rodas e, por extensão, as roletas, sempre tiveram uma conexão com o mundo mágico e esotérico. Assim, uma delas parte do tarô, mais precisamente dos que conhecem como arcanos maiores. Segundo os indícios, a criação de uma roleta e suas normas de jogo, muitos similares às que conhecemos hoje em dia, deve-se a Blaise Pascal, que idealizou uma roleta com números, que tem um extremo equilíbrio na posição em que está colocado cada número.\n[…]\nNa roleta europeia e na francesa, as apostas vizinhas e as apostas de chamada formam grupos de números com base na sua posição na roda, e não pela proximidade das casas no tapete principal. Para Voisins du Zéro, a disposição padrão exige nove fichas: duas são colocadas no trio 0–2–3, duas no corner 25–26–28–29, e as restantes cinco em splits 4/7, 12/15, 18/21, 19/22 e 32/35.\n[…]\nA vantagem dessa abordagem é sua simplicidade e menor exposição a riscos em comparação com outros sistemas, devido ao aumento de apostas de forma menos agressiva.\n[…]\nAo contrário da estratégia Martingale, que dobra a aposta após cada derrota, na técnica D'Alembert, a aposta original é adicionada ao valor da última aposta realizada. Desenvolvida pelo matemático francês Jean Le Rond D'Alembert, essa estratégia é uma das mais antigas e conservadoras. O conceito fundamental é que um evento tende a não se repetir imediatamente, e as probabilidades de vitória aumentam à medida que se joga mais.\n[…]\nRoleta russa",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Caça-níqueis",
      "descricao": "Máquina de jogo de azar com rolos giratórios que paga conforme a combinação de símbolos."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Em inglês, o caça-níqueis ganhou o apelido de bandido de um braço só. Que parte das máquinas antigas seria esse braço?",
    "resposta": "A alavanca lateral",
    "fonte": [
      "https://en.wikipedia.org/wiki/Slot_machine"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Slot_machine",
        "situacao": "ok",
        "texto": "A slot machine, fruit machine (British English), puggie (Scots), poker machine or pokie machine (Australian and New Zealand English) is a gambling machine that creates a game of chance for its customers.\n[…]\nElectronic Gaming Machine.\n[…]\nNatasha Dow Schüll, associate professor in New York University's Department of Media, Culture and Communication, uses the term \"machine zone\" to describe the state of immersion that users of slot machines experience when gambling, where they lose a sense of time, space, bodily awareness, and monetary value.\n[…]\nMike Dixon, PhD, professor of psychology at the University of Waterloo, studies the relationship between slot players and machines. In one of Dixon's studies, players were observed experiencing heightened arousal from the sensory stimulus coming from the machines. They \"sought to show that these 'losses disguised as wins' (LDWs) would be as arousing as wins, and more arousing than regular losses.\"\n[…]\nPsychologists Robert Breen and Marc Zimmerman found that players of video slot machines reach a debilitating level of involvement with gambling three times as rapidly as those who play traditional casino games, even if they have engaged in other forms of gambling without problems.\n[…]\nThe 2011 60 Minutes report \"Slot Machines: The Big Gamble\" focused on the link between slot machines and gambling addiction.\n[…]\nQuiz machine\n[…]\nUnited States slot machine ownership regulations by state\n[…]\nGrochowski, John. The Slot Machine Answer Book: How They Work, How They've Changed, and How to Overcome the House Advantage (Bonus Books, 2005) ISBN 1-56625-235-0\n[…]\nLegato, Frank. How to Win Millions Playing Slot Machines! ...Or Lose Trying (Bonus Books, 2004) ISBN 1-56625-216-4"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Slot_machine",
        "situacao": "ok",
        "texto": "Caça-níquel, caça-níqueis (português brasileiro) ou slot machine, máquina de slots (português europeu) (no Brasil o termo vindo do castelhano: máquina tragamonedas) é uma máquina de jogo que funciona por meio da introdução de moedas e que paga um prêmio, igualmente em moedas ou com a emissão de um voucher (bilhete de pagamento), a quem acertar as combinações previstas.\n[…]\nA criação pioneira de Charles Fey, o \"Liberty Bell\", marcou o surgimento do primeiro caça-níquel mecânico em 1895. Fey, um mecânico de automóveis de São Francisco (1862-1944), projetou a máquina com três rolos giratórios, adornados com símbolos como diamantes, espadas e corações, além da imagem de um Sino da Liberdade rachado. Um giro bem-sucedido que exibisse três sinos consecutivos resultava no maior pagamento, equivalente a cinquenta centavos ou dez níqueis.\n[…]\nO mesmo, contudo, não se aplica aos caça-níqueis virtuais, conhecidos como bets. Ainda que envolvidos por diversas polêmicas, os serviços de apostas virtuais vêm sendo gradualmente permitidos, com início na Lei n. 13.756/2018, a qual instituiu a modalidade \"apostas de quota fixa\" como sendo permitida.\n[…]\nEm 31 de julho de 2024, o Ministério da Fazenda, durante o governo do presidente Luiz Inácio Lula da Silva, publicou a Portaria nº 1.207, que estabelece regras específicas para diversas modalidades de apostas online, incluindo caça-níqueis (slots), jogos de colisão (crash games), roletas, blackjack, dados e outras categorias de jogos virtuais.\n[…]\nGrochowski, John (2005). The Slot Machine Answer Book: How They Work, How They've Changed, and How to Overcome the House Advantage (em inglês). Los Angeles: Bonus Books. ISBN 1-56625-235-0\n[…]\nLegato, Frank (2004). How to Win Millions Playing Slot Machines! ...Or Lose Trying (em inglês). Chicago: Bonus Books. ISBN 1-56625-216-4",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Caça-níqueis",
      "descricao": "Máquina de jogo de azar com rolos giratórios que paga conforme a combinação de símbolos."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "O Liberty Bell, um dos primeiros caça-níqueis de rolos, foi criado pelo mecânico Charles Fey no fim do século dezenove. Em qual cidade americana?",
    "resposta": "São Francisco",
    "distratores": [
      "Las Vegas",
      "Chicago",
      "Nova York"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Slot_machine"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Slot_machine",
        "situacao": "ok",
        "texto": "A slot machine, fruit machine (British English), puggie (Scots), poker machine or pokie machine (Australian and New Zealand English) is a gambling machine that creates a game of chance for its customers.\n[…]\nBecause of the vast number of possible wins in the original poker-based game, it proved practically impossible to make a machine capable of awarding an automatic payout for all possible winning combinations. At some time between 1887 and 1895, Charles Fey of San Francisco, California, devised a much simpler automatic mechanism with three spinning reels containing a total of five symbols: horseshoes, diamonds, spades, hearts and a Liberty Bell; the bell gave the machine its name.\n[…]\nThe Liberty Bell machine was so popular that it was copied by many slot machine manufacturers. The first of these, also called the \"Liberty Bell\", was produced by the manufacturer Herbert Mills in 1907. By 1908, \"bell\" machines had been installed in cigar stores, brothels and barber shops. Early machines, including an 1899 Liberty Bell, are now part of the Nevada State Museum's Fey Collection.\n[…]\nThe first Liberty Bell machines produced by Mills used the same symbols on the reels as did Charles Fey's original. Soon afterward, another version was produced with patriotic symbols, such as flags and wreaths, on the wheels. Later, a similar machine called the Operator's Bell was produced that included the option of adding a gum-vending attachment. As the gum offered was fruit-flavored, fruit symbols were placed on the reels: lemons, cherries, oranges and plums.\n[…]\nElectronic Gaming Machine.\n[…]\nQuiz machine\n[…]\nLegato, Frank. How to Win Millions Playing Slot Machines! ...Or Lose Trying (Bonus Books, 2004) ISBN 1-56625-216-4"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Slot_machine",
        "situacao": "ok",
        "texto": "Caça-níquel, caça-níqueis (português brasileiro) ou slot machine, máquina de slots (português europeu) (no Brasil o termo vindo do castelhano: máquina tragamonedas) é uma máquina de jogo que funciona por meio da introdução de moedas e que paga um prêmio, igualmente em moedas ou com a emissão de um voucher (bilhete de pagamento), a quem acertar as combinações previstas.\n[…]\nA criação pioneira de Charles Fey, o \"Liberty Bell\", marcou o surgimento do primeiro caça-níquel mecânico em 1895. Fey, um mecânico de automóveis de São Francisco (1862-1944), projetou a máquina com três rolos giratórios, adornados com símbolos como diamantes, espadas e corações, além da imagem de um Sino da Liberdade rachado. Um giro bem-sucedido que exibisse três sinos consecutivos resultava no maior pagamento, equivalente a cinquenta centavos ou dez níqueis.\n[…]\nO mesmo, contudo, não se aplica aos caça-níqueis virtuais, conhecidos como bets. Ainda que envolvidos por diversas polêmicas, os serviços de apostas virtuais vêm sendo gradualmente permitidos, com início na Lei n. 13.756/2018, a qual instituiu a modalidade \"apostas de quota fixa\" como sendo permitida.\n[…]\nEm 31 de julho de 2024, o Ministério da Fazenda, durante o governo do presidente Luiz Inácio Lula da Silva, publicou a Portaria nº 1.207, que estabelece regras específicas para diversas modalidades de apostas online, incluindo caça-níqueis (slots), jogos de colisão (crash games), roletas, blackjack, dados e outras categorias de jogos virtuais.\n[…]\nGrochowski, John (2005). The Slot Machine Answer Book: How They Work, How They've Changed, and How to Overcome the House Advantage (em inglês). Los Angeles: Bonus Books. ISBN 1-56625-235-0\n[…]\nLegato, Frank (2004). How to Win Millions Playing Slot Machines! ...Or Lose Trying (em inglês). Chicago: Bonus Books. ISBN 1-56625-216-4",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Jogo do bicho",
      "descricao": "Jogo de apostas brasileiro baseado numa tabela de animais, criado em 1892 no Rio de Janeiro."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "O jogo do bicho nasceu em 1892 num zoológico do Rio de Janeiro, criado pelo Barão de Drummond. Em que bairro carioca ficava esse zoológico?",
    "resposta": "Vila Isabel",
    "distratores": [
      "Tijuca",
      "Botafogo",
      "Lapa"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Jogo_do_bicho"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Jogo_do_bicho",
        "situacao": "ok",
        "texto": "O jogo do bicho é uma modalidade de loteria ilegal amplamente difundida no Brasil, organizada de maneira informal e não regulamentada no país. Baseado na associação de números a 25 animais, o jogo permite apostas em diferentes combinações numéricas ou em animais específicos. Cada um dos 25 animais tem quatro números correspondentes, e as opções de apostas e premiações variam conforme as combinaçõe\n[…]\nA loteria surgiu no Rio de Janeiro em 1892, criada por João Batista Viana Drummond, proprietário do Jardim Zoológico de Vila Isabel, com autorização do poder público. Inicialmente consistia em sorteios diários realizados dentro do zoológico, com os visitantes recebendo bilhetes contendo imagens de animais. Sua fama levou à expansão do jogo de azar para fora do parque, com bilhetes vendidos em diversos pontos da cidade.\n[…]\nAs raízes do jogo do bicho contemporâneo situam-se no Rio de Janeiro entre o final do período monárquico brasileiro e o início da era republicana. Criado pelo empresário João Batista Viana Drummond, o jogo surgiu inicialmente dentro do Jardim Zoológico de Vila Isabel, fundado por ele em 1888. Para incrementar as receitas do zoológico, Drummond obteve permissão em 1890 para explorar \"jogos públicos lícitos\".\n[…]\nÀ medida que o jogo se expandia, as autoridades começaram a associá-lo ao \"vício\" e à \"desordem\", gerando críticas e reações negativas na opinião pública carioca. Em 1895, após a pressão popular e o aumento do jogo clandestino, o prefeito do Rio de Janeiro Furquim Werneck de Almeida rescindiu o contrato com o zoológico e proibiu o jogo.\n[…]\nO zoológico da Vila Isabel entrou em declínio, e o jogo do bicho passou a ser realizado clandestinamente por redes de banqueiros que continuaram a desafiar a repressão das autoridades nas décadas seguintes.\n[…]\n«O mapa do jogo do bicho em São Paulo». Folha de S.Paulo. 30 de outubro de 1996. Consultado em 1 de janeiro de 2025"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Jogo do bicho",
      "descricao": "Jogo de apostas brasileiro baseado numa tabela de animais, criado em 1892 no Rio de Janeiro."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "No Rio de Janeiro, muitos banqueiros do jogo do bicho ficaram famosos como patronos e financiadores de que tipo de agremiação popular?",
    "resposta": "Escolas de samba",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Jogo_do_bicho"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Jogo_do_bicho",
        "situacao": "ok",
        "texto": "O jogo do bicho é uma modalidade de loteria ilegal amplamente difundida no Brasil, organizada de maneira informal e não regulamentada no país. Baseado na associação de números a 25 animais, o jogo permite apostas em diferentes combinações numéricas ou em animais específicos. Cada um dos 25 animais tem quatro números correspondentes, e as opções de apostas e premiações variam conforme as combinaçõe\n[…]\nBanqueiros do bicho também estiveram associados a práticas de lavagem de dinheiro e financiamento de escolas de samba e, em menor intensidade, clubes de futebol. Ao final do século XX, o jogo havia se consolidado no estado do Rio de Janeiro e se espalhado por outras unidades federativas do país, com aplicação da lei variando entre repressão e tolerância. Desde 1967, a Paraíba é o único estado onde a atividade é regulamentada.\n[…]\nEssa arranjo foi fundamental para transformar o jogo do bicho em um grande empreendimento econômico no estado fluminense. Com a fundação da Liga Independente das Escolas de Samba na década de 1980, os banqueiros consolidaram sua posição como figuras centrais na economia e na sociedade carioca, especialmente como patrocinadores das escolas de samba.\n[…]\nLopes, Nei; Simas, Luiz Antonio (2015). Dicionário da História Social do Samba 2ª ed. Rio de Janeiro: Civilização Brasileira\n[…]\n«O mapa do jogo do bicho em São Paulo». Folha de S.Paulo. 30 de outubro de 1996. Consultado em 1 de janeiro de 2025\n[…]\nOtavio, Chico; Jupiara, Aloy (6 de outubro de 2013). «Guimarães, 'o comandante' na Liga das Escolas de samba». O Globo. Consultado em 26 de dezembro de 2024. Cópia arquivada em 12 de março de 2026\n[…]\nSimas, Luiz Antonio (7 de fevereiro de 2024). «Como a negociação com o jogo do bicho garantiu a sobrevivência das escolas de samba do Rio». The Intercept Brasil. Consultado em 26 de dezembro de 2024. Cópia arquivada em 9 de fevereiro de 2026"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Pipa",
      "descricao": "Brinquedo de papel ou tecido sobre varetas, empinado ao vento preso a uma linha, também chamado de papagaio ou pandorga."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Segundo o relato tradicional, em 1752, que americano empinou uma pipa durante uma tempestade para mostrar que o raio é eletricidade?",
    "resposta": "Benjamin Franklin",
    "fonte": [
      "https://en.wikipedia.org/wiki/Kite_experiment"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Kite_experiment",
        "situacao": "ok",
        "texto": "The kite experiment is a scientific experiment in which a kite with a pointed conductive wire attached to its apex is flown near thunder clouds to collect static electricity from the air and conduct it down the wet kite string to the ground. The experiment was first proposed in 1752 by Benjamin Franklin, who reportedly conducted the experiment with the assistance of his son William. The experiment\n[…]\nFranklin conceived the idea of using a kite to raise the lightning rod to a great height. He described the kite experiment in a letter to the Pennsylvania Gazette published on October 19, 1752. In that letter, Franklin did not specify the circumstances in which he had carried out the experiment himself. Franklin's letter was read before the Royal Society on December 21 and later printed in the Philosophical Transactions.\n[…]\nThe fullest account of Franklin's actual experiment was given by Joseph Priestley in his 1767 treatise on The History and Present State of Electricity. Priestley presumably learned the details from Franklin himself, who was in London at the time that Priestley was composing that book. According to Priestley, Franklin's experiment took place in June 1752, when he flew a kite during a thunderstorm with the assistance of his son William Franklin.\n[…]\nThe kite was attached to a hemp string, at the other end of which Franklin tied a metallic house key that he had borrowed from Benjamin Loxley. That key was also tied to a silk cord, which acted as an insulator and allowed the Franklins to control the kite without touching the key or the conducting string of wet hemp. In order to keep the silk and the key dry, they sheltered from the rain in an open shed.\n[…]\nPhilosophical Transactions: \"A Letter of Benjamin Franklin, Esq; to Mr. Peter Collinson, F. R. S. concerning an Electrical Kite\" (PDF). Phil. Trans. 1751–1752 47, 565–567."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Experi%C3%AAncia_da_pipa",
        "situacao": "ok",
        "texto": "Experiência da pipa foi uma experiência científica na qual uma pipa com um fio condutor elétrico foi elevada e conduzida até perto de nuvens carregadas. Tencionava coletar eletricidade estática do ar e conduzi-la através do fio úmido até o chão. A experiência foi proposta pela primeira vez em 1752 por Benjamin Franklin, que a teria realizado com a assistência de seu filho William. Seu objetivo era\n[…]\nA experiência de Franklin foi realizada na Filadélfia em junho de 1752, de acordo com o relato de Joseph Priestley. Franklin descreveu o experimento no The Pennsylvania Gazette em 19 de outubro de 1752 sem mencionar que a tinha realizado. O relato foi lido para a Royal Society em 21 de dezembro e impresso como tal no Philosophical Transactions.\n[…]\nUma chave foi presa ao fio de cânhamo e conectada a uma garrafa de Leiden; um fio de seda foi amarrada a este. \"Esta chave carregou a garrafa, e do fogo elétrico assim obtido, ele acendeu espíritos, e realizou todos as outras experiências elétricas que são geralmente exibidas pela fricção de um globo animado tubo.\" Ao contrário da crença popular, a pipa não foi atingida por um raio visível; caso contrário, Franklin quase certamente teria sido morto pelo choque elétrico.\n[…]\nNo entanto, Franklin notou que fios soltos da corda de pipa estavam se repelindo e deduziu que a a garrafa de Leiden estava sendo carregada. Ele aproximou a mão da chave e observou uma faísca elétrica que provou a natureza elétrica do relâmpago.\n[…]\nPhilosophical Transactions: A Letter of Benjamin Franklin, Esq; to Mr. Peter Collinson, F. R. S. concerning an Electrical Kite. Phil. Trans. 1751–1752 47, 565–567; (em inglês) (PDF) Acessado em 12 de outubro de 2024.\n[…]\n«Benjamin Franklin. A film by Ken Burns» (em inglês). PBS. Consultado em 12 de outubro de 2024",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Pipa",
      "descricao": "Brinquedo de papel ou tecido sobre varetas, empinado ao vento preso a uma linha, também chamado de papagaio ou pandorga."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em várias cidades brasileiras, é proibido passar cerol, a mistura de cola e vidro moído, na linha da pipa. Por quê?",
    "resposta": "Pode cortar e matar pessoas",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Cerol"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Cerol",
        "situacao": "ok",
        "texto": "O cerol é uma mistura de cola (normalmente usado cola branca ou cola de madeira) com pó de vidro moído (ou limalha de ferro ou pó de quartzo) que é aplicada em linhas de pipas para cortar as linhas de outras pipas no ar, numa espécie de desafio com finalidade recreativa. O cerol é colocado diretamente na linha que será usada para empinar a pipa. A cola serve como aglomerante para fixar o pó de vid\n[…]\nO cerol tradicional é uma mistura de pó de vidro (normalmente de bulbos de lâmpadas) com cola, porém existem também varias modificações do cerol. Uma delas é substituir o vidro por pó de ferro, que é facilmente adquirido em serralherias. Por causa da presença do ferro, as linhas impregnadas com esta variante de cerol conduzem a eletricidade, bastando um único contato da linha com os fios de alta tensão para que a pessoa seja eletrocutada.\n[…]\nA linha chilena é uma variação de linha cortante que geralmente é produzida de forma industrial ou artesanal. Diferentemente da linha comum com cerol, ela é preparada com uma mistura de cola e pó abrasivo, como pó de quartzo ou óxido de alumínio, sendo engomada em passadas e dependendo da receita também pode ser usado calcita para \"blindar\" a linha, o que aumenta significativamente sua capacidade de cortar outras linhas durante disputas aéreas entre praticantes.\n[…]\nMuitos acidentes fatais ocorrem com motociclistas e ciclistas que passam por áreas onde crianças e adolescentes empinam pipas. Geralmente, nos casos fatais, é o pescoço do motociclista, ciclista ou pedestre que entra em contato com a linha de pipa com cerol. São, também, vítimas do cerol: aeronaves, pedestres,paraquedistas, skatistas e outros. Atualmente, em alguns municípios brasileiros, existem leis que proíbem o seu uso e venda. O vendedor de cerol pode ser preso, além de pagar multa."
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Jogo da velha",
      "descricao": "Jogo para dois em que se marcam xis e bolinhas numa grade de três por três, tentando alinhar três símbolos."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "No Brasil, a grade de xis e bolinhas é o jogo da velha. Em Portugal, o mesmo jogo leva o nome de qual animal?",
    "resposta": "Galo (jogo do galo)",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Jogo_da_velha"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Jogo_da_velha",
        "situacao": "ok",
        "texto": "O jogo da velha (português brasileiro) ou jogo do galo (português europeu) ou três em linha é um jogo e/ou passatempo popular. É um jogo de regras extremamente simples, que não traz grandes dificuldades para seus jogadores e é facilmente aprendido. A origem é desconhecida, com indicações de que pode ter começado no antigo Egito, onde foram encontrados tabuleiros esculpidos na rocha, que teriam mai\n[…]\nAlgumas lendas urbanas contam que o jogo terá nascido em Portugal, na cidade de Almada no ano 545. No entanto, só foi popularizado no ano 1500, pelo descobridor Pedro Álvares Cabral, que adorava jogar este jogo durante as suas viagens. Álvares Cabral terá decidido que este jogo seria o primeiro a ser ensinado ao povo indígena no Brasil.[carece de fontes]\n[…]\nO jogo pode ser jogado sobre um tabuleiro ou mesmo sendo riscado sobre um pedaço de papel ou mesa. O menor tabuleiro do mundo foi feito com ADN.\n[…]\nEmpate (chamado de velha no Brasil, costuma-se dizer que o jogo \"deu velha\"):\n[…]\nSe os dois jogadores jogarem sempre da melhor forma, o jogo terminará sempre em empate. A lógica do jogo é muito simples, de modo que não é difícil deduzir ou decorar todas as possibilidades para efetuar a melhor jogada - apesar de o número total de possibilidades ser muito grande, a maioria delas é simétrica, além de que as regras são simples. Por esse motivo, é muito comum que o jogo empate (ou \"dê velha\").\n[…]\nUm jogador pode facilmente jogar um jogo perfeito seguindo as seguintes regras, por ordem de prioridade:\n[…]\nComo não existe estratégia vencedora no jogo da velha, conquistar um triângulo depende de um erro do adversário. Entretanto, algumas delas são definidas através de uma única jogada do adversário.\n[…]\nJogo da Velha - Regras e como jogar\n[…]\nVersão do jogo para Android: Jogo da Velha\n[…]\nAlugar: Jogo da Velha"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Dominó",
      "descricao": "Jogo de peças retangulares divididas em duas metades marcadas com pontos de zero a seis."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O logotipo da rede Domino's Pizza é uma peça de dominó com três pontos. O que esses pontos representavam originalmente?",
    "resposta": "As três primeiras lojas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Domino%27s"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Domino%27s",
        "situacao": "ok",
        "texto": "Domino's Pizza, Inc., trading as Domino's, is an American multinational pizza restaurant chain founded in 1960. The corporation is Delaware-domiciled and headquartered at the Domino's Farms office park in Ann Arbor Township near Ann Arbor, Michigan. As of 2018, Domino's had approximately 15,000 stores, with 5,649 in the United States, 1,500 in India, and 1,249 in the United Kingdom. Domino's has s\n[…]\nBy 1965, Tom Monaghan had purchased two additional pizzerias; he now had a total of three locations in the same county. Monaghan wanted the stores to share the same branding, but the original owner forbade him from using the DomiNick's name. One day, an employee, Jim Kennedy, returned from a pizza delivery and suggested the name \"Domino's\". Monaghan immediately loved the idea and officially renamed the business to Domino's Pizza, Inc. in 1965.\n[…]\nThe company logo originally had three dots (🁀), representing the three stores in 1965. Monaghan planned to add a new dot with the addition of every new store, but this idea quickly faded, as Domino's experienced rapid growth. Domino's Pizza opened its first franchise location in 1967 and by 1978, the company had expanded to 200 stores. In 1975, Domino's faced a lawsuit by Amstar Corporation, the maker of Domino Sugar, alleging trademark infringement and unfair competition.\n[…]\nAs of July 27, 2020, Domino's Pizza opened in downtown Zagreb, Croatia.\n[…]\nAs of 2020, Domino's Pizza opened 550 stores in Turkey.\n[…]\nIn Central Asia, Domino's Pizza opened its first franchise in May 2024 in Tashkent (Uzbekistan).\n[…]\nIn February 2017, Domino's launched a wedding registry with gifts delivered in the form of Domino's eGift cards. Domino's also worked with Gugu Guru to create a pizza-themed baby registry. Customers have the option of signing up for Domino's pizza package to be served for the event.\n[…]\nList of pizza franchises\n[…]\nBusiness data for Domino's Pizza, Inc.:"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Domino%27s_Pizza",
        "situacao": "ok",
        "texto": "Domino's Pizza é uma empresa de alimentação baseada em pizzas. Atualmente, é a \"maior rede de entregas de pizzas do mundo\", com mais de 18.000 lojas em 95 países.\n[…]\nA Domino's Pizza foi fundada nos Estados Unidos em 1957 a partir da compra por Tom Monaghan e seu irmão James da \"Dominick's Pizza\", uma pequena pizzaria em Ypsilanti, Michigan.\n[…]\nO Grupo Trigo assumiu em 2004 a gestão da Domino's no Brasil e foi vendida em 2018 para o fundo de investimento Vinci Partners.\n[…]\nEm Junho de 2015, através do Grupo Daufood, é aberta a primeira Domino's em Telheiras, Lisboa. Atualmente em Portugal existem 50 lojas.\n[…]\nO logotipo da Domino's retrata uma peça de dominó azul e vermelha, com os números 2 e 1, da esquerda para a direita, representados por círculos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Cubo mágico",
      "descricao": "Quebra-cabeça tridimensional de faces coloridas giratórias criado pelo húngaro Ernő Rubik."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Antes de virar brinquedo, com que objetivo o professor Ernő Rubik construiu o primeiro cubo mágico, em 1974?",
    "resposta": "Ensinar geometria espacial aos alunos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Rubik%27s_Cube"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rubik%27s_Cube",
        "situacao": "ok",
        "texto": "The Rubik's Cube (Hungarian: Rubik-kocka) is a 3D combination puzzle invented in 1974 by Hungarian sculptor and professor of architecture Ernő Rubik. Originally called the Magic Cube (Hungarian: bűvös kocka), the puzzle was licensed by Rubik to be sold by Pentangle Puzzles in the United Kingdom in 1978, and then by Ideal Toy Corp in 1980 via businessman Tibor Laczi and Seven Towns founder Tom Krem\n[…]\nThe Cube has inspired an entire category of similar puzzles, commonly referred to as twisty puzzles, which includes the cubes of different sizes mentioned above, as well as various other geometric shapes. Some such shapes include the tetrahedron (Pyraminx), the octahedron (Skewb Diamond), the dodecahedron (Megaminx), and the icosahedron (Dogic). There are also puzzles that change shape such as Rubik's Snake and the Square One.\n[…]\nPuzzles like Rubik's Cube can be simulated by computer software to provide very large puzzles that are impractical to build, as well as virtual puzzles that cannot be physically built, such as many higher dimensional analogues of the Rubik's Cube. Google has released the Chrome Cube Lab in association with Ernő Rubik. The site has various interactive objects based on Rubik's Cube. Customised versions of Rubik's Cube can be created and uploaded.\n[…]\nBeyond Folk Art and oversized cube replicas, artists developed a pointillist art style using the cubes known as Rubik's Cube Art or Rubik's Cubism, which uses a standard Rubik's cube. The earliest recorded artworks appear to have been created by Fred Holly, a legally blind man in his 60s in the mid-1980s. These early pieces focus on geometrics and colour patterns.\n[…]\nSlocum, Jerry; Singmaster, David; Huang, Wei-Hwa; Gebhardt, Dieter; Hellings, Geert; Rubik, Ernő (2009). The Cube: The Ultimate Guide to the World's Bestselling Puzzle. Black Dog & Leventhal. ISBN 978-1579128050.\n[…]\nHow to solve a Rubik's Cube on YouTube"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cubo_de_Rubik",
        "situacao": "ok",
        "texto": "Cubo de Rubik (em inglês: Rubik's Cube), também conhecido como cubo mágico, é um quebra-cabeça tridimensional, inventado pelo professor de arquitetura húngaro Ernő Rubik em 1974. Originalmente foi chamado de \"Cubo Mágico\" pelo seu inventor, mas o nome foi alterado pela Ideal Toys para \"Cubo de Rubik\" quando a empresa licenciou o brinquedo em 1980. Nesse mesmo ano, ganhou o prêmio alemão de \"Jogo d\n[…]\nO primeiro protótipo do cubo foi fabricado em 1974 quando Ernő Rubik era professor do Departamento de Desenho de Interiores da Academia de Artes e Trabalhos Manuais Aplicados de Budapeste, Hungria. Por mais que seja amplamente dito que o cubo foi construído como uma ferramenta para auxiliar seus alunos na compreensão de objetos 3D, seu propósito era resolver o problema estrutural de mover as partes independentemente sem que o mecanismo todo se desmanchasse.\n[…]\nOs primeiros lotes do Cubo Mágico foram produzidos no final de 1977 e lançados em lojas de brinquedo em Budapeste. Com a permissão de Rubik, o empresário Tibor Laczi levou um dos cubos para a Nuremberg Toy Fair, na Alemanha, em fevereiro de 1979 em uma tentativa de popularizar o cubo. Foi notado pelo fundador de Seven Towns, Tom Kremer, e licenciado com Ideal Toys em setembro de 1979 para ser lançado mundialmente.\n[…]\nNo total, o número de combinações possíveis no cubo de Rubik é:\n[…]\nErnő Rubik foi a primeira pessoa a resolver o cubo de Rubik, levando cerca de um mês depois de criar seu protótipo de madeira em 1974. Seu método original se resumia em: resolver as quinas da camada D, colocar as quinas da camada U no lugar e depois orientá-las, resolver três meios da camada D, resolver três meios da camada U, resolver os demais meios das camadas D e U, por fim resolver os meios da camada do meio.\n[…]\nAlgumas variantes do cubo de Rubik:\n[…]\n«Rubiks.com» (em inglês). site oficial do Cubo de Rubik.\n[…]\n«Cubo Mágico Brasil»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Cubo mágico",
      "descricao": "Quebra-cabeça tridimensional de faces coloridas giratórias criado pelo húngaro Ernő Rubik."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Depois de ganhar o mundo com o nome de Rubik's Cube, o cubo mágico virou uma febre internacional em qual década?",
    "resposta": "Década de 1980",
    "distratores": [
      "Década de 1960",
      "Década de 1970",
      "Década de 1990"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Rubik%27s_Cube"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rubik%27s_Cube",
        "situacao": "ok",
        "texto": "The Rubik's Cube (Hungarian: Rubik-kocka) is a 3D combination puzzle invented in 1974 by Hungarian sculptor and professor of architecture Ernő Rubik. Originally called the Magic Cube (Hungarian: bűvös kocka), the puzzle was licensed by Rubik to be sold by Pentangle Puzzles in the United Kingdom in 1978, and then by Ideal Toy Corp in 1980 via businessman Tibor Laczi and Seven Towns founder Tom Krem\n[…]\nThe cube was released internationally in 1980 and became one of the most recognised icons in popular culture. It won the 1980 German Game of the Year special award for Best Puzzle. As of January 2024, around 500 million cubes had been sold worldwide, making it the world's bestselling puzzle game and bestselling toy. The Rubik's Cube was inducted into the US National Toy Hall of Fame in 2014.\n[…]\nAfter the first batches of Rubik's Cubes were released in May 1980, initial sales were modest, but Ideal began a television advertising campaign in the middle of the year which it supplemented with newspaper advertisements. At the end of 1980, Rubik's Cube won a German Game of the Year special award and won similar awards for best toy in the UK, France, and the US.\n[…]\nAs most people could solve only one or two sides, numerous books were published including David Singmaster's Notes on Rubik's \"Magic Cube\" (1980) and Patrick Bossert's You Can Do the Cube (1981). At one stage in 1981, three of the top ten best selling books in the US were books on solving Rubik's Cube, and the best-selling book of 1981 was James G. Nourse's The Simple Solution to Rubik's Cube which sold over 6 million copies.\n[…]\nHence, Ishigi's patent is generally accepted as an independent reinvention at that time. Rubik applied for more patents in 1980, including another Hungarian patent on 28 October. In the United States, Rubik was granted U.S. patent 4,378,116 on 29 March 1983 for the Cube. This patent expired in 2000."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cubo_de_Rubik",
        "situacao": "ok",
        "texto": "Cubo de Rubik (em inglês: Rubik's Cube), também conhecido como cubo mágico, é um quebra-cabeça tridimensional, inventado pelo professor de arquitetura húngaro Ernő Rubik em 1974. Originalmente foi chamado de \"Cubo Mágico\" pelo seu inventor, mas o nome foi alterado pela Ideal Toys para \"Cubo de Rubik\" quando a empresa licenciou o brinquedo em 1980. Nesse mesmo ano, ganhou o prêmio alemão de \"Jogo d\n[…]\nO cubo de Rubik tornou-se um ícone da década de 1980, década em que passou a ser mais reconhecido mundialmente.\n[…]\nMuitos cubistas continuam a praticar e competir não só a resolução do 3x3x3, mas também outros similares. Desde 2003, a Associação Mundial do Cubo Mágico (WCA, World Cube Association) organiza competições por todo o mundo e reconhece recordes nacionais, continentais e mundiais.\n[…]\nIdeal queria uma marca registrada com nome reconhecível, e o Cubo Mágico foi renomeado para Cubo de Rubik em 1980. O cubo fez sua estréia nas feiras de brinquedos de Londres, Paris, Nuremberg e Nova York em janeiro e fevereiro de 1980.\n[…]\nNo total, o número de combinações possíveis no cubo de Rubik é:\n[…]\nAtravés da montagem, podemos solucionar o cubo mágico com o auxílio da robótica, uma recente pesquisa elaborada por Silva, Henrique, Aires Fernandes e Castellanos trabalham com a resolução do cubo de Rubik utilizando programação pelo Dataloggin, um complemento auxiliar do software que permite fazer a leitura da programação em gráficos.\n[…]\nA montagem do protótipo que auxiliou na resolução do cubo mágico tinha como base referências da internet. O robô tinha o propósito de resolver o cubo mágico independente da forma que fosse desorganizado. Para auxiliar nesta resolução foi necessário acionar os sensores de cor para poder prever a solução do cubo e, assim, parar o algorítmico da programação.\n[…]\nAlgumas variantes do cubo de Rubik:\n[…]\n«Rubiks.com» (em inglês). site oficial do Cubo de Rubik.\n[…]\n«Cubo Mágico Brasil»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Sudoku",
      "descricao": "Passatempo de lógica em que se preenche uma grade de nove por nove com algarismos de um a nove, sem repetir em linhas, colunas e quadrados."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome sudoku abrevia uma frase japonesa que diz que os números devem permanecer num certo estado civil. Qual?",
    "resposta": "Solteiros",
    "fonte": [
      "https://en.wikipedia.org/wiki/Sudoku"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sudoku",
        "situacao": "ok",
        "texto": "Sudoku (; Japanese: 数独, romanized: sūdoku, lit. 'digit-single'; originally called Number Place) is a logic-based, combinatorial number-placement puzzle. In classic sudoku, the objective is to fill a 9×9 grid with digits so that each column, each row, and each of the nine 3×3 subgrids that compose the grid (also called \"boxes\", \"blocks\", or \"regions\") contains all of the digits from 1 to 9.\n[…]\nThe modern sudoku was most likely designed anonymously by Howard Garns, a 74-year-old retired architect and freelance puzzle constructor from Connersville, Indiana, and first published in 1979 by Dell Magazines as Number Place (the earliest known examples of modern sudoku).\n[…]\nKaji created the abbreviated name sudoku (数独), by taking only the first kanji of compound words to form a shorter version. Nikoli claims to hold trademark rights to the name \"sudoku\" in Japan, and some other publishers use the name Number Place (ナンバープレース, Nanbāpurēsu) or, more informally, a shortening of the two words, Num(ber) Pla(ce) (ナンプレ,  Nanpure). The puzzles are now published in mainstream Japanese periodicals, such as the Asahi Shimbun, as well as in puzzle books.\n[…]\nThe Times offers a 12×12-grid \"Dodeka Sudoku\" with 12 regions of 4×3 squares. Dell Magazines regularly publishes 16×16 \"Number Place Challenger\" puzzles (using the numbers 1–16 or the letters A-P). Nikoli offers 25×25 \"Sudoku the Giant\" behemoths. A 100×100-grid puzzle dubbed \"Sudoku-zilla\" was published in 2010.\n[…]\nAnother common variant is to add limits on the placement of numbers beyond the usual row, column, and box requirements. Often, the limit takes the form of an extra \"dimension\"; the most common is to require the numbers in the main diagonals of the grid to also be unique. The aforementioned \"Number Place Challenger\" puzzles are all of this variant, as are the sudoku X puzzles in The Daily Mail, which use 6×6 grids."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sudoku",
        "situacao": "ok",
        "texto": "Sudoku, por vezes escrito Su Doku (数独, sūdoku) é um jogo baseado na colocação lógica de números. O objetivo do jogo é a colocação de números de 1 a 9 em cada uma das células vazias numa grade de 9×9, constituída por 3×3 subgrades chamadas regiões. O quebra-cabeça contém algumas pistas iniciais, que são números inseridos em algumas células, de maneira a permitir uma indução ou dedução dos números e\n[…]\nA palavra \"sudoku\" é de origem japonesa. Ela é uma junção de duas palavras japonesas: \"su\" significa \"número\" e \"doku\" significa \"único\". Portanto, \"sudoku\" pode ser traduzido aproximadamente como \"números únicos\".\n[…]\nA palavra \"sudoku\" em si foi cunhada pelo empresário japonês Maki Kaji, que fez uma contração da frase japonesa \"cada número deve ser individual\".\n[…]\nHyper Sudoku usa a grade clássica 9×9 com regiões 3×3, mas define quatro regiões interiores adicionais 3×3 nas quais os números 1–9 devem aparecer exatamente uma vez. Foi inventado por Peter Ritmeester e publicado pela primeira vez por ele no jornal holandês NRC Handelsblad em outubro de 2005, e desde abril de 2007 diariamente no International New York Times (International Herald Tribune).\n[…]\nO supracitado Number Place Challenger faz parte desta variante, assim como o Sudoku X no Daily Mail, o qual utiliza grades 6×6. O Daily Mail também apresenta o Super Sudoku X em sua edição de final de semana: uma grade 8×8 na qual as linhas, colunas e diagonais principais, blocos 2×4 e blocos 4×2 contêm cada número apenas uma vez, bem como as suas diagonais principais; Conceptis Puzzles apresenta o Diagonal Sudoku em uma grade 9×9 e blocos 3×3 com as mesmas regras supracitadas.\n[…]\nTambém pode ser encontrado o Circular Sudoku, também conhecido como Target Sudoku, inventado pelo matemático Peter Higgins. Nessa variante, todos os números devem aparecer em círculos concêntricos bem como em todos os pares de fatias adjacentes.\n[…]\nSudoku Hard",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Sudoku",
      "descricao": "Passatempo de lógica em que se preenche uma grade de nove por nove com algarismos de um a nove, sem repetir em linhas, colunas e quadrados."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Apesar do nome japonês, o sudoku moderno apareceu em 1979, com o nome de Number Place, numa revista de qual país?",
    "resposta": "Estados Unidos",
    "distratores": [
      "Japão",
      "China",
      "Reino Unido"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Sudoku"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sudoku",
        "situacao": "ok",
        "texto": "Sudoku (; Japanese: 数独, romanized: sūdoku, lit. 'digit-single'; originally called Number Place) is a logic-based, combinatorial number-placement puzzle. In classic sudoku, the objective is to fill a 9×9 grid with digits so that each column, each row, and each of the nine 3×3 subgrids that compose the grid (also called \"boxes\", \"blocks\", or \"regions\") contains all of the digits from 1 to 9.\n[…]\nFrench newspapers featured similar puzzles in the 19th century, and the modern form of the puzzle first appeared in 1979 puzzle books by Dell Magazines under the name Number Place.\n[…]\nThe modern sudoku was most likely designed anonymously by Howard Garns, a 74-year-old retired architect and freelance puzzle constructor from Connersville, Indiana, and first published in 1979 by Dell Magazines as Number Place (the earliest known examples of modern sudoku).\n[…]\nThe Times offers a 12×12-grid \"Dodeka Sudoku\" with 12 regions of 4×3 squares. Dell Magazines regularly publishes 16×16 \"Number Place Challenger\" puzzles (using the numbers 1–16 or the letters A-P). Nikoli offers 25×25 \"Sudoku the Giant\" behemoths. A 100×100-grid puzzle dubbed \"Sudoku-zilla\" was published in 2010.\n[…]\nAnother common variant is to add limits on the placement of numbers beyond the usual row, column, and box requirements. Often, the limit takes the form of an extra \"dimension\"; the most common is to require the numbers in the main diagonals of the grid to also be unique. The aforementioned \"Number Place Challenger\" puzzles are all of this variant, as are the sudoku X puzzles in The Daily Mail, which use 6×6 grids.\n[…]\nThe number of classic 9×9 sudoku solution grids is 6,670,903,752,021,072,936,960, or around 6.67×1021. The number of essentially different solutions, when symmetries such as rotation, reflection, permutation, and relabelling are taken into account, is much smaller, 5,472,730,538."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sudoku",
        "situacao": "ok",
        "texto": "Sudoku, por vezes escrito Su Doku (数独, sūdoku) é um jogo baseado na colocação lógica de números. O objetivo do jogo é a colocação de números de 1 a 9 em cada uma das células vazias numa grade de 9×9, constituída por 3×3 subgrades chamadas regiões. O quebra-cabeça contém algumas pistas iniciais, que são números inseridos em algumas células, de maneira a permitir uma indução ou dedução dos números e\n[…]\nA palavra \"sudoku\" em si foi cunhada pelo empresário japonês Maki Kaji, que fez uma contração da frase japonesa \"cada número deve ser individual\".\n[…]\nO supracitado Number Place Challenger faz parte desta variante, assim como o Sudoku X no Daily Mail, o qual utiliza grades 6×6. O Daily Mail também apresenta o Super Sudoku X em sua edição de final de semana: uma grade 8×8 na qual as linhas, colunas e diagonais principais, blocos 2×4 e blocos 4×2 contêm cada número apenas uma vez, bem como as suas diagonais principais; Conceptis Puzzles apresenta o Diagonal Sudoku em uma grade 9×9 e blocos 3×3 com as mesmas regras supracitadas.\n[…]\nPassatempos construídos a partir de múltiplas grades sudoku são comuns: cinco grades 9x9 sobrepostas umas às outras nas regiões dos cantos são conhecidas no Japão como Gattai 5 (cinco unidos) Sudoku. No The Times e no The Sydney Morning Herald, esta forma de passatempo é conhecida como Samurai SuDoku. No Conceptis Puzzles, são publicados semanalmente os Multi Sudoku, que são compostos de duas a cinco grades sobrepostas.\n[…]\nO enigma é então completado designando-se um número inteiro entre 1 e 9 para cada interpolação, de tal maneira que os vértices que são unidos através de uma borda não tenham nenhum número inteiro igual designado neles. Uma grade de solução válida para o sudoku é também um quadrado latino. Há significativamente menos soluções de grades de sudoku válidas do que os quadrados latinos, porque o sudoku impõe restrições de região adicionais.\n[…]\nSudoku Hard",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Chaturanga",
      "descricao": "Jogo de estratégia da Índia antiga, surgido por volta do século seis, ancestral do xadrez."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome chaturanga, do jogo indiano que deu origem ao xadrez, significa quatro partes. Quatro partes de quê?",
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
    "indice": 20,
    "ancora": {
      "nome": "Bispo (xadrez)",
      "descricao": "Peça do xadrez que se move na diagonal, chamada al-fil no xadrez árabe."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Em francês, o bispo do xadrez tem um nome bem diferente: fou. O que essa palavra significa?",
    "resposta": "Louco (bobo da corte)",
    "fonte": [
      "https://en.wikipedia.org/wiki/Bishop_(chess)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bishop_(chess)",
        "situacao": "ok",
        "texto": "The bishop (♗, ♝) is a piece in the game of chess. It moves and captures along diagonals without jumping over interfering pieces. Each player begins the game with two bishops. The starting squares are c1 and f1 for White's bishops, and c8 and f8 for Black's bishops.\n[…]\nThis has led to some speculations as to the origin of the English use of the term \"bishop\".\n[…]\nIn France, for example, the groove was taken to be a jester's cap, which fit with the piece's French name fou (jester) even though its etymology comes from the original arabic alfil. Similarly, in Romania it is named nebun (meaning crazy, but also jester).\n[…]\nIn some Slavic languages (e.g. Czech/Slovak) the bishop is called střelec/strelec, which directly translates to English as a \"shooter\" meaning an archer, while in others it is still known as \"elephant\" (e.g. Russian slon). In South Slavic languages it is usually known as lovac, meaning \"hunter\", or laufer, taken from the German name for the same piece (laufer is also a co-official Polish name for the piece alongside goniec).\n[…]\nIn Bulgarian the bishop is called \"officer\" (Bulgarian: офицер), which is also the piece's alternative name in Russian; it is also called αξιωματικός (axiomatikos) in Greek, афіцэр (afitser) in Belarusian and oficeri in Albanian.\n[…]\nUnicode defines three codepoints for a bishop:\n[…]\n♗ U+2657 White Chess Bishop\n[…]\n♝ U+265D Black Chess Bishop\n[…]\n🨃 U+1FA03 Neutral Chess Bishop\n[…]\nHooper, David; Whyld, Kenneth (1996) [First pub. 1992], \"bishop\", The Oxford Companion to Chess (2nd ed.), Oxford University Press, p. 41, ISBN 0-19-280049-3\n[…]\nMednis, Edmar (1990), Practical Bishop Endings, Chess Enterprises, ISBN 0-945470-04-5\n[…]\nPiececlopedia: Bishop by Fergus Duniho and Hans Bodlaender, The Chess Variant Pages"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bispo_%28xadrez%29",
        "situacao": "ok",
        "texto": "O Bispo é uma peça menor do xadrez ocidental de valor aproximado de três peões. Movimenta-se em diagonal, não podendo pular peças intervenientes, e captura tomando o lugar ocupado pela peça adversária. Devido às características de seu movimento tem a deficiência da fraqueza da cor onde seu movimento fica limitado à cor da casa de onde inicia a partida.\n[…]\nInicialmente, o bispo não fazia parte do Chaturanga e de seu sucessor árabe Xatranje - jogos de tabuleiro orientais que teriam originado o xadrez - tendo sido incluído no jogo somente por volta do século XII, já na Europa. Seu antecessor, o alfil tinha seu nome ligado a palavra Elefante e os historiadores indicam que a mudança do nome decorreu da influência da Igreja Católica na Idade Média e da semelhança da peça abstrata árabe com a mitra utilizada pelos bispos na época.\n[…]\nNa França a peça foi nomeada inicialmente como Aufin e posteriormente como Fou, com o significado de bobo da corte, que permanece até a atualidade. Na Alemanha e Dinamarca a peça é empregada com o significado de corredor, Läufer e Looper, respectivamente. Em países sob influência nórdica, a peça adquiriu o significado de Bispo, o que provavelmente teve influência da posição da peça ao lado do Rei no tabuleiro e o status da Igreja como principal conselheira da monarquia.\n[…]\nConforme estabelece a FIDE, o Bispo deve ser representado pela letra B nos países lusófonos nas notações algébricas de xadrez que devem ser utilizadas em torneios oficiais. Em periódicos e na literatura, recomenda-se a utilização de figuras ou diagramas ( e )\n[…]\nPor fim, o bispo é capaz de empregar táticas como o espeto e a pregadura, sendo o cavalo incapaz de realizar qualquer delas.\n[…]\n«Piececlopedia: Bishop» (em inglês). por Hans L. Bodlaender e Fergus Duniho.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Problema do trigo e do tabuleiro de xadrez",
      "descricao": "Lenda e problema matemático em que o inventor do xadrez pede grãos de trigo dobrando a quantidade a cada casa do tabuleiro."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Numa lenda, o inventor do xadrez pede ao rei grãos de trigo, dobrando a quantidade a cada casa do tabuleiro. Por que o rei não consegue pagar?",
    "resposta": "Não há trigo suficiente no mundo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Wheat_and_chessboard_problem"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Wheat_and_chessboard_problem",
        "situacao": "ok",
        "texto": "The wheat and chessboard problem (sometimes expressed as the rice and chessboard problem) is a mathematical problem expressed in textual form as:\n[…]\nThe problem appears in different stories about the invention of chess. One of them includes the geometric progression problem. The story is first known to have been recorded in 1256 by Ibn Khallikan. Another version has the inventor of chess (in some tellings Sessa, an ancient Indian minister) request his ruler give him wheat according to the wheat and chessboard problem.\n[…]\nIn this problem a=1, r=2 and n=64.\n[…]\nThe number of grains of wheat on the second half of the chessboard is 232 + 233 + 234 + ... + 263, for a total of 264 − 232 grains. This is equal to the square of the number of grains on the first half of the board, plus itself. The first square of the second half alone contains one more grain than the entire first half. On the 64th square of the chessboard alone, there would be 263 = 9,223,372,036,854,775,808 grains, more than two billion times as many as on the first half of the chessboard.\n[…]\nOn the entire chessboard there would be 264 − 1 = 18,446,744,073,709,551,615 grains of wheat, weighing about 1,199,000,000,000 metric tons. This is over 1,400 times the global production of wheat (729 million metric tons in 2014, 780.8 million tonnes in 2019, and 842.12 million tonnes in 2025/2026).\n[…]\nWeisstein, Eric W. \"Wheat and Chessboard Problem\". MathWorld.\n[…]\nSalt and chessboard problem – A variation on the wheat and chessboard problem with measurements of each square.\n[…]\nLearning materials related to Math Adventures/Wheat and the Chessboard at Wikiversity"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Mikhail Tal",
      "descricao": "Grande mestre soviético letão de xadrez, oitavo campeão mundial."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Pelo estilo cheio de sacrifícios ousados e ataques imprevisíveis, o campeão mundial de xadrez Mikhail Tal ganhou qual apelido?",
    "resposta": "O Mago de Riga",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mikhail_Tal"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mikhail_Tal",
        "situacao": "ok",
        "texto": "Mikhail Tal (9 November 1936 – 28 June 1992) was a Soviet Latvian chess grandmaster and the eighth World Chess Champion. He is considered a creative genius and is widely regarded as one of the most influential players in chess history. Tal played in an attacking and combinatorial style. His play was known for improvisation and unpredictability. Vladislav Zubok said of him, \"Every game for him was \n[…]\nHis nickname was \"Misha\", a diminutive for Mikhail, and he earned the nickname \"The Magician from Riga\". Both The Mammoth Book of the World's Greatest Chess Games and Modern Chess Brilliancies include more games by Tal than any other player.\n[…]\nAs a child, Tal joined the Riga Palace of Young Pioneers chess club. In 1949, he played Ratmir Kholmov, a young master who had recently competed in the Chigorin Memorial chess tournament in 1947, in a simultaneous exhibition. Tal used an imaginative combination to win his game at the age of 13.\n[…]\nPoor health caused a slump in his play from late 1968 to late 1969, but he recovered his form after having a kidney removed. He won the 1979 Riga Interzonal with an undefeated score of 14/17, but the next year lost a quarter-final match to Lev Polugaevsky, one of the players to hold a positive score against him.\n[…]\nTal was known as \"The Magician from Riga\", and his style of play was very aggressive and involved heavy calculation. He often sacrificed material in search of activity and initiative, which is defined as the ability to make threats to which the opponent must respond. Many masters found it difficult to refute Tal's ideas, looking at how many problems he created, though deeper post-game analysis found flaws in some of his calculations.\n[…]\nBoris Spassky vs. Tal, USSR Championship, Riga 1958, Nimzo-Indian Defence, Sämisch Variation (E26), 0–1\n[…]\nMikhail Tal player profile and games at Chessgames.com\n[…]\nMikhail N. Tal FIDE rating history at OlimpBase.org"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mikhail_Tal",
        "situacao": "ok",
        "texto": "Mikhail Nekhemievich Tal (letão: Mihails Tāls; russo: Михаил Нехемьевич Таль; Riga, 9 de novembro de 1936 — Moscou, 28 de junho de 1992), apelidado Mago de Riga, foi um enxadrista letoniano soviético que deteve o título de oitavo campeão mundial de xadrez em 1960. É um dos jogadores mais populares de todos os tempos, conhecido por seu estilo agressivo e por seus sacrifícios táticos.\n[…]\nConhecido como \"O Mago de Riga\", Tal é considerado por muitos o mais brilhante jogador de ataque da história do xadrez, fazendo uso de um jogo extremamente criativo, arriscado e cheio de recursos táticos. O seu primeiro e mais influente treinador foi Alexander Koblenz e sua forma de jogar foi comparada com a do ex-campeão mundial Emanuel Lasker.\n[…]\nO estilo de jogo de Mikhail Tal foi criticado pelo também ex-campeão mundial Vasily Smyslov, que o reduziu a um conjunto de \"truques\". Contudo, ele bateu convincentemente todos os Grandes Mestres de sua época recorrendo a sua habitual agressividade (Viktor Korchnoi, vice-campeão mundial de 1974 a 1981, é um dos poucos com um resultado pessoal positivo contra Tal). Os sacrifícios intuitivos a que Tal recorria criavam grandes complicações, parecendo impossíveis de resolver a muitos mestres.\n[…]\nExcessivamente otimista e sem querer se submeter a novos exames, o Mago de Riga desistiu do adiamento acreditando que venceria o match – o que provou ser um grande erro.\n[…]\nTal vs. Joel Lautier, Barcelona 1992. Em seu último torneio antes de sua morte, aos 55 anos, o Mago de Riga produz uma última obra-prima contra um Grande Mestre da próxima geração.\n[…]\nIsso não deveria ser uma surpresa porque Tal foi o melhor escritor a se tornar campeão mundial\". O Grande Mestre da Nova Zelândia Murray Chandler escreveu na introdução da edição algébrica reeditada em 1997 de The Life and Games of Mikhail Tal que o livro foi possivelmente o melhor livro de xadrez já escrito.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Garry Kasparov",
      "descricao": "Enxadrista nascido em Baku em 1963, campeão mundial de xadrez de 1985 a 2000."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Garry Kasparov nasceu com o sobrenome Weinstein. O sobrenome com que ficou famoso é a versão russa do sobrenome de quem?",
    "resposta": "Da mãe",
    "distratores": [
      "Do padrasto",
      "Da avó paterna",
      "Do primeiro treinador"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Garry_Kasparov"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Garry_Kasparov",
        "situacao": "ok",
        "texto": "Garry Kimovich Kasparov (born Garik Kimovich Weinstein on 13 April 1963) is a Russian chess grandmaster, political activist and writer, who was the World Chess Champion from 1985 to 2000. His peak FIDE chess rating of 2851, achieved in 1999, was the highest recorded until being surpassed by Magnus Carlsen in 2013. From 1984 until his retirement from regular competitive chess in 2005, Kasparov was \n[…]\nKasparov was born Garik Kimovich Weinstein (Russian: Гарик Кимович Вайнштейн, romanized: Garik Kimovich Vainshtein) in Baku, Azerbaijan SSR (now Azerbaijan), Soviet Union. His father, Kim Moiseyevich Weinstein, was Jewish and his mother, Klara Shagenovna Kasparova, was Armenian. Both of his mother's parents were Armenians from Karabakh. According to Kasparov himself, he was named after United States President Harry S. Truman, \"whom my father admired for taking a strong stand against communism.\n[…]\nGarry Kasparov on Garry Kasparov, part III (2014, Everyman Chess)\n[…]\nKasparov, Garry, Jonathan Tisdall and Jim Plaskett. 2000. My Story. Grandmaster Video.\n[…]\nKasparov, Garry. 2004. How to Play the Queen's Gambit. Chessbase. ISBN 978-3-937549-06-4\n[…]\nKasparov, Garry. 2005. How to Play the Najdorf. Chessbase. vol. 1 ISBN 978-3-937549-25-5, vol. 2 ISBN 978-3-937549-78-1\n[…]\nKasparov, Garry. 2012. How I Became World Champion 1973–1985. Chessbase. ISBN 978-3-86681-341-0\n[…]\nKasparov, Garry. 2017. Garry Kasparov Teaches Chess. Masterclass.com.\n[…]\nKasparov, Garry. 2022. Stand with Ukraine in the fight against evil, Ted Talk.\n[…]\nStohl, Igor (2005). Garry Kasparov's Greatest Chess Games, Volume 1. Gambit Publications. ISBN 1-904600-32-8.\n[…]\nStohl, Igor (2006). Garry Kasparov's Greatest Chess Games, Volume 2. Gambit Publications. ISBN 1-904600-43-3.\n[…]\nMedia related to Garry Kasparov at Wikimedia Commons\n[…]\nGarry Kasparov player profile and games at Chessgames.com\n[…]\nDeep Thinking. Garry Kasparov. Talks at Google\n[…]\nGarry Kasparov on Bluesky"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Garry_Kasparov",
        "situacao": "ok",
        "texto": "Garry Kímovich Kasparov (em russo: Га́рри Ки́мович Каспа́ров; pronúncia russa AFI: [ˈɡarʲɪ ˈkʲiməvʲɪtɕ kɐˈsparəf], nascido com o nome Garry Kimovich Weinstein, Bacu, 13 de abril de 1963) é um Grande Mestre e ex-campeão mundial de xadrez, escritor e ativista político nascido na República Socialista Soviética do Azerbaijão, União Soviética (atual Azerbaijão). É considerado por muitos o maior enxadri\n[…]\nGarry Kasparov nasceu Garry Weinstein (russo: Гарри Вайнштейн) em Bacu, de uma mãe armênia e um pai judeu. Ele se iniciou no estudo do xadrez após propor uma solução para um problema criado por seus pais. Seu pai morreu de leucemia quando ele tinha sete anos. Aos 12, ele adotou o sobrenome armeniano de sua mãe, Kasparyan, modificando-o para uma versão mais russa, Kasparov.\n[…]\nEm 1978, Kasparov participou do torneio Sokolsky Memorial, em Minsk. Ele foi convidado como uma exceção mas ficou em primeiro lugar. Garry já disse repetidamente que este evento foi o ponto de virada da sua vida e convenceu-o de escolher o xadrez como sua carreira.\n[…]\nKasparov disse que poderia jogar em alguns eventos de xadrez rápido por diversão, mas pretendia dedicar mais tempo para seus livros e em outras áreas da vida, e iria continuar se envolvendo na política russa.\n[…]\nEm 30 de setembro de 2007, Kasparov entrou na corrida presidencial russa, recebendo 379 votos de 498 em um congresso realizado em Moscou.\n[…]\nEm março de 2014, Kasparov obteve o passaporte e a cidadania croata.\n[…]\nEm outubro de 2016, publicou o livro \"O Inimigo que Vem do Frio\", onde alerta para a passividade das lideranças do Ocidente ao lidarem com o regime russo de Vladimir Putin, que apelida de \"máfia\". A edição portuguesa do livro de Kasparov (da editora Clube do Autor) aparece com o sub-título \"Os riscos da liderança russa e a grande ameaça à paz no mundo ocidental\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Bobby Fischer",
      "descricao": "Enxadrista americano, campeão mundial de xadrez em 1972 após vencer o soviético Boris Spassky."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1992, Bobby Fischer jogou uma revanche contra Boris Spassky e passou a ser procurado pela justiça americana. Por quê?",
    "resposta": "Jogou na Iugoslávia, violando sanções",
    "fonte": [
      "https://en.wikipedia.org/wiki/Bobby_Fischer"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bobby_Fischer",
        "situacao": "ok",
        "texto": "Robert James Fischer (March 9, 1943 – January 17, 2008) was an American  chess grandmaster and the eleventh World Chess Champion. A chess prodigy, he won his first of a record eight US Championships at the age of 14. In 1964, he won with an 11–0 score, the only perfect score in the history of the tournament. Qualifying for the 1972 World Championship, Fischer swept matches with Mark Taimanov and B\n[…]\nBronstein felt that Fischer \"had the right to play the match with Karpov on his own conditions\". Years later, in his 1992 match against Spassky, Fischer similarly said that it was Karpov who refused to play against him under Fischer's conditions.\n[…]\nFischer and Spassky gave ten press conferences during the match. Seirawan attended the match and met with Fischer on several occasions; the two analyzed some match games and had personal discourse. Seirawan later wrote: \"After September 23 [1992], I threw most of what I'd ever read about Bobby out of my head. Sheer garbage.\n[…]\nThe Tokyo-based Canadian journalist John Bosnitch set up the \"Committee to Free Bobby Fischer\" after meeting Fischer at Narita Airport and offering to assist him. Boris Spassky wrote a letter to US president George W. Bush, asking \"For mercy, charity\", and, if that was not possible, \"to put [him] in the same cell with Bobby Fischer\" and \"to give [them] a chess set\".\n[…]\nOn September 16, 2015, the American biographical film Pawn Sacrifice was released, starring Tobey Maguire as Fischer, Liev Schreiber as Boris Spassky, Lily Rabe as Joan Fischer, and Peter Sarsgaard as William Lombardy.\n[…]\nFischer vs. Boris Spassky, 1992; 1st match game, Ruy Lopez, Breyer Variation (C95), 1–0; annotated on the 1992 match page. Fischer's \"fine\" victory in his first competitive game in 20 years \"made a great impression on the chess world\", although in Kasparov's view, Spassky's play was below the standard of the leading grandmasters of the time."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bobby_Fischer",
        "situacao": "ok",
        "texto": "Robert James \"Bobby\" Fischer (Chicago, 9 de março de 1943 – Reykjavík, 17 de janeiro de 2008) foi um grande mestre de xadrez americano, naturalizado islandês, e décimo primeiro campeão mundial de xadrez, sendo o primeiro e único campeão nascido nos Estados Unidos.\n[…]\nApós perder o título mundial, Fischer tornou-se recluso e, de certa forma, excêntrico, desaparecendo tanto dos campeonatos de xadrez quanto da mídia. Em 1992, reapareceu em uma revanche contra Spassky, na Iugoslávia, país que, à época, estava sob embargo da ONU. Sua participação na partida gerou um conflito com o governo norte-americano, que requereu imposto de renda sobre o prêmio pela sua vitória, chegando a emitir um mandado de prisão a Fischer.\n[…]\nAos treze anos jogou a \"Partida do Século\" num torneio de Mestres em 1956 contra Donald Byrne, irmão de Robert Byrne, o qual também era Grande Mestre e foi vítima de uma das maiores partidas de Fischer no US-ch 1963, o qual Fischer venceu com 100% de aproveitamento, 13 em 13 possíveis e rating performance acima de 3000, feito igualado por Emanuel Lasker, na Alemanha.\n[…]\nEm 1992, Fischer voltou a disputar um encontro contra Boris Spassky. Mesmo Fischer estando 20 anos afastado, enquanto Spassky permaneceu ativo durante todo este tempo, Fischer venceu com relativa facilidade e introduziu diversas novidades teóricas. O match de 1992 foi jogado na Iugoslávia e terminou com 10 vitórias para Fischer e 5 derrotas.\n[…]\nDe negras, contra d4, c4 ou Cf3, jogou várias, a principal foi a Defesa Índia do Rei, depois a Grünfeld, dentre outras Defesas Índias.\n[…]\nBobby Fischer Against the World\n[…]\nSearching for Bobby Fischer\n[…]\nMatch Fischer–Spassky (1992)\n[…]\n«Bobby-Fischer.net» (em inglês)\n[…]\n«Relato de Nigel Short sobre possíveis jogos contra Bobby Fischer no ICC» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Anatoly Karpov",
      "descricao": "Grande mestre russo de xadrez, décimo segundo campeão mundial."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "O duelo pelo título mundial entre Anatoly Karpov e o jovem Kasparov, iniciado em 1984, foi interrompido sem vencedor depois de quantas partidas?",
    "resposta": "Quarenta e oito",
    "distratores": [
      "Vinte e quatro",
      "Trinta e seis",
      "Sessenta"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/World_Chess_Championship_1984"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/World_Chess_Championship_1984",
        "situacao": "ok",
        "texto": "The World Chess Championship 1984–1985 was a match between challenger Garry Kasparov and defending champion Anatoly Karpov at the Pillar Hall of House of the Unions, Moscow, from 10 September 1984 to 15 February 1985 for the World Chess Championship title. Svetozar Gligoric was the chief arbiter for the match. After 5 months and 48 games, the match was called off, with Karpov leading 5 to 3, and 4\n[…]\nKarpov later regretted agreeing to cancel the match. He wrote an open letter demanding that the match be restarted and decided to publish it through the Soviet news agency TASS. Campomanes then tried to contact Kasparov. With no response, Campomanes informed the Sports Committee that the match would restart if Kasparov did not object. The leader of Kasparov's delegation Yuri Mamedov then informed match arbiter Gligoric that Kasparov did not wish to restart the match.\n[…]\nMamedov later wrote in 64 magazine that they did not agree to restart the match because they believed that Karpov would have control over the restart of the match. Kasparov believed that Karpov, Campomanes and the Soviet Chess Federation were responsible for terminating the match to prevent Karpov from potentially losing.\n[…]\nKarpov denied Kasparov's claim that he had worked behind the scenes to terminate the match. He stated that Kasparov did not wish for the match to continue as he still needed three wins, while he [Karpov] only needed one win. Karpov believed that Heydar Aliev was responsible for canceling the match. He stated that Aliev was a big supporter of Kasparov, and that he was the main person in charge of sports and culture in the USSR.\n[…]\nIn 2020, Karpov said that if he had won this match 6–0, Kasparov would never have become world champion, because he was too emotional.\n[…]\nKasparov, Garry (2008), Modern Chess: Part 2, Kasparov vs Karpov 1975–1985, Everyman Chess, ISBN 978-1-85744-433-9"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Campeonato_Mundial_de_Xadrez_de_1984",
        "situacao": "ok",
        "texto": "O match pelo Campeonato Mundial de Xadrez de 1984 foi disputado entre o campeão Anatoly Karpov e o desafiante Garry Kasparov. A disputa foi realizada entre 10 de setembro de 1984 e 15 de fevereiro de 1985 em Moscou em um match no qual o primeiro a vencer seis partidas seria campeão.\n[…]\nApós uma longa série de 48 partidas (com 40 empates) em mais de cinco meses, o presidente da FIDE, Florencio Campomanes, anunciou que o match seria interrompido sem um resultado, alegando a necessidade de preservar a saúde dos competidores, e que um novo confronto seria realizado a partir de 1º de setembro de 1985. Karpov teria o direito a um match de revanche caso fosse derrotado. Todavia, essa foi uma decisão polêmica, tanto Karpov quanto Kasparov queriam a continuidade do match.\n[…]\nA final da competição foi protagonizada por enxadristas de duas gerações bem diferentes, o ex-campeão mundial Vasily Smyslov, aos 61 anos, enfrentou o jovem prodígio Gary Kasparov.\n[…]\nA disputa teve muitos altos e baixos e um final bastante polêmico. Karpov começou de forma avassaladora. Depois de nove partidas, o campeão vencia Kasparov por 4 vitórias a 0. Muitos comentaristas chegaram a prever um placar de 6-0 em 18 partidas.\n[…]\nEntretanto, Kasparov iniciou uma tenaz resistência, empatando 17 partidas consecutivas. Karpov então venceu mais uma fazendo 5-0 e ficando a uma vitória de confirmar o título. Depois de mais alguns empates, Kasparov venceu a primeira, na partida 32. Outros 14 empates se seguiram, até a partida 46. O recorde anterior para uma disputa pelo título mundial havia sido de 34 partidas no match de 1927 entre José Raul Capablanca e Alexander Alekhine.\n[…]\nKasparov então venceu duas partidas seguidas, deixando o placar em 5–3 a favor de Karpov e o resultado final em aberto.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Judit Polgár",
      "descricao": "Enxadrista húngara, a mais caçula das irmãs Polgár, considerada a melhor jogadora de xadrez da história."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Em 2002, numa partida rápida em Moscou, a húngara Judit Polgár derrotou qual campeão, então número um do ranking mundial?",
    "resposta": "Garry Kasparov",
    "fonte": [
      "https://en.wikipedia.org/wiki/Judit_Polg%C3%A1r"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Judit_Polg%C3%A1r",
        "situacao": "ok",
        "texto": "Judit Polgár (born 23 July 1976) is a Hungarian chess grandmaster, widely regarded as the strongest female chess player of all time. She is the only woman to be ranked in the world top 10 (in 2004-05), the only woman to achieve a rating over 2700, reaching a peak rating of 2735, and the only woman to compete in the final stage of a World Chess Championship. She was the top-rated woman in the world\n[…]\nAt Linares 1994, Polgár lost a game to the World Champion Garry Kasparov in which Kasparov was accused of breaking the touch-move rule. The tournament marked the first time the 17-year-old Polgár was invited to compete with the world's strongest players. After four games, she had two points. During her game with Kasparov in the fifth round, Kasparov gradually outplayed her and had a clear advantage after 35 moves.\n[…]\n\"There has long been a lively debate about who is the strongest player of all\", wrote GM Robert Byrne in his New York Times column of 26 August 1997. \"Prominent candidates are Bobby Fischer, Garry Kasparov, Jose Raul Capablanca, Alexander Alekhine or Emanuel Lasker. But there is no argument about the greatest female player: she is 21-year-old Judit Polgár.\"\n[…]\nIn September 2002, in the Russia versus the Rest of the World Match, Polgár finally defeated Garry Kasparov in a game. The tournament was played under rapid rules with 25 minutes per game and a 10-second bonus increment per move. She won the game with exceptional positional play. Kasparov with black chose the Berlin Defence instead of his usual Sicilian, and Polgár proceeded with a line which Kasparov had used himself.\n[…]\nJudit Polgár vs. Garry Kasparov, Russia vs. The Rest of the World match, Moscow 2002 · Spanish Game: Berlin Defense. l'Hermet Variation (C67) · 1–0 Polgár makes history when, for the first time ever, a woman defeats the world's No. 1 chess player in a game.\n[…]\nJudit Polgar player profile at Chess.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Judit_Polg%C3%A1r",
        "situacao": "ok",
        "texto": "Judit Polgár (Budapeste, 23 de julho de 1976) é uma Grande Mestre de Xadrez húngara, considerada a mais forte jogadora de xadrez da história.\n[…]\nSua vitória contra Kasparov, em 2002, marcou a primeira vitória de uma mulher contra um então campeão mundial.\n[…]\nNo Torneio de Linares 1994, Polgár perdeu uma partida polêmica para o campeão mundial Garry Kasparov. Essa competição marcou a primeira vez que Polgár, aos 17 anos, foi convidada para competir em um torneio com Kasparov e os melhores jogadores da época. Depois de quatro partidas, ela tinha dois pontos. Durante a partida de Judit com Kasparov na quinta rodada, ele conseguiu uma vantagem clara após 35 movimentos.\n[…]\nEm setembro de 2002, no match entre a Rússia e o Resto do Mundo, Polgár derrotou Garry Kasparov em uma partida. Ela venceu o campeão mundial um excepcional jogo posicional. Kasparov com as peças pretas escolheu a Defesa Berlim, uma variante da Ruy López, em vez da sua usual Defesa Siciliana. Polgár organizou um ataque de torres contra o rei de Kasparov, que ainda estava no centro do tabuleiro, e depois de ficar com dois peões a menos, Kasparov abandonou.\n[…]\nApesar de ter um forte entendimento do jogo posicional, Polgár se destacava por um estilo de jogo agressivo, se esforçando para maximizar a iniciativa e ativamente buscando complicações táticas. O ex-campeão mundial Garry Kasparov escreveu que, com base nas partidas de Judit, \"se 'jogar como uma garota' significava algo no xadrez, isso significa ataques implacáveis.\"   Em sua juventude, ela era especialmente popular entre os fãs devido à sua disposição de empregar manobras e ataques selvagens.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "José Raúl Capablanca",
      "descricao": "Enxadrista cubano, terceiro campeão mundial de xadrez, de 1921 a 1927."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Em 1927, o cubano Capablanca perdeu o título mundial de xadrez para Alexander Alekhine, num longo duelo disputado em qual cidade sul-americana?",
    "resposta": "Buenos Aires",
    "distratores": [
      "Montevidéu",
      "Rio de Janeiro",
      "Santiago"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/World_Chess_Championship_1927"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/World_Chess_Championship_1927",
        "situacao": "ok",
        "texto": "The 1927 World Chess Championship was played between José Raúl Capablanca and Alexander Alekhine, in Buenos Aires from September 16 to November 29, 1927. Alekhine, a Russian, became a naturalised French citizen during the match (on November 5).\n[…]\nAccording to the London rules of 1922 proposed by Capablanca, the challenger had to contribute $10,000 ($175,300 in 2023) to be able to challenge the champion. Alekhine was able to raise that money in 1927. Alekhine demanded that Capablanca fulfill this condition in order to play him in a rematch, but Capablanca was never able to come up with that money.\n[…]\nAlekhine won the Championship, scoring +6−3=25.\n[…]\n1927 World Chess Championship at the Internet Archive record of Graeme Cree's Chess Pages"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Campeonato_Mundial_de_Xadrez_de_1927",
        "situacao": "ok",
        "texto": "O Campeonato Mundial de Xadrez de 1927 foi a 12ª edição da competição sendo disputada pelo atual campeão José Raúl Capablanca e o desafiante Alexander Alekhine. A disputa foi realizada entre 16 de setembro e 29 de novembro de 1927 em Buenos Aires, Argentina, sendo que o primeiro a alcançar seis vitórias seria considerado o vencedor. Tem sido sugerido que se o placar alcançasse cinco vitórias para ",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Deep Blue",
      "descricao": "Supercomputador de xadrez desenvolvido pela IBM, que enfrentou Garry Kasparov em 1996 e 1997."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Um ano antes da vitória histórica de 1997, o computador Deep Blue fez seu primeiro match contra o campeão mundial, em 1996. Quem venceu esse primeiro duelo?",
    "resposta": "Garry Kasparov",
    "fonte": [
      "https://en.wikipedia.org/wiki/Deep_Blue_versus_Garry_Kasparov"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Deep_Blue_versus_Garry_Kasparov",
        "situacao": "ok",
        "texto": "Garry Kasparov, then-world champion in chess, played a pair of six-game matches against Deep Blue, a supercomputer by IBM. Kasparov won the first match, held at the Pennsylvania Convention Center in Philadelphia in 1996, by 4–2. Deep Blue won a 1997 rematch, held at the Equitable Center in New York City, by 3½–2½.\n[…]\nMay 11. The final, deciding game of the rematch was a miniature, by far the shortest of any played during either match. Before the sixth game, the overall score was even: 2½–2½. As in game 4, Kasparov played the Caro–Kann Defence. Deep Blue made a knight sacrifice which wrecked Kasparov's defense and forced him to resign in less than twenty moves. As Kasparov later recounts, he chose to play a dubious opening in an effort to put Deep Blue out of its comfort zone.\n[…]\nIn a podcast discussion in December 2016, Kasparov reflected on his views of the match. He mentioned that after thorough research and introspection while writing a book, his perspective shifted. He acknowledged his increased respect for the Deep Blue team and a decrease in his opinion of both his own and Deep Blue's performance. He also noted the evolution of chess engines, and that modern ones easily surpass Deep Blue.\n[…]\nArimaa – Kasparov's loss to Deep Blue inspired the creation of a new game designed to be difficult for computers, yet playable with a chess set.\n[…]\nPandolfini, Bruce (1997). Kasparov and Deep Blue: The Historic Chess Match Between Man and Machine. Fireside Chess Library. ISBN 9780684848525.\n[…]\n\"Garry Kasparov vs Deep Blue, 12 games\". Chessgames.com. Retrieved April 18, 2007.\n[…]\nGoodman, David; Keene, Raymond (1997). Man Versus Machine: Kasparov Versus Deep Blue. H3. ISBN 978-1888281064.\n[…]\nNewborn, Monty (1996). Kasparov versus Deep Blue: Computer Chess Comes of Age. Springer. ISBN 0-387-94820-1."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Match_Garry_Kasparov_vs_Deep_Blue",
        "situacao": "ok",
        "texto": "Garry Kasparov vs Deep Blue foram 2 matches de 6 partidas de xadrez realizadas entre o então campeão mundial Garry Kasparov e o supercomputador da IBM, Deep Blue.\n[…]\nO primeiro match foi realizado de 10 a 17 de fevereiro de 1996 na Filadélfia, Pensilvânia, e Kasparov venceu por 4-2.\n[…]\nA 2a partida da revanche de 1997 acabou sendo o divisor de águas da disputa, com Kasparov acusando a IBM de trapaça. Tudo por conta de um movimento feito pelo Deep Blue ocorrido no 1o confronto da revanche de 1997. Mesmo vencendo, Kasparou ficou com uma pulga atrás da orelha. O 44º lance, executado pelo Deep Blue, confundiu totalmente Kasparov por ser absolutamente contra-intuitivo. Era um movimento maluco, sem qualquer razão de ser. Não era estratégico, nem ofensivo e nem defensivo.\n[…]\nA sexta partida foi uma ilustração de quão mal computadores podem desempenhar em algumas posições. Empregando Táticas “Anticomputador” e mantendo o foco do jogo no planejamento de longo prazo, Kasparov lentamente melhorou sua posição ao longo do meio do jogo, enquanto o Deep Blue desperdiçava o tempo sem fazer nada. No final do jogo, as peças de Deep Blue estavam abarrotadas em seu canto da rainha. Kasparov teve todo o tempo no mundo para planejar sua vitória.\n[…]\nComo não viu sentido naquele lance nº 44, incorretamente Kasparov concluiu que o Deep Blue estava sendo manipulado por alguém. E aí se desequilibrou emocionalmente pelo resto do match.\n[…]\nAssim como na primeira partida, o Ataque índio do rei foi utilizado. Deep Blue fez um brilhante final de partida que lhe assegurou um empate, já que Kasparov não encontrou uma continuação vencedora.\n[…]\nConfrontos entre humanos e computadores em jogos",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "AlphaGo",
      "descricao": "Programa de inteligência artificial que joga go e derrotou o profissional sul-coreano Lee Sedol em 2016."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Na segunda partida contra Lee Sedol, em 2016, o AlphaGo fez uma jogada tão inesperada que ficou famosa pelo número do lance. Que número?",
    "resposta": "Trinta e sete",
    "distratores": [
      "Dezenove",
      "Cinquenta e dois",
      "Cem"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/AlphaGo_versus_Lee_Sedol"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/AlphaGo_versus_Lee_Sedol",
        "situacao": "ok",
        "texto": "AlphaGo versus Lee Sedol, also known as the DeepMind Challenge Match, was a five-game Go match between top Go player Lee Sedol and AlphaGo, a computer Go program developed by DeepMind, played in Seoul, South Korea between the 9th and 15th of March 2016. AlphaGo won all but the fourth game; all games were won by resignation. The match has been compared with the historic chess match between Deep Blu\n[…]\nThe match AlphaGo versus Lee Sedol is comparable to the 1997 chess match when Garry Kasparov lost to IBM computer Deep Blue. Kasparov's loss to Deep Blue is considered the moment a computer became better than humans at chess.\n[…]\nThe match was played at the Four Seasons Hotel in Seoul, South Korea in March 2016 and was video-streamed live with commentary; the English language commentary was done by Michael Redmond (9-dan professional) and Chris Garlock. Aja Huang, a DeepMind team member and amateur 6-dan Go player, placed stones on the Go board for AlphaGo, which ran through the Google Cloud Platform with its server located in the United States.\n[…]\nAn Younggil at Go Game Guru concluded that the game was \"a masterpiece for Lee Sedol and will almost certainly become a famous game in the history of Go\". Lee commented after the match that he considered AlphaGo was strongest when playing white (second). For this reason, he requested that he play black in the fifth game, which is considered more risky.\n[…]\nAlphaGo's victory was a major milestone in artificial intelligence research. Go had previously been regarded as a hard problem in machine learning that was expected to be out of reach for the technology of the time. Most experts thought a Go program as powerful as AlphaGo was at least five years away; some experts thought that it would take at least another decade before computers would beat Go champions. Most observers at the beginning of the 2016 matches expected Lee to beat AlphaGo."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/AlphaGo_vs_Lee_Sedol",
        "situacao": "ok",
        "texto": "AlphaGo versus Lee Sedol, também chamado de Google DeepMind Challenge Match, foi uma disputa de 5 jogos entre um supercomputador da Google, intitulado AlphaGo, contra o sul-coreano Lee Sedol no milenar jogo de tabuleiro Go, entre os dias 9 e 15 Março de 2016 no Four Seasons Hotel da cidade sul-coreana de Seul.\n[…]\nO sul-coreano Lee Sedol era, à época, 18 vezes campeão mundial do jogo, e considerado o melhor jogador da história deste jogo. E o AlphaGo foi um software especialmente desenvolvido pela DeepMind Technologies Limited (uma sub-divisão da Google) para vencer jogadores humanos profissionais neste jogo. O resultado final foi 4-1 para o AlphaGo. Desde que a inteligência artificial passou a ter sucesso em derrotar humanos em complexos jogos de tabuleiro, o jogo Go era a última barreira a ser quebrada.\n[…]\nPara que fosse capaz de vencer um campeão mundial de Go, algoritmos de aprendizado conhecidos como redes neurais profundas foram treinados por meio de uma base de dados que inclui milhões de jogadas realizadas por seres humanos no passado. Em seguida, o programa afiou seu conhecimento por meio de partidas extremamente velozes realizadas contra si mesmo. A cada mudança no algoritmo, o programa foi se tornando mais apto a jogar.\n[…]\nO avanço alcançado pelo DeepMind Technologies Limited com o AlphaGo é importante por várias razões. Em termos gerais, isso terá impacto sobre a maneira em que os computadores analisam uma sequência de ações, auxiliando aos programas de inteligência artificial a navegar através da lógica. Mais especificamente, isso pode ajudar no reconhecimento facial e em buscas preditivas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "FIDE",
      "descricao": "Federação Internacional de Xadrez, entidade que organiza o xadrez em nível mundial, fundada em 1924."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "A federação internacional que organiza o xadrez no mundo, conhecida pela sigla Fide, foi fundada em 1924 em qual cidade?",
    "resposta": "Paris",
    "distratores": [
      "Londres",
      "Moscou",
      "Viena"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/FIDE"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/FIDE",
        "situacao": "ok",
        "texto": "The International Chess Federation or World Chess Federation, commonly referred to by its French acronym FIDE ( FEE-day, Fédération Internationale des Échecs), is an international organization based in Switzerland that connects the various national chess federations and acts as the governing body of international chess competition. FIDE was founded in Paris, France, in 1924. Its motto is Gens una \n[…]\nFIDE is recognized by the International Olympic Committee (IOC) as the supreme body responsible for the organization of chess and its championships at global and continental levels. Other tournaments are not overseen directly by FIDE, but they generally observe FIDE rules and regulations. Some national chess organizations such as the US Chess Federation use minor differences to FIDE rules.\n[…]\nCorrespondence chess (chess played by post, email or on online servers) is regulated by the International Correspondence Chess Federation, an independent body that cooperates with FIDE where appropriate.\n[…]\nIn 1922, the Russian master Eugene Znosko-Borovsky, while participating in an international tournament in London, announced that a tournament would be held during the 8th Sports Olympic Games in Paris in 1924 and would be hosted by the French Chess Federation. On July 20, 1924, the participants at the Paris tournament founded FIDE as a kind of players' union. In its early years, FIDE had little power, and it was poorly financed.\n[…]\nBy 1994, Kasparov realized that separating from FIDE had been a mistake, as the split in the world championship was unpopular among commercial sponsors and most grandmasters. He began efforts to mend relations with FIDE and supported Campomanes's re-election bid as FIDE president. But Anatoly Karpov and Bachar Kouatly opposed it. Consequently, a complex situation close to a stalemate developed in Paris in 1995.\n[…]\nInternational Correspondence Chess Federation\n[…]\nFIDE titles"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Federa%C3%A7%C3%A3o_Internacional_de_Xadrez",
        "situacao": "ok",
        "texto": "A Federação Internacional de Xadrez, mais conhecida pelo acrônimo em francês, FIDE (Fédération internationale des échecs), foi fundada em 20 de Julho de 1924, em Paris. É uma organização internacional, com sede na Suíça, que conecta as várias federações nacionais de xadrez e atua como órgão dirigente das competições internacionais do esporte, sendo o principal o Campeonato Mundial de Xadrez.\n[…]\nA FIDE é reconhecida pelo Comitê Olímpico Internacional (COI) como a responsável pela organização do Xadrez e dos campeonatos internacionais em níveis continentais. Em 1999, a FIDE foi reconhecida pelo COI como uma Federação esportiva internacional. Atualmente a FIDE conta com 190 federações nacionais filiadas.\n[…]\n1924–1939  Alexander Rueb\n[…]\nLista de campeões mundiais de xadrez\n[…]\nSite Oficial da FIDE",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "FIDE",
      "descricao": "Federação Internacional de Xadrez, entidade que organiza o xadrez em nível mundial, fundada em 1924."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "O Dia Internacional do Xadrez, reconhecido pela ONU, é comemorado em vinte de julho. Que acontecimento essa data lembra?",
    "resposta": "A fundação da Fide, em 1924",
    "fonte": [
      "https://en.wikipedia.org/wiki/World_Chess_Day",
      "https://en.wikipedia.org/wiki/FIDE"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/World_Chess_Day",
        "situacao": "ok",
        "texto": "International Chess Day is annually celebrated on 20 July, to commemorate the 1924 founding of the International Chess Federation (FIDE), the global governing body of chess.\n[…]\nThe idea to celebrate an international day of chess was first proposed by UNESCO, and has been celebrated since 1966 after it was established by FIDE.\n[…]\nIn 2013, International Chess Day was celebrated in 178 countries, according to Kirsan Ilyumzhinov, FIDE's President during that period.\n[…]\nInternational Chess Day website"
      },
      {
        "url": "https://en.wikipedia.org/wiki/FIDE",
        "situacao": "ok",
        "texto": "The International Chess Federation or World Chess Federation, commonly referred to by its French acronym FIDE ( FEE-day, Fédération Internationale des Échecs), is an international organization based in Switzerland that connects the various national chess federations and acts as the governing body of international chess competition. FIDE was founded in Paris, France, in 1924. Its motto is Gens una \n[…]\nFIDE's most visible activity is organizing the World Chess Championship since 1948. This championship confers the title of \"World Chess Champion\", which is currently held by Gukesh Dommaraju. FIDE also organizes world championships for women, juniors, seniors, and the disabled, as well as the world championships for the shorter time formats rapid and blitz. Another flagship event is the Chess Olympiad, a biennial chess tournament organized since 1924, in which national teams compete.\n[…]\nCorrespondence chess (chess played by post, email or on online servers) is regulated by the International Correspondence Chess Federation, an independent body that cooperates with FIDE where appropriate.\n[…]\nIn 1922, the Russian master Eugene Znosko-Borovsky, while participating in an international tournament in London, announced that a tournament would be held during the 8th Sports Olympic Games in Paris in 1924 and would be hosted by the French Chess Federation. On July 20, 1924, the participants at the Paris tournament founded FIDE as a kind of players' union. In its early years, FIDE had little power, and it was poorly financed.\n[…]\nOn July 21, 2026, FIDE announced the lifting of restrictions on the Belarusian Chess Federation, as recommended by the International Olympic Committee (IOC) in their meeting earlier in the year. The removal of restrictions allow Belarusian athletes to participate in FIDE-rated events under their national flag.\n[…]\nFIDE titles\n[…]\n\"Chess: The History of FIDE\" by Edward Winter"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dia_internacional_do_xadrez",
        "situacao": "ok",
        "texto": "Dia internacional do xadrez celebra-se anualmente a 20 de julho, comemorando o dia em que se fundou a Federação Internacional de Xadrez (FIDE) em 1924.\n[…]\nA ideia de celebrar neste dia como o dia internacional do xadrez foi proposta pela UNESCO, e tem sido celebrada desde o ano 1966, após que foi estabelecido pela FIDE. A FIDE, que tem 181 federações de xadrez como membros, organiza eventos e concorrências de xadrez em todo mundo neste dia. Somente em 2013, no dia internacional de xadrez celebrou-se em 178 países, segundo o ex-presidente da FIDE, Kirsan Ilyumzhinov.\n[…]\nEste dia é celebrado por muitos dos 605 milhões de jogadores regulares de xadrez de todo mundo. Em 2012, uma amostragem de Yougov mostrou que \"um surpreendentemente estável 70%\" da população adulta tem jogado xadrez em algum momento das suas vidas\". Esta estatística é aproximadamente a mesma em países tão diversos como os Estados Unidos, o Reino Unido, Alemanha, Rússia e Índia.\n[…]\nFIDE\n[…]\nXadrez\n[…]\nWebsite do Dia internacional de Xadrez",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Novela de Xadrez",
      "descricao": "Novela do escritor austríaco Stefan Zweig, escrita no exílio no Brasil e publicada em 1942, sobre um duelo de xadrez num navio."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Na Novela de Xadrez, de Stefan Zweig, o Doutor B. vira um mestre do xadrez enquanto está isolado pela Gestapo. Graças a que objeto?",
    "resposta": "Um livro de partidas roubado",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Royal_Game"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Royal_Game",
        "situacao": "ok",
        "texto": "The Royal Game (also published as Chess, Chess Story, and A Chess Story; in the original German Schachnovelle, \"Chess Novella\") is a novella by the Austrian author Stefan Zweig written in 1941, the year before the author's death by suicide. The title has also been used for a collection that also includes \"Amok\", \"Burning Secret\", \"Fear\", and \"Letter From an Unknown Woman\".\n[…]\nBoth in its original German text and also in later translations, The Royal Game makes use of algebraic notation to describe chess moves. At the time of its publication (and of its fictional setting) in the early 1940s, algebraic notation was widespread in German-speaking chess culture, but had not been widely accepted in the Anglosphere, which still made use of descriptive notation.\n[…]\nDuring the 1970s and 1980s, algebraic notation was gradually accepted in the English-speaking world and standardized by FIDE as the proper method for recording chess games. The use of algebraic notation in English translations of The Royal Game is therefore not an anachronism.\n[…]\nThe Royal Game was the inspiration for the 1960 Gerd Oswald film Brainwashed, originally titled Schachnovelle, as well as for two Czechoslovak films: the 1980  Královská hra (The Royal Game) and Šach mat (Checkmate), made for television in 1964.\n[…]\nThe Royal Game was also the inspiration for the 2021 Philipp Stölzl film Chess Story, originally titled Schachnovelle.\n[…]\nIn 2024 Jason Kouchak performed the world premiere of his composition The Royal Game at the opening of the 45th Chess Olympiad in Budapest.\n[…]\nElke Rehder: Remarks on The Royal Game by Stefan Zweig 1942–1944 An article from 2015 with pictures on the history of Schachnovelle.\n[…]\nPushkinPress.com English editions of Stefan Zweig's novellas"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Schachnovelle",
        "situacao": "ok",
        "texto": "Schachnovelle no original em alemão (literalmente, Novela de Xadrez) é um conto do escritor austríaco Stefan Zweig escrito entre 1938 e 1941 em seu exílio brasileiro e publicado pela primeira vez em 1944, após a morte do autor. Esta obra foi o último trabalho de Zweig. Existem duas traduções em português: Uma de Pedro Süssekind, junto com dois outros textos do autor, no volume Amok e Xadrez e Frag\n[…]\nDurante uma das partidas surge o enigmático Dr. B. e, graças aos seus conselhos, os passageiros conseguem um inesperado empate. Depois daquela façanha, eles o persuadem a enfrentar Czentovic sozinho. Embora há décadas não veja um tabuleiro de xadrez pela frente, o Dr. B sensacionalmente derrota o campeão mundial.\n[…]\nA novela se encerra com Czentoviz admitindo: \"Para um diletante, esse senhor realmente tinha um talento extraordinário.\"\n[…]\n\"Em princípio, sempre entendi que um jogo tão único, tão engenhoso tinha que criar matadores específicos, mas como é difícil, como é impossível imaginar a vida de uma pessoa intelectualmente ativa, para quem o mundo amplo está reduzido à estreita rua de mão única entre Pretas e Brancas, que busca os triunfos de sua vida em um mero andar para frente e para trás, para trás e para frente de trinta e duas peças, um ser humano, para quem, em uma nova abertura, avançar o cavalo em vez do peão já é uma grande ação e seu pobre cantinho num livro de xadrez significa imortalidade — um homem, um homem intelectual, que durante dez, vinte, trinta, quarenta anos transforma todo o vigor de seu pensamento seguidas vezes na ridícula tarefa de empurrar para o canto um rei de madeira sobre um tabuleiro de madeira e ainda o faz sem enlouquecer!\"\n[…]\n«Xadrez (texto completo)». tradução de Pedro Süssekind.\n[…]\n«Conto de Xadrez: Schachnovelle». tradução de Alexandre Pires Vieira.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "O Gambito da Rainha (minissérie)",
      "descricao": "Minissérie americana de 2020 sobre a enxadrista fictícia Beth Harmon, baseada num romance de 1983."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Na série O Gambito da Rainha, a menina Beth Harmon aprende a jogar xadrez no porão do orfanato. Com quem?",
    "resposta": "O zelador, senhor Shaibel",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Queen%27s_Gambit_(miniseries)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Queen%27s_Gambit_(miniseries)",
        "situacao": "ok",
        "texto": "The Queen's Gambit is a 2020 American coming-of-age period drama television miniseries based on the 1983 eponymous novel by Walter Tevis. The title refers to the \"Queen's Gambit\", a chess opening. The series was written and directed by Scott Frank, who created it with Allan Scott, who owns the rights to the book.\n[…]\nThe Queen's Gambit follows the life of an orphan chess prodigy, Elizabeth Harmon, during her quest to become an elite chess player while struggling with emotional problems, drugs and alcohol dependency. The title of the series refers to a chess opening of the same name. The story is set in the mid-1950s and 1960s.\n[…]\nIn the 1950s in Lexington, Kentucky, nine-year-old Beth, having lost her mother in a car crash, is taken to an orphanage where she is taught chess by the building's custodian, Mr. Shaibel. As was common at the time, the orphanage dispenses daily tranquilizer pills to the girls to \"balance their disposition\", which turns into an addiction for Beth. She quickly becomes a strong chess player due to her visualization skills.\n[…]\nBill Camp as William Shaibel, the custodian at the Methuen Home for Girls and an experienced chess player who teaches Beth how to play the game at age 9\n[…]\nSergio Di Zio as Beth's biological father\n[…]\nIn a column where she argues \"So many lives would be different if we'd had The Queen's Gambit 50 years ago,\" culture critic Mary McNamara said, \"I loved The Queen's Gambit so much, I watched the final episode three times.\" Sara Miller of The New Yorker recounted having experienced a sense of loss in her own association with the novel after seeing its depiction on screen because she could not relate to the main character: \"Anya Taylor-Joy is way too good-looking to play Beth Harmon\", she notes.\n[…]\nThe Queen's Gambit on Netflix\n[…]\nThe Queen's Gambit at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/The_Queen%27s_Gambit",
        "situacao": "ok",
        "texto": "The Queen's Gambit (bra: O Gambito da Rainha; prt: Gambito de Dama) é uma minissérie de drama e amadurecimento americana de 2020 baseada no romance homônimo de Walter Tevis, de 1983. A minissérie foi criada para a Netflix por Scott Frank e Allan Scott.\n[…]\nA Netflix lançou The Queen's Gambit em 23 de outubro de 2020. Depois de quatro semanas, ela se tornou a minissérie com script mais assistida da Netflix. Segundo um levantamento feito pelo JustWatch, foi a série mais assistida em 2020, ao comparar com as outras plataformas de streaming. Foi aclamado pela crítica pela atuação de Anya Taylor-Joy como Beth Harmon, bem como pelos valores de cinema e produção.\n[…]\nA história começa em Lexington, Kentucky, onde Beth, de nove anos, depois de perder a mãe em um acidente de carro, é levada para um orfanato onde aprende xadrez com o zelador do prédio, Sr. Shaibel. Como era comum durante a década de 1950, o orfanato distribuía pílulas tranquilizantes diárias para as meninas para \"equilibrar sua disposição\", o que se transformava em um vício para Beth.\n[…]\nBill Camp como Sr. Shaibel, o zelador do Lar para Meninas Methuen e um jogador de xadrez experiente que ensina Beth a jogar.\n[…]\nRebecca Root como Senhorita Lonsdale, a capelã e diretora do coro em Methuen.\n[…]\nCarina Chocano, da The New York Times Magazine, também acredita que o programa sempre frustra as expectativas do público: o zelador não a molesta, seu pai adotivo a deixa em paz e sua mãe adotiva Alma não a segura, uma partida Chocano atribui qualidade semelhante à \"fantasia\" de The Queen's Gambit. Respondendo a essas críticas, Fred Mazelis do World Socialist Web Site escreveu que \"as alegações de que a série é apreciada porque é fantasia, são falsas, para dizer o mínimo.\n[…]\nThe Queen's Gambit no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Dungeons & Dragons",
      "descricao": "Jogo de RPG de mesa de fantasia lançado nos Estados Unidos em 1974."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No Dungeons and Dragons, como é chamado, em português, o jogador que narra a aventura, cria o mundo e controla os monstros?",
    "resposta": "Mestre (Dungeon Master)",
    "fonte": [
      "https://en.wikipedia.org/wiki/Dungeon_Master"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Dungeon_Master",
        "situacao": "ok",
        "texto": "In the Dungeons & Dragons (D&D) role-playing game, the Dungeon Master (DM) is the game organizer and participant in charge of creating the details and challenges of a given adventure, while maintaining a realistic continuity of events. In effect, the Dungeon Master controls all aspects of the game, except for the actions of the player characters (PCs), and describes to the players what their chara\n[…]\nThe title was invented by Tactical Studies Rules (TSR) for the Dungeons & Dragons RPG, and was introduced in the second supplement to the game rules (Blackmoor) in 1975.\n[…]\nTo avoid infringement of trademarks by the publishers of Dungeons & Dragons, and to describe referees in role-playing genres other than sword and sorcery, other gaming companies use more generic terms, like Game Master (GM), Game Operations Director (a backronym of GOD), Judge, Referee or Storyteller. Some use more esoteric titles related to the genre or style of the game, such as the \"Keeper of Arcane Lore\" from Call of Cthulhu and the \"Hollyhock God\" from Nobilis.\n[…]\nThe Dungeon Master (DM) assumes the role of the game master or referee and describes for other players what they perceive in the imaginary world of the game, and what effects their actions have. That person is responsible for preparing each game session, and must have a thorough understanding of the game rules.\n[…]\nSince the inception of the Advanced Dungeons & Dragons system in 1977, these rules have been contained in three hardbound books: the Player's Handbook, Dungeon Master's Guide, and Monster Manual. Many other rulebooks exist as well, but these are not required for conducting the game.\n[…]\nIn the Faiths and Pantheons Dungeons & Dragons sourcebook, the Faerunian Overgod Ao answers to a superior entity, insinuated to be the \"Dungeon Master\"."
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Monopoly",
      "descricao": "Jogo de tabuleiro americano de compra e venda de imóveis, lançado pela Parker Brothers em 1935."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "No tabuleiro clássico americano do Monopoly, qual é a propriedade mais cara, a última antes da casa de partida?",
    "resposta": "Boardwalk",
    "distratores": [
      "Park Place",
      "Illinois Avenue",
      "Marvin Gardens"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Monopoly_(game)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Monopoly_(game)",
        "situacao": "ok",
        "texto": "Monopoly is a multiplayer economics-themed board game. In the game, players roll two standard dice (or one extra special red die depending on the game) to move their token clockwise around the board, buying and trading properties and railroads and developing them with houses and hotels. Players collect rent from their opponents and aim to drive them into bankruptcy. Money can also be gained or los\n[…]\nOver the years, Hasbro has released tokens for special or collector's editions of the game. One of the first tokens to come out included the Steam Locomotive, which was only released in Deluxe Editions. A Director's Chair token was released in 2011 in limited edition copies of Under the Boardwalk: The Monopoly Story.\n[…]\nMonopoly had a combination of three colors. Teams used the combination card to unlock the chest. If it was the right combination, they advanced to the Crazy Cash Machine for a brand-new car. For the show's fourth season, a new game was added called Monopoly Remix, featuring Park Place and Boardwalk, as well as Income Tax and Luxury Tax.\n[…]\nThe documentary Under the Boardwalk: The MONOPOLY Story, covering the history and players of the game, won an Audience Award for Best Documentary at the 2010 Anaheim International Film Festival. The film played theatrically in the U.S. beginning in March 2011 and was released on Amazon and iTunes on February 14, 2012. The television version of the film won four regional Emmy Awards from the Pacific Southwest Chapter of NATAS. The film is directed by Kevin Tostado and narrated by Zachary Levi.\n[…]\nA similar online vote was held in early 2015 for an updated version of the game. The resulting board was released worldwide in late 2015. Lima, Peru, won the vote to hold the Boardwalk space.\n[…]\nS. Abbott; M. Richey (May 1997). \"Take a Walk on the Boardwalk\". College Mathematics Journal. Vol. 10, no. 3. pp. 162–171.\n[…]\nMonopoly Tournaments.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Monopoly",
        "situacao": "ok",
        "texto": "Monopoly  (em Portugal, Monopólio; no Brasil, Monopoly) é um jogo de tabuleiro multijogador com temática econômica. No jogo, os jogadores lançam dois dados comuns (ou um dado vermelho especial adicional, dependendo da versão) para mover sua peça no sentido horário pelo tabuleiro, comprando e negociando propriedades como bairros e empresas  e desenvolvendo-as com casas e hotéis. Os jogadores cobram\n[…]\nMonopoly tornou-se um dos jogos de tabuleiro mais populares do mundo, tendo sido licenciado localmente em mais de 113 países e publicado em mais de 46 idiomas. Em 2015, estimava-se que o jogo tivesse vendido 275 milhões de cópias no mundo todo.\n[…]\nApós o sucesso nos Estados Unidos, Monopoly passou a ser comercializado internacionalmente. O jogo recebeu traduções e adaptações de acordo com os mercados em que foi lançado, incluindo a substituição dos nomes das propriedades por localidades conhecidas em cada país. Ao longo do século XX e início do século XXI, Monopoly tornou-se uma das marcas mais conhecidas de jogos de tabuleiro do mundo, dando origem a numerosas edições, adaptações regionais, versões temáticas e produtos derivados.\n[…]\nApós a aquisição da Parker Brothers pela Hasbro em 1991, a empresa americana fechou uma parceria de licenciamento com a Estrela para que ela continuasse a publicar o jogo no Brasil. Em 2009, a parceria foi quebrada e a empresa americana decidiu ela mesma comercializar o produto no país, utilizando o nome original. A Estrela então criou sua própria versão do jogo, com pequenas alterações nas regras e no design do tabuleiro e das peças.\n[…]\nDependendo das versões, o nome das ruas vai variando, mas a propriedade mais valiosa é sempre o Rossio (Lisboa) e a propriedade menos valiosa o Campo Grande (Lisboa).\n[…]\nMonopoly Deal (Lançado em 2009).\n[…]\nMonopoly Millionaire, da Hasbro.\n[…]\n«Página oficial do Monopólio»\n[…]\n«Página sobre a invenção do Monopólio (Em inglês»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Monopoly",
      "descricao": "Jogo de tabuleiro americano de compra e venda de imóveis, lançado pela Parker Brothers em 1935."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Em plena Grande Depressão, a fabricante Parker Brothers lançou o Monopoly. Em que ano?",
    "resposta": "1935",
    "distratores": [
      "1929",
      "1941",
      "1948"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Monopoly_(game)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Monopoly_(game)",
        "situacao": "ok",
        "texto": "Monopoly is a multiplayer economics-themed board game. In the game, players roll two standard dice (or one extra special red die depending on the game) to move their token clockwise around the board, buying and trading properties and railroads and developing them with houses and hotels. Players collect rent from their opponents and aim to drive them into bankruptcy. Money can also be gained or los\n[…]\nIt also served to promote the economic theories of Henry George—in particular, his ideas about taxation. The Landlord's Game originally had two sets of rules, one with tax and another, on which the current rules are mainly based. Parker Brothers first published Monopoly in 1935. Parker Brothers was eventually absorbed into Hasbro in 1991.\n[…]\nParker Brothers began marketing the game on November 5, 1935. Cartoonist F. O. Alexander contributed the design. U.S. patent number US 2026082 A was issued to Charles Darrow on December 31, 1935, for the game board design and was assigned to Parker Brothers Inc. The original version of the game in this format was based on the streets of Atlantic City, New Jersey.\n[…]\nIn the 1930s, John Waddington Ltd., known as Waddingtons, was a printing company in Leeds that had branched out into packaging and the production of playing cards. Waddingtons had sent the card game Lexicon to Parker Brothers hoping to interest it in publishing the game in the United States. In a similar fashion, Parker Brothers sent over a copy of Monopoly to Waddingtons early in 1935 before the game had been put into production in the United States.\n[…]\nThese tokens remained the same until the late 1990s, when Parker Brothers was sold to Hasbro.\n[…]\nMonopoly Town by Parker Brothers / Hasbro (2008) a young children's game of racing designed to help them learn to count.\n[…]\nMonopoly Tournaments.com\n[…]\nU.S. patent 2,026,082 Patent awarded to C. B. Darrow for Monopoly on December 31, 1935"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Monopoly",
        "situacao": "ok",
        "texto": "Monopoly  (em Portugal, Monopólio; no Brasil, Monopoly) é um jogo de tabuleiro multijogador com temática econômica. No jogo, os jogadores lançam dois dados comuns (ou um dado vermelho especial adicional, dependendo da versão) para mover sua peça no sentido horário pelo tabuleiro, comprando e negociando propriedades como bairros e empresas  e desenvolvendo-as com casas e hotéis. Os jogadores cobram\n[…]\nApós inicialmente rejeitar o jogo, a Parker Brothers acabou adquirindo os direitos da versão de Darrow em 1935. O contrato estabeleceu pagamentos ao inventor e participação nas vendas futuras. A Parker Brothers passou então a produzir o jogo em larga escala, introduzindo alterações no design e na apresentação e incluindo peças próprias para representar os jogadores.\n[…]\nEntre os acordos estava a aquisição dos direitos de The Landlord's Game de Magie, que recebeu uma compensação financeira pela aquisição de seus direitos. A Parker Brothers também concordou em publicar The Landlord's Game, o que ocorreu posteriormente, em 1939. A edição, contudo, teve desempenho comercial muito inferior ao Monopoly.\n[…]\nA Hasbro adquiriu os direitos do jogo após comprar a Parker Brothers em 1991.\n[…]\nEm Portugal, o jogo foi editado pela Majora/Parker Brothers Portugal na década de 1950, com o nome traduzido para Monopólio. Em 1961 a Majora fez uma nova edição que, por pressão da Parker Brothers, já usou a designação internacional Monopoly. Nas edições portuguesas são usados nomes de ruas importantes, principalmente da capital (Lisboa) e da segunda cidade do país (Porto), bem como de estações de caminho-de-ferro.\n[…]\nMonopoly Deal (Lançado em 2009).\n[…]\nMonopoly Millionaire, da Hasbro.\n[…]\n«Página oficial do Monopólio»\n[…]\n«Página sobre a invenção do Monopólio (Em inglês»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Batalha naval",
      "descricao": "Jogo para dois em que cada um tenta afundar a frota escondida do adversário, adivinhando coordenadas numa grade."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Na batalha naval clássica, qual é o maior navio da frota, o que ocupa cinco casas da grade?",
    "resposta": "Porta-aviões",
    "distratores": [
      "Encouraçado",
      "Submarino",
      "Cruzador"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Battleship_(game)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Battleship_(game)",
        "situacao": "ok",
        "texto": "Battleship (also known as Battleships) is a strategy type guessing game for two players. It is played on ruled grids (paper or board) on which each player's fleet of warships are marked. The locations of the fleets are concealed from the other player. Players alternate turns calling \"shots\" at the other player's ships, and the objective of the game is to destroy the opposing player's fleet.\n[…]\nOther versions of the game were printed in the 1930s and 1940s, including the Strathmore Company's Combat: The Battleship Game, Milton Bradley's Broadsides: A Game of Naval Strategy and Maurice L. Freedman's Warfare Naval Combat. Strategy Games Co. produced a version called Wings which pictured planes flying over the Los Angeles Coliseum. All of these early editions of the game consisted of pre-printed pads of paper.\n[…]\nIn 2025, Battleship was inducted into the National Toy Hall of Fame at The Strong National Museum of Play.\n[…]\nOne variant of Battleship allows players to decline to announce that a ship has been sunk, requiring their opponent to take further shots in order to confirm that an area is clear. Another variant of the rule allows a player to move one of their ships to a new, uncalled location every fourth or fifth move.\n[…]\nBattleships, 1987, for ZX Spectrum, Commodore 64, Amstrad CPC, BBC Micro, and Amiga computers\n[…]\nBattleship, 1993, for Nintendo Entertainment System and Game Gear systems\n[…]\nSuper Battleship, 1993, for Genesis and Super NES systems\n[…]\nBattleship, 1996, for PCs\n[…]\nBattleship: Surface Thunder, 2000, for PCs\n[…]\nBattleship, a tie-in to the 2012 film, for PlayStation 3, Xbox 360, Wii, Nintendo DS, and Nintendo 3DS\n[…]\nBattleship, 2016, for PlayStation 4 utilizing the PlayLink technology\n[…]\nBattleship (film), 2012 film adaptation\n[…]\nBattleship (puzzle)\n[…]\nBattleship Official Hasbro Rules – Rulebook insert for Battleship (2002 version)\n[…]\nBattleship   at BoardGameGeek"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Batalha_naval_%28jogo%29",
        "situacao": "ok",
        "texto": "Batalha naval é um jogo de tabuleiro de dois jogadores, no qual os jogadores têm de adivinhar em que quadrados estão os navios do oponente. Embora o primeiro jogo em tabuleiro comercializado e publicado pela Milton Bradley Company em 1931, o jogo foi originalmente jogado com lápis e papel. Seu objectivo é derrubar os barcos do oponente adversário, ganha quem derrubar todos os navios adversários pr\n[…]\nApós os navios terem sido posicionados o jogo continua numa série de turnos. Em cada turno, um jogador diz um quadrado, o qual é identificado pela letra e número, na grelha do oponente, se houver um navio nesse quadrado, é colocada uma marca vermelha, senão houver é colocada uma marca branca.\n[…]\nOs tipos de navios são: porta-aviões (cinco quadrados), navios-tanque (quatro quadrados), contratorpedeiros (três quadrados) e submarinos (dois quadrados). Vale notar que os quadrados que compõem um navio devem estar conectados e em fila reta. Numa das variações deste jogo, as grelhas são de dimensão 10x10, e o número de navios são: 1, 2, 3 e 4 respectivamente.\n[…]\n«BattleFriends at Sea — Batalha naval com os seus amigos mais queridos». , jogo de batalha naval para iPhone e iPod Touch\n[…]\n«Ships N' Battles — A Revolução da Batalha Naval». , outro jogo de batalha naval para iPhone e iPod Touch\n[…]\n«Battleships — General Headquarters II». , jogo Batalha naval online (em Flash)\n[…]\n«Batalha Naval para imprimir». , jogo Batalha Naval, regras e gabarito para imprimir\n[…]\n«Batalha naval». , Implementação do navegador de jogos online",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Batalha naval",
      "descricao": "Jogo para dois em que cada um tenta afundar a frota escondida do adversário, adivinhando coordenadas numa grade."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Como passatempo de papel e lápis, a batalha naval surgiu na época de qual guerra?",
    "resposta": "Primeira Guerra Mundial",
    "distratores": [
      "Guerra Civil Americana",
      "Guerra da Crimeia",
      "Segunda Guerra Mundial"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Battleship_(game)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Battleship_(game)",
        "situacao": "ok",
        "texto": "Battleship (also known as Battleships) is a strategy type guessing game for two players. It is played on ruled grids (paper or board) on which each player's fleet of warships are marked. The locations of the fleets are concealed from the other player. Players alternate turns calling \"shots\" at the other player's ships, and the objective of the game is to destroy the opposing player's fleet.\n[…]\nOther versions of the game were printed in the 1930s and 1940s, including the Strathmore Company's Combat: The Battleship Game, Milton Bradley's Broadsides: A Game of Naval Strategy and Maurice L. Freedman's Warfare Naval Combat. Strategy Games Co. produced a version called Wings which pictured planes flying over the Los Angeles Coliseum. All of these early editions of the game consisted of pre-printed pads of paper.\n[…]\nIn 2025, Battleship was inducted into the National Toy Hall of Fame at The Strong National Museum of Play.\n[…]\nOne variant of Battleship allows players to decline to announce that a ship has been sunk, requiring their opponent to take further shots in order to confirm that an area is clear. Another variant of the rule allows a player to move one of their ships to a new, uncalled location every fourth or fifth move.\n[…]\nBattleships, 1987, for ZX Spectrum, Commodore 64, Amstrad CPC, BBC Micro, and Amiga computers\n[…]\nBattleship, 1993, for Nintendo Entertainment System and Game Gear systems\n[…]\nSuper Battleship, 1993, for Genesis and Super NES systems\n[…]\nBattleship, 1996, for PCs\n[…]\nBattleship: Surface Thunder, 2000, for PCs\n[…]\nBattleship, a tie-in to the 2012 film, for PlayStation 3, Xbox 360, Wii, Nintendo DS, and Nintendo 3DS\n[…]\nBattleship, 2016, for PlayStation 4 utilizing the PlayLink technology\n[…]\nBattleship (film), 2012 film adaptation\n[…]\nBattleship (puzzle)\n[…]\nBattleship Official Hasbro Rules – Rulebook insert for Battleship (2002 version)\n[…]\nBattleship   at BoardGameGeek"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Batalha_naval_%28jogo%29",
        "situacao": "ok",
        "texto": "Batalha naval é um jogo de tabuleiro de dois jogadores, no qual os jogadores têm de adivinhar em que quadrados estão os navios do oponente. Embora o primeiro jogo em tabuleiro comercializado e publicado pela Milton Bradley Company em 1931, o jogo foi originalmente jogado com lápis e papel. Seu objectivo é derrubar os barcos do oponente adversário, ganha quem derrubar todos os navios adversários pr\n[…]\n«BattleFriends at Sea — Batalha naval com os seus amigos mais queridos». , jogo de batalha naval para iPhone e iPod Touch\n[…]\n«Ships N' Battles — A Revolução da Batalha Naval». , outro jogo de batalha naval para iPhone e iPod Touch\n[…]\n«Battleships — General Headquarters II». , jogo Batalha naval online (em Flash)\n[…]\n«Batalha Naval para imprimir». , jogo Batalha Naval, regras e gabarito para imprimir\n[…]\n«Batalha naval». , Implementação do navegador de jogos online",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Resta um",
      "descricao": "Jogo de tabuleiro solitário em que se eliminam pinos por saltos, até restar um, num tabuleiro em cruz com furo central."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "No tabuleiro mais comum do resta um, em forma de cruz e com só o furo central vazio, quantos pinos há no começo do jogo?",
    "resposta": "Trinta e dois",
    "distratores": [
      "Trinta e três",
      "Trinta e seis",
      "Quarenta e quatro"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Peg_solitaire",
      "https://pt.wikipedia.org/wiki/Resta_um"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Peg_solitaire",
        "situacao": "ok",
        "texto": "Peg solitaire, solo noble, solo goli, marble solitaire or simply solitaire is a board game for one player involving movement of pegs on a board with holes. Some sets use marbles in a board with indentations. The game is known as solitaire in Britain and as peg solitaire in the US where 'solitaire' refers to the family of card games.\n[…]\nThe standard game fills the entire board with pegs except for the central hole. The objective is, making valid moves, to empty the entire board except for a solitary peg in the central hole.\n[…]\nthe mCRL2 toolset (see the peg_solitaire example in the distribution).\n[…]\nIn Cowboy Bebop: The Movie, the main antagonist, Vincent Volaju, spends most of his free time playing peg solitaire. The vector\n[…]\nfor his planned Bioterrorism attack, a type of nanobot, is stored in peg solitaire marbles.\n[…]\nBeasley, John D. (1985), The Ins & Outs of Peg Solitaire, Oxford University Press, ISBN 978-0-19-853203-3\n[…]\nBell, G. I. (2008), \"Solving triangular peg solitaire\", Journal of Integer Sequences, 11: Article 08.4.8, arXiv:math.CO/0703865, Bibcode:2007math......3865B.\n[…]\nBruijn, N.G. de (1972), \"A solitaire game and its relation to a finite field\" (PDF), Journal of Recreational Mathematics, 5: 133–137, archived (PDF) from the original on 2022-10-09\n[…]\nCross, D. C. (1968), \"Square solitaire and variations\", Journal of Recreational Mathematics, 1: 121–123\n[…]\nJefferson, Chris; et al. (October 2006), \"Modelling and Solving English Peg Solitairet\", Computers & Operations Research, 33 (10): 2935–2959, doi:10.1016/j.cor.2005.01.018\n[…]\nBogomolny, Alexander, \"Peg Solitaire and Group Theory\", Interactive Mathematics Miscellany and Puzzles, retrieved 7 September 2018\n[…]\nWhite Pixels (24 October 2017), Peg Solitaire: Easy to remember symmetrical solution (video), Youtube, archived from the original on 2021-12-11"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Resta_um",
        "situacao": "ok",
        "texto": "Resta um é um quebra-cabeça no qual o objetivo é, por meio de movimentos válidos, deixar apenas uma peça no tabuleiro.\n[…]\nNo início do jogo, há 32 peças no tabuleiro, deixando vazia a posição central. Um movimento consiste em pegar uma peça e fazê-la \"saltar\" sobre outra peça, sempre na horizontal ou na vertical, terminando em um espaço vazio. A peça que foi \"saltada\" é retirada do tabuleiro. O jogo termina quando não é mais possível fazer nenhum outro movimento. Nesta ocasião, o jogador ganha se restar apenas uma peça no tabuleiro.\n[…]\nPrograma de código livre para jogar Resta um\n[…]\nJogo grátis de Resta Um para Android\n[…]\nJogo grátis de Resta Um para iOS\n[…]\nJogo grátis de Resta Um para Windows Phone\n[…]\nJogo grátis de Resta Um Online"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Truco",
      "descricao": "Jogo de cartas de blefe, muito popular no Brasil, jogado com baralho sem oitos, noves e dez."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No truco paulista, uma carta aberta na mesa no começo de cada mão define quais serão as manilhas. Como se chama essa carta?",
    "resposta": "Vira",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Truco"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Truco",
        "situacao": "ok",
        "texto": "Truco é um jogo de cartas surgido no Reino de Valência (atual Comunidade Valenciana, Espanha) praticado em diversos locais da América do Sul, algumas regiões da Espanha (Valência e Ilhas Baleares) e Itália. É um jogo de vazas jogado com o baralho espanhol, por dois, quatro ou seis jogadores, divididos em dois lados opostos. Na Região Sudeste do Brasil é jogado com o baralho francês, enquanto na Re\n[…]\nUm dos jogadores é escolhido para ser o primeiro a distribuir as cartas, três para cada jogador e uma vira (truco paulista). As cartas podem ser dadas picadas ou três a três com a primeira sendo do mão. É permitida a feitura do maço, assim como é permitido o desfiamento das cartas nas mãos, sem a criação de montinhos na mesa. Dá-se o monte para o adversário à esquerda cortar.\n[…]\nSe o jogador perder de 1 ponto, deve-se morder a ponta da mesa jogada\n[…]\nNo truco, é fundamental ter em mente a força das cartas, pois ela é diferente do comum e serve para derrotar o adversário. A força das cartas é pré-definida, mas também variável em função da carta vira, que é a carta aberta após distribuição das cartas. A vira determina a manilha.\n[…]\nA força das cartas, da maior para a menor, independente da vira é: 3 (Terno), 2 (Duque), A (Ás), K (Rei), J (Valete), Q (Dama), 7, 6, 5 e 4. O naipe da carta virada não tem importância, e o valor das manilhas para o jogo segue a seguinte ordem de naipes\n[…]\nPode ser disputado por 2, 3, 4 ou 6 jogadores, que se enfrentam em duplas. Cada jogador recebe 3 cartas, e a equipe que fizer o número de tentos máximo (12 ou 24) é a vencedora. Além do pedido de Truco, que pode aumentar o valor da mão, também existem os pedidos de Envido e Flor, que são disputas paralelas e também contabilizam pontos no placar geral. Ao contrário do truco paulista, no truco gaudério não há existência da carta vira."
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Pôquer",
      "descricao": "Jogo de cartas de apostas e blefe em que vence a melhor combinação de cinco cartas."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No pôquer, quais cartas formam o royal straight flush, a mão mais forte do jogo?",
    "resposta": "Do dez ao ás, mesmo naipe",
    "fonte": [
      "https://en.wikipedia.org/wiki/List_of_poker_hands"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/List_of_poker_hands",
        "situacao": "ok",
        "texto": "In poker, players form sets of five playing cards, called hands, according to the rules of the game. Each hand has a rank, which is compared against the ranks of other hands participating in the showdown to decide who wins the pot. In high games, like Texas hold 'em and seven-card stud, the highest-ranking hands win. In low games, like razz, the lowest-ranking hands win.\n[…]\nA royal flush or royal straight flush is a hand that contains an ace-high straight flush, such as A♦ K♦ Q♦ J♦ 10♦, and is the best possible hand in ace-high games when wild cards are not used.\n[…]\nA straight flush is a hand that contains five cards of sequential rank, all of the same suit, such as Q♥ J♥ 10♥ 9♥ 8♥ (a \"queen-high straight flush\"). It ranks below five of a kind and above four of a kind. Under high rules, an ace can rank either high (as in A♥ K♥ Q♥ J♥ 10♥, a royal flush) or low (as in 5♦ 4♦ 3♦ 2♦ A♦, a five-high straight flush), but cannot simultaneously rank both high and low (so Q♣ K♣ A♣ 2♣ 3♣ is an ace-high flush, but not a straight).\n[…]\nA straight, also known as a run, is a hand that contains five cards of sequential rank, not all of the same suit, such as 7♣ 6♠ 5♠ 4♥ 3♥ (a \"seven-high straight\"). It ranks below a flush and above three of a kind. Under high rules, an ace can rank either high (as in A♦ K♣ Q♣ J♦ 10♠, an ace-high straight) or low (as in 5♣ 4♦ 3♥ 2♥ A♠, a five-high straight), but cannot simultaneously rank both high and low (so Q♠ K♠ A♣ 2♥ 3♦ is an ace-high hand).\n[…]\nAn ace-high straight, such as A♣ K♣ Q♦ J♠ 10♠, is called a Broadway straight, while a five-high straight, such as 5♠ 4♦ 3♦ 2♠ A♥, is called a baby straight, bicycle or wheel and is the best possible hand in ace-to-five low games (where it is a high card hand, not a straight). In Chinese Poker, a three-card straight does not exist and cannot be formed in the front hand.\n[…]\nPoker probability"
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
    "indice": 42,
    "ancora": {
      "nome": "Shogi",
      "descricao": "Jogo de tabuleiro japonês de estratégia, parente do xadrez, com peças pentagonais que podem ser recolocadas após a captura."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome shogi, do xadrez japonês, significa jogo de tabuleiro de quem?",
    "resposta": "Dos generais",
    "distratores": [
      "Dos samurais",
      "Dos imperadores",
      "Dos monges"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Shogi"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Shogi",
        "situacao": "ok",
        "texto": "Shogi (将棋, shōgi; English: , Japanese: [ɕo̞ːɡʲi]), also known as Japanese chess, is an abstract strategy board game for two players. It is one of the most popular board games in Japan and is in the same family of games as Western chess, chaturanga, xiangqi, Indian chess, makruk, and janggi. Shōgi means general's (shō 将) board game (gi 棋).\n[…]\nThe two knights are placed adjacent to each silver general;\n[…]\nAccording to the Game Regulations set down in the General Meeting of Professional Players of the Japan Shogi Association held in 2024, the infractions leading to immediate game loss are the following:\n[…]\nTraditionally, the order of placing the pieces on the board is determined. There are two commonly used orders, the Ōhashi order 大橋流 and the Itō order 伊藤流. Placement sets pieces with multiples (generals, knights, lances) from left to right in all cases, and follows the order:\n[…]\nGold generals\n[…]\nSilver generals\n[…]\nShogi is derived from the Indian chaturanga (which has been dated to the seventh century CE). Chaturanga spread throughout Eurasia, developing into various related games in different regions, such as xiangqi in China, and makruk in Thailand. It is not clear when chess was brought to Japan. The earliest generally accepted mention of shogi is Shin Saru Gakuki (新猿楽記) (1058–1064) by Fujiwara Akihira.\n[…]\nAccording to Yasuji Shimizu, chief researcher at the Archaeological Institute of Kashihara, Nara Prefecture, the names of the Heian shogi pieces keep those of chaturanga (general, elephant, horse, chariot and soldier), and add to them five treasures of Buddhism (jade, gold, silver, cassia bark, and incense).\n[…]\nFrom a computational complexity point of view, generalized shogi is EXPTIME-complete.\n[…]\nPlayOK shogi\n[…]\nKyokumenpedia game record databases as move decision tree with user-generated wiki annotations (associated with 81Dojo) (in Japanese)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Shogi",
        "situacao": "ok",
        "texto": "Shogi (em japonês:  将棋, shōgi /  pronúncia em japonês: [ɕo̞ːŋi] ou [ɕo̞ːɡʲi] ), também conhecido como Xadrez Japonês ou Jogo dos Generais, é um jogo de estratégia de tabuleiro para dois jogadores, sendo a variante japonesa do xadrez. É a variante mais popular do xadrez no Japão.\n[…]\n2 Generais de Ouro\n[…]\n2 Generais de Prata\n[…]\nCada peça tem seu nome escrito na superfície na forma de dois kanji (caracteres chineses usados no japonês), usando uma tinta preta. No lado reverso de cada peça, com exceções do rei ou do general de ouro, existem um ou dois outros caracteres, sendo no conjunto de peças amadoras de outra cor (usualmente o vermelho); esse lado é virado durante a partida indicando que a peça foi promovida.\n[…]\nNativos do português algumas vezes referem os bispos promovidos a cavalos e torres promovidas a dragões, seguindo seus os nomes em japonês, e geralmente se usa o termo em japonês tokin para um peão promovido. Generais de ouro e de prata são simplesmente referidos como ouro e prata, respectivamente.\n[…]\nGeneral de prata: Uma casa para frente na diagonal ou na vertical, ou uma casa para trás na diagonal;\n[…]\nUm general de prata não necessariamente é obrigado a se promover, e é geralmente perigoso para o adversário manter um general de prata não promovido (é mais fácil, por exemplo, em infiltrar um prata atrás das linhas inimigas; enquanto que um prata promovido pode apenas recuar uma casa, e ser facilmente bloqueado). Uma torre, bispo ou peão são geralmente promovidos, ao menos que tenha o problema do \"mate com a reposição do peão\" (ver regra de reposição de peças).\n[…]\nUm general de prata, cavalo, lança ou peão se tornam um general de ouro quando promovidos.\n[…]\nUm rei ou um general de ouro não se promovem; regra que também se segue para uma peça que já está promovida.",
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
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "No xadrez chinês, qual peça, que anda exatamente duas casas na diagonal, é proibida de atravessar o rio e fica sempre do próprio lado?",
    "resposta": "Elefante",
    "fonte": [
      "https://en.wikipedia.org/wiki/Xiangqi"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Xiangqi",
        "situacao": "ok",
        "texto": "Xiangqi (; Chinese: 象棋; pinyin: xiàngqí), commonly known in English as Chinese chess and in Vietnamese as cờ tướng (literally 'General's chess'), is a strategy board game for two players. Originating in China, it is widely played in both China and Vietnam, as well as in communities of Chinese and Vietnamese descent worldwide. Xiangqi belongs to the same family of games as shogi, janggi, Western ch\n[…]\nFor an attacking (Red) horse, the most fatal points are c9 and g9 (Chinese: 臥槽馬), especially since without proper defence a quick mate can follow with an extra chariot or cannon. Although the horse can be blocked, the fact that it moves diagonally during the second half of its movement and a general cannot move diagonally means that it can deliver a smothered mate, though in xiangqi, a cannon can also do so.\n[…]\nBanqi This variation is more well known in Hong Kong than in mainland China. It uses the xiangqi pieces and board, but does not follow any of its rules, bearing more of a resemblance to the Western game Stratego as well as the Chinese game Luzhanqi.\n[…]\nLi, David H. First Syllabus on Xiangqi: Chinese Chess 1. Premier Publishing, Bethesda, Maryland, 1996. ISBN 0-9637852-5-7.\n[…]\nLi, David H. Xiangqi Syllabus on Cannon: Chinese Chess 2. Premier Publishing, Bethesda, Maryland, 1998. ISBN 0-9637852-7-3.\n[…]\nLi, David H. Xiangqi Syllabus on Elephant: Chinese Chess 3. Premier Publishing, Bethesda, Maryland, 2000. ISBN 0-9637852-0-6.\n[…]\nLi, David H. Xiangqi Syllabus on Pawn: Chinese Chess 4. Premier Publishing, Bethesda, Maryland, 2002. ISBN 0-9711690-1-2.\n[…]\nLi, David H. Xiangqi Syllabus on Horse: Chinese Chess 5. Premier Publishing, Bethesda, Maryland, 2004. ISBN 0-9711690-2-0.\n[…]\nXiangqi Championships\n[…]\nXiangqi, Chinese Chess Presentation, rules, history and variants, by Jean-Louis Cazaux\n[…]\nXiangqi (象棋): Chinese Chess by Hans Bodlaender, ed. Fergus Duniho, The Chess Variant Pages"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Xiangqi",
        "situacao": "ok",
        "texto": "O xiangqi (chinês: 象棋; pinyin: xiàngqí), xadrez chinês, ou xadrez-elefante é um jogo de estratégia jogado em um tabuleiro com nove linhas de largura por dez de comprimento. É um passatempo comum tanto na China quanto no Vietnã.\n[…]\nFinalmente, o xadrez se espalhou para o ocidente, provavelmente levado de caravana através do deserto de Gobi até o Uzbequistão, onde as mais antigas peças conhecidas, inclusive um elefante \"em pé\" datado do século II foram encontradas. De lá cruzou o Afeganistão, chegando à Pérsia por volta do século VII. Na época, a Pérsia era a cultura dominante na região. A língua indiana, o hindi, é substancialmente derivado do persa.\n[…]\nA Coreia desenvolveu uma variante do xiangqi chamada janggi (também escrito changgi, jangki, tjyang keui ou xadrez coreano). Para cada peça, as regras se equiparam às do xadrez chinês salvo indicação em contrário.\n[…]\nDividindo os dois lados, entre a quinta e sexta fileira, se encontra o rio 河 (hé). O rio é geralmente escrito como 楚河 , que significa Rio Chu; ou 漢界  (em chinês tradicional), significando literalmente Fronteira de Han, em referência a guerra entre os reinos de Chu e Han. Apesar de representar visualmente a divisória entre os dois lados, apenas duas peças são afetadas pelo rio: os soldados tem uma promoção ao atravessa-lo e os elefantes não podem ir além dele.\n[…]\nNa verdade, denomina-se ministro (相 xiàng) à peça vermelha e elefante (象 xiàng) à azul. Estas peças estão localizadas uma à esquerda do guarda da esquerda e a outra à direita do guarda da direita. Movem-se exatamente duas casas na diagonal, e não podem pular as peças que estiverem no caminho. Seu propósito é estritamente defensivo, uma vez que não podem atravessar o rio.\n[…]\nXadrez\n[…]\nHistória do Xadrez",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Pachisi",
      "descricao": "Jogo de tabuleiro tradicional da Índia, em forma de cruz, ancestral do ludo."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Diz a tradição que um imperador mogol jogava pachisi num pátio gigante do seu palácio, usando pessoas como peças. Que imperador?",
    "resposta": "Akbar",
    "distratores": [
      "Shah Jahan",
      "Babur",
      "Aurangzeb"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pachisi"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pachisi",
        "situacao": "ok",
        "texto": "Pachisi (, Hindustani: [pəˈtʃiːsiː]) is a cross and circle board game that originated in Ancient India. It is described in the ancient text Mahabharata under the name of \"Pasha\". It is played on a board shaped like a symmetrical cross. A player's pieces move around the board based upon a throw of six or seven cowrie shells as lots, with the number of shells resting with the aperture upward indicat\n[…]\nSpeculation that Pachisi derived from the earlier game of Ashtapada is plausible but unsubstantiated.\n[…]\nThe game of Pachisi was played by Akbar in a truly regal manner. The Court itself, divided into red and white squares, being the board, and an enormous stone raised on four feet, representing the central point. It was here that Akbar and his courtiers played this game; sixteen young slaves from the harem wearing the players' colours, represented the pieces, and moved to the squares according to the throw of the dice.\n[…]\nIt is said that the Emperor took such a fancy to playing the game on this grand scale that he had a court for pachisi constructed in all his palaces, and traces of such are still visible at Agra and Allahabad.\n[…]\nTo date, these grandiose boards still represent the earliest secure evidence for the existence of the game in India. The game's role in the history of India still remains to be investigated. It is often assumed that the gambling game that plays so significant a role in the Mahabharata, the classical literary epic, is pachisi, but the descriptions, such as they are, do not tie in with the game, and this conclusion is perhaps erroneous.\n[…]\nPachisi is a game for two, three, or four players, four usually play in two teams. One team has yellow and black pieces, the other team has red and green. The team which moves all its pieces to the finish first wins the game.\n[…]\nPachisi   at BoardGameGeek\n[…]\n\"Pachisi\" . Encyclopædia Britannica (11th ed.). 1911."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pachisi",
        "situacao": "ok",
        "texto": "Pachisi é um jogo de tabuleiro que se originou na Índia antiga e que é considerado o \"jogo nacional da Índia\". É jogado em uma placa com o formato de uma cruz simétrica. As peças de um jogador se deslocam placa baseada em um lance de seis ou sete búzios, com a quantidade de conchas descansando com a abertura para cima indicando o número de espaços para mover.\n[…]\nO nome do jogo deriva da palavra em hindi pachis, que significa vinte e cinco, a maior pontuação que pode ser alcançada com os búzios. O ludo é uma das muitas versões comerciais ocidentalizadas do jogo.\n[…]\nPachisi no BoardGameGeek\n[…]\nThe Rules of Pachisi & Chaupar\n[…]\nDownload do jogo pachisi para imprimir e jogar nos formatos A4 e carta",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Palavras cruzadas",
      "descricao": "Passatempo de grade com casas brancas e pretas em que se preenchem palavras cruzadas a partir de dicas."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Publicada em 1913 num jornal de Nova York, a primeira palavra cruzada moderna não era quadrada. Que formato ela tinha?",
    "resposta": "Losango (diamante)",
    "fonte": [
      "https://en.wikipedia.org/wiki/Crossword"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Crossword",
        "situacao": "ok",
        "texto": "A crossword is a word game consisting of a grid of black and white squares with numbers on the corners, into which solvers enter words or phrases (\"entries\") crossing each other horizontally (\"across\") and vertically (\"down\") according to a set of clues. Each white square is typically filled with one letter, while the black squares are used to separate entries. The first white square in each entry\n[…]\nOn December 21, 1913, Arthur Wynne, a journalist born in Liverpool, England, published a \"word-cross\" puzzle in the New York World that embodied most of the features of the modern genre. This puzzle is frequently cited as the first crossword puzzle, and Wynne as the inventor. An illustrator later reversed the \"word-cross\" name to \"cross-word\".\n[…]\nHurry, please, that's a good boy.\" In The New Yorker's inaugural issue, from 1925, the \"Jottings About Town\" section observed, \"Judging from the number of solvers in the subway and 'L' trains, the crossword puzzle bids fair to become a fad with New Yorkers.\" In 1922, the New York Public Library reported that \"The latest craze to strike libraries is the crossword puzzle\", and complained that when \"the puzzle 'fans' swarm to the dictionaries and encyclopedias so as to drive away readers and students who need these books in their daily work, can there be any doubt of the Library's duty to protect its legitimate readers?\"\n[…]\nThe 2006 documentary Wordplay, about enthusiasts of The New York Times's puzzle, increased public interest in crosswords. It highlighted attendees of Will Shortz's American Crossword Puzzle Tournament and other notable crossword enthusiasts, including former US president Bill Clinton and comedian Jon Stewart. Other crossword tournaments in the United States include Lollapuzzoola in New York City and Boswords in Boston.\n[…]\nCrossworld by Marc Romano ISBN 0-7679-1757-X\n[…]\nWhy are crossword puzzles symmetrical? (from The Straight Dope)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Palavras_cruzadas",
        "situacao": "ok",
        "texto": "O jogo de palavras cruzadas é um passatempo bastante difundido. Consiste de várias linhas formadas por quadrados em branco, algumas na vertical e outras na horizontal, que se cruzam umas com as outras. Cada linha deve ser preenchida por uma palavra, e cada palavra deve ser descoberta através de dicas que acompanham as cruzadas. Ao se preencher uma das linhas, automaticamente se preenche alguns qua\n[…]\nAs primeiras cruzadas modernas foram elaboradas por Arthur Wynne e publicadas no jornal New York World, em 1913. Durante a infância, Wynne conviveu com jogos de encaixar letras em espaços delimitados por um quadrado, de modo que formassem diferentes palavras, na horizontal ou na vertical. A inovação do inglês foi dar dicas para preencher os espaços, ao invés de dar as palavras de uma vez.\n[…]\nO jogo foi publicado em 1913 e, devido ao grande sucesso, no início da década seguinte já estava presente nos maiores jornais do mundo todo.\n[…]\nNo Brasil, as palavras cruzadas mais difundidas são as do grupo Coquetel da Ediouro Publicações, publicadas em revistas próprias e em vários jornais tal como os syndicate norte-americanos. Durante anos, a Folha de S.Paulo preferiu manter um formato mais comum nos Estados Unidos, com um profissional contratado exclusivamente para criar suas palavras cruzadas.\n[…]\nO criador das cruzadas da folha era o cruciverbalista Júlio Moncorvo; suas cruzadas costumavam ser mais complexas que as das empresas especializadas em passatempos e muitas vezes usavam palavras citadas no jornal naquele dia ou no dia anterior. Também era conhecido por usar várias vezes uma mesma palavra e uma mesma dica (por exemplo, palavra litúrgica de anuência - amém).\n[…]\nConhece-se uma data: 3 de junho de 1925. Dia em que foram publicadas, pela primeira vez, palavras cruzadas no primeiro jornal desportivo da cidade do Porto, o 'Sporting'.\n[…]\nCaça-palavras\n[…]\nPalavras Cruzadas (jogo)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Quebra-cabeça",
      "descricao": "Jogo de montar uma imagem a partir de peças recortadas que se encaixam, surgido na Inglaterra no século dezoito."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Em inglês, o quebra-cabeça de encaixar se chama jigsaw puzzle. A palavra jigsaw é o nome de que tipo de ferramenta?",
    "resposta": "Uma serra",
    "fonte": [
      "https://en.wikipedia.org/wiki/Jigsaw_puzzle"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Jigsaw_puzzle",
        "situacao": "ok",
        "texto": "A jigsaw puzzle (with context, sometimes just jigsaw or just puzzle) is a tiling puzzle that requires the assembly of often irregularly shaped, interlocking, and mosaicked pieces. Typically each puzzle piece contains a portion of a picture, which is completed by solving the puzzle, in which the picture should match the one shown on its box.\n[…]\nLife: A User's Manual (1978), Georges Perec's most famous novel, tells as pieces of a puzzle a story about a jigsaw puzzle maker.\n[…]\nAccording to the Alzheimer Society of Canada, doing jigsaw puzzles is one of many activities that can help keep the brain active and may reduce the risk of Alzheimer's disease.\n[…]\nJigsaw puzzle pieces were first used as a symbol for autism in 1963 by the United Kingdom's National Autistic Society, wherein a crying child was depicted wiping their eye. The organization chose jigsaw pieces for their logo to represent the \"puzzling\" nature of autism and the inability to \"fit in\" due to social differences, and also because jigsaw pieces were recognizable and otherwise unused.\n[…]\nProponents of the autism rights movement oppose the jigsaw puzzle iconography, stating that metaphors such as \"puzzling\" and \"incomplete\" are harmful to autistic people. Critics of the puzzle piece symbol instead advocate for an infinity symbol representing diversity. In 2017, the journal Autism concluded that the use of the jigsaw puzzle evoked negative public perception towards autistic individuals. They removed the puzzle piece from their cover in February 2018.\n[…]\nEdge-matching puzzle\n[…]\nEuropean Jigsaw Puzzle Championships\n[…]\nJigsaw puzzle accessories\n[…]\nWilliams, Anne Douglas (2004). The Jigsaw Puzzle: Piecing Together a History. New York: Berkley. ISBN 9780425201824.\n[…]\nWhy don't Jigsaw Puzzles have the correct number of pieces? – Matt Parker"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Quebra-cabe%C3%A7a",
        "situacao": "ok",
        "texto": "Uma quebra-cabeça, ou um puzzle é um jogo onde um jogador deve resolver um problema proposto. Nesse tipo de jogo, o raciocínio lógico é bem mais importante que a agilidade e a força física. Os quebra-cabeças são normalmente usados como passatempo. Acredita-se que a história começou quando no século XVIII um cartógrafo colou um mapa a uma tábua de madeira.\n[…]\nOs primeiros quebra-cabeças eram desenhos feitos em tábuas de madeira que depois eram cortados em vários pedaços com uma serra. Atualmente os mais comuns são feitos em algum tipo papel resistente e possuem as mais variadas imagens impressas, sendo as mais comuns paisagens naturais, reproduções de obras de artes famosas e construções típicas de alguma cidade. A imagem é colada no papel e depois é cortada em uma prensa, onde lâminas definem o formato das peças.\n[…]\nAcredita-se que o gravador e cartógrafo londrino John Spilsbury tenha produzido o primeiro quebra-cabeça por volta de 1760, usando uma serra de marchetaria. Os primeiros quebra-cabeças, conhecidos como dissecações, foram produzidos montando mapas em folhas de madeira e cortando ao longo das fronteiras nacionais, criando um quebra-cabeça útil para o ensino de geografia.\n[…]\nO nome \"quebra-cabeças\" veio a ser associado ao quebra-cabeça por volta de 1880, quando as serras mecânicas se tornaram a ferramenta preferida para cortar as formas. Quebra-cabeças de papelão surgiram no final de 1800, mas demoraram a substituir os de madeira porque os fabricantes sentiram que os quebra-cabeças de papelão seriam considerados de baixa qualidade e porque as margens de lucro nos quebra-cabeças de madeira eram maiores.\n[…]\nNesse tipo de quebra-cabeça, as peças devem ser combinadas de modo a formar uma estrutura pré-determinada. Exemplos:\n[…]\nQuebra-cabeça de arame\n[…]\nJogo eletrônico de quebra-cabeça",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Xadrez-boxe",
      "descricao": "Esporte híbrido que alterna rodadas de xadrez e de boxe, inspirado num quadrinho do francês Enki Bilal."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Inspirado num quadrinho do francês Enki Bilal, um esporte híbrido alterna rodadas de partida de xadrez com rounds de qual luta?",
    "resposta": "Boxe",
    "fonte": [
      "https://en.wikipedia.org/wiki/Chess_boxing"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Chess_boxing",
        "situacao": "ok",
        "texto": "Chess boxing, or chessboxing, is a hybrid sport that combines chess and boxing. Two combatants play alternating rounds of blitz chess and boxing until one wins by checkmate or knockout. It is also possible to win by time penalty as in normal chess, and by boxing decision if there is a draw in the chess round.\n[…]\nChess boxing was invented by French comic book artist Enki Bilal and adapted by Dutch performance artist Iepe Rubingh as an art performance and has subsequently grown into a competitive sport. Chess boxing is particularly popular in the United Kingdom, India, Finland, France, and Russia.\n[…]\nFinding this to be impractical, Rubingh developed the idea further until it turned into the competitive sport that chess boxing is today, with alternating rounds of chess and boxing and a detailed set of rules and regulations.\n[…]\nA match consists of eleven alternating rounds of chess and boxing, starting and ending with chess (therefore, six chess rounds and five boxing rounds). The same game of chess is continued across rounds. Each round of chess or boxing lasts three minutes and is typically followed by a one-minute break. The chess rounds are played under time control, with a total of nine minutes allotted to each player and no increment added to either player's clock after a move is made.\n[…]\nThe first honorary member is comic book artist Enki Bilal, whose comic inspired the invention of chess boxing.\n[…]\nRussian Chess Boxing Organisation\n[…]\nOn 11 December 2022, YouTube personality Ludwig Ahgren hosted a chess boxing competition called Mogul Chessboxing, featuring other YouTube and Twitch celebrities, as well as Super Smash Bros players and chess grandmasters. The stream peaked at 317k viewers, making it the largest premier of chess boxing in the history of the sport.\n[…]\nList of Chess boxing champions"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Boxe-xadrez",
        "situacao": "ok",
        "texto": "Boxe-xadrez, ou boxadrez, segundo algumas traduções, é um esporte híbrido que combina o enxadrismo e o pugilismo.\n[…]\nO conceito surgiu originalmente em 1992, criado pelo cartunista Enki Bilal, em cuja novela Froid-Équateur era disputada uma partida fictícia. Em 2003, o artista holandês Iepe Rubingh promoveu a primeira \"luta-partida\" da nova modalidade.\n[…]\nSão quatro minutos de xadrez e três de boxe com intervalo de um minuto entre eles. Segundo algumas fontes, o tempo no ringue de boxe para cada round é de 2 minutos[carece de fontes]?. Ganha quem der xeque-mate no adversário ou nocautear o outro.\n[…]\n«Terra.com: Holandês cria esporte que mistura boxe e xadrez»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Catan",
      "descricao": "Jogo de tabuleiro moderno de colonização de uma ilha com troca de recursos, criado por Klaus Teuber em 1995."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "O alemão Klaus Teuber contou que criou o Catan inspirado na colonização de qual ilha pelos vikings?",
    "resposta": "Islândia",
    "distratores": [
      "Groenlândia",
      "Sicília",
      "Irlanda"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Klaus_Teuber",
      "https://en.wikipedia.org/wiki/Catan"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Klaus_Teuber",
        "situacao": "ok",
        "texto": "Klaus Wilhelm Heinrich Teuber (25 June 1952 – 1 April 2023)  was a German board game designer best known as the creator of Catan. Originally working as a dental technician, he began designing games first as a hobby then as a full-time career.\n[…]\nIn 1991, Teuber started designing The Settlers of Catan, inspired by the history of Viking settlers in Iceland. He took four years to develop the island-settling game; his major breakthrough was when he introduced hexagonal tiles instead of using squares to represent wood, ore, brick, wool, and wheat. Catan has been credited with launching a new more \"social\" era for board games, introducing bargaining and bartering among players as part of the strategy to win.\n[…]\nTeuber died on 1 April 2023 at age 70, after a brief illness.\n[…]\nFor a more complete list, see catan.com's ludography 1988–2024\n[…]\nCatan (1995) (Die Siedler von Catan, The Settlers of Catan) and its many expansions and versions such as the 2007 video game.\n[…]\nTeuber won the award Spiel des Jahres (Game of the Year) a total of four times: for Barbarossa in 1988, Adel Verpflichtet (Hoity Toity) in 1990, Drunter und Drüber (Wacky Wacky West) in 1991, and Die Siedler von Catan (The Settlers of Catan) in 1995.\n[…]\nGoing Cardboard, (documentary; includes an interview with Teuber)\n[…]\nhttp://www.catan.de/\n[…]\nhttp://www.catan.com/\n[…]\nLevy, Larry. \"Klaus Teuber: The Special K's of German Game Design (Kramer, Knizia, and Klaus)\". The Games Journal - a boardgaming monthly. Archived from the original on 25 August 2001. Retrieved 19 August 2024. After graduating from college, he followed in his father's footsteps and worked as a dental technician, eventually taking over his father's company. At the rather advanced age of 36 he had his first game published."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Catan",
        "situacao": "ok",
        "texto": "Catan (), previously known as The Settlers of Catan or simply Settlers, is a multiplayer board game designed by Klaus Teuber. It was first published in 1995 in Germany by Franckh-Kosmos Verlag (Kosmos). The Settlers of Catan became one of the first Eurogames to achieve popularity outside Europe. As of 2020, more than 32 million boxed sets in 40 languages had been sold. The game and its many expans\n[…]\nAfter releasing the 5- to 6-player extension, Teuber began to publish expansions for the base game. The first, Seafarers of Catan, was released in 1997; it was later retitled Catan: Seafarers. Seafarers adds ships that allow players to cross sea hexes, and includes scenarios in which players explore an archipelago of islands. It also adds gold-producing hexes that allow players to take the resource of their choice.\n[…]\nThe popularity of The Settlers of Catan led to the creation of spinoff games and products, starting in 1996 with The Settlers of Catan card game (later renamed to Catan Card Game), and the 2003 novel, Die Siedler von Catan, by German historical fiction author Rebecca Gablé, which tells the story of a group of Norse seafarers who set out in search of the mythical island of Catan.\n[…]\nTwo official PC versions of Catan have been released, The First Island (the basic game only) and Cities & Knights (with Seafarers and Cities & Knights expansions). The First Island is available for the PC only in German. Cities & Knights was available in both English and German.\n[…]\nIn February 2015, Variety announced that producer Gail Katz had purchased the film and TV rights to The Settlers of Catan. Katz said, \"The island of Catan is a vivid, visual, exciting and timeless world with classic themes and moral challenges that resonate today. There is a tremendous opportunity to take what people love about the game and its mythology as a starting point for the narrative\"."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Klaus_Teuber",
        "situacao": "ok",
        "texto": "Klaus Teuber (Alemanha, 25 de junho de 1952 – 1 de abril de 2023) foi um designer de jogos de tabuleiro. Ganhou por quatro vezes o prêmio Spiel des Jahres, com os jogos Descobridores de Catan, Barbarossa, Drunter und Drüber e Adel Verpflichtet. Abandonou em 1999 a profissão de protético para se dedicar à criação de jogos.\n[…]\nThe Settlers of Catan (e suas muitas expansões, bem como a versão do videogame, Catan)\n[…]\nThe Settlers of Canaan , uma versão legalmente licenciada e biblicamente orientada de Catan. Não está claro se Teuber ou outra pessoa desenvolveu esta edição.\n[…]\nTimberland, um jogo de tabuleiro de estilo alemão baseado no gerenciamento de florestas.\n[…]\nTeuber morreu em 1 de abril de 2023, aos setenta anos.\n[…]\n«Site oficial» (em alemão)\n[…]\n«Special K - Klaus Teuber, Larry Levy, The Games Journal» (em inglês)\n[…]\nKlaus Teuber, creator of Catan, has passed away (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Mate do pastor",
      "descricao": "Xeque-mate rápido de abertura no xadrez, em que dama e bispo atacam a casa vizinha ao rei adversário."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Como se chama o xeque-mate de principiante em que a dama, apoiada pelo bispo, captura o peão vizinho ao rei preto logo no quarto lance?",
    "resposta": "Mate do pastor",
    "fonte": [
      "https://en.wikipedia.org/wiki/Scholar%27s_mate"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Scholar%27s_mate",
        "situacao": "ok",
        "texto": "In chess, scholar's mate is the checkmate achieved by the following moves, or similar:\n[…]\nThe Schollers Mate.\n[…]\nIn the continuation 2...Bc5 (the Classical Defense) 3.Qh5, Black can defend against both scholar's mate and the threatened 4.Qxe5+ with 3...Qe7, intending to gain a tempo later with 4...Nf6. The further continuation 4.Nf3 (threatening Nxe5) Nc6 5.Ng5 g6 (diagram) 6.Qf3? Qxg5 7.Qxf7+ Kd8 leaves White with no checkmate and no good way to defend against both ...Nd4, threatening the c2-pawn, and ...Qf6, exchanging queens.\n[…]\nAlthough a quick mate on f7 is almost never seen in play above beginner level, the basic idea underlying it—that f7 and f2, squares defended only by the kings, are weak and therefore good targets for early attack—is the motivating principle behind a number of chess openings.\n[…]\nThe Modern Defense, Monkey's Bum variation involves White threatening a scholar's mate with an early Qf3.\n[…]\nAmong English speakers, the scholar's mate is also known as schoolboy's mate (which in modern English perhaps better connotes the sense of \"novice\" intended by the word scholar's) and Blitzkrieg (German for \"lightning war\", meaning a quick victory).\n[…]\nThe names of the scholar's mate in other languages are as follows:\n[…]\nin Italian: barber's mate\n[…]\nFool's mate\n[…]\nHooper, David; Whyld, Kenneth (1996) [First pub. 1992]. \"scholar's mate\". The Oxford Companion to Chess (2nd ed.). Oxford University Press. pp. 358–359. ISBN 0-19-280049-3.\n[…]\nSunnucks, Anne (1970). \"Scholar's Mate\". The Encyclopaedia of Chess (2nd ed.). St. Martin's Press. ISBN 978-0-7091-4697-1."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mate_Pastor",
        "situacao": "ok",
        "texto": "Mate do Pastor é um tipo de xeque-mate básico efetuado pelas brancas durante a abertura, que segue a ideia de atacar o peão que se encontra na casa f7  e que é defendido apenas pelo rei. Estes são os lances principais do mate do pastor:\n[…]\nVariações na sequência de lances deste mate que também utilizam bispo e Dama contra o ponto f7 na abertura, são também considerados como Mate Pastor. Porém há muitas variações possíveis. Uma delas usa o Bispo da Dama para auxiliar no xeque:\n[…]\nSegundo uma história popular, um rei teria encontrado um pastor em uma montanha jogando xadrez, e o desafiou dizendo que se o pastor perdesse seria decapitado, mas se ganhasse lhe seria concedida a montanha inteira. O pastor venceu o rei em quatro movimentos e, assim, deu-se o nome da jogada.\n[…]\nO Mate do Pastor é uma abertura de armadilha que é frequentemente usada na literatura de xadrez como um exemplo de um ataque rápido de esteira. É o xeque-mate mais curto possível depois do Mate do Louco, bem como a sequência de movimentos mais curta pela qual você pode perder se fizer movimentos de abertura \"clássicos\" sem se atentar às ameaças do oponente.\n[…]\nSe, por outro lado, o oponente se defender da ameaça, o jogador que tenta o Mate do Pastor não tem vantagens de seu movimento inicial de dama, mas desvantagens de desenvolvimento, já que as pretas agora podem tomar a iniciativa. A saída prematura da dama acaba por ser uma perda de tempo. Após 1. e4 e5, o movimento 2. Dh5 (ataque de Parham) é, portanto, raramente jogado em partidas de jogadores de médio a alto nível.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "War (jogo)",
      "descricao": "Jogo de tabuleiro brasileiro de estratégia militar e conquista de territórios, lançado em 1972 e inspirado no Risk."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Inspirado no Risk, o War, jogo de conquistar territórios com exércitos coloridos, foi lançado no Brasil em 1972 por qual fabricante?",
    "resposta": "Grow",
    "distratores": [
      "Estrela",
      "Xalingo",
      "Toyster"
    ],
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
  }
]

---

# MANIFESTO

# Manifesto de Perguntas — Mestre2

> **Versão preliminar 0.94 — 2026-11-02**
>
> Este documento define **o que é uma boa pergunta** no Mestre2 e **como o banco de perguntas é organizado e produzido**. Vale para qualquer pessoa ou modelo que crie, revise ou processe perguntas.
>
> Ele tem duas partes:
> - **Parte I — Regras de conteúdo (§1 a §9):** o que uma pergunta deve ser. É a parte que o gerador e o crítico automáticos recebem.
> - **Parte II — Organização e processo (§10 a §18):** esquemas, fluxo de produção, decisões, pendências, o jogo, o app e a programação até 10 000 e até 20 000 perguntas. É a referência de quem mantém o projeto.
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
- no máximo **3 perguntas por âncora** em cada lote (2 até 2026-10-27), nunca com o mesmo ângulo;
- no máximo **2 perguntas com o mesmo ângulo** para uma mesma âncora, no banco inteiro;
- no máximo **8 perguntas por âncora** no banco inteiro (3 até 2026-10-23, 5 até 2026-10-27), somando texto e figura, e no máximo **3 com figura** (2 até 2026-10-27). As exclusivas de uma coleção têm conta à parte (§6, "Coleções");
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
- **Resposta que é um ano ou uma data: sempre `multipla`.** Quando a resposta é um ano específico ("1969") ou uma data mais detalhada ("15 de novembro de 1889", "2 de fevereiro"), a pergunta é obrigatoriamente de múltipla escolha, com ou sem figura. Os distratores são anos (ou datas) próximos e críveis, no mesmo formato da resposta, nenhum deles também correto. A regra vale só quando **a resposta é o próprio ano ou a data**: século e década ("século dezenove", "década de 1970") e respostas em que o ano identifica outra coisa, como uma edição de Olimpíada ou de Copa ("Londres 2012", "1970, no México"), podem continuar abertas. Essas perguntas têm um teto no jogo original (§9).
- **Metade aberta, metade múltipla escolha** (desde 2026-10-27). O jogo original busca as duas formas na mesma proporção, em cada tema, para que um modo só de múltipla escolha tenha perguntas de todos os temas. Vale para texto e figura. Cada lote recebe a quantidade de `multipla` que aproxima o seu tema dessa meta (§17), e a pergunta segue a quantidade pedida, salvo quando a outra forma for claramente melhor.

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
- no máximo **três perguntas com figura por âncora**, de famílias diferentes e com imagens diferentes (a obra inteira e um detalhe, a fachada e uma vista aérea).

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
- **Exclusiva** (campo `exclusiva`): a pergunta sai **só no modo da coleção**, nunca no jogo original (Master e Linear).
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
- **Saturação:** o áudio conta no limite de 8 perguntas por âncora, e cada âncora tem no máximo 1 pergunta com áudio.
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
- **Respostas que são um ano específico** ("1969", "800 a.C."), somando abertas e múltiplas: no máximo **9%** das perguntas do lote, e no máximo **uma** num lote de figuras, que tem 12 itens (desde 2026-10-30, só no jogo original). Para pedir a época, prefira o século, a década ou a ordem entre dois fatos. O registro descarta o que passar do teto; as perguntas que já estavam no banco ficam.
- No máximo **3 perguntas por âncora**, nunca com o mesmo ângulo (§4).
- **Prefira âncoras centrais e conhecidas**, mesmo que já tenham perguntas, a âncoras novas e obscuras (desde 2026-10-27; antes, "prefira âncoras novas"). O gerador recebe a lista das âncoras e perguntas já existentes no subtema, para aprofundá-las com fatos e ângulos novos, sem repetir fatos.
- **Tentar incluir uma âncora nova a cada 50 perguntas**, tão conhecida quanto as centrais, para manter alguma variedade. Se for difícil achar uma assim, o lote fica sem: uma âncora nova obscura não vale a troca.

**No banco, por subtema:**
- `conexao` + `nome` somam pelo menos **20%**.
- A distribuição por ângulo e por âncora é acompanhada pelo relatório do pipeline, e os lotes seguintes são **encomendados para preencher as lacunas**.
