Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Cidades e Monumentos** (tema **Geografia**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Grande Pirâmide de Gizé",
      "descricao": "Maior das três pirâmides do planalto de Gizé, no Egito, construída como túmulo do faraó Quéops."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Das Sete Maravilhas do Mundo Antigo, qual é a única que continua de pé até hoje?",
    "resposta": "Grande Pirâmide de Gizé",
    "fonte": [
      "https://en.wikipedia.org/wiki/Great_Pyramid_of_Giza"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Great_Pyramid_of_Giza",
        "situacao": "ok",
        "texto": "The Great Pyramid of Giza is the largest of the Egyptian pyramids and the most famous landmark of the Giza pyramid complex in Giza, Egypt. It is the oldest of the Seven Wonders of the Ancient World, and the only wonder that has remained largely intact. The Great Pyramid served as the tomb of Egyptian Pharaoh Khufu (\"Cheops\"), who ruled during the Fourth Dynasty of the Old Kingdom. It was built c. \n[…]\nThe Great Pyramid of Giza was the tomb of pharaoh Khufu, and still contains his granite sarcophagus. It had, like other tombs of Egyptian elites, four main purposes:\n[…]\nIn 1936 Hassan uncovered a stela of Amenhotep II near the Great Sphinx of Giza, which implies the two larger pyramids were still attributed to Khufu and Khafre in the New Kingdom. It reads: \"He yoked the horses in Memphis, when he was still young, and stopped at the Sanctuary of Hor-em-akhet (the Sphinx). He spent a time there in going round it, looking at the beauty of the Sanctuary of Khufu and Khafra the revered.\"\n[…]\nCyriacus of Ancona thus definitively refuted the false identification of the Great Pyramid with one of the Joseph's Granaries and left several drawings of the monument and an account, reported in his Commentarii. Thanks to his numerous travels in Greece and Asia Minor, he was also able to testify that the pyramids of Giza were the only one of the Seven Wonders of the World to have survived the centuries.\n[…]\nThe Great Pyramid is surrounded by a complex of several buildings, including small pyramids.\n[…]\nThe tomb of Queen Hetepheres I, sister-wife of Sneferu and mother of Khufu, lies 110 metres (360 ft) east of the Great Pyramid. Discovered by accident by the Reisner expedition, the burial was intact, but the carefully sealed coffin proved to be empty.\n[…]\nPyramidology\n[…]\nMedia related to Great Pyramid of Giza at Wikimedia Commons\n[…]\nBuilding the Khufu Pyramid\n[…]\nGeographic data related to Great Pyramid of Giza at OpenStreetMap"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pir%C3%A2mide_de_Qu%C3%A9ops",
        "situacao": "ok",
        "texto": "Pirâmide de Quéops, também conhecida como a Grande Pirâmide de Gizé ou simplesmente Grande Pirâmide, é a mais antiga e a maior das três pirâmides na Necrópole de Gizé, na fronteira de Gizé, no Egito. É a mais antiga das Sete Maravilhas do Mundo Antigo e a única a permanecer em grande parte intacta.\n[…]\nAcredita-se que a pirâmide foi construída como um túmulo pela IV dinastia egípcia pelo faraó Quéops (também conhecido como Khufu através da transliteração dos hieróglifos egípcios) e foi construída ao longo de um período de 20 anos. O vizir de Quéops, Hemiunu (também chamado Hemon), é acreditado por alguns como o arquiteto da Grande Pirâmide.\n[…]\nEm 1303, um forte terremoto afrouxou muitas das pedras exteriores, que foram transportadas pelo sultão Bahri Nácer al-Haçane em 1356 para construir mesquitas e fortes no Cairo medieval. Muitas outras pedras foram removidas das grandes pirâmides por Mehmet Ali no início do século XIX para construir a parte superior da Mesquita de Mehmet Ali no Cairo, não muito longe de Gizé. Estes invólucros de calcário podem ainda ser vistos nas partes externas destas estruturas.\n[…]\nExploradores posteriores relataram pilhas maciças de entulho na base das pirâmides deixadas por conta do colapso contínuo das pedras, que eram removidas e subsequentemente afastadas durante as escavações no local. No entanto, algumas das pedras de revestimento da parte mais baixa podem ser vistas até hoje in situ ao redor da base da Grande Pirâmide e exibem a mesma precisão relatada há séculos.\n[…]\nA arqueóloga britânica Joyce Tyldesley afirma que a Grande Pirâmide \"é conhecida por ter sido aberta e esvaziada pelo Império Médio\", antes do califa abássida Almamune entrar na estrutura em torno de 820.\n[…]\n«Modelo em 3D do interior da Pirâmide de Quéops.»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Pont Neuf",
      "descricao": "Ponte de pedra sobre o rio Sena, em Paris, concluída em 1607 no reinado de Henrique Quarto."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Inaugurada em 1607, a ponte de nome contraditório que é a mais antiga ainda de pé sobre o Sena, em Paris, se chama como?",
    "resposta": "Pont Neuf",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pont_Neuf"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pont_Neuf",
        "situacao": "ok",
        "texto": "The Pont Neuf (French pronunciation: [pɔ̃ nœf], \"New Bridge\") is the oldest standing bridge across the river Seine in Paris, France. It stands by the western (downstream) point of the Île de la Cité, the island in the middle of the river that between 250 and 225 BC was the birthplace of Paris (then known as Lutetia). During the medieval period, the Île was the heart of the city.\n[…]\nHare (Walks in Paris): \"So central an artery is the Pont Neuf, that it used to be a saying with the Parisian police, that if, after watching three days, they did not see a man cross the bridge, he must have left Paris.\"  One of the principal vendors of quack nostrums of the Pont Neuf was Montdor. He was aided by a buffoon named Tabarin, who made facetious replies to questions asked by his master, accompanied with laughable grimaces and grotesque gestures.\n[…]\nIn 1840, Lacroix wrote: \"Once the pont Neuf was a perpetual fair; at present, it is just a bridge to be crossed without stopping.\"\n[…]\nIn 1985, after years of negotiation with the mayor of Paris, the art duo Christo and Jeanne-Claude wrapped the Pont Neuf.\n[…]\nLes Amants du Pont-Neuf (The Lovers on the Bridge), a film by Leos Carax, released in 1991\n[…]\nFournier, Édouard (1862). Dentu, E. (ed.). Histoire du Pont-Neuf (in French). Paris: Libraire de la Société des Gens de Lettres. Retrieved 11 January 2025.\n[…]\nMetman, Yves, ed. (1987). Le Registre ou plumitif de la construction du Pont Neuf: archives nationales Z1f 1065 (in French). Paris: Service des travaux historiques de la Ville de Paris. OCLC 21504748.\n[…]\nStrohmayer, Ulf (2007). \"Engineering Vision: the Pont-Neuf in Paris and Modernity\". In Cowan, A.; Steward, J. (eds.). The City and the Senses: Urban Culture since 1500. Basingstoke: Ashgate. pp. 75–92. ISBN 978-0754684237..\n[…]\nAbout Pont Neuf Bridge in Paris\n[…]\nFrance Pittoresque: Histoire du Pont Neuf (in French)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pont_Neuf",
        "situacao": "ok",
        "texto": "A Pont Neuf (\"Ponte Nova\", em português) é a mais antiga das pontes que cruzam o rio Sena, em Paris, capital da França. Seu nome \"Novo\" permaneceu, e foi dado para distinguir-se das antigas pontes medievais, erguidas com casas em ambos os lados.\n[…]\nUma longa parada ocorreu a partir de 1588, por conta especialmente das Guerras Religiosas, as obras foram retomadas em 1599. A ponte foi concluída apenas sob o reinado de Henrique IV, que a inaugurou em 1607.\n[…]\nAssim como muitas pontes de seu tempo, a Pont Neuf foi erguida com uma série de pequenos arcos, seguindo os modelos romanos precedentes. Foi a primeira ponte de pedras em Paris que não serviu como alicerce para casas erguidas em sua superfície, e foi equipada com passeios para proteger os pedestres da lama e dos cavalos; os pedestres também poderiam se abrigar nos bastiões, para permitir a passagem de algum transporte mais volumoso.\n[…]\nA maior restauração da Pont Neuf começou em 1994 e foi concluída em 2007, ano do seu quarto centenário.\n[…]\nO último Grão-Mestre dos Templários, Jacques de Molay, foi queimado em uma fogueira na Île de la Cité, perto de onde passaria a Pont Neuf, em 18 de março de 1314. A execução foi ordenada por Filipe, o Belo, após Jacques haver abjurado todas as suas confissões anteriores, o que indignara o rei.\n[…]\nO marco no local da execução traz escrito (numa livre tradução): \"Neste lugar, Jacques de Molay, último Grão-Mestre dos Templários, foi queimado a 18 de março de 1314\". Fica próximo às escadarias da Pont Neuf, de frente para as árvores da ponta da ilha, que se veem na fotografia ao lado.\n[…]\nLes amants du Pont-Neuf (Os amantes da Pont Neuf), filme de Leos Carax, estreado em 1991.\n[…]\n(em francês) France Pittoresque: Histoire du Pont Neuf",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Ponte de Rialto",
      "descricao": "Ponte de pedra em arco sobre o Grande Canal de Veneza, concluída no fim do século dezesseis."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Entre as pontes que atravessam o Grande Canal de Veneza, qual é a mais antiga?",
    "resposta": "Ponte de Rialto",
    "distratores": [
      "Ponte da Academia",
      "Ponte dos Descalços",
      "Ponte da Constituição"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Rialto_Bridge"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rialto_Bridge",
        "situacao": "ok",
        "texto": "The Rialto Bridge (Italian: Ponte di Rialto; Venetian: Ponte de Rialto) is the oldest of the four bridges spanning the Grand Canal in Venice, Italy. Connecting the sestieri (districts) of San Marco and San Polo, it has been rebuilt several times since its first construction as a pontoon bridge in 1173, and is now a significant tourist attraction in the city.\n[…]\nThe first dry crossing of the Grand Canal was a pontoon bridge built in 1181 by Nicolò Barattieri. It was called the Ponte della Moneta, presumably because of the mint that stood near its eastern entrance.\n[…]\nThe rents brought an income to the State Treasury, which helped maintain the bridge.\n[…]\nThe idea of rebuilding the bridge in stone was first proposed in 1503. Several projects were considered over the following decades. In 1551, the authorities requested proposals for the renewal of the Rialto Bridge, among other things. Plans were offered by famous architects, such as Jacopo Sansovino, Palladio and Vignola, but all involved a Classical approach with several arches, which was judged inappropriate to the situation. Michelangelo was also considered as designer of the bridge.\n[…]\nIt was called Shylock's bridge in Robert Browning's poem \"A Toccata of Galuppi's\". This is likely because Shylock references the bridge in Act I Scene III of The Merchant of Venice, speaking to Antonio (The Merchant of Venice): \"Many a time and oft, In the Rialto you have rated me\".\n[…]\nMiracle of the Relic of the Cross at the Ponte di Rialto (depiction of wooden bridge)\n[…]\nPonte Vecchio\n[…]\nPulteney Bridge\n[…]\nWhitney, Charles S. (2003). Bridges of the World: Their Design and Construction (Reprint ed.). Mineola, New York: Dover Publications. ISBN 978-0486429953. Retrieved 12 January 2025.\n[…]\nRialto Bridge at Structurae\n[…]\nRialto Bridge travel guide from Wikivoyage\n[…]\nRialto Bridge"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ponte_de_Rialto",
        "situacao": "ok",
        "texto": "A Ponte de Rialto é a ponte em arco mais antiga e mais famosa sobre o Grande Canal, na cidade italiana de Veneza. Ela foi formalmente a única ligação permanente entre os dois lados do Grande Canal, até abrirem as restantes travessias.\n[…]\nA primeira construção que cruzou o Grande Canal foi uma ponte flutuante, construída em 1181 por Nicolò Barattieri. Chamou-se Ponte della Moneta, presumivelmente pela cunhagem de moeda veneziana que se fazia perto da sua entrada oriental.\n[…]\nA evolução e importância do mercado de Rialto na margem oriental do canal aumentou o tráfego fluvial consideravelmente perto da ponte flutuante. Por isso, foi substituída por volta de 1250 por uma ponte de madeira. A estrutura tinha duas rampas inclinadas que se uniam a uma secção móvel, que podia ser elevada para que passassem barcos altos. A relação da ponte com o mercado finalmente produziu a troca de nome desta.\n[…]\nA ideia de uma reconstrução em pedra foi pela primeira vez proposta em 1503. Vários projetos sucederam-se nas décadas. Em 1551, as autoridades venezianas pediram propostas para renovar a Ponte de Rialto. Numerosos arquitetos famosos, como Michelangelo, Jacopo Sansovino, Andrea Palladio e Jacopo Vignola ofereceram os seus préstimos, mas todos realizaram propostas de enfoque clássico com diferentes arcos, que foram tidos por inadequados para esta obra.\n[…]\nA ponte é apoiada em 600 estacas de madeira, com a construção disposta de tal modo que em cada momento as juntas das aduelas são perpendiculares à força do arco. O desenho de engenharia foi considerado tão audaz na época que o arquiteto Vincenzo Scamozzi predisse a sua queda. No entanto ainda hoje se ergue a Ponte de Rialto, sendo um dos ícones arquitetónicos da cidade de Veneza.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Montevidéu",
      "descricao": "Capital e maior cidade do Uruguai, na margem do Rio da Prata."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Qual capital de país da América do Sul fica mais ao sul do continente?",
    "resposta": "Montevidéu",
    "distratores": [
      "Buenos Aires",
      "Santiago",
      "Assunção"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Montevideo"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Montevideo",
        "situacao": "ok",
        "texto": "Montevideo (, US also ; Spanish: [monteβiˈðeo] ) is the capital and largest city of Uruguay. As of the 2023 census, the city proper has a population of 1,287,452, making up about 36.8% of the country's total population, in an area of 201 square kilometers (78 sq mi). Montevideo is situated on the southern coast of the country, on the northeastern bank of the Río de la Plata.\n[…]\nThe 2019 Mercer report on quality of life rated Montevideo first in Latin America, a rank the city has consistently held since 2005. As of 2010, Montevideo was the 19th largest city economy in the continent and 9th highest income earner among major cities. In 2022, it has a projected GDP of $53.9 billion, with a per capita of $30,148. In 2018, it was classified as a beta global city, ranking eighth in Latin America and 84th in the world.\n[…]\nSome of the important newspapers published in the city are: Brecha, La República, El Observador, El País, Gaceta Comercial and la Diaria. El Día was the most prestigious paper in Uruguay, founded in 1886 by José Batlle, who would later go on to become President of Uruguay. The paper ceased production in the early 1990s. All television stations have their headquarters in Montevideo, for example: Saeta Channel 10, Teledoce, Channel 4 and National Television (Channel 5)\n[…]\nMontevideo is served by the Carrasco International Airport (IATA: MVD, ICAO: SUMU), which is located in the north of Ciudad de la Costa, in Canelones Department, 19 km (12 mi) from the city center. It handles over 1,5 million passengers per year, and has been cited as one of the most efficient and traveler-friendly airports in Latin America.\n[…]\nThe Montevideo Crandon Institute is an American School of missionary origin and the main Methodist educational institution in Uruguay.\n[…]\nMontevideo is part of the Union of Ibero-American Capital Cities since 12 October 1982."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Montevid%C3%A9u",
        "situacao": "ok",
        "texto": "Montevidéu (português brasileiro) ou Montevideu (português europeu) (pronunciado, respetivamente: [mõteviˈdɛw] e [mõtɨviˈdew]; em castelhano Montevideo, pronunciado: [monteβiˈðe.o]) é a capital e maior cidade do Uruguai. De acordo com o censo de 2011, a cidade propriamente dita tem uma população de 1 319 108 (cerca de um terço da população total do país) em uma área de 530 quilômetros quadrados. M\n[…]\nAssinado por Francisco de Albo, contramestre da expedição, esse é o mais antigo documento em espanhol que menciona um nome similar a \"Montevideo\". A outra versão, apesar de não ter base em documentos históricos, é mais difundida. Ela dá conta de que, navegando pelo Rio da Prata de leste a oeste (do Oceano Atlântico para o continente), avista-se o 6º monte na região em que hoje se situa a capital uruguaia.\n[…]\nComo capital do Uruguai, Montevidéu é o centro econômico e político do país. A maioria das maiores e mais ricas empresas uruguaias tem sua sede na cidade. Desde a década de 1990, a cidade passou por rápido desenvolvimento econômico e modernização, incluindo dois dos edifícios mais importantes do Uruguai - o World Trade Center Montevidéu (1998) e a Torre das Telecomunicações (2000), a sede da empresa estatal de telecomunicações ANTEL, aumentando a integração da cidade no mercado global.\n[…]\nTradicionalmente, o setor bancário tem sido um dos setores de exportação de serviços mais fortes no Uruguai: o país já foi apelidado de \"Suíça da América\". O maior banco do Uruguai é o Banco Republica (BROU), com sede em Montevidéu. Quase 20 bancos privados, a maioria deles filiais de bancos internacionais, operam no país (Banco Santander, ABN AMRO, Citibank, entre outros).\n[…]\nA avenida leva ao Obelisco de Montevidéu; além disso fica o Parque Batlle, que junto com o Parque Prado é outro importante destino turístico.\n[…]\n«La Nación Chile: Montevidéu tem a melhor qualidade de vida na America Latina»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Queens",
      "descricao": "Um dos cinco distritos da cidade de Nova York, a leste de Manhattan, na ilha de Long Island."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Entre os cinco distritos que formam a cidade de Nova York, qual ocupa a maior área?",
    "resposta": "Queens",
    "fonte": [
      "https://en.wikipedia.org/wiki/Queens"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Queens",
        "situacao": "ok",
        "texto": "Queens is the largest by area of the five boroughs of New York City, and the second most populous, with a population of 2,405,464 as of the 2020 census. Since 1899 the borough is coextensive with Queens County, the second-most populous county in New York state, behind Kings County (Brooklyn). If Queens were its own city, it would be the fourth most-populous in the United States, after the other fo\n[…]\nQueens is the fourth-most densely populated borough in New York City and the fourth-most densely populated U.S. county.\n[…]\nThe Jewish Community Study of New York 2011, sponsored by the UJA-Federation of New York, found that about 9% of Queens residents were Jews. In 2011, there were about 198,000 Jews in Queens, making it home to about 13% of all people in Jewish households in the eight-county area consisting of the Five Boroughs and Westchester, Nassau, and Suffolk counties. Russian-speaking Jews make up 28% of the Jewish population in Queens, the largest in any of the eight counties.\n[…]\nThe borough's largest employment sector—trade, transportation, and utilities—accounted for nearly 30% of all jobs in 2004; in 2012, its largest employment sector became health care and social services. Queens is home to two of the three major New York City area airports, JFK International Airport and LaGuardia Airport. These airports are among the busiest in the world, leading the airspace above Queens to be the most congested in the country.\n[…]\nQueens, like all of the city's five counties, has its own criminal court system and District Attorney, the chief public prosecutor who is directly elected by popular vote. Since January 2020, the District Attorney of Queens County is Melinda Katz. Queens has 12 seats on the New York City Council, the second-largest number among the five boroughs. It is divided into 14 community districts, each served by a local Community Board.\n[…]\nQueens directories\n[…]\nQueens Buzz"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Queens",
        "situacao": "ok",
        "texto": "Queens é um burgo na cidade de Nova Iorque, coextensivo com o condado do Queens, no estado americano de Nova Iorque. Foi fundado em novembro de 1683, tendo uma área bem maior que a atual, já que compreendia também Nassau e Suffolk.\n[…]\nDesde 1990, o presidente do município atua como defensor do município nas agências da prefeitura, no Conselho da Cidade, no governo do estado de Nova York e nas corporações. A presidente do distrito do Queens é Melinda Katz, eleita em novembro de 2013 como democrata com 80,3% dos votos. Queens Borough Hall é a sede do governo e está localizado em Kew Gardens.\n[…]\nCada um dos cinco municípios da cidade possui seu sistema de tribunais criminais e o Promotor Público, o principal promotor público eleito diretamente pelo voto popular. Richard A. Brown, que concorreu com o Partido Republicano e o Partido Democrata, foi o promotor público do condado de Queens entre 1991 e 2018. O novo DA em janeiro de 2020 é Melinda Katz. Queens tem 12 assentos no Conselho da Cidade de Nova York , o segundo maior número entre os cinco distritos.\n[…]\nQueens tem a segunda maior economia dos cinco distritos da cidade de Nova York, depois de Manhattan. Em 2004, o Queens possuía 15,2% (440 310) de todos os empregos do setor privado na cidade de Nova York e 8,8% dos salários do setor privado.\n[…]\nO maior setor de empregos do distrito são comércio, transporte e serviços públicos, representou quase 30% de todos os empregos em 2004. Queens abriga dois dos três principais aeroportos da cidade de Nova York, o Aeroporto Internacional JFK e o Aeroporto LaGuardia. Esses aeroportos estão entre os mais movimentados do mundo, levando o espaço aéreo acima de Queens a ser o mais congestionado do país.\n[…]\nNova Iorque\n[…]\nPonte Queensboro",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Pirâmide do Sol",
      "descricao": "Grande pirâmide da antiga cidade de Teotihuacan, perto da Cidade do México."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Nas ruínas de Teotihuacan, perto da Cidade do México, qual é a maior de todas as construções?",
    "resposta": "Pirâmide do Sol",
    "distratores": [
      "Pirâmide da Lua",
      "Templo da Serpente Emplumada",
      "Pirâmide de Kukulcán"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pyramid_of_the_Sun"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pyramid_of_the_Sun",
        "situacao": "ok",
        "texto": "The Pyramid of the Sun is the largest building in Teotihuacan, and one of the largest in Mesoamerica. It is believed to have been constructed about 200 AD. Found along the Avenue of the Dead, in between the Pyramid of the Moon and the Ciudadela, and in the shadow of the mountain Cerro Gordo, the pyramid is part of a large complex in the heart of the city.\n[…]\nThe name Pyramid of the Sun comes from the Aztecs, who visited the city of Teotihuacan centuries after it was abandoned; the name given to the pyramid by the Teotihuacanos is unknown. It was constructed in two phases. The first construction stage, around 200 AD, brought the pyramid to nearly the size it is today.\n[…]\nIn view of the position of the pyramid over the grotto, it would seem that the cave was the focal point and not an accidental coincidence, and that it may have determined the site for the construction of a primitive place of worship and then for the pyramid.\n[…]\nThe city layout of Teotihuacan incorporated alignments dictated by the astronomically significant orientation of the Pyramid of the Sun: the peak of the pyramid aligned with the horizon in order to serve as a natural marker of the sun's position on the Aztec quarter days of the year. Thus, this cave is more important than most in Aztec culture and religion. Recently, scientists have used muon detectors to try to find other chambers within the interior of the pyramid.\n[…]\nA unique historical artifact discovered near the foot of the pyramid at the end of the nineteenth century was the Teotihuacan Ocelot, which is now in the British Museum's collection. In addition, burial sites of children have been found in excavations at the corners of the pyramid. It is believed that these burials were part of a sacrificial ritual dedicating the building of the pyramid.\n[…]\nList of Mesoamerican pyramids"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pir%C3%A2mide_do_Sol",
        "situacao": "ok",
        "texto": "A Pirâmide do Sol é a maior das pirâmides da cidade de Teotihuacan, a segunda maior de todo o México e a terceira maior do mundo.\n[…]\nDurante o auge de Teotihuacan, as pirâmides eram pintadas de vermelho brilhante e se destacavam na paisagem.\n[…]\nEstudos e escavações realizadas em 1971, conduziram à descoberta de uma grande caverna sob a estrutura da Pirâmide do Sol. A partir da caverna, existem quatro portas dispostas como pétalas de flor, que levam a outras salas. O acesso à caverna é feito através de um poço com 7 m de altura situado junto às escadas na base da pirâmide.\n[…]\nEssa caverna é, na verdade, um túnel natural elaborado e alargado por antigas correntes de lava, devido à região onde Teotihuacan está localizada, sobre uma bacia natural numa extensa região de vulcões. Alguns estudiosos acreditam que a razão para a pirâmide estar construída sobre a caverna é que ela era considerada sagrada e utilizada para atividades religiosas e rituais.\n[…]\nSua base é 97% da base da Grande Pirâmide de Gizé. A relação entre o seu perímetro e a sua base é 4 pi vezes a sua altura. O \"pi\" (π) é uma razão matemática que se baseia no conhecimento de geometria, o que implica o conhecimento de matemática sofisticada. Ela tem uma inclinação de 17º em relação ao polo terrestre, o que faz com que ela aponte para o pólo geográfico da Terra, permitindo que o Sol coincida com o seu centro nos dias 20 de maio e 18 de junho.\n[…]\nForam utilizados 2,5 milhões de toneladas de pedra para a sua construção, 4 milhões a menos que a Grande Pirâmide de Gizé.\n[…]\nTeotihuacan\n[…]\nPirâmide da Lua\n[…]\nMedia relacionados com Pirâmide do Sol no Wikimedia Commons",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "São Vicente",
      "descricao": "Cidade do litoral do estado de São Paulo, fundada por Martim Afonso de Sousa em 1532."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Fundada em 1532 por Martim Afonso de Sousa, qual cidade do litoral paulista é considerada a primeira vila do Brasil?",
    "resposta": "São Vicente",
    "fonte": [
      "https://pt.wikipedia.org/wiki/S%C3%A3o_Vicente_(S%C3%A3o_Paulo)",
      "https://en.wikipedia.org/wiki/S%C3%A3o_Vicente,_S%C3%A3o_Paulo"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/S%C3%A3o_Vicente_(S%C3%A3o_Paulo)",
        "situacao": "ok",
        "texto": "São Vicente, oficialmente Estância Balneária de São Vicente, é um município brasileiro do estado de São Paulo e primeira cidade do Brasil. Pertencente à Região Metropolitana da Baixada Santista, sua população, no censo de 2022, era de 329 911 habitantes, sendo a terceira cidade mais populosa do litoral paulista, atrás apenas de Santos e Praia Grande. Sua área territorial é de 148,151 km², o que lh\n[…]\nSão Vicente marca o início efetivo da colonização no Brasil e torna-se o primeiro núcleo institucionalizado em todo o território brasileiro, estando entre as cidades mais antigas continuadamente habitadas do continente americano. Fundada em 1532 pelo militar e administrador colonial português Martim Afonso de Sousa, na Capitania de São Vicente, a criação da vila atendeu às ordens do Rei Dom João III de Portugal.\n[…]\nEntre 1530 e 1532, a expedição liderada pelo fidalgo português Martim Afonso de Sousa explorou a costa brasileira. No dia 22 de janeiro de 1532, Martim Afonso e um grupo de colonos portugueses desembarcaram na Ilha de São Vicente e o fidalgo ordenou ali a construção de casas, igreja, pelourinho, fortim, estaleiro e edifícios de órgãos administrativos, assim fundando a vila de São Vicente, sob oposição dos indígenas locais.\n[…]\nEm meados do século XVI, a vila de São Vicente entrou em decadência, o que se deve ao fracasso da cultura canavieira na região e a progresso de Santos. Com isso, muitos de seus moradores migraram para o Planalto Paulista, sobretudo para a vila de São Paulo de Piratininga, fundada pelos jesuítas em 1554.\n[…]\nEm 1624, devido a disputas entre os descendentes de Martim Afonso, a sede da Capitania de São Vicente foi transferida de São Vicente para Itanhaém. O berço da democracia nas Américas recuperou o título de sede da capitania em 1679, mas o perdeu para a vila de São Paulo dois anos depois.\n[…]\nLista de municípios de São Paulo por DDD"
      },
      {
        "url": "https://en.wikipedia.org/wiki/S%C3%A3o_Vicente,_S%C3%A3o_Paulo",
        "situacao": "ok",
        "texto": "São Vicente (after Saint Vincent of Saragossa, the patron Saint of Lisbon, Portugal) is a coastal municipality in southern São Paulo and the first city of Brazil. It is part of the Metropolitan Region of the Baixada Santista. The population is 329,911 (2022 census) in an area of 148.151 square kilometres (57.20 square miles).\n[…]\nSão Vicente is one of the 15 municipalities in São Paulo considered seaside resorts by the state of São Paulo, as they meet certain prerequisites defined by State Law. This status guaranteed the municipality a larger budget from the State to promote regional tourism. Furthermore, the municipality acquires the right to add, next to its name, the title of \"Estância Balneária\" (Balneary Resort), a term by which it is designated both by official municipal records and by state references.\n[…]\nIt was the first permanent Portuguese settlement in the Americas and the first capital of the Captaincy of São Vicente, roughly the present state of São Paulo. Established as a proper village in 1532 by Martim Afonso de Sousa on what was then the Porto dos Escravos (\"Port of the Slaves\"), operated by three Portuguese colonists who trafficked on slaves captured by allied tribes, São Vicente is titled Cellula Mater (Mother Cell) of Brazil for being the first organized town in the country.\n[…]\nThe municipality is crossed from east to west on the island and on the continental part by the lines of América Latina Logística – ALL (former network of Ferrovia Paulista – FEPASA), which, heading west, connects São Vicente with Praia Grande, Mongaguá, Itanhaém and Peruíbe; heading east with Santos and heading north, it reaches the Planalto Paulistano, to the south of Greater São Paulo, in Embu-Guaçu.\n[…]\n\"Do Litoral ao Planalto\". História do Brasil: Área Vicentina.\n[…]\n(in Portuguese) São Vicente's official home page"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Arquibasílica de São João de Latrão",
      "descricao": "Catedral da Diocese de Roma, sede do papa como bispo de Roma."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Qual basílica de Roma, catedral do papa, ocupa a posição mais alta da Igreja Católica, acima até da Basílica de São Pedro?",
    "resposta": "São João de Latrão",
    "distratores": [
      "Santa Maria Maior",
      "São Paulo Extramuros",
      "Santa Maria em Trastevere"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Archbasilica_of_Saint_John_Lateran"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Archbasilica_of_Saint_John_Lateran",
        "situacao": "ok",
        "texto": "The Archbasilica of Saint John Lateran (officially the Major Papal, Patriarchal and Roman Archbasilica, Metropolitan and Primatial Cathedral of the Most Holy Savior and Saints John the Baptist and the Evangelist in Lateran, Mother and Head of All Churches in Rome and in the World), commonly known as the Lateran Basilica or Saint John Lateran, is the Catholic cathedral of the Diocese of Rome in the\n[…]\nThe archbasilica and Lateran Palace were re-dedicated twice. Pope Sergius III dedicated them in honor of Saint John the Baptist in the 10th century, occasioned by the newly consecrated baptistry of the archbasilica. Pope Lucius II dedicated them in honor of John the Evangelist in the 13th century.\n[…]\nWhen the papacy returned from Avignon and the pope again resided in Rome, the archbasilica and the Lateran Palace were deemed inadequate considering their accumulated damage. The popes resided at the Basilica di Santa Maria in Trastevere and later at the Basilica di Santa Maria Maggiore. Eventually, the Palace of the Vatican was built adjacent to the Basilica of Saint Peter, which existed since the time of Emperor Constantine I, and the popes began to reside there.\n[…]\nIn one of the rebuildings, probably that which was carried out by Pope Clement V, a transverse nave was introduced, imitated no doubt from the one which had been added, long before this, to the Basilica of Saint Paul Outside the Walls. Probably at this time the archbasilica was enlarged.\n[…]\nList of Archpriests of the Archbasilica:\n[…]\nHigh-resolution virtual tour of Saint John Lateran, from the Vatican.\n[…]\nSatellite Photo of Saint John Lateran\n[…]\nSan Giovanni in Laterano\n[…]\nHigh-resolution 360° Panoramas and Images of Archbasilica of Saint John Lateran | Art Atlas Archived 21 December 2019 at the Wayback Machine\n[…]\n\"Beggar's Rome\" – A self-directed virtual tour of St. John Lateran Basilica and other Roman churches"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Arquibas%C3%ADlica_de_S%C3%A3o_Jo%C3%A3o_de_Latr%C3%A3o",
        "situacao": "ok",
        "texto": "A Arquibasílica do Santíssimo Salvador e dos Santos João Batista e João Evangelista de Latrão (em latim: Archibasilica Sanctissimi Salvatoris et Sanctorum Iohannes Baptista et Evangelista in Laterano), chamada geralmente apenas de São João de Latrão (em italiano:  San Giovanni in Laterano) ou Basílica de Latrão, é a catedral da Diocese de Roma e a sé episcopal oficial do Bispo de Roma, o Papa. É s\n[…]\nComo catedral do Bispo de Roma, San Giovanni está acima de todas as demais igrejas da Igreja Católica, incluindo a Basílica de São Pedro. Por isso é chamada de \"Arquibasílica\", uma honraria única.\n[…]\nDevido à importância singular desta igreja, \"Mãe e Cabeça de todas as Igrejas da Cidade e do Mundo\", liturgicamente, a Igreja Católica celebra a Festa da Dedicação da Basílica de São João de Latrão, que ocorre no dia 9 de novembro.\n[…]\nQuando o papado retornou para Roma em 1377, a arquibasílica e o Palácio Laterano foram considerados inadequados por conta das décadas de negligência e os papas passaram a residir primeiro em Santa Maria in Trastevere e depois em Santa Maria Maggiore. Finalmente, o Palácio Vaticano foi construído ao lado da Basílica de São Pedro, que já existia no Vaticano desde a época de Constantino I e os papas se mudaram para lá, a residência oficial do papa até hoje.\n[…]\nAlém disso, há outros papas cujo pontificado se deu neste período, mas cujos túmulos são desconhecidos, mas provavelmente estavam na arquibasílica. Entre eles estão: papa João XVII (1003), papa João XVIII (1003–9) e papa Alexandre II (1061–73). O papa João X foi o primeiro papa a ser enterrado do lado de dentro dos muros de Roma e ele recebeu uma cerimônia pomposa por conta de rumores de que ele teria sido assassinado por Teodora durante a chamada \"Saeculum Obscurum \".\n[…]\nOs cardeais Vincenzo Santucci e Carlo Colonna também estão enterrados na arquibasílica.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Coliseu",
      "descricao": "Anfiteatro Flávio, grande anfiteatro de pedra da Roma Antiga, no centro de Roma, palco de combates de gladiadores."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Nos combates de gladiadores do Coliseu, o piso de madeira era coberto por algo que, em latim, se chamava arena. O quê?",
    "resposta": "Areia",
    "fonte": [
      "https://en.wikipedia.org/wiki/Colosseum",
      "https://en.wikipedia.org/wiki/Arena"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Colosseum",
        "situacao": "ok",
        "texto": "The Colosseum ( KOL-ə-SEE-əm; Italian: Colosseo [kolosˈsɛːo]) is an elliptical amphitheatre in the centre of the city of Rome, Italy, just east of the Roman Forum. It is the largest ancient amphitheatre ever built, and is the largest standing amphitheatre in the world. Construction began under the Emperor Vespasian (r. 69–79 AD) in 72 and was completed in AD 80 under his successor and heir, Titus \n[…]\nThe Colosseum and its activities supported a substantial industry in the area. In addition to the amphitheatre itself, many other buildings nearby were linked to the games. Immediately to the east is the remains of the Ludus Magnus, a training school for gladiators. This was connected to the Colosseum by an underground passage, to allow easy access for the gladiators. The Ludus Magnus had its own miniature training arena, which was itself a popular attraction for Roman spectators.\n[…]\nBeneath the Colosseum, a network of subterranean passageways that were once used for transporting wild animals and gladiators to the arena, opened to the public in summer 2010.\n[…]\nAt the insistence of St. Leonard of Port Maurice, Pope Benedict XIV (1740–1758) forbade the quarrying of the Colosseum and erected Stations of the Cross around the arena, which remained until February 1874. Benedict Joseph Labre spent the later years of his life within the walls of the Colosseum, living on alms, before he died in 1783. Several 19th century popes funded repair and restoration work on the Colosseum, and it still retains its Christian connection today.\n[…]\nThe Colosseum has appeared in numerous films, artworks and games. It is featured in films such as Roman Holiday, Gladiator, The Way of the Dragon, Jumper, and Godzilla x Kong: The New Empire. Additionally, Coliseum Mountain in Alberta, Canada was named after the Colosseum.\n[…]\nThe Los Angeles Memorial Coliseum entrance was inspired by the Colosseum."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Arena",
        "situacao": "ok",
        "texto": "An arena is a large enclosed venue, often circular or oval-shaped, designed to showcase theatre, musical performances, or sporting events. It comprises a large open space surrounded on most or all sides by tiered seating for spectators, and may be covered by a roof. The key feature of an arena is that the event space is the lowest point, allowing maximum visibility. Arenas are usually designed to \n[…]\nThe term arena is sometimes used as a synonym for a very large venue such as Pasadena's Rose Bowl, but such a facility is typically called a stadium. The use of one term over the other has mostly to do with the type of event.\n[…]\nFootball (be it association, rugby, gridiron, Australian rules, or Gaelic) is typically played in a stadium, while basketball, volleyball, handball, and ice hockey are typically played in an arena, although many of the larger arenas hold more spectators than do the stadiums of smaller colleges or high schools. There are exceptions. The home of the Duke University men's and women's basketball teams would qualify as an arena, but the facility is called Cameron Indoor Stadium.\n[…]\nThere is also the sport of indoor American football (one variant of which is explicitly known as arena football), a variant of the outdoor game that is designed for the usual smaller playing surface of most arenas; variants of other traditionally outdoor sports, including box lacrosse as well as futsal and indoor soccer, also exist.\n[…]\nThe term \"arena\" is also used loosely to refer to any event or type of event which either literally or metaphorically takes place in such a location, often with the specific intent of comparing an idea to a sporting event. Such examples of these would be terms such as \"the arena of war\", \"the arena of love\" or \"the political arena\".\n[…]\nIce hockey arena"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Coliseu",
        "situacao": "ok",
        "texto": "Coliseu (em italiano:  Colosseo), também conhecido como Anfiteatro Flaviano (em latim: Amphitheatrum Flavium; em italiano:  Anfiteatro Flavio), é um anfiteatro oval localizado no centro da cidade de Roma, capital da Itália. Construído com tijolos revestidos de argamassa e areia, e originalmente cobertos com travertino é o maior anfiteatro já construído e está situado a leste do Fórum Romano.\n[…]\nO nome original do Coliseu de Roma era Anfiteatro Flávio ou Flaviano (em latim, Amphitheatrum Flavium), tendo sido construído no reinado dos imperadores da Dinastia Flaviana, após o governo do imperador Nero. Curiosamente, este nome não foi exclusivo do Coliseu, visto que Vespasiano e Tito haviam construído um anfiteatro que portou o mesmo nome, na cidade de Pozzuoli, na província de Nápoles.\n[…]\nO nome Anfiteatro Flavio é empregado ainda hoje, embora seja mais popularmente conhecido como Coliseu de Roma.\n[…]\nA arena (87,5 m por 55 m) possuía um piso de madeira, normalmente coberto de areia para absorver o sangue dos combates (certa vez foi colocada água na representação de uma batalha naval), sob o qual existia um nível subterrâneo com celas e jaulas que tinham acessos diretos para a arena. Alguns detalhes dessa construção, como a cobertura removível que poupava os espectadores do sol, são bastante interessantes, e mostram o refinamento atingido pelos construtores romanos.\n[…]\nQuando foi inaugurado tinha no centro, um piso de madeira coberto de areia. Foi construído sobre um complexo subterrâneo com um labirinto de túneis onde animais selvagens eram enjaulados.\n[…]\nAtualmente está sem piso e o labirinto de túneis secretos, ou \"hipogeu\", está à vista há mais de um século. Em 2021, o governo italiano prometeu a criação de um novo piso retrátil que restaurará o anfiteatro à sua glória da era dos gladiadores.\n[…]\nJogos inaugurais do Coliseu\n[…]\nTour virtual do Coliseu\n[…]\nEstrutura do Coliseu",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Coliseu",
      "descricao": "Anfiteatro Flávio, grande anfiteatro de pedra da Roma Antiga, no centro de Roma, palco de combates de gladiadores."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O apelido Coliseu, dado ao Anfiteatro Flávio, em Roma, viria de uma estátua colossal que ficava ao lado. Ela retratava qual imperador?",
    "resposta": "Nero",
    "fonte": [
      "https://en.wikipedia.org/wiki/Colosseum",
      "https://en.wikipedia.org/wiki/Colossus_of_Nero"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Colosseum",
        "situacao": "ok",
        "texto": "The Colosseum ( KOL-ə-SEE-əm; Italian: Colosseo [kolosˈsɛːo]) is an elliptical amphitheatre in the centre of the city of Rome, Italy, just east of the Roman Forum. It is the largest ancient amphitheatre ever built, and is the largest standing amphitheatre in the world. Construction began under the Emperor Vespasian (r. 69–79 AD) in 72 and was completed in AD 80 under his successor and heir, Titus \n[…]\nThe name Colosseum is believed to be derived from a colossal statue of Nero on the model of the Colossus of Rhodes. The giant bronze sculpture of Nero as a solar deity was moved to its position beside the amphitheatre by the emperor Hadrian (r. 117–138). The word colosseum is a neuter Latin noun formed from the adjective colosseus, meaning \"gigantic\" or \"colossean\". By the year 1000 the Latin name \"Colosseum\" had been coined to refer to the amphitheatre from the nearby \"Colossus Solis\".\n[…]\nHe built the grandiose Domus Aurea on the site, in front of which he created an artificial lake surrounded by pavilions, gardens and porticoes. The existing Aqua Claudia aqueduct was extended to supply water to the area and the gigantic bronze Colossus of Nero was set up nearby at the entrance to the Domus Aurea.\n[…]\nAlthough the Colossus was preserved, much of the Domus Aurea was torn down. The lake was filled in and the land reused as the location for the new Flavian Amphitheatre. Gladiatorial schools and other support buildings were constructed nearby within the former grounds of the Domus Aurea. Vespasian's decision to build the Colosseum on the site of Nero's lake can be seen as a populist gesture of returning to the people an area of the city which Nero had appropriated for his own use.\n[…]\nThe Los Angeles Memorial Coliseum entrance was inspired by the Colosseum.\n[…]\nNero Burning ROM's logo is inspired by the colosseum.\n[…]\n3D model of the past and present of the colosseum – The Only Progress is Human"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Colossus_of_Nero",
        "situacao": "ok",
        "texto": "The Colossus of Nero (Colossus Neronis) was a 30-metre (98 ft) bronze statue that the Emperor Nero (37–68 AD) created in the vestibule of his Domus Aurea, the imperial villa complex which spanned a large area from the north side of the Palatine Hill, across the Velian ridge to the Esquiline Hill in Rome. It was modified by Nero's successors into a statue of the sun god Sol.\n[…]\nThe last mention of the Colossus is in an illuminated manuscript from the late 4th century AD. The statue disappeared sometime afterwards, likely toppled by an earthquake or destroyed during the Sack of Rome. Today, the only remnants of the statue are some concrete blocks that once made up the foundation of its marble pedestal.\n[…]\nShortly after Nero's death in AD 68, the Emperor Vespasian added a radiate crown and renamed it Colossus Solis, after the Roman sun god Sol. Around 128, Emperor Hadrian ordered the statue moved from the Domus Aurea to just northwest of the Colosseum in order to create space for the Temple of Venus and Roma. It was moved by the architect Decriannus with the use of 24 elephants.\n[…]\nThe last certain mention from antiquity of the statue is the reference in the Chronography of 354. Today, nothing remains of the Colossus of Nero save for the foundations of the pedestal at its second location near the Colosseum. It was possibly destroyed during the Sack of Rome in 410, or toppled in one of a series of fifth-century earthquakes, and its metal scavenged.\n[…]\nThe name of the Roman amphitheatre, the Colosseum, is derived from this statue.\n[…]\nThis is often mistranslated to refer to the Colosseum rather than the Colossus (as in, for instance, Byron's poem Childe Harold's Pilgrimage). However, at the time that Bede wrote, the masculine noun coliseus was applied to the statue rather than to what was still known as the Amphitheatre."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Coliseu",
        "situacao": "ok",
        "texto": "Coliseu (em italiano:  Colosseo), também conhecido como Anfiteatro Flaviano (em latim: Amphitheatrum Flavium; em italiano:  Anfiteatro Flavio), é um anfiteatro oval localizado no centro da cidade de Roma, capital da Itália. Construído com tijolos revestidos de argamassa e areia, e originalmente cobertos com travertino é o maior anfiteatro já construído e está situado a leste do Fórum Romano.\n[…]\nO nome original do Coliseu de Roma era Anfiteatro Flávio ou Flaviano (em latim, Amphitheatrum Flavium), tendo sido construído no reinado dos imperadores da Dinastia Flaviana, após o governo do imperador Nero. Curiosamente, este nome não foi exclusivo do Coliseu, visto que Vespasiano e Tito haviam construído um anfiteatro que portou o mesmo nome, na cidade de Pozzuoli, na província de Nápoles.\n[…]\nO nome Anfiteatro Flavio é empregado ainda hoje, embora seja mais popularmente conhecido como Coliseu de Roma.\n[…]\nA sua designação de \"Coliseu\" começou a difundir-se a partir do século VIII, o qual se crê que tenha sido devido a uma grande estátua de Nero, que se encontrava perto do edifício, na Casa Dourada, conhecida popularmente como o Colosso de Nero. Este fato pode ter sido a razão pela qual o anfiteatro de Roma tenha adoptado o nome de Coliseu. Essa dita estátua foi destruída provavelmente para reciclagem do seu bronze.\n[…]\nA construção começou sob ordem de Vespasiano numa área que se encontrava no fundo de um vale entre as colinas de Célio, Esquilino e Palatino. O lugar fora devastado pelo Grande incêndio de Roma do ano 64, durante a época de governo do imperador Nero, e mais tarde havia sido reurbanizado para o prazer pessoal do imperador com a construção de um enorme lago artificial, da Casa Dourada (em latim: Domus Aurea), situada num complexo de uma villa, e de uma colossal estátua de si mesmo.\n[…]\nRoma Antiga\n[…]\nJogos inaugurais do Coliseu\n[…]\nTour virtual do Coliseu\n[…]\nEstrutura do Coliseu",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Panteão de Roma",
      "descricao": "Antigo templo romano de cúpula de concreto, em Roma, reconstruído no reinado de Adriano e hoje igreja."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Que nome tem a grande abertura circular no alto da cúpula do Panteão de Roma, por onde entram a luz e a chuva?",
    "resposta": "Óculo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pantheon,_Rome",
      "https://en.wikipedia.org/wiki/Oculus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pantheon,_Rome",
        "situacao": "ok",
        "texto": "The Pantheon (UK: , US: ; Latin: Pantheum, from Ancient Greek  Πάνθειον (Pantheion) '[temple] of all the gods') is an ancient temple in Rome, Italy, originally built under emperor Augustus (27 BC–AD 14) and reconstructed under Hadrian (117–138); since AD 609, it is a Catholic church called the Basilica of St. Mary and the Martyrs (Italian: Basilica di Santa Maria ad Martyres).\n[…]\nMany relics were looted or destroyed during the Sack of Rome in 1527 by the mutinying armies of Charles V, Holy Roman Emperor. In April 1536, after the Conquest of Tunis, the emperor visited Rome in a triumphal procession that included a visit to the Pantheon. According to legend, Charles wanted to climb the dome to peer down through the oculus. His guide, the keeper's son, recounts feeling a sudden urge to push the emperor over the edge of the opening as revenge for the city's devastation.\n[…]\nThey were floated by barge down the Nile when the water level was high during the spring floods, and then transferred to vessels to cross the Mediterranean Sea to the Roman port of Ostia. There, they were transferred back onto barges and pulled up the Tiber River to Rome. After being unloaded near the Mausoleum of Augustus, the site of the Pantheon was still about 700 metres away. Thus, it was necessary to either drag them or to move them on rollers to the construction site.\n[…]\n\"Beggar's Rome\" – A self-directed virtual tour of St. Maria ad Martyres (Pantheon) and other Roman churches\n[…]\nPantheon Rome, Virtual Panorama and photo gallery\n[…]\nPantheon, article in Platner's Topographical Dictionary of Ancient Rome\n[…]\nPantheon Rome vs Pantheon Paris. Archived 24 June 2019 at the Wayback Machine.\n[…]\nPantheon at Structurae\n[…]\nPanoramic Virtual Tour inside the Pantheon Archived 11 July 2021 at the Wayback Machine\n[…]\nHigh-resolution 360° Panoramas and Images of Pantheon|Art Atlas Archived 1 January 2022 at the Wayback Machine"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Oculus",
        "situacao": "desambiguacao",
        "texto": "Oculus (a term from Latin oculus, meaning 'eye'), may refer to the following:\n\n\n== Architecture ==\nOculus (architecture), a circular opening in the centre of a dome or in a wall\n\n\n== Arts, entertainment, and media ==\nOculus (film), a 2013 American supernatural psychological horror film directed by Mike Flanagan\nOculus (perspective), the point in space where a viewer sees a scene to be depicted in "
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pante%C3%A3o_%28Roma%29",
        "situacao": "ok",
        "texto": "Panteão (em latim: Pantheon) é um edifício em Roma, Itália, encomendado por Marco Vipsânio Agripa durante o reinado do imperador Augusto (r. 27 a.C.–14 d.C.) e reconstruído por Adriano (r. 117–138) por volta de 126.\n[…]\nSua planta é circular com um pórtico de grandes colunas coríntias de granito (oito na primeira fila e dois grupos de quatro na segunda) suportando um frontão. Um vestíbulo retangular liga o pórtico à rotunda, que está coberta por uma enorme cúpula de caixotões de concreto encimada por uma abertura central (óculo) descoberta. Quase dois mil anos depois de ter sido construído, esta cúpula é ainda hoje a maior cúpula de concreto não armado do mundo.\n[…]\nA altura até o óculo e o diâmetro da circunferência interior são idênticos, 43,3 metros.\n[…]\nPortanto, o interior caberia exatamente dentro de um cubo e poderia abrigar uma esfera perfeita de 43,3 metros de diâmetro. Estas dimensões fazem muito mais sentido quando expressas nas unidades de medida da Roma Antiga: a cúpula tem 150 pés romanos; o óculo tem 30 pés de diâmetro; a porta tem 40 pés de altura. Substancialmente maior que as cúpulas anteriores, o Panteão ainda detém o recorde de mair cúpula de concreto não reforçado do mundo.\n[…]\nO interior da cúpula provavelmente foi desenhado para simbolizar a abóbada celeste. O óculo no ápice e a porta de entrada são as únicas fontes de luz natural no interior. No decorrer de um dia, a luz do óculo passeia pelo espaço num movimento inverso ao de um relógio de sol. O óculo serve ainda como sistema de resfriamento e ventilação do edifício; durante chuvas e tempestades, um sistema de drenagem no piso remove a água que escorre pela abertura.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Erecteion",
      "descricao": "Templo grego da Acrópole de Atenas, do século cinco antes de Cristo, famoso pelo pórtico das cariátides."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Na Acrópole de Atenas, um pórtico do templo Erecteion é sustentado por estátuas de mulheres no lugar de colunas. Como se chamam essas figuras?",
    "resposta": "Cariátides",
    "fonte": [
      "https://en.wikipedia.org/wiki/Erechtheion",
      "https://en.wikipedia.org/wiki/Caryatid"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Erechtheion",
        "situacao": "ok",
        "texto": "The Erechtheion (, latinized as Erechtheum ; Ancient Greek: Ἐρέχθειον, Modern Greek: Ερέχθειο) or Temple of Athena Polias is an ancient Greek Ionic temple, on the north side of the Acropolis, Athens, that was primarily dedicated to the goddess Athena.\n[…]\nTo the south of the Erechtheion site would have been the Dörpfeld Foundations Temple, now thought to be the archaic Temple of Athena Polias, the foundations of which are visible on the acropolis today. Examination of the remains of the north edge of this temple by Korres might suggest the boundaries of the pre-Ionic Erechtheion site and therefore determine the shape of the classical temenos.\n[…]\nWith the advent of Ottoman control and the adaptation of the Acropolis plateau to a garrison, the Erechtheion took on its final incarnation as the Dizdar's harem.\n[…]\nThe Erechtheion has two figural sculptural programmes: the frieze; and the korai of the Maiden porch. The entablature of the naos and north porch has a frieze of blue Eleusinian limestone that was decorated with white Pentelic marble figures attached by means of iron dowels. This \"cameo-like\" effect of the contrasting stones was unique among Ionic temples and rare in any other applications. Of the sculpted elements, 112 fragments of the frieze have survived, perhaps 80% of the figures.\n[…]\nTravellers' accounts of the Erechtheion are relatively scarce before the 18th century, when relations between the Ottoman Empire and Europe began to improve and access to Greece was opened. Moreover, the building north of the Parthenon was not identified with Pausanias' description of the Temple of Athena Polias until Spon and Wheler's account of the topography of the acropolis published in 1682."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Caryatid",
        "situacao": "ok",
        "texto": "A caryatid ( KAIR-ee-AT-id, KARR-; Ancient Greek: Καρυᾶτις, romanized: Karuâtis; pl. Καρυάτιδες, Karuátides) is a sculpted female figure serving as an architectural support taking the place of a column or a pillar supporting an entablature on her head. The Greek term karyatides literally means \"maidens of Karyai\", an ancient town on the Peloponnese.\n[…]\nThe best-known and most-copied examples are the six figures of the Caryatid porch of the Erechtheion on the Acropolis in Athens. One of these original six figures was removed by Lord Elgin in the early 19th century, an action that caused significant damage to the temple. The figure is currently held in the British Museum in London.\n[…]\nThe Greek government does not recognise the British Museum's claim of ownership over any part of the Acropolis monuments, and the return of the Caryatid, along with other monuments commonly known as the Elgin Marbles, to Athens has been the subject of an ongoing international dispute. The Acropolis Museum holds the other five figures, which are replaced onsite by replicas.\n[…]\nThe five originals that are in Athens are now being exhibited in the new Acropolis Museum, on a special balcony that allows visitors to view them from all sides. The pedestal for the caryatid removed to London remains empty, awaiting its return. From 2011 to 2015, they were cleaned by a specially constructed laser beam, which removed accumulated soot and grime without harming the marble's patina.\n[…]\nThe Romans also copied the Erechtheion caryatids, installing copies in the Forum of Augustus and the Pantheon in Rome, and at Hadrian's Villa at Tivoli. Another Roman example, found on the Via Appia, is the Townley Caryatid.\n[…]\n1984 Les Dites Cariatides\n[…]\n2005 Les Dites Cariatides Bis\n[…]\nConserving the Caryatids in the Acropolis Museum\n[…]\nCariatides room of the Louvre on YouTube"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Erecteion",
        "situacao": "ok",
        "texto": "O Erecteion, também conhecido como Erectêion ou Erectéion (em grego Έρέχθειον, transl. Eréchtheion) é um templo grego consagrado a Atena e a Posídon. Foi construído entre 421 a 406 a.C., por Mnesicles.\n[…]\nPossui duas celas individuais, e irregulares, devido à diferença de terreno e três pórticos desiguais. O pórtico Norte distingue-se pela altura das suas colunas e delicadeza dos capitéis; o pórtico Sul é o mais famoso por ter seis cariátides, ou korai, fazendo as vezes de colunas. Em redor de todo o templo havia um friso, da qual restam alguns fragmentos conservados no Museu da Acrópole de Atenas.\n[…]\nJá na Ilíada, embora em passo considerado do século VI a.C., fala-se de um templo dedicado a Erecteu.\n[…]\nNo interior do templo, vivia uma serpente, para a qual se oferecia um bolo sagrado cuja recusa era tomada como sinal de mau agouro para os atenienses.\n[…]\nAcrópole de Atenas\n[…]\nErecteu\n[…]\nMedia relacionados com Erecteion no Wikimedia Commons",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Fontana di Trevi",
      "descricao": "Fonte barroca monumental no bairro de Trevi, em Roma, concluída em 1762."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Num carro em forma de concha puxado por cavalos-marinhos, qual divindade ocupa o nicho central da Fontana di Trevi, em Roma?",
    "resposta": "Oceano",
    "distratores": [
      "Netuno",
      "Tritão",
      "Nereu"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Trevi_Fountain"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Trevi_Fountain",
        "situacao": "ok",
        "texto": "The Trevi Fountain (Italian: Fontana di Trevi) is an 18th-century fountain in the Trevi district in Rome, Italy, designed by Italian architect Nicola Salvi and completed by Giuseppe Pannini in 1762. Standing 26.3 metres (86 ft) high and 49.15 metres (161.3 ft) wide, it is the largest Baroque fountain in the world and one of the most famous fountains in the world.\n[…]\nSalvi died in 1751 with his work half finished, but he had made sure a barber's unsightly sign would not spoil the ensemble, hiding it behind a sculpted vase, called by Romans the asso di coppe, the \"Ace of Cups\", because of its resemblance to a Tarot card. Four different sculptors were hired to complete the fountain's decorations: Pietro Bracci (whose statue of Oceanus sits in the central niche), Filippo della Valle, Giovanni Grossi, and Andrea Bergondi.\n[…]\nThe Trevi Fountain was finished in 1762 by Pannini, who substituted the present allegories for planned sculptures of Agrippa and Trivia, the Roman virgin. It was officially opened and inaugurated on 22 May by Pope Clement XIII. The majority of the piece is made from Travertine stone, quarried near Tivoli, about 35 kilometres (22 miles) east of Rome.\n[…]\nThe Trevi Fountain is depicted in the third movement, \"The Trevi Fountain at Noon\", of Ottorino Respighi's 1916 symphonic poem Fountains of Rome.\n[…]\nIn 1973, the Italian national postal service dedicated a postage stamp to the Trevi Fountain.\n[…]\nLego released a set based on Trevi Fountain on March 1, 2025.\n[…]\nList of fountains in Rome\n[…]\nEngraving of the fountain's more modest predecessor.\n[…]\nRoman Bookshelf – Trevi Fountain – Views from the 18th and 19th centuries\n[…]\nTrevi Fountain Live Cam\n[…]\nTrevi Fountain Virtual 360° panorama and photo gallery.\n[…]\nTurismoroma: Poli Palace – Trevi fountain"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Fontana_di_Trevi",
        "situacao": "ok",
        "texto": "A Fontana di Trevi (em português Fontana di Trevi) é a maior (cerca de 26 metros de altura e 20 metros de largura) e mais ambiciosa construção de fontes barrocas da Itália e está localizada no rione Trevi, em Roma. A fonte está encostada na fachada do Palazzo Poli.\n[…]\nSalvi morreu em 1751 com sua obra meio acabada, mas ele havia se assegurado de que o sinal feio de um barbeiro não estragasse o conjunto, escondendo-o atrás de um vaso esculpido, chamado pelos romanos de asso di coppe, o \"Ás de Copas\", por causa de sua semelhança com uma carta de tarô. Quatro escultores diferentes foram contratados para completar as decorações da fonte: Pietro Bracci (cuja estátua de Oceanus fica no nicho central), Filippo della Valle, Giovanni Grossi e Andrea Bergondi.\n[…]\nA Fontana di Trevi foi concluída em 1762 por Pannini, que substituiu pelas alegorias atuais as esculturas planejadas de Agripa e Trívia, a virgem romana. Foi oficialmente inaugurado e inaugurado em 22 de maio pelo Papa Clemente XIII.\n[…]\nEm 2 de fevereiro de 2026, a prefeitura de Roma começou a cobrar taxa de turistas para visitar a fonte.\n[…]\nEstima-se que 3 000 euros sejam jogados na fonte todos os dias. Em 2016, cerca de € 1,4 milhão (US$ 1,5 milhão) foi jogado na fonte. O dinheiro foi usado para subsidiar um supermercado para os pobres de Roma; No entanto, há tentativas regulares de roubar moedas da fonte, mesmo que seja ilegal fazê-lo.\n[…]\nEm 1964, foi lançado o filme que leva seu nome Fontana di Trevi - filmado pelo diretor Carlo Campogalliani.\n[…]\nPrecedentemente, a fonte foi o cenário do filme estadunidense Three Coins in the Fountain, onde a fonte do título é a própria Fontana di Trevi.\n[…]\nEm Tototruffa 62, Totò tenta vender a fonte a um turista.\n[…]\n«Trevi Fountain». Virtual 360° panorama and photo gallery.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Memorial a Lincoln",
      "descricao": "Monumento em forma de templo grego no National Mall, em Washington, com a estátua sentada de Abraham Lincoln."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Numa das paredes do Memorial a Lincoln, em Washington, está gravado qual discurso do presidente, feito num cemitério militar em 1863?",
    "resposta": "Discurso de Gettysburg",
    "fonte": [
      "https://en.wikipedia.org/wiki/Lincoln_Memorial",
      "https://en.wikipedia.org/wiki/Gettysburg_Address"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lincoln_Memorial",
        "situacao": "ok",
        "texto": "The Lincoln Memorial is  a U.S. national memorial honoring Abraham Lincoln, the 16th president of the United States, located on the western end of the National Mall of Washington, D.C. The memorial is built in a neoclassical style in the form of a classical temple. The memorial's architect was Henry Bacon. In 1920, Daniel Chester French designed the large interior Abraham Lincoln statue, which was\n[…]\nDoric style columns line the temple exterior, and the inscriptions inside include two well-known speeches by Lincoln, the Gettysburg Address, and his second inaugural address. The memorial has been the site of many famous speeches, including Martin Luther King Jr.'s \"I Have a Dream\" speech delivered on August 28, 1963, during the rally at the end of the March on Washington for Jobs and Freedom.\n[…]\nKing's speech, with its language of patriotism and its evocation of Lincoln's Gettysburg Address, was meant to match the symbolism of the Lincoln Memorial as a monument to national unity. Labor leader Walter Reuther, an organizer of the march, persuaded the other organizers to move the march to the Lincoln Memorial from the Capitol Building.\n[…]\nThere are a total of 87 steps (58 steps from the chamber to the plaza and 29 steps from the plaza to the Reflecting Pool). The number of steps matches the phrase from Lincoln's Gettysburg Address, \"four score and seven years\".\n[…]\nThe Memorial's interior is divided into three chambers by two rows of four Ionic columns, each 50 feet (15 m) tall and 5.5 feet (1.7 m) at their base. The central chamber, housing the statue of Lincoln, is 60 feet (18 m) wide, 74 feet (23 m) deep, and 60 feet (18 m) high. The north and south chambers display carved inscriptions of Lincoln's second inaugural address and his Gettysburg Address. Bordering these inscriptions are pilasters ornamented with fasces, eagles, and wreaths.\n[…]\nOther Proposed Designs for the Lincoln Memorial"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Gettysburg_Address",
        "situacao": "ok",
        "texto": "The Gettysburg Address is a dedication speech delivered by Abraham Lincoln, the 16th U.S. president, following the Battle of Gettysburg during the American Civil War. The speech has come to be viewed as one of the most famous, enduring, and historically significant speeches in American history.\n[…]\nOn November 18, 1863, Lincoln departed Washington, D.C. for Gettysburg, accompanied by three of his cabinet members, William Seward, John Usher, and Montgomery Blair, several foreign officials, his secretary John Nicolay, and his assistant secretary, John Hay. During the trip, Lincoln told Hay that he felt weak. The following morning, on November 19, Lincoln mentioned to Nicolay that he felt dizzy.\n[…]\nNearby, Nov. 19, 1863, in dedicating the National Cemetery, Abraham Lincoln gave the address which he had written in Washington and revised after his arrival at Gettysburg the evening of November 18.\n[…]\nDirectly inside the Taneytown Road entrance are the Lincoln Address Memorial and Gettysburg Rostrum, where five U.S. Presidents have spoken. Lincoln, however, was not one of them, and a small metal sign near the speech memorial stirs remains somewhat controversial, reading:\n[…]\nThe importance of the Gettysburg Address in the history of the United States is underscored by its enduring presence in American culture. In addition to its prominent place carved into a stone cella on the south wall of the Lincoln Memorial in Washington, D.C., the Gettysburg Address is frequently referenced in popular culture, with the implicit expectation that contemporary audiences are already familiar with the words Lincoln used.\n[…]\nGettysburg National Military Park (GNMP) Gettysburg Historical Handbook Archived March 6, 2016, at the Wayback Machine\n[…]\nGettysburg Address public domain audiobook at LibriVox"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lincoln_Memorial",
        "situacao": "ok",
        "texto": "O Lincoln Memorial é um monumento localizado em Washington, D.C., Estados Unidos, em homenagem ao 16.º presidente estadunidense Abraham Lincoln. O monumento foi concluído em 1922 e arquitetado por Henry Bacon; o escultor foi Daniel Chester French e o pintor dos murais internos foi Jules Guerin. Está aberto para visitação pública 24 horas por dia, e recebe cerca de 6 milhões de visitantes por ano.\n[…]\nEm 28 de agosto de 1963, o Memorial Lincoln foi o local de culminância da Marcha sobre Washington, um dos maiores comícios políticos da história americana. O líder batista Martin Luther King Jr., com seu memorável discurso I Have a Dream, foi ouvido por pouco mais de 250 000 pessoas aglomeradas nas escadarias do memorial. Posteriormente, dada a repercussão do evento, um piso foi colocado sobre o local onde estava Martin Luther King.\n[…]\nO interior do memorial é dividido em três câmaras por duas fileiras de quatro colunas jônicas, cada uma com 15 metros de altura e 1,7 metro de largura na base. A câmara central, que abriga a estátua de Lincoln, possui 18 metros de largura, 23 metros de profundidade e 18 metros de altura. As câmaras norte e sul exibem inscrições esculpidas do segundo discurso de posse de Lincoln e seu Discurso de Gettysburg. Ao lado dessas inscrições estão pilastras ornamentadas com fasces, águias e coroas.\n[…]\nLogo acima da estátua, está um epitáfio cravado no mármore, que diz:\"Neste templo, como nos corações do povo, para quem salvou a União, a memória de Abraham Lincoln é conservada para sempre\".\n[…]\nNa série Os Simpsons, durante o episódio \"Mr. Lisa Goes to Washington\", Lisa Simpson vai até o Lincoln Memorial em busca de inspiração. Porém devido à grande multidão de turistas, ela desiste e vai até o Jefferson Memorial, onde conversa com o espírito de Thomas Jefferson.\n[…]\nLincoln Memorial Homepage (NPS)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Estátua da Liberdade",
      "descricao": "Estátua de cobre presenteada pela França, na Ilha da Liberdade, em Nova York."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Na tábua que a Estátua da Liberdade segura no braço esquerdo, está gravada em algarismos romanos qual data?",
    "resposta": "Quatro de julho de 1776",
    "fonte": [
      "https://en.wikipedia.org/wiki/Statue_of_Liberty"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Statue_of_Liberty",
        "situacao": "ok",
        "texto": "The Statue of Liberty (Liberty Enlightening the World; French: La Liberté éclairant le monde) is a colossal neoclassical sculpture of a robed and crowned woman on Liberty Island, part of New York City, in New York Harbor. The copper-clad statue, a gift to the United States from the people of France, was designed by French sculptor Frédéric Auguste Bartholdi, and its metal framework built by Gustav\n[…]\nThe statue is a figure of a classically draped woman, inspired by the Roman goddess of liberty, Libertas. She holds a torch above her head with her right hand, and in her left hand carries a tabula ansata inscribed JULY IV MDCCLXXVI (July 4, 1776, in Roman numerals), the date of the U.S. Declaration of Independence. With her left foot she steps on a broken chain and shackle, commemorating the national abolition of slavery following the American Civil War.\n[…]\nThe Statue of Liberty (film), a 1985 Ken Burns documentary film\n[…]\nStatues and sculptures in New York City\n[…]\nStatue of Liberty National Monument\n[…]\nStatue of Liberty–Ellis Island Foundation\n[…]\nStatue of Liberty – UNESCO World Heritage\n[…]\n\"A Giant's Task – Cleaning Statue of Liberty\", Popular Mechanics (February 1932)\n[…]\nViews from the webcams affixed to the Statue of Liberty\n[…]\nMade in Paris The Statue of Liberty 1877–1885 – many historical photographs\n[…]\nStatue of Liberty at Structurae\n[…]\nHistoric American Engineering Record (HAER) No. NY-138, \"Statue of Liberty, Liberty Island, Manhattan, New York City County, NY\", 404 photos, 59 color transparencies, 41 measured drawings, 10 data pages, 33 photo caption pages\n[…]\nHAER No. NY-138-A, \"Statue of Liberty, Administration Building\", 6 photos, 6 measured drawings, 1 photo caption page\n[…]\nHAER No. NY-138-B, \"Statue of Liberty, Concessions Building\", 12 photos, 6 measured drawings, 1 photo caption page\n[…]\nThe Statue of Liberty, BBC Radio 4 discussion with Robert Gildea, Kathleen Burk & John Keane (In Our Time, February 14, 2008)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Est%C3%A1tua_da_Liberdade",
        "situacao": "ok",
        "texto": "Estátua da Liberdade (Liberdade Iluminando o Mundo; em francês: La Liberté éclairant le monde) é uma escultura neoclássica colossal na Ilha da Liberdade, no porto de Nova York, na cidade de Nova York, Estados Unidos. A estátua revestida de cobre, um presente do povo francês ao povo americano, foi projetada pelo escultor francês Frédéric Auguste Bartholdi e sua estrutura de metal foi construída por\n[…]\nÉ uma figura de uma mulher vestida de forma clássica, provavelmente inspirada na deusa romana da liberdade, Libertas. Em uma pose de contrapposto, ela segura uma tocha acima da cabeça com a mão direita e na mão esquerda carrega uma tabula ansata com a inscrição JULY IV MDCCLXXVI (4 de julho de 1776, em algarismos romanos), a data da Declaração de Independência dos EUA.\n[…]\nEm 30 de julho de 1916, durante a Primeira Guerra Mundial, sabotadores alemães detonaram um explosão desastrosa na península de Black Tom, em Jersey City, Nova Jersey, no que hoje faz parte do Liberty State Park, perto da Ilha Bedloe. Foram detonados carros carregados de dinamite e outros explosivos que estavam a ser enviados para a Rússia para os seus esforços de guerra. A estátua sofreu pequenos danos, principalmente no braço direito que segurava a tocha, e ficou fechada por dez dias.\n[…]\nUm novo e poderoso sistema de iluminação foi instalado antes do Bicentenário Americano em 1976. A estátua foi o ponto focal da Operação Vela, uma regata de navios altos de todo o mundo que entrou no porto de Nova York em 4 de julho de 1976 e navegou ao redor da Ilha da Liberdade. O dia terminou com uma espetacular exibição de fogos de artifício perto da estátua.\n[…]\nmeses\" antes da ilha ser reaberta ao público. A estátua e a Ilha da Liberdade reabriram ao público em 4 de julho de 2013. A Ellis Island permaneceu fechada para reparos por mais alguns meses, mas reabriu no final de outubro de 2013.\n[…]\nLista de estátuas por altura",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Palácio de Versalhes",
      "descricao": "Palácio e residência real barroco-clássico em Versalhes, perto de Paris, construído por Luís XIV."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em 1919, o tratado que encerrou a Primeira Guerra Mundial foi assinado em qual salão do Palácio de Versalhes?",
    "resposta": "Salão dos Espelhos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Hall_of_Mirrors",
      "https://en.wikipedia.org/wiki/Treaty_of_Versailles"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hall_of_Mirrors",
        "situacao": "ok",
        "texto": "The Hall of Mirrors (French: Grande Galerie, Galerie des Glaces, Galerie de Louis XIV) is a grand Baroque style gallery and one of the most emblematic rooms in the royal Palace of Versailles near Paris, France. The grandiose ensemble of the hall and its adjoining salons was intended to illustrate the power of the absolutist monarch Louis XIV. Located on the first floor (piano nobile) of the palace\n[…]\nIn 1623, King Louis XIII ordered the construction of a modest two-story hunting lodge at Versailles, which he enlarged to a château from 1631 to 1634. His son Louis XIV declared the site his future permanent residence in 1661 and ordered the transformation into an extensive residence in several stages and on a grandiose scale.\n[…]\nThe marble and porphyry busts of eight Roman emperors are accompanied by sculptures of Greek and Roman deities and Muses, such as Bacchus, Venus (Venus of Arles), Modesty, Hermes, Urania, Nemesis and Diana (Diana of Versailles). The latter, moved to the Louvre in 1798, was replaced by a Diana sculpted by René Frémin for the gardens of the Château de Marly until the restoration of the Hall of Mirrors during 2004 to 2007, which in turn was replaced by a copy of the original Diana.\n[…]\nThis was the manner in which nobles were able to obtain a much sought-after invitation to one of the king's house parties at the Château de Marly, a villa Louis XIV had built north of Versailles on the route to Saint-Germain-en-Laye.\n[…]\nA few decades later French Prime Minister Georges Clemenceau consciously chose the Hall of Mirrors as the site to sign the Treaty of Versailles on 28 June 1919, that officially ended World War I. Thus, the Entente dismantled the German Empire in the very room where it had been proclaimed.\n[…]\nMedia related to Hall of Mirrors (Palace of Versailles) at Wikimedia Commons"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Treaty_of_Versailles",
        "situacao": "ok",
        "texto": "The Treaty of Versailles was a peace treaty signed on 28 June 1919. As the most important treaty of World War I, it ended the state of war between Germany and most of the Allied Powers. It was signed in the Palace of Versailles, exactly five years after the assassination of Archduke Franz Ferdinand, the proximate cause of the war. The other Central Powers on the German side signed separate treatie\n[…]\nThere was immense dissatisfaction with Duan Qirui's government, which had secretly negotiated with the Japanese in order to secure loans to fund their military campaigns against the south. On 12 June 1919, the Chinese cabinet was forced to resign and the government instructed its delegation at Versailles not to sign the treaty. As a result, relations with the Western world deteriorated.\n[…]\nForeign minister Hermann Müller and colonial minister Johannes Bell travelled to Versailles to sign the treaty on behalf of Germany. The treaty was signed on 28 June 1919 and ratified by the National Assembly on 9 July by a vote of 209 to 116.\n[…]\nIn his book The Economic Consequences of the Peace (published 1919), John Maynard Keynes referred to the Treaty of Versailles as a \"Carthaginian peace\", a misguided attempt to destroy Germany on behalf of French revanchism, rather than to follow the fairer principles for a lasting peace set out in Wilson's Fourteen Points, which Germany had accepted at the armistice.\n[…]\nHaving noted that much, Peukert commented that the policy of rapprochement with the Western powers that Gustav Stresemann carried out between 1923 and 1929 were constructive policies that might have allowed Germany to play a more positive role in Europe, and that it was not true that German democracy was doomed to die in 1919 because of Versailles.\n[…]\nLittle Treaty of Versailles\n[…]\nMap of Europe and the impact of the Versailles Treaty Archived 16 March 2015 at the Wayback Machine at omniatlas.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Galeria_dos_Espelhos",
        "situacao": "ok",
        "texto": "A Galeria dos Espelhos (Galerie des Glaces) é uma das principais galerias do Palácio de Versalhes, em Versalhes, França. A sua construção data de 1678, no reinado de Luís XIV.\n[…]\nPara a sua construção e, também, para o salon de la guerre (\"salão da guerra\") e salon de la paix (\"salão da paz\"), que ligavam o grand appartement du roi (\"grande quarto do rei\") com o grande appartement de la reine (\"grande quarto da rainha\"), o arquiteto Jules Hardouin-Mansart utilizou três divisões de cada quarto, tal como do terraço que separava os dois quartos.\n[…]\nUma das características da galeria, são os 17 arcos revestidos com espelho que refletem as 17 janelas em arco viradas para o jardim. Cada arco contém 21 espelhos, num total de 357, utilizados para decorar a galeria. Os arcos estão fixados entre pilastras de mármore cujos capitéis ilustram os símbolos da França. Estes capiteis revestidos a bronze incluem a flor-de-lis e o galo gaulês.\n[…]\nFélibien, André (1694). La description du château de Versailles, de ses peintures, et des autres ouvrags fait pour le roy. [S.l.]: Paris: Antoine Vilette\n[…]\nPiganiol de la Force, Jean-Aymar (1701). Nouvelle description des châteaux et parcs de Versailles et Marly. [S.l.]: Paris: Chez Florentin de la lune\n[…]\nVerlet, Pierre (1985). Le château de Versailles. [S.l.]: Paris: Librairie Arthème Fayard\n[…]\nNolhac, Pierre de (1899). «La construction de Versailles de Le Vau». Revue de l'Histoire de Versailles: 161–171\n[…]\nSabatier, Gérard (1985). «Versailles, ou le sens perdu, manière de montrer la galerie des glaces aux 17e et 18e siècles». Colloque de Versailles\n[…]\n(em francês) La galerie des Glaces em Chateau Versailles",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Arco do Triunfo de Paris",
      "descricao": "Arco monumental na Praça Charles de Gaulle, no alto da Champs-Élysées, encomendado por Napoleão."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Sob o Arco do Triunfo de Paris, uma chama acesa todas as noites homenageia quem está enterrado ali. Quem?",
    "resposta": "O Soldado Desconhecido",
    "fonte": [
      "https://en.wikipedia.org/wiki/Arc_de_Triomphe"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Arc_de_Triomphe",
        "situacao": "ok",
        "texto": "The Arc de Triomphe de l'Étoile (UK: , US: , French: [aʁk də tʁijɔ̃f də letwal] ; \"Triumphal Arch of the Star\"), often simply called the Arc de Triomphe, is one of the most famous monuments in Paris, France. It is located at the western end of the Champs-Élysées, at the centre of the Place Charles de Gaulle—formerly known as the \"Place de l'Étoile\"—named for the star-shaped configuration formed by\n[…]\nParis's Arc de Triomphe was the tallest triumphal arch until the completion of the Monument to the Revolution in Mexico City, Mexico in 1938, which is 67 m (220 ft) high. The Arch of Triumph in Pyongyang, North Korea, completed in 1982, is modeled on the Arc de Triomphe and is slightly taller at 60 m (197 ft). The Grande Arche in La Défense near Paris, France is 110 m (361 ft) high, and, if considered to be a triumphal arch, is the world's tallest.\n[…]\nBy the early 1960s, the monument had grown very blackened from coal soot and automobile exhaust, and during 1965–1966 it was cleaned through bleaching. In the prolongation of the Avenue des Champs-Élysées, a new arch, the Grande Arche de la Défense, was built in 1982, completing the line of monuments that forms Paris's Axe historique. After the Arc de Triomphe du Carrousel and the Arc de Triomphe de l'Étoile, the Grande Arche is the third arch built on the same perspective.\n[…]\nWhile many structures around the world resemble the Arc de Triomphe, some were actually inspired by it. Replicas that used its design as a model include the Rosedale World War I Memorial Arch in Kansas City, United States (1924); the Arcul de Triumf in Bucharest, Romania (1936); the Arch of Triumph in Pyongyang, North Korea (1982); a miniature version at the Paris Casino in Las Vegas, United States (1999); and the Simpang Lima Gumul Monument in Kediri, Indonesia (2008).\n[…]\nView from the rooftop terrace of the Arc de Triomphe on YouTube"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Arco_do_Triunfo_%28Fran%C3%A7a%29",
        "situacao": "ok",
        "texto": "O Arco do Triunfo (francês: Arc de Triomphe) é um monumento localizado na cidade de Paris, construído em comemoração às vitórias militares de Napoleão Bonaparte, o qual ordenou a sua construção em 1806, aos moldes dos arcos triunfais romanos. Inaugurado em 1836, a monumental obra detém, gravados, os nomes de 158 batalhas e 660 líderes militares. Em sua base, situa-se o túmulo do soldado desconheci\n[…]\nSob o Arco está o Túmulo do Soldado Desconhecido da Primeira Guerra Mundial. Enterrado no Dia do Armistício de 1920, uma chama eterna arde em memória dos mortos que nunca foram identificados (agora em ambas as guerras mundiais).\n[…]\nUma cerimônia é realizada no Túmulo do Soldado Desconhecido todo dia 11 de novembro, no aniversário do Armistício de 11 de novembro de 1918, assinado pelas Potências da Entente e Alemanha em 1918. Originalmente, foi decidido em 12 de novembro de 1919 enterrar os restos do soldado desconhecido no Panteão, mas uma campanha pública de cartas levou à decisão de enterrá-lo sob o Arco do Triunfo.\n[…]\nO caixão foi colocado na capela do primeiro andar do Arco em 10 de novembro de 1920 e colocado em seu local de descanso final em 28 de janeiro de 1921. A placa no topo traz a inscrição: Ici repose un soldat français mort pour la Patrie, 1914-1918 (\"Aqui repousa um soldado francês morto pela Pátria, 1914-1918\").\n[…]\nEm 1961, o presidente dos EUA, John F. Kennedy, e a primeira-dama, Jacqueline Kennedy, prestaram suas homenagens no Túmulo do Soldado Desconhecido, acompanhados pelo presidente Charles de Gaulle. Após o assassinato do presidente Kennedy em 1963, a Sra. Kennedy lembrou-se da chama eterna no Arco do Triunfo e solicitou que uma chama eterna fosse colocada ao lado do túmulo de seu marido no Cemitério Nacional de Arlington, na Virgínia.\n[…]\nParis\n[…]\n«Vista de satélite do Arco do Triunfo»  no Google Maps\n[…]\n«Vista do terraço do Arco do Triunfo»  no YouTube",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Catedral de Notre-Dame de Paris",
      "descricao": "Catedral gótica na Île de la Cité, em Paris, iniciada no século doze."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Na Catedral de Notre-Dame de Paris, como se chamam as figuras de pedra, de boca aberta, que escoam a água da chuva dos telhados?",
    "resposta": "Gárgulas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Notre-Dame_de_Paris",
      "https://en.wikipedia.org/wiki/Gargoyle"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Notre-Dame_de_Paris",
        "situacao": "ok",
        "texto": "Notre-Dame de Paris (French: Cathédrale Notre-Dame de Paris French: [nɔtʁ(ə) dam də paʁi] : \"Cathedral of Our Lady of Paris\"), often referred to simply as Notre-Dame, is a medieval Catholic cathedral and basilica on the Île de la Cité (an island in the River Seine), in the 4th arrondissement of Paris, France. It is the cathedral church of the Roman Catholic Archdiocese of Paris.\n[…]\nDuring the late 12th and early 13th centuries, while the present Gothic cathedral was under construction, Notre-Dame de Paris became the birthplace and leading centre of the Notre-Dame school of polyphony.\n[…]\nShortly after the fire, French clockmaker Jean-Baptiste Vior discovered an almost identical 1867 Collin-Wagner movement in storage at Sainte-Trinité Church in northern Paris. Olivier Chandez, who had been responsible for the upkeep of Notre-Dame's clock, described the find as \"almost a miracle.\" The clock cannot be installed in Notre-Dame, but it was hoped that the clock could be used to create a new clock for Notre-Dame to the same specifications as the one which was destroyed.\n[…]\nUntil the French Revolution, Notre-Dame was the property of the archbishop of Paris and therefore the Catholic Church. It was nationalized on 2 November 1789 and since then has been the property of the French state. Under the Concordat of 1801, use of the cathedral was returned to the Church, but not ownership. Legislation from 1833 and 1838 clarified that cathedrals were maintained at the expense of the French government.\n[…]\nMusée de Notre Dame de Paris\n[…]\nNotre-Dame du Calvaire, Paris\n[…]\nOfficial website of Friends of Notre-Dame de Paris\n[…]\nOfficial site of Music at Notre-Dame de Paris (in English) also (in French)\n[…]\nNotre-Dame de Paris Cathedral Fire  Archived 1 June 2022 at the Wayback Machine\n[…]\nTridentine Mass celebrated in Notre-Dame in 2017\n[…]\nRe-opening ceremony for Notre Dame in Paris, 2024 on C-SPAN"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Gargoyle",
        "situacao": "ok",
        "texto": "In architecture, and specifically Gothic architecture, a gargoyle () is a carved or formed grotesque with a spout designed to convey water from a roof and away from the side of a building, thereby preventing it from running down masonry walls and eroding the mortar between. Architects often used multiple gargoyles on a building to divide the flow of rainwater off the roof to minimize potential dam\n[…]\nMany medieval cathedrals included gargoyles and chimeras. According to French architect and author Eugène Viollet-le-Duc, himself one of the great producers of gargoyles in the 19th century, the earliest known medieval gargoyles appear on Laon Cathedral (c. 1200–1220). One of the more famous examples is the gargoyles of Notre-Dame de Paris, which dons 54 chimeras crowded around the railings of the cathedral that came to be in the 1843 restoration project.\n[…]\nJohn Taylor Arms educated the American public of gargoyles through his own etchings of various gargoyles found across Europe. Some instances include etchings of the gargoyles at Notre Dame Cathedral and Amiens Cathedral. His works were regarded as incredibly accurate in portraying the emotion in the expression of the original gargoyles."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Catedral_de_Notre-Dame_de_Paris",
        "situacao": "ok",
        "texto": "A Catedral de Notre-Dame de Paris (em francês: Cathédrale Notre-Dame de Paris; em português: \"Catedral de Nossa Senhora de Paris\") é uma das mais antigas catedrais francesas em estilo gótico. Iniciada sua construção no ano de 1163, é dedicada à Virgem Maria e situa-se na Île de la Cité em Paris, rodeada pelas águas do rio Sena.\n[…]\nA construção inicia-se em 1163 reflectindo alguns traços condutores da Catedral de Saint Denis, subsistindo ainda dúvidas quando à identidade de quem terá \"colocado\" a primeira pedra, o Bispo Maurice de Sully ou o Papa Alexandre III. Ao longo do processo (a construção, incluindo modificações, durou até sensivelmente meados do século XIV) foram vários os arquitectos que participaram no projecto, esclarecendo este factor as diferenças estilísticas presentes no edifício.\n[…]\nEm 1871, com a curta ascensão da Comuna de Paris, a catedral torna-se novamente pano de fundo a turbulências sociais, durante as quais se crê ter sido quase incendiada. Em 1965, em consequência de escavações para a construção de um parque subterrâneo na praça da catedral, foram descobertas catacumbas que revelaram ruínas romanas, da catedral merovíngia do século VI e de habitações medievais.\n[…]\nNo dia 15 de abril de 2019, às 18h50 horário local, a catedral pegou fogo causando danos na torre e no telhado. A extensão do dano foi inicialmente desconhecida como foi a causa do incêndio, embora tenha sido sugerido que ele estava ligado à renovação da catedral. Um porta-voz afirmou que toda a zona de madeira provavelmente cairia e que a abóbada do edifício também poderia ser ameaçada.\n[…]\nÉ possível visitar a torre norte de onde, após uma subida de 386 degraus, se pode vislumbrar a cidade de Paris, os pináculos e os gárgulas da catedral que povoaram o romance de Victor Hugo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Catedral de Notre-Dame de Paris",
      "descricao": "Catedral gótica na Île de la Cité, em Paris, iniciada no século doze."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Em que ano um grande incêndio derrubou a agulha da Catedral de Notre-Dame de Paris?",
    "resposta": "2019",
    "fonte": [
      "https://en.wikipedia.org/wiki/Notre-Dame_de_Paris_fire"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Notre-Dame_de_Paris_fire",
        "situacao": "ok",
        "texto": "On 15 April 2019, at 18:18 CEST, a structural fire broke out in the roof space of Notre-Dame de Paris, a medieval Catholic cathedral in Paris, France, part of the \"Paris, Banks of the Seine\" UNESCO World Heritage Site.\n[…]\nThe cathedral was then closed immediately. Two days after the blaze, President of France Emmanuel Macron set a five-year deadline to restore it. Notre-Dame did not hold a Christmas Mass in 2019 for the first time since 1803. By September 2021, donors had contributed over €840 million to the rebuilding effort. After three years of reconstruction, the cathedral reopened on 7 December 2024, and follow-up restoration work on the cathedral's surroundings and interior fittings continued into 2026.\n[…]\nSamples of honey collected in July 2019 revealed higher lead concentrations downwind from Notre-Dame and lead isotopes tagged the lead as originating from the fire and not other potential sources of pollutants.\n[…]\nThe ongoing status of the restoration was posted regularly by the organisation Friends of Notre-Dame de Paris.\n[…]\n2019 Shuri Castle fire\n[…]\nNotre-Dame de Paris—Official site\n[…]\nFriends of Notre-Dame de Paris—Official 501(c)(3) charity leading the international fundraising efforts to rebuild and restore Notre-Dame Cathedral\n[…]\n\"Saving Notre Dame\"—NOVA episode from PBS; scientists and engineers fight to save Notre Dame Cathedral after the 2019 fire\n[…]\n\"Saving Notre Dame's Flying Buttresses\"—NOVA episode segment from PBS; engineers install supports to the 14 flying buttresses to prevent their collapse after the 2019 fire; these supports stabilized the structure to allow for work on the interior (3 minutes)\n[…]\nBefore the Fire: Notre-Dame de Paris in Pictures"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Inc%C3%AAndio_da_Catedral_de_Notre-Dame_de_Paris",
        "situacao": "ok",
        "texto": "O incêndio da Catedral de Notre-Dame de Paris foi um incêndio violento que se deflagrou na Catedral de Notre-Dame de Paris em 15 de abril de 2019. Teve início ao fim da tarde no telhado do edifício, e causou danos consideráveis. A agulha da catedral e o telhado colapsaram, e o interior e alguns dos artefactos que albergava foram gravemente danificados.\n[…]\nA catedral de Notre-Dame de Paris data do século XII, compondo-se de uma mistura de cantaria nas estruturas de suporte, e madeira nos telhados principais e na sua agulha icónica. Em 2018, um apelo emergencial declarou que a catedral necessitava de manutenção e restauro. Quando foram levantadas as preocupações sobre o estado da catedral, o arquitecto director dos monumentos históricos franceses, Philippe Villeneuve, declarou a 27 de julho de 2017 que \"a maior culpada é a poluição\".\n[…]\nAs causas do incêndio ainda não estão determinadas, presumindo-se que o fogo possa estar relacionado com as obras de restauro em curso no edifício.\n[…]\nAs chamas engoliram a parte superior do edifício, incluindo as duas torres sineiras e a agulha central. Às 21h30 o incêndio ainda não havia sido controlado pelos bombeiros.\n[…]\nO presidente francês Emmanuel Macron adiou uma comunicação televisiva sobre medidas planeadas em resposta ao movimento dos coletes amarelos, programada para segunda-feira, após o início do incêndio na catedral de Notre-Dame de Paris.\n[…]\nA presidente da câmara de Paris, Anne Hidalgo, descreveu o incêndio como um \"fogo terrível\", pedindo aos cidadãos que respeitassem as medidas de segurança. Milionários e empresas francesas ofereceram ajuda financeira para a reconstrução do local, após pedido do presidente Emmanuel Macron. Até 16 de abril de 2019, as doações passavam de 590 milhões de euros.\n[…]\nIncêndio no Museu Nacional do Brasil em 2018\n[…]\nSite oficial de Notre-Dame de Paris (em francês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Burj Al Arab",
      "descricao": "Hotel de luxo erguido numa ilha artificial na costa de Dubai, nos Emirados Árabes Unidos, inaugurado em 1999."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Erguido numa ilha artificial na costa de Dubai, o hotel Burj Al Arab tem o formato de quê?",
    "resposta": "Vela de um barco",
    "fonte": [
      "https://en.wikipedia.org/wiki/Burj_Al_Arab"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Burj_Al_Arab",
        "situacao": "ok",
        "texto": "The Jumeirah Burj Al Arab (Arabic: برج العرب, lit. 'Arab Tower'), commonly known as Burj Al Arab, is a luxury hotel in Dubai, United Arab Emirates. Developed and managed by Jumeirah, it is one of the tallest hotels in the world, although 39% of its total height is made up of non-occupiable space. Burj Al Arab stands on an artificial island that is 280 m (920 ft) from Jumeirah Beach and is connecte\n[…]\nGiven the height of the building, the Burj Al Arab is the world's fifth tallest hotel after Gevora Hotel, JW Marriott Marquis Dubai, Four Seasons Place Kuala Lumpur and Rose and Rayhaan by Rotana. But if buildings with mixed use were stripped off the list, the Burj Al Arab would be the world's third tallest hotel. The structure of the Rose Rayhaan, also in Dubai, is 333 metres (1,093 ft) tall, 12 m (39 ft) taller than the Burj Al Arab, which is 321 metres (1,053 ft) tall.\n[…]\nThe Burj Al Arab is very popular with the Chinese market, which made up 25 percent of all bookings at the hotel in 2011 and 2012.\n[…]\nBurj Al Arab has attracted criticism as \"a contradiction of sorts, considering how well-designed and impressive the construction ultimately proves to be.\" The contradiction here seems to be related to the hotel's decor.\n[…]\nThe Victor Robert Lee espionage novel Performance Anomalies takes place at the top of the Burj Al Arab, where the spy protagonist Cono 7Q discovers that through deadly betrayal his spy nemesis Katerina has maneuvered herself into the top echelon of the government of Kazakhstan. The hotel can also be seen in Syriana and also some Bollywood movies.\n[…]\nThe Burj Al Arab was the site of the last task of the fifth episode of the first season of the Chinese edition of The Amazing Race. Teams had to clean up a room to the hotel's standards.\n[…]\nW Barcelona (Hotel Vela) – skyscraper of similar appearance in Barcelona, Spain (sail)\n[…]\nList of tallest buildings in Dubai"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Burj_Al_Arab",
        "situacao": "ok",
        "texto": "O Burj Al Arab (em Árabe برج العرب, literalmente Torre das Arábias) é um luxuoso hotel edificado em Dubai, Emirados Árabes Unidos (EAU). O Burj Al Arab é operado pelo Jumeirah Group e foi construído por Said Khalil. Com 231 metros, ele foi projetado por Tom Wright da WS Atkins PLC para ser o maior arranha-céu do mundo, passando a Torre Eiffel. Entretanto, o prédio acabou perdendo o título para out\n[…]\nO Burj Al Arabe já foi a mais alta estrutura exclusivamente usada como hotel.\n[…]\nNo entanto, a Rose Tower, também em Dubai, já superou a altura do Burj Al Arab, ganhando o título após a sua abertura, em abril de 2008. O Burj Al Arab foi construído sobre uma ilha artificial de 280 metros (919 ft) fora da praia de Jumeirah, conectada à ilha principal por uma ponte curva particular. É um ícone, criado para simbolizar a transformação urbana em Dubai e para imitar a vela de um barco.\n[…]\nA construção do Burj Al Arab tem início em 1994. Localizado no Golfo pérsico, ele foi construído sobre uma ilha artificial de vidro , que levou dois anos para sua formação contendo estrutura de concreto e três níveis no subsolo. Ele foi construído para assemelhar-se com a vela de um dhow, um tipo de barco Árabe. Duas colunas partindo do chão até o topo originaram um \"V\" formando um imenso \"mastro\", enquanto que o espaço entre elas foi erguido os andares.\n[…]\nA 28 de fevereiro de 2026, durante uma série de ataques na região do Golfo Pérsico, destroços de um drone iraniano interceptado pelas defesas aéreas dos Emirados Árabes Unidos atingiram parte da fachada do Burj Al Arab. O impacto não provocou o colapso estrutural do edifício, mas gerou um pequeno incêndio na sua zona exterior, mobilizando equipas de emergência para controlar a situação e prestar assistência.\n[…]\nBurj Al Arab",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Abadia de Westminster",
      "descricao": "Igreja gótica em Londres, ao lado do Palácio de Westminster, local de casamentos e sepultamentos reais."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Desde 1066, qual cerimônia da monarquia inglesa, e depois britânica, é realizada na Abadia de Westminster, em Londres?",
    "resposta": "A coroação",
    "fonte": [
      "https://en.wikipedia.org/wiki/Westminster_Abbey"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Westminster_Abbey",
        "situacao": "ok",
        "texto": "Westminster Abbey, formally titled the Collegiate Church of Saint Peter at Westminster, is an Anglican church in the City of Westminster, London, England. Since 1066, it has been the location of the coronations of 40 English and British monarchs and a burial site for 18 English, Scottish, and British monarchs. At least 16 royal weddings have taken place at the abbey since 1100.\n[…]\nSince the coronation of William the Conqueror in 1066, 40 English and British monarchs have been crowned in Westminster Abbey (not counting Edward V, Lady Jane Grey, and Edward VIII, who were never crowned). In 1216, Henry III could not be crowned in the abbey because London was occupied by hostile forces at the time. Henry was crowned in Gloucester Cathedral, and had a second coronation at Westminster Abbey in 1220.\n[…]\nWestminster Abbey Choir School, also on the abbey grounds, educates the choirboys who sing for abbey services.\n[…]\nWestminster Abbey is mentioned in the play Henry VIII by William Shakespeare and John Fletcher, when a gentleman describes Anne Boleyn's coronation. The abbey was mentioned in a 1598 sonnet by Thomas Bastard which begins, \"When I behold, with deep astonishment / To famous Westminster how there restort / Living in brass or stony monument / The princes and the worthies of all sort\". Poetry about the abbey has also been written by Francis Beaumont and John Betjeman.\n[…]\nPlaywright Alan Bennett produced The Abbey, a 1995 documentary recounting his experiences of the building. Key scenes in the book and film The Da Vinci Code take place in Westminster Abbey. The abbey refused to allow filming in 2005 (calling the book \"theologically unsound\"), and the film uses Lincoln Cathedral as a stand-in. The abbey issued a fact sheet to their staff which answered questions and debunked several claims made in the book.\n[…]\nInformation for visitors to Westminster Abbey"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Abadia_de_Westminster",
        "situacao": "ok",
        "texto": "A Abadia de Westminster, formalmente denominada Igreja Colegiada de São Pedro em Westminster, é uma grande igreja em arquitetura predominantemente gótica na cidade de Westminster, Londres, Inglaterra, a oeste do Palácio de Westminster. É um dos edifícios religiosos mais notáveis do Reino Unido e o local tradicional de coroação e sepultamento dos monarcas ingleses e, posteriormente, britânicos. O e\n[…]\nDesde a coroação de Guilherme, o Conquistador, em 1066, todas as coroações de monarcas ingleses e britânicos aconteceram na Abadia de Westminster. Houve 16 casamentos reais na abadia desde 1100 d.C.\n[…]\nSeu sucessor, Haroldo II, provavelmente foi coroado na abadia, embora a primeira coroação documentada seja a de Guilherme, o Conquistador, no mesmo ano.\n[…]\nDesde as coroações em 1066, tanto do Rei Haroldo quanto de Guilherme, o Conquistador, todos os monarcas ingleses e britânicos (exceto Eduardo V e Eduardo VIII, que nunca tiveram cerimônia de coroação) foram coroados na Abadia de Westminster. Em 1216, Henrique III não pôde ser coroado em Londres quando subiu ao trono, porque o príncipe francês Luís VIII assumira o controle da cidade, e assim o rei foi coroado na Catedral de Gloucester.\n[…]\nEste coroação foi considerada por Papa Honório III como inadequada, e mais uma coroação foi realizada na Abadia em 17 de Maio 1220. O Arcebispo de Cantuária é o clérigo tradicional na cerimônia de coroação.\n[…]\nA cadeira do Rei Eduardo (ou cadeira de Santo Eduardo), o trono no qual os soberanos ingleses e britânicos estavam sentados no momento da coroação, agora está abrigada dentro da Abadia na Capela de São Jorge, perto da Porta Ocidental, e tem sido usada em todas as coroações desde 1308.\n[…]\n«Abadia de Westminster - Encyclopdia Britannica» (em inglês)\n[…]\n«Imagens históricas da Abadia de Westminster» (em inglês)\n[…]\n«Keith Short - Escultor» (em inglês). - Imagens de escultura em pedra para a Abadia de Westminster",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Palácio de Buckingham",
      "descricao": "Residência oficial do monarca britânico em Londres."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Quando o monarca britânico está no Palácio de Buckingham, que bandeira é hasteada no alto do prédio?",
    "resposta": "Estandarte Real",
    "fonte": [
      "https://en.wikipedia.org/wiki/Royal_Standard_of_the_United_Kingdom",
      "https://en.wikipedia.org/wiki/Buckingham_Palace"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Royal_Standard_of_the_United_Kingdom",
        "situacao": "ok",
        "texto": "The royal standard of the United Kingdom is the banner of arms of the monarch of the United Kingdom, currently Charles III. It consists of the shield of the monarch's coat of arms in flag form, and is made up of four quarters containing the arms of the former kingdoms of England, Ireland, and Scotland. There are two versions of the banner, one used in Scotland in which the Scottish quarters take p\n[…]\nHowever, in 1934, George V issued a royal warrant authorising use of the Royal Banner of Scotland during the Silver Jubilee celebrations, due to take place the following year; such use being restricted to hand-held flags for \"decorative ebullition\" as a mark of loyalty to the Monarch.\n[…]\nThe Royal Standard is reserved only for the monarch. Most famously it signals the presence of the monarch at a royal residence, and is also used on official vehicles, primarily the Bentley State Limousine, but also on other road vehicles at home or abroad, often a Land Rover Range Rover.\n[…]\nThe Royal Standard is also flown from aircraft and water vessels, including HMY Britannia and MV Spirit of Chartwell during the Thames Diamond Jubilee Pageant. When the monarch is aboard a British naval ship, the flag is flown from the main mast of the ship and is lowered upon his/her departure. The flag is also draped over the coffin of the Monarch upon his/her death.\n[…]\nIt was instead decided that new rules for the Royal Standard be laid down, making it so that it should not be flown anywhere other than on a royal palace, or to denote the monarch's presence.\n[…]\nPrior to his accession, the Prince of Wales flew his standard at Clarence House in the same way the Royal Standard is used over Buckingham Palace, but other members of the family tend not to fly theirs from their respective residences (though this may be due to the fact that many share official London Residences, as is the case at Kensington Palace)."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Buckingham_Palace",
        "situacao": "ok",
        "texto": "Buckingham Palace (UK: ) is the official residence and administrative headquarters of the monarch of the United Kingdom in London, England. Located in the City of Westminster, the palace is often at the centre of state occasions and royal hospitality. It has been a focal point for the British people at times of national rejoicing and mourning.\n[…]\nBuckingham Palace is a symbol and home of the British monarchy, an art gallery and a tourist attraction. Behind the gilded railings and gates that were completed by the Bromsgrove Guild in 1911, lies Webb's famous façade, which was described in a book published by the Royal Collection Trust as looking \"like everybody's idea of a palace\". It has not only been a weekday home of Queen Elizabeth II and Prince Philip but was also the London residence and office of the Duke of York until 2023.\n[…]\nKing Charles III and Queen Camilla have chosen to live nearby at Clarence House, although they conduct official business including banquets, audiences and receptions at Buckingham Palace, which remains the monarch's administrative headquarters. Every year, some 50,000 invited guests are entertained at garden parties, receptions, audiences and banquets. Three garden parties are held in the summer.\n[…]\nDirectly underneath the state apartments are the less grand semi-state apartments. Opening from the Marble Hall, these rooms are used for less formal entertaining, such as luncheon parties and private audiences. At the centre of this floor is the Bow Room, through which thousands of guests pass annually to the monarch's garden parties. When paying a state visit to Britain, foreign heads of state are usually entertained by the monarch at Buckingham Palace.\n[…]\nThe State Rooms, Buckingham Palace at the Royal Collection Trust\n[…]\nGeographic data related to Buckingham Palace at OpenStreetMap"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Estandarte_Real_do_Reino_Unido",
        "situacao": "ok",
        "texto": "O Estandarte Real do Reino Unido (em inglês The Royal Standard) é a bandeira pertencente a Carlos III mediante a sua condição de monarca britânico. O rei detém mais de dez estandartes pessoais na Comunidade das Nações, mas o Estandarte Real é o mais importante de todos, pois representa o poder do monarca no Reino Unido.\n[…]\nO Estandarte Real é tradicionalmente fixado nas residências oficiais do rei e nos veículos oficiais do Governo britânico, mas também pode ser hasteado em prédios públicos e governamentais quando da presença do monarca. A única igreja autorizada a portar o estandarte é a Abadia de Westminster e outras igrejas, mesmo que sejam Royal Peculiars não têm este direito.\n[…]\nAs residências oficiais seguem o protocolo de hastear o estandarte somente quando da presença do rei e quando o estandarte é trocado pela Bandeira do Reino Unido significa que ele não está presente no local. Na Inglaterra o estandarte fica no Palácio de Buckingham e no Castelo de Windsor e na Escócia é hasteado no Palácio de Holyrood e no Castelo de Balmoral. Na Escócia, também é utilizado o Estandarte Real da Escócia.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Palácio do Catete",
      "descricao": "Palácio no bairro do Catete, no Rio de Janeiro, sede da Presidência da República de 1897 a 1960."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Sede da Presidência até 1960 e palco da morte de Getúlio Vargas, o Palácio do Catete, no Rio, foi transformado em qual museu?",
    "resposta": "Museu da República",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Pal%C3%A1cio_do_Catete",
      "https://en.wikipedia.org/wiki/Catete_Palace"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Pal%C3%A1cio_do_Catete",
        "situacao": "ok",
        "texto": "O Palácio do Catete é um prédio histórico localizado na cidade do Rio de Janeiro, sendo um exemplar da arquitetura neoclássica brasileira do final do século XIX. O palácio foi palco de diversos episódios importantes da história do Brasil, tal como o suicídio de Getúlio Vargas, e abriga atualmente o Museu da República.\n[…]\nDa inauguração em 1897 até a mudança da capital federal em 1960, dezenove pessoas ocuparam o Palácio do Catete como Presidentes da República: Manuel Vitorino (vice, 1897) Prudente de Moraes (1897-1898; seu mandato começou em 1894), Campos Sales (1898-1902), Rodrigues Alves (1902-1906), Afonso Pena (1906-1909), Nilo Peçanha (vice, 1909-1910), Hermes da Fonseca (1910-1914), Venceslau Braz (1914-1918), Delfim Moreira (vice, 1918-1919), Epitácio Pessoa (1919-1922), Artur Bernardes (1922-1926), Washington Luís (1926-1930), Getúlio Vargas (1930-1945 e 1954), José Linhares (interino, 1945-1946) Eurico Gaspar Dutra (1946-1950), Café Filho (vice, 1954-1955), Carlos Luz (interino, 1955), Nereu Ramos (interino, 1955-1956)  e Juscelino Kubitschek (1956-1961).\n[…]\nFicava neste andar o quarto onde se suicidou Getúlio Vargas, em 24 de agosto de 1954. Logo após a morte do ex-presidente, a mobília foi transferida do Palácio do Catete para uma sala do Museu Histórico Nacional, na qual se buscou recriar o cenário onde ocorreu o episódio. Com a inauguração do Museu da República, o quarto foi novamente montado no Palácio do Catete. Nele são expostos o pijama usado por Getúlio naquela madrugada, bem como o revólver e a bala utilizados na ocasião.\n[…]\nVisita virtual imersiva ao Museu da República\n[…]\nAcervo do Arquivo Histórico e Institucional do Museu da República no Portal Brasiliana Fotográfica\n[…]\nPágina do Museu da República no portal Museus do Rio\n[…]\nCaracterísticas arquitetônicas e decorativas do Palácio do Catete"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Catete_Palace",
        "situacao": "ok",
        "texto": "The Catete Palace (Portuguese: Palácio do Catete, IPA: [paˈlasju du kaˈtetʃi]) is an urban mansion in the Flamengo neighborhood of Rio de Janeiro, Brazil. The property stretches from Rua do Catete (Catete Street) to Praia do Flamengo (Flamengo Beach). Construction began in 1858 and ended in 1867. It was Brazil's presidential palace from 1897 to 1960, and the site of Getúlio Vargas' suicide. It now\n[…]\nThe Catete underground rail station is adjacent.\n[…]\nAfter the death of the Baron and the Baroness, their son Antônio Clemente Pinto Filho, the Count of São Clemente, sold the property in 1889, shortly before the Proclamation of the Republic of Brazil, to an investor group, who founded the Companhia Grande Hotel Internacional (Grande Hotel Internacional Company). This development, however, did not succeed in turning the palace into a luxury hotel.\n[…]\nThe seat of the executive branch of Brazil was the Itamaraty Palace in Rio de Janeiro. In 1897, President Prudente de Morais became ill and Vice President Manuel Vitorino took office as interim. He acquired the Catete Palace and over there installed the seat of government. Officially, the palace was the seat of the Federal Government from 1897 until 1960, when the capital and the Federal District were transferred to Brasília.\n[…]\nVarious historical events happened in the palace halls, such as the death of President Afonso Pena in 1909; the signing of the declaration of war against the German Empire and its allies in 1917, during World War I; the visit and hosting of Cardinal Eugenio Pacelli, the future Pope Pius XII, in 1934; the declaration of war against the Axis in World War II in 1942; the suicide of President Getúlio Vargas in 1954, with a shot in the heart, in his bedroom on the third floor of the palace; among others.\n[…]\nPalácio do Planalto\n[…]\nPalácio da Alvorada"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Museu de Orsay",
      "descricao": "Museu de arte em Paris, à margem esquerda do Sena, famoso pelo acervo impressionista, inaugurado em 1986."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Antes de abrigar um famoso acervo impressionista, o prédio do Museu de Orsay, em Paris, foi construído para ser o quê?",
    "resposta": "Uma estação ferroviária",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mus%C3%A9e_d%27Orsay"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mus%C3%A9e_d%27Orsay",
        "situacao": "ok",
        "texto": "The Musée d'Orsay (UK:  MEW-zay dor-SAY, US:  mew-ZAY -⁠, French: [myze dɔʁsɛ]; English: Orsay Museum) is a museum in Paris, France, on the Left Bank of the Seine. It is housed in the former Gare d'Orsay, a Beaux-Arts railway station built from 1898 to 1900. The museum holds mainly French art (including works by France based foreign artists) dating from 1848 to 1914, including paintings, sculpture\n[…]\nThe museum building was originally a railway station, Gare d'Orsay, located next to the Seine river. Built on the site of the Palais d'Orsay, its central location was convenient for commuting travelers. The station was constructed for the Chemin de Fer de Paris à Orléans and finished in time for the 1900 Exposition Universelle to the design of three architects: Lucien Magne, Émile Bénard and Victor Laloux. The Gare d'Orsay design was considered to be an \"anachronism\".\n[…]\nIn July 1986, the museum was ready to receive its exhibits. It took six months to install the approximately 2,000 paintings, 600 sculptures, and other works. The museum was officially opened in December 1986 by then-president François Mitterrand. At any given time about 3,000 art pieces are on display at Musée d'Orsay. Within the museum is a 1:100 scale model created by Richard Peduzzi of an aerial view of the Paris Opera and surrounding area.\n[…]\nThe collection favors mostly post-impressionist works. Artists featured in this collection are Bonnard, Vuillard, Maurice Denis, Odilon Redon, Aristide Maillol, André Derain, Edgar Degas, and Jean-Baptiste-Camille Corot. To make room for the art that has been donated, the Musée d'Orsay is scheduled to undergo a radical transformation over a decade starting in 2020.\n[…]\nMusée, a comic book set at the museum\n[…]\nList of museums in Paris\n[…]\nList of tourist attractions in Paris\n[…]\nMusée d'Orsay – The Parisian Guide\n[…]\nVirtual tour of the Musée d'Orsay provided by Google Arts & Culture"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Museu_de_Orsay",
        "situacao": "ok",
        "texto": "O Museu de Orsay (Musée d'Orsay em francês) é um museu na cidade de Paris, na França. Situa-se na margem esquerda do rio Sena no 7.º arrondissement. As colecções do museu apresentam principalmente pinturas e esculturas da arte ocidental do período compreendido entre 1848 e 1914. Entre outras, estão aí presentes obras de Van Gogh, Cézanne, Degas, Maurice Denis, Odilon Redon. Existem também exposiçõ\n[…]\nO edifício, que actualmente alberga o museu, era originalmente uma estação ferroviária, Gare du Quai d'Orsay, construída para o Chemin de Fer de Paris à Orléans (em português, Caminho de ferro de Paris a Orleães), no local onde se erguera até 1871 um antigo palácio administrativo, o Palais d'Orsay. Foi inaugurado em 1898, a tempo da Exposição Universal de 1900. O projecto foi do arquitecto Victour Laloux.\n[…]\nEm 1939, deixou de ser o terminal da linha que ligava Paris a Orleães devido ao comprimento reduzido do cais, passando a ser apenas uma estação da rede suburbana de caminhos de ferro; e mais tarde, durante a Segunda Guerra Mundial serviu de centro de correios. A estação foi fechada em 1 de janeiro de 1973.\n[…]\nEm 1977, o Governo francês decidiu transformar o espaço num museu. Foi inaugurado pelo presidente de então, François Mitterrand, em 1 de dezembro de 1986. Os arquitectos Renaud Bardon, Pierre Colboc e Jean-Paul Philippon foram os responsáveis pela adaptação da estação.\n[…]\nAs colecções do museu provêm essencialmente de três locais: do Museu do Louvre, as obras de artistas nascidos a partir de 1820, ou que tenham emergido no mundo da arte com a Segunda República; do Museu do Jeu de Paume, as obras impressionistas desde 1947; e do museu de arte moderna de Paris, as obras mais recentes. Estas colecções abrangem várias vertentes das artes plásticas tais como a pintura, a escultura, a fotografia entre outras.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Palácio de Potala",
      "descricao": "Grande palácio-fortaleza sobre uma colina em Lhasa, no Tibete, construído no século dezessete."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Em Lhasa, no Tibete, o Palácio de Potala foi por séculos a residência de inverno de qual líder religioso?",
    "resposta": "O Dalai-lama",
    "fonte": [
      "https://en.wikipedia.org/wiki/Potala_Palace"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Potala_Palace",
        "situacao": "ok",
        "texto": "Potala Palace (Tibetan: ཕོ་བྲང་པོ་ཏ་ལ་, Wylie: pho brang po ta la; simplified Chinese: 布达拉宫; traditional Chinese: 布達拉宮; pinyin: Bùdálā Gōng) is a museum complex in Lhasa, the capital of the Tibet Autonomous Region of China. It was formerly the winter palace of the Dalai Lamas, and from 1649 until 1959 served as the Dalai Lamas' residence. The palace complex became a museum following the annexation\n[…]\nThe palace is named after Mount Potalaka, regarded in Buddhist tradition as the mythical abode of the bodhisattva Avalokiteśvara. Construction of the present structure was begun in 1645 at the order of the 5th Dalai Lama, advised by Konchog Chophel, the Thirty-fifth Ganden Tripa of the Gelug school. It was built on the site of an earlier palace attributed to Songtsen Gampo (traditionally dated to 637).\n[…]\nOn the fifth day of the fourth month of the Water-Horse year in the 11th cycle the Dalai Lama was made sovereign of Tibet on the golden fearless snow lion throne. Sometime during or soon after 1644, the Dalai Lama, the then regent of Ganden Podrang,  and Gushri Khan all decided to build a palace.\n[…]\nNgawang Lozang Gyatso, the Great Fifth Dalai Lama, started the construction of the modern Potala Palace in 1645, after one of his spiritual advisers, Konchog Chophel, pointed out that the site was ideal as a seat of government, situated as it is between Drepung and Sera monasteries and the old city of Lhasa.\n[…]\nThe Dalai Lama and his government moved into the Potrang Karpo ('White Palace') in 1649. The Potala was used as a winter palace by the Dalai Lama from that time. Construction lasted until 1694, some twelve years after his death. The Potrang Marpo ('Red Palace') was added between 1690 and 1694. Kalachakra Mandala was constructed during the 1690s.\n[…]\nKundun, a 1997 film about the Dalai Lama, chiefly set inside the palace\n[…]\nNorbulingka, the Dalai Lama's former summer palace\n[…]\nPatala, Patala/Potala"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pal%C3%A1cio_de_Potala",
        "situacao": "ok",
        "texto": "O Palácio de Potala (em tibetano: =པོ་ཏ་ལ, Wylie: Po ta la; no chinês simplificado: 布达拉宫, no chinês tradicional: 布達拉宮; pinyin: Bùdálā Gōng) está localizado em Lassa, no Tibete, ocupado pela China em 1950. Foi a principal residência do Dalai Lama, até à fuga do 14º Dalai Lama para Dharamsala, Índia, depois de uma revolta falhada, em 1959. Atualmente o palácio é um museu estadual da China. Recebeu o\n[…]\nO Lugar foi usado para refúgio de meditação pelo Rei Songtsen Gampo, que construiu, em 637, o primeiro palácio como saudação à sua noiva, a Princesa Wen Cheng da Dinastia Tang da China. A construção do atual palácio começou em 1645, durante o reinado do quinto Dalai Lama, Lozang Gyatso. Em 1648, o \"Potrang Karpo\" (Palácio Branco) foi concluído, e o Palácio de Potala passou a ser usado como palácio de Inverno pelo Dalai Lama a partir dessa época.\n[…]\nUm pátio central pintado de amarelo, conhecido como \"Deyangshar\", separa os aposentos de habitação do Lama e dos seus monges do Palácio Encarnado, o outro lado do Potala sagrado, o qual era totalmente devotado ao estudo religioso e à oração. Este contém as stupas de ouro — as tumbas de oito Dalai Lamas — a galeria de assembleia dos monges, numerosas capelas, e bibliotecas para as importantes escrituras Budista, o Kangyur em 108 volumes e o Tengyur com 225.\n[…]\nA galeria central principal do Palácio Encarnado é a Grande Galeria Oeste, a qual consiste em quatro grandes capelas que proclamam a glória e o poder do construtor do Potala, o 5.º Dalai Lama. A galeria é notável pelos seus refinados murais reminiscentes das miniaturas persas, representando eventos da vida do quinto Dalai Lama. A famosa cena da sua visita ao Imperador Shun Zhi em Pequim fica localizada na parede leste, do lado de fora da entrada.\n[…]\nMurais elaborados em estilos tibetanos tradicionais retratam eventos da vida do 13.º Dalai Lama durante o início do século XX.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Igreja de São Francisco de Salvador",
      "descricao": "Igreja barroca do convento franciscano no centro histórico de Salvador, na Bahia, do século dezoito."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "No centro histórico de Salvador, a Igreja de São Francisco é famosa pelo interior de talhas de madeira revestidas de quê?",
    "resposta": "Ouro",
    "fonte": [
      "https://en.wikipedia.org/wiki/Church_and_Convent_of_S%C3%A3o_Francisco",
      "https://pt.wikipedia.org/wiki/Igreja_e_Convento_de_S%C3%A3o_Francisco_(Salvador)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Church_and_Convent_of_S%C3%A3o_Francisco",
        "situacao": "inexistente",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Igreja_e_Convento_de_S%C3%A3o_Francisco_(Salvador)",
        "situacao": "ok",
        "texto": "A Igreja e Convento de São Francisco é um importante conjunto de edificações históricas na cidade de Salvador, na Bahia, Brasil.\n[…]\nParte do Centro Histórico de Salvador, que é Patrimônio da Humanidade pela UNESCO, as estruturas foram erguidas entre os séculos XVII e XVIII e são consideradas uma das mais singulares e ricas expressões do Barroco no Brasil, apresentando, em especial a Igreja, uma faustosa decoração interior com revestimento em ouro.\n[…]\nNo século XIX franciscanos alemães também protestaram, pretendendo eliminar todo o ouro das Igrejas salvo nos aparatos litúrgicos e no tabernáculo do Santíssimo Sacramento, mas a medida não encontrou receptividade.\n[…]\nDurante as obras de revitalização do centro histórico de Salvador, a Igreja, o Convento e seu largo fronteiro também receberam atenção conservadora, mas o monumento precisa de cuidados permanentes. Em 2005 os azulejos do claustro foram cobertos por gaze para evitar que a superfície pintada se desprendesse, o que já se verificava em muitos pontos.\n[…]\nNa tarde de 5 de fevereiro de 2025, por volta das 14h30 no horário local, o teto do templo da Igreja e Convento de São Francisco desabou, resultando na morte de uma pessoa, de 26 anos, natural de Ribeirão Preto e que estava em Salvador a turismo, e deixou outras cinco pessoas feridas.\n[…]\nO desabamento causou grande comoção devido a importância histórica e cultural da Igreja, tendo reacendido discussões acerca da necessidade de manutenção e restauração de edificações históricos, especialmente no Centro Histórico de Salvador, que é patrimônio nacional, pelo IPHAN, e Mundial pela UNESCO."
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Monte Palatino",
      "descricao": "Uma das sete colinas de Roma, onde ficavam as residências dos imperadores romanos."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Qual colina de Roma, onde moravam os imperadores, deu origem à palavra que, em várias línguas, designa a grande residência de um rei?",
    "resposta": "Monte Palatino",
    "fonte": [
      "https://en.wikipedia.org/wiki/Palatine_Hill"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Palatine_Hill",
        "situacao": "ok",
        "texto": "The Palatine Hill ( PAL-ə-tyne; Classical Latin: Palatium; New Latin: Collis/Mons Palatinus; Italian: Palatino [palaˈtiːno]), which is the centremost of the seven hills of Rome, is one of the most ancient parts of the city; it has been called \"the first nucleus of the Roman Empire\". The site is now mainly a large open-air museum and the Palatine Museum houses many finds from the excavations here a\n[…]\nAccording to Livy, after the immigration of the Sabines and the Albans to Rome, the original Romans lived on the Palatine. The Palatine Hill was also the site of the ancient festival of the Lupercalia.\n[…]\nMany affluent Romans of the Republican period (c. 509 BC – 44 BC) had their residences there.\n[…]\nAlready during Augustus' reign an area of the Palatine Hill was subject to a sort of archaeological expedition which found fragments of Bronze Age pots and tools. He declared this site the \"original town of Rome.\" Modern archaeology has identified evidence of Bronze Age settlement in the area which predates Rome's founding.\n[…]\nIn 2006, archaeologists announced the discovery of the Palatine House, believed to be the birthplace of Rome's first Emperor, Augustus. A section of corridor and other fragments under the Hill were found and described as \"a very ancient aristocratic house.\" The two-story house appears to have been built around an atrium, with frescoed walls and mosaic flooring, and is situated on the slope of the Palatine that overlooks the Colosseum and the Arch of Constantine.\n[…]\nSamuel Ball Platner, A Topographical Dictionary of Ancient Rome: Palatine Hill\n[…]\nThe Palatine Hill: Two Millennia of Landscaping\n[…]\n\"Aerial view of Palatine Hill\". Bing Maps. Retrieved 29 December 2010.\n[…]\n\"Aerial view of Palatine Hill\". Google Maps. Retrieved October 14, 2005.\n[…]\nPhotos from Palatine Museum\n[…]\nHigh-resolution 360° Panoramas and Images of Palatine Hill | Art Atlas"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Palatino",
        "situacao": "ok",
        "texto": "Monte Palatino (em latim: Collis Palatium ou Mons Palatinus; em italiano:  Palatino) é a mais central das sete colinas de Roma e uma das mais antigas partes da cidade. Ela tem uma elevação de 40 metros acima do Fórum Romano, para o qual tem vista em um dos seus lados. De outro, domina o vale ocupado pelo Circo Máximo. A partir da época de Augusto, os palácios imperiais de Roma passaram a ser const\n[…]\nO Palatino é uma das colinas centrais de Roma, mas, ao contrário do Capitólio e do Aventino, é vizinha do rio Tibre, mas não está adjacente a ele. Sua altura máxima é de 51 metros acima do nível do mar. O monte apresenta dois cumes distintos separados por uma elevação: o cume central, mais alto, era conhecido como Palácio (em latim: Palatium) e o outro, que fica perto da encosta de frente para o Fórum Boário e o Tibre, era chamado de Germalo (em latim: Germalus ou Cermalus).\n[…]\nAntigamente, o Palatino estava ligado ao Esquilino por meio da elevação do monte Vélia, nivelada quando foi construída a via dei Fori Imperiali na década de 1930.\n[…]\nConta a lenda que Roma se originou no Palatino e escavações recentes mostraram que já havia habitantes no monte em 1 000 a.C.. Foi descoberta uma pequena vila de poucos habitantes circundada por paliçadas de onde era possível controlar o curso do rio Tibre. Deste primeiro aglomerado se formou a chamada \"Roma quadrada\", que tem este nome por causa da forma romboide dos cumes das colinas que a delimitaram.\n[…]\nNo final do período imperial, o monte Palatino estava completamente tomado por um único complexo de edifícios e jardins imperiais de uso exclusivo dos imperadores e de sua corte. A partir de então, a palavra palatium passou a indicar também o \"palácio\" por excelência, primeiro para indicar a residência imperial e depois, através de todas as línguas europeias, as residências de reis e monarcas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Mausoléu de Halicarnasso",
      "descricao": "Túmulo monumental do governante Mausolo, em Halicarnasso, atual Bodrum, uma das Sete Maravilhas do Mundo Antigo."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Que palavra, usada para túmulos monumentais, nasceu do nome de um governante sepultado em Halicarnasso, numa das Sete Maravilhas antigas?",
    "resposta": "Mausoléu",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mausoleum_at_Halicarnassus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mausoleum_at_Halicarnassus",
        "situacao": "ok",
        "texto": "The Mausoleum at Halicarnassus or Tomb of Mausolus was a tomb built between 353 and 351 BC in Halicarnassus (present Bodrum, Turkey) for Mausolus, an Anatolian from Caria and a satrap in the Achaemenid Persian Empire, and his sister-wife Artemisia II. The structure was designed by the Greek architects Satyros of Paros and Pythius of Priene. Its elevated tomb structure is derived from the tombs of \n[…]\nArtemisia and Mausolus ruled from Halicarnassus over the surrounding territory for 24 years. Mausolus, although descended from local people, spoke Greek and admired the Greek way of life and government. He founded many cities of Greek design along the coast and encouraged Greek democratic traditions.\n[…]\nThis monument was ranked the seventh wonder of the world by the ancients, not because of its size or strength but because of the beauty of its design and how it was decorated with sculpture or ornaments. The mausoleum was Halicarnassus's principal architectural monument, standing in a dominant position on rising ground above the harbor.\n[…]\nIn Milas (also the site of the tomb of Hecatomnus, who was the father of Mausolus) is also the site of the Gümüşkesen, a small-scale Roman-era (2nd century BC) copy of the Mausoleum at Halicarnassus:\n[…]\nNereid Monument\n[…]\nFergusson, James (1862). \"The Mausoleum at Halicarnassus restored in conformity with the recently discovered remains.\" J. Murray, London\n[…]\nKraege, Desmond Bryan (ed), Martin, Felix (ed), 2026, The Afterlife of the Mausoleum of Halicarnassus, Re-conceiving an Ancient Wonder in Early Modern Europe, Cambridge University Press\n[…]\nCook, B. F., Bernard Ashmole, and Donald Emrys Strong. 2005. Relief Sculpture of the Mausoleum At Halicarnassus. Oxford: Oxford University Press.\n[…]\nThe Tomb of Mausolus (W.R. Lethaby's reconstruction of the Mausoleum, 1908)\n[…]\nLivius.org: Mausoleum of Halicarnassus Archived 3 May 2015 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mausol%C3%A9u_de_Halicarnasso",
        "situacao": "ok",
        "texto": "O mausoléu de Halicarnasso ou mausoléu de Mausolo (em grego clássico: Μαυσωλεῖον τῆς Ἁλικαρνασσοῦ; em turco: Halikarnas Mozolesi) foi uma tumba construída entre 353 e 350 a.C. em Halicarnasso (atual Bodrum, Turquia) para Mausolo (em grego clássico: Μαύσωλος), um sátrapa do Império Aquemênida, e Artemísia II de Cária, sua irmã e esposa. A estrutura foi desenhada pelos arquitetos gregos Sátiro e Pít\n[…]\nTinha aproximadamente 45 metros de altura, e cada um de seus quatro lados foi adornado com relevos criados por cada um dos quatro escultores gregos — Briáxis, Escopas de Paros, Leocarés e Timóteo. A estrutura finalizada foi considerada como sendo um triunfo estético por Antípatro de Sídon, que a identificou como uma de suas sete maravilhas do mundo. O termo mausoléu veio a ser usado genericamente para qualquer grande tumba, embora \"Mausol-eion\" originalmente significasse \"associado com Mausolo\".\n[…]\nMausolo estendeu seu território até a costa sudoeste da Anatólia, e com Artemísia — era costume na Cária sátrapas desposarem suas irmãs, preservando o poder e riqueza da família — governou o território ao redor de Halicarnasso por 24 anos. Mausolo, embora descendendo do povo local, falava grego e admirava a maneira grega de vida e governo: fundou muitas cidades de projeto grego junto à costa e encorajou tradições democráticas gregas.\n[…]\nEm 353 a.C. Mausolo morreu, deixando Artemísia de coração partido. Como um tributo a ele, ela decidiu construir-lhe a mais esplêndida tumba do mundo então conhecido. Ela tornou-se uma estrutura tão famosa que o nome de Mausolo é hoje associado com todas as tumbas suntuosas através de nosso termo moderno mausoléu. A construção era também tão bela e única que tornou-se uma das sete maravilhas do mundo antigo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Praça Vermelha",
      "descricao": "Praça central de Moscou, entre o Kremlin e a Catedral de São Basílio."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Em russo antigo, a palavra que dá nome à Praça Vermelha, em Moscou, também tinha qual outro significado?",
    "resposta": "Bonita",
    "fonte": [
      "https://en.wikipedia.org/wiki/Red_Square"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Red_Square",
        "situacao": "ok",
        "texto": "Red Square (Russian: Красная площадь, romanized: Krasnaya ploshchad', IPA: [ˈkrasnəjə ˈploɕːɪtʲ]) is one of the oldest and largest squares in Moscow, Russia. It is in Moscow's historic centre, along the eastern walls of the Kremlin. It is the city's most prominent landmark, with famous buildings such as Saint Basil's Cathedral, Lenin's Mausoleum, the State Historical Museum and the GUM department \n[…]\nThe main squares in Russian cities, such as those in Suzdal,  Yelets, and Pereslavl-Zalessky, are frequently named Krasnaya ploshchad, or Beautiful Square. Archaically, the Russian word красная (krasnaya) meant 'beautiful', but now means 'red'. The current word for 'beautiful' is красивая (krasivaya), which is derived from it.\n[…]\nThe square was called Veliky Torg ('Great Market') or simply Torg ('Market'), then Troitskaya by the name of the small Troitskaya ('Trinity') Church, burnt down in the great fire during the Tatar invasion in 1571. After that, the square held the name Pozhar, which means 'burnt'. It was not until 1661–62 that it was first mentioned by its contemporary Krasnaya name.\n[…]\nDuring the Soviet era, Red Square maintained its significance, becoming a focal point for the new state. Besides being the official address of the Soviet government, it was renowned as a showcase for military parades from 1919 onward. Lenin's Mausoleum would from 1924 onward be a part of the square complex, and also as the grandstand for important dignitaries in all national celebrations.\n[…]\nTwo of the most significant military parades on Red Square were 1941 October Revolution Parade, when the city was besieged by Germans and troops were leaving Red Square straight to the front lines, and the Victory Parade in 1945, when the banners of defeated Nazi armies were thrown at the foot of Lenin's Mausoleum.\n[…]\nLubyanka Square\n[…]\n\"4 Surprising Things that Happened on Red Square\", BigTimeMoscow, November 12, 2015"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pra%C3%A7a_Vermelha",
        "situacao": "ok",
        "texto": "A Praça Vermelha (em russo: Красная площадь, Krasnaya ploshchad) é uma famosa praça em Moscou, conhecida pelos grandes desfiles militares durante a era da União Soviética. A praça separa a cidadela real, conhecida como Kremlin, do bairro histórico de Kitay-gorod. Como grandes ruas de Moscou partem da praça em várias direções, prolongando-se em rodovias para fora da cidade, a Praça Vermelha pode se\n[…]\nDesde 1990, a Praça Vermelha foi incluída, juntamente com todo o Kremlin, na lista de Patrimônios Mundiais da UNESCO.​\n[…]\nEle separa o Kremlin, a fortaleza real onde o presidente da Rússia reside atualmente, do histórico distrito comercial de Kitay-gorod. A partir dele partem as principais ruas de Moscou em todas as direções, estendidas em rodovias para fora da cidade. É por isso que a praça é considerada o centro da cidade e de toda a Rússia.\n[…]\nO nome \"Praça Vermelha\" não vem da cor dos tijolos que a cercam, nem é uma referência à cor vermelha do comunismo. Pelo contrário, deriva da palavra russa Красная​ (Krasnaya), que significa \"vermelho\", mas em russo antigo significava \"bonito\", ou seja, \"o quadrado bonito\". A palavra foi inicialmente usada para nomear a Catedral de São Basílio (século xvi), com o sentido de belo, e mais tarde o nome desembarcou na praça próxima.\n[…]\nO nome de Praça Vermelha não deriva da cor dos tijolos ao seu redor, nem da associação da cor vermelha ao comunismo; na verdade, o nome surgiu porque a palavra russa красная (krasnaya) pode significar tanto \"vermelho\" como \"bonito\". A palavra foi empregada originalmente (com o sentido de \"bonito\") à Catedral de São Basílio, e foi mais tarde transferida à praça adjacente.\n[…]\nAcredita-se que a praça tenha recebido seu nome atual (em substituição ao antigo, Pozhar) durante o século XVII.\n[…]\nMedia relacionados com Praça Vermelha no Wikimedia Commons",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Mesquita Azul",
      "descricao": "Mesquita do Sultão Ahmed, em Istambul, na Turquia, concluída no século dezessete."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A Mesquita do Sultão Ahmed, em Istambul, é chamada de Mesquita Azul por causa de quê?",
    "resposta": "Os azulejos do interior",
    "fonte": [
      "https://en.wikipedia.org/wiki/Sultan_Ahmed_Mosque"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sultan_Ahmed_Mosque",
        "situacao": "ok",
        "texto": "The Sultan Ahmed Mosque (Turkish: Sultanahmet Camii), popularly known as the Blue Mosque, is an Ottoman-era historical imperial mosque located in Istanbul, Turkey. It was constructed between 1609 and 1617 during the rule of Ahmed I. It attracts a large number of tourists and is one of the most iconic and popular monuments of Ottoman architecture.\n[…]\nIn the end, the mosque's grandeur, its luxurious decoration, and the elaborate public ceremonies that Ahmed I organized to celebrate the project appear to have swayed public opinion and overcome the initial controversy over its construction. It became one of the most popular mosques in the city. The mosque has left a major mark on the city and has given its name to the surrounding neighbourhood, now known as Sultanahmet.\n[…]\nIn 1883, much of the mosque interior's painted decoration was replaced by new stenciled paintwork, some of which changed the original colour scheme. A major fire in 1912 damaged or destroyed several of the outlying structures of the mosque complex, which were subsequently restored.\n[…]\nThe mosque's interior is dominated by its dome and cascading semi-domes. The main dome reaches a height of 43 metres (141 ft). The weight of the dome is supported by four massive cylindrical pillars. The transition between the central dome and the pillars is achieved by four long, smooth pendentives. Smaller pendentives are used for transitions between the semi-domes and their exedrae and between the hall's corner domes and the surrounding structure.\n[…]\nSome of it was a gift from the Signoria of Venice, following a request from Ahmed I in 1610. Most of these original windows have been lost and since replaced with less elaborate modern windows. The modern windows probably make the mosque's interior today brighter than the original stained glass windows would have.\n[…]\nÇamlıca Mosque\n[…]\nShah Mosque"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mesquita_Azul",
        "situacao": "ok",
        "texto": "A Mesquita do Sultão Ahmed (em turco: Sultanahmet Camii), também conhecida como Mesquita Azul, é uma mesquita otomana de Istambul, Turquia. Foi construída entre 1609 e 1616 e está situada na Praça Sultanahmet, no distrito de Fatih, em frente da Basílica de Santa Sofia, da qual se encontra separada por um espaço ajardinado. É uma das 5 mesquitas da Turquia que possui seis minaretes.\n[…]\nA Mesquita Azul é um triunfo em harmonia, proporção e elegância. Construída em um estilo clássico otomano, o seu magnífico exterior não faz sombra a seu suntuoso interior. Uma verdadeira sinfonia de belos azulejos azuis de İznik dão a este espaço uma atmosfera muito especial. A mesquita ocupa uma parte da área outrora ocupada pelo Grande Palácio de Constantinopla, a residência dos imperadores bizantinos entre 330 e 1081.\n[…]\nEm 1606 o sultão Amade I quis construir uma mesquita maior, mais imponente e mais bonita do que Santa Sofia. O edifício tem 43 metros de altura.\n[…]\nAs mesquitas geralmente eram construídas com um intuito de serviço público. A  külliye da Mesquita Azul inclui ou incluiu  uma madraça, um hamame, uma cozinha que fornecia sopa aos pobres e lojas (o Bazar Arasta), cujas rendas se destinam a financiar o complexo.\n[…]\nA mesquita foi revestida com azulejos sobretudo azuis e possui ricos vitrais também do mesmo tom. Não há figuras no interior da mesquita pois os muçulmanos não cultuam imagens. Ao entrar na mesquita é necessário tirar os sapatos. Calções, bermudas, minissaias ou camisetas sem mangas não são recomendados. Funcionários da mesquita fornecem uma espécie de canga para cobrir as partes do corpo que segundo as regras islâmicas não devem ser ser expostas num espaço sagrado.\n[…]\nGuia da Mesquita Azul. www.turismogrecia.info",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Mesquita Azul",
      "descricao": "Mesquita do Sultão Ahmed, em Istambul, na Turquia, concluída no século dezessete."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Quantos minaretes cercam a Mesquita Azul, em Istambul?",
    "resposta": "Seis",
    "distratores": [
      "Dois",
      "Quatro",
      "Oito"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Sultan_Ahmed_Mosque"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sultan_Ahmed_Mosque",
        "situacao": "ok",
        "texto": "The Sultan Ahmed Mosque (Turkish: Sultanahmet Camii), popularly known as the Blue Mosque, is an Ottoman-era historical imperial mosque located in Istanbul, Turkey. It was constructed between 1609 and 1617 during the rule of Ahmed I. It attracts a large number of tourists and is one of the most iconic and popular monuments of Ottoman architecture.\n[…]\nThe mosque has a classical Ottoman layout with a central dome surrounded by four semi-domes over the prayer hall. It is fronted by a large courtyard and flanked by six minarets. On the inside, it is decorated with thousands of Iznik tiles and painted floral motifs in predominantly blue colours, which give the mosque its popular name. The mosque's külliye (religious complex) includes Ahmed's tomb, a madrasa, and several other buildings in various states of preservation.\n[…]\nDuring excavations in the early 20th century, some of the ancient seats were discovered in the mosque's courtyard. Given the mosque's location, size, and number of minarets, it is probable that Sultan Ahmed intended to create a monument that rivalled or surpassed the Hagia Sophia.\n[…]\nThe Blue Mosque is one of the five mosques in Turkey that has six minarets (one in the modern Sabancı Mosque in Adana, the Muğdat Mosque in Mersin, Çamlıca Mosque in Üsküdar and the Green mosque in Arnavutköy).\n[…]\nAs in most major Ottoman religious foundations, the Sultan Ahmed Mosque is the main element of a larger complex of buildings. Unlike in previous imperial mosque complexes, the other structures of this complex are not arranged in a regular, well-organized plan around the mosque. Because the mosque was built next to the Hippodrome, the site created difficulties for a planned complex and the auxiliary buildings were instead placed in various locations near the mosque or around the Hippodrome.\n[…]\nÇamlıca Mosque\n[…]\nShah Mosque"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mesquita_Azul",
        "situacao": "ok",
        "texto": "A Mesquita do Sultão Ahmed (em turco: Sultanahmet Camii), também conhecida como Mesquita Azul, é uma mesquita otomana de Istambul, Turquia. Foi construída entre 1609 e 1616 e está situada na Praça Sultanahmet, no distrito de Fatih, em frente da Basílica de Santa Sofia, da qual se encontra separada por um espaço ajardinado. É uma das 5 mesquitas da Turquia que possui seis minaretes.\n[…]\nA Mesquita Azul é um triunfo em harmonia, proporção e elegância. Construída em um estilo clássico otomano, o seu magnífico exterior não faz sombra a seu suntuoso interior. Uma verdadeira sinfonia de belos azulejos azuis de İznik dão a este espaço uma atmosfera muito especial. A mesquita ocupa uma parte da área outrora ocupada pelo Grande Palácio de Constantinopla, a residência dos imperadores bizantinos entre 330 e 1081.\n[…]\nEm 1606 o sultão Amade I quis construir uma mesquita maior, mais imponente e mais bonita do que Santa Sofia. O edifício tem 43 metros de altura.\n[…]\nAs mesquitas geralmente eram construídas com um intuito de serviço público. A  külliye da Mesquita Azul inclui ou incluiu  uma madraça, um hamame, uma cozinha que fornecia sopa aos pobres e lojas (o Bazar Arasta), cujas rendas se destinam a financiar o complexo.\n[…]\nA mesquita foi revestida com azulejos sobretudo azuis e possui ricos vitrais também do mesmo tom. Não há figuras no interior da mesquita pois os muçulmanos não cultuam imagens. Ao entrar na mesquita é necessário tirar os sapatos. Calções, bermudas, minissaias ou camisetas sem mangas não são recomendados. Funcionários da mesquita fornecem uma espécie de canga para cobrir as partes do corpo que segundo as regras islâmicas não devem ser ser expostas num espaço sagrado.\n[…]\nGuia da Mesquita Azul. www.turismogrecia.info",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Casa Dançante",
      "descricao": "Prédio de escritórios de linhas tortas à beira do rio Moldava, em Praga, inaugurado em 1996."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Em Praga, o prédio de linhas tortas chamado Casa Dançante ganhou o apelido de qual dupla de dançarinos do cinema americano?",
    "resposta": "Fred e Ginger",
    "fonte": [
      "https://en.wikipedia.org/wiki/Dancing_House"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Dancing_House",
        "situacao": "ok",
        "texto": "The Dancing House (Czech: Tančící dům), or Ginger and Fred, is the nickname given to the Nationale-Nederlanden building on the Rašínovo nábřeží (Rašín Embankment) in Prague, Czech Republic. It was designed by the Croatian-Czech architect Vlado Milunić in cooperation with Canadian-American architect Frank Gehry on a vacant riverfront plot. The building was designed in 1992. The construction, carrie\n[…]\nGehry originally called the house Ginger and Fred (after the dancers Ginger Rogers and Fred Astaire – the house resembles a pair of dancers), but the nickname Ginger & Fred is now mainly used for the restaurant located on the seventh floor of the Dancing House Hotel. Gehry himself later discarded his own idea, as he was \"afraid to import American Hollywood kitsch to Prague\".\n[…]\nDancers Fred Astaire and Ginger Rogers are represented in the structure. A tower made of rock is used to represent Fred. This tower also includes a metal head. A tower made of glass is used to represent Ginger.\n[…]\nIn 2016, over the course of five months, two floors of the building were renovated and converted into a 21-room hotel by Luxury Suites s.r.o. The hotel also has apartments available in each of the towers named after Fred and Ginger. The Ginger & Fred Restaurant now operates on the seventh floor, and there is now a glass bar on the eighth floor and an art gallery in the building.\n[…]\nThe Dancing House has been called inappropriate in the classical city of Prague. The deconstructivist design is controversial because the house disrupts the Baroque, Gothic, and Art Nouveau buildings for which Prague is famous. The style, shape, heavy asymmetry, and material are considered out of place by some critics and commentators."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Casa_Dan%C3%A7ante",
        "situacao": "ok",
        "texto": "A Casa Dançante (em checo Tančící dům) é um prédio de escritórios no centro de Praga, na República Checa. Ela foi desenhada pelo arquiteto Vlado Milunić, em cooperação com o arquiteto canadense Frank Gehry em uma área ribeirinha vazia na qual havia um prédio que foi destruído durante o Bombardeio de Praga, em 1945. A construção iniciou em 1994 e terminou em 1996.\n[…]\nO estilo não tradicional era muito controverso na época. O presidente checo Václav Havel, que viveu próximo por décadas apoiou o projeto, esperando que o prédio se tornasse um centro de atividades culturais.\n[…]\nOriginalmente chamada Fred e Ginger (Fred Astaire e Ginger Rogers - a casa lembra vagamente um par de dançarinos) a casa se situa entre os prédios neobarroco, neogótico e art nouveau pelos quais Praga é famosa.\n[…]\nNa cobertura existe um restaurante francês com vistas magníficas da cidade. Os planos de se tornar um centro cultural não se realizaram. Hoje é um prédio comercial com firmas multinacionais. Como é situado em uma rua bastante movimentada, o prédio depende de circulação forçada de ar, fazendo com que o interior fique menos agradável aos ocupantes.[carece de fontes]?\n[…]\nO edifício possui dois corpos, um com 99 painéis de concreto, recoberto por vidro temperado; e o segundo corpo, que parece envolver o primeiro, o que inspirou o nome de Fred e Ginger, pois a construção se assemelha a um passo de dança.\n[…]\nCasa dançante de Praga por Frank Gehry",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Pelourinho",
      "descricao": "Centro histórico de Salvador, na Bahia, com casario colonial, Patrimônio da UNESCO."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O Pelourinho, centro histórico de Salvador, tem o nome de algo que ficava em sua praça no período colonial. O quê?",
    "resposta": "Coluna de castigo público",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Pelourinho_(Salvador)",
      "https://pt.wikipedia.org/wiki/Pelourinho"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Pelourinho_(Salvador)",
        "situacao": "ok",
        "texto": "Largo do Pelourinho (apelidado como Pelô e oficialmente Praça José de Alencar) é um logradouro do bairro do Centro Histórico em Salvador, município capital do estado brasileiro da Bahia.\n[…]\nPor extensão, seu entorno até o Terreiro de Jesus também é conhecido como Pelourinho e configura parte do Centro Histórico de Salvador (CHS), área protegida e reconhecida como Património Mundial pela Organização das Nações Unidas para a Educação, a Ciência e a Cultura (UNESCO) por seu conjunto arquitetônico colonial barroco brasileiro preservado.\n[…]\nO termo pelourinho se refere a uma coluna de pedra, localizada normalmente ao centro de uma praça, onde criminosos eram expostos e castigados. No Brasil Colônia, porém, era principalmente usado para castigar pessoas escravizadas, mas também libertas. Oficialmente, leva o nome de José de Alencar, escritor indianista (autor da trilogia formada pelos romances O Guarani, Iracema e Ubirajara), ministro da Justiça no Segundo Reinado e defensor da escravidão no Brasil.\n[…]\nA partir dos anos 1950, o entorno do Largo do Pelourinho sofreu um forte processo de degradação, com a modernização da cidade e a transferência de atividades econômicas para outras regiões da capital baiana, o que transformou aquela região do Centro Histórico em uma zona pouco valorizada mas tornando-se moradia popular e palco da cultura negra da cidade.\n[…]\nLista de praças de Salvador\n[…]\nPelourinho Cultural, página mantida pelo Instituto do Patrimônio Artístico e Cultural (IPAC) do Estado da Bahia.\n[…]\nSeixas, Thaís (26 de março de 2015). «Salvador em bairros: Pelourinho é patrimônio da humanidade». Salvador. A Tarde. Cópia arquivada em 19 de junho de 2021"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pelourinho",
        "situacao": "ok",
        "texto": "Um pelourinho é uma coluna de pedra, ou menos frequentemente de madeira, erigida em lugar público, junto à qual se expunham e castigavam os criminosos. Era o símbolo máximo da dignidade municipal e era costume estar na praça principal de uma cidade ou vila. Tinham direito a pelourinho os grandes donatários, os bispos, os cabidos e os mosteiros, enquanto proprietários dos senhorios e honras, como p\n[…]\nAntes dessa altura, segundo Herculano, o pelourinho era uma derivação, de costumes muito antigos, da erecção nas cidades do ius italicum das estátuas de Marsias ou Sileno, símbolos das liberdades municipais. Mas outros historiadores remetem para a Columna ou Columna Moenia romana, poste erecto em praça pública no qual os sentenciados eram expostos ao escárnio do povo.\n[…]\nEm Portugal, os pelourinhos ou picotas (esta a designação mais antiga e popular) dos municípios localizavam-se sempre em frente ao edifício da câmara, desde o século XII. Muitos tinham, no topo, uma pequena casa em forma de guarita, feita de grades de ferro, onde os delinquentes eram expostos para a vergonha pública. Noutros locais, os presos eram amarrados às argolas e açoutados ou mutilados, consoante a gravidade do delito e os costumes da época.\n[…]\nOs pelourinhos, normalmente, são constituídos por uma base sobre a qual assenta uma coluna ou fuste, terminando por um capitel.\n[…]\nNo Brasil, também houve pelourinhos na época colonial, trazidos por D. Maria I, e também antes, servindo como símbolos do poder público e lugar de castigo para criminosos, negros escravizados que lutavam por liberdade e homossexuais, inclusive se improvisavam nos navios os chamados Pelourinhos, para a Pena e/ou Pecado.\n[…]\nPelourinho de Rio Grande, no Rio Grande do Sul, que está localizado no centro histórico da cidade, onde atualmente é o mercado de peixe, embora geralmente se improvisavam em uma Árvore, ou Mastro do Navio, no mar;"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Castelo de Neuschwanstein",
      "descricao": "Castelo romântico do século dezenove nos Alpes da Baviera, na Alemanha."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Na Disneylândia da Califórnia, o castelo inspirado no alemão Neuschwanstein leva o nome de qual princesa?",
    "resposta": "A Bela Adormecida",
    "fonte": [
      "https://en.wikipedia.org/wiki/Neuschwanstein_Castle",
      "https://en.wikipedia.org/wiki/Sleeping_Beauty_Castle"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Neuschwanstein_Castle",
        "situacao": "ok",
        "texto": "Neuschwanstein Castle (German: Schloss Neuschwanstein, pronounced [ˈʃlɔs nɔʏˈʃvaːnʃtaɪn]; Southern Bavarian: Schloss Neischwanstoa; lit. 'Newswanstone') is a 19th-century historicist palace on a rugged hill of the foothills of the Alps in the very south of Germany, near the border with Austria. It is located in the Swabia region of Bavaria, in the municipality of Schwangau, above the incorporated \n[…]\nThe more detailed inspiration for the construction of Neuschwanstein came from two journeys that Ludwig took in 1867: one in May to the reconstructed Wartburg near Eisenach, site of the mythical Sängerkrieg and thus setting of Wagner's opera Tannhäuser and the Singers' Contest at Wartburg, and another in July to the Château de Pierrefonds, which Eugène Viollet-le-Duc was transforming from a ruined castle into a historicist palace for Napoleon III.\n[…]\nThe King never intended to make the palace accessible to the public. No more than six weeks after the King's death, the Prince-Regent Luitpold ordered the palace opened to paying visitors. The administrators of King Ludwig's estate managed to balance the construction debts by 1899. From then until World War I, Neuschwanstein was a stable and lucrative source of revenue for the House of Wittelsbach.\n[…]\nIt served as the inspiration for Disneyland's Sleeping Beauty Castle and Cinderella Castle, Cameran Palace in the animated Pokémon film Lucario and The Mystery of Mew (2005), and later similar structures. It is also visited by the character Grace Nakimura alongside Herrenchiemsee in the game The Beast Within: A Gabriel Knight Mystery (1996). It is also featured in the Globe Trot party game on the game Wii Party (2010).\n[…]\nNeuschwanstein Pictures and Videos: From a visitor's perspective.\n[…]\nNeuschwanstein Castle on Bavarian Palace Department website.\n[…]\nNeuschwanstein Castle on the Cultural Travel Explorer website."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Sleeping_Beauty_Castle",
        "situacao": "ok",
        "texto": "Sleeping Beauty Castle is a fairy tale castle at  the center of Disneyland and formerly in Hong Kong Disneyland. It is based on the late 19th century Neuschwanstein Castle in Bavaria, Germany. It appeared in the Walt Disney Pictures logos from 1985 to 2006 before being merged with Cinderella Castle, both familiar symbols of the Walt Disney Company. The version at Disneyland is the only Disney cast\n[…]\nThe Blue Fairy represents the debut of the Main Street Electrical Parade (which was running at Disney California Adventure at that time).\n[…]\nThe 50th Anniversary of Disneyland is represented by fireworks and Tinker Bell.\n[…]\nSleeping Beauty Castle (English for Le Château de la Belle au Bois Dormant) is at the center of Disneyland Park Paris and a continuation of Sleeping Beauty Castle first seen at Disneyland in California.\n[…]\nHong Kong's Sleeping Beauty Castle was a nearly identical copy of the original in California. However, the two castles were differentiated through very subtle details. Hong Kong Disneyland used a different color scheme compared to that of Disneyland, with more natural white and pink colours for the accents and cornice. It also had fewer trees surrounding its castle, which allowed a more open view to accompany the nightly fireworks show.\n[…]\nThe castle closed on January 1, 2018 for a redesign as part of the park's 15th anniversary celebration. This redesign is meant to pay tribute to 14 Disney princesses and heroines. It has been renamed Castle of Magical Dreams.\n[…]\nAs Sleeping Beauty Castle is a Disney icon, it was used in the opening of the Walt Disney anthology television series from the show's beginning in 1954 until the late 70s, when it was replaced by the Cinderella Castle. It was also the logo of Walt Disney Pictures, Walt Disney Television, Disney Music Group and Walt Disney Studios Motion Pictures from 1985–2006."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Castelo_de_Neuschwanstein",
        "situacao": "ok",
        "texto": "O Castelo de Neuschwanstein (em alemão Schloss Neuschwanstein) é um palácio alemão construído na segunda metade do século XIX, perto das cidades de Schwangau e Füssen, no sudoeste da Baviera, a escassas dezenas de quilômetros da fronteira com a Áustria.\n[…]\nFoi construído por Luís II da Baviera no século XIX, inspirado na obra de seu amigo e protegido, o grande compositor Richard Wagner. A arquitectura do castelo possui um estilo fantástico, o qual serviu de inspiração ao \"Castelo da Bela Adormecida\", símbolo dos estúdios Disney. Apesar de não ser permitido fotografar o seu interior, é um dos edifícios mais fotografados da Alemanha e um dos mais populares destinos turísticos europeus, além de também ser considerado o \"cartão postal\" daquele país.\n[…]\n\"É minha intenção reconstruir a ruína do velho castelo em Hohenschwangau, próximo do Desfiladeiro de Pollat, no verdadeiro espírito dos velhos castelos dos cavaleiros alemães (...) a localização é a mais bela que alguém pode encontrar, sagrada e inacessível, um templo digno para o divino amigo que trouxe a salvação e a verdadeira bênção ao mundo.\"\n[…]\nO castelo é propriedade do estado da Baviera, ao contrário do Castelo de Hohenschwangau que é pertença de Franz, Duque da Baviera. Este edifício inspirou a construção de um outro castelo da Casa de Wittelsbach, o Castelo de Ringberg. O Castelo de Neuschwanstein é contemporâneo do português Palácio da Pena, em Sintra, por vezes referido como \"o Neuschwanstein português' (cerca de 1840).\n[…]\nCastelo de Hohenschwangau\n[…]\nSchloss Neuschwanstein - o Guia Oficial, Bayerische Schlosseverwaltung,\n[…]\nNeuschwanstein: página oficial\n[…]\nCastelo de Neuschwanstein\n[…]\nApresentação dos grandes castelos da Europa no Eurochannel\n[…]\nNeuschwanstein O Castelo Dos Contos De Fadas",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Castelo de Neuschwanstein",
      "descricao": "Castelo romântico do século dezenove nos Alpes da Baviera, na Alemanha."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "No século dezenove, qual rei da Baviera mandou construir o Castelo de Neuschwanstein, nos Alpes alemães?",
    "resposta": "Luís II da Baviera",
    "fonte": [
      "https://en.wikipedia.org/wiki/Neuschwanstein_Castle"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Neuschwanstein_Castle",
        "situacao": "ok",
        "texto": "Neuschwanstein Castle (German: Schloss Neuschwanstein, pronounced [ˈʃlɔs nɔʏˈʃvaːnʃtaɪn]; Southern Bavarian: Schloss Neischwanstoa; lit. 'Newswanstone') is a 19th-century historicist palace on a rugged hill of the foothills of the Alps in the very south of Germany, near the border with Austria. It is located in the Swabia region of Bavaria, in the municipality of Schwangau, above the incorporated \n[…]\nNeuschwanstein, the symbolic medieval knight's castle, was not King Ludwig II's only huge construction project. It was followed by the Rococo style Lustschloss of Linderhof Palace and the Baroque palace of Herrenchiemsee, a monument to the era of absolutism. Linderhof, the smallest of the projects, was finished in 1886, and the other two remain incomplete. All three projects together drained his resources.\n[…]\nThe construction costs of Neuschwanstein in the King's lifetime amounted to 6.2 million German gold marks (equivalent to €47 million in 2021), almost twice the initial cost estimate of 3.2 million marks. As his private means were insufficient for his increasingly escalating construction projects, the King continuously opened new lines of credit. In 1876, a court counselor was replaced after pointing out the danger of insolvency.\n[…]\nThe King never intended to make the palace accessible to the public. No more than six weeks after the King's death, the Prince-Regent Luitpold ordered the palace opened to paying visitors. The administrators of King Ludwig's estate managed to balance the construction debts by 1899. From then until World War I, Neuschwanstein was a stable and lucrative source of revenue for the House of Wittelsbach.\n[…]\nNeuschwanstein is a global symbol of the era of Romanticism.\n[…]\nNeuschwanstein Pictures and Videos: From a visitor's perspective.\n[…]\nNeuschwanstein Castle on Bavarian Palace Department website.\n[…]\nNeuschwanstein Castle on the Cultural Travel Explorer website."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Castelo_de_Neuschwanstein",
        "situacao": "ok",
        "texto": "O Castelo de Neuschwanstein (em alemão Schloss Neuschwanstein) é um palácio alemão construído na segunda metade do século XIX, perto das cidades de Schwangau e Füssen, no sudoeste da Baviera, a escassas dezenas de quilômetros da fronteira com a Áustria.\n[…]\nFoi construído por Luís II da Baviera no século XIX, inspirado na obra de seu amigo e protegido, o grande compositor Richard Wagner. A arquitectura do castelo possui um estilo fantástico, o qual serviu de inspiração ao \"Castelo da Bela Adormecida\", símbolo dos estúdios Disney. Apesar de não ser permitido fotografar o seu interior, é um dos edifícios mais fotografados da Alemanha e um dos mais populares destinos turísticos europeus, além de também ser considerado o \"cartão postal\" daquele país.\n[…]\nA concepção do edifício foi esboçada por Luís II da Baviera numa carta a Richard Wagner, datada de 31 de maio de 1868;\n[…]\nActualmente está quase esquecido que Luís II foi um patrono das invenções modernas e um precursor da introdução da electricidade na vida pública da Baviera. Os seus novos castelos foram os primeiros a usar electricidade (por exemplo a Gruta de Vénus de Linderhof) e outros equipamentos modernos.\n[…]\nO castelo é propriedade do estado da Baviera, ao contrário do Castelo de Hohenschwangau que é pertença de Franz, Duque da Baviera. Este edifício inspirou a construção de um outro castelo da Casa de Wittelsbach, o Castelo de Ringberg. O Castelo de Neuschwanstein é contemporâneo do português Palácio da Pena, em Sintra, por vezes referido como \"o Neuschwanstein português' (cerca de 1840).\n[…]\nCastelo de Hohenschwangau\n[…]\nBlunt, Wilfred, The Dream King - Ludwig II of Baviera, Hamish Hamilton, Londres, 1970, ISBN 241-01899-4\n[…]\nCastelo de Neuschwanstein\n[…]\nNeuschwanstein O Castelo Dos Contos De Fadas",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Theatro Municipal do Rio de Janeiro",
      "descricao": "Teatro de ópera na Cinelândia, centro do Rio de Janeiro, inaugurado em 1909."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Inaugurado em 1909, o Theatro Municipal do Rio de Janeiro teve como modelo qual casa de ópera de Paris?",
    "resposta": "Ópera Garnier",
    "fonte": [
      "https://en.wikipedia.org/wiki/Theatro_Municipal_(Rio_de_Janeiro)",
      "https://pt.wikipedia.org/wiki/Theatro_Municipal_do_Rio_de_Janeiro"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Theatro_Municipal_(Rio_de_Janeiro)",
        "situacao": "ok",
        "texto": "The Theatro Municipal (\"Municipal Theater\") is an opera house in the Centro district of  Rio de Janeiro, Brazil. Built in the early twentieth century, it is considered to be one of the most beautiful and important theaters in the country.\n[…]\nThe building is designed in an eclectic style, inspired by the Paris Opéra of Charles Garnier. The outside walls are inscribed with the names of classic European and Brazilian artists. It is located near the National Library and the National Fine Arts Museum, overlooking the spacious Cinelândia square.\n[…]\nFinally, four and a half years later — a record time for the work that took the relay from 280 workers in two shifts — on July 14, 1909, President Nilo Peçanha inaugurated the Theatro Municipal do Rio de Janeiro, which had the capacity for 1,739 viewers. Serzedelo Correa was then the mayor of the city. In 1934, upon the observation that the theater was small for the new size of the population of the city, auditory capacity was increased to 2,205 seats.\n[…]\nWith the inauguration of the annex, choir, orchestra and ballet crews gained new rehearsal rooms and greater space for artistic practices and rehearsal.\n[…]\nToday, the Theatro Municipal mostly shows productions of ballet and classical music. In its early heyday, it featured only foreign opera and symphonic orchestra shows, especially from Italian and French companies. In 1931, the Municipal Symphonic Orchestra of Rio de Janeiro was created and celebrities such as Arturo Toscanini, Sarah Bernhardt, Bidu Sayão, Eliane Coelho, Heitor Villa-Lobos, Igor Stravinsky, Paul Hindemith and Alexander Brailowsky highlighted the programs of the Theatro.\n[…]\nMedia related to Theatro Municipal (Rio de Janeiro) at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Theatro_Municipal_do_Rio_de_Janeiro",
        "situacao": "ok",
        "texto": "O Theatro Municipal do Rio de Janeiro é um dos mais importantes teatros brasileiros. Localiza-se no bairro da Cinelândia, centro do Rio de Janeiro.\n[…]\nNesse contexto, realizou-se um concurso para a construção de um novo teatro, do qual saiu vitorioso o projeto de Francisco de Oliveira Passos (filho do então prefeito Pereira Passos), que contou com a colaboração do francês Albert Guilbert, com um desenho inspirado na Ópera de Paris, de Charles Garnier.\n[…]\nFinalmente, quatro anos e meio mais tarde — um tempo recorde para a obra, que teve o revezamento de 280 operários em dois turnos de trabalho —, no dia 14 de julho de 1909, foi inaugurado pelo então presidente da República, Nilo Peçanha, o Theatro Municipal do Rio de Janeiro. Francisco de Sousa Aguiar era o então prefeito da cidade.\n[…]\nAlém da orquestra, hoje a casa abriga o Coro do Theatro Municipal do Rio de Janeiro e o Ballet do Theatro Municipal do Rio de Janeiro e são apresentados, majoritariamente, programas de dança e de música erudita.\n[…]\nEm comemoração aos cem anos do Theatro Municipal do Rio de Janeiro, foram iniciadas extensas obras no teatro que, foi totalmente restaurado ao estilo original.\n[…]\nPara resgatar a beleza original ao teatro, construído no início do século anterior, foram investidos 70 milhões de reais nos trabalhos de restauro, que duraram mais de novecentos dias. Já para resgatar o dourado nos ornamentos do teatro, foram utilizadas milhares de folhas de ouro de 23 quilates compradas na Alemanha e que adornam os detalhes da fachada e da cúpula, como detalhou a Secretaria de Cultura do Rio de Janeiro, da qual depende a Fundação Theatro Municipal."
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Ópera Garnier",
      "descricao": "Casa de ópera de Paris projetada por Charles Garnier, inaugurada em 1875."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O reservatório de água sob o Palais Garnier, em Paris, inspirou o esconderijo de qual personagem do romance de Gaston Leroux?",
    "resposta": "O Fantasma da Ópera",
    "fonte": [
      "https://en.wikipedia.org/wiki/Palais_Garnier"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Palais_Garnier",
        "situacao": "ok",
        "texto": "The Palais Garnier (French: [palɛ ɡaʁnje] , \"Garnier Palace\"), also known as Opéra Garnier (French: [ɔpeʁa ɡaʁnje] , \"Garnier Opera\"), is a historic 1,979-seat opera house at the Place de l'Opéra in the 9th arrondissement of Paris, France. It was built for the Paris Opera from 1861 to 1875 at the behest of Emperor Napoleon III.\n[…]\nThe Palais Garnier has been called \"probably the most famous opera house in the world, a symbol of Paris like Notre Dame Cathedral, the Louvre, or the Sacré Coeur Basilica\". This is at least partly due to its use as the setting for Gaston Leroux's 1910 novel The Phantom of the Opera and, especially, the novel's subsequent adaptations in films and the popular 1986 musical.\n[…]\nThe Palais Garnier also houses the Bibliothèque-Musée de l'Opéra de Paris (Paris Opera Library-Museum), which is managed by the Bibliothèque Nationale de France and is included in unaccompanied tours of the Palais Garnier.\n[…]\nOn 20 May 1896, one of the chandelier's counterweights broke free and burst through the ceiling into the auditorium, killing a concierge. This incident inspired one of the more famous scenes in Gaston Leroux's classic 1910 gothic novel The Phantom of the Opera.\n[…]\nA contract for its construction was signed on 20 June. Soon a persistent legend arose that the opera house was built over a subterranean lake, inspiring Gaston Leroux to incorporate the idea into his novel The Phantom of the Opera. On 21 July the cornerstone was laid at the southeast angle of the building's façade. In October the pumps were removed, the brick vault of the cuve was finished by 8 November, and the substructure was essentially complete by the end of the year.\n[…]\n360° Panoramas of the Paris Opera Archived 6 October 2017 at the Wayback Machine by the Media Center for Art History at Columbia University"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/%C3%93pera_Garnier",
        "situacao": "ok",
        "texto": "A Ópera Garnier ou Palais Garnier é uma casa de ópera localizada no IX arrondissement de Paris, França. O edifício é considerado uma das obras-primas da arquitetura de seu tempo. Construído em estilo neobarroco, é o 13º teatro a hospedar a Ópera de Paris, desde sua fundação por Luís XIV, em 1669. Sua capacidade é de 1979 espectadores sentados.\n[…]\nO palácio era comumente chamado apenas de Ópera de Paris, mas, após a inauguração da Ópera da Bastilha, em 1989, passou a ser chamado Ópera Garnier.\n[…]\nA pedra angular da Ópera Garnier foi colocada em 1861 e a construção teve início no mesmo ano. Entretanto a obra foi interrompida por numerosos incidentes, incluindo a Guerra Franco-Prussiana, a queda do Império francês e a Comuna de Paris. Outro problema foi o próprio terreno, extremamente pantanoso, o que implicou contínuos bombeamentos de água durante oito meses, antes que as fundações pudessem ser lançadas.\n[…]\nDizia-se que existia um lago subterrâneo alimentado pelo rio Grange-Batelière - hipótese  sabiamente explorada pelo célebre romance de  Gaston Leroux, O Fantasma da Ópera. Na realidade, o rio corre um pouco mais longe.\n[…]\nDepois de inúmeros contratempos, os trabalhos foram completados em 1874, e o Palácio Garnier foi formalmente inaugurado em 15 de janeiro de 1875, com a representação da ópera A Judia, de  Halévy, e trechos de Os Huguenotes, de Giacomo Meyerbeer.\n[…]\nO Palácio Garnier é um dos dois teatros que abrigam a Ópera Nacional de Paris, sendo o outro a Ópera da Bastilha.\n[…]\nO palácio é servido pela estação de metrô Opéra.\n[…]\nÓpera Nacional de Paris\n[…]\nBalé da Ópera de Paris\n[…]\nBeauvert, Thierry, Opera Houses of the World, The Vendome Press, New York, 1995. [ISBN 0-86565-978-8]\n[…]\nPágina oficial da Ópera Garnier (em francês)\n[…]\nLocalização da Ópera Garnier em Paris (em francês)\n[…]\nPara mais informações sobre a ópera",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Calçadão de Copacabana",
      "descricao": "Calçada de pedras portuguesas em preto e branco ao longo da praia de Copacabana, no Rio de Janeiro."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O desenho de ondas do calçadão de Copacabana reproduz o piso de pedras portuguesas de qual praça de Lisboa?",
    "resposta": "Praça do Rossio",
    "fonte": [
      "https://en.wikipedia.org/wiki/Portuguese_pavement",
      "https://en.wikipedia.org/wiki/Rossio"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Portuguese_pavement",
        "situacao": "ok",
        "texto": "Portuguese pavement, known in Portuguese as calçada portuguesa or simply calçada (or pedra portuguesa in Brazil), is a traditional-style pavement used for many pedestrian areas in Portugal and its former colonies. It consists of small pieces of stone arranged in a pattern or image, like a mosaic. It can also be found in Olivença (a disputed territory administered by Spain) and throughout former Po\n[…]\nIn 1848, Pinheiro was put in charge of the renewal of Rossio square, which he paved with a pattern of waves in homage to the sea crossed by Portuguese sailors. From then onward, the calçada began to spread throughout the streets of Lisbon and Portugal as a whole. Much of the motifs and patterns would revolve around the sea and maritime exploration, and the pavement quickly became a symbol of Portuguese culture and identity, also spreading overseas to Portugal's colonies.\n[…]\nBelo Horizonte followed suit, and then Rio de Janeiro. In Rio, mayor Francisco Pereira Passos was a strong promoter of implementing the calçada as part of the city's urban renewal plan, which was subsequently adopted in the reworking of Avenida Rio Branco, importing calceteiros, designs and even stones from Portugal. The remaining building materials were destined for the newly inaugurated Avenida Atlântica, in its iconic wavy pattern. Portuguese pavement then began to proliferate through Rio.\n[…]\nIn the 1940s, the Portuguese calçada began to evolve in line with the principles of the International Style, developing abstract geometric patterns. In Brazil, this pavement was used in many projects directed by modernist architects, in which they blended traditional materials and techniques like the calçada with contemporary design. Roberto Burle Marx applied it to many of his works and conserved it when redesigning Copacabana in the 1970s.\n[…]\nPortuguese pavement and its histories (Portuguese language)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Rossio",
        "situacao": "ok",
        "texto": "The King Pedro IV Square (Portuguese: Praça de D. Pedro IV), popularly known as Rossio ([ʁuˈsi.u]), is a square in the Pombaline Downtown of Lisbon, Portugal. It has been one of its main squares since the Middle Ages. It has been the setting of popular revolts and celebrations, bullfights and executions, and is now a preferred meeting place of Lisbon natives and tourists alike. The square is named\n[…]\nFrom the Pombaline reconstruction dates the Bandeira Arch, a building at the south side of the square with a baroque pediment and a big arch that communicates the Rossio with the Sapateiros Street. The Rossio became linked to the other main square of the city, the Praça do Comércio, by two straight streets: the Áurea and the Augusta Streets.\n[…]\nIn the 19th century the Rossio was paved with typical Portuguese mosaic and was adorned with bronze fountains imported from France. The Column of Pedro IV was erected in 1874. At this time the square received its current official name, never accepted by the people.\n[…]\nBetween 1886 and 1887 another important landmark was built in the square: the Rossio Train Station (Estação de Caminhos de Ferro do Rossio). The Station was built by architect José Luís Monteiro and was an important addition to the infrastructure of the city. Its neo-manueline façade dominates the northwest side of the square.\n[…]\nThe Rossio has been a meeting place for people of Lisbon for centuries. Some of the cafés and shops of the square date from the 18th century, such as the Café Nicola, where poet Manuel Maria Barbosa du Bocage used to meet friends. Other traditional shops include the Pastelaria Suíça (1922–2018) and the Ginjinha, where the typical Lisbon spirit (Ginjinha) can be tasted.\n[…]\nPraça do Comércio\n[…]\nRossio railway station\n[…]\nInteractive Panorama: Rossio\n[…]\nhttps://www.lisbon.net/rossio-square"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cal%C3%A7ada_portuguesa",
        "situacao": "ok",
        "texto": "A calçada portuguesa ou mosaico português ou calçada-mosaico (ou ainda pedra portuguesa no Brasil) é o nome consagrado de um determinado tipo de revestimento de piso utilizado especialmente na pavimentação de passeios, de espaços públicos e espaços privados, de uma forma geral. Este tipo de passeio é muito utilizado em países lusófonos.\n[…]\nA sua aplicação pode ser apreciada em projetos como o do famoso Largo de São Sebastião, em Manaus, no ano de 1901, sendo a primeira calçada artística portuguesa no Brasil, inspirada na Praça Dom Pedro IV, de Lisboa.\n[…]\nEm Lisboa no ano de 1842 foi executada a primeira calçada a preto e branco, a calcário e basalto, de que há registo conhecido. O trabalho foi realizado por presidiários (chamados \"grilhetas\" na época), a mando do Governador de armas do Castelo de São Jorge, o tenente-general Eusébio Pinheiro Furtado, na praça do Castelo de São Jorge.\n[…]\nApós este primeiro pavimento em calçada artística portuguesa, foram concedidas verbas a Eusébio Furtado para que os seus homens pavimentassem, obra iniciada em Agosto de 1848, toda a área da Praça do Rossio, uma das zonas mais conhecidas e mais centrais de Lisboa, numa extensão de 8712 m², que ficaria concluída no final do ano seguinte.\n[…]\nEm 1986 foi criada uma escola para calceteiros (a Escola de Calceteiros da Câmara Municipal de Lisboa), atualmente situada na Quinta do Conde dos Arcos. Em Dezembro de 2006, foi inaugurado o Monumento ao Calceteiro, da autoria do escultor Sérgio Stichini, na Rua da Vitória (Baixa Pombalina), entre as Rua da Prata e Rua dos Douradores, que foi retirado depois de ter sido vandalizado. Depois de restaurado seria reerguido, em 2017, na Praça dos Restauradores.\n[…]\nMatos, Ernesto. Calçada portuguesa: uma linguagem universal. Lisboa, Câmara Municipal de Lisboa, 2001.\n[…]\nCalçadão",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Ponte Luís I",
      "descricao": "Ponte metálica em arco sobre o rio Douro, ligando o Porto a Vila Nova de Gaia, inaugurada em 1886."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Inaugurada em 1886 sobre o Douro, a Ponte Luís I, no Porto, foi projetada por um ex-sócio de qual famoso engenheiro francês?",
    "resposta": "Gustave Eiffel",
    "fonte": [
      "https://en.wikipedia.org/wiki/Dom_Lu%C3%ADs_I_Bridge"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Dom_Lu%C3%ADs_I_Bridge",
        "situacao": "ok",
        "texto": "The Luiz I Bridge (Portuguese: Ponte Luiz I), commonly known as Dom Luís I Bridge (Ponte de Dom Luís I), is a double-deck metal arch bridge that spans the river Douro between the cities of Porto and Vila Nova de Gaia in Portugal. At its construction, its 172 metres (564 ft) span was the longest of its type in the world.\n[…]\nIn 1879, Gustave Eiffel presented a project to construct a new bridge over the Douro, with a high single deck in order to facilitate ship navigation. This project was rejected due to dramatic growth of the urban population, which required a rethinking of the limits of a single-deck platform.\n[…]\nA competition was initiated in November 1880, in order to construct a double-deck metal bridge, which included projects by Compagnie de Fives-Lille, Cail & C., Schneider & Co., Gustave Eiffel, Lecoq & Co., Société de Braine-le-Comte, Société des Batignolles (which submitted two ideas), Andrew Handyside & Co., Société de Construction de Willebroek (also two projects), and John Dixon.\n[…]\nIt was in January of the following year that deliberations by the committee supported the project of Société de Willebroek. This design cost 369,000$00 réis and provided better carrying capacity. On 21 November 1881, the public work was awarded to the Belgian Société de Willebroek, from Brussels, for 402 contos. It was to be administered by Théophile Seyrig, the former partner of Gustave Eiffel and author of the project.\n[…]\nSeyrig had also designed the Maria Pia bridge that was constructed by Eiffel & cie, hence the resemblance of his new bridge to the Maria Pia bridge. Construction began on the Luiz I bridge alongside the towers of an earlier suspension bridge, the Ponte Pênsil, which was disassembled.\n[…]\nDom Luís I Bridge at Structurae\n[…]\nDom Luís Bridge on en.Broer.no"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ponte_de_D._Lu%C3%ADs_%28Porto%29",
        "situacao": "ok",
        "texto": "A Ponte de D. Luís, também conhecida como Ponte Luís I ou Ponte Luiz I, é uma ponte em estrutura metálica com dois tabuleiros, construída entre os anos 1881 e 1886, ligando as cidades do Porto e Vila Nova de Gaia (margem norte e sul, respetivamente) separadas pelo rio Douro, em Portugal.\n[…]\nEsta construção veio substituir a antiga ponte pênsil que existia no mesmo local e foi realizada mediante o projecto do engenheiro belga Théophile Seyrig, que já tinha colaborado anteriormente com Gustave Eiffel na construção da Ponte de D. Maria Pia, ferroviária.\n[…]\nCarlos; acrescente-se ainda que apesar de o nome oficial da ponte ser \"Luiz I\", conforme atestam as inscrições nas placas dos pegões-encontro sobre as entradas do tabuleiro inferior, a população do Porto sempre a chamou, embora erroneamente, de \"Ponte de D. Luís\", salvaguardando o título do rei com quem a cidade tinha grande proximidade.\n[…]\nPor proposta de lei de 11 de Fevereiro de 1879, o Governo determinou a abertura de concurso para a \"construção de uma ponte metálica sobre o rio Douro, no local que se julgar mais conveniente em frente da cidade do Porto, para a substituição da atual ponte pênsil\", após o governo não ter aceite um projeto da firma G. Eiffel et Cie. que só contemplava um tabuleiro ao nível da ribeira, com setor levadiço na parte central.\n[…]\nFoi vencedora a proposta da empresa belga Société de Willebroeck, com projeto do engenheiro Théophile Seyrig, que já tinha sido o autor da concepção e chefe da equipa de projeto da Ponte de D. Maria Pia. Théophile Seyrig, enquanto sócio de Gustave Eiffel, assina como único responsável a nova e grandiosa Ponte Luís I. A construção inicia-se em 1881 e a inauguração acontece a 31 de outubro de 1886.\n[…]\n1886, 31 de outubro - inauguração do tabuleiro superior",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Catedral de Florença",
      "descricao": "Catedral de Santa Maria del Fiore, em Florença, na Itália, com grande cúpula do século quinze."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Erguida no século quinze, a enorme cúpula da Catedral de Florença foi projetada por qual arquiteto renascentista?",
    "resposta": "Filippo Brunelleschi",
    "fonte": [
      "https://en.wikipedia.org/wiki/Florence_Cathedral",
      "https://en.wikipedia.org/wiki/Brunelleschi%27s_Dome"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Florence_Cathedral",
        "situacao": "ok",
        "texto": "Florence Cathedral (Italian: Duomo di Firenze), formally the Cathedral of Saint Mary of the Flower (Italian: Cattedrale di Santa Maria del Fiore [katteˈdraːle di ˈsanta maˈriːa del ˈfjoːre]), is the cathedral of the Catholic Archdiocese of Florence in Florence, Italy.\n[…]\nLorenzo Ghiberti had a large artistic impact on the cathedral. Ghiberti worked with Filippo Brunelleschi on the cathedral for eighteen years and had a large number of projects on almost the whole east end. Some of his works are the stained glass designs for the oculi in the drum, the bronze shrine of Saint Zenobius and marble revetments on the outside of the cathedral.\n[…]\nFilippo Brunelleschi\n[…]\nDevémy, Jean-François (2013). Sur les traces de Filippo Brunelleschi, l'invention de la coupole de Santa Maria del Fiore à Florence. Suresnes: Les Editions du Net. ISBN 978-2-312-01329-9. (in line presentation Archived 3 March 2016 at the Wayback Machine)\n[…]\nGärtner, Peter J. (1998). Filippo Brunelleschi 1377–1446. Cologne: Könemann. ISBN 978-3-8290-0241-7.\n[…]\nTacconi, Marica S. (2005). Cathedral and Civic Ritual in Late Medieval and Renaissance Florence: The Service Books of Santa Maria del Fiore. Cambridge: Cambridge University Press. ISBN 978-0-521-81704-2.\n[…]\nRicci, Massimo, Il genio di Brunelleschi e la costruzione della Cupola di Santa Maria del Fiore, Livorno : Casa Editrice Sillabe S.r.l., April 2014. (The genius of Filippo Brunelleschi and the construction of the dome of Santa Maria del Fiore). ISBN 978-88-8347-691-4. The book is the result of forty years of research on the secret technique with which Brunelleschi built the Dome of Santa Maria del Fiore in Florence.\n[…]\n\"The Cathedral\". The Florence Art Guide. 2004. Retrieved 14 July 2006.\n[…]\nMuseums in Florence – Cathedral and Giotto Belltower"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Brunelleschi%27s_Dome",
        "situacao": "ok",
        "texto": "Florence Cathedral (Italian: Duomo di Firenze), formally the Cathedral of Saint Mary of the Flower (Italian: Cattedrale di Santa Maria del Fiore [katteˈdraːle di ˈsanta maˈriːa del ˈfjoːre]), is the cathedral of the Catholic Archdiocese of Florence in Florence, Italy.\n[…]\nLorenzo Ghiberti had a large artistic impact on the cathedral. Ghiberti worked with Filippo Brunelleschi on the cathedral for eighteen years and had a large number of projects on almost the whole east end. Some of his works are the stained glass designs for the oculi in the drum, the bronze shrine of Saint Zenobius and marble revetments on the outside of the cathedral.\n[…]\nFilippo Brunelleschi\n[…]\nDevémy, Jean-François (2013). Sur les traces de Filippo Brunelleschi, l'invention de la coupole de Santa Maria del Fiore à Florence. Suresnes: Les Editions du Net. ISBN 978-2-312-01329-9. (in line presentation Archived 3 March 2016 at the Wayback Machine)\n[…]\nGärtner, Peter J. (1998). Filippo Brunelleschi 1377–1446. Cologne: Könemann. ISBN 978-3-8290-0241-7.\n[…]\nTacconi, Marica S. (2005). Cathedral and Civic Ritual in Late Medieval and Renaissance Florence: The Service Books of Santa Maria del Fiore. Cambridge: Cambridge University Press. ISBN 978-0-521-81704-2.\n[…]\nRicci, Massimo, Il genio di Brunelleschi e la costruzione della Cupola di Santa Maria del Fiore, Livorno : Casa Editrice Sillabe S.r.l., April 2014. (The genius of Filippo Brunelleschi and the construction of the dome of Santa Maria del Fiore). ISBN 978-88-8347-691-4. The book is the result of forty years of research on the secret technique with which Brunelleschi built the Dome of Santa Maria del Fiore in Florence.\n[…]\n\"The Cathedral\". The Florence Art Guide. 2004. Retrieved 14 July 2006.\n[…]\nMuseums in Florence – Cathedral and Giotto Belltower"
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
    "indice": 41,
    "ancora": {
      "nome": "Praça de São Pedro",
      "descricao": "Grande praça diante da Basílica de São Pedro, no Vaticano, cercada por uma colunata em semicírculo."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "No Vaticano, a colunata que parece abraçar a Praça de São Pedro foi projetada por qual artista barroco italiano?",
    "resposta": "Gian Lorenzo Bernini",
    "fonte": [
      "https://en.wikipedia.org/wiki/St._Peter%27s_Square"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/St._Peter%27s_Square",
        "situacao": "ok",
        "texto": "St. Peter's Square (Latin: Forum Sancti Petri, Italian: Piazza San Pietro [ˈpjattsa sam ˈpjɛːtro]) is a large plaza located directly in front of St. Peter's Basilica in Vatican City, the papal enclave in Rome, directly west of the neighborhood (rione) of Borgo. Both the square and the basilica are named after Saint Peter, an apostle of Jesus whom Catholics consider the first pope.\n[…]\nAt the centre of the square is the Vatican obelisk, an ancient Egyptian obelisk erected at the current site in 1586. Gian Lorenzo Bernini designed the square almost 100 years later, including the massive Tuscan colonnades, four columns deep, which embrace visitors in \"the maternal arms of Mother Church\". A granite fountain constructed by Bernini in 1675 matches another fountain designed by Carlo Maderno in 1613.\n[…]\nThe open space which lies before the basilica was redesigned by Gian Lorenzo Bernini from 1667 to 1676, under the direction of Pope Alexander VII, as an appropriate forecourt, designed \"so that the greatest number of people could see the Pope give his blessing, either from the middle of the façade of the church or from a window in the Vatican Palace\". Bernini had been working on the interior of St.\n[…]\nThe elliptical center of the piazza, which contrasts with the trapezoidal entrance, encloses the visitor with \"the maternal arms of Mother Church\" in Bernini's expression. On the south side, the colonnades define and formalize the space, with the Barberini Gardens still rising to a skyline of umbrella pines. On the north side, the colonnade masks an assortment of Vatican structures; the upper stories of the Vatican Palace rise above.\n[…]\nList of works by Gian Lorenzo Bernini\n[…]\nGreat Buildings On-line: Piazza of St. Peter's\n[…]\nRoberto Piperno, \"Piazza di S. Pietro\": engravings by Vasi\n[…]\nMary Ann Sullivan, \"St Peter's Piazza, Vatican City\"\n[…]\nSt. Peter's Square, Bernini's Fountain"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pra%C3%A7a_de_S%C3%A3o_Pedro",
        "situacao": "ok",
        "texto": "Praça de São Pedro (em italiano Piazza di San Pietro) é uma grande praça localizada diretamente em frente à Basílica de São Pedro na Cidade do Vaticano, o enclave papal em Roma, diretamente a oeste do bairro (rione) de Borgo. Tanto a praça quanto a basílica têm o nome de São Pedro, um apóstolo de Jesus que os católicos consideram o primeiro Papa.\n[…]\nNo centro da praça está um antigo obelisco egípcio, erguido no local atual em 1586. Gian Lorenzo Bernini projetou a praça quase 100 anos depois, incluindo as enormes colunatas dóricas, quatro colunas de profundidade, que abraçam os visitantes nos \"braços maternos da Mãe Igreja\". Uma fonte de granito construída por Bernini em 1675 combina com outra fonte projetada por Carlo Maderno em 1613.\n[…]\nO espaço aberto que se encontra diante da basílica foi redesenhado por Gian Lorenzo Bernini de 1656 a 1667, sob a direção do Papa Alexandre VII, como um pátio adequado, projetado \"para que o maior número de pessoas pudesse ver o Papa dar sua bênção, seja do meio da fachada da igreja ou de uma janela do Palácio do Vaticano\".\n[…]\nO obelisco marcava um centro e uma fonte de granito de Maderno ficava de um lado: Bernini fez a fonte parecer um dos focos do ovato tondo (\"redondo ovalado\") abraçado por suas colunatas e eventualmente igualou-o do outro lado, em 1675, apenas cinco anos antes de sua morte. A forma trapezoidal da praça, que cria uma perspectiva elevada para um visitante que sai da basílica e foi elogiado como um golpe de mestre do teatro barroco, é em grande parte um produto das restrições do local.\n[…]\nEmbora Bernini não tivesse influência na construção do obelisco, ele o usou como a peça central de sua magnífica praça e acrescentou as armas Chigi ao topo em homenagem a seu patrono, Alexandre VII.\n[…]\nMedia relacionados com Praça de São Pedro no Wikimedia Commons",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Santa Sofia",
      "descricao": "Grande templo de cúpula em Istambul, construído no século seis como catedral bizantina e depois convertido em mesquita."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "No século seis, qual imperador bizantino mandou erguer a Santa Sofia, em Constantinopla?",
    "resposta": "Justiniano",
    "fonte": [
      "https://en.wikipedia.org/wiki/Hagia_Sophia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hagia_Sophia",
        "situacao": "ok",
        "texto": "Hagia Sophia, officially the Hagia Sophia Grand Mosque, is a mosque and a major cultural and historical site in Istanbul, Turkey. It was formerly a church (360–1453) and a museum (1935–2020). The last of three church buildings to be successively erected on the site by the Eastern Roman Empire, it was completed in AD 537, becoming the world's largest interior space and among the first to employ a f\n[…]\nAt the edge of the Augustaeum was the Milion and the Regia, the first stretch of Constantinople's main thoroughfare, the Mese. Also facing the Augustaeum were the enormous Constantinian thermae, the Baths of Zeuxippus, and the Justinianic civic basilica under which was the vast cistern known as the Basilica Cistern. On the opposite side of Hagia Sophia was the former cathedral, Hagia Irene.\n[…]\nJustinian and Patriarch Menas inaugurated the new basilica on 27 December 537, 5 years and 10 months after construction started, with much pomp. Hagia Sophia was the seat of the Patriarchate of Constantinople and a principal setting for Byzantine imperial ceremonies, such as coronations. The basilica offered sanctuary from persecution to criminals, although there was disagreement about whether Justinian had intended for murderers to be eligible for asylum.\n[…]\nHagia Sophia is one of the greatest surviving examples of Byzantine architecture. Its interior is decorated with mosaics, marble pillars, and coverings of great artistic value. Justinian had overseen the completion of the greatest basilica ever built up to that time, and it was to remain the largest church for 500 years until the completion of the abbey church at Cluny in the 12th century.\n[…]\nOn her right side stands emperor Justinian I, offering a model of the Hagia Sophia. The composition of the figure of the Virgin enthroned was probably copied from the mosaic inside the semi-dome of the apse inside the liturgical space."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Santa_Sofia",
        "situacao": "ok",
        "texto": "Santa Sofia (em grego: Άγια Σοφία; romaniz.: Agia Sophia, que significa \"Sagrada Sabedoria\"; em turco: Ayasofya), oficialmente Grande Mesquita de Santa Sofia (em turco:  Ayasofya-i Kebir Cami-i Şerifi), é um imponente edifício construído entre 532 e 537 pelo Império Bizantino para ser a catedral de Constantinopla (atualmente Istambul, na Turquia).\n[…]\nO edifício atual foi construído originalmente como uma igreja entre 532 e 537 por ordem do imperador bizantino Justiniano I e foi a terceira igreja de Santa Sofia a ocupar o local, as duas anteriores tendo sido destruídas em revoltas civis. Ela foi projetada pelos cientistas gregos Isidoro de Mileto, um médico, e Antêmio de Trales, um matemático.\n[…]\nO imperador, juntamente com o patriarca Eutíquio de Constantinopla, inauguraram a nova basílica em 27 de dezembro de 537 com pompa e circunstância. Contudo, os mosaicos internos só foram completados sob o reinado de Justino II (r. 565–578).\n[…]\nEsta reconstrução foi completada no ano de 562 e o poeta bizantino Paulo Silenciário compôs um longo poema (ainda existente), conhecido como Ekphrasis, onde ele a comparou a um \"campo de mármore\", tantas as cores utilizadas. A reabertura foi presidida novamente pelo patriarca Eutíquio de Constantinopla no dia 23 de dezembro de 562. A riqueza e o nível artístico da basílica teria levado Justiniano a dizer Νενίκηκά σε Σολομών (\"Salomão, eu te superei!\").\n[…]\nSanta Sofia é um dos grandes exemplos ainda existentes da arquitetura bizantina. Seu interior, decorado com pilares de mármore e mosaicos é de grande valor artístico. O próprio imperador Justiniano supervisionou a finalização da maior catedral já construída na época. Ela foi a maior conquista arquitetônica da antiguidade tardia e sua influência se espalhou pelo mundo ortodoxo, católico e islâmico.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Partenon",
      "descricao": "Templo dórico dedicado à deusa Atena, no alto da Acrópole de Atenas, do século cinco antes de Cristo."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1687, durante um cerco veneziano a Atenas, grande parte do Partenon foi destruída. O que causou o estrago?",
    "resposta": "Explosão da pólvora guardada nele",
    "fonte": [
      "https://en.wikipedia.org/wiki/Parthenon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Parthenon",
        "situacao": "ok",
        "texto": "The Parthenon (; Ancient Greek: Παρθενών, romanised: Parthenōn [par.tʰe.nɔ̌ːn]; Greek: Παρθενώνας, romanised: Parthenónas [parθeˈnonas]) is a former temple on the Athenian Acropolis, Greece, that was dedicated to the goddess Athena. Its decorative sculptures are considered some of the high points of classical Greek art, and the Parthenon is considered an enduring symbol of ancient Greece, Western \n[…]\nIn the final decade of the 6th century AD, the Parthenon was converted into a Christian church dedicated to the Virgin Mary. After the Ottoman conquest in the mid-15th century, it became a mosque. In the Morean War, a Venetian bomb landed on the Parthenon, which the Ottomans had used as a munitions dump, during the 1687 siege of the Acropolis. The resulting explosion severely damaged the Parthenon.\n[…]\nThe experts discovered the metopes while processing 2,250 photos with modern photographic methods, as the white Pentelic marble they are made of differed from the other stone of the wall. It was previously presumed that the missing metopes were destroyed during the Morosini explosion of the Parthenon in 1687.\n[…]\nOn 26 September 1687 a Venetian mortar round, fired from the Hill of Philopappos, blew up the magazine. The explosion blew out the building's central portion and caused the cella's walls to crumble into rubble. According to Greek architect and archaeologist Kornilia Chatziaslani:\n[…]\nAbout three hundred people were killed in the explosion, which showered marble fragments over nearby Turkish defenders and sparked fires that destroyed many homes.\n[…]\nOnce the Turks had recaptured the Acropolis, they used some of the rubble produced by this explosion to erect a smaller mosque within the shell of the ruined Parthenon. For the next century and a half, parts of the remaining structure were looted for building material and especially valuable objects."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Partenon",
        "situacao": "ok",
        "texto": "Partenon (em grego antigo: Παρθενών, transl Parthenōn; em grego moderno Παρθενώνας, transl. Parthenónas) foi um templo dedicado à deusa grega Atena, construído no século V a.C.\n[…]\nO Partenon sofreu seu maior dano em 1687, quando os venezianos, liderados por Francesco Morosini, atacaram Atenas e os otomanos usaram a edificação como paiol de pólvora. No dia 26 de setembro, um canhão veneziano, disparando da colina de Filopapo, acertou no paiol e o edifício foi parcialmente destruído. A estrutura interna foi demolida, o telhado caiu e algumas colunas, particularmente do lado sul, foram decapitadas. As esculturas sofreram pesados danos.\n[…]\nO Partenon não será devolvido a um estado pré explosão de 1687, mas os danos serão mitigados o máximo possível, e mármore novo do local original está sendo usado para preencher vazios e fazer reparos necessários na estrutura. Ultimamente, as maiores peças já foram repostas na estrutura, suportadas, se necessário por materiais modernos.\n[…]\n1687 — Os venezianos atacam Atenas. O Partenon é usado pelos turcos como depósito de pólvora e, em 26 de setembro, é atingido por uma bala de canhão que demole sua estrutura interna\n[…]\nO estadista ateniense indica assim que o metal, obtido a partir de cunhagem contemporânea, poderia ser utilizado novamente sem qualquer impiedade. O Partenon deve, então, ser visto como um grande cenário para a estátua votiva de Fídias em vez de um local de culto. Diz-se em muitos escritos dos gregos que havia muitos tesouros guardados no interior do templo, como espadas persas e pequenas estátuas figurativas feitas de metais preciosos.\n[…]\nAcrópole de Atenas\n[…]\nPartenon (Nashville)\n[…]\nAcrópole de Atenas",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Basílica de Sacré-Cœur",
      "descricao": "Basílica de cúpulas brancas em Paris, dedicada ao Sagrado Coração, concluída no início do século vinte."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Por que a Basílica de Sacré-Cœur, em Paris, continua branca mesmo com a poluição e o passar dos anos?",
    "resposta": "A pedra libera calcita com a chuva",
    "fonte": [
      "https://en.wikipedia.org/wiki/Sacr%C3%A9-C%C5%93ur,_Paris"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sacr%C3%A9-C%C5%93ur,_Paris",
        "situacao": "ok",
        "texto": "The Basilica of the Sacred Heart of Montmartre (French: Basilique du Sacré-Cœur de Montmartre), commonly known as Sacré-Cœur Basilica (French: Basilique du Sacré-Cœur) or simply Sacré-Cœur (French: Sacré-Cœur, pronounced [sakre kœr]), is a Catholic church and minor basilica in Paris dedicated to the Sacred Heart of Jesus.\n[…]\nSacré-Cœur Basilica has maintained perpetual adoration of the Holy Eucharist since 1885. The site is traditionally associated with the martyrdom of Saint Denis, the patron saint of Paris.\n[…]\nThe white stone of Sacré-Cœur is travertine limestone of a type called Chateau-Landon, quarried in Souppes-sur-Loing, in Seine-et-Marne, France. The particular quality of this stone is that it is extremely hard with a fine grain, and exudes calcite on contact with rainwater, making it exceptionally white.\n[…]\nThe Savoyarde itself only rings for major religious holidays, especially on the occasion of Easter, Pentecost, Ascension, Christmas, Assumption and All Saints. One exception was on the night of 24 August 1944 when La Nueve – 9th Company, Régiment de marche du Tchad of the French 2nd Armored Division – broke into Paris and arrived at the Hôtel de Ville during the Liberation of Paris from Nazi German occupation, becoming the first French Army troops to return to the city since 1940.\n[…]\nJacques Benoist, Le Sacre-Coeur de Montmartre de 1870 a nos Jours (Paris) 1992. A cultural history from the point of view of a former chaplain.\n[…]\nYvan Crist, \"Sacré-Coeur\" in Larousse Dictionnaire de Paris (Paris) 1964.\n[…]\nDavid Harvey.\"The building of the Basilica of Sacré-Coeur\", coda to Paris, Capital of Modernity (2003:311ff) Harvey made use of Hubert Rohault de Fleury. Historique de la Basilique du Sacré Coeur (1903–09), the official history of the building of the basilica, in four volumes, printed, but not published."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bas%C3%ADlica_de_Sacr%C3%A9_C%C5%93ur",
        "situacao": "ok",
        "texto": "A Basílica do Sagrado Coração de Jesus de Montmartre ou simplesmente Basílica do Sagrado Coração (em francês, Basilique du Sacré-Cœur; Basilique du Sacré-Cœur de Jésus-Christe) é um templo da Igreja Católica Apostólica Romana em Paris.\n[…]\nDedicada ao Sagrado Coração de Jesus, e localizada no topo da colina de Montmartre, Quartier de Clignancourt, no 18.º arrondissement de Paris, o templo é um dos mais importantes edifícios religiosos parisienses, ¨Santuário da Adoração Eucarística e da Misericórdia Divina\", e propriedade da comuna de Paris.\n[…]\nA ideia de construir um templo dedicado ao Sagrado Coração de Jesus surgiu depois da guerra Franco-Prussiana (1870), como pagamento da promessa feita por Alexandre Legentil e Hubert Rohault de Fleury de erguer uma igreja caso a França sobrevivesse às investidas do exército alemão. O arquiteto Paul Abadie projetou a basílica depois de vencer um concurso com mais de 77 arquitetos, mas ele morreu em 1884, logo após o início da obra. O estilo é marcado por influências românicas e bizantinas.\n[…]\nA basílica está construída em pedra de travertino obtida no Château-Landon (Seine-et-Marne), na França. Essa pedra constantemente dispersa cálcio, o que garante a cor branca da basílica mesmo com as chuvas e a poluição. O mosaico no ápice, chamado Cristo em majestade, é um dos maiores do mundo. A basílica possui um jardim para meditação, com uma fonte. O topo é aberto aos turistas e reserva uma vista espetacular da cidade de Paris.\n[…]\nMargarida Maria Alacoque, vidente do Sagrado Coração de Jesus\n[…]\nMaria do Divino Coração, promotora da devoção ao Coração de Jesus\n[…]\nBasílica do Sagrado Coração – Site oficial",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Rio de Janeiro",
      "descricao": "Cidade do Sudeste brasileiro, fundada em 1565, que foi capital do Brasil de 1763 a 1960."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1763, a capital do Brasil colonial passou de Salvador para o Rio de Janeiro. Que riqueza, escoada pelo porto carioca, motivou a mudança?",
    "resposta": "O ouro de Minas Gerais",
    "fonte": [
      "https://en.wikipedia.org/wiki/History_of_Rio_de_Janeiro",
      "https://pt.wikipedia.org/wiki/Rio_de_Janeiro"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/History_of_Rio_de_Janeiro",
        "situacao": "ok",
        "texto": "Guanabara Bay was reached by a Portuguese expedition under Florentine explorer Amerigo Vespucci, that included Portuguese explorer Gaspar de Lemos, on January 1, 1502; hence Rio de Janeiro, \"January River.\" There is a legend that the mariners named the place thus because they thought the mouth of the bay was actually the mouth of a river, but no experienced sailor would make that mistake. At the t\n[…]\nOn March 1, 1565 the city is founded. Until early in the 18th century, the city was threatened or invaded by several, mostly French pirates and buccaneers, such as Jean-François Duclerc and René Duguay-Trouin. After 1720, when the Portuguese found gold and diamonds in the neighboring captaincy of Minas Gerais, Rio de Janeiro became a much more useful port for exporting wealth than Salvador, Bahia, which is much farther to the north.\n[…]\nIn 1763, the colonial administration in Portuguese America was moved to Rio. The city remained primarily a colonial capital until 1808, when the Portuguese royal family and most of the associated Lisbon nobles, fleeing from Napoleon's invasion of Portugal, moved to Rio de Janeiro. The kingdom's capital was transferred to the city, which, thus, became the only European capital outside of Europe.\n[…]\nWhen Prince Pedro I proclaimed the independence of Brazil in 1822, he decided to keep Rio de Janeiro as the capital of his new empire. Rio continued as the capital of Brazil after 1889, when the monarchy was replaced by a republic.\n[…]\nBetween 1960 and 1975 Rio was a capital city under the name State of Guanabara (after the bay it borders). However, for administrative and political reasons, a presidential decree known as \"The Fusion\" removed the city's federative status and merged it with the state of Rio de Janeiro in 1975. Even today, some Cariocas advocate the return of municipal autonomy.\n[…]\nMedia related to History of Rio de Janeiro at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rio_de_Janeiro",
        "situacao": "ok",
        "texto": "Rio de Janeiro, simplesmente referido como Rio, é a capital do estado brasileiro do Rio de Janeiro. Um dos maiores destinos turísticos internacionais no Brasil, na América Latina e também do Hemisfério Sul, é uma das primeiras cidades do país. É a segunda maior metrópole do Brasil (depois de São Paulo), a sétima maior da América e a décima oitava do mundo. Sua população segundo o censo de 2022 do \n[…]\nEssa importância tornou-se ainda maior com a exploração de jazidas de ouro em Minas Gerais, no século XVIII: a proximidade levou à consolidação da cidade como proeminente centro portuário e econômico. Em 1763, o ministro português Marquês de Pombal transferiu a sede da colônia de Salvador para o Rio de Janeiro.\n[…]\nEm 18 de janeiro do ano seguinte, a UNESCO elegeu o Rio de Janeiro como a primeira Capital Mundial da Arquitetura.\n[…]\nO fator \"educação\" do IDH no município atingiu em 2010 a marca de 0,719, ao passo que a taxa de alfabetização indicada pelo último censo demográfico do IBGE foi de 97,2%, ocupando a quinta posição dentre as capitais brasileiras, depois das três capitais da região Sul e de Belo Horizonte (Minas Gerais). De acordo com dados do Portal QEdu, o município obteve uma nota média de 5,1 no IDEB 2021 (Índice de Desenvolvimento da Educação Básica) para os anos finais do ensino fundamental.\n[…]\nO Porto do Rio de Janeiro localiza-se na costa oeste da baía de Guanabara, próximo à região central, e atende aos estados do Rio de Janeiro, São Paulo, Minas Gerais, Espírito Santo, Bahia e sudoeste de Goiás, entre outros. É um dos mais movimentados do país quanto ao valor das mercadorias e à tonelagem. Peças e partes de veículos, trigo, café, produtos siderúrgicos e produtos têxteis são os principais produtos escoados. O porto movimenta grande volume de cargas conteinerizadas.\n[…]\nEm 18 de janeiro de 2019, a cidade foi eleita pela UNESCO como a primeira Capital Mundial da Arquitetura."
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Ponte do Brooklyn",
      "descricao": "Ponte pênsil sobre o East River, em Nova York, ligando Manhattan ao Brooklyn."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Ligando Manhattan ao Brooklyn sobre o East River, a Ponte do Brooklyn foi aberta ao público em qual ano?",
    "resposta": "1883",
    "distratores": [
      "1863",
      "1903",
      "1923"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Brooklyn_Bridge"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Brooklyn_Bridge",
        "situacao": "ok",
        "texto": "The Brooklyn Bridge is a cable-stayed suspension bridge in New York City, spanning the East River between the boroughs of Manhattan and Brooklyn. Opened on May 24, 1883, the Brooklyn Bridge was the first fixed crossing of the East River. It was also the longest suspension bridge in the world when opened, with a main span of 1,595.5 feet (486.3 m) and a deck 127 ft (38.7 m) above mean high water.\n[…]\nThe Supreme Court decided in 1883 that the Brooklyn Bridge was a lawful structure.\n[…]\nThe New York and Brooklyn Bridge was opened for use on May 24, 1883, becoming the first fixed crossing between Manhattan and Long Island. Thousands of people attended the opening ceremony, and many ships were present in the East River for the occasion. Officially, Emily Warren Roebling was the first to cross the bridge. The bridge opening was also attended by U.S. president Chester A.\n[…]\nThe bridge had cost US$15.5 million in 1883 dollars (about US$518,304,000 in 2025) to build, of which Brooklyn paid two-thirds. The bonds to fund the construction would not be paid off until 1956. An estimated 27 men died during its construction. Since the New York and Brooklyn Bridge was the only bridge across the East River at that time, it was also called the East River Bridge.\n[…]\nThe New York and Brooklyn Bridge Railway, a cable car service, began operating on September 25, 1883; it ran on the inner lanes of the bridge, between terminals at the Manhattan and Brooklyn ends. Since Washington Roebling believed that steam locomotives would put excessive loads upon the structure of the Brooklyn Bridge, the cable car line was designed as a steam/cable-hauled hybrid. They were powered from a generating station under the Brooklyn approach.\n[…]\n\"Constructive Elements of the East River Bridge\" in Popular Science Monthly Volume 23, July 1883\n[…]\n\"The Great Bridge and its Lessons\" in Popular Science Monthly Volume 23, July 1883"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ponte_do_Brooklyn",
        "situacao": "ok",
        "texto": "Ponte de Brooklyn é uma ponte na cidade de Nova Iorque, considerada uma das mais antigas pontes de suspensão nos Estados Unidos, com extensão de 1 834 m. Situa-se sobre o rio East, ligando os distritos (boroughs) de Manhattan e Brooklyn.\n[…]\nA última pedra da torre do Brooklyn foi assentada em junho de 1875, e a torre de Manhattan foi concluída em julho de 1876.\n[…]\nA Suprema Corte dos Estados Unidos decidiu, em 1883, que a Ponte do Brooklyn era uma estrutura legal.\n[…]\nA Ponte de Nova Iorque e Brooklyn foi aberta ao público em 24 de maio de 1883. Milhares de pessoas assistiram à cerimônia de abertura, e muitos navios estavam presentes no Rio East para a ocasião. Oficialmente, Emily Warren Roebling foi a primeira a atravessar a ponte. A abertura da ponte também contou com a presença do presidente dos Estados Unidos Chester A.\n[…]\nA construção da ponte custou US$15,5 million em dólares de 1883 (cerca de US$1 000 em 2025), dos quais o Brooklyn pagou dois terços. Os títulos emitidos para financiar a construção só foram quitados em 1956. Estima-se que 27 homens tenham morrido durante a construção. Como a Ponte de Nova Iorque e Brooklyn era a única ponte sobre o Rio East naquela época, também era chamada de Ponte do East River.\n[…]\nNo entanto, a empresa instalou telefones de emergência e grades adicionais, e os curadores aprovaram um plano de proteção contra incêndio para a ponte. O serviço de transporte público começou com a abertura da New York and Brooklyn Bridge Railway, um serviço de bonde por cabo, em 25 de setembro de 1883. Em 17 de maio de 1884, uma das atrações mais famosas do empresário circense P. T. Barnum, o elefante Jumbo, liderou um desfile de 21 elefantes sobre a Ponte do Brooklyn.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Sagrada Família",
      "descricao": "Basílica projetada por Antoni Gaudí em Barcelona, ainda em construção por mais de um século."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Segundo o projeto de Gaudí, quantas torres terá a Sagrada Família, em Barcelona, quando estiver concluída?",
    "resposta": "Dezoito",
    "distratores": [
      "Doze",
      "Quinze",
      "Vinte e quatro"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Sagrada_Fam%C3%ADlia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sagrada_Fam%C3%ADlia",
        "situacao": "ok",
        "texto": "Basílica i Temple Expiatori de la Sagrada Família, or simply Sagrada Família, is a Catholic church in the Eixample district of Barcelona, Catalonia, Spain. Designed by the Catalan architect Antoni Gaudí, it is the tallest church\n[…]\nin the world. On 7 November 2010, Pope Benedict XVI consecrated the church and proclaimed it a basilica. In 2005, parts of the Sagrada Família (Nativity façade and Crypt) were declared a UNESCO World Heritage Site, under \"Works of Antoni Gaudí\".\n[…]\nAntoni Gaudí\n[…]\nIn 2005, UNESCO extended the inscription for Works of Antoni Gaudí – No 320 bis to include four additional buildings in Barcelona, with item 320-005 listed as two specific sections of Sagrada Família: the Crypt and the Nativity façade.\n[…]\nThe Archdiocese of Barcelona holds an international mass at the Basilica of the Sagrada Família every Sunday and on holy days of obligation.\n[…]\nIn August 2017, Barcelona was the target of a series of terrorist attacks with Islamist motivations, commonly referred to as the La Rambla attacks. Investigations later revealed that one of the original targets was the Sagrada Família basilica. The attackers had planned to detonate a van loaded with gas canisters at the site during peak visiting hours to cause maximum damage.\n[…]\nGiven the Sagrada Família was built elevated, the main entrance (Glory Façade) stands 5 metres (16 ft) taller than the street (C/ Mallorca). Although Gaudí's plans are disputed (given that he first designed star-shaped avenues leading to the basilica), the Construction Board defends that Gaudi's last plans were to build a long 57 metres (187 ft) stairway passing over Mallorca street and leading into a 2-block avenue from the basilica to Diagonal Avenue.\n[…]\nSagrada Família (Barcelona Metro)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Templo_Expiat%C3%B3rio_da_Sagrada_Fam%C3%ADlia",
        "situacao": "ok",
        "texto": "Templo Expiatório da Sagrada Família (em catalão: Temple Expiatori de la Sagrada Família), também conhecido simplesmente como Sagrada Família, é um grande templo católico da cidade de Barcelona, Catalunha, Espanha, desenhado pelo arquiteto catalão Antoni Gaudí, e considerado por muitos críticos como a sua obra-prima e expoente da arquitetura modernista catalã.\n[…]\nIgualmente, as torres da Sagrada Família estavam inspiradas num projeto não realizado para umas \"Missões Católicas Franciscanas\" em Tânger (1892), encarregado pelo marquês de Comillas.\n[…]\nO templo terá dezoito torres, quatro em cada uma das três portas fazendo um total de doze pelos apóstolos, no centro a torre do zimbório dedicada a Jesus Cristo, de 170 m de altura, outras quatro dos evangelistas em torno da torre-zimbório, e sobre a abside outro zimbório dedicado à Virgem Maria. As torres têm perfil parabólico, e dispõem de umas escadas helicoidais que deixam a parte central oca para situar ali uns sinos tubulares dispostos como carrilhão.\n[…]\nComeçada em 1882 segundo o projeto de Francisco del Villar, quando Gaudí ficou com o encargo das obras em 3 de novembro de 1883, transformou os pilares acrescentando-lhes capitéis com motivos naturalistas; também elevou a abóbada e rodeou a cripta de um fosso para ter iluminação e ventilação diretas. Os primeiros planos de Gaudí para a Sagrada Família foram da capela de São José, construída entre 1884 e 1885, data da celebração da primeira missa. As obras da cripta prolongar-se-iam até 1891.\n[…]\nGaudí concebeu um templo de grande verticalidade, para que fosse visível a partir de qualquer ponto de Barcelona e se destacasse sobre a mancha de edifícios. Para isso dotou o Templo da Sagrada Família com 18 torres, 12 dos apóstolos, 4 dos evangelistas, e as torres dos zimbórios dedicados a Jesus e à Virgem Maria.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Catedral de Brasília",
      "descricao": "Catedral Metropolitana de Brasília, projetada por Oscar Niemeyer, com estrutura de pilares curvos de concreto."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "A Catedral de Brasília, projetada por Oscar Niemeyer, é formada por quantos pilares curvos de concreto?",
    "resposta": "Dezesseis",
    "distratores": [
      "Oito",
      "Doze",
      "Vinte e quatro"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Cathedral_of_Bras%C3%ADlia",
      "https://pt.wikipedia.org/wiki/Catedral_Metropolitana_de_Bras%C3%ADlia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cathedral_of_Bras%C3%ADlia",
        "situacao": "ok",
        "texto": "The Cathedral of Brasília (Portuguese: Catedral Metropolitana de Brasília, \"Metropolitan Cathedral of Brasília\") is the Roman Catholic cathedral serving Brasília, Brazil, and serves as the seat of the Archdiocese of Brasília. It was designed by Brazilian architect Oscar Niemeyer and engineered by Brazilian structural engineer Joaquim Cardozo, and was completed and dedicated on May 31, 1970.\n[…]\nThe cathedral is a hyperboloid structure constructed from 16 concrete columns weighing 90 tons each.\n[…]\nThe Cathedral of Brasília, officially the Metropolitan Cathedral of Our Lady of Aparecida (Catedral Metropolitana Nossa Senhora Aparecida), dedicated to the Blessed Virgin Mary under her title of Our Lady of Aparecida, proclaimed by the Church as Queen and Patroness of Brazil, was designed by the architect Oscar Niemeyer and projected by the structural engineer Joaquim Cardozo.\n[…]\nCoinciding with the 50th anniversary of Brasília, major renovations were begun on April 21, 2012 to update and repair the building and infrastructure, and address issues with the roof. The exterior glazing is being replaced, and the original stained glass designed by Marianne Peretti (which used hand made glass and thus varied widely in thickness) is being replaced by uniform glass cut and assembled in Brazil from plates manufactured in Germany.\n[…]\nIn addition to the roof repairs, all marble surfaces will be polished, concrete repaired and painted, the angels in the nave will be cleaned and re-mounted, and the bell mechanisms will be replaced. The cathedral will be open to the public during renovation.\n[…]\n15. Mayer, R. A linguagem de Oscar Niemeyer. Masters dissertation. Federal University of Rio Grande do Sul, Brazil, 2003. Available in: https://www.lume.ufrgs.br/handle/10183/6693\n[…]\nPhoto 360° Cathedral of Brasília - GUIABSB (most of roof glass has been restored)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Catedral_Metropolitana_de_Bras%C3%ADlia",
        "situacao": "ok",
        "texto": "Catedral Metropolitana - Nossa Senhora Aparecida ou simplesmente Catedral de Brasília, é um templo católico brasileiro, na qual se encontra a cátedra da Arquidiocese de Brasília, localizada na capital federal, ao sul da S1, no Eixo Monumental, região da Esplanada dos Ministérios. A cerimônia de posse do presidente do Brasil tradicionalmente costuma se iniciar nesta catedral.\n[…]\nOs colaboradores habituais do arquiteto também contribuíram para a obra. O complexo projeto estrutural foi feito pelo engenheiro Joaquim Cardozo, que também calculou outras obras desafiadoras da nova cidade, como o Palácio do Congresso Nacional. De uma área de setenta metros de diâmetro, se elevam dezesseis colunas de concreto com noventa toneladas cada (pilares de seção parabólica), num formato hiperboloide.\n[…]\nUma vez definido o local, o arquiteto Oscar Niemeyer, segundo o próprio, se inspirou nos antigos mestres que construíram catedrais com cúpulas gigantes usando os recursos estruturais existentes na época. Tendo ele o concreto armado à disposição, idealizou uma obra em que a estrutura parece ascender aos céus, sendo formalmente simples, compacta e fazendo dos pilares estruturantes os protagonistas. Ele baseou o desenho da catedral numa estrutura hiperboloide.\n[…]\nO projeto estrutural do engenheiro Joaquim Cardozo reduziu o número de pilares para dezesseis, com bases delgadas e, na parte superior, uma laje posta um tanto mais abaixo do previsto. O engenheiro também calculou o efeito de cargas de vento sobre os vitrais e colunas, um cálculo avançado para a época.\n[…]\nA Catedral de Brasília, oficialmente a Catedral Metropolitana Nossa Senhora Aparecida, dedicada à Virgem Maria, sob o título de Nossa Senhora de Aparecida, proclamada pela Igreja como Rainha e Padroeira do Brasil, foi concebida pelo arquiteto Oscar Niemeyer, com projeto estrutural do engenheiro Joaquim Cardozo."
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Stonehenge",
      "descricao": "Monumento pré-histórico de grandes pedras dispostas em círculo na planície de Salisbury, na Inglaterra."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Há milhares de anos, as pedras azuis menores de Stonehenge, na Inglaterra, foram trazidas de longe. De qual região britânica elas vieram?",
    "resposta": "País de Gales",
    "distratores": [
      "Cornualha",
      "Irlanda do Norte",
      "Ilha de Man"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Stonehenge"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Stonehenge",
        "situacao": "ok",
        "texto": "Stonehenge is a prehistoric megalithic structure on Salisbury Plain in Wiltshire, England, two miles (3 km) west of Amesbury. It consists of an outer ring of vertical sarsen standing stones, each around 13 feet (4.0 m) high, seven feet (2.1 m) wide, and weighing around 25 tons, topped by connecting horizontal lintel stones which are held in place with mortise and tenon joints—a feature unique amon\n[…]\nBrewer's Dictionary of Phrase and Fable attributes this tale to Geoffrey of Monmouth. Though book eight of Geoffrey's Historia Regum Britanniae describes how Stonehenge was built, the two stories are entirely different.\n[…]\nThe twelfth-century Historia Regum Britanniae (\"History of the Kings of Britain\"), by Geoffrey of Monmouth, includes a legend of Stonehenge's origin, describing how Stonehenge was brought from Ireland with the help of the wizard Merlin. Geoffrey's story spread widely, with variations of it appearing in adaptations of his work, such as Wace's Norman French Roman de Brut, Layamon's Middle English Brut, and the Welsh Brut y Brenhinedd.\n[…]\nAlthough the first years of the Free Festival (annual, from 1975 onwards) saw \"very little vandalism\", Stonehenge was fenced off from 1978 onwards. Later, repeated vandalism in the 1980s and 1990s led the authorities to deploy up to hundreds of police, erect barriers around Stonehenge, and impose exclusion zones up to six kilometres from the archaeological monument. The vandalism of 1984 included defacing the monument with purple spray paint.\n[…]\nThe government went so far as to close Stonehenge to protect it from vandalism, but in the face of public outcry, the government opted to reopen it.\n[…]\nStonehenge English Heritage official site: access and visiting information; research; future plans\n[…]\nStonehenge Landscape National Trust – information about the surrounding area."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Stonehenge",
        "situacao": "ok",
        "texto": "Stonehenge é uma estrutura composta, formada por círculos concêntricos de pedras, que chegam a ter 5 metros de altura e a pesar quase 50 toneladas, localizada na Inglaterra, no condado de Wiltshire, na Planície de Salisbury.\n[…]\nDurante o chamado Período II (c. 2150 a.C.), deu-se a realocação do santuário de madeira, a construção de dois círculos de pedras azuis (coloridas com um matiz azulado), o alargamento da entrada, a construção de uma avenida de entrada marcada por valas paralelas alinhadas com o Sol nascente do primeiro dia do verão, e a construção do círculo externo, com 35 pedras que pesavam toneladas. As altas pedras azuis, que pesam 4 t, foram transportadas das montanhas de Gales, a cerca de 240 km ao Norte.\n[…]\nA equipe descobriu um encaixe que, no passado, abrigou as chamadas pedras azuis, rochas vulcânicas de tom azulado, a maioria já desaparecida, que formava a primeira estrutura construída no monumento. Eles acreditam que as pedras azuis podem confirmar a tese de que Stonehenge era um local onde as pessoas iam em busca de cura.\n[…]\nEm 2013, um grupo de estudos da University College London levantou uma nova teoria de que Stonehenge pode ter surgido como um cemitério para famílias de elite, por volta do ano 3000 A.C. Estudos de restos humanos encontrados no local, indicam que, antes do monumento ser o que hoje se conhece, havia ali um grande círculo de pedras construído como um cemitério.\n[…]\nCírculos de pedras da Senegâmbia\n[…]\n\"Stonehenge decifrado\" , tít. orig. \"Stonehenge decoded\" (2008)\n[…]\nStonehenge - Egyptian solar temple. Egyptian hieroglyphs in Stonehenge\n[…]\nNovo monumento cerimonial encontrado perto de Stonehenge",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Igreja do Salvador sobre o Sangue Derramado",
      "descricao": "Igreja ortodoxa de cúpulas coloridas erguida no local do assassinato do czar Alexandre II, à beira de um canal na Rússia."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "De cúpulas coloridas e muitas vezes confundida com a Catedral de São Basílio, a Igreja do Salvador sobre o Sangue Derramado fica em qual cidade russa?",
    "resposta": "São Petersburgo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Church_of_the_Savior_on_Blood"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Church_of_the_Savior_on_Blood",
        "situacao": "ok",
        "texto": "The Church of the Savior on Spilled Blood (Russian: Церковь Спаса на Крови, Tserkovʹ Spasa na Krovi) is a Russian Orthodox church in Saint Petersburg, Russia which currently functions as a secular museum and church at the same time. The structure was constructed between 1883 and 1907. It is one of Saint Petersburg's major attractions.\n[…]\nArchitecturally, the cathedral differs from Saint Petersburg's other structures. The city's architecture is predominantly Baroque and Neoclassical, but the Savior on Blood harks back to medieval Russian architecture in the spirit of romantic nationalism. It intentionally resembles the 17th-century Yaroslavl churches and the celebrated St. Basil's Cathedral in Moscow.\n[…]\nThe church contains over 7065 square meters of mosaics. It may be the 2nd largest collection of mosaics in the world, after the Cathedral Basilica of St. Louis, which houses 7700 square meters of mosaics.\n[…]\nThe interior was designed by some of the most celebrated Russian artists of the day—including Viktor Vasnetsov, Mikhail Nesterov and Mikhail Vrubel – but the church's chief architect, Alfred Alexandrovich Parland, was relatively little-known (born in Saint Petersburg in 1842 in a Baltic-German Lutheran family). Perhaps not surprisingly, the church's construction ran well over budget, having been estimated at 3.6 million rubles but ending up costing over 4.6 million.\n[…]\nThe church was dedicated to the memory of the assassinated tsar and only panikhidas (memorial services) took place. The church is now one of the main tourist attractions in Saint Petersburg.\n[…]\nThe church is seen in the opening sequence of the animated film Anastasia, which begins in Saint Petersburg.\n[…]\nOn-line web-camera Church on Spilled Blood\n[…]\nIndependent site about the Church on Spilled Blood\n[…]\nChurch of the Savior on Spilled Blood (Saint Petersburg)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Catedral_do_Salvador_sobre_o_Sangue_Derramado",
        "situacao": "ok",
        "texto": "A Catedral do Salvador sobre o Sangue Derramado ou Igreja da Ressurreição do Salvador sobre o Sangue Derramado é uma igreja ortodoxa russa de São Petersburgo, situada na margem do canal Griboedov (assim designado em honra de Alexandr Griboiedov) próximo ao parque do Museu Russo e da Nevsky Prospekt. A igreja foi construída no local onde o Czar Alexandre II da Rússia foi assassinado, vítima de um a\n[…]\nDurante a Segunda Guerra Mundial e o cerco da cidade, uma bomba atingiu a cúpula mais alta da igreja. A bomba não explodiu e permaneceu encerrada na cúpula da igreja durante 19 anos. Somente quando os trabalhadores subiram à cúpula para reparar as goteiras, a bomba foi encontrada e retirada. Foi nessa altura que se decidiu começar o restauro da igreja do sangue derramado.\n[…]\nA Igreja da Ressurreição é uma das igrejas mais emblemáticas de São Petersburgo. A sua composição vibrante, pictórica e a decoração policromática convertem-na num elemento de destaque e distintivo na arquitetura no contexto do centro da cidade. A Igreja de São Salvador pode ser corretamente chamada de um monumento em puro \"estilo russo\" em São Petersburgo. Conforme solicitado por Alexandre III, Alfred Parland desenhou a igreja em estilo do século XVIII na arquitetura de Moscovo e Iaroslavl.\n[…]\nAs cinco cúpulas centrais da igreja são únicas, revestidas de cobre e esmalte de diferentes cores, que recordam as cúpulas policromadas da sagrada Catedral de São Basílio em Moscovo, que frequentemente é comparada à Igreja da Ressurreição, apesar da total diferença da planimetria. As cúpulas menores em forma de cebola sobre as absides e a cúpula do campanário são, como é habitual, douradas.\n[…]\n«SAVIOR ON THE SPILLED BLOOD» (em inglês e russo). Consultado em 28 de junho de 2011. Página oficial\n[…]\n«Church of the Resurrection of Jesus Christ» (em inglês). Consultado em 28 de junho de 2011. saint-petersburg.com",
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
