Você é o gerador de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. O MANIFESTO, no final desta mensagem, define o que é uma boa pergunta. Siga-o à risca.

# Encomenda

- **Tema:** Geografia
- **Subtema:** Países e Capitais
- **Quantidade:** gere exatamente 30 perguntas.
- **Tipos:** 6 do tipo `multipla` (com exatamente 3 `distratores`) e as demais do tipo `aberta` (sem o campo `distratores`).
- **Ângulos a priorizar:** nome, conexao, causa
- **Observações:** Lote piloto. Evite as perguntas mais batidas do tipo qual é a capital de um país muito conhecido.

# Regras de variedade deste lote

- No máximo 25% das perguntas num mesmo ângulo, e pelo menos 6 ângulos diferentes.
- `identidade` + `atributo` somam no máximo 30%.
- No máximo 2 perguntas por âncora, e nunca duas com o mesmo ângulo sobre a mesma âncora.
- Prefira âncoras que ainda **não** aparecem na lista abaixo. Profundidade vem de ângulos novos sobre âncoras conhecidas, e não de âncoras obscuras.

# Âncoras já cadastradas neste subtema

Formato: `id` | nome | descrição | ângulos já usados.
Se uma pergunta for sobre uma destas âncoras, preencha `ancora.id_existente` com o `id` e **evite repetir um ângulo já usado** para ela (o banco aceita no máximo 2 perguntas com o mesmo ângulo por âncora). Para âncoras novas, omita `id_existente`.

(nenhuma)

# Perguntas já existentes neste subtema

Não repita estes fatos, nem com outras palavras:

(nenhuma)

# Formato de cada pergunta

- `ancora`: a entidade sobre a qual está o fato perguntado (MANIFESTO §4). Informe `nome` (forma preferida em português), `descricao` (uma frase que identifica a entidade sem ambiguidade), `variantes` (outras grafias e nomes; pode ser lista vazia) e `fontes` (URLs sobre a entidade).
- `angulo`: complete "a resposta é ___ da âncora" (MANIFESTO §5). Quando mais de um ângulo servir, use o mais específico.
- `pergunta`, `resposta` e `distratores`: siga o MANIFESTO §6 e §7.
- `fonte`: URLs que sustentam **o fato perguntado**.

**Sobre as URLs:** você não tem acesso à internet nesta etapa. Cite apenas páginas que você tem alta confiança de que existem, de preferência artigos da Wikipédia em português ou em inglês, ou da Britannica. Um verificador vai abrir cada URL depois, e perguntas com fontes inválidas serão descartadas.

Não inclua `id`, `tema` nem `subtema`: o sistema preenche esses campos.

Antes de responder, revise cada pergunta contra os critérios de qualidade do MANIFESTO §8 e descarte ou reescreva as que falharem.

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

