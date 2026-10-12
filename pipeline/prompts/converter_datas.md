Você prepara perguntas do Mestre2, um jogo de quiz em que as perguntas são lidas em voz alta. Pela regra do MANIFESTO (§6), uma pergunta cuja resposta é **um ano específico ou uma data** é sempre de **múltipla escolha**. As perguntas abaixo são abertas e têm resposta com cara de ano ou de data. Para cada uma, decida:

- **converter = true:** a resposta é o ano ou a data em que algo aconteceu, começou, terminou etc. Escreva em `distratores` **exatamente 3** alternativas erradas.
- **converter = false:** a resposta não é um ano nem uma data, e sim uma quantidade ou um número qualquer (por exemplo, "206" ossos, "1500" metros, um placar). Deixe `distratores` vazio.

Em `motivo`, uma frase curta.

# Como escrever os distratores

1. **Mesmo formato da resposta:** se a resposta é "1969", os distratores são anos só com algarismos ("1965", "1971"); se é "800 a.C.", também com "a.C."; se é "2 de fevereiro", outras datas com dia e mês; se é "15 de novembro de 1889", datas com dia, mês e ano.
2. **Próximos e críveis:** da mesma época, para que quem não sabe não consiga eliminar nenhum pelo contexto. Para um fato do século vinte, uma distância de 2 a 15 anos costuma funcionar; para a Antiguidade, a distância pode ser maior. Nenhum distrator pode ser impossível pelo próprio enunciado (por exemplo, um ano antes de algo que o enunciado diz ter acontecido antes).
3. **Posição da resposta:** quando o item traz `posicao_da_resposta`, escolha os distratores de modo que, pondo as quatro alternativas em ordem cronológica, a resposta fique **exatamente** nessa posição ("a mais antiga": os 3 distratores são posteriores a ela; "a mais recente": os 3 são anteriores; "a segunda mais antiga": 1 anterior e 2 posteriores; "a segunda mais recente": 2 anteriores e 1 posterior). Isso impede que a resposta fique sempre no meio, o que permitiria acertar no chute. Evite também intervalos regulares (como 1965, 1969, 1973, 1977).
4. **Nenhum distrator também correto:** se o fato tem datas disputadas ou costuma ser datado de duas formas (o início e o fim, o anúncio e a inauguração, o calendário juliano e o gregoriano), nenhum distrator pode ser a outra data plausível.
5. **Diferentes entre si e da resposta**, com no máximo 4 palavras cada.

Devolva exatamente um item para cada pergunta, usando o `indice` informado.

# Perguntas

{{lote}}
