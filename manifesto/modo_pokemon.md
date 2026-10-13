# Modo Pokémon

> **No app desde 2026-10-13.** Modo de jogo próprio do Mestre2, só com perguntas de pokémon. O MANIFESTO aponta para este documento (§6 "Coleções", §15, §16, §17) e guarda apenas o que vale para qualquer coleção. Tudo o que é específico do modo Pokémon fica aqui.
>
> As regras de conteúdo (MANIFESTO, Parte I) valem igualmente para as perguntas deste modo: tema e subtema, âncora, saturação, fontes, redação para voz e critérios de qualidade.

## O que é

O modo Pokémon é o **Linear só com perguntas de pokémon**. A trilha de 60 casas e as regras são as do Modo Linear (MANIFESTO §15): a vez, quem lê, o movimento de uma casa por acerto e a chegada. Muda só o conjunto de perguntas: todas saem da coleção `pokemon`, em qualquer casa.

## Decidido pelo autor (2026-10-13)

- **Modo:** o Linear só com pokémon, e não um tabuleiro com regras próprias.
- **Exclusividade:** as perguntas de pokémon **feitas a partir de 2026-10-13** são exclusivas do modo (`exclusiva: true`) e nunca saem no jogo original (Master, Trilha da Vida, Linear). As **86 perguntas de pokémon anteriores** receberam `colecao: "pokemon"` sem `exclusiva`, e continuam também no jogo original. A q09554 ("hipócrita") ficou fora da coleção.
- **Formas:** a coleção tem perguntas com figura e sem figura.
- **Tabuleiro:** escolhido entre três prévias (Rota, Tipos e Pokébola), ficou a **Rota**, descrita abaixo.
- **Tipo e atributos base** (aprovado a partir de 5 amostras): uma família de pergunta própria do modo, descrita abaixo, com as siglas dos atributos em inglês.
- **Variedade:** as regras de variedade das perguntas valem com menos rigor no modo Pokémon que no jogo original.

## Tabuleiro

É a mesma geometria do Linear (a faixa ondulada de 4 fileiras, `app/public/linear.js`), com outro desenho:

- **Fundo:** grama verde.
- **Trilha:** um caminho de terra.
- **Casas comuns:** numeradas, em dois tons de areia, **sem tema** (toda pergunta é de pokémon).
- **Casas especiais:** as mesmas 8 do Linear, escuras, com uma **pokébola** no lugar da ★. As ações delas ainda não foram definidas, como no Linear.
- **Início e chegada:** os do Linear (casa branca "INÍCIO" e xadrez).
- **Peões:** como no Linear, cada jogador tem um tema só para a cor do peão.

## A coleção `pokemon`

- Toda pergunta da coleção tem `colecao: "pokemon"`; as exclusivas também têm `exclusiva: true` (campos do MANIFESTO §10).
- Tema e subtema: **Entretenimento › Jogos Eletrônicos**, inclusive as de anime, filmes e card game.
- A âncora é o pokémon, o personagem, o jogo ou o lugar de que a pergunta trata. A saturação segue a regra geral: no máximo 3 perguntas por âncora, 2 se uma delas tiver figura, contando o banco inteiro.
- As exclusivas não contam nas metas do jogo original (MANIFESTO §17).

## Diretrizes de conteúdo

**Público.** Quem gosta de pokémon. As exclusivas podem ir um pouco mais fundo que as do jogo original, mas **nada de estatísticas, números da Pokédex, golpes obscuros ou detalhes que só um competidor saberia**. A exceção é a família "Tipo e atributos base", em que os atributos aparecem na figura como pista, e ninguém precisa sabê-los de cor.

**Variedade.** As regras de variedade (MANIFESTO §9 e a cota de emblemáticos das figuras) valem aqui com menos rigor: o modo é para fãs, e um lote pode ter mais pokémon conhecidos ou concentrar-se num assunto.

**Cobertura.** A franquia inteira, distribuída por **todas as gerações**. Os lotes de texto se dividem em quatro frentes, e um lote novo deve procurar âncoras e fatos ainda não usados:

| Frente | O que entra |
|---|---|
| **Anime e filmes** | Personagens humanos (Ash, Misty, Brock, Serena, Goh e outros), episódios marcantes, os filmes, a dublagem e a abertura no Brasil, os companheiros de Ash e o que aconteceu com eles |
| **Jogos** | Os jogos principais de cada geração e o que cada um trouxe de novo (mecânicas, regiões, recursos), os derivados (Snap, Stadium, Mystery Dungeon, Ranger, Go, Unite, Sleep), personagens dos jogos, equipes vilãs e seus líderes, campeões e a Liga |
| **Pokémon específicos** | A inspiração do design (animais reais, mitologia, folclore, objetos), curiosidades da Pokédex, evoluções incomuns (por troca, amizade, itens, lugares), formas regionais, megaevoluções, lendários e míticos de cada geração |
| **Franquia e cultura** | A história da Game Freak, da Creatures e da The Pokémon Company, o card game e as cartas famosas, produtos e recordes, o Pokémon no Brasil e no mundo, a febre de Pokémon Go, os nomes de pokémon e de lugares no Japão e no Ocidente |

**Perguntas com figura.** Seguem as regras de pokémon do MANIFESTO §6, que valem também para o jogo original:
- a arte oficial, com o crédito "© Nintendo / Creatures / GAME FREAK" e a origem registrada;
- a **silhueta preta** sobre raios azuis e amarelos, com a arte colorida só na resposta;
- a variedade: todas as gerações, formas básicas e intermediárias, pokémon menos conhecidos, e no máximo 1 emblemático (Pikachu, iniciais, lendários famosos) em cada 5 entidades.

### Tipo e atributos base

A figura é um **cartão** com o tipo (nomes oficiais no Brasil, nas cores dos tipos) e os seis atributos base, com as siglas em inglês (**HP, Atk, Def, SpA, SpD, Spe**), as barras e o **Total**, sem o nome. A pergunta é "De quem são estes tipos e atributos base? Quem é esse pokémon?", sempre de **múltipla escolha**, e a revelação é a arte oficial sobre os raios azuis e amarelos, como nas silhuetas.

- **Dados, não LLM:** os números e os tipos vêm das tabelas do PokéAPI, os mesmos da Bulbapedia, que é a fonte citada. A Bulbapedia bloqueia acesso automatizado. Valem os atributos atuais, que mudaram em algumas gerações.
- **Distratores:** escolhidos por código, entre pokémon que dividem ao menos um tipo com a resposta. A preferência vai para os de tipos iguais e os da mesma linha evolutiva. Os seis atributos de duas alternativas quaisquer diferem, somados, em pelo menos 40 pontos, para a pergunta ter uma só resposta.
- **Quais pokémon:** cotas por geração; espécies que trocam de forma (Deoxys, Rotom, Urshifu e afins) ficam de fora, porque o tipo e os atributos dependem da forma. A âncora é o pokémon, com a saturação geral, e uma âncora recebe no máximo uma pergunta desta família. Primeiro entram os pokémon que ainda não têm figura (silhueta), para a mesma resposta não aparecer duas vezes em figura.

### Outras famílias de figura

A família "o que é" pergunta o nome ("Quem é esse pokémon?"). A família "com o que se liga" vai um passo além, por exemplo em que pokémon ele evolui ou de quem se disfarça. A camada 3 é de aficionado de verdade, e não um lendário famoso.

## No app

- Em **Outros modos**, **Nova partida · Pokémon** grava `modo: "pokemon"` na partida e mostra quantas perguntas de pokémon há.
- O app trata a partida como Linear (tabuleiro, Sorteio, modo mesa e arrasto dos peões), mas a lista do sorteio é só a da coleção `pokemon`. O tabuleiro é desenhado por `svgPokemon`, em `linear.js`.
- O tema de toda casa é **Pokémon**, com a etiqueta em amarelo (`#ffcb05`) e azul (`#2a3a8c`) no lugar do arco-íris de "Qualquer tema". No Sorteio há um botão só, **Pokémon (N)**.
- Nos outros modos, as perguntas exclusivas nem entram na lista do sorteio.
- As regras do Firestore aceitam `modo: "pokemon"` (MANIFESTO §16).

## Produção

As exclusivas são feitas à mão, fora do autopiloto (que não as conta nem roda os catálogos delas):

```
python pipeline/colecao.py status pokemon                       # quantas perguntas a coleção tem, por forma
python pipeline/colecao.py figuras pokemon_modo --lotes N       # lotes de figura do catálogo exclusivo
python pipeline/rodar.py executar --encomenda pokemon_texto_NN  # um lote de texto
python pipeline/pokemon_status.py executar --quantidade 100   # um lote de "tipo e atributos base"
```

- **Figura:** o catálogo `pokemon_modo` do `plano.json` (com `colecao` e `exclusiva`), com a mesma silhueta do catálogo `pokemon` do jogo original.
- **Texto:** uma encomenda em `pipeline/encomendas.json` com `colecao: "pokemon"` e `exclusiva: true`, de Entretenimento › Jogos Eletrônicos. As observações repetem as diretrizes acima e dizem a frente do lote.
- **Tipo e atributos base:** `pipeline/pokemon_status.py`, sem LLM. Monta os cartões, a revelação e as alternativas, e registra as perguntas (lotes `pokemon_status_NNN`).
- O pipeline grava os dois campos em todas as perguntas do lote. Depois, `python app/exportar_perguntas.py` leva as perguntas ao app.

**Situação em 2026-10-13:** a coleção tem 515 perguntas.

| | Exclusivas | Também no jogo original |
|---|---|---|
| Com figura | 264 (100 de tipo e atributos base) | 75 |
| Sem figura | 165 | 11 |

Lotes rodados: figura de `fig_pokemon_modo_001` a `016`; texto de `pokemon_texto_01` a `06`; tipo e atributos base, `pokemon_status_001` (100 pokémon, das 9 gerações).

## Em aberto

- As ações das casas especiais (as mesmas pendências do Linear).
- Perguntas sugeridas para revisão, ainda no banco:
  - **q09852:** MissingNo. e o sexto item, obscura.
  - **q10042:** Ash e Satoshi, repete a q01316, com outra âncora.
  - **q10041** e **q10043:** a infância de Tajiri e os insetos, perto da q07404.
  - **q10049:** a chance de brilhante de 1 em 8 192, obscura.
