Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Tênis** (tema **Esportes**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Torneio de Wimbledon",
      "descricao": "Grand Slam disputado em quadras de grama em Londres desde 1877."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Disputado pela primeira vez no século dezenove, qual é o mais antigo dos quatro torneios de Grand Slam?",
    "resposta": "Wimbledon",
    "distratores": [
      "US Open",
      "Roland Garros",
      "Aberto da Austrália"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Grand_Slam_(tennis)",
      "https://en.wikipedia.org/wiki/Wimbledon_Championships"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Grand_Slam_(tennis)",
        "situacao": "ok",
        "texto": "The Grand Slam in tennis is the achievement of winning all four major championships in one discipline in a calendar year. In doubles, a Grand Slam may be achieved as a team or as an individual with different partners. Winning all four major championships consecutively but not within the same calendar year is referred to as a \"non-calendar-year Grand Slam\", while winning the four majors at any poin\n[…]\nIn 1933, Jack Crawford won the Australian, French, and Wimbledon Championships, leaving him just needing to win the last major event of the year, the U.S. Championships, to become the reigning champion of all four major tournaments, a feat described as \"a grand slam\" by sports columnist Alan J.\n[…]\nThe Wimbledon Championships, commonly known as Wimbledon, is the third Grand Slam tournament of the year, played annually in late June and early July. It was first held in 1877 at the All England Lawn Tennis and Croquet Club, at the time located off Nursery Road in Wimbledon, London, England. The tournament has always been contested at this club, which moved to its present site off Church Road in 1922 in order to increase its attendance capacity.\n[…]\nWhen Rafael Nadal was on the verge of completing a non-calendar-year Grand Slam at the 2011 Australian Open, one writer observed, \"Most traditionalists insist that the 'Grand Slam' should refer only to winning all four titles in a calendar year, although the constitution of the International Tennis Federation, the sports governing body, spells out that 'players who hold all four of these titles at the same time achieve the Grand Slam'.\" In 2012 the ambiguity was resolved, with the ITF's current constitution stating \"The Grand Slam titles are the championships of Australia, France, the United States of America and Wimbledon.\n[…]\nWembley Championships.\n[…]\nGrand Slam (golf)\n[…]\nOfficial website of Wimbledon\n[…]\nAll-time Grand Slam tournament winners – Reference book"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Wimbledon_Championships",
        "situacao": "ok",
        "texto": "The Wimbledon Championships, commonly called Wimbledon, is a tennis tournament organised annually in Wimbledon, London, by the All England Lawn Tennis and Croquet Club in collaboration with the Lawn Tennis Association. It is chronologically the third of the four Grand Slam tennis events each year, held after the Australian Open and the French Open and before the US Open. It is the oldest tennis to\n[…]\nUntil 1922, the reigning champion had to play only in the final, against whoever had won through to challenge them. As with the other three Major or Grand Slam events, Wimbledon was contested by top-ranked amateur players; professional players were prohibited from participating. This changed with the advent of the open era in 1968.\n[…]\nIn 1946 and 1947 Wimbledon was held before the French Championships. It was thus the second Grand Slam tennis event of the year.\n[…]\nIn April 2013, Wimbledon unveiled its 'Master Plan', a vision in which to improve the championships over the next 10–15 years. This was in large part due to other Grand Slam tournaments such as the French Open and Australian Open also announcing expansion and re-development plans.\n[…]\nFrom 2025, Wimbledon is the only remaining Grand Slam championship starting on a traditional Monday schedule.\n[…]\nPrize money was first awarded in 1968, the year that professional players were allowed to compete in the Championships for the first time. Total prize money was £26,150; the winner of the men's title earned £2,000 (equivalent to £30,600 in 2025) while the women's singles champion received £750 (equivalent to £11,500 in 2025). In 2007, Wimbledon and the French Open became the last grand slam tournaments to award unequal prize money to women and men.\n[…]\nWimbledon Effect\n[…]\nList of Wimbledon ladies' singles champions\n[…]\nList of Wimbledon gentlemen's doubles champions\n[…]\nList of Wimbledon ladies' doubles champions\n[…]\nList of Wimbledon mixed doubles champions"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Grand_Slam_de_t%C3%AAnis",
        "situacao": "ok",
        "texto": "Os torneios de Grand Slam, também chamados abreviadamente de majors, são os quatro eventos anuais mais importantes do tênis. Eles oferecem o maior número de pontos no ranking mundial, prêmios em dinheiro, atenção do público e da mídia. Os títulos nestes torneios são chamados de Títulos de Grand Slam. Os torneios são o Australian Open, Roland Garros, Wimbledon e o US Open, que acontecem nesta ordem\n[…]\nWimbledon é o único a possuir qualificatório de duplas - masculinas e femininas. Na chave principal de mistas, é o único com uma fase a mais: dezesseis equipes começam com bye e só estreiam na segunda rodada. Essa configuração faz com que haja mais participantes: 48 contra 32 dos outros Grand Slam.\n[…]\nEm 2019, dois torneios de Grand Slam acabaram com sets longos nas parciais decisivas. Nas chaves principais de simples (isso já ocorria em duplas) do Australian Open, os jogadores disputam o super tiebreak (tiebreak que termina em 10 pontos desde que com 2 de diferença) após o empate por 6 games a 6. No Torneio de Wimbledon, após 12–12, haverá um tiebreak normal. Isso ocorrerá em todas as categorias.\n[…]\nEm 2022, a partir de Roland Garros, todos os torneios do Grand Slam passaram a usar o formato em que, quando o set final (3.º ou 5.º set) chegar a 6–6, haverá um tiebreak de 10 pontos para decidir o vencedor do jogo. Até então, o Australian Open era o único que executava esse método, enquanto que Roland Garros tinha set longo e os dois restantes eram tiebreaks de sete pontos (depois de 6–6 no US Open e 12–12 em Wimbledon).\n[…]\nEste é o número de participantes das edições mais recentes dos torneios de Grand Slam. Com exceção das sinalizadas ao contrário, todas as categorias são eliminatórias. Quando não houver distinção entre chave principal e qualificatório, é porque só há a primeira em determinada modalidade.\n[…]\n† Qualificatório de duplas apenas em Wimbledon.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Roger Federer",
      "descricao": "Tenista suíço nascido em 1981, ex-número 1 do mundo e campeão de 20 torneios de Grand Slam, aposentado em 2022."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Dos vinte títulos de Grand Slam de Roger Federer, oito vieram de um só torneio. Qual?",
    "resposta": "Wimbledon",
    "distratores": [
      "Aberto da Austrália",
      "US Open",
      "Roland Garros"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Roger_Federer"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Roger_Federer",
        "situacao": "ok",
        "texto": "Roger Federer ( FED-ər-ər; Swiss Standard German: [ˈrɔdʒər ˈfeːdərər]; born 8 August 1981) is a Swiss former professional tennis player. He was ranked as the world No. 1 in men's singles by the Association of Tennis Professionals (ATP) for 310 weeks (second-most of all time), including a record 237 consecutive weeks, and finished as the year-end No. 1 five times.\n[…]\nFederer was defeated by Nadal in two Grand Slam finals, the French Open and Wimbledon, which was regarded as the best match of tennis history by many, when he was going for six straight wins to break Björn Borg's record. He came back from two sets down to force a fifth set, where he fell just two points from the title.\n[…]\nFederer developed back injuries in March and July and his ranking dropped from No. 2 to No. 6. Federer's first and only title of 2013 came at the Gerry Weber Open, defeating Mikhail Youzhny in the final. With the victory in Halle, he tied John McEnroe for the third-most ATP titles won by a male player in the Open Era. Federer, however, was unable to maintain his form into Wimbledon, suffering his worst Grand Slam tournament defeat since 2003 in the second round against Sergiy Stakhovsky.\n[…]\nAt Wimbledon, Federer was seeded first at a Grand Slam for the first time since the 2012 US Open, but he lost in the quarterfinals to Kevin Anderson in five sets, despite being two sets up and having a match point in the third.\n[…]\nFederer and Andy Roddick played each other 24 times, and Federer won their head-to-head matchup 21 matches to three. Roddick lost his No. 1 ranking to Federer after Federer won his first Australian Open in 2004. Their rivalry included four Grand Slam event finals (three at Wimbledon and one at the US Open), all of which were won by Federer. Roddick himself said that the Federer-Roddick rivalry was not much of a rivalry because it was so one-sided."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Roger_Federer",
        "situacao": "ok",
        "texto": "Roger Federer (Basileia, 8 de agosto de 1981) é um ex-tenista suíço que já foi recordista de títulos de Grand Slam com vinte conquistas. Dentre seus 103 torneios ATP possui: 6 ATP Finals, 28 ATP Masters 1000, 24 ATP 500 e 25 ATP 250. É o segundo jogador que também já ficou por mais tempo como número um mundial, tendo um total de 310 semanas compreendidas entre 2004 e 2018. Entre 2004 e 2008, passo\n[…]\nO suíço sairia vitorioso em quatro sets, conquistando o seu sexto Grand Slam e negando o nono título do rival.\n[…]\nJogaram dezessete vezes, com o suíço liderando por 11-6. Lidera por 5-3 em quadras ao ar livre e em 4-0 em quadras cobertas, enquanto Tsonga lidera por 1-0 na grama. Em quadras de saibro, o encontro encontra-se empatado com duas vitórias para cada tenista. A dupla se enfrentou seis vezes em competições do Grand Slam, incluindo jogos de cinco sets em Wimbledon de 2011 e Australian Open de 2013. Eles também têm uma semifinal na edição de 2010 desse último torneio, com Federer vencendo em três sets.\n[…]\nJogaram dez vezes, com Roger liderando por 9-1. A única vitória de Čilić foi nas semifinais do US Open de 2014, após o qual obteve o primeiro Grand Slam. O primeiro encontro ocorreu na terceira rodada do Masters 1000 de Paris em 2008, onde Federer venceu em sets diretos. Eles disputaram cinco partidas do Grand Slam, duas em Wimbledon, duas no US Open e uma no da Austrália em 2018; Federer lidera estas partidas por 4-1.\n[…]\nTem a marca de 31 finais disputadas e participação em 23 semifinais consecutivas, série iniciada no Torneio de Wimbledon de 2004 e encerrada no French Open de 2010, quando foi eliminado nas quartas de final por Robin Söderling, totalizando seis anos consecutivos de participações em semifinais do Grand Slam. Detém também o recorde de aquisições no ATP Finals, que reúne no final de cada ano, os oito tenistas mais bem classificados no ranking da ATP, com 6 títulos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Novak Djokovic",
      "descricao": "Tenista sérvio nascido em 1987, campeão de 24 Grand Slams e medalhista de ouro olímpico em 2024."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Qual dos quatro torneios de Grand Slam Novak Djokovic venceu mais vezes em simples?",
    "resposta": "Aberto da Austrália",
    "distratores": [
      "Wimbledon",
      "US Open",
      "Roland Garros"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Novak_Djokovic"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Novak_Djokovic",
        "situacao": "ok",
        "texto": "Novak Djokovic (born 22 May 1987) is a Serbian professional tennis player. He has been ranked as the world No. 1 in men's singles by the Association of Tennis Professionals (ATP) for a record 428 weeks, finished as the year-end No. 1 a record eight times, and has been ranked No. 1 at least once in a year for a record 13 different years.\n[…]\nDjokovic began the year by winning the Mubadala World Tennis Championship. At the Australian Open, he reached the quarterfinals with four straight-set wins before losing to Stanislas Wawrinka in five sets, ending his 25-match win streak in Melbourne and 14 consecutive Grand Slam semifinals.\n[…]\nDuring the 2026 Cincinnati Open, Djokovic lost in an upset during the round of 64 against Thiago Agustín Tirante. On 14 September 2026, Djokovic lost to Mariano Navone in the first round of the 2026 US Open in 5 sets, marking the first time since the 2006 Australian Open that he lost his opening match of a Grand Slam. As a result, Djokovic dropped out of the top 10 in the ATP rankings for the first time since June 2018.\n[…]\nDjokovic and Daniil Medvedev have met 16 times, with Djokovic leading 11–5. They have contested four Grand Slam tournament matches, with Djokovic leading 3–1. Their first major came at the 2019 Australian Open 4th round, which Djokovic won in four sets.\n[…]\nTheir next three encounters at the majors came in finals, with Djokovic winning the 2021 Australian Open and the 2023 US Open finals, and Medvedev winning his first major title at the 2021 US Open against Djokovic in the final, also ending Djokovic's quest for a calendar-year Grand Slam. Medvedev replaced Djokovic as the world No. 1 player when he rose to the top ranking for the first time in February 2022. All three major finals between Djokovic and Medvedev were straight-set wins.\n[…]\nNovak Djokovic at Olympics.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Novak_Djokovic",
        "situacao": "ok",
        "texto": "Novak Djokovic (em sérvio: Новак Ђоковић Belgrado, 22 de maio de 1987) é um tenista profissional sérvio. Ele foi classificado como o número 1 do mundo em simples da ATP por um período recorde de 428 semanas, terminou o ano como número 1 em oito temporadas (recorde) e foi ranqueado como número 1 pelo menos uma vez em treze anos diferentes (outro recorde).\n[…]\nCom a conquista, ele igualou o recorde de Roy Emerson de títulos no Aberto da Austrália, chegando à sua sexta conquista e se tornando o maior campeão do torneio ao lado de Roy Emerson. Djokovic também se tornou o quinto maior vencedor de Grand Slam, empatado com os 11 de Bjorn Borg e Rod Laver.\n[…]\nEm 27 de julho, Djokovic anunciou que perderia o resto da temporada para se recuperar da cirurgia da lesão em seu cotovelo direito. Faltando os últimos quatro meses da temporada, Djokovic viu sua classificação cair para 12.º, a mais baixa desde 2007. Esta foi a primeira vez que Djokovic perdeu um Grand Slam deixando de jogar o aberto dos Estados Unidos. Fez quarenta partidas de simples onde perdeu oito e venceu 32.\n[…]\nDjokovic estava buscando seu segundo título consecutivo no Aberto da Austrália e seu 21.º de grand slam no geral e sua entrada e possível permissão de permanência no país sem o certificado de vacinação geraram criticas, principalmente entre os australianos. O primeiro-ministro chegou a escrever no Twitter que as leis eram iguais para todos.\n[…]\nCom atuação soberba na final do US Open e uma vitória por 6/3, 7/6(5) e 6/3 sobre Daniil Medvedev, ninguém na história do tênis, tem mais títulos de slam em simples do que Novak Djokovic. Aos 36 anos conquistou o torneio americano pela quarta vez na carreira e igualou a marca de 24 troféus de slam em simples, que pertencia de forma isolada à australiana Margaret Court.\n[…]\nLista de vencedores de torneios do Grand Slam (simples homens)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Maria Esther Bueno",
      "descricao": "Tenista brasileira (1939-2018), sete vezes campeã de simples em Grand Slams e número um do mundo em 1959 e 1960."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "No século vinte, qual tenista do Brasil conquistou mais títulos de simples em torneios de Grand Slam?",
    "resposta": "Maria Esther Bueno",
    "distratores": [
      "Gustavo Kuerten",
      "Thomaz Koch",
      "Fernando Meligeni"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Maria_Bueno",
      "https://en.wikipedia.org/wiki/Gustavo_Kuerten"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Maria_Bueno",
        "situacao": "ok",
        "texto": "Maria Esther Andion Bueno (11 October 1939 – 8 June 2018) was a Brazilian professional tennis player. During her 11-year career in the 1950s and 1960s, she won 19 major titles (seven in women's singles, 11 in women's doubles and one in mixed doubles), making her the most successful South American tennis player in history and the only one ever to win Wimbledon in singles. Bueno was the year-end No.\n[…]\nFor 65 years, Bueno remained the only Brazilian woman to have won a Grand Slam title, until Luisa Stefani won the mixed doubles title alongside fellow Brazilian Rafael Matos at the Australian Open in 2023.\n[…]\nOne of the last public appearances by Maria Bueno was at the 2016 Summer Olympics closing ceremony, in which she carried the national flag of Brazil during the playing of the Brazilian national anthem.\n[…]\nThe Seniors World Team Championships for the women's 50 age category is named \"Maria Esther Bueno Cup\" by the International Tennis Federation (ITF) in her honour.\n[…]\nIn October 2018, Maria Esther Bueno received the Medal of Sporting Merit from the Chamber of Councilors of São Paulo, according to the Resolution 03/2014.\n[…]\nThe Maria Esther Bueno Cup, an under-24 men's tennis competition that ran from 2018 to 2023, was named in her honour.\n[…]\nSeveral statues honoring  Bueno have been unveiled over the years.\n[…]\nOn 24 November 2018, the Sociedade Harmonia de Tênis club in São Paulo unveiled a statue of Bueno during the Maria Esther Bueno Cup. The ceremony, attended by members of her family, also featured an exhibition of trophies and clothing celebrating her career.\n[…]\nBueno won 19 of her 35 Grand Slam finals. This represents a success rate of 54%.\n[…]\nMaria Bueno at the International Tennis Hall of Fame\n[…]\nMaria Bueno at the Women's Tennis Association\n[…]\nMaria Bueno at World Tennis\n[…]\nMaria Bueno at the Billie Jean King Cup (archived)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Gustavo_Kuerten",
        "situacao": "ok",
        "texto": "Gustavo \"Guga\" Kuerten (Portuguese: [ɡusˈtavu ˈkiʁtẽ]; born 10 September 1976) is a Brazilian former professional tennis player. He was ranked as the world No. 1 in men's singles by the Association of Tennis Professionals for 43 weeks, including as the year-end No. 1 in 2000. Kuerten won 20 ATP Tour-level singles titles, including three majors at the French Open in 1997, 2000, and 2001, as well as\n[…]\nFresh from winning a Challenger title, Kuerten unexpectedly won the 1997 French Open, the first Brazilian to win a Grand Slam singles title since Maria Bueno at the 1966 U.S. Open. The tournament was only his third grand slam, setting a record for any player in the open era, tied with Mats Wilander. He remains the only player to win a Challenger and a Grand Slam in consecutive weeks.\n[…]\nOnly Mark Edmondson (ranked 212th) and Goran Ivanišević (ranked 125th) were ranked lower than Kuerten when winning a Grand Slam singles title.\n[…]\nKuerten was responsible for the only defeat of Roger Federer in a Grand Slam event in 2004. In Kuerten's only previous encounter against Federer on clay, in the Hamburg Masters 2002, Federer defeated Kuerten 6–0, 1–6, 6–2. When they met again in the third round at the French Open in 2004, it was Federer who was in dominant form, the world no. 1, and expected to win against the injury-ridden Kuerten. Instead, it was Kuerten who overpowered and dominated Federer, beating him in straight sets.\n[…]\nThis would remain the last time that Federer was defeated in any Grand Slam prior to the quarterfinals stage until his round 2 loss against Serhiy Stakhovsky at Wimbledon in 2013.\n[…]\nO tênis no Brasil: de Maria Esther Bueno a Gustavo Kuerten. Codex. 2004. ISBN 85-7594-031-7."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Maria_Esther_Bueno",
        "situacao": "ok",
        "texto": "Maria Esther Andion Bueno (São Paulo, 11 de outubro de 1939 — São Paulo, 8 de junho de 2018), conhecida no exterior como Maria Bueno, foi uma tenista brasileira, que atuou nas décadas de 1950, 1960 e 1970, sendo uma das raras tenistas a conquistar títulos em três décadas diferentes. Segundo o jornalista esportivo José Nilton Dalcim: “Maria Esther Bueno é a maior atleta feminina brasileira de todos\n[…]\nMaria Bueno foi por 65 anos a única mulher nascida no Brasil a ter conquistado títulos em torneios Grand Slam de tênis, até que em 2023, jogando ao lado do também brasileiro Rafael Matos, a também paulistana Luisa Stefani venceu o título de duplas mistas no Australian Open.\n[…]\nO primeiro título de simples de Maria Esther Bueno em um torneio de Grand Slam, veio quando tinha apenas dezenove anos de idade, no dia 4 de julho de 1959, na \"grama sagrada\" de Wimbledon. Ao vencer Darlene Hard, por 6/3 e 6/4, ela pôs fim a 21 anos de domínio norte-americano em Wimbledon.\n[…]\nEm 1965, o joelho esquerdo de Maria Esther Bueno já incomodava. Passou por uma cirurgia e precisou de quatro meses de recuperação.\n[…]\nA primeira participação de Maria Esther Bueno nos Jogos Pan Americanos foi em 1955, na cidade do México, com apenas quinze anos. Ela conquistou uma medalha de bronze nas duplas femininas, jogando ao lado de  Ingrid Charlotte Metzner\n[…]\nTreinando com homens (já que quase nenhuma mulher praticava tênis no país), Maria Esther Bueno deu um aspecto diferente à técnica do jogo no feminino, apresentando mais peso e rotação à bola. A forma como 'deslizava' pelas quadras, inclusive na grama, e sua suavidade nas quadras chamavam a atenção e lhe rendeu o apelido de \"Bailarina do Tênis\". \"Sua movimentação era simplesmente etérea. Ela não andava, planava na quadra\", relata Roberto Marcher em seu livro O Tênis no Brasil.\n[…]\nTotal de títulos: 589\n[…]\nReportagem sobre a vida de Maria Esther Bueno",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Taça Davis",
      "descricao": "Troféu da principal competição de seleções do tênis masculino."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "No século vinte, qual país venceu mais vezes a Taça Davis, a competição de seleções do tênis masculino?",
    "resposta": "Estados Unidos",
    "distratores": [
      "Austrália",
      "França",
      "Grã-Bretanha"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Davis_Cup"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Davis_Cup",
        "situacao": "ok",
        "texto": "The Davis Cup is the premier international team event in men's tennis. It is organised by World Tennis and contested annually between teams from over 150 competing countries, making it the world's largest annual team sporting competition. It is described by the organisers as the \"World Cup of Tennis\" and the winners are referred to as the world champions. The competition began in 1900 as a challen\n[…]\nBeginning in 1972, the format was changed to a knockout competition, so that the defending champion was required to compete in all rounds, and the Davis Cup was awarded to the champion.\n[…]\nIn 1989, the relegation round was renamed to the \"World Group Qualifying Round\" and expanded to include a total of 16 teams. The losers of the first round of the World Group were matched against the winners of the regional zone groups, which were each split into two subgroups, and the winner of the match qualified for the subsequent year's World Group. That same year, the tiebreak was introduced into Davis Cup competition, and from 2016 it is used in all five sets.\n[…]\nThe 18 best national teams are assigned to the World Group and compete annually for the Davis Cup. Nations which are not in the World Group compete in one of three regional zones (Americas, Asia/Oceania, and Europe/Africa). The competition is spread over four weekends during the year. Each elimination round between competing nations is held in one of the countries, and is played as the best of five matches (4 singles, 1 doubles).\n[…]\nAs the World Group will now take place as one single competition, this event has been named as the Davis Cup Finals. The lower zone groups I and II will be composed of single ties deciding promotion or relegation.\n[…]\nAs in other cup competitions tie is used in the Davis Cup to mean an elimination round. In the Davis Cup, the word rubber means an individual match.\n[…]\nDavis Cup Tennis, a video game based on the event"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Copa_Davis",
        "situacao": "ok",
        "texto": "A Copa Davis (português brasileiro) ou Taça Davis (português europeu) é um evento internacional de tênis masculino. A maior competição por equipes no esporte, a Copa Davis é dirigida pela Federação Internacional de Tênis - ITF e é jogada entre times de diversos países, no sistema de eliminação direta (ou mata-mata). Em 2005, 134 nações inscritas na competição em formato de equipes.\n[…]\nAté 1973, a Davis foi dominada por 4 equipes, Estados Unidos, Reino Unido, Austrália (até 1913 Australásia) e França. Em 1974, a África do Sul venceu ao chegar a final contra a Índia, a qual se recusou a viajar para a África do Sul em protesto as políticas de apharteid, sendo desclassificada.\n[…]\nO Brasil não tem muita tradição na Davis. Fez sua estreia em 1935, com Ricardo Pernambuco, Ivo Simons, Nélson Cruz, Inácio Nogueira, Humberto Costa e Roberto Whately, desclassificados na primeira rodada pelos Estados Unidos. Até 1966, os brasileiros não conseguiram nenhuma vitória expressiva. A partir desse ano, o Brasil passa ser mais respeitado internacionalmente. Thomaz Koch e Edison Mandarino levam o Brasil às semifinais contra a Índia, mas foi derrotado em Calcutá.\n[…]\nO mesmo acontece em 1971, quando o Brasil deixou de disputar a final contra os Estados Unidos ao perder para a Romênia. Individualmente Thomaz Koch é o brasileiro que mais se destacou, sendo o sétimo jogador em número de vitórias em toda a história da competição. O Brasil voltou às semifinais em 1992, liderado por Luiz Mattar e Jaime Oncins, após vencer sete confrontos seguidos, sua mais expressiva série de vitórias, incluindo a Alemanha de Boris Becker e a Itália - no Rio de Janeiro e em Maceió.\n[…]\nA partida entre Leonardo Mayer 3 x 2 João Souza (Feijão), válida pela Copa Davis de 2015, é o jogo de simples mais longo da história do torneio, com duração de 6h42.\n[…]\nCopa Billie Jean King\n[…]\n«Copa/Taça Davis». Página oficial (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Quadra de grama",
      "descricao": "Tipo de quadra de tênis com superfície de grama, a original do lawn tennis."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Entre os pisos usados no tênis profissional, em qual a bola costuma correr mais rápido e quicar mais baixo?",
    "resposta": "Grama",
    "distratores": [
      "Saibro",
      "Quadra dura",
      "Areia"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Grass_court"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Grass_court",
        "situacao": "ok",
        "texto": "A grass court is one of the types of tennis court on which the sport of tennis, originally known as \"lawn tennis\", is played. Grass courts are made of grasses in different compositions depending on the tournament.\n[…]\nFederer has contested an all-time record twelve Wimbledon singles finals, and has the longest grass court winning streak in the Open Era, when he won 65 consecutive matches between 2003 and 2008, until he was defeated by Rafael Nadal in the 2008 Wimbledon final. Additionally, Novak Djokovic has had significant success at Wimbledon in the 2010s and beyond – winning the tournament seven times, including defeating Federer three times in the final of Wimbledon in 2014, 2015 and 2019.\n[…]\nThe most successful active female grass-court player is Venus Williams, with five Wimbledon singles titles. Venus has won five out of her nine Wimbledon finals appearances (losing three to her sister, Serena), and the pair have won six titles in the ladies' doubles together.\n[…]\nCompared to clay and hard courts, the professional grass court season is much shorter. Until 2014, it consisted only of Wimbledon, two weeks of tournaments in Britain and continental Europe leading up to it, and the Hall of Fame Tennis Championships at Newport, Rhode Island, United States the week after. In 2015 it was extended, with an extra week between the French Open and Wimbledon. On the ATP Tour, the Stuttgart Open became a grass court tournament that year.\n[…]\nIn 2017 a new ATP 250 tournament in Antalya, Turkey, was played a week before Wimbledon. On the WTA Tour Mallorca, Spain, began hosting a grass court tournament beginning in 2016.\n[…]\nClay court\n[…]\nHard court\n[…]\nCarpet court\n[…]\nWood court\n[…]\nLTA – Grass Court Guidance"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Quadra_de_grama",
        "situacao": "ok",
        "texto": "Uma quadra de grama é um dos quatro tipos diferentes de quadra de tênis em que o esporte de tênis, originalmente conhecido como \"tênis de grama\", é jogado. As quadras de grama são feitas de gramíneas em diferentes composições dependendo do torneio.\n[…]\nEmbora as quadras de grama sejam mais tradicionais do que os outros tipos de quadras de tênis, os custos de manutenção das quadras de grama são mais altos do que os das quadras duras e quadras de saibro. As quadras de grama (na ausência de capas adequadas) devem ser deixadas para o dia se a chuva aparecer, pois a grama fica muito escorregadia quando molhada.\n[…]\nComo as quadras de grama tendem a ser escorregadias, a bola freqüentemente derrapa e salta baixo, mantendo a maior parte de sua velocidade, raramente subindo acima da altura do joelho. Além disso, muitas vezes há saltos ruins. Como resultado, os jogadores devem alcançar a bola mais rapidamente em relação a outras superfícies, e os comícios provavelmente serão comparativamente breves; portanto, velocidade e potência são recompensados na grama.\n[…]\nFederer tem a mais longa sequência de vitórias em quadras de grama na Era Aberta, vencendo 65 partidas consecutivas em grama de 2003 a 2008, onde foi derrotado por Rafael Nadal na final de Wimbledon em 2008.\n[…]\nA temporada de quadras de grama profissional é comparativamente curta. Até 2014, consistia apenas em Wimbledon, duas semanas de torneios na Grã-Bretanha e na Europa continental que o antecederam, e o Hall of Fame Tennis Championships em Newport, Rhode Island, Estados Unidos, na semana seguinte. Em 2015, foi prorrogado, com uma semana extra entre o Aberto da França e Wimbledon. No ATP Tour, o Stuttgart Open se tornou um torneio de quadra de grama naquele ano.\n[…]\nQuadra de tênis",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "US Open",
      "descricao": "Torneio de Grand Slam de tênis disputado em Nova York, o último da temporada."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Em 1973, qual torneio de Grand Slam se tornou o primeiro a pagar prêmios iguais a homens e mulheres?",
    "resposta": "US Open",
    "distratores": [
      "Wimbledon",
      "Roland Garros",
      "Aberto da Austrália"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/US_Open_(tennis)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/US_Open_(tennis)",
        "situacao": "ok",
        "texto": "The US Open Tennis Championships, commonly called the US Open (stylized in all lowercase), is a hardcourt tennis tournament organized by the United States Tennis Association annually in Queens, New York City. It is chronologically the fourth and final of the four Grand Slam tennis events, held after the Australian Open, French Open, and Wimbledon.\n[…]\nIn 1973, the US Open became the first Grand Slam tournament to award equal prize money to men and women, with that year's singles champions, John Newcombe and Margaret Court, receiving $25,000 each. Beginning in 1975, following complaints about the surface and its impact on the ball's bounce, the tournament was played on clay courts instead of grass. This was also an experiment to make it more \"TV friendly\". The addition of floodlights allowed matches to be played at night.\n[…]\nIn 2006, the US Open introduced instant replay reviews of line calls, using the Hawk-Eye computer system. It was the first Grand Slam tournament to use the system. The Open felt the need to implement the system because of the controversial quarterfinal match at the 2004 US Open between Serena Williams and Jennifer Capriati, where a number of important line calls went against Williams.\n[…]\nThe introduction of the Player Support Program coincided with the formation of a new Grand Slam Player Council by the US Open, Australian Open, Roland-Garros and Wimbledon. The council was established to give players a voice on on-court and in-tournament matters and to provide recommendations to the US Open on how the Player Support Program should be implemented.\n[…]\nThe US Open's website allows viewing of live streaming video, but unlike other Grand Slam tournaments, does not allow watching video on demand. The site also offers live radio coverage.\n[…]\nMedia related to US Open (tennis) at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/US_Open_%28t%C3%AAnis%29",
        "situacao": "ok",
        "texto": "US Open (ou Aberto dos Estados Unidos / Open dos Estados Unidos), nomeado formalmente como \"United States Open Tennis Championships\", é um torneio de tênis disputado nos Estados Unidos. O US Open é a encarnação moderna do antigo U.S. National Championship, sendo este um dos mais antigos torneios de tênis do mundo, cujo torneio masculino ocorreu pela primeira vez em 1881. Desde 1987, o US Open é cr\n[…]\nO primeiro campeonato dos EUA aconteceu em 1881 e é disputado em agosto, em Newport, Rhode Island. O simples feminino foi disputado pela primeira vez em 1887. Em 1903, Lawrence Doherty foi o primeiro estrangeiro a vencer o torneio. Em 1919, o torneio foi transferido para a cidade de Nova York e, em 1926, o francês René Lacoste, tornou-se o primeiro estrangeiro não falante do inglês a triunfar no US Open.\n[…]\nO torneio foi disputado em quadras de grama até 1974 e em saibro verde entre 1975 e 1977. Em 1997, o estádio Arthur Ashe é inaugurado, podendo acolher 23.500 espectadores, o maior do mundo. Junto com o Australian Open, o Torneio de Roland Garros e o Torneio de Wimbledon, o US Open compõe os quatro torneios do Grand Slam. O US Open é o quarto e último torneio do Grand Slam da temporada. Ele é disputado em superfície dura (\"Decoturf\").\n[…]\nO US Open é o único Grand Slam que tem sido jogado todos os anos sem interrupção.\n[…]\nDe 1984 até 2015 o US Open teve o costume de praticar um calendário com um conceito conhecido como \"Super Saturday\", na qual as mulheres fecham no sábado a final entre as partidas das duas semi-finais masculinas. Os homens fazem a final no domingo. Visando atribuir a audiência televisa, esse calendário dá prioridade para as respectivas finais, porém dando assim um dia a menos para os tenistas descansarem para a final.\n[…]\nLista de campeões em simples de torneios do Grand Slam\n[…]\nLista de campeãs em simples de torneios do Grand Slam",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Rod Laver Arena",
      "descricao": "Quadra central do Aberto da Austrália, no complexo Melbourne Park, em Melbourne."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Qual torneio de Grand Slam foi o primeiro a ter uma quadra central com teto retrátil, inaugurada em 1988?",
    "resposta": "Aberto da Austrália",
    "distratores": [
      "Wimbledon",
      "US Open",
      "Roland Garros"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Australian_Open",
      "https://en.wikipedia.org/wiki/Rod_Laver_Arena"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Australian_Open",
        "situacao": "ok",
        "texto": "The Australian Open is a tennis tournament organised by Tennis Australia annually at Melbourne Park in Melbourne, Victoria, Australia. It is the first of the four Grand Slam tennis tournaments every year, held before the French Open, Wimbledon and the US Open.\n[…]\nFirst held in 1905 as the Australasian championships, the Australian Open has grown to become one of the biggest sporting events in the Southern Hemisphere. Nicknamed \"the happy slam\", the Australian Open is the highest attended Grand Slam event, with more than 1,360,000 people attending the 2026 tournament, including qualifying.\n[…]\nPrior to 1996, the Australian Open rewarded fewer ATP rankings points than the other three Grand Slam tournaments. The reason cited by the ATP was the prize money offered by the Australian Open was far less than the other three majors.\n[…]\nStarting in 2024, the Australian Open began on a Sunday, one day earlier than usual. Day sessions on Rod Laver Arena and Margaret Court Arena featured a minimum of two matches (down from three) in an effort to reduce the possibility of matches finishing in the early hours of the following morning.\n[…]\nConstruction of a new 5,000 seat capacity stadium began in 2019 as part of a A$271 million redevelopment of the precinct. The new stadium, Kia Arena, was unveiled by Australian Open officials on 22 November 2021.\n[…]\nUnlike the other three Grand Slam tournaments, which became open in 1968, the Australian tournament opened to professionals in 1969.\n[…]\nThe Australian Open is the most attended Grand Slam tournament. The tournament in 2025 set a new attendance record of 1,218,831 while the single-day attendance record is 97,132, recorded on the 17 January 2025.\n[…]\nAustralian Open series\n[…]\nTennis Australia website\n[…]\nAustralian Open – Grand Slam History"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Rod_Laver_Arena",
        "situacao": "ok",
        "texto": "Rod Laver Arena is a multipurpose arena located within Melbourne Park, in Melbourne, Victoria, Australia. The arena is the main venue for the Australian Open, the first Grand Slam tennis tournament of the calendar year.\n[…]\nOriginally known in 1988 as the National Tennis Centre at Flinders Park, the arena has officially changed its name twice. First in 1996, when it was known as the Centre Court, and again on 16 January 2000 to honour Rod Laver, a three-time winner of the Australian Open and one of the world's greatest tennis players.\n[…]\nRod Laver Arena consistently hosts many of Melbourne's highest-profile musical and entertainment concerts. In 2009, the arena polled 9th out of 50 worldwide top arenas for first-quarter ticket sales, making it the second highest ticket selling venue in Australia, second to Sydney's Afterpay Arena, which placed third. In 2012, the arena became Australia's highest selling venue and 4th in the world, based on 2011 ticket sales.\n[…]\nAmerican singer Billie Eilish performed four shows on her Happier Than Ever, The World Tour at the Rod Laver Arena. Eilish performed at the Rod Laver Arena from 22 September 2022 to 24 September 2022, and again on 26 September 2022. Eilish returned to Rod Laver Arena in 2025 on her Hit Me Hard And Soft: The Tour, on March 4, 5, 7 and 8 as part of the final Australian shows of said tour.\n[…]\nFrom 1988 until 2007, the surface of the court at the Australian Open and on Rod Laver Arena was Rebound Ace, which was coloured green and played slowly. The surface was also blamed for many injuries in the Australian Open, with many players claiming that the surface became sticky in hot weather, making it difficult to play on.\n[…]\nList of indoor arenas in Australia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Australian_Open",
        "situacao": "ok",
        "texto": "O Australian Open (no Brasil, Aberto da Austrália; em Portugal, Open da Austrália) é um torneio de tênis, da categoria Grand Slam, disputado em Melbourne, na Austrália.\n[…]\nDesde a primeira edição do Australian Open, em 1905, o torneio já foi disputado em seis cidades diferentes, até que foi transferido para a cidade de Melbourne, no ano de 1972. Em 1908, um estadunidense, Fred Alexander, tornou-se o primeiro estrangeiro a triunfar no Australian Open. A competição foi aberta às mulheres somente em 1922 [en]. Em 1988, a grama é abandonada em benefício de uma superfície sintética dura, o  Rebound Ace, uma superfície similar à do US Open, porém mais rápida.\n[…]\nJuntatente com o Torneio de Roland Garros, o Torneio de Wimbledon e o US Open, o Australian Open compõe os quatro torneios do Grand Slam. Em 1985, os organizadores do Australian Open decidem mudar as datas do torneio. A edição de 1986 não foi disputada. Desde sua criação, o torneio era disputado em dezembro, no final da temporada.\n[…]\nAtualmente, é disputado no final do mês de janeiro, sendo o primeiro torneio do Grand Slam da temporada, já que foi o primeiro torneio do Grand Slam a possuir uma quadra beneficiada de um teto móvel, muito mais apropriada ao calor do verão australiano e possíveis chuvas.\n[…]\nDiante disso muitos não podiam viajar facilmente para o torneio, chegavam em Perth, do lado Oeste da Austrália e precisavem se deslocar até o lado leste com cerca 3 000 quilômetros (1 900 mi) entre as costas. Em Christchurch, em 1906, o pequeno torneio de padrão Grand Slam que foi disputado, teve apenas 10 tenistas, sendo dois australianos e 8 neozelandeses.\n[…]\nAustralian Open TV no YouTube",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Era Aberta",
      "descricao": "Período do tênis iniciado em 1968, em que profissionais e amadores passaram a competir nos mesmos torneios."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Em 1968, qual torneio de Grand Slam foi o primeiro a abrir as portas para os tenistas profissionais?",
    "resposta": "Roland Garros",
    "distratores": [
      "Wimbledon",
      "US Open",
      "Aberto da Austrália"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Open_Era",
      "https://en.wikipedia.org/wiki/1968_French_Open"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Open_Era",
        "situacao": "ok",
        "texto": "The racket sport traditionally named lawn tennis was invented in Edgbaston, Birmingham, England, and is now commonly known simply as tennis. It is the direct descendant of what is now known as real tennis or royal tennis, which continues to be played today as a separate sport with more complex rules.\n[…]\nBefore the Open Era, the leading professional players were under contract with a professional promoter who controlled their appearances. For example, in 1926, Lenglen and Richards toured North America along with Paul Féret and Mary K. Browne under contract to Charles C. Pyle. The main events of the professional circuit comprised head-to-head competition and by-invitation Pro Championships, which were the equivalent of the Grand Slam tournaments on the professional circuit.\n[…]\nThe Open Era began in April 1968 when Grand Slam tournaments agreed to open their events to allow professional players to compete with amateurs.\n[…]\nBefore 1968, only amateurs were allowed to compete in Grand Slam tournaments and other events organized or sanctioned by the ILTF, including the Davis Cup.\n[…]\nDuring the first years of the Open Era, power struggles between the ILTF and the commercial promoters led to boycotts of Grand Slam events. The first Open Era event was the 1968 British Hard Court Championships held in April at The West Hants Club in Bournemouth, England, while the first open Grand Slam tournament was the 1968 French Open in May. Both tournaments were won by Ken Rosewall.\n[…]\nIn 1970, neither WCT nor NTL players played in the French Open.\n[…]\nBetween 1974 and 1978, any tennis player who participated in the nascent World TeamTennis, which conflicted with the European leg of the Grand Prix circuit, was banned by the French Tennis Federation from playing in the French Open in the same calendar year."
      },
      {
        "url": "https://en.wikipedia.org/wiki/1968_French_Open",
        "situacao": "ok",
        "texto": "The 1968 French Open was a tennis tournament that took place on the outdoor clay courts at the Stade Roland Garros in Paris, France. The tournament was held from Monday 27 May until Sunday 9 June 1968. It was the 67th edition of the French Open, the 38th to be open to foreign competitors, and the second major of the year.\n[…]\nThis was the first Grand Slam that allowed professional players to compete and the first Grand Slam tournament in the Open Era. Ken Rosewall and Nancy Richey won the single titles.\n[…]\nThe 72nd staging of the tournament went ahead, despite the French General Strike of 1968 which began on 2 May of that year.\n[…]\nIt was Rosewall's 5th career Grand Slam title and his 2nd French Open title.\n[…]\nIt was Richey's 2nd and last career Grand Slam title and her only French Open title.\n[…]\nIt was Rosewall's 12th career Grand Slam title and his 4th and last French Open title. It was Stolle's 14th career Grand Slam title and his 3rd and last French Open title.\n[…]\nIt was Dürr's 3rd career Grand Slam title and her 3rd French Open title. It was Haydon-Jones' 4th career Grand Slam title and her 4th French Open title.\n[…]\nIt was Durr's 4th career Grand Slam title and her 4th French Open title. It was Barclay's 1st career Grand Slam title and his 1st French Open title.\n[…]\nFrench Open official website"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hist%C3%B3ria_do_t%C3%AAnis",
        "situacao": "ok",
        "texto": "O esporte que atualmente é conhecido como 'Tênis' originou-se no século XIX, na Inglaterra, sendo o descendente direto do que hoje é conhecido como \"Ténis real\" ou \"Jeu de paume\" (que continua a ser jogado hoje como um esporte separado com regras mais complexas).\n[…]\nAssim, Wimbledon, o US Open, o Aberto da França e o Aberto da Austrália (de 1905) tornaram-se os eventos de maior prestígio no tênis, algo que se mantém até hoje. Juntos, esses torneios são chamados de Majors ou Slams (termo retirado do basebol).\n[…]\nEm 1968, após denúncias de lavagem de dinheiro envolvendo tenistas menos expressivos, iniciou-se a era aberta, onde todos os jogadores poderiam competir em todos os torneios. Com o estabelecimento da era aberta, também iniciou-se o circuito profissional internacional, aumentando a receita e a popularidade do esporte pelo mundo. Com isso, o jogo foi ficando cada vez mais dinâmico; surgiu o backhand de duas mãos e alguns jogadores passaram a ir melhor com o revés do que com o forehand.\n[…]\nA Era Aberta começou em 1968, quando torneios de Grand Slam concordaram em permitir que jogadores profissionais competissem com amadores. Antes de 1968, apenas amadores podiam competir em torneios do Grand Slam e outros eventos organizados ou sancionados pela ILTF, incluindo a Copa Davis.\n[…]\nDurante os primeiros anos da \"Era Aberta\", as lutas de poder entre a ILTF e os promotores comerciais levaram a boicotes aos eventos do Grand Slam. O primeiro evento da Era Aberta foi o \"British Hard Court Championships\" de 1968 realizado em abril no The West Hants Club em Bournemouth, Inglaterra, enquanto o primeiro torneio aberto do Grand Slam foi o Aberto da França de 1968 em maio. Ambos os torneios foram vencidos por Ken Rosewall.\n[…]\nAssociação dos Tenistas Profissionais",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Pete Sampras",
      "descricao": "Tenista americano, ex-número 1 do mundo, vencedor de 14 títulos de Grand Slam."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Pete Sampras ganhou catorze títulos de Grand Slam, mas nunca venceu um dos quatro torneios. Qual?",
    "resposta": "Roland Garros",
    "distratores": [
      "Aberto da Austrália",
      "US Open",
      "Wimbledon"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pete_Sampras"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pete_Sampras",
        "situacao": "ok",
        "texto": "Pete Sampras (born August 12, 1971) is an American former professional tennis player. One of the most successful tennis players of all time, he was ranked as the world No. 1 in men's singles by the Association of Tennis Professionals (ATP) for 286 weeks (third-most of all time), and finished as the year-end No. 1 six consecutive times.\n[…]\nSampras lost in the fourth round of the Australian Open to Marat Safin in four sets. \"Muttering, slouching, slamming his racket to the ground and smacking a ball into the stands, Pete Sampras was in typical French Open form\" as he lost to Andrea Gaudenzi in round one, a sixth consecutive early loss at Roland Garros for Sampras. He suffered an early exit from Wimbledon too, losing in the second round to No. 145 fast-court specialist George Bastl of Switzerland.\n[…]\nSampras beat Rafter in the 2001 Indian Wells quarterfinals and Pete beat Pat again in the fourth round of the 2001 US Open. This match ended Rafter's Grand Slam singles career.\n[…]\nDuring the Open Era, only Borg (1978–81 French Open and 1976–80 Wimbledon), Sampras (1997–2000 Wimbledon), Federer (2003–07 Wimbledon and 2004–08 US Open), Rafael Nadal (2005–08 French Open, 2010–14 French Open and 2017–20 French Open) and Djokovic (2018–2022 Wimbledon) have won at least one Grand Slam tournament four consecutive times.\n[…]\nKen Rosewall, Sampras and Nadal are the only men to have won Grand Slam singles titles as a teenager, in their 20s, and in their 30s.\n[…]\nSampras is the only player to win all seven Wimbledon finals he played. In terms of most finals won at a single Grand Slam tournament without losing any, he is second in the Open Era behind only Nadal (who won all fourteen of his French Open finals).\n[…]\nPete Sampras at the International Tennis Hall of Fame\n[…]\n\"Pete Sampras' Son\". Cooper Magazine. January 28, 2025. Retrieved January 28, 2025."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pete_Sampras",
        "situacao": "ok",
        "texto": "Petros “Pete” Sampras (Washington, DC, 12 de agosto de 1971) é um ex-tenista profissional norte-americano. É considerado por muitos como um dos maiores jogadores de todos os tempos. Com 14 conquistas de Grand Slam, é o quarto maior vencedor de torneios desse nível, ficando atrás apenas de Roger Federer (20), Rafael Nadal (22) e Novak Djokovic (24).\n[…]\nPor 7 vezes venceu o tradicional torneio de Wimbledon, disputado na grama. Já seus outros 7 títulos de Grand Slam foram conquistados no piso duro, sendo que 5 no US Open e 2 no Open da Austrália. Entretanto, nenhuma vez alcançou a final do Open da França, jogado no saibro. O fato de ter sido tão eficiente nas quadras de grama e piso duro mas ineficiente nas de saibro foi devido ao seu estilo de jogo, o saque e voleio.\n[…]\nSampras venceu 64 torneios profissionais da ATP na carreira e manteve-se na liderança do ranking da ATP por 286 semanas — recorde que durou quase 12 anos até ser ultrapassado por Roger Federer em 2012 —, terminando como melhor tenista do ano entre 1993 e 1998. Teve como maior rival o ex-tenista e compatriota Andre Agassi, com quem travou famosas batalhas dentro das quadras.\n[…]\nEm 25 de outubro de 2009, Sampras jogou uma partida-exibição contra Andre Agassi em Macau, na China, e venceu por 2 sets a 1.\n[…]\nSampras é membro do International Tennis Hall of Fame desde 2007.\n[…]\nPete Sampras na Associação de Tenistas Profissionais",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Bola de tênis",
      "descricao": "Bola de borracha pressurizada e revestida de feltro usada no tênis."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Tradicionalmente, o feltro que reveste as bolas de tênis leva qual fibra natural, misturada ao náilon?",
    "resposta": "Lã",
    "distratores": [
      "Algodão",
      "Seda",
      "Linho"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Tennis_ball"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tennis_ball",
        "situacao": "ok",
        "texto": "A tennis ball is a small, hollow ball used in games of tennis and real tennis. Tennis balls are fluorescent yellow in professional competitions, but in recreational play other colors are also used. Tennis balls are covered in a fibrous felt, which modifies their aerodynamic properties, and each has a white curvilinear oval covering it.\n[…]\nJohn Moyer Heathcote suggested and tried the experiment of covering the rubber ball with flannel, and by 1882, Wingfield was advertising his balls as clad in stout cloth made in Melton Mowbray. Tennis balls were initially entirely made of rubber, but they were later refined by using flannel and stitching it around the core, which used to be filled with rubber. The tennis ball quickly switched to having a hollow core, using gas to pressurize the inside.\n[…]\nOriginally, tennis ball manufacturing was done by cutting vulcanized rubber sheets into a shape similar to that of a three-leaf clover. Before the formation of the rubber into a sphere (which was executed via machinery), chemicals that reacted to produce a gas were added to produce pressure into the hollow inside once the sphere was assembled. The switch to the modern method of joining two hemispheres was done to improve uniformity of wall thickness.\n[…]\nEach year approximately 325 million balls are produced, which contributes roughly 20,000 tonnes (22,000 short tons) of waste in the form of rubber that is not easily biodegradable. Historically, tennis ball recycling has not existed. Balls from the Wimbledon Championships are now recycled to provide field homes for the nationally threatened Eurasian harvest mouse.\n[…]\nInternational Tennis Federation's history of the rules of the tennis ball. Archived 2015-11-06 at the Wayback Machine.\n[…]\nITF Grand Slam Rules: Section I: The Ball (PDF). Archived 2015-11-06 at the Wayback Machine."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bola_de_t%C3%AAnis",
        "situacao": "ok",
        "texto": "Bola de tênis (ou ténis) é uma bola com pequeno diâmetro, se comparada com outras, e utilizada na prática esportiva do tênis. Para impulsioná-la utiliza-se a  raquete. Um profissional pode fazer com que ela chegue a 263 km/h. A bola  é revestida por filtros (geralmente de cor verde com listras brancas), por que isso permite traçar uma trajetória mais correta, em comparação com uma bola totalmente \n[…]\nO ingrediente básico das bolas de tênis é a borracha. No primeiro passo, a borracha é prensada em moldes e ganha o formato de uma concha. Em seguida, para as bolas pressurizadas, uma pastilha de nitrogénio é colocada no meio de duas conchas de borracha e unidas por uma cola especial. Para reforçar a junção, as duas metades são fundidas em uma prensa a 200 °C, durante uma etapa conhecida como vulcanização. Com o calor, a pastilha de nitrogénio explode, liberando o gás que enche a bola.\n[…]\nSua superfície externa é revestida com feltro, um tecido formado por nylon e lã amarela. Primeiro, dois pedaços de feltro são cortados e colados com uma massa branca. Depois, a bola passa por nova vulcanização para melhor aderência do material à bola.\n[…]\nNo passo final, as bolas são embaladas em tubos de plástico hermeticamente selados, sob uma pressão aproximada de 2 atmosferas para evitar qualquer perda de pressão antes da chegada às quadras de tênis. Em torneios profissionais, uma bola não é usada por mais que 9 games. Basta esse curto período para que surjam pequenas deformações em sua superfície.\n[…]\nTambém é possível marcar ponto caso a bola rebatida pelo adversário não ultrapasse o centro da quadra, delimitado pela rede. É importante também saber que não é necessário esperar o primeiro quique da bola para rebatê-la, que é o que ocorre quando o jogador executa um voleio.\n[…]\nTênis\n[…]\nBola\n[…]\nLista de quadras de tênis por capacidade\n[…]\n«International Tennis Federation»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Raquete de tênis",
      "descricao": "Instrumento com aro e cordas tensionadas usado para golpear a bola no tênis."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Antes do náilon, as cordas das raquetes de tênis eram feitas de que parte do corpo de animais?",
    "resposta": "Intestino",
    "distratores": [
      "Tendão",
      "Pele",
      "Crina"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Catgut",
      "https://en.wikipedia.org/wiki/Racket_(sports_equipment)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Catgut",
        "situacao": "ok",
        "texto": "Catgut (also known as gut) is a type of cord that is prepared from the natural fiber found in the walls of animal intestines. Catgut makers usually use sheep or goat intestines, but occasionally use the intestines of cattle, hogs, horses, mules, or donkeys. Despite the name, catgut has never been documented to be made from cat intestines.\n[…]\nNatural gut is still used as a high-performance string in tennis racquets, although it had more popularity in the past and is being displaced by synthetic strings.\n[…]\nTo prepare catgut, workers clean the small intestines, free them from any fat, and steep them in water. Then they scrape off the external membrane with a blunt knife, and steep the intestines again for some time in potassium hydroxide. Then they smooth and equalize the intestines by drawing them out. Lean animals yield the toughest gut."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Racket_(sports_equipment)",
        "situacao": "ok",
        "texto": "A racket or racquet is an item of sporting equipment used to strike a ball or shuttlecock in a variety of sports. A racket consists of three major components: a widened distal end known as the head, an elongated handle known as the grip, and a reinforced connection between the head and handle known as the throat or heart. The head of the racket forms a flattened firm surface, known as the face, wh\n[…]\nRacket design, materials and manufacturing has changed considerably over the centuries. The frame of rackets for all sports was traditionally made of solid wood (later laminated wood) and the strings of animal intestine known as catgut. The traditional racket size was limited by the strength and weight of the wooden frame which had to be strong enough to hold the strings and stiff enough to hit the ball or shuttle.\n[…]\nGraphite-composite rackets are today's industry standard in professional tennis.\n[…]\nStiffer rackets typically offer more power and control at the expense of increased ball shock, which can lead to injury or tennis elbow aggravation. Typically, power and control are at odds. However, in the case of stiff rackets, less energy is dissipated by the racket deforming, transmitting it back to the ball. Control is improved because there is less deformation.\n[…]\nNavratilova also used string that was much softer than what anyone else on tour used (thick uncoated natural gut), to help compensate for the stiffness of her racket. The vastly higher injury rate in tennis (when compared with the wood era) is, in part, due to the increase in stiffness, both of the racket and of the strings.\n[…]\nReal tennis uses wooden rackets and cork-filled balls. It is a very different sport from today's lawn tennis.\n[…]\nTennis racket theorem\n[…]\nList of racket sports\n[…]\nTennis racket design by Howard Head; (1974) Smithsonian Institution Libraries\n[…]\nA Brief Look on the History of Table Tennis Rackets"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Catgut",
        "situacao": "ok",
        "texto": "Catgut ou categute é uma fibra natural de grande elasticidade e tenacidade, preparada com uma parte dos intestinos de animais, normalmente bovinos, caprinos, suínos ou ovinos.\n[…]\nApesar do nome, não se usam intestinos de felinos, o nome provém provavelmente do termo em língua inglesa kitgut, que significa corda, de violino ou de outro instrumento musical, do termo “kithara” que gerou o moderno termo “guitarra”. Outra hipótese é vir de cattle gut (intestino bovino).\n[…]\nOutra aplicação é como sutura cirúrgica. O chamado catgut estéril (Chorda resorbilis sterilis) é um fio utilizado em suturas nos humanos. É obtido de animais mamíferos como o carneiro, cujo intestino, depois de lavado, é cortado, no sentido do comprimento, em tamanhos diferentes, sendo as membranas intestinais, após torcidas, secas, polidas e selecionadas, utilizadas na cirurgia.\n[…]\nCatgut é um dos principais materiais para fazer as cordas das raquetes de tênis.\n[…]\nAs fibras de catgut são preparadas limpando-se os intestinos com água, retirando restos de gordura e deixando de molho por algum tempo para amolecer. Retira-se então a membrana externa com uma faca especial e coloca-se a fibra em uma solução alcalina, com compostos de enxofre. As cordas de instrumentos musicais costumam ser defumadas. As de uso cirúrgico são preparadas com sais de cromo para efeito antisséptico, classificadas por tamanho e embaladas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Quadra de tênis",
      "descricao": "Área retangular demarcada, dividida ao meio por uma rede, onde se joga tênis."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Na quadra de tênis, como se chamam as faixas laterais que só valem nas partidas de duplas?",
    "resposta": "Corredores",
    "distratores": [
      "Zona de saque",
      "Linha de fundo",
      "Terra de ninguém"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Tennis_court"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tennis_court",
        "situacao": "ok",
        "texto": "A tennis court is the venue where the sport of tennis is played. It is a firm rectangular surface with a low net stretched across the centre. The same surface can be used to play both doubles and singles matches. A variety of surfaces can be used to create a tennis court, each with its own characteristics which affect the playing style of the game.\n[…]\nBased on the standard rules of tennis, the size of the court is measured to the outside of the respective baselines and sidelines. The \"service\" lines (\"T\" and the \"service\" line) are centered. The ball must completely miss the line to be considered \"out\". This also means that the width of the line (except for the center service line) is irrelevant to play.\n[…]\nITF uses the following classification for tennis court surface types:\n[…]\n\"Carpet\" in tennis means any removable court covering. Indoor arenas store rolls of rubber-backed court surfacing and install it temporarily for tennis events, but they are not in use any more for professional events. A short piled form of artificial turf infilled with sand is used for some outdoor courts, particularly in Asia. Carpet is generally a fast surface, faster than hardcourt, with low bounce.\n[…]\nNotable tennis tournaments previously held on carpet courts were the WCT Finals, Paris Masters, U.S. Pro Indoor and Kremlin Cup. Since 2009, their use has been discontinued on the top tier of the ATP. ATP Challenger Tour tournaments such as the Trofeo Città di Brescia still use carpet courts. The WTA Tour's last carpet court event, the International-level Tournoi de Québec, was discontinued after 2018.\n[…]\nCommon tennis court terms:\n[…]\nCenter mark: The 4-inch mark at the halfway point of the baseline used to distinguish the two halves (and service boxes) of a tennis court.\n[…]\nNo-line court\n[…]\nInternational Tennis Federation (ITF) – Tennis court construction guidelines"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Quadra_de_t%C3%AAnis",
        "situacao": "ok",
        "texto": "Quadra de tênis (português brasileiro) ou campo de ténis (português europeu) ou court é o local onde se joga tênis. Se trata de uma área superfície retangular cruzada ao meio por uma rede baixa. A quadra deve estar preparada e marcada para praticar tanto em simples e para duplas.\n[…]\nTênis se joga em uma superfície retangular e plana, que pode estar construída por diversos materiais. A quadra tem 23 metros de comprimento. E de largura varia de acordo com o jogo:\n[…]\nDuplas (10 metros).\n[…]\nA quadra é dividida em dois lados, um para cada jogador ou dupla. Em cada lado existem dois «quadrados de saque», setores retangulares onde deverá colocar a bola a partir do serviço de saque, logo deve ser em diagonal, para que seja válido.\n[…]\nExistem cinco tipos básicos de superfície das quais se pratica tênis, mas, só os quatro primeiros são de uso geral:\n[…]\nQuadra de carpete\n[…]\nQuadra de grama\n[…]\nQuadra dura\n[…]\nLista de quadras de tênis por capacidade\n[…]\nFederação Internacional de Tênis\n[…]\nConfederação Brasileira de Tênis\n[…]\nFederação Portuguesa de Ténis",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Laver Cup",
      "descricao": "Torneio anual masculino de tênis por equipes, criado em 2017 em homenagem a Rod Laver."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "A Laver Cup, torneio por equipes criado em 2017, opõe uma seleção de tenistas europeus a qual outra equipe?",
    "resposta": "Resto do Mundo",
    "distratores": [
      "Américas",
      "Ásia-Pacífico",
      "Estados Unidos"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Laver_Cup"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Laver_Cup",
        "situacao": "ok",
        "texto": "The Laver Cup is an international indoor hard court men's team tennis tournament between Team Europe and Team World, the latter of which is composed of players from all other continents except Europe. Held annually since 2017, the tournament is intended to be tennis’ version of the Ryder Cup.\n[…]\nThomas Lyte produced a series of mini-trophies for the winners of the competition. Mirroring the Laver Cup itself, the half-height miniatures were first awarded to the winners of the 2017 tournament.\n[…]\nRoger Federer was inspired to create a tennis team tournament based on the biennial Ryder Cup golf tournament, which features the best golfers from the United States playing against the best golfers from Europe. However, Laver Cup differs as it is purely an invitational event based on past historical performances; selection of (and the playing agreement with) the tournament participants are not automatically based from the highest ranked players of the recent ATP Tour world rankings.\n[…]\nThe first edition was held in Prague from 22 to 24 September 2017, at the O2 Arena. Team Europe defeated Team World 15–9. Despite the 6 point score difference, this was a very tight battle from day 1. In the last match, Roger Federer defeated Nick Kyrgios 4–6, 7–6(8–6), [11–9] after coming back from 8–5 down in the final tiebreak, as well as saving a match point at 9–8.\n[…]\nSingles rankings as of 18 September 2017\n[…]\nThe seventh edition was held in Berlin from 20 to 22 September 2024, at Uber Arena. Team Europe defeated Team World 13–11.\n[…]\nThe eighth edition was held in San Francisco from 19 to 21 September 2025, at Chase Center. Team World defeated Team Europe 15–9.\n[…]\nThe ninth edition was held in London from 25 to 27 September 2026, at the O2 Arena. Team Europe defeated Team World 13–5."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Laver_Cup",
        "situacao": "ok",
        "texto": "A Laver Cup é um torneio de tênis profissional masculino por equipes, com sede itinerante. Os times são os mesmos: Mundo (composto por jogadores não-europeus) e Europa. Realizado anualmente, o mandante é alternado, com o local de disputa sendo uma vez na Europa, e outra fora da Europa.\n[…]\nO nome do evento se dá em homenagem ao australiano Rod Laver, considerado um dos maiores tenistas da história (é o único homem na era aberta a conquistar os quatro torneios do Grand Slam no mesmo ano). Para criar a Laver Cup, A TEAM8, companhia de gestão de Roger Federer, o empresário brasileiro e ex-jogador da Copa Davis Jorge Paulo Lemann e a Federação Australiana de Tênis (Tennis Australia) firmaram parceria.\n[…]\nA Laver Cup se tornou oficialmente parte do calendário da ATP na terceira edição, em 2019.\n[…]\nSeis tenistas europeus e seis não-europeus são convidados para jogar entre si, baseados nos rankings de simples;\n[…]\nCada equipe tem um capitão e um vice-capitão, considerados lendas do tênis;\n[…]\nCada tenista pode disputar até 2 jogos de simples;\n[…]\nPelo menos quatro dos seis membros da equipe jogam duplas;\n[…]\nUm jogador da equipe, especialista em duplas, pode jogar as três partidas com um parceiro diferente.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Golden Slam",
      "descricao": "Feito de vencer os quatro torneios de Grand Slam e a medalha de ouro olímpica de simples."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Em Paris 2024, quem se juntou a Andre Agassi e Rafael Nadal no grupo de homens que venceram os quatro Grand Slams e o ouro olímpico de simples?",
    "resposta": "Novak Djokovic",
    "distratores": [
      "Roger Federer",
      "Andy Murray",
      "Carlos Alcaraz"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Grand_Slam_(tennis)",
      "https://en.wikipedia.org/wiki/Novak_Djokovic"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Grand_Slam_(tennis)",
        "situacao": "ok",
        "texto": "The Grand Slam in tennis is the achievement of winning all four major championships in one discipline in a calendar year. In doubles, a Grand Slam may be achieved as a team or as an individual with different partners. Winning all four major championships consecutively but not within the same calendar year is referred to as a \"non-calendar-year Grand Slam\", while winning the four majors at any poin\n[…]\nThe career achievement of winning all four major championships in one discipline is termed a \"Career Grand Slam\", or \"Career Slam\". In singles, nine men (Fred Perry, Don Budge, Roy Emerson, Rod Laver, Andre Agassi, Roger Federer, Rafael Nadal, Novak Djokovic, and Carlos Alcaraz) and ten women (Maureen Connolly, Doris Hart, Shirley Fry Irvin, Margaret Court, Billie Jean King, Chris Evert, Martina Navratilova, Steffi Graf, Serena Williams, and Maria Sharapova) have completed a Career Grand Slam.\n[…]\nFour men (Emerson, Laver, Djokovic, and Nadal) and five women (Court, Evert, Navratilova, Graf, and Williams) have achieved the feat more than once over the course of their careers.\n[…]\nCareer Golden Slam: refers to the achievement of winning all four majors and the Olympic or Paralympic gold medal during their career. In singles three men (Andre Agassi, Rafael Nadal and Novak Djokovic) and two women (Steffi Graf and Serena Williams) have completed the Career Golden Slam. Williams is currently the only able-bodied player to have achieved a Career Golden Slam in both singles and doubles.\n[…]\nCareer Super Slam: refers to the achievement of winning all four majors, the Olympic or Paralympic gold medal, and the year-end championship throughout a career. In singles two men (Andre Agassi and Novak Djokovic) and two women (Steffi Graf and Serena Williams) have completed the Career Super Slam.\n[…]\nGrand Slam (golf)\n[…]\nAll-time Grand Slam tournament winners – Reference book"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Novak_Djokovic",
        "situacao": "ok",
        "texto": "Novak Djokovic (born 22 May 1987) is a Serbian professional tennis player. He has been ranked as the world No. 1 in men's singles by the Association of Tennis Professionals (ATP) for a record 428 weeks, finished as the year-end No. 1 a record eight times, and has been ranked No. 1 at least once in a year for a record 13 different years.\n[…]\nAt the inaugural 2020 ATP Cup, Djokovic led Serbia to victory with six wins, including over Daniil Medvedev in the semifinals and Rafael Nadal in the final. At the Australian Open, he beat Roger Federer in the semifinals and defeated Dominic Thiem in five sets in the final, earning his eighth Australian Open and 17th Grand Slam title. He regained the world No. 1 ranking and became the first player in the Open Era to win Grand Slams in three different decades.\n[…]\nAt the 2024 Wimbledon Championships, Djokovic reached his 37th Grand Slam final, aiming to equal Federer's record of eight titles, but lost in straight sets to Carlos Alcaraz in a repeat of the 2023 final. At the 2024 Summer Olympics, Djokovic defeated Matthew Ebden, Rafael Nadal, Dominik Koepfer, Stefanos Tsitsipas, and Lorenzo Musetti to reach his first Olympic final. He then beat Carlos Alcaraz in straight sets to win the gold medal, completing a Career Golden Slam and Career Super Slam.\n[…]\nDjokovic appears in the 2024 documentary Federer: Twelve Final Days about Roger Federer's final tournament before his retirement, the 2022 Laver Cup. In July 2024, Djokovic became the first man and the first athlete on the cover of Vogue Adria. He appeared on the front cover of the 2024 video game Tiebreak: Official game of the ATP and WTA, alongside Coco Gauff. One of the game's features is a \"Novak Djokovic Slam Challenge\".\n[…]\nNovak Djokovic at World Tennis\n[…]\nNovak Djokovic at the Davis Cup\n[…]\nNovak Djokovic at Olympics.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Grand_Slam_de_t%C3%AAnis",
        "situacao": "ok",
        "texto": "Os torneios de Grand Slam, também chamados abreviadamente de majors, são os quatro eventos anuais mais importantes do tênis. Eles oferecem o maior número de pontos no ranking mundial, prêmios em dinheiro, atenção do público e da mídia. Os títulos nestes torneios são chamados de Títulos de Grand Slam. Os torneios são o Australian Open, Roland Garros, Wimbledon e o US Open, que acontecem nesta ordem\n[…]\nCarrer Slam é nome dado ao feito de ganhar esses quatro torneios num único ano. Já o Golden Slam é o termo usado para a vitória nas quatro competições mais importantes e das Olimpíadas no mesmo ano.\n[…]\nO termo Grand Slam foi usado pela primeira vez em 1933, pelo jornalista estado-unidense John Kieran. Ao descrever a tentativa, naquele ano, de Jack Crawford de ganhar todos os quatro títulos, comparou-a com o grand slam em bridge. No entanto, na final do US Open, Crawford foi incapaz de ganhar contra Fred Perry. Foi somente em 1938 que Donald Budge tornou-se a primeira pessoa a ganhar o Grand Slam.\n[…]\nEm 2019, dois torneios de Grand Slam acabaram com sets longos nas parciais decisivas. Nas chaves principais de simples (isso já ocorria em duplas) do Australian Open, os jogadores disputam o super tiebreak (tiebreak que termina em 10 pontos desde que com 2 de diferença) após o empate por 6 games a 6. No Torneio de Wimbledon, após 12–12, haverá um tiebreak normal. Isso ocorrerá em todas as categorias.\n[…]\nEste é o número de participantes das edições mais recentes dos torneios de Grand Slam. Com exceção das sinalizadas ao contrário, todas as categorias são eliminatórias. Quando não houver distinção entre chave principal e qualificatório, é porque só há a primeira em determinada modalidade.\n[…]\nATP e WTA informam suas pontuações em Grand Slam, distintas entre si, em simples e em duplas. A ITF responde pelos juvenis e cadeirantes.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Grand Slam (tênis)",
      "descricao": "Conjunto dos quatro maiores torneios do tênis, e também o feito de vencer os quatro no mesmo ano."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "No tênis, o chamado Channel Slam é vencer no mesmo ano Wimbledon e qual outro torneio, do outro lado do Canal da Mancha?",
    "resposta": "Roland Garros",
    "distratores": [
      "US Open",
      "Aberto da Austrália",
      "Masters de Miami"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Grand_Slam_(tennis)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Grand_Slam_(tennis)",
        "situacao": "ok",
        "texto": "The Grand Slam in tennis is the achievement of winning all four major championships in one discipline in a calendar year. In doubles, a Grand Slam may be achieved as a team or as an individual with different partners. Winning all four major championships consecutively but not within the same calendar year is referred to as a \"non-calendar-year Grand Slam\", while winning the four majors at any poin\n[…]\nThe individual Grand Slam tournaments consist of the four majors: Australian Open, French Open, Wimbledon, and the US Open. These four individual tournaments are sometimes shortened to Grand Slams, or even just Slams.\n[…]\nThe French Open, also known as Roland Garros, is the second Grand Slam tournament of the year, played annually in late May and early June. A French championships closed event (restricted to members of French clubs) was first held in 1891 on the sand courts of the Societé de Sport de Île de Puteaux, in Puteaux, Île-de-France, and changed venues over the years. In 1925 the French championships became a Grand Slam event for the first time.\n[…]\nIt was open to all amateurs and since 1928 has been held on clay courts at the Stade Roland-Garros in Paris, France. The venue is named \"Roland Garros\" after the pioneering French aviator.\n[…]\nThis revision by the Council and reportedly the ITF was approved by the representatives of the four Grand Slam tournaments at Wimbledon. Neil Amdur and Allison Danzig of the New York Times both criticised the changed definition of the term Grand Slam, whereas in 1985 Hal Bock of Associated Press backed the change.\n[…]\nChannel Slam: refers to the achievement of winning both the French Open and Wimbledon in a calendar year. The name makes reference to the English Channel, the body of water separating France from the United Kingdom, the host countries of the French Open and Wimbledon.\n[…]\nGrand Slam (golf)\n[…]\nAll-time Grand Slam tournament winners – Reference book"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Grand_Slam_de_t%C3%AAnis",
        "situacao": "ok",
        "texto": "Os torneios de Grand Slam, também chamados abreviadamente de majors, são os quatro eventos anuais mais importantes do tênis. Eles oferecem o maior número de pontos no ranking mundial, prêmios em dinheiro, atenção do público e da mídia. Os títulos nestes torneios são chamados de Títulos de Grand Slam. Os torneios são o Australian Open, Roland Garros, Wimbledon e o US Open, que acontecem nesta ordem\n[…]\nRoland Garros e Wimbledon organizam torneios amistosos entre profissionais aposentados. A proporção é a mesma: um feminino, sem restrição etária, e dois masculinos, com restrição.\n[…]\nEstes são os formatos das edições mais recentes dos torneios de Grand Slam. Com exceção das sinalizadas ao contrário, todas as categorias possuem pontuação de games com vantagem.\n[…]\nEm 2017, Roland Garros inseriu tiebreak em sets decisivos nos qualificatórios e no evento juvenil.\n[…]\nEm 2019, dois torneios de Grand Slam acabaram com sets longos nas parciais decisivas. Nas chaves principais de simples (isso já ocorria em duplas) do Australian Open, os jogadores disputam o super tiebreak (tiebreak que termina em 10 pontos desde que com 2 de diferença) após o empate por 6 games a 6. No Torneio de Wimbledon, após 12–12, haverá um tiebreak normal. Isso ocorrerá em todas as categorias.\n[…]\nEm 2022, a partir de Roland Garros, todos os torneios do Grand Slam passaram a usar o formato em que, quando o set final (3.º ou 5.º set) chegar a 6–6, haverá um tiebreak de 10 pontos para decidir o vencedor do jogo. Até então, o Australian Open era o único que executava esse método, enquanto que Roland Garros tinha set longo e os dois restantes eram tiebreaks de sete pontos (depois de 6–6 no US Open e 12–12 em Wimbledon).\n[…]\nRoland Garros era o único torneio que não igualava o número de qualifiers femininas em simples aos masculinos (96 x 128). A partir de 2021, não é mais.\n[…]\n† Qualificatório de duplas apenas em Wimbledon.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Quadra Central de Wimbledon",
      "descricao": "Principal quadra de grama do All England Club, em Londres, onde se disputam as finais de Wimbledon."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Até 2003, os tenistas faziam reverência ao entrar e sair da Quadra Central de Wimbledon. Em direção a qual parte dela?",
    "resposta": "Camarote Real",
    "distratores": [
      "Cadeira do árbitro",
      "Placar principal",
      "Tribuna de imprensa"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Wimbledon_Championships",
      "https://en.wikipedia.org/wiki/Centre_Court"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Wimbledon_Championships",
        "situacao": "ok",
        "texto": "The Wimbledon Championships, commonly called Wimbledon, is a tennis tournament organised annually in Wimbledon, London, by the All England Lawn Tennis and Croquet Club in collaboration with the Lawn Tennis Association. It is chronologically the third of the four Grand Slam tennis events each year, held after the Australian Open and the French Open and before the US Open. It is the oldest tennis to\n[…]\nPreviously, players bowed or curtsied to members of the royal family seated in the Royal Box upon entering or leaving Centre Court. However, in 2003, All England Club president Prince Edward, Duke of Kent decided to discontinue the tradition. Now, players are required to bow or curtsy only if the Prince of Wales or the King is present, as was in practice during the 2010 Championships when Elizabeth II was in attendance at Wimbledon on 24 June.\n[…]\nOften, they reported from the \"Crow's Nest\", an elevated building housing the Court 3 and 4 scoreboards which affords views of most of the outside courts. Regular guests included Sue Mappin. In later years, Radio Wimbledon acquired a second low-power FM frequency (within the grounds only) of 96.3 FM for uninterrupted Centre Court commentary, and, from 2006, a third for coverage from No. 1 Court on 97.8 FM. Hourly news bulletins and travel (using RDS) were also broadcast.\n[…]\nThe tennis balls used were traditionally white, but were switched to yellow in 1986 to make them stand out for colour television. Since 2007, Wimbledon matches have been transmitted in high-definition, originally on the BBC's free-to-air channel BBC HD, with continual live coverage during the tournament of Centre Court and Court No. 1 as well as an evening highlights show Today at Wimbledon. Coverage is now shown on BBC One and Two's HD feeds.\n[…]\nBeginning 2018, all centre court matches are televised in 4K ultra-high-definition.\n[…]\nList of Wimbledon mixed doubles champions"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Centre_Court",
        "situacao": "ok",
        "texto": "Centre Court is a tennis court at the All England Lawn Tennis and Croquet Club (also known as the All England Club) and is the main court used in the Wimbledon Championships, the third annual Grand Slam event of the tennis calendar. It is considered the world's most famous tennis court. It incorporates the clubhouse of the All England Club. Its only regular use for play is during the two weeks a y\n[…]\nThe name \"Centre Court\" derives from the location of the principal court at the All England Croquet Club's original site off Worple Road, Wimbledon – where the main court was located in the centre of all the other courts. For the first Wimbledon Championship in 1877 a total of 12 courts were available which were laid out in a 3×4 grid and there was no actual centre court. This changed in 1881 when the middle two courts of the middle row were combined to form a Centre Court.\n[…]\nThe Scoreboard on centre court's present shape and layout closely reflect that of the original scoreboard installed in the 1950s, which featured manually inserted panels for player names and incandescent-lightbulb display of scores. In 1982, dot matrix scoreboards on the same layout were installed on Wimbledon courts. These were replaced in 2008 by full colour LED screens intended to provide full Hawk-Eye replays to the crowd in the stadium.\n[…]\nThe longest recorded match played on Centre Court was the 2008 Wimbledon Championships men’s singles final, contested between Rafael Nadal and Roger Federer. The match had a duration of 4 hours and 48 minutes of play and ended with a score of  6–4, 6–4, 6–7(5–7), 6–7(8–10), 9–7, with Nadal securing his first of two Wimbledon Championships singles titles.\n[…]\nNo. 2 Court\n[…]\nNo. 3 Court\n[…]\nBritain From Above – Aerial photo of the Centre Court at Worple Road during the 1921 Wimbledon Championships\n[…]\nInformation about Wimbledon Centre Court and a Photo Gallery\n[…]\n[2] Facts on Wimbledon"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Torneio_de_Wimbledon",
        "situacao": "ok",
        "texto": "O Torneio de tênis de Wimbledon (\"Wimbledon Championships\") é o mais antigo torneio de tênis do mundo, e é considerado como o de maior prestígio. Foi criado em 1877, quando o All England Lawn Tennis and Croquet Club organizou a primeira competição da história do tênis, com 22 participantes. Ao torneio de simples homens vieram se acrescentar as duplas em 1879 e o simples feminino em 1884.\n[…]\nJunto com o Australian Open, o Torneio de Roland Garros e o US Open, o Torneio de Wimbledon constitui  o conjunto de torneios do Grand Slam. O Torneio de tênis de Wimbledon é o terceiro dos quatro torneios do Grand Slam, e o único deles disputado em quadras de grama.\n[…]\nNo torneio de 2009, foi inaugurado o teto retrátil da quadra central.\n[…]\nOs gramados no chão foram arranjados de modo que a corte principal estivesse no meio com os outros dispostos em volta, daí o título \"Corte Central\". O nome foi mantido quando o clube se mudou em 1922 para o local atual em Church Road, embora não mais uma descrição verdadeira de sua localização. No entanto, em 1980, quatro novas quadras foram colocadas no lado norte do terreno, o que significou que a quadra central foi mais uma vez corretamente descrita como tal.\n[…]\nEmbora apropriadamente chamado de \"The Championships, Wimbledon\", dependendo das fontes, o evento também é conhecido como \"All England Lawn Tennis Championships\", \"The Wimbledon Championships\" ou simplesmente \"Wimbledon\". De 1912 a 1924, o torneio foi reconhecido pela International Lawn Tennis Federation como o \"World Grass Court Championships\".\n[…]\nFinalistas do Torneio de Wimbledon, com seus campeões, vice-campeões e resultados, por evento.\n[…]\nWimbledon no Facebook\n[…]\nWimbledon no Instagram\n[…]\nWimbledon no Twitter\n[…]\nWimbledon no YouTube",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Roland Garros de 2001 (simples masculino)",
      "descricao": "Torneio de simples masculino do Aberto da França de 2001, o terceiro título de Gustavo Kuerten."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Na final de Roland Garros de 2001, que deu a Guga seu terceiro título no torneio, qual espanhol ele derrotou?",
    "resposta": "Àlex Corretja",
    "distratores": [
      "Juan Carlos Ferrero",
      "Carlos Moyá",
      "Sergi Bruguera"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/2001_French_Open_%E2%80%93_Men%27s_singles",
      "https://en.wikipedia.org/wiki/Gustavo_Kuerten"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/2001_French_Open_%E2%80%93_Men%27s_singles",
        "situacao": "ok",
        "texto": "Defending champion Gustavo Kuerten defeated Àlex Corretja in the final, 6–7(3–7), 7–5, 6–2, 6–0 to win the men's singles tennis title at the 2001 French Open. It was his third French Open title and his third and last major title overall. Kuerten saved a match point en route to the title, against Michael Russell in the fourth round.\n[…]\nOfficial Roland Garros 2001 Men's Singles Draw\n[…]\n2001 French Open – Men's draws and results at the International Tennis Federation"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Gustavo_Kuerten",
        "situacao": "ok",
        "texto": "Gustavo \"Guga\" Kuerten (Portuguese: [ɡusˈtavu ˈkiʁtẽ]; born 10 September 1976) is a Brazilian former professional tennis player. He was ranked as the world No. 1 in men's singles by the Association of Tennis Professionals for 43 weeks, including as the year-end No. 1 in 2000. Kuerten won 20 ATP Tour-level singles titles, including three majors at the French Open in 1997, 2000, and 2001, as well as\n[…]\nLike many South American players, his favorite court surface is clay. He won three Grand Slam titles, all of them at the French Open, played on the red clay courts of Roland Garros. He won these titles in 1997, 2000 and 2001. In every one of the three French Open victories he defeated Russia's Yevgeny Kafelnikov in the quarterfinals and two top 10 players on his way to the title. Kuerten became the world No. 1 player in 2000.\n[…]\nIn 2001, he won his third French Open crown, joining former greats Björn Borg (6), Ivan Lendl (3) and Mats Wilander (3) with three or more French Open titles in the Open Era; former champion Jim Courier presented him with the trophy. His road to the title saw him save a match point against fourth round opponent Michael Russell. In the final he beat Àlex Corretja in four sets and drew a big heart on the red clay.\n[…]\nOn 25 May 2008, Gustavo Kuerten played his last professional singles match in front of 15,000 spectators at Roland Garros. He arrived on court wearing his 'lucky' uniform, the same blue & yellow one that he wore in 1997 when he won his first French Open tournament. Despite saving a match point against his opponent Paul-Henri Mathieu, he finally lost in three sets (6–3, 6–4, 6–2)—his result in the final of French Open in 1997.\n[…]\nOn 16 February 2016, the central court of Rio Open was named after him, officially Guga Kuerten court.\n[…]\nGustavo Kuerten e Roland Garros: uma História de Amor. Instituto Takano. 2002. ISBN 85-902671-1-3."
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Marcelo Melo",
      "descricao": "Tenista brasileiro de duplas, ex-número 1 do mundo e campeão de Roland Garros 2015 e Wimbledon 2017."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Em 2017, o mineiro Marcelo Melo venceu o torneio de duplas de Wimbledon ao lado de qual parceiro?",
    "resposta": "Łukasz Kubot",
    "distratores": [
      "Ivan Dodig",
      "Bruno Soares",
      "Jamie Murray"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Marcelo_Melo",
      "https://en.wikipedia.org/wiki/%C5%81ukasz_Kubot"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Marcelo_Melo",
        "situacao": "ok",
        "texto": "Marcelo Pinheiro Davi de Melo (Portuguese pronunciation: [maʁˈsɛlu ˈmɛlu]; born September 23, 1983) is a Brazilian professional tennis player who specializes in doubles. He is a former world No. 1, which he achieved on 2 November 2015. Melo is the only Brazilian player who has reached number one in the ATP doubles rankings.\n[…]\nMelo is a two-time Grand Slam champion in doubles, having won the 2015 French Open alongside Ivan Dodig and the 2017 Wimbledon Championships with Łukasz Kubot. Melo was also the first Brazilian man ever to win a Grand Slam doubles title. He has won 42 doubles titles on the ATP Tour, including nine at Masters 1000 level. He reached the final at the 2013 Wimbledon Championships and 2018 US Open in men's doubles, as well as at the 2009 French Open in mixed doubles.\n[…]\nIn October, Melo partnered with Łukasz Kubot and defeated Oliver Marach and Fabrice Martin to win the Vienna Open doubles title.\n[…]\nIn March, Melo, with his doubles partner Łukasz Kubot, reached the doubles final at Indian Wells Masters. Eighth-seeded Melo and Kubot reached the BNP Paribas Open semi-finals after breezing past tricky wild card duo Nick Kyrgios and Nenad Zimonjić. The Brazilian-Polish pair then defeated fourth seeds Jamie Murray and Bruno Soares to reach the final against the sixth seeds, South Africa's Raven Klaasen and his American doubles partner, Rajeev Ram.\n[…]\n1, and Kubot reached the position of No. 2 for the first time.\n[…]\nIn 2020, Melo continued his partnership in doubles with Łukasz Kubot. The pair won the 2020 Abierto Mexicano Telcel and the 2020 Erste Bank Open. They also reached the finals at 2020 Bett1Hulks Indoors, where they lost to the French pair, Pierre-Hugues Herbert and Nicolas Mahut. They qualified for the 2020 ATP Finals. They did not make it out of the round-robin stage with a 1–2 record."
      },
      {
        "url": "https://en.wikipedia.org/wiki/%C5%81ukasz_Kubot",
        "situacao": "ok",
        "texto": "Łukasz Kubot (Polish pronunciation: [ˈwukaʂ ˈkubɔt]; born 16 May 1982) is a former Polish professional tennis player who was ranked world No. 1 in doubles.\n[…]\nIn Halle, Marcelo Melo and Łukasz Kubot—who went undefeated on grass last year—defended their title, beating Alexander and Mischa Zverev in the final. It was Melo and Kubot's first title victory since January in Sydney. At Wimbledon, seeded second, Kubot and Melo lost to Jonathan Erlich and Marcin Matkowski in the second round.\n[…]\nAt the 2019 BNP Paribas Open sixth seeds Łukasz Kubot and Marcelo Melo rallied past Wesley Koolhof and Stefanos Tsitsipas in first round and defeated Nick Kyrgios and Taylor Fritz to reach the quarterfinal. They battled past Dominic Inglot and Franko Škugor in one hour and 23 minutes and defeated Novak Djokovic and Fabio Fognini for a spot in the final. Runners-up in 2017, Kubot and Melo lost a tight finals match to Nikola Mektić and Horacio Zeballos.\n[…]\nTop seeds Łukasz Kubot and Marcelo Melo broke three times to return to the 2019 Miami Open semi-finals. The 2017 champions, swept fifth seeds Oliver Marach/Mate Pavić before falling to Bob Bryan/Mike Bryan in the last four.\n[…]\nŁukasz Kubot and Marcelo Melo finished their 2020 ATP Tour season and four-year partnership with a victory over Wesley Koolhof and Nikola Mektić in the Nitto ATP Finals.\n[…]\nAt the end of 2020 season Łukasz Kubot and Marcelo Melo amicably split after a successful partnership that lasted more than four years. At the start of 2021 Kubot partnered with Wesley Koolhof to reach the third round at the 2021 Australian Open.\n[…]\nŁukasz Kubot at the Polski Komitet Olimpijski (in Polish) (archive)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Marcelo_Melo_%28tenista%29",
        "situacao": "ok",
        "texto": "Marcelo Pinheiro David de Melo (Belo Horizonte, 23 de setembro de 1983) é um tenista profissional brasileiro. Destaca-se no jogo de duplas, onde chegou ao posto de Nº 1 do mundo pela primeira vez em 2 de novembro de 2015., tornando-se o primeiro brasileiro a atingir o topo do ranking de duplas. No masculino, apenas ele e Gustavo Kuerten, este em simples, lograram tal feito — Maria Esther Bueno con\n[…]\nAté o momento já conquistou 34 títulos de nível ATP em duplas, a maioria desses conquistados atuando ao lado do croata Ivan Dodig, do polonês Łukasz Kubot e dos compatriotas Bruno Soares e André Sá.\n[…]\nNo ATP 500 de Viena (que também venceu, conquistando 3 torneios de forma consecutiva), jogando ao lado do polonês Łukasz Kubot, ele garantiu matematicamente o posto de nº 1 do mundo ao se classificar para a semifinal do torneio, tirando os Irmãos Bob e Mike Bryan da posição que ocupavam desde o início de 2013. Assim, em 2 de novembro de 2015, ele assume o topo do ranking entre os duplistas, se tornando o primeiro brasileiro da História a atingir tal feito.\n[…]\nChegando à temporada de grama no meio do ano, Melo e Kubot realizaram um feito dificílimo: venceram todos os jogos, ganhando os ATP 250 de s-Hertogenbosch, o ATP 500 de Halle, e por fim, o inédito título do Torneio de Wimbledon, vencendo 4 dos 6 jogos em longas batalhas de 5 sets, incluindo a final. Melo se tornou n.1 do mundo novamente quando chegou à final em Wimbledon, e se tornou o primeiro brasileiro a conquistar este Grand Slam desde Maria Esther Bueno.\n[…]\nNo segundo semestre de 2017, perdeu a posição de n.1 para a dupla Kontinen/Peers (que foi semifinalista no US Open, ganhou 1 Masters 1000 e 2 ATP 500), mas Melo/Kubot mantiveram-se perseguindo o topo, sendo finalistas do ATP 500 de Washington e do Masters 1000 de Shanghai além de semifinalistas do Masters 1000 de Cincinnati.\n[…]\nMarcelo Melo na Associação de Tenistas Profissionais",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Estádio Roland Garros",
      "descricao": "Complexo de tênis em Paris onde se disputa o Aberto da França, batizado em homenagem ao aviador Roland Garros."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "No complexo de Roland Garros, em Paris, a quadra principal homenageia um antigo dirigente do tênis francês. Qual é o nome dela?",
    "resposta": "Philippe-Chatrier",
    "distratores": [
      "Suzanne-Lenglen",
      "Simonne-Mathieu",
      "René Lacoste"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Court_Philippe-Chatrier",
      "https://en.wikipedia.org/wiki/Stade_Roland_Garros"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Court_Philippe-Chatrier",
        "situacao": "inexistente",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Stade_Roland_Garros",
        "situacao": "ok",
        "texto": "Stade Roland Garros (French pronunciation: [stad ʁɔlɑ̃ ɡaʁɔs]; 'Roland Garros Stadium') is a complex of tennis courts, including stadiums, located in Paris that hosts the French Open. That tournament, also known as Roland Garros, is a major tennis championship played annually in late May and early June. The complex is named after Roland Garros (1888–1918), a pioneering French aviator, and was cons\n[…]\nCourt Philippe Chatrier was built in 1928 as Stade Roland Garros's centerpiece and remains its principal venue. It seats 15,225 spectators as of a 2019 renovation. The stadium was known simply as \"Court Central\" until 2001 when it was renamed for the long-time president of the Fédération Française de Tennis (FFT) who helped restore tennis as a Summer Olympics sport in 1988.\n[…]\nIn 2009 the FFT announced that it had commissioned the French architect Marc Mimram to design a significant expansion of Stade Roland Garros. On the current property, the proposal called for the addition of lights and a retractable roof over Court Philippe Chatrier.\n[…]\nIn 2021, the redevelopment of courts 2 and 3 and the renovation work at the Place des Mousquetaires were finished. This included the inauguration of statues to Rafael Nadal (who has won the French Open singles title a record 14 times), Roland Garros, and the \"Four Musketeers\" (Borotra, Brugnon, Cochet, and Lacoste). In the same year, the tournament introduced night sessions on Court Philippe Chatrier for the first time in its history.\n[…]\nStade Roland Garros is located at the western side of Paris, at the southern boundary of the Bois de Boulogne in Paris's 16th arrondissement. The triangular property is bounded by Avenue Porte d'Auteuil and A13 autoroute on the north and Boulevard d'Auteuil on the south. The eastern boundary is Avenue Gordon Bennett and the adjacent Jardin des Serres d'Auteuil.\n[…]\nHistoire de Roland Garros"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Torneio de Wimbledon",
      "descricao": "Grand Slam disputado em quadras de grama em Londres desde 1877."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Por uma regra tradicional de vestimenta, os tenistas de Wimbledon precisam jogar com roupas de qual cor?",
    "resposta": "Branco",
    "distratores": [
      "Verde",
      "Creme",
      "Azul-marinho"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Wimbledon_Championships"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Wimbledon_Championships",
        "situacao": "ok",
        "texto": "The Wimbledon Championships, commonly called Wimbledon, is a tennis tournament organised annually in Wimbledon, London, by the All England Lawn Tennis and Croquet Club in collaboration with the Lawn Tennis Association. It is chronologically the third of the four Grand Slam tennis events each year, held after the Australian Open and the French Open and before the US Open. It is the oldest tennis to\n[…]\nSince 1902, the Wimbledon Championships have used tennis balls manufactured by Slazenger and in already several decades now made in Mariveles, Bataan, Philippines. The company has been the official supplier for the tournament ever since, making this the longest-running sponsorship deal in sport.\n[…]\nLive coverage started early in the morning (the US being a minimum of 5 hours behind the UK) and continued well into the afternoon, interspersed with commentary and interviews from Bud Collins. Collins was dismissed by NBC in 2007, but was promptly hired by ESPN, the cable home for The Championships in the States. For many years NBC's primary Wimbledon host was veteran broadcaster Dick Enberg.\n[…]\nPrize money was first awarded in 1968, the year that professional players were allowed to compete in the Championships for the first time. Total prize money was £26,150; the winner of the men's title earned £2,000 (equivalent to £30,600 in 2025) while the women's singles champion received £750 (equivalent to £11,500 in 2025). In 2007, Wimbledon and the French Open became the last grand slam tournaments to award unequal prize money to women and men.\n[…]\nWimbledon Effect\n[…]\nList of Wimbledon champions (all events)\n[…]\nList of Wimbledon gentlemen's singles champions\n[…]\nList of Wimbledon ladies' singles champions\n[…]\nList of Wimbledon gentlemen's doubles champions\n[…]\nList of Wimbledon ladies' doubles champions\n[…]\nList of Wimbledon mixed doubles champions\n[…]\nList of Wimbledon singles finalists during the Open Era, records and statistics"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Torneio_de_Wimbledon",
        "situacao": "ok",
        "texto": "O Torneio de tênis de Wimbledon (\"Wimbledon Championships\") é o mais antigo torneio de tênis do mundo, e é considerado como o de maior prestígio. Foi criado em 1877, quando o All England Lawn Tennis and Croquet Club organizou a primeira competição da história do tênis, com 22 participantes. Ao torneio de simples homens vieram se acrescentar as duplas em 1879 e o simples feminino em 1884.\n[…]\nJunto com o Australian Open, o Torneio de Roland Garros e o US Open, o Torneio de Wimbledon constitui  o conjunto de torneios do Grand Slam. O Torneio de tênis de Wimbledon é o terceiro dos quatro torneios do Grand Slam, e o único deles disputado em quadras de grama.\n[…]\nNo torneio de 2009, foi inaugurado o teto retrátil da quadra central.\n[…]\nEm 1884, o clube acrescentou competições de Simples Femininos e Duplas de Cavalheiros. Duplas Femininas e Duplas Mistas foram adicionadas em 1913. Até 1922, o atual campeão teve que jogar apenas na final, contra quem havia vencido para desafiá-lo. Tal como acontecia com os outros três eventos Major ou Grand Slam, Wimbledon foi contestado por jogadores amadores de topo, jogadores profissionais foram proibidos de participar. Isso mudou com o advento da era aberta em 1968.\n[…]\nEmbora apropriadamente chamado de \"The Championships, Wimbledon\", dependendo das fontes, o evento também é conhecido como \"All England Lawn Tennis Championships\", \"The Wimbledon Championships\" ou simplesmente \"Wimbledon\". De 1912 a 1924, o torneio foi reconhecido pela International Lawn Tennis Federation como o \"World Grass Court Championships\".\n[…]\nFinalistas do Torneio de Wimbledon, com seus campeões, vice-campeões e resultados, por evento.\n[…]\nLista de vencedores de torneios do Grand Slam (simples masculino)\n[…]\nLista de vencedores de torneios do Grand Slam (simples feminino)\n[…]\nWimbledon no Facebook\n[…]\nWimbledon no Instagram\n[…]\nWimbledon no Twitter\n[…]\nWimbledon no YouTube",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Gustavo Kuerten",
      "descricao": "Tenista brasileiro tricampeão de Roland Garros, o Guga."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Qual golpe, batido com elegância e muita potência, era considerado a marca registrada do jogo de Guga?",
    "resposta": "Backhand de uma mão",
    "distratores": [
      "Saque",
      "Voleio",
      "Deixadinha"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Gustavo_Kuerten",
      "https://pt.wikipedia.org/wiki/Gustavo_Kuerten"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Gustavo_Kuerten",
        "situacao": "ok",
        "texto": "Gustavo \"Guga\" Kuerten (Portuguese: [ɡusˈtavu ˈkiʁtẽ]; born 10 September 1976) is a Brazilian former professional tennis player. He was ranked as the world No. 1 in men's singles by the Association of Tennis Professionals for 43 weeks, including as the year-end No. 1 in 2000. Kuerten won 20 ATP Tour-level singles titles, including three majors at the French Open in 1997, 2000, and 2001, as well as\n[…]\nKuerten embraced the baseline style of play, with heavy topspin on his ground strokes and a solid serve that enabled him to wear down his opponents from the back of the court. Kuerten, however, emphasized offensive baseline play as opposed to the traditional defensive baseline play favoured by classic clay court specialists, and unlike them, his first serve was his biggest weapon. He played right-handed with a single-handed backhand using a western grip.\n[…]\nThe arcing backhand played with topspin was his trademark shot. He was one of the earliest adopters to play with polyester strings which allowed him to swing for pace and at the same time create the topspin needed to control the ball.\n[…]\nIn 2000, he founded the Gustavo Kuerten Institute, a non-profit philanthropic association based in Florianópolis in support of children and disabled people.\n[…]\nKuerten won the International Club's prestigious Jean Borotra Sportsmanship Award in 2011.\n[…]\nOn 16 February 2016, the central court of Rio Open was named after him, officially Guga Kuerten court.\n[…]\nGustavo Kuerten e Roland Garros: uma História de Amor. Instituto Takano. 2002. ISBN 85-902671-1-3.\n[…]\nO tênis no Brasil: de Maria Esther Bueno a Gustavo Kuerten. Codex. 2004. ISBN 85-7594-031-7.\n[…]\nGustavo Kuerten at the Association of Tennis Professionals\n[…]\nGustavo Kuerten at World Tennis\n[…]\nGustavo Kuerten at the Davis Cup (archived)\n[…]\nGustavo Kuerten at the International Tennis Hall of Fame\n[…]\nGustavo Kuerten at Olympedia\n[…]\nGustavo Kuerten at Olympics.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Gustavo_Kuerten",
        "situacao": "ok",
        "texto": "Gustavo \"Guga\" Kuerten (Florianópolis, 10 de setembro de 1976) é um ex-tenista profissional brasileiro, condecorado com posição no Hall da Fama da Associação de Tenistas Profissionais (ATP). Tricampeão de Roland-Garros, é considerado o maior tenista masculino da história do Brasil. É o único tenista da história a ganhar de Pete Sampras e Andre Agassi no mesmo torneio.\n[…]\nEm 2014, Guga foi considerado pela Revista Tênis um dos \"10 tenistas que transformaram a forma como o tênis é jogado\". Segundo a revista, \"diante de adversários que fundamentavam seus jogos no preparo físico e na regularidade de fundo, o brasileiro ousou acelerar bolas, arriscar paralelas de backhand, tentar curtinhas etc. De repente, aquele padrão extremamente defensivo do jogo de saibro deu lugar a um estilo muito mais agressivo, exuberante e alegre.\n[…]\nApós o jogo contra Agassi, Guga faz a seguinte declaração:\n[…]\nO saque ganhou potência e precisão, dificultando as devoluções e permitindo o controle do jogo já a partir da segunda bola. Valia-se de fortes golpes de fundo de quadra (groundstrokes), especialmente direitas descruzadas (inside-out forehands) e suas famosas esquerdas (backhands) na paralela, tanto na preparação de um ponto quanto para obter winners (ataques que finalizam um ponto).\n[…]\nUsava a empunhadura semi-western backhand com uma só mão, que favorece aplicar um efeito topspin no backhand, mesmo ao atacar bolas mais altas, embora o uso de duas mãos no backhand seja predominante no tênis moderno. A estética (e eficiência) de seu estilo de jogo, em especial seu backhand, é constantemente admirada e lembrada, sendo chamado \"o Pablo Picasso das quadras\" pelo ex-número 1 Yevgeny Kafelnikov, um de seus principais rivais no circuito.\n[…]\nGustavo Kuerten na Associação de Tenistas Profissionais\n[…]\nInstituto Guga Kuerten\n[…]\nGuga no Lance\n[…]\nGustavo Kuerten no Tenis News"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Roland Garros de 1997 (simples masculino)",
      "descricao": "Torneio de simples masculino do Aberto da França de 1997, o primeiro título de Gustavo Kuerten."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Em Roland Garros 1997, Guga também chamou atenção pelo uniforme. Quais eram as suas cores principais?",
    "resposta": "Amarelo e azul",
    "distratores": [
      "Verde e branco",
      "Vermelho e preto",
      "Laranja e branco"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Gustavo_Kuerten",
      "https://en.wikipedia.org/wiki/Gustavo_Kuerten"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Gustavo_Kuerten",
        "situacao": "ok",
        "texto": "Gustavo \"Guga\" Kuerten (Florianópolis, 10 de setembro de 1976) é um ex-tenista profissional brasileiro, condecorado com posição no Hall da Fama da Associação de Tenistas Profissionais (ATP). Tricampeão de Roland-Garros, é considerado o maior tenista masculino da história do Brasil. É o único tenista da história a ganhar de Pete Sampras e Andre Agassi no mesmo torneio.\n[…]\nNo mesmo ano tornou-se o primeiro tenista masculino brasileiro a vencer um torneio em simples do Grand Slam, a série das quatro mais importantes competições de tênis do circuito profissional mundial. Antes dele, somente Maria Esther Bueno tinha vencido campeonatos nas simples (mas também nas duplas femininas e duplas mistas), enquanto Thomaz Koch lograra êxito nas duplas mistas. Gustavo Kuerten, no entanto, trouxe o inédito título de simples do Roland-Garros.\n[…]\nEm 25 de maio de 2008 jogou no torneio de Roland-Garros em Paris, o que poderia ser seu último jogo na carreira. Ao entrar, todos se depararam com aquele mesmo uniforme de 1997, azul e amarelo, relembrando o feito que o lançou no tênis internacional, a conquista de Roland-Garros do mesmo ano. Antes mesmo da partida começar, estava muito emocionado.\n[…]\nGuga anunciou sua aposentadoria em 12 de fevereiro de 2008, em entrevista exclusiva ao Globo Esporte, da Rede Globo. Antes, porém, fez uma espécie de turnê de despedida onde participou de alguns dos principais torneios do circuito mundial como o Brasil Open, o Challenger de Florianópolis, e os Masters Series de Miami, Monte Carlo e, por fim, Roland-Garros, lugar que consagrou o catarinense.\n[…]\nEm 1 de junho de 2010 recebeu o troféu Philippe Chatrier, a maior honraria do tênis mundial, em reconhecimento às ações desenvolvidas pelo Instituto Guga Kuerten e o tricampeonato em Roland-Garros.\n[…]\nYevgeny Kafelnikov  – 12 confrontos, com sete vitórias de Guga (três delas em Roland-Garros)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Gustavo_Kuerten",
        "situacao": "ok",
        "texto": "Gustavo \"Guga\" Kuerten (Portuguese: [ɡusˈtavu ˈkiʁtẽ]; born 10 September 1976) is a Brazilian former professional tennis player. He was ranked as the world No. 1 in men's singles by the Association of Tennis Professionals for 43 weeks, including as the year-end No. 1 in 2000. Kuerten won 20 ATP Tour-level singles titles, including three majors at the French Open in 1997, 2000, and 2001, as well as\n[…]\nLike many South American players, his favorite court surface is clay. He won three Grand Slam titles, all of them at the French Open, played on the red clay courts of Roland Garros. He won these titles in 1997, 2000 and 2001. In every one of the three French Open victories he defeated Russia's Yevgeny Kafelnikov in the quarterfinals and two top 10 players on his way to the title. Kuerten became the world No. 1 player in 2000.\n[…]\nOn 25 May 2008, Gustavo Kuerten played his last professional singles match in front of 15,000 spectators at Roland Garros. He arrived on court wearing his 'lucky' uniform, the same blue & yellow one that he wore in 1997 when he won his first French Open tournament. Despite saving a match point against his opponent Paul-Henri Mathieu, he finally lost in three sets (6–3, 6–4, 6–2)—his result in the final of French Open in 1997.\n[…]\nIn 1998, 2002 and 2004 Kuerten received the Prix Orange Roland Garros Award for sportsmanship from the association of tennis journalists. In his homeland Brazil he was awarded the Prêmio Brasil Olímpico in 1999 and was named Athlete of the Year in 1999 and 2000. He received the ATP Arthur Ashe Humanitarian of the Year Award in 2003. Kuerten was inducted into the International Tennis Hall of Fame in 2012.\n[…]\nOn 16 February 2016, the central court of Rio Open was named after him, officially Guga Kuerten court.\n[…]\nGustavo Kuerten e Roland Garros: uma História de Amor. Instituto Takano. 2002. ISBN 85-902671-1-3."
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Monica Seles",
      "descricao": "Tenista iugoslava naturalizada americana, nascida em 1973, campeã de nove Grand Slams em simples."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Monica Seles chamava atenção por segurar a raquete com as duas mãos em quais golpes?",
    "resposta": "Forehand e backhand",
    "distratores": [
      "Só no backhand",
      "Só no forehand",
      "Saque e voleio"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Monica_Seles"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Monica_Seles",
        "situacao": "ok",
        "texto": "Monica Seles (born December 2, 1973) is a former professional tennis player who represented Yugoslavia and the United States. She was ranked as the world No. 1 in women's singles by the WTA for 178 weeks (sixth-most of all time), and finished as the year-end No. 1 three times. Seles won 53 career singles titles, including nine majors: eight as a teenager while representing Yugoslavia and the final\n[…]\nHe is responsible for developing her two-handed style for both the forehand and backhand. Later, her coach was Jelena Genčić. In 1985, at age 11, she won the Junior Orange Bowl tournament in Miami, Florida, which caught the attention of tennis coach Nick Bollettieri. In early 1986, Seles and her brother Zoltan moved from Yugoslavia to the United States, and Seles enrolled at the Nick Bollettieri Tennis Academy, where she trained for two years and continued to practice until March 1990.\n[…]\nSeles finished her first year on the tour ranked world No. 6.\n[…]\nSeles was a baseline player who was known for her power-based, highly aggressive playing style. Her unconventional double-handed forehand and backhand were both hit flat, with relentless speed, power, and depth. As a result of her two-handed groundstrokes, she could create sharp angles around the court, and hit winners at will. She was an aggressive return player and would stand within the baseline to return serves.\n[…]\nIn the book Facing Monica Seles, Chris Evert is quoted saying Seles \"changed the whole complexion of tennis, brought another level to the game. She was a game changer.\"\n[…]\nNote: A walkover does not count as a win. Seles had a walkover in the second round of the US Open of 1996.\n[…]\nMonica Seles at the Women's Tennis Association\n[…]\nMonica Seles at World Tennis\n[…]\nMonica Seles at the Billie Jean King Cup (archived)\n[…]\nMonica Seles at the International Tennis Hall of Fame\n[…]\nMonica Seles at Olympedia\n[…]\nMonica Seles at Olympics.com\n[…]\nMonica Seles at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Monica_Seles",
        "situacao": "ok",
        "texto": "Monica Seles (Novi Sad, 2 de dezembro de 1973) é uma ex-tenista sérvia (nascida na antiga Iugoslávia), naturalizada norte-americana. Durante sua carreira, Monica venceu nove títulos Grand Slam e tornou-se a mais jovem campeã de Roland-Garros, em 1990. Foi uma das jogadoras que dominaram o circuito nos anos 1990. Entretanto, em 30 de abril de 1993, Seles foi apunhalada pelo alemão Günter Parche, fã\n[…]\nMonica entrou para o International Tennis Hall of Fame em 2009.\n[…]\nMonica Seles (em sérvio Моника Селеш/Monika Seleš) nasceu em Novi Sad, Vojvodina, Sérvia (então Jugoslávia, hoje Sérvia) em 1973. É de etnia magiar (seu nome escreve-se Szeles Mónika em húngaro, segundo a convenção magiar que coloca o sobrenome em primeiro lugar).\n[…]\nMonica começou a jogar ténis aos seis anos de idade, treinada pelo seu pai, Karolj Seleš. Ganhou o seu primeiro torneio aos nove anos (apesar de não conhecer bem o sistema de pontuação do jogo e de ter apenas uma vaga ideia de estar em vantagem ou desvantagem durante as partidas). Em 1985, com onze anos, ganhou o prestigiado Orange Bowl em Miami, Flórida, e despertou a atenção do treinador de ténis Nick Bollettieri.\n[…]\nCom potentes forehands e backhands a duas mãos e uma forte devolução de serviço, Seles é considerada por muitos como a primeira jogadora \"de força\" do ténis feminino, abrindo caminho para outras estrelas como Serena Williams e Maria Sharapova. Seles ficou também famosa pelos ruidosos gemidos que emitia quando batia na bola.\n[…]\nEntre Janeiro de 1991 e Fevereiro de 1993, Monica Seles ganhou 22 títulos e disputou as finais de 33 dos 34 torneios em que participou. Acumulou um recorde impressionante de 159 vitórias contra apenas 12 derrotas (92.9% de vitórias), incluindo uma série de 55 vitórias e uma derrota em provas do Grand Slam.\n[…]\nWebsite de Monica Seles - contém vídeos dos jogos e um fórum muito activo\n[…]\nWebsite não-oficial de Monica Seles",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Novak Djokovic",
      "descricao": "Tenista sérvio nascido em 1987, campeão de 24 Grand Slams e medalhista de ouro olímpico em 2024."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "O livro de dieta de Novak Djokovic, Serve to Win, promete um plano de catorze dias sem qual substância?",
    "resposta": "Glúten",
    "distratores": [
      "Lactose",
      "Açúcar",
      "Carne vermelha"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Novak_Djokovic"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Novak_Djokovic",
        "situacao": "ok",
        "texto": "Novak Djokovic (born 22 May 1987) is a Serbian professional tennis player. He has been ranked as the world No. 1 in men's singles by the Association of Tennis Professionals (ATP) for a record 428 weeks, finished as the year-end No. 1 a record eight times, and has been ranked No. 1 at least once in a year for a record 13 different years.\n[…]\nSince 2010, he has been connected with the nutritionist Igor Četojević, who additionally focuses on Chinese medicine and performs acupuncture. He allegedly discovered that Djokovic suffers from gluten intolerance, using applied kinesiology, and that he should not eat gluten, removing it from his diet. He eventually settled on a vegan diet, while later sometimes eating fish. He also claims this vegan, plant-based diet cured his persistent allergies and mild asthma.\n[…]\nThe gluten-free diet has been credited for improving his endurance on the court and playing a role in his subsequent success.\n[…]\nWhen you look at match players in the history of tennis, I don't believe that anybody can equal everything on the court that Djokovic does. I don't think you can find a weakness in his game. His movement, personality, his return of serve, his serve, excellent touch, not hesitant in coming to the net, great serve. Overall, almost every player has a downfall; to me, he doesn't have one. He's perhaps the best put-together player that I've seen over 60 years.\n[…]\nSome press reports have also called Djokovic one of the greatest athletes of all time.\n[…]\nList of career achievements by Novak Djokovic\n[…]\nBowers, Chris (2014). Novak Djokovic and the Rise of Serbia: The Sporting Statesman. John Blake. ISBN 978-1-78219-770-6.\n[…]\nNovak Djokovic at the Association of Tennis Professionals\n[…]\nNovak Djokovic at World Tennis\n[…]\nNovak Djokovic at the Davis Cup\n[…]\nNovak Djokovic at Olympics.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Novak_Djokovic",
        "situacao": "ok",
        "texto": "Novak Djokovic (em sérvio: Новак Ђоковић Belgrado, 22 de maio de 1987) é um tenista profissional sérvio. Ele foi classificado como o número 1 do mundo em simples da ATP por um período recorde de 428 semanas, terminou o ano como número 1 em oito temporadas (recorde) e foi ranqueado como número 1 pelo menos uma vez em treze anos diferentes (outro recorde).\n[…]\n8 dias depois da conquista do Masters de Miami, o ranking da ATP confirmou Novak Djokovic na primeira posição do ranking mundial pela 142.ª semana, o que fez do sérvio o sexto tenista que por mais tempo ocupou o topo da lista. O campeão dos Masters 1000 de Indian Wells e Miami nas semanas anteriores, ultrapassava assim, o espanhol Rafael Nadal, este então com 141 semanas no topo do ranking.\n[…]\nAssim, Novak Djokovic conquistou seu 26° título de Masters 1000 (4° no Masters de Paris) e confirmou o recorde de único tenista a vencer 6 dos 9 Masters em um único ano.\n[…]\nO sérvio de Belgrado derrotou o francês por 3 sets a 2 com parciais de 6/3, 6/7 (7/1), 6/4, 4/6 e 6/1 na quadra Rod Laver inflamada pela atuação corajosa de Simon que foi o primeiro a tirar sets de Nole não só no torneio como no ano de 2016 e desde o dia 17 de novembro de 2015—acabando com invencibilidade de 26 parciais seguidas de Djokovic. Dois dias depois, pelas quartas de final, sem dar espetáculo, mas eficiente quando foi exigido, Djokovic garantiu lugar na semifinal do torneio.\n[…]\nNa quarta tentativa, Novak Djokovic finalmente é campeão olímpico, se juntando ainda a um seleto grupo de tenistas que conquistaram o chamado Golden Slam - títulos dos quatro Grand Slam e o olímpico, que era formado por Steffi Graf, Serena Williams, Andre Agassi e Rafael Nadal.\n[…]\nNovak Djokovic na Associação de Tenistas Profissionais\n[…]\n«Vídeo de Novak Djokovic com imitações de: Federer, Roddick, Nadal, Sharapova» (em italiano)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Fred Perry",
      "descricao": "Tenista inglês (1909-1995), tricampeão de Wimbledon nos anos 1930 e fundador da marca de roupas que leva seu nome."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "A marca de roupas fundada pelo tenista inglês Fred Perry usa como símbolo qual figura?",
    "resposta": "Coroa de louros",
    "distratores": [
      "Crocodilo",
      "Raquetes cruzadas",
      "Leão rampante"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Fred_Perry"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fred_Perry",
        "situacao": "ok",
        "texto": "Frederick Towersey Perry (18 May 1909 – 2 February 1995) was a British tennis and table tennis player and former world No. 1. He  won 10 Majors, including eight Grand Slam tournaments and two Pro Slams single titles, as well as six Major doubles titles. Perry was the first player to win a \"Career Grand Slam\", lifting all four singles titles, which he completed at the age of 26 at the 1935 French C\n[…]\nFred Perry was the clothing sponsor of British tennis player Andy Murray from the start of his career until 2009.\n[…]\nA bronze statue of Fred Perry was erected at the All England Lawn Tennis Club in Wimbledon, London, in 1984 to mark the 50th anniversary of his first singles championship. It is located at the Church Road gate. After Perry's accidental death in 1995, he was cremated and his ashes buried in an urn near the statue.\n[…]\nIn September 2002, a designated walking route called the Fred Perry Way was opened through the Metropolitan Borough of Stockport. The 14-mile (23 km) route from Woodford in the south to Reddish in the north, combines rural footpaths, quiet lanes and river valleys with urban landscapes and parklands.\n[…]\nIn 2009, Perry was selected by the Royal Mail for their \"Eminent Britons\" commemorative postage stamp issue. In November 2010, Prince Edward, Earl of Wessex and John Perry, Fred Perry's grandson, opened Fred Perry House in Stockport.\n[…]\nIn the United States, two drives in El Paso, Texas, and Baton Rouge, Louisiana, and a street in Springfield, Tennessee, are named after Fred Perry.\n[…]\nFred Perry joined professional tennis in 1937 and was unable to compete in the Grand Slams tournaments.\n[…]\nFred Perry at the Association of Tennis Professionals\n[…]\nFred Perry at World Tennis\n[…]\nFred Perry at the Davis Cup (archived)\n[…]\nFred Perry at the International Tennis Hall of Fame\n[…]\nFred Perry Official website\n[…]\nFred Perry Way route map"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Fred_Perry",
        "situacao": "ok",
        "texto": "Frederick John Perry (18 de maio de 1909, Stockport, Cheshire – 2 de fevereiro de 1995, Melbourne) foi um tenista e mesa-tenista britânico que venceu três vezes consecutivas o Torneio de Wimbledon e três vezes (duas consecutivas) o U.S. Open. Perry foi número 1 mundial durante cinco anos, quatro deles consecutivos, de 1934 a 1938, os primeiros três anos como amador.\n[…]\nPerry entrou para o International Tennis Hall of Fame em 1975.\n[…]\nNo final dos anos 1940, Perry foi abordado por Tibby Wegner, um futebolista austríaco que tinha inventado um dispositivo antitranspirante usado ao redor do pulso. Perry fez algumas alterações e inventou o sweatband.\n[…]\nA próxima ideia de Wegner era produzir uma camisa esporte, que era para ser feita a partir de malha piqué de algodão branco com mangas curtas e botões na frente. Lançado em Wimbledon em 1952, a camisa pólo Fred Perry foi um sucesso imediato.\n[…]\nA marca, agora de propriedade de uma empresa japonesa, é mais conhecida por seu logotipo de louro, que aparece no peito do lado esquerdo das camisas de tênis. O logotipo de louro (baseada no antigo símbolo de Wimbledon) foi costurada no tecido da camisa, em vez de meramente colada nela (como foi o caso com o logotipo da marca do crocodilo da marca concorrente Lacoste).\n[…]\nA camisa pólo branca só foi completada no final dos anos 50, quando os mods, a adotaram e exigiu uma paleta de cores mais variada. Era a camisa preferida de diversos grupos de adolescentes na década de 1960 e 70, que vão desde os skinheads à cena northern soul. Ela recuperou a popularidade quando o tenista escocês Andy Murray teve a marca como sua patrocinadora de vestuário; Murray assinou com a Adidas para 2010.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Kim Clijsters",
      "descricao": "Ex-tenista belga, número 1 do mundo e campeã de quatro torneios de Grand Slam em simples."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "A belga Kim Clijsters ficou famosa por um movimento de ginasta que fazia para alcançar bolas difíceis. Qual?",
    "resposta": "Espacate",
    "distratores": [
      "Estrela",
      "Ponte",
      "Cambalhota"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Kim_Clijsters"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Kim_Clijsters",
        "situacao": "ok",
        "texto": "Kim Antonie Lode Clijsters (Dutch pronunciation: [kɪm ˈklɛistərs] ; born 8 June 1983) is a Belgian former professional tennis player. She was ranked as the world No. 1 in women's singles by the Women's Tennis Association (WTA) for 20 weeks, and as the world No. 1 in women's doubles for 4 weeks, having held both rankings simultaneously in 2003.\n[…]\nClijsters's childhood tennis idol was Steffi Graf. She cites her lone WTA Tour match against Graf at Wimbledon in 1999 as being very influential, saying, \"It was unbelievable. All I wanted to do was watch her. I wanted to see how she tied her shoelaces, what her ponytail looked like, how she carried her bag. Even though I lost, the impact of that and the motivation it gave me was huge. It was definitely the biggest moment of my career\".\n[…]\nClijsters is involved with multiple organizations that help children. She has served as an ambassador for SOS Children's Villages since 2010. Clijsters founded Ten4Kim, a nonprofit that funds junior tennis players who cannot afford the costs associated with training at a high level.\n[…]\nWhile Clijsters retired, she served as a part-time coach to several players, including Elise Mertens and Yanina Wickmayer. She also occasionally was a commentator at the Grand Slam tournaments, working for the BBC and Fox Sports Australia at Wimbledon and for Channel 7 at the Australian Open.\n[…]\nIn 2022, Clijsters recorded public service announcements for the US Open for MTANew York City Transit.\n[…]\nDewulf, Filip; de Jong, Wilfried (2013). Kim Clijsters: First and Only Official Career Overview. Cannibal Publishing. ISBN 978-94-91376-58-0.\n[…]\nvan de Winkel, Frank (2012). Kim Clijsters: De Biographie (in Dutch). Spectrum. ISBN 978-90-00-30640-4.\n[…]\nKim Clijsters at the Women's Tennis Association\n[…]\nKim Clijsters at World Tennis\n[…]\nKim Clijsters at the Billie Jean King Cup (archived)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Kim_Clijsters",
        "situacao": "ok",
        "texto": "Kim Antonie Lode Clijsters (Bilzen, 8 de junho de 1983) é uma ex-tenista profissional belga e ex-número 1 no ranking de simples e duplas simultaneamente.\n[…]\nTornou-se profissional em 1997, treinada por Carl Maes. Filha do ex-jogador profissional de futebol da seleção belga Lei Clijsters  e de uma ex-ginasta, Clijsters impressiona pela eficiência em conciliar ataque e defesa. Aos 24 anos, em maio de 2007, Clijsters anunciou sua aposentadoria do circuito por motivos de saúde (vinha de numerosas contusões) e para se dedicar mais à sua vida pessoal.\n[…]\nAo lado de Jelena Jankovic e Svetlana Kuznetsova a tenista belga é uma das poucas jogadoras do circuito capazes de deslizar em qualquer superfície. Uma das marcas registradas de Clijsters é a defesa com abertura de pernas, para alcançar bolas anguladas, que frequentemente arranca manifestações de surpresa do público. Maria Sharapova quando entrevistada ao perder a final de Miami em 2005 para Kim disse: \"Você deve ter em mente que ela poderá devolver todas as bolas.\"\n[…]\nClijsters deu à luz a pequena Jada Ellie, no dia 27 de fevereiro de 2008. Seu pai, Lei, morreu em 4 de janeiro de 2009, de câncer de pulmão. Motivada por essas mudanças impactantes, Kim iniciou uma bem-sucedida nova carreira no tênis.\n[…]\nClijsters desistiu do WTA de Miami de 2021, afirmando que não se sentia pronta para competir depois da cirurgia, além de ter contraído COVID em janeiro do mesmo ano. O primeiro compromisso do ano foi em setembro, no WTA de Chicago, entrado via wild card. Foi derrotada por Hsieh Su-wei em três sets. Também participou de duplas, ao lado da belga Kirsten Flipkens, mas não passou da estreia.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Tie-break",
      "descricao": "Game de desempate usado no tênis para decidir um set empatado em seis games a seis."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "No tie-break tradicional, vence quem chega primeiro a quantos pontos, com dois de vantagem?",
    "resposta": "Sete",
    "distratores": [
      "Cinco",
      "Dez",
      "Quinze"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Tennis_scoring_system"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tennis_scoring_system",
        "situacao": "ok",
        "texto": "The tennis scoring system is a standard widespread method for scoring tennis matches, including pick-up games. Some tennis matches are played as part of a tournament, which may have various categories, such as singles and doubles. The great majority are organised as a single-elimination tournament, with competitors being eliminated after a single loss, and the overall winner being the last competi\n[…]\nMixed doubles mostly uses a unique match tiebreak which replaces the third set with a tiebreak game. The pair that reaches ten points with a margin of two or more points wins the match. The Australian Open first created the format in 2001, the US Open adopted it in 2003, and the French Open adopted it in 2007, while Wimbledon continues to use a regular tie-break set -except for the 2024 edition where delays caused by weather conditions lead to adopting match tiebreak scoring.\n[…]\nAn alternative tiebreak system called the \"Coman Tie-Break\" is sometimes used by the United States Tennis Association. Scoring is the same, but end changes take place after the first point and then after every four points. This approach allows the servers of doubles teams to continue serving from the same end of the court as during the body of the set. It also reduces the advantage the elements (e.g.\n[…]\nAnother alternative set format is seen in World TeamTennis, where the winner of a set is the first to win five games, and a 9-point tiebreak is played at 4–4.\n[…]\nAs an example, consider a match between Victoria Azarenka and Ana Ivanovic. Azarenka wins the first set 6–4, Ivanovic wins the next set 7–6 (winning the tiebreak 7–4), and Azarenka wins the final set 6–0.\n[…]\nThe score is always written and announced in respect to the winner of the match. The score of the tiebreak is not included in announcing the final result; it is simply said \"seven–six\" or \"six–seven\" regardless of the score in the tiebreak."
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Grand Slam (tênis)",
      "descricao": "Conjunto dos quatro maiores torneios do tênis, e também o feito de vencer os quatro no mesmo ano."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Nos torneios de Grand Slam, as partidas de simples masculino são disputadas em melhor de quantos sets?",
    "resposta": "Cinco",
    "distratores": [
      "Três",
      "Sete",
      "Nove"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Grand_Slam_(tennis)",
      "https://en.wikipedia.org/wiki/Tennis_scoring_system"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Grand_Slam_(tennis)",
        "situacao": "ok",
        "texto": "The Grand Slam in tennis is the achievement of winning all four major championships in one discipline in a calendar year. In doubles, a Grand Slam may be achieved as a team or as an individual with different partners. Winning all four major championships consecutively but not within the same calendar year is referred to as a \"non-calendar-year Grand Slam\", while winning the four majors at any poin\n[…]\nThe term Grand Slam is also attributed to the Grand Slam tournaments, referred to as Majors, and they are the world's four most important annual professional tennis tournaments. They offer the most ranking points, prize money, public and media attention, the greatest strength and size of the field and, in recent years, the longest matches for men (best of five sets, best of three for the women).\n[…]\nOver the years, the tournament has pioneered changes that other tournaments later adopted, including the introduction of a tiebreak system to decide the outcome of sets tied at 6–6 in 1970, being the first Grand Slam tournament to award equal prize money to the men's and women's events in 1975, the installation of floodlights in 1975 in order to allow matches to be played at night, and the introduction of instant replay reviews of line calls using the Hawk-Eye computer system in 2006.\n[…]\nA player who won all three in a calendar year was considered retrospectively to have achieved a \"Professional Grand Slam\", or \"Pro Slam\". In the pre-open era the terms did not exist. The feat was accomplished by Ken Rosewall in 1963 and Rod Laver in 1967, while Ellsworth Vines, Hans Nüsslein and Don Budge have won the three major trophies during their careers. The professional majors did not have a women's draw except for the Cleveland tournament in 1953, 1955, 1956, 1959.\n[…]\nList of Grand Slam and related tennis records\n[…]\nGrand Slam (golf)\n[…]\nAll-time Grand Slam tournament winners – Reference book"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Tennis_scoring_system",
        "situacao": "ok",
        "texto": "The tennis scoring system is a standard widespread method for scoring tennis matches, including pick-up games. Some tennis matches are played as part of a tournament, which may have various categories, such as singles and doubles. The great majority are organised as a single-elimination tournament, with competitors being eliminated after a single loss, and the overall winner being the last competi\n[…]\nMatches employ either a best-of-three (first to two sets wins) or best-of-five (first to three sets wins) set format. The best-of-five set format is usually only used in the men's singles matches at Grand Slam tournaments.\n[…]\nBeginning in the early 1970s, the tiebreak set was widely adopted by many tournaments, including the Grand Slam tournaments for all sets except the final set. From 1970 to 2018, the US Open was the only major to use a tiebreak set in the final set. In 2019 the Australian Open adopted the final set tiebreak at 6–6 and Wimbledon adopted the tiebreak when the set was tied 12–12. In 2022, the French Open adopted a final set tiebreaker at 6–6 and Wimbledon also adopted a tiebreak at 6–6.\n[…]\nThis meant from 2022 all final sets in Grand Slam tournaments would be decided by a fifth set tiebreak at 6–6.\n[…]\nTiebreak sets even for final sets are now universal in all levels of professional play. However, the details of final set tiebreak sets in Grand Slam tournaments were not uniform from 1970 to 2022. During most of this era, the US Open was the only major tournament to use a tiebreak in the final set for singles. After criticism of two lengthy semifinals in the 2018 Men's singles, Wimbledon announced the 2019 Championships would use final-set tiebreaks if the score reached 12–12.\n[…]\nGame, set, match, (Victoria) Azarenka, two sets to one, six–four, six–seven, six–love."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Grand_Slam_de_t%C3%AAnis",
        "situacao": "ok",
        "texto": "Os torneios de Grand Slam, também chamados abreviadamente de majors, são os quatro eventos anuais mais importantes do tênis. Eles oferecem o maior número de pontos no ranking mundial, prêmios em dinheiro, atenção do público e da mídia. Os títulos nestes torneios são chamados de Títulos de Grand Slam. Os torneios são o Australian Open, Roland Garros, Wimbledon e o US Open, que acontecem nesta ordem\n[…]\nNo qualificatório de simples, três torneios possuem a chave masculina maior que a feminina. A exceção é o US Open, com 128 tenistas em cada disputa.\n[…]\nNos eventos de cadeirantes, os tetraplégicos jogam somente os torneios de quadra dura - Australian Open e US Open, tanto em simples quanto em duplas. Os cadeirantes com menos limitações jogam duplas apenas em Wimbledon, que só possui essa modalidade. Anunciou, contudo, a liberação de simples a partir de 2016. Os Jogos Paralímpicos, ocorridos em segundos semestres, costumam coincidir com o US Open. Logo, o torneio norte-americano não ocorre quando os cadeirantes precisam disputar medalhas.\n[…]\nEm 2017, Roland Garros inseriu tiebreak em sets decisivos nos qualificatórios e no evento juvenil.\n[…]\nEm 2019, dois torneios de Grand Slam acabaram com sets longos nas parciais decisivas. Nas chaves principais de simples (isso já ocorria em duplas) do Australian Open, os jogadores disputam o super tiebreak (tiebreak que termina em 10 pontos desde que com 2 de diferença) após o empate por 6 games a 6. No Torneio de Wimbledon, após 12–12, haverá um tiebreak normal. Isso ocorrerá em todas as categorias.\n[…]\nRoland Garros era o único torneio que não igualava o número de qualifiers femininas em simples aos masculinos (96 x 128). A partir de 2021, não é mais.\n[…]\nATP e WTA informam suas pontuações em Grand Slam, distintas entre si, em simples e em duplas. A ITF responde pelos juvenis e cadeirantes.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Martina Navratilova",
      "descricao": "Tenista nascida em 1956 em Praga e naturalizada americana, campeã de 18 Grand Slams em simples."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Entre o fim dos anos setenta e 1990, quantas vezes Martina Navratilova venceu Wimbledon em simples?",
    "resposta": "Nove",
    "distratores": [
      "Seis",
      "Sete",
      "Oito"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Martina_Navratilova"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Martina_Navratilova",
        "situacao": "ok",
        "texto": "Martina Navratilova (Czech: Martina Navrátilová, pronounced [ˈmarcɪna ˈnavraːcɪlovaː] ; née Šubertová [ˈʃubɛrtovaː]; born October 18, 1956) is a Czech-American former professional tennis player. She was ranked world No. 1 in women's singles for 332 weeks (second-most all time), including as the year-end No. 1 seven times, and was world No. 1 in women's doubles for a record 237 weeks.\n[…]\nNavratilova won a record six consecutive singles majors across 1983 and 1984 while simultaneously winning the Grand Slam in doubles. Navratilova claims the best professional season winning percentage, 98.9% in 1983 (going 86–1 for the season), and the longest all-surface winning streak of 74 straight match wins. She reached the Wimbledon singles final 12 times, including for nine consecutive years from 1982 through 1990.\n[…]\nNavratilova's final Grand Slam singles triumph was in 1990. In the final at Wimbledon, the 33-year-old Navratilova swept Zina Garrison 6–4, 6–1 to claim an all-time-record ninth Wimbledon singles crown. She won four other tournaments that year, although she did not participate in the Australian or French Opens, and finished the year ranked No. 3 in the world, narrowly edged by 16-year-old Monica Seles for the No. 2 spot.\n[…]\nThough Wimbledon 1990 was her last major singles title, Navratilova reached two additional major singles finals during the remainder of her career: in 1991, she lost in the US Open final to No. 1 Monica Seles; and, in 1994, at age 37, Navratilova reached the Wimbledon final, where she lost in three sets to Conchita Martínez. In November that year, after losing to Gabriela Sabatini in the first round of the WTA Tour Championships, she retired from full-time competition on the singles tour.\n[…]\nMartina Navratilova at World Tennis\n[…]\nMartina Navratilova at the Billie Jean King Cup (archived)\n[…]\nMartina Navratilova at the International Tennis Hall of Fame"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Martina_Navr%C3%A1tilov%C3%A1",
        "situacao": "ok",
        "texto": "Martina Navrátilová (Praga, 18 de outubro de 1956) é uma ex-tenista tcheca. Naturalizou-se estadunidense em 1981.\n[…]\nEspecialistas em tênis afirmam que, devido à sua personalidade carismática, determinada e controvertida, Martina ultrapassou a francesa Suzanne Lenglen, que brilhou na década de 1920. Navrátilová venceu 18 Grand Slams de simples, 31 Grand Slams de duplas (recorde de todos os tempos), e 10 Grand Slams de duplas mistas.\n[…]\nEm Setembro de 1992, Martina Navrátilová enfrentou o ex-tenista Jimmy Connors, no Caesars Palace, em Paradise, Nevada, numa partida amistosa. Connors venceu por 7-5 e 6-2, mesmo com regras que favoreceram a tenista (como poder usar a área maior da quadra destinada a duplas, e ele não poder cometer faltas nos saques). Esta partida ganhou a alcunha de \"Battle of Champions\" (em português: Batalha de Campeões).\n[…]\nMartina Navrátilová, Chris Evert, Margaret Osborne duPont, Steffi Graf, Rafael Nadal, Bob Bryan e Mike Bryan são os únicos tenistas a obter o chamado Década Slam do tênis. Ou seja, ganhar durante dez anos consecutivos pelo menos um dos torneio do Grand Slam por temporada. Não precisa ser o mesmo torneio do Grand Slam, mas tem que ser obrigatoriamente durante dez anos consecutivos e só em simples, duplas ou duplas mistas.\n[…]\nNove títulos em doze finais de Wimbledon.\n[…]\nWimbledon\n[…]\nSimples (9): 1978, 1979, 1982, 1983, 1984, 1985, 1986, 1987, 1990\n[…]\nDuplas (9): 1977, 1978, 1980, 1983, 1984, 1986, 1987, 1989, 1990\n[…]\nJá nos Estados Unidos, Navrátilová iniciou um romance com a escritora Rita Mae Brown e, posteriormente, também namorou a jogadora de basquetebol Nancy Lieberman.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Tênis em cadeira de rodas",
      "descricao": "Modalidade de tênis adaptada para usuários de cadeira de rodas."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "No tênis em cadeira de rodas, quantas vezes a bola pode quicar antes de ser devolvida?",
    "resposta": "Duas",
    "distratores": [
      "Uma",
      "Três",
      "Quatro"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Wheelchair_tennis"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Wheelchair_tennis",
        "situacao": "ok",
        "texto": "Wheelchair tennis is one of the forms of tennis adapted for wheelchair users. The size of the court, net height and rackets are the same, but there are two major differences from pedestrian tennis: athletes use specially designed wheelchairs, and the ball may bounce up to two times, where the second bounce may also occur outside the court.\n[…]\nOn early February 2019, Roland Garros announced that on the same year, its competition would start including wheelchair quads draws.\n[…]\nThe ITF BNP Paribas World Team Cup is a wheelchair tennis tournament for national teams, held annually since 1985. The BNP Paribas World Team Cup World Group event is played once a year, for 4 category men, women, quads and boys juniors. There are four continental qualification events in Europe, Africa, Asia and Americas, in which men and women compete to qualify for the main event supported by the Cruyff Foundation.\n[…]\nThe last two major tournaments of the year are the Wheelchair Tennis Masters (singles event) and Uniqlo Wheelchair Doubles Masters. The top eight men, top eight women and top six quads based on ranking are invited to compete there each year.\n[…]\nWheelchair tennis is played at the Paralympic Games and FESPIC Games as well.\n[…]\nITF Wheelchair Tennis Tour\n[…]\nWheelchair Tennis Masters\n[…]\nList of wheelchair tennis champions\n[…]\nWheelchair tennis at the Summer Paralympics\n[…]\nWheelchair tennis classification\n[…]\nAdaptive Standing Tennis\n[…]\nITF BNP Paribas World Team Cup (Wheelchair Tennis)\n[…]\nITF Beach Tennis Tour\n[…]\nWheelchair tennis at the International Paralympic Committee\n[…]\nWheelchair tennis at the International Tennis Federation\n[…]\nUnited States Tennis Association: Wheelchair tennis\n[…]\nTennis Foundation (Great Britain): Wheelchair tennis at the Wayback Machine (archived 30 January 2012)\n[…]\nA guide to wheelchair tennis | ITF"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/T%C3%AAnis_em_cadeira_de_rodas",
        "situacao": "ok",
        "texto": "O tênis em cadeira de rodas é um esporte paraolímpico praticado por cadeirantes cuja deficiência seja a perda dos membros ou a incapacidade de utilizá-los para locomoção. Utiliza as mesmas quadras do tênis convencional utilizando as mesmas regras com pequenas adaptações .\n[…]\nA maior diferença da regra adotada neste esporte é a que a bola pode quicar duas vezes antes de ser rebatida, podendo o segundo quique ocorrer fora das linhas da quadra. A mesma regra é válida para os saques, que podem ser realizados por outra pessoa se a deficiência do jogador impeça a realização deste. Durante o jogo o jogador não pode deixar o assento de sua cadeira de rodas, sendo ela considerada parte do corpo do jogador .\n[…]\nO esporte foi criado por Jeff Minnenbraker e Brad Parks nos Estados Unidos em 1976 , sendo o primeiro campeonato organizado no ano seguinte. Em 1981 foi fundada a WTPA (Wheelchair Tennis Player Association) para regular o novo esporte. Ainda em 1981, foi incluído nas Paraolimpíadas de Seul em caráter de exibição. Em 1982, a França tornou-se o primeiro país europeu a implementar um programa de tênis em cadeira de rodas .\n[…]\nApós isso, muitos esforços têm sido envidados para promover o esporte em alta performance. O tênis em cadeira de rodas passou a valer medalhas nas paraolimpíadas de verão de Barcelona em 1992.\n[…]\nO circuito de tênis em cadeira de rodas da ITF consiste em torneios internacionais em diferentes níveis e premiações. O montante total da premiação do circuito em 2016 foi de aproximadamente 12 milhões de reais.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Quadra de tênis",
      "descricao": "Área retangular demarcada, dividida ao meio por uma rede, onde se joga tênis."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "No centro da quadra, qual é a altura oficial aproximada da rede de tênis?",
    "resposta": "91 centímetros",
    "distratores": [
      "80 centímetros",
      "107 centímetros",
      "1 metro e 20"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Tennis_court",
      "https://en.wikipedia.org/wiki/Tennis"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tennis_court",
        "situacao": "ok",
        "texto": "A tennis court is the venue where the sport of tennis is played. It is a firm rectangular surface with a low net stretched across the centre. The same surface can be used to play both doubles and singles matches. A variety of surfaces can be used to create a tennis court, each with its own characteristics which affect the playing style of the game.\n[…]\nBased on the standard rules of tennis, the size of the court is measured to the outside of the respective baselines and sidelines. The \"service\" lines (\"T\" and the \"service\" line) are centered. The ball must completely miss the line to be considered \"out\". This also means that the width of the line (except for the center service line) is irrelevant to play.\n[…]\nITF uses the following classification for tennis court surface types:\n[…]\n\"Carpet\" in tennis means any removable court covering. Indoor arenas store rolls of rubber-backed court surfacing and install it temporarily for tennis events, but they are not in use any more for professional events. A short piled form of artificial turf infilled with sand is used for some outdoor courts, particularly in Asia. Carpet is generally a fast surface, faster than hardcourt, with low bounce.\n[…]\nNotable tennis tournaments previously held on carpet courts were the WCT Finals, Paris Masters, U.S. Pro Indoor and Kremlin Cup. Since 2009, their use has been discontinued on the top tier of the ATP. ATP Challenger Tour tournaments such as the Trofeo Città di Brescia still use carpet courts. The WTA Tour's last carpet court event, the International-level Tournoi de Québec, was discontinued after 2018.\n[…]\nCommon tennis court terms:\n[…]\nCenter mark: The 4-inch mark at the halfway point of the baseline used to distinguish the two halves (and service boxes) of a tennis court.\n[…]\nNo-line court\n[…]\nInternational Tennis Federation (ITF) – Tennis court construction guidelines"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Tennis",
        "situacao": "ok",
        "texto": "Tennis is a racket sport that is played either individually against a single opponent (singles) or between two teams of two players each (doubles). Each player uses a tennis racket strung with a cord to strike a hollow rubber ball covered with felt over or around a net and into the opponent's court. The objective is to manoeuvre the ball in such a way that the opponent is not able to play a valid \n[…]\nThe net is 3 feet 6 inches (1.07 m) high at the posts and 3 feet (0.91 m) high in the centre. The net posts are 3 feet (0.91 m) outside the doubles court on each side or, for a singles net, 3 feet (0.91 m) outside the singles court on each side.\n[…]\nIn March 2012 the Tennis Channel published a combined list of the 100 greatest men and women tennis players of all time. It ranked Steffi Graf as the greatest female player (in 3rd place overall), followed by Martina Navratilova (4th place) and Margaret Court (8th place). The rankings were determined by an international panel.\n[…]\nThe US Open, Miami Masters, US Open Series, and World Team Tennis started using this challenge system in 2006 and the Australian Open and Wimbledon introduced the system in 2007. In clay-court matches, such as at the French Open, a call may be questioned by reference to the mark left by the ball's impact on the court surface.\n[…]\nThe referee, who is usually located off the court, is the final authority about tennis rules. When called to the court by a player or team captain, the referee may overrule the umpire's decision if the tennis rules were violated (question of law) but may not change the umpire's decision on a question of fact. If, however, the referee is on the court during play, the referee may overrule the umpire's decision.\n[…]\nThe Royal Tenenbaums (2001) is a film that features Richie Tenenbaum (Luke Wilson), a tennis pro who has depression and has a breakdown on court in front of thousands of fans.\n[…]\nTennis games"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Quadra_de_t%C3%AAnis",
        "situacao": "ok",
        "texto": "Quadra de tênis (português brasileiro) ou campo de ténis (português europeu) ou court é o local onde se joga tênis. Se trata de uma área superfície retangular cruzada ao meio por uma rede baixa. A quadra deve estar preparada e marcada para praticar tanto em simples e para duplas.\n[…]\nTênis se joga em uma superfície retangular e plana, que pode estar construída por diversos materiais. A quadra tem 23 metros de comprimento. E de largura varia de acordo com o jogo:\n[…]\nA rede divisória deve encontrar-se a uma altura de 0,914 m no centro e 1,07 m nos postes de sustentação.\n[…]\nA quadra é dividida em dois lados, um para cada jogador ou dupla. Em cada lado existem dois «quadrados de saque», setores retangulares onde deverá colocar a bola a partir do serviço de saque, logo deve ser em diagonal, para que seja válido.\n[…]\nExistem cinco tipos básicos de superfície das quais se pratica tênis, mas, só os quatro primeiros são de uso geral:\n[…]\nQuadra de carpete\n[…]\nQuadra de grama\n[…]\nQuadra dura\n[…]\nLista de quadras de tênis por capacidade\n[…]\nFederação Internacional de Tênis\n[…]\nConfederação Brasileira de Tênis\n[…]\nFederação Portuguesa de Ténis",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Maria Esther Bueno",
      "descricao": "Tenista brasileira (1939-2018), sete vezes campeã de simples em Grand Slams e número um do mundo em 1959 e 1960."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Quantas vezes a paulistana Maria Esther Bueno venceu o torneio de simples de Wimbledon?",
    "resposta": "Três",
    "distratores": [
      "Duas",
      "Quatro",
      "Cinco"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Maria_Bueno",
      "https://pt.wikipedia.org/wiki/Maria_Esther_Bueno"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Maria_Bueno",
        "situacao": "ok",
        "texto": "Maria Esther Andion Bueno (11 October 1939 – 8 June 2018) was a Brazilian professional tennis player. During her 11-year career in the 1950s and 1960s, she won 19 major titles (seven in women's singles, 11 in women's doubles and one in mixed doubles), making her the most successful South American tennis player in history and the only one ever to win Wimbledon in singles. Bueno was the year-end No.\n[…]\nIn 1959 Correios do Brasil issued a postal stamp honouring her title at the Wimbledon Ladies Singles Championships. That same year the Associated Press voted her Female Athlete of the Year. In 1978, Bueno was inducted into the International Tennis Hall of Fame in Newport, Rhode Island.\n[…]\nThe Seniors World Team Championships for the women's 50 age category is named \"Maria Esther Bueno Cup\" by the International Tennis Federation (ITF) in her honour.\n[…]\nIn October 2018, Maria Esther Bueno received the Medal of Sporting Merit from the Chamber of Councilors of São Paulo, according to the Resolution 03/2014.\n[…]\nThe Maria Esther Bueno Cup, an under-24 men's tennis competition that ran from 2018 to 2023, was named in her honour.\n[…]\nOn 24 November 2018, the Sociedade Harmonia de Tênis club in São Paulo unveiled a statue of Bueno during the Maria Esther Bueno Cup. The ceremony, attended by members of her family, also featured an exhibition of trophies and clothing celebrating her career.\n[…]\nA 190 kilograms and 2.37 meters statue of Bueno created by artist Celina Kihel Lara Leite Ribeiro was inaugurated in March 2000 at the headquarters of the Federação Paulista de Tênis. In 2025, it was displayed to the public for the first time during the SP Open.\n[…]\nBueno won 19 of her 35 Grand Slam finals. This represents a success rate of 54%.\n[…]\nMaria Bueno at the International Tennis Hall of Fame\n[…]\nMaria Bueno at the Women's Tennis Association\n[…]\nMaria Bueno at World Tennis\n[…]\nMaria Bueno at the Billie Jean King Cup (archived)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Maria_Esther_Bueno",
        "situacao": "ok",
        "texto": "Maria Esther Andion Bueno (São Paulo, 11 de outubro de 1939 — São Paulo, 8 de junho de 2018), conhecida no exterior como Maria Bueno, foi uma tenista brasileira, que atuou nas décadas de 1950, 1960 e 1970, sendo uma das raras tenistas a conquistar títulos em três décadas diferentes. Segundo o jornalista esportivo José Nilton Dalcim: “Maria Esther Bueno é a maior atleta feminina brasileira de todos\n[…]\nEm 1960, entrou para a história como a primeira mulher a ganhar o chamado Grand Slam de tênis, ou seja, a conquistar os quatro Grand Slams jogando em duplas num mesmo ano (três com Darlene Hard e um com Christine Truman Janes). Seu nome está no Livro dos Recordes: na final do US Open de 1964, contra a americana Carole Caldwell Graebner, Maria Esther venceu a partida em apenas dezenove minutos.\n[…]\nO primeiro título de simples de Maria Esther Bueno em um torneio de Grand Slam, veio quando tinha apenas dezenove anos de idade, no dia 4 de julho de 1959, na \"grama sagrada\" de Wimbledon. Ao vencer Darlene Hard, por 6/3 e 6/4, ela pôs fim a 21 anos de domínio norte-americano em Wimbledon.\n[…]\nEm 1960, Maria Esther alcança o bicampeonato do torneio simples em Wimbledon, com 8/6 e 6/0 sobre Sandra Reynolds, e é vice nos EUA, perdendo para Hard por 4/6, 12/10 e 4/6. Após a conquista em Wimbledon, a jogadora estampou a capa de uma edição de janeiro de 1961 da revista \"Cruzeiro\", ao lado de Pelé, Éder Jofre e o bicampeão de pesca submarina Bruno Hermanny. A matéria fazia uma projeção da carreira dos quatro atletas e comentava as conquistas do ano anterior.\n[…]\nNo tradicional torneio da Austrália (atual Australian Open) Maria Esther chegou como cabeça de chave número 1. Naquele ano, o torneio acontecia na cidade de Brisbane, e ainda se jogava na grama, especialidade da brasileira. Ela disputou as três modalidades do torneio: simples, dupla feminina e dupla mista."
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Sistema de pontuação do tênis",
      "descricao": "Conjunto de regras de contagem do tênis, com pontos de quinze, trinta e quarenta, games e sets."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Em inglês, o zero do placar do tênis se chama love. Segundo uma teoria popular, viria da palavra francesa para qual objeto, de formato parecido?",
    "resposta": "Ovo",
    "distratores": [
      "Anel",
      "Roda",
      "Moeda"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Tennis_scoring_system"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tennis_scoring_system",
        "situacao": "ok",
        "texto": "The tennis scoring system is a standard widespread method for scoring tennis matches, including pick-up games. Some tennis matches are played as part of a tournament, which may have various categories, such as singles and doubles. The great majority are organised as a single-elimination tournament, with competitors being eliminated after a single loss, and the overall winner being the last competi\n[…]\nThe use of \"love\" for zero probably derives from the phrase \"playing for love\", meaning \"without stakes being wagered, for nothing\". Another explanation is that it derives from the French expression for \"the egg\" (l'œuf) because an egg looks like the number zero. This is similar to the origin of the term \"duck\" in cricket, supposedly from \"duck's egg\", referring to a batsman who has been called out without scoring a run.\n[…]\nIn tennis, a set consists of a sequence of games played with alternating service and return roles. There are two types of set formats that require different types of scoring.\n[…]\nAn alternative tiebreak system called the \"Coman Tie-Break\" is sometimes used by the United States Tennis Association. Scoring is the same, but end changes take place after the first point and then after every four points. This approach allows the servers of doubles teams to continue serving from the same end of the court as during the body of the set. It also reduces the advantage the elements (e.g.\n[…]\nDuring informal play of tennis, especially at tennis clubs in the U.S. (and other English-speaking countries), score announcements are frequently shortened with the use of abbreviations. For example, a score 15 is replaced with \"five\", or in some cases \"fif\". \"Love\" is often substituted to indicate \"zero\". Similarly, the scores of 30 and 40 may sometimes be spoken as \"three\" or \"four\" respectively. A score of 15–all may sometimes be announced as \"fives\"."
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Björn Borg",
      "descricao": "Tenista sueco nascido em 1956, campeão de Wimbledon e de Roland Garros entre 1974 e 1981."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Pela frieza e pela calma que mostrava em quadra, o sueco Björn Borg ganhou qual apelido?",
    "resposta": "Ice Borg",
    "distratores": [
      "Viking de Ferro",
      "Rei Sueco",
      "Senhor Silêncio"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Bj%C3%B6rn_Borg"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bj%C3%B6rn_Borg",
        "situacao": "ok",
        "texto": "Björn Rune Borg (Swedish: [ˈbjœːɳ ˈbɔrj] ; born 6 June 1956) is a Swedish former professional tennis player. He was ranked as the world No. 1 in men's singles by the Association of Tennis Professionals (ATP) for 109 weeks. Borg won 66 singles titles during his career, including eleven majors: six at the French Open and five consecutively at Wimbledon. Borg was ATP Player of the Year from 1976 to 1\n[…]\nBorg later bounced back as the owner of the Björn Borg fashion label. In Sweden, his label has become very successful, second only to Calvin Klein.\n[…]\nPhil Dent, a contemporary of Borg, has pointed out that skipping Grand Slam tournaments—especially the Australian Open—was not unusual then, before counting Grand Slam titles became the norm. Additionally, another contemporary Arthur Ashe told Sports Illustrated, \"I think Bjorn could have won the US Open. I think he could have won the Grand Slam, but by the time he left, the historical challenge didn't mean anything. He was bigger than the game. He was like Elvis or Liz Taylor or somebody.\"\n[…]\nThe Australian Open was held twice in 1977, in January and December. Borg did not play in either.\n[…]\nBorg–Connors rivalry\n[…]\nBorg–McEnroe rivalry\n[…]\nBorg, Björn (1975). The Björn Borg Story. Chicago: H. Regnery Co. ISBN 0-8092-8184-8.\n[…]\nBorg, Björn; Eugene L. Scott (1980). My Life and Game. New York: Simon and Schuster. ISBN 0-283-98663-8.\n[…]\nThe Wimbledon Collection – Legends of Wimbledon – Björn Borg Standing Room Only, DVD Release Date: 21 September 2004, Run Time: 52 minutes, ASIN: B0002HODA4.\n[…]\nWimbledon Classic Match: Gerulaitis vs Borg Standing Room Only, DVD Release Date: 31 October 2006, Run Time: 180 minutes, ASIN: B000ICLR8O.\n[…]\nBjörn Borg at the Association of Tennis Professionals\n[…]\nBjörn Borg at World Tennis\n[…]\nBjörn Borg at the International Tennis Hall of Fame\n[…]\nBjörn Borg at the Davis Cup (archived)\n[…]\nBjörn Borg at Wimbledon  (archive)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bj%C3%B6rn_Borg",
        "situacao": "ok",
        "texto": "(Estocolmo, 6 de junho de 1956) é um ex-tenista profissional sueco que foi N° 1 do mundo em simples.\n[…]\nBjörn Borg nasceu em Estocolmo e cresceu na cidade de Södertälje, na Suécia. Ganhou, durante dez anos (1973 - 1983), 56 torneios, somando cerca de 100 milhões de dólares em prêmios e contratos de publicidade.\n[…]\nEm 2014, Borg foi considerado pela Revista Tênis um dos \"10 tenistas que transformaram a forma como o tênis é jogado\". Segundo a revista, \"alguns creditam a Bjorn Borg a primazia do uso do topspin no tênis devido ao sucesso que ele alcançou ao golpear todas as bolas com esse efeito. Apesar de o sueco não ter sido o primeiro a usar essa técnica como arma, foi sim ele quem instituiu a era do topspin no esporte\".\n[…]\nDeixou as quadras prematuramente aos 26 anos. Anunciou o abandono dia 23 de Janeiro de 1983, através de um jornal sueco chamado “Kvallposten”: “Não consigo dar 100% e se não consigo fazer isso não é justo continuar. Se queres chegar ao topo, o tênis tem de ser divertido, e eu já não sinto isso. É por isso que desisto.” Aos 26 anos, Björn Borg punha um ponto final na sua carreira.\n[…]\nA frieza que o marcava em cada partida rendeu-lhe o apelido de \"Iceborg\". Três casamentos desfeitos (com a tenista romena Mariana Simionescu, a top model sueca Jannike Bjoerling e a cantora italiana Loredana Bertè) e um rombo de 30 milhões de dólares nos negócios levaram Borg ao consumo de cocaína e a uma overdose, em Fevereiro de 1989, na cidade de Milão.\n[…]\nBorg entrou para o International Tennis Hall of Fame em 1987.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Pete Sampras",
      "descricao": "Tenista americano, ex-número 1 do mundo, vencedor de 14 títulos de Grand Slam."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Pela potência do saque, que apelido de faroeste ganhou o americano Pete Sampras?",
    "resposta": "Pistol Pete",
    "distratores": [
      "Pete Canhão",
      "Cowboy Pete",
      "Xerife Sampras"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pete_Sampras"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pete_Sampras",
        "situacao": "ok",
        "texto": "Pete Sampras (born August 12, 1971) is an American former professional tennis player. One of the most successful tennis players of all time, he was ranked as the world No. 1 in men's singles by the Association of Tennis Professionals (ATP) for 286 weeks (third-most of all time), and finished as the year-end No. 1 six consecutive times.\n[…]\nSampras was a major practitioner of the serve-and-volley style of tennis. His precise and powerful serve, regarded as one of the best in the sport's history, earned him the nickname \"Pistol Pete\". In 2007, he was inducted into the International Tennis Hall of Fame.\n[…]\nSampras led 12–4 in matches against Patrick Rafter.\n[…]\nSampras's mother was born in Greece and his father was born in the United States to a Greek father and Polish mother. His older sister, Stella Sampras Webster, is the women's tennis head coach at UCLA, and his younger sister, Marion, is a teacher in Los Angeles. His older brother, Gus, has been tournament director at the Scottsdale ATP event. In 2007 he became president of the firm managing Pete's business activities.\n[…]\nPete Sampras and Peter Bodo (2009). Pete Sampras: The Autobiography – A Champion's Mind. London: Aurum Press. ISBN 978-1-84513-469-3.\n[…]\nLegends of Wimbledon – Pete Sampras (2006) Standing Room Only, DVD Release Date: October 31, 2006, Run Time: 60 minutes, ASIN: B000ICLR84.\n[…]\nThe Netjets Showdown: Pete Sampras vs. Roger Federer (2008) Arts Alliance Amer, DVD Release Date: April 22, 2008, Run Time: 180 minutes, ASIN: B0013PVGN6.\n[…]\nPete Sampras at the Association of Tennis Professionals\n[…]\nPete Sampras at World Tennis\n[…]\nPete Sampras at the Davis Cup (archived)\n[…]\nPete Sampras at Wimbledon\n[…]\nPete Sampras at Olympics.com\n[…]\nPete Sampras at Olympedia\n[…]\nPete Sampras at the International Tennis Hall of Fame\n[…]\n\"Pete Sampras' Son\". Cooper Magazine. January 28, 2025. Retrieved January 28, 2025."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pete_Sampras",
        "situacao": "ok",
        "texto": "Petros “Pete” Sampras (Washington, DC, 12 de agosto de 1971) é um ex-tenista profissional norte-americano. É considerado por muitos como um dos maiores jogadores de todos os tempos. Com 14 conquistas de Grand Slam, é o quarto maior vencedor de torneios desse nível, ficando atrás apenas de Roger Federer (20), Rafael Nadal (22) e Novak Djokovic (24).\n[…]\nPor 7 vezes venceu o tradicional torneio de Wimbledon, disputado na grama. Já seus outros 7 títulos de Grand Slam foram conquistados no piso duro, sendo que 5 no US Open e 2 no Open da Austrália. Entretanto, nenhuma vez alcançou a final do Open da França, jogado no saibro. O fato de ter sido tão eficiente nas quadras de grama e piso duro mas ineficiente nas de saibro foi devido ao seu estilo de jogo, o saque e voleio.\n[…]\nSampras venceu 64 torneios profissionais da ATP na carreira e manteve-se na liderança do ranking da ATP por 286 semanas — recorde que durou quase 12 anos até ser ultrapassado por Roger Federer em 2012 —, terminando como melhor tenista do ano entre 1993 e 1998. Teve como maior rival o ex-tenista e compatriota Andre Agassi, com quem travou famosas batalhas dentro das quadras.\n[…]\nEm 25 de outubro de 2009, Sampras jogou uma partida-exibição contra Andre Agassi em Macau, na China, e venceu por 2 sets a 1.\n[…]\nSampras é membro do International Tennis Hall of Fame desde 2007.\n[…]\nPete Sampras na Associação de Tenistas Profissionais",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Adidas Stan Smith",
      "descricao": "Modelo de calçado esportivo da Adidas batizado em homenagem ao tenista americano Stan Smith."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Antes de homenagear o americano Stan Smith, o famoso tênis branco da Adidas levava o nome de qual tenista francês?",
    "resposta": "Robert Haillet",
    "distratores": [
      "René Lacoste",
      "Henri Cochet",
      "Jean Borotra"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Adidas_Stan_Smith",
      "https://en.wikipedia.org/wiki/Robert_Haillet"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Adidas_Stan_Smith",
        "situacao": "ok",
        "texto": "Adidas Stan Smith is a tennis shoe made by Adidas, and first launched in 1965. Originally named \"Adidas Robert Haillet\" after the brand endorsed French prominent player Robert Haillet, in 1978 the sneakers were renamed after Stan Smith, an American tennis player who was active between the end of the 1960s and the beginning of the 1980s.\n[…]\nThe Adidas Stan Smith originally was manufactured in Landersheim in north-eastern France. In 1965, this tennis shoe model was named the adidas Robert Haillet after the French tennis professional Robert Haillet. When Haillet retired from tennis, Adidas and Horst Dassler decided to find another tennis player that could endorse the tennis shoe model. Donald Dell, an American tennis manager, suggested Stan Smith, who took the offer in order to obtain royalties for the use of his name.\n[…]\nIn 1973, Stan Smith signed a contract with Adidas. According to Sneaker Report, this contract is on 13th place of the 50 most influential sneaker sponsorships in sports history. Adidas could not decide at first if the model should still be called Robert Haillet or if it should be renamed to Stan Smith, so for several years (1973–1978) the shoe was produced with a tongue that had Stan Smith's portrait and the word Haillet written above it.\n[…]\nComplex Sneakers placed the Stan Smith at number 4 in its list of the 50 greatest tennis sneakers of all time, with the Robert Haillet model in 36th place. ShortList Magazine listed it among the 10 greatest sneakers made. Neal Heard, author of the sneaker cultural history Trainers, placed it 6th in his list of the top 10 sneakers of all time.\n[…]\nMarked as Haillet, shape and material of the green foam padding changed and the Adidas trefoil logo and the text Stan Smith, Stan Smith's portrait and signature on the tongue"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Robert_Haillet",
        "situacao": "ok",
        "texto": "Robert Haillet (26 September 1931 – 26 September 2011) was a French international tennis player. He competed in the Davis Cup a number of times, from 1952 to 1960.\n[…]\nThe iconic tennis shoe adidas Stan Smith was initially named \"adidas Robert Haillet\" when introduced in 1965, but was changed in 1971 after Haillet's retirement from tennis.\n[…]\nHaillet won the Monte Carlo International Tennis Championships in 1958, defeating Jacques Brichant in the semifinal and Jaroslav Drobny in the final in three straight sets. Haillet defended his Monte Carlo title in 1959, defeating Brichant in the semifinal in four sets and Budge Patty in the final in four sets.\n[…]\nHaillet staged a remarkable comeback in his fourth round match against Budge Patty at the 1958 French Championships. Patty was leading 5–0, 40–0 in the fifth set but could not convert his match points and Haillet won seven consecutive games to win the final set 7–5. Haillet reached the semi-finals of the French championships in 1960 (beating Neale Fraser before losing to Nicola Pietrangeli).].\n[…]\nHaillet turned professional in mid 1960 when he joined the pro tour of Jack Kramer.\n[…]\nHis son Jean-Louis Haillet was also a tennis player.\n[…]\nRobert Haillet at the Association of Tennis Professionals\n[…]\nRobert Haillet at World Tennis\n[…]\nRobert Haillet at the Davis Cup (archived)"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Rafael Nadal",
      "descricao": "Tenista espanhol nascido em 1986, aposentado em 2024, campeão de 22 Grand Slams."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Pelo domínio que exerceu em Roland Garros, o espanhol Rafael Nadal ganhou qual apelido?",
    "resposta": "Rei do Saibro",
    "distratores": [
      "Rei da Grama",
      "Mestre das Quadras",
      "Príncipe de Maiorca"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Rafael_Nadal"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rafael_Nadal",
        "situacao": "ok",
        "texto": "Excmo. Sr. D. Rafael \"Rafa\" Nadal Parera, 1st Marquess of Llevant de Mallorca (born 3 June 1986) is a Spanish former professional tennis player. He was ranked as the world No. 1 in men's singles by the Association of Tennis Professionals (ATP) for 209 weeks, and finished as the year-end No. 1 five times. Nadal won 92 ATP Tour singles titles, with 22 major titles—including a record 14 French Open t\n[…]\nFollowing a second-round loss to Alex de Minaur at the Barcelona Open, Nadal reached the fourth round at the Madrid Open, defeating de Minaur en route. He lost in round two at the Italian Open. In May, Nadal lost in the first round of the French Open to world No. 4 and eventual runner-up Alexander Zverev. This brought his final Roland-Garros record to 112–4.\n[…]\nIn 2019, former world No. 1 and 1995 French Open champion Thomas Muster stated: \"Rafael Nadal is the best clay-court player ever\". Former world No. 1 Carlos Moyá stated in 2010 that Nadal was \"one of the greatest ever. But he is on his way to become, who knows, maybe the greatest\". Former world No. 1 Juan Carlos Ferrero: \"Rafa is the king of knowing how to adapt to any situation in the match\". Former world No. 1 and rival Djokovic: \"Our encounters have made me the player I am today\".\n[…]\nIn April 2017, the centre court of the Barcelona Open was named Pista Rafa Nadal. In 2021, prior to the tournament, the French Open paid tribute to Nadal by installing a statue at Stade Roland Garros, created by Spanish sculptor Jordi Díez Fernández. 128036 Rafaelnadal is an asteroid discovered in 2003 and named after Nadal.\n[…]\nIn 2025, on the first day of the 2025 French Open, a new plaque commemorating Rafael Nadal's 14 Roland Garros trophies was unveiled on the Court Philippe Chatrier stadium's soil. The ceremony occurred in the presence of Rafael Nadal, Roger Federer, Novak Djokovic, and Andy Murray, who came to pay tribute to Nadal's career."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rafael_Nadal",
        "situacao": "ok",
        "texto": "Rafael \"Rafa\" Nadal Parera, 1.º Marquês de Llevant de Mallorca (Manacor, 3 de junho de 1986), é um ex-tenista profissional espanhol. É considerado um dos maiores tenistas de todos os tempos.\n[…]\nJá no Grand Slam de Roland Garros, ele fez jus ao seu apelido de \"Rei do Saibro\" ao conquistar sua 60.ª vitória no torneio e o título da competição. A vítima na estreia foi o americano Robby Ginepri, então 279.º do mundo. El Toro Miúra (apelido de Nadal) venceu com direito a \"pneus\" pelas parciais de 6–0, 6–3 e 6–0. Logo após, pela segunda rodada, ele deu mostras de seu jogo inspirado ao derrotar a sensação austríaca Dominic Thiem por 6–2, 6–2 e 6–3.\n[…]\nUma semana após se tornar o primeiro tenista decacampeão de um torneio, no Masters 1000 de Monte Carlo, o espanhol Rafael Nadal repetiu o feito no ATP 500 de Barcelona, onde chegou à 10.ª conquista. O rival superado na decisão foi o austríaco Dominic Thiem, derrotado por 2 sets a 0, com parciais de 6–4 e 6–1. Depois de uma hora e 30 minutos em quadra, o \"Rei do Saibro\" venceu o cabeça de chave número quatro.\n[…]\nJá na próxima fase, Rafael venceu fácil o americano Jack Sock, (então 14.º do ranking), pelas oitavas de final do Masters de Roma, por 2 a 0, com parciais de 6–3 e 6–4. Mas na rodada seguinte, foi quebrada a invencibilidade de Rafael Nadal no saibro em 2017. Pois nas quartas de final, o espanhol, então número cinco do mundo, foi superado pelo austríaco Dominic Thiem (então 7.º do ranking), que venceu em sets diretos, com parciais de 6–4 e 6–3, em quase duas horas de confronto.\n[…]\nNadal é o único tenista a ganhar 5 vezes consecutivas Roland Garros (French Open).\n[…]\nNadal é o maior vencedor em quadras de saibro (63 títulos).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Andre Agassi",
      "descricao": "Ex-tenista americano, ex-número 1 do mundo e campeão de oito torneios de Grand Slam."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "O pai de Andre Agassi, que o treinou desde pequeno, disputou duas Olimpíadas como boxeador por qual país?",
    "resposta": "Irã",
    "distratores": [
      "Armênia",
      "Líbano",
      "Turquia"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Mike_Agassi",
      "https://en.wikipedia.org/wiki/Andre_Agassi"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mike_Agassi",
        "situacao": "ok",
        "texto": "Emmanuel \"Mike\" Agassi (born Emanoul Aghasi; December 25, 1930 – September 24, 2021) was an Iranian-American amateur boxer and tennis coach. He represented Iran in boxing at the 1948 and 1952 Summer Olympics before moving to the United States, where he became a three-time Chicago Golden Gloves champion. After retiring from boxing, he coached his son, tennis player Andre Agassi.\n[…]\nAgassi represented Iran as a bantamweight boxer in the 1948 and 1952 Summer Olympics, but was eliminated in the first round on both occasions. His trainer was retired Polish-German boxer Hans Ziglarski.\n[…]\nIn 1952, Agassi followed his brother Samuel to Chicago. There, he changed his name to Mike Agassi and attended Roosevelt University. After marrying, he moved his family to Las Vegas to take a job at the Tropicana casino.\n[…]\nAgassi trained all of his children in tennis, and stuck them to a 5,000-balls-a-day-regimen. He described his first three children as \"guinea pigs\" in developing the training methods he later used to coach his youngest son, Andre, into a world-class tennis professional.\n[…]\nIn the 2009 autobiography Open, Andre recalled that his father and Steffi Graf's father, Peter Graf, nearly came to blows over whether Andre or Steffi had the superior backhand technique after Mike demonstrated the ball machine he had built to train Andre and his siblings.\n[…]\nIn 1959, Agassi married Elizabeth Dudley at a Methodist church on Chicago's North Side; they had met through a mutual friend. The couple had four children: Rita (b. 1960), Phillip (b. 1962), Tamara (b. 1967), and Andre (b. 1970). From 1984 to 1989, Rita was married to professional tennis player Pancho Gonzales, whom Agassi reportedly disliked.\n[…]\nAgassi's autobiography, The Agassi Story, was published in 2004. He died in Las Vegas on September 24, 2021, at the age of 90."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Andre_Agassi",
        "situacao": "ok",
        "texto": "Andre Kirk Agassi (  AG-ə-see; born April 29, 1970) is an American former professional tennis player. He was ranked as the world No. 1 in men's singles by the Association of Tennis Professionals (ATP) for 101 weeks, including as the year-end No. 1 in 1999. Agassi won 60 ATP Tour-level singles titles, including eight majors, an Olympic gold medal, the 1990 ATP Tour World Championships, and 17 Maste\n[…]\nAmong other child-related programs that Agassi supports through his Andre Agassi Charitable Foundation is Clark County's only residential facility for abused and neglected children, Child Haven. In 1997, Agassi donated funding to Child Haven for a six-room classroom building now named the Agassi Center for Education. His foundation also provided $720,000 to assist in the building of the Andre Agassi Cottage for Medically Fragile Children.\n[…]\nIn September 2013, the Andre Agassi Foundation for Education formed a partnership with V20 Foods to launch Box Budd!es, a line of kids' healthy snacks. All proceeds go to the Foundation.\n[…]\nWimbledon 2000 Semi-final – Agassi vs. Rafter (2003) Starring: Andre Agassi, Patrick Rafter; Standing Room Only, DVD Release Date: August 16, 2005, Run Time: 213 minutes, OCLC 61774054.\n[…]\nCharlie Rose with Andre Agassi (May 7, 2001) Charlie Rose, Inc., DVD Release Date: August 15, 2006, Run Time: 57 minutes.\n[…]\nWimbledon: The Record Breakers (2005) Starring: Andre Agassi, Boris Becker; Standing Room Only, DVD Release Date: August 16, 2005, Run Time: 52 minutes, OCLC 61658553.\n[…]\nAndre Agassi Tennis for Super Nintendo Entertainment System, Genesis, Game Gear, Master System, and mobile phones\n[…]\nAgassi, Andre (2010). Open: An Autobiography. London: Vintage. ISBN 978-0-307-38840-7.\n[…]\nAndre Agassi at the Association of Tennis Professionals\n[…]\nAndre Agassi at World Tennis\n[…]\nAndre Agassi at the Davis Cup (archived)\n[…]\nAndre Agassi at the International Tennis Hall of Fame\n[…]\nAndre Agassi Ventures"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Gustavo Kuerten",
      "descricao": "Tenista brasileiro tricampeão de Roland Garros, o Guga."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Que treinador acompanhou Guga desde a adolescência e esteve ao seu lado nos três títulos de Roland Garros?",
    "resposta": "Larri Passos",
    "distratores": [
      "Ricardo Acioly",
      "Carlos Kirmayr",
      "Thomaz Koch"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Gustavo_Kuerten",
      "https://pt.wikipedia.org/wiki/Gustavo_Kuerten"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Gustavo_Kuerten",
        "situacao": "ok",
        "texto": "Gustavo \"Guga\" Kuerten (Portuguese: [ɡusˈtavu ˈkiʁtẽ]; born 10 September 1976) is a Brazilian former professional tennis player. He was ranked as the world No. 1 in men's singles by the Association of Tennis Professionals for 43 weeks, including as the year-end No. 1 in 2000. Kuerten won 20 ATP Tour-level singles titles, including three majors at the French Open in 1997, 2000, and 2001, as well as\n[…]\nOn 25 May 2008, Gustavo Kuerten played his last professional singles match in front of 15,000 spectators at Roland Garros. He arrived on court wearing his 'lucky' uniform, the same blue & yellow one that he wore in 1997 when he won his first French Open tournament. Despite saving a match point against his opponent Paul-Henri Mathieu, he finally lost in three sets (6–3, 6–4, 6–2)—his result in the final of French Open in 1997.\n[…]\nAs a young player, Kuerten first learned from Carlos Alves. Alves would continue to coach Kuerten for the next 8 years. When he was 14 years old, Kuerten met Larri Passos who would be his coach for the following 15 years. Passos convinced Kuerten and his family that the youth was talented enough to make a living out of playing tennis. The two started traveling all over the world to participate in junior tournaments. Kuerten turned professional in 1995.\n[…]\nIn 1998, 2002 and 2004 Kuerten received the Prix Orange Roland Garros Award for sportsmanship from the association of tennis journalists. In his homeland Brazil he was awarded the Prêmio Brasil Olímpico in 1999 and was named Athlete of the Year in 1999 and 2000. He received the ATP Arthur Ashe Humanitarian of the Year Award in 2003. Kuerten was inducted into the International Tennis Hall of Fame in 2012.\n[…]\nGustavo Kuerten e Roland Garros: uma História de Amor. Instituto Takano. 2002. ISBN 85-902671-1-3.\n[…]\nGustavo Kuerten at the Davis Cup (archived)\n[…]\nGustavo Kuerten at Olympedia\n[…]\nGustavo Kuerten at Olympics.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Gustavo_Kuerten",
        "situacao": "ok",
        "texto": "Gustavo \"Guga\" Kuerten (Florianópolis, 10 de setembro de 1976) é um ex-tenista profissional brasileiro, condecorado com posição no Hall da Fama da Associação de Tenistas Profissionais (ATP). Tricampeão de Roland-Garros, é considerado o maior tenista masculino da história do Brasil. É o único tenista da história a ganhar de Pete Sampras e Andre Agassi no mesmo torneio.\n[…]\nDesde cedo Guga foi estreitamente ligado à luta diária do irmão, algo que incorporou em sua carreira de tenista: em cada jogo disputado, a partir de 1998, Kuerten doava duzentos dólares a instituições de caridade; além disso, todos os troféus conquistados eram dados para o irmão caçula (incluindo as três réplicas em miniatura do troféu de Roland-Garros).\n[…]\nDe ascendência maioritariamente alemã, com alguns elementos austríacos e poloneses, Gustavo Kuerten começou a jogar tênis aos seis anos, por incentivo paterno. Começou treinando com o professor Paulo Allebrandt. Quando tinha 14 anos, conheceu Larri Passos, seu técnico pelos 15 anos seguintes. Foi ele quem convenceu o jogador e sua família de que o jovem tenista tinha talento suficiente para se profissionalizar.\n[…]\nO anúncio feito por Gustavo Kuerten de que deixaria as quadras em junho de 2008 repercutiu nos jornais europeus. Dono de um currículo invejável, mas com sérios problemas físicos que o impediram de jogar em alto nível nos últimos anos, Guga, aos 31 anos, decidiu aposentar-se num palco bem especial: Roland-Garros.\n[…]\nO diário francês Sport24 destacou a decisão de Guga de se retirar das quadras exatamente em Roland-Garros, palco onde foi campeão três vezes: \"Uma temporada de adeus para Kuerten\", apontou a edição. O mesmo caminho seguiu o Le Figaro, que faz menção ao ano de 1997, quando Guga surgiu para o tênis mundial e encantou o público francês com seu visual no estilo surfista.\n[…]\nGuga no Lance\n[…]\nGustavo Kuerten no Tenis News"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Roger Federer",
      "descricao": "Tenista suíço nascido em 1981, ex-número 1 do mundo e campeão de 20 torneios de Grand Slam, aposentado em 2022."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Além da suíça, Roger Federer tem a cidadania de qual país, terra natal da sua mãe?",
    "resposta": "África do Sul",
    "distratores": [
      "Austrália",
      "Alemanha",
      "Holanda"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Roger_Federer"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Roger_Federer",
        "situacao": "ok",
        "texto": "Roger Federer ( FED-ər-ər; Swiss Standard German: [ˈrɔdʒər ˈfeːdərər]; born 8 August 1981) is a Swiss former professional tennis player. He was ranked as the world No. 1 in men's singles by the Association of Tennis Professionals (ATP) for 310 weeks (second-most of all time), including a record 237 consecutive weeks, and finished as the year-end No. 1 five times.\n[…]\nOutside of competition, Federer played an instrumental role in the creation of the Laver Cup team competition. He is also an active philanthropist, having established the Roger Federer Foundation, which targets impoverished children in southern Africa, and raising funds in part through the Match for Africa exhibition series.\n[…]\nOn 24 November 2017, Federer received an honorary doctorate from his home university, the University of Basel, in recognition of his role in increasing the international reputation of Basel and Switzerland, and for his work for children in Africa through his charitable foundation.\n[…]\nThe Nadal vs. Federer \"Match for Africa\" in 2010 in Zürich and Madrid raised more than $4 million for the Roger Federer Foundation and Fundación Rafa Nadal. In January 2011, Federer took part in Rally for Relief, an exhibition to raise money for the victims of the Queensland floods. In 2014, the \"Match for Africa 2\" between Federer and Stan Wawrinka, again in Zürich, raised £850,000 for education projects in Southern Africa.\n[…]\nIn the 2018 \"Match for Africa\" in San Jose, California, Federer paired up with Microsoft billionaire Bill Gates in a doubles clash against Jack Sock and NBC Today show host Savannah Guthrie. He and Gates won, and notably, Federer even won one point on his knees after returning two shots while on the ground.\n[…]\nList of career achievements by Roger Federer\n[…]\nRoger Federer at World Tennis\n[…]\nRoger Federer at the Davis Cup (archived former page)\n[…]\nRoger Federer at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Roger_Federer",
        "situacao": "ok",
        "texto": "Roger Federer (Basileia, 8 de agosto de 1981) é um ex-tenista suíço que já foi recordista de títulos de Grand Slam com vinte conquistas. Dentre seus 103 torneios ATP possui: 6 ATP Finals, 28 ATP Masters 1000, 24 ATP 500 e 25 ATP 250. É o segundo jogador que também já ficou por mais tempo como número um mundial, tendo um total de 310 semanas compreendidas entre 2004 e 2018. Entre 2004 e 2008, passo\n[…]\nÉ o atleta mais vezes premiado na história do Prêmio Laureus do Esporte Mundial. Fala fluentemente suíço-alemão, alemão, inglês e francês, realizando conferências de imprensa nas quatro línguas. É reconhecido por suas iniciativas filantrópicas, sendo a principal delas a criação de uma fundação desse tipo batizada com seu nome. Em setembro de 2011, em uma pesquisa realizada na África do Sul, Roger Federer foi eleito uma das pessoas mais confiáveis e respeitadas do mundo, ao lado de Nelson Mandela.\n[…]\nReconhecido fora das quadras como uma \"excelente pessoa\" e extremamente respeitado pelos adversários, possui uma organização, a Fundação Roger Federer, onde realiza suas atividades em seis países africanos, sendo um deles a África do Sul, terra natal de sua mãe.\n[…]\nRecebeu tal reconhecimento devido ao seu papel no aumento da reputação internacional da Basileia e da Suíça, e também em seu envolvimento com crianças na África através de sua fundação de caridade.\n[…]\nEm 2014, as vitórias sobre Sérvia, Cazaquistão e Itália permitiram que a equipe suíça avançasse para a final. Durante a competição, Federer sofreu uma lesão nas costas, que colocou dúvidas sobre a chance da Suíça de obter o título e, além disso, Gaël Monfils o derrotou no primeiro jogo. No entanto, no dia seguinte, o suíço retornou para ajudar a conquistar a vitória nas duplas. No último dia do confronto, com vantagem para a Suíça por 2-1, houve um jogo de simples entre ele e Richard Gasquet.\n[…]\nGillette Federer Tour",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Ivan Lendl",
      "descricao": "Ex-tenista tcheco-americano, número 1 do mundo por 270 semanas e campeão de oito torneios de Grand Slam."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "O ex-número um Ivan Lendl foi o técnico de qual tenista britânico nas suas duas conquistas de Wimbledon?",
    "resposta": "Andy Murray",
    "distratores": [
      "Tim Henman",
      "Greg Rusedski",
      "Cameron Norrie"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Ivan_Lendl",
      "https://en.wikipedia.org/wiki/Andy_Murray"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ivan_Lendl",
        "situacao": "ok",
        "texto": "Ivan Lendl (Czech: [ˈɪvan ˈlɛndl̩]; born March 7, 1960) is a Czech–American former professional tennis player and coach. Widely regarded as one of the greatest tennis players of all time, he was ranked as the world No. 1 in men's singles by the Association of Tennis Professionals (ATP) for 270 weeks (fourth-most of all time), and finished as the year-end No. 1 four times.\n[…]\nCommonly referred to as the \"Father Of Modern Tennis\" and \"The Father of the Inside-Out Forehand\", Lendl pioneered a new style of tennis; his game was built around his forehand, hit hard and with a heavy topspin, and his success is cited as a primary influence in popularizing the now-common playing style of aggressive baseline power tennis. After retirement, he became a tennis coach for several players; in particular, he helped Andy Murray win three majors and reach the world No. 1 ranking.\n[…]\nOn December 31, 2011, Lendl was appointed to coach Andy Murray. Lendl has been credited with improving Murray's maturity and consistency, guiding him to his first two Grand Slam victories in the 2012 US Open and 2013 Wimbledon Championships. On winning the US Open in 2012, Murray became the second player in the Open Era, after Lendl, to have lost their first four Grand Slam finals, and won the fifth.\n[…]\nOn June 12, 2016, Lendl rejoined Andy Murray's coaching team. By the end of 2016, Murray had become world No. 1, having won his second Wimbledon title, third major championship overall, second Olympic gold medal in singles, and his first ATP World Tour Finals title, defeating Novak Djokovic.\n[…]\nIn March 2022, Lendl reunited with Murray for the third time. Murray managed to win three Challenger titles. In November 2023, Lendl split with his protege for the final time. Murray said he was \"grateful\" for the belief which Lendl continued to show in him.\n[…]\nIvan Lendl at World Tennis\n[…]\nIvan Lendl at Wimbledon"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Andy_Murray",
        "situacao": "ok",
        "texto": "Sir Andrew Barron Murray (born 15 May 1987) is a British professional tennis coach and former player. He was ranked as the world No. 1 in men's singles by the Association of Tennis Professionals (ATP) for 41 weeks, including as the year-end No. 1 in 2016. Murray won 46 ATP Tour singles titles, including three majors at the 2012 US Open, 2013 Wimbledon Championships, and 2016 Wimbledon Championship\n[…]\nWimbledon: 3R (2004)\n[…]\nMurray suffered a straight sets defeat at the Australian Open, to Juan Ignacio Chela in the first round and to Gaël Monfils at the French Open, in five sets. Murray reached the fourth round for the first time at both Wimbledon, (beating 3rd seed Andy Roddick in the 3rd round) before losing to Baghdatis and the US Open before losing to Davydenko.\n[…]\nMurray won a title for the first time on grass at Queen's and became the first British winner of the tournament since 1938. In the final Murray beat James Blake. At Wimbledon, against Stanislas Wawrinka, Murray's fourth round match was the first match to be played entirely under Wimbledon's retractable roof. This also enabled it to be the then latest finishing match ever at Wimbledon, a record he would go on to eclipse three years later. However Murray lost a tight semi-final to Andy Roddick.\n[…]\nAt the US Open, Murray battled from two sets down to win a five-set second-round encounter with Robin Haase, but lost in the semi-finals to Rafael Nadal in four sets. This was the first time in his career that Andy had reached the quarter-finals, or better, at all four slams in a calendar year.\n[…]\nAt the end of November, a television documentary, Andy Murray: Resurfacing, was released on the Amazon Prime platform, detailing Murray's various attempts to overcome his hip injury.\n[…]\nAndy Murray at the Association of Tennis Professionals\n[…]\nAndy Murray at World Tennis\n[…]\nAndy Murray at the Davis Cup (archived)\n[…]\nAndy Murray at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ivan_Lendl",
        "situacao": "ok",
        "texto": "Ivan Lendl é um ex-tenista profissional tcheco (de Checoslováquia), naturalizado norte-americano em 1992, foi número 1 do mundo no Ranking da ATP. E um dos mais vitoriosos jogadores dos anos 1980 e do início da década de 1990.\n[…]\nEra um tenista talentoso que se caracterizou pela sua frieza nas quadras. Na sua geração, enfrentou talentosos tenistas como Stefan Edberg, Mats Wilander, Boris Becker e John McEnroe. Alguns o consideram um dos melhores tenistas de todos os tempos. Sua grande frustração foi nunca ter ganho o torneio de Wimbledon.\n[…]\nÉ o 5° tenista juntamente com Rod Laver com mais títulos em Masters 1000 com 18 títulos.\n[…]\nÉ o 4° tenista com mais títulos na história da ATP com 94 títulos, na frente de Rafael Nadal com 92.\n[…]\nE o 4° tenista com mais títulos grandes (33), atrás apenas do Big Three.\n[…]\nNa competição por equipes, Ivan Lendl levou a Tchecoslováquia à conquista da Copa Davis de 1980.\n[…]\nPor dois períodos, foi o treinador do tenista Andy Murray. Também treinou outro grande tenista, Alexander Zverev.\n[…]\nLendl é membro do International Tennis Hall of Fame desde 2001. Em 2014, Lendl foi considerado pela Revista Tênis um dos \"10 tenistas que transformaram a forma como o tênis é jogado\". Segundo a revista, \"Lendl se dedicou à parte física como nunca ninguém antes havia feito, aliando exercícios de força, resistência, agilidade etc, realizados em academias de ginástica, aos treinamentos em quadra. Foi a partir daí que os tenistas passaram a ser realmente considerados atletas.\n[…]\nCom um jogo de grande consistência, uma mente inabalável e um preparo físico nunca antes visto, Lendl chegou a ser apelidado de robô por seus adversários e criou um padrão copiado até hoje, especialmente na parte física\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Roger Federer",
      "descricao": "Tenista suíço nascido em 1981, ex-número 1 do mundo e campeão de 20 torneios de Grand Slam, aposentado em 2022."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Em que ano Roger Federer venceu Wimbledon pela primeira vez, conquistando também seu primeiro título de Grand Slam?",
    "resposta": "2003",
    "distratores": [
      "2001",
      "2002",
      "2004"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Roger_Federer"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Roger_Federer",
        "situacao": "ok",
        "texto": "Roger Federer ( FED-ər-ər; Swiss Standard German: [ˈrɔdʒər ˈfeːdərər]; born 8 August 1981) is a Swiss former professional tennis player. He was ranked as the world No. 1 in men's singles by the Association of Tennis Professionals (ATP) for 310 weeks (second-most of all time), including a record 237 consecutive weeks, and finished as the year-end No. 1 five times.\n[…]\nWimbledon: W (1998)\n[…]\nIn 2003, Federer won his first Grand Slam singles title at Wimbledon, beating Andy Roddick in the semifinals and Mark Philippoussis in the final. In doing so, he joined the likes of Björn Borg, Pat Cash and Stefan Edberg as the only singles players to win both the junior and senior Wimbledon titles. In August he had a chance to take over the No. 1 ranking for the first time from Andre Agassi if he made it to the Montreal final.\n[…]\nIn 2006, Federer won three Grand Slam singles titles and reached the final of the other, with the only loss coming against Nadal in the French Open. This was Federer and Nadal's first meeting in a Grand Slam final. He was the first man to reach all four finals in a calendar year since Rod Laver in 1969. Federer defeated Nadal in the Wimbledon Championships final. In the Australian Open, Federer defeated Marcos Baghdatis, and at the US Open, Federer defeated 2003 champion Roddick.\n[…]\nFederer developed back injuries in March and July and his ranking dropped from No. 2 to No. 6. Federer's first and only title of 2013 came at the Gerry Weber Open, defeating Mikhail Youzhny in the final. With the victory in Halle, he tied John McEnroe for the third-most ATP titles won by a male player in the Open Era. Federer, however, was unable to maintain his form into Wimbledon, suffering his worst Grand Slam tournament defeat since 2003 in the second round against Sergiy Stakhovsky.\n[…]\nRoger Federer at the Davis Cup (archived former page)\n[…]\nRoger Federer at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Roger_Federer",
        "situacao": "ok",
        "texto": "Roger Federer (Basileia, 8 de agosto de 1981) é um ex-tenista suíço que já foi recordista de títulos de Grand Slam com vinte conquistas. Dentre seus 103 torneios ATP possui: 6 ATP Finals, 28 ATP Masters 1000, 24 ATP 500 e 25 ATP 250. É o segundo jogador que também já ficou por mais tempo como número um mundial, tendo um total de 310 semanas compreendidas entre 2004 e 2018. Entre 2004 e 2008, passo\n[…]\nEssa temporada é marcada por ser a primeira vez desde julho de 2003 em que ele não venceu nenhum dos quatro títulos principais. Nas semifinais do French Open, acabou com a série invicta de 43 vitórias consecutivas de Djokovic com uma vitória em quatro sets, mas em seguida, perdeu para Rafael Nadal. Em Wimbledon, avançou para a sua 29.ª quartas de final consecutiva de Grand Slam, perdendo para Jo-Wilfried Tsonga.\n[…]\nEssa derrota acabou com a série recorde de 36 vitórias consecutivas nas quartas de final em torneios do Grand Slam e significou que ele deixaria o Top 4 pela primeira vez desde julho de 2003.\n[…]\nSeus mais notáveis jogos do Grand Slam aconteceram no Australian Open de 2009, quando Federer venceu em cinco sets depois de perder os dois primeiros, e também em Wimbledon de 2010 e US Open de 2012, os quais Berdych venceu em quatro. Este alcançou a única final de Grand Slam de sua carreira após a vitória nas quartas de final de Wimbledon 2010, terminando a série de sete finais consecutivas do suíço em Wimbledon desde 2003.\n[…]\nDetém o recorde de 237 semanas consecutivas como número um mundial, entre 2 de fevereiro de 2004 e 17 de agosto de 2008. Ao vencer o US Open em 2008 pela quinta vez consecutiva, tornou-se o primeiro tenista da Era Aberta a realizar tal feito, o primeiro desde Bill Tilden, que venceu o torneio entre 1920 e 1925, e também o primeiro tenista da história a vencer dois Grand Slam cinco vezes seguidas (Wimbledon 2003-2007 e dos EUA 2004-2008).\n[…]\nGillette Federer Tour",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Serena Williams",
      "descricao": "Tenista americana nascida em 1981, campeã de 23 Grand Slams em simples na Era Aberta."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Aos dezessete anos, Serena Williams conquistou seu primeiro título de Grand Slam em simples, no US Open. Em que ano?",
    "resposta": "1999",
    "distratores": [
      "1997",
      "1998",
      "2000"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Serena_Williams"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Serena_Williams",
        "situacao": "ok",
        "texto": "Serena Jameka Williams (born September 26, 1981) is an American professional tennis player. She was ranked as the world No. 1 in women's singles by the Women's Tennis Association (WTA) for 319 weeks (third-most of all time), and finished as the year-end No. 1 five times. Williams won 73 WTA Tour–level singles titles, including 23 major women's singles titles—the most in the Open Era, and the secon\n[…]\nAlong with her elder sister Venus, Serena Williams was coached by her parents Oracene Price and Richard Williams. Turning professional in 1995, she won her first major singles title at the 1999 US Open. From the 2002 French Open to the 2003 Australian Open she was dominant, winning all four major singles titles consecutively (each time over Venus in the final) to achieve a non-calendar year Grand Slam (nicknamed the \"Serena Slam\").\n[…]\nWilliams became the second African-American woman to win a Grand Slam singles tournament, after Althea Gibson. The Williams sisters also won the doubles event at this tournament, making Serena the fifth woman in the Open Era to win both singles and doubles at the same major event. To complete her 1999 season, Williams won a doubles match against Russia in the Fed Cup final to help the US win the title.\n[…]\nWilliams did not enter the women's singles event at the 2026 US Open, having not competed in singles since her Wimbledon defeat and subsequent knee injury. She and Venus were instead awarded a wildcard into the women's doubles draw, marking their first Grand Slam appearance together since the 2022 US Open. The sisters had won 14 Grand Slam doubles titles together, including US Open titles in 1999 and 2009, and had not lost a Grand Slam doubles final as a team.\n[…]\nMorgan, Terri (2001). Venus and Serena Williams: Grand Slam Sisters. Sports Achievers Biographies. Lerner Publishing. 64pp. ISBN 978-0-8225-3684-0.\n[…]\nSerena Williams at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Serena_Williams",
        "situacao": "ok",
        "texto": "Serena Jameka  Williams (Saginaw, 26 de setembro de 1981) é uma tenista profissional norte-americana, sendo amplamente considerada uma das maiores atletas de todos os tempos. Considerada uma das melhores e mais vitoriosas tenistas da história do esporte por especialistas e pelo público em geral, Serena marcou seu nome dentro das quadras por ser a maior campeã de Grand Slam na era aberta, com 23 tí\n[…]\nAo longo de sua carreira, Serena conquistou os títulos de todos os torneios do Grand Slam em simples, incluindo o que ela autodenomina \"Serena Slam\", referindo-se aos quatro Grand Slam seguidos que ela venceu por duas vezes: (Roland-Garros 2002, Wimbledon 2002, US Open 2002 e Australian Open 2003) e (US Open 2014, Australian Open 2015, Roland-Garros 2015 e Wimbledon 2015).\n[…]\nCom os 23 troféus conquistados em torneios do Grand Slam, é a segunda maior campeã da história de torneios do gênero Steffi Graf e a um de igualar a australiana Margaret Court. Williams sagrou-se campeã em outros treze torneios de Grand Slam: Australian Open (2005, 2007, 2009, 2010), Roland-Garros (2013), Wimbledon (2003, 2009, 2010, 2012, 2016), e US Open (1999, 2008, 2012, 2013).\n[…]\nCom a conquista do torneio de Wimbledon de 2015, ela, que já tinha a maior distância entre o primeiro e o mais recente troféu de Slam da Era Profissional, também passou a ter em toda a história do tênis, pois seu primeiro título foi no US Open de 1999, portanto há 15 anos e 10 meses, superando Helen Wills Moody.\n[…]\nNas meias-finais do US Open de 2009 (4.º e último torneio do Grand Slam da época) Serena Williams foi excluída do jogo com Kim Clijsters por decisão da árbitra de cadeira, após consulta do juiz-árbitro do torneio, por ter insultado e ameaçado uma juíza de linha que lhe assinalou uma falta de pé, falta essa que deu dois pontos de encontro (match points) à sua adversária, a regressada Kim Clijsters.\n[…]\nSerena Williams no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Jeu de paume",
      "descricao": "Jogo de bola francês, ancestral do tênis, jogado originalmente com a mão e depois com raquete em quadras fechadas."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "O jeu de paume, jogo de bola francês considerado ancestral do tênis, surgiu por volta de qual século?",
    "resposta": "Século doze",
    "distratores": [
      "Século oito",
      "Século quinze",
      "Século dezoito"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Real_tennis",
      "https://en.wikipedia.org/wiki/Jeu_de_paume"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Real_tennis",
        "situacao": "ok",
        "texto": "Real tennis is a racquet sport from which the modern game of tennis (also called \"lawn tennis\") is derived. It is also known as court tennis in the United States, royal tennis in the United Kingdom and Australia, and courte-paume in France (to distinguish it from longue-paume, and in reference to the older, racquetless game of jeu de paume, the ancestor of modern handball and racquet games). Many \n[…]\nThis game may have been played by monks in monastery cloisters, but the construction and appearance of courts more resemble medieval courtyards and streets than religious buildings. By the 16th century, the glove had become a racquet, the game had moved to an enclosed playing area, and the rules had stabilized. Real tennis spread across Europe, with the Papal Legate reporting in 1596 that there were 250 courts in Paris alone, near the peak of its popularity in France.\n[…]\nIn France, François I (1515–1547) was an enthusiastic player and promoter of real tennis, building courts and encouraging play among both courtiers and commoners. His successor, Henry II (1547–1559), was also an excellent player and continued the royal French tradition. The first known book about tennis, Trattato del Giuoco della Palla was written during his reign, in 1555, by an Italian priest, Antonio Scaino da Salo.\n[…]\nThe game thrived among the 17th-century nobility in France, Spain, Italy, the Netherlands, and the Habsburg Empire, but suffered under English Puritanism, as it was heavily associated with gambling. By the Age of Napoleon, the royal families of Europe were besieged and real tennis, a court game, was largely abandoned.\n[…]\nThe Real Tennis Society\n[…]\nPhotos of real tennis court in Jesmond, from BBC Tyne\n[…]\nHistoric Real Tennis Court in the Casino Building on the campus of Georgian Court University, Lakewood, New Jersey\n[…]\nOfficial site of the French Courte Paume Comité (Real tennis in French) (in French)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Jeu_de_paume",
        "situacao": "ok",
        "texto": "Jeu de paume (UK: , French: [ʒø d(ə) pom]; originally spelled jeu de paulme; lit. 'palm game') was a ball-and-court game that originated in France and was the precursor of real tennis (called court tennis in the US or courte paume in France) and ultimately of the modern game of tennis. Jeu de paume was played without racquets, and so was a \"game of the hand\", though these were eventually introduce\n[…]\nIt became known as \"tennis\" in English (see History of tennis), and later \"real tennis\" after the derived game of lawn tennis became the more widely known sport.\n[…]\nThe term is used in France today to denote the game of tennis on a court in which the ancient or modern game might be played. The indoor version is sometimes called jeu de courte paume or just courte paume (\"short palm\") to distinguish it from the outdoor version, longue paume (\"long palm\"), played on a field of variable length.\n[…]\nSince 1740, jeu de paume has been the subject of an amateur world championship (Real Tennis World Championship), held each year in September. It is the oldest active trophy in international sport.\n[…]\nReal tennis\n[…]\nThe painter Jacques-Louis David's famous sketch, le Serment du jeu de paume ('the Tennis Court Oath') now hangs in the court of the Palace of Versailles. It depicts a seminal moment of the French Revolution, when, on 20 June 1789, deputies of the Estates-General met at the court and vowed that they would not disband before the proclamation of a formal Constitution for France.\n[…]\nIn the Agatha Christie's Poirot TV series episode \"Death in the Clouds\", Poirot mentions that tennis, considered an English game, originated in 11th-century France as jeu de paume.\n[…]\nReal tennis\n[…]\nReal Tennis World Championship\n[…]\nEuropean Open (real tennis)\n[…]\nGrand Slam (real tennis)\n[…]\nOratory Real Tennis Club\n[…]\nJeu de Paume History\n[…]\n(in French) Official site of the French Jeu de Paume Comité\n[…]\nAnimated stop motion film of Jeu de Paume match"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Gustavo Kuerten",
      "descricao": "Tenista brasileiro tricampeão de Roland Garros, o Guga."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Em que cidade brasileira nasceu Gustavo Kuerten, o Guga?",
    "resposta": "Florianópolis",
    "distratores": [
      "Joinville",
      "Blumenau",
      "Porto Alegre"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Gustavo_Kuerten",
      "https://pt.wikipedia.org/wiki/Gustavo_Kuerten"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Gustavo_Kuerten",
        "situacao": "ok",
        "texto": "Gustavo \"Guga\" Kuerten (Portuguese: [ɡusˈtavu ˈkiʁtẽ]; born 10 September 1976) is a Brazilian former professional tennis player. He was ranked as the world No. 1 in men's singles by the Association of Tennis Professionals for 43 weeks, including as the year-end No. 1 in 2000. Kuerten won 20 ATP Tour-level singles titles, including three majors at the French Open in 1997, 2000, and 2001, as well as\n[…]\nKuerten was born in Florianópolis in southern Brazil and is of German heritage. He began playing tennis when he was six, an early start to a life and career marked by family tragedy. His father, Aldo, a former amateur tennis player, died of a heart attack in 1985 while umpiring a junior tennis match in Curitiba, when Kuerten was eight years old. His older brother, Raphael, is currently his business manager.\n[…]\nIn 2000, he founded the Gustavo Kuerten Institute, a non-profit philanthropic association based in Florianópolis in support of children and disabled people.\n[…]\nSince retirement he has settled down in his place of birth, the Brazilian island of Florianópolis, where he is an active member in the lakeside district of Lagoa da Conceição. He still enjoys teaching and playing tennis with the local enthusiasts. In his hometown, he is known as the \"Cachorro Grande\" (\"Big Dog\"). He is an avid surfer.\n[…]\nKuerten was accepted to a drama course at CEART, the Center of Arts of Santa Catarina State University (UDESC) in Florianópolis. He began his studies there on 16 February 2009.\n[…]\nO tênis no Brasil: de Maria Esther Bueno a Gustavo Kuerten. Codex. 2004. ISBN 85-7594-031-7.\n[…]\nGustavo Kuerten at the Association of Tennis Professionals\n[…]\nGustavo Kuerten at World Tennis\n[…]\nGustavo Kuerten at the Davis Cup (archived)\n[…]\nGustavo Kuerten at the International Tennis Hall of Fame\n[…]\nGustavo Kuerten at Olympedia\n[…]\nGustavo Kuerten at Olympics.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Gustavo_Kuerten",
        "situacao": "ok",
        "texto": "Gustavo \"Guga\" Kuerten (Florianópolis, 10 de setembro de 1976) é um ex-tenista profissional brasileiro, condecorado com posição no Hall da Fama da Associação de Tenistas Profissionais (ATP). Tricampeão de Roland-Garros, é considerado o maior tenista masculino da história do Brasil. É o único tenista da história a ganhar de Pete Sampras e Andre Agassi no mesmo torneio.\n[…]\nAmbos - Kuerten e Larri - começaram a participar de torneios juniores no Brasil e no exterior. Em 1995 Kuerten tornou-se profissional.\n[…]\nAlém do tênis, Guga costuma praticar o surfe nas praias de Florianópolis. No futebol, Guga torce pelo Avaí Futebol Clube de sua cidade natal. Também é conhecido por ser extremamente humilde e respeitar seu público, quando fora das quadras.\n[…]\nA reportagem também relatou o trabalho social desenvolvido pelo Instituto Guga Kuerten, que atende crianças de baixa renda em Florianópolis, no estado de Santa Catarina, onde o tenista nasceu e reside.\n[…]\nGuga anunciou sua aposentadoria em 12 de fevereiro de 2008, em entrevista exclusiva ao Globo Esporte, da Rede Globo. Antes, porém, fez uma espécie de turnê de despedida onde participou de alguns dos principais torneios do circuito mundial como o Brasil Open, o Challenger de Florianópolis, e os Masters Series de Miami, Monte Carlo e, por fim, Roland-Garros, lugar que consagrou o catarinense.\n[…]\nEm 2011, Guga foi homenageado pela Escola de Samba Grande Rio. Com um tema dedicado a cidade de Florianópolis, uma ala da escola homenageou Guga. A escola de samba produziu um carro especialmente para transportar o tricampeão durante o trajeto no sambódromo da Marquês de Sapucaí, e também criou uma ala com fantasias inspiradas no tênis. Em entrevista, ele comentou: \"Estou muito ansioso, esse vai ser um momento único.\n[…]\nGustavo Kuerten na Associação de Tenistas Profissionais\n[…]\nInstituto Guga Kuerten\n[…]\nGustavo Kuerten no Tenis News"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Andy Murray",
      "descricao": "Tenista britânico, ex-número 1 do mundo, campeão de Wimbledon em 2013 e 2016."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Andy Murray, campeão de Wimbledon pela Grã-Bretanha, nasceu em qual das nações do Reino Unido?",
    "resposta": "Escócia",
    "distratores": [
      "Inglaterra",
      "País de Gales",
      "Irlanda do Norte"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Andy_Murray"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Andy_Murray",
        "situacao": "ok",
        "texto": "Sir Andrew Barron Murray (born 15 May 1987) is a British professional tennis coach and former player. He was ranked as the world No. 1 in men's singles by the Association of Tennis Professionals (ATP) for 41 weeks, including as the year-end No. 1 in 2016. Murray won 46 ATP Tour singles titles, including three majors at the 2012 US Open, 2013 Wimbledon Championships, and 2016 Wimbledon Championship\n[…]\nWimbledon: 3R (2004)\n[…]\nMurray suffered a straight sets defeat at the Australian Open, to Juan Ignacio Chela in the first round and to Gaël Monfils at the French Open, in five sets. Murray reached the fourth round for the first time at both Wimbledon, (beating 3rd seed Andy Roddick in the 3rd round) before losing to Baghdatis and the US Open before losing to Davydenko.\n[…]\nMurray won a title for the first time on grass at Queen's and became the first British winner of the tournament since 1938. In the final Murray beat James Blake. At Wimbledon, against Stanislas Wawrinka, Murray's fourth round match was the first match to be played entirely under Wimbledon's retractable roof. This also enabled it to be the then latest finishing match ever at Wimbledon, a record he would go on to eclipse three years later. However Murray lost a tight semi-final to Andy Roddick.\n[…]\nAt Wimbledon, Murray lost in the second round to 20th seed John Isner. At Hall of Fame Open he reached the quarterfinal before losing to the third seed, Alexander Bublik.\n[…]\nMurray identifies himself as \"Scottish, but also British\". His national identity has often been commented on by the media. Much of the discussion about Murray's national identity began before Wimbledon 2006, when he was quoted as saying he would \"support whoever England is playing\" at the 2006 World Cup.\n[…]\nAndy Murray at the Association of Tennis Professionals\n[…]\nAndy Murray at World Tennis\n[…]\nAndy Murray at the Davis Cup (archived)\n[…]\nAndy Murray at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Andy_Murray",
        "situacao": "ok",
        "texto": "Sir Andrew \"Andy\" Barron Murray O.B.E. (Dunblane, 15 de maio de 1987) é um ex-tenista tricampeão de Grand Slam, sendo estes: US Open 2012, Wimbledon 2013 e 2016 e bicampeão olímpico, em Londres 2012 e Rio 2016,  profissional escocês/britânico. Ao alcançar o Nº 1 do Ranking Mundial da ATP pela primeira vez em novembro de 2016 com 29 anos, ele se tornou o segundo tenista mais velho (atrás apenas de \n[…]\nEm 2015, junto com o irmão Jamie Murray, Andy Murray foi campeão da Copa Davis. E com essa conquista, quebrou mais um tabu dos britânicos, pois a Grã-Bretanha não ganhava uma Davis há 79 anos (última vez havia sido em 1936). Já em 2016, teve o melhor ano da carreira, por vencer o torneio de Wimbledon, os Jogos Olímpicos no Rio de Janeiro, e por ter se tornado o número 1 do mundo, com a conquista do ATP Masters 1000 de Paris.\n[…]\nEle terminou o ano como Nº64 do mundo e foi escolhido pela BBC Sports como Personalidade do ano na Escócia.\n[…]\nPoucos dias depois da eliminação no U.S. Open, Murray quebrou tabu para os britânicos e pôs fim a mais um jejum. Pois com três vitórias (2 em simples e 1 em duplas) em três dias seguidos em Glasgow, na Escócia, ele garantiu a vaga da Grã-Bretanha na decisão da Copa Davis. E para isso acontecer ele venceu Thanasi Kokkinakis, em sets diretos, na estreia. No dia seguinte, fazendo dupla com o irmão Jamie Murray, levou a melhor numa batalha de cinco sets contra Sam Groth e Lleyton Hewitt.\n[…]\nAlguns dias depois da eliminação no U.S. Open, pouco mais de um mês após fazerem um jogaço na final da Olimpíada Rio 2016, o britânico Andy Murray e o argentino Juan Martin Del Potro voltaram a se encontrar, só que agora pelo primeiro dia da semifinal da Copa Davis, em Glasgow, na Escócia. E protagonizaram mais uma grande partida, mas, desta vez, quem se deu melhor foi o hermano, que venceu o duelo de 5h07m por 3 sets a 2, com parciais de 6/4, 5/7, 6/7 (5), 6/3 e 6/4.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Saque (tênis)",
      "descricao": "Golpe que inicia cada ponto no tênis, executado lançando a bola ao ar e golpeando-a com a raquete."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Nas regras tradicionais do tênis, o que acontece quando o saque raspa na rede e cai dentro da área correta?",
    "resposta": "O saque é repetido",
    "distratores": [
      "O sacador perde",
      "O sacador ganha",
      "Vira dupla falta"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Serve_(tennis)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Serve_(tennis)",
        "situacao": "ok",
        "texto": "A serve (or, more formally, a service) in tennis is a shot to start a point. A player will hit the ball with a racquet so it will fall into the diagonally opposite service box without being stopped by the net and faulted. Normally players begin a serve by tossing the ball into the air and hitting it (usually near the highest point of the toss). The ball can only touch the net on a return and will \n[…]\nThe service each player uses will depend on their individual abilities and what they need the most—power or consistency.\n[…]\nKick/topspin serves are often used as both first and second serves. As a first serve, a player will put more pace on the ball, while it is a consistent second serve since the spin brings it into the service box with high net clearance.\n[…]\nAce – a serve that lands in the service box and is then untouched by the opponent.\n[…]\nDouble fault – hitting a fault on the second service. The server loses the point.\n[…]\nFault – an unsuccessful serve that does not start the point because the ball does not land in the opponent's designated service box; or, the server commits a foot fault (see below). This includes if the ball hits the net cord and lands outside the service box (when landing in the service box would’ve made it a let)\n[…]\nLet – a serve is called a let when the ball hits the net cord but still lands in the service court. Such a serve is not considered a fault and the server may repeat the service attempt.\n[…]\nOn serve – both players have held each of their service games in the set or had an equal number of service breaks in the set, putting them \"back on serve\".\n[…]\nService winner – a serve that is touched by the opponent, but not returned.\n[…]\nThis may involve simply lunging to get the racket on the ball before it passes. If a controlled return of service is possible, a hard groundstroke to one side or the other of the opponent's baseline may be performed."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Servi%C3%A7o_%28t%C3%AAnis%29",
        "situacao": "ok",
        "texto": "No tênis, o serviço ou saque é o lançamento da bola para iniciar um ponto. Geralmente é feito lançando a bola no ar, e então atingindo-na com a raquete.\n[…]\nNão ultrapassa a rede;\n[…]\nUltrapassa a rede, mas, não cai no quadrante diagonal;\n[…]\nQuando um tenista usa o \"saque por cima\", ele pode variar a forma de bater na bola, dificultando, assim, a devolução do adversário. No jogo de tênis, há quatro saques comumente usados: o \"flat service\", o \"slice serve\", o \"kick serve\" e o \"saque por baixo\". Com isso, bons sacadores podem ganhar uma vantagem tática variando o tipo de saque e a colocação da bola.\n[…]\nO saque plano e o saque de fatias são usados ​​principalmente como primeiros saques, porque eles são mais propensos a produzir um ás ou forçar um erro, embora eles exijam alta precisão. O segundo saque costuma ter topspin ou chute neles, o que os torna menos propensos a cair na rede ou fora dos limites. Kick serve também fazer uma boa mudança como um primeiro saque.\n[…]\nO chamado \"saque por baixo\" acontece quando o jogador atinge a bola abaixo do nível de seu ombro. No tênis infantil, as crianças pequenas podem ser encorajadas a usar este tipo de saque em quadras de 36 pés (11 m). Embora este saque seja legal, pode ser visto como antidesportivo no tênis adulto.\n[…]\nEm 2019, em uma partida de exibição antes do Aberto da Austrália, Bernard Tomic conseguiu um ace \"diferente\" contra Nick Kyrgios. Enquanto quicava a bola, ele sacou por baixo das pernas, logo após a bola ter quicado. a jogada só valeu pois se tratava de um jogo de exibição. Isso porque o saque foi feito após a bola pingar no chão, o que é proibido pela ITF (Federação Internacional de Tênis).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Billie Jean King Cup",
      "descricao": "Principal competição de seleções do tênis feminino, chamada Fed Cup até 2020."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "A competição de seleções femininas hoje chamada Billie Jean King Cup foi criada em 1963 para comemorar os cinquenta anos de qual entidade?",
    "resposta": "Federação Internacional de Tênis",
    "distratores": [
      "Comitê Olímpico Internacional",
      "Taça Davis",
      "All England Club"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Billie_Jean_King_Cup"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Billie_Jean_King_Cup",
        "situacao": "ok",
        "texto": "The Billie Jean King Cup, abbreviated as the BJK Cup, is the premier international team competition in women's tennis, launched as the Federation Cup in 1963 to celebrate the 50th anniversary of the International Tennis Federation (ITF). The name was changed to the Fed Cup in 1995, and changed again in September 2020 in honor of former World No. 1 Billie Jean King.\n[…]\nThe Billie Jean King Cup is the world's largest annual women's international team sports competition in terms of the number of nations that compete. The current chair is Katrina Adams.\n[…]\nIn 1963, the ITF launched the Federation Cup to celebrate its 50th anniversary. Open to all nations the competition became a resounding success.\n[…]\nThe inaugural event attracted 16 countries. The competition was supported by the top players right from the start. Held at the Queen's Club, in London, the first contest was between Australia and the United States. Grand Slam champions Darlene Hard, Billie Jean King, Margaret Smith and Lesley Turner all proudly representing their country on court. The United States would emerge the champion nation in the opening year.\n[…]\nIn 1994, there were 73 nations competing, with the host nation of a Federation Cup week was now being required to build a special tennis complex, giving rise to what became known as the Federation Cup \"legacy\". The additional costs of each event could be offset with the host nations viewing their involvement as providing an opportunity to boost their national game.\n[…]\nThe Heart Award is the ITF's annual \"MVP\" award related to the Billie Jean King Cup, which \"aims to recognise players who have represented their country with distinction, shown exceptional courage on court and demonstrated outstanding commitment to the team.\" The award was inaugurated in 2009.\n[…]\nJunior Davis Cup and Junior Billie Jean King Cup\n[…]\nInternational Tennis Federation"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Copa_Billie_Jean_King",
        "situacao": "ok",
        "texto": "A Copa Billie Jean King (Billie Jean King Cup ou BJK Cup) é a principal competição de equipe no tênis feminino lançado em 1963 para comemorar o 50º aniversário da Federação Internacional de Tênis (ITF). A competição era conhecida como Federation Cup até 1994 e Fed Cup até 2020.\n[…]\nFinalmente, em 1963, a ITF lançou a Federation Cup para celebrar seu 50º aniversário. Aberto a todas as nações e não apenas para os EUA e Grã-Bretanha, a competição muito esperada se tornou um sucesso estrondoso.\n[…]\nJogado mais de uma semana em um local diferente a cada ano, o evento inaugural atraiu 16 países. A competição foi apoiada pelos melhores jogadores desde o início. Realizado no Clube da Rainha, em Londres, a primeira disputa entre a Austrália e os Estados Unidos deram o tom com campeãs de Grand Slam como Darlene Hard, Billie Jean King, Margaret Smith e Lesley Turner todos com orgulho representar seu país em quadra.\n[…]\nEm 1994, 73 nações competiram, e os anfitriões da semana da Federation Cup foi agora obrigado a construir um complexo de ténis especial, dando origem ao que ficou conhecido como o \"legado\" Federation Cup. Além dos elogios de mostrar a competição premier internacional de equipe feminina, as nações viram sua participação como uma oportunidade sem precedentes para o desenvolvimento nacional do esporte.\n[…]\nO aumento de entradas levou à criação de competições regionais de qualificação em 1992 e, posteriormente, em 1995, a Federation Cup adaptou um novo formato e encurtou seu nome para Fed Cup. Tendo visto o grande sucesso que o formato de casa e outro fora tinha alcançado na Copa Davis, o formato para a Fed Cup foi mudado em 1995 para que as mulheres, assim como os homens, poderia jogar por seu país em seu país.\n[…]\nEquipe brasileira na Copa Billie Jean King",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "WTA",
      "descricao": "Women's Tennis Association, entidade que organiza o circuito profissional feminino de tênis, fundada em 1973."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Em 1973, qual tenista americana liderou a fundação da associação que organiza o circuito profissional feminino?",
    "resposta": "Billie Jean King",
    "distratores": [
      "Chris Evert",
      "Martina Navratilova",
      "Margaret Court"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Women%27s_Tennis_Association",
      "https://en.wikipedia.org/wiki/Billie_Jean_King"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Women%27s_Tennis_Association",
        "situacao": "ok",
        "texto": "The Women's Tennis Association (WTA) is the principal organizing body of women's professional tennis. The association governs the WTA Tour, which is the worldwide professional tennis tour for women. The WTA was founded to create a better future for women's tennis. The WTA's corporate headquarters is in St. Petersburg, Florida, with its European headquarters in London and its Asia-Pacific headquart\n[…]\nThe Women's Tennis Association was founded in June 1973 by Billie Jean King, Its  origins trace back to the inaugural Virginia Slims tournament, which was arranged by Gladys Heldman, sponsored by Joe Cullman, CEO of Philip Morris, and held on 23 September 1970 at the Houston Racquet Club in Houston, Texas. Rosie Casals won this first event.\n[…]\nWhen the Women's Tennis Association was founded, Billie Jean King was one of nine players that comprised the WTA, also referred to as the Original 9, that included Julie Heldman, Valerie Ziegenfuss, Judy Dalton, Kristy Pigeon, Peaches Bartkowicz, Kerry Melville Reid, Nancy Richey, and Rosie Casals. Today, the WTA has more than 2,500 players from nearly 100 countries competing for $146 million in prize money.\n[…]\nThe WTA was founded at a meeting organized by Billie Jean King, a week before the 1973 Wimbledon Championships, as a direct response to the formation of the Association of Tennis Professionals, a year prior. This meeting was held at Gloucester Hotel in London and featured 70 other female players, where King was named the first president of the organization. In 1975, the WTA increased its financial stature by signing a television broadcast contract with CBS, the first in the WTA's history.\n[…]\nAssociation of Tennis Professionals\n[…]\nList of tennis tournaments\n[…]\nWomen's sports\n[…]\nTennis Integrity Unit\n[…]\nKing, Billie Jean; Starr, Cynthia (1988). We Have Come a Long Way : The Story of Women's Tennis. New York: McGraw-Hill. ISBN 9780070346253. OCLC 18191069."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Billie_Jean_King",
        "situacao": "ok",
        "texto": "Billie Jean King (née Moffitt; born November 22, 1943) is an American former world No. 1 tennis player. King won 39 Grand Slam titles: 12 in singles, 16 in women's doubles, and 11 in mixed doubles. She was a member of the victorious United States team in seven Federation Cups and nine Wightman Cups.\n[…]\nKing is a member of the Board of Honorary Trustees for the Sports Museum of America, which opened in 2008. The museum is the home of the Billie Jean King International Women's Sports Center, a comprehensive women's sports hall of fame and exhibit.\n[…]\nThe Fed Cup, the premier international team competition in women's tennis, was renamed the Billie Jean King Cup in September 2020 in her honor.\n[…]\nBillie Jean and Larry King were engaged in autumn of 1964 and married in Long Beach, California, on September 17, 1965. Billie Jean credited Larry with introducing her to feminism and for pushing her to pursue tennis as a career. Billie Jean later said she \"was totally in love with Larry\" when they married.\n[…]\nIn the women's sports industry, the idea of female athletes being \"unfeminine\" or lesbian was a stigma that was often looked down upon. Lesbian women athletes were already stereotyped, and Billie Jean King fitting into the \"masculine\" stereotype—while being proud of it—was considered groundbreaking for the time period. She embraced feminist ideas and played an important role in the women's movement.\n[…]\nWare, Susan (2011). Game, Set, Match: Billie Jean King and the Revolution in Women's Sports. University of North Carolina Press. Combines biography and history in a study of the tennis player, liberal feminism, and Title IX.\n[…]\nBillie Jean King at the Women's Tennis Association\n[…]\nBillie Jean King at the International Tennis Hall of Fame\n[…]\nBillie Jean King at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Associa%C3%A7%C3%A3o_de_T%C3%AAnis_Feminino",
        "situacao": "ok",
        "texto": "A Associação de Tênis Feminino (português brasileiro) ou Associação de Ténis Feminino (português europeu) (em inglês: Women's Tennis Association; sigla: WTA) é o órgão regulador do principal circuito de tênis profissional feminino – o circuito WTA – e do circuito de nível intermediário, o WTA 125. Sua sede principal se localiza em São Petersburgo, no estado norte-americano da Flórida.\n[…]\nA era aberta do tênis, na qual jogadores profissionais podiam competir ao lado de amadores, começou em 1968. Billie Jean King era uma tenista de alto escalão no final dos anos 1960, que ganhou vários títulos e aparecia com frequência na imprensa. O primeiro torneio aberto foi o British Hard Court Championships, em Bournemouth. Mais tarde, naquele ano, no primeiro Torneio de Wimbledon da nova fase, a diferença da premiação era de 2,5 para 1 a favor dos homens.\n[…]\nExistiam dois circuitos profissionais de tênis no início da era aberta: o World Championship Tennis (WCT), exclusivo para homens, e a National Tennis League (NTL). Ann Jones, Rosie Casals, Françoise Dürr e Billie Jean King se juntaram a NTL. King recebia US$ 40.000 por ano, Jones, US$ 25.000, e Casals e Dürr, US$ 20.000 cada. O grupo disputou torneios consagrados, como o US Open e o Torneio de Wimbledon. Mas também organizou os seus próprios, jogando no sul da França por dois meses.\n[…]\nA WTA foi fundada em uma reunião organizada por Billie Jean King, uma semana antes do Torneio de Wimbledon de 1973. Esse encontro foi realizado no Hotel Gloucester, em Londres. Em 1975, a Associação aumentou o  porte financeiro ao assinar um contrato de transmissão televisiva com a CBS, o primeiro de sua história. Os progressos continuaram: em 1976, a Colgate assumiu o patrocínio do circuito, de abril a novembro.\n[…]\nEm 5 de outubro, Steve Simon, diretor do torneio de tênis de Indian Wells, foi anunciado para suceder Stacey como diretor executivo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  }
]

---

# MANIFESTO

# Manifesto de Perguntas — Mestre2

> **Versão preliminar 0.93 — 2026-10-30**
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
