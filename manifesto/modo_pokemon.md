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
- **Perguntas feitas de dados** (aprovadas a partir de amostras): além do cartão, **tipo**, **região** e **evolução**, descritas abaixo. A **versão brilhante** e o **sprite antigo** (Yellow e Crystal) foram testados e recusados, porque ficavam fáceis demais.
- **1000 perguntas novas**, em 4 lotes de cerca de 250, com todos os estilos: texto, silhueta e as perguntas feitas de dados.
- **Subtemas próprios do modo:** cinco, descritos abaixo. Um deles trata só dos **jogos da série principal**. A sobreposição entre eles é tolerada com **um pouco mais de folga** que entre os subtemas do jogo original.
- **Equilíbrio entre os subtemas:** o subtema com menos perguntas tem sempre **pelo menos 30%** das perguntas do subtema com mais.

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
- Tema e subtema: **Entretenimento › Jogos Eletrônicos**, inclusive as de anime, filmes e card game. Valem no jogo original e organizam o banco.
- Subtema da coleção (campo `subtema_colecao`): um dos cinco subtemas do modo, descritos abaixo.
- A âncora é o pokémon, o personagem, o jogo ou o lugar de que a pergunta trata. A saturação segue a regra geral: no máximo 3 perguntas por âncora, 2 se uma delas tiver figura, contando o banco inteiro.
- As exclusivas não contam nas metas do jogo original (MANIFESTO §17).

## Subtemas do modo

Dentro do modo, as perguntas se dividem em cinco subtemas próprios, gravados no campo `subtema_colecao`. Eles não substituem tema e subtema: toda pergunta continua em Entretenimento › Jogos Eletrônicos, e a lista canônica (MANIFESTO §3) não muda.

| Subtema | O que entra |
|---|---|
| **Quem é esse pokémon?** | Reconhecer o pokémon (arte, silhueta, cartão de tipos e atributos) e o que se sabe dele: origem do nome, inspiração do desenho, curiosidades da Pokédex, a lenda dos lendários e míticos |
| **Tipos e Evoluções** | Tipos (de um pokémon, a criação de um tipo), evoluções e o jeito de evoluir (pedras, troca, amizade, itens, lugares), megaevolução, formas regionais e outras formas |
| **Jogos da Série Principal** | Só os jogos principais, de Red e Green a Scarlet e Violet, com os remakes, as versões especiais (Yellow, Crystal, Emerald, Platinum), Let's Go e Legends: lançamento, consoles, capas, iniciais, o que cada jogo trouxe de novo, mecânicas, itens, onde encontrar um lendário, os bastidores do desenvolvimento |
| **Regiões e Treinadores** | As regiões e suas inspirações, cidades e lugares, líderes de ginásio, Elite dos Quatro, campeões, professores, rivais e equipes vilãs |
| **Anime, Filmes e Franquia** | O anime e os filmes, a dublagem, o mangá, o card game, os jogos derivados (Go, Snap, Stadium, Mystery Dungeon, Unite e outros), as empresas, os criadores e o Pokémon na cultura |

**Sobreposição.** No jogo original, uma pequena sobreposição é tolerada e o desempate vai para o subtema mais específico. Aqui a folga é um pouco maior: muita pergunta cabe em dois subtemas (Giovanni como líder de ginásio de Red e Blue é dos jogos e também dos treinadores), e vale o que estiver mais perto do **foco da pergunta**, sem desempate rígido. Uma pergunta sobre onde fica uma cidade vai para Regiões e Treinadores. Uma pergunta sobre o que acontece no jogo vai para Jogos da Série Principal. Uma pergunta sobre um treinador do anime vai para Anime, Filmes e Franquia.

**Equilíbrio.** O subtema com menos perguntas tem de ter pelo menos **30%** das perguntas do subtema com mais. O pipeline cuida disso:
- Recusa o lote que levaria um subtema acima do **teto**, que é o tamanho do menor dos outros dividido por 0,3. Vale para os lotes feitos de dados, os de silhueta e os de texto, contados pela quantidade pedida.
- Um lote que só aumenta os subtemas pequenos passa sempre, mesmo com a coleção ainda desequilibrada.
- `python pipeline/colecao.py status pokemon` mostra o teto de cada subtema e quanto falta para o piso.
- A regra e a lista dos subtemas ficam em `pipeline/banco.py` (`SUBTEMAS_COLECAO` e `PISO_SUBTEMA_COLECAO`).

**Quem preenche.**
- As perguntas feitas de dados recebem o subtema pela família: o cartão vai para Quem é esse pokémon?, tipo e evolução para Tipos e Evoluções, região para Regiões e Treinadores.
- Nas silhuetas, o catálogo `pokemon_modo` dá um subtema por família: "o que é" vai para Quem é esse pokémon?, "com o que se liga" para Tipos e Evoluções.
- Um lote de texto trata de um subtema só, que a encomenda grava (`subtema_colecao`).
- As 1515 perguntas anteriores a 2026-10-13 foram classificadas uma a uma.

## Diretrizes de conteúdo

**Público.** Quem gosta de pokémon. As exclusivas podem ir um pouco mais fundo que as do jogo original, mas **nada de estatísticas, números da Pokédex, golpes obscuros ou detalhes que só um competidor saberia**. A exceção é a família "Tipo e atributos base", em que os atributos aparecem na figura como pista, e ninguém precisa sabê-los de cor.

**Variedade.** As regras de variedade (MANIFESTO §9 e a cota de emblemáticos das figuras) valem aqui com menos rigor: o modo é para fãs, e um lote pode ter mais pokémon conhecidos ou concentrar-se num assunto.

**Cobertura.** A franquia inteira, distribuída por **todas as gerações**. Cada lote de texto trata de um dos cinco subtemas do modo e procura âncoras e fatos ainda não usados. Os lotes anteriores a 2026-10-13 seguiam quatro frentes (anime e filmes, jogos, pokémon específicos, franquia e cultura), que hoje se repartem entre os subtemas.

**Perguntas com figura.** Seguem as regras de pokémon do MANIFESTO §6, que valem também para o jogo original:
- a arte oficial, com o crédito "© Nintendo / Creatures / GAME FREAK" e a origem registrada;
- a **silhueta preta** sobre raios azuis e amarelos, com a arte colorida só na resposta;
- a variedade: todas as gerações, formas básicas e intermediárias, pokémon menos conhecidos, e no máximo 1 emblemático (Pikachu, iniciais, lendários famosos) em cada 5 entidades.

### Perguntas feitas de dados

Quatro famílias saem só de dados, sem LLM, pelo `pipeline/pokemon_dados.py`. Todas são de **múltipla escolha**.

**Tipo e atributos base.** A figura é um **cartão** com o tipo (nomes oficiais no Brasil, nas cores dos tipos) e os seis atributos base, com as siglas em inglês (**HP, Atk, Def, SpA, SpD, Spe**), as barras e o **Total**, sem o nome. A pergunta é "De quem são estes tipos e atributos base? Quem é esse pokémon?", sempre de **múltipla escolha**, e a revelação é a arte oficial sobre os raios azuis e amarelos, como nas silhuetas.

**Tipo, região e evolução.** A figura é a arte oficial sobre os raios azuis e amarelos, e a pergunta vai um passo além do reconhecimento:

| Família | Pergunta | Resposta e distratores |
|---|---|---|
| Tipo | "De que tipo é este pokémon?" | O tipo, ou os dois tipos ("Planta e Venenoso"); os distratores são combinações que existem em algum pokémon, parecidas com a resposta |
| Região | "Em que região este pokémon apareceu pela primeira vez?" | A região da geração em que estreou (Kanto a Paldea); os distratores são outras regiões, de preferência das gerações vizinhas. Ficam de fora os que estrearam fora da região da geração: Meltan e Melmetal, os de Hisui e os de Kitakami e da Academia Mirtilo |
| Evolução | "Em que pokémon este evolui?" (só quem tem uma evolução) ou "De que pokémon este evolui?" | O pokémon da evolução; os distratores dividem um tipo com ele e são de outra linha evolutiva |

Regras comuns:

- **Dados, não LLM:** os números e os tipos vêm das tabelas do PokéAPI, os mesmos da Bulbapedia, que é a fonte citada. A Bulbapedia bloqueia acesso automatizado. Valem os atributos atuais, que mudaram em algumas gerações.
- **Distratores do cartão:** escolhidos por código, entre pokémon que dividem ao menos um tipo com a resposta. A preferência vai para os de tipos iguais e os da mesma linha evolutiva. Os seis atributos de duas alternativas quaisquer diferem, somados, em pelo menos 40 pontos, para a pergunta ter uma só resposta.
- **Quais pokémon:** cotas por geração; espécies que trocam de forma (Deoxys, Rotom, Urshifu e afins) ficam de fora, porque o tipo e os atributos dependem da forma. A âncora é o pokémon, com a saturação geral, e uma âncora recebe no máximo uma pergunta de cada família. Um pokémon que já tem pergunta sobre o mesmo assunto, inclusive as do LLM ("Em que pokémon este evolui?"), não recebe outra. Cada pokémon tem no máximo **uma figura que pergunta o nome** (silhueta ou cartão), para a mesma resposta não aparecer duas vezes em figura. Primeiro entram os pokémon que ainda não têm figura.

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
python pipeline/colecao.py status pokemon                       # quantas perguntas a coleção tem, por forma e por subtema
python pipeline/colecao.py figuras pokemon_modo --lotes N       # lotes de figura do catálogo exclusivo
python pipeline/rodar.py executar --encomenda pokemon_texto_NN  # um lote de texto
python pipeline/pokemon_dados.py executar --atributos 70 --tipo 45 --regiao 30 --evolucao 40   # perguntas feitas de dados
```

- **Figura:** o catálogo `pokemon_modo` do `plano.json` (com `colecao` e `exclusiva`), com a mesma silhueta do catálogo `pokemon` do jogo original.
- **Texto:** uma encomenda em `pipeline/encomendas.json` com `colecao: "pokemon"`, `exclusiva: true` e `subtema_colecao`, de Entretenimento › Jogos Eletrônicos. As observações repetem as diretrizes acima e descrevem o subtema do lote.
- **Feitas de dados:** `pipeline/pokemon_dados.py`, sem LLM. Escolhe os pokémon, monta as figuras, a revelação e as alternativas, e registra as perguntas (lotes `pokemon_dados_NNN`; o primeiro, só de cartões, chamou-se `pokemon_status_001`). `amostras --pasta <pasta>` faz uma figura de cada família, sem gravar no banco.
- O pipeline grava `colecao`, `exclusiva` e `subtema_colecao` em todas as perguntas do lote. Depois, `python app/exportar_perguntas.py` leva as perguntas ao app.

**Situação em 2026-10-13:** a coleção tem 1515 perguntas.

| | Exclusivas | Também no jogo original |
|---|---|---|
| Com figura | 1062 (cerca de 890 feitas de dados: cartão, tipo, região e evolução; o resto, silhuetas) | 75 |
| Sem figura | 367 | 11 |

Por subtema do modo:

| Subtema | Perguntas | Com figura |
|---|---|---|
| Quem é esse pokémon? | 653 | 588 |
| Tipos e Evoluções | 458 | 423 |
| Regiões e Treinadores | 221 | 124 |
| Anime, Filmes e Franquia | 112 | 0 |
| Jogos da Série Principal | 71 | 2 |

Lotes rodados: silhuetas de `fig_pokemon_modo_001` a `021`; texto de `pokemon_texto_01` a `14`; feitas de dados, `pokemon_status_001` (100 cartões) e `pokemon_dados_002` a `006` (4 lotes de 185 e um de 15). As 1000 perguntas novas pedidas em 2026-10-13 vieram de `pokemon_texto_07` a `14` (202), dos lotes de silhueta 017 a 021 (43) e de `pokemon_dados_002` a `006` (755).

## Em aberto

- O app ainda não usa os subtemas do modo: o campo fica no banco e não vai para o app. Falta decidir para que eles servem no jogo (cor das casas, escolha de subtema no Sorteio ou só a aba Informações).
- **A coleção ainda está fora do equilíbrio.** O maior subtema tem 653 perguntas, e o piso de 30% é de 196. Para chegar lá, faltam 125 perguntas em Jogos da Série Principal (tem 71) e 84 em Anime, Filmes e Franquia (tem 112). Enquanto isso, só sai lote desses dois subtemas, ou de Regiões e Treinadores até o teto (hoje 236).

- As ações das casas especiais (as mesmas pendências do Linear).
- Perguntas sugeridas para revisão, ainda no banco:
  - **q09852:** MissingNo. e o sexto item, obscura.
  - **q10042:** Ash e Satoshi, repete a q01316, com outra âncora.
  - **q10041** e **q10043:** a infância de Tajiri e os insetos, perto da q07404.
  - **q10049:** a chance de brilhante de 1 em 8 192, obscura.
