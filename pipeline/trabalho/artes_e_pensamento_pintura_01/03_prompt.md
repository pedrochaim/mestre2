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
7. **Distratores** (só em `multipla`): críveis, da mesma categoria da resposta e com no máximo 4 palavras (MANIFESTO §6).
8. **Duplicatas:** se duas perguntas do lote perguntam o mesmo fato, mantenha a melhor e descarte a outra.

Devolva exatamente uma avaliação para cada pergunta, usando o `indice` informado.

# Lote

[
  {
    "indice": 1,
    "ancora": {
      "nome": "Fauvismo",
      "descricao": "Movimento de pintura francês do início do século vinte, liderado por Henri Matisse, marcado por cores puras e intensas."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Em 1905, um crítico chamou Matisse e seus colegas de fauves, palavra que deu nome ao fauvismo. O que ela significa em português?",
    "resposta": "Feras",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Fauvismo",
      "https://en.wikipedia.org/wiki/Fauvism"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Fauvismo",
        "situacao": "ok",
        "texto": "O fauvismo ou fovismo (do francês fauvisme, oriundo de les fauves, \"as feras\", como foram chamados os não seguidores do cânone impressionista, vigente à época) é uma corrente artística do início do século XX, que se desenvolveu de 1905 até a segunda metade de 1907.\n[…]\nO estilo começou em 1901 mas só foi denominado e reconhecido como um movimento artístico em 1905. Segundo Henri Matisse, em \"Notes d'un Peintre\", pretendia-se com o fauvismo \"uma arte do equilíbrio, da pureza e da serenidade, destituída de temas perturbadores ou deprimentes\".\n[…]\nEste grupo de pintores utilizava nos seus quadros cores violentas, de forma arbitrária. A denominação do movimento deve-se ao crítico conservador Louis Vauxcelles, que, no Salão de Outono de 1905, em Paris, comparou-os a feras (fauves). Havia ali uma escultura acadêmica representando um menino, rodeada de pinturas neste novo estilo, que o levou a dizer que aquilo lhe lembrava \"um Donatello entre as feras\".\n[…]\nOs pintores fauvistas foram influenciados por: Van Gogh, através de seu emocionalismo e ardor passional no uso das cores, e por Gauguin, com seu primitivismo e visão sintética da natureza. A nova estética obedece aos impulsos instintivos ou as sensações vitais. Criar desobedecendo a uma ordem intelectual, onde as linhas e as cores devem jorrar no mesmo estado de pureza das crianças e selvagens, afrontando os cânones tradicionais da pintura. Evitam a ilusão da tridimensionalidade.\n[…]\nO fauvismo tem como características marcantes:\n[…]\nHenri Matisse\n[…]\nMILLER, Joseph Émile. O Fauvismo, tradução de Adelaide Penha e Costa, São Paulo, Verbo, Ed. da Universidade de São Paulo, 1976."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Fauvism",
        "situacao": "ok",
        "texto": "Fauvism ( FOH-viz-əm) is a style of painting and an art movement that emerged in France at the beginning of the 20th century. It was the style of les Fauves (French pronunciation: [le fov], the wild beasts), a group of modern artists whose works emphasized painterly qualities and strong color over the representational or realistic values retained by Impressionism.\n[…]\nWhile Fauvism as a style began around 1904 and continued beyond 1910, the movement as such lasted only a few years, 1905–1908, and had three exhibitions. The leaders of the movement were André Derain and Henri Matisse.\n[…]\nAfter viewing the boldly colored canvases of Henri Matisse, André Derain, Albert Marquet, Maurice de Vlaminck, Kees van Dongen, Charles Camoin, Robert Deborne and Jean Puy at the Salon d'Automne of 1905, the critic Louis Vauxcelles disparaged the painters as \"fauves\" (wild beasts), thus giving their movement the name by which it became known, Fauvism. The artists shared their first exhibition at the 1905 Salon d'Automne.\n[…]\nFollowing the Salon d'Automne of 1905, which marked the beginning of Fauvism, the Salon des Indépendants of 1906 marked the first time all the Fauves would exhibit together. The centerpiece of the exhibition was Matisse's monumental Le Bonheur de Vivre (The Joy of Life). Critics were horrified by its flatness, bright colors, eclectic style and mixed technique.\n[…]\nThe third group exhibition of the Fauves occurred at the Salon d'Automne of 1906, held from 6 October to 15 November. Metzinger exhibited his Fauvist/Divisionist Portrait of M. Robert Delaunay (no. 1191) and Robert Delaunay exhibited his painting L'homme à la tulipe (Portrait of M. Jean Metzinger) (no. 420 of the catalogue). Matisse exhibited his Liseuse, two still lifes (Tapis rouge and à la statuette), flowers and a landscape (no. 1171–1175).\n[…]\nNeo-Fauvism"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Caravaggio",
      "descricao": "Pintor barroco italiano, nascido Michelangelo Merisi, mestre do claro-escuro, que viveu de 1571 a 1610."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O pintor conhecido como Caravaggio tirou o apelido de uma cidade da Lombardia. Qual era o primeiro nome dele, o mesmo de um gênio renascentista?",
    "resposta": "Michelangelo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Caravaggio",
      "https://pt.wikipedia.org/wiki/Caravaggio"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Caravaggio",
        "situacao": "ok",
        "texto": "Michelangelo Merisi da Caravaggio (also Michele Angelo Merigi or Amerighi da Caravaggio; 29 September 1571 – 18 July 1610), known mononymously as Caravaggio, was an Italian painter active in Rome for a significant portion of his artistic life. He began his apprenticeship in Milan in 1584, and during the final four years of his life, he moved between Naples, Malta, and Sicily.\n[…]\nCaravaggio (Michelangelo Merisi or Amerighi) was born in Milan, where his father, Fermo (Fermo Merixio), was a household administrator and architect-decorator to the marquess of Caravaggio, a town 35 km (22 mi) to the east of Milan and south of Bergamo. It was previously assumed that he had been born in Caravaggio. In 1576 the family moved to Caravaggio to escape a plague that ravaged Milan, and Caravaggio's father and grandfather both died there on the same day in 1577.\n[…]\nHowever, in Rome and Italy, it was not Caravaggio, but the influence of his rival Annibale Carracci, blending elements from the High Renaissance and Lombard realism, that ultimately triumphed.\n[…]\n\"Michelangelo Merisi, son of Fermo di Caravaggio – in painting not equal to a painter, but to Nature itself – died in Port' Ercole – betaking himself hither from Naples – returning to Rome – 15th calend of August – In the year of our Lord 1610 – He lived thirty-six years nine months and twenty days – Marzio Milesi, Jurisconsult – Dedicated this to a friend of extraordinary genius.\"\n[…]\nAnother biopic, L'Ombra di Caravaggio (Caravaggio's Shadow), directed by Michele Placido and starring Riccardo Scamarcio, was released in 2022.\n[…]\nChristiansen, Keith. Caravaggio (Michelangelo Merisi) (1571–1610) and His Followers The Metropolitan Museum of Art, October 1, 2003.\n[…]\nCaravaggio, Michelangelo Merisi da Caravaggio WebMuseum, Paris webpage\n[…]\nCaravaggio's Supper at Emmaus Archived 11 October 2014 at the Wayback Machine, accessed 13 February 2013"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Caravaggio",
        "situacao": "ok",
        "texto": "Michelangelo Merisi da Caravaggio, conhecido mononimamente como Caravaggio (pronúncia italiana: [karaˈvadd͡ʒo]) (Milão, 29 de setembro de 1571 — Porto Ercole, 18 de julho de 1610), foi um dos mais notáveis pintores da escola lombarda do início do Barroco. Os seus primeiros anos são pouco conhecidos.\n[…]\nMichelangelo Merisi nasceu em 29 de setembro de 1571, em Milão, na freguesia de Santa Maria de la Passarella, onde residiam os seus pais Fermo Merisi  e Lucia Aratori que, ambos de Caravaggio, pequena cidade da região de Bérgamo, na época sob domínio espanhol, se casaram em 15 de janeiro do mesmo ano, tendo como testemunha Francesco I Sforza de Caravaggio, marquês de Caravaggio.\n[…]\nPouco se sabe sobre os primeiros anos de Caravaggio, e a sua data e local de nascimento por muito tempo foram um enigma, até a descoberta, em 2007, da sua certidão de nascimento nos arquivos históricos da diocese de Milão, onde consta a data de 30 de setembro de 1571 — um dia depois da celebração do Arcanjo Miguel, a quem ele provavelmente deve o seu nome. \"Hoje, dia 30 foi batizado Michelangelo, filho do Signor Fermo Merisi e da Signora Lucia Aratori.\n[…]\nNo século XX, o renovado interesse do público e dos historiadores de arte por Caravaggio deve muito a Roberto Longhi, que a partir de 1926 publicou uma série de análises sobre Caravaggio, o seu círculo, os seus antecessores e os seus seguidores (sobretudo em França); Longhi desempenha um papel importante na ligação do pintor às suas fontes tipicamente lombardas, assim como identifica o papel nocivo dos primeiros biógrafos no seu destino crítico: \"a crítica […] permaneceu estagnada no pântano da 'Ideia' de Bellori, limitando-se a coaxar censuras contra o artista até o surgimento do Neoclassicismo\", momento que trouxe novos horizontes.\n[…]\n«Pintores Online»"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Caravaggio",
      "descricao": "Pintor barroco italiano, nascido Michelangelo Merisi, mestre do claro-escuro, que viveu de 1571 a 1610."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1606, Caravaggio fugiu de Roma e nunca mais voltou a viver lá. O que provocou a fuga?",
    "resposta": "Matou um homem numa briga",
    "fonte": [
      "https://en.wikipedia.org/wiki/Caravaggio",
      "https://pt.wikipedia.org/wiki/Caravaggio"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Caravaggio",
        "situacao": "ok",
        "texto": "Michelangelo Merisi da Caravaggio (also Michele Angelo Merigi or Amerighi da Caravaggio; 29 September 1571 – 18 July 1610), known mononymously as Caravaggio, was an Italian painter active in Rome for a significant portion of his artistic life. He began his apprenticeship in Milan in 1584, and during the final four years of his life, he moved between Naples, Malta, and Sicily.\n[…]\nCaravaggio (Michelangelo Merisi or Amerighi) was born in Milan, where his father, Fermo (Fermo Merixio), was a household administrator and architect-decorator to the marquess of Caravaggio, a town 35 km (22 mi) to the east of Milan and south of Bergamo. It was previously assumed that he had been born in Caravaggio. In 1576 the family moved to Caravaggio to escape a plague that ravaged Milan, and Caravaggio's father and grandfather both died there on the same day in 1577.\n[…]\n\"Michelangelo Merisi, son of Fermo di Caravaggio – in painting not equal to a painter, but to Nature itself – died in Port' Ercole – betaking himself hither from Naples – returning to Rome – 15th calend of August – In the year of our Lord 1610 – He lived thirty-six years nine months and twenty days – Marzio Milesi, Jurisconsult – Dedicated this to a friend of extraordinary genius.\"\n[…]\nAnother biopic, L'Ombra di Caravaggio (Caravaggio's Shadow), directed by Michele Placido and starring Riccardo Scamarcio, was released in 2022.\n[…]\nChristiansen, Keith. Caravaggio (Michelangelo Merisi) (1571–1610) and His Followers The Metropolitan Museum of Art, October 1, 2003.\n[…]\ncaravaggio.org Analysis of 100 important Caravaggio works\n[…]\nCaravaggio, Michelangelo Merisi da Caravaggio WebMuseum, Paris webpage\n[…]\nCaravaggio's EyeGate Gallery\n[…]\nCaravaggio's paintings in the Contarelli Chapel, San Luigi dei Francesi, accessed 13 February 2013\n[…]\nCaravaggio's Supper at Emmaus Archived 11 October 2014 at the Wayback Machine, accessed 13 February 2013"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Caravaggio",
        "situacao": "ok",
        "texto": "Michelangelo Merisi da Caravaggio, conhecido mononimamente como Caravaggio (pronúncia italiana: [karaˈvadd͡ʒo]) (Milão, 29 de setembro de 1571 — Porto Ercole, 18 de julho de 1610), foi um dos mais notáveis pintores da escola lombarda do início do Barroco. Os seus primeiros anos são pouco conhecidos.\n[…]\nPersonalidade inquieta, enfrentou sérias vicissitudes ao longo da sua vida até à data crucial de 28 de maio de 1606, quando, tendo cometido um homicídio durante uma briga, foi condenado à morte e fugiu de Roma para escapar à pena capital. Durante os seus últimos quatro anos, perambulou entre Nápoles, Malta e Sicília, até falecer em circunstâncias obscuras em Porto Ercole, na Toscana.\n[…]\nOs primeiros anos na grande cidade são pouco conhecidos: esse período, mais tarde e com base em factos mal interpretados, forjou uma reputação sobre Caravaggio de homem violento e bandido, muitas vezes forçado a fugir das consequências legais das suas rixas e duelos. Viveu inicialmente na pobreza, hospedado por Pandolfo Pucci.\n[…]\nEnquanto esteve sob a proteção do cardeal Del Monte, Caravaggio foi autorizado pelo seu patrono a trabalhar para outros clientes. Este homem piedoso, membro da antiga nobreza, era também modesto, usando normalmente trajes desgastados; era, contudo, uma das personalidades mais cultas de Roma, além de diplomata ao serviço do Grão-Ducado da Toscana.\n[…]\nBrejon de Lavergnée observa no método de Ebert-Schifferer a análise atenta das fontes (Van Mander, Giulio Mancini, Baglione e Bellori) e observa que tal análise põe em causa o cliché mais generalizado sobre Caravaggio: o seu carácter violento. A expressão provém originalmente de um texto do holandês Van Mander, publicado em 1604, que retrata o pintor como um homem sempre pronto a lutar e a causar problemas.\n[…]\nCaravaggismo"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Sandro Botticelli",
      "descricao": "Pintor renascentista florentino do século quinze, autor de O Nascimento de Vênus e A Primavera."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O apelido do florentino Sandro Botticelli, herdado de um irmão, significa pequeno o quê?",
    "resposta": "Barril",
    "distratores": [
      "Sino",
      "Botão",
      "Garrafa"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Sandro_Botticelli"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sandro_Botticelli",
        "situacao": "ok",
        "texto": "Alessandro di Mariano di Vanni Filipepi (c. 1445 – May 17, 1510), better known as Sandro Botticelli ( BOT-ih-CHEL-ee; Italian: [ˈsandro bottiˈtʃɛlli]) or simply Botticelli, was an Italian painter of the Early Renaissance. Botticelli's posthumous reputation suffered until the late 19th century, when he was rediscovered by the Pre-Raphaelites who stimulated a reappraisal of his work.\n[…]\nBotticelli lived all his life in the same neighbourhood of Florence; his only significant times elsewhere were the months he spent painting in Pisa in 1474 and the Sistine Chapel in Rome in 1481–82. Botticelli received patronage from members of the Medici family, including Lorenzo de' Medici and his circle.\n[…]\nBotticelli was born in the city of Florence in a house on the street still called Borgo Ognissanti. He lived in the same area all his life and was buried in his neighbourhood church called Ognissanti (\"All Saints\"). Sandro was one of several children of the tanner Mariano di Vanni d'Amedeo Filipepi and his wife Smeralda Filipepi, and the youngest of the four who survived into adulthood.\n[…]\nThe nickname Botticelli, meaning \"little barrel\", derives from the nickname of Sandro's brother, Giovanni, who was called Botticello apparently because of his round stature. A document of 1470 refers to Sandro as \"Sandro Mariano Botticelli\", meaning that he had fully adopted the name.\n[…]\nLightbown, Ronald (1978). Sandro Botticelli (two vols.). Berkeley: University of California Press.\n[…]\nSandrobotticelli.net, 200 works by Sandro Botticelli\n[…]\nColvin, Sidney (1911). \"Botticelli, Sandro\" . Encyclopædia Britannica. Vol. 4 (11th ed.). pp. 306–309.\n[…]\nCarl Brandon Strehlke, \"Predella Panels from the High Altarpiece of Sant'Elisabetta delle Convertite, Florence by Sandro Botticelli (cat. 44—47)\" in The John G. Johnson Collection: A History and Selected Works, a Philadelphia Museum of Art free digital publication."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sandro_Botticelli",
        "situacao": "ok",
        "texto": "Alessandro di Mariano di Vanni Filipepi ou Sandro Botticelli (Florença, 1º de março de 1445 – 17 de maio de 1510), foi um pintor italiano. Assim como um de seus irmãos, havia sido apelidado de \"botticelli\", que significa em italiano \"pequeno tonel\", o epíteto substitui o \"es panucam\" sobrenome de família, passando a identificar o futuro pintor.\n[…]\nBotticelli nasceu na cidade de Florença, em uma residência situada na rua ainda hoje denominada Borgo Ognissanti. Viveu nessa mesma região durante toda a sua vida e foi sepultado na igreja do seu bairro, a Igreja de Ognissanti (\"Todos os Santos\"). Sandro era um dos vários filhos do curtidor Mariano di Vanni d'Amedeo Filipepi e de sua esposa Smeralda Filipepi, sendo o mais jovem dos quatro irmãos que alcançaram a idade adulta.\n[…]\nO apelido Botticelli, que significa \"pequeno barril\", originou-se do cognome de seu irmão mais velho, Giovanni, chamado de Botticello em razão de sua compleição física robusta e corpulenta. Um documento de 1470 já identifica o artista como \"Sandro Mariano Botticelli\", comprovando que ele havia adotado formalmente o sobrenome.\n[…]\nDe acordo com o relato de Vasari — considerado por vezes pouco fidedigno —, Botticelli «ganhou muito dinheiro, mas desperdiçou tudo por descuido e falta de gestão». Ele continuou a viver na casa da família durante toda a sua vida, mantendo também ali o seu ateliê. Com a morte de seu pai em 1482, a propriedade foi herdada por seu irmão Giovanni, que tinha uma família numerosa. Ao final de sua vida, o imóvel pertencia a seus sobrinhos.\n[…]\nCarl Brandon Strehlke, \"Predella Panels from the High Altarpiece of Sant'Elisabetta delle Convertite, Florence by Sandro Botticelli (cat. 44—47)\"[ligação inativa] em The John G. Johnson Collection: A History and Selected Works[ligação inativa], publicação digital do Museu de Arte de Filadélfia.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Mona Lisa",
      "descricao": "Retrato pintado por Leonardo da Vinci no início do século dezesseis."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Na Itália e na França, a Mona Lisa é chamada de Gioconda. De onde vem esse nome?",
    "resposta": "Do sobrenome do marido da retratada",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mona_Lisa",
      "https://pt.wikipedia.org/wiki/Mona_Lisa"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mona_Lisa",
        "situacao": "ok",
        "texto": "The Mona Lisa is a half-length portrait painting by the Italian artist Leonardo da Vinci. Considered an archetypal masterpiece of the Italian Renaissance, it has been described as \"the best known, the most visited, the most written about, the most sung about, [and] the most parodied work of art in the world\". The painting's novel qualities include the subject's enigmatic expression, the monumental\n[…]\nThe painting has been traditionally considered to depict the Italian noblewoman Lisa del Giocondo. It is painted in oil on a white poplar panel. Leonardo never gave the painting to the Giocondo family. It was believed to have been painted between 1503 and 1506; however, Leonardo may have continued working on it as late as 1517. King Francis I of France acquired the Mona Lisa after Leonardo's death in 1519, and it later became the property of the French Republic.\n[…]\nThe title of the painting, which is known in English as Mona Lisa, is based on the presumption that it depicts Lisa del Giocondo, although her likeness is uncertain. Renaissance art historian Giorgio Vasari wrote that \"Leonardo undertook to paint, for Francesco del Giocondo, the portrait of Mona Lisa, his wife.\" Monna in Italian is a polite form of address originating as ma donna—similar to Ma'am, Madam, or my lady in English. This became madonna, and its contraction monna.\n[…]\nPeruggia was an Italian patriot who believed that Leonardo's painting should have been returned to an Italian museum. Peruggia may have been motivated by an associate whose copies of the original would significantly rise in value after the painting's theft. After having kept the Mona Lisa in his apartment for two years, Peruggia grew impatient and was caught when he attempted to sell it to Giovanni Poggi, director of the Uffizi Gallery in Florence.\n[…]\nTwo-Mona Lisa theory\n[…]\nSecrets of the Mona Lisa, Discovery Channel documentary on YouTube"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mona_Lisa",
        "situacao": "ok",
        "texto": "Mona Lisa (\"Senhora Lisa\") é um retrato de meio-corpo do artista italiano Leonardo da Vinci. Considerada uma obra-prima arquetípica da Renascença italiana, foi descrita como \"a obra de arte mais conhecida, mais visitada, sobre a qual mais se escreveu, mais se cantou [e] que mais foi parodiada no mundo\". Entre as características inovadoras da pintura estão a expressão enigmática da modelo, a monume\n[…]\nO título da pintura, conhecida em inglês como Mona Lisa, baseia-se na suposição de que ela retrata Lisa del Giocondo, embora a semelhança da figura com ela seja incerta. O historiador da arte do Renascimento, Giorgio Vasari, escreveu que \"Leonardo encarregou-se de pintar, para Francesco del Giocondo, o retrato de Mona Lisa, sua esposa\". Em italiano, monna é uma forma de tratamento cortês originada de ma donna — semelhante a senhora, madame ou minha senhora.\n[…]\nO registro de uma visita realizada em outubro de 1517 por Luís de Aragão afirma que a Mona Lisa foi executada, entre 1513 e 1516, para o falecido Juliano de Médici, mecenas de Leonardo no Belvedere, em Viena; isso provavelmente foi um erro. Segundo Vasari, a pintura foi criada para Francesco del Giocondo, marido da modelo.\n[…]\nO hipotético primeiro retrato, com colunas proeminentes, teria sido encomendado por Giocondo por volta de 1503 e permanecido inacabado na posse de Salaì, aluno e assistente de Leonardo, até sua morte, em 1524. A segunda versão, encomendada por Juliano de Médici por volta de 1513, teria sido vendida por Salaì a Francisco I em 1518, e seria a que se encontra no Louvre. Outros acreditam que só existiu uma verdadeira Mona Lisa, mas divergem quanto aos dois destinos mencionados.\n[…]\nO filme de mistério de 2022 Glass Onion: Um Mistério Knives Out, que retrata a destruição da Mona Lisa, emprestada de seu local de exposição a um bilionário.\n[…]\n— o olho esquerdo da Mona Lisa — divide os segmentos"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "A Ronda Noturna",
      "descricao": "Quadro de Rembrandt no Rijksmuseum."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A Ronda Noturna, de Rembrandt, mostra na verdade uma cena de dia. O que a fez parecer noturna e lhe rendeu esse nome?",
    "resposta": "O verniz escurecido com o tempo",
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
        "texto": "A Ronda Noturna ou A Ronda da Noite (em neerlandês:  De Nachtwacht)  é uma pintura a óleo sobre tela do pintor neerlandês Rembrandt, pintada entre 1639 e 1642. A pintura mede 363 cm de altura e 437 cm de largura e mostra a Guarda Cívica de Amsterdã sob comando do capitão Frans Banning Cocq. Geralmente considerada como a magnum opus de Rembrandt, A Ronda Noturna é uma das pinturas mais conhecidas d\n[…]\nO quadro foi chamado no século XIX Patrouille de Nuit pela crítica francesa, e Night Watch por Joshua Reynolds; daí a origem de seu nome popular. O nome popular surgiu de um equívoco de interpretação, devido ao fato de que, nessa época, o quadro estava bastante deteriorado e obscurecido pela oxidação do verniz, que suas figuras eram quase indistinguíveis, e parecia uma cena noturna.\n[…]\nDepois do seu restauro em 1947, quando esse verniz obscurecido foi eliminado, descobriu-se que o título não se ajustava à realidade, já que a acção se desenrola durante o dia e não à noite, no interior de um espaço teatral semiescuro no momento em que chega um potente raio de luz que ilumina intensamente os personagens que figuram no quadro.\n[…]\nA música buscou também inspiração na tela, como o segundo movimento da Sinfonia n.º 7 de Gustav Mahler e a ópera De Nachtwacht composta pelo músico neerlandês Henk Badings de 1942, sem deixar de mencionar as canções Night Watch de King Crimson dubiamente inspirada pelo nome da tela ou The Shooting Company of Captain Frans B. Cocq, com referências mais explícitas, do grupo Ayreon.\n[…]\nEm 2007, o artista austríaco Matthias Laurenz Gräff, um descendente distante da Banninck Cocq e família De Graeff, usou a pintura Night Watch de Frans Banninck Cocq de Rembrandt em sua pintura \"Ahnenfolge\" (Sucessão/Ancestral Ancestral) como parte de sua série de diplomas e tese \" Weltaußenschau-Weltinnenschau\".\n[…]\n«A Ronda Noturna em 3D»\n[…]\n«A Ronda Noturna no 400.º aniversário de Rembrandt»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Leonardo da Vinci",
      "descricao": "Pintor, inventor e cientista renascentista italiano, autor da Mona Lisa e de A Última Ceia, que viveu de 1452 a 1519."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "No nome Leonardo da Vinci, a palavra Vinci não é um sobrenome de família. O que ela indica?",
    "resposta": "A cidade toscana de onde ele vinha",
    "fonte": [
      "https://en.wikipedia.org/wiki/Leonardo_da_Vinci"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Leonardo_da_Vinci",
        "situacao": "ok",
        "texto": "Leonardo di ser Piero da Vinci (15 April 1452 – 2 May 1519) was an Italian polymath of the High Renaissance who was active as a painter, draughtsman, engineer, scientist, theorist, sculptor, and architect. While his fame initially rested on his achievements as a painter, he has also become known for his notebooks, in which he made drawings and notes on a variety of subjects, including anatomy, ast\n[…]\nIn 1863, fine-arts inspector general Arsène Houssaye received an imperial commission to excavate the site and discovered a partially complete skeleton with a bronze ring on one finger, white hair, and stone fragments bearing the inscriptions \"EO\", \"AR\", \"DUS\", and \"VINC\" –  interpreted as forming \"Leonardus Vinci\".\n[…]\nHoussaye postulated that the unusually large skull was an indicator of Leonardo's intelligence; author Charles Nicholl describes this as a \"dubious phrenological deduction\". At the same time, Houssaye noted some issues with his observations, including that the feet were turned toward the high altar, a practice generally reserved for laymen, and that the skeleton of 1.73 metres (5.7 ft) seemed too short.\n[…]\nIn 2019, documents were published revealing that Houssaye had kept the ring and a lock of hair. In 1925, his great-grandson sold these to an American collector. Sixty years later, another American acquired them, leading to their being displayed at the Leonardo Museum in Vinci beginning on 2 May 2019, the 500th anniversary of the artist's death.\n[…]\nLeonardo polyhedron\n[…]\nLeonardo da Vinci's Notebooks\n[…]\nUniversal Leonardo, a database of Leonardo's life and works maintained by Martin Kemp and Marina Wallace\n[…]\nLeonardo da Vinci on the National Gallery website\n[…]\nBiblioteca Leonardiana, online bibliography (in Italian)\n[…]\nWorks by Leonardo da Vinci at Project Gutenberg\n[…]\nWorks by Leonardo da Vinci at LibriVox (public domain audiobooks)\n[…]\nThe Notebooks of Leonardo da Vinci"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Leonardo_da_Vinci",
        "situacao": "ok",
        "texto": "Leonardo di Ser Piero da Vinci (), ou simplesmente Leonardo da Vinci (Anchiano, 15 de abril de 1452 — Amboise, 2 de maio de 1519), foi um polímata nascido na atual Itália, uma das figuras mais importantes do Alto Renascimento, que se destacou como cientista, matemático, engenheiro, inventor, anatomista, pintor, escultor, arquiteto, botânico, poeta e músico. É ainda conhecido como o precursor da av\n[…]\nLeonardo nasceu em 15 de abril de 1452, \"na terceira hora da noite\", de um sábado, no vilarejo de Anchiano, na comuna italiana de Vinci, na Toscana, situada no vale do rio Arno, dentro do território dominado à época por Florença. Era filho ilegítimo de Messer Piero Fruosino di Antonio da Vinci, um notário florentino e Caterina di Meo Lippi, uma órfã de 15 anos, camponesa.\n[…]\nEm 1479 o pintor siciliano Antonello da Messina, que trabalhava exclusivamente com óleos, viajou para o norte, em direção a Veneza, onde o principal pintor da cidade, Giovanni Bellini, também adotara a técnica da pintura a óleo, transformando-a rapidamente na técnica preferida do local. Leonardo também visitaria Veneza algum tempo depois.\n[…]\nO Codex Leicester é a única obra científica de grande porte de Leonardo que é de propriedade privada; encontra-se em posse de Bill Gates e é exibida uma vez por ano em diferentes cidades ao redor do mundo.\n[…]\nO Codex Leicester é a única grande obra científica de Leonardo em mãos privadas. É propriedade de Bill Gates e é exibido uma vez por ano em diferentes cidades pelo mundo.\n[…]\nDurante sua vida, Leonardo era valorizado como um engenheiro. Em uma carta a Ludovico Sforza, o duque de Milão, afirmou ser capaz de criar todos os tipos de máquinas, tanto para a proteção de uma cidade, quanto para o cerco. Quando ele fugiu para Veneza em 1499, encontrou emprego como engenheiro e arquiteto militar e concebeu um sistema de barricadas móveis para proteger a cidade de um ataque naval.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Abaporu",
      "descricao": "Quadro de Tarsila do Amaral, de 1928, que mostra uma figura de pés e mãos enormes ao lado de um cacto e de um sol."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome do quadro Abaporu, pintado por Tarsila do Amaral em 1928, vem do tupi. O que ele significa?",
    "resposta": "Homem que come gente",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Abaporu",
      "https://en.wikipedia.org/wiki/Abaporu"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Abaporu",
        "situacao": "ok",
        "texto": "Abaporu é uma pintura a óleo da artista brasileira Tarsila do Amaral. É uma das principais obras do período antropofágico do movimento modernista no Brasil. Foi pintada por Tarsila para presentear seu então marido, Oswald de Andrade, em seu aniversário, em janeiro de 1928.\n[…]\nFoi pintada em óleo sobre tela, em janeiro de 1928, por Tarsila do Amaral (1886-1973) como presente de aniversário ao escritor Oswald de Andrade, seu marido na época. O nome da obra foi conferido por ele e pelo poeta Raul Bopp, que indagou a Oswald ao ver o quadro: \"Vamos fazer um movimento em torno desse quadro?\". E também é uma referência para a criação da Antropofagia modernista brasileira, ou Movimento Antropofágico, que se propunha a deglutir a cultura estrangeira e adaptá-la ao Brasil.\n[…]\nOutras obras de Tarsila em sua fase antropofágica: A Lua (1928), O Lago (1928), Cartão Postal (1929) e Sol Poente (1929).\n[…]\nApesar de ser um dos símbolos do modernismo brasileiro, Abaporu não esteve na Semana de Arte Moderna de 1922, pois o quadro seria pintado somente em 1928. Em 1922, na data da realização da Semana (11 a 18 de fevereiro), Tarsila estava em Paris em busca de uma identidade artística e só retornaria ao país no final daquele ano.\n[…]\nGonzalo Aguillar em seu artigo “O Abaporu, de Tarsila do Amaral: saberes do pé” mencionado em Antropofagia hoje? Oswald de Andrade em Cena, livro de Jorge Ruffinelli e João Cezar de Castro Rocha, pensa o Abaporu na qualidade do gênero de retrato anti-humano, pois o rosto é apagado, o corpo é animalesco, porém os pés são bastante humanos e detalhados. Para Aguillar, a gestualidade humana do quadro é parodiada. O homem do quadro é desprovido de identidade, quase desumanizado."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Abaporu",
        "situacao": "ok",
        "texto": "Abaporu (from Tupi language \"abapor’u\", abá (man) + poro (people) + ’u (to eat), lit. 'the man that eats people') is an oil painting on canvas by Brazilian painter Tarsila do Amaral. It is one of the main works of the anthropophagic phase of the modernist movement in Brazil. It was painted as a birthday gift to writer Oswald de Andrade, who was her husband at the time.\n[…]\nIt was painted in oil on canvas in January 1928 by Tarsila do Amaral (1886–1973) as a birthday gift to the writer Oswald de Andrade, her husband at the time. The name of the work was given by him and by the poet Raul Bopp, who asked Oswald upon seeing the painting: \"Shall we start a movement around this painting?\".\n[…]\nAlthough it is one of the symbols of Brazilian modernism, Abaporu was not present at the Semana de Arte Moderna of 1922, since the painting would only be produced in 1928. In 1922, when the event took place (11–18 February), Tarsila was in Paris in search of an artistic identity and would only return to Brazil at the end of that year.\n[…]\nDuring the Rio de Janeiro Olympic Games in 2016, the painting was exhibited at the Museu de Arte do Rio (MAR) in the exhibition A Cor do Brasil. On 5 April 2019, it was exhibited for the first time at the Museu de Arte de São Paulo (MASP). According to the artist's great-niece, Tarsilinha do Amaral, it had been her dream for the painting to be exhibited there.\n[…]\nGonzalo Aguilar in his article \"O Abaporu, de Tarsila do Amaral: saberes do pé\", mentioned in Antropofagia hoje? Oswald de Andrade em cena, a book by Jorge Ruffinelli and João Cezar de Castro Rocha, interprets Abaporu as a kind of anti-human portrait, since the face is erased, the body is animal-like, yet the feet are very human and detailed. For Aguilar, the human gesturality in the painting is parodied. The man in the painting is devoid of identity, almost dehumanized."
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Abaporu",
      "descricao": "Quadro de Tarsila do Amaral, de 1928, que mostra uma figura de pés e mãos enormes ao lado de um cacto e de um sol."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Tarsila do Amaral pintou o Abaporu como presente de aniversário para quem?",
    "resposta": "Oswald de Andrade",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Abaporu",
      "https://en.wikipedia.org/wiki/Abaporu"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Abaporu",
        "situacao": "ok",
        "texto": "Abaporu é uma pintura a óleo da artista brasileira Tarsila do Amaral. É uma das principais obras do período antropofágico do movimento modernista no Brasil. Foi pintada por Tarsila para presentear seu então marido, Oswald de Andrade, em seu aniversário, em janeiro de 1928.\n[…]\nFoi pintada em óleo sobre tela, em janeiro de 1928, por Tarsila do Amaral (1886-1973) como presente de aniversário ao escritor Oswald de Andrade, seu marido na época. O nome da obra foi conferido por ele e pelo poeta Raul Bopp, que indagou a Oswald ao ver o quadro: \"Vamos fazer um movimento em torno desse quadro?\". E também é uma referência para a criação da Antropofagia modernista brasileira, ou Movimento Antropofágico, que se propunha a deglutir a cultura estrangeira e adaptá-la ao Brasil.\n[…]\nPintado como presente de aniversário para o então marido Oswald de Andrade, quando Tarsila e ele se separaram, o escritor aceitou trocar o quadro por um mais valorizado à época, O Enigma de Um Dia, de Giorgio de Chirico. O Abaporu permaneceu com a autora.\n[…]\nGonzalo Aguillar em seu artigo “O Abaporu, de Tarsila do Amaral: saberes do pé” mencionado em Antropofagia hoje? Oswald de Andrade em Cena, livro de Jorge Ruffinelli e João Cezar de Castro Rocha, pensa o Abaporu na qualidade do gênero de retrato anti-humano, pois o rosto é apagado, o corpo é animalesco, porém os pés são bastante humanos e detalhados. Para Aguillar, a gestualidade humana do quadro é parodiada. O homem do quadro é desprovido de identidade, quase desumanizado.\n[…]\nA partir do século XXI, o Abaporu consolidou-se como um \"metasímbolo\" da identidade visual brasileira, sendo objeto de constantes releituras que tensionam o legado modernista sob novas perspectivas políticas, sociais e tecnológicas."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Abaporu",
        "situacao": "ok",
        "texto": "Abaporu (from Tupi language \"abapor’u\", abá (man) + poro (people) + ’u (to eat), lit. 'the man that eats people') is an oil painting on canvas by Brazilian painter Tarsila do Amaral. It is one of the main works of the anthropophagic phase of the modernist movement in Brazil. It was painted as a birthday gift to writer Oswald de Andrade, who was her husband at the time.\n[…]\nThe subject matter – one man, the sun and a cactus – inspired Oswald de Andrade to write the Manifesto Antropófago and consequently create the Anthropophagic Movement, intended to \"swallow\" foreign culture and turn it into something culturally Brazilian.\n[…]\nIt was painted in oil on canvas in January 1928 by Tarsila do Amaral (1886–1973) as a birthday gift to the writer Oswald de Andrade, her husband at the time. The name of the work was given by him and by the poet Raul Bopp, who asked Oswald upon seeing the painting: \"Shall we start a movement around this painting?\".\n[…]\nIn April 2019, the work was finally exhibited at MASP in the retrospective exhibition \"Tarsila Popular\".\n[…]\nAlthough it is one of the symbols of Brazilian modernism, Abaporu was not present at the Semana de Arte Moderna of 1922, since the painting would only be produced in 1928. In 1922, when the event took place (11–18 February), Tarsila was in Paris in search of an artistic identity and would only return to Brazil at the end of that year.\n[…]\nGonzalo Aguilar in his article \"O Abaporu, de Tarsila do Amaral: saberes do pé\", mentioned in Antropofagia hoje? Oswald de Andrade em cena, a book by Jorge Ruffinelli and João Cezar de Castro Rocha, interprets Abaporu as a kind of anti-human portrait, since the face is erased, the body is animal-like, yet the feet are very human and detailed. For Aguilar, the human gesturality in the painting is parodied. The man in the painting is devoid of identity, almost dehumanized."
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "A Mãe de Whistler",
      "descricao": "Quadro de James McNeill Whistler de 1871."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O quadro conhecido como A Mãe de Whistler tem um título original com jeito de composição musical. Qual é?",
    "resposta": "Arranjo em Cinza e Preto",
    "fonte": [
      "https://en.wikipedia.org/wiki/Whistler%27s_Mother"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Whistler%27s_Mother",
        "situacao": "ok",
        "texto": "Arrangement in Grey and Black No. 1, best known under its colloquial name Whistler's Mother or Portrait of Artist's Mother, is an oil painting on canvas painted by the American-born painter James McNeill Whistler in 1871. The subject of the painting is Whistler's mother, Anna McNeill Whistler. The painting is 56.81 by 63.94 inches (1,443 mm × 1,624 mm), displayed in a frame of Whistler's own desig\n[…]\nSeveral unverifiable stories relate to the painting of the work; one is that Anna Whistler acted as a replacement for another model who could not make the appointment. Whistler originally envisioned painting the model standing up. However, his mother was too uncomfortable to pose standing for an extended period.\n[…]\nThe sensibilities of a Victorian era viewing audience would not accept what was a portrait exhibited as an \"arrangement\", hence the addition of the explanatory title Portrait of the Painter's mother. From this, the work acquired its enduring nickname of simply Whistler's Mother. After Thomas Carlyle viewed the painting, he agreed to sit for a similar composition, this one titled Arrangement in Grey and Black, No. 2. Thus the previous painting became, by default, Arrangement in Grey and Black, No.\n[…]\n1.\n[…]\nActor Hurd Hatfield toured internationally several times with the play Son of Whistler's Mother by playwright Maggie Williams.\n[…]\nIn the 1938 Warner Bros. Pictures short \"Have You Got Any Castles?\", Whistler's Mother can be seen whistling on the cover of book titled \"Great Works of Art\".\n[…]\nSutherland, Daniel E. and Toutziari, Georgia (2018). Whistler's Mother: Portrait of an Extraordinary Life. Yale University Press. ISBN 978-0300229684.\n[…]\nWalden, Sarah (2003). Whistler and His Mother: An Unexpected Relationship: Secrets of an American Masterpiece. London: Gibson Square; Lincoln, Nebraska: University of Nebraska Press. ISBN 1903933285.\n[…]\nWhistler's Mother at the Musée d'Orsay"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Arranjo_em_Cinza_e_Preto_n%C2%BA1",
        "situacao": "ok",
        "texto": "Arranjo em Cinza e Preto nº1 ou Retrato da mãe do artista (original: Arrangement in Grey and Black No. 1 ou Portrait of the Artist's Mother), famoso sob o seu nome coloquial a Mãe de Whistler (original: Whistler's Mother) de 1871 é uma pintura de óleo sobre tela, do pintor americano James McNeill Whistler.\n[…]\nAnna McNeill Whistler posou para a pintura, enquanto vivia em Londres com seu filho. Várias histórias inverificáveis cercam a realização da pintura em si: uma é que Anna Whistler teria substituido outro modelo que não poderia fazer a nomeação. Outra é que Whistler originalmente tinha previsto a pintura do modelo em pé, mas seria muito desconfortável colocar a mãe de pé por um período muito prolongado.\n[…]\nO trabalho foi apresentado na 104ª Exposição da Royal Academy of Art em Londres (1872), mas obteve rejeição por parte da Academia. Este episódio agravou o fosso entre Whistler e do mundo da arte britânica e seria a última pintura que apresentaria para aprovação da Academia.\n[…]\nAs sensibilidades das audiências da era Vitoriana não aceitaria o que aparentemente seria um retrato a ser exibido como um \"arranjo\" simples, de modo que o explicativo título \"Retrato de mãe do artista\" foi acrescentado posteriormente. Foi a partir daqui que o trabalho adquiriu seu nome popular.\n[…]\nDepois de Thomas Carlyle ter visto a pintura, ele concordou em sentar-se por uma composição semelhante, sendo esta intitulada \"Arranjo em Cinza e preto, n º 2\".\n[…]\nA pintura foi adquirida em 1891 pelo Museu de Paris du Luxembourg e Whistler escreveu sobre o assunto:\n[…]\nWhistler’s Mother: An American Icon editado por Margaret F. MacDonald. ISBN 978-0853318569. (em inglês)\n[…]\nWeintraub, Stanley. 2001. Whistler: a biography (New York: Da Capo Press). ISBN 9780306809712 (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "A Jangada da Medusa",
      "descricao": "Quadro de Théodore Géricault no Louvre."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "No quadro A Jangada da Medusa, de Géricault, Medusa não é o monstro mitológico. É o nome de quê?",
    "resposta": "Uma fragata francesa que naufragou",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Raft_of_the_Medusa",
      "https://pt.wikipedia.org/wiki/A_Jangada_da_Medusa"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Raft_of_the_Medusa",
        "situacao": "ok",
        "texto": "The Raft of the Medusa (French: Le Radeau de la Méduse [lə ʁado d(ə) la medyz])—originally titled Scène de Naufrage (Shipwreck Scene)—is an oil painting of 1818–1819 by the French Romantic painter and lithographer Théodore Géricault (1791–1824). Completed when the artist was 27, the work has become an icon of French Romanticism.\n[…]\nThéodore Géricault's social circles had close family connections with the French Navy and were directly involved in France's colonies and France's slave trade. Indeed, one of these relations, a naval officer and a slave owner, died defending France's colonial interests on the coast of west Africa in 1779 not far from the site of the Méduse shipwreck decades later.\n[…]\nThe Raft of the Medusa was first shown at the 1819 Paris Salon, under the title Scène de Naufrage (Shipwreck Scene), although its real subject would have been unmistakable for contemporary viewers. The exhibition was sponsored by Louis XVIII and featured nearly 1,300 paintings, 208 sculptures and numerous other engravings and architectural designs. Géricault's canvas was the star at the exhibition: \"It strikes and attracts all eyes\" (Le Journal de Paris).\n[…]\nAccording to art critic and curator Karen Wilkin, Géricault's painting acts as a \"cynical indictment of the bungling malfeasance of France's post-Napoleonic officialdom, much of which was recruited from the surviving families of the Ancien Régime\".\n[…]\nIn France, both history painting and the Neoclassical style continued through the work of Antoine-Jean Gros, Jean Auguste Dominique Ingres, François Gérard, Anne-Louis Girodet de Roussy-Trioson, Pierre-Narcisse Guérin—teacher of both Géricault and Delacroix—and other artists who remained committed to the artistic traditions of David and Nicolas Poussin."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/A_Jangada_da_Medusa",
        "situacao": "inexistente",
        "texto": ""
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Jackson Pollock",
      "descricao": "Pintor expressionista abstrato americano, famoso por respingar e gotejar tinta sobre telas no chão, que viveu de 1912 a 1956."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Que apelido, um trocadilho com o nome de um famoso assassino londrino, a revista Time deu a Jackson Pollock?",
    "resposta": "Jack the Dripper",
    "fonte": [
      "https://en.wikipedia.org/wiki/Jackson_Pollock"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Jackson_Pollock",
        "situacao": "ok",
        "texto": "Paul Jackson Pollock (; January 28, 1912 – August 11, 1956) was an American painter. A major figure in the abstract expressionist movement, he was noted for his \"drip technique\" of pouring or splashing liquid household paint onto a horizontal surface, enabling him to view and paint his canvases from all angles. It was called all-over painting and action painting, because Pollock covered the entire\n[…]\nPaul Jackson Pollock was born in Cody, Wyoming, on January 28, 1912, the youngest of five brothers. His parents, Stella May (née McClure) and LeRoy Pollock, were born and grew up in Tingley, Iowa, and were educated at Tingley High School. Stella is interred at Tingley Cemetery, Ringgold County, Iowa. His father had been born with the surname McCoy, but he took the surname of his adoptive parents. Stella and LeRoy Pollock were Presbyterian and were of Irish and Scots-Irish descent, respectively.\n[…]\nEventually, Pollock became famous for his \"drip\" paintings and was the subject of an article in the 8 August 1949 issue of LIFE titled \"Jackson Pollock: Is he the greatest living painter in the United States?\" Thanks to the mediation of Alfonso Ossorio, a close friend of Pollock, and the art historian Michel Tapié, the young gallery owner Paul Facchetti, from March 7, 1952, managed to realize the first exhibition of Pollock's works from 1948 to 1951 in his Studio Paul Facchetti in Paris and in Europe.\n[…]\nWhile painting this way, Pollock moved away from figurative representation, and challenged the Western tradition of using easel and brush. He used the force of his whole body to paint, which was expressed on the large canvases. In 1956, Time magazine dubbed Pollock \"Jack the Dripper\" due to his painting style.\n[…]\npictures of Pollock, slideshow Life magazine\n[…]\nWorks by Jackson Pollock (public domain in Canada)\n[…]\nJackson Pollock at the Museum of Modern Art\n[…]\nJackson Pollock at the Israel Museum, Jerusalem"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jackson_Pollock",
        "situacao": "ok",
        "texto": "Paul Jackson Pollock (Cody, Wyoming, 28 de janeiro de 1912 — Springs, 11 de agosto de 1956), conhecido profissionalmente como Jackson Pollock, foi um pintor norte-americano e referência no movimento do expressionismo abstrato. Tornou-se conhecido por seu estilo único de pintura por gotejamento.\n[…]\nPaul Jackson Pollock nasceu em Cody, no estado de Wyoming, em 1912, o mais novo de cinco filhos. Seus pais, Stella May (née McClure) e LeRoy Pollock, nasceram e cresceram em Tingley, Iowa. Seu pai havia nascido com o sobrenome McCoy, mas usava o sobrenome de seus pais adotivos, vizinhos que o adotaram depois que seus pais biológicos morreram um ano após o outro. Stella e LeRoy Pollock eram presbiterianos; eles eram descendentes de irlandeses e escoceses-irlandeses, respectivamente.\n[…]\nAlém de deixar de lado o cavalete, Pollock também não usava pincéis. Pollock empregou essa técnica entre 1947 e 1950. Ficou famoso após uma publicação de quatro páginas de 8 de agosto de 1949 na revista Life, que perguntou: \"Este é o maior pintor vivo dos Estados Unidos?\" No auge de sua fama, Pollock abandonou abruptamente o estilo de gotejamento.\n[…]\nA influência de Jackson Pollock nas obras de arte de sua esposa é frequentemente discutida pelos historiadores da arte. Muitas pessoas pensaram que Krasner começou a reproduzir e reinterpretar os respingos caóticos de tinta de seu marido em seu próprio trabalho. Existem vários relatos em que Krasner pretendia usar sua própria intuição, como uma maneira de avançar para a técnica \"eu sou a natureza\" de Pollock, a fim de reproduzir a natureza em sua arte.\n[…]\n«Jackson Pollock no Webmuseum Paris»\n[…]\n«Fundação Pollock-Krasner»\n[…]\n«Artigo \"Jackson Pollock - and True and False Ambition: The Urgent Difference\" por Dorothy Koppelman»\n[…]\n«Jackson Pollock\", por Miltos Manetas»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Gótico Americano",
      "descricao": "Quadro de Grant Wood de 1930."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "No título do quadro Gótico Americano, de Grant Wood, a palavra gótico se refere a quê?",
    "resposta": "Ao estilo da janela da casa ao fundo",
    "fonte": [
      "https://en.wikipedia.org/wiki/American_Gothic"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/American_Gothic",
        "situacao": "ok",
        "texto": "American Gothic is a 1930 oil painting on beaverboard by the American Regionalist artist Grant Wood, depicting a Midwestern farmer and his  daughter standing in front of their Carpenter Gothic style home. It is one of the most famous American paintings of the 20th century and is frequently referenced in popular culture.\n[…]\nWood was inspired to paint what is now known as the American Gothic House in Eldon, Iowa, along with \"the kind of people [he] fancied should live in that house\".\n[…]\nIn August 1930, Grant Wood, an American painter with European training, was driven around Eldon, Iowa, by a young local painter named John Sharp. Looking for inspiration, he noticed the Dibble House, a small white house built in the Carpenter Gothic architectural style. The house was added to the National Register of Historic Places in 1974 (reference No. 74002291). Sharp's brother suggested in 1973 that it was on this drive that Wood first sketched the house on the back of an envelope.\n[…]\nHoving, Thomas (2005). American Gothic: The Biography of Grant Wood's American Masterpiece. New York: Chamberlain Bros. ISBN 978-1-59609-148-1.\n[…]\nGrant, Reg (2025). \"American Gothic painting by Grant Wood\". britannica.com.\n[…]\nHoward, Beth M. (March 18, 2018). \"Masterpiece Rental: My Life in the 'American Gothic' House\". The New York Times. ISSN 0362-4331. Retrieved April 5, 2018. (contains image of first Wood sketch of the house)\n[…]\nNovember 18, 2002, National Public Radio Morning Edition report about American Gothic by Melissa Gray that includes an interview with Art Institute of Chicago curator Daniel Schulman.\n[…]\nFebruary 13, 1976, National Public Radio All Things Considered Cary Frumpkin interview with James Dennis, author of Grant Wood: A Study in American Art and Culture. The interview contains a discussion about American Gothic."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/American_Gothic",
        "situacao": "ok",
        "texto": "American Gothic ou Gótico Americano é uma pintura de Grant Wood da coleção do Art Institute of Chicago. A inspiração de Wood veio de uma casa desenhada em estilo gótico rural com uma distinta janela superior e uma decisão de pintar junto a casa com \"o tipo de pessoa que eu imaginava viver naquela casa.\" A pintura mostra um fazendeiro ao lado de sua filha. A mulher está vestida com um avental em es\n[…]\nEm agosto de 1930, Grant Wood, um pintor americano com formação na escola europeia, passeava por Eldon, no estado americano de Iowa, na companhia de um pintor local, John Sharp, procurando inspiração. Foi então que reparou uma uma pequena casa branca construída em estilo revivalista gótico, conhecida como Dibble House.\n[…]\nSegundo um dos biógrafos do pintor, Wood achou a casa \"uma forma de pretenciosismo emprestado e um absurdo estrutural, ao colocar uma janela em estilo gótico numa humilde e frágil casa de madeira\".\n[…]\nApós obter autorização dos proprietários, a família Jones, Wood executou prontamente um esboço a óleo sobre cartão da vista frontal da casa. O esboço, inspirado nas catedrais góticas que o pintor visitara na Europa, acentuava as características arquitectónicas da casa original, exibindo um telhado mais inclinado e uma janela mais comprida com um arco ogival mais pronunciado.[carece de fontes]?\n[…]\nTal como na pintura da casa, ambos os modelos foram pintados em sessões separadas.\n[…]\nNota-se uma profunda influência da pintura flamenga, muito apreciada pelo pintor, no estilo altamente detalhado e polido do quadro, e na rígida frontalidade das duas figuras. Os elementos da pintura acentuam a verticalidade associada à arquitectura gótica. A forquilha de três pontas repete-se na costura do macacão, na estrutura da face do homem e na janela gótica da casa.[carece de fontes]?",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Guernica",
      "descricao": "Grande painel de Pablo Picasso, de 1937, sobre o bombardeio da cidade basca de Guernica na Guerra Civil Espanhola."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Por vontade de Picasso, Guernica ficou décadas fora da Espanha. Que condição o país precisava cumprir para receber o quadro?",
    "resposta": "Voltar a ser uma democracia",
    "fonte": [
      "https://en.wikipedia.org/wiki/Guernica_(Picasso)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Guernica_(Picasso)",
        "situacao": "ok",
        "texto": "Guernica is a large 1937 oil painting by Spanish artist Pablo Picasso. It is one of his best-known works, regarded by many art critics as the most moving and powerful anti-war painting in history. It is exhibited in the Museo Reina Sofía in Madrid.\n[…]\nNot only did she find the studio large enough for Picasso to paint Guernica in, she also had exclusive access to photograph the work in progress.\n[…]\nWhen pressed to explain the elements in Guernica, Picasso said,\n[…]\nAt Picasso's request the safekeeping of Guernica was then entrusted to the Museum of Modern Art, and it was his expressed desire that the painting should not be delivered to Spain until liberty and democracy had been established in the country. Between 1939 and 1952, Guernica traveled extensively in the United States. Between 1941 and 1942, it was exhibited at Harvard University's Fogg Museum twice.\n[…]\nAs early as 1968, Franco had expressed an interest in having Guernica come to Spain. However, Picasso refused to allow this until the Spanish people again enjoyed a republic. He later added other conditions, such as the restoration of \"public liberties and democratic institutions\". Picasso died in 1973. Franco, ten years Picasso's junior, died two years later, in 1975. After Franco's death, Spain was transformed into a democratic constitutional monarchy, ratified by a new constitution in 1978.\n[…]\nThe 2018 television series Genius features Picasso's life and work, including Guernica\n[…]\nArt Opposes Injustice! – Picasso's Guernica: For Life by Dorothy Koppelman\n[…]\n3-D Guernica, YouTube\n[…]\nGuardian: Picasso's Guernica Battle Lives On 26 April 2007\n[…]\nPicasso's \"Secret\" Guernica\n[…]\nX-ray Shows Picasso's Guernica Painting has Suffered a lot but is not in Danger Associated Press, 23 July 2008"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Guernica_%28quadro%29",
        "situacao": "ok",
        "texto": "Com 349 cm de altura por 776,5 cm de comprimento, Guernica, uma das obras mais famosas de Pablo Picasso (1881–1973), pintada a óleo em 1937, é uma “declaração de guerra contra a guerra e um manifesto contra a violência”. O quadro, além de ser um ícone da Guerra Civil Espanhola, é hoje um símbolo do antimilitarismo mundial e da luta pela liberdade do ser humano.\n[…]\nA fotógrafa Dora Maar – que já havia trabalhado com Picasso desde 1936 ao captar imagens de seu estúdio e lhe ensinar as técnicas de fotografia – documentou os estágios que a cidade de Guernica precisou passar para se reconstruir. Mesmo com o valor publicitário por trás, suas fotografias “ajudaram Picasso a evitar cores e dar à obra tons brancos e pretos, iguais aos das fotos”, de acordo com o historiador especializado em arte John Richardson.\n[…]\nNo painel que eu tenho trabalhado, que eu devo chamar de Guernica, e em todos os meus trabalhos recentes, eu claramente expresso o meu aborrecimento com os militares que afundaram a Espanha em um oceano de tristeza e morte”.\n[…]\nA história da vinda do quadro ao País começa antes mesmo da obra existir. Entre 1926 e 1928, auge do primeiro movimento modernista no Brasil, o pintor Cícero Dias, tomado pelo primitivismo modernista e pelo desejo de desenvolver grandes obras, mudou-se para Paris, em 1937. Quando chegou na capital francesa, o pintor brasileiro teve contacto com a obra de Picasso.\n[…]\nSerá por meio dessas relações pessoais que Dias conseguirá a autorização de Picasso para que Guernica e outras gravuras e pinturas sejam enviadas para a II Bienal de São Paulo, em 1953. À época, as questões envolvidas na Bienal, como o debate pictórico e outras questões da arte não tiveram tanta importância. O quadro Guernica fora sucesso de público e de crítica. Por conta disso, os jornais denominaram exposição como a “Bienal de Guernica”.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Candido Portinari",
      "descricao": "Pintor brasileiro, nascido em Brodowski em 1903 e morto em 1962, autor de Os Retirantes e dos painéis Guerra e Paz."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "O pintor Candido Portinari morreu em 1962 intoxicado por uma substância presente nas tintas que usava. Qual?",
    "resposta": "Chumbo",
    "distratores": [
      "Mercúrio",
      "Arsênico",
      "Cádmio"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Candido_Portinari",
      "https://en.wikipedia.org/wiki/Candido_Portinari"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Candido_Portinari",
        "situacao": "ok",
        "texto": "Candido Portinari (Brodowski, 29 de dezembro de 1903 – Rio de Janeiro, 6 de fevereiro de 1962) foi um artista plástico brasileiro, considerado um dos mais importantes pintores brasileiros de todos os tempos, sendo o que mais alcançou projeção internacional.\n[…]\nEm 1952, uma anistia geral faz com que Portinari voltasse ao Brasil. No mesmo ano, a 1° Bienal de São Paulo expõe obras de Portinari com destaque em uma sala particular. Mas a década de 1950 seria marcada por diversos problemas de saúde. Em 1954, Portinari apresentou uma grave intoxicação pelo chumbo (conhecida clinicamente como saturnismo) presente nas tintas que usava.\n[…]\nDesobedecendo as ordens médicas, Portinari continuava pintando e viajando com frequência para exposições nos Estados Unidos, Europa e Israel. No começo de 1962, a prefeitura de Barcelona convida Portinari para uma grande exposição com 200 telas. No dia 6 de fevereiro do mesmo ano, Candido Portinari morre de intoxicação pelas tintas que utilizava nas telas. Encontra-se sepultado no Cemitério de São João Batista no Rio de Janeiro.\n[…]\nAntes de seguirem aos EUA, o empresário e mecenas ítalo-brasileiro Ciccillo Matarazzo tentou trazer os painéis para São Paulo, terra natal de Portinari, para apresentá-las ao público. Porém, isto não foi possível. Porém, em fevereiro de 1956, os painéis foram exibidos no Theatro Municipal do Rio de Janeiro, com a presença do pintor.\n[…]\n1940 – Chicago (Estados Unidos) – A Universidade de Chicago publica o primeiro livro sobre o pintor, Portinari: His Life and Art, com introdução do artista Rockwell Kent\n[…]\n2025 - Brasília (DF) - Projeto de Lei n° 2252, de 2025, que \"Inscreve o nome de Candido Portinari no Livro dos Heróis e Heroínas da Pátria.\"\n[…]\n«Portinari: O Pintor do Povo»\n[…]\n«Candido Portinari»"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Candido_Portinari",
        "situacao": "ok",
        "texto": "Candido Portinari (December 29, 1903 – February 6, 1962) was a Brazilian painter. He is considered one of the most important Brazilian painters as well as a prominent and influential practitioner of the neo-realism style in painting.\n[…]\nEntry in the Forest is the \"reminiscent of frescoes\" where he also doesn't fail to capture his style of enlarging the figures’ arms and legs to show their strength. In the Teaching of the Indians, Portinari tries to create a scene of a priest or Spanish \"Jesuit father\" with Indians and obvious unity. Also the presence of the red Brazilian soil. The last mural, Discovery of Gold the artist chooses to paint just a single boat and specific people to represent that they had found gold.\n[…]\nProjeto Portinari, begun in 1979 is dedicated to Candido Portinari by his son Joao Candido to revive his works, make them more known and preserve the history. Not only was his son able to locate more than 5,000 paintings, he also found thousands of drawings, sketches, and documents related to Portinari's life and travels and interactions.\n[…]\nNicolás Guillén's and Horacio Salinas's ‘Un son para Portinari’, famously performed by Mercedes Sosa, is dedicated to the artist. Candido Portinari name continues to be seen today. Rodovia Candido Portinari is a State highway located in Brazil in São Paulo.\n[…]\nGiunta, Andrea, ed. Cândido Portinari y el sentido social del arte. Buenos Aires: Siglo XXI 2005.\n[…]\nCandido Portinari (2018). Poemas de Portinari [Poems by Portinari] (PDF) (in Brazilian Portuguese) (3 ed.). Funarte. p. 192. ISBN 978-85-7507-198-4. Archived from the original on 2020-11-01.\n[…]\nPortinari in Dezenovevinte - Arte Brasileira do Século XIX e Início do XX\n[…]\n\"Portinari: Painter of the People\".\n[…]\n\"Candido Portinari\"."
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Roubo da Mona Lisa",
      "descricao": "Furto da Mona Lisa do Museu do Louvre, em agosto de 1911, cometido pelo italiano Vincenzo Peruggia; o quadro foi recuperado em 1913."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1911, um funcionário italiano roubou a Mona Lisa do Louvre. Que motivo patriótico ele alegou depois de preso?",
    "resposta": "Devolvê-la à Itália",
    "fonte": [
      "https://en.wikipedia.org/wiki/Vincenzo_Peruggia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Vincenzo_Peruggia",
        "situacao": "ok",
        "texto": "Pietro Vincenzo Antonio Peruggia (8 October 1881 – 8 October 1925) was an Italian decorator best known for stealing the Mona Lisa from the Louvre, a museum in Paris where he had briefly worked as glazier, on 21 August 1911.\n[…]\nThere are two predominant theories regarding the theft of the Mona Lisa. Peruggia said he did it for a patriotic reason as he wanted to bring the painting back for display in Italy, in Peruggia's own words \"after it was stolen from Italy\" by Napoleon. When Peruggia worked at the Louvre, he learned of how Napoleon plundered many Italian works of art during the Napoleonic Wars.\n[…]\nPerhaps sincere in his motive, Peruggia proclaimed \"I am an Italian and I do not want the picture given back to the Louvre\", and may not have known that Leonardo da Vinci took this painting as a gift for King Francis I when he moved to France to become a painter in his court during the 16th century, 250 years before Napoleon's birth.\n[…]\nExperts question the patriotism motive on grounds that‍—‍‌were patriotism the true motive‍—‍‌Peruggia would have donated the painting to an Italian museum rather than have attempted to profit from its sale. The question of money is also confirmed by letters that Peruggia sent to his father after the theft.\n[…]\nIn March 2012, Peruggia's mugshot was sold for €3,825 to an Italian buyer by the Parisian auction house Tajan. The small original silver gelatin print (123 x 54 mm) had been estimated by photography expert Jean-Mathieu Martini at between €1,500 and €1,800, excluding fees. The mugshot was taken in 1909 by Alphonse Bertillon, the inventor of the anthropometry system. In the summer of 2012, Peruggia's character was the hero of a play that depicted him as a patriot."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Vincenzo_Peruggia",
        "situacao": "ok",
        "texto": "Vincenzo Peruggia (Dumenza, 8 de outubro de 1881 – Annemasse, 8 de outubro de 1925) é o italiano que roubou a Mona Lisa, em 21 de agosto de 1911 do Museu do Louvre.\n[…]\nEle alegou ser um patriota italiano que desejava retornar para seu país um dos numerosos tesouros que Napoleão Bonaparte havia roubado de lá. Porém, Vincenzo desconhecia o fato de que a Mona Lisa havia sido ofertada como presente ao rei Francisco I de França pelo próprio Leonardo da Vinci, quase trezentos anos antes de Napoleão.\n[…]\nA Mona Lisa foi recuperada em 12 de dezembro de 1913 em Florença. Peruggia foi condenado a um ano e quinze dias por seu crime. Um recurso reduziu sua sentença para sete meses e nove dias. Peruggia foi considerado pela maioria de seus compatriotas como um herói da arte nacional. Após o roubo ele foi para um hotel onde guardou o retrato da Mona Lisa debaixo da cama.\n[…]\n«O roubo da Mona Lisa» (em inglês)\n[…]\n«Roubaram a Mona Lisa. A história do homem que se apaixonou pelo sorriso da Gioconda»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Roubo da Mona Lisa",
      "descricao": "Furto da Mona Lisa do Museu do Louvre, em agosto de 1911, cometido pelo italiano Vincenzo Peruggia; o quadro foi recuperado em 1913."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que poeta francês, amigo de Picasso, chegou a ser preso como suspeito do sumiço da Mona Lisa, em 1911?",
    "resposta": "Guillaume Apollinaire",
    "fonte": [
      "https://en.wikipedia.org/wiki/Guillaume_Apollinaire",
      "https://en.wikipedia.org/wiki/Mona_Lisa"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Guillaume_Apollinaire",
        "situacao": "ok",
        "texto": "Guillaume Apollinaire ( ə-POL-in-AIR, French: [ɡijom apɔlinɛːʁ]; born Wilhelm Albert Włodzimierz Aleksander Apolinary Kostrowicki; 26 August 1880 – 9 November 1918) was a Polish-French poet, playwright, short story writer, novelist and art critic of Polish, Swiss and Italian descent.\n[…]\nWilhelm Albert Włodzimierz Apolinary Kostrowicki was born in Rome, Italy, and was raised speaking French, Italian, and Polish. He emigrated to France in his late teens and adopted the name Guillaume Apollinaire. His mother, born Angelika Kostrowicka, was a Polish-Lithuanian noblewoman born near Navahrudak (Nowogródek in Polish), Grodno Governorate (former Grand Duchy of Lithuania, present-day Belarus).\n[…]\nFrancesco Flugi d'Aspermont was a nephew of Conradin Flugi d'Aspermont (1787–1874), a poet who wrote in Romansh Putèr (an official language dialect of Switzerland spoken in Upper Engadin), and perhaps also descendant of the Minnesänger Oswald von Wolkenstein (born c. 1377, died 2 August 1445; see Les ancêtres Grisons du poète Guillaume Apollinaire at Geneanet).\n[…]\nJean Metzinger à la Galerie Weill, Chroniques d'art de Guillaume Apollinaire, L'Intransigeant, Paris Journal, 27 May 1914\n[…]\nApollinaire is played by Seth Gabel in the 2018 television series Genius, which focuses on the life and work of Pablo Picasso.\n[…]\nPrix Guillaume Apollinaire\n[…]\nGuillaume Apollinaire, S. Bates, 1967\n[…]\nGuillaume Apollinaire, P. Adéma, 1968\n[…]\nGuillaume Apollinaire, L.C. Breuning, 1980\n[…]\nGuillaume Apollinaire, J. Grimm, 1993\n[…]\nWorks by or about Guillaume Apollinaire at the Internet Archive\n[…]\nWorks by Guillaume Apollinaire at LibriVox (public domain audiobooks)\n[…]\nBecker, Annette: Apollinaire, Guillaume, in: 1914–1918-online. International Encyclopedia of the First World War.\n[…]\nGuillaume Apollinaire (poems in French and English)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Mona_Lisa",
        "situacao": "ok",
        "texto": "The Mona Lisa is a half-length portrait painting by the Italian artist Leonardo da Vinci. Considered an archetypal masterpiece of the Italian Renaissance, it has been described as \"the best known, the most visited, the most written about, the most sung about, [and] the most parodied work of art in the world\". The painting's novel qualities include the subject's enigmatic expression, the monumental\n[…]\nThe record of an October 1517 visit by Louis d'Aragon states that the Mona Lisa was executed for the deceased Giuliano de' Medici, Leonardo's steward at Belvedere, Vienna, between 1513 and 1516; this was likely an error. According to Vasari, the painting was created for the sitter's husband, Francesco del Giocondo.\n[…]\nIn 1911, the painting was still not popular among the lay public. On 21 August 1911, the painting was stolen from the Louvre. The painting was first reported missing the next day by painter Louis Béroud. After some confusion as to whether the painting was being photographed somewhere, the Louvre was closed for a week for investigation. French poet Guillaume Apollinaire came under suspicion and was arrested and imprisoned.\n[…]\nApollinaire implicated his friend Pablo Picasso, who was brought in for questioning. Both were later exonerated. The real culprit was Louvre employee Vincenzo Peruggia, who had helped construct the painting's glass case. He carried out the theft by locking himself in the Louvre building and removing the painting, remaining unnoticed due to the Louvre being  closed for that day.\n[…]\nIn 2014, a France 24 article suggested that the painting could be sold to help ease the national debt, although it was observed that the Mona Lisa and other such art works were prohibited from being sold by French heritage law, which states that, \"Collections held in museums that belong to public bodies are considered public property and cannot be otherwise.\""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Guillaume_Apollinaire",
        "situacao": "ok",
        "texto": "Guillaume Apollinaire (nascido Wilhelm Albert Włodzimierz Apolinary de Wąż-Kostrowicki, Roma, 26 de agosto de 1880 – Paris, 9 de novembro de 1918) foi um escritor e crítico de arte francês, possivelmente o mais importante ativista cultural das vanguardas do início do século XX, conhecido particularmente por sua poesia sem pontuação e gráfica, e por ter escrito manifestos importantes para as vangua\n[…]\nEm setembro de 1911, quando já era reconhecido como um dos poetas mais importantes da vanguarda parisiense, Apollinaire é acusado de cumplicidade no roubo de uma obra do Museu Louvre, nada menos que a Mona Lisa de Leonardo da Vinci, roubo no qual Pablo Picasso, também já muito famoso, foi igualmente implicado. Ele é preso durante uma semana e depois liberado. Esta experiência marcá-lo-á.\n[…]\nAos olhos dos defensores das tradições clássicas, que se aproveitaram da situação para denunciar \"atos de barbárie\" dos estrangeiros contra a cultura nacional, pouco importava a inocência de Apollinaire no caso, visto que ele era acusado de atentar contra os valores da civilização, acusação esta estendida a outros estrangeiros radicados em Paris, como Pablo Picasso, Gertrude Stein e Stravinski.\n[…]\nEle dedicará à moça vários de seus poemas. Quando Apollinaire parte para o campo de batalha, uma correspondência de uma poesia notável nasce dessa relação. Ambos rompem em 1915, prometendo continuar amigos.\n[…]\nEm janeiro de 1915, Apollinaire conhece Madeleine Pagès num comboio, de quem ficará noivo em agosto daquele mesmo ano. Mas em abril de 1915, ele parte com o regimento de artilharia de campo, N.° 38, para a frente da batalha. Em março de 1916, é naturalizado francês, sendo que naquele mesmo mês é ferido gravemente na cabeça. Após longa convalescença, volta gradativamente ao trabalho.\n[…]\nObras de Guillaume Apollinaire no Project Gutenberg USA",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "A Última Ceia",
      "descricao": "Pintura mural de Leonardo da Vinci em Milão."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "A Última Ceia, de Leonardo da Vinci, começou a descascar poucos anos depois de pronta. Por quê?",
    "resposta": "Foi pintada na parede seca, e não em afresco",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Last_Supper_(Leonardo)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Last_Supper_(Leonardo)",
        "situacao": "ok",
        "texto": "The Last Supper (Italian: Il Cenacolo [il tʃeˈnaːkolo] or L'Ultima Cena [ˈlultima ˈtʃeːna]) is a mural painting by the Italian High Renaissance artist Leonardo da Vinci, dated to c. 1495–1498, housed in the refectory of the Convent of Santa Maria delle Grazie in Milan, Italy. The painting represents the scene of the Last Supper of Jesus with the Twelve Apostles, as it is told in the Gospel of John\n[…]\nThe Last Supper portrays the reaction given by each apostle when Jesus said one of them would betray him. All twelve apostles have different reactions to the news, with various degrees of anger and shock. The apostles were identified by their names, using an unsigned, mid-sixteenth-century fresco copy of Leonardo's Cenacolo. Before this, only Judas, Peter, John and Jesus had been positively identified. From left to right, according to the apostles' heads:\n[…]\nHodapp and Alice Von Kannon comment, \"If he [John] looks effeminate and needs a haircut, so does James, the second figure on the left.\" According to Ross King, an expert on Italian art, Mary Magdalene's appearance at the last supper would not have been controversial and Leonardo would have had no motive to disguise her as one of the other disciples, since she was widely venerated in her role as the \"Apostle to the Apostles\" and was the patron of the Dominican Order, for whom The Last Supper was painted.\n[…]\nList of works by Leonardo da Vinci\n[…]\nBertelli, Carlo (November 1983). \"Restoration Reveals the Last Supper\". National Geographic. Vol. 164, no. 5. pp. 664–684. ISSN 0027-9358. OCLC 643483454.\n[…]\nHeydenreich, Ludwig H. (1974). Leonardo: The Last Supper. New York: The Viking Press, Inc.\n[…]\nLeonardo's Last Supper and the three layers\n[…]\nLeonardo da Vinci: anatomical drawings from the Royal Library, Windsor Castle, exhibition catalog fully online as PDF from The Metropolitan Museum of Art, which contains material on The Last Supper (see index)"
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
    "indice": 19,
    "ancora": {
      "nome": "O Juízo Final (Michelangelo)",
      "descricao": "Afresco de Michelangelo na parede do altar da Capela Sistina, no Vaticano, pintado entre 1536 e 1541."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Depois da morte de Michelangelo, o pintor Daniele da Volterra ganhou o apelido de fazedor de calções. O que ele fez no Juízo Final?",
    "resposta": "Cobriu os nus com panos",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Last_Judgment_(Michelangelo)",
      "https://en.wikipedia.org/wiki/Daniele_da_Volterra"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Last_Judgment_(Michelangelo)",
        "situacao": "ok",
        "texto": "The Last Judgment (Italian: Il Giudizio Universale) is a fresco by the Italian Renaissance painter Michelangelo covering the whole altar wall of the Sistine Chapel in Vatican City. It is a depiction of the Second Coming of Christ and the final and eternal judgment by God of all humanity. The dead rise and descend to their fates, as judged by Christ who is surrounded by prominent saints.\n[…]\nOther commentators have noted that Michelangelo's altar wall appears to have been designed so that it maps to the features of a human face. Jelbert has argued that - inline with the contemporary preoccupation with intellectual puzzles (such as Hans Holbein's distorted skull in The Ambassadors, 1533) - Michelangelo intended an additional image for his Last Judgment that took the form of an audacious, hidden self-portrait.\n[…]\nList of works by Michelangelo\n[…]\nBarnes, Bernardine, Michelangelo’s Last Judgment: The Renaissance Response, 1998, University of California Press, ISBN 0-520-20549-9, google books\n[…]\nBarnes, Bernadine, \"Metaphorical Painting: Michelangelo, Dante, and the Last Judgment\", Art Bulletin, 77 (1995), 64–81\n[…]\nBarnes, Bernadine, \"Aretino, the Public, and the Censorship of Michelangelo's Last Judgment\", in Suspended License: Censorship and the Visual Arts, ed. Elizabeth C. Childs (Seattle: University of Washington Press, 1997), pp. 59–84.\n[…]\nConnor, James A., The Last Judgment: Michelangelo and the Death of the Renaissance (New York: Palgrave Macmillan, 2009), ISBN 978-0-230-60573-2\n[…]\nHall, Marcia B., ed., Michelangelo’s Last Judgment (Cambridge: Cambridge University Press, 2005), ISBN 0-521-78002-0\n[…]\nLeader, Anne, \"Michelangelo’s Last Judgment: The Culmination of Papal Propaganda in the Sistine Chapel\", Studies in Iconography, xxvii (2006), pp. 103–56\n[…]\nPartridge, Loren, Michelangelo, The Last Judgment: A Glorious Restoration (New York: Abrams, 1997), ISBN 0-8109-1549-9"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Daniele_da_Volterra",
        "situacao": "ok",
        "texto": "Daniele Ricciarelli (Italian: [daˈnjɛːle rittʃaˈrɛlli]; c. 1509 – 4 April 1566), better known as Daniele da Volterra (, Italian: [daˈnjɛːle da (v)volˈtɛrra]), was a Mannerist Italian painter and sculptor.\n[…]\nHe is best remembered for his association with Michelangelo. Several of Daniele's most important works were based on designs made for that purpose by Michelangelo. After Michelangelo's death, Daniele was hired to cover the genitals in his Last Judgment with vestments and loincloths. This earned him the nickname Il Braghettone (\"the breeches maker\").\n[…]\nDaniele is infamous for having covered over, with vestments and fig-leaves, many of the genitals and backsides in Michelangelo's The Last Judgment fresco in the Sistine Chapel. It was Pope Pius IV who ordered the 'imbraghettamento' (breeching) of the nudes on 21 January 1564. This work was begun in 1565, shortly after the Council of Trent had condemned nudity in religious art. It earned Daniele the nickname \"Il Braghettone\" (\"the breeches-maker\").\n[…]\nThe loincloths and draperies in the lower half of the fresco, however, were not painted by Daniele. His work on the Last Judgment was interrupted at the end of 1565 by the death of Pope Pius IV, after which the scaffolding he used had to be removed quickly because the chapel was needed for the election of a new pope.\n[…]\nFabrizio Mancinelli, \"The Painting of the Last Judgment: History, Technique and Restoration\". In Loren Partridge, Michelangelo : The Last Judgment – A Glorious Restoration. New York: Harry N. Abrams, Inc. 2000. ISBN 0-8109-8190-4.\n[…]\n(in Italian) La \"Deposizione\" di Daniele da Volterra ritorna al pubblico, on the restoration of Descent from the Cross"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ju%C3%ADzo_Final_%28Michelangelo%29",
        "situacao": "ok",
        "texto": "O Juízo Final é um afresco do pintor renascentista Michelangelo Buonarroti, feito entre 1536 e 1541 por encomenda do Papa Clemente VII, estendendo-se por mais de 165 metros quadrados, contemplando toda a parede do altar da Capela Sistina. O afresco retrata a Parúsia, evento central da escatologia cristã, onde Cristo desceria dos céus a fim de cumprir sua promessa de retornar à terra, pela segunda \n[…]\nAmbas as simbologias e a escolha da inserção de duas figuras heréticas, representam a intenção de Michelangelo em representar as duas figuras como demônios na tradição cristã.\n[…]\nA contradição se inicia nas diferentes concepções que o artista e os cardeais possuíam em relação à nudez. Por um lado, Michelangelo, formado em ambiente humanista, “considera o homem ainda como centro da Criação; para ele, o corpo humano é exemplo perfeito da manifestação divina- sua nudez é a expressão mais completa da nuditas virtualis.\" (QUIRICO, 2003 .p113).\n[…]\nUm ano após a morte de Michelangelo, o Concílio de Trento mandou Daniele da Volterra cobrir as partes indecorosas, ganhando o apelido de Il Braghetonne, \"o fabricante de calças\". Como grande admirador do artista florentino, sua intervenção foi discreta, se encarregou de cobrir a nudez de algumas figuras com pequenos pedaços de pano, onde têmpera foi usado para pintar os véus, exceto para as figuras de São Brás Santa Catarina de Alexandria que foi repintado usando afresco.\n[…]\nApós a morte Daniele da Volterra, Girlamo da Fano e Domenico Carnevali foram comissionados para cobrir as imoralidade restantes das figuras, ao total, foram feitas mais de quarenta intervenções sobre a tela.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Autorretrato com a Orelha Enfaixada",
      "descricao": "Autorretrato de Vincent van Gogh de 1889."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Van Gogh cortou parte da própria orelha em 1888, logo depois de uma briga com que pintor que morava com ele em Arles?",
    "resposta": "Paul Gauguin",
    "fonte": [
      "https://en.wikipedia.org/wiki/Self-Portrait_with_Bandaged_Ear"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Self-Portrait_with_Bandaged_Ear",
        "situacao": "ok",
        "texto": "Self-Portrait with Bandaged Ear is an 1889 self-portrait by Dutch Post-Impressionist artist Vincent van Gogh. The painting is in the collection of the Courtauld Institute of Art and on display in the Gallery at Somerset House. The painting includes inspiration from Japanese woodblock printing.\n[…]\nIn this self-portrait, Van Gogh portrays himself in a blue cap with black fur and a green overcoat with a bandage covering his ear and extending under his chin. Behind him is an open window, a canvas on an easel, with a few indistinguishable marks, as well as a Japanese woodblock print, Geishas in a Landscape made by Satō Torakiyo in the 1870s.\n[…]\nVan Gogh had moved from Paris to Arles to establish a community of supportive artists called the Studio of the South. After renting four rooms in The Yellow House, he invited Paul Gauguin to join him.\n[…]\nOn evening of 23 December 1888, Gauguin threatened to leave and Van Gogh approached him with a razor. Later that night, he sliced off his own left ear, which is not apparent in the portrait since he used a mirror to paint it, making it seem like the right ear is bandaged instead, and brought it to a prostitute in Arles named Rachel. When she got the severed ear, Rachel became distressed and called the police to arrest Van Gogh for lunacy.\n[…]\nIn a 17 January 1889 letter to his brother Theo, Van Gogh mentioned he had made a new self-portrait, which is believed to be this one.\n[…]\nVan Gogh's interest in Japanese art guided him to modernize his own art style. He enjoyed the bold colors and spatial effects of the Japanese prints which prompted him to start using them in all of his work including this portrait.\n[…]\nList of works by Vincent van Gogh"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Autorretrato_com_a_Orelha_Cortada",
        "situacao": "ok",
        "texto": "Autorretrato com a Orelha Enfaixada ou Autorretrato com a Orelha Cortada é uma obra feita a partir da técnica de óleo sobre tela, por Vincent Van Gogh, em um autorretrato, como o título da pintura sugere.\n[…]\nEm 23 de dezembro de 1888, antevéspera de Natal, Gauguin e Vincent tiveram uma discussão. O primeiro passou a noite em um hotel, enquanto o segundo, que é o retratado em questão, cortou um pedaço do lóbulo da própria orelha esquerda. Para fazer os dois autorretratos depois desse evento, posicionou-se em frente a um espelho, o que dá a impressão de ele ter cortado a orelha direita.\n[…]\nO pedaço do membro arrancado ele embrulhou em um lenço e o levou para uma prostituta de Arles - Rachel, com quem ele mantinha relações sexuais e que conhecia Gauguin - com um bilhete que dizia: \"Guarde com cuidado\".\n[…]\nA escolha de cores para a composição do quadro é diferente dos tons vivos e contrastantes que ele usava antes da discussão com Gauguin, sendo que, nesse caso, o artista destaca o verde e o amarelo em todos os elementos da obra, sem criar contrastes muito bem definidos.\n[…]\nO Autorretrato com a orelha cortada é uma representação da subjetividade de Van Gogh, que, naquele momento, já tinha a saúde mental debilitada, e o contexto no qual ele vivia. O pintor era tido como \"maldito\", por conta das internações psiquiátricas pelas quais passou e também por conta da automutilação, representada no quadro. A autoimagem do artista, no entanto, destacava essas características, como se Van Gogh tivesse consciência desse estado no qual se encontrava.\n[…]\nVan Gogh pintou trinta e cinco autorretratos entre os anos 1886 e 1889.\n[…]\nAutorretratística\n[…]\nPaul Gauguin",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Claude Monet",
      "descricao": "Pintor impressionista francês, autor de Impressão, Nascer do Sol e da série das Ninfeias, que viveu de 1840 a 1926."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Que problema de visão é apontado como causa das cores mais avermelhadas e borradas nas últimas obras de Claude Monet?",
    "resposta": "Catarata",
    "distratores": [
      "Glaucoma",
      "Daltonismo",
      "Miopia"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Claude_Monet"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Claude_Monet",
        "situacao": "ok",
        "texto": "Oscar-Claude Monet (UK: , US: ; French: [klod mɔnɛ]; 14 November 1840 – 5 December 1926) was a French painter and founder of Impressionism who is seen as a key precursor to modernism, especially in his attempts to paint nature as he perceived it. During his long career, he was the most consistent and prolific practitioner of Impressionism's philosophy of expressing one's perceptions of nature, esp\n[…]\nMonet's output decreased as he became withdrawn, although he did produce several panel paintings for the French Government, from 1914 to 1918 to great financial success and he would later create works for the state. His work on the \"cycle of paintings\" mostly occurred around 1916 to 1921. Cataract surgery was once again recommended, this time by Clemenceau.\n[…]\nIn 1922 a prescription of mydriatics provided short-lived relief. He eventually underwent cataract surgery in 1923. Persistent cyanopsia and aphakic spectacles proved to be a struggle. Now \"able to see the real colours\", he began to destroy canvases from his pre-operative period. Upon receiving tinted Zeiss lenses, Monet was laudatory, although his left eye soon had to be entirely covered by a black lens.\n[…]\nSpeaking of Monet's body of work, Wildenstein said that it is \"so extensive that its very ambition and diversity challenges our understanding of its importance\". His paintings produced at Giverny and under the influence of cataracts have been said to create a link between Impressionism and twentieth-century art and modern abstract art, respectively. His later works were a \"major\" inspiration to Objective abstraction.\n[…]\nClaude Monet Ministère de la culture et de la communication\n[…]\nClaude Monet, Joconde, Portail des collections des musées de France\n[…]\nClaude Monet at  Guggenheim.org\n[…]\nMonet at\n[…]\nClaude Monet at the National Gallery of Art\n[…]\nClaude Monet: The Revised Catalogue Raisonné, The Pastels\n[…]\nClaude Monet Research Archives (1901–1987)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Claude_Monet",
        "situacao": "ok",
        "texto": "Oscar-Claude Monet (Paris, 14 de novembro de 1840 — Giverny, 5 de dezembro de 1926) foi um pintor francês e o mais célebre entre os pintores impressionistas.\n[…]\nMonet ao pintar Nenúfares se baseou no lago e a ponte japonesa de sua própria casa, no outono, porque era nessa época do ano em que as flores caiam sobre o lago criando uma linda visão na qual Monet resolveu pintar.\n[…]\nA técnica de Monet para pintar quadros era bastante peculiar para as pessoas e outros artistas que o viam pintando, mas a técnica de Monet desenvolvida na época foi considerada mais tarde como umas das mais belas do mundo, que é o impressionismo, que aparenta ser de perto apenas borrões mas ao distanciar a visão, o quadro se forma nitidamente.\n[…]\nMonet teve uma catarata no fim da sua vida (1907). A doença o atacou por causa das muitas horas com seus olhos expostos ao sol, pois gostava de pintar ao ar livre em diferentes horários do dia e em várias épocas do ano, o que foi outra característica do Impressionismo. Durante sua doença Monet não parou de pintar, - usou nessa época de sua vida cores mais fortes como o vermelho-carne e vermelho goiaba, cor tijolo, entre outros.\n[…]\nEm 1923, o pintor estava quase totalmente cego. Depois de uma operação de catarata, teve uma melhora.\n[…]\nEntre as muitas obras de Monet, podem destacar-se:\n[…]\nEm 13 de novembro de 2019 a Sotheby's vendeu a pintura de Claude Monet, \"Charing Cross Bridge\", por 27,6 milhões de dólares (25 milhões de euros), em Nova Iorque num leilão de arte impressionista e moderna.\n[…]\nLista de pinturas de Claude Monet\n[…]\nTucker, Paul Hayes Claude Monet: Life and Art Amilcare Pizzi, Italy 1995 ISBN 0-300-06298-2\n[…]\nWikiArt.org: Claude Monet",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Frida Kahlo",
      "descricao": "Pintora mexicana, famosa por seus autorretratos, que viveu de 1907 a 1954."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Aos dezoito anos, Frida Kahlo passou meses de cama e começou a pintar por causa de que tipo de acidente?",
    "resposta": "Um acidente de ônibus",
    "fonte": [
      "https://en.wikipedia.org/wiki/Frida_Kahlo",
      "https://pt.wikipedia.org/wiki/Frida_Kahlo"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Frida_Kahlo",
        "situacao": "ok",
        "texto": "Magdalena Carmen Frida Kahlo y Calderón (Spanish pronunciation: [ˈfɾiða ˈkalo]; 6 July 1907 – 13 July 1954) was a Mexican painter known for her many portraits, self-portraits, and works inspired by the nature and artifacts of Mexico. Inspired by the country's popular culture, she employed a naïve folk art style to explore questions of identity, postcolonialism, gender, class, and race in Mexican s\n[…]\nMagdalena Carmen Frida Kahlo y Calderón was born on 6 July 1907 in Coyoacán, a village on the outskirts of Mexico City. Kahlo stated that she was born at the family home, La Casa Azul (The Blue House), but according to the official birth registry, the birth took place at the nearby home of her maternal grandmother. Kahlo's parents were photographer Guillermo Kahlo (1871–1941) and Matilde Calderón y González (1876–1932), and they were thirty-six and thirty, respectively, when she was born.\n[…]\n13 August–5 December 2021: Frida and Me, Norton Museum of Art exhibit that showed Kahlo's influence on other artists.\n[…]\n15 March–12 July 2015:  Diego Rivera and Frida Kahlo in Detroit, Detroit Institute of Arts, Detroit, Michigan.\n[…]\n1 May–31 July 2012:  Mamacita Linda: Letters Between Frida Kahlo and Her Mother, National Museum of Women in the Arts, Washington, D.C.\n[…]\n27 October 2007–20 January 2008: Frida Kahlo an exhibition at the Walker Art Center, Minneapolis, Philadelphia Museum of Art, 20 February–18 May 2008; and the San Francisco Museum of Modern Art, 16 June–28 September 2008.\n[…]\n8 February–12 May 2002: Places of Their Own: Emily Carr, Georgia O'Keeffe, and Frida Kahlo, National Museum of Women in the Arts, Washington, D.C.\n[…]\nList of paintings by Frida Kahlo\n[…]\nFrida Kahlo in the collection of The Museum of Modern Art\n[…]\nFrida Kahlo. Museum of Fine Arts, Houston: ICAA.\n[…]\n\"Frida Kahlo\" (MP3). In Our Time. BBC Radio 4. 9 July 2015.\n[…]\nThe Frida Kahlo papers at the National Museum of Women in the Arts"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Frida_Kahlo",
        "situacao": "ok",
        "texto": "Magdalena Carmen Frida Kahlo y Calderón (Coyoacán, 6 de julho de 1907 – idem, 13 de julho de 1954), mais conhecida como Frida Kahlo, foi uma pintora mexicana conhecida pelos seus muitos retratos, autorretratos, e obras inspiradas na natureza e artefactos do México. Inspirada pela cultura popular do país, empregou um estilo de arte popular naïf para explorar questões de identidade, pós-colonialismo\n[…]\nNascida de pai alemão e mãe mestiça, Kahlo passou a maior parte da sua infância e vida adulta na La Casa Azul, a sua casa de família em Coyoacán — agora acessível ao público como o Museu Frida Kahlo. Embora tenha sido incapacitada pela poliomielite quando criança, Kahlo foi uma estudante promissora, rumo à escola de medicina, até sofrer um acidente de autocarro aos dezoito anos, o que lhe causou dores e problemas médicos para toda a vida.\n[…]\nEm 17 de setembro de 1925, Frida sofre um grave acidente de ônibus causado pelo choque com um bonde. O corrimão do ônibus perfurou-lhe as costas, causando uma fratura pélvica, perfuração do abdomen e do útero, 3 fraturas em sua coluna vertebral, seu pé direito foi triturado e deslocado e teve a clavícula fraturada. Frida ficou um mês no hospital e dois meses em casa se recuperando antes de voltar ao seu trabalho.\n[…]\nApós o grave acidente de 1925, começou a pintar com regularidade; suas obras iniciais eram mais realistas e influenciadas pela arte europeia. Com o tempo, sob influência de Diego Rivera, adotou um estilo mais direto, com cores planas e brilhantes, elementos da arte popular mexicana e narrações autobiográficas, em composições sem perspectiva linear. Embora tenha flertado com o surrealismo, Frida nunca abandonou o realismo narrativo.\n[…]\nLista de pinturas de Frida Kahlo\n[…]\n«Página oficial de Frida Kahlo (biografia, obras)» (em inglês e espanhol)\n[…]\nFrida Kahlo: Trajetória marcada por doenças\n[…]\nFrida em ICAA Museu de Belas Artes de Houston"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "A Persistência da Memória",
      "descricao": "Quadro surrealista de Salvador Dalí, de 1931, com relógios moles derretendo numa paisagem; está no MoMA, em Nova York."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Segundo Salvador Dalí, os relógios moles de A Persistência da Memória foram inspirados em que alimento derretendo ao sol?",
    "resposta": "Queijo camembert",
    "distratores": [
      "Manteiga",
      "Sorvete",
      "Chocolate"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Persistence_of_Memory"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Persistence_of_Memory",
        "situacao": "ok",
        "texto": "The Persistence of Memory (Catalan: La persistència de la memòria, Spanish: La persistencia de la memoria) is a 1931 painting by artist Salvador Dalí and one of the most recognizable works of Surrealism. First exhibited at the Julien Levy Gallery in 1932 and sold for $250, The Persistence of Memory was donated to the Museum of Modern Art (MoMA) in New York City two years later in 1934 by an anonym\n[…]\nThis interpretation suggests that Dalí was incorporating an understanding of the world introduced by Albert Einstein's theory of special relativity. Asked by Ilya Prigogine whether this was the case, Dalí replied that the soft watches were not inspired by the theory of relativity, but by the surrealist perception of a Camembert melting in the sun.\n[…]\nThe year prior to painting the Persistence of Memory, Dalí developed his \"paranoiac-critical method\", deliberately inducing psychotic hallucinations to inspire his art. He remarked, \"The difference between a madman and me is that I am not mad.\"\n[…]\nDalí returned to the theme of this painting with the variation The Disintegration of the Persistence of Memory (Spanish: La Desintegración de la Persistencia de la Memoria; 1954), showing his earlier famous work systematically fragmenting into smaller component elements, and a series of rectangular blocks which reveal further imagery through the gaps between them. Added is an ominous suggestion of bullets to the original. This work is now in the Salvador Dalí Museum in St.\n[…]\nPetersburg, Florida, while the original Persistence of Memory remains at the Museum of Modern Art in New York City. Dalí also produced various lithographs and sculptures on the theme of soft watches late in his career. Some of these sculptures are the Persistence of Memory, Nobility of Time, Profile of Time, and Three Dancing Watches.\n[…]\nList of works by Salvador Dalí\n[…]\nThe Persistence of Memory in the MoMA Online Collection"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/A_Persist%C3%AAncia_da_Mem%C3%B3ria",
        "situacao": "ok",
        "texto": "A Persistência da Memória  (em castelhano:  La persistencia de la memoria; em catalão:  La persistència de la memòria) é uma pintura do artista surrealista Salvador Dalí de 1931. A pintura está localizada na coleção do Museu de Arte Moderna (MoMA) de Nova Iorque desde 1934. É amplamente reconhecida e frequentemente referenciada na cultura popular.\n[…]\nEm sua autobiografia, Dalí conta que levou duas horas para pintar a maior parte da obra (do total de menos de cinco horas), enquanto esperava sua esposa voltar do teatro. Neste dia, o pintor se sentira cansado e com uma leve dor de cabeça, não indo ao teatro com sua esposa e amigos. Ao retornar do filme, Dalí mostrou a obra a sua esposa, vendo em sua face a \"contração inequívoca de espanto e admiração\".\n[…]\nEsta frase de Dalí resume a pintura em questão; os elementos irreais – relógios derretidos – misturam-se com imagens familiares aos olhos humanos, criando uma impressão de que eles realmente estão ali.\n[…]\n- Ao fundo, podemos observar um penhasco e o mar no horizonte. Essa paisagem é o retrato do local onde Dalí vivia, na Catalunha. Neste quadro, ele preferiu retratá-las sem qualquer símbolo metafórico, limitando-se ao real.\n[…]\n- No canto esquerdo da tela, algumas formigas reúnem-se em cima de um dos relógios. Estes insetos são a única representação de vida na pintura, além da mosca sobre o relógio que se encontra próximo ao descrito anteriormente. O pintor surrealista não gostava de formigas e quando as colocava nas suas obras era com o objetivo de simbolizar a putrefação.\n[…]\nSalvador Dali\n[…]\nDalí Museum\n[…]\nA Persistência da Memória (no MoMA)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Almeida Júnior",
      "descricao": "Pintor paulista José Ferraz de Almeida Júnior, autor de Caipira Picando Fumo, que viveu de 1850 a 1899."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1899, em Piracicaba, o pintor Almeida Júnior foi morto a facadas por um primo. Qual foi o motivo do crime?",
    "resposta": "Um caso com a mulher do assassino",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Almeida_J%C3%BAnior",
      "https://en.wikipedia.org/wiki/Jos%C3%A9_Ferraz_de_Almeida_J%C3%BAnior"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Almeida_J%C3%BAnior",
        "situacao": "ok",
        "texto": "José Ferraz de Almeida Júnior (Itu, 8 de maio de 1850 – Piracicaba, 13 de novembro de 1899), foi um pintor e desenhista brasileiro da segunda metade do século XIX.\n[…]\nDe forma semelhante, sua biografia é até hoje objeto de estudo, sendo de especial interesse as histórias e lendas relativas às circunstâncias que levaram ao seu assassinato: Almeida Júnior morreu apunhalado, vítima de um crime passional. Foi morto pelo primo, marido de Maria Laura do Amaral, com quem o pintor manteve um romance por anos.\n[…]\nAlmeida Júnior morreu precocemente, aos 49 anos, em 13 de novembro de 1899. Foi apunhalado em frente ao Hotel Central de Piracicaba, (hoje já demolido), por José de Almeida Sampaio, seu primo e marido de Maria Laura do Amaral Gurgel, com quem o pintor manteve um relacionamento secreto por vários anos.\n[…]\nTambém é digno de nota que na mesma época que Almeida Júnior esteve na França, o movimento impressionista estava em plena atividade, no entanto, não causou nenhum entusiasmo no pintor brasileiro, que não adotou nenhum elemento dele.\n[…]\nAlgumas pinturas de Almeida Junior são: O violeiro, do ano de 1899; Caipira picando fumo, do ano de 1893; A partida da monção, do ano de 1897; Caipiras negaceando, de 1888; O descanso do modelo, de 1882; A Leitura, de 1892; A pintura (Alegoria), feita em 1892; e A fuga para o Egito, do ano de 1881.\n[…]\nAzevedo, Vicente de Paulo Vicente de (1985). Almeida Junior. O romance do pintor. São Paulo: Editora Própria\n[…]\nA alma caipira de Almeida Júnior\n[…]\nAlmeida Junior em DezenoveVinte - Arte brasileira do século XIX e início do XX\n[…]\nAlmeida Júnior - um pintor brasileiro - Instituto de Artes da UNESP - Prof. Percival Tirapeli"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Jos%C3%A9_Ferraz_de_Almeida_J%C3%BAnior",
        "situacao": "ok",
        "texto": "José Ferraz de Almeida Júnior (8 May 1850 – 13 November 1899) was a Brazilian artist and designer; one of the first there to paint in the Realistic tradition of Gustave Courbet and Jean-François Millet. The \"Dia do Artista Plástico\" (Day of Fine Artists in Brazil) is celebrated on his birthday. He is the Patron of the 26th chair of the Brazilian Academy of Fine Arts.\n[…]\nA year later, Victor Meirelles, wanting to retire, offered Júnior his position as professor of history painting at the Imperial Academy of Fine Arts, but Júnior refused the offer because he preferred to stay in São Paulo. From 1887 to 1896, he made three more trips to Europe. He increasingly rejected Biblical and historical subjects in favor of regionalist themes, depicting the everyday life of the caipiras while moving from academic style to Naturalism.\n[…]\nJúnior was stabbed to death in 1899 by his cousin José de Almeida Sampaio  in Piracicaba in front of the Hotel Central. Júnior had been having a long-standing affair with Sampaio's wife, Maria Laura do Amaral Gurgel, who had briefly been engaged to Júnior, and Sampaio had just found out about it.\n[…]\nGastão Pereira da Silva, Almeida Junior. Sua vida e sua obra, Editora do Brasil (1946)\n[…]\nVicente de Paulo Vicente de Azevedo, Almeida Junior. O romance do pintor, self-published (1985)\n[…]\nJosé Roberto Teixeira Leite. Dicionário crítico da pintura no Brasil, Artlivre (1988)\n[…]\n\"Desmistificando Almeida Júnior: a modernidade do caipira\" by Raquel Aguilar de Araújo @ DezeNoveVinte.\n[…]\nAlfredo Galvão: \"Almeida Júnior - Sua técnica, sua obra\" edited by Arthur Valle @ DezeNoveVinte."
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Chuva Súbita sobre a Ponte Ōhashi",
      "descricao": "Xilogravura de Utagawa Hiroshige de 1857."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "A gravura Chuva Súbita sobre a Ponte Ohashi, de Hiroshige, ganhou uma cópia a óleo feita por que pintor holandês, fã da arte japonesa?",
    "resposta": "Vincent van Gogh",
    "fonte": [
      "https://en.wikipedia.org/wiki/Sudden_Shower_over_Shin-%C5%8Chashi_Bridge_and_Atake",
      "https://en.wikipedia.org/wiki/Bridge_in_the_Rain_(after_Hiroshige)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sudden_Shower_over_Shin-%C5%8Chashi_Bridge_and_Atake",
        "situacao": "ok",
        "texto": "Sudden Shower over Shin-Ōhashi bridge and Atake (大はしあたけの夕立, Ōhashi atake no yūdachi) is a woodblock print in the ukiyo-e genre by the Japanese artist Hiroshige. It was published in 1857 as part of the series One Hundred Famous Views of Edo and is one of his best known prints.\n[…]\nThe print shows a small part of the wooden Shin-Ōhashi (New Great) bridge over the Sumida River. A boatman punts his log raft towards the Fukagawa timber yards, and in the background, at the far bank of the river, is a part of Edo known as Atake after the government ship, the Atakemaru (ja:安宅丸) that was moored there. Two women and four or five men are shown crossing the bridge sheltering under hats, umbrellas or straw capes from a sudden shower of rain.\n[…]\nVincent van Gogh was a major collector of Japanese prints, decorating his studio with them. He was heavily influenced by these prints, particularly Hiroshige, and made copies of two from the One Hundred Famous Views of Edo, Plum Park in Kameido and this one. Van Gogh had first encountered the image in 1886 on the cover of an issue of the magazine Paris Illustré, prepared by the Japanese art dealer Hayashi Tadamasa.\n[…]\nVan Gogh's painting used brighter colours with greater contrast than the original, conspicuous brushstrokes rather than areas of flat colour, and was also framed with a selection of Van Gogh's approximations to Japanese characters.\n[…]\nHiroshige's print was listed by The Observer's art critic Laura Cumming as one of the 10 best skies in art.\n[…]\nThe composer Geoffrey Poole produced the work Crossing Ohashi Bridge for the Goldberg Ensemble and named after Hiroshige's print."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Bridge_in_the_Rain_(after_Hiroshige)",
        "situacao": "inexistente",
        "texto": ""
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Johannes Vermeer",
      "descricao": "Pintor holandês do século dezessete, autor de Moça com Brinco de Pérola e A Leiteira."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Johannes Vermeer nasceu e trabalhou na mesma cidade holandesa que dá nome a uma famosa louça azul e branca. Que cidade é essa?",
    "resposta": "Delft",
    "fonte": [
      "https://en.wikipedia.org/wiki/Johannes_Vermeer",
      "https://en.wikipedia.org/wiki/Delftware"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Johannes_Vermeer",
        "situacao": "ok",
        "texto": "Johannes Vermeer ( vər-MEER, vər-MAIR, Dutch: [joːˈɦɑnəs fərˈmeːr]; see below; also known as Jan Vermeer; October 1632 – 15 December 1675) was a Dutch painter who specialized in domestic interior scenes of middle-class life. He is considered one of the greatest painters of the Dutch Golden Age. During his lifetime, he was a moderately successful provincial genre painter, recognized in Delft and Th\n[…]\nJohn Michael Montias added details on the family from the city archives of Delft in his Artists and Artisans in Delft: A Socio-Economic Study of the Seventeenth Century (1982).\n[…]\nVermeer had been a respected artist in Delft, but he was almost unknown outside his hometown. A local patron named Pieter van Ruijven had purchased much of his output, which kept Vermeer afloat financially but reduced the possibility of his fame spreading. Several factors contributed to his limited body of work. Vermeer never had any pupils, though one scholar has suggested that Vermeer taught his eldest daughter Maria to paint.\n[…]\nMundane domestic or recreational activities are imbued with a poetic timelessness (e.g., Girl Reading a Letter at an Open Window, Dresden, Gemäldegalerie). Vermeer's two townscapes have also been attributed to this period: View of Delft (The Hague, Mauritshuis) and The Little Street (Amsterdam, Rijksmuseum).\n[…]\nIn the 20th century, Vermeer's admirers included Salvador Dalí, who painted his own version of The Lacemaker (on commission from collector Robert Lehman) and pitted large copies of the original against a rhinoceros in some surrealist experiments. Dali also celebrated the master in The Ghost of Vermeer of Delft Which Can Be Used As a Table, 1934.\n[…]\nLiedtke, Walter A. (2001). Vermeer and the Delft School. Metropolitan Museum of Art. ISBN 978-0-87099-973-4.\n[…]\n500 pages on Vermeer and Delft\n[…]\nJohannes Vermeer, biography at Artble\n[…]\nVermeer Center Delft, center with tours about Vermeer"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Delftware",
        "situacao": "ok",
        "texto": "Delftware or Delft pottery, also known as Delft Blue (Dutch: Delfts blauw) or as delf, is a general term now used for Dutch tin-glazed earthenware, a form of faience. Most of it is blue and white pottery, and the city of Delft in the Netherlands was the major centre of production, but the term covers wares with other colours, and made elsewhere. It is also used for similar pottery, English delftwa\n[…]\nDelft Blue pottery formed the basis of one of British Airways' ethnic tailfins. The design, Delftblue Daybreak, was applied to 17 aircraft.\n[…]\nToday, Delfts Blauw (Delft Blue) is the brand name hand painted on the bottom of ceramic pieces identifying them as authentic and collectible.\n[…]\nAlthough most Delft Blue borrows from the tin-glaze tradition, it is nearly all decorated in underglaze blue on a white clay body and very little uses tin glaze, a more expensive product.\n[…]\nDelftware ranged from simple household items – plain white earthenware with little or no decoration – to fancy artwork. Most of the Delft factories made sets of jars, the kast-stel set. Pictorial plates were made in abundance, illustrated with religious motifs, native Dutch scenes with windmills and fishing boats, hunting scenes, landscapes and seascapes.\n[…]\nSets of plates were made with the words and music of songs; dessert was served on them and when the plates were clear the company started singing. The Delft potters also made tiles in vast numbers (estimated at eight hundred million) over a period of two hundred years; many Dutch houses still have tiles that were fixed in the 17th and 18th centuries. Delftware became popular and was widely exported in Europe and even reached China and Japan.\n[…]\nGallery Terra Delft, specialising in modern ceramic art\n[…]\nKLM § Delft Blue houses\n[…]\nModern Adaptations of Delftware and Delft Tiles"
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
    "indice": 27,
    "ancora": {
      "nome": "Gustav Klimt",
      "descricao": "Pintor simbolista austríaco, líder da Secessão de Viena, autor de O Beijo, que viveu de 1862 a 1918."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O pai de Gustav Klimt trabalhava com o mesmo metal que brilha nos quadros da fase dourada do filho. Qual era o ofício dele?",
    "resposta": "Gravador de ouro",
    "fonte": [
      "https://en.wikipedia.org/wiki/Gustav_Klimt"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Gustav_Klimt",
        "situacao": "ok",
        "texto": "Gustav Klimt (14 July 1862 – 6 February 1918) was an Austrian symbolist painter and a founding member of the Vienna Secession movement. His work helped define the Art Nouveau style in Europe. Klimt is known for his paintings, murals, sketches, and other objets d'art. Klimt's primary subject was the female body, and his works are marked by a frank eroticism. Amongst his figurative works, which incl\n[…]\nKlimt Villa\n[…]\nList of paintings by Gustav Klimt\n[…]\nO'Connor, Anne-Marie (2012). The Lady in Gold, The Extraordinary Tale of Gustav Klimt's Masterpiece, Portrait of Adele Bloch-Bauer, Alfred A. Knopf, New York, ISBN 0-307-26564-1.\n[…]\nTobias G. Natter, Christoph Grunenberg (Eds.):Gustav Klimt. Painting, Design and Modern Life, Tate Publishing, London 2008, ISBN 978-1-85437-735-7.\n[…]\nBäumer, Angelica (1986), Gustav Klimt: Women, translated by Ewald, Osers (1st ed.), London: Weidenfeld & Nicolson, ISBN 9780297790310.\n[…]\nBailey, Colin B.; Colins, John; Vergo, Peter; Braun, Emily; Kallir, Jane; Bisanz-Prakken, Marian (2001), Bailey, Colin B. (ed.), Gustav Klimt: Modernism in the Making (Exhibition catalogue), New York: Harry N. Abrams in association with National Gallery of Canada, Ottawa.\n[…]\nFischer, Wolfgang G.; McEwan, Dorothea (1992), Gustav Klimt & Emilie Flöge : an artist and his muse, London: Lund Humphries, ISBN 0853316074.\n[…]\nFliedl, Gottfried (1994), Gustav Klimt 1862–1918 The World in Female Form (PDF), Benedikt Taschen, ISBN 3822802905.\n[…]\nHodge, Susie (2014), Gustav Klimt: Masterpieces of Art, Fulham, London: Flame Tree Publishing, ISBN 978-1-80417-706-8\n[…]\nSabarsky, Serge (1983), Gustav Klimt: Drawings, et al, Moyer Bell, ISBN 9780918825193.\n[…]\n1 artwork by or after Gustav Klimt at the Art UK site\n[…]\nKlimt Film at IMDb\n[…]\nKlimt, The Life and Work of Gustav Klimt\n[…]\nKlimt vs. Klimt: Google's Pocket Gallery, including three paintings colorised by AI, cf. A.I. Digitally Resurrects Trio of Lost Gustav Klimt Paintings"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Gustav_Klimt",
        "situacao": "ok",
        "texto": "Gustav Klimt (Baumgarten, em Viena, 14 de julho de 1862 - Viena, 6 de fevereiro de 1918) foi um pintor austríaco. Associado ao Simbolismo, destacou-se dentro do movimento art nouveau austríaco e foi um dos fundadores do movimento da Secessão de Viena, que recusava a tradição académica nas artes, e do seu jornal, Ver Sacrum. Os seus maiores trabalhos incluem pinturas, murais, esboços e outros objet\n[…]\nAo final dos trabalhos, Klimt é premiado com a \"Cruz de Mérito de Ouro\" (1888), pelos seus trabalhos nas escadarias do Teatro Imperial. Foi um momento importante para Klimt. O quadro contribuiu para a obtenção do reconhecimento da sociedade vienense, sem, entretanto, seduzir Klimt a alinhar-se com a elite cultural que se intitulava pouco antes da virada do século como a verdadeira responsável pelo progresso material e cultural (otimismo cultural da burguesia liberal).\n[…]\nEm \"Dánae\" (1907/08), a sua provocação afirma-se de modo mais óbvio. Junto à figura da mulher ruiva adormecida, surge aquilo que muitos interpretam como uma torrente de moedas de ouro e espermatozoides. A lenda de Dânae, amada por Zeus na forma de uma chuva dourada, foi transformada em tema de pintura por vários artistas da história da arte. O tema mitológico tem, em Klimt, a representação da procriação - origem do mito Perseu - captada como um instante eterno, sagrado e superior.\n[…]\nNa primeira década do século XX o expressionismo faz com que o estilo dourado de Klimt deixe de ser usado. Em 1909 Klimt parte para Paris onde toma contacto com as obras de Toulouse-Lautrec e com o fauvismo. A partir de então, Klimt passa a usar cenários menos elaborados, deixando de lado os motivos geométricos e a sumptuosidade do ouro. Nesta fase, pinta O Chapéu de Plumas Negras (1910); A Vida e a Morte (1916); e A Virgem (1913).\n[…]\nTobias G. Natter (Ed.): Gustav Klimt:  The Complete Paintings, Taschen, Cologne 2012, ISBN 978-3836527958.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Retrato de Adele Bloch-Bauer I",
      "descricao": "Retrato dourado pintado por Gustav Klimt em 1907, saqueado pelos nazistas e devolvido à família da retratada em 2006."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Um retrato dourado de Klimt, saqueado pelos nazistas e recuperado pela família na Justiça, inspirou que filme de 2015 com Helen Mirren?",
    "resposta": "A Dama Dourada",
    "fonte": [
      "https://en.wikipedia.org/wiki/Portrait_of_Adele_Bloch-Bauer_I",
      "https://en.wikipedia.org/wiki/Woman_in_Gold"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Portrait_of_Adele_Bloch-Bauer_I",
        "situacao": "ok",
        "texto": "Portrait of Adele Bloch-Bauer I (also called The Lady in Gold or The Woman in Gold) is an oil painting on canvas, with gold leaf, by Gustav Klimt, completed between 1903 and 1907. The portrait was commissioned by the sitter's husband, Ferdinand Bloch-Bauer, a Viennese and Jewish banker and sugar producer. The painting was stolen by the Nazis in 1941, and displayed at the Österreichische Galerie Be\n[…]\nOn 19 January 1923 Adele Bloch-Bauer wrote a will. Ferdinand's brother Gustav, a lawyer by training, helped her frame the document and was named as the executor. The will included a reference to the Klimt works owned by the couple, including the two portraits of her:\n[…]\nIn December 1941 Führer transferred the paintings Portrait of Adele Bloch-Bauer I and Apfelbaum I to the Galerie Belvedere in return for Schloss Kammer am Attersee III, which he then sold to Gustav Ucicky, an illegitimate son of Klimt. A note accompanying the paintings stated he was acting in accordance with Adele's will. To remove all reference to its Jewish subject matter, the gallery renamed the portrait with the German title Dame in Gold (translates as Lady in Gold).\n[…]\nThe history of the Portrait of Adele Bloch-Bauer I and the other paintings taken from the Bloch-Bauers has been recounted in three documentary films, Stealing Klimt (2007), The Rape of Europa (2007) and Adele's Wish (2008).\n[…]\nThe painting's history is described in the 2012 book The Lady in Gold: The Extraordinary Tale of Gustav Klimt's Masterpiece, Portrait of Adele Bloch-Bauer, by the journalist Anne-Marie O'Connor.\n[…]\nIn 2015 Altmann's story was dramatised for the film Woman in Gold starring Helen Mirren as Maria and Ryan Reynolds as Schoenberg. The painting of Adele – Maria's aunt – was the centrepiece for the story.\n[…]\nThe story of Adele Bloch-Bauer and Maria Altmann formed the basis for the 2017 novel Stolen Beauty by Laurie Lico Albanese."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Woman_in_Gold",
        "situacao": "ok",
        "texto": "Portrait of Adele Bloch-Bauer I (also called The Lady in Gold or The Woman in Gold) is an oil painting on canvas, with gold leaf, by Gustav Klimt, completed between 1903 and 1907. The portrait was commissioned by the sitter's husband, Ferdinand Bloch-Bauer, a Viennese and Jewish banker and sugar producer. The painting was stolen by the Nazis in 1941, and displayed at the Österreichische Galerie Be\n[…]\nOn 19 January 1923 Adele Bloch-Bauer wrote a will. Ferdinand's brother Gustav, a lawyer by training, helped her frame the document and was named as the executor. The will included a reference to the Klimt works owned by the couple, including the two portraits of her:\n[…]\nIn December 1941 Führer transferred the paintings Portrait of Adele Bloch-Bauer I and Apfelbaum I to the Galerie Belvedere in return for Schloss Kammer am Attersee III, which he then sold to Gustav Ucicky, an illegitimate son of Klimt. A note accompanying the paintings stated he was acting in accordance with Adele's will. To remove all reference to its Jewish subject matter, the gallery renamed the portrait with the German title Dame in Gold (translates as Lady in Gold).\n[…]\nThe history of the Portrait of Adele Bloch-Bauer I and the other paintings taken from the Bloch-Bauers has been recounted in three documentary films, Stealing Klimt (2007), The Rape of Europa (2007) and Adele's Wish (2008).\n[…]\nThe painting's history is described in the 2012 book The Lady in Gold: The Extraordinary Tale of Gustav Klimt's Masterpiece, Portrait of Adele Bloch-Bauer, by the journalist Anne-Marie O'Connor.\n[…]\nIn 2015 Altmann's story was dramatised for the film Woman in Gold starring Helen Mirren as Maria and Ryan Reynolds as Schoenberg. The painting of Adele – Maria's aunt – was the centrepiece for the story.\n[…]\nThe story of Adele Bloch-Bauer and Maria Altmann formed the basis for the 2017 novel Stolen Beauty by Laurie Lico Albanese."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Retrato_de_Adele_Bloch-Bauer_I",
        "situacao": "ok",
        "texto": "O Retrato de Adele Bloch-Bauer I é uma pintura de Gustav Klimt completada em 1907. Foi vendida em junho de 2006, a Ronald Lauder, proprietário da Neue Galerie em Nova Iorque, por 135 milhões de dólares, tendo sido, na época, a segunda pintura mais cara do mundo. A obra encontra-se em exibição permanente na  dita galeria, desde julho de 2006.\n[…]\nAdele Bloch-Bauer tornou-se a única modelo pintada por Klimt em duas ocasiões. O segundo quadro, Retrato de Adele Bloch-Bauer II, foi completado em 1912. Adele indicou, em testamento, que os quadros de Klimt deveriam ser doados à Galerie Belvedere,  instalada no palácio homônimo, de propriedade do Estado austríaco. Em 1925 Adele faleceu de meningite, e quando os nazis ocuparam a Áustria, o seu viúvo exiliou-se na Suíça. Todas as suas propriedades foram confiscadas, incluída a coleção Klimt.\n[…]\nComo as pinturas propriedade de Bloch-Bauer permaneceram na Áustria, o governo inclinou-se pelo testamento de Adele. Depois de uma batalha legal nos Estados Unidos e na Áustria, Maria Altmann foi declarada proprietária legal desta e de outras quatro pinturas de Klimt. A decisão foi tomada na Áustria. Após os quadros serem enviados para os Estados Unidos, estiveram em exibição em Los Angeles até o Retrato de Adele Bloch-Bauer I ser vendido a Lauder.\n[…]\nÉ significativo o comentário de Lauder ao recuperar o Retrato de Adele Bloch-Bauer I: \"Esta é a nossa Mona Lisa....\"\n[…]\n«The golden touch: Gustav Klimt's glittering portrait of his patron Adele Bloch-Bauer has just been sold for £73m, making it the most expensive painting in the world». Por Jonathan Jones. The Guardian,  21 de junho de 2006\n[…]\n«Gustav Klimt - Five Paintings from the Collection of Ferdinand and Adele Bloch-Bauer». Los Angeles County Museum of Art, 4 de abril de 2006\n[…]\n«Gustav Klimt». Neue Galerie New York",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "O Grito",
      "descricao": "Obra expressionista de Edvard Munch, de 1893."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "A máscara usada pelo assassino da série de filmes de terror Pânico foi inspirada em que pintura famosa?",
    "resposta": "O Grito, de Edvard Munch",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ghostface_(identity)",
      "https://en.wikipedia.org/wiki/The_Scream"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ghostface_(identity)",
        "situacao": "ok",
        "texto": "Ghostface (alternatively stylized as Ghost Face or GhostFace) is an identity that is adopted by the main antagonists of the Scream franchise. The figure was originally created by Kevin Williamson, and is primarily mute in person but voiced over the phone by Roger L. Jackson, regardless of who is behind the mask (as all killers use a voice changer utilizing that exact voice, starting in person with\n[…]\nThe design of the mask bears reference to Edvard Munch's painting The Scream, the film poster to Pink Floyd's The Wall, the ghostly characters that appeared in the 1930s Betty Boop cartoons, and Season 1 Scooby-Doo, Where Are You! ghosts in the episode “A Night Of Fright Is No Delight”. The mask is stark white and depicts a caricature of someone screaming and crying at the same time.\n[…]\nMcFarlane Toys produced a 6-inch figurine of Ghostface in 1999 for the \"Movie Maniacs II\" series of horror and science fiction inspired line of character models. A series of figures were produced by NECA for Scream 4 featuring the standard mask and black cowl plus variations such as \"Zombie Ghostface\" with a decayed appearance on the mask and \"Scarecrow Ghostface\" with brown, burlap material used for the mask and clothing.\n[…]\nCalling the mask a \"hyperbolic rendering\" of Edvard Munch's The Scream, Rockoff wrote that the face is \"twisted in an exaggerated, almost mocking grin, as if reflecting the look of terror and surprise on his victims' faces.\" Tony Magistrale also discussed the similarities between Ghostface's mask and The Scream in his book Abject Terrors: Surveying the Modern and Postmodern Horror Film, stating that the painting, \"an apt representation of the degree of alienation from other people, inspires the killers' murderous agenda\"."
      },
      {
        "url": "https://en.wikipedia.org/wiki/The_Scream",
        "situacao": "ok",
        "texto": "The Scream is an image first created by the Norwegian artist Edvard Munch in 1893, and later repeated by him in different versions. The agonized face in the painting has become one of the most iconic images in art, seen as representing a profound experience of existential dread related to the human condition. Munch's work, including The Scream, had a formative influence on the Expressionist moveme\n[…]\nSotheby's described the work as \"the most colorful and vibrant\" of the four versions Munch painted, noting also his hand-colouring of the frame on which he inscribed his poem which detailed the picture's inspiration. After the sale, Sotheby's auctioneer Tobias Meyer said the work was \"worth every penny\", adding: \"It is one of the great icons of art in the world and whoever bought it should be congratulated.\"\n[…]\nIn 2013, The Scream was one of four paintings that the Norwegian postal service chose for a series of stamps marking the 150th anniversary of Edvard Munch's birth. In 2018 Norwegian comedy duo Ylvis made a musical based on the painting's theft starring Pål Enger who stole it in 1994.\n[…]\nDespite popular opinion to the contrary, the Ghostface mask worn by the primary antagonists of the Scream series of horror was not inspired by the Munch painting. The mask, discovered by Marianne Maddalena and Wes Craven, was created in 1991 by Brigitte Sleiertin of the Fun World novelty company for the Halloween market. She based her concept drawings on old cartoons, such as those created by  Max Fleischer.\n[…]\nList of paintings by Edvard Munch\n[…]\nHeller, Reinhold (1973). Edvard Munch: The Scream. London: Allen Lane. ISBN 978-07-139-0276-1.\n[…]\nTemkin, Anne (2012). The Scream: Edvard Munch. Museum of Modern Art. ISBN 978-0870-7087-63.\n[…]\nEdvard Munch – Biography and Paintings (archived 2010) from EdvardMunch.info\n[…]\nMunch and The Scream – Discussion in the In Our Time series on the BBC Radio 4, Mar 2010"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ghostface",
        "situacao": "ok",
        "texto": "Ghostface é uma identidade fictícia adotada por vários personagens da série de filmes Scream. O personagem é praticamente mudo, mas sua voz é expressa por Roger L. Jackson, independentemente de quem está por trás da máscara. O personagem apareceu pela primeira vez em Scream (1996), como um disfarce usado pelos adolescentes Billy Loomis (Skeet Ulrich) e Stu Macher (Matthew Lillard), durante sua sér\n[…]\nGhostface foi criado por Wes Craven e Kevin Williamson. A máscara é baseada na pintura O Grito de Edvard Munch e foi criada e projetada pela empregada do Fun World, Brigitte Sleiertin, como um traje do Dia das Bruxas, antes de ser descoberto por Marianne Maddalena e Craven para o filme. O personagem é usado principalmente como um disfarce para cada um dos antagonistas de cada filme para esconder sua identidade, ao conduzir assassinatos em série e, como tal, tem sido retratado por vários atores.\n[…]\nO desenho da máscara tem referência à pintura de Edvard Munch O Grito, um dos personagens na capa do álbum de Pink Floyd, The Wall e os personagens fantasmagóricos que apareceram nos desenhos animados dos anos 30, Betty Boop. A máscara é branca e mostra uma caricatura de alguém gritando e chorando ao mesmo tempo. A designer Sleiertin afirmou que a máscara exibiu emoções diferentes, \"É um olhar horrível, é um olhar triste, é um olhar frenético\".\n[…]\nFinal de Pânico 4 - Sidney é imobilizada por Charlie na cozinha, que se revela um dos assassinos, no entanto esta consegue escapar até a porta da casa, onde é esfaqueada por Jill, que retira a máscara do Ghostface e revela-se um dos assassinos\n[…]\nFinal da primeira temporada da série de televisão Scream (Revelações) - Emma (Willa Fitzgerald) vai ao lago ajudar sua mãe, que está amarrada, ao olhar para trás encontra Ghostface, após confrontá-lo, o assassino tira a máscara, revelando ser Piper Shaw (Amelia Rose Blaire).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Quadrado Negro",
      "descricao": "Quadro suprematista de Kazimir Malevich de 1915."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Em 1915, Malevich expôs o Quadrado Negro no alto do canto da sala, lugar que nas casas russas era reservado a quê?",
    "resposta": "Aos ícones religiosos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Black_Square_(painting)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Black_Square_(painting)",
        "situacao": "ok",
        "texto": "Black Square (Russian: Чёрный квадрат) is a 1915 oil on linen canvas painting by the Russian avant-garde artist and theorist Kazimir Malevich. There are four painted versions, the first of which was completed in 1915 and described by the artist as his breakthrough work and the inception of his Suprematist art movement (1915–1919).\n[…]\nIn his manifesto for the Suprematist movement, Malevich stated that the paintings were intended as \"a desperate struggle to free art from the ballast of the objective world\" by focusing solely on form. He sought to create paintings that all could understand, and that would have an emotional impact comparable to religious works.\n[…]\nThe 1915 Black Square was the turning point in his career and defined the aesthetic he was to follow for the remainder of his career; his other significant paintings include variants such as White on White (1918), Black Circle (c. 1924), and Black Cross (c. 1920–23). Malevich painted three other versions in 1923, 1929, and between the late 1920s and early 1930s. Each version differs slightly in size and texture.\n[…]\nHe first used the motif of a black square while working as the stage designer for the premiere of the Cubo-Futuristic opera Victory over the Sun by the painter and composer Mikhail Matyushin's (1861–1934), staged at the Luna Park Theater in Saint Petersburg on 3 December 1913. Although the opera is ostensibly a comedic farce, the plot satirises the religious dogma and Tsarist autocracy then dominating pre-revolution Russia.\n[…]\nThe second copy was painted around 1923 in collaboration with his students Anna Leporskaya, Konstantin Rozhdestvensky and Nikolay Suyetin. The third Black Square (also at the Tretyakov Gallery) was painted c. 1929 for Malevich's solo exhibition, perhaps as a stand-in for the original, which was by then in poor condition."
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Anita Malfatti",
      "descricao": "Pintora modernista brasileira, que viveu de 1889 a 1964 e fez uma polêmica exposição em São Paulo em 1917."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que escritor, criador do Sítio do Picapau Amarelo, atacou num artigo de jornal a exposição de Anita Malfatti de 1917?",
    "resposta": "Monteiro Lobato",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Anita_Malfatti"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Anita_Malfatti",
        "situacao": "ok",
        "texto": "Anita Catarina Malfatti (São Paulo, 2 de dezembro de 1889 — São Paulo, 6 de novembro de 1964) foi uma pintora, desenhista, gravadora, ilustradora e professora ítalo-brasileira. Anita Malfatti era uma pessoa com deficiência física. É considerada pioneira da Arte Moderna no Brasil.\n[…]\nEm 1917, de volta ao Brasil, Anita promoveu uma segunda exposição em 13 de dezembro de 1917, na esperança que sua arte seja compreendida pelo público mais amplo. Suas pinturas causam tanto polêmica quanto admiração. Sua obra A Boba é duramente criticada pela ala conservadora da elite cultural de São Paulo.\n[…]\nA mais dura crítica veio do escritor e crítico Monteiro Lobato que, em 20 de dezembro de 1917, dedicou um artigo ao assunto no jornal O Estado de S.Paulo, intitulado A propósito da exposição Malfatti. Lobato considerou as obras das artistas distorções de mau gosto, porém, reconheceu o talento da pintora.\n[…]\nEm 1929, abriu em São Paulo sua quarta exposição individual. Depois disso, a partir de 1932, Anita dedicou-se ao ensino escolar. Retomou suas aulas na Escola Normal Americana e foi trabalhar também na Escola Normal do Mackenzie College. Em 1933, instala seu ateliê no bairro paulista de Higienópolis, no qual permanece até 1952. Em 1936, Anita ilustrou o livro Cafundó da Infância, de Carlos Lébeis.\n[…]\nAnita Malfatti faleceu no dia 6 de novembro de 1964. Foi sepultada no Cemitério dos Protestantes.\n[…]\nMinissérie Um Só Coração (2004), de Maria Adelaide Amaral veiculada pela Rede Globo, Anita Malfatti, foi representada pela atriz Betty Gofman.\n[…]\nDocumentário Anita Malfatti de Luzia Portinari Greggio. Recebeu o Prêmio Estímulo de Curta-metragem da Secretaria de Cultura do Estado de São Paulo em 2001.\n[…]\nInstituto Anita Malfatti"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "A Escola de Atenas",
      "descricao": "Afresco de Rafael nos Palácios do Vaticano."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "No afresco A Escola de Atenas, Rafael teria dado ao filósofo Platão o rosto de que outro artista?",
    "resposta": "Leonardo da Vinci",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_School_of_Athens"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_School_of_Athens",
        "situacao": "ok",
        "texto": "The School of Athens (Italian: Scuola di Atene) is a fresco by the Italian Renaissance artist Raphael. It was painted between 1509 and 1511 as part of a commission by Pope Julius II to decorate the rooms now called the Stanze di Raffaello in the Apostolic Palace in Vatican City.\n[…]\nAdditionally, Italian artists Leonardo da Vinci and Michelangelo are believed to be portrayed through Plato and Heraclitus, respectively. Raphael included a self-portrait beside Ptolemy.\n[…]\nThe painting is notable for its use of accurate perspective projection, a defining characteristic of Renaissance art, which Raphael learned from Leonardo; likewise, the themes of the painting, such as the rebirth of Ancient Greek philosophy and culture in Europe were inspired by Leonardo's individual pursuits in theatre, engineering, optics, geometry, physiology, anatomy, history, architecture and art.\n[…]\nHowever, to Heinrich Wölfflin, \"it is quite wrong to attempt interpretations of the School of Athens as an esoteric treatise ... The all-important thing was the artistic motive which expressed a physical or spiritual state, and the name of the person was a matter of indifference\" in Raphael's time.\n[…]\nThe cartoon for the painting is in the Pinacoteca Ambrosiana in Milan. Missing from it is the architectural background, the figures of Heraclitus, Raphael, and Protogenes. The group of the philosophers in the left foreground strongly recall figures from Leonardo's Adoration of the Magi. Additionally, there are some engravings of the scene's sculptures by Marcantonio Raimondi; they may have been based on lost drawings by Raphael, as they do not match the fresco exactly.\n[…]\nCultural references to Leonardo da Vinci\n[…]\nThe Last Supper by Leonardo da Vinci\n[…]\nThe School of Athens in Britannica."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Escola_de_Atenas",
        "situacao": "ok",
        "texto": "A Escola de Atenas (Scuola di Atene no original) é uma das mais famosas pinturas do renascentista italiano Rafael e representa a Academia de Atenas. Foi pintada entre 1509 e 1510 na Stanza della Segnatura sob encomenda do Vaticano. A pintura já foi descrita como \"a obra-prima de Rafael e a personificação perfeita do espírito clássico da Renascença\".\n[…]\nA \"Escola de Atenas\" é um dos painéis que compõem um grupo de quatro afrescos principais que retratam ramos distintos do conhecimento. Cada tema é identificado acima por um tondo em separado contendo uma figura feminina majestosa sentada nas nuvens, com putti carregando frases como: “Buscar o conhecimento das causas”, “Inspiração Divina”, “Conhecimento das coisas divinas” (Disputa), “Para cada um o que lhe é devido”.\n[…]\nNo entanto, o afresco foi até recentemente interpretado como uma exortação à filosofia e, de maneira mais profunda, como uma representação visual do papel do amor em elevar as pessoas para o conhecimento superior, em grande parte em dívida com as teorias contemporâneas de Marsilio Ficino e outros pensadores neoplatônicos ligados a Rafael.\n[…]\nA identidade de alguns dos filósofos como Platão ou Aristóteles, são inegáveis. Além disso, as identificações de figuras de Rafael tem sido sempre hipotéticas. Para complicar, além de Vasari alguns receberam múltiplas identificações, não só com antigos, mas também com figuras contemporâneas a Rafael.\n[…]\nLuitpold Dussler conta entre aqueles que podem ser identificados com alguma certeza: Platão, Aristóteles, Sócrates, Pitágoras, Euclides, Ptolomeu, Zoroastro, o próprio Rafael, Il Sodoma e Diógenes. Outras identificações ele assegura serem \"mais ou menos especulativas\".\n[…]\n3: desconhecido (acredita-se ser o próprio Rafael)\n[…]\n14: Platão segurando o Timeu (Leonardo da Vinci).\n[…]\nR: Apeles (Rafael).\n[…]\nSalas de Rafael\n[…]\nPinturas de Rafael",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "El Greco",
      "descricao": "Pintor nascido na Grécia, que fez carreira em Toledo, na Espanha, e viveu de 1541 a 1614."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "O pintor que a Espanha conheceu como El Greco, ou seja, o grego, nasceu em que ilha do Mediterrâneo?",
    "resposta": "Creta",
    "distratores": [
      "Chipre",
      "Sicília",
      "Rodes"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/El_Greco",
      "https://pt.wikipedia.org/wiki/El_Greco"
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
        "texto": "Doménikos Theotokópoulos (em grego: Δομήνικος Θεοτοκόπουλος), mais conhecido como El Greco (\"O Grego\"; Heraclião ou Fodele, 1 de outubro de 1541 — Toledo, 7 de abril de 1614), foi um pintor, escultor e arquiteto grego que desenvolveu a maior parte da sua carreira na Espanha. Assinava suas obras com o nome original, ressaltando sua origem.\n[…]\nPertencendo Creta à Sereníssima República de Veneza desde 1211, era natural que o jovem El Greco procurasse continuar sua carreira naquela cidade italiana. Embora o ano exato dessa mudança não seja claro, a maioria dos estudiosos é da opinião que o pintor trasladou-se por volta do ano de 1567. As informações sobre os anos do mestre na Itália são limitadas.\n[…]\nEra natural que o jovem El Greco seguisse sua carreira em Veneza, pois Creta era posse da República de Veneza desde 1211. Embora o ano exato não seja claro, a maioria dos estudiosos concorda que El Greco foi para Veneza por volta de 1567. O conhecimento dos anos de El Greco na Itália é limitado.\n[…]\nSem os favores do rei, El Greco foi obrigado a permanecer em Toledo, onde fora recebido em 1577 como um grande pintor. De acordo com Hortensio Félix Paravicino, um pregador e poeta espanhol do século XVII, \"Creta lhe dera a vida e o talento, Toledo foi a melhor pátria, onde a morte lhe permitiu alcançar a vida eterna\".\n[…]\nEm 1998, o compositor eletrônico e artista grego Vangelis lançou El Greco, uma sinfonia inspirada no artista. Este álbum é uma extensão do anterior, de Vangelis, Foros Timis Ston Greco (\"Um Tributo a El Greco\"). A vida do mestre é também tema de um filme, dirigido por Yannis Smaragdis, que se iniciou em outubro de 2006, na ilha de Creta, e estreou-se no cinema um ano depois; o ator britânico Nick Ashdon foi escolhido para representar o papel de El Greco."
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Guerra e Paz (Portinari)",
      "descricao": "Par de grandes painéis pintados por Candido Portinari entre 1952 e 1956 e doados pelo Brasil à ONU."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Os enormes painéis Guerra e Paz, de Candido Portinari, ficam na sede de que organização, em Nova York?",
    "resposta": "Organização das Nações Unidas",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Candido_Portinari",
      "https://en.wikipedia.org/wiki/Candido_Portinari"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Candido_Portinari",
        "situacao": "ok",
        "texto": "Candido Portinari (Brodowski, 29 de dezembro de 1903 – Rio de Janeiro, 6 de fevereiro de 1962) foi um artista plástico brasileiro, considerado um dos mais importantes pintores brasileiros de todos os tempos, sendo o que mais alcançou projeção internacional.\n[…]\nPortinari pintou mais de cinco mil obras, de pequenos esboços e pinturas de proporções padrão (como O Lavrador de Café), até gigantescos murais, como os painéis Guerra e Paz, presenteados à sede da ONU em Nova Iorque em 1956. Em dezembro de 2010, graças aos esforços de seu filho, estes murais retornaram ao Brasil para exibição no Teatro Municipal do Rio de Janeiro.\n[…]\nEntre suas obras mais prestigiadas e famosas, destacam-se os painéis Guerra e Paz (1953-1956), que foram presenteados em 1956 à sede da ONU de Nova Iorque. Na época, as autoridades dos Estados Unidos não permitiram a ida de Portinari para a inauguração dos murais, devido às ligações do artista com o Partido Comunista Brasileiro.\n[…]\ne em novembro de 2010, depois de 53 anos, os painéis voltaram ao Brasil, onde foram exibidos, em dezembro do mesmo ano, no Teatro Municipal do Rio de Janeiro (Para saber mais, ver Guerra e Paz) e,  em 2012, no Memorial da América Latina, em São Paulo.\n[…]\n1956 – Nova Iorque (Estados Unidos) – Prêmio Guggenheim de Pintura, por ocasião da inauguração dos painéis Guerra e Paz na sede da ONU de Nova York.\n[…]\n2025 - Brasília (DF) - Projeto de Lei n° 2252, de 2025, que \"Inscreve o nome de Candido Portinari no Livro dos Heróis e Heroínas da Pátria.\"\n[…]\nPortinari, o Menino de Brodósqui\n[…]\nProjeto Portinari\n[…]\nMuseu Casa de Portinari\n[…]\nProjeto Portinari (exposição virtual das obras e outros documentos)\n[…]\n«Museu Casa de Portinari, em Brodowski, é reaberto ao público»\n[…]\n«Portinari: O Pintor do Povo»\n[…]\n«Candido Portinari»"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Candido_Portinari",
        "situacao": "ok",
        "texto": "Candido Portinari (December 29, 1903 – February 6, 1962) was a Brazilian painter. He is considered one of the most important Brazilian painters as well as a prominent and influential practitioner of the neo-realism style in painting.\n[…]\nIn 1956, after the United Nations had appealed to its affiliated countries for the donation of a work of art to the organization's new headquarters. Brazil designated Portinari for the task, who took four years and around 180 studies to complete the painting. Dag Hammarskjöld, UN Secretary-General, named the work \"the most important monumental work of art donated to the UN\".\n[…]\nHis career coincided with and included collaboration with Oscar Niemeyer amongst others. Portinari's works can be found in galleries and settings in Brazil and abroad, ranging from the family chapel in his childhood home in Brodowski to his panels Guerra e Paz (War and Peace) in the United Nations building in New York and four murals in the Hispanic Reading Room of the Library of Congress in Washington, D.C.\n[…]\nNicolás Guillén's and Horacio Salinas's ‘Un son para Portinari’, famously performed by Mercedes Sosa, is dedicated to the artist. Candido Portinari name continues to be seen today. Rodovia Candido Portinari is a State highway located in Brazil in São Paulo.\n[…]\nGiunta, Andrea, ed. Cândido Portinari y el sentido social del arte. Buenos Aires: Siglo XXI 2005.\n[…]\nCandido Portinari (2018). Poemas de Portinari [Poems by Portinari] (PDF) (in Brazilian Portuguese) (3 ed.). Funarte. p. 192. ISBN 978-85-7507-198-4. Archived from the original on 2020-11-01.\n[…]\nCasa de Portinari\n[…]\nProjeto Portinari\n[…]\nPortinari in Dezenovevinte - Arte Brasileira do Século XIX e Início do XX\n[…]\n\"Portinari: Painter of the People\".\n[…]\n\"Candido Portinari\"."
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Ninfeias (Monet)",
      "descricao": "Série de quadros de Claude Monet com o lago de seu jardim em Giverny."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Em que museu de Paris as grandes telas das Ninfeias de Monet ocupam duas salas ovais?",
    "resposta": "Museu de l'Orangerie",
    "distratores": [
      "Museu d'Orsay",
      "Museu do Louvre",
      "Museu Marmottan"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Mus%C3%A9e_de_l%27Orangerie",
      "https://en.wikipedia.org/wiki/Water_Lilies_(Monet_series)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mus%C3%A9e_de_l%27Orangerie",
        "situacao": "ok",
        "texto": "The Musée de l'Orangerie (English: Orangery Museum) is an art gallery of Impressionist and Post-Impressionist paintings located in the west corner of the Tuileries Garden next to the Place de la Concorde in Paris. The museum is most famous as the permanent home of eight large Water Lilies murals by Claude Monet, and also contains works by Paul Cézanne, Henri Matisse, Amedeo Modigliani, Pablo Picas\n[…]\nAfter World War I, changes came to the Orangerie. In 1921, the State gave the building to the Under-Secretariat of State for Fine Arts along with another building, the Jeu de Paume. The goal for these two buildings was to provide a space for living artists to display their works. At the time, Claude Monet (1840–1926) was painting a series of Water Lilies (Nymphéas) paintings for the State that were destined for another museum, the Musée Rodin.\n[…]\nThe Water Lilies donation to the Orangerie was finalized in 1922. Monet helped architect Camille Lefèvre with the architectural design in which eight panels, each two metres high and spanning 91 metres in length, are arranged in two oval rooms which form the infinity symbol. Monet also required skylights for observing the paintings in natural light.\n[…]\nHoog, Michel (trans. by Jean-Marie Clarke) (1989, reprinted 2006). Musée de l'Orangerie, les Nymphéas of Claude Monet Paris: Réunion des musées nationaux ISBN 9782711850693\n[…]\n\"The Building from the Second Empire to the Water Lilies.\" The Building from the Second Empire to the Water Lilies | Musée De L'Orangerie, 2019, www.musee-orangerie.fr/en/article/building-second-empire-water-lilies.\n[…]\n\"The Installation of the Water Lilies.\" The Installation of the Water Lilies | Musée De L'Orangerie, 2019, www.musee-orangerie.fr/en/article/installation-water-lilies.\n[…]\nMadeline, Laurence. La Collection Walter-Guillaume Et Les Nymphéas De Monet: Musée De L'Orangerie. Nouvelles Éditions Scala, 2017."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Water_Lilies_(Monet_series)",
        "situacao": "ok",
        "texto": "Water Lilies (French: Nymphéas [nɛ̃.fe.a]) is a series of approximately 250 oil paintings by French Impressionist Claude Monet (1840–1926). The paintings depict his flower garden at his home in Giverny, and were the main focus of his artistic production during the last 31 years of his life. Many of the works were painted while Monet suffered from cataracts.\n[…]\nDuring the 1920s, the state of France built a pair of oval rooms at the Musée de l'Orangerie as a permanent home for eight large water lily murals by Monet. The exhibit opened to the public on 16 May 1927, a few months after Monet's death. Sixty water lily paintings from around the globe were assembled for a special exhibition at the Musée de l'Orangerie in 1999.\n[…]\nIn 2020, the Museum of Fine Arts, Boston celebrated its 150th anniversary with some of Monet's Water Lilies paintings.\n[…]\nOn 6 May 2014, one of the Water Lilies, Le Bassin aux Nymphéas, was auctioned at Christie's, New York City for $27 million.\n[…]\nIn June 2014, one of the Water Lilies, Nymphéas, sold for US$54 million at a Sotheby's auction in London. This piece was auctioned to an anonymous buyer, but the piece went on to be part of the exhibition \"Painting the Modern Garden: From Monet to Matisse\" at the Cleveland Museum of Art and the Royal Academy of Arts, London, starting in 2015.\n[…]\nWeeping Willow, 1918 Monet painting, one of several works depicting a Weeping Willow tree located at the edge of his Water Lilies pond\n[…]\nRoss King (2017), Mad Enchantment: Claude Monet and the Painting of the Water Lilies, Bloomsbury Publishing Plc.\n[…]\nClaude Monet, Ministère de la culture et de la communication\n[…]\nWater Lilies at the Portland Art Museum\n[…]\nThe Met and Lego Reimagine Monet’s Water Lilies as a 3,179-Brick Art Set Collaboration between The Metropolitan Museum of Art and Lego to create a Lego Art set featuring Bridge Over a Pond of Water Lilies"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Museu_da_Orangerie",
        "situacao": "ok",
        "texto": "O  Musée de l'Orangerie é uma galeria de arte impressionista e pós-impressionista localizada na Place de la Concorde em Paris.\n[…]\nContém trabalhos de Paul Cézanne, Henri Matisse, Amedeo Modigliani, Claude Monet, Pablo Picasso, Pierre-Auguste Renoir, Henri Rousseau, Chaim Soutine, Alfred Sisley e Maurice Utrillo entre outros.\n[…]\nMusée de l'Orangerie",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Parque Nacional da Serra da Capivara",
      "descricao": "Parque nacional brasileiro com grande concentração de sítios de pinturas rupestres pré-históricas."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "O Parque Nacional da Serra da Capivara, famoso por milhares de pinturas rupestres, fica em que estado brasileiro?",
    "resposta": "Piauí",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Parque_Nacional_da_Serra_da_Capivara"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Parque_Nacional_da_Serra_da_Capivara",
        "situacao": "ok",
        "texto": "O Parque Nacional Serra da Capivara é uma unidade de conservação brasileira de proteção integral à natureza que ocupa parte dos municípios de São Raimundo Nonato, João Costa, Brejo do Piauí e Coronel José Dias, todos localizados no estado do Piauí. Esta área tem a maior e mais antiga concentração de sítios pré-históricos da América. Estudos científicos confirmam que a cadeia montanhosa de Capivara\n[…]\nO Parque Nacional Serra da Capivara se localiza no Estado do Piauí, ao Sudeste do Estado. Existem atualmente cerca de 400 sítios arqueológicos catalogados onde foram encontrados artefatos líticos, esqueletos humanos e  pinturas rupestres. No sítio Toca do Boqueirão da Pedra Furada, 63 datações por carbono-14 (C-14) permitiram o estabelecimento de uma coluna cronoestratigráfica que vai de 59 000 até 5 000 anos AP. Numerosas pinturas rupestres se encontram na área.\n[…]\nAs pinturas rupestres são a manifestação mais abundante, notável e espetacular deixada pelas populações pré-históricas que viveram na área do Parque Nacional, desde épocas muito recuadas.\n[…]\nNo parque destaca-se o Mocó, único mamífero endêmico da Caatinga. O maior predador de toda a região do parque é a onça-pintada, que pode ultrapassar 50 kg e se alimenta de outros vertebrados que pode capturar.\n[…]\nNo início de 2017 o Museu do Homem Americano passou a ser de responsabilidade do comitê permanente de acompanhamento e gestão do Parque Nacional da Serra da Capivara, um modelo de gerenciamento compartilhado instituído pelo governo do estado do Piauí e pelo Ministério da Cultura.\n[…]\nSerra da Capivara (Território do Piauí)\n[…]\nParque Nacional Serra da Capivara - Fundação Museu do Homem Americano\n[…]\nParque Nacional Serra da Capivara - PI - Portal Brasil\n[…]\nParque Nacional Serra da Capivara - Instituto do Patrimônio Artístico e Histórico Nacional\n[…]\nParque Nacional da Serra da Capivara - Fotorreportagem Olhar sobre o Mundo"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Independência ou Morte (pintura)",
      "descricao": "Quadro de Pedro Américo, de 1888, também chamado O Grito do Ipiranga."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Pedro Américo pintou Independência ou Morte longe do Brasil. Em que cidade italiana ele fez o quadro?",
    "resposta": "Florença",
    "fonte": [
      "https://en.wikipedia.org/wiki/Independence_or_Death_(painting)",
      "https://pt.wikipedia.org/wiki/Pedro_Am%C3%A9rico"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Independence_or_Death_(painting)",
        "situacao": "ok",
        "texto": "The 1888 painting Independence or Death (Independência ou Morte in Portuguese), also known as the Cry of Ipiranga (Grito do Ipiranga in the original) is an oil on canvas painting by Pedro Américo, from 1888. It is the best known artwork representing the proclamation of the Brazilian independence.\n[…]\nHis performance at the academy made him known even to Emperor Pedro II, who sponsored a trip to Paris and studies at the École nationale supérieure des Beaux-Arts, where the artist perfected his style, mainly in historical painting. His most famous work, Independence or Death (Portuguese: Independência ou Morte), was shown for the first time in the Accademia di Belle Arti di Firenze (Academy of Fine Arts of Florence) on April 8, 1888.\n[…]\nAmérico finished the painting in 1888 in Florence, Italy, 66 years after the proclamation of independence. The Brazilian imperial house commissioned the work, due to investments into the construction of the Museu do Ipiranga (presently the Museu Paulista). The goal of the artwork was to emphasize the monarchy.\n[…]\nAccording to the historian, the critics saw in Independência ou Morte, a whole scene copy of 1807, Friedland, painted thirteen years earlier by Meissonier, \"in which he also portrays Napoleon, a polyvalent figure that serves as a model for Américo to paint both Caxias and D. Pedro I, this one giving the cry of independence at the bank of the Ipiranga\" (Portuguese: \"em que este também retrata Napoleão, figura polivalente que tanto serve de modelo para Américo pintar Caxias como D.\n[…]\nPedro I, este dando o grito de independência às margens do Ipiranga.\").\n[…]\nPedro Américo used some historical paintings as references to compose the artwork Independência ou Morte.\n[…]\nMedia related to Category:Independence or Death by Pedro_Américo at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pedro_Am%C3%A9rico",
        "situacao": "ok",
        "texto": "Pedro Américo de Figueiredo e Melo (Areia, 29 de abril de 1843 – Florença, 7 de outubro de 1905) foi um romancista, poeta, cientista, teórico de arte, ensaísta, filósofo, político e professor brasileiro, mas é mais lembrado como um dos mais importantes pintores acadêmicos do Brasil, deixando obras de impacto nacional.\n[…]\nVárias dessas obras participaram de salões da Academia ou foram expostas em Florença, e muitas foram adquiridas pelo governo brasileiro.\n[…]\nConseguiu, no entanto, firmar um contrato com o governo do estado de São Paulo para a criação em três anos de outra obra importante, Independência ou Morte!, pintada em Florença em 1888, que se tornou imediatamente célebre e também polêmica. Mais uma vez, debateu-se sua estética e foi acusado de plágio.\n[…]\n\"Herdeiro da expressão do Romantismo, próximo a Eugène Delacroix, e em oposição a Ingres, Pedro Américo mantinha os valores da imaginação, aliados a uma descrição fotográfica do movimento. Dessa forma, continuava com os mesmos códigos da pintura histórica mimética e analógica, e enredava-se, como os românticos, nos meandros do 'já visto', sem que seu colossal esforço por emancipar a arte brasileira, significasse um anúncio para o futuro da nova e moderna escola brasileira de pintura do século XX.\n[…]\nSobre o Independência ou Morte!, ao que consta Pedro Américo só veio a conhecer a outra obra um ano depois de ele ter finalizado a sua. O próprio pintor preferiu expor a problemática no seu Discurso sobre o Plágio, onde defendeu a ideia de que o que mais importa na arte não é a invenção de formas novas, mas seu constante aperfeiçoamento.\n[…]\nÉ nome de praça em João Pessoa e um busto seu adorna a Via Maggio em Florença. Em sua cidade é nome de rua e a casa em que nasceu funciona hoje como museu à sua memória.\n[…]\nHistória da filosofia no Brasil"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "A Noite Estrelada",
      "descricao": "Quadro de Vincent van Gogh, de 1889, com um céu noturno em espirais."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Van Gogh pintou A Noite Estrelada a partir da vista da janela do lugar onde estava internado. Que lugar era esse?",
    "resposta": "Um asilo psiquiátrico em Saint-Rémy",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Starry_Night"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Starry_Night",
        "situacao": "ok",
        "texto": "The Starry Night is an oil-on-canvas painting by the Dutch Post-Impressionist painter Vincent van Gogh. Painted in June 1889, it depicts the view from the east-facing window of his asylum room at Saint-Rémy-de-Provence, just before sunrise, with the addition of an imaginary village. It has been in the permanent collection of the Museum of Modern Art in New York City since 1941, acquired through th\n[…]\nDuring the year Van Gogh stayed at the asylum in Saint-Rémy-de-Provence, the prolific output of paintings he had begun in Arles continued. During this period, he produced some of the best-known works of his career, including the Irises from May 1889, now in the J. Paul Getty Museum, and the blue self-portrait from September 1889, in the Musée d'Orsay. The Starry Night was painted by around 18 June, the date he wrote to his brother Theo to say he had a new study of a starry sky.\n[…]\nVan Gogh described the second of the two landscapes he mentions he was working on, in a letter to his sister Wil on 16 June 1889. This is F719 Green Wheat Field with Cypress, now in Prague, and the first painting at the asylum he painted en plein air. F1548 Wheatfield, Saint-Rémy de Provence, now in New York, is a study for it. Two days later, Vincent wrote to Theo stating that he had painted \"a starry sky\".\n[…]\nThe village has been variously identified as either a recollection of Van Gogh's Dutch homeland, or based on a sketch he made of the town of Saint-Rémy. In either case, it is an imaginary component of the picture, not visible from the window of the asylum bedroom.\n[…]\nWhile stopping short of calling the painting a hallucinatory vision, Naifeh and Smith discuss The Starry Night in the context of Van Gogh's mental illness, which they identify as temporal lobe epilepsy, or latent epilepsy.\n[…]\nList of works by Vincent van Gogh\n[…]\nThe Starry Night at Who is van Gogh\n[…]\nVincent van Gogh, The Starry Night, ColourLex"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/A_Noite_Estrelada",
        "situacao": "ok",
        "texto": "A Noite Estrelada é uma pintura de Vincent van Gogh de 1889. A obra retrata a vista da janela de um quarto do hospício de Saint-Rémy-de-Provence, pouco antes do nascer do sol, com a adição de um vilarejo idealizado pelo artista. A tela faz parte da coleção permanente do Museu de Arte Moderna de Nova Iorque desde 1941. É considerada uma das mais famosas pinturas de Van Gogh e uma das mais icônicas \n[…]\nApós o colapso de 23 de dezembro de 1888 que resultou na automutilação da orelha esquerda, Vincent Van Gogh internou-se voluntariamente no asilo psiquiátrico Saint-Paul-de-Mausole em 8 de maio de 1889.\n[…]\nNuma carta para a irmã Wil de 16 de junho de 1889, o pintor descreve a segunda das duas paisagens que estivera produzindo, Campo Verde (F719), a primeira que definitivamente fora pintada en plein air durante a estadia no hospital psiquiátrico. Campo de Trigo, Saint-Rémy de Provence (F1548) é um dos estudos produzidos para essa pintura. Dois dias depois, Vincent escreveu para Theo contando-lhe que havia pintado \"um céu estrelado\".\n[…]\nA lua foi uma estilização, pois registros astronômicos indicam que o astro estivera minguante giboso quando Van Gogh produziu a tela. Mesmo que a Lua então estivesse minguante, a representação de Van Gogh não estaria astronomicamente adequada. O único elemento pictórico definitivamente fora do alcance daquela vista de Van Gogh é o vilarejo, que teve por base o rascunho F1541v, feito a partir de uma encosta montanhosa acima do nível de Saint-Rémy.\n[…]\nO vilarejo da pintura tem sido interpretado tanto como uma reprodução de lembranças da terra natal do artista quanto uma variação de um esboço que fizera da cidade de Saint-Rémy. De todo modo, é um componente imaginado.\n[…]\n«A Noite Estrelada» (em inglês). no ColourLex\n[…]\n«Studio Behind Bars - Matéria sobre a produção do pintor no asilo de Saint-Rémy» (em inglês). no Van Gogh's Studio Practice",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Primeira Exposição Impressionista",
      "descricao": "Mostra coletiva de Monet, Degas, Renoir, Pissarro e outros, realizada em Paris no antigo estúdio do fotógrafo Nadar, em 1874."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Em que ano Monet, Degas, Renoir e colegas fizeram sua primeira exposição em grupo, no antigo estúdio do fotógrafo Nadar, em Paris?",
    "resposta": "1874",
    "fonte": [
      "https://en.wikipedia.org/wiki/Impressionism",
      "https://pt.wikipedia.org/wiki/Impressionismo"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Impressionism",
        "situacao": "ok",
        "texto": "Impressionism was a 19th-century art movement characterised by visible brush strokes, open composition, emphasis on accurate depiction of light in its changing qualities (often accentuating the effects of the passage of time), ordinary subject matter, unusual visual angles, and inclusion of movement as a crucial element of human perception and experience.\n[…]\nThe Impressionists faced harsh opposition from the conventional art community in France. The name of the style derives from the title of a Claude Monet work, Impression, Sunrise, which provoked the critic Louis Leroy to coin the term in a satirical 1874 review of the First Impressionist Exhibition published in the Parisian newspaper Le Charivari.\n[…]\nThe organisers invited a number of other progressive artists to join them in their inaugural exhibition, including the older Eugène Boudin, whose example had first persuaded Monet to adopt plein air painting years before. Another painter who greatly influenced Monet and his friends, Johan Jongkind, declined to participate, as did Édouard Manet. In total, thirty artists participated in their first exhibition, held in April 1874 at the studio of the photographer Nadar.\n[…]\nTheir participation in the series of eight Impressionist exhibitions that took place in Paris from 1874 to 1886 varied: Morisot participated in seven, Cassatt in four, Bracquemond in three, and Gonzalès did not participate.\n[…]\nClaude Monet (1840–1926), the most prolific and stereotypical of the Impressionists\n[…]\nPierre-Auguste Renoir (1841–1919), who participated in Impressionist exhibitions in 1874, 1876, 1877 and 1882\n[…]\nLuminism (Impressionism)\n[…]\nParis 1874 Inventing impressionism Exhibition at the Musée d'Orsay, from 26 March to 14 July 2024.\n[…]\nParis 1874: The Impressionist Moment Exhibition at the National Gallery of Art Washington from 8 September 2024 to 19 January 2025."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Impressionismo",
        "situacao": "ok",
        "texto": "O impressionismo foi um movimento que surgiu na pintura francesa do século XIX, no momento da chamada Belle Époque ou Bela Época em português. O nome do movimento é derivado da obra \"Impressão, nascer do sol\" (1872), de Claude Monet.\n[…]\nEntre os principais expoentes do Impressionismo estão Claude Monet, Edouard Manet, Edgar Degas, Auguste Renoir, Alfred Sisley e Camille Pissarro. Podemos dizer ainda que Claude Monet foi um dos maiores artistas da pintura impressionista da época.\n[…]\nO termo “impressionistas” foi cunhado graças a uma exposição que ocorreu em Paris em abril de 1874, composta de artistas excluídos pela elite acadêmica. Foi a partir desta exposição que a crítica de Louis Leroy se deu, publicada no jornal Le Charivari. A expressão foi usada originalmente de forma pejorativa, mas Monet e seus colegas adotaram o título, sabendo da revolução que estavam iniciando.\n[…]\nA origem do grupo impressionista, no entanto, acontece mesmo em Paris. Em busca de um ensino de arte onde o pictórico fosse liberal, ganham força a Académie Suisse e o Ateliê Gleyre. A Académie Suisse, localizada no Quai de Orfèvres, era onde se trabalhava para ganhar pouco, onde havia uma grande liberdade e necessidade de independência. Lá foi onde estudaram nomes como Pissarro, Cézanne e Guillaumin.\n[…]\nNa época, a fama de Manet fez com que seus colegas de grupo o considerassem o promotor da vanguarda. Ele viraria, então, o presidente dessas sessões. Agrupavam-se, nestas reuniões, nomes da pintura como: Constantin Guys, Claude Monet, Renoir, Pissarro, Sisley, Cézanne, Bazille, Fantin-Latour.\n[…]\nMas apesar de semelhantes em diversos casos, o impressionismo literário não assume interdependência com o impressionismo pictórico.\n[…]\nMúsica impressionista"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Missão Artística Francesa",
      "descricao": "Grupo de artistas franceses, entre eles Jean-Baptiste Debret e Nicolas-Antoine Taunay, que chegou ao Rio de Janeiro no reinado de Dom João."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Em que ano a Missão Artística Francesa, com Debret e Taunay, desembarcou no Rio de Janeiro?",
    "resposta": "1816",
    "distratores": [
      "1808",
      "1822",
      "1831"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Miss%C3%A3o_Art%C3%ADstica_Francesa"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Miss%C3%A3o_Art%C3%ADstica_Francesa",
        "situacao": "ok",
        "texto": "A Missão Artística Francesa foi um grupo de artistas e artífices franceses que, deslocando-se para o Brasil no início do século XIX, dinamizou o panorama das Belas Artes no país introduzindo o sistema de ensino superior acadêmico e fortalecendo o Neoclassicismo que ali estava iniciando seu aparecimento.\n[…]\nAssim, em 23 de novembro de 1820 um novo decreto alterou a estrutura da escola, voltando a incluir os ofícios mecênicos. Embora com o apoio real, a missão encontrou resistência entre os artistas nativos, ainda seguidores do Barroco, e ameaçava a posição dos mestres portugueses já estabelecidos. A verdade é que os franceses foram recebidos como importunos tanto por portugueses quanto por brasileiros. A rainha D. Maria I faleceu em 1816, e o projeto de modernização da capital avançava lentamente.\n[…]\nA descrição tradicional da origem da Missão Francesa, perpetuada até meados do século XX, dizia que a ideia de convidar artistas franceses para fundar uma escola de artes e ofícios no Rio de Janeiro partira do governo. Com o estabelecimento de acordos comerciais com a França em 1815, teriam iniciado as negociações para a organização do grupo.\n[…]\nEm 1957 Escragnolle Taunay publicou a obra A missão artística de 1816, uma revisão de seus estudos anteriores, onde trabalhou sobre novos documentos e reconheceu Lebreton como autor da ideia, mas reafirmou o papel primordial da corte portuguesa na vinda dos franceses.\n[…]\nFicava claro que até então isso ainda não estava assegurado, e só o foi de fato em janeiro de 1816, quando Barca passou a preparar no Rio a chegada do grupo, já contando então com o aval de Dom João.\n[…]\n«Missão Artística Francesa». . Enciclopédia Itaú Cultural\n[…]\n«Revista eletrônica 19&20». - Grande banco de artigos sobre a Missão Francesa e a arte brasileira do século XIX"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Les Demoiselles d'Avignon",
      "descricao": "Quadro de Pablo Picasso com cinco mulheres nuas de formas angulosas, considerado precursor do cubismo; está no MoMA, em Nova York."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Em que ano Picasso pintou As Senhoritas de Avignon, quadro considerado o ponto de partida do cubismo?",
    "resposta": "1907",
    "fonte": [
      "https://en.wikipedia.org/wiki/Les_Demoiselles_d%27Avignon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Les_Demoiselles_d%27Avignon",
        "situacao": "ok",
        "texto": "Les Demoiselles d'Avignon (pronounced [le demwazɛl d‿aviɲɔ̃]; The Young Ladies of Avignon, originally titled The Brothel of Avignon) is a large oil painting created in 1907 by the Spanish artist Pablo Picasso. Part of the permanent collection of the Museum of Modern Art in New York, it portrays five nude female prostitutes in a brothel on Carrer d'Avinyó, a street in Barcelona, Spain.\n[…]\nPaul Gauguin (1848–1903) and Paul Cézanne (1839–1906) were accorded major posthumous retrospective exhibitions at the Salon d'Automne in Paris between 1903 and 1907, and both were important influences on Picasso and instrumental to his creation of Les Demoiselles.\n[…]\nAccording to the English art historian, collector and author of The Cubist Epoch, Douglas Cooper, both of those artists were particularly influential to the formation of Cubism and especially important to the paintings of Picasso during 1906 and 1907. Cooper goes on to say however Les Demoiselles is often erroneously referred to as the first Cubist painting. He explains,\n[…]\nThe example of Picasso virtually launching cubism with his 1907 Demoiselles d'Avignon, in response to the sorts of African masks and other colonial booty he was encountering in Paris's Musee de l'Homme, is obvious.\n[…]\nSince none of the African masks once thought to have influenced Picasso in this painting were available in Paris at the time work was painted, he is thought now to have studied African mask forms in an illustrated volume by anthropologist Leo Frobenius. Primitivism continues in his work during, before and after the painting of Les Demoiselles d'Avignon, from spring 1906 through the spring of 1907. Influences from ancient Iberian sculpture are also important.\n[…]\nPablo Picasso, 1907, Five Nudes (Study for \"Les Demoiselles d'Avignon\"), watercolor on wove paper, 17.5 x 22.5 cm, Philadelphia Museum of Art"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Les_demoiselles_d%27Avignon",
        "situacao": "ok",
        "texto": "Les Demoiselles d'Avignon é um quadro do pintor espanhol Pablo Picasso feito em 1907. Levou nove meses para ser feito, vindo a se tornar uma das obras responsáveis por revolucionar a história da arte, formando a base para o cubismo e a pintura abstrata. Ela é o marco, portanto, do início dos experimentos com a linguagem cubista.\n[…]\nEstão presentes cinco personagens na composição, todas nuas, com seus corpos cinzelados rudimentarmente e com seus rostos esquemáticos. A cena tem como inspiração o interior de um bordel da rua Avignon, na cidade de Barcelona, local bem conhecido do pintor e de seus amigos. Os corpos apresentam linhas irregulares e quebradas. São figuras dessemelhantes, só tendo em comum a nudez. Suas formas são definidas por contornos.\n[…]\nO uso de máscaras na composição demonstra uma clara influência da arte africana sobre o pintor. As mulheres e o fundo da composição são feitos de planos angulosos e geométricos. Para fortalecer a composição geométrica, Picasso fez uso da cor azul em algumas partes da pintura.\n[…]\nLes Demoiselles d'Avignon é uma das composições mais famosas de Picasso, principalmente por mostrar uma maneira diferente de retratar a realidade. É também uma das mais conhecidas obras do século XX. Ela incomodou os colegas de Picasso e os críticos, porque o artista fez desmoronar toda a tradição pictórica ocidental, reinventando a maneira de pintar. Abriu mão da luz e da atmosfera em troca da clareza da forma, assim como baniu tudo que era irreal, indefinido ou vago.\n[…]\nObservação: Picasso, a princípio, pensou em incluir na composição duas figuras masculinas: um estudante e um marinheiro, que comiam na companhia das mulheres.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Caverna de Lascaux",
      "descricao": "Caverna no sudoeste da França com pinturas rupestres de animais feitas há cerca de dezessete mil anos."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1940, na França, quem descobriu as pinturas pré-históricas da caverna de Lascaux?",
    "resposta": "Quatro adolescentes da região",
    "fonte": [
      "https://en.wikipedia.org/wiki/Lascaux"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lascaux",
        "situacao": "ok",
        "texto": "Lascaux (English:  la-SKOH, US also  lah-SKOH; French: Grotte de Lascaux French pronunciation: [ɡʁɔt də lasko], \"Lascaux Cave\") is a network of caves near the village of Montignac, in the department of Dordogne in southwestern France. Over 600 parietal wall paintings cover the interior walls and ceilings of the cave. The paintings represent primarily large animals, typical local contemporary fauna\n[…]\nOn 12 September 1940, the entrance to the Lascaux Cave was discovered on the La Rochefoucauld-Montbel lands by 18-year-old Marcel Ravidat when his dog investigated a hole left by an uprooted tree (Ravidat would embellish the story in later retellings, saying the dog had fallen into the cave). Ravidat returned to the scene with three friends, Jacques Marsal, Georges Agnel, and Simon Coencas.\n[…]\nB.et G. Delluc (dir.), Le Livre du Jubilé de Lascaux 1940–1990, Société historique et archéologique du Périgord, supplément au tome CXVII, 1990, 155 p., ill.\n[…]\nB. et G. Delluc, 2008: Dictionnaire de Lascaux, Sud Ouest, Bordeaux. Plus de 600 entrées et illustrations. Bibliographie (450 références). ISBN 978-2-87901-877-5.\n[…]\nB. et G. Delluc, 2010: Lascaux et la guerre. Une galerie de portraits, Bull. de la Soc. historique et arch. du Périgord, CXXXVI, 2e livraison, 40 p., ill., bibliographie.\n[…]\nA. Glory, 2008: Les recherches à Lascaux (1952–1963). Documents recueillis et présentés par B. et G. Delluc, XXXIXe suppl. à Gallia-Préhistoire, CNRS, Paris.\n[…]\nRigaud, Jean-Philippe (October 1988). \"Art Treasures from the Ice Age: Lascaux Cave\". National Geographic. Vol. 174, no. 4. pp. 482–499. ISSN 0027-9358. OCLC 643483454.\n[…]\nThe microbiology of Lascaux Cave\n[…]\nLascaux Cave Art Symposium The Bradshaw Foundation\n[…]\nHuman Timeline (Interactive) – Smithsonian, National Museum of Natural History (August 2016).\n[…]\nLascaux Symphony by Alan Bush, performed by the Royal Scottish National Orchestra"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lascaux",
        "situacao": "ok",
        "texto": "Lascaux (Inglês [læˈskoʊ] la-SKOH, [USalsolɑːˈskoʊ] lah-SKOH; em francês: Grotte de Lascaux fr, \"Cavernas Lascaux\") é um complexo de cavernas perto da comuna de Montignac, no departamento de Dordonha, no sudoeste da França, famosas por suas pinturas rupestres.\n[…]\nAs paredes da caverna estão pintadas com bovídeos, cavalos, cervos, cabras e felinos, entre outros animais, que correspondem ao registro fóssil do Paleolítico Superior da região.\n[…]\nAbre-se sobre a margem esquerda do rio Vézère, numa colina calcária do Cretáceo superior. Contrariamente a muitas outras cavernas da região, a de Lascaux, na França é relativamente «seca». Em efeito, uma camada de argila impermeável isola-a de qualquer infiltração de água, impedindo novas formações de concreções calcárias, etc.\n[…]\nFoi descoberta no dia 12 de Setembro de 1940 por quatro adolescentes: Marcel Ravidat, Jacques Marsal, Georges Agnel e Simon Coencas, que avisaram ao seu antigo professor, Léon Laval. O pré-historiador Henri Breuil, refugiado na zona durante a ocupação nazi, foi o primeiro especialista que visitou Lascaux, em 21 de Setembro de 1940, em companhia de Jean Bouyssonnie e André Cheynier. H. Breuil foi também o primeiro em autenticá-la, descrevê-la e estudá-la.\n[…]\nA caverna foi classificada entre os monumentos históricos da França desde o mesmo ano da sua descoberta, a 27 de Dezembro de 1940.\n[…]\nA entrada atual corresponde com a entrada pré-histórica.\n[…]\nA Nave contém quatro grupos de figuras: o painel da Pegada (l'Empreinte), o da Vaca negra, o dos Cervos nadando, bem como o dos Bisões cruzados. Estas obras estão acompanhadas por inumeráveis signos geométricos, misteriosos, nomeadamente de tabuleiros coloreados, que H. Breuil qualificou de «brasões».\n[…]\n«Sitio das Grutas de Lascaux» (em francês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "A Grande Onda de Kanagawa",
      "descricao": "Xilogravura de Katsushika Hokusai, de cerca de 1831."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "A Grande Onda de Kanagawa, de Hokusai, faz parte de uma série cujo título fala em quantas vistas do Monte Fuji?",
    "resposta": "Trinta e seis",
    "distratores": [
      "Doze",
      "Vinte e quatro",
      "Cinquenta e três"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Thirty-six_Views_of_Mount_Fuji",
      "https://en.wikipedia.org/wiki/The_Great_Wave_off_Kanagawa"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Thirty-six_Views_of_Mount_Fuji",
        "situacao": "ok",
        "texto": "Thirty-six Views of Mount Fuji (Japanese: 富嶽三十六景, Hepburn: Fugaku Sanjūrokkei) is a series of landscape prints by the Japanese ukiyo-e artist Hokusai (1760–1849). The series depicts Mount Fuji from different locations and in various seasons and weather conditions. The immediate success of the publication led to another ten prints being added to the series.\n[…]\nThe series was produced from c. 1830 to 1832, when Hokusai was in his seventies and at the height of his career, and published  by Nishimura Yohachi. Among the prints are three of Hokusai's most famous: The Great Wave off Kanagawa, Fine Wind, Clear Morning, and Thunderstorm Beneath the Summit. The lesser-known Kajikazawa in Kai Province is also considered one of the series' best works. The Thirty-six Views has been described as the artist's \"indisputable colour-print masterpiece\".\n[…]\nThe most famous single image from the series is widely known in English as The Great Wave off Kanagawa. It is Hokusai's most celebrated work and is often considered the most recognizable work of Japanese art in the world. Another iconic work from Thirty-six Views is Fine Wind, Clear Morning, also known as Red Fuji, which has been described as \"one of the simplest and at the same time one of the most outstanding of all Japanese prints\".\n[…]\nThe Thirty-six Views of Mount Fuji prints were displayed at the National Gallery of Victoria in Melbourne, Australia as part of a Hokusai exhibit from 21 July through 22 October 2017. The exhibit featured two copies of The Great Wave off Kanagawa, one from the NGV and one from Japan Ukiyo-e Museum.\n[…]\nCalza, Gian Carlo (2003). Hokusai. Phaidon. ISBN 0714844578.\n[…]\nHokusai's 36 Views of Mount Fuji\n[…]\nA short biography of Hokusai including a section on the 36 Views of Mt. Fuji series.\n[…]\nA brief description and woodblock reprint collection of Hokusai's 36 Views of Mt. Fuji series."
      },
      {
        "url": "https://en.wikipedia.org/wiki/The_Great_Wave_off_Kanagawa",
        "situacao": "ok",
        "texto": "The Great Wave off Kanagawa (Japanese: 神奈川沖浪裏, Hepburn: Kanagawa-oki Nami Ura; lit. 'Under the Wave off Kanagawa') is a woodblock print by the Japanese ukiyo-e artist Hokusai (1760–1849), created in late 1831 during the Edo period of Japanese history. The print depicts three boats moving through a storm-tossed sea, with a large, cresting wave forming a spiral in the centre over the boats and Mount\n[…]\nThe Great Wave off Kanagawa has two inscriptions. The title of the series is written in the upper-left corner within a rectangular frame, which reads: \"冨嶽三十六景/神奈川沖/浪裏\" Fugaku Sanjūrokkei / Kanagawa oki / nami ura, meaning \"Thirty-six views of Mount Fuji / On the high seas in Kanagawa / Under the wave\". The inscription to the left of the box bears the artist's signature: 北斎改爲一筆 Hokusai aratame Iitsu hitsu which reads as \"(painting) from the brush of Hokusai, who changed his name to Iitsu\".\n[…]\nWayne Crothers, the curator of a 2017 Hokusai exhibition at the National Gallery of Victoria, described The Great Wave off Kanagawa as \"possibly the most reproduced image in the history of all art\" while the Wall Street Journal's Ellen Gamerman wrote it \"may be the most famous artwork in Japanese history\".\n[…]\nThe Great Wave off Kanagawa is also the subject of the 93rd episode of the BBC Radio series A History of the World in 100 Objects produced in collaboration with the British Museum, which was released on 4 September 2010. A replica of The Great Wave off Kanagawa was created for a documentary film about Hokusai released by the British Museum in 2017.\n[…]\nMedia related to The Great Wave off Kanagawa by Katsushika Hokusai at Wikimedia Commons\n[…]\nThe Metropolitan Museum of Art's (New York) entry on The Great Wave at Kanagawa\n[…]\n\"Hokusai's 'The Great Wave'\"—Episode from the BBC show A History of the World in 100 Objects\n[…]\nReplica of The Great Wave made by Suga Kayoko for a documentary film by the British Museum"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Trinta_e_seis_vistas_do_monte_Fuji",
        "situacao": "ok",
        "texto": "36 vistas do monte Fuji (em japonês 富嶽三十六景, Fugaku Sanjū-Rokkei) é, apesar do nome, uma série de 46 gravuras em madeira (dez das quais adicionadas após a publicação), datadas de 1832, criadas pelo artista japonês de ukiyo-e Katsushika Hokusai (1760–1849) retratando o monte Fuji em diferentes estações do ano, de diferentes locais, mais ou menos distantes, e com diferentes condições do tempo.\n[…]\nHokusai, Katsushika (2007). L' ippocampo, Jocelyn Bouquillard, ed. Hokusai: le trentasei vedute del monte Fuji. Milano: [s.n.] ISBN 9788895363936\n[…]\n«As 36 Vistas do monte Fuji» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Latas de Sopa Campbell",
      "descricao": "Obra de Andy Warhol, de 1962, formada por telas que reproduzem latas de sopa da marca Campbell; está no MoMA, em Nova York."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "A obra Latas de Sopa Campbell, de Andy Warhol, de 1962, reúne quantas telas, uma para cada sabor vendido pela marca?",
    "resposta": "Trinta e duas",
    "distratores": [
      "Dez",
      "Vinte",
      "Cinquenta"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Campbell%27s_Soup_Cans"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Campbell%27s_Soup_Cans",
        "situacao": "ok",
        "texto": "Campbell's Soup Cans is a series of 32 paintings produced by American artist Andy Warhol between 1961 and 1962. Each painting depicts a different variety of Campbell's soup cans in a uniform 20-by-16-inch format. First exhibited in July 1962 at the Ferus Gallery in Los Angeles, the pop art works challenged traditional distinctions between fine art and commercial imagery. Warhol's association with \n[…]\nBetween November 1961 and mid-1962, he painted roughly fifty soup-can canvases, including the definitive set of thirty-two completed by June 1962. According to the Andy Warhol Catalogue Raisonné, the project also included three large grid paintings (one depicting 200 cans and two depicting 100 cans) and numerous related still lifes. By March 1962, art critic David Bourdon had seen examples of Warhol's Campbell's Soup Cans when he visited his studio, as others soon did.\n[…]\nWarhol and his soup cans have also appeared frequently in pop culture. There are several references in the animated sitcom The Simpsons, including the 1991 episode \"Brush with Greatness,\" in which Warhol's Campbell's Soup Can is seen in an art gallery, and the 1999 episode \"Mom and Pop Art,\" which depicts Warhol tossing soup cans at Homer Simpson. An Andy Warhol character appears holding a can of Campbell's tomato soup in a dance club in the 1997 film Austin Powers: International Man of Mystery.\n[…]\nIn 2021, Campbell Company of Canada partnered with the Andy Warhol Foundation for the Visual Arts to mark the 60th anniversary of Warhol's Campbell's Soup Cans with four limited-edition Pop art–inspired soup labels released across Canada. The campaign invited Canadian artists and consumers to create and share their own Pop art works online, with a curated selection of submissions featured in a digital gallery hosted by Refinery29.\n[…]\n1962 in art\n[…]\nCampbell's Soup Cans, 1962 – The Museum of Modern Art, New York"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Latas_de_Sopa_Campbell",
        "situacao": "ok",
        "texto": "Latas de sopa Campbell (cujo título original em inglês é Campbell's Soup Cans), também conhecida como 32 latas de sopa Campbell, é um obra de arte produzida em 1962 pelo artista norte americano Andy Warhol. Consiste em 33 quadros, cada um com 50,8 cm de altura por 40,6 cm de largura, com a pintura de uma lata de sopa Campbell — cada uma das variedades de sopa enlatada que a companhia oferecia naqu\n[…]\nWarhol só começou a converter fotografias através da serigrafia depois do conjunto de trabalhos das latas de sopa Campbell.\n[…]\nNão só foi a primeira exposição individual de Warhol, como também foi considerada a estreia da pop art na Costa Oeste. A primeira individual de Andy Warhol, em Nova Iorque, teve lugar na Galeria Stable de Eleanor Ward, entre 6 e 24 de Novembro de 1962. A exposição incluía obras como Marilyn Diptych, Green Coca-Cola Bottles e as Latas de Sopa Campbell.\n[…]\nWarhol não escolheu as latas por ter algum contrato com a Campbell Soup Company. Embora, naquela altura, quatro das cinco latas de sopa vendidas no Estados Unidos fossem da Campbell, Warhol preferiu não ter o envolvimento da empresa \"porque o objectivo principal seria perdido se houvesse algum laço comercial.\" No entanto, por volta de 1965, a companhia sabia que ele utilizava os rótulos das latas como convites para as suas exibições. Chegaram, mesmo, a ser os patrocinadores de um dos quadros.\n[…]\n200 Campbell’s Soup Cans, 1962 (em acrílico), 1,82 m x 2,54 m), da colecção privada de John e Kimiko Powers, é o maior quadro do conjunto das Latas de Sopa Campbell. É composto por 10 linhas e 22 colunas de vários sabores de sopa. Os especialistas referem que este é um dos trabalhos mais importantes da pop art, tanto como representação pop, como em conjunto com os seus predecessores como Jasper Johns e com os movimentos seguintes de arte minimal e conceptual. .",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Os Embaixadores",
      "descricao": "Quadro de Hans Holbein, o Jovem, de 1533."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Que objeto, pintado de forma distorcida e só reconhecível quando visto de lado, aparece no chão do quadro Os Embaixadores, de Holbein?",
    "resposta": "Uma caveira",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Ambassadors_(Holbein)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Ambassadors_(Holbein)",
        "situacao": "ok",
        "texto": "The Ambassadors is a 1533 painting by Hans Holbein the Younger. Also known as Jean de Dinteville and Georges de Selve, after the two people it portrays, it was created in the Tudor period, in the same year Elizabeth I was born. Franny Moyle speculates that Elizabeth's mother, Anne Boleyn, then Queen of England, might have commissioned it as a gift for Jean de Dinteville, the French ambassador, por\n[…]\nThe most notable and famous of Holbein's symbols in the work is the distorted skull which is placed in the bottom centre of the composition. The skull, rendered in anamorphic perspective, another invention of the Early Renaissance, is meant to be a visual puzzle as the viewer must approach the painting from high on the right side, or low on the left side, to see the form as an accurate rendering of a human skull.\n[…]\nBefore the publication of Mary F. S. Hervey's Holbein's Ambassadors: The Picture and the Men in 1900, the identity of the two figures in the picture had long been a subject of intense debate. In 1890, Sidney Colvin was the first to propose the figure on the left as Jean de Dinteville, Seigneur of Polisy (1504–1555), French ambassador to the court of Henry VIII for most of 1533.\n[…]\nThe Universal equinoctial dial may have been designed by Kratzer, who was also painted by Holbein, and is associated with other instruments in the painting. The painting shows the plumb line on the left of the device, and two scales for adjusting the device for a particular latitude. However, the dial itself is lying in front, apparently pinned down. A similar arrangement of the same dismantled device can be seen in Holbein's Portrait of Nicolaus Kratzer.\n[…]\nList of paintings by Hans Holbein the Younger\n[…]\nMedia related to The Ambassadors (Holbein) at Wikimedia Commons\n[…]\nThe Ambassadors, Zoomable and Annotated, with many details"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Os_Embaixadores",
        "situacao": "ok",
        "texto": "Os Embaixadores (1533) é uma pintura a óleo sobre madeira de Hans Holbein, o Jovem.\n[…]\nO mais notável e famoso dos símbolos de Holbein na obra, no entanto, é o  crânio distorcido que está colocado no centro da composição. O crânio, reproduzido em perspectiva anamórfica, outra invenção do início da Renascença, pretende ser um quebra-cabeça visual, pois o espectador deve aproximar-se da pintura do lado direito, ou do lado esquerdo, para ver a forma de uma representação precisa de um crânio humano.\n[…]\nAntes da publicação do livro Holbein's Ambassadors: The Picture and the Men (\"Os Embaixadores de Holbein: O Quadro e os Homens\") de Mary F. S. Hervey, em 1900, a identidade das duas figuras foi objeto de intenso debate. Hervey identificou o homem à direita como sendo Georges de Selve (1508-1541), Bispo de Lavaur (antiga diocese em Tarn), seguindo a história da pintura até um manuscrito do século XVII.\n[…]\nDekker, Elly; Lippincott, Kristen (1999). The Warburg Institute, ed. «The Scientific Instruments in Holbein's Ambassadors: A Re-Examination». periódico of the Warburg and Courtauld Institutes. 62: 93–125. ISSN 0075-4390. JSTOR 751384. doi:10.2307/751384\n[…]\nFoister, Susan; Roy, Ashok; Wyld, Martin (1997). National Gallery Publications, ed. Making and Meaning: Holbein's Ambassadors. London: [s.n.] ISBN 1-85709-173-6\n[…]\nHervey, Mary (1900). George Bell and Sons, ed. Holbein's Ambassadors: The Picture and the Men. London: [s.n.]\n[…]\nNorth, John (2004). Phoenix, ed. The Ambassadors' Secret: Holbein and the World of the Renaissance. London: [s.n.] ISBN 1-84212-661-X",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "As Meninas",
      "descricao": "Quadro de Diego Velázquez no Museu do Prado."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No quadro As Meninas, de Velázquez, quem aparece refletido no pequeno espelho ao fundo da sala?",
    "resposta": "O rei e a rainha da Espanha",
    "fonte": [
      "https://en.wikipedia.org/wiki/Las_Meninas"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Las_Meninas",
        "situacao": "ok",
        "texto": "Las Meninas (Spanish: [las meˈninas]; Spanish for 'The Ladies-in-waiting') is a 1656 oil painting in the Museo del Prado in Madrid, by Diego Velázquez, the leading artist in the court of King Philip IV of Spain and Portugal, and of the Spanish Golden Age.\n[…]\nIn 1692, Luca Giordano became one of the few allowed to view paintings in Philip IV's private apartments, and was greatly impressed by Las Meninas. Giordano described the work as the \"theology of painting\", and was inspired to paint A Homage to Velázquez, which is now in the National Gallery, London. Francisco Goya etched a print of Las Meninas in 1778, and used Velázquez's painting as the model for his Charles IV of Spain and His Family.\n[…]\nThe 19th-century British art collector William John Bankes travelled to Spain during the Peninsular War (1808–1814) and acquired a copy of Las Meninas painted by Mazo, which he believed to be an original preparatory oil sketch by Velázquez—although Velázquez did not usually paint studies. Bankes described his purchase as \"the glory of my collection\", noting that he had been \"a long while in treaty for it and was obliged to pay a high price\".\n[…]\nAn appreciation for Velázquez's less Italianate paintings developed after 1819, when Ferdinand VII opened the royal collection to the public. In 1879 John Singer Sargent painted a small-scale copy of Las Meninas, while his 1882 painting The Daughters of Edward Darley Boit is a homage to Velázquez's canvas. The Irish artist Sir John Lavery chose Velázquez's masterpiece as the basis for his 1913 portrait The Royal Family at Buckingham Palace.\n[…]\nList of works by Diego Velázquez\n[…]\nVelázquez, exhibition catalog from The Metropolitan Museum of Art, which contains material on Las Meninas (see index)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/As_Meninas_%28Vel%C3%A1zquez%29",
        "situacao": "ok",
        "texto": "As Meninas é uma pintura de 1656 por Diego Velázquez, o principal artista do Século de Ouro Espanhol. Ela está hoje em dia no Museu do Prado em Madrid. A composição enigmática e complexa da obra levanta questões sobre realidade e ilusão, criando uma relação incerta entre o observador e as figuras representadas. Por essas complexidades, As Meninas é uma das obras mais analisadas da pintura ocidenta\n[…]\n8- Dom José Nieto Velázquez (talvez parente do pintor) é a personagem que se vê ao fundo do quadro, na parte luminosa, atravessando o corredor por um vão cuja porta aberta nos amostra os típicos quarterões tão de moda naqueles tempos. Este senhor foi chefe da Tapiçaria e Aposentador da rainha. Como diz o crítico de arte Harriet Stone não se pode estar seguro se a sua intenção é sair ou entrar da sala.\n[…]\nNo momento em que esta acerca à princesa uma pequena jarra, o rei e a rainha entram no cômodo refletindo-se no espelho da parede do fundo. Uma a uma, embora não simultaneamente, as pessoas congregadas começam a reagir frente da presença real. A dama de honra da direita que foi a primeira em vê-los, começa a fazer a reverência. Velázquez notou também a sua aparição e detém-se no meio do trabalho. Mari Bárbola não teve tempo ainda de reagir.\n[…]\nN´As Meninas supõe-se que a rainha e o rei estão fora da pintura, e o seu reflexo no espelho situa-os no interior do espaço pictórico. O espelho, situado sobre o triste muro do fundo, amostra o que há: a rainha, o rei e, segundo as palavras de Harriet Stone, as gerações de espectadores que vieram tomar o sítio que o casal tem no quadro.\n[…]\nFrancisco de Goya y Lucientes, foi um pintor fortemente influenciado pela pintura de Velázquez. Quando entrou a trabalhar na corte espanhola, teve acesso às coleções de pintura da corte, e em 1778 publica uma série de água-fortes na que reproduz quadros de Velázquez.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Marrom múmia",
      "descricao": "Pigmento castanho usado na pintura europeia entre os séculos dezesseis e vinte, fabricado a partir de restos de múmias egípcias."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Um pigmento castanho usado por pintores europeus até o século vinte era fabricado com um ingrediente macabro trazido do Egito. Qual?",
    "resposta": "Múmias moídas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mummy_brown"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mummy_brown",
        "situacao": "ok",
        "texto": "Mummy brown, also known as Egyptian brown or Caput Mortuum, is a shade of brown   with good transparency, sitting between burnt umber and raw umber in tint. Its bituminous pigment was made from the flesh of mummies mixed with white pitch and myrrh. Mummy brown was extremely popular from the mid-eighteenth to the nineteenth centuries, predominantly with Western European artists. However, fresh supp\n[…]\nTowards the end of the nineteenth century, mummy brown began to fall out of popularity. Fresh supplies of mummies diminished, and artists were less satisfied with the pigment's permanence and finish. By 1915, demand for mummy brown had slowed so much that one London colourman claimed he could satisfy his customers' requests for twenty years from a single Egyptian mummy.\n[…]\nIn 1964, Time magazine reported that the sole distributor of the pigment, London colourmaker C. Roberson, had run out of mummies a few years prior. A tube of mummy brown pigment purchased from Roberson in early 1900s is on display at the Forbes Pigment Collection of the Harvard Art Museum.\n[…]\nAncient mummy brown is a rich brown pigment with a warm vibrancy. The colour is intermediate in tint between burnt umber and raw umber. It has good transparency. It could be used in oil paint and watercolour for glazing, shadows, flesh tones, and shading.\n[…]\nThe modern equivalent sold as \"mummy brown\" is composed of a mixture of kaolin, quartz, goethite, and haematite; with the haematite and goethite (generally 60% of the content) determining the colour. The more  haematite, the redder the pigment, while the others are inert substances that can vary the opacity or tinting strength. The colour of mummy brown can vary from yellow to red to dark violet, the latter usually called \"mummy violet\".\n[…]\nCaput mortuum (pigment), a pigment also known as 'cardinal purple'"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mummy_Brown",
        "situacao": "ok",
        "texto": "Mummy Brown, caput mortuum ou Egypitian brown (em português: marrom-múmia ou castanho múmia) foi um pigmento da cor marrom amplamente produzido e reconhecido entre o século XVI e XVII, produzido a partir da moagem de múmias egípcias ou gatos mumificados.\n[…]\nA técnica para criação do pigmento remonta à Europa renascentista, época em que múmias eram trazidas do Egito para comercialização indiscriminada, sobretudo devido a suas supostas propriedades medicinais.\n[…]\nRelatos da época dão conta de que uma única múmia bastava para fornecer material suficiente para satisfazer as necessidades dos clientes durante vinte anos. Com o aumento da demanda e a escassez de múmias, versões clandestinas começaram a surgir, usando como nova fonte para a matéria-prima corpos de criminosos e escravos recém falecidos, tornando a história do pigmento ainda mais sombria.\n[…]\nEm 1809, o químico e fabricante de cores George Field confirmou o recebimento de um corpo embalsamado em seu laboratório. Esta múmia lhe havia sido enviada pelo pintor inglês William Beechey, com o propósito de produzir pigmento marrom a partir dela.\n[…]\nNa revista Time de 2 de outubro de 1964, Geoffrey Roberson-Park, então ocupando o cargo de diretor da tradicional fabricante londrina de tintas C. Roberson, admitiu com pesar que a empresa simplesmente ficou sem múmias para produzir a tinta, comentando que \"talvez ainda houvesse alguns membros soltos esquecidos em algum lugar, mas certamente não o suficiente para fabricar novos lotes\".\n[…]\nTambém no início do século XX ocorreu a desvantagem étnica e técnica da pilhagem sem precedentes de múmias na Europa Ocidental, tornando inadequado utilizar-se desse patrimônio histórico.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Napoleão Cruzando os Alpes",
      "descricao": "Retrato equestre pintado por Jacques-Louis David a partir de 1801."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "No quadro de David, Napoleão cruza os Alpes num cavalo empinado. Na vida real, em que animal ele fez a travessia?",
    "resposta": "Uma mula",
    "fonte": [
      "https://en.wikipedia.org/wiki/Napoleon_Crossing_the_Alps"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Napoleon_Crossing_the_Alps",
        "situacao": "ok",
        "texto": "Napoleon Crossing the Alps (also known as Napoleon at the Saint-Bernard Pass or Bonaparte Crossing the Alps; listed as Le Premier Consul franchissant les Alpes au col du Grand Saint-Bernard) is a series of five oil on canvas equestrian portraits of Napoleon Bonaparte painted by the French artist Jacques-Louis David between 1801 and 1805.\n[…]\nInitially commissioned by the King of Spain, the composition shows a strongly idealized view of the real crossing that Napoleon and his army made along the Alps through the Great St Bernard Pass in May 1800.\n[…]\nNapoleon initially requested to be shown reviewing the troops but eventually decided on a scene showing him crossing the Alps.\n[…]\nDavid worked using two or three layers. After having captured the basic outline with an ochre drawing, he would flesh out the painting with light touches, using a brush with little paint, and concentrating on the blocks of light and shade rather than the details. The results of this technique are particularly noticeable in the original version of Napoleon Crossing the Alps from Malmaison, especially in the treatment of the rump of the horse.\n[…]\nWith this work David took the genre of equestrian portraiture to its zenith. No other equestrian portrait made under Napoleon gained such celebrity, with perhaps the exception of Théodore Géricault's The Charging Chasseur of 1812.\n[…]\nArthur George, 3rd Earl of Onslow, who had a large Napoleonic collection, was visiting the Louvre with Paul Delaroche in 1848 and commented on the implausibility and theatricality of David's painting. He commissioned Delaroche to produce a more accurate version which featured Napoleon on a mule; the final painting, Napoleon Crossing the Alps, was completed in 1850.\n[…]\nList of paintings by Jacques-Louis David\n[…]\nDavid, Napoleon Crossing the Alps at khanacademy.org"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Napole%C3%A3o_cruzando_os_Alpes",
        "situacao": "ok",
        "texto": "Napoleão cruzando os Alpes (também conhecido como Napoleão no passo de São Bernardo, Bonaparte cruzando os Alpes, Retrato equestre de Bonaparte no monte São Bernardo, em francês: Le Premier Consul franchissant les Alpes au col du Grand-Saint-Bernard) é o título de cinco versões de um retrato pintado a óleo de Napoleão Bonaparte pelo artista francês Jacques-Louis David entre 1801 e 1805.\n[…]\nApós tomar o poder da França durante do golpe de Estado 18 do Brumário, em 9 de novembro de 1799, Napoleão estava determinado a retornar à Itália para reintegrar as tropas francesas e retomar o território ocupado pelos austríacos no ano anterior. Na primavera de 1800 ele conduziu o Exército de Reserva para a travessia dos Alpes através do Grande São Bernardo, fronteira entre a Suíça e a Itália.\n[…]\nCom a Revolução Francesa, a Primeira e Segunda Coligação e o 18 do Brumário como grandes eventos históricos, a imagem foi um importante mecanismo para retratar ideias e a arte configura-se, assim, como uma expressão de poder. Jacques-Louis David, na posição de retratista de Napoleão, exalta o seu poder: \"Esta é uma evidente peça de propaganda. Napoleão queria parecer “calmo sobre um cavalo feroz”, e David criou esta imagem de autoridade rampante.\n[…]\nNa verdade, Napoleão fez a viagem montado numa mula\n[…]\nReencenando a Travessia dos Alpes por Aníbal durante a Segunda Guerra Púnica, David retrata Bonaparte em um cenário hostil, à beira de um abismo e entre as montanhas de neve eterna. Além disso, o primeiro cônsul encontra-se em posição de estátua equestre, símbolo estético característico do Antigo Regime.\n[…]\nA obra de Jacques-Louis David aproxima-se da estética romântica pela presença de linhas curvas nos personagens em destaque. A forte imagem de um cavaleiro ao lado de uma imponente figura equestre fazem do quadro a marca da fase pós-brumariana de Napoleão.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Yves Klein",
      "descricao": "Artista francês, que viveu de 1928 a 1962, conhecido por suas pinturas monocromáticas."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "O artista francês Yves Klein registrou um tom de cor com o próprio nome e o usou em suas pinturas monocromáticas. Que cor é essa?",
    "resposta": "Azul",
    "fonte": [
      "https://en.wikipedia.org/wiki/International_Klein_Blue",
      "https://en.wikipedia.org/wiki/Yves_Klein"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/International_Klein_Blue",
        "situacao": "ok",
        "texto": "International Klein Blue (IKB) is a deep blue hue first mixed by the French artist Yves Klein. IKB's visual impact comes from its heavy reliance on ultramarine, as well as Klein's often thick and textured application of paint to canvas.\n[…]\nIn May 1960, Klein deposited a Soleau envelope, registering the paint formula under the name International Klein Blue (IKB) at the Institut national de la propriété industrielle (INPI), but he never patented IKB. Only valid under French law, a Soleau envelope registers the date of invention, according to the depositor, prior to any legal patent application. The copy held by the INPI was destroyed in 1965. Klein's own copy, which the INPI returned to him duly stamped, still exists.\n[…]\nIn 1962, the documentary Mondo Cane featured Yves Klein painting with his models and using the eponymous color.\n[…]\nYves Klein Blue, an Australian rock band, take their name from the color and the artist who created it.\n[…]\nWelsh rock band Manic Street Preachers released a single on 8 December 2017 called \"International Blue\", which is written about Yves Klein and IKB.\n[…]\nDutch artist Joost Klein designed a suit in International Klein Blue to wear in the music video and performance for \"Europapa\", the song with which he represented the Netherlands in the Eurovision Song Contest 2024.\n[…]\nEpisode 14 of season 2 (8 May 2016) of Mike Tyson Mysteries is titled \"Yves Klein Blues\". The episode sees the former boxing champion seeking to use the color in his summer tracksuit.\n[…]\nIKB 79 (1959), Yves Klein, Tate\n[…]\nSFMOMA | Collections Access Online | Yves Klein | IKB74\n[…]\nBlue Monochrome (1961), Yves Klein, Museum of Modern Art, New York\n[…]\nrgb.to: Color conversion for International Klein Blue"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Yves_Klein",
        "situacao": "ok",
        "texto": "Yves Klein (French: [iv klɛ̃]; 28 April 1928 – 6 June 1962) was a French artist and an important figure in postwar European art. He was a leading member of the French artistic movement of Nouveau réalisme, founded in 1960 by art critic Pierre Restany. Klein was a pioneer in the development of performance art, and is seen as an inspiration to and as a forerunner of minimal art, as well as pop art. \n[…]\nAlthough Klein had painted monochromes as early as 1949, and held the first private exhibition of this work in 1950, his first public showing was the publication of the artist's book Yves Peintures in November 1954. Parodying a traditional catalogue raisonné, the book featured a series of intense monochromes linked to various cities he had lived in during the previous years.\n[…]\nThe Yves Klein archive is housed in Phoenix, Arizona, where his widow Rotraut Klein-Moquay has a home.\n[…]\nA 2021 short novel, Blue Postcards by Douglas Bruton, is built around the life and art of Yves Klein.\n[…]\nIn May 2013, Klein's Sculpture Éponge Bleue Sans Titre, SE 168, a 1959 sculpture made with natural sea sponges drenched in blue pigment, fetched $22 million, the highest price paid for a sculpture by the artist, at Sotheby's New York.\n[…]\nYves Klein Archives.org – official website\n[…]\nYves Klein: MoMA\n[…]\nReal Immaterial: Superstudio and Yves Klein Review of \"Yves Klein: Air Architecture\" in X-TRA Contemporary Art Quarterly\n[…]\nMarc de Verneuil and Mélanie Marbach, Zone de sensibilité picturale immatérielle (1962–2012), 26 January 2012, Paris (double hommage to Yves Klein and Dino Buzzatti on the occasion of the 40th anniversary of their collaborative work)\n[…]\nYves Klein in American public collections, on the French Sculpture Census website\n[…]\nThe Life and Work of Yves Klein Told by Rotraut. An interview with Rotraut Video by Louisiana Channel\n[…]\nYves Klein’s Monotone Silence Symphony in San Francisco, 2017"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/International_Klein_Blue",
        "situacao": "ok",
        "texto": "International Klein Blue (IKB) é um tom de azul profundo misturado pela primeira vez pelo artista francês Yves Klein. O impacto visual do IKB vem de sua forte dependência do ultramarino, bem como da aplicação muitas vezes espessa e texturizada de tinta na tela por Klein.\n[…]\nO International Klein Blue (IKB) foi desenvolvido por Yves Klein em colaboração com Edouard Adam, um fornecedor parisiense de tintas artísticas cuja loja ainda funciona no Boulevard Edgar-Quinet em Montparnasse. IKB usa um aglutinante de resina sintética fosca que suspende a cor e permite que o pigmento mantenha o máximo possível de suas qualidades originais e intensidade de cor.\n[…]\nEm maio de 1960, Klein depositou um envelope soleau, registrando a fórmula da tinta sob o nome International Klein Blue (IKB) no Institut national de la propriété industrielle (INPI), mas nunca patenteou o IKB. Válido apenas pela lei francesa, um envelope soleau registra a data da invenção, de acordo com o depositante, antes de qualquer pedido legal de patente. A cópia em poder do INPI foi destruída em 1965. A cópia do próprio Klein, que o INPI lhe devolveu devidamente carimbada, ainda existe.\n[…]\nEmbora Klein tenha trabalhado extensivamente com o azul no início de sua carreira, foi somente em 1958 que ele o usou como componente central de uma peça (a cor efetivamente se tornou a arte). Klein embarcou em uma série de trabalhos monocromáticos usando o IKB como tema central. Isso incluía arte performática em que Klein pintava corpos nus de modelos e os fazia andar, rolar e se espalhar sobre telas em branco, bem como telas monocromáticas mais convencionais.\n[…]\n«IKB 79 (1959)». , Yves Klein, Tate\n[…]\n[Collections Access Online «Yves Klein»]. IKB74\n[…]\n«Blue Monochrome (1961)». , Yves Klein, Museum of Modern Art, New York",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Camille Pissarro",
      "descricao": "Pintor impressionista nascido nas Antilhas dinamarquesas em 1830 e morto em 1903, figura central do grupo impressionista."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Destes impressionistas, qual era o mais velho, visto como uma espécie de pai do grupo?",
    "resposta": "Camille Pissarro",
    "distratores": [
      "Claude Monet",
      "Edgar Degas",
      "Pierre-Auguste Renoir"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Camille_Pissarro"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Camille_Pissarro",
        "situacao": "ok",
        "texto": "Jacob Abraham Camille Pissarro ( piss-AR-oh; French: [kamij pisaʁo]; 10 July 1830 – 13 November 1903) was a Danish-French Impressionist and Neo-Impressionist painter born on the island of Saint Thomas (now in the US Virgin Islands, but then in the Danish West Indies). His importance resides in his contributions to both Impressionism and Post-Impressionism. Pissarro studied from great forerunners, \n[…]\nJacob Abraham Camille Pissarro was born on 10 July 1830 at Charlotte Amalie on the island of Saint Thomas to Frederick Abraham Gabriel Pissarro and Rachel Manzano-Pomié. His father was of Portuguese Jewish descent and held French nationality. His mother was from a French-Jewish family from St. Thomas with Provençal Jewish roots. His father was a merchant who came to the island from France to deal with the hardware store of a deceased uncle, Isaac Petit, and married his widow.\n[…]\nClement, Russell T. and Houze, Annick, Neo-Impressionist Painters: A Sourcebook on Georges Seurat, Camille Pissarro, Paul Signac, Théo van Rysselberghe, Henri-Edmond Cross, Charles Angrand, Maximilien Luce, and Albert Dubois-Pillet (1999), Greenwood Press ISBN 0-313-30382-7\n[…]\nMuhlstein, Anka, Camille Pissarro: The Audacity of Impressionism (2023). New York: Other Press ISBN 978-1635421705 (Translation by Adriana Hunter of Camille Pissarro: Le Premier Impressionniste (2024). Paris: Plon ISBN 9782259319607)\n[…]\nCamille Pissarro Personal Manuscripts\n[…]\nCamille Pissarro at The Jewish Museum\n[…]\nAn artwork by Camille Pissarro at the Ben Uri site\n[…]\nCamille Pissarro: Works from the Gallery Collection exhibition at Stern Pissarro Gallery,  17 November 2021 -  04 December 2021\n[…]\nThe Honest Eye: Camille Pissarro’s Impressionism 2025 retrospective organized by the Denver Art Museum (26 October 2025 – 8 February 2026) and Museum Barberini, Potsdam (14 June – September 28, 2025), catalog ISBN 978-3-791-37789-6"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Camille_Pissarro",
        "situacao": "ok",
        "texto": "Jacob  Abraham Camille Pissarro (Charlotte Amalie, ilha de São Tomás nas Índias Ocidentais Dinamarquesas, hoje  Ilhas Virgens Americanas, 10 de julho de 1830 – Paris, 13 de novembro de 1903) foi um pintor francês, co-fundador do impressionismo, e o único que participou nas oito exposições do grupo (1874-1886).\n[…]\nCom 11 anos Camille Pissarro foi enviado a Paris para estudar num colégio interno. Voltou para a ilha São Tomás, a fim de tomar conta do negócio da família.\n[…]\nPissarro conquistou sua liberdade aos 23 anos. Em 1855, ele já estava em Paris com ajuda de Anton Melbye, tentando iniciar sua carreira. O jovem antilhano fascinou-se com as telas de Camille Corot e travou amizade com Paul Cézanne, Claude Monet, Charles-François Daubigny, entre outros pintores impressionistas. Com Monet passou a sair para pintar ao ar livre, em Pontoise e Louvenciennes. Em 1861 casou com Julie Vellay, com quem teve oito filhos.\n[…]\nDurante seus últimos anos, realizou várias viagens pela Europa, em busca de novos temas. Hoje é considerado um dos paisagistas mais importantes do século XIX. Os seus trabalhos mais conhecidos são \"Le Verger\", \"Les châtaigniers à Osny\" e \"Place du Théâtre Français\". Camille Pissarro morreu a 13 de novembro de 1903 em Paris.\n[…]\nBailly-Herzberg, Janine, ed.: Correspondance de Camille Pissarro, 5 volumes, Presses Universitaires de France, Paris, 1980 & Editions du Valhermeil, Paris, 1986–1991  ISBN 2-13-036694-5 - ISBN 2-905684-05-4 - ISBN 2-905684-09-7 - ISBN 2-905684-17-8 - ISBN 2-905684-35-6\n[…]\nThorold, Anne, ed.: The letters of Lucien to Camille Pissarro 1883–1903, Cambridge University Press, Cambridge, New York & Oakleigh, 1993   ISBN 0-521-39034-6\n[…]\nCamille Pissarro - Doyen des impressionnistes, l'humble et généreux, forma Guillaumin, Cézanne et Gauguin\n[…]\nWikiArt.org: Camille Pissarro",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  }
]

---

# MANIFESTO

# Manifesto de Perguntas — Mestre2

> **Versão preliminar 0.44 — 2026-10-02**
>
> Este documento define **o que é uma boa pergunta** no Mestre2 e **como o banco de perguntas é organizado e produzido**. Vale para qualquer pessoa ou modelo que crie, revise ou processe perguntas.
>
> Ele tem duas partes:
> - **Parte I — Regras de conteúdo (§1 a §9):** o que uma pergunta deve ser. É a parte que o gerador e o crítico automáticos recebem.
> - **Parte II — Organização e processo (§10 a §18):** esquemas, fluxo de produção, decisões, pendências, o jogo, o app e a programação até 10 000 perguntas. É a referência de quem mantém o projeto.
>
> Arquivos relacionados:
> - [`pergunta.schema.json`](pergunta.schema.json) e [`ancora.schema.json`](ancora.schema.json): esquemas
> - [`temas_subtemas.json`](temas_subtemas.json): lista canônica de temas e subtemas
> - [`exemplos_perguntas.json`](exemplos_perguntas.json) · [`exemplos_ancoras.json`](exemplos_ancoras.json)
> - [`proposta_temas_subtemas.md`](proposta_temas_subtemas.md): histórico da revisão da lista canônica
> - [`../pipeline/README.md`](../pipeline/README.md): o pipeline que produz as perguntas
> - [`../app/`](../app/): o app que usa as perguntas numa partida (§16)
> - [`modo_trilha_da_vida.md`](modo_trilha_da_vida.md): rascunho do segundo modo de jogo, em concepção (§15)

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
- **Uso apenas ilustrativo:** a dificuldade só é **exibida**, na ficha da pergunta no app. Ela **não é usada** para nenhuma decisão do projeto: nem no sorteio, nem em proporções do banco, encomendas, regras de variedade, crítica, pontuação ou tabuleiro. Também não é enviada ao gerador nem ao crítico.
- **Limites:** é uma estimativa da **fama da âncora**, e não da pergunta. Não enxerga o ângulo, então um fato obscuro sobre algo famoso continua difícil. Também confunde interesse com conhecimento: um conceito conhecido de todos, mas pouco pesquisado, como os cartões amarelo e vermelho, sai difícil.

**Limites por âncora** (o pipeline descarta o que passar deles):
- no máximo **2 perguntas por âncora** em cada lote, nunca com o mesmo ângulo;
- no máximo **2 perguntas com o mesmo ângulo** para uma mesma âncora, no banco inteiro;
- no máximo **3 perguntas por âncora** no banco inteiro, somando texto e figura, e no máximo **2 com figura**;
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
- no máximo **duas perguntas com figura por âncora**, de famílias diferentes e com imagens diferentes (a obra inteira e um detalhe, a fachada e uma vista aérea).

**7. Imagens que pedem observação.** Além da imagem principal do Wikidata, valem um detalhe recortado de uma obra, um ângulo menos visto de um lugar ou uma foto histórica. O recorte é permitido (§6). A imagem nunca pode ser ambígua: se o detalhe também existe em outra obra, a pergunta está errada.

**8. Distratores de figura** (múltipla escolha): do mesmo catálogo e **visualmente parecidos** com a resposta (outro felino de manchas, outra catedral gótica, outro pintor impressionista), e nenhum deles pode também descrever a imagem.

**Critérios da figura**, além dos de §8:
- [ ] **Nada na imagem entrega a resposta:** placas, legendas, letreiros, marcas d'água, bandeiras.
- [ ] **Resposta única diante da imagem:** atenção a réplicas, paisagens parecidas e monumentos que ficam entre duas cidades. A Ponte Luís I liga o Porto a Vila Nova de Gaia, por isso a pergunta é pela cidade "do outro lado da ponte".
- [ ] **Legível num celular** a um braço de distância.
- [ ] **O enunciado é verdadeiro para esta foto específica**, e não só para o assunto: o ponto de vista, o lado e o que aparece nela.
- [ ] **Nem óbvia nem impossível:** a Torre Eiffel de frente é fácil demais; um bairro qualquer de uma cidade grande, difícil demais. A imagem precisa ter o que permite reconhecer o assunto (a silhueta, o monumento, a pelagem). Para assuntos menos conhecidos, use `multipla`.

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
- No máximo **2 perguntas por âncora**, nunca com o mesmo ângulo (§4).
- **Prefira âncoras novas.** O gerador recebe a lista das âncoras e perguntas já existentes no subtema, para não repetir.

**No banco, por subtema:**
- `conexao` + `nome` somam pelo menos **20%**.
- A distribuição por ângulo e por âncora é acompanhada pelo relatório do pipeline, e os lotes seguintes são **encomendados para preencher as lacunas**.
