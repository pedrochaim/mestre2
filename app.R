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

# Estilo: "Tema Aleatório" com faixas verticais de todas as cores dos temas
n_temas <- length(temas)
faixas <- vapply(seq_along(temas), function(i) {
  ini <- (i - 1) * 100 / n_temas
  fim <- i * 100 / n_temas
  col <- cores[[temas[i]]]
  paste0(col, " ", sprintf("%.2f", ini), "%, ", col, " ", sprintf("%.2f", fim), "%")
}, character(1))
random_button_style <- paste0(
  "background: linear-gradient(90deg, ", paste(faixas, collapse = ", "), ") !important;",
  "color:white; width:100%; border:none;"
)


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
    ")),
    tags$script(HTML("
      Shiny.addCustomMessageHandler('open_url', function(url) {
        window.open(url, '_blank');
      });
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
        "LGBTema",
        style = random_button_style
      ),
      br(),
      actionButton(
        "ir_opcoes_pergunta",
        "Opções de Pergunta",
        style = "background-color: #333; color:white; width:100%; margin-top:18px;"
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
  json_raw_atual <- reactiveVal("")
  json_mostrado <- reactiveVal(FALSE)
  
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
    json_raw_atual("")
    json_mostrado(FALSE)
    updateActionButton(session, "mostrar_resposta", label = "Mostrar Resposta")
  }
  
  # Helpers para filtros (Opções de Pergunta)
  norm_str <- function(x) {
    x <- as.character(x)
    x[is.na(x)] <- ""
    x <- iconv(x, from = "UTF-8", to = "ASCII//TRANSLIT")
    tolower(x)
  }
  
  slug <- function(x) {
    x <- norm_str(x)
    x <- gsub("[^a-z0-9]+", "_", x)
    x <- gsub("^_+|_+$", "", x)
    x <- gsub("_+", "_", x)
    x
  }
  
  match_tipo <- function(tipo_val, tipo_sel) {
    tv <- norm_str(tipo_val)
    ts <- norm_str(tipo_sel)
    if (!nzchar(ts) || ts == "qualquer") return(rep(TRUE, length(tv)))
    if (grepl("abert", ts)) return(grepl("abert", tv))
    if (grepl("multipl", ts) || grepl("escolh", ts)) {
      return(grepl("multipl", tv) | grepl("escolh", tv) | grepl("mc", tv))
    }
    if (grepl("verdade", ts) || grepl("fals", ts) || grepl("true", ts) || grepl("false", ts)) {
      return(grepl("verdade", tv) | grepl("fals", tv) | grepl("true", tv) | grepl("false", tv))
    }
    grepl(ts, tv, fixed = TRUE)
  }
  
  match_subtema <- function(perg_df, sub_label, sub_clean) {
    if (is.null(sub_label) || !nzchar(sub_label) || norm_str(sub_label) == "qualquer") {
      return(rep(TRUE, nrow(perg_df)))
    }
    mask <- rep(FALSE, nrow(perg_df))
    if ("subtema_clean" %in% names(perg_df) && !is.null(sub_clean) && nzchar(sub_clean)) {
      mask <- mask | (norm_str(perg_df$subtema_clean) == norm_str(sub_clean))
    }
    if ("subtema" %in% names(perg_df)) {
      mask <- mask | (norm_str(perg_df$subtema) == norm_str(sub_label))
    }
    mask
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
  observeEvent(input$ir_opcoes_pergunta, {
    pagina("opcoes_pergunta")
  })
  
  observeEvent(input$ir_secundaria, {
    pagina("relatorios")
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
      limpar_estado_resposta()
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
      if (isTRUE(json_mostrado())) {
        tagList(
          br(),
          actionButton("reportar_pergunta", "Reportar Pergunta")
        )
      },
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
    json_raw_atual(json_str)
    json_mostrado(TRUE)
  })
  
  
  # Reportar pergunta (abre um rascunho de e-mail em um serviço/cliente externo)
  observeEvent(input$reportar_pergunta, {
    req(isTRUE(json_mostrado()), nzchar(json_raw_atual()))
    showModal(modalDialog(
      title = "Reportar Pergunta",
      p("Escreva seu comentário. Ao clicar em 'Abrir e-mail', abriremos um rascunho já preenchido para enviar ao Mestre2."),
      textAreaInput("comentario_report", "Comentário", value = "", width = "100%", height = "140px"),
      easyClose = TRUE,
      footer = tagList(
        modalButton("Cancelar"),
        actionButton("enviar_report", "Abrir e-mail")
      )
    ))
  })
  
  observeEvent(input$enviar_report, {
    req(isTRUE(json_mostrado()), nzchar(json_raw_atual()))
    pa <- pergunta_atual()
    
    tema  <- if (!is.null(pa) && "tema" %in% names(pa)) as.character(pa$tema[[1]]) else ""
    sub   <- if (!is.null(pa) && "subtema" %in% names(pa)) as.character(pa$subtema[[1]]) else ""
    micro <- if (!is.null(pa) && "microsubtema" %in% names(pa)) as.character(pa$microsubtema[[1]]) else ""
    pid   <- if (!is.null(pa) && "id" %in% names(pa)) as.character(pa$id[[1]]) else ""
    
    assunto_base <- paste(c(tema, sub, micro), collapse = " / ")
    if (nzchar(pid)) assunto_base <- paste0(assunto_base, " (id: ", pid, ")")
    subject <- paste0("[Mestre2] Reporte de Pergunta - ", assunto_base)
    
    comentario <- if (is.null(input$comentario_report)) "" else input$comentario_report
    body <- paste0(
      "Comentário:\n",
      comentario,
      "\n\n---\n\nJSON (raw):\n",
      json_raw_atual()
    )
    
    to <- "mestre2mail@gmail.com"
    
    # URL do Gmail (compose) + fallback mailto
    gmail_url <- paste0(
      "https://mail.google.com/mail/?view=cm&fs=1&to=",
      URLencode(to, reserved = TRUE),
      "&su=",
      URLencode(subject, reserved = TRUE),
      "&body=",
      URLencode(body, reserved = TRUE)
    )
    
    mailto_url <- paste0(
      "mailto:", to,
      "?subject=", URLencode(subject, reserved = TRUE),
      "&body=", URLencode(body, reserved = TRUE)
    )
    
    removeModal()
    
    # Tenta abrir automaticamente (pode ser bloqueado por popup-blocker). Mostramos fallback com links.
    session$sendCustomMessage("open_url", gmail_url)
    
    showModal(modalDialog(
      title = "Rascunho de e-mail pronto",
      p("Tentamos abrir uma nova aba com o e-mail já preenchido."),
      p("Se não abriu, use um dos botões abaixo:"),
      tags$a("Abrir no Gmail", href = gmail_url, target = "_blank", class = "btn btn-primary"),
      tags$span(" "),
      tags$a("Abrir no app de e-mail", href = mailto_url, class = "btn btn-default"),
      br(), br(),
      tags$details(
        tags$summary("Ver o texto que será enviado"),
        tags$pre(body)
      ),
      easyClose = TRUE,
      footer = modalButton("Fechar")
    ))
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
  
  
  # UI: subtema dependente do tema (Opções de Pergunta)
  output$op_subtema_ui <- renderUI({
    tema_sel <- input$op_tema
    if (is.null(tema_sel) || !tema_sel %in% temas) tema_sel <- temas[1]
    sub_choices <- unique(canon_df$subtema[canon_df$tema == tema_sel])
    sub_choices <- sub_choices[!is.na(sub_choices) & nzchar(sub_choices)]
    sub_choices <- sort(sub_choices)
    choices <- c("Qualquer", sub_choices)
    sel <- input$op_subtema
    if (is.null(sel) || !sel %in% choices) sel <- "Qualquer"
    selectInput("op_subtema", "Subtema", choices = choices, selected = sel)
  })
  
  # Sorteio com filtros (tema / subtema / tipo) a partir da página "Opções de Pergunta"
  observeEvent(input$op_sortear, {
    tema_sel <- input$op_tema
    if (is.null(tema_sel) || !tema_sel %in% temas) {
      showNotification("Escolha um tema.", type = "warning", duration = 6)
      return(NULL)
    }
    
    tema_clean <- tema_clean_map[[tema_sel]]
    if (is.null(tema_clean) || is.na(tema_clean) || !nzchar(tema_clean)) {
      showNotification("Não consegui mapear o tema selecionado para tema_clean.", type = "error", duration = 8)
      return(NULL)
    }
    
    perguntas <- carregar_perguntas_tema(tema_clean)
    if (is.null(perguntas) || nrow(perguntas) == 0) {
      showNotification("Não há perguntas carregadas para esse tema.", type = "warning", duration = 6)
      return(NULL)
    }
    
    # Subtema
    sub_sel <- input$op_subtema
    sub_clean <- ""
    if (!is.null(sub_sel) && nzchar(sub_sel) && norm_str(sub_sel) != "qualquer") {
      sc <- unique(canon_df$subtema_clean[canon_df$tema == tema_sel & canon_df$subtema == sub_sel])
      if (length(sc) > 0) sub_clean <- sc[1] else sub_clean <- slug(sub_sel)
      mask_sub <- match_subtema(perguntas, sub_sel, sub_clean)
      if (!any(mask_sub)) {
        showNotification("Nenhuma pergunta encontrada para esse subtema (dentro do tema selecionado).", type = "warning", duration = 6)
        return(NULL)
      }
      perguntas <- perguntas[mask_sub, , drop = FALSE]
    }
    
    # Tipo
    tipo_sel <- input$op_tipo
    if (!is.null(tipo_sel) && nzchar(tipo_sel) && norm_str(tipo_sel) != "qualquer") {
      tipo_col <- NULL
      if ("tipo" %in% names(perguntas)) tipo_col <- perguntas$tipo
      else if ("tipo_clean" %in% names(perguntas)) tipo_col <- perguntas$tipo_clean
      
      if (is.null(tipo_col)) {
        showNotification("Não encontrei o campo 'tipo' nas perguntas para filtrar.", type = "error", duration = 8)
        return(NULL)
      }
      
      mask_tipo <- match_tipo(tipo_col, tipo_sel)
      if (!any(mask_tipo)) {
        showNotification("Nenhuma pergunta encontrada para esse tipo (com os filtros escolhidos).", type = "warning", duration = 6)
        return(NULL)
      }
      perguntas <- perguntas[mask_tipo, , drop = FALSE]
    }
    
    # Evita repetir a atual, quando possível
    idx_pool <- seq_len(nrow(perguntas))
    hist <- rv$hist[[tema_clean]]
    if (!is.null(hist) && !is.null(hist$current) && nrow(perguntas) > 1) {
      if ("id" %in% names(perguntas) && "id" %in% names(hist$current)) {
        idx_pool <- idx_pool[perguntas$id != hist$current$id]
      } else if ("pergunta" %in% names(perguntas) && "pergunta" %in% names(hist$current)) {
        idx_pool <- idx_pool[perguntas$pergunta != hist$current$pergunta]
      }
      if (length(idx_pool) == 0) idx_pool <- seq_len(nrow(perguntas))
    }
    
    idx <- sample(idx_pool, 1)
    definir_pergunta(tema_clean, tema_sel, perguntas[idx, , drop = FALSE])
    pagina("principal")
  })
  
  # UI: páginas (principal / opções / relatórios)
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
    } else if (pagina() == "opcoes_pergunta") {
      tagList(
        uiOutput("status"),
        h3("Opções de Pergunta"),
        selectInput(
          "op_tema",
          "Tema",
          choices = temas,
          selected = if (!is.null(tema_escolhido_nome()) && tema_escolhido_nome() %in% temas) tema_escolhido_nome() else temas[1]
        ),
        uiOutput("op_subtema_ui"),
        selectInput(
          "op_tipo",
          "Tipo da pergunta",
          choices = c("Qualquer", "Aberta", "Múltipla escolha", "Verdadeiro-falso"),
          selected = if (!is.null(input$op_tipo) && input$op_tipo %in% c("Qualquer", "Aberta", "Múltipla escolha", "Verdadeiro-falso")) input$op_tipo else "Qualquer"
        ),
        actionButton(
          "op_sortear",
          "Sortear pergunta",
          style = "background-color: #333; color:white;"
        ),
        br(), br(),
        actionButton("voltar", "Voltar")
      )
    } else if (pagina() == "relatorios") {
      tagList(
        uiOutput("status"),
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
