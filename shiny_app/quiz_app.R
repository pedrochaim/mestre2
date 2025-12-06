library(shiny)
library(jsonlite)

# -------------------------------
# Função: carregar tabela canônica
# -------------------------------
carregar_canon <- function() {
  # Caminho para o arquivo canônico, relativo a mestre2/shiny_app
  canon_path <- file.path("..", "info", "canon_temas_subtemas.json")
  
  # Lê o arquivo como texto
  canon_raw <- readLines(canon_path, warn = FALSE)
  canon_txt <- paste(canon_raw, collapse = "\n")
  
  # Tenta primeiro interpretar como um único JSON (ex.: array);
  # se falhar, interpreta como JSON "linha a linha" (jsonlines)
  canon_df <- tryCatch(
    {
      fromJSON(canon_txt)
    },
    error = function(e) {
      do.call(
        rbind,
        lapply(canon_raw[nzchar(canon_raw)], fromJSON)
      )
    }
  )
  
  # Garante que as colunas principais sejam caracteres
  cols_esperadas <- c("tema", "tema_clean", "subtema", "subtema_clean")
  cols_existentes <- intersect(cols_esperadas, names(canon_df))
  for (nm in cols_existentes) {
    canon_df[[nm]] <- as.character(canon_df[[nm]])
  }
  
  canon_df
}

# ------------------------------------------------------------------
# Função: tema_clean -> subtema_clean -> microsubtema_clean -> n_perguntas
# Vasculha ../info/data/perguntas_<tema_clean>/ e conta perguntas
# (considera apenas arquivos de microsubtema, ignora <tema_clean>.json)
# ------------------------------------------------------------------
montar_lista_tema_subtema_micros_contagem <- function(canon_df) {
  temas <- unique(canon_df$tema_clean)
  resultado <- list()
  
  for (t in temas) {
    # Diretório do tema: ../info/data/perguntas_<tema_clean>/
    dir_tema <- file.path("..", "info", "data", paste0("perguntas_", t))
    if (!dir.exists(dir_tema)) {
      next
    }
    
    # Lista de arquivos JSON de perguntas
    arquivos_full <- list.files(dir_tema, pattern = "\\.json$", full.names = TRUE)
    if (length(arquivos_full) == 0) {
      next
    }
    
    arquivos_base <- basename(arquivos_full)
    
    # Ignora o JSON "grande" do tema, se existir (t.json)
    arquivo_tema_saida <- paste0(t, ".json")
    idx_validos <- arquivos_base != arquivo_tema_saida
    arquivos_full <- arquivos_full[idx_validos]
    arquivos_base <- arquivos_base[idx_validos]
    
    if (length(arquivos_full) == 0) {
      next
    }
    
    # Filtra linhas do canônico para este tema
    df_tema <- canon_df[canon_df$tema_clean == t, , drop = FALSE]
    subtemas_tema <- unique(df_tema$subtema_clean)
    
    lista_subtemas <- list()
    
    # Para cada subtema, identifica os microsubtemas pelos nomes dos arquivos
    for (s in subtemas_tema) {
      prefixo <- paste0(t, "_", s, "_")
      idx_files <- startsWith(arquivos_base, prefixo)
      arquivos_sub_full <- arquivos_full[idx_files]
      arquivos_sub_base <- arquivos_base[idx_files]
      
      if (length(arquivos_sub_full) == 0) {
        next
      }
      
      lista_micros <- list()
      
      for (i in seq_along(arquivos_sub_full)) {
        arq_full <- arquivos_sub_full[i]
        arq_base <- arquivos_sub_base[i]
        
        # Nome do microsubtema_clean pelo padrão <tema>_<subtema>_<micros>.json
        nome_sem_ext <- sub("\\.json$", "", arq_base)
        micros <- substr(nome_sem_ext, nchar(prefixo) + 1, nchar(nome_sem_ext))
        
        # Lê o JSON e conta perguntas
        json_raw <- readLines(arq_full, warn = FALSE)
        json_txt <- paste(json_raw, collapse = "\n")
        
        perguntas <- tryCatch(
          fromJSON(json_txt),
          error = function(e) NULL
        )
        
        n_perguntas <- 0
        if (!is.null(perguntas)) {
          if (is.data.frame(perguntas)) {
            n_perguntas <- nrow(perguntas)
          } else if (is.list(perguntas)) {
            n_perguntas <- length(perguntas)
          }
        }
        
        lista_micros[[micros]] <- n_perguntas
      }
      
      if (length(lista_micros) > 0) {
        lista_subtemas[[s]] <- lista_micros
      }
    }
    
    if (length(lista_subtemas) > 0) {
      resultado[[t]] <- lista_subtemas
    }
  }
  
  resultado
}

# ------------------------------------------------------------------
# Função: concatenar arquivos por tema em um único JSON <tema_clean>.json
# Lê todos os arquivos <tema_clean>_<subtema_clean>_<microsubtema_clean>.json
# e salva ../info/data/perguntas_<tema_clean>/<tema_clean>.json
# ------------------------------------------------------------------
concatenar_jsons_por_tema <- function(canon_df) {
  temas <- unique(canon_df$tema_clean)
  
  resumo <- data.frame(
    tema_clean     = character(),
    n_arquivos     = integer(),
    n_perguntas    = integer(),
    arquivo_saida  = character(),
    stringsAsFactors = FALSE
  )
  
  for (t in temas) {
    dir_tema <- file.path("..", "info", "data", paste0("perguntas_", t))
    if (!dir.exists(dir_tema)) {
      next
    }
    
    arquivos_full <- list.files(dir_tema, pattern = "\\.json$", full.names = TRUE)
    if (length(arquivos_full) == 0) {
      next
    }
    
    arquivos_base <- basename(arquivos_full)
    
    # Ignora o arquivo de saída do tema, se já existir (ex.: <tema_clean>.json)
    arquivo_tema_saida <- paste0(t, ".json")
    idx_micro <- arquivos_base != arquivo_tema_saida
    arquivos_full <- arquivos_full[idx_micro]
    arquivos_base <- arquivos_base[idx_micro]
    
    if (length(arquivos_full) == 0) {
      next
    }
    
    acumulador <- list()
    
    for (arq in arquivos_full) {
      json_raw <- readLines(arq, warn = FALSE)
      json_txt <- paste(json_raw, collapse = "\n")
      
      # Usamos simplifyVector = FALSE para manter listas de registros
      conteudo <- tryCatch(
        fromJSON(json_txt, simplifyVector = FALSE),
        error = function(e) NULL
      )
      
      if (is.null(conteudo)) {
        next
      }
      
      # Se já for uma lista de perguntas (array JSON), concatenamos direto
      if (is.list(conteudo) && length(conteudo) > 0 && is.list(conteudo[[1]])) {
        acumulador <- c(acumulador, conteudo)
      } else if (is.list(conteudo)) {
        # Único objeto; embrulha em lista
        acumulador <- c(acumulador, list(conteudo))
      }
    }
    
    n_perguntas <- length(acumulador)
    if (n_perguntas == 0) {
      next
    }
    
    saida_path <- file.path(dir_tema, arquivo_tema_saida)
    json_saida <- toJSON(acumulador, auto_unbox = TRUE, pretty = TRUE)
    writeLines(json_saida, saida_path, useBytes = TRUE)
    
    resumo <- rbind(
      resumo,
      data.frame(
        tema_clean    = t,
        n_arquivos    = length(arquivos_full),
        n_perguntas   = n_perguntas,
        arquivo_saida = normalizePath(saida_path, winslash = "/", mustWork = FALSE),
        stringsAsFactors = FALSE
      )
    )
  }
  
  resumo
}

# -------------------------------------
# Inicialização global do app
# -------------------------------------
canon_df <- carregar_canon()
concat_res <- concatenar_jsons_por_tema(canon_df)

# Ordem dos temas (fixa) e cores associadas
temas <- c(
  "Geografia", "História Natural", "Variedades", "Artes",
  "Cotidiano", "Ciências", "Entretenimento", "Esportes", "História"
)

cores <- c(
  "#006400", "#90EE90", "#FFD700", "#FFA500", "#FF4500",
  "#C71585", "#9370DB", "#87CEEB", "#00008B"
)
names(cores) <- temas

# Mapa: tema (label) -> tema_clean (usando canon_df)
tema_clean_map <- setNames(
  vapply(temas, function(t) {
    vals <- unique(canon_df$tema_clean[canon_df$tema == t])
    if (length(vals) == 0) NA_character_ else vals[1]
  }, character(1)),
  temas
)

# -------------------------------------
# UI
# -------------------------------------
ui <- fluidPage(
  tags$head(
    tags$style(HTML("
      body {
        background-color: black;
        color: white;
      }
      /* barra lateral (well padrão do sidebarPanel) */
      .well {
        background-color: black;
        border: 1px solid black;
        box-shadow: none;
      }
    "))
  ),
  titlePanel("Quiz por Tema - Mestre2"),
  sidebarLayout(
    sidebarPanel(
      h4("Escolha um tema"),
      lapply(seq_along(temas), function(i) {
        actionButton(
          inputId = paste0("btn_", i),
          label = temas[i],
          style = paste0(
            "color: white; background-color:", cores[i], ";",
            " margin-bottom: 5px; width: 100%;",
            " border: 2px solid black;"
          )
        )
      }),
      # Botão para tema aleatório (abaixo do último tema)
      actionButton(
        inputId = "btn_random",
        label = "Tema aleatório",
        style = paste(
          "color: white;",
          "width: 100%;",
          "margin-bottom: 5px;",
          "border: 2px solid black;",
          "background-image: linear-gradient(to right,",
          "#006400 0%, #006400 11%,",
          "#90EE90 11%, #90EE90 22%,",
          "#FFD700 22%, #FFD700 33%,",
          "#FFA500 33%, #FFA500 44%,",
          "#FF4500 44%, #FF4500 55%,",
          "#C71585 55%, #C71585 66%,",
          "#9370DB 66%, #9370DB 77%,",
          "#87CEEB 77%, #87CEEB 88%,",
          "#00008B 88%, #00008B 100%);"
        )
      ),
      hr(),
      actionButton("ir_secundaria", "Ver relatórios de dados")
    ),
    mainPanel(
      uiOutput("pagina_ui")
    )
  )
)

# -------------------------------------
# Server
# -------------------------------------
server <- function(input, output, session) {
  pergunta_atual <- reactiveVal(NULL)
  fonte_mostrar  <- reactiveVal("")
  tema_escolhido_nome <- reactiveVal(NULL)
  
  # Controla se a resposta já foi exibida
  resposta_mostrada <- reactiveVal(FALSE)
  
  # "Roteador" simples: principal / secundaria
  pagina <- reactiveVal("principal")
  
  # Navegação
  observeEvent(input$ir_secundaria, {
    pagina("secundaria")
  })
  observeEvent(input$voltar, {
    pagina("principal")
  })
  
  # Observers dos botões de tema (sorteio de perguntas)
  observe({
    lapply(seq_along(temas), function(i) {
      observeEvent(input[[paste0("btn_", i)]], {
        tema <- temas[i]
        tema_escolhido_nome(tema)
        
        tema_clean <- tema_clean_map[[tema]]
        if (is.na(tema_clean) || is.null(tema_clean) || identical(tema_clean, "")) {
          return(NULL)
        }
        
        dir_tema <- file.path("..", "info", "data", paste0("perguntas_", tema_clean))
        arq_tema <- file.path(dir_tema, paste0(tema_clean, ".json"))
        if (!file.exists(arq_tema)) {
          return(NULL)
        }
        
        perguntas <- tryCatch(
          fromJSON(arq_tema),
          error = function(e) NULL
        )
        if (is.null(perguntas)) return(NULL)
        if (!is.data.frame(perguntas)) {
          perguntas <- as.data.frame(perguntas, stringsAsFactors = FALSE)
        }
        if (nrow(perguntas) == 0) return(NULL)
        
        idx <- sample(nrow(perguntas), 1)
        pergunta <- perguntas[idx, , drop = FALSE]
        pergunta_atual(pergunta)
        
        # Limpa resposta e fonte
        output$resposta <- renderText({ "" })
        fonte_mostrar("")
        
        # Esconde botão/JSON quando muda de pergunta
        resposta_mostrada(FALSE)
        output$json_raw <- renderText({ "" })
        
        # Garante que o rótulo volte para "Mostrar Resposta"
        updateActionButton(session, "mostrar_resposta", label = "Mostrar Resposta")
        
        # Garante que estamos na página principal
        pagina("principal")
      })
    })
  })
  
  # Botão para tema aleatório
  observeEvent(input$btn_random, {
    # Tenta escolher um tema aleatório que tenha arquivo válido
    temas_embaralhados <- sample(temas)
    pergunta_definida <- FALSE
    
    for (tema in temas_embaralhados) {
      tema_clean <- tema_clean_map[[tema]]
      if (is.na(tema_clean) || is.null(tema_clean) || identical(tema_clean, "")) {
        next
      }
      
      dir_tema <- file.path("..", "info", "data", paste0("perguntas_", tema_clean))
      arq_tema <- file.path(dir_tema, paste0(tema_clean, ".json"))
      if (!file.exists(arq_tema)) {
        next
      }
      
      perguntas <- tryCatch(
        fromJSON(arq_tema),
        error = function(e) NULL
      )
      if (is.null(perguntas)) next
      if (!is.data.frame(perguntas)) {
        perguntas <- as.data.frame(perguntas, stringsAsFactors = FALSE)
      }
      if (nrow(perguntas) == 0) next
      
      idx <- sample(nrow(perguntas), 1)
      pergunta <- perguntas[idx, , drop = FALSE]
      pergunta_atual(pergunta)
      tema_escolhido_nome(tema)
      
      # Limpa resposta e fonte
      output$resposta <- renderText({ "" })
      fonte_mostrar("")
      
      # Esconde botão/JSON quando muda de pergunta
      resposta_mostrada(FALSE)
      output$json_raw <- renderText({ "" })
      
      # Garante que o rótulo volte para "Mostrar Resposta"
      updateActionButton(session, "mostrar_resposta", label = "Mostrar Resposta")
      
      # Garante que estamos na página principal
      pagina("principal")
      
      pergunta_definida <- TRUE
      break
    }
    
    if (!pergunta_definida) {
      # Se nada foi encontrado, não faz nada (poderia exibir mensagem, se desejado)
      return(NULL)
    }
  })
  
  # Tema colorido no topo
  output$tema_colorido <- renderUI({
    req(tema_escolhido_nome())
    cor <- cores[tema_escolhido_nome()]
    tags$h3(
      tema_escolhido_nome(),
      style = paste0(
        "color: white; background-color:", cor, ";",
        " padding: 10px; border-radius: 5px;"
      )
    )
  })
  
  # Subtema da pergunta atual
  output$subtema <- renderText({
    req(pergunta_atual())
    pa <- pergunta_atual()
    sub <- ""
    if ("subtema" %in% names(pa)) {
      sub <- pa$subtema
    } else if ("subtema_clean" %in% names(pa)) {
      sub <- pa$subtema_clean
    }
    paste("Subtema:", sub)
  })
  
  # Microsubtema da pergunta atual
  output$microsubtema <- renderText({
    req(pergunta_atual())
    pa <- pergunta_atual()
    micro <- ""
    if ("microsubtema" %in% names(pa)) {
      micro <- pa$microsubtema
    } else if ("microsubtema_clean" %in% names(pa)) {
      micro <- pa$microsubtema_clean
    }
    paste("Microsubtema:", micro)
  })
  
  # Enunciado da pergunta
  output$pergunta <- renderText({
    req(pergunta_atual())
    pergunta_atual()$pergunta
  })
  
  # Botão "Mostrar/Esconder Resposta" (toggle)
  observeEvent(input$mostrar_resposta, {
    req(pergunta_atual())
    
    if (!resposta_mostrada()) {
      # Mostrar resposta e fonte
      pa <- pergunta_atual()
      
      output$resposta <- renderText({
        pa$resposta
      })
      
      # Fonte (pode ser string, vetor de URLs, etc.)
      fonte_val <- NULL
      if ("fonte" %in% names(pa)) {
        # coluna list de fonte; pega o primeiro elemento da linha
        fonte_val <- pa$fonte[[1]]
      }
      
      if (is.null(fonte_val)) {
        fonte_str <- ""
      } else {
        fonte_vec <- unlist(fonte_val)
        fonte_str <- paste(fonte_vec, collapse = " ; ")
      }
      
      if (nzchar(fonte_str)) {
        fonte_mostrar(paste("Fonte:", fonte_str))
      } else {
        fonte_mostrar("")
      }
      
      resposta_mostrada(TRUE)
      updateActionButton(session, "mostrar_resposta", label = "Esconder Resposta")
      
    } else {
      # Esconder resposta, fonte e JSON
      output$resposta <- renderText({ "" })
      fonte_mostrar("")
      resposta_mostrada(FALSE)
      updateActionButton(session, "mostrar_resposta", label = "Mostrar Resposta")
      output$json_raw <- renderText({ "" })
    }
  })
  
  # Agora como HTML, com links clicáveis
  output$fonte <- renderUI({
    txt <- fonte_mostrar()
    if (is.null(txt) || txt == "") {
      return(NULL)
    }
    # transforma http(s)://... em <a href='...'>...</a>
    txt_link <- gsub(
      "(https?://[^ ]+)",
      "<a href='\\1' target='_blank'>\\1</a>",
      txt
    )
    HTML(txt_link)
  })
  
  # Botão + área de JSON raw, só aparece depois de mostrar a resposta
  output$botao_json <- renderUI({
    if (!resposta_mostrada()) {
      return(NULL)
    }
    tagList(
      actionButton("mostrar_json", "Ver JSON (raw)"),
      br(), br(),
      verbatimTextOutput("json_raw")
    )
  })
  
  # Quando clicar no botão, gera o JSON da pergunta atual
  observeEvent(input$mostrar_json, {
    req(pergunta_atual())
    pa <- pergunta_atual()
    
    # pa é uma linha de data.frame -> transformar em lista de campos
    pa_list <- lapply(pa, function(x) {
      if (is.list(x)) {
        x[[1]]
      } else {
        x[1]
      }
    })
    
    json_str <- jsonlite::toJSON(pa_list, auto_unbox = TRUE, pretty = TRUE)
    
    output$json_raw <- renderText(json_str)
  })
  
  # Contagem por microsubtema
  lista_reactiva <- eventReactive(input$mostrar, {
    montar_lista_tema_subtema_micros_contagem(canon_df)
  })
  output$saida_lista <- renderPrint({
    req(lista_reactiva())
    str(lista_reactiva())
  })
  
  # Relatório de concatenação
  concat_reactiva <- eventReactive(input$mostrar_concat, {
    concat_res
  })
  output$saida_concat <- renderPrint({
    req(concat_reactiva())
    if (is.null(concat_reactiva()) || nrow(concat_reactiva()) == 0) {
      cat("Nenhum JSON concatenado. Verifique se há arquivos de perguntas por tema no padrão <tema_clean>_<subtema_clean>_<microsubtema_clean>.json.\n")
    } else {
      cat("Arquivos gerados/atualizados por tema:\n\n")
      print(concat_reactiva())
    }
  })
  
  # UI das páginas (principal x secundária)
  output$pagina_ui <- renderUI({
    if (pagina() == "principal") {
      tagList(
        uiOutput("tema_colorido"),
        h4(textOutput("subtema")),
        h5(textOutput("microsubtema")),
        h4(textOutput("pergunta")),
        actionButton("mostrar_resposta", "Mostrar Resposta"),
        br(), br(),
        textOutput("resposta"),
        br(),
        tags$small(htmlOutput("fonte")),
        br(),
        # Botão + JSON bruto (só aparece depois de "Mostrar Resposta")
        uiOutput("botao_json")
      )
    } else {
      tagList(
        actionButton("voltar", "Voltar"),
        br(), br(),
        actionButton("mostrar", "Mostrar contagem por microsubtema"),
        br(), br(),
        actionButton("mostrar_concat", "Mostrar relatório de concatenação"),
        hr(),
        h4("Estrutura: tema_clean -> subtema_clean -> microsubtema_clean = n_perguntas"),
        verbatimTextOutput("saida_lista"),
        hr(),
        h4("Relatório de concatenação por tema"),
        verbatimTextOutput("saida_concat")
      )
    }
  })
}

shinyApp(ui = ui, server = server)
