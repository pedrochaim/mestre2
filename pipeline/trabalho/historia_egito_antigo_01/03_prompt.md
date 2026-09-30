Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Egito Antigo** (tema **História**). Avalie **cada uma**, independentemente, e decida:

- **aprovar:** passa em todos os critérios.
- **reescrever:** tem um problema corrigível. Devolva em `reescrita` a versão corrigida **completa** (`angulo`, `tipo`, `pergunta`, `resposta`, `fonte` e, se o tipo for `multipla`, exatamente 3 `distratores`).
- **descartar:** o problema não tem conserto, ou o fato é fraco demais para valer uma pergunta.

Em `motivo`, explique a decisão em uma frase. Na dúvida entre reescrever e descartar, descarte: o MANIFESTO diz "menos e melhor".

# O que verificar

1. **Precisão literal (obrigatório):** leia o enunciado palavra por palavra. Cada verbo, adjetivo e afirmação precisa ser **literalmente** verdadeiro, e não só a resposta. Desconfie especialmente de verbos como *batizou*, *inventou*, *descobriu*, *fundou*, *criou*, e de palavras como *único*, *primeiro*, *maior*, *sempre*, *nunca*. Exemplo: dizer que Colombo *batizou* a Colômbia é falso, porque o país recebeu o nome *em homenagem* a ele. Se houver qualquer imprecisão, reescreva.
2. **Fato e fonte (obrigatório):** abra as URLs de `fonte` com a ferramenta WebFetch e confirme que elas sustentam a resposta. Se uma URL não existir ou não sustentar o fato, procure uma fonte confiável com WebSearch e corrija em `reescrita`. Se não houver fonte confiável, ou se o fato estiver errado, descarte.
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
      "nome": "Faraó",
      "descricao": "Título dado pelos historiadores modernos aos reis do Egito Antigo"
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Antes de designar o próprio rei, a expressão egípcia que deu origem à palavra faraó indicava o palácio real. Qual é o seu sentido literal?",
    "resposta": "Casa grande",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pharaoh"
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Kemet",
      "descricao": "Nome que os antigos egípcios davam ao próprio país"
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Kemet, nome que os antigos egípcios davam ao próprio país, fazia referência ao lodo fértil deixado pelo Nilo. O que quer dizer Kemet?",
    "resposta": "Terra negra",
    "fonte": [
      "https://en.wikipedia.org/wiki/Names_of_Egypt"
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Obelisco",
      "descricao": "Monumento egípcio de pedra, alto e de quatro faces, que termina em ponta piramidal"
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A palavra obelisco vem de um diminutivo grego, dado por causa do formato alto e pontudo do monumento. Que objeto de cozinha ela designava?",
    "resposta": "Espeto",
    "fonte": [
      "https://en.wikipedia.org/wiki/Obelisk"
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Grande Esfinge de Gizé",
      "descricao": "Estátua colossal de calcário com corpo de leão e cabeça humana, no planalto de Gizé, no Egito"
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Os árabes apelidaram a Grande Esfinge de Gizé de Abul-Hol, que quer dizer pai de alguma coisa. Pai de quê?",
    "resposta": "Do terror",
    "fonte": [
      "https://en.wikipedia.org/wiki/Great_Sphinx_of_Giza"
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Múmia egípcia",
      "descricao": "Corpo humano ou animal preservado artificialmente pelos antigos egípcios para a vida após a morte"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "A palavra múmia vem de um termo árabe e persa ligado a uma substância escura que se pensava ter sido usada nos embalsamamentos. Que substância?",
    "resposta": "Betume",
    "distratores": [
      "Natrão",
      "Mirra",
      "Resina de cedro"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Mummy"
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Múmia egípcia",
      "descricao": "Corpo humano ou animal preservado artificialmente pelos antigos egípcios para a vida após a morte"
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Na mumificação egípcia, quase todos os órgãos internos eram retirados, mas um deles costumava ficar no corpo, por ser tido como a sede da mente. Qual?",
    "resposta": "Coração",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mummy",
      "https://en.wikipedia.org/wiki/Ancient_Egyptian_funerary_practices"
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Agulhas de Cleópatra",
      "descricao": "Obeliscos egípcios do reinado de Tutmés III, originalmente em Heliópolis, reerguidos em Londres e em Nova York no século dezenove"
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Dois obeliscos egípcios, um em Londres e outro em Nova York, compartilham um apelido que homenageia alguém nascido mais de mil anos depois de eles serem erguidos. Qual é o apelido?",
    "resposta": "Agulha de Cleópatra",
    "fonte": [
      "https://en.wikipedia.org/wiki/Cleopatra%27s_Needle"
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Pedra de Roseta",
      "descricao": "Estela de granodiorito com um decreto de 196 antes de Cristo em três escritas, chave para a decifração dos hieróglifos"
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Em 2014, uma sonda espacial europeia conseguiu pousar um robô na superfície de um cometa. Ela recebeu o nome de qual célebre artefato egípcio?",
    "resposta": "Pedra de Roseta",
    "fonte": [
      "https://en.wikipedia.org/wiki/Rosetta_(spacecraft)"
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Dinastia ptolemaica",
      "descricao": "Dinastia de origem macedônica que governou o Egito de 305 a 30 antes de Cristo, da qual Cleópatra foi a última soberana"
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "A dinastia de Cleópatra, que governou o Egito por quase três séculos, foi fundada por um general de qual conquistador?",
    "resposta": "Alexandre, o Grande",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ptolemaic_Kingdom"
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Ramsés II",
      "descricao": "Faraó da décima nona dinastia que reinou no século treze antes de Cristo, conhecido como Ramsés, o Grande"
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O poema Ozymandias, do inglês Percy Shelley, descreve a estátua em ruínas de um soberano que se proclamava rei dos reis. Em qual faraó ele se inspirou?",
    "resposta": "Ramsés II",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ozymandias"
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Abu Simbel",
      "descricao": "Par de templos escavados na rocha por ordem de Ramsés II, no sul do Egito, junto ao Lago Nasser"
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Nos anos sessenta, os templos de Abu Simbel foram cortados em blocos e remontados num terreno mais alto. Que obra os ameaçava?",
    "resposta": "Represa de Assuã",
    "fonte": [
      "https://en.wikipedia.org/wiki/Abu_Simbel",
      "https://en.wikipedia.org/wiki/Aswan_Dam"
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Cheia do Nilo",
      "descricao": "Inundação anual do rio Nilo que depositava lodo fértil nas margens do Egito até a construção da represa de Assuã"
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "A cheia anual do Nilo, que fertilizava as terras egípcias, vinha principalmente das chuvas de verão em qual região montanhosa da África?",
    "resposta": "Planalto Etíope",
    "fonte": [
      "https://en.wikipedia.org/wiki/Flooding_of_the_Nile",
      "https://en.wikipedia.org/wiki/Nile"
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Amarna",
      "descricao": "Cidade fundada pelo faraó Aquenáton no século quatorze antes de Cristo como nova capital do Egito"
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "No século quatorze antes de Cristo, um faraó deixou Tebas e fundou a cidade de Amarna, dedicada ao culto de um único deus. Qual deus?",
    "resposta": "Aton",
    "fonte": [
      "https://en.wikipedia.org/wiki/Amarna",
      "https://en.wikipedia.org/wiki/Akhenaten"
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Escaravelho sagrado",
      "descricao": "Besouro rola-bosta venerado no Egito Antigo como símbolo do deus Quépri e usado em amuletos"
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "No Egito Antigo, o escaravelho era sagrado porque seu hábito de rolar bolas de esterco lembrava o movimento de qual astro pelo céu?",
    "resposta": "O Sol",
    "fonte": [
      "https://en.wikipedia.org/wiki/Khepri",
      "https://en.wikipedia.org/wiki/Scarab_(artifact)"
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Obelisco de Luxor",
      "descricao": "Obelisco do tempo de Ramsés II que ficava na entrada do Templo de Luxor e foi levado para Paris no século dezenove"
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em 1836, um obelisco de mais de três mil anos, retirado da entrada do Templo de Luxor, foi reerguido em qual praça europeia?",
    "resposta": "Praça da Concórdia, em Paris",
    "fonte": [
      "https://en.wikipedia.org/wiki/Luxor_Obelisks",
      "https://en.wikipedia.org/wiki/Place_de_la_Concorde"
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Filas",
      "descricao": "Ilha do Nilo, perto de Assuã, famosa pelo complexo de templos dedicado à deusa Ísis"
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "A última inscrição em hieróglifos que se conhece foi gravada no ano trezentos e noventa e quatro, num templo de Ísis em uma ilha do Nilo. Qual ilha?",
    "resposta": "Filas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Philae",
      "https://en.wikipedia.org/wiki/Egyptian_hieroglyphs"
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Calendário egípcio",
      "descricao": "Calendário civil solar do Egito Antigo, com doze meses de trinta dias e dias extras no fim do ano"
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "O calendário civil egípcio tinha doze meses de trinta dias cada. Quantos dias extras, dedicados ao nascimento de deuses, fechavam o ano?",
    "resposta": "Cinco",
    "distratores": [
      "Três",
      "Seis",
      "Dez"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Egyptian_calendar"
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Cleópatra",
      "descricao": "Cleópatra Sétima, última soberana da dinastia ptolemaica do Egito, morta em 30 antes de Cristo"
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Cleópatra viveu mais perto, no tempo, da chegada do homem à Lua do que da construção de qual destas obras?",
    "resposta": "Grande Pirâmide de Gizé",
    "distratores": [
      "Partenon de Atenas",
      "Farol de Alexandria",
      "Coliseu de Roma"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Cleopatra",
      "https://en.wikipedia.org/wiki/Great_Pyramid_of_Giza"
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Pirâmide de Djoser",
      "descricao": "Pirâmide de degraus construída em Sacará no século vinte e sete antes de Cristo para o faraó Djoser, considerada a primeira pirâmide egípcia"
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "A Pirâmide de Degraus de Djoser, em Sacará, considerada a primeira pirâmide do Egito, é atribuída a qual arquiteto, mais tarde venerado como deus?",
    "resposta": "Imhotep",
    "distratores": [
      "Hemiunu",
      "Senenmut",
      "Amenhotep"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pyramid_of_Djoser",
      "https://en.wikipedia.org/wiki/Imhotep"
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Hatshepsut",
      "descricao": "Rainha da décima oitava dinastia que governou o Egito como faraó no século quinze antes de Cristo"
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Hatshepsut, uma das poucas mulheres a governar o Egito como faraó, costuma aparecer em estátuas oficiais com qual adereço masculino preso ao queixo?",
    "resposta": "Barba postiça",
    "fonte": [
      "https://en.wikipedia.org/wiki/Hatshepsut"
    ]
  }
]

---

# MANIFESTO

# Manifesto de Perguntas — Mestre2

> **Versão preliminar 0.18 — 2026-09-30**
>
> Este documento define **o que é uma boa pergunta** no Mestre2 e **como o banco de perguntas é organizado e produzido**. Vale para qualquer pessoa ou modelo que crie, revise ou processe perguntas.
>
> Ele tem duas partes:
> - **Parte I — Regras de conteúdo (§1 a §9):** o que uma pergunta deve ser. É a parte que o gerador e o crítico automáticos recebem.
> - **Parte II — Organização e processo (§10 a §17):** esquemas, fluxo de produção, decisões, pendências, o jogo e o app. É a referência de quem mantém o projeto.
>
> Arquivos relacionados:
> - [`pergunta.schema.json`](pergunta.schema.json) e [`ancora.schema.json`](ancora.schema.json): esquemas
> - [`temas_subtemas.json`](temas_subtemas.json): lista canônica de temas e subtemas
> - [`exemplos_perguntas.json`](exemplos_perguntas.json) · [`exemplos_ancoras.json`](exemplos_ancoras.json)
> - [`proposta_temas_subtemas.md`](proposta_temas_subtemas.md): histórico da revisão da lista canônica
> - [`../pipeline/README.md`](../pipeline/README.md): o pipeline que produz as perguntas
> - [`../app/`](../app/): o app que usa as perguntas numa partida (§16)

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

A lista canônica tem **8 temas e 69 subtemas** e fica em [`temas_subtemas.json`](temas_subtemas.json):

| Tema | Subtemas |
|---|---|
| Geografia | Países e Capitais · Cidades e Monumentos · Relevo e Maravilhas Naturais · Rios e Lagos · Oceanos, Mares e Ilhas · Clima e Biomas · Povos e Idiomas · Bandeiras e Símbolos |
| História | Pré-História e Idade do Bronze · Egito Antigo · Grécia Antiga · Roma Antiga · Antigas Civilizações do Oriente · Américas Pré-Colombianas · Idade Média · Idade Moderna · Idade Contemporânea · Primeira Guerra Mundial · Segunda Guerra Mundial · História do Brasil |
| Natureza | Mamíferos · Aves, Répteis e Anfíbios · Vida Marinha · Insetos e Invertebrados · Plantas e Fungos · Dinossauros e Fósseis · Evolução Humana · Ecossistemas e Ambientes Extremos · Geologia e História da Terra |
| Ciências | Astronomia e Espaço · Física · Química · Matemática · Corpo Humano e Medicina · Tecnologia e Computação · Invenções e História da Ciência |
| Artes e Pensamento | Literatura Brasileira · Literatura Mundial · Pintura · Escultura e Arquitetura · Música Clássica · Teatro e Ópera · Mitologia · Religiões · Filosofia |
| Entretenimento | Cinema · Séries e TV · Música Brasileira · Música Internacional · Jogos Eletrônicos · Anime e Mangá · Quadrinhos · Jogos de Tabuleiro e Cartas |
| Esportes | Futebol · Vôlei · Basquete · Tênis · Automobilismo · Olimpíadas · Lutas e Artes Marciais · Outras Modalidades |
| Cotidiano | Culinária e Bebidas · Língua Portuguesa e Expressões · Marcas e Produtos · Folclore e Tradições Brasileiras · Costumes pelo Mundo · Objetos do Dia a Dia · Moda e Vestuário · Transportes |

- Cada pergunta tem **um tema e um subtema**, escritos **exatamente** como na lista, com acentos e maiúsculas.
- Uma **pequena sobreposição** entre subtemas é tolerada.
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
- no máximo **2 perguntas com o mesmo ângulo** para uma mesma âncora, no banco inteiro.

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

> **Por enquanto, o gerador automático não cria perguntas com figura.** Elas só são escritas por quem tem a imagem em mãos e a examinou. Uma pergunta sem o campo `imagem` nunca se refere a uma foto ou figura.

- **O enunciado aponta para a figura e é curto:** "Que cidade aparece nesta foto?", "Esta igreja fica em qual capital?". Ele pode trazer um fato que ajude, desde que não entregue a resposta.
- **O ângulo segue a regra de sempre (§5).** Foto de um monumento e pergunta pela cidade: a âncora é o monumento, e o ângulo é `lugar`.
- **Tipos de figura, por ordem de prioridade:** lugares (cidades, monumentos, paisagens) e contornos de mapa. Obras de arte, animais e plantas ficam para depois.
- **Só imagens do Wikimedia Commons**, com licença livre (CC BY, CC BY-SA ou domínio público). Autor e licença são sempre registrados.
- **Proibido:** capas de álbuns, pôsteres, logotipos, fotos de imprensa e fotos de pessoas que não sejam figuras públicas.

**Critérios da figura**, além dos de §8:
- [ ] **Nada na imagem entrega a resposta:** placas, legendas, letreiros, marcas d'água, bandeiras.
- [ ] **Resposta única diante da imagem:** atenção a réplicas, paisagens parecidas e monumentos que ficam entre duas cidades. A Ponte Luís I liga o Porto a Vila Nova de Gaia, por isso a pergunta é pela cidade "do outro lado da ponte".
- [ ] **Legível num celular** a um braço de distância.
- [ ] **O enunciado é verdadeiro para esta foto específica**, e não só para o assunto: o ponto de vista, o lado e o que aparece nela.
- [ ] **Não é óbvia demais:** a Torre Eiffel de frente não ensina nada. Prefira um ângulo menos visto, um detalhe ou um fato no enunciado que torne a pergunta interessante (princípio 4).

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
