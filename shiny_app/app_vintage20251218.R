library(shiny)
library(jsonlite)

# -------------------------------------
# Paths fixos (app roda a partir da raiz /mestre2/)
# -------------------------------------
INFO_DIR  <- "info"
DATA_DIR  <- file.path(INFO_DIR, "data")
CANON_PATH <- file.path(INFO_DIR, "canon_temas_subtemas.json")

if (!file.exists(CANON_PATH)) {
  stop(paste0(
    "Não encontrei o arquivo canônico em: ", CANON_PATH, "\n",
    "Diretório de trabalho (getwd): ", getwd(), "\n",
    "Dica: execute o app a partir da raiz do projeto (/mestre2/)."
  ))
}

# -------------------------------------
# Utilitário: ler JSON a partir de arquivo (sem ambiguidade do fromJSON com path)
# -------------------------------------
read_json_file <- function(path, simplifyVector = TRUE, ...) {
  txt <- paste(readLines(path, warn = FALSE, encoding = "UTF-8"), collapse = "
")
  jsonlite::fromJSON(txt, simplifyVector = simplifyVector, ...)
}


# -------------------------------------
# Carrega canônico
# -------------------------------------
carregar_canon <- function() {
  canon_raw <- tryCatch(
    read_json_file(CANON_PATH, simplifyVector = FALSE),
    error = function(e) NULL
  )
  if (is.null(canon_raw)) {
    stop(paste0("Falha ao ler canon_temas_subtemas.json em: ", CANON_PATH))
  }
  
  # Esperado: lista de temas, cada um com $tema, $tema_clean e $subtemas (lista)
  canon_df <- do.call(rbind, lapply(canon_raw, function(t) {
    if (is.null(t$subtemas) || length(t$subtemas) == 0) return(NULL)
    
    do.call(rbind, lapply(t$subtemas, function(s) {
      data.frame(
        tema = t$tema,
        tema_clean = t$tema_clean,
        subtema = s$subtema,
        subtema_clean = s$subtema_clean,
        stringsAsFactors = FALSE
      )
    }))
  }))
  
  if (is.null(canon_df) || nrow(canon_df) == 0) {
    stop("Canon carregou vazio ou inválido.")
  }
  
  canon_df
}


# ------------------------------------------------------------------
# Função: tema_clean -> subtema_clean -> microsubtema_clean -> n_perguntas
# Vasculha info/data/perguntas_<tema_clean>/ e conta perguntas
# (considera apenas arquivos de microsubtema, ignora <tema_clean>.json)
# ------------------------------------------------------------------
montar_lista_tema_subtema_micros_contagem <- function(canon_df) {
  temas <- unique(canon_df$tema_clean)
  resultado <- list()
  
  for (t in temas) {
    dir_tema <- file.path(DATA_DIR, paste0("perguntas_", t))
    if (!dir.exists(dir_tema)) next
    
    arquivos_full <- list.files(dir_tema, pattern = "\\.json$", full.names = TRUE)
    if (length(arquivos_full) == 0) next
    
    arquivos_base <- basename(arquivos_full)
    arquivo_tema_saida <- paste0(t, ".json")
    
    # ignora consolidado do tema
    idx_validos <- arquivos_base != arquivo_tema_saida
    arquivos_full <- arquivos_full[idx_validos]
    arquivos_base <- arquivos_base[idx_validos]
    if (length(arquivos_full) == 0) next
    
    df_tema <- canon_df[canon_df$tema_clean == t, , drop = FALSE]
    subtemas_tema <- unique(df_tema$subtema_clean)
    
    for (s in subtemas_tema) {
      if (is.na(s) || !nzchar(s)) next
      
      prefixo <- paste0(t, "_", s, "_")
      idx_sub <- startsWith(arquivos_base, prefixo)
      arquivos_sub <- arquivos_full[idx_sub]
      if (length(arquivos_sub) == 0) next
      
      for (arq in arquivos_sub) {
        base <- basename(arq)
        micro_clean <- sub("\\.json$", "", base)
        conteudo <- tryCatch(read_json_file(arq), error = function(e) NULL)
        n_perg <- 0
        if (!is.null(conteudo)) {
          if (is.data.frame(conteudo)) n_perg <- nrow(conteudo)
          else if (is.list(conteudo))  n_perg <- length(conteudo)
        }
        
        if (is.null(resultado[[t]])) resultado[[t]] <- list()
        if (is.null(resultado[[t]][[s]])) resultado[[t]][[s]] <- list()
        
        resultado[[t]][[s]][[micro_clean]] <- n_perg
      }
    }
  }
  
  resultado
}

# ------------------------------------------------------------------
# Concatena JSONs por tema e salva um consolidado:
# info/data/perguntas_<tema_clean>/<tema_clean>.json
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
    dir_tema <- file.path(DATA_DIR, paste0("perguntas_", t))
    if (!dir.exists(dir_tema)) next
    
    arquivos_full <- list.files(dir_tema, pattern = "\\.json$", full.names = TRUE)
    if (length(arquivos_full) == 0) next
    
    arquivos_base <- basename(arquivos_full)
    arquivo_tema_saida <- paste0(t, ".json")
    
    # ignora o próprio arquivo de saída se existir
    idx_micro <- arquivos_base != arquivo_tema_saida
    arquivos_full <- arquivos_full[idx_micro]
    arquivos_base <- arquivos_base[idx_micro]
    if (length(arquivos_full) == 0) next
    
    # considera apenas arquivos de microsubtema no padrão: <tema>_<subtema>_*.json
    df_tema <- canon_df[canon_df$tema_clean == t, , drop = FALSE]
    subtemas_tema <- unique(df_tema$subtema_clean)
    subtemas_tema <- subtemas_tema[!is.na(subtemas_tema) & nzchar(subtemas_tema)]
    prefixos <- paste0(t, "_", subtemas_tema, "_")
    
    idx_micro <- vapply(arquivos_base, function(fn) any(startsWith(fn, prefixos)), logical(1))
    arquivos_full <- arquivos_full[idx_micro]
    arquivos_base <- arquivos_base[idx_micro]
    if (length(arquivos_full) == 0) next
    
    acumulador <- list()
    
    for (arq in arquivos_full) {
      conteudo <- tryCatch(
        read_json_file(arq, simplifyVector = FALSE),
        error = function(e) NULL
      )
      if (is.null(conteudo)) next
      
      if (is.list(conteudo) && length(conteudo) > 0 && is.list(conteudo[[1]])) {
        acumulador <- c(acumulador, conteudo)
      } else if (is.list(conteudo)) {
        acumulador <- c(acumulador, list(conteudo))
      }
    }
    
    n_perguntas <- length(acumulador)
    if (n_perguntas == 0) next
    
    saida_path <- file.path(dir_tema, arquivo_tema_saida)
    json_out <- jsonlite::toJSON(acumulador, pretty = TRUE, auto_unbox = TRUE)
    writeLines(json_out, saida_path, useBytes = TRUE)
    
    resumo <- rbind(
      resumo,
      data.frame(
        tema_clean = t,
        n_arquivos = length(arquivos_full),
        n_perguntas = n_perguntas,
        arquivo_saida = saida_path,
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
# (Consolidação por tema é gerada sob demanda na página de relatórios)

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
      body { background-color: black; color: white; }
      .well { background-color: black; border: 1px solid black; box-shadow: none; }
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
            "background-color:", cores[temas[i]], ";",
            "color:white; width:100%; margin-bottom:5px;"
          )
        )
      }),
      br(),
      actionButton(
        "btn_random",
        "Tema Aleatório",
        style = "background-color: gray; color:white; width:100%;"
      ),
      br(), br(),
      actionButton(
        "ir_secundaria",
        "Relatórios",
        style = "background-color: #333; color:white; width:100%;"
      )
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
  tema_escolhido_clean <- reactiveVal(NULL)
  rv <- reactiveValues(cache = list(), hist = list())
  resposta_mostrada <- reactiveVal(FALSE)
  pagina <- reactiveVal("principal")
  status_msg <- reactiveVal("")
  concat_res_r <- reactiveVal(NULL)
  
  # Carrega o JSON consolidado do tema (info/data/perguntas_<tema_clean>/<tema_clean>.json)
  carregar_perguntas_tema <- function(tema_clean) {
    if (!is.null(rv$cache[[tema_clean]])) {
      status_msg("")
      return(rv$cache[[tema_clean]])
    }
    
    dir_tema <- file.path(DATA_DIR, paste0("perguntas_", tema_clean))
    arq_tema <- file.path(dir_tema, paste0(tema_clean, ".json"))
    
    if (!file.exists(arq_tema)) {
      status_msg(paste0("Arquivo consolidado do tema NÃO encontrado: ", arq_tema))
      return(NULL)
    }
    
    perguntas <- tryCatch(
      read_json_file(arq_tema),
      error = function(e) {
        status_msg(paste0("Erro ao ler JSON consolidado: ", arq_tema, " | ", e$message))
        NULL
      }
    )
    if (is.null(perguntas)) return(NULL)
    
    if (!is.data.frame(perguntas)) {
      perguntas <- tryCatch(
        as.data.frame(perguntas, stringsAsFactors = FALSE),
        error = function(e) {
          status_msg(paste0("JSON carregou, mas falhou ao virar data.frame: ", e$message))
          NULL
        }
      )
    }
    
    if (is.null(perguntas) || nrow(perguntas) == 0) {
      status_msg(paste0("JSON consolidado está vazio: ", arq_tema))
      return(NULL)
    }
    rv$cache[[tema_clean]] <- perguntas
    status_msg("")
    perguntas
  }
  
  
  # Inicializa outputs para evitar "output não encontrado" antes do primeiro sorteio
  output$resposta <- renderText({ "" })
  output$json_raw <- renderText({ "" })
  
  limpar_estado_resposta <- function() {
    output$resposta <- renderText({ "" })
    fonte_mostrar("")
    resposta_mostrada(FALSE)
    output$json_raw <- renderText({ "" })
    updateActionButton(session, "mostrar_resposta", label = "Mostrar Resposta")
  }
  
  definir_pergunta <- function(tema_clean, tema_label, pergunta_row, atualizar_historico = TRUE) {
    if (is.null(pergunta_row) || nrow(pergunta_row) == 0) return(invisible(FALSE))
    
    tema_escolhido_clean(tema_clean)
    if (!is.null(tema_label) && nzchar(tema_label)) tema_escolhido_nome(tema_label)
    
    if (isTRUE(atualizar_historico)) {
      hist <- rv$hist[[tema_clean]]
      if (is.null(hist)) hist <- list(current = NULL, previous = NULL)
      hist$previous <- hist$current
      hist$current <- pergunta_row
      rv$hist[[tema_clean]] <- hist
    }
    
    pergunta_atual(pergunta_row)
    limpar_estado_resposta()
    invisible(TRUE)
  }
  
  alternar_ultima_pergunta <- function(tema_clean) {
    hist <- rv$hist[[tema_clean]]
    if (is.null(hist) || is.null(hist$previous)) return(FALSE)
    
    tmp <- hist$current
    hist$current <- hist$previous
    hist$previous <- tmp
    rv$hist[[tema_clean]] <- hist
    
    pergunta_atual(hist$current)
    limpar_estado_resposta()
    TRUE
  }
  
  # Navegação
  observeEvent(input$ir_secundaria, {
    pagina("secundaria")
    # Gera consolidação apenas quando entrar em Relatórios (e só 1x por sessão)
    if (is.null(concat_res_r())) {
      res <- tryCatch(concatenar_jsons_por_tema(canon_df), error = function(e) e)
      if (inherits(res, "error")) {
        showNotification(paste("Erro ao consolidar JSONs por tema:", res$message), type = "error", duration = 8)
      } else {
        concat_res_r(res)
      }
    }
  })
  observeEvent(input$voltar,        { pagina("principal") })
  
  observeEvent(input$regerar_consolidados, {
    res <- tryCatch(concatenar_jsons_por_tema(canon_df), error = function(e) e)
    if (inherits(res, "error")) {
      showNotification(paste("Erro ao consolidar JSONs por tema:", res$message), type = "error", duration = 8)
    } else {
      concat_res_r(res)
      showNotification("Consolidação atualizada.", type = "message", duration = 4)
    }
  })
  
  # Tema colorido
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
  
  # Caixa de status/erro
  output$status <- renderUI({
    msg <- status_msg()
    if (is.null(msg) || !nzchar(msg)) return(NULL)
    tags$div(
      style = "background-color:#550000; padding:10px; border-radius:5px; margin-bottom:10px;",
      tags$strong("Aviso: "),
      msg
    )
  })
  
  # Observers dos botões de tema
  observe({
    lapply(seq_along(temas), function(i) {
      observeEvent(input[[paste0("btn_", i)]], {
        tema <- temas[i]
        
        tema_clean <- tema_clean_map[[tema]]
        if (is.na(tema_clean) || is.null(tema_clean) || identical(tema_clean, "")) {
          status_msg(paste0("Não encontrei tema_clean no canônico para o tema: ", tema))
          showNotification(status_msg(), type = "error", duration = 8)
          return(NULL)
        }
        
        perguntas <- carregar_perguntas_tema(tema_clean)
        if (is.null(perguntas)) {
          showNotification(status_msg(), type = "error", duration = 10)
          return(NULL)
        }
        
        idx <- sample(nrow(perguntas), 1)
        definir_pergunta(tema_clean, tema, perguntas[idx, , drop = FALSE])
        pagina("principal")
      }, ignoreInit = TRUE)
    })
  })
  
  # Tema aleatório
  observeEvent(input$btn_random, {
    temas_embaralhados <- sample(temas)
    pergunta_definida <- FALSE
    
    for (tema in temas_embaralhados) {
      tema_clean <- tema_clean_map[[tema]]
      if (is.na(tema_clean) || is.null(tema_clean) || identical(tema_clean, "")) next
      
      perguntas <- carregar_perguntas_tema(tema_clean)
      if (is.null(perguntas)) next
      
      idx <- sample(nrow(perguntas), 1)
      definir_pergunta(tema_clean, tema, perguntas[idx, , drop = FALSE])
      pagina("principal")
      
      pergunta_definida <- TRUE
      break
    }
    
    if (!pergunta_definida) {
      showNotification(
        "Não consegui sortear: nenhum tema com JSON consolidado válido foi encontrado.",
        type = "error",
        duration = 10
      )
      return(NULL)
    }
  })
  
  
  # Próxima pergunta (mesmo tema)
  observeEvent(input$proxima_pergunta, {
    tema_clean <- tema_escolhido_clean()
    tema_label <- tema_escolhido_nome()
    
    if (is.null(tema_clean) || is.na(tema_clean) || !nzchar(tema_clean)) {
      showNotification("Escolha um tema primeiro.", type = "warning", duration = 6)
      return(NULL)
    }
    
    perguntas <- carregar_perguntas_tema(tema_clean)
    if (is.null(perguntas)) {
      showNotification(status_msg(), type = "error", duration = 8)
      return(NULL)
    }
    
    hist <- rv$hist[[tema_clean]]
    idx_pool <- seq_len(nrow(perguntas))
    if (!is.null(hist) && !is.null(hist$current) && nrow(perguntas) > 1) {
      if ("id" %in% names(perguntas) && "id" %in% names(hist$current)) {
        idx_pool <- idx_pool[perguntas$id != hist$current$id]
      } else if ("pergunta" %in% names(perguntas) && "pergunta" %in% names(hist$current)) {
        idx_pool <- idx_pool[perguntas$pergunta != hist$current$pergunta]
      }
      if (length(idx_pool) == 0) idx_pool <- seq_len(nrow(perguntas))
    }
    idx <- sample(idx_pool, 1)
    definir_pergunta(tema_clean, tema_label, perguntas[idx, , drop = FALSE])
  })
  
  # Última pergunta (alternar entre as duas últimas do tema)
  observeEvent(input$ultima_pergunta, {
    tema_clean <- tema_escolhido_clean()
    
    if (is.null(tema_clean) || is.na(tema_clean) || !nzchar(tema_clean)) {
      showNotification("Escolha um tema primeiro.", type = "warning", duration = 6)
      return(NULL)
    }
    
    ok <- alternar_ultima_pergunta(tema_clean)
    if (!ok) {
      showNotification("Ainda não há uma última pergunta para este tema.", type = "warning", duration = 6)
    }
  })
  
  # Subtema
  output$subtema <- renderText({
    pa <- pergunta_atual()
    if (is.null(pa)) return("")
    
    sub <- ""
    if ("subtema" %in% names(pa)) sub <- pa$subtema
    else if ("subtema_clean" %in% names(pa)) sub <- pa$subtema_clean
    
    paste("Subtema:", sub)
  })
  
  # Microsubtema
  output$microsubtema <- renderText({
    pa <- pergunta_atual()
    if (is.null(pa)) return("")
    
    micro <- ""
    if ("microsubtema" %in% names(pa)) micro <- pa$microsubtema
    else if ("microsubtema_clean" %in% names(pa)) micro <- pa$microsubtema_clean
    
    paste("Microsubtema:", micro)
  })
  
  output$tipo <- renderText({
    pa <- pergunta_atual()
    if (is.null(pa)) return("")
    
    tipo <- ""
    if ("tipo" %in% names(pa)) tipo <- pa$tipo
    
    paste("Tipo:", tipo)
  })
  
  # Enunciado
  output$pergunta <- renderText({
    pa <- pergunta_atual()
    if (is.null(pa)) return("Escolha um tema para começar.")
    if (!("pergunta" %in% names(pa))) return("[campo 'pergunta' não encontrado]")
    pa$pergunta
  })
  
  # Toggle resposta
  observeEvent(input$mostrar_resposta, {
    pa <- pergunta_atual()
    if (is.null(pa)) {
      showNotification("Escolha um tema/pergunta primeiro.", type = "warning", duration = 6)
      return(NULL)
    }
    
    if (!resposta_mostrada()) {
      pa <- pergunta_atual()
      
      output$resposta <- renderText({ pa$resposta })
      
      fonte_val <- NULL
      if ("fonte" %in% names(pa)) {
        fonte_val <- pa$fonte[[1]]
      }
      
      if (is.null(fonte_val)) {
        fonte_str <- ""
      } else {
        fonte_vec <- unlist(fonte_val)
        fonte_str <- paste(fonte_vec, collapse = " ; ")
      }
      
      if (nzchar(fonte_str)) fonte_mostrar(paste("Fonte:", fonte_str)) else fonte_mostrar("")
      
      resposta_mostrada(TRUE)
      updateActionButton(session, "mostrar_resposta", label = "Esconder Resposta")
    } else {
      output$resposta <- renderText({ "" })
      fonte_mostrar("")
      resposta_mostrada(FALSE)
      updateActionButton(session, "mostrar_resposta", label = "Mostrar Resposta")
      output$json_raw <- renderText({ "" })
    }
  })
  
  # Fonte com links
  output$fonte <- renderUI({
    txt <- fonte_mostrar()
    if (is.null(txt) || txt == "") return(NULL)
    
    txt_link <- gsub(
      "(https?://[^\\s;]+)",
      "<a href='\\1' target='_blank'>\\1</a>",
      txt
    )
    HTML(txt_link)
  })
  
  # Botão + JSON raw
  output$botao_json <- renderUI({
    if (!resposta_mostrada()) return(NULL)
    tagList(
      actionButton("mostrar_json", "Ver JSON (raw)"),
      br(), br(),
      verbatimTextOutput("json_raw")
    )
  })
  
  observeEvent(input$mostrar_json, {
    req(pergunta_atual())
    pa <- pergunta_atual()
    
    pa_list <- lapply(pa, function(x) {
      if (is.list(x)) x[[1]] else x[1]
    })
    
    json_str <- jsonlite::toJSON(pa_list, auto_unbox = TRUE, pretty = TRUE)
    output$json_raw <- renderText({ json_str })
  })
  
  # Contagem por microsubtema
  lista_reactiva <- eventReactive(input$mostrar, {
    montar_lista_tema_subtema_micros_contagem(canon_df)
  })
  output$saida_lista <- renderPrint({
    req(lista_reactiva())
    str(lista_reactiva())
  })
  
  # Relatório concat
  output$relatorio_concat <- renderPrint({
    if (is.null(concat_res_r())) {
      cat("Consolidação ainda não foi gerada. Entre em Relatórios ou clique em 'Regerar consolidados'.
")
    } else {
      concat_res_r()
    }
  })
  
  # UI: página secundária (relatórios)
  output$pagina_ui <- renderUI({
    if (pagina() == "principal") {
      tagList(
        uiOutput("status"),
        uiOutput("tema_colorido"),
        h4(textOutput("subtema")),
        h5(textOutput("microsubtema")),
        h6(textOutput("tipo")),
        h4(textOutput("pergunta")),
        actionButton("ultima_pergunta", "Última pergunta"),
        actionButton("proxima_pergunta", "Próxima pergunta"),
        actionButton("mostrar_resposta", "Mostrar Resposta"),
        br(), br(),
        textOutput("resposta"),
        br(),
        tags$small(htmlOutput("fonte")),
        br(),
        uiOutput("botao_json")
      )
    } else if (pagina() == "secundaria") {
      tagList(
        actionButton("voltar", "Voltar"),
        br(), br(),
        h3("Relatórios"),
        actionButton("mostrar", "Contagem por microsubtema"),
        verbatimTextOutput("saida_lista"),
        br(), br(),
        h4("Consolidação por tema (arquivo tema_clean.json)"),
        actionButton("regerar_consolidados", "Regerar consolidados por tema"),
        br(),
        verbatimTextOutput("relatorio_concat")
      )
    }
  })
}

shinyApp(ui = ui, server = server)
