# Modo Trilha da Vida — rascunho

> **Em concepção.** Segundo modo de jogo do Mestre2, separado do **Modo Master** (o tabuleiro em espiral do MANIFESTO §15), que continua em desenvolvimento como está. Nada deste documento está implementado. Nome provisório.
>
> As regras de conteúdo (MANIFESTO, Parte I) valem igualmente: o modo muda como as perguntas são usadas, e não as perguntas (princípio 1).
>
> Este documento separa **o que o autor decidiu**, **as propostas** que ainda precisam de aprovação e **o que está em aberto**.

## Ideia geral

Um jogo de "andar no tabuleiro", inspirado no *Jogo da Vida*: cada jogador percorre as fases de uma vida e só avança acertando perguntas. A graça está nas **cartas** e nas **casas**, que mudam qual pergunta cada um responde.

## Decidido pelo autor

**Número de jogadores:** o jogo precisa funcionar **sem prejuízo com 3 ou 4 jogadores**. Toda regra é conferida contra esse requisito:
- nada de duplas ou pares fixos, porque com 3 alguém sempre sobraria;
- uma carta ou casa que mira um oponente não pode favorecer dois jogadores contra o terceiro; com 3, o mesmo jogador vira alvo com frequência, e convém um limite (por exemplo, não mirar o mesmo jogador duas vezes seguidas);
- trilha e fim de jogo medidos em **rodadas**, para a partida durar parecido com 3 ou 4.

**Objetivo:** **vence quem chega primeiro** ao fim da trilha. É uma corrida.

**Tamanho do tabuleiro:** quem responde **cerca de 20 perguntas certas**, contando só o movimento de acertar (sem cartas nem outras mecânicas), chega ao fim. Com o dado de 1 a 3 (média 2), a trilha tem **~40 casas**. As encruzilhadas também são medidas em acertos.

**Começo do jogo**
- Cada jogador **escolhe uma profissão**, **uma personalidade** e **compra uma carta**.
- **Profissões:** são **todas as combinações de 2 temas**, 28 ao todo.
- **Personalidades:** separadas das profissões, são habilidades que modificam o jogo para quem as tem (os antigos perks).

**Casas**
- **"Vá trabalhar":** **1/4 das casas**. Sorteia uma pergunta aleatória de um dos **dois temas da profissão** de quem cai nela; a mesma casa dá perguntas diferentes para cada jogador. É o que dá peso à escolha da profissão.
- **Casas de Ação:** temáticas, com um texto de "vida". Exemplo: "Vá ao Cinema", que dá uma pergunta de Cinema.
  - **"Tire férias":** o jogador **não responde nesta rodada**; se **acertar na próxima**, anda **2 casas além do dado** (de 3 a 5 casas). Com ~65% de acerto, a casa sai mais ou menos neutra: a vez perdida vale cerca de 1,3 casa, e o bônus devolve cerca de 1,3.
- **Casas de tema amplo:** a pergunta é de um tema inteiro, como no Master.
- **Casas em Branco:** o jogador pode usar uma carta ou comprar uma carta. **Comprar é de graça.**

**Cartas**
- **Escolha o tema:** o jogador escolhe o tema da pergunta. Os temas amplos também aparecem nas cartas.
- **Desafio:** uma pergunta, de tema aleatório ou específico, direcionada a um oponente. Se ele acertar, quem jogou a carta anda também.
- **Múltipla escolha:** a pergunta passa a ser de múltipla escolha.
- **Figura:** a pergunta passa a ser com figura.

**Não há dinheiro nem salário.** Saíram do rascunho anterior, com tudo o que dependia deles: patrimônio, casas de Pagamento, Casa própria, Investimento e níveis de carreira.

## Propostas (aguardando aprovação)

**Nomes das 28 profissões** (proposta):

| | História | Natureza | Ciências | Artes e Pens. | Entretenimento | Esportes | Cotidiano |
|---|---|---|---|---|---|---|---|
| **Geografia** | Diplomata | Explorador | Meteorologista | Arquiteto | Blogueiro de viagens | Alpinista | Guia de turismo |
| **História** | | Paleontólogo | Arqueólogo | Curador de museu | Roteirista | Cronista esportivo | Antropólogo |
| **Natureza** | | | Biólogo | Paisagista | Documentarista | Instrutor de mergulho | Agrônomo |
| **Ciências** | | | | Inventor | Desenvolvedor de games | Médico do esporte | Engenheiro |
| **Artes e Pens.** | | | | | Ator | Ginasta | Escritor |
| **Entretenimento** | | | | | | Locutor esportivo | Publicitário |
| **Esportes** | | | | | | | Personal trainer |

**Personalidades** (proposta):

| Personalidade | Efeito |
|---|---|
| **Metódico** | Uma vez por fase, se errar, responde outra pergunta do mesmo tema |
| **Curioso** | Vê o tema da próxima casa antes de decidir usar uma carta |
| **Aventureiro** | Nas encruzilhadas, pega um caminho sem o custo dele |
| **Criativo** | Na Casa em Branco, compra 2 cartas e fica com 1 |
| **Competitivo** | Acerto num tema da sua profissão anda 1 casa a mais |
| **Observador** | Pergunta com figura certa anda o dado duas vezes |
| **Colecionador** | Guarda uma carta a mais na mão |
| **Sortudo** | Uma vez por fase, rola o dado duas vezes e fica com o maior |

**Escolha no começo** (proposta): cada jogador recebe 3 profissões e escolhe 1, sem repetir temas de outro jogador; depois recebe 2 personalidades e escolhe 1. Com 3 ou 4 jogadores há variedade de sobra.

**Casas de Ação ligadas a subtemas** (exemplos): "Vá ao Cinema" → Cinema; "Visite um museu" → Pintura ou Escultura e Arquitetura; "Viaje para a Ásia" → Antigas Civilizações do Oriente ou Países e Capitais; "Assista ao jogo" → Futebol; "Faça um churrasco" → Culinária e Bebidas; "Leia um livro" → Literatura Brasileira ou Mundial. Se o subtema tiver poucas perguntas, a casa usa o tema inteiro.

**Limite de cartas:** no máximo 3 na mão.

**Turno** (a partir do rascunho anterior, sem dinheiro):
1. O app indica quem joga e quem lê (o jogador seguinte na roda), o que resolve, neste modo, a pendência de como a vez passa (MANIFESTO §14).
2. O jogador rola o dado no app.
3. A casa onde o peão está, ou uma carta, define a pergunta.
4. **Acertou:** anda o valor do dado. **Errou:** não anda (ver Movimento).

**Fases da vida e encruzilhadas** (do rascunho anterior, a rever sem dinheiro): Juventude, Vida adulta, Maturidade e Aposentadoria. Duas encruzilhadas: a Formatura (Faculdade, caminho longo, ou Trabalho, atalho) e a Aposentadoria (Vila Tranquila, garantida, ou Mansão dos Sábios, que exige 3 perguntas abertas seguidas, de 3 temas diferentes). Sem salário, cada caminho precisa de outra vantagem; uma ideia é a Faculdade dar cartas. Com o objetivo de chegar primeiro, as encruzilhadas viram escolhas de velocidade e risco (ver Consequências de ser uma corrida).

**Cartas de Destino** (do rascunho anterior, sem as de dinheiro): eventos de humor e virada, como "Mudança de carreira: troque um tema da profissão" ou "Ano sabático: fique uma rodada parado e compre 2 cartas".

**Consequências de ser uma corrida** (propostas):
- **Mesmo número de turnos:** quando alguém chega, a rodada termina, para todos terem jogado o mesmo número de vezes. Se mais de um chegar na mesma rodada, vence quem foi mais longe além da chegada, ou há uma pergunta de desempate.
- **Recuperação:** para o líder não disparar, o que pesa mais com 3 jogadores: quem está em último compra uma carta extra por rodada, e as cartas que miram oponentes só miram quem está à frente na trilha.
- **Aposentadoria como escolha de velocidade:** a Mansão dos Sábios vira um atalho que exige 3 perguntas abertas seguidas; quem erra volta para o caminho da Vila Tranquila, mais longo e sem exigências.

**Movimento** (decidido pelo autor): **dado de 1 a 3** por acerto, trilha de ~40 casas. Dá a sensação de andar no tabuleiro sem que o dado decida a partida: 20 acertos andam algo entre 32 e 48 casas. **Errar não move o peão** (proposta): se errar andasse, os erros também levariam ao fim, e a meta deixaria de ser "20 acertos". A estimativa de duração, com 65% de acerto e ~40 segundos por pergunta, é de uma hora com 3 jogadores e 1h20 com 4.

**Encruzilhadas em acertos** (proposta): a Faculdade exige uns 3 acertos a mais que o Trabalho, mas dá cartas; a Mansão dos Sábios economiza uns 3 acertos, mas exige 3 perguntas abertas seguidas.

**Distribuição das casas** (proposta), na trilha de ~40 casas: 10 "Vá trabalhar", 12 de Ação, 8 de tema amplo, 6 em Branco e 4 especiais (encruzilhadas e Destino). As casas "Vá trabalhar" ficam espaçadas regularmente, mais ou menos a cada 4 casas: com o dado de 1 a 3, todos caem nelas com frequência parecida, e ninguém passa uma fase inteira sem trabalhar.

**Personalidade Competitivo** (a rever): "+1 casa ao acertar um tema da profissão" fica forte com 1/4 das casas de trabalho. Proposta: valer só nas casas "Vá trabalhar", ou trocar o efeito.

## Em aberto

1. **Carta de Desafio:** do jeito que está, ela só ajuda o oponente. Se ele acertar, os dois andam; se errar, nada acontece. Por que alguém a usaria? Opções:
   - **errar faz o oponente voltar** casas, e a carta vira ataque;
   - usar quando você está **parado** e precisa que alguém acerte para você andar;
   - ela é **cooperativa** de propósito.

   Com 3 jogadores, a versão cooperativa é a mais arriscada: quem joga a carta e quem acerta andam juntos, e o terceiro fica para trás. As versões de ataque ou de destravar não dependem do número de jogadores.

## Prova de conceito do tabuleiro

Um primeiro desenho está em [`../prototipos/trilha_da_vida/`](../prototipos/trilha_da_vida/): `tabuleiro.html`, que abre no navegador, e `tabuleiro.png`. É só uma **prova de conceito** (2026-10-01) e foi feito antes destas decisões: ainda tem casas de dinheiro. É uma trilha em zigue-zague de baixo para cima, com as encruzilhadas da Formatura e da Aposentadoria e cerca de 55 casas. **O desenho vai mudar completamente**; não está no app e não deve ser tomado como decisão.

## O que o modo exige do app

- Estado novo da partida: profissão, personalidade e mão de cartas de cada jogador.
- Tabuleiro novo: uma trilha com bifurcações, com casas "Vá trabalhar", de Ação, de tema amplo e em Branco.
- Sorteio por **subtema**, além de por tema, para as casas de Ação. O app hoje só sorteia por tema.
- Turno guiado: dado, pergunta definida pela casa ou pela carta, resultado.
- Escolha do modo ao criar a partida. O Modo Master continua existindo, com as suas regras.
