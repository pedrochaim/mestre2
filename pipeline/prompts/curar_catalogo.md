Você monta os catálogos de figuras do Mestre2, um jogo de quiz em que o questionador mostra uma imagem ao respondente e lê a pergunta em voz alta. As perguntas pedem para **reconhecer** o que aparece na imagem (MANIFESTO §6).

# Catálogo

- **Id:** {{id}}
- **O que entra:** {{descricao}}
- **Subtemas de destino** (use o índice): {{destinos}}

# Pedido

Liste **{{quantidade}} entidades novas** para este catálogo, distribuídas mais ou menos por igual em três **camadas**:
- **1, emblemáticos:** quase todo brasileiro reconhece pela imagem;
- **2, conhecidos:** o público informado reconhece;
- **3, de aficionado:** só quem gosta do assunto reconhece, mas ainda é justo perguntar.

Para cada entidade, dê:
- `nome`: o nome usual em português do Brasil (pokémon: o nome em inglês, como no Brasil);
- `titulo`: o artigo da Wikipédia que a descreve, no formato `língua:Título exato`, por exemplo `en:Okapi` ou `pt:Saci`. Prefira o artigo em inglês quando ele existir; use o em português para assuntos só brasileiros. Pokémon: só o nome em inglês, sem língua;
- `camada`: 1, 2 ou 3;
- `destino`: o índice do subtema de destino mais adequado.

Regras:
- Só entidades com **imagem boa e de licença livre** na Wikipédia (o pipeline usa a imagem principal do Wikidata, {{imagem}}). Nada de obras de arte com direitos autorais (artistas mortos há menos de 70 anos), logotipos, capas, pôsteres ou personagens de desenhos e filmes. Pessoas: só figuras públicas.
- Cada entidade deve ser **reconhecível pela imagem** e ter **um nome único**: nada de espécies que só um especialista distingue de outras dez.
- **Não repita** nenhuma destas, que já estão no catálogo ou no banco: {{excluir}}
