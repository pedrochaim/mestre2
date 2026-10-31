Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Costumes pelo Mundo** (tema **Cotidiano**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Hanukkah",
      "descricao": "Festa judaica de oito dias em que se acendem as velas de um candelabro de nove braços."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Segundo a tradição da Hanucá, o óleo do Templo, que daria para um só dia, manteve o candelabro aceso por quantos dias?",
    "resposta": "Oito",
    "distratores": [
      "Sete",
      "Doze",
      "Quarenta"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Hanukkah"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hanukkah",
        "situacao": "ok",
        "texto": "Hanukkah (IPA: ; Hebrew: חֲנֻכָּה, romanized: Ḥănukkā, lit. 'dedication', ) is a Jewish holiday that commemorates the Maccabean Revolt against the Seleucid Empire in the 2nd century BCE, when the Maccabees successfully recovered Jerusalem and the Second Temple.\n[…]\nBeginning on the 25th of Kislev on the Hebrew calendar, Hanukkah lasts for eight nights and days. Each night is marked by lighting a Hanukkah menorah, a nine-branched candelabrum containing spaces for eight ceremonial lights plus one additional candle, the shámash (שַׁמָּשׁ, 'attendant'), which is used to light the others. Aside from the shamash, one candle is lit on the first night, two on the second, and so on, until all eight are burning together on the final night.\n[…]\nMost Jewish homes have a special candelabrum called either a Hanukkah menorah (the traditional name, menorah being Hebrew for 'lamp') or a Chanukiah (the modern Israeli term). Some families use an oil-lamp menorah (traditionally filled with olive oil) for Hanukkah; like the candle version, it has eight wicks to light, plus the additional shammash light.\n[…]\nRomanian Jews eat pasta latkes as a traditional Hanukkah dish.\n[…]\nThe light of hope must outlast the fires of hate. That's what the Hanukkah story teaches us.\n[…]\nToday, the presence of Hanukkah bushes is generally discouraged by most rabbis.\n[…]\nZion, N.; Spectre, B. (2000). A Different Light: A Pluralist Anthology : the Big Book of Hanukkah. Devora Pub. ISBN 978-1-930143-37-1. Retrieved 17 September 2023.\n[…]\nHanukkah Archived 12 February 2017 at the Wayback Machine at About.com\n[…]\nHanukkah at the History channel\n[…]\nHanukkah at the Jewish Encyclopedia\n[…]\nHanukkah Archived 27 September 2015 at the Wayback Machine at the Jewish Agency for Israel\n[…]\nHanukkah at Chabad.org\n[…]\nHanukkah at Aish HaTorah"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Chanuc%C3%A1",
        "situacao": "ok",
        "texto": "Chanucá ou Hanucá (em hebraico: חנוכה; romaniz.: ḥănūkkāh; lit. \"educar\" ou \"inauguração\") é uma festa judaica, também conhecido como o Festival das luzes. A primeira noite de Chanucá começa após o pôr do sol do 24.º dia do mês judaico de Kislev e a festa é comemorada por oito dias. Uma vez que na tradição judaica o dia do calendário começa no pôr do sol, o Chanucá começa no 25.º dia.\n[…]\nUm grande número de historiadores acreditam que a razão pelos oito dias de comemoração foi que o primeiro Chanucá foi de fato uma tardia comemoração do festival de Sucot, a Festa das Cabanas (Mac. x. 6 e i. 9). Durante a guerra os judeus não puderam celebrar Sucot propriamente. Sucot também dura oito dias, e foi uma festa na qual as lâmpadas tiveram um papel fundamental durante o período do Segundo Templo (Suc.v. 2-4).\n[…]\nO milagre de Chanucá é descrito no Talmude, mas não nos livros dos Macabeus. Esse feriado marca a derrota das forças selêucidas que tentaram proibir Israel de praticar o judaísmo. Judas Macabeu e seus irmãos destruíram forças surpreendentes, e rededicaram o Templo. O festival de oito dias é marcado pelo acendimento de luzes com uma menorá especial, tradicionalmente conhecida entre a maioria dos Sefaradim como chanucá, e entre muitos Sefaradim dos Balcãs e no hebraico moderno como uma chanukiá.\n[…]\nA festa de Chanucá é celebrada durante oito dias, do dia 25 de Kislev ao 2 de Tevet (ou o 3 de Tevet, quando Kislev só tem 29 dias). Durante esta festa se acende uma Chanukiá, ou candelabro de 9 braços (incluindo o central e maior, denominado Shamash, ou servente). Na primeira noite acende-se apenas o braço maior e uma vela, e a cada noite se vai acrescentando uma vela, até que no oitavo dia o candelabro está completamente aceso.\n[…]\nEste ritual comemora o milagre do azeite  que queimou por oito dias no candelabro do Templo de Jerusalém.\n[…]\n«Hanukkah Songs» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Kwanzaa",
      "descricao": "Celebração afro-americana de sete dias, de 26 de dezembro a 1º de janeiro, criada em 1966."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "No Kwanzaa, acende-se a cada noite uma vela da kinara, nas cores vermelha, verde e preta. Quantas velas ela tem?",
    "resposta": "Sete",
    "distratores": [
      "Cinco",
      "Oito",
      "Nove"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Kwanzaa",
      "https://en.wikipedia.org/wiki/Kinara"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Kwanzaa",
        "situacao": "ok",
        "texto": "Kwanzaa () is an annual celebration of African-American culture from December 26 to January 1, culminating in a communal feast called Karamu, usually on the sixth day. It was created by activist Maulana Karenga based on Karenga's research of African harvest festival traditions from various parts of West, East, and Southeast Africa. Kwanzaa was first celebrated in 1966. A 2009 estimate placed the n\n[…]\nMaya Angelou narrated a 2008 documentary film about Kwanzaa, The Black Candle, written and directed by M. K. Asante and featuring Chuck D.\n[…]\nIn Canada it is celebrated in provinces including Saskatchewan and Ontario. Kwanzaa week was first declared in Toronto in 2018. There are local chapters that emerged in the 2010s in provinces like British Columbia, where there are much smaller groups of the diaspora, founding members may be immigrants from countries like Uganda.\n[…]\nMedearis, Angela Shelf (1994), The Seven Days of Kwanzaa, Scholastic Paperbacks, ISBN 0-590-46360-8\n[…]\nBrady, April A. (2000), Kwanzaa Karamu, Lerner Publishing Group, ISBN 0-87614-842-9\n[…]\nKarenga, Maulana (1998), Kwanzaa: A Celebration of Family, Community, and Culture, University of Sankore Press, ISBN 0-943412-21-8\n[…]\nMarsh, Carole (2003), Kwanzaa: Activities, Crafts, Recipes, and More!, Gallopade International, ISBN 0-635-02173-0\n[…]\nAnganza, Maitefa (2007), Kwanzaa: from Holiday to Every Day, Kensington Publishing Corporation, ISBN 978-0-7582-1665-6\n[…]\nGamble-Gumbs, Ida (1998), How to Plan a Kwanzaa Celebration, Cultural Expressions, Inc., ISBN 0-9629827-1-7\n[…]\nHintz, Martin (1996), Kwanzaa: Why We Celebrate It the Way We Do, Capstone Press, ISBN 1-56065-329-9\n[…]\nWhy Kwanzaa was created by Karenga Archived December 30, 2007, at the Wayback Machine\n[…]\nThe History Channel: Kwanzaa\n[…]\n\"The Meaning of Kwanzaa in 2003\". The Tavis Smiley Show. NPR. December 26, 2003. Interview: Karenga discusses the evolution of the holiday and its meaning."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Kinara",
        "situacao": "ok",
        "texto": "The kinara is a seven-branched candleholder used in Kwanzaa celebrations in the United States.\n[…]\nShortly before the first celebration in 1966, Maulana Karenga searched for a candle holder with seven holes which he and the other US Organization members could use to celebrate the first Kwanzaa. However, rather than constructing their own handcrafted kinara, Karenga forcibly removed two branches from a Hanukkah menorah which was then used to hold the seven candles. The following year, US Organization member Buddy Rose-Aminifu crafted the first kinara.\n[…]\nEarly photographs of the first kinara show that it was of rudimentary design, being a wooden log with holes drilled into it to support the candles.\n[…]\nDuring the week-long celebration of Kwanzaa, seven candles are placed in the kinara—three red on the left, three green on the right, and a single black candle in the center. The word kinara is a Swahili word that means candle holder.\n[…]\nThe seven candles represent the Seven Principles (or Nguzo Saba) of Kwanzaa. Red, green, and black are the symbolic colors of the holiday.\n[…]\nDuring the week of Kwanzaa, a new candle is lit on the kinara each day. The center black candle is lit first, and the lighting then proceeds from left to right, the new candle being lit corresponding to the principle of that day. In this way, each day of Kwanzaa is dedicated to the contemplation of one of the Seven Principles. The first known use of the word \"Kinara\" is dated 1975."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Kwanzaa",
        "situacao": "ok",
        "texto": "O Kwanzaa é uma celebração afro-estadunidense que tem início no dia 26 de Dezembro e fim em 1 de Janeiro de cada ano. É comemorada principalmente pela população afrodescendente dos Estados Unidos.\n[…]\nO Kwanzaa envolve a reflexão sobre sete princípios básicos: a valorização da comunidade, das crianças e da Vida. Esta celebração está a espalhar-se lentamente pelos Estados Unidos, Canadá, Inglaterra e Caraíbas e já se podem enviar postais a desejar “Feliz Kwanzaa”. Esta palavra significa \"o primeiro, no início\" ou, ainda, \"os primeiros frutos\", e pertence a tradições muito antigas das celebrações das colheitas na África.\n[…]\nKarenga organizou a Kwanzaa em torno de 5 actividades fundamentais, comuns às celebrações africanas da colheita das primeiras frutas:\n[…]\nKarenga diz que \"a Kwanzaa é celebrada através de rituais, diálogos, narrativas, poesia, dança, canto, batucada e outras festividades\". Estas actividades devem demonstrar os sete princípios, Nguzo Saba em suaíli:\n[…]\nA cada dia uma vela de cor diferente deve ser acesa num altar onde são colocadas frutas frescas, uma espiga de milho por cada criança que houver na casa. Depois de acesa a vela, todos bebem de uma taça comum em reverência aos antepassados, e saúdam com a exclamação “Harambee”, que tanto significa \"reúnam todas as coisas\" como \"vamos fazer juntos\".\n[…]\nPalavra africana derivada da frase kiswahili \"matunda ya kwanza\". Na África tradicional Kwanzaa representa as primeiras colheitas; na América do Norte e Caraíbas os participantes dessa festa são afrodescendentes.\n[…]\nEntretanto, essa comemoração tem pouco a ver com a celebração da Kwanzaa como ela foi originalmente concebida nos Estados Unidos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Ano-Novo Chinês",
      "descricao": "Festa da virada do ano no calendário lunissolar chinês, também chamada Festa da Primavera."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "As festas do Ano-Novo Chinês terminam com o Festival das Lanternas. Em que dia do primeiro mês lunar ele acontece?",
    "resposta": "Décimo quinto dia",
    "distratores": [
      "Sétimo dia",
      "Décimo dia",
      "Trigésimo dia"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Lantern_Festival",
      "https://en.wikipedia.org/wiki/Chinese_New_Year"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lantern_Festival",
        "situacao": "ok",
        "texto": "The Lantern Festival (traditional Chinese: 元宵節; simplified Chinese: 元宵节; pinyin: Yuánxiāo jié), also called the Shangyuan Festival or the Yuanxiao Festival, is a  Chinese traditional festival celebrated on the fifteenth day of the first month in the lunisolar Chinese calendar, during the full moon. Usually falling in February or early March on the Gregorian calendar, it marks the final day of the \n[…]\nDuring the Lantern Festival, children go out at night carrying paper lanterns  and solving riddles written on them (traditional Chinese: 猜燈謎; simplified Chinese: 猜灯谜; pinyin: cāidēngmí). In ancient times, lanterns were fairly simple, and only the emperor and  noblemen had large, ornate ones. In modern times, lanterns have been embellished with intricate designs. For example, lanterns are now often made in the shape of animals.\n[…]\nThe festival acts as an Uposatha day on the Chinese calendar. It should not be confused with the Mid-Autumn Festival, which is sometimes also known as the \"Lantern Festival\" in locations such as Indonesia, Malaysia, and Singapore. Lantern Festivals have also become popular in Western countries, such as the Water Lantern Festival held in multiple locations in the United States.\n[…]\nIn Chinese culture, the festival is often considered the traditional Chinese Valentine's Day. Historically, it was one of the few times young women were allowed to leave their homes to admire lanterns, providing a rare opportunity for them to meet and interact with potential suitors. Matchmakers acted busily in hopes of pairing couples. The brightest lanterns were symbolic of good luck and hope.\n[…]\nBy the beginning of the Tang dynasty in the seventh century, the lantern displays would last three days. The emperor also lifted the curfew, allowing the people to enjoy the festive lanterns day and night. It is not difficult to find Chinese poems which describe this happy scene."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Chinese_New_Year",
        "situacao": "ok",
        "texto": "Chinese New Year, also known as the Spring Festival, marks the beginning of a new year on the traditional lunisolar Chinese calendar. It is one of the most important holidays in Chinese culture. Marking the end of winter and the beginning of spring, this festival takes place from Chinese New Year's Eve (the evening preceding the first day of the year) to the Lantern Festival, held on the 15th day \n[…]\nFor example, in 2013, New Year's Eve (9 February) fell on a Saturday and New Year's Day (10 February) on a Sunday. The holiday may be referred to by different names depending on the country: common English terms include \"Chinese New Year\", \"Lunar New Year\", \"New Year Festival\", and \"Spring Festival\".\n[…]\nPenang's Chief Minister customarily hosts an \"open house\" for the public, while various other events take place across the city, including at the Chinese clan houses and the Snake Temple. Hokkien households celebrate the Jade Emperor's birthday, known colloquially as the \"Hokkien New Year\", on the ninth day, with offerings. Traditionally, during the Lantern Festival, single females throw oranges at seafront locations such as the Esplanade in the hope of finding their partners.\n[…]\nIt was preceded by Chinese New Year's Eve, with the \"First incense offering\" at Binondo Church, a Taoist prayer ritual with Joss sticks, including Chinese ancestor worship at Martyr Saints of China altars in Binondo Chinese Parish Church. At midnight, a 2-minute pyro-musical fireworks display was witnessed by 1.5 million at the Chinese-Filipino Friendship Bridge. In Cebu, a festival called the Red Lantern Festival was held.\n[…]\nIn New Zealand, Auckland hosts the Auckland Lantern Festival for 4 days. Meanwhile, Wellington hosts a two-day weekend festival for Chinese New Year, and a one-day festival is held in Dunedin, centred on the city's Chinese gardens.\n[…]\nMedia related to Chinese New Year at Wikimedia Commons"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Ano-Novo Chinês",
      "descricao": "Festa da virada do ano no calendário lunissolar chinês, também chamada Festa da Primavera."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Por seguir o calendário lunissolar, o Ano-Novo Chinês muda de data a cada ano, mas sempre cai entre quais meses do nosso calendário?",
    "resposta": "Janeiro e fevereiro",
    "distratores": [
      "Dezembro e janeiro",
      "Fevereiro e março",
      "Março e abril"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Chinese_New_Year"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Chinese_New_Year",
        "situacao": "ok",
        "texto": "Chinese New Year, also known as the Spring Festival, marks the beginning of a new year on the traditional lunisolar Chinese calendar. It is one of the most important holidays in Chinese culture. Marking the end of winter and the beginning of spring, this festival takes place from Chinese New Year's Eve (the evening preceding the first day of the year) to the Lantern Festival, held on the 15th day \n[…]\nThe festival is also called \"Lunar New Year\" in English, despite the traditional Chinese calendar being lunisolar and not lunar. However, \"Chinese New Year\" is still a commonly used translation for people of non-Chinese backgrounds. Along with the Han Chinese inside and outside of Greater China, as many as 29 of the 55 ethnic minority groups in China also celebrate Chinese New Year. Korea, Vietnam, Singapore, Malaysia, Indonesia, and the Philippines celebrate it as an official festival.\n[…]\nFor New Year celebrations that follow Chinese-inspired calendars but are outside of China and the Chinese diaspora (such as Korea's Seollal and Vietnam's Tết), see the article on Lunar New Year.\n[…]\nInstead, they emphasize the connection to the traditional Chinese calendar by calling it 農曆新年 (\"lunar new year\"), or simply refer to it as 過年 (\"past year\"), which is more casual and widely used among families and friends—these terms are also acceptable in mainland Chinese usage.\n[…]\nIn Indonesia, the first day of the Chinese New Year is recognized as a national holiday. The remaining 14 days are usually only celebrated by ethnic Chinese families. Chinese Year follows the Confucius year or Kǒngzǐlì (Chinese: 孔子历) or Kongzili in Indonesian. Chinese New Year is officially named Tahun Baru Imlek (Chinese: 陰曆新年; Pe̍h-ōe-jī: im-le̍k sin-nî), with Imlek deriving from the Hokkien word for \"Lunar Calendar\" (Chinese: 陰曆; Pe̍h-ōe-jī: im-le̍k).\n[…]\nMedia related to Chinese New Year at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ano-novo_chin%C3%AAs",
        "situacao": "ok",
        "texto": "O Ano-Novo Chinês (português brasileiro) ou Ano Novo Chinês (português europeu) é uma referência à data de comemoração do ano-novo adotada por diversas nações do oriente que seguem um calendário tradicional distinto do ocidental, o calendário chinês.\n[…]\nOs chineses relacionam cada novo ano a um dos doze animais que teriam atendido ao chamado de Buda para uma reunião. Apenas doze teriam se apresentado e, em agradecimento, Buda os transformou nos signos da astrologia chinesa.\n[…]\nDesta forma, 2021 foi o ano do búfalo/boi, tendo se iniciado em 12 de fevereiro; 2022 foi o ano do tigre, que se iniciou no dia 1 de fevereiro; em 2023, foi o ano do coelho em 22 de janeiro, e em 2024 foi o ano do dragão, iniciado em 10 de fevereiro. Em 29 de janeiro de 2025 começou o ano da serpente e em 17 de fevereiro de 2026 inicia-se o ano do cavalo.\n[…]\nEm São Paulo, o maior centro sino-nipônico do Brasil, a festa é realizada na Praça da Liberdade, onde se concentram restaurantes, lojas e mercearias de imigrantes e descendentes chineses direcionados a este público-alvo. A comemoração acontece no final de janeiro ou início de fevereiro. Uma festa muito alegre e bonita que atrai mais de 100 mil pessoas do Brasil e de várias partes do mundo que visitam a capital paulista.\n[…]\nNo Rio de Janeiro, a comemoração é feita na colônia oriental que existe no bairro de Santa Cruz. Também é comemorado por uma cooperação de chineses do bairro da Tijuca e na colônia oriental da Rua da Alfândega, localizada na região da Saara. Porém, nos últimos anos, o lugar mais visado nessa data tem sido a Vista Chinesa, onde ocorre um grande encontro entre chineses e turistas. Também é comemorado entre 15 de janeiro e 15 de fevereiro.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Oktoberfest",
      "descricao": "Festa popular anual de Munique, na Alemanha, famosa pela cerveja e pelos trajes típicos bávaros."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Na Oktoberfest de Munique, a cerveja é servida na Maß, a caneca tradicional da Baviera. Quanto ela comporta?",
    "resposta": "Um litro",
    "distratores": [
      "Meio litro",
      "Dois litros",
      "Um litro e meio"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Oktoberfest"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Oktoberfest",
        "situacao": "ok",
        "texto": "Oktoberfest (German pronunciation: [ɔkˈtoːbɐˌfɛst] ; Bavarian: Oktobafest/d'Wiesn) is the world's largest Volksfest. It combines a beer festival with a fun fair and is held annually in Munich on the Theresienwiese from mid-September to the first Sunday in October.\n[…]\nThe historical Oktoberfest (Oide Wiesn, Bavarian for \"old fairground\") was introduced in 2010 for the 200th anniversary of Oktoberfest. It was held on the former site of the Central Agricultural Festival (ZLF) at the south end of the Theresienwiese and became a recurring feature from 2011.\n[…]\nThe Rosa Wiesn (Pink Wiesn), also called Gay Oktoberfest, is a series of LGBT events held during Oktoberfest. The main gathering, Gay Sunday, takes place in the Bräurosl tent on the first Sunday.\n[…]\nIn 2003, the campaign Sichere Wiesn für Mädchen und Frauen (\"Safe Oktoberfest for Girls and Women\") was launched to prevent sexual violence and abuse against women during the event.\n[…]\nFestivals inspired by Oktoberfest are also held in Australia, Russia, Namibia and Japan.\n[…]\nIn Germany itself, many cities host their own Oktoberfest-style events:\n[…]\nOktoberfest Hannover – approximately 500,000 visitors, the second-largest Oktoberfest in Germany\n[…]\nA German historical drama called Oktoberfest: Beer and Blood was released in 2020. Set in 1900, it focuses on the showman brewer Curt Prank as he transforms the festival into a global tourist attraction by replacing the local brewery stands with one large pavilion. Critics have compared the show's graphic violence and German new wave music soundtrack to Peaky Blinders. A second season was announced by head writer Ronny Schalk in 2021.\n[…]\nBeer and Oktoberfest Museum\n[…]\nVirtual exhibition: Oktoberfest – History, Background, Highlights, in the culture portal bavarikon"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Oktoberfest",
        "situacao": "ok",
        "texto": "A Oktoberfest (também conhecida como \"Wiesn\" em Munique[carece de fontes]?) é um festival de cerveja originado em Munique, Alemanha. Foi criado pelo rei bávaro Luís I para celebrar o seu casamento em 1810. A Oktoberfest é também uma feira de produtos e diversões celebrada em Munique (München), no estado da Baviera (Bayern), no sul da Alemanha, e disseminada por vários lugares do mundo.\n[…]\nA Oktoberfest é frequentado anualmente por seis milhões de visitantes de todo o mundo e se inicia desde 1872 sempre no sábado depois do 15 de Setembro as 12h00 horas com a tradicional cerimonia de abertura \"O'zapft is\". Termina duas semanas mais tarde, no primeiro domingo de Outubro - daí o nome Oktoberfest (em alemão, \"Oktober\" significa outubro, \"Fest\", festa ou festival, literalmente \"Festa de Outubro\").\n[…]\nO preço de um litro de cerveja é tradicionalmente uma questão política: em 2015 o jarro chega a € 10,40 (US$ 11,60).\n[…]\nA Oktoberfest de Blumenau atrai turistas do Brasil e do exterior, especialmente da Alemanha. mas também de países vizinhos da América do Sul e da América do Norte, sendo considerada a maior festa alemã das Américas e a segunda maior do mundo - atrás apenas da Oktoberfest original, em Munique. Segundo o site oficial do evento, em 2009 a Oktoberfest de Blumenau, atraiu 731 934 visitantes que consumiram pouco mais de 450 mil litros de chope e 19 821 garrafas de cervejas importadas.\n[…]\nA Oktoberfest entrou para o calendário oficial de eventos da cidade apenas em 2017. Na ocasião, o evento foi realizado na Arena Anhembi, voltando a acontecer no mesmo local no ano seguinte. Em 2019, o festival ocorreu no Jockey Club.\n[…]\nVeja mais fotos da Oktoberfest.\n[…]\nOktoberfest de Igrejinha\n[…]\nOktoberfest de Santa Cruz do Sul\n[…]\nFotos de Oktoberfest\n[…]\n(em alemão) Oktoberfest Munique",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Oktoberfest",
      "descricao": "Festa popular anual de Munique, na Alemanha, famosa pela cerveja e pelos trajes típicos bávaros."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Apesar do nome, em que mês começa a Oktoberfest de Munique?",
    "resposta": "Setembro",
    "distratores": [
      "Agosto",
      "Outubro",
      "Novembro"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Oktoberfest"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Oktoberfest",
        "situacao": "ok",
        "texto": "Oktoberfest (German pronunciation: [ɔkˈtoːbɐˌfɛst] ; Bavarian: Oktobafest/d'Wiesn) is the world's largest Volksfest. It combines a beer festival with a fun fair and is held annually in Munich on the Theresienwiese from mid-September to the first Sunday in October.\n[…]\nThe historical Oktoberfest (Oide Wiesn, Bavarian for \"old fairground\") was introduced in 2010 for the 200th anniversary of Oktoberfest. It was held on the former site of the Central Agricultural Festival (ZLF) at the south end of the Theresienwiese and became a recurring feature from 2011.\n[…]\nThe Rosa Wiesn (Pink Wiesn), also called Gay Oktoberfest, is a series of LGBT events held during Oktoberfest. The main gathering, Gay Sunday, takes place in the Bräurosl tent on the first Sunday.\n[…]\nIn 2003, the campaign Sichere Wiesn für Mädchen und Frauen (\"Safe Oktoberfest for Girls and Women\") was launched to prevent sexual violence and abuse against women during the event.\n[…]\nFestivals inspired by Oktoberfest are also held in Australia, Russia, Namibia and Japan.\n[…]\nIn Germany itself, many cities host their own Oktoberfest-style events:\n[…]\nOktoberfest Hannover – approximately 500,000 visitors, the second-largest Oktoberfest in Germany\n[…]\nA German historical drama called Oktoberfest: Beer and Blood was released in 2020. Set in 1900, it focuses on the showman brewer Curt Prank as he transforms the festival into a global tourist attraction by replacing the local brewery stands with one large pavilion. Critics have compared the show's graphic violence and German new wave music soundtrack to Peaky Blinders. A second season was announced by head writer Ronny Schalk in 2021.\n[…]\nBeer and Oktoberfest Museum\n[…]\nVirtual exhibition: Oktoberfest – History, Background, Highlights, in the culture portal bavarikon"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Oktoberfest",
        "situacao": "ok",
        "texto": "A Oktoberfest (também conhecida como \"Wiesn\" em Munique[carece de fontes]?) é um festival de cerveja originado em Munique, Alemanha. Foi criado pelo rei bávaro Luís I para celebrar o seu casamento em 1810. A Oktoberfest é também uma feira de produtos e diversões celebrada em Munique (München), no estado da Baviera (Bayern), no sul da Alemanha, e disseminada por vários lugares do mundo.\n[…]\nA Oktoberfest é frequentado anualmente por seis milhões de visitantes de todo o mundo e se inicia desde 1872 sempre no sábado depois do 15 de Setembro as 12h00 horas com a tradicional cerimonia de abertura \"O'zapft is\". Termina duas semanas mais tarde, no primeiro domingo de Outubro - daí o nome Oktoberfest (em alemão, \"Oktober\" significa outubro, \"Fest\", festa ou festival, literalmente \"Festa de Outubro\").\n[…]\nA Oktoberfest de Blumenau atrai turistas do Brasil e do exterior, especialmente da Alemanha. mas também de países vizinhos da América do Sul e da América do Norte, sendo considerada a maior festa alemã das Américas e a segunda maior do mundo - atrás apenas da Oktoberfest original, em Munique. Segundo o site oficial do evento, em 2009 a Oktoberfest de Blumenau, atraiu 731 934 visitantes que consumiram pouco mais de 450 mil litros de chope e 19 821 garrafas de cervejas importadas.\n[…]\nA Oktoberfest entrou para o calendário oficial de eventos da cidade apenas em 2017. Na ocasião, o evento foi realizado na Arena Anhembi, voltando a acontecer no mesmo local no ano seguinte. Em 2019, o festival ocorreu no Jockey Club.\n[…]\nVeja mais fotos da Oktoberfest.\n[…]\nOktoberfest de Igrejinha\n[…]\nOktoberfest de Santa Cruz do Sul\n[…]\nFotos de Oktoberfest\n[…]\n(em alemão) Oktoberfest Munique",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Oktoberfest",
      "descricao": "Festa popular anual de Munique, na Alemanha, famosa pela cerveja e pelos trajes típicos bávaros."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Que cidade catarinense, colonizada por alemães, promove desde 1984 uma famosa Oktoberfest inspirada na de Munique?",
    "resposta": "Blumenau",
    "distratores": [
      "Joinville",
      "Pomerode",
      "Brusque"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Oktoberfest_Blumenau",
      "https://en.wikipedia.org/wiki/Blumenau"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Oktoberfest_Blumenau",
        "situacao": "inexistente",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Blumenau",
        "situacao": "ok",
        "texto": "Blumenau (Brazilian Portuguese: [blumeˈnaw]) is a city in Vale do Itajaí, Santa Catarina state, in the South Region of Brazil, 130 km (81 mi) from the state capital Florianópolis.\n[…]\nThe city was founded by the German chemist and pharmacist Hermann Blumenau (1819–1899), who arrived on a boat via the Itajaí-Açu River accompanied by seventeen other Germans, and still celebrates its German heritage, including the second largest Oktoberfest in the Americas.\n[…]\nThe city is located in a valley bisected by the Itajaí-Açu River, surrounded by hills with forests. The lower areas, including towers and tall buildings in the city center, constantly suffer from the threat of floods. Blumenau's first recorded flood took place in the dawn on September 23, 1880. The worst took place in 1983 and 1984, when the city was completely isolated for weeks.\n[…]\nBlumenau, like the entire state of Santa Catarina, is located south of the Tropic of Capricorn; therefore it is mild in the winter with temperatures averaging 16.6 °C (61 °F) and hot and humid in the summer with high temperatures averaging around 30 °C (87 °F). On July 23, 2013 the downtown of the city got a snow-rain mix and higher neighborhoods had accumulating snow.\n[…]\nThe Blumenau's Tourism Department maintains four tour routes covering different aspects of the city. Besides these, there's the festival of the municipality. Also, the Oktoberfest of Blumenau, held every October, attracts over a million tourists every year. Originally begun as a fundraiser to alleviate the devastating floods of 1983 and 1984, the Blumenau Oktoberfest has become the second largest Oktoberfest after Munich.\n[…]\nBlumenau travel guide from Wikivoyage"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Dia de Ação de Graças nos Estados Unidos",
      "descricao": "Feriado americano de agradecimento, celebrado na quarta quinta-feira de novembro."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Segundo um relato da época, a festa de 1621 entre os colonos de Plymouth e os indígenas wampanoag, tida como o primeiro Ação de Graças, durou quantos dias?",
    "resposta": "Três",
    "distratores": [
      "Um",
      "Dois",
      "Sete"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Thanksgiving_(United_States)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Thanksgiving_(United_States)",
        "situacao": "ok",
        "texto": "Thanksgiving is a federal holiday in the United States celebrated on the fourth Thursday of November (which became the uniform date country-wide in 1941). The earliest Thanksgiving can occur is November 22; the latest is November 28. Outside the United States, it is called American Thanksgiving to distinguish it from the Canadian holiday of the same name and related celebrations in other regions.\n[…]\nHaving brought in a good harvest, the Pilgrims celebrated at Plymouth for three days in the autumn of 1621. The exact time is unknown, but James Baker, a former Plimoth Plantation vice president of research, stated in 1996, \"The event occurred between Sept. 21 and Nov. 11, 1621, with the most likely time being around Michaelmas (Sept. 29), the traditional time.\" Seventeenth-century accounts do not identify this as a day of thanksgiving but rather as a harvest celebration.\n[…]\nBaker's \"New England Thanksgiving\" does not refer to an annual commemoration of the Pilgrims' 1621 harvest celebration. In fact, that event had largely been forgotten for over a century. Bradford's \"Of Plymouth Plantation\" was not published until the 1850s and the booklet \"Mourt's Relation\" was typically summarized by other publications without the now-familiar thanksgiving story.\n[…]\nSince 1970, the United American Indians of New England, a protest group led by Frank \"Wamsutta\" James (Aquinnah Wampanoag, 1923−2001), has accused the United States of fabricating the Thanksgiving story and of whitewashing genocide and injustice against Native Americans, and it has led a National Day of Mourning protest on Thanksgiving at Plymouth Rock in Plymouth, Massachusetts in the name of social equality and political prisoners.\n[…]\n\"Thanksgiving\" (1909), by Florence Earle Coates.\n[…]\nSilverman, David (2019). This Land Is Their Land: The Wampanoag Indians, Plymouth Colony, and the troubled history of Thanksgiving. New York: Bloomsbury."
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Dia de Ação de Graças nos Estados Unidos",
      "descricao": "Feriado americano de agradecimento, celebrado na quarta quinta-feira de novembro."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Os colonos ingleses que celebraram em 1621 a festa considerada o primeiro Dia de Ação de Graças americano tinham chegado à América em que navio?",
    "resposta": "Mayflower",
    "distratores": [
      "Speedwell",
      "Santa Maria",
      "Endeavour"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Mayflower",
      "https://en.wikipedia.org/wiki/Thanksgiving_(United_States)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mayflower",
        "situacao": "ok",
        "texto": "Mayflower was an English square-rigged merchant sailing ship, active from before 1609 until 1622. Her tonnage was 180+, and she was 110 feet (34 meters) long and 25 feet (7.5 meters) in the beam, with several decks. She was notable in that she transported a group of English families, known today as the Pilgrims, from England to the New World in 1620.\n[…]\nThe following year, the survivors celebrated the colony's first fall harvest along with 90 Wampanoag people, an occasion declared in centuries later as the first American Thanksgiving. As one of the earliest colonial vessels, Mayflower has become a cultural icon in the history of the United States.\n[…]\nJones had lost his boatswain, his gunner, three quartermasters, the cook and more than a dozen sailors. Mayflower made excellent time on her voyage back to England. The westerly winds that had buffeted her on the initial voyage pushed her along on the return trip. She arrived in London on 16 May [O.S. 6 May] 1621 in less than half the time that it had taken her to sail to America.\n[…]\nAs a result, the voyage from England to America took more than two months. Mayflower's return trip to London in April–May 1621 took less than half that time, with the same strong winds now blowing in the direction of the voyage.\n[…]\nThe American national holiday of Thanksgiving originated from the first Thanksgiving feast held by the Pilgrims in 1621, a prayer event and dinner to mark the first harvest of the Mayflower settlers.\n[…]\nWith 20 Mayflower historical societies throughout the country, the celebration was expected to last throughout 1920. A world's fair to commemorate the anniversary had been planned years earlier but was canceled in the aftermath of World War I.\n[…]\nThe Mayflower II\n[…]\nContemporary photos of Plymouth's Barbican and the Mayflower Steps\n[…]\n\"Mayflower, The\" . Encyclopedia Americana. 1920."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Thanksgiving_(United_States)",
        "situacao": "ok",
        "texto": "Thanksgiving is a federal holiday in the United States celebrated on the fourth Thursday of November (which became the uniform date country-wide in 1941). The earliest Thanksgiving can occur is November 22; the latest is November 28. Outside the United States, it is called American Thanksgiving to distinguish it from the Canadian holiday of the same name and related celebrations in other regions.\n[…]\nHer vision aimed at a broad audience: the stories in Godey's depicted Black servants, Roman Catholics, and Southerners celebrating Thanksgiving, and becoming more American (which for Hale meant becoming more like White Protestant Northerners) by doing so.\n[…]\nSimilarly many Sikh Americans also celebrate the holiday by \"giving thanks to Almighty\".\n[…]\nThe perception of Thanksgiving among Native Americans is not, however, universally negative and some do celebrate the holiday. Tim Giago (Oglala Lakota, 1934–2022), founder of the Native American Journalists Association, sought to reconcile Thanksgiving with Native American fall harvest celebrations. He compares Thanksgiving to \"wopila\", a thanks-giving celebration practiced by Native Americans of the Great Plains.\n[…]\nHe wrote in The Huffington Post: \"The idea of a day of Thanksgiving has been a part of the Native American landscape for centuries. The fact that it is also a national holiday for all Americans blends in perfectly with Native American traditions.\" He also shares personal anecdotes of Native American families coming together to celebrate Thanksgiving.\n[…]\nIn the early part of the 20th century, the American Association for the Advancement of Atheism (4A) opposed the celebration of Thanksgiving Day, offering an alternative observance called Blamegiving Day, which was in their eyes, \"a protest against Divine negligence, to be observed each year on Thanksgiving Day, on the assumption, for the day only, that God exists\"."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mayflower",
        "situacao": "ok",
        "texto": "Mayflower foi o famoso navio que, em 1620, transportou os chamados Peregrinos, do porto de Southampton, Inglaterra, para o Novo Mundo.\n[…]\nOs Peregrinos do Mayflower foram um dos primeiros povos colonos a se estabelecer nas terras do que seriam os futuros Estados Unidos da América. Fundaram aí a cidade de Plymouth, que se tornaria a capital da Colónia de Plymouth.\n[…]\nO Mayflower servira anteriormente como cargueiro, no comércio de mercadorias (sobretudo vinho), entre a Inglaterra e outros estados europeus, principalmente a França, mas também Noruega, Alemanha e Espanha.\n[…]\nBaseado em Rotherhithe, Londres, o navio foi comandado por Christopher Jones, pelo menos entre 1609 e 1622 - inclusive durante a famosa viagem transatlântica, após a qual retornou à Inglaterra. Em 1623, um ano após a morte de Jones, em março de 1622, o Mayflower foi quase todo desmantelado em Rotherhithe, e sua madeira foi usada como material de construção.\n[…]\nA rota inicial foi idealizada para ser realizada por dois barcos, juntamente com o Speedwell. A primeira viagem partiu de Southampton, Inglaterra a 5 de agosto de 1620, mas o Speedwell teve um furo e teve de ser consertado em Dartmouth. Numa segunda tentativa, o barco atingiu o Oceano Atlântico, mas uma vez mais viu-se forçado a regressar. Após reorganização de planos a viagem definitiva fez-se apenas no Mayflower.\n[…]\nAntes de desembarcar, os peregrinos escreveram e assinaram o Pacto do Mayflower. Estes não conseguiram chegar à Virgínia, onde tinham permissão de terras. A 5 de abril de 1621 o Mayflower partiu da colônia de Plymouth no Massachusetts, regressando a Inglaterra a 6 de maio de 1621.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Diwali",
      "descricao": "Grande festa hindu das luzes, celebrada no outono com lamparinas, velas e fogos."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Na maior parte da Índia, as celebrações do Diwali, a festa hindu das luzes, se estendem por quantos dias?",
    "resposta": "Cinco",
    "distratores": [
      "Três",
      "Sete",
      "Dez"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Diwali"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Diwali",
        "situacao": "ok",
        "texto": "Dipavali (IAST: Dīpāvalī), commonly known as Diwali (), is the Hindu festival of lights, with variations celebrated in other Indian religions such as Jainism and Sikhism. It is associated with the spiritual victory or triumph of Dharma over Adharma, light over darkness, good over evil, and knowledge over ignorance. Diwali is celebrated during the Hindu lunisolar months of Ashvin (according to the \n[…]\nPrimarily a Hindu festival, variations of Diwali are also celebrated by adherents of other faiths. The Jains observe their own Diwali which marks the final liberation of Mahavira. The Sikhs celebrate Bandi Chhor Divas to mark the release of Guru Hargobind from a Mughal prison. Newar Buddhists, unlike other Buddhists, celebrate Diwali by worshipping Lakshmi, while the Hindus of Eastern India and Bangladesh generally, celebrate Diwali by worshipping the goddess Kali.\n[…]\nDiwali was also described by numerous travellers from outside India. In his 11th-century memoir on India, the Persian traveller and historian Al Biruni wrote of Deepavali being celebrated by Hindus on the day of the New Moon in the month of Kartika.\n[…]\nIn Jain religion, Diwali is celebrated in observance of \"Mahavira Nirvana Divas\", the physical death and final nirvana of Mahavira, the 24th Tirthankar of current time cycle. Nirvana is considered to be the state of a soul when it escapes from the cycle of birth and death, while experiencing its true nature of boundless bliss and infinite knowledge. The Jain Diwali celebrated in many parts of India has similar practices to the Hindu Diwali, such as the lighting of lamps.\n[…]\nIn October 2025, a Diwali celebration in Ayodhya, Uttar Pradesh, India, broke the Guinness World Record for the largest display of oil lamps with 2,617,615 displayed on the eve of Diwali.\n[…]\nThe Ancient Origins of Diwali, India's Biggest Holiday—Becky Little (2017)\n[…]\nWinter air pollution around Diwali and Asthma"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Diwali",
        "situacao": "ok",
        "texto": "O Diwali (também Deepavali ou Deepawali) é uma festa religiosa hindu, conhecida também como o festival das luzes. Durante o Diwali, celebrado uma vez ao ano, as pessoas estreiam roupas novas, dividem doces e lançam fogos de artifício. Este festival celebra, entre outras histórias, a destruição de Narakasura por Sri Krishna, o que converte o Diwali num evento religioso que simboliza a destruição da\n[…]\nEm muitas partes da Índia, é o Baile do Rei Ramachandra em Ayodhya, após 14 anos de exílio na floresta. Sri Rama, um dos avatares de Vishnu, derrotou o mal encarnado em Ravana, que havia raptado sua esposa Sitadevi. O povo de Ayodhya (a capital do seu reino) congratulou-se com Rama por iluminação em fileiras (avali) das lâmpadas (Deepa), dando assim o seu nome: Deepavali. Esta palavra, em devido tempo, se tornou Diwali em hindi.\n[…]\nMas, no sul indiano em algumas línguas, a palavra não sofreu qualquer alteração e, portanto, o festival é chamado Deepavali no sul da Índia. Existem várias observâncias do feriado em toda a Índia.\n[…]\nO Diwali no Jainismo é marcado como o nirvana do Lord Mahavira, que ocorreu em 15 de outubro de 527 a.C.\n[…]\nNa Índia, o Diwali é hoje considerado um festival nacional quanto ao aspecto estético, entretanto, é usufruído pelos hindus, independentemente da fé.\n[…]\nVishnu é muito popular também através de seus avatares, encarnações em diferentes formas, sendo os mais famosos Rama, o herói mítico do Ramayana, um dos grandes épicos hindus, Krishna, personagem central do maior épico da humanidade, o Mahabharata, e mais popular deidade da Índia, trazendo o amor divino personificado, além de outros como Narasimhadeva, o homem-leão, que veio proteger seu devoto Prahlada.\n[…]\n«Diwali - Veja as fotos do festival das luzes na Índia». Folha de S.Paulo\n[…]\n«Fotos: Diwali, o festival das luzes». Resumo Fotográfico",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Diwali",
      "descricao": "Grande festa hindu das luzes, celebrada no outono com lamparinas, velas e fogos."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Na noite principal do Diwali, as famílias hindus deixam lamparinas acesas para receber qual deusa da riqueza e da prosperidade?",
    "resposta": "Lakshmi",
    "distratores": [
      "Durga",
      "Kali",
      "Saraswati"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Diwali",
      "https://en.wikipedia.org/wiki/Lakshmi"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Diwali",
        "situacao": "ok",
        "texto": "Dipavali (IAST: Dīpāvalī), commonly known as Diwali (), is the Hindu festival of lights, with variations celebrated in other Indian religions such as Jainism and Sikhism. It is associated with the spiritual victory or triumph of Dharma over Adharma, light over darkness, good over evil, and knowledge over ignorance. Diwali is celebrated during the Hindu lunisolar months of Ashvin (according to the \n[…]\nIn the future Diwali will be a holiday.\n[…]\nUnlike some other festivals, the Hindus typically do not fast during the five-day long Diwali including Lakshmi Pujan, rather they feast and share the bounties of the season at their workplaces, community centres, temples, and homes.\n[…]\nOn the night of Diwali, rituals across much of India are dedicated to Lakshmi to welcome her into their cleaned homes and bring prosperity and happiness for the coming year. While the cleaning, or painting, of the home is in part for goddess Lakshmi, it also signifies the ritual \"reenactment of the cleansing, purifying action of the monsoon rains\" that would have concluded in most of the Indian subcontinent.\n[…]\nVaishnava families recite Hindu legends of the victory of good over evil and the return of hope after despair on the Diwali night, where the main characters may include Rama, Krishna, Vamana or one of the avatars of Vishnu, the divine husband of Lakshmi. At dusk, lamps placed earlier in the inside and outside of the home are lit up to welcome Lakshmi.\n[…]\nDiwali marks a major shopping period in India, and is comparable to the Christmas period in terms of consumer purchases and economic activity. It is traditionally a time when households purchase new clothing, home refurbishments, gifts, gold, jewelry, and other large purchases particularly as the festival is dedicated to Lakshmi, the goddess of wealth and prosperity, and such purchases are considered auspicious.\n[…]\nWinter air pollution around Diwali and Asthma"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Lakshmi",
        "situacao": "ok",
        "texto": "Lakshmi ( LUK-shmee; Sanskrit: लक्ष्मी, IAST: Lakṣmī), sometimes spelled Laxmi and also known as Shri (Sanskrit: श्री, IAST: Śrī), is one of the principal goddesses in Hinduism, revered as the goddess of fortune, wealth, prosperity, beauty, fertility,  sovereignty, and abundance. With Parvati and Sarasvati, she forms the trinity of goddesses called the Tridevi.\n[…]\nMany Hindus worship Lakshmi on Deepavali (Diwali), the festival of lights. It is celebrated in autumn, typically October or November every year. The festival spiritually signifies the victory of light over darkness, knowledge over ignorance, good over evil and hope over despair.\n[…]\nOn the night of Deepavali, Hindus light up diyas (lamps and candles) inside and outside their home, and participate in family puja (prayers) typically to Lakshmi. Deepavali also marks a major shopping period, since Lakshmi connotes auspiciousness, wealth and prosperity.\n[…]\nVaibhav Lakshmi Vrata is observed on Friday for prosperity.\n[…]\nThe Dharani is as follows:Namo buddhāya, Namo dharmāya, Namah samghāya, Namah Śrī Mahādevīye, Tadyathā Om paripūraņa cāre samanta darśane. Mahā vihāra gate samanta vidhamane. Mahā kārya pratişţhāpane, sarvārtha sādhane, supratipūri ayatna dharmatā. Mahā vikurvite, mahā maitrī upasamhite, mahārşi susamgŗhīte samantārtha anupālane svāhā.In Japanese Buddhism, Lakshmi is known as Kishijoten (吉祥天, 'Auspicious Heavens') and is also the goddess of fortune and prosperity.\n[…]\nIn Tibetan Buddhism, Lakshmi is an important deity, especially in the Gelug School. She has both peaceful and wrathful forms; the latter form is known as Palden Lhamo, Shri Devi Dudsol Dokam, or Kamadhatvishvari, and is the principal female protector of (Gelug) Tibetan Buddhism and of Lhasa, Tibet.\n[…]\nŚrī Sūkta – Rigvedic hymns dedicated to Lakshmi\n[…]\nLakshmi Planum – Planum on Venus\n[…]\nBritish Broadcasting Corporation – Lakshmi"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Diwali",
        "situacao": "ok",
        "texto": "O Diwali (também Deepavali ou Deepawali) é uma festa religiosa hindu, conhecida também como o festival das luzes. Durante o Diwali, celebrado uma vez ao ano, as pessoas estreiam roupas novas, dividem doces e lançam fogos de artifício. Este festival celebra, entre outras histórias, a destruição de Narakasura por Sri Krishna, o que converte o Diwali num evento religioso que simboliza a destruição da\n[…]\nEm muitas partes da Índia, é o Baile do Rei Ramachandra em Ayodhya, após 14 anos de exílio na floresta. Sri Rama, um dos avatares de Vishnu, derrotou o mal encarnado em Ravana, que havia raptado sua esposa Sitadevi. O povo de Ayodhya (a capital do seu reino) congratulou-se com Rama por iluminação em fileiras (avali) das lâmpadas (Deepa), dando assim o seu nome: Deepavali. Esta palavra, em devido tempo, se tornou Diwali em hindi.\n[…]\nO Diwali no Jainismo é marcado como o nirvana do Lord Mahavira, que ocorreu em 15 de outubro de 527 a.C.\n[…]\nEntre os sikhs, o Diwali veio a ter significado especial a partir do dia ao qual houve o retorno a cidade de Amritsar do iluminado Guru Hargobind (1595-1644), que havia sido detido no Forte em Gwalior sob as ordens do imperador Mughal, Jahangir (1570-1627). Como o sexto Guru (professor), do Sikhismo, Guru Hargobind Ji, foi libertado da prisão - juntamente com 53 reis hindus (que eram mantidos como prisioneiros políticos) a quem o Guru havia organizado sua libertação.\n[…]\nNa Índia, o Diwali é hoje considerado um festival nacional quanto ao aspecto estético, entretanto, é usufruído pelos hindus, independentemente da fé.\n[…]\nO Divali envolve muitas histórias do Hinduísmo, principalmente relacionadas a Vishnu e Lakshmi, sua esposa.\n[…]\nFinalmente, a de Vishnu é Lakshmi, que personifica a riqueza.\n[…]\n«Diwali - Veja as fotos do festival das luzes na Índia». Folha de S.Paulo\n[…]\n«Fotos: Diwali, o festival das luzes». Resumo Fotográfico",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Calendário do Advento",
      "descricao": "Objeto com pequenas portas ou pacotes, aberto um por dia, que marca a contagem para o Natal."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Quantas portinhas tem o calendário do Advento mais comum, aberto uma por dia a partir de dezembro até a véspera do Natal?",
    "resposta": "Vinte e quatro",
    "distratores": [
      "Vinte e cinco",
      "Vinte e oito",
      "Trinta e um"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Advent_calendar"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Advent_calendar",
        "situacao": "ok",
        "texto": "An Advent calendar, from the German word Adventskalender, is used to count the days of Advent in anticipation of Christmas. Since the date of the First Sunday of Advent varies, falling between November 27 and December 3 inclusive, many reusable Advent calendars made of paper or wood begin on December 1. Others start from the First Sunday of Advent.\n[…]\nAfter the magazine Newsweek showed a picture of Eisenhower's grandson on an Advent calendar in December 1953, demand rose massively.\n[…]\nSince 1995, Der Andere Advent was published by the ecumenical organization Andere Zeiten and is again an Advent calendar which follows the ecclesiastical year and therefore extends to the 6th of January. Since 2017, Der Andere Advent has an edition for children between the age of 7 and 11 which includes stories, experiments, comics and games. This Advent calendar gained nationwide popularity in the 1950s, when it was a mass-produced article that was offered at an affordable price.\n[…]\nThe designs were mainly scenes from romantic, snow-covered little towns. The big window of the 24th of December usually hid a nativity scene. There were also hand-painted advent calendars by various artists, one example being the Advent calendars of Leipzig.\n[…]\nIn recent years, manufacturers have adopted advent calendar formats to promote their products, resulting in hundreds of advent calendars which include small versions of their products which have proven very popular with consumers.\n[…]\nAdvent candle\n[…]\nAdvent wreath\n[…]\nLenten calendar\n[…]\nTaylor, Alan (November 30, 2012). \"2012 Hubble Space Telescope Advent Calendar\". In Focus. The Atlantic. Archived from the original on January 1, 2015. Retrieved March 5, 2017.\n[…]\nTaylor, Alan (December 1, 2018). \"2018 Hubble Space Telescope Advent Calendar\". In Focus. The Atlantic. Archived from the original on January 5, 2019. Retrieved January 5, 2019."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Calend%C3%A1rio_do_Advento",
        "situacao": "ok",
        "texto": "O Calendário do Advento é contado regressivamente até a Véspera de Natal. A marcação do tempo se dá pelo uso de velas.\n[…]\nO calendário tradicional consiste em dois pedaços de cartolina sobrepostos. Vinte e quatro janelas são cortadas na camada superior com um número entre 1 e 24 em cada uma delas. Começando no primeiro dia de dezembro, uma janela é aberta a cada dia, fazendo a contagem regressiva até a noite de Natal. De 24 até 1. Cada compartimento mostra uma imagem que pode ser tanto sobre o Natal ou o nascimento de Cristo quanto cenas relacionadas à festa de Natal, como bolas, pinheiros e estrelas.\n[…]\nOs calendários do Advento também podem ser feitos com um tecido com pequenos bolsos que são preenchidos com doces ou outras miudezas. Muitos calendários foram adaptados por comerciantes e artesãos para acomodar um pequeno chocolate ou outro confeito em cada divisão. Estes são frequentemente direcionados às crianças, que esperam ansiosamente pelo Natal e pela chegada do Papai Noel e têm sido criticados por não ter relação com o nascimento de Cristo e simplesmente faturar com as vendas de Natal.\n[…]\nO número de janelas também pode ser de 25, para cobrir o dia de Natal ou 31 e 32 para incluir a véspera de Ano Novo e o Dia de Ano Novo.\n[…]\nO calendário do Advento normalmente tem tamanhos padronizados mas pode ser encontrado em outros formatos como casas em miniatura. Outras formas são os calendários de feltro ou uma cadeia de velas que serão acesas a cada dia. A cidade alemã de Dresden tem um calendário gigante em um castelo no seu Mercado de Natal, o Striezelmarkt.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Calendário do Advento",
      "descricao": "Objeto com pequenas portas ou pacotes, aberto um por dia, que marca a contagem para o Natal."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Os primeiros calendários do Advento impressos, com portinhas para abrir, surgiram no início do século vinte em que país?",
    "resposta": "Alemanha",
    "distratores": [
      "Áustria",
      "Dinamarca",
      "Suíça"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Advent_calendar"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Advent_calendar",
        "situacao": "ok",
        "texto": "An Advent calendar, from the German word Adventskalender, is used to count the days of Advent in anticipation of Christmas. Since the date of the First Sunday of Advent varies, falling between November 27 and December 3 inclusive, many reusable Advent calendars made of paper or wood begin on December 1. Others start from the First Sunday of Advent.\n[…]\nAfter the magazine Newsweek showed a picture of Eisenhower's grandson on an Advent calendar in December 1953, demand rose massively.\n[…]\nSince 1995, Der Andere Advent was published by the ecumenical organization Andere Zeiten and is again an Advent calendar which follows the ecclesiastical year and therefore extends to the 6th of January. Since 2017, Der Andere Advent has an edition for children between the age of 7 and 11 which includes stories, experiments, comics and games. This Advent calendar gained nationwide popularity in the 1950s, when it was a mass-produced article that was offered at an affordable price.\n[…]\nThe designs were mainly scenes from romantic, snow-covered little towns. The big window of the 24th of December usually hid a nativity scene. There were also hand-painted advent calendars by various artists, one example being the Advent calendars of Leipzig.\n[…]\nIn recent years, manufacturers have adopted advent calendar formats to promote their products, resulting in hundreds of advent calendars which include small versions of their products which have proven very popular with consumers.\n[…]\nAdvent candle\n[…]\nAdvent wreath\n[…]\nLenten calendar\n[…]\nTaylor, Alan (November 30, 2012). \"2012 Hubble Space Telescope Advent Calendar\". In Focus. The Atlantic. Archived from the original on January 1, 2015. Retrieved March 5, 2017.\n[…]\nTaylor, Alan (December 1, 2018). \"2018 Hubble Space Telescope Advent Calendar\". In Focus. The Atlantic. Archived from the original on January 5, 2019. Retrieved January 5, 2019."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Calend%C3%A1rio_do_Advento",
        "situacao": "ok",
        "texto": "O Calendário do Advento é contado regressivamente até a Véspera de Natal. A marcação do tempo se dá pelo uso de velas.\n[…]\nO primeiro calendário do Advento conhecido foi manufaturado em 1851.\n[…]\nDe acordo com o Austrian Landesmuseum, o primeiro calendário do Advento impresso foi produzido em Hamburgo em 1902 ou 1903. Outras fontes afirmam que o pároco Gerhard Lang foi responsável pelo primeiro calendário impresso em 1908.\n[…]\nCriou e comercializou ao menos 30 desenhos antes da sua firma retirar-se do mercado na década de 30. Na mesma época, a companhia de impressão Sankt Johannis começou a produção de calendários do Advento religiosos com versículos da Bíblia no lugar das imagens nas pequenas janelas.\n[…]\nO calendário tradicional consiste em dois pedaços de cartolina sobrepostos. Vinte e quatro janelas são cortadas na camada superior com um número entre 1 e 24 em cada uma delas. Começando no primeiro dia de dezembro, uma janela é aberta a cada dia, fazendo a contagem regressiva até a noite de Natal. De 24 até 1. Cada compartimento mostra uma imagem que pode ser tanto sobre o Natal ou o nascimento de Cristo quanto cenas relacionadas à festa de Natal, como bolas, pinheiros e estrelas.\n[…]\nO calendário do Advento normalmente tem tamanhos padronizados mas pode ser encontrado em outros formatos como casas em miniatura. Outras formas são os calendários de feltro ou uma cadeia de velas que serão acesas a cada dia. A cidade alemã de Dresden tem um calendário gigante em um castelo no seu Mercado de Natal, o Striezelmarkt.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Festa de São Firmino",
      "descricao": "Festa de julho em Pamplona, na Espanha, famosa pelos encierros, em que as pessoas correm à frente de touros pelas ruas."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Em cada corrida pelas ruas de Pamplona, na festa de São Firmino, quantos touros bravos são soltos, além dos bois que guiam a manada?",
    "resposta": "Seis",
    "distratores": [
      "Três",
      "Dez",
      "Doze"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Running_of_the_bulls",
      "https://en.wikipedia.org/wiki/San_Ferm%C3%ADn"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Running_of_the_bulls",
        "situacao": "ok",
        "texto": "A running of the bulls (Spanish: encierro, from the verb encerrar, 'to corral, to enclose'; Occitan: abrivado, literally 'haste, momentum'; Catalan: bous al carrer 'bulls in the street', or correbous 'bull-runner') is an event that involves running in front of a small group of bulls, typically six but sometimes ten or more, that have been let loose on sectioned-off streets in a town, usually as pa\n[…]\nThe most famous bull-run is the encierro held in Pamplona during the nine-day festival of Sanfermines in honor of Saint Fermin. It has become a major global tourism event, today very different from the traditional, local festival. More traditional summer bull-runs are held in other places such as towns and villages across Spain and Portugal, in some cities in Mexico, and in the Occitan (Camargue) region of southern France.\n[…]\nThe Pamplona encierro is the most popular in Spain and has been broadcast live by Televisión Española, the public Spanish national television service, for over 30 years. It is the highest-profile event of the San Fermín festival, which is held every year from 6–14 July. The first bull running is on 7 July, followed by one on each of the following mornings of the festival, beginning every day at 8 a.m.\n[…]\nIn 2014, Pamplona inaugurated a series of running events in June, the San Fermín Marathon, of a full marathon (42.195 km), half-marathon (21.097 km), or 10 km road race that concludes with the final 900m of each race using the encierro route, runners crossing the finish line inside the bullring.\n[…]\nFiske-Harrison, Alexander, ed. (2018). The Bulls Of Pamplona (1 ed.). Mephisto Press. ISBN 978-1986500272.\n[…]\nDefinitive Guide to Running with Bulls, Pamplona's Running of the Bulls, How To\n[…]\nA blog about Pamplona's annual bull-running festival\n[…]\nHow to attend or view the Pamplona festival"
      },
      {
        "url": "https://en.wikipedia.org/wiki/San_Ferm%C3%ADn",
        "situacao": "desambiguacao",
        "texto": "San Fermín or San Fermin may refer to:\n\nFestival of San Fermín, historically rooted celebration held annually in the city of Pamplona, Navarre\nSan Fermín de los Navarros, church located in Madrid, Spain\nSan Fermín earthquake, struck the island of Puerto Rico in 1918\nSan Fermín-Orcasur, station of the Madrid Metro\nSan Fermín (Madrid), ward of Madrid belonging to the district of Usera\nSan Fermin (al"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Encierro",
        "situacao": "ok",
        "texto": "O encierro é uma prática festiva tauromáquica que envolve populares a correrem em frente a uma manada, geralmente muito pequena, de touros bravos, novillhos e vacas. É praticada sobretudo em Espanha, mas também em alguns países da América Latina e ocorre em festas. Tipicamente, os encierros ocorrem de manhã, usando os animais usados na tourada que se realizará à tarde.\n[…]\nOs encierros têm algumas semelhanças com as largadas de touros, novilhadas e touradas à vara larga praticadas em Portugal, pois também envolvem animais à solta pelas ruas de uma localidade e populares (amadores) a exibirem a sua coragem e habilidades (ou desabilidades) tauromáquicas, mas enquanto que estes espetáculos portugueses geralmente e de certa forma emulam uma tourada feita por amadores, os encierros em Espanha consistem essencialmente na corrida em frente aos touros num percurso geralmente bem delimitado, que vai dos currais onde os animais passam a noite até à praça de touros.[carece de fontes]?\n[…]\nOs encierros com mais fama internacional são os de Pamplona, realizados todos os dias das Festas de São Firmino (Sanfermines), que decorrem todos os anos entre 6 e 14 de julho, mas há outros bastante conhecidos em Espanha.[carece de fontes]? Ver a secção encierros noa artigo 'Festas de São Firmino'.\n[…]\nAlgo semelhante acontece em Medina del Campo, também na província de Valhadolide, onde os encierros, classificados como \"Festa de Interesse Turístico\", começam no campo, onde se vão buscar os animais, que são conduzidos por cavaleiros até ao perímetro urbano, onde é então feita a corrida com populares correndo à frente dos bovinos. Tal ocorre durante as festas do padroeiro Santo Antonino, entre 1 e 8 de setembro.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Festa de São Firmino",
      "descricao": "Festa de julho em Pamplona, na Espanha, famosa pelos encierros, em que as pessoas correm à frente de touros pelas ruas."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Que escritor americano espalhou pelo mundo a fama da festa de São Firmino, em Pamplona, com o romance O Sol Também se Levanta?",
    "resposta": "Ernest Hemingway",
    "distratores": [
      "John Steinbeck",
      "F. Scott Fitzgerald",
      "William Faulkner"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Sun_Also_Rises",
      "https://en.wikipedia.org/wiki/San_Ferm%C3%ADn"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Sun_Also_Rises",
        "situacao": "ok",
        "texto": "The Sun Also Rises is the first novel by the American writer Ernest Hemingway, following his experimental novel-in-fragments In Our Time (1925). It portrays American and British expatriates who travel from Paris to the Festival of San Fermín in Pamplona and watch the running of the bulls and the bullfights. An early modernist novel, it received mixed reviews upon publication.\n[…]\nThe twice-divorced Brett Ashley represented the liberated New Woman. In the 1920s, divorces were common and easy to be had in Paris. James Nagel writes that, in Brett, Hemingway created one of the more fascinating women in 20th-century American literature. Sexually promiscuous, she is a denizen of Parisian nightlife and cafés. In Pamplona she sparks chaos: the men drink too much and fight over her. She also seduces the young bullfighter Romero and becomes a Circe in the festival.\n[…]\nWith his wife Hadley Richardson, Hemingway first visited the Festival of San Fermín in Pamplona in 1923, where he was following his recent passion for bullfighting. The couple returned to Pamplona in 1924—enjoying the trip immensely—this time accompanied by Chink Dorman-Smith, John Dos Passos, and Donald Ogden Stewart and his wife.\n[…]\nStill, the book sold well, and young women began to emulate Brett while male students at Ivy League universities wanted to become \"Hemingway heroes.\"  Scribner's encouraged the publicity and allowed Hemingway to \"become a minor American phenomenon\"—a celebrity to the point that his divorce from Richardson and marriage to Pfeiffer attracted media attention.\n[…]\nHemingway wrote more books about bullfighting: Death in the Afternoon was published in 1932 and The Dangerous Summer was published posthumously in 1985. His depictions of Pamplona, beginning with The Sun Also Rises, helped to popularize the annual running of the bulls at the Festival of St. Fermin."
      },
      {
        "url": "https://en.wikipedia.org/wiki/San_Ferm%C3%ADn",
        "situacao": "desambiguacao",
        "texto": "San Fermín or San Fermin may refer to:\n\nFestival of San Fermín, historically rooted celebration held annually in the city of Pamplona, Navarre\nSan Fermín de los Navarros, church located in Madrid, Spain\nSan Fermín earthquake, struck the island of Puerto Rico in 1918\nSan Fermín-Orcasur, station of the Madrid Metro\nSan Fermín (Madrid), ward of Madrid belonging to the district of Usera\nSan Fermin (al"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/The_Sun_Also_Rises",
        "situacao": "ok",
        "texto": "The Sun Also Rises, publicado no Brasil com o título O Sol Também se Levanta e em Portugal com O Sol Nasce Sempre (Fiesta), é um romance do escritor estadunidense Ernest Hemingway, publicado em 1926.\n[…]\nO Sol também se levanta gira em torno de de um grupo de expatriados sediados em Paris, inspirado no próprio círculo de escritores e artistas frequentado por Hemingway. O grupo incluía Gertrude Stein, Ezra Pound, Pablo Picasso e F. Scott Fitzgerald representantes da geração pós-guerra, uma geração perdida que vagava por Paris sem transformar nada, mas cheia de ambição.\n[…]\nEscrito originalmente em 1926 e publicado em 1927, The Sun Also Rises foi o primeiro romance de Hemingway, sendo considerado pela crítica como uma das suas obras principais.\n[…]\nO livro retrata o cotidiano de um grupo de expatriados boêmios, ingleses e norte-americanos, após o término da Primeira Guerra Mundial. A ação se desenrola nas cidades de Paris e Pamplona, durante as Festas de São Firmino.\n[…]\nHemingway criou tipos humanos complexos para The Sun Also Rises, representando assim uma geração contaminada pela ironia e pelo vazio diante da vida, com seus valores morais destruídos pela guerra e irremediavelmente perdidos. Temas como a solidão e a morte, os preferidos do escritor, são explorados de forma brilhante.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Hajj",
      "descricao": "Peregrinação anual a Meca, um dos pilares do islã"
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "No Hajj, os peregrinos caminham em volta da Caaba, em Meca, no sentido anti-horário. Quantas voltas eles completam a cada circuito?",
    "resposta": "Sete",
    "distratores": [
      "Três",
      "Cinco",
      "Doze"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Tawaf",
      "https://en.wikipedia.org/wiki/Hajj"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tawaf",
        "situacao": "ok",
        "texto": "The Kaaba (Arabic: الكعبة, romanized: al-Kaʿba, lit. 'the Cube'), also spelled Kaʽba, Kaʽbah or Kabah, sometimes referred to as al-Kaʽba al-Musharrafa (Arabic: الكعبة المشرفة, lit. 'the Honored Ka'ba'), is a stone building at the center of Islam's most important mosque and holiest site, the Masjid al-Haram in Mecca, Saudi Arabia. It is considered by Muslims to be the Baytullah (Arabic: بيت اللَّٰه\n[…]\nCircling the Kaaba seven times anti-clockwise, known as tawaf (Arabic: طواف, romanized: ṭawaaf), is a fard rite for the completion of the hajj and umrah pilgrimages. The area around the Kaaba where pilgrims walk is called the mataaf.\n[…]\nAfter the construction was complete, God enjoined the descendants of Ismail to perform an annual pilgrimage: the Hajj and the Qurban, sacrifice of cattle. The vicinity of the temple was also made a sanctuary where bloodshed and war were forbidden.[Quran 22:26-33]\n[…]\nṬawāf (Arabic: طَوَاف, lit. 'going about') is one of the Islamic rituals of pilgrimage and is compulsory during both the Hajj and Umrah. Pilgrims go around the Kaaba (the most sacred site in Islam) seven times in a counterclockwise direction; the first three at a hurried pace on the outer part of the Mataaf and the latter four times closer to the Kaaba at a leisurely pace.\n[…]\nTawaf begins from the corner of the Kaaba with the Black Stone. If possible, Muslims are to kiss or touch it, but this is often not possible because of the large crowds. They are also to chant the Basmala and Takbir each time they complete one revolution. Hajj pilgrims are generally advised to \"make ṭawāf\" at least twice – once as part of the Hajj, and again before leaving Mecca.\n[…]\nṬawāf az-Zīyārah (ṭawāf of visiting), Ṭawāf al-'Ifāḍah (ṭawāf of compensation) or Ṭawāf al-Ḥajj (Hajj ṭawāf) is performed after completing the Hajj.\n[…]\nKaaba - Hajj"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Hajj",
        "situacao": "ok",
        "texto": "Hajj (Arabic: حَجّ, romanized: Ḥajj [ħaddʒ]; also spelled Hadj or Haj) is an annual Islamic pilgrimage to Mecca, Saudi Arabia, the holiest city in Islam. Hajj is a one-time-required religious duty for all Muslims who are physically and financially capable of undertaking the journey and supporting their family during their absence from home.\n[…]\nThe completion of Tawaf is followed by two Rakaat prayers at the Place of Abraham (Muqam Ibrahim), a site near the Kaaba inside the mosque. However, again because of large crowds during the days of Hajj, they may instead pray anywhere in the mosque. After prayer, pilgrims also drink water from the Zamzam well, which is made available in coolers throughout the Mosque.\n[…]\nApart from being an obligatory religious duty, the Hajj is seen to have a spiritual merit that provides Muslims with an opportunity of self-renewal. Hajj serves as a reminder of the Day of Judgment when Muslims believe people will stand before God. Hadith literature (sayings of Muhammad) lists various merits a pilgrim achieves upon successful completion of their Hajj.\n[…]\nIn 2017, the Hajj and Umrah revenues were expected to exceed US$150 billion by 2022. Hajj revenues are expected to cross US$350 billion by 2032, according to a report published by The Moodie Davitt.\n[…]\nThe following number of pilgrims arrived in Saudi Arabia each year to perform Hajj:\n[…]\nKhan, Qaisra (2014). \"Hajj & 'Umra\". In Fitzpatrick, Coeli; Walker, Adam Hani (eds.). Muhammad in History, Thought, and Culture: An Encyclopedia of the Prophet of God. Vol. I. Santa Barbara: ABC-CLIO. pp. 239–245. OCLC 857754274.\n[…]\nHajj: a Cultural History – online exhibition\n[…]\nVirtual Hajj by PBS\n[…]\nThe Hajj Goes High Tech –Time magazine photo essay\n[…]\nSequence of Hajj explained through Google Earth Archived 20 January 2012 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Caaba",
        "situacao": "ok",
        "texto": "Caaba (em árabe: ٱلْكَعْبَة, translit. al-Kaʿbah, lit. 'O Cubo', pronúncia árabe: [kaʕ.bah]), também escrita Kaaba ou Kabah, por vezes referida como al-Caaba al-Musharrafah (em árabe: ٱلْكَعْبَة ٱلْمُشَرَّفَة, translit. al-Kaʿbah al-Musharrafah, lit. 'Caaba Honrada'), é o edifício no centro da mesquita mais importante do Islã, a Masjid al-Haram em Meca, na Arábia Saudita. É o local mais sagrado do\n[…]\nOs muçulmanos acreditam que a Caaba foi reconstruída várias vezes ao longo da história, principalmente por Abraão e seu filho Ismael, quando ele retornou ao vale de Meca vários anos após deixar sua esposa Agar e Ismael lá sob o comando de Alá. Circulando a Caaba sete vezes no sentido anti-horário, conhecido como tawaf (em árabe: طواف, translit. tawaaf), é um rito obrigatório para a conclusão das peregrinações do haje e da unra.\n[…]\nA área ao redor da Caaba na qual os peregrinos circulam é chamada de Mataaf.\n[…]\nApós a conquista, Maomé reafirmou a santidade de Meca, incluindo sua Masjid al-Haram, no Islã. Ele realizou o Haje em 632, chamado Hujate Aluada (\"Peregrinação de despedida\"), pois Maomé profetizou sua morte iminente neste evento.\n[…]\nO tawaf (em árabe: طَوَاف) é um dos rituais islâmicos de peregrinação e é obrigatório durante o haje e a unra. Os peregrinos dão a volta na Caaba (o local mais sagrado do Islã) sete vezes no sentido anti-horário; os três primeiros em um ritmo apressado na parte externa da Mataaf e os últimos quatro vezes mais perto da Caaba em um ritmo lento.\n[…]\nO tawaf começa no canto da Caaba onde está a Pedra Negra. Se possível, os muçulmanos devem beijá-la ou tocá-la, mas geralmente isso não é possível devido à grande multidão. Eles também devem entoar o bismilá e o taquebir cada vez que completarem uma revolução. Os peregrinos do haje geralmente são aconselhados a \"fazer ṭawāf\" pelo menos duas vezes - uma vez como parte do haje e novamente antes de deixar Meca.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Hajj",
      "descricao": "Peregrinação anual a Meca, um dos pilares do islã"
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Durante os dias do Hajj, muçulmanos do mundo todo celebram uma grande festa com o sacrifício de um animal. Como ela se chama?",
    "resposta": "Eid al-Adha",
    "distratores": [
      "Eid al-Fitr",
      "Mawlid",
      "Ashura"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Eid_al-Adha",
      "https://en.wikipedia.org/wiki/Hajj"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Eid_al-Adha",
        "situacao": "ok",
        "texto": "Eid al-Adha (Arabic: عيد الأضحى, romanized: ʿĪd al-ʾAḍḥā, lit. 'Feast of the Sacrifice') is the second of the two main festivals in Islam, alongside Eid al-Fitr. It falls on the 10th of Dhu'l-Hijja, the twelfth and final month of the Islamic calendar. Celebrations and observances are generally carried forward to the three following days, known as the Tashreeq days.\n[…]\nAcknowledging that Abraham was willing to sacrifice what was dear to him, God honoured both Abraham and his son. The Angel Gabriel (Jibreel) proclaimed, \"O Ibrahim, you have fulfilled the revelations,\" and a ram from heaven was offered by Angel Gabriel to prophet Abraham to slaughter instead of his son. When Muslims celebrate Eid al-Adha they commemorate both Abraham's willingness to afflict his family and his son Ishmael's willingness to die for God.\n[…]\nThe tradition for Eid al-Adha involves slaughtering an animal and sharing the meat in three equal parts – for family, for relatives and friends, and for poor people. The goal is to make sure every Muslim gets to eat meat. However, there is a dissent among Muslim scholars regarding the obligatory nature of this sacrifice. While some scholars, such as Al-Kasani, categorise the sacrifice as obligatory (wāǧib), others regard it only as an \"established custom\" (sunna mu'akkada).\n[…]\nEid al-Adha (Bengali: ঈদুল আযহা, romanized: Īdul Āzhā) is commonly known as Korbanir Eid (Bengali: কোরবানির ঈদ, romanized: Kōrbānir Īd, lit. 'Eid of sacrifice') or Bakri Eid (Bengali: বকরি ঈদ, romanized: Bôkri Īd, lit. 'Eid of the goat') among Bangladeshis. Bangladesh sacrifices most animals per year during Eid al-Adha, estimates indicate about 13 million animals are sacrificed each year.\n[…]\nMedia related to Eid al-Adha at Wikimedia Commons\n[…]\nMuttaqi, Shahid ‘Ali. \"The Sacrifice of 'Eid al-Adha'\"."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Hajj",
        "situacao": "ok",
        "texto": "Hajj (Arabic: حَجّ, romanized: Ḥajj [ħaddʒ]; also spelled Hadj or Haj) is an annual Islamic pilgrimage to Mecca, Saudi Arabia, the holiest city in Islam. Hajj is a one-time-required religious duty for all Muslims who are physically and financially capable of undertaking the journey and supporting their family during their absence from home.\n[…]\nAfter the sacrifice of cattle (which can be accomplished by using a voucher), the pilgrims then are required to either shave or trim their heads (if male) or trim the ends of their hair (if female). A celebration of the four-day global festival of Eid al-Adha follows. Muslims may also undertake an Umrah (Arabic: عُمرَة), or \"lesser pilgrimage\" to Mecca at other times of the year.\n[…]\nAfter the stoning of the Devil, cattle (Surah 22:34-36) are sacrificed to commemorate the story of Ibrahim and Ismael. Traditionally, the pilgrims slaughtered the animal themselves or oversaw the slaughtering. Today many pilgrims buy a sacrifice voucher in Mecca before the greater Hajj begins, which allows an animal to be slaughtered in the name of God (Allah) on the 10th, without the pilgrim being physically present.\n[…]\nModern abattoirs complete the processing of the meat, which is then sent as a charity to poor people around the world. At the same time as the sacrifices occur at Mecca, Muslims worldwide perform similar sacrifices, in a three-day global festival called Eid al-Adha.\n[…]\nAfter sacrificing an animal, another important rite of Hajj is the shaving or trimming of head hair (known as Halak). All male pilgrims shave their head or trim their hair on the day of Eid al Adha and female pilgrims cut the ends of their hair.\n[…]\nVirtual Hajj by PBS\n[…]\nThe Hajj Goes High Tech –Time magazine photo essay\n[…]\nSequence of Hajj explained through Google Earth Archived 20 January 2012 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Festa_do_Sacrif%C3%ADcio",
        "situacao": "ok",
        "texto": "Esta página contém alguns caracteres especiais e é possível que a impressão não corresponda ao artigo original.\n[…]\nEid al-Adha (em árabe : عيد الأضحى transliteração: Eid Alatz'ha), ou Eid ul-Adha também conhecido como Grande Festa ou Festa do Sacrifício, é um festival muçulmano que sucede a realização do haje, a peregrinação a Meca. É comemorado a partir do décimo dia do mês de Dulrija (no último mês do ano lunar no Calendário islâmico), e a festa tem duração de quatro dias.\n[…]\nÉ celebrado pelos muçulmanos de todo o planeta em memória da disposição do profeta Ibrahim (Abraão) em sacrificar o seu filho Ismael conforme a vontade de Deus. Ocorre 70 dias após o Ramadã as festas coincidem com o Haje. Está interligada ao Eid al–Fitr, que marca o fim do jejum do Ramadã, uma festa interligada e é a primeira festa. No Eid al-Adha é feito a troca de presentes e o sacrifício de animais onde a carne é dividida com familiares e com os pobres.\n[…]\nA partir do décimo dia do mês, por quatro dias se comemora a Festa do Sacrifício (Eid al-Adha), que é um dos dois principais feriados no Islã. Segundo a tradição islâmica, este feriado marca o sacrifício de Ismael por Abraão (história aparece no Corão e uma história paralela do sacrifício de Isaque na Bíblia Hebraica).\n[…]\nA Adha marca um dos rituais das práticas destaques entre o povo muçulmano. O ensino semelhante na tradição hebraica e cristã é igualmente estimulado, ainda que não seja incentivada festas ou peregrinações. Na cultura cristã, o sacrifício do filho de Abraão é considerada uma tipologia de Cristo Jesus.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Wigilia",
      "descricao": "Ceia tradicional polonesa da véspera de Natal, sem carne e cheia de rituais."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Pela tradição, quantos pratos devem ser servidos na Wigilia, a ceia polonesa da véspera de Natal?",
    "resposta": "Doze",
    "distratores": [
      "Três",
      "Seis",
      "Vinte"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Wigilia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Wigilia",
        "situacao": "ok",
        "texto": "Wigilia (Polish pronunciation: [vʲiˈɡʲilja] ) is the traditional Christmas Eve vigil supper in Poland, held on 24 December. The term is often applied to the whole of Christmas Eve, extending further to Pasterka—midnight Mass, held in Roman Catholic churches all over Poland and in Polish communities worldwide at or before midnight.\n[…]\nThe custom is sometimes referred to as \"wieczerza\" or \"wieczerza wigilijna\", in Old Polish meaning evening repast, which is linked to the late church service or Vespers. The word Wigilia derives from the Latin vigil. The associated feasting follows a day of abstinence and traditionally begins once the First Star has been sighted. Christmas is also sometimes called \"Gwiazdka\", \"little star\".\n[…]\nA major part of the Wigilia festivities is the opening of gifts. After everyone has finished supper the children often open their gifts and hand out the gifts for the adults from under the tree. The gift-givers in Polish tradition are \"Święty Mikołaj\" (Saint Nicolas), \"Aniołek\" (an angel), \"Gwiazdka\" (a star), \"Dzieciątko\" (Christkind) in Silesia, Saint Nicholas' feminine counterpart – or the Gwiazdor (masculine), which is either a pagan tradition or represents the little Star of Bethlehem.\n[…]\nChristmas Day is a national holiday in Poland and most Poles spend the day with their family. After Wigilia there are two more days of celebrations. Christmas breakfast often consists of baked meats, bigos, cold cuts, smoked or fried salmon, marinated salads, and cakes, especially, pierniki Toruńskie (a gingerbread), cake, and decorated biscuits.\n[…]\nWigilia article from the Polish American Center\n[…]\nWigilia article from Pope John Paul II Polish Center\n[…]\nWigilia article from the Polish Museum of America"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Ramadã",
      "descricao": "Nono mês do calendário islâmico, dedicado ao jejum"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome Ramadã, mês do jejum muçulmano, vem de uma raiz árabe ligada a quê?",
    "resposta": "Calor intenso",
    "distratores": [
      "Fome",
      "Lua nova",
      "Silêncio"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Ramadan"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ramadan",
        "situacao": "ok",
        "texto": "Ramadan is the ninth month of the Islamic calendar. It is observed by Muslims worldwide as a month of fasting (sawm), communal prayer (salah), reflection, study of the Quran, charity, and strengthening community ties. It is also the month in which the Quran is believed to have been revealed to the Islamic prophet Muhammad, known as Laylat al-Qadr.\n[…]\nThe word Ramadan derives from Arabic ‏رمضان‎ (ramaḍān), itself derived from the Arabic root ‏ر م ض‎ (R M Ḍ) related to 'scorching heat', which corresponds to the Classical Arabic verb رَمِضَ (ramiḍa) meaning 'to become intensely hot, to become burning; to become scorching; to be blazing; to be glowing'.\n[…]\nIn many cultures, it is associated with heavy food and water intake during Suhur and Iftar times, which may do more harm than good. Ramadan fasting is safe for healthy people provided that overall food and water intake is adequate but those with medical conditions should seek medical advice if they encounter health problems before or during fasting.\n[…]\nThe education departments of Berlin and the United Kingdom have tried to discourage students from fasting during Ramadan, as they state that not eating or drinking can lead to concentration problems and bad grades.\n[…]\nA review of the literature by an Iranian group suggested fasting during Ramadan might produce renal injury in patients with moderate (GFR  under 60 mL/min) or severe kidney disease but was not injurious to renal transplant patients with good function or most stone-forming patients.\n[…]\nA study on 55 professional Algerian soccer players showed that performance during Ramadan declined significantly for speed, agility, dribbling speed and endurance, and most stayed low two weeks after the conclusion of Ramadan.\n[…]\nRamadan in the United Arab Emirates\n[…]\nArticles on Ramadan (archived 15 May 2015)\n[…]\nRamadan news and articles"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ramad%C3%A3o",
        "situacao": "ok",
        "texto": "Esta página contém alguns caracteres especiais e é possível que a impressão não corresponda ao artigo original.\n[…]\nO Ramadão (português europeu) ou Ramadã (português brasileiro), também grafado Ramadan (em árabe: رَمَضَان, translit. Ramaḍān), é o nono mês do calendário islâmico, no qual a maioria dos muçulmanos pratica o seu jejum ritual (saum; em árabe: صوم, translit. sawm), o quarto dos cinco pilares do Islão (arkan al-Islam).\n[…]\nA palavra Ramadã encontra-se relacionada com a palavra árabe ramida, “ser ardente”, possivelmente pelo fato de o Islão ter celebrado este jejum pela primeira vez no período mais quente do ano. É um tempo de renovação da fé, da prática mais intensa da caridade, e vivência profunda da fraternidade e dos valores da vida familiar. Neste período pede-se ao crente maior proximidade dos valores sagrados, leitura mais assídua do Alcorão, frequência da oração na mesquita, correção pessoal e autodomínio.\n[…]\nO nome \"Ramadão\" em árabe vem da raiz \"ramada\" (em árabe: رمضاء) que significa \"queimando\" e \"ardente\", o mês do Ramadão é assim chamado porque neste mês os pecados são perdoados como se fossem queimados.\n[…]\nEid al Fitr (em árabe: عيد الفطر) — (\"o banquete do término do jejum\"), ocorre quando a lua nova é avistada no céu, isto quer dizer que o mês de Xaual se inicia, dando fim ao mês do Ramadã. No primeiro dia deste novo mês, ocorrem feriados de 3 dias consecutivos. Está prescrita a distribuição de alimentos para os pobres, banquetes são servidos, presentes são trocados, roupas novas são vestidas e os agradecimentos a Deus são efetuados, congregando amigos e familiares.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Quimono",
      "descricao": "Vestimenta tradicional japonesa em forma de T, com mangas largas e presa por uma faixa chamada obi"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Em japonês, a palavra quimono junta dois termos. O que ela significa literalmente?",
    "resposta": "Coisa de vestir",
    "distratores": [
      "Roupa de seda",
      "Manto da corte",
      "Veste longa"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Kimono"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Kimono",
        "situacao": "ok",
        "texto": "The kimono (着物; Japanese pronunciation: [kʲi.mo.no], lit. 'thing to wear') is a traditional Japanese garment and the national dress of Japan. The kimono is a wrapped-front garment with square sleeves and a rectangular body, and is worn left side wrapped over right, unless the wearer is deceased. The kimono is traditionally worn with a broad sash, called an obi, and is commonly worn with accessorie\n[…]\nFollowing the opening of Japan's borders in the early Meiji period to Western trade, new materials and techniques – such as wool and the use of synthetic dyestuffs – became popular, with casual wool kimonos being relatively common in pre-1960s Japan; the use of safflower dye (beni) for silk linings fabrics (known as momi; literally, \"red silk\") was also common in pre-1960s Japan, making kimonos from this era easily identifiable.\n[…]\nThe juban, also called the nagajuban (長襦袢), is an under-kimono worn by both men and women.\n[…]\nThe han'eri, visible at the neckline when worn underneath a kimono, is designed to be replaced and washed when needed.\n[…]\nKimonos are worn by Japanese Americans, and by other members of the Japanese diaspora overseas, such as Japanese in the Philippines. Kimonos are worn to Shinto ceremonies by Japanese Brazilians in Curitiba, Paraná.\n[…]\nKimonos are collected in the same way as Japanese hobbyists by some non-Japanese, and may be worn to events such as Kimono de Jack gatherings.\n[…]\nArticles on contemporary kimono artisans and production regions by Ginza Motoji\n[…]\nThe Canadian Museum of Civilization – Archive of the exhibition \"The Landscape Kimonos of Itchiku Kubota\"\n[…]\nArchived link to the Immortal Geisha Forums; comprehensive resource on kimono knowledge and culture\n[…]\nArticles on kimono from the V&A Collection\n[…]\nArticles on kimono\n[…]\nKimono: A Modern History 2014 exhibition at the Metropolitan Museum of Art; exhibition catalog by Terry Satsuki Milhaupt ISBN 978-1-780-23317-8"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Quimono",
        "situacao": "ok",
        "texto": "O quimono ou kimono (着物, きもの)) é uma vestimenta tradicional japonesa utilizada por mulheres, homens e crianças. A palavra \"kimono\", que no seu sentido literal, traduzido diretamente do japonês, significa \"coisa para vestir\" (ki = \"vestir\" e mono = \"coisa\") é utilizada para denotar o nome destes longos roupões.\n[…]\nKimonos têm diferentes estilos e acessórios.\n[…]\nEmbora tenha sido anteriormente a roupa japonesa mais comum, o quimono nos dias atuais caiu fora de moda e raramente é usado como vestido cotidiano. Quimonos são agora mais vistos em festivais de verão, onde as pessoas frequentemente usam o yukata, o tipo mais informal de quimono; no entanto, tipos mais formais de quimono também são usados em funerais, casamentos, formaturas e outros eventos formais.\n[…]\nAs primeiras instâncias de roupas semelhantes a quimonos no Japão foram tradiste chinesa introduzidas no Japão através de enviados chineses no período Kofun (300-538 CE; a primeira parte do período Yamato), com a imigração entre os dois países e missões para a corte da dinastia Tangy levando a estilos chineses de vestimenta,  aparência e cultura tornando-se extremamente popular na sociedade judicial japonesa.\n[…]\nObi (帯): cinto japonês usado em volta do quimono ou yukata. São usados diferentemente dependendo da ocasião e são mais sofisticados quando usados por mulheres. Enquanto numa gueixa o obi é atado atrás, nas costas, numa prostituta é atado à frente, sendo que a sua posição varia conforme o estado social da mulher que o usa.\n[…]\nKeikogi - quimonos usados em artes marciais de origem japonesa.\n[…]\nCultura Japonesa- site em português com a história do Quimono e do vestuário no Japão\n[…]\nJapanese Kimono - Many photos\n[…]\nMuseu japonês do Traje: História do Traje no Japão\n[…]\nEnciclopédia do Quimono\n[…]\nKimono Fraise\n[…]\nVestido Kimono é tendência",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Papai Noel",
      "descricao": "Personagem lendário que traz presentes no Natal"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome americano Santa Claus, dado ao Papai Noel, deriva do nome holandês de qual santo?",
    "resposta": "São Nicolau",
    "distratores": [
      "São Martinho",
      "São Bento",
      "São Valentim"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Santa_Claus",
      "https://en.wikipedia.org/wiki/Sinterklaas"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Santa_Claus",
        "situacao": "ok",
        "texto": "Santa Claus is a legendary figure originating in Western Christian culture who is said to bring gifts during the late evening and overnight hours on Christmas Eve. Christmas elves are said to make the gifts in Santa's workshop, while flying reindeer pull his sleigh through the air.\n[…]\nIn the Netherlands and Belgium, the character of Santa Claus competes with that of Sinterklaas, based on Saint Nicolas. Santa Claus is known as de Kerstman in Dutch (\"the Christmas man\") and Père Noël (\"Father Christmas\") in French. For children in the Netherlands, Sinterklaas remains the predominant gift-giver in December; 36% of the Dutch only give presents on Sinterklaas evening or the day itself, 6 December, while Christmas, 25 December, is used by another 21% to give presents.\n[…]\nThere are schools offering instruction on how to act as Santa Claus. For example, the children's television producer Jonathan Meath studied at the International School of Santa Claus and earned the degree Master of Santa Claus in 2006. It blossomed into a second career for him, and after appearing in parades and malls, he appeared on the cover of the American monthly Boston Magazine as Santa. There are associations with members who portray Santa; for example, Mr.\n[…]\nAccording to a 2007 survey of national postal operations by the Universal Postal Union (UPU), La Poste (France) received the most letters for Santa Claus (or Père Noël) in 2006, with 1,220,000 letters received from 126 countries. In 2007 it recruited someone specially to answer the enormous volume of mail for Santa that was being sent from Russia. Canada Post replied to letters in 26 languages, Deutsche Post in 16 languages.\n[…]\nResearch guides for Thomas Nast and Santa Claus at The Morristown & Morris Township Public Library, NJ"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Sinterklaas",
        "situacao": "ok",
        "texto": "Sinterklaas (Dutch: [ˌsɪntərˈklaːs] ) or Sint-Nicolaas (Dutch: [sɪnt ˈnikoːlaːs] ) is a legendary figure based on Saint Nicholas, patron saint of children. Other Dutch names for the figure include De Sint (\"The Saint\"), De Goede Sint (\"The Good Saint\") and De Goedheiligman (\"The Good Holy Man\").\n[…]\nThis could be based on the fact that Alicante's patron is Saint Nicholas, and that the city's cathedral, Concatedral de San Nicolás, is dedicated to this saint. The province of Alicante is also known for its oranges.\n[…]\nSinterklaas is the basis for the North American figure of Santa Claus. It is often claimed that during the American War of Independence, the inhabitants of New York City, the former Dutch colonial town of New Amsterdam, reinvented their Sinterklaas tradition, as Saint Nicholas was a symbol of the city's non-English past. In the 1770s the New York Gazetteer noted that the feast day of \"St.\n[…]\nSanta Claus is portrayed as Sinterklaas in the 1985 film One Magic Christmas: he and his wife have Dutch accents, and she calls him Nicolaas. In lieu of elves, his helpers are \"Christmas angels\" who are deceased people of all nationalities.\n[…]\nOther holiday figures based on Saint Nicholas are celebrated in some parts of Germany and Austria (Sankt Nikolaus); the Czech Republic and Slovakia (Mikuláš); Hungary (Mikulás); Switzerland (Samichlaus); Italy (San Nicola in Bari, South Tyrol, Alpine municipalities, and many others); parts of Bosnia and Herzegovina, Croatia and Serbia (Sveti Nikola); Slovenia (Sveti Nikolaj or Sveti Miklavž); Greece (Agios Nikolaos); Romania (Moș Nicolae); Albania (Shën Kolli, Nikolli), among others.\n[…]\nGhesquiere, Rita (1989). Van Nicolaas van Myra tot Sinterklaas. Acco. ISBN 9789061525561."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Papai_Noel",
        "situacao": "ok",
        "texto": "Papai Noel (português brasileiro) ou Pai Natal (português europeu) (também conhecido como São Nicolau, Kris Kringle ou Santa Claus) é uma figura lendária originária da cultura cristã ocidental que, segundo a lenda, traz presentes durante o final da noite e durante a noite da véspera de Natal. Diz-se que os elfos natalinos fazem os presentes na oficina do Papai Noel, enquanto renas voadoras puxam s\n[…]\nNos Países Baixos e na Bélgica, o personagem do Papai Noel compete com o de Sinterklaas, baseado em São Nicolau. O Papai Noel é conhecido como de Kerstman em holandês (\"o homem do Natal\") e Père Noël (\"Papai Noel\") em francês.\n[…]\nAs primeiras representações do doador de presentes da história e do folclore da Igreja, especialmente São Nicolau, se fundiram com o personagem inglês Father Christmas para criar o personagem mítico conhecido no resto do mundo de língua inglesa como \"Santa Claus\" (uma derivação fonética de \" Sinterklaas \" em neerlandês).\n[…]\nEm 1845, \"Kris Kringle\" (de \"Christkindl(e)\", alemão para \"criança-Jesus\") era uma variante comum de Papai Noel em algumas partes dos Estados Unidos  Um artigo de revista de 1853, descrevendo os costumes natalinos americanos para leitores britânicos, refere-se a crianças pendurando suas meias na véspera de Natal para \"um personagem fabuloso\" cujo nome varia: na Pensilvânia, ele geralmente é chamado de \"Krishkinkle\", mas em Nova York ele é \"São Nicolau\" ou \"Papai Noel\".\n[…]\nO Papai Noel tem raízes parcialmente cristãs em São Nicolau, particularmente nas denominações da High Church que praticam a veneração dele e de outros santos. Várias denominações cristãs têm opiniões diferentes sobre o Papai Noel, que variam da aceitação à rejeição. Alguns cristãos, particularmente calvinistas como os puritanos, não gostavam da ideia do Papai Noel, bem como do Natal em geral, acreditando que as celebrações extravagantes não estavam de acordo com sua fé.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Papai Noel",
      "descricao": "Personagem lendário que traz presentes no Natal"
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Que marca de refrigerante ajudou a fixar a imagem do Papai Noel gordo e sorridente, em anúncios pintados a partir dos anos trinta?",
    "resposta": "Coca-Cola",
    "distratores": [
      "Pepsi",
      "Dr Pepper",
      "Canada Dry"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Haddon_Sundblom",
      "https://en.wikipedia.org/wiki/Santa_Claus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Haddon_Sundblom",
        "situacao": "ok",
        "texto": "Haddon Hubbard \"Sunny\" Sundblom (June 22, 1899 – March 10, 1976) was an American artist best known for the images of Santa Claus he created for The Coca-Cola Company. Sundblom's friend Lou Prentice was the original model for the illustrator's Santa.\n[…]\nSundblom is best remembered for his advertising work, specifically the Santa Claus advertisement. It was he who depicted Santa Claus in a red suit when he painted for The Coca-Cola Company, starting in 1931. Sundblom's Claus firmly established the larger-than-life, grandfatherly Claus as a key figure in American Christmas imagery.\n[…]\nSo popular were Sundblom's images of Claus (Sundblom's images are used by Coca-Cola to this day) that Sundblom is often wrongly credited as having created the modern image of Santa Claus.\n[…]\nAccording to the Coca-Cola company: \"For inspiration, Sundblom turned to Clement Clarke Moore's 1823 poem \"A Visit From St. Nicholas\" (commonly called \"'Twas the Night Before Christmas\"). Moore's description of St. Nick led to an image of Santa that was warm, friendly, pleasantly plump and human. For the next 33 years, Sundblom painted portraits of Santa that helped to create the modern image of Santa – an interpretation that today lives on in the minds of people of all ages, all over the world\".\n[…]\nSundblom's family most likely also got Christmas greetings sent from Sweden and Finland, Åland. The cards in Sweden and Swedish-speaking Finland had motifs painted by Jenny Nyström of a friendly and charming jultomte (Santa) dressed in red and white.\n[…]\nDream of Santa: Haddon Sundblom's Advertising Paintings for Christmas, 1931–1964, by Haddon Sundblom, Barbara Fahs Charles, J. R. Taylor"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Santa_Claus",
        "situacao": "ok",
        "texto": "Santa Claus is a legendary figure originating in Western Christian culture who is said to bring gifts during the late evening and overnight hours on Christmas Eve. Christmas elves are said to make the gifts in Santa's workshop, while flying reindeer pull his sleigh through the air.\n[…]\nImages of Santa Claus were conveyed through Haddon Sundblom's depiction of him for The Coca-Cola Company's Christmas advertising in the 1930s. The image spawned urban legends that Santa Claus was invented by The Coca-Cola Company or that Santa wears red and white because they are the colours used to promote the Coca-Cola brand. Coca-Cola's competitor Pepsi-Cola used similar Santa Claus paintings in its advertisements in the 1940s and 1950s.\n[…]\nHistorically, Coca-Cola was not the first soft drink company to utilise the modern image of Santa Claus in its advertising—White Rock Beverages had used a Santa figure in monochrome advertisements for mineral water in 1915, and in 1923–25, the same company used colour images of Santa Claus in adverts for drink mixers. Earlier, Santa Claus had appeared dressed in red and white and essentially in his current form on several covers of Puck magazine in the first few years of the 20th century.\n[…]\nIn Brazil, a version of Santa with green clothes instead of red became popular through television commercials for the soft drink brand Dolly appearing along with their mascot Dollynho since the 2000s, as a form of patriotism adapting the character to the colours of the Brazilian flag and at the same time rivalling Coca-Cola commercials.\n[…]\nPancho Claus, a Tex-Mex version of Santa Claus\n[…]\nThe History of Santa Claus and Father Christmas\n[…]\n\"The Knickerbockers Rescue Santa Claus: 'Claas Schlaschenschlinger' from James Kirke Paulding's The Book of Saint Nicholas\" (1836)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Haddon_Sundblom",
        "situacao": "ok",
        "texto": "Haddon Hubbard \"Sunny\" Sundblom (Muskegon, 22 de junho de 1899 — 10 de março de 1976) foi um ilustrador estadunidense, mais conhecido pelas imagens de Papai Noel que criou para a The Coca-Cola Company.\n[…]\nSundblom nasceu no Michigan, e estudou na American Academy of Art. Destacou-se por seu trabalho publicitário, mais precisamente as propagandas estreladas por Papai Noel pintadas para a The Coca-Cola Company na década de 1930. Foi também criador da imagem do Quaker Oats (velho da Quaker) em 1957, que continua sendo utilizada nas embalagens de aveia Quaker até os dias de hoje.\n[…]\nSua última obra foi uma pintura para a capa da edição de Natal de 1972 da revista Playboy.\n[…]\n«Todas as artes de Sunddblom para o Natal da Coca-Cola»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Papai Noel",
      "descricao": "Personagem lendário que traz presentes no Natal"
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Que cidade finlandesa, cortada pelo Círculo Polar Ártico, abriga a Vila do Papai Noel, que recebe turistas o ano todo?",
    "resposta": "Rovaniemi",
    "distratores": [
      "Helsinque",
      "Oulu",
      "Tromsø"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Santa_Claus_Village",
      "https://en.wikipedia.org/wiki/Rovaniemi"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Santa_Claus_Village",
        "situacao": "ok",
        "texto": "Santa Claus Village (Finnish: Joulupukin Pajakylä; Northern Sami: Juovlamánnu gili) is an amusement park in Rovaniemi, a city in the Lapland region of Finland. It was opened in 1980.\n[…]\nThe area occupied by the present-day Santa Claus Village formed part of a large German Luftwaffe base during the Continuation War. German forces greatly expanded the nearby Rovaniemi Airport after taking control of the airfield in 1941, constructing an extensive support complex of barracks, workshops, stores and other military installations which extended to the present-day Arctic Circle tourist area.\n[…]\nThe first original home of Santa Claus was Korvatunturi, built as the \"Finnish equivalent of Disneyland\". In 1980, Rovaniemi was declared as an official hometown of Santa Claus.\n[…]\nThere was an association called Joulumaa, founded 1989 in Rovaniemi, consisting of 34 companies. The association was closed in 1992 due to financial difficulties as Joulumaa could no longer afford to continue the letter service, answering letters received by Santa Claus.\n[…]\nSanta Claus Village is located about 8 kilometres (5 mi) northeast of Rovaniemi and about 2 kilometres (1.2 mi) from the Rovaniemi Airport.\n[…]\nArctic Circle: The Arctic Circle ostensibly cuts right through Santa Claus Village. A white line denoting the Arctic Circle (at its position in 1865) is painted across the park. Visitors officially enter the Arctic area when they cross the line. The line is a trendy photo spot for visitors. There is also a webcam near the line that has been live broadcasting since 2009. The Arctic Circle is actually 700 meters to the north, just south of the Rovaniemi Airport.)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Rovaniemi",
        "situacao": "ok",
        "texto": "Rovaniemi ( ROH-və-nee-ə-mee, Finnish: [ˈroʋɑˌnie̯mi] ; Northern Sami: Roavvenjárga [ˈro̯ɑvveˌɲaːrːka]; Inari Sami: Ruávinjargâ; Skolt Sami: Ruäʹvnjargg) is a city in Finland and the regional capital of Lapland. It is located near the Arctic Circle in the northern interior of the country. The population of Rovaniemi is approximately 66,000, while the sub-region has a population of approximately 70\n[…]\nThe city is home to the football clubs Rovaniemen Palloseura, or RoPS, part of Ykkönen, the Finnish third division, and FC Santa Claus, part of the sixth division; to the ice hockey team Rovaniemen Kiekko, or RoKi, whose home arena is Lappi Areena and which competes in Mestis, the second-highest league in Finland; and to the volleyball team called Team Lakkapää (formerly Rovaniemen Santasport and Perungan Pojat), which plays in the Finland Volleyball League and won the national championship in 2003, 2007, 2008 and 2011.\n[…]\nIn 2021, Rovaniemi hosted the World Rally Championship for 2021 Arctic Rally Finland, the first WRC event held inside the Arctic Circle.\n[…]\nSanta Claus Village in Rovaniemi, said to be the residence of Father Christmas\n[…]\nThe 1998 Spanish romantic film Lovers of the Arctic Circle (Los amantes del Círculo Polar), by director Julio Medem, partly takes place in Rovaniemi.\n[…]\nTV-Star Bam Margera and his friends travelled to Rovaniemi in their film Bam Margera Presents: Where the ♯$&% Is Santa? in order to find Santa Claus who is assumed to live in Rovaniemi.\n[…]\nMisi, a village in Rovaniemi\n[…]\nGettleman, Jeffrey; Huylebroek, Jim (2025-04-15). \"Santa Lives in Rovaniemi, Finland. Some of His Neighbors Are Not Thrilled\". The New York Times. Retrieved 2025-04-15.\n[…]\nRovaniemi: Arctic Circle – Finland. Helsinki: Oy Sevenprint Ltd (1998)\n[…]\nVisit Rovaniemi (in English)\n[…]\nRovaniemi - Santa's Hometown & Capital of Lapland – Visit Finnish Lapland (in English)\n[…]\nSatellite view of Rovaniemi"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Bar mitzvá",
      "descricao": "Cerimônia judaica em que o menino, aos treze anos, passa a ser responsável pelo cumprimento dos mandamentos religiosos."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Aos treze anos, os meninos judeus celebram o bar mitzvá. O que significa essa expressão?",
    "resposta": "Filho do mandamento",
    "distratores": [
      "Filho de Abraão",
      "Homem da lei",
      "Dia da maioridade"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Bar_and_bat_mitzvah"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bar_and_bat_mitzvah",
        "situacao": "ok",
        "texto": "A bar mitzvah (masculine) or bat mitzvah (feminine) is a coming of age ritual in Judaism. According to Jewish law, before children reach a certain age, the parents are responsible for their child's actions. Once Jewish children reach that age, they are said to \"become\" b'nai mitzvah, at which point they begin to be held accountable for their own actions. Traditionally, the father of a bar or bat m\n[…]\nIn 1979, the Responsa Committee of the Central Conference of American Rabbis addressed the Reform attitude toward bat/bar mitzvah: \"Every effort should be exerted to maintain the family festivities in the religious mood at the bar/bat mitzvah. Some of the efforts of early Reform in favor of confirmation [and] against bar mitzvah were prompted by the extravagant celebration of bar mitzvah, which had removed its primary religious significance.\n[…]\nRabbi Moshe Feinstein, a prominent Orthodox posek, described the  bat mitzvah celebration as \"meaningless\", and of no greater halakhic significance than a birthday party. However, he reluctantly permitted it in homes, but not synagogues, as the latter would be construed as imitating Reform and Conservative customs; in any case, they do not have the status of seudat mitzvah. Rabbi Ovadiah Yosef held that it is a seudat mitzvah.\n[…]\nA bark mitzvah is a pseudo-traditional observance and celebration of a dog's coming of age, as in the Jewish traditional bar and bat mitzvahs. The term has been in use since at least 1958, when Beverly Hills couple Janet and Sonny Salter held a bark mitzvah for their 13 year old dog, Windy. Rabbi Charles A. Kroloff expressed his distaste for Bark Mitzvahs in a letter to the editor of The New York Times, describing the ceremony as \"nothing less than a desecration of a cherished Jewish tradition\".\n[…]\nMedia related to Bat mitzvah at Wikimedia Commons\n[…]\nChabad's Becoming a Bat Mitzvah\n[…]\nMy Jewish Learning – History of Bat Mitzvah"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bar_Mitzv%C3%A1",
        "situacao": "ok",
        "texto": "Bar Mitzvá (“filho do mandamento” ou “filho da lei”) é a cerimônia que insere o jovem judeu como um membro maduro na comunidade judaica. Iniciado como uma cerimônia folclórica, agora é parte universal do judaísmo oficial, tendo acabado como parte da lei escrita.\n[…]\nQuando um judeu atinge a sua maturidade (aos 12 anos de idade para as meninas, 13 anos de idade para os meninos), passa a se tornar responsável pelos seus atos, de acordo com a lei judaica. Nessa altura, diz-se que o menino passa a ser Bar Mitzvah ( בר מצוה , \"filho do mandamento\"); e a menina passa a ser Bat Mitzvá (בת מצוה, \"filha do mandamento\") que comemora a cerimônia ao completar 12 anos e 2 dias.\n[…]\nAntes desta idade, são os pais os responsáveis pelos atos dos filhos. Depois desta idade, os rapazes e moças podem finalmente participar em todas as áreas da vida da comunidade e assumir a sua responsabilidade na lei ritual judaica, tradição e ética. Segundo o Talmud (Avot 5:1; BT Yoma 82a; BT Baba Metziah 96a), aos 13 anos e 1 dia de idade um judeu se torna obrigado a obedecer mandamentos.\n[…]\nA ocasião mais importante na vida de um judeu chega quando ele atinge a idade para entrar na aliança com Deus e no compromisso de manter, estudar e praticar todos os mandamentos da Torá, aos treze anos de idade.\n[…]\nA prática mais comum é que no primeiro Sábado ao fazer treze anos, o menino é chamado para ler a porção semanal da Lei (cinco livros de Moisés), bem como a Haftará (seleção do livro dos Profetas). Se por algum motivo, ele não for capaz de ler, pelo menos realizar as bênçãos ditas antes e depois de cada leitura. É muito comum realizar o serviço durante um dia da semana antes do Sábado para que o menino coloque o Tefilin pela primeira vez.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Bar mitzvá",
      "descricao": "Cerimônia judaica em que o menino, aos treze anos, passa a ser responsável pelo cumprimento dos mandamentos religiosos."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Na cerimônia do bar mitzvá, o menino lê em público, na sinagoga, um trecho de qual texto sagrado?",
    "resposta": "Torá",
    "distratores": [
      "Talmude",
      "Livro dos Salmos",
      "Cabala"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Bar_and_bat_mitzvah"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bar_and_bat_mitzvah",
        "situacao": "ok",
        "texto": "A bar mitzvah (masculine) or bat mitzvah (feminine) is a coming of age ritual in Judaism. According to Jewish law, before children reach a certain age, the parents are responsible for their child's actions. Once Jewish children reach that age, they are said to \"become\" b'nai mitzvah, at which point they begin to be held accountable for their own actions. Traditionally, the father of a bar or bat m\n[…]\nSimon Tzemach Duran quotes a Midrash interpreting the Hebrew word zo (\"this\") in Isaiah 43:21 (\"These people have I formed for myself, they shall speak my praise\") as referring by its numerical value to those that have reached the age of 13. This seems to imply that, at the time of the composition of the Midrash the bar mitzvah publicly pronounced a blessing on the occasion of his entrance upon maturity.\n[…]\nThe majority of Orthodox and some Conservative Jews reject the idea that a woman can publicly read from the Torah or lead prayer services whenever there is a minyan (quorum of 10 males) available to do so. However, the public celebration of a girl becoming bat mitzvah in other ways has made strong inroads into Modern Orthodox Judaism and also into some elements of Haredi Judaism.\n[…]\nKaplan held the first public celebration of a bat mitzvah as we understand it in modern times for his daughter on March 18, 1922, at the Society for the Advancement of Judaism, his synagogue in New York City. Kaplan was unaware of the earlier Italian precedent and learned of them several months later, while on holiday in Italy. Judith Kaplan recited the preliminary blessing, read a portion of that week's Torah portion in Hebrew and English, and then intoned the closing blessing.\n[…]\nChabad's Bar Mitzvah\n[…]\nMy Jewish Learning – What Does Bar Mitzvah Mean?\n[…]\nMedia related to Bat mitzvah at Wikimedia Commons\n[…]\nChabad's Becoming a Bat Mitzvah\n[…]\nMy Jewish Learning – History of Bat Mitzvah"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bar_Mitzv%C3%A1",
        "situacao": "ok",
        "texto": "Bar Mitzvá (“filho do mandamento” ou “filho da lei”) é a cerimônia que insere o jovem judeu como um membro maduro na comunidade judaica. Iniciado como uma cerimônia folclórica, agora é parte universal do judaísmo oficial, tendo acabado como parte da lei escrita.\n[…]\nQuando um judeu atinge a sua maturidade (aos 12 anos de idade para as meninas, 13 anos de idade para os meninos), passa a se tornar responsável pelos seus atos, de acordo com a lei judaica. Nessa altura, diz-se que o menino passa a ser Bar Mitzvah ( בר מצוה , \"filho do mandamento\"); e a menina passa a ser Bat Mitzvá (בת מצוה, \"filha do mandamento\") que comemora a cerimônia ao completar 12 anos e 2 dias.\n[…]\nAo completar 13 anos, o homem é chamado pela primeira vez para a leitura da Torá (conhecido como Pentateuco pelos cristãos). Ao ser chamado pela primeira vez, o jovem pode, a partir daí, integrar o miniam (quórum mínimo de 10 homens adultos para realização de certas cerimônias judaicas).\n[…]\nO Bar Mitzváh não é só uma comemoração comum de aniversário, mas normalmente, o menino passa por um ritual de mazal-tov que seria como um boa sorte ou parabéns (dependendo da situação), normalmente o mazal-tov é feito com o(a) menino(a) sobre uma cadeira e ele(a) é levantado várias vezes, e assim fazem com toda a família do Barmitzvano.\n[…]\nA ocasião mais importante na vida de um judeu chega quando ele atinge a idade para entrar na aliança com Deus e no compromisso de manter, estudar e praticar todos os mandamentos da Torá, aos treze anos de idade.\n[…]\nSe por algum motivo a cerimónia seja postergada para um sábado futuro, seja por desejo, tempo para que alguém da família compareça, ou outro motivo qualquer, não posterga o menino das obrigações de ser um adulto judeu.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Matrioska",
      "descricao": "Conjunto russo de bonecas de madeira ocas que se encaixam umas dentro das outras."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome matrioska vem de Matriona, nome feminino comum na Rússia, ligado a uma palavra latina. Qual é o sentido dessa palavra?",
    "resposta": "Mãe",
    "distratores": [
      "Avó",
      "Filha",
      "Rainha"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Matryoshka_doll"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Matryoshka_doll",
        "situacao": "ok",
        "texto": "A matryoshka doll or matryoshka (; Russian: матрёшка), also known as a Russian stacking doll, nesting doll, or simply a Russian doll, is a set of wooden dolls of decreasing size placed one inside another. Matryoshka is a diminutive form of Matryosha (Матрёша), in turn an affectionate form of the Russian female first name Matryona (Матрёна).\n[…]\nToday, some Russian artists specialize in painting themed matryoshka dolls that feature specific categories of subjects, people, or nature. Areas with notable matryoshka styles include Sergiyev Posad, Semionovo (now the town of Semyonov), Polkhovsky Maydan, and the city of Kirov.\n[…]\nThe largest set of matryoshka dolls in the Guinness World Records is a 51-piece set hand-painted by Youlia Bereznitskaia (Russian: Юлия Березницкая) of Russia, completed in 2003. The tallest doll in the set measures 53.97 centimetres (21.25 in); the smallest, 0.31 centimetres (0.12 in). Arranged side-by-side, the dolls span 3.41 metres (11 ft 2.25 in). However, several larger sets are known.\n[…]\nThe largest collection of matryoshkas in the United States is in the Museum of Russian Art (Minnesota), which keeps about 3,500 matryoshkas.\n[…]\nExamples of metaphorical use of matryoshka include the matrioshka brain, the Matroska media-container format, and the Russian Doll model of multi-walled carbon nanotubes.\n[…]\nMatryoshka is often seen as a symbol of the feminine side of Russian culture. Matryoshka is associated in Russia with family and fertility. Matryoshka is used as the symbol for the epithet Mother Russia.\n[…]\nIn 2020, the Unicode Consortium approved the matryoshka doll () as one of the new emoji characters in release v.13. The matryoshka or nesting doll emoji was submitted to the consortium by Jef Gray and Samantha Sunne, as a non-religious, apolitical symbol of Russian-East European-Far East Asian culture."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Matriosca",
        "situacao": "ok",
        "texto": "Uma matriosca (russo: матрёшка; romanizado: matrioshka) ou boneca-russa, é um tradicional brinquedo russo. Constitui-se de uma série de bonecas, feitas geralmente de madeira, colocadas umas dentro das outras, da maior (exterior) até a menor (a única que não é oca). A palavra provém do diminutivo do nome próprio matriona.\n[…]\nO número de figuras que se conseguem encaixar é, geralmente, de seis ou sete, ainda que existam algumas com um número impressionante de peças. A sua forma é simples, mais ou menos cilíndrica e arredondada e mais estreita na parte superior, onde se situa a cabeça das bonecas. Não têm mãos (a não ser as que são pintadas nas suas superfícies). A sofisticação das matrioscas reside, de fato, na complexidade dos motivos pintados.\n[…]\nOutra característica que diferencia as diversas peças são as figuras que encarnam: desde figuras femininas vestidas com trajes tradicionais campesinos, a personagens de contos de fadas e até mesmo a antigos líderes da União Soviética.\n[…]\nNa Sérvia, a versão feminina é designada como бабушка (babushka), que significa \"avozinha\", enquanto a versão masculina é designada como дедушка (dyedushka), \"avozinho\".[carece de fontes]? Conta-se que Sergei Maliutin, um pintor artesanal de Abramtsevo, viu uma série de bonecos de madeira representando os Shichi-fuku-jin, os Sete Deuses da Fortuna, encaixados de forma semelhante às bonecas atuais.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Samovar",
      "descricao": "Recipiente de metal de origem russa, tradicionalmente usado para aquecer e ferver água para o chá."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O samovar, usado pelos russos para esquentar a água do chá, tem um nome que significa literalmente o quê?",
    "resposta": "Que ferve sozinho",
    "distratores": [
      "Chaleira de cobre",
      "Fogo da casa",
      "Pote de chá"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Samovar"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Samovar",
        "situacao": "ok",
        "texto": "A samovar (Russian: самовар, IPA: [səmɐˈvar] , lit. 'self-brewer') is a metal container traditionally used to heat and boil water. Although originating in Russia, the samovar is well known outside of the country and has spread through Russian culture to other parts of Eastern Europe, as well as West and Central and South Asia.\n[…]\nThe Russian word was adopted as  Persian: سماور samovar, and Turkish: semaver.\n[…]\nBorujerd's samovars are often made with German silver, in keeping with the varshosazi artistic style. Iranian craftsmen used Persian art motifs in their samovar production. The art samovars of Borujerd are often displayed in Iranian and Western museums as illustrations of Iranian art and handicraft.\n[…]\nKashmiri samovars are made of copper, sometimes with engraved or embossed calligraphic motifs. Historically, the Kashmiris made two variants of samovar; copper samovars typically used by Muslims as well as brass samovars with a nickel-plated inner lining used by local Hindus called Kashmiri Pandit. Inside a samovar there is a heating element in which charcoal and live coals are placed in order to boil water. Green tea leaves, salt, cardamom, and cinnamon are often brewed with these samovars.\n[…]\nTurkish samovars are popular souvenirs among tourists, and charcoal burning samovars are still popular in rural areas. However, in modern homes, they have been replaced with the çaydanlık (lit. 'teapot'), a metal teapot with a smaller teapot on top taking the place of the cap of the lower one. To make Turkish tea, the lower part is used to boil the water and the upper part, called demlik is used for concentrated tea.\n[…]\nVarsho samovars of Borujerd, Iran.\n[…]\nIsrafil, Nabi (1990), Samovars: The Art of the Russian Metal Workers, Fil Caravan, ISBN 978-0-9629138-0-8.\n[…]\nRussian Samovar at A History of Central Florida Podcast"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Samovar",
        "situacao": "ok",
        "texto": "Samovar é um utensílio culinário de origem russa utilizado para aquecer água e servir chá, sendo muito apreciado pelos czares. Este utensílio aparece com frequência na literatura russa do século XIX, em obras de Tolstói (por exemplo, em Ressurreição), Dostoiévski e Máximo Gorki (por exemplo, em Vassa Zheleznova).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Ushanka",
      "descricao": "Chapéu russo de pele com abas que cobrem as orelhas, usado contra o frio."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome do chapéu russo de pele ushanka vem da palavra russa para qual parte do corpo?",
    "resposta": "Orelhas",
    "distratores": [
      "Cabeça",
      "Testa",
      "Nuca"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Ushanka"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ushanka",
        "situacao": "ok",
        "texto": "An ushanka (Russian: ушанка, IPA: [ʊ.ˈʂan.kə], from уши, ushi, 'ears'), also called an ushanka-hat (Russian: шапка-ушанка, romanized: shapka-ushanka, [ˈʂap.kə ʊ.ˈʂan.kə]), is a Russian fur hat with ear-covering flaps that can be tied up on the crown of the cap, or fastened at the chin to protect the ears, jaw, and lower chin from the cold.\n[…]\nThe ushanka was used by the East German authorities before German reunification, and remained part of the German police uniform in winter afterwards. In the Finnish Defence Forces, a gray hat is used with M62 uniform and a green one of different design is a part of M91 and M05 winter dress. Armoured troops have a black hat (M92), while generals may wear a white M39 hat. The Royal Canadian Mounted Police use a \"regulation hat\" (between an ushanka and an aviator hat), made of muskrat fur.\n[…]\nIt is claimed that British wartime airmen visiting the Kola Inlet to help to protect the Arctic convoys quickly started to wear ushankas because their own uniform hats were not warm enough, but \"kept the ear flaps tied up to the crown as any Russian would, because it was considered unmanly to wear them down.\" However, in the Russian military up to this day, the way of wearing the ushanka—up flaps, down flaps or ski-style—is considered a part of uniform of the day and is usually decided by a unit commander at reveille.\n[…]\nTrapper hats are \"a sort of hybrid between the aviator cap and the ushanka—they combine the style of the former with the furriness of the latter\". They are considered more casual than the military-derived ushanka.\n[…]\nThe Royal Canadian Mounted Police use muskrat ushankas.\n[…]\nCanadian military fur wedge cap, styled as an ushanka, used in winter by the Royal Canadian Mounted Police and made from muskrat\n[…]\nThe dictionary definition of ushanka at Wiktionary"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ushanka",
        "situacao": "ok",
        "texto": "Ushanka (em russo: уша́нка, [uˈʂan.kə]) é uma espécie de gorro, típico da Rússia, especialmente para proteção da cabeça durante o rígido inverno daquele país, e confeccionado com a pele de animais como a zibelina ou outros mais comuns. A ushanka é amarrada ao queixo, e em língua inglesa muitas vezes é traduzido como shapka (шáпкa) — que é a palavra russa para chapéu. Numa tradução literal, porém, \n[…]\nEmbora as ushankas sejam um chapéu tipicamente russo (e, de fato, o estereótipo do russo sempre usa um deles), o uso de chapéus com desenho semelhante encontra-se na China, Coreia do Norte, Europa Oriental e a extinta União Soviética, com suas repúblicas daí oriundas. As ushankas são comuns em algumas cidades norte-americanas como Chicago ou Illinois, nos meses frios do inverno, especialmente em bairros de forte imigração do leste europeu.\n[…]\nA ushanka foi utilizada como parte dos uniformes de inverno da União Soviética e da China. De fato, foi apenas em 2013 que a ushanka deixou de fazer parte do uniforme oficial do exército russo.\n[…]\nEntre os russos não é considerado masculino o uso das orelheiras abaixadas, entretanto é comum os lixeiros ali serem retratados, estereotipadamente, usando suas ushankas com as pontas desamarradas, uma apontando para cima e outra para baixo.\n[…]\nSão feitas frequentemente com pele de coelho ou rato-almiscarado, como também de outros animais como lobos ou mesmo cães e, em confecção mais aprimorada, com pelo de marta, raposas, ou lã de alta qualidade.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Songkran",
      "descricao": "Ano-novo tradicional tailandês, celebrado em abril com uma grande guerra de água nas ruas."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Songkran, o ano-novo tailandês da guerra de água, tem um nome vindo do sânscrito. O que essa palavra significa?",
    "resposta": "Transição astrológica",
    "distratores": [
      "Água sagrada",
      "Novo sol",
      "Lua cheia"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Songkran_(Thailand)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Songkran_(Thailand)",
        "situacao": "ok",
        "texto": "Thai New Year, also known as Songkran (Thai: สงกรานต์, pronounced [sǒŋ.krāːn]), or the Songkran Festival (Songkran Splendours), is the Thai New Year's national holiday. It is celebrated annually on 13 April, with the holiday period extending from 14 to 15 April.\n[…]\nSongkran is a Thai word, derived from Sanskrit Saṅkrānti (संक्रान्ति), meaning \"to move\", \"movement\", \"the passing of\", or \"astrological passage\". The term refers to the movement of the sun from one position to another in the zodiac.\n[…]\nIt also includes detailed information on the correct Songkran date and religious observances. Some astrologers, particularly in northern Thailand, still issue their own Songkran announcements with predictions and related information.\n[…]\nThe table below lists the start and end dates of the Songkran festival as derived from the formulas above. The Chinese zodiac for each year is also included, as it is used in Thai astrology. However, the Chinese zodiac changes at Lichun, just before the Chinese New Year in February, whereas Thai astrology uses the first day of the fifth lunar month (roughly the new moon in late March to early April). Before this cutoff, astrologers use the zodiac of the previous year.\n[…]\n\"During the year, Siamese also have several days of civil or religious festivals, which they celebrate with great splendor: 1°Songkran; it is Siamese New Year, which usually falls in April (fifth month in brahman calendar); it held an observance for three days; Siamese people's able to acknowledge horoscope from astrologers whether the angel of the year to ride a tiger, an ox, a bear, a horse, a goat, a dragon or other animals during this festival only.\"\n[…]\nMedia related to Songkran in Thailand at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Songkran",
        "situacao": "ok",
        "texto": "O Songkran (em tailandês: สงกรานต์ Songkran, o sânscrito \"passar ou mover-se para\"), também chamado de Ano-Novo Tailandês começa oficialmente a ser celebrado no primeiro dia da quinta lua crescente e dura três dias, geralmente de 13 a 15 de abril.\n[…]\nO Songkran na prática, lembra as festas de réveillon ocidentais, em que se tem a ideia de deixar para trás o que não deu certo e renovar energias e esperanças para o novo ano. Esse também, é considerado o tempo de visitar a família, fazer faxina na casa, orar nos templos budistas. A tradição, pede além isso que se libertem pássaros engaiolados ou peixes em cativeiro.\n[…]\nNa Tailândia, nos três dias do Songkran, as pessoas costumam vestir seus melhores trajes tomam as ruas para jogar água umas nas outras e observar os monges enquanto estes abençoam casas e imagens de Buda banhadas com águas e essências. Os tailandeses, também jogam água nas estátuas dos Budas como forma de respeito. Se você participar de um momento como esse, nunca deve jogar água na cabeça do Buda, apenas dos ombros para baixo para mostrar sinal de respeito.\n[…]\no Songkran pode ter desde tributos aos mais velhos da família até a guerra de água com os elefantes. Há um preparação para a comemoração baseada na decoração dos elefantes que iram desfilar e fazer parte da celebração da guerra de água. A crença desse tipo de celebração está baseada no ritual do banho, lavando a alma das coisas ruins e começo de uma fase nova.\n[…]\nNo Brasil, o Songkran ainda é muito pouco conhecido, mas a cada ano vem sendo mais festejado com incensos, flores, cardápios especiais e pequenos rituais nos restaurantes tailandeses paulistanos.\n[…]\nhttps://phiphibrazuca.com/como-e-o-ano-novo-tailandes-songkran-2023-e-2024/\n[…]\nCultura da Tailândia",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Nowruz",
      "descricao": "Ano-novo persa, celebrado no Irã, na Ásia Central e em outras regiões de influência persa."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Em persa, o que significa a palavra Nowruz, nome do ano-novo celebrado no Irã?",
    "resposta": "Novo dia",
    "distratores": [
      "Nova lua",
      "Primavera",
      "Luz nova"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Nowruz"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Nowruz",
        "situacao": "ok",
        "texto": "Nowruz (Persian: نوروز, Iranian Persian: [noːˈɾuːz], lit. 'New Day') is New Year's Day on the Iranian calendars, including the currently used Solar Hijri calendar. Historically, it has been observed by Iranian peoples, but is now celebrated by many Persianate cultures worldwide. It is a festival based on the Northern Hemisphere spring equinox, and thus usually coincides with a date between 19 Marc\n[…]\nAccording to Mary Boyce, \"It seems a reasonable surmise that Nowruz, the holiest of them all, with deep doctrinal significance, was founded by Zoroaster himself\"; although there is no clear date of origin. Between sunset on the day of the sixth Gahambar and sunrise of Nowruz, Hamaspathmaedaya (later known, in its extended form, as Frawardinegan; and today is known as Farvardigan) was celebrated. This and the Gahambars are the only festivals named in the surviving text of the Avesta.\n[…]\nNowruz is not celebrated by Georgians, but it is widely celebrated by the country's large Azerbaijani minority (~7% of the total population) as well as by Iranians living in Georgia. Every year, large festivities are held in the capital Tbilisi, as well as in areas with a significant number of Azerbaijanis, such as the Kvemo Kartli, Kakheti, Shida Kartli, and Mtskheta-Mtianeti regions.\n[…]\nAs a result the prices of Haft Sin items and traditional Nowruz foods in Iran have significantly increased, reflecting the country's ongoing economic challenges and high inflation rates.\n[…]\nThe day also assumes special significance for Shias as it has been said that it was on 16 March 632 AD, that the first Shia Imam, Ali, assumed the office of caliphate. Shia Imami Ismaili Muslims around the globe celebrate Nowruz as a religious festival. Special prayers and Majalis are arranged in Jamatkhanas. Special foods are cooked and people share best wishes and prayers with each other.\n[…]\n\"Nowruz\" at Encyclopædia Iranica"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Noruz",
        "situacao": "ok",
        "texto": "Noruz (em pársi نوروز; também transliterado como Nowroz, Noe - Rooz, Norooz, Novruz, Noh Ruz, Nav-roze, Navroz ou Náw-Rúz; em português: 'Dia Novo') é uma festa tradicional da Ásia Central que celebra o Ano Novo do calendário persa — marcando a renovação da natureza (primeiro dia da primavera). O Noruz pode acontecer no dia 20, 21 ou 22 de março do calendário Gregoriano, a depender do momento (dia\n[…]\nA festa do Ano Novo é geralmente uma efeméride na qual as pessoas expressam o desejo de prosperidade e renovação das suas vidas. Em muitas partes do Afeganistão, Azerbaijão, Cazaquistão, Índia, Irão, Iraque, Paquistão, Quirguistão, Tajiquistão, Turquemenistão, Turquia e Uzbequistão, este evento tem lugar no dia 21 de março e recebe a denominação Nauryz, Navruz, Nawruz, Nevruz, Novruz, Nowruz ou Nuruz, que têm o mesmo significado de \"novo dia\" nas diferentes línguas destes países.\n[…]\nA palavra Noruz é formada pelos vocábulos persas nov (também transliterada como nou, now, nev, etc.), que significa 'novo' (também nos idiomas curdo, avéstico, sânscrito e várias outras línguas indo-européias) e roz ou ruz ou, ainda, rozh, proveniente do avéstico rəzaŋh, que significa 'dia' ou 'luz do dia' e que, em persa médio e em pársi, manteve o mesmo significado. Em curdo, o termo apresenta variações dialetais ou de transliteração, tais como Newroz, Nûroj ou Neweroc.\n[…]\nHaft sîn (em pársi: هفت سین) ou \"sete sîn\" é uma tradição ligada ao Noruz. No ano-novo, sete itens, cujos nomes comecem com a letra sîn (س no alfabeto perso-árabe), devem ser dispostos sobre uma mesa ou sobre tapetes, em um espaço reservado para receber convidados. Originalmente chamada haft chin (هفت چین), a tradição evoluiu mas manteve seu simbolismo, e as famílias procuram arrumar os objetos do modo mais decorativo possível. Segundo a tradição, os sete objetos são:\n[…]\n«The Origin, History & Symbolism of No Ruz (Nowruz)» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Pessach",
      "descricao": "Festa judaica que celebra a libertação dos hebreus da escravidão no Egito, também chamada Páscoa judaica."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "A palavra Páscoa vem do nome da festa judaica Pessach, que lembra a saída do Egito. O que significa Pessach?",
    "resposta": "Passagem",
    "distratores": [
      "Libertação",
      "Pão sem fermento",
      "Sacrifício"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Passover",
      "https://en.wikipedia.org/wiki/Easter"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Passover",
        "situacao": "ok",
        "texto": "Passover, also called Pasch () or Pesach (; Biblical Hebrew: חַג הַפֶּסַח, romanized: Ḥag Ha‑Pesaḥ, lit. 'Pilgrimage of the Passing Over'), or Peysekh in Yiddish, is a major Jewish holiday and one of the Three Pilgrimage Festivals. It celebrates the Exodus of the Israelites from slavery in Egypt.\n[…]\nToday, in the absence of the Temple, when no sacrifices are offered or eaten, the mitzvah of the sacrifice is memorialized in the Seder Korban Pesach, a set of scriptural and Rabbinic passages dealing with the Passover sacrifice, customarily recited after the Mincha (afternoon prayer) service on the 14th of Nisan, and in the form of the zeroa, a symbolic food placed on the Passover Seder Plate (but not eaten), which is usually a roasted shankbone (or a chicken wing or neck).\n[…]\nThis holiday commemorates the day the Children of Israel reached the Red Sea and witnessed both the miraculous \"Splitting of the Sea\" (Passage of the Red Sea), the drowning of all the Egyptian chariots, horses and soldiers that pursued them. According to the Midrash, only the Pharaoh was spared to give testimony to the miracle that occurred.\n[…]\nSaint Thomas Syrian Christians observe Maundy Thursday as Pesaha, a Malayalam word derived from the Aramaic or Hebrew word for Passover (Pasha, Pesach or Pesah) The tradition of consuming Pesaha Appam after the church service is observed by the entire community under the leadership of the head of the family.\n[…]\nChristianity celebrates Easter (not to be confused with the pre-Christian Saxon festival from which it derives its English name). The coincidence of Jesus' crucifixion with the Jewish Passover led some early Christians to make a false etymological association between Hebrew Pesach and Greek pascho (\"suffer\").\n[…]\nAll about Pesach\n[…]\nSecular dates for passover"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Easter",
        "situacao": "ok",
        "texto": "Easter, also called Pasch () or Pascha or Resurrection Sunday, is a Christian celebration and cultural holiday commemorating the resurrection of Jesus from the dead, described in the Bible's New Testament as having occurred on the third day of his burial following his crucifixion by the Romans at Calvary c. 30 AD. It is the culmination of the Passion of Jesus, preceded by Lent (or Great Lent), a 4\n[…]\nEaster is linked to the Jewish Passover by its name (Hebrew: פֶּסַח, pesach; Imperial Aramaic: פָּסחָא, romanized: pascha; whence the term Pascha), by its origin (according to the synoptic Gospels, both the crucifixion and the resurrection took place during the week of Passover) and by much of its symbolism, as well as by its position in the calendar.\n[…]\nIn Latin and Greek, the Christian celebration was, and still is, called Pascha (Greek: Πάσχα), a word derived from Aramaic פסחא (Paskha), cognate to the Hebrew פֶּסַח (Pesach). The word originally denoted the Jewish festival known in English as Passover, commemorating the Israelite Exodus from slavery in Egypt. As early as 50 AD, Paul the Apostle, writing from Ephesus to the Christians in Corinth, applied the term to Christ.\n[…]\nCheese paskha is a traditional Easter dish made from tvorog (like cottage cheese), which is white, symbolizing the purity of Christ, the Paschal Lamb, and the joy of the Resurrection. It is formed in a mold, traditionally in the shape of a truncated pyramid which symbolizes the first Passover in Egypt, a nod to Christianity's early Jewish beginnings and a reminder that the Last Supper of Jesus was a Passover Seder.\n[…]\nA Perpetual Easter and Passover Calculator Julian and Gregorian Easter for any year plus other info"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pessach",
        "situacao": "ok",
        "texto": "Pessach (do hebraico פסח, que significa passar por cima ou passar sobre), também conhecida como \"Festa da Libertação\", celebra a história bíblica da libertação dos hebreus da escravidão no Egito.\n[…]\nÉ importante notar que a palavra Pessach significa \"passagem\", porém a passagem do anjo de morte, e não a passagem dos hebreus pelo Mar Vermelho ou outra passagem qualquer, apesar do nome evocar vários simbolismos.\n[…]\nPessach é hoje uma festa central do Judaísmo e serve como uma conexão entre o povo judeu e sua história. Antes do início da festa, os judeus removem todos os alimentos fermentados (chamados chametz) de seus lares e os queimam. Não é permitido permanecer com chametz durante a Pessach. Os objetos de chametz são escondidos, e outros, passíveis de um processo de casherização, são mantidos; os utilizados para cozinhar passam pelo fogo, e os de comidas frias passam pela água.\n[…]\nA festa de Pessach é antes de tudo uma festa familiar, onde nas primeiras duas noites (mas somente na primeira noite em Israel) é realizado um jantar especial chamado de Sêder de Pessach. Neste sêder a história do Êxodo do Egito é narrada, e se faz as leituras das bençãos, das histórias da Hagadá, de parábolas e canções judaicas. Durante a refeição, come-se matzá (pão ázimo) e ervas amargas.\n[…]\nEsta é a ordem a ser seguida no Seder de Pessach:\n[…]\nMaguid (מגיד - conto) - Conta-se a história do êxodo do Egito e sobre a instituição de Pessach.Inclui a recitação das \"Quatro perguntas\" e bebe-se o segundo copo de vinho.\n[…]\nChag Matzot (festa dos pães ázimos) é o nome dado ao sete dias de comemoração após Pessach. De acordo com a Torá é proibido ingerir chametz durante este período.\n[…]\nSeder de Pessach",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Holi",
      "descricao": "Festa hindu da primavera, conhecida como festa das cores, em que as pessoas se jogam pó colorido e água."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome do Holi, a festa hindu das cores, vem de qual demônia da mitologia, queimada numa fogueira acesa na véspera?",
    "resposta": "Holika",
    "distratores": [
      "Putana",
      "Surpanakha",
      "Tataka"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Holi",
      "https://en.wikipedia.org/wiki/Holika"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Holi",
        "situacao": "ok",
        "texto": "Holi (IPA: ['hoːli:, hoːɭiː]) is a major Hindu festival of colours, love and spring. It celebrates the love between the deities Radha and Krishna.\n[…]\nAs the fire spread, the cloak flew from Holika and encased Prahlada, who survived while Holika burned.\n[…]\nThe Holika bonfire and Holi signifies the celebration of the symbolic victory of good over evil, of Prahlada over Hiranyakashipu, and of the fire that burned Holika.\n[…]\nAlthough Holika was endowed with a boon to remain immune to fire, she was burned to ashes, while Prahlada remained unharmed.\n[…]\nHoli is known as Phaguwa or Fagua in the Bhojpuri language. In this region as well, the legend of Holika is prevalent. On the eve of Phalgun Poornima, people light bonfires. They put dried cow dung cakes, wood of the Araad or Redi tree and Holika tree, grains from the fresh harvest and unwanted wood leaves in the bonfire. At the time of Holika people assemble near the pyre. The eldest member of the gathering or a purohit initiates the lighting.\n[…]\nHoli festivities (but not Śigmo festivities) include: Holika Puja and Dahan, Dhulvad or Dhuli vandan, Haldune or offering yellow and saffron colour or Gulal to the deity.\n[…]\nHoli is preceded by Holika Dahan the night before when a fire is lit. Historically, the Lubana community of Punjab celebrated holi \"with great pomp and show. The Lubanas buried a pice and betel nut. They heaped up cow-dung cakes over the spot and made a large fire. When the fire had burnt out, they proceeded to hunt for the pice and betel-nut. Whosoever found these, was considered very lucky.\" Elsewhere in Punjab, Holi was also associated with making fools of others.\n[…]\nLathmar Holi"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Holika",
        "situacao": "ok",
        "texto": "Holika (Sanskrit: होलिका, IAST: Holikā) is an asuri in Hinduism. She is the sister of the asura-kings Hiranyakashipu and Hiranyaksha, and the paternal aunt   of Prahlada.\n[…]\nAccording to Hindu tradition, the legend of Holika Dahan (the burning of Holika) symbolizes the victory of good over evil. Holika is associated with the annual bonfire on the night before Holi, the festival of colours.\n[…]\nThis infuriated Hiranyakashipu, and he made various attempts to kill Prahlada. During one attempt on Prahlada's life, King Hiranyakashipu's sister, Holika, offered her help. According to the Vishnu Purana, Holika told her brother that, due to a boon she had received, she was invulnerable to fire. Arrangements were made for Prahlada to sit upon his aunt's lap atop a burning pyre. However, as Prahlada chanted the name of Vishnu, he escaped unscathed while Holika was incinerated.\n[…]\nIn a variation of this Puranic legend, Hiranyakashipu had Holika wear her scarf or her fireproof garment, so that his son would perish while she remained protected atop the pyre. Yet as the fire intensified, the garment flew off Holika and covered Prahlada. Holika burnt to death, and Prahlada emerged unharmed.\n[…]\nHolika Dahan is the ceremonial act of lighting a bonfire to celebrate the death of Holika and salvation of Prahlada. Various rituals accompany this ceremony that differ across regions in India, including  circumambulating the fire and offering various items such as coconuts, barley, wheat and cow dung into the fire. The night before Holi, pyres are burnt in North India, to commemorate this legend."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Holi",
        "situacao": "ok",
        "texto": "Holi ou Festival das Cores é um festival realizado na Índia e em alguns outros lugares todos os anos entre fevereiro e março, que comemora a chegada da Primavera. Neste dia, as pessoas atiram tintas das mais diversas cores umas às outras, com muita bebida, comida e música.\n[…]\nHoli, também chamado de Festival das Cores, é um popular festival  Primavera observado na Índia, Suriname, Guiana, Trindade, Reino Unido, Ilhas Fiji e no Nepal. Em Bengala Ocidental da Índia e do Bangladesh, é conhecido como Dolyatra (Doljatra) ou Boshonto Utsav ( \"Festa da Primavera\").\n[…]\nHiaranyakashyap combinou com a sua terrível irmã Holika, que tinha o poder de não se queimar, que ela entraria numa fogueira com Prahlad em seus braços para matá-lo. Mas foi Holika quem morreu carbonizada por não saber que o seu poder de enfrentar o fogo seria anulado quando entrasse na fogueira acompanhada de outra pessoa. O deus Vishnu reconheceu a bondade e devoção de Prahlad e salvou-o. O festival, portanto, celebra a vitória de um deus contra o outro e o triunfo da devoção.\n[…]\nA tradição da queima Holika ou o \"Holika Dahan\" vem principalmente a partir desta lenda.\n[…]\nApesar de esta ser uma festa colorida, existem vários aspectos de Holi, o que o torna tão importante para a cultura da Índia. Embora possa não ser tão evidente, um olhar mais atento e um pouco de pensamento revelará o significado do Holi em mais formas do que aquilo que simplesmente se vê.\n[…]\nHoli celebra também a lenda de Radha e Krishna, que descreve o extremo prazer que Krishna teve na aplicação de cor sobre Radha e Gopis. Esta brincadeira de Krishna mais tarde, tornou-se uma tendência e uma parte das festividades do Holi.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Holi",
      "descricao": "Festa hindu da primavera, conhecida como festa das cores, em que as pessoas se jogam pó colorido e água."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "O Holi, festa hindu em que multidões se cobrem de pó colorido, celebra a chegada de qual estação do ano?",
    "resposta": "Primavera",
    "distratores": [
      "Verão",
      "Monção",
      "Outono"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Holi"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Holi",
        "situacao": "ok",
        "texto": "Holi (IPA: ['hoːli:, hoːɭiː]) is a major Hindu festival of colours, love and spring. It celebrates the love between the deities Radha and Krishna.\n[…]\nThere is a symbolic legend found in the 7th chapter of the Bhagavata Purana explaining why Holi is celebrated as a festival of triumph of good over evil in the honour of Hindu god Vishnu and his devotee Prahlada.\n[…]\nIn 1837, Sir Henry Fane who was the commander-in-chief of the British Indian army joined the Holi celebrations organised by Ranjit Singh. A mural in the Lahore Fort was sponsored by Ranjit Singh and it showed the Hindu god Krishna playing Holi with gopis. After the death of Ranjit Singh, his Sikh sons and others continued to play Holi every year with colours and lavish festivities. The colonial British officials joined these celebrations.\n[…]\nIn Mughal India, Holi was at times suppressed, and at others celebrated with such exuberance that Hindu citizens of all castes could throw colour on the Muslim Mughal Emperor.\n[…]\nHoli is celebrated by the minority Hindu population in Pakistan. Community events by Hindus have been reported by Pakistani media in various cities such as Karachi, Hazara, Rawalpindi, Sindh, Hyderabad, Multan and Lahore. The Hindu tribes of Cholistan play the game called Khido in the days leading up to the Holi. The game Khido is considered sacred by them as it is believed that Parhlad used to play this game during his childhood.\n[…]\nHoli is celebrated as a social event in parts of the United States. For example, at Sri Sri Radha Krishna Temple in Spanish Fork, Utah, NYC Holi Hai in Manhattan, New York, and Festival of Colors: Holi NYC in New York City, New York."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Holi",
        "situacao": "ok",
        "texto": "Holi ou Festival das Cores é um festival realizado na Índia e em alguns outros lugares todos os anos entre fevereiro e março, que comemora a chegada da Primavera. Neste dia, as pessoas atiram tintas das mais diversas cores umas às outras, com muita bebida, comida e música.\n[…]\nHoli, também chamado de Festival das Cores, é um popular festival  Primavera observado na Índia, Suriname, Guiana, Trindade, Reino Unido, Ilhas Fiji e no Nepal. Em Bengala Ocidental da Índia e do Bangladesh, é conhecido como Dolyatra (Doljatra) ou Boshonto Utsav ( \"Festa da Primavera\").\n[…]\nO principal dia, Holi, também conhecido como Dhulheti, Dhulandi ou Dhulendi, é celebrado por pessoas que atiram água e pó colorido uns aos outros. As pessoas cumprimentam-se dizendo “Holi Hai”.\n[…]\nHiaranyakashyap combinou com a sua terrível irmã Holika, que tinha o poder de não se queimar, que ela entraria numa fogueira com Prahlad em seus braços para matá-lo. Mas foi Holika quem morreu carbonizada por não saber que o seu poder de enfrentar o fogo seria anulado quando entrasse na fogueira acompanhada de outra pessoa. O deus Vishnu reconheceu a bondade e devoção de Prahlad e salvou-o. O festival, portanto, celebra a vitória de um deus contra o outro e o triunfo da devoção.\n[…]\nApesar de esta ser uma festa colorida, existem vários aspectos de Holi, o que o torna tão importante para a cultura da Índia. Embora possa não ser tão evidente, um olhar mais atento e um pouco de pensamento revelará o significado do Holi em mais formas do que aquilo que simplesmente se vê.\n[…]\nHoli celebra também a lenda de Radha e Krishna, que descreve o extremo prazer que Krishna teve na aplicação de cor sobre Radha e Gopis. Esta brincadeira de Krishna mais tarde, tornou-se uma tendência e uma parte das festividades do Holi.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Dia dos Mortos",
      "descricao": "Celebração mexicana do início de novembro em que as famílias homenageiam seus mortos com altares e oferendas."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Que animação da Pixar, sobre um menino que sonha ser músico, se passa durante o Dia dos Mortos mexicano?",
    "resposta": "Viva: A Vida é uma Festa",
    "distratores": [
      "Encanto",
      "Festa no Céu",
      "Divertida Mente"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Coco_(2017_film)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Coco_(2017_film)",
        "situacao": "ok",
        "texto": "Coco is a 2017 American animated musical fantasy film directed by Lee Unkrich, and written by Adrian Molina and Matthew Aldrich. Produced by Pixar Animation Studios for Walt Disney Pictures, the film stars the voices of Anthony Gonzalez, Gael García Bernal, Benjamin Bratt, Alanna Ubach, Renée Victor, Ana Ofelia Murguía and Edward James Olmos.\n[…]\nThe first teaser of Coco was released on March 15, 2017. The teaser trailer introduced the basic concept of the film while highlighting its focus on music. Scott Mendelson of Forbes praised the trailer as \"a terrific old-school Pixar sell, mostly consisting of a single sequence and offering just the barest hint of what's to come.\" The film's themes and imagery drew comparison to another animated film that centered around el Día de los Muertos, The Book of Life (2014).\n[…]\nIn 2018, several Mexican news outlets reported that Disney and Pixar had failed to disclose that the producers for Coco had based the character of Mamá Coco on María de la Salud Ramírez Caballero from the Purépecha village of Santa Fe de la Laguna, \"a town of Purépecha potters in Quiroga, Michoacán.\" In a news interview, Salud stated that the producers \"offered me so many things, but nothing came of it. They only came and took my picture and took it with them. They asked me what I need.\n[…]\nWhile the production team at Disney and Pixar have recognized that they \"based the Rivera family—a multigenerational matriarchy headed by Miguel's formidable grandmother—on real-world families with whom they embedded while visiting the Mexican states of Oaxaca and Guanajuato between 2011 and 2013\", they have not acknowledged Salud's contribution to the film.\n[…]\nThe Book of Life, a 2014 animated film featuring a Mexican-style realm of the dead."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Coco_%28filme%29",
        "situacao": "ok",
        "texto": "Coco (bra: Viva: A Vida é uma Festa, ou Viva - A Vida é uma Festa; prt: Coco) é um filme musical de animação computadorizada norte-americano de 2017, produzido pela Pixar Animation Studios e distribuído pela Walt Disney Studios Motion Pictures.\n[…]\nO conceito do filme é baseado no feriado mexicano de Dia dos Mortos. Coco foi roteirizado por Molina e Matthew Aldrich a partir de uma história de Unkrich, Jason Katz, Aldrich e do próprio Molina. A Pixar começou a desenvolver a animação do projeto em 2016; Unkrich e alguns dos responsáveis pelo filme visitaram o México para buscar inspiração.\n[…]\nEm 15 de agosto de 2015, a Pixar confirmou o título do filme, inspirado no feriado mexicano do Día de Muertos, na D23 Expo. Foi dirigido por Lee Unkrich, que também foi responsável pela direção de Toy Story 3, e a descrição oficial afirma que \"Coco é a celebração de uma vida, onde a descoberta de mistérios das gerações antigas leva a uma extraordinária e surpreendente reunião de família\". Em 13 de abril de 2016, Unkrich anunciou que eles começaram a animação.\n[…]\nO Mundo dos Mortos é inspirado na cidade mexicana de Guanajuato, que é conhecida por suas casas coloridas ao lado de colinas, muito parecidas com as que aparecem no filme.\n[…]\nScott, do The New York Times, elogiou o filme, o comparando a \"uma experimentada melodia com originalidade e estilo cativante, com a erudição itinerante e divertida da cultura pop\", e considerou a energia cultural do filme como \"inclusiva\" e \"uma marca da Disney do século XXI\". Richard Roeper, do Chicago Sun-Times, opinou que o filme é \"cheio de vida\" e o julgou como \"uma aventura apaixonante e emocionante\", elogiando também as performances vocais como \"fantásticas\" e \"de primeira classe\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Dia da Marmota",
      "descricao": "Tradição americana e canadense de 2 de fevereiro em que uma marmota supostamente prevê a duração do inverno."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Que ator vive, no filme Feitiço do Tempo, um repórter do tempo condenado a reviver sem parar o mesmo Dia da Marmota?",
    "resposta": "Bill Murray",
    "distratores": [
      "Jim Carrey",
      "Steve Martin",
      "Tom Hanks"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Groundhog_Day_(film)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Groundhog_Day_(film)",
        "situacao": "ok",
        "texto": "Groundhog Day is a 1993 American fantasy romantic comedy film directed by Harold Ramis, who co-wrote the screenplay with Danny Rubin. Starring Bill Murray, Andie MacDowell, and Chris Elliott, it tells the story of a cynical television weatherman covering the annual Groundhog Day event in Punxsutawney, Pennsylvania, who becomes trapped in a time loop, forcing him to relive February 2 repeatedly.\n[…]\nBill Murray as Phil Connors\n[…]\nRubin wanted Kevin Kline for the part, believing Murray did not have the necessary acting ability. Ramis reassured Rubin, saying, \"Don't worry. This is what Bill Murray can do. He can be that nasty and still make you like him.\" MacDowell agreed, saying, \"He's a jerk but he makes you laugh.\"\n[…]\nDuring the scene in which Phil drives off with Punxsutawney Phil, the groundhog bit Murray on the knuckle. Although Murray was wearing gloves, the bite broke the skin. During a later take, the groundhog bit him again, in the same spot.\n[…]\nAt the 1994 BAFTA Awards, Rubin and Ramis won the award for Best Original Screenplay. MacDowell won the award for Best Actress at the 20th Saturn Awards ceremony, where Groundhog Day also received nominations for Best Fantasy Film (losing to The Nightmare Before Christmas), Bill Murray for Best Actor (losing to Robert Downey Jr. in Heart and Souls), Best Writing and Best Direction (losing both to Jurassic Park), and Best Costumes for Jennifer Butler (losing to Hocus Pocus).\n[…]\nHe wrote, \"The comedy and the philosophy (how shall one live?) do not sit side by side, but inhabit each other in a unity that is incredibly satisfying.\" It is listed in the 2013 film reference book 1001 Movies You Must See Before You Die, which says \"Bill Murray gives what may be the best and warmest performance of his career in this genius comedy—arguably the best of the 1990s\".\n[…]\nMurray attended a Broadway show in 2017, alongside Doyle-Murray and Rubin."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Groundhog_Day",
        "situacao": "ok",
        "texto": "Groundhog Day (O Feitiço do Tempo (título em Portugal) ou Feitiço do Tempo (título no Brasil)) é um filme estadunidense de 1993 dirigido por Harold Ramis. Estrelado por Bill Murray, Andie MacDowell, e Chris Elliott, teve seu roteiro escrito por Harold Ramis e Danny Rubin, sobre um enredo deste último. A despeito da crítica inicialmente avaliar a obra como mediana hoje o filme é tido como um dos cl\n[…]\nBrian Doyle-Murray - Buster Green, um dos apresentadores da marmota, o homem que engasga.\n[…]\nMichael Shannon faz Fred, jovem noivo. Foi seu primeiro papel num filme e ele fez uma pergunta idiota a Bill Murray durante uma pausa, e a resposta o deixou constrangido. Ao saber disto, o diretor Ramis fez Murray pedir-lhe desculpas, o que aumentou-lhe o constrangimento.\n[…]\nBill Murray teve neste filme a sua sexta e última participação ao lado de Harold Ramis, com quem ao final das gravações rompeu uma longa amizade. Durante as filmagens Murray discordava do enredo e estava enfrentando um divórcio, o que foi um fator desestabilizante, pois sempre chegava atrasado às gravações. Após o filme ficou vinte e um anos sem se falar com Ramis, que chegou a declarar: \"às vezes, Bill era de fato irracionalmente malvado e intratável; ele estava constantemente atrasado no set.\n[…]\nA cidade ainda ostenta diversas placas alusivas às locações do filme, realizando turnês no inverno pelas locações e eventos para debater o filme, além de reeditar o Dia da Marmota com um dos descendentes da marmota que atuou com Bill Murray. Finalmente, Woodstock passou a adotar por lema \"todos os dias são Groundhog Day em Woodstock, IL!\".\n[…]\nNa festa do Oscar 2014 Bill Murray lembrou o diretor Ramis, falecido naquele ano e que jamais vencera um prêmio da Academia, e afirmou que \"comédia nunca leva Oscar. Feitiço do Tempo foi um dos roteiros mais bem escritos e não recebeu nem mesmo uma indicação”.\n[…]\nFeitiço Do Tempo no AdoroCinema",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Midsommar",
      "descricao": "Festa sueca do solstício de verão, com danças em volta de um mastro enfeitado com folhas e flores."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "A festa sueca do solstício de verão deu nome a um filme de terror de 2019, passado numa comunidade rural da Suécia. Quem o dirigiu?",
    "resposta": "Ari Aster",
    "distratores": [
      "Jordan Peele",
      "Robert Eggers",
      "Lars von Trier"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Midsommar_(film)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Midsommar_(film)",
        "situacao": "ok",
        "texto": "Midsommar is a 2019 folk horror film written and directed by Ari Aster. It stars Florence Pugh and Jack Reynor as an American couple who are drawn into a violent cult in rural Sweden. Supporting actors include William Jackson Harper, Vilhelm Blomgren, Ellora Torchia, Archie Madekwe, and Will Poulter.\n[…]\nMidsommar was theatrically released in the United States by A24 on July 3, 2019, and in Sweden by Nordisk Film on July 10, 2019. The film grossed $48 million and received positive reviews, with praise for Aster's direction and Pugh's performance.\n[…]\nHe described the result as \"a breakup movie dressed in the clothes of a folk horror film.\" Aster has mentioned 1981 Albert Brooks film Modern Romance as an inspiration for Midsommar, and also called it \"The Wizard of Oz for perverts\".\n[…]\nTomris Laffly of RogerEbert.com rated the film 4 out of 4 stars, describing it as a \"terrifically juicy, apocalyptic cinematic sacrament that dances around a fruitless relationship in dizzying circles\". A Vanity Fair article from December 2019 reflecting on the 2010s in horror films argued that Midsommar was part of a trend of \"elevated horror\", along with Aster's previous Hereditary and Robert Eggers-directed The Witch, and that it was an example of \"horror at its best\".\n[…]\nIn Vox, Alissa Wilkinson described Midsommar's story as following Dani's emotional journey and following fairy tale conventions, where Dani loses her family at the beginning and goes on to become a Queen, as with Cinderella and Snow White. The article also notes the use of imagery foreshadowing later events throughout the film. Aster himself said \"We begin as Dani loses a family, and we end as Dani gains one.\n[…]\nMidsommar at IMDb\n[…]\nMidsommar at Metacritic\n[…]\nMidsommar at Rotten Tomatoes"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Midsommar",
        "situacao": "ok",
        "texto": "Midsommar (bra: Midsommar - O Mal Não Espera a Noite; prt: Midsommar: O Ritual) é um filme estadunidense/sueco de 2019 do gênero terror, escrito e dirigido por Ari Aster, e estrelado por Florence Pugh, Jack Reynor, William Jackson Harper e Will Poulter. Seu lançamento ocorreu em 3 de julho nos Estados Unidos, por intermédio da A24.\n[…]\nUma co-produção entre os Estados Unidos e a Suécia, o filme foi inicialmente apresentado para Aster como um filme de terror ambientado entre os cultistas suecos. Aster planejou um roteiro usando elementos do conceito, mas transformou um relacionamento em deterioração no conflito central depois que ele experimentou uma separação difícil. O filme foi filmado em Budapeste no verão e outono de 2018.\n[…]\nNa Suécia, Midsommar estreou a 10 de julho de 2019, pela Nordisk Film. O filme arrecadou US $ 46 milhões e recebeu avaliações positivas da crítica especializada, com muitos elogiando a direção de Aster e o desempenho de Pugh.\n[…]\nAs filmagens iniciais começaram em 30 de julho de 2018, alocadas em Budapeste e na Hungria. Midsommar foi lançado em 3 de julho de 2019.\n[…]\nEric Kohn de indieWIRE resumiu o filme como um \"filme de separação perversa\", acrescentando que \"Aster nem sempre afundar os maiores surpresas, mas ele é excelente em torcer a faca.\n[…]\nDepois de um defloramento que faz com que Ken Russell é Os Devils olhar manso, Aster encontra seu caminho para uma surpreendente verificação da realidade.\" Joshua Rothkopf, da Time Out , concedeu ao filme uma classificação de 5/5 estrelas, escrevendo: \"Uma fatia selvagem e ainda evoluída de horror folclórico sueco, o seguimento alucinatório de Ari Aster a Hereditário prova que ele é um diretor de horror sem igual.\" Para o The AV Club , AA Dowd afirmou que o filme \"rivaliza com o hereditário no departamento de choque cruel\" e o rotulou como \"esforço B +\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Noite de Guy Fawkes",
      "descricao": "Comemoração britânica de 5 de novembro, com fogueiras e fogos de artifício."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Na noite de cinco de novembro, os britânicos queimam bonecos de Guy Fawkes. Seu rosto estilizado virou máscara em qual quadrinho de Alan Moore?",
    "resposta": "V de Vingança",
    "distratores": [
      "Watchmen",
      "Do Inferno",
      "Sandman"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Guy_Fawkes_mask",
      "https://en.wikipedia.org/wiki/V_for_Vendetta"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Guy_Fawkes_mask",
        "situacao": "ok",
        "texto": "The Guy Fawkes mask (also known as the V for Vendetta mask) is a stylised depiction of Guy Fawkes (the best-known member of the Gunpowder Plot, an attempt to blow up the House of Lords in London on 5 November 1605) created by illustrator David Lloyd for the 1982–1989 graphic novel V for Vendetta written by Alan Moore with art by Lloyd.\n[…]\nThe Gunpowder Plot of 1605 was commemorated from early on by burning effigies of unpopular figures. Towards the end of the 18th century, reports appeared of children begging for money with grotesquely masked effigies of Guy Fawkes, and 5 November gradually became known as Guy Fawkes Night, although many now prefer the term \"Bonfire Night\". From the 1864 Chambers Book of Days:\n[…]\nIn the 20th century, in the UK, large numbers of cheap cardboard or paper Guy Fawkes masks were sold to children each autumn or given out free with comics; by the 1980s their popularity became increasingly supplanted by Halloween. In 1958, wearing Guy Fawkes masks was mentioned during a debate in the Parliament of Western Australia as an example of harmless and excusable (though technically unlawful) possession of a face mask at night. J.J. Brady said:\n[…]\nat one time it was traditional to wear masks on Guy Fawkes night. So, if tonight anyone is found wearing a Guy Fawkes mask I, as Minister for Police, will see that he is duly excused.\n[…]\nHe'd look really bizarre and it would give Guy Fawkes the image he's deserved all these years. We shouldn't burn the chap every Nov. 5th but celebrate his attempt to blow up Parliament!\" Writer Alan Moore commented that, due to Lloyd's idea,\n[…]\nAlan Moore, anarchist and author of V for Vendetta, described being pleased by the Fawkes mask's appearance at the protests. Whilst Moore did not create such a character for the purposes it has served, he explains to The Guardian:"
      },
      {
        "url": "https://en.wikipedia.org/wiki/V_for_Vendetta",
        "situacao": "ok",
        "texto": "V for Vendetta is a British graphic novel written by Alan Moore and illustrated by David Lloyd (with additional art by Tony Weare). Initially published between 1982 and 1985 in black and white as an ongoing serial in the British anthology Warrior, its serialisation was completed in 1988–89 in a ten-issue colour limited series published by DC Comics in the United States.\n[…]\nAfter reading the script, Moore remarked:\n[…]\nSteve Moore (no relation to Alan Moore) wrote a novelisation of the film's screenplay, published in 2006.\n[…]\nCharacters wearing V's Guy Fawkes mask were later introduced in the series' 2022 third season, set five years after the first two seasons. In November 2025, a television series adaptation of the graphic novel was revealed to be in development for HBO, with Pete Jackson writing and DC Studios co-chiefs James Gunn and Peter Safran producing.\n[…]\nAnonymous, an online group associated with computer hacking, popularised the mask as a symbol for rebellion by wearing it at protests against governments. It prominently featured in the 2008 Project Chanology protests against the Church of Scientology. Moore described being pleased by the Fawkes mask's appearance at the protests. According to Time in 2011, the protesters' adoption of the mask led to it becoming the top-selling mask on Amazon, selling hundreds of thousands a year.\n[…]\nOn 17 November 2012, police officials in Dubai warned against wearing Guy Fawkes masks painted with the colours of the UAE flag during any celebration associated with the UAE National Day (2 December), declaring such use an illegal act after masks went on sale in online shops for 50 DHS. Guy Fawkes masks also made an appearance in the 2014 Hong Kong protests, and also in 2019.\n[…]\nAn Annotation of Literary, Historic and Artistic References in Alan Moore's Graphic Novel, V For Vendetta by Madelyn Boudreaux"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/M%C3%A1scara_de_Guy_Fawkes",
        "situacao": "ok",
        "texto": "A Máscara de Guy Fawkes (Também conhecida como Máscara do V de Vingança ou Máscara do Anonymous) é uma representação estilizada de Guy Fawkes (o mais conhecido membro da Conspiração da Pólvora, uma tentativa de explodir a Câmara dos Lordes em Londres em 5 de novembro de 1605) criada pelo ilustrador David Lloyd para a graphic novel V for Vendetta, de 1982 a 1989.\n[…]\nEle pareceria realmente bizarro e daria a Guy Fawkes a imagem que ele mereceu durante todos esses anos. Não deveríamos queimar o sujeito todo dia 5 de novembro, mas celebrar sua tentativa de explodir o Parlamento!\" Escritor Alan Moore comentou que, devido à ideia de Lloyd, \"todos os vários fragmentos em minha cabeça de repente se encaixaram, unidos por trás da imagem única de uma máscara de Guy Fawkes\".\n[…]\nDesde o lançamento do filme de 2005 V de Vingança e a produção em massa de David Lloyd pela Warner Bros. Em meados da década de 1970, o uso de máscaras de Guy Fawkes se difundiu internacionalmente entre grupos que protestavam contra políticos, bancos e instituições financeiras. As máscaras ocultam a identidade e protegem o rosto dos indivíduos e demonstram seu compromisso com uma causa compartilhada.\n[…]\nAs máscaras de Guy Fawkes estavam entre os símbolos exibidos durante a invasão do Capitólio dos Estados Unidos em 2021.\n[…]\nAlan Moore, anarquista e autor de V de Vingança, apoiou o uso da máscara e declarou em uma entrevista de 2008 à Entertainment Weekly: \"Outro dia, ao assistir ao noticiário, fiquei bastante animado ao ver que havia manifestações do lado de fora da sede da Cientologia aqui e que, de repente, passou um clipe mostrando todos esses manifestantes usando máscaras de Guy Fawkes de V de Vingança. Isso me agradou.\n[…]\nParece que um personagem que criei há 30 anos escapou de alguma forma do reino da ficção.\" David Lloyd, ilustrador e co-criador de V de Vingança:",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Dia de São Patrício",
      "descricao": "Festa irlandesa de 17 de março em honra do padroeiro da Irlanda, celebrada com desfiles e a cor verde."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Segundo a tradição, por que São Patrício usava o trevo de três folhas, hoje símbolo da sua festa, ao pregar na Irlanda?",
    "resposta": "Explicar a Santíssima Trindade",
    "distratores": [
      "Espantar as serpentes",
      "Trazer boa sorte",
      "Curar os doentes"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Saint_Patrick%27s_Day",
      "https://en.wikipedia.org/wiki/Shamrock"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Saint_Patrick%27s_Day",
        "situacao": "ok",
        "texto": "Saint Patrick's Day, or the Feast of Saint Patrick (Irish: Lá Fhéile Pádraig, lit. 'the Day of the Festival of Patrick'), is a religious and cultural holiday held on 17 March, the traditional death date of Saint Patrick (c. 385 – c. 461), the foremost patron saint of Ireland.\n[…]\nThe Saint Patrick's Battalion is honored in Mexico on Saint Patrick's Day.\n[…]\nHorse racing at the Cheltenham Festival attracts large numbers of Irish people, both residents of Britain and many who travel from Ireland, and usually coincides with Saint Patrick's Day.\n[…]\nThe Saint Patrick's Day Test is an international rugby league tournament that is played between the US and Ireland. The competition was first started in 1995 and continued in 1996, 2000, 2002, 2003, 2004, 2011, and 2012. Ireland won the first two tests as well as the one in 2011, with the US winning the remaining 5. The game is usually held on or around 17 March to coincide with Saint Patrick's Day.\n[…]\nThe major professional sports leagues of the United States and Canada that play during March often wear special third jerseys to acknowledge the holiday. Examples include the Buffalo Sabres (who have worn special Irish-themed practice jerseys), Toronto Maple Leafs (who wear Toronto St. Patricks throwbacks), New York Knicks, Toronto Raptors, and most Major League Baseball teams. The New Jersey Devils have worn their green-and-red throwback jerseys on or around Saint Patrick's Day in recent years.\n[…]\nOrder of St. Patrick\n[…]\nSaint Patrick's Breastplate\n[…]\nSt. Patrick's Day Snowstorm of 1892\n[…]\nUnofficial Saint Patrick's Day\n[…]\nCronin, Mike; Adair, Daryl (2002). The Wearing of the Green: A History of St. Patrick's Day. Routledge. ISBN 978-0-415-18004-7.\n[…]\nSaint Patrick's Day History – slideshow by The Huffington Post"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Shamrock",
        "situacao": "ok",
        "texto": "A shamrock is a type of clover, used as a symbol of Ireland. The word shamrock comes from Irish seamróg ([ˈʃamˠ.ɾˠoːɡ]), which is the diminutive of the Irish word seamair and simply means \"young clover\".\n[…]\nWhy the Celts to whom St Patrick was preaching would have needed an explanation of the concept of a triple deity is not clear, since at least two separate triple goddesses are known to have been worshipped in pagan Ireland – Ériu, Fódla and Banba; and Badb Catha, Macha and The Morrígan.\n[…]\nThroughout the nineteenth and twentieth centuries, the shamrock continued to appear in a variety of settings. For example, the shamrock appeared on many buildings in Ireland as a decorative motif, such as on the facade of the Kildare Street Club building in Dublin, St. Patrick's Cathedral, Armagh, and the Harp and Lion Bar in Listowel, County Kerry.\n[…]\nSince 1969, a bowl of shamrocks in a special Waterford Crystal bowl featuring a shamrock design is flown from Ireland to Washington, D.C., and presented to the President of the United States every St. Patrick's Day.\n[…]\nShamrock is also used in emblems of UK organisations with an association with Ireland, such as the Irish Guards. Soldiers of the Royal Irish Regiment of the British Army use the shamrock as their emblem, and wear a sprig of shamrock on Saint Patrick's Day. Shamrock are exported to wherever the regiment is stationed throughout the world.\n[…]\nThe Erin Go Bragh flag, used originally by the Saint Patrick's Battalion of the Mexican Army, uses an angelic Cláirseach, a medieval Irish harp, cradled in a wreath of clover. It is also used by many supporters of the football team Hibernian\n[…]\nSt. Patrick's blue"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dia_de_S%C3%A3o_Patr%C3%ADcio",
        "situacao": "ok",
        "texto": "O Dia de São Patrício (do irlandês: Lá le Pádraig ou Lá Fhéile Pádraig, em inglês:  Saint Patrick's Day, popularmente chamado de Paddy’s Day) é uma festa anual, comemorada em 17 de Março (nos países anglófonos), em homenagem a São Patrício, padroeiro da Irlanda, que morreu nesta mesma data em 461 d.C. Neste dia, as pessoas vestem-se de trajes verde e branco, saindo às ruas em uma caminhada festiva\n[…]\nEm 432, alegou ter recebido um chamado para regressar à Irlanda, porém como bispo, para a evangelização dos irlandeses. O folclore irlandês alega que um de seus métodos de evangelização incluía o uso de um trevo de três folhas para explicar a doutrina da Santíssima Trindade para os irlandeses. Depois de quase trinta anos de evangelização, Patrício faleceu no dia 17 de março de 461, e, de acordo com a tradição, foi enterrado em Downpatrick.\n[…]\nApesar do êxito de várias missões à Irlanda empregadas por Roma, Patrício perdurou como o santo principal do cristianismo irlandês e é bastante estimado pela Igreja Católica irlandesa e de todo o mundo.\n[…]\nCom o passar dos anos, a cor verde e sua ligação com o dia de São Patrício aumentou. Fitas verdes e trevos eram usados nas celebrações do dia de São Patrício no século XVII. Dizem que São Patrício usou o trevo para explicar a Santíssima Trindade aos pagãos celtas, com isso, o uso de trevos de três folhas e similares estão intimamente ligados aos festejos.\n[…]\nNa rebelião irlandesa de 1798, na esperança de propagar seus ideais políticos, soldados irlandeses vestiram uniformes verdes no dia 17 de março na esperança de chamar a atenção pública para a rebelião. A expressão irlandesa \"the wearing of the green\" (Vestindo o verde), significa usar um trevo ou então outra peça de roupa que seja verde em referência aos soldados rebeldes.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Dia de São Patrício",
      "descricao": "Festa irlandesa de 17 de março em honra do padroeiro da Irlanda, celebrada com desfiles e a cor verde."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Hoje o Dia de São Patrício é todo verde, mas qual cor foi associada primeiro ao santo?",
    "resposta": "Azul",
    "distratores": [
      "Laranja",
      "Branco",
      "Vermelho"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Saint_Patrick%27s_Day"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Saint_Patrick%27s_Day",
        "situacao": "ok",
        "texto": "Saint Patrick's Day, or the Feast of Saint Patrick (Irish: Lá Fhéile Pádraig, lit. 'the Day of the Festival of Patrick'), is a religious and cultural holiday held on 17 March, the traditional death date of Saint Patrick (c. 385 – c. 461), the foremost patron saint of Ireland.\n[…]\nIn Manitoba, the Irish Association of Manitoba runs a yearly three-day festival of music and culture based around Saint Patrick's Day.\n[…]\nIn the university city of Dunedin, Saint Patrick's Day (commonly referred to as \"St Paddy's\") is widely regarded as one of the largest social events of the year. Among the student population, the day is associated with informal drinking traditions such as \"six before six\" (consuming six alcoholic drinks before 6:00 am), \"wine before nine\" (consuming a bottle of wine before 9:00 am), and \"goon before noon\" (consuming a cask of wine before 12:00 pm).\n[…]\nThe Irish Association of Korea has celebrated Saint Patrick's Day since 1976 in Seoul, the capital city of Korea and Busan, second largest city in Korea. The plaxe of the parade and festivals are Itaewon of Seoul and Seomyeon of Busan. It is sponsored by Embassy of Ireland in Korea.\n[…]\nSaint Patrick's Day celebrations have been criticised, particularly for their association with public drunkenness and disorderly conduct. Some argue that the festivities have become too commercialised and tacky, and have strayed from their original purpose of honouring Saint Patrick and Irish heritage. Irish American journalist Niall O'Dowd has criticised attempts to recast Saint Patrick's Day as a celebration of multiculturalism rather than a celebration of Irishness.\n[…]\nSaint Patrick's Breastplate\n[…]\nSt. Patrick's Day Snowstorm of 1892\n[…]\nUnofficial Saint Patrick's Day\n[…]\nSaint Patrick's Day History – slideshow by The Huffington Post"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dia_de_S%C3%A3o_Patr%C3%ADcio",
        "situacao": "ok",
        "texto": "O Dia de São Patrício (do irlandês: Lá le Pádraig ou Lá Fhéile Pádraig, em inglês:  Saint Patrick's Day, popularmente chamado de Paddy’s Day) é uma festa anual, comemorada em 17 de Março (nos países anglófonos), em homenagem a São Patrício, padroeiro da Irlanda, que morreu nesta mesma data em 461 d.C. Neste dia, as pessoas vestem-se de trajes verde e branco, saindo às ruas em uma caminhada festiva\n[…]\nNo passado, o Dia de São Patrício era apenas uma celebração religiosa. Mas em 1903, tornou-se um feriado público. Na Inglaterra, foi introduzido através do Parlamento pelo irlandês James O'Mara. Mais tarde, este introduziu a lei que proibia que os \"pubs\" (bares) fechassem no dia 18 de Março (sofrendo mudança na década de 1970). A primeira manifestação ocorreu em Dublin, no ano de 1931, sendo criticada pelo ministro Fitzgerald.\n[…]\nApesar do êxito de várias missões à Irlanda empregadas por Roma, Patrício perdurou como o santo principal do cristianismo irlandês e é bastante estimado pela Igreja Católica irlandesa e de todo o mundo.\n[…]\nCom o passar dos anos, a cor verde e sua ligação com o dia de São Patrício aumentou. Fitas verdes e trevos eram usados nas celebrações do dia de São Patrício no século XVII. Dizem que São Patrício usou o trevo para explicar a Santíssima Trindade aos pagãos celtas, com isso, o uso de trevos de três folhas e similares estão intimamente ligados aos festejos.\n[…]\nNo Brasil, o primeiro registro de Dia do São Patrício foi ocorrido em 17 de Março de 1770 em uma igreja construída em homenagem ao santo por Lancelot Belfort (1708-1775). A igreja estava localizada em sua propriedade, conhecida como Kilrue, às margens do rio Itapecurú, em Maranhão, no Nordeste do Brasil.São Patrício é padroeiro da cidade de Itaqui, no Rio Grande Do Sul.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Tomatina",
      "descricao": "Festa espanhola em que milhares de participantes atiram tomates uns nos outros, na última quarta-feira de agosto."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Segundo a versão mais contada, a Tomatina nasceu em 1945, quando jovens brigaram e atiraram tomates durante que tipo de evento?",
    "resposta": "Desfile de bonecos gigantes",
    "distratores": [
      "Uma tourada",
      "Um jogo de futebol",
      "Uma procissão religiosa"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/La_Tomatina"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/La_Tomatina",
        "situacao": "ok",
        "texto": "La Tomatina (Spanish pronunciation: [la tomaˈtina]) is a Spanish festival in Buñol, Spain where participants throw tomatoes at each other. It is the biggest food fight in the world. From the festival's origin as a food fight between friends in the 1940s, it has become a famous tourist attraction. Until 2013 there was no limit to the number of participants; in 2013 the festival became a ticketed ev\n[…]\nLa Tomatina Festival started the last Wednesday of August in 1945 when some young people spent time in then square to attend the Giants and Big-Heads figures parade. One participant's Big-head fell off, as a result of the festivities. The participant flew into a fit of rage, and began hitting everything in their path. There was a market stall of vegetables that fell victim to the fury of the crowd, as people started to pelt each other with tomatoes until the local forces ended the fruit fight.\n[…]\nLa Tomatina Buñol has inspired similar celebrations in other parts of the world:\n[…]\nIn Costa Rica the town of San José de Trojas in the San Pedro district of Sarchí canton (Alajuela Province) celebrates a Tomatina during the local Tomato Fair.\n[…]\nFuntasia Island, Patna hosted a similar La tomatina Holi event on 26 March 2013 at Funtasia Water Park in Patna, India.\n[…]\nThe opening scene of the film We Need to Talk About Kevin depicts the character Eva attending La Tomatina\n[…]\nThe Movie Spanish Masala has a scene showing the La Tomatina festival\n[…]\nThe 2007 game Tekken 6 features a stage named \"Fiesta del Tomate\", based on the Tomatina\n[…]\nThe 2013 animated series Mickey Mouse episode \"Al Rojo Vivo\" features Mickey Mouse stumbling across La Tomatina\n[…]\nThe 2025 Amazon-MGM film Heads of State features La Tomatina in the opening scene\n[…]\nOfficial website of La Tomatina\n[…]\nAyuntamiento de Buñol - La Tomatina (in Spanish) Archived 25 March 2026 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tomatina",
        "situacao": "ok",
        "texto": "Buñol (em castelhano e oficialmente) ou Bunyol (em valenciano) é um município da Espanha na província de Valência, Comunidade Valenciana. Tem 112,4 km² de área e em 2021 tinha 9 438 habitantes (densidade: 84 hab./km²).\n[…]\nA tomatina é uma festa realizada em Buñol nas últimas quartas feiras de agosto. Durante a festa, os moradores da de Buñol atiram tomates uns sobre os outros, pintando uns aos outros e as fachadas das casas da cidade com o vermelho da polpa do tomate. São muitas as teorias da origem da festa que começou com o desfile de bonecos gigantes por jovens e uma guerra de comida entre amigos, usando os tomates como \"arma\".\n[…]\nSabe-se que a tradição nasceu em 1940 ou 1944, quando a zonas da alta e baixa da cidade foram fechadas para os participantes. A iniciativa partiu da Guloso, uma marca de polpa de tomate, que aproveitou para aí gravar um anúncio publicitário.\n[…]\nDurante a festa a população quadruplica e participam na tomatina cerca de 38 000 pessoas, entre moradores da cidade e turistas de todas as regiões do mundo.\n[…]\nMedia relacionados com a Tomatina no Wikimedia Commons",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Kumbh Mela",
      "descricao": "Peregrinação hindu realizada a cada quatro ou doze anos em Prayagraj, Haridwar, Nashik e Ujjain."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Segundo o mito hindu, as quatro cidades da Kumbh Mela são sagradas porque ali caíram gotas de quê?",
    "resposta": "Néctar da imortalidade",
    "distratores": [
      "Sangue de Shiva",
      "Leite sagrado",
      "Lágrimas de Vishnu"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Kumbh_Mela"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Kumbh_Mela",
        "situacao": "ok",
        "texto": "Kumbh Mela (Sanskrit: Kumbha Mēlā, pronounced [kʊˈmbʱᵊ melaː]; lit. 'festival of the Sacred Pitcher') is a Hindu pilgrimage, celebrated every four or twelve years, correlated with the partial or full revolution of Jupiter. These are held at four locations–Prayagraj, Haridwar, Nashik, and Ujjain– at varying time intervals. According to the Puranas, these sites are believed to have received drops of\n[…]\nThe word mela means \"unite, join, meet, move together, assembly, junction\" in Sanskrit, particularly in the context of fairs, and community celebrations. This word too is found in the Rigveda and other ancient Hindu texts. Thus, Kumbh Mela means an \"assembly, meet, union\" around \"water or nectar of immortality\".\n[…]\nHindu mythology describes the creation of a \"pot of amrita (nectar of immortality)\" after the forces of good and evil churn the ocean of creation. The gods and demons fight over this pot, the \"kumbha\", of nectar in order to gain immortality. In a later day extension to the legend, the pot is spilt at four places, and that is the origin of the four Kumbha Melas. The story varies, with some stating Vishnu as Mohini avatar, others stating Dhanavantari or Garuda or Indra spilling the pot.\n[…]\nThe Kumbh Mela are classified as:\n[…]\nEven Tibet has hosted a festival claimed to be a Kumbh Mela.\n[…]\nKumbh Mela has been a theme for many documentaries, including Kings with Straw Mats (1998) directed by Ira Cohen, Kumbh Mela: The Greatest Show on Earth (2001) directed by Graham Day, Short Cut to Nirvana: Kumbh Mela (2004) directed by Nick Day and produced by Maurizio Benazzo, Kumbh Mela: Songs of the River (2004) by Nadeem Uddin, Invocation, Kumbh Mela (2008), Kumbh Mela 2013: Living with Mahatiagi (2013) by the Ukrainian Religious Studies Project Ahamot, and Kumbh Mela: Walking with the Nagas (2011), Amrit: Nectar of Immortality (2012) directed by Jonas Scheu and Philipp Eyer."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Khumba_Mela",
        "situacao": "ok",
        "texto": "O Khumba Mela ou Kumbh Mela (de khumb, \"pote\" e mela, \"festival\") é o principal festival do hinduísmo, que ocorre quatro vezes a cada doze anos na Índia, rodando por quatro cidades: Prayagraj, Ujjain, Nashik e Haridwar. Cada ciclo de doze anos inclui o Maha Kumbha Mela (maha = maior) em Prayagraj, onde milhões de devotos hindus se reúnem para se banhar no Sangam, local de encontro dos rios sagrado\n[…]\nO Kumbha Mela se baseia numa lenda na qual deuses e demônios entraram em guerra por causa de um pote que continha o néctar da imortalidade. Algumas gotas do néctar caíram em quatro cidades na Índia: Prayagraj, Ujjain, Nasik e Haridwar, onde o Khumba Mela acontece sucessivamente a cada três anos.\n[…]\nSegundo a cosmologia hindu, o rio Ganges tem origem nos céus. A Kumbh Mela, o grande festival que ocorre ao redor do Ganges, é uma celebração da criação. Segundo uma fábula, os deuses e os demônios lutavam pela \"kumbh\" (jarra, pote), onde se encontrava o \"amrit\" (néctar), criado pelo \"sagar manthan\" (o escumar dos oceanos). Jayant, filho de Indra, escapou com a kumbh e por 12 dias consecutivos os demônios lutaram contra os deuses pela posse da jarra.\n[…]\nFinalmente, venceram os deuses, beberam o \"amrit\" e alcançaram a imortalidade.\n[…]\nDurante a batalha pela posse da \"kumbh\", quatro gotas de \"amrit\" caíram na terra, em Prayagraj, Haridwar, Nasik e Ujjain, as quatro cidades onde o festival da Kumbh Mela tem lugar. Até hoje, a cada 12 anos, cada uma dessas cidades é sede da mela. A Maha Kumbh Mela de 2001, em Prayagraj, foi um dos maiores e mais espetaculares festivais jamais ocorridos. Cerca de 30 milhões de pessoas se reuniram na cidade sagrada para se banharem nas águas sagradas do Ganges.\n[…]\nO festival Kumbh Mela foi classificado pela UNESCO em 2017 como Património Cultural Imaterial da Humanidade.\n[…]\nO Ganges Sagrado - página sobre o hinduísmo da Secretaria da Educação do governo do Paraná",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Dia dos Santos Inocentes",
      "descricao": "Data cristã de 28 de dezembro que, na Espanha e na América hispânica, é o dia tradicional das pegadinhas."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "O Dia dos Santos Inocentes, data das pegadinhas na Espanha, lembra os meninos de Belém mortos por ordem de qual rei?",
    "resposta": "Herodes",
    "distratores": [
      "Davi",
      "Salomão",
      "Nabucodonosor"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Feast_of_the_Holy_Innocents",
      "https://en.wikipedia.org/wiki/Massacre_of_the_Innocents"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Feast_of_the_Holy_Innocents",
        "situacao": "ok",
        "texto": "The Massacre (or Slaughter) of the Innocents is a story recounted in the Nativity narrative of the Gospel of Matthew (2:16–18) in which Herod the Great, king of Judea, orders the execution of all male children who are two years old and under in the vicinity of Bethlehem. It is modeled by the story of Pharaoh's attempt to kill the Israelite children in the Book of Exodus, as told in an expanded ver\n[…]\nIn Spain, Hispanic America, and the Philippines, 28 December is called Day of the Holy Innocents and is a day for pranks, equivalent to April Fool's Day in many countries. Pranks (bromas) are also known as inocentadas and their victims are called inocentes; alternatively, the pranksters are the inocentes and the victims should not be angry at them, since they could not have committed any sin.\n[…]\nOne of the more famous of these traditions is the annual \"Els Enfarinats\" festival of Ibi in Alacant, where the inocentes dress up in full military dress and incite a flour fight."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Massacre_of_the_Innocents",
        "situacao": "ok",
        "texto": "The Massacre (or Slaughter) of the Innocents is a story recounted in the Nativity narrative of the Gospel of Matthew (2:16–18) in which Herod the Great, king of Judea, orders the execution of all male children who are two years old and under in the vicinity of Bethlehem. It is modeled by the story of Pharaoh's attempt to kill the Israelite children in the Book of Exodus, as told in an expanded ver\n[…]\nIn Spain, Hispanic America, and the Philippines, 28 December is called Day of the Holy Innocents and is a day for pranks, equivalent to April Fool's Day in many countries. Pranks (bromas) are also known as inocentadas and their victims are called inocentes; alternatively, the pranksters are the inocentes and the victims should not be angry at them, since they could not have committed any sin.\n[…]\nOne of the more famous of these traditions is the annual \"Els Enfarinats\" festival of Ibi in Alacant, where the inocentes dress up in full military dress and incite a flour fight."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Massacre_dos_Inocentes",
        "situacao": "ok",
        "texto": "O Massacre dos Inocentes (ou Matança dos Inocentes) foi um episódio de infanticídio pelo rei da Judeia, Herodes, o Grande, que aparece no Evangelho de Mateus (Mateus 2:16–18). O autor, tradicionalmente Mateus, reporta que Herodes teria ordenado a execução de todos os meninos da vila de Belém para evitar perder o trono para o recém-nascido \"Rei dos Judeus\", cujo nascimento fora revelado para ele pe\n[…]\nOs meninos, conhecidos na Igreja como \"Santos Inocentes\", já foram chamados de os primeiros mártires cristãos. Relatos tradicionais falam em mais de dez mil mortos, mas estimativas mais conservadoras estimam algo em torno de poucas dezenas. Os biógrafos modernos de Herodes geralmente negam que o evento sequer tenha ocorrido.\n[…]\nNo relato de Mateus, magos do oriente vão para a Judeia em busca de um recém-nascido rei dos judeus, tendo \"sua estrela no oriente\". Eles foram direcionados para Belém e Herodes lhes pede que o avisem quem é este rei quando eles o encontrarem. Eles encontram Jesus e o adoram, mas um anjo pede que eles não alertem Herodes e eles retornam para casa por um caminho diferente.\n[…]\nQuando Herodes percebeu que havia sido enganado pelos magos, ele ficou furioso e ordenou que fossem mortos todos os meninos com menos de dois anos em Belém e nas redondezas, contando com a referência de tempo que lhe havia sido passada pelos magos. Neste ponto se cumpriu então a profecia de Jeremias (Mateus 2:16–17).\n[…]\nRobert Eisenman argumenta que a história parece ter a sua origem no assassinato, por Herodes, de seus próprios filhos, um ato que causou uma forte impressão na época e que foi relatado por Josefo e também pela obra apócrifa judaica do século I, Assunção de Moisés, onde ela é considerada como uma profecia: \"Um rei insolente irá suceder [os sacerdotes hasmoneus... ele irá assassinar todos os jovens.\" (Assunção de Moisés 6:2-6). R. T.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Hinamatsuri",
      "descricao": "Festa japonesa do Dia das Meninas, em que se expõem bonecas da corte imperial em degraus."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Diz uma crença japonesa que, se as bonecas do Dia das Meninas não forem guardadas logo após a festa, as filhas da casa sofrerão o quê?",
    "resposta": "Atraso no casamento",
    "distratores": [
      "Doenças no ano",
      "Azar nos estudos",
      "Pesadelos"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Hinamatsuri"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hinamatsuri",
        "situacao": "ok",
        "texto": "Hinamatsuri (Japanese: 雛祭り), also called Doll's Day or Girls' Day, is an annual festival in Japan (but not a national holiday), celebrated on 3 March of each year. Platforms covered with a red carpet material are used to display a set of ornamental dolls (雛人形, hina-ningyō) representing the emperor, empress, attendants, and musicians in traditional court dress of the Heian period.\n[…]\nPractically speaking, the encouragement to put everything away quickly is to avoid the rainy season and humidity that typically follows Hinamatsuri.\n[…]\nIt is said that the first time hina dolls were shown in the manner they are now as part of the Peach Festival was when the young princess Meisho succeeded to the throne of her abdicating father, Emperor Go-Mizunoo, in 1629. Because empresses regnant in Japan at the time were not allowed to get married, Meisho's mother, Tokugawa Masako, created a doll arrangement showing Meisho blissfully wedded. Hinamatsuri then officially became the name of the festival in 1687.\n[…]\nDuring the Meiji period as Japan began to modernize and the emperor was restored to power, Hinamatsuri was deprecated in favor of new holidays that focused on the emperor's supposed bond with the nation. By focusing on marriage and families, it represented Japanese hopes and values. The dolls were said to represent the emperor and empress; they also fostered respect for the throne.\n[…]\nMurguia, Salvador Jimenez (2011). \"Hinamatsuri and the Japanese Female: A Critical Interpretation of the Japanese Doll Festival\". Journal of Asia Pacific Studies 2.2: 231–247.\n[…]\nHinamatsuri (Doll's Festival) (Archived 10 October 2009 at the Wayback Machine)\n[…]\nHinamatsuri in Sado, Niigata, Japan (Doll's Festival)\n[…]\nVideo on Hinamatsuri  (Hinamatsuri Girls' Day | Doll's Festival)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hinamatsuri",
        "situacao": "ok",
        "texto": "O Festival de Dia Das Meninas (雛祭り, Hinamatsuri), ou \"Dia das Meninas\" é uma festa típica japonesa, que ocorre no dia 3 de março - terceiro dia do terceiro mês. Plataformas com panos (緋毛氈, hi-mōsen) vermelhos em degraus são dispostas para expor bonecas (雛人形, hina-ningyō), que representam o Imperador, a Imperatriz, serviçais, músicos com as vestimentas tradicionais do período Heian. O certo e a qua\n[…]\nA fileira superior apresenta duas bonecas que representam o Imperador O-Dairi-sama (お内裏さま) e a Imperatriz O-Hina-sama (お雛さま). (Dairi significa Palácio Imperial, Hina é menina ou princesa). As bonecas são usualmente dispostas diante de uma tela dourada com dobradiças.\n[…]\nO costume de exibirem-se boneca começou durante o período Edo. Antigamente as pessoas acreditavam que as bonecas possuíam o poder de afastar os maus espíritos, e assim protegeria o dono.\n[…]\nO Hinamatsuri traz vestígios de um antigo costume japonês chamado Hina-nagashi (雛流し; lit. balsa da boneca) no qual bonecas feitas de papel eram colocadas num rio, que dirige-se ao mar, levando junto consigo os males ou os maus espíritos para proteger seus donos\n[…]\nDocinhos feitos com arroz glutinoso (mochigome) crocante e açucarado. A camada externa de açúcar tem as cores branca que representa a neve do final do inverno, verde que representa a grama nova e rosa, as flores de pessegueiro. Uma superstição popular diz que se a exposição inteira não for desmontada após o período do festival, a meninas de tal família não conseguem se casar futuramente.\n[…]\nO sakuramochi é um doce tradicional japonês (wagashi), feito com arroz glutinoso e anko (pasta de feijão azuki). O bolinho é rosado e envolto com uma folha de cerejeira em conserva. Existem duas versões do doce: uma é feita com os grãos de arroz inteiros (estilo Kansai) e outra é feita com a farinha do arroz grelhada como crepe (estilo Tóquio).\n[…]\nCultura Japonesa",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Koinobori",
      "descricao": "Bandeiras em forma de carpa hasteadas no Japão para o Dia das Crianças, em cinco de maio."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "As carpas do Dia das Crianças japonês simbolizam força porque, segundo uma lenda chinesa, a carpa que sobe uma cascata se transforma em quê?",
    "resposta": "Dragão",
    "distratores": [
      "Garça",
      "Tartaruga",
      "Fênix"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Koinobori"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Koinobori",
        "situacao": "ok",
        "texto": "Koinobori (鯉のぼり), meaning 'carp streamer' in Japanese, are carp-shaped windsocks traditionally flown in Japan to celebrate Tango no sekku (端午の節句), a traditional calendrical event which is now designated as Children's Day (子供の日, Kodomo no hi), a national holiday in Japan. Koinobori are made by drawing carp patterns on paper, cloth, or other nonwoven fabric. They are then allowed to flutter in the w\n[…]\nThe koinobori is included in Unicode as U+1F38F 🎏 CARP STREAMER.\n[…]\nA typical koinobori set consists of, from the top of the pole down, a pair of arrow-spoked wheels (矢車, yaguruma) with a ball-shaped spinning vane, a mounting windsock (吹流し, fukinagashi), and finally the koinobori. For the windsock above the koinobori, two main kinds are used: the five-colored windsock (五色吹流し), based on the five elements of Chinese philosophy, and patterned windsocks (柄物吹流し), often featuring a mon (家紋, family crest).\n[…]\nKoinobori range from a few centimetres to a few metres long. In 1988, a 100 m (330 ft) long koinobori weighing 350 kg (770 lb) was made in Kazo, Saitama.\n[…]\nRelated Tango no sekku traditions include kite-flying, kite-fighting, the display of samurai dolls and miniature Japanese armor and helmets (kabuto) in the home, the bathing with iris in the bathtub, the consumption of Kashiwa mochi (sticky rice cakes wrapped in oak leaves) and shōbu-sake (sake soaked with thinly sliced iris root and leaves), and, in some areas, the tradition of making young boys crawl through the koinobori for good fortune.\n[…]\nA famous koinobori song often sung by children and their families. It was published in Ehon shōka haru no maki (Picture Songbook, Spring) in 1932. The lyrics are by Miyako Kondō (近藤宮子). The composer is unknown.\n[…]\nMedia related to Koinobori at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Koinobori",
        "situacao": "ok",
        "texto": "Koinobori (鯉幟; literalmente, Bandeira de Carpa) é um costume do povo japonês de comemorar o Dia dos Meninos no dia cinco de maio hasteando birutas em forma de carpa. O costume anterior à restauração Meiji chamava-se fukinagashi.\n[…]\nA data era comemorada por militares e civis, com os militares hasteando birutas que lembram vagamente uma lula e a plebe hasteando carpas simbolizando aguerrimento, tenacidade e obstinação, características essas que os pais apreciariam ver incorporadas em seus filhos varões.\n[…]\nNo Japão, meninos e meninas são homenageados, tradicionalmente, em dias separados, havendo o Dia dos Meninos e o Dia das Meninas. O Dia das Crianças é posterior à Segunda Guerra, sendo comemorado no mesmo Dia dos Meninos (cinco de maio). A tendência moderna é que o koinobori se sincretize com a comemoração do Dia das Crianças e adquira um caráter cada vez mais decorativo, menos varonil, com a carpa representando a esperança dos pais de que suas crianças cresçam fortes e saudáveis.\n[…]\nO Dia das Crianças é o desfecho da Golden Week (Semana de Ouro) do japonês que junta três feriados nacionais:  o Dia de Showa (29 de abril), o Dia da Constituição (3 de maio) e o Dia das Crianças (5 de maio). O dia 4 de maio é o Dia do Verde, dia que é \"enforcado\" sempre que os feriados do dia 3 e 5 caem num dia da semana. O 1.º de Maio, embora não seja feriado nacional no Japão, também tem sido motivo de comemoração.\n[…]\nO koinobori é hasteado no final de abril para se estender até o Dia das Crianças.\n[…]\nDia das Crianças",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Carnaval de Veneza",
      "descricao": "Festival anual de Veneza, na Itália, famoso por suas máscaras e fantasias elaboradas."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Depois de quase dois séculos de decadência e proibições, o Carnaval de Veneza voltou a ser celebrado oficialmente em que década?",
    "resposta": "Década de 1970",
    "distratores": [
      "Década de 1920",
      "Década de 1950",
      "Década de 1990"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Carnival_of_Venice"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Carnival_of_Venice",
        "situacao": "ok",
        "texto": "The Carnival of Venice (Italian: Carnevale di Venezia; Venetian: Carnaval de Venessia) is an annual festival held in Venice, Italy, famous for its elaborate costumes and masks. The Carnival ends on Shrove Tuesday (Martedì Grasso or Mardi Gras), which is the day before the start of Lent on Ash Wednesday.\n[…]\n2011: La famille Fabergé by Horst Raack, and Ommagio a Venezia by Paolo and Cinzia Pagliasso and Anna Rotonaia, best costume for the official theme 19th century by Lea Luongsoredju and Roudi Verbaanderd.\n[…]\n2015: Le stelle dell'amore by Horst Raack, best costume for the official theme La regina della cucina veneziana by Tanja Schulz-Hess, most creative costume Monsieur Sofa et Madame Coco by Lorenzo Marconi.\n[…]\nIn February 2020, the Governor of Veneto Luca Zaia announced the decision to call off the Carnival celebrations in an attempt to contain the spread of the coronavirus disease.\n[…]\nThe mask was originally beaked with a purpose in congruence with the miasmatic theory of disease practiced at that time: the hollow beak allowed for the containment of flowers and other sweet-smelling substances designed to keep away the foul odours that were thought to spread infection. Those who wear the plague doctor mask often also wear the associated clothing of the plague doctor. The popularity of the Medico della peste among carnival celebrants can be seen as a memento mori."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Carnaval_de_Veneza",
        "situacao": "ok",
        "texto": "O Carnaval de Veneza (em italiano: Carnevale di Venezia; em vêneto: Carnaval de Venessia) é um festival anual realizado em Veneza na Itália, famoso em todo o mundo por seus trajes elaborados e máscaras. O carnaval termina na terça-feira de carnaval (Martedì Grasso ou Mardi Gras), que é um dia antes do início da Quaresma, na quarta-feira de cinzas.\n[…]\nSegundo a lenda, o Carnaval de Veneza começou após a vitória militar da República de Veneza sobre o patriarca de Aquileia, Ulrico di Treven, no ano de 1162. Em homenagem a esta vitória, o povo começou a dançar e se reunir na Praça de São Marcos. Aparentemente, este festival começou nesse período e tornou-se oficial durante o Renascimento. No século 17, o carnaval barroco preservou a imagem de prestígio de Veneza no mundo. Foi muito famoso durante o século 18.\n[…]\nDepois de uma longa ausência, o Carnaval retornou em 1979. O governo italiano decidiu trazer de volta a história e a cultura de Veneza e procurou usar o tradicional Carnaval como peça central de seus esforços. A remodelação das máscaras começou como a busca de alguns estudantes universitários venezianos para o comércio turístico. Desde então, cerca de 3 milhões de visitantes vêm a Veneza todos os anos para o Carnaval.\n[…]\nO conto O Barril de Amontillado, escrito por Edgar Allan Poe, se passa em Veneza durante o carnaval.\n[…]\nAs máscaras venezianas aparecem com destaque nos filmes De Olhos Bem Fechados e O Sábado das Bruxas, de Marco Bellocchio. As lojas que forneceram as máscaras incluem Ca' Macana e Il Canovaccio em Veneza.\n[…]\nNo Brasil, o Carnaval de Veneza acontece durante a Festa da Gastronomia em Nova Veneza, Santa Catarina, e Nova Veneza, Goiás.\n[…]\n«Site Oficial do Carnaval de Veneza» (em inglês e italiano)\n[…]\n«Página do Carnaval de Veneza» (em inglês e italiano)\n[…]\n«Cidade com o maior e mais tradicional Carnaval de Veneza do Brasil»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Mariachi",
      "descricao": "Conjunto musical tradicional mexicano com violinos, trompetes, violão, vihuela e guitarrón, em trajes de charro."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "O mariachi nasceu no oeste do México. Qual estado mexicano, terra também da tequila, é considerado o seu berço?",
    "resposta": "Jalisco",
    "distratores": [
      "Oaxaca",
      "Veracruz",
      "Chihuahua"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Mariachi",
      "https://en.wikipedia.org/wiki/Jalisco"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mariachi",
        "situacao": "ok",
        "texto": "Mariachi (US: , UK: , Spanish: [maˈɾiaʧi]) is a genre of regional Mexican music dating back to at least the 18th century, evolving over time in the countryside of various regions of western Mexico. The usual mariachi group today consists of as many as eight violins, two trumpets and at least one guitar, including a high-pitched Mexican Vihuela and an acoustic bass guitar called a guitarrón, and al\n[…]\nThe most prized of the mariachis remained those from the state of Jalisco, particularly the areas of Cocula and Tecalitlán. They represented Mexico to the people during the Independence Day celebrations in Mexico City in 1933 as well as during Lázaro Cárdenas' election campaign in 1936.\n[…]\nMariachi Vargas still remains, tracing its history in terms of generations, starting in the 1890s, with these generations maintaining the group's authenticity as a mariachi while the music has evolved. The last Vargas associated with the group died in 1985. That the group still considers itself the original group comes from the notion of passing on the music by generations of musicians, as the original son jaliscense was learned.\n[…]\nThe educational movement is controversial with some trained in the traditional manner, who are skeptical about these programs and their potential to change the tradition. The changes, especially standardization of publishing, are slowly impacting mariachi in Mexico. One difficulty of arranging mariachi pieces is that the son jaliscense that mariachi is based on alternates between 34 and 68 time.\n[…]\nEnglish singer Sophie Ellis-Bextor's 2016 album Familia was inspired by a visit to Mexico. She posted a video in which she appears singing one of the songs from the album, \"Death of Love\", next to a group of mariachis in Puerto Vallarta, Jalisco.\n[…]\nSon jaliscience\n[…]\nSones regionales mexicanos\n[…]\n\"El Charro Mexicano\" (ranchera-son)\n[…]\nMedia related to Mariachi at Wikimedia Commons"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Jalisco",
        "situacao": "ok",
        "texto": "Jalisco, officially the Free and Sovereign State of Jalisco, is one of the 31 states which, along with Mexico City, comprise the 32 Federal Entities of Mexico. It is located in western Mexico and is bordered by six states, Nayarit, Zacatecas, Aguascalientes, Guanajuato, Michoacán, and Colima. Jalisco is divided into 125 municipalities, and its capital and largest city is Guadalajara.\n[…]\nJalisco is one of the most economically and culturally important states in Mexico, owing to its natural resources as well as its long history and culture. Many of the characteristic traits of Mexican culture are originally from Jalisco, such as mariachi, tequila, ranchera music, birria, and jaripeo, hence the state's motto: Jalisco es México ('Jalisco is Mexico').\n[…]\nDuring the Mexican–American War, Jalisco planned defensive measures along with the states of Mexico, Querétaro, San Luis Potosí, Zacatecas and Aguascalientes. However, although the U.S. Navy came as close as the port of San Blas, the state was not invaded before the war ended.\n[…]\nThe idiom Jalisco es México (\"Jalisco is Mexico\") is commonly used to refer to how many of the things which are typically associated with Mexico have their origins in Jalisco. These include mariachis, rodeos called charreadas and jaripeos, dresses with wide skirts decorated with ribbons, the Mexican Hat Dance, tequila, and the wide-brimmed sombrero hat.\n[…]\nTequila is a hard liquor which comes from a small region of Jalisco and which is made from the blue agave plant. It is the most famous type of mezcal produced in Mexico, and the only mezcal which is produced industrially with strict standards. The tequila industry supports large scale cultivation of the blue agave, with about 200,000 people employed through it directly or indirectly.\n[…]\nCharreada, the Mexican form of rodeo and closely tied to mariachi music, is popular in Jalisco.\n[…]\nFlag of Jalisco"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mariachi",
        "situacao": "ok",
        "texto": "Mariachi é um gênero musical popular do México e, simultaneamente, um termo de origem incerta que se aplica aos grupos musicais que performam este gênero. Originado no estado de Jalisco, no leste do México, mais precisamente numa vila rural de nome Cocula, o mariachi floresceu entre os peões — lavradores e nativos — como música popular, incorporando ritmos e harmonia provenientes da Europa e dos a\n[…]\nCostumam ainda apresentar-se para com trupes regionais da dança do México. Costumam também fazer serenatas para jovens bonitas a pedido de seus namorados e pretendentes.\n[…]\nDepois da revolta de 1910/1920 contra a ditadura de Porfirio Díaz — é chamada a volta em México — a música do mariachi transformou-se numa expressão do orgulho mexicano e do patriotismo, um memorial aos heróis nacionais e aos esforços dos peões. Os mariachis seguiram uma migração larga das vilas e das fazendas para as cidades, particularmente na Cidade do México. Promovido por Lázaro Cárdenas, o presidente populista eleito em 1934, os mariachis encontraram o favor entre elites mexicanas.\n[…]\nConduzido por Rubén Fuentes e outras lendas, os mariachis começaram a aprender ler a música. Transformaram-se em figuras populares em filmes mexicanos e nas mostras de rádio. O mariachi emitiu da alma do México, assim como o jazz emergiu do espírito dos Estados Unidos.\n[…]\nCom o passar dos séculos, os mariachis moldaram o seu excesso musical com dois estilos distintos de canções, incluindo aqueles de regiões diferentes dentro do México. Cantam, por exemplo, boleros, um estilo que inclui \"Solamente Una Vez\". Cantam o lento do ranchera, um estilo executado com o medidor lento e a emoção poderosa.\n[…]\nEles também executam os sones, ou canções, de várias regiões através de México; a música folclórico do balé de várias regiões; e as melodias da dança se chamam jarabe e huapango.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Lanterna de abóbora",
      "descricao": "Lanterna esculpida com rosto assustador, típica do Halloween."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Na Irlanda e na Escócia, antes de a abóbora americana virar moda, as lanternas com rosto do Halloween eram esculpidas em quê?",
    "resposta": "Nabos",
    "distratores": [
      "Melões",
      "Maçãs",
      "Cocos"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Jack-o%27-lantern"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Jack-o%27-lantern",
        "situacao": "ok",
        "texto": "A jack-o'-lantern (or jack o'lantern) is a carved lantern, most commonly made from a pumpkin, or formerly a root vegetable such as a mangelwurzel, rutabaga or turnip. Jack-o'-lanterns are associated with the Halloween holiday. Its name comes from the phenomenon of strange lights flickering over peat bogs, called jack-o'-lanterns (also known as will-o'-the-wisps).\n[…]\nIn the United States and Canada, the carved pumpkin was first associated with the harvest season in general before it became a symbol of Halloween. In 1895, an article on Thanksgiving entertaining recommended giving a lit jack-o'-lantern as a child's prize in Thanksgiving games. The poet John Greenleaf Whittier, who was born in Massachusetts in 1807, wrote the poem \"The Pumpkin\" (1850), which mentions Thanksgiving but not Halloween:Oh!—fruit loved of boyhood!—the old days recalling,\n[…]\nAn 1885 article \"Halloween Sports and Customs\" contrasts the American jack-o'-lantern custom with the British bonfire custom:\n[…]\nIt is an ancient British custom to light great bonfires (Bone-fire to clear before Winter froze the ground) on Hallowe'en, and carry blazing fagots about on long poles; but in place of this, American boys delight in the funny grinning jack-o'-lanterns made of huge yellow pumpkins with a candle inside.\n[…]\nAdaptations of Washington Irving's short story \"The Legend of Sleepy Hollow\" (1820) often show the Headless Horseman with a jack-o'-lantern in place of his severed head. In the original story, a shattered pumpkin is discovered next to the missing Ichabod Crane's abandoned hat on the morning after Crane's supposed encounter with the Horseman. The Horseman chased Crane and possibly threw his severed head at him, but the story does not reference jack-o'-lanterns or Halloween.\n[…]\nThe History of The Jack-O-Lantern (& How It All Began With a Turnip)\n[…]\nWhat’s the Origin of Jack-O’-Lanterns?"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jack-o%27-lantern",
        "situacao": "ok",
        "texto": "A jack-o'-lantern (do inglês Jack da Lanterna) é o apelido em língua inglesa dado a uma abóbora iluminada feita como enfeite para o Dia das Bruxas (ou Halloween, em inglês). Em Portugal, esse enfeite é chamado de coca.\n[…]\nO termo jack-o'-lantern foi originalmente usado para descrever o fenômeno ignis fatuus (lit., \"fogo fátuo\"). Usado principalmente no Leste da Inglaterra, os primeiros registros do termo datam da década de 1660.\n[…]\nAdaptações de conto The Legend of Sleepy Hollow (1820), de Washington Irving, muitas vezes retratam o Cavaleiro Sem Cabeça com uma abóbora ou jack-o'-lantern no lugar de sua cabeça decepada.\n[…]\nA aplicação do termo para abóboras esculpidas no inglês estadunidense é atestada pela primeira vez em 1834. A associação da lanterna de abóbora esculpida com o Dia das Bruxas foi registrada na edição de 1 de novembro de 1866 edição do Daily News (Kingston, Ontário).\n[…]\nNos Estados Unidos, a abóbora esculpida foi primeiramente associada com a estação da colheita, muito antes que se transformasse um emblema do Halloween. Em 1900, um artigo sobre o Dia de Ação de Graças recomendava lanternas de abóbora como parte das festividades.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Hanukkah",
      "descricao": "Festa judaica de oito dias em que se acendem as velas de um candelabro de nove braços."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "No candelabro da Hanucá, uma vela fica destacada das outras e serve para acendê-las. Como ela se chama?",
    "resposta": "Shamash",
    "distratores": [
      "Ner tamid",
      "Havdalá",
      "Shofar"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Hanukkah_menorah",
      "https://en.wikipedia.org/wiki/Hanukkah"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hanukkah_menorah",
        "situacao": "ok",
        "texto": "A Hanukkah menorah, also called hanukkiah/chanukkiyah or khanuke lomp is a nine-branched candelabrum lit during the eight-day Jewish holiday of Hanukkah. Eight of the nine branches hold lights (candles or oil lamps) that symbolize the eight nights of the holiday. On each night, one more light is lit than the previous night, until on the final night all eight branches are ignited. The ninth branch \n[…]\nThe shamash must be offset on a higher or lower plane than the main eight candles or oil lamps, but there are differing opinions as to whether all the lights must be arranged in a straight line, or if the hanukkiah can be arranged in a curve. The bottom lamps must be even leveled. Unlike Temple menorahs, Hanukkah menorahs can make use of any material, so long as it's fire safe.\n[…]\nMany museums have notable collections of hanukkiahs, including the Israel Museum in Jerusalem, the Metropolitan Museum of Art in New York City, and the Jewish Museum in London (which owns the Lindo lamp).\n[…]\nEnglish speakers most commonly call the lamp a \"menorah\" or \"Hanukkah menorah\" (the Hebrew word menorah simply meaning \"lamp\"). In Modern Hebrew, the lamp is generally called a chanukkiyah, a term which originated among Judeo-Spanish speaking Sephardic communities in the Eastern Mediterranean in the 18th century. It was introduced into Modern Hebrew by Hemda Ben-Yehuda, whose husband Eliezer Ben Yehuda was the leading force behind the revival of the Hebrew language in the late 19th century.\n[…]\nMore offbeat Hanukkah products on the American market include a \"Menorah Tree\" inspired by the Christmas tree tradition, and even a \"Menorah Bong\". The \"Thanksgivukkah\" coincidence of Thanksgiving and the second night of Hanukkah in 2013 inspired a turkey-shaped \"menurkey\".\n[…]\nHanukkah Lamps[link removed] from the collection of The Jewish Museum (New York)\n[…]\nHanukkah lamp collection at the Israel Museum."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Hanukkah",
        "situacao": "ok",
        "texto": "Hanukkah (IPA: ; Hebrew: חֲנֻכָּה, romanized: Ḥănukkā, lit. 'dedication', ) is a Jewish holiday that commemorates the Maccabean Revolt against the Seleucid Empire in the 2nd century BCE, when the Maccabees successfully recovered Jerusalem and the Second Temple.\n[…]\nBeginning on the 25th of Kislev on the Hebrew calendar, Hanukkah lasts for eight nights and days. Each night is marked by lighting a Hanukkah menorah, a nine-branched candelabrum containing spaces for eight ceremonial lights plus one additional candle, the shámash (שַׁמָּשׁ, 'attendant'), which is used to light the others. Aside from the shamash, one candle is lit on the first night, two on the second, and so on, until all eight are burning together on the final night.\n[…]\nMost Jewish homes have a special candelabrum called either a Hanukkah menorah (the traditional name, menorah being Hebrew for 'lamp') or a Chanukiah (the modern Israeli term). Some families use an oil-lamp menorah (traditionally filled with olive oil) for Hanukkah; like the candle version, it has eight wicks to light, plus the additional shammash light.\n[…]\nRomanian Jews eat pasta latkes as a traditional Hanukkah dish.\n[…]\nThe light of hope must outlast the fires of hate. That's what the Hanukkah story teaches us.\n[…]\nToday, the presence of Hanukkah bushes is generally discouraged by most rabbis.\n[…]\nZion, N.; Spectre, B. (2000). A Different Light: A Pluralist Anthology : the Big Book of Hanukkah. Devora Pub. ISBN 978-1-930143-37-1. Retrieved 17 September 2023.\n[…]\nHanukkah Archived 12 February 2017 at the Wayback Machine at About.com\n[…]\nHanukkah at the History channel\n[…]\nHanukkah at the Jewish Encyclopedia\n[…]\nHanukkah Archived 27 September 2015 at the Wayback Machine at the Jewish Agency for Israel\n[…]\nHanukkah at Chabad.org\n[…]\nHanukkah at Aish HaTorah"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Chanuki%C3%A1",
        "situacao": "ok",
        "texto": "Chanukiá ou Chanuquiá (hebraico חנוכיה) é um candelabro de nove braços, usado durante os oito dias do feriado judaico de Chanuká, também chamado de Festa das Luzes.\n[…]\nNesta celebração, os judeus de todo o mundo comemoram a libertação do Templo de Jerusalém do domínio dos Gregos no século II a.C. sob a liderança dos Macabeus e o milagre do azeite que havia numa botija — que duraria um dia só — e que queimou no candelabro do Templo por oito dias.\n[…]\nEste é o motivo dos nove braços da Chanukiá, sendo o braço do meio, mais proeminente, denominado Shamash (servente), pois a vela que é colocada neste braço é usada para acender as velas que são colocadas nos outros oito braços.\n[…]\nOutro candelabro importante para a cultura judaica é o Menorá (hebraico מנורה, menorah). O Menorá possui sete braços e é um dos símbolos do Judaísmo, juntamente com a Estrela de Davi.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Árvore de Natal",
      "descricao": "Pinheiro, natural ou artificial, enfeitado com luzes e ornamentos durante as festas de fim de ano."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Uma lenda alemã atribui a qual reformador protestante a ideia de pôr velas acesas num pinheiro, para imitar as estrelas da noite de Natal?",
    "resposta": "Martinho Lutero",
    "distratores": [
      "João Calvino",
      "Ulrico Zuínglio",
      "John Wesley"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Christmas_tree"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Christmas_tree",
        "situacao": "ok",
        "texto": "A Christmas tree is a decorated tree, usually an evergreen conifer such as a spruce, pine or fir, associated with the celebration of Christmas. It may also be an artificial tree of similar appearance.\n[…]\nModern Christmas trees originated in Central Europe and the Baltic states, particularly Germany and Livonia (now Estonia and Latvia) during the Renaissance in early modern Europe. Its 16th-century origins are sometimes associated with Protestant Christian reformer Martin Luther, who is said to have first added lighted candles to an evergreen tree.\n[…]\nThe Christmas tree was first recorded to be used by German Lutherans in the 16th century, with records indicating that a Christmas tree was placed in the Cathedral of Strasbourg in 1539 under the leadership of the Protestant Reformer Martin Bucer. The Moravian Christians put lighted candles on those trees.\n[…]\nAfter the Protestant Reformation, such trees are seen in the houses of upper-class Protestant families as a counterpart to the Catholic Christmas cribs. This transition from the guild hall to bourgeois family homes in the Protestant parts of Germany ultimately gives rise to the modern tradition as it developed in the 18th and 19th centuries. In the present day, the churches and homes of Protestants and Catholics feature both Christmas cribs and Christmas trees.\n[…]\nAlong the Lower Rhine, an area of Roman Catholic majority, the Christmas tree was largely regarded as a Protestant custom. As a result, it remained confined to the upper Rhineland for a relatively long period of time. The custom did eventually gain wider acceptance beginning around 1815 by way of Prussian officials who emigrated there following the Congress of Vienna."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/%C3%81rvore_de_Natal",
        "situacao": "ok",
        "texto": "Uma árvore de Natal é uma árvore decorada, geralmente uma conífera perene, como um abeto, pinheiro ou pinheiro-do-canadá, associada à celebração do Natal. Também pode consistir numa árvore artificial de aparência semelhante.\n[…]\nAs árvores de Natal modernas tiveram origem na Europa Central e nos estados bálticos, particularmente na Estônia, Alemanha e Livônia (atual Letônia), durante o Renascimento, no início da era moderna na Europa. As suas origens no século XVI são por vezes associadas ao reformador cristão protestante Martinho Lutero, que terá sido o primeiro a adicionar velas acesas a uma árvore perene.\n[…]\nO primeiro registo da utilização da árvore de Natal por luteranos alemães data do século XVI, com registos que indicam que uma árvore de Natal foi colocada na Catedral de Estrasburgo em 1539, sob a liderança do reformador protestante Martinho Bucer.\n[…]\nOs cristãos morávios colocavam velas acesas nessas árvores.\" A representação mais antiga conhecida e datada com certeza de uma árvore de Natal está na escultura da pedra angular de uma casa particular em Turckheim, Alsácia (então parte do Sacro Império Romano da Nação Alemã, hoje parte da França), com a data de 1576.\n[…]\nAo decorar a árvore de Natal, muitas pessoas colocam uma estrela no topo, simbolizando a Estrela de Belém. Tornou-se popular também o uso de um anjo no topo da árvore de Natal para simbolizar os anjos mencionados nos relatos do nascimento de Jesus. Além disso, no contexto da celebração cristã do Natal, a árvore, sempre verde, simboliza a vida eterna; as velas ou luzes na árvore representam Cristo como a luz do mundo.\n[…]\nÁrvore de Natal da Trafalgar Square\n[…]\nMaior Árvore de Natal da Europa\n[…]\nMedia relacionados com Árvore de Natal no Wikimedia Commons",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Cerimônia do chá japonesa",
      "descricao": "Ritual tradicional japonês de preparo e serviço do chá, ligado ao zen-budismo."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Que mestre japonês do século dezesseis, a serviço de grandes chefes militares, deu à cerimônia do chá sua forma clássica, simples e rústica?",
    "resposta": "Sen no Rikyu",
    "distratores": [
      "Murata Juko",
      "Takeno Joo",
      "Eisai"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Sen_no_Riky%C5%AB",
      "https://en.wikipedia.org/wiki/Japanese_tea_ceremony"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sen_no_Riky%C5%AB",
        "situacao": "ok",
        "texto": "Sen no Rikyū (Japanese: 千 利休; 1522 – April 21, 1591), also known simply as Rikyū, was a Japanese tea master considered the most important influence on the Japanese tea ceremony, particularly the tradition of wabi-cha. He was also the first to emphasize several key aspects of the ceremony, including rustic simplicity, directness of approach and honesty of self. Originating from the Sengoku and Azuc\n[…]\nRaku ware chawan (tea bowls) were originated through his collaboration with a tile-maker named Raku Chōjirō. Rikyū preferred simple, rustic, locally-made items to the expensive, Chinese-made items that were fashionable at the time. Though not the inventor of the philosophy of wabi-sabi, which finds beauty in the very simple, Rikyū is among those most responsible for popularizing it, developing it, and incorporating it into tea ceremony.\n[…]\nThere is, however, debate over whether Nanbō even existed, and some scholars argue that his writings were actually by the samurai litterateur Tachibana Jitsuzan (1655-1708), who claimed to have found and transcribed these texts. Yamanoue's chronicle, the Yamanoue Sōji ki (山上宗二記), gives commentary about Rikyū's teachings and the state of chanoyu at the time of its writing.\n[…]\nMemorials for Rikyū are observed annually by many schools of Japanese tea. The Omotesenke school's annual memorial takes place at the family's headquarters each year on March 27, and the Urasenke school's takes place at its own family's headquarters each year on March 28. The three Sen families (Omotesenke, Urasenke, Mushakōjisenke) take turns holding a memorial service on the 28th of every month, at their mutual family temple, the subsidiary temple Jukōin at Daitoku-ji temple.\n[…]\nMomoyama, Japanese Art in the Age of Grandeur, an exhibition catalog from The Metropolitan Museum of Art (fully available online as PDF), which contains material on Sen no Rikyū"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Japanese_tea_ceremony",
        "situacao": "ok",
        "texto": "The Japanese tea ceremony is a cultural activity known as sadō/chadō (茶道, 'the way of tea') or chanoyu (茶の湯, 'hot water for tea'). The ceremony focuses on the presentation and serving of matcha (抹茶), powdered green tea; this procedure is called temae (点前). Much less commonly, Japanese tea practice uses leaf tea, primarily sencha. This practice is known as senchadō (煎茶道, 'the way of sencha').\n[…]\nSen no Rikyū's great-grandchildren founded the Omotesenke, Urasenke, and Mushakōjisenke schools of tea ceremony. As a result, the tea ceremony spread not only to daimyo (feudal lords) and the samurai class but also to the general public, which led to the establishment of various tea ceremony schools that continue to this day.\n[…]\nThe most important part of a chaji is the preparation and drinking of koicha, which is followed by usucha. The host serves thin tea to each guest in an individual bowl, while one bowl of thick tea is shared among several guests, symbolizing a deep connection among guests. This style of sharing a bowl of koicha first appeared in historical documents in 1586 and is considered to have been invented by Sen no Rikyū.\n[…]\nHistorian and author Haga Kōshirō points out that it is clear from the teachings of Sen no Rikyū recorded in the Nanpō roku that the suitability of any particular scroll for a tea gathering depends not only on the subject of the writing itself but also on the virtue of the writer. Haga points out that Rikyū preferred to hang bokuseki (\"ink traces\"), the calligraphy of Zen Buddhist priests, in the tea room.\n[…]\nIt evolved from the \"free-form\" style of ikebana called nageirebana (投げ入れ, \"throw-in flowers\"), which was used by early tea masters. Chabana was developed by Sen no Rikyū. He is said to have taught that chabana should give the viewer the same impression that those flowers naturally would give if they were still growing outdoors, in nature."
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
