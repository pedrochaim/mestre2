# Modo Trilha da Vida — rascunho

> **Em concepção (2026-10-01).** Segundo modo de jogo do Mestre2, separado do **Modo Master** (o tabuleiro em espiral do MANIFESTO §15), que continua em desenvolvimento como está. Nada deste documento está implementado. As decisões em aberto estão no fim.
>
> As regras de conteúdo (MANIFESTO, Parte I) valem igualmente: o modo muda como as perguntas são usadas, e não as perguntas (princípio 1).

Inspirado no *Jogo da Vida*: cada jogador percorre as fases de uma vida, escolhe caminhos e acumula patrimônio, e só avança acertando perguntas.

## Objetivo

Chegar à aposentadoria com o maior **patrimônio**: dinheiro, imóveis, nível de carreira e o bônus da aposentadoria. Andar rápido não basta; vale mais quem soube aproveitar o caminho.

## Início: escolha de carreira

Cada jogador recebe 3 cartas de carreira e escolhe 1. Cada carreira tem **dois temas de especialidade**, e cada tema aparece em duas carreiras:

| Carreira | Temas |
|---|---|
| Cientista | Ciências + Natureza |
| Historiador | História + Artes e Pensamento |
| Explorador | Geografia + Natureza |
| Artista | Artes e Pensamento + Entretenimento |
| Atleta | Esportes + Cotidiano |
| Jornalista | Cotidiano + História |
| Cineasta | Entretenimento + Geografia |
| Engenheiro | Ciências + Esportes |

## O turno

1. O app indica **quem joga** e **quem lê** (o jogador seguinte na roda). Isso resolve, neste modo, a pendência de como a vez passa (MANIFESTO §14).
2. O jogador **rola o dado** no app.
3. Escolhe o **risco**: **seguro** (múltipla escolha, prêmio menor) ou **ousado** (pergunta aberta, prêmio maior). O risco substitui a dificuldade estimada, que não pode decidir nada no jogo (MANIFESTO §4).
4. A pergunta é do **tema da cor da casa** onde o peão está.
5. **Acertou:** anda o valor do dado e recebe o prêmio. **Errou:** anda 1 casa e não recebe nada. A vida sempre segue, e a partida tem fim previsível.

## Dinheiro e carreira

- **Acerto no tema da carreira:** **promoção**, que aumenta o salário (júnior → pleno → sênior).
- **Acerto fora da carreira:** **prêmio em dinheiro**, maior que o normal ("aprender coisa nova").
- **Casas de Pagamento:** quem passa recebe o salário do seu nível.

O dilema é especializar-se (salário) ou diversificar (prêmios).

## As fases da vida

1. **Juventude.** Escola: múltipla escolha e prêmios pequenos. Termina na **Formatura**, uma encruzilhada: **Faculdade** (caminho mais longo, com mais perguntas, começa como pleno) ou **Trabalho direto** (curto, começa como júnior).
2. **Vida adulta.**
   - **Casa própria:** compra um imóvel, que conta no patrimônio e pode ser vendido.
   - **Parceria:** forma dupla com outro jogador; uma vez por fase, a dupla responde junta e divide o prêmio.
   - **Aprendiz:** dá direito a **pedir ajuda** a qualquer jogador uma vez; quem ajuda ganha parte do prêmio.
3. **Maturidade.**
   - **Viagem:** pergunta com figura (paisagem, cidade, bandeira) valendo o dobro.
   - **Investimento:** aposta dinheiro antes de responder; acertou, dobra; errou, perde.
   - **Desafio:** escolhe um adversário e o **tema da pergunta dele**; se ele errar, paga a você.
4. **Aposentadoria.** A última encruzilhada:
   - **Vila Tranquila:** aposentadoria garantida, sem mais perguntas;
   - **Mansão dos Sábios:** exige **3 perguntas abertas seguidas, de 3 temas diferentes**. Acertou todas, bônus grande; errou, volta para a Vila e paga uma taxa.

## Cartas de Destino

Casas próprias, para humor e virada. Exemplos:
- "Ganhou um concurso de culinária: responda uma de Cotidiano valendo o dobro";
- "Imposto de renda: pague 10% do dinheiro";
- "Herança de um tio distante";
- "Mudança de carreira: troque uma especialidade por outro tema";
- "Ano sabático: fique uma rodada sem jogar, mas receba o salário".

## Fim e contagem

O jogo acaba quando todos se aposentam, ou duas rodadas depois que o primeiro se aposenta. Patrimônio = dinheiro + imóveis + nível de carreira + bônus da aposentadoria.

## O que o modo exige do app

- Estado novo da partida: dinheiro, carreira, nível, imóveis e cartas de cada jogador.
- Tabuleiro novo: uma trilha com bifurcações, no lugar da espiral.
- Turno guiado: dado, escolha de risco, pergunta, resultado.
- Escolha do modo ao criar a partida. O Modo Master continua existindo, com as suas regras.

## Decisões em aberto

1. **Duração:** uma trilha de ~60 casas dá cerca de 1 hora com 4 jogadores. Mais curta ou mais longa?
2. **Parceria e aprendiz:** manter o lado "vida" (parceria, filhos) ou algo mais neutro (sócio, estagiário)?
3. **Sorte:** dado, cartas de Destino e Investimento dão sorte média. Menos sorte, para pesar mais o conhecimento?
4. **Peso do erro:** andar 1 casa e não receber nada é brando. Algo mais duro, como multa?
