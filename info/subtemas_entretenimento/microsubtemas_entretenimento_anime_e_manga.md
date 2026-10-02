```yaml
---
tema: "Entretenimento"
tema_clean: "entretenimento"
subtema: "Anime e Mangá"
subtema_clean: "anime_e_manga"

microsubtema: "Personagem → Franquia (identificação)"
microsubtema_clean: "personagem_franquia_identificacao"

natureza: "transversal"
localizacao: "irrestrita"

status: "ativo"
---
```

## Personagem → Franquia (identificação) — `personagem_franquia_identificacao`

**Natureza.** Transversal.
**Descrição.** Dado o **nome de um personagem** (e, quando necessário, um detalhe mínimo de desambiguação), identificar a **obra/franquia** (mangá/anime/filme) em que ele é canônico. Spoilers permitidos, mas o foco é o mapeamento personagem→franquia, não crítica ou opinião.
**Localização.** Irrestrita.

### Escopo

**Inclusões (não exaustivo)**

* Personagens de obras tipicamente classificadas como **anime/mangá** (incluindo franquias com múltiplas mídias).
* Personagens principais e secundários recorrentes, com **nomes completos**, epítetos, alcunhas e “formas” (ex.: nomes civis vs. codinomes) quando isso ajudar a manter a pergunta **auto-contida**.
* Casos em que a pergunta explicita a mídia quando necessário (ex.: “no anime…”, “no mangá…”), mantendo a resposta como o **título/franquia**.

**Exclusões**

* Nomes **ambíguos** sem desambiguação mínima (ex.: só “Sakura” ou só “Ken”), a menos que a pergunta traga um detalhe claro (sobrenome, título, cargo, poder, etc.).
* Personagens de **outras mídias** (HQ ocidental, live-action etc.) quando não forem claramente parte do ecossistema anime/mangá.
* Perguntas cujo foco principal seja **grupo/organização** ou **papel narrativo** (essas ficam para os dois microsubtemas seguintes).
* Atualidades efêmeras (“hype”, rankings semanais) e conteúdos especulativos. (O subtema pede evitar esse tipo de volatilidade.)

**Referências (exemplos)**

* Wikipedia (EN): páginas do personagem + página da obra.
* Anime News Network Encyclopedia: verbetes da obra e do personagem.
* Sites oficiais (quando existirem) de estúdio, editora, ou página oficial da franquia (para confirmação de nomes/credits/cânone).
* Enciclopédias e catálogos de editoras (Viz, Kodansha, Shueisha etc.) para obras muito populares.

### Matriz de variação (eixos)

* **Nível de popularidade:** ícones globais vs. obras cult.
* **Tipo de nome:** nome completo, apelido, título, identidade secreta (spoilers ok).
* **Mídia/entrada:** personagem mais associado ao mangá vs. ao anime vs. a filme.
* **Período:** clássicos (anos 70–90), 2000s, 2010s, 2020s.
* **Demografia/gênero de origem:** shōnen, shōjo, seinen, josei; mecha, esporte, fantasia, horror etc. (apenas como eixo de diversidade, sem virar “microsubtema de gênero”).

### Exemplos de enunciados (modelos)

**A) Aberta (4 exemplos)**

1. “O personagem **Light Yagami** pertence a qual franquia?”
2. “O personagem **Saitama** é de qual obra/franquia?”
3. “A personagem **Usagi Tsukino** é protagonista de qual franquia?”
4. “O personagem **Spike Spiegel** aparece em qual anime?”

**B) Múltipla escolha (4 exemplos)**

1. “O personagem **Eren Yeager** é de qual franquia?\nA) Naruto\nB) Attack on Titan\nC) One Piece\nD) Bleach”
2. “A personagem **Hinata Hyuga** pertence a qual obra?\nA) My Hero Academia\nB) Naruto\nC) Fairy Tail\nD) Jujutsu Kaisen”
3. “O personagem **Edward Elric** é de qual franquia?\nA) Fullmetal Alchemist\nB) Dragon Ball\nC) Yu Yu Hakusho\nD) Black Clover”
4. “A personagem **Madoka Kaname** é de qual franquia?\nA) Sailor Moon\nB) Puella Magi Madoka Magica\nC) Cardcaptor Sakura\nD) Tokyo Mew Mew”

**C) Verdadeiro/Falso (4 exemplos)**

1. “**Lelouch vi Britannia** é um personagem de *Code Geass*.” (V/F)
2. “**Killua Zoldyck** é um personagem de *Bleach*.” (V/F)
3. “**Mikasa Ackerman** é uma personagem de *Attack on Titan*.” (V/F)
4. “**Guts** é o protagonista de *Berserk*.” (V/F)

### Checklist (antes de gerar as ~100 perguntas)

* [ ] Perguntas **auto-contidas** e em pt-BR (com desambiguação quando necessário).
* [ ] Fatos verificáveis em fontes estáveis (ex.: Wikipedia EN + fonte adicional).
* [ ] Diversidade planejada (períodos, gêneros, níveis de popularidade).
* [ ] Sem duplicatas / sem enunciados muito similares.
* [ ] **Máx. 5 perguntas por personagem** no conjunto do microsubtema.

---

---

```yaml
---
tema: "Entretenimento"
tema_clean: "entretenimento"
subtema: "Anime e Mangá"
subtema_clean: "anime_e_manga"

microsubtema: "Shōnen (demografia editorial)"
microsubtema_clean: "shonen_demografia_editorial"

natureza: "tematico"
localizacao: "irrestrita"

status: "ativo"
---
```

## Shōnen (demografia editorial) — `shonen_demografia_editorial`

**Natureza.** Temático.
**Descrição.** Recorte focado em **shōnen como categoria editorial/demográfica**: definição e contraste com outras demografias, **revistas shōnen** (antologias/serialização), editoras/linhas, e **obras emblemáticas** (com spoilers permitidos) como base para perguntas factuais (créditos, serialização, adaptação, arcos). Shōnen é geralmente definido como mangá voltado a **meninos adolescentes** (categoria demográfica, não “gênero”). ([Wikipedia][1])
**Localização.** Irrestrita.

### Escopo

**Inclusões (não exaustivo)**

* **Definição e fronteiras**: o que caracteriza shōnen como **demografia editorial**; diferenças vs. shōjo/seinen/josei/kodomo; “demografia ≠ gênero”. ([Wikipedia][1])
* **Revistas e serialização**: revistas shōnen e seus “ecossistemas” (editora, periodicidade como conceito, linha/selo, prática de capítulos → tankōbon). Exemplo canônico: **Weekly Shōnen Jump** (Shueisha). ([Wikipedia][2])
* **Obras emblemáticas** (para gerar questões): séries amplamente reconhecidas como shōnen (ex.: títulos historicamente associados a revistas shōnen e/ou linhas shōnen). *A lista serve de bússola, não é limitante.*
* **Dados estáveis para perguntas**:

  * revista de publicação/serialização (quando estável e verificável),
  * editora/linha (quando aplicável),
  * autor(a) e equipe principal,
  * ordem de arcos/sagas, eventos canônicos (spoilers ok),
  * diferenças mangá vs anime (cortes, fillers, filmes/OVA relacionados).

**Exclusões**

* “Top shōnen do ano”, métricas voláteis (vendas recentes, circulação trimestral, tendências).
* Perguntas de opinião (“melhor shōnen”, “mais emocionante”).
* Rumores/teorias de fãs como base única.

**Referências (exemplos)**

* Wikipedia (EN) para: demografia shōnen, páginas de revistas e obras. ([Wikipedia][1])
* Anime News Network Encyclopedia (obra/revista).
* Sites oficiais de editoras/linhas (quando houver páginas de catálogo).

### Matriz de variação (eixos)

* **Revista** (ex.: Weekly Shōnen Jump vs outras antologias shōnen) e **editora** (Shueisha/Kodansha/Shogakukan etc.). ([Wikipedia][2])
* **Subtipos narrativos dentro de shōnen** (ação/aventura/esporte/fantasia/sobrenatural etc.) sem confundir com “gênero = demografia”.
* **Época** (clássicos vs contemporâneos), e “ondas” (ex.: batalhas/torneios vs mistério/sci-fi).
* **Mídia** (mangá base vs anime; filmes canônicos; OVAs).
* **Formato de pergunta**: definição/contraste; revista→demografia; obra→revista; obra→evento canônico (spoiler).

### Exemplos de enunciados (modelos)

**A) Aberta (4 exemplos)**

1. “Em termos editoriais, ‘shōnen manga’ é voltado principalmente para qual público-alvo?”
2. “Qual revista semanal da Shueisha é um exemplo clássico de antologia shōnen?”
3. “Qual demografia editorial contrasta mais diretamente com shōnen no eixo ‘meninas adolescentes’?”
4. “Capítulos publicados em revista shōnen costumam ser compilados posteriormente em qual formato de volume?”

**B) Múltipla escolha (4 exemplos)**

1. “Shōnen manga é, principalmente, uma categoria de:\nA) Gênero narrativo\nB) Demografia editorial\nC) Técnica de animação\nD) Estilo de arte exclusivo”
2. “Qual revista é um exemplo emblemático de publicação shōnen?\nA) Weekly Shōnen Jump\nB) Morning\nC) Ribon\nD) You”
3. “Qual opção descreve melhor shōnen?\nA) Voltado a homens adultos\nB) Voltado a meninos adolescentes\nC) Voltado a mulheres adultas\nD) Voltado a crianças pequenas”
4. “Qual demografia é mais associada a ‘homens jovens/adultos’, em contraste com shōnen?\nA) Shōjo\nB) Josei\nC) Seinen\nD) Kodomo”

**C) Verdadeiro/Falso (4 exemplos)**

1. “Shōnen é uma classificação editorial/demográfica, não um gênero narrativo.” (V/F)
2. “Weekly Shōnen Jump é uma revista associada à demografia shōnen.” (V/F)
3. “Seinen é a demografia tradicionalmente voltada a meninos adolescentes.” (V/F)
4. “Perguntas baseadas em arcos e eventos canônicos podem incluir spoilers neste microsubtema.” (V/F)

### Checklist (antes de gerar as ~100 perguntas)

* [ ] Perguntas ancoradas em **fatos estáveis** (definições, revistas, créditos, serialização).
* [ ] Evitar métricas voláteis e “hype”.
* [ ] Cobrir revistas/editoras + obras emblemáticas + contraste entre demografias.
* [ ] Textos auto-contidos e sem ambiguidade (com desambiguação quando necessário).
* [ ] Planejar diversidade para não concentrar tudo em 2–3 obras.

---

---

```yaml
---
tema: "Entretenimento"
tema_clean: "entretenimento"
subtema: "Anime e Mangá"
subtema_clean: "anime_e_manga"

microsubtema: "Isekai"
microsubtema_clean: "isekai"

natureza: "tematico"
localizacao: "irrestrita"
status: "ativo"
---
```

## Isekai — `isekai`

**Natureza.** Temático.
**Descrição.** Obras em que o protagonista (ou grupo) é **transportado/reencarnado/“invocado”** para **outro mundo** (fantasia, mundo paralelo, “mundo do jogo”, outra era), e a história explora **regras desse novo mundo**. Spoilers ok (mortes, resets, identidades, revelações sobre o “mundo real” etc.).

### Escopo

**Inclusões (não exaustivo)**

* Tipos clássicos: **reencarnação**, **invocação**, **portal/teleporte**, **preso em VR/MMO**, “mundo de livro/otome/game”.
* Elementos recorrentes: status/níveis, guildas, magia, reinos, “party”, contratos, profecias, retorno/loop temporal (quando for parte do mecanismo do isekai).
* Perguntas factuais sobre: **premissa**, mecânica de viagem/reencarnação, regras do mundo, classes/poderes, facções, eventos canônicos (spoilers).

**Exclusões**

* Fantasia “local” sem deslocamento para outro mundo (isso vai para fantasia geral, não isekai).
* Sci-fi de exploração espacial sem “outro mundo” no sentido narrativo do isekai (a menos que seja explicitamente “transportado para outro mundo”).
* Perguntas de opinião (“melhor isekai”) e métricas voláteis.

**Referências (exemplos)**

* Wikipedia (EN) para premissas, personagens, arcos.
* Anime News Network Encyclopedia (obra/personagens).
* Sites oficiais de anime/mangá quando houver.

### Matriz de variação (eixos)

* **Mecanismo:** reencarnação vs invocação vs portal vs VR.
* **Tom:** comédia/paródia vs drama/tragédia vs épico.
* **Progresso:** “OP desde o início” vs crescimento gradual vs maldição/limitação.
* **Foco:** política do reino, dungeon, vida cotidiana no novo mundo, romance.
* **Spoiler-driven:** loop temporal, origem do mundo, identidade de antagonistas, “retorno ao mundo original”.

### Exemplos de enunciados (modelos)

**A) Aberta (4)**

1. “Em *Re:Zero*, qual é a habilidade/condição que explica por que Subaru ‘recomeça’ após morrer?”
2. “Em *KonoSuba*, para qual tipo de mundo Kazuma é enviado após morrer?”
3. “Em *Sword Art Online*, qual é a condição central que prende os jogadores no jogo?”
4. “Em *Tensei Shitara Slime Datta Ken*, em que forma o protagonista reencarna?”

**B) Múltipla escolha (4)**

1. “Qual elemento é mais característico de isekai?\nA) Protagonista vira detetive\nB) Protagonista vai para outro mundo\nC) História só no mundo real\nD) Enredo sem mudança de ambiente”
2. “Qual é um exemplo comum de isekai ‘reencarnação’?\nA) O herói acorda no hospital\nB) O herói renasce em outro mundo\nC) O herói vira piloto de mecha\nD) O herói entra numa escola”
3. “Em *SAO*, o risco principal é:\nA) Perder itens do inventário\nB) Morrer no jogo e morrer na vida real\nC) Ser banido do servidor\nD) Perder pontos de magia”
4. “Em isekai, ‘status/níveis’ costuma servir para:\nA) Ranking de popularidade\nB) Medir progressão do personagem\nC) Definir cor do traço\nD) Explicar produção do estúdio”

**C) Verdadeiro/Falso (4)**

1. “Isekai normalmente envolve deslocamento para outro mundo.” (V/F)
2. “Reencarnação é um mecanismo comum em isekai.” (V/F)
3. “Slice of life é sinônimo de isekai.” (V/F)
4. “Perguntas sobre regras do novo mundo podem incluir spoilers.” (V/F)

### Checklist

* [ ] A pergunta depende de **um fato canônico** (premissa/regras/evento), não de gosto pessoal.
* [ ] O “outro mundo” é **central** (não apenas um episódio).
* [ ] Cobrir vários mecanismos (reencarnação, invocação, VR, portal).
* [ ] Evitar classificações controversas sem pista clara no enunciado.

---

```yaml
---
tema: "Entretenimento"
tema_clean: "entretenimento"
subtema: "Anime e Mangá"
subtema_clean: "anime_e_manga"

microsubtema: "Mecha"
microsubtema_clean: "mecha"

natureza: "tematico"
localizacao: "irrestrita"
status: "ativo"
---
```

## Mecha — `mecha`

**Natureza.** Temático.
**Descrição.** Obras centradas em **máquinas gigantes/robôs** (pilotados ou autônomos) e no impacto disso: guerra, política, tecnologia, psicologia de pilotos, sociedades e facções. Spoilers ok (identidade de antagonistas, “verdade” do mundo, final de guerras).

### Escopo

**Inclusões**

* **Real robot** vs **super robot**; guerras e conflitos; organizações militares.
* Relações piloto↔máquina (sincronia, trauma, IA, “mecha vivo”).
* Perguntas factuais sobre: modelos/unidades, facções, sistemas de energia/armas, papel do protagonista, eventos de batalha (spoilers).

**Exclusões**

* Armaduras/power suits sem foco em “mecha” (a menos que a obra trate como mecha).
* Sci-fi geral sem elemento de robô gigante como núcleo.
* Perguntas puramente técnicas de produção (orçamento, audiência).

**Referências (exemplos)**

* Wikipedia (EN), ANN Encyclopedia, sites oficiais das franquias/estúdios.

### Matriz de variação

* **Subtipo:** real robot vs super robot.
* **Escala:** guerra planetária vs conflito local vs torneio.
* **Mecha:** pilotado, remoto, autônomo, orgânico/simbiótico.
* **Tema:** política, anti-guerra, evolução humana, horror existencial.
* **Spoilers:** origem do mecha, plano final, identidade do “comandante”/inimigo.

### Exemplos

**A) Aberta (4)**

1. “Em *Neon Genesis Evangelion*, qual é a natureza/‘verdade’ por trás dos Evas (spoiler)?”
2. “Em *Code Geass*, qual poder especial Lelouch recebe e que catalisa a revolução?”
3. “Em *Gundam*, qual tema recorrente aparece sobre guerra e custo humano?”
4. “Em *Gurren Lagann*, qual é a força/mecânica central que permite ‘furar os limites’?”

**B) Múltipla escolha (4)**

1. “Mecha geralmente tem como núcleo:\nA) Cozinha e cotidiano\nB) Robôs/máquinas gigantes\nC) Drama jurídico\nD) Romance histórico sem sci-fi”
2. “Uma distinção comum no mecha é:\nA) Shōnen vs shōjo\nB) Real robot vs super robot\nC) Dublado vs legendado\nD) Manga vs light novel”
3. “*Evangelion* mistura mecha com forte componente de:\nA) Comédia romântica pura\nB) Horror psicológico/trauma\nC) Esporte escolar\nD) Culinária”
4. “Em muitas obras mecha, ‘facções’ costumam ser:\nA) Times de culinária\nB) Exércitos/estados/ordens\nC) Bandas musicais\nD) Clubes de fotografia”

**C) Verdadeiro/Falso (4)**

1. “Mecha frequentemente envolve guerra e facções.” (V/F)
2. “Mecha é sinônimo de isekai.” (V/F)
3. “É aceitável perguntar sobre o final de uma guerra na obra (spoiler).” (V/F)
4. “‘Real robot’ tende a tratar tecnologia e guerra de forma mais ‘pé no chão’.” (V/F)

### Checklist

* [ ] Mecha é **o centro** da obra/pergunta (não só um detalhe).
* [ ] Variar subtipos (real/super, autônomo/pilotado).
* [ ] Spoilers usados com **fato verificável** (não interpretação).

---

```yaml
---
tema: "Entretenimento"
tema_clean: "entretenimento"
subtema: "Anime e Mangá"
subtema_clean: "anime_e_manga"

microsubtema: "Mahō Shōjo"
microsubtema_clean: "mahou_shoujo"

natureza: "tematico"
localizacao: "irrestrita"
status: "ativo"
---
```

## Mahō Shōjo — `mahou_shoujo`

**Natureza.** Temático.
**Descrição.** Subgênero “magical girl”: protagonistas (geralmente meninas) com **transformações**, **artefatos**, **identidade secreta**, **equipes**, mascotes/contratos, missões e antagonistas. Spoilers ok (verdade dos contratos, sacrifícios, finais).

### Escopo

**Inclusões**

* Transformação, itens mágicos, nomes de forma/ataques, companheiros mascotes.
* Estruturas: “monster of the week”, equipes, “vilão do arco”, contratos e custo do poder.
* Perguntas factuais sobre: equipe, artefatos, antagonistas, regras do sistema mágico, eventos finais (spoilers).

**Exclusões**

* Fantasia com garotas mágicas sem estrutura/tropo de magical girl (se não for identificável).
* “Menino mágico” pode entrar se a obra ainda operar claramente no molde mahou shoujo.
* Discussão puramente estética (“melhor transformação”).

**Referências**

* Wikipedia (EN), ANN, materiais oficiais/databooks quando existirem.

### Matriz de variação

* **Clássico vs desconstrução** (tradicional vs “dark mahou shoujo”).
* **Formato:** equipe grande vs dupla vs solo.
* **Sistema:** contrato, herança, item, tecnologia.
* **Antagonismo:** monstros episódicos vs guerra cósmica.
* **Spoilers:** custo do poder, destino final, identidade de vilões.

### Exemplos

**A) Aberta (4)**

1. “Em *Puella Magi Madoka Magica*, qual é a ‘pegadinha’ central do contrato com Kyubey (spoiler)?”
2. “Em *Sailor Moon*, qual é o papel de Usagi como líder/figura central do time?”
3. “Em *Cardcaptor Sakura*, o que Sakura precisa coletar/selar ao longo da história?”
4. “Em uma obra mahou shoujo, qual elemento costuma marcar a mudança para o ‘modo heroína’?”

**B) Múltipla escolha (4)**

1. “Um elemento típico de mahou shoujo é:\nA) Mecha militar realista\nB) Transformação + item mágico\nC) Isekai por reencarnação\nD) Torneio esportivo”
2. “*Madoka Magica* é frequentemente citada como:\nA) Comédia de escritório\nB) Desconstrução ‘dark’ do subgênero\nC) Mecha clássico\nD) Slice of life rural sem magia”
3. “Mascotes em mahou shoujo costumam servir para:\nA) Explicar regras e dar missão\nB) Ser narrador histórico real\nC) Ser técnico de som\nD) Ser juiz esportivo”
4. “Um ‘time’ de heroínas é mais comum em:\nA) Thriller policial\nB) Mahō shōjo\nC) Drama jurídico\nD) Western”

**C) Verdadeiro/Falso (4)**

1. “Transformações são um tropo comum de mahou shoujo.” (V/F)
2. “Mahō shōjo não pode ter finais trágicos (spoiler).” (V/F)
3. “Itens mágicos frequentemente definem poderes e ataques.” (V/F)
4. “Perguntas sobre custo do contrato podem ser usadas (spoiler).” (V/F)

### Checklist

* [ ] Há **marca clara** do subgênero (transformação/itens/estrutura).
* [ ] Variar entre clássico e desconstrução.
* [ ] Spoilers sempre com evento canônico **bem definido**.

---

```yaml
---
tema: "Entretenimento"
tema_clean: "entretenimento"
subtema: "Anime e Mangá"
subtema_clean: "anime_e_manga"

microsubtema: "Slice of Life"
microsubtema_clean: "slice_of_life"

natureza: "tematico"
localizacao: "irrestrita"
status: "ativo"
---
```

## Slice of Life — `slice_of_life`

**Natureza.** Temático.
**Descrição.** Obras focadas no **cotidiano**: escola, trabalho, amizades, rotinas, pequenas conquistas, humor e/ou drama íntimo. Spoilers ok (confissões, despedidas, mudanças de cidade, desfechos de arcos pessoais).

### Escopo

**Inclusões**

* Ambientações: clube escolar, banda, camping, interior, vida adulta, workplace.
* Conflitos de baixa escala: relacionamentos, objetivos pessoais, amadurecimento.
* Perguntas factuais: setting, atividades centrais, relações entre personagens, eventos marcantes (spoilers).

**Exclusões**

* Ação/aventura onde o “cotidiano” é só intervalo.
* Mistério/horror como motor principal (vai para outros microsubtemas).
* Perguntas “o episódio mais engraçado”.

**Referências**

* Wikipedia (EN), ANN, sites oficiais (sinopses e personagens).

### Matriz de variação

* **Ambiente:** escola vs trabalho vs interior vs viagem.
* **Tom:** comédia, drama, “iyashikei” (conforto), coming-of-age.
* **Grupo:** amigos, família, colegas de trabalho.
* **Estrutura:** episódico vs arco emocional longo.
* **Spoilers:** mudança de fase (formatura, separação, reconciliação, final).

### Exemplos

**A) Aberta (4)**

1. “Em *K-On!*, qual é a atividade central que une as protagonistas?”
2. “Em *Yuru Camp*, qual hobby é o foco do grupo?”
3. “Em *Barakamon*, por que o protagonista vai para a ilha (evento inicial)?”
4. “Em slice of life, qual tipo de conflito costuma ser mais comum: ‘guerra mundial’ ou ‘rotina/relacionamentos’?”

**B) Múltipla escolha (4)**

1. “Slice of life costuma focar em:\nA) Grandes batalhas\nB) Cotidiano e relações\nC) Conspiração policial\nD) Horror sobrenatural”
2. “Qual cenário combina mais com slice of life?\nA) Campo de batalha futurista\nB) Clube escolar e rotina\nC) Torre de dungeon infinita\nD) Prisão intergaláctica”
3. “Um final comum em slice of life pode envolver:\nA) Explosão do planeta\nB) Formatura/mudança de fase\nC) Invasão alienígena\nD) Apocalipse zumbi”
4. “Quando a obra é episódica, isso costuma significar:\nA) Cada episódio fecha um ‘recorte’ do cotidiano\nB) Não existe personagem fixo\nC) Só há cenas de luta\nD) Só há flashbacks históricos”

**C) Verdadeiro/Falso (4)**

1. “Slice of life pode ter drama e ainda ser slice of life.” (V/F)
2. “Slice of life exige magia para funcionar.” (V/F)
3. “Spoilers como ‘formatura’ podem aparecer se forem canônicos.” (V/F)
4. “O foco tende a ser mais íntimo do que épico.” (V/F)

### Checklist

* [ ] O cotidiano é **o motor** da história/pergunta.
* [ ] Variar ambientes (escola, trabalho, interior).
* [ ] Spoilers usados como **marcos de arco** (mudanças de vida).

---

```yaml
---
tema: "Entretenimento"
tema_clean: "entretenimento"
subtema: "Anime e Mangá"
subtema_clean: "anime_e_manga"

microsubtema: "Esportes"
microsubtema_clean: "esportes"

natureza: "tematico"
localizacao: "irrestrita"
status: "ativo"
---
```

## Esportes — `esportes`

**Natureza.** Temático.
**Descrição.** Obras cujo núcleo é **competição esportiva** (times/duplas/individuais), treinamento, campeonatos, posições, estratégia e evolução. Spoilers ok (resultados de partidas, campeões, lesões, aposentadorias).

### Escopo

**Inclusões**

* Esportes reais e variações ficcionais claramente estruturadas como esporte.
* Elementos: posições, regras básicas, treinadores, torneios, rivalidades.
* Perguntas factuais: esporte da obra, time, posição do personagem, torneio-chave, resultado canônico (spoiler).

**Exclusões**

* “Clube escolar” sem foco esportivo (vai para slice of life).
* Poderes sobrenaturais dominando a lógica do esporte a ponto de virar batalha (ainda pode entrar se a estrutura esportiva for central — mas o enunciado precisa deixar claro).
* Rankings reais de atletas/clubes.

**Referências**

* Wikipedia (EN), ANN, sites oficiais; guias de personagens quando disponíveis.

### Matriz de variação

* **Modalidade:** vôlei, basquete, futebol, boxe, corrida, patinação etc.
* **Formato:** time vs individual; liga vs mata-mata.
* **Jornada:** novato→titular, retorno de lesão, “time azarão”.
* **Tática:** posições, formações, “assinaturas” técnicas.
* **Spoilers:** partidas decisivas, títulos, derrotas marcantes.

### Exemplos

**A) Aberta (4)**

1. “Em *Haikyuu!!*, qual esporte é o foco da história?”
2. “Em *Hajime no Ippo*, qual modalidade o protagonista pratica?”
3. “Em histórias de esporte, qual evento costuma encerrar um arco: um ‘slice of life’ ou um ‘torneio final’?”
4. “Cite um tipo de rivalidade comum em anime de esportes.”

**B) Múltipla escolha (4)**

1. “Um elemento típico do subgênero esportes é:\nA) Contrato com mascote mágico\nB) Treinamento + campeonato\nC) Teleporte para outro mundo\nD) Horror de maldição”
2. “Em geral, a estrutura narrativa mais comum é:\nA) Mistério policial sem partidas\nB) Arcos que culminam em jogos/competições\nC) Guerra interplanetária\nD) Debate parlamentar”
3. “Em esportes de time, perguntas úteis incluem:\nA) Posição do personagem\nB) Cor favorita do autor\nC) Preço do Blu-ray\nD) Nota do IMDb”
4. “Se a pergunta revela o campeão do torneio, isso é:\nA) Um erro sempre\nB) Um spoiler permitido aqui\nC) Proibido por regra\nD) Uma opinião”

**C) Verdadeiro/Falso (4)**

1. “Anime de esportes frequentemente usa torneios como clímax.” (V/F)
2. “Resultados de partidas canônicas podem aparecer (spoiler).” (V/F)
3. “Esportes é o mesmo que mecha.” (V/F)
4. “Posições e estratégia costumam ser conteúdo factual perguntável.” (V/F)

### Checklist

* [ ] Competição esportiva é **central**.
* [ ] Variar modalidades e formatos (time/individual).
* [ ] Spoilers com resultados só quando forem **canônicos e inequívocos**.

---

```yaml
---
tema: "Entretenimento"
tema_clean: "entretenimento"
subtema: "Anime e Mangá"
subtema_clean: "anime_e_manga"

microsubtema: "Terror e Horror Sobrenatural"
microsubtema_clean: "terror_horror_sobrenatural"

natureza: "tematico"
localizacao: "irrestrita"
status: "ativo"
---
```

## Terror e Horror Sobrenatural — `terror_horror_sobrenatural`

**Natureza.** Temático.
**Descrição.** Obras que usam medo/tensão com **entidades sobrenaturais**, maldições, possessões, criaturas, rituais, “regras do horror”. Spoilers ok (origem da maldição, identidade do monstro, mortes).

### Escopo

**Inclusões**

* Fantasmas, youkai, maldições, parasitas/entidades, rituais, cidades amaldiçoadas.
* Perguntas factuais: “qual é a maldição?”, “qual regra salva/mata?”, “qual entidade?”, “qual revelação final?” (spoilers).

**Exclusões**

* Thriller policial sem sobrenatural (vai para thriller/mistério).
* Gore “pelo gore” sem motor sobrenatural (pode entrar se o núcleo ainda for horror, mas precisa estar claro).
* “Scares” subjetivos (“mais assustador”).

**Referências**

* Wikipedia (EN), ANN, fontes oficiais.

### Matriz de variação

* **Ameaça:** fantasma, demônio, maldição, parasita, culto, loop temporal macabro.
* **Formato:** mistério sobrenatural vs survival horror vs antologia.
* **Ambiente:** escola, vila isolada, cidade, hospital, internet.
* **Grau:** psicológico vs visceral.
* **Spoilers:** origem/condição de quebra, identidade do “culpado”, final.

### Exemplos

**A) Aberta (4)**

1. “Em *Death Note*, o que é o caderno e qual regra central o torna ‘horror’ moral (spoiler)?”
2. “Em *Higurashi*, qual estrutura narrativa recorrente envolve repetição/loops (spoiler)?”
3. “Em *Another*, qual é o mecanismo/‘anomalia’ que causa mortes na turma (spoiler)?”
4. “Cite um exemplo de ‘regra do horror’ comum: olhar, tocar, nomear, quebrar um tabu etc.”

**B) Múltipla escolha (4)**

1. “Horror sobrenatural costuma envolver:\nA) Torneio esportivo\nB) Maldição/entidade/ritual\nC) Concurso culinário\nD) Simulação de gestão”
2. “Uma pergunta típica do subgênero é:\nA) ‘Quem ganhou o campeonato?’\nB) ‘Qual é a regra da maldição?’\nC) ‘Qual é a editora?’\nD) ‘Qual é o preço do mangá?’”
3. “Se o enunciado revela a identidade do monstro, isso é:\nA) Sempre proibido\nB) Spoiler permitido aqui\nC) Um julgamento subjetivo\nD) Uma estatística”
4. “Qual cenário combina mais com horror sobrenatural?\nA) Base militar com mechas\nB) Vila isolada com rumores de maldição\nC) Clube de música leve\nD) Copa escolar de vôlei”

**C) Verdadeiro/Falso (4)**

1. “Horror sobrenatural pode usar ‘regras’ como mecanismo central.” (V/F)
2. “Spoilers de mortes e revelações finais são permitidos aqui.” (V/F)
3. “Horror sobrenatural é necessariamente comédia.” (V/F)
4. “O enunciado deve deixar claro o elemento sobrenatural.” (V/F)

### Checklist

* [ ] A obra/pergunta tem **sobrenatural explícito**.
* [ ] Variar tipos de ameaça e ambientes.
* [ ] Spoilers sempre em fatos canônicos (origem/identidade/regra).

---

```yaml
---
tema: "Entretenimento"
tema_clean: "entretenimento"
subtema: "Anime e Mangá"
subtema_clean: "anime_e_manga"

microsubtema: "Thriller Psicológico e Mistério"
microsubtema_clean: "thriller_psicologico_misterio"

natureza: "tematico"
localizacao: "irrestrita"
status: "ativo"
---
```

## Thriller Psicológico e Mistério — `thriller_psicologico_misterio`

**Natureza.** Temático.
**Descrição.** Obras movidas por **investigação**, conspiração, jogos mentais, paranoia, “gato e rato”, reviravoltas e revelações. Spoilers ok (culpado, twist, identidade secreta, final verdadeiro).

### Escopo

**Inclusões**

* Detetives, serial killers, conspirações governamentais, dilemas morais, narrador não confiável.
* Perguntas factuais: “quem é X?”, “qual é o twist?”, “qual plano do antagonista?”, “qual revelação final?” (spoilers).

**Exclusões**

* Horror sobrenatural como motor (vai para terror/horror, a menos que seja claramente thriller com elemento sobrenatural secundário).
* Slice of life com mistério leve sem tensão real.
* Perguntas de “melhor plot twist”.

**Referências**

* Wikipedia (EN), ANN, sites oficiais; materiais de guia quando houver.

### Matriz de variação

* **Estrutura:** investigação episódica vs trama serializada.
* **Conflito:** cat-and-mouse, tribunal/psicológico, conspiração sci-fi.
* **Protagonista:** detetive, criminoso, vítima, anti-herói.
* **Ferramenta narrativa:** cartas, caderno, gravações, linha do tempo, manipulação.
* **Spoilers:** culpado, twist, final, “verdade do mundo”.

### Exemplos

**A) Aberta (4)**

1. “Em *Death Note*, qual é o ‘jogo’ central entre Light e L (spoiler)?”
2. “Em *Monster*, qual figura/antagonista está no centro da perseguição moral do protagonista (spoiler)?”
3. “Em *Steins;Gate*, qual mecanismo narrativo (tempo/causalidade) sustenta o mistério (spoiler)?”
4. “Em um thriller psicológico, o que caracteriza um ‘narrador não confiável’?”

**B) Múltipla escolha (4)**

1. “Thriller/mistério costuma girar em torno de:\nA) Rotina sem tensão\nB) Investigação e reviravoltas\nC) Transformação mágica episódica\nD) Campeonato esportivo”
2. “Um tipo de pergunta típica aqui é:\nA) ‘Qual o culpado?’\nB) ‘Qual o melhor ship?’\nC) ‘Qual a cor do uniforme?’\nD) ‘Qual o preço do volume 1?’”
3. “Se o enunciado revela o twist final, isso é:\nA) Um spoiler permitido aqui\nB) Sempre proibido\nC) Necessariamente opinião\nD) Uma estatística”
4. “Qual par de papéis aparece frequentemente?\nA) Chef e crítico\nB) Detetive e suspeito\nC) Piloto e mecha\nD) Atleta e técnico”

**C) Verdadeiro/Falso (4)**

1. “Mistério pode ser episódico ou serializado.” (V/F)
2. “É permitido perguntar ‘quem é o culpado’ (spoiler) se a resposta é canônica.” (V/F)
3. “Thriller psicológico depende de magia de transformação.” (V/F)
4. “O enunciado deve incluir pistas suficientes para não ficar genérico.” (V/F)

### Checklist

* [ ] Mistério/thriller é **o motor** do enredo, não só tempero.
* [ ] Variar estrutura (episódico vs serializado) e tipo de conflito.
* [ ] Spoilers sempre com resposta **inequívoca** (culpado/twist/final).
* [ ] Evitar descrições genéricas (“um assassinato acontece”) sem marca distintiva.

---
---

```yaml
---
tema: "Entretenimento"
tema_clean: "entretenimento"
subtema: "Anime e Mangá"
subtema_clean: "anime_e_manga"

microsubtema: "Pokémon"
microsubtema_clean: "pokemon"

natureza: "tematico"
localizacao: "irrestrita"
status: "ativo"
---
```

## Pokémon — `pokemon`

**Natureza.** Temático (franquia).
**Descrição.** Franquia multimídia originada nos jogos *Pocket Monsters* (conceito de Satoshi Tajiri / Game Freak) e expandida para anime, filmes e mangás; aqui, o foco é gerar perguntas estáveis sobre **mundo, personagens, regiões, organizações e eventos canônicos**, distinguindo **cânone vs material adicional** quando necessário. ([Wikipedia][1])

### Escopo

**Inclusões (não exaustivo)**

* **Anime / filmes animados / mangás** (e jogos apenas como contexto quando inevitável).
* Regiões, iniciais, linhas evolutivas clássicas, tipos e relações de efetividade (em nível básico).
* Organizações (Team Rocket etc.), líderes e papéis recorrentes (treinador, líder de ginásio, campeão).
* Spoilers liberados: finais de ligas/arcos, reviravoltas de vilões, despedidas de parceiros etc.

**Exclusões**

* Conteúdo volátil: eventos temporários, “atual meta”, números “do ano”, contagem “atual” de espécies. (Diretriz geral de evitar hype/rankings.)
* TCG como foco principal (pode aparecer só como contexto estável, sem coleções recentes).

**Referências (exemplos)**

* Wikipedia (EN) da franquia + páginas específicas (regiões, personagens, organizações). ([Wikipedia][1])
* Bases enciclopédicas de mídia (ANN) e sites oficiais quando necessário. 

### Matriz de variação

* Mídia: anime vs mangá (marcar no enunciado quando afetar o fato).
* Região/geração (Kanto/Johto/Hoenn…).
* Tipos (fraquezas/resistências) e evolução.
* Personagens e relações (companheiros, rivais, líderes).
* Organizações/antagonistas.

### Exemplos de enunciados

**A) Aberta (4)**

1. “Qual é o Pokémon inicial do tipo **Planta** da região de **Kanto**?”
2. “Qual é a **evolução final** da linha evolutiva de **Charmander**?”
3. “Qual equipe vilã é **liderada por Giovanni**?”
4. “No anime, qual é o nome do protagonista treinador conhecido internacionalmente como **Ash**?”

**B) Múltipla escolha (4) — distratores da franquia**

1. “Qual é o Pokémon inicial do tipo **Planta** da região de **Kanto**?\nA) Bulbasaur\nB) Charmander\nC) Squirtle\nD) Pikachu”
2. “Qual destes é um **tipo de Poké Ball**?\nA) Ultra Ball\nB) Rare Candy\nC) Pokédex\nD) TM (Technical Machine)”
3. “Qual equipe vilã é **liderada por Giovanni**?\nA) Team Rocket\nB) Team Magma\nC) Team Aqua\nD) Team Galactic”
4. “Qual tipo é **super efetivo contra Água** *e também resiste* a ataques do tipo Água?\nA) Planta\nB) Elétrico\nC) Fogo\nD) Pedra”

**C) Verdadeiro/Falso (4)**

1. “Pikachu pode evoluir para Raichu.” (V/F)
2. “Nem todo Pokémon evolui obrigatoriamente.” (V/F)
3. “Team Rocket é uma organização recorrente no universo Pokémon.” (V/F)
4. “Neste microsubtema, spoilers de arcos e filmes são permitidos.” (V/F)

### Checklist

* [ ] Distinguir cânone/continuidade quando necessário (anime vs mangá etc.).
* [ ] Evitar fatos voláteis/hype/rankings.
* [ ] MC com 4 alternativas plausíveis e 1 correta (sem “todas/nenhuma”).
* [ ] Não criar perguntas cuja resposta seja “Pokémon” (nome da obra).
* [ ] No conjunto: máx. **5 perguntas por entidade** (personagem, organização, região etc.).

---

```yaml
---
tema: "Entretenimento"
tema_clean: "entretenimento"
subtema: "Anime e Mangá"
subtema_clean: "anime_e_manga"

microsubtema: "Dragon Ball"
microsubtema_clean: "dragon_ball"

natureza: "tematico"
localizacao: "irrestrita"
status: "ativo"
---
```

## Dragon Ball — `dragon_ball`

**Natureza.** Temático (franquia).
**Descrição.** Mangá de Akira Toriyama serializado na *Weekly Shōnen Jump* (Shueisha), com ampla expansão para anime, filmes e derivados; aqui o foco é gerar perguntas sobre **sagas/arcos, mecânicas (Esferas do Dragão, ki, transformações), personagens e antagonistas** (spoilers ok). ([Wikipedia][2])

### Escopo

**Inclusões (não exaustivo)**

* Sagas clássicas e eventos canônicos (mortes, retornos, fusões, finais).
* Mecânicas: Esferas do Dragão, dragões (Shenlong/Porunga etc.), desejos e limites.
* Técnicas e transformações (com cuidado para não virar “ranking de poder”).
* Diferenças mangá vs anime quando isso impactar o fato (marcar no enunciado).

**Exclusões**

* “Power level X”, “quem é mais forte”, listas subjetivas e números instáveis.
* Notícias/lançamentos recentes (volátil).

**Referências (exemplos)**

* Wikipedia (EN) do mangá + páginas específicas de sagas/personagens. ([Wikipedia][2])
* Bases enciclopédicas de mídia (ANN) e materiais oficiais quando necessários.

### Matriz de variação

* Arcos (torneios → Saiyajins → Namek/Freeza → Cell → Boo…).
* Antagonistas (tirano espacial, andróides, magia/demônio).
* Mecânicas (dragões/desejos; fusões; técnicas assinatura).
* Spoilers (revelações de origem, sacrifícios, desfechos).
* Mangá vs anime (filler/especial) marcado.

### Exemplos de enunciados

**A) Aberta (4)**

1. “Quantas **Esferas do Dragão** precisam ser reunidas para invocar Shenlong?”
2. “Qual é o nome da técnica clássica associada ao Mestre Kame?”
3. “Qual é o planeta natal da raça **Saiyajin** no cânone principal?”
4. “Na saga de Namekusei, qual é o objetivo de Freeza ao buscar as Esferas do Dragão?”

**B) Múltipla escolha (4) — distratores da franquia**

1. “Quem é o criador do mangá *Dragon Ball*?\nA) Akira Toriyama\nB) Toyotarou\nC) Katsuyoshi Nakatsuru\nD) Takao Koyama” ([Wikipedia][2])
2. “Qual vilão é o foco da saga em **Namekusei**?\nA) Freeza\nB) Cell\nC) Majin Boo\nD) Vegeta (saga Saiyajin)”
3. “Qual é o dragão invocado pelas **Esferas do Dragão da Terra**?\nA) Shenlong\nB) Porunga\nC) Super Shenron\nD) Toronbo”
4. “Qual item é usado para realizar a **fusão Potara**?\nA) Brincos Potara\nB) Cápsulas Hoi-Poi\nC) Radar do Dragão\nD) Semente dos Deuses (Senzu)”

**C) Verdadeiro/Falso (4)**

1. “O mangá *Dragon Ball* foi serializado na *Weekly Shōnen Jump*.” (V/F) ([Wikipedia][2])
2. “Porunga é o dragão associado às Esferas de Namekusei.” (V/F)
3. “Rankings de ‘mais forte’ são bons candidatos a perguntas factuais estáveis.” (V/F)
4. “Neste microsubtema, spoilers de sagas concluídas são permitidos.” (V/F)

### Checklist

* [ ] Evitar power levels e ‘quem é mais forte’.
* [ ] MC com distratores plausíveis do universo e 1 correta.
* [ ] Não criar perguntas cuja resposta seja “Dragon Ball”.
* [ ] Máx. 5 por entidade no conjunto do microsubtema.
* [ ] Priorizar créditos oficiais e cronologias estáveis; evitar hype. 

---

```yaml
---
tema: "Entretenimento"
tema_clean: "entretenimento"
subtema: "Anime e Mangá"
subtema_clean: "anime_e_manga"

microsubtema: "Naruto"
microsubtema_clean: "naruto"

natureza: "tematico"
localizacao: "irrestrita"
status: "ativo"
---
```

## Naruto — `naruto`

**Natureza.** Temático (franquia/obra).
**Descrição.** Mangá de Masashi Kishimoto serializado na *Weekly Shōnen Jump*; foco aqui é gerar perguntas sobre **mundo ninja (chakra/jutsu), vilas e cargos, clãs/dōjutsu, bijū/jinchūriki, organizações e grandes arcos** (spoilers ok). ([Wikipedia][3])

### Escopo

**Inclusões (não exaustivo)**

* Parte I e Parte II (Shippuden), com eventos canônicos (mortes, identidades, finais). ([Wikipedia][3])
* Sistema: chakra; ninjutsu/genjutsu/taijutsu; kekkei genkai; dōjutsu; selamentos.
* Geopolítica: vilas, Kages, guerras, ANBU.
* Organizações: Akatsuki etc.

**Exclusões**

* “Quem é mais forte”, power scaling e listas subjetivas.
* Conteúdo de spin-off/sequência só entra se o enunciado marcar explicitamente (para evitar ambiguidade).

**Referências (exemplos)**

* Wikipedia (EN) de *Naruto* + páginas específicas de dōjutsu, organizações e arcos. ([Wikipedia][3])
* Fontes oficiais (galerias/arquivos) e enciclopédias de mídia, quando necessário. ([naruto-official.com][4])

### Matriz de variação

* Vila/cargo (Hokage/Kage) ↔ personagem.
* Clã ↔ dōjutsu ↔ técnica.
* Bijū ↔ jinchūriki.
* Organização ↔ objetivo ↔ membros.
* Spoilers: identidades mascaradas, reviravoltas, destino de personagens.

### Exemplos de enunciados

**A) Aberta (4)**

1. “Qual é o nome da raposa de nove caudas selada dentro de Naruto?”
2. “Quem é o **Quarto Hokage** de Konoha?”
3. “Qual organização criminosa reúne ninjas renegados e caça os bijū?”
4. “Tobi é revelado como qual personagem (spoiler) na linha principal?”

**B) Múltipla escolha (4) — distratores da franquia**

1. “Qual destes **NÃO** é um dos ‘Três Grandes Dōjutsu’?\nA) Sharingan\nB) Byakugan\nC) Rinnegan\nD) Tenseigan”
2. “Qual time é formado por **Naruto, Sasuke e Sakura**, sob liderança de Kakashi?\nA) Time 7\nB) Time 8\nC) Time 10\nD) Time Guy”
3. “Qual destas organizações é a mais diretamente associada a **caçar e capturar os bijū**?\nA) Akatsuki\nB) ANBU\nC) Polícia Militar Uchiha\nD) Sete Espadachins da Névoa”
4. “Qual destes é um **jutsu de alto nível** ligado ao Rinnegan?\nA) Chibaku Tensei\nB) Rasengan\nC) Chidori\nD) Kage Bunshin no Jutsu”


### Checklist

* [ ] MC com 4 alternativas e distratores plausíveis do universo.
* [ ] Não criar perguntas cuja resposta seja “Naruto”.
* [ ] Máx. 5 por entidade no conjunto do microsubtema.
* [ ] Distinguir cânone vs material adicional quando afetar a resposta.
* [ ] Evitar power scaling e rankings subjetivos.

---

```yaml
---
tema: "Entretenimento"
tema_clean: "entretenimento"
subtema: "Anime e Mangá"
subtema_clean: "anime_e_manga"

microsubtema: "One Piece"
microsubtema_clean: "one_piece"

natureza: "tematico"
localizacao: "irrestrita"
status: "ativo"
---
```

## One Piece — `one_piece`

**Natureza.** Temático (obra/franquia).
**Descrição.** Mangá de Eiichiro Oda serializado na *Weekly Shōnen Jump*, com adaptação em anime; foco aqui é gerar perguntas sobre **tripulação, facções (Marinha/Governo/piratas), sistemas (Akuma no Mi/Haki), ilhas/arcos e mistérios centrais** (spoilers ok, com cuidado extra com material muito recente). ([Wikipedia][5])

### Escopo

**Inclusões (não exaustivo)**

* Arcos e eventos canônicos (inclui mortes, revelações, “verdadeira natureza” de poderes). ([Wikipedia][5])
* Tripulação dos Chapéus de Palha: funções, entradas, objetivos pessoais.
* Sistema: Akuma no Mi, Haki (3 tipos), efeitos e limites canônicos.
* Facções: Marinha, Governo Mundial, Revolucionários, Yonkō etc.
* Mistérios estruturais: Poneglyphs, Road Poneglyphs, Século Perdido (spoilers ok).

**Exclusões**

* Perguntas baseadas em capítulos/episódios “da semana” e notícias de hiato (volátil).
* Rankings de popularidade e power scaling subjetivo.

**Referências (exemplos)**

* Wikipedia (EN) de *One Piece* + páginas específicas de arcos, personagens, facções e conceitos. ([Wikipedia][5])
* Bases enciclopédicas de mídia / fontes oficiais quando necessário.

### Matriz de variação

* Arco ↔ ilha ↔ evento central.
* Personagem ↔ função na tripulação ↔ momento de entrada.
* Akuma no Mi ↔ efeito ↔ limitação; Haki ↔ tipo ↔ aplicação.
* Facções ↔ cargos ↔ codinomes.
* Spoilers: identidades, mortes, revelações de poderes, “verdade do mundo”.

### Exemplos de enunciados

**A) Aberta (4)**

1. “Qual é o objetivo declarado de Luffy ao buscar o ‘One Piece’?”
2. “Qual é o nome do irmão de Luffy cuja morte marca o clímax de Marineford (spoiler)?”
3. “O que são os **Poneglyphs** e por que eles importam para o mistério do mundo?”
4. “Qual é o nome da tripulação principal liderada por Luffy?”

**B) Múltipla escolha (4) — distratores da franquia**

1. “Qual forma de Haki é conhecida como o **‘Haki do Rei’**?\nA) Haoshoku Haki\nB) Busoshoku Haki\nC) Kenbunshoku Haki\nD) Rokushiki”
2. “Qual é o nome civil do almirante conhecido como **Akainu**?\nA) Sakazuki\nB) Borsalino\nC) Kuzan\nD) Issho”
3. “Qual é a **verdadeira natureza** da fruta do Luffy revelada mais tarde (spoiler)?\nA) Hito Hito no Mi, Modelo: Nika\nB) Gomu Gomu no Mi\nC) Yami Yami no Mi\nD) Uo Uo no Mi, Modelo: Seiryu”
4. “Qual destes itens está ligado à **localização de Laugh Tale** (spoiler estrutural)?\nA) Road Poneglyphs\nB) Vivre Card\nC) Den Den Mushi\nD) Dials”

### Checklist

* [ ] Cuidado extra com fatos muito recentes (obra em andamento).
* [ ] MC com 4 alternativas plausíveis do universo e 1 correta.
* [ ] Não criar perguntas cuja resposta seja “One Piece”.
* [ ] Máx. 5 por entidade no conjunto do microsubtema.
* [ ] Distinguir cânone vs material adicional quando necessário.

---
