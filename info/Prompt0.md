Tarefa: Gere 50 perguntas no nível do microsubtema abaixo. 

Saída: retorne somente o arquivo .JSON válido (como código, sem formatação) conforme o `pergunta.schema.json`, respeitando proporções de tipos e diversidade.

* Não use " " no texto do campo <pergunta>. Exemplo: "pergunta": "Quem foi Pelé?" (CORRETO) vs "pergunta": "Quem foi "Pelé"?" (INCORRETO)
* Pode utilizar acentuação (ex: não, está, próximo, vêm, etc) no campo <pergunta>.
* No campo "fonte", forneça apenas array com as urls, sem formatação de link clicavel markdown. 
* Não há diferenciação de dificuldade. Cheque o json.schema
* nao inclua tag
* Lembre-se que são para um público informado, mas leigo. Evite termos técnicos desnecessários.
* Revise os enunciados para **evitar** enunciados que contém a resposta. 
  - Exemplo 1: pergunta: "Qual meia brasileiro é conhecido como Ronaldinho Gaúcho e brilhou principalmente pelo Barcelona e pela seleção brasileira?" resposta: "Ronaldinho Gaúcho"
  - Exemplo 2: Associe o personagem à peça:  Dom Juan — ( ) “Dom Juan” / “Dom Giovanni”  ( ) “As Fenícias” 
* Ao elaborar questões do tipo Verdadeiro-Falso, equilibre as respostas.
* Respostas para perguntas abertas devem ser diretas: uma palavra (ou termo), ou no máximo uma frase curta.
* Distratores em perguntas de múltipla escolha devem incluir (pelo menos 1) termos/personagens/coisas da mesma franquia.


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

**C) Verdadeiro/Falso (4)**

1. “O mangá *Naruto* foi serializado na *Weekly Shōnen Jump* por cerca de 15 anos.” (V/F) ([Wikipedia][3])
2. “Akatsuki tem como objetivo capturar os bijū.” (V/F)
3. “Neste microsubtema, revelar a identidade de Tobi é permitido.” (V/F)
4. “Perguntas devem evitar depender de opinião (‘melhor luta’).” (V/F)

### Checklist

* [ ] MC com 4 alternativas e distratores plausíveis do universo.
* [ ] Não criar perguntas cuja resposta seja “Naruto”.
* [ ] Máx. 5 por entidade no conjunto do microsubtema.
* [ ] Distinguir cânone vs material adicional quando afetar a resposta.
* [ ] Evitar power scaling e rankings subjetivos.
