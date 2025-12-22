### Visão geral dos 3 modos do Mestre2

**1) Modo Arquiteto de Conteúdo (microsubtemas)**
Ajudo você a **desenhar o mapa de conteúdo** do projeto de quiz:

* Parto do dicionário/cânone de temas e subtemas.
* Proponho e refino **microsubtemas** (recortes que rendem em torno de 100 perguntas, com escopo claro e pouca sobreposição).
* Defino, junto com você:

  * se o recorte é **temático** ou **transversal**;
  * o que **entra** e o que **fica de fora**;
  * principais **eixos de variação** (tempo, espaço, tipo de entidade, etc.).

Esse modo é “pré-banco-de-dados”: organizamos o universo de assuntos para depois transformar em perguntas.

---

**2) Modo Fábrica de Perguntas (geração conforme schema)**
Aqui eu pego um microsubtema definido e atuo como **gerador de itens de quiz**:

* Produzo perguntas em **JSON**, seguindo o `pergunta.schema.json`.
* Respeito:

  * campos obrigatórios (`tema`, `subtema`, `microsubtema`, `tipo`, `pergunta`, `resposta`, `fonte`, etc.);
  * a **proporção de tipos** (abertas, múltipla escolha, verdadeiro/falso);
  * **diversidade** de entidades e ângulos;
  * uso de **fontes confiáveis**, com URLs.
* Evito:

  * fatos muito voláteis ou datados;
  * perguntas ambíguas;
  * repetição excessiva da mesma entidade.

O foco aqui é **gerar dados limpos, estáveis e bem estruturados para o app consumir**.

---

**3) Modo Parceiro de Desenvolvimento do App (`quiz_app.R`)**

Neste modo eu sou seu **assistente técnico** para evoluir o app de quiz em R/Shiny, usando o `quiz_app.R` como base de código atual.

Posso:

* **Ler e comentar o `quiz_app.R`**

  * Explicar o que cada parte faz (UI, server, reatividade, leitura de JSON, etc.).
  * Apontar problemas de arquitetura, acoplamento, nomeação e repetição de código.

* **Ajudar a evoluir o design da aplicação**

  * Estrutura de telas (seleção de tema, filtros, painel da pergunta, painel da resposta, estatísticas).
  * Organização em **módulos Shiny**, quando fizer sentido.
  * Sugerir layouts (abas, sidebar, painéis expansíveis).

* **Auxiliar na implementação de novas funcionalidades**, como:

  * filtros por dificuldade, época, país, tipo de pergunta;
  * tracking de desempenho (acertos, erros, histórico);
  * modos de jogo (treino vs. jogo);
  * exportação/importação de progresso, logs, etc.

* **Cuidar da integração app ↔ banco de perguntas**

  * Carregar e combinar arquivos JSON de diferentes microsubtemas.
  * Garantir que os campos do schema batem com o que o app espera.
  * Tratar erros de leitura, campos ausentes, NAs.

* **Ajudar em debug e qualidade de código**

  * Interpretar erros e warnings do R/Shiny.
  * Sugerir refactors pontuais (funções auxiliares, separação de responsabilidades).
  * Propor formas simples de testar sem quebrar o que já funciona.

Em resumo: no **Modo 3** eu não sou o “mestre do quiz para o jogador”, e sim o seu **pair programmer** especializado no app de quiz e no ecossistema de perguntas/microsubtemas.
