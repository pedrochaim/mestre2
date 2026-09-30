Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. O MANIFESTO, no final desta mensagem, define o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Futebol** (tema **Esportes**). Avalie **cada uma**, independentemente, e decida:

- **aprovar:** passa em todos os critérios.
- **reescrever:** tem um problema corrigível. Devolva em `reescrita` a versão corrigida **completa** (`angulo`, `tipo`, `pergunta`, `resposta`, `fonte` e, se o tipo for `multipla`, exatamente 3 `distratores`).
- **descartar:** o problema não tem conserto, ou o fato é fraco demais para valer uma pergunta.

Em `motivo`, explique a decisão em uma frase. Na dúvida entre reescrever e descartar, descarte: o MANIFESTO diz "menos e melhor".

# O que verificar

1. **Precisão literal (obrigatório):** leia o enunciado palavra por palavra. Cada verbo, adjetivo e afirmação precisa ser **literalmente** verdadeiro, e não só a resposta. Desconfie especialmente de verbos como *batizou*, *inventou*, *descobriu*, *fundou*, *criou*, e de palavras como *único*, *primeiro*, *maior*, *sempre*, *nunca*. Exemplo: dizer que Colombo *batizou* a Colômbia é falso, porque o país recebeu o nome *em homenagem* a ele. Se houver qualquer imprecisão, reescreva.
2. **Fato e fonte (obrigatório):** abra as URLs de `fonte` com a ferramenta WebFetch e confirme que elas sustentam a resposta. Se uma URL não existir ou não sustentar o fato, procure uma fonte confiável com WebSearch e corrija em `reescrita`. Se não houver fonte confiável, ou se o fato estiver errado, descarte.
3. **Critérios de qualidade** do MANIFESTO §8: resposta única, sem vazamento, atemporal, justa, interessante, audível e bem classificada.
4. **Redação para voz** do MANIFESTO §7.
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
      "nome": "Estádio do Maracanã",
      "descricao": "Estádio de futebol no Rio de Janeiro, inaugurado para a Copa do Mundo de 1950."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O Maracanã, no Rio de Janeiro, tem um nome oficial que homenageia qual jornalista esportivo?",
    "resposta": "Mário Filho",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Estádio_do_Maracanã",
      "https://en.wikipedia.org/wiki/Maracanã_Stadium"
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Garrincha",
      "descricao": "Manuel Francisco dos Santos, ponta-direita do Botafogo e da seleção brasileira, bicampeão mundial em 1958 e 1962."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O apelido de Garrincha, ídolo do Botafogo, é também o nome popular de que tipo de animal?",
    "resposta": "Um pássaro",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Garrincha",
      "https://en.wikipedia.org/wiki/Garrincha"
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Boca Juniors",
      "descricao": "Club Atlético Boca Juniors, clube de futebol de Buenos Aires fundado em 1905 no bairro de La Boca."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Os torcedores do Boca Juniors são chamados de xeneizes, termo que remete aos imigrantes de qual cidade italiana?",
    "resposta": "Gênova",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Club_Atlético_Boca_Juniors",
      "https://en.wikipedia.org/wiki/Boca_Juniors"
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Boca Juniors",
      "descricao": "Club Atlético Boca Juniors, clube de futebol de Buenos Aires fundado em 1905 no bairro de La Boca."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "No começo do século vinte, o Boca Juniors adotou o azul e o amarelo copiando a bandeira de um navio no porto. De que país era o navio?",
    "resposta": "Suécia",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Club_Atlético_Boca_Juniors",
      "https://en.wikipedia.org/wiki/Boca_Juniors"
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Real Madrid",
      "descricao": "Real Madrid Club de Fútbol, clube de futebol da capital espanhola fundado em 1902."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Em 1920, o clube Madrid ganhou o título de Real, concedido por qual rei da Espanha?",
    "resposta": "Afonso XIII",
    "distratores": [
      "Fernando VII",
      "Carlos III",
      "Filipe V"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Real_Madrid_Club_de_Fútbol",
      "https://en.wikipedia.org/wiki/Real_Madrid_CF"
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Vasco da Gama",
      "descricao": "Club de Regatas Vasco da Gama, clube carioca fundado em 1898 por remadores."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O Vasco, fundado em 1898, foi batizado em homenagem aos quatrocentos anos de qual feito do navegador português?",
    "resposta": "Chegada às Índias por mar",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Club_de_Regatas_Vasco_da_Gama",
      "https://en.wikipedia.org/wiki/CR_Vasco_da_Gama"
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Corinthians",
      "descricao": "Sport Club Corinthians Paulista, clube de futebol de São Paulo fundado em 1910."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O Corinthians, fundado em 1910, recebeu o nome de um time amador que excursionava pelo Brasil. De que país era esse time?",
    "resposta": "Inglaterra",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Sport_Club_Corinthians_Paulista",
      "https://en.wikipedia.org/wiki/Sport_Club_Corinthians_Paulista"
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Lev Yashin",
      "descricao": "Goleiro soviético do Dínamo de Moscou, Bola de Ouro de 1963."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Por jogar sempre de uniforme preto, o goleiro soviético Lev Yashin ficou conhecido por qual apelido?",
    "resposta": "Aranha Negra",
    "fonte": [
      "https://en.wikipedia.org/wiki/Lev_Yashin"
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Tostão",
      "descricao": "Eduardo Gonçalves de Andrade, atacante do Cruzeiro e da seleção brasileira campeã mundial em 1970."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O que Tostão, craque do tri de 1970, e Sócrates, líder da Democracia Corinthiana, têm em comum fora dos gramados?",
    "resposta": "Ambos se formaram em medicina",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Tostão",
      "https://en.wikipedia.org/wiki/Tostão",
      "https://en.wikipedia.org/wiki/Sócrates_(footballer)"
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Raí",
      "descricao": "Raí Souza Vieira de Oliveira, meia brasileiro ídolo do São Paulo e do Paris Saint-Germain, campeão mundial em 1994."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que laço une Raí, ídolo do São Paulo e do Paris Saint-Germain, a Sócrates, ídolo do Corinthians?",
    "resposta": "São irmãos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Raí",
      "https://en.wikipedia.org/wiki/Sócrates_(footballer)"
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "River Plate",
      "descricao": "Club Atlético River Plate, clube de futebol de Buenos Aires fundado em 1901, hoje sediado no bairro de Núñez."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O que River Plate e Boca Juniors, grandes rivais argentinos, têm em comum na sua origem?",
    "resposta": "Ambos nasceram no bairro de La Boca",
    "fonte": [
      "https://en.wikipedia.org/wiki/Club_Atlético_River_Plate",
      "https://pt.wikipedia.org/wiki/Club_Atlético_River_Plate"
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Cruzeiro",
      "descricao": "Cruzeiro Esporte Clube, clube de futebol de Belo Horizonte fundado em 1921 por imigrantes italianos."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Palmeiras e Cruzeiro, fundados por imigrantes italianos, tinham originalmente o mesmo nome. Que nome era esse?",
    "resposta": "Palestra Itália",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Cruzeiro_Esporte_Clube",
      "https://pt.wikipedia.org/wiki/Sociedade_Esportiva_Palmeiras"
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Didier Deschamps",
      "descricao": "Volante francês, capitão da França campeã mundial em 1998 e técnico da França campeã em 2018."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Em Copas do Mundo, o que Zagallo, Franz Beckenbauer e Didier Deschamps têm em comum?",
    "resposta": "Campeões como jogador e como técnico",
    "fonte": [
      "https://en.wikipedia.org/wiki/Didier_Deschamps",
      "https://en.wikipedia.org/wiki/Franz_Beckenbauer",
      "https://en.wikipedia.org/wiki/Mário_Zagallo"
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Atlético de Madrid",
      "descricao": "Club Atlético de Madrid, clube de futebol da capital espanhola fundado em 1903."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que ligação existe, na origem, entre o Atlético de Madrid e o Athletic Bilbao?",
    "resposta": "O Atlético nasceu como filial do Athletic",
    "fonte": [
      "https://en.wikipedia.org/wiki/Atlético_Madrid",
      "https://pt.wikipedia.org/wiki/Club_Atlético_de_Madrid"
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Juventus",
      "descricao": "Juventus Football Club, clube de futebol de Turim fundado em 1897."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Em 1903, a Juventus trocou o uniforme rosa pelo preto e branco ao receber camisas de qual clube inglês?",
    "resposta": "Notts County",
    "distratores": [
      "Newcastle United",
      "Derby County",
      "Fulham"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Juventus_FC",
      "https://pt.wikipedia.org/wiki/Juventus_Football_Club"
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Camisa canarinho",
      "descricao": "Uniforme amarelo da seleção brasileira de futebol, adotado a partir de 1954 no lugar da camisa branca."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Nos anos cinquenta, a seleção brasileira abandonou o uniforme branco e adotou o amarelo por causa de qual derrota?",
    "resposta": "Para o Uruguai em 1950 (Maracanazo)",
    "fonte": [
      "https://en.wikipedia.org/wiki/Brazil_national_football_team",
      "https://en.wikipedia.org/wiki/Maracanazo",
      "https://en.wikipedia.org/wiki/Aldyr_Garcia_Schlee"
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Taça Jules Rimet",
      "descricao": "Troféu da Copa do Mundo FIFA entre 1930 e 1970, entregue em definitivo ao Brasil e roubado no Rio de Janeiro em 1983."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1970, por que o Brasil ganhou a posse definitiva da taça Jules Rimet?",
    "resposta": "Por ser o primeiro tricampeão mundial",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Taça_Jules_Rimet",
      "https://en.wikipedia.org/wiki/Jules_Rimet_Trophy"
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Tragédia de Heysel",
      "descricao": "Desastre no estádio de Heysel, em Bruxelas, antes da final da Copa dos Campeões de 1985 entre Liverpool e Juventus, com 39 mortos."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Após a tragédia no estádio de Heysel, em 1985, que punição sofreram os clubes ingleses?",
    "resposta": "Banimento das competições europeias",
    "fonte": [
      "https://en.wikipedia.org/wiki/Heysel_Stadium_disaster"
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Cartões amarelo e vermelho",
      "descricao": "Cartões usados pelos árbitros de futebol para advertir e expulsar jogadores, idealizados pelo árbitro inglês Ken Aston."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "O árbitro inglês Ken Aston teve a ideia dos cartões amarelo e vermelho ao observar o quê?",
    "resposta": "Um semáforo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ken_Aston",
      "https://en.wikipedia.org/wiki/Penalty_card"
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Cartões amarelo e vermelho",
      "descricao": "Cartões usados pelos árbitros de futebol para advertir e expulsar jogadores, idealizados pelo árbitro inglês Ken Aston."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Em qual Copa do Mundo os cartões amarelo e vermelho foram usados pela primeira vez?",
    "resposta": "1970, no México",
    "fonte": [
      "https://en.wikipedia.org/wiki/Penalty_card",
      "https://en.wikipedia.org/wiki/1970_FIFA_World_Cup"
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Guerra do Futebol",
      "descricao": "Conflito armado de 1969 entre El Salvador e Honduras, deflagrado em meio a jogos das Eliminatórias da Copa de 1970."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1969, El Salvador e Honduras entraram em guerra num clima de tensão acirrado por jogos de qual competição?",
    "resposta": "Eliminatórias da Copa de 1970",
    "fonte": [
      "https://en.wikipedia.org/wiki/Football_War",
      "https://pt.wikipedia.org/wiki/Guerra_do_Futebol"
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Final da Copa do Mundo de 2010",
      "descricao": "Partida final da Copa do Mundo FIFA de 2010, em Joanesburgo, entre Espanha e Holanda."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Na prorrogação da final da Copa de 2010, na África do Sul, quem marcou o gol do título espanhol?",
    "resposta": "Andrés Iniesta",
    "fonte": [
      "https://en.wikipedia.org/wiki/2010_FIFA_World_Cup_final"
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Futebol total",
      "descricao": "Estilo tático de rodízio constante de posições associado ao Ajax e à seleção da Holanda do início dos anos 1970."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Qual técnico é considerado o criador do futebol total, estilo do Ajax e da Holanda vice-campeã em 1974?",
    "resposta": "Rinus Michels",
    "fonte": [
      "https://en.wikipedia.org/wiki/Total_Football",
      "https://en.wikipedia.org/wiki/Rinus_Michels"
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Eusébio",
      "descricao": "Eusébio da Silva Ferreira, atacante do Benfica e da seleção portuguesa, artilheiro da Copa de 1966."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Eusébio, astro do Benfica e de Portugal na Copa de 1966, nasceu em qual atual país africano?",
    "resposta": "Moçambique",
    "distratores": [
      "Angola",
      "Cabo Verde",
      "Guiné-Bissau"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Eusébio"
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Tragédia de Superga",
      "descricao": "Queda do avião que levava o elenco do Torino, o Grande Torino, na colina de Superga, perto de Turim, em 4 de maio de 1949."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Em 1949, o avião do Grande Torino caiu perto de Turim, na volta de um amistoso disputado em qual capital europeia?",
    "resposta": "Lisboa",
    "distratores": [
      "Madri",
      "Paris",
      "Viena"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Superga_air_disaster"
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Just Fontaine",
      "descricao": "Atacante francês nascido no Marrocos, artilheiro da Copa do Mundo de 1958."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Na Copa de 1958, na Suécia, quantos gols marcou o atacante francês Just Fontaine?",
    "resposta": "13",
    "distratores": [
      "9",
      "11",
      "15"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Just_Fontaine",
      "https://en.wikipedia.org/wiki/1958_FIFA_World_Cup"
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Brasil 1 x 7 Alemanha",
      "descricao": "Semifinal da Copa do Mundo de 2014, disputada no Mineirão, em Belo Horizonte, em 8 de julho de 2014."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Na semifinal da Copa de 2014, em Belo Horizonte, quantos gols a Alemanha marcou no Brasil ainda no primeiro tempo?",
    "resposta": "Cinco",
    "fonte": [
      "https://en.wikipedia.org/wiki/Brazil_v_Germany_(2014_FIFA_World_Cup)"
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Copa do Mundo FIFA de 2002",
      "descricao": "Décima sétima Copa do Mundo, disputada no Japão e na Coreia do Sul e vencida pelo Brasil."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "A Copa de 2002, a primeira disputada na Ásia, teve como sedes o Japão e qual outro país?",
    "resposta": "Coreia do Sul",
    "distratores": [
      "China",
      "Coreia do Norte",
      "Tailândia"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/2002_FIFA_World_Cup",
      "https://pt.wikipedia.org/wiki/Copa_do_Mundo_FIFA_de_2002"
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Flamengo",
      "descricao": "Clube de Regatas do Flamengo, clube carioca fundado em 1895."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Antes de ter um time de futebol, o Flamengo foi fundado em 1895 para disputar qual esporte?",
    "resposta": "Remo",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Clube_de_Regatas_do_Flamengo",
      "https://en.wikipedia.org/wiki/CR_Flamengo"
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "George Weah",
      "descricao": "Atacante liberiano, Bola de Ouro de 1995, que depois foi presidente da Libéria."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Bola de Ouro em 1995, o atacante George Weah ocupou mais tarde qual cargo político?",
    "resposta": "Presidente da Libéria",
    "fonte": [
      "https://en.wikipedia.org/wiki/George_Weah"
    ]
  }
]

---

# MANIFESTO

# Manifesto de Perguntas — Mestre2

> **Versão preliminar 0.4 — 2026-09-29**
>
> Este documento define **o que é uma boa pergunta** no Mestre2 e **como o banco de perguntas é organizado**. Vale para qualquer pessoa ou modelo que crie, revise ou processe perguntas.
>
> Arquivos desta pasta:
> - [`pergunta.schema.json`](pergunta.schema.json): esquema de uma pergunta
> - [`ancora.schema.json`](ancora.schema.json): esquema de uma entrada do cadastro de âncoras
> - [`exemplos_perguntas.json`](exemplos_perguntas.json) · [`exemplos_ancoras.json`](exemplos_ancoras.json)
> - [`temas_subtemas.json`](temas_subtemas.json): lista canônica de temas e subtemas
> - [`proposta_temas_subtemas.md`](proposta_temas_subtemas.md): histórico da revisão que originou a lista canônica

---

## 1. Princípios

1. **As perguntas vêm antes das regras.** O banco não depende de nenhuma regra de jogo. Um bom banco serve a qualquer regra, e o contrário não é verdade.
2. **A pergunta é ouvida, não lida.** Quem responde nunca vê o texto. Se não funciona em voz alta, não funciona.
3. **Uma pergunta, uma resposta.** Se duas respostas podem ser defendidas, a pergunta está errada.
4. **Profundidade vem do fato, não da obscuridade.** Uma pergunta surpreendente sobre algo famoso vale mais que uma pergunta sobre algo que ninguém conhece.
5. **A variedade é medida, não esperada.** Cada pergunta tem uma âncora e um ângulo, e o equilíbrio do banco é conferido com números.
6. **Toda pergunta tem fonte e resiste ao tempo.** Nada de "atual", "recente" ou recordes que ainda podem ser batidos.
7. **Errar deve ser interessante.** Quem erra deve pensar "que legal", e não "que injusto".
8. **Menos e melhor.** Na dúvida, descarte.
9. **O esquema é estável.** Ele só muda por acréscimo de campos opcionais, nunca por remoção, renomeação ou mudança de tipo (§11).
10. **O fluxo é automático.** Nenhuma etapa depende de aprovação humana. A revisão humana é uma auditoria opcional, não um gargalo (§10).

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

**Ficaram de fora, por decisão:**
- **`microsubtema`:** criava fronteiras arbitrárias e excesso de arquivos. Âncora e ângulo cumprem o papel dele.
- **`dificuldade`:** o LLM não consegue estimá-la de forma confiável. Se um dia for necessária, será medida pelas taxas de acerto em partidas reais, fora do arquivo da pergunta.
- **`tags`:** o que elas ofereceriam já está coberto por subtema e âncora.
- **Época e região:** podem ser derivadas no futuro a partir das fontes da âncora, por exemplo pelo Wikidata.

---

## 3. Temas e subtemas

- A lista de temas e subtemas fica no **arquivo canônico** [`temas_subtemas.json`](temas_subtemas.json): **8 temas e 69 subtemas**. Ela substitui `info/canon_temas_subtemas.json`, do projeto anterior.
- Os valores de `tema` e `subtema` numa pergunta são copiados **exatamente** como aparecem no arquivo canônico, com acentos e maiúsculas. Um script confere isso.
- A lista só cresce por acréscimo (§11).

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

- Cada pergunta tem **um tema e um subtema**.
- Uma **pequena sobreposição** entre subtemas é tolerada.
- **Regra de desempate:** quando dois subtemas servem, vale **o mais específico**. Uma pergunta sobre o Dia D é *Segunda Guerra Mundial*, e não *Idade Contemporânea*.

---

## 4. Âncoras

A âncora é **a entidade sobre a qual a pergunta é feita**: uma pessoa, lugar, obra, evento, espécie, objeto ou conceito específico.

- **A âncora é o assunto, não necessariamente a resposta.** Em "Quem fundou o Império Mongol?", a âncora é `imperio_mongol`, e a resposta é Gengis Khan.
- **Uma única âncora por pergunta**: a âncora principal, que é a entidade sobre a qual está o fato perguntado. Em perguntas de `comparacao` e `conexao`, escolha a entidade **menos óbvia**, porque é nela que está o conhecimento. Em "O que o planeta anão Plutão e o elemento plutônio têm em comum?", a âncora é `plutonio`.
- **Regra de granularidade:** a âncora é **uma entidade específica**, com nome próprio ou como um conceito bem delimitado, e **nunca uma área inteira**.

| ✅ Âncora | ❌ Não é âncora (é tema ou subtema) |
|---|---|
| Copa do Mundo FIFA de 1970 | Futebol |
| Pelé | Futebolistas brasileiros |
| Penicilina | Medicina |
| Império Mongol | Idade Média |

### O cadastro de âncoras

Todas as âncoras usadas vivem num **cadastro único** (`ancoras.json`), um *arquivo de autoridade*. A pergunta aponta para o `id` da âncora, e tudo o mais sobre ela fica no cadastro.

Cada entrada tem:
- **`id`:** identificador permanente, minúsculo, sem acentos e com `_`, por exemplo `gengis_khan`. Nunca muda e nunca é reutilizado.
- **`nome`:** forma preferida em português.
- **`descricao`:** uma frase que identifica a entidade sem ambiguidade. É o que separa *Mercúrio, o planeta* de *Mercúrio, o elemento químico*.
- **`variantes`:** outras grafias e nomes. Servem para reconhecer que "Genghis Khan" já está cadastrado. São variantes do **nome da âncora**, usadas na resolução automática, e não respostas aceitas para uma pergunta (§7).
- **`fontes`:** uma ou mais URLs de qualquer fonte confiável. A Wikipédia em português não é obrigatória.
- **`fundida_em`:** só aparece em entradas que foram fundidas em outra (§10).

### Limites por âncora (proposta, a calibrar)

- No máximo **2 perguntas com o mesmo ângulo** para uma mesma âncora, no banco inteiro.
- No máximo **2 perguntas por âncora** em cada lote gerado.

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

**Regras:**
- **Prioridade:** quando mais de um ângulo servir, vale o **mais específico**. `identidade` e `atributo` são os mais genéricos e só valem **quando nenhum outro serve**.
- **Teto:** `identidade` + `atributo` somam no máximo **30% de cada lote**.

Os ângulos `conexao` e `nome` costumam produzir as perguntas mais memoráveis. Eles devem ser **encomendados ativamente**, porque um gerador sem direção quase nunca chega a eles.

---

## 6. Tipos de pergunta

| `tipo` | Como é jogada | Campo extra |
|---|---|---|
| `aberta` | O narrador lê e o jogador responde livremente | — |
| `multipla` | O narrador lê a pergunta e depois as alternativas | `distratores`: exatamente 3 |

Os valores fixos, como os de `tipo` e `angulo`, são sempre minúsculos e sem acento. O app traduz para exibição ("Múltipla escolha").

**Verdadeiro ou falso não existe.** Funciona mal em voz alta e dá 50% de acerto no chute.

### Distratores

- São as **alternativas erradas**. Ficam **separadas** da resposta, e **o app embaralha** as quatro opções na hora de exibir. Não existe regra de "equilibrar a certa entre A, B, C e D".
- Devem ser **críveis**: da mesma categoria, época e escala da resposta. Em obras de ficção, pelo menos um vem da mesma franquia.
- Cada alternativa tem **no máximo 4 palavras**, porque ninguém guarda quatro frases longas de memória.
- Só existem em perguntas do tipo `multipla`.

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
   - ❌ "Qual meia conhecido como Ronaldinho Gaúcho brilhou no Barcelona?" → "Ronaldinho Gaúcho"
8. **Público informado, mas leigo:** evite termos técnicos desnecessários.

**Resposta (`resposta`):**
- É **direta**: uma palavra, um termo ou uma frase curta, com no máximo cerca de 5 palavras.
- **Não há lista de variantes.** A resposta é a forma mais completa e mais conhecida, e o narrador julga com bom senso.
- **Parênteses só quando for muito apropriado**, com uma observação curta que evite uma injustiça evidente, como um nome de nascimento muito conhecido:
  - `"Gengis Khan (nascido Temujin)"`
  - Na maioria das perguntas, não há parênteses: `"Thomas Edison"`, `"Veneza"`.
- Não traz explicações nem justificativas.

**Fontes (`fonte`):**
- São URLs puras, e não links em markdown.
- São específicas: a página que sustenta **aquele fato**, e não a página inicial de um site.

---

## 8. Critérios de qualidade

Toda pergunta precisa passar nos critérios abaixo. Eles são **aplicados pelo crítico automático** (§10), e um humano pode usá-los numa auditoria.

- [ ] **Resposta única:** não existe outra resposta defensável.
- [ ] **Sem vazamento:** nem pelo enunciado, nem pelos distratores.
- [ ] **Atemporal:** continua correta daqui a 10 anos.
- [ ] **Verificável:** a fonte citada sustenta a resposta.
- [ ] **Precisa:** cada afirmação do enunciado é literalmente verdadeira, e não só a resposta. "O navegador que batizou a Colômbia" é falso: o país recebeu o nome em homenagem a Colombo.
- [ ] **Justa:** um especialista diria "boa pergunta", e não "que detalhe arbitrário".
- [ ] **Interessante:** acertar dá prazer, ou errar ensina algo.
- [ ] **Audível:** cabe na memória de quem ouve e segue §7.
- [ ] **Bem classificada:** tema, subtema, âncora e ângulo são coerentes com o conteúdo.

---

## 9. Regras de variedade

**Em cada lote gerado (tipicamente 20 a 50 perguntas de um subtema):**
- No máximo **25% num mesmo ângulo**.
- Pelo menos **6 ângulos diferentes**.
- `identidade` + `atributo` somam no máximo **30%** (§5).
- No máximo **2 perguntas por âncora**, nunca com o mesmo ângulo.
- **Evite âncoras que já têm muitas perguntas.** O prompt de geração recebe a lista das âncoras já usadas naquele subtema, com as contagens.

**No banco, por subtema:**
- `conexao` + `nome` somam pelo menos **20%**.
- A distribuição por ângulo e por âncora é conferida por script, e os lotes seguintes são **encomendados para preencher as lacunas**.

---

## 10. Fluxo de produção (automático)

```
1. ENCOMENDA     tema, subtema, quantidade, ângulos-alvo,
                 âncoras já usadas no subtema (para evitar)
        ↓
2. GERAÇÃO       o LLM produz o lote seguindo este manifesto;
                 para cada âncora, informa nome, descrição, variantes e fontes
        ↓
3. CRÍTICA       outro prompt aplica os critérios (§8) pergunta a pergunta,
                 abrindo as fontes na web; também checa a granularidade da
                 âncora; cada pergunta é aprovada, reescrita ou descartada
        ↓
4. ÂNCORAS       resolução automática contra o cadastro (abaixo)
        ↓
5. VALIDAÇÃO     script: esquema JSON, URLs respondem, regras de variedade (§9)
        ↓
6. REGISTRO      as perguntas entram no banco; toda decisão automática vai para o log
```

### Resolução automática de âncoras

1. **Comparação exata:** nome e variantes, normalizados (minúsculas, sem acento), batem com alguma entrada do cadastro? Se sim, usa o `id` existente e acrescenta as variantes novas.
2. **Candidatos:** se não houver correspondência exata, um script seleciona as entradas mais parecidas por semelhança de texto.
3. **Juiz automático:** um LLM, numa chamada separada, compara a proposta com os candidatos, **incluindo as descrições**, e decide:
   - **mesma entidade** → usa o `id` existente;
   - **entidade nova** → cria a entrada.
4. **Fontes:** se nenhuma URL da âncora responder, ela é rejeitada, e as perguntas que dependem dela são descartadas.

A granularidade da âncora (§4) é conferida antes, pelo crítico (etapa 3).

**Na dúvida, criar em vez de fundir.** Uma duplicata é inofensiva e corrigível depois. Uma fusão errada corrompe as contagens.

### Consolidação periódica

De tempos em tempos, um script procura pares suspeitos de duplicata no cadastro inteiro, e o juiz automático decide sobre eles. A entrada absorvida **não é apagada**: recebe `fundida_em` com o `id` da entrada que a absorveu. Assim nenhum `id` deixa de existir, e perguntas antigas continuam válidas.

### Log

Toda decisão automática (crítica, resolução de âncora, fusão) é registrada com data, entrada, decisão e motivo. É o que permite auditar e reverter qualquer decisão, sem que a aprovação humana seja obrigatória.

---

## 11. Esquemas

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
| `id` | ✔ | `q` + 5 dígitos. Opaco, permanente e nunca reutilizado |
| `tema` | ✔ | Da lista canônica (§3) |
| `subtema` | ✔ | Da lista canônica. No desempate, o mais específico (§3) |
| `ancora` | ✔ | `id` de uma entrada do cadastro de âncoras (§4) |
| `angulo` | ✔ | Um dos 11 valores (§5) |
| `tipo` | ✔ | `aberta` ou `multipla` (§6) |
| `pergunta` | ✔ | Enunciado para voz (§7) |
| `resposta` | ✔ | Direta, sem lista de variantes. Parênteses só quando for muito apropriado (§7) |
| `fonte` | ✔ | Lista com 1 ou mais URLs puras |
| `distratores` | só em `multipla` | Exatamente 3. Proibido em `aberta` (§6) |
| `autor` | — | Autor humano. Só é preenchido quando indicado |

### Âncora ([`ancora.schema.json`](ancora.schema.json))

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
| `fundida_em` | — | `id` da entrada que absorveu esta. Só aparece após uma fusão |

### Regra de evolução

Os dois esquemas só podem mudar **por acréscimo de campos opcionais** ou por **acréscimo de valores** às listas fechadas. Nunca por remoção, renomeação ou mudança de tipo. Assim, toda pergunta e toda âncora já criadas continuam válidas para sempre.

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
| `excecao` removido | No lote piloto, o ângulo virou um molde repetitivo ("X é a cidade famosa, mas qual é a capital?") e tendia a perguntas de sim ou não. Removido antes de existir qualquer pergunta no banco, por isso sem violar a regra de evolução |
| `dificuldade` não adotada | Em iterações anteriores, o LLM não conseguiu estimá-la de forma confiável |
| Época e região não adotadas | Podem ser derivadas das fontes da âncora |
| Verdadeiro ou falso removido | Funciona mal em voz alta e dá 50% de acerto no chute |
| `tipo` com valores `aberta` e `multipla` | Minúsculas e sem acento, como todos os valores fixos. O app traduz para exibição |
| `distratores` separados, só em `multipla` | Permite ao app embaralhar e aplicar o 50/50. Elimina a regra de equilibrar A, B, C e D |
| Sem campo ou fórmula de variantes da resposta | A resposta é direta, com parênteses só quando for muito apropriado. O narrador julga com bom senso |
| `autor` mantido como opcional | Registra a proveniência e custa nada |
| Fluxo sem validação manual obrigatória | Crítica e resolução de âncoras são automáticas, com log auditável |
| Nova lista de temas e subtemas (8 e 69) | Variedades extinto e redistribuído. Seis subtemas removidos por envelhecerem rápido ou serem difíceis de verificar. Duplicatas fundidas. Lacunas preenchidas. Detalhes em [`proposta_temas_subtemas.md`](proposta_temas_subtemas.md) |

---

## 13. Pendências

- [x] **Revisar a lista canônica de temas e subtemas.** *Decidido: 8 temas e 69 subtemas, em [`temas_subtemas.json`](temas_subtemas.json).*
- [ ] **Calibrar os limites por âncora** (§4) e as regras de variedade (§9).
- [x] **Escrever os prompts** de geração, crítica e juiz de âncoras, e os scripts do fluxo (§10). *Feito: pasta [`pipeline/`](../pipeline/README.md), usando o Claude Code em modo não interativo, sem custo de API.*

