Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Idade Média** (tema **História**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Ordem dos Assassinos",
      "descricao": "Seita ismaelita nizarita que atuou na Pérsia e na Síria entre os séculos onze e treze, famosa por assassinatos políticos."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "A palavra assassino vem do apelido dado a uma seita islâmica medieval da Pérsia e da Síria. Esse apelido a associava a que substância?",
    "resposta": "Haxixe",
    "distratores": [
      "Ópio",
      "Vinho",
      "Café"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Order_of_Assassins",
      "https://www.etymonline.com/word/assassin"
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Império Bizantino",
      "descricao": "Continuação oriental do Império Romano, com capital em Constantinopla, que durou até 1453."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome Império Bizantino foi criado por historiadores depois da sua queda. Como os próprios habitantes desse império se chamavam?",
    "resposta": "Romanos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Byzantine_Empire",
      "https://en.wikipedia.org/wiki/Byzantine_Greeks"
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Al-Khwarizmi",
      "descricao": "Matemático e astrônomo persa do século nove que trabalhou na Casa da Sabedoria, em Bagdá."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome do matemático persa al-Khwarizmi, que trabalhou em Bagdá no século nove, deu origem a que palavra essencial da computação?",
    "resposta": "Algoritmo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Al-Khwarizmi",
      "https://en.wikipedia.org/wiki/Algorithm"
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Arquitetura gótica",
      "descricao": "Estilo arquitetônico europeu dos séculos doze a dezesseis, típico de catedrais como Notre-Dame de Paris e Chartres."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O estilo das catedrais de Notre-Dame e de Chartres ganhou, séculos depois, um nome pejorativo que o ligava a que povo germânico?",
    "resposta": "Godos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Gothic_architecture"
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Invasões mongóis do Japão",
      "descricao": "Duas tentativas de invasão do Japão pela dinastia Yuan de Kublai Khan, em 1274 e 1281."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "No século treze, tufões afundaram frotas mongóis que invadiam o Japão. Que nome japonês esses ventos ganharam, e que séculos depois designou pilotos suicidas?",
    "resposta": "Kamikaze",
    "fonte": [
      "https://en.wikipedia.org/wiki/Kamikaze_(typhoon)",
      "https://en.wikipedia.org/wiki/Mongol_invasions_of_Japan"
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Haroldo Dente-Azul",
      "descricao": "Rei da Dinamarca no século dez, que cristianizou os dinamarqueses e é lembrado nas pedras rúnicas de Jelling."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Haroldo, rei viking da Dinamarca no século dez, tinha um apelido que hoje dá nome a que tecnologia sem fio?",
    "resposta": "Bluetooth",
    "fonte": [
      "https://en.wikipedia.org/wiki/Harald_Bluetooth",
      "https://en.wikipedia.org/wiki/Bluetooth"
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Marco Polo",
      "descricao": "Mercador e viajante veneziano do século treze que viveu anos na China mongol."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Durante cerca de dezessete anos, o veneziano Marco Polo serviu na corte de qual imperador mongol, neto de Gengis Khan?",
    "resposta": "Kublai Khan",
    "fonte": [
      "https://en.wikipedia.org/wiki/Marco_Polo",
      "https://en.wikipedia.org/wiki/Kublai_Khan"
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Magna Carta",
      "descricao": "Carta de direitos que os barões ingleses impuseram ao rei em 1215, limitando o poder da coroa."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que rei inglês aparece como vilão em versões da lenda de Robin Hood e foi forçado pelos barões a aceitar a Magna Carta em 1215?",
    "resposta": "João Sem-Terra",
    "fonte": [
      "https://en.wikipedia.org/wiki/John,_King_of_England",
      "https://en.wikipedia.org/wiki/Robin_Hood",
      "https://en.wikipedia.org/wiki/Magna_Carta"
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Peste Negra",
      "descricao": "Pandemia de peste bubônica que devastou a Europa, a Ásia e o Norte da África em meados do século quatorze."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "No século quatorze, a peste negra matou milhões de europeus. Que inseto, parasita de ratos, é apontado como principal transmissor da bactéria causadora?",
    "resposta": "Pulga",
    "fonte": [
      "https://en.wikipedia.org/wiki/Black_Death",
      "https://pt.wikipedia.org/wiki/Peste_Negra"
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Queda de Constantinopla",
      "descricao": "Conquista da capital bizantina pelo Império Otomano do sultão Maomé Segundo, em 1453."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Em 1453, que armas gigantes, fundidas pelo engenheiro Orban, ajudaram os otomanos a romper as muralhas de Constantinopla?",
    "resposta": "Canhões",
    "distratores": [
      "Catapultas",
      "Aríetes",
      "Balistas"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Fall_of_Constantinople",
      "https://en.wikipedia.org/wiki/Orban"
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Conquista normanda da Inglaterra",
      "descricao": "Invasão e conquista da Inglaterra por Guilherme, duque da Normandia, a partir da Batalha de Hastings em 1066."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "A conquista da Inglaterra por Guilherme da Normandia, em 1066, explica por que o inglês tem milhares de palavras vindas de que outra língua?",
    "resposta": "Francês",
    "fonte": [
      "https://en.wikipedia.org/wiki/Influence_of_French_on_English",
      "https://en.wikipedia.org/wiki/Norman_Conquest"
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Erik, o Vermelho",
      "descricao": "Explorador nórdico do século dez que fundou a primeira colônia europeia na Groenlândia."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Segundo as sagas nórdicas, por que Erik, o Vermelho, batizou de Terra Verde uma ilha quase toda coberta de gelo?",
    "resposta": "Para atrair colonos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Erik_the_Red",
      "https://en.wikipedia.org/wiki/Greenland"
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "As Viagens de Marco Polo",
      "descricao": "Relato das viagens de Marco Polo pela Ásia, escrito por Rustichello de Pisa por volta de 1300."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em que cidade italiana, rival de Veneza, Marco Polo estava preso quando ditou o relato de suas viagens à China?",
    "resposta": "Gênova",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Travels_of_Marco_Polo",
      "https://en.wikipedia.org/wiki/Marco_Polo"
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Algarismos indo-arábicos",
      "descricao": "Sistema de numeração posicional com os dígitos de zero a nove, usado hoje em quase todo o mundo."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Os algarismos de zero a nove são chamados de arábicos, mas os árabes medievais os aprenderam com matemáticos de que região?",
    "resposta": "Índia",
    "fonte": [
      "https://en.wikipedia.org/wiki/Hindu%E2%80%93Arabic_numeral_system",
      "https://en.wikipedia.org/wiki/Arabic_numerals"
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Tapeçaria de Bayeux",
      "descricao": "Bordado de cerca de setenta metros, feito no século onze, que narra a conquista normanda da Inglaterra."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "A Tapeçaria de Bayeux, bordada no século onze para narrar a conquista normanda da Inglaterra, mostra no céu que famoso cometa?",
    "resposta": "Halley",
    "fonte": [
      "https://en.wikipedia.org/wiki/Bayeux_Tapestry",
      "https://en.wikipedia.org/wiki/Halley%27s_Comet"
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Guerra dos Cem Anos",
      "descricao": "Série de conflitos entre os reinos da Inglaterra e da França, de 1337 a 1453."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Apesar do nome, quantos anos durou de fato a Guerra dos Cem Anos, travada entre Inglaterra e França?",
    "resposta": "116 anos",
    "distratores": [
      "99 anos",
      "104 anos",
      "131 anos"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Hundred_Years%27_War",
      "https://pt.wikipedia.org/wiki/Guerra_dos_Cem_Anos"
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Carlos Magno",
      "descricao": "Rei dos francos e dos lombardos, coroado imperador do Ocidente pelo papa Leão Terceiro."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Num dia de Natal, em Roma, o papa Leão Terceiro coroou Carlos Magno imperador. Em que ano isso aconteceu?",
    "resposta": "800",
    "fonte": [
      "https://en.wikipedia.org/wiki/Charlemagne",
      "https://pt.wikipedia.org/wiki/Carlos_Magno"
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Vinland",
      "descricao": "Região da América do Norte alcançada por navegadores nórdicos por volta do ano mil, segundo as sagas islandesas."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Por volta do ano mil, que navegador viking desembarcou na América do Norte e chamou a terra de Vinland?",
    "resposta": "Leif Erikson",
    "distratores": [
      "Erik, o Vermelho",
      "Ragnar Lodbrok",
      "Haroldo Hardrada"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Vinland",
      "https://en.wikipedia.org/wiki/Leif_Erikson"
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Presépio",
      "descricao": "Representação do nascimento de Jesus, com a manjedoura, Maria, José e animais, tradicional no Natal."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1223, na aldeia italiana de Greccio, que santo montou o que é considerado o primeiro presépio de Natal?",
    "resposta": "São Francisco de Assis",
    "fonte": [
      "https://en.wikipedia.org/wiki/Nativity_scene",
      "https://en.wikipedia.org/wiki/Francis_of_Assisi"
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Fogo grego",
      "descricao": "Arma incendiária de composição secreta usada pelo Império Bizantino, sobretudo em batalhas navais."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "O fogo grego, arma incendiária secreta do Império Bizantino, era temido nas batalhas navais por uma característica rara. Qual era ela?",
    "resposta": "Queimava sobre a água",
    "fonte": [
      "https://en.wikipedia.org/wiki/Greek_fire",
      "https://pt.wikipedia.org/wiki/Fogo_grego"
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
