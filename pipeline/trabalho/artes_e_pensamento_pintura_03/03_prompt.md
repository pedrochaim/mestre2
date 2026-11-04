Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Pintura** (tema **Artes e Pensamento**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Mona Lisa",
      "descricao": "Retrato pintado por Leonardo da Vinci no início do século dezesseis."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "A Mona Lisa, de Leonardo da Vinci, não foi pintada sobre tela. Sobre que suporte ela foi pintada?",
    "resposta": "Painel de madeira de choupo",
    "distratores": [
      "Tela de linho",
      "Placa de cobre",
      "Parede de gesso"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Mona_Lisa"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mona_Lisa",
        "situacao": "ok",
        "texto": "The Mona Lisa is a half-length portrait painting by the Italian artist Leonardo da Vinci. Considered an archetypal masterpiece of the Italian Renaissance, it has been described as \"the best known, the most visited, the most written about, the most sung about, [and] the most parodied work of art in the world\". The painting's novel qualities include the subject's enigmatic expression, the monumental\n[…]\nIn French, the title La Joconde has the same meaning. Vasari's account of the Mona Lisa comes from his biography of Leonardo published in 1550, 31 years after the artist's death. It has long been the best-known source of information on the provenance of the work and identity of the sitter. Leonardo's assistant Salaì, at his death in 1524, owned a portrait which in his personal papers was named la Gioconda, a painting bequeathed to him by Leonardo.\n[…]\nThe catalogue raisonné Leonardo da Vinci (2019) confirms that the painting probably depicts Lisa del Giocondo, with Isabella d'Este being the only plausible alternative. Scholars have developed several alternative views, arguing that Lisa del Giocondo was the subject of a different portrait, and identifying at least four other paintings referred to by Vasari as the Mona Lisa.\n[…]\nOf Leonardo da Vinci's works, the Mona Lisa is the only portrait whose authenticity has never been seriously questioned, and one of four works‍—‍‌the others being Saint Jerome in the Wilderness, Adoration of the Magi and The Last Supper⁠ —‍‌whose attribution has avoided controversy. He had begun working on a portrait of Lisa del Giocondo, the sitter for the Mona Lisa, by October 1503. It is believed by some that the Mona Lisa was begun in 1503 or 1504 in Florence.\n[…]\nMale Mona Lisa theories\n[…]\nTwo-Mona Lisa theory\n[…]\nLeonardo's Mona Lisa Archived 4 November 2014 at the Wayback Machine, Smarthistory (video)\n[…]\nSecrets of the Mona Lisa, Discovery Channel documentary on YouTube"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mona_Lisa",
        "situacao": "ok",
        "texto": "Mona Lisa (\"Senhora Lisa\") é um retrato de meio-corpo do artista italiano Leonardo da Vinci. Considerada uma obra-prima arquetípica da Renascença italiana, foi descrita como \"a obra de arte mais conhecida, mais visitada, sobre a qual mais se escreveu, mais se cantou [e] que mais foi parodiada no mundo\". Entre as características inovadoras da pintura estão a expressão enigmática da modelo, a monume\n[…]\nTradicionalmente, considera-se que a pintura represente a nobre italiana Lisa del Giocondo. Foi pintada a óleo sobre um painel de álamo-branco. Leonardo nunca entregou a pintura à família Giocondo. Acreditava-se que ela tivesse sido pintada entre 1503 e 1506; no entanto, Leonardo pode ter continuado a trabalhar nela até 1517. O rei Francisco I de França adquiriu a Mona Lisa após a morte de Leonardo, em 1519, e ela se tornou propriedade da República Francesa.\n[…]\nEssa moldura, utilizada além da moldura decorativa, exerce pressão sobre o painel para impedir que ele continue se deformando. Em 1970, depois de se descobrir que a madeira de faia estava infestada por insetos, as travessas foram substituídas por outras de bordo. Em 2004–2005, uma equipe de conservação e pesquisa substituiu as travessas de bordo por outras de sicômoro e acrescentou uma travessa metálica para a medição científica da deformação do painel.[carece de fontes]?\n[…]\nNo quingentésimo aniversário da morte do mestre, o Louvre realizou, de 24 de outubro de 2019 a 24 de fevereiro de 2020, a maior exposição já dedicada exclusivamente às obras de Leonardo. A Mona Lisa não foi incluída, devido à enorme procura dos visitantes do museu; a pintura permaneceu exposta em sua galeria. Em 2024, decidiu-se instalar o painel em uma sala separada.\n[…]\nLeonardo's Mona Lisa Arquivado em 2014-11-04 no Wayback Machine, Smarthistory (vídeo em inglês)\n[…]\nSecrets of the Mona Lisa, Documentário do Discovery Channel no YouTube (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Mona Lisa",
      "descricao": "Retrato pintado por Leonardo da Vinci no início do século dezesseis."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "No título Mona Lisa, a palavra mona é a forma abreviada de que tratamento respeitoso em italiano?",
    "resposta": "Madonna (minha senhora)",
    "distratores": [
      "Monsenhor",
      "Menina",
      "Mamãe"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Mona_Lisa"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mona_Lisa",
        "situacao": "ok",
        "texto": "The Mona Lisa is a half-length portrait painting by the Italian artist Leonardo da Vinci. Considered an archetypal masterpiece of the Italian Renaissance, it has been described as \"the best known, the most visited, the most written about, the most sung about, [and] the most parodied work of art in the world\". The painting's novel qualities include the subject's enigmatic expression, the monumental\n[…]\nThe painting has been traditionally considered to depict the Italian noblewoman Lisa del Giocondo. It is painted in oil on a white poplar panel. Leonardo never gave the painting to the Giocondo family. It was believed to have been painted between 1503 and 1506; however, Leonardo may have continued working on it as late as 1517. King Francis I of France acquired the Mona Lisa after Leonardo's death in 1519, and it later became the property of the French Republic.\n[…]\nThe title of the painting, which is known in English as Mona Lisa, is based on the presumption that it depicts Lisa del Giocondo, although her likeness is uncertain. Renaissance art historian Giorgio Vasari wrote that \"Leonardo undertook to paint, for Francesco del Giocondo, the portrait of Mona Lisa, his wife.\" Monna in Italian is a polite form of address originating as ma donna—similar to Ma'am, Madam, or my lady in English. This became madonna, and its contraction monna.\n[…]\nIn French, the title La Joconde has the same meaning. Vasari's account of the Mona Lisa comes from his biography of Leonardo published in 1550, 31 years after the artist's death. It has long been the best-known source of information on the provenance of the work and identity of the sitter. Leonardo's assistant Salaì, at his death in 1524, owned a portrait which in his personal papers was named la Gioconda, a painting bequeathed to him by Leonardo.\n[…]\nTwo-Mona Lisa theory\n[…]\nSecrets of the Mona Lisa, Discovery Channel documentary on YouTube"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mona_Lisa",
        "situacao": "ok",
        "texto": "Mona Lisa (\"Senhora Lisa\") é um retrato de meio-corpo do artista italiano Leonardo da Vinci. Considerada uma obra-prima arquetípica da Renascença italiana, foi descrita como \"a obra de arte mais conhecida, mais visitada, sobre a qual mais se escreveu, mais se cantou [e] que mais foi parodiada no mundo\". Entre as características inovadoras da pintura estão a expressão enigmática da modelo, a monume\n[…]\nO título da pintura, conhecida em inglês como Mona Lisa, baseia-se na suposição de que ela retrata Lisa del Giocondo, embora a semelhança da figura com ela seja incerta. O historiador da arte do Renascimento, Giorgio Vasari, escreveu que \"Leonardo encarregou-se de pintar, para Francesco del Giocondo, o retrato de Mona Lisa, sua esposa\". Em italiano, monna é uma forma de tratamento cortês originada de ma donna — semelhante a senhora, madame ou minha senhora.\n[…]\nEssa expressão tornou-se madonna e, em sua forma contraída, monna. Em italiano, o título da pintura é grafado Monna Lisa (mona é uma vulgaridade em italiano), forma rara em inglês, idioma no qual tradicionalmente se escreve Mona.\n[…]\nEm francês, o título La Joconde tem o mesmo significado. O relato de Vasari sobre a Mona Lisa provém de sua biografia de Leonardo, publicada em 1550, 31 anos após a morte do artista. Durante muito tempo, ela foi a fonte mais conhecida de informações sobre a proveniência da obra e a identidade da modelo. Ao morrer, em 1524, o assistente de Leonardo, Salaì, possuía um retrato denominado la Gioconda em seus documentos pessoais, uma pintura que Leonardo lhe havia legado.\n[…]\nA canção \"Mona Lisa\", de 1950, gravada por Nat King Cole.\n[…]\nA espiral áurea aparece na Figura 2. Está posicionada de modo que começa no pulso direito da Mona Lisa e toca o topo de sua cabeça. A ponta do nariz forma então o ponto para o qual a espiral converge.\n[…]\nSecrets of the Mona Lisa, Documentário do Discovery Channel no YouTube (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "A Noite Estrelada",
      "descricao": "Quadro de Vincent van Gogh, de 1889, com um céu noturno em espirais."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Em primeiro plano n'A Noite Estrelada, de Van Gogh, uma árvore escura sobe como uma chama em direção ao céu. Que árvore é essa?",
    "resposta": "Cipreste",
    "distratores": [
      "Oliveira",
      "Pinheiro",
      "Álamo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Starry_Night"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Starry_Night",
        "situacao": "ok",
        "texto": "The Starry Night is an oil-on-canvas painting by the Dutch Post-Impressionist painter Vincent van Gogh. Painted in June 1889, it depicts the view from the east-facing window of his asylum room at Saint-Rémy-de-Provence, just before sunrise, with the addition of an imaginary village. It has been in the permanent collection of the Museum of Modern Art in New York City since 1941, acquired through th\n[…]\nDespite the large number of letters Van Gogh wrote, he said very little about The Starry Night.\n[…]\nWhile stopping short of calling the painting a hallucinatory vision, Naifeh and Smith discuss The Starry Night in the context of Van Gogh's mental illness, which they identify as temporal lobe epilepsy, or latent epilepsy.\n[…]\nNaifeh and Smith theorize that the seeds of this breakdown were present when Van Gogh painted The Starry Night, that in giving himself over to his imagination \"his defenses had been breached.\" On that day in mid-June, in a \"state of heightened reality,\" with all the other elements of the painting in place, Van Gogh threw himself into the painting of the stars, producing, they write, \"a night sky unlike any other the world had ever seen with ordinary eyes.\"\n[…]\nAfter having initially held it back, Van Gogh sent The Starry Night to Theo in Paris on 28 September 1889, along with nine or ten other paintings. Theo died less than six months after Vincent, in January 1891. Theo's widow Jo became the caretaker of Van Gogh's legacy. In Paris in 1900 she sold the painting to poet Julien Leclercq. In 1901 Leclercq sold it to Gauguin's old friend Émile Schuffenecker.\n[…]\nList of works by Vincent van Gogh\n[…]\nGrossman, About Lisa (22 October 2026). \"Was van Gogh's 'The Starry Night' a flight of fancy or a real sky?\". Science News. Retrieved 29 October 2026.\n[…]\nThe Starry Night at the Museum of Modern Art\n[…]\nThe Starry Night at Who is van Gogh\n[…]\nVincent van Gogh, The Starry Night, ColourLex"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/A_Noite_Estrelada",
        "situacao": "ok",
        "texto": "A Noite Estrelada é uma pintura de Vincent van Gogh de 1889. A obra retrata a vista da janela de um quarto do hospício de Saint-Rémy-de-Provence, pouco antes do nascer do sol, com a adição de um vilarejo idealizado pelo artista. A tela faz parte da coleção permanente do Museu de Arte Moderna de Nova Iorque desde 1941. É considerada uma das mais famosas pinturas de Van Gogh e uma das mais icônicas \n[…]\nO elemento pictórico em comum a todas essas pinturas e desenhos é a linha diagonal que representa as baixas colinas dos Alpilles. Van Gogh aproximou o campo de enquadramento em seis dessas obras, mais notavelmente em Campo de Trigo Com Ciprestes (F717) e em A Noite Estrelada, trazendo as árvores para mais perto na composição.\n[…]\nLoevgren afirma que os elementos pictóricos de A Noite Estrelada \"são visualizados em termos puramente simbólicos\", lembrando que \"o cipreste é a árvore da morte para culturas de países mediterrânicos\".\n[…]\nOs ciprestes eram desde muito tempo associados à morte na cultura europeia. Não se sabe se o artista atribuía esse simbolismo às árvores dos seus trabalhos ou particularmente ao cipreste de A Noite Estrelada. Numa carta de abril de 1888 para Bernard, Van Gogh citou uns \"ciprestes funerários\", embora isso possa ter sido uma forma de exaltar poeticamente a figura da árvore.\n[…]\nLoevgren lembra que \"o cipreste é a árvore da morte nos países mediterrânicos\".\n[…]\nOutro historiador, Ronald Pickvance afirma que, com \"sua colagem arbitrária de motivos independentes\", A Noite Estrelada \"é notoriamente classificada como uma 'abstração'\". Pickvance alega que o cipreste não era visível do lado leste do quarto de Van Gogh, incluindo esse elemento pictórico no grupo das figuras pintadas de imaginação ou memória, juntamente com o vilarejo e os redemoinhos no céu. Boime defende que a árvore era sim visível a leste, assim como Jirat-Wasiutyński.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "O Grito",
      "descricao": "Obra expressionista de Edvard Munch, de 1893."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Na versão de 1893 d'O Grito há uma frase a lápis, escrita pelo próprio Munch, dizendo que o quadro só poderia ter sido pintado por quem?",
    "resposta": "Por um louco",
    "distratores": [
      "Por um gênio",
      "Por um bêbado",
      "Por um morto"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Scream"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Scream",
        "situacao": "ok",
        "texto": "The Scream is an image first created by the Norwegian artist Edvard Munch in 1893, and later repeated by him in different versions. The agonized face in the painting has become one of the most iconic images in art, seen as representing a profound experience of existential dread related to the human condition. Munch's work, including The Scream, had a formative influence on the Expressionist moveme\n[…]\nIn 1983–1984, pop artist Andy Warhol made a series of silk screen prints copying works by Munch, including The Scream. His stated intention was to desacralize the painting by making it into a mass-reproducible object. Munch had already begun that process, however, by making a lithograph of the work for reproduction. Erró's ironic and irreverent treatment of Munch's masterpiece in his acrylic paintings The Second Scream (1967) and Ding Dong (1979) is considered a characteristic of post-modern art.\n[…]\nIn 2013, The Scream was one of four paintings that the Norwegian postal service chose for a series of stamps marking the 150th anniversary of Edvard Munch's birth. In 2018 Norwegian comedy duo Ylvis made a musical based on the painting's theft starring Pål Enger who stole it in 1994.\n[…]\nDespite popular opinion to the contrary, the Ghostface mask worn by the primary antagonists of the Scream series of horror was not inspired by the Munch painting. The mask, discovered by Marianne Maddalena and Wes Craven, was created in 1991 by Brigitte Sleiertin of the Fun World novelty company for the Halloween market. She based her concept drawings on old cartoons, such as those created by  Max Fleischer.\n[…]\nHeller, Reinhold (1973). Edvard Munch: The Scream. London: Allen Lane. ISBN 978-07-139-0276-1.\n[…]\nTemkin, Anne (2012). The Scream: Edvard Munch. Museum of Modern Art. ISBN 978-0870-7087-63.\n[…]\nMunch and The Scream – Discussion in the In Our Time series on the BBC Radio 4, Mar 2010"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/O_Grito",
        "situacao": "ok",
        "texto": "O Grito (em norueguês:  Skrik) é uma série de quatro pinturas do norueguês Edvard Munch, 1893. A obra representa uma figura andrógina num momento de profunda angústia e desespero. O plano de fundo é a doca do fiorde de Oslo (em Oslo) ao pôr do sol. O Grito é considerado uma das obras mais importantes do movimento expressionista e adquiriu um estatuto de ícone cultural, a par da Mona Lisa de Leonar\n[…]\nO pintor baseou seu estilo fortemente expressivo em Toulouse-Lautrec, Van Gogh e Gauguin. O Grito foi pintado em Berlim, onde Munch se estabeleceu depois de a controvérsia provocada por seus quadros ter levado à Secessão de Berlim, mas ainda se percebe a influência dos três pintores. O quadro é uma imagem do medo irracional que sentimos durante um pesadelo. Munch visualiza essa experiência sem o auxílio de aparições assustadoras, e é por essa razão que sua obra é mais convincente.\n[…]\nMunch acabou por pintar quatro versões de O Grito, para substituir as cópias que ia vendendo. O original de 1893 (91x73.5 cm), numa técnica de óleo e pastel sobre cartão, encontra-se exposto na Galeria Nacional de Oslo. A segunda (83,5x66 cm), em têmpera sobre cartão, foi exibida no Museu Munch de Oslo até ao seu roubo em 2004. A terceira pertence ao mesmo museu e a quarta era propriedade de um particular, até ser arrematada em um leilão da Sotheby's, em maio de 2012.\n[…]\nA versão do Museu Nacional da Noruega tem uma inscrição a lápis, em letras pequenas, no canto superior esquerdo, dizendo \"Kan kun være malet af en gal Mand!\" (\"só poderia ter sido pintado por um louco\"). Só pode ser visto com um exame mais atento da pintura. Presumiu-se que era um comentário de um crítico ou visitante de uma exposição. Foi notado pela primeira vez quando a pintura foi exibida em Copenhague em 1904, onze anos depois de esta versão ter sido pintada.\n[…]\nLista de pinturas de Edvard Munch\n[…]\nFotografia de \"O Grito\"",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "O Grito",
      "descricao": "Obra expressionista de Edvard Munch, de 1893."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Munch contou que O Grito nasceu de algo que ele viu no céu durante um passeio com dois amigos, perto de um fiorde. O que foi?",
    "resposta": "O pôr do sol vermelho-sangue",
    "distratores": [
      "Uma aurora boreal",
      "Um eclipse solar",
      "Uma tempestade de raios"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Scream"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Scream",
        "situacao": "ok",
        "texto": "The Scream is an image first created by the Norwegian artist Edvard Munch in 1893, and later repeated by him in different versions. The agonized face in the painting has become one of the most iconic images in art, seen as representing a profound experience of existential dread related to the human condition. Munch's work, including The Scream, had a formative influence on the Expressionist moveme\n[…]\nIn 1983–1984, pop artist Andy Warhol made a series of silk screen prints copying works by Munch, including The Scream. His stated intention was to desacralize the painting by making it into a mass-reproducible object. Munch had already begun that process, however, by making a lithograph of the work for reproduction. Erró's ironic and irreverent treatment of Munch's masterpiece in his acrylic paintings The Second Scream (1967) and Ding Dong (1979) is considered a characteristic of post-modern art.\n[…]\nIn 2013, The Scream was one of four paintings that the Norwegian postal service chose for a series of stamps marking the 150th anniversary of Edvard Munch's birth. In 2018 Norwegian comedy duo Ylvis made a musical based on the painting's theft starring Pål Enger who stole it in 1994.\n[…]\nDespite popular opinion to the contrary, the Ghostface mask worn by the primary antagonists of the Scream series of horror was not inspired by the Munch painting. The mask, discovered by Marianne Maddalena and Wes Craven, was created in 1991 by Brigitte Sleiertin of the Fun World novelty company for the Halloween market. She based her concept drawings on old cartoons, such as those created by  Max Fleischer.\n[…]\nHeller, Reinhold (1973). Edvard Munch: The Scream. London: Allen Lane. ISBN 978-07-139-0276-1.\n[…]\nTemkin, Anne (2012). The Scream: Edvard Munch. Museum of Modern Art. ISBN 978-0870-7087-63.\n[…]\nMunch and The Scream – Discussion in the In Our Time series on the BBC Radio 4, Mar 2010"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/O_Grito",
        "situacao": "ok",
        "texto": "O Grito (em norueguês:  Skrik) é uma série de quatro pinturas do norueguês Edvard Munch, 1893. A obra representa uma figura andrógina num momento de profunda angústia e desespero. O plano de fundo é a doca do fiorde de Oslo (em Oslo) ao pôr do sol. O Grito é considerado uma das obras mais importantes do movimento expressionista e adquiriu um estatuto de ícone cultural, a par da Mona Lisa de Leonar\n[…]\n\"Uma noite, eu estava caminhando por um trajeto, a cidade estava de um lado e o fiorde abaixo. Eu me sentia cansado e doente. Parei e olhei para o fiorde - o sol estava se pondo e as nuvens ficando vermelhas como o sangue. Senti um grito passando pela natureza; pareceu-me ter ouvido o grito. Eu pintei este quadro, pintei as nuvens como sangue real. A cor gritou. Isso se tornou O Grito.\"\n[…]\n\"Eu estava caminhando pela estrada com dois amigos – o sol estava se pondo – de repente, o céu ficou vermelho-sangue – fiz uma pausa, me sentindo exausto, e me apoiei na cerca – havia sangue e línguas de fogo acima do fiorde azul-escuro e da cidade – meus amigos caminharam, e eu fiquei ali tremendo de ansiedade – e senti um grito infinito passando pela natureza.\n[…]\nAlguns acreditam que os céus vermelho-sangue da obra são as cores causadas pelo vulcão na atmosfera; O Desespero e A Ansiedade também possuem os mesmos tons no ambiente. Esta explicação, contudo, foi contestada por estudiosos, que observam que Munch era um pintor expressionista e não estava exatamente interessado em representações literais do que via, ao contrário, por exemplo, de um Gustave Courbet, grande defensor do realismo.\n[…]\nOutra explicação para os céus vermelhos é que eles se deveriam ao aparecimento de nuvens estratosféricas polares, que ocorrem na latitude da Noruega e que, às vezes, se parecem notavelmente com o céu pintado em O Grito.\n[…]\nLista de pinturas de Edvard Munch\n[…]\nFotografia de \"O Grito\"",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "A Última Ceia",
      "descricao": "Pintura mural de Leonardo da Vinci em Milão."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Em 1652, abriram uma porta na parede onde está A Última Ceia, de Leonardo. Que parte da figura de Jesus se perdeu com isso?",
    "resposta": "Os pés",
    "distratores": [
      "As mãos",
      "A cabeça",
      "O ombro esquerdo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Last_Supper_(Leonardo)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Last_Supper_(Leonardo)",
        "situacao": "ok",
        "texto": "The Last Supper (Italian: Il Cenacolo [il tʃeˈnaːkolo] or L'Ultima Cena [ˈlultima ˈtʃeːna]) is a mural painting by the Italian High Renaissance artist Leonardo da Vinci, dated to c. 1495–1498, housed in the refectory of the Convent of Santa Maria delle Grazie in Milan, Italy. The painting represents the scene of the Last Supper of Jesus with the Twelve Apostles, as it is told in the Gospel of John\n[…]\nThe opposite wall of the refectory is covered by the Crucifixion fresco by Giovanni Donato da Montorfano, to which Leonardo added figures of the Sforza family in tempera; these figures have deteriorated in much the same way as has The Last Supper.\n[…]\nThe Last Supper portrays the reaction given by each apostle when Jesus said one of them would betray him. All twelve apostles have different reactions to the news, with various degrees of anger and shock. The apostles were identified by their names, using an unsigned, mid-sixteenth-century fresco copy of Leonardo's Cenacolo. Before this, only Judas, Peter, John and Jesus had been positively identified. From left to right, according to the apostles' heads:\n[…]\nJesus\n[…]\nIn common with other depictions of the Last Supper from this period, Leonardo seats the diners on one side of the table, so that none of them has his back to the viewer. The tablecloth is white with blue stripes, which are colours commonly associated with the Jewish people. This is the painting's only overt reference to the ethnicity of Jesus and his disciples.\n[…]\nDetailed review of Steinberg's 'Incessant Last Supper' at 3 Pipe Problem\n[…]\nHeydenreich, Ludwig H. (1974). Leonardo: The Last Supper. New York: The Viking Press, Inc.\n[…]\nLeonardo's Last Supper and the three layers\n[…]\nLeonardo da Vinci: anatomical drawings from the Royal Library, Windsor Castle, exhibition catalog fully online as PDF from The Metropolitan Museum of Art, which contains material on The Last Supper (see index)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/A_%C3%9Altima_Ceia_%28Leonardo_da_Vinci%29",
        "situacao": "ok",
        "texto": "A Última Ceia (em italiano:  L'Ultima Cena e também Il Cenacolo) é uma pintura mural, muitas vezes definida incorretamente como afresco, obtida com uma técnica mista \"seca\" sobre gesso de Leonardo da Vinci para a igreja de Santa Maria delle Grazie em Milão, Itália. O trabalho presume-se que tenha sido iniciado por volta de 1495-96 e foi encomendado como parte de um plano de reformas na igreja e no\n[…]\nRepresenta o episódio bíblico da Última Ceia de Jesus com os Apóstolos antes de ser preso e crucificado. É um dos bens culturais mais conhecidos e estimados do mundo.\n[…]\nO trabalho mantém-se no convento que o sucessor de Ludovico Sforza destinou ao local de sepultura dos seus familiares. O tema da Última Ceia era tradicional em refeitórios monásticos, mas a interpretação de Leonardo deu um maior realismo e profundidade à cena representada e ao lugar.\n[…]\nLeonardo da Vinci passou grande parte destes três anos dando atenção integral a esta pintura o que era facto raro para um pintor versátil e do seu nível.\n[…]\nLeonardo pintou a Última Ceia com uma técnica definida como “seca” com pigmentos espalhados sobre uma camada preparatória branca, usada para nivelar e alisar a parede e não diretamente sobre o gesso úmido. As cores, portanto, não são absorvidas pelo gesso, mas sim sobrepostas à parede: isto torna a pintura muito mais vulnerável e frágil do que o afresco. Da Vinci testou uma nova técnica à solução das tintas com predominância da têmpera, com adição de cera de abelha.\n[…]\nÉ possível fazer a  comparação entre a A Última Ceia, de Leonardo, com outras obras renascentistas imediatamente anteriores, para observar as inovações que o artista introduz no tema. Em ambas se verifica a postura tradicional de Judas Iscariotes de costas e separado do resto.\n[…]\nLeonardo da Vinci\n[…]\n«A Última Ceia» (em inglês). Versão digital em alta resolução da pintura.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "A Última Ceia",
      "descricao": "Pintura mural de Leonardo da Vinci em Milão."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "A Última Ceia, de Leonardo da Vinci, ocupa a parede de que cômodo do convento de Santa Maria delle Grazie, em Milão?",
    "resposta": "O refeitório",
    "distratores": [
      "A capela",
      "A biblioteca",
      "A sacristia"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Last_Supper_(Leonardo)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Last_Supper_(Leonardo)",
        "situacao": "ok",
        "texto": "The Last Supper (Italian: Il Cenacolo [il tʃeˈnaːkolo] or L'Ultima Cena [ˈlultima ˈtʃeːna]) is a mural painting by the Italian High Renaissance artist Leonardo da Vinci, dated to c. 1495–1498, housed in the refectory of the Convent of Santa Maria delle Grazie in Milan, Italy. The painting represents the scene of the Last Supper of Jesus with the Twelve Apostles, as it is told in the Gospel of John\n[…]\nDue to the methods used, a variety of environmental factors, and intentional damage, little of the original painting remains today despite numerous restoration attempts, the last being completed in 1999. The Last Supper is Leonardo's largest work, aside from the Sala delle Asse.\n[…]\nThe Last Supper measures 460 cm × 880 cm (15 ft 1 in × 28 ft 10 in) and covers an end wall of the dining hall at the monastery of Santa Maria delle Grazie in Milan, Italy. The theme was a traditional one for refectories, although the room was not a refectory at the time that Leonardo painted it. The main church building was still under construction while Leonardo was composing the painting. Leonardo's patron, Ludovico Sforza, planned that the church should be remodeled as a family mausoleum.\n[…]\nThe Last Supper portrays the reaction given by each apostle when Jesus said one of them would betray him. All twelve apostles have different reactions to the news, with various degrees of anger and shock. The apostles were identified by their names, using an unsigned, mid-sixteenth-century fresco copy of Leonardo's Cenacolo. Before this, only Judas, Peter, John and Jesus had been positively identified. From left to right, according to the apostles' heads:\n[…]\nLeonardo's Last Supper and the three layers\n[…]\nLeonardo da Vinci: anatomical drawings from the Royal Library, Windsor Castle, exhibition catalog fully online as PDF from The Metropolitan Museum of Art, which contains material on The Last Supper (see index)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/A_%C3%9Altima_Ceia_%28Leonardo_da_Vinci%29",
        "situacao": "ok",
        "texto": "A Última Ceia (em italiano:  L'Ultima Cena e também Il Cenacolo) é uma pintura mural, muitas vezes definida incorretamente como afresco, obtida com uma técnica mista \"seca\" sobre gesso de Leonardo da Vinci para a igreja de Santa Maria delle Grazie em Milão, Itália. O trabalho presume-se que tenha sido iniciado por volta de 1495-96 e foi encomendado como parte de um plano de reformas na igreja e no\n[…]\nRepresenta o episódio bíblico da Última Ceia de Jesus com os Apóstolos antes de ser preso e crucificado. É um dos bens culturais mais conhecidos e estimados do mundo.\n[…]\nO trabalho mantém-se no convento que o sucessor de Ludovico Sforza destinou ao local de sepultura dos seus familiares. O tema da Última Ceia era tradicional em refeitórios monásticos, mas a interpretação de Leonardo deu um maior realismo e profundidade à cena representada e ao lugar.\n[…]\nLeonardo da Vinci passou grande parte destes três anos dando atenção integral a esta pintura o que era facto raro para um pintor versátil e do seu nível.\n[…]\nLeonardo pintou a Última Ceia com uma técnica definida como “seca” com pigmentos espalhados sobre uma camada preparatória branca, usada para nivelar e alisar a parede e não diretamente sobre o gesso úmido. As cores, portanto, não são absorvidas pelo gesso, mas sim sobrepostas à parede: isto torna a pintura muito mais vulnerável e frágil do que o afresco. Da Vinci testou uma nova técnica à solução das tintas com predominância da têmpera, com adição de cera de abelha.\n[…]\nÉ possível fazer a  comparação entre a A Última Ceia, de Leonardo, com outras obras renascentistas imediatamente anteriores, para observar as inovações que o artista introduz no tema. Em ambas se verifica a postura tradicional de Judas Iscariotes de costas e separado do resto.\n[…]\nLeonardo da Vinci\n[…]\n«A Última Ceia» (em inglês). Versão digital em alta resolução da pintura.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "A Ronda Noturna",
      "descricao": "Quadro de Rembrandt no Rijksmuseum."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Na Ronda Noturna, de Rembrandt, uma menina iluminada leva presa à cintura uma ave morta, emblema da milícia retratada. Que ave é essa?",
    "resposta": "Uma galinha",
    "distratores": [
      "Um pato",
      "Uma pomba",
      "Um faisão"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Night_Watch"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Night_Watch",
        "situacao": "ok",
        "texto": "Militia Company of District II under the Command of Captain Frans Banninck Cocq, also known as The Shooting Company of Frans Banning Cocq and Willem van Ruytenburch, but commonly referred to as The Night Watch (Dutch: De Nachtwacht), is a 1642 painting by Rembrandt van Rijn. It is in the collection of the Amsterdam Museum but is prominently displayed in the Rijksmuseum as the best-known painting i\n[…]\nThe Night Watch is parodied on the British cover of Terry Pratchett's 2002 book by the same name. The cover illustrator, Paul Kidby, pays tribute to his predecessor Josh Kirby by placing him in the picture, in the position where Rembrandt is said to have painted himself. A copy of the original painting appears on the back cover of the book.\n[…]\nHis 2008 film Rembrandt's J'Accuse is a sequel or follow-on, and covers the same idea, using extremely detailed analysis of the compositional elements in the painting; in this Greenaway describes The Night Watch as (currently) the fourth most famous painting in the Western world, after the Mona Lisa, The Last Supper and the ceiling of the Sistine Chapel.\n[…]\nIn 2006. The Night Watch inspired the literary work A Ronda da Noite by the famous Portuguese writer Agustina Bessa Luís.\n[…]\nRembrandtplein business association was unable to reach an agreement with the artists (Mikhail Dronov and Alexander Taratynov) regarding either the rental or purchase of the Night Watch sculptures.\n[…]\nIn 2007, Austrian artist Matthias Laurenz Gräff, a distant descendant of Banninck Cocq and the De Graeff family, used Rembrandt's Night Watch painting of Frans Banninck Cocq in his painting \"Ahnenfolge\" (Ancestral Succession/Ancestry) as part of his diploma series and thesis \"Weltaußenschau-Weltinnenschau\".\n[…]\nThe Night Watch Analysis\n[…]\nRembrandt and the Night Watch\n[…]\nPutting Names to the Famous Faces in Rembrandt's Night Watch\n[…]\nGigapixel photograph of The Night Watch Multimode Image Viewer"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/A_Ronda_Noturna",
        "situacao": "ok",
        "texto": "A Ronda Noturna ou A Ronda da Noite (em neerlandês:  De Nachtwacht)  é uma pintura a óleo sobre tela do pintor neerlandês Rembrandt, pintada entre 1639 e 1642. A pintura mede 363 cm de altura e 437 cm de largura e mostra a Guarda Cívica de Amsterdã sob comando do capitão Frans Banning Cocq. Geralmente considerada como a magnum opus de Rembrandt, A Ronda Noturna é uma das pinturas mais conhecidas d\n[…]\nEm 1642, quando Rembrandt finalizou A Ronda Noturna, a guerra contra o Reino da Espanha ainda não havia chegado ao fim. Com o firmamento da Paz de Münster em 1646, as companhias de milícias perderam sua função original de defender a cidade e tornaram-se sociedades honoríficas.\n[…]\nVeste um traje amarelo-limão e carrega na cintura uma galinha morta branca, pendurada pelos pés. Este era o emblema da companhia, que Rembrandt representou desta maneira singular, em substituição do habitual brasão deste tipo de retratos coletivos.\n[…]\nA Ronda Noturna é uma dos quadros mais representativos da obra pictórica de Rembrandt, pelas novidades compositivas e técnicas que utilizou. É a contribuição do gênio holandês à pintura barroca. Não é o único retrato de grupo que Rembrandt realizou e, embora relevantes, o pintor preferiu os retratos individuais e de pequenas dimensões (entre eles os seus autorretratos).\n[…]\nEm 2007, o artista austríaco Matthias Laurenz Gräff, um descendente distante da Banninck Cocq e família De Graeff, usou a pintura Night Watch de Frans Banninck Cocq de Rembrandt em sua pintura \"Ahnenfolge\" (Sucessão/Ancestral Ancestral) como parte de sua série de diplomas e tese \" Weltaußenschau-Weltinnenschau\".\n[…]\nSCHWARTZ, Gary; A ronda noturna, Amsterdã: Rijksmuseum Dossiers, 2002.\n[…]\nV.V.A.A.; Entender el arte: Rembrandt, Barcelona: Edic. Orbis-Fabris, 1989.\n[…]\n«A Ronda Noturna no Rijksmuseum, Amsterdã»\n[…]\n«A Ronda Noturna em 3D»\n[…]\n«A Ronda Noturna no 400.º aniversário de Rembrandt»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "A Criação de Adão",
      "descricao": "Afresco de Michelangelo no teto da Capela Sistina."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Em 1990, um médico americano observou que o manto que envolve Deus e os anjos na Criação de Adão tem a forma de que órgão humano?",
    "resposta": "O cérebro",
    "distratores": [
      "O coração",
      "O fígado",
      "O pulmão"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Creation_of_Adam"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Creation_of_Adam",
        "situacao": "ok",
        "texto": "The Creation of Adam (Italian: Creazione di Adamo), also known as The Creation of Man, is a fresco painting by Italian artist Michelangelo, which forms part of the Sistine Chapel's ceiling, painted 1508–1512. It illustrates the Biblical creation narrative from the Book of Genesis in which God gives life to Adam, the first man. The fresco is part of a complex  scheme and is chronologically the four\n[…]\nThis cameo offers an alternative theory for those scholars who have been dissatisfied with the theory that Michelangelo was mainly inspired by Lorenzo Ghiberti's Adam in his Creation of Adam.\n[…]\nOn close examination, borders in the painting correlate with major sulci of the cerebrum in the inner and outer surface of the brain, including a distinctive Sylvian fissure, the brain stem, the frontal lobe, the basilar artery, the pituitary gland and the optic chiasm.\n[…]\nThe first is a Scheme for the Decoration of the Vault of the Sistine Chapel: Studies of Arms and Hands. The right side of the page was sketched in 1508 with black chalk, and is a study of Adam's limp hand, before it is ignited with the gift of life from God, in the Creation of Adam scene. Michelangelo sketched this over a previous brown, lead point stylus study of the vaulted Sistine Chapel ceiling. The entire composition is 274 millimeters in height and 386 millimeters in width.\n[…]\nThe second sketch is titled Studies of a Reclining Male Nude: Adam in the Fresco \"The Creation of Man.\" It was created in 1511 in dark red chalk, over a stylus under drawing. Red chalk was Michelangelo's preferred medium at this period of time, as it could be shaved to a finer point than black chalk. Michelangelo used this fine point to create a scintillating skin surface, that was unique for this particular sketch, and is not seen in his later works.\n[…]\nMedia related to Sistine Chapel ceiling - Creation of Adam at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/A_Cria%C3%A7%C3%A3o_de_Ad%C3%A3o",
        "situacao": "ok",
        "texto": "A Criação de Adão é um afresco de 280 cm x 570 cm, pintado por Michelangelo Buonarroti por volta de 1511, que fica no teto da Capela Sistina. A cena representa um episódio do Livro do Gênesis no qual Deus cria o primeiro homem a partir do pó da terra: Adão.\n[…]\nDeus é representado como um ancião barbudo, envolto em um manto que divide com alguns anjos. Seu braço esquerdo está abraçado a uma figura feminina, normalmente interpretada como Eva – que ainda não foi criada e, figuradamente, espera no Céu para ganhar uma forma humana. O braço direito de Deus está esticado para criar o poder da vida de seu próprio dedo para Adão, o qual está com o braço esquerdo estendido em contraposição ao do criador.\n[…]\nOs dedos de Adão e de Deus estão separados por uma pequena distância.\n[…]\nPor outra perspectiva, alguns estudiosos das artes dizem que uma mensagem é imposta subliminarmente. Quando, olhado de forma diferente, Deus estaria representado dentro de um cérebro e, com o seu toque à Adão, o racionalismo seria representado de forma escondida.\n[…]\nExistem várias teorias sobre o significado da composição original de \"A Criação de Adão\", levantadas principalmente por causa do amplo conhecimento que Michelangelo possuía em Anatomia. Em 1990, um médico chamado Frank Lynn Meshberger, em artigo no Journal of the American Medical Association, afirma que a figura em que Deus está apoiado tem o formato anatómico de um cérebro, incluindo o lobo frontal, nervo ótico, glândula pituitária e o cerebelo.\n[…]\nTambém observou que o manto branco de Deus tem o formato de um útero, e que a écharpe verde que sai de seu ventre poderia ser um cordão umbilical. O braço de Deus representa também, o \"terceiro olho\" também chamado de \"olho Divino\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "O Jardim das Delícias Terrenas",
      "descricao": "Tríptico de Hieronymus Bosch no Museu do Prado."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "No painel do inferno d'O Jardim das Delícias Terrenas, de Bosch, uma partitura musical aparece pintada em que parte do corpo de um condenado?",
    "resposta": "Nas nádegas",
    "distratores": [
      "Nas costas",
      "Na barriga",
      "Na testa"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Garden_of_Earthly_Delights"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Garden_of_Earthly_Delights",
        "situacao": "ok",
        "texto": "The Garden of Earthly Delights (Dutch: De tuin der lusten, lit. 'The garden of lusts') is the modern title given to a five-panel triptych (three oil-painted panels when open, two oak panels when closed) painted by the Early Netherlandish master Hieronymus Bosch, painted between 1490 and 1510, when Bosch was between 40 and 60 years old. Because of Bosch's religious beliefs, interpretations of the w\n[…]\nBecause Bosch was such a unique and visionary artist, his influence has not spread as widely as that of other major painters of his era. However, there have been instances of later artists incorporating elements of The Garden of Earthly Delights into their work. Pieter Bruegel the Elder (c. 1525–1569) in particular directly acknowledged Bosch as an important influence and inspiration, and incorporated many elements of the inner right panel into several of his most popular works.\n[…]\nBoth knew his paintings firsthand, having seen The Garden of Earthly Delights in the Museo del Prado, and both regarded him as an art-historical mentor. Miró's The Tilled Field contains several parallels to Bosch's Garden: similar flocks of birds; pools from which living creatures emerge; and oversized disembodied ears all echo the Dutch master's work.\n[…]\nJheronimus Bosch, The Garden of Earthly Delights Interactive tour of the artwork\n[…]\nThe Garden of Earthly Delights at the Bosch Project (high-quality zoomable image)\n[…]\nThe Garden of Earthly Delights at the Museo Nacional del Prado\n[…]\nThe Tricks of Leonardo da Vinci & Hieronymus Bosch. Xavier d'Hérouville & Aurore Caulier. December 2023. HAL Open Science\n[…]\n\"Bosch painted Garden of Earthly Delights for Brussels Palace\" Audiovisual by Tvbrussel, 2016\n[…]\n\"The Garden of Earthly Delights: A diachronic interpretation of Hieronymus Bosch's masterpiece\" A lecture by Matthias Riedl\n[…]\nAudiovisual tour of The Garden of Earthly Delights narrated by Redmond O'Hanlon"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/O_Jardim_das_Del%C3%ADcias_Terrenas",
        "situacao": "ok",
        "texto": "O Jardim das Delícias Terrenas é um tríptico de Hieronymus Bosch, que descreve a história do Mundo a partir da criação, apresentando o Jardim do Éden na asa lateral esquerda e o Inferno na asa lateral direita. Ao centro aparece um Bosch que celebra os prazeres da carne, com participantes desinibidos, sem sentimento de culpa. A obra expõe ainda símbolos e atividades sexuais com vividez.\n[…]\nAlém disso, no canto inferior esquerdo, há um grupo de homens que estão assinalando para a tábua anterior, em especial para Eva, o qual foi interpretado como uma clara acusação à mulher como responsável de ter sucumbido à tentação da serpente cometendo o pecado pelo qual pagará toda a humanidade. A misoginia é conhecida o suficiente na época na qual Bosch pinta o \"Jardim das Delícias Terrenas\".\n[…]\nTambém é conhecido como \"O inferno musical\", pelas múltiplas representações de instrumentos musicais que aparecem. Ignora-se por que Bosch associa a música com o pecado. Pintou os tormentos do inferno, aos quais fica exposta a Humanidade. Descreve um mundo onírico, demoníaco, opressivo, de inumeráveis tormentos. É uma tábua muito sombria em relação ao colorido das outras duas: tons lívidos do inferno de gelo, vivas chamas do inferno de fogo. A tábua pode-se dividir em três níveis.\n[…]\nNa parte inferior, aparecem o que seria o inferno musical propriamente dito, em onde os instrumentos musicais aparecem transformados em instrumentos de tortura. Embaixo, à direita, vê-se a um homem abraçado por um porco. É um simbolismo do que acontece às pessoas do painel central, do Jardim das Delícias Terrenas, devido ao seu comportamento.\n[…]\nTORRES, Raúl. Hieronymus Bosch (El Bosco). Editorial Panorama, Madrid. [S.l.]: Maestros del Museo del Prado\n[…]\nObras de Hieronymus Bosch\n[…]\n(em castelhano) O Jardim das Delícias Terrenas ou A pintura do medronheiro no site do Museu do Prado",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "O Casal Arnolfini",
      "descricao": "Quadro de Jan van Eyck de 1434."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Na parede do quadro O Casal Arnolfini, logo acima do espelho, o pintor deixou uma frase escrita em latim. O que ela diz?",
    "resposta": "Jan van Eyck esteve aqui",
    "distratores": [
      "Jan van Eyck me pintou",
      "Deus abençoe esta casa",
      "O amor tudo vence"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Arnolfini_Portrait"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Arnolfini_Portrait",
        "situacao": "ok",
        "texto": "The Arnolfini Portrait (or The Arnolfini Wedding, The Arnolfini Marriage, the Portrait of Giovanni Arnolfini and his Wife, or other titles) is an oil painting on oak panel by the Early Netherlandish painter Jan van Eyck, dated 1434 and now in the National Gallery, London. It is a full-length double portrait, believed to depict the Italian merchant Giovanni di Nicolao Arnolfini and his wife, presum\n[…]\nIn 1934, Erwin Panofsky published an article entitled Jan van Eyck's 'Arnolfini' Portrait in the Burlington Magazine, arguing that the elaborate signature on the back wall, and other factors, shows that it was painted as a legal record of the occasion of the marriage of the couple, complete with witnesses and a witness signature. Panofsky also argues that the many details of domestic items in the painting each have a disguised symbolism attached to their appearance.\n[…]\nJan Baptist Bedaux agrees somewhat with Panofsky that this is a marriage contract portrait in his 1986 article \"The reality of symbols: the question of disguised symbolism in Jan van Eyck's Arnolfini Portrait.\" However, he disagrees with Panofsky's idea of items in the portrait having hidden meanings. Bedaux argues, \"if the symbols are disguised to such an extent that they do not clash with reality as conceived at the time ...\n[…]\nThe provenance of the painting begins in 1435 when it was dated by van Eyck and presumably owned by the sitter(s). At some point before 1516 it came into the possession of Don Diego de Guevara (d. Brussels 1520), a Spanish career courtier of the Habsburgs (himself the subject of a fine portrait by Michael Sittow in the National Gallery of Art). He lived most of his life in the Netherlands, and may have known the Arnolfinis in their later years.\n[…]\nSeidel, Linda, \"'Jan van Eyck's Portrait': business as usual?\", Critical Inquiry, vol. 16, iss. 1, pp. 54–86, Autumn 1989, JSTOR 343626"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/O_Casal_Arnolfini",
        "situacao": "ok",
        "texto": "O  Casal Arnolfini é o mais famoso quadro do pintor flamengo Jan van Eyck, pintado em 1434. A obra exibe o então rico  comerciante Giovanni Arnolfini e sua esposa Giovanna Cenami, que se estabeleceram e prosperaram na cidade de Bruges (hoje Bélgica), entre 1420 e 1472.\n[…]\nEspecula-se sobre a presença efetiva do pintor no casamento dos Arnolfini, que explicaria a razão de o pintor neerlandês ter escrito no quadro, em latim, Johannes de Eyck fuit hic (Jan van Eyck esteve aqui).\n[…]\nO cão dá um ar de graça e calma ao quadro, que é de surpreendente solenidade. O detalhismo do pelo é toda uma proeza técnica. Nos retratos, os cães podem simbolizar, como aqui, a fidelidade e o amor terreno.\n[…]\nOs únicos que faltariam para completar a cerimônia do matrimônio, seriam o sacerdote e a testemunha, mas ambas as personagens aparecem refletidas no espelho, junto do casal: um clérigo e o próprio pintor, que atua como testemunha, e que, com sua assinatura, não só reclama a autoria do quadro como testifica a celebração do sacramento: \"Johannes van Eyck fuit hic 1434\" (Jan van Eyck esteve aqui em 1434). O quadro seria, portanto, um documento matrimonial.\n[…]\nEmbora haja mais motivos para a controvérsia, em 1990, um pesquisador francês da Sorbonne, Jacques Paviot, descobriu no arquivo dos duques de Borgonha um documento de casamento de Giovanni Arnolfini, datado de 1447, treze anos depois de pintado o quadro e seis anos depois da morte de Jan van Eyck.\n[…]\nÉ certo que em Bruges, no século XV, houve quatro Arnolfinis e dois deles se chamavam Giovanni, mas no documento se fala inequivocamente do mais rico, o que tinha contato com o arquiduque, o do quadro de van Eyck.\n[…]\n«The Arnolfini Portrait, by Mnemosyne» (em inglês)\n[…]\n«Art-on-Line: Jan van Eyck: El matrimonio Arnolfini» (em espanhol)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "A Escola de Atenas",
      "descricao": "Afresco de Rafael nos Palácios do Vaticano."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Na Escola de Atenas, Rafael teria dado o rosto de Michelangelo a um filósofo sentado e pensativo, em primeiro plano. Que filósofo é esse?",
    "resposta": "Heráclito",
    "distratores": [
      "Diógenes",
      "Pitágoras",
      "Sócrates"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/The_School_of_Athens"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_School_of_Athens",
        "situacao": "ok",
        "texto": "The School of Athens (Italian: Scuola di Atene) is a fresco by the Italian Renaissance artist Raphael. It was painted between 1509 and 1511 as part of a commission by Pope Julius II to decorate the rooms now called the Stanze di Raffaello in the Apostolic Palace in Vatican City.\n[…]\nAdditionally, Italian artists Leonardo da Vinci and Michelangelo are believed to be portrayed through Plato and Heraclitus, respectively. Raphael included a self-portrait beside Ptolemy.\n[…]\nPaolo Zamboni, professor of vascular surgery at the University of Ferrara, made a medical study of the painting, noting that Raphael's depiction of Michelangelo (as Heraclitus) shows varicose veins in the legs.\n[…]\nThe cartoon for the painting is in the Pinacoteca Ambrosiana in Milan. Missing from it is the architectural background, the figures of Heraclitus, Raphael, and Protogenes. The group of the philosophers in the left foreground strongly recall figures from Leonardo's Adoration of the Magi. Additionally, there are some engravings of the scene's sculptures by Marcantonio Raimondi; they may have been based on lost drawings by Raphael, as they do not match the fresco exactly.\n[…]\nRowe and Rees 1956 suggested that both statue groups share a similar subject to the Plato's Academy mosaic, with the Saqqara figures identified as: \"(1) Pindare, (2) Démétrios de Phalère, (3) x (?), (4) Orphée (?) aux oiseaux, (5) Hésiode, (6) Homère, (7) x (?), (8) Protagoras, (9) Thalès, (10) Héraclite, (11) Platon, (12) Aristote (?).\" However, there have been other suggestions (e.g. Mattusch 2008). Plato and Thales are commonly identified as central figures.\n[…]\nThe School of Athens reproduction at UNC Asheville\n[…]\nThe School of Athens in Britannica.\n[…]\nMedia related to The School of Athens by Raphael at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Escola_de_Atenas",
        "situacao": "ok",
        "texto": "A Escola de Atenas (Scuola di Atene no original) é uma das mais famosas pinturas do renascentista italiano Rafael e representa a Academia de Atenas. Foi pintada entre 1509 e 1510 na Stanza della Segnatura sob encomenda do Vaticano. A pintura já foi descrita como \"a obra-prima de Rafael e a personificação perfeita do espírito clássico da Renascença\".\n[…]\nA \"Escola de Atenas\" é um dos painéis que compõem um grupo de quatro afrescos principais que retratam ramos distintos do conhecimento. Cada tema é identificado acima por um tondo em separado contendo uma figura feminina majestosa sentada nas nuvens, com putti carregando frases como: “Buscar o conhecimento das causas”, “Inspiração Divina”, “Conhecimento das coisas divinas” (Disputa), “Para cada um o que lhe é devido”.\n[…]\nNão se sabe o quanto o jovem Rafael sabia da filosofia antiga, qual a orientação que ele poderia ter tido de pessoas como Bramante, ou se um programa detalhado foi ditado por seu patrocinador, o Papa Júlio II.\n[…]\nNo entanto, o afresco foi até recentemente interpretado como uma exortação à filosofia e, de maneira mais profunda, como uma representação visual do papel do amor em elevar as pessoas para o conhecimento superior, em grande parte em dívida com as teorias contemporâneas de Marsilio Ficino e outros pensadores neoplatônicos ligados a Rafael.\n[…]\nA identidade de alguns dos filósofos como Platão ou Aristóteles, são inegáveis. Além disso, as identificações de figuras de Rafael tem sido sempre hipotéticas. Para complicar, além de Vasari alguns receberam múltiplas identificações, não só com antigos, mas também com figuras contemporâneas a Rafael.\n[…]\n9: Rafael, Hipátia ou Monalisa, Fornarina como uma personificação do Amor ou ainda Francesco Maria della Rovere\n[…]\n13: Heráclito ou Miguelângelo.\n[…]\nR: Apeles (Rafael).\n[…]\nSalas de Rafael\n[…]\nPinturas de Rafael",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "A Grande Onda de Kanagawa",
      "descricao": "Xilogravura de Katsushika Hokusai, de cerca de 1831."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "O azul intenso da Grande Onda de Kanagawa vem de um pigmento sintético importado da Europa, então novidade no Japão. Que pigmento é esse?",
    "resposta": "Azul da Prússia",
    "distratores": [
      "Azul ultramarino",
      "Azul cobalto",
      "Anil"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Great_Wave_off_Kanagawa"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Great_Wave_off_Kanagawa",
        "situacao": "ok",
        "texto": "The Great Wave off Kanagawa (Japanese: 神奈川沖浪裏, Hepburn: Kanagawa-oki Nami Ura; lit. 'Under the Wave off Kanagawa') is a woodblock print by the Japanese ukiyo-e artist Hokusai (1760–1849), created in late 1831 during the Edo period of Japanese history. The print depicts three boats moving through a storm-tossed sea, with a large, cresting wave forming a spiral in the centre over the boats and Mount\n[…]\nThe print is Hokusai's best-known work and the first in his series Thirty-six Views of Mount Fuji, in which the use of Prussian blue revolutionised Japanese prints. The composition of The Great Wave is a synthesis of traditional Japanese prints and use of graphical perspective developed in Europe, and earned him immediate success in Japan and later in Europe, where Hokusai's art inspired works by the Impressionists.\n[…]\nDuring the 1830s Hokusai's prints underwent a \"blue revolution\", in which he made extensive use of the dark-blue pigment Prussian blue. He used this shade of blue, which was resistant to fading, for The Great Wave off Kanagawa with indigo, the delicate, quickly fading shade of blue that was commonly used in ukiyo-e works at the time.\n[…]\nThe first 10 prints in the series, including The Great Wave off Kanagawa, are among the first Japanese prints to feature Prussian blue, which was most likely suggested to the publisher in 1830. This innovation was an immediate success.\n[…]\nHenri Rivière, a draughtsman, engraver, and watercolourist who was also an important figure behind the Paris entertainment venue Le Chat Noir, was one of the first artists to be heavily influenced by Hokusai's work, particularly The Great Wave off Kanagawa. In homage to Hokusai's work, Rivière published a series of lithographs titled The Thirty-Six Views of the Eiffel Tower in 1902.\n[…]\nThe Metropolitan Museum of Art's (New York) entry on The Great Wave at Kanagawa"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/A_Grande_Onda_de_Kanagawa",
        "situacao": "ok",
        "texto": "A Grande Onda de Kanagawa (japonês: 神奈川沖浪裏, Hepburn: Kanagawa oki nami ura; lit. \"Sob a Onda de Kanagawa\"), mais conhecida simplesmente como A Onda é uma famosa xilogravura do mestre japonês Hokusai, especialista em ukiyo-e. Foi publicada em 1830 ou 1831 (no período Edo) como a primeira pintura na série Trinta e seis vistas do monte Fuji, sendo a obra mais conhecida do artista.\n[…]\nEdmond de Goncourt descreveu assim a onda:\n[…]\nDurante a década de 1830 aconteceu uma \"revolução azul\" nas gravuras de Hokusai, nas quais usou muito uma cor que estava de moda, conhecido como \"azul de Berlim\" ou também como \"azul da Prússia\". Foi este tom de azul o que usou para esta obra, cor diferente do delicado e fugaz tom de azul que era usado habitualmente nos trabalhos de ukiyo-e da época, o índigo.\n[…]\nEste azul de Berlim, berorin ai em japonês, começou a ser importado da Holanda a partir de 1820, sendo usado especialmente por Hiroshige e Hokusai a partir da sua chegada ao Japão em grandes quantidades, em 1829.\n[…]\nAs primeiras dez gravuras da série, entre as que se encontra A grande onda, são das primeiras xilogravuras japonesas nas quais aparece o azul da Prússia, e é que é muito provável que este tom fosse sugerido ao editor em 1830. Esta inovação teve um sucesso imediato e o ano novo de 1831 o editor de Hokusai, Nishimuraya Yohachi (Eijudō), fez anúncios publicitários para apresentar a inovação.\n[…]\nA publicação da série continuou até 1832 ou 1833, com um total de 46 xilogravuras, graças a dez xilogravuras supernumerárias. Estas dez xilogravuras suplementares não têm o tom azul da Prússia, mas têm os contornos a preto sumi, com tinta chinesa, como era habitual. Estas dez xilogravuras são conhecidas como ura Fuji ou \"Fuji visto desde atrás\".\n[…]\nPintura do Japão\n[…]\nArte do Japão\n[…]\nEntrada do Museu Metropolitano de Arte de Nova Iorque sobre A Grande Onda de Kanagawa",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "A Coroação de Napoleão",
      "descricao": "Pintura de Jacques-Louis David, de 1807, que retrata a coroação de Napoleão em Notre-Dame de Paris, guardada no Louvre."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Na Coroação de Napoleão, de David, uma mulher aparece num lugar de honra, embora não tenha ido à cerimônia. Quem é ela?",
    "resposta": "A mãe de Napoleão",
    "distratores": [
      "A irmã de Napoleão",
      "A mãe de Josefina",
      "A imperatriz da Áustria"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Coronation_of_Napoleon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Coronation_of_Napoleon",
        "situacao": "ok",
        "texto": "The Coronation of Napoleon (French: Le Sacre de Napoléon) is a painting completed in 1807 by Jacques-Louis David, the official painter of Napoleon, depicting the coronation of Napoleon at Notre-Dame de Paris. The oil painting has imposing dimensions – it is almost 10 metres (33 ft) wide by a little over 6 metres (20 ft) tall. The work is on display at the Louvre Museum in Paris, France.\n[…]\nMaria Letizia Ramolino (1750–1836), mother of Napoleon, was placed in the stands by the painter. She occupies a place more important than the pope. Actually, she did not attend the ceremony in order to protest the friction of Napoleon with his brothers, Lucien and Joseph. Maria Letizia asked the painter to give Lucien a place of honour. In 1808, when Napoleon discovered the canvas completed in the workshop of David, he was enthralled and expressed his gratitude.\n[…]\nJoachim Murat (1767–1815), Marshal of the Empire, king of Naples after 1808, brother-in-law of Napoleon, and husband of Caroline Bonaparte.\n[…]\nPope Pius VII (1742–1823), who was content to bless the coronation. He is surrounded by clerics, appointed by Napoleon since the Concordat. In order to reinforce the legitimacy of his regime following the Concordat of 1801, Napoleon invited Pope Pius VII to attend the coronation, which the Pope agreed to do. David's preparatory studies first rendered figures with minimal detail, as was a staple of the artist’s working process.\n[…]\nThe 2023 Ridley Scott film Napoleon recreated the painting in the scene depicting the coronation of Napoleon. The scene in the film included a shot of Jacques-Louis David drawing a sketch of the coronation for the painting.\n[…]\nJean Tulard, Le Sacre de l'empereur Napoléon. Histoire et légende, Paris 2004 ISBN 2-213-62098-9\n[…]\nLouvre Museum's interactive closer look at The Coronation of Napoleon Archived 2021-02-01 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/A_Coroa%C3%A7%C3%A3o_de_Napole%C3%A3o",
        "situacao": "ok",
        "texto": "A Coroação de Napoleão (em francês: Le Sacre de Napoléon) é uma pintura de 1807 do artista francês Jacques-Louis David. A obra retrata o momento da coroação de Napoleão Bonaparte como Imperador da França na Catedral de Notre-Dame de Paris, em 2 de dezembro de 1804. A pintura, de dimensões impressionantes, possui dez metros de largura e seis metros de altura, e integra o acervo do Museu do Louvre.\n[…]\nA pintura foi encomendada pelo próprio Napoleão Bonaparte em setembro de 1804, meses antes de sua coroação. David, no entanto, deu início aos trabalhos em 21 de dezembro de 1805 na antiga capela do Colégio de Cluny, nas proximidades da Sorbonne, que lhe servia de ateliê. Com auxílio de seu aprendiz, Georges Rouget, o pintor retocou a pintura pela última vez em novembro de 1807.\n[…]\nNapoleão I (1769 - 1821): de pé, em trajes de coroação provavelmente inspirados pelos de imperadores romanos. As demais personagens da pintura atuam como meros espectadores passivos de Napoleão. O imperador francês segura a coroa sobre sua própria cabeça, coroando-se a si mesmo, e não sendo coroado pelo papa Pio VII.\n[…]\nMaria Letícia Ramolino (1750 – 1836): a mãe de Napoleão, foi posicionada na galeria inferior pelo pintor. Ocupa um lugar de maior importância do que o Papa ali presente. Na realidade, ela não participara da cerimônia em protesto às rivalidades de Napoleão e seus irmãos, José e Luciano.\n[…]\nJosé Bonaparte (1768 – 1844): Não havia sido convidado e não esteve presente na cerimônia devido a disputas com Napoleão,assim como seu irmão Luciano. Na verdade, foi um dos motivos pelos quais sua mãe também não compareceu. Após a coroação, no entanto, recebeu o título de Príncipe Imperial, e eventualmente assumiu os tronos de Nápoles e da Espanha em 1806 e 1808, respectivamente.\n[…]\nJoaquim Murat (1767 - 1815): Marechal da França e rei de Nápoles.\n[…]\nMedia relacionados com A Coroação de Napoleão no Wikimedia Commons",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Gótico Americano",
      "descricao": "Quadro de Grant Wood de 1930."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Para pintar o casal de Gótico Americano, Grant Wood usou como modelos a própria irmã e quem?",
    "resposta": "O dentista dele",
    "distratores": [
      "O pai dele",
      "Um vizinho fazendeiro",
      "O padre da cidade"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/American_Gothic"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/American_Gothic",
        "situacao": "ok",
        "texto": "American Gothic is a 1930 oil painting on beaverboard by the American Regionalist artist Grant Wood, depicting a Midwestern farmer and his  daughter standing in front of their Carpenter Gothic style home. It is one of the most famous American paintings of the 20th century and is frequently referenced in popular culture.\n[…]\nThe figures were modeled after Wood's sister Nan Wood Graham and Byron McKeeby, the Wood family's dentist. The woman is dressed in a colonial print apron evoking 20th-century rural Americana while the man is adorned in overalls covered by a suit jacket and carries a pitchfork. The plants on the porch of the house are mother-in-law's tongue and beefsteak begonia, which also appear in Wood's 1929 portrait of his mother, Woman with Plants.\n[…]\nIn August 1930, Grant Wood, an American painter with European training, was driven around Eldon, Iowa, by a young local painter named John Sharp. Looking for inspiration, he noticed the Dibble House, a small white house built in the Carpenter Gothic architectural style. The house was added to the National Register of Historic Places in 1974 (reference No. 74002291). Sharp's brother suggested in 1973 that it was on this drive that Wood first sketched the house on the back of an envelope.\n[…]\nThe model for the man was the Wood family's dentist, Dr. Byron McKeeby (1867–1950) from Cedar Rapids, Iowa.\n[…]\nHoving, Thomas (2005). American Gothic: The Biography of Grant Wood's American Masterpiece. New York: Chamberlain Bros. ISBN 978-1-59609-148-1.\n[…]\nGrant, Reg (2025). \"American Gothic painting by Grant Wood\". britannica.com.\n[…]\nFebruary 13, 1976, National Public Radio All Things Considered Cary Frumpkin interview with James Dennis, author of Grant Wood: A Study in American Art and Culture. The interview contains a discussion about American Gothic."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/American_Gothic",
        "situacao": "ok",
        "texto": "American Gothic ou Gótico Americano é uma pintura de Grant Wood da coleção do Art Institute of Chicago. A inspiração de Wood veio de uma casa desenhada em estilo gótico rural com uma distinta janela superior e uma decisão de pintar junto a casa com \"o tipo de pessoa que eu imaginava viver naquela casa.\" A pintura mostra um fazendeiro ao lado de sua filha. A mulher está vestida com um avental em es\n[…]\nEm agosto de 1930, Grant Wood, um pintor americano com formação na escola europeia, passeava por Eldon, no estado americano de Iowa, na companhia de um pintor local, John Sharp, procurando inspiração. Foi então que reparou uma uma pequena casa branca construída em estilo revivalista gótico, conhecida como Dibble House.\n[…]\nGrant Wood era um grande apreciador da cultura e tradições da região centro-oeste dos Estados Unidos, e decidiu pintar a Dibble House juntamente com “o tipo de pessoas que eu imaginei que vivessem nesta casa”. Ele chamou a sua irmã Nan para servir de modelo feminino, vestindo-a com um avental de padrão colonial, evocando a arte tradicional americana do século XIX, e o seu dentista pessoal , o Dr. Byron McKeeby (1867–1950), para o modelo masculino.\n[…]\nTal como na pintura da casa, ambos os modelos foram pintados em sessões separadas.\n[…]\nNan, talvez embaraçada por ser representada como a mulher de um homem com o dobro da sua idade,[carece de fontes]? disse que o irmão idealizou o casal como um pai e uma filha, em vez de um marido e  mulher, algo que o próprio Grant Wood confirmou numa carta que ele escreveu a uma admiradora: \"A cerimoniosa senhora que o acompanha é a sua filha adulta\".\n[…]\nGarwood, Darrell (1944). Artist in Iowa: A Life of Grant Wood (em inglês). Nova Iorque: W. W. Norton & Company. OCLC 518305\n[…]\nSteven Biel (2005). American Gothic: A Life of America's Most Famous Painting (em inglês). Nova Iorque: W. W. Norton & Company. ISBN 0-393-05912-X",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "As Meninas",
      "descricao": "Quadro de Diego Velázquez no Museu do Prado."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Em As Meninas, Velázquez se pintou com uma cruz vermelha no peito, que teria sido acrescentada anos depois. Ela é o símbolo de que ordem de cavalaria?",
    "resposta": "Ordem de Santiago",
    "distratores": [
      "Ordem de Malta",
      "Ordem dos Templários",
      "Ordem de Calatrava"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Las_Meninas"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Las_Meninas",
        "situacao": "ok",
        "texto": "Las Meninas (Spanish: [las meˈninas]; Spanish for 'The Ladies-in-waiting') is a 1656 oil painting in the Museo del Prado in Madrid, by Diego Velázquez, the leading artist in the court of King Philip IV of Spain and Portugal, and of the Spanish Golden Age.\n[…]\nVelázquez (9) is pictured to the left of the scene, looking outward past a large canvas supported by an easel. On his chest is the red cross of the Order of Santiago, which he did not receive until 1659, three years after the painting was completed. According to Palomino, Philip ordered this to be added after Velázquez's death, \"and some say that his Majesty himself painted it\". From the painter's belt hang the symbolic keys of his court offices.\n[…]\nThe art historian Svetlana Alpers suggests that, by portraying the artist at work in the company of royalty and nobility, Velázquez was claiming high status for both the artist and his art, and in particular to propose that painting is a liberal rather than a mechanical art. This distinction was a point of controversy at the time. It would have been significant to Velázquez, since the rules of the Order of Santiago excluded those whose occupations were mechanical.\n[…]\nGeorge V visited Lavery's studio during the execution of the painting and, perhaps recalling the legend that Philip IV had daubed the cross of the Knights of Santiago on the figure of Velázquez, asked Lavery if he could contribute to the portrait with his own hand. According to Lavery, \"thinking that royal blue might be an appropriate colour, I mixed it on the palette, and taking a brush he [George V] applied it to the Garter ribbon.\"\n[…]\nVelázquez, exhibition catalog from The Metropolitan Museum of Art, which contains material on Las Meninas (see index)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/As_Meninas_%28Vel%C3%A1zquez%29",
        "situacao": "ok",
        "texto": "As Meninas é uma pintura de 1656 por Diego Velázquez, o principal artista do Século de Ouro Espanhol. Ela está hoje em dia no Museu do Prado em Madrid. A composição enigmática e complexa da obra levanta questões sobre realidade e ilusão, criando uma relação incerta entre o observador e as figuras representadas. Por essas complexidades, As Meninas é uma das obras mais analisadas da pintura ocidenta\n[…]\nMuitos artistas do Renascimento empregaram a seção áurea nos seus desenhos, por exemplo o grande mestre Leonardo Da Vinci, já em 1509 o matemático Luca Pacioli, publicou o livro De Divina Proportione e em 1525 Alberto Durero publicou Instrução sobre à medida com regra e compasso de figuras planas e sólidas, onde descrevia como traçar a espiral baseada na seção áurea com regra e compasso, que se conhece com o nome de \"espiral de Durero\" Velázquez na composição áurea do seu quadro As Meninas, ordena-o com a mencionada espiral, o centro é justo o peito da infanta Margarida, marca o centro visual máximo de interesse e o significado simbólico do lugar reservado para os escolhidos, como era tradição na Europa, que o monarca ocupara o lugar central e de privilégio nas cerimônias.\n[…]\nPicasso, seduzido por As Meninas, que já chamaram a atenção dele quando era novo, a 17 de agosto de 1957, começou a trabalhar em Cannes na elaboração de uma série com 58 interpretações da obra, que terminou no mês de dezembro do mesmo ano. A primeira interpretação pintou a cena completa e sem cor, somente com cinzentos, representou Velázquez com uma medida muito maior, a sua cabeça chega a tocar o teto e destaca-se sobremaneira no seu peito a cruz da ordem de Santiago.\n[…]\nO dramaturgo Antonio Buero Vallejo escreveu em 1959, uma obra de teatro: Las Meninas, estreada em Madrid a 9 de dezembro de 1960, sob a direção de José Tamayo.\n[…]\nA Hypertextual Study of Velázquez's Las meninas (em inglês) por Joan Campàs Montaner",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "As Meninas",
      "descricao": "Quadro de Diego Velázquez no Museu do Prado."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "No título do quadro As Meninas, de Velázquez, a palavra meninas designava que tipo de jovens da corte espanhola?",
    "resposta": "Damas de honra da infanta",
    "distratores": [
      "Filhas do rei",
      "Aprendizes de pintura",
      "Bailarinas da corte"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Las_Meninas"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Las_Meninas",
        "situacao": "ok",
        "texto": "Las Meninas (Spanish: [las meˈninas]; Spanish for 'The Ladies-in-waiting') is a 1656 oil painting in the Museo del Prado in Madrid, by Diego Velázquez, the leading artist in the court of King Philip IV of Spain and Portugal, and of the Spanish Golden Age.\n[…]\nLas Meninas is set in Velázquez's studio in Philip IV's alcázar palace in Madrid. The high-ceilinged room is presented, in the words of Silvio Gaggi, as \"a simple box that could be divided into a perspective grid with a single vanishing point\". In the centre of the foreground stands the Infanta Margaret Theresa (1). The five-year-old infanta, who later married Holy Roman Emperor Leopold I, was at this point Philip and Mariana's only surviving child.\n[…]\nIn the context of the painting, Snyder argues that the scene is the end of the royal couple's sitting for Velázquez and they are preparing to exit, explaining that is \"why the menina to the right of the Infanta begins to curtsy\".\n[…]\nLending weight to the latter idea are the gazes of three of the figures—Velázquez, the infanta, and Maribarbola—who appear to be looking directly at the viewer.\n[…]\nAn almost immediate influence can be seen in the two portraits by del Mazo of subjects depicted in Las Meninas, which in some ways reverse the motif of that painting. Ten years later, in 1666, Mazo painted Infanta Margaret Theresa, who was then 15 and just about to leave Madrid to marry the Holy Roman Emperor. In the background are figures in two further receding doorways, one of which was the new King Charles (Margaret Theresa's brother), and another the little person Maribarbola.\n[…]\nList of works by Diego Velázquez\n[…]\nVelázquez, exhibition catalog from The Metropolitan Museum of Art, which contains material on Las Meninas (see index)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/As_Meninas_%28Vel%C3%A1zquez%29",
        "situacao": "ok",
        "texto": "As Meninas é uma pintura de 1656 por Diego Velázquez, o principal artista do Século de Ouro Espanhol. Ela está hoje em dia no Museu do Prado em Madrid. A composição enigmática e complexa da obra levanta questões sobre realidade e ilusão, criando uma relação incerta entre o observador e as figuras representadas. Por essas complexidades, As Meninas é uma das obras mais analisadas da pintura ocidenta\n[…]\nA pintura mostra um grande aposento no Real Alcázar de Madrid durante o reinado do rei Filipe IV da Espanha, mostrando várias figuras da corte espanhola contemporânea representadas, de acordo com alguns analistas, em um momento específico como se fosse em uma fotografia. Algumas olham para fora do quadro em direção ao observador, enquanto outras interagem entre si. A jovem infanta Margarida Teresa está cercada por um séquito de damas de companhia, chaperone, guarda-costa, duas anãs e um cão.\n[…]\nCom a palavra portuguesa \"menina\" chamavam as filhas de personagens da nobreza que entravam em Palácio como donzelas de honra das Infantas e as acompanhavam no seu séquito o tempo tudo. Somente recebiam este apelativo até chegarem ao momento do debute, portanto eram sempre damas muito jovens.\n[…]\nA infanta, que estava olhando a Nicolasito Pertusato brincar com o cão, olha de repente para a esquerda, em direção aos reis, embora a sua cabeça permanece ainda volta em direção ao anão. Esta é a razão do estranho efeito de deslocamento entre a posição da cabeça e a direção da sua olhada. Agustina Sarmiento, ocupada em servir a água à princesa, não se deu conta ainda da presença dos reis, o mesmo acontece à senhora de honra em conversação com o guarda-damas que acaba de aperceber-se.\n[…]\no pintor representa a infanta;\n[…]\nO escritor irlandês Oscar Wilde inspirou-se n'As Meninas para  o seu conto O aniversário da infanta.\n[…]\nA Hypertextual Study of Velázquez's Las meninas (em inglês) por Joan Campàs Montaner",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Moça com Brinco de Pérola",
      "descricao": "Quadro de Johannes Vermeer, de cerca de 1665."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Na Moça com Brinco de Pérola, de Vermeer, a jovem usa na cabeça um turbante de que duas cores?",
    "resposta": "Azul e amarelo",
    "distratores": [
      "Vermelho e branco",
      "Verde e dourado",
      "Preto e branco"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Girl_with_a_Pearl_Earring"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Girl_with_a_Pearl_Earring",
        "situacao": "ok",
        "texto": "Girl with a Pearl Earring (Dutch: Meisje met de parel) is an oil painting by Dutch Golden Age painter Johannes Vermeer, dated c. 1665. Going by various names over the centuries, it acquired its present title towards the end of the 20th century. The work has been in the collection of the Mauritshuis in The Hague since 1902 and has been the subject of various literary and cinematic treatments.\n[…]\nSome of the first literary treatments of the painting were in poems. For Yann Lovelock in his sestina, \"Vermeer’s Head of a Girl\", it is the occasion for exploring the interplay between imagined beauty interpreted on canvas and living experience. W. S. Di Piero reimagined how the \"Girl with Pearl Earring by Johannes Vermeer\" might look in the modern setting of Haight Street in San Francisco, while Marilyn Chandler McEntyre commented on the girl's private, self-possessed personality.\n[…]\nTracy Chevalier's 1999 historical novel Girl with a Pearl Earring fictionalized the circumstances of the painting's creation. There, Vermeer becomes close to a servant whom he uses as an assistant and has sit for him as a model while wearing his wife's earrings. The novel was adapted into a 2003 film of the same name and a 2008 play.\n[…]\nIn 2009, the Ethiopian American Awol Erizku recreated Vermeer's painting as a print, centering on a young black woman and replacing the pearl earring with bamboo earrings as a commentary on the lack of black figures in museums and galleries. His piece is titled Girl with a Bamboo Earring. And in 2014, the English street artist Banksy reproduced the painting as a mural in Bristol, incorporating an alarm box in place of the pearl earring and calling the artwork Girl with a Pierced Eardrum.\n[…]\nAn investigation into the illumination of Vermeer’s Girl with a Pearl Earring\n[…]\nVermeer, Girl with a Pearl Earring, ColourLex\n[…]\nGirl with a Pearl Earring at the website of the Mauritshuis"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Meisje_met_de_parel",
        "situacao": "ok",
        "texto": "Meisje met de parel (Brasil: Moça com o Brinco de Pérola / Portugal: Rapariga com o Brinco de Pérola) é uma pintura do artista neerlandês Johannes Vermeer de 1665. Como o seu nome indica, é utilizado um brinco de pérola como ponto focal. A pintura faz parte da coleção do Mauritshuis de Haia. É muitas vezes referido como \"a Mona Lisa do Norte\" ou \"a Mona Lisa holandesa\".\n[…]\nEm geral, muito pouco se sabe sobre Vermeer e as suas obras. Esta pintura está assinada como \"IVMeer\", mas não está datada. Não está claro se este trabalho foi encomendado, e em caso afirmativo, por quem. Em qualquer caso, é provável que não pretenda ser um retrato convencional. Mais recentemente a literatura sobre Vermeer aponta para a imagem de ser um \"tronie\", a descrição para o holandês do século XVII de que uma \"cabeça\" não era para ser um retrato.\n[…]\nEm 1937, uma pintura muito semelhante, A Moça Sorridente, identificada na época também como obra de Vermeer, foi doada pelo coleccionador Andrew W. Mellon para a National Gallery of Art, em Washington D.C., e é agora amplamente considerada como uma farsa. O perito em trabalhos de Vermeer, Arthur Wheelock alegou, num estudo de 1995, que é obra do artista e falsificador do século XX Theo van Wijngaarden, um amigo de Han van Meegeren. e ela pode ser sim considerada uma pintura do estilo barroco.\n[…]\nEstudos realizados em 2023, descobriram que a Tinta à base de chumbo veio de Peak District na Inglaterra, o Carmim de insetos no México e o Azul ultramarino do Afeganistão.\n[…]\nEm 2003, um filme de Hollywood foi feito com o mesmo título da pintura, Moça com Brinco de Pérola, apresentando Colin Firth como Vermeer e Scarlett Johansson como a menina da pintura.\n[…]\nMoça com Brinco de Pérola no site do Mauritshuis.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Guernica",
      "descricao": "Grande painel de Pablo Picasso, de 1937, sobre o bombardeio da cidade basca de Guernica na Guerra Civil Espanhola."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Para retratar o bombardeio de Guernica, Picasso abriu mão das cores vivas. Em que tons o painel foi pintado?",
    "resposta": "Preto, branco e cinza",
    "distratores": [
      "Tons de azul",
      "Vermelho e preto",
      "Tons de sépia"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Guernica_(Picasso)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Guernica_(Picasso)",
        "situacao": "ok",
        "texto": "Guernica is a large 1937 oil painting by Spanish artist Pablo Picasso. It is one of his best-known works, regarded by many art critics as the most moving and powerful anti-war painting in history. It is exhibited in the Museo Reina Sofía in Madrid.\n[…]\nWhen pressed to explain the elements in Guernica, Picasso said,\n[…]\nThe Guernica tapestry was first displayed from 1985 to 2009, and returned in 2015. Originally commissioned in 1955 by Nelson Rockefeller, since Picasso refused to sell him the original, the tapestry was placed on loan to the United Nations by the Rockefeller estate in 1985.\n[…]\nArt historian and curator W. J. H. B. Sandberg argued in Daedalus in 1960 that Picasso pioneered a \"new language\" combining expressionistic and cubist techniques in Guernica. Sandberg wrote that Guernica conveyed an “expressionistic message” in its focus on the inhumanity of the air raid, while using \"the language of cubism\".\n[…]\nActress Kristen Stewart tattooed a portion of the painting on one of her forearms. She explained: \"It’s part of Guernica, a Picasso painting that I saw when I was 18 in Madrid and it floored me. It was the first time I’ve ever responded to a piece of art like that. It’s a sort of dismal depiction with this little shred of light – if you just turn the light back on everything will be fine.\n[…]\nThe 2018 television series Genius features Picasso's life and work, including Guernica\n[…]\nArt Opposes Injustice! – Picasso's Guernica: For Life by Dorothy Koppelman\n[…]\nGuardian: Picasso's Guernica Battle Lives On 26 April 2007\n[…]\nPicasso's \"Secret\" Guernica\n[…]\nThe New Yorker: Spanish Lessons, Picasso in Madrid by Peter Schjeldahl, 19 June 2006\n[…]\nX-ray Shows Picasso's Guernica Painting has Suffered a lot but is not in Danger Associated Press, 23 July 2008"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Guernica_%28quadro%29",
        "situacao": "ok",
        "texto": "Com 349 cm de altura por 776,5 cm de comprimento, Guernica, uma das obras mais famosas de Pablo Picasso (1881–1973), pintada a óleo em 1937, é uma “declaração de guerra contra a guerra e um manifesto contra a violência”. O quadro, além de ser um ícone da Guerra Civil Espanhola, é hoje um símbolo do antimilitarismo mundial e da luta pela liberdade do ser humano.\n[…]\nA pintura foi feita com o uso das cores preto e branco e um toque de bege e azul, algo que demonstrava o sentimento de repúdio do artista ao bombardeio da pequena cidade espanhola. Embora o quadro apresente uma linguagem de vanguarda, a obra é formada por uma estrutura piramidal e com uma composição simétrica e, simultaneamente, recupera o espírito do Barroco Espanhol, com o uso de expressões exageradas de dor com uma representação do trágico.\n[…]\nA obra foi apresentada pelo diretor cinematográfico Alain Resnais em seu documentário nomeado “Guernica”, de 1950, onde ele retrata o ataque aéreo à cidade usando as imagens de Picasso somadas ao texto de Paul Éluard.\n[…]\nA fotógrafa Dora Maar – que já havia trabalhado com Picasso desde 1936 ao captar imagens de seu estúdio e lhe ensinar as técnicas de fotografia – documentou os estágios que a cidade de Guernica precisou passar para se reconstruir. Mesmo com o valor publicitário por trás, suas fotografias “ajudaram Picasso a evitar cores e dar à obra tons brancos e pretos, iguais aos das fotos”, de acordo com o historiador especializado em arte John Richardson.\n[…]\nAo ver Guernica finalizada, Dias identificou novas possibilidades estéticas, expressivas e pictóricas para o tipo de pintura em painel que realizava, desde os anos de 1920. A influência do tema e da forma, transformaram a obra do artista brasileiro. Simultaneamente com isso, Dias e Picasso tornaram-se grandes amigos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Teto da Capela Sistina",
      "descricao": "Conjunto de afrescos pintados por Michelangelo no teto da Capela Sistina, no Vaticano, com cenas do Gênesis."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Uma lenda diz que Michelangelo pintou o teto da Capela Sistina deitado de costas. Como ele de fato trabalhou?",
    "resposta": "De pé, num andaime",
    "distratores": [
      "Sentado numa cadeira",
      "Pendurado por cordas",
      "Ajoelhado numa plataforma"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Sistine_Chapel_ceiling"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sistine_Chapel_ceiling",
        "situacao": "ok",
        "texto": "The Sistine Chapel ceiling (Italian: Soffitto della Cappella Sistina), painted in fresco by Michelangelo between 1508 and 1512, is a cornerstone work of High Renaissance art.\n[…]\nMuch remains unknown about the circumstances of the Sistine Chapel ceiling commission. De Tolnay and Ramsden have noted that despite so much having been written about the Sistine ceiling, the main unifying, inspirational theme behind it remains illusive. Jelbert has suggested that one reason for the complex, enigmatic nature of Michelangelo's Sistine ceiling is that the artist created it as an intellectual Renaissance puzzle, based on celestial imagery and the symbolic meaning of the stars.\n[…]\nMichelangelo painted the Sistine Chapel ceiling when Renaissance puzzle culture was at its height. There is evidence to show that Michelangelo - like Leonardo da Vinci - engaged in the production of intellectual, visual puzzles. It has been suggested, for instance, that along the spine of the ceiling, Michelangelo created compositions that mapped to anatomic structures of the human body.\n[…]\nMichelangelo's mentor Domenico Ghirlandaio painted Sibyls on the ceiling of Santa Trinita's Sassetti Chapel approximately 20 years prior to the start of the Sistine Chapel ceiling.\n[…]\nThis is the most Mannerist of Michelangelo's earlier compositions at the chapel.\n[…]\nThe Sistine Chapel ceiling was to have a profound effect upon other artists, even before it was completed.\n[…]\nVisual/Interactive Tour of the Sistine Chapel Ceiling and upper walls, with identifications and detail images\n[…]\nMichelangelo's Ceiling of the Sistine Chapel, Smarthistory video (22:03)\n[…]\nSistine Chapel Panoramas View\n[…]\nThe Sistine Ceiling and the Holy Spirit"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Teto_da_Capela_Sistina",
        "situacao": "ok",
        "texto": "O teto da Capela Sistina é constituído por um extenso afresco, concebido por Michelangelo entre 1508 e 1512. O trabalho, feito a pedido do Papa Júlio II, é considerado não só um marco da pintura da Alta Renascença, mas também uma das mais famosas obras da história da arte e um dos maiores tesouros da Santa Sé. A Capela Sistina, localizada no Vaticano, foi construída entre 1477 e 1480, a mando do p\n[…]\nPara alcançar o teto da capela, Michelangelo projetou seu próprio andaime, uma plataforma de madeira com suportes construídos a partir de buracos nas paredes, em áreas próximas ao topo das janelas, em vez de a partir do chão. Mancinelli especula que isso foi feito com o objetivo de diminuir os custos do material usado.\n[…]\nDe acordo com Condivi, biógrafo e pupilo de Michelangelo, os suportes e a estrutura que apoiavam os andares e o piso do engenho foram todos postos em seus lugares no início dos trabalhos com uma tela leve, possivelmente de pano, suspensa por baixo deles para capturar respingos de gesso, pó e salpicos de tinta. As metades da capela foram tomadas por andaimes uma de cada vez, com a moção da plataforma no decorrer da completude das etapas de pintura.\n[…]\nAo contrário do que diz a crença popular, Michelangelo pintou o teto em pé, e não deitado sobre as costas. De acordo com Vasari, \"o trabalho foi executado em condições extremamente desconfortáveis, tendo o pintor que trabalhar com sua cabeça sempre inclinada para cima\". Michelangelo descreveu seu desconforto físico num soneto humorístico acompanhado por um pequeno desenho de rascunho.\n[…]\nEssa finalização, entretanto, nunca aconteceu em parte por causa da relutância de Michelangelo em remontar os andaimes, e também, provavelmente, pelo fato de que o ouro e principalmente o intenso azul poderiam distrair os espectadores da concepção pictórica do artista.\n[…]\n«Web Gallery of Art: Capela Sistina» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Leonardo da Vinci",
      "descricao": "Pintor, inventor e cientista renascentista italiano, autor da Mona Lisa e de A Última Ceia, que viveu de 1452 a 1519."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Os cadernos de anotações de Leonardo da Vinci são difíceis de ler por causa de um hábito curioso do autor. Que hábito é esse?",
    "resposta": "Escrita espelhada",
    "distratores": [
      "Código numérico",
      "Escrita em grego",
      "Tinta invisível"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Leonardo_da_Vinci"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Leonardo_da_Vinci",
        "situacao": "ok",
        "texto": "Leonardo di ser Piero da Vinci (15 April 1452 – 2 May 1519), better known as Leonardo da Vinci, was an Italian polymath of the High Renaissance who was active as a painter, draughtsman, engineer, scientist, theorist, sculptor, and architect. While his fame initially rested on his achievements as a painter, he has also become known for his notebooks, in which he made drawings and notes on a variety\n[…]\nTwenty-first-century author Walter Isaacson based much of his biography of Leonardo on thousands of notebook entries, studying the personal notes, sketches, budget notations, and musings of the man whom he considers the greatest of innovators. Isaacson was surprised to discover a \"fun, joyous\" side of Leonardo in addition to his limitless curiosity and creative genius.\n[…]\nIn 1863, fine-arts inspector general Arsène Houssaye received an imperial commission to excavate the site and discovered a partially complete skeleton with a bronze ring on one finger, white hair, and stone fragments bearing the inscriptions \"EO\", \"AR\", \"DUS\", and \"VINC\" –  interpreted as forming \"Leonardus Vinci\".\n[…]\nIn 2019, documents were published revealing that Houssaye had kept the ring and a lock of hair. In 1925, his great-grandson sold these to an American collector. Sixty years later, another American acquired them, leading to their being displayed at the Leonardo Museum in Vinci beginning on 2 May 2019, the 500th anniversary of the artist's death.\n[…]\nLeonardo polyhedron\n[…]\nLeonardo da Vinci's Notebooks\n[…]\nUniversal Leonardo, a database of Leonardo's life and works maintained by Martin Kemp and Marina Wallace\n[…]\nLeonardo da Vinci on the National Gallery website\n[…]\nBiblioteca Leonardiana, online bibliography (in Italian)\n[…]\nWorks by Leonardo da Vinci at Project Gutenberg\n[…]\nWorks by Leonardo da Vinci at LibriVox (public domain audiobooks)\n[…]\nThe Notebooks of Leonardo da Vinci"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Leonardo_da_Vinci",
        "situacao": "ok",
        "texto": "Leonardo di Ser Piero da Vinci (), ou simplesmente Leonardo da Vinci (Anchiano, 15 de abril de 1452 — Amboise, 2 de maio de 1519), foi um polímata nascido na atual Itália, uma das figuras mais importantes do Alto Renascimento, que se destacou como cientista, matemático, engenheiro, inventor, anatomista, pintor, escultor, arquiteto, botânico, poeta e músico. É ainda conhecido como o precursor da av\n[…]\nJuntamente com Alberti, Leonardo passou a frequentar o lar dos Médici, e através deles conheceu filósofos humanistas como Marsilio Ficino, proponente do neoplatonismo, Cristoforo Landino, autor de comentários sobre os escritos da Antiguidade Clássica, e João Argyropoulos, professor de grego e tradutor das obras de Aristóteles. Outro contemporâneo de Leonardo que também teve seu nome associado à Academia dos Médici foi o jovem e brilhante poeta e filósofo Pico della Mirandola.\n[…]\nEsses cadernos – originalmente folhas soltas de diferentes tipos e tamanhos – foram em grande parte confiados ao discípulo e herdeiro de Leonardo, Francesco Melzi, após a morte do mestre. Estes deveriam ser publicados, uma tarefa de dificuldade esmagadora devido ao seu escopo e à escrita idiossincrática de Leonardo. Alguns dos desenhos de Leonardo foram copiados por um artista anônimo milanês para um tratado planejado sobre arte (Codex Huygens, c. 1570).\n[…]\nOs cadernos são, em sua maioria, escritos de forma invertida (da direita para a esquerda). A razão pode ter sido mais uma oportunidade prática, do que por razões de sigilo como muitas vezes é sugerido. Sendo Leonardo provavelmente canhoto, é possível que lhe era mais fácil escrever da direita para a esquerda.\n[…]\nA admiração por Leonardo continuou comandada a partir de pintores, críticos e historiadores, refletida em muitas outras homenagens escritas.\n[…]\nLeonardo da Vinci no Projeto Gutenberg\n[…]\nObras de ou sobre Leonardo da Vinci no Internet Archive",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Leonardo da Vinci",
      "descricao": "Pintor, inventor e cientista renascentista italiano, autor da Mona Lisa e de A Última Ceia, que viveu de 1452 a 1519."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Destes grandes nomes do Renascimento italiano, qual nasceu primeiro?",
    "resposta": "Leonardo da Vinci",
    "distratores": [
      "Michelangelo",
      "Rafael",
      "Ticiano"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Leonardo_da_Vinci",
      "https://en.wikipedia.org/wiki/Michelangelo",
      "https://en.wikipedia.org/wiki/Raphael",
      "https://en.wikipedia.org/wiki/Titian"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Leonardo_da_Vinci",
        "situacao": "ok",
        "texto": "Leonardo di ser Piero da Vinci (15 April 1452 – 2 May 1519), better known as Leonardo da Vinci, was an Italian polymath of the High Renaissance who was active as a painter, draughtsman, engineer, scientist, theorist, sculptor, and architect. While his fame initially rested on his achievements as a painter, he has also become known for his notebooks, in which he made drawings and notes on a variety\n[…]\nThe 19th century brought a particular admiration for Leonardo's genius, causing Henry Fuseli to write in 1801: \"Such was the dawn of modern art, when Leonardo da Vinci broke forth with a splendour that distanced former excellence: made up of all the elements that constitute the essence of genius...\" This is echoed by A. E. Rio who wrote in 1861: \"He towered above all other artists through the strength and the nobility of his talents.\"\n[…]\nIn 1863, fine-arts inspector general Arsène Houssaye received an imperial commission to excavate the site and discovered a partially complete skeleton with a bronze ring on one finger, white hair, and stone fragments bearing the inscriptions \"EO\", \"AR\", \"DUS\", and \"VINC\" –  interpreted as forming \"Leonardus Vinci\".\n[…]\nIn 2019, documents were published revealing that Houssaye had kept the ring and a lock of hair. In 1925, his great-grandson sold these to an American collector. Sixty years later, another American acquired them, leading to their being displayed at the Leonardo Museum in Vinci beginning on 2 May 2019, the 500th anniversary of the artist's death.\n[…]\nLeonardo da Vinci's Notebooks\n[…]\nUniversal Leonardo, a database of Leonardo's life and works maintained by Martin Kemp and Marina Wallace\n[…]\nLeonardo da Vinci on the National Gallery website\n[…]\nBiblioteca Leonardiana, online bibliography (in Italian)\n[…]\nWorks by Leonardo da Vinci at Project Gutenberg\n[…]\nWorks by Leonardo da Vinci at LibriVox (public domain audiobooks)\n[…]\nThe Notebooks of Leonardo da Vinci"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Michelangelo",
        "situacao": "ok",
        "texto": "Michelangelo di Lodovico Buonarroti Simoni (6 March 1475 – 18 February 1564), known mononymously as Michelangelo, was an Italian sculptor, painter, architect, and poet of the High Renaissance. He was born in the Republic of Florence but was mostly active in Rome from his 30s onwards. His work was inspired by models from classical antiquity and had a lasting influence on Western art.\n[…]\nA team of consultants, including Botticelli, Leonardo da Vinci, Filippino Lippi, Pietro Perugino, Lorenzo di Credi, Antonio and Giuliano da Sangallo, Andrea della Robbia, Cosimo Rosselli, Davide Ghirlandaio, Piero di Cosimo, Andrea Sansovino and Michelangelo's dear friend Granacci, was called together to decide upon its placement, ultimately the Piazza della Signoria, in front of the Palazzo Vecchio.\n[…]\nWith the completion of the David came another commission. In early 1504 Leonardo da Vinci had been commissioned to paint The Battle of Anghiari in the council chamber of the Palazzo Vecchio, depicting the battle between Florence and Milan in 1440. Michelangelo was then commissioned to paint the Battle of Cascina. The two paintings are very different: Leonardo depicts soldiers fighting on horseback, while Michelangelo has soldiers being ambushed as they bathe in the river.\n[…]\nMichelangelo, with Leonardo da Vinci and Raphael, is one of the three giants of the Florentine High Renaissance. Although their names are often cited together, Michelangelo was younger than Leonardo by 23 years, and eight years older than Raphael. Because of his reclusive nature, he had little to do with either artist and outlived both of them by more than 40 years. Michelangelo took few sculpture students.\n[…]\nItalian Renaissance sculpture\n[…]\nItalian Renaissance painting"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Raphael",
        "situacao": "ok",
        "texto": "Raffaello Sanzio da Urbino (Italian: [raffaˈɛllo ˈsantsjo da urˈbiːno]; March 28 or 6 April 1483 – 6 April 1520), now generally known in English as Raphael (UK:  RAF-ay-əl, US:  RAF-ee-əl, RAY-fee-, RAH-fy-EL), was an Italian painter and architect of the High Renaissance. His work is admired for its clarity of form, ease of composition, and visual achievement of the Neoplatonic ideal of human gran\n[…]\nTogether with Leonardo da Vinci and Michelangelo, he forms the traditional trinity of great masters of that period.\n[…]\nAs earlier with Perugino and others, Raphael was able to assimilate the influence of Florentine art, whilst keeping his own developing style. Frescos in Perugia of about 1505 show a new monumental quality in the figures which may represent the influence of Fra Bartolomeo, who Vasari says was a friend of Raphael. But the most striking influence in the work of these years is Leonardo da Vinci, who returned to the city from 1500 to 1506.\n[…]\nBy 1900, Raphael's popularity was surpassed by Michelangelo and Leonardo, perhaps as a reaction against the etiolated Raphaelism of 19th-century academic artists such as Bouguereau. Although art historian Bernard Berenson in 1952 termed Raphael the \"most famous and most loved\" master of the High Renaissance, art historians Leopold and Helen Ettlinger say that Raphael's lesser popularity in the 20th century is made obvious by \"the contents of art library shelves ...\n[…]\nIn contrast to volume upon volume that reproduce yet again detailed photographs of the Sistine Ceiling or Leonardo's drawings, the literature on Raphael, particularly in English, is limited to only a few books\". They conclude, nonetheless, that \"of all the great Renaissance masters, Raphael's influence is the most continuous.\"\n[…]\nPon, Lisa, Raphael, Dürer, and Marcantonio Raimondi, Copying and the Italian Renaissance Print, 2004, Yale UP, ISBN 978-0-300-09680-4"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Leonardo_da_Vinci",
        "situacao": "ok",
        "texto": "Leonardo di Ser Piero da Vinci (), ou simplesmente Leonardo da Vinci (Anchiano, 15 de abril de 1452 — Amboise, 2 de maio de 1519), foi um polímata nascido na atual Itália, uma das figuras mais importantes do Alto Renascimento, que se destacou como cientista, matemático, engenheiro, inventor, anatomista, pintor, escultor, arquiteto, botânico, poeta e músico. É ainda conhecido como o precursor da av\n[…]\nLeonardo nasceu em 15 de abril de 1452, \"na terceira hora da noite\", de um sábado, no vilarejo de Anchiano, na comuna italiana de Vinci, na Toscana, situada no vale do rio Arno, dentro do território dominado à época por Florença. Era filho ilegítimo de Messer Piero Fruosino di Antonio da Vinci, um notário florentino e Caterina di Meo Lippi, uma órfã de 15 anos, camponesa.\n[…]\nLeonardo da Vinci nasceu no seio de uma família cujas posses equivaliam à riqueza das famílias que hoje chamamos classe-média, instruída e altruísta. Jovem, Leonardo revelou desde cedo uma aptidão genial para o desenho, área em que, tecnicamente, mais se destacou, pelo menos na sua carreira prematura.\n[…]\nEm Milão, o primeiro registo de Leonardo da Vinci é um contrato de uma Confraria religiosa intitulada Imaculada Conceição, datado de 25 de abril de 1483, para a pintura de um retábulo para abrilhantar o altar da capela de São Francisco, o Grande. O resultado seria o terceiro mais importante trabalho pictórico do artista, A Virgem dos Rochedos.\n[…]\nAspectos do seu trabalho sobre os estudos de anatomia, luz e de paisagem foram montados para a publicação por seu pupilo Francesco Melzi e, finalmente publicado como Trattato della Pittura de Leonardo da Vinci, postumamente na França e na Itália em 1651, e na Alemanha em 1724, com gravuras baseadas em desenhos do pintor clássico Nicolas Poussin.\n[…]\nCódice de Madri (Leonardo da Vinci)\n[…]\nLeonardo da Vinci no Projeto Gutenberg\n[…]\nObras de ou sobre Leonardo da Vinci no Internet Archive",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Caravaggio",
      "descricao": "Pintor barroco italiano, nascido Michelangelo Merisi, mestre do claro-escuro, que viveu de 1571 a 1610."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Que nome recebe o estilo de contrastes violentos entre sombra profunda e luz forte, como de holofote, que Caravaggio levou ao extremo?",
    "resposta": "Tenebrismo",
    "distratores": [
      "Sfumato",
      "Pontilhismo",
      "Maneirismo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Tenebrism",
      "https://en.wikipedia.org/wiki/Caravaggio"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tenebrism",
        "situacao": "ok",
        "texto": "Tenebrism, from Italian tenebroso ('dark, gloomy, mysterious'), also occasionally called dramatic illumination, is a style of painting using especially pronounced chiaroscuro, where there are violent contrasts of light and dark, and where darkness becomes a dominating feature of the image. The technique was developed to add drama to an image through a spotlight effect, and is common in Baroque pai\n[…]\nTenebrism is used only to obtain a dramatic impact while chiaroscuro is a broader term, also covering the use of less extreme contrasts of light to enhance the illusion of three-dimensionality.\n[…]\nAmong the best known tenebrist artists are Italian, Dutch and Spanish followers of Caravaggio. These include the Italian Baroque follower of Caravaggio, Artemisia Gentileschi, who was an outstanding exponent of tenebrism. Other exponents include the Dutch painters of the Utrecht School and the Spanish painters Francisco Ribalta, Jusepe de Ribera, and their followers, with the term most often being applied to these painters.\n[…]\nTenebrism is sometimes applied to other 17th-century painters in what has been called the \"candlelight tradition\". These include Georges de La Tour, who painted many works illuminated with a single candle, Trophime Bigot, Gerrit van Honthorst, and Rembrandt. In Flanders Adam de Coster was recognized as a leading tenebrist who excelled in scenes in which a single candle has its light blocked by an object. The Dutch artist Godfried Schalcken painted many candle-lit scenes.\n[…]\nTenebrism at Art Lexicon\n[…]\nJusepe de Ribera, 1591–1652, a full text exhibition catalog from The Metropolitan Museum of Art, which includes material on Ribera and tenebrism"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Caravaggio",
        "situacao": "ok",
        "texto": "Michelangelo Merisi da Caravaggio (also Michele Angelo Merigi or Amerighi da Caravaggio; 29 September 1571 – 18 July 1610), known mononymously as Caravaggio, was an Italian painter active in Rome for a significant portion of his artistic life. He began his apprenticeship in Milan in 1584, and during the final four years of his life, he moved between Naples, Malta, and Sicily.\n[…]\nCaravaggio employed close physical observation with a dramatic use of chiaroscuro that came to be known as tenebrism. He made the technique a dominant stylistic element, transfixing subjects in bright shafts of light and darkening shadows. Caravaggio vividly expressed crucial moments and scenes, often featuring violent struggles, torture, and death. He worked rapidly with live models, preferring to forgo drawings and work directly on the canvas.\n[…]\nHis effect on the new Baroque style that emerged from Mannerism was profound. His influence can be seen directly or indirectly in the work of Peter Paul Rubens, Jusepe de Ribera, Gian Lorenzo Bernini, Velázquez and Rembrandt, as well as many lesser-known artists. Artists most deeply influenced by him were called the \"Caravaggisti\" (or \"Caravagesques\"), as well as tenebrists or tenebrosi (\"shadowists\").\n[…]\nCaravaggio's innovation was a radical naturalism that combined close physical observation with a dramatic, even theatrical, use of chiaroscuro known as tenebrism (the shift from light to dark with little intermediate value).\n[…]\nCaravaggio's tenebrism (a heightened chiaroscuro) brought high drama to his subjects, while his acutely observed realism brought a new level of emotional intensity. Opinion among his artist peers was polarized.\n[…]\nChristiansen, Keith. Caravaggio (Michelangelo Merisi) (1571–1610) and His Followers The Metropolitan Museum of Art, October 1, 2003.\n[…]\nCaravaggio, Michelangelo Merisi da Caravaggio WebMuseum, Paris webpage"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tenebrismo",
        "situacao": "ok",
        "texto": "Tenebrismo foi uma tendência pictórica nascida no Barroco que se perpetuou irregularmente até o Romantismo. Seu nome deriva de tenebra (treva, em latim), e é uma radicalização do princípio do chiaroscuro. Teve precedentes no Renascimento desenvolveu-se com maior força a partir da obra do italiano Caravaggio, sendo praticada também por outros artistas da Espanha, Países Baixos e França.\n[…]\nComo corrente estilística teve curta duração, mas em termos de técnica representou uma importante conquista, que foi incorporada à história da pintura ocidental. Por vezes o Tenebrismo é usado como sinônimo de Caravaggismo, mas não são coisas idênticas.\n[…]\nO tenebrismo é usado apenas para obter um impacto dramático, enquanto o claro-escuro é um termo mais amplo, abrangendo também o uso de contrastes de luz menos extremos para aumentar a ilusão de tridimensionalidade. Os intensos contrastes de luz e sombra emprestam um aspecto monumental aos personagens, e embora exagerada, é uma iluminação que aumenta a sensação de realismo.\n[…]\nCaravaggio\n[…]\nMuñoz, J. M. Carrascal. Tenebrismo. Gran Enciclopedia Rialp. [1]",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Caravaggio",
      "descricao": "Pintor barroco italiano, nascido Michelangelo Merisi, mestre do claro-escuro, que viveu de 1571 a 1610."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Qual destes mestres da pintura italiana teve a vida mais curta, morrendo aos trinta e oito anos?",
    "resposta": "Caravaggio",
    "distratores": [
      "Ticiano",
      "Michelangelo",
      "Leonardo da Vinci"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Caravaggio",
      "https://en.wikipedia.org/wiki/Titian"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Caravaggio",
        "situacao": "ok",
        "texto": "Michelangelo Merisi da Caravaggio (also Michele Angelo Merigi or Amerighi da Caravaggio; 29 September 1571 – 18 July 1610), known mononymously as Caravaggio, was an Italian painter active in Rome for a significant portion of his artistic life. He began his apprenticeship in Milan in 1584, and during the final four years of his life, he moved between Naples, Malta, and Sicily.\n[…]\nCaravaggio (Michelangelo Merisi or Amerighi) was born in Milan, where his father, Fermo (Fermo Merixio), was a household administrator and architect-decorator to the marquess of Caravaggio, a town 35 km (22 mi) to the east of Milan and south of Bergamo. It was previously assumed that he had been born in Caravaggio. In 1576 the family moved to Caravaggio to escape a plague that ravaged Milan, and Caravaggio's father and grandfather both died there on the same day in 1577.\n[…]\nIn the 1920s, art critic Roberto Longhi brought Caravaggio's name once more to the foreground and placed him in the European tradition: \"Ribera, Vermeer, La Tour and Rembrandt could never have existed without him. And the art of Delacroix, Courbet and Manet would have been utterly different\". The influential Bernard Berenson agreed: \"With the exception of Michelangelo, no other Italian painter exercised so great an influence.\"\n[…]\n\"Michelangelo Merisi, son of Fermo di Caravaggio – in painting not equal to a painter, but to Nature itself – died in Port' Ercole – betaking himself hither from Naples – returning to Rome – 15th calend of August – In the year of our Lord 1610 – He lived thirty-six years nine months and twenty days – Marzio Milesi, Jurisconsult – Dedicated this to a friend of extraordinary genius.\"\n[…]\nChristiansen, Keith. Caravaggio (Michelangelo Merisi) (1571–1610) and His Followers The Metropolitan Museum of Art, October 1, 2003.\n[…]\nCaravaggio, Michelangelo Merisi da Caravaggio WebMuseum, Paris webpage"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Titian",
        "situacao": "ok",
        "texto": "Tiziano Vecellio (Italian: [titˈtsjaːno veˈtʃɛlljo]; c. 1488/1490 – 27 August 1576), Latinized as Titianus, hence known in English as Titian (  TISH-ən), was an Italian Renaissance painter. The most important artist of Renaissance Venetian painting, he was born in Pieve di Cadore, near Belluno.\n[…]\nAlthough Michelangelo adjudged this piece deficient from his point of view regarding the importance of preliminary drawings for a composition, Titian and his studio produced several versions for other patrons.\n[…]\nThe Italian painter Tintoretto was brought when he was very young to Titian's studio by his father. Tom Nichols says Tintoretto probably entered Titian's workshop during the period of 1530–1539, but only for a very brief time, and that he likely switched to another Venetian studio.\n[…]\nRidolfi tells in his Life of Tintoretto (1642) that after being cast out of Titian's studio, the young Tintoretto realized he could \"become a painter by studying the canvases of Titian and the reliefs of Michelangelo Buonarroti\". To remind himself of this aspiration he wrote on the walls of his rooms a motto for his striving: \"il disegno di Michelangelo e il colorito di Tiziano\" (\"Michelangelo's design and Titian's colour\").\n[…]\nGould, Cecil, The Sixteenth Century Italian Schools, National Gallery Catalogues, London, 1975, ISBN 0-947645-22-5\n[…]\nPenny, Nicholas, National Gallery Catalogues (new series): The Sixteenth Century Italian Paintings, Volume II, Venice 1540–1600, 2008, National Gallery Publications Ltd, ISBN 1-85709-913-3\n[…]\nGoffen, Rona. Renaissance Rivals: Michelangelo, Leonardo, Raphael, Titian. Yale University Press, 2002. ISBN 978-0300094343\n[…]\nWallace, William E. Michelangelo and Titian: A Tale of Rivalry and Genius. Princeton University Press, 2026. ISBN 978-0691266572"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Caravaggio",
        "situacao": "ok",
        "texto": "Michelangelo Merisi da Caravaggio (Milão, 29 de setembro de 1571 – Porto Ercole, 18 de julho de 1610), conhecido mononimamente como Caravaggio (pronúncia italiana: [karaˈvadd͡ʒo]), foi um dos mais notáveis pintores da escola lombarda do início do Barroco. Os seus primeiros anos são pouco conhecidos.\n[…]\nO historiador de arte italiano Roberto Longhi foi o primeiro a pesquisar as fontes da cultura visual de Caravaggio estudando as suas pinturas. Segundo ele, o desenvolvimento do estilo de Caravaggio terá sido consequência da influência de certos mestres lombardos, mais precisamente dos que actuaram na região de Bérgamo, Bréscia, Cremona e até Milão: Foppa e Borgognone no século anterior, depois Lotto, Savoldo, Moretto e Moroni (que Longhi descreve como \"pré-caravaggistas\").\n[…]\nAo contrário das práticas em voga na época, Caravaggio evitou as gradações dentro de cada tom e não teve medo de justapor abruptamente cores saturadas. É notória a mudança no momento da concretização das pinturas na Capela Cerasi, com o uso de uma paleta de inspiração lombarda passando a depender mais de cores primárias; a evolução nesta área deve-se também ao refinamento da coordenação entre as cores e a sua iluminação.\n[…]\nJá durante a vida de Caravaggio, as suas ideias e técnicas foram retomadas por diversos pintores de diferentes origens europeias, mas todos reunidos em Roma, muitas vezes agrupados sob o nome de Caravaggescos, devido ao êxito das pinturas do mestre, bem como às variantes posteriormente feitas para colecionadores, mas também por causa do seu elevado preço.\n[…]\nO flamengo Rubens, por exemplo, inspirou-se tanto na pintura italiana quanto em Caravaggio, sem contudo imitá-la; outros como o romano Orazio Borgianni ou o napolitano Caracciolo reaproximaram-se consideravelmente das intenções do mestre.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Anita Malfatti",
      "descricao": "Pintora modernista brasileira, que viveu de 1889 a 1964 e fez uma polêmica exposição em São Paulo em 1917."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Anita Malfatti nasceu com uma atrofia no braço e na mão direita. Como ela fez para pintar?",
    "resposta": "Usava a mão esquerda",
    "distratores": [
      "Pintava com a boca",
      "Usava pincel amarrado",
      "Pintava com os pés"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Anita_Malfatti"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Anita_Malfatti",
        "situacao": "ok",
        "texto": "Anita Catarina Malfatti (São Paulo, 2 de dezembro de 1889 — São Paulo, 6 de novembro de 1964) foi uma pintora, desenhista, gravadora, ilustradora e professora ítalo-brasileira. Anita Malfatti era uma pessoa com deficiência física. É considerada pioneira da Arte Moderna no Brasil.\n[…]\nFilha do engenheiro italiano Samuele Malfatti e da pintora e poliglota norte-americana de origem alemã Eleonora Elizabeth \"Betty\" Krug, Anita Malfatti nasceu na cidade de São Paulo, em 2 de dezembro de 1889, sendo a segunda filha do casal. Nasceu com deficiência congênita no braço direito e, por esse motivo, aos três anos de idade, foi submetida a uma cirurgia na cidade de Lucca, na Itália, na esperança de corrigir a atrofia. Entretanto, não houve recuperação total dos movimentos.\n[…]\nVoltando ao Brasil, teve o apoio da norte americana Miss Browne, amiga da família, no desenvolvimento da escrita e aprendizado do desenho com sua mão esquerda.\n[…]\nMuitas de suas obras foram devolvidas, outras quase destruídas. Anita mergulhou em profunda tristeza e isolou-se de todos. Suprimiu sua inquietação artística, retomando, em 1919 os estudos acadêmicos.As críticas severas e reações conservadoras, todavia, provocaram reação de jovens literatos e artistas visuais, como Oswald de Andrade, Menotti del Picchia e Emiliano Di Cavalcanti em defesa de Malfatti.\n[…]\nAnita Malfatti faleceu no dia 6 de novembro de 1964. Foi sepultada no Cemitério dos Protestantes.\n[…]\nMinissérie Um Só Coração (2004), de Maria Adelaide Amaral veiculada pela Rede Globo, Anita Malfatti, foi representada pela atriz Betty Gofman.\n[…]\nDocumentário Anita Malfatti de Luzia Portinari Greggio. Recebeu o Prêmio Estímulo de Curta-metragem da Secretaria de Cultura do Estado de São Paulo em 2001.\n[…]\nInstituto Anita Malfatti"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Vincent van Gogh",
      "descricao": "Pintor pós-impressionista holandês, autor de A Noite Estrelada e Os Girassóis, que viveu de 1853 a 1890."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Antes de se dedicar à pintura, Vincent van Gogh tentou outra vocação, vivendo entre mineiros de carvão na Bélgica. Que vocação era essa?",
    "resposta": "Pregador religioso",
    "distratores": [
      "Médico de aldeia",
      "Professor de escola",
      "Engenheiro de minas"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Vincent_van_Gogh"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Vincent_van_Gogh",
        "situacao": "ok",
        "texto": "Vincent Willem van Gogh (Dutch: [ˈvɪnsɛnt ˈʋɪləɱ vɑŋ ˈɣɔx] ; 30 March 1853 – 29 July 1890) was a Dutch Post-Impressionist painter who is among the most famous and influential figures in the history of Western art. In just over a decade he created about 2,100 artworks, including around 860 oil paintings, most of them in the last two years of his life.\n[…]\nBorn into an upper-middle-class family in Zundert, Van Gogh drew as a child and was serious, quiet and thoughtful. As a young man he worked as an art dealer, often travelling, but became depressed after he was transferred to London. He turned to religion, and spent time as a Protestant missionary in southern Belgium. He drifted in ill health and solitude before taking up painting in 1881, having moved back home with his parents.\n[…]\nTo support his religious conviction and his desire to become a pastor, in 1877, the family sent him to live with his uncle Johannes Stricker, a respected theologian, in Amsterdam. Van Gogh prepared for the University of Amsterdam theology entrance examination; he failed the exam and left his uncle's house in July 1878. He undertook, but also failed, a three-month course at a Protestant missionary school in Laken, near Brussels.\n[…]\nHis renditions of the sower, at first copied from Jean-François Millet, reflect the influence of Thomas Carlyle and Friedrich Nietzsche's thoughts on the heroism of physical labour, as well as Van Gogh's religious beliefs: the sower as Christ sowing life beneath the hot sun. These were themes and motifs he returned to often to rework and develop.\n[…]\nVincent van Gogh Archived 20 September 2017 at the Wayback Machine, teaching resource on Van Gogh\n[…]\nWorks by Vincent van Gogh at Project Gutenberg\n[…]\nWorks by or about Vincent van Gogh at the Internet Archive\n[…]\nWorks by Vincent van Gogh at LibriVox (public domain audiobooks)\n[…]\nVincent van Gogh at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Vincent_van_Gogh",
        "situacao": "ok",
        "texto": "Vincent Willem van Gogh (neerlandês: [ˈvɪnsɛnt ˈʋɪləm vɑn ˈɣɔx] ); Zundert, 30 de março de 1853 – Auvers-sur-Oise, 29 de julho de 1890) foi um pintor pós-impressionista neerlandês. Considerado uma das figuras mais famosas e influentes da história da arte ocidental, criou mais de dois mil trabalhos ao longo de pouco mais de uma década, incluindo 860 pinturas a óleo, grande parte das quais, concluíd\n[…]\nNascido numa família de classe média alta, Van Gogh começou a desenhar ainda criança, sendo descrito como uma pessoa séria, quieta e pensativa. Trabalhou como vendedor de arte quando jovem e viajava frequentemente. Porém, entrou em depressão depois de ser transferido para Londres. Eventualmente, Van Gogh acabou por se voltar para a religião, tendo passado algum tempo como missionário protestante na Bélgica.\n[…]\nNuma tentativa de apoiarem as suas convicções religiosas e o seu desejo de se tornar pastor, a sua família enviou-o para Amsterdão em 1877 para viver com seu tio Johannes Stricker, um respeitado teólogo. Van Gogh preparou-se para o exame de teologia da Universidade de Amsterdão, porém, não conseguiu passar e deixou a casa do seu tio em julho do ano seguinte. Ele ainda participou e também falhou num curso de três meses numa escola missionária protestante em Laeken, na Bélgica.\n[…]\nSuas representações do semeador, inicialmente copiadas de Jean-François Millet, refletem as crenças religiosas de Van Gogh: o semeador é Cristo semeando a vida sob o sol escaldante. Estes eram temas e motivos condutores que ele frequentemente revisitou e retrabalhou. Suas pinturas de flores eram repletas de simbolismos, porém criou uma própria iconografia em vez de empregar a cristã, onde a vida é vivida sob o sol e o trabalho é uma alegoria da vida.\n[…]\nVincent van Gogh (em inglês) na Galeria Nacional de Arte\n[…]\nObras de Vincent van Gogh (em inglês) no Internet Archive",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Claude Monet",
      "descricao": "Pintor impressionista francês, autor de Impressão, Nascer do Sol e da série das Ninfeias, que viveu de 1840 a 1926."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Entre estes pintores impressionistas franceses, qual chegou à idade mais avançada?",
    "resposta": "Claude Monet",
    "distratores": [
      "Pierre-Auguste Renoir",
      "Edgar Degas",
      "Alfred Sisley"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Claude_Monet",
      "https://en.wikipedia.org/wiki/Edgar_Degas",
      "https://en.wikipedia.org/wiki/Pierre-Auguste_Renoir"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Claude_Monet",
        "situacao": "ok",
        "texto": "Oscar-Claude Monet (UK: , US: ; French: [klod mɔnɛ]; 14 November 1840 – 5 December 1926) was a French painter and founder of Impressionism who is seen as a key precursor to modernism, especially in his attempts to paint nature as he perceived it. During his long career, he was the most consistent and prolific practitioner of Impressionism's philosophy of expressing one's perceptions of nature, esp\n[…]\nMonet's home, garden, and water lily pond were bequeathed by Michel to the French Academy of Fine Arts (part of the Institut de France) in 1966. Through the Fondation Claude Monet, the house and gardens were opened for visits in 1980, following restoration. In addition to souvenirs of Monet and other objects of his life, the house contains his collection of Japanese woodcut prints, which had a pronounced influence on his art.\n[…]\nOn 14 November 2001, a Google Doodle was made for Claude Monet's 161st birthday, depicting the Google logo in Monet's signature style. It was the first Google Doodle made for someone's birthday.\n[…]\nA sympathetic portrait of Claude Monet can be found in R. W. Meek's historical fiction novel series The Dream Collector, both in Book I and Book II. Monet's documented attack of hysterical blindness is reimagined and cured through hypnosis by the dream collector, Julie Forette.\n[…]\nList of paintings by Claude Monet\n[…]\nWildenstein, Daniel (1974–1991). Claude Monet : biographie et catalogue raisonné (in French). Vol. I–V. Lausanne; Paris: Wildenstein Institute and La Bibliothèque des Arts.\n[…]\nClaude Monet at the Museum of Modern Art\n[…]\nClaude Monet Ministère de la culture et de la communication\n[…]\nClaude Monet, Joconde, Portail des collections des musées de France\n[…]\nClaude Monet at  Guggenheim.org\n[…]\nClaude Monet at the National Gallery of Art\n[…]\nMonet: The Late Years exhibition at Kimbell Art Museum\n[…]\nClaude Monet: The Revised Catalogue Raisonné, The Pastels\n[…]\nClaude Monet Research Archives (1901–1987)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Edgar_Degas",
        "situacao": "ok",
        "texto": "Edgar Degas (UK: , US: ; born Hilaire-Germain-Edgar De Gas, French: [ilɛːʁ ʒɛʁmɛ̃ ɛdɡaʁ də ɡa]; 19 July 1834 – 27 September 1917) was a French Impressionist artist famous for his pastel drawings and oil paintings.\n[…]\nBetween 1874 and 1886, they mounted eight art shows, known as the Impressionist Exhibitions. Degas took a leading role in organizing the exhibitions, and he showed his work in all but one of them, despite his persistent conflicts with others in the group. He had little in common with Monet and the other landscape painters in the group, whom he mocked for painting outdoors.\n[…]\nRecognized as an important artist in his lifetime, Degas is now considered \"one of the founders of Impressionism\". Though his work crossed many stylistic boundaries, his involvement with the other major figures of Impressionism and their exhibitions, his dynamic paintings and sketches of everyday life and activities, and his bold color experiments, served to finally tie him to the Impressionist movement as one of its greatest artists.\n[…]\nIn 1877, Degas invited Mary Cassatt to exhibit in the third Impressionist exhibition. He had admired a portrait (Ida) she exhibited in the Salon of 1874, and the two formed a friendship. They had much in common: they shared similar tastes in art and literature, came from affluent backgrounds, had studied painting in Italy, and both were independent, never marrying.\n[…]\nImpressionism: a centenary exhibition, the Metropolitan Museum of Art, December 12, 1974 – February 10, 1975, fully digitized text from The Metropolitan Museum of Art libraries\n[…]\nEdgar Degas: Multi-Media Artist in the Age of Impressionism exhibition at the Clark Art Institute from 13 July – 6 October 2024."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pierre-Auguste_Renoir",
        "situacao": "ok",
        "texto": "Pierre-Auguste Renoir (; French: [pjɛʁ oɡyst ʁənwaʁ]; 25 February 1841 – 3 December 1919) was a leading French Impressionist artist. In his depiction of feminine beauty,  Renoir has been described as \"the final representative of a tradition which runs directly from Rubens to Watteau.\"\n[…]\nIn 1862, he began studying art under Charles Gleyre in Paris. There he met Alfred Sisley, Frédéric Bazille, and Claude Monet. At times, during the 1860s, he did not have enough money to buy paint. Renoir had his first success at the Salon of 1868 with his painting Lise with a Parasol (1867), which depicted Lise Tréhot, his lover at the time.\n[…]\nRenoir was inspired by the style and subject matter of the previous modern painters Camille Pissarro and Édouard Manet. After a series of rejections by the Salon juries, he joined forces with Monet, Sisley, Pissarro, and several other artists to mount the First Impressionist Exhibition in April 1874, in which Renoir displayed six paintings. Although the critical response to the exhibition was largely unfavorable, Renoir's work was comparatively well received.\n[…]\nIn the late 1860s, through the practice of painting light and water en plein air (outdoors), he and his friend Claude Monet discovered that the color of shadows is not brown or black, but the reflected color of the objects surrounding them, an effect known today as diffuse reflection. Several pairs of paintings exist in which Renoir and Monet worked side-by-side, depicting the same scenes (La Grenouillère, 1869).\n[…]\nClaude Roger-Marx (1952). Les Lithographies de Renoir. Monte-Carlo: Andre Sauret.\n[…]\nRenoir, Impressionism, and Full-Length Painting,' An Introduction to the Exhibition on YouTube, (6:14) Frick Collection"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Claude_Monet",
        "situacao": "ok",
        "texto": "Oscar-Claude Monet (Paris, 14 de novembro de 1840 — Giverny, 5 de dezembro de 1926) foi um pintor francês e o mais célebre entre os pintores impressionistas.\n[…]\nO termo Impressionismo surgiu a partir de uma crítica a um dos primeiros quadros de Monet, \"Impressão, nascer do sol\", feita à obra pelo pintor e escritor Louis Leroy: \"Impressão, nascer do Sol” – eu bem o sabia! Pensava eu, justamente, se estou impressionado é porque há lá uma impressão. E que liberdade, que suavidade de pincel! Um papel de parede é mais elaborado que esta cena marinha.\n[…]\nClaude Monet nasceu em Paris, em [14 de novembro] de 1840 na 9º arrondissement. Seu pai, Claude - Auguste, tinha uma mercearia modesta. Aos cinco anos, sua família mudou-se para Le Havre, na Normandia. Seu pai desejava que Claude continuasse no comércio da família, mas ele desejava pintar. Foi a sua tia Marie-Jeanne Lecadre que o apoiou a seguir a carreira artística, pois ela também foi pintora.\n[…]\nA técnica de Monet para pintar quadros era bastante peculiar para as pessoas e outros artistas que o viam pintando, mas a técnica de Monet desenvolvida na época foi considerada mais tarde como umas das mais belas do mundo, que é o impressionismo, que aparenta ser de perto apenas borrões mas ao distanciar a visão, o quadro se forma nitidamente.\n[…]\nEm 13 de novembro de 2019 a Sotheby's vendeu a pintura de Claude Monet, \"Charing Cross Bridge\", por 27,6 milhões de dólares (25 milhões de euros), em Nova Iorque num leilão de arte impressionista e moderna.\n[…]\nLista de pinturas de Claude Monet\n[…]\nTucker, Paul Hayes Claude Monet: Life and Art Amilcare Pizzi, Italy 1995 ISBN 0-300-06298-2\n[…]\nWikiArt.org: Claude Monet",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Johannes Vermeer",
      "descricao": "Pintor holandês do século dezessete, autor de Moça com Brinco de Pérola e A Leiteira."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Que pintor holandês do século dezessete deixou uma obra tão pequena que hoje se conhecem menos de quarenta quadros dele?",
    "resposta": "Johannes Vermeer",
    "distratores": [
      "Rembrandt",
      "Frans Hals",
      "Jan Steen"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Johannes_Vermeer"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Johannes_Vermeer",
        "situacao": "ok",
        "texto": "Johannes Vermeer ( vər-MEER, vər-MAIR, Dutch: [joːˈɦɑnəs fərˈmeːr]; see below; also known as Jan Vermeer; October 1632 – 15 December 1675) was a Dutch painter who specialized in domestic interior scenes of middle-class life. He is considered one of the greatest painters of the Dutch Golden Age. During his lifetime, he was a moderately successful provincial genre painter, recognized in Delft and Th\n[…]\nThe influence of Johannes Vermeer on Metsu is unmistakable: the light from the left, the marble floor. (Adriaan Waiboer, however, suggests that Metsu requires more emotional involvement of the viewer.) Vermeer probably competed also with Nicolaes Maes, who produced genre works in a similar style. In 1662, Vermeer was elected head of the guild and was reelected in 1663, 1670, and 1671, evidence that he (like Bramer) was considered an established craftsman among his peers.\n[…]\nIn 1671, Gerrit van Uylenburgh organized the auction of Gerrit Reynst's collection and offered 13 paintings and some sculptures to Frederick William, Elector of Brandenburg. Frederick accused them of being counterfeits and sent 12 back on the advice of Hendrick Fromantiou. Van Uylenburg then organized a counter-assessment, asking a total of 35 painters to pronounce on their authenticity, including Jan Lievens, Melchior de Hondecoeter, Gerbrand van den Eeckhout, and Johannes Vermeer.\n[…]\nLiedtke, Walter (2009). The Milkmaid by Johannes Vermeer. New York, USA: The Metropolitan Museum of Art. ISBN 978-1-58839-344-9.\n[…]\nSheldon, Libby; Costaros, Nicola (February 2006). \"Johannes Vermeer's 'Young woman seated at a virginal\". The Burlington Magazine (1235) (vol. CXLVIII ed.).\n[…]\nOnline Exhibition of Johannes Vermeer\n[…]\nJohannes Vermeer, biography at Artble\n[…]\nEssential Vermeer, website dedicated to Johannes Vermeer\n[…]\nJohannes Vermeer in the Encyclopædia Britannica\n[…]\nClose to Vermeer 2023 documentary movie directed by Suzanne Raes"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Johannes_Vermeer",
        "situacao": "ok",
        "texto": "Johannes Vermeer (Delft, 31 de outubro de 1632 – Delft, 15 de dezembro de 1675) foi um pintor holandês especializado em cenas de interiores domésticos da vida da classe média. Ele é considerado um dos maiores pintores da Era de Ouro holandesa. Durante sua vida, ele foi um pintor de gênero provinciano moderadamente bem-sucedido, reconhecido em Delft e Haia. Ele produziu relativamente poucas pintura\n[…]\nVermeer trabalhou lentamente e com muito cuidado, e frequentemente usou pigmentos muito caros. Ele é particularmente conhecido por fazer uso magistral da luz em seu trabalho. \"Quase todas as suas pinturas\", escreveu Hans Koningsberger, \"aparentemente estão situadas em dois cômodos pequenos em sua casa em Delft; elas mostram os mesmos móveis e decorações em vários arranjos e frequentemente retratam as mesmas pessoas, principalmente mulheres.\"\n[…]\nVermeer viveu toda a sua vida na sua terra natal, onde está sepultado na Igreja Velha (Oude Kerk) de Delft.\n[…]\nMorreu muito pobre em 1675. A sua viúva teve de vender todos os quadros que ainda estavam na sua posse ao conselho municipal em troca de uma pequena pensão (uma fonte diz que foi só um quadro: a última obra de Vermeer, intitulada Clio). Depois da sua morte, Vermeer foi esquecido. Por vezes, os seus quadros foram vendidos com a assinatura de outro pintor para lhe aumentar o valor.\n[…]\nFoi só muito recentemente que a grandeza de Vermeer foi reconhecida: em 1866, o historiador de arte Théophile Thoré (pseudónimo de W. Bürger) fez uma declaração nesse sentido, atribuindo 76 pinturas a Vermeer, número esse que foi em breve reduzido por outros estudiosos. No princípio do século XX havia muitos rumores de que ainda existiriam quadros de Vermeer por descobrir.\n[…]\nConhecem-se hoje muito poucos quadros de Vermeer. Só sobrevivem 35 a 40 trabalhos atribuídos ao pintor holandês. Há opiniões contraditórias quanto à autenticidade de alguns quadros.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "El Greco",
      "descricao": "Pintor nascido na Grécia, que fez carreira em Toledo, na Espanha, e viveu de 1541 a 1614."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Destes pintores ativos na Espanha, qual ficou famoso por figuras exageradamente alongadas, que parecem esticadas para o alto?",
    "resposta": "El Greco",
    "distratores": [
      "Diego Velázquez",
      "Francisco de Goya",
      "Bartolomé Esteban Murillo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/El_Greco"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/El_Greco",
        "situacao": "ok",
        "texto": "Doménikos Theotokópoulos (Greek: Δομήνικος Θεοτοκόπουλος, pronounced [ðoˈminikos θeotoˈkopulos]; 1 October 1541 –  7 April 1614), most widely known as El Greco (Spanish pronunciation: [el ˈɣɾeko]; \"The Greek\"), was a Greek painter, sculptor and architect of the Spanish Renaissance, regarded as one of the greatest artists of all time.\n[…]\nAlmost nothing is known about his mother or his first wife, except that they were also Greek. His second wife was a Spaniard. El Greco's older brother, Manoússos Theotokópoulos (1531–1604), was a wealthy merchant and spent the last years of his life (1603–1604) in El Greco's Toledo home.\n[…]\nImportant for his early biography, El Greco, still in Crete, painted his Dormition of the Virgin near the end of his Cretan period, probably before 1567. Three other signed works of \"Domḗnicos\" are attributed to El Greco (Modena Triptych, St. Luke Painting the Virgin and Child, and The Adoration of the Magi).\n[…]\nThe exact number of El Greco's works has been a hotly contested issue. In 1937, a highly influential study by art historian Rodolfo Pallucchini had the effect of greatly increasing the number of works accepted to be by El Greco. Pallucchini attributed to El Greco a small triptych in the Galleria Estense at Modena on the basis of a signature on the painting on the back of the central panel on the Modena triptych (\"Χείρ Δομήνιϰου\", Created by the hand of Doménikos).\n[…]\nSince 1962, the discovery of the Dormition and the extensive archival research has gradually convinced scholars that Wethey's assessments were not entirely correct, and that his catalogue decisions may have distorted the perception of the whole nature of El Greco's origins, development and œuvre. The discovery of the Dormition led to the attribution of three other signed works of \"Doménicos\" to El Greco (Modena Triptych, St."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/El_Greco",
        "situacao": "ok",
        "texto": "Doménikos Theotokópoulos (em grego: Δομήνικος Θεοτοκόπουλος), mais conhecido como El Greco (\"O Grego\"; Heraclião ou Fodele, 1 de outubro de 1541 — Toledo, 7 de abril de 1614), foi um pintor, escultor e arquiteto grego que desenvolveu a maior parte da sua carreira na Espanha. Assinava suas obras com o nome original, ressaltando sua origem.\n[…]\nDiferente de outros artistas cretenses que foram para Veneza, El Greco alterou substancialmente seu estilo e procurou se distinguir pelas novas e incomuns interpretações dos temas religiosos tradicionais. Suas pinturas italianas apresentam forte influência do Renascimento veneziano do período, com figuras ágeis, alongadas, lembrando a Tintoretto e um vigor cromático que o liga a Ticiano. Dos pintores venezianos aprendeu ainda a composição, organizada em paisagens vibrantes e com luz atmosférica.\n[…]\nMas este pintor veio a morrer em 1579; o momento parecia ideal para El Greco.\n[…]\nEm \"A Virgem da Imaculada Conceição\" El Greco pediu para que o retábulo fosse ainda mais alongado em 1,5 pé \"porque assim a forma ficará perfeita e não reduzida, que é a pior coisa que pode acontecer a uma figura\". Uma inovação significante nos trabalhos maduros do pintor é o entrelaçamento entre forma e espaço; uma relação mútua é desenvolvida completamente entre os dois, de modo a unificar a superfície da pintura.\n[…]\nOutra característica do estilo maduro de El Greco é o uso da luz. Como Jonathan Brown observa, \"cada figura parece trazer sua própria iluminação, ou refletir a luz que emana de uma fonte não vista\". Fernando Marias e Agustín Bustamante García, os estudiosos que transcreveram as notas manuscritas de El Greco, estabelecem uma ligação entre o poder que o pintor expressa com a luz às ideias do precedente neoplatonismo cristão.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Primeira Exposição Impressionista",
      "descricao": "Mostra coletiva de Monet, Degas, Renoir, Pissarro e outros, realizada em Paris no antigo estúdio do fotógrafo Nadar, em 1874."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Na primeira exposição impressionista, em Paris, só uma mulher mostrou suas obras ao lado de Monet e Degas. Quem era ela?",
    "resposta": "Berthe Morisot",
    "distratores": [
      "Mary Cassatt",
      "Eva Gonzalès",
      "Marie Bracquemond"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Berthe_Morisot"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Berthe_Morisot",
        "situacao": "ok",
        "texto": "Berthe Marie Pauline Morisot (English:  mor-ee-ZOH, French: [bɛʁt mɔʁizo]; 14 January 1841 – 2 March 1895) was a French painter, printmaker and a member of the circle of painters in Paris who became known as the Impressionists.\n[…]\nMorisot's works are almost always small in scale.\n[…]\nBataille, Marie-Louise; Wildenstein, Georges (1961). Berthe Morisot : Catalogue des peintures, pastels et aquarelles. Paris: Les Beaux-Arts. OCLC 490107208.\n[…]\nShennan, Margaret (1996). Berthe Morisot: The First Lady of Impressionism. Stroud: Sutton Publishing. ISBN 0-7509-2339-3\n[…]\nStuckey, Charles F. and William P. Scott with the assistance of Suzanne G. Lindsay (1987). Berthe Morisot, Impressionist New York: Hudson Hills Press. Review by Leila W. Kinney Art Journal, Vol. 47, No.3 (Autumn 1988), pp. 236-241. Catalogue to exhibition at the National Gallery of Art Washington, 6 September—29 November 1987; Kimbell Art Museum, 12 December 1987—21 February 1988; and Mount Holyoke College Art Museum, 14 March—9 May 1988.\n[…]\nQuotations related to Berthe Morisot at Wikiquote\n[…]\nWorks by or about Berthe Morisot at the Internet Archive\n[…]\nBerthe Morisot at the WebMuseum\n[…]\nBerthe Morisot in American public collections, on the French Sculpture Census website\n[…]\n5 artworks by or after Berthe Morisot at the Art UK site\n[…]\nBerthe Morisot: Woman Impressionist Exhibition at the Musée national des beaux-arts du Québec, 21 June 21 2018 — 23 September 2018.\n[…]\nBerthe Morisot: Woman Impressionist Exhibition at the Barnes Foundation, Philadelphia, 21 October 2018 – 14 January 2019.\n[…]\nBerthe Morisot, Woman Impressionist Exhibition at the Dallas Museum of Art, 24 February 2019 — 26 May 2019.\n[…]\nBerthe Morisot (1841-1895) Exhibition at the Musée d'Orsay, Paris, 18 June — 22 September 2019."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Berthe_Morisot",
        "situacao": "ok",
        "texto": "Berthe Marie Pauline Morisot (francês: [mɔʁizo]; (Bourges, Cher, 14 de janeiro de 1841 – Paris, 2 de março de 1895) foi uma pintora impressionista francesa. Foi descrita por Gustave Geffroy, em 1894 como \"uma das grandes damas do impressionismo\", junto de Marie Bracquemond, Eva Gonzalès e Mary Cassatt.\n[…]\nExpôs seus trabalhos, pela primeira vez, no prestigiado Salão de Paris, em 1864, patrocinado pela Academia de Belas-Artes de Paris. Os seus trabalhos foram selecionados para as exposições seguintes, juntamente com os de Paul Cézanne, Edgar Degas, Claude Monet, Camille Pissarro, Pierre-Auguste Renoir e Alfred Sisley.\n[…]\nBerthe nasceu em Bourges, no seio de uma influente família. Seu pai, Edmé Tiburce Morisot, era o administrador da região de Cher e formado em arquitetura pela École des Beaux-Arts. Sua mãe era Marie-Joséphine-Cornélie Thomas, sobrinha-neta de Jean-Honoré Fragonard, um dos mais prolíficos pintores do Rococó. Berthe tinha duas irmãs, Yves (1838–1893) e Edma (1839–1921), e um irmão mais novo, Tiburce, nascido em 1848. A família mudou-se para Paris em 1852, quando Berthe ainda era criança.\n[…]\nA primeira vez que um quadro de Berthe foi exposto ao grande público foi no Salão de Paris, em 1864, quando a artista tinha 23 anos, com dois quadros retratando paisagens. A partir daí, ela expôs com regularidade no salão, com crítica positivas, até 1873, um ano da grande exposição impressionista. Ela expôs trabalhos na exposição de 1874, perdendo apenas a de 1878 quando sua filha nasceu.\n[…]\nBerthe Morisot faleceu em 2 de março de 1895, em Paris, devido a uma pneumonia decorrente de novo surto da pandemia de gripe de 1889-1890, adquirida quando cuidava de Julie, que também esteve doente. Ela foi sepultada no Cemitério de Passy, em Paris.\n[…]\nWikiArt.org: Berthe Morisot",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Batalha do Avaí (pintura)",
      "descricao": "Quadro de Pedro Américo sobre a batalha de 1868."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Qual destes quadros históricos brasileiros do século dezenove é o maior em tamanho?",
    "resposta": "Batalha do Avaí",
    "distratores": [
      "Batalha dos Guararapes",
      "Independência ou Morte",
      "Primeira Missa no Brasil"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Batalha_do_Avaí_(pintura)"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Batalha_do_Avaí_(pintura)",
        "situacao": "inexistente",
        "texto": ""
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Caverna de Lascaux",
      "descricao": "Caverna no sudoeste da França com pinturas rupestres de animais feitas há cerca de dezessete mil anos."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Nas paredes da caverna de Lascaux há centenas de animais pintados na pré-história. Qual deles aparece mais vezes?",
    "resposta": "Cavalo",
    "distratores": [
      "Bisão",
      "Mamute",
      "Urso"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Lascaux"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lascaux",
        "situacao": "ok",
        "texto": "Lascaux (English:  la-SKOH, US also  lah-SKOH; French: Grotte de Lascaux French pronunciation: [ɡʁɔt də lasko], \"Lascaux Cave\") is a network of caves near the village of Montignac, in the department of Dordogne in southwestern France. Over 600 parietal wall paintings cover the interior walls and ceilings of the cave. The paintings represent primarily large animals, typical local contemporary fauna\n[…]\nNechvatal, Joseph (2005). \"Immersive Excess in the Apse of Lascaux\". Technoetic Arts. 3 (3): 181–192. doi:10.1386/tear.3.3.181/1. ISSN 1477-965X.\n[…]\nB.et G. Delluc (dir.), Le Livre du Jubilé de Lascaux 1940–1990, Société historique et archéologique du Périgord, supplément au tome CXVII, 1990, 155 p., ill.\n[…]\nB. et G. Delluc, 2003: Lascaux retrouvé. Les recherches de l'abbé André Glory, Pilote 24 édition, 368 p., ill.\n[…]\nB. et G. Delluc, 2006: Discovering Lascaux, Sud Ouest, nouvelle édition entièrement revue et très augmentée, 80 p., ill. plans et coupe.\n[…]\nB. et G. Delluc, 2008: Dictionnaire de Lascaux, Sud Ouest, Bordeaux. Plus de 600 entrées et illustrations. Bibliographie (450 références). ISBN 978-2-87901-877-5.\n[…]\nB. et G. Delluc, 2010: Lascaux et la guerre. Une galerie de portraits, Bull. de la Soc. historique et arch. du Périgord, CXXXVI, 2e livraison, 40 p., ill., bibliographie.\n[…]\nA. Glory, 2008: Les recherches à Lascaux (1952–1963). Documents recueillis et présentés par B. et G. Delluc, XXXIXe suppl. à Gallia-Préhistoire, CNRS, Paris.\n[…]\nRigaud, Jean-Philippe (October 1988). \"Art Treasures from the Ice Age: Lascaux Cave\". National Geographic. Vol. 174, no. 4. pp. 482–499. ISSN 0027-9358. OCLC 643483454.\n[…]\nThe microbiology of Lascaux Cave\n[…]\nLascaux Cave Art Symposium The Bradshaw Foundation\n[…]\nHuman Timeline (Interactive) – Smithsonian, National Museum of Natural History (August 2016).\n[…]\nLascaux Symphony by Alan Bush, performed by the Royal Scottish National Orchestra"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lascaux",
        "situacao": "ok",
        "texto": "Lascaux (Inglês [læˈskoʊ] la-SKOH, [USalsolɑːˈskoʊ] lah-SKOH; em francês: Grotte de Lascaux fr, \"Cavernas Lascaux\") é um complexo de cavernas perto da comuna de Montignac, no departamento de Dordonha, no sudoeste da França, famosas por suas pinturas rupestres.\n[…]\nAs paredes da caverna estão pintadas com bovídeos, cavalos, cervos, cabras e felinos, entre outros animais, que correspondem ao registro fóssil do Paleolítico Superior da região.\n[…]\nO Divertículo axial está também ornamentado de bovídeos, junto de cavalos acompanhados por cervos e de cabritos. Um desenho representando um cavalo a fugir foi pintado com giz de manganês a uns 2,50 metros do chão. Alguns animais foram pintados no teto, parecendo saltar de uma a outra parede. Com estas representações, que devem ter precisado do uso de andaimes, entremesclaram-se numerosos signos (bastões, pontos e retângulos).\n[…]\nO Divertículo dos Felinos deve o seu nome a um grupo de felinos, dos quais um parece estar a urinar para marcar o território. De difícil acesso, podem-se ver aqui gravuras de feras de feitura muito ingênua. Encontram-se também outros animais associados a signos, como uma representação de cavalo visto de frente, algo excepcional na arte paleolítica, pois os animais são, em geral, representados de perfil ou com uma perspectiva torcida.\n[…]\nO Poço apresenta a cena mais misteriosa de Lascaux: um homem, com cabeça de pássaro e de sexo erecto, pareça cair, investido talvez por um bisão desventrado por uma azagaia; de lado está representado um objeto alongado sobreposto a uma ave, que talvez seja um propulsor; na esquerda, um rinoceronte parece afastar-se. Na parede oposta, há também representado um cavalo. Dois grupos de signos são de notar nesta composição:",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Rembrandt",
      "descricao": "Pintor holandês do século dezessete, Rembrandt van Rijn, autor de A Ronda Noturna, que viveu de 1606 a 1669."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Qual destes pintores holandeses retratou o próprio rosto cerca de oitenta vezes, entre pinturas, gravuras e desenhos?",
    "resposta": "Rembrandt",
    "distratores": [
      "Johannes Vermeer",
      "Frans Hals",
      "Jan Steen"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Self-portraits_by_Rembrandt",
      "https://en.wikipedia.org/wiki/Rembrandt"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Self-portraits_by_Rembrandt",
        "situacao": "ok",
        "texto": "The dozens of self-portraits by Rembrandt were an important part of his oeuvre. Rembrandt created approaching one hundred self-portraits including over forty paintings, thirty-one etchings and about seven drawings; some remain uncertain as to the identity of either the subject (mostly etchings) or the artist (mostly paintings), or the definition of a portrait.\n[…]\nThen there are 10 \"early studies in etching technique\", most very rare, five \"studies in expression\", which he distinguishes from the three tronies, finished images using Rembrandt's own features in historical costume.\n[…]\nThe Washington red chalk drawing, perhaps the most finished example, is close to the etching B2 in many ways; in both Rembrandt has a cadanette or long curling lock on one side. Since these were \"exclusive to aristocratic circles\", it was probably invented like a piece of costume.\n[…]\nList of paintings by Rembrandt\n[…]\nList of drawings by Rembrandt\n[…]\nList of etchings by Rembrandt\n[…]\nThe Stoning of Saint Stephen, 1625, Museum of Fine Arts of Lyon, regarded as featuring Rembrandt's first self-portrait\n[…]\nRembrandt's prints\n[…]\nClark, Kenneth, An Introduction to Rembrandt, 1978, London, John Murray/Readers Union, 1978\n[…]\n\"Printmaker\": Hinterding, Eric, Luijten, Ger, Royalton-Kisch, Martin, Rembrandt the Printmaker, 2000, British Museum Press/Rijksmuseum, Amsterdam, ISBN 071412625X\n[…]\nSchwartz, Gary, The Complete Etchings of Rembrandt, 1994, Dover, ISBN 0486281817\n[…]\n\"Summary\": Van de Wetering, Ernst, \"Summary\", A Corpus of Rembrandt Paintings, IV, 2005, Rembrandt Research Project, Dordrecht, PDF to download\n[…]\nVan de Wetering, Ernst, Rembrandt: The Painter at Work, Amsterdam University Press, 2000. ISBN 0-520-22668-2\n[…]\nWhite, Christopher, Buvelot, Quentin (eds), Rembrandt by himself, 1999, National Gallery, London/Mauritshuis, The Hague, ISBN 1857092708\n[…]\nComplete Rembrandt Catalogue: Self Portraits"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Rembrandt",
        "situacao": "ok",
        "texto": "Rembrandt Harmenszoon van Rijn (15 July 1606 – 4 October 1669), known mononymously as Rembrandt, was a Dutch Golden Age painter, printmaker, and draughtsman. He is generally considered one of the greatest visual artists in the history of Western art. It is estimated that Rembrandt's surviving works amount to about three hundred paintings, three hundred etchings, and several hundred drawings.\n[…]\nRembrandt Harmenszoon (abbr. Harmensz.) van Rijn was born on 15 July 1606 in Leiden, in the Dutch Republic, now the Netherlands. He was the ninth child born to Harmen Gerritszoon van Rijn and Neeltgen Willemsdochter van Zuijtbrouck. His family was quite well-to-do; his father was a miller and his mother was a baker's daughter. His mother was Catholic, and his father belonged to the Dutch Reformed Church.\n[…]\n\"Rembrandt\" is a modification of the spelling of the artist's first name that he introduced in 1633. The patronymic \"Harmenszoon\" indicates that his father's name is Harmen. \"van Rijn\" indicates that his family lived near the Rhine.\n[…]\nRembrandt's earliest signatures (c. 1625) consisted of an initial \"R\", or the monogram \"RH\" (for Rembrant Harmenszoon), and starting in 1629, \"RHL\" (the \"L\" stood, presumably, for Leiden). In 1632, he used this monogram early in the year, then added his family name to it, \"RHL-van Rijn\" but replaced this form in that same year and began using his first name alone with its original spelling, \"Rembrant\".\n[…]\nRembrandt, a 1940 film\n[…]\nA biography of the artist Rembrandt Harmensz. van Rijn from the National Gallery, London\n[…]\nRembrandt van Rijn, General Resources\n[…]\nReality and Imagination: Rembrandt and the Jews in the Dutch Republic Exhibition at the Museum of Fine Arts, Boston, 15 December 2025 – 1 December 2026.\n[…]\nRembrandt's Lions: Art and Exile in the Dutch Republic. Exhibition at the Morgan Library & Museum in Manhattan, October 23, 2026 through January 31, 2027."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Autorretratos_de_Rembrandt",
        "situacao": "ok",
        "texto": "Rembrandt é um caso singular para a autorretratística. As dezenas de autorretratos que produziu foram uma parte importante de sua obra, e, até a sua morte, nenhum outro artista conhecido havia produzido tantos. Rembrandt criou cerca de cem autorretratos, incluindo mais de quarenta pinturas, trinta e uma gravuras e cerca de sete desenhos; alguns permanecem incertos quanto à identidade do sujeito (p\n[…]\nAo mesmo tempo, cerca de noventa pinturas eram contadas como autorretratos de Rembrandt, mas agora sabe-se que ele fez com que seus alunos copiassem seus próprios autorretratos como parte de seu treinamento. Os estudos modernos, especialmente o Projeto de Pesquisas em Rembrandt, reduziram a contagem de autógrafos para mais de quarenta pinturas, bem como alguns desenhos e trinta e uma águas-fortes, que incluem muitas das imagens mais notáveis do grupo.\n[…]\nSeus autorretratos pintados, gravados e desenhados \"oferecem testemunhos únicos da evolução de sua fisionomia\". Ao questionar até que ponto Rembrandt se assemelhava às suas pinturas, Ernst van de Wetering enfatiza a consistência dos detalhes de um retrato para o outro, o que acentua a impressão de que o espectador quase percebe a personalidade do artista e o reconhece facilmente.\n[…]\nRembrandt retrata suas mãos em detalhes em um autorretrato pintado que agora desapareceu, Autorretrato Desenhando (1656), que é conhecido a partir de cópias que foram feitas, incluindo a pintura Portrait of Rembrandt with Pen, Inkwell and Sketchbook (anônimo, c. 1657w) e especialmente a gravura de maneira negra de Jacob Gole, Retrato de Rembrandt com caneta, tinteiro e caderno de rascunhos (1660, Museu Britânico).\n[…]\nAo optar por representar-se principalmente em trajes históricos, Rembrandt procurou situar-se na tradição do retrato dos antigos mestres, em particular Leiden e Dürer, a quem aspirava imitar como mestre do desenho, da gravura e da pintura.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Rembrandt",
      "descricao": "Pintor holandês do século dezessete, Rembrandt van Rijn, autor de A Ronda Noturna, que viveu de 1606 a 1669."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Em 1656, já consagrado, Rembrandt sofreu um revés que o obrigou a leiloar sua coleção de arte e vender sua casa em Amsterdã. Qual foi?",
    "resposta": "A falência",
    "distratores": [
      "Um incêndio",
      "Uma condenação",
      "Uma epidemia"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Rembrandt"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rembrandt",
        "situacao": "ok",
        "texto": "Rembrandt Harmenszoon van Rijn (15 July 1606 – 4 October 1669), known mononymously as Rembrandt, was a Dutch Golden Age painter, printmaker, and draughtsman. He is generally considered one of the greatest visual artists in the history of Western art. It is estimated that Rembrandt's surviving works amount to about three hundred paintings, three hundred etchings, and several hundred drawings.\n[…]\nRembrandt Harmenszoon (abbr. Harmensz.) van Rijn was born on 15 July 1606 in Leiden, in the Dutch Republic, now the Netherlands. He was the ninth child born to Harmen Gerritszoon van Rijn and Neeltgen Willemsdochter van Zuijtbrouck. His family was quite well-to-do; his father was a miller and his mother was a baker's daughter. His mother was Catholic, and his father belonged to the Dutch Reformed Church.\n[…]\n\"Rembrandt\" is a modification of the spelling of the artist's first name that he introduced in 1633. The patronymic \"Harmenszoon\" indicates that his father's name is Harmen. \"van Rijn\" indicates that his family lived near the Rhine.\n[…]\nRembrandt's earliest signatures (c. 1625) consisted of an initial \"R\", or the monogram \"RH\" (for Rembrant Harmenszoon), and starting in 1629, \"RHL\" (the \"L\" stood, presumably, for Leiden). In 1632, he used this monogram early in the year, then added his family name to it, \"RHL-van Rijn\" but replaced this form in that same year and began using his first name alone with its original spelling, \"Rembrant\".\n[…]\n12 February 2015 – 17 May 2015: Late Rembrandt, The Rijksmuseum, Amsterdam.\n[…]\n18 February 2020 – 30 August 2020: Rembrandt and Amsterdam portraiture, 1590–1670 , Museo Nacional Thyssen-Bornemisza, Madrid.\n[…]\nA biography of the artist Rembrandt Harmensz. van Rijn from the National Gallery, London\n[…]\nRembrandt's house in Amsterdam Site of the Rembrandt House Museum in Amsterdam, with images of many of his etchings\n[…]\nRembrandt van Rijn, General Resources"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rembrandt",
        "situacao": "ok",
        "texto": "Rembrandt Harmenszoon van Rijn (Leida, 15 de julho de 1606 – Amsterdam, 4 de outubro de 1669) foi um pintor e gravurista holandês. É geralmente considerado um dos maiores nomes da história da arte europeia e o mais importante da história holandesa. É considerado, por alguns, como o maior pintor de todos os tempos.\n[…]\nRembrandt vivia além de suas rendas, comprando obras de arte, impressões e raridades, o que supostamente provocou em 1656 um acordo nos tribunais para evitar sua falência, que resultou na venda da maioria de seus quadros e sua imensa coleção de antiguidades. A lista de itens vendidos sobreviveu ao tempo, e relaciona entre outros objetos os bustos de vários Imperadores Romanos, armaduras japonesas e um acervo de história natural e mineral.\n[…]\nOs valores obtidos com as vendas em 1657 e 1658, contudo, foram irrisórios. Em 1660 ele foi forçado a vender sua casa e máquina impressora e mudar-se para uma habitação modesta em Rozengracht. As autoridades e credores eram em geral compreensivos com sua situação—com exceção da guilda de pintores de Amsterdã, que introduziu uma nova regra proibindo a qualquer um nas circunstâncias de Rembrandt de trabalhar como pintor.\n[…]\nEm 1662 ele continuava a executar grandes encomendas de retratos e outras obras. Quando Cosme III da Toscana viajou a Amsterdã em 1667, visitou, entre outros locais, a casa de Rembrandt.\n[…]\nEm 1906, na casa onde morou o pintor entre 1639 e 1660, foi estabelecido o Museu Rembrandt, após o imóvel ter sido comprado pela Fundação Rembrandt. O endereço é Jodenbreestraat 4, Amsterdã. Lá o visitante pode apreciar alguns quadros de Rembrandt e de seus pupilos, bem como cômodos com objetos usados pelo pintor, incluindo seu atelier.\n[…]\nMuseu Rembrandt em Amsterdã\n[…]\nRembrandt van Rijn – Vida e arte\n[…]\nArte Bíblica de Rembrandt Harmensz. van Rijn",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Os Girassóis (Van Gogh)",
      "descricao": "Série de naturezas-mortas de Vincent van Gogh, pintadas em Arles a partir de 1888, com girassóis num vaso."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Em 1888, em Arles, Van Gogh pintou uma série de girassóis para enfeitar o quarto de um amigo que viria morar com ele. Que amigo?",
    "resposta": "Paul Gauguin",
    "distratores": [
      "Émile Bernard",
      "Henri de Toulouse-Lautrec",
      "Paul Signac"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Sunflowers_(Van_Gogh_series)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sunflowers_(Van_Gogh_series)",
        "situacao": "ok",
        "texto": "Sunflowers (original title, in French: Tournesols) is the title of two series of still life paintings by the Dutch painter Vincent van Gogh. The first series, executed in Paris in 1887, depicts the flowers lying on the ground, while the second set, made a year later in Arles, shows a bouquet of sunflowers in a vase. In the artist's mind, both sets were linked by the name of his friend Paul Gauguin\n[…]\nAbout eight months later, van Gogh hoped to welcome and impress Gauguin again with Sunflowers, now part of the painted Décoration for the Yellow House that he prepared for the guestroom of his home in Arles, where Gauguin was supposed to stay.\n[…]\nLittle is known of van Gogh's activities during the two years he lived with his brother Theo in Paris, from 1886 to 1888. The fact that he had painted Sunflowers already is only revealed in the spring of 1889, when Gauguin claimed one of the Arles versions in exchange for studies he had left behind after leaving Arles for Paris. Van Gogh was upset and replied that Gauguin had absolutely no right to make this request:\n[…]\nIn the 2000s, debate arose regarding the authenticity of one of the paintings, and it has been suggested that this version may have been the work of Émile Schuffenecker or of Paul Gauguin. Most experts, however, conclude that the work is genuine.\n[…]\nVan Gogh began painting in late summer of 1888 and continued into the following year. One went to decorate his friend Paul Gauguin's bedroom. The paintings show sunflowers in all stages of life, from full bloom to withering. The paintings were considered innovative for their use of the yellow spectrum, partly because newly invented pigments made new colors possible.\n[…]\n(F456) sold 1905 via Paul Cassirer to Hugo von Tschudi. (Munich version).\n[…]\nTellegen, Annet: Vincent en Gauguin: schilderijenruil in Paris, Museumjournaal 11, 1966, pp. 42–45\n[…]\nSunflowers on Google Art Project"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Doze_Girass%C3%B3is_numa_Jarra",
        "situacao": "ok",
        "texto": "Os Doze girassóis numa jarra é uma pintura do pintor holandês Vincent van Gogh. Após a chegada do pintor ao sul da França, estabelecendo-se em Arles, Van Gogh passou a utilizar efeitos de cores e de luz com mais intensidade. Doze Girassóis numa Jarra pode ser considerado o culminar de todo este efeito em na obra do artista.\n[…]\nFinalizado em fevereiro de 1888, o quadro está hoje exposto na Neue Pinakothek, em Munique.\n[…]\nAlém da paleta de cores terrosas, o pintor utilizava o contraste entre o claro e o escuro para criar uma atmosfera dramática e expressiva. Até então, os estudos de anatomia elaborados por Van Gogh eram evidentes nas obras que produzia.\n[…]\nQuando o artista chega à Paris, o estilo de pintura dele passa por uma alteração. No novo momento do artista, as cores ganham uma dimensão fundamental nas pinturas executadas por ele. Isso foi possível devido ao contato com novos artistas e novas técnicas, conhecidas pelo irmão dele, Theo, que o recebeu em casa. A influência mais clara nas obras é a do movimento impressionista, que tinha como pintores participantes nomes como Monet, Gauguin, Degas.\n[…]\nA partir disso, as obras de Van Gogh deixaram de trazer a figura humana como elemento central, pautando-se em natureza morta (como é o caso da pintura analisada) ou em ambientes e objetos (por exemplo, A Cadeira de Van Gogh com cachimbo). A cor, nas obras do pintor, passa a ser utilizada como uma forma de expressão, sem compromisso com o realismo. Contrastes entre cores harmônicas, como o verde e o amarelo, recebem destaque em Doze girassóis numa jarra.\n[…]\nAo todo, Van Gogh pintou sete telas de girassóis aquando de sua estadia na cidade de Arles, ao sul da França.\n[…]\n«A série completa» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Ninfeias (Monet)",
      "descricao": "Série de quadros de Claude Monet com o lago de seu jardim em Giverny."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Em novembro de 1918, Monet ofereceu ao Estado francês grandes painéis das Ninfeias. Que acontecimento ele queria celebrar com a doação?",
    "resposta": "O fim da Primeira Guerra",
    "distratores": [
      "A Exposição Universal",
      "Seu aniversário",
      "A posse do presidente"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Mus%C3%A9e_de_l%27Orangerie",
      "https://en.wikipedia.org/wiki/Water_Lilies_(Monet_series)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mus%C3%A9e_de_l%27Orangerie",
        "situacao": "ok",
        "texto": "The Musée de l'Orangerie (English: Orangery Museum) is an art gallery of Impressionist and Post-Impressionist paintings located in the west corner of the Tuileries Garden next to the Place de la Concorde in Paris. The museum is most famous as the permanent home of eight large Water Lilies murals by Claude Monet, and also contains works by Paul Cézanne, Henri Matisse, Amedeo Modigliani, Pablo Picas\n[…]\nAfter World War I, changes came to the Orangerie. In 1921, the State gave the building to the Under-Secretariat of State for Fine Arts along with another building, the Jeu de Paume. The goal for these two buildings was to provide a space for living artists to display their works. At the time, Claude Monet (1840–1926) was painting a series of Water Lilies (Nymphéas) paintings for the State that were destined for another museum, the Musée Rodin.\n[…]\nThe Water Lilies donation to the Orangerie was finalized in 1922. Monet helped architect Camille Lefèvre with the architectural design in which eight panels, each two metres high and spanning 91 metres in length, are arranged in two oval rooms which form the infinity symbol. Monet also required skylights for observing the paintings in natural light.\n[…]\n\"The Building from the Second Empire to the Water Lilies.\" The Building from the Second Empire to the Water Lilies | Musée De L'Orangerie, 2019, www.musee-orangerie.fr/en/article/building-second-empire-water-lilies.\n[…]\n\"The Installation of the Water Lilies.\" The Installation of the Water Lilies | Musée De L'Orangerie, 2019, www.musee-orangerie.fr/en/article/installation-water-lilies.\n[…]\nMadeline, Laurence. La Collection Walter-Guillaume Et Les Nymphéas De Monet: Musée De L'Orangerie. Nouvelles Éditions Scala, 2017.\n[…]\n360 degree view of Monet's Water Lilies provided by Google Arts & Culture"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Water_Lilies_(Monet_series)",
        "situacao": "ok",
        "texto": "Water Lilies (French: Nymphéas [nɛ̃.fe.a]) is a series of approximately 250 oil paintings by French Impressionist Claude Monet (1840–1926). The paintings depict his flower garden at his home in Giverny, and were the main focus of his artistic production during the last 31 years of his life. Many of the works were painted while Monet suffered from cataracts.\n[…]\nIn 2020, the Museum of Fine Arts, Boston celebrated its 150th anniversary with some of Monet's Water Lilies paintings.\n[…]\nGiovanna Bertazzoni, Christie's auction house director and head of impressionist and modern art, said, \"Claude Monet's water-lily paintings are amongst the most recognised and celebrated works of the 20th Century and were hugely influential to many of the following generations of artists.\" The sale took place on 23 June 2010 at the auction house and the painting attracted bids of up to £29 million, but it ultimately failed to sell.\n[…]\nOn 6 May 2014, one of the Water Lilies, Le Bassin aux Nymphéas, was auctioned at Christie's, New York City for $27 million.\n[…]\nIn June 2014, one of the Water Lilies, Nymphéas, sold for US$54 million at a Sotheby's auction in London. This piece was auctioned to an anonymous buyer, but the piece went on to be part of the exhibition \"Painting the Modern Garden: From Monet to Matisse\" at the Cleveland Museum of Art and the Royal Academy of Arts, London, starting in 2015.\n[…]\nWeeping Willow, 1918 Monet painting, one of several works depicting a Weeping Willow tree located at the edge of his Water Lilies pond\n[…]\nMonet Lake at Pool Bridge Farm\n[…]\nRoss King (2017), Mad Enchantment: Claude Monet and the Painting of the Water Lilies, Bloomsbury Publishing Plc.\n[…]\nThe Met and Lego Reimagine Monet’s Water Lilies as a 3,179-Brick Art Set Collaboration between The Metropolitan Museum of Art and Lego to create a Lego Art set featuring Bridge Over a Pond of Water Lilies"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Museu_da_Orangerie",
        "situacao": "ok",
        "texto": "O  Musée de l'Orangerie é uma galeria de arte impressionista e pós-impressionista localizada na Place de la Concorde em Paris.\n[…]\nContém trabalhos de Paul Cézanne, Henri Matisse, Amedeo Modigliani, Claude Monet, Pablo Picasso, Pierre-Auguste Renoir, Henri Rousseau, Chaim Soutine, Alfred Sisley e Maurice Utrillo entre outros.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Abaporu",
      "descricao": "Quadro de Tarsila do Amaral, de 1928, que mostra uma figura de pés e mãos enormes ao lado de um cacto e de um sol."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "O Abaporu entusiasmou tanto Oswald de Andrade que o levou a lançar, em 1928, que movimento, com manifesto próprio?",
    "resposta": "Movimento Antropofágico",
    "distratores": [
      "Movimento Pau-Brasil",
      "Verde-Amarelismo",
      "Movimento Anta"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Abaporu",
      "https://pt.wikipedia.org/wiki/Manifesto_Antropófago"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Abaporu",
        "situacao": "ok",
        "texto": "Abaporu é uma pintura a óleo da artista brasileira Tarsila do Amaral. É uma das principais obras do período antropofágico do movimento modernista no Brasil. Foi pintada por Tarsila para presentear seu então marido, Oswald de Andrade, em seu aniversário, em janeiro de 1928.\n[…]\nFoi pintada em óleo sobre tela, em janeiro de 1928, por Tarsila do Amaral (1886-1973) como presente de aniversário ao escritor Oswald de Andrade, seu marido na época. O nome da obra foi conferido por ele e pelo poeta Raul Bopp, que indagou a Oswald ao ver o quadro: \"Vamos fazer um movimento em torno desse quadro?\". E também é uma referência para a criação da Antropofagia modernista brasileira, ou Movimento Antropofágico, que se propunha a deglutir a cultura estrangeira e adaptá-la ao Brasil.\n[…]\nOutras obras de Tarsila em sua fase antropofágica: A Lua (1928), O Lago (1928), Cartão Postal (1929) e Sol Poente (1929).\n[…]\nPintado como presente de aniversário para o então marido Oswald de Andrade, quando Tarsila e ele se separaram, o escritor aceitou trocar o quadro por um mais valorizado à época, O Enigma de Um Dia, de Giorgio de Chirico. O Abaporu permaneceu com a autora.\n[…]\nGonzalo Aguillar em seu artigo “O Abaporu, de Tarsila do Amaral: saberes do pé” mencionado em Antropofagia hoje? Oswald de Andrade em Cena, livro de Jorge Ruffinelli e João Cezar de Castro Rocha, pensa o Abaporu na qualidade do gênero de retrato anti-humano, pois o rosto é apagado, o corpo é animalesco, porém os pés são bastante humanos e detalhados. Para Aguillar, a gestualidade humana do quadro é parodiada. O homem do quadro é desprovido de identidade, quase desumanizado."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Manifesto_Antropófago",
        "situacao": "ok",
        "texto": "O movimento antropofágico foi uma manifestação artística brasileira da década de 1920, fundada e teorizada pelo poeta Oswald de Andrade e pela pintora Tarsila do Amaral, ambos do estado de São Paulo. Foi enunciado no Manifesto Antropófago e divulgado através da Revista de Antropofagia.\n[…]\nO Manifesto Antropófago (ou Manifesto Antropofágico) foi um manifesto publicado em 1928 pelo poeta e polemista brasileiro Oswald de Andrade, figura-chave do movimento cultural do modernismo brasileiro e colaborador da publicação Revista de Antropofagia. Foi inspirado em \"Abaporu\", pintura de Tarsila do Amaral, artista modernista e esposa de Oswald de Andrade.\n[…]\nO manifesto fundamentou o movimento antropofágico. Lido em 1928 para seus amigos na casa de Mário de Andrade, foi publicado na Revista de Antropofagia, a qual Oswald ajudou a fundar com Raul Bopp e Antônio de Alcântara Machado, com a datação de \"ano 374 da deglutição do Bispo Sardinha\".\n[…]\nA Revista de Antropofagia foi uma publicação parte do movimento antropofágico surgida como consequência do Manifesto Antropófago escrito por Oswald de Andrade.\n[…]\nNa década de 1960, apresentados à obra de Oswald de Andrade pelo poeta concreto Augusto de Campos, o artista plástico Hélio Oiticica e o músico Caetano Veloso viram no Manifesto uma grande influência artística no movimento Tropicália. Veloso afirmou: \"a ideia de canibalismo cultural caiu como uma luva em nós, os tropicalistas.\n[…]\nEm 1990, o artista plástico brasileiro Antonio Peticov criou um mural em homenagem ao que teria sido o centenário de Andrade. A obra O Momento Antropofágico com Oswald de Andrade foi instalada na estação Republica do Metrô de São Paulo e foi inspirada em três obras de Andrade: O Perfeito Cozinheiro das Almas deste Mundo, Manifesto Antropofágico e O Homem do Povo."
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Guerra e Paz (Portinari)",
      "descricao": "Par de grandes painéis pintados por Candido Portinari entre 1952 e 1956 e doados pelo Brasil à ONU."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Candido Portinari não foi à inauguração de seus painéis Guerra e Paz na sede da ONU, em Nova York. Por quê?",
    "resposta": "Teve o visto americano negado",
    "distratores": [
      "Estava hospitalizado",
      "Brigou com a ONU",
      "Recusou o convite"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Guerra_e_Paz_(Portinari)",
      "https://en.wikipedia.org/wiki/Candido_Portinari"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Guerra_e_Paz_(Portinari)",
        "situacao": "inexistente",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Candido_Portinari",
        "situacao": "ok",
        "texto": "Candido Portinari (December 29, 1903 – February 6, 1962) was a Brazilian painter. He is considered one of the most important Brazilian painters as well as a prominent and influential practitioner of the neo-realism style in painting.\n[…]\nHis career coincided with and included collaboration with Oscar Niemeyer amongst others. Portinari's works can be found in galleries and settings in Brazil and abroad, ranging from the family chapel in his childhood home in Brodowski to his panels Guerra e Paz (War and Peace) in the United Nations building in New York and four murals in the Hispanic Reading Room of the Library of Congress in Washington, D.C.\n[…]\nThis work is located in the United Nations General Assembly Building in New York which was created in remembrance to World War II and its horrors. It was meant to resemble something that should never occur again. Here, visitors come witnessing an epitome of war and leave realizing that peace is indeed attainable. Guerra e Paz is the synthesis of an entire life committed to human beings.\n[…]\nIn the Hispanic Foundation of the Library of Congress, Washington, D.C. are located four murals that Portinari did in 1941 depicting the struggles of the Hispanic Americans. Discovery of the Land, Entry into the Forest, Teaching of the Indians, and Discovery of Gold are all meant to represent the coming of the Spaniards and Portuguese to America and took him two months to complete with the help of his brother Luiz. The Discovery of the Land is meant to show common sailors that sailed the boats.\n[…]\nThe Catalogue Raisonné of Portinari's complete works was published in 2004. It was the first Raisonné covering the complete works of a Latin American painter.\n[…]\nProjeto Portinari\n[…]\n\"Candido Portinari\"."
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Tarsila do Amaral",
      "descricao": "Pintora modernista brasileira (1886–1973), autora do Abaporu."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Em Paris, nos anos 1920, Tarsila do Amaral estudou com qual pintor francês, famoso por figuras tubulares que lembram máquinas?",
    "resposta": "Fernand Léger",
    "distratores": [
      "Henri Matisse",
      "Georges Braque",
      "Marcel Duchamp"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Tarsila_do_Amaral"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tarsila_do_Amaral",
        "situacao": "ok",
        "texto": "Tarsila de Aguiar do Amaral (Portuguese pronunciation: [taʁˈsilɐ du ɐmaˈɾaw]; 1 September 1886 – 17 January 1973) was a Brazilian painter, draftswoman, and translator. She is considered one of the leading Latin American modernist artists, and is regarded as the painter who best achieved Brazilian aspirations for nationalistic expression in a modern style.\n[…]\nAs a teenager, Tarsila and her parents traveled to Spain, where Tarsila caught people's eyes by drawing and painting copies of the artwork she saw at her school's archives. Tarsila attended school in Barcelona, and later trained privately in her hometown under painter Pedro Alexandrino Borges (1864-1942). She also attended the Académie Julian in Paris and studied with other prominent artists (1920-1923).\n[…]\nDuring a brief return to Paris in 1929, Tarsila was exposed to Cubism, Futurism, and Expressionism while studying with André Lhote, Fernand Léger, and Albert Gleizes. European artists in general had developed a great interest in African and primitive cultures for inspiration. This led Tarsila to utilize her own country's indigenous forms while incorporating the modern styles she had studied. While in Paris at this time, she painted one of her most famous works, A Negra (1923).\n[…]\nTarsila painted several representations of large cities, like São Paulo, that combined small aspects of the city, like gas pumps, with broader urban scenes. Building on the ideas of the earlier Pau-Brasil movement, she appropriated European styles similar to those of her former teacher, Fernand Léger, but adapted them to the local cityscapes in order to develop modes and techniques that were uniquely Brazilian.\n[…]\nKavorka (October 16, 2006). Tarsila do Amaral. Wordpress\n[…]\nMoMA Audio: Tarsila do Amaral: Inventing Modern Art in Brazil\n[…]\nNew to MoMA: Tarsila do Amaral’s A Lua (The Moon), interview with Ann Temkin"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tarsila_do_Amaral",
        "situacao": "ok",
        "texto": "Tarsila de Aguiar do Amaral (Capivari, 1 de setembro de 1886 – São Paulo, 17 de janeiro de 1973) foi uma pintora, desenhista, escultora, ilustradora, cronista e tradutora brasileira. É considerada uma das principais artistas modernistas latino-americanas, além de ser considerada a pintora que melhor alcançou as aspirações brasileiras de expressão nacionalista nesse estilo artístico.\n[…]\nQuando adolescente, Tarsila e seus pais viajaram para a Espanha, onde ela chamou a atenção das pessoas desenhando e pintando cópias das obras de arte que viu nos arquivos de sua escola. Tarsila frequentou a escola em Barcelona e mais tarde estudou em sua cidade natal com o pintor Pedro Alexandrino Borges (1864-1942). Também frequentou a Académie Julian em Paris e estudou com outros artistas proeminentes (1920-1923).\n[…]\nDurante um breve retorno a Paris em 1929, Tarsila foi exposta ao cubismo, futurismo e expressionismo enquanto estudava com André Lhote, Fernand Léger e Albert Gleizes. Artistas europeus em geral haviam desenvolvido um grande interesse em culturas africanas e primitivas em busca de inspiração. Isso levou Tarsila a utilizar as formas indígenas de seu próprio país enquanto incorporava os estilos modernos que havia estudado.\n[…]\nEm 2024/2025, o Museu de Luxemburgo, em Paris, exibiu de 9 de outubro de 2024 a 2 de fevereiro de 2025, uma imensa retrospectiva intitulada Tarsila do Amaral – Pintar o Brasil Moderno, com 150 obras (e três anos de curadoria com a assinatura de Cecilia Braschi) levando ao público inclusive obras inéditas dos anos 1940-1960, algumas pertencentes a acervos particulares e desconhecidas do público em geral e arquivos pessoais da artista, como rascunhos, anotações e um álbum de viagens.\n[…]\n«Página oficial de Tarsila do Amaral»\n[…]\n«Tarsila do Amaral agora é nome de uma cratera de Mercúrio»\n[…]\n«Tarsila do Amaral na Enciclopédia Itaú Cultural de Artes Visuais»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Frida Kahlo",
      "descricao": "Pintora mexicana, famosa por seus autorretratos, que viveu de 1907 a 1954."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Frida Kahlo se casou duas vezes com o mesmo homem, um famoso muralista mexicano. Quem era ele?",
    "resposta": "Diego Rivera",
    "distratores": [
      "David Alfaro Siqueiros",
      "José Clemente Orozco",
      "Rufino Tamayo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Frida_Kahlo"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Frida_Kahlo",
        "situacao": "ok",
        "texto": "Magdalena Carmen Frida Kahlo y Calderón (Spanish pronunciation: [ˈfɾiða ˈkalo]; 6 July 1907 – 13 July 1954) was a Mexican painter known for her many portraits, self-portraits, and works inspired by the nature and artifacts of Mexico. Inspired by the country's popular culture, she employed a naïve folk art style to explore questions of identity, postcolonialism, gender, class, and race in Mexican s\n[…]\nKahlo's interests in politics and art led her to join the Mexican Communist Party in 1927, through which she once again met fellow Mexican artist Diego Rivera, according to Zelazko. The couple married in 1929 and spent the late 1920s and early 1930s travelling together in Mexico and the United States.\n[…]\nOn moving to Morelos in 1929 with her husband Diego Rivera, Kahlo was inspired by the city of Cuernavaca where they lived. She changed her artistic style and increasingly drew inspiration from Mexican folk art.\n[…]\nAlthough she still publicly presented herself as simply Rivera's spouse rather than as an artist, she participated for the first time in an exhibition, when Frieda and Diego Rivera was included in the Sixth Annual Exhibition of the San Francisco Society of Women Artists in the Palace of the Legion of Honor.\n[…]\nRegardless, her father approved of Rivera, who was wealthy and therefore able to support Kahlo, who could not work and had to receive expensive medical treatment. The wedding was reported by the Mexican and international press, and the marriage was subject to constant media attention in Mexico in the following years, with articles referring to the couple as simply \"Diego and Frida\".\n[…]\n2019–2022: Frida Kahlo, Diego Rivera, and Mexican Modernism from the Jacques and Natasha Gelman Collection exhibited at the following:\n[…]\n15 March–12 July 2015:  Diego Rivera and Frida Kahlo in Detroit, Detroit Institute of Arts, Detroit, Michigan.\n[…]\nFrida Kahlo. Museum of Fine Arts, Houston: ICAA."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Frida_Kahlo",
        "situacao": "ok",
        "texto": "Magdalena Carmen Frida Kahlo y Calderón (Coyoacán, 6 de julho de 1907 – idem, 13 de julho de 1954), mais conhecida como Frida Kahlo, foi uma pintora mexicana conhecida pelos seus muitos retratos, autorretratos, e obras inspiradas na natureza e artefactos do México. Inspirada pela cultura popular do país, empregou um estilo de arte popular naïf para explorar questões de identidade, pós-colonialismo\n[…]\nOs interesses de Kahlo na política levaram-na a aderir ao Partido Comunista Mexicano em 1927, através do qual conheceu o artista mexicano Diego Rivera, com o qual se casou em 1929, e passou o final dos anos vinte e início dos anos trinta a viajar juntos no México e nos Estados Unidos.\n[…]\nCasa-se aos 22 anos com Diego Rivera, em 1929, um casamento tumultuado, visto que ambos tinham temperamentos fortes e casos extraconjugais. Kahlo, que era bissexual, teve um caso com Leon Trotski depois de separar-se de Diego. Rivera aceitava abertamente os relacionamentos de Kahlo com mulheres, mesmo elas sendo casadas, mas não aceitava os casos da esposa com homens. Frida descobre que Rivera mantinha um relacionamento com sua irmã mais nova, Cristina.\n[…]\nEm 1944, Frida começou a escrever seu diário pessoal. Em um caderno simples, alternava palavras e desenhos, muitas vezes transformando-os em poemas sobre Diego Rivera e seu sofrimento físico e emocional. O diário também aborda sua infância, juventude, sexualidade, fertilidade, dores físicas e pensamentos políticos e existenciais. Utilizava aquarela e tinta para criar imagens simbólicas, além de escrever sobre o significado das cores que usava em suas pinturas:\n[…]\nEm 2014 estreou no Teatro Raul Cortez, em São Paulo, a peça \"Frida y Diego\", com Leona Cavalli e José Rubens Chachá. Com texto de Maria Adelaide Amaral, a apresentação trata da conturbada história de amor entre Frida Kahlo e Diego Rivera.\n[…]\nFrida Kahlo: Trajetória marcada por doenças",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Independência ou Morte (pintura)",
      "descricao": "Quadro de Pedro Américo, de 1888, também chamado O Grito do Ipiranga."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Pedro Américo foi acusado de imitar, em Independência ou Morte, a composição de um quadro de batalha napoleônica de que pintor francês?",
    "resposta": "Ernest Meissonier",
    "distratores": [
      "Eugène Delacroix",
      "Jacques-Louis David",
      "Théodore Géricault"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Independência_ou_Morte_(Pedro_Américo)"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Independência_ou_Morte_(Pedro_Américo)",
        "situacao": "ok",
        "texto": "Independência ou Morte é uma pintura do artista brasileiro Pedro Américo. É considerada a representação mais consagrada e difundida do momento da independência do Brasil, sendo o gesto oficial da fundação do Brasil. Seu nome vem da exclamação de D. Pedro I ao proclamar a independência do Brasil, em 7 de setembro de 1822: \"É tempo! Independência ou Morte! Estamos separados de Portugal!\".\n[…]\nOs quadros dos pintores franceses Jean-Louis Ernest Meissonier e Horace Vernet foram usados como fontes para Independência ou Morte. Américo estudou as obras Napoleão III na Batalha de Solferino (1863) e Batalha de Friedland (c 1870), ambas de Meissonier e também Napoleão na Batalha de Friedland (c 1850), de Vernet. Há semelhanças entre as pinturas: o confronto entre D.\n[…]\nPedro e os soldados à direita tem composição parecida à estrutura de Batalha de Friedland; a concentração de pessoas em ambos os quadros é similar; a elevação de D. Pedro a um ponto mais alto da topografia aproxima a obra de Américo das de Meissonier. Além disso, pode-se deduzir que Américo tinha a intenção de representar D. Pedro como um estatista, assim como pode-se perceber ao analisar a figura de Napoleão na obra de Meissonier.\n[…]\nA historiadora Lilia Moritz Schwarcz cita em seu livro Batalha do Avaí – A Beleza da Barbárie, que os críticos da obra de Pedro Américo viram tanto em A Batalha do Avaí, como em Independência ou Morte, dois \"descarados\" plágios dos pintores Andrea Appiani e Ernest Meissonier, respectivamente.\n[…]\nSegundo a historiadora, os críticos viam em Independência ou Morte, uma cópia da cena inteira de A Batalha de Friedeland, pintada treze anos antes por Meissonier, \"em que este também retrata Napoleão, figura polivalente que tanto serve de modelo para Américo pintar Caxias como D. Pedro I, este dando o grito de independência às margens do Ipiranga.\"\n[…]\nLista de pinturas de Pedro Américo"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Primeira Missa no Brasil",
      "descricao": "Quadro de Victor Meirelles de 1860."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Para pintar A Primeira Missa no Brasil, Victor Meirelles se baseou na descrição feita em que documento escrito em 1500?",
    "resposta": "Carta de Pero Vaz de Caminha",
    "distratores": [
      "Diário de Cabral",
      "Tratado de Tordesilhas",
      "Os Lusíadas"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Primeira_Missa_no_Brasil",
      "https://en.wikipedia.org/wiki/First_Mass_in_Brazil"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Primeira_Missa_no_Brasil",
        "situacao": "ok",
        "texto": "Primeira Missa no Brasil, óleo sobre tela do gênero de pintura histórica, é considerada a primeira grande obra do pintor brasileiro Victor Meirelles. A tela foi feita entre 1859 e 1861, em Paris, durante o período em que o artista viveu na Europa graças a uma bolsa de estudos concedida pela Academia Imperial de Belas Artes. Com 9 m2, Primeira Missa no Brasil foi inspirada na carta escrita por Pero\n[…]\nA grande dimensão da tela, 2,70 por 3,57 metros, é característica comum às pinturas históricas, gênero em que Primeira Missa no Brasil está inserida. O quadro representa a primeira missa celebrada no Brasil a partir dos relatos de viagem feitos por Pero Vaz de Caminha. Nele, o momento é representado em uma organização circular em torno da figura principal, o Frei Henrique de Coimbra, que ocupa também o centro físico da tela em um gesto de erguer o cálice.\n[…]\nPrimeira Missa no Brasil foi executado em um momento em que o Instituto Histórico e Geográfico Brasileiro, fundado em 1838, junto à Academia Imperial de Belas Artes, buscava estabelecer mitos fundadores da história do país. Baseado em experiências jesuíticas, o conceito de nação que se buscava narrar caminhava com a ideia de um processo civilizador como forma de assegurar o controle do Estado sobre populações indígenas.\n[…]\nO pintor, então, utilizou como grande referência a Carta de Pêro Vaz de Caminha, documento que relata suas impressões sobre o Brasil e que descreve a primeira missa realizada no país.\n[…]\nAtualmente o Museu Nacional de Belas Artes, no Rio de Janeiro, fechado para reformas mantém apenas as obras mais antigas e preservadas expostas em salão. À exemplo da Obra \"A Primeira Missa no Brasil\" de Victor Meirelles em referências de 1861.\n[…]\nPinturas de Victor Meirelles\n[…]\nVictor Meirelles\n[…]\nPrimeira missa no Brasil"
      },
      {
        "url": "https://en.wikipedia.org/wiki/First_Mass_in_Brazil",
        "situacao": "ok",
        "texto": "The first mass in Brazil was celebrated by Portuguese friar and bishop Henrique de Coimbra on April 26, 1500 (May 6 in the current calendar), a Sunday, on the beach of Coroa Vermelha, in Santa Cruz Cabrália, on the southern coast of Bahia.\n[…]\nThe event was described by Pero Vaz de Caminha in a letter which he sent to the King of Portugal, Manuel I (1469–1521), informing him about the arrival in Brazil, then called Ilha de Vera Cruz (Island of the True Cross), by the fleet of Pedro Álvares Cabral that was heading to India.\n[…]\nThose who participated in the mass were the Portuguese members of the expedition, mostly sailors. Cabral and Caminha were also present. Pero Vaz de Caminha made this interesting account:\n[…]\nSome indigenous people peacefully accompanied the Catholic mass, seeming to imitate the movements made by the Portuguese, such as sitting down. This fact led Caminha to conclude that the future conversion of the natives to Catholicism would be an easy and peaceful mission.\n[…]\nIn the following days, the Portuguese tried to demonstrate to the indigenous people the respect they had for the cross, kneeling one by one and kissing it. Some indigenous people made the same gesture, which led them to be considered innocent and easy to evangelize. Vaz de Caminha also requested the prompt arrival of a clergyman from the King to baptize them in order to learn more about their faith.\n[…]\nIn the 19th century, the event was portrayed in the painting The First Mass in Brazil, one of the main works of the artist Victor Meirelles. The painting, dated 1860, was inspired by Pero Vaz de Caminha's Letter, written over three centuries earlier."
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "A Liberdade Guiando o Povo",
      "descricao": "Quadro de Eugène Delacroix, de 1830."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "O menino de pistolas em punho ao lado da Liberdade, no quadro de Delacroix, costuma ser apontado como inspiração de que personagem de Victor Hugo?",
    "resposta": "Gavroche",
    "distratores": [
      "Jean Valjean",
      "Quasímodo",
      "Marius"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Liberty_Leading_the_People"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Liberty_Leading_the_People",
        "situacao": "ok",
        "texto": "Liberty Leading the People (French: La Liberté guidant le peuple [la libɛʁte ɡidɑ̃ lə pœpl]) is a painting of the Romantic era by the French artist Eugène Delacroix,  commemorating the July Revolution of 1830 that toppled King Charles X (r. 1824–1830).\n[…]\nThe painting may have influenced Victor Hugo's 1862 novel Les Misérables. In particular, the character of Gavroche is widely believed to have been inspired by the figure of the pistols-wielding boy running over the barricade. The novel describes the events of the June Rebellion two years after the revolution celebrated in the painting, the same rebellion that led to its being removed from public view.\n[…]\nThe painting has influenced classical music. George Antheil titled his Symphony No. 6 After Delacroix, and stated that the work was inspired by Liberty Leading the People. The imagery was adapted by Robert Ballagh to commemorate Ireland's independence struggle on an Irish postage stamp in 1979, the centenary of the birth of Pádraig Pearse,, and the painting was used for Coldplay's 2008 album cover Viva la Vida or Death and All His Friends, with the words Viva La Vida written in white.\n[…]\nLiberty Leading the People made an appearance in the 11th episode (\"EDGELORD – Revolution of the 14-Year-Olds\") of the Netflix animation series Ghost in the Shell: SAC 2045.\n[…]\nA photograph of Aed Abu Amro taken during the 2018–2019 Gaza border protests by Mustafa Hassona on 22 October 2018, was considered by some a personification of the Liberty Leading the People.\n[…]\nPodcast of BBC Radio 4's In Our Time on Delacroix's Liberty Leading the People\n[…]\nRomanticism in France Delacroix's Liberty Leading the People—From smarthistory at Khan Academy\n[…]\nArtSleuth: Liberty Leading the People—Accidental Icon?—Video analysis"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/A_Liberdade_guiando_o_povo",
        "situacao": "ok",
        "texto": "A Liberdade guiando o povo (em francês: La Liberté guidant le peuple) é uma pintura de Eugène Delacroix em comemoração à Revolução de Julho de 1830, com a queda de Carlos X. Uma mulher representando a Liberdade, guia o povo por cima dos corpos dos derrotados, empunhando a bandeira tricolor da Revolução francesa em uma mão e brandindo um mosquete com baioneta na outra. A pintura é talvez a obra mai\n[…]\nDelacroix retratou a Liberdade,  como figura alegórica de uma deusa e como uma robusta mulher do povo. O monte de cadáveres funciona como uma espécie de pedestal, do qual a Liberdade se lança, descalça e com o peito meio descoberto, da tela para o espaço do espectador. Ela usa barrete frígio que se tornara símbolo da liberdade durante a Primeira República Francesa (1789-1794). Ela segura pelo mastro uma bandeira tricolor, que ocupa o eixo médio da tela.\n[…]\nDistinguem-se quatro outros personagens à beira da barricada. Há dois meninos de rua - um deles, usando uma boina e segurando duas pistolas, pode ter sido a inspiração para o personagem Gavroche, de Les Misérables de Victor Hugo; o outro, abaixado, quase rente ao solo, usa um boné de policial e segura uma espada. Há também um homem de cartola, o que sugere se tratar de um burguês, e, atrás dele, um proletário, usando uma boina e com um sabre na mão.\n[…]\nA pintura inspirou a Estátua da Liberdade, em Nova York,, que foi dado para os Estados Unidos como um presente dos franceses, 50 anos depois do quadro ter  sido pintado. A estátua, que segura uma tocha na mão, tem uma posição mais estável, ao contrário da mulher na pintura.\n[…]\nA pintura teve ainda influência na música clássica; o americano George Antheil intitulada na \"Sinfonia n º 6  - After Delacroix\", afirmou que o trabalho foi inspirado pelo quadro.\n[…]\n«Orange - La Liberté guidant le peuple» (em francês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Surrealismo",
      "descricao": "Movimento artístico e literário de vanguarda, lançado em Paris nos anos 1920 por André Breton, que explora o sonho e o inconsciente."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "A palavra surrealismo foi criada em 1917 por um poeta francês, amigo de Picasso, que morreu no ano seguinte. Quem era ele?",
    "resposta": "Guillaume Apollinaire",
    "distratores": [
      "André Breton",
      "Paul Éluard",
      "Jean Cocteau"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Surrealism",
      "https://en.wikipedia.org/wiki/Guillaume_Apollinaire"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Surrealism",
        "situacao": "ok",
        "texto": "Surrealism is an art and cultural movement that developed in Europe in the aftermath of World War I in which artists aimed to allow the unconscious mind to express itself, often resulting in the depiction of illogical or dreamlike scenes and ideas. Its intention was, according to leader André Breton, to \"resolve the previously contradictory conditions of dream and reality into an absolute reality,\n[…]\nThe term \"Surrealism\" originated with Guillaume Apollinaire in 1917. However, the Surrealist movement was not officially established until after October 1924, when the Surrealist Manifesto published by Breton succeeded in claiming the term for his group over a rival faction led by Yvan Goll, who had published his own surrealist manifesto two weeks prior. The most important center of the movement was Paris, France.\n[…]\nThe word surrealism was first coined in March 1917 by Guillaume Apollinaire. He wrote in a letter to Paul Dermée: \"All things considered, I think in fact it is better to adopt surrealism than supernaturalism, which I first used.\" [Tout bien examiné, je crois en effet qu'il vaut mieux adopter surréalisme que surnaturalisme que j'avais d'abord employé].\n[…]\nThe term was taken up again by Apollinaire, both as subtitle and in the preface to his play Les Mamelles de Tirésias: Drame surréaliste, which was written in 1903 and first performed in 1917.\n[…]\nThe word surrealist was first used by Apollinaire to describe his 1917 play Les Mamelles de Tirésias (\"The Breasts of Tiresias\"), which was later adapted into an opera by Francis Poulenc.\n[…]\nApollinaire, Guillaume  1917, 1991. Program note for Parade, printed in Oeuvres en prose complètes, 2:865–866, Pierre Caizergues and Michel Décaudin, eds. Paris: Éditions Gallimard.\n[…]\nSurrealism in Poetry Holcombe, C. J.\n[…]\nA sample of French Surrealist poetry\n[…]\nAimé Césaire and Surrealism Archived 19 September 2010 at the Wayback Machine (in French)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Guillaume_Apollinaire",
        "situacao": "ok",
        "texto": "Guillaume Apollinaire ( ə-POL-in-AIR, French: [ɡijom apɔlinɛːʁ]; born Wilhelm Albert Włodzimierz Aleksander Apolinary Kostrowicki; 26 August 1880 – 9 November 1918) was a Polish-French poet, playwright, short story writer, novelist and art critic of Polish, Swiss and Italian descent.\n[…]\nWilhelm Albert Włodzimierz Apolinary Kostrowicki was born in Rome, Italy, and was raised speaking French, Italian, and Polish. He emigrated to France in his late teens and adopted the name Guillaume Apollinaire. His mother, born Angelika Kostrowicka, was a Polish-Lithuanian noblewoman born near Navahrudak (Nowogródek in Polish), Grodno Governorate (former Grand Duchy of Lithuania, present-day Belarus).\n[…]\nFrancesco Flugi d'Aspermont was a nephew of Conradin Flugi d'Aspermont (1787–1874), a poet who wrote in Romansh Putèr (an official language dialect of Switzerland spoken in Upper Engadin), and perhaps also descendant of the Minnesänger Oswald von Wolkenstein (born c. 1377, died 2 August 1445; see Les ancêtres Grisons du poète Guillaume Apollinaire at Geneanet).\n[…]\nJean Metzinger à la Galerie Weill, Chroniques d'art de Guillaume Apollinaire, L'Intransigeant, Paris Journal, 27 May 1914\n[…]\nApollinaire is played by Seth Gabel in the 2018 television series Genius, which focuses on the life and work of Pablo Picasso.\n[…]\nPrix Guillaume Apollinaire\n[…]\nGuillaume Apollinaire, S. Bates, 1967\n[…]\nGuillaume Apollinaire, P. Adéma, 1968\n[…]\nGuillaume Apollinaire, L.C. Breuning, 1980\n[…]\nGuillaume Apollinaire, J. Grimm, 1993\n[…]\nWorks by or about Guillaume Apollinaire at the Internet Archive\n[…]\nWorks by Guillaume Apollinaire at LibriVox (public domain audiobooks)\n[…]\nBecker, Annette: Apollinaire, Guillaume, in: 1914–1918-online. International Encyclopedia of the First World War.\n[…]\nGuillaume Apollinaire (poems in French and English)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Surrealismo",
        "situacao": "ok",
        "texto": "O surrealismo ou sobrerrealismo foi um movimento artístico e literário nascido em Paris na década de 1920, inserido no contexto das vanguardas que viriam a definir o modernismo no período entre as duas Grandes Guerras Mundiais. Reúne artistas anteriormente ligados ao dadaísmo ganhando dimensão mundial. Fortemente influenciado pela Psicanálise de Sigmund Freud (1856-1939), o surrealismo enfatiza o \n[…]\nA palavra surrealismo supõe-se ter sido criada em 1917 pelo poeta Guillaume Apollinaire (1886-1918), jovem artista ligado ao cubismo, e autor da peça teatral As Mamas de Tirésias (1917), considerada uma precursora do movimento.\n[…]\nEm 1929, os surrealistas publicam um segundo manifesto e editam a revista A Revolução Surrealista. Entre os artistas ligados ao grupo em épocas variadas estão os escritores franceses, Antonin Artaud (1896-1948), também dramaturgo, Paul Éluard (1895-1952), Louis Aragon (1897-1982), Jacques Prévert (1900-1977) e Benjamin Péret (1899-1959), que viveu no Brasil.\n[…]\nA primeira proposta de capa do catálogo, que pretendia inserir-se na campanha eleitoral de Norton de Matos (de oposição ao regime de Salazar), foi proibida pela censura. A iniciativa agitou o meio artístico lisboeta que, no mesmo ano e no seguinte, teve mais duas exposições da índole semelhante, realizadas por um grupo dissidente, Os Surrealistas, composto por Mário Cesariny, Cruzeiro Seixas, Mário-Henrique Leiria, António Maria Lisboa, H.\n[…]\nAs ideias e tendências surrealistas chegaram ao Brasil a partir da década de 30 e foram assimiladas pelo movimento modernista.\n[…]\nManifesto Surrealista\n[…]\nArtigo surrealismo França-Brasil\n[…]\nNotas sobre o movimento surrealista no Brasil\n[…]\nSérgio Lima - Notas acerca do movimento surrealista no Brasil\n[…]\nOliveira, Cléa de Vanguardas européias: o surrealismo em Portugal. Ou: do automatismo psíquico à portuguesa – O’ Neil e o abandono vigiado.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Surrealismo",
      "descricao": "Movimento artístico e literário de vanguarda, lançado em Paris nos anos 1920 por André Breton, que explora o sonho e o inconsciente."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Que escritor francês publicou em 1924 o Manifesto do Surrealismo e se tornou o grande líder do movimento?",
    "resposta": "André Breton",
    "distratores": [
      "Louis Aragon",
      "Paul Éluard",
      "Tristan Tzara"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Surrealism",
      "https://en.wikipedia.org/wiki/Andr%C3%A9_Breton"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Surrealism",
        "situacao": "ok",
        "texto": "Surrealism is an art and cultural movement that developed in Europe in the aftermath of World War I in which artists aimed to allow the unconscious mind to express itself, often resulting in the depiction of illogical or dreamlike scenes and ideas. Its intention was, according to leader André Breton, to \"resolve the previously contradictory conditions of dream and reality into an absolute reality,\n[…]\nBreton's 1924 Surrealist Manifesto defines the purposes of Surrealism. He included citations of the influences on Surrealism, examples of Surrealist works, and discussion of Surrealist automatism. He provided the following definitions:\n[…]\n1936 – London International Surrealist Exhibition is organised in London by the art historian Herbert Read, with an introduction by André Breton.\n[…]\n1937 – The International Surrealist Exhibition in Japan, titled Exposition Internationale du Surréalisme in French, was organised by Shūzō Takiguchi and Chirū Yamanaka and toured five cities, with 377 items on display and 41 artists represented. The exhibition grew out of Takiguchi and Yamanaka's exchanges with European Surrealists, including André Breton. Its overseas committee included Paul Éluard, Georges Hugnet and Roland Penrose.\n[…]\nSurrealist individuals and groups have carried on with Surrealism after the death of André Breton in 1966. The original Paris Surrealist Group was disbanded by member Jean Schuster in 1969, but another Parisian surrealist group was later formed. The current Surrealist Group of Paris has recently published the first issue of their new journal, Alcheringa. The Group of Czech-Slovak Surrealists never disbanded, and continue to publish their journal Analogon, which now spans almost 100 volumes.\n[…]\nAndré Breton\n[…]\nWhat is Surrealism?: Selected Writings of André Breton. ISBN 0-87348-822-9 .\n[…]\nManifesto of Surrealism by André Breton. 1924. Archived 9 February 2010 at the Wayback Machine"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Andr%C3%A9_Breton",
        "situacao": "ok",
        "texto": "André Robert Breton (; French: [ɑ̃dʁe ʁɔbɛʁ bʁətɔ̃]; 19 February 1896 – 28 September 1966) was a French writer and poet, known as a principal theorist and co-founder of surrealism. His writings include the first Surrealist Manifesto (Manifeste du surréalisme) of 1924, in which he defined surrealism as \"pure psychic automatism\".\n[…]\nAlong with his role as leader of the surrealist movement he is the author of celebrated books such as Nadja and L'Amour fou (Mad Love). Those activities, combined with his critical and theoretical work on writing and the visual arts, made André Breton a major figure in 20th-century French art and literature.\n[…]\nAndré Breton was the only son born to a family of modest means in Tinchebray (Orne) in Normandy, France. His father, Louis-Justin Breton, was a policeman and atheist, and his mother, Marguerite-Marie-Eugénie Le Gouguès, was a former seamstress. Breton attended medical school, where he developed a particular interest in mental illness. His education was interrupted when he was conscripted for World War I.\n[…]\nIn 1942, Breton collaborated with artist Wifredo Lam on the publication of Breton's poem \"Fata Morgana\", which was illustrated by Lam.\n[…]\nAndré Breton died at the age of 70 in 1966, and was buried in the Cimetière des Batignolles in Paris.\n[…]\nBreton married three times:\n[…]\nAndré Breton: Surrealism and Painting – edited and with an introduction by Mark Polizzotti.\n[…]\nManifestoes of Surrealism by André Breton, translated by Richard Seaver and Helen R. Lane. ISBN 0-472-06182-8\n[…]\nMedia related to André Breton at Wikimedia Commons\n[…]\nQuotations related to André Breton at Wikiquote\n[…]\nFrench Wikisource has original text related to this article: André Breton\n[…]\nAndré Breton's Nadja (in French)\n[…]\nAndré Breton in American public collections, on the French Sculpture Census website"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Surrealismo",
        "situacao": "ok",
        "texto": "O surrealismo ou sobrerrealismo foi um movimento artístico e literário nascido em Paris na década de 1920, inserido no contexto das vanguardas que viriam a definir o modernismo no período entre as duas Grandes Guerras Mundiais. Reúne artistas anteriormente ligados ao dadaísmo ganhando dimensão mundial. Fortemente influenciado pela Psicanálise de Sigmund Freud (1856-1939), o surrealismo enfatiza o \n[…]\nUm dos seus objetivos foi produzir uma arte que, segundo o movimento, estava sendo destruída pelo racionalismo. O poeta e crítico André Breton (1896-1966) era o principal líder e mentor deste movimento.\n[…]\nUm dos principais manifestos do movimento é o Manifesto Surrealista, de 1924. Além de Breton, seus representantes mais conhecidos são Antonin Artaud, no teatro, Luis Buñuel, no cinema, e Max Ernst, René Magritte e Salvador Dalí, no campo das artes plásticas.\n[…]\nEm 1947 Cândido Costa Pinto, que desde 1942 seguia uma linha estética surrealista, contacta, em Paris, com o recém-organizado Grupo Surrealista; André Breton sugere-lhe a organização de um grupo idêntico em Portugal. É deste desafio que irá nascer o \"Grupo Surrealista de Lisboa\".\n[…]\nA primeira obra surrealista, segundo Breton, foi Les Chants de Maldoror, e a primeira obra escrita e publicada pelo  grupo foi Les Champs Magnétiques (maio–junho de 1919). A Littérature continha obras automatistas e relatos de sonhos. Tanto a revista como o portefólio mostravam o seu desdém pelos significados literais atribuídos aos objetos, centrando-se antes nos subentendidos, nas correntes poéticas subjacentes.\n[…]\nEntre os exemplos de literatura surrealista contam-se Le Pèse-Nerfs (1926), Artaud, Le Con d'Irène (1927), Aragon, Mort aux vaches et au champ d'honneur (1929), de Péret, Mr. Knife Miss Fork (1931), de Crevel, A Coruja Cega (1937), de Sadegh Hedayat, e Sur la route de San Romano (1948), de Breton.\n[…]\nAndré Breton\n[…]\nManifesto Surrealista",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Barroco",
      "descricao": "Estilo artístico europeu dos séculos dezessete e dezoito, marcado pelo drama, pelo movimento e pelos contrastes de luz."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Uma das origens propostas para a palavra barroco, nome do estilo de Caravaggio e Rubens, é um termo português. O que ele designava?",
    "resposta": "Pérola de formato irregular",
    "distratores": [
      "Concha marinha",
      "Ouro falso",
      "Pedra polida"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Baroque"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Baroque",
        "situacao": "ok",
        "texto": "The Baroque (UK:  bə-ROK, US:  bə-ROHK, French: [baʁɔk]) is a Western style of architecture, music, dance, painting, sculpture, poetry, and other arts that flourished from the early 1600s until the 1750s. It followed Renaissance art and Mannerism and preceded the Rococo (in the past often referred to as \"late Baroque\") and Neoclassical styles.\n[…]\nThe English word baroque comes directly from the French. The French word originated the Portuguese term barroco 'a flawed pearl', pointing to the Latin verruca 'wart', or to a word with the Romance suffix -ǒccu (common in pre-Roman Iberia). Other sources suggest a Medieval Latin term used in logic, baroco, as the most likely source.\n[…]\nThe word baroque was also associated with irregular pearls before the 18th century. The French baroque and Portuguese barroco were terms often associated with jewelry. An example from 1531 uses the term to describe pearls in an inventory of Charles V of France's treasures.\n[…]\nLater, the word appears in a 1694 edition of Le Dictionnaire de l'Académie Française, which describes baroque as \"only used for pearls that are imperfectly round.\" A 1728 Portuguese dictionary similarly describes barroco as relating to a \"coarse and uneven pearl\".\n[…]\nIn 1762 Le Dictionnaire de l'Académie Française recorded that the term could figuratively describe something \"irregular, bizarre or unequal\".\n[…]\nAppreciation for the Baroque reappeared with the rise of Postmodernism, a movement that questioned Modernism (the status quo after WW2), and which promoted the inclusion of elements of historic styles in new designs, and appreciation for the pre-Modernist past. Specific references to Baroque are rare, since Postmodernism often included highly simplified elements that were 'quotations' of Classicism in general, like pediments or columns.\n[…]\nThe baroque and rococo culture"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Barroco",
        "situacao": "ok",
        "texto": "Barroco é o estilo artístico que floresceu entre o final do século XVI e meados do século XVIII, inicialmente na Itália, difundindo-se em seguida pelos países católicos da Europa e da América, antes de atingir, em uma forma modificada, as áreas protestantes e alguns pontos do Oriente.\n[…]\nUsualmente, considera-se que o termo \"barroco\" originalmente significaria \"pérola irregular ou imperfeita\", um termo cuja origem é obscura, pode derivar do português antigo, do espanhol, do francês ou do árabe. Segundo outras opiniões, porém, o termo tem origem em uma fórmula mnemotécnica usada pelos escolásticos para designar um dos modos do silogismo, o que daria ao termo um sentido pejorativo de raciocínio estranho, tortuoso, que confunde o falso com o verdadeiro.\n[…]\nA palavra rapidamente ganhou circulação nas línguas francesa e italiana, mas nas artes plásticas só foi usada no fim do período em questão, quando novos classicistas começaram a criticar excessos e irregularidades de um estilo já então visto como decadente e uma simples degeneração dos princípios clássicos.\n[…]\nDepois da proposição feita por Eugenio d'Ors, muitos críticos consideram que o Barroco, mais do que um estilo particular, é um princípio constante na história da arte e da cultura, um princípio que enfatiza o drama, o contraste, a vitalidade exuberante, o exagero, contrapondo-se periodicamente com sua antítese, um princípio que veio a ser chamado Clássico, que prima pela economia, lógica, equilíbrio e harmonia.\n[…]\nA decoração de interiores foi parte integral da concepção da arte barroca, contribuindo de modo importante para a consumação do desejo de criar obras de arte \"totais\" e envolventes, que tiveram seus pontos máximos nos interiores dos grandes palácios, teatros e igrejas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Saturno Devorando um Filho",
      "descricao": "Pintura negra de Francisco Goya, feita entre 1820 e 1823, do titã Saturno devorando um de seus filhos; está no Museu do Prado."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Antes de ir para o Museu do Prado, Saturno Devorando um Filho, de Goya, foi pintado originalmente em que lugar?",
    "resposta": "Nas paredes da casa dele",
    "distratores": [
      "Numa capela de Madri",
      "Em painéis de madeira",
      "Num palácio real"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Saturn_Devouring_His_Son",
      "https://en.wikipedia.org/wiki/Black_Paintings"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Saturn_Devouring_His_Son",
        "situacao": "ok",
        "texto": "Saturn Devouring His Son (Spanish: Saturno devorando a su hijo; also known as Saturn) is a painting by Spanish artist Francisco Goya. The work is one of the 14 so-called Black Paintings that Goya painted directly on the walls of his house some time between 1820 and 1823. It was transferred to canvas after Goya's death and is now in the Museo del Prado in Madrid.\n[…]\nThe painting is traditionally considered a depiction of the Greek myth of the Titan Cronus, whom the Romans called Saturn, eating one of his children out of fear of a prophecy by Terra (Gaia) that one of his children would overthrow him. Like all of the Black Paintings, it was not originally intended for public consumption and Goya did not provide a title or notes. Thus, its interpretation is disputed.\n[…]\nSaturn Devouring His Son was one of six works Goya painted in the dining room. Goya never named the works he produced at Quinta del Sordo; the names were assigned by others after his death. This interpretation of the painting sees it as a reference to the Roman myth (inspired by the original Greek myth), in which Terra (Gaia) foretold that one of the sons of Saturn (Cronus) would overthrow him, just as he had overthrown his father, Caelus (Uranus).\n[…]\nThe effects of time on the murals, coupled with the inevitable damage caused by the delicate operation of mounting the crumbling plaster on canvas, meant that most of the murals required restoration work and some detail may have been lost. In particular, it has been claimed that the mural originally depicted Saturn with an erect penis, and that this detail was removed on the request of Cubells' client, Frédéric Émile d'Erlanger.\n[…]\nList of works by Francisco Goya\n[…]\nMedia related to Saturno devorando a su hijo at Wikimedia Commons"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Black_Paintings",
        "situacao": "ok",
        "texto": "The Black Paintings (Spanish: Pinturas negras) is the name given to a group of 14 paintings by Francisco Goya from the later years of his life, likely between 1820 and 1823. They portray intense, haunting themes, reflective of both his fear of insanity and his bleak outlook on humanity. In 1819, at the age of 72, Goya moved into a two-storey house outside Madrid that was called Quinta del Sordo (D\n[…]\nAlthough the house had been named after the previous owner, who was deaf, Goya too was nearly deaf at the time as a result of an unknown illness he had suffered when he was 46. The paintings originally were painted as murals on the walls of the house, later being \"hacked off\" the walls and attached to canvas by owner Baron Frédéric Émile d'Erlanger. They are now in the Museo del Prado in Madrid.\n[…]\nJunquera's theory was rejected by Goya scholar Nigel Glendinning, who published an academic study defending the paintings' authenticity and later held a lecture in Madrid restating his conviction. Today, Museo del Prado recognises the Black Paintings as authentic.\n[…]\nIn 2021, French artist Philippe Parreno was commissioned by the Beyeler Foundation to make a fictional film to accompany their Francisco de Goya exhibition. Parreno called the film La Quinta del Sordo (House of the Deaf). For it, at the Prado Parreno filmed the paintings up-close in detail, creating a unique level of proximity and intimacy between the paintings and the viewer. La Quinta del Sordo was given a soundscape soundtrack.\n[…]\nBarragán, Juan José, Nueva interpretación del Saturno de Goya, Aragón turístico y monumental, SIPA, Zaragoza, 2022, año 96, nº 393, pp. 42-47. ISSN 1579-8860\n[…]\nHughes, Robert. Goya. New York: Alfred A. Knopf, 2004. ISBN 0-394-58028-1\n[…]\nLicht, Fred. Goya: The Origins of the Modern Temper in Art. Universe Books, 1979. ISBN 0-87663-294-0\n[…]\nYriarte, Charles, Goya, sa vie, son oeuvre, Paris, Henri Plon, 1867."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Saturno_devorando_um_filho",
        "situacao": "ok",
        "texto": "O quadro Saturno devorando um filho (espanhol: Saturno devorando a un hijo) é uma das pinturas a óleo sobre reboco que fazia parte da decoração dos muros da casa que Francisco de Goya adquiriu em 1819 chamada a Quinta del Sordo. Pertence, portanto, à série das Pinturas negras.\n[…]\nO tema de Saturno está relacionado, segundo Freud, com a melancolia e a destruição e estes traços estão presentes nas pinturas negras. Com expressão terrível, Goya situa-nos frente do horror canibal das fauces abertas, os olhos em branco, o gigante envelhecido e a massa informe do corpo sanguinolento do seu filho.\n[…]\nO filho devorado, com um corpo já adulto, ocupa o centro da composição. Assim como na pintura de Judite e Holofernes, um dos temas centrais é o do corpo humano mutilado. Não somente o é o corpo atroz do menino, mas também, mediante o enquadre recolhido e a iluminação de claro-escuro extraordinariamente contrastada, as pernas do deus, sumidas a partir do joelho na negrura, num vácuo imaterial.\n[…]\nEmprega uma gama de brancos e negros, aplicada em manchas de cor grossas, só rota pelo ocre das carnações e a chama fúlgida em branco e vermelho da carne viva do filho. Sánchez Cantón comparou-o com o que pintara Rubens em 1636 para a Torre da Parada do Palácio de El Pardo de Madrid. No seu estudo assinala como a violência do de Goya é muito superior, despojado do seu pretexto de mitologia, prefigurando com isso o expressionismo.\n[…]\nOutra análise pode ser feita, se tomando por base a mitologia grega onde a imagem que se tem de Chronos (chamado de Saturno pelos romanos), é a de um homem que devora o seu próprio filho, num ato de canibalismo difícil de compreender na actualidade.\n[…]\n«Ficha da obra no Museu do Prado.»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Impressão, Nascer do Sol",
      "descricao": "Quadro de Claude Monet de 1872."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "O quadro Impressão, Nascer do Sol, de Claude Monet, mostra o porto de que cidade francesa?",
    "resposta": "Le Havre",
    "distratores": [
      "Marselha",
      "Ruão",
      "Bordéus"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Impression,_Sunrise"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Impression,_Sunrise",
        "situacao": "ok",
        "texto": "Impression, Sunrise (French: Impression, soleil levant) is an 1872 painting by Claude Monet first shown at what would become known as the \"Exhibition of the Impressionists\" in Paris in April, 1874. The painting is credited with inspiring the name of the Impressionist movement.\n[…]\nMonet visited his hometown of Le Havre in the Northwest of France in 1872 and proceeded to create a series of works depicting the port.\n[…]\nThe group of studies made from Monet's hotel room was made from canvas with a base layer of gray in different tones. The layered effect provides depth in spite of imprecise details, creating a rich and tangible environment that seems like Le Havre, though not an exact likeness. Gordon and Forge discuss boundaries and the use of color in Impression, Sunrise, claiming that\n[…]\nIn an interview with Maurice Guillemot for La Revue Illustrée, Monet reflected on his handling of landscape like the port of Le Havre in consideration of the movement and the 1874 exhibition: \"A landscape is only an impression, instantaneous, hence the label they've given us-- all because of me, for that matter. I'd submitted something done out of my window at Le Havre, sunlight in the mist with a few masts in the foreground jutting up from the ships below.\n[…]\nThese works then seemed as a continuation of his Le Havre scene, \"one of the sequence of canvases in which he was seeking to capture the most fleeting natural effects, as a display of his painterly virtuosity.\" Evoking the name of Impression, Sunrise, but also providing stylistic connections, the later paintings are similarly \"quite summary and economical in handling, and depict particularly hazy or misty effects\" that is characteristic of Monet's impressionism in particular.\n[…]\nList of paintings by Claude Monet"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Impress%C3%A3o%2C_nascer_do_sol",
        "situacao": "ok",
        "texto": "Impressão, nascer do sol (do francês: Impression, soleil levant) é a famosa pintura impressionista de Claude Monet, realizada em 1872. A pintura nasceu em Le Havre, porto francês representado na obra, com uma cerrada névoa sobre o estaleiro, os barcos e as chaminés no fundo da composição. A pintura em óleo sobre a tela está exposta no Museu Marmottan, em Paris.\n[…]\nMonet deu à pintura o nome de Impressão. O \"nascer do sol\", que segue o nome da obra, foi adicionado pelo autor do manual da exposição.\n[…]\nA partir desta tela, nasceu o movimento impressionista. Se tornou conhecida quando estava presente em um show independente. Um grupo de artistas fora do Salão de Paris disponibilizou as obras ao atelier do fotógrafo Félix Nadar, em 1874, em uma fracassada exposição, abatida pela crítica, que traçou, inclusive, do próprio nome do quadro. Na exposição constavam igualmente obras de Boudin, Sisley, Degas e Renoir.\n[…]\nNo quadro, consegue imaginar-se uma grelha (grade) por detrás da pintura, que Monet terá utilizado, sobre a qual, solidamente, são sobrepostas pinceladas de tinta sem grandes misturas, ou seja, as tintas originais.\n[…]\nA sobreposição de cores originais, cruas, sem misturas, é uma grande característica da técnica impressionista, continuada a partir do momento em que os espectadores e os artistas se deram conta de que conseguiam obter resultados mais próximos da realidade.\n[…]\nA ideia principal dos pintores impressionistas é fazer com que a imagem pareça, quase que completamente, iluminada pelo sol. Para conseguir este efeito, o autor implica à sua tela pinceladas em tons mais claros (áreas iluminadas pelo sol) e tons mais escuros (áreas sombreadas).\n[…]\nPinturas de Claude Monet\n[…]\nImpressionismo",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Período Azul de Picasso",
      "descricao": "Fase de Pablo Picasso, entre 1901 e 1904, de quadros melancólicos pintados em tons de azul."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Logo depois do Período Azul, Picasso passou a pintar arlequins e artistas de circo em tons mais quentes. Como se chama essa nova fase?",
    "resposta": "Período Rosa",
    "distratores": [
      "Período Vermelho",
      "Período Ocre",
      "Período Dourado"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Picasso%27s_Rose_Period",
      "https://en.wikipedia.org/wiki/Picasso%27s_Blue_Period"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Picasso%27s_Rose_Period",
        "situacao": "ok",
        "texto": "The Rose Period (Spanish: Período rosa) comprises the works produced by Spanish painter Pablo Picasso between 1904 and 1906. It began when Picasso settled in Montmartre at the Bateau-Lavoir among Bohemian poets and writers.\n[…]\nFollowing his Blue Period – which depicted themes of poverty, loneliness, and despair in somber, blue tones – Picasso's Rose Period represents more pleasant themes of clowns, harlequins and carnival performers, depicted in cheerful vivid hues of red, orange, pink and earth tones.\n[…]\nBased largely on intuition rather than direct observation, Picasso's Rose Period marks the beginning of the artist's stylistic experiments with primitivism; influenced by pre-Roman Iberian sculpture, Oceanic and African art. This led to Picasso's African Period in 1907, culminating in the Proto-Cubist Les Demoiselles d'Avignon, regarded as a masterpiece.\n[…]\nThe Rose Period has been considered French influenced, while the Blue Period more Spanish influenced, although both styles emerged while Picasso was living in Paris. Picasso's Blue Period began in late 1901, following the death of his friend Carlos Casagemas and the onset of a bout of major depression. It lasted until 1904, when Picasso's psychological condition improved.\n[…]\nThe Rose Period is named after Picasso's heavy use of pink tones in his works from this period, from the French word for pink, which is rose.\n[…]\nPicasso's third highest selling painting, Young Girl with a Flower Basket, and his fifth highest, Garçon à la pipe (Boy with a pipe) were both painted during the Rose Period.\n[…]\nPicasso's Blue Period\n[…]\nPicasso's African Period\n[…]\nList of Picasso artworks 1901–1910"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Picasso%27s_Blue_Period",
        "situacao": "ok",
        "texto": "The Blue Period (Spanish: Período Azul) comprises the works produced by Spanish painter Pablo Picasso between 1901 and 1904. During this time, Picasso painted essentially monochromatic paintings in shades of blue and blue-green, only occasionally warmed by other colors. These sombre works, inspired by Spain and painted in Barcelona and Paris, are now some of his most popular works, although he had\n[…]\nIn the latter part of 1901, Picasso sank into a severe depression and blue tones began to dominate his paintings. Picasso's painting La mort de Casagemas, completed early in the year following his friend's suicide, was done in hot, bright hues. The painting considered the first of his Blue Period, Casagemas in His Coffin, was completed later in 1901 when Picasso was sinking into a major depression. Picasso, normally an outgoing socializer, withdrew from his friends.\n[…]\nPicasso's bout of depression was to last several years. Picasso's career had been promising before 1901 and early in that year he was making \"a splash\" in Paris. However, as he moved towards subject matter such as society's poor and outcast, and accented this with a cool, anguished mood with blue hues, the critics and the public turned away from his works. Members of the public were uninterested in displaying the Blue Period works in their homes.\n[…]\nBlindness is a recurrent theme in Picasso's works of this period, also represented in The Blindman's Meal (1903, the Metropolitan Museum of Art) and in the portrait of Celestina (1903).\n[…]\nPicasso's Blue Period was followed by his Rose Period. Picasso's bout with depression gradually ended, and as his psychological state improved, he moved towards more joyful, vibrant works, and emphasized the use of pinks (\"rose\" in French) and other warm hues to express the shift in mood and subject matter.\n[…]\nList of Picasso artworks 1901–1910\n[…]\nPicasso's African Period"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Per%C3%ADodo_rosa_de_Picasso",
        "situacao": "ok",
        "texto": "O período rosa de Picasso representa uma época importante na vida e obra do artista espanhol Pablo Picasso e teve um grande impacto nos desenvolvimentos da arte moderna. Tudo começou em 1904, quando Picasso se estabeleceu em Montmartre, no Bateau-Lavoir, entre poetas e escritores boêmios.\n[…]\nApós o período azul de Picasso, retratando temas de pobreza, solidão e desespero em tons sombrios de tristeza, o período rosa de Picasso representa temas mais agradáveis de palhaços, arlequins e artistas de carnaval, retratados em tons vívidos alegres de vermelho, laranja, rosa e tons de terra.\n[…]\nO período rosa durou de 1904 a 1906. Picasso estava feliz em seu relacionamento com Fernande Olivier, que ele conhecera em 1904, e isso foi sugerido como uma das possíveis razões pelas quais ele mudou seu estilo de pintura. Arlequins, artistas de circo e palhaços aparecem com frequência no período das rosas e povoam as pinturas de Picasso em vários estágios ao longo de sua longa carreira.\n[…]\nO arlequim, um personagem cômico geralmente representado em roupas estampadas de xadrez, tornou-se um símbolo pessoal de Picasso.\n[…]\nO período rosa foi considerado influenciado pelo francês, enquanto o período azul, mais influenciado pelo espanhol, embora ambos os estilos tenham surgido enquanto Picasso morava em Paris. O período azul de Picasso começou no final de 1901, após a morte de seu amigo Carlos Casagemas e o início de um surto de depressão maior. Durou até 1904, quando a condição psicológica de Picasso melhorou. O período rosa foi nomeado devido ao uso intenso de tons de rosa por Picasso em suas obras deste período.\n[…]\nWattenmaker, Richard J.; Distel, Anne, et al. (1993). Great French Paintings from the Barnes Foundation. Nova Iorque: Alfred A. Knopf. ISBN 0-679-40963-7",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "A Jangada da Medusa",
      "descricao": "Quadro de Théodore Géricault no Louvre."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "A jangada retratada por Géricault levava cerca de cento e cinquenta pessoas abandonadas após o naufrágio. Quantas foram resgatadas com vida, dias depois?",
    "resposta": "Quinze",
    "distratores": [
      "Três",
      "Quarenta",
      "Setenta"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Raft_of_the_Medusa"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Raft_of_the_Medusa",
        "situacao": "ok",
        "texto": "The Raft of the Medusa (French: Le Radeau de la Méduse [lə ʁado d(ə) la medyz])—originally titled Scène de Naufrage (Shipwreck Scene)—is an oil painting of 1818–1819 by the French Romantic painter and lithographer Théodore Géricault (1791–1824). Completed when the artist was 27, the work has become an icon of French Romanticism.\n[…]\nThe Raft of the Medusa was first shown at the 1819 Paris Salon, under the title Scène de Naufrage (Shipwreck Scene), although its real subject would have been unmistakable for contemporary viewers. The exhibition was sponsored by Louis XVIII and featured nearly 1,300 paintings, 208 sculptures and numerous other engravings and architectural designs. Géricault's canvas was the star at the exhibition: \"It strikes and attracts all eyes\" (Le Journal de Paris).\n[…]\nThe historian Jules Michelet approved: \"our whole society is aboard the raft of the Medusa\".\n[…]\nIf Rodin was inspired to rival Michelangelo's Last Judgment, he had Géricault's Raft of the Medusa in front of him for encouragement.\" Kenneth Clark described the painting is the \"chief example of romantic pathos expressed through the nude; and that obsession with death, which drove Géricault to frequent mortuary chambers and places of public execution, gives truth to his figures of the dead and the dying.\n[…]\nThe 2004 exhibition at the Clark Art Institute, Bonjour Monsieur Courbet: The Bruyas Collection from the Musee Fabre, Montpellier, sought to compare the 19th-century Realist painters Courbet, Honoré Daumier, and early Édouard Manet with artists associated with Romanticism, including Géricault and Delacroix. Citing The Raft of the Medusa as an instrumental influence on Realism, the exhibition drew comparisons between all of the artists."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/A_Balsa_da_Medusa",
        "situacao": "ok",
        "texto": "Balsa da Medusa (em francês:  Le Radeau de la Méduse) é uma pintura a óleo executada entre 1818 e 1819 pelo pintor da época do romantismo e litógrafo Théodore Géricault (1791–1824). Está exposta no Museu do Louvre, Paris, e é considerada um ícone da pintura ocidental.\n[…]\n30 anos após a conclusão da obra, o seu amigo Montfort declarou:\n[…]\nA Jangada da Medusa foi adquirida pelo conservador do Louvre, Louis Nicolas Philippe Auguste de Forbin, após a morte de Géricault em 1824. Entre 1826 e 1830, o artista americano George Cooke fez uma cópia da pintura em escala menor, que foi exposta com sucesso nos Estados Unidos.\n[…]\nA Jangada da Medusa contém os gestos e a grande escala da pintura de história tradicional; no entanto, apresenta pessoas comuns, em vez de heróis, reagindo ao drama que se desenrola. A jangada de Géricault carece propositadamente de um herói, e a sua pintura não apresenta nenhuma causa além da própria sobrevivência.\n[…]\nHubert Wellington afirmou que, embora Delacroix fosse um admirador de Gros, o entusiasmo dominante da sua juventude foi para Géricault. A composição dramática, com fortes contrastes de tom e gestos pouco convencionais, estimulou Delacroix a confiar nos seus próprios impulsos criativos. Delacroix afirmou: \"Géricault permitiu-me ver a sua Jangada da Medusa enquanto ele ainda trabalhava nela\". A influência é visível em A Barca de Dante (1822) e reaparece em O Naufrágio de Don Juan (1840).\n[…]\nEmbora Gustave Courbet possa ser descrito como anti-romântico, obras como Um Enterro em Ornans (1849–50) e O Atelier do Artista (1855) devem muito à Jangada da Medusa. A influência manifesta-se na escala enorme e na vontade de retratar pessoas comuns e eventos políticos atuais em ambientes reais.",
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
