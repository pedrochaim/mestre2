# Estrutura de Pastas do Projeto `mestre2`

Este arquivo documenta a estrutura de diretórios e o padrão de nomenclatura
dos arquivos utilizados pelo aplicativo em **R Shiny** para o jogo de
perguntas e respostas.

---

## 1. Visão Geral da Estrutura de Pastas

```text
mestre2/                      # pasta raiz do projeto

  info/                       # materiais do jogo e do app

    subtemas_<tema_clean>/    # descrições de microsubtemas de um tema
      microsubtemas_<tema_clean>_<subtema_clean>.md

    data/                     # bancos de dados de perguntas (JSON)
      perguntas_<tema_clean>/ # perguntas organizadas por tema
        <tema_clean>_<subtema_clean>_<microsubtema_clean>.json
        <tema_clean>_<subtema_clean>_<microsubtema_clean>.json
        ...
````

---

## 2. Convenções de Nomenclatura

Todos os nomes “*clean*” seguem o padrão:

* apenas letras minúsculas;
* sem acentos;
* espaços substituídos por `_` (underscore);
* sem caracteres especiais.

### 2.1. `tema_clean`

Versão “limpa” do nome do tema.

* Exemplo:

  * `Geografia` → `geografia`
  * `História Natural` → `historia_natural`

### 2.2. `subtema_clean`

Versão “limpa” do nome do subtema.

* Exemplo:

  * `Países, Capitais e Cidades Notáveis` → `paises_capitais_e_cidades_notaveis`
  * `Dinossauros` → `dinossauros`

### 2.3. `microsubtema_clean`

Versão “limpa” do nome do microsubtema.

* Exemplo:

  * `Capitais em rios` → `capitais_em_rios`
  * `Terópodes gigantes` → `teropodes_gigantes`

---

## 3. Pasta `info/`

```text
mestre2/
  info/
```

A pasta `info/` concentra:

* arquivos de texto (Markdown) com a **descrição de microsubtemas**;
* bancos de dados de **perguntas em formato JSON**.

---

## 4. Descrição de Microsubtemas (`info/subtemas_<tema_clean>`)

```text
mestre2/
  info/
    subtemas_<tema_clean>/
      microsubtemas_<tema_clean>_<subtema_clean>.md
```

### 4.1. Pasta por tema

Para cada tema do jogo, existe uma pasta:

* `subtemas_geografia/`
* `subtemas_historia_natural/`
* `subtemas_artes/`
* etc.

### 4.2. Arquivos `.md` por subtema

Dentro da pasta `subtemas_<tema_clean>/`, há um arquivo `.md` para cada
subtema, contendo a descrição dos seus microsubtemas.

* Nome do arquivo:

  ```text
  microsubtemas_<tema_clean>_<subtema_clean>.md
  ```

* Exemplos:

  * `microsubtemas_geografia_paises_capitais_e_cidades_notaveis.md`
  * `microsubtemas_historia_natural_dinossauros.md`

### 4.3. Conteúdo esperado dos arquivos de microsubtemas

Cada arquivo `microsubtemas_<tema_clean>_<subtema_clean>.md` pode conter, por exemplo:

* lista/tabela de microsubtemas;
* campo `microsubtema_clean`;
* descrição, escopo e observações;
* exemplos de assuntos cobertos em cada microsubtema.

*(O formato interno exato pode ser definido à parte, mas todos os
microsubtemas de um subtema específico ficam reunidos nesse arquivo.)*

---

## 5. Bancos de Dados de Perguntas (`info/data/`)

```text
mestre2/
  info/
    data/
      perguntas_<tema_clean>/
        <tema_clean>_<subtema_clean>_<microsubtema_clean>.json
```

### 5.1. Pasta `data/`

A pasta `info/data/` é o diretório principal para os bancos de perguntas.

### 5.2. Pastas `perguntas_<tema_clean>`

Para cada tema do jogo, há uma pasta:

* `perguntas_geografia/`
* `perguntas_historia_natural/`
* `perguntas_artes/`
* etc.

Dentro de `perguntas_<tema_clean>/` ficam os arquivos JSON de perguntas
organizados **por microsubtema**.

### 5.3. Arquivos JSON por microsubtema

Padrão de nomenclatura:

```text
<tema_clean>_<subtema_clean>_<microsubtema_clean>.json
```

#### Exemplos

* `geografia_paises_capitais_e_cidades_notaveis_capitais_em_rios.json`
* `historia_natural_dinossauros_teropodes_gigantes.json`
* `artes_musica_classica_sinfonias_romanticas.json`

### 5.4. Conteúdo dos arquivos JSON

Cada arquivo JSON:

* contém **apenas perguntas de um único microsubtema**;
* organiza as perguntas como um **array de objetos**;
* cada objeto segue o `pergunta.schema.json` do projeto
  (campos como `id`, `tema`, `subtema`, `microsubtema` se houver,
  `tipo`, `pergunta`, `resposta`, `fonte`, etc.).

---

## 6. Uso Esperado pelo Aplicativo em R Shiny (resumo)

A partir dessa estrutura:

1. O app pode listar os **temas disponíveis**:

   * lendo as pastas em `info/data/` que começam com `perguntas_`.

2. Pode obter **subtemas e microsubtemas**:

   * lendo os arquivos `microsubtemas_<tema_clean>_<subtema_clean>.md`
     dentro de `info/subtemas_<tema_clean>/`.

3. Pode carregar as **perguntas de um microsubtema** específico montando o caminho:

   ```r
   path <- file.path(
     "info", "data",
     paste0("perguntas_", tema_clean),
     paste0(
       tema_clean, "_",
       subtema_clean, "_",
       microsubtema_clean, ".json"
     )
   )
   ```

4. Após carregar o JSON em um `data.frame`, o aplicativo pode aplicar
   `sample()` (ou equivalente) para **sortear as perguntas** que serão exibidas no jogo.

---

```

