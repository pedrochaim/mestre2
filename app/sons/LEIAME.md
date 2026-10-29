# Biblioteca de sons do Mestre2

Os sons tocam **só na tela grande** (modo mesa), e por enquanto só com o **Modo experimental** ligado no aparelho (aba Tabuleiro). O botão 🔊 no alto da tela grande liga e desliga o som. As regras ficam no MANIFESTO, §16, "Sons".

Esta pasta é a **biblioteca**: só aqui se mexe. O que vai para o site (`app/public/sons/`) é gerado pelo `app/sons.py` e nunca é editado à mão.

## Como está organizada

```
app/sons/
  acoes.json          ← catálogo: cada ação e quando ela toca
  acerto/             ← uma pasta por ação, com o mesmo nome da ação
    confirmation_002.ogg   ← qualquer nome e formato (.ogg, .wav, .mp3, .m4a, .flac)
    creditos.json          ← créditos dos arquivos desta pasta
  erro/
  ...
  _candidatos/        ← sons guardados para ouvir e talvez usar (não vão para o site)
  _desativados/       ← sons tirados de uso sem apagar (não vão para o site)
  ouvir.html          ← página gerada para ouvir tudo: abra no navegador
  LICENCA_KENNEY.txt
```

Pastas que começam com `_` nunca vão para o site.

## Ações

| Ação (pasta) | Quando toca |
|---|---|
| `nova_pergunta` | Uma pergunta foi sorteada |
| `pergunta_final` | Foi sorteada a pergunta final, no centro do tabuleiro do Master |
| `acerto` | Quem lê marcou Acertou |
| `erro` | Quem lê marcou Errou, inclusive quando a pergunta passa adiante |
| `resposta` | Quem lê tocou em Mostrar resposta para todos |
| `tempo_acabando` | Cada um dos últimos 5 segundos do cronômetro |
| `tempo_esgotado` | O cronômetro chegou a zero |
| `vitoria` | O acerto levou o jogador à chegada |
| `fanfarra` | Na casa ★ do Linear, logo antes do `volta_casa`: toca primeiro a fanfarra, depois o peido |
| `volta_casa` | Na casa ★ do Linear, o acerto fez os jogadores à frente voltarem uma casa (no lugar de `acerto`) |

A lista oficial é o `acoes.json`. Quando uma ação tem mais de um som, o app sorteia um a cada vez.

## Acrescentar um som a uma ação que já existe

1. **Ponha o arquivo na pasta da ação**, com o nome que quiser (de preferência o nome original, para saber de onde veio). Não precisa converter nem ajustar o volume.
2. **Registre o crédito** no `creditos.json` da pasta: `origem` (link), `autor` e `licenca`. A entrada `"*"` vale para todos os arquivos da pasta, e a do arquivo completa ou substitui o que for diferente:

   ```json
   {
     "*": { "autor": "Kenney (kenney.nl)", "licenca": "CC0" },
     "confirmation_002.ogg": { "origem": "https://kenney.nl · Interface Sounds · confirmation_002.ogg" },
     "plim.wav": { "origem": "https://freesound.org/…", "autor": "Fulano", "licenca": "CC-BY 4.0", "ganho": -3 }
   }
   ```

   `ganho` (opcional, em dB) corrige o volume de um som que, mesmo ajustado, ficou alto ou baixo demais.
3. **Rode** `python app/sons.py` na raiz do projeto. Ele converte para `.mp3`, corta o silêncio do começo e do fim, iguala o volume ao dos outros e refaz `app/public/sons/sons.json` e `ouvir.html`. O `exportar_perguntas.py` também roda o script.
4. **Ouça** em `app/sons/ouvir.html` e publique (deploy). Depois de publicado, o som também aparece na página **Sons** do app (botão Sons na tela inicial, ou Ouvir os sons na aba Tabuleiro).

## Tirar ou trocar um som

- **Tirar:** mova o arquivo para `_desativados/` (ou apague). Na próxima rodada do script, ele sai do site.
- **Trocar:** ponha o novo e tire o antigo.

## Criar uma ação nova

1. Crie a pasta com o nome da ação, em minúsculas, sem acento e com `_` (por exemplo `passou_adiante`), com os sons e o `creditos.json`.
2. Acrescente a ação ao `acoes.json`, dizendo quando ela deve tocar.
3. **O app precisa de um gatilho** para tocar o som no momento certo. Isso é código: peça ao Claude. Enquanto o gatilho não existir, o script avisa "ação … sem gatilho no app".

## Quem faz o quê

- **Qualquer um** põe sons nas pastas, escreve os créditos e roda o script.
- **O Claude**, quando buscar sons, deixa as opções em `_candidatos/` (com o crédito no `creditos.json` de lá) até alguém escolher. Também é ele quem cria os gatilhos de ações novas no app.

## Cuidados

- **Só sons livres:** CC0 (como os do Kenney) ou CC-BY com crédito. Sem licença clara, não entra.
- **Curtos:** menos de 2 segundos; a vitória e a pergunta final podem ser um pouco mais longas. O cronômetro toca `tempo_acabando` a cada segundo, então esse som precisa ser bem curto.
- **Avisos do script:** crédito faltando, pasta fora do `acoes.json`, ação sem som e ação sem gatilho no app. Resolva antes de publicar.
- **Requisito:** o script usa o ffmpeg. Se ele não estiver instalado, rode `pip install imageio-ffmpeg`, que já traz o programa.
