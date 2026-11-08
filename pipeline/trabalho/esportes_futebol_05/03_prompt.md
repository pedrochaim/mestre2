Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Futebol** (tema **Esportes**). Avalie **cada uma**, independentemente, e decida:

- **aprovar:** passa em todos os critérios.
- **reescrever:** tem um problema corrigível. Devolva em `reescrita` a versão corrigida **completa** (`angulo`, `tipo`, `pergunta`, `resposta`, `fonte` e, se o tipo for `multipla`, exatamente 3 `distratores`). **Toda decisão `reescrever` precisa vir com `reescrita` preenchida**, mesmo quando a correção é pequena, como trocar um distrator ou encurtar a resposta: sem ela, a pergunta se perde. Nas decisões `aprovar` e `descartar`, `reescrita` é `null`.
- **descartar:** o problema não tem conserto, ou o fato é fraco demais para valer uma pergunta.

Em `motivo`, explique a decisão em uma frase curta. Na dúvida entre reescrever e descartar, descarte: o MANIFESTO diz "menos e melhor".

# O que verificar

1. **Precisão literal (obrigatório):** leia o enunciado palavra por palavra. Cada verbo, adjetivo e afirmação precisa ser **literalmente** verdadeiro, e não só a resposta. Desconfie especialmente de verbos como *batizou*, *inventou*, *descobriu*, *fundou*, *criou*, e de palavras como *único*, *primeiro*, *maior*, *sempre*, *nunca*. Exemplo: dizer que Colombo *batizou* a Colômbia é falso, porque o país recebeu o nome *em homenagem* a ele. Se houver qualquer imprecisão, reescreva.
2. **Fato e fonte (obrigatório):** você não tem acesso à internet. Cada pergunta traz em `trechos` o que o pipeline baixou das URLs de `fonte`: a abertura de cada página e as passagens mais ligadas à pergunta, separadas por `[…]`. Quando as fontes estão em inglês, pode vir também o artigo equivalente da Wikipédia em português, marcado em `observacao`: ele serve para conferir o fato, mas não é fonte da pergunta. Confira o fato nesses trechos e informe em `apoio`:
   - `trecho`: um trecho sustenta a resposta e o enunciado;
   - `conhecimento`: os trechos não mostram o fato, mas ele é amplamente documentado e você tem certeza dele. Use com parcimônia; na dúvida, descarte;
   - `contradito`: um trecho contradiz o enunciado ou a resposta. Reescreva de acordo com o trecho, ou descarte.

   Se uma fonte vier com `situacao` `inexistente` ou `desambiguacao`, troque-a na `reescrita` por uma URL da Wikipédia de que você tenha alta confiança (ela será conferida depois). Fonte `inacessivel` não é defeito da pergunta: confira o fato nas outras fontes.
3. **Todos os critérios de qualidade** do MANIFESTO §8: resposta única, sem vazamento, atemporal, verificável, precisa, justa, interessante, audível e bem classificada.
4. **Redação para voz** do MANIFESTO §7, incluindo resposta **específica** (o nome da coisa, e não a categoria).
5. **Âncora:** respeita a regra de granularidade (MANIFESTO §4) e é de fato a entidade sobre a qual está o fato perguntado? Se a granularidade estiver errada, descarte.
6. **Ângulo:** é o mais específico que serve (MANIFESTO §5)? Se não for, reescreva com o ângulo correto.
7. **Distratores** (só em `multipla`): críveis, da mesma categoria da resposta e com no máximo 4 palavras (MANIFESTO §6). Uma pergunta `aberta` cuja resposta é um ano ou uma data deve ser reescrita como `multipla`, com 3 anos ou datas próximos e críveis (MANIFESTO §6).
8. **Duplicatas:** se duas perguntas do lote perguntam o mesmo fato, mantenha a melhor e descarte a outra.

Devolva exatamente uma avaliação para cada pergunta, usando o `indice` informado.

# Lote

[
  {
    "indice": 1,
    "ancora": {
      "nome": "Pelé",
      "descricao": "Edson Arantes do Nascimento, tricampeão mundial pela seleção brasileira."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Ainda menino, Edson errava o nome de um goleiro do time em que seu pai jogava, e daí nasceu o apelido Pelé. Que goleiro era esse?",
    "resposta": "Bilé",
    "distratores": [
      "Gilmar",
      "Barbosa",
      "Castilho"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Pel%C3%A9",
      "https://en.wikipedia.org/wiki/Pel%C3%A9"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Pel%C3%A9",
        "situacao": "ok",
        "texto": "Edson Arantes do Nascimento (Três Corações, 23 de outubro de 1940 – São Paulo, 29 de dezembro de 2022), mais conhecido como Pelé, foi um futebolista brasileiro que atuou como atacante. Descrito como o \"Rei do Futebol\", é amplamente considerado como o maior futebolista e um dos maiores atletas de todos os tempos.\n[…]\nEdson Arantes do Nascimento nasceu em 23 de outubro de 1940 em Três Corações, Minas Gerais, Brasil, sendo filho do jogador João Ramos do Nascimento, mais conhecido como Dondinho, e Celeste Arantes. É o mais velho de dois irmãos. Pelé recebeu seu primeiro nome em homenagem ao inventor estadunidense Thomas Edison, de quem Dondinho era fã.\n[…]\nEle foi originalmente alcunhado de \"Dico\" por sua família. Edson recebeu o apelido \"Pelé\" durante seu tempo de escola por conta da forma que pronunciava o nome de seu jogador favorito, o goleiro Bilé do Vasco da Gama de São Lourenço, time inspirado no homônimo carioca, o qual falava de forma equivocada. Pelé não gostava do apelido, e chegou a brigar com o colega de sala que inicialmente lhe atribuíra a alcunha.\n[…]\nAlém da afirmação de que o nome é derivado de Bilé, e que significa \"milagre\" em hebreu (פֶּ֫לֶא), a palavra não tem nenhum significado em português.\n[…]\n\"Não há dúvida, Pelé tem imã.\"\n[…]\n\"No momento que a bola chega aos pés de Pelé, o futebol se transforma em poesia\".\n[…]\nEm 1999, a revista Time nomeou Pelé uma das 100 pessoas mais importantes do século XX. Enquanto ainda jogava, ele foi por um período o atleta mais bem pago no mundo. Seu \"jogo eletrizante e a propensão a objetivos espetaculares\" fizeram dele uma estrela em todo o mundo. Para tirar o máximo proveito de sua popularidade, suas equipes fizeram turnês internacionais. Durante sua carreira, ele ficou conhecido como \"O Pérola Negra\", \"O Rei do Futebol\", \"O Rei Pelé\" ou simplesmente \"O Rei\"."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pel%C3%A9",
        "situacao": "ok",
        "texto": "Edson Arantes do Nascimento (23 October 1940 – 29 December 2022), better known by his nickname Pelé, was a Brazilian professional footballer who played as a forward. Widely regarded as one of the greatest players in history, he was among the most successful and popular sports figures of the 20th century. His 1,279 goals in 1,363 games, which includes exhibition games, is recognised as a Guinness W\n[…]\nPelé was born Edson Arantes do Nascimento on 23 October 1940 in Três Corações, Minas Gerais, Brazil. He was the son of Fluminense footballer Dondinho (born João Ramos do Nascimento) and Celeste Arantes. He had a younger brother, Zoca, who would also play for Santos. Pelé was named after the American inventor Thomas Edison. His parents decided to remove the \"i\" and call him \"Edson\", but there was an error on his birth certificate, leading many documents to show his name as \"Edison\".\n[…]\nHe was called \"Edson\" by his family, who also gave him the nickname \"Dico\". On the origin of his nickname \"Pelé\", he said it probably emerged after he mispronounced the name of his favourite player, Bilé, a goalkeeper for Vasco da Gama. In his 2006 autobiography, Pelé said he had no idea what the name meant, nor did his school friends.\n[…]\nPelé married three times and had several extramarital affairs, fathering seven children in all. In 1966, he married Rosemeri dos Reis Cholbi. They had two daughters, Kely Cristina and Jennifer, and a son, Edson. Pelé and Cholbi divorced in 1982. In 2014, Edson was sentenced to 33 years in prison for laundering money from drug trafficking. On appeal, the sentence was reduced to 12 years and 10 months.\n[…]\nIn 2000, the International Federation of Football History & Statistics (IFFHS) declared Pelé the \"World's Best and Successful Top Division Goal Scorer of all time\" with 541 goals in 560 games, and honoured him with a trophy.\n[…]\nPelé runaround move\n[…]\nPelé at Planet World Cup"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Pelé",
      "descricao": "Edson Arantes do Nascimento, tricampeão mundial pela seleção brasileira."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1961, o governo brasileiro declarou Pelé tesouro nacional. Qual era o objetivo dessa medida?",
    "resposta": "Impedir sua transferência para o exterior",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pel%C3%A9"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pel%C3%A9",
        "situacao": "ok",
        "texto": "Edson Arantes do Nascimento (23 October 1940 – 29 December 2022), better known by his nickname Pelé, was a Brazilian professional footballer who played as a forward. Widely regarded as one of the greatest players in history, he was among the most successful and popular sports figures of the 20th century. His 1,279 goals in 1,363 games, which includes exhibition games, is recognised as a Guinness W\n[…]\nPelé was born Edson Arantes do Nascimento on 23 October 1940 in Três Corações, Minas Gerais, Brazil. He was the son of Fluminense footballer Dondinho (born João Ramos do Nascimento) and Celeste Arantes. He had a younger brother, Zoca, who would also play for Santos. Pelé was named after the American inventor Thomas Edison. His parents decided to remove the \"i\" and call him \"Edson\", but there was an error on his birth certificate, leading many documents to show his name as \"Edison\".\n[…]\nDuring the 1960 season, Pelé scored 34 goals as Santos regained the Campeonato Paulista trophy. During the 1961 season, Pelé scored 47 goals as his team won both the Campeonato Paulista and the Taça Brasil. The Taça victory allowed Santos to participate in the Copa Libertadores, the most prestigious club tournament in the Western hemisphere.\n[…]\nIn 1961, the government of Brazil under President Jânio Quadros declared Pelé an \"official national treasure\" to prevent him from being transferred out of the country.\n[…]\nMany business experts credited the feud with transforming sports apparel into a multi-billion-pound industry.\n[…]\nIn 2000, the International Federation of Football History & Statistics (IFFHS) declared Pelé the \"World's Best and Successful Top Division Goal Scorer of all time\" with 541 goals in 560 games, and honoured him with a trophy.\n[…]\nCampeonato Brasileiro Série A: 1961, 1962, 1963, 1964, 1965, 1968\n[…]\nPelé at National Soccer Hall of Fame\n[…]\nPelé at Santos official website\n[…]\nPelé at Planet World Cup"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pel%C3%A9",
        "situacao": "ok",
        "texto": "Edson Arantes do Nascimento (Três Corações, 23 de outubro de 1940 – São Paulo, 29 de dezembro de 2022), mais conhecido como Pelé, foi um futebolista brasileiro que atuou como atacante. Descrito como o \"Rei do Futebol\", é amplamente considerado como o maior futebolista e um dos maiores atletas de todos os tempos.\n[…]\nRevelado nas categorias de base do Bauru Atlético Clube, Pelé rapidamente se transferiu ao Santos Futebol Clube, onde começou a atuar aos quinze anos de idade, e pela Seleção Brasileira aos dezesseis. Durante sua carreira na Amarelinha, sagrou-se campeão de três edições da Copa do Mundo FIFA: 1958, 1962 e 1970, sendo o único a fazê-lo como jogador, sendo também o jogador mais novo a ganhar uma Copa do Mundo na história do futebol, com apenas dezessete anos.\n[…]\nPara o então Presidente, esse processo levaria a um \"enfraquecimento da seleção campeã\"; terminava o bilhete afirmando que aguardava providências de Falcão. A solução engendrada por Jânio Quadros foi declarar Pelé um \"tesouro nacional\", e com isso impedir sua ida ao exterior. O ato do Presidente foi objeto de críticas na época, que apontavam a inconstitucionalidade de se privar Pelé de seus direitos constitucionais.\n[…]\nApós se destacar jogando pelo combinado Vasco-Santos no Torneio Internacional do Morumbi, Pelé foi convocado pelo técnico Sylvio Pirillo para a disputa da Copa Roca (atual Superclássico das Américas), torneio disputado entre a Seleção Brasileira e a Seleção Argentina em dois jogos. Na época, com a excursão de grandes clubes brasileiros para o exterior, o técnico brasileiro encontrava dificuldades para escalar a equipe nacional.\n[…]\n\"No momento que a bola chega aos pés de Pelé, o futebol se transforma em poesia\".\n[…]\nUnzelte, Celso (2002). O livro de ouro do futebol 3ª ed. São Paulo: Ediouro. 704 páginas. ISBN 85-00-01036-3",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Pelé",
      "descricao": "Edson Arantes do Nascimento, tricampeão mundial pela seleção brasileira."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Pelé foi campeão mundial na Suécia, em 1958, ainda adolescente. Com quantos anos ele conquistou essa Copa?",
    "resposta": "Dezessete",
    "distratores": [
      "Dezesseis",
      "Dezoito",
      "Dezenove"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pel%C3%A9",
      "https://en.wikipedia.org/wiki/1958_FIFA_World_Cup"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pel%C3%A9",
        "situacao": "ok",
        "texto": "Edson Arantes do Nascimento (23 October 1940 – 29 December 2022), better known by his nickname Pelé, was a Brazilian professional footballer who played as a forward. Widely regarded as one of the greatest players in history, he was among the most successful and popular sports figures of the 20th century. His 1,279 goals in 1,363 games, which includes exhibition games, is recognised as a Guinness W\n[…]\nPelé was born Edson Arantes do Nascimento on 23 October 1940 in Três Corações, Minas Gerais, Brazil. He was the son of Fluminense footballer Dondinho (born João Ramos do Nascimento) and Celeste Arantes. He had a younger brother, Zoca, who would also play for Santos. Pelé was named after the American inventor Thomas Edison. His parents decided to remove the \"i\" and call him \"Edson\", but there was an error on his birth certificate, leading many documents to show his name as \"Edison\".\n[…]\nIn 2000, the International Federation of Football History & Statistics (IFFHS) voted Pelé the World Player of the Century. During his career, he became known as \"the Black Pearl\" (A Pérola Negra), \"the King of Football\" (O Rei do Futebol ), \"the King Pelé\" (O Rei Pelé) or simply \"the King\" (O Rei ). In 2014, the city of Santos inaugurated the Museu Pelé, a museum which displays a 2,400-piece collection of Pelé memorabilia. Approximately $22 million was invested in the construction of the museum.\n[…]\nPelé married three times and had several extramarital affairs, fathering seven children in all. In 1966, he married Rosemeri dos Reis Cholbi. They had two daughters, Kely Cristina and Jennifer, and a son, Edson. Pelé and Cholbi divorced in 1982. In 2014, Edson was sentenced to 33 years in prison for laundering money from drug trafficking. On appeal, the sentence was reduced to 12 years and 10 months.\n[…]\nPelé: A Legend Looks Back – slideshow by Life magazine\n[…]\nPelé at Santos official website\n[…]\nPelé at Planet World Cup"
      },
      {
        "url": "https://en.wikipedia.org/wiki/1958_FIFA_World_Cup",
        "situacao": "ok",
        "texto": "The 1958 FIFA World Cup was the sixth FIFA World Cup, the quadrennial football tournament for senior national teams. It was played in Sweden from 8 to 29 June 1958. It remains the only Nordic country to have hosted a FIFA World Cup.\n[…]\nThe second group had the largest number of goals scored in a single group in the 1958 World Cup, with 31 goals in total (~5.16 goals per game). Just Fontaine of France scored 6 of his 13 goals in the tournament, making him the tournament's top scorer going into the quarter-finals.\n[…]\nIn spite of Hungary's recent travails, they were still considered a strong side and were expected to advance from their group. The success of Wales was a surprise but they drew all their group games and beat the Hungarians in a play-off match to follow Sweden into the knockout stage. Wales played Brazil in the quarter-finals and became the recipient of young Pelé's first World Cup goal.\n[…]\nBrazil won the group without conceding a single goal. The teenage Pelé played Brazil's last game against the Soviet Union. He did not score but drew wild reviews for his play. The Soviet Union, in their first World Cup, took second place.\n[…]\nPelé\n[…]\nFIFA selected the following players for the 1958 FIFA World Cup All-Star Team.\n[…]\nIn 1986, FIFA published a report that ranked all teams in each World Cup up to and including 1986, based on progress in the competition and overall results (not counting play-off results). The rankings for the 1958 tournament were as follows:\n[…]\nThe 1958 FIFA World Cup is depicted in the 2016 American film Pelé: Birth of a Legend which is centered around Pelé and the Brazilian team's journey to winning the tournament.\n[…]\n1958 FIFA World Cup Sweden, FIFA.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pel%C3%A9",
        "situacao": "ok",
        "texto": "Edson Arantes do Nascimento (Três Corações, 23 de outubro de 1940 – São Paulo, 29 de dezembro de 2022), mais conhecido como Pelé, foi um futebolista brasileiro que atuou como atacante. Descrito como o \"Rei do Futebol\", é amplamente considerado como o maior futebolista e um dos maiores atletas de todos os tempos.\n[…]\nRevelado nas categorias de base do Bauru Atlético Clube, Pelé rapidamente se transferiu ao Santos Futebol Clube, onde começou a atuar aos quinze anos de idade, e pela Seleção Brasileira aos dezesseis. Durante sua carreira na Amarelinha, sagrou-se campeão de três edições da Copa do Mundo FIFA: 1958, 1962 e 1970, sendo o único a fazê-lo como jogador, sendo também o jogador mais novo a ganhar uma Copa do Mundo na história do futebol, com apenas dezessete anos.\n[…]\nSe referindo ainda ao complexo de vira-lata e a Copa do Mundo FIFA de 1958, que viria a se realizar nos meses seguintes na Suécia, Nelson Rodrigues afirma: \"Com Pelé no time, e outros como ele, ninguém irá para a Suécia com a alma dos vira-latas. Os outros é que tremerão diante de nós\".\n[…]\nO gol contra o País de Gales, o primeiro de Pelé na competição, tornou-o o mais jovem goleador de tempos com dezessete anos e 239 dias. Nas semifinais, nova atuação destacada: Pelé marcou três gols na vitória por 5–2 sobre a França, tornando-se o mais jovem da história da Copa do Mundo a fazê-lo.\n[…]\nEm 29 de junho de 1958, se tornou o jogador mais jovem a disputar a final da Copa do Mundo aos dezessete anos e 249 dias. Ele marcou dois gols nessa final quando o Brasil venceu a Suécia por 5–2 em Estocolmo. Seu primeiro gol, em que aplicou um chapéu num zagueiro antes de chutar para o canto da rede, foi escolhido como um dos melhores gols da história das Copas.\n[…]\n\"No momento que a bola chega aos pés de Pelé, o futebol se transforma em poesia\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Dunga",
      "descricao": "Ex-volante e técnico brasileiro, capitão da seleção campeã do mundo em 1994."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O apelido Dunga, dado por um tio ao capitão do tetra quando ele era criança, vem de um personagem de qual história?",
    "resposta": "Branca de Neve e os Sete Anões",
    "fonte": [
      "https://en.wikipedia.org/wiki/Dunga",
      "https://pt.wikipedia.org/wiki/Dunga"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Dunga",
        "situacao": "ok",
        "texto": "Carlos Caetano Bledorn Verri (born 31 October 1963), commonly known as Dunga (Portuguese pronunciation: [ˈdũɡɐ]), is a Brazilian football manager and former professional player. Considered one of the greatest defensive midfielders of all time, as a player, he was known for his technique, athleticism, passing range, solid tackles and first touch.\n[…]\nOn 24 July 2006, Dunga was named as the new national coach of the Brazil national team as a replacement for Carlos Alberto Parreira, despite the fact that he had no prior coaching experience at the professional level. Pundit Tim Vickery wrote that Parreira was perceived as passive, while Dunga was considered to be passionate and involved like 2002 FIFA World Cup-winning manager Luiz Felipe Scolari; Dunga agreed with the comparison.\n[…]\nDunga's first competitive games were at the 2007 Copa América in Venezuela. His squad was without Ronaldinho and Kaká who had asked to be excused, or Ronaldo and Adriano who were out of form. Gilberto and Dani Alves were replacements at full-back for the retired Cafu and Roberto Carlos, while Robinho, Vagner Love and Afonso Alves were among the attacking options. The team won their second consecutive continental title by beating Argentina in the final 3–0.\n[…]\nBefore the World Cup in South Africa, Dunga's tactics were criticised by 1970 FIFA World Cup-winning pair Carlos Alberto and Tostão, who accused his team of not playing in the national style. Public figures including Pelé criticised him for excluding AC Milan attackers Ronaldinho and Alexandre Pato, as well as Santos youngsters Neymar and Ganso. Brazil made it to the quarter-finals, where they lost 2–1 to the Netherlands after having led the game 1–0.\n[…]\nDunga at National-Football-Teams.com\n[…]\nDunga at J.League (archive) (in Japanese)\n[…]\nCarlos Verri at Olympics.com\n[…]\nDunga at Olympedia\n[…]\nDunga at InterSportStats"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dunga",
        "situacao": "ok",
        "texto": "Carlos Caetano Bledorn Verri (Ijuí, 31 de outubro de 1963), mais conhecido como Dunga, é um treinador e ex-futebolista brasileiro que atuava como volante. Atualmente está sem clube.\n[…]\nO apelido Dunga foi dado por um dos seus tios, em referência a um dos Sete Anões, acreditando que Carlos não teria uma estatura maior.\n[…]\nEm 1998, o volante disputaria a sua terceira Copa. Mostrando toda a garra e vontade de vencer de sempre, desta vez Dunga acabou exagerando e foi flagrado pelas câmeras de televisão dando uma cabeçada no atacante Bebeto, durante uma discussão na partida contra o Marrocos, válida pela primeira fase do torneio, enquanto a bola estava parada. Constrangido, o capitão acabou se sentido isolado e diminuiu seu ímpeto.\n[…]\nMesmo após se aposentar dos gramados, Dunga permaneceu uma figura marcante para os brasileiros. Em 2006, quando o Brasil era amplamente favorito ao hexa, mas foi eliminado apresentando um futebol apático na Copa do Mundo realizada na Alemanha, muitos torcedores acreditavam que o time carecia de uma liderança forte e de um estilo de comando mais assertivo, em contraste com a abordagem de Carlos Alberto Parreira.\n[…]\nDentre as críticas às atuações do time, uma das questões mais comentadas foi o tratamento diferenciado dado ao atacante Neymar, o qual, apesar de ter sido expulso contra a Colômbia na Copa América de 2015, manteve-se como capitão da Seleção Brasileira. A postura de Dunga foi questionada principalmente pela situação envolvendo o zagueiro Thiago Silva, que mesmo sendo considerado por muitos um dos melhores defensores do mundo, foi deixado de fora em favor do atacante.\n[…]\n«Dunga». no Soccerway"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Cafu",
      "descricao": "Marcos Evangelista de Morais, lateral-direito brasileiro, capitão da seleção campeã mundial em 2002."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O capitão do penta, Marcos Evangelista de Morais, ganhou seu apelido por lembrar qual ponta-direita do Fluminense dos anos setenta?",
    "resposta": "Cafuringa",
    "fonte": [
      "https://en.wikipedia.org/wiki/Cafu",
      "https://pt.wikipedia.org/wiki/Cafu"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cafu",
        "situacao": "ok",
        "texto": "Marcos Evangelista de Morais (born 7 June 1970), known as Cafu ([kaˈfu]), is a Brazilian former professional footballer who played as a right-back. Widely regarded as one of the greatest full-backs of all time, he was known for his pace and energetic attacking runs along the right flank. He is the most-capped player for the Brazil national team with 142 appearances.\n[…]\nAs a child, he received the nickname 'Cafu', in honor of the Brazilian winger Cafuringa.\n[…]\nCafu was one of few Brazil players who spoke to the press in the midst of a hailstorm of criticism from Brazilian fans and media alike following the team's return home.\n[…]\nCafu is regarded as one of the best right-backs in the world during his career, as well as one of the best-ranked footballers. Cafu was an attacking full-back before it became common, influencing future players Dani Alves, Trent Alexander-Arnold, and Achraf Hakimi. He was well known for his incredible ability and stamina, as well as his ability to make overlapping attacking runs down the right flank and provide accurate crosses to teammates in the area.\n[…]\nCafu is separated from his wife Regina Feliciano, whom he married in 1987. The couple had three children together: two sons (Danilo and Wellington) and a daughter (Michelle). On 4 September 2019, Danilo suffered a heart attack whilst playing football at his family home, after complaining about feeling unwell. Danilo was taken to a hospital where he later died.\n[…]\nFor the 2018 Brazilian general election, Cafu supported Jair Bolsonaro.\n[…]\nScores and results list Brazil's goal tally first, score column indicates score after each Cafu goal.\n[…]\nCafu – FIFA competition record (archived)\n[…]\nOfficial Cafu Foundation site (in Portuguese)\n[…]\nCafu profile by Aaron Marcus – acmilan-online.com\n[…]\nCafu – UEFA competition record (archived)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cafu",
        "situacao": "ok",
        "texto": "Marcos Evangelista de Morais (Itaquaquecetuba, 7 de junho de 1970), mais conhecido como Cafu, é um ex-futebolista brasileiro que atuava com lateral-direito. Considerado por muitos como um dos maiores da sua posição na história do futebol, é o recordista de jogos pela Seleção Brasileira Masculina, com 142 partidas. Fez parte das equipes vencedoras das Copas do Mundo de 1994 e 2002, além de ter disp\n[…]\nComeçou jogando pelo São Paulo, em 1989, depois de passar por nove \"peneiras\" sem sucesso. Ao contrário que muitos pensam, Cafu surgiu no Soberano atuando como atacante, quase um ponta-direita. Vestindo a camisa 11 tricolor, fez uma partida irretocável na primeira final do Campeonato Paulista de 1992 contra o rival Palmeiras, marcando um gol e dando três assistências na vitória por 4–2.\n[…]\nEm julho de 1997, assinou contrato com a Roma. Pelo time giallorosso, o jogador foi um dos principais nomes — ao lado de Francesco Totti, Gabriel Batistuta e Damiano Tommasi — da conquista do scudetto na temporada 2000–01. Cafu ganhou o apelido de Il Pendolino ('o trem expresso'). No total, o lateral brasileiro atuou em 219 partidas e marcou oito gols.\n[…]\nCafu é filho de Célio de Morais, um empresário e treinador de futebol amador brasileiro, que morreu em 2008, aos 56 anos. O jogador foi casado com Regina Feliciano, anunciando a separação em outubro de 2022, após 35 anos de casamento. Com ela teve três filhos: Danilo (falecido em 2019), Wellington e Michele.\n[…]\nA escolha do ex-capitão da Seleção Brasileira, bicampeão mundial, foi estratégica para melhorar a imagem internacional do país sede, que anteriormente era visto com desconfiança por grande parte da opinião pública global devido a questões ligadas a direitos humanos, restrições culturais e autoritarismo político.\n[…]\nBola de Ouro Dream Team: Melhor lateral-direito da História\n[…]\nCafu no Instagram\n[…]\nCafu no Twitter\n[…]\n«Cafu». no Sambafoot"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Sócrates",
      "descricao": "Sócrates Brasileiro Sampaio de Souza Vieira de Oliveira, meia do Corinthians e capitão da seleção brasileira na Copa de 1982."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Sócrates, capitão da seleção de 1982, era chamado de Doutor. Que profissão ele exercia além do futebol?",
    "resposta": "Médico",
    "fonte": [
      "https://en.wikipedia.org/wiki/S%C3%B3crates",
      "https://pt.wikipedia.org/wiki/S%C3%B3crates_(futebolista)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/S%C3%B3crates",
        "situacao": "ok",
        "texto": "Sócrates Brasileiro Sampaio de Souza Vieira de Oliveira (19 February 1954 – 4 December 2011), simply known as Sócrates [ˈsɔkɾat͡ʃis], was a Brazilian footballer who played as a midfielder.\n[…]\nSócrates captained Brazil at the 1982 FIFA World Cup in Spain, playing in all five of the team's matches. Under Telê Santana, Brazil became known for an attacking, possession-oriented style of play associated with futebol-arte. The team's midfield, featuring Sócrates, Zico, Paulo Roberto Falcão and Toninho Cerezo, combined creative passing and positional interchange, supported by the attacking contributions of full-backs Júnior and Leandro.\n[…]\nBrazil faced Italy on 5 July 1982 in a decisive second-round match, needing only a draw to advance to the semi-finals. After Paolo Rossi gave Italy an early lead, Sócrates equalised in the 12th minute following a pass from Zico. Rossi restored Italy's advantage before Falcão made the score 2–2 in the second half. Rossi subsequently completed his hat-trick, securing a 3–2 Italian victory and eliminating Brazil from the tournament.\n[…]\nDespite their elimination, the 1982 side captained by Sócrates earned lasting international admiration for its expressive, attacking style of play.\n[…]\nSócrates formed a close friendship with fellow Brazil international Zico, whom he first met in 1977. In a 1982 interview with Placar, both players spoke of their friendship, shared outlook and involvement in professional footballers' rights. During Sócrates' time at Flamengo, his sons Gustavo and Rodrigo played in a children's football team organised by Zico.\n[…]\nWorld XI: 1982\n[…]\nSócrates at Sambafoot (archived)\n[…]\nSócrates at National-Football-Teams.com\n[…]\nSócrates at Soccerway"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/S%C3%B3crates_(futebolista)",
        "situacao": "ok",
        "texto": "Sócrates Brasileiro Sampaio de Souza Vieira de Oliveira (Belém, 19 de fevereiro de 1954 – São Paulo, 4 de dezembro de 2011) foi um treinador, médico e ex-futebolista brasileiro que atuava como meio-campista. No futebol, atuou principalmente no meio-campo e é considerado um dos grandes craques do futebol brasileiro da década de 1980.\n[…]\nDefendeu a Seleção Brasileira entre 1979 e 1986, sendo capitão da Amarelinha na Copa do Mundo de 1982.\n[…]\nComo havia se formado em medicina no ano anterior (1977), Sócrates passou a se dedicar mais ao futebol. O meio-campista se firmaria no Corinthians em 1978, refazendo a dupla com Geraldão, seu ex-companheiro de Botafogo; no entanto, seus grandes companheiros de ataque nesse time seriam Palhinha e Casagrande. Na Seleção Brasileira estrearia em 1979, em um amistoso contra o Paraguai.\n[…]\nFora do futebol, Sócrates sempre manteve uma ativa participação política, tanto em assuntos relacionados ao bem-estar dos jogadores quanto aos temas correntes do país. Na década de 1980, participou da campanha Diretas Já (1983–1984) e foi um dos principais idealizadores do movimento Democracia Corinthiana (1982–1984), que reivindicava para os jogadores mais liberdade e mais influência nas decisões administrativas do clube.\n[…]\nEm 1980 Sócrates gravou um LP de música sertaneja chamado Casa de Caboclo, pela gravadora RCA, com tiragem de 50 000 exemplares que rapidamente saiu de catálogo. Em 1982, participou das gravações do LP Aquarela, do cantor Toquinho.\n[…]\nA FIFA, entidade máxima do futebol mundial, também prestou a devida homenagem a Sócrates.\n[…]\nSócrates disputou 297 jogos, marcou 172 gols e venceu três Campeonatos Paulistas (1979, 1982 e 1983) com a camisa do Timão, além de ter sido um dos principais idealizadores da Democracia Corinthiana.\n[…]\nSeleção Brasileira\n[…]\n«Sócrates». no Soccerway\n[…]\n«Sócrates». no Sambafoot"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Franz Beckenbauer",
      "descricao": "Zagueiro e técnico alemão, campeão do mundo como jogador em 1974 e como técnico em 1990."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Pela elegância e pela liderança em campo, Franz Beckenbauer ganhou na Alemanha um apelido que é um título de imperador. Qual?",
    "resposta": "Kaiser",
    "fonte": [
      "https://en.wikipedia.org/wiki/Franz_Beckenbauer"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Franz_Beckenbauer",
        "situacao": "ok",
        "texto": "Franz Anton Beckenbauer (German pronunciation: [fʁants ˈbɛkn̩ˌbaʊɐ] ; 11 September 1945 – 7 January 2024) was a German professional football player, manager, and official. Nicknamed der Kaiser (\"the Emperor\"), he is widely regarded as one of the greatest and most influential players of all time. Beckenbauer was a versatile player who started out as a midfielder, but made his name as a centre-back.\n[…]\nBeginning in 1968, Beckenbauer was called \"der Kaiser\" ('the Emperor') by fans and the media. The following anecdote is told (even during his lifetime by Beckenbauer himself) to explain the origin: On the occasion of a friendly game of Bayern Munich in Vienna, Austria, Beckenbauer posed for a photo session right beside a bust of the former Austrian emperor Franz Joseph I. The media called him Fußball-Kaiser ('football-emperor') afterwards, and soon he was just called der Kaiser.\n[…]\nLibuda was commonly called König von Westfalen ('king of Westphalia'), so the press looked for an even more exalted moniker and invented der Kaiser.\n[…]\nA practising Catholic, Beckenbauer believed that one's soul travels after death.\n[…]\nIn 2016 and 2017, Beckenbauer had cardiac surgery, and received an artificial hip in 2018.\n[…]\nScores and results list Germany's goal tally first, score column indicates score after each Beckenbauer goal.\n[…]\nBeckenbauer, Franz and Dettmar Cramer, Nicht nur ein Spiel! Reinbek: Rowohlt, 2006, ISBN 3-498-00640-1.\n[…]\nKörner, Torsten, Franz Beckenbauer – der freie Mann. Scherz, Frankfurt 2005, ISBN 3-502-18391-0.\n[…]\nKratzert, Armin: Beckenbauer taucht nicht auf. Roman. Kirchheim Verlag, München 2012, ISBN 978-3-87410-119-6\n[…]\nKummermehr, Petra (Hrsg.): Das Buch Franz. Botschaften eines Kaisers. Diederichs, München 2011, ISBN 978-3-424-35063-0.\n[…]\nFranz Beckenbauer at DFB (also available in German)\n[…]\nFranz Beckenbauer – UEFA competition record (archive)\n[…]\nFranz Beckenbauer – FIFA competition record (archived)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Franz_Beckenbauer",
        "situacao": "ok",
        "texto": "Franz Anton Albert Beckenbauer (Munique, 11 de setembro de 1945 – Salzburgo, 7 de janeiro de 2024) foi um treinador e futebolista alemão que atuou como zagueiro, líbero ou volante. É amplamente considerado como um dos maiores jogadores de futebol de todos os tempos.\n[…]\nExerceu o cargo de presidente do Bayern de Munique por 15 anos, clube com o qual tem sua história entrelaçada. Sua alcunha é de Kaiser (\"O Imperador\", em alemão). Com a Seleção Alemã (da então Alemanha Ocidental), foi campeão mundial como jogador (em 1974) e técnico (1990), sendo um dos três únicos a deter tal marca, ao lado do brasileiro Zagallo e do francês Didier Deschamps. É também um dos sete jogadores a terem conquistado as medalhas de ouro, de prata e de bronze em Copas do Mundo FIFA.\n[…]\nMaier também foi à Copa, como terceiro goleiro, enquanto Beckenbauer já seria titular.\n[…]\nO habilidoso meia de futebol vigoroso, liderança natural, passes precisos de curta e longa distância e capaz de desarmar sem fazer faltas acabaria recebendo a alcunha de \"brasileiro da Alemanha\", antes de tornar-se Kaiser. Outras marcas registradas de seu futebol vistoso eram a elegância com seu porte ereto, passadas largas e a cabeça sempre erguida, além da grande visão de jogo.\n[…]\nO primeiro troféu do Kaiser viria dois anos depois, com o título da Euro 1972 sobre a União Soviética. Naquele ano ele, campeão nacional com o Bayern, receberia sua primeira Bola de Ouro como melhor jogador da Europa. Dois anos depois, a Alemanha Ocidental sediaria a Copa. Na primeira fase da Copa do Mundo FIFA de 1974, o país classificou-se sem sustos, com vitórias sobre Chile e Austrália.\n[…]\nCopa da Alemanha: 1965–66, 1966–67, 1968–69 e 1970–71\n[…]\nPelé e Franz Beckenbauer no chuveiro\n[…]\n«Franz Beckenbauer». no Soccerway",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Copa do Mundo FIFA de 2014",
      "descricao": "Vigésima Copa do Mundo, disputada no Brasil e vencida pela Alemanha."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome Fuleco, do tatu-bola que foi mascote da Copa de 2014, junta a palavra futebol com qual outra?",
    "resposta": "Ecologia",
    "fonte": [
      "https://en.wikipedia.org/wiki/Fuleco"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fuleco",
        "situacao": "ok",
        "texto": "Fuleco (Portuguese: [fuˈlɛku]) was the official mascot of the 2014 FIFA World Cup, hosted in Brazil. Fuleco is a Brazilian three-banded armadillo, a species of armadillo which is native to Brazil and categorized as a vulnerable species on the IUCN Red List. Fuleco was officially launched as part of Brazilian broadcaster TV Globo's weekly Fantástico entertainment show on 25 November 2012.\n[…]\nHis name is a portmanteau of the Portuguese words futebol (\"football\") and ecologia (\"ecology\"). The mascot, with his message of environmental concerns, ecology and sport, turned out to be very popular with football teams around the world.\n[…]\nOver 90% of Brazilians believe Brazil 2014 should be environmentally friendly. The name Fuleco was chosen over the names Amijubi (Amizade – \"Friendship\" and Júbilo – \"Joy\") and Zuzeco (Azul – \"Blue\" and Ecologia – \"Ecology\") by more than 1.7 million football fans. Fuleco won with 48% of the vote.\n[…]\nThe final mascot design was chosen after FIFA and the Local Organizing Committee had analyzed 47 different proposals created by six different Brazilian agencies. The designs were further analyzed through extensive research carried out amongst its primary target audience, Brazilian children between the ages of five and twelve, with the favourite being the armadillo, created by 100%Design. Fuleco is seen as a cheerful and appealing personality.\n[…]\nEnvironmental group the Caatinga Association, an organization whose campaigning helped FIFA choose the armadillo as its mascot, claimed that FIFA has not given any money to support the endangered species. FIFA acknowledged that it does not have any connection with organisations attempting to help the species despite expecting to make profits from selling merchandise based on their mascot.\n[…]\nFIFA World Cup mascots\n[…]\nFIFA's official webpage on Fuleco"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Fuleco",
        "situacao": "ok",
        "texto": "Fuleco é o mascote da Copa do Mundo FIFA de 2014. O mascote é inspirado no gênero dos tatus-bola, mais especificamente na espécie conhecida como tatu-bola-da-caatinga, que é natural da região de caatinga do nordeste do Brasil e encontra-se em estado de espécie ameaçada de extinção. A origem etimológica do nome \"Fuleco\" é a união das palavras \"futebol\" e \"ecologia\".\n[…]\nO diretor de marketing da Federação Internacional de Futebol (FIFA), Thierry Weil, comentou sobre Fuleco: \"Não apenas ele é conhecido e reconhecido pela grande maioria dos brasileiros, mas também parece ter construído um relacionamento com os fãs de futebol e tornou-se uma figura popular, ganhando assim um apelido carinhoso de 'tatu-bola'. Ele está rapidamente se tornando o mais bem sucedido mascote da Copa do Mundo FIFA de todos os tempos\".\n[…]\nEscolhida a opção Fuleco, elevaram-se criticas que ressaltam a semelhança do nome com as palavras fuleiro e furreca, ambas significando, segundo o Dicionário Caldas Aulete, \"que não tem valor\". Manifestações em tom crítico e humorístico no Twitter foram motivadas pela escolha do nome, incluindo considerações de se referir ao mascote apenas como tatu-bola.\n[…]\nSobre a escolha de um tatu-bola como mascote, Jaime Leitão questiona o porquê de a FIFA não escolher outra espécie brasileira em extinção, como o mico-leão-dourado, o tamanduá-bandeira, a onça-pintada e a ararinha-azul. Também afirma que Fuleco \"mais parece um ET que um tatu\" e que \"tatu lembra buraco, cemitério, esconderijo\".\n[…]\nPara seu blog no portal Yahoo!, Regis Tadeu qualificou Fuleco como \"um dos mascotes esportivos mais repulsivos de todos os tempos\" e que o personagem, ao lado do ex-jogador Ronaldo, seria um \"espetáculo de horror infantil\". Na Espanha, o jornal As descreveu Fuleco como \"feio\", \"maldito tatu\" e \"nem é típico, nem é amigável\".\n[…]\nMascotes\n[…]\nCopa do Mundo FIFA de 2014",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Copa do Mundo FIFA de 2014",
      "descricao": "Vigésima Copa do Mundo, disputada no Brasil e vencida pela Alemanha."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Na final da Copa de 2014, no Maracanã, quem marcou na prorrogação o gol do título alemão contra a Argentina?",
    "resposta": "Mario Götze",
    "fonte": [
      "https://en.wikipedia.org/wiki/2014_FIFA_World_Cup_final"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/2014_FIFA_World_Cup_final",
        "situacao": "ok",
        "texto": "The final match of the 2014 FIFA World Cup, the 20th edition of FIFA's competition for national football teams, was played at the Maracanã Stadium in Rio de Janeiro, Brazil, on 13 July 2014, and was contested by Germany and Argentina.\n[…]\nMario Götze, who had come on as a substitute shortly before the end of normal time, received Schürrle's cross from the left on his chest before volleying a left-footed shot into the net to secure a 1–0 victory for Germany.\n[…]\nThe venue for the final was announced in 2011 as the Estádio Jornalista Mário Filho in Rio de Janeiro, commonly known as the Maracanã Stadium. It was built in preparation for the 1950 FIFA World Cup, and that tournament's final match, in which Uruguay beat Brazil 2–1 to win the trophy, is as of 2021 the record-holder for the highest attendance at any football match in history.\n[…]\nGermany were drawn in Group G for the World Cup, in which they were joined by Ghana, Portugal and the United States. Their first match was against Portugal, on 16 June 2014 at the Itaipava Arena Fonte Nova in Salvador. Germany won a penalty on 10 minutes, when João Pereira fouled Mario Götze. Müller took the kick and gave Germany the lead. Mats Hummels added a second goal with a header on 32 minutes, and Portugal's Pepe was shown a red card five minutes later, after he headbutted Müller.\n[…]\nThe goalscorer Götze was named as the official man of the match for the final, despite playing only the last two minutes of normal time and thirty minutes of extra time. Messi was awarded the Golden Ball, FIFA's award for whom they considered the tournament's best player, and Neuer was given the Golden Glove for best goalkeeper.\n[…]\nMedia related to Final of the 2014 FIFA World Cup at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Final_da_Copa_do_Mundo_FIFA_de_2014",
        "situacao": "ok",
        "texto": "A final da Copa do Mundo FIFA de 2014 foi realizada em 13 de julho no estádio Maracanã, na cidade do Rio de Janeiro, Brasil. Foi a segunda final de mundial disputada no estádio após a definição da Copa do Mundo FIFA de 1950 entre Brasil e Uruguai, vencida pelos uruguaios por 2 a 1.\n[…]\nA Seleção Alemã estreou na competição com uma goleada de 4–0 contra Portugal na Arena Fonte Nova, Salvador. No segundo jogo pela fase de grupos empatou com Gana por 2–2 na Arena Castelão. Terminou essa fase ganhando de 1–0 dos Estados Unidos na Arena Pernambuco, em Recife. Nas oitavas de final, teve dificuldades contra a Argélia, ganhando de 2–1 após a prorrogação no Estádio Beira-Rio. Nas quartas de final venceu a França por 1–0 no Estádio do Maracanã, Rio de Janeiro.\n[…]\nA Seleção Argentina estreou na competição com um placar de 2–1 contra a estreante seleção da Bósnia e Herzegovina no Estádio do Maracanã, Rio de Janeiro. No segundo jogo pela fase de grupos ganhou de 1–0 do Irã no Estádio Mineirão, garantindo a vaga nas oitavas de final. Terminou essa fase ganhando de 3–2 da Nigéria no Estádio Beira-Rio, em Porto Alegre. Nas oitavas, teve dificuldades contra a Suíça, ganhando de 1–0 após a prorrogação na Arena de São Paulo.\n[…]\nA bola que foi utilizada na partida foi revelada no dia 29 de maio de 2014. Fabricada pela Adidas e chamada \"Adidas Brazuca Final Rio\" trata-se de uma bola semelhante a Brazuca, utilizada durante todo o torneio, porém, com alguns detalhes de decoração diferentes. As cores vermelha, azul e verde da original deram lugar ao dourado e verde limão, inspirados no troféu da Copa do Mundo e com os nomes das seleções finalistas, estádio, cidade e a data do jogo.\n[…]\nCopa do Mundo FIFA de 2014\n[…]\nAlemanha-Argentina em futebol",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Flamengo",
      "descricao": "Clube de Regatas do Flamengo, clube carioca fundado em 1895."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Em 1969, torcedores do Flamengo soltaram no Maracanã uma ave que os rivais usavam para provocá-los, e ela virou mascote do clube. Que ave?",
    "resposta": "Urubu",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Clube_de_Regatas_do_Flamengo",
      "https://en.wikipedia.org/wiki/CR_Flamengo"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Clube_de_Regatas_do_Flamengo",
        "situacao": "ok",
        "texto": "Clube de Regatas do Flamengo (CRF) é uma agremiação poliesportiva brasileira com sede na cidade do Rio de Janeiro, capital do estado homônimo. Fundado no bairro do Flamengo para disputas do esporte remo em 17 de novembro de 1895, tornou-se um dos clubes mais bem-sucedidos e populares do esporte brasileiro especialmente pelo futebol. É considerado um dos maiores e mais tradicionais clubes do Brasil\n[…]\nO urubu foi solto na arquibancada com uma bandeira presa nos pés e, quando caiu no gramado, pouco antes de o jogo iniciar, a torcida fez a festa, vibrando e gritando: \"é urubu, é urubu\". O Flamengo venceu o jogo por 2–1 e, a partir daí, o novo mascote consagrou-se, tomando o lugar do Popeye. O cartunista Henfil, rubro-negro, tratou de humanizá-lo em suas charges esportivas em jornais e revistas, e o Urubu tornou-se um mascote popular.\n[…]\nEm 2000, o mascote do Flamengo ganhou um desenho oficial e um nome: \"Samuca\". No entanto, esse nome não se popularizou entre a torcida, que o continua chamando simplesmente de \"urubu\".\n[…]\nO Centro de Treinamento George Helal, ou \"Ninho do Urubu\", é o local onde o Flamengo realiza os seus treinamentos relacionados à equipe de futebol. Em 2011, foi lançada a construção definitiva do CT, cuja obra poderá ser acompanhada pelos torcedores através do site oficial.\n[…]\nO primeiro confronto entre os rivais cariocas Flamengo e Botafogo ocorreu em 1913. A partida ficou conhecida como Clássico da Rivaldade na década de 1960. O mascote do urubu do Flamengo originou-se durante a partida de 1 de junho de 1969, contra o Botafogo, quando torcedores do Flamengo lançaram um urubu em campo em resposta aos aplausos racistas de urubu do Botafogo e torcedores de outros times. O artilheiro do Flamengo no clássico é Zico e o artilheiro do Botafogo é Heleno de Freitas.\n[…]\nIncêndio no alojamento do Flamengo\n[…]\nClube de Regatas do Flamengo no Twitter\n[…]\nClube de Regatas do Flamengo no YouTube"
      },
      {
        "url": "https://en.wikipedia.org/wiki/CR_Flamengo",
        "situacao": "ok",
        "texto": "Clube de Regatas do Flamengo (Brazilian Portuguese: [ˈklubi dʒi ʁeˈɡataz du flaˈmẽɡu]; lit. 'Flamengo Rowing Club'), more commonly referred to as simply Flamengo, is a Brazilian multi-sports club based in Rio de Janeiro, in the neighborhood of Gávea. It was founded in and named after the Flamengo neighborhood in 1895, and is best known for its professional football team.\n[…]\nSince 1969, the vulture (Portuguese: urubu) has been the mascot of Flamengo.\n[…]\nIn 2000, Flamengo's mascot received an official design and a name: Samuca. However, this name did not become popular among the supporters, who continue to call him simply Urubu.\n[…]\nIn 2017, Flamengo played their home matches at the Estádio Luso Brasileiro of Portuguesa while disputing their stadium situation with the Rio de Janeiro state government and Complexo Maracanã Entretenimento S.A. (composed of Odebrecht, IMX, AEG), the operator of the Maracanã Stadium. A three-year agreement was signed with Portuguesa over management of Estádio Luso Brasileiro, named Ilha do Urubu (\"Vulture's Island\") by Flamengo supporters in a poll.\n[…]\nThe park was renovated to fit 20,500 spectators. Flamengo started playing at the arena in March 2017, but after several delays and administrative issues and a new contract with the Maracanã, Flamengo broke their lease with the Ilha do Urubu in July 2018.\n[…]\nThe Clássico da Rivaldade ('Rivalry Classic') is the traditional Brazilian derby between Botafogo and Flamengo, both from Rio de Janeiro. The first confrontation between Rio de Janeiro rivals Flamengo and Botafogo occurred in 1913. Flamengo's mascot of the vulture originated during the 1 June 1969, match against Botafogo when Flamengo supporters released a vulture onto the field in response to the racist cheers of urubu (vulture) from Botafogo and other teams' supporters.\n[…]\nClube de Regatas do Flamengo (beach soccer)\n[…]\nResults from Flamengo"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Flamengo",
      "descricao": "Clube de Regatas do Flamengo, clube carioca fundado em 1895."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Em 2019, o Flamengo virou a final da Libertadores contra o River Plate nos minutos finais, com dois gols de Gabigol. Em que cidade foi o jogo?",
    "resposta": "Lima",
    "distratores": [
      "Santiago",
      "Buenos Aires",
      "Montevidéu"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/2019_Copa_Libertadores_final"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/2019_Copa_Libertadores_final",
        "situacao": "ok",
        "texto": "The 2019 Copa Libertadores final was the final match which decided the winner of the 2019 Copa Libertadores, the 60th edition of the Copa Libertadores, South American's top-tier continental club football tournament organized by CONMEBOL. The match was played on 23 November 2019 at the Estadio Monumental in Lima, Peru, between Brazilian team Flamengo and the defending champions, River Plate from Ar\n[…]\nThe match was played at the Estadio Monumental in Lima, Peru. Originally scheduled at the Estadio Nacional in Santiago, Chile, the match had to be relocated to the Estadio Monumental in Lima due to protests in Chile. It was the first final to be played as a single match at a neutral venue chosen in advance, replacing the home-and-away format used from 1960 to 2018.\n[…]\nThis was the fourth Copa Libertadores final held in Lima, after the play-off of the 1971 finals and the first legs of the 1972 and 1997 finals, all matches played at the Estadio Nacional.\n[…]\nOn 14 August 2018, the CONMEBOL Council selected the Estadio Nacional Julio Martínez Prádanos in Santiago, Chile as the venue of the 2019 Copa Libertadores final while the Estadio Nacional in Lima had been chosen to host the 2019 Copa Sudamericana final. The Uruguayan Football Association withdrew its bid because Estadio Centenario did not meet the CONMEBOL requirements.\n[…]\nFlamengo won their second Copa Libertadores and earned the right to represent CONMEBOL at the 2019 FIFA Club World Cup in Qatar. Jorge Jesus became the second non-South American manager to win the Copa Libertadores, following Mirko Jozić's 1991 championship for Colo-Colo. The club went on to clinch the Campeonato Brasileiro Série A title a day later after the second-place team, Palmeiras, was mathematically eliminated from reaching the title.\n[…]\n2019 Copa Sudamericana final\n[…]\nCONMEBOL Libertadores 2019, CONMEBOL"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Final_da_Copa_Libertadores_da_Am%C3%A9rica_de_2019",
        "situacao": "ok",
        "texto": "A final da Copa Libertadores da América de 2019 foi a 60.ª final desta competição, organizada anualmente pela Confederação Sul-Americana de Futebol (CONMEBOL). Foi vencida pela equipe brasileira do Flamengo, que sagrou-se campeã pelo placar de 2–1 sobre a equipe argentina do River Plate.\n[…]\nCom apenas Santiago e Lima na disputa, a CONMEBOL realizou verificações nos dois estádios e em 14 de agosto de 2018 definiu o Estádio Nacional de Chile, em Santiago, como sede da final da Libertadores e o Estádio Nacional do Peru, em Lima, como sede da final da Copa Sul-Americana, com esta última sendo movida para Assunção em maio de 2019, e a primeira movida para o Estádio Monumental, em Lima, devido às grandes ondas de protestos contra o atual presidente do Chile, Sebastián Piñera.\n[…]\nO segundo tempo continuou com domínio do River Plate. No entanto, o Flamengo começou a se afirmar no contra-ataque, com Gabriel e Éverton Ribeiro quase marcando enquanto Borré estava lesionado. A partida começou a mudar de figura após a entrada de Diego, que substituiu Gerson aos 66 minutos. Diego passou a ser a melhor opção para o Flamengo atacar. Todos os ataques passavam por ele, que escolhia entre voltar para a defesa, ou acelerar o jogo. O Flamengo foi assim, aos poucos, ganhando terreno.\n[…]\nPela forma dramática como o Flamengo conseguiu chegar a vitória, este jogo foi chamado por alguns jornalistas e veículos da imprensa como \"milagre\" e \"milagre de Jesus\", em alusão ao sobrenome do técnico português Jorge Jesus. Alguns também compararam a partida com a final da Liga dos Campeões da UEFA em 1999, por conta dos dois gols da virada do Manchester United contra o Bayern de Munique que saíram depois dos 90 minutos.\n[…]\nResultados da fase final da Copa Libertadores da América de 2019",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Copa América",
      "descricao": "Torneio de seleções da América do Sul organizado pela Conmebol, disputado desde 1916."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Até 1975, o torneio de seleções que hoje se chama Copa América era disputado com outro nome. Qual era?",
    "resposta": "Campeonato Sul-Americano",
    "distratores": [
      "Copa Roca",
      "Taça do Atlântico",
      "Copa Rio Branco"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Copa_Am%C3%A9rica",
      "https://en.wikipedia.org/wiki/Copa_Am%C3%A9rica"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Copa_Am%C3%A9rica",
        "situacao": "ok",
        "texto": "A Copa América, oficialmente CONMEBOL Copa América, conhecida até 1975 como Campeonato Sul-Americano de Futebol (em espanhol: Campeonato Sudamericano de Fútbol), é a principal competição entre as seleções de futebol das nações da América do Sul organizada pela CONMEBOL.\n[…]\nDa mesma forma, para a comemoração do centenário de sua independência, a Argentina realizou um torneio entre 2 e 17 de julho de 1916, com Argentina, Chile, Uruguai e Brasil sendo os primeiros participantes do torneio. Este torneio chamado de Campeonato Sudamericano de Fútbol seria a primeira edição do que hoje é conhecido como Copa América.\n[…]\nDepois de perder a final de 1928 nos Jogos Olímpicos de Verão de 1928, em Amsterdã, a Argentina se vingaria no Campeonato Sul-Americano de Futebol de 1929 derrotando os uruguaios no último jogo decisivo. Durante este período, a Bolívia e o Peru debutaram no torneio em 1926 e 1927, respectivamente.\n[…]\nApós oito anos de ausência, o evento foi retomado em 1975 e oficialmente adquiriu o nome Copa América. O torneio não tinha local fixo, e todas as partidas foram disputadas ao longo do ano em cada país. Nove equipes participaram da fase de grupos com o defensor do título entrando nas semifinais. O torneio foi disputado a cada quatro anos usando este sistema até 1987.\n[…]\nComo Campeonato Sul-Americano de Futebol\n[…]\nAustrália e o Catar iriam disputar a Copa América de 2021 (que estava programada para 2020), mas desistiram após os desdobramentos da Pandemia de COVID-19.\n[…]\nCampeonato Pan-Americano de Futebol\n[…]\nCampeonato Sul-Americano de Futebol Sub-20\n[…]\nCampeonato Sul-Americano de Futebol Sub-17\n[…]\nCampeonato Sul-Americano de Futebol Sub-15\n[…]\nCopa América no Facebook\n[…]\nCopa América no YouTube\n[…]\nCopa América no Twitter\n[…]\nCopa América no Instagram\n[…]\nSite oficial da Copa América Centenário"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Copa_Am%C3%A9rica",
        "situacao": "ok",
        "texto": "The CONMEBOL Copa América ('Americas Cup'; known until 1975 as the South American Football Championship) is the top-flight football tournament for men's national teams in South America. Held every four years, it is the oldest extant continental football competition. The Copa América determines the South American men's national team champion, minus Suriname, Guyana and French Guiana. Since the 1990\n[…]\nThis so-called Campeonato Sudamericano de Football would be the first edition of what is currently known as Copa América; Uruguay would triumph in this first edition after tying 0–0 with hosts Argentina in the deciding, last match held in Estadio Racing Club in Avellaneda.\n[…]\nThe tournament was previously known as Campeonato Sudamericano de Futbol (South American Championship of Football). South American Championship of Nations was the official English language name. The current name has been used since 1975. Up to 1967 if there was a tie of points at the top of the standings, a playoff match (or matches) would be held to determine the champion. Between 1975 and 1983 it had no fixed host nation, and was held in a home and away fashion.\n[…]\nThe Copa América trophy is a 9 kg (20 lb) weight and 77 cm (30 in) tall silver ornament, with a 3-level wooden base which contains several plaques. The plaques are engraved with every winner of the competition, as well as the edition won. The trophy previously had a one- and two-level base , and prior to 1979 there was no base at all, like the one used in 1975.\n[…]\nThe commemorative Copa América Centenario trophy was designed by Epico Studios in the United States and manufactured by London Workshops of Thomas Lyte in England. The winning team will keep the trophy in perpetuity.\n[…]\n1975–present: \"Copa América\"\n[…]\nCopa América Femenina\n[…]\nCopa América Centenario\n[…]\nA brief history of the Copa América on The Guardian\n[…]\nThe Copa América Archive – Trivia"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Copa América",
      "descricao": "Torneio de seleções da América do Sul organizado pela Conmebol, disputado desde 1916."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "A Copa América, o torneio continental de seleções mais antigo ainda disputado, teve sua primeira edição em que ano?",
    "resposta": "1916",
    "distratores": [
      "1910",
      "1924",
      "1930"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Copa_Am%C3%A9rica",
      "https://pt.wikipedia.org/wiki/Copa_Am%C3%A9rica"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Copa_Am%C3%A9rica",
        "situacao": "ok",
        "texto": "The CONMEBOL Copa América ('Americas Cup'; known until 1975 as the South American Football Championship) is the top-flight football tournament for men's national teams in South America. Held every four years, it is the oldest extant continental football competition. The Copa América determines the South American men's national team champion, minus Suriname, Guyana and French Guiana. Since the 1990\n[…]\nChile, Mexico and the United States expressed interest in hosting the next tournament, but the CONMEBOL Executive Committee decided to continue the execution of the rotation, giving priority of the organization to each of its member associations; each association confirms whether they will host an edition or not, having no obligation to do so. Argentina confirmed on 24 November 2008, via representatives of the Argentine Football Association, that it would host the 2011 Copa América.\n[…]\nAlthough CONMEBOL President Nicolas Leoz proposed hosting the continental tournament in Mexico (a member of the CONCACAF federation) and board members Brazil and Chile discussed the possibility of exchanging the 2015 and 2019 tournaments, it was decided and confirmed by the CBF in February 2011 that the 2015 Copa América would remain in Brazil. However, in March 2012, CBF president Ricardo Teixeira resigned from his position and the CBF agreed to swap the tournament's hosting with Chile.\n[…]\nThe current Copa América trophy was purchased in 1916 from \"Casa Escasany\", a jewelry shop in Buenos Aires, at the cost of 3,000 Swiss francs.\n[…]\n1916–1967: \"South American Championship\"\n[…]\nAmong the 8 historical winners, 6 of them won Copa América for the first time when playing at home. The only exceptions are Uruguay (1916) and Paraguay (1953) – both winning their first title on a foreign soil though Uruguay won additionally at home one year later (1917).\n[…]\nCopa América Centenario\n[…]\nThe Copa América Archive – Trivia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Copa_Am%C3%A9rica",
        "situacao": "ok",
        "texto": "A Copa América, oficialmente CONMEBOL Copa América, conhecida até 1975 como Campeonato Sul-Americano de Futebol (em espanhol: Campeonato Sudamericano de Fútbol), é a principal competição entre as seleções de futebol das nações da América do Sul organizada pela CONMEBOL.\n[…]\nEste torneio tornou-se o mais antigo do mundo, entre seleções, após os Jogos Olímpicos de Londres de 1948, já que após esta edição as Olimpíadas começaram a ser disputadas por seleções que não são consideradas as principais, e também quando em 1984 o British Home Championship foi abolido. A competição determina o campeão continental da América do Sul. Desde a edição de 1993, equipes da América do Norte e da Ásia também foram convidadas a participar.\n[…]\nOito das dez equipes nacionais da CONMEBOL venceram o torneio pelo menos uma vez em suas 48 edições, desde a inauguração do evento em 1916. Apenas Equador e Venezuela ainda não o venceram. A Argentina tem o maior número de campeonatos na história do torneio, com 16 títulos. A Argentina, que sediou a edição inaugural em 1916, abrigou o torneio mais vezes, tendo sido anfitriã em nove ocasiões. Os Estados Unidos são o único país não parte da CONMEBOL a ter sediado o evento, em 2016 e 2024.\n[…]\nDa mesma forma, para a comemoração do centenário de sua independência, a Argentina realizou um torneio entre 2 e 17 de julho de 1916, com Argentina, Chile, Uruguai e Brasil sendo os primeiros participantes do torneio. Este torneio chamado de Campeonato Sudamericano de Fútbol seria a primeira edição do que hoje é conhecido como Copa América.\n[…]\nDe 1916 até 2024, foram realizadas 48 edições da Copa  América. Nesse período, as seleções que mais pontuaram na competição, foram os seguintes:\n[…]\nCampeonato Sul-Americano de Futebol Sub-15\n[…]\nCopa América no Instagram"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Roberto Baggio",
      "descricao": "Roberto Baggio, ex-meia e atacante italiano, Bola de Ouro e melhor do mundo da FIFA em 1993."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Na Itália, Roberto Baggio era chamado de Divin Codino por causa de qual marca do seu visual?",
    "resposta": "O rabo de cavalo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Roberto_Baggio"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Roberto_Baggio",
        "situacao": "ok",
        "texto": "Roberto Baggio (Italian pronunciation: [roˈbɛrto ˈbaddʒo]; born 18 February 1967) is an Italian former professional footballer who mainly played as a second striker, or as an attacking midfielder. He is also the former president of the technical sector of the Italian Football Federation. A creative playmaker and set piece specialist known for his curling free-kicks, dribbling, and goalscoring, Bag\n[…]\nThroughout his career, Baggio has been nicknamed the Divin' Codino (\"Divine Ponytail\" in Italian, a reference to the iconic hairstyle he wore for a large part of his career as well as his playing ability and Buddhist beliefs) and Robi, or Roby, by his fans. An alter-ego of his is referenced in the Italian children's comics of \"Mickey Mouse\" and \"Duck Tales\" (Topolino) in the volume Topolino e il Giallo alla World Cup in which he is known as Roberto Paggio.\n[…]\nIn 2011, Italian sports newspaper La Gazzetta dello Sport issued a collection of DVDs entitled Io Che Sarò Roberto Baggio recounting his career. Baggio's impact on football has been celebrated with the release of an online game called Baggio's Magical Kicks, in which players try to replicate his accuracy on free-kicks and penalties. In 2015, the arcade game company Konami announced Baggio would feature in their football video game Pro Evolution Soccer 2016 as one of the new myClub Legends.\n[…]\nCoppa Italia: 1994–95\n[…]\nBaggio, Roberto (2001). Una porta nel cielo [A goal in the sky] (in Italian). Arezzo: Limina Edizioni. pp. 49–59. ISBN 88-88551-92-1.\n[…]\nNappi, Raffaele (2018). Roberto Baggio. Divin codino [Roberto Baggio. Divine ponytail] (in Italian). Rome: Giulio Perrone Editore. ISBN 978-88-6004-465-5.\n[…]\nRoberto Baggio at FBref.com\n[…]\nRoberto Baggio at BDFutbol\n[…]\nRoberto Baggio at Kicker (in German)\n[…]\nRoberto Baggio at EU-Football.info\n[…]\nRoberto Baggio at L'Équipe (in French)\n[…]\nRoberto Baggio at Global Sports Archive\n[…]\nRoberto Baggio at FIGC.it (in Italian)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Roberto_Baggio",
        "situacao": "ok",
        "texto": "Roberto Baggio Embaixador(a) da boa vontade da FAO (Caldogno, 18 de fevereiro de 1967) é um ex-futebolista italiano que atuava como meia-atacante. É considerado um dos maiores e mais populares jogadores da Itália e do mundo na década de 1990 e começo dos anos 2000.\n[…]\nApós uma primeira fase cambaleante, com o time chegando a ser derrotado pela Irlanda, o meia, já apelidado de Il Codino Divino (\"O Rabo de Cavalo Divino\", uma alusão ao seu penteado na época), liderou a Itália nas fases finais: marcou os dois gols da vitória de virada sobre a Nigéria nas oitavas-de-final, o primeiro deles a dois minutos do fim da partida\n[…]\nApesar de viver bom momento no Milan, acabou não chamado para a Eurocopa 1996 por Arrigo Sacchi, que o deixaria sem espaço no próprio Milan, posteriormente, provocando sua saída do clube milanês. Uma nova chance na Copa viria no mundial de 1998, sob o comando de Cesare Maldini, após Baggio, saído do Milan, ter feito uma ótima temporada no Bologna.\n[…]\nBaggio, desta vez o primeiro italiano a cobrar, acertou, mas, a despeito do erro do francês Bixente Lizarazu, os azzurri Demetrio Albertini e Luigi di Biagio acabariam errando também. A Copa encerrou-se ali para os italianos, mas credenciou a Baggio uma transferência para a Internazionale.\n[…]\nBaggio fez sua despedida pela Seleção Italiana em 16 de julho de 2004, em amistoso contra a Espanha ao qual ele foi convocado como tributo. Apesar disso e da idade elevada, houve quem defendesse sua convocação para a Eurocopa 2004 e até para as Olimpíadas de Atenas, mas Trapattoni e Claudio Gentile (técnico da seleção olímpica) decidiram não chamá-lo.\n[…]\nCopa da Itália: 1994–95\n[…]\nTitular da Seleção Italiana do Século: 2000\n[…]\nRobertoBaggio.org",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Charles Miller",
      "descricao": "Charles William Miller, paulistano filho de britânicos, considerado o introdutor do futebol no Brasil."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Que jogada do futebol brasileiro teria ganhado esse nome a partir de Charles, o primeiro nome de Charles Miller?",
    "resposta": "Chaleira",
    "distratores": [
      "Lambreta",
      "Bicicleta",
      "Elástico"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Charles_Miller"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Charles_Miller",
        "situacao": "ok",
        "texto": "Charles William Miller (São Paulo, 24 de novembro de 1874 – 30 de junho de 1953) foi um esportista brasileiro, considerado o \"pai\" do futebol e do rugby no Brasil.\n[…]\nNo dia 14 de abril de 1895, na Várzea do Carmo, no Brás, em São Paulo, foi realizada a primeira partida de futebol do Brasil, disputada de forma organizada, entre os funcionários da Companhia de Gás de São Paulo (São Paulo Gaz Company) e da Companhia Ferroviária de São Paulo (São Paulo Railway Company) onde o São Paulo Railway, o time de Charles Miller, venceu por 4–2.\n[…]\nAlguns historiadores contestam o pioneirismo de Charles Miller na história do futebol brasileiro, argumentando e apresentando documentação como prova de que o esporte mais popular do Brasil já era praticado no país antes da volta do famoso futebolista brasileiro da terra de seus antepassados, havendo registros da prática recreativa e não organizada (popularmente conhecida como pelada) do futebol no país desde meados da década de 1870 por parte de marinheiros de navios mercantes ou de guerra, britânicos, franceses e holandeses, como o realizado em 1878 diante do Palácio Isabel (hoje Guanabara) na cidade do Rio de Janeiro.\n[…]\nSegundo essa crítica, o mérito de Miller foi ter chegado ao Brasil com o aparato necessário à pratica do esporte de forma organizada e ter cativado a prática do futebol dentro dos clubes, considerando-se que os ingleses de então eram mais afeitos ao críquete, assim como não foi o primeiro praticante do futebol, mas sim o primeiro dirigente.\n[…]\nJohn Robert Mills - 2005 - Charles Miller - O pai do Futebol Brasileiro -  ISBN 85-87537-99-7"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Charles Miller",
      "descricao": "Charles William Miller, paulistano filho de britânicos, considerado o introdutor do futebol no Brasil."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Antes de trazer bolas e regras para o Brasil, Charles Miller estudou e aprendeu futebol em qual cidade inglesa?",
    "resposta": "Southampton",
    "distratores": [
      "Liverpool",
      "Manchester",
      "Sheffield"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Charles_William_Miller",
      "https://pt.wikipedia.org/wiki/Charles_Miller"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Charles_William_Miller",
        "situacao": "ok",
        "texto": "Charles William Miller (24 November 1874 – 30 June 1953. Portuguese pronunciation: [ˈʃaʁliz ˈwiʎɐ̃ ˈmileʁ]) was a Brazilian sportsman, who is considered to be the father of football in Brazil. Miller founded São Paulo Athletic Club (SPAC), one of the oldest sports clubs in Brazil, and founded the Liga Paulista de Foot-Ball, current Campeonato Paulista, Brazil's first football league. He is also co\n[…]\nIn 1884 he was sent to the Banister Court public school in Southampton, England where he learned to play football and cricket. Whilst at school, he played for and against both the Corinthians and St. Mary's (now Southampton FC). He was recorded in the 1891 United Kingdom census whilst a boarder at Millbrook School.\n[…]\nBy 1906, Miller was playing in goal and as such participated in SPAC's heaviest defeat, 9–1 to Sport Club Internacional of São Paulo (not to be confused with Sport Club Internacional). After the result, SPAC resigned from the league as did Miller from its directorate. SPAC eventually came back in 1907, even winning the 1911 title, and continued competing in the Campeonato Paulista until 1912, when it withdrew from official competitions.\n[…]\nIt was Miller who suggested the name to the first president of Sport Club Corinthians Paulista.\n[…]\nMiller worked at the São Paulo Railway Company, becoming the Royal Mail's agent and the acting British vice-consul in 1904. He invested in the construction of garden suburbs in São Paulo, designed by Barry Parker and Raymond Unwin, profiting considerably.\n[…]\nThe square adjacent to the main entrance of Paulo Machado de Carvalho Stadium (Pacaembu Stadium), the historical São Paulo City owned stadium, is named after him (Praça Charles Miller).\n[…]\nLacey, Josh (2007) God Is Brazilian: Charles Miller, the Man Who Brought Football To Brazil. NPI Media Group. ISBN 0-7524-3414-4\n[…]\nCharles Miller: Patron Saint of Brazil (Southampton FC)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Charles_Miller",
        "situacao": "ok",
        "texto": "Charles William Miller (São Paulo, 24 de novembro de 1874 – 30 de junho de 1953) foi um esportista brasileiro, considerado o \"pai\" do futebol e do rugby no Brasil.\n[…]\nFilho de um pai escocês chamado John d'Silva Miller, que veio ao Brasil para trabalhar na São Paulo Railway Company, e uma mãe brasileira de ascendência inglesa chamada Carlota Antunes Fox, nasceu perto da estação ferroviária da mesma companhia em São Paulo. Aos dez anos, foi estudar na Inglaterra. Desembarcou em Southampton, no sul das ilhas britânicas, e aprendeu a jogar futebol na Bannister Court School.\n[…]\nEle retornou ao Brasil em 18 de fevereiro de 1894 para trabalhar na São Paulo Railway (posteriormente Estrada de Ferro Santos-Jundiaí (EFSJ), como seu pai, tornando-se também correspondente da Coroa Britânica e vice-cônsul inglês em 1904. Trouxe na bagagem duas bolas usadas, um par de chuteiras, um livro com as regras do futebol, uma bomba de encher bolas e uniformes usados.\n[…]\nAlguns historiadores contestam o pioneirismo de Charles Miller na história do futebol brasileiro, argumentando e apresentando documentação como prova de que o esporte mais popular do Brasil já era praticado no país antes da volta do famoso futebolista brasileiro da terra de seus antepassados, havendo registros da prática recreativa e não organizada (popularmente conhecida como pelada) do futebol no país desde meados da década de 1870 por parte de marinheiros de navios mercantes ou de guerra, britânicos, franceses e holandeses, como o realizado em 1878 diante do Palácio Isabel (hoje Guanabara) na cidade do Rio de Janeiro.\n[…]\nSantista, neto do 'pai do futebol brasileiro' revela: 'meu avô era Timão'"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Argentina x Inglaterra na Copa de 1986",
      "descricao": "Partida da Copa do Mundo de 1986 em que Maradona marcou o gol de mão e o chamado Gol do Século."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Após o gol de mão contra a Inglaterra, em 1986, Maradona disse que o lance foi feito um pouco com sua cabeça e um pouco com a mão de quem?",
    "resposta": "De Deus",
    "fonte": [
      "https://en.wikipedia.org/wiki/Argentina_v_England_(1986_FIFA_World_Cup)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Argentina_v_England_(1986_FIFA_World_Cup)",
        "situacao": "ok",
        "texto": "The Argentina 2–1 England quarter-final match of the 1986 FIFA World Cup was a football match played on 22 June 1986 between Argentina and England at Estadio Azteca in Mexico City. The match was held four years after the end of the Falklands War between Argentina and the United Kingdom, and was a key part of the already intense Argentina–England football rivalry.\n[…]\nIt was also a match which included two of the most well-known goals in football history, both scored by Argentina captain Diego Maradona.\n[…]\nIn 2002, the goal was voted 'Goal of the Century' as part of the buildup to the 2002 FIFA World Cup tournament on the FIFA website. It beat a goal scored by England's Michael Owen against Argentina in the 1998 FIFA World Cup, which came second, whilst another 1986 FIFA World Cup goal by Maradona, from the semi-final match against Belgium, came fourth. In Spanish-speaking countries, this goal is often associated with the passionate live commentary by Uruguayan journalist Víctor Hugo Morales.\n[…]\nHodge swapped shirts with Maradona after the game; Hodge lent out the Argentine's jersey to the National Football Museum in the 2000s. The game added hugely to the rivalry between the two teams. In Argentina, the game was seen as revenge for the Falklands War and for what they still see as the unfair game in the 1966 World Cup. The former Argentine international Roberto Perfumo stated that \"In 1986, winning that game against England was enough. Winning the World Cup was secondary for us.\n[…]\nOn 17 August 2015, Maradona visited Ali Bin Nasser, the referee of the 1986 World Cup quarter-final, at his home in Tunisia, and paid tribute to him by giving him an Argentine jersey bearing his signature, and referred to him as \"my eternal friend\".\n[…]\nArgentina at the FIFA World Cup\n[…]\nMaradona's Goal in AR on The Straits Times. 17 November 2022"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Argentina_2%E2%80%931_Inglaterra_%281986%29",
        "situacao": "ok",
        "texto": "Argentina 2 x 1 Inglaterra foi uma histórica partida de futebol válida pelas quartas de finais da Copa do Mundo do México de 1986.\n[…]\nAssim, a Argentina enfrentaria a Inglaterra ao meio-dia na Cidade do México, com aquela camisa de algodão. No pensamento do técnico, certamente a camisa ficaria mais pesada, podendo atrapalhar os jogadores. Segundo Bilardo, seria quase uma \"armadura\".\n[…]\nLogo aos 6 minutos, Maradona marcou, de mão (naquele que ficou conhecido como \"La Mano de Dios\"), o primeiro gol argentino. Após a bola entrar no gol, Maradona saiu comemorando timidamente e de olho no juiz. Ele percebeu que ninguém de seu time veio ao seu encontro e chamou os colegas: “Vamos, me abracem, ou o árbitro não vai validar o gol!”\n[…]\n4 minutos depois, outro lance histórico. Após arrancar do meio-de-campo e passar por 6 adversários, Maradona fez 2 x 0 para a Argentina, com o chamado Gol do Século.\n[…]\nCom 2 a 0 no placar, a Argentina passou a jogar com mais precaução na defesa e a Inglaterra dominou as ações ofensivas. Aos 31´, o técnico Bobby Robson colocou a Inglaterra totalmente no ataque ao trocar Steven pelo jovem e habilidoso Barnes. O ponta rapidamente mostrou a que veio e, aos 36´, fez uma boa jogada pela esquerda e cruzou na medida para Lineker diminuir a desvantagem e anotar seu sexto gol na Copa (2 x 1 Argentina, faltando apenas 9 minutos).\n[…]\nLogo na saída de bola, a Argentina ainda meteria uma bola na trave, após Maradona deixar Carlos Tapia na cara do gol. Mas o jogo já estava decididido. Com \"a mão de Deus, e o pé do capeta\", Maradona decretou: 2 x 1 para a Argentina, e fim de papo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Final da Copa do Mundo de 1998",
      "descricao": "Partida final da Copa do Mundo FIFA de 1998, em Saint-Denis, em que a França venceu o Brasil por 3 a 0."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Horas antes da final da Copa de 1998, contra a França, que problema de saúde Ronaldo sofreu na concentração da seleção?",
    "resposta": "Uma convulsão",
    "distratores": [
      "Intoxicação alimentar",
      "Torção no tornozelo",
      "Febre alta"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/1998_FIFA_World_Cup_final"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/1998_FIFA_World_Cup_final",
        "situacao": "ok",
        "texto": "The final match of the 1998 FIFA World Cup, the 16th edition of the quadrennial football competition organised by FIFA for the men's national teams of its member associations, was played at the Stade de France in Saint-Denis, France, just outside Paris, on 12 July 1998, and was contested by defending champions Brazil and hosts France.\n[…]\nAt 8:18 p.m., however, Brazil submitted a modified teamsheet with Ronaldo's name reinstated. It was disclosed several years later that Ronaldo had suffered a convulsive fit on the afternoon of the final, had lost consciousness and spent three hours in hospital. Following preliminary tests that yielded no abnormalities, he was discharged and decided shortly before kickoff that he still intended to play.\n[…]\nIn 2018, France 2 aired a documentary in honor of the 20th anniversary of the final titled 12 juillet 1998, le jour parfait (12 July 1998, The Perfect Day) with Jean-Pierre Devillers as director and Valérie Amarou as writer. Among the celebrities and fans who shared their experiences in the documentary were athletes who cited the victory as a catalyst, such as footballer Laura Georges, épeé fencer Laura Flessel-Colovic, and judoka Teddy Riner.\n[…]\nBrazil took the Copa América title in 1999 and then won the next World Cup in Japan and South Korea in 2002 for their record fifth World Cup win as Ronaldo scored both goals in the final against Germany in Yokohama. France were eliminated in the group stage at the 2002 tournament, becoming the first World Cup holders to be eliminated without reaching the knockout stage since Brazil in 1966.\n[…]\nBrazil v France – 1998 FIFA World Cup Final – Full Match (YouTube video). FIFA. 20 April 2018. Retrieved 31 October 2021."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Final_da_Copa_do_Mundo_FIFA_de_1998",
        "situacao": "ok",
        "texto": "A final da Copa do Mundo da FIFA de 1998 foi a partida final da Copa do Mundo da FIFA de 1998, a décima sexta edição da competição quadrienal de futebol organizada pela FIFA para as seleções masculinas de suas associações. Ela foi realizada no Stade de France em Saint-Denis, França, em 12 de julho de 1998, e foi disputada por Brasil e França.\n[…]\nNo que mais tarde foi descrito pelos escritores da BBC Sport como o \"grande mistério da final da Copa do Mundo\", Ronaldo foi omitido da ficha oficial da equipe que Zagallo apresentou à FIFA às 7:48 hora local (5:48 PM UTC), a 72 minutos do apito inicial, com Edmundo nomeado para o seu lugar.\n[…]\nVários anos depois, foi revelado que Ronaldo sofreu uma convulsão na tarde da final, perdeu a consciência e passou três horas no hospital, mas decidiu pouco antes do início da partida que ainda queria jogar (ver mais detalhes na seção \"Pós-jogo\" mais abaixo). Com exceção de Cafu, que havia sido suspenso para a semifinal do Brasil e voltou no lugar de Zé Carlos, o Brasil, portanto, convocou um time inalterado com Edmundo no banco de reservas.\n[…]\nDe acordo com a revista, Ronaldo sofreu uma convulsão horas antes do jogo. Os médicos da seleção na época, Lídio Toledo e Joaquim da Mata, inicialmente vetaram a escalação do atacante para a final. Entretanto, após resultados de exames realizados em uma clínica em Paris descartarem qualquer anormalidade e após insistência do próprio jogador, os doutores forçadamente liberaram sua participação na final.\n[…]\nEm sua defesa, Toledo alegou que não poderia deixar um jogador da magnitude de Ronaldo fora de uma final de Copa do Mundo, dizendo: \"Imagine se eu o impedisse de jogar e o Brasil perdesse, eu teria que ir morar no Polo Norte\". Em 2022, em entrevista ao programa Fantástico, da TV Globo, Ronaldo atribuiu a convulsão ao estresse devido à partida.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Andrés Escobar",
      "descricao": "Zagueiro colombiano (1967–1994), assassinado em Medellín após a Copa do Mundo de 1994."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1994, o zagueiro colombiano Andrés Escobar foi assassinado em Medellín, dias depois de cometer qual lance na Copa dos Estados Unidos?",
    "resposta": "Um gol contra",
    "fonte": [
      "https://en.wikipedia.org/wiki/Andr%C3%A9s_Escobar"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Andr%C3%A9s_Escobar",
        "situacao": "ok",
        "texto": "Andrés Escobar Saldarriaga (Spanish pronunciation: [anˈdɾes eskoˈβaɾ saldaˈrjaɣa]; 13 March 1967 – 2 July 1994) was a Colombian professional footballer who played as a centre-back. He played for Atlético Nacional, BSC Young Boys, and the Colombia national team. Nicknamed The Gentleman, he was known for his clean style of play and calmness on the pitch.\n[…]\nPrior to the 1994 World Cup, Escobar was reported to have been offered a contract by AC Milan.\n[…]\nAfter the tournament, Escobar decided to return to Colombia instead of visiting relatives in Las Vegas, Nevada. On the evening of July 1, 1994, five days after the elimination of Colombia from the World Cup, Escobar called his friends, and they went to a bar in the El Poblado neighbourhood in Medellín. Then they went to a liquor store. Shortly afterwards, they arrived at the El Indio nightclub. His friends split up.\n[…]\nAfter Escobar's death, his family founded the Andrés Escobar Project to help disadvantaged children learn to play football. Prior to the 2001 Copa América hosted by Colombia, the city of Medellín unveiled a statue of Escobar. In 2001, Medellín unveiled another statue of Escobar. It was created by sculptor Alejandro Hernandez, commissioned by the Alcaldia de Medellín.\n[…]\nThe statue is located at a large, community sports complex named in Escobar's honor: Unidad Deportiva de Belén Andrés Escobar Saldarriaga.\n[…]\nIn 2010, a documentary film titled The Two Escobars was released as a part of ESPN's 30 for 30 documentary series. It was directed by Jeff and Michael Zimbalist, which looked back at Andrés Escobar's death, Colombia's 1994 World Cup run and the relationship between association football and the country's criminal gangs, notably the Medellín Cartel run by Pablo Escobar (unrelated to Andrés).\n[…]\nIn 2022, Netflix released a mini-series titled Goles en contra based on his life."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Andr%C3%A9s_Escobar",
        "situacao": "ok",
        "texto": "Andrés Escobar Saldarriaga (Medellín, 13 de março de 1967 – Medellín, 2 de julho de 1994) foi um futebolista colombiano que atuava como zagueiro.\n[…]\nDisputou as Copas do Mundo de 1990 e 1994 e se tornou conhecido por ter feito um gol contra que ajudou a desclassificar a Colômbia em 1994, provavelmente o motivo pelo qual foi assassinado no mês seguinte em sua cidade natal.\n[…]\nCopa Interamericana: 1989\n[…]\nCampeonato Colombiano: 1991\n[…]\nDurante esta partida no estádio Rose Bowl, em Pasadena, Andrés Escobar tenta cortar um cruzamento do norte-americano John Harkes, mas manda a bola para as próprias redes com o goleiro Óscar Córdoba caindo pelo lado oposto de onde a bola entrou e marcando o único gol-contra da copa.\n[…]\nNa madrugada do dia 2 de julho de 1994, Andrés Escobar foi assassinado em frente a uma discoteca na cidade de Medellín. O defensor foi considerado o grande responsável pela derrota de 2 a 1 da Colômbia para os Estados Unidos na Copa do Mundo daquele ano. O resultado contribuiu para a eliminação da seleção no torneio ainda na primeira fase. Havia acabado de retornar ao seu país e, depois da eliminação de sua seleção na Copa dos Estados Unidos, Escobar pediu férias.\n[…]\nDez dias após o seu regresso, enquanto estava em seu carro no estacionamento de uma discoteca na periferia de Medellín (o estadero \"El Indio\"), Escobar foi repreendido por Humberto Muñoz Castro acompanhado por três homens. Ele e seus comparsas começaram a discutir com Escobar por causa do gol contra. Dois dos homens empunharam as suas armas de fogo. Por ser insultado, Escobar exigia respeito, mas Muñoz sacou um revólver e disparou no jogador.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Seleção Uruguaia de Futebol",
      "descricao": "Seleção nacional de futebol do Uruguai, campeã mundial em 1930 e 1950."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Campeão em 1930, o Uruguai não disputou a Copa seguinte, na Itália, em 1934. Por que a seleção uruguaia ficou de fora?",
    "resposta": "Retaliação à ausência europeia",
    "distratores": [
      "Crise financeira do país",
      "Eliminação nas eliminatórias",
      "Suspensão imposta pela FIFA"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/1934_FIFA_World_Cup",
      "https://en.wikipedia.org/wiki/Uruguay_national_football_team"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/1934_FIFA_World_Cup",
        "situacao": "ok",
        "texto": "The 1934 FIFA World Cup was the 2nd edition of the FIFA World Cup, the quadrennial international football championship for senior men's national teams. It took place in Italy from 27 May to 10 June 1934.\n[…]\nThe 1934 World Cup was the first in which teams had to qualify to take part. Thirty-two nations entered the competition; sixteen teams qualified for the final tournament. Reigning champions Uruguay boycotted the tournament as only four European teams had accepted their invitation to the 1930 tournament. Italy beat Czechoslovakia 2–1 to become the second World Cup champions and the first European winners.\n[…]\nFor the first time, teams had to play qualifying matches to enter the competition: 32 countries applied to enter the finals tournament, of which 16 qualified. Even so, there were several notable absentees. Reigning World Cup holders Uruguay declined to participate, in protest at the refusal of several European countries to travel to South America for the previous World Cup, which Uruguay had hosted in 1930.\n[…]\nTen of these teams made their first World Cup appearance. This included 9 of the 12 European teams (Italy, Germany, Spain, the Netherlands, Hungary, Czechoslovakia, Sweden, Austria, and Switzerland) as well as Egypt. Egypt was the first team from Africa in the finals and did not qualify again until the next time the competition was held in Italy, in 1990.\n[…]\nFor the only time in World Cup history, the last eight consisted entirely of European teams – Austria, Czechoslovakia, Germany, Hungary, Italy, Spain, Sweden, and Switzerland. All four non-European teams who made the journey to Italy were eliminated after one match.\n[…]\n1934 FIFA World Cup at RSSSF.com"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Uruguay_national_football_team",
        "situacao": "ok",
        "texto": "The Uruguay national football team (Spanish: Selección de fútbol de Uruguay), nicknamed la Celeste (\"the Sky Blue\") and los Charrúas (\"the Charrúas\"), have represented Uruguay in international men's football since their first international match in 1902 and is administered by the Asociación Uruguaya de Fútbol (English: Uruguayan Football Association), the governing body of football in Uruguay, whi\n[…]\nThe expectation for this final was so high that reportedly over 500,000 tickets were demanded across Europe.\n[…]\nThe Uruguayan national team dazzled Europe with its Olympic performances, earning admiration and respect worldwide. These triumphs elevated South American football to global prominence at a time when the continent was still largely ignored in international sport. The Olympic tournaments of 1924 and 1928 were the only editions officially recognized by FIFA as world championships.\n[…]\nUruguay proposed hosting the first FIFA World Cup in 1930, and FIFA granted the country the right to organize it in commemoration of the centenary of the Jura de la Constitución (Uruguayan Constitution), in addition to its world titles at the Olympics. In Europe, this decision was met with disapproval, with arguments that the tournament should be held there, particularly in England, the birthplace of football and site of its subsequent development.\n[…]\nHowever, although the Uruguayan government offered to cover all expenses, many European nations still declined to participate. FIFA ignored these complaints, reasoning that the continent was still reeling from World War I, while Uruguay enjoyed peace and economic stability. Thus, the first World Cup was held in Uruguay.\n[…]\nCopa Premier Honor Uruguayo (8): 1911, 1912, 1913, 1914, 1918, 1919, 1920, 1922\n[…]\nCopa Newton (11): 1912, 1913, 1915, 1917, 1919, 1920, 1922, 1923, 1929, 1930, 1968\n[…]\nUruguay national futsal team\n[…]\nUruguay FIFA profile\n[…]\nUruguay CONMEBOL profile"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Copa_do_Mundo_FIFA_de_1934",
        "situacao": "ok",
        "texto": "A Copa do Mundo FIFA de 1934 foi a segunda Copa do Mundo FIFA, o campeonato mundial entre seleções masculinas de futebol. Teve lugar na Itália, de 27 de maio a 10 de junho.\n[…]\nEsta Copa do Mundo foi a primeira à qual as equipes tiveram de se classificar para participar. 32 nações entraram para a competição e, depois das eliminatórias, 16 seleções participaram do torneio definitivo. O então campeão Uruguai não quis participar em represália as seleções europeias que quatro anos antes não quiseram ir a sua Copa em 1930. A Itália se tornou a segunda campeã mundial, derrotando a Tchecoslováquia por 2 a 1 na final.\n[…]\n34 países quiseram entrar no torneio, então partidas eliminatórias foram requeridas para enxugar para 16 equipes. Ainda assim, houve várias ausências notáveis. O então campeão Uruguai optou por não participar, em protesto pela recusa de várias seleções europeias de irem à América do Sul para a Copa anterior, a qual o Uruguai sediou. Como resultado, a Copa de 1934 é a única na qual o campeão anterior não participou.\n[…]\nA maioria das 16 equipes estavam estreando em uma Copa. Incluem-se nove das doze europeias (Itália, Alemanha, Espanha, Holanda, Hungria, Tchecoslováquia, Suécia, Áustria e Suíça) e o Egito. O Egito foi a primeira seleção africana a participar de um Copa do Mundo, e não voltaria a se classificar até a próxima Copa na Itália, em 1990.\n[…]\nPela primeira vez em uma Copa do Mundo, as oito melhores seleções foram europeias: Áustria, Alemanha, Tchecoslováquia, Espanha, Hungria, Itália, Suécia e Suíça. Todas as quatro equipes não-europeias foram eliminadas na primeira rodada.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Brasil 1 x 7 Alemanha",
      "descricao": "Semifinal da Copa do Mundo de 2014, disputada no Mineirão, em Belo Horizonte, em 8 de julho de 2014."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "O Brasil enfrentou a Alemanha na semifinal de 2014 sem Neymar. Por que ele estava fora do jogo?",
    "resposta": "Fraturou uma vértebra",
    "fonte": [
      "https://en.wikipedia.org/wiki/Brazil_v_Germany_(2014_FIFA_World_Cup)",
      "https://en.wikipedia.org/wiki/Neymar"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Brazil_v_Germany_(2014_FIFA_World_Cup)",
        "situacao": "ok",
        "texto": "The Brazil versus Germany football match (also known by its score as 7–1, or Mineiraço in Brazil) was the first of two semi-final matches of the 2014 FIFA World Cup that took place on 8 July 2014 at the Mineirão stadium in Belo Horizonte, Brazil.\n[…]\nBrazil defender and captain Thiago Silva was suspended for the match due to accumulation of yellow cards, despite an appeal against the suspension by the Brazilian Football Confederation. Forward Neymar was also unavailable for the match, having been sidelined for the rest of the tournament after suffering a fractured vertebra in the quarter-final match against Colombia.\n[…]\nStand-in captain David Luiz and goalkeeper Júlio César both offered apologies to the people of Brazil. Fred, who was booed by Brazilian fans during the match, said it was the worst defeat in his and his teammates' careers. He later announced his retirement from international football following the tournament. Recovering from his injury, Neymar expressed his support to his teammates and, despite the 7–1 score, said he was proud to be a part of the team.\n[…]\nBrazilian newspapers greeted the result with headlines such as \"The Biggest Shame in History\" (Lance!), a \"Historical humiliation\" (Folha de S.Paulo) and \"Brazil is slain\" (O Globo). In Germany, Bild proclaimed, 7:1 Wahnsinn! DFB-Team mit Blitz-K.o. gegen Brasilien (7–1 Madness! DFB team score flash knockout against Brazil), with a front-page headline of Ohne Worte (Without Words). In France, L'Équipe's headline simply said, Le Désastre (The Disaster).\n[…]\nIn Brazil, the result, \"7–1\" (Portuguese: sete a um), has become a metaphor for a devastating and crushing defeat, while \"Goal for Germany\" (Portuguese: gol da Alemanha) is used as an exclamation after a mishap."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Neymar",
        "situacao": "ok",
        "texto": "Neymar da Silva Santos Júnior (born 5 February 1992), is a Brazilian professional footballer who plays as an attacking midfielder and a forward for the Campeonato Brasileiro Série A club Santos, which he also captains. He is known for his dribbling, technical ability, agility, passing, and finishing. Often regarded as one of the greatest players of all time, Neymar is both the all-time top goalsco\n[…]\nNeymar spent more than a month sidelined before returning in 2025 Copa do Brasil match against CRB in Maceió on 22 May; coming on as a second-half substitute, he converted his penalty in the shoot-out, but his side was knocked out. Neymar returned to the starting line-up on 1 June in a match against Botafogo.\n[…]\nOn 4 August, Neymar assisted the only goal as Santos defeated Remo 1–0 in the 2026 Copa do Brasil to progress to the quarter-finals, however, after the match tension was ignited between the two teams, with Neymar being captured on video taunting the staff of Remo by shouting \"eliminated, eliminated\". On 13 August, Neymar was decisive in the Copa Sudamericana match against Macará, assisting both goals in a 2–1 comeback victory.\n[…]\nIn the quarter-final win over Colombia, while challenging for the ball, Neymar was kneed in the back by Juan Camilo Zúñiga and had to be removed from the pitch on a stretcher. A hospital scan revealed that Neymar had suffered a fractured vertebra in his spine and he missed the rest of the World Cup. Earlier in the match, Neymar assisted Thiago Silva's opening goal with a cross from a corner kick.\n[…]\nIt was the second Neymar assist from a corner in the tournament, after creating David Luiz's goal in the previous round against Chile. Without their injured talisman Neymar (and the suspended captain Thiago Silva), Brazil would ultimately lose in the semi-final in a stunning 7–1 defeat to eventual champion Germany on 8 July.\n[…]\nNeymar at Olympedia\n[…]\nNeymar at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Brasil_1%E2%80%937_Alemanha_%282014%29",
        "situacao": "ok",
        "texto": "A partida entre Brasil e Alemanha nas semifinais da Copa do Mundo FIFA de 2014, por vezes referida como Mineiraço, foi disputada em 8 de julho de 2014 no Estádio Mineirão na cidade brasileira de Belo Horizonte, em Minas Gerais.\n[…]\nAs duas seleções chegaram às semifinais com campanhas invictas na competição e esperava-se uma partida equilibrada, já que ambas as equipes eram forças tradicionais da Copa do Mundo FIFA, dividindo oito torneios conquistados e tendo se enfrentado anteriormente na final da edição de 2002, ocasião em que o Brasil venceu. A partida, no entanto, terminou com uma vitória avassaladora de 7–1 para a Alemanha, que marcou quatro gols em um intervalo de seis minutos no primeiro tempo.\n[…]\nO atacante Neymar também não estava disponível para a partida, após ter sofrido uma entrada do lateral colombiano Zúñiga nas quartas-de-final, acertando com o joelho direito na parte inferior das costas do atleta, ocasionando uma fratura na terceira vértebra lombar do atacante brasileiro, e o obrigando a estar ausente do restante da competição. Dante e Bernard foram escolhidos para substituírem Thiago Silva e Neymar, respectivamente, com Luiz Gustavo substituindo Paulinho no meio-campo defensivo.\n[…]\nEm agosto de 2016, Brasil e Alemanha voltaram a se enfrentar, desta vez com as seleções olímpicas, na final do futebol masculino das Olimpíadas de 2016, realizadas no Rio de Janeiro. Foi a primeira vez que os dois países se enfrentaram em um grande torneio de futebol após o 7-1 de 2014. Parte da torcida brasileira viu essa final como uma oportunidade de revanche e redenção.\n[…]\nAlemanha-Brasil em futebol\n[…]\nBrasil na Copa do Mundo FIFA de 2014\n[…]\nAlemanha na Copa do Mundo FIFA de 2014",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Luís Figo",
      "descricao": "Ex-ponta português, Bola de Ouro de 2000, que jogou no Barcelona e no Real Madrid."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 2002, no Camp Nou, torcedores do Barcelona atiraram uma cabeça de porco em Luís Figo. O que motivou tanta raiva?",
    "resposta": "Ele trocou o Barcelona pelo Real Madrid",
    "fonte": [
      "https://en.wikipedia.org/wiki/Lu%C3%ADs_Figo"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lu%C3%ADs_Figo",
        "situacao": "ok",
        "texto": "Luís Filipe Madeira Caeiro Figo  (Portuguese pronunciation: [luˈiʃ ˈfiɣu]; born 4 November 1972) is a Portuguese former professional footballer who played as a winger for Sporting CP, Barcelona, Real Madrid, and Inter Milan. He won 127 caps for the Portugal national team, a one-time record. Figo is widely regarded as one of the best players of his generation and one of the greatest wingers in the \n[…]\nWhen Figo returned to Barcelona for the first time in a Real Madrid shirt on 21 October 2000, the noise at the Camp Nou was deafening. There were banners hung around the stadium with words like \"Traitor\", \"Judas\", \"Scum\", and \"Mercenary\". Figo was mercilessly taunted throughout, and when he came out of the tunnel and ran onto the field the jeers of almost 98,000 Barcelona fans escalated, with a visibly shocked Figo putting his fingers to his ears.\n[…]\nBarcelona were victorious, winning 2–0, and Real Madrid President Florentino Pérez stated after the match, \"The atmosphere got to us all.\" Madrid defender Iván Campo commented, \"That night when Figo first went back was incredible. I’ve never heard anything like it. Luís didn't deserve that. He'd given his all for Barcelona. It was built up before: 'a traitor’s coming,' the media said. No, Luís Figo is coming, one of the greats for you. That night hurt him, you could see.\n[…]\nFigo's second game back at the Camp Nou, on 23 November 2002, produced one of the defining images of the Barcelona–Real Madrid rivalry. There was no sign of the hatred or the hurt subsiding, and every time he came within range of the Barcelona fans, beer cans, lighters, bottles and golf balls flew.\n[…]\nIn August 2022, Netflix launched El Caso Figo (The Figo Affair), a documentary about Figo's transfer from Barcelona to Real Madrid.\n[…]\nBarcelona\n[…]\nReal Madrid\n[…]\nUEFA Super Cup: 2002\n[…]\nLuís Figo at Real Madrid\n[…]\nA pig’s head for Luís Figo – detailed account of the 2002 El Clásico incident"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lu%C3%ADs_Figo",
        "situacao": "ok",
        "texto": "Luís Filipe Madeira Caeiro Figo OIH (Lisboa, 4 de novembro de 1972) é um ex-futebolista português que atuava como médio ou extremo. Considerado um dos maiores jogadores  de todos os tempos, Figo venceu a Bola de Ouro em 2000, o prêmio de Melhor Jogador do Mundo pela FIFA em 2001 e está incluído no FIFA 100.\n[…]\nFigo é um dos poucos futebolistas a ter jogado pelos dois rivais espanhóis, Barcelona e Real Madrid. Ganhou diversos títulos individuais e coletivos, como uma Taça de Portugal, quatro Campeonatos Espanhóis, uma Liga dos Campeões da UEFA, uma Taça das Taças, uma Supercopa Europeia, uma Copa Intercontinental, quatro Campeonatos Italianos, uma Copa da Itália e três Supercopas Italianas.\n[…]\nNo dia 1 de julho de 2000 transferiu-se com muita controvérsia para o Real Madrid, principal rival do Barcelona, por 60 milhões de euros, um valor então recordista. Muitos fãs do Barcelona sentiram-se traídos pela sua transferência, mesmo depois de Figo ser o seu favorito ao longo dos anos. Em 2020 justificou a sua transferência com o facto de não se sentir reconhecido no clube catalão.\n[…]\nTrês temporadas depois, numa partida frente ao Barcelona, em 2003, Figo obteve uma recepção muito hostil do público, sendo-lhe atirados objetos (como celulares, bolas de golfe e até cabeças assadas de um galo e de um porco) quando este efetuava pontapés-de-canto e lançamentos. Como resultado, a FIFA acabaria por impor uma multa ao Barcelona.\n[…]\nFigo deixou o Real Madrid para se juntar a Internazionale em 2005, aonde viria a usar a camisa 7, depois do seu contrato com os Merengues ter expirado. No verão de 2008, o seu compatriota José Mourinho, foi anunciado como novo treinador da Inter, fazendo com que Figo terminasse a sua carreira ao lado de colegas portugueses.\n[…]\nBarcelona\n[…]\nReal Madrid\n[…]\nBarcelona\n[…]\nReal Madrid",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Seleção Neerlandesa de Futebol",
      "descricao": "Seleção nacional de futebol dos Países Baixos, vice-campeã mundial em 1974, 1978 e 2010."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "A seleção da Holanda joga de laranja, uma cor que nem aparece na bandeira do país. Essa cor é uma homenagem a quê?",
    "resposta": "A família real, Casa de Orange",
    "fonte": [
      "https://en.wikipedia.org/wiki/Netherlands_national_football_team"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Netherlands_national_football_team",
        "situacao": "ok",
        "texto": "The Netherlands national football team has represented the Netherlands in international men's football matches since 1905. The men's national team is controlled by the Royal Dutch Football Association (KNVB), the governing body for football in the Netherlands, which is a part of UEFA, under the jurisdiction of FIFA. Most of the Netherlands home matches are played at the Johan Cruyff Arena, De Kuip\n[…]\nThe team is colloquially referred to as Het Nederlands Elftal (The Dutch Eleven) or Oranje, after the House of Orange-Nassau and their distinctive orange jerseys. Their fan club is known as Het Oranje Legioen (The Orange Legion).\n[…]\nThe Netherlands national football team famously plays in bright orange shirts. Orange is the historic national colour of the Netherlands, originating from one of the many titles of the ruling head of state, Prince of Orange. The current Netherlands away shirt is blue. The lion on the crest is the Netherlands' national and royal animal and has been on the crest since 1907 when they won 3–1 over Belgium. It is different from the women's team logo, which sports a lioness.\n[…]\nSince the 2004 UEFA European championship, the Dutch Orange Bus has been a part of the fan experience, leading fan marches and tailgate parties."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sele%C3%A7%C3%A3o_Neerlandesa_de_Futebol",
        "situacao": "ok",
        "texto": "A Seleção Neerlandesa de Futebol (em neerlandês: Nederlands voetbalelftal), representa os Países Baixos nas competições de futebol da UEFA e FIFA. A equipe é coloquialmente conhecida como Het Nederlands Elftal  (Os onze holandeses) ou Oranje, em homenagem à Casa de Orange-Nassau e suas distintas camisas laranja. Informalmente a seleção, assim como o próprio país, era chamada de Holanda. O fã-clube\n[…]\nOs Países Baixos jogaram sua primeira partida internacional, em Antuérpia, contra a Bélgica, em 30 de abril de 1905. Em 1908, se filiou à FIFA. Conhecida por seus torcedores como Oranje, em função de seu uniforme laranja, devido às cores da monarquia do país, que é a Casa de Orange-Nassau.\n[…]\nApesar de não ter sido a grande campeã, encantou o mundo com uma maneira dinâmica de jogar futebol, onde os jogadores não guardavam posições e faziam a bola passar de pé em pé até chegar ao gol adversário. Esta tática, considerada revolucionária, foi denominada de \"carrossel\" e acabou apelidando carinhosamente aquela seleção de Laranja Mecânica, em homenagem ao clássico filme de Stanley Kubrick e sucesso cinematográfico da época.\n[…]\nCom o coronavírus adiando a Euro 2020 para 2021, a Holanda jogou suas partidas do grupo em casa na Johan Cruijff Arena em Amsterdã, derrotando a Ucrânia por 3–2, a Áustria por 2–0 e a Macedônia do Norte por 3–0. No entanto, o torneio terminou em decepção para a Holanda mais uma vez, já que foram derrotados por 2 a 0 pela República Tcheca no empate das oitavas de final em Budapeste. Dois dias depois, De Boer deixou o cargo.\n[…]\nLista de jogadores da Seleção Neerlandesa de Futebol por data de estreia\n[…]\nLista de jogadores da Seleção Neerlandesa de Futebol por ordem alfabética\n[…]\n«Site oficial da Real Associação Neerlandesa de Futebol» (em inglês e neerlandês)\n[…]\n«História da Seleção Neerlandesa de Futebol» (em inglês e neerlandês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Diego Maradona",
      "descricao": "Craque argentino (1960-2020), campeão mundial em 1986 e ídolo do Napoli, conhecido como El Pibe de Oro."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Na Copa de 1994, nos Estados Unidos, por que Diego Maradona foi afastado do torneio pela FIFA?",
    "resposta": "Exame antidoping positivo",
    "distratores": [
      "Agressão a um árbitro",
      "Lesão no joelho",
      "Briga com jornalistas"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Diego_Maradona"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Diego_Maradona",
        "situacao": "ok",
        "texto": "Diego Armando Maradona (30 October 1960 – 25 November 2020) was an Argentine professional football player and manager. Widely regarded as one of the greatest players of all time, he was an attacking midfielder renowned for his exceptional creativity, passing, ball control, dribbling abilities, and free kick accuracy. He typically operated in the number 10 position as a playmaker and was nicknamed \n[…]\nMaradona's playing career was also marked by controversies, including a 15-month suspension in 1991 after testing positive for cocaine and his exclusion from the 1994 World Cup following another failed doping test. After retiring, he pursued a managerial career, notably coaching the Argentina national team from 2008 to 2010 and leading them to the quarter-finals of the 2010 World Cup.\n[…]\nAt the 2010 FIFA World Cup, Argentina won all three of their group stage matches. After their elimination from the tournament following a 4–0 loss to Germany in the quarter-finals, Maradona said he was considering leaving his position as manager. On 27 July, the Argentine Football Association announced that its board had unanimously decided not to renew Maradona's contract.\n[…]\nIn August 2007, Maradona went further, making an appearance on Chávez's weekly television show Aló Presidente and saying, \"I hate everything that comes from the United States. I hate it with all my strength.\" By December 2008, Maradona seemed to adopt a more positive US attitude and expressed admiration for Bush's successor, then-President-elect Barack Obama, for whom he had great expectations. However, in 2017, Maradona was critical of President Donald Trump and called him \"a cartoon character\".\n[…]\nFIFA 100: 2004\n[…]\nMaradona, Diego (2016). México 86 : así ganamos la copa : mi mundial, mi verdad (in Spanish) (1st ed.). Barcelona: Debate. ISBN 978-84-9992-627-8. OCLC 953395867.\n[…]\nDiego Maradona – FIFA competition record (archived)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Diego_Maradona",
        "situacao": "ok",
        "texto": "Diego Armando Maradona (Lanús, 30 de outubro de 1960 – Tigre, 25 de novembro de 2020) foi um treinador e futebolista argentino que atuou como meia-atacante. Liderou a Argentina na conquista da Copa do Mundo FIFA de 1986, marcando, nas quartas-de-final, o Gol do Século. Ainda disputou mais três mundiais (1982, 1990 e 1994), tendo alcançado o vice-campeonato em 1990.\n[…]\nA Copa de 1994 ficou marcada como o ponto final da vitoriosa trajetória de Maradona pela Seleção, após ele ser apanhado no exame antidoping na partida contra a Nigéria (a segunda da Argentina no Mundial). Por conta de sua notória participação nos Mundiais, em 2002 foi escolhido para o Time dos Sonhos das Copas do Mundo FIFA. Também trabalhou como treinador, mas sem muito sucesso.\n[…]\nNada comparado ao que vem em março de 1991: seu exame antidoping após partida contra o Bari dá positivo para cocaína, escancarando o vício do astro nas drogas.\n[…]\nJogou o primeiro tempo da partida e foi substituído pelo jovem Juan Román Riquelme. O Boca venceu por 2–1 e conseguiu a liderança com dois pontos de vantagem sobre o arquirrival, mas Maradona preferiu anunciar sua retirada, após rumores de novo antidoping positivo. O River conseguiria retomar a dianteira e seria campeão com um ponto de vantagem sobre o Boca.\n[…]\nApós recuperar milagrosamente a velha forma, Maradona começou a Copa do Mundo FIFA de 1994 dando mais um espetáculo. Marcou de fora da área contra a Grécia e, em famosa comemoração, rugiu com os olhos esbugalhados para uma câmera de TV. Contra a Nigéria, demonstrou fôlego incansável e inspirou os argentinos a vencerem de virada. O milagre por trás da perda de treze quilos — de 89 para 76 — em um tempo assustadoramente curto antes do torneio foi revelado em novo antidoping, que detectou efedrina.\n[…]\nMaradona: Conquista de um sonho (2021)\n[…]\nEl día que Maradona conoció a Gardel\n[…]\nDiego Maradona no YouTube",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Copa do Mundo FIFA de 1962",
      "descricao": "Sétima Copa do Mundo, disputada no Chile e vencida pelo Brasil, seu segundo título mundial."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Na Copa de 1962, no Chile, o jovem Amarildo virou titular da seleção brasileira a partir do terceiro jogo. Por quê?",
    "resposta": "Pelé se machucou",
    "fonte": [
      "https://en.wikipedia.org/wiki/1962_FIFA_World_Cup",
      "https://en.wikipedia.org/wiki/Amarildo_Tavares_da_Silveira"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/1962_FIFA_World_Cup",
        "situacao": "ok",
        "texto": "The 1962 FIFA World Cup was the seventh edition of the FIFA World Cup, the quadrennial international football championship for senior men's national teams. It was held from 30 May to 17 June 1962 in Chile. The qualification rounds took place between August 1960 and December 1961, with 56 teams entering from six confederations, and fourteen qualifying for the finals tournament alongside Chile, the \n[…]\nAfter Europe hosted two consecutive World Cups, the American federations demanded the 1962 edition must be held in South America or they would stage a complete boycott of the tournament, similar to 1938. Argentina, after previously failed candidacies, was the favourite. Magallanes' chairman, Ernesto Alvear, attended a FIFA Congress held in Helsinki while the Finnish city was hosting the 1952 Summer Olympics. He considered that Chile was able to organise the World Cup.\n[…]\nPelé was injured in the second group match against Czechoslovakia. The Soviet Union goalkeeper Lev Yashin, arguably the best goalkeeper in the world at the time, was in poor form and his team went out to Chile (1–2) in the quarter-finals.\n[…]\nBright spots included the emergence of the young Brazilians Amarildo (standing in for Pelé) and Garrincha, the heroics of Czechoslovakia goalkeeper Viliam Schrojf against Hungary and Yugoslavia, and the performance of the host nation Chile, who took third place with a squad of relatively unknown players..\n[…]\nThe Brazilians scored goals from Zito and Vavá (another Schrojf error) midway through the second half, and the Czechoslovaks could not get back into the game. The match ended 3–1 to Brazil, a successful defence of the title for only the second time in the history of the competition in spite of the absence of one of their star players of 1958, Pelé, who was replaced by Amarildo.\n[…]\n1962 FIFA World Cup Chile , FIFA.com"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Amarildo_Tavares_da_Silveira",
        "situacao": "ok",
        "texto": "Amarildo Tavares da Silveira, also known as Amarildo (Portuguese pronunciation: [amaˈɾiwdu]; born 29 July 1939), is a Brazilian former footballer who played as a striker. He is the only living player who participated in the 1962 World Cup final.\n[…]\nAt the end of his career, Amarildo enjoyed a short stint at Vasco da Gama in the early 1970s, helping Vasco da Gama to win the 1974 Campeonato Brasileiro Série A.\n[…]\nIn April 1961, Amarildo made his debut for Brazil.\n[…]\nAt the 1962 FIFA World Cup, after an injury to Pelé in a group game against Czechoslovakia, Amarildo was chosen by Brazil manager Aymoré Moreira to replace him. On 6 June 1962, in Amarildo's first appearance in the tournament, he scored two second half goals in Brazil's final group game against Spain to ensure Brazil's qualification into the knockout phase.\n[…]\nAmarildo's exploits at the 1962 World Cup gained him the nickname o possesso (the possessed) by Brazilian journalist Nelson Rodrigues.\n[…]\nIn total, Amarildo appeared 22 times for Brazil, scoring seven goals.\n[…]\nOn 24 January 2008, Amarildo was hired as America's head coach. On 26 January 2008, in his first match as America's head coach, Volta Redonda beat América 4–2 at the Estádio Giulite Coutinho. He was sacked by America's board after managing the team for just a week.\n[…]\nIn September 2011, Amarildo was diagnosed with throat cancer, before announcing he was cancer-free nine months later.\n[…]\nRio-São Paulo Tournament: 1962\n[…]\nInterstate Cup Champions Club: 1962\n[…]\nCampeonato Carioca: 1961, 1962\n[…]\nCampeonato Brasileiro Série A: 1974\n[…]\nFIFA World Cup: 1962\n[…]\nScorer of the Brazilian Championship: 1962\n[…]\nScorer of the Rio-São Paulo Tournament: 1962\n[…]\nScorer of Interstate Club Champions Cup: 1962\n[…]\nScorer of Pentagonal International Clubs: 1962"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Copa_do_Mundo_FIFA_de_1962",
        "situacao": "ok",
        "texto": "A Copa do Mundo FIFA de 1962 foi a sétima edição da Copa do Mundo FIFA de futebol, que ocorreu de 30 de maio até 17 de junho. O evento foi sediado no Chile, tendo partidas realizadas nas cidades de Arica, Rancagua, Viña del Mar e Santiago (Ñuñoa).\n[…]\nA grande campeã desta Copa do Mundo foi a Seleção Brasileira que, como campeã da Copa anterior de 1958, não havia participado das eliminatórias pois já tinha vaga garantida. O Brasil contou com muitos jogadores da Copa realizada na Suécia, como Gilmar, Djalma Santos, Nílton Santos, Didi, Zagallo, Vavá, Pepe, Zito, Bellini, Garrincha e Pelé.\n[…]\nA final da Copa do Mundo FIFA de 1962 foi disputada pela Tchecoslováquia, que havia eliminado a Iugoslávia e a Hungria; e o Brasil, que havia eliminado o Chile e a Inglaterra. A partida foi realizada no dia 17 de junho, às 14h30min, no Estádio Nacional do Chile, com um público estimado em 68 679 pessoas. Sob o apito do árbitro soviético Nikolay Latyshev, Josef Masopust abriu o placar aos 15 minutos, porém, dois minutos depois, Amarildo empatou o jogo, que terminou o primeiro tempo no 1–1.\n[…]\nNo Grupo 3, logo na estreia o Brasil bateu o México por 2 a 0 com um gol antológico de Pelé, que driblou toda a defesa mexicana antes de tocar na saída do goleiro Antonio Carbajal. Já no segundo jogo, contra a Tchecoslováquia, Pelé sofreu uma contusão e não voltaria a atuar nesta Copa. Amarildo teve a dificílima missão de substituir o Rei e foi bem sucedido. O Brasil empatou em 0–0 com a Tchecoslováquia e derrotou a Espanha por 2–1, num jogo dramático e de virada.\n[…]\nA classificação final é determinada através da fase em que a seleção alcançou e a sua pontuação, levando em conta os critérios de desempate.\n[…]\n«FIFA - 1962 FIFA World Cup Chile» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Romário",
      "descricao": "Romário de Souza Faria, atacante brasileiro campeão mundial e eleito melhor jogador da Copa de 1994."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Romário, herói do tetra em 1994, ficou fora da Copa seguinte, na França. Qual foi o motivo do corte?",
    "resposta": "Uma lesão muscular",
    "distratores": [
      "Suspensão por doping",
      "Expulsão nas eliminatórias",
      "Aposentadoria da seleção"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Rom%C3%A1rio"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rom%C3%A1rio",
        "situacao": "ok",
        "texto": "Romário de Souza Faria (born 29 January 1966), known simply as Romário (Brazilian Portuguese: [ʁoˈmaɾiu]), is a Brazilian politician and former professional footballer who is currently the Senior Senator for Rio de Janeiro and the president of football club America-RJ. A prolific striker renowned for his clinical finishing, he is considered one of the greatest players of all time.\n[…]\nAs a member of the Brazil national team, Romário won the silver Olympic medal in Seoul in 1988, finishing as the top-goalscorer with seven goals in six matches. He attained the status of national hero at the 1989 Copa América as he scored the only goal in the final against Uruguay to end Brazil's long trophy drought in front of their own fans at the Maracanã. He was part of the Brazilian squad in the World Cups of 1990 and 1994.\n[…]\nRomário was left out of the 1998 World Cup squad. Medical exams had revealed that he had a muscular injury, and he received intensive treatment leading up to the tournament, but he did not recover completely and was dismissed the day of the deadline for the World Cup squad submissions. Just after the decision was announced, Romário held a press conference where he broke down in tears while saying that \"this is very sad for me, a big disappointment. This is a very difficult moment in my life\".\n[…]\nScolari was unmoved and did not pick him, saying before his squad announcement that Romário's exclusion was \"technical and tactical\". After the announcement, he said that it was as a result of Romário's withdrawing from the Copa América: \"People forget the details, but I do not. I almost got fired from the national team after [the Copa América].\" (Brazil had been beaten in the quarter-finals by Honduras.) Without Romário, Brazil went on to win the World Cup for the fifth time.\n[…]\nRomário – FIFA competition record (archived)\n[…]\nRomário – UEFA competition record (archive)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rom%C3%A1rio",
        "situacao": "ok",
        "texto": "Romário de Souza Faria (Rio de Janeiro, 29 de janeiro de 1966) é um político, empresário e futebolista brasileiro. Em sua carreira no futebol, jogou primariamente como centroavante. É um dos maiores centroavantes brasileiros, do futebol mundial e de todos os tempos, sendo amplamente reconhecido por muitos jogadores nacionais e estrangeiros. Entre os seus muitos títulos, destaca-se a Copa do Mundo \n[…]\nRomário era um dos trunfos do Brasil para a Copa do Mundo FIFA de 1990. No entanto, a três meses do mundial, sofreu uma grave lesão, na fíbula, no Campeonato Holandês. O atacante tratou-se com o fisioterapeuta Nilton Petroni, o Filé — o mesmo que cuidaria de Ronaldo —, e recuperou-se a tempo de ir para a Copa. O médico da Seleção, Lídio Toledo, ficou incomodado por Romário não ter tratado a lesão com ele.\n[…]\nOs dois deveriam ser a dupla de ataque titular do Brasil na Copa do Mundo FIFA de 1998. Mas, em 6 de maio de 1998, durante uma partida do Flamengo com o Friburguense pelo Campeonato Carioca, Romário sentiu dores na perna direita, virando dúvida para a Copa. Ele havia sofrido uma contratura muscular, mas se recuperou dessa lesão. Porém, dias depois, já com a Seleção para disputar o mundial, Romário sofreu outra lesão, nos treinamentos, dessa vez um estiramento na panturrilha direita.\n[…]\nNum primeiro momento, a comissão técnica disse que a lesão na panturrilha de Romário era leve e que ele se recuperaria e jogaria a Copa, podendo estrear ainda na primeira fase. Dias depois, no entanto, a comissão mudou de posição, disse que a lesão de Romário não evoluiu como esperado, que ele não se recuperaria a tempo e anunciou o corte, uma semana antes da estreia do Brasil contra a Escócia. O volante Emerson foi chamado para ocupar seu lugar e recebeu a camisa 11.\n[…]\nEm março de 2021, Romário saiu do Podemos e, no mês seguinte, se filiou ao Partido Liberal (PL).\n[…]\nCopa do Mundo FIFA: 1994",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "New York Cosmos",
      "descricao": "Clube de futebol de Nova York que disputou a liga norte-americana entre 1971 e 1985 e reuniu astros como Pelé."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Que clube dos Estados Unidos reuniu, nos anos setenta, Pelé e o alemão Franz Beckenbauer no mesmo elenco?",
    "resposta": "New York Cosmos",
    "distratores": [
      "Tampa Bay Rowdies",
      "Chicago Sting",
      "Washington Diplomats"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/New_York_Cosmos_(1970%E2%80%931985)",
      "https://en.wikipedia.org/wiki/Franz_Beckenbauer"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/New_York_Cosmos_(1970%E2%80%931985)",
        "situacao": "ok",
        "texto": "The New York Cosmos (simply the Cosmos in 1977–1978) was an American professional soccer club based in New York City and its suburbs. The team played home games in three stadiums around New York, including Yankee Stadium in the Bronx and Downing Stadium on Randalls Island, before moving to Giants Stadium in nearby East Rutherford, New Jersey in 1977, where the club remained for the rest of its his\n[…]\nThe Cosmos won the game 2–1. Pelé's compatriot, former Brazil captain Carlos Alberto was signed in 1977, at the same time as Franz Beckenbauer, who had captained the 1974 FIFA World Cup-winning West Germany national team. On the field, New York won three out of four championships, in 1977, 1978 and 1980. A playoff game against the Fort Lauderdale Strikers in 1977 drew a crowd of 77,691, a record for American club soccer.\n[…]\nFor the team's initial uniform, Cosmos general manager Clive Toye chose the green and yellow of the Brazil national team as part of his strategy to lure Pelé, one of that country's star players, to the United States. The club's initial uniform was all green with yellow trim, with the colors reversed on the road uniform. Coincidentally, the colors were the same as those of the previous New York NASL team, the New York Generals, which had folded after the 1968 season.\n[…]\nThe New York Cosmos are famous for having fielded numerous well-known players, almost all of whom were from outside the United States: examples include Pelé, Franz Beckenbauer, Giorgio Chinaglia, and Carlos Alberto. American players of note include goalkeeper Shep Messing – who was notoriously sold after posing nude for a magazine in December 1974, then brought back two years later on Pelé's insistence. The Cosmos also fielded Werner Roth, a Yugoslavian-born U.S.\n[…]\nNew York Cosmos had many friendly matches in domestic and abroad.\n[…]\nOnce in a Lifetime – The Extraordinary Story of the New York Cosmos"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Franz_Beckenbauer",
        "situacao": "ok",
        "texto": "Franz Anton Beckenbauer (German pronunciation: [fʁants ˈbɛkn̩ˌbaʊɐ] ; 11 September 1945 – 7 January 2024) was a German professional football player, manager, and official. Nicknamed der Kaiser (\"the Emperor\"), he is widely regarded as one of the greatest and most influential players of all time. Beckenbauer was a versatile player who started out as a midfielder, but made his name as a centre-back.\n[…]\nAt club level with Bayern Munich, Beckenbauer won the European Cup Winners' Cup in 1967 and three consecutive European Cups from 1974 to 1976. The latter feat made him the first player to win three European Cups as captain of his club. He became team manager and later president of Bayern Munich. After two spells with the New York Cosmos he was inducted into the US National Soccer Hall of Fame.\n[…]\nIn 1977, Beckenbauer accepted a lucrative contract to play in the North American Soccer League (NASL) with the New York Cosmos, playing alongside Pelé in his debut season. He played with the Cosmos for four seasons up to 1980, and the team won the Soccer Bowl on three occasions (1977, 1978, 1980).\n[…]\nBeckenbauer retired after a two-year spell with Hamburger SV in Germany (1980–82) with the win of the Bundesliga title that year and one final season with the New York Cosmos in 1983.\n[…]\nBeckenbauer retired from international football in 1977, at the age of 31, following his move to New York Cosmos.\n[…]\nNew York Cosmos\n[…]\nBeckenbauer, Franz and Dettmar Cramer, Nicht nur ein Spiel! Reinbek: Rowohlt, 2006, ISBN 3-498-00640-1.\n[…]\nKörner, Torsten, Franz Beckenbauer – der freie Mann. Scherz, Frankfurt 2005, ISBN 3-502-18391-0.\n[…]\nKummermehr, Petra (Hrsg.): Das Buch Franz. Botschaften eines Kaisers. Diederichs, München 2011, ISBN 978-3-424-35063-0.\n[…]\nFranz Beckenbauer at DFB (also available in German)\n[…]\nFranz Beckenbauer – UEFA competition record (archive)\n[…]\nFranz Beckenbauer – FIFA competition record (archived)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/New_York_Cosmos",
        "situacao": "ok",
        "texto": "O New York Cosmos (ou simplesmente Cosmos entre 1977–1978), foi um clube de futebol de Nova Iorque, Estados Unidos, que competia na North American Soccer League (NASL). A equipe jogou partidas em casa em três estádios ao redor de Nova Iorque, incluindo o Yankee Stadium, no Bronx, antes de se mudar em 1977 para o Giants Stadium nas proximidades de East Rutherford, Nova Jérsei, onde o clube permanec\n[…]\nA ideia da criação do New York Cosmos partiu dos irmãos Nesuhi Ertegün e Ahmet Ertegün, ambos nascidos em Istambul, Turquia. Os irmãos Ertegün foram os fundadores da Atlantic Records e depois que a gravadora foi comprada pela Warner Communications, atual Time Warner, sugeriram a Steve Ross, presidente da companhia, a criação de um clube de futebol por acreditarem na viabilidade econômica da North American Soccer League (NASL). O Cosmos se uniu à NASL em 10 de dezembro de 1970.\n[…]\nO nome do clube foi idealizado pelo inglês Clive Toye, o primeiro diretor do clube. A inspiração veio do New York Mets, time de beisebol. Da mesma forma que “Mets” era a forma curta de “Metropolitans”, Toye optou por “Cosmos”, como forma curta de “Cosmopolitans” e o clube foi batizado como New York Cosmos.\n[…]\nInicialmente o Cosmos era uma aventura e recebia pouco investimento. Contudo, aos poucos, Steve Ross se empolgou com o projeto e com o dinheiro da Warner, o clube passou a contratar vários jogadores famosos, tais como Pelé, Franz Beckenbauer, Giorgio Chinaglia, Carlos Alberto Torres, Marinho Chagas e Johan Cruyff, chegando ao ponto de ter um elenco formado por 16 nacionalidades.\n[…]\n* Título conquistado pelo novo New York Cosmos.\n[…]\nPelé 1975-77\n[…]\n1971 e 1976: Yankee Stadium (Nova York)\n[…]\n«Atual diretoria do New York Cosmos com destaque para Pelé e Eric Cantona» (em inglês)\n[…]\n«Once In a Lifetime - The Extraordinary Story of the New York Cosmos movie website (site do documentário oficial do New York Cosmos)» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Seleção Francesa de Futebol",
      "descricao": "Equipe nacional masculina de futebol da França, conhecida como Les Bleus."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Nas Copas de 1986, 1998 e 2006, o Brasil caiu diante do mesmo adversário. Qual seleção foi essa?",
    "resposta": "França",
    "distratores": [
      "Itália",
      "Holanda",
      "Alemanha"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Brazil%E2%80%93France_football_rivalry",
      "https://en.wikipedia.org/wiki/France_national_football_team"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Brazil%E2%80%93France_football_rivalry",
        "situacao": "inexistente",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/France_national_football_team",
        "situacao": "ok",
        "texto": "The France national football team represents France in men's international football. It is overseen by the French Football Federation (FFF; Fédération française de football), the governing body for football in France. It is a member of UEFA in Europe and FIFA in global competitions. The team's colours and imagery reference two national symbols: the Flag of France and Gallic rooster (coq gaulois). \n[…]\nIn the early to mid-1980s, under the leadership of the three-time Ballon d'Or winner Michel Platini, France won Euro 1984 (its first official title), a CONMEBOL–UEFA Cup (1985), and reached two consecutive World Cup semi-finals (1982 and 1986). During the captaincy of Didier Deschamps, with Zinedine Zidane being the star player, Les Bleus won the 1998 World Cup and Euro 2000. They also won the Confederations Cup in 2001 and 2003.\n[…]\nDue to disagreements between FIFA and the Union des Sociétés Françaises de Sports Athlétiques (USFSA), the country's sports union, France struggled to establish an identity. On 9 May 1908, the French Interfederal Committee (CFI), a rival organization to the USFSA, ruled that FIFA would now be responsible for the club's appearances in forthcoming Olympic Games and not the USFSA. In 1919, the CFI transformed themselves into the French Football Federation (FFF).\n[…]\nAt the 1986 World Cup, France reached the semi-finals, losing a rematch to West Germany, but achieved third place with a 4–2 victory over Belgium.\n[…]\nIn 2006, France finished as runners-up losing 5–3 on penalties to Italy. The team has also finished in third place on two occasions in 1958 and 1986 and in fourth place once in 1982. The team's worst results in the competition were first round eliminations in 2002 and 2010.\n[…]\nDemonstration matches played by club teams, officially not recognized by FIFA. The Club Français participated.\n[…]\nFootball in France\n[…]\nSport in France\n[…]\nFrance at FIFA\n[…]\nFrance at UEFA"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Estádio do Maracanã",
      "descricao": "Estádio de futebol no Rio de Janeiro, inaugurado para a Copa do Mundo de 1950."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que estádio recebeu o jogo decisivo da Copa de 1950 e, sessenta e quatro anos depois, a final da Copa de 2014?",
    "resposta": "Maracanã",
    "fonte": [
      "https://en.wikipedia.org/wiki/Maracan%C3%A3_Stadium"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Maracan%C3%A3_Stadium",
        "situacao": "ok",
        "texto": "Estádio do Maracanã, officially known as Estádio Jornalista Mário Filho, is an association football stadium in Rio de Janeiro, Brazil. Located in the Maracanã neighborhood, it is owned by the Rio de Janeiro state government and  managed by the clubs Flamengo and Fluminense. It is part of a complex that includes an arena known by the name of Maracanãzinho, which is mostly used for volleyball events\n[…]\nThe Maracanã was partially rebuilt in preparation for the 2013 FIFA Confederations Cup, and the 2014 World Cup, for which it hosted several matches, including the final. It is also set to host matches during the 2027 FIFA Women's World Cup. It served as the venue for the opening and closing ceremonies of the 2016 Summer Olympics and Paralympics, with the main track and field events taking place at the Estádio Olímpico. It hosted the Final for the 2019 and 2021 Copa America.\n[…]\nIn September 1966, upon the death of Mário Rodrigues Filho, the Brazilian journalist, columnist, sports figure, and prominent campaigner who was largely responsible for the stadium originally being built, the administrators of the stadium renamed the stadium after him: Estádio Jornalista Mário Rodrigues Filho. However, the nickname of Maracanã has continued to be used as the common referent.\n[…]\nOn 12 June 2014, the 2014 FIFA World Cup opened with host nation Brazil defeating Croatia 3–1, but that match was held at Arena Corinthians in São Paulo. The first game of the World Cup to be held in Maracanã was a 2–1 victory by Argentina over Bosnia and Herzegovina on 15 June 2014, being the only stadium for the tournament used previously in 1950. Brazil would have played at the Maracanã if they reached the final, but instead they lost 7–1 to Germany in the semi-finals.\n[…]\nMaracanã at StadiumDB.com\n[…]\nGeographic data related to Maracanã Stadium at OpenStreetMap"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Est%C3%A1dio_Jornalista_M%C3%A1rio_Filho",
        "situacao": "ok",
        "texto": "Estádio Jornalista Mário Filho, apelidado como Maracanã, ou carinhosamente como Maraca, é um estádio de futebol localizado no bairro de nome homônimo, na Zona Norte da cidade do Rio de Janeiro, capital do estado homônimo, construído pela prefeitura da cidade do Rio de Janeiro, então Distrito Federal, inaugurado em 1950, inicialmente com o nome de Estádio Municipal, para ser utilizado na Copa do Mu\n[…]\nO Bangu também teve seus momentos de grandeza no estádio, sendo campeão invicto da Taça Rio, em 1987, e vice-campeão do Campeonato Brasileiro de Futebol de 1985 contra o Coritiba, com o Maracanã recebendo mais de 90.000 espectadores no jogo decisivo, onde após empate no tempo normal em 1 a 1 e a persistência do resultado na prorrogação, o time do Paraná sagrou-se campeão ao bater o Bangu por 6 a 5 nos pênaltis.\n[…]\nEm 21 de março de 1999 o Maracanã teve seu último público pagante acima de 100 mil pessoas, foi um Vasco 3 x 0 Fluminense, jogo em que havia 105,5 mil torcedores que pagaram ingressos, e finalmente em 27 de junho de 1999, pela última vez o estádio teve um público total acima de 100 mil pessoas, na final da Copa do Brasil de Futebol, quando o Botafogo recebeu 101 581 torcedores (90 917 pagantes), em jogo contra o Juventude.\n[…]\nO Maracanã foi uma das sedes da Copa do Mundo FIFA de 2014 que foi realizada no Brasil. O estádio recebeu sete jogos, incluindo a final do evento.\n[…]\nDentro do Maracanã, ou nos seus arredores, é possível se encontrar alguns bustos e estátuas. Entre os bustos, encontram-se a do ex-jogador e técnico Zagallo, a do jornalista Mario Filho, que empresta seu nome ao estádio e a do eterno anjo das pernas tortas, Garrincha, a alegria do povo, esta última era alvo de curiosas superstições, após subida da rampa do Bellini, torcedores botafoguenses se “benziam” encostando no busto de Garrincha, ao entrar no estádio.\n[…]\nCanal de Estádio Jornalista Mário Filho no YouTube",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Botafogo",
      "descricao": "Botafogo de Futebol e Regatas, clube carioca de camisa alvinegra e escudo com uma estrela."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Na época da Copa de 1958, Garrincha, Didi e Nilton Santos, campeões na Suécia, defendiam o mesmo clube no Brasil. Qual?",
    "resposta": "Botafogo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Botafogo_de_Futebol_e_Regatas",
      "https://en.wikipedia.org/wiki/Nilton_Santos",
      "https://en.wikipedia.org/wiki/Garrincha"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Botafogo_de_Futebol_e_Regatas",
        "situacao": "ok",
        "texto": "Botafogo de Futebol e Regatas (Brazilian Portuguese pronunciation: [bɔtaˈfoɡu dʒi futʃiˈbɔw i ʁeˈɡatɐs]; English: Botafogo of Football and Rowing) is a Brazilian football club based in the neighborhood of Botafogo, in the city of Rio de Janeiro. It plays in the Campeonato Brasileiro Série A, the top tier of the Brazilian football league system, and in the Campeonato Carioca, the state of Rio de Ja\n[…]\nIn the 1990s, Botafogo won Copa Conmebol (the precursor of the current Copa Sudamericana). And in 1995 they won the Brazilian League for the second time in club's history, after drawing 1–1 the second leg of the Final against Santos FC at São Paulo.\n[…]\nTextor's first major move in charge of the club was the dismissal of Enderson Moreira in favor of Portuguese manager Luís Castro. Castro signed with Botafogo in March 2022, and the team had to hurry to build their squad for the 2022 Campeonato Brasileiro. Botafogo finished that year's league edition in 11th place, guaranteeing a spot in the 2023 Copa Sudamericana.\n[…]\nConstant change of managers caused Botafogo to have the biggest title collapse in football history, as the team won only 2 of their last 17 fixtures, not only losing the title to Palmeiras but dropping to 5th in the table and losing the automatic qualification spot for the Copa Libertadores. A round of 16 exit in the Copa do Brasil, a quarterfinal exit in the Copa Sudamericana, and a disappointing Campeonato Carioca made the year one of the most painful seasons in the club's history.\n[…]\nEight days later, Botafogo defeated São Paulo 2–1 to win the 2024 Campeonato Brasileiro Série A, its third Brazilian championship and first since 1995. The club finished the season with 79 points, six ahead of runners-up Palmeiras, completing the first Copa Libertadores–Brazilian league double in its history.\n[…]\nSource: RSSSF Brasil – Botafogo\n[…]\nBotafogo de Futebol e Regatas (basketball)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Nilton_Santos",
        "situacao": "ok",
        "texto": "Nílton dos Santos (Brazilian Portuguese: [ˈniwtõ ˈsɐ̃tus]; 16 May 1925 – 27 November 2013) was a Brazilian footballer who played primarily as a left-back. At international level, he was a member of the Brazil teams that won the 1958 and 1962 FIFA World Cups.\n[…]\nHe played all his professional club career for Botafogo de Futebol e Regatas.\n[…]\nNílton Santos played for only two teams in his professional career; Botafogo de Futebol e Regatas and the Brazil national team collecting 75 caps and scoring 3 goals.\n[…]\nFIFA described Santos as \"Brazil and Botafogo's pioneering wingback\". In its profile of him, FIFA highlighted his goal against Austria at the 1958 FIFA World Cup, when he won the ball in his own half, continued his run beyond the halfway line and moved into a position to score. The profile noted that, although full-backs had attacked before, it was in that World Cup match that \"the concept of the wingback was born\", with the role extending beyond merely defending.\n[…]\nBotafogo's home ground, the Estádio Olímpico Nilton Santos, commonly known as Engenhão, is named in his honour. Built for the 2007 Pan American Games, the stadium became Botafogo's home in 2007 and was used for athletics and football at the 2016 Summer Olympics. At Botafogo's request, the venue's name in use was changed from Estádio Olímpico João Havelange to Estádio Olímpico Nílton Santos in 2015, before the change was made official by the city of Rio de Janeiro in 2017.\n[…]\nBotafogo\n[…]\nCampeonato Brasileiro de Seleções Estaduais: 1950\n[…]\nCopa Rio Branco: 1950\n[…]\nTaça Oswaldo Cruz: 1950, 1955, 1956, 1958, 1961, 1962\n[…]\nFIFA World Cup All-Star Team: 1958\n[…]\nHistory of Botafogo de Futebol e Regatas\n[…]\nNílton Santos – FIFA competition record (archived)\n[…]\nNilton Reis dos Santos - International Appearances"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Garrincha",
        "situacao": "ok",
        "texto": "Manuel Francisco dos Santos (28 October 1933 – 20 January 1983), nicknamed Mané Garrincha, best known as simply Garrincha (Portuguese pronunciation: [ɡaˈʁĩʃɐ], \"wren\"), was a Brazilian professional footballer who played as a right winger. He is widely regarded as one of the greatest players of all time, and by many, one of the greatest dribblers ever.\n[…]\nGarrincha was already married and a parent when he signed for Botafogo in 1953. Team officials were ecstatic to learn that he was over 18 and able to be treated as a professional. In his first training session, he demonstrated his extraordinary skills by dribbling the ball through the legs of Nílton Santos, a Brazilian international defender and defensive midfielder who had 16 international caps. Santos was so impressed with the young Garrincha, he asked that Botafogo sign him.\n[…]\nGarrincha continued to play brilliantly, but Brazil had other talented players in his position, notably Julinho and together with a new European style of play centered on teamwork, he was not named in the squad for the 1954 World Cup. He helped Botafogo win the Campeonato Carioca in 1957 by scoring 20 goals in 26 games finishing second in the league scoring charts and this convinced the national team selectors to name him to the 1958 World Cup squad.\n[…]\nAn entertainer renowned for his dribbling skills in taking on opposing players, Garrincha inspiring the first bullfighting chants of olé to be used at football grounds; during a 1958 club game for Botafogo he gave a footballing lesson to River Plate defender Vairo, constantly teasing, feinting and going past him to ole's from the crowd, and when he \"forgot\" the ball and sprinted away with Vairo running after him the chants of olés changed to laughter.\n[…]\nBotafogo\n[…]\nFIFA World Cup All-Star Team: 1958, 1962\n[…]\nGarrincha – FIFA competition record (archived)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Botafogo_de_Futebol_e_Regatas",
        "situacao": "ok",
        "texto": "Botafogo de Futebol e Regatas é uma agremiação poliesportiva brasileira, com sede no bairro homônimo ao clube, na cidade do Rio de Janeiro. Nascido da fusão do Club de Regatas Botafogo (fundado para o remo em 1894) com o Botafogo Football Club (formado para o futebol em 1904), é um dos principais clubes do Brasil. Suas maiores glórias esportivas vêm principalmente do futebol, especialmente entre a\n[…]\nConhecido pela estrela de cinco pontas em seu distintivo, que lhe dá a alcunha de clube da Estrela Solitária, o Botafogo tem como suas cores oficiais o preto e o branco. Desde 2007, manda seus jogos de futebol no Estádio Nilton Santos, apelidado Engenhão. Um dos clubes mais populares do Brasil, tem como seus principais rivais o Flamengo, Fluminense e o Vasco da Gama.\n[…]\nDentre eles, oito foram campeões da Copa do Mundo como atletas do Botafogo, somando 12 títulos no total: Didi, Garrincha e Nilton Santos venceram o Mundial duas vezes, em 1958 e 1962; Amarildo e Zagallo também foram campeões em 1962; enquanto Jairzinho, Paulo César Caju, Roberto Miranda e Rogério conquistaram o torneio em 1970. Em 1962, o Botafogo teve também o artilheiro da competição: Garrincha, com quatro gols, ao lado de Flórián Albert, Valentin Ivanov, Dražan Jerković, Leonel Sánchez e Vavá.\n[…]\nAlém deles, outros jogadores também foram campeões por suas seleções durante a passagem pelo alvinegro. O Botafogo teve 8 atletas campeões, somando 9 títulos da Copa América: pela Seleção Brasileira, os campeões foram Palamone, em 1919 e 1922; Luís Menezes, em 1919; Nilton Santos, Octávio Moraes e Osvaldo, em 1949; Josimar e Mauro Galvão, em 1989; e Gonçalves em 1997. Em 2011, Loco Abreu foi campeão pela Seleção Uruguaia.\n[…]\nA modalidade manteve-se desativada no clube até 2019, quando o Botafogo retornou para participar da Série A2 do Campeonato Brasileiro.. Em 2021 o Clube conquistou o seu segundo título do\n[…]\nBotafogo no Flickr",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Ronaldinho Gaúcho",
      "descricao": "Ronaldo de Assis Moreira, meia-atacante brasileiro do Barcelona, campeão mundial em 2002."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Antes de Ronaldinho Gaúcho, outro jogador da família já tinha sido ídolo do Grêmio e depois virou seu empresário. Quem era ele?",
    "resposta": "Assis, seu irmão mais velho",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ronaldinho",
      "https://en.wikipedia.org/wiki/Roberto_de_Assis_Moreira"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ronaldinho",
        "situacao": "ok",
        "texto": "Ronaldo de Assis Moreira (born 21 March 1980), commonly known as Ronaldinho Gaúcho or simply Ronaldinho, is a Brazilian professional footballer who plays as an attacking midfielder or left winger for Serie C club Ravenna. Widely regarded as one of the greatest players of all time, he is the only player in history to have won a FIFA World Cup, a Copa América, a FIFA Confederations Cup, a UEFA Champ\n[…]\nRonaldo de Assis Moreira was born on 21 March 1980 in the city of Porto Alegre, the state capital of Rio Grande do Sul, Brazil. His mother, Miguelina Elói Assis dos Santos, was a salesperson who studied to become a nurse. His father, João de Assis Moreira, was a shipyard worker and a footballer for the local club Esporte Clube Cruzeiro (not to be confused with the larger Cruzeiro Esporte Clube).\n[…]\nIn 2014, because of the FIFA World Cup held in Brazil, Ronaldinho Gaúcho's short animated series was acquired by the paid children's channel Gloob. At the same time, the Discovery Kids channel aired the series \"Pelezinho in: Planet Soccer\". The series \"Pelezinho in: Planet Soccer\" was also launched, usually passing during Discovery Kids commercials, and Neymar Jr. by Nickelodeon.\n[…]\nGrêmio\n[…]\nIn 2012, two Brazilian entomologists named a new species of bee, from Brazil, Eulaema quadragintanovem, stating that \"the specific epithet honors the Brazilian soccer player Ronaldo de Assis Moreira, famous worldwide as 'Ronaldinho' and in Brazil as 'Ronaldinho Gaúcho'. Quadraginta novem means 'forty-nine' in Latin, the number of Ronaldinho's jersey at Atlético Mineiro, his former team in Brazil. Ronaldinho chose the number 49 as an homage to his mother, born in 1949.\"\n[…]\nRonaldinho Gaúcho official website at the Wayback Machine (archived 6 March 2010) (in Spanish, Portuguese, English, and Italian)\n[…]\nRonaldinho at Olympedia\n[…]\nRonaldinho – French league stats at LFP – also available in French (archived)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Roberto_de_Assis_Moreira",
        "situacao": "ok",
        "texto": "Roberto de Assis Moreira (born 10 January 1971), commonly known as Assis, is a Brazilian former footballer who played as a midfielder, and who is also the brother, manager, agent and adviser of footballer Ronaldinho. He is also the owner of Porto Alegre Futebol Clube.\n[…]\nAssis grew up around soccer, with his father not only being a former player, but also working as a game day doorman for Gremio while his uncles played as well. Assis was an inspiration for his brother Ronaldinho, nine years his younger, as his talents landed him a position with Gremio's youth team and led to a notable athletic career.\n[…]\nAssis's younger brother Ronaldo, now known as Ronaldinho, would emerge as a similarly desired talent at Gremio's youth team. Assis, who had experience in the world of association football as a negotiator and player and had taken on a paternal role for his brother, would act as manager for Ronaldinho throughout his career, until its end.\n[…]\nAssis would keep in touch with his brother while he played in Brazil, witnessing Gremio decline numerous offers for Ronaldinho until Assis would negotiate a transfer to Paris Saint-Germain, seen by some as revenge for being sold off to Sion years earlier. His reputation as a negotiator would become infamous as he managed all his brother's affairs and kept pressure on sponsors, with some going so far as to claim that he was controlling his brother's every action.\n[…]\nWhile Assis agent career was given focus on due to his brother and client, Ronaldinho, he also served the interests of several other players including Rodrigo Gral as president of the Assis Moreira Group.\n[…]\nThey would eventually be released with a $110,000 fine for Assis and $90,000 fine for Ronaldinho after spending 5 months in custody.\n[…]\nGrêmio"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ronaldinho_Ga%C3%BAcho",
        "situacao": "ok",
        "texto": "Ronaldo de Assis Moreira, mais conhecido como Ronaldinho Gaúcho (Porto Alegre, 21 de março de 1980) é um futebolista, cantor e compositor brasileiro que atua como meio-campista, segundo atacante ou ponta-esquerda no Ravenna Calcio. Amplamente reconhecido como um dos jogadores mais talentosos da história, destacou-se pela extrema habilidade, pelos dribles memoráveis e pela técnica refinada. É consi\n[…]\nNascido no bairro de Restinga, Ronaldinho foi criado em Vila Nova, Porto Alegre. Na infância, sua principal diversão era brincar com a bola de futebol, junto dos seus melhores amigos. Com 7 anos começou a jogar na escola de futebol infantil do Grêmio. Aos 8 anos seu pai morreu ao cair em uma piscina, e ele recebeu apoio de sua mãe, da sua irmã, e passou a enxergar seu irmão mais velho como figura paterna.\n[…]\nApós mais de dois anos sem assinar contrato profissional com uma equipe, o irmão de Ronaldinho confirmou que o jogador havia se aposentado.\n[…]\nRecebeu uma nova chance na Seleção Brasileira nas Olimpíadas de 2008, na China. Foi convocado pelo técnico Dunga e comandou a equipe, já que era o jogador mais velho do elenco.\n[…]\nEm janeiro de 2015, Ronaldinho Gaúcho, seu irmão Roberto de Assis Moreira e a empresa Reno Construções e Incorporações foram condenados pela Justiça por dano ambiental. Eles tiveram de retirar um trapiche construído de forma indevida na superfície do Lago Guaíba, na Zona Sul de Porto Alegre. Além da retirada, o jogador teve de pagar 800 mil reais. O valor foi destinado ao Fundo Estadual do Meio Ambiente.\n[…]\nEm 28 de dezembro de 2012, Ronaldinho Gaúcho participou da divulgação do filme R10 — The Movie na cidade de Pune, na Índia. Ao lado do irmão e empresário Assis, que negociou o contrato com a Bala Entertainment International, empresa do grupo Venky's, um dos maiores grupos de produção cinematográfica de Bollywood, o jogador apresentou o cartaz do filme.\n[…]\nGrêmio",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Ademir da Guia",
      "descricao": "Ademir da Guia, meia brasileiro ídolo do Palmeiras nos anos 1960 e 1970."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que parentesco ligava Ademir da Guia, ídolo do Palmeiras, a Domingos da Guia, zagueiro da seleção na Copa de 1938?",
    "resposta": "Domingos era seu pai",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ademir_da_Guia",
      "https://en.wikipedia.org/wiki/Domingos_da_Guia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ademir_da_Guia",
        "situacao": "ok",
        "texto": "Ademir da Guia (born 3 April 1942) is a retired professional footballer who played as a midfielder during the 1960s and 1970s for Palmeiras, a leading association football team in Brazil, where he is still regarded as one of the club's all-time best players. Usually a playmaker, he was known for his fantastic close control and passing ability. He was nicknamed O Divino, which means The Divine One,\n[…]\nDa Guia was born in Rio de Janeiro. His father, Domingos da Guia was a former national team member who played at the 1938 FIFA World Cup. His uncle, Ladislau da Guia, had pursued the same career path at an earlier stage, playing for Bangu Atlético Clube, and becoming their all-time best scorer with 215 goals.\n[…]\nIn the 16 years Ademir da Guia spent playing for Palmeiras, he holds the record for the most appearances for the club and is the third best goalscorer ever, and won, amongst other titles, both the Campeonato Paulista and the Campeonato Brasileiro Série A five times.\n[…]\nUnlike many distinguished football players in his country, Ademir did not have a prolonged and constant participation with the Brazil national team; playing in nine matches for Brazil in the total, the first six in 1965 and the other three in 1974, including at the 1974 FIFA World Cup when he got the chance to play in the match for third place against Poland (in which Brazil was defeated by 1–0).\n[…]\nDa Guia played his farewell match on 18 September 1977 at Estádio do Morumbi, São Paulo in a Campeonato Paulista match between his club Palmeiras and Corinthians, which the latter won 2–0.\n[…]\nPalmeiras\n[…]\nCopa Libertadores runner-up: 1968"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Domingos_da_Guia",
        "situacao": "ok",
        "texto": "Domingos Antônio da Guia (19 November 1912 – 18 May 2000) was a Brazilian footballer who played as a centre-back. He played in four matches for the Brazil national team in the 1938 FIFA World Cup finals. He is regarded as one of the best Brazilian defenders of all time.\n[…]\nCampeonato Brasileiro de Seleções Estaduais: 1931, 1938, 1940\n[…]\nCopa Río Branco: 1931, 1932\n[…]\nFIFA World Cup third-place: 1938\n[…]\nCopa América runner-up: 1945, 1946\n[…]\nFIFA World Cup All-Star Team: 1938"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ademir_da_Guia",
        "situacao": "ok",
        "texto": "Ademir Ferreira da Guia (Rio de Janeiro, 3 de abril de 1942) é um político e ex-futebolista brasileiro que atuava como meio-campista.\n[…]\nPela classe com que jogava, herdou parte do apelido de seu pai, Domingos da Guia, o \"Divino Mestre\", e passou a ser chamado de \"Divino\".\n[…]\nAdemir é filho de Domingos da Guia, zagueiro que brilhou na década de 1930. Alto e esguio, chegou a atuar como centroavante no início da carreira, mas sempre preferiu o meio-campo.\n[…]\nDesembarcou em São Paulo no ano de 1961, vindo do Bangu-RJ, clube que o revelou para o futebol, assim como a seu pai e a seu tio, Ladislau da Guia (maior artilheiro da história do Bangu, com 215 gols). Destaque no clube carioca aos 19 anos, Ademir já era sondado por Fluminense, Botafogo e Santos, além de ter despertado o interesse dos espanhóis Barcelona e Valencia. No entanto, foi o Palmeiras que pagou caro pelo jovem.\n[…]\nNo dia 25 de outubro de 2014, foi realizada uma partida festiva chamada de \"Jogo Divino\" em homenagem a Ademir da Guia, então com 72 anos de idade. A festa, que recebeu 10 mil convidados, fez parte de um evento-teste do Allianz Parque, nova arena do Palmeiras inaugurada oficialmente dias depois. Com a participação de vários ex-jogadores do clube, o evento foi considerado um sucesso. A partida contou com duas equipes do Palmeiras, sendo uma vestida de verde e a outra de branco.\n[…]\nEm 2001, o ex-jogador e ídolo corintiano Sócrates escreveu sobre a vida de Ademir da Guia:\n[…]\nMAZZIERO DE SOUZA, Kleber - Divino: a vida e a arte de Ademir da Guia. Rio de Janeiro: Editora Gryphus, 2001; ISBN 8575100092.\n[…]\nUm Craque Chamado Divino (documentário sobre Ademir da Guia)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Paolo Maldini",
      "descricao": "Ex-zagueiro e lateral italiano que passou toda a carreira no Milan e na seleção da Itália."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Paolo Maldini ergueu a taça europeia como capitão do Milan em 2003. Quem tinha feito exatamente o mesmo pelo clube em 1963?",
    "resposta": "Cesare Maldini, seu pai",
    "fonte": [
      "https://en.wikipedia.org/wiki/Paolo_Maldini",
      "https://en.wikipedia.org/wiki/Cesare_Maldini"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Paolo_Maldini",
        "situacao": "ok",
        "texto": "Paolo Cesare Maldini (Italian pronunciation: [ˈpaːolo malˈdiːni]; born 26 June 1968) is an Italian football executive and former professional footballer who most recently served as the president of the technical sector of the Italian Football Federation. He spent his entire career playing as a left-back or as a centre-back for AC Milan and the Italy national team. He is widely regarded as one of t\n[…]\nMilan won the 2002–03 Champions League with Maldini as their captain for the first time in his career, in the first all-Italian final, against Juventus, on 28 May 2003 at Old Trafford. Maldini helped Milan keep a clean sheet, as they defeated Juventus 3–2 on penalties after a 0–0 deadlock following extra time. On that day, it was exactly 40 years since his father, Cesare, had also lifted the European Cup trophy as Milan's captain, also in England.\n[…]\nIn 1986, Maldini was called up by his father Cesare Maldini to the Italian under-21 national team, and made his debut for the team on 12 November of that year, in a 0–0 draw against Austria; he earned 12 caps and scored five goals in two years with the azzurrini, with his first goal coming on 11 February 1987, in a 2–1 win against Portugal. Maldini was also member of the under-21 team that finished runners-up to Spain in the 1986 UEFA European Under-21 Championship.\n[…]\nMaldini was born on 26 June 1968 in Milan to Cesare Maldini and Marisa Luisa De Mezzi. His paternal family was of mixed Italian-Slovenian descent. He has five siblings. In December 1994, he married Venezuelan former model Adriana Fossa. The couple have two sons, Christian (born 14 June 1996) and Daniel (born 11 October 2001), who both played for AC Milan's youth teams. His father Cesare played as a defender and also captained Milan and the Italy national team.\n[…]\nPaolo Maldini at AIC (in Italian)\n[…]\nPaolo Maldini at FIGC (in Italian)\n[…]\nPaolo Maldini at Italia1910.com (in Italian)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Cesare_Maldini",
        "situacao": "ok",
        "texto": "Cesare Maldini (Italian pronunciation: [ˈtʃeːzare malˈdiːni, ˈtʃɛː-]; 5 February 1932 – 3 April 2016) was an Italian professional football manager and player who played as a defender.\n[…]\nFather to Paolo Maldini and grandfather to Daniel Maldini, Cesare began his career with Italian side Triestina, before transferring to AC Milan in 1954, whom he captained to win four Serie A league titles, one European Cup and one Latin Cup during his twelve seasons with the club. He retired in 1967, after a season with Torino. Internationally, he played for Italy, earning 14 caps and participating in the 1962 World Cup. He served as team captain for both Milan and Italy.\n[…]\nAt international level Maldini earned 14 caps for the Italy national football team between 1960 and 1963, also serving as the national team's captain between 1962 and 1963, but was less successful than with Milan. He made his debut on 6 January 1960, in a 3–0 win over Switzerland in the 1955–60 Central European International Cup, and later took part in the 1962 FIFA World Cup with Italy, making two appearances in the competition.\n[…]\nDespite initially struggling in qualification, the Italian media and fans had great expectations of the 1998 side, which included a strong defence, and several prolific attacking players, such as Christian Vieri, Alessandro Del Piero and Filippo Inzaghi, among others, in their prime. Cesare Maldini's son, Paolo, was captain of the team. Italy were drawn in Group B of the tournament with Chile, Cameroon and Austria.\n[…]\nEuropean Cup Winners' Cup: 1972–73\n[…]\nProfile at the AC Milan website\n[…]\nCesare Maldini – FIFA competition record (archived)\n[…]\nCesare Maldini – UEFA competition record (archive)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Paolo_Maldini",
        "situacao": "ok",
        "texto": "Paolo Cesare Maldini (Milão, 26 de junho de 1968) é um ex-futebolista italiano que atuava como lateral-esquerdo ou zagueiro. Amplamente reconhecido como um dos maiores ídolos da história do Milan, é considerado um dos maiores jogadores italianos e um dos melhores defensores da história.\n[…]\nNo dia 28 de maio de 2003, na final da Liga dos Campeões, vencida contra a Juventus, Maldini viveu um dos momentos mais marcantes de sua história. O defensor ergueu o troféu de campeão europeu 40 anos exatos após seu pai, Cesare Maldini, ter feito a mesma coisa.\n[…]\nNa infância era torcedor da Juventus e admirava o futebol do atacante Roberto Bettega. Foi por insistência do pai, Cesare, que havia feito história na defesa do Milan, que Paolo foi para as categorias de base dos rossoneri e como defensor. Apesar de ser um jogador destro, tinha facilidade também em trabalhar com o pé esquerdo. Iniciou a carreira como lateral-esquerdo e posteriormente deslocou-se para a função de zagueiro, tendo qualidade para atuar em qualquer posição do sistema defensivo.\n[…]\nUma grande curiosidade é que dos sete títulos de campeão europeu conquistados pelo Milan, seis foram com a atuação da família Maldini: as cinco últimas foram conquistadas por Paolo, e a primeira por seu pai Cesare Maldini.\n[…]\nFilho do ex-jogador e treinador Cesare Maldini, Paolo é casado com a ex-modelo venezuelana Adriana Fossa. O casal possui dois filhos: Christian, nascido em 1996, e Daniel, nascido em 2001. O mais novo, que atua como meio-campista, seguiu o caminho do pai e estreou na equipe principal do Milan aos 18 anos, em fevereiro de 2020.\n[…]\nEm maio de 2015, Maldini tornou-se proprietário do Miami FC, clube estadunidense que disputa a USL Championship.\n[…]\nMilan\n[…]\nMelhor Jogador da Copa Intercontinental: 2003\n[…]\n«Paolo Maldini». no Soccerway",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Cristiano Ronaldo",
      "descricao": "Cristiano Ronaldo dos Santos Aveiro, atacante português ídolo do Manchester United e do Real Madrid."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Antes de chegar ao Manchester United, em 2003, Cristiano Ronaldo jogava em qual clube de Lisboa?",
    "resposta": "Sporting",
    "fonte": [
      "https://en.wikipedia.org/wiki/Cristiano_Ronaldo"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cristiano_Ronaldo",
        "situacao": "ok",
        "texto": "Cristiano Ronaldo dos Santos Aveiro (born 5 February 1985) is a Portuguese professional footballer who plays as a forward for and captains the Saudi Pro League club Al-Nassr. He represented the Portugal national team for 23 years, which he also captained for 19 years. Nicknamed CR7, he is widely regarded as one of the greatest footballers of all time and the greatest Portuguese football player of \n[…]\nRonaldo began his career with Sporting CP before signing with Manchester United in 2003. He helped the club win three consecutive Premier League titles, the 2007–08 Champions League, and the 2008 FIFA Club World Cup. For his performances in 2007–08, Ronaldo was awarded his first Ballon d'Or at age 23. In 2009, he joined Real Madrid in a deal worth €94 million (£80 million), which was the most expensive transfer in history at the time.\n[…]\nAfter Sporting defeated Manchester United 3–1 in a friendly on 6 August 2003, United manager Alex Ferguson was determined to acquire Ronaldo, describing him as \"one of the most exciting young players\" he had ever seen.\n[…]\nOn 12 August 2003, less than a week after the match that impressed Ferguson, Manchester United signed Ronaldo for £12 million, an England record for a teenager. He was the first Portuguese player to sign for the club. Although he requested the number 28, his number at Sporting, he received the squad number 7 shirt, which had previously been worn by such United players as George Best, Eric Cantona and David Beckham. Wearing the number 7 became an extra source of motivation for Ronaldo.\n[…]\nIn a 2012 interview, Ronaldo commented on the rivalry, saying: \"I think we push each other sometimes in the competition, this is why the competition is so high.\" Alex Ferguson, Ronaldo's manager during his time at Manchester United, opined: \"I don't think the rivalry against each other bothers them.\n[…]\nSporting CP\n[…]\nManchester United\n[…]\nFA Cup: 2003–04"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cristiano_Ronaldo",
        "situacao": "ok",
        "texto": "Cristiano Ronaldo dos Santos Aveiro (Funchal, 5 de fevereiro de 1985) é um futebolista português que joga como avançado no Al-Nassr. Tornou-se o maior goleador da história do futebol, simultaneamente por clubes e seleções, trajetória que o levou ao recorde de cinco nomeações ao prémio de melhor goleador do mundo pela Federação Internacional de História e Estatísticas do Futebol (IFFHS).\n[…]\nO talento de Cristiano Ronaldo chamou a atenção de Alex Ferguson, sendo este um dos motivos pelo qual, em 2003 e quando tinha apenas 18 anos, Cristiano assinou com o Manchester United, que pagou cerca de 12,24 milhões de libras esterlinas (15 milhões de euros) ao Sporting. Desde então, após seis temporadas, o jogador ganhou três títulos da Premier League, dois da Taça da Liga Inglesa, uma Taça de Inglaterra, duas Supertaças de Inglaterra, uma Liga dos Campeões e um Campeonato do Mundo de Clubes.\n[…]\nRonaldo foi procurado primeiro pelo Arsenal, mas o técnico Arsène Wenger não chegou a um acordo com a direção do Sporting. No entanto, chamou a atenção de Alex Ferguson, então treinador do Manchester United, no verão de 2003, quando o Sporting derrotou o Manchester United por 3–1 na inauguração do estádio Alvalade XXI, em Lisboa.\n[…]\nAvançado versátil, Ronaldo é capaz de jogar tanto nas laterais quanto no centro do campo​ e embora a sua perna habilidosa seja a direita, também é bom com a esquerda. ​Ele está entre os jogadores de futebol mais rápidos do mundo, com e sem bola.​ Taticamente, Ronaldo passou por diversas evoluções e mudanças ao longo de sua carreira. No Sporting e nos primeiros anos no United, Cristiano jogou como central clássico, pela direita, onde geralmente se dedicava a lançar cruzamentos para a área.\n[…]\nLista detalhada com as estatísticas de Cristiano Ronaldo por temporada no clube Real Madrid Realmadrid.com\n[…]\nSporting CP\n[…]\nCristiano Ronaldo no Twitter\n[…]\nCristiano Ronaldo no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "São Paulo Futebol Clube",
      "descricao": "Clube de futebol brasileiro sediado na cidade de São Paulo, com sede no Morumbi."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que técnico dirigiu a encantadora seleção brasileira de 1982 e, dez anos depois, o São Paulo campeão do mundo em Tóquio?",
    "resposta": "Telê Santana",
    "fonte": [
      "https://en.wikipedia.org/wiki/Tel%C3%AA_Santana"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tel%C3%AA_Santana",
        "situacao": "ok",
        "texto": "Telê Santana da Silva, also known as Telê Santana (July 26, 1931 – April 21, 2006) was a Brazilian football manager and former player (right winger). He was born in Itabirito, Minas Gerais.\n[…]\nSantana was the manager of the famous 1982 and 1986 Brazil national squads. The 1982 squad, which consisted of players such as Zico, Sócrates, Falcão, Júnior and Toninho Cerezo, is widely considered one of the best sides to never win the World Cup. Santana was also a highly successful manager of various club teams, including the legendary twice Intercontinental champions São Paulo (1992 and 1993), and was also very influential with Atlético Mineiro and Fluminense.\n[…]\nAfter 1986, Santana returned to club management and took charge of Flamengo in 1988 before beginning a highly successful spell with São Paulo in 1990. With a talented squad featuring players such as Zetti, Cafu, Raí, and Leonardo, São Paulo won the Brazilian championship title in 1991, followed by consecutive Copa Libertadores titles in 1992 and 1993 – the first won by a Brazilian club since 1983.\n[…]\nSantana's spell at São Paulo is most celebrated for its back-to-back Intercontinental Cup victories in Tokyo, beating first Johan Cruyff's FC Barcelona in 1992 and then Fabio Capello's A.C. Milan in 1993. Santana's São Paulo side is widely regarded as one of the greatest club sides in Brazilian football.\n[…]\nSantana is widely recognised as one of the greatest exponents of Futebol Arte, a school of football centred on technical excellence, attacking football and fair play. Santana's philosophy was best embodied by the 1982 Brazil national squad, which was eliminated by Italy after a 3–2 defeat in the knockout stage.\n[…]\nSão Paulo"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tel%C3%AA_Santana",
        "situacao": "ok",
        "texto": "Telê Santana da Silva (Itabirito, 26 de julho de 1931 — Belo Horizonte, 21 de abril de 2006) foi um dos mais importantes treinadores e jogadores da história do futebol brasileiro. Em 2019, figurou na 35ª posição da lista de 50 maiores treinadores de futebol de todos os tempos, publicada pela revista francesa France Football, sendo o único brasileiro.\n[…]\nComo treinador da Seleção na Copa do Mundo de 1982, implantou uma forma de jogo que encantou tanto os torcedores brasileiros como os do resto do mundo, com um futebol bonito e envolvente, aclamado como o melhor da época. Integrou jogadores técnicos como Zico, Sócrates e Falcão, entre outros. Mesmo assim, sua seleção não foi uma unanimidade, pois muitos — inclusive o humorista Jô Soares, que criou o bordão \"Bota ponta, Telê!\" — cobravam a presença de um ponta direita no time.\n[…]\nEm dezembro Telê conquistou novamente o título mundial pelo tricolor — vencendo o Milan por 3–2. A conquista do título mundial, foi o quarto título internacional conquistado pelo São Paulo e também pelo técnico Telê Santana em 1993 — completando, assim, a inédita quadrupla coroa internacional — sendo conquistada por ser campeão de quatro competições internacionais oficiais, com todos os títulos sendo conquistados no mesmo ano.\n[…]\nEm filme, foi lançado em 2009 o documentário Telê Santana: Meio Século de Futebol-Arte, dirigido por Ana Carla Portella e Danielle Rosa.\n[…]\nRIBEIRO, André. Fio de Esperança - Biografia de Telê Santana. São Paulo: Gryphus Editora, 2000.\n[…]\nMALULY, Luciano Victor Barros. O Futebol-arte de Telê Santana no Jornalismo Esportivo de Armando Nogueira. (Dissertação de Mestrado) São Bernardo do Campo: Universidade Metodista de São Paulo, 1998.\n[…]\nPerfil de Telê Santana (em inglês) em LCCN\n[…]\n«Telê Santana na Gazeta Esportiva»\n[…]\n«Telê Santana»  no Museu dos Esportes\n[…]\n«Perfil de Telê Santana»  no Galo Digital",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Carlos Alberto Parreira",
      "descricao": "Treinador brasileiro, técnico da seleção campeã mundial em 1994."
    },
    "angulo": "identidade",
    "tipo": "multipla",
    "pergunta": "Que técnico do tetra, em 1994, tinha sido preparador físico da seleção tricampeã de 1970?",
    "resposta": "Carlos Alberto Parreira",
    "distratores": [
      "Zagallo",
      "Cláudio Coutinho",
      "Telê Santana"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Carlos_Alberto_Parreira"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Carlos_Alberto_Parreira",
        "situacao": "ok",
        "texto": "Carlos Alberto Gomes Parreira (born 27 February 1943) is a Brazilian former football manager who holds the record for attending the most FIFA World Cup tournaments as manager with six appearances. He also managed five different national teams in six editions of the FIFA World Cup. He managed Brazil to victory at the 1994 World Cup, the 2004 Copa América, and the 2005 Confederations Cup. He is also\n[…]\nParreira is one of two coaches that has led five national teams to the World Cup: Kuwait in 1982, United Arab Emirates in 1990, Brazil in 1994 and 2006, Saudi Arabia in 1998 and South Africa in 2010. The other coach, Bora Milutinović, reached this record when he led a fifth team in 2002. Parreira was also involved with the 1970 championship team for Brazil, which he claims was an inspiration for him to aspire to be a national football coach.\n[…]\nAfter Brazil's exit from the World Cup, Parreira was heavily criticized by the Brazilian public and media for playing an outdated brand of football and not using the players available to him properly. Parreira subsequently resigned on July 19, 2006. He coached Brazil to victory in the 1994 FIFA World Cup and was the coach of the South Africa national football team until resigning in April 2008. On October 22, 2009, it was announced he would return as head coach of South Africa.\n[…]\nIn contrast to other previous more offensive-minded managers of the Brazil national team, who were inspired by Brazil's tradition of \"jogo bonito\" and \"futebol arte,\" but who had not won the World Cup since 1970, Parreira was instead known for his more pragmatic and physical attitude as a coach, with a focus on defensive stability.\n[…]\nParreira has coached national squads in 23 games in FIFA World Cup finals. Parreira's coaching record is 10–4–9 (Wins-Draws-Losses). His teams have scored 28 goals and conceded 32. Below is a list of all matches, along with their outcomes:"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Carlos_Alberto_Parreira",
        "situacao": "ok",
        "texto": "Carlos Alberto Gomes Parreira (Rio de Janeiro, 27 de fevereiro de 1943) é um ex-treinador de futebol brasileiro que participou de Copas do Mundo FIFA por cinco seleções diferentes e estando em seis edições do evento. Primeiramente na Copa do Mundo FIFA de 1982 treinou o Kuwait. Na Copa do Mundo FIFA de 1990 que teve a Itália como sede, foi a vez do técnico brasileiro dirigir o Emirados Árabes.\n[…]\nPosteriormente, Parreira assume a Seleção Brasileira de Futebol a partir de 1991, obtendo o auge da sua carreira, ao conquistar o tetracampeonato do Brasil, ao disputar a Copa do Mundo FIFA de 1994 que foi sediada nos Estados Unidos. Na ocasião, o Brasil não vencia uma Copa do Mundo há 24 anos. Na Copa do Mundo FIFA de 1998, Carlos Alberto Parreira, treinou a Arábia Saudita.\n[…]\nPosteriormente, Carlos Alberto Parreira teve duas passagens na Seleção Sul-Africana de Futebol, primeiramente em 2007, em sua passagem pelo país africano houve um hiato no ano de 2008, por motivos pessoais. O retorno acontece, em 2009, no ano seguinte, ele esteve à frente da seleção sul-africana que sediou a Copa do Mundo FIFA de 2010. Carlos Alberto Parreira é o técnico brasileiro que mais dirigiu Seleções de outros países: seis ao todo, em dez passagens.\n[…]\nNo dia 22 de dezembro de 2010, anunciou sua aposentadoria como técnico. Quase dois anos depois, com o retorno de Felipão ao comando da Seleção Brasileira, Parreira assumiu a função de coordenador técnico em novembro de 2012.\n[…]\nCom a demissão de Mano Menezes do cargo de treinador da Seleção Brasileira após o último jogo do ano de 2012 (a conquista do Superclássico das Américas contra a Argentina em Buenos Aires), a CBF contratou o pentacampeão de 2002, Luiz Felipe Scolari, para o seu lugar. A condição imposta por Felipão para aceitar o cargo foi a também contratação de Carlos Alberto Parreira como coordenador-técnico.\n[…]\n«Carlos Alberto Parreira». no Soccerway",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Sport Club Internacional",
      "descricao": "Clube de futebol de Porto Alegre, no Rio Grande do Sul, fundado em 1909, conhecido como Colorado."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Em 2006, no Japão, quem marcou o gol do Internacional na vitória por um a zero sobre o Barcelona de Ronaldinho?",
    "resposta": "Adriano Gabiru",
    "distratores": [
      "Fernandão",
      "Alexandre Pato",
      "Iarley"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/2006_FIFA_Club_World_Cup_final",
      "https://en.wikipedia.org/wiki/Adriano_Gabiru"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/2006_FIFA_Club_World_Cup_final",
        "situacao": "ok",
        "texto": "The 2006 FIFA Club World Cup final took place at the International Stadium Yokohama, Japan on 17 December 2006.\n[…]\nThe match pitted Internacional of Brazil, the CONMEBOL club champions, against Barcelona of Spain, the UEFA club champions. Internacional won 1–0, after a counter-attack led by Iarley and the goal scored by Adriano Gabiru at the 82nd minute, in a match watched by 67,128 people. In doing so, Internacional won their first FIFA Club World Cup/Intercontinental Cup and Barcelona remained without any world club title. Deco was named as man of the match.\n[…]\nFIFA Club World Cup Japan 2006, FIFA.com"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Adriano_Gabiru",
        "situacao": "ok",
        "texto": "Carlos Adriano de Souza Vieira or simply Adriano Gabiru (born 11 August 1977 in Maceió), is a retired Brazilian attacking midfielder.\n[…]\nIn December 2006 he scored the game-winning and only goal in a 1–0 victory for Internacional against Spanish side FC Barcelona for the FIFA Club World Cup crown in Japan.\n[…]\nInternacional\n[…]\nCopa Libertadores da América: 2006\n[…]\nFIFA Club World Cup: 2006\n[…]\nAdriano Gabiru at Sambafoot (archived)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Final_da_Copa_do_Mundo_de_Clubes_da_FIFA_de_2006",
        "situacao": "ok",
        "texto": "A final da Copa do Mundo de Clubes da FIFA de 2006 foi a 3ª final desta competição, realizada anualmente pela FIFA. Foi disputada no Estádio Internacional de Yokohama, em Yokohama, no dia 17 de dezembro, entre o Internacional, campeão da Copa Libertadores da América, e o Barcelona, campeão da Liga dos Campeões da UEFA.\n[…]\nO Internacional conquistou seu primeiro título mundial. A partida foi arbitrada pelo guatemalteco Carlos Batres.\n[…]\nCopa do Mundo de Clubes da FIFA de 2006",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Final da Copa do Mundo de 1966",
      "descricao": "Partida final da Copa do Mundo FIFA de 1966, em Wembley, em que a Inglaterra venceu a Alemanha Ocidental por 4 a 2."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Na final da Copa de 1966, em Wembley, quem marcou três gols na vitória da Inglaterra sobre a Alemanha Ocidental?",
    "resposta": "Geoff Hurst",
    "distratores": [
      "Bobby Charlton",
      "Martin Peters",
      "Jimmy Greaves"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/1966_FIFA_World_Cup_final"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/1966_FIFA_World_Cup_final",
        "situacao": "ok",
        "texto": "The 1966 FIFA World Cup final was a football match played at Wembley Stadium in London on Saturday 30 July 1966 to determine the winner of the 1966 FIFA World Cup, the eighth FIFA World Cup. The match was contested by England and West Germany, with England winning 4–2 after extra time to claim the Jules Rimet Trophy. It was the only time that England hosted or won the World Cup, and also the only \n[…]\nEngland almost won by full time before West German player, Wolfgang Weber, scored a 2–2 equaliser in the 90th minute. The game went into extra time, in which Geoff Hurst scored a controversial goal in the 101st minute to make the score 3–2 after the first 15 minutes of extra time, until Hurst scored again in the final minute to complete his hat-trick, ending the game 4–2 after the extra 30 minutes. He was the only man to score a hat-trick in a World Cup final until Kylian Mbappé did so in 2022.\n[…]\nOne minute before the end of play, the West Germans sent their defenders forward in a desperate attempt to score a last-minute equaliser. Winning the ball, Bobby Moore picked out the unmarked Geoff Hurst with a long pass, which Hurst carried forward while some spectators began streaming onto the field. Hurst, as he later revealed, decided that, if he was not going to score, he needed to boot the ball into the crowd as far as he could, to prevent Germany getting back up.\n[…]\nOne of the enduring images of the celebrations in Wembley immediately after the game was the picture of the captain Bobby Moore holding the Jules Rimet Trophy aloft, on the shoulders of Geoff Hurst and Ray Wilson, together with Martin Peters. In recognition of Moore and other West Ham United players' contribution to the win, the club and Newham Borough Council jointly commissioned a statue of this scene.\n[…]\nThe final is the most watched event ever on British television, as of July 2021, attracting 32.30 million viewers."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Final_da_Copa_do_Mundo_FIFA_de_1966",
        "situacao": "ok",
        "texto": "A Final da Copa do Mundo FIFA de 1966 foi uma partida de futebol disputada no Estádio de Wembley, em Londres, em 30 de Julho de 1966, para determinar o vencedor da Copa do Mundo FIFA de 1966, a oitava Copa do Mundo FIFA. A partida foi disputada pela Inglaterra e a Alemanha Ocidental, com a Inglaterra a vencer por 4–2 após prolongamento conquistando o Troféu Jules Rimet.\n[…]\nFoi a primeira — e única — ocasião em que a Inglaterra sediou ou ganhou uma Copa do Mundo. A partida é lembrada pelos Ingleses com a única Copa do Mundo conquistada e mais importante título internacional, pelo hat-trick de Geoff Hurst — o primeiro em uma final de Copa do Mundo da FIFA — e pelo polémico terceiro golo concedido para a Inglaterra pelo árbitro Gottfried Dienst e seu assistente Tofiq Bahramov .\n[…]\nA equipa da Inglaterra ficou conhecido como as \"wingless wonders\", por conta de sua formação de ataque então nada convencional, descrita na época como um 4-4-2.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Liga dos Campeões da UEFA",
      "descricao": "Principal torneio de clubes da Europa, organizado pela UEFA, disputado desde 1955 como Copa dos Campeões Europeus."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "A Copa dos Campeões Europeus, que deu origem à Liga dos Campeões, nasceu em 1955 de uma proposta de qual jornal esportivo francês?",
    "resposta": "L'Équipe",
    "distratores": [
      "Le Monde",
      "Le Figaro",
      "France-Soir"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/UEFA_Champions_League",
      "https://en.wikipedia.org/wiki/Gabriel_Hanot"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/UEFA_Champions_League",
        "situacao": "ok",
        "texto": "The UEFA Champions League (UCL), commonly known as the Champions League, is an annual club football competition organised by the Union of European Football Associations (UEFA) that is contested by top-division European clubs. The competition begins with a round robin league phase to qualify for the two-legged knockout rounds and the single-leg final.\n[…]\nAfter receiving reports from his journalists over the highly successful South American Championship of Champions of 1948, Gabriel Hanot, editor of L'Équipe, began proposing the creation of a continent-wide tournament. In interviews, Jacques Ferran (one of the founders of the European Champions Cup, together with Gabriel Hanot), said that the South American Championship of Champions was the inspiration for the European Champions Cup.\n[…]\nThe chorus contains the three official languages used by UEFA: English, German, and French. The climactic moment is set to the exclamations 'Die Meister! Die Besten! Les Grandes Équipes! The Champions!'. The anthem's chorus is played before each UEFA Champions League game as the two teams are lined up, as well as at the beginning and end of television broadcasts of the matches.\n[…]\nAn exception to the usual European qualification system happened in 2005, after Liverpool won the Champions League the year before, but did not finish in a Champions League qualification place in the Premier League that season. UEFA gave special dispensation for Liverpool to enter the Champions League, giving England five qualifiers. UEFA subsequently ruled that the defending champions qualify for the competition the following year regardless of their domestic league placing.\n[…]\nStarting from the 2021–22 edition, UEFA introduced the UEFA Champions League Player of the Season award.\n[…]\nIn the same season, UEFA also introduced the UEFA Champions League Young Player of the Season award."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Gabriel_Hanot",
        "situacao": "ok",
        "texto": "Gabriel Hanot (French pronunciation: [ɡabʁijɛl ano]; 6 November 1889 – 10 August 1968) was a French footballer, coach and journalist.\n[…]\nAfter a playing career which included 12 caps for the France national team, Hanot became a journalist and football administrator, also leading the France national team between 1945-49. His main achievements in football are the 1932 introduction of professionalism to French football; formulating the idea to create a European Cup (which has since become the UEFA Champions League); and the launching of the Ballon d'Or.\n[…]\nFollowing an aviation accident in 1919, Hanot gave up football and became a journalist, initially for sporting publication Miroir des sports, for whom he covered golf and cycling, amongst other sports, before turning his focus directly back to football with L'Équipe.\n[…]\nIn December 1934, Hanot used the Miroir des sports, whom he was by this point the director of, to put forth the idea of a European cup contested between club teams, inspired by the recent dramatic growth of aviation. He would eventually return to this idea after the end of World War II, now alongside L'Équipe colleague Jacques Ferran, relaunching the concept in late 1954, and finally seeing the competition fully take shape in 1955 as the European Cup, now known as the UEFA Champions League.\n[…]\nHanot was involved in several developments in association football.[2][5] Although no statues or monuments commemorate his work,[4] two initiatives associated with him remain prominent. The UEFA Champions League was inspired by his proposals,[9][10] while he helped establish the Ballon d'Or.[15]"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Liga_dos_Campe%C3%B5es_da_UEFA",
        "situacao": "ok",
        "texto": "A Liga dos Campeões da UEFA (em inglês:  UEFA Champions League) é uma competição anual de futebol de nível continental, organizada pela União das Associações Europeias de Futebol (UEFA) e disputada por clubes da Europa. É uma das competições mais prestigiadas do mundo e a mais importante de clubes do futebol europeu. É disputada pelas equipes mais bem classificadas nas respectivas ligas nacionais \n[…]\nEstamos arriscando\", escreveu Hanot. A ideia teve todo o apoio do proprietário e diretor do L'Équipe, Jacques Goddet. Já Jacques de Ryswick, o chefe de coluna de futebol do jornal francês, avançava rapidamente no seu projeto de \"campeonato europeu de clubes\". O seu colega Jacques Ferran foi encarregado de elaborar regulamentos. Por fim, foi concebida em Paris em 1955 como a Taça dos Clubes Campeões Europeus, e que em 1992, foi renomeada para Liga dos Campeões da UEFA.\n[…]\nAs quatro principais ligas da Europa tem vagas para quatro equipes na Liga dos Campeões. Michel Platini, o presidente da UEFA, propôs ter um lugar nas três principais ligas e alocá-lo aos vencedores da Copa da Nação. Esta proposta foi rejeitada em uma votação na reunião do Conselho de Estratégia da UEFA.\n[…]\n↑UCL : Se ambos os vencedores da Liga dos Campeões e da Europa League são da mesma associação classificados 1 a 3 e nem se qualificam para a Liga dos Campeões através da sua liga doméstica, a equipe do quarto colocado se qualifica para a Liga Europa.\n[…]\nTodos os anos, a equipe vencedora conquista a Taça dos Clubes de Campeões da Europa, cuja versão atual é atribuída desde 1967. Da temporada 1968–69 até a temporada 2008–09, qualquer equipe que tenha vencido a Liga dos Campeões por três anos consecutivos ou cinco vezes no total recebeu o troféu oficial de forma permanente. Cada vez que um clube conseguia isso, um novo troféu oficial tinha que ser forjado para a temporada seguinte.\n[…]\nHat-tricks na Liga dos Campeões da UEFA",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Substituição (futebol)",
      "descricao": "Troca de um jogador em campo por um reserva durante uma partida de futebol, prevista nas regras do jogo."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "As substituições de jogadores durante as partidas passaram a ser permitidas em Copas do Mundo a partir de qual edição?",
    "resposta": "1970, no México",
    "distratores": [
      "1958, na Suécia",
      "1966, na Inglaterra",
      "1974, na Alemanha"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Substitute_(association_football)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Substitute_(association_football)",
        "situacao": "ok",
        "texto": "In association football, a substitute is a player who is brought on to the pitch during a match in exchange for an existing player who may be tired, injured, or performing poorly. There are also tactical reasons (such as bringing a striker on in place of a defender). A player who has been substituted during a match takes no further part in the game.\n[…]\nSubstitutions were officially added to the Laws of the Game in 1958. Prior to this most games were played with no changes permitted at all, with occasional exceptions in cases of extreme injury or players not arriving to matches on time.\n[…]\nThe International Football Association Board first added Substitution to the Laws of the Game in 1958, although there are recorded instances of substitution being permitted on earlier occasions. A friendly in Glasgow between Lancelot and Crosshill in November 1875 saw a Lancelot player injured and Crosshill \"allow[ed] them to put a fresh man in his place\".\n[…]\nAlso during the qualifying phase for the 1954 World Cup, Horst Eckel of Germany is recorded as having been replaced by Richard Gottinger in their match with the Saarland on 11 October 1953. The use of substitutes in World Cup matches was not allowed until the 1970 tournament.\n[…]\nEach team is permitted to use a maximum of one concussion substitute during a match.\n[…]\nWhen a concussion substitute is used, no change will be made to the maximum number of substitutions permitted by the opposing team.\n[…]\nEach team is permitted to use a maximum of two concussion substitutes during a match.\n[…]\nThe additional substitution may be used concurrently with the concussion substitution or at any time thereafter.\n[…]\nThe term \"super-sub\" refers to a player who is not a regular in the starting line-up but who is noted for often coming on as a substitute and making a significant impact on the game."
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Taça Jules Rimet",
      "descricao": "Troféu da Copa do Mundo FIFA entre 1930 e 1970, entregue em definitivo ao Brasil e roubado no Rio de Janeiro em 1983."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "A taça Jules Rimet, entregue aos campeões mundiais até 1970, trazia em ouro a figura alada de qual deusa grega?",
    "resposta": "Nice, deusa da vitória",
    "fonte": [
      "https://en.wikipedia.org/wiki/FIFA_World_Cup_Trophy"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/FIFA_World_Cup_Trophy",
        "situacao": "ok",
        "texto": "The FIFA World Cup is a trophy made primarily of gold that is awarded to the winners of the FIFA World Cup association football tournament, which takes place every olympiad (four years). Since the advent of the World Cup in 1930, two different trophies have been used: the Jules Rimet Trophy from 1930 to 1970, and thereafter the FIFA World Cup Trophy from 1974 to the present day. As of June 2026, t\n[…]\nThe first trophy, originally named Victory, but renamed in honor of FIFA president Jules Rimet, was made of gold plated sterling silver and a lapis lazuli base. It depicted Nike, the Greek goddess of victory. Brazil was awarded the trophy in perpetuity following their third title in 1970, prompting the commissioning of a replacement. The original Jules Rimet Trophy was stolen in 1983 and has never been recovered.\n[…]\nThe Jules Rimet Trophy was taken to Uruguay for the first FIFA World Cup aboard the Conte Verde, which set sail from Villefranche-sur-Mer, just southeast of Nice, in June 1930. This was the same ship that carried Jules Rimet and the footballers representing France, Romania, and Belgium who were participating in the tournament that year. The first team to be awarded the trophy was Uruguay, the winners of the 1930 World Cup.\n[…]\nThe Brazilian team won the tournament for the third time in 1970, allowing them to keep the real trophy in perpetuity, as had been stipulated by Jules Rimet in 1930. It was put on display at the Brazilian Football Confederation headquarters in Rio de Janeiro, in a cabinet with a front of bullet-proof glass.\n[…]\nOnly one piece of the Jules Rimet Trophy has been found, the original base, which had been replaced in 1954. It was kept in a basement of FIFA's Zürich headquarters until it was rediscovered in 2014.\n[…]\nJules Rimet Trophy\n[…]\nBrazil – 1958, 1962, 1970"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Trof%C3%A9u_da_Copa_do_Mundo_FIFA",
        "situacao": "ok",
        "texto": "O Troféu da Copa do Mundo FIFA é um troféu de ouro concedido aos vencedores da Copa do Mundo FIFA. Desde o advento do torneio em 1930, foram usadas duas versões: a Taça Jules Rimet, de 1930 a 1970, e o Troféu da Copa do Mundo, de 1974 até a atualidade.\n[…]\nO primeiro troféu, originalmente chamado Victory, mas depois renomeado em homenagem ao presidente da FIFA, Jules Rimet, era feito de prata e lápis-lazúli folheado a ouro, e representava Nice, a deusa grega da vitória. O Brasil conquistou-o permanentemente em 1970, levando ao comissionamento de um novo. A Taça Jules Rimet original foi roubada em 1983 e nunca foi recuperada.\n[…]\nEm 1954 esta base foi substituída por outra mais alta feita de lápis-lazúli. Ela tinha 35 centímetros de altura e pesava 3,8 quilos. Compreendia uma xícara decagonal, apoiada por uma figura alada representando Nice, a deusa grega da vitória. A Taça Jules Rimet foi levada ao Uruguai para a primeira Copa do Mundo a bordo do Conte Verde, que partiu de Villefranche-sur-Mer, a sudeste de Nice, em 21 de junho de 1930.\n[…]\nO Brasil venceu o torneio pela terceira vez em 1970, permitindo que o país mantivesse o troféu original permanentemente, como havia sido estipulado por Jules Rimet em 1930. Foi colocado em exibição na sede da Confederação Brasileira de Futebol no Rio de Janeiro em um gabinete com uma frente de vidro à prova de balas. Em 19 de dezembro de 1983, a parte traseira de madeira do gabinete foi aberta à força com um pé de cabra e a taça foi novamente roubada.\n[…]\nDas notáveis tensões dinâmicas do corpo compacto da escultura elevam-se as figuras de dois atletas no momento emocionante da vitória\".\n[…]\nTaça Jules Rimet\n[…]\nBrasil – 1958, 1962, 1970",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Taça Jules Rimet",
      "descricao": "Troféu da Copa do Mundo FIFA entre 1930 e 1970, entregue em definitivo ao Brasil e roubado no Rio de Janeiro em 1983."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Depois de ficar em definitivo com o Brasil, a taça Jules Rimet foi roubada da sede da CBF, no Rio de Janeiro. Em que década?",
    "resposta": "Anos oitenta",
    "fonte": [
      "https://en.wikipedia.org/wiki/FIFA_World_Cup_Trophy"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/FIFA_World_Cup_Trophy",
        "situacao": "ok",
        "texto": "The FIFA World Cup is a trophy made primarily of gold that is awarded to the winners of the FIFA World Cup association football tournament, which takes place every olympiad (four years). Since the advent of the World Cup in 1930, two different trophies have been used: the Jules Rimet Trophy from 1930 to 1970, and thereafter the FIFA World Cup Trophy from 1974 to the present day. As of June 2026, t\n[…]\nThe Jules Rimet Trophy was taken to Uruguay for the first FIFA World Cup aboard the Conte Verde, which set sail from Villefranche-sur-Mer, just southeast of Nice, in June 1930. This was the same ship that carried Jules Rimet and the footballers representing France, Romania, and Belgium who were participating in the tournament that year. The first team to be awarded the trophy was Uruguay, the winners of the 1930 World Cup.\n[…]\nAs Brazilian captain Hilderaldo Bellini heard photographers' requests for a better view of the Jules Rimet Trophy, he lifted it up in the air. Every cup-winning captain since has repeated the gesture.\n[…]\nThe Brazilian team won the tournament for the third time in 1970, allowing them to keep the real trophy in perpetuity, as had been stipulated by Jules Rimet in 1930. It was put on display at the Brazilian Football Confederation headquarters in Rio de Janeiro, in a cabinet with a front of bullet-proof glass.\n[…]\nOnly one piece of the Jules Rimet Trophy has been found, the original base, which had been replaced in 1954. It was kept in a basement of FIFA's Zürich headquarters until it was rediscovered in 2014.\n[…]\nJules Rimet Trophy"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Trof%C3%A9u_da_Copa_do_Mundo_FIFA",
        "situacao": "ok",
        "texto": "O Troféu da Copa do Mundo FIFA é um troféu de ouro concedido aos vencedores da Copa do Mundo FIFA. Desde o advento do torneio em 1930, foram usadas duas versões: a Taça Jules Rimet, de 1930 a 1970, e o Troféu da Copa do Mundo, de 1974 até a atualidade.\n[…]\nO primeiro troféu, originalmente chamado Victory, mas depois renomeado em homenagem ao presidente da FIFA, Jules Rimet, era feito de prata e lápis-lazúli folheado a ouro, e representava Nice, a deusa grega da vitória. O Brasil conquistou-o permanentemente em 1970, levando ao comissionamento de um novo. A Taça Jules Rimet original foi roubada em 1983 e nunca foi recuperada.\n[…]\nComo o capitão brasileiro Hilderaldo Bellini ouviu os pedidos dos fotógrafos para uma melhor visualização da Taça Jules Rimet, ele ergueu-a no ar. Todos os capitães vencedores da Copa desde então repetiram o gesto.\n[…]\nO Brasil venceu o torneio pela terceira vez em 1970, permitindo que o país mantivesse o troféu original permanentemente, como havia sido estipulado por Jules Rimet em 1930. Foi colocado em exibição na sede da Confederação Brasileira de Futebol no Rio de Janeiro em um gabinete com uma frente de vidro à prova de balas. Em 19 de dezembro de 1983, a parte traseira de madeira do gabinete foi aberta à força com um pé de cabra e a taça foi novamente roubada.\n[…]\nQuatro homens foram julgados e condenados à revelia pelo crime. O troféu nunca foi recuperado e acredita-se que ele tenha sido derretido e vendido. Apenas uma peça da Taça Jules Rimet foi encontrada, a base original que a FIFA manteve em um porão da sede da federação em Zurique.\n[…]\nTaça Jules Rimet\n[…]\nBrasil – 1958, 1962, 1970\n[…]\nBrasil – 1994, 2002",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Copa do Mundo FIFA de 1958",
      "descricao": "Sexta Copa do Mundo, disputada na Suécia e vencida pelo Brasil, seu primeiro título mundial."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "O que aconteceu primeiro: o primeiro título mundial da seleção brasileira de futebol ou a inauguração de Brasília?",
    "resposta": "O primeiro título mundial",
    "fonte": [
      "https://en.wikipedia.org/wiki/1958_FIFA_World_Cup",
      "https://en.wikipedia.org/wiki/Bras%C3%ADlia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/1958_FIFA_World_Cup",
        "situacao": "ok",
        "texto": "The 1958 FIFA World Cup was the sixth FIFA World Cup, the quadrennial football tournament for senior national teams. It was played in Sweden from 8 to 29 June 1958. It remains the only Nordic country to have hosted a FIFA World Cup.\n[…]\nThe official ball was the \"Top-Star VM-bollen 1958\" model made by Sydsvenska Läder & Remfabriks AB (aka \"Remmen\" or \"Sydläder\") in Ängelholm. Four FIFA officials conducted a blind test to choose it from 102 candidates.\n[…]\nPreventing the defending champions from meeting the hosts in the group stage, either by seeding or predetermined group positions, was a practiced tradition throughout the history of the FIFA World Cup, with 1934 and 1954 being the only two exceptions. This tradition continued in 1958, with West Germany as defending champion and host nation Sweden both being allocated into the same Western European Pot, which kept them from meeting in the group stage.\n[…]\nFor a list of all squads that appeared in the final tournament, see 1958 FIFA World Cup squads.\n[…]\nFIFA selected the following players for the 1958 FIFA World Cup All-Star Team.\n[…]\nIn 1986, FIFA published a report that ranked all teams in each World Cup up to and including 1986, based on progress in the competition and overall results (not counting play-off results). The rankings for the 1958 tournament were as follows:\n[…]\nPer statistical convention in football, matches decided in extra time are counted as wins and losses. Per FIFA's ranking, the results of play-offs are not considered in the tournament ranking.\n[…]\nThe 1958 FIFA World Cup is depicted in the 2016 American film Pelé: Birth of a Legend which is centered around Pelé and the Brazilian team's journey to winning the tournament.\n[…]\n1958 FIFA World Cup Sweden, FIFA.com"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Bras%C3%ADlia",
        "situacao": "ok",
        "texto": "Brasília ( brə-ZIL-ee-ə; Brazilian Portuguese: [bɾaˈziliɐ, bɾaˈziljɐ] ) is the capital city of Brazil and the Federal District. Located in the Brazilian Highlands in the country's Central-West region, it was founded by President Juscelino Kubitschek on 21 April 1960, to replace Rio de Janeiro as the national capital. Brasília is Brazil's third-most populous city after São Paulo and Rio de Janeiro,\n[…]\nOscar Niemeyer was the chief architect of most public buildings, Joaquim Cardozo was the structural engineer, and Roberto Burle Marx was the landscape designer. Brasília was built in 41 months, and was officially inaugurated in 21 April 1960.\n[…]\nBrasília is twinned with:\n[…]\nBrasília Declarations\n[…]\nIt is a tourist attraction in Brasília, designed by Lúcio Costa and Oscar Niemeyer as a place where the three branches would meet harmoniously.\n[…]\nThe Palácio da Alvorada is the official residence of the president of Brazil. The palace was designed, along with the rest of the city of Brasília, by Oscar Niemeyer and inaugurated in 1958. One of the first structures built in the republic's new capital city, the \"Alvorada\" lies on a peninsula at the shore of Lake Paranoá.\n[…]\nThe main stadiums are Estadio Nacional Mané Garrincha (re-inaugurated on 18 May 2013), the Serejão Stadium (home for Brasiliense) and the Bezerrão Stadium (home for Gama).\n[…]\nBrasília was one of the host cities of the 2014 FIFA World Cup and 2013 FIFA Confederations Cup. Brasília hosted the opening of the Confederations Cup and hosted 7 World Cup games. Brasília also hosted the football tournaments during the 2016 Summer Olympics held in Rio de Janeiro.\n[…]\nRegional Administration of Brasília website\n[…]\nGeographic data related to Brasília at OpenStreetMap\n[…]\nExplore Brasília in the UNESCO collection on Google Arts & Culture\n[…]\n\"The airport: About Inframerica\". Aeroporto de Brasíla. 2020. Archived from the original on 4 July 2019. Retrieved 20 April 2020."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Copa_do_Mundo_FIFA_de_1958",
        "situacao": "ok",
        "texto": "A Copa do Mundo FIFA de 1958 foi a sexta edição da Copa do Mundo FIFA de Futebol, que ocorreu de 10 de junho até 29 de junho de 1958. O evento foi sediado na Suécia, tendo partidas realizadas nas cidades de Borås, Eskilstuna, Estocolmo, Gotemburgo, Halmstad, Helsingborg, Malmö, Norrköping, Örebro, Sandviken, Solna, Uddevalla e Västerås.\n[…]\nEsta Copa do Mundo viu a inscrição e classificação da União Soviética pela primeira vez, e a classificação de todas as nações constituintes do Reino Unido: Inglaterra, Escócia, País de Gales e Irlanda do Norte, com os norte-irlandeses ainda conseguindo a façanha de eliminar a Itália, bicampeã em 1934 e 1938, pela primeira vez na história da competição.\n[…]\nSegundo Pelé, que marcou um hat-trick nesse jogo (o outro gol foi de Didi), a partida contra a França foi a mais difícil do mundial: \" A França era o time que respeitávamos. Não joguei os dois primeiros jogos, o Brasil não foi bem, mas tinha certeza de que, se o Brasil ganhasse da França, seria campeão. Não perderíamos para outra equipe. E o melhor jogo nosso foi com a França. Contra a Suécia, time da casa, não tinha medo.\n[…]\nResultado: Vavá marca gol logo aos nove minutos e vira o jogo ainda no primeiro tempo numa partida excepcional que, mesmo com a derrota por 5 a 2 em casa, a torcida anfitriã aplaudiu o time do Brasil de pé, ao saudar como campeões do mundo Pelé, Vavá, Garrincha, Zito, Mazzola, Nilton Santos, Didi, Gilmar, Zagallo, entre outros. Assim o Brasil sagrava-se pela primeira vez campeão mundial de futebol.\n[…]\nApós o primeiro empate sem gols da história das Copas, entre Brasil e Inglaterra, na primeira fase, os jogadores ficaram sem saber o que fazer em campo. Alguns acharam que o árbitro iria levar o jogo para a prorrogação.\n[…]\n«FIFA - 1958 FIFA World Cup Sweden» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Zinédine Zidane",
      "descricao": "Ex-meio-campista francês, campeão mundial em 1998, depois treinador do Real Madrid."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Zinédine Zidane nasceu em Marselha, filho de imigrantes vindos de qual país africano?",
    "resposta": "Argélia",
    "distratores": [
      "Marrocos",
      "Tunísia",
      "Senegal"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Zinedine_Zidane"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Zinedine_Zidane",
        "situacao": "ok",
        "texto": "Zinedine Yazid Zidane (French: [zinedin zidan]; born 23 June 1972), popularly known as Zizou (French: [zizu]), is a French professional football manager and former player who played as an attacking midfielder. Since July 2026, he is the head coach of the France national team.\n[…]\nZinedine Yazid Zidane was born on 23 June 1972 in La Castellane, a neighbourhood in the 16th arrondissement of Marseille, in Southern France. He is the youngest of five siblings born to Algerian parents Smaïl and Malika, who had immigrated to Paris from the village of Aguemoune in the Berber-speaking region of Kabylia in 1953, before the start of the Algerian War.\n[…]\nZidane himself believes he was at his peak during the tournament, while the UEFA website states, \"In Belgium and the Netherlands, Zidane dominated a major championship in a way no individual had managed since Diego Maradona in 1986. From the opening game against Denmark to the final against Italy, 'Zizou' shone brightly, casting a spell on his opponents with clever flicks, mesmerising stepovers, slaloming runs and masterful vision.\"\n[…]\nUpon his return to France, the Place de la Concorde in Paris was filled with thousands of fans waving flags and rhythmically chanting \"Zizou! Zizou!\", and tributes were led by the French president Jacques Chirac. Chirac's words reflected the feeling of the French public, with polls done in the immediate wake of the incident showing support for Zidane: 61% of French people said they had already forgiven him for his actions while 52% said they understood them.\n[…]\nZinedine Zidane at Real Madrid CF (in English and Spanish)\n[…]\nZinedine Zidane – FIFA competition record (archived)\n[…]\nZinedine Zidane at Olympedia\n[…]\nZinedine Zidane at IMDb\n[…]\nZinedine Zidane collected news and commentary at The New York Times"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Zin%C3%A9dine_Zidane",
        "situacao": "ok",
        "texto": "Zinédine Yazid Zidane (Marselha, 23 de junho de 1972) é um treinador e ex-futebolista francês de origem argelina que atuava como meio-campista. Comanda a Seleção Francesa.\n[…]\nZidane é descendente de argelinos e vivia do sul da França quando iniciou a sua carreira nas categorias de base do Victório Mello Football Club, equipe inexpressiva que disputava campeonatos locais. Apenas uma temporada depois, acabou sendo levado ao não maior Septèmes-les-Vallons, onde permaneceu durante quatro anos. Sua grande habilidade vinha chamando a atenção de grandes equipes da Europa, até finalmente ser levado para um delas.\n[…]\nSendo descendente de argelinos, Zidane teve chances de defender a Argélia; no entanto, segundo boatos na época, o treinador Abdelhamid Kermali o considerava lento demais, por isso nunca o convocou. No entanto, Zidane negou anos mais tarde numa entrevista que isso tenha acontecido, dizendo que ele não poderia defender a Argélia, pois já defendia a França. Sua estreia nos Bleus aconteceu contra a República Tcheca. Entrando aos dezoito minutos do segundo tempo, marcou os dois tentos do empate.\n[…]\nA Copa chegou e, assim como vinha até então, Zidane foi irregular na maior parte do torneio: após uma estreia razoável, diante da África do Sul, complicou a sua \"profecia\" ao, desnecessariamente, pisar em um adversário da Arábia Saudita e ser expulso. O lance lhe valeu dois jogos de suspensão.\n[…]\nMedalha Athir da Ordem do Mérito Nacional da Argélia: 2006\n[…]\n«Zinédine Zidane». no Soccerway\n[…]\n«Zinédine Zidane» (em inglês). no IMDb\n[…]\n«Zinédine Zidane» (em francês). no Archive Today",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Neymar",
      "descricao": "Atacante brasileiro nascido em 1992, maior artilheiro da seleção brasileira, revelado pelo Santos."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Revelado pelo Santos, Neymar nasceu em 1992 em qual cidade da Grande São Paulo?",
    "resposta": "Mogi das Cruzes",
    "distratores": [
      "Guarulhos",
      "Osasco",
      "São Bernardo do Campo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Neymar",
      "https://pt.wikipedia.org/wiki/Neymar"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Neymar",
        "situacao": "ok",
        "texto": "Neymar da Silva Santos Júnior (born 5 February 1992), is a Brazilian professional footballer who plays as an attacking midfielder and a forward for the Campeonato Brasileiro Série A club Santos, which he also captains. He is known for his dribbling, technical ability, agility, passing, and finishing. Often regarded as one of the greatest players of all time, Neymar is both the all-time top goalsco\n[…]\nNeymar was born in Mogi das Cruzes, São Paulo, to Neymar Santos Sr. and Nadine da Silva and had a Christian upbringing. He inherited his name from his father, who is a former footballer and became his son's advisor as Neymar's talents began to grow. Neymar comments on his father's role: \"My father has been by my side since I was little. He takes care of things, my finances and my family.\" Neymar has a very close sibling relationship with his sister Rafaella Beckran.\n[…]\nNeymar started the 2013 Campeonato Paulista scoring twice in the first match, which ended in a 3–1 win over São Bernardo on 19 January 2013. On 3 February, in the Paulista fixture against São Paulo, Santos won 3–1 with Neymar scoring and making two assists. Often compared to Pelé early in his career, he appeared on the cover of Time magazine with the title 'The Next Pelé' in February 2013. He scored all four goals as Santos beat União Barbarense 4–0 in the Paulista on 13 April.\n[…]\nIn 2021, UOL included Neymar in their ranking of the 'Top 5 Greatest Players in the History of Santos'.\n[…]\nSantos opened an investigation into Neymar after the player allegedly physically assaulted Robinho Júnior by tripping him and giving him a \"violent slap to the face\" in retaliation for Robinho Júnior dribbling past him during a training session at the CT Rei Pelé on 3 May 2026. Neymar later apologised for the incident, and Robinho Júnior's representatives subsequently gave up on notifying the club.\n[…]\nNeymar at Olympedia\n[…]\nNeymar at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Neymar",
        "situacao": "ok",
        "texto": "Neymar da Silva Santos Júnior (Mogi das Cruzes, 5 de fevereiro de 1992) é um futebolista brasileiro que atua como meia-atacante no Santos.\n[…]\nFilho do mecânico Neymar da Silva Santos (de quem herdou o nome) e Nadine Santos, Neymar nasceu na cidade de Mogi das Cruzes, na Região Metropolitana de São Paulo, em 5 de fevereiro de 1992, mas ainda muito jovem mudou-se a São Vicente e em seguida a Santos. Em 2003, aos 11 anos de idade, chegou às categorias de base do Santos, donde não saiu mais até tornar-se profissional.\n[…]\nTido como grande promessa do Santos, Neymar fez sua estreia no time profissional em 7 de março de 2009, aos dezessete anos, na partida contra o Oeste, no estádio do Pacaembu, pelo Campeonato Paulista. Seu primeiro gol como profissional vestindo a camisa santista foi contra o Mogi Mirim, na Vila Belmiro, em 15 de março, também pelo campeonato estadual. Destaque nas semifinais dessa competição contra o Palmeiras, disputou sua primeira final profissional contra o Corinthians.\n[…]\nEm 6 de janeiro de 2026, o Santos anunciou a renovação do contrato de Neymar, que estendeu seu contrato com o time alvinegro até o final da temporada.\n[…]\nDevido ao extremo assédio ao jogador, o Santos criou um departamento para cuidar apenas da imagem de Neymar, hoje administrada pelo especialista em marketing Eduardo Musa. Além do advogado Lissandro Florêncio e do empresário Wagner Ribeiro (que cuida dos contratos ligados ao futebol), Neymar também tem seus passos acompanhados pela 9ine, a empresa de marketing esportivo recém-criada por Ronaldo. Outro grande administrador da carreira do atleta é o seu pai e xará, Neymar da Silva Santos."
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Maracanazo",
      "descricao": "Vitória do Uruguai sobre o Brasil por 2 a 1 no Maracanã, em 16 de julho de 1950, que decidiu a Copa do Mundo daquele ano."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "No jogo que decidiu a Copa de 1950, entre Brasil e Uruguai no Maracanã, cerca de quantas pessoas lotavam o estádio?",
    "resposta": "Cerca de duzentas mil",
    "distratores": [
      "Cerca de cinquenta mil",
      "Cerca de cem mil",
      "Cerca de trezentas mil"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Uruguay_v_Brazil_(1950_FIFA_World_Cup)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Uruguay_v_Brazil_(1950_FIFA_World_Cup)",
        "situacao": "ok",
        "texto": "The match between Uruguay and Brazil was the decisive match of the final stage at the 1950 FIFA World Cup. It was played at the Maracanã Stadium in the then-capital of Brazil, Rio de Janeiro, on 16 July 1950.\n[…]\nThe last survivor of the game was Uruguay's Alcides Ghiggia, who died on 16 July 2015 at the age of 88.\n[…]\nThe 1950 FIFA World Cup was the only version of the tournament to be played with a round-robin final round; as such, is the only FIFA World Cup to date to not have a deciding knock-out final. However, as the result of the match directly determined the champions, the match has come to be commonly referred to as the final, even by FIFA itself.\n[…]\nMoreover, in the Copa América, also held in Brazil the previous year, the hosts had won by scoring 46 goals in just eight matches. Ecuador was beaten 9–1, Bolivia 10–1, and runners-up Paraguay were defeated with a margin of 7–0. Further, Brazil beat Uruguay 5–1.\n[…]\nThe term \"Phantom of '50\" was later used to refer to the fear that Brazilians and Brazil national football team feel of the Uruguay national football team due to this loss. Each time Brazil and Uruguay play at Maracanã Stadium, the theme resurfaces.\n[…]\nThe theme reappeared in the Brazilian press as Uruguay qualified for the 2014 FIFA World Cup hosted by Brazil. Uruguay often emphasized the theme, giving the team motivation and encouragement in matches against Brazil. Ironically, however, Uruguay lost 2–0 and were eliminated by Colombia at the very same Maracanã Stadium in the round of 16 of the tournament.\n[…]\nBrazil–Uruguay football rivalry\n[…]\nEl Maracanazo y la leyenda- Como explicar lo inexplicable Archived 27 November 2017 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Maracana%C3%A7o",
        "situacao": "ok",
        "texto": "Maracanaço (em espanhol: Maracanazo) é o termo usado em referência à partida que decidiu a Copa do Mundo FIFA de 1950 disputada entre as Seleções do Brasil, anfitriã na ocasião, e do Uruguai, que venceu por 2–1 e deixou os brasileiros desolados. A partida ocorreu no recém inaugurado Estádio do Maracanã e é considerada um dos maiores reveses da história do futebol e, em particular, um dos maiores v\n[…]\nApesar de não ter sido estruturada dessa maneira, a rodada final tinha no jogo Espanha-Suécia a disputa do \"terceiro lugar\", já que nenhuma das Seleções tinha chances matemáticas de ser campeã do torneio. Brasil-Uruguai era o \"jogo decisivo\". Um empate garantiria o título ao Brasil, devido ao número de pontos, e o Uruguai apenas a vitória para ser campeão da Copa.\n[…]\nNa manhã de domingo, 16 de julho de 1950, as ruas do Rio de Janeiro estavam em polvorosa. Foi improvisado um carnaval sob o som de \"O Brasil precisa vencer!\". Este espírito encorajador não cessou, até o início da partida final, que lotou o lendário Estádio do Maracanã com um público de aproximadamente 200 mil pessoas, um recorde mantido até hoje.\n[…]\nOutra das táticas psicológicas do capitão uruguaio foi a de comprar vários exemplares dos jornais que já proclamavam o Brasil como campeão do mundo, espalhá-los no chão dos banheiros dos vestiários e encorajar os companheiros a urinar nos jornais.\n[…]\nTodas as seleções da Copa jogavam no esquema 3-2-2-3 conhecido como WM. O Brasil utilizava a diagonal, uma variação do WM criada por Flávio Costa. Mas o Uruguai atuou de forma diferente na final. Jonathan Wilson descreveu a tática uruguaia: \"O técnico do Uruguai, Juan López Fontana, havia visto como a Suíça dominou o Brasil na primeira fase de grupos com seu sistema ferrolho, com os jogadores atrás da linha da bola e um zagueiro bem recuado, como último homem.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Seleção Húngara de Futebol",
      "descricao": "Seleção nacional de futebol da Hungria, vice-campeã mundial em 1938 e 1954."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Em 1953, em Wembley, a Hungria de Puskás impôs à Inglaterra sua primeira derrota em casa para uma seleção de fora das ilhas britânicas. Qual foi o placar?",
    "resposta": "Seis a três",
    "distratores": [
      "Quatro a dois",
      "Três a um",
      "Cinco a zero"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/England_3%E2%80%936_Hungary_(1953)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/England_3%E2%80%936_Hungary_(1953)",
        "situacao": "inexistente",
        "texto": ""
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Copa do Mundo FIFA de 2002",
      "descricao": "Décima sétima Copa do Mundo, disputada no Japão e na Coreia do Sul e vencida pelo Brasil."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Na Copa de 2002, o famoso ataque brasileiro dos três erres tinha Ronaldo, Rivaldo e quem?",
    "resposta": "Ronaldinho Gaúcho",
    "fonte": [
      "https://en.wikipedia.org/wiki/2002_FIFA_World_Cup",
      "https://en.wikipedia.org/wiki/Ronaldinho"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/2002_FIFA_World_Cup",
        "situacao": "ok",
        "texto": "The 2002 FIFA World Cup (Korean: 2002 FIFA 월드컵 한국/일본; Japanese: 2002 FIFAワールドカップ 韓国/日本) also branded as Korea Japan 2002, was the 17th FIFA World Cup, the quadrennial football world championship for men's national teams organized by FIFA. It was held from 31 May to 30 June 2002 at sites in South Korea and Japan, with its final match hosted by Japan at International Stadium in Yokohama.\n[…]\nSpain and the Republic of Ireland played in Suwon, where Spain led most of the match 1–0 until a late penalty kick scored by Robbie Keane made the match go to extra time, where Spain emerged victorious in a penalty shoot-out. The United States beat CONCACAF rivals Mexico 2–0 in Jeonju with Brian McBride and Landon Donovan scoring the goals. Brazil defeated Belgium 2–0 in Kobe, with an amazing volley by Rivaldo and a splendid counter-attack goal by Ronaldo.\n[…]\nIn the final match held in Yokohama, Japan, two goals from Ronaldo secured the World Cup for Brazil as they claimed victory over Germany. Ronaldo scored twice in the second half and, after the game, won the Golden Shoe award for the tournament's leading scorer with eight goals. This was the fifth time Brazil had won the World Cup, cementing their status as the most successful national team in the history of the competition.\n[…]\nRonaldo won the Golden Shoe after scoring eight goals. In total, 161 goals were scored by 109 players, with three of them credited as own goals. Two of those own goals were in the same match, marking the first time in FIFA World Cup history that own goals had been scored by both teams in the same match.\n[…]\nMost red cards (player): 1  Roberto Acuña, Beto, Claudio Caniggia, Nastja Čeh, Salif Diao, Thierry Henry, Rafael Márquez, Alpay Özalan, Carlos Paredes, João Pinto, Carsten Ramelow, Ronaldinho, Shao Jiayi, Patrick Suffo, Francesco Totti, Hakan Ünsal, Boris Živković\n[…]\n2002 FIFA World Cup Korea/Japan, FIFA.com"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Ronaldinho",
        "situacao": "ok",
        "texto": "Ronaldo de Assis Moreira (born 21 March 1980), commonly known as Ronaldinho Gaúcho or simply Ronaldinho, is a Brazilian professional footballer who plays as an attacking midfielder or left winger for Serie C club Ravenna. Widely regarded as one of the greatest players of all time, he is the only player in history to have won a FIFA World Cup, a Copa América, a FIFA Confederations Cup, a UEFA Champ\n[…]\nIn his international career with Brazil, Ronaldinho earned 97 caps, scored 33 goals, and represented them in two FIFA World Cups. After debuting with a 1999 Copa América title, Ronaldinho became a core part of Brazil's 2002 FIFA World Cup victory. Positioned alongside Ronaldo and Rivaldo in the team's attacking trio, his performances earned him a spot in the World Cup All-Star Team.\n[…]\nRonaldinho Gaúcho is a Brazilian celebrity comic strip by Mauricio de Sousa, syndicated by Atlantic Syndication. It features a fictionalised version of Ronaldinho as a child. The strip was created in 2006, when the 2006 FIFA World Cup was taking place in Germany. It ran until 2015.\n[…]\nIt was adapted into an animated television series as Ronaldinho Gaucho's Team, produced by Italian studio GIG Italy Entertainment, with the coproduction of MSP (Mauricio de Sousa Produções).\n[…]\nIn 2014, because of the FIFA World Cup held in Brazil, Ronaldinho Gaúcho's short animated series was acquired by the paid children's channel Gloob. At the same time, the Discovery Kids channel aired the series \"Pelezinho in: Planet Soccer\". The series \"Pelezinho in: Planet Soccer\" was also launched, usually passing during Discovery Kids commercials, and Neymar Jr. by Nickelodeon.\n[…]\nRonaldinho Gaúcho official website at the Wayback Machine (archived 6 March 2010) (in Spanish, Portuguese, English, and Italian)\n[…]\nRonaldinho – FIFA competition record (archived)\n[…]\nRonaldinho at Olympedia\n[…]\nRonaldinho at the Comitê Olímpico do Brasil  (in Portuguese)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Copa_do_Mundo_FIFA_de_2002",
        "situacao": "ok",
        "texto": "Copa do Mundo (português brasileiro) ou Campeonato do Mundo de Futebol (português europeu) FIFA de 2002 foi a décima sétima edição da Copa do Mundo FIFA de Futebol que reuniu 32 equipes entre 31 de maio a 30 de junho. O Brasil conquistou pela quinta vez o título mundial, depois de derrotar a Alemanha na final.\n[…]\nFoi a primeira vez que dois países sediaram unidos o evento, a primeira vez que três seleções — França, Japão e Coreia do Sul — estavam classificadas automaticamente e a primeira vez que uma edição da Copa não aconteceu na Europa ou nas Américas.\n[…]\nUm total de 199 equipes tentaram a sua sorte para se classificar para o FIFA World Cup, processo que começou em 1999, um ano depois da Copa de 1998. A França, que estava defendendo o título de campeões do Mundial de 1998; e os co-anfitriões do Mundial de 2002, Coreia do Sul e Japão, classicaram-se automaticamente e não jogaram os jogos de classificação (sendo esta a última vez que os campeões se classificaram automaticamente).\n[…]\nA Rede Globo obteve exclusividade na TV aberta e transmitiu todos os jogos da Copa com vários narradores, e todos os dias a jornalista Fátima Bernardes apresentou o Jornal Nacional direto da concentração da seleção brasileira. O canal a cabo SporTV também transmitiu o torneio.\n[…]\nMesmo com o horário pouco sugestivo, com partidas durante a madrugada e as primeiras horas da manhã, os jogos tiveram excelentes índices de audiência, o que indica que boa parte do povo brasileiro acompanhou assiduamente os jogos. Boa parte da população pode assistir à final, visto que no Brasil os dias de partida de Copa do Mundo são decretadas folgas e o comércio permanece fechado.\n[…]\n«FIFA.com - 2002 FIFA World Cup Korea/Japan» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Copa do Mundo FIFA de 1970",
      "descricao": "Nona Copa do Mundo, disputada no México e vencida pelo Brasil, seu terceiro título mundial."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Na seleção campeã de 1970, Pelé, Tostão, Gérson e Jairzinho tinham a companhia de qual meia canhoto, de bigode e chute fortíssimo?",
    "resposta": "Rivellino",
    "distratores": [
      "Clodoaldo",
      "Piazza",
      "Everaldo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Roberto_Rivellino",
      "https://en.wikipedia.org/wiki/1970_FIFA_World_Cup"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Roberto_Rivellino",
        "situacao": "ok",
        "texto": "Roberto Rivellino (Brazilian Portuguese: [ʁoˈbɛʁtu ʁiveˈlĩnu]; born 1 January 1946), known mononymously as Rivellino, is a Brazilian football pundit and former player who was one of the key members of Brazil's 1970 FIFA World Cup-winning team.\n[…]\nThe son of Italian immigrants from Macchiagodena, Isernia, Rivellino played as an attacking midfielder and was renowned for his iconic moustache, powerful long-range shooting, accurate passing, vision, close control, dribbling and ability to bend free kicks. In 2004, he was named by Pelé in the FIFA 100 list of the world's greatest living players.\n[…]\nRivellino currently works as a pundit for TV Cultura.\n[…]\nRivellino was a key member of Brazil's 1970 FIFA World Cup winning team, which is often cited as the greatest-ever World Cup team. Wearing the number 11 jersey, Rivellino was deployed on the left side of midfield and scored three goals, including the powerful bending free-kick against Czechoslovakia, which earned him the nickname \"Patada Atómica\" (Atomic Kick) by Mexican fans. Rivellino also played in the 1974 and 1978 FIFA World Cups, finishing in fourth and third place respectively.\n[…]\nRegarding the 2014 FIFA World Cup held in his country, Rivellino criticized the inclusion of the Amazonian city of Manaus with its stadium Arena da Amazônia in the hosting venues, saying \"it’s absurd to play in Manaus. You start sweating the moment you leave the locker room\".\n[…]\nScores and results list Brazil's goal tally first, score column indicates score after each Rivellino goal.\n[…]\nFIFA World Cup: 1970\n[…]\nFIFA World Cup All-Star Team player: 1970; third place: 1978\n[…]\nRivellino Sport Center\n[…]\nRivellino from the Confederação Brasileira de Futebol\n[…]\nRivellino manager profile at J.League (archive) (in Japanese)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/1970_FIFA_World_Cup",
        "situacao": "ok",
        "texto": "The 1970 FIFA World Cup was the ninth edition of the FIFA World Cup, the quadrennial international football championship for men's senior national teams. Held from 31 May to 21 June in Mexico, it was the first World Cup tournament held outside Europe and South America, and also the first hosted in North America. Teams representing 75 nations from all six populated continents entered the competitio\n[…]\nThe win gave Brazil their third World Cup title, which allowed them to permanently keep the Jules Rimet Trophy, and a new trophy was introduced in 1974. The victorious team, led by Carlos Alberto and featuring players such as Pelé, Gérson, Jairzinho, Rivellino and Tostão, is often cited as the greatest football team of all time. They achieved a perfect record of wins in all six games in the finals, as well as winning all their qualifying fixtures.\n[…]\nIn the final, Brazil opened the scoring when Pelé headed in a cross from Rivellino in the 18th minute, but Roberto Boninsegna equalised for Italy after a series of blunders in the Brazilian defence. The match remained level until the 65th minute when a powerful shot from Gérson restored the Brazilians' lead.\n[…]\nThe eventual champions Brazil, led by Carlos Alberto, and featuring Pelé, Clodoaldo, Gérson, Jairzinho, Rivellino, and Tostão, is often cited as the greatest-ever World Cup team. They won all of their six games on the way to the title, and had also won every one of their qualifying fixtures. Jairzinho's feat of not only scoring in every finals match, but also winning each finals match likewise has yet to be equalled.\n[…]\nForming a partnership with FIFA in 1970, Panini published its first FIFA World Cup sticker album for the 1970 World Cup, initiating a global craze for collecting and trading stickers. In 2017, a complete 1970 World Cup Panini sticker album signed by Pelé sold for a record £10,450.\n[…]\nPelé\n[…]\nRivellino\n[…]\nFIFA Technical Report"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Roberto_Rivellino",
        "situacao": "ok",
        "texto": "Roberto Rivellino (São Paulo, 1 de janeiro de 1946) é um ex-futebolista ítalo-brasileiro que atuava como meio-campista ou ponta-esquerda. É frequentemente considerado um dos melhores jogadores da história do futebol.\n[…]\nNa Copa do Mundo FIFA de 1970 realizada no México, foi um dos grandes destaques da Seleção Brasileira tricampeã do mundo no México. Para muitos especialistas, essa Seleção é tida como o melhor time de futebol já formado numa Copa do Mundo, tendo jogadores como Pelé, Tostão, Carlos Alberto Torres, Gérson, Jairzinho, entre muitos outros, como o próprio Rivellino, que jogou com a camisa 11 nesse Mundial.\n[…]\nPara a Copa do Mundo FIFA de 1974, realizada na Alemanha Ocidental, Rivellino foi convocado pela segunda vez para um Mundial. Dessa vez mais experiente, e herdando a camisa 10 que pertencera a Pelé quatro anos antes, o meia foi como o grande craque da Seleção Brasileira ao lado de Jairzinho.\n[…]\nConvocado por Cláudio Coutinho para Copa do Mundo FIFA de 1978, realizada na Argentina, Rivellino acabou ficando na reserva de Zico na maior parte da competição por estar contundido. Em sua terceira e última Copa do Mundo, a Seleção Brasileira conseguiu o terceiro lugar da competição, que teve a Seleção Argentina como campeã.\n[…]\nOutro gol de falta histórico foi o que Rivellino fez na Copa do Mundo FIFA de 1974, em Hanôver. O meio-campista mandou uma de suas \"patadas\" na cobrança de falta e Jairzinho, que ficou entre a barreira e seria atingido pela bola, num lance rápido se jogou no chão para não atrapalhar a trajetória do chute. Com isso, o goleiro Jürgen Croy nada pôde fazer para defender a finalização certeira de Rivellino, e o Brasil venceu a Alemanha Oriental por 1–0.[carece de fontes]?",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Lionel Messi",
      "descricao": "Atacante argentino ídolo do Barcelona, campeão mundial com a Argentina em 2022."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Em 2000, o primeiro compromisso do Barcelona com o menino Lionel Messi foi rabiscado em qual papel improvisado?",
    "resposta": "Um guardanapo",
    "distratores": [
      "Um bilhete de metrô",
      "Uma toalha de mesa",
      "Um ingresso de jogo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Lionel_Messi"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lionel_Messi",
        "situacao": "ok",
        "texto": "Lionel Andrés \"Leo\" Messi (born 24 June 1987) is an Argentine professional footballer who plays as a forward for and captains the Major League Soccer club Inter Miami. Widely regarded as one of the greatest players in history, he played for the Argentina national team for 21 years. During his career, he has set numerous records for individual accolades won, including eight Ballons d'Or, six Europe\n[…]\nAs the Messi family had relatives in Catalonia, they sought to arrange a trial with Barcelona in September 2000, when Messi was 13. First-team director Carles Rexach immediately wanted to sign him, but the board of directors hesitated; at the time it was highly unusual for European clubs to sign foreign players of such a young age. On 14 December, an ultimatum was issued for Barcelona to prove their commitment, and Rexach, with no other paper at hand, wrote a contract on a paper napkin.\n[…]\nHis former Barcelona manager Pep Guardiola once stated, \"Messi is the only player that runs faster with the ball than he does without it.\" Messi is predominantly a left-footed player, although he has improved his ability with his weaker right foot since his mid-20s. He usually begins dribbling runs with the outside of his left foot, while using the inside of that foot to score and provide passes and assists.\n[…]\nMessi has a close relationship with his immediate family members, particularly his mother, Celia, whose face is tattooed on his left shoulder. His professional affairs are largely run as a family business. His father Jorge was his agent and manager from 2000 until 2026, when he died at the age of 68. His oldest brother, Rodrigo, handles his daily schedule and publicity.\n[…]\nLionel Messi at BDFutbol\n[…]\nLionel Messi at Soccerbase\n[…]\nLionel Messi at Soccerway (archive)\n[…]\nLionel Messi at National-Football-Teams.com\n[…]\nLionel Messi – FIFA competition record (archived)\n[…]\nLionel Messi – UEFA competition record (archive)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lionel_Messi",
        "situacao": "ok",
        "texto": "Lionel Andrés Messi Cuccittini (Rosário, 24 de junho de 1987) é um futebolista argentino que atua como atacante no Inter Miami. Como capitão da Seleção Argentina, venceu a Copa do Mundo de 2022. Possui oito prêmios Bola de Ouro da France Football, oito títulos de Melhor Jogador do Mundo pela FIFA, dois Prêmios Laureus de Melhor Esportista, seis Chuteiras de Ouro da Europa e, com 49 conquistas cole\n[…]\n“Eu o contratei em 30 segundos! Ele me chamou muita atenção. Em meus 40 anos de futebol, jamais havia visto coisa semelhante. De cinco situações de gol, converteu quatro. E tem uma habilidade excepcional. Me lembrou o melhor Maradona. Seu primeiro contrato eu assinei, simbolicamente, em um guardanapo. Queria contratá-lo o quanto antes. Não podia deixá-lo escapar.”\n[…]\nA Final da Liga dos Campeões da UEFA de 2008–09 foi disputada em 27 de maio de 2009, no Estádio Olímpico de Roma, na Itália, entre Manchester United e Barcelona. O confronto também marcou o primeiro grande duelo entre Lionel Messi e Cristiano Ronaldo em uma decisão continental, simbolizando o início da rivalidade entre ambos os jogadores.\n[…]\nNo dia 22 de fevereiro de 2012, Diego Maradona revelou estar cansado de suas comparações com Lionel Messi. Segundo Maradona, ele suplicaria para deixar o jogador do Barcelona em paz até que ele encerre sua carreira como jogador de futebol.\n[…]\nNo início de 2011, Messi colocou um fim num relacionamento de longa data que mantinha com Antonela. Pouco tempo depois, em agosto do mesmo ano, os dois demonstraram publicamente ter reatado o romance ao serem fotografados juntos na ilha de Ibiza, leste da Espanha, durante as férias do jogador. Em novembro de 2012, Lionel e Antonela tiveram o seu primeiro filho, Thiago, nascido em Barcelona. O segundo filho do casal, Mateo, nasceu em 2015.\n[…]\n«Lionel Messi» (em inglês). no Footballdatabase\n[…]\n«Lionel Messi» (em inglês). no site oficial do Barcelona",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  }
]

---

# MANIFESTO

# Manifesto de Perguntas — Mestre2

> **Versão preliminar 0.94 — 2026-11-02**
>
> Este documento define **o que é uma boa pergunta** no Mestre2 e **como o banco de perguntas é organizado e produzido**. Vale para qualquer pessoa ou modelo que crie, revise ou processe perguntas.
>
> Ele tem duas partes:
> - **Parte I — Regras de conteúdo (§1 a §9):** o que uma pergunta deve ser. É a parte que o gerador e o crítico automáticos recebem.
> - **Parte II — Organização e processo (§10 a §18):** esquemas, fluxo de produção, decisões, pendências, o jogo, o app e a programação até 10 000 e até 20 000 perguntas. É a referência de quem mantém o projeto.
>
> Arquivos relacionados:
> - [`pergunta.schema.json`](pergunta.schema.json) e [`ancora.schema.json`](ancora.schema.json): esquemas
> - [`temas_subtemas.json`](temas_subtemas.json): lista canônica de temas e subtemas
> - [`exemplos_perguntas.json`](exemplos_perguntas.json) · [`exemplos_ancoras.json`](exemplos_ancoras.json)
> - [`proposta_temas_subtemas.md`](proposta_temas_subtemas.md): histórico da revisão da lista canônica
> - [`../pipeline/README.md`](../pipeline/README.md): o pipeline que produz as perguntas
> - [`../app/`](../app/): o app que usa as perguntas numa partida (§16)
> - [`modo_trilha_da_vida.md`](modo_trilha_da_vida.md): rascunho do segundo modo de jogo, em concepção (§15)
> - [`modo_pokemon.md`](modo_pokemon.md): o modo Pokémon e a coleção de perguntas de pokémon (§6, §15, §16, §17)

---

# Parte I — Regras de conteúdo

## 1. Princípios

1. **As perguntas vêm antes das regras.** O banco não depende de nenhuma regra de jogo. Um bom banco serve a qualquer regra, e o contrário não é verdade.
2. **A pergunta é ouvida, não lida.** Quem responde nunca vê o texto, e só vê uma figura quando a pergunta tiver uma (§6). Quem lê é um jogador comum, não um apresentador, e o papel muda a cada pergunta (§15). Se não funciona em voz alta, não funciona.
3. **Uma pergunta, uma resposta.** Se duas respostas podem ser defendidas, a pergunta está errada.
4. **Profundidade vem do fato, não da obscuridade.** Uma pergunta surpreendente sobre algo famoso vale mais que uma pergunta sobre algo que ninguém conhece.
5. **A variedade é medida, não esperada.** Cada pergunta tem uma âncora e um ângulo, e o equilíbrio do banco é conferido com números.
6. **Toda pergunta tem fonte e resiste ao tempo.** Nada de "atual", "recente" ou recordes que ainda podem ser batidos.
7. **Errar deve ser interessante.** Quem erra deve pensar "que legal", e não "que injusto".
8. **Menos e melhor.** Na dúvida, descarte.
9. **O esquema é estável.** Ele só muda por acréscimo de campos opcionais, nunca por remoção, renomeação ou mudança de tipo (§10).
10. **O fluxo é automático.** Nenhuma etapa depende de aprovação humana. A revisão humana é uma auditoria opcional, não um gargalo (§11).

---

## 2. Como uma pergunta é classificada

Cada pergunta tem quatro coordenadas:

| Coordenada | Responde a | Origem dos valores |
|---|---|---|
| `tema` | Qual área do conhecimento? | Lista fechada (§3) |
| `subtema` | Qual recorte dentro do tema? | Lista fechada (§3) |
| `ancora` | Sobre quem ou o quê, especificamente? | Cadastro de âncoras (§4) |
| `angulo` | Que tipo de coisa se pergunta? | Lista fechada (§5) |

- **`tema` e `subtema`** organizam o banco e permitem encomendar lotes.
- **`ancora`** controla a **profundidade** e a **repetição**: quantas perguntas existem sobre cada entidade.
- **`angulo`** controla a **variedade**: a mesma âncora, perguntada de ângulos diferentes, gera perguntas genuinamente diferentes.

---

## 3. Temas e subtemas

A lista canônica tem **8 temas e 73 subtemas** e fica em [`temas_subtemas.json`](temas_subtemas.json):

| Tema | Subtemas |
|---|---|
| Geografia | Países e Capitais · Cidades e Monumentos · Relevo e Maravilhas Naturais · Rios e Lagos · Oceanos, Mares e Ilhas · Clima e Biomas · Povos e Idiomas · Bandeiras e Símbolos · Geografia do Brasil |
| História | Pré-História e Idade do Bronze · Egito Antigo · Grécia Antiga · Roma Antiga · Antigas Civilizações do Oriente · Américas Pré-Colombianas · Idade Média · Idade Moderna · Idade Contemporânea · Primeira Guerra Mundial · Segunda Guerra Mundial · História do Brasil · História da África |
| Natureza | Mamíferos · Aves, Répteis e Anfíbios · Vida Marinha · Insetos e Invertebrados · Plantas e Fungos · Dinossauros e Fósseis · Evolução Humana · Ecossistemas e Ambientes Extremos · Geologia e História da Terra |
| Ciências | Astronomia e Espaço · Física · Química · Matemática · Corpo Humano e Medicina · Tecnologia e Computação · Invenções e História da Ciência · Biologia e Genética · Meio Ambiente e Energia |
| Artes e Pensamento | Literatura Brasileira · Literatura Mundial · Pintura · Escultura e Arquitetura · Música Clássica · Teatro e Ópera · Mitologia · Religiões · Filosofia |
| Entretenimento | Cinema · Séries e TV · Música Brasileira · Música Internacional · Jogos Eletrônicos · Anime e Mangá · Quadrinhos · Jogos de Tabuleiro e Cartas |
| Esportes | Futebol · Vôlei · Basquete · Tênis · Automobilismo · Olimpíadas · Lutas e Artes Marciais · Outras Modalidades |
| Cotidiano | Culinária e Bebidas · Língua Portuguesa e Expressões · Marcas e Produtos · Folclore e Tradições Brasileiras · Costumes pelo Mundo · Objetos do Dia a Dia · Moda e Vestuário · Transportes |

- Cada pergunta tem **um tema e um subtema**, escritos **exatamente** como na lista, com acentos e maiúsculas.
- Uma **pequena sobreposição** entre subtemas é tolerada.
- **A lista só cresce por acréscimo.** Nenhum subtema é renomeado, dividido ou fundido, para não reclassificar perguntas já existentes.
- **Escopo dos subtemas acrescentados em 2026-10-01:**
  - *Geografia do Brasil:* estados, capitais, regiões, relevo e rios do Brasil. Países e Capitais fica com os outros países.
  - *História da África:* reinos, impérios e personagens africanos, da Antiguidade à descolonização. O Egito faraônico continua em Egito Antigo.
  - *Biologia e Genética:* células, DNA, hereditariedade, evolução e classificação dos seres vivos. O corpo humano e as doenças continuam em Corpo Humano e Medicina.
  - *Meio Ambiente e Energia:* fontes de energia, poluição, reciclagem, aquecimento global e conservação. Climas e biomas continuam em Geografia › Clima e Biomas.
- **Regra de desempate:** quando dois subtemas servem, vale **o mais específico**. Uma pergunta sobre o Dia D é *Segunda Guerra Mundial*, e não *Idade Contemporânea*.

---

## 4. Âncoras

A âncora é **a entidade sobre a qual a pergunta é feita**: uma pessoa, lugar, obra, evento, espécie, objeto ou conceito específico.

- **A âncora é o assunto, não necessariamente a resposta.** Em "Quem fundou o Império Mongol?", a âncora é *Império Mongol*, e a resposta é Gengis Khan.
- **Uma única âncora por pergunta:** a entidade sobre a qual está o fato perguntado. Em perguntas de `comparacao` e `conexao`, escolha a entidade **menos óbvia**, porque é nela que está o conhecimento. Em "O que o planeta anão Plutão e o elemento plutônio têm em comum?", a âncora é *Plutônio*.
- **Regra de granularidade:** a âncora é **uma entidade específica**, com nome próprio ou como um conceito bem delimitado, e **nunca uma área inteira**.

| ✅ Âncora | ❌ Não é âncora (é tema ou subtema) |
|---|---|
| Copa do Mundo FIFA de 1970 | Futebol |
| Pelé | Futebolistas brasileiros |
| Penicilina | Medicina |
| Império Mongol | Idade Média |

Cada âncora é registrada com:
- **`nome`:** forma preferida em português;
- **`descricao`:** uma frase que identifica a entidade sem ambiguidade. É o que separa *Mercúrio, o planeta* de *Mercúrio, o elemento químico*;
- **`variantes`:** outras grafias e nomes da entidade, como "Genghis Khan" para Gengis Khan. São variantes do **nome da âncora**, e não respostas aceitas para uma pergunta;
- **`fontes`:** uma ou mais URLs confiáveis sobre a entidade, em qualquer idioma.

**Popularidade e dificuldade estimada.** O pipeline mede quanto cada âncora é procurada na Wikipédia e usa isso para estimar a dificuldade das perguntas sobre ela. O LLM não participa dessa estimativa (§12).
- **Medida:** média mensal de visitas de pessoas (sem robôs) aos artigos da âncora na Wikipédia em **português** e em **inglês**, nos últimos 12 meses completos. Os dois artigos são ligados pelo item do Wikidata.
- **Pontuação:** média geométrica que dá 2/3 do peso ao português, o público do jogo, e 1/3 ao inglês, a fama mundial. O inglês é antes convertido para a escala do português (÷15). Se faltar o artigo numa das línguas, vale só a outra.
- **Dificuldade**, de 1 (fácil) a 5 (difícil), por faixas fixas da pontuação: ≥ 20 000 visitas por mês → 1 · ≥ 5 000 → 2 · ≥ 1 500 → 3 · ≥ 500 → 4 · abaixo → 5. As faixas são fixas para que a dificuldade de uma pergunta não mude quando o banco cresce.
- **Dificuldade percebida** (2026-10-12): no app, quem lê pode avaliar a pergunta em cinco níveis, de muito fácil a muito difícil (§16, "Avaliação"). Essa avaliação poderá mudar o campo `dificuldade`, como **informação adicional à popularidade**, e não no lugar dela. **Por enquanto só é registrada:** não altera o campo, e a dificuldade, estimada ou percebida, **não orienta a criação de perguntas**. A ideia é coletar dados antes de decidir como usá-los.
- **Uso apenas ilustrativo:** a dificuldade só é **exibida**, na ficha da pergunta no app. Ela **não é usada** para nenhuma decisão do projeto: nem no sorteio, nem em proporções do banco, encomendas, regras de variedade, crítica, pontuação ou tabuleiro. Também não é enviada ao gerador nem ao crítico.
- **Limites:** é uma estimativa da **fama da âncora**, e não da pergunta. Não enxerga o ângulo, então um fato obscuro sobre algo famoso continua difícil. Também confunde interesse com conhecimento: um conceito conhecido de todos, mas pouco pesquisado, como os cartões amarelo e vermelho, sai difícil.

**Limites por âncora** (o pipeline descarta o que passar deles):
- no máximo **3 perguntas por âncora** em cada lote (2 até 2026-10-27), nunca com o mesmo ângulo;
- no máximo **2 perguntas com o mesmo ângulo** para uma mesma âncora, no banco inteiro;
- no máximo **8 perguntas por âncora** no banco inteiro (3 até 2026-10-23, 5 até 2026-10-27), somando texto e figura, e no máximo **3 com figura** (2 até 2026-10-27). As exclusivas de uma coleção têm conta à parte (§6, "Coleções");
- uma pergunta nova não pode perguntar **o mesmo fato** que outra já existente sobre a mesma âncora, mesmo com outras palavras.

**Homônimos são âncoras diferentes.** Nome igual não basta: Pelé e a pele, o clube Cruzeiro e a constelação do Cruzeiro do Sul, a cidade de Washington e George Washington, um país e a sua bandeira ou a sua seleção são entidades distintas. É a `descricao` que decide.

---

## 5. Ângulos

O ângulo é **o tipo de conhecimento pedido**. Ele é definido pela **relação entre a resposta e a âncora**: para classificar uma pergunta, complete a frase *"a resposta é ___ da âncora"*.

| `angulo` | A resposta é… | Exemplo |
|---|---|---|
| `autoria` | Quem criou, descobriu, fundou ou venceu a âncora | "Em 1928, quem descobriu a penicilina?" |
| `tempo` | Quando ela ocorreu, ou a ordem em relação a outra coisa | "Em que século caiu Constantinopla?" |
| `lugar` | Onde ela está, ocorreu ou surgiu | "Em que país fica Machu Picchu?" |
| `numero` | Uma quantidade ou medida dela | "Quantos ossos tem o corpo humano adulto?" |
| `nome` | A origem do nome, um apelido ou um significado | "O nome Venezuela significa pequena versão de qual cidade?" |
| `causa` | O porquê dela, ou uma consequência dela | "Que doença matou boa parte da população da Europa no século quatorze?" |
| `composicao` | Uma parte, um membro ou um ingrediente dela | "Que fruta é a base do guacamole?" |
| `atributo` | Uma característica, propriedade ou função dela | "Qual é a moeda do Japão?" |
| `comparacao` | A que se destaca num grupo por um critério | "Qual é o maior oceano do mundo?" |
| `conexao` | O traço comum entre ela e outra entidade | "O que o planeta anão Plutão e o elemento plutônio têm em comum?" |
| `identidade` | A própria âncora, a partir de uma descrição | "Em que livro uma raposa ensina que somos responsáveis por aquilo que cativamos?" |

- **Prioridade:** quando mais de um ângulo servir, vale o **mais específico**. `identidade` e `atributo` são os mais genéricos e só valem **quando nenhum outro serve**.
- **Variedade dentro do ângulo:** perguntas do mesmo ângulo não devem seguir o mesmo molde de frase. Cinco perguntas do tipo "X é a cidade famosa, mas qual é a capital?" cansam, mesmo que cada uma seja boa.
- Os ângulos `conexao` e `nome` costumam produzir as perguntas mais memoráveis e devem ser **encomendados ativamente**.

---

## 6. Tipos de pergunta

| `tipo` | Como é jogada | Campo extra |
|---|---|---|
| `aberta` | O questionador lê e o respondente responde livremente | — |
| `multipla` | O questionador lê a pergunta e depois as alternativas | `distratores`: exatamente 3 |

- Os valores fixos, como os de `tipo` e `angulo`, são sempre minúsculos e sem acento. O app traduz para exibição.
- **Verdadeiro ou falso não existe.** Funciona mal em voz alta e dá 50% de acerto no chute.
- **Resposta que é um ano ou uma data: sempre `multipla`.** Quando a resposta é um ano específico ("1969") ou uma data mais detalhada ("15 de novembro de 1889", "2 de fevereiro"), a pergunta é obrigatoriamente de múltipla escolha, com ou sem figura. Os distratores são anos (ou datas) próximos e críveis, no mesmo formato da resposta, nenhum deles também correto. A regra vale só quando **a resposta é o próprio ano ou a data**: século e década ("século dezenove", "década de 1970") e respostas em que o ano identifica outra coisa, como uma edição de Olimpíada ou de Copa ("Londres 2012", "1970, no México"), podem continuar abertas. Essas perguntas têm um teto no jogo original (§9).
- **Metade aberta, metade múltipla escolha** (desde 2026-10-27). O jogo original busca as duas formas na mesma proporção, em cada tema, para que um modo só de múltipla escolha tenha perguntas de todos os temas. Vale para texto e figura. Cada lote recebe a quantidade de `multipla` que aproxima o seu tema dessa meta (§17), e a pergunta segue a quantidade pedida, salvo quando a outra forma for claramente melhor.

### Distratores

- São as **alternativas erradas**. Ficam **separadas** da resposta, e **o app embaralha** as quatro opções na hora de exibir.
- Devem ser **críveis**: da mesma categoria, época e escala da resposta. Em obras de ficção, pelo menos um vem da mesma franquia.
- Cada alternativa tem **no máximo 4 palavras**, porque ninguém guarda quatro frases longas de memória.
- Só existem em perguntas do tipo `multipla`.

### Perguntas com figura

Uma pergunta de qualquer tipo pode ter uma **figura** (campo `imagem`). O questionador lê o enunciado em voz alta e **mostra a figura** ao respondente. O texto e a resposta continuam fora da vista dele.

> **Só escreve uma pergunta com figura quem examinou a imagem.** O gerador de texto nunca cria perguntas com figura: elas saem da etapa de figuras, em que o LLM abre cada imagem antes de escrever (§17). Uma pergunta sem o campo `imagem` nunca se refere a uma foto ou figura.

- **A figura é a pergunta.** A resposta sai de **reconhecer o que a imagem mostra**: "Que cidade é esta?", "Que animal é este?", "Qual é este pokémon?", "Quem pintou este quadro?", "Em que museu fica este quadro?". Teste: se trocar "este animal" pelo nome dele deixasse a pergunta igualmente boa, a figura é só enfeite, e a pergunta está errada.
- **O enunciado é curto** e diz o que se deve reconhecer (cidade, animal, monumento). Pode trazer uma pista que **ajude a distinguir**, mas que **não identifique sozinha**. Teste: cubra a imagem e leia só o enunciado; se dá para responder, a pista entrega a resposta, e a figura virou enfeite. Pistas que entregam: "Que estadista, chamado de Chanceler de Ferro, é este?" (Bismarck), "Que astro é este, o único satélite natural da Terra?" (Lua), "Que prato, feito com feijão preto e carnes, é este?" (feijoada), "Quem é esta jogadora, apelidada de Rainha?" (Hortência). Pistas que ajudam sem entregar: a época, o país, o grupo ("Que pintor holandês do século dezessete…", "Que felino africano é este?").
- **Âncora e ângulo:** a âncora é o que aparece na figura. Perguntar o que ela é dá o ângulo `identidade`; perguntar algo que só se sabe depois de reconhecê-la usa o ângulo correspondente (`autoria` para o pintor, `lugar` para o museu). As regras de variedade (§9), que limitam `identidade`, valem para os lotes do gerador e não para as perguntas com figura.
- **Tipos de figura:** lugares (cidades, monumentos, paisagens), animais, plantas, objetos e artesanato, festas populares, contornos de mapa, personagens de lendas, obras de arte em domínio público (pinturas, gravuras), pokémon e personagens de anime, mangá, quadrinhos e desenhos animados. Pinturas com direitos autorais, como as de Tarsila do Amaral, Portinari ou Dalí, ficam de fora por enquanto, porque não há fonte boa de imagem para elas.
- **Um único assunto por imagem:** nada de montagens nem pranchas com assuntos diferentes, como várias espécies ou várias obras. **Exceção:** uma montagem com cenas ou com o elenco de **uma única obra** vale, porque o assunto continua sendo um só (os retratos dos protagonistas de *Os Normais*, por exemplo), desde que não tenha texto. Montagens de pôster, com título ou créditos, continuam proibidas. Vale foto; ilustração ou escultura só para o que não pode ser fotografado, como os personagens de lendas (Saci, Mula sem cabeça).
- **Pessoas:** figuras públicas, ou brincantes e participantes de festas públicas (Parintins, bumba meu boi, cavalhadas). Fotos de pessoas comuns em outros contextos continuam proibidas.
- **Recorte permitido:** uma placa ou legenda que entregue a resposta pode ser cortada da imagem, já que as licenças livres permitem obras derivadas.
- **Política de imagens:** por padrão, imagens do Wikimedia Commons com licença livre (CC BY, CC BY-SA ou domínio público). **Enquanto o jogo não tiver fins comerciais, a arte oficial também é aceita** onde não existe imagem livre: pokémon e personagens de anime, mangá e quadrinhos. Autor, licença ou crédito e a página de origem são sempre registrados. Se o jogo passar a ter fins comerciais, essas imagens precisam ser revistas.
- **Exceção, Pokémon:** a arte oficial, com o crédito "© Nintendo / Creatures / GAME FREAK", e a Bulbapedia como fonte da âncora e da pergunta. A imagem vem do Bulbagarden Archives ou, como a Bulbapedia bloqueia acesso automatizado, da mesma arte oficial no repositório público do PokéAPI (`raw.githubusercontent.com/PokeAPI/sprites`), que fica registrado em `origem`. É arte oficial, aceita pela política de imagens acima, e não licença livre.
- **Pokémon em silhueta:** como na vinheta "Quem é esse pokémon?" do desenho, a figura da pergunta é a **silhueta preta** da arte oficial sobre raios azuis e amarelos, e a arte colorida, sobre o mesmo fundo, só aparece em "Mostrar resposta" (campo `revelacao` da imagem). A silhueta precisa ser reconhecível pela forma; se for uma mancha, ou se puder ser confundida com outro pokémon, a pergunta é reprovada.
- **Variedade dos pokémon:** "Quem é esse pokémon?" não deve ficar só nos muito conhecidos (Pikachu, os iniciais, os lendários famosos). Entram também pokémon de **todas as gerações**, **formas básicas e intermediárias**, e não só a evolução final (Charmeleon, Ivysaur, Pupitar, Grovyle), e pokémon **menos conhecidos**, que só quem jogou aquela geração reconhece. Os emblemáticos continuam, mas como uma parte pequena do catálogo. Para os menos conhecidos, a múltipla escolha com distratores de silhueta parecida deixa a pergunta justa.
- **Personagens de anime, mangá e quadrinhos:** a arte oficial do personagem, com o crédito "Arte oficial dos detentores dos direitos, via <fonte>". As fontes, em ordem: os wikis de fãs do **Fandom** (que costumam ter arte de corpo inteiro com fundo transparente), o **AniList** (anime e mangá), o **superhero-api** (heróis e vilões da Marvel e da DC) e a **Wikipédia** (a imagem do quadro de informações). A fonte da pergunta é a página do personagem no Fandom, no AniList ou na Wikipédia.
  - **Silhueta quando a imagem permite:** com fundo transparente, **um personagem sozinho**, de corpo inteiro e contorno característico, a figura vira silhueta com revelação, como nos pokémon. Senão, a pergunta mostra a imagem colorida e vai além do nome (a obra, o autor, o grupo) ou pede o nome em múltipla escolha, com distratores parecidos. Quem decide é o redator que abre a imagem.
  - **Variedade:** a mesma regra dos pokémon. No máximo 1 em cada 5 personagens é um protagonista emblemático (Goku, Naruto, Mônica, Homem-Aranha). Os outros são coadjuvantes, vilões e personagens de obras menos famosas, de várias épocas e países, com uma boa parte de quadrinhos brasileiros.
- **Cinema e TV:** três tipos de figura.
  - **Cenas de filmes e séries** (catálogo `cenas`): imagens de cena do **TMDB** (The Movie Database), só as **sem texto**, e, como reserva, trailers e fotos de divulgação em domínio público do Commons. Perguntas: de que filme ou série é a cena, quem dirigiu, em que década se passa ou foi lançado, que ator interpreta o personagem que aparece. A fonte da pergunta é o artigo da Wikipédia, com a página do TMDB.
  - **Personagens de filmes e séries** (catálogo `personagens`, o mesmo de anime e quadrinhos): Darth Vader, Chaves, Harry Potter. A imagem precisa mostrar **o personagem pedido**: um redirecionamento pode trocá-lo por outro (no Fandom, "Darth Vader" leva à página de Anakin Skywalker, com o Anakin sem máscara).
  - **Atores e atrizes** (catálogo `musicos_atores`): fotos livres do Commons, de preferência com uma pergunta que vai além do nome (o filme pelo qual ganhou um prêmio, o personagem que marcou a carreira).
  - **Variedade:** no máximo 1 em cada 5 é um emblemático (O Poderoso Chefão, Star Wars, Friends). Cerca de **um terço é brasileiro** (filmes, novelas, humorísticos, séries), e o resto varia de décadas e de países, e não fica só em Hollywood.
  - **Sem spoilers:** nada de perguntar sobre o final, a reviravolta ou a morte de um personagem.
  - **Crédito do TMDB:** o app informa que usa a API do TMDB e não é endossado nem certificado por ele, como pedem os termos de uso.
- **Proibido:** capas de álbuns, pôsteres, telas de título, logotipos, fotos de imprensa e cenas com legenda ou com o nome da obra escrito. O texto entrega a resposta.

### Diretrizes de criação das perguntas com figura

O objetivo é variedade e profundidade: o banco não deve virar uma sequência de "que animal é este?" sobre os bichos mais famosos.

**1. Catálogos de figura.** As perguntas com figura saem de **catálogos**, que são listas de entidades do mesmo tipo: bandeiras, mamíferos, pinturas, estádios, retratos, pokémon. Um catálogo não pertence a um subtema. Cada entidade vai para o subtema em que ela se encaixa melhor, e o mesmo catálogo pode alimentar vários temas:
- **Retratos:** História (governantes, líderes), Ciências (cientistas), Artes e Pensamento (escritores, compositores, filósofos), Esportes (atletas), Entretenimento (músicos, atores).
- **Pinturas:** Artes e Pensamento › Pintura, ou História, quando retratam um acontecimento.
- **Bandeiras:** Geografia › Bandeiras e Símbolos (as atuais) e História (as históricas).
- **Edifícios:** Geografia › Cidades e Monumentos, Escultura e Arquitetura, ou o subtema histórico da época.

Um subtema não precisa ter perguntas de texto para receber perguntas com figura, e a âncora de uma figura não precisa ter perguntas de texto.

**2. A âncora é o que aparece na imagem**, mesmo quando a pergunta vai além do reconhecimento. A saturação por âncora (§17) soma perguntas de texto e com figura.

**3. Famílias de pergunta.** Toda pergunta com figura começa por reconhecer a imagem. O que muda é o que se pergunta depois:

| Família | Ângulo | O que se pergunta | Exemplos |
|---|---|---|---|
| **O que é** | `identidade` | O nome do que aparece | "Que animal é este?", "Qual é este pokémon?", "Que estádio é este?" |
| **Quem fez** | `autoria` | O autor da obra, do projeto ou da invenção | "Quem pintou este quadro?", "Que arquiteto projetou este prédio?" |
| **Onde** | `lugar` | Onde o assunto fica ou de onde vem | "Que cidade é esta?", "De que país é esta bandeira?", "Em que museu fica este quadro?" |
| **Quando** | `tempo` | A época ou o acontecimento | "Que acontecimento este quadro retrata?", "Em que século esta igreja foi construída?" |
| **Que parte** | `composicao` | Uma parte ou detalhe destacado | "De que quadro é este detalhe?", "Como se chama esta peça do motor?" |
| **Que tipo** | `atributo` | O estilo, a técnica, a categoria | "Que estilo arquitetônico é este?", "Que técnica de pintura é esta?" |
| **Com o que se liga** | `conexao` | Um segundo fato, que só se alcança depois de reconhecer a imagem | "Em que pokémon este evolui?", "Que clube manda os jogos neste estádio?" |

**4. Três níveis de profundidade**, definidos pela pergunta e não pela fama da âncora:
- **Nível 1, reconhecer:** o assunto é emblemático e a pergunta é direta ("Que pintura é esta?" para a Mona Lisa). Em geral, aberta.
- **Nível 2, distinguir:** é preciso separar o assunto de outros parecidos, como a espécie exata, a cidade a partir de um bairro, o pintor entre contemporâneos, ou um detalhe em vez da obra inteira. Em geral, múltipla escolha com distratores do mesmo tipo.
- **Nível 3, ir além:** reconhecer e dar um passo de conhecimento (a família "com o que se liga", "quando" ou "que tipo"). O enunciado nunca nomeia o assunto da imagem.

Em cada catálogo, a mistura alvo é de **40% no nível 1, 40% no nível 2 e 20% no nível 3**. O nível é escolhido na hora de escrever a pergunta, e não estimado depois (§4).

**5. Escolha das entidades em camadas.** Cada catálogo é uma lista **curada**, montada a partir de listas da Wikipédia e do Wikidata e revisada pelo LLM ou por uma pessoa, em três camadas: **emblemáticos** (o que quase todo mundo reconhece), **conhecidos** (o que o público informado reconhece) e **de aficionado** (o que só quem gosta do assunto reconhece). Cada lote de figuras tira entidades das três camadas, para não esgotar primeiro os emblemáticos. A popularidade na Wikipédia não decide a escolha (§4).

**6. Regras de variedade das perguntas com figura**, além das de §9:
- num lote de figuras, **pelo menos duas famílias**, quando o catálogo permite mais de uma;
- nas perguntas com figura de um tema, **pelo menos três catálogos**, e nenhum catálogo passa de **40%** delas (as metas dos catálogos respeitam esse teto, e o autopiloto faz os catálogos de um tema crescerem juntos);
- uma família não passa de **60%** de um catálogo (por exemplo, nem toda pintura é "quem pintou?");
- no máximo **três perguntas com figura por âncora**, de famílias diferentes e com imagens diferentes (a obra inteira e um detalhe, a fachada e uma vista aérea).

**7. Imagens que pedem observação.** Além da imagem principal do Wikidata, valem um detalhe recortado de uma obra, um ângulo menos visto de um lugar ou uma foto histórica. O recorte é permitido (§6). A imagem nunca pode ser ambígua: se o detalhe também existe em outra obra, a pergunta está errada.

**8. Distratores de figura** (múltipla escolha): do mesmo catálogo e **visualmente parecidos** com a resposta (outro felino de manchas, outra catedral gótica, outro pintor impressionista), e nenhum deles pode também descrever a imagem.

**Critérios da figura**, além dos de §8:
- [ ] **Nada na imagem entrega a resposta:** placas, legendas, letreiros, marcas d'água, bandeiras.
- [ ] **Resposta única diante da imagem:** atenção a réplicas, paisagens parecidas e monumentos que ficam entre duas cidades. A Ponte Luís I liga o Porto a Vila Nova de Gaia, por isso a pergunta é pela cidade "do outro lado da ponte".
- [ ] **Legível num celular** a um braço de distância.
- [ ] **O enunciado é verdadeiro para esta foto específica**, e não só para o assunto: o ponto de vista, o lado e o que aparece nela.
- [ ] **Nem óbvia nem impossível:** a Torre Eiffel de frente é fácil demais; um bairro qualquer de uma cidade grande, difícil demais. A imagem precisa ter o que permite reconhecer o assunto (a silhueta, o monumento, a pelagem). Para assuntos menos conhecidos, use `multipla`.

### Coleções

Uma **coleção** é um conjunto de perguntas sobre um mesmo universo, com um modo de jogo próprio (decidido em 2026-10-13). Cada coleção tem um documento próprio com as diretrizes dela; a única até agora é a de **pokémon**, do modo Pokémon, em [`modo_pokemon.md`](modo_pokemon.md).

- A pergunta da coleção tem o campo `colecao`. O modo da coleção sorteia só as perguntas dela, de qualquer tema.
- **Exclusiva** (campo `exclusiva`): a pergunta sai **só no modo da coleção**, nunca no jogo original (Master e Linear).
- **Subtema da coleção** (campo `subtema_colecao`): uma coleção pode ter subtemas próprios, definidos no documento dela, que dividem as perguntas dentro do modo. Eles não substituem tema e subtema, e a lista canônica (§3) não muda. A folga para sobreposição entre eles também é definida no documento da coleção.
- As perguntas da coleção seguem esta Parte I: tema e subtema, âncora, fontes, redação e critérios. Podem ser com ou sem figura.
- **Regras de conteúdo próprias:** o documento de uma coleção pode ter regras de conteúdo para as exclusivas dela, que partem desta Parte I e prevalecem sobre ela onde divergirem. Nos lotes exclusivos, o gerador e o crítico recebem esta Parte I e, depois dela, essas regras.
- **Saturação das exclusivas:** é contada só dentro da coleção, com o limite definido no documento dela, e as exclusivas não contam na saturação do jogo original, porque uma partida nunca sorteia os dois conjuntos.
- As exclusivas não contam nas metas do jogo original (§17), e o autopiloto não as produz: os lotes delas são rodados à mão.

### Perguntas com áudio

Uma pergunta de qualquer tipo pode ter um **trecho de áudio** (campo `audio`), decidido em 2026-10-12. O questionador lê o enunciado e manda o trecho tocar **na tela grande** (modo mesa), para todos ouvirem; o celular de quem lê não toca o som. **Até segunda ordem, as perguntas com áudio ficam fora do jogo:** o app não as sorteia em nenhum modo (§16), enquanto os trechos são revistos.

- **De reconhecimento**, como as figuras: a pergunta pede para reconhecer o que se ouve ("De que país é este hino nacional?", "Que música é esta?", "Que animal faz este som?", "Que instrumento é este?", "De que compositor é esta peça?"). O enunciado nunca diz o que toca; pode trazer uma pista que ajude sem entregar ("Que ave do Cerrado…").
- **Categorias:** hinos nacionais (Geografia › Bandeiras e Símbolos); música clássica e ópera (Artes e Pensamento › Música Clássica, Teatro e Ópera); música brasileira antiga (Entretenimento › Música Brasileira); sons de animais (Natureza, no subtema do bicho); instrumentos (Música Clássica, Música Brasileira ou Música Internacional, conforme o instrumento).
- **Só áudio livre**, porque o repositório e o site são públicos: domínio público, CC0, CC BY ou CC BY-SA, sem NC nem ND. Gravações comerciais de música popular **não entram**: a composição fica protegida até 70 anos depois da morte do autor, e a gravação, até 70 anos depois de publicada. Na música brasileira antiga, a composição e a gravação precisam estar em domínio público no Brasil: autores mortos há mais de 70 anos (Chiquinha Gonzaga, Ernesto Nazareth, Zequinha de Abreu, Catulo da Paixão Cearense, Carlos Gomes) e gravação publicada há mais de 70 anos. *Pelo Telefone*, de Donga (morto em 1974), por exemplo, fica de fora. Boas fontes: os hinos da Banda da Marinha dos EUA e os sons do Serviço de Pesca e Vida Selvagem dos EUA (obras do governo americano, em domínio público), o Musopen e as gravações antigas da Casa Edison, todos no Wikimedia Commons.
- **O LLM não ouve áudio.** A pergunta sai dos metadados do arquivo (título, descrição, categorias, origem) e das fontes, e **uma pessoa ouve o trecho** antes de ele entrar no banco, na página que o pipeline gera (§17).
- **O trecho:** de 6 a 30 segundos, escolhido para ser reconhecível (o tema famoso de uma peça, o começo de um hino, o canto típico de uma ave), com entrada e saída suaves e volume igualado. Nas gravações antigas, o trecho pula o anúncio do locutor, que muitas vezes diz o nome da música.
- **Saturação:** o áudio conta no limite de 8 perguntas por âncora, e cada âncora tem no máximo 1 pergunta com áudio.
- **Resposta específica e justa:** o nome da música, do país, do animal ou do instrumento. Quando o som não permite distinguir a espécie ou o instrumento exato de outros parecidos (uma coruja de outra, o acordeão do bandoneón), a pergunta é `multipla`, sem distratores que soem igual.

---

## 7. Redação para voz

**Enunciado (`pergunta`):**
1. **No máximo 30 palavras**, idealmente até 20.
2. **O contexto vem primeiro e a pergunta por último:** "Em 1928, num laboratório de Londres, quem descobriu a penicilina?".
3. **Nada que dependa de ver o texto:** sem parênteses, aspas, travessões, siglas impronunciáveis, símbolos (%, °, &) ou fórmulas.
4. **Números e séculos por extenso quando a leitura é ambígua:** "no século quatorze", e não "no séc. XIV".
5. **Sem perguntas de grafia**, como "como se escreve…".
6. **Sem negação**, como "qual destes NÃO…". Em voz alta, o "não" se perde.
7. **Sem vazamento:** o enunciado não contém a resposta, parte dela nem palavra derivada dela.
   - ❌ "O que significam os nomes das **capitais** Seul e Astana?" → "Capital"
   - ❌ "Palmeiras e Cruzeiro, fundados por imigrantes **italianos**, tinham que nome?" → "Palestra Itália"
8. **Público informado, mas leigo:** evite termos técnicos desnecessários.

**Resposta (`resposta`):**
- É **direta**: uma palavra, um termo ou uma frase curta, com no máximo cerca de 5 palavras.
- É **específica**: o nome da coisa, e não a categoria. "Corruíra", e não "um pássaro".
- **Não há lista de variantes.** A resposta é a forma mais completa e mais conhecida, e o questionador julga com bom senso.
- **Parênteses só quando for muito apropriado**, com uma observação curta que evite uma injustiça evidente, como um nome de nascimento muito conhecido: `"Gengis Khan (nascido Temujin)"`. Na maioria das perguntas, não há parênteses.
- Não traz explicações nem justificativas.

**Fontes (`fonte`):**
- São URLs puras, e não links em markdown.
- São específicas: a página que sustenta **aquele fato**, e não a página inicial de um site.

---

## 8. Critérios de qualidade

Toda pergunta precisa passar em **todos** os critérios abaixo:

- [ ] **Resposta única:** não existe outra resposta defensável. Atenção a apelidos, cargos e títulos: Yashin tinha mais de um apelido, e Weah teve mais de um cargo político.
- [ ] **Sem vazamento:** nem pelo enunciado, nem pelos distratores.
- [ ] **Atemporal:** continua correta daqui a 10 anos.
- [ ] **Verificável:** a fonte citada sustenta a resposta.
- [ ] **Precisa:** cada afirmação do enunciado é **literalmente** verdadeira, e não só a resposta. Desconfie de verbos como *batizou*, *inventou*, *fundou* e de palavras como *único*, *primeiro*, *maior*. "O navegador que batizou a Colômbia" é falso: o país recebeu o nome em homenagem a Colombo.
- [ ] **Justa:** um especialista diria "boa pergunta", e não "que detalhe arbitrário".
- [ ] **Interessante:** acertar dá prazer, ou errar ensina algo.
- [ ] **Audível:** cabe na memória de quem ouve e segue §7.
- [ ] **Bem classificada:** tema, subtema, âncora e ângulo são coerentes com o conteúdo.

---

## 9. Regras de variedade

**Em cada lote (tipicamente 20 a 50 perguntas de um subtema):**
- No máximo **25% num mesmo ângulo**.
- Pelo menos **6 ângulos diferentes**.
- `identidade` + `atributo` somam no máximo **30%**.
- **Respostas que são um ano específico** ("1969", "800 a.C."), somando abertas e múltiplas: no máximo **9%** das perguntas do lote, e no máximo **uma** num lote de figuras, que tem 12 itens (desde 2026-10-30, só no jogo original). Para pedir a época, prefira o século, a década ou a ordem entre dois fatos. O registro descarta o que passar do teto; as perguntas que já estavam no banco ficam.
- No máximo **3 perguntas por âncora**, nunca com o mesmo ângulo (§4).
- **Prefira âncoras centrais e conhecidas**, mesmo que já tenham perguntas, a âncoras novas e obscuras (desde 2026-10-27; antes, "prefira âncoras novas"). O gerador recebe a lista das âncoras e perguntas já existentes no subtema, para aprofundá-las com fatos e ângulos novos, sem repetir fatos.
- **Tentar incluir uma âncora nova a cada 50 perguntas**, tão conhecida quanto as centrais, para manter alguma variedade. Se for difícil achar uma assim, o lote fica sem: uma âncora nova obscura não vale a troca.

**No banco, por subtema:**
- `conexao` + `nome` somam pelo menos **20%**.
- A distribuição por ângulo e por âncora é acompanhada pelo relatório do pipeline, e os lotes seguintes são **encomendados para preencher as lacunas**.
