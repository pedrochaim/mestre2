# Modo Trilha da Vida — rascunho

> **Em concepção.** Segundo modo de jogo do Mestre2, separado do **Modo Master** (o tabuleiro em espiral do MANIFESTO §15), que continua em desenvolvimento como está. Nada deste documento está implementado. Nome provisório.
>
> As regras de conteúdo (MANIFESTO, Parte I) valem igualmente: o modo muda como as perguntas são usadas, e não as perguntas (princípio 1).
>
> Este documento separa **o que o autor decidiu** das **propostas**. Em 2026-10-01 o autor aceitou as propostas como estão, para refinar depois.

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

**Mão:** cada jogador tem uma **Mão**, que guarda as suas cartas. No app, ela fica no aparelho do jogador.

**Cartas**
- **Escolha o tema:** o jogador escolhe o tema da pergunta. Os temas amplos também aparecem nas cartas.
- **Desafio:** uma pergunta, de tema aleatório ou específico, direcionada a um oponente. Se ele acertar, quem jogou a carta anda também. **É cooperativa de propósito:** os dois ganham juntos.
- **Múltipla escolha:** a pergunta passa a ser de múltipla escolha.
- **Figura:** a pergunta passa a ser com figura.

**Não há dinheiro nem salário.** Saíram do rascunho anterior, com tudo o que dependia deles: patrimônio, casas de Pagamento, Casa própria, Investimento e níveis de carreira.

## Propostas (aceitas em 2026-10-01, a refinar)

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

**Casas de Ação** (o modelo é decisão do autor; a lista é proposta): um **baralho de 31 casas de Ação**, cada uma com 2 ou 3 subtemas parecidos, que juntas cobrem os **73 subtemas uma vez cada**. Algumas misturam temas quando o "programa de vida" pede (Grécia e Roma com Mitologia, festa junina com Culinária). Cada pergunta sorteia um dos subtemas da casa. A cada partida, o app sorteia as ~12 casas de Ação da trilha a partir do baralho, de modo que as partidas variam e todos os subtemas aparecem ao longo de várias partidas. Além delas, há as casas de Ação sem subtema, como "Tire férias".

| # | Casa de Ação | Subtemas |
|---|---|---|
| 1 | Vá ao cinema | Cinema · Séries e TV |
| 2 | Vá a um show | Música Brasileira · Música Internacional |
| 3 | Vá ao teatro | Teatro e Ópera · Música Clássica |
| 4 | Visite um museu de arte | Pintura · Escultura e Arquitetura |
| 5 | Leia um livro | Literatura Brasileira · Literatura Mundial · Língua Portuguesa e Expressões |
| 6 | Noite de jogos | Jogos Eletrônicos · Jogos de Tabuleiro e Cartas |
| 7 | Passe na banca de gibis | Anime e Mangá · Quadrinhos |
| 8 | Vá ao estádio | Futebol · Vôlei · Basquete |
| 9 | Domingo de esportes na TV | Tênis · Automobilismo · Outras Modalidades |
| 10 | Assista às Olimpíadas | Olimpíadas · Lutas e Artes Marciais |
| 11 | Vá ao médico | Corpo Humano e Medicina · Biologia e Genética |
| 12 | Olhe as estrelas | Astronomia e Espaço · Física |
| 13 | Ajude na lição de casa | Matemática · Química |
| 14 | Visite uma feira de tecnologia | Tecnologia e Computação · Invenções e História da Ciência |
| 15 | Plante uma árvore | Plantas e Fungos · Meio Ambiente e Energia |
| 16 | Vá ao zoológico | Mamíferos · Aves, Répteis e Anfíbios |
| 17 | Visite o aquário | Vida Marinha · Oceanos, Mares e Ilhas |
| 18 | Acampe na mata | Insetos e Invertebrados · Ecossistemas e Ambientes Extremos |
| 19 | Visite o museu de história natural | Dinossauros e Fósseis · Evolução Humana · Geologia e História da Terra |
| 20 | Viaje para o exterior | Países e Capitais · Cidades e Monumentos · Bandeiras e Símbolos |
| 21 | Faça uma expedição | Relevo e Maravilhas Naturais · Rios e Lagos · Clima e Biomas |
| 22 | Pegue a estrada pelo Brasil | Geografia do Brasil · Transportes |
| 23 | Faça intercâmbio | Povos e Idiomas · Costumes pelo Mundo |
| 24 | Vá ao shopping | Marcas e Produtos · Moda e Vestuário · Objetos do Dia a Dia |
| 25 | Vá à festa junina | Folclore e Tradições Brasileiras · Culinária e Bebidas |
| 26 | Visite ruínas antigas | Pré-História e Idade do Bronze · Egito Antigo · Américas Pré-Colombianas |
| 27 | Viaje à Grécia e a Roma | Grécia Antiga · Roma Antiga · Mitologia |
| 28 | Visite um castelo | Idade Média · Idade Moderna |
| 29 | Assista a um documentário histórico | Primeira Guerra Mundial · Segunda Guerra Mundial · Idade Contemporânea |
| 30 | Visite um museu de história | História do Brasil · História da África · Antigas Civilizações do Oriente |
| 31 | Participe de um debate | Filosofia · Religiões |

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
- **Recuperação:** para o líder não disparar, o que pesa mais com 3 jogadores: quem está em último compra uma carta extra por rodada, e a carta de Desafio, que é cooperativa, **não pode mirar o líder** (se quem joga é o líder, pode mirar qualquer um). Assim a cooperação ajuda quem está atrás a alcançar a frente; com 3 jogadores, os dois de trás se ajudam contra o líder.
- **Aposentadoria como escolha de velocidade:** a Mansão dos Sábios vira um atalho que exige 3 perguntas abertas seguidas; quem erra volta para o caminho da Vila Tranquila, mais longo e sem exigências.

**Movimento** (decidido pelo autor): **dado de 1 a 3** por acerto, trilha de ~40 casas. Dá a sensação de andar no tabuleiro sem que o dado decida a partida: 20 acertos andam algo entre 32 e 48 casas. **Errar não move o peão** (proposta): se errar andasse, os erros também levariam ao fim, e a meta deixaria de ser "20 acertos". A estimativa de duração, com 65% de acerto e ~40 segundos por pergunta, é de uma hora com 3 jogadores e 1h20 com 4.

**Encruzilhadas em acertos** (proposta): a Faculdade exige uns 3 acertos a mais que o Trabalho, mas dá cartas; a Mansão dos Sábios economiza uns 3 acertos, mas exige 3 perguntas abertas seguidas.

**Distribuição das casas** (proposta), na trilha de ~40 casas: 10 "Vá trabalhar", 12 de Ação, 8 de tema amplo, 6 em Branco e 4 especiais (encruzilhadas e Destino). As casas "Vá trabalhar" ficam espaçadas regularmente, mais ou menos a cada 4 casas: com o dado de 1 a 3, todos caem nelas com frequência parecida, e ninguém passa uma fase inteira sem trabalhar.

**Personalidade Competitivo** (a rever): "+1 casa ao acertar um tema da profissão" fica forte com 1/4 das casas de trabalho. Proposta: valer só nas casas "Vá trabalhar", ou trocar o efeito.

## Em aberto

Nenhuma decisão de regra em aberto no momento. As propostas foram aceitas para refinar depois.

## Prova de conceito do tabuleiro e da Mão

Os protótipos ficam em [`../prototipos/trilha_da_vida/`](../prototipos/trilha_da_vida/) e abrem no navegador. São **provas de conceito**: não estão no app e vão mudar.

- **`tabuleiro_v2.html` e `.png` (2026-10-01):** o tabuleiro com as regras atuais. Trilha em zigue-zague de baixo para cima, pelas fases da vida, com 44 casas pelo caminho mais curto até a Vila (Trabalho e Vila). Tipos de casa:
  - 💼 "Vá trabalhar", a cada ~4 casas;
  - casas de Ação com o ícone da carta sorteada do baralho de 31, incluindo ⛱️ "Tire férias";
  - casas de tema amplo, na cor do tema;
  - 🂠 em Branco;
  - 🔮 Destino.

  Encruzilhadas:
  - **Formatura:** Faculdade, +6 casas (~3 acertos) e com mais casas em Branco, ou Trabalho, o atalho;
  - **Aposentadoria:** o caminho da Vila Tranquila (9 casas) ou o atalho da Mansão dos Sábios (3 perguntas abertas seguidas).

  As duas chegadas valem como fim da corrida.
- **`mao.html` e `.png` (2026-10-01):** a **Mão** de um jogador, no aparelho dele, mostrando:
  - a profissão, com os dois temas, e a personalidade, que indica se já foi usada na fase;
  - a posição e os acertos;
  - as cartas da mão (3 de 3), cada uma com efeito e botão "Usar";
  - o aviso da Casa em Branco e os botões "Comprar carta" e "Rolar o dado".
- **`tabuleiro.html` e `.png`:** a primeira prova de conceito, anterior às regras atuais, mantida como histórico.

## O que o modo exige do app

- Estado novo da partida: profissão, personalidade e mão de cartas de cada jogador.
- Tabuleiro novo: uma trilha com bifurcações, com casas "Vá trabalhar", de Ação, de tema amplo e em Branco.
- Sorteio por **subtema**, além de por tema, para as casas de Ação. O app hoje só sorteia por tema.
- Turno guiado: dado, pergunta definida pela casa ou pela carta, resultado.
- Escolha do modo ao criar a partida. O Modo Master continua existindo, com as suas regras.
