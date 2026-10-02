# Modo Trilha da Vida — rascunho

> **Em concepção.** Segundo modo de jogo do Mestre2, separado do **Modo Master** (o tabuleiro em espiral do MANIFESTO §15), que continua em desenvolvimento como está. Nada deste documento está implementado. Nome provisório.
>
> As regras de conteúdo (MANIFESTO, Parte I) valem igualmente: o modo muda como as perguntas são usadas, e não as perguntas (princípio 1).
>
> Este documento separa **o que o autor decidiu**, **as propostas** que ainda precisam de aprovação e **o que está em aberto**.

## Ideia geral

Um jogo de "andar no tabuleiro", inspirado no *Jogo da Vida*: cada jogador percorre as fases de uma vida e só avança acertando perguntas. A graça está nas **cartas** e nas **casas**, que mudam qual pergunta cada um responde.

## Decidido pelo autor

**Começo do jogo**
- Cada jogador **escolhe uma profissão** e **compra uma carta**.
- A profissão é uma **combinação de 2 temas** mais um **perk**, uma habilidade que modifica o jogo para quem a tem.

**Casas**
- **Casas de Ação:** temáticas, com um texto de "vida". Exemplo: "Vá ao Cinema", que dá uma pergunta de Cinema.
- **Casas de tema amplo:** a pergunta é de um tema inteiro, como no Master.
- **Casas em Branco:** o jogador pode usar uma carta ou comprar uma carta. **Comprar é de graça.**

**Cartas**
- **Escolha o tema:** o jogador escolhe o tema da pergunta. Os temas amplos também aparecem nas cartas.
- **Desafio:** uma pergunta, de tema aleatório ou específico, direcionada a um oponente. Se ele acertar, quem jogou a carta anda também.
- **Múltipla escolha:** a pergunta passa a ser de múltipla escolha.
- **Figura:** a pergunta passa a ser com figura.

**Não há dinheiro nem salário.** Saíram do rascunho anterior, com tudo o que dependia deles: patrimônio, casas de Pagamento, Casa própria, Investimento e níveis de carreira.

## Propostas (aguardando aprovação)

**Perks das profissões** (exemplos):

| Profissão | Temas | Perk |
|---|---|---|
| Cientista | Ciências + Natureza | **Método científico:** uma vez por fase, se errar, responde outra pergunta do mesmo tema |
| Jornalista | Cotidiano + História | **Fontes:** vê o tema da próxima casa antes de decidir usar uma carta |
| Explorador | Geografia + Natureza | **Atalho:** nas encruzilhadas, pega um caminho sem o custo dele |
| Artista | Artes e Pensamento + Entretenimento | **Inspiração:** na Casa em Branco, compra 2 cartas e fica com 1 |
| Atleta | Esportes + Cotidiano | **Fôlego:** acerto no próprio tema anda 1 casa a mais |
| Cineasta | Entretenimento + Geografia | **Olhar treinado:** perguntas com figura valem o dobro |
| Historiador | História + Artes e Pensamento | **Memória:** guarda uma carta a mais na mão |
| Engenheiro | Ciências + Esportes | **Precisão:** pode trocar uma múltipla escolha por aberta, para andar mais |

O que os 2 temas da profissão fazem no jogo ainda não está definido. Pode ser que só o perk dependa deles, ou que acertar nesses temas dê alguma vantagem.

**Casas de Ação ligadas a subtemas** (exemplos): "Vá ao Cinema" → Cinema; "Visite um museu" → Pintura ou Escultura e Arquitetura; "Viaje para a Ásia" → Antigas Civilizações do Oriente ou Países e Capitais; "Assista ao jogo" → Futebol; "Faça um churrasco" → Culinária e Bebidas; "Leia um livro" → Literatura Brasileira ou Mundial. Se o subtema tiver poucas perguntas, a casa usa o tema inteiro.

**Limite de cartas:** no máximo 3 na mão.

**Turno** (a partir do rascunho anterior, sem dinheiro):
1. O app indica quem joga e quem lê (o jogador seguinte na roda), o que resolve, neste modo, a pendência de como a vez passa (MANIFESTO §14).
2. O jogador rola o dado no app.
3. A casa onde o peão está, ou uma carta, define a pergunta.
4. **Acertou:** anda o valor do dado. **Errou:** anda 1 casa, porque a vida segue e a partida tem fim previsível.

**Fases da vida e encruzilhadas** (do rascunho anterior, a rever sem dinheiro): Juventude, Vida adulta, Maturidade e Aposentadoria. Duas encruzilhadas: a Formatura (Faculdade, caminho longo, ou Trabalho, atalho) e a Aposentadoria (Vila Tranquila, garantida, ou Mansão dos Sábios, que exige 3 perguntas abertas seguidas, de 3 temas diferentes). Sem salário, cada caminho precisa de outra vantagem; uma ideia é a Faculdade dar cartas.

**Cartas de Destino** (do rascunho anterior, sem as de dinheiro): eventos de humor e virada, como "Mudança de carreira: troque um tema da profissão" ou "Ano sabático: fique uma rodada parado e compre 2 cartas".

## Em aberto

1. **Carta de Desafio:** do jeito que está, ela só ajuda o oponente. Se ele acertar, os dois andam; se errar, nada acontece. Por que alguém a usaria? Opções:
   - **errar faz o oponente voltar** casas, e a carta vira ataque;
   - usar quando você está **parado** e precisa que alguém acerte para você andar;
   - ela é **cooperativa** de propósito.
2. **Objetivo e fim:** sem patrimônio, vence quem chega primeiro? Ou há pontos de outra coisa, como cartas, casas especiais ou conquistas por fase?
3. **Os 2 temas da profissão:** que efeito têm no jogo, além do perk?
4. **Duração:** uma trilha de ~60 casas dá cerca de 1 hora com 4 jogadores.
5. **Sorte:** dado, cartas e Destino. Quanto de sorte é bom?
6. **Peso do erro:** andar 1 casa é brando. Algo mais duro?

## Prova de conceito do tabuleiro

Um primeiro desenho está em [`../prototipos/trilha_da_vida/`](../prototipos/trilha_da_vida/): `tabuleiro.html`, que abre no navegador, e `tabuleiro.png`. É só uma **prova de conceito** (2026-10-01) e foi feito antes destas decisões: ainda tem casas de dinheiro. É uma trilha em zigue-zague de baixo para cima, com as encruzilhadas da Formatura e da Aposentadoria e cerca de 55 casas. **O desenho vai mudar completamente**; não está no app e não deve ser tomado como decisão.

## O que o modo exige do app

- Estado novo da partida: profissão, perk e mão de cartas de cada jogador.
- Tabuleiro novo: uma trilha com bifurcações, com casas de Ação, de tema amplo e em Branco.
- Sorteio por **subtema**, além de por tema, para as casas de Ação. O app hoje só sorteia por tema.
- Turno guiado: dado, pergunta definida pela casa ou pela carta, resultado.
- Escolha do modo ao criar a partida. O Modo Master continua existindo, com as suas regras.
