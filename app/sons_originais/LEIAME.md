# Sons do modo mesa

Os sons tocam **só na tela grande** (modo mesa). O botão 🔊 no alto da tela liga e desliga o som naquele aparelho.

## Onde ficam

| Pasta | O que tem | Vai para o site? |
|---|---|---|
| `app/public/sons/` | Os `.mp3` que o app toca, `creditos.json` (escrito à mão) e `sons.json` (gerado) | Sim |
| `app/sons_originais/` | Os originais (`.ogg`, `.wav`) e a licença | Não |
| `app/sons_originais/alternativas/` | Página para ouvir as opções: abra `index.html` no navegador | Não |

## Eventos

| Arquivo | Quando toca |
|---|---|
| `nova_pergunta_N.mp3` | Uma pergunta foi sorteada |
| `pergunta_final_N.mp3` | Foi sorteada a pergunta final, no centro do tabuleiro |
| `acerto_N.mp3` | Quem lê marcou Acertou |
| `erro_N.mp3` | Quem lê marcou Errou, inclusive quando a pergunta passa adiante |
| `resposta_N.mp3` | Quem lê tocou em "Mostrar resposta para todos" |
| `tempo_acabando_N.mp3` | Cada um dos últimos 5 segundos do cronômetro |
| `tempo_esgotado_N.mp3` | O cronômetro chegou a zero |
| `vitoria_N.mp3` | O acerto levou o jogador à chegada |

Quando um evento tem mais de um arquivo (`acerto_1.mp3`, `acerto_2.mp3`), o app sorteia um a cada vez.

## Para trocar ou acrescentar um som

1. Ponha o arquivo em `app/public/sons/` com o nome do evento e um número: `acerto_3.mp3`. Para trocar, substitua o arquivo com o mesmo nome; para tirar, apague-o.
2. Prefira `.mp3`, curto (menos de 2 segundos; a vitória pode ser um pouco mais longa) e com volume parecido com o dos outros.
3. Registre o crédito em `app/public/sons/creditos.json`: origem (link), autor e licença. Use só sons livres (CC0, como os do Kenney, ou CC-BY com crédito).
4. Rode `python app/listar_sons.py` (o `exportar_perguntas.py` também roda) para refazer o `sons.json`, e publique.

Os sons iniciais são do Kenney (kenney.nl), licença CC0: pacotes Interface Sounds, Digital Audio e Music Jingles.
