Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Idade Média** (tema **História**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Alhambra",
      "descricao": "Palácio-fortaleza dos emires nacéridas, em Granada, na Espanha."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "No Pátio dos Leões da Alhambra, em Granada, a famosa fonte central é sustentada por quantos leões de pedra?",
    "resposta": "Doze",
    "distratores": [
      "Quatro",
      "Oito",
      "Dezesseis"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Court_of_the_Lions"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Court_of_the_Lions",
        "situacao": "ok",
        "texto": "The Court of the Lions (Spanish: Patio de los Leones) or Palace of the Lions (Spanish: Palacio de los Leones) is a palace in the heart of the Alhambra, a historic citadel formed by a complex of palaces, gardens and forts in Granada, Spain. It was commissioned by the Nasrid sultan Muhammad V of the Emirate of Granada in Al-Andalus. Its construction started in the second period of his reign, between\n[…]\nGranada was conquered by the Catholic Monarchs of Spain in 1492 and the Alhambra became a palace owned by the Spanish monarchy. Like much of the Alhambra, the Palace of the Lions suffered damages and underwent various repairs, restorations, and modifications over time. Under the Catholic Monarchs, it was connected to the Comares Palace by a direct passage for the first time, as it remains today.\n[…]\nThe hall consists of a central square space, acting almost like another courtyard, which is flanked by two niche-like side chambers. This kind of layout found in many other palace halls across the Alhambra. The side chambers are separate from the central space by double arches. A short corridor, passing through multiple archways, separates the hall from the Court of the Lions.\n[…]\nIn the second half of the 16th century, after the Alhambra had become a Spanish palace, the fountain was significantly modified by the addition of smaller water basins above the central spout in order to create a multi-level fountain. In 1624 sculptor Alonso de Mena repaired the fountain and cleaned it. In the early 19th century a set of spouts was added to the fountain and in 1837 another spout was added at the top of the fountain to reflect the tastes of the time.\n[…]\nPuerta Vílchez, José Miguel (2015) [2010]. Reading the Alhambra: A Visual Guide to the Alhambra Through Its Inscriptions. Translated by Trout, Jon. Edilux. ISBN 978-84-95856-30-2."
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Magna Carta",
      "descricao": "Carta de direitos que os barões ingleses impuseram ao rei em 1215, limitando o poder da coroa."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "A Magna Carta foi selada em 1215 e copiada para ser enviada pelo reino. Quantas dessas cópias originais sobreviveram até hoje?",
    "resposta": "Quatro",
    "distratores": [
      "Uma",
      "Doze",
      "Quarenta"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Magna_Carta"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Magna_Carta",
        "situacao": "ok",
        "texto": "Magna Carta (Medieval Latin for \"Great Charter\"), sometimes spelled Magna Charta, is a royal charter of rights sealed by King John of England at Runnymede, near Windsor, on 15 June 1215.\n[…]\nThe first mechanically printed edition of Magna Carta was probably the Magna Carta cum aliis Antiquis Statutis of 1508 by Richard Pynson, although the early printed versions of the 16th century incorrectly attributed the origins of Magna Carta to Henry III and 1225, rather than to John and 1215, and accordingly worked from the later text. An abridged English-language edition was published by John Rastell in 1527.\n[…]\nThe document also continues to be honoured in the United States as an antecedent of the United States Constitution and Bill of Rights. In 1976, the UK lent one of four surviving originals of the 1215 Magna Carta to the United States for their bicentennial celebrations and also donated an ornate display case for it. The original was returned after one year, but a replica and the case are still on display in the United States Capitol Crypt in Washington, D.C.\n[…]\nThe 800th anniversary of the original charter occurred on 15 June 2015, and organisations and institutions planned celebratory events. The British Library brought together the four existing copies of the 1215 manuscript in February 2015 for a special exhibition. British artist Cornelia Parker was commissioned to create a new artwork, Magna Carta (An Embroidery), which was shown at the British Library between May and July 2015.\n[…]\nMagna Carta (An Embroidery), 2015 artwork\n[…]\nThe Magna Carta Project\n[…]\nMagna Carta Libertatum Latin and English text of the 1215 charter\n[…]\nMagna Carta public domain audiobook at LibriVox"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Magna_Carta",
        "situacao": "ok",
        "texto": "Magna Carta (em português \"Grande Carta\") é a forma abreviada do título em latim, Magna Carta Libertatum, seu Concordiam inter regem Johannen at barones pro concessione libertatum ecclesiae et regni angliae (Grande Carta das liberdades, ou Concordata entre o rei João e os barões para a outorga das liberdades da igreja e do reino da Inglaterra), um documento de 1215 que limitou o poder dos monarcas\n[…]\nCom o Rei enfraquecido pelas derrotas, houve uma grande pressão dos nobres, liderados por Robert Fitzwalter, que forçou o Rei João a assinar a Magna Carta, em 15 de junho de 1215, para evitar uma guerra civil.\n[…]\nEsse documento, ficou também conhecido como os \"Artigos dos Barões\", ao qual o grande selo real foi aposto em Runnymede, em 15 de junho do mesmo ano. Esse diploma formal, que registrou o acordo entre o rei João e os barões, ficou conhecido como Magna Carta. Cópias desta foram enviadas a funcionários tais como xerifes e bispos. Em troca, os barões renovaram os seus juramentos de fidelidade ao rei em 19 de junho.\n[…]\nPor outro lado, para evitar a aplicação da Carta, o Rei João recorreu ao Papa Inocêncio III, que, em 24 de agosto de 1215, expediu uma Carta que declarava a nulidade da Carta Magna.\n[…]\nPara que esse compromisso fosse respeitado, buscou-se dar-lhe publicidade, por meio de dispositivos que previam que cópias da carta fossem distribuídas em catedrais em todo Reino para que fossem lidas perante o povo duas vezes por ano.\n[…]\ndeveriam ser lidas quatro vezes por ano nas reuniões dos tribunais do condado;\n[…]\nA Magna Carta foi redigida em latim.\n[…]\nGrande parte da Magna Carta foi copiada da Carta de Liberdades de Henrique I, outorgada em 1100 e que submetia o rei a certas leis acerca do tratamento de oficiais da igreja e nobres – o que na prática concedia determinadas liberdades civis à igreja e à nobreza inglesa.\n[…]\nImagem do original da Magna Carta e versão em inglês, Biblioteca Britânica",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Joana d'Arc",
      "descricao": "Heroína e santa francesa que liderou tropas na Guerra dos Cem Anos e foi queimada em 1431."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Joana d'Arc comandou tropas francesas ainda muito jovem. Com que idade, aproximadamente, ela foi queimada na fogueira em 1431?",
    "resposta": "Dezenove anos",
    "distratores": [
      "Quinze anos",
      "Vinte e sete anos",
      "Trinta e cinco anos"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Joan_of_Arc"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Joan_of_Arc",
        "situacao": "ok",
        "texto": "Joan of Arc (French: Jeanne d'Arc [ʒan daʁk] ; Middle French: Jehanne Darc [ʒəˈãnə ˈdark]; c. 1412 – 30 May 1431) is a patron saint of France, honored as a defender of the French nation for her role in the siege of Orléans and securing the coronation of Charles VII of France during the Hundred Years' War. Claiming to be acting under divine guidance, she became a military leader who gained recognit\n[…]\nThe military situation was not changed by Joan's execution. Her triumphs had raised Armagnac morale, and the English were not able to regain momentum. Charles remained king of France, despite a rival coronation held for the ten-year-old Henry VI of England at Notre-Dame cathedral in Paris in 1431. In 1435, the Burgundians signed the Treaty of Arras, abandoning their alliance with England.\n[…]\nJoan's reputation as a military leader who helped drive the English from France began to form before her death. Just after Charles's coronation, Christine de Pizan wrote the poem Ditié de Jehanne D'Arc, celebrating Joan as a supporter of Charles sent by Divine Providence and reflecting French optimism after the triumph at Orléans. As early as 1429, Orléans began holding a celebration in honor of the raising of the siege on 8 May.\n[…]\nJoan's early legacy was closely associated with the divine right of the monarchy to rule France. During the French Revolution, her reputation came into question because of her association with the monarchy and religion, and the festival in her honor held at Orléans was suspended in 1793. In 1803, Napoleon Bonaparte authorized its renewal and the creation of a new statue of Joan at Orléans, stating, \"The illustrious Joan ...\n[…]\nJeanne Hachette\n[…]\n\"The Siege of Orleans\", BBC Radio 4 discussion with Anne Curry, Malcolm Vale & Matthew Bennett (In Our Time, 24 May 2007)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Joana_d%27Arc",
        "situacao": "ok",
        "texto": "Joana d’Arc (em francês:  Jeanne d’Arc, IPA: [ʒan daʁk]; em francês médio: Jehanne Darc, IPA: [ʒəˈãnə ˈdark]; Domrémy-la-Pucelle, ca. 1412 – Ruão, 30 de maio de 1431) foi uma camponesa e santa francesa canonizada pela Igreja Católica, considerada uma heroína da França pelos seus feitos durante a Guerra dos Cem Anos. Nasceu filha de Jacques d’Arc e Isabelle Romée, numa família camponesa, em Domrémy\n[…]\nJoana foi executada em 30 de maio de 1431, aos 19 anos de idade. Sua morte, contudo, a elevou aos status de mártir e fez aumentar o fervor patriótico francês contra os ingleses.\n[…]\nCom cerca de dezenove anos, Joana foi executada em 30 de maio de 1431. Pela manhã, ela foi autorizada a receber os sacramentos, apesar do processo judicial exigir que fossem negados aos hereges. Em seguida, foi levada ao Vieux-Marché (Mercado Velho) de Rouen, onde sua sentença de condenação foi lida publicamente.\n[…]\nA imagem de Joana foi usada por todo o espectro da política francesa e ela é uma referência importante no diálogo político sobre a identidade e unidade francesas.\n[…]\nA Igreja Santa Joana d’Arc (em francês, Église Sainte-Jeanne-d'Arc) está localizada na Place du Vieux-Marché, no centro da cidade de Ruão,, França, onde Joana d’Arc foi queimada na fogueira em 1431. é uma das mais emblemáticas construções dedicadas à santa. Localizada na Place du Vieux Marché, esta igreja moderna foi inaugurada em 1979 e projetada pelo arquiteto Louis Arretche.\n[…]\nO edifício possui um design arrojado que remete às chamas que consumiram Joana d’Arc e à forma de um barco invertido, símbolo cristão antigo. A igreja também incorpora vitrais históricos da antiga Igreja de Saint Vincent, destruída na Segunda Guerra Mundial. O local marca o exato ponto onde Joana foi queimada na fogueira em 1431, sendo um importante ponto de peregrinação e memória histórica\n[…]\nTranscrições do julgamento de Joana d'Arc e do julgamento de reabilitação",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Zheng He",
      "descricao": "Almirante chinês da dinastia Ming que comandou grandes expedições marítimas pelo oceano Índico entre 1405 e 1433."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Entre 1405 e 1433, o almirante chinês Zheng He liderou frotas gigantescas pelo oceano Índico. Quantas foram essas grandes expedições?",
    "resposta": "Sete",
    "distratores": [
      "Duas",
      "Doze",
      "Vinte"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Zheng_He",
      "https://en.wikipedia.org/wiki/Ming_treasure_voyages"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Zheng_He",
        "situacao": "ok",
        "texto": "Zheng He (Wade-Giles: Chêng Ho; 1371–1433/1435) was a Chinese admiral and diplomat from the early Ming dynasty. His extensive explorations along the Indian Ocean led to a major increase in China's political and commercial influence. He was born into a Muslim family as Ma He (马和) and later adopted the surname Zheng conferred onto him by the Yongle Emperor (r. 1402–1424).\n[…]\nThe Yuan dynasty and the expanding Sino-Arab trade during the 14th century had gradually expanded Chinese knowledge of the world since \"universal\" maps previously displaying only China and its surrounding seas began to expand farther and farther southwest, with much more accurate depictions of the extent of Arabia and Africa. Between 1405 and 1433, the Ming government sponsored seven naval expeditions.\n[…]\nZheng He was placed as the admiral in control of the huge fleet and armed forces that undertook the expeditions. Wang Jinghong was appointed as second in command. Preparations were thorough and wide-ranging, including the use of so many linguists that a foreign language institute was established at Nanjing. Zheng He's first voyage departed 11 July 1405, from Suzhou and consisted of a fleet of 317 ships holding almost 28,000 crewmen.\n[…]\nTraditional and popular accounts of Zheng He's voyages have described a great fleet of gigantic ships far larger than any other wooden ships in history. The most grandiose claims for Zheng He's 1405 fleet are entirely based on a calculation derived from an account that was written three centuries later and was accepted as fact by one modern writer; rejected by numerous naval experts. There are even some sources that claim some of the treasure ships might have been as long as 183 m (600 ft).\n[…]\nSu, Ming-Yang (2005). Seven epic voyages of Zheng He in Ming China, 1405–1433: facts, fiction and fabrication. Torrance, CA: self-published. OCLC 62515238."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Ming_treasure_voyages",
        "situacao": "ok",
        "texto": "Ming China's treasure fleet undertook maritime expeditions between 1405 and 1433. The Yongle Emperor ordered the construction of the fleet in 1403. The grand project resulted in seven far-reaching ocean voyages to the coastal territories and islands of the South China Sea and Indian Ocean. Admiral Zheng He was commissioned to command the fleet for the expeditions. Six of the voyages occurred durin\n[…]\nThis expedition led the Chinese treasure fleet into Muslim countries, so it must have been important for the Chinese to seek out reliable interpreters. The interpreter Ma Huan joined the voyages for the first time. A 1523 inscription at a mosque in Xi'an records that, on the 4th month of the 11th year, Zheng was there to seek reliable interpreters and found Hasan (哈三). Hasan was proficient in Arabic and went on this voyage.\n[…]\nIn Malacca, the Chinese actively sought to develop a commercial hub and a base of operation for the voyages into the Indian Ocean. Malacca had been a relatively insignificant region, not even qualifying as a polity prior to the voyages according to both Ma Huan and Fei Xin, and was a vassal region of Siam. In 1405, the Ming court dispatched Zheng with a stone tablet enfeoffing the Western Mountain of Malacca and an imperial order elevating the status of the port to a country.\n[…]\nAs shown by this inscription, the Chinese paid their respect to the three dominant religions in Ceylon.\n[…]\nMany present-day Chinese people perceive that these expeditions were conducted in accordance with Confucian ideals. During a Harvard University speech in November 1997, President Jiang Zemin praised Zheng for spreading Chinese culture abroad. Since 2005, in commemoration of the voyages, China annually celebrates its National Maritime Day on 11 July. That year also marked the 600th anniversary of Zheng's maiden voyage."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Zheng_He",
        "situacao": "ok",
        "texto": "Zheng He (chinês simplificado: 郑和; chinês tradicional: 鄭和; pinyin: Zhèng Hé; Wade–Giles: Chêng Ho; 1371 – c. 1433 ou c. 1435) foi um eunuco, almirante, diplomata e alto funcionário chinês da dinastia Ming. Entre 1405 e 1433, comandou sete grandes expedições que levaram frotas da China pelo Sudeste Asiático e através do oceano Índico até a Arábia e a África Oriental.\n[…]\nNa nova administração, Zheng ocupou os cargos mais altos, primeiro como grande diretor e, nas viagens marítimas, como enviado-chefe (正使, zhèngshǐ). Nas três décadas seguintes, realizou sete expedições em nome do imperador, com trocas comerciais e recolhimento de tributos no Pacífico ocidental e no oceano Índico.\n[…]\nEm 1430, Xuande o escolheu para comandar a sétima e última expedição ao \"Oceano Ocidental\", nome dado ao oceano Índico. Zheng recebeu em 1431 o título Sanbao Taijian (三寶太監), que juntava o apelido Sanbao ao cargo de grande diretor.\n[…]\nA dinastia Yuan e o crescimento do comércio sino-árabe no século XIV haviam alargado o conhecimento chinês do mundo. Mapas \"universais\" antes restritos à China e aos mares vizinhos avançaram para sudoeste e passaram a delinear com mais precisão a Arábia e a África. O governo Ming financiou sete expedições navais entre 1405 e 1433. Yongle contrariou determinações expressas de Hongwu no Huang Ming Zuxun. Os objetivos não são descritos de maneira uniforme pelos historiadores.\n[…]\nLevantamentos perto da Ilha Dongsha registraram sete grandes naufrágios, posteriormente associados à frota de Zheng e descritos como embarcações dos tipos shachuan (沙船), fuchuan (福船) e zhanzuochuan (戰座船). A atribuição direta à frota, porém, não foi demonstrada de forma conclusiva.\n[…]\nViagens do tesouro Ming, as sete expedições marítimas comandadas por Zheng He\n[…]\nEunuco, condição imposta a Zheng após sua captura\n[…]\nOceano Índico, principal espaço marítimo percorrido pelas expedições",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Bíblia de Gutenberg",
      "descricao": "Bíblia em latim impressa por Johannes Gutenberg em Mainz por volta de 1455, primeiro grande livro europeu feito com tipos móveis de metal."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "A Bíblia de Gutenberg, impressa com tipos móveis no século quinze, também é conhecida pelo número de linhas de cada coluna. Quantas são?",
    "resposta": "Quarenta e duas",
    "distratores": [
      "Doze",
      "Vinte e quatro",
      "Sessenta"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Gutenberg_Bible"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Gutenberg_Bible",
        "situacao": "ok",
        "texto": "The Gutenberg Bible, also known as the 42-line Bible, the Mazarin Bible or the B42, is the earliest major book printed in Europe using mass-produced metal movable type. It marked the start of the \"Gutenberg Revolution\" and the age of printed books in the West. The book is valued and revered for its high aesthetic and artistic qualities and its historical significance.\n[…]\nThe Gutenberg Bible is printed in the blackletter type styles that would become known as Textualis (Textura) and Schwabacher. The name Textura refers to the texture of the printed page: straight vertical strokes combined with horizontal lines, giving the impression of a woven structure. Gutenberg already used the technique of justification, that is, creating a vertical, not indented, alignment at the left and right-hand sides of the column.\n[…]\nPossession of a Gutenberg Bible by a library has been equated to keeping a \"trophy book\".\n[…]\nTreasures in Full: Gutenberg Bible Archived 10 October 2013 at the Wayback Machine Information about Gutenberg and the Bible as well as online images of the British Library's two copies\n[…]\nGutenberg Bible Census Details of surviving copies, including some notes on provenance\n[…]\nThe Munich copy of the Gutenberg Bible on bavarikon\n[…]\n1462 The Gutenberg Bible Latin Vulgate – via archive.org.\n[…]\nThe Gutenberg Bible at the Beinecke Archived 2020-07-27 at the Wayback Machine Podcast from the Beinecke Library, Yale University\n[…]\nHistory in the Headlines: 7 Things You May Not Know About the Gutenberg Bible History.com, February 23, 2015\n[…]\nFragment of the Gutenberg Bible, Biblia Latina [Armoire S], at the Library of Trinity College Dublin\n[…]\nFragment of the Gutenberg Bible, A Noble Fragment: Being a Leaf of the Gutenberg Bible (1450–55), at the Clark Library of the University of California, Los Angeles\n[…]\nFragment of the Gutenberg Bible at the John Carter Brown Library of the Early Americas"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/B%C3%ADblia_de_Gutenberg",
        "situacao": "ok",
        "texto": "A Bíblia de Gutenberg (também conhecida como Bíblia de Mazari ou Bíblia de 42 linhas) é o incunábulo impresso da tradução em latim da Bíblia, por Johannes Gutenberg, em Mogúncia (atual Mainz), Alemanha. A produção da Bíblia começou em 1450, tendo Gutenberg usado uma prensa de tipos móveis. Calcula-se que tenha terminado em 1455. Essa Bíblia é considerada o incunábulo mais importante, pois marca o \n[…]\nUma cópia completa desta Bíblia possui 1282 páginas, com texto em duas colunas; a maioria era encadernada em dois volumes. Em março de 1455, o futuro Papa Pio II escreveu que viu páginas da Bíblia expostas em Frankfurt. Não se sabe quantas cópias foram produzidas, com a carta de 1455 citando fontes que mencionam 158 ou 180 cópias, 45 em pergaminho e 135 em papel. Elas foram impressas, rubricadas e iluminadas à mão em um período de três anos.\n[…]\nA Bíblia de 42 linhas foi impressa em um papel do tamanho conhecido como 'Real'. Uma folha inteira de papel Real mede 42 cm × 60 cm (17 pol × 24 pol) e uma única folha fólio não aparada mede 42 cm × 30 cm (17 pol × 12 pol). Um único exemplar completo da Bíblia de Gutenberg tem 1.288 páginas (4×322 = 1288) (geralmente encadernado em dois volumes); com quatro páginas por folha fólio, são necessárias 322 folhas de papel por exemplar.\n[…]\nA Bíblia de Gutenberg é impressa nos estilos de tipografia gótica que ficariam conhecidos como Textualis (Textura) e Schwabacher. O nome Textura refere-se à textura da página impressa: traços verticais retos combinados com linhas horizontais, dando a impressão de uma estrutura tecida. Gutenberg já utilizava a técnica de justificação, ou seja, criar um alinhamento vertical, sem recuo, nos lados esquerdo e direito da coluna.\n[…]\nQuarenta e nove edições da biblia de Gutenberg ainda existem, vinte e cinco das quais são completas.\n[…]\n«Bíblia de Gutenberg». , na Bibloteca Nacional de Portugal",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Dante Alighieri",
      "descricao": "Poeta florentino, autor da Divina Comédia."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "A Divina Comédia, de Dante Alighieri, divide-se em Inferno, Purgatório e Paraíso. Somando as três partes, o poema tem quantos cantos?",
    "resposta": "Cem",
    "distratores": [
      "Trinta e três",
      "Noventa e nove",
      "Trezentos"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Divine_Comedy"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Divine_Comedy",
        "situacao": "ok",
        "texto": "The Divine Comedy (Italian: Divina Commedia) is an Italian narrative poem by Dante Alighieri, begun c. 1308 and completed c. 1321, shortly before the author's death. It is widely considered the pre-eminent work in Italian literature and one of the greatest works of Western literature. The poem's imaginative vision of the afterlife is representative of the medieval worldview as it existed in the La\n[…]\nIt helped establish the Tuscan language, in which it is written, as the standardized Italian language. It is divided into three parts: Inferno, Purgatorio, and Paradiso.\n[…]\nIn the poem, the pilgrim Dante is accompanied by three guides: Virgil, who represents human reason and who guides him for all of Inferno and most of Purgatorio; Beatrice, who represents divine revelation, in addition to theology, grace, and faith, and who guides him from the end of Purgatorio onwards; and Saint Bernard of Clairvaux, who represents contemplative mysticism and devotion to Mary the Mother, guiding him in the final cantos of Paradiso.\n[…]\nThe Divine Comedy is composed of 14,233 lines that are divided into three cantiche (singular cantica) – Inferno (Hell), Purgatorio (Purgatory), and Paradiso (Paradise) – each consisting of 33 cantos (Italian plural canti). An initial canto, serving as an introduction to the poem and generally considered to be part of the first cantica, brings the total number of cantos to 100.\n[…]\nIn 1919, Miguel Asín Palacios, a Spanish scholar and a Catholic priest, published La Escatología musulmana en la Divina Comedia (Islamic Eschatology in the Divine Comedy), an account of parallels between early Islamic philosophy and the Divine Comedy. Palacios argued that Dante derived many features of and episodes about the hereafter from the spiritual writings of Ibn Arabi and from the Isra and Mi'raj, or night journey of Muhammad to heaven."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Divina_Com%C3%A9dia",
        "situacao": "ok",
        "texto": "A Divina Comédia (em italiano:  La Divina Commedia, originalmente Comedìa e, mais tarde, denominada Divina Comédia por Giovanni Boccaccio) é um poema alegórico-didático, e escatológico, de viés épico e teológico da literatura italiana e mundial, sobre os fundamentos da fé cristã, escrito por Dante Alighieri no século XIV e dividido em três partes: o Inferno, o Purgatório e o Paraíso.\n[…]\nO poema está dividido em três partes, denominadas \"cânticos\" (Inferno, Purgatório e Paraíso), cada uma delas composta por 33 cantos (exceto o Inferno, que contém um canto proemial adicional) formados por um número variável de versos, entre 115 e 160, estruturados em tercetos. O poeta narra uma viagem imaginária, ou seja, um Itinerarium mentis in Deum, através dos três reinos ultramundanos que o conduzirá até à visão da Trindade.\n[…]\nCada uma das três partes do poema (Inferno, Purgatório e Paraíso) está dividida em 33 cantos, com mais um a título de introdução, a obra soma 100 cantos, número que significaria a perfeição da perfeição. Além do próprio Dante, três são os personagens principais: Virgílio, guia no inferno e purgatório, Beatriz guia no paraíso terrestre e São Bernardo, guia nas esferas celestes. A obra soma também 14 233 versos em, a partir de então chamados, \"tercetos dantescos\".\n[…]\nPortanto o Inferno, responderia pela depressão do Mar Morto, onde todas as águas convergem, e o Paraíso e o Purgatório seriam os segmentos dos círculos concêntricos que juntos respondem pela nomecânica celeste e os cenários comentados por Dante, num poema envolvendo todos os personagens bíblicos do Antigo ao Novo Testamento, que são costumeiramente encontrados nas entranhas do Inferno.\n[…]\nCANTOS XIV e XV\n[…]\nDante's Inferno jogo inspirado no livro.\n[…]\nULTRAKILL é inspirado no Inferno de Dante, se passando nos círculos do Inferno.\n[…]\nA Divina Comédia (em PDF) no site Biblioteca Mundial",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Armadura de placas",
      "descricao": "Armadura de corpo inteiro feita de placas de aço articuladas, típica do fim da Idade Média e do Renascimento."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Ao contrário do mito, cavaleiros conseguiam correr e montar de armadura. Quanto pesava, em geral, uma armadura de placas completa de combate?",
    "resposta": "Cerca de 20 quilos",
    "distratores": [
      "Cerca de 5 quilos",
      "Cerca de 60 quilos",
      "Cerca de 100 quilos"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Plate_armour"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Plate_armour",
        "situacao": "ok",
        "texto": "Plate armour is a historical type of personal body armour made from bronze, iron, or steel plates, culminating in suits of armour which entirely or mostly encased the wearer. Full plate steel armour developed in Europe during the Late Middle Ages, especially in the context of the Hundred Years' War, from the coat of plates (popular in late 13th and early 14th century) worn over mail suits during t\n[…]\nRennen and Stechen were two sportive forms of the joust developed during the 15th century and practiced throughout the 16th century. The armours used for these two respective styles of the joust were known as Rennzeug and Stechzeug, respectively. The Stechzeug in particular developed into extremely heavy armour which completely inhibited the movement of the rider, in its latest forms resembling an armour-shaped cabin integrated into the horse armour more than a functional suit of armour.\n[…]\nBy contrast, the Rennen was a type of joust with lighter contact. Here, the aim was to hit the opponent's shield. The specialised Rennzeug was developed on the request of Maximilian, who desired a return to a more agile form of joust compared to the heavily armoured \"full contact\" Stechen. In the Rennzeug, the shield was attached to the armour with a mechanism of springs and would detach itself upon contact.\n[…]\nThe first usage of the term \"flak jacket\" refers to the armour originally developed by the Wilkinson Sword company during World War II to help protect Royal Air Force (RAF) air personnel from flying debris and shrapnel. The Red Army also made use of ballistic steel body armour, such as the Stalnoi Nagrudnik model of breastplate, for combat engineers and assault infantry.\n[…]\nArmored combat (sport)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Armadura_de_placas",
        "situacao": "ok",
        "texto": "Armadura de placas é um tipo de armadura corporal histórica feita de placas de bronze, ferro e aço, que engloba praticamente todo o corpo de quem a está usando. Embora existam armaduras similares na antiguidade, como a lorica segmentata (dos Romanos), a armadura de placas completa foi desenvolvida na Europa durante a Baixa Idade Média, especialmente no contexto da Guerra dos Cem Anos, a partir das\n[…]\nNa Europa, a armadura de placas atingiu o ápice de sua forma no final do século XV e começo do século XVI. A armadura completa de corpo inteiro, as vezes referida como panóplia, na verdade foi usada em larga escala perto do final da Idade Média e no começo da era do Renascimento. Essa armadura é associada a imagem do cavaleiro medieval e está firmada no imaginário da cultura popular e literatura, devido especialmente ao fato de ser usada em competição de justas no século XVI.\n[…]\nAs armaduras de placas requeriam trabalho de manufatura complicado, com mão de obra bastante especializada. Assim, adquirir tal armadura era apenas reservado para uma elite que podia pagar, como cavaleiros e a nobreza em geral. Com aço bem temperado, a armadura de placas podia pesar mais de 25 kg e normalmente seu usuário requeria ajuda para vesti-la. Era comum também os donos de tais armaduras ornamenta-las.\n[…]\nArmaduras completas de placas (como a armadura Gótica) foram usadas nas Guerras da Borgonha e nas Guerras Italianas. As tropas que mais utilizavam este tipo de armadura era a cavalaria pesada, como os gendarmes e os couraceiros, mas também a infantaria, como os mercenários suíços e os Lansquenetes, que usavam um tipo de proteção chamada de \"armadura munição\" (utilizada comumente por homens de armas), que deixava as pernas desprotegidas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Peste Negra",
      "descricao": "Pandemia de peste bubônica que devastou a Europa, a Ásia e o Norte da África em meados do século quatorze."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Segundo as estimativas dos historiadores, que fração da população da Europa morreu na peste negra, em meados do século quatorze?",
    "resposta": "Um terço a metade",
    "distratores": [
      "Um vigésimo",
      "Um décimo",
      "Nove décimos"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Black_Death"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Black_Death",
        "situacao": "ok",
        "texto": "The Black Death was a plague pandemic that occurred in Europe from 1346 to 1353. It was one of the most fatal pandemics in human history, leading to the death of up to 50 million people, around 30% to 60% of the European population and approximately 33% of the Middle Eastern population.\n[…]\nDemographic historians estimate that China's population fell by at least 15 per cent, and perhaps as much as a third, between 1340 and 1370. This population loss coincided with the Black Death that ravaged Europe and much of the Islamic world in 1347–52. However, there is a conspicuous lack of evidence for pandemic disease on the scale of the Black Death in China at this time.\n[…]\nThe Black Death killed, by various estimations, from 25 to 60% of Europe's population. Robert Gottfried writes that as early as 1351, \"agents for Pope Clement VI calculated the number of dead in Christian Europe at 23,840,000. With a pre-plague population of about 75 million, Clement's figure accounts for mortality of 31%-a rate about midway between the 50% mortality estimated for East Anglia, Tuscany, and parts of Scandinavia, and the less-than-15% morbidity for Bohemia and Galicia.\n[…]\nAccording to medieval historian Philip Daileader, it is likely that over four years, 45–50% of the European population died of plague.\n[…]\nAccording to historian Geoffrey Parker, \"France alone, it is estimated that at least two million people died from the disease between 1600 and 1670, no fewer than 750,000 of them (almost five percent of the kingdom's population) during the severe epidemic of 1628–1632\". In the first half of the 17th century, a plague killed some 1.7 million people in Italy. More than 1.25 million deaths resulted from the extreme incidence of plague in 17th-century Spain.\n[…]\nBlack Death at BBC History"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Peste_Negra",
        "situacao": "ok",
        "texto": "Peste Negra (também conhecida como Grande Peste, Peste ou Praga) foi uma das pandemias mais devastadoras registadas na história humana, tendo resultado na morte de 25 a 75 milhões de pessoas na Eurásia, atingindo o pico na Europa entre os anos de 1347 e 1351. Acredita-se que a bactéria Yersinia pestis, que resulta em várias formas de peste (septicémica, pneumónica e, a mais comum, bubónica), tenha\n[…]\nA estimativa de mortalidade mais amplamente aceita para o Oriente Médio durante esse período — incluindo Iraque, Irão e Síria, é de cerca de um terço da população. A Peste Negra matou cerca de 40% da população do Egito. No Cairo, houve dois surtos da peste entre 1430 e 1460, durando um pouco mais que quatro meses em ambos os surtos: no primeiro surto (1430), matou em torno de 90 mil, enquanto que no segundo (1460), cerca de 70 mil pessoas.\n[…]\nNa Inglaterra, na ausência de números do censo, os historiadores propõem uma série de números da população pré-incidente de seis milhões em 1300, e uma população pós-incidente de 1,5 milhões. No final de 1350, a Peste Negra diminuiu, mas ocorreram outros surtos em 1361–1362, 1369, 1379–1383, 1389–1393 e durante a primeira metade do século XV. Um surto em 1471 atingiu 10 a 15% da população, enquanto a taxa de mortalidade da peste de 1479 a 1480 poderia ter chegado a 20%.\n[…]\nMais de 60% da população da Noruega morreu em 1348–1350. O último surto de peste devastou Oslo em 1654.\n[…]\nA epidemia também alastrou-se durante a Grande Guerra do Norte (1700–1721), disputa entre o Império Sueco contra o Czarado da Rússia, matando cerca de 100 mil e 300 mil, respectivamente, entre os anos de 1709 e 1713. A peste matou dois terços dos habitantes de Helsínquia e reivindicou um terço da população de Estocolmo. A última grande epidemia da Europa Ocidental ocorreu em 1720 em Marselha. A peste russa de 1770–1772 matou até 100 mil pessoas em Moscovo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Tapeçaria de Bayeux",
      "descricao": "Bordado de cerca de setenta metros, feito no século onze, que narra a conquista normanda da Inglaterra."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "A Tapeçaria de Bayeux conta em imagens bordadas a conquista normanda da Inglaterra. Qual é, aproximadamente, o comprimento dela?",
    "resposta": "Cerca de 70 metros",
    "distratores": [
      "Cerca de 7 metros",
      "Cerca de 20 metros",
      "Cerca de 300 metros"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Bayeux_Tapestry"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bayeux_Tapestry",
        "situacao": "ok",
        "texto": "The Bayeux Tapestry (French: Tapisserie de Bayeux) is an embroidered cloth nearly 70 metres (230 feet) long and 50 centimetres (20 inches) tall that depicts the events leading up to the Norman conquest of England, led by William, Duke of Normandy, and the Battle of Hastings in 1066. It is normally thought to have been made in England in the decades after the events it shows, although the earliest \n[…]\nAfter the liberation of Paris on 25 August, the tapestry was returned to public display in the Louvre, between November and December 1944, on a 70-metre (230 ft) long picture rail, in the Italian Primitives room. In March 1945 it was returned to Bayeux and in October, it was once again put on display, in a glass showcase at the Hotel Doyen.\n[…]\nThe Bayeux tapestry is embroidered in crewel (wool yarn) on a tabby-woven linen ground 68.38 m long and 70 cm tall (224.3 ft × 2.3 ft) of which about 50 centimetres (20 in) are devoted to the embroidery itself. It uses two methods of stitching: outline or stem stitch for lettering and the outlines of figures, and couching or laid work for filling in figures.\n[…]\nAt least two panels of the tapestry are missing, perhaps even another 6.4 m (7.0 yd) in total. This missing area may have depicted William's coronation as King of England. A poem by Baldric of Dol describes a tapestry on the walls of the personal apartments of Adela of Normandy, which is very similar to the Bayeux depiction. He describes the closing scene as the coronation of William in London.\n[…]\nThe Bayeux Tapestry was probably commissioned by the House of Normandy and essentially depicts a Norman viewpoint. However, Harold is shown as brave, and his soldiers are not belittled. Throughout, William is described as dux (\"duke\"), whereas Harold, also called dux up to his coronation, is subsequently called rex (\"king\").\n[…]\nThe Bayeux Tapestry – collection of videos, articles and bibliography"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tape%C3%A7aria_de_Bayeux",
        "situacao": "ok",
        "texto": "A Tapeçaria de Bayeux (UK [baɪˈjɜː,_beɪʔ], US [ˈbeɪjuː,_ˈbaɪʔ]; em francês:  Tapisserie de Bayeux [tapisʁi də bajø] ou La telle du conquest; em latim: Tapete Baiocense) é um tecido bordado de quase 70 metros de comprimento e 50 centímetros de largura, que retrata os eventos que levaram à conquista normanda da Inglaterra em 1066, liderada por Guilherme II da Normandia, desafiando Haroldo II, rei da\n[…]\nAcredita-se que data do século XI, poucos anos após a batalha. É amplamente aceito como tendo sido feito na Inglaterra, talvez como um presente para Guilherme, já que ela conta a história do ponto de vista dos conquistadores normandos e durante séculos foi preservado na Normandia.\n[…]\nO tecido é composto por 58 cenas, muitas delas com tituli latino, bordadas em linho com fios de lã coloridos. É provável que tenha sido encomendada pelo bispo Odo de Bayeux, meio-irmão materno de Guilherme, e feito para ele na Inglaterra na década de 1070. Em 1729, a tapeçaria foi redescoberta por estudiosos numa época em que era exposto anualmente na Catedral de Bayeux.\n[…]\nA tapeçaria está agora exposta no Musée de la Tapisserie de Bayeux, em Bayeux, na Normandia, no norte da França e está inscrita desde 2007 na Memória do Mundo pela UNESCO.\n[…]\nNo entanto, análises acadêmicas do século XX concluíram que provavelmente foi encomendado pelo meio-irmão de Guilherme, o bispo Odo de Bayeux, que, após a conquista, também se tornou conde de Kent e, quando Guilherme estava ausente na Normandia, era regente da Inglaterra.\n[…]\nO bordado foi feito sobre linho, com lã tingida com vários pigmentos vegetais. A autoria do desenho é atribuída aos monges da Abadia de Santo Agostinho, em Cantuária. A tapeçaria mede cerca de 70 metros de comprimento por meio metro de altura. Nela são representadas cerca de 60 cenas, com tituli em latim. A primeira cena representa Eduardo o Confessor enviando Haroldo à Normandia.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Hagia Sophia",
      "descricao": "Antiga catedral bizantina de Constantinopla, depois mesquita, em Istambul, concluída em 537."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "A grande igreja de Justiniano em Constantinopla é chamada em grego de Hagia Sophia. Como se traduz esse nome?",
    "resposta": "Santa Sabedoria",
    "distratores": [
      "Santa Sofia, mártir",
      "Sagrada Família",
      "Santa Luz"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Hagia_Sophia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hagia_Sophia",
        "situacao": "ok",
        "texto": "Hagia Sophia, officially the Hagia Sophia Grand Mosque, is a mosque and a major cultural and historical site in Istanbul, Turkey. It was formerly a church (360–1453) and a museum (1935–2020). The last of three church buildings to be successively erected on the site by the Eastern Roman Empire, it was completed in AD 537, becoming the world's largest interior space and among the first to employ a f\n[…]\nAt the edge of the Augustaeum was the Milion and the Regia, the first stretch of Constantinople's main thoroughfare, the Mese. Also facing the Augustaeum were the enormous Constantinian thermae, the Baths of Zeuxippus, and the Justinianic civic basilica under which was the vast cistern known as the Basilica Cistern. On the opposite side of Hagia Sophia was the former cathedral, Hagia Irene.\n[…]\nJustinian and Patriarch Menas inaugurated the new basilica on 27 December 537, 5 years and 10 months after construction started, with much pomp. Hagia Sophia was the seat of the Patriarchate of Constantinople and a principal setting for Byzantine imperial ceremonies, such as coronations. The basilica offered sanctuary from persecution to criminals, although there was disagreement about whether Justinian had intended for murderers to be eligible for asylum.\n[…]\nThe World Council of Churches condemned the decision to convert the building into a mosque, saying that would \"inevitably create uncertainties, suspicions and mistrust\". At the recitation of the Sunday Angelus prayer at St Peter's Square on 12 July Pope Francis said, \"My thoughts go to Istanbul. I think of Santa Sophia and I am very pained\" (Italian: Penso a Santa Sofia, a Istanbul, e sono molto addolorato).\n[…]\nOn her right side stands emperor Justinian I, offering a model of the Hagia Sophia. The composition of the figure of the Virgin enthroned was probably copied from the mosaic inside the semi-dome of the apse inside the liturgical space."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Santa_Sofia",
        "situacao": "ok",
        "texto": "Santa Sofia (em grego: Άγια Σοφία; romaniz.: Agia Sophia, que significa \"Sagrada Sabedoria\"; em turco: Ayasofya), oficialmente Grande Mesquita de Santa Sofia (em turco:  Ayasofya-i Kebir Cami-i Şerifi), é um imponente edifício construído entre 524 e 537 pelo Império Bizantino para ser a catedral de Constantinopla (atualmente Istambul, na Turquia).\n[…]\nEmbora ela seja chamada de \"Santa Sofia\" (como se tivesse sido dedicada em homenagem a Santa Sofia), sophia é a transliteração fonética em latim da palavra grega para \"sabedoria\" — o nome completo da igreja em grego é Ναός της Αγίας του Θεού Σοφίας, \"Igreja da Santa Sabedoria de Deus\".\n[…]\nInaugurada em 15 de fevereiro de 360 pelo bispo ariano Eudóxio de Antioquia, ela foi construída próxima da região onde o palácio imperial estava sendo construído. A igreja chamada Hagia Irene (\"Santa Paz\") foi completada antes e serviu como catedral até que Santa Sofia estivesse completada. As duas foram as principais igrejas do Império Bizantino.\n[…]\nComo dito, imediatamente após a conquista de Constantinopla, Maomé II converteu Santa Sofia na mesquita de Aya Sofia. Como foi descrito por diversos visitantes ocidentais (como o nobre cordovês Pero Tafur e o florentino Cristoforo Buondelmonti), a igreja estava num estado muito deteriorado, com várias de suas portas soltas. O sultão ordenou que ela fosse limpa e convertida, comparecendo à primeira oração da sexta-feira, 1 de junho de 1453.\n[…]\nSanta Sofia é um dos grandes exemplos ainda existentes da arquitetura bizantina. Seu interior, decorado com pilares de mármore e mosaicos é de grande valor artístico. O próprio imperador Justiniano supervisionou a finalização da maior catedral já construída na época. Ela foi a maior conquista arquitetônica da antiguidade tardia e sua influência se espalhou pelo mundo ortodoxo, católico e islâmico.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Saladino",
      "descricao": "Sultão curdo do Egito e da Síria no século doze, fundador da dinastia aiúbida e adversário dos cruzados."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Saladino é a forma ocidental de Salah ad-Din, um título árabe. O que esse título quer dizer?",
    "resposta": "Retidão da fé",
    "distratores": [
      "Espada de Deus",
      "Leão do deserto",
      "Filho do sultão"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Saladin"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Saladin",
        "situacao": "ok",
        "texto": "Salah ad-Din Yusuf ibn Ayyub (c. 1137 – 4 March 1193), commonly known as Saladin, was the founder of the Ayyubid dynasty and the first sultan of both Egypt and Syria. A Sunni Muslim ruler of Kurdish origin, Saladin was an important figure of the Third Crusade and spearheaded the Muslim military effort against the Crusader states in the Levant. At the height of his power, the Ayyubid realm spanned \n[…]\nSaladin was born in Tikrit in present-day Iraq. His personal name was \"Yusuf\"; \"Salah ad-Din\" is a laqab, an honorific epithet, meaning \"Righteousness of the Faith\". His parents were of Kurdish Rawadiya ancestry, and had originated from the village of Ajdanakan near the city of Dvin in central Armenia. He was the son of a Kurdish mercenary Najm al-Din Ayyub. The Rawadiya tribe from which his family hailed was originally of Arab descent but later became Kurdicized.\n[…]\nFrom then on, he ordered prayers in all the mosques of Syria and Egypt as the sovereign king and he issued at the Cairo mint gold coins bearing his official title—al-Malik an-Nasir Yusuf Ayyub, ala ghaya \"the King Strong to Aid, Joseph son of Job; exalted be the standard.\" The Abbasid caliph in Baghdad graciously welcomed Saladin's assumption of power and declared him \"Sultan of Egypt and Syria\".\n[…]\nSaladin the Victorious – a 1963 Egyptian war drama film directed by Youssef Chahine. Ahmed Mazhar as Saladin, Salah Zulfikar as Issa Al Awwam and Hamdi Gheiss as Richard.\n[…]\nSaladin: The Animated Series – an animated project inspired by the life of Salah ad-Din, with Saladin being voiced by Gavin Yap.\n[…]\nHe appears in Crusader Kings III, with his name being Salah al-Din Yusuf leading the Ayyubid Sultanate in the \"Swords of Faith\" campaign in 1178.\n[…]\nRosebault Ch.J. Saladin. Prince of Chivalri\n[…]\nRichard and Saladin: Warriors of the Third Crusade\n[…]\nFull transcript of: Lane-Poole, Stanley (1906). Saladin and the Fall of the Kingdom of Jerusalem."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Saladino",
        "situacao": "ok",
        "texto": "Nácer Saladim Iúçufe ibne Aiube (em árabe: صلاح الدين يوسف بن أيوب; romaniz.: Ṣalāḥ ad-Dīn Yūsuf ibn Ayyūb; em curdo: سه‌لاحه‌دین ئه‌یوبی; romaniz.: Selah'edînê Eyubî; c. 1138 – 4 de março de 1193), mais conhecido como Saladino (em latim: Saladinus), foi um chefe militar curdo muçulmano que se tornou sultão do Egito e da Síria e liderou a oposição islâmica aos cruzados europeus no Levante. No auge\n[…]\nFoi responsável por reconquistar Jerusalém das mãos do Reino de Jerusalém, após sua vitória na Batalha de Hatim e, como tal, tornou-se uma figura emblemática na cultura curda, árabe, persa, turca e islâmica em geral.\n[…]\nDe acordo com Bea Adim, Saladino planejava conquistar a Europa após a captura de Jerusalém:\n[…]\nA relação entre Saladino e Ricardo era uma de respeito cavalheiresco mútuo, assim como de rivalidade militar; ambos eram celebrados em romances cortesãos. Quando Ricardo foi ferido, Saladino ofereceu os serviços de seu médico pessoal. Em Apolónia, quando Ricardo perdeu seu cavalo, Saladino enviou-lhe dois substitutos. Saladino também lhe enviou frutas frescas com neve, para manter as bebidas frias.\n[…]\nRicardo sugeriu que sua irmã poderia casar-se com o irmão de Saladino — e Jerusalém poderia ser seu presente de casamento.\n[…]\nSaladino morreu no dia 4 de março de 1193, em Damasco, pouco depois da partida de Ricardo. Quando o tesouro de Saladino foi aberto, não havia dinheiro suficiente para pagar por seu funeral; ele havia dado todo o seu imenso tesouro para caridade.\n[…]\nEle está enterrado no Mausoléu de Saladino, no complexo da Mesquita dos Omíadas, em Damasco, e é uma atração popular.\n[…]\nConsiderado o campeão da guerra santa, Saladino se tornou o herói de um ciclo de lendas, que percorreram todo o Oriente Médio e a Europa, e seus feitos são lembrados e admirados até os dias de hoje pelos povos muçulmanos.\n[…]\n«Exclusive Medieval Articles - Richard and Saladin: Warriors of the Third Crusade»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Carlos Magno",
      "descricao": "Rei dos francos e dos lombardos, coroado imperador do Ocidente pelo papa Leão Terceiro."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Em várias línguas eslavas, como o polonês e o tcheco, a palavra que significa rei vem do nome de que governante medieval?",
    "resposta": "Carlos Magno",
    "distratores": [
      "Átila",
      "Gengis Khan",
      "Constantino"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Charlemagne"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Charlemagne",
        "situacao": "ok",
        "texto": "Charlemagne ( SHAR-lə-mayn; 2 April 748 – 28 January 814) was King of the Franks from 768, King of the Lombards from 774, and Emperor of what is now known as the Carolingian Empire from 800. He united most of Western and Central Europe and was the first recognised emperor to rule from the west after the fall of the Western Roman Empire approximately three centuries earlier.\n[…]\nCharlemagne has been the subject of artworks, monuments and literature during and after the medieval period.\n[…]\nSeveral languages were spoken in Charlemagne's world. He was known as Karlo to Early Old French (or Proto-Romance) speakers and as Carolus (or Karolus) in Medieval Latin, the formal language of writing and diplomacy. Charles is the modern English form of these names. The name Charlemagne, as the emperor is normally known in English, comes from the French Charles-le-magne ('Charles the Great'). In modern German and Dutch, he is known as Karl der Große and Karel de Grote respectively.\n[…]\nThe Latin epithet magnus ('great') may have been associated with him during his lifetime, but this is not certain. The contemporary Royal Frankish Annals routinely call him Carolus magnus rex ('Charles the great king'). That epithet is attested in the works of the Poeta Saxo around 900, and it had become commonly applied to him by 1000.\n[…]\nBy the 12th century, Charlemagne is described as bearded rather than moustachioed in literary sources such as the Song of Roland, the Pseudo-Turpin Chronicle, and other works in Latin, French, and German. The Pseudo-Turpin uniquely says that his hair was brown. Later art and iconography of Charlemagne generally depicts him in a later medieval style as bearded with longer hair.\n[…]\nInternet Medieval Sourcebook, a collection of primary sources of Charlemagne's reign edited by Paul Halsall of Fordham University\n[…]\nAn interactive map of Charlemagne's travels"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Carlos_Magno",
        "situacao": "ok",
        "texto": "Carlos Magno ou Carlos, o Grande (em latim: Carolus Magnus, em alemão:  Karl der Große, em francês:  Charlemagne) (2 de abril de 742 – Aachen, 28 de janeiro de 814) foi Rei dos Francos a partir de 768, Rei dos Lombardos a partir de 774 e Imperador dos Romanos a partir do ano 800. Durante o início da Idade Média, Carlos Magno uniu a maior parte da Europa ocidental e central.\n[…]\nO verdadeiro nome de Carlos Magno é Karl, transcrito em latim Carolus (latim clássico) ou Karolus (uso de chancelaria franca, moeda, etc.). Este nome de Karl vem da palavra, em alto alemão antigo, Karal, que significa \"homem\" (do sexo masculino). Carlos Magno é a transcrição francesa de Carolus Magnus (\"Carlos, o Grande\").\n[…]\nDesde a época de Carlos Magno, encontra-se em alguns textos Karolus seguido de magnus, mas este último em posição de adjetivo em relação a um outro nome: Karolus magnus rex Francorum (\"Carlos, o grande rei dos francos\"), Karolus Magnus imperator (\"Carlos, o grande imperador\"). O uso de Carolus Magnus mais curto é uma denominação literária, cujo primeiro exemplo é em um texto Nithard (cerca de 840), várias décadas depois da morte do requerente.\n[…]\nAlém disso, assim como em alemão e nas outras línguas, \"César\" (Kaiser) tornou-se sinónimo de imperador, o nome de Carlos Magno, sob a forma de Karl ou Karolus, levou em Húngaro (király) e nas línguas eslavas ao significado do rei: король (\"korol\") em russo, král em checo, Król em poloco, kralj em croata, etc.\n[…]\nA consequência dessa ação foi os protestos contra seu regime. Carlos Magno encaminhará um espreitador para saber como estava o governo de Leão III. Quando enviou o Conde Germaire, o pontífice tinha sofrido um atentado. Rumores de que os seus agressores teriam lhe cortado a língua e o cegado, o que revelaria inexato, mas que permitem falar-se de um milagre.\n[…]\nJoiosa, a espada lendária de Carlos Magno.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Vlad, o Empalador",
      "descricao": "Vlad Terceiro, príncipe da Valáquia no século quinze, conhecido pela crueldade contra inimigos e pelo nome Drácula."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O apelido Drácula, usado por Vlad Terceiro da Valáquia, vem de uma ordem de cavalaria da qual seu pai fazia parte. Que ordem era essa?",
    "resposta": "Ordem do Dragão",
    "distratores": [
      "Ordem Teutônica",
      "Ordem da Jarreteira",
      "Ordem dos Hospitalários"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Vlad_the_Impaler",
      "https://en.wikipedia.org/wiki/Order_of_the_Dragon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Vlad_the_Impaler",
        "situacao": "ok",
        "texto": "Vlad III (1428–31 – 1476/77), commonly known as Vlad the Impaler (Romanian: Vlad Țepeș [ˈvlad ˈtsepeʃ]) or Vlad Dracula ( DRAK-yuu-lə, -⁠yə-; Romanian: Vlad Drăculea [ˈdrəkule̯a]), was Voivode of Wallachia during three separate reigns (1448, 1456–1462, and 1476). He was born in the House of Drăculești, as the son of Vlad II Dracul. Vlad is chiefly remembered for his efforts to strengthen central a\n[…]\nHunyadi made Vladislav II (son of Vlad Dracul's cousin, Dan II) the ruler of Wallachia.\n[…]\nHe was the forefather of the noble Dracula family.\n[…]\nStoker \"apparently did not know much about\" Vlad the Impaler, \"certainly not enough for us to say that Vlad was the inspiration for\" Count Dracula, according to Elizabeth Miller. For instance, Stoker wrote that Dracula had been of Székely origin only because he knew about both Attila the Hun's destructive campaigns and the alleged Hunnic origin of the Székelys. Stoker's main source, Wilkinson, who accepted the reliability of the German stories, described Vlad as a wicked man.\n[…]\nReferences to Vlad in Bram Stokers notes are indirect, never mentioning him by the name \"Vlad\" specifically. In the notes, he recounts the history of Vlad (referred to as the Wallachian \"Voivode (Dracula)\") ceasing tribute payments to \"Sultan Mahomed II\" around 1460. He describes Vlad's expedition across the Danube, attacking Turkish troops, and the subsequent Ottoman invasion which placed Vlad's brother as ruler of Wallachia while Vlad headed to Hungary.\n[…]\nReferences to Vlad in the novel are indirect as well. Vlad is implicitly mentioned in a segment where Dracula recounts the history of his race.\n[…]\nCount Dracula's War on Islam, a geopolitical context to the military campaigns of Vlad the Impaler\n[…]\nOriginal coins issued by Vlad III the Impaler\n[…]\nLallanilla, Marc (24 October 2014). \"The Real Dracula: Vlad the Impaler\". LiveScience. Purch. Retrieved 26 July 2016."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Order_of_the_Dragon",
        "situacao": "ok",
        "texto": "The Order of the Dragon (Latin: Societas Draconistarum, literally \"Society of the Dragonists\") was a monarchical chivalric order only for selected higher aristocracy and monarchs, founded in 1408 by Sigismund of Luxembourg, who was then King of Hungary and Croatia (r. 1387–1437) and later also Holy Roman Emperor (r. 1433–1437).\n[…]\nThe Order flourished during the first half of the 15th century, primarily in Germany and Italy. After Sigismund's death in 1437, its importance declined in Western Europe. However, after the Fall of Constantinople in 1453, it continued to play a role in Hungary,  Serbia and Romania, which bore the brunt of the Ottoman incursions. The Prince of Wallachia Vlad II Dracul, the father of Vlad the Impaler, took his name from the Order of the Dragon, also known as Ordinul Dragonului.\n[…]\nVlad II Dracul (d. 1447), then Prince of Wallachia\n[…]\nVlad III Dracul (d.1477) then prince of Wallachia\n[…]\nFlorescu, Radu and Raymond McNally, Dracula: Prince of Many Faces. His Life and His Times. Boston: Little Brown, 1989. ISBN 0-316-28656-7.\n[…]\nRezachevici, Constantin. \"From the Order of the Dragon to Dracula\". Journal of Dracula Studies 1 (1999): pp 3–7. Transcriptions available online: (RTF-document), Barcelona-Esoterismo-Esoterisme-Magia.\n[…]\nMcNally, Raymond T. \"In Search of the Lesbian Vampire: Barbara von Cilli, Le Fanu's 'Carmilla' and the Dragon Order\". Journal of Dracula Studies 3 (2001)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Vlad%2C_o_Empalador",
        "situacao": "ok",
        "texto": "Vlad III, comumente conhecido como Vlad, o Empalador (em romeno: Vlad Țepeș) ou Vlad Drácula (em romeno: Vlad Drăculea; Sighișoara, 1428/31 – Bucareste, 1476/77), foi Voivoda da Valáquia três vezes entre 1448 e sua morte em 1476/77. Ele é frequentemente considerado um dos governantes mais importantes da história da Valáquia e um herói nacional da Romênia.\n[…]\nSeu nome teve origem no apelido de seu pai, Vlad II Dracul (\"Vlad, o Dragão\" em romeno medieval), que o recebeu depois de se tornar membro da Ordem do Dragão. Drácula é a forma genitiva eslava de Dracul, que significa \"[o filho] de Dracul (ou o Dragão)\". Em romeno moderno, dracul significa \"o diabo\", o que contribuiu para a reputação de Vlad.\n[…]\nVlad era o segundo filho legítimo de Vlad II Dracul, que era filho ilegítimo de Mircea I da Valáquia. Vlad II ganhou o apelido de \"Dracul\" por ser membro da Ordem do Dragão, uma fraternidade militante fundada por Sigismundo de Luxemburgo, Rei da Hungria. A Ordem do Dragão foi dedicada a deter o avanço otomano na Europa. Como ele tinha idade suficiente para ser candidato ao trono da Valáquia em 1448, o nascimento de Vlad teria sido entre 1428 e 1431.\n[…]\nA maioria dos historiadores concorda que os documentos foram falsificados para justificar a prisão de Vlad. O historiador da corte de Corvino, Antonio Bonfini, admitiu que o motivo da prisão de Vlad nunca foi esclarecido. Florescu escreve: \"[O] estilo de escrita, a retórica de submissão dócil (dificilmente compatível com o que sabemos do caráter de Drácula), a formulação desajeitada e o latim pobre\" são evidências de que as cartas não puderam ser escritas por ordem de Vlad.\n[…]\nOs camponeses que contavam as histórias sabiam que o apelido de Vlad estava ligado aos frequentes empalamentos durante seu reinado, mas disseram que apenas tais atos cruéis poderiam garantir a ordem pública na Valáquia.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Guilherme, o Conquistador",
      "descricao": "Duque da Normandia que conquistou a Inglaterra em 1066 e se tornou o primeiro rei normando inglês."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Antes de ganhar o apelido de Conquistador, o duque Guilherme da Normandia era chamado por outro apelido, ligado ao seu nascimento. Qual?",
    "resposta": "O Bastardo",
    "distratores": [
      "O Ruivo",
      "O Breve",
      "O Normando"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/William_the_Conqueror"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/William_the_Conqueror",
        "situacao": "ok",
        "texto": "William the Conqueror (c. 1028 – 9 September 1087), sometimes called William the Bastard, was the first Norman king of England (as William I), reigning from 1066 until his death. A descendant of Rollo, he was Duke of Normandy (as William II) from 1035 onward. By 1060, following a long struggle, his hold on Normandy was secure.\n[…]\nIn 1051, the childless King Edward of England appears to have chosen William as his successor. William was the grandson of Edward's maternal uncle, Richard II of Normandy.\n[…]\nAlthough Alexander gave papal approval to the conquest after it succeeded, no other source claims papal support prior to the invasion. Events after the invasion, which included the penance William performed and statements by later popes, lend circumstantial support to the claim of papal approval. To deal with Norman affairs, William put the government of Normandy into the hands of his wife for the duration of the invasion.\n[…]\nBy William's death, after weathering a series of rebellions, most of the native Anglo-Saxon aristocracy had been replaced by Norman and other continental magnates. Not all of the Normans who accompanied William in the initial conquest acquired large amounts of land in England. Some appear to have been reluctant to take up lands in a kingdom that did not always appear pacified.\n[…]\nWilliam's government blended elements of the English and Norman systems into a new one that laid the foundations of the later medieval English kingdom. How abrupt and far-reaching the changes were is still a matter of debate among historians, with some, such as Richard Southern, claiming that the Conquest was the single most radical change in European history between the Fall of Rome and the 20th century. Others, such as H. G. Richardson and G. O. Sayles, see the changes as much less radical."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Guilherme_I_de_Inglaterra",
        "situacao": "ok",
        "texto": "Guilherme I (em normando antigo: Williame I; em inglês antigo:  Willelm I; Falaise, c. 1028 – Ruão, 9 de setembro de 1087), geralmente chamado de Guilherme, o Conquistador, e algumas vezes de Guilherme, o Bastardo, foi o primeiro rei normando da Inglaterra, que governou de 1066 até a sua morte em 1087. Descendente de invasores vikings, ele era duque da Normandia desde 1035.\n[…]\nGuilherme de Poitiers descreveu um conselho convocado pelo duque Guilherme, no qual o escritor relata um grande debate que aconteceu entre os nobres e partidários do governante normando sobre a possibilidade de arriscar uma invasão da Inglaterra.\n[…]\nDepois da conquista, Guilherme não tentou integrar seus domínios separados em um único reino unificado com um conjunto único de leis. O sinete que usou após 1066, do qual seis impressões ainda sobrevivem, foi feito depois que invadiu a Inglaterra e destacava seu papel como rei, mencionando separadamente o seu papel de duque.\n[…]\nPara supervisionar o seu domínio expandido, Guilherme foi forçado a viajar ainda mais do que viajava como duque. Transitou entre o continente e a Inglaterra ao menos 19 vezes entre 1067 e sua morte. Passou a maior parte de seu tempo na Inglaterra entre a batalha de Hastings e 1072, dedicando-se mais a Normandia posteriormente.\n[…]\nGuilherme deixou a Normandia para Roberto, e a custódia da Inglaterra foi dada ao seu segundo filho sobrevivente, também chamado de Guilherme, na suposição de que ele tornar-se-ia rei. O filho mais novo, Henrique, recebeu dinheiro. Depois de confiar a coroa inglesa ao seu segundo filho, o Conquistador enviou o jovem Guilherme de volta à ilha britânica em 7 ou 8 de setembro, levando consigo uma carta para Lanfranco, que ordenava o arcebispo a ajudar o novo rei.\n[…]\n«King William I ('The Conqueror')» (em inglês). no National Portrait Gallery",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Rus",
      "descricao": "Povo medieval de guerreiros e mercadores, de origem escandinava segundo a teoria mais aceita, que fundou o Estado da Rus de Kiev."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Segundo a teoria mais aceita, o nome da Rússia vem dos rus, guerreiros e mercadores que chegaram ao leste europeu no século nove. De onde eles vinham?",
    "resposta": "Escandinávia",
    "distratores": [
      "Mongólia",
      "Pérsia",
      "Grécia"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Rus%27_people"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rus%27_people",
        "situacao": "ok",
        "texto": "The Rus', also known as Russes, were a people in early medieval Eastern Europe. The scholarly consensus holds that they were originally Norsemen, mainly originating from present-day Sweden, who settled and ruled along the river-routes between the Baltic and the Black Sea from around the 8th to 11th centuries AD.\n[…]\nThe history of the Rus' is central to 9th through 10th-century state formation, and thus national origins, in Eastern Europe. They ultimately gave their name to Russia and Belarus, and they are relevant to the national histories of Russia, Ukraine and Belarus. Due to this importance, there is a set of alternative so-called \"anti-Normanist\" views that are largely confined to a minor group of Eastern European scholars.\n[…]\nAs for other influences on the Russian language, they are less apparent, and could be due to coincidence. In Old Norse and the modern Scandinavian languages (except for the Jutish dialect of Danish), the definite article is used as an enclitic article after the noun. In Europe, this is otherwise only known from Basque and from the Balkan sprachbund, in languages such as Macedonian and Bulgarian.\n[…]\nDavies, Norman (1996). Europe: A History. New York: Oxford University Press.\n[…]\nStang, Hakon. (1996). The Naming of Russia. Oslo: Middelelser.\n[…]\nTolochko, Olksiy P (2008). \"The Primary Chronicle's 'Ethnography' Revisited: Slavs and Varangians in the Middle Dnieper Region and the Origin of the Rus' State\". In Garipzanov, Ildar H.; Geary, Patrick J.; Urbańczyk, Przemysław (eds.). Franks, Northmen and Slavs. Identities and State Formation in Early Medieval Europe. Brepols.{{cite book}}:  CS1 maint: location missing publisher (link)\n[…]\nWaldman, Carl; Mason, Catherine (2005). Encyclopedia of European Peoples. Infobase Publishing. ISBN 1-4381-2918-1."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rus",
        "situacao": "ok",
        "texto": "Rus (em russo:  Русь, em ucraniano:  Русь) é um endônimo introduzido durante a Alta Idade Média para as populações da Europa Oriental que viviam nas regiões que hoje fazem parte da Ucrânia, da Bielorrússia, da Rússia, de uma pequena parte do nordeste da Eslováquia e de uma faixa do leste da Polônia, formando na época o primeiro estado eslavo oriental da história. Sendo a origem do nome contemporân\n[…]\nO termo rus', com o qual as populações eslavas e fínicas indicavam alguns tipos de varegues ou viquingues deve talvez provir da raiz do antigo nórdico roðs ou roths usado no âmbito náutico e ainda existente nas línguas finlandesa e estônia para indicar os suecos, ruotsi e rootsi. Depois a palavra \"rus'\" passou a indicar não apenas a aristocracia escandinava da Europa Oriental, mas ainda todas as populações que residiam nessas áreas.[carece de fontes]?",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Átila",
      "descricao": "Rei dos hunos de 434 a 453, que atacou o Império Romano do Oriente e do Ocidente."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Átila, rei dos hunos no século cinco, aterrorizou o Império Romano. Que apelido os cristãos medievais lhe deram?",
    "resposta": "Flagelo de Deus",
    "distratores": [
      "Martelo de Deus",
      "Espada de Deus",
      "Lobo da Estepe"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Attila"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Attila",
        "situacao": "ok",
        "texto": "Attila (  ə-TIL-ə or  AT-il-ə; c. 406 – 453), frequently called Attila the Hun and also known by his nickname The Scourge of God, was the ruler of the Huns from 434 until his death in early 453. He was also the leader of an empire consisting of Huns, Ostrogoths, Alans, and Gepids, among others, in Central and Eastern Europe.\n[…]\nThe following year, Attila and Bleda met with the imperial legation at Margus (Požarevac), all seated on horseback in the Hunnic manner, and negotiated an advantageous treaty. The Romans agreed to return the fugitives, to double their previous tribute of 350 Roman pounds (c. 115 kg) of gold, to open their markets to Hunnish traders, and to pay a ransom of eight solidi for each Roman taken prisoner by the Huns.\n[…]\nThe Hungarian Árpád dynasty also claimed to be a direct descendant of Attila. Medieval Hungarian chronicles from the Hungarian royal court like Gesta Hungarorum, Gesta Hunnorum et Hungarorum, Chronicon Pictum, Buda Chronicle, and Chronica Hungarorum claimed that the Árpád dynasty and the Aba clan are the descendants of Attila.\n[…]\nThe name has many variants in several languages: Atli and Atle in Old Norse; Etzel in Middle High German (Nibelungenlied); Ætla in Old English; Attila, Atilla, and Etele in Hungarian (Attila is the most popular); Attila, Atilla, Atilay, or Atila in Turkish; and Adil and Edil in Kazakh or Adil (\"same/similar\") or Edil (\"to use\") in Mongolian.\n[…]\nThe basic premise and guiding principle of the Hungarian medieval chronicle tradition about the Huns, i.e. the Hungarians coming out twice from Scythia, was the Hun-Hungarian continuity. The Hungarian state founder royal dynasty, the Árpád dynasty claimed to be a direct descendant of the great Hun leader Attila. Medieval Hungarian chronicles claimed that Grand Prince Árpád of Hungary was the descendant of Attila."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/%C3%81tila",
        "situacao": "ok",
        "texto": "Átila (em latim: Attila, em grego clássico: Ἀττίλα; Panônia, c. 400 – março de 453) frequentemente referido como Átila, o Huno, foi rei dos hunos e chefe de uma confederação tribal de hunos e povos germânicos e iranianos, que governou o maior império europeu de seu tempo, cujo território se estendia do sul da atual Alemanha, no oeste, até o rio Ural, no leste; e do mar Báltico, no norte, até o mar\n[…]\nApesar disso e de os povos bárbaros terem tido numerosos líderes conhecidos, Átila é \"um dos poucos nomes da Antiguidade capazes de serem reconhecidos instantaneamente\", de maneira semelhante a Alexandre, César, Cleópatra e Nero, e se tornou \"o bárbaro\" por excelência. Nessa tradição cristã ocidental, o rei huno é frequentemente chamado \"Praga de Deus\" ou, mais comumente, \"Flagelo de Deus\".\n[…]\nEsta expressão foi cunhada em 410 pelo clérigo Agostinho de Hipona para designar Alarico, mas gradualmente foi redirecionada a Átila: no século VI Gregório de Tours passou a afirmar que os hunos haviam sido um instrumento divino e, no século seguinte, o religioso Isidoro de Sevilha elaborou nessa noção, dizendo que os hunos haviam sido \"a vara da fúria de Deus\", enviada para \"golpear\" (em latim: flagellantur) os descrentes e força-los a se distanciar dos apetites e pecados da época.\n[…]\nNa forma de epíteto, a expressão apareceu apenas no século VII, na hagiografia de São Lopo, segundo a qual Átila teria se apresentado como o \"flagelo de Deus\" (em latim: flagellum Dei). Em seu original flagellum, o termo designa um azorrague, uma espécie de chicote usado para punir condenados.\n[…]\nIevgueni Zamiatin trabalhou no romance histórico Flagelo de Deus, que traça um paralelo entre a vida de Átila e a rivalidade entre a Rússia e o Ocidente, mas que, por conta da morte do autor, nunca foi concluído.\n[…]\nA História do Declínio e Queda do Império Romano",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Al-Andalus",
      "descricao": "Nome dado pelos árabes aos territórios da Península Ibérica sob domínio muçulmano entre 711 e 1492."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Os muçulmanos chamavam de al-Andalus todo o território que dominavam na Península Ibérica. Que região espanhola herdou esse nome?",
    "resposta": "Andaluzia",
    "distratores": [
      "Aragão",
      "Galiza",
      "Catalunha"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Al-Andalus",
      "https://en.wikipedia.org/wiki/Andalusia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Al-Andalus",
        "situacao": "ok",
        "texto": "Al-Andalus (Arabic: الأَنْدَلُس, romanised: al-ʾAndalus) refers to the various Muslim ruled territories on the Iberian Peninsula that existed between 711 and 1492. At its height, it covered the entirety of Spain and Portugal, as well as parts of southern France. The name refers to the different Muslim states that controlled these territories at various times between 711 and 1492. At its greatest g\n[…]\nFrom the mid 13th to the late 15th century, the only remaining domain of al-Andalus was the Emirate of Granada, the last Muslim stronghold in the Iberian Peninsula. The emirate was established by Muhammad ibn al-Ahmar in 1230 and was ruled by the Nasrid dynasty, the longest reigning dynasty in the history of al-Andalus.\n[…]\nRithā' al-Andalus is considered the most significant of a series of poems that were written in the classical tradition of rithā' (which denotes both lamentation and a literary genre in itself) by Andalusi poets who had taken inspiration from the fall of Andalusi cities and territories. Jewish poetry from Al-Andalus also developed, mostly but not exclusively in Hebrew, with significant consonance with Arabic poetry in both theme and form.\n[…]\nEven after Muslim territories were conquered by the Christian kingdoms, Andalusi art and architecture continued to appear for many centuries as a prestigious style under new Christian patrons employing Muslim craftsmen, originating the Mozarabic art in the Kingdom of Leon during the 10th century and becoming what is known as the Mudéjar style (named after the Mudéjars or Muslims under Christian rule). Numerous examples are found in the early churches of Toledo (e.g.\n[…]\nAl-Andalus has also left art, architecture, and its former territories are among some of the world's best preserved Islamic Golden Age architecture, with examples including the Cathedral of Córdoba, the Alhambra, the Giralda, and many more."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Andalusia",
        "situacao": "ok",
        "texto": "Andalusia (UK:  AN-də-LOO-see-ə, -⁠zee-ə, US:  -⁠zh(ee-)ə, -⁠sh(ee-)ə; Spanish: Andalucía [andaluˈθi.a] , locally also [-ˈsi.a]) is the southernmost autonomous community in Peninsular Spain, located in the south of the Iberian Peninsula, in southwestern Europe. With a population of 8,676,713 in an area of 87,598.86 square kilometres (33,822.11 sq mi) as of 2025, it is the most populous and the sec\n[…]\nFor many centuries, agriculture dominated Andalusian society, and, with 44.3 percent of its territory cultivated and 8.4 percent of its workforce in agriculture as of 2016 it remains an integral part of Andalusia's economy. However, its importance is declining, like the primary and secondary sectors generally, as the service sector is increasingly taking over.\n[…]\nWhile intensive techniques now dominate in Europe and even in other regions of Spain, most of Andalusia's cattle, virtually all of its sheep and goats, and a good portion of its pigs are raised by extensive farming in mountain pastures. This includes the Black Iberian pigs that are the source of Jamón ibérico.\n[…]\nAs of 2008 Andalusia has six public airports, all of which can legally handle international flights. The Málaga Airport is dominant, handling 60.67 percent of passengers and 85 percent of its international traffic. The Seville Airport handles another 20.12 percent of traffic, and the Jerez Airport 7.17 percent, so that these three airports account for 87.96 percent of traffic.\n[…]\nAndalusia's strongest showing in sports has been in table tennis. There are two professional teams: Cajasur Priego TM and Caja Granada TM, the latter being Spain's leading table tennis team, with more than 20 league championships in nearly consecutive years and 14 consecutive Copas del Rey, dominating the Liga ENEBÉ. Cajasur is also one of the league's leading teams.\n[…]\n\"Andalusia\" . Encyclopædia Britannica. Vol. II (9th ed.). 1878. pp. 10–11."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Alandalus",
        "situacao": "ok",
        "texto": "Alandalus (em árabe: الأندلس; romaniz.: al-ʼAndalus), também chamado de Al-Ândalus e Al-Andalus, foi o conjunto de territórios da Península Ibérica que estiveram sob domínio político islâmico entre os séculos VIII e XV, com extensão geográfica variável ao longo do tempo. O termo passou a ser utilizado após a conquista omíada iniciada em 711 e permaneceu em uso mesmo durante os períodos de fragment\n[…]\nA porção ocidental de Alandalus era conhecida como Garbe Alandalus (“ocidente de Alandalus”) e abrangia grande parte do atual território de Portugal. Em termos gerais, essa região ocupou uma posição periférica em relação aos principais centros políticos e culturais andalusinos, como Córdova e Granada, embora tenha desenvolvido dinâmicas regionais próprias.\n[…]\nA conquista islâmica da Península seria efectuada num período de cinco anos por Tárique, Muça e Abdalazize (filho de Muça). O território que corresponde ao que é hoje Portugal foi atingido pela expedição de Abdalazize entre 714 e 716. Em 718 ocorreu a Batalha de Covadonga, durante a qual um grupo de cristãos refugiados nas Astúrias, liderados por Pelágio, derrotou os muçulmanos, o que os forçou a se retirarem da região cantábrica.\n[…]\nos homens não podiam casar com uma muçulmana;\n[…]\nQuando os muçulmanos chegaram à Península Ibérica, a população local era predominantemente cristã, embora o paganismo e o arianismo ainda persistissem em algumas regiões.\n[…]\nO historiador americano Richard Bulliet, em um trabalho baseado no uso quantitativo dos dados onomásticos, fornecido por dicionários biográficos acadêmicos, concluiu que foi apenas no século X, quando o emirado andaluz estava firmemente estabelecido e se tornou o maior poder do Mediterrâneo ocidental, sob o Califa Abderramão III, que os muçulmanos se tornaram uma maioria na Ibéria. Antes de meados deste século, ele afirma, a população do Alandalus ainda era metade cristã.\n[…]\nPortal Al-Andalus",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Infante Dom Henrique",
      "descricao": "Príncipe português do século quinze, filho de Dom João Primeiro, que impulsionou as expedições marítimas de Portugal."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Embora quase nunca tenha ido ao mar, o infante Dom Henrique, que incentivou as viagens portuguesas no século quinze, ficou conhecido por que apelido?",
    "resposta": "O Navegador",
    "distratores": [
      "O Africano",
      "O Conquistador",
      "O Explorador"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Prince_Henry_the_Navigator"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Prince_Henry_the_Navigator",
        "situacao": "ok",
        "texto": "Prince Henry the Navigator (4 March 1394 – 13 November 1460), was a Portuguese prince, a central figure in the early days of the Portuguese Empire and often credited as one of the main initiators of the Age of Discovery. Henry was the third child of King John I of Portugal, who founded the House of Aviz.\n[…]\nIn 1419, Henry's father appointed him governor of the province of the Algarve.\n[…]\nAccording to João de Barros, in Algarve, Prince Henry the Navigator repopulated a village that he called Terçanabal (from terça nabal or tercena nabal). This village was situated in a strategic position for his maritime enterprises and was later called Vila do Infante (\"Estate or Town of the Prince\").\n[…]\nDuring Prince Henry's time and after, the Portuguese navigators discovered and perfected the North Atlantic volta do mar (the \"turn of the sea\" or \"return from the sea\"): the dependable pattern of trade winds blowing largely from the east near the equator and the returning westerlies in the mid-Atlantic.\n[…]\nIn 1994, the Prince Henry Society in conjunction with the Portuguese government gifted Prince Henry the Navigator Park in New Bedford, Massachusetts.\n[…]\nOrder of Prince Henry\n[…]\nPrince Henry the Navigator (statue)\n[…]\nAriganello, Lisa. Henry the Navigator : prince of Portuguese exploration (2007); for elementary schools. online\n[…]\nBeazley, C. Raymond (1894). Prince Henry the Navigator, the Hero of Portugal and of Modern Discovery, 1394–1460 A.D.: With an Account of Geographical Progress Throughout the Middle Ages As the Preparation for His Work. London: G.P. Putnam's Sons.\n[…]\nMartins, J.P. Oliveira (1914). The golden age of Prince Henry the Navigator. London: Chapman and Hall.\n[…]\nRussell, Peter E. (2000). Prince Henry \"the Navigator\": a life. New Haven: Yale University Press. ISBN 978-0-300-08233-3. OCLC 42708239."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Infante_D._Henrique",
        "situacao": "ok",
        "texto": "O Infante D. Henrique, 1.º duque de Viseu e 1.º senhor da Covilhã (Porto, 4 de março de 1394 – Sagres, 13 de novembro de 1460), foi um infante português e a mais importante figura do início da era das descobertas, popularmente conhecido como Infante de Sagres ou O Navegador.\n[…]\nO Infante D. Henrique nasceu numa quarta-feira de cinzas na cidade do Porto, Portugal, no dia então considerado pouco propício ao nascimento de uma criança. Era o quinto filho do rei D. João I, fundador da Dinastia de Avis, e de Dona Filipa de Lencastre.\n[…]\nApós a conquista de Ceuta, retirou-se para Lagos, onde dirigiu expedições ao Atlântico. Rodeou-se de sábios e navegadores portugueses, maiorquinos, genoveses e venezianos.\n[…]\nEm 1427, os seus navegadores descobriram as primeiras ilhas dos Açores, por Diogo de Silves. Outra data aponta para 1431, por Gonçalo Velho. Também estas ilhas desabitadas foram depois povoadas pelos portugueses.\n[…]\nAté à época do Infante D. Henrique, o cabo Bojador era para os europeus o ponto conhecido mais meridional na costa de África. Gil Eanes, que comandou uma das expedições, foi o primeiro a ultrapassá-lo em 1434, eliminando os medos então vigentes quanto ao desconhecido que para lá do cabo se encontraria.\n[…]\nFoi um dos principais organizadores da conquista de Tânger em 1437, que se revelou fracasso enorme, já que o seu irmão mais novo, D. Fernando (o Infante Santo) ficou refém em Marrocos, até à sua morte em 1443, como garantia da devolução de Ceuta que nunca veio a acontecer. A sua reputação militar sofreu um revés e os seus últimos anos de vida foram dedicados à política e à exploração.\n[…]\nRUSSELL, Peter. Prince Henry ´the Navigator´a Life. New Haven: Yale University Press, 2000. ISBN 0-300-08233-9",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Bula de Ouro de 1356",
      "descricao": "Decreto do imperador Carlos Quarto que fixou as regras de eleição do rei e imperador do Sacro Império Romano-Germânico."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "A Bula de Ouro, decreto de 1356 que regulou a eleição dos imperadores germânicos, deve esse nome a quê?",
    "resposta": "Seu selo de ouro",
    "distratores": [
      "Tinta dourada",
      "Capa de ouro",
      "Tributo em ouro"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Golden_Bull_of_1356"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Golden_Bull_of_1356",
        "situacao": "ok",
        "texto": "The Golden Bull of 1356, was a decree issued by the Imperial Diet at Nuremberg and Metz (Diet of Metz, 1356/57) headed by the  Emperor Charles IV which fixed, for a period of more than four hundred years, important aspects of the constitutional structure of the Holy Roman Empire. It was named the Golden Bull for the golden seal it carried.\n[…]\nIn June 2013, the Golden Bull was included in the UNESCO's Memory of the World Register.\n[…]\nAccording to the written text of the Golden Bull of 1356:\n[…]\nBesides regulating the election process, the chapters of the Golden Bull contained many minor decrees. For instance, it also defined the order of marching when the emperor was present, both with and without his insignia.\n[…]\nThus the Golden Bull also strengthened the nobility in general to the detriment of the cities.\n[…]\nThe pope's involvement with the Golden Bull of 1356 was basically nonexistent, which was significant in the history of relations between the popes and the emperors. When Charles IV laid down procedure for electing a King of the Romans, he mentioned nothing about receiving papal confirmation of the election. However, Pope Innocent VI did not protest this because he needed Charles’s support against the Visconti.\n[…]\nPope Innocent continued to have good relations with Charles IV after the Golden Bull of 1356 until the former's death in 1362.\n[…]\nThe complete Golden Bull of 1356, translated into English.\n[…]\nSelections from the Golden Bull from the Internet Mediaeval Sourcebook at the Fordham University Centre for Mediaeval Studies.\n[…]\nThe integral Golden Bull in Latin, comparative listing of all five initial copies.\n[…]\nBernd-Ulrich Hergemöller, Golden Bull, 1356, published 8 March 2010, english version published 27 February 2020; in: Historisches Lexikon Bayerns\n[…]\nonline-Versions as in Latin as in Medieval High-German Dialects"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bula_Dourada_de_1356",
        "situacao": "ok",
        "texto": "A Bula Dourada de 1356 foi um decreto emitido pela Dieta de Nuremberga (Reichstag), presidida pelo imperador Carlos IV (ver Dieta de Nuremberga) que determinou, por um período de mais de 400 anos, um aspecto fulcral da estrutura constituinte do Sacro Império Romano-Germânico.\n[…]\nA Bula Dourada nomeava explicitamente os sete príncipes-eleitores que deveriam escolher o Rei dos Romanos, o qual deveria normalmente ser posteriormente coroado Imperador Romano pelo papa. Consequentemente, a bula menciona um rex in imperatorem promovendus, o \"rei a ser promovido imperador\" — apesar da distinção entre os dois títulos se tornaria progressivamente irrelevante (e virtualmente não existente depois de 1508).\n[…]\nBula dourada\n[…]\nThe Golden Bull of Charles IV 1356.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Queda de Constantinopla",
      "descricao": "Conquista da capital bizantina pelo Império Otomano do sultão Maomé Segundo, em 1453."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "O último imperador bizantino morreu lutando quando os otomanos tomaram sua capital, em 1453. Ele tinha o mesmo nome de que imperador romano?",
    "resposta": "Constantino, o Grande",
    "distratores": [
      "Justiniano",
      "Teodósio",
      "Augusto"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Constantine_XI_Palaiologos"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Constantine_XI_Palaiologos",
        "situacao": "ok",
        "texto": "Constantine XI Dragases Palaiologos or Dragaš Palaeologus (Greek: Κωνσταντῖνος Δραγάσης Παλαιολόγος, romanized: Kōnstantīnos Dragásēs Palaiológos; 8 February 1404 – 29 May 1453) was the last reigning Byzantine emperor from 23 January 1449 until his death in battle at the fall of Constantinople on 29 May 1453.\n[…]\nConstantine's death marked the end of the Byzantine Empire, an institution tracing its origin to Constantine the Great's foundation of Constantinople as the Roman Empire's new capital in 330.\n[…]\nThe fall of Constantinople shocked Christians throughout Europe. In Orthodox Christianity, Constantinople and the Hagia Sophia became symbols of lost grandeur. In the Russian Nestor Iskander tale, the foundation of Constantinople (the New Rome) by Constantine the Great and its loss under an emperor by the same name was not seen as a coincidence, but as the fulfilling of the city's destiny, just as Old Rome had been founded by Romulus and lost under Romulus Augustulus.\n[…]\nThe 1453 Greek long poem Capture of the City, of uncertain authorship, laments the bad luck of Constantine, which the author blames on Constantine's ill-advised destruction of Glarentza (including its churches) in the 1420s. According to the author, all of Constantine's other misfortunes—the destruction of the Hexamilion wall, the death of his brother John VIII, and the fall of Constantinople—were the result of what happened at Glarentza.\n[…]\nThe Palaiologeia (Greek: Παλαιολόγεια) are annual commemorative events held in Mystras, Laconia, Greece, since at least 1966, in memory of Constantine XI Palaiologos and those who died defending Constantinople during its fall on 29 May 1453.\n[…]\nIn the 2024 Turkish historical drama series Mehmed: Fatihler Sultanı, Emperor Constantine XI was portrayed by Turkish actor Seçkin Özdemir."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Constantino_XI_Pale%C3%B3logo",
        "situacao": "ok",
        "texto": "Constantino XI Dragases Paleólogo, ou Dragaš Paleólogo (em grego: Κωνσταντῖνος Δραγάσης Παλαιολόγος, romanizado: Kōnstantīnos Dragásēs Palaiológos; 8 de fevereiro de 1404 – 29 de maio de 1453), foi o último imperador bizantino (romano) reinante, governando de 23 de janeiro de 1449 até sua morte em combate durante a Queda de Constantinopla, em 29 de maio de 1453.\n[…]\nA morte de Constantino marcou o fim definitivo do Império Romano do Oriente, cuja origem remontava à fundação de Constantinopla por Constantino, o Grande, como a nova capital do Império Romano em 330.\n[…]\nAo longo do século XIV, os turcos otomanos conquistaram vastas extensões de território e, em 1405, controlavam grande parte da Anatólia, da Bulgária, da Grécia central, da Macedônia, da Sérvia e da Tessália. O Império Bizantino, que outrora se estendia por todo o Mediterrâneo Oriental, havia sido reduzido à capital imperial, Constantinopla, ao Peloponeso e a algumas ilhas do mar Egeu, sendo também obrigado a pagar tributo aos otomanos.\n[…]\nO perigo que representava era tão grande que João convocou Constantino de volta da Moreia para organizar a defesa da capital. Em abril de 1442, Demétrio e os otomanos iniciaram o ataque, e, em julho, Constantino deixou a Moreia para socorrer o irmão. Durante a viagem, encontrou Catarina em Lesbos e ambos navegaram até Lemnos, onde foram bloqueados por uma esquadra otomana e permaneceram retidos por vários meses.\n[…]\nPouco depois da morte de Murade II, Constantino tratou de enviar emissários ao novo sultão, Mehmed II, na tentativa de negociar uma nova trégua. Segundo as fontes, Mehmed recebeu os enviados de Constantino com grande respeito e os tranquilizou jurando por Deus, pelo profeta Maomé, pelo Alcorão, pelos anjos e pelos arcanjos que viveria em paz com os bizantinos e com seu imperador pelo resto da vida.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Mamelucos",
      "descricao": "Casta militar do mundo islâmico que governou o Egito e a Síria de 1250 a 1517."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "No Brasil colonial, que nome, igual ao de uma casta de soldados que governou o Egito medieval, designava o filho de branco com indígena?",
    "resposta": "Mameluco",
    "distratores": [
      "Cafuzo",
      "Mulato",
      "Bandeirante"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Mamluk",
      "https://pt.wikipedia.org/wiki/Caboclo"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mamluk",
        "situacao": "ok",
        "texto": "Mamluk, mamaluk, or mameluke (; Arabic: مملوك, romanized: mamlūk (singular), مماليك, mamālīk (plural); translated as \"one who is owned\", meaning \"slave\") were non-Arab, ethnically diverse (mostly Turkic, Caucasian, Mongol, Eastern and Southeastern European) enslaved mercenaries, slave-soldiers, and freed slaves who were assigned military and administrative duties in the Muslim world. They were pur\n[…]\nThe Ottoman Sultan Bayezid II was engaged in warfare in southern Europe when a new era of hostility with Egypt began in 1501. It arose out of the relations with the Safavid dynasty in Persia. Shah Ismail I sent an embassy to the Republic of Venice via Syria, inviting Venice to ally with Persia and recover its territory taken by the Ottomans. Mameluk Egyptian sultan Al-Ghawri was charged by Selim I with giving the Persian envoys passage through Syria on their way to Venice and harboring refugees.\n[…]\nThe list of effectives on 21 April 1802 reveals three officers and 155 of other rank. By decree of 25 December 1803 the Mamluks were organized into a company attached to the Chasseurs-à-Cheval of the Imperial Guard (see Mamelukes of the Imperial Guard).\n[…]\nThere were various places in which Mamluks gained political or military power as a self-replicating military community. Some examples of this can be seen in the Tripolitania region of Libya, where Mamluk governors instated their various policies under the Ottoman Empire until October 18, 1912, when Italian forces took over the region in the Italo-Turkish War.\n[…]\nMamluk carpets\n[…]\nMamluk architecture\n[…]\nMamelukes of the Imperial Guard\n[…]\nBlaydes, Lisa. \"Mamluks, Property Rights, and Economic Development: Lessons from Medieval Egypt.\" Politics & Society 47.3 (2019): 395–424  online Archived 24 March 2020 at the Wayback Machine.\n[…]\nBorer, Mary Cathcart. What Became of the Mamelukes? (Pergamon Press, 1969)\n[…]\nThe Mamluks at BBC's In Our Time"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Caboclo",
        "situacao": "ok",
        "texto": "Caboclo, ou curiboca é o mestiço de branco com indígena, ou o descendente destes. Caboclo significa procedente do branco, ou filho de branco na língua tupi-guarani, também era a antiga designação dada pelos portugueses para classificar os povos indígenas do Brasil. Caboclo pode também, ser sinônimo de caipira. Os descendentes de brancos com caboclo(a) recebem a denominação utilizada também pelos f\n[…]\nNo sistema de castas nas colônias espanholas na América, os descendentes de brancos e mestiços de indígenas eram chamados de castizos.\n[…]\nA história do povo caboclo começa nos primeiros anos do século XVI, com o início da exploração do pau-brasil na zona costeira. Embora as relações consensuais e não consensuais entre homens europeus e mulheres indígenas ocorram desde os primórdios da colônia, o primeiro caso documentado de indivíduo branco a se fixar em território brasileiro, e a prosperar em uma comunidade indígena no Brasil, foi o do português Diogo Álvares Corrêa, que naufragou na costa do recôncavo da Bahia em 1509.\n[…]\nA denominação foi dada pelos primeiros colonos lusitanos nas terras brasileiras para os mestiços. Os mamelucos que se destacaram na então colônia portuguesa foram os bandeirantes, que colaboraram para a expansão do território, até então limitado pelo Tratado de Tordesilhas.\n[…]\nNa América do Sul, mameluco (mais comumente conhecido como \"caboclo\") é, também, o termo usado para identificar pessoas mestiças. Nos século XVII e século XVIII, mameluco referia-se a bandos organizados por colonizadores (mesclados ou não) caçadores de escravos.\n[…]\nMamelucos eram, em sua maioria, exploradores que vagueavam pelo interior da América do Sul desde o Atlântico até às encostas dos Andes, e do rio Paraguai até ao rio Orinoco fazendo incursões nas áreas indígenas em busca de metais preciosos."
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Guerra das Rosas",
      "descricao": "Série de guerras civis pelo trono inglês, travadas entre 1455 e 1487 por dois ramos da dinastia Plantageneta."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "A Guerra das Rosas, que dividiu a Inglaterra no século quinze, inspirou os livros de George R. R. Martin adaptados em que série de TV?",
    "resposta": "Game of Thrones",
    "distratores": [
      "The Witcher",
      "Vikings",
      "Os Tudors"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/A_Song_of_Ice_and_Fire"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/A_Song_of_Ice_and_Fire",
        "situacao": "ok",
        "texto": "A Song of Ice and Fire is a series of high fantasy novels by the American author George R. R. Martin. Martin began writing the first volume, A Game of Thrones, in 1991, and published it in 1996. Martin, who originally envisioned the series as a trilogy, has released five out of seven planned volumes. The most recent entry in the series, A Dance with Dragons, was published in 2011. Since then, Mart\n[…]\nThe Official A Game of Thrones Coloring Book (2015)\n[…]\nBlood of the Dragon  (July 1996), taken from the Daenerys Targaryen chapters in A Game of Thrones\n[…]\nA Game of Thrones (comics) (2011-2014)\n[…]\nA spin-off prequel television series, House of the Dragon, was later developed based on sections of Martin's Fire & Blood — specifically the second half of the first volume, an expanded version of the novellas The Rogue Prince and The Princess and the Queen. House of the Dragon is created by George R. R. Martin and Ryan J. Condal for HBO. It is the second television series in the Game of Thrones franchise.\n[…]\nAnother spin-off prequel series, A Knight of the Seven Kingdoms, was developed based on Martin's Tales of Dunk and Egg novellas. A Knight of the Seven Kingdoms is created by George R. R. Martin and Ira Parker for HBO. It is the third television series in the Game of Thrones franchise. It follows the adventures of \"Dunk\" (Ser Duncan the Tall, a hedge knight) and \"Egg\" (Prince Aegon Targaryen, the future King Aegon V), some 90 years before the events of the novels.\n[…]\nVideo games A Game of Thrones: Genesis, Game of Thrones, Game of Thrones: A Telltale Games Series, and A Game of Thrones: The Board Game - Digital Edition were released in 2011, 2012, 2014–2015, and 2020, respectively. The companion book The World of Ice & Fire by Martin and the Westeros.org owners Elio M. García Jr. and Linda Antonsson was published in October 2014.\n[…]\nGeorge R. R. Martin's official website"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/A_Song_of_Ice_and_Fire",
        "situacao": "ok",
        "texto": "A Song of Ice and Fire (Brasil: As Crônicas de Gelo e Fogo / Portugal: As Crónicas de Gelo e Fogo) é uma série de livros de alta fantasia escrita pelo romancista e roteirista norte-americano George R. R. Martin, e publicada pela editora Bantam Spectra. Martin começou a desenvolvê-la em 1991 e o primeiro volume foi lançado em 1996. Originalmente concebida para ser uma trilogia, a série consiste em \n[…]\nOs livros de As Crônicas de Gelo e Fogo foram adaptados para um grande número de formatos, como jogos de videogame, histórias em quadrinhos, bonecos em miniatura e uma série de TV intitulada Game of Thrones, produzida pelo HBO.\n[…]\nRetomando o trabalho em A Game of Thrones em 1994 e o concluindo no ano seguinte, Martin disse a seu agente que o romance era parte de uma trilogia, originalmente composta pelos livros A Game of Thrones, A Dance with Dragons e The Winds of Winter. Com o passar do tempo, ele revisou sua estimativa e, em seguida, expandiu o seu planejamento para uma série de quatro livros, e posteriormente para uma de seis, que ele imaginou como duas trilogias interligadas de uma longa história.\n[…]\nContudo, Martin contou as diretrizes que seguiu ao longo da escrita de The Winds of Winter para os dois principais produtores da série, David Benioff e D. B. Weiss, e estes trataram de adaptá-la para a temporada de 2016 de Game of Thrones. O autor igualmente divulgou os pontos mais importantes do desfecho da história para Benioff e Weiss, caso ele venha a falecer antes de finalizar os tomos.\n[…]\nA saga criada por George R. R. Martin é discutida meticulosamente online por seus admiradores, com comentários em sites de fantasia e de livrarias como a Amazon.com. Ela foi adaptada para diversos formatos, dentre eles uma série televisiva intitulada Game of Thrones, três jogos de videogame e uma série de história em quadrinhos.\n[…]\n«Blog oficial de George R. R. Martin» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Robin Hood",
      "descricao": "Fora da lei lendário do folclore inglês medieval, que roubava dos ricos para dar aos pobres."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Em muitas versões da lenda, Robin Hood se mantém fiel a um rei inglês ausente por estar lutando nas cruzadas. Que rei é esse?",
    "resposta": "Ricardo Coração de Leão",
    "distratores": [
      "Henrique Segundo",
      "Eduardo Primeiro",
      "Guilherme, o Conquistador"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Robin_Hood"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Robin_Hood",
        "situacao": "ok",
        "texto": "Robin Hood is a legendary heroic outlaw originally depicted in English folklore and subsequently featured in literature, theatre, and cinema. According to legend, he was a highly skilled archer and swordsman. In some versions of the legend, he is depicted as being of noble birth, and in modern retellings he is sometimes depicted as having fought in the Crusades before returning to England to find \n[…]\nRobin Hood and Maid Marian (Child Ballad 150)\n[…]\nRobin Hood and Little John (Child Ballad 125)\n[…]\nRobin Hood and the Prince of Aragon (Child Ballad 129)\n[…]\nRobin Hood's Birth, Breeding, Valor, and Marriage (Child Ballad 149)\n[…]\nRobin Hood and the Ranger (Child Ballad 131)\n[…]\nRobin Hood and the Valiant Knight (Child Ballad 153)\n[…]\nThe Bold Pedlar and Robin Hood (Child Ballad 132)\n[…]\nRobin Hood and the Beggar, II (Child Ballad 134)\n[…]\nRobin Hood and the Pedlars (Child Ballad 137)\n[…]\nSome ballads, such as Erlinton, feature Robin Hood in some variants, where the folk hero appears to be added to a ballad pre-existing him and in which he does not fit very well. He was added to one variant of Rose Red and the White Lily, apparently on no more connection than that one hero of the other variants is named \"Brown Robin\".\n[…]\nFrancis James Child indeed retitled Child ballad 102; though it was titled The Birth of Robin Hood, its clear lack of connection with the Robin Hood cycle (and connection with other, unrelated ballads) led him to title it Willie and Earl Richard's Daughter in his collection.\n[…]\nRobin Hood (a.k.a. Robin of Loxley or Locksley)\n[…]\nCultural depictions of Robin Hood\n[…]\nInternational Robin Hood Bibliography\n[…]\nRobin Hood – from the Internet Archive, Project Gutenberg and Google Books (scanned books, original editions, colour illustrated)\n[…]\nRobin Hood public domain audiobook at LibriVox (multiple works)\n[…]\n\"Robin Hood\", BBC Radio 4 discussion with Stephen Knight, Thomas Hahn & Juliette Wood (In Our Time, 30 October 2003)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Robin_Hood",
        "situacao": "ok",
        "texto": "Robin Hood (conhecido em Portugal como Robin dos Bosques) é um herói mítico britânico, um fora da lei que roubava da nobreza para dar aos pobres. Teria vivido no século XII, aos tempos do rei Ricardo I, e das grandes Cruzadas. Era hábil no arco e flecha e vivia na floresta de Sherwood, onde era ajudado por um bando de amigos, do qual faziam parte João Pequeno, Frei Tuck, Allan Dale e Will Scarlet,\n[…]\nA história mais famosa e repassada a respeito de Robin Hood conta sobre um homem chamado Robin De Locksley. Este, após servir ao lado do Rei Ricardo em uma grande Cruzada, retorna para casa. Ao chegar, encontra seu feudo devastado pela tirania dos regentes, além de leis abusivas, e a proibição da caça como sustento ao homem comum. Indignado, ele se recusa a aceitar a situação, e é declarado fora da lei.\n[…]\nNa História, Robin Hood, que ganha o apelido por usar um capuz (hood) (tipo de chapéu com pena) vence o príncipe João e casa-se com Lady Marian, sobrinha de Ricardo. No fim da história, Ricardo Coração de Leão reaparece após sua derrota em terras estrangeiras e nomeia Robin Hood cavaleiro, tornando-o nobre novamente.\n[…]\nRobin Hood, de 1973, em formato de desenho animado, e lançada pelos Estúdios Disney. Nessa versão, todos os personagens da história foram transformados em animais, que agiam como humanos: \"Robin Hood\" e \"Lady Marian\", por exemplo, viraram raposas e o \"Príncipe João\" e o \"Rei Ricardo\" viraram leões, uma vez que o projeto inicial era uma adaptação de Reynard, a raposa, uma outra história do folclore europeu.\n[…]\nA comédia Robin Hood: Men in Tights, de 1993, dirigida por Mel Brooks.\n[…]\nRobin de Locksley (que mais tarde se torna Robin Hood) regressa das Cruzadas, onde lutava ao lado do Rei da Inglaterra, quando descobre que a sua terra natal mudou, e para pior. O xerife assumiu o comando e homens terríveis aterrorizam a população.\n[…]\nA verdadeira história de Robin Hood História Viva",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Catedral de Notre-Dame de Paris",
      "descricao": "Catedral gótica medieval na Île de la Cité, em Paris."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Que escritor francês ajudou a salvar Notre-Dame de Paris do abandono com um romance de 1831, cujo herói é um sineiro corcunda?",
    "resposta": "Victor Hugo",
    "distratores": [
      "Alexandre Dumas",
      "Émile Zola",
      "Gustave Flaubert"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Hunchback_of_Notre-Dame",
      "https://en.wikipedia.org/wiki/Notre-Dame_de_Paris"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Hunchback_of_Notre-Dame",
        "situacao": "ok",
        "texto": "The Hunchback of Notre-Dame (French: Notre-Dame de Paris, lit. 'Our Lady of Paris', originally titled Notre-Dame de Paris. 1482) is a French Gothic novel by Victor Hugo, published in 1831. The title refers to the Notre-Dame Cathedral, which features prominently throughout the novel. It focuses on the unfortunate story of Quasimodo, the Romani street dancer Esmeralda, and Quasimodo's guardian the A\n[…]\nThe novel's French title, Notre-Dame de Paris, refers to Notre-Dame Cathedral. Frederic Shoberl's 1833 English translation was published as The Hunchback of Notre-Dame. This became the generally used title in English, referring to Quasimodo, Notre-Dame's bell-ringer. Victor Hugo was allegedly upset that this translation placed focus on only one character, seeing his novel as a broader plea for the preservation of France's gothic architecture.\n[…]\nVictor Hugo initially agreed to write Notre-Dame de Paris in 1828. Due to Hugo's other literary projects, the novel fell by the wayside until 1830. A primary theme of the novel is the value of Gothic architecture, which was neglected and often destroyed to be replaced by new buildings or defaced by replacement of parts of buildings in a newer style. For instance, the medieval stained glass panels of Notre-Dame de Paris had been replaced by white glass to let more light into the church.\n[…]\nIn The Hunchback of Notre-Dame, Victor Hugo makes frequent reference to the architecture of the Cathedral of Notre-Dame in Paris. He also mentions the invention of the printing press, when the bookmaker near the beginning of the work speaks of \"the German pest\".\n[…]\nNotre Dame, romantic opera in two acts by Franz Schmidt, text after Victor Hugo by Schmidt and Leopold Wilk, composed in 1902–1904 and first performed in Vienna in 1914\n[…]\n1895 M. W. Artois et al., part of the 28-vol. The Novels of Victor Hugo, reprinted in the 20th century under other titles\n[…]\nFrance portal"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Notre-Dame_de_Paris",
        "situacao": "ok",
        "texto": "Notre-Dame de Paris (French: Cathédrale Notre-Dame de Paris French: [nɔtʁ(ə) dam də paʁi] : \"Cathedral of Our Lady of Paris\"), often referred to simply as Notre-Dame, is a medieval Catholic cathedral and basilica on the Île de la Cité (an island in the River Seine), in the 4th arrondissement of Paris, France. It is the cathedral church of the Roman Catholic Archdiocese of Paris.\n[…]\nThe 1831 publication of Victor Hugo's novel Notre-Dame de Paris (English title: The Hunchback of Notre-Dame) inspired interest which led to restoration between 1844 and 1864, supervised by Eugène Viollet-le-Duc. On 26 August 1944, the Liberation of Paris from German occupation was celebrated in Notre-Dame with the singing of the Magnificat. Beginning in 1963, the cathedral's façade was cleaned of soot and grime. Another cleaning and restoration project was carried out between 1991 and 2000.\n[…]\nThe chronicler Jean de Saint-Victor recorded in the Memorial Historiarum that the construction of Notre-Dame began between 24 March and 25 April 1163 with the laying of the cornerstone in the presence of King Louis VII and Pope Alexander III. Four phases of construction took place under bishops Maurice de Sully and Eudes de Sully (not related to Maurice), according to masters whose names have been lost.\n[…]\nIn the decades after the Napoleonic Wars, Notre-Dame fell into such a state of disrepair that Paris officials considered its demolition. Victor Hugo, who admired the cathedral, wrote the novel Notre-Dame de Paris (published in English as The Hunchback of Notre-Dame) in 1831 to save Notre-Dame. The book was an enormous success, raising awareness of the cathedral's decaying state. The same year as Hugo's novel was published, anti-Legitimists plundered Notre-Dame's sacristy.\n[…]\nOfficial website of Friends of Notre-Dame de Paris\n[…]\nRe-opening ceremony for Notre Dame in Paris, 2024 on C-SPAN"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Notre-Dame_de_Paris_%28romance%29",
        "situacao": "ok",
        "texto": "Notre-Dame de Paris, também conhecido como O Corcunda de Notre-Dame, é um romance histórico de autoria do escritor francês Victor Hugo, publicado em 1831.\n[…]\nA obra veio a público originalmente com o título de \"Notre-Dame de Paris\", e nem sequer se centrava na personagem que a eternizou, uma vez que só quando foi traduzida para a língua inglesa, em 1833, este nome apareceu no título. Em sua origem, constituía-se em um romance histórico, voltado para o público adulto, com o intuito de conscientizá-lo para a necessidade de se conservar a Catedral de Notre-Dame.\n[…]\nNa obra, Victor Hugo não se limita a descrever apenas a antiga Catedral, mas ilustra historicamente a sociedade da Paris medieval, e os contrastes dos seus personagens, desde os pedintes e ciganos ao rei e à nobreza.\n[…]\nA história passa-se em 1482, em Paris, a capital de França. A ação desenrola-se dentro e em torno da Catedral de Notre-Dame, na Île de la Cité, no meio do rio Sena. Aqui estavam situadas os dois grandes monumentos da cidade na época: a Catedral e o Palácio da Justiça, o que centralizava, na ilha, a religião e o governo de Paris.\n[…]\nQuasímodo: Vive em Catedral de Notre-Dame. Aos quatro anos de idade, foi abandonado pelos pais à porta da Catedral devido à sua deformidade singular, tendo sido adotado pelo arquidiácono Claude Frollo. Em sua vida adulta, Quasímodo recebe a missão de guardar os sinos de Notre-Dame e após anos em contato com seu badalar, desenvolve surdez. Apaixona-se pela cigana Esmeralda que, por sua vez, é apaixonada pelo Capitão Phoebus de Châteaupers.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Hagia Sophia",
      "descricao": "Antiga catedral bizantina de Constantinopla, depois mesquita, em Istambul, concluída em 537."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Segundo a tradição, ao entrar na Hagia Sophia recém-concluída, o imperador Justiniano exclamou que havia superado que rei bíblico?",
    "resposta": "Salomão",
    "distratores": [
      "Davi",
      "Herodes",
      "Nabucodonosor"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Hagia_Sophia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hagia_Sophia",
        "situacao": "ok",
        "texto": "Hagia Sophia, officially the Hagia Sophia Grand Mosque, is a mosque and a major cultural and historical site in Istanbul, Turkey. It was formerly a church (360–1453) and a museum (1935–2020). The last of three church buildings to be successively erected on the site by the Eastern Roman Empire, it was completed in AD 537, becoming the world's largest interior space and among the first to employ a f\n[…]\nOriginally, under Justinian's reign, the interior decorations consisted of abstract designs on marble slabs on the walls and floors as well as mosaics on the curving vaults. Of these mosaics, the two archangels Gabriel and Michael are still visible in the spandrels (corners) of the bema. There were already a few figurative decorations, as attested by the late 6th-century ekphrasis of Paul the Silentiary, the Description of Hagia Sophia.\n[…]\nOn her right side stands emperor Justinian I, offering a model of the Hagia Sophia. The composition of the figure of the Virgin enthroned was probably copied from the mosaic inside the semi-dome of the apse inside the liturgical space.\n[…]\nByzantine churches influenced by the Hagia Sophia include the Hagia Sophia in Thessaloniki, and the Hagia Irene. The Hagia Irene was remodeled to have a dome similar to the Hagia Sophia's during the reign of Justinian. Neo-Byzantine churches modeled on the Hagia Sophia include the Kronstadt Naval Cathedral, Holy Trinity Cathedral, Sibiu and Poti Cathedral. Each closely replicates the internal geometry of the Hagia Sophia.\n[…]\nOther examples include the Alexander Nevsky Cathedral, Sofia, St Sophia's Cathedral, London, Saint Clement Catholic Church, Chicago, and the Basilica of the National Shrine of the Immaculate Conception. Several mosques commissioned by the Ottoman dynasty have plans based on the Hagia Sophia, including the Süleymaniye Mosque and the Bayezid II Mosque.\n[…]\nRunic inscriptions in Hagia Sophia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Santa_Sofia",
        "situacao": "ok",
        "texto": "Santa Sofia (em grego: Άγια Σοφία; romaniz.: Agia Sophia, que significa \"Sagrada Sabedoria\"; em turco: Ayasofya), oficialmente Grande Mesquita de Santa Sofia (em turco:  Ayasofya-i Kebir Cami-i Şerifi), é um imponente edifício construído entre 524 e 537 pelo Império Bizantino para ser a catedral de Constantinopla (atualmente Istambul, na Turquia).\n[…]\nO edifício atual foi construído originalmente como uma igreja entre 532 e 537 por ordem do imperador bizantino Justiniano I e foi a terceira igreja de Santa Sofia a ocupar o local, as duas anteriores tendo sido destruídas em revoltas civis. Ela foi projetada pelos cientistas gregos Isidoro de Mileto, um médico, e Antêmio de Trales, um matemático.\n[…]\nEsta reconstrução foi completada no ano de 562 e o poeta bizantino Paulo Silenciário compôs um longo poema (ainda existente), conhecido como Ekphrasis, onde ele a comparou a um \"campo de mármore\", tantas as cores utilizadas. A reabertura foi presidida novamente pelo patriarca Eutíquio de Constantinopla no dia 23 de dezembro de 562. A riqueza e o nível artístico da basílica teria levado Justiniano a dizer Νενίκηκά σε Σολομών (\"Salomão, eu te superei!\").\n[…]\nDurante o Império Latino (1204–1261), a cidade foi ocupada e a basílica se transformou numa catedral da Igreja Católica Romana. Balduíno I foi coroado imperador em 16 de maio de 1204 em Santa Sofia, numa cerimônia muito parecida com o ritual bizantino.\n[…]\nSanta Sofia é um dos grandes exemplos ainda existentes da arquitetura bizantina. Seu interior, decorado com pilares de mármore e mosaicos é de grande valor artístico. O próprio imperador Justiniano supervisionou a finalização da maior catedral já construída na época. Ela foi a maior conquista arquitetônica da antiguidade tardia e sua influência se espalhou pelo mundo ortodoxo, católico e islâmico.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Harun al-Rashid",
      "descricao": "Quinto califa abássida, que governou de Bagdá entre 786 e 809."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "O califa Harun al-Rashid, que governou Bagdá no fim do século oito, virou personagem de que famosa coletânea de contos?",
    "resposta": "Mil e Uma Noites",
    "distratores": [
      "Decamerão",
      "Contos da Cantuária",
      "Calila e Dimna"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Harun_al-Rashid"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Harun_al-Rashid",
        "situacao": "ok",
        "texto": "Abū Jaʿfar Hārūn ibn Muḥammad ar-Rashīd, (c. 763 or 766 – 24 March 809), famously known as Hārūn al-Rashīd, was the fifth of the Abbasid caliphs, reigning from September 786 until his death in March 809. His reign is traditionally regarded to be the beginning of the Islamic Golden Age. His epithet al-Rashid translates to \"the Upright\", or \"the Rightly-Guided\".\n[…]\nAnother of Harun's concubines was the captive daughter of a Greek churchman of Heraclea acquired with the fall of that city in 806. Zubaidah once more presented him with one of her personal maids who had caught his fancy. Harun's half-brother, while governor of Egypt from 795 to 797, also sent him an Egyptian maid who immediately won his favour.\n[…]\nHarun al-Rashid became ill and died very soon after when he reached Sanabad village in Tus and was buried in Dar al-Imarah, the summer palace of Humayd ibn Qahtaba, the Abbasid governor of Khorasan. Due to this historical event, the Dar al-Imarah was known as the Mausoleum of Haruniyyeh. The location later became known as Mashhad (\"The Place of Martyrdom\") because of the martyrdom of Imam al-Ridha in 818.\n[…]\nMany anecdotes attached themselves to the person of Harun al-Rashid in the centuries following his rule. Saadi of Shiraz inserted a number of them into his Gulistan.\n[…]\n782: Hārūn is the leader of a military campaign against the Byzantine Empire under Irene of Athens. The defection of the Armenian general Tatzates allows him to reach as far as the Bosporus. A peace treaty is signed on favorable terms. Harun receives the honorific title ar-Rashīd, named second in succession to the caliphal throne and also appointed governor of Tunisia, Egypt, Syria, Armenia and Azerbaijan.\n[…]\nIn his book The Power Broker, Robert Caro compares New York City mayor Fiorello H. La Guardia to Harun al-Rashid in the way each \"roam[ed] his domain\"."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Harune_Arraxide",
        "situacao": "ok",
        "texto": "Harune Arraxide (em árabe: هارون الرشيد; romaniz.: Hārūn ar/al-Rashīd - \"Aarão, o Justo\" ou \"Aarão, o Bem-guiado\"), foi o quinto califa abássida, reinando entre 786 e 809, numa época marcada pela prosperidade científica, cultural e religiosa no Islã. Ele foi o fundador da lendária biblioteca chamada de \"Casa da Sabedoria\" (Bay al-Hikma).\n[…]\nJá entre o que se sabe ser fictício está o famoso livro \"As Mil e uma Noites\", que contém muitas histórias fantásticas sobre a corte de Harune e sobre o próprio califa. A família dos barmécidas, que até então tinha tido um papel fundamental no estabelecimento do Califado Abássida entrou em declínio a partir do reinado de Harune Arraxide.\n[…]\nFoi sob Harune Arraxide que Bagdá floresceu e se tornou uma das mais esplêndidas cidades do mundo. Muitos governantes pagavam tributo ao califa e estes fundos eram utilizados em obras arquitetônicas, nas artes e para sustentar a vida na corte.\n[…]\nEm 796, Harune decidiu mudar a sua corte e o governo para Raca, no médio Eufrates, onde ficou por doze anos, retornando apenas uma vez para Bagdá para uma breve visita. Diversas razões o influenciaram a tomar essa decisão. Em primeiro lugar, Raca era mais próxima da fronteira bizantina e as linhas de comunicação, via Eufrates até Bagdá, via Balique até o norte do califado e via Palmira até Damasco, eram excelentes.\n[…]\nPor causa dos contos das \"Mil e uma Noites\", Harune Arraxide se tornou uma figura lendária e teve a sua personalidade histórica obscurecida. Na realidade, seu reinado iniciou a desintegração política do Califado Abássida. Na Síria viviam tribos que ainda alimentavam simpatias pelos omíadas e eram inimigas dos abássidas enquanto que no Egito surgiram rebeliões por causa da má administração e da imposição exagerada de impostos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Ordem dos Hospitalários",
      "descricao": "Ordem militar e religiosa cristã surgida em Jerusalém no tempo das cruzadas, depois sediada em Rodes e em Malta."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "A Ordem dos Hospitalários, nascida em Jerusalém na época das cruzadas, existe até hoje com o nome da ilha onde se instalou em 1530. Que ilha?",
    "resposta": "Malta",
    "distratores": [
      "Rodes",
      "Chipre",
      "Sicília"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Knights_Hospitaller",
      "https://en.wikipedia.org/wiki/Sovereign_Military_Order_of_Malta"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Knights_Hospitaller",
        "situacao": "ok",
        "texto": "The Order of Knights of the Hospital of Saint John of Jerusalem, commonly known as the Knights Hospitaller (), was a Catholic military order. It was founded in the crusader Kingdom of Jerusalem in the 12th century and had its headquarters there, in Jerusalem and Acre, until 1291, thereafter being based in Kolossi Castle in Cyprus (1302–1310), the island of Rhodes (1310–1522), Malta (1530–1798), an\n[…]\nThe entities generally considered to maintain historical continuity with the Knights are the Sovereign Military Order of Malta, based in Rome and recognized by over 100 countries worldwide, as well as the chivalric orders in the Alliance of the Orders of Saint John of Jerusalem: the Bailiwick of Brandenburg of the Chivalric Order of Saint John of the hospital at Jerusalem, Johanniter Orde in Nederland, Order of Saint John in Sweden, and the Most Venerable Order of the Hospital of St.\n[…]\nToday, the best-known activities of this order are the St John Ambulance Brigade in Britain and the Commonwealth and the Saint John Eye Hospital in Jerusalem. The Most Venerable Order of Saint John has maintained a presence in Malta since the late 19th century. In contrast with the orders originating with the medieval Knights Hospitaller, the British organisation no longer limits its membership to Christians.\n[…]\nSeveral other organizations claim with their own sources to have evolved from the Knights Hospitaller, but all are subject to international dispute and lack recognition. The Russian tradition of the Knights Hospitaller was recognized by the Pope with Tsar Paul I becoming Grand Master. The British resented this decision as it could have given Russia access to the Mediterranean through a claim over Malta. Britain said that the decision of the Pope was not official.\n[…]\nCaterina Vitale, the first female pharmacist of the Knights Hospitaller, and the first female pharmacist and chemist in Malta"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Sovereign_Military_Order_of_Malta",
        "situacao": "ok",
        "texto": "The Sovereign Military Order of Malta (SMOM), officially the Sovereign Military Hospitaller Order of Saint John of Jerusalem, of Rhodes and of Malta, and commonly known as the Order of Malta or the Knights of Malta, is a Catholic lay religious order, traditionally of a military, chivalric, and noble nature. Though it possesses no national territory, the order is considered a sovereign entity under\n[…]\nThe French forces occupying Malta expelled the Knights Hospitaller from the country.\n[…]\nthe Order of Malta is a major donor of the St John Eye Hospital in Jerusalem, which is primarily operated by the Most Venerable Order of Saint John.\n[…]\nThis agreement grants the order the use with limited extraterritoriality of the upper portion of Fort St. Angelo in the city of Birgu. Its stated purpose is \"to give the Order the opportunity to be better enabled to carry out its humanitarian activities as Knights Hospitallers from Saint Angelo, as well as to better define the legal status of Saint Angelo subject to the sovereignty of Malta over it\".\n[…]\nPorter, Whitworth (2013). A History of the Knights of Malta (reprint of original edition 1883). Cambridge University Press. ISBN 9781108066228.\n[…]\nSire, H.J.A. (1994). The Knights of Malta. New Haven, CT: Yale University Press. ISBN 0300055021.\n[…]\nSire, H.J.A. (2016). The Knights of Malta: A Modern Resurrection. Bevin Way, London: Third Millennium. ISBN 9781908990679.\n[…]\nList of Italian knights of the Order of Malta from 1136 to 1713: Elenco dei cavaleri del S.M.Ordine di San Giovanni di Gerusalemme by Francesco Bonazzi (Napoli: Libreria Detken & Rocholl, 1897)\n[…]\nList of Italian knights of the Order of Malta from 1714 to 1907: Elenco dei cavaleri del S.M.Ordine di San Giovanni di Gerusalemme by Francesco Bonazzi (Napoli: Libreria Detken & Rocholl, 1907)\n[…]\nPermanent Observer Mission of the Order of Malta to the United Nations in New York\n[…]\nThe Order of Malta Magistral Post"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Angkor Wat",
      "descricao": "Grande complexo de templos construído no século doze pelo Império Khmer, em Angkor, no Camboja."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "O templo de Angkor Wat, erguido no século doze pelo Império Khmer, aparece desenhado na bandeira de que país?",
    "resposta": "Camboja",
    "distratores": [
      "Tailândia",
      "Laos",
      "Vietnã"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Angkor_Wat",
      "https://en.wikipedia.org/wiki/Flag_of_Cambodia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Angkor_Wat",
        "situacao": "ok",
        "texto": "Angkor Wat is a Theravada Buddhist temple complex, originally built as a Vaishnava Hindu temple, in Siem Reap, Cambodia. It is the largest religious complex in the world. Located on a site measuring 162.6 hectares (1.6 km2; 401.8 acres) within the medieval capital of Angkor, it was constructed between 1113 and 1150 CE during the reign of the Khmer king Suryavarman II as a Hindu temple dedicated to\n[…]\nAngkor Wat is the prime example of the classical style of Khmer architecture known as the Angkor Wat style. Architecturally, the elements characteristic of the style include the ogival, redented towers shaped like lotus buds; half-galleries to broaden passageways; axial galleries connecting enclosures; and the cruciform terraces which appear along the main axis of the temple. Typical decorative elements are devatas (or apsaras), bas-reliefs, pediments, extensive garlands and narrative scenes.\n[…]\nThe route has been suggested to span 35 km (22 mi) along a canal towards Tonlé Sap lake, another 35 km (22 mi) crossing the lake, and finally 15 km (9 mi) against the current along Siem Reap River, making a total journey of 90 km (55 mi). In 2011, Etsuo Uchida and Ichita Shimoda of Waseda University in Tokyo discovered a shorter 35 km (22 mi) canal connecting Mount Kulen and Angkor Wat using satellite imagery and believe that the Khmer used this route instead.\n[…]\nSuch reinterpretations contributed to Angkor Wat's continued use as a place of worship, distinguishing it from many other monuments of the Angkor region that were abandoned after the decline of the Khmer state.\n[…]\nIn 2001, this incentive resulted in the concept of the \"Angkor Tourist City\" which would be developed about traditional Khmer architecture, contain leisure and tourist facilities, and provide luxurious hotels capable of accommodating large numbers of tourists.\n[…]\nPBS NOVA Angkor: Hidden Jungle Empire"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Flag_of_Cambodia",
        "situacao": "ok",
        "texto": "The flag of Cambodia (Khmer: ទង់ជាតិកម្ពុជា) features three horizontal bands of blue, double-width red, and blue, with a white depiction of Angkor Wat centred on the red band. Red and blue are traditionally the colours of Cambodia, representing the nation and the king respectively.\n[…]\nThe Royal Standard of the King of Cambodia (Khmer: ទង់ព្រះមហាក្សត្រ, Tóng Preăh Môhaksâtr; \"King's Flag\") is the personal flag of Cambodian King Norodom Sihamoni. It is also considered among the National Symbols of Cambodia.\n[…]\nSince around 1875, the Cambodian flag has featured a depiction of Angkor Wat in the centre. The current flag, with blue border stripes and a red central one (ratio 1:2:1 blue-red-blue) was adopted in 1948 after WWII, during a period of reforms and unrest in Cambodia due to French colonial rule. It was used until 9 October 1970, when a new flag was introduced for Lon Nol's Khmer Republic that lasted until the takeover of the Khmer Rouge in 1975.\n[…]\nThe Kampuchean National United Front for National Salvation (FUNSK) revived the flag adopted by the Khmer Issarak in the days of anti-French resistance for the new state. This flag had the same colour pattern as the DK flag, but with a yellow five-towered Angkor Wat silhouette. When the PRK renamed itself as \"State of Cambodia\" (SOC) in 1989, the flag's lower half became blue.\n[…]\nThe flag used today is the same as that established in 1948, although the older flag is sometimes said to have used a red outline for Angkor Wat while the current flag uses black specifically. Since that time, five other intervening designs have been used. Almost all made use of the image of the temple of Angkor Wat in one form or another. The monarchy was restored in September 1993, the 1948 flag having been readopted in June of that year."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Angkor_Wat",
        "situacao": "ok",
        "texto": "Angkor Wat (ou Angkor Vat) é um templo situado 5,5 km a norte da cidade de Siem Reap, na província homônima do Camboja. É o maior e mais bem preservado templo dos que integram o assentamento de Angkor. É também o único que restou com significado religioso importante — inicialmente hindu, e depois budista — desde a sua fundação. O templo é o ponto máximo do estilo clássico da arquitetura Khmer.\n[…]\nA palavra Angkor vem do cambojano នគរ Nokor, e pela sua vez da voz sânscrito नगर Nagara que significa \"capital\", enquanto Wat é de origem khmer e traduz-se como \"templo\". O nome de Angkor Wat é, em todo caso, posterior à sua criação, pois originalmente recebeu o nome de Preah Pisnulok; nome póstumo do seu fundador Suryavarman II.\n[…]\nContudo, esta nova ocupação de Angkor durou pouco, visto que, em 1594, os siameses conquistaram o débil império cambojano, e Angkor foi abandonada definitivamente.\n[…]\nApós uma viagem financiada pela Royal Geographical Society e a Zoological Society of London, os desenhos e a apaixonada descrição do templo registrados nos cadernos da viagem deste naturalista foram publicados póstumamente em Paris em 1868, com o nome de \"Voyage dans les royaumes de Siam, de Cambodge de Laos\" (Viagem aos reinos do Sião, do Camboja e do Laos). Nas suas observações, o francês exaltava a beleza e magnificência do templo:\n[…]\nApós a relativa normalização da situação política no Camboja, Angkor e o seu templo principal, Angkor Wat, tornaram-se num importante destino turístico: o complexo recebeu 561 000 turistas em 2004, 677 000 em 2005, e cerca de um milhão em 2008. Para evitar o desgaste produzido pela massiva afluência de turistas, bem como com objetivo de previr o vandalismo, estão começando a proteger e adaptar algumas zonas do templo particularmente delicadas.\n[…]\nAngkor\n[…]\nModelo virtual de Angkor Wat",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Dom Afonso Henriques",
      "descricao": "Afonso Primeiro, fundador e primeiro rei de Portugal, no século doze."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Na Batalha de São Mamede, em 1128, Dom Afonso Henriques, futuro primeiro rei de Portugal, derrotou as tropas de que parente?",
    "resposta": "Sua mãe, Dona Teresa",
    "distratores": [
      "Seu pai, Henrique",
      "Seu irmão",
      "Seu sogro"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Battle_of_S%C3%A3o_Mamede",
      "https://en.wikipedia.org/wiki/Afonso_I_of_Portugal"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Battle_of_S%C3%A3o_Mamede",
        "situacao": "ok",
        "texto": "The Battle of São Mamede (Portuguese: Batalha de São Mamede) took place on 24 June 1128 near Guimarães and is considered an important event in the process that led to the establishment of Portugal as an independent kingdom.\n[…]\nForces led by Afonso Henriques defeated forces led by his mother, Theresa of Portugal, and Fernão Peres de Trava. Though he took control of the County of Portugal, he remained a vassal of King Alfonso VII of León and Castile, who was nominally the overlord of the county.\n[…]\nAfter Teresa and Fernando Peres were expelled, all of Portugal followed Afonso, though it appears some regional resistance was still put up between the end of 1128 and the first months of 1129. Alfonso VII could not see São Mamede with indifference, and his choices were to either reinstate Teresa by force of arms or force Afonso to acknowledge his authority. The state of constant civil strife within León or against the Crown of Aragon seems to have compelled him to the second option.\n[…]\nTeresa lived only for another two years after the battle and died in Galicia. Fernando Peres entered the service of Alfonso VII as his general and would fight against Afonso in the future.\n[…]\nThe Battle of São Mamede marked the beginning of a new phase in Portuguese history, as both Count Henry and Teresa had expended considerable energy pursuing ambitions outside the county, while Afonso Henriques focused on consolidating his authority within Portugal.\n[…]\nFrom 1128 to 1137 Afonso Henriques was at war with Alfonso VII. He probably desired the territorial expansion of his fief, based on promises or claims, more or less fictitious or fallacious, dating from the reign of Urraca. He was also clearly aiming for the title of king."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Afonso_I_of_Portugal",
        "situacao": "ok",
        "texto": "Dom Afonso I (born Afonso Henriques; 1106/1109/1111 – 6 December 1185) nicknamed \"the Conqueror\" (Portuguese: O Conquistador), \"the Founder\" (O Fundador) and \"the Great\" (O Magno) by the Portuguese, was the first king of Portugal, from 26 July 1139 until his death on 6 December 1185. He achieved the independence of the County of Portugal, establishing a new kingdom and doubling its area with the R\n[…]\nAfonso was the son of Theresa of León and Henry of Burgundy, rulers of the County of Portugal. Henry died in 1112, leaving Theresa to rule alone. Unhappy with Theresa's romantic relationship with Galician Fernando Pérez de Traba and his political influence, the Portuguese nobility rallied around Afonso, who revolted and defeated his mother at the Battle of São Mamede in 1128 and became sole Count of Portugal soon afterwards.\n[…]\nIn 1128, near Guimarães at the Battle of São Mamede, Afonso and his supporters overcame troops under both his mother and her lover, Count Fernando Pérez de Traba of Galicia. Afonso exiled his mother to Galicia, and took over rule of the County of Portucale. Thus the possibility of re-incorporating Portucale into a Kingdom of Portugal and Galicia as before was eliminated and Afonso became sole ruler following demands for greater independence from the county's church and nobles.\n[…]\nTeresa (1151–1218), countess consort of Flanders due to her marriage to Philip I and duchess consort of Burgundy through her second marriage to Odo III;\n[…]\nTeresa Afonso. In some genealogies she appears as the daughter of Elvira Gálter, and in others as the daughter of Chamoa Gómez. Her first marriage was with Sancho Nunes de Barbosa with whom she had a daughter, Urraca Sanches, who married Gonçalo Mendes de Sousa, the father of Mendo Gonçalves de Sousa known as \"Sousão\". Her second husband was Fernando Martins Bravo, Lord of Bragança and Chaves, with no issue from this marriage."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Batalha_de_S%C3%A3o_Mamede",
        "situacao": "ok",
        "texto": "A Batalha de São Mamede foi uma batalha travada a 24 de Junho de 1128 (Juliano) ou 1 de Julho de 1128 (Gregoriano) entre Afonso Henriques e as tropas dos barões portucalenses contra as tropas do Conde galego Fernão Peres de Trava, amante da sua mãe, condessa D. Teresa de Leão, que se tentava apoderar do governo do Condado Portucalense. As duas facções confrontaram-se no campo de São Mamede, em Gui\n[…]\nOs revoltosos escolheram para seu líder Afonso Henriques, filho de Henrique de Borgonha e de Teresa de Leão.\n[…]\nVale a pena transcrever alguns parágrafos dos Anais de Dom Afonso sobre esta batalha. Rei de Portugal (1185 – Santa Cruz de Coimbra). \"No ano de 1166, no mês de junho, na festa de São João Batista, o ilustre Infante D. Afonso, filho do Conde D. Henrique e da Rainha D. Teresa, neto do grande Imperador da Hispânia, D.\n[…]\nTravou uma batalha no Campo de São Mamede, perto de Guimarães e, tendo-os derrotado a todos, fugiram diante deles. Foi então que se apropriaram do principado e da monarquia do reino de Portugal\".\n[…]\nO historiador português José Mattoso no seu livro \"D. Afonso Henriques\" (Tópicos e Debates) afirma que, segundo o relato mais conhecido do início do Reino de Portugal, escrito em 1678 pelo monge (Frey) António Brandão, a vitória da Batalha de São Mamede é atribuída aos nobres e não ao príncipe.\n[…]\nCom a derrota, Teresa de Leão e Fernão Peres abandonaram o governo condal, que ficou então nas mãos do infante e dos seus partidários, o que desagradou ao Bispo de Santiago de Compostela, Diogo Gelmires, que cobiçava o domínio das terras. Teresa de Leão desistia assim da ambição de ser senhora de Portugal. A crónicas registam que ficou prisioneira do filho, Há rumores, não confirmados, de que ela teria sido aprisionada no Castelo de Lanhoso.\n[…]\nHá até quem relate as maldições que Teresa rogou ao seu filho Afonso Henriques.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Torre de Pisa",
      "descricao": "Campanário inclinado da catedral de Pisa, na Itália."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "A Torre de Pisa começou a inclinar ainda durante a construção, no fim do século doze. Por que isso aconteceu?",
    "resposta": "Solo mole demais",
    "distratores": [
      "Um terremoto",
      "Inclinação proposital",
      "Um bombardeio"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Leaning_Tower_of_Pisa"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Leaning_Tower_of_Pisa",
        "situacao": "ok",
        "texto": "The Leaning Tower of Pisa (Italian: torre pendente di Pisa [ˈtorre penˈdɛnte di ˈpiːza, - ˈpiːsa]), or simply the Tower of Pisa (torre di Pisa), is the campanile, or freestanding bell tower, of Pisa Cathedral. It is known for its nearly four-degree lean, the result of an unstable foundation. The tower is one of three structures in Pisa's Cathedral Square (Piazza del Duomo), which includes the cath\n[…]\nIn 1178, the tower began to sink after construction progressed to the second floor. This was due to a mere three-metre foundation, set in weak, unstable subsoil, a design that was flawed from the beginning. Construction was subsequently halted for the better part of a century, as the Republic of Pisa was almost continually engaged in battles with Genoa, Lucca, and Florence. This allowed time for the underlying soil to settle. Otherwise, the tower would almost certainly have toppled.\n[…]\nOn 23 February 1260, Guido Speziale, son of Giovanni Pisano, was elected to oversee the building of the tower. On 12 April 1264, the master builder Giovanni di Simone, architect of the Camposanto, and 23 workers went to the mountains close to Pisa to cut the required marble. The cut stones were given to Rainaldo Speziale, worker of St. Francesco. In 1272, construction resumed under Di Simone.\n[…]\nThe circular shape and great height of the campanile were unusual for their time, and the crowning belfry is stylistically distinct from the rest of the construction. This belfry incorporates a 14 cm (5+1⁄2 in) correction for the inclined axis below. The siting of the campanile within the Piazza del Duomo diverges from the axial alignment of the cathedral and baptistery of the Piazza del Duomo.\n[…]\nLeaning Tower of Niles, a replica of the Tower of Pisa\n[…]\nTorre delle Milizie, a tilting medieval tower in Rome\n[…]\nLeaning Tower of Pisa at Structurae"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Torre_de_Pisa",
        "situacao": "ok",
        "texto": "A torre inclinada de Pisa (em italiano Torre pendente di Pisa), ou simplesmente Torre de Pisa, é um campanário (campanile ou campanário autônomo) da catedral da cidade italiana de Pisa. Está situada atrás da catedral, e é a terceira mais antiga estrutura na praça da Catedral de Pisa (Campo dei Miracoli), depois da catedral e do baptistério.\n[…]\nEmbora destinada a ficar na vertical, a torre começou a inclinar-se para sudeste logo após o início da construção, em 1173, devido a uma fundação mal construída e a um solo de fundação mal consolidado, que permitiu à fundação ficar com assentamentos diferenciais. A torre atualmente se inclina para o sudoeste.\n[…]\nA altura do solo ao topo da torre é de 55,86 metros no lado mais baixo e de 56,70 metros na parte mais alta. A espessura das paredes na base é de 4,09 metros e 2,48 metros no topo. Seu peso é estimado em 14 500 toneladas. A torre tem 296 ou 294 degraus: o sétimo andar da face norte das escadas tem dois degraus a menos. Antes do trabalho de restauração realizado entre 1990 e 2001 a torre estava inclinada com um ângulo de 5,5 graus, estando agora a torre inclinada em cerca de 3,99 graus.\n[…]\nA torre começou a inclinar-se após a progressão de construção para o terceiro andar em 1178. Isto deveu-se a uma fundação de meros três metros sobre um subsolo fraco e instável, um projecto que falhou desde o início. A construção foi posteriormente paralisada por quase um século, porque o Pisanos estavam continuamente envolvidos em batalhas com Génova, Lucca e Florença. Este tempo permitiu ao solo subjacente ajustar-se. Caso contrário, a torre de Pisa quase certamente teria sido derrubada.\n[…]\nComo resultado, após a limpeza, o cinzento deu lugar ao branco que com a sua candura faz brilhar novamente a Torre de Pisa, um ícone da Itália.\n[…]\nAprendendo a Torre de Pisa em base de dados Structurae.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Sainte-Chapelle",
      "descricao": "Capela real gótica na Île de la Cité, em Paris, construída para guardar relíquias da Paixão."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "A Sainte-Chapelle, em Paris, foi erguida para abrigar uma relíquia cara, comprada pelo rei Luís Nono do imperador latino de Constantinopla. Qual?",
    "resposta": "Coroa de espinhos",
    "distratores": [
      "Santo Graal",
      "Santo Sudário",
      "Véu de Verônica"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Sainte-Chapelle"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sainte-Chapelle",
        "situacao": "ok",
        "texto": "The Sainte-Chapelle (French: [sɛ̃t ʃapɛl]; English: Holy Chapel) is a royal chapel located on the Île de la Cité in the middle of the River Seine in Paris. It was part of the medieval Palais de la Cité, the main residence of the Kings of France until the 14th century. Built between 1238 and 1248, the chapel was commissioned by King Louis IX of France to house his collection of relics of the Passio\n[…]\nThe sacred relics were dispersed, although the Crown of Thorns and some others survived, now kept as the Relics of Sainte-Chapelle in the treasury of Notre-Dame de Paris. Various reliquaries, including the grande châsse, were melted down for their precious metal.\n[…]\nThe Sainte-Chapelle's most obvious architectural precursors include the apsidal chapels of Amiens Cathedral, which it resembles in its general form, and the Bishop's Chapel (c. 1180s) of Noyon Cathedral, from which it borrowed the two-story design. a major influence on its overall design may have come from contemporary metalwork, particularly the precious shrines and reliquaries made by Mosan goldsmiths.\n[…]\nTwo years later, he made an additional purchase from Baudouin of a piece of the True Cross and other relics related to the Passion, which were brought to Paris in September 1241. Thereafter, on each Holy Friday, the day of the Crucifixion, he conducted a solemn ceremony at Sainte-Chapelle, in which the relic was brought out and displayed to the faithful.\n[…]\nChâteau de Saint-Germain-en-Laye: Founded c. 1238. The Sainte-Chapelle in Paris was likely influenced by this chapel, not vice-versa.\n[…]\nSaint-Germer-de-Fly Abbey: A very similar structure, also called the Sainte-Chapelle, was erected twelve years after the Paris chapel as an addition to the abbey church.\n[…]\nHistoric Chapels of Paris\n[…]\nLady Leng Memorial Chapel\n[…]\nGebelin, F. (1937) La Sainte Chapelle et la Conciergerie. Paris.\n[…]\nInformative Article From 1921 On Sainte Chapelle"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sainte-Chapelle",
        "situacao": "ok",
        "texto": "A Sainte-Chapelle é uma capela gótica situada na Île de la Cité em Paris, construída no século XIII por Luís IX (São Luís). Foi projectada em 1241, iniciada em 1246 e concluída muito rapidamente, sendo consagrada em abril de 1248. O seu patrono foi o devoto rei francês Luís IX, que a construiu para servir de capela do palácio real. O restante do palácio desapareceu completamente, sendo substituído\n[…]\nDepois de terminada, a Sainte-Chapelle carecia de santificação pela presença de relíquias apropriadas e, assim, obteve-se a coroa de espinhos de Cristo, obtidas do imperador latino de Constantinopla, Balduíno II, pela exorbitante soma de 135.000 libras. Para ter uma ideia de relatividade, a construção de toda a capela custou 45.000 libras. Além de outras relíquias, acrescentou-se ainda um fragmento da Vera Cruz e, desta forma, o edifício tornou-se um precioso relicário.\n[…]\nConsiste de duas capelas sobrepostas, a inferior reservada aos funcionários e moradores do palácio, e a superior para a família real. A ideia de uma capela palaciana se baseou na Igreja da Virgem de Pharos, anexa ao Grande Palácio de Constantinopla, onde estavam as relíquias saqueadas pelo Império Latino durante a ocupação da capital do Império Bizantino (1204–1261).\n[…]\nDurante a Revolução Francesa a capela foi transformada em escritório administrativo e os vitrais foram tapados com enormes armários. A sua beleza oculta foi assim inadvertidamente preservada do vandalismo que sofreu em outras partes, tendo sido destruídos os assentos do coro e o painel do altar principal, o pináculo do tecto deitado abaixo e muitas das suas relíquias dispersas. No século XIX, Viollet-le-Duc restaurou a Sainte-Chapelle, e o pináculo actual é obra sua.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Guerra dos Cem Anos",
      "descricao": "Série de conflitos entre os reinos da Inglaterra e da França, de 1337 a 1453."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "A Guerra dos Cem Anos começou em 1337, quando o rei inglês Eduardo Terceiro passou a reivindicar o quê?",
    "resposta": "O trono da França",
    "distratores": [
      "O trono da Escócia",
      "A posse de Flandres",
      "O papado de Avignon"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Hundred_Years%27_War"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hundred_Years%27_War",
        "situacao": "ok",
        "texto": "The Hundred Years' War (French: Guerre de Cent Ans; 1337–1453) was a series of conflicts between the kingdoms of England and France, and a civil war in France during the late Middle Ages. It emerged from feudal disputes over the Duchy of Aquitaine and was triggered by a claim to the French throne made by Edward III of England. The war grew into a broader military, economic, and political struggle \n[…]\nThe term \"Hundred Years' War\" was adopted by later historians and included dynastically related conflicts in Spain and Belgium, resulting in the longest military conflict in European history. The war is commonly divided into three phases, separated by truces: the Edwardian War (1337–1360), the Caroline War (1369–1389), and the Lancastrian War (1415–1453).\n[…]\nGreen, David (2014). The Hundred Years War: a people's history. New Haven: Yale University Press. ISBN 978-0-300-13451-3.\n[…]\nSeward, Desmond (2003). A brief history of the Hundred Years War: the English in France, 1337 - 1453 (Rev. ed.). London: Robinson. ISBN 978-1-84119-678-7.\n[…]\n— (1999). The Hundred Years War II: Trial by Fire. University of Pennsylvania Press. ISBN 0-571-13896-9.; paperback (2001) ISBN 0-571-20737-5\n[…]\n— (2009). The Hundred Years War III: Divided Houses. University of Pennsylvania Press. ISBN 978-0-571-13897-5.\n[…]\n— (2015). The Hundred Years War IV: Cursed Kings. University of Pennsylvania Press. ISBN 978-0-571-27454-3.\n[…]\n— (2023). The Hundred Years War V: Triumph and Illusion. Faber & Faber. ISBN 978-0571274574.\n[…]\nThe Hundred Years War and the History of Navarre\n[…]\n\"Timeline of the Hundred Years War\". Archived from the original on 26 March 2017.\n[…]\nThe Hundred Years' War (1336–1565) by Lynn H. Nelson, University of Kansas Emeritus\n[…]\nJean Froissart, \"On The Hundred Years War (1337–1453)\" from the Internet Medieval Sourcebook\n[…]\nOnline database of Soldiers serving in the Hundred Years War. University of Southampton and University of Reading."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Guerra_dos_Cem_Anos",
        "situacao": "ok",
        "texto": "A Guerra dos Cem Anos foi uma série de conflitos travados entre os reinos da Inglaterra e da França durante o final da Idade Média. Originou-se de reivindicações inglesas ao trono francês entre a Casa Real Inglesa de Plantageneta e a Casa Real Francesa de Valois. Com o tempo, a guerra se transformou em uma luta de poder mais ampla envolvendo facções de toda a Europa Ocidental, alimentada pelo naci\n[…]\nAs propriedades inglesas na França variavam em tamanho, em alguns pontos superando até mesmo o Domínio Real Francês; em 1337, no entanto, apenas a Gasconha era inglesa.\n[…]\nQuando Carlos IV da França morreu, Eduardo III havia reivindicado a sucessão do trono francês, por direito de sua mãe Isabel (irmã de Carlos IV), filha de Filipe IV da França. Qualquer reivindicação foi considerada invalidada pela homenagem de Eduardo III a Filipe VI em 1329. Eduardo III reviveu sua reivindicação e em 1340 assumiu formalmente o título de 'Rei da França e as Armas Reais Francesas'.\n[…]\nEduardo III da Inglaterra invadiu a França, pela terceira e última vez, na esperança de capitalizar o descontentamento e tomar o trono. A estratégia do Delfim da França era a de não envolvimento com o exército inglês em campo. No entanto, Eduardo III queria a coroa e escolheu a cidade catedral de Reims para sua coroação (Reims era a cidade tradicional da coroação). No entanto, os cidadãos de Reims construíram e reforçaram as defesas da cidade antes da chegada de Eduardo III e seu exército.\n[…]\nA Guerra dos Cem Anos quase recomeçou em 1474, quando Carlos, Duque da Borgonha, contando com o apoio inglês, pegou em armas contra Luís XI da França. Luís XI conseguiu isolar os borgonheses comprando Eduardo IV da Inglaterra com uma grande soma em dinheiro e uma pensão anual, no Tratado de Picquigny (1475). O tratado encerrou formalmente a Guerra dos Cem Anos com Eduardo IV renunciando sua reivindicação ao trono da França.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Pólvora",
      "descricao": "Mistura explosiva de salitre, enxofre e carvão inventada na China medieval."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Segundo a história mais aceita, alquimistas chineses chegaram à pólvora por volta do século nove enquanto procuravam o quê?",
    "resposta": "Elixir da imortalidade",
    "distratores": [
      "Um novo corante",
      "Combustível para lampiões",
      "Veneno para ratos"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Gunpowder"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Gunpowder",
        "situacao": "ok",
        "texto": "Gunpowder, referred to as black powder to distinguish it from modern smokeless powder, is the earliest known chemical explosive. It consists of a mixture of sulfur, charcoal (which is mostly carbon), and potassium nitrate (saltpeter). The sulfur and charcoal act as fuels, while the saltpeter is an oxidizer.\n[…]\nAccording to the Zhenyuan miaodao yaolüe, \"Some have heated together sulfur, realgar and saltpeter with honey; smoke and flames result, so that their hands and faces have been burnt, and even the whole house where they were working burned down.\" Based on these Taoist texts, the invention of gunpowder by Chinese alchemists was likely an accidental byproduct from experiments seeking to create the elixir of life.\n[…]\nCannons were introduced to Majapahit when Kublai Khan's Chinese army under the leadership of Ike Mese sought to invade Java in 1293. The History of Yuan mentions that the Mongol used cannons (Chinese: 炮—Pào) against Daha forces. Cannons were used by the Ayutthaya Kingdom in 1352 during its invasion of the Khmer Empire. Within a decade large quantities of gunpowder could be found in the Khmer Empire. By the end of the century firearms were also used by the Trần dynasty.\n[…]\nAnother major area of contention in modern studies of the history of gunpowder is regarding the transmission of gunpowder. While the literary and archaeological evidence supports a Chinese origin for gunpowder and guns, the manner in which gunpowder technology was transferred from China to the West is still under debate.\n[…]\nOare Gunpowder Works, Kent, UK[link removed]\n[…]\nRoyal Gunpowder Mills\n[…]\n\"Ulrich Bretschler's Gunpowder Chemistry page\". Retrieved 1 May 2007.{{cite web}}:  CS1 maint: deprecated archival service (link)\n[…]\nVideo Demonstration of the Medieval Siege Society's Guns, Including showing ignition of gunpowder"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/P%C3%B3lvora",
        "situacao": "ok",
        "texto": "A pólvora é a designação genérica de qualquer mistura de substâncias pouco explosivas, que queima com rapidez, usada como carga propelente em armas de fogo, ou agentes explosivos em atividades de mineração ou desobstrução, e também em fogos de artifício. Historiadores creditam a descoberta aos chineses, que teria ocorrido acidentalmente por volta do século IX, pois no ano 1000 os chineses usavam a\n[…]\nDe acordo com o Zhenyuan miaodao yaolüe, \"alguns aqueceram juntos enxofre, realgar e salitre com mel; resultam fumaça e chamas, de modo que suas mãos e rostos foram queimados, e até toda a casa onde estavam trabalhando queimada\".Com base nesses textos taoístas, a invenção da pólvora pelos alquimistas chineses provavelmente foi um subproduto acidental de experimentos que tentavam criar o elixir da vida.\n[…]\nOutra área importante de discórdia nos estudos modernos da história da pólvora é a transmissão da pólvora. Enquanto as evidências literárias e arqueológicas apoiam uma origem chinesa da pólvora e armas relacionadas, ainda está em debate a maneira pela qual a tecnologia da pólvora foi transferida da China para o Ocidente.\n[…]\nEm meados do século XIX, foram feitas medições determinando que a taxa de queima de um grão de \"pólvora negra\" (ou uma massa compactada) é de cerca de 6 cm/s (0,20 pés/s), enquanto a taxa de propagação da ignição de um grão para outro é de cerca de 9 m/s (30 pés/s), mais de duas ordens de grandeza mais rápida.\n[…]\nComo a \"pólvora negra\", eles foram produzidos em diferentes tamanhos de grãos. No Reino Unido, o grão mais fino era conhecido como \"sulfur-free gunpowder\" (SMP). Os grãos mais grossos foram numerados como pólvora sem enxofre (SFG n): 'SFG 12', 'SFG 20', 'SFG 40' e 'SFG 90', por exemplo; onde o número representa a menor malha da peneira BSS, que não retém nenhum grão.\n[…]\nPartington, J.R. (1960), A History of Greek Fire and Gunpowder, Cambridge: W. Heffer & Sons .",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Quarta Cruzada",
      "descricao": "Cruzada de 1202 a 1204 que, desviada de seu objetivo, terminou no saque de Constantinopla."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "No saque de Constantinopla pela Quarta Cruzada, em 1204, os venezianos levaram para casa quatro famosas estátuas de bronze. Que animais elas representam?",
    "resposta": "Cavalos",
    "distratores": [
      "Leões",
      "Touros",
      "Águias"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Horses_of_Saint_Mark"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Horses_of_Saint_Mark",
        "situacao": "ok",
        "texto": "The Horses of Saint Mark (Italian: Cavalli di San Marco), also known as the Triumphal Quadriga or the Horses of the Hippodrome of Constantinople, are a group of ancient bronze statues of four horses that originally formed part of a monument depicting a quadriga — a four-horse chariot used in chariot racing and Roman triumphs.\n[…]\nThe horses were placed on the façade, on the loggia above the porch, of St Mark's Basilica in Venice, northern Italy, after the sack of Constantinople in 1204. They remained there until they were looted by Napoleon in 1797, but were returned in his final defeat in 1815. The original sculptures have since been moved indoors for conservation, with replicas now occupying their former position on the loggia.\n[…]\nThe horses, along with the quadriga with which they were depicted, were long displayed at the Hippodrome of Constantinople; they may be the \"four gilt horses that stand above the Hippodrome\" that \"came from the island of Chios under Theodosius II\" mentioned in the 8th- or early 9th-century Parastaseis syntomoi chronikai. As part of the sack of the capital of the Byzantine Empire in the Fourth Crusade, they were looted by Venetian forces in 1204.\n[…]\nThat same year, the collars on the four horses were added to obscure where the animals' heads had been severed to allow them to be transported from Constantinople to Venice. Shortly after the Fourth Crusade, Doge Enrico Dandolo sent the horses to Venice, where they were installed on the terrace of the façade of St Mark's Basilica in 1254. Petrarch admired them there.\n[…]\nByzantium 1200 Hippodrome Boxes shows the location of the horses until 1204."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cavalos_de_S%C3%A3o_Marcos",
        "situacao": "ok",
        "texto": "Os Cavalos de São Marcos, também conhecidos como Cavalos de bronze de Constantino, são quatro estátuas de cavalos em bronze, formando uma quadriga, feitas no século IV a.C. e atribuídas ao escultor grego Lísipo. Atualmente se encontram na Basílica de São Marcos, em Veneza.\n[…]\nAs quatro estátuas são atribuídas por Plínio, o Velho ao escultor Lísipo. No século II, o imperador Trajano as transportou para Roma, onde foram instaladas sobre o Arco de Trajano.\n[…]\nNo século IV, o imperador Constantino as teria enviado para Constantinopla, nova capital do império, onde ornamentaram o Hipódromo de Constantinopla, construído em 203.\n[…]\nEm 1204, Enrico Dandolo, doge de Veneza se apoderou dos cavalos durante o saque de Constantinopla pela Quarta Cruzada e os transportou de volta para a península Itálica. Foram então instalados na fachada da Basílica de São Marcos.\n[…]\nAinda outro imperador se envolveria com os cavalos de bronze. Napoleão Bonaparte, então general chefe do exército que invadiu a península Itálica em nome do diretório, na sua primeira campanha (1796-1797), tomou Veneza e levou as estátuas para Paris, onde foram colocadas no Arco do Triunfo do Carrossel construído entre 1807 e 1809. Após a Batalha de Waterloo e a queda de Napoleão, os saques foram devolvidos a Veneza e à praça de São Marcos em 1815. No topo do arco foram colocadas réplicas.\n[…]\nNa década de 1980, os cavalos originais foram colocados no museu da basílica e substituídos na fachada por réplicas, para proteger da poluição atmosférica.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Haroldo Dente-Azul",
      "descricao": "Rei da Dinamarca no século dez, que cristianizou os dinamarqueses e é lembrado nas pedras rúnicas de Jelling."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "O símbolo da tecnologia Bluetooth junta duas runas nórdicas. Elas equivalem a que letras, iniciais do rei Haroldo Dente-Azul?",
    "resposta": "H e B",
    "distratores": [
      "B e T",
      "H e D",
      "R e B"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Bluetooth"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bluetooth",
        "situacao": "ok",
        "texto": "Bluetooth is a short-range wireless technology standard that is used for exchanging data between fixed and mobile devices over short distances and building personal area networks (PANs). In the most widely used mode, transmission power is limited to 2.5 milliwatts, giving it a very short range of up to 10 metres (33 ft). It employs UHF radio waves in the ISM bands, from 2.402 GHz to 2.48 GHz.\n[…]\nThe name \"Bluetooth\" was proposed in 1997 by Jim Kardach of Intel, one of the founders of the Bluetooth SIG. The name was inspired by a conversation with Sven Mattisson, who related Scandinavian history through tales from Frans G. Bengtsson's The Long Ships, a historical novel about Vikings and the 10th-century Danish king Harald Bluetooth.\n[…]\nUpon discovering a picture of the runestone of Harald Bluetooth in the book A History of the Vikings by Gwyn Jones, Kardach proposed Bluetooth as the codename for the short-range wireless program.\n[…]\nBluetooth is the Anglicised version of the Scandinavian Blåtand/Blåtann (or in Old Norse blátǫnn). It was the epithet of King Harald Bluetooth, who united the disparate\n[…]\nThe Bluetooth logo is a bind rune merging the Younger Futhark runes  (ᚼ, Hagall) and  (ᛒ, Bjarkan), Harald's initials.\n[…]\nIn a single-mode implementation, only the low energy protocol stack is implemented. Dialog Semiconductor, STMicroelectronics, AMICCOM, CSR, Nordic Semiconductor and Texas Instruments have released single mode Bluetooth Low Energy solutions.\n[…]\nBluetooth LE Isochronous Parameter Update (IPU)\n[…]\nThe Bluetooth Innovation World Cup morphed into the Bluetooth Breakthrough Awards in 2013. Bluetooth SIG subsequently launched the Imagine Blue Award in 2016 at Bluetooth World. The Bluetooth Breakthrough Awards program highlights the most innovative products and applications available today, prototypes coming soon, and student-led projects in the making.\n[…]\nSpecifications at Bluetooth SIG"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bluetooth",
        "situacao": "ok",
        "texto": "Bluetooth é um padrão de tecnologia sem fio de curto alcance usado para troca de dados entre dispositivos fixos e móveis em distâncias curtas e construção de redes de área pessoal (PANs). No modo mais utilizado, a potência de transmissão é limitada a 2,5 miliwatts, proporcionando um alcance muito curto de até 10 metros (33 pés). Emprega ondas de rádio UHF nas bandas ISM, de 2,402 GHz a 2,48 GHz.\n[…]\nAo descobrir uma imagem da pedra rúnica de Harald Bluetooth no livro A History of the Vikings de Gwyn Jones, Jim propôs Bluetooth como o codinome para o programa sem fio de curto alcance que agora é chamado de Bluetooth.\n[…]\nBluetooth é a versão anglicizada do escandinavo Blåtand / Blåtann (ou em nórdico antigo blátǫnn). Era o epíteto do rei Harald Bluetooth, que uniu as diferentes tribos dinamarquesas em um único reino; Kardach escolheu o nome para sugerir que o Bluetooth une protocolos de comunicação de maneira semelhante.\n[…]\nO logotipo Bluetooth  é uma runa vinculada que mescla as runas Younger Futhark  (ᚼ, Hagall) e  (ᛒ, Bjarkan), as iniciais de Harald.\n[…]\nO desenvolvimento da tecnologia de rádio \"short-link\", mais tarde denominada Bluetooth, foi iniciado em 1989 por Nils Rydbeck, CTO da Ericsson Mobile em Lund, Suécia. O objetivo era desenvolver fones de ouvido sem fio, de acordo com duas invenções de Johan Ullman. Nils Rydbeck encarregou Tord Wingren de especificar e o holandês Jaap Haartsen e Sven Mattisson de desenvolver. Ambos trabalhavam para a Ericsson em Lund.\n[…]\nA Bluetooth Innovation World Cup, uma iniciativa de marketing do Bluetooth Special Interest Group (SIG), foi uma competição internacional que incentivou o desenvolvimento de inovações para aplicações que utilizam a tecnologia Bluetooth em produtos esportivos, fitness e de saúde. A competição visava estimular novos mercados.\n[…]\nhttps://rz1.com.br/  Bluetooth: A Tecnologia Sem Fios Que Conectou o Mundo«Página oficial»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Abadia de Westminster",
      "descricao": "Igreja anglicana gótica em Westminster, Londres, local das coroações dos monarcas ingleses."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Que pedra, tirada da Escócia pelo rei inglês Eduardo Primeiro em 1296, ficou por séculos embaixo do trono de coroação da Abadia de Westminster?",
    "resposta": "Pedra do Destino",
    "distratores": [
      "Pedra de Roseta",
      "Pedra de Blarney",
      "Pedra Filosofal"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Stone_of_Scone"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Stone_of_Scone",
        "situacao": "ok",
        "texto": "The Stone of Scone (; Scottish Gaelic: An Lia Fàil, meaning Stone of Destiny, also called clach-na-cinneamhuinn; Scots: Stane o Scone) is an oblong block of red sandstone that was used in the coronation of Scottish monarchs until the 13th century when it was seized by Edward I during the First War of Scottish Independence and taken to England. Thereafter, it was used in the coronation of English a\n[…]\nOther traditions contend that the Lia Fáil remains at Tara. Inis Fáil, \"The Island of Destiny,\" is one of the traditional names of Ireland. Other legends place the origins of the Stone in Biblical times and identify it as the Stone of Jacob, taken by Jacob from Bethel while on the way to Haran (Genesis 28:10–22). This same Stone of Jacob was then supposedly taken to ancient Ireland by the prophet Jeremiah.\n[…]\nIn 1296, during the First Scottish War of Independence, Edward I of England took the stone as spoils of war and removed it to Westminster Abbey, where it was fitted into a wooden chair – known as the Coronation Chair or King Edward's Chair – on which most subsequent English and then British sovereigns have been crowned. Edward I sought to claim the status of the \"Lord Paramount\" of Scotland, with the right to oversee its King.\n[…]\nIn the 1944 novel The North Wind of Love, Book One – the fifth book in the series The Four Winds of Love – the Scottish writer Compton Mackenzie imagines a romantic nationalist conspiracy in which a group of young Scottish idealists plot to remove the Stone of Destiny from Westminster Abbey. The real-life theft of the stone in 1950 could have been motivated by Mackenzie's fictional account.\n[…]\nThe Stone of Destiny at the Perth Museum\n[…]\nThe Stone of Destiny; Archived 28 September 2011 at the Wayback Machine, sacred kingship in the 21st century"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pedra_da_Coroa%C3%A7%C3%A3o",
        "situacao": "ok",
        "texto": "A Pedra da Coroação também conhecida como Pedra de Scone (em inglês:  Stone of Scone, em gaélico escocês:   An Lia Fàil, em anglo-escocês/ânglico escocês:  Stane o Scuin), ou Pedra Fadada (em inglês:  Stone of Destiny) é um bloco oblongo de arenito vermelho que foi usada durante séculos na coroação dos monarcas da Escócia, e mais tarde dos monarcas da Inglaterra e do Reino da Grã-Bretanha.\n[…]\nHistoricamente, o artefato foi mantido na agora em ruínas Abadia de Scone, perto de Perth, na Escócia. Ele também é conhecido como Pedra de Jacó (o bétilo usado pelo patriarca como apoio para cabeça quando teve seu sonho) e Tanist Stone, e em gaélico escocês, Clach-na-cinneamhain. O seu tamanho é de cerca de 660 milímetros (26 polegadas) por 425 milímetros  (16,75 polegadas)  por 270 milímetros (10,5 polegadas) e o seu peso é de cerca de 152 kg (336 £).\n[…]\nA pedra, usada na coroação dos reis da Escócia no século XIII, foi capturada e levada da Escócia para a Inglaterra em 1296.\n[…]\nPassou a ser usada na cerimónia de coroação dos monarcas do Reino Unido, durante a qual a pedra é colocada no interior da cadeira de coroação em que o monarca se senta.\n[…]\nA Pedra da Coroação foi usada em 1953 para a Coroação de Isabel II do Reino Unido.\n[…]\nA pedra permaneceu em Londres até 1996 quando foi levada para o Castelo de Edimburgo.\n[…]\nFoi novamente usada em 6 de Maio de 2023 na Coroação de Carlos III do Reino Unido.\n[…]\nPedra fadada",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Manuscrito de Beowulf",
      "descricao": "Manuscrito Nowell Codex, de cerca do ano mil, que contém o poema épico em inglês antigo Beowulf."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "No poema anglo-saxão Beowulf, o herói vence o monstro Grendel e a mãe dele. Já velho, que criatura ele enfrenta na última batalha?",
    "resposta": "Um dragão",
    "distratores": [
      "Um gigante",
      "Uma serpente marinha",
      "Um lobo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Beowulf"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Beowulf",
        "situacao": "ok",
        "texto": "Beowulf ( ; Old English: Bēowulf [ˈbeːo.wuɫf]) is an Old English poem, an epic in the tradition of Germanic heroic legend consisting of 3,182 alliterative lines, contained in the Nowell Codex. It is one of the most important and most often translated works of Old English literature. The date of composition is a matter of contention among scholars; the only certain dating is for the manuscript, whi\n[…]\nThe poem is known only from a single manuscript, estimated to date from around 975–1025, in which it appears with other works. The manuscript therefore dates either to the reign of Æthelred the Unready, characterised by strife with the Danish king Sweyn Forkbeard, or to the beginning of the reign of Sweyn's son Cnut the Great from 1016. The Beowulf manuscript is known as the Nowell Codex, gaining its name from 16th-century scholar Laurence Nowell.\n[…]\nThe Reverend Thomas Smith (1638–1710) and Humfrey Wanley (1672–1726) both catalogued the Cotton library (in which the Nowell Codex was held). Smith's catalogue appeared in 1696, and Wanley's in 1705. The Beowulf manuscript is identified by name for the first time in an exchange of letters in 1700 between George Hickes, Wanley's assistant, and Wanley.\n[…]\nThe second scribe was ultimately the more conservative copyist as he did not modify the spelling of the text as he wrote, but copied what he saw in front of him. In the way that it is currently bound, the Beowulf manuscript is followed by the Old English poem Judith. Judith was written by the same scribe that completed Beowulf, as evidenced by similar writing style.\n[…]\nIn 2000 (2nd edition 2013), Liuzza published his own version of Beowulf in a parallel text with the Old English, with his analysis of the poem's historical, oral, religious and linguistic contexts. R. D. Fulk, of Indiana University, published a facing-page edition and translation of the entire Nowell Codex manuscript in 2010."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Beowulf",
        "situacao": "ok",
        "texto": "Beowulf é um poema épico, escrito em língua anglo-saxã, por autor desconhecido, possivelmente no século VIII, cujo único manuscrito existente está datado ca. 1 000. Escrito em 3 182 linhas, com o emprego de aliteração, é o poema mais longo do pequeno conjunto da literatura anglo-saxã, e um marco da literatura medieval. Aborda eventuais acontecimentos e personagens da Dinamarca, e em menor grau do \n[…]\nO poema está centrado nos feitos de Beowulf, herói da tribo dos gēatas – talvez identificáveis com os Gautas da Gotalândia (Suécia) ou os Gutas da ilha da Gotlândia – que com sua excepcional força e coragem livra os dinamarqueses da ameaça de dois monstros diabólicos e, já coroado rei do seu povo, combate e mata um dragão, numa batalha que acaba por custar-lhe a vida.\n[…]\nCinquenta anos após ser entronado, Beowulf necessita livrar seu reino de um dragão, que fora despertado por um servo que roubara uma taça do seu tesouro ancestral, guardado sob a terra numa mamoa (um monte funerário feito pelo homem). Beowulf, munido de uma espada (a espada que reza a lenda é a de Excalibur que retornou a Avalone ficou com um formato diferente) e um escudo de ferro, entra na caverna onde se encontra o tesouro e o dragão cuspidor de fogo, travando com ele uma feroz batalha.\n[…]\nWiglaf, o mais fiel dos seus guerreiros, entra na caverna e ajuda o rei a matar a criatura, derrubada por uma estocada fatal de Beowulf. Esta termina sendo a última aventura do herói, que morre devido às terríveis feridas causadas pelo monstro. O poema termina com o funeral de Beowulf, que é enterrado com o tesouro numa mamoa num monte junto ao mar, de onde os navegantes a pudessem ver.\n[…]\nMãe de Grendel: Um monstro fêmea que jura vingança aos dinamarqueses ao ver seu filho morto por Beowulf\n[…]\nViglafo: O mais fiel dos guerreiros de Beowulf, ajuda-o a matar o dragão\n[…]\nBeowulf (herói)\n[…]\nBeowulf & Grendel (2005)\n[…]\nVersão digitalizada do manuscrito",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Ordem dos Templários",
      "descricao": "Ordem militar cristã fundada em Jerusalém por volta de 1119 e extinta pelo papa em 1312."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Depois do processo contra os templários, o último grão-mestre da ordem foi queimado numa ilha do rio Sena, em Paris, em 1314. Quem era ele?",
    "resposta": "Jacques de Molay",
    "distratores": [
      "Hugo de Payens",
      "Guilherme de Nogaret",
      "Bernardo de Claraval"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Jacques_de_Molay"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Jacques_de_Molay",
        "situacao": "ok",
        "texto": "Jacques de Molay (French: [də mɔlɛ]; c. 1240–1250 – 11 or 18 March 1314), also spelled \"Molai\", was the 23rd and last grand master of the Knights Templar, leading the order sometime before 20 April 1292 until it was dissolved by order of Pope Clement V in 1312. Though little is known of his actual life and deeds except for his last years as Grand Master, he is one of the best known Templars.\n[…]\nOf Molay's death, Henry Charles Lea gives this account: \"The cardinals dallied with their duty until 18 March 1314, when, on a scaffold in front of Notre Dame, Jacques de Molay, Templar Grand Master, Geoffroi de Charney, Master of Normandy, Hugues de Peraud, Visitor of France, and Godefroi de Gonneville, Master of Aquitaine, were brought forth from the jail in which for nearly seven years they had lain, to receive the sentence agreed upon by the cardinals, in conjunction with the Archbishop of Sens and some other prelates whom they had called in.\n[…]\nIt has been claimed that Jacques de Molay cursed King Philip IV of France and his descendants from his execution pyre. However, the story of the shouted curse appears to be a combination of words by a different Templar and those of Molay. An eyewitness to the execution stated that Molay had shown no sign of fear and had told those present that God would avenge their deaths.\n[…]\n\"Jacques de Molay\". The Catholic Encyclopedia. Retrieved 8 January 2010.\n[…]\nDemurger, Alain (2004). The Last Templar – The Tragedy of Jacques de Molay, Last Grand Master of the Temple (Translated into English by Antonia Nevill), Profile Books LTD, ISBN 1-86197-529-5 (First publication in France in 2002 as Jacques de Molay: le crépuscule des templiers by Éditions Payot & Rivages).\n[…]\nRalls, Karen (2012). The Templars and the Grail: Knights of the Quest. Quest Books. ISBN 978-0835630115.\n[…]\nJacques de Molay's Site of Execution\n[…]\nJacques de Molay in Medieval History of Navarre"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jacques_de_Molay",
        "situacao": "ok",
        "texto": "Jacques de Molay, por vezes também chamado Tiago de Molay, (em latim: Iacobus Burgundus; em francês: Jacques de Molay ; (Pronúncia: [ʒak də mɔlɛ] Jak Demolé); Molay, 1244 – Paris, 18 de março de 1314) foi um religioso e militar francês, e o último grão-mestre da Ordem dos Cavaleiros Templários. Nascido em Molay, pertencia a uma família da pequena nobreza francesa, É hoje o patrono da Ordem DeMolay\n[…]\nDia 13 de outubro de 1307 no Reino da França, os templários foram presos em massa por ordem de Filipe IV, o rei de França. O grão-mestre Jacques de Molay é capturado em Paris. Imediatamente após a prisão, Guilherme de Nogaret proclama publicamente nos jardins do palácio real em Paris as acusações contra a ordem.\n[…]\nAo ver que o processo estava ficando fora do seu controle e estando a absolvição da ordem ainda pendente, Filipe IV, o Belo, decide um golpe de mão para que a questão templária fosse terminada. Ordena o rapto de Jacques de Molay e de Godofredo de Charnay, então sob a custódia da comissão de bispos, e ordena que sejam queimados numa fogueira na Ilha da Cidade, pouco depois das vésperas, em 18 de março de 1314.\n[…]\nApesar da absolvição, os dirigentes templários permaneceram presos até 1314, quando Jacques de Molay foi queimado vivo em Paris. O documento foi divulgado oficialmente pelo Vaticano em 2007 e revelou que o papa havia absolvido os líderes da Ordem antes de sua extinção, em 1312. O achado apresentado questiona a aparente contradição entre essa absolvição e os acontecimentos posteriores.\n[…]\nExiste a lenda de que durante sua morte Jacques de Molay jogou uma maldição sobre Filipe IV, o Belo e o Clemente V. O papa Clemente V morreu quarenta e dois dias depois, dia 20 de abril de 1314, já o rei Filipe IV, teve um derrame cerebral fulminante em 29 de novembro de 1314, seis meses depois da morte do mestre templário.\n[…]\nJacques de Molay no sítio da Internet The New Advent.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Guarda Varegue",
      "descricao": "Tropa de elite que servia de guarda pessoal aos imperadores bizantinos entre os séculos dez e quatorze."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Guerreiros nórdicos que serviam aos imperadores bizantinos deixaram nomes riscados em runas num parapeito de que grande templo de Constantinopla?",
    "resposta": "Hagia Sophia",
    "distratores": [
      "Santa Irene",
      "Igreja de Chora",
      "Santos Apóstolos"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Hagia_Sophia",
      "https://en.wikipedia.org/wiki/Varangian_Guard"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hagia_Sophia",
        "situacao": "ok",
        "texto": "Hagia Sophia, officially the Hagia Sophia Grand Mosque, is a mosque and a major cultural and historical site in Istanbul, Turkey. It was formerly a church (360–1453) and a museum (1935–2020). The last of three church buildings to be successively erected on the site by the Eastern Roman Empire, it was completed in AD 537, becoming the world's largest interior space and among the first to employ a f\n[…]\nAn edition of lithographs from drawings made during the Fossatis' work on Hagia Sophia was published in London in 1852, entitled: Aya Sophia of Constantinople as Recently Restored by Order of H.M. The Sultan Abdulmejid.\n[…]\nThe northern first floor gallery contains runic graffiti believed to have been left by members of the Varangian Guard. Structural damage caused by natural disasters is visible on the Hagia Sophia's exterior surface. To ensure that the Hagia Sophia did not sustain any damage on the interior of the building, studies have been conducted using ground penetrating radar within the gallery of the Hagia Sophia.\n[…]\nGuillaume-Joseph Grelot, who had travelled to Constantinople, in 1672 engraved and in 1680 published in Paris an image of the interior of Hagia Sophia which shows the apse mosaic indistinctly. Together with a picture by Cornelius Loos drawn in 1710, these images are early attestations of the mosaic before it was covered towards the end of the 18th century.\n[…]\nSerious damage was done to the building by earthquakes in the 14th century, and it is possible that a standing image of the Virgin that existed in Photius's time was lost in the earthquake of 1346, in which the eastern end of Hagia Sophia was partly destroyed. This interpretation supposes that the present mosaic of the Virgin and Child enthroned is of the late 14th century, a time in which, beginning with Nilus of Constantinople (r.\n[…]\nHagia Sophia Museum, Republic of Turkey, Ministry of Culture & Tourism"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Varangian_Guard",
        "situacao": "ok",
        "texto": "The Varangian Guard (Greek: Τάγμα τῶν Βαράγγων, romanized: Tágma tōn Varángōn) was an elite unit of the Byzantine army from the 10th to the 14th century who served as personal bodyguards to the Byzantine emperors. The Varangian Guard was known for being primarily composed of recruits from Northern Europe, including mainly Norsemen from Scandinavia but also Anglo-Saxons from England.\n[…]\nThis privilege, says Sturluson, enabled many Varangians to return home as wealthy men, which encouraged even more Scandinavians to enlist in the Guard in Miklagarðr (Swedish = Miklagård = 'The Great City', i.e. Constantinople). However, polutasvarf is not mentioned in Byzantine sources and modern historians doubt its veracity.\n[…]\nTravelling to Constantinople via Denmark, he spent many years in the Varangian Guard, \"and was thought to be the most valiant in all deeds that try a man, and always went next to those in the forefront.\" The saga also records the finery his followers received from the Emperor, and the influence he held after his return to Iceland:\n[…]\nThe Varangian Guard is mentioned also in Njal's Saga in reference to Kolskegg—an Icelander said to have come first to Holmgard (Novgorod) and then on to Miklagard (Constantinople), where he entered the Emperor's service. \"The last that was heard of him was, that he had wedded a wife there, and was captain over the Varangians, and stayed there till his death day.\"\n[…]\nOne of the members of the Varangian Guard was the future king Harald Sigurdsson III of Norway, known as Harald Hardråde (\"Hard-ruler\"). Having fled his homeland, Harald went first to Gardariki and then on to Constantinople, where he arrived in 1035. He participated in eighteen battles and during his service fought against Arabs in Anatolia and Sicily under General George Maniakes, as well as in southern Italy and Bulgaria."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Santa_Sofia",
        "situacao": "ok",
        "texto": "Santa Sofia (em grego: Άγια Σοφία; romaniz.: Agia Sophia, que significa \"Sagrada Sabedoria\"; em turco: Ayasofya), oficialmente Grande Mesquita de Santa Sofia (em turco:  Ayasofya-i Kebir Cami-i Şerifi), é um imponente edifício construído entre 524 e 537 pelo Império Bizantino para ser a catedral de Constantinopla (atualmente Istambul, na Turquia).\n[…]\nEmbora ela seja chamada de \"Santa Sofia\" (como se tivesse sido dedicada em homenagem a Santa Sofia), sophia é a transliteração fonética em latim da palavra grega para \"sabedoria\" — o nome completo da igreja em grego é Ναός της Αγίας του Θεού Σοφίας, \"Igreja da Santa Sabedoria de Deus\".\n[…]\nInaugurada em 15 de fevereiro de 360 pelo bispo ariano Eudóxio de Antioquia, ela foi construída próxima da região onde o palácio imperial estava sendo construído. A igreja chamada Hagia Irene (\"Santa Paz\") foi completada antes e serviu como catedral até que Santa Sofia estivesse completada. As duas foram as principais igrejas do Império Bizantino.\n[…]\nO imperador mandou buscar materiais de construção de todo o império — colunas helênicas retiradas do Templo de Ártemis, em Éfeso (uma das Sete Maravilhas do Mundo), grandes blocos de pórfiro de pedreiras no Egito, mármores verdes da Tessália, pedras negras do Bósforo e amarelos da Síria. Mais de dez mil pessoas foram empregadas na construção. Esta nova igreja foi, ainda na época, reconhecida como um grande feito de engenharia e arquitetura.\n[…]\nSanta Sofia é um dos grandes exemplos ainda existentes da arquitetura bizantina. Seu interior, decorado com pilares de mármore e mosaicos é de grande valor artístico. O próprio imperador Justiniano supervisionou a finalização da maior catedral já construída na época. Ela foi a maior conquista arquitetônica da antiguidade tardia e sua influência se espalhou pelo mundo ortodoxo, católico e islâmico.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Kublai Khan",
      "descricao": "Neto de Gengis Khan e fundador da dinastia Yuan da China."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Kublai Khan ergueu na China uma capital que os mongóis chamavam de Khanbaliq, a cidade do khan. Que cidade é essa hoje?",
    "resposta": "Pequim",
    "distratores": [
      "Xangai",
      "Nanquim",
      "Xian"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Khanbaliq"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Khanbaliq",
        "situacao": "ok",
        "texto": "Dadu (Chinese: (元)大都; pinyin: (Yuán) Dàdū; Mongolian: ᠳᠠᠶ᠋ᠢᠳᠤ, Dayidu) or Khanbaliq (Chinese: 汗八里; pinyin: Hánbālǐ; Mongolian: ᠬᠠᠭᠠᠨ ᠪᠠᠯᠭᠠᠰᠤ, Qaɣan balɣasu) was the winter capital of the Mongol-led Yuan dynasty in what is now Beijing, the capital of China today. The Secretariat directly administered the Central Region (腹裏) of the Yuan dynasty (comprising present-day Beijing, Hebei, Shandong, Shanx\n[…]\nAs emperors of the Yuan dynasty, Kublai Khan and his successors also claimed supremacy over the entire Mongol Empire following the death of Möngke (Kublai's brother and predecessor) in 1259. Over time the unified empire gradually fragmented into a number of khanates.\n[…]\nIn 1264, Kublai Khan visited the Daming Palace on Jade Island in Taiye Lake and was so enchanted with the site that he directed his capital to be constructed around the garden. The chief architect and planner of the capital was Liu Bingzhong, who also served as supervisor of its construction. His student Guo Shoujing and the Muslim Ikhtiyar al-Din were also involved.\n[…]\nA year after the 1271 establishment of the Yuan dynasty, Kublai Khan proclaimed the city his capital under the name Dadu as it is interpreted capital city in Hanzi and named Khanbaliq as referred in the state diplomatic letters in Mongolian. The construction was not fully completed until 1293. His previous seat at Shangdu (Xanadu) became the summer capital.\n[…]\nKhanbaliq remained the standard name for Beijing in Persian and the Turkic languages of Central Asia and the Middle East for quite a long time. It was, for instance, the name used in both the Persian and Turkic versions of Ghiyāth al-dīn Naqqāsh's account of the 1419–22 mission of Shah Rukh's envoys to the Ming capital. The account remained one of the most detailed and widely read accounts of China in these languages for centuries."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cambalique",
        "situacao": "ok",
        "texto": "Cambalique ou Cambaluque é o antigo nome da cidade de Pequim (Beijing), atual capital da República Popular da China.\n[…]\nSob o nome de Zhongdu (中都, \"capital central\", pinyin: Zhōngdū), a cidade havia servido anteriormente como capital da dinastia Jin, porém foi incendiada em 1215 pelas forças mongóis. Em 1264, pouco antes de fundar a dinastia Yuan, Cublai Cã decidiu reconstruir a cidade como sua nova capital. Liu Bingzhong foi indicado como supervisor das obras, e Yeheidie'erding (Amir al-Din) projetou e comandou a sua construção.\n[…]\nA cidade passou a ser chamada de Beijim (北京, pinyin: Běijīng), ou Pequim (Peking) numa romanização obsoleta, nome pelo qual é conhecida até hoje - com exceção de um período curto da China Republicana, quando passou a ser conhecida novamente como Beipim. Ruínas de partes das antigas muralhas de Dadu, localizadas pouco ao norte das muralhas construídas posteriormente pela dinastia Ming ainda podem ser vistas na Pequim atual, e são conhecidas como Tucheng (土城, literalmente 'muralha de terra').\n[…]\nApesar da mudança do nome da cidade em chinês, o nome Cambalique continuou a ser usado pelos mongóis por séculos depois da queda da dinastia Yuan. Os russos se apropriaram do nome, e diversos documentos do século XVII referem-se a Pequim como Cambalique (Камбалык), como por exemplo no relato feito por Fyodor Baykov, enviado como embaixador à cidade na década de 1650.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Dante Alighieri",
      "descricao": "Poeta florentino, autor da Divina Comédia."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Exilado de Florença, Dante Alighieri morreu em 1321 em outra cidade italiana, onde está seu túmulo até hoje. Que cidade é essa?",
    "resposta": "Ravena",
    "distratores": [
      "Veneza",
      "Verona",
      "Bolonha"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Dante_Alighieri"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Dante_Alighieri",
        "situacao": "ok",
        "texto": "Dante Alighieri (Italian: [ˈdante aliˈɡjɛːri]; most likely baptized Durante di Alighiero degli Alighieri; c. May 1265 – September 14, 1321), widely known mononymously as Dante, was an Italian poet, writer, and philosopher. His Divine Comedy, originally called Comedìa (modern Italian: Commedia) and later christened Divina by Giovanni Boccaccio, is widely considered one of the most important poems o\n[…]\nDante claimed that his family descended from the ancient Romans (Inferno, XV, 76), but the earliest relative he could mention by name was his great-great-grandfather Cacciaguida degli Elisei (Paradiso, XV, 135), born no earlier than about 1100. Dante's father was Alighiero di Bellincione, a businessman and moneylender, and Dante's mother was Bella, probably a member of the Abati family, a noble Florentine family. She died when Dante was not yet ten years old.\n[…]\nDuring Dante's time, most Northern Italian city states were split into two political factions: the Guelphs, who supported the papacy, and the Ghibellines, who supported the Holy Roman Empire. Dante's family was loyal to the Guelphs. The Ghibellines took over Florence at the Battle of Montaperti in 1260, forcing out many of the Guelphs. Although Dante's family were Guelphs, they suffered no reprisals after the battle, probably because of Alighiero's low public standing.\n[…]\nIn 1310, Holy Roman Emperor Henry VII of Luxembourg marched into Italy at the head of 5,000 troops. Dante saw in him a new Charlemagne who would restore the office of the Holy Roman Emperor to its former glory and also retake Florence from the Black Guelphs. He wrote to Henry and several Italian princes, demanding that they destroy the Black Guelphs.\n[…]\nWorks by Dante Alighieri at One More Library (Works in English, Italian, Latin, Arabic, German, French and Spanish)\n[…]\nDante Online manuscripts of works, images and text transcripts by Società Dantesca Italiana"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dante_Alighieri",
        "situacao": "ok",
        "texto": "Dante Alighieri (Florença, entre 21 de maio e 20 de junho de 1265 – Ravena, 14 de setembro de 1321) foi um poeta, escritor e político florentino nascido na atual Itália. Alcunhado il sommo poeta, é considerado um dos maiores e mais influentes poetas de todos os tempos devido à sua epopeia A Divina Comédia, tida como uma das maiores obras do Renascimento.\n[…]\nAo serviço de Guido Novello desempenhou ocasionalmente missões diplomáticas, entre as quais a que o levou a Veneza. Na época, a cidade lagunar encontrava-se em conflito com Guido Novello devido aos frequentes ataques das galés de Ravena à navegação veneziana. Perante a ameaça de guerra, Guido Novello encarregou Dante de interceder junto do Senado de Veneza.\n[…]\nAs febres agravaram-se rapidamente e Dante morreu em Ravena, durante a noite de 13 para 14 de setembro de 1321, com cerca de cinquenta e seis anos.\n[…]\nOs restos mortais de Dante foram objeto de uma longa disputa entre Ravena e Florença poucas décadas após a sua morte, quando a figura do autor da Divina Comédia foi redescoberta pelos seus concidadãos graças à divulgação da biografia escrita por Giovanni Boccaccio.\n[…]\nEnquanto os florentinos reivindicavam os restos mortais por considerarem Dante um ilustre filho da cidade. Já em 1429 o município solicitara à família Da Polenta a restituição dos seus restos, os ravenates defendiam que o poeta deveria permanecer na cidade onde falecera.\n[…]\nQuem genuit parvi Florentia mater amoris.\n[…]\nAs Éclogas são duas composições de caráter bucólico, escritas em latim entre 1319 e 1321, em Ravena, que fazem parte de uma correspondência com Giovanni del Virgilio, intelectual bolonhês. As duas composições de Giovanni del Virgilio receberam os títulos de Egloga I e Egloga III, enquanto as de Dante são a Egloga II e a Egloga IV.\n[…]\nEscritores italianos\n[…]\n«Obras de Dante Alighieri» (em italiano). PDF, TXT, RTF",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Pedro I de Portugal",
      "descricao": "Rei de Portugal de 1357 a 1367, chamado o Justiceiro, amante de Inês de Castro."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Os túmulos góticos de Dom Pedro Primeiro e de sua amada Inês de Castro, esculpidos no século quatorze, ficam em que mosteiro português?",
    "resposta": "Mosteiro de Alcobaça",
    "distratores": [
      "Mosteiro da Batalha",
      "Mosteiro dos Jerónimos",
      "Mosteiro de Santa Cruz"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Alcoba%C3%A7a_Monastery"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Alcoba%C3%A7a_Monastery",
        "situacao": "ok",
        "texto": "The Alcobaça Monastery or Alcobasa Monastery (Portuguese: Mosteiro de Alcobaça, Mosteiro de Santa Maria de Alcobaça) is a Catholic monastic complex located in the town of Alcobaça (or Alcobasa, Portuguese pronunciation: [alkuˈβasɐ] ), Oeste region of Portugal, 120 km (75 mi) north of Lisbon and 110 km (68 mi) south of Coimbra.\n[…]\nIn the transept of the church are located the tombs of King Peter I and his mistress, Inês de Castro, who was assassinated in 1355 by order of Peter's father, King Afonso IV. After becoming king, Peter ordered the remains of his beloved to be transferred to her tomb in Alcobaça and, according to a popular legend, had her crowned as queen of Portugal and ordered court members to pay her homage by kissing her decomposing hand.\n[…]\nThis pair of royal tombs in Alcobaça, of unknown authorship, are among the best works of Gothic sculpture in Portugal. The tombs are supported by lions, in the case of the king, and half-men half-beasts, in the case of Ines, and both carry the recumbent figures of the deceased assisted by a group of angels. The sides of Peter's tomb are magnificently decorated with reliefs showing scenes from Saint Bartholomew's life, as well as scenes from Peter and Ines' life.\n[…]\n(in Portuguese) Maria Augusta Pablo Trindade Ferreira. Mosteiro de Santa Maria de Alcobaça. ELO-IPPAR. 2nd edition, 1993.\n[…]\n(in Portuguese) Mosteiro de Alcobaça, Instituto Português do Património Arquitectónico (Portuguese Institute for Architectural Heritage)\n[…]\n(in Portuguese) Mosteiro de Alcobaça / Real Abadia de Santa Maria de Alcobaça (PDF), Direcção Geral dos Edifícios e Monumentos Nacionais (Portuguese General Bureau for National Buildings and Monuments)\n[…]\nSite about Alcobaça (photos)\n[…]\nALCOBASA Y BATALHA DOS MONASTERIOS DE PORTUGAL\n[…]\nMonasterio de Alcobasa: un ejemplo destacado de arquitectura gótica"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mosteiro_de_Alcoba%C3%A7a",
        "situacao": "ok",
        "texto": "O Mosteiro de Alcobaça, também conhecido como Real Mosteiro de Santa Maria de Alcobaça (o seu nome oficial na Congregação de Alcobaça que chefiava), é um mosteiro situado na cidade de Alcobaça, na região Oeste portuguesa.\n[…]\nD. Afonso Henriques, primeiro rei de Portugal, doou e coutou a S. Bernardo muitas terras na região de Alcobaça, em cumprimento da promessa feita, em 1147, quando da conquista de Santarém. É de cerca de 1152 o começo da construção provisória do mosteiro, sendo conhecida no mesmo ano uma referência ao seu abade. No entanto, a carta de doação foi assinada por D.\n[…]\nEstes e outros aspectos poderão desmentir a escassa influência do mosteiro de Alcobaça na história da arquitectura portuguesa. De facto, o monumento tem sido sempre encarado como uma excepção no quadro do modo gótico produzido em Portugal, como uma peça única e experimental sem antecedentes nem descendentes.\n[…]\nNos azulejos azuis, datados do último terceto do século XVIII, que revestem as paredes da Sala dos Reis, representou-se a história da fundação do Mosteiro de Alcobaça. Nesse local, encontra-se um grupo de estátuas de D. Afonso Henriques, de São Bernardo de Claraval e do Papa Alexandre III simbolizando a coroação do rei português.\n[…]\nMosteiro de Santa Maria de Cós\n[…]\nJosé Pedro Duarte Tavares: Mosteiro de Alcobaça, O Claustro Sul no Mosteiro de Alcobaça. Relatório CB 25, Instituto Português do Património Arquitectónico, 1999\n[…]\nMosteiro Santa Maria de Alcobaça, Código de referencia: PT/TT/MSMALC, ANTT\n[…]\nAlcobaça, a casa de Pedro e Inês, Património Mundial Português, Filma e Vê e RTP2, 2009\n[…]\n\"Visita Guiada - Mosteiro de Santa Maria de Alcobaça\", episódio 27, 16 de dezembro de 2019, temporada 9, programa de Paula Moura Pinheiro, na RTP",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Bíblia de Gutenberg",
      "descricao": "Bíblia em latim impressa por Johannes Gutenberg em Mainz por volta de 1455, primeiro grande livro europeu feito com tipos móveis de metal."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Por volta de 1455, Johannes Gutenberg imprimiu com tipos móveis sua famosa Bíblia. Em que cidade alemã ficava a oficina dele?",
    "resposta": "Mainz",
    "distratores": [
      "Colônia",
      "Estrasburgo",
      "Nuremberg"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Gutenberg_Bible"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Gutenberg_Bible",
        "situacao": "ok",
        "texto": "The Gutenberg Bible, also known as the 42-line Bible, the Mazarin Bible or the B42, is the earliest major book printed in Europe using mass-produced metal movable type. It marked the start of the \"Gutenberg Revolution\" and the age of printed books in the West. The book is valued and revered for its high aesthetic and artistic qualities and its historical significance.\n[…]\nThe Gutenberg Bible is an edition of the Latin Vulgate printed in the 1450s by Johannes Gutenberg in Mainz (Holy Roman Empire), in present-day Germany. Out of either 158 or 180 copies that were originally printed, 49 survive in at least substantial portion, 21 of them in entirety; of these, the copy with the earliest visible print date is marked as 15 August 1456. They are thought to be among the world's most valuable books, although no complete copy has been sold since 1978.\n[…]\nIn March 1455, the future Pope Pius II wrote that he had seen pages from the Gutenberg Bible, displayed in Frankfurt to promote the edition.\n[…]\nThe spacious margin allowed illuminated decoration to be added by hand. The amount of decoration presumably depended on how much each buyer could or would pay. Some copies were never decorated. The place of decoration can be known or inferred for about 30 of the surviving copies. It is possible that 13 of these copies received their decoration in Mainz, but others were worked on as far away as London.\n[…]\nAlthough many Gutenberg Bibles have been rebound over the years, nine copies retain fifteenth-century bindings. Most of these copies were bound in either Mainz or Erfurt. Most copies were divided into two volumes, the first volume ending with The Book of Psalms. Copies on vellum were heavier and for this reason were sometimes bound in three or four volumes.\n[…]\nFragment of the Gutenberg Bible, Biblia Latina [Armoire S], at the Library of Trinity College Dublin"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/B%C3%ADblia_de_Gutenberg",
        "situacao": "ok",
        "texto": "A Bíblia de Gutenberg (também conhecida como Bíblia de Mazari ou Bíblia de 42 linhas) é o incunábulo impresso da tradução em latim da Bíblia, por Johannes Gutenberg, em Mogúncia (atual Mainz), Alemanha. A produção da Bíblia começou em 1450, tendo Gutenberg usado uma prensa de tipos móveis. Calcula-se que tenha terminado em 1455. Essa Bíblia é considerada o incunábulo mais importante, pois marca o \n[…]\nA preparação da Bíblia provavelmente começou logo após 1450, e os primeiros exemplares finalizados ficaram prontos em 1454 ou 1455. Não se sabe exatamente quanto tempo levou para imprimir a Bíblia. A primeira impressão com data precisa é a Indulgência de Gutenberg, com 31 linhas, que certamente existia em 22 de outubro de 1454.\n[…]\nA informação mais confiável sobre a data da Bíblia provém de uma carta. Em março de 1455, o futuro Papa Pio II escreveu que tinha visto páginas da Bíblia de Gutenberg, sendo exibidas em Frankfurt para promover a edição. Não se sabe quantas cópias foram impressas, sendo que a carta de 1455 cita fontes para 158 e 180 cópias.\n[…]\nEmbora muitas Bíblias de Gutenberg tenham sido reencadernadas ao longo dos anos, nove exemplares conservam as encadernações do século XV. A maioria desses exemplares foi encadernada em Mainz ou Erfurt. A maioria dos exemplares foi dividida em dois volumes, o primeiro volume terminando com o Livro dos Salmos. Os exemplares em pergaminho eram mais pesados ​​e, por esse motivo, às vezes eram encadernados em três ou quatro volumes.\n[…]\nA Biblioteca Nacional do Brasil, no Rio de Janeiro, possui uma cópia de uma bíblia do início da produção em Mainz, mas ela foi produzida por dois ex-sócios de Gutenberg, os alemães Johann Fust e Peter Schoffer, e não é uma bíblia de Gutenberg, como é frequentemente divulgado. ==Referências==\n[…]\n«English homepage of the Gutenberg-Museum Mainz». , Alemanha.\n[…]\n«Bíblia de Gutenberg». , na Bibloteca Nacional de Portugal",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Catedral de Florença",
      "descricao": "Catedral de Santa Maria del Fiore, em Florença, com grande cúpula renascentista."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "A catedral de Florença ficou mais de um século sem cobertura sobre o altar. Que arquiteto venceu o desafio de erguer sua enorme cúpula, no século quinze?",
    "resposta": "Filippo Brunelleschi",
    "distratores": [
      "Leon Battista Alberti",
      "Giotto",
      "Michelangelo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Florence_Cathedral",
      "https://en.wikipedia.org/wiki/Filippo_Brunelleschi"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Florence_Cathedral",
        "situacao": "ok",
        "texto": "Florence Cathedral (Italian: Duomo di Firenze), formally the Cathedral of Saint Mary of the Flower (Italian: Cattedrale di Santa Maria del Fiore [katteˈdraːle di ˈsanta maˈriːa del ˈfjoːre]), is the cathedral of the Catholic Archdiocese of Florence in Florence, Italy.\n[…]\nA statue of Brunelleschi sits outside the Palazzo dei Canonici in the Piazza del Duomo, looking up towards his greatest the dome that has dominated the panorama of Florence. It is still the largest masonry dome in the world.\n[…]\nLorenzo Ghiberti had a large artistic impact on the cathedral. Ghiberti worked with Filippo Brunelleschi on the cathedral for eighteen years and had a large number of projects on almost the whole east end. Some of his works are the stained glass designs for the oculi in the drum, the bronze shrine of Saint Zenobius and marble revetments on the outside of the cathedral.\n[…]\nFilippo Brunelleschi\n[…]\nDevémy, Jean-François (2013). Sur les traces de Filippo Brunelleschi, l'invention de la coupole de Santa Maria del Fiore à Florence. Suresnes: Les Editions du Net. ISBN 978-2-312-01329-9. (in line presentation Archived 3 March 2016 at the Wayback Machine)\n[…]\nGärtner, Peter J. (1998). Filippo Brunelleschi 1377–1446. Cologne: Könemann. ISBN 978-3-8290-0241-7.\n[…]\nRicci, Massimo, Il genio di Brunelleschi e la costruzione della Cupola di Santa Maria del Fiore, Livorno : Casa Editrice Sillabe S.r.l., April 2014. (The genius of Filippo Brunelleschi and the construction of the dome of Santa Maria del Fiore). ISBN 978-88-8347-691-4. The book is the result of forty years of research on the secret technique with which Brunelleschi built the Dome of Santa Maria del Fiore in Florence.\n[…]\nRice, John A. \"Music in the Duomo of Florence during the Reign of Pietro Leopoldo I (1765–1790)\""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Filippo_Brunelleschi",
        "situacao": "ok",
        "texto": "Filippo di ser Brunellesco di Lippo Lapi (1377 – 15 April 1446), commonly known as Filippo Brunelleschi ( BROO-nə-LESK-ee, Italian: [fiˈlippo brunelˈleski]) and also nicknamed Pippo by Leon Battista Alberti, was an Italian architect, designer, goldsmith, and sculptor. He is considered to be a founding father of Renaissance architecture. He is recognized as the first modern engineer, planner, and s\n[…]\nBrunelleschi was born in Florence, Italy, in 1377. His father was Brunellesco di Lippo Lapi (born c. 1331), a notary and civil servant. His mother was Giuliana Spini; he had two brothers. The family was well-off; the palace of the Spini family still exists across from the Church of Santa Trinità in Florence. The young Filippo was given a literary and mathematical education to enable him to follow the father's career.\n[…]\nBrunelleschi's earliest surviving sculptures are two (or three) small silver sculptures of saints (1399–1400) made for the altar of Saint James in the Crucifix Chapel of Pistoia Cathedral San Zeno. He paused this work for four months in 1400, when he was chosen to simultaneously serve two representative councils of the Florentine government.\n[…]\nAntonio Manetti, who knew Brunelleschi and wrote his biography that Brunelleschi \"was granted such honours as to be buried in the Basilica di Santa Maria del Fiore, and with a marble bust, which was said to be carved from life, and placed there in perpetual memory with such a splendid epitaph.\" Inside the cathedral entrance is this epitaph: \"Both the magnificent dome of this famous church and many other devices invented by Filippo the architect, bear witness to his superb skills.\n[…]\nSaalman, Howard (1980). Filippo Brunelleschi: The Cupola of Santa Maria del Fiore. London: A. Zwemmer. ISBN 0-302-02784-X.\n[…]\nO'Connor, John J.; Robertson, Edmund F., \"Filippo Brunelleschi\", MacTutor History of Mathematics Archive, University of St Andrews"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Santa_Maria_del_Fiore",
        "situacao": "ok",
        "texto": "A Catedral de Santa Maria del Fiore é o \"Duomo\" de Florença, Itália, e está localizada na praça homónima.\n[…]\nA construção iniciou-se em 1296 com projeto de Arnolfo di Cambio sobre as fundações da antiga Catedral de Santa Reparada. Após a morte de Arnolfo, passou pela supervisão de Giotto di Bondone, depois por Francesco Talenti e teve a sua cúpula construída por Filippo Brunelleschi. Ao fim das obras da cúpula em 1436, a catedral foi consagrada pelo papa Eugénio IV.\n[…]\nO Duomo de Florença, como o vemos hoje, é o resultado de um trabalho que se estendeu por seis séculos. O seu projeto básico foi elaborado por Arnolfo di Cambio no final do século XIII, sendo que a cúpula é obra de Filippo Brunelleschi. A fachada teve de esperar até ao século XIX para ser concluída.\n[…]\nContudo, o problema da cúpula ainda não fora resolvido. Brunelleschi fez seu primeiro projeto em 1402, mas manteve-o em segredo. Em 1418, a Opera del Duomo, a centenária empresa administradora dos trabalhos na Catedral, anunciou um concurso que Brunelleschi haveria de vencer, mas o trabalho não começaria senão dois anos mais tarde, continuando até 1434.\n[…]\nA Catedral foi consagrada pelo Papa Eugénio IV em 25 de março (o Ano Novo florentino) de 1436, 140 anos depois do início da construção. Os arremates que ainda esperavam conclusão eram a lanterna da cúpula (colocada em 1461) e o revestimento externo com mármores brancos de Carrara, verdes de Prato, e vermelhos de Siena, de acordo com o projeto original de Arnolfo.\n[…]\nCúpula de Santa Maria del Fiore\n[…]\nIl Duomo de Florença, catedral de Santa Maria del Fiore\n[…]\nA catedral de Florença",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Algarismos indo-arábicos",
      "descricao": "Sistema de numeração posicional com os dígitos de zero a nove, usado hoje em quase todo o mundo."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Que matemático italiano, hoje famoso por uma sequência de números, divulgou os algarismos indo-arábicos na Europa num livro de 1202?",
    "resposta": "Fibonacci",
    "distratores": [
      "Luca Pacioli",
      "Gerolamo Cardano",
      "Leonardo da Vinci"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Liber_Abaci",
      "https://en.wikipedia.org/wiki/Fibonacci"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Liber_Abaci",
        "situacao": "ok",
        "texto": "The Liber Abaci or Liber Abbaci (Latin for \"The Book of Calculation\") was a 1202 Latin work on arithmetic by Leonardo of Pisa, posthumously known as Fibonacci. It is primarily famous for introducing both base-10 positional notation and the symbols known as Arabic numerals in Europe.\n[…]\nAlthough the resulting Fibonacci sequence dates back long before Leonardo, its inclusion in his book is why the sequence is named after him today.\n[…]\nFibonacci used a composite fraction notation in which a sequence of numerators and denominators shared the same fraction bar; each such term represented an additional fraction of the given numerator divided by the product of all the denominators below and to the right of it. That is, badc=ac+bcd, and cbafed=ad+bde+cdef. The notation was read from right to left. For example, 29/30 could be written as 124235, representing the value 45+23×5+12×3×5.\n[…]\nFibonacci sometimes wrote several fractions next to each other, representing a sum of the given fractions. For instance, 1/3+1/4 = 7/12, so a notation like 14132 would represent the number that would now more commonly be written as the mixed number 2712, or simply the improper fraction 3112. Notation of this form can be distinguished from sequences of numerators and denominators sharing a fraction bar by the visible break in the bar.\n[…]\nIn the Liber Abaci, Fibonacci wrote the following, introducing the affirmative Modus Indorum (the method of the Indians), today known as Hindu–Arabic numeral system or base-10 positional notation. It also introduced digits that greatly resembled the modern Arabic numerals.\n[…]\nFibonacci was deeply influenced by Muslim scholars from the 9th and 10 centuries."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Fibonacci",
        "situacao": "ok",
        "texto": "Leonardo Bonacci, also Leonardo da Pisa (c. 1170 – c. 1240-50), commonly known as Fibonacci, was an Italian mathematician from the Republic of Pisa, considered to be \"the most talented Western mathematician of the Middle Ages\".\n[…]\nFibonacci popularized the Indo–Arabic numeral system in the Western world primarily through his composition in 1202 of Liber Abaci (Book of Calculation)  and also introduced Europe to the sequence of Fibonacci numbers, which he used as an example in Liber Abaci.\n[…]\nFibonacci was born around 1170 to Guglielmo, an Italian merchant and customs official who directed a trading post in Bugia, modern-day Béjaïa, Algeria. Fibonacci travelled with him as a young boy. He was educated in Bugia, where he learned about the Hindu–Arabic numeral system.\n[…]\nIn the Liber Abaci (1202), Fibonacci introduced the so-called modus Indorum (method of the Indians), today known as the Hindu–Arabic numeral system, with ten digits including a zero and positional notation. The book showed the practical use and value of this by applying the numerals to commercial bookkeeping, converting weights and measures, calculation of interest, money-changing, and other applications.\n[…]\nIn the Fibonacci sequence, each number is the sum of the previous two numbers. Fibonacci omitted the \"0\" and first \"1\" included today and began the sequence with 1, 2, 3, ... . He carried the calculation up to the thirteenth place, the value 233, though another manuscript carries it to the next place, the value 377. Fibonacci did not speak about the golden ratio as the limit of the ratio of consecutive numbers in this sequence.\n[…]\nFibonacci numbers in popular culture\n[…]\nFibonacci at Convergence\n[…]\nFibonacci, Liber abbaci Bibliotheca Augustana"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Liber_Abaci",
        "situacao": "ok",
        "texto": "O Liber Abaci (também chamado Liber Abbaci) é um livro histórico sobre aritmética escrito por Leonardo Fibonacci (ou Leonardo de Pisa) em Latim. No seu trabalho introduziu na Europa a numeração árabe, a notação posicional esclarecendo o funcionamento desta numeração e o zero, aprendido por Fibonacci com os árabes enquanto viveu com o seu pai, Guglielmo Bonaccio, no Norte de África.\n[…]\nO Liber Abaci foi um dos primeiros livros ocidentais a descrever os algarismos arábicos. Ao abordar os comerciantes e académicos começou a convencer o público da superioridade deste sistema algorítmico. O título Liber Abaci significa o \"Livro do Cálculo\", mas também foi traduzido como \"Livro do Ábaco\", mas Sigler (2002) escreve que a intenção do livro é descrever os métodos de calcular sem recorrer ao ábaco.\n[…]\nEsse livro contém uma grande quantidade de assuntos relacionados com a Aritmética e a Álgebra da época, e realizou um papel importante no desenvolvimento matemático na Europa nos séculos seguintes, pois, por esse livro, os europeus vieram a conhecer os algarismos hindus, também denominados arábicos. A teoria contida em Liber Abaci é ilustrada com muitos problemas que representam uma grande parte do livro.\n[…]\nO Liber Abaci também colocou e resolveu um problema que envolve o crescimento de uma população hipotética de coelhos com base em pressupostos idealizados. A solução, de geração em geração, foi uma sequência de números mais tarde conhecida como número de Fibonacci. A sequência numérica era conhecida por matemáticos indianos já no século VI, mas foi o Liber Abaci que a introduziu no Ocidente.\n[…]\nO manuscrito mais antigo do Liber Abaci circulou em 1202, mas não se conhecem cópias sobreviventes desta versão. Uma versão revisada do Liber Abaci, dedicada a Michael Scot e publicada em 1228, é a que hoje é conhecida.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "O Conto de Genji",
      "descricao": "Obra clássica da literatura japonesa, escrita por volta do ano mil por uma dama da corte imperial de Heian."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Escrito no Japão por volta do ano mil, O Conto de Genji é obra de uma dama da corte imperial. Qual era o nome dela?",
    "resposta": "Murasaki Shikibu",
    "distratores": [
      "Sei Shōnagon",
      "Ono no Komachi",
      "Izumi Shikibu"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Tale_of_Genji"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Tale_of_Genji",
        "situacao": "ok",
        "texto": "The Tale of Genji (源氏物語, Genji Monogatari; Japanese pronunciation: [ɡè̞ɲ̟́.ɟ̟͡ʑí mó̞.nó̞.ɡä́.tä̀.ɾʲì, -ŋä́-, ɡé̞ɲ̟́-]) is a classic work of Japanese literature said to have been written by the noblewoman, poet, and lady-in-waiting Murasaki Shikibu around the peak of the Heian period, in the early 11th century. It is the first novel written by a woman to have won global recognition. In Japan, The T\n[…]\nMurasaki is said to have written the character of Genji based on the Minister on the Left at the time she was at court. Other translators, such as Tyler, believe the character Murasaki no Ue, whom Genji marries, is based on Murasaki Shikibu herself.\n[…]\nEdward Seidensticker, who made the second translation of the Genji, believed that Murasaki Shikibu had not had a planned story structure with an ending as such but would simply have continued writing as long as she could.\n[…]\nHerberth E. Herlitschka: Die Geschichte vom Prinzen Genji, wie sie geschrieben wurde um das Jahr Eintausend unserer Zeitrechnung von Murasaki, genannt Shikibu, Hofdame der Kaiserin von Japan. 2 volumes. Insel-Verlag, Leipzig 1937. (numerous new editions). Translated from Waley.\n[…]\nBowring, Richard John (1988). Murasaki shikibu, The Tale of Genji. Cambridge; New York: Cambridge University Press.\n[…]\nHenitiuk, Valerie (2008). \"Going to Bed with Waley: How Murasaki Shikibu Does and Does Not Become World Literature\". Comparative Literature Studies. 45 (1): 40–61. doi:10.1353/cls.0.0010. JSTOR 25659632. S2CID 161786027.\n[…]\nKamens, Edward B (1993). Approaches to Teaching Murasaki Shikibu's The Tale of Genji. New York: Modern Language Association of America.\n[…]\nKnapp, Bettina L (Spring 1992). \"Lady Murasaki Shikibu's the Tale of Genji: Search for the Mother\". Symposium. 46 (1): 34–48. doi:10.1080/00397709.1992.10733759.\n[…]\nPuette, William J (1983). Guide to the Tale of Genji by Murasaki Shikibu. Rutland, VT: C.E. Tuttle. ISBN 9780804814546."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Genji_Monogatari",
        "situacao": "ok",
        "texto": "Genji Monogatari (源氏物語, lit. O Conto de Genji) é um livro de literatura clássica japonesa escrito durante o Período Heian da história do Japão. Com um total de 54 capítulos, a obra foi finalizada em 1008 e posteriormente ilustrada no emakimono \"O Conto de Genji Emaki\", no final do período Heian. O Conto de Genji é atribuído à poetisa e dama de companhia da corte Murasaki Shikibu. É considerado o p\n[…]\nO debate sobre quanto do Genji foi realmente escrito por Murasaki Shikibu já dura séculos e é provável que jamais será resolvido, a menos que alguma grande descoberta arquivística seja feita. É geralmente aceito que o conto foi concluído em sua forma atual de 1021, quando a autora do Sarashina Nikki escreveu um diário famoso sobre sua alegria em adquirir uma cópia completa do conto.\n[…]\nYosano Akiko, o primeiro autor a fazer uma tradução moderna do Genji Monogatari, acreditava que Murasaki Shikibu tinha apenas escrito os capítulos 1 a 33, e que os capítulos 35-54 foram escritos por sua filha Daini no Sanmi.Outros estudiosos também duvidaram da autoria de capítulos 42 a 54 (particularmente o 44, que contém raros exemplos de erros de continuidade).\n[…]\nA ascensão e queda de Genji\n[…]\nO manuscrito original escrito por Murasaki Shikibu não existe mais. Numerosas cópias, totalizando cerca de 300 documentos, de acordo com Ikeda Kikan, existem com algumas diferenças entre eles. Pensa-se que muitas vezes Shikibu voltou e editou manuscritos antigos a fim de introduzir discrepâncias em relação às cópias anteriores.\n[…]\nBowring, Richard John (1988). Murasaki shikibu, The Tale of Genji (em inglês). Cambridge, Nova Iorque: Cambridge University Press\n[…]\nThe Tale of Genji de Murasaki Shikibu(Mount Mercy College: 1330 Elmhurst Drive, Cedar Rapids, Iowa, EUA) . Versão deste e outros clássicos da literatura disponíveis em linha gratuitamente.\n[…]\nLa novela de Genji. Site em castelhano dedicado à obra de Murasaki Shikibu.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Óculos",
      "descricao": "Armação com lentes usada diante dos olhos para corrigir a visão, inventada na Itália medieval."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Os primeiros óculos para corrigir a visão surgiram no norte da Itália, provavelmente em Pisa. Em que século isso aconteceu?",
    "resposta": "Século treze",
    "distratores": [
      "Século dez",
      "Século quinze",
      "Século dezessete"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Glasses"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Glasses",
        "situacao": "ok",
        "texto": "Glasses, also known as eyeglasses, spectacles, or colloquially as specs, are vision eyewear with clear or tinted lenses mounted in a frame that holds them in front of a person's eyes. They may be used for medical, safety and fashion purposes.\n[…]\nGiordano's colleague Friar Alessandro della Spina of Pisa (d. 1313) was soon making glasses. The Ancient Chronicle of the Dominican Monastery of St. Catherine in Pisa records: \"Eyeglasses, having first been made by someone else, who was unwilling to share them, he [Spina] made them and shared them with everyone with a cheerful and willing heart.\" Venice quickly became an important center of manufacture, especially due to using the high-quality glass made at Murano.\n[…]\nIn the early 20th century, Moritz von Rohr and Zeiss (with the assistance of H. Boegehold and A. Sonnefeld) developed the Zeiss Punktal spherical point-focus lenses that dominated the eyeglass lens field for many years. In 2008, Joshua Silver designed eyewear with adjustable corrective glasses. They work by using a built-in syringe to pump a silicone solution into a flexible lens.\n[…]\nSince then, glasses have become an acceptable fashion item and often act as a key component in individuals' personal image. Musicians Buddy Holly and John Lennon became synonymous with the styles of eye-glasses they wore to the point that thick, black horn-rimmed glasses are often called \"Buddy Holly glasses\" and perfectly round metal eyeglass frames called \"John Lennon glasses\" (or, more recently, \"Harry Potter glasses\").\n[…]\nGI glasses\n[…]\nHorn-rimmed glasses\n[…]\nLensless glasses\n[…]\nRimless glasses\n[…]\nWindsor glasses\n[…]\n\"Common Spectacles Styles before, during and after the Civil War\" (2012 article) via the Internet Archive; Antique Eyeglasses in America."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/%C3%93culos",
        "situacao": "ok",
        "texto": "Os óculos são dispositivos ópticos utilizados para a compensação de ametropias, e/ou proteção dos olhos, ou ainda por motivos estéticos, utilizados na parte superior da face, próximos aos olhos, mas sem entrar em contacto físico com estes, constituídos geralmente por duas lentes oftálmicas e uma armação. Atualmente, quase todos os modelos de óculos são usados diante do rosto repousando sobre o nar\n[…]\nSomente no século I d.C surgiram as primeiras lentes corretivas, que eram feitas com pedras semipreciosas cortadas em tiras finas e davam origem aos óculos de grau para perto.\n[…]\nEnquanto que os primeiros óculos eram usados principalmente para auxílio da leitura, hoje em dia os óculos são mais do que simples próteses de correção de deformidades visuais, sendo que, são agora um dos principais acessórios de moda das sociedades modernas.\n[…]\nO design foi inspirado nas primeiras máscaras criadas para pilotos de avião. Foi baptizado como Anti-Glare Aviator e somente em 1937 passou a ser chamado de Ray Ban (do inglês Ray-Banner ou Raios Banidos), ganhou armação dourada e as ruas do mundo inteiro. Mas foi através do cinema que o Ray Ban obteve grande sucesso. Desde 1999, a marca pertence à empresa italiana Luxottica Group Spa.\n[…]\nAntes da explosão fashionista do aviador, outros modelos já roubavam a cena nas ruas e passarelas do mundo inteiro. As primeiras peças a se tornarem febre entre o público foram os óculos redondos, originados na década de 1920, e que retornaram depois na década de 1970 pelo estilo de John Lennon e Ozzy Osbourne.\n[…]\nÓculos de grau ou graduados — têm a finalidade de corrigir distorções ópticas causadas por problemas de visão como hipermetropia (seja ela presbiopia ou não), miopia e astigmatismo. As lentes podem ser de vários materiais com vidro, resina, cristal, entre outros materiais.\n[…]\nÓculos de sol\n[…]\nÓculos de natação\n[…]\nÓculos de segurança",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Torre de Londres",
      "descricao": "Fortaleza medieval à beira do Tâmisa, em Londres, que já foi palácio real e prisão e guarda as Joias da Coroa."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Segundo uma lenda, a monarquia britânica cairá se certas aves abandonarem a Torre de Londres. Por isso, algumas são mantidas lá até hoje. Que aves são essas?",
    "resposta": "Corvos",
    "distratores": [
      "Pombos",
      "Gaviões",
      "Cisnes"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Ravens_of_the_Tower_of_London"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ravens_of_the_Tower_of_London",
        "situacao": "ok",
        "texto": "The ravens of the Tower of London are a group of at least six captive ravens (eight in 2025) resident at the Tower of London. Their presence is traditionally believed to protect the Crown and the Tower; a belief holds that \"if the Tower of London ravens are lost or fly away, the Crown will fall and Britain with it.\"  Local legend puts the origin of the captive raven population at the time of King \n[…]\nThe first two known depictions of ravens in the Tower of London both date from the year 1883. One is in a special edition of the newspaper The Pictorial World and the other is from the children's Book London Town, written by Felix Leigh and illustrated by Thomas Crane and Elizabeth Houghton.\n[…]\nGeoffrey Parnell, the official Tower of London historian and a member of the Royal Armouries staff, considers the purported ancient history of captive ravens at the Tower to instead be a legend invented during the Victorian era. During Parnell's research, despite the superstition that the Crown depends on the continued presence of the ravens, \"[he] has found the blunt statement in the records 'there are none left' – and yet the monarchy and the tower have more or less survived\".\n[…]\nToday the Tower's ravens are one of the attractions for tourists visiting the City of London. However, visitors are advised not to feed the birds and warned that a raven will bite if it feels threatened.\n[…]\nOn 31 January 2021, the Tower of London announced that Merlina, known as \"Queen of the Tower Ravens\", had not been seen at the Tower grounds for several weeks, leading the Ravenmaster to believe she has died. A statement released on Twitter reads:\n[…]\nIn 1996, two more ravens fell out of favour and were dismissed from the Tower for \"conduct unbecoming Tower residents.\"\n[…]\nMedia related to Ravens at the Tower of London at Wikimedia Commons\n[…]\n\"The ravens | Tower of London\". Historic Royal Palaces."
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Império Bizantino",
      "descricao": "Continuação oriental do Império Romano, com capital em Constantinopla, que durou até 1453."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Os bizantinos se diziam romanos, mas, a partir do século sete, que língua substituiu o latim como língua oficial do império?",
    "resposta": "Grego",
    "distratores": [
      "Armênio",
      "Siríaco",
      "Árabe"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Byzantine_Empire"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Byzantine_Empire",
        "situacao": "ok",
        "texto": "The Byzantine Empire, also known as the Eastern Roman Empire, was the continuation of the Eastern part of the Roman Empire centred on Constantinople during late antiquity and the Middle Ages. Having survived the fall of the Western Roman Empire in the 5th century AD, it endured until the fall of Constantinople to the Ottoman Empire in 1453. The term 'Byzantine Empire' was coined only after its dem\n[…]\nScholars associate the Roman, Hellenic, and Christian imperial identities with the general population, but there is ongoing debate about how these and other regional identities blended together.\n[…]\nSeveral major forms developed alongside well-known composers: the long kontakion (5th century onwards), popularised by Romanos the Melodist; the also-extensive kanōn (late 7th century onwards), developed by Andrew of Crete; and the shorter sticheron (at least 8th century onwards), championed by Kassia.\n[…]\nIt is uncertain to what extent instrumentalists improvised or if they doubled vocalists monophonically or heterophonically. Among the best known instruments are the hydraulic organ, used for circus and imperial court events; the ancient Greek-descended aulos, a wind instrument; the tambouras, a plucked string instrument; and mostly popularly, the Byzantine lyra.\n[…]\nSince the 15th century, Byzantine history has been deeply politicised, woven into nationalist, colonialist, and imperialist narratives. This politicisation appears not only in Greece but also in Bulgarian, Romanian, Serbian, Hungarian, and Turkish nationalism, as well as in former French and Russian imperialist agendas. In the English-speaking world, interpretations of Byzantine history frequently surface in political debates, alongside the growing appreciation for its legacy.\n[…]\nTranslations from Byzantine Sources: The Imperial Centuries, c. 700–1204. Online sourcebook."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Imp%C3%A9rio_Bizantino",
        "situacao": "ok",
        "texto": "Império Bizantino foi a continuação direta do Império Romano na Antiguidade Tardia e Idade Média. Sua capital, Constantinopla (atual Istambul), originalmente era conhecida como Bizâncio. Inicialmente parte oriental do Império Romano (comumente chamada Império Romano do Oriente no contexto), sobreviveu à fragmentação e ao colapso do Império Romano do Ocidente no século V e continuou a prosperar, ex\n[…]\n610–641), a administração e as forças armadas do império foram reestruturadas e o grego foi adotado em lugar do latim. Em suma, o Império Bizantino se distingue da Roma Antiga na medida em que foi orientado à cultura grega em vez da latina e caracterizou-se pelo cristianismo ortodoxo em lugar do politeísmo romano.\n[…]\nPor boa parte da Idade Média, os bizantinos identificaram-se como romaioi (em grego: Ρωμαίοι; \"romanos\", ou seja, cidadãos do Império Romano), um termo que, em língua grega, tornou-se sinônimo de grego cristão. Também chamavam-se graikoi (em grego: Γραικοί; \"gregos\"), embora este etnônimo nunca foi usado na correspondência política oficial antes de 1204.\n[…]\nA partir de 649, os árabes conduziram ataques navais contra o império, chegando a controlar Chipre. Já firmemente controlando a Síria e o Levante, enviaram frequentes incursões às profundezas da Anatólia, e entre 674 e 678 cercaram Constantinopla. A frota árabe foi repelida pelo uso de fogo grego, e foi assinada uma trégua de trinta anos entre o Império Bizantino e o Califado Omíada.\n[…]\nAlém da corte, da administração e do exército, a principal língua usada nas províncias romanas orientais mesmo antes do declínio do Império Ocidental sempre foi o grego, falado na região séculos antes do latim. Na verdade, logo no início do Império Romano, o grego se tornou língua comum da Igreja Cristã, da erudição, das artes e, em grande medida, foi lingua franca para o comércio entre as províncias e outras nações.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Garfo",
      "descricao": "Talher com dentes usado para espetar e levar a comida à boca, difundido na Europa a partir de Bizâncio e da Itália."
    },
    "angulo": "identidade",
    "tipo": "multipla",
    "pergunta": "No início do século onze, uma princesa bizantina casada com o filho do doge de Veneza escandalizou o clero ao comer usando que talher?",
    "resposta": "Garfo",
    "distratores": [
      "Colher",
      "Faca de mesa",
      "Pauzinhos"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Fork",
      "https://en.wikipedia.org/wiki/Maria_Argyropoulina"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fork",
        "situacao": "ok",
        "texto": "In cutlery or kitchenware, a fork (from Latin: furca 'pitchfork') is a utensil, now usually made of metal, whose long handle terminates in a head that branches into several narrow and often slightly curved tines with which one can spear foods either to hold them to cut with a knife or to lift them to the mouth.\n[…]\nAccording to some authors, chronographers mention the astonishment that the Byzantine princess Theophanu caused to the court of the Holy Roman Empire, where she married Emperor Otto II), because she was using a fork instead of her hands when she was eating.\n[…]\nIn addition, according to Peter Damian, the Byzantine princess Maria Argyropoulina brought some golden forks to Venice, when she married Giovanni Orseolo, the son of the Doge Pietro II Orseolo in 1004. Damian condemned the fork as \"vanity\". The same story (with Maria Argyropoulina) was mistakenly said about the Byzantine princess Theodora Doukaina who came to Venice to marry the Doge Domenico Selvo and was confused with Maria Argyropoulina by later authors.\n[…]\nDinner fork\n[…]\nLemon fork for the tea service\n[…]\nSpork: A utensil combining characteristics of a spoon and a fork.\n[…]\nSucket fork: A utensil with tines at one end of the stem and a spoon at the other. It was used to eat food that would otherwise be messy to eat such as items preserved in syrup. The tine end could spear the item, while the other end could be used to spoon the syrup.\n[…]\nTerrapin fork: A specialized spoon-fork for eating terrapin dishes, a predecessor of the spork.\n[…]\nToasting fork: A fork, usually having two tines, very long metal shaft and sometimes an insulating handle, for toasting food over coals or an open flame.\n[…]\nFork etiquette\n[…]\nWilson, B. (2012). Consider the Fork: A History of How We Cook and Eat. Basic Books. ISBN 978-0-465-02176-5. Retrieved 5 June 2024."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Maria_Argyropoulina",
        "situacao": "ok",
        "texto": "Maria Argyra (also Argyre or Argyropoulina) (Greek: Μαρία Ἀργυρή or Ἀργυροπουλίνα; died 1006 or 1007), of the Argyros family, was the great-granddaughter of the Byzantine emperor Romanos I Lakapenos, cousin of the emperors Basil II and Constantine VIII, and sister to the Byzantine emperor Romanos III Argyros.\n[…]\nIn 1004 Maria was married to Giovanni Orseolo, the son of the Doge of Venice Pietro II Orseolo. The marriage was celebrated in the imperial chapel of Constantinople with full imperial pageantry – the couple was blessed by the patriarch, golden wedding crowns were placed on their heads by the two emperors Basil II and Constantine VIII and there followed three days of festivities in one of the palaces called Yconomium.\n[…]\nHalf a century after her death, she was criticised by Peter Damian for her use of a fork for eating (forks being unfamiliar in Western Europe at the time), perfumes, and dew for bathing, although these criticisms were later mistakenly believed to be aimed at another Byzantine princess, the dogaressa Theodora Doukaina."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Garfo",
        "situacao": "ok",
        "texto": "Garfo é um utensílio culinário utilizado pela civilização ocidental moderna para a alimentação. Serve principalmente para segurar alimentos rígidos e levá-los à boca, mas também se usa na cozinha para segurar os produtos a cozinhar e para pisar, por exemplo, batatas ou cenouras cozidas, em puré.\n[…]\nO garfo de mesa foi inventado no Império Bizantino pelos anos 300. No século VIII estava disseminado no Oriente. Os cronistas medievais registraram o espanto que a princesa Teofânia Esclerina causou aos ocidentais, porque ela usava um garfo em vez de suas mãos enquanto fazia a refeição na corte de seu marido Otão II do Sacro Império Romano-Germânico a partir de 972. Outras princesas do Império Bizantino contraíram núpcias com reis da Europa e também trouxeram seus garfos.\n[…]\nA princesa Maria Argyropoulina, casada  Giovanni Orseolo, filho de Pietro II Orseolo, causou escândalo público em Veneza no ano 1004, quando se recusou a utilizar-se de seus próprios dedos para levar o alimento à boca, no que foi severamente criticada por São Pedro Damião, Doutor da Igreja, que escreveu:\n[…]\nA princesa Teodora, filha de Constantino VIII Imperador do Oriente, que veio de Constantinopla para casar com o Doge de Veneza Domenico Selvo também trouxe seu garfo de ouro com dois dentes, como o qual comia frutas cristalizadas. No entanto, pouco depois a população dessa cosmopolita cidade da época assimilou o garfo. Esse costume se espalhou para Milão e Florença e daí para o resto da Europa. O talher já era bem conhecido na Itália do século XV.\n[…]\nCom dois dentes, sua base é levemente maior que a do garfo normal, sendo usado especialmente para peixes, no separar de espinhões.\n[…]\nDe desopercular - Garfo desoperculador\n[…]\nÉ conhecido como tridente de Netuno, garfo com poderes mágicos quando em domínio do Rei do mar.",
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
