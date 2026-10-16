# Modo Pokémon

> **No app desde 2026-10-13.** Modo de jogo próprio do Mestre2, só com perguntas de pokémon. O MANIFESTO aponta para este documento (§6 "Coleções", §15, §16, §17) e guarda apenas o que vale para qualquer coleção. Tudo o que é específico do modo Pokémon fica aqui.
>
> As perguntas exclusivas deste modo têm **regras de conteúdo próprias** (seção "Regras de conteúdo do modo"), que partem da Parte I do MANIFESTO e prevalecem sobre ela onde divergirem. O que elas não mudam segue o MANIFESTO.

## O que é

O modo Pokémon usa **a trilha do Linear só com perguntas de pokémon**. A trilha de 60 casas e as regras são as do Modo Linear (MANIFESTO §15): a vez, quem lê, o movimento de uma casa por acerto e a chegada. Todas as perguntas saem da coleção `pokemon`, e **a casa dita o teor da pergunta** (seção "Casas temáticas").

## Decidido pelo autor (2026-10-13)

- **Modo:** o Linear só com pokémon, e não um tabuleiro com regras próprias.
- **Exclusividade:** as perguntas de pokémon **feitas a partir de 2026-10-13** são exclusivas do modo (`exclusiva: true`) e nunca saem no jogo original (Master, Trilha da Vida, Linear). As **86 perguntas de pokémon anteriores** receberam `colecao: "pokemon"` sem `exclusiva`, e continuam também no jogo original. A q09554 ("hipócrita") ficou fora da coleção.
- **Formas:** a coleção tem perguntas com figura e sem figura.
- **Tabuleiro:** escolhido entre três prévias (Rota, Tipos e Pokébola), ficou a **Rota**, descrita abaixo.
- **Tipo e atributos base** (aprovado a partir de 5 amostras): uma família de pergunta própria do modo, descrita abaixo, com as siglas dos atributos em inglês.
- **Variedade:** as regras de variedade das perguntas valem com menos rigor no modo Pokémon que no jogo original.
- **Perguntas feitas de dados** (aprovadas a partir de amostras): além do cartão, **tipo**, **região** e **evolução**, descritas abaixo. A **versão brilhante** e o **sprite antigo** (Yellow e Crystal) foram testados e recusados, porque ficavam fáceis demais.
- **1000 perguntas novas**, em 4 lotes de cerca de 250, com todos os estilos: texto, silhueta e as perguntas feitas de dados.
- **Subtemas próprios do modo:** três, descritos abaixo: Pokédex, Jogos da Série Principal, e Anime, Filmes e Franquia. Um deles trata só dos **jogos da série principal** e do mundo deles. A sobreposição entre eles é tolerada com **um pouco mais de folga** que entre os subtemas do jogo original. A primeira versão tinha cinco: Quem é esse pokémon?, Tipos e Evoluções, Jogos da Série Principal, Regiões e Treinadores e Anime, Filmes e Franquia. Jogos e Regiões foram unidos, porque regiões e treinadores fazem parte dos jogos. Quem é esse pokémon? e Tipos e Evoluções viraram a Pokédex, porque tipos, evoluções e formas são justamente o que a Pokédex registra de cada pokémon.
- **Equilíbrio entre os subtemas:** o subtema com menos perguntas tem sempre **pelo menos 30%** das perguntas do subtema com mais. A regra vale **só na montagem dos lotes**: ela não pesa na definição dos subtemas nem na classificação de cada pergunta.

## Decidido pelo autor (2026-10-16)

- **Regras de conteúdo próprias**, separadas das do jogo original, por **herança com exceções**: o modo segue a Parte I do MANIFESTO, e as regras dele, descritas abaixo, prevalecem onde divergirem. O pipeline envia as duas ao gerador e ao crítico.
- **Sem cota de ângulos** nos lotes. Continuam os limites por âncora e a regra do molde de frase.
- **Saturação contada só na coleção**, com até **5 perguntas por âncora**. As exclusivas deixam de contar na saturação do jogo original.
- **Nomes:** o oficial brasileiro e o inglês, os dois, quando forem diferentes.
- **Silhueta e cartão:** o mesmo pokémon pode ter os dois ao mesmo tempo, e **todos os pokémon** podem entrar nesses dois tipos de pergunta, sem cota de emblemáticos.
- **Casas temáticas:** no tabuleiro do modo, **as casas ditam o teor da pergunta**, como os temas no Master. A variedade vem da composição do tabuleiro, e não de pesos no sorteio. A lista das casas está em definição (seção "Casas temáticas").
- **Casa "Quem é esse pokémon?":** é a casa das **silhuetas**. A pergunta é sobre o pokémon escondido, mas a resposta **não é necessariamente o nome**: pode ser o tipo, a evolução, a região de estreia. Cada pokémon tem **uma silhueta só**, e a pergunta varia de um pokémon para outro.
- **Tipo, região e evolução viram silhueta** e entram na casa "Quem é esse pokémon?": as 446 perguntas com a arte colorida passaram a mostrar a silhueta, com a arte na revelação, sem mudar pergunta nem resposta. Quando um pokémon ficaria com duas silhuetas, ficou a que não pede o nome, e a outra saiu da coleção: continua no banco, no jogo original se não era exclusiva, e fora de todos os modos se era (90 perguntas, lote `pokemon_silhuetas_2026-10-16` no log).
- **Saem as casas Tipos, Evolução e De onde vem o nome?**: o autor não gostou desses tipos de pergunta como casas próprias. As perguntas de origem do nome voltam para a casa do assunto delas.
- **Pelo menos metade das perguntas com figura:** regra editorial do modo (a fração pode ser maior), que o tabuleiro reflete, com metade das casas comuns de figura e metade de texto.
- **Uma casa geral** (o nome ainda não foi escolhido), para as perguntas que não se encaixam bem nas outras casas. O que entra nela ainda está em definição.

## Casas temáticas

No tabuleiro do modo, cada casa comum tem uma **casa temática**, que dita o teor da pergunta, como os temas no Master. A produção serve para abastecer cada casa com perguntas suficientes para uma partida sem repetição.

**Regra editorial: pelo menos metade das perguntas do modo tem figura**; a fração pode ser maior. O tabuleiro a reflete: as casas comuns alternam uma de figura e uma de texto. `python pipeline/colecao.py status pokemon` mostra a fração atual e, se ela cair abaixo do mínimo, quantas perguntas com figura faltam.

| Sigla (ícone) | Casa | Forma | O que sai nela | Perguntas em 2026-10-16 |
|---|---|---|---|---|
| **?** | **Quem é esse pokémon?** | Figura | A **silhueta** preta sobre os raios azuis e amarelos, com a arte colorida na revelação. A pergunta é sobre o pokémon escondido: o nome, o tipo, em quem evolui ou de quem evolui, a região de estreia. **Uma silhueta por pokémon**, com a pergunta variando entre os pokémon. Todos os pokémon podem entrar | 662 |
| **ATR** | **Cartão de atributos** | Figura | O cartão de tipo e atributos base: "De quem são estes tipos e atributos base?" | 385 |
| **JOGO** | **Jogos e Regiões** | Texto | O subtema Jogos da Série Principal | 297 |
| **TV** | **Anime e Filmes** | Texto | O subtema Anime, Filmes e Franquia | 205 |
| **DEX** | **Pokédex** | Texto | O subtema Pokédex: hábitos, lendas, formas, origem dos nomes, inspiração dos desenhos. Pode receber as entradas da Pokédex ("Que pokémon a Pokédex descreve assim…?"), ainda não produzidas: a PokéAPI só tem o texto em inglês | 108 |
| — | **Casa geral** (nome a definir) | Texto | O que não se encaixa bem nas outras casas. Em definição | — |

- **Como cada pergunta acha a sua casa:** o cartão vai para Cartão de atributos; qualquer outra figura, que agora é sempre silhueta, vai para "Quem é esse pokémon?"; o texto vai pelo subtema do modo. Não há campo novo no banco: a regra fica em `pipeline/banco.py` (`casa_pokemon`, `CASAS_FIGURA_POKEMON` e `CASAS_TEXTO_POKEMON`), e o export grava a casa de cada pergunta no campo `casa` do app.
- **De quem é este grito?** foi cogitada (os gritos estão na PokéAPI), mas o MANIFESTO §6 só aceita áudio de licença livre, e as perguntas com áudio estão fora do jogo. Só entra com uma exceção do autor.
- Os subtemas do modo e o piso de equilíbrio entre eles (abaixo) serão revistos a partir das casas.
- **Situação:** 63% das perguntas têm figura, acima do mínimo.

## Tabuleiro

É a mesma geometria do Linear (a faixa ondulada de 4 fileiras, `app/public/linear.js`), com outro desenho:

- **Fundo:** grama verde.
- **Trilha:** um caminho de terra.
- **Casas comuns:** cada uma tem a cor e o **ícone** da sua casa temática, desenhados em `linear.js` (`ICONES_POKEMON`), com formas genéricas e sem logotipos oficiais: a explosão amarela com "?" (Quem é esse pokémon?), as seis barras de atributos (Cartão de atributos), um console portátil (Jogos e Regiões), uma TV com antena (Anime e Filmes) e uma enciclopédia eletrônica com lente azul (Pokédex). Uma casa sem ícone mostra a sigla.
- **Legenda:** no canto inferior esquerdo, embaixo da trilha, uma caixa com o ícone e o nome de cada casa (na primeira linha, as de figura e a especial; na segunda, as de texto). Por isso o tabuleiro do modo é mais alto que o do Linear (1600 × 1000, `ALTURA_POKEMON`), e o modo mesa usa essa proporção. A regra do modo, no app, traz a mesma legenda. Nas posições dos temas do Linear, alternam uma casa de figura e uma de texto; as de figura revezam entre ? e ATR, e as de texto entre JOGO, TV e DEX. São 50 casas comuns, 25 de figura (13 "?", 12 ATR) e 25 de texto (9 JOGO, 8 TV, 8 DEX). Até 2026-10-16 as casas eram numeradas, em dois tons de areia, sem tema; no mesmo dia, uma primeira versão teve 8 casas temáticas em ciclo, com Tipos, Evolução e De onde vem o nome?.
- **Casas especiais:** as mesmas 8 do Linear, escuras, com uma **pokébola** no lugar da ★. A pergunta é de qualquer casa, e as ações delas ainda não foram definidas, como no Linear.
- **Início e chegada:** os do Linear (casa branca "INÍCIO" e xadrez).
- **Movimento: o dado de 1 a 3** (2026-10-16). Com cada pergunta, o sorteio rola um dado de 1 a 3, que **vale só para quem recebeu a pergunta**: se acertar, anda esse número de casas; errar não move o peão. Se a pergunta aberta passa adiante e outro jogador acerta, ele anda **uma casa**. No Linear, cada acerto continua valendo uma casa.
- **Peões:** como no Linear, cada jogador tem um tema só para a cor do peão.

## A coleção `pokemon`

- Toda pergunta da coleção tem `colecao: "pokemon"`; as exclusivas também têm `exclusiva: true` (campos do MANIFESTO §10).
- Tema e subtema: **Entretenimento › Jogos Eletrônicos**, inclusive as de anime, filmes e card game. Valem no jogo original e organizam o banco.
- Subtema da coleção (campo `subtema_colecao`): um dos três subtemas do modo, descritos abaixo.
- A âncora é o pokémon, o personagem, o jogo ou o lugar de que a pergunta trata. A saturação é a do modo (Regras de conteúdo do modo): no máximo 5 perguntas por âncora, 2 com figura, contando só a coleção.
- As exclusivas não contam nas metas do jogo original (MANIFESTO §17).

## Subtemas do modo

Dentro do modo, as perguntas se dividem em três subtemas próprios, gravados no campo `subtema_colecao`. Eles não substituem tema e subtema: toda pergunta continua em Entretenimento › Jogos Eletrônicos, e a lista canônica (MANIFESTO §3) não muda.

| Subtema | O que entra | Fica de fora |
|---|---|---|
| **Pokédex** | O pokémon como criatura, tudo o que a Pokédex registra dele: reconhecê-lo pela arte, pela silhueta ou pelo cartão de tipos e atributos; o tipo e a criação dos tipos; em quem ele evolui e como (pedra, troca, amizade, lugar, item); megaevolução, formas regionais, Gigantamax e outras formas (Rotom, Deoxys, Urshifu); a origem do nome; a inspiração do desenho; os hábitos; as lendas dos lendários e míticos | Onde encontrá-lo num jogo e a região em que estreou (vão para os Jogos); o pokémon de um personagem do anime (vai para Anime, Filmes e Franquia) |
| **Jogos da Série Principal** | Os jogos principais, de Red e Green a Scarlet e Violet, com os remakes, as versões especiais (Yellow, Crystal, Emerald, Platinum), Let's Go e Legends, e o mundo deles: lançamento, console, capa, iniciais, novidades, mecânicas, itens, enredo, onde encontrar um lendário, bastidores do desenvolvimento; as regiões e suas inspirações, cidades e lugares; líderes de ginásio, Elite dos Quatro, campeões, professores, rivais e equipes vilãs; a região em que um pokémon estreou | Jogos derivados, e o que treinadores, regiões e lugares fazem ou são no anime, nos filmes, no mangá e nos derivados (vão para Anime, Filmes e Franquia) |
| **Anime, Filmes e Franquia** | Tudo fora dos jogos principais: o anime e os filmes, a dublagem, o mangá, o card game, os jogos derivados (Go, Snap, Stadium, Colosseum, Mystery Dungeon, Ranger, Unite e outros), as empresas, os criadores, eventos e o Pokémon na cultura e no Brasil. Inclui **treinadores, rivais, vilões, regiões e lugares** como aparecem nessas mídias: os companheiros e rivais de Ash, a Equipe Rocket do anime, as regiões dos derivados (Orre, Fiore, Pasio, Lental) | — |

**Sobreposição.** No jogo original, uma pequena sobreposição é tolerada e o desempate vai para o subtema mais específico. Aqui a folga é um pouco maior, e vale o subtema mais perto do **assunto da pergunta**, sem desempate rígido:
- Pokémon ou jogo: o que vale para a espécie (tipo, evolução, forma, hábitos) é da Pokédex; o que depende de um jogo (onde encontrá-lo, um evento, uma mecânica de batalha como Dynamax ou movimento Z) é dos Jogos.
- Jogos ou outras mídias: decide **onde se passa o fato perguntado**, e não de onde vem o personagem. Brock como líder de ginásio em Red e Blue é dos Jogos; Brock viajando com Ash é do Anime. Um fato que vale igualmente nos jogos e no anime fica onde apareceu primeiro.
- O assunto decide, e não o foco do lote: uma pergunta sobre a origem do nome de um lendário, feita num lote de Jogos, vai para a Pokédex.

**Equilíbrio.** O subtema com menos perguntas tem de ter pelo menos **30%** das perguntas do subtema com mais. A regra vale **só para montar lotes**, decidindo que lote pode ser feito. Ela não entra na escolha dos subtemas nem na classificação: cada pergunta vai para o subtema do seu assunto, mesmo que isso deixe a coleção abaixo do piso, e aí os próximos lotes vão para o subtema que ficou pequeno. O pipeline cuida disso:
- Recusa o lote que levaria um subtema acima do **teto**, que é o tamanho do menor dos outros dividido por 0,3. Vale para os lotes feitos de dados, os de silhueta e os de texto; nos de texto, conta a quantidade pedida no subtema do foco.
- Um lote que só aumenta os subtemas pequenos passa sempre, mesmo com a coleção ainda desequilibrada.
- `python pipeline/colecao.py status pokemon` mostra o teto de cada subtema e quanto falta para o piso.
- A regra, a lista dos subtemas e o escopo de cada um ficam em `pipeline/banco.py` (`SUBTEMAS_COLECAO` e `PISO_SUBTEMA_COLECAO`).

**Quem preenche.**
- As perguntas feitas de dados recebem o subtema pela família: cartão, tipo e evolução vão para a Pokédex, região para os Jogos.
- Nas silhuetas, o catálogo `pokemon_modo` dá a Pokédex a todas as perguntas.
- Nos lotes de texto, o **gerador classifica cada pergunta** (`subtema_colecao` na saída), com a lista e o escopo dos subtemas no prompt. A encomenda diz só o foco do lote, que vale para a pergunta que voltar sem classificação.
- As perguntas anteriores foram classificadas uma a uma, e as dos lotes `pokemon_texto_15` a `24`, que tinham herdado o subtema do lote, foram revistas.

## Regras de conteúdo do modo

As perguntas exclusivas do modo têm regras de conteúdo próprias. Elas partem da Parte I do MANIFESTO e só dizem o que muda: o que não está aqui segue o MANIFESTO. O pipeline envia ao gerador, ao crítico e ao redator de figuras dos lotes exclusivos a Parte I e, depois dela, o texto entre as marcas abaixo.

<!-- INÍCIO DAS REGRAS DE CONTEÚDO DO MODO: o pipeline envia o texto daqui até a marca de fim, depois da Parte I do MANIFESTO, nos lotes exclusivos do modo Pokémon. -->

Estas são as regras de conteúdo do **modo Pokémon**, que valem para as perguntas exclusivas dele (`colecao: "pokemon"`, `exclusiva: true`). Elas partem da Parte I do MANIFESTO acima: princípios, classificação, ângulos, tipos de pergunta, redação para voz e critérios de qualidade continuam valendo. **Onde estas regras e o MANIFESTO divergirem, valem estas.**

### Público e profundidade

- **O público é quem gosta de pokémon:** já jogou alguns jogos, viu o anime e conhece pokémon de várias gerações. Isso substitui o "público informado, mas leigo" do MANIFESTO §7: termos da franquia (tipo, evolução, ginásio, insígnia, lendário, Pokédex, megaevolução, iniciais) dispensam explicação.
- **Pode ir mais fundo que no jogo original**, mas a régua da justiça continua: um fã diria "boa pergunta", e não "que detalhe arbitrário". Profundidade vem do fato, não da obscuridade (MANIFESTO, princípio 4).
- **Entram:** a origem dos nomes, a inspiração dos desenhos, as lendas dos lendários, como e em quem um pokémon evolui, as formas regionais, o enredo e os lugares dos jogos, os líderes e campeões, os bastidores da criação, o anime, os filmes, a dublagem e o Pokémon no Brasil.
- **Ficam de fora:** números da Pokédex, estatísticas, valores de dano e de atributos, probabilidades e mecânicas internas (a chance de um brilhante, taxas de captura), golpes e habilidades obscuros, falhas de programação e dados escondidos (MissingNo., itens duplicados), detalhes que só um competidor saberia, e perguntas que pedem listas. A exceção é a família "Tipo e atributos base", em que os atributos aparecem na figura como pista e ninguém precisa sabê-los de cor.

### Cobertura

A franquia inteira, distribuída por **todas as gerações**, e não só Kanto. Cada lote de texto tem um dos três subtemas do modo como foco e procura fatos ainda não usados.

### Variedade

- **Não há cota de ângulos nos lotes:** não valem o máximo de 25% num mesmo ângulo, o mínimo de 6 ângulos, o máximo de 30% para `identidade` + `atributo` nem o piso de 20% para `conexao` + `nome` (MANIFESTO §9). Um lote pode se concentrar no ângulo que o foco pede.
- **Continuam valendo:** no máximo 2 perguntas por âncora no mesmo lote, nunca com o mesmo ângulo; no máximo 2 perguntas com o mesmo ângulo por âncora, na coleção; e perguntas do mesmo ângulo não repetem o mesmo molde de frase (MANIFESTO §5).
- Na silhueta e no cartão de tipo e atributos **não há cota de emblemáticos: todos os pokémon entram**, famosos ou não, de todas as gerações e em todas as formas da linha evolutiva.

### Saturação e repetição

- **A conta é só na coleção.** Na saturação de uma âncora, contam as perguntas com `colecao: "pokemon"`, exclusivas ou não, e não as do jogo original. As exclusivas, por sua vez, não contam na saturação do jogo original, porque uma partida nunca sorteia os dois conjuntos.
- **No máximo 5 perguntas por âncora** na coleção, somando texto e figura, e no máximo **2 com figura**. Isso substitui o limite de 3 do MANIFESTO §4.
- **Silhueta e cartão ficam fora da saturação.** A silhueta da casa "Quem é esse pokémon?", qualquer que seja a pergunta, e o cartão de tipo e atributos não contam nos limites acima, e o mesmo pokémon pode ter os dois. Cada pokémon tem no máximo **uma silhueta** e **um cartão**.
- **Um fato, uma pergunta, na coleção inteira:** uma pergunta nova não pode perguntar um fato que outra pergunta da coleção já pergunta, **mesmo com outra âncora**. Ash e Satoshi é o mesmo fato, pela âncora Ash ou pela âncora Satoshi Tajiri; os nomes de cores das cidades de Kanto também, por Pallet ou por Viridian.

### Nomes

Os jogos ganharam tradução oficial para o português do Brasil a partir de Scarlet e Violet, e o anime sempre foi dublado. Os fãs mais antigos conhecem os nomes em inglês, e os mais novos, os brasileiros. Por isso:

- **Golpes, itens, habilidades, lugares, organizações e personagens:** quando o nome oficial brasileiro é diferente do inglês, a pergunta usa **os dois**.
  - **No enunciado:** o brasileiro primeiro, depois o inglês, ligados por "ou", sem parênteses: "Nos jogos de Kanto, quem lidera a Equipe Rocket, ou Team Rocket?".
  - **Na resposta:** o brasileiro, com o inglês entre parênteses: "Equipe Rocket (Team Rocket)". É o caso de parênteses "muito apropriado" do MANIFESTO §7.
  - **Na múltipla escolha:** as quatro alternativas seguem a mesma forma, para a resposta não se destacar. O limite de 4 palavras vale para cada nome.
  - **Nas variantes da âncora:** os dois nomes.
- **Só nome brasileiro oficial**, de que se tenha certeza: o dos jogos traduzidos, o da dublagem ou o do material oficial da The Pokémon Company no Brasil. Nada de tradução livre: na dúvida, só o nome em inglês.
- **Os nomes dos pokémon** são os mesmos no Brasil e em inglês, e vão uma vez só.
- Os **tipos** usam sempre os nomes oficiais brasileiros (Planta, Venenoso, Fantasma), como nos cartões.
- **"pokémon"**, em minúsculas, é o nome comum da criatura e não vai para o plural ("os pokémon"); **"Pokémon"**, com maiúscula, é a franquia.

### Redação para voz

Além do MANIFESTO §7:
- Nomes com símbolos ou sinais vão na forma falada: "Nidoran fêmea" e "Nidoran macho", e não com ♀ e ♂; "Porygon Z", sem hífen.
- Gerações por ordinal, por extenso: "na quarta geração", e não "na Gen 4".
- Siglas da comunidade (PP, HM, TM, IV, EV) não entram no enunciado; se o conceito importar, diga o que ele é.

### Atemporalidade

A franquia continua lançando jogos e pokémon. Nada de "o jogo mais recente", "a geração atual", "o último pokémon", "quantos pokémon existem", "quantas regiões há" nem de recordes de venda ou de audiência que ainda podem ser batidos. Contagens só de conjuntos fechados: "quantos pokémon tinha a primeira geração" vale.

### Fontes

A Bulbapedia é a referência da franquia, mas bloqueia acesso automatizado: o crítico não lê os trechos dela. Por isso, toda pergunta cita, além da Bulbapedia, uma página da **Wikipédia**, em inglês ou em português, que sustente o fato, sempre que houver uma. Uma pergunta só com a Bulbapedia depende do conhecimento do crítico e só passa com fato amplamente documentado.

### Distratores

Sempre da franquia: outros pokémon, personagens, lugares, itens ou jogos de Pokémon, de preferência da mesma geração ou de gerações vizinhas. Nunca uma alternativa de fora do universo Pokémon.

<!-- FIM DAS REGRAS DE CONTEÚDO DO MODO -->

## Perguntas com figura

Seguem as regras de pokémon do MANIFESTO §6, que valem também para o jogo original, e as regras de conteúdo do modo:
- a arte oficial, com o crédito "© Nintendo / Creatures / GAME FREAK" e a origem registrada;
- a **silhueta preta** sobre raios azuis e amarelos, com a arte colorida só na resposta;
- a variedade: **todos os pokémon**, de todas as gerações, famosos ou não, sem a cota de emblemáticos do jogo original. O catálogo `pokemon_modo` tem todas as 1025 espécies; nos que entraram em 2026-10-16, a camada vem dos dados (1: lendários e míticos; 2: formas finais; 3: formas básicas e intermediárias).

### Perguntas feitas de dados

Quatro famílias saem só de dados, sem LLM, pelo `pipeline/pokemon_dados.py`. Todas são de **múltipla escolha**.

**Tipo e atributos base.** A figura é um **cartão** com o tipo (nomes oficiais no Brasil, nas cores dos tipos) e os seis atributos base, com as siglas em inglês (**HP, Atk, Def, SpA, SpD, Spe**), as barras e o **Total**, sem o nome. A pergunta é "De quem são estes tipos e atributos base? Quem é esse pokémon?", sempre de **múltipla escolha**, e a revelação é a arte oficial sobre os raios azuis e amarelos, como nas silhuetas.

**Tipo, região e evolução.** A figura é a **silhueta** da casa "Quem é esse pokémon?", com a arte oficial na revelação, e a pergunta vai um passo além do reconhecimento. Até 2026-10-16, a figura era a arte colorida. Cada pokémon tem uma silhueta só, de qualquer família ou do catálogo de silhuetas:

| Família | Pergunta | Resposta e distratores |
|---|---|---|
| Tipo | "De que tipo é este pokémon?" | O tipo, ou os dois tipos ("Planta e Venenoso"); os distratores são combinações que existem em algum pokémon, parecidas com a resposta |
| Região | "Em que região este pokémon apareceu pela primeira vez?" | A região da geração em que estreou (Kanto a Paldea); os distratores são outras regiões, de preferência das gerações vizinhas. Ficam de fora os que estrearam fora da região da geração: Meltan e Melmetal, os de Hisui e os de Kitakami e da Academia Mirtilo |
| Evolução | "Em que pokémon este evolui?" (só quem tem uma evolução) ou "De que pokémon este evolui?" | O pokémon da evolução; os distratores dividem um tipo com ele e são de outra linha evolutiva |

Regras comuns:

- **Dados, não LLM:** os números e os tipos vêm das tabelas do PokéAPI, os mesmos da Bulbapedia, que é a fonte citada. A Bulbapedia bloqueia acesso automatizado. Valem os atributos atuais, que mudaram em algumas gerações.
- **Distratores do cartão:** escolhidos por código, entre pokémon que dividem ao menos um tipo com a resposta. A preferência vai para os de tipos iguais e os da mesma linha evolutiva. Os seis atributos de duas alternativas quaisquer diferem, somados, em pelo menos 40 pontos, para a pergunta ter uma só resposta.
- **Quais pokémon:** cotas por geração. O **cartão** vale para **todos os pokémon**, inclusive os que trocam de forma, com o tipo e os atributos da forma padrão (Deoxys Normal, Rotom Elétrico e Fantasma); fica fora da saturação e convive com a silhueta, mas cada pokémon tem um cartão só. Nas famílias **tipo, região e evolução**, as espécies que trocam de forma (Deoxys, Rotom, Urshifu e afins) ficam de fora, porque o tipo depende da forma; a âncora é o pokémon, com a saturação do modo, e uma âncora recebe no máximo uma pergunta de cada família. Um pokémon que já tem pergunta sobre o mesmo assunto, inclusive as do LLM ("Em que pokémon este evolui?"), não recebe outra. Primeiro entram os pokémon que ainda não têm figura.

### Outras famílias de figura

A família "o que é" pergunta o nome ("Quem é esse pokémon?"). A família "com o que se liga" vai um passo além, por exemplo em que pokémon ele evolui ou de quem se disfarça. A camada 3 é de aficionado de verdade, e não um lendário famoso.

## No app

- Em **Outros modos**, **Nova partida · Pokémon** grava `modo: "pokemon"` na partida e mostra quantas perguntas de pokémon há.
- O app trata a partida como Linear (tabuleiro, Sorteio, modo mesa e arrasto dos peões), mas a lista do sorteio é só a da coleção `pokemon`. O tabuleiro é desenhado por `svgPokemon`, em `linear.js`.
- No lugar dos temas, o app usa as **casas temáticas** (`CORES_POKEMON` e `casaPokemon` em `linear.js`; a casa de cada pergunta vem do campo `casa`). No Sorteio há um botão por casa e o botão **Pokémon (N)**, de qualquer casa, em amarelo (`#ffcb05`) e azul (`#2a3a8c`) no lugar do arco-íris de "Qualquer tema". Tocar num jogador seleciona a casa dele. O cartão da pergunta mostra a casa no lugar de tema e subtema.
- **O dado** aparece logo depois do sorteio, no cartão da pergunta do aparelho que sorteou ("Se Ana acertar, anda N casas", com o nome de quem recebeu a pergunta, e o botão **Acertou (+N)**; quando a pergunta passa adiante, o texto acrescenta "os outros, 1 casa", e o botão vira **Acertou (+1)**), e no modo mesa, no **canto inferior direito do tabuleiro**, à direita da legenda e com a mesma altura dela, também com o nome de quem recebeu a pergunta (e "Os outros: 1 casa" depois que ela passa adiante), para não tirar espaço do cartão da pergunta (2026-10-16). Ele rola uma vez, quando aparece. O valor fica no registro do sorteio (`dado`) e na pergunta em jogo da partida (`atual.dado`), e o acerto de quem recebeu a pergunta soma esse número à casa do peão (o primeiro de `tentativas` no registro do sorteio).
- A cor do peão continua sendo um dos temas do Master.
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
- **Texto:** uma encomenda em `pipeline/encomendas.json` com `colecao: "pokemon"`, `exclusiva: true` e `subtema_colecao` (o foco do lote), de Entretenimento › Jogos Eletrônicos. As observações descrevem só o foco: as regras de conteúdo do modo já vão ao gerador e ao crítico. O gerador classifica cada pergunta.
- **Feitas de dados:** `pipeline/pokemon_dados.py`, sem LLM. Escolhe os pokémon, monta as figuras, a revelação e as alternativas, e registra as perguntas (lotes `pokemon_dados_NNN`; o primeiro, só de cartões, chamou-se `pokemon_status_001`). `amostras --pasta <pasta>` faz uma figura de cada família, sem gravar no banco.
- Nos lotes exclusivos (texto e figura), o pipeline envia ao LLM a Parte I do MANIFESTO e, depois dela, as regras de conteúdo do modo (`DOC_COLECAO` em `pipeline/banco.py`); conta a saturação só na coleção, com o limite de 5 (`MAX_POR_ANCORA_COLECAO`); e não aplica as cotas de ângulo (`SEM_COTA_ANGULOS`). O gerador vê todas as perguntas de texto e todas as âncoras da coleção, com quantas perguntas cada uma tem.
- O pipeline grava `colecao` e `exclusiva` em todas as perguntas do lote, e `subtema_colecao` em cada uma. Depois, `python app/exportar_perguntas.py` leva as perguntas ao app.

**Situação em 2026-10-13:** a coleção tem 1747 perguntas.

| | Exclusivas | Também no jogo original |
|---|---|---|
| Com figura | 1062 (cerca de 890 feitas de dados: cartão, tipo, região e evolução; o resto, silhuetas) | 75 |
| Sem figura | 599 | 11 |

Por subtema do modo:

| Subtema | Perguntas | Com figura |
|---|---|---|
| Pokédex | 1119 | 1011 |
| Jogos da Série Principal | 423 | 126 |
| Anime, Filmes e Franquia | 205 | 0 |

O menor subtema tem 18% do maior, abaixo do piso de 30% (336). Como o piso só vale para montar lotes, a classificação não muda por isso: os próximos lotes vão para Anime, Filmes e Franquia (faltam 131) e para os Jogos (até o teto), e os da Pokédex, inclusive os feitos de dados, ficam parados até o piso ser atingido.

Lotes rodados: silhuetas de `fig_pokemon_modo_001` a `021`; texto de `pokemon_texto_01` a `24`; feitas de dados, `pokemon_status_001` (100 cartões) e `pokemon_dados_002` a `006` (4 lotes de 185 e um de 15). As 1000 perguntas novas pedidas em 2026-10-13 vieram de `pokemon_texto_07` a `14` (202), dos lotes de silhueta 017 a 021 (43) e de `pokemon_dados_002` a `006` (755). Para atingir o piso de equilíbrio, vieram `pokemon_texto_15` a `19` (Jogos da Série Principal, 140) e `pokemon_texto_20` a `24` (Anime, Filmes e Franquia, 92).

## Em aberto

- **Casas temáticas:** o nome da casa geral e o que entra nela (proposta: empresas e criadores, card game, jogos derivados, o Pokémon na cultura e no Brasil, eventos; pede reclassificar o texto); se as casas viram os subtemas do modo, no lugar dos três atuais e do piso de equilíbrio; se o ciclo das casas fica fixo ou é embaralhado; e as entradas da Pokédex.
- Na casa "Quem é esse pokémon?", as silhuetas que não pedem o nome (tipo, região) ainda não são produzidas: o catálogo `pokemon_modo` faz só o nome e a evolução.

- As ações das casas especiais (as mesmas pendências do Linear).
- Perguntas sugeridas para revisão, ainda no banco:
  - **q09852:** MissingNo. e o sexto item, obscura.
  - **q10042:** Ash e Satoshi, repete a q01316, com outra âncora.
  - **q10041** e **q10043:** a infância de Tajiri e os insetos, perto da q07404.
  - **q10049:** a chance de brilhante de 1 em 8 192, obscura.
  - **q11180:** os nomes de cores das cidades de Kanto, o mesmo fato da q09803 e da q10233, com outra âncora.
