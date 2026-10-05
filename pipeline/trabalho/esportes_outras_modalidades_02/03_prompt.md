Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Outras Modalidades** (tema **Esportes**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Masters de golfe",
      "descricao": "Torneio principal de golfe disputado todo ano no Augusta National Golf Club, nos Estados Unidos."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "O Masters, um dos quatro torneios principais do golfe, é disputado todo ano no mesmo clube. Em que estado americano?",
    "resposta": "Geórgia",
    "fonte": [
      "https://en.wikipedia.org/wiki/Masters_Tournament",
      "https://en.wikipedia.org/wiki/Augusta_National_Golf_Club"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Masters_Tournament",
        "situacao": "ok",
        "texto": "The Masters Tournament (usually referred to as simply the Masters, or as the U.S. Masters outside North America) is one of the four men's major championships in professional golf. Scheduled for the first full week in April, the Masters is the first major golf tournament of the year. Unlike the other major tournaments which change host venues with each tournament, the Masters is always held at the \n[…]\nAfter Clifford Roberts invited then-USGA tournament committee chairman Prescott Bush to ANGC in early 1933, Jones and Roberts strenuously petitioned the USGA to hold the U.S. Open at Augusta in 1934, but the USGA denied the petition, noting that the hot Georgia summers would create difficult playing conditions. Indeed, the professional golf schedule would have needed to change, and to date no golf major had been held in the south.\n[…]\nRoberts told the PGA of his plan for a new tournament in late 1933. The official PGA schedule, in a small endnote, mentioned Augusta's tournament alongside three others: the 1934 Tournament of the Gardens Open, the 1934 North and South Open, and a tournament in Columbus, Georgia.\n[…]\nIn 2025, a monument in Augusta, Georgia was erected by artist Baruti Tucker to honor the black caddies at Augusta National Golf Club for the Masters Tournament. Rory McIlroy won the 2025 Masters and completed the sixth grand slam in a playoff over Justin Rose. The next year, McIlroy won again, becoming the fourth player to go back-to-back at the Masters.\n[…]\nPractice rounds and daily tournament passes are sold in advance, through a selection process, only after receipt of an online application. All tickets are sold in advance and there are none sold at the gates. Additionally, Georgia state law prohibits tickets from being bought, sold, or handed off within a 2,700-foot (820 m) boundary around the club.\n[…]\nThe first 12 players, including ties, in the previous year's Masters Tournament"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Augusta_National_Golf_Club",
        "situacao": "ok",
        "texto": "Augusta National Golf Club (ANGC; also Augusta National, Augusta, or the National) is a golf club in Augusta, Georgia, United States. It is known for hosting the annual Masters Tournament.\n[…]\nAugusta National (originally, during planning stages, Augusta-National) was founded in 1932 by Bobby Jones and Clifford Roberts on the 365-acre (148 ha) site of a former nursery and antebellum plantation called Fruitland (later Fruitlands). Jones sought to create a world-class winter golf course in his native state of Georgia.\n[…]\nOther names considered for the club were American-International Golf Club, Georgia-National Golf Club (the early leading choice), the International Golf Club of Augusta, and Southern National Golf Club.\n[…]\nThe Georgia Railroad and Banking Company, Augusta's main creditor, forced a foreclosure of the club and re-incorporation as Augusta National, Inc. in 1935. The bank realized its best chance of recouping its debt was to ensure the club stayed afloat through the depression.\n[…]\nAugusta National Golf Club and the Masters Tournament are also featured in the video game Tiger Woods PGA Tour 12: The Masters, and have subsequently featured in later iterations of the game. This was the first time that the course was officially used in the Tiger Woods franchise. In 2021, EA Sports and Augusta National Golf Club announced plans to revive their PGA Tour series, which would once again feature Augusta National Golf Club and the Masters Tournament.\n[…]\nOwen, David (1999). The Making of the Masters: Clifford Roberts, Augusta National, and Golf's Most Prestigious Tournament. New York: Simon & Schuster. ISBN 9780684857299. OCLC 40550887.\n[…]\nGuide to Augusta National at Golflink"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Masters_de_Golfe",
        "situacao": "ok",
        "texto": "Masters de Golfe (em inglês The Masters Tournament) é um dos quatro principais campeonatos de golfe profissional chamados de Major. Agendado para a primeira semana completa de abril, o Masters é o primeiro Major do ano, e ao contrário dos outros, é sempre realizado no mesmo local, o Augusta National Golf Club, um campo privado no sudeste dos Estados Unidos, na cidade de Augusta, na Geórgia.\n[…]\nA ideia do torneio partiu dos projetistas do Augusta National Golf Club, Clifford Roberts e Bobby Jones. O clube foi inaugurado em 1933 e Jones queria fazer o curso de golfe mais difícil do país. A primeira competição, realizada em 1934 foi feita com os jogadores disputando os buracos de 10 a 18 e depois de 1 a 9. No ano seguinte o processo foi revertido e permanece assim até hoje.\n[…]\nInicialmente, o campo Augusta National Invitational era composto pelos associados próximos de Bobby Jones. Jones havia feito uma petição à USGA para realizar o Aberto dos Estados Unidos em Augusta, mas a USGA negou a petição, observando que os verões quentes da Geórgia criariam condições de jogo difíceis.\n[…]\n(A referência do \"15º clube\" é baseada na regra do golfe que limita um jogador a carregar 14 tacos durante uma rodada.) Crenshaw venceu pela primeira vez em Augusta em 1984. Em 1997, Tiger Woods, com 21 anos, tornou-se o campeão mais jovem da história do Masters, vencendo por 12 tacadas com um par 270 de 18 abaixo do qual quebrou o recorde de 72 buracos de 32 anos.\n[…]\nEm 2003, o Augusta National Golf Club foi alvo de Martha Burk, que organizou um protesto fracassado no Masters daquele ano para pressionar o clube a aceitar sócias mulheres. Burk planejava protestar nos portões da frente do Augusta National durante o terceiro dia do torneio, mas seu pedido de autorização foi negado. Uma apelação do tribunal foi rejeitada. Em 2004, Burk afirmou que ela não tinha mais planos de protestar contra o clube.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Masters de golfe",
      "descricao": "Torneio principal de golfe disputado todo ano no Augusta National Golf Club, nos Estados Unidos."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Desde 1949, o campeão do torneio Masters de golfe recebe uma peça de roupa como símbolo da vitória. Que peça é essa?",
    "resposta": "Uma jaqueta verde",
    "fonte": [
      "https://en.wikipedia.org/wiki/Masters_Tournament"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Masters_Tournament",
        "situacao": "ok",
        "texto": "The Masters Tournament (usually referred to as simply the Masters, or as the U.S. Masters outside North America) is one of the four men's major championships in professional golf. Scheduled for the first full week in April, the Masters is the first major golf tournament of the year. Unlike the other major tournaments which change host venues with each tournament, the Masters is always held at the \n[…]\nThe tournament has a number of traditions. Since the 1949 Masters, a green jacket (specifically Pantone 342C, \"Augusta Green\") has been awarded to the champion, who must return it to the clubhouse one year after his victory, although it remains his personal property and is stored with other champions' jackets in a specially designated cloakroom. In most instances, only a first-time and reigning champion may remove his jacket from the club grounds.\n[…]\nIn addition to a cash prize, the winner of the tournament is presented with a distinctive green jacket, formally awarded since 1949 and informally awarded to the champions from the years prior. The green sport coat is the official attire worn by members of Augusta National while on the club grounds; each Masters winner becomes an honorary member of the club.\n[…]\nGoodr manufactures sunglasses with a variety of Masters-exclusive designs that reference Augusta National. The Masters has also produced an annual collectable commemorative pin for each year's tournament since at least the 1990s, which included a line of pins themed to the course's holes sold from 2001 through 2018.\n[…]\nThe first 12 players, including ties, in the previous year's Masters Tournament\n[…]\nThe current SiriusXM broadcast team features lead play-by-play announcers and on-course reporters covering the action around Augusta National Golf Club, and Masters Radio also includes related programming such as tournament specials and ancillary event coverage."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Masters_de_Golfe",
        "situacao": "ok",
        "texto": "Masters de Golfe (em inglês The Masters Tournament) é um dos quatro principais campeonatos de golfe profissional chamados de Major. Agendado para a primeira semana completa de abril, o Masters é o primeiro Major do ano, e ao contrário dos outros, é sempre realizado no mesmo local, o Augusta National Golf Club, um campo privado no sudeste dos Estados Unidos, na cidade de Augusta, na Geórgia.\n[…]\nO torneio tem várias tradições. Desde 1949, uma jaqueta verde foi concedida ao campeão, que deve devolvê-la ao clube um ano após a sua vitória, embora permaneça como sua propriedade pessoal e seja armazenada com jaquetas de outros campeões em um vestiário especialmente designado. Na maioria dos casos, apenas um campeão pela primeira vez e atualmente reinante pode retirar sua jaqueta do recinto do clube.\n[…]\nUm golfista que vence o evento várias vezes usa o mesmo casaco verde concedido em sua vitória inicial (a menos que ele precise ser re-equipado com uma nova jaqueta). O Jantar dos Campeões, inaugurado por Ben Hogan em 1952, é realizado na terça-feira antes de cada torneio, e está aberto apenas aos antigos campeões e a certos membros do conselho do Augusta National Golf Club.\n[…]\nEssa tacada extra custou a De Vicenzo a chance de estar em um playoff de 18 buracos na segunda-feira com Bob Goalby, que ganhou a jaqueta verde. O erro de De Vicenzo levou à famosa citação: \"Que estúpido eu sou.\" Em 1975, Lee Elder se tornou o primeiro afro-americano a jogar no Masters, 15 anos antes do Augusta National admitir seu primeiro membro negro, Ron Townsend, como resultado da Controvérsia de Shoal Creek.\n[…]\nEm 2019, Tiger Woods conquistou seu quinto Masters, sua primeira vitória no Augusta National em 14 anos e seu primeiro título importante desde 2008.\n[…]\nDuração do curso do Master no início de cada década:\n[…]\n«The Masters tournament - página oficial»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Pipeline",
      "descricao": "Onda de recife no litoral norte da ilha de Oahu, no Havaí, uma das mais famosas do surfe."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "A Pipeline, uma das ondas mais famosas e perigosas do surfe, quebra no litoral norte de qual ilha do Havaí?",
    "resposta": "Oahu",
    "distratores": [
      "Maui",
      "Kauai",
      "Molokai"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Banzai_Pipeline"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Banzai_Pipeline",
        "situacao": "ok",
        "texto": "The Banzai Pipeline, or simply Pipeline or Pipe, is a surf reef break located in Hawaii, off Ehukai Beach Park in Pupukea on O'ahu's North Shore. A reef break is an area in the ocean where waves start to break once they reach the shallows of a reef. Pipeline is known for huge waves that break in shallow water just above a sharp and cavernous reef, forming large, hollow, thick curls of water that s\n[…]\nThe location's compound name combines the name of the surf break (Pipeline) with the name of the beach fronting it (Banzai Beach). It got its name in December 1961, when surfing movie producer Bruce Brown was driving up north with Californians Phil Edwards and Mike Diffenderfer. Brown stopped at the site to film Edwards catching several waves.\n[…]\nWhen the reef is hit by a north swell, the peak (the highest tipping-point of the wave where it begins to curl) becomes an A-frame shaped wave, with Pipe closing out a bit and peeling off left, and the equally famous Backdoor Pipeline peeling away to the right at the same time.\n[…]\nThe top surfing competitions at this spot include the Pipe Masters (board surfing), the Volcom Pipe Pro, the IBA Pipeline Pro (bodyboarding), and the Pipeline Bodysurfing Classic. Surfers can also submit videos to Surfline's Wave of the Winter competition. The competition focuses on beaches on Oahu's north shore, including Pipeline.\n[…]\nThe 1964 documentary Locked In! was filmed at Banzai Pipeline.\n[…]\nThe 1974 episode \"The Banzai Pipeline\" of Hawaii Five-O was filmed at Banzai Pipeline.\n[…]\nThe 2002 sports film Blue Crush was filmed at Banzai Pipeline.\n[…]\nThe Nickelodeon animated series Rocket Power featured the Pipeline in the 2004 television movie \"Island of the Menehune\", in which the main characters visit Oahu and attempt to surf it.\n[…]\nThe 2007 film Pipeline featured events at Banzai Pipeline.\n[…]\nPipeline[link removed] on BlooSee (satellite view, NOAA chart and surfing spot)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Banzai_Pipeline",
        "situacao": "ok",
        "texto": "O Banzai Pipeline, ou simplesmente Pipeline ou Pipe, é um recife de surfe localizado no Havaí, próximo ao Ehukai Beach Park em Pupukea, na costa norte de O'ahu . Uma quebra de recife é uma área no oceano onde as ondas começam a quebrar assim que alcançam a parte rasa de um recife . Pipeline é conhecido por ondas enormes que quebram em águas rasas logo acima de um recife afiado e cavernoso, formand\n[…]\nO nome composto do local combina o nome do ponto de surfe (Pipeline) com o nome da praia à sua frente (Praia do Banzai). Recebeu o nome em dezembro de 1961, quando o produtor da lenda do surfe Bruce Brown dirigia para o norte com os californianos Phil Edwards e Mike Diffenderfer. Bruce parou no local então sem nome para filmar Phil pegando várias ondas.\n[…]\nQuando o recife é atingido por uma ondulação de norte, o pico (o ponto mais alto da onda onde ela começa a se curvar) torna-se uma onda em forma de A, com Pipe fechando um pouco e descascando para a esquerda, e o igualmente famoso Pipeline de backdoor descascando para a direita ao mesmo tempo.\n[…]\nInúmeros surfistas e fotógrafos foram mortos em Pipeline, incluindo Jon Mozo e Tahitian Malik Joyeux, que era famoso por sua carga pesada (surfe corajoso) em Teahupo'o . Muitas pessoas morreram ou ficaram gravemente feridas em Pipeline. Pipeline foi considerada uma das ondas mais mortais do mundo. Sua onda média é de 3 m, mas pode ter até 6 metros de altura. Especialmente perigosas são as seções de recife rasas conhecidas como \"Off the Wall\" e \"Backdoor\".\n[…]\nAs principais competições de surfe neste local incluem o Pipe Masters (surf de prancha), o Volcom Pipe Pro, o IBA Pipeline Pro (bodyboard) e o Pipeline Bodysurfing Classic. Os surfistas também podem enviar vídeos para a competição Wave of the Winter da Surfline. A competição se concentra nas praias da costa norte de Oahu, incluindo Pipeline.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Tour de France",
      "descricao": "Volta ciclística da França, a mais tradicional das grandes voltas do ciclismo."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Desde 1975, a última etapa do Tour de France costuma terminar em qual avenida de Paris?",
    "resposta": "Champs-Élysées",
    "fonte": [
      "https://en.wikipedia.org/wiki/Tour_de_France"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tour_de_France",
        "situacao": "ok",
        "texto": "The Tour de France (pronounced [tuʁ də fʁɑ̃s]; lit. 'Tour of France') is an annual men's multiple-stage road cycling race held primarily in France. It is the oldest and most prestigious of the three Grand Tours, which include the Giro d'Italia and the Vuelta a España.\n[…]\nTraditionally, the bulk of the race is held in July. While the route changes every year, the format of the race stays the same and includes time trials, passage through the mountain chains of the Pyrenees and the Alps, and, from 1975 on (except in 2024), a finish on the Champs-Élysées in Paris. The modern editions of the Tour de France consist of 21 day-long stages over a 23- or 24-day period and cover approximately 3,500 kilometres (2,200 mi) total.\n[…]\nFollowing a campaign by the professional women's peloton, La Course by Le Tour de France was launched by ASO in 2014 as a one-day classic held in conjunction with the men's race. The first edition was held on the Champs-Élysées prior to the final stage of the men's race, with La Course subsequently using other stages of the Tour prior to the men's race – with locations such as Pau, Col de la Colombière and Col d'Izoard. The race was part of the UCI Women's World Tour.\n[…]\nFrom 2022, Tour de France Femmes – an 8-day stage race in the UCI Women's World Tour – was held following the Tour, replacing La Course. The Tour de France Femmes had its first stage on the Champs-Élysées prior to the final stage of the men's race. The announcement of the race was praised by the professional peloton and campaigners. The first edition was won by Dutch rider Annemiek van Vleuten, completing a Giro – Tour double in the same year.\n[…]\nTour de France palmares at Cycling Archives (archived, or current page in French)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tour_de_France",
        "situacao": "ok",
        "texto": "O Tour de France (pronúncia em francês: ​[tuʁ də fʁɑ̃s]) (em português Volta à França em bicicleta (título em Portugal) ou Volta da França em ciclismo (título no Brasil)) ou simplesmente Tour, é uma competição anual de ciclismo de estrada realizada na França, disputada em etapas. A corrida foi organizada pela primeira vez em 1903 para aumentar as vendas do jornal L' Auto;  é atualmente gerido pela\n[…]\nTradicionalmente, a competição é realizada no mês de julho. Enquanto que a rota muda de edição para edição, o formato permanece o mesmo, com provas de contrarrelógio, a passagem através das cadeias de montanhas dos Pirenéus e dos Alpes e a finalização na Avenida de Champs-Élysées, em Paris. As edições atuais do Tour de France consistem em 21 etapas diárias (fases), ao longo de 23 dias, cobrindo cerca de 3 200 km (1 990 mi).\n[…]\nLevitan começou a recrutar patrocinadores, às vezes aceitando prêmios em espécie se não pudesse obter dinheiro. Ele introduziu o pódio final do Tour na Avenue des Champs-Élysées em 1975. Ele deixou o Tour em 17 de março de 1987, depois de perdas no Tour da América, onde ele estava envolvido. A alegação era de que ele havia feito cruzamento de finanças do Tour de France. Levitan insistiu que ele era inocente, mas o bloqueio do seu escritório acabou com seu trabalho.\n[…]\nDesde 1975 a etapa final foi em Paris no Champs-Élysées, em 1903-1967 a corrida terminou no Parc des Princes o estádio no oeste de Paris e em 1968-1974, no vélodrome de Vincennes ao sul da capital . Yorkshire foi anunciado como sede para as duas primeiras etapas do Tour de France de 2014.\n[…]\nO Tour de France apelou desde o início, e não apenas para as exigências das distâncias percorridas, mas porque ele jogou a um desejo de unidade nacional, uma chamada para o Maurice Barrès chamado de France \"de terra e mortes\", ou o que Georges Vigarello chamou de \"a imagem de uma França unida pela sua terra\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Tour de France",
      "descricao": "Volta ciclística da França, a mais tradicional das grandes voltas do ciclismo."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1903, qual jornal esportivo francês criou o Tour de France para vender mais exemplares?",
    "resposta": "L'Auto",
    "fonte": [
      "https://en.wikipedia.org/wiki/L%27Auto",
      "https://en.wikipedia.org/wiki/Tour_de_France"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/L%27Auto",
        "situacao": "ok",
        "texto": "L'Équipe (French: [lekip] ; lit. 'The Team') is a French nationwide daily newspaper devoted to sport, owned by Éditions Philippe Amaury. The paper is noted for coverage of association football, rugby, motorsport, and cycling. Its predecessor, L'Auto, was founded by wealthy conservative industrialists to undermine Le Vélo, which they found too progressive. It was a general sports paper that also co\n[…]\nL'Auto launched the Tour de France road cycling stage race in 1903 as a circulation booster. The race leader's yellow jersey (French: maillot jaune) was instituted in 1919, reflecting the distinctive yellow newsprint on which L'Auto was published.\n[…]\nFrustrated at Giffard's politics, they planned a rival paper, L'Auto-Vélo which began publishing in 1900. The editor was a prominent racing cyclist, Henri Desgrange, who had published a book of cycling tactics and training and was working as a publicity writer for Clément. Desgrange was a strong character but lacked confidence, so much doubting the Tour de France founded in his name that he stayed away from the pioneering race in 1903 until it looked like being a success.\n[…]\nIn 1940 Jacques Goddet (1905–2000) succeeded Desgrange as editor and nominal organiser of the Tour de France (although he refused German requests to run it during the war, see Tour de France during the Second World War). Jacques Goddet was the son of L'Auto's first financial director, Victor Goddet.\n[…]\nThe new paper published three times a week from 28 February 1946. Since 1948 it has been published daily. The paper benefited from the demise of its competitors, L'Élan, and Le Sport. Its coverage of car racing hints at the paper's ancestry by printing the words L'Auto at the head of the page in the gothic print used in the main title of the prewar paper.\n[…]\nFrance Football"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Tour_de_France",
        "situacao": "ok",
        "texto": "The Tour de France (pronounced [tuʁ də fʁɑ̃s]; lit. 'Tour of France') is an annual men's multiple-stage road cycling race held primarily in France. It is the oldest and most prestigious of the three Grand Tours, which include the Giro d'Italia and the Vuelta a España.\n[…]\nThe Tour de France was created in 1903. The roots of the Tour de France trace back to the emergence of two rival sports newspapers in the country. On one hand was Le Vélo, the first and the largest daily sports newspaper in France, on the other was L'Auto, which had been set up by journalists and businesspeople including Comte Jules-Albert de Dion, Adolphe Clément, and Édouard Michelin in 1899. The rival paper emerged following disagreements over the Dreyfus Affair.\n[…]\nThe first Tour de France started almost outside the Café Reveil-Matin at the junction of the Melun and Corbeil roads in the village of Montgeron. It was waved away by the starter, Georges Abran, at 3:16 p.m. on 1 July 1903. L'Auto had not featured the race on its front page that morning.\n[…]\nThe leader in the first Tour de France was awarded a green armband. The yellow jersey (the color was chosen as the newspaper that created the Tour, L'Auto, was printed on yellow paper), was added to the race in the 1919 edition and it has since become a symbol of the Tour de France. The first rider to wear the yellow jersey was Eugène Christophe. Riders usually try to make the extra effort to keep the jersey for as long as possible in order to get more publicity for the team and its sponsors.\n[…]\nThe academic historians Jean-Luc Boeuf and Yves Léonard say most people in France had little idea of the shape of their country until L'Auto began publishing maps of the race.\n[…]\nCyclists who have died during the Tour de France:"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/L%27%C3%89quipe",
        "situacao": "ok",
        "texto": "L'Équipe (em português: “O Time” ou “A Equipe” ou \"A Equipa\" em português de Portugal) é um jornal francês dedicado ao esporte, de propriedade da Éditions Philippe Amaury. O jornal é particularmente notável por sua cobertura sobre futebol, rúgbi, automobilismo e ciclismo.\n[…]\nSeu antecessor foi o L'Auto, um jornal de esportes em geral. O nome reflete o interesse da época sobre as corridas.\n[…]\nCampeão dos Campeões (em inglês: Champion of Champions) é um prêmio realizado pelo jornal francês L'Equipe. A votação que decide o vencedor é feita entre os jornalistas do próprio periódico.\n[…]\n2003-2008 : Claude Droussent (editor ) e Michel Dalloni (diretor do jornal cotidiano)\n[…]\n2008-2009 : Remy Dessarts (editor) et Fabrice Jouhaud (diretor  da redação  do jornal cotidiano)\n[…]\n«Página oficial» (em francês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Kentucky Derby",
      "descricao": "Tradicional corrida de cavalos puro-sangue disputada anualmente no hipódromo de Churchill Downs, nos Estados Unidos."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Disputado desde 1875, o Kentucky Derby, tradicional corrida de cavalos americana, acontece em qual cidade?",
    "resposta": "Louisville",
    "distratores": [
      "Lexington",
      "Nashville",
      "Cincinnati"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Kentucky_Derby",
      "https://en.wikipedia.org/wiki/Churchill_Downs"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Kentucky_Derby",
        "situacao": "ok",
        "texto": "The Kentucky Derby () is an American Grade I stakes race run at Churchill Downs in Louisville, Kentucky. The race is run by three-year-old Thoroughbreds at a distance of 1+1⁄4 miles (10 furlongs; 2,012 metres). Colts and geldings carry 126 pounds (57 kilograms) and fillies 121 pounds (55 kilograms).\n[…]\nOn May 16, 1925, the first live radio broadcast of the Kentucky Derby aired on WHAS as well as on WGN in Chicago. On May 7, 1949, the first television coverage of the Kentucky Derby took place, produced by WAVE-TV, the NBC affiliate in Louisville. This coverage was aired live in the Louisville market and sent to NBC as a kinescope newsreel recording for national broadcast.\n[…]\nThe Kentucky Derby began offering $3 million in purse money in 2019. Churchill Downs officials have cited the success of historical race wagering terminals at their Derby City Gaming facility in Louisville as a factor behind the purse increase. The Derby first offered a $1 million purse in 1996; it was doubled to $2 million in 2005.\n[…]\nNorman Adams has been the designer of the Kentucky Derby Logo since 2002. On February 1, 2006, the Louisville-based fast-food company Yum! Brands, Inc. announced a corporate sponsorship deal to call the race \"The Kentucky Derby presented by Yum! Brands.\" In 2018, Woodford Reserve replaced Yum! Brands as the presenting sponsor.\n[…]\nIn the weeks preceding the race, numerous activities took place for the Kentucky Derby Festival. Thunder Over Louisville—an airshow and fireworks display—generally begins the festivities in earnest two weeks before the Derby.\n[…]\nList of attractions and events in the Louisville metropolitan area\n[…]\nNicholson, James C. (2012). The Kentucky Derby: How the Run for the Roses Became America's Premier Sporting Event. Lexington, Kentucky: University Press of Kentucky."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Churchill_Downs",
        "situacao": "ok",
        "texto": "Churchill Downs is a thoroughbred horse racing complex in Louisville, Kentucky, United States. Since its opening in 1875, it has hosted the annual Kentucky Derby, the first leg of the Triple Crown, as well as the Kentucky Oaks. The venue is named after the Churchill family, prominent in Kentucky for many years. Churchill Downs has also hosted the Breeders' Cup on nine occasions, most recently on N\n[…]\nThe track, formally named Churchill Downs in 1883, is named for the locally prominent Churchill family, after John and Henry Churchill leased 80 acres (32 ha) of their land to their nephew, Colonel Meriwether Lewis Clark Jr. (grandson of explorer William Clark). Clark was president of the Louisville Jockey Club and Driving Park Association, which formed in 1875.\n[…]\nHis father-in-law, Richard Ten Broeck, was a horse breeder and trainer, and introduced Clark to horse racing, attending the English Derby at Epsom Downs outside London. Back in Louisville, Clark sought to build an upscale track like Epsom Downs, and include a signature race resembling the English Derby. Clark gathered 320 local sportsmen and business leaders to each invest $100 to fund a new racetrack and grandstand for the Louisville Jockey Club.\n[…]\nThe twin spires atop the grandstands are the most recognizable architectural feature of Churchill Downs and are used as a symbol of the track and the Derby. They were designed by the Louisville architectural firm D.X. Murphy & Bro. who were prolific in the city, markedly so for their philanthropic work with the Catholic Church. Today, Churchill Downs covers 147 acres (59 ha). The usual number of people seated at the derby is 50,000 people, though crowds can reach over 150,000 on Derby day.\n[…]\nKentucky Derby top four finishers\n[…]\nList of attractions and events in the Louisville metropolitan area\n[…]\nRoad to the Kentucky Derby\n[…]\nKentucky Derby website\n[…]\nKentucky Oaks website"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Kentucky_Derby",
        "situacao": "ok",
        "texto": "Kentucky Derby é uma competição de turfe disputada anualmente no hipódromo de Churchill Downs, em Louisville, Kentucky nos EUA. A corrida realiza-se sobre uma pista de areia com a distância de uma milha e um quarto (aproximadamente 2.000 metros) de galope plano, destinada  para cavalos thoroughbred de 3 anos.\n[…]\nAo contrário do Preakness e Belmont Stakes, que tiveram hiatos em 1891-1893 e 1911-1912, respectivamente, o Kentucky Derby tem sido realizado a cada ano consecutivo desde 1875, mesmo durante as duas Guerras Mundiais. Um cavalo deve vencer as três corridas para ganhar a Tríplice Coroa.\n[…]\nEm 1872 o coronel M. Lewis Clark ficou entusiasmado com algumas corridas de cavalo que viu na Europa. Quando retornou para Kentucky ele organizou a Louisville Jockey Club com o objetivo de arrecadar dinheiro e organizar sua prória corrida de cavalos.\n[…]\nDurante a caminhada dos cavalos e das pessoas envolvidas até o partidor, é tocada pela banda da Universidade de Louisville e cantada pelo publico a música-tema do estado de Kentucky, \"My Old Kentucky Home\". A adoção desta balada na tradição do Kentucky Derby data de 1921 na 47ª corrida do clássico. Atualmente, a música também é executada em outros eventos esportivos no estado de Kentucky.\n[…]\nO Festival do Derby de Kentucky ou Kentucky Festival Day ( em ingles) acontece todos os anos em Louisville, Kentucky, durante as duas semanas que precedem a corrida de cavalos do Kentucky Derby. O evento conta com diversas atividades que incluem queima de fogos, jogos de basquete e corridas de rua.\n[…]\n\"Riders Up!\" É o comando tradicional acionado no paddock dado ao jóquei para montar seus cavalos antes da corrida. Desde 2012 é feito por um participante dignitário ou celebridade.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Rayssa Leal",
      "descricao": "Skatista brasileira, medalhista olímpica no skate street, conhecida como Fadinha."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em que cidade do Maranhão nasceu a skatista Rayssa Leal, medalhista olímpica?",
    "resposta": "Imperatriz",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Rayssa_Leal",
      "https://en.wikipedia.org/wiki/Rayssa_Leal"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Rayssa_Leal",
        "situacao": "ok",
        "texto": "Jhúlia Rayssa Mendes Leal (Imperatriz, 4 de janeiro de 2008) é uma skatista brasileira, vice-campeã olímpica nos Jogos Olímpicos de Verão de 2020 em Tóquio, sendo a mais jovem medalhista olímpica brasileira. Em 2024, conquistou o bronze nos Jogos Olímpicos de Paris. Além disso, é campeã pan-americana, vencendo a medalha de ouro no skate street dos Jogos Pan-Americanos de 2023, realizados em Santia\n[…]\nRayssa, filha de Lilian e Haroldo Leal, nasceu em 4 de janeiro de 2008 e mora em Imperatriz, segunda maior cidade do Maranhão, e alterna os estudos escolares com os treinamentos. Começou a treinar o esporte aos seis anos de idade, após receber um skate de aniversário de um amigo de seu pai. Apesar de não se importar de ser chamada de “Fadinha”, a atleta prefere ser chamada de Rayssa Leal.\n[…]\nIntegrou a delegação brasileira nos Jogos Olímpicos de Verão de 2020 em Tóquio, que começaram em 23 de julho de 2021 devido à Pandemia de COVID-19 e foi a atleta mais jovem a fazer parte da delegação brasileira. Rayssa conquistou a medalha de prata, sendo a melhor skatista brasileira na competição e a medalhista mais jovem da delegação brasileira, aos 13 anos e 203 dias.\n[…]\nEm fevereiro de 2024, Rayssa Leal foi vice-campeã na Street League em Paris. Apenas dois meses depois, em abril, ela subiu novamente ao pódio, conquistando o título na etapa de San Diego da SLS. Em maio, Leal continuou sua trajetória de vitórias ao ganhar a medalha de ouro na etapa da China do Pré-Olímpico de skate street, garantindo sua vaga nos Jogos Olímpicos de Verão de 2024 em Paris. Nos Jogos, ela garantiu o pódio ao Brasil, levando para casa a medalha de bronze com uma pontuação 88,83.\n[…]\nCom esta conquista, ela se tornou a pessoa mais jovem do Brasil a ter duas medalhas olímpicas. Em outubro, Rayssa se tornou tetracampeã no STU Pro Tour realizado na cidade do Rio de Janeiro.\n[…]\nRayssa Leal no YouTube\n[…]\nRayssa Leal em Olympics.com"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Rayssa_Leal",
        "situacao": "ok",
        "texto": "Jhulia Rayssa Mendes Leal (born 4 January 2008) is a Brazilian professional skateboarder who won a silver medal in women's street skateboarding at the 2020 Summer Olympics and a bronze medal at the 2024 Summer Olympics.\n[…]\nLeal was born in Imperatriz, the second largest city in Maranhão, Brazil, to parents Haraldo Oliveira Leal and Lilian Mendes. She has a younger brother, Arthur. She started skateboarding at the age of six, after getting her first skateboard as a gift from a family friend.\n[…]\nOn August 28, 2021, Leal won the opening leg of the 2021 Street League Skateboarding season, which took place in Salt Lake City, Utah, United States. In the last round of tricks, Leal needed an 8.3 rating to pass Funa Nakayama and managed to get an 8.5 rating. It was, at that time, the highest score in women's SLS history, as no woman had done a kickflip followed by a handrail maneuver until this point in an official competition.\n[…]\nIn December 2025, Leal won the 2025 SLS Super Crown in São Paulo, her forth consecutive win at SLS.\n[…]\nShe goes to psychotherapy and receives follow-up from family members and the businesswoman to direct her in her career. In June 2026, Leal made public her bisexuality after being revealed to be a relationship with Duda Wilken.\n[…]\nLeal is set to appear as one of the new playable skaters in the 2025 video game Tony Hawk's Pro Skater 3 + 4, a remake of the third and fourth entries in the series.\n[…]\nRayssa Leal at World Skate (alternative link)\n[…]\nRayssa Leal at The Boardr\n[…]\nRayssa Leal at SPoT\n[…]\nRayssa Leal at the X Games\n[…]\nRayssa Leal at Olympics.com\n[…]\nRayssa Leal at Olympedia\n[…]\nRayssa Leal at InterSportStats\n[…]\nRayssa Leal at the Comitê Olímpico do Brasil  (in Portuguese)\n[…]\nRayssa Leal on Instagram"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Maratona",
      "descricao": "Corrida de longa distância do atletismo, com percurso oficial de 42,195 quilômetros."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "A distância oficial da maratona vem do percurso usado nos Jogos de Londres, em 1908. De qual castelo partiu aquela prova?",
    "resposta": "Castelo de Windsor",
    "fonte": [
      "https://en.wikipedia.org/wiki/Marathon",
      "https://en.wikipedia.org/wiki/Athletics_at_the_1908_Summer_Olympics_%E2%80%93_Men%27s_marathon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Marathon",
        "situacao": "ok",
        "texto": "The marathon is a long-distance foot race with a distance of 42.195 kilometres (c. 26.22 mi), usually run as a road race, but the distance can be covered on trail routes. The marathon can be completed by running or with a run/walk strategy. There are also wheelchair divisions. More than 800 marathons are held worldwide each year, with the vast majority of competitors being recreational athletes, a\n[…]\nThe Boston Marathon began on 19 April 1897 and was inspired by the success of the first marathon competition in the 1896 Summer Olympics. It is the world's oldest annual marathon and ranks as one of the world's most prestigious road racing events. Its course runs from Hopkinton in southern Middlesex County to Boylston Street in Boston. Johnny Hayes' victory at the 1908 Summer Olympics also contributed to the early growth of long-distance running and marathoning in the United States.\n[…]\nThe International Olympic Committee agreed in 1907 that the distance for the 1908 London Olympic marathon would be about 25 miles or 40 kilometers. The organizers decided on a course of 26 miles from the start at Windsor Castle to the royal entrance to the White City Stadium, followed by a lap (586 yards 2 feet; 536 m) of the track, finishing in front of the Royal Box.\n[…]\nThe modern 42.195 km (26.219 mi) standard distance for the marathon was set by the International Amateur Athletic Federation (IAAF) in May 1921 directly from the length used at the 1908 Summer Olympics in London.\n[…]\nThe current world record time for men over the distance is 1 hour, 59 minutes, and 30 seconds, set in the London Marathon by Sabastian Sawe of Kenya on 26 April 2026.\n[…]\nIn 2015 the Mars rover Opportunity attained the distance of a marathon from its starting location on Mars. The valley where it achieved this distance was named Marathon Valley, which it then explored."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Athletics_at_the_1908_Summer_Olympics_%E2%80%93_Men%27s_marathon",
        "situacao": "ok",
        "texto": "The men's marathon race of the 1908 Summer Olympics took place in London on 24 July 1908. Johnny Hayes won after Dorando Pietri was disqualified for having received assistance before the finish line. For the first time in an Olympic marathon, the distance was 26 mi 385 yd (42.195 km), which would become the standard distance in 1921. 75 competitors entered the race, of whom 55 from 16 nations star\n[…]\nThis was accepted in February 1908, though already, in November 1907, a route of \"about 25 to 26 miles in distance\" had been published in the newspapers, starting at Windsor Castle and finishing at the Olympic Stadium, the White City Stadium in Shepherd's Bush in London.\n[…]\nFor the official Trial Marathon on 25 April 1908, the start was 700 yards (640 m) from Queen Victoria's statue in Windsor on ‘The Long Walk’ – a magnificent avenue leading up to Windsor Castle in the grounds of Windsor Great Park. The Trial Marathon would finish about four miles short of the full distance, in Wembley.\n[…]\nShortly before the Games opened it was realised that the Royal Entrance could not be used as the marathon entrance—it was raised to permit easy descent by the royal party from their carriages, and did not open onto the track—so an alternative entrance was chosen, diagonally opposite the Royal Box. A special path was made from Du Cane Road running due south just east of the Franco British Exhibition ground so that the distance from Windsor to the stadium remained \"about 26 miles\".\n[…]\nThe results of this exercise, along with contemporary photographic evidence, and information in the official report strongly indicated that the marathon course had been accurately measured in 1908, the full distance run, with the race starting on the path beside the East Lawn, within the grounds of Windsor Castle.\n[…]\n(**) distance 41.86 km\n[…]\nIl sogno del maratoneta is an Italian book and TV movie about Pietri's run."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Maratona",
        "situacao": "ok",
        "texto": "Maratona é uma corrida realizada na distância oficial de 42,195 km, normalmente em ruas e estradas. Única modalidade esportiva que se originou de uma lenda, seu nome foi instituído como uma homenagem à antiga lenda grega do soldado ateniense Fidípides, um mensageiro do exército de Atenas, que teria corrido 42 km entre o campo de batalha de Maratona até Atenas para anunciar aos cidadãos da cidade a\n[…]\nSeja como for, cerca de 2 400 anos mais tarde, em 1896, quando da criação dos primeiros Jogos Olímpicos da Era Moderna, Fidípides foi homenageado com a criação dessa prova, cuja distância foi estipulada em cerca de 40 km — a distância aproximada de Maratona a Atenas — mas que desde 1921 tornou-se oficialmente de 42,195 km, depois de ser disputada nesta distância em Londres 1908.\n[…]\nCom a largada marcada para ser em frente ao Castelo de Windsor e a linha de chegada em frente ao camarote real no Estádio Olímpico de White City, depois de uma volta inteira na pista de atletismo, o percurso inteiro mediu exatos 42,195 km. Disputada pela primeira vez nesta distância em Londres, acabou sendo assim oficializada em maio de 1921, pela Federação Internacional de Atletismo.\n[…]\nOficialmente, a IAAF reconhece a inglesa Violet Piercy como tal, que com sua marca extra-oficial de 3:40:22 na Polytechnic Marathon, entre Londres e Windsor, na Inglaterra de 1926, seria a primeira recordista mundial da distância para mulheres. Antes do reconhecimento da maratona como prova olímpica e prova oficial da IAAF, a norueguesa Grete Waitz quebrou por quatro vezes o recorde mundial.\n[…]\nEste título pertence atualmente ao também queniano Sabastian Sawe, com o tempo de 1:59:30 conquistado na Maratona de Londres de 2026, sendo o primeiro homem na história a correr oficialmente a prova em menos de duas horas.\n[…]\nMeia-maratona\n[…]\nRaid - A versão da maratona para remadores\n[…]\nMarathon42K — Maratona Ranking & Calendário",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Futevôlei",
      "descricao": "Esporte brasileiro de praia que mistura futebol e vôlei, jogado sem as mãos sobre uma rede."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Nos anos sessenta, em qual praia do Rio de Janeiro surgiu o futevôlei?",
    "resposta": "Copacabana",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Futev%C3%B4lei",
      "https://en.wikipedia.org/wiki/Footvolley"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Futev%C3%B4lei",
        "situacao": "ok",
        "texto": "O futevôlei (português brasileiro) ou futevólei (português europeu) é uma modalidade de esporte de areia praticada em quadras montadas nas orlas. O esporte foi originado nas praias do Rio de Janeiro por volta de 1960 e, ao longo do tempo, cresceu dentro do Brasil, assim como na Europa, na Ásia e nos Estados Unidos.\n[…]\n. Este grupo de amigos decidiu então continuar o seu entretenimento favorito na zona de areia fina, perto do calçadão da famosa Praia de Copacabana no Rio de Janeiro, onde se encontravam os campos de Voleibol de Praia. Neste cenário, e com a inclusão de uma rede a separar os praticantes, decidiram formar duas equipes e jogarem com a rede no meio, surgindo assim uma nova modalidade: o futevólei. A partir deste momento a modalidade ganhou inúmeros praticantes na terra onde a viu nascer.\n[…]\nO Campeonato Mundial de Futevôlei 4x4 de 2011 foi realizado na Praia de Copacabana no Rio de Janeiro. Teve seu início no dia 31 de março de 2011. A equipe paraguaia derrotou os anfitriões, com grande superioridade no campo, por 2 sets a 0. O paraguaio Jesús Penayo foi considerado o melhor jogador do torneio, que também contou com a participação das equipes da Argentina, Itália, Portugal, França e Espanha. O Brasil disputou o torneio com duas equipes.\n[…]\nO Brasileiro de Futevôlei, em 2013, foi disputado por 16 equipes. A final foi conquistada pelo Esporte Clube Bahia, numa vitória de 21 a 15 contra o Náutico, na cidade goiana de Caldas Novas. A partida final teve transmissão nacional ao vivo pelo canal fechado SporTV 2. A equipe campeã era formada pelos jogadores Leandro, Marcelinho, Guga e Café e assegurou vaga para disputar o Mundial de Futevôlei 4 por 4 em março de 2013 no Rio de Janeiro.\n[…]\n«FUTERJ - Federação de Futevôlei do Estado do Rio de Janeiro». (Brasil)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Footvolley",
        "situacao": "ok",
        "texto": "Footvolley (Portuguese: Futevôlei [futʃiˈvolej] in Brazil, Futevólei [ˌfutɨˈvɔlɐj] in Portugal) (first known as pevoley) is a sport which combines aspects of beach volleyball, tennis, and association football. The sport is similar to kick volleyball and futnet.\n[…]\nFootvolley was created by Octavio de Moraes in 1965 in Rio de Janeiro. Footvolley combines field rules which are based beach volleyball rules with ball-touch rules taken from association football. Essentially footvolley is beach volleyball except players are not allowed to use their hands and a football replaces the volleyball.\n[…]\nAfrican Footvolley League\n[…]\nFootvolley was created by Octavio de Moraes in 1965 on Rio de Janeiro's Copacabana Beach. The game of footvolley was first called 'pévolei' (from pé=foot and vôlei=volley), but the name was discarded in favor of \"futevôlei\" (cf. Portuguese futebol, \"association football\"). Footvolley began in Rio de Janeiro, according to a player because football was banned on the beach, but volleyball courts were open.\n[…]\nThe first International Footvolley event to occur outside of Brazil was in 2003 by the United States Footvolley Association in Miami Beach at the 2003 Fitness Festival. The event led to international players and teams in pursuit of federation status. A tournament was held during the 2016 Summer Olympics in Rio de Janeiro, as a demonstration sport.\n[…]\nIn 2011 Corona FootVolley European Tour was upgraded to Corona FootVolley World Tour inviting teams from all over the world to play.\n[…]\nIn 2015, Pro Footvolley Tour launched the world's first footvolley purpose ball. U.S. Footvolley used the ball during the 2016 U.S. Olympic qualifiers. To date, this footvolley-only specific ball is used on the Pro Footvolley Tour."
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Amyr Klink",
      "descricao": "Navegador e escritor brasileiro que atravessou o Atlântico Sul sozinho num barco a remo em 1984."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Em 1984, Amyr Klink cruzou sozinho o Atlântico Sul num barco a remo, até a Bahia. Ele partiu do litoral de qual atual país africano?",
    "resposta": "Namíbia",
    "distratores": [
      "Angola",
      "África do Sul",
      "Gabão"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Amyr_Klink",
      "https://en.wikipedia.org/wiki/Amyr_Klink"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Amyr_Klink",
        "situacao": "ok",
        "texto": "Amyr Khan Klink (São Paulo, 25 de setembro de 1955) é um navegador e escritor brasileiro. Ele foi a primeira pessoa a fazer a travessia do Atlântico Sul a remo, em 1984, a bordo do barco IAT.\n[…]\nAmyr ficou conhecido por suas expedições marítimas. O primeiro feito a ser amplamente divulgado correu entre 12 de junho a 19 de setembro de 1984, quando, em cem dias, realizou a travessia solitária em um barco a remo no oceano Atlântico. Foi um percurso de sete mil quilômetros entre Lüderitz, na Namíbia (África) e Camaçari, na Bahia , percorrido em solitário por Amyr.\n[…]\nA partir de então, passou a planejar uma viagem de circum-navegação da Terra, a bordo do veleiro Paratii. A viagem, que aconteceu entre 1998/1999 teve por objetivo  dar a volta ao mundo pela sua rota mais curta, rápida e difícil. Para cumprir o desafio, o Paratii partiu de um ponto no mapa, a ilha Geórgia do Sul, e navegou continuamente em linha reta até bater nesse ponto outra vez. Com isso, Amyr atravessou os oceanos Atlântico, Índico e Pacífico sozinho no leme do Paratii.\n[…]\nÉ diretor da Amyr Klink Planejamento e Pesquisa Ltda. e da Amyr Klink Projetos Especiais Ltda. É sócio fundador do Museu Nacional do Mar, localizado em São Francisco do Sul (SC) e da Revista Horizonte.\n[…]\nDias na Antártica: Imagens de um Expedição de Amyr Klink (ISBN 8599070010)\n[…]\nCapotar é preciso: Gestão de projetos com Amyr Klink (ISBN 8582851030)\n[…]\nDocumentário O Continente Gelado com Amyr Klink: Direção: Lawrence Wahba// e Paulo Martins, 91 minutos, National Geographic / Playarte (2006).\n[…]\n«Visita virtual imersiva ao Museu Nacional do Mar em São Francisco do Sul, SC, onde há uma sala em homenagem a Amyr»"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Amyr_Klink",
        "situacao": "ok",
        "texto": "Amyr Klink (born 25 September 1955) is a Brazilian explorer, sailor and writer. One of his projects, \"Antarctica 360\", was circumnavigating the Antarctic continent on his own, in 88 days between 1998 and 1999.\n[…]\nAmyr Klink was the first person to row across the South Atlantic, leaving from Lüderitz, Namibia on 10 June 1984 and arriving 100 days later in Camaçari, Brazil, on 18 September 1984. He embarked on this journey without telling his father. His chronicles 100 Days Between Sea and Sky reports on the journey. The food portions in this trip were compacted into packages of freeze-dried food, especially designed for him by a food processing company in Brazil.\n[…]\nDisney acquired the rights to make a film based on the events of Klink's journey. The 2026 biographical film 100 Dias was directed by Carlos Saldanha, and written by Elena Soarez. Brazilian actor Filipe Bragança portrays Amyr Klink.\n[…]\nIn 1999 Klink completed a solo circumnavigation of Antarctica over 88 days. He was credited as the first to take the shortest and most dangerous route around Antarctica.\n[…]\nAmyr was born to a Lebanese father and a Swedish mother. He moved to Paraty when he was two. Klink is a member of the Royal Geographical Society.\n[…]\nHe married Marina Bandeira in 1996 and has three daughters. In late 2021, Klink's daughter Tamara completed a solo sail across the Atlantic after accompanying her father on various expeditions.\n[…]\nDias na Antártica: Imagens de um Expedição de Amyr Klink (Days in Antarctica: Images of an Expedition of Amyr Klink) (ISBN 8599070010)\n[…]\nIn 2026 film 100 Days directed by Carlos Saldanha, the Brazilian actor Filipe Bragança portrayed Amyr Klink, which is based on his autobiography Cem Dias Entre Céu E Mar."
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Maria Lenk",
      "descricao": "Nadadora brasileira pioneira, primeira sul-americana a disputar os Jogos Olímpicos, em 1932."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em 1932, a nadadora Maria Lenk se tornou a primeira sul-americana a disputar os Jogos Olímpicos. Em que cidade?",
    "resposta": "Los Angeles",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Maria_Lenk",
      "https://en.wikipedia.org/wiki/Maria_Lenk"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Maria_Lenk",
        "situacao": "ok",
        "texto": "Maria Emma Hulga Lenk Zigler (São Paulo, 15 de janeiro de 1915 – Rio de Janeiro, 16 de abril de 2007) foi a principal nadadora brasileira, tendo sido a única mulher do país a ser introduzida no Swimming Hall of Fame, localizado em Fort Lauderdale, no estado da Flórida.\n[…]\nMaria Lenk foi a primeira nadadora brasileira a estabelecer um recorde mundial e deu ao Clube de Regatas do Flamengo diversos títulos expressivos. É considerada pioneira da natação moderna, já que foi a primeira mulher a usar em competições o nado borboleta, sendo responsável pela introdução deste tipo de nado, quando o nadou nos Jogos Olímpicos de Verão de 1936 em Berlim, em uma prova de peito.\n[…]\nAos dezessete anos já era uma atleta de nível internacional. Foi a primeira mulher sul-americana a competir em Jogos Olímpicos de Verão ao integrar a delegação brasileira nos Jogos Olímpicos de Verão de 1932, realizados em Los Angeles, nos Estados Unidos.\n[…]\nNo campeonato mundial da categoria 85-90 anos, realizado em agosto de 2000, ela voltou de Munique com cinco medalhas de ouro: foi a campeã dos 100 metros peito, 200 metros livre, 200 metros costas, 200 metros medley e 400 metros livre. Nesse torneio, Lenk, ganhou o apelido de Mark Spitz da terceira idade, uma referência às sete medalhas de ouro que o nadador norte-americano ganhou nos Jogos Olímpicos de Verão de 1972 em Munique.\n[…]\nMaria Lenk ingressou no International Swimming Hall of Fame, no ano de 1988. Foi a primeira brasileira a ser incluída no Hall.\n[…]\nEm 13 de janeiro de 2007, a Prefeitura Municipal do Rio de Janeiro por meio do então prefeito Cesar Maia (DEM), publicou decreto do executivo municipal dando o nome de Maria Lenk para o Parque Aquático do Jogos Pan-Americanos de 2007.\n[…]\nParque Aquático Maria Lenk"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Maria_Lenk",
        "situacao": "ok",
        "texto": "Maria Emma Hulga Lenk (January 15, 1915 – April 16, 2007) was a Brazilian swimmer, the first South American woman to participate in the Summer Olympic Games, in 1932 (Los Angeles).\n[…]\nBorn in São Paulo, Maria Lenk was the first Brazilian in history to set a world record in swimming. On November 8, 1939, in Rio de Janeiro with a time of 2:56.0, she beat Jopie Waalberg's previous record of 2:56.9, for the 200m breaststroke event. This record lasted almost 5 years, until Nel van Vliet, from the Netherlands broke it on August 17, 1946, with a time of 2:52.6.\n[…]\nBefore her death, Maria Lenk still swam 1½ kilometres every day, even in her 90s.\n[…]\nAt the time of her death, Maria Lenk still held five Master World Records:\n[…]\nIn 2004, she received the Adhemar Ferreira da Silva Trophy for lifetime achievement from the Brazilian Olympic Committee at the Prêmio Brasil Olímpico, an annual award given to the best athletes in each Olympic sport.\n[…]\nOn February 12, 2007, the mayor of Rio de Janeiro, César Maia, officially gave her name to the Maria Lenk Aquatics Centre that held swimming, diving and synchronized swimming events at the 2007 Pan American Games, in Rio de Janeiro. It also hosted aquatic events at  the 2016 Olympics.\n[…]\nOn April 17, 2007, one day after her death, the president of the Confederação Brasileira de Desportos Aquáticos (Brazilian Aquatic Sports Confederation), Coaracy Nunes, announced that the name of the Troféu Brasil de Natação (Brazilian Swimming Trophy) had been changed to the Maria Lenk Trophy in Lenk's honour.\n[…]\nMaria Emma Lenk-Zigler at Olympics.comMaria Lenk at Olympic.org (archived)\n[…]\nMaria Lenk at Olympedia\n[…]\nMaria Lenk  at World Aquatics"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Tiger Woods",
      "descricao": "Golfista americano, nascido Eldrick Tont Woods, um dos maiores vencedores de torneios principais."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Tiger Woods tinha vinte e um anos quando venceu o Masters de golfe pela primeira vez. Em que ano foi isso?",
    "resposta": "1997",
    "fonte": [
      "https://en.wikipedia.org/wiki/1997_Masters_Tournament",
      "https://en.wikipedia.org/wiki/Tiger_Woods"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/1997_Masters_Tournament",
        "situacao": "ok",
        "texto": "The 1997 Masters Tournament was the 61st Masters Tournament, held April 10–13 at Augusta National Golf Club in Augusta, Georgia.\n[…]\nTiger Woods forfeited his invitation by turning professional, but qualified via categories 12 & 13.\n[…]\n9. Top 24 players and ties from the 1996 Masters\n[…]\n12. Winners of PGA Tour events since the previous Masters\n[…]\nStuart Appleby, Guy Boros, Michael Bradley (13), Brad Faxon (13), Ed Fiori, Fred Funk (13), Dudley Hart, David Ogrin, Clarence Rose, Jeff Sluman (13), Paul Stankowski, Steve Stricker (13), D. A. Weibring, Willie Wood, Tiger Woods (13)\n[…]\nThursday, April 10, 1997\n[…]\nJohn Huston shot 67 (−5) to lead by one stroke over Paul Stankowski. Tiger Woods shot a 40 (+4) on the first nine, but came back into the clubhouse on the back nine with a score of 30 (−6) for a 70 (−2).\n[…]\nFriday, April 11, 1997\n[…]\nSaturday, April 12, 1997\n[…]\nSunday, April 13, 1997\n[…]\nWoods won his first major championship, finishing 12 strokes ahead runner-up Tom Kite. It was the largest victory margin in Masters history, passing Nicklaus' 9-shot winning margin in 1965, and tied for the second largest victory margin in any major championship, only one stroke behind Old Tom Morris' 13-shot winning margin set at the 1862 Open Championship at Prestwick (a mark Woods later surpassed at the 2000 U.S. Open at Pebble Beach when he won by 15 shots).\n[…]\n\"There it is – a win for the ages!\" – Jim Nantz's (CBS Sports) call as Woods sunk his final putt on the 18th hole to win the tournament.\n[…]\nMasters.com – past winners\n[…]\nAugusta.com – 1997 Masters leaderboard and scorecards\n[…]\nFull Final Round on YouTube from the Masters (originally broadcast by CBS)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Tiger_Woods",
        "situacao": "ok",
        "texto": "Eldrick Tont \"Tiger\" Woods (born December 30, 1975) is an American professional golfer. He is widely regarded as one of the greatest golfers of all time and as one of the most famous athletes in modern history. Woods is tied for first in PGA Tour wins, ranks second in men's major championships, holds numerous golf records, and is an inductee of the World Golf Hall of Fame.\n[…]\nWoods turned professional at age 20 in August 1996 and immediately signed advertising deals with Nike, Inc. and Titleist that ranked as the most lucrative endorsement contracts in golf history at that time. Woods was named Sports Illustrated's 1996 Sportsman of the Year and PGA Tour Rookie of the Year. On April 13, 1997, he won his first major, the Masters, in record-breaking fashion and became the tournament's youngest winner at age 21.\n[…]\nSince his record-breaking win at the 1997 Masters, Woods has been the biggest name in golf and his presence in tournaments has drawn a huge fan following. Some sources have credited him for dramatically increasing prize money in golf, generating interest in new PGA tournament audiences, and for drawing the largest TV ratings in golf history. His recognition as one of the most famous athletes in modern history includes being depicted in a wax sculpture at Madame Tussauds.\n[…]\nWoods wrote a golf instruction column for Golf Digest magazine from 1997 to February 2011. In 2001, he wrote a best-selling golf instruction book, How I Play Golf, which had the largest print run of any golf book for its first edition, 1.5 million copies. In March 2017, he published a memoir, The 1997 Masters: My Story, co-authored by Lorne Rubenstein, which focuses on his first Masters win. In October 2019, Woods announced he would be writing a memoir book titled Back.\n[…]\n2017: The 1997 Masters: My Story (with Lorne Rubenstein), Grand Central Publishing, ISBN 978-1-4555-4358-8"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Joaquim Cruz",
      "descricao": "Corredor brasileiro de meio-fundo, campeão olímpico dos 800 metros."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Em que ano o corredor brasileiro Joaquim Cruz ganhou a medalha de ouro olímpica nos oitocentos metros?",
    "resposta": "1984",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Joaquim_Cruz",
      "https://en.wikipedia.org/wiki/Joaquim_Cruz"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Joaquim_Cruz",
        "situacao": "ok",
        "texto": "Joaquim Carvalho Cruz (Taguatinga, 12 de março de 1963) é um ex-meio-fundista brasileiro, campeão olímpico dos 800 metros em Los Angeles 1984, medalha de prata na mesma prova nas Seul 1988 e por duas vezes campeão pan-americano, em Indianápolis, 1987 e Mar del Plata, 1995.\n[…]\nApós estabelecer o recorde mundial juvenil de 1'44\"3 no Troféu Brasil de Atletismo no Rio de Janeiro em 1981, ele recebeu uma bolsa de estudos na Universidade de Oregon em 1983, onde correu o famoso corredor Steve Prefontaine. Logo essa mudança mostrou resultados, e Cruz venceu os 800m no campeonato colegial americano NCAA no mesmo ano. Ele também competiu no primeiro Campeonato Mundial de Atletismo em Helsinque, conseguindo a medalha de bronze.\n[…]\nJoaquim correu em segundo a prova toda e na entrada da reta final deu uma arrancada  que os outros adversários não conseguiram acompanhar; cruzou a linha de chegada em 1:43.00, novo recorde olímpico (que vigorou por 12 anos), a frente de Sebastian Coe e do marroquino Said Aouita, se tornando o primeiro brasileiro no atletismo a conseguir o título olímpico desde Adhemar Ferreira da Silva, medalhista de ouro em Helsinque 1952 e Melbourne 1956.\n[…]\nCom problemas no tendão de Aquiles, Joaquim teve dificuldades para conseguir continuar em nível internacional e não participou dos Jogos Olímpicos de Barcelona 1992. Em 1993, tentou sua volta nos 1500 metros em várias corridas de Grand Prix na Europa, mas não obteve o desempenho esperado. Em 1995 conquistou a medalha de ouro nos 1500 metros nos Jogos Pan-americanos de 1995 em Mar del Plata.\n[…]\nCampeão olímpico (800 m) - 1984\n[…]\nCampeão da NCAA (800 m) - 1983, 1984\n[…]\nCampeão da NCAA (1500 m) - 1984\n[…]\n800 metros rasos: 1'41\"77 ( Koln, 26 de agosto de 1984)\n[…]\n1 000 metros rasos: 2'14\"09 ( Nizza, 20 de agosto de 1984)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Joaquim_Cruz",
        "situacao": "ok",
        "texto": "Joaquim Carvalho Cruz (born 12 March 1963) is a Brazilian former middle-distance runner, winner of the 800 meters at the 1984 Summer Olympics. He is one of only ten men, and in August 1984 became the second man, to run the 800 metres in less than 1 minute 42 seconds.\n[…]\nThe following year at the 1984 NCAA Track and Field Championships, Cruz became one of only a handful of people to win the 800/1500 m double (a feat that would not be repeated until Andrew Wheating achieved it in 2010). Cruz is the co-holder of University of Oregon 1,500 m school record of 3:36.48 along with A.J. Acosta. Later that summer, he ran a time of 2:14.09 min over 1000 m in Nice which is still the current South American record over that distance.\n[…]\nThe 1984 Summer Olympic Games were held in Los Angeles, and Cruz was considered to be one of the 800 m favorites, along with world record holder Sebastian Coe of Great Britain. In the last turn of the 800 meter final, Cruz started a sprint from second place and took the lead, never losing it.\n[…]\nBy the end of the year, he was the NCAA champion, the Olympic champion, undefeated in all seven of his 800-meter finals, had run the 2nd, 4th, 5th, and 6th fastest 800 meter times in history, and easily ranked as #1 in the world for 800 meters in 1984 by Track & Field News magazine.\n[…]\nCruz competed at the 2001 Masters West Region Track and Field Championship winning the 5000 meter run at age 38.\n[…]\nJoaquim Cruz at Sporting Heroes at the Wayback Machine (archived 11 March 2007)\n[…]\nJoaquim Cruz at Olympedia\n[…]\nJoaquim Cruz at Olympics.com\n[…]\nJoaquim Cruz at the Comitê Olímpico do Brasil  (in Portuguese)"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Daiane dos Santos",
      "descricao": "Ginasta brasileira, campeã mundial no solo, que dá nome a movimentos da ginástica artística."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Em que ano Daiane dos Santos se tornou a primeira ginasta brasileira campeã mundial, na prova de solo?",
    "resposta": "2003",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Daiane_dos_Santos",
      "https://en.wikipedia.org/wiki/Daiane_dos_Santos"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Daiane_dos_Santos",
        "situacao": "ok",
        "texto": "Daiane Garcia dos Santos (Porto Alegre, 10 de fevereiro de 1983) é uma ex-ginasta brasileira que competiu em provas de ginástica artística. Conquistou nove medalhas de ouro em etapas de copas do mundo de ginástica artística.\n[…]\nDaiane foi a primeira ginasta brasileira, entre homens e mulheres, a conquistar uma medalha de ouro em uma edição do Campeonato Mundial. Daiane dos Santos fez parte da primeira seleção brasileira completa a disputar uma edição olímpica, nos Jogos de Atenas, repetindo a presença nas edições seguintes, nas Olimpíadas de Pequim e Olimpíadas de Londres.\n[…]\nDaiane possui ainda dois movimentos nomeados após ser a primeira  ginasta no mundo a realizá-los: o duplo twist carpado, ou Dos Santos I, e a evolução deste primeiro: o duplo twist esticado, ou Dos Santos II.\n[…]\nEm 2003, aos vinte anos, mudou-se para a cidade de Curitiba e tornou-se novamente a medalhista de bronze por equipes no Pan-americano de Santo Domingo.\n[…]\nNa sequência, competindo no Mundial de Anaheim, na Califórnia, conquistou a primeira medalha de ouro brasileira desta competição: Na final do solo, superou a romena Catalina Ponor e a espanhola Elena Gómez, executando, pela primeira vez, o movimento que recebeu seu nome – o duplo twist carpado ou Dos Santos , desenvolvido com o auxílio do técnico Oleg Ostapenko, seu treinador até então.\n[…]\nNo ano seguinte conquistou medalhas em etapas da Copa do Mundo e, lesionada, disputou as Olimpíadas de Atenas, na qual compareceu à final do solo e encerrou na quinta colocação. Apesar de não conquistar medalha, ao som de Brasileirinho, performou seu segundo movimento, intitulado Dos Santos II, a variação esticada do primeiro.\n[…]\nDaiane dos Santos na Federação Internacional de Ginástica"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Daiane_dos_Santos",
        "situacao": "ok",
        "texto": "Daiane Garcia dos Santos (born February 10, 1983) is a retired Brazilian artistic gymnast. She is the 2003 world champion on the floor apparatus. On doing so, she became the first black gymnast to ever win an event at the World Championships as well as the first Brazilian and South American to win the competition. She represented Brazil at the 2004, 2008, and 2012 Summer Olympics.\n[…]\nDaiane's breakthrough came at the 2003 World Artistic Gymnastics Championships in Anaheim, California, US. There, she won the gold medal on floor exercise, defeating Romania's Cătălina Ponor, who would become the Olympic champion on the event the following year. She opened her routine with a piked double Arabian: a half twist into a double front flip in a piked position.\n[…]\nDos Santos underwent six months of intensive treatment after the 2007 World Championship and returned to competition at the 2008 World Cups in Cottbus and Tianjin, placing 4th on floor at both. In preparation for the Olympics, she decided along with coach Oleg Ostapenko to bring back her 2004–05 floor music, the crowd-pleasing Brasileirinho. In June, she competed with the Brazilian team at friendly meets in Europe, where she performed the Dos Santos II for the first time since the 2004 Olympics.\n[…]\n2003\n[…]\n2003 World Championships\n[…]\nMusic: \"Brasileirinho\"; S.V.: 10.00\n[…]\nMusic: \"Brasileirinho\"; Difficulty: 6.4\n[…]\nRound-off + back handspring + full-twisting double layout; round-off + back handspring + piked double Arabian (Dos Santos I); full turn with leg at horizontal; tour jeté 1/2; front pike + round-off + back handspring + double pike; leap jump + tour jeté 1/1; switch leap; round-off + back handspring + double layout.\n[…]\nDaiane dos Santos at World Gymnastics\n[…]\nDos Santos2 (Floor Exercise Skill)\n[…]\nDaiane dos Santos at Olympics.comDaiane dos Santos at Olympic.org (archived)\n[…]\nDaiane dos Santos at Olympedia"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Primeira ascensão ao Everest",
      "descricao": "Expedição britânica de 1953 em que Edmund Hillary e Tenzing Norgay chegaram ao cume do monte Everest."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1953, o neozelandês Edmund Hillary chegou ao topo do Everest ao lado de qual sherpa?",
    "resposta": "Tenzing Norgay",
    "fonte": [
      "https://en.wikipedia.org/wiki/1953_British_Mount_Everest_expedition",
      "https://en.wikipedia.org/wiki/Tenzing_Norgay"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/1953_British_Mount_Everest_expedition",
        "situacao": "ok",
        "texto": "The 1953 British Mount Everest expedition was the ninth mountaineering expedition to attempt the first ascent of Mount Everest, and the first confirmed to have succeeded when Tenzing Norgay and Edmund Hillary reached the summit on 29 May 1953 at 11:30 a.m. Led by Colonel John Hunt, it was organised and financed by the Joint Himalayan Committee. News of the expedition's success reached London in ti\n[…]\nThey were led by their Sirdar, Tenzing Norgay, who was attempting Everest for the sixth time and was, according to Band, \"the best-known Sherpa climber and a mountaineer of world standing\". Although Tenzing was offered a bed in the embassy, the remaining Sherpas were expected to sleep on the floor of the embassy garage; they urinated in front of the embassy the following day in protest at the lack of respect they had been shown.\n[…]\nThe first assault party using closed-circuit oxygen equipment was to start from Camp VIII and aim to reach the South Summit (and if possible the Summit), composed of Tom Bourdillon and Charles Evans as only Bourdillon could cope with the experimental sets. The second assault party using open-circuit oxygen equipment was to be the strongest climbing pair, Ed Hillary and Tenzing Norgay; to start from Camp IX higher on the South Col. The third assault party would have been Wilf Noyce and Mike Ward.\n[…]\nOn 27 May, the expedition made its second assault on the summit with the second climbing pair, the New Zealander Edmund Hillary and Sherpa Tenzing Norgay from Nepal. Norgay had previously ascended to a record high point on Everest as a member of the Swiss expedition of 1952. They left Camp IX at 6.30 am, reached the South Summit at 9 am, and reached the summit at 11:30 am on 29 May 1953, climbing the South Col route.\n[…]\nList of 20th-century summiters of Mount Everest\n[…]\nIncludes – Chapter 16: Hilary, Edmund (1953). \"The Summit\". The Ascent of Everest. pp. 197–209"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Tenzing_Norgay",
        "situacao": "ok",
        "texto": "Tenzing Norgay (; Sherpa: བསྟན་འཛིན་ནོར་རྒྱས tendzin norgyé; May 1914 – 9 May 1986), born Namgyal Wangdi, and also referred to as Sherpa Tenzing, was a Nepalese-Indian Sherpa mountaineer. On 29 May 1953, he and Edmund Hillary were the first people confirmed to have reached the summit of Mount Everest, as part of the 1953 British Mount Everest expedition. Time named Norgay one of the 100 most influ\n[…]\nIn 1953, Tenzing Norgay took part in John Hunt's expedition; Tenzing had previously been to Everest six times (and Hunt three). A member of the team was Edmund Hillary, who fell into a crevasse but was saved from hitting the bottom by Norgay's prompt action in securing the rope using his ice axe, which led Hillary to consider him the climbing partner of choice for any future summit attempt.\n[…]\nI was eager to meet Tenzing Norgay. His reputation had been most impressive even before his two great efforts with the Swiss expedition ... Tenzing really looked the part – larger than most Sherpas, he was very strong and active; his flashing smile was irresistible; and he was incredibly patient with all our questions and requests. His success in the past had given him great physical confidence – I think that even then he expected to be a member of the final assault party ...\n[…]\nOther relatives include Norgay's nephews, Nawang Gombu and Topgay, who took part in the 1953 Everest expedition; and his grandsons, Tashi Tenzing, who lives in Sydney, Australia, and the Trainor grandsons: Tenzing, Kalden, and Yonden. Tenzing Trainor is an actor who appeared on the  Dreamworks Animation's Abominable.\n[…]\nTenzing, Tashi; Tenzing, Judy (2003). Tenzing Norgay and the Sherpas of Everest. International Marine/Ragged Mountain Press. ISBN 978-0-07-141309-1.\n[…]\nNorgay, Tenzing; Barnes, Malcolm (1977). After Everest: An Autobiography. London: G. Allen & Unwin. ISBN 978-0-04-920050-0.\n[…]\nTenzing Norgay Sherpa Foundation"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Expedi%C3%A7%C3%A3o_Brit%C3%A2nica_ao_Monte_Everest_de_1953",
        "situacao": "ok",
        "texto": "A expedição britânica ao Monte Everest de 1953 foi a nona expedição de montanhismo a tentar a primeira ascensão do Monte Everest, e a primeira com sucesso confirmado, quando Tenzing Norgay e Edmund Hillary alcançaram o cume em 29 de maio de 1953, às 11h30 da manhã. Liderada pelo coronel John Hunt, a empreitada foi organizada e financiada pelo Comitê Conjunto do Himalaia (Joint Himalayan Committee)\n[…]\nA segunda dupla de assalto, fazendo uso de equipamentos de oxigênio de circuito aberto, seria a parelha mais forte de escaladores, Ed Hillary e Tenzing Norgay; eles partiriam do Acampamento IX, montado em posição superior no Colo Sul. A terceira equipe de assalto seria formada por Wilf Noyce e Mike Ward.\n[…]\nEm 27 de maio, a expedição lançou sua segunda investida com a dupla formada pelo neozelandês Edmund Hillary e pelo xerpa nepalês Tenzing Norgay. Norgay já havia alcançado a cota recorde no Everest na expedição suíça de 1952. Partiram do Acampamento IX às 6h30, alcançaram o Cume Sul às 9h00 e cravaram os pés no cume do Everest às 11h30 da manhã de 29 de maio de 1953, progredindo pela rota do Colo Sul.\n[…]\nEmbora Hillary e Tenzing tenham sempre afirmado que a chegada ao cume fora resultado do esforço conjunto de toda a expedição, houve intensa curiosidade pública e debate na imprensa sobre qual dos dois homens havia pisado primeiro no cume do Everest. Em Catmandu, cartazes exibiam ilustrações nacionalistas de Tenzing puxando um Hillary supostamente \"semiconsciente\" para o topo.\n[…]\nTenzing encerrou as especulações em sua autobiografia de 1955, Man of Everest, confirmando que Hillary fora o primeiro a pisar no cume. O próprio Hillary descreveu a passagem após vencer o paredão de 12 metros de rocha que hoje leva o seu nome (Degrau Hillary):\n[…]\nInclui – Capítulo 16: Hillary, Edmund (1953). \"The Summit\". The Ascent of Everest. pp. 197–209.\n[…]\nArtigo da BBC: \"The 1953 technology used to climb Everest\"",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Primeira ascensão ao Everest",
      "descricao": "Expedição britânica de 1953 em que Edmund Hillary e Tenzing Norgay chegaram ao cume do monte Everest."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "A notícia da primeira subida ao cume do Everest, em 1953, chegou a Londres justamente no dia de qual cerimônia real?",
    "resposta": "Coroação de Elizabeth II",
    "fonte": [
      "https://en.wikipedia.org/wiki/1953_British_Mount_Everest_expedition"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/1953_British_Mount_Everest_expedition",
        "situacao": "ok",
        "texto": "The 1953 British Mount Everest expedition was the ninth mountaineering expedition to attempt the first ascent of Mount Everest, and the first confirmed to have succeeded when Tenzing Norgay and Edmund Hillary reached the summit on 29 May 1953 at 11:30 a.m. Led by Colonel John Hunt, it was organised and financed by the Joint Himalayan Committee. News of the expedition's success reached London in ti\n[…]\nOn 27 May, the expedition made its second assault on the summit with the second climbing pair, the New Zealander Edmund Hillary and Sherpa Tenzing Norgay from Nepal. Norgay had previously ascended to a record high point on Everest as a member of the Swiss expedition of 1952. They left Camp IX at 6.30 am, reached the South Summit at 9 am, and reached the summit at 11:30 am on 29 May 1953, climbing the South Col route.\n[…]\nThe message was received and understood in London in time for the news to be released, by coincidence, on the morning of Queen Elizabeth II's coronation on 2 June. The conquest of Everest was perhaps the last major news item to be delivered to the world by runner.\n[…]\nOn 7 June it was announced that Queen Elizabeth II wished to recognise the achievement of Tenzing, and on 1 July, 10 Downing Street announced that following consultation with the governments of India and Nepal the Queen had approved the award of the George Medal to him.\n[…]\nIn the New Year Honours list of 1954, George Lowe was appointed a Commander of the Order of the British Empire for his membership of the expedition; the 37 team members also received the Queen Elizabeth II Coronation Medal with MOUNT EVEREST EXPEDITION engraved on the rim.\n[…]\nThe expedition's cameraman, Tom Stobart, produced a film called The Conquest of Everest, which appeared later in 1953  and was nominated for an Academy Award for Best Documentary Feature.\n[…]\nBBC article: \"The 1953 technology used to climb Everest\""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Expedi%C3%A7%C3%A3o_Brit%C3%A2nica_ao_Monte_Everest_de_1953",
        "situacao": "ok",
        "texto": "A expedição britânica ao Monte Everest de 1953 foi a nona expedição de montanhismo a tentar a primeira ascensão do Monte Everest, e a primeira com sucesso confirmado, quando Tenzing Norgay e Edmund Hillary alcançaram o cume em 29 de maio de 1953, às 11h30 da manhã. Liderada pelo coronel John Hunt, a empreitada foi organizada e financiada pelo Comitê Conjunto do Himalaia (Joint Himalayan Committee)\n[…]\nA notícia do triunfo da expedição chegou a Londres a tempo de ser divulgada na manhã da coroação da Rainha Elizabeth II, em 2 de junho daquele ano.\n[…]\nJohn Hunt, coronel do Exército Britânico integrado ao Exército Britânico do Reno, servia no estado-maior da Sede Suprema das Potências Aliadas na Europa (SHAPE) quando, para sua surpresa, foi convidado pelo Comitê Conjunto do Himalaia — formado pelo Clube Alpino e pela Real Sociedade Geográfica — para liderar a expedição britânica ao Everest de 1953.\n[…]\nA mensagem chegou a Londres a tempo de ser publicada, por feliz coincidência, na manhã do dia da coroação da Rainha Elizabeth II, em 2 de junho. A conquista do Everest foi talvez o último grande furo jornalístico global transmitido do local dos fatos ao mundo por meio de mensageiros a pé.\n[…]\nNa lista de honras do Ano-Novo de 1954, George Lowe foi nomeado Comendador da Ordem do Império Britânico (CBE); os 37 integrantes da equipe receberam ainda a Medalha de Coroação da Rainha Elizabeth II com a inscrição MOUNT EVEREST EXPEDITION gravada no bordo.\n[…]\nEmbora Hillary e Tenzing tenham sempre afirmado que a chegada ao cume fora resultado do esforço conjunto de toda a expedição, houve intensa curiosidade pública e debate na imprensa sobre qual dos dois homens havia pisado primeiro no cume do Everest. Em Catmandu, cartazes exibiam ilustrações nacionalistas de Tenzing puxando um Hillary supostamente \"semiconsciente\" para o topo.\n[…]\nMonte Evereste\n[…]\nArtigo da BBC: \"The 1953 technology used to climb Everest\"",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Golfe nos Jogos Olímpicos de 2016",
      "descricao": "Torneio olímpico de golfe dos Jogos do Rio de Janeiro, que marcou a volta da modalidade ao programa olímpico."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "O golfe voltou aos Jogos Olímpicos no Rio, em 2016. Em que ano o esporte tinha sido disputado nos Jogos pela última vez antes disso?",
    "resposta": "1904",
    "distratores": [
      "1924",
      "1936",
      "1948"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Golf_at_the_2016_Summer_Olympics",
      "https://en.wikipedia.org/wiki/Golf_at_the_Summer_Olympics"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Golf_at_the_2016_Summer_Olympics",
        "situacao": "ok",
        "texto": "Golf at the 2016 Summer Olympics in Rio de Janeiro, Brazil, was held in August at the new Olympic Golf Course (Portuguese: Campo Olímpico de Golfe), built within the Reserva de Marapendi in the Barra da Tijuca zone.\n[…]\nThe 2016 Summer Olympics was the first time golf had been played at the Olympics since the 1904 Summer Olympics and featured two events: the men's and women's individual events.\n[…]\nThough golf had not featured in the Olympics since the 1904 Summer Olympics, the session of the 121st IOC Session held in 2009 chose to re-introduce the sport for the games. With the rapid expansion and globalisation of the sport, the 121st International Olympic Committee recommended adding golf back into the Summer Olympics.\n[…]\nThis course will be an excellent facility for the practice and development of golf and will inspire millions of youth across Brazil and the globe. We look forward to welcoming the athletes and spectators to the course in 2016.\"\n[…]\nQualification was based on world ranking as of 11 July 2016, with a total of 60 players qualifying in each of the men's and women's events. The top 15 players of each gender will qualify, with a limit of four golfers per country that can qualify this way. The remaining spots will go the highest-ranked players from countries that do not already have two golfers qualified.\n[…]\n\"Golf at the 2016 Summer Olympics (Rio2016.com)\". Archived from the original on 26 August 2016. Retrieved 23 July 2018.{{cite web}}:  CS1 maint: bot: original URL status unknown (link)\n[…]\nGolf at the 2016 Summer Olympics at SR/Olympics (archived)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Golf_at_the_Summer_Olympics",
        "situacao": "ok",
        "texto": "Golf is officially recognized as first featuring in the Summer Olympic Games programme in 1900 and was also contested at the 1904 Summer Olympics. A golf tournament was to have been held in 1908, but it was cancelled less than two days before it was scheduled to start. Two golf tournaments were also to have been held in 1920, but were cancelled due to a lack of entries.\n[…]\nAt the IOC session in Copenhagen in October 2009, the International Olympic Committee (IOC) decided to reinstate the sport for the 2016 Summer Olympics. The International Golf Federation is the governing body for golf at the Olympic Games.\n[…]\n1904\n[…]\nA men's individual tournament was planned for the 1908 London Games, but a dispute amongst representatives of England and Scotland over the format led to British golfers boycotting, leaving 1904 gold medallist George Lyon of Canada as the only remaining entrant. He was entitled to claim the gold medal but declined.\n[…]\n2016\n[…]\n22 golfers competed in 1900. The 1904 tournament featured 77 golfers. Albert Lambert was the only golfer who competed both times; a total of 98 different golfers competed throughout the brief history of Olympic golf before it was brought back in 2016."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Golfe_nos_Jogos_Ol%C3%ADmpicos_de_Ver%C3%A3o_de_2016",
        "situacao": "ok",
        "texto": "As competições de golfe nos Jogos Olímpicos de Verão de 2016 foram realizadas na Reserva de Marapendi, no Rio de Janeiro, entre os dias 11 e 20 de agosto. Foi disputado em dois torneios individuais, um masculino e outro feminino, marcando o retorno do esporte as Olimpíadas depois de 112 anos de ausência, que teve sua última aparição em 1904, em Saint Louis.\n[…]\nA qualificação foi baseada no ranking mundial de 11 de julho de 2016, com um total de 60 jogadores qualificados em cada um dos eventos masculinos e femininos. Os 15 melhores jogadores de cada gênero se classificaram, com um limite de quatro jogadores por país. As vagas restantes foram atribuídas aos golfistas mais bem classificados de países que ainda não possuíam dois jogadores qualificados.\n[…]\nA Federação Internacional de Golfe garantiu pelo menos um jogador de golfe do país sede (Brasil) e de cada região geográfica (África, Américas, Ásia, Europa e Oceania).\n[…]\n«Pagina oficial da Federação Internacional de Golfe» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Jesse Owens",
      "descricao": "Velocista e saltador americano que ganhou quatro medalhas de ouro nos Jogos de Berlim."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Sob o olhar do regime nazista, o americano Jesse Owens ganhou quatro medalhas de ouro nos Jogos de Berlim. Em que ano?",
    "resposta": "1936",
    "fonte": [
      "https://en.wikipedia.org/wiki/Jesse_Owens",
      "https://pt.wikipedia.org/wiki/Jesse_Owens"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Jesse_Owens",
        "situacao": "ok",
        "texto": "James Cleveland \"Jesse\" Owens (September 12, 1913 – March 31, 1980) was an American track and field athlete. He made history at the 1936 Olympic Games by winning four gold medals, setting individual Olympic records in each event, plus another as a member of the 400-meter relay. He is widely regarded as one of the greatest athletes in track and field history.\n[…]\nIn an article dated August 4, 1936, African-American newspaper editor Robert L. Vann described witnessing Hitler \"salute\" Owens for having won gold in the 100 m sprint (August 3):\n[…]\nJesse Owens. Olympic Champion. 1936. Athlete and humanitarian. A master of the spirit as well as the mechanics of sports. A winner who knew that winning was not everything. He showed extraordinary love for his family and friends. His achievements have shown us all the promise of America. His faith in America inspired countless others to do their best for themselves and their country. September 12, 1913 – March 31, 1980.\n[…]\n\"Giants like Jesse Owens show us why politics will never defeat the Olympic spirit. His character, his achievements have continued to inspire Americans as they did the whole world in 1936.\"—Gerald Ford\n[…]\nOwens was honored by naming schools, streets, and athletic facilities after him—including Jesse Owens Memorial Stadium—and his life inspired documentaries, books, and the biopic Race. Notably, the documentary Olympic Pride, American Prejudice highlights his story as part of a broader examination of the 18 Black American athletes who competed in the 1936 Berlin Olympics. He is a member of several halls of fame, including the U.S. Olympic and National Track and Field Hall of Fame.\n[…]\n1936: AP Athlete of the Year (Male)\n[…]\nFootage of Jesse Owens winning 100m Olympic gold in 1936\n[…]\nJesse Owens at IMDb\n[…]\nJesse Owens video in Riefenstahl's Olympia (1936) Archived February 27, 2021, at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jesse_Owens",
        "situacao": "ok",
        "texto": "James Cleveland \"Jesse\" Owens (Oakville, 12 de setembro de 1913 — Tucson, 31 de março de 1980), foi um atleta e líder civil norte-americano. Ele participou nos Jogos Olímpicos de Verão de 1936 em Berlim, Alemanha Nazista, em que ganhou quatro medalhas de ouro nos 100 e 200 metros rasos, no salto em distância e no revezamento 4x100m. Foi o primeiro atleta a vencer quatro ouros em uma Olimpíada.\n[…]\nA notória propaganda pan-germanista não ficou de fora dos Jogos Olímpicos de Berlim, tanto que o incentivo aos atletas germânicos (não judeus) foi tão grande que estes conseguiram colocar a Alemanha no topo do ranking com 33 medalhas de ouro seguidos do segundo colocado, os EUA com 24 medalhas de ouro.\n[…]\nComo não podia estar presente a todos os momentos em que os campeões eram agraciados, Hitler optou então por não descer mais da tribuna de Honra; quando Owens ganhou as medalhas, Hitler já tinha tomado a sua decisão. E ao contrário de ter-se mostrado indignado, abanou efusivamente para o atleta. Nas palavras do próprio Owens: \"Quando eu passei, o chanceler se ergueu, e acenou com a mão para mim, eu respondi ao aceno\".\n[…]\nOs EUA conseguiram vencer dez provas de atletismo. Destas, seis medalhas de ouro foram conseguidas com a participação de quatro negros. Esta foi a única participação de Owens em Olimpíadas.\n[…]\nA maior conquista de Owens foi não se contrapor ao regime nazista, mas sim abalar a noção racista da nação americana no século XX, como ele mesmo deixou bem claro em sua biografia. Ele declarou que o que mais o magoou não foram as atitudes de Hitler, mas o fato do presidente norte-americano Franklin Delano Roosevelt não ter lhe mandado sequer um telegrama felicitando-o por suas conquistas na olimpíada.\n[…]\nOwens morreu de cancro no pulmão em 31 de março de 1980 em Tucson.\n[…]\nPrêmio Jesse Owens\n[…]\nhttps://figurasdesporto.blogspot.com/2024/07/jesse-owens-um-simbolo-de-excelencia-e.html"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Copa do Mundo de Rúgbi de 1987",
      "descricao": "Primeira edição do campeonato mundial de rúgbi, sediada na Nova Zelândia e na Austrália."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "A primeira Copa do Mundo de Rúgbi, vencida pela Nova Zelândia jogando em casa, foi disputada em que ano?",
    "resposta": "1987",
    "distratores": [
      "1971",
      "1979",
      "1995"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/1987_Rugby_World_Cup"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/1987_Rugby_World_Cup",
        "situacao": "ok",
        "texto": "The 1987 Rugby World Cup was the first Rugby World Cup. It was co-hosted by New Zealand and Australia – New Zealand hosted 21 matches (17 pool stage matches, two quarter-finals, the third-place play-off and the final) while Australia hosted 11 matches (seven pool matches, two quarter-finals and both semi-finals). The tournament was won by New Zealand, who were the strong favourites and won all the\n[…]\nThe New Zealand team was captained by David Kirk and included such rugby greats as Sean Fitzpatrick, John Kirwan, Grant Fox and Michael Jones. Wales finished third, and Australia fourth, after conceding crucial tries in the dying seconds of both their semi-final against France and the third-place play-off against Wales.\n[…]\nSeven of the sixteen participating teams were the International Rugby Football Board (IRFB) members – New Zealand, Australia, England, Scotland, Ireland, Wales and France. South Africa was unable to compete because of the international sporting boycott due to apartheid. Invitations were given to Argentina, Fiji, Italy, Canada, Romania, Tonga, Japan, Zimbabwe and the United States.\n[…]\nThe inaugural World Cup was contested by 16 nations. There was no qualifying tournament to determine the participants; instead, the 16 nations were invited by the International Rugby Football Board to compete. The simple 16-team pool/knock-out format was used with the teams divided into four pools of four, with each team playing the others in their pool once, for a total of three matches per team in the pool stage.\n[…]\nA total of 32 matches (24 in the pool stage and eight in the knock-out stage) were played in the tournament over 29 days from 22 May to 20 June 1987.\n[…]\nThe event was broadcast in Australia by ABC and by TVNZ in New Zealand as host broadcasters supplying their pictures to broadcasters around the world and in the United Kingdom by the BBC and in Ireland by RTÉ."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Copa_do_Mundo_de_Rugby_Union_de_1987",
        "situacao": "ok",
        "texto": "A Copa do Mundo de Rugby Union de 1987 realizada na Austrália e na Nova Zelândia foi a primeira edição do torneio. Sete das dezesseis vagas foram automaticamente preenchidas pelos membros da International Rugby Football Board - Nova Zelândia, Austrália, Inglaterra, Escócia, Irlanda, País de Gales e França - com a África do Sul proibida de competir por causa do boicote esportivo internacional devid\n[…]\nO que se presenciou ao passar do torneio foram partidas bastante desequilibradas quando se defrontavam equipes da IRFB contra outros times. Metade das 24 partidas dentro das quatro chaves viu um time marcar 40 ou mais pontos. Portanto não foi surpresa que cinco das sete partidas de maior escore da história das Copas do Mundo de Rugby Union aconteceram durante esse torneio. A Nova Zelândia venceu a final contra a França no Eden Park em Auckland por 29 pontos a 9.\n[…]\nAs 16 nações competidoras foram dividias em quatro chaves de quatro nações, jogando em turno único. Cada vitória valia 2 pontos, empate valia 1 e nenhum ponto por derrota. As duas melhores equipes de cada chave iam às quartas-de-final. Os vice-campeões de cada chave enfrentavam os vencedores de uma chave diferente. Os vencedores das quartas avançavam às semi-finais, com os vencedores destas indo à final e os perdedores disputando o terceiro lugar.\n[…]\nPredefinição:Seleção Estadunidense de Rugby de 1987\n[…]\nMaior número de pontos:  Nova Zelândia (298)\n[…]\nMaior número de Tries:  Nova Zelândia (43)\n[…]\nMaior número de conversões:  Nova Zelândia (30)\n[…]\nMaior número de penalidades:  Nova Zelândia (21)\n[…]\n(em inglês) Jogo final da Copa do Mundo de Rugby Union de 1987",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Super Bowl",
      "descricao": "Partida final da liga de futebol americano dos Estados Unidos, a NFL."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "A partida hoje lembrada como o primeiro Super Bowl, a final do futebol americano, foi jogada em que década?",
    "resposta": "Anos 1960",
    "fonte": [
      "https://en.wikipedia.org/wiki/Super_Bowl_I"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Super_Bowl_I",
        "situacao": "ok",
        "texto": "The first AFL–NFL World Championship Game (known retroactively as Super Bowl I and referred to in contemporaneous reports, including the game's radio broadcast, as the Super Bowl) was an American football game played on January 15, 1967, at the Los Angeles Memorial Coliseum in Los Angeles, California. The National Football League (NFL) champion Green Bay Packers defeated the American Football Leag\n[…]\nWhen the NFL began its 41st season in 1960, it had a new and unwanted rival: the American Football League. The NFL had successfully fended off several other rival leagues in the past, and so the older league initially ignored the new upstart and its eight teams, figuring it would be made up of nothing but NFL rejects, and fans were unlikely to prefer it to the NFL.\n[…]\nIt was the only NFL game to be carried nationally on more than one broadcaster until the same two networks (as well as NFL Network and various local ABC and MyNetworkTV affiliates) carried a game between the New England Patriots and the New York Giants on December 29, 2007, and it was the only Super Bowl to simulcast on multiple American networks until Super Bowl LVIII was broadcast on CBS and its sister network Nickelodeon in February 2024.\n[…]\nFinally, audio from the NBC Sports radio broadcast featuring announcers Jim Simpson and George Ratterman was layered on top of the footage to complete the broadcast. The final result represents the only known video footage of the entire action from Super Bowl I.\" It then announced NFL Network would broadcast the newly pieced together footage in its entirety on January 15, 2016—the 49th anniversary of the contest.\n[…]\nSources: NFL.com Super Bowl I, Super Bowl Play Finder GB, Super Bowl Play Finder KC\n[…]\nThe Sporting News Complete Super Bowl Book 1995. Sporting News. February 1995. ISBN 0-89204-523-X.}\n[…]\nSuper Bowl I play-by-play from USA Today\n[…]\nSuper Bowl I Box Score at Pro Football Reference"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Super_Bowl_I",
        "situacao": "ok",
        "texto": "O primeiro Campeonato Mundial AFL-NFL no futebol americano profissional, conhecido retroativamente como Super Bowl I e ​​referido em alguns relatos contemporâneos, incluindo a transmissão de rádio do jogo, como o Super Bowl, foi jogado em 15 de janeiro de 1967 no Los Angeles Memorial Coliseum em Los Angeles, Califórnia. O campeão da National Football League (NFL), o Green Bay Packers, derrotou o c\n[…]\nQuando a NFL começou sua quadragésima temporada em 1960, tinha um rival novo e indesejado: a American Football League. A NFL havia evitado várias outras ligas rivais no passado, e assim a liga mais antiga inicialmente ignorou a novata e suas oito equipes, imaginando que seria composta de nada mais que equipes rejeitadas da NFL e que os torcedores provavelmente não a prefeririam.\n[…]\nO trabalho árduo de Lombardi valeu a pena e os Packers melhoraram para uma campanha de 7–5 na temporada regular em 1959. Eles surpreenderam a liga durante o ano seguinte, indo até a Final da NFL de 1960. Embora os Packers tenham perdido por 17–13 para o Philadelphia Eagles, eles enviaram uma mensagem clara de que não eram mais perdedores. Green Bay ganhou a Final da NFL em 1961, 1962, 1965 e 1966.\n[…]\nNo início do segundo quarto, o Kansas City avançou 66 jardas em seis jogadas, com uma recepção de 31 jardas de Otis Taylor para empatar o jogo. Mas os Packers responderam em sua próxima campanha, avançando 73 jardas pelo campo e marcando um touchdown de 14 jardas com Jim Taylor. O touchdown de Taylor foi o primeiro touchdown terrestre na história do Super Bowl. Esta campanha foi novamente destacado pelos passes principais de Starr.\n[…]\nDawson foi sacado por uma perda de oito jardas na primeira jogada da próxima campanha dos Chiefs, mas seguiu-o com quatro passes consecutivas de 58 jardas. Isso estabeleceu o field goal de 31 jardas de Mercer para deixar o placar em 14-10 no final do primeiro tempo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Fosbury Flop",
      "descricao": "Técnica do salto em altura em que o atleta passa sobre o sarrafo de costas, popularizada por Dick Fosbury."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Nos Jogos do México, em 1968, que americano ganhou o ouro do salto em altura pulando de costas para o sarrafo?",
    "resposta": "Dick Fosbury",
    "fonte": [
      "https://en.wikipedia.org/wiki/Fosbury_flop",
      "https://en.wikipedia.org/wiki/Dick_Fosbury"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fosbury_flop",
        "situacao": "ok",
        "texto": "The Fosbury flop is a jumping style used in the track and field event of high jump. It was popularized and perfected by American athlete Dick Fosbury, whose gold medal in the 1968 Summer Olympics in Mexico City brought it to the world's attention. The flop became the dominant style of the event, surpassing the straddle technique, Western roll, Eastern cut-off, or scissors jump to clear the bar.\n[…]\nThough the backwards flop technique had been known for years before Fosbury, landing surfaces had been sandpits or low piles of matting and high jumpers had to land on their feet or at least land carefully to prevent injury. With the advent of deep foam matting, high jumpers were able to be more adventurous in their landing styles and hence more experimental with jumping styles.\n[…]\nThe approach (or run-up) in the Fosbury flop is characterized by (at least) the final four or five steps being run in a curve, allowing the athlete to lean in to the turn, away from the bar. This allows the center of gravity to be lowered even before knee flexion, giving a longer time period for the take-off thrust. Additionally, on take-off, the sudden move from inward lean to outwards produces a rotation of the jumper's body along the bar's axis, aiding clearance.\n[…]\nFosbury himself cleared the bar with his hands by his sides, whereas some athletes cross the bar with their arms held out to the side or even above their heads, optimizing their mass-distribution. Studies show that variations in approach, arm technique, and other factors can be adjusted to achieve each athlete's best performance.\n[…]\nDick Fosbury revolutionised the high jump (from the International Olympic Committee web site)\n[…]\nRotation over the bar in the Fosbury Flop analysed & explained by Dr. Jesus Dapena Archived 2 December 2008 at the Wayback Machine."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Dick_Fosbury",
        "situacao": "ok",
        "texto": "Richard Douglas Fosbury (March 6, 1947 – March 12, 2023) was an American high jumper, who is considered one of the most influential athletes in the history of track and field. He won a gold medal at the 1968 Summer Olympics, revolutionizing the high jump event with a \"back-first\" technique now known as the Fosbury flop. His method was to sprint diagonally towards the bar, then curve and leap backw\n[…]\nFosbury later recalled:\n[…]\nAt the 1968 Olympics in Mexico City, Fosbury took the gold medal and set a new Olympic record at 2.24 m (7 ft 4+1⁄4 in), displaying the potential of the new technique. Despite the initial skeptical reactions from the high-jumping community, the \"Fosbury Flop\" quickly gained acceptance. In the Finals competition, only three jumpers cleared 2.20 m (7 ft 2+5⁄8 in), and Fosbury was in the lead by virtue of having cleared every height on his first attempt.\n[…]\nHaving won the gold medal and broken the American record, Fosbury asked the bar to be raised to 2.29 m (7 ft 6+1⁄8 in) for his final three attempts, hoping to break Valeriy Brumel's five-year-old world record of 2.28 m (7 ft 5+3⁄4 in). All three attempts were unsuccessful.\n[…]\nAt the next Olympics in 1972 at Munich, 28 of the 40 competitors used Fosbury's technique, although gold medalist Jüri Tarmak used the straddle technique. In the women's event, the winner Ulrike Meyfarth used Fosbury's technique. By 1980, 13 of the 16 Olympic finalists used it. Of the 36 Olympic medalists in the event from 1972 through 2000, 34 used \"the Flop\", making it the most popular technique in high jumping.\n[…]\nIn January 2019, Fosbury succeeded Larry Schoen as Blaine County Commissioner.\n[…]\nDick Fosbury at World Athletics\n[…]\nDick Fosbury at the USATF Hall of Fame (archived)\n[…]\nDick Fosbury at the Team USA Hall of Fame (archive July 20, 2023)\n[…]\nRichard Douglas Fosbury at Olympics.comDick Fosbury at Olympic.org (archived)\n[…]\nDick Fosbury at Olympedia"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Surfe nos Jogos Olímpicos de 2020",
      "descricao": "Estreia do surfe no programa olímpico, nos Jogos de Tóquio, disputados em 2021."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "O surfe estreou nos Jogos Olímpicos em Tóquio. Que brasileiro venceu a primeira final masculina da modalidade?",
    "resposta": "Ítalo Ferreira",
    "fonte": [
      "https://en.wikipedia.org/wiki/Surfing_at_the_2020_Summer_Olympics",
      "https://pt.wikipedia.org/wiki/%C3%8Dtalo_Ferreira"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Surfing_at_the_2020_Summer_Olympics",
        "situacao": "ok",
        "texto": "Surfing made its Summer Olympics debut in the 2020 Summer Olympics in Tokyo, Japan. The Olympics were originally scheduled to be held in 2020, but were postponed to 2021 as a result of the COVID-19 pandemic.\n[…]\nThe 2020 Summer Olympics used a four-person heat structure. Four athletes competed at any given time. The best two of each heat continued to the next round. Each heat ran for 20 to 25 minutes, with their top two scores being used.\n[…]\nOn 28 September 2015, surfing was featured on a shortlist along with baseball, softball, skateboarding, karate, and sport climbing to be considered for inclusion in the 2020 Summer Olympics. On 3 August 2016 the International Olympic Committee voted to include all five sports (counting baseball and softball as a single sport) for inclusion in the 2020 Games.\n[…]\n20 men and 20 women planned to compete in the 2020 Summer Olympics. However, one of the men, Carlos Muñoz, did not make it in time for his event. Surfing at the Olympics is currently limited to high-performance shortboards only, separated into categories of gender. If surfing is included in upcoming games such as Los Angeles 2028, or Brisbane 2032 other categories such as Longboarding, bodyboarding and SUP may be included.\n[…]\nHost Country: Japan as host country was allocated 1 place in both men's and women's events. If at least one Japanese surfer had earned a qualification place through other events, the relevant Host Country Place(s) was reallocated to the next highest ranked eligible athlete at the 2020 World Surfing Games.\n[…]\nSurfing at the Tokyo 2020 Olympics official website Archived 1 July 2021 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/%C3%8Dtalo_Ferreira",
        "situacao": "ok",
        "texto": "Ítalo Ferreira da Costa (Baía Formosa, 6 de maio de 1994) é um surfista profissional brasileiro que está na ASP World Tour desde 2015. Em 2021 sagrou-se o primeiro campeão olímpico da história do surfe, recebendo a medalha de ouro ao derrotar o japonês Kanoa Igarashi nos Jogos Olímpicos de Verão de 2020 em Tóquio. Em 2019 já havia sagrado-se campeão do WSL, o maior campeonato mundial de surfe.\n[…]\nÍtalo Ferreira foi o primeiro surfista no mundo a receber a medalha de ouro pelo esporte, nos Jogos Olímpicos, além do grande título mundial do WSL 2019. Ítalo Ferreira tem ainda em seu histórico dois títulos do Campeonato de Juniors, sendo campeão do Quiksilver Pro Rio Junior e do Mormaii Pro Junior em Garopaba, ambos no Brasil. Em 2014 foi campeão da SuperSurfe, sendo considerado o campeão brasileiro, e foi o vice-campeão no Moche Rip Curl pro Portugal 2015, perdendo para Filipe Toledo.\n[…]\nEm 27 de julho de 2021, aos 27 anos de idade, Ítalo Ferreira conquistou  a medalha de ouro nas Olimpíadas 2020 em Tóquio. Foi o ano de estreia do surfe como esporte olímpico. Também foi a primeira medalha de ouro do Brasil na edição. Na etapa final da competição ele venceu o japonês Kanoa Igarashi por 15,14 contra 6,60 numa bateria que começou tensa, com Ítalo quebrando a prancha mas conseguindo rapidamente se recuperar e crescer, pegando boas ondas.\n[…]\nSempre pedi para que esse sonho fosse realizado e ele aconteceu\", declarou Ítalo Ferreira, o primeiro campeão olímpico do surfe.\n[…]\nEm 5 de julho de 2023, Bridgestone lançou série em HQ que conta a história de Italo Ferreira. Casteluber, Sports Marketing & Athlete’s Manager da IF15 e VMLY&R são as empresas responsáveis, a série de HQs tem ilustrações assinadas por Renato Cunha e são feitas artesanalmente. A série é intitulada Os Caminhos da Lenda.\n[…]\n«Ítalo Ferreira» (em inglês). em Circuito Mundial Masculino de Surfe\n[…]\nÍtalo Ferreira em Olympics.com"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Salto com vara masculino nos Jogos Olímpicos de 2016",
      "descricao": "Prova olímpica de salto com vara masculino disputada nos Jogos do Rio de Janeiro."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Nos Jogos do Rio, em 2016, que brasileiro ganhou o ouro no salto com vara, superando o favorito francês Renaud Lavillenie?",
    "resposta": "Thiago Braz",
    "fonte": [
      "https://en.wikipedia.org/wiki/Athletics_at_the_2016_Summer_Olympics_%E2%80%93_Men%27s_pole_vault"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Athletics_at_the_2016_Summer_Olympics_%E2%80%93_Men%27s_pole_vault",
        "situacao": "ok",
        "texto": "The men's pole vault competition at the 2016 Summer Olympics in Rio de Janeiro, Brazil. The event was held at the Olympic Stadium between 13–15 August. Thirty-one athletes from 16 nations competed. Thiago Braz of Brazil won the gold medal, the nation's first medal in the men's pole vault. Renaud Lavillenie of France was unable to successfully defend his 2012 gold, but became the seventh man to win\n[…]\nOne of Brazil's best athletics medal hopes was Thiago Braz, the 2012 World Junior Champion (ahead of Barber), who had the third best mark of the year. The American champion Sam Kendricks was also highly ranked and had won silver at the 2016 World Indoor Championships behind Lavillenie.\n[…]\nSam Kendricks was high over his bars earlier in the competition but could go no further than 5.85 m and had to settle for bronze, while Lavillenie held the lead with a clean round of first attempt clearances to 5.98 m (the latter improving his own Olympic record from London). The Brazilian favourite, Thiago Braz, cleared an outdoor personal record of 5.93 m on his second attempt to surpass Kendricks.\n[…]\nThese conditions, with rain and wind affecting competitions all across the Olympic venues, were anything but controlled. Lavillenie missed and the Olympic title was settled.\n[…]\nTwo men were left after 5.93 metres, with the bar raised to a potential Olympic record height of 5.98 metres. Renaud Lavillenie cleared it on his first attempt, breaking the record. Thiago Braz passed at the height, as matching the new record would do him no good in placement in the event. At 6.03 metres, Lavillenie missed, Braz missed, Lavillenie missed again, and then Braz cleared to take the Olympic record from Lavillenie.\n[…]\nThe Frenchman took his final attempt at 6.08 metres, unsuccessfully; with the gold medal secured, Braz did not jump at the greater height.\n[…]\nAll times are Brasilia Time (UTC-3)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Atletismo_nos_Jogos_Ol%C3%ADmpicos_de_Ver%C3%A3o_de_2016_-_Salto_com_vara_masculino",
        "situacao": "ok",
        "texto": "A competição do salto com vara masculino do atletismo nos Jogos Olímpicos de Verão de 2016 aconteceu nos dias 13 e 15 de agosto no Estádio Olímpico.\n[…]\nThiago Braz da Silva, do Brasil, conquistou a medalha de ouro com a marca de 6,03 metros na final, estabelecendo um novo recorde olímpico.\n[…]\nAntes desta competição, os recordes mundiais e olímpicos da prova eram os seguintes:\n[…]\nOs seguintes recordes mundiais e/ou olímpicos foram estabelecidos durante esta competição:",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Haka",
      "descricao": "Dança cerimonial de desafio de origem neozelandesa, apresentada pela seleção de rúgbi antes das partidas."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "A haka, dança de desafio que os All Blacks fazem antes das partidas de rúgbi, é uma tradição de qual povo?",
    "resposta": "Maori",
    "fonte": [
      "https://en.wikipedia.org/wiki/Haka",
      "https://pt.wikipedia.org/wiki/Haka"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Haka",
        "situacao": "ok",
        "texto": "Haka (; singular and plural haka, in both Māori and New Zealand English) are a variety of ceremonial dances in Maoli, Maohi, and Māori culture. A performance art, haka are often performed by a group, with vigorous movements and stamping of the feet with rhythmically shouted accompaniment. Haka have been traditionally performed by both men and women for a variety of social functions throughout Poly\n[…]\nwelcoming guests (haka pōwhiri),\n[…]\nkaioraora (hatred or venting haka).\n[…]\nThe All Blacks' use of haka has become the most widely known, but several other New Zealand sports teams now perform haka before commencing a game. These include the national rugby league team (\"the Kiwis\"), and the men's national basketball team (\"Tall Blacks\"). In the lead up to the Rugby World Cup in 2011, flashmob haka became a popular way of expressing support for the All Blacks. Some Māori leaders thought it was \"inappropriate\" and a \"bastardisation\" of haka.\n[…]\nIn November 2012, a Māori kapa haka group from Rotorua performed a version of the \"Gangnam Style\" dance mixed with a traditional haka in Seoul, celebrating 50 years of diplomatic relations between South Korea and New Zealand.\n[…]\nThree or four American football teams are known to perform haka as a pregame rite. This appears to have begun at Kahuku High School where both the student body and local community includes many Polynesian Hawaiians, Māori, Samoans, Tahitians, and Tongans.\n[…]\nThe University of Hawaii Rainbow Warriors football team also adopted haka as a pregame rite during the 2006 season, and the practice has spread to a number of other teams overseas; there has, however, been some criticism of the practice as inappropriate and disrespectful. Non-traditional or inaccurate haka performances have been criticised by Māori academics, such as Morgan Godfery.\n[…]\nMāori music\n[…]\nHaka – A New Zealand icon\n[…]\nWaihere Dance Group, Original Maori Haka Dance via YouTube"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Haka",
        "situacao": "ok",
        "texto": "Haka são danças típicas do povo Maori. Geralmente demonstram a paixão e intimidação. É usada para dar boas vindas a visitantes e tribos inimigas.\n[…]\nSegundo o povo Maori, Tama-nui-to-ra, o Deus do Sol, tinha duas mulheres, sendo uma delas Hine-raumati, a virgem do verão (perdendo este estatuto!), da qual nasceu Tane-rore, creditado pela origem da dança. Tane-rore representa o vento nos dias quentes de verão, na dança coreografado com o tremor de mãos.\n[…]\nAtualmente o Haka é conhecido mundialmente pela performance de intimidação no início dos jogos de Rugby da seleção da Nova Zelândia (All Blacks), que costuma antes de seus jogos executar uma haka específica chamada Ka Mate.\n[…]\nAntes da dança o chefe grita como um grito para iniciar, coisa que no caso dos All Blacks é feita pelo jogador de sangue maori mais velho, nāo sendo este necessariamente capitāo da equipe. As palavras são utilizadas nāo só para incitar quem está realizando a dança, mas também para recordar-se o seu comportamento correto.\n[…]\nAll Blacks"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Desafio Ineos 1:59",
      "descricao": "Evento de 2019, em Viena, em que uma maratona foi corrida em menos de duas horas, sem homologação de recorde."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 2019, em Viena, quem correu uma maratona em menos de duas horas, num evento especial sem validade oficial de recorde?",
    "resposta": "Eliud Kipchoge",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ineos_1:59_Challenge",
      "https://en.wikipedia.org/wiki/Eliud_Kipchoge"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ineos_1:59_Challenge",
        "situacao": "ok",
        "texto": "The Ineos 1:59 Challenge, held on 12 October 2019, was an attempt by Kenyan athlete Eliud Kipchoge to break the two-hour mark for running the marathon distance, which he achieved in a time of 1:59:40.2. The event was specifically created for Kipchoge and held in Vienna, Austria to help market the Nike ZoomX Vaporfly 4%. Kipchoge had previously attempted to run a two hour marathon at the Breaking2 \n[…]\nHe then went on to run a world record marathon at the 2018 Berlin Marathon before British chemicals company Ineos announced the attempt in May 2019. 41 pacemakers, rotating in and out in groups of 7, assisted Kipchoge throughout the attempt.\n[…]\nBreaking2 was a project run by sports equipment manufacturer Nike announced in December 2016 with the goal of breaking the two-hour mark over the marathon. Three runners, Zersenay Tadese, Lelisa Desisa, and Eliud Kipchoge were to attempt the feat, assisted by a team of pacemakers, scientists, engineers, physicians and trainers.\n[…]\nKipchoge completed the challenge with an official time of 1:59:40.2, an average speed of 5.88 metres per second (21.2 km/h; 13.2 mph). Directly after finishing the run, Kipchoge stated: \"I am feeling good. After Roger Bannister in 1954 it took another 63 years, I tried and I did not get it - 65 years, I am the first man - I want to inspire many people, that no human is limited.\"\n[…]\nThe organizers of the attempt added many techniques during the run which cumulatively assisted Kipchoge and the pacemakers:\n[…]\nThe Breaking2 attempt had been held behind closed doors at Monza with just a few press and Nike employees present. Kipchoge missed the presence of a crowd there and requested that the public be allowed to attend the Ineos 1:59 Challenge.\n[…]\nA team of forty-one runners served as Kipchoge's pacemakers in the challenge.\n[…]\nArticle from BBC Sport: \"Eliud Kipchoge: The man, the methods & controversies behind 'moon-landing moment'\""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Eliud_Kipchoge",
        "situacao": "ok",
        "texto": "Eliud Kipchoge  (born 5 November 1984) is a Kenyan long-distance runner who competes in the marathon and formerly specialized in the 5000 metres. Kipchoge is the 2016 and 2020 Olympic marathon champion, and was the world record holder in the marathon from 2018 to 2023, until that record was broken by Kelvin Kiptum at the 2023 Chicago Marathon. He is widely considered to be one of the greatest mara\n[…]\nOn 12 October 2019, Kipchoge ran the marathon distance for the Ineos 1:59 Challenge in Vienna, achieving a time of 1:59:40.2, becoming the first person in recorded history to do a sub-two-hour marathon. The run did not count as a new marathon record, as he ran with specialized shoes, standard competition rules for pacing and fluids were not followed, and it was not an open event.\n[…]\nIn May 2019, a few days after his London Marathon win, Kipchoge announced another take on the sub-two-hour marathon, named the Ineos 1:59 Challenge. On 12 October 2019 in Vienna's Prater park, he ran 4.4 laps of the Hauptallee in 1:59:40, becoming the first person in recorded history to break the two-hour barrier over a marathon distance.\n[…]\nThe silver medal went to Abdi Nageeye (Netherlands), while Bashir Abdi (Belgium) came in third for a bronze medal with 2:10:00. Kipchoge was the oldest Olympic marathon winner since Carlos Lopes won in 1984 at the age of 37. The run was staged 500 miles north of Tokyo in Sapporo, with 106 runners participating. A documentary on the Ineos 1:59 Challenge, titled Kipchoge: The Last Milestone, was released digitally on-demand on 24 August 2021.\n[…]\nEliud Kipchoge at World Athletics\n[…]\nEliud Kipchoge at Diamond League\n[…]\nEliud Kipchoge at Tilastopaja (registration required)\n[…]\nEliud Kipchoge at Athletics Podium\n[…]\nEliud Kipchoge at ARRS\n[…]\nEliud Kipchoge at Olympics.com\n[…]\nEliud Kipchoge at Olympedia\n[…]\nEliud Kipchoge at the Commonwealth Games Federation (archived)\n[…]\nEliud Kipchoge at InterSportStats"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Argolas masculinas nos Jogos Olímpicos de 2012",
      "descricao": "Final olímpica de argolas da ginástica artística masculina nos Jogos de Londres."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em Londres, em 2012, qual ginasta ganhou nas argolas a primeira medalha olímpica da ginástica brasileira?",
    "resposta": "Arthur Zanetti",
    "fonte": [
      "https://en.wikipedia.org/wiki/Gymnastics_at_the_2012_Summer_Olympics_%E2%80%93_Men%27s_rings",
      "https://pt.wikipedia.org/wiki/Arthur_Zanetti"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Gymnastics_at_the_2012_Summer_Olympics_%E2%80%93_Men%27s_rings",
        "situacao": "ok",
        "texto": "The men's rings competition at the 2012 Summer Olympics was held at the North Greenwich Arena on 28 July and 6 August 2012. It included 68 competitors from 31 nations.\n[…]\nArthur Zanetti of Brazil won the gold, his nation's first medal in the event. The 2008 winner, Chen Yibing of China, earned silver to become the 12th man to win multiple medals in the event. Matteo Morandi of Italy took bronze.\n[…]\nIn addition to his 2008 title, Chen was the 2010 and 2011 world champion in the event. Arthur Zanetti of Brazil was the world championship runner-up in 2011."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Arthur_Zanetti",
        "situacao": "ok",
        "texto": "Arthur Nabarrete Zanetti (São Caetano do Sul, 16 de abril de 1990) é um ginasta brasileiro que compete em provas de ginástica artística, campeão olímpico e mundial na modalidade de argolas. Nos Jogos Olímpicos de Londres 2012,\n[…]\ntornou-se o primeiro brasileiro e latino-americano a conquistar uma medalha olímpica de ouro em qualquer das categorias de seu esporte. Também é um militar e atualmente ocupa a graduação de terceiro sargento da Aeronáutica.\n[…]\nDescendente paterno de italianos e materno de espanhóis, começou a praticar ginástica aos 7 anos de idade no SERC Santa Maria, de sua cidade natal. Conquistou vários títulos brasileiros e internacionais nas categorias infantil e juvenil. Em 2007, foi convocado pela primeira vez para a seleção adulta para a disputa do Mundial de Stuttgart, na Alemanha. Na edição seguinte, em 2009, em Londres, ficou em quarto nas argolas.\n[…]\nParticipou da Universíada de 2011, na China, quando conquistou a medalha de ouro nas argolas. Meses adiante, no Mundial da modalidade encerrou como vice-campeão, superado pelo chinês Chen Yibing. Nos Jogos Pan-americanos de Guadalajara, foi novamente segundo colocado em sua especialidade, além de conquistar a inédita medalha de ouro por equipes. Em Londres 2012 conquistou a medalha de ouro nas argolas, tornando-se campeão olímpico.\n[…]\nEm outubro de 2013, Zanetti conquistou a medalha de ouro na modalidade de argolas no campeonato mundial de ginástica, disputado na cidade de Antuérpia, Bélgica, quando se tornou o maior atleta brasileiro da história da ginástica artística, campeão mundial e olímpico desta modalidade. Na mesma temporada conquistou o ouro na Universíade de Kazã, na Rússia.\n[…]\nFederação Internacional de Ginástica\n[…]\nLista de ginastas"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Duplo twist carpado",
      "descricao": "Movimento de solo da ginástica artística, um duplo mortal com meia pirueta e corpo carpado, associado a Daiane dos Santos."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Na ginástica artística, o movimento de solo chamado duplo twist carpado também leva o sobrenome de qual ginasta brasileira?",
    "resposta": "Daiane dos Santos",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Daiane_dos_Santos",
      "https://en.wikipedia.org/wiki/Daiane_dos_Santos"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Daiane_dos_Santos",
        "situacao": "ok",
        "texto": "Daiane Garcia dos Santos (Porto Alegre, 10 de fevereiro de 1983) é uma ex-ginasta brasileira que competiu em provas de ginástica artística. Conquistou nove medalhas de ouro em etapas de copas do mundo de ginástica artística.\n[…]\nDaiane foi a primeira ginasta brasileira, entre homens e mulheres, a conquistar uma medalha de ouro em uma edição do Campeonato Mundial. Daiane dos Santos fez parte da primeira seleção brasileira completa a disputar uma edição olímpica, nos Jogos de Atenas, repetindo a presença nas edições seguintes, nas Olimpíadas de Pequim e Olimpíadas de Londres.\n[…]\nDaiane possui ainda dois movimentos nomeados após ser a primeira  ginasta no mundo a realizá-los: o duplo twist carpado, ou Dos Santos I, e a evolução deste primeiro: o duplo twist esticado, ou Dos Santos II.\n[…]\nNa sequência, competindo no Mundial de Anaheim, na Califórnia, conquistou a primeira medalha de ouro brasileira desta competição: Na final do solo, superou a romena Catalina Ponor e a espanhola Elena Gómez, executando, pela primeira vez, o movimento que recebeu seu nome – o duplo twist carpado ou Dos Santos , desenvolvido com o auxílio do técnico Oleg Ostapenko, seu treinador até então.\n[…]\nEm 2007, submeteu-se a um exame de ancestralidade genética para descobrir seus ascendentes. Assim como resposta, Daiane apresentou as proporções equilibradas entre os três principais grupos que deram origem à população brasileira. A ex-atleta gaúcha tem 39,7% de ancestralidade africana, 40,8% europeia e 19,6% ameríndia. Santos é descendente de angolanos, portugueses, italianos e indígenas.\n[…]\nDaiane dos Santos na Federação Internacional de Ginástica\n[…]\n«Página oficial». www.daianedossantos.com\n[…]\ndos Santos(habilidades vault)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Daiane_dos_Santos",
        "situacao": "ok",
        "texto": "Daiane Garcia dos Santos (born February 10, 1983) is a retired Brazilian artistic gymnast. She is the 2003 world champion on the floor apparatus. On doing so, she became the first black gymnast to ever win an event at the World Championships as well as the first Brazilian and South American to win the competition. She represented Brazil at the 2004, 2008, and 2012 Summer Olympics.\n[…]\nDaiane's breakthrough came at the 2003 World Artistic Gymnastics Championships in Anaheim, California, US. There, she won the gold medal on floor exercise, defeating Romania's Cătălina Ponor, who would become the Olympic champion on the event the following year. She opened her routine with a piked double Arabian: a half twist into a double front flip in a piked position.\n[…]\nDos Santos underwent six months of intensive treatment after the 2007 World Championship and returned to competition at the 2008 World Cups in Cottbus and Tianjin, placing 4th on floor at both. In preparation for the Olympics, she decided along with coach Oleg Ostapenko to bring back her 2004–05 floor music, the crowd-pleasing Brasileirinho. In June, she competed with the Brazilian team at friendly meets in Europe, where she performed the Dos Santos II for the first time since the 2004 Olympics.\n[…]\nDos Santos has two eponymous skills listed in the Code of Points.\n[…]\nMusic: \"Brasileirinho\"; Difficulty: 6.4\n[…]\nRound-off + back handspring + full-twisting double layout; round-off + back handspring + piked double Arabian (Dos Santos I); full turn with leg at horizontal; tour jeté 1/2; front pike + round-off + back handspring + double pike; leap jump + tour jeté 1/1; switch leap; round-off + back handspring + double layout.\n[…]\nDaiane dos Santos at World Gymnastics\n[…]\nDos Santos2 (Floor Exercise Skill)\n[…]\nDaiane dos Santos at Olympics.comDaiane dos Santos at Olympic.org (archived)\n[…]\nDaiane dos Santos at Olympedia"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Emil Zátopek",
      "descricao": "Fundista tcheco que venceu os 5000 metros, os 10000 metros e a maratona nos Jogos de Helsinque, em 1952."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Que apelido ganhou o tcheco Emil Zátopek, que venceu os cinco mil, os dez mil metros e a maratona em 1952?",
    "resposta": "Locomotiva Humana",
    "distratores": [
      "Cavalo de Ferro",
      "Trovão de Praga",
      "Flecha Tcheca"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Emil_Z%C3%A1topek",
      "https://pt.wikipedia.org/wiki/Emil_Z%C3%A1topek"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Emil_Z%C3%A1topek",
        "situacao": "ok",
        "texto": "Emil Zátopek (Czech: [ˈɛmɪl ˈzaːtopɛk] ; 19 September 1922 – 21 November 2000) was a Czech long-distance runner who won three gold medals at the 1952 Summer Olympics in Helsinki. He came first in the 5,000 metres and 10,000 metres runs before he decided at the last minute to compete in the first marathon of his life, which he also won. Zátopek was nicknamed the \"Czech Locomotive\".\n[…]\nZátopek's running style was distinctive and very much at odds with what was considered to be efficient at the time. His head would often roll, face contorted with effort, while his torso swung from side to side. He often wheezed and panted audibly while running, which earned him the nicknames of \"Emil the Terrible\" or the \"Czech Locomotive\". When asked about his tortured facial expressions, Zátopek is said to have replied: \"It isn't gymnastics or figure skating, you know\".\n[…]\nIn 1966, Zátopek hosted the Australian Ron Clarke when he visited Prague for a race. Zátopek knew that while Clarke held many middle-distance track and field world records, he had failed to win an Olympic gold medal (including being beaten by Billy Mills in a major upset). At the end of the visit, Zátopek gave one of his gold medals from the 1952 Olympics to Clarke.\n[…]\nThe 2021 film Zátopek focuses on his personal life and sports career.\n[…]\nThe song \"Czech Locomotive\" by Australian psychedelic rock band Pond off of their album 9 is about him.\n[…]\nBritish punk-rock band Zatopeks chose their name after Emil Zátopek.\n[…]\nŠkoda Transportation named its electric locomotive family 109E after him.\n[…]\nEmil Zátopek at World Athletics\n[…]\nEmil Zátopek at Olympedia\n[…]\nEmil Zátopek at Olympics.comEmil Zátopek at OlympicChannel.com (archived)Emil Zátopek at Olympic.org (archived)\n[…]\nEmil Zátopek at Olympijskytym.cz (in Czech)Emil Zátopek at Olympic.cz (in Czech) (archived)\n[…]\nEmil Zatopek at Running Times\n[…]\nEmil Zatopek Biography\n[…]\nRunning Past profile of Zatopek"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Emil_Z%C3%A1topek",
        "situacao": "ok",
        "texto": "Emil Zátopek (Kopřivnice, 19 de setembro de 1922 — Praga, 22 de novembro de 2000) foi um atleta tcheco. Em 2012, foi imortalizado no Hall da Fama do atletismo, criado no mesmo ano como parte das celebrações pelo centenário da IAAF.\n[…]\nSexto filho de uma família pobre, tornou-se um dos maiores nomes do atletismo em todos os tempos e recebeu o apelido de \"Locomotiva de Praga\" ou \"Locomotiva Humana\".\n[…]\nÉ o único homem a vencer os 5 000 metros, 10 000 metros e a maratona numa mesma Olimpíada. O feito aconteceu nos Jogos de 1952, em Helsínquia, na Finlândia.\n[…]\nZátopek já havia participado da Olimpíada de Londres de 1948, quando foi medalhado com o ouro nos 10 000 m e a prata nos 5 000 m. Mas foi em Helsínquia, aos trinta anos de idade, que conseguiu sua façanha gloriosa: venceu os 10 000 m com o novo recorde olímpico de 29 min 17 s. Quatro dias depois, conquistou a medalha de ouro nos 5 000 m com o tempo de 14 min 6 s 6. E três dias depois, enfrentava a maratona no que era a sua primeira experiência na distância.\n[…]\nAo todo, Zátopek bateu vinte recordes mundiais em distâncias variando de 5 000 m a 30 000 m. Em 1951 tornou-se o primeiro homem a cobrir 20 km em uma hora (20 052 m). Ainda participou da maratona dos Jogos de 1956, apenas 45 dias depois de se submeter a uma cirurgia de hérnia. Apesar de o médico lhe recomendar ficar dois meses sem correr, Zátopek completou a maratona em sexto lugar.\n[…]\nEm 31 de dezembro de 1953 Zátopec competiu na famosa Corrida de São Silvestre, criada pelo jornalista Cásper Líbero para ser disputada no último dia de cada ano. O corredor checo venceu com facilidade sob os aplausos de todos os espectadores.\n[…]\nLista de campeões olímpicos da maratona"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Eddy Merckx",
      "descricao": "Ciclista belga, cinco vezes campeão do Tour de France, considerado um dos maiores da história."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Por sua fome insaciável de vitórias, o ciclista belga Eddy Merckx ganhou qual apelido?",
    "resposta": "O Canibal",
    "fonte": [
      "https://en.wikipedia.org/wiki/Eddy_Merckx"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Eddy_Merckx",
        "situacao": "ok",
        "texto": "Édouard Louis Joseph, Baron Merckx (born 17 June 1945), is a Belgian former professional road and track cyclist racer who is the most successful rider in the history of competitive cycling. His victories include an unequalled eleven Grand Tours (five Tours de France, five Giros d'Italia, and a Vuelta a España), all five Monuments, setting the hour record, three World Championships, every major one\n[…]\nÉdouard Louis Joseph Merckx was born in Meensel-Kiezegem, Brabant, Belgium, on 17 June 1945 to Jules Merckx and Jenny Pittomvils. Merckx was the first-born of the family. In September 1946, the family moved to Sint-Pieters-Woluwe, in Brussels, Belgium, in order to take over a grocery shop that had been up for lease. In May 1948, Jenny gave birth to twins: a boy, Michel, and a girl, Micheline. As a child Eddy was hyperactive and was always playing outside.\n[…]\nChiba Alpencup Eddy Merckx Classics\n[…]\nA 1973 Danish short film was made, Eddy Merckx in the Vicinity of a Cup of Coffee, starring Merckx and Walter Godefroot.\n[…]\nThe 1978 RTBF documentary Au Temps d'Eddy looks back at the career of Merckx.\n[…]\nEddy Merckx is the subject of an autobiographical fiction written by Christophe Van Staen, entitled Eddy Merckx, Nobel Prize? (Lamiroy, 2019)\n[…]\n525: The Unstoppable Eddy Merckx, the \"official film about the world’s greatest ever cyclist\", produced by the English Rapha Films, premiered in Regent Street Cinema in London on 30 July 2026.\n[…]\nLes Fabuleux Exploits d'Eddy Merckx, a celebrity comic, was released in 1973. It was translated in different languages.\n[…]\nEddy Merckx appears in the comic strip San-Antonio Fait un Tour published by Fleuve Noir in 1973.\n[…]\nA tribute to Eddy Merckx is paid in the 1987 Boule et Bill album nr. 24, Billets de Bill.\n[…]\nEddy Merckx at ProCyclingStats\n[…]\nEddy Merckx at CycleBase\n[…]\nEddy Merckx at eWRC-results.com\n[…]\nEddy Merckx at Olympics.com\n[…]\nEddy Merckx at Olympedia\n[…]\nEddy Merckx at InterSportStats"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Eddy_Merckx",
        "situacao": "ok",
        "texto": "Édouard Louis Joseph Merckx, Baron Merckx (17 de junho de 1945, Meensel-Kiezegem, Bélgica), conhecido como Eddy Merckx  é um ex-ciclista belga. Merckx é considerado por muitos como o maior ciclista de todos os tempos.\n[…]\nEddy Merckx possui a mais impressionante lista de títulos do ciclismo mundial: obteve 525 vitórias ao longo de sua carreira, e seu apetite voraz de vitórias lhe valeu o apelido de Canibal. Merckx ganha o Giro d'Itália e o Tour de France, cinco vezes cada, e uma vez a Vuelta a España. No Tour de France, obteve 34 vitórias de etapa e vestiu a camisa amarela (maillot jaune) durante um total de 96 dias. Em 1969, Merckx terminou o Tour com as camisetas amarela, verde e \"às pintas\" (montanha).\n[…]\nEddy Merckx é considerado o maior atleta belga de todos os tempos. É o único atleta belga a ter sido nominado atleta mundial do ano, e isso três vezes: em 1969, 1971 e 1974. Para a Federação belga de Ciclismo, é o ciclista belga do século. Eddy Merckx retirou-se das competições em maio de 1978. Seu filho Axel escolheu a mesma profissão do pai.\n[…]\nAtualmente, o « Grand Prix Eddy Merckx » é uma corrida contra o relógio - um circuito de 60 quilômetros em torno de Bruxelas – que atrai cada ano, no início de setembro, as grandes estrelas do ciclismo.\n[…]\nEddy Merckx é atualmente um empresário de sucesso como fabricante de bicicletas (https://web.archive.org/web/20170627152032/http://www.eddymerckx.be/) e comentarista esportivo de ciclismo. Quando perguntado que conselho daria a ciclistas jovens que desejam ser profissionais, disse: \"Pedalem bastante\".\n[…]\nGiro d'Italia: 1968, 1970, 1972, 1973, 1974 (com 25 vitórias de etapa)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Maldição do Bambino",
      "descricao": "Superstição que explicaria o jejum de títulos do Boston Red Sox entre 1918 e 2004, após a venda de um astro aos Yankees."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A maldição do Bambino teria deixado o Boston Red Sox oitenta e seis anos sem título no beisebol. Bambino era o apelido de qual jogador?",
    "resposta": "Babe Ruth",
    "fonte": [
      "https://en.wikipedia.org/wiki/Curse_of_the_Bambino",
      "https://en.wikipedia.org/wiki/Babe_Ruth"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Curse_of_the_Bambino",
        "situacao": "ok",
        "texto": "The Curse of the Bambino was a superstitious sports curse in Major League Baseball (MLB) derived from the 86-year championship drought of the Boston Red Sox between 1918 and 2004. The superstition was named after Babe Ruth, colloquially known as \"The Bambino\", who played for the Red Sox until his contract was sold to the New York Yankees in 1920. While some fans took the curse seriously, most used\n[…]\nYankee fans taunted the Red Sox with chants of \"1918!\" one weekend in September 1990. The demeaning chant echoed at Yankee Stadium each time the Red Sox were there. Yankees fans also taunted the Red Sox with signs saying \"1918!\", \"CURSE OF THE BAMBINO\", pictures of Babe Ruth, and wearing \"1918!\" T-shirts each time they were at the stadium. The chant was only heard at Yankee Stadium.\n[…]\nBefore Babe Ruth left Boston, the Red Sox had won five of the first fifteen World Series, with Ruth pitching for the 1916 and 1918 championship teams (he was with the Red Sox for the 1915 World Series, but manager Bill Carrigan used him only once, as a pinch-hitter, and he did not pitch). The Yankees had not played in any World Series up to that time.\n[…]\nIn Ken Burns's 1994 documentary Baseball, former Red Sox pitcher Bill Lee suggested that the Red Sox should exhume the body of Babe Ruth, transport it back to Fenway and publicly apologize for trading Ruth to the Yankees.\n[…]\nAfter New York's defeat, the Curse was poked fun at during the Weekend Update segment of Saturday Night Live, when the ghost of Babe Ruth explains that he left during Game Four with the ghosts of Mickey Mantle and Rodney Dangerfield to go drinking.\n[…]\nCurse of the Colonel\n[…]\nESPN account of Ruth's sale to the Yankees.\n[…]\nThe Curse of the Bambino: an HBO documentary (2003)\n[…]\nThe Curse of the Bambino: A musical by Steven Bergman and David Kruh (2001)\n[…]\nRed Sox Were Cursed by Stupid, Racist Management, Not Babe Ruth by Ken Braiterman (January 15, 2012)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Babe_Ruth",
        "situacao": "ok",
        "texto": "George Herman \"Babe\" Ruth (February 6, 1895 – August 16, 1948) was an American professional baseball player whose career in Major League Baseball (MLB) spanned 22 seasons, from 1914 through 1935. Nicknamed \"the Bambino\" and \"the Sultan of Swat\", he began his MLB career as a star left-handed pitcher for the Boston Red Sox, but achieved his greatest fame as a slugging outfielder for the New York Yan\n[…]\nThe Year Babe Ruth Hit 104 Home Runs\n[…]\nBabe Ruth Bows Out\n[…]\nRuth, Dorothy (1988). My Dad, the Babe: Growing Up with an American Hero. Quinlan. ISBN 978-1557700315.\n[…]\nRuth, Babe (June 27, 1920). \"Foibles of Famous Folk\". The Boston Post.\n[…]\nSeeley, Evelyn (June 3, 1930). \"Letters from Bed-Ridden Boys, Love-sick Lassies, Jail Inmates, and Hundreds of Money-seekers, Fill Babe Ruth's Daily Fan Mail Bag\". The Oklahoma News. Oklahoma City, OK.\n[…]\nPipp, Wally (July 30, 1962). \"Bad Day for Babe Ruth\". Sports Illustrated.\n[…]\nBryson, Bill (April 1, 2001). \"My Father, Babe Ruth, and Me\". The New Yorker.\n[…]\nArbuckle, Alex (July 10, 2012). \"Babe Ruth, On and Off the Field\". The New Yorker.\n[…]\nRothman, Lily (June 2, 2015). \"The Disappointing Reason Babe Ruth Left Baseball\". TIME. Archived from the original on April 7, 2022. Retrieved June 21, 2023.\n[…]\nLaFrance, Adrienne (September 9, 2016). \"A Peek at Babe Ruth's Private Scrapbooks\". The Atlantic.\n[…]\nLeavy Jane (October 8, 2018). \"How Babe Ruth Became the Model for the Modern Celebrity Athlete\". Sports Illustrated.\n[…]\nLeavy, Jane (October 23, 2018). \"The Unknown Story of Babe Ruth's Troubled Childhood\". Sports Illustrated.\n[…]\nJackson, Wilton (January 28, 2022). \"Babe Ruth's Rare Pitching Clinic Video Originated from 'Perfect Control' Film\". Sports Illustrated.\n[…]\n\"Official website\" from Babe Ruth family and Babe Ruth League\n[…]\nBabe Ruth at the Baseball Hall of Fame\n[…]\nBabe Ruth at the SABR Baseball Biography Project\n[…]\nBabe Ruth at IMDb\n[…]\nWorks by Babe Ruth at LibriVox (public domain audiobooks)"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "3000 metros com obstáculos",
      "descricao": "Prova do atletismo em que os corredores saltam barreiras e um fosso com água ao longo de três mil metros."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Em inglês, a prova de três mil metros com obstáculos se chama steeplechase. O nome vem de antigas corridas de cavalo que usavam o quê como referência?",
    "resposta": "Torres de igreja",
    "fonte": [
      "https://en.wikipedia.org/wiki/Steeplechase_(athletics)",
      "https://en.wikipedia.org/wiki/Steeplechase"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Steeplechase_(athletics)",
        "situacao": "ok",
        "texto": "A steeplechase is an obstacle race in athletics which derives its name from the steeplechase in horse racing. The foremost version of the event is the 3000 metres steeplechase. The 2000 metres steeplechase is the next most common distance. In youth athletics, a distance of 1000 metres is occasionally used for steeplechase races.\n[…]\nAnd the day ended with a steeplechase at Newark, where 3,000 spectators watched six young men run a mile and a half including a crossing of the River Trent, \"full 20 feet wide\".\n[…]\nIn 2005 Dorcus Inzikuru won the first World Championship in the women's event in Helsinki, becoming Uganda's first gold medallist at the World Championships, and in 2008, at the National Stadium in Beijing, Gulnara Samitova-Galkina, of Russia became both the inaugural Olympic champion in the event and with a time of 8:58.81 she became the first woman under nine minutes for the 3000 metres steeplechase.\n[…]\nA 3000 metres steeplechase is defined in the rulebook as having 28 barriers and seven water jumps. A 2000 meters steeplechase has 18 barriers and five water jumps. Since the water jump is never on the track oval, a steeplechase \"course\" is never a perfect 400 meters lap. Instead, the water jump is placed inside the turn, shortening the lap, or outside the turn, lengthening the lap. The start line moves from conventional starting areas in order to compensate for the different length of lap.\n[…]\nWhen the water jump is inside, the 3000-metre start line is on the backstretch (relative to the steeplechase finish). When the water jump is outside, the 3000-metre start line is on the home stretch. The 2000-metre start line reverses that pattern and uses ⁠5/7⁠ the amount of compensation.\n[…]\nIAAF list of steeplechase records in XML\n[…]\nWomen's Steeplechase"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Steeplechase",
        "situacao": "desambiguacao",
        "texto": "Steeplechase may refer to:\n\nSteeplechase (horse racing), a type of horse race in which participants are required to jump over obstacles\nSteeplechase (athletics), an event in athletics that derives its name from the steeplechase in horse racing\nSteeplechase (composition), a jazz standard by Bebop alto saxophonist Charlie Parker\nSteeplechase (dog agility), an event in dog agility\nSteeplechase (rolle"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Corridas_com_obst%C3%A1culos",
        "situacao": "ok",
        "texto": "As corridas com obstáculos são provas de atletismo que fazem parte do programa olímpico e consistem em corridas que têm no percurso barreiras que os atletas têm que saltar. As provas com obstáculos surgiram na Grécia.\n[…]\nTem como provas padrão 2000 metros com obstáculos e 3000 metros com obstáculos, sendo essa última prova olímpica masculina e feminina. Cada volta na pista terá 4 obstáculos e 1 fosso de água. No total o atleta terá que saltar 28 vezes sobre os obstáculos e 7 vezes sobre o fosso de água na prova de 3000 metros. Na prova de 2000 metros os atletas terão que saltar 18 vezes sobre os obstáculos e 5 sobre o fosso.\n[…]\nOs obstáculos possuem 91,4 cm para provas masculinas e 76,2 para provas femininas. A largura mínima dos obstáculos é de 3,94 m. O obstáculo do fosso deve ter 3,66 m de largura e deve ser fixado ao solo. As barras dos obstáculos terão que ser pintadas com faixas em branco e preto, ou em outras cores fortemente contrastantes. Cada obstáculos deverá pesar entre 80 kg e 100 kg.\n[…]\nO atleta não poderá passar por baixo dos obstáculos, ou passar pelo lado. Se isso ocorrer ele será desclassificado da prova.\n[…]\nnível da pista. Para passar pela piscina, os corredores costumam se apoiar na barreira para tomar impulso, pulando o obstáculo.\n[…]\nCorrida com barreiras, modalidade de corrida de velocidade",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Salto axel",
      "descricao": "Salto da patinação artística com saída de frente e uma volta e meia no ar."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Na patinação artística, o salto axel tem saída de frente e uma volta e meia no ar. De onde vem o nome desse salto?",
    "resposta": "Do patinador Axel Paulsen",
    "fonte": [
      "https://en.wikipedia.org/wiki/Axel_jump",
      "https://en.wikipedia.org/wiki/Axel_Paulsen"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Axel_jump",
        "situacao": "ok",
        "texto": "The Axel jump or Axel Paulsen jump, named after its inventor, Norwegian figure skater Axel Paulsen, is an edge jump performed in figure skating. It is the sport's oldest and most difficult jump, and the only basic jump in competition with a forward take-off, which makes it the easiest to identify. A double or triple Axel is required in both the short program and the free skating segment for junior\n[…]\nThe Axel jump, also called the Axel Paulsen jump for its creator the Norwegian figure skater Axel Paulsen, is an edge jump in the sport of figure skating. According to figure skating historian James Hines, the Axel is \"figure skating's most difficult jump\". It is the only basic jump in competition that takes off forward, which makes it the easiest jump to identify. Skaters commonly perform a double or triple Axel, followed by a jump of lower difficulty in combination.\n[…]\nPaulsen was the first skater to accomplish an Axel, at the first international figure skating competition, which was held in Vienna in 1882, while wearing speed skates. Hines, who called Paulsen \"progressive\" for inventing it, stated that he did it \"as a special figure\". By the mid-1920s, the Axel was the only jump that was not being doubled.\n[…]\nAccording to Mexican skater Donovan Carrillo, accomplishing the quad Axel is \"an incredible feat\" because a skater must start the jump from one foot, complete four-and-a-half rotations in less than one second, and then land on the opposite foot.\n[…]\nKing, the key to executing a successful triple Axel is \"achieving a high rotational velocity by generating angular momentum at take-off and minimizing the moment of inertia about the spin axis\".\n[…]\nMazurkiewicz, Anna; Iwańska, Dagmara; Urbanik, Czesław (27 July 2018). \"Biomechanics of the Axel Paulsen Figure Skating Jump\". Polish Journal of Sport and Tourism. 25 (2). Warsaw: 3–9. doi:10.2478/pjst-2018-0007."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Axel_Paulsen",
        "situacao": "ok",
        "texto": "Axel Paulsen (18 July 1855 – 9 February 1938) was a Norwegian figure skater and speed skater. He invented the figure skating Axel jump and held the world title in speed skating from 1882 to 1890. In 1976, he was inducted into the World Figure Skating Hall of Fame.\n[…]\nIn 1882, he won the World Championships in speed skating in Vienna and received an extra prize in figure skating for a new jump, which he performed while wearing speed skates and which was later named after him. In the winter of 1883, Paulsen went to North America to participate in a series of skating events. On 8 February 1883 a race was held at the open air rink in Washington Park, Brooklyn, New York.\n[…]\nPaulsen defeated 17 picked skaters, the fastest from Norway, Canada, England, and the United States, and set the following records at the race:\n[…]\nIn early 1885, he won both speed skating and figure skating competitions in Hamburg, and on 26 February 1885 had a three-mile race against another famous speed skater Renke van der Zee at the 1885 speed skating race at Frognerkilen in Frognerkilen. The race attracted 20,000–30,000 spectators and had a prize of 1800 Norwegian krones. Paulsen won by more than one minute.\n[…]\nPaulsen held the world speed skating title from 1882 to 1890, losing it on 1 February 1890 to Hugh J. McCormick at a three-race meet in Minneapolis, Minnesota. Besides inventing the Axel jump, he constructed the first modern speed skates with a metal blade fixed to the boot. After the death of his father, he took over his coffee shop and ran it until 1936 together with his brother Edvin."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Salto_Axel",
        "situacao": "ok",
        "texto": "O Axel é um salto da patinação artística em que o atleta salta de frente. Recebeu seu nome em homenagem ao patinador norueguês Axel Paulsen, que, em 1882, foi o primeiro a realizar o salto. Comparado com os outros tipos normais de salto, o Axel tem uma meia rotação extra no ar devido à sua decolagem de frente. A maioria dos patinadores realiza este salto com rotação no sentido anti-horário, saltan\n[…]\nO Axel também pode ser realizado como um salto duplo, com duas rotações e meia, como um salto triplo, com três rotações e meia, ou como um salto quádruplo, com quatro rotações e meia.\n[…]\nO Axel é considerado o salto com maior dificuldade técnica entre os seis tipos de saltos da patinação artística no gelo. No ISU Judging System, atual sistema de pontuação em competições oficiais, o Axel triplo tem um valor base de 8.5 pontos, enquanto o Axel duplo tem um valor base de 3.3 pontos. Isso faz o Axel triplo o salto triplo de valor base mais alto, maior que outros como o Lutz (6), flip (5.3),  loop (5.1), Salchow (4.2), e toe loop (4.1).\n[…]\nNancy Kerrigan, Artistry on Ice. ISBN 0-7360-3697-0.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Base goofy",
      "descricao": "No surfe e no skate, a postura com o pé direito à frente na prancha."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "No surfe e no skate, a base com o pé direito à frente tem nome inspirado num personagem da Disney que surfava assim num desenho de 1937. Que personagem?",
    "resposta": "Pateta",
    "fonte": [
      "https://en.wikipedia.org/wiki/Hawaiian_Holiday",
      "https://en.wikipedia.org/wiki/Glossary_of_surfing"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hawaiian_Holiday",
        "situacao": "ok",
        "texto": "Hawaiian Holiday is a 1937 American animated short film produced by Walt Disney Productions and released by RKO Radio Pictures. The cartoon stars an ensemble cast of The Fabulous Five (Mickey Mouse, Minnie Mouse, Donald Duck, Goofy, and Pluto) while vacationing in Hawaii (at the time was an organized incorporated territory of the United States).\n[…]\nThe film was directed by Ben Sharpsteen, produced by John Sutherland and features the voices of Walt Disney as Mickey, Marcellite Garner as Minnie, Clarence Nash as Donald, and Pinto Colvig as Goofy and Pluto. It was Disney's first film to be released by RKO, ending a five-year distributing partnership with United Artists.\n[…]\nGoofy tries his luck with the waves again and is actually able to get a swell, but it breaks beneath him and washes his board away. As Goofy searches underwater for his board, another wave comes it and drives his board into his pants, leaving him struggling to get it out.\n[…]\nMeanwhile, Goofy tries one last time to catch a wave successfully, but the wave throws him off his board, hits him with it, and catapults him into the sand where he is stopped by his board, making it look as if it was his grave. Mickey, Minnie and Donald laugh at him, and when he pops out unharmed and happy, they continue enjoying their holiday.\n[…]\nWalt Disney as Mickey Mouse\n[…]\nPinto Colvig as Goofy and Pluto\n[…]\n1937 - theatrical release\n[…]\n1956 - Disneyland, episode #2.22: \"On Vacation\" (TV)\n[…]\n1997 - The Ink and Paint Club, episode #1.10: \"Mickey, Donald & Goofy: Friends to the End\" (TV)\n[…]\nThe short was released on December 4, 2001 on Walt Disney Treasures: Mickey Mouse in Living Color.\n[…]\n1978 - \"Walt Disney Presents On Vacation with Mickey Mouse and Friends\" (Discovision Laserdisc #D61-503)\n[…]\n2019 - Disney+\n[…]\nHawaiian Holiday on YouTube (official posting by Walt Disney Animation Studios)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Glossary_of_surfing",
        "situacao": "ok",
        "texto": "This glossary of surfing includes some of the extensive vocabulary used to describe various aspects of the sport of surfing as described in literature on the subject.[a][b] In some cases terms have spread to a wider cultural use. These terms were originally coined by people who were directly involved in the sport of surfing.\n[…]\nCross-step: Crossing one foot over the other to walk down the board\n[…]\nGoofy foot: Surfing with the left foot on the back of board (less common than regular foot)[d]\n[…]\nRegular/Natural foot: Surfing with the right foot on the back of the board[d]\n[…]\nSnaking/Back-Paddling: Stealing a wave from another surfer by paddling around the person's back to get into the best position[d]\n[…]\nSwitchfoot: Ambidextrous, having equal ability to surf regular foot or goofy foot (i.e. left foot forward or right foot forward)\n[…]\nTandem surfing: Two people riding one board. Usually the smaller person is balanced above (often held up above) the other person[f]"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Vanderlei Cordeiro de Lima",
      "descricao": "Maratonista brasileiro, bronze em Atenas 2004 após ser agarrado por um invasor durante a prova."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Na maratona de Atenas, em 2004, Vanderlei Cordeiro de Lima liderava quando foi agarrado por um invasor. Que honraria especial recebeu depois, pelo espírito esportivo?",
    "resposta": "Medalha Pierre de Coubertin",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Vanderlei_Cordeiro_de_Lima",
      "https://en.wikipedia.org/wiki/Vanderlei_Cordeiro_de_Lima"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Vanderlei_Cordeiro_de_Lima",
        "situacao": "ok",
        "texto": "Vanderlei Cordeiro de Lima (Cruzeiro do Oeste, 4 de julho de 1969) é um ex-maratonista brasileiro, bicampeão dos Jogos Pan-Americanos, medalha de bronze nos Jogos Olímpicos de Atenas 2004 e o único latino-americano outorgado com a Medalha Pierre de Coubertin, a maior condecoração de cunho humanitário-esportivo concedida pelo Comitê Olímpico Internacional (COI).\n[…]\nDurante o encerramento dos Jogos, foi anunciado que por seu feito, seu espírito esportivo em continuar na disputa mesmo sendo atacado e a humildade demonstrada após a prova, Vanderlei seria agraciado com a Medalha Pierre de Coubertin, concedida pelo COI para atletas que valorizam a competição olímpica mais do que a vitória e que é considerada uma honra elevadíssima atribuída pela entidade.\n[…]\nEntre as várias homenagens recebidas por Vanderlei após a conquista, inclusive na Europa, uma das mais tocantes aconteceu no Brasil, pouco dias depois de seu retorno. O jogador de voleibol de praia Emanuel, da dupla Ricardo e Emanuel, que conquistou a medalha de ouro da modalidade nos mesmos Jogos, ao se encontrar publicamente com o maratonista em um programa de televisão, retirou do pescoço e lhe deu sua própria medalha de ouro de presente.\n[…]\nVanderlei, com humildade, agradeceu o presente mas recusou emocionado, dizendo que \"Não poderia ficar com a medalha do Emanuel. Estou feliz com a minha, que é de bronze mas vale ouro\".\n[…]\nTenho muito orgulho de minhas origens e de minhas escolhas, pois elas me levaram à conquista do maior sonho: a medalha olímpica. Descobri que ela não é só minha, pois carrega a alegria, o sofrimento e a torcida de todo brasileiro. Nada veio fácil para mim. Vanderlei Cordeiro de Lima\n[…]\nAtletismo nos Jogos Olímpicos de Verão de 2004\n[…]\n«Perfil de Vanderlei Cordeiro» (em inglês). arquivado do sítio Sports-Reference.com"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Vanderlei_Cordeiro_de_Lima",
        "situacao": "ok",
        "texto": "Vanderlei Cordeiro de Lima  (born 4 July 1969) is a retired Brazilian long-distance runner. He was born in Cruzeiro do Oeste, Paraná. While leading the marathon after 35 km (22 mi) at the 2004 Summer Olympics, he was attacked on the course by Irish former priest Cornelius \"Neil\" Horan. Following the incident, Lima fell from first to third place, eventually winning the bronze medal. He was later aw\n[…]\nLima was a two-time Pan American champion, running 2:17:20 at the 1999 Games and 2:19:08 for the second victory at the 2003 Games. He began the 2004 season with a win (2:09:39) at the Hamburg Marathon.\n[…]\nAt the closing of the event, the International Olympic Committee awarded Lima the Pierre de Coubertin Medal for the spirit of sportsmanship. The medal was officially presented to Lima on 7 December in Rio de Janeiro, during a formal ceremony organized on a yearly basis by the Brazilian Olympic Committee (COB) during the Prêmio Brasil Olímpico. Lima was also named Brazilian Athlete of the Year in 2004, receiving the trophy presented by the COB at the same time as the Pierre de Coubertin Medal.\n[…]\nLima's biography was written by Renata Adrião D'Angelo, Vanderlei de Lima - A Maratona de uma Vida (A Marathon of Life), printed in Brazil by Casa da Palavra, in 2007. Lima took part in the 2016 Summer Olympics torch relay in Brasília. In August 2016, he received the honor of lighting the Olympic Flame at the 2016 Summer Olympics in Rio de Janeiro during the Opening Ceremonies.\n[…]\nA documentary shows De Lima returning to Athens at age 54 to participate in the Athens Classic Marathon. The documentary chronicles his relationship with the city and his experience with the attack at the 2004 Summer Olympics.\n[…]\nVanderlei de Lima at World Athletics\n[…]\nVanderlei de Lima - the story of a man that goes beyond one strange incident - Article from IAAF\n[…]\nVanderlei de Lima at Olympics.com"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Isaquias Queiroz",
      "descricao": "Canoísta baiano, medalhista olímpico em várias edições na canoagem de velocidade."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Ainda criança, o canoísta Isaquias Queiroz caiu de uma árvore. Que órgão ele perdeu por causa dessa queda?",
    "resposta": "Um rim",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Isaquias_Queiroz",
      "https://en.wikipedia.org/wiki/Isaquias_Queiroz"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Isaquias_Queiroz",
        "situacao": "ok",
        "texto": "Isaquias Queiroz dos Santos (Ubaitaba, 3 de janeiro de 1994) é um canoísta brasileiro, campeão olímpico nos Jogos Olímpicos de Verão de 2020, na Canoa Individual C1 1.000m, chegando aos 4:04:408 minutos. Em Nos Jogos Olímpicos de Verão de 2016, Isaquias se tornou o primeiro atleta brasileiro a conquistar três medalhas em uma única edição dos Jogos Olímpicos.\n[…]\nIsaquias Queiroz era atleta do Clube de Regatas do Flamengo quando conquistou as medalhas de ouro no C1 200m e a prata no C1 500m. Ele voltou ao clube em 2019 e como atleta do Flamengo conquistou o ouro em Tóquio 2020.\n[…]\nO pai de Isaquias morreu quando ele tinha apenas dois anos, e a mãe, Dilma, cuidava dele e de outros nove irmãos e irmãs (cinco biológicos e quatro adotados). Ao trabalhar, ela às vezes deixava as crianças trancadas em casa.\n[…]\nEm 1997, aos três anos, sentia dor de barriga, esbarrou na cuidadora enquanto esta esquentava água para o tratar, e a água quente queimou boa parte de seu corpo. Isaquias passou um mês no hospital, com um médico chegando a pensar que o menino iria morrer. Aos cinco anos, foi sequestrado. Aos dez, enquanto escalava uma árvore para ver uma cobra morta, caiu em cima de uma pedra, teve hemorragia interna e perdeu um rim.\n[…]\nA confederação atribuiu o atraso a questões burocráticas e disse que os atletas não ficaram sem assistência no período. No mesmo mês, Isaquias sofreu um acidente na BR-101 após buscar o irmão no aeroporto em Ilhéus. Ele estava no volante, cochilou e perdeu o controle do veículo, que caiu em uma ribanceira. Isaquias, o irmão e um amigo saíram sem ferimentos. O acidente só não teve consequências mais graves porque Isaquias dirigia em baixa velocidade por causa da neblina.\n[…]\nJesus Morlán - Treinador de canoagem que lapidou o talento do Isaquias Queiroz.\n[…]\nIsaquias Queiroz em Olympics.com"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Isaquias_Queiroz",
        "situacao": "ok",
        "texto": "Isaquias Queiroz dos Santos (born 3 January 1994), also known as Isaquias Guimarães Queiroz, is a Brazilian sprint canoeist who has competed since 2005. He is the first Brazilian athlete to ever win three medals in a single edition of the Olympic Games, and the second most decorated Brazilian athlete with five medals overall, including a gold medal.\n[…]\nThe 2020 Summer Olympics had Queiroz partnered with Jacky Godmann as Erlon Silva had not recovered from a hip injury. In the C–2 1000 metres category, Queiroz and Godmann finished in fourth place. Queiroz won the gold in his remaining race, the C-1 1000 meters. He considered a consolidation of extensive training to get a victory that eluded him in Rio and became the first Brazilian Olympic champion in canoeing.\n[…]\nQueiroz was one of eight sprint canoeists named to represent Brazil at the 2024 Summer Olympics. On 22 July 2024, the Brazil Olympic Committee designated Queiroz and rugby player Raquel Kochhann to be the Brazilian flag bearers at the 2024 Summer Olympics Parade of Nations. During the Olympics, Queiroz and Goodman again reached the C–2 1000 metres final, finishing eighth.\n[…]\nIn the C-1 1000 meters Queiroz finished with a silver, marking his fifth Olympic medal and tying him with Robert Scheidt and Torben Grael as the most condecorated Brazilian man in the Games.\n[…]\nIsaquias Guimarães Queiroz on Instagram\n[…]\nIsaquias Guimaraes Queiroz at Paddle Worldwide\n[…]\nIsaquias Queiroz at Olympics.com\n[…]\nIsaquias Queiroz at Olympedia\n[…]\nIsaquias Queiroz at InterSportStats\n[…]\nIsaquias Queiroz at the Lima 2019 Pan American Games (archived)\n[…]\nIsaquias Queiroz at the Comitê Olímpico do Brasil  (in Portuguese)"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Rodrigo Pessoa",
      "descricao": "Cavaleiro brasileiro de saltos, campeão olímpico em Atenas 2004 montando Baloubet du Rouet."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Rodrigo Pessoa ficou com o ouro do hipismo em Atenas, em 2004, porque o irlandês que venceu a prova foi desclassificado. Por qual motivo?",
    "resposta": "Doping do cavalo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Rodrigo_Pessoa",
      "https://pt.wikipedia.org/wiki/Rodrigo_Pessoa"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rodrigo_Pessoa",
        "situacao": "ok",
        "texto": "Rodrigo de Paula Pessoa (born 29 November 1972 in Paris, France) is a Brazilian equestrian specialized in show jumping. The son of fellow equestrian Nelson Pessoa, Pessoa is considered one of the most talented of his generation, being an Olympic Games gold medalist in individual jumping and having over 70 Grand Prix wins. He has represented Brazil at 8 Olympic Games second most appearances behind \n[…]\nIn 2000, he again won the bronze team medal at the Olympic Games in Sydney, and in spite of being a favorite to win the individual tournament, wound up disqualified once Baloubet twice refused to jump. In the 2004 Olympics in Athens, he won the individual silver medal, but after the disqualification of the Irish rider Cian O'Connor and his horse Waterford Crystal for doping, he was awarded the gold medal in an award ceremony in Rio de Janeiro.\n[…]\nPessoa attracted controversy in 2008 when he was suspended by the FEI after his horse Rufus failed a doping test at the 2008 Olympic games. Pessoa was fined 2,000 Swiss francs and was suspended from international competitions for four and a half months.\n[…]\nIn 2017, Horse Sport Ireland announced Pessoa as the new Irish showjumping team manager. As chief for Team Ireland, they won the 2017 European title in Gothenburg, and in 2019 got Ireland qualified for the 2020 Tokyo Olympics by winning the FEI Nation's Cup final. At the end of 2019, he ended his cooperation with Horse Sport Ireland to dedicate time to his family and riding career. He rides for James H. Clark and Artemis Farms in Wellington and Greenwich.\n[…]\nRodrigo Pessoa at FEI (alternate link)\n[…]\nRodrigo Pessoa at Olympics.com\n[…]\nRodrigo Pessoa at the Paris 2024 Summer Olympics (archived)\n[…]\nRodrigo Pessoa at Olympedia\n[…]\nRodrigo Pessoa at InterSportStats\n[…]\nRodrigo Pessoa at the Comitê Olímpico do Brasil  (in Portuguese)\n[…]\nRodrigo Pessoa on Instagram"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rodrigo_Pessoa",
        "situacao": "ok",
        "texto": "Rodrigo de Paula Pessoa (Paris, 29 de novembro de 1972) é um cavaleiro brasileiro, campeão olímpico nos Jogos Olímpicos de Atenas 2004, e tricampeão mundial de hipismo.\n[…]\nEntre os anos de 2000 e 2001, Rodrigo Pessoa competiu pelo Club de Regatas Vasco da Gama.[carece de fontes]?\n[…]\nFez parte da equipe que conquistou a medalha de bronze nos Jogos Olímpicos de Atlanta, em 1996,  e com a mesma equipe repetiram o feito nos Jogos Olímpicos de Sydney em 2000. Seu resultado individual, no entanto, ficou comprometido pelo desempenho do cavalo Baloubet du Rouet, que refugou três vezes durante o percurso na prova final.\n[…]\nEm 2004, nos Jogos Olímpicos de Atenas, tornou-se campeão olímpico de saltos individual após a desclassificação por doping do cavalo do então primeiro colocado, o irlandês Cian O'Connor.\n[…]\nNos Jogos Olímpicos de Pequim 2008 obteve o 5.º lugar no salto individual. Quase herdou um lugar no pódio pela desclassificação de adversários cujos cavalos foram flagrados por doping. Mas seu cavalo, Rufus, também foi testado positivo para a substância analgésica proibida em animais nonivamida. Foi desqualificado da prova, suspenso por 135 dias e multado em 1285 euros.\n[…]\nApesar de interessado em conseguir um título nos Jogos Pan-Americanos de 2023 em Santiago, inicialmente pediu dispensa da equipe, com a mídia especulando que o motivo seria a convocação de Álvaro de Miranda Neto, com quem cortou relações após uma briga durante a Olímpiada de 2016. Voltou atrás dois dias depois, dizendo que o motivo de sua dúvida foi não saber se seu cavalo Major Tom estaria em plenas condições.\n[…]\nConfederação Brasileira de Hipismo\n[…]\nPágina de Rodrigo Pessoa"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Lars Grael",
      "descricao": "Velejador brasileiro, duas vezes medalhista olímpico na classe Tornado."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1998, durante uma regata em Vitória, o velejador Lars Grael perdeu uma perna ao ser atingido por quê?",
    "resposta": "Uma lancha",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Lars_Grael",
      "https://en.wikipedia.org/wiki/Lars_Grael"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Lars_Grael",
        "situacao": "ok",
        "texto": "Lars Schmidt Grael OMM (São Paulo, 9 de fevereiro de 1964) é um velejador  brasileiro.\n[…]\nOriundo de família tradicional no iatismo brasileiro, Lars é filho de Ingrid Schmidt e irmão de Torben Grael. Participou de quatro Jogos Olímpicos, entre Los Angeles 1984 e Atlanta 1996, na classe Tornado. Ganhou medalhas de bronze em duas edições, Seul 1988 tendo como proeiro Clinio Freitas, e Atlanta 1996  com Kiko Pelicano, em ambos conquistando o pódio apenas na última regata – e com más condições climáticas na primeira.\n[…]\nEm setembro de 1998, Grael sofreu um grave acidente em Vitória, quando uma lancha conduzida pelo empresário Carlos Guilherme de Abreu e Lima  invadiu a área de competição e bateu no barco de Grael, com sua perna direita sendo mutilada pela hélice da lancha. Lima chegou a levar Grael para o hospital, mas não conseguiram reimplantar a perna. O velejador teve que se afastar da prática esportiva por algum tempo.\n[…]\nPosteriormente, Lars Grael voltou a dedicar-se exclusivamente à vela. Voltou a velejar na classe Star com o proeiro Marcelo Jordão, classificando-se em terceiro lugar no campeonato brasileiro de 2006. Comandou também o barco Agripina/Asa Alumínio, campeão do Campeonato Brasileiro da classe Oceano 2006. Em 2008 disputou a seletiva olímpica brasileira na classe Star para a Olimpíada de Pequim porém foi derrotado pelo favorito Robert Scheidt.\n[…]\nGrael é casado com Renata Pellicano, irmã de seu antigo parceiro Kiko, com quem teve os filhos Nicholas e Sofia. Antes foi casado com Betina Sasse, mãe de sua filha Trine.\n[…]\nLars Grael no Sports Reference (em inglês)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Lars_Grael",
        "situacao": "ok",
        "texto": "Lars Schmidt Grael OMM (born 9 February 1964, in São Paulo) is a Brazilian sailor and public official. He is a two-time Olympic bronze medalist in the Tornado class, having won medals at the 1988 Summer Olympics in Seoul and the 1996 Summer Olympics in Atlanta. He is also a world champion in the Snipe and Star classes, winning the Snipe World Championship in 1983 and the Star World Championship in\n[…]\nIn September 1998, Grael was involved in a serious motorboat accident during a sailing competition in Vitória, Espírito Santo, which resulted in the amputation of one of his legs. He later returned to competitive sailing and continued to compete at the highest international level following his recovery.\n[…]\nIn September 1998, Grael was involved in a serious motorboat accident during a sailing competition in Vitória, Espírito Santo. A motorboat entered the race area and collided with his boat, resulting in the amputation of one of his legs. He later returned to competitive sailing following his recovery.\n[…]\nLars Grael is a co-founder of Projeto Grael, a Brazilian non-profit organization established in 1998 in Niterói, Rio de Janeiro, together with his brother Torben Grael and sailor Marcelo Ferreira. The organization focuses on social inclusion through sailing and nautical activities, offering free sports, educational, and vocational programs to children and young people from economically vulnerable communities.\n[…]\nLars Grael has served in appointed public administration roles related to sports policy in Brazil. He served as \"National Secretary of Sports\" at the federal level from 2001 to 2002.\n[…]\nLars Grael at World Sailing\n[…]\nLars Grael at Olympics.com\n[…]\nLars Grael at Olympedia"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Iditarod",
      "descricao": "Corrida anual de trenós puxados por cães que atravessa o Alasca até a cidade de Nome."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "A corrida de trenós Iditarod, no Alasca, relembra o transporte de soro feito por cães em 1925. Que doença ameaçava a cidade de Nome?",
    "resposta": "Difteria",
    "distratores": [
      "Varíola",
      "Cólera",
      "Tuberculose"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/1925_serum_run_to_Nome",
      "https://en.wikipedia.org/wiki/Iditarod_Trail_Sled_Dog_Race"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/1925_serum_run_to_Nome",
        "situacao": "ok",
        "texto": "The 1925 serum run to Nome, also known as the Great Race of Mercy and The Serum Run, was a transport of diphtheria antitoxin by dog sled relay across the US territory of Alaska by 20 mushers and about 150 sled dogs across 674 miles (1,085 km) in 5+1⁄2 days, saving the small town of Nome and the surrounding communities from a developing epidemic of diphtheria.\n[…]\nFrom November to July, the port on the southern shore of the Seward Peninsula of the Bering Sea was icebound and inaccessible by steamship. The only link to the rest of the world during the winter was the Iditarod Trail, which ran 938 miles (1,510 km) from the port of Seward in the south, across several mountain ranges and the vast Alaska Interior, to the town of Nome. In Alaska and other subarctic regions, the primary source of mail and needed supplies in 1925 was the dog sled.\n[…]\nDog sledding remained popular in the rural interior but became nearly extinct when snowmobiles spread in the 1960s. Mushing was revitalized as a recreational sport in the 1970s with the immense popularity of the Iditarod Trail Sled Dog Race.\n[…]\nWhile the Iditarod Trail Sled Dog Race, which runs more than 1,000 miles (1,600 km) from Anchorage to Nome, is based on the All-Alaska Sweepstakes, it has many traditions that commemorate the race to deliver the serum to Nome, especially Seppala and Togo. The honorary musher for the first seven races was Leonhard Seppala. Other serum run participants, including \"Wild Bill\" Shannon, Edgar Kalland, Bill McCarty, Charlie Evans, Edgar Nollner, Harry Pitka, and Henry Ivanoff have also been honored.\n[…]\n\"Serum run, the rest of the story\". iditarod.com. Iditarod Trail Sled Dog Race. Archived from the original on November 27, 2016. Retrieved November 26, 2016. – from the official website of the Iditarod race organizers"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Iditarod_Trail_Sled_Dog_Race",
        "situacao": "ok",
        "texto": "The Iditarod Trail Sled Dog Race, more commonly known as The Iditarod (), is an annual long-distance sled dog race held in Alaska in early March. It travels from Anchorage to Nome. Mushers and a team of between 12 and 16 dogs, of which at least 5 must be on the towline at the finish line, cover the distance in 8–15 days or more. The Iditarod began in 1973 as an event to test the best sled dog mush\n[…]\nThe official finish line is the Red \"Fox\" Olson Trail Monument, more commonly known as the \"burled arch\", in Nome. The original burled arch lasted from 1975 until 2001, when it was destroyed by dry rot and years of inclement weather. The new arch is a spruce log with two distinct burls similar but not identical to the old arch. While the old arch spelled out \"End of Iditarod Dog Race\", the new arch has an additional word: \"End of Iditarod Sled Dog Race\".\n[…]\nSince its inception in 1973, the Iditarod Trail Sled Dog Race has faced criticism regarding the welfare of participating dogs. Estimates suggest that over 150 dogs have died during the race, as of 2024. In the 2024 race, three dogs—Henry, George, and Bog—died during the event, marking the first fatalities since 2019. The leading cause of death for dogs on the trail is aspiration pneumonia, caused by inhaling their own vomit.\n[…]\nAnimal protection activists say that the Iditarod is not a commemoration of the 1925 serum delivery, and that race was originally called the Iditarod Trail Seppala Memorial Race in honor of Leonhard Seppala. Animal protection activists also say that the Iditarod is dog abuse. For example, dogs have died and been injured during the race. The practice of tethering dogs on chains, which is commonly used by mushers in their kennels, at checkpoints and dog drops, is also criticized.\n[…]\n1925 serum run to Nome\n[…]\nSled Dog Action Coalition Archived October 23, 2014, at the Wayback Machine Facts about Iditarod dog cruelties"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Adhemar Ferreira da Silva",
      "descricao": "Atleta brasileiro do salto triplo, campeão olímpico em 1952 e 1956."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O bicampeão olímpico do salto triplo Adhemar Ferreira da Silva atuou em qual filme, vencedor da Palma de Ouro em 1959?",
    "resposta": "Orfeu Negro",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Adhemar_Ferreira_da_Silva",
      "https://en.wikipedia.org/wiki/Black_Orpheus"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Adhemar_Ferreira_da_Silva",
        "situacao": "ok",
        "texto": "Adhemar Ferreira da Silva (São Paulo, 29 de setembro de 1927 – São Paulo, 12 de janeiro de 2001) foi um atleta brasileiro, primeiro bicampeão olímpico do país, primeiro atleta sul-americano bicampeão olímpico em eventos individuais, recordista mundial do salto triplo cinco vezes e primeiro atleta a quebrar a barreira dos 16m no salto triplo.\n[…]\nNo ano de 1955, o esportista chegou ao Vasco para brilhar no atletismo do clube. Depois de sagrar-se campeão olímpico em 1952, bicampeão panamericano e recordista mundial de salto triplo. Além de treinar na pista de atletismo que circundava o campo, Adhemar também estudava na Escola de Educação Física do Exército e trabalhava no jornal Última Hora.\n[…]\nEm 1956, interpretou a Morte na peça Orfeu da Conceição, de Vinicius de Moraes e no filme franco-italiano Orfeu Negro, de 1959, feito a partir do texto teatral, que venceu o Oscar de melhor filme estrangeiro[carece de fontes]? e a Palma de Ouro no Festival de Cannes. Foi revelado que ele recebeu a oferta do filme enquanto estudava educação física.\n[…]\nEle foi preferido para o papel de ator devido ao seu corpo atlético e não atuou em nenhum outro filme, pois não tinha muito interesse em fazer filmes que acabaram encerrando sua carreira de ator. A antropóloga americana Ann Dunham afirma que Orfeu Negro era o filme favorito de seu filho, o ex-presidente Barack Obama.\n[…]\nAdhemar se transferiu para o carioca Club de Regatas Vasco da Gama em 1955, conquistou o bicampeonato olímpico quando era atleta do clube carioca e por ele encerrou sua carreira em 1960. Vencedor até a sua última prova, encerrou sua última competição oficial como campeão carioca no salto triplo com a marca de 15,58 m, disputada no Estádio Célio de Barros em 1 de outubro de 1960.\n[…]\n«Adhemar Ferreira da Silva». na Confederação Brasileira de Atletismo"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Black_Orpheus",
        "situacao": "ok",
        "texto": "Black Orpheus (Portuguese: Orfeu Negro [ɔhˈfew ˈnegɾu]) is a 1959 romantic tragedy film directed by French filmmaker Marcel Camus and starring Marpessa Dawn and Breno Mello. It is based on the play Orfeu da Conceição by Vinicius de Moraes, which set the Greek legend of Orpheus and Eurydice in a contemporary favela in Rio de Janeiro during Carnaval. The film was an international co-production among\n[…]\nWhen Serafina's sailor boyfriend Chico shows up, Orfeu offers to let Eurydice sleep in his home, while he takes the hammock outside. Eurydice invites him to her bed, and they have sex.\n[…]\nOrfeu wanders in mourning. He retrieves Eurydice's body from the city morgue and carries her in his arms across town and up the hill toward his home, where his shack is burning. A vengeful Mira flings a stone that hits him in the head and knocks him over a cliff to his death, with Eurydice still in his arms.\n[…]\nTwo children, Benedito and Zeca – who have followed Orfeu throughout the film – believe Orfeu's tale that his guitar playing causes the sun to rise every morning. After Orfeu's death, Benedito insists that Zeca pick up the guitar and play so that the sun will rise. Zeca plays, and the sun comes up. A little girl appears, gives Zeca a single flower, and the three children dance.\n[…]\nBreno Mello as Orfeu\n[…]\nAdhemar da Silva as Death\n[…]\nBreno Mello was a soccer player with no acting experience at the time he was cast as Orfeu. Mello was walking on the street in Rio de Janeiro when director Marcel Camus stopped him and asked if he would like to be in a film.\n[…]\nHowever, the film has been criticized, especially in Brazil. Vinicius de Moraes, author of the 1956 play Orfeu da Conceição upon which the film was based, was outraged and left the theater in the middle of the screening.\n[…]\nOrfeu, a 1999 film adapted from the same source material"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Duke Kahanamoku",
      "descricao": "Havaiano considerado o pai do surfe moderno, que divulgou o esporte pelo mundo no início do século vinte."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O havaiano Duke Kahanamoku, considerado o pai do surfe moderno, também ganhou medalhas de ouro olímpicas em qual esporte?",
    "resposta": "Natação",
    "fonte": [
      "https://en.wikipedia.org/wiki/Duke_Kahanamoku"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Duke_Kahanamoku",
        "situacao": "ok",
        "texto": "Duke Paoa Kahinu Mokoe Hulikohola Kahanamoku (August 24, 1890 – January 22, 1968) was a Hawaiian competition swimmer, lifeguard, and popularizer of the sport of surfing. A Native Hawaiian, he was born three years before the overthrow of the Hawaiian Kingdom. He lived to see the territory's admission as a state and became a United States citizen.\n[…]\nHe was born into a family of Native Hawaiians headed by Duke Halapu Kahanamoku and Julia Paʻakonia Lonokahikina Paoa. He had five brothers, and three sisters. His brothers were Sargent, Samuel, David, William and Louis, all of whom participated in competitive aquatic sports. His sisters were Bernice, Kapiolani and Maria.\n[…]\n\"Duke\" was not a title or a nickname, but a given name. He was named after his father, Duke Halapu Kahanamoku, who was christened by Bernice Pauahi Bishop in honor of Prince Alfred, Duke of Edinburgh, who was visiting Hawaii at the time. His father was a policeman. His mother Julia Paʻakonia Lonokahikina Paoa was a deeply religious woman with a strong sense of family ancestry.\n[…]\nHis parents were from prominent Hawaiian ohana (families). The Kahanamoku and the Paoa ohana were considered to be lower-ranking nobles, who were in service to the aliʻi nui, or royalty. His paternal grandfather was Kahanamoku and his grandmother, Kapiolani Kaoeha (sometimes spelled Kahoea), a descendant of Alapainui. They were kahu, retainers and trusted advisors of the Kamehamehas, to whom they were related.\n[…]\nDuke Paoa Kahanamoku Lagoon\n[…]\nDuke Kahanamoku at Olympedia\n[…]\nDuke Kahanamoku at IMDb\n[…]\nDuke Kahanamoku at IMDb\n[…]\nDuke Kahanamoku discography at Discogs\n[…]\nImage of Duke Kahanamoku surfing in Los Angeles, California, circa 1920. Los Angeles Times Photographic Archive (Collection 1429). UCLA Library Special Collections, Charles E. Young Research Library, University of California, Los Angeles."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Duke_Kahanamoku",
        "situacao": "ok",
        "texto": "Duke Kahanamoku (Oahu, 24 de agosto de 1890 — Honolulu, 22 de janeiro de 1968) foi um nadador, ator e surfista havaiano.\n[…]\nEle foi um dos idealizadores do surf moderno. Foi nos Jogos Olímpicos de Verão de 1912 em Estocolmo, como nadador, que começou a conquistar suas glórias olímpicas, que continuaram durante a Primeira Guerra Mundial e foram testadas mais uma vez nos Jogos Olímpicos de Verão de 1920 em Antuérpia e 1924 em Paris. No total, foram 5 medalhas conquistadas, sendo três de ouro e duas de prata.\n[…]\nDuke largou a carreira de desportista depois dos Jogos de 1924, mas no Havaí continuou muito famoso. Ele transformou o arquipélago, até o momento pouco conhecido, no lar mundialmente famoso do surf.\n[…]\nNos Jogos Olímpicos da Antuerpia-1920, Kahanamoku, então com 30 anos, tornou-se o nadador mais velho a ganhar uma medalha de ouro olímpica em provas individuais da natação. Este recorde só seria superado 96 anos depois, por Michael Phelps, que conquistou um ouro com 31 anos e 40 dias.\n[…]\nDuke Kahanamoku no IMDB",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Equipe jamaicana de bobsled",
      "descricao": "Seleção da Jamaica de bobsled, que estreou nos Jogos Olímpicos de Inverno de Calgary, em 1988."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "A estreia da Jamaica no bobsled olímpico, nos Jogos de Inverno de 1988, inspirou qual filme da Disney?",
    "resposta": "Jamaica Abaixo de Zero",
    "fonte": [
      "https://en.wikipedia.org/wiki/Jamaica_national_bobsleigh_team",
      "https://en.wikipedia.org/wiki/Cool_Runnings"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Jamaica_national_bobsleigh_team",
        "situacao": "ok",
        "texto": "The Jamaica national bobsleigh team represents Jamaica in international bobsleighing competitions. The men's team debut in the 1988 Winter Olympic Games four-man bobsleigh in Calgary was received as underdogs in a cold weather sport represented by a nation with a tropical environment. Jamaica returned to the Winter Olympics in the two-man bobsleigh in 1992, 1994, 1998, 2002, 2014, 2022, and 2026; \n[…]\nOn 21 February, Fenlator-Victorian and Russell finished 19th in the two-woman Olympic bobsleigh event. At the 2026 Winter Olympic Games in Milan and Cortina d'Ampezzo in Italy, the Jamaican team consisted of a four-man team, a two man team, and a women's monobob. The two-man team, consisting of Junior Harris and Shane Pitter, came in 22nd out of 25 teams. Mica Moore came 14th out of 25 in the women's monobob event.\n[…]\n2026 Winter Olympic team:\n[…]\nThe 1988 team inspired the reggae parody song \"Jamaican Bobsled\" by The Rock 'n' Roll Animals, played on the GTR radio station and later released on the CD Yatta, Yatta, Yatta. The song was recorded after Jamaica had announced that they would be entering a bobsledding team into the Olympics, but before the Olympics had actually started; nevertheless, the lyrics accurately predict that the team would crash during one of their runs.\n[…]\nIn 1993,  Disney released Cool Runnings, a film loosely based on and inspired by the team's experience in the four-man Bobsleigh at the 1988 Winter Olympics event. A video game based on Jamaica's bobsleigh teams was released for the Wii on 12 October 2010. Titled Sled Shred featuring the Jamaican Bobsled Team and published by SouthPeak Games, it features characters steered by tilting the Wii Remote sliding down icy paths in varied scenery atop various sleds.\n[…]\nNigerian bobsled team\n[…]\nVisa 2010 Winter Olympics commercial on YouTube featuring photos and footage of Jamaica's debut at the 1988 Winter Olympic Games."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Cool_Runnings",
        "situacao": "ok",
        "texto": "Cool Runnings is a 1993 American sports comedy film directed by Jon Turteltaub from a screenplay by Lynn Siefert, Tommy Swerdlow, and Michael Goldberg, and a story by Siefert and Michael Ritchie. It is loosely based on the debut of the Jamaican national bobsleigh team at the 1988 Winter Olympics, and stars Leon, Doug E. Doug, Rawle D. Lewis, Malik Yoba and John Candy.\n[…]\nI knew about the actual event it's based on, the Jamaican bobsled team that went to the '88 Olympics, and even though it's based pretty loosely I thought it made a great yarn.\"  At the time of Doug's audition, Chechik was attached as the director. Doug told The Baltimore Sun: \"I got the offer to play Sanka, the guy I'd wanted to play from the very beginning.\"\n[…]\nLewis claimed that the executives at Disney wanted Kurt Russell for the role of Coach Blitzer; however, John Candy personally insisted on portraying the coach and agreed to take a pay cut to do the movie. According to Yoba, Scott Glenn was also considered for the role. Cuba Gooding Jr., Jeffrey Wright, and Eriq La Salle were each considered for a role as one of the four Jamaican bobsledders.\n[…]\nThe film implies Jamaica as the only country from a tropical climate to compete in bobsleigh at the Olympics; while they were the only Caribbean country to feature in the four-man competition, Netherlands Antilles and two teams from the U.S. Virgin Islands competed in the 38-team two-man competition, who finished 29th, 35th, and 38th, respectively.\n[…]\nTwo members of the Jamaican team (Dudley Stokes and Michael White) also competed in the two-man sled competition, completing all four runs and finishing in 30th place; Stokes and White were set to compete in two-man bobsleigh event only, with the four-man team entered to compete after the two-man event had already been completed.\n[…]\nJamaica national bobsleigh team"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Kelly Slater",
      "descricao": "Surfista profissional americano, vencedor de vários títulos mundiais entre os anos noventa e dois mil."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "No início dos anos noventa, o surfista americano Kelly Slater fez parte do elenco de qual série de TV sobre salva-vidas?",
    "resposta": "S.O.S. Malibu",
    "fonte": [
      "https://en.wikipedia.org/wiki/Kelly_Slater"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Kelly_Slater",
        "situacao": "ok",
        "texto": "Robert Kelly Slater (born February 11, 1972) is an American professional surfer who has been crowned World Surf League champion a record 11 times. He is widely regarded as the greatest professional surfer of all time, and holds 56 Championship Tour victories. Slater won the Laureus World Sports Awards category of Action Sportsperson of the Year four times (2007, 2009, 2011, 2012). and Lifetime Ach\n[…]\nIn 2016 the World Surf League (WSL) acquired a majority stake in the Kelly Slater Wave Company (KSWC) for an undisclosed sum.\n[…]\nCoral Mountain is a proposed $200-million complex on 400 acres (160 ha) in La Quinta, California that would include a hotel and housing built around a surfing basin created by Kelly Slater Wave Co.\n[…]\nIn May 2005, in the final heat of the Billabong Tahiti Pro contest at Teahupo'o, Slater became the first surfer ever to be awarded two perfect scores for a total 20 out of 20 points under the ASP two-wave scoring system (fellow American Shane Beschen made the first perfect score under the previous three-wave system in 1996).\n[…]\nSlater is an avid golfer and practices the sport of Brazilian jiu-jitsu. His biggest surfing inspiration is 3× WSL champion Tom Curren. Curren was the first American surfer to win a World Title. Kelly got his chance to compete against him when Kelly became a full time tour competitor in 1991. Big wave surfers Todd Chesser and Brock Little were also mentors to him when he was a teenager.\n[…]\nKelly Slater in Black and White (1991)\n[…]\nKelly Slater in Kolor (1997)\n[…]\nKelly Slater Letting Go (2008)\n[…]\nA Fly in the Champagne (2009) (featuring Kelly Slater and Andy Irons)\n[…]\nThe Ultimate Surfer, \"Kelly-vision\" cameos\n[…]\nKelly Slater: Lost Tapes, 11 episodes (2022)\n[…]\nKelly Slater's Pro Surfer (2002)\n[…]\nKelly Slater: For the Love (2008), ISBN 0-8118-6222-4\n[…]\nKelly Slater at IMDb\n[…]\nKelly Slater at the World Surf League"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Kelly_Slater",
        "situacao": "ok",
        "texto": "Robert Kelly Slater (Cocoa Beach, 11 de Fevereiro de 1972) é um ex-surfista estadunidense profissional, considerado um dos melhores da história deste esporte.\n[…]\nComeçou a competir no ano 1978, quando tinha seis anos de idade, no Salick Brothers Surf Contest, que venceu. Slater é unodecacampeão mundial de surfe, e competiu nos X-Games de 2003 e 2004. Kelly Slater deu início a uma nova era do surf de alto desempenho a partir dos anos 1990. Em 1991 tornou-se o campeão mundial mais jovem de sempre, com apenas 20 anos.\n[…]\nSlater acompanhou a evolução e as mudanças do esporte durante duas décadas, inspirando surfistas de duas gerações, sendo considerado por muitos como o maior surfista de todos os tempos. Detentor quase todos os principais recordes importantes do esporte, incluindo 11 títulos mundiais, 56 vitórias na carreira. Kelly Slater também será lembrado pela tecnologia de piscinas de ondas que ele e sua equipe de engenheiros da Kelly Slater Wave Co. colocaram em prática em 2015.\n[…]\nPrimeiros anos: Kelly Slater começou a surfar aos 5 anos, em Cocoa Beach, na Flórida, onde nasceu. Aos 10 anos, ele já ganhava eventos para surfistas com menos de 12 anos.\n[…]\nA vitória no Pipeline Masters daquele ano no Havaí garantiu o primeiro título mundial de Kelly Slater. Aos 20 anos, ele se tornou o mais jovem campeão mundial de surf de todos os tempos. Voltou a competir em 2025 como convidado em Trestles. Com isso, virou objeto de estudo de especialistas dentre os atletas mais longevos com alta performance.\n[…]\nKelly Slater no IMDb\n[…]\nKelly Slater «Página oficial» (em inglês)\n[…]\n«Kelly Slater Invitational» (em inglês). www.kellyslaterinvitational.com",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Michael Phelps",
      "descricao": "Nadador americano, o maior medalhista da história dos Jogos Olímpicos."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Nos Jogos de Pequim, em 2008, quantas medalhas de ouro o nadador americano Michael Phelps conquistou?",
    "resposta": "Oito",
    "fonte": [
      "https://en.wikipedia.org/wiki/Michael_Phelps",
      "https://pt.wikipedia.org/wiki/Michael_Phelps"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Michael_Phelps",
        "situacao": "ok",
        "texto": "Michael Fred Phelps II (born June 30, 1985) is an American former competitive swimmer. He won more Olympic medals than any other athlete, a total of 28 medals across four Olympic Games. Phelps also holds the all-time records for Olympic gold medals (23), Olympic gold medals in individual events (13), and Olympic medals in individual events (16).\n[…]\nPhelps's international titles and record-breaking performances have earned him the World Swimmer of the Year Award eight times and American Swimmer of the Year Award eleven times, as well as the FINA Swimmer of the Year Award in 2012 and 2016. Phelps earned Sports Illustrated magazine's Sportsman of the Year award due to his unprecedented Olympic success in the 2008 Games.\n[…]\nAfter the 2008 Olympics, Phelps used his $1 million Speedo bonus to set up the Michael Phelps Foundation. His foundation focuses on growing the sport of swimming and promoting healthier lifestyles.\n[…]\nIn 2010, the Michael Phelps Foundation, the Michael Phelps Swim School and KidsHealth.org developed and nationally piloted the \"im\" program for Boys & Girls Club members. The im program teaches children the importance of being active and healthy, with a focus on the sport of swimming. It also promotes the value of planning and goal-setting. im is offered through the Boys & Girls Clubs of America and through Special Olympics International.\n[…]\nPhelps was a USA Olympic team member in 2000, 2004, 2008, 2012 and 2016, and holds the records for most Olympic gold medals (23), most such medals in individual events (13), and most such medals at a single games (8, in Beijing 2008). A street in his hometown of Baltimore was renamed The Michael Phelps Way in 2004. On April 9, 2009, Phelps was invited to appear before the Maryland House of Delegates and the Maryland Senate, to be honored for his Olympic accomplishments."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Michael_Phelps",
        "situacao": "ok",
        "texto": "Michael Fred Phelps II (Baltimore, 30 de junho de 1985) é um ex-nadador estadunidense, conquistou trinta e sete recordes mundiais e conquistou o maior número de medalhas de ouro (oito) olímpicas em uma única edição, feito este realizado nos Jogos de Pequim, na China, em agosto de 2008. Diante dos seus resultados, Michael superou as sete medalhas de ouro do compatriota Mark Spitz conquistadas nos J\n[…]\nNos Jogos de 2016, ao ganhar o ouro no revezamento 4x200m livre, mesmo participando de um esporte individual, Phelps se tornou o maior medalhista olímpico por equipes, deixando para trás a também nadadora norte-americana Jenny Thompson, que conquistou oito ouros por equipes. Só com os ouros nos revezamentos, Phelps seria o maior medalhista dourado olímpico.\n[…]\nNo entanto, nos 4x100 m livre, a equipe americana só ganhou a medalha de bronze, e Phelps não conseguiu bater o recorde de Mark Spitz, que mais tarde viria a ser quebrado nas Olimpíadas de 2008, em Pequim. No entanto, ele conseguiu oito medalhas em uma Olimpíada, uma proeza só alcançada anteriormente pelo ginasta russo Alexander Dityatin, nos Jogos Olímpicos de 1980 em Moscou.\n[…]\nAo final de Pequim 2008, Phelps bateu o recorde de maior número de medalhas de ouro em uma só edição das Olimpíadas, conseguindo oito medalhas de ouro (em todas as finais que participou), assim superando o recorde de sete medalhas de ouro conquistadas por Mark Spitz na edição de Munique 1972.\n[…]\nEm 16 de agosto, Phelps conquistou sua sétima medalha de ouro nos Jogos Olímpicos de Pequim na prova dos 100m Borboleta, vencendo o americano naturalizado sérvio Milorad Čavić por 1 / 100 segundos (1 centésimo), estabelecendo um novo recorde olímpico de 50,58 segundos. A vitória de Phelps levou a delegação sérvia a um protesto. No entanto, a análise do vídeo feito pela FINA, confirmou a vitória de Phelps por 1 centésimo.\n[…]\nJogos Olímpicos\n[…]\nMichael Phelps no IMDb"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Old Course de St Andrews",
      "descricao": "Campo de golfe histórico na cidade de St Andrews, na Escócia, considerado o berço do golfe."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Em 1764, o Old Course de St Andrews, na Escócia, reduziu seu percurso e acabou criando o padrão do golfe. Com quantos buracos ele ficou?",
    "resposta": "Dezoito",
    "fonte": [
      "https://en.wikipedia.org/wiki/Old_Course_at_St_Andrews"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Old_Course_at_St_Andrews",
        "situacao": "ok",
        "texto": "The Old Course at St Andrews, also known as the Old Lady or the Grand Old Lady, is considered the oldest golf course in the world. It is a public course over common land in St Andrews, Fife, Scotland, and is held in trust by the St Andrews Links Trust under an act of Parliament.\n[…]\nThe Old Course was pivotal to the development of how the game is played today. For instance, in 1764, the course had 22 holes and the members would play the same hole going out and in with the exception of the 11th and 22nd holes. William St Clair of Roslin as the captain of The Captain and Gentlemen Golfers authorized changes to St Andrews on 4 October 1764.\n[…]\nYears later, he said \"If I had to select one course upon which to play the match of my life, I should have selected the Old Course.\"  In 1958 the town of St Andrews gave Jones the key to the city; he was only the second American to receive the honour (after Benjamin Franklin in 1759). After he received the key, he said \"I could take out of my life everything but my experiences here in St Andrews and I would still have had a rich and full life.\"\n[…]\nESPN has said of the course, \"No other golf course has as many famous landmarks as St. Andrews, its 112 bunkers and endless hills and hollows have been cursed for centuries, and many have their own names and legends.\" In 1949, the last bunker to be filled in on the course was Hull bunker on the 15th fairway.\n[…]\nThe Open has been staged at the Old Course at St Andrews 30 times. The following is a list of the champions:\n[…]\nWinners of the Women's British Open at the Old Course at St Andrews:\n[…]\nWinners of the Senior Open Championship at the Old Course at St Andrews:\n[…]\nSt Andrews Links Trust official site of the Old Course\n[…]\nTop 100 Golf Courses - The Old Course\n[…]\n3D Course Planner at ProVisualizer"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Old_Course_at_St_Andrews",
        "situacao": "ok",
        "texto": "O Old Course at St Andrews ou Old Course é o mais antigo campo de golfe do mundo. Foi fundado em 1552 na localidade de St. Andrews, Escócia e atualmente sedia a Royal and Ancient Golf Club of St Andrews, a mais importante entidade de Golfe no mundo.\n[…]\nOs primeiros registros históricos do campo de St. Andrews remetem a uma licença emitida em 1552 que permitia aos habitantesd a região caçar coelhos na região que hoje constitui o Old Course. Outras fontes alegam que Jaime IV da Escócia adquiriu todos os campos de golfe da região de St. Andrews em 1506.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Ginástica artística",
      "descricao": "Modalidade de ginástica disputada em aparelhos como solo, argolas, barras e trave."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Na ginástica artística masculina, o individual geral reúne as notas de todos os aparelhos. Quantos aparelhos são?",
    "resposta": "Seis",
    "distratores": [
      "Quatro",
      "Cinco",
      "Oito"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Gin%C3%A1stica_art%C3%ADstica",
      "https://en.wikipedia.org/wiki/Artistic_gymnastics"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Gin%C3%A1stica_art%C3%ADstica",
        "situacao": "ok",
        "texto": "A ginástica artística, também conhecida no Brasil como ginástica olímpica, é uma modalidade da ginástica formada por exercícios realizados em alguns aparelhos: cavalo, argola, solo e, barra (assimétrica e paralela). Esta modalidade entrou na primeira edição dos jogos olímpicos da era moderna.\n[…]\nAs apresentações da ginástica artística são individuais — ainda que nas disputas por equipes —, possuem o tempo aproximado de trinta a noventa segundos de duração, são realizadas em diferentes aparelhos — sob um conjunto de exercícios — e separadas em competições femininas e masculinas.\n[…]\nOs aparelhos da ginástica artística masculina (sigla em inglês: MAG) são diferentes dos aparelhos disputados na ginástica artística feminina (sigla em inglês: WAG). Enquanto os homens disputam provas em seis aparelhos diferentes, as mulheres as disputam em quatro. Os aparelhos (provas) masculinos são o solo, o salto sobre a mesa, o cavalo com alças (cavalo com arções), as barras paralelas, a barra fixa e as argolas.\n[…]\nO país construiu sua tradição ao longo de 36 anos (de 1934 a 1970) e teve como sua maior representante a ginasta Vera Caslavska, com títulos como o bicampeonato olímpico no individual geral. Enquanto equipe, as tchecas conquistaram seis medalhas olímpicas, com uma de ouro, em 1948. Já em Mundiais, foram sete as conquistas, totalizando dessas, três vitórias. Entre os homens, coletivamente, a soma de medalhas também é de sete, embora as vitórias sejam superiores (4).\n[…]\nQuando Henrietta Ónodi conquistou medalhas olímpica e mundial no salto, a nação voltou a ter a qualidade antes respeitada na ginástica feminina. A masculina teve como destaque individual o competidor Zoltan Magyar, bicampeão olímpico do cavalo com alças e três vezes medalhista de ouro neste aparelho, em Campeonato Mundiais."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Artistic_gymnastics",
        "situacao": "ok",
        "texto": "Artistic gymnastics is a discipline of gymnastics in which athletes perform short routines on different types of apparatus. The sport is governed by World Gymnastics, which assigns the Code of Points used to score performances and regulates all aspects of elite international competition. Within individual countries, gymnastics is regulated by national federations such as British Gymnastics and USA\n[…]\nOlympic Games: Artistic gymnastics is one of the most popular events at the Summer Olympics, held every four years. Countries qualify teams based on their performance at the World Championships the year before the Games. Nations not qualifying to send an entire team may be eligible to send one or two individual gymnasts.\n[…]\nWhile less successful than the women's program, the Romanian men's program has produced individual medalists such as Marian Drăgulescu and Marius Urzică at World and Olympic competitions.\n[…]\nLed by individuals such as 10-time Olympic medalist (with five golds) Ágnes Keleti, the Hungarian women's team medaled at the first four Olympics that included women's artistic gymnastics competitions (1936–1956), as well as at the 1954 World Championships. After a long decline, World and Olympic vault champion Henrietta Ónodi put them back on the map in the late 1980s and early 1990s.\n[…]\nAbusive coaching and training practices in gymnastics gained widespread attention after Joan Ryan's book Little Girls in Pretty Boxes was published in 1995. USA Gymnastics began investigating several coaches in their program for abuse. In the late 2010s, many individual gymnasts—including former elite competitors from Australia, Britain, and the United States—began to speak out about the abuse they had experienced.\n[…]\nArtistic gymnastics terms named after people\n[…]\nList of current female artistic gymnasts\n[…]\nList of notable artistic gymnasts\n[…]\nMedia related to Artistic gymnastics at Wikimedia Commons"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Ginástica rítmica",
      "descricao": "Modalidade de ginástica com música em que as atletas se apresentam com aparelhos manuais."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Na ginástica rítmica, as atletas se apresentam com aparelhos como a fita, o arco e a bola. Qual destes também é um aparelho oficial?",
    "resposta": "Maças",
    "distratores": [
      "Bastão",
      "Leque",
      "Lenço"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Gin%C3%A1stica_r%C3%ADtmica",
      "https://en.wikipedia.org/wiki/Rhythmic_gymnastics"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Gin%C3%A1stica_r%C3%ADtmica",
        "situacao": "ok",
        "texto": "A ginástica rítmica, também conhecida como GR, é uma ramificação da ginástica que possui infinitas possibilidades de movimentos corporais combinados aos elementos de balé e dança teatral, realizados fluentemente em harmonia com a música e coordenados com o manejo dos aparelhos próprios desta modalidade olímpica, que são a corda, o arco, a bola, as maças e a fita. Praticada apenas por mulheres em n\n[…]\nEm paralelo ao trabalho de Duncan, na Alemanha, Heinrich Medau estudou os exercícios rítmicos daquela época e iniciou a elaboração e a introdução de aparelhos como a bola, as maças e o arco, considerado o primeiro passo para a utilização dos aparelhos nos exercícios femininos como se vê nas competições regidas pela FIG. Em 1961, foi apresentada à Federação Internacional de Ginástica.\n[…]\nIndividualmente, o ginasta já manuseia aparelhos, que se apresentam em um total de quatro: dois arcos menores (no lugar de um grande para o feminino), dois bastões longos (de uso exclusivo masculino), duas maças, como para as mulheres, e a corda. A popularidade desta variante da ginástica rítmica, já atingiu outros países dentro e fora da Ásia. Além da Malásia e da Coreia do Sul no continente, pratica-se a GR masculina na Austrália, na Rússia, nos Estados Unidos e no Canadá.\n[…]\nO moinho: no qual a atleta consegue, com a ajuda de aparelhos como as maças e as cordas, formar um círculo à sua volta com os movimentos dos braços.\n[…]\nEsta modalidade possui duas categorias diferentes de competição: a individual e a por grupos, chamada também de conjuntos, composta por cinco ginastas. Na rítmica, as atletas competem com cinco aparelhos. Contudo, em um espaço de dois em dois anos, um é deixado de fora, o que gera uma rotação olímpica marcada sempre pela ausência de um aparelho diferente. Na competição individual as atletas apresentam quatro rotinas diferentes, uma para cada aparelho.\n[…]\nGinástica acrobática"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Rhythmic_gymnastics",
        "situacao": "ok",
        "texto": "Rhythmic gymnastics is a sport in which gymnasts perform individually or in groups on a floor with an apparatus: hoop, ball, clubs, ribbon and rope. The sport combines elements of gymnastics, dance and calisthenics; gymnasts must be strong, flexible, agile, dexterous and coordinated. Rhythmic gymnastics is governed by World Gymnastics, which first recognized it as a sport in 1963. At the internati"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Biatlo",
      "descricao": "Esporte de inverno que combina esqui cross-country com tiro ao alvo."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "O biatlo, esporte dos Jogos de Inverno, combina o esqui cross-country com qual outra modalidade?",
    "resposta": "Tiro com carabina",
    "fonte": [
      "https://en.wikipedia.org/wiki/Biathlon",
      "https://pt.wikipedia.org/wiki/Biatlo"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Biathlon",
        "situacao": "ok",
        "texto": "Biathlon is a winter sport that combines cross-country skiing and rifle shooting. It developed from the sport of military patrol, which began in 19th century Scandinavia and originated in ski warfare. In the Nordic languages, the sport is called \"ski-shooting\". The sport of biathlon involves many different types of races, with the commonality being contestants skiing through a cross-country trail \n[…]\nIn Norway, there are still separate contests in skifeltskyting, a cross-country race at 12 km with large-caliber rifle shooting at various targets with unknown range.\n[…]\nA biathlon competition consists of a race in which contestants ski a series of loops on a cross-country trail system and includes either two or four shooting rounds called bouts, half in the prone position, the other half in the standing position. Depending on the shooting performance, extra distance or time is added to the contestant's total skiing distance/time. Depending on the event the contestant with the shortest total time or first to cross the finish line wins.\n[…]\nAt Olympic competitions, all cross-country skiing techniques are permitted in the biathlon, allowing the use of skate skiing, which is overwhelmingly the choice of competitors. The minimum ski length is the height of the skier minus 4 cm. The rifle has to be carried by the skier during the race by use of a harness and must be taken off during the shooting stages.\n[…]\nBiathlon is generally considered to be a sport with a low risk of injuries or accidents, as is also the case with cross-country skiing. While some injuries from firearms accidents were more common in the past, these led to higher safety standards. Biathletes, as endurance athletes, have an elevated risk of eating disorders.\n[…]\nCross-country skiing (sport)\n[…]\nBiathlon Canada\n[…]\nU.S. Biathlon Association\n[…]\nBiathlon Russia\n[…]\nBiathlon Ukraine (in Ukrainian)\n[…]\nBiathlon Ukraine (in English)\n[…]\nBiathlonFrance.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Biatlo",
        "situacao": "ok",
        "texto": "O biatlo é uma competição individual que envolve dois desportos em simultâneo: esqui de corta-mato e tiro, com provas intercaladas durante toda a prova. A corrida de esqui possui em determinados pontos do trajeto estandes de tiro para que os concorrentes disparem com uma espingarda sobre cinco alvos estáticos, penalizando-se cada falha com a obrigatoriedade de correr 150 metros, ou adicionando um \n[…]\nChamada de patrulha militar, a combinação de esqui e tiro foi disputada nos Jogos Olímpicos de Inverno de 1924 e depois demonstrada em 1928, 1936 e 1948, período durante o qual a Noruega e a Finlândia foram fortes competidores. Em 1948, o esporte foi reorganizado sob a \"Union Internationale de Pentathlon Moderne e Biathlon\" e foi aceito como esporte olímpico em 1955, com ampla popularidade nos circuitos de esportes de inverno soviéticos e suecos.\n[…]\nÉ a prova principal do biatlo. As mulheres esquiam 15 km e os homens 20. Os participantes saem em intervalos de 30 segundos (como num contra-relógio de ciclismo). No percurso há quatro estandes de tiro, sendo que dois são em pé e dois deitados e são alternados;Para cada erro o atleta é penalizado com um minuto no tempo total.\n[…]\nAs mulheres fazem 10km e os homens 12,5. É uma prova com 4 oportunidades de tiro, onde os atletas saem com os tempos finais do sprint.\n[…]\nProva realizada por equipes de quatro biatletas, correndo cada um dos participantes 7,5 km na categoria masculina e 6 na feminina. Cada corredor tem que realizar duas paradas para tiro, cada uma sobre cinco alvos brancos para o que dispõem de oito balas. Para cada erro no tiro o atleta deve fazer o percurso de penalização de 150 metros e depois continuar a prova.\n[…]\nÉ uma prova com 4 oportunidades de tiro, onde os atletas saem em conjunto. Foi novidade nos Jogos Olímpicos de Inverno de 2006, tendo a prova masculina 15 km e a feminina 12,5.\n[…]\nBiatlo nos Jogos Olímpicos"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Abebe Bikila",
      "descricao": "Maratonista etíope, bicampeão olímpico da maratona em 1960 e 1964."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Em 1960, o etíope Abebe Bikila venceu a maratona olímpica de Roma de um jeito que entrou para a história. Como ele correu?",
    "resposta": "Descalço",
    "fonte": [
      "https://en.wikipedia.org/wiki/Abebe_Bikila",
      "https://pt.wikipedia.org/wiki/Abebe_Bikila"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Abebe_Bikila",
        "situacao": "ok",
        "texto": "Shambel Abebe Bikila (Amharic: ሻምበል አበበ ቢቂላ; August 7, 1932 – October 25, 1973) was an Ethiopian marathon runner who was a back-to-back Olympic marathon champion. He was the first Ethiopian Olympic gold medalist, winning his first gold medal at the 1960 Summer Olympics in Rome while running barefoot. At the 1964 Tokyo Olympics, he won his second gold medal, making him the first athlete to successf\n[…]\nIn July 1960, Abebe won his first marathon in Addis Ababa. A month later he won again in Addis Ababa with a time of 2:21:23, which was faster than the existing Olympic record held by Emil Zátopek. Niskanen entered Abebe Bikila and Abebe Wakgira in the marathon at the 1960 Rome Olympics, which would be run on September 10. In Rome, Abebe purchased new running shoes, but they did not fit well and gave him blisters. He consequently decided to run barefoot instead.\n[…]\nAbebe received the Order of Menelik II, a Volkswagen Beetle and a house.\n[…]\nFive years after his death, the New York Road Runners inaugurated the annual Abebe Bikila Award for contributions by an individual to long-distance running. East African recipients include Mamo Wolde, Juma Ikangaa, Tegla Loroupe, Paul Tergat, and Haile Gebrselassie.\n[…]\nThe other two, also written in English, are Paul Rambali's 2007 fictional biographical novel Barefoot Runner and Tim Judah's 2009 Bikila: Ethiopia's Barefoot Olympian. According to the journalist Tim Lewis's comparative review of the two books, Judah's is a more journalistic, less-forgiving biography of Abebe. It refutes the mythical aspects of his life but recognises Abebe's athletic accomplishments.\n[…]\nAbebe Bikila at Olympics.comAbebe Bikila at Olympic.org (archived)\n[…]\nAbebe Bikila at Olympedia\n[…]\nVideo tribute to Abebe Bikila on YouTube\n[…]\nVideo footage of Abebe Bikila on YouTube at the 1960 Summer Olympics"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Abebe_Bikila",
        "situacao": "ok",
        "texto": "Abebe Bikila (Jato, 7 de agosto de 1932 – Adis Abeba, 25 de outubro de 1973) foi um maratonista etíope, filho de um pastor de ovelhas do interior da Etiópia e capitão da guarda real do imperador Hailé Selassié. Foi o primeiro homem a vencer duas maratonas olímpicas e é considerado por muitos especialistas como o maior maratonista de todos os tempos. Em 2012, foi imortalizado no Hall da Fama do atl\n[…]\nEm 1960, Bikila foi incluído na equipe de atletismo apenas no último momento, quando o avião já se preparava para partir para Roma, no lugar de outro atleta, Wami Biratu, que havia quebrado o tornozelo durante uma partida de futebol. Niskanen resolveu inscrever Bikila e Abebe Wakgira na disputa da maratona.\n[…]\nA Adidas, patrocinadora oficial dos Jogos Olímpicos de 1960, tinha apenas poucos pares disponíveis quando Bikila foi experimentar um deles para usar na corrida. Nenhum deles o deixava confortável e ele então resolveu correr descalço, a mesma maneira como sempre tinha treinado. Seu técnico, Niskanen, o havia advertido sobre os concorrentes mais fortes que iria encontrar, especificamente um corredor do Marrocos, Rhadi Ben Abdesselam, que deveria estar usando o número 26.\n[…]\nBikila foi para Tóquio sem previsão oficial de participar da maratona, seis semanas após ser operado de urgência do apêndice. Entretanto entrou na prova, desta vez calçado, por exigência dos organizadores, e adotou a mesma estratégia de 1960, mantendo-se junto o primeiro bloco de corredores até a metade da prova, quando começou a forçar o ritmo.\n[…]\nBikila entrou de volta no estádio olímpico sob a vibração de setenta mil espectadores, com quatro minutos de vantagem para o segundo colocado, Basil Heatley, da Grã-Bretanha, e estabelecendo novamente o recorde mundial da maratona, com o tempo de 2:12.12, tornando-se o primeiro homem na história a vencer por duas vezes a maratona olímpica."
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Bill Bowerman",
      "descricao": "Treinador americano de atletismo da Universidade do Oregon e cofundador da Nike."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "O treinador americano Bill Bowerman, cofundador da Nike, criou um solado de tênis de corrida usando qual aparelho da cozinha de casa?",
    "resposta": "Máquina de waffle",
    "distratores": [
      "Sanduicheira",
      "Forma de bolo",
      "Ralador de queijo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Bill_Bowerman"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bill_Bowerman",
        "situacao": "ok",
        "texto": "William Jay Bowerman (February 19, 1911 – December 24, 1999) was an American track and field coach and co-founder of Nike. Over his career, he trained 31 Olympic athletes, 51 All-Americans, 12 American record-holders, 22 NCAA champions and 16 sub-4 minute milers.\n[…]\nAccording to Otis Davis, a student athlete who Bowerman coached at the University of Oregon, who later went on to win two gold medals at the 1960 Summer Olympics, he was one of the guinea pigs for whom Bowerman customized shoes prior to being a cofounder of Nike. Davis stated, \"I didn't like the way they felt on my feet. There was no support and they were too tight. But I saw Bowerman make them from the waffle iron, and they were mine.\"\n[…]\nBowerman's design ideas led to the creation of a running shoe in 1966 that was ultimately named \"Nike Cortez\" in 1968, which quickly became a top-seller and remains one of Nike's most iconic footwear designs. Bowerman designed several Nike shoes, but is best known for ruining his wife's Belgian waffle iron in 1970 or 1971, experimenting with the idea of using waffle-ironed rubber to create a new sole for footwear that would grip but be lightweight.\n[…]\nBowerman's design inspiration led to the introduction of the so-called \"Moon Shoe\" in 1972, so named because the waffle tread was said to resemble the footprints left by astronauts on the Moon. Further refinement resulted in the \"Waffle Trainer\" in 1974, which helped fuel the explosive growth of Blue Ribbon Sports/Nike. While Bowerman was experimenting with shoe design, he worked in a small, unventilated space, using glue and solvents with toxic components that caused him severe nerve damage.\n[…]\nBill Bowerman Papers at the University of Oregon\n[…]\nBill Bowerman at the USATF Hall of Fame (archived)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bill_Bowerman",
        "situacao": "ok",
        "texto": "William Jay \"Bill\" Bowerman (19 de fevereiro de 1911 – 24 de dezembro 1999) foi um treinador de atletismo da Universidade do Oregon, que criou a marca de roupas Nike de Steve Prefontaine e co-fundador da Nike.\n[…]\nBill Bowerman nasceu em Portland, Oregon, onde seu pai Jay Bowerman foi governador. Foi também o criador de uma cidade;\n[…]\nDe acordo com a Otis Davis, um atleta estudante que Bowerman treinou na Universidade de Oregon, que mais tarde passou a ganhar duas medalhas de ouro nos Jogos Olímpicos de 1960, Bowerman fez o primeiro par de tênis Nike para ele, contrariando a alegação de que eles foram feitos para Phil Knight. Davis adisse \"Eu falei a Tom Brokaw que eu era o primeiro. Não me importo o que todos os bilionários dizem. Bill Bowerman fez o primeiro par de sapatos para mim. As pessoas não acreditam em mim.\n[…]\nNa verdade, não gostei de como se sentiam em meus pés. Não tinha apoio e eles estavam muito apertadas. Mas eu vi Bowerman fazê-los a partir do ferro de waffle, e eles eram meus.\"",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Vuelta a España",
      "descricao": "Volta ciclística da Espanha, uma das três grandes voltas do ciclismo de estrada."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Entre as três grandes voltas do ciclismo, as da França, da Itália e da Espanha, qual foi criada por último?",
    "resposta": "Volta da Espanha",
    "fonte": [
      "https://en.wikipedia.org/wiki/Vuelta_a_Espa%C3%B1a",
      "https://en.wikipedia.org/wiki/Grand_Tour_(cycling)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Vuelta_a_Espa%C3%B1a",
        "situacao": "ok",
        "texto": "The Vuelta a España (pronounced [ˈbwelta a esˈpaɲa]; lit. 'Tour of Spain') is an annual multi-stage road cycling race primarily held in Spain. Inspired by the success of the Tour de France and the Giro d'Italia, the race was first organised in 1935. The race was prevented from being run by the Spanish Civil War and World War II in the early years of its existence; however, the race has been held a\n[…]\nThe fiftieth edition of the Vuelta, which was held in 1995, coincided with the change of dates. The Vuelta a España came to be held in September, and near the end of the season as the last of the three Grand Tours of the year. This was done to attract more high-profile riders, who before had preferred to ride the Giro d'Italia or the Tour de France, which both took place very closely to the Vuelta's timeslot.\n[…]\nThe 2020 Vuelta a España was originally scheduled to be held from 14 August to 6 September 2020. In April 2020, the 2020 Tour de France was rescheduled to run between the 29 August and 20 September, having been postponed in view of the COVID-19 pandemic. On 15 April, UCI announced that both the Giro d'Italia and the Vuelta would take place in autumn after the 2020 UCI Road World Championships.\n[…]\nThe mountains classification in the Vuelta a España is a secondary classification in the Vuelta a España. For this classification, points are given to the cyclists who cross the mountain peaks first. The classification was established in 1935, when it was won by Italian Edoardo Molinar, and until 2005 the leader in the mountain classification wore a green jersey. In 2006, it became an orange jersey, and in 2010 it became white with blue dots.\n[…]\nMost Vuelta a España consecutive victories: Tony Rominger, Roberto Heras, Primož Roglič, 3\n[…]\nMost Vuelta a España Stage wins: Delio Rodríguez, 39\n[…]\nVuelta a España palmares at Cycling Archives (archived, or current page in French)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Grand_Tour_(cycling)",
        "situacao": "ok",
        "texto": "In road bicycle racing, a Grand Tour is one of the three major European professional cycling stage races: Giro d'Italia, Tour de France, and Vuelta a España. Collectively they are termed the Grand Tours, and all three races are similar in format, being three-week races with daily stages.\n[…]\nFive riders have won three individual classifications open to all riders (general, mountains, young and points classifications) in the same race: Eddy Merckx in the 1968 Giro d'Italia and 1969 Tour de France and 1973 Vuelta a España, Tony Rominger in the 1993 Vuelta a España, Laurent Jalabert in the 1995 Vuelta a España, Marco Pantani in the 1998 Giro d'Italia, and Tadej Pogačar in the 2020 Tour de France and 2021 Tour de France.\n[…]\nFrom 2026, the UCI will award more ranking points to Giro d'Italia Women, Tour de France Femmes and the Vuelta Femenina compared to other races in the UCI Women's World Tour.\n[…]\nAdditionally, Fausto Coppi won the 1952 Giro d'Italia, the 1952 Tour de France and the 1953 Giro d'Italia, with the Vuelta a España not held in 1952.\n[…]\nThe biggest winning margin in a Grand Tour was 2h 59' 21\" in Maurice Garin's win at the first Tour de France in 1903. The biggest margin in the history of Giro d'Italia was in 1914 when Alfonso Calzolari won by 1h 57' 26\", and the biggest margin in the history of Vuelta a España was in 1945 when Delio Rodríguez finished 30' 08\" clear.\n[…]\nafter the end of 2026 Vuelta a España\n[…]\nThree cyclists have won stages in all three of the Grand Tours in the same season: Miguel Poblet in 1956, Pierino Baffi in 1958 and Alessandro Petacchi in 2003. The rider with the most Grand Tour stage wins in one season is Freddy Maertens who won 20 stages in 1977: 13 in the Vuelta a España and 7 in the Giro d'Italia."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Volta_a_Espanha",
        "situacao": "ok",
        "texto": "A Volta a Espanha (em castelhano: Vuelta a España) ou simplesmente La Vuelta, é uma competição de ciclismo por etapas profissional de ciclismo de estrada disputada ao longo da geografia espanhola. Celebra-se entre finais de agosto e princípios de setembro e pertence ao calendário UCI World Tour, máxima categoria das corridas profissionais.\n[…]\nO vencedor da Volta a Espanha obtém 720 pontos para o Salão da Fama do Ciclismo (Cycling Hall of Fame).\n[…]\nA primeira metade da década de 1990 esteve marcada pelo domínio do suíço Tony Rominger, o primeiro ciclista que conseguiu ganhar três vezes a corrida de forma consecutiva, entre 1992 e 1994. No ano 1993 Tony Rominger ganhou as classificações individuais. Naqueles anos 1990 A Volta podia contar com o potencial de duas das melhores equipas espanholas que tem existido: a Onze e a Banesto com destacados elencos de bons corredores nacionais e internacionais.\n[…]\n2017 A Volta a Espanha começou em Nîmes, França. Três foram as etapas por território francês até que se meteu por Andorra e depois a Espanha. Já desde o principio Froome tomou a camisa vermelha sem grandes diferenças. Bonitas a etapas de Xorret de Cati, a subida ao Collado Bermejo, Calar Alto com o bonito porto de Velefique e mencionar a Hazallanas e la Pandera nesta primeira parte da corrida. Passada a contrarelógio da Rioja que ganhou Froome.\n[…]\nPara facilitar o reconhecimento do líder em corrida, este costuma vestir um camisa com uma cor determinada, como sucede na Volta a França (camisa amarela) e na Volta a Itália (maglia rosa). A camisa de líder da Volta a Espanha não tem sido sempre da mesma cor. Teve várias suspensões da corrida e os diferentes organizadores que a resgataram elegeram as suas cores.\n[…]\nGrande Prémio da montanha na Volta a Espanha\n[…]\nClassificação por equipas na Volta a Espanha\n[…]\nLusófonos na Volta a Espanha",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
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
