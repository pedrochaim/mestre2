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
7. **Distratores** (só em `multipla`): críveis, da mesma categoria da resposta e com no máximo 4 palavras (MANIFESTO §6).
8. **Duplicatas:** se duas perguntas do lote perguntam o mesmo fato, mantenha a melhor e descarte a outra.

Devolva exatamente uma avaliação para cada pergunta, usando o `indice` informado.

# Lote

[
  {
    "indice": 1,
    "ancora": {
      "nome": "Zodíaco chinês",
      "descricao": "Ciclo de doze anos do calendário chinês em que cada ano é associado a um animal."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Segundo a lenda da Grande Corrida, que definiu a ordem do zodíaco chinês, qual animal chegou em primeiro, pulando das costas do boi?",
    "resposta": "Rato",
    "distratores": [
      "Tigre",
      "Dragão",
      "Coelho"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Chinese_zodiac"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Chinese_zodiac",
        "situacao": "ok",
        "texto": "The Chinese zodiac is a traditional classification scheme based on the Chinese calendar that assigns an animal and its reputed attributes to each year in a repeating twelve-year (or duodenary) cycle. The zodiac is very important in Chinese culture as a reflection of traditional Chinese philosophy. Chinese folkways held that one's personality is related to the attributes of their zodiac animal.\n[…]\n未: Old Chinese *m[ə]t-s (compare Atayal miːts)\n[…]\nThe zodiac is widely used in commercial culture, for example, in the Chinese New Year market, and popular zodiac-related products, such as crafts, toys, books, accessories, and paintings and Chinese lunar coins. The coins depict zodiac animals, inspired the Canadian Silver Maple Leaf coins, as well as varieties from Australia, South Korea, and Mongolia.\n[…]\nThe Chinese zodiac is also used in some Asian countries that were under the cultural influence of China. However, some of the animals in the zodiac may differ by country.\n[…]\nThe Vietnamese zodiac varies from the Chinese zodiac with the second animal being the Water Buffalo instead of the Ox, and the fourth animal being the Cat instead of the Rabbit.\n[…]\nThe Cham zodiac uses the same order as the Chinese zodiac.\n[…]\nIn the Persian version of the Eastern zodiac brought by Mongols during the Middle Ages, the Chinese word lóng and Mongol word lū (Dragon) was translated as nahang meaning \"water beast\", and may refer to any dangerous aquatic animal both mythical and real (crocodiles, hippos, sharks, sea serpents, etc.).\n[…]\nIn the Kyrgyz version of the Chinese zodiac (Kyrgyz: мүчөл, müçöl) the words for the Dragon (Kyrgyz: улуу, uluu), Monkey (Kyrgyz: мечин, meçin) and Tiger (Kyrgyz: барс, bars) are only found in Chinese zodiac names, other animal names include Cow, Rabbit, Snake, Horse, Sheep, Chicken, Dog and Wild boar.\n[…]\nChinese animal symbolism\n[…]\nAnimal fighting styles\n[…]\nChinese spiritual world concepts"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hor%C3%B3scopo_chin%C3%AAs",
        "situacao": "ok",
        "texto": "O Horóscopo chinês dos 12 signos é uma das referências que a Astrologia chinesa utiliza para realizar seus estudos.\n[…]\nApenas doze animais compareceram e ganharam um ano de acordo com a ordem de chegada: o Rato; O Boi ou Búfalo (Vaca, na Tailândia); o Tigre (Pantera, na Mongólia); O Coelho ou Lebre (Gato, no Vietnã); o Dragão (Crocodilo, na Pérsia); a Cobra ou Serpente (Pequeno Dragão, na Tailândia); o Cavalo; a Cabra, Bode ou Ovelha; o Macaco; o Galo ou Galinha; o Cão; o Porco ou Javali. O Cavalo de Fogo rege a cada 60 anos.\n[…]\nDe acordo com um antigo texto budista, quando os animais terminam suas meritórias tarefas, fazem um juramento solene perante os budas de que um deles estará sempre, por um dia e por uma noite, pelo mundo, pregando e convertendo, enquanto os outros onze ficam praticando o bem em silêncio. O Rato inicia sua jornada no primeiro dia da sétima Lua; procura persuadir os nativos do seu signo a praticarem boas ações e a corrigirem os defeitos de seus temperamentos.\n[…]\nOs demais bichos fazem o mesmo, sucessivamente, e o Rato reinicia seu trabalho no 13º dia. Assim, graças ao trabalho constante dos animais, os budas garantem uma certa ordem no universo .\n[…]\nRato, Dragão, Macaco:\n[…]\nO equilíbrio desses dois pólos traz a harmonia e a ordem no universo e dentro do nosso corpo.\n[…]\nYang: Rato, Tigre, Dragão, Cavalo, Macaco e Cão\n[…]\nEm cada ano, um dos 12 animais do zodíaco é governado por um dos cinco elementos. Deste modo, o ciclo se encerra em 60 anos. A data é comemorada pelos povos orientais que seguem o calendário chinês, e dá início a uma nova repetição de animal e elemento.\n[…]\nÁgua: Rato e Porco",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Matrioska",
      "descricao": "Conjunto russo de bonecas de madeira ocas que se encaixam umas dentro das outras."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Num conjunto de matrioskas, as bonecas russas que se encaixam umas nas outras, qual delas costuma ser maciça e não se abre?",
    "resposta": "A menor",
    "fonte": [
      "https://en.wikipedia.org/wiki/Matryoshka_doll"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Matryoshka_doll",
        "situacao": "ok",
        "texto": "A matryoshka doll or matryoshka (; Russian: матрёшка), also known as a Russian stacking doll, nesting doll, or simply a Russian doll, is a set of wooden dolls of decreasing size placed one inside another. Matryoshka is a diminutive form of Matryosha (Матрёша), in turn an affectionate form of the Russian female first name Matryona (Матрёна).\n[…]\nThe largest collection of matryoshkas in the United States is in the Museum of Russian Art (Minnesota), which keeps about 3,500 matryoshkas.\n[…]\nExamples of metaphorical use of matryoshka include the matrioshka brain, the Matroska media-container format, and the Russian Doll model of multi-walled carbon nanotubes.\n[…]\nThe metaphor of the matryoshka doll (or its onion equivalent) is also used in the description of shell companies and similar corporate structures that are used in the context of tax-evasion schemes in low-tax jurisdictions (for example, offshore tax havens).\n[…]\nMatryoshka is often seen as a symbol of the feminine side of Russian culture. Matryoshka is associated in Russia with family and fertility. Matryoshka is used as the symbol for the epithet Mother Russia.\n[…]\nMatryoshka dolls are a traditional representation of the mother carrying a child within her and can be seen as a representation of a chain of mothers carrying on the family legacy through the child in their wombs. Furthermore, matryoshka dolls are used to illustrate the unity of body, soul, mind, heart, and spirit.\n[…]\nIn 2020, the Unicode Consortium approved the matryoshka doll () as one of the new emoji characters in release v.13. The matryoshka or nesting doll emoji was submitted to the consortium by Jef Gray and Samantha Sunne, as a non-religious, apolitical symbol of Russian-East European-Far East Asian culture.\n[…]\nmatreshka.site, a website dedicated to matryoshka"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Matriosca",
        "situacao": "ok",
        "texto": "Uma matriosca (russo: матрёшка; romanizado: matrioshka) ou boneca-russa, é um tradicional brinquedo russo. Constitui-se de uma série de bonecas, feitas geralmente de madeira, colocadas umas dentro das outras, da maior (exterior) até a menor (a única que não é oca). A palavra provém do diminutivo do nome próprio matriona.\n[…]\nO número de figuras que se conseguem encaixar é, geralmente, de seis ou sete, ainda que existam algumas com um número impressionante de peças. A sua forma é simples, mais ou menos cilíndrica e arredondada e mais estreita na parte superior, onde se situa a cabeça das bonecas. Não têm mãos (a não ser as que são pintadas nas suas superfícies). A sofisticação das matrioscas reside, de fato, na complexidade dos motivos pintados.\n[…]\nNa Sérvia, a versão feminina é designada como бабушка (babushka), que significa \"avozinha\", enquanto a versão masculina é designada como дедушка (dyedushka), \"avozinho\".[carece de fontes]? Conta-se que Sergei Maliutin, um pintor artesanal de Abramtsevo, viu uma série de bonecos de madeira representando os Shichi-fuku-jin, os Sete Deuses da Fortuna, encaixados de forma semelhante às bonecas atuais.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Koinobori",
      "descricao": "Bandeiras em forma de carpa hasteadas no Japão para o Dia das Crianças, em cinco de maio."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "No Dia das Crianças japonês, as famílias penduram bandeiras em forma de carpa. A carpa maior, de cor preta, representa quem?",
    "resposta": "O pai",
    "fonte": [
      "https://en.wikipedia.org/wiki/Koinobori"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Koinobori",
        "situacao": "ok",
        "texto": "Koinobori (鯉のぼり), meaning 'carp streamer' in Japanese, are carp-shaped windsocks traditionally flown in Japan to celebrate Tango no sekku (端午の節句), a traditional calendrical event which is now designated as Children's Day (子供の日, Kodomo no hi), a national holiday in Japan. Koinobori are made by drawing carp patterns on paper, cloth, or other nonwoven fabric. They are then allowed to flutter in the w\n[…]\nThe koinobori is included in Unicode as U+1F38F 🎏 CARP STREAMER.\n[…]\nSimilarly, the other colors and sizes of carp came to represent all the family's children, both sons and daughters.\n[…]\nKoinobori range from a few centimetres to a few metres long. In 1988, a 100 m (330 ft) long koinobori weighing 350 kg (770 lb) was made in Kazo, Saitama.\n[…]\nKoinobori have been in use since the 18th century. During the Edo period (1603–1867), samurai households began to decorate their yards with nobori or fukinuke (吹貫) flags, which were colored with mon (family crests) to represent military units, during Tango no Sekku. The nobori and fukinuke were then merged, and the first koinobori appeared in Edo (now Tokyo). The colorful koinobori as they are modernly known became popular in the Meiji era (1868–1912).\n[…]\nDespite this, the connection between the koinobori and male children remains, and many families still do not fly them for their daughters. The koi, known for its ability to swim upstream, represents courage, determination, and the hope that children will grow up healthily. This symbolism pays homage to the myth of longmen from the late Han dynasty, that a golden carp swam up a waterfall at the end of the Yellow River and became a dragon.\n[…]\nA famous koinobori song often sung by children and their families. It was published in Ehon shōka haru no maki (Picture Songbook, Spring) in 1932. The lyrics are by Miyako Kondō (近藤宮子). The composer is unknown.\n[…]\nMedia related to Koinobori at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Koinobori",
        "situacao": "ok",
        "texto": "Koinobori (鯉幟; literalmente, Bandeira de Carpa) é um costume do povo japonês de comemorar o Dia dos Meninos no dia cinco de maio hasteando birutas em forma de carpa. O costume anterior à restauração Meiji chamava-se fukinagashi.\n[…]\nNo Japão, meninos e meninas são homenageados, tradicionalmente, em dias separados, havendo o Dia dos Meninos e o Dia das Meninas. O Dia das Crianças é posterior à Segunda Guerra, sendo comemorado no mesmo Dia dos Meninos (cinco de maio). A tendência moderna é que o koinobori se sincretize com a comemoração do Dia das Crianças e adquira um caráter cada vez mais decorativo, menos varonil, com a carpa representando a esperança dos pais de que suas crianças cresçam fortes e saudáveis.\n[…]\nO Dia das Crianças é o desfecho da Golden Week (Semana de Ouro) do japonês que junta três feriados nacionais:  o Dia de Showa (29 de abril), o Dia da Constituição (3 de maio) e o Dia das Crianças (5 de maio). O dia 4 de maio é o Dia do Verde, dia que é \"enforcado\" sempre que os feriados do dia 3 e 5 caem num dia da semana. O 1.º de Maio, embora não seja feriado nacional no Japão, também tem sido motivo de comemoração.\n[…]\nA figura acima ilustra um koinobori misto, com uma biruta samurai em cima, seguido de um koi preto (representando o pai), de um koi vermelho (representando o primogênito) e de um koi azul (representando um filho mais jovem). Se houver mais meninos na casa, o menino seguinte é representado por um koi verde, um outro por um koi violeta.\n[…]\nO koinobori é hasteado no final de abril para se estender até o Dia das Crianças.\n[…]\nHá uma canção muito popular que é cantada pelos membros da família.\n[…]\nDia das Crianças",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Hinamatsuri",
      "descricao": "Festa japonesa do Dia das Meninas, em que se expõem bonecas da corte imperial em degraus."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "No Hinamatsuri, as bonecas da antiga corte japonesa ficam expostas numa escada de degraus. Quem ocupa o degrau mais alto?",
    "resposta": "O imperador e a imperatriz",
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
        "texto": "O Festival de Dia Das Meninas (雛祭り, Hinamatsuri), ou \"Dia das Meninas\" é uma festa típica japonesa, que ocorre no dia 3 de março - terceiro dia do terceiro mês. Plataformas com panos (緋毛氈, hi-mōsen) vermelhos em degraus são dispostas para expor bonecas (雛人形, hina-ningyō), que representam o Imperador, a Imperatriz, serviçais, músicos com as vestimentas tradicionais do período Heian. O certo e a qua\n[…]\nA fileira superior apresenta duas bonecas que representam o Imperador O-Dairi-sama (お内裏さま) e a Imperatriz O-Hina-sama (お雛さま). (Dairi significa Palácio Imperial, Hina é menina ou princesa). As bonecas são usualmente dispostas diante de uma tela dourada com dobradiças.\n[…]\nO segundo degrau traz três meninas San-nin kanjo (三人官女). Entre elas há um recipiente.\n[…]\nNa quarta, quinta e fileiras mais baixas uma variedade de mobílias em miniatura, ferramentas, carruagens, etc. são exibidas. Dois bonecos de ministros Zuijin (ががく), são dispostos à direita e à esquerda, no quinto degrau.\n[…]\nO costume de exibirem-se boneca começou durante o período Edo. Antigamente as pessoas acreditavam que as bonecas possuíam o poder de afastar os maus espíritos, e assim protegeria o dono.\n[…]\nO Hinamatsuri traz vestígios de um antigo costume japonês chamado Hina-nagashi (雛流し; lit. balsa da boneca) no qual bonecas feitas de papel eram colocadas num rio, que dirige-se ao mar, levando junto consigo os males ou os maus espíritos para proteger seus donos\n[…]\nO hishimochi também é um doce colorido com as cores verde, branca e rosa, como o hina-arare, mas é feito com a massa do arroz glutinoso. A massa é disposta em três ou cinco camadas. O doce geralmente é colocado nos altares decorativos da festa.\n[…]\nO tirashizushi é um tipo de sushi bem colorido, servido em uma tigela. Sobre a porção de arroz temperado, são colocados peixe cru, cogumelos, omelete em tiras, alga nori e o que mais o chef permitir.\n[…]\nCultura Japonesa",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Furisode",
      "descricao": "Tipo de quimono japonês de mangas muito longas, usado por moças solteiras em ocasiões formais."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Entre os tipos de quimono, qual se destaca pelas mangas mais longas e é usado por moças solteiras em ocasiões festivas?",
    "resposta": "Furisode",
    "distratores": [
      "Yukata",
      "Tomesode",
      "Homongi"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Furisode"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Furisode",
        "situacao": "ok",
        "texto": "A furisode (振袖, lit. 'swinging sleeves') is a style of kimono distinguishable by its long sleeves, which range in length from 85 cm (33 in) for a kofurisode (小振袖, lit. 'short swinging sleeve'), to 114 cm (45 in) for an ōfurisode (大振袖, lit. 'large swinging sleeves'). Furisode are the most formal style of kimono historically worn by young unmarried women in Japan.\n[…]\nFurisode are often either rented or bought by parents for their daughters to wear on Coming of Age Day in the year they turn 20.\n[…]\nIt is common for women to wear a furisode on their \"coming of age day\".\n[…]\nThe furisode originated in the mid-1500s as middle- and upper-class children's clothing, worn by both boys and girls; it was not worn by adults. Initially, the furisode had relatively short sleeves, and was used as everyday wear by those who could afford it. Over time, as the sleeves lengthened and became more exaggerated, the furisode became a style of kimono worn mostly to special occasions.\n[…]\nAccording to one 17th-century text, boys could wear furisode until their 18th year, or until they went through their coming-of-age ceremony, which usually occurred in late adolescence. Girls were supposed to cease wearing the furisode upon marriage, or upon reaching their 20th year.\n[…]\nInitially, furisode did not differ noticeably between the sexes, but fabric designs started to become more gendered in the 19th century. In the 20th century, furisode became restricted to women and girls only, as part of the increasing gender-specificity of children's clothing that developed in the wake of Western influence.\n[…]\nAs the furisode became increasingly associated with young adult women, the term was removed from the shorter-sleeved children's garment, which acquired the more generic term wakiake (\"open-sided\").\n[…]\nMedia related to Furisode at Wikimedia Commons"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Cavalgada de Reis",
      "descricao": "Desfile da noite de cinco de janeiro na Espanha em que os Reis Magos percorrem as ruas distribuindo doces."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Nos desfiles de Reis da Espanha, na noite de cinco de janeiro, qual dos três Reis Magos é representado como um rei negro?",
    "resposta": "Baltasar",
    "fonte": [
      "https://en.wikipedia.org/wiki/Biblical_Magi",
      "https://es.wikipedia.org/wiki/Cabalgata_de_Reyes_Magos"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Biblical_Magi",
        "situacao": "ok",
        "texto": "In Christianity, the Biblical Magi ( MAY-jy or  MAJ-eye; singular: magus), also known as the Three Wise Men, Three Kings, and Three Magi, are distinguished foreigners who visit the infant Jesus after his birth, bearing gifts of gold, frankincense, and myrrh. In Western Christianity, they are commemorated on the feast day of Epiphany—sometimes called \"Three Kings Day\"—and commonly appear in the nat\n[…]\nIn much of the Spanish-speaking world, the Three Kings (Los Reyes Magos de Oriente, Los Tres Reyes Magos, or simply Los Reyes Magos) receive letters from children and so bring them gifts on the morning of 6 January. In Spain, each one of the Magi is supposed to represent a different continent: Europe (Melchior), Asia (Caspar) and Africa (Balthasar).\n[…]\nNot only in Spain, but also in Argentina, Mexico, Paraguay, and Uruguay, there is a long tradition of children receiving presents by the three Reyes Magos on the night of 5 January (Epiphany Eve) or on the morning of 6 January (Epiphany day or Día de Reyes), because it is believed that this is the day in which the Magi arrived bearing gifts for the Christ child.\n[…]\n\"Bless, + O Lord God, this creature, chalk, and let it be a help to mankind. Grant that those who will use it with faith in your most holy name, and with it inscribe on the doors of their homes the names of your saints, Casper, Melchior, and Baltassar, may through their merits and intercession enjoy health in body and protection of soul; through Christ our Lord.\"\n[…]\nTraditionally, one child in the Sternsinger group is said to represent Baltasar from Africa and so, that child typically wears blackface makeup. Beginning in the 2020s, organizers of Sternsinger events in Germany and Austria recommend against using makeup to depict different skin colors. In the past, photographs of German politicians together with children in blackface have caused a stir in English-language press."
      },
      {
        "url": "https://es.wikipedia.org/wiki/Cabalgata_de_Reyes_Magos",
        "situacao": "ok",
        "texto": "La Cabalgata de Reyes Magos es un desfile de carrozas típico en las ciudades de España y Andorra, en Gibraltar y, con menos eco, en poblaciones checas, polacas, mexicanas y en la localidad portuguesa de Monção, en el que los Reyes Magos (Melchor, Gaspar y Baltasar) y sus pajes y ayudantes lanzan caramelos y golosinas a los niños en la víspera de la fiesta de Epifanía.\n[…]\nLas cabalgatas se celebran cada víspera de Reyes por la tarde o al atardecer, siguiendo la tradición, antes de que los magos dejen durante la noche los regalos en las casas.\n[…]\nAl menos desde el siglo XIX han tenido lugar representaciones con los Reyes Magos como protagonistas en varios lugares de España. Una de las primeras documentadas es la cabalgata de Reyes Magos de Alcoy en 1866, tal como se recoge en el Diario de Alcoy. Por circunstancias de la época, no fue hasta 1885 cuando se representa de forma continuada hasta nuestra fecha.​ A finales del siglo XIX se celebraban representaciones teatrales sobre la llegada y adoración de los Reyes Magos en Granada.​\n[…]\nEn 1912, por iniciativa del Centro Artístico de Granada y de un grupo de intelectuales, se recuperó la tradición de representaciones teatrales que se hacían en Granada sobre la llegada de los Reyes Magos, pero, además, se organizó una cabalgata con el objetivo de recaudar juguetes y entregárselos a los niños más desfavorecidos.​\n[…]\nDesde 2008 también se celebra la Cabalgata de Reyes Magos en Polonia, que tiene lugar el domingo más próximo al día 6 de enero.​\n[…]\nWikimedia Commons alberga una categoría multimedia sobre Cabalgata de Reyes Magos.\n[…]\nLas cabalgatas de Reyes más espectaculares de España en 2025, Condé Nast Traveler\n[…]\nCabalgata de Reyes Magos de Pamplona\n[…]\nEnvía tu Carta a los Reyes Magos Archivado el 30 de enero de 2011 en Wayback Machine.\n[…]\nCabalgata de Reyes en Varsovia\n[…]\nDía de los Reyes Magos Cabalgata en Torrevieja y Orihuela Costa"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tr%C3%AAs_Reis_Magos",
        "situacao": "ok",
        "texto": "Os Três Reis Magos ou simplesmente Reis Magos (em grego: μάγοι, transl. magoi) são personagens da religião cristã que teriam visitado o Menino Jesus após o seu nascimento, trazendo-lhe presentes. Foram mencionados apenas no Evangelho segundo Mateus, onde se afirma que teriam vindo do Oriente para Jerusalém para adorar o Cristo, \"nascido Rei dos Judeus\" através de seguir sua estrela no céu. São fig\n[…]\nMelquior (também chamado Melchior ou Belchior), Baltasar e Gaspar, são os nomes comumente dados a eles, em hebreu, esses nomes significam \"rei da luz\" (melichior), \"o branco\" (gathaspa) e \"senhor dos tesouros\" (bithisarea). Não existem relatos bíblicos sobre o nome dos magos, nem sobre eles serem reis, nem sobre serem três. Os nomes foram-lhes atribuído no século IX pelo historiador Agnello, em sua obra Pontificalis Ecclesiae Ravennatis.\n[…]\nSão Beda teve acesso aos documentos guardados nas bibliotecas dos mosteiros onde vivia. Foi nessas leituras que Beda criou o perfil dos três magos:\n[…]\nNão há relato bíblico que fala exatamente de onde os magos vieram, apenas que vieram do Oriente. Alguns estudiosos argumentam usando Salmos 72:10 como prova de que esses homens vinham de regiões que hoje correspondem à Espanha, Etiópia e Arábia Saudita: \"Os reis de Társis e das ilhas trarão presentes; os reis de Sabá e de Seba oferecerão dons\". Outros acreditam que os Magos eram da Pérsia e podem ter sido judeus, já que muitas pessoas de origem judaica moravam naquela região, na época.\n[…]\nAo pôr-do-sol do dia 5 de janeiro, um dia antes do dia de Reis, é feito um desfile com pessoas em roupas típicas tradicionais montadas em cavalos, conhecido como \"Cavalgada do Dia de Reis\". Alguns também trocam presentes no dia de Reis ao invés do natal.\n[…]\nDia de Reis\n[…]\n«João de Hildesheim, \"História dos Três Reis\"». modernizado para o (em inglês) por H. S. Morris  Arquivado em 4 de abril de  2005, no Wayback Machine.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Honoríficos japoneses",
      "descricao": "Sufixos de tratamento acrescentados aos nomes no Japão, como san, kun, chan e sama, que indicam respeito ou intimidade."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Qual sufixo de tratamento japonês, mais respeitoso que o comum san, é usado com clientes, autoridades e divindades?",
    "resposta": "Sama",
    "distratores": [
      "Kun",
      "Chan",
      "Senpai"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Japanese_honorifics"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Japanese_honorifics",
        "situacao": "ok",
        "texto": "The Japanese language makes use of a system of honorific speech, called keishō (敬称), which includes very honorific suffixes and prefixes when talking, or referring, to others in a conversation. Suffixes are often gender-specific at the end of names, while prefixes are attached to the beginning of many nouns. Honorific affixes also indicate the speaker's social status and their relationship with th\n[…]\nWhen referring to a third person, honorifics are used except when referring to one's family members while talking to a non-family member or when referring to a member of one's company while talking to a customer or someone from another company—this is the uchi–soto (in-group / out-group) distinction. Honorifics are not used to refer to oneself, except when trying to be arrogant (ore-sama), to be cute (-chan), or sometimes when talking to young children to teach them how to address the speaker.\n[…]\nUse of honorifics is correlated with other forms of honorific speech in Japanese, such as the use of the polite form (-masu, desu) versus the plain form—that is, using the plain form with a polite honorific (-san, -sama) can be jarring.\n[…]\nOyakata (親方), master, especially a sumo coach. The literal sense is of someone in loco parentis. Also used by the yakuza. In ancient times, it was also used by samurai to address the daimyō they serve, as he was Oyakata-sama, the clan's don.\n[…]\nSome honorifics have baby talk versions—mispronunciations stereotypically associated with small children and cuteness, and more frequently used in popular entertainment than in everyday speech. The baby talk version of -sama is -chama (ちゃま).\n[…]\nThe honorifics -chan and -sama may also be used instead of -san, to express a higher level of closeness or reverence, respectively.\n[…]\nThe honorific forms are:\n[…]\nHonorific speech in Japanese\n[…]\nChinese honorifics\n[…]\nKorean honorifics\n[…]\nJapanese Honorifics - How to use San, Sama, Kun and Chan"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/T%C3%ADtulo_honor%C3%ADfico_japon%C3%AAs",
        "situacao": "ok",
        "texto": "Um título honorífico japonês pertence a um vasto conjunto da língua japonesa que serve para dirigir-se a pessoas ou referir-se a estas com respeito. Tais formas de tratamento usualmente seguem o sobrenome de um indivíduo, da mesma forma que um sufixo. São funcionalmente equivalentes aos pronomes de tratamento da língua portuguesa, embora no japonês sejam usualmente utilizados após o sobrenome ao i\n[…]\nSama (様) é uma versão mais respeitosa e formal de \"san\". A tradução do termo \"sama\" para os diversos honoríficos do português dependerá de cada caso.\n[…]\nÉ usado principalmente para se referir a autoridades como membros do governo (\"vossa senhoria\") e da família imperial (\"vossa alteza\"). No campo profissional para atender clientes (chamando-os \"o-kyaku-sama\"; \"prezado cliente\") e, às vezes, às pessoas muito admiradas. Divindades, tanto como os deuses nativos como o Deus Cristão são chamados de \"Kami-Sama\" (Senhor Deus). Neste caso, o pronome de tratamento equivalente em português é \"Vossa Onipotência\".\n[…]\nCom exceção do Imperador do Japão, o \"sama\" pode ser usado para dirigir informalmente a Imperatriz e outros membros da Família Imperial. O Imperador é, no entanto, sempre abordado como \"Heika\" (\"Vossa Majestade\"). Sama é um título de superioridade e grandiosidade, quem usa o título \"sama\" sendo direcionado a alguém é porque respeita-o imensamente ou está sendo obrigado a fazer isto.\n[…]\nSensei (先生) equivale à \"professor\", ou \"mestre\" (no sentido de mestre e discípulo). Também é usado para se referir a médicos, políticos, advogados e outras figuras de autoridade. Ele é usado para mostrar respeito a alguém que alcançou certo nível de domínio em uma forma de arte ou alguma outra habilidade, como escritores, músicos, artistas e lutadores consumados. Nas artes marciais japonesas, sensei se refere a alguém que é o chefe de um dojo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Fallas de Valência",
      "descricao": "Festa de março em Valência, na Espanha, que termina com a queima de grandes esculturas satíricas."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Nas Fallas de Valência, quase todos os bonecos gigantes vão para a fogueira. Quais deles escapam das chamas todo ano?",
    "resposta": "Os mais votados pelo público",
    "fonte": [
      "https://en.wikipedia.org/wiki/Falles"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Falles",
        "situacao": "ok",
        "texto": "The Fallas (Valencian: Falles; Spanish: Fallas) is a traditional celebration held annually in the city of Valencia, Spain; it is the patronal festival of the town. The five main days celebrated are from 15 to 19 March, while the Mascletà, a pyrotechnic spectacle of firecracker detonation, takes place every day from 1 to 19 March. The term Fallas refers to both the celebration and the Falla monumen\n[…]\nOn the final evening of Falles, at 7:00 pm on 19 March, a parade known in Valencian as the Cavalcada del Foc (the Fire Parade) takes place along Colón street and Porta de la Mar square. This celebration of fire, the symbol of the fiesta's spirit, is the grand finale of Fallas and an event featuring exhibitions of the varied rites and displays from around the world which use fire; it incorporates floats, giant mechanisms, people in costumes, rockets, gunpowder, street performances and music.\n[…]\nWhile the smaller fallas dotted around the streets are burned at approximately the same time, the last falla to be burned is the main one, which is saved until last so that everybody can watch it. This main falla is found outside the Ajuntament – the city hall building. People arrive a few hours before the scheduled burning time to get a front row view. This final falla is burned in public after the signal from the Fallera Major to officially commence.\n[…]\nIn the early 20th century, and especially during the Spanish Civil War, the monuments became more anti-clerical in nature and were often highly critical of the local or national governments, which tried to ban the Falles many times, without success. Under the dictatorship of Francisco Franco the celebration lost much of its satirical nature because of government censorship, but the monuments were among the few fervent public expressions allowed then, and they could be made freely in València.\n[…]\niPhone/iPod App for Las Fallas"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Fallas",
        "situacao": "ok",
        "texto": "Las Fallas (em castelhano) ou Les Falles (em valenciano) é uma festa típica da cidade de Valência, na Espanha. Durante a festa, que ocorre no dia 19 de março, dia de São José segundo a Igreja Católica, grandes figuras satíricas bonecos de papel machê ou de madeira, chamadas fallas são queimadas nas ruas e pracinhas da cidade.\n[…]\nAs mascletàs podem estourar no chão ou no ar, de acordo com a vontade do pirotécnico que as confecciona. Elas têm um orçamento de 6 000 a 9 000 euros. No entanto, alguns pirotécnicos complementam de seu próprio bolso o orçamento, para maior satisfação do público. O pirotécnico mais renomado é V. Caballer.\n[…]\nNo século XVIII, algumas das fallas que se acendiam em Valência não eram meras fogueiras, mas monumentos satíricos e burlescos nos quais se expunham à vergonha pública e queimavam-se simbolicamente pessoas e situações da vida real.[1] Há diferentes hipóteses sobre o começo da festa fallera. Pelo que hoje pode-se saber, o alvorecer das fallas remonta-se a princípios do século XVIII.\n[…]\nHoje, as fallas atraem um milhão de turistas anualmente. Plantam-se 385 monumentos na cidade de Valência e mais de 250 no resto da província. O Gremi d'Artistes Fallers subsiste como entidade encargada de ensinar o antigo ofício de produção de monumentos falleros. A Junta Central Fallera é a entidade que organiza a festa e a mantém viva durante todo o exercício fallero.\n[…]\nA secção Especial agrupa as comissões falleras que colocam as fallas que têm mais orçamento da cidade de Valência e que competem pelo que se pode considerar como o prémio da melhor falla de cada ano na cidade. Considera-se como a primeira divisão no mundo das fallas. No ano de 2008, houve um total de 14 fallas nesta Secção Especial, enquanto o número de monumentos colocados na cidade é de quase 400.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Rosca de Reyes",
      "descricao": "Pão doce em forma de coroa que os mexicanos comem no Dia de Reis, seis de janeiro."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No Dia de Reis, os mexicanos dividem a Rosca de Reyes, um pão doce em forma de coroa. O que vem escondido dentro dela?",
    "resposta": "Bonequinho do Menino Jesus",
    "fonte": [
      "https://en.wikipedia.org/wiki/King_cake"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/King_cake",
        "situacao": "ok",
        "texto": "A king cake, also known as a three kings cake or a baby cake, is a cake associated in many countries with the Epiphany, the celebration of the Twelfth Night after Christmas. Traditionally made with brioche dough, in most cases a fève (lit. 'fava bean'), such as a figurine representing Christ as a child, was hidden inside. After the cake is cut, whoever finds the fève in their slice wins a prize.\n[…]\nVariations of the roscón de reyes are eaten in Spain and Latin America around January 6th. They generally have an oval shape due to the need to make cakes large enough for large groups. For decoration, figs, quinces, cherries, or dried and candied fruits are often, but not exclusively, used.\n[…]\nIn Mexico, Central and South America, the figurine represents the Child Jesus. The figurine of the baby Jesus hidden in the bread represents the flight of the Holy Family, fleeing from Herod the Great's Massacre of the Innocents. Whoever finds the baby Jesus figurine is blessed and must take the figurine to the nearest church on Candlemas Day or host a party that day.\n[…]\nTraditionally, a small plastic baby symbolizing Jesus is hidden in the king cake. The baby symbolizes luck and prosperity to whoever finds it. That person is also responsible for purchasing next year's cake or hosting the next Mardi Gras party. Often, bakers place the baby outside of the cake, leaving the purchaser to hide it themselves. This is usually to avoid liability for any choking hazard.\n[…]\n1991. Tradiciones Mexicanas. Pg 22, 31. Mexico, D.F., Ed. Diana S.A. de C.V., ISBN 968-13-2203-7\n[…]\nA State Mandated Christmas Bonus, a blog post by the Law Library of Congress, makes reference to the Rosca de reyes."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bolo-rei",
        "situacao": "ok",
        "texto": "Bolo-rei é um bolo festivo em forma de coroa, que faz parte da tradição portuguesa, e que se come tipicamente na Quadra Natalícia e Dia de Reis. O seu nome alude aos três reis magos.\n[…]\nConsta que havia ainda quem colocasse nos bolos pequenas adivinhas, cuja recompensa seria meia libra de ouro, ou mesmo as próprias moedas de ouro, como forma de presentear a quem se oferecia o bolo.\n[…]\nSegundo esta tradição francesa, eram incluídos no bolo uma fava seca e um brinde de porcelana, normalmente uma figura da natividade do presépio. A quem calhasse a fava era considerado o rei ou rainha da festa, com direito a usar uma coroa de circunstância e poderia pedir um desejo, mas também deveria pagar o próximo bolo.\n[…]\nO bolo-rei popularizado em Portugal no século XIX segue uma receita originária do sul de Loire, um bolo em forma de coroa feito de massa leveda. Tanto quanto se sabe, a primeira casa onde se vendeu em Portugal foi a Confeitaria Nacional, em Lisboa, por volta de 1869-1870. O responsável foi o afamado confeiteiro francês Gregoire (Gregório, como ficou conhecido), recrutado em Paris por Baltasar Rodrigues Castanheiro Júnior, que adaptaram e utilizaram uma receita trazida da capital francesa.\n[…]\nPorém, o sistema jurídico português acabou por rever esta lei, poucos anos mais tarde, por causa do disposto no artigo 28.º do Tratado de Roma e da necessidade de evitar a criação de obstáculos à livre circulação de bens e serviços dentro do mercado interno. A ressalva do bolo-rei desapareceu no decreto-lei n.º 291/2001, de 20 de novembro. Actualmente pode ter brindes, desde que não representem riscos para a segurança dos consumidores (asfixia, obstrução gástrica, etc.).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Pan de muerto",
      "descricao": "Pão doce mexicano preparado para o Dia dos Mortos, enfeitado com tiras de massa."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No Dia dos Mortos, os mexicanos comem um pão doce redondo enfeitado com tiras de massa que imitam o quê?",
    "resposta": "Ossos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pan_de_muerto"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pan_de_muerto",
        "situacao": "ok",
        "texto": "Pan de muerto (Spanish for 'bread of the dead') is a type of pan dulce traditionally baked in Mexico and the Mexican diaspora during the weeks leading up to the Día de Muertos, which is celebrated from November 1 to November 2.\n[…]\nTo the question of European vs indigenous origins, there can be no simple resolution until more extensive colonial sources come to light. For now, evidence indicates that the Mexican Day of the Dead is a colonial invention, a unique product of colonial demographic and economic processes. The principal types and uses of food on this holiday definitely derive from Europe. After all, there is no tortilla de muertos but rather pan de muertos, just one highly significant detail.\n[…]\nWith the rise of globalized cultural awareness starting in the 1990s, pan de muerto has become a cultural ambassador for Mexican popular culture. A 2019 Japanese exhibition at the National Museum of Ethnology on Mexican folk art, for example, included a baking demonstration and samples of the bread for visitors. As a form of cultural outreach and collaboration with local communities, some American museums and institutions create public altars that include pan de muerto.\n[…]\nWhile the bread has always been an expression of popular religious celebrations, by the late 2010s, pan de muerto had become more known through several American pop culture representations. It appeared in the 2017 Pixar film Coco, which broadened recognition of the bread outside the Mexican diaspora. In the award-winning young adult novel Cemetery Boys by Latino-American author Aiden Thomas (2020), pan de muerto is a central component in a Dia de los Muertos celebration.\n[…]\nMedia related to Pan de Muerto at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pan_de_muerto",
        "situacao": "ok",
        "texto": "Pan-de-muerto é um pão doce adornado com figuras, por vezes na forma de caveira, e polvilhado de açúcar, que faz parte das oferendas colocadas nos “altares-dos-mortos”, nas celebrações do Dia dos Mortos no México.\n[…]\nPara o preparar, mistura-se farinha de trigo com açúcar e erva-doce e acrescenta-se água morna misturada com leite, margarina, levedura e raspa de casca de laranja; quando estiver transformada num creme homogéneo, juntam-se ovos inteiros e continua a bater-se. Vai-se acrescentando farinha até se obter uma massa maleável, que se amassa até formar uma bola que se deixa a levedar até aumentar para o dobro do volume.\n[…]\nTransforma-se a bola em uma ou várias rodelas, dependendo do tamanho de pão que se pretende, ornamenta-se com pedaços de massa, na forma de folhas, cruzes ou crânios, colocam-se num tabuleiro do forno e deixam-se levedar até novamente duplicarem de tamanho. Cozem em forno quente e, quando douradas, pincelam-se com um xarope feito com sumo e raspa de casca de laranja e açúcar. Finalmente, polvilham-se com açúcar cristal, enquanto ainda quentes e húmidos do xarope.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Setsubun",
      "descricao": "Festa japonesa da véspera do início da primavera no calendário tradicional, em que se espantam os demônios."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No Setsubun, festa japonesa da véspera da primavera, as famílias espantam os demônios da casa atirando o quê?",
    "resposta": "Grãos de soja torrados",
    "fonte": [
      "https://en.wikipedia.org/wiki/Setsubun"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Setsubun",
        "situacao": "ok",
        "texto": "Setsubun (節分) is the day before the beginning of spring in the old calendar in Japan. The name literally means 'seasonal division', referring to the day just before the first day of spring in the traditional calendar, known as Setsubun; though previously referring to a wider range of possible dates, Setsubun is now typically held on February 3 (in 2021 and 2025 it was on 2nd February), with the da\n[…]\nThe main ritual associated with the observance of Setsubun is mamemaki (豆撒き, 'bean scattering'); this ritual sees roasted soybeans (known as fukumame (福豆, 'fortune beans')) either thrown out of the front door, or at a member of the family wearing an oni (demon or ogre) mask while shouting 'Devils out! Fortune in!' (鬼は外! 福は内!, Oni wa soto! Fuku wa uchi!), before slamming the door.\n[…]\nBecause Watanabe no Tsuna, a retainer of Minamoto no Yorimitsu during the Heian period (794–1185), is associated with the legend that he vanquished oni historically considered to be the strongest, such as Shuten-doji and Ibaraki-doji, there is a tradition that oni stay away from people named Watanabe and their houses. For this reason, some families with the surname Watanabe have not practiced the custom of throwing beans on Setsubun for generations.\n[…]\nTraveling entertainers (旅芸人, tabi geinin), who were normally shunned during the year because they were considered vagrants, were welcomed on Setsubun to perform morality plays. Their vagrancy worked to their advantage in these cases, as they were considered to take evil spirits with them.\n[…]\nEhōmaki, a sushi roll often eaten for good luck on Setsubun.\n[…]\nUltimate Guide to Setsubun: Soybeans, Ogre, and Sushi\n[…]\nJapan-guide – Setsubun\n[…]\nJapanlinked – Setsubun\n[…]\nSetsubun (Bean Throwing Festival)\n[…]\nMiscellaneous Notes on Setsubun (in Japanese)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Setsubun",
        "situacao": "ok",
        "texto": "Setsubun (節分?, Festival Japonês) é a véspera do início da primavera no Japão.\n[…]\nO nome significa literalmente \"divisão das estações\", mas o termo normalmente se refere ao Setsubun da primavera, apropriadamente chamado de Risshun (o início da primavera), comemorado anualmente no dia 4 de fevereiro. Faz parte do Festival da Primavera (春祭, haru matsuri?). Setsubun da primavera foi e talvez ainda seja considerado por alguns o Ano Novo Lunar no calendário, ou seja, uma espécie de véspera de Ano Novo.\n[…]\nEssa data era acompanhada por um extenso ritual especial de purificação do mal do ano anterior e o afastamento de demônios que possam trazer doenças no ano seguinte. Este ritual especial é chamado mamemaki (豆撒き?). Setsubun é originado do tsuina (追儺?), um costume introduzido pelos chineses ao Japão no oitavo século.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Risalamande",
      "descricao": "Sobremesa dinamarquesa de arroz-doce com amêndoas e calda de cereja, servida na ceia de Natal."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Na ceia de Natal dinamarquesa, serve-se um arroz-doce com calda de cereja. Quem encontra o que escondido na sobremesa ganha um presente?",
    "resposta": "Uma amêndoa inteira",
    "fonte": [
      "https://en.wikipedia.org/wiki/Risalamande"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Risalamande",
        "situacao": "ok",
        "texto": "Risalamande (Danish pronunciation: [ˌri:salaˈmɑŋ] also spelled as ris à l'amande) is a traditional Danish dessert served at Christmas dinner and julefrokost (Christmas lunch). It is made of rice pudding mixed with whipped cream, sugar, vanilla, and chopped almonds. It is served cold with either warm or cold cherry sauce (kirsebærsovs).\n[…]\nThe name is based on French riz à l'amande meaning 'rice with almonds', although the dessert has a Danish origin. Today risalamande is the spelling documented by the Danish Language Council.\n[…]\nAs a tradition, rislamande is known from around 1900, meaning it was probably invented in the 19th century. Here, the kitchens of bourgeois homes began to serve risalamande with cherry sauce for Christmas instead of rice pudding. Before then, rice pudding was a more exclusive food, being made of imported rice, cinnamon and almonds.\n[…]\nThe almond present is believed to have come about in Denmark around 1800 where the bean was replaced with an almond and the Holy Three Kings cake with the rice pudding.\n[…]\nIn Iceland, this dish is called Ris a la mande or möndlugrautur (almond pudding) and served with cherry jam. It is made of rice pudding which is cooled overnight before adding whipped cream, sugar and chopped almonds. The dish is served at lunch on Christmas Eve. Typically a whole almond with the skin on is hidden in the pudding and the person who finds it receives a present.\n[…]\nRisifrutti is a ready-to-eat snack product inspired by risalamande, sold in the Nordic countries since 1993. Various sauces exist, such as strawberry, cherry, blueberry, and raspberry.\n[…]\nHowever, ready-to-eat products marketed as risalamande (and more similar to the actual dessert) also exist."
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Pêssanka",
      "descricao": "Ovo de Páscoa ucraniano decorado com desenhos tradicionais pela técnica de reserva com cera."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Para decorar as pêssankas, ovos de Páscoa ucranianos, os desenhos são traçados com que material antes de o ovo ir para a tinta?",
    "resposta": "Cera de abelha",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pysanka"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pysanka",
        "situacao": "ok",
        "texto": "The tradition of egg decoration in Slavic cultures originated in pagan times, and was transformed by the process of religious syncretism into the Christian Easter egg. Over time, many new techniques were added. Some versions of these decorated eggs have retained their pagan symbolism, while others have added Christian symbols and motifs.\n[…]\nThe symbols which decorated Ukrainian pysanky underwent a process of adaptation over time. In pre-Christian times these symbols imbued an egg with magical powers to ward off evil spirits, banish winter, guarantee a good harvest and bring a person good luck. After 988AD, when Christianity became the state religion of Ukraine, the interpretation of many of the symbols began to change, and the pagan motifs were reinterpreted in a Christian light.\n[…]\nSince the mid-19th century, pysanky in Ukraine have been written more for decorative reasons than for the purposes of magic; especially among the Ukrainian diaspora, as belief in most such rituals and practices has dropped off in a more modern, scientific era. Additionally, the Ukrainian diaspora has reinterpreted meanings and created their own new symbols and interpretations of older ones.\n[…]\nIt is not only motifs on Ukrainian pysanky which carried symbolic weight:, colors also had significance. Although the earliest Ukrainian pysanky were often simply two-toned, and many folk designs still are, some believed that the more colors there were on a decorated egg, the more magical power it held. A multi-colored egg could thus bring its owner better luck and a better fate.\n[…]\nAs with symbols, these talismanic meanings of colors applied to traditional Ukrainian folk pysanky with traditional designs, and not to modern decorative pysanky.\n[…]\nPysanka Museum\n[…]\nPysanka: Icon of the Universe\n[…]\nUkrainian Pysanka Folk Traditions"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/P%C3%AAssanka",
        "situacao": "ok",
        "texto": "Pêssanka ou pysanka, é um ovo colorido à mão, de origem e tradição eslava. Sua denominação derivado do verbo pysaty (escrever) e simboliza a vida, a saúde e a prosperidade.\n[…]\nEsta arte tradicional dos ucranianos data de épocas muito antigas, quando eles eram preparados para presentear as divindades no início da primavera. Com a chegada do Cristianismo ele passou a simbolizar a Páscoa e a Ressurreição de Cristo.\n[…]\nDurante o regime comunista e ateísta as pêssankas foram proibidas no país, mas continuaram a ser produzidas longe das grandes cidades. No Brasil, assim como em outros países que há descendentes de ucranianos são produzidos na época da páscoa. Depois da independência da Ucrânia em 1991 elas voltaram a serem produzidas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "First-footing",
      "descricao": "Costume escocês de Ano-Novo segundo o qual o primeiro visitante a entrar na casa depois da meia-noite traz sorte e presentes."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Na Escócia, o primeiro visitante a entrar em casa no Ano-Novo deve trazer, para dar sorte, sal, uísque e um pedaço de quê?",
    "resposta": "Carvão",
    "fonte": [
      "https://en.wikipedia.org/wiki/First-foot"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/First-foot",
        "situacao": "ok",
        "texto": "In Scottish, Northern English, and Manx folklore, the first-foot (Scottish Gaelic: ciad-chuairt, Manx: quaaltagh/qualtagh) is the first person to enter the home of a household on New Year's Day and is seen as a bringer of good fortune for the coming year. Similar practices are also found in Greek, Vietnamese, and Georgian new year traditions.\n[…]\nThe practice of first-footing is still common across Scotland and varies from place to place as part of Hogmanay celebrations. The luck that the first-foot brings with him will determine the luck for the household for the rest of the year.\n[…]\nGenerally, the first-foot should be a tall, dark-haired male who is not already in the house when midnight strikes. In many areas, the first-foot should bring with him symbolic gifts such as coal, coins, whisky, or black buns. Food and drink will be given to the first-foot and any other guests. Often women and light- or red-haired men are considered very unlucky. In Scotland, first-footing has traditionally been more elaborate than in England, involving subsequent entertainment.\n[…]\nThere are practices similar to first-footing outside the British Isles. In a similar Greek tradition called pothariko, also called podariko (from the root pod-, or 'foot'), it is believed that the first person to enter the house on New Year's Eve brings either good or bad luck. Many households to this day keep this tradition and specially select who first enters the house.\n[…]\nAfter the first-foot, the lady of the house serves the guests with Christmas treats or gives them an amount of money to ensure that good luck will come in the new year.\n[…]\nArticle about first-footing from PR Newswire\n[…]\nShort video about first-footing in Northumbria (1950)"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Naadam",
      "descricao": "Festival nacional de verão da Mongólia, baseado nos três jogos tradicionais dos homens."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "O Naadam, grande festival de verão da Mongólia, reúne três esportes tradicionais: a luta, a corrida de cavalos e qual outro?",
    "resposta": "Tiro com arco",
    "distratores": [
      "Polo",
      "Esgrima",
      "Levantamento de pedras"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Naadam"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Naadam",
        "situacao": "ok",
        "texto": "Naadam (Mongolian: Наадам, Mongolian script: ᠨᠠᠭᠠᠳᠤᠮ, romanized: Naɣadum, [ˈnaːdəm], lit. 'games') is a traditional festival celebrated in Mongolia, Inner Mongolia and Tuva, involving Mongolian wrestling, horse racing and archery. The festival is also locally termed \"eriin gurvan naadam\" (эрийн гурван наадам, lit. 'the three games of men'), and is held during midsummer.\n[…]\nMongolians practice their unwritten holiday rules that include a long song to start the holiday, then a Biyelgee dance. Traditional cuisine, or Khuushuur, is served around the Sports Stadium along with a special drink made of fermented horse milk (airag). The three standard sports of wrestling, horse racing, and archery are recorded in the 13th-century book The Secret History of the Mongols. During the Qing dynasty's rule, Naadam became a festival officially held by sums.\n[…]\nGenghis Khan's nine horse tails, representing the nine tribes of the Mongols, are still ceremonially transported from Sukhbaatar Square to the Stadium to open the Naadam festivities. At the opening and closing ceremonies, there are impressive parades of mounted cavalry, athletes and monks, alongside elements of uniformed organizations.\n[…]\nAlongside the Danshig Naadam, the biggest festival is the National Naadam Festival, which is held in the Mongolian capital, Ulaanbaatar, during the National Holiday from 11 to 13 July, in the National Sports Stadium. It begins with an elaborate introduction ceremony featuring dancers, athletes, horse riders, and musicians. After the ceremony, the competitions begin. The competitions are mainly horseback riding.\n[…]\nNaadam Festival, Official Website\n[…]\nNaadam Festival, The Center for the Study of Eurasian Nomads\n[…]\nNaadam Festival Blog- Mongolia Naadam Festival\n[…]\nMongolia Naadam Festival Tours- Mongolia Naadam FestivalTours\n[…]\nMongolia Naadam Festival and Events- Mongolia Naadam Festival and Events"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Naadam",
        "situacao": "ok",
        "texto": "Naadam (Наадам) é o feriado nacional da Mongólia. realizado entre os dias 11 e 13 de julho. Também conhecido como Eriin Gurvan Naadam (algo como \"três jogos masculinos\"), tem como eventos a luta livre mongol, corrida de cavalos e arco e flecha, e são os únicos jogos realizados no país. Atualmente as mulheres também participam em dois dos \"três jogos masculinos\"; arco e a corrida de cavalos.\n[…]\nO festival principal é realizado na capital mongol de Ulaanbaatar (ou Ulan Bator). Outras cidades no entanto também possuem o seu próprio Naadam, apesar de não poderem se comparar ao tamanho do Naadam de Ulaanbaatar.\n[…]\nÉ o festival mais popular do país, e acredita-se que exista a séculos de alguma maneira. Era originalmente um festival religioso mas hoje formalmente comemora a revolução de 1921 quando a Mongólia se declarou um país independente.\n[…]\nO festival também é celebrado na região da Mongólia Interior na China.\n[…]\nMais fotos do Naadam",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Wigilia",
      "descricao": "Ceia tradicional polonesa da véspera de Natal, sem carne e cheia de rituais."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Na Wigilia, a ceia polonesa da véspera de Natal, a mesa ganha um lugar a mais, com prato e talheres. Para quem ele é reservado?",
    "resposta": "Um visitante inesperado",
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
    "indice": 17,
    "ancora": {
      "nome": "Jack-o'-lantern",
      "descricao": "Lanterna feita de um vegetal escavado com uma cara recortada, símbolo do Halloween."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Na Irlanda e na Escócia, antes de as abóboras americanas virarem moda no Halloween, as lanternas com caras assustadoras eram esculpidas em quê?",
    "resposta": "Nabos",
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
    "indice": 18,
    "ancora": {
      "nome": "Zodíaco vietnamita",
      "descricao": "Versão vietnamita do ciclo de doze animais do calendário lunar, parecida com a chinesa."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No zodíaco vietnamita, muito parecido com o chinês, que animal ocupa o lugar do coelho?",
    "resposta": "Gato",
    "fonte": [
      "https://en.wikipedia.org/wiki/Chinese_zodiac"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Chinese_zodiac",
        "situacao": "ok",
        "texto": "The Chinese zodiac is a traditional classification scheme based on the Chinese calendar that assigns an animal and its reputed attributes to each year in a repeating twelve-year (or duodenary) cycle. The zodiac is very important in Chinese culture as a reflection of traditional Chinese philosophy. Chinese folkways held that one's personality is related to the attributes of their zodiac animal.\n[…]\n未: Old Chinese *m[ə]t-s (compare Atayal miːts)\n[…]\nThe zodiac is widely used in commercial culture, for example, in the Chinese New Year market, and popular zodiac-related products, such as crafts, toys, books, accessories, and paintings and Chinese lunar coins. The coins depict zodiac animals, inspired the Canadian Silver Maple Leaf coins, as well as varieties from Australia, South Korea, and Mongolia.\n[…]\nThe Chinese zodiac is also used in some Asian countries that were under the cultural influence of China. However, some of the animals in the zodiac may differ by country.\n[…]\nThe Vietnamese zodiac varies from the Chinese zodiac with the second animal being the Water Buffalo instead of the Ox, and the fourth animal being the Cat instead of the Rabbit.\n[…]\nThe Cham zodiac uses the same order as the Chinese zodiac.\n[…]\nIn the Persian version of the Eastern zodiac brought by Mongols during the Middle Ages, the Chinese word lóng and Mongol word lū (Dragon) was translated as nahang meaning \"water beast\", and may refer to any dangerous aquatic animal both mythical and real (crocodiles, hippos, sharks, sea serpents, etc.).\n[…]\nIn the Kyrgyz version of the Chinese zodiac (Kyrgyz: мүчөл, müçöl) the words for the Dragon (Kyrgyz: улуу, uluu), Monkey (Kyrgyz: мечин, meçin) and Tiger (Kyrgyz: барс, bars) are only found in Chinese zodiac names, other animal names include Cow, Rabbit, Snake, Horse, Sheep, Chicken, Dog and Wild boar.\n[…]\nChinese animal symbolism\n[…]\nAnimal fighting styles\n[…]\nChinese spiritual world concepts"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hor%C3%B3scopo_chin%C3%AAs",
        "situacao": "ok",
        "texto": "O Horóscopo chinês dos 12 signos é uma das referências que a Astrologia chinesa utiliza para realizar seus estudos.\n[…]\nApenas doze animais compareceram e ganharam um ano de acordo com a ordem de chegada: o Rato; O Boi ou Búfalo (Vaca, na Tailândia); o Tigre (Pantera, na Mongólia); O Coelho ou Lebre (Gato, no Vietnã); o Dragão (Crocodilo, na Pérsia); a Cobra ou Serpente (Pequeno Dragão, na Tailândia); o Cavalo; a Cabra, Bode ou Ovelha; o Macaco; o Galo ou Galinha; o Cão; o Porco ou Javali. O Cavalo de Fogo rege a cada 60 anos.\n[…]\nComo o zodíaco chinês é derivado de acordo com a antiga Teoria dos Cinco Elementos, todo signo chinês está associado a cinco elementos com relações, entre esses elementos, de interpolação, interação, superação e contra-ação - acredita-se ser a lei comum da movimentos e mudanças de criaturas no universo.\n[…]\nPessoas diferentes nascidas sob cada signo animal supostamente têm personalidades diferentes, e os praticantes da astrologia chinesa consultam esses detalhes e compatibilidades tradicionais para oferecer orientação putativa na vida ou no amor e no casamento.\n[…]\nCoelho, Cabra, Porco:\n[…]\nCada elemento do horóscopo chinês possui uma rede de outros elementos. Isto se dá porque cada um alimenta um outro e, consequentemente, também serve de alimento para um antecessor. Estas relações se deram de maneira lógica.\n[…]\nEm cada ano, um dos 12 animais do zodíaco é governado por um dos cinco elementos. Deste modo, o ciclo se encerra em 60 anos. A data é comemorada pelos povos orientais que seguem o calendário chinês, e dá início a uma nova repetição de animal e elemento.\n[…]\nMadeira: Tigre e Coelho",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Genkan",
      "descricao": "Vestíbulo rebaixado na entrada das casas japonesas, onde se deixam os sapatos."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Na entrada das casas japonesas há um pequeno vestíbulo rebaixado, o genkan. O que se deve fazer ali antes de entrar?",
    "resposta": "Tirar os sapatos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Genkan"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Genkan",
        "situacao": "ok",
        "texto": "Genkan (玄関) are traditional Japanese entryway areas for a house, apartment, or building, a combination of a porch and a doormat. It is usually located inside the building directly in front of the door. The primary function of genkan is for the removal of shoes before entering the main part of the house or building.\n[…]\nA secondary function is a place for brief visits without being invited across the genkan step into the house proper. For example, where a pizza delivery driver in an English-speaking country would normally stand on the porch and conduct business through the open front door, in Japan a food delivery would traditionally have taken place across the genkan step.\n[…]\nAfter removing shoes, one must avoid stepping on the tiled or concrete genkan floor (三和土, tataki) in socks or with bare feet, to avoid bringing dirt into the house. Once inside, generally one will change into uwabaki (上履き): slippers or shoes intended for indoor wear.\n[…]\nGenkan are also occasionally found in other buildings in Japan, especially in old-fashioned businesses.\n[…]\nGenkan are normally recessed into the floor, to contain any dirt that is tracked in from the outside (as in a mud room). The height of the step varies from very low (5–10 centimetres (2.0–3.9 in)) to shin-level or knee-level. Genkan in apartments are usually much smaller than those in houses, and may have no difference in elevation with the rest of the floor; it may simply have a different type of flooring material than the rest of the floor to distinguish it as the genkan.\n[…]\nWhat is this? Genkan. A comprehensive explanation about the genkan in Japan.\n[…]\nGENKAN"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Genkan",
        "situacao": "ok",
        "texto": "O Genkan (玄関) é a área de entrada tradicional para casas e prédios japoneses constituída de uma varanda, ou uma sala, com um tapete onde deve-se retirar os sapatos. A função principal do genkan é evitar que as sujeiras da rua que ficaram no sapato entrem dentro da casa, ou qualquer edifício.\n[…]\nO genkan é geralmente construído em desnível com o piso da casa para conter as sujeiras vindas da rua. Após retirado, os sapatos são geralmente dispostos com a frente virada para a porta, para serem vestidos mais facilmente na hora de sair, e veste-se um outro sapato, uwabaki, ou chinelo, surippa, para andar nos ambientes interiores do edifício. Normalmente, também, evita-se pisar no genkan descalço ou de meias.\n[…]\nO genkan é encontrado em vários prédios japoneses, incluindo escolas, edifícios governamentais, alguns restaurantes tradicionais, edifícios com tatame e empresas construídas em estilo antigo. Nas escolas, o genkan é equipado com armários onde os estudantes guardam sapatos com que vieram e vestem outros para andarem dentro do edifício.\n[…]\nVestíbulo\n[…]\nWhat Is This? Genkan (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Moutza",
      "descricao": "Gesto ofensivo tradicional da Grécia, feito com a palma da mão aberta voltada para a outra pessoa."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Na Grécia, mostrar a palma da mão aberta, com os dedos esticados, na direção de alguém, gesto chamado moutza, significa o quê?",
    "resposta": "Um insulto grave",
    "fonte": [
      "https://en.wikipedia.org/wiki/Moutza"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Moutza",
        "situacao": "ok",
        "texto": "A mountza or moutza (Greek: μούντζα or μούτζα [ˈmud͡za]), also called faskeloma (Greek: φασκέλωμα [faˈskeloma]), is the most traditional gesture of insult among Greeks and Mexicans. It consists of extending and spreading all fingers of the hand and presenting the palm towards the face of the person to be insulted with a forward motion.\n[…]\nBecause cinder was wiped on the person's face first by collecting it in the palm and then by extending open the fingers, the gesture itself became insulting, to be known as mountza, after the name of the material applied. The modern Greek word mountzoura (μουντζούρα) or moutzoura (μουτζούρα) for a smudge, scribble or dark stain has the same origin.\n[…]\nThe gesture of mountza does not have the same significance in other cultures around the world. In a few countries there are similar gestures. Their significances are:\n[…]\nIn Pakistan, the showing of the palm to someone in a thrusting manner is also considered an insult. This gesture is called buja in Sindhi language. In Punjab, it is considered as giving a curse (la'anat).\n[…]\nIn the Persian Gulf region, showing the palms of both hands to someone after clapping them is also considered an insult, together with saying Malat Alaik. It is usually done by women as it is considered not manly if men do it.\n[…]\nIn Chicago, the moutza was used on a mock \"city sticker\" in 2012 following a controversy over design ideas for an official city parking sticker honoring first responders. In the spoof sticker, the moutza is displayed with the middle finger cut off to represent Chicago's mayor, Rahm Emanuel, who lost part of his middle finger while cutting roast beef in high school.\n[…]\nFootballer Dario Fernandez directs a moutza towards the referee on YouTube"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mountza",
        "situacao": "ok",
        "texto": "Mountza ou moutza (em grego:  μούντζα  ou μούτζα ˈmud͡za) também chamado faskeloma (em grego:  φασκέλωμα  faˈsceloma) é o gesto de insulto mais tradicional entre os gregos. Consiste em estender e espalhar todos os dedos da mão e apresentar a palma em direção ao rosto da pessoa a ser insultada com um movimento para frente.\n[…]\nUma versão ainda mais ofensiva é conseguida usando as duas mãos para dobrar o gesto, batendo a palma de uma mão nas costas da outra na direção do destinatário pretendido.\n[…]\nQuando os gregos sinalizam com a mão o número 5 para alguém, eles tomam cuidado para não estender demais os dedos ou colocar a palma da mão na direção da pessoa, para que não seja confundido com um mountza.\n[…]\nA origem do gesto remonta aos tempos antigos, quando era usado como maldição. Diz-se que durante os mistérios de Elêusis, complementava as maldições contra as forças do mal. Foi então chamado φασκέλωμα (faskéloma), que sobrevive até hoje, junto com sua variante φάσκελo (fáskelo), ainda sobrevivem como sinônimos de mountza.\n[…]\nNos anos posteriores, o nome mudou para mountza. No código penal do Império Bizantino, uma punição envolvia criminosos desfilando pela cidade sentados de costas em burros e com os rostos manchados de cinzas (μούντζος , moútzos) para aumentar a ridicularização.\n[…]\nComo a cinza era limpa no rosto da pessoa primeiro coletando-a na palma da mão e depois abrindo os dedos, o gesto tornou-se insultante. A palavra grega moderna mountzoura (μουντζούρα) ou moutzoura (μουτζούρα) para um rabisco ou mancha escura tem a mesma origem.==Referências==\n[…]\nO jogador de futebol Dario Fernandez dirige um moutza para o árbitro\n[…]\nMoutza no cinema grego",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Caganer",
      "descricao": "Figura humorística dos presépios catalães que aparece agachada fazendo suas necessidades."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Nos presépios da Catalunha, entre pastores e reis magos, aparece um bonequinho chamado caganer. O que ele está fazendo?",
    "resposta": "Fazendo cocô",
    "fonte": [
      "https://en.wikipedia.org/wiki/Caganer"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Caganer",
        "situacao": "ok",
        "texto": "A Caganer (Catalan pronunciation: [kəɣəˈne]) is a figurine depicted in the act of defecation appearing in nativity scenes in Catalonia and neighbouring areas such as Andorra, Valencia, Balearic Islands, and Northern Catalonia (in southern France). It is most popular and widespread in these areas, but can also be found in other areas of Spain (Murcia) and Portugal.\n[…]\nOne writer of a letter to the editor asserted, \"A nativity scene without a caganer is not a nativity scene.\" A second writer offered a win-win solution. He suggested including the caganer but also placing a figure of a police officer with a pen and clipboard next to him, writing a ticket for the infraction.\n[…]\nThe writer said this would achieve three objectives: respect tradition, comply with the ordinance and educate the public about how it is being reinforced, and finally, demonstrate how important it is to respect the law. Finally, the head of Parks and Gardens publicly denied prohibiting the caganer in the first place, saying that it was the artistic decision of the artist commissioned by the city to design and install the pessebre.\n[…]\nFollowing a campaign against the caganer's absence called Salvem el caganer (Save the caganer), and widespread media criticism, the 2006 nativity restored the caganer, who appeared on the northern side of the nativity near a dry riverbed.\n[…]\nCollection of caganers by Joan Escapa\n[…]\nMedia related to Caganer at Wikimedia Commons\n[…]\nCatalunya's Christmas Caganer Archived 2008-08-28 at the Wayback Machine, from Roughguides.com by AnneLise Sorensen, December 1, 2005.\n[…]\n\"Caganers, Nation and Faith\" at Oreneta.com About defecation and caganers.\n[…]\nSection on the Caganer on the Festes website Archived 2011-09-28 at the Wayback Machine (in Catalan)\n[…]\nAmics del Caganer (Friends of the Caganer) (in English, Catalan, Spanish, and German)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Caganer",
        "situacao": "ok",
        "texto": "Um caganer (em língua catalã), cagão ou cagador é uma figura de uma pessoa a defecar que se pode encontrar nos presépios, como tradição na Catalunha e na Comunidade Valenciana. É usado como um símbolo de boa sorte e prosperidade,pois está relacionado com a adubação do solo para o próximo ano.\n[…]\nTambém é frequente esta figura nos presépios das Ilhas Canárias e noutras zonas de Espanha (região de Murcia, por exemplo), sendo designado de cagón.\n[…]\nEm algumas regiões de Portugal também aparece esse tipo de figura e recebe o nome de cagão e cagador.\n[…]\nEL CAGANER, PERSONATGE SIMÀTIC DE TRADICIÓ CATALANA\n[…]\nLes chieurs - Pooping stars : A new series of collectible caganers (em inglês) (em francês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Nyepi",
      "descricao": "Ano-novo hindu balinês, dia de silêncio, jejum e meditação na ilha de Bali, na Indonésia."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "No Nyepi, o ano-novo hindu da ilha de Bali, até o aeroporto fecha. Como a população passa esse dia?",
    "resposta": "Em silêncio, sem sair de casa",
    "fonte": [
      "https://en.wikipedia.org/wiki/Nyepi"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Nyepi",
        "situacao": "ok",
        "texto": "Nyepi (Balinese: ᬜᬾᬧᬶ), also known as Day of Silence, is a Balinese holiday held every Isakawarsa (\"new year\") according to the Balinese calendar, and it can be traced as far back as 78 A.D.\n[…]\nThe observance includes maintaining silence, fasting, and meditation for Balinese Hindus. The following day is celebrated as New Year's Day.\n[…]\nThe word \"Nyepi\" originates from sepi, meaning \"silent\". The origin of the observance is a celebration of the Hindu Solar New Year based on the Shaka era, which began in 78 AD.\n[…]\nAs Bali's usually bustling streets and roads become empty during Nyepi, there is little or no noise from TVs and radios, and few signs of activity are visible inside homes. The only people to be seen outdoors are the pecalang, traditional security men who patrol the streets to ensure the prohibitions are followed.\n[…]\nAlthough Nyepi is primarily a Hindu holiday, non-Hindu residents and tourists are not exempt from the restrictions. Although they are free to do as they wish inside hotels, no one is allowed onto beaches or streets, and the only airport in Bali remains closed for the entire day. Tourists who violate these rules can face deportation or even prosecution. A Swiss tourist was given a one-year prison sentence in 2026 for leaving his hotel and calling Nyepi \"crazy\" on social media.\n[…]\nThe Nyepi rituals are performed as follows:\n[…]\nThe Dharma Shanti rituals are performed after all the Nyepi rituals are finished.\n[…]\nJuniartha, I Wayan (6 March 2008). \"Nyepi, in search of the silence within\". The Jakarta Post. Archived from the original on 7 February 2009. Retrieved 13 January 2009."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Nyepi",
        "situacao": "ok",
        "texto": "O Nyepi, também conhecido como Dia do Silêncio, é uma festividade hindu balinesa que se comemora sobretudo na ilha indonésia do Bali, no Isakawarsa (o dia de ano novo no calendário Saka balinês). É um feriado público na Indonésia, durante o qual os balineses fazem silêncio, jejuam e não saem de casa. Em 2019 celebra-se no dia 7 de março e em 2020 em 25 de março. Corresponde ao Ugadi celebrado em a\n[…]\nEm sentido mais lato, o Nyepi inclui, além do dia do silêncio e de ano novo, os seguintes rituais: Melasti, Bhuta Yajna, Ngembak Geni (ou Ngembak Agni ou Labuh Brata), Yoga (ou Brata), Ngembak Geni e Dharma Shanti.\n[…]\nO Nyepi propriamente dito dura desde as 6 horas da madrugada do dia de ano novo até às 6 horas da manhã do dia seguinte. Por ser um dia reservado para a autorreflexão,tudo o que possa interferir com esse propósito está restringido. As principais restrições são não acender fogos ou luzes fortes, não trabalhar, não ter quaisquer atividades recreativas, não viajar e, para alguns, nem sequer falar ou comer o que quer seja.\n[…]\nNão obstante o Nyepi ser um feriado sobretudo hindu, os residentes não hindus e turistas normalmente não estão dispensados de cumprir as restrições. Estas não se aplicam ao interior dos hotéis, mas ninguém pode sair à rua ou ir para as praias, e o único aeroporto do Bali permanece encerrado durante todo o dia. As únicas exceções são para os veículos de emergência para situações de risco de vida ou de parturientes.\n[…]\nDois a quatro dias antes Nyepi é realizado o ritual do Melasti, dedicado a Sanghyang Widi Wasa, a deusa suprema do panteão hindu balinês. É realizado nos Pura Sengara (templos hindus perto do mar) e destinam-se a purificar os Arca, Pratima e Pralingga (objetos sagrados) pertencentes a diversos templos e a recolher água sagrada do mar.\n[…]\nOs rituais do Nyepi propriamente ditos consistem no seguinte:",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Omikuji",
      "descricao": "Papelzinho com previsões da sorte, tirado ao acaso em templos budistas e santuários xintoístas do Japão."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Nos templos e santuários japoneses, quem tira um papelzinho da sorte com previsão ruim costuma fazer o quê com ele?",
    "resposta": "Amarrá-lo no próprio santuário",
    "fonte": [
      "https://en.wikipedia.org/wiki/O-mikuji"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/O-mikuji",
        "situacao": "ok",
        "texto": "Omikuji (御御籤/御神籤/おみくじ) are random fortunes written on strips of paper at Shinto shrines and Buddhist temples in Japan. Literally \"sacred lot\", these are usually received by making a small offering and randomly choosing one from a box, hoping for the resulting fortune to be good. As of 2024, vending machines sometimes dispense omikuji.\n[…]\nThe omikuji sequence historically commonly used in Japanese Buddhist temples, consisting of one hundred prophetic five-character quatrains, is traditionally attributed to the Heian period Tendai monk Ryōgen (912–985), posthumously known as Jie Daishi (慈恵大師) or more popularly, Ganzan Daishi (元三大師), and is thus called Ganzan Daishi Hyakusen (元三大師百籤, lit.\n[…]\nHistorically, however, the Japanese omikuji system is thought to have been modeled after the Chinese kau chim, a similar form of divination involving a tube full of bamboo sticks and a sequence of written or printed oracles. A wooden container containing oracular lots dated 1409 (Ōei 16) is preserved in Tendai-ji in Iwate Prefecture, suggesting that this method of fortune telling was imported to Japan somewhere before the Muromachi period (1336–1573).\n[…]\nCopies of these short poems were eventually discovered at Togakushi Shrine in Shinano Province (modern Nagano Prefecture) and widely disseminated. The Ganzan Daishi Hyakusen eventually became standard across many Buddhist temples (even those not affiliated with the Tendai school) and served as a model for other omikuji sequences. Various books explaining the meaning of the oracles were published during the period, suggesting their widespread popularity.\n[…]\nThe random fortunes in fortune cookies may be derived from omikuji; this is claimed by Seiichi Kito of Fugetsu-Do, and supported by evidence that American fortune cookies derive from 19th century Kyoto crackers called tsujiura senbei."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Omikuji",
        "situacao": "ok",
        "texto": "Omikuji ((御御籤, 御神籤, ou おみくじ) são sortes aleatórias escritas em tiras de papel nos templos xintoístas e budistas no Japão.\n[…]\nLiteralmente seu nome significa \"loteria sagrada\" e geralmente a pessoa recebe remechendo uma caixa, com a esperança de que a bênção seja boa. Os omikuji chovem que um pequeno buraco. (hoje em dia, em certos lugares eles caem de maquinas de roleta.) Desenrolando o papel a bênção será revelando.\n[…]\nA sorte poderá ser classificada em um desses grupos:\n[…]\nO omikuji prediz as chances da pessoa ou a esperança dela de se tornar real. Geralmente fala sobre saúde, sorte, vida e etc.\n[…]\nQuando a bênção é ruim geralmente furam ela em um dos pinheiros que ficam nos jardins do templo. Quando a sorte é boa, geralmente a pessoa guarda ela. Hoje em dia isso é mais costumeiros em crianças, os omikujis estão em quase todos os templos do japão.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Polterabend",
      "descricao": "Festa alemã realizada na véspera do casamento, em que os convidados quebram louça."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "No Polterabend, festa alemã da véspera do casamento, os convidados fazem barulho quebrando o quê para dar sorte aos noivos?",
    "resposta": "Louça de porcelana",
    "fonte": [
      "https://en.wikipedia.org/wiki/Polterabend"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Polterabend",
        "situacao": "ok",
        "texto": "Polterabend (Polish: pultrować) is a German and to a lesser extent Polish, Austrian and Swiss wedding custom in which, on the night before the wedding, the guests break porcelain to bring luck to the couple's marriage. The belief in the effectiveness of this custom is expressed by the old adage: \"Shards bring luck\" (German: Scherben bringen Glück). The expression is derived from a time when the wo\n[…]\nAt a Polterabend, the couple celebrates together with their friends, breaking porcelain for good luck in their new companionship, according to the superstition, whereas at a bachelor party the bride and the groom go out separately with their friends to celebrate the last day of their so-called freedom.\n[…]\nThe actual high point of the custom is the throwing onto the ground of porcelain that has been brought by guests. However, stoneware, flowerpots or ceramics such as tiles, sinks and toilet bowls are also happily thrown items. Metal objects such as tin cans and bottle tops are brought along to the festivities. Glass is not broken because for some glass symbolises happiness.\n[…]\nThe Polterabend is commonly celebrated in Germany and in the western parts of Poland, especially in Wielkopolska, Silesia, Kashubia, Kujawy and Kociewie, where there used to be significant German cultural influences. Polterabend has also been part of the wedding preparation for centuries in Sweden, Finland and in some rural areas in Brazil among the descendants of immigrants. In Danish, the word \"polterabend\" has come to denote a bachelor or bachelorette party.\n[…]\nThe custom is depicted in the German short film Porcelain directed by Annika Birgel. The 2024 film was premiered at the 74th Berlin International Film Festival on 21 February.\n[…]\nMartin P. Richter: Gelungene Überraschungen für Polterabend und Junggesellenabschied, Freiburg, Urania, 2005. ISBN 3-332-01612-1"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Perdão do peru",
      "descricao": "Cerimônia anual na Casa Branca em que o presidente dos Estados Unidos poupa simbolicamente um peru antes do Dia de Ação de Graças."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Todo ano, perto do Dia de Ação de Graças, o presidente americano concede na Casa Branca um perdão simbólico a quem?",
    "resposta": "Um peru",
    "fonte": [
      "https://en.wikipedia.org/wiki/National_Thanksgiving_Turkey_Presentation"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/National_Thanksgiving_Turkey_Presentation",
        "situacao": "ok",
        "texto": "The National Thanksgiving Turkey Presentation is a ceremony that takes place at the White House every year shortly before Thanksgiving. The president of the United States is presented with a live domestic turkey by the National Turkey Federation (NTF), usually a male of the Broad Breasted White variety. The early years also included a joint presentation with the Poultry and Egg National Board.\n[…]\nThe turkeys for the National Thanksgiving Turkey Presentation are usually between 17 and 21 week-old toms (males) weighing 45 pounds (20 kg) by the time of their White House visit, compared to the shorter growing period for turkeys destined for market.\n[…]\n1999: \"Harry the Turkey\".\n[…]\nA number of U.S. states have similar turkey presentation events. Minnesota holds a Thanksgiving turkey ceremony; that state usually does not issue a pardon. The pardoning ceremonies have also been extended to other holidays; for instance, Erie County, New York's county executive once facetiously pardoned a butter lamb during Holy Week.\n[…]\nThe \"pardoning\" of turkey during the National Thanksgiving Turkey Presentation has been cited as an illustration of carnism. Animal rights scholars cite this as an illustration of dissonance reduction, which is the prominence given to all similar \"saved from slaughter\" stories, in which the media focus on one animal that evaded slaughter, while ignoring the millions that did not. According to Melanie Joy, this dichotomy is characteristic of carnism.\n[…]\nIn the Rick and Morty episode \"Rick & Morty's Thanksploitation Spectacular\", Rick turns himself into a turkey in an effort to receive a presidential pardon from President Curtis.\n[…]\nInformation about the presidential turkey at the National Turkey Federation website\n[…]\nOfficial photo gallery of presidents pardoning turkeys\n[…]\nPresident Abraham Lincoln Pardoned Jack, the White House Turkey\n[…]\nPresidential Turkey Pardons, Pointless Nostalgia Video"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Bode de Gävle",
      "descricao": "Bode gigante de palha montado todo Natal na cidade sueca de Gävle."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Todo Natal, uma cidade sueca monta um bode gigante de palha na praça. Por que destino ele ficou famoso em muitos anos?",
    "resposta": "Ser incendiado por vândalos",
    "fonte": [
      "https://en.wikipedia.org/wiki/G%C3%A4vle_goat"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/G%C3%A4vle_goat",
        "situacao": "ok",
        "texto": "The Gävle Goat (Swedish: Gävlebocken, pronounced [ˈjɛ̌ːvlɛbɔkːɛn]) is a traditional Christmas display erected annually at Slottstorget (Castle Square) in central Gävle, Sweden. The display is a giant version of a traditional Swedish Yule goat figure made of straw. It is erected each year by local community groups at the beginning of Advent over a period of two days.\n[…]\nThe display has become notable for being a recurring target for vandalism by arson, and has been destroyed many times since the first goat was erected in 1966. Because the fire station is close to the location of the goat, most of the time the fire can be extinguished before the wooden skeleton is severely damaged. If the goat is burned down before Saint Lucia Day on 13 December, the goat is rebuilt.\n[…]\nIts skeleton is then treated and repaired, and the goat reconstructed over it, using straw which the Goat Committee has pre-ordered. As of 2005, four people had been caught or convicted for vandalizing the goat. In 2001, the goat was burned down by a 51-year-old American visitor from Cleveland, Ohio, who spent 18 days in jail and was subsequently convicted and ordered to pay SEK 100,000 (US$9,681.35; equivalent to US$21,192 in 2025) in damages.\n[…]\nIn 1996, the Southern Merchants introduced camera surveillance to monitor the goat 24 hours a day. On 27 November 2004, the Gävle Goat's homepage was hacked, and one of the two official webcams changed. In 2003, while security guards were posted around the goat in order to prevent vandalism, the temperature dropped far below freezing. As the guards sheltered in a nearby restaurant to escape the cold, the goat was burned.\n[…]\nGävle goat webcam at the Gävle city website\n[…]\nGävle goat blog\n[…]\nGävle goat history Archived 19 January 2016 at the Wayback Machine\n[…]\n\"Arson as a Christmas Tradition: The Gävle Goat\", a YouTube video by presenter Tom Scott."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bode_de_Gev%C3%A1lia",
        "situacao": "ok",
        "texto": "O bode de Gävle (em sueco: Gävlebocken;  PRONÚNCIA) é a versão gigante do tradicional julbock, um bode sueco de Natal, feito de palha, erguido na praça Slottstorget, no centro da cidade de Gävle.\n[…]\nFoi erguido pela primeira vez em 1966 por iniciativa do técnico de publicidade Stig Gavlén, que queria atrair clientes para as empresas localizadas na parte sul da cidade. Construído em 1 de dezembro, foi queimado no dia 31 de dezembro.\n[…]\nAnualmente, desde 1966, o bode foi levantado em 1 de dezembro e na maior parte dos anos, destruído no dia de Santa Luzia, no dia de Natal ou no dia de Ano Novo, sendo geralmente incendiado antes de ser desmontado.\n[…]\nEm 2009, o bode de Gävle foi incendiado no 24º dia depois de um ataque vândalo. Foi a primeira vez que ele foi incendiado antes do dia 31 de dezembro. Em 2016, o bode foi incendiado em 28 de novembro, apenas algumas horas depois de ser montado.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Dia onomástico",
      "descricao": "Data do calendário dos santos que corresponde ao nome de uma pessoa, comemorada em países como a Grécia."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Na Grécia, muita gente festeja, além do aniversário, o seu dia do nome. Que data é essa?",
    "resposta": "O dia do santo de mesmo nome",
    "fonte": [
      "https://en.wikipedia.org/wiki/Name_day"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Name_day",
        "situacao": "ok",
        "texto": "In Christianity, a name day is a tradition in many countries of Europe and the Americas, as well as Christian communities elsewhere. It consists of celebrating a day of the year that is associated with one's baptismal name, which is normatively that of a biblical character or other saint. Where they are popular, individuals celebrate both their name day and their birthday in a given year.\n[…]\nThe onomástico or onomástica in Latin America is the feast of the saint in honor of which someone was named. It is very common for this term to be used as a synonym for birthdays, but this word refers to the list of the names of the saints, so they are not synonymous. Although (especially years before) by popular tradition the newborn son was named with the name that the Catholic saint indicated for that day, the day of someone's birthday does not always coincide with the day of his name.\n[…]\nName days (onomastica) in Romania are associated with the Orthodox Christian saint's celebrations. The celebrations are made very much in the same way as in Greece (see above). Name days are less important than birthdays, and those who have the name of that particular saint celebrate on that day. Some of the more important name days are 1 January: Sf. Vasile (St. Basil), 7 January: Sf. Ioan (St. John), 23 April: Sf. Gheorghe (St. George), 21 May: Sf. Constantin şi Elena (St.\n[…]\nUntil recently, name days in Spain (Spanish: onomásticos or día de mi/su santo) were widely celebrated. Onomásticos are not limited to saints but also include the celebration days of the different representations of the Virgin Mary. For example, the name day of a woman named Carmen would be 16 July, day of Our Lady of Mount Carmel. Currently, onomásticos are still remembered in more traditional families, but are not generally celebrated with festive parties and presents as they were in the past."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dia_do_nome",
        "situacao": "ok",
        "texto": "O dia do nome cristão de uma pessoa é o dia de comemoração litúrgica de um santo no ano eclesiástico cujo nome essa pessoa carrega (santo padroeiro) . Em algumas regiões ou países católicos e ortodoxos, a celebração dos dias de nome é mais importante, ou pelo menos tão importante quanto, os aniversários. A comemoração do dia do nome é semelhante à comemoração de um aniversário, por isso a pessoa r\n[…]\nNas ordens religiosas, o membro não é celebrado em seu aniversário, mas no dia da memória do santo ou do mistério da festa que lhe dá o nome na ordem (nome da ordem).\n[…]\nNo curso da cristianização dos povos fora do antigo Império Romano, os nomes cristãos tornaram-se uma marca distintiva e geralmente indicavam uma conexão especial com o santo cujo nome o catecúmeno havia adotado no batismo. O dia da memória do santo no calendário litúrgico da Igreja tinha um significado especial para o portador do nome, mas a data de nascimento muitas vezes não era conhecida.\n[…]\nO sacerdote deve garantir que as crianças não recebam nomes ofensivos ou ridículos, ou mesmo aqueles tirados de lendas ou de ídolos ou pagãos. Em vez disso, os nomes dos santos devem ser preferidos sempre que possível.\n[…]\nPara se distinguirem dos protestantes, os fiéis católicos devem afirmar regular e festivamente uma ligação próxima com seu respectivo santo padroeiro. A recomendação de dar aos candidatos ao batismo o nome de um santo pode ser encontrada no Catechismus Romanus de 1566 e também no Rituale Romanum de 1614.\n[…]\nComo o número de santos é muito maior do que o número de dias de um ano, muitas vezes vários santos padroeiros caem no mesmo dia. Além disso, alguns nomes têm vários santos que carregam o mesmo nome; a data da celebração do dia do nome depende de qual santo a pessoa recebe o nome.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Galette des Rois",
      "descricao": "Torta folhada francesa comida no Dia de Reis, com um pequeno brinde escondido no recheio."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Na França, a torta do Dia de Reis, a galette des rois, esconde um brinde chamado fève. O que essa palavra significa?",
    "resposta": "Fava",
    "fonte": [
      "https://en.wikipedia.org/wiki/King_cake",
      "https://fr.wikipedia.org/wiki/Galette_des_rois"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/King_cake",
        "situacao": "ok",
        "texto": "A king cake, also known as a three kings cake or a baby cake, is a cake associated in many countries with the Epiphany, the celebration of the Twelfth Night after Christmas. Traditionally made with brioche dough, in most cases a fève (lit. 'fava bean'), such as a figurine representing Christ as a child, was hidden inside. After the cake is cut, whoever finds the fève in their slice wins a prize.\n[…]\nThe gâteau des rois (referred to as royaume, brioche des rois, or coque des rois) is mainly popular in the Occitan-speaking regions of the south of France. It is a crown-shaped brioche dough decorated with candied fruit and coarse sugar.\n[…]\nThe Guianan galette (more commonly known as the Creole galette) is a traditional pastry of French Guianan cuisine. This is a Creole variant of the galette des rois which is eaten as a dessert during Epiphany. It can be garnished with cream, coconut, guava, etc. It is consumed throughout the Carnival period (from the Epiphany until Ash Wednesday) and preferably accompanied by champagne.\n[…]\nThe German and Swiss Dreikönigskuchen, or three kings cakes, are shaped like wreathes or rounds, and use an almond as the fève.\n[…]\nBolo-rei (lit. 'king cake') is a traditional Portuguese cake eaten from the beginning of December until Epiphany. The recipe is derived from the Southern French gâteau des rois, which found its way to Portugal when Confeitaria Nacional opened as the Portuguese monarchy's official bakery in 1829.\n[…]\nThe cake is round with a large hole in the centre, resembling a crown covered with crystallized and dried fruit. It is baked from a soft, white dough, with raisins, various nuts and crystallized fruit. Also included is the dried fava bean, and tradition dictates that whoever finds the fava has to pay for the cake next year.\n[…]\nRecipes: Portugal’s Bolo Rei\n[…]\nEuroMaxx A La Carte Bolo Rei from Portugal recipe"
      },
      {
        "url": "https://fr.wikipedia.org/wiki/Galette_des_rois",
        "situacao": "ok",
        "texto": "La galette des rois est une préparation culinaire traditionnellement consommée après la fête de Noël, dans les pays de tradition chrétienne. Il s'agit actuellement d'une galette élaborée à base de pâte feuilletée et d'amandes (dans une préparation de frangipane), et consommée dans la moitié nord de la France, en Belgique, en Suisse, au Luxembourg, au Québec, en Acadie et au Liban.\n[…]\nDe nombreuses variantes existent. Par exemple, cette galette est aussi appelée « galette parisienne » dans les régions du sud de la France, où l'on consomme non pas la galette, mais le gâteau des rois, ou diverses formes apparentées dans les pays non francophones.\n[…]\nLa tradition de « tirer les rois » à l’Épiphanie passe par la dissimulation d'une fève dans la galette ; la personne qui obtient cette fève devient le roi ou la reine de la journée.Les premières fèves en porcelaine apparaissent à la fin du XVIIIe siècle. Pendant la Révolution française, on remplace l’enfant Jésus par un bonnet phrygien.\n[…]\nDans la plus grande partie de la France, la galette des rois est originellement une galette à base de pâte feuilletée, simplement dorée au four et mangée accompagnée de confitures ; elle peut également être fourrée avec diverses préparations : frangipane, fruits, crèmes, chocolat, frangipane mélangée à la compote de pommes, par exemple.\n[…]\nDans le sud-est, des fruits confits colorés sont ajoutés, évoquant les pierres précieuses des couronnes. Suivant les lieux, il prend diverses appellations populaires : « gâteau des rois », « couronne des rois », « royaume », « fouace des rois », etc. Les deux recettes coexistent souvent. En effet, les commerces du sud proposent généralement aussi la « galette parisienne » à la vente, qui gagne en effet en popularité et est consommée par une partie significative de la population.\n[…]\nÉtienne Pasquier, Recherches de la France, Paris, Martin Colet, 1633."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bolo-rei",
        "situacao": "ok",
        "texto": "Bolo-rei é um bolo festivo em forma de coroa, que faz parte da tradição portuguesa, e que se come tipicamente na Quadra Natalícia e Dia de Reis. O seu nome alude aos três reis magos.\n[…]\nA Igreja Católica aproveitou o facto daquele jogo pagão ser característico do mês de Dezembro e decidiu reconvertê-lo e relacioná-lo com a Natividade e com uma Epifania (a primeira das quais ficou conhecida como Dia de Reis), ou seja, com os dias 25 de Dezembro e 6 de Janeiro. A influência da Igreja Católica na Idade Média determinou que esta última data fosse simbolizada por uma fava introduzida num bolo, mas cuja receita se desconhece atualmente.\n[…]\nO bolo-rei no seu formato atual surgiu na corte de Luís XIV, em França, para as festas do Ano Novo e do Dia de Reis. Vários escritores da época escreveram sobre esta iguaria, até mesmo Jean-Baptiste Greuze a celebrou num famoso quadro com o nome Gâteau des rois.\n[…]\nSegundo esta tradição francesa, eram incluídos no bolo uma fava seca e um brinde de porcelana, normalmente uma figura da natividade do presépio. A quem calhasse a fava era considerado o rei ou rainha da festa, com direito a usar uma coroa de circunstância e poderia pedir um desejo, mas também deveria pagar o próximo bolo.\n[…]\nTradicionalmente o bolo-rei era confecionado e vendido com fava seca e brinde no interior. No entanto, em 1999, Portugal começou a limitar a inclusão destes \"extras\" nas doçarias, quando entrou em vigor o decreto-lei n.º 158/99, de 11 de maio. O artigo 4.º proibiu “a comercialização de géneros alimentícios que contenham brindes misturados” em Portugal, dando (no número 3 do mesmo) uma exceção ao bolo-rei “por razões de reconhecida tradição cultural”.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Kit Kat no Japão",
      "descricao": "Versão japonesa do chocolate Kit Kat, famosa pelos muitos sabores e pelo uso como amuleto de sorte."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "No Japão, o chocolate Kit Kat virou amuleto de estudantes em véspera de prova. Com qual expressão japonesa o nome se parece?",
    "resposta": "Kitto katsu, com certeza vencerá",
    "fonte": [
      "https://en.wikipedia.org/wiki/Kit_Kats_in_Japan"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Kit_Kats_in_Japan",
        "situacao": "ok",
        "texto": "There have been more than 400 limited-edition seasonal and regional flavors of Kit Kat chocolate bars produced in Japan since 2000, many exclusive to the country. Nestlé, which operates the Kit Kat brand in Japan, reports that the brand overtook Meiji Chocolate as the top-selling confectionery in Japan from 2012 to 2014. The company's marketing campaign, which partnered with Japan Post to sell the\n[…]\nThe campaign encouraged associations of the product's name with the coincidental cognate Kitto Katsu (きっと勝つ), translated as \"You will surely win\", and could be mailed as a good luck charm for students ahead of university exams.\n[…]\nKit Kats in Japan are produced at Nestlé-owned factories in Himeji and Kasumigaura. The milk chocolate used for Kit Kats is made from whole-milk powder; Nestlé buys most of its cacao beans from West Africa.\n[…]\nMarketing for Kit Kats in Japan is believed to have benefited from the coincidental false cognate with \"Kitto Katsu\", a phrase meaning \"You will surely win\" in Japanese. Some market research has shown that the brand is strongly correlated to good luck charms, particularly among students ahead of exams. Kit Kat's \"Lucky Charm\" advertising campaign in Japan won the Asian Brand Marketing Effectiveness Award in 2005.\n[…]\nA variety of Takagi's flavors have been introduced as seasonal products, including flavors such as plum, passion fruit, chilli, ginger and kinako soybean powder. In 2016, Nestlé introduced a sake Kit Kat, which combines sake powder with white chocolate.\n[…]\nSome varieties are restricted to a specific region associated with that particular bar. Others are limited-run varieties, with excess supply saved for year-end \"happy bag\" specials. In 2015, 500 single-finger bitter chocolate bars were sold with gold leaf wrapping for about $16 in high-end retail shops.\n[…]\nChocolate in Japan"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Kit_Kats_no_Jap%C3%A3o",
        "situacao": "ok",
        "texto": "Já foram lançados mais de 300 sabores de edição limitada sazonais e regionais de Kit Kat no Japão desde 2000. A Nestlé, que controla a marca Kit Kat no Japão, afirmou que o doce se tornou o mais vendido no país entre 2012 e 2014, superando o Chocolate Meiji. Uma campanha de marketing da companhia, feita em parceria com os correios japoneses para vender o doce em 20000 agências, ganhou o prêmio \"Me\n[…]\nEssa campanha incentivou associações com o nome do produto para o falso cognato Kitto Kattsu (きっと勝つ) , traduzido como \"você certamente irá vencer\", e estimulava o envio dos chocolates para alunos na época de vestibular, como amuletos de boa sorte.\n[…]\nKit Kats começaram a ser vendidos no Japão em 1973, quando as confeitarias Rowntree's, britânica, e Fujiya, japonesa, fizeram um acordo. A marca se tornou a mais vendida no Japão, assumindo o posto que era do chocolate Meiji.\n[…]\nAs lojas \"Kit Kat Chocolatary\", com receitas desenvolvidas pelo chef Yasumasa Takagi, foram inauguradas em 2014, abrindo sete lojas em menos de um ano. A empresa afirma que já serviu mais de um milhão de consumidores e lucrou mais de dois bilhões de ienes. Estas lojas vendem produtos mais elaborados de Kit Kat do que os industrializados, como barras de chocolate escuro com infusão de framboesa, rum de laranja com chocolate, ameixa, maracujá com pimenta e chá verde com flores de cerejeira.\n[…]\nEm 2016, a Nestlé introduziu no mercado uma versão feita a partir de pó de saquê, misturado com chocolate branco.\n[…]\nAlgumas variedades são restritas à regiões específicas do país, associadas com os ingredientes daquela determinada barra de chocolate; outras só são vendidas em determinadas épocas do ano. Em 2015, uma versão coberta com folha de ouro foi lançada, com apenas 500 unidades disponíveis no mercado.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Snegurochka",
      "descricao": "Personagem do folclore russo, neta e ajudante de Ded Moroz na entrega de presentes de Ano-Novo."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "No Ano-Novo russo, Ded Moroz chega acompanhado da neta, Snegurochka. Qual é o significado do nome dela?",
    "resposta": "Donzela da neve",
    "fonte": [
      "https://en.wikipedia.org/wiki/Snegurochka"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Snegurochka",
        "situacao": "ok",
        "texto": "Snegurochka (diminutive) or Snegurka (Russian: Снегу́рочка (diminutive), Снегу́рка, Russian pronunciation: [sʲnʲɪˈɡurət͡ɕkə, sʲnʲɪˈɡurkə]), or Snow Maiden, is a Novy God character originating from Russian fairy tales.\n[…]\nSince the mid-20th century under the Soviet period, Snegurochka is known for being depicted as the granddaughter and companion of Ded Moroz during the New Year.\n[…]\nIn the late Russian Empire Snegurochka was part of Christmas celebrations, in the form of figurines to decorate the fir tree and as a character in children's pieces.\n[…]\nIn the early Soviet Union, the holiday of Christmas was banned, together with other Christian traditions, until it was reinstated as a holiday of newly-independent Russia in 1991. However, in 1935 the celebration of the New Year was allowed, which included, in part, the fir tree and Ded Moroz. At this time Snegurochka acquired a role of the granddaughter of Ded Moroz and his helper. In this role, she wears long silver-blue robes and a furry cap or a snowflake-like kokoshnik.\n[…]\nDuring the usual scripts of New Year celebrations for children, Snegurochka's appearance is preceded by the audience screaming \"Sne-gu-roch-ka\" while waiting for her.\n[…]\nNowadays, Snegurochka is a strongly capitalized figure in Russia, being an important part of the New Year's celebrations, culture and almost always used as the companion of the Ded Moroz. In 2020, a man from Russia tried to sue Coca Cola for bringing Santa Claus into their Russian ad instead of Ded Moroz and Snegurochka."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Snegurochka",
        "situacao": "ok",
        "texto": "Snegurochka (diminutivo) ou Snegurka (Russo: Снегу́рочка (diminutivo), Снегу́рка, IPA: [sʲnʲɪˈɡurət͡ɕkə, sʲnʲɪˈɡurkə]), ou Donzela da Neve, é uma personagem do Ano Novo russo originada nos contos de fadas russos.\n[…]\nDesde meados do século XX, durante o período soviético, a Snegurochka é conhecida por ser retratada como a neta e companheira de Ded Moroz durante o Ano Novo.\n[…]\nHistórias do tipo de Snegurochka correspondem ao tipo Aarne–Thompson 703* A Donzela da Neve. A história de Snegurochka compara-se a contos do tipo 1362, A Criança da Neve, onde a origem estranha é uma mentira descarada.\n[…]\nEm 1878, o compositor Ludwig Minkus e o mestre de ballet Marius Petipa encenaram uma adaptação de ballet de Snegurochka intitulada A Filha das Neves para o Ballet Imperial do Czar. O conto também foi adaptado numa ópera por Nikolai Rimsky-Korsakov, intitulada A Donzela da Neve: Um Conto de Fadas da Primavera (1880–1881).\n[…]\nA história de Snegurochka foi adaptada em dois filmes soviéticos: um filme animado com música de Rimsky-Korsakov, chamado A Donzela da Neve (1952), e o filme live-action A Donzela da Neve (1968). Ruth Sanderson recontou a história no livro ilustrado A Princesa da Neve, no qual apaixonar-se não mata imediatamente a princesa, mas transforma-a numa humana mortal, que eventualmente morrerá.\n[…]\nFoi nessa época que a Snegurochka adquiriu o papel de neta e ajudante de Ded Moroz. Nesse papel, ela veste longas roupas prateadas-azuis e um chapéu de pele ou um kokoshnik semelhante a um floco de neve. Durante os roteiros habituais das celebrações de Ano Novo para crianças, a aparição de Snegurochka é precedida pelo público gritando \"Sne-gu-roch-ka\" enquanto espera por ela.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Joulupukki",
      "descricao": "Nome finlandês do Papai Noel, figura que traz presentes na Finlândia."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Na Finlândia, o bom velhinho atende por Joulupukki, nome herdado de um antigo costume pagão. Como esse nome se traduz?",
    "resposta": "Bode do Natal",
    "distratores": [
      "Avô Gelo",
      "Velho do Inverno",
      "Duende da Neve"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Joulupukki"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Joulupukki",
        "situacao": "ok",
        "texto": "Joulupukki (Finnish: [ˈjou̯luˌpukːi]) is a Finnish Christmas figure. The name joulupukki literally means 'Christmas goat' or 'Yule goat' in Finnish; the word pukki comes from the Old Swedish word bukker, a cognate of English \"buck\", meaning 'billy-goat'. An old Nordic folk tradition, the figure is now often conflated with Santa Claus.\n[…]\nThe Finnish Father Christmas Joulupukki (literally \"Christmas goat\") appears connected with the Scandinavian julebukk, not the \"Yule goat\" as such, but rather the ritual theatrics of men dressed up in costume rowdily going around villages (see Julebukking). Thus an older dictionary glosses Finnish joulu-ukko (lit. \"Yule's old man\") as Swedish julebock.\n[…]\nToday, in some parts of Finland, the folk custom persists of persons performing in goat costume in return for leftover Christmas food. The performer traditionally is an older man, who is called a \"nuuttipukki\".\n[…]\nThe popular holiday song \"Rudolph the Red-Nosed Reindeer\", in its Finnish translation, Petteri Punakuono, has led to Rudolph's general acceptance in Finland as Joulupukki's lead reindeer. Joulupukki is often mentioned as having a wife, Joulumuori (lit. 'Old Lady Christmas'), but tradition says little of her.\n[…]\nPopular radio programs from the year 1927 onwards probably had great influence in reformatting the concept with the Santa-like costume, reindeer and Korvatunturi as his dwelling place. Because there really are reindeer in Finland, and Finns live up North, the popular American story took root in Finland very quickly.\n[…]\nFinland's Joulupukki receives over 500,000 letters from over 200 countries every year. Most letters come from Poland, Italy, China, Taiwan, Hong Kong, and Macau.\n[…]\nSection on Finland in Christmas worldwide"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Karaokê",
      "descricao": "Diversão nascida no Japão em que se canta sobre uma gravação instrumental, acompanhando a letra numa tela."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O karaokê nasceu no Japão nos anos setenta. Qual é o significado dessa palavra em japonês?",
    "resposta": "Orquestra vazia",
    "distratores": [
      "Voz solitária",
      "Canto livre",
      "Música de bar"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Karaoke"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Karaoke",
        "situacao": "ok",
        "texto": "Karaoke (カラオケ) is a type of interactive entertainment system usually offered in nightclubs and bars, where people sing along to pre-recorded accompaniment using a microphone.\n[…]\nDespite the Japanese provenance of the term karaoke (first attested in 1977), the invention of karaoke-styled machines is controversial. It is usually credited to two people, depending on the sources: Daisuke Inoue of Japan or Roberto del Rosario of the Philippines, neither of whom significantly benefited from the worldwide surge of popularity of the karaoke starting from the 1980s. The profits in the karaoke industry went to later machines developed by larger Japanese corporations.\n[…]\nUnlike Inoue, del Rosario patented the \"Sing-Along System\" (issued in 1983 and 1986) and is recognized as the sole holder of a patent for a karaoke system in the world after he won a patent infringement case against a Chinese company in the 1990s. Despite this, he also did not profit significantly from his invention. Like Inoue, his machines were eventually replaced by more advanced commercial versions made by larger corporations that became available by the 1980s.\n[…]\nIn Europe and North America, karaoke tracks are almost never done by the original artist, but are re-recorded by other musicians.\n[…]\nBetween 2002 and 2012, numerous fatal incidents in the Philippines occurred in connection to karaoke bars and the song \"My Way\", popularized by Frank Sinatra. Similar violent and fatal incidents connected to karaoke bars have also occurred in other countries, including Malaysia, Thailand, and China.\n[…]\nPowerPoint karaoke\n[…]\nThe dictionary definition of karaoke at Wiktionary\n[…]\nMedia related to Karaoke at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Karaok%C3%AA",
        "situacao": "ok",
        "texto": "Karaoke (カラオケ, Karaoke), karaokê ou caraoquê é um tipo de entretenimento interativo geralmente oferecido em clubes e bares, em que se canta por cima de uma música gravada, com a utilização de um microfone. A música em questão usualmente é uma versão instrumental de algum hit popular. As letras são geralmente exibidas em uma tela de vídeo, junto com um símbolo em movimento que muda de cor, ou image\n[…]\nA palavra \"karaoke\", na língua japonesa, é um substantivo formado pelas palavras kara (空; \"vazia\") e ōkesutora (オーケストラ; \"orquestra\").\n[…]\nAs últimas gerações são chamadas \"sistemas de karaokê\" All-In-One (Magic Sing, Magic Mic, Magic Singalong). Estes são totalmente sem CDs: aqui, a escolha da música é armazenada em um chipe dentro do microfone, o que reduz a quantidade de equipamentos na utilização de forma significativa. Uma opção de baixo custo é se tocar a música de karaokê através da placa de som do computador.\n[…]\nNo Brasil, quando se fala em karaokê, os imigrantes japoneses no Brasil, os nisseis, trouxeram o karaokê para o Brasil, e o bairro da Liberdade, em São Paulo, é o mais expoente da febre de karaokês no Brasil. Durante a pandemia, inúmeros estabelecimentos fecharam suas salas de karaokê, com alguns lugares reabrindo em 2022 e 2023.\n[…]\nfalar em karaokê é falar sobre os concursos que acontecem nos fins de semana entre famílias nipônicas, além de concursos de suas comunidades. Nesses concursos, participam cantores amadores de diferentes categorias por nível técnico e idade. Em fevereiro, acontece o Paulistão de Karaokê, e, em julho, o Concurso Brasileiro da Canção Japonesa - Brasileirão.\n[…]\nDesde 2015 o Brasil faz parte do Karaoke World Championships, selecionando os melhores candidatos brasileiros para competir na final no exterior.\n[…]\nPowerpoint-Karaoke",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Feng shui",
      "descricao": "Prática tradicional chinesa de organizar casas, móveis e construções em harmonia com o ambiente."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O feng shui, arte chinesa de arrumar casas e móveis em harmonia com o ambiente, tem nome formado por duas palavras. Quais?",
    "resposta": "Vento e água",
    "distratores": [
      "Fogo e terra",
      "Céu e montanha",
      "Luz e sombra"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Feng_shui"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Feng_shui",
        "situacao": "ok",
        "texto": "Feng shui ( or ) is a traditional form of geomancy that originated in ancient China. The term feng shui means, literally, \"wind-water\" (i.e., fluid). From ancient times, landscapes and bodies of water were thought to direct the flow of the universal qi – \"cosmic current\" or energy – through places and structures. More broadly, feng shui includes astronomical, astrological, architectural, cosmologi\n[…]\nA core aspect of feng shui has been its understanding of polarity. As opposed to western dualism, in which concepts are completely oppositional and irreconcilable, Chinese polarity sees opposing concepts as constantly changing and inseparable. The result is an emphasis on continual compromise and balance in order to maintain harmony.\n[…]\nLearning in order to practice feng shui is still somewhat considered taboo. Nevertheless, it is reported that feng shui has gained adherents among Communist Party officials according to a BBC Chinese news commentary in 2006, and since the beginning of the reform and opening up the number of feng shui practitioners is increasing.\n[…]\nVictorian-era commentators on feng shui were generally ethnocentric, and as such skeptical and derogatory of what they knew of feng shui. In 1896, at a meeting of the Educational Association of China, Rev. P. W. Pitcher railed at the \"rottenness of the whole scheme of Chinese architecture,\" and urged fellow missionaries \"to erect unabashedly Western edifices of several stories and with towering spires in order to destroy nonsense about fung-shuy. [sic]\"\n[…]\nFeng shui is criticized by Christians around the world. Some have argued that it is \"entirely inconsistent with Christianity to believe that harmony and balance result from the manipulation and channeling of nonphysical forces or energies, or that such can be done by means of the proper placement of physical objects. Such techniques, in fact, belong to the world of sorcery.\""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Feng_shui",
        "situacao": "ok",
        "texto": "O feng shui (chinês: 風水), também conhecido como geomancia chinesa, é uma prática pseudocientífica originária da China antiga.\n[…]\nAlega usar forças energéticas para harmonizar os indivíduos com o ambiente ao seu redor. O termo feng shui se traduz literalmente como \"vento-água\". Esta é uma apropriação cultural retirada do agora perdido Livro do Enterro [en] registrado nos comentários de  Guo Pu.\n[…]\nHistoricamente o feng shui era amplamente utilizado para orientar edifícios - geralmente estruturas espiritualmente significativas, como túmulos, mas também residências e outras estruturas. Dependendo do estilo particular de feng shui que está sendo usado, um local auspicioso pode ser determinado em relação a características locais como corpos d'água, estrelas ou através do uso de uma bússola.\n[…]\nFeng shui significa literalmente \"vento e água\", os dois elementos principais - dos quais o primeiro emite e espalha, e o segundo recolhe, absorve e transporta a energia vital naturalmente presente no planeta - e que através do transporte das águas e consequente absorção por capilarização, com o seu fluxo determinam a carga de energia vital de um determinado local.\n[…]\nDe acordo com o Taoísmo, existem dois princípios gerais que orientam o desenvolvimento dos acontecimentos naturais: o Ch'i e o equilíbrio dinâmico do Yin e Yang. Yin é o princípio escuro, húmido e feminino, enquanto yang é o princípio quente, brilhante e masculino. No feng shui, o yin é representado pela água e o yang é o vento, talvez mais no sentido da respiração. No feng shui, o I Ching é praticado no Bagua ao decorar o interior dos edifícios.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Oktoberfest",
      "descricao": "Festa popular anual de Munique, na Alemanha, famosa pela cerveja e pelos trajes típicos bávaros."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Os moradores de Munique chamam a Oktoberfest pelo apelido de Wiesn. Esse apelido vem de que tipo de lugar onde a festa acontece?",
    "resposta": "Um prado, a Theresienwiese",
    "fonte": [
      "https://en.wikipedia.org/wiki/Oktoberfest"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Oktoberfest",
        "situacao": "ok",
        "texto": "Oktoberfest (German pronunciation: [ɔkˈtoːbɐˌfɛst] ; Bavarian: Oktobafest/d'Wiesn) is the world's largest Volksfest. It combines a beer festival with a fun fair and is held annually in Munich on the Theresienwiese from mid-September to the first Sunday in October.\n[…]\nOn October 12, 1810, Crown Prince Ludwig of Bavaria married Princess Therese of Saxe-Hildburghausen. Munich officials invited the public to celebrate on fields outside the city walls. The site was named Theresienwiese (\"Therese's Meadow\") the following year and is still called Wiesn.\n[…]\nThe tradition of the Oktoberfest entry parade began in 1887, when Hans Steyrer, then a festival host, marched from his establishment on Tegernseer Landstraße to the Theresienwiese with his staff, a brass band, and a cart of beer.\n[…]\nIt is now a regular feature of Oktoberfest and is among the largest processions of its kind. On the first Sunday of the festival roughly 8,000 participants walk the 7 km (4.3 mi) route from the Maximilianeum to the Theresienwiese.\n[…]\nOktoberfest is one of the largest festivals in the world, attracting millions of visitors annually. In 1999, about 6.5 million people visited the 42-hectare Theresienwiese fairground. Around 72 % of visitors came from Bavaria, and 15 % from abroad, including neighbouring EU countries, North America, Oceania, and East Asia.\n[…]\nThe historical Oktoberfest (Oide Wiesn, Bavarian for \"old fairground\") was introduced in 2010 for the 200th anniversary of Oktoberfest. It was held on the former site of the Central Agricultural Festival (ZLF) at the south end of the Theresienwiese and became a recurring feature from 2011.\n[…]\n2008 – Theresienwiese closed to the public during construction.\n[…]\nBeer and Oktoberfest Museum"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Oktoberfest",
        "situacao": "ok",
        "texto": "A Oktoberfest (também conhecida como \"Wiesn\" em Munique[carece de fontes]?) é um festival de cerveja originado em Munique, Alemanha. Foi criado pelo rei bávaro Luís I para celebrar o seu casamento em 1810. A Oktoberfest é também uma feira de produtos e diversões celebrada em Munique (München), no estado da Baviera (Bayern), no sul da Alemanha, e disseminada por vários lugares do mundo.\n[…]\nA Oktoberfest é frequentado anualmente por seis milhões de visitantes de todo o mundo e se inicia desde 1872 sempre no sábado depois do 15 de Setembro as 12h00 horas com a tradicional cerimonia de abertura \"O'zapft is\". Termina duas semanas mais tarde, no primeiro domingo de Outubro - daí o nome Oktoberfest (em alemão, \"Oktober\" significa outubro, \"Fest\", festa ou festival, literalmente \"Festa de Outubro\").\n[…]\nA Oktoberfest de Blumenau atrai turistas do Brasil e do exterior, especialmente da Alemanha. mas também de países vizinhos da América do Sul e da América do Norte, sendo considerada a maior festa alemã das Américas e a segunda maior do mundo - atrás apenas da Oktoberfest original, em Munique. Segundo o site oficial do evento, em 2009 a Oktoberfest de Blumenau, atraiu 731 934 visitantes que consumiram pouco mais de 450 mil litros de chope e 19 821 garrafas de cervejas importadas.\n[…]\nAtualmente é considerada a maior festa Alemã das Américas, e em 2013 aconteceu entre os dias 3 e 20 de outubro.\n[…]\nA Oktoberfest entrou para o calendário oficial de eventos da cidade apenas em 2017. Na ocasião, o evento foi realizado na Arena Anhembi, voltando a acontecer no mesmo local no ano seguinte. Em 2019, o festival ocorreu no Jockey Club.\n[…]\nVeja mais fotos da Oktoberfest.\n[…]\nFesta Nacional do Chope Escuro\n[…]\nOktoberfest de Igrejinha\n[…]\nOktoberfest de Santa Cruz do Sul\n[…]\nFotos de Oktoberfest\n[…]\n(em alemão) Oktoberfest Munique",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Ferragosto",
      "descricao": "Feriado italiano de quinze de agosto, marco das férias de verão no país."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O Ferragosto, feriado italiano de meados de agosto que esvazia as cidades, coincide com qual festa católica dedicada a Maria?",
    "resposta": "Assunção de Nossa Senhora",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ferragosto"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ferragosto",
        "situacao": "ok",
        "texto": "Ferragosto is the popular Italian name of the public holiday of the Catholic feast of the Assumption of Mary celebrated on 15 August. It originates from Feriae Augusti, the festival of Emperor Augustus, who made 1 August a day of rest after weeks of hard work on the agricultural sector. It became a custom for the workers to wish their employers buon Ferragosto and receive a monetary bonus in retur\n[…]\nBy metonymy, it is also the summer vacation period around mid-August, which may be a long weekend (ponte di Ferragosto) or most of August.\n[…]\nThe modern Italian name of the holiday comes directly from the Latin name.\n[…]\nAccording to Richard Overy, author of A History of War in 100 Battles, the Ferragosto Holiday was introduced by C. Caesar Octavian, the future Augustus, after his victory over Mark Antony at the Battle of Actium on 2 September, 31 BCE.\n[…]\nDuring the early medieval period, the Catholic Church moved the date of Ferragosto from the 1st to 15 August—the feast day of the Assumption of Mary—so as to integrate the pre-existing celebration into the cycle of the Christian year.\n[…]\nThe popular tradition of taking a trip during Ferragosto arose under the Fascist regime. In the second half of the 1920s, during the mid-August period, the regime organised hundreds of popular trips through the fascist leisure and recreational organisations of various corporations, and via the setting up of the \"People's Trains of Ferragosto\", which were available at discounted prices.\n[…]\nThe initiative gave the opportunity to less well-off social classes to visit Italian cities or to reach seaside and mountain resorts. The offer was limited to 13, 14 and 15 August, and comprised two options: the \"One-Day Trip\", within a radius of 50–100 km, and the \"Three-Day Trip\", within a radius of about 100–200 km."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ferragosto",
        "situacao": "ok",
        "texto": "Ferragosto é um feriado celebrado em 15 de agosto em toda a Itália. Tem origem na Feriae Augusti, festa do imperador Augusto, que fez do dia 1 de agosto um dia de descanso após semanas de muito trabalho no setor agrícola. Tornou-se um costume dos trabalhadores desejar a seus empregadores um \"buon ferragosto\" e receber em troca um bônus monetário. Isso se tornou lei durante a Renascença em todos os\n[…]\nComo a festa foi criada por motivos políticos, a Igreja Católica decidiu transferir a festa para o dia 15 de agosto, que é a Assunção de Maria, permitindo-lhes incluí-la na festa. Esta festa foi aproveitada também por Mussolini para dar às classes populares a possibilidade de visitar cidades culturais ou de ir à praia durante um a três dias, de 14 a 16 de agosto, criando \"comboios de férias\" com bilhetes de baixíssimo custo, para este período de férias.\n[…]\nComida e alimentação não foram incluídas, por isso ainda hoje os italianos associam os almoços para viagem e churrascos a este dia. Por metonímia, é também o período de férias de verão em meados de agosto, que pode ser um fim de semana prolongado ( ponte di ferragosto ) ou a maior parte de agosto.\n[…]\nO nome italiano moderno do feriado vem diretamente do nome latino.\n[…]\nA iniciativa deu oportunidade a classes sociais menos favorecidas de visitar cidades italianas ou de chegar a estâncias litorâneas e de montanha. A oferta estava limitada a 13, 14 e 15 de agosto e compreendia duas opções: a \"Viagem de um dia\", num raio de 50-100 km, e a \"Viagem de três dias\" num raio de cerca de 100-200 km.\n[…]\nA festa católica da Assunção da Bem-Aventurada Virgem Maria também cai em 15 de agosto e é uma grande festa e Dia Santo da Obrigação.\n[…]\nMarin, Jorge (15 de agosto de 2020). «Ferragosto: o feriado que faz a Itália parar». MegaCurioso. Grupo NZN. Consultado em 16 de setembro de 2020",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Tết",
      "descricao": "Ano-novo lunar do Vietnã, a principal festa do calendário vietnamita."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O Tết, ano-novo do Vietnã, costuma cair no mesmo dia do ano-novo de qual país vizinho?",
    "resposta": "China",
    "fonte": [
      "https://en.wikipedia.org/wiki/T%E1%BA%BFt"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/T%E1%BA%BFt",
        "situacao": "ok",
        "texto": "Tết (Vietnamese: [tet̚˧˦], chữ Hán: 節), short for Tết Nguyên Đán (chữ Hán: 節元旦; lit. 'Feast of the first day'), is the most important celebration in Vietnamese culture. Tết celebrates the arrival of spring, which is on the first day of the first Vietnamese lunisolar month, and usually falls between late January and 20 February in the Gregorian calendar.\n[…]\nVietnamese people celebrate Tết annually, which is based on a lunisolar calendar that calculates both the motions of Earth around the Sun and of the Moon around Earth. Tết is generally celebrated on the same day as Chinese New Year (also called Spring Festival), with a one-hour time difference between Vietnam and China resulting in the new moon occurring on different days.\n[…]\nThe dates of the Vietnamese and Chinese Lunar New Year occasionally differ, such as in 1985, when Vietnam celebrated Lunar New Year a month before China. It takes place from the first day of the first month of the Vietnamese lunar calendar (around late January or early February) until at least the third day.\n[…]\nHistorian Trần Văn Giáp asserts that there are many ways to divide time into months and years. From the beginning, each ethnic group had its own way of dividing months and years. According to Trần's research, Tết Nguyên Đán in Vietnam dates back to the first century AD.(While during this period, northern Vietnam was under Han administration, and the imperial Chinese calendar system was in use.）The origin and meaning of Tết Nguyên Đán have been prevalent since then.\n[…]\nThe name Tết is a shortening of Tết Nguyên Đán, literally written as tết (meaning 'festivals'; only used in festival names) and nguyên đán which means the first day of the year. Both terms come from Sino-Vietnamese, respectively, 節 (tiết) and 元旦.\n[…]\nTet Nguyen Dan: The Vietnamese New Year - Queens Botanical Garden\n[…]\nVietnamese calendar rules"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/T%E1%BA%BFt",
        "situacao": "ok",
        "texto": "Tết Nguyên Đán (\"Festival do Primeiro Dia\"), mais conhecido pela forma curta de seu nome, Tết, é o feriado e festival mais importante e popular do Vietnã. Também conhecido como Ano-Novo Vietnamita, marca a chegada da primavera com base no calendário lunar. O nome Tết Nguyên Đán é sino-vietnamita, e deriva dos caracteres Hán nôm 節元旦.\n[…]\nO Tết é comemorado no mesmo dia que o Ano-Novo Chinês, e dura do primeiro dia do primeiro mês do calendário lunar (por volta de 19 de janeiro e 20 de fevereiro, no calendário gregoriano) até pelo menos o terceiro dia. Muitos vietnamitas se preparam para o Tết cozinhando alimentos especiais da data e limpando a casa.\n[…]\nDiversos costumes são obedecidos durante o Tết, como visitar a casa de determinada pessoa no primeiro dia do ano (xông nhà), cultuar os ancestrais, dar dinheiro para sorte a crianças e idosos, ou abrir um comércio.\n[…]\nO Tết também é uma ocasião para peregrinações e reuniões familiares; a data tem um significado importantíssimo cultural e espiritual para o povo vietnamita. Durante o Tết, os vietnamitas visitam seus parentes e templos, procurando esquecer os problemas do ano anterior e esperar por um novo ano melhor. Como o Tết marca o primeiro dia da primavera, também é conhecido como Hội xuân (\"festival da primavera\").\n[…]\n*Como calcular o calendário vietnamita, informatik.uni-leipzig.de (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Befana",
      "descricao": "Velha bondosa do folclore italiano que voa numa vassoura e traz doces às crianças."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Uma lenda italiana conta que a Befana recusou o convite para acompanhar certos viajantes e depois se arrependeu. Quem eram eles?",
    "resposta": "Os Reis Magos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Befana"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Befana",
        "situacao": "ok",
        "texto": "In Italian folklore and folk customs, the Befana (Italian: [beˈfaːna]) is a witch-like old woman who delivers gifts to children throughout Italy on Epiphany Eve (the night of January 5) in a similar way to Santa Claus or the Three Magi. The Befana is a widespread tradition among Italians and thus has many names.\n[…]\nItalian anthropologists Claudia and Luigi Manciocco, in their book Una casa senza porte (\"A House without Doors\") trace the Befana's origins back to Neolithic beliefs and practices. The team of anthropologists also wrote about the Befana as a figure that evolved into a goddess associated with fertility and agriculture. The Befana may be connected to a prehistoric European bear cult that was practiced among hunter-gatherers and which dates as far back as the Upper Paleolithic.\n[…]\nIn other parts of the world where a vibrant Italian community exists, traditions involving Befana may be observed and shared or celebrated with the wider community. In Toronto, Canada for example, a Befana Choir shows up on the winter solstice each December to sing in the Kensington Market Festival of Lights parade. Women, men, and children dressed in Befana costumes and nose sing love songs to serenade the sun to beckon its return.\n[…]\nViene, viene la Befana\n[…]\nThe Italian-language Christmas fantasy comedy film The Legend of the Christmas Witch (Italian: La Befana vien di notte) was released on December 27, 2018. The Italian-Spanish co-production was directed by Michele Soavi and features a 500-year-old Befana who works as a schoolteacher by day.\n[…]\nBiondi, Angelo (1981). \"La Befana nel soranese e nel pitiglianese\". In Roberto Ferretti (ed.). La  tradizione  della  Befana  nella  Maremma  di  Grosseto. Grosseto: Comune di Grosseto, Archivio delle tradizioni popolari della Maremma grossetana. pp. 65–102. (in Italian)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Befana",
        "situacao": "ok",
        "texto": "Befana é uma personagem do folclore italiano, semelhante a Nicolau de Mira ou Pai Natal. A personagem pode ter-se originado em Roma, e depois estender-se como tradição por toda a Itália peninsular e no Ticino e outras partes italófonas da Suíça.\n[…]\nSegundo o folclore popular, a Befana visita todas as crianças da Itália na noite de 5 para 6 de janeiro, para encher de caramelos suas meias (se comportaram-se bem), ou com pedaços de carvão (se foram mal-comportadas). Sendo uma boa dona de casa, diz-se que varrerá o piso antes de sair. A tradição recomenda que as crianças da casa deixem uma garrafinha de vinho e uma porção de um prato típico ou local para a Befana.\n[…]\nSegundo a tradição popular, os Três Reis Magos iam para Belém levar presentes para o Menino Jesus, e, em dúvida quanto ao caminho a seguir, resolveram pedir informações à uma velha. Ela tão pouco sabia o caminho, mas convidou os visitantes a pernoitar em sua casa. Na manhã seguinte, em agradecimento pela acolhida, eles a convidaram a segui-los e visitar o Menino, mas ela lhes disse que estava muito atarefada.\n[…]\nMais tarde, porém, arrependeu-se e seguiu pelo caminho tomado pelos Magos, mas nunca mais conseguiu reencontrá-los.\n[…]\nDesde então, diz a lenda que ela para em todas as casas que encontra pelo caminho, dando doces às crianças na esperança de que um deles seja o Menino Jesus.\n[…]\nHá diversos poemas sobre La Befana, os quais são conhecidos em versões ligeiramente diferentes por toda a Itália.\n[…]\nLa Befana vien di notte\n[…]\nViva, Viva La Befana!\n[…]\nA Befana vem de noite\n[…]\nViva, viva, a Befana!\n[…]\nViene, viene la Befana\n[…]\nViene, viene la Befana\n[…]\nVem, vem, a Befana\n[…]\nVem, vem, a Befana\n[…]\nLa Befana (em italiano)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Dia de Sant Jordi",
      "descricao": "Festa catalã de São Jorge, em vinte e três de abril, em que se trocam rosas e livros."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "No Dia de São Jorge, na Catalunha, troca-se rosas e livros. Vinte e três de abril é também a data da morte de quais dois grandes escritores?",
    "resposta": "Cervantes e Shakespeare",
    "fonte": [
      "https://en.wikipedia.org/wiki/World_Book_Day"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/World_Book_Day",
        "situacao": "ok",
        "texto": "World Book Day, also known as World Book and Copyright Day or International Day of the Book, is an annual event organized by UNESCO (United Nations Educational, Scientific and Cultural Organization) to promote reading, publishing, and copyright. The first World Book Day was celebrated on 23 April in 1995, and continues to be recognized on that day. A related event in the United Kingdom and Ireland\n[…]\nIn Catalonia, the celebration coincided with Saint George's Day (Catalan: Diada de Sant Jordi) in honour to its patron saint and, as a result, the Book Day merged with the original festivity and continues with great popularity in Catalonia, where it is also referred to as The Day of Books and Roses.\n[…]\nIn 1995, UNESCO decided that the World Book and Copyright Day would be celebrated on 23 April, as the date is also the anniversary of the death of William Shakespeare and Inca Garcilaso de la Vega, as well as that of the birth or death of several other prominent authors.\n[…]\n(In a historical coincidence, Shakespeare and Cervantes died on the same date—23 April 1616—but not on the same day, as at the time, Spain used the Gregorian calendar and England used the Julian calendar; Shakespeare actually died 11 days after Cervantes died, on 3 May of the Gregorian calendar, and Cervantes died on 22 April but was buried a day after, on 23 April.)\n[…]\nIn Spain, Book Day began in 1926, being celebrated annually on 7 October, the date that Miguel de Cervantes was believed to have been born. But it was considered more appropriate to celebrate this day in a more pleasant season for walking and browsing the books in the open-air, spring was much better than autumn. So in 1930 King Alfonso XIII approved the change in celebration of Book Day to 23 April, the supposed date of the death of Cervantes."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dia_Internacional_do_Livro",
        "situacao": "ok",
        "texto": "O Dia Internacional do Livro, conhecido na Espanha por \"Día internacional del libro\" é evento comemorativo com origem na Catalunha (Espanha), celebrado inicialmente em 05 de abril de 1926, em comemoração do nascimento do escritor espanhol Miguel de Cervantes, proposto pelo escritor valenciano Vicent Clavel Andrés na Câmara Oficial do Livro de Barcelona.\n[…]\nEm fevereiro de 1923, o governo espanhol, presidido por Miguel Primo de Rivera, aceitou a data e o rei Alfonso XIII assinou o decreto real que instituiu a Festa do Livro Espanhol e o prêmio literário Miguel de Cervantes.\n[…]\nNo ano de 1930, a data comemorativa foi trasladada para 23 de abril, dia do falecimento de Cervantes.\n[…]\nMais tarde, em 1995, a Organização das Nações Unidas para a Educação, a Ciência e a Cultura (UNESCO) instituiu em 23 de abril o \"Dia Mundial do Livro e do Direito de Autor\", a fim de estimular a reflexão sobre a leitura, a indústria de livros e a propriedade intelectual. Além de Cervantes, nesta data ocorreu o falecimento de outros escritores, como o escritor catalão Josep Pla e o dramaturgo inglês William Shakespeare.\n[…]\nNo caso do escritor inglês, tal data não é precisa, pois na época a Inglaterra utilizava o calendário juliano, que havia uma diferença de 10 dias para o calendário gregoriano usado na Espanha. Assim Shakespeare faleceu efetivamente 10 dias depois de Cervantes.\n[…]\nNo Brasil, o dia 29 de outubro também foi escolhido para se homenagear o livro, denominado \"Dia Nacional do Livro\", data de fundação da Biblioteca Nacional, com origem na transferência da Real Biblioteca portuguesa para o Brasil.\n[…]\nDia de São Jorge",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Maslenitsa",
      "descricao": "Festa eslava oriental de despedida do inverno, na semana anterior à Quaresma ortodoxa."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "A Maslenitsa, festa russa de panquecas e fogueiras, acontece na semana anterior à Quaresma. A que festa ela corresponde no calendário católico?",
    "resposta": "Carnaval",
    "fonte": [
      "https://en.wikipedia.org/wiki/Maslenitsa"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Maslenitsa",
        "situacao": "ok",
        "texto": "Maslenitsa (Belarusian: Масленіца; Russian: Мaсленица [ˈmas⁽ʲ⁾lʲɪnʲɪt͡sə]; Rusyn: Пущаня; Ukrainian: Масниця), also known as Butter Lady, Butter Week, Crepe week, or Cheesefare Week, is an Eastern Slavic religious and folk holiday which has retained a number of elements of Slavic mythology in its ritual. It is celebrated during the last week before Great Lent; that is, the eighth week before Easte\n[…]\nThe date of Maslenitsa changes every year, depending on the date of the celebration of Easter. It corresponds to the Western Christian Carnival, except that Orthodox Lent begins on a Monday instead of a Wednesday, and the Orthodox date of Easter can differ greatly from the Western Christian date.\n[…]\nAfter the start of perestroika and fall of the Soviet Union in the 1980s and 1990s, large outdoor celebrations started up again, and much of the older Maslenitsa traditions began to be revived in a modern context. Since 2002, Moscow has staged a yearly Maslenitsa festival next to the Red Square, with that and other celebrations attracting around 300,000 visitors in 2011.\n[…]\nWith increasing secularization, many Russians do not abstain from meat and Maslenitsa celebrations can be accompanied by shashlik vendors. Nevertheless, \"meat still does not play a major role in the festivities\". Many countries with a significant number of Russian immigrants consider Maslenitsa a suitable occasion to celebrate Russian culture, although the celebrations are usually reduced to one day and may not coincide with the date of the religious celebrations.\n[…]\nin 2012, Russian-Canadian composer Airat Ichmouratov composed an Overture Maslenitsa. It was premiered in Chicoutimi, Canada, on 24 February 2013 by L'Orchestre Symphonique du Saguenay–Lac-Saint-Jean under the baton of French-Canadian conductor Jacques Clément.\n[…]\nCarnaval (in the Netherlands)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Maslenitsa",
        "situacao": "ok",
        "texto": "Maslenitsa é um festival religioso e folclórico de vários povos do Leste Europeu, incorporando tradições da mitologia eslávica. É celebrado durante a última semana antes da \"Grande Quaresma\", isto é, a oitava semana antes da Páscoa.\n[…]\nO elemento essencial da celebração Maslenitsa são os blini, panquecas ou crepes feitos com massa lêveda, que popularmente simbolizam o regresso do sol. Redondas e douradas, são feitos a partir de alimentos ricos ainda permitidos durante essa semana pelas tradições: manteiga, ovos e leite (na tradição da Igreja Ortodoxa, o consumo de carne termina uma semana antes do consumo de leite e ovos). Na Ucrânia, também são preparados syrniki e pierogi para a data.\n[…]\nA Maslenitsa também inclui máscaras, lutas de neve, trenós, balançando, balanços e abundância de passeios de trenó. A mascote da festa é geralmente um boneco de palha brilhantemente vestido, chamado de \"Senhora Maslenitsa\", boneco anteriormente conhecido como Kostroma. Como o auge da celebração, na noite de domingo, a Senhora Maslenitsa é despojada da sua elegância, e queimada nas chamas de uma fogueira.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Natal ortodoxo russo",
      "descricao": "Celebração do Natal pela Igreja Ortodoxa Russa, comemorada em sete de janeiro."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Na Rússia, o Natal é comemorado em sete de janeiro. Por que essa diferença em relação ao nosso vinte e cinco de dezembro?",
    "resposta": "A Igreja segue o calendário juliano",
    "fonte": [
      "https://en.wikipedia.org/wiki/Christmas_in_Russia",
      "https://en.wikipedia.org/wiki/Julian_calendar"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Christmas_in_Russia",
        "situacao": "ok",
        "texto": "Christmas in Russia (Russian: Рождество Христово, Rozhdestvo Khristovo), called Е́же по пло́ти Рождество Господа Бога и Спа́са нашего Иисуса Христа (Yezhe po ploti Rozhdestvo Gospoda Boga i Spasa nashego Yisusa Khrista) in the Russian Orthodox Church, is a holiday commemorating the birth of Jesus Christ.\n[…]\nIt is celebrated on 25 December on the Julian calendar, which corresponds to 7 January on the Gregorian calendar (the calendar that is mostly used in Western society) until 2100, when it will move to January 8 in 2101. It is considered a high holiday by the church, one of the 12 Great Feasts, and one of only four of which are preceded by a period of fasting. Traditional Russian Christmas festivities start on Christmas Eve, which is celebrated on 6 January [O.S. 24 December].\n[…]\nChristmas was largely erased from the Russian calendar for much of the 20th century due to the Soviet Union's anti-religious policies, but many of its traditions survived, having been transplanted to New Year's Day. Although Christmas was re-established as a holiday in the 1990s after the collapse of the Soviet Union, it is still eclipsed by New Year's Day, which remains the most important Russian holiday.\n[…]\n(Articles 14, 19, 28 and 29 (part 2) of the Constitution of Russia)\".\n[…]\nIn 2008, a Russian neo-pagan group filed a similar complaint. The group argued that recognition of the Orthodox Christmas as an official holiday is contrary to the Constitution of Russia, according to which \"no religion can be established as state and obligatory\". After having considered the complaint, the court rejected it on the grounds that decisions about public holidays are within the competence of the Russian Parliament and are not a constitutional matter.\n[…]\nReligion in Russia"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Julian_calendar",
        "situacao": "ok",
        "texto": "The Julian calendar is a solar calendar of 365 days in every year with an additional leap day every fourth year (without exception). The Julian calendar is still used as a religious calendar in parts of the Eastern Orthodox Church and in parts of Oriental Orthodoxy as well as in the Berber calendar. For a quick calculation, between 1901 and 2099 the much more common Gregorian date equals the Julia\n[…]\nThe notation \"Old Style\" (O.S.) is sometimes used to indicate a date in the Julian calendar, as opposed to \"New Style\" (N.S.), which either represents the Gregorian date or the Julian date with the start of the year as 1 January. This notation is used to clarify dates from countries that continued to use the Julian calendar after the Gregorian reform, such as Great Britain, which did not adopt the reformed calendar until 1752, or Russia, which did not do so until 1918 (see Soviet calendar).\n[…]\nThe Orthodox Churches of Jerusalem, Russia, Serbia, Montenegro, Poland (from 15 June 2014), North Macedonia, Georgia, and the Greek Old Calendarists and other groups continue to use the Julian calendar, thus they celebrate the Nativity on 25 December Julian (which is 7 January Gregorian until 2100).\n[…]\nThe Orthodox Church of Ukraine announced in late May 2023 that they would use the Gregorian calendar to celebrate Christmas on December 25, 2023, partly in reflection to Russia's invasion of the country in early 2022; the church continues to celebrate Easter on the date according to the Julian tradition.\n[…]\nConversion between Julian and Gregorian calendars\n[…]\nOld New Year – Informal traditional holiday based on the Julian calendar\n[…]\nProleptic Julian calendar – Julian calendar extended backwards\n[…]\nRevised Julian calendar – Calendar used by some Eastern Orthodox churches\n[…]\nCalendar Converter – converts between several calendars, for example Gregorian, Julian, Mayan, Persian, Hebrew\n[…]\nOrthodox Calendar"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Matzá",
      "descricao": "Pão ázimo, sem fermento, comido pelos judeus durante a festa do Pessach."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Durante o Pessach, os judeus comem um pão sem fermento, a matzá. Segundo a tradição, ele lembra que os hebreus saíram do Egito de que jeito?",
    "resposta": "Às pressas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Matzah"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Matzah",
        "situacao": "ok",
        "texto": "Matzah, matzo, mazza, or maẓẓah (Hebrew: מַצָּה, romanized: maṣṣā; IPA: [maˈt͡sa], pl.: matzot or Ashk. matzos) is an unleavened flatbread that is part of Jewish cuisine and forms an integral element of the Passover festival, during which chametz (leavening agent and five grains deemed by halakha to be self-leavening) is forbidden.\n[…]\nShĕmura (\"guarded\") matzah (Hebrew: מַצָּה שְׁמוּרָה matsa shĕmura) is made from grain that has been under special supervision from the time it was harvested to ensure that no fermentation has occurred, and that it is suitable for eating on the first night of Passover. (Shĕmura wheat may be formed into either handmade or machine-made matzah, while non-shĕmura wheat is only used for machine-made matzah.\n[…]\nThe requirement for eating Matzah at the Seder cannot be fulfilled with \"egg matza.\"\n[…]\nThe issue of whether egg matzah is allowed for Passover comes down to whether there is a difference between the various liquids that can be used. Water facilitates a fermentation of grain flour specifically into what is defined as chametz, but the question is whether fruit juice, eggs, honey, oil or milk are also deemed to do so within the strict definitions of Jewish laws regarding chametz.\n[…]\nThe matzah itself is not Hamotzi (meaning that it is Mezonot).\n[…]\nMatzah may be used whole, broken, chopped (\"matzah farfel\"), or finely ground (\"matzah meal\"); to make numerous matzah-based cooked dishes.\n[…]\nSephardim use matzah soaked in water or stock to make pies or lasagne, known as mina, méguena, mayena or Italian: scacchi.\n[…]\nStreit's is the story of the last family-owned matzah bakery in America during their final year at their historic New York City factory.\n[…]\nBlood libel, antisemitic canard claiming that matzah is baked with Christian children's blood\n[…]\nRabbi Eliezer Melamed, Shemura Matza in Peninei Halakha"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Matz%C3%A1",
        "situacao": "ok",
        "texto": "Matzá (em hebraico:  מַצָּה maṣṣā, em iídiche:  מצה matsoh; plural matzot; matzos do dialeto judeu asquenaz) é um pão ázimo sem fermento que faz parte da culinária judaica e forma um elemento integral do festival da Pessach, durante o qual chametz (fermento e cinco grãos que, pela lei judaica, são auto-fermentados) é proibido.\n[…]\nComo relata a Torá, Deus ordenou que os israelitas (modernamente, judeus e samaritanos) comessem apenas pães ázimos durante os sete dias do festival da Pessach. O matzá pode ser macio como pita ou crocante. Apenas a variedade crocante é produzida comercialmente porque o matzá macio tem uma vida útil muito curta. A farinha de matzá é um matzá crocante que foi moído até obter uma consistência semelhante à farinha.\n[…]\nA farinha de matzá é usada para fazer bolinhas de matzá, o principal ingrediente da kneidl. Judeus sefarditas normalmente cozinham com matzá em vez de farinha de matzá.\n[…]\nO matzá que é kosher para a Pessach é limitado na tradição asquenaz ao matzá simples feito de farinha e água. A farinha pode ser de grãos inteiros ou refinados, mas deve ser feita de um dos cinco grãos: trigo, espelta, cevada, centeio ou aveia. Algumas comunidades sefarditas permitem que o matzá seja feito com ovos e/ou suco de frutas para ser usado durante todo o feriado.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Anzac Day",
      "descricao": "Feriado de vinte e cinco de abril na Austrália e na Nova Zelândia em memória dos soldados mortos em guerras."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "O Anzac Day, feriado de vinte e cinco de abril na Austrália e na Nova Zelândia, lembra o desembarque de 1915 em qual península?",
    "resposta": "Galípoli",
    "distratores": [
      "Crimeia",
      "Sinai",
      "Peloponeso"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Anzac_Day"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Anzac_Day",
        "situacao": "ok",
        "texto": "Anzac Day is a national day of remembrance in Australia and New Zealand that broadly commemorates all Australians and New Zealanders \"who served and died in all wars, conflicts, and peacekeeping operations\" and \"the contribution and suffering of all those who have served\".\n[…]\nIn 1915, Australian and New Zealand soldiers formed part of an Allied expedition that set out to capture the Gallipoli Peninsula in the Ottoman Empire to open the way to the Black Sea for the Allied navies. The objective was to capture Constantinople, the capital of the Ottoman Empire, which was a member of the Central Powers during the war. The ANZAC force landed at Gallipoli on 25 April, meeting fierce resistance from the Ottoman Army commanded by Mustafa Kemal (later known as Atatürk).\n[…]\nThe original native pines and remnant seedlings of the original wattles still grow in Wattle Grove, but in 1940 the Adelaide City Council moved the monument and its surrounding pergola a short distance away to Lundie Gardens. Also in South Australia, Eight Hour Day, 13 October 1915, was renamed Anzac Day and a carnival was organised to raise money for the Wounded Soldiers Fund. The name Anzac Day was chosen through a competition, won by Robert Wheeler, a draper of Prospect.\n[…]\nThe timing of the dawn service, traditionally held at 4:28 am, is based on the time that the ANZAC forces started the landing on the Gallipoli peninsula, but also has origins in a combination of military, symbolic and religious traditions. Various stories name different towns as having the first ever service in Australia, including Albany, Western Australia, but no definite proof has been found to corroborate any of them.\n[…]\nAustralian Army's ANZAC Day web page Archived 21 May 2014 at the Wayback Machine\n[…]\nAnzac Day ritual"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dia_ANZAC",
        "situacao": "ok",
        "texto": "O Dia ANZAC (ou em inglês ANZAC Day) é celebrado em 25 de abril na Austrália e na Nova Zelândia para lembrar a batalha de Gallipoli (Turquia), em que dezenas de milhares de soldados do ANZAC (Forças Armadas da Austrália e da Nova Zelândia) e do Reino Unido perderam as suas vidas na Primeira Guerra Mundial. As maiores paradas militares do \"Dia ANZAC\" ocorrem em Canberra, capital da Austrália, e em \n[…]\nO Dia ANZAC também é feriado nas Ilhas Cook, Niue, Ilhas Pitcairn e Tonga.\n[…]\nO \"Dia ANZAC\" é celebrado para relembrar a data em que, no ano de 1915, durante a Primeira Guerra Mundial, forças conjuntas da Grã-Bretanha e dos ANZAC desembarcaram em Gallipoli, na costa da Turquia. Devido a um erro de navegação, os ANZACs desembarcaram a cerca de nove milhas ao norte do ponto intencional. Eles se encontraram no meio de turcos em bons pontos de defesa, os ANZACs viram que o avanço era impossível.\n[…]\nApós oito meses de confrontos, os aliados recuaram, deixando 8709 mortos da Austrália e 2721 da Nova Zelândia, além de 21 255 da Grã-Bretanha, estimados 10 000 da França e 1358 da Índia Britânica.\n[…]\nAtualmente, além das cerimônias realizadas nos dois países, milhares de australianos e neozelandeses viajam até a praia na península de Gallipoli, na Turquia, com o objetivo de lá prestarem suas homenagens aos que defenderam seus países.\n[…]\nA tradição começou em 1990, quando para marcar o septuagésimo-quinto aniversário do desembarque das tropas, oficiais do governo, militares, os últimos veteranos ainda vivos, além de turistas de ambos os países, realizaram uma cerimônia na madrugada (como manda a tradição) em Gallipoli. O último veterano da Batalha de Gallipoli foi o australiano Alec Campbell da Tasmânia, que morreu em maio de 2002.\n[…]\nSite comemorativo australiano (em inglês)\n[…]\nANZAC Day: muitos links (em inglês)\n[…]\nANZAC Day na Nova Zelândia (em inglês)\n[…]\nANZAC Day para os neo-zelandeses (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Azar do número dezessete na Itália",
      "descricao": "Superstição italiana que considera o número dezessete, e não o treze, o número do azar."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Na Itália, o número do azar é o dezessete. Escrito em algarismos romanos, ele forma o anagrama de qual palavra latina, associada à morte?",
    "resposta": "Vixi, que significa eu vivi",
    "fonte": [
      "https://en.wikipedia.org/wiki/17_(number)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/17_(number)",
        "situacao": "ok",
        "texto": "17 (seventeen) is the natural number following 16 and preceding 18. It is a prime number."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dezassete",
        "situacao": "ok",
        "texto": "O número dezassete (português europeu) ou dezessete (português brasileiro) (17) é o número natural que segue o dezasseis e precede o dezoito.\n[…]\nO dezessete é o sétimo número primo, depois do 13 e antes do 19.\n[…]\nO 17 é o terceiro número de Fermat (n=2), depois do 5 e antes do 257.\n[…]\nO dezessete é tradicionalmente considerado um número aziago, pois um anagrama de seu número romano XVII é VIXI, que em latim significa \"eu vivi\", ou seja \"estou morto\". Já na língua galega, o anagrama significa vigia, que é uma das chaves para se evitar o problema referido.\n[…]\nEm alguns países, como na Itália, se diz que a sexta-feira 17 seja um dia aziago, pois Jesus teria morrido justamente em uma sexta-feira.\n[…]\nNa Cabala, o 17 é um número de boa sorte, pois segundo a Gematria, é a soma das letras hebraica têt (9), waw (6) e bêth (2), que formam a palavra טוב, tóv, que significa \"bem\".\n[…]\nO dezassete é o Número atômico do Cloro.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Oktoberfest",
      "descricao": "Festa popular anual de Munique, na Alemanha, famosa pela cerveja e pelos trajes típicos bávaros."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Apesar do nome, a Oktoberfest de Munique começa em qual mês?",
    "resposta": "Setembro",
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
    "indice": 45,
    "ancora": {
      "nome": "Wigilia",
      "descricao": "Ceia tradicional polonesa da véspera de Natal, sem carne e cheia de rituais."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Pela tradição polonesa, a ceia da véspera de Natal só pode começar quando aparece no céu o quê?",
    "resposta": "A primeira estrela",
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
    "indice": 46,
    "ancora": {
      "nome": "Black Friday",
      "descricao": "Dia de grandes liquidações no comércio, nascido nos Estados Unidos e adotado em muitos países."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Nos Estados Unidos, a Black Friday, dia de grandes liquidações que se espalhou pelo mundo, cai sempre no dia seguinte a qual feriado?",
    "resposta": "Dia de Ação de Graças",
    "fonte": [
      "https://en.wikipedia.org/wiki/Black_Friday_(shopping)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Black_Friday_(shopping)",
        "situacao": "ok",
        "texto": "Black Friday is the Friday after Thanksgiving in the United States. It traditionally marks the start of the Christmas shopping season and is the busiest shopping day of the year in the United States. Many stores offer highly promoted sales at heavily discounted prices and often open early, sometimes as early as midnight or even on Thanksgiving. Some stores' sales continue to Monday (\"Cyber Monday\"\n[…]\nThanksgiving weekend offered a strong start, especially as Black Friday sales continued to grow in popularity. For the 2nd consecutive year, Black Friday was the highest day for retail traffic during the holiday season, followed by Thanksgiving and Cyber Monday. The highest year-over-year increases in visits took place on Cyber Monday and Black Friday with a growth of 16% and 13%, respectively.\n[…]\nAs reported in the Forbes \"Entrepreneurs\" column on December 3, 2013: \"Cyber Monday, the online counterpart to Black Friday, has been gaining unprecedented popularity – to the point where Cyber Sales are continuing on throughout the week.\" Peter Greenberg, travel editor for CBS News, further advises: \"If you want a real deal on Black Friday, stay away from the mall. Black Friday and Cyber Monday are all part of Cyber Week ...\"\n[…]\nThe National Retail Federation releases figures on the sales for each Thanksgiving week-end. The Federation's definition of \"Black Friday week-end\" includes Thursday, Friday, Saturday and projected spending for Sunday. The survey estimates number of shoppers, not number of people.\n[…]\nThe length of the shopping season is not the same across all years: the date for Black Friday varies between November 23 and 29, while Christmas Eve is fixed at December 24.\n[…]\nThese are various day-long events similar to Black Friday around the world or any other events on the same day as Black Friday.\n[…]\nMedia related to Black Friday (shopping) at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Black_Friday",
        "situacao": "ok",
        "texto": "Black Friday (em tradução literal do inglês sexta-feira negra) é o dia que inaugura a temporada de compras para o período natalino com significativas promoções em muitas lojas retalhistas (varejistas) e grandes armazéns (atacado). Ocorre sempre um dia depois da festividade de Ação de Graças nos Estados Unidos, ou seja, na sexta-feira que se segue à quarta quinta-feira de novembro.\n[…]\nComo complemento ao evento, existe a Cyber Monday, que é um dia dedicado às compras pela Internet e que é celebrado na segunda-feira depois da Ação de Graças.\n[…]\nHá vestígios de que a denominação surgiu no início da década de 1960 na cidade de Filadélfia, quando a polícia local chamava de Black Friday o dia seguinte ao feriado de Ação de Graças. Havia sempre muitas pessoas e congestionamentos enormes, já que a data abria o período de compras para o Natal. O termo já foi associado com a crise financeira que atingiu os Estados Unidos em 1869.\n[…]\nA primeira Black Friday do Brasil aconteceu no dia 26 de novembro de 2010 e foi totalmente online. A data reuniu mais de 50 lojas do varejo nacional.\n[…]\nAssim como nos Estados Unidos, a Black Friday Brasil acontece anualmente no dia seguinte ao Dia de Ação de Graças, comemorado nos Estados Unidos na quarta quinta-feira de novembro, o que faz a data variar entre 23 e 29 de novembro. Há registros de que o evento também aconteça em lojas físicas, pelo menos no Brasil e Estados Unidos.\n[…]\nEm 2026, a Black Friday ocorre em 27 de novembro, uma sexta-feira, dia seguinte ao Dia de Ação de Graças, que cai em 26 de novembro. A Cyber Monday correspondente é a segunda-feira 30 de novembro. Como o evento não tem organização centralizada no Brasil, não há horário nem data de início comuns a todas as lojas: parte do varejo antecipa as promoções para a semana da data, a partir de segunda-feira, 23 de novembro, ou para todo o mês.\n[…]\nAção de Graças",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Caixões de fantasia",
      "descricao": "Caixões esculpidos em formas figurativas, como animais e objetos, tradição funerária do povo ga."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Caixões esculpidos na forma de peixes, aviões, carros ou garrafas, que lembram a vida do falecido, são tradição de qual país africano?",
    "resposta": "Gana",
    "distratores": [
      "Nigéria",
      "Quênia",
      "Senegal"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Fantasy_coffin"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fantasy_coffin",
        "situacao": "ok",
        "texto": "Fantasy coffins or figurative coffins, also called “FAVs” (fantastic afterlife vehicles) and custom, fantastic, or proverbial coffins (abebuu adekai), are functional coffins made by specialized carpenters in the Greater Accra Region of Ghana. These colorful objects, which developed out of figurative palanquins, are not only coffins but considered works of art.\n[…]\nFantasy coffins are only displayed on the day when they are buried with the deceased. They often symbolize the deceased person's profession. Certain shapes, such as a sword or stool, represent regal or priestly insignia with a magical and religious function. Only people with the appropriate status are allowed to be buried in such coffins. Animals such as lions, cockerels and crabs may be used to represent clan totems.\n[…]\nSimilarly, only the heads of clan families are permitted to be buried in coffins of that particular shape. Many coffin shapes evoke proverbs, which are interpreted in different ways by the Ga. That is why fantasy coffins are sometimes called proverbial coffins (abebuu adekai) or okadi adekai in the Ga language.\n[…]\nRoberta Bonetti: Alternate Histories of the Abebuu Adekai, in: African Arts, Bd. 43, no. 3, 2010, p. 14-33.\n[…]\nVivian Burns: Travel to Heaven: Fantasy Coffins, in: African Arts, vol. 17, no. 2 (1974), p. 24-25\n[…]\nJean-Hubert Martin: Kane Kwei, Samuel Kane Kwei, in: André Magnin (ed.): Contemporary Art of Africa. Thames and Hudson, London 1996, p. 76.\n[…]\nThierry Secretan: Going into darkness: Fantastic coffins from Africa. London 1995.\n[…]\nRegula Tschumi: A Report on Paa Joe and the Proverbial Coffins of Teshie and Nungua, Ghana, in: Africa et Mediterraneo, no. 47–8, 2004, pp. 44–7\n[…]\nRegula Tschumi: A Deathbed of a Living Man. A Coffin for the Centre Pompidou, in: Sâadane Afif (ed.), Anthologie de l’humour noir. Edition Centre Pompidou, Paris 2010, p. 56–61."
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Carnaval de Binche",
      "descricao": "Carnaval tradicional em que mascarados chamados Gilles dançam com chapéus de plumas e atiram laranjas."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "No carnaval de Binche, os Gilles, mascarados com chapéus de plumas de avestruz, atiram laranjas na multidão. Em que país isso acontece?",
    "resposta": "Bélgica",
    "distratores": [
      "França",
      "Suíça",
      "Países Baixos"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Carnival_of_Binche"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Carnival_of_Binche",
        "situacao": "ok",
        "texto": "The Carnival of Binche (French: Carnaval de Binche) is an annual festival held in Binche, Hainaut, Belgium, during the Sunday, Monday, and Tuesday preceding Ash Wednesday.\n[…]\nEvents related to the carnival begin up to seven weeks prior to the primary celebrations. Street performances and public displays traditionally occur on the Sundays approaching Ash Wednesday, consisting of prescribed musical acts, dancing, and marching. Large numbers of Binche's inhabitants spend the Sunday directly prior to Ash Wednesday in costume.\n[…]\nThe centrepiece of the carnival's proceedings are clown-like performers known as Gilles. Appearing, for the most part, on Shrove Tuesday (or Mardi Gras), the Gilles are characterised by their vibrant dress, wax masks and wooden footwear. They number up to 1,000 at any given time, range in age from 3 to 60 years old, and are customarily male. The honour of being a Gille at the carnival is something that is aspired to by local men.\n[…]\nFrom dawn on the morning of the carnival's final day, Gilles appear in the centre of Binche, to dance to the sound of drums and ward off evil spirits with sticks. Later during the day, they don large hats adorned with ostrich feathers, which can cost more than $300 US dollars to rent, and march through the town with baskets of oranges. These oranges are thrown to, and sometimes at, members of the crowd gathered to view the procession.\n[…]\nHarris, Max (2003). Carnival and Other Christian Festivals. University of Texas Press. ISBN 0-292-70191-8.\n[…]\nBrusselsLife: Binche Carnival\n[…]\nOfficial site of the Carnival of Binche Archived 2014-03-14 at the Wayback Machine (in English, French, and Dutch)"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Las Posadas",
      "descricao": "Festa natalina mexicana que encena a procura de Maria e José por abrigo em Belém."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "No México, as Posadas relembram a busca de Maria e José por abrigo em Belém. Durante quantas noites seguidas, antes do Natal, elas acontecem?",
    "resposta": "Nove",
    "fonte": [
      "https://en.wikipedia.org/wiki/Las_Posadas"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Las_Posadas",
        "situacao": "ok",
        "texto": "Las Posadas is a novenario (an extended devotional prayer). It is celebrated chiefly in Hispanic America (principally Mexico, Guatemala, El Salvador and Honduras) and by Hispanic American immigrants and their descendents in the United States. It is typically celebrated each year between December 16 and December 24. Latin American countries have continued to celebrate the holiday, with very few cha\n[…]\nThe origins of Las Posadas are associated with the Augustinian friars of San Agustín de Acolman, near Mexico City. In 1586, Friar Diego de Soria obtained authorization from Pope Sixtus V to hold misas de aguinaldo (“Christmas gift masses”) between December 16 and 24. The observance, which began in churches, later spread to haciendas and private homes, taking on its modern form by the 19th century.\n[…]\nIndividuals may play the various parts of Mary (María) and Joseph (José), with the expectant mother riding a real donkey, attendants such as angels and shepherds joining along the way, or pilgrims who may carry images of the holy personages instead, while children may carry poinsettias. The procession is followed by musicians, with the entire procession singing posadas such as pedir posada.\n[…]\nIn the Philippines, the tradition of Las Posadas is illustrated by the Panunulúyan pageant; sometimes it is performed immediately before the Misa de Gallo (Midnight Mass) and sometimes on each of the nine nights. The main difference, compared to Mexico, is that actors are used for Mary and Joseph instead of statues and sing the requests for accommodation. The lines of the \"innkeepers\" are also often sung, but sometimes these respond without singing.\n[…]\nChristmas in Mexico"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Cerimônia do café etíope",
      "descricao": "Ritual de hospitalidade da Etiópia e da Eritreia em que o café é torrado, moído e servido diante dos convidados."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Na cerimônia do café etíope, os grãos são torrados na frente dos convidados. Quantas rodadas da bebida eles costumam tomar?",
    "resposta": "Três",
    "fonte": [
      "https://en.wikipedia.org/wiki/Coffee_ceremony"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Coffee_ceremony",
        "situacao": "ok",
        "texto": "The Habesha coffee ceremony is a coffee culture practiced in Ethiopia and Eritrea. There is a routine of serving coffee daily, mainly for the purpose of getting together with relatives, neighbors, or other visitors. If coffee is politely declined, then tea will most likely be served.\n[…]\nThe ceremony is typically performed by the woman of the household and is considered an honor. The coffee is brewed by first roasting the green coffee beans over an open flame in a pan. This is followed by the grinding of the beans using a mukecha, a traditional wooden mortar and pestle. The finely ground beans are then brewed in a jebena  – a traditional clay pot, which contains boiling water and will be left on an open flame for a couple of minutes before adding the coffee.\n[…]\nThe aroma of the roasting beans plays a role in the ceremony, as it is often shared with guests as a gesture of hospitality. After grinding, the coffee is put through a sieve several times. The boiling pot (jebena) is usually made of pottery and has a spherical base, a neck and pouring spout, and a handle where the neck connects with the base. The jebena also has a straw lid.\n[…]\nThe coffee ceremony may also include burning of various traditional incense. People add sugar to their coffee, or in the countryside, sometimes salt or traditional butter (see niter kibbeh). The beverage is accompanied by a small snack such as popcorn, peanuts, or himbasha (also called ambasha).\n[…]\n[1], Ethiopian Coffee Ceremony Video run by ethiopiancoffeeceremony.com [2]\n[…]\nEthiopian Coffee Ceremony in photos at Canadian Photographer series on the Ethiopian Coffee Ceremony\n[…]\nWhat is the Coffee Ceremony, a multimedia primer on the Coffee Ceremony run by Bunna Cafe"
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
