# Manifesto de Perguntas — Mestre2

> **Versão preliminar 0.48 — 2026-10-10**
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

<!-- FIM DAS REGRAS DE CONTEÚDO: o pipeline envia ao gerador e ao crítico apenas o texto acima desta linha. -->

---

# Parte II — Organização e processo

## 10. Esquemas

### Pergunta ([`pergunta.schema.json`](pergunta.schema.json))

```json
{
  "id": "q00004",
  "tema": "História",
  "subtema": "Idade Média",
  "ancora": "imperio_mongol",
  "angulo": "autoria",
  "tipo": "multipla",
  "pergunta": "No século treze, qual líder fundou o Império Mongol?",
  "resposta": "Gengis Khan (nascido Temujin)",
  "distratores": ["Kublai Khan", "Átila", "Tamerlão"],
  "fonte": ["https://pt.wikipedia.org/wiki/Gengis_Khan"]
}
```

| Campo | Obrigatório | Descrição |
|---|---|---|
| `id` | ✔ | `q` + 5 dígitos. Opaco, permanente e nunca reutilizado. Atribuído pelo pipeline |
| `tema` | ✔ | Da lista canônica (§3) |
| `subtema` | ✔ | Da lista canônica. No desempate, o mais específico (§3) |
| `ancora` | ✔ | `id` de uma entrada do cadastro de âncoras (§4) |
| `angulo` | ✔ | Um dos 11 valores (§5) |
| `tipo` | ✔ | `aberta` ou `multipla` (§6) |
| `pergunta` | ✔ | Enunciado para voz (§7) |
| `resposta` | ✔ | Direta e específica, sem lista de variantes (§7) |
| `fonte` | ✔ | Lista com 1 ou mais URLs puras |
| `distratores` | só em `multipla` | Exatamente 3. Proibido em `aberta` (§6) |
| `autor` | — | Autor humano. Só é preenchido quando indicado |
| `dificuldade` | — | 1 (fácil) a 5 (difícil), **calculada** pela popularidade da âncora (§4). Gravada pelo pipeline, nunca escrita pelo LLM. **Apenas ilustrativa**: não entra em nenhuma decisão |
| `imagem` | — | Figura mostrada ao respondente (§6): `arquivo` (id da pergunta + extensão, em `pipeline/banco/imagens/`), `origem` (página no Commons ou, para Pokémon, no Bulbagarden Archives), `autor` e `licenca`. Opcional: `revelacao`, a imagem mostrada só depois da resposta (id + `_revelacao` + extensão), usada nas silhuetas de Pokémon |

### Âncora ([`ancora.schema.json`](ancora.schema.json))

O cadastro de âncoras (`pipeline/banco/ancoras.json`) é um *arquivo de autoridade*: cada entidade é definida uma única vez, e as perguntas apontam para o seu `id`.

```json
{
  "id": "gengis_khan",
  "nome": "Gengis Khan",
  "descricao": "Líder mongol que fundou o Império Mongol no século XIII.",
  "variantes": ["Genghis Khan", "Temujin", "Chinggis Khan"],
  "fontes": [
    "https://pt.wikipedia.org/wiki/Gengis_Khan",
    "https://www.britannica.com/biography/Genghis-Khan"
  ]
}
```

| Campo | Obrigatório | Descrição |
|---|---|---|
| `id` | ✔ | Minúsculas, sem acentos, com `_`. Permanente e nunca reutilizado |
| `nome` | ✔ | Forma preferida em português |
| `descricao` | ✔ | Uma frase que identifica a entidade sem ambiguidade |
| `fontes` | ✔ | Lista com 1 ou mais URLs de fontes confiáveis, em qualquer idioma |
| `variantes` | — | Outras grafias e nomes |
| `fundida_em` | — | `id` da entrada que absorveu esta. Só aparece após uma fusão (§11) |
| `popularidade` | — | **Calculada:** `periodo` (AAAA-MM/AAAA-MM), `wikidata` (id do item) e visitas mensais aos artigos em `pt` e `en` (§4) |

### Regra de evolução

Os esquemas e as listas fechadas só podem mudar **por acréscimo**: campos opcionais novos ou valores novos. Nunca por remoção, renomeação ou mudança de tipo. Assim, toda pergunta e toda âncora já criadas continuam válidas para sempre.

---

## 11. Fluxo de produção

O fluxo é executado pelo pipeline em [`../pipeline/`](../pipeline/README.md), que usa o Claude Code em modo não interativo, sem custo de API. Cada **encomenda** (tema, subtema, quantidade, número de perguntas de múltipla escolha, ângulos a priorizar) passa por cinco etapas:

```
1. GERAÇÃO     o LLM (Opus) recebe a Parte I deste manifesto e as âncoras e
               perguntas já existentes no subtema, e produz o lote;
               para cada âncora, informa nome, descrição, variantes e fontes
        ↓
2. VALIDAÇÃO   script: esquema, lista canônica, distratores e duplicatas
               de perguntas já existentes
        ↓
3. CRÍTICA     o pipeline baixa trechos das fontes; o LLM (Sonnet, esforço
               médio), sem web e numa chamada só, confere o fato nos
               trechos e aplica os critérios (§8), a redação para voz (§7)
               e a granularidade da âncora (§4); cada pergunta é
               aprovada, reescrita ou descartada
        ↓
4. ÂNCORAS     resolução contra o cadastro (abaixo); checagem das URLs;
               aplicação dos limites por âncora (§4) e da saturação
               (§17); comparação com as perguntas que o banco já tem
               sobre a mesma âncora, para não repetir o fato
        ↓
5. REGISTRO    atribuição dos ids; gravação no banco; avisos de variedade (§9)
        ↓
6. DIFICULDADE popularidade das âncoras novas na Wikipédia; dificuldade
               estimada de todas as perguntas (§4); sem LLM
```

A etapa 6 também pode rodar sozinha, com `python pipeline/rodar.py dificuldade`. Âncoras já medidas no período atual não são medidas de novo, a não ser com `--forcar`.

**O que bloqueia e o que só avisa:**
- **Descartam a pergunta:** erro de esquema ou da lista canônica, distrator igual à resposta, duplicata de pergunta existente, reprovação pelo crítico, âncora rejeitada, nenhuma fonte respondendo, limites por âncora.
- **Só geram aviso no log:** regras de variedade do lote (§9), enunciado com mais de 30 palavras, resposta longa, distrator com mais de 4 palavras.

**Trechos das fontes:** antes da crítica, o script baixa as páginas citadas em `fonte` (até 3 por pergunta; artigos da Wikipédia pela API, outras páginas sem o HTML) e separa de cada uma a abertura e as passagens com mais palavras em comum com a pergunta e a resposta. Se as fontes forem só da Wikipédia em inglês, lê também o artigo equivalente em português, porque as palavras da pergunta, em português, não casam com um texto em inglês. Páginas inexistentes ou de desambiguação chegam marcadas. O crítico não tem acesso à web: confere o fato nesses trechos e diz, em cada avaliação, de onde veio a confirmação (`apoio`): de um **trecho**, do seu **conhecimento** (quando o trecho não mostra o fato, e só para fatos amplamente documentados) ou se o trecho **contradiz** a pergunta. A contagem de `apoio` vai para o log e mostra quando a escolha de passagens falha.

**Economia de tokens:** o pipeline roda na cota do plano do claude.ai, e cada etapa usa o modelo mais barato que dá conta dela (§12). As encomendas têm **50 perguntas**, para diluir o custo fixo de cada chamada. Toda chamada leva um prompt de sistema mínimo, sem as configurações, os servidores MCP e as skills do Claude Code. O consumo de cada chamada fica em `pipeline/log/consumo.jsonl`, com o custo equivalente em API, que serve só para comparar.

**Reescrita faltando:** o esquema da crítica exige o campo `reescrita` em toda avaliação (vazio quando não se aplica). Se ainda assim o crítico decide reescrever uma pergunta e não manda a versão corrigida, o pipeline pede de novo só essas reescritas, numa chamada pequena. A pergunta só é descartada se a segunda tentativa também falhar. Nos três primeiros lotes de História, antes desta regra, 8 das 60 perguntas se perderam assim.

**O LLM nunca escreve no banco.** Ele devolve JSON num formato fixo, e o script decide o que gravar.

### Resolução de âncoras

1. **Âncora indicada pelo gerador:** se o gerador apontou o `id` de uma âncora da lista do subtema, que ele recebe com as descrições, usa esse `id` e acrescenta as variantes novas. Propostas do mesmo lote com o mesmo nome principal viram uma única âncora.
2. **Candidatas:** nos outros casos, um script seleciona as âncoras cadastradas com nomes iguais ou parecidos. **Nome igual não basta** para ligar a proposta a uma âncora (§4): até a v0.34 bastava, e isso juntou homônimos (§13). Nomes sem nenhuma letra latina nem algarismo, como "@" ou "花見", não entram na comparação.
3. **Juiz (LLM, Sonnet):** compara a proposta com as candidatas, **incluindo as descrições**, e decide se é a **mesma entidade** ou uma **entidade nova**.
4. **Fontes:** se nenhuma URL de uma âncora nova responder, ela é rejeitada, e as perguntas que dependem dela são descartadas.

**Na dúvida, criar em vez de fundir.** Uma duplicata é inofensiva e corrigível depois. Uma fusão errada corrompe as contagens, mostra a âncora errada na ficha do app e ainda acrescenta à âncora variantes que atraem novas fusões erradas.

As perguntas com figura seguem o mesmo caminho: a âncora proposta pelo redator vai ao juiz sempre que há candidatas com nomes parecidos.

### Consolidação periódica

O comando `consolidar` procura pares suspeitos de duplicata no cadastro inteiro, e o juiz decide sobre eles. A entrada absorvida **não é apagada**: recebe `fundida_em` com o `id` da entrada que a absorveu. Assim nenhum `id` deixa de existir, e perguntas antigas continuam válidas.

### Log

Toda decisão automática (descarte, reescrita, aprovação, decisão sobre âncora, fusão, aviso) é registrada com data, encomenda, etapa, decisão, motivo e a pergunta envolvida. É o que permite auditar e reverter qualquer decisão, sem que a aprovação humana seja obrigatória.

---

## 12. Registro de decisões

O esquema foi construído a partir do esquema do projeto anterior (`info/pergunta.schema.json`), com um critério de parcimônia: **um campo só entra se tiver uso concreto e não puder ser derivado de outro**.

| Decisão | Motivo |
|---|---|
| `id` opaco (`q` + 5 dígitos) | Um id que carrega tema ou subtema quebra se a pergunta for reclassificada |
| `tema` e `subtema` mantidos | Organizam o banco e as encomendas. Pequena sobreposição é tolerada, e no desempate vale o mais específico |
| `tema_clean`, `subtema_clean` e `microsubtema_clean` removidos | O código gera a versão sem acentos |
| `microsubtema` removido | Fronteiras arbitrárias e excesso de arquivos. Âncora e ângulo cumprem o papel |
| `tag` removido, e tags livres não adotadas | O que ofereceriam já está coberto por subtema e âncora. Tags livres se multiplicam sem controle |
| `ancora` adicionada, como string única | Controla profundidade e repetição. Se for preciso, `ancoras_extras` entra depois como campo opcional |
| Cadastro de âncoras separado | Evita depender só da Wikipédia em português. Descrição e variantes permitem desambiguar e deduplicar |
| `angulo` adicionado (11 valores) | É o único mecanismo que garante variedade no tipo de pergunta. `obra` saiu, e `atributo` entrou |
| `excecao` removido | No primeiro lote piloto, virou um molde repetitivo ("X é a cidade famosa, mas qual é a capital?") e tendia a perguntas de sim ou não. Removido antes de existir qualquer pergunta no banco, por isso sem violar a regra de evolução |
| `dificuldade` não estimada pelo LLM | Em iterações anteriores, o LLM não conseguiu estimá-la de forma confiável |
| `dificuldade` calculada pela popularidade da âncora na Wikipédia (§4) | Sinal objetivo, gratuito e reprodutível, disponível desde a primeira pergunta. Entra como campo opcional, o que a regra de evolução permite. Os dados de partidas não são usados por enquanto |
| Dificuldade apenas ilustrativa (§4) | É uma estimativa grosseira: mede a fama da âncora, e não a pergunta. Serve de informação na ficha, mas não é confiável o bastante para orientar sorteio, proporções ou geração |
| Época e região não adotadas | Podem ser derivadas das fontes da âncora, por exemplo pelo Wikidata |
| Verdadeiro ou falso removido | Funciona mal em voz alta e dá 50% de acerto no chute |
| `tipo` com valores `aberta` e `multipla` | Minúsculas e sem acento, como todos os valores fixos. O app traduz para exibição |
| `distratores` separados, só em `multipla` | Permite ao app embaralhar e aplicar o 50/50. Elimina a regra de equilibrar A, B, C e D |
| Sem campo ou fórmula de variantes da resposta | A resposta é direta, com parênteses só quando for muito apropriado. O questionador julga com bom senso |
| `autor` mantido como opcional | Registra a proveniência e custa nada |
| Nova lista de temas e subtemas (8 e 69) | Variedades extinto e redistribuído. Seis subtemas removidos por envelhecerem rápido ou serem difíceis de verificar. Duplicatas fundidas. Lacunas preenchidas. Detalhes em [`proposta_temas_subtemas.md`](proposta_temas_subtemas.md) |
| Fluxo sem validação manual obrigatória | Crítica e resolução de âncoras são automáticas, com log auditável |
| Pipeline pelo Claude Code, sem API | Sem custo adicional: usa a cota do plano do claude.ai. O formato JSON das respostas é garantido pela opção `--json-schema` |
| Granularidade da âncora conferida pelo crítico | Precisa valer para toda âncora nova, e não só para as que se parecem com alguma cadastrada |
| Critério "Precisa" (§8) | No primeiro piloto, o crítico aprovou "o navegador que batizou a Colômbia": conferia a resposta, mas não cada palavra do enunciado |
| Questionador e respondente mudam a cada pergunta (§15) | Não existe um mestre fixo. Todos leem e todos respondem ao longo da partida |
| Tabuleiro e sorteio separados (§15) | São funções independentes. O tabuleiro mudou várias vezes sem mexer no sorteio, e o sorteio serve a qualquer regra |
| Resposta só ao tocar (§15) | O questionador segura o aparelho perto de outros jogadores |
| Repetição permitida e marcada, com as novas primeiro (§15) | O banco ainda é pequeno, e bloquear a repetição travava o sorteio quando um tema se esgotava. A contagem vale entre todos os aparelhos da partida. Substituiu a proibição de repetir, das v0.7 a v0.16 |
| Um registro por sorteio, em `sorteios` (§16) | Com repetição, uma entrada por pergunta faria o resultado da segunda vez apagar o da primeira |
| Avanço pelo sorteio e à mão (§15) | O sorteio registra o resultado de cada pergunta. O ajuste manual cobre correções e regras que o app ainda não implementa |
| Tabuleiro em dois estágios, inspirado no *Master* (§15) | Primeiro o jogador domina o próprio tema, depois dá uma volta por todos os temas |
| Anel central com uma casa por tema, terminando no tema do jogador (§15) | Todos passam por todos os temas, e a última pergunta de cada um é do seu tema. Substituiu a sequência de cores sorteada por partida, usada nas v0.10 e v0.11 |
| Tema inicial sorteado, com troca à mão (§15) | Evita repetir temas entre jogadores sem impedir ajustes do grupo |
| Os 8 temas no tabuleiro, mesmo sem perguntas (§15) | O tabuleiro fica completo desde já. O app avisa quando o tema não tem perguntas |
| Casas do estágio 1 do mesmo tamanho (§15) | Todas as casas valem o mesmo, e o desenho mostra isso. O preço é a borda em cata-vento, em vez de um círculo |
| Cores dos temas herdadas do app antigo (§16) | Continuidade com o jogo anterior. A ordem das cores é a ordem dos braços e do anel |
| Posição do peão guardada no campo `pontos` (§16) | Evitou migrar os dados das partidas existentes. O nome ficou por compatibilidade |
| App sempre escuro (§16) | Poupa bateria em celulares com tela OLED |
| Firebase, sem login, com código de partida (§16) | Tempo real entre aparelhos sem servidor próprio. Entrar com um código curto tem menos atrito que uma conta |
| Perguntas com figura (§6) | Ampliam o repertório com reconhecimento visual. Exceção ao princípio 2: o respondente vê a figura, mas nunca o texto |
| `imagem` como campo opcional, sem novo `tipo` nem novo ângulo | Uma pergunta com figura pode ser aberta ou múltipla, e o ângulo segue a relação entre resposta e âncora. Campo opcional respeita a regra de evolução |
| Arte oficial aceita enquanto o jogo não tiver fins comerciais (§6) | Pokémon e personagens de anime, mangá e quadrinhos não têm imagens livres. A licença livre continua sendo o padrão para o resto |
| Catálogo de personagens com Fandom, AniList, superhero-api e Wikipédia (§6) | Nenhuma fonte cobre tudo: a imagem da Wikipédia às vezes mostra vários personagens ou texto, o AniList só tem o busto, e o Fandom tem arte de corpo inteiro, mas bloqueia robôs (o pipeline baixa pelo curl) |
| Cenas de filmes e séries pelo TMDB, só as sem texto (§6) | O Commons só tem cenas de produções antigas (trailers e fotos de divulgação em domínio público). O TMDB tem cenas de quase toda produção, em alta resolução, e marca as imagens sem texto. Exige uma chave gratuita, que fica fora do git, porque o repositório é público |
| Um terço de cinema e TV brasileiros, e nada de spoilers (§6) | O público é brasileiro, e o cinema americano domina qualquer fonte. Uma pergunta sobre o final estraga a obra para quem ainda vai ver |
| Imagens copiadas para o banco, com o id da pergunta no nome | Licença livre com autor registrado. O nome do arquivo vira o id da pergunta, porque o nome original costuma entregar a resposta, e a cópia não depende de link externo |
| Perguntas em arquivo estático, fora do Firestore (§16) | O banco é pequeno e só muda quando o pipeline roda. Cada leitura no Firestore seria custo e latência à toa |
| Crítica com trechos das fontes baixados pelo script, sem web (§11) | Abrindo as fontes por conta própria, o crítico gastava de 12 a 22 turnos por lote, e cada turno relia o contexto inteiro. Com os trechos no prompt, a crítica é uma chamada só: no lote *Idade Média*, custou US$ 0,22, contra US$ 0,72 a 0,89 do Opus com web, e as decisões bateram em 19 de 20 |
| Crítico Sonnet com esforço médio (§11) | Testado no mesmo lote: o Sonnet com esforço alto e web custou o mesmo que o Opus (US$ 0,72), porque raciocinou mais; com esforço médio e web, não abriu nenhuma fonte. Com os trechos no prompt, o esforço médio basta para conferir o fato |
| Lotes de 50 perguntas (§11) | Cada chamada tem um custo fixo (manifesto, âncoras e perguntas já existentes, prompt de sistema) que se dilui num lote maior. Primeiro lote de 50 (*História do Brasil*): US$ 1,49 por 47 perguntas no banco, ou 3,2 centavos cada, contra 4,0 no lote de 20 da *Segunda Guerra*. A variedade e a taxa de aproveitamento se mantiveram |
| Prompt de sistema mínimo em toda chamada (§11) | O prompt padrão do Claude Code custava cerca de 6 mil tokens por chamada; o mínimo, cerca de 900 |
| Quatro subtemas acrescentados: Geografia do Brasil, História da África, Biologia e Genética, Meio Ambiente e Energia (§3) | Preenchem lacunas apontadas na revisão dos subtemas: o público é brasileiro, a África não tinha lugar, e Ciências tinha poucos subtemas. Renomear, dividir e fundir foi descartado, porque a lista só cresce por acréscimo |
| Nome igual não liga uma proposta a uma âncora; vai ao juiz (§11) | A correspondência exata, sem acento, juntou homônimos: Pelé e pele, Cruzeiro e Cruzeiro do Sul, o navegador e o clube Vasco da Gama. Nomes só com caracteres não latinos ficavam vazios e casavam entre si (Hanami e Tetris foram parar em Arroba) |
| Perguntas com figura passam por crítica e checagem de repetidos (§17) | O redator que escreve também aprovava, sem segunda leitura. Uma figura repetiu o fato de uma pergunta de texto (o inventor da pilha de Volta), com outra data |
| Metas de catálogo de até 40% do tema, escolhidas pelo déficit relativo (§6, §17) | As metas antigas passavam do teto de 40% (pokémon 58%), e o déficit absoluto fazia os catálogos grandes monopolizarem as sessões |
| Manifesto dividido em duas partes | O gerador e o crítico recebem só as regras de conteúdo (Parte I), sem o ruído de esquemas, processo e histórico |

---

## 13. Lições dos lotes piloto

Dois lotes piloto de 30 perguntas foram rodados em 2026-09-29: *Geografia › Países e Capitais* e *Esportes › Futebol*.

| | Países e Capitais | Futebol |
|---|---|---|
| Entraram no banco | 29 | 30 |
| Reescritas pelo crítico | 6 | 7 |
| Descartadas | 1 | 0 |

- **A geração é boa e variada.** Os 11 ângulos apareceram, dentro dos limites, e poucas perguntas eram óbvias.
- **O crítico pega erros reais**, abrindo as fontes: um "único" contestável (Kiribati), datas erradas (Juventus), respostas duplas (apelidos de Yashin, cargos de Weah) e vazamentos (Seul e Astana, Palestra Itália).
- **Pontos fracos observados:**
  - no primeiro piloto, antes do critério "Precisa", o crítico deixou passar uma imprecisão de redação (`q00008`, Colombo);
  - uma resposta genérica passou ("Um pássaro", `q00031`), o que motivou a regra "resposta específica" (§7);
  - o juiz de âncoras foi chamado três vezes à toa, para pares como "River Plate" e "Ancara". O filtro de candidatas é frouxo demais para nomes curtos.

**Primeiras figuras, depois apagadas (2026-09-30).** As 37 primeiras perguntas com figura (`q00060`, `q00061`, `q00285` a `q00299` e `q00346` a `q00365`) usavam a imagem só como contexto: "este animal é parente de qual outro?", "esta pirâmide cria a ilusão de qual animal?". Trocar "este animal" pelo nome dava no mesmo. Foram todas apagadas e refeitas como perguntas de reconhecimento (§6). Os ids apagados não voltam a ser usados, porque partidas antigas guardam os ids sorteados (`maior_id`, em `pipeline/banco/estado.json`). As lições abaixo, sobre imagens e fontes, continuam valendo.

**Piloto de figuras (2026-09-30).** Duas perguntas feitas à mão, fora do pipeline, em *Geografia › Cidades e Monumentos*: `q00060` (Ponte Luís I → Porto, aberta) e `q00061` (Hallgrímskirkja → Reykjavík, múltipla). As imagens vieram da propriedade P18 do Wikidata, que aponta a imagem principal de cada entidade.
- A imagem principal do Wikidata foi boa nos dois casos: sem texto, sem marca d'água e com licença livre.
- **É preciso olhar a foto e ler a fonte antes de escrever o enunciado.** "Que cidade é esta?" teria duas respostas, porque a ponte liga duas cidades. A foto foi tirada de Gaia, e o enunciado passou a perguntar pela cidade "do outro lado da ponte".

**Figuras de animais (2026-09-30).** Cinco perguntas feitas à mão em *Natureza › Mamíferos* (`q00285` a `q00289`: ocapi, társio, pangolim, damão e panda-vermelho), com a imagem principal do Wikidata.
- A imagem do Wikidata para "pangolim" era uma montagem de uma foto com duas ilustrações; foi trocada pela de uma espécie. Daí a regra de só usar fotos de um único assunto.
- Duas afirmações foram ajustadas ao que a fonte diz: o damão não é "o parente mais próximo do elefante" (a fonte diz que isso é contestado), e sim "muito mais aparentado" a ele que a um roedor, numa múltipla escolha sem sirênios entre as opções; o nome Firefox "teria vindo" de um apelido do panda-vermelho, como a fonte registra.

**Folclore com figura (2026-09-30).** Vinte perguntas feitas à mão em *Cotidiano › Folclore e Tradições Brasileiras* (`q00346` a `q00365`), logo depois do lote automático de 50 do mesmo subtema.
- O lote automático já tinha usado os fatos mais conhecidos (a peneira do Saci, o padre da Mula, os pés do Curupira, os três pedidos da fitinha). As perguntas com figura buscaram outros fatos sobre os mesmos assuntos.
- A imagem principal do Wikidata não existia para vários temas de folclore. Elas vieram de buscas no Commons, e as placas com o nome do assunto foram recortadas (Curupira e carranca).
- Uma pergunta com figura não pode ser gravada enquanto um lote roda: o pipeline carrega o banco no início e o grava inteiro no fim, o que apagaria o que fosse acrescentado no meio.

**Comparação de críticos (2026-09-30).** O lote *História › Idade Média* foi criticado de novo em três configurações, sem mexer no banco (`pipeline/comparar_critico.py`):

| Crítico | Custo | Turnos | Decisões iguais às do Opus |
|---|---|---|---|
| Opus, esforço alto, com web (original) | US$ 0,72–0,89 | 17 | — |
| Sonnet, esforço alto, com web | US$ 0,72 | 12 | 15 de 20 |
| Sonnet, esforço médio, com web | US$ 0,12 | 2 (não abriu as fontes) | 16 de 20 |
| **Sonnet, esforço médio, com trechos** | **US$ 0,22** | **1 chamada** | **19 de 20** |

- Com os trechos, o Sonnet confirmou 14 fatos num trecho e 6 pelo próprio conhecimento, e pegou a página de desambiguação de Orban.
- **Nuances que escaparam** ao Sonnet médio: a destruição da frota mongol de 1274 por tufão é contestada (só o Opus notou); "batalhas navais" entrega a resposta do fogo grego (só o Sonnet alto notou).

**Primeiros lotes com o pipeline econômico (2026-09-30).**

| | *Segunda Guerra Mundial* (20) | *História do Brasil* (50) |
|---|---|---|
| Entraram no banco | 19 | 47 |
| Geração (Opus, alto) | US$ 0,52 | US$ 1,07 (36 mil tokens de raciocínio) |
| Crítica (Sonnet, médio, com trechos) | US$ 0,22 | US$ 0,39 |
| Juiz de âncoras | US$ 0,02 | US$ 0,04 |
| **Custo por pergunta no banco** | **4,0 centavos** | **3,2 centavos** |
| Fato confirmado num trecho | 19 de 20 | 44 de 50 |
| Reescritas / descartadas pelo crítico | 2 / 1 | 5 / 2 |

- Nenhuma reescrita se perdeu: o esquema com `reescrita` obrigatória dispensou a chamada de recuperação.
- O crítico com trechos pegou fonte inexistente (Pampulha), fonte sobre a entidade errada (o objeto lampião, e não Lampião) e uma "explicação mais aceita" que a fonte trata só como uma das versões (pau-brasil).
- O ângulo `nome` passou um pouco do limite nos dois lotes (5 de 19 e 12 de 47).

**Fontes em inglês (2026-09-30).** No lote *Natureza › Mamíferos*, 57 das 59 fontes eram da Wikipédia em inglês, e o crítico confirmou 27 de 50 fatos pelo próprio conhecimento, sem trecho. A causa: a escolha de passagens compara palavras da pergunta em português ("algas", "dentes") com um texto em inglês ("algae", "teeth"). Com o artigo equivalente em português, a resposta passou a aparecer nos trechos de 41 das 50 perguntas (antes, 19); em *Culinária e Bebidas*, de 49 (antes, 37). Os trechos do lote de Mamíferos cresceram de 108 mil para 192 mil caracteres, cerca de US$ 0,08 a mais na crítica.

**Revisão do pipeline (2026-10-01, com 1 699 perguntas).** Uma leitura completa do código e do banco achou três falhas, já corrigidas:
- **Homônimos fundidos:** 15 perguntas estavam ligadas à âncora errada, entre elas a pele (em Pelé), a constelação do Cruzeiro do Sul (no clube), o retrato de George Washington (na cidade), a bandeira da Itália (na seleção) e o Negrinho do Pastoreio (no brigadeiro, que no Sul também se chama negrinho). Cada fusão errada acrescentava variantes à âncora, que atraíam a fusão seguinte. Foram criadas 13 âncoras novas, as variantes erradas foram tiradas e a resolução mudou (§11).
- **Figuras sem segunda leitura:** a figura `q01674` repetia o fato de `q00901` com outra data e foi apagada. As figuras agora passam por crítica e checagem de repetidos (§17).
- **Falso alarme de cota:** o detector reconhecia "limit", "rate" e "exceed" em qualquer mensagem, inclusive "Tempo limite excedido" e "failed to gene*rate*". Um erro assim faria o autopiloto esperar e tentar de novo para sempre.

**Pokémon com figura removidas (2026-10-01).** As 57 perguntas "Qual é este pokémon?" foram apagadas, com as imagens, para que o estilo delas seja refeito. O catálogo `pokemon` fica pausado no autopiloto (`pausados` em `pipeline/banco/estado.json`) até o novo estilo ser definido. As âncoras continuam no cadastro. O exportador do app passou a apagar de `app/public/img/` as imagens que nenhuma pergunta usa.

**Pokémon em silhueta (2026-10-01).** O novo estilo, aprovado a partir de uma amostra, é a silhueta preta sobre raios azuis e amarelos, com a arte colorida na resposta (§6). O primeiro lote (`fig_pokemon_001`) curou o catálogo do zero e aproveitou 12 de 12. Oito perguntas são de nome ("Quem é esse pokémon?"), e as outras quatro vão um passo além: de quem o Mimikyu se disfarça, quem evolui para Charizard, Gyarados e Scizor. O catálogo saiu da pausa.

**Primeiro lote de cenas (2026-10-01).** O lote `fig_cenas_001` aproveitou 8 de 12: as imagens do TMDB vieram sem texto, e o redator reprovou uma montagem tipo pôster (*Bacurau*) e duas imagens genéricas, sem nada que identificasse a obra (*Vidas Secas*, *Hoje É Dia de Maria*). O lote saiu quase todo brasileiro, embora o catálogo fosse variado: a curadoria lista as entidades em blocos, e a seleção pegava a ordem original. Agora cada camada é embaralhada a cada lote.

**Recrítica das figuras (2026-10-01).** As 237 perguntas com figura feitas pelo pipeline antes da crítica passaram por ela (`pipeline/recriticar_figuras.py`): 192 aprovadas, 36 reescritas, 7 apagadas e 2 mantidas por revisão humana, contra o crítico. Nenhuma repetia uma pergunta da mesma âncora. O defeito mais comum era a **pista que entrega a resposta sem olhar a figura**: "Chanceler de Ferro" (Bismarck), "único satélite natural da Terra" (Lua), "feijão preto e carnes" (feijoada), "apelidada de Rainha" (Hortência). Vieram depois distratores que também estavam certos (a arara-de-garganta-azul também tem dorso azul e peito amarelo) e imprecisões (o maior papagaio *voador*). As duas reescritas recusadas trocavam uma pista por outra que entregava ainda mais. As 185 perguntas com figura feitas à mão não passaram pela recrítica. O custo foi de cerca de US$ 5, ou 2 centavos por pergunta.

Também: o custo das chamadas de figura era registrado em `consumo.jsonl` com o nome do lote de texto anterior, na etapa "registrar" (cerca de US$ 6). Agora cada chamada leva o id do lote de figuras e a sua etapa.

---

## 14. Pendências

- [ ] **Filtro de candidatas do juiz de âncoras:** só enviar ao juiz candidatas que tenham uma palavra significativa em comum com a proposta (§13).
- [ ] **Comando `recriticar`:** passar de novo pela crítica perguntas que já estão no banco, sempre que os critérios mudarem. Primeiro uso: `q00008` e `q00031`.
- [ ] **Acompanhar o crítico Sonnet** (§13): conferir nos próximos lotes se ele deixa passar nuances (fatos contestados, vazamentos) e quantas confirmações vêm de `conhecimento` em vez de `trecho`. Se precisar, ajustar o tamanho dos trechos (hoje cerca de 20 mil tokens por lote) ou a escolha de passagens.
- [ ] **Esforço da geração:** a geração (Opus, esforço alto, US$ 0,50 a 0,70 por lote) virou a etapa mais cara. Testar esforço médio.
- [ ] **Calibrar a dificuldade estimada** (§4): conferir se as faixas e o peso de cada língua batem com a experiência de jogo. Como a informação é só ilustrativa, isso não tem prioridade.
- [ ] **Calibrar os limites por âncora** (§4) e as regras de variedade (§9), à medida que o banco crescer.
- [x] **Figuras no pipeline** (§6, §17): feito em 2026-10-01 (`pipeline/figuras.py`).
- [x] **Saturação por âncora no banco inteiro** (§17): feito em 2026-10-01.
- [x] **Proporção de perguntas com figura:** definida em 25% do banco (§17).
- [ ] **Tamanho do tabuleiro** (§15): 5 casas no estágio 1 (a casa grande do início e mais 4; eram 8 até 2026-10-10) e 8 no estágio 2 (uma por tema), ou seja, 13 acertos até a chegada. Ajustar depois de jogar, se preciso.
- [x] **Como a vez passa** (§15): decidido em 2026-10-09. A vez gira na ordem do placar, lê o seguinte da fila, e a pergunta aberta passa adiante a cada erro.
- [ ] **Acesso ao app** (§16): hoje não há login, e quem conhece o código de uma partida pode alterá-la. Rever se o app sair do círculo de amigos.
- [x] **Arte oficial num site público** (§6): decidido em 2026-10-01 que a arte oficial é aceita enquanto o jogo não tiver fins comerciais. Rever se isso mudar.
- [ ] **Repositório dentro do Dropbox:** o autopiloto faz um commit a cada lote, e o Dropbox sincroniza a pasta `.git` ao mesmo tempo. Se outra máquina abrir o projeto, há risco de conflito no repositório. Considerar mover o repositório para fora do Dropbox.
- [x] **Pista que entrega a resposta nas perguntas com figura** (§13): reforçado em 2026-10-02 no §6 ("cubra a imagem"), no `prompts/figuras.md` e no `prompts/criticar_figuras.md`.
- [ ] **Recrítica das 185 figuras feitas à mão**, que nunca passaram pela crítica.
- [ ] **Reescrita sem nova crítica:** a reescrita do crítico não volta para a crítica e não atualiza a âncora, mesmo que mude o assunto. Medir quantas reescritas mudam a resposta antes de decidir.
- [ ] **Regra "`conexao` + `nome` ≥ 20% por subtema"** (§9): ainda não é medida pelo relatório.
- [ ] **Limpeza de partidas antigas** (§16): as regras não permitem apagar partidas, que se acumulam no Firestore. Partidas de teste das v0.10 e v0.11 ainda têm o campo `tabuleiro`, sem uso.

---

## 15. O jogo

As regras do jogo ainda não estão todas definidas (princípio 1). Esta seção registra o que já foi decidido sobre **como as perguntas são usadas** numa partida e sobre o **tabuleiro**, inspirado no jogo *Master*, da Grow.

### Modos de jogo

O Mestre2 terá mais de um modo de jogo, todos sobre o mesmo banco de perguntas. Os modos são independentes: cada um tem regras, tabuleiro e estado de partida próprios, e o desenvolvimento de um não muda o outro.

| Modo | Situação | Onde está descrito |
|---|---|---|
| **Master** | Em uso e em desenvolvimento. É o modo do app hoje | Esta seção (Papéis, Regras do tabuleiro, Desenho do tabuleiro, Definições) e §16 |
| **Linear** | Protótipo no app (2026-10-02). Uma trilha única de 60 casas em faixa ondulada, com casas de tema e casas especiais | Esta seção (Modo Linear) e §16 |
| **Trilha da Vida** | Primeira versão no app (2026-10-02), a refinar. Corrida num mapa vertical no estilo *Slay the Spire*: profissão com dois temas, personalidade, casas "Vá trabalhar", de Ação, de tema, em Branco e de Destino, e uma mão de cartas | [`modo_trilha_da_vida.md`](modo_trilha_da_vida.md) e §16 |

O que esta seção diz sobre papéis, repetição e sorteio vale para todos os modos, salvo quando o modo disser outra coisa. O que diz sobre o tabuleiro vale para o Modo Master.

### Papéis

- A cada pergunta há um **questionador**, que lê a pergunta em voz alta, e um **respondente**, que responde.
- **Os papéis mudam de pergunta a pergunta.** Não existe um mestre fixo: qualquer jogador pode ler e qualquer jogador pode responder.
- Por isso o texto precisa funcionar na voz de qualquer pessoa, sem ensaio (§7).

### Duas funções

A partida usa **várias pessoas com seus próprios aparelhos**, e o app tem duas funções independentes. Hoje são duas abas do mesmo app, mas podem virar dois apps.

| Função | O que faz |
|---|---|
| **Tabuleiro** | Mostra a casa de cada jogador e o tema da próxima pergunta dele |
| **Sorteio** | Sorteia uma pergunta do banco sobre um **tema escolhido** e a mostra ao questionador |

### Regras do tabuleiro

- **Peão e casas:** cada jogador tem um peão. **A cor da casa onde o peão está define o tema** da próxima pergunta dele. Cada acerto avança uma casa, e errar não move o peão.
- **Tema designado:** ao adicionar um jogador, o app **sorteia um tema** para ele, evitando repetir temas entre jogadores enquanto houver temas livres. O tema pode ser **trocado à mão** durante o estágio 1.
- **Estágio 1:** o peão começa na **casa grande** do início do braço do seu tema e percorre as **5 casas** desse braço: a casa grande e mais 4. São 5 perguntas seguidas no tema designado. Eram 8 casas até 2026-10-10; numa partida antiga, o peão que estava além da casa 5 do braço passa a contar como estágio 2.
- **Estágio 2:** o **anel central**, o mesmo para todos, tem **uma casa por tema**, numa ordem fixa, a mesma dos braços. Cada jogador dá **uma volta completa** no sentido horário, passando pelos 8 temas. Ele entra na casa seguinte à do seu tema, de modo que **a última pergunta é do seu tema designado**. Por exemplo, quem é de Geografia faz N › AP › CO › CI › EN › E › H › G.
- **Fim:** são **13 acertos** até a chegada, no centro. Vence quem chegar primeiro.
- **Temas ainda sem perguntas:** os 8 temas entram no tabuleiro e no sorteio do tema designado, mesmo que o banco ainda não tenha perguntas de alguns deles. No Sorteio, esses temas aparecem como "em breve". Quando o tema do jogador não tem perguntas, o app avisa, e o grupo escolhe outro tema ou "Qualquer tema".

### Desenho do tabuleiro

- **Forma:** como no *Master*, há um **braço em espiral por tema**, que leva da borda até o anel central. O fim de cada braço desemboca na casa do anel por onde aquele jogador entra. O disco do centro é a chegada.
- **Casas do mesmo tamanho:** os braços são faixas de largura constante, e todas as casas do estágio 1 têm o mesmo tamanho, da borda até o anel. Por isso a borda do tabuleiro não é um círculo: é dentada, como um cata-vento.
- **Casa grande:** a primeira casa de cada braço é mais comprida que as outras e traz o **nome do tema** em letras grandes, ao longo da espiral, no maior tamanho que cabe inteiro. O trecho junto à casa seguinte fica livre para os peões. As casas do anel trazem a sigla do tema (G, N, AP, CO, CI, EN, E, H).
- **Peões:** cada peão tem a **cor do tema designado**, as iniciais do jogador e anéis branco e preto que o destacam de qualquer casa, inclusive das casas do seu próprio braço. A mesma cor aparece como borda no cartão do jogador, na aba Sorteio e na lista do Tabuleiro.
- **Leitura de qualquer lado:** os textos giram para a borda mais próxima, e "MESTRE2" aparece duas vezes no centro, uma de cabeça para baixo.
- **Modo mesa:** o tabuleiro pode ocupar a tela inteira de um aparelho deixado no meio da mesa ou ligado a um projetor, visível para todos. A tela não apaga enquanto o modo estiver ligado. Com uma pergunta em jogo, a tela mostra, ao lado do tabuleiro, o tema, **quem pergunta** e, ao lado, **quem responde** (que muda quando a pergunta passa adiante), quem já tentou, a figura, o enunciado e as alternativas. **A resposta só aparece**, abaixo da pergunta, quando quem pergunta toca em **Mostrar resposta para todos** no Sorteio; com ela vêm a alternativa certa destacada e a figura de revelação. Depois disso, um erro não passa mais a pergunta adiante, e a pergunta com a resposta fica na tela grande até o próximo sorteio, com uma linha no alto que diz quem pergunta e quem responde em seguida. **Sem pergunta em jogo**, a tela grande mostra a próxima vez: quem vai perguntar, quem vai responder e, no Master e no Linear, o tema dele. É uma **exceção ao princípio 2**, só no modo mesa: ali todos leem a pergunta, inclusive quem responde. Nos outros aparelhos nada muda.

### Modo Linear

Protótipo, decidido em 2026-10-02 a partir de um esboço do usuário. O que não está aqui ainda não foi decidido.

- **Tabuleiro:** uma **trilha única**, a mesma para todos, com **60 casas** numa faixa ondulada de **4 fileiras**. A faixa vai e volta, e as curvas nas pontas alternam entre a direita e a esquerda. Todas as casas têm o mesmo comprimento, inclusive nas curvas. A primeira casa é o **Início**, branca, no alto à esquerda; a última é a **Chegada**, xadrez, embaixo à esquerda.
- **Casas de tema:** 50 casas coloridas, com a sigla do tema, na ordem das cores (G › N › AP › CO › CI › EN › E › H), em ciclo. Cada tema aparece 6 ou 7 vezes, e duas casas vizinhas nunca têm o mesmo tema. **A cor da casa do peão é o tema da próxima pergunta.**
- **Casas especiais (★):** 8, cerca de uma a cada 7 casas (casas 6, 13, 20, 27, 34, 41, 48 e 54). **As ações delas ainda não foram definidas.** Por enquanto, a pergunta nelas, como no Início, é de qualquer tema, e o grupo aplica o efeito à mão.
- **Movimento:** cada acerto avança **uma casa**; errar não move o peão. Haverá também ações específicas das casas especiais.
- **Fim:** vence quem chegar primeiro à Chegada (59 acertos, sem contar as ações das casas).
- **Peões:** cada jogador recebe um tema só para a **cor do peão**, sorteado como no Master e trocável à mão; no Linear esse tema não muda as perguntas.
- **Em aberto:** as ações das casas especiais; temas em ciclo fixo ou embaralhados; o nome definitivo do modo.

### Definições

- **Tela do questionador:** mostra a pergunta e, se for múltipla escolha, as alternativas embaralhadas. A resposta **só aparece ao tocar**, para não vazar para quem está ao lado.
- **Repetição:** o sorteio prefere as perguntas que ainda não saíram na partida, em **qualquer aparelho**. Quando as do tema acabam, ele **repete**: sorteia entre as que saíram menos vezes. A pergunta repetida aparece **marcada**, com quantas vezes já saiu na partida. No botão do tema, o número é o de perguntas que ainda não saíram, e "(só repetidas)" indica que todas já saíram.
- **Avanço:** o tabuleiro tem duas formas de mover o peão, e as duas convivem.
  - **Pelo sorteio:** depois de revelar a resposta, o questionador escolhe quem respondeu e marca se acertou.
  - **À mão:** botões + e − no tabuleiro, para corrigir erros ou aplicar regras que o app ainda não conhece.
- **Vez** (Master e Linear, decidido em 2026-10-09): os jogadores jogam na **ordem do placar**, pulando quem já chegou. **Quem lê é o seguinte da fila** de quem está na vez. A vez passa a cada pergunta, com acerto ou erro, como na Trilha da Vida. O jogador da vez já vem escolhido no Sorteio, mas dá para escolher outro à mão; a fila segue a partir de quem foi escolhido.
- **A pergunta aberta passa adiante:** se quem está na vez erra uma pergunta **aberta**, a mesma pergunta vai para o seguinte da fila, pulando quem lê e quem já tentou, até alguém acertar ou não sobrar ninguém. Quem acerta avança o próprio peão. A pergunta de **múltipla escolha não passa**: o erro encerra a rodada. Depois, a vez vai para o seguinte de quem estava na vez, e não de quem acertou.
- **Cronômetro:** com a pergunta na tela, quem lê pode tocar em **30 s** ou em **1 min**, a cada pergunta, e a contagem regressiva aparece **só no modo mesa**, ao lado de quem responde, em vermelho nos últimos 5 segundos. Quando o tempo acaba, a tela grande mostra "Tempo esgotado" e **nada muda no jogo**: quem lê decide. Quando a pergunta passa adiante, a contagem para, e quem lê toca de novo para o seguinte. Cada tela de mesa conta pelo próprio relógio, a partir de quando recebe o toque.
- **Pular** descarta a pergunta, e a vez fica com o mesmo jogador. Se a pergunta já tinha passado adiante, os erros contam e a vez passa.

---

## 16. O app

### Visão geral

- É uma página web única, em `app/public/index.html`, publicada no Firebase Hosting. Não há build nem dependências locais: o SDK do Firebase é carregado da CDN do Google.
- Endereço: **https://mestre2-626dd.web.app**. Projeto Firebase: `mestre2-626dd`. O banco Firestore `(default)` fica em São Paulo (`southamerica-east1`).
- O app **só lê** o banco de perguntas produzido pelo pipeline (§11). Ele não gera nem altera perguntas.
- O app é **sempre escuro**, com fundo preto puro, para poupar bateria em celulares com tela OLED. Não segue o tema claro do aparelho.

### Como se joga

1. Um aparelho toca em **Nova partida** e recebe um **código de 4 letras**, sem I e O para não confundir com 1 e 0. Os outros entram digitando o código ou abrindo o link `https://mestre2-626dd.web.app/#CODIGO`, que o botão **Convidar** compartilha (pelo menu do celular ou copiando o link).
2. Na aba **Tabuleiro**, alguém adiciona os jogadores, e o app sorteia o tema designado de cada um. Todos os aparelhos veem o tabuleiro ao vivo.
   - O tabuleiro em espiral (§15) mostra os peões. O botão **Modo mesa** o põe em tela cheia.
   - Abaixo fica a lista de jogadores: tema atual, posição, acertos (✓) e erros (✗), os botões − e + e, no estágio 1, a troca de tema.
3. Na aba **Sorteio**, o questionador escolhe quem responde e sorteia a pergunta.
   - No Master e no Linear, uma linha diz de quem é a vez e quem lê ("Vez de Ana · lê Bruno"), e o jogador da vez já vem escolhido, com o tema dele (§15).
   - O alto da tela mostra os jogadores, com o tema atual e a posição de cada um. Tocar num jogador o escolhe como respondente e seleciona o tema dele. Ainda dá para escolher outro tema à mão, numa grade com os temas que têm perguntas; os outros aparecem numa linha de "Em breve".
   - Os botões de tema têm a cor do tema, herdada do app antigo, e mostram quantas perguntas ainda não saíram na partida. "Qualquer tema" tem faixas com todas as cores.
   - Um segundo filtro escolhe **com ou sem figura**, **só com figura** ou **só sem figura**.
   - Depois ele toca em **Sortear**, na barra fixa do rodapé. A barra sempre mostra a ação do momento: **Sortear**, **Mostrar resposta** ou **Acertou** e **Errou**.
4. A pergunta ocupa a tela, e a escolha de jogador e de tema some até a rodada acabar. Ele lê a pergunta em voz alta. Se houver figura, toca nela para abri-la em **tela cheia**, só a imagem, e mostra o aparelho ao respondente. Outro toque fecha a tela cheia.
5. Ele toca em **Mostrar resposta**. Se a figura tiver revelação, como as silhuetas de Pokémon, ela troca para a arte colorida, e volta à silhueta ao esconder. O mesmo botão vira **Esconder resposta**, para cobrir a tela se alguém espiar. Quem responde já aparece ("Responde: Ana"), com a opção de **trocar**. Ele marca **Acertou (+1)**, **Errou** ou **Pular sem pontuar**. Um acerto avança o peão uma casa. No erro de uma pergunta aberta, a resposta se esconde de novo, a tela diz quem errou e quem responde agora, e a pergunta passa ao seguinte da fila (§15).
6. Depois da resposta, o botão **Sobre a pergunta** abre a ficha dela: tema e subtema, âncora com descrição, ângulo, dificuldade estimada, tipo, fontes com link, fonte da figura (autor, licença e link), autor e id. Antes da resposta o botão não aparece, para não vazar nada. O crédito da figura só aparece nessa ficha, e nunca junto da foto: numa pergunta de pintura, o autor da imagem é a própria resposta.

7. A aba **Informações** mostra o que há no banco: o total de perguntas, quantas são de múltipla escolha, quantas são abertas e quantas têm figura. Abaixo vem um bloco por tema, na cor dele, com o total. Tocar no bloco abre a descrição do tema e a lista de subtemas, cada um com descrição e contagens. Subtemas ainda sem perguntas aparecem como "em breve". A mesma página abre na tela inicial, pelo botão **Informações sobre as perguntas**, para consulta fora de uma partida.

Acertos e erros contam só o que foi marcado pelo sorteio. A posição do peão inclui também os ajustes à mão, feitos na aba Tabuleiro depois de tocar em **Editar jogadores** (casa, tema do estágio 1 e remoção), ou **arrastando o peão** no tabuleiro, inclusive no modo mesa: solto, ele vai para a casa mais próxima do caminho do jogador. As regras ficam recolhidas em **Como se joga**.

### Modo Linear

Ao criar a partida, há também **Nova partida · Linear (protótipo)**, que grava `modo: "linear"`. O desenho e as casas ficam em `app/public/linear.js`; o resto é o do Master: a aba Sorteio, a posição em `pontos`, os botões − e +, o arrasto do peão (que vai para a casa mais próxima da trilha) e o modo mesa, que mostra o tabuleiro deitado na largura da tela. No Sorteio, tocar num jogador seleciona o tema da casa dele, ou "Qualquer tema" no Início e nas casas ★.

### Modo Trilha da Vida

Ao criar a partida, escolhe-se **Nova partida · Master** ou **Nova partida · Trilha da Vida**. Partidas sem modo, como as antigas, são Master. As regras estão em [`modo_trilha_da_vida.md`](modo_trilha_da_vida.md); o código fica em `app/public/trilha.js` (dados, mapa e desenho) e numa seção do `index.html` (telas e Firestore).

- **Mapa:** gerado da `semente` gravada na partida, o mesmo em todos os aparelhos. Aparece na aba Tabuleiro e no modo mesa, que mostra o mapa vertical em altura cheia. Os peões podem ser arrastados para corrigir a posição.
- **Começo:** na aba Tabuleiro, cada jogador escolhe entre 3 profissões e 2 personalidades sorteadas. As profissões que repetem tema de quem já escolheu somem das opções; com 4 jogadores, o último fica com a profissão dos 2 temas que sobraram. Cada um começa com 1 carta.
- **Turno** (a aba Sorteio vira **Turno**): o app mostra de quem é a vez e quem lê, e um **recorte do mapa** em volta do peão (ou o mapa inteiro, num botão), com as casas possíveis em anel azul e a escolhida em dourado; tocar numa casa a escolhe. Assim dá para **jogar sozinho**, sem trocar de aba: com um jogador só, o cabeçalho diz "jogando sozinho". O jogador escolhe a próxima casa entre as ligadas e, se quiser, usa uma carta. A pergunta sai do tipo da casa e da carta. Acertou, o peão sobe; errou, fica; a vez passa. Antes de jogar, o app pede para resolver o que estiver pendente: descartar cartas acima do limite ou usar avanços livres.
- **Automático:** casas em Branco (compra), Destino (6 eventos), Férias, o Desafio cooperativo (os dois ganham um avanço livre se o alvo acertar; o líder não pode ser alvo) e as personalidades Criativo, Competitivo, Observador e Colecionador. **De viva voz:** Metódico, Curioso, Aventureiro e Persistente, e o fim da rodada depois da chegada.

### Dados

As perguntas **não ficam no Firestore**. O script `app/exportar_perguntas.py` copia `pipeline/banco/perguntas.json` para `app/public/perguntas.json`, só com os campos que o app usa: `id`, `tema`, `subtema`, `tipo`, `pergunta`, `resposta`, `distratores`, `imagem`, `angulo`, `fonte`, `autor` e `dificuldade`. A `ancora` sai já resolvida no cadastro, como nome e descrição. Se a âncora tiver sido fundida em outra, vale a entrada que a absorveu. Ele também copia as figuras de `pipeline/banco/imagens/` para `app/public/img/` e grava `app/public/temas.json`, que junta a lista canônica de temas e subtemas (§3) às descrições para os jogadores, escritas à mão em `app/descricoes.json`. Um subtema novo precisa de descrição nesse arquivo; sem ela, o script avisa. O Firestore guarda apenas o estado das partidas:

| Caminho | Campos | Função |
|---|---|---|
| `partidas/{codigo}` | `criada_em`, `vez`, `atual`; na Trilha da Vida e no Linear, também `modo`; na Trilha, `semente` | A partida. O código é o id do documento. `modo` é `master`, `trilha` ou `linear` (sem ele, Master); `semente` gera o mapa; `vez` é o id do jogador da vez. `atual` é a pergunta em jogo, para o modo mesa: `sorteio`, `pergunta` (o id), `opcoes` (as alternativas na ordem da tela de quem lê), `respondente`, `leitor`, `tentaram`, `revelada` (a resposta foi mostrada a todos; o texto dela não vai para o Firestore), `tempo` (o cronômetro: `s`, os segundos, e `n`, que distingue um toque do outro) e `fim` (a rodada acabou, mas a pergunta continua na tela grande com a resposta). Volta a `null` quando a rodada acaba. Partidas criadas na v0.10 e na v0.11 têm também `tabuleiro`, que não é mais usado |
| `partidas/{codigo}/jogadores/{id}` | `nome`, `pontos`, `tema`, `criado_em`; na Trilha, `trilha` | Um documento por jogador. Master: `pontos` é a casa do peão; `tema` é o tema do estágio 1. Trilha: o mapa `trilha` guarda posição, opções sorteadas, profissão, personalidade, mão, avanços livres, férias, descartes pendentes e o último evento |
| `partidas/{codigo}/sorteios/{id}` | `pergunta`, `em`, `respondente`, `acertou`, `tentativas` | Um registro por sorteio. A mesma pergunta pode ter vários. Quando a pergunta passa adiante, `tentativas` lista cada `{respondente, acertou}`, e `respondente` e `acertou` são os da última |
| `partidas/{codigo}/usadas/{id da pergunta}` | `em`, `respondente`, `acertou` | Formato antigo, até a v0.16: uma entrada por pergunta. O app ainda lê essas entradas, e elas contam junto com `sorteios` |

- Cada sorteio cria um registro novo em `sorteios`. O resultado (`respondente` e `acertou`) é acrescentado quando o questionador marca acerto ou erro.
- Os registros de sorteio já formam um histórico de acertos por pergunta. É daí que uma medida de dificuldade pode vir no futuro, e não do LLM (§12).

### Regras de segurança (`app/firestore.rules`)

- **Não há login.** Quem conhece o código de uma partida pode lê-la e jogar.
- As regras só limitam o **formato** dos dados:
  - o código tem 4 letras maiúsculas;
  - uma partida não pode ser recriada nem apagada;
  - o nome do jogador tem até 30 caracteres, e o jogador começa com 0 ponto;
  - o tema do jogador tem até 40 caracteres;
  - num jogador, só a casa (`pontos`), o tema e o estado da Trilha (`trilha`, um mapa de no máximo 12 campos) podem mudar;
  - a partida pode ter `modo` (`master`, `trilha` ou `linear`) e `semente` (inteiro) na criação, e depois só mudam `vez` (texto de até 40 caracteres) e `atual` (`null` ou um mapa de até 12 campos);
  - um sorteio é criado só com `pergunta` e `em`, e depois só o resultado (`respondente`, `acertou` e `tentativas`, uma lista de até 30) pode ser acrescentado. `usadas` segue a mesma regra, para não quebrar um aparelho que ainda esteja com a versão antiga aberta.
- Qualquer outra coleção é negada.

### Instruções

Todos os comandos rodam na pasta `app/`. O CLI do Firebase é usado via `npx`, sem instalação global.

| Tarefa | Comando |
|---|---|
| Atualizar as perguntas do app | `python exportar_perguntas.py` e depois publicar |
| Publicar página e regras | `npx -y firebase-tools@latest deploy` |
| Publicar só a página | `npx -y firebase-tools@latest deploy --only hosting` |
| Publicar só as regras | `npx -y firebase-tools@latest deploy --only firestore` |
| Refazer o login | `npx -y firebase-tools@latest login --reauth` |

- No **PowerShell**, a política de scripts bloqueia o `npx`. Use `npx.cmd`, ou libere com `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned`.
- O login precisa de um terminal interativo, que abre o navegador. No Claude Code, rode-o numa janela comum do PowerShell.
- Depois de publicar, as **regras novas levam cerca de 1 minuto** para valer. Nesse intervalo, o app pode dar erro de permissão.
- A página e o `perguntas.json` são servidos **sem cache** (`firebase.json`), para que uma publicação apareça na hora. As imagens usam o cache padrão de 1 hora.

---

## 17. Programação até 10 000 perguntas

Plano aprovado em 2026-10-01 para levar o banco de 612 a **cerca de 10 000 perguntas**, com **25% de perguntas com figura**, ao longo das próximas sessões de trabalho.

### Ponto de partida e metas

| | Hoje (2026-10-01) | Meta | Falta |
|---|---|---|---|
| Perguntas de texto | 425 | 7 500 | ~7 075 |
| Perguntas com figura | 187 | 2 500 | ~2 313 |
| **Total** | **612** | **10 000** | **~9 400** |

As perguntas se distribuem **por igual entre os oito temas**: cerca de 1 250 por tema, com 940 de texto e 310 com figura. Dentro de cada tema, o texto se divide entre os subtemas (§3):

| Tema | Subtemas | Texto hoje | Meta de texto por subtema | Figura hoje | Meta de figura |
|---|---|---|---|---|---|
| Geografia | 9 | 29 | ~104 | 7 | 320 |
| História | 13 | 125 | ~72 | 8 | 300 |
| Natureza | 9 | 50 | ~104 | 8 | 320 |
| Ciências | 9 | 97 | ~104 | 0 | 310 |
| Artes e Pensamento | 9 | 0 | ~104 | 60 | 320 |
| Entretenimento | 8 | 0 | ~117 | 57 | 310 |
| Esportes | 8 | 30 | ~117 | 40 | 310 |
| Cotidiano | 8 | 94 | ~117 | 7 | 310 |

### Perguntas de texto: lotes de 50

O texto sai do pipeline (§11), em lotes de 50, com cerca de 47 perguntas aproveitadas por lote, custo equivalente de US$ 1,45 e uns 8 minutos de execução. Faltam **cerca de 150 lotes**, que somam uns US$ 220 em equivalente de API, na cota do plano, e umas 20 horas de execução em segundo plano.

O próximo lote é sempre do **subtema com o maior déficit em relação à meta**. Os lotes vêm em três ondas:
1. **Cobertura:** um lote em cada um dos 61 subtemas que ainda não têm perguntas de texto.
2. **Segunda passada:** mais um lote em todos os 73 subtemas.
3. **Acabamento:** lotes extras até cada subtema chegar à meta. Subtemas populares (Futebol, História do Brasil, Países e Capitais, Música Brasileira, Cinema) podem passar um pouco da meta; subtemas estreitos podem ficar abaixo, se começarem a se repetir.

### Perguntas com figura: de reconhecimento (§6)

Até hoje, as perguntas com figura foram feitas à mão, numa sessão de conversa. Esse ritmo não chega a 2 300, por isso a primeira sessão monta a **etapa de figuras do pipeline** (pendência do §14). Cada fonte de figura é uma lista de entidades, tirada do Wikidata, do Commons ou do PokéAPI, que o script percorre:
1. Escolhe as entidades nos catálogos curados, em camadas (diretrizes do §6), e pula as âncoras saturadas.
2. Baixa a imagem principal, registra autor e licença e põe fundo branco nas transparentes.
3. Pede ao LLM (Sonnet), que **olha a imagem**, para confirmar três coisas: o assunto é único e reconhecível, não há texto que entregue a resposta e a resposta é única. Se aprovar, ele escreve a pergunta segundo as famílias e os níveis do §6 (nem todas são "que animal é este?"), com o tipo e, se for múltipla, os distratores.
4. **Crítica:** outro LLM (Sonnet, esforço médio, sem a imagem, mas sabendo o que ela mostra) confere o texto como na crítica das perguntas de texto: o fato nos trechos das fontes baixados pelo script, o vazamento, a resposta única e os distratores. Aprova, reescreve ou descarta.
5. **Registro:** liga a pergunta à âncora (com o juiz, como no texto), respeita a saturação, descarta a que repete um fato já perguntado sobre a mesma âncora e a grava com a fonte (Wikipédia ou Bulbapedia).

| Tema | Fontes de figura (quantidade aproximada) |
|---|---|
| Geografia | bandeiras de países (120), contornos de países e estados (70), cidades (70), paisagens e maravilhas naturais (60) |
| Natureza | mamíferos (80), aves (70), vida marinha (50), répteis e anfíbios (40), insetos (30), plantas e frutas (30), dinossauros e fósseis (20) |
| História | retratos de personagens históricos, em pinturas de domínio público (120), monumentos e sítios (110), mapas e bandeiras históricas (70) |
| Artes e Pensamento | pinturas (125), retratos de escritores, compositores e filósofos (115), esculturas e arquitetura (80) |
| Entretenimento | pokémon (70), personagens de anime, mangá, quadrinhos, filmes e séries (80), cenas de filmes e séries (80), músicos e atores em fotos livres (45), instrumentos musicais e jogos de tabuleiro (35) |
| Esportes | atletas (120), estádios e circuitos (85), modalidades, objetos e equipamentos (105) |
| Ciências | retratos de cientistas (100), astronomia em imagens da NASA, de domínio público (80), invenções e objetos históricos (50), minerais e elementos (40), ilustrações anatômicas antigas (40) |
| Cotidiano | pratos e bebidas (80), transportes (60), frutas e ingredientes (50), objetos do dia a dia (40), folclore (40), trajes e moda (40) |

A checagem visual pelo LLM custa uns 2 centavos por pergunta, uns US$ 50 no total, e a crítica do texto, mais uns 2 centavos.

As quantidades seguem `pipeline/plano.json` e foram reduzidas na v0.35 para que nenhum catálogo passe de 40% das figuras do seu tema (§6). Antes, pokémon tinha 180 das 310 figuras de Entretenimento.

### Saturação por âncora

Um assunto está saturado quando já há perguntas demais apontando para a mesma âncora. A primeira sessão também liga essa medida (pendência do §14):
- a contagem de perguntas por âncora passa a valer **no banco inteiro**, e não só dentro do subtema;
- o gerador recebe as âncoras mais usadas do tema todo, para evitá-las;
- uma âncora com mais de 3 perguntas, somando texto e figura, fica bloqueada para novas perguntas, salvo decisão em contrário.

### Autopiloto

A infraestrutura da sessão 1 ficou pronta em 2026-10-01 (detalhes em `pipeline/README.md`):
- **`pipeline/plano.json`:** as metas desta seção, a orientação de cada subtema para as encomendas e os catálogos de figura.
- **`pipeline/autopiloto.py`:** roda sozinho, fora de qualquer conversa. Escolhe o próximo trabalho pelo **tema com menos perguntas no banco**, somando texto e figura (desde 2026-10-02, para os temas atrasados, como Artes e Pensamento, alcançarem os outros); dentro do tema, texto ou figura pelo que falta mais em relação à meta, o subtema pelo déficit absoluto e o catálogo pelo déficit relativo à sua meta, cria a encomenda, executa, exporta e faz um commit local. **Quando a cota do plano acaba, espera até o horário de liberação informado na mensagem ("resets 6:10pm") e retoma da mesma etapa.** **Ele usa no máximo 95% da sessão de 5 horas** (desde 2026-10-02): ao chegar a esse uso, informado pelo próprio Claude Code a cada chamada, espera a sessão renovar, para deixar uma folga para o uso interativo. Só mensagens de cota ou sobrecarga contam como cota; um tempo limite ou outro erro conta como falha, e três falhas seguidas pausam o subtema ou catálogo. Pausa subtemas que rendem pouco e catálogos esgotados. Para parar, cria-se o arquivo `pipeline/PARAR`. Push e deploy, só com a opção `--publicar`.
- **`pipeline/figuras.py`:** a etapa de figuras, com curadoria dos catálogos pelo LLM, imagem do Wikidata ou do PokéAPI, avaliação pelo Sonnet, que abre cada imagem, e crítica do texto. No primeiro teste (4 bandeiras), as 4 entraram, a cerca de 4 centavos por pergunta.
- **Saturação:** no máximo 3 perguntas por âncora no banco inteiro e 2 com figura; o gerador recebe as âncoras já muito usadas do tema; uma pergunta nova sobre âncora que já tem perguntas é comparada com elas pelo LLM.

### Sessões

| Sessão | O que se faz | Texto ao fim | Figura ao fim |
|---|---|---|---|
| 1 | **Infraestrutura:** saturação por âncora no banco inteiro; plano com as metas por subtema (`pipeline/plano.json`); comando que roda uma fila de lotes e escolhe o subtema de maior déficit; etapa de figuras; relatório de progresso contra as metas. Teste com 2 lotes e 100 figuras | ~520 | ~290 |
| 2 a 5 | **Onda 1:** cerca de 14 lotes por sessão, cobrindo os 61 subtemas sem texto. Cerca de 300 figuras por sessão (bandeiras, animais, pinturas, pokémon, retratos) | ~3 200 | ~1 500 |
| 6 a 9 | **Onda 2:** cerca de 17 lotes por sessão, a segunda passada nos 73 subtemas. Cerca de 200 figuras por sessão | ~6 400 | ~2 300 |
| 10 a 11 | **Onda 3:** lotes extras até as metas, mais as últimas figuras | ~7 500 | ~2 500 |
| 12 | **Revisão:** relatório final, nova crítica por amostragem (`recriticar`), âncoras saturadas, distribuição por ângulo e tipo, auditoria humana opcional | ~7 500 | ~2 500 |

**Rotina de cada sessão:**
1. Rodar `relatorio` e ver o progresso contra as metas.
2. Disparar a fila de lotes em segundo plano.
3. Enquanto a fila roda, **não gravar nada no banco**: o pipeline grava o banco inteiro no fim de cada lote (§13). As figuras entram antes ou depois da fila, ou pelo próprio pipeline.
4. Conferir uma amostra das perguntas novas.
5. Exportar, commitar e publicar no Firebase.
6. Registrar no §13 as lições e o custo da sessão.

**Ajustes de rota:** o plano é uma meta, não uma obrigação. Se um subtema começar a se repetir (âncoras saturadas, crítico descartando muito), ele para abaixo da meta, e a diferença vai para subtemas com mais assunto. A proporção de 25% com figura vale para o banco todo, não para cada tema.

---

## 18. Histórico

| Versão | Data | Mudanças principais |
|---|---|---|
| 0.1–0.2 | 2026-09-29 | Esquema construído campo a campo a partir do antigo; cadastro de âncoras |
| 0.3 | 2026-09-29 | Registro de decisões; ângulos revisados; nova lista de temas e subtemas |
| 0.4 | 2026-09-29 | Pipeline; ângulo `excecao` removido |
| 0.5 | 2026-09-30 | Manifesto em duas partes; critério "Precisa"; resposta específica; variedade dentro do ângulo; fluxo descrito como o pipeline realmente funciona; lições dos pilotos |
| 0.6 | 2026-09-30 | Seção do jogo e do app: questionador e respondente rotativos; placar e sorteio como funções separadas; projeto Firebase |
| 0.7 | 2026-09-30 | Definições do jogo (tela do questionador, repetição por partida, pontos pelo sorteio e à mão); nova seção do app: uso, dados, regras de segurança e instruções |
| 0.8 | 2026-09-30 | Perguntas com figura: campo opcional `imagem`, regras e critérios (§6), exceção ao princípio 2, piloto de duas perguntas, filtro e tela cheia no app |
| 0.9 | 2026-09-30 | App: cores por tema; placar com acertos e erros visível na aba Sorteio |
| 0.10 | 2026-09-30 | Tabuleiro em dois estágios (tema próprio sorteado; depois a cor da casa); o placar vira tabuleiro; tema de cada jogador visível no sorteio |
| 0.11 | 2026-09-30 | Tabuleiro em espiral no estilo do Master; modo mesa em tela cheia |
| 0.12 | 2026-09-30 | Estágio 2 como anel central com uma casa por tema; cada jogador termina no seu tema original; fim do sorteio de cores por partida |
| 0.13 | 2026-09-30 | App sempre em modo escuro, com fundo preto |
| 0.14 | 2026-09-30 | Tabuleiro: nomes dos temas na casa grande do início de cada braço, onde o peão começa (e mais 7 casas no braço); casas do estágio 1 do mesmo tamanho, com borda em cata-vento; peões na cor do tema designado |
| 0.15 | 2026-09-30 | Revisão geral: §15 separada em regras e desenho do tabuleiro; decisões do jogo e do app registradas (§12); "Como se joga" reorganizado; "narrador" trocado por "questionador" |
| 0.16 | 2026-09-30 | App: botão "Sobre a pergunta" depois da resposta; exportação passa a incluir âncora (nome e descrição), ângulo, fontes e autor |
| 0.17 | 2026-09-30 | Perguntas podem se repetir na partida, com as novas primeiro e a repetida marcada; um registro por sorteio, em `sorteios` |
| 0.18 | 2026-09-30 | Dificuldade estimada (1 a 5) pela popularidade da âncora na Wikipédia: campos opcionais `dificuldade` na pergunta e `popularidade` na âncora, etapa 6 do pipeline e ficha no app. A dificuldade é apenas ilustrativa: não entra em nenhuma decisão do projeto |
| 0.19 | 2026-09-30 | Pipeline econômico: o script baixa trechos das fontes e o crítico (Sonnet, esforço médio) os confere numa chamada só, sem web, informando o `apoio` de cada fato; `reescrita` obrigatória no esquema da crítica; prompt de sistema mínimo; comparação de críticos (§13). Custo por lote de 20 cai de cerca de US$ 2 para US$ 0,85 |
| 0.20 | 2026-09-30 | Lotes de 50 perguntas; limite de saída do CLI elevado para 64 mil tokens; resultados dos primeiros lotes com o pipeline econômico (§13) |
| 0.21 | 2026-09-30 | Trechos das fontes: artigo equivalente em português quando as fontes são só da Wikipédia em inglês (§11, §13) |
| 0.22 | 2026-09-30 | Figuras de animais permitidas; só fotos de um único assunto; cinco perguntas de Mamíferos com figura (§6, §13) |
| 0.23 | 2026-09-30 | App: a pergunta ocupa a tela ao sortear; barra fixa no rodapé com a ação do momento; Mostrar/Esconder resposta no mesmo botão; respondente escolhido uma vez só; figura com altura máxima (§16) |
| 0.24 | 2026-09-30 | App: temas em grade, com os vazios numa linha de "Em breve"; botão Convidar; regras recolhíveis e modo Editar jogadores no tabuleiro; espiral do tabuleiro como marca na entrada (§16) |
| 0.25 | 2026-09-30 | App: arrastar o peão no tabuleiro muda a casa do jogador (§16) |
| 0.26 | 2026-09-30 | Tabuleiro: a última casa do estágio 1 se estende até o anel numa peça só, sem a faixa mais escura da passagem (só visual) |
| 0.27 | 2026-09-30 | Figuras: plantas, objetos, festas com brincantes e personagens de lendas (ilustração ou escultura) permitidos; recorte de placas permitido; vinte perguntas de folclore com figura (§6, §13) |
| 0.28 | 2026-09-30 | Perguntas com figura são de reconhecimento: a resposta sai da imagem ("Que animal é este?"); âncora é o que aparece e o ângulo é `identidade`; exceção para arte de Pokémon do Bulbagarden; as 37 primeiras perguntas com figura foram apagadas, e ids apagados não são reaproveitados (§6, §13) |
| 0.29 | 2026-09-30 | Figuras: obras de arte em domínio público; o ângulo segue o que se pergunta depois de reconhecer a figura (pintor → `autoria`, museu → `lugar`); dez perguntas de Pintura com figura (§6) |
| 0.30 | 2026-09-30 | App: o crédito da figura sai de baixo da foto e fica só na ficha Sobre a pergunta, depois da resposta (nas pinturas, ele entregava o pintor) (§16) |
| 0.31 | 2026-10-01 | Programação até 10 000 perguntas, 25% com figura: metas por tema e subtema, etapa de figuras do pipeline, saturação por âncora no banco inteiro e plano de sessões (§17) |
| 0.32 | 2026-10-01 | Diretrizes das perguntas com figura (§6): catálogos que atravessam subtemas, famílias de pergunta, três níveis de profundidade, entidades em camadas curadas, regras de variedade, imagens que pedem observação e distratores visualmente parecidos; a escolha de entidades deixa de usar a popularidade (§17) |
| 0.33 | 2026-10-01 | Quatro subtemas acrescentados (Geografia do Brasil, História da África, Biologia e Genética, Meio Ambiente e Energia), com escopo definido; regra de que a lista só cresce por acréscimo; metas da §17 recalculadas (§3, §17) |
| 0.48 | 2026-10-10 | Estágio 1 do Master com 5 casas (13 acertos até a chegada) e casas um pouco mais largas; peões maiores; cronômetro de 30 s ou 1 min, tocado por quem lê e mostrado só no modo mesa, sem efeito no jogo quando acaba (§14, §15, §16) |
| 0.47 | 2026-10-10 | Modo mesa sem pergunta em jogo mostra a próxima vez (quem pergunta, quem responde e o tema); depois da resposta para todos, uma linha "A seguir"; campo `fim` em `atual` (§15, §16) |
| 0.46 | 2026-10-10 | Modo mesa: quem pergunta ao lado de quem responde; botão **Mostrar resposta para todos**, que põe a resposta abaixo da pergunta na tela grande e impede que a pergunta passe adiante; campo `revelada` em `atual` (§15, §16) |
| 0.45 | 2026-10-09 | Vez no Master e no Linear: ordem do placar, lê o seguinte da fila, a pergunta aberta passa adiante a cada erro, a de múltipla escolha não. Modo mesa mostra a pergunta em jogo, sem a resposta, como numa projeção: exceção ao princípio 2. QR code com o link do site e da partida. Firestore: `atual` na partida, `tentativas` no sorteio (§14, §15, §16) |
| 0.44 | 2026-10-02 | Autopiloto usa no máximo 95% da sessão de 5 horas e espera a renovação (§17) |
| 0.43 | 2026-10-02 | Terceiro modo de jogo, **Linear** (protótipo): trilha única de 60 casas em faixa ondulada de 4 fileiras, 50 casas de tema em ciclo e 8 casas especiais com ações a definir; no app, como terceira opção de nova partida |
| 0.42 | 2026-10-02 | Perguntas com figura: a pista do enunciado ajuda a distinguir, mas não identifica sozinha; teste "cubra a imagem", com exemplos da recrítica (§6) |
| 0.41 | 2026-10-02 | Modo Trilha da Vida no app: escolha do modo na criação, mapa no estilo Slay the Spire, profissões, personalidades, cartas e turno guiado; regras do Firestore ampliadas (§15, §16) |
| 0.40 | 2026-10-01 | Modos de jogo: o tabuleiro atual passa a ser o Modo Master, que continua em desenvolvimento; o Modo Trilha da Vida, inspirado no *Jogo da Vida*, entra em concepção num documento próprio (§15) |
| 0.39 | 2026-10-01 | Montagem de uma única obra (cenas ou elenco, sem texto) é aceita; primeiro lote de cenas de filmes e séries (§6) |
| 0.38 | 2026-10-01 | Cinema e TV com figura: cenas de filmes e séries pelo TMDB (sem texto), personagens de filmes e séries no catálogo de personagens, atores com perguntas além do nome; um terço brasileiro; sem spoilers; crédito do TMDB no app (§6, §12, §17) |
| 0.37 | 2026-10-01 | Política de imagens: arte oficial aceita enquanto o jogo não tiver fins comerciais; catálogo de personagens de anime, mangá e quadrinhos, com imagens do Fandom, do AniList, do superhero-api e da Wikipédia, silhueta quando a imagem permite e a regra de variedade dos pokémon (§6, §12, §14, §17) |
| 0.36 | 2026-10-01 | Variedade dos pokémon nas silhuetas: todas as gerações, formas básicas e intermediárias e pokémon menos conhecidos, e não só os famosos (§6). Perguntas de Pokémon com figura em silhueta, no estilo "Quem é esse pokémon?" do desenho, com a arte colorida revelada na resposta: campo opcional `revelacao` da imagem; as 57 perguntas antigas foram removidas e o primeiro lote novo entrou (§6, §10, §13, §16) |
| 0.35 | 2026-10-01 | Revisão do pipeline: nome igual não liga mais uma proposta a uma âncora (vai ao juiz), 15 perguntas de homônimos religadas; perguntas com figura passam por crítica e checagem de repetidos; detector de cota estreito, com espera até o horário de liberação; metas de catálogo de até 40% do tema, pelo déficit relativo; limites por âncora completos na Parte I; aviso desatualizado sobre figuras corrigido (§4, §6, §11, §13, §14, §17). App: aba Informações (§16) |
| 0.34 | 2026-10-01 | Sessão 1 da programação: autopiloto, plano com metas e orientações por subtema, etapa de figuras com avaliação visual, saturação por âncora no banco inteiro e checagem de repetidos pela âncora (§11, §14, §17) |
