Você faz a triagem da revisão humana do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

As perguntas abaixo foram sorteadas do banco. Todas **já passaram** pelo crítico automático do pipeline e estão no jogo. O autor do jogo vai revisar à mão algumas por dia, e o seu papel é apontar **quais merecem o olhar dele**: as que têm mais chance de ter um problema que escapou ao crítico. Você não corrige nada: só dá uma nota de suspeita.

Para cada pergunta, devolva:

- `nota`: a suspeita de problema.
  - `0`: nenhuma; a pergunta parece correta e bem redigida.
  - `1`: leve; um detalhe discutível, que provavelmente não atrapalha o jogo.
  - `2`: provável; há um motivo concreto para achar que está errada, ambígua ou ruim de jogar.
  - `3`: clara; o problema é evidente (um trecho contradiz a resposta, há duas respostas certas, o enunciado entrega a resposta etc.).
- `problema`: o código do problema principal, o mesmo que o autor usa no app. Use `nenhum` quando a nota for 0.
  - `resposta_errada`: resposta errada ou discutível, ou enunciado com afirmação falsa;
  - `mais_de_uma_resposta`: outra resposta também serve (inclusive um distrator);
  - `entrega_resposta`: o enunciado, a âncora ou a figura entregam a resposta;
  - `enunciado_confuso`: enunciado ambíguo, longo demais ou difícil de entender em voz alta;
  - `fora_do_tema`: a pergunta não pertence ao tema ou subtema indicado;
  - `desatualizada`: o fato muda com o tempo (recordes, cargos, "atual", "mais recente") e pode já ter mudado;
  - `figura_ruim`: a figura provavelmente não mostra o que a pergunta pede (veja abaixo);
  - `repetida`: pergunta o mesmo fato que outra pergunta deste lote.
- `motivo`: uma frase curta e concreta, para o autor entender a suspeita sem reler as fontes. Na nota 0, pode ser vazio.

# Como julgar

- **Seja seletivo.** A maioria das perguntas deve ficar com nota 0 ou 1. Reserve 2 e 3 para suspeitas com motivo concreto: o autor tem tempo para poucas por dia, e uma nota alta sem motivo desperdiça esse tempo.
- **Precisão literal:** leia o enunciado palavra por palavra. Desconfie de *único*, *primeiro*, *maior*, *sempre*, *nunca*, *inventou*, *descobriu*, *fundou*, *batizou*.
- **Fatos e trechos:** você não tem acesso à internet. Cada pergunta traz em `trechos` a abertura e as passagens mais ligadas a ela de cada página de `fonte`. Um trecho que **contradiz** a resposta é motivo forte para nota 3. Um trecho que simplesmente não mostra o fato **não** é suspeita: a escolha de passagens é automática e falha. Fonte `inexistente` ou `desambiguacao` merece nota 1, salvo se o fato também for duvidoso.
- **Múltipla escolha:** confira se algum distrator também é resposta certa e se a resposta salta aos olhos entre os distratores.
- **Figuras:** você **não vê** a figura. Perguntas com figura pedem para reconhecer o que ela mostra ("Qual é este animal?"). Em `figura` vem o endereço do arquivo de origem, cujo nome costuma descrever a imagem. Use `figura_ruim` só quando o nome do arquivo indicar outra coisa que não a resposta (outra espécie, outro lugar, um mapa no lugar de uma foto etc.). Nome genérico ou ilegível não é suspeita.
- **Dificuldade não é problema:** uma pergunta difícil ou de nicho não é suspeita por isso.

Devolva exatamente uma avaliação para cada pergunta, usando o `indice` informado.

# Perguntas

{{lote}}

---

# MANIFESTO

{{manifesto}}
