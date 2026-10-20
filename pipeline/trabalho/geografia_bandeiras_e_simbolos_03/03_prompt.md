Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Bandeiras e Símbolos** (tema **Geografia**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Bandeira do Brasil",
      "descricao": "Bandeira nacional brasileira, adotada em 1889, com um céu estrelado no círculo azul."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Na bandeira do Brasil, só uma estrela fica acima da faixa com o lema Ordem e Progresso. Que estado ela representa?",
    "resposta": "Pará",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Bandeira_do_Brasil"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Bandeira_do_Brasil",
        "situacao": "ok",
        "texto": "Bandeira do Brasil constitui a bandeira nacional da República Federativa do Brasil. É composta por uma base verde em forma de retângulo, sobreposta por um losango amarelo e um círculo azul, no meio do qual está atravessada uma faixa branca com o lema \"Ordem e Progresso\", em letras maiúsculas verdes. O Brasil adotou oficialmente este projeto para sua bandeira nacional em 19 de novembro de 1889, sub\n[…]\nHasteia-se a bandeira:\n[…]\nO lema \"ordem e progresso\" foi objeto de protestos por se relacionar com o positivismo. Segundo José Feliciado, que o defendeu, o lema simboliza os elementos dominantes na ocasião da proclamação da República, isto é, os positivistas. No entanto, o lema acabou por desagradar a vários brasileiros, levando, até mesmo, ao uso de outras bandeiras que não a oficial, durante os primeiros anos da República.\n[…]\nTais distorções vieram a somar-se a tantas outras que, sob o aspecto do posicionamento astronômico, são flagrantes na bandeira nacional do Brasil.\n[…]\nEm 1933, Eurico de Góes propôs colocar ao centro da bandeira a figura da cruz da Ordem de Cristo sob uma esfera azul, tendo em sua borda 21 estrelas brancas e ao centro seria representada a constelação do Cruzeiro do Sul. Outros projetos conhecidos aparecem no livro “Brazões e bandeiras do Brasil”, publicado em 1933 por Clóvis Ribeiro e o José Wasth Rodrigues, que propuseram uma série de modelos para uma nova bandeira brasileira.\n[…]\nEm 2021, o movimento \"Amor na Bandeira\", encabeçado pelo designer Hans Donner, propôs a inclusão da expressão Amor, Ordem e Progresso na bandeira nacional, em alusão ao lema do positivismo, formulado pelo filósofo francês Augusto Comte: \" O Amor por princípio e a Ordem por base; o Progresso por fim\". Segundo a justificativa do movimento \"o resgate do amor, na visão dos militantes da campanha, corrigiria um erro histórico e apontaria um novo rumo para o Brasil\".\n[…]\nA Estrela de Cabral"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Bandeira do Brasil",
      "descricao": "Bandeira nacional brasileira, adotada em 1889, com um céu estrelado no círculo azul."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "As estrelas da bandeira brasileira reproduzem o céu de qual cidade na manhã de quinze de novembro de mil oitocentos e oitenta e nove?",
    "resposta": "Rio de Janeiro",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Bandeira_do_Brasil"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Bandeira_do_Brasil",
        "situacao": "ok",
        "texto": "Bandeira do Brasil constitui a bandeira nacional da República Federativa do Brasil. É composta por uma base verde em forma de retângulo, sobreposta por um losango amarelo e um círculo azul, no meio do qual está atravessada uma faixa branca com o lema \"Ordem e Progresso\", em letras maiúsculas verdes. O Brasil adotou oficialmente este projeto para sua bandeira nacional em 19 de novembro de 1889, sub\n[…]\nApenas 82 anos mais tarde a legislação brasileira abordaria o fato, com a lei 1971, emendada em 1992, que disciplina que \"As constelações que figuram na Bandeira Nacional correspondem ao aspecto do céu, na cidade do Rio de Janeiro, às 8 horas e 30 minutos do dia 15 de novembro de 1889 (doze horas siderais) e devem ser consideradas como vistas por um observador situado fora da esfera celeste\"; como apontado por críticos, incluídos astrônomos, porém, mesmo um observador fora da Terra, em qualquer ponto da Galáxia, veria as constelações na mesma orientação que o veria da Terra, e nunca invertidas como aparecem na bandeira nacional.\n[…]\nEnquanto a cidade do Rio de Janeiro foi capital nacional, o estado fluminense era representado por uma estrela distinta, Beta Crucis, a mesma até hoje. Quando a capital do país foi transferida para Brasília, em 1960, designou-se nova estrela para o recém-criado estado da Guanabara, a qual, posteriormente, foi aproveitada para designar o Mato Grosso do Sul: Alpha Hydrae.\n[…]\nHasteia-se a bandeira:\n[…]\nPara além do já acima mencionado fato de as estrelas estarem invertidas em relação a como de fato se veriam do Rio de Janeiro (ou de qualquer ponto da Galáxia, mesmo fora da esfera terrestre), até hoje não há um consenso sobre a posição correta das estrelas na data e na hora pretendidas. Em 1889, os idealizadores da bandeira brasileira não julgavam imprescindível — nem mesmo conveniente — ostentar ali um espelho fiel da abóbada estrelada.\n[…]\nA Estrela de Cabral"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Bandeira do Sri Lanka",
      "descricao": "Bandeira nacional do Sri Lanka, com um leão dourado segurando uma espada sobre fundo vermelho-escuro e faixas verde e laranja."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Na bandeira do Sri Lanka, que animal dourado segura uma espada com a pata?",
    "resposta": "Leão",
    "distratores": [
      "Tigre",
      "Elefante",
      "Pavão"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Flag_of_Sri_Lanka"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Flag_of_Sri_Lanka",
        "situacao": "ok",
        "texto": "The national flag of Sri Lanka, also called the Singha Flag or Lion Flag (Sinhala: සිංහ කොඩිය, romanised: singha kodiya, Tamil: சிங்கக் கொடி, romanised: ciṅkak koṭi), consists of a golden lion holding a kastane sword in its right fore-paw in a maroon background with four gold bo leaves, one in each corner. This is bordered by gold, and to its left are two vertical stripes of equal size in teal and\n[…]\nAccording to the Mahavamsa, the historical chronicle of Sri Lanka, the origin of the Sinhalese people; the island’s majority ethnic group is traced to Prince Vijaya. The chronicle records that his father, King Sinhabahu was the son of a powerful man named Sinha (often interpreted as a lion) and Princess Suppadevi of the Vanga kingdom in northern India.\n[…]\nHistorical accounts also suggest that Prince Vijaya is said to have raised a lion flag upon his landing at Tambapanni Ancient Port. Accordingly, the lion symbol has been used since ancient times, and today it remains a central feature of the national flag of Sri Lanka representing the Sinhalese nation. The national flag of Sri Lanka represents the country and its heritage as a rallying device. Most symbols in the flag have been given distinctive meanings.\n[…]\nThe colours of the national flag are specified in the document \"SLS 1: 2020: Specification for the National Flag of the Democratic Socialist Republic of Sri Lanka\".\n[…]\nEmblem of Sri Lanka\n[…]\nSri Lanka at Flags of the World\n[…]\nLion Flag as depicted in the Constitution of Sri Lanka"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bandeira_do_Sri_Lanka",
        "situacao": "ok",
        "texto": "A bandeira do Sri Lanka (Sinhala: ශ්‍රී ලංකාවේ ජාතික කොඩිය Sri Lankavay Jathika Kodiya), também chamada de bandeira Leão, é composta por uma leão amarelo portando uma espada kastane em sua pata dianteira direita em um fundo vermelho-escuro (amarronzado) com quatro folhas amarelas de Ficus religiosa (figueira-dos-pagodes ou Bo-tree) em cada canto do fundo.\n[…]\nAo redor do fundo existe uma moldura amarela e a sua esquerda existem duas listras verticais de igual tamanho em laranja e verde, sendo a listra laranja mais próxima ao leão. O leão representa a bravura dos cidadãos do Sri Lanka. As quatro folhas de figueira-dos-pagodes representam quatro conceitos centrais do Budismo: Mettā, Karuna, Mudita e Upekkha. As listras representam os dois principais grupos minoritários.\n[…]\nA listra laranja representa os tâmeis e a listra verde representa os muçulmanos, sendo o fundo marrom representante da maioria cingalesa. A borda amarela ao redor da bandeira representa a unidade dos cidadãos do Sri Lanka.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Bandeira da Espanha",
      "descricao": "Bandeira nacional da Espanha, com faixas vermelha, amarela larga e vermelha e o brasão real do lado da haste."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No brasão da bandeira espanhola, duas colunas com a faixa Plus Ultra representam as colunas de qual herói mitológico?",
    "resposta": "Hércules",
    "fonte": [
      "https://en.wikipedia.org/wiki/Coat_of_arms_of_Spain",
      "https://en.wikipedia.org/wiki/Flag_of_Spain"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Coat_of_arms_of_Spain",
        "situacao": "ok",
        "texto": "The coat of arms of Spain represents Spain and the Spanish nation, including its national sovereignty and the country's form of government, a constitutional monarchy. It appears on the flag of Spain and it is used by the Government of Spain, the Cortes Generales, the Constitutional Court, the Supreme Court, and other state institutions.\n[…]\nIts design consists of the arms of the medieval kingdoms that would unite to form Spain in the 15th century, the Royal Crown, the arms of the House of Bourbon, the Pillars of Hercules and the Spanish national motto: Plus Ultra. The monarch, the heir to the throne and some institutions like the Senate, the Council of State and the General Council of the Judiciary have their own variants of the coat of arms; thus the state coat of arms is not an arms of dominion.\n[…]\nThe colour chosen to represent Purpure has been criticised for being a pinkish hue, unlike the traditional hues of the Kingdom of León and heraldic custom.\n[…]\nAfter 1530 some versions display quarterly: 1. and 4. grand quarters Spain, which is quarterly A. and D. Castile-León, B. and C. per pale a. per fess Aragon and Navarra, b. per pale Naples (Jerusalem and Hungary); 2. and 3. grand quarters Austria, (as above); enté en point Granada. These arms are borne by an imperial double-headed eagle sable, surmounted by an imperial crown, surrounded with the collar of the Golden Fleece and accompanied by the pillars of Hercules and the motto PLUS ULTRA.\n[…]\nThe abbreviated arms remained the same (they form the escutcheon en surtout of the state arms). They are accompanied by the Pillars of Hercules and the motto PLUS ULTRA and crowned with the royal crown, but do not show the collars. Already at this time the Anjou escutcheon was sometimes represented without its bordure gules."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Flag_of_Spain",
        "situacao": "ok",
        "texto": "The national flag of Spain (Spanish: Bandera de España), as it is defined in the Constitution of 1978, consists of three horizontal lines: red, yellow and red, the yellow stripe being twice the height of each red stripe. Traditionally, the middle stripe color was called by the  archaic term gualda (weld, a natural dye); hence the flag's nickname la Rojigualda (the red–weld). The middle stripe bear\n[…]\nThe new arms were allegedly inspired in the coat of arms the Catholic Monarchs adopted after the taking of Granada (represented using a granada, word that also means 'pomegranate' in Spanish) from the Moors, but replacing the arms of the Kingdom of Sicily for those of Navarre, and adding the Pillars of Hercules on each flank of the coat of arms. In 1938 the columns were placed outside the wings.\n[…]\nDuring this period two more flags were usually displayed together with the national flag: the flag of Spanish Falange (three vertical strips, red, black, red, with the black stripe being wider than the red ones, and the yoke and arrows emblem in red placed on the centre of the black stripe) and the Carlist flag (the Saint Andrew saltire or Cross of Burgundy red on white) as representation of the National Movement.\n[…]\nFrom the death of Franco in 1975 until 1977, the national flag remained that of the 1945 regulation. On 21 January 1977 a new flag was approved, differing from the previous one in that the eagle's wings opened further (the \"pasmada\" eagle), the Pillars of Hercules were again placed within the wings, and the banderole with the motto UNA, GRANDE Y LIBRE (ONE, GREAT and FREE) written in a serif font was moved from the eagle's neck to above the eagle's head.\n[…]\nThe unofficial nickname Red-Weld (Spanish: Rojigualda) is sometimes used to refer to the national flag of Spain. Over time, some unofficial flags have been used to represent Spain in different contexts and events, such as:"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bras%C3%A3o_de_armas_de_Espanha",
        "situacao": "ok",
        "texto": "O brasão de armas da Espanha é uma composição de outros seis brasões:\n[…]\nNa base, de Granada: de fundo de prata, uma romã (granada, em espanhol), com duas folhas a verde; O brasão de Granada nunca foi utilizado pelo reino muçulmano de Granada, habitado em grande parte por andaluzes falantes de um moçárabe (língua hoje extinta). Na realidade foi empregado como um dispositivo pessoal de Henrique IV de Castela antes da conquista de Granada em 1492, sob a forma de dois ramos frutados de romã. Esta figura heráldica tornou-se parte do brasão nacional da Espanha.\n[…]\nÉ acompanhado por duas colunas de prata, base e capitel a ouro, sobre ondas de azul e prata, superadas pela coroa imperial à direita e pela coroa real à esquerda, ambas em ouro e, rodeadas por uma fita vermelha com letras a ouro, à direita \"Plus\" e à esquerda \"Ultra\". As duas colunas representam os Pilares de Hércules, que são os promontórios (Gibraltar e Ceuta) dos dois lados do extremo oeste do estreito de Gibraltar.\n[…]\nLei 33/1981, de 5 de outubro, sobre o Brasão de Armas de Espanha (Gazeta Oficial nº 250 de 19 de outubro)\n[…]\n«Decreto-Real 2964/1981». , de 18 de Dezembro, aprovando o Brasão de Armas de Espanha oficial (Gazeta Oficial nº 221 de 15 de setembro\n[…]\nDecreto-Real 2267/1982, de 3 de Setembro, com especificações técnicas sobre as cores do Brasão de Armas de Espanha (Gazeta Oficial nº 221 de 15 de setembro)\n[…]\nÉ de salientar que o Rei de Espanha detém o seu próprio brasão de armas.\n[…]\nBandeira da Espanha\n[…]\nBrasão de armas do Rei de Espanha\n[…]\nBrasão de armas da Princesa das Astúrias",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Bandeira do Equador",
      "descricao": "Bandeira nacional do Equador, tricolor horizontal amarela, azul e vermelha com o brasão no centro."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Que ave, de asas abertas, aparece no topo do brasão que fica no centro da bandeira do Equador?",
    "resposta": "Condor-dos-andes",
    "fonte": [
      "https://en.wikipedia.org/wiki/Flag_of_Ecuador",
      "https://en.wikipedia.org/wiki/Coat_of_arms_of_Ecuador"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Flag_of_Ecuador",
        "situacao": "ok",
        "texto": "The national flag of Ecuador, which consists of horizontal bands of the Pan-Colombian colors of yellow (double width), blue and red, was first adopted by law in 1835 and later on 26 September 1860. The design of the current flag was finalized in 1900 with the addition of the coat of arms in the center of the flag. Before using the yellow, blue and red tricolor, Ecuador's former flag had three ligh\n[…]\nIn the background of the oval shield is the mountain Chimborazo, while the river originating from its base represents the Guayas. Chimborazo is also the highest mountain in Ecuador and is part of the Andes Range. The steamboat on the river is named Guayas as well. The ship was built in Guayaquil and was the first seaworthy steamship built in both Ecuador and in all of South America. It was first put into service on 9 October 1841.\n[…]\nThe condor on top of the shield stretches his wings to symbolize power, greatness and strength of Ecuador. The condor also represents the idea that it will always be ready to attack any enemy. The shield is flanked by four national flags. The laurel on the left represents the victories of the republic. The palm leaf on the right side is a symbol of the martyrs of the fight for independence and liberty. The Fasces below the shield represents the republican dignity."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Coat_of_arms_of_Ecuador",
        "situacao": "ok",
        "texto": "The coat of arms of Ecuador (Spanish: Escudo de armas del Ecuador) in its current form was established in 1900 based on an older version of 1845.\n[…]\nThe shield shall rest on a bundle of consular beams, a symbol of the republican dignity. It shall be adorned on the outside with national flags and branches of palm and laurel, and surmounted by a condor with wings displayed.\n[…]\nIn the background of the oval shield is the mountain Chimborazo, while the river originating from its base represents the Guayas River. Chimborazo is the highest mountain in Ecuador and is part of the Andes mountain range, as well as the furthest point from the center of the Earth. The steamboat on the river is named Guayas as well. The ship was built in Guayaquil and was the first seaworthy steamship built in both Ecuador and in all of South America.\n[…]\nThe condor on top of the shield stretches his wings to symbolize power, greatness and strength of Ecuador. The condor also represents the idea that it will always be ready to attack any enemy. The shield is flanked by four national flags. The laurel on the left represents the victories of the republic. The palm leaf on the right side is a symbol of the martyrs of the fight for independence and liberty. The Fasces below the shield represents the republican dignity."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bandeira_do_Equador",
        "situacao": "ok",
        "texto": "A bandeira do Equador, que consiste em três faixas horizontais de amarelo (dobro de largura das demais), azul e vermelho, com o brasão nacional ao centro, foi adaptada a 26 de Setembro de 1860. É muito semelhante à bandeira da Colômbia e da Venezuela, que também fizeram parte da Grande Colômbia. É baseada numa proposta de Francisco de Miranda.\n[…]\nAs cores da bandeira do Equador nos valores RGB, Hexadecimal e CMYK\n[…]\nBandeira da Grande Colômbia",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Bandeira de Kiribati",
      "descricao": "Bandeira nacional de Kiribati, com uma ave dourada voando sobre um sol nascente acima de ondas azuis e brancas."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Na bandeira de Kiribati, no Pacífico, que ave marinha voa sobre um sol que nasce do oceano?",
    "resposta": "Fragata",
    "distratores": [
      "Albatroz",
      "Gaivota",
      "Pelicano"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Flag_of_Kiribati"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Flag_of_Kiribati",
        "situacao": "ok",
        "texto": "The flag of Kiribati (buraki ni Kiribati) is red in the upper half with a gold frigatebird (Fregata minor, in Gilbertese: te eitei) flying over a gold rising sun (otintaai), and the lower half is blue with three horizontal wavy white stripes to represent the ocean and the three archipelagoes (Gilbert, Phoenix and Line Islands). The 17 rays of the sun represent the 16 Gilbert Islands and Banaba (fo\n[…]\nThe yellow frigatebird symbolises command over the sea, freedom, and dance patterns. The blue and white wavy bands represent the Pacific Ocean, which surrounds Kiribati, and the sun refers to Kiribati's position astride the Equator.\n[…]\n\"The bird is a frigate bird which represents power, freedom and Kiribati cultural dance patterns\".\n[…]\n\"The rising sun is the tropical sun as Kiribati lies astride the Equator\".\n[…]\n\"The sea is the Pacific Ocean which surrounds Kiribati\".\n[…]\nKiribati's flag is an armorial banner, a flag having a design corresponding exactly to that of the shield in the coat of arms, the former badge of the flag of the British colony of the Gilbert and Ellice Islands. In a letter on 15 August 1892 to the Western Pacific High Commissioner, Arthur Grimble has written (concerning his badge proposal):"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bandeira_de_Kiribati",
        "situacao": "ok",
        "texto": "A bandeira de Quiribáti: a metade de cima é vermelha com uma fragata dourada (Fregata minor, em Gilbertense: te eitei) voando sobre um sol nascente dourado (otintaai), e a metade de baixo é azul com três linhas brancas onduladas horizontais que representam o oceano e os três grupos (Gilbert, Fênix e ilhas da Linha). Os dezessete raios do sol representam as dezesseis Ilhas Gilbert e Banaba (antiga \n[…]\nA fragata é uma representação do poder, liberdade e cultura do povo de Quiribáti, sobretudo, um sinal de soberania. O sol nascente representa o clima tropical do arquipélago e sua localização no globo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Bandeira de Papua-Nova Guiné",
      "descricao": "Bandeira nacional de Papua-Nova Guiné, dividida na diagonal em preto com o Cruzeiro do Sul e vermelho com uma ave amarela."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Que ave, famosa pela plumagem exuberante, aparece desenhada em amarelo na bandeira de Papua-Nova Guiné?",
    "resposta": "Ave-do-paraíso",
    "fonte": [
      "https://en.wikipedia.org/wiki/Flag_of_Papua_New_Guinea"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Flag_of_Papua_New_Guinea",
        "situacao": "ok",
        "texto": "The flag of Papua New Guinea was adopted on 1 July 1971. In the hoist, it depicts the Southern Cross; in the fly, a Raggiana bird-of-paradise is silhouetted.\n[…]\nRed, black and yellow are traditionally used as colours to represent Papua New Guinea, and black, white, and red were the colours used in the flag of the German Empire, which colonised Papua New Guinea in the 19th century. The bird of paradise is a symbol of tribal culture in Papua New Guinea, and its soaring position represents the nation's emergence.\n[…]\nGermany began occupying parts of the country in the late 19th century, and ruled over it until WWI, when Australia occupied their territory (German New Guinea). Meanwhile, Britain had already occupied the southern part of the country, and transferred control of their area to the Commonwealth of Australia, putting both the Territory of Papua and the Territory of New Guinea under separate authorities both under Australia.\n[…]\nThe two territories were unified after WWII to form the Australian Territory of Papua and New Guinea. The various governments over the land had had no official locally significant symbols, although German New Guinea proposed a coat-of-arms that featured a bird of paradise, which was never adopted because of Germany’s involvement in World War I. In 1962 a local flag also incorporated a bird-of-paradise.\n[…]\nThat design was used by Papua New Guinea at sports events, was green with a bird in the top-left (upper hoist). Also proposed was a blue yellow and green tricolour, with the southern cross and a bird in white, though this was rejected by the people.\n[…]\nList of Papua New Guinean flags"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bandeira_da_Papua-Nova_Guin%C3%A9",
        "situacao": "ok",
        "texto": "A bandeira da Papua-Nova Guiné foi adoptada a 1 de Julho de 1971 na sequência de um concurso para uma nova bandeira ganho por uma jovem de 15 anos chamada Susan Huhume. A bandeira é fendida de negro e vermelho (negro à tralha, vermelho ao batente), apresentando na parte negra um Cruzeiro do Sul e na parte vermelha uma ave da espécie Paradisaea raggiana. Vermelho e negro são as cores tradicionais d",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Bandeira da Califórnia",
      "descricao": "Bandeira do estado americano da Califórnia, branca com uma estrela vermelha, um urso e uma faixa vermelha embaixo."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Que animal caminha sobre um trecho de grama na bandeira do estado americano da Califórnia?",
    "resposta": "Urso-pardo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Flag_of_California"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Flag_of_California",
        "situacao": "ok",
        "texto": "The flag of California, known as the Bear Flag, is the official flag of the U.S. state of California. The precursor of the flag was first flown during the 1846 Bear Flag Revolt and was also known as the Bear Flag. A predecessor, called the Lone Star Flag, was used in an 1836 independence movement; the red star element from that flag appears in the Bear Flag of today.\n[…]\nDuring the secession crisis and the early part of the American Civil War in 1861, California was divided between supporters of the union and supporters of southern secession. In the months leading up to the war, some opposed to the government in Los Angeles County and San Bernardino County showed support for secession by flying variants of the Bear Flag instead of the Stars and Stripes.\n[…]\nBetween the years 1888-1900, people in the state started making hybrid flags combing the Stars and Stripes with the California grizzly bear. The flag was first used by the Pacific coast delegation when they went to the 1888 Republican National Convention. It was an American flag with a golden bear in the center. The design was also popular with European marksmen like Philo Jacoby. In 1890, he went on a trip to Germany and need a flag to show pride in the country and state he came from.\n[…]\nPhilo was given an American flag bearing 13 stars in a circle with a golden bear in the center, above the bear was the word \"California.\" In 1900, Ruhstaller took his family on a five-month tour of Europe and carried with him the Sacramento marksmen club flag. It had 45 stars with a brown grizzly bear in the stripes and underneath the bear was the letters \"S. H. R. C.\"\n[…]\nIn 1933, the city of Santa Rosa held a parade celebrating the 83rd anniversary of California being admitted to the union. During the party unique Bear Flag was flown, it had plain red field with a golden bear in the center.\n[…]\nThe Bear Flag Museum"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bandeira_da_Calif%C3%B3rnia",
        "situacao": "ok",
        "texto": "A Bandeira da Califórnia consiste em um campo branco no qual estão inseridas uma estrela vermelha do lado superior esquerdo, um urso-cinzento no centro, em homenagem ao hoje extinto urso da california, a inscricão em inglês \"CALIFORNIA REPUBLIC\", que significa \"República da Califórnia\" e uma faixa vermelha na parte inferior. O urso é símbolo de força.\n[…]\nO desenho atual foi baseado em uma bandeira hasteada em Sonoma em 14 de junho de 1846 quando um grupo de norte-americanos proclamou a independência da República da Califórnia. Em 1911 foi adotada como bandeira estadual. Em 1953, as especificações para o desenho foram padronizadas em uma lei assinada pelo governador Earl Warren.\n[…]\nA bandeira da Califórnia é frequentemente chamada de \"A Bandeira do Urso\" e, de fato, na lei de adoção da bandeira está escrito: \"The Bear Flag is the State Flag of California\", ou seja, \"A bandeira do urso é a bandeira do estado da Califórnia\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Cédula de cem reais",
      "descricao": "Nota de 100 reais, a de maior valor da primeira família do real, emitida pelo Banco Central do Brasil."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Cada cédula do real traz um animal brasileiro no verso. Qual deles aparece na nota de cem reais?",
    "resposta": "Garoupa",
    "distratores": [
      "Onça-pintada",
      "Mico-leão-dourado",
      "Arara-vermelha"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Real_(moeda)",
      "https://en.wikipedia.org/wiki/Brazilian_real"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Real_(moeda)",
        "situacao": "desambiguacao",
        "texto": "Real pode referir-se a:\n\n\n== Economia ==\nReal (plural: \"reais ou réis\") é a denominação de várias moedas:\n\nReal (moeda brasileira) — moeda atual do Brasil\nReal (moeda portuguesa) — moeda de Portugal até 1911\nReal (antiga moeda brasileira) — antiga moeda do Brasil\nReal espanhol — antiga moeda da Espanha\n\n\n== Natureza e ciências ==\nRealidade — estado das coisas como elas existem, em vez de como elas"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Brazilian_real",
        "situacao": "ok",
        "texto": "The Brazilian real (pl. reais;  sign: R$; code: BRL) is the official currency of Brazil. It is subdivided into 100 centavos. The Central Bank of Brazil is the central bank and the issuing authority. The real replaced the cruzeiro real in 1994.\n[…]\nThe current real was introduced in 1994 at 1 real = 2,750 cruzeiros reais.\n[…]\nThe original 1-real coins, produced only in 1994, were demonetized on 23 December 2003, due to frequent counterfeiting. All other coins remain legal tender.\n[…]\nIn 1994, banknotes print \"A\" were issued by Casa da Moeda do Brasil in denominations of 1, 5, 10, 50 and 100 reais, in addition to supplementary issues of banknotes ordered abroad in the values of 5, 10 and 50 reais of the print \"B\" produced abroad by the companies Giesecke+Devrient, Thomas de la Rue and François-Charles Oberthur Fiduciaire respectively.\n[…]\nIn 1997, modified banknotes of 1 real (print \"B\"), 5 and 10 reais (print \"C\") were launched, bearing the national flag as a watermark instead of the effigy of the republic in order to reduce the risk of such banknotes being used for counterfeiting banknotes at higher denominations. In 2000, the 10 reais commemorative banknote (print \"D\") was launched, and this banknote was the first polymer banknote to be issued in the country.\n[…]\nIn 2003, the print \"C\" of the 1 real banknote was put into circulation, which would have the name \"República Federativa do Brasil\" at the top in the place where the name \"Banco Central do Brasil\" was customarily placed, which was placed on the under the obverse of the bill, next to the word real. Such banknote ceased to be issued in 2005.\n[…]\nCasa da Moeda do Brasil\n[…]\nPlano Real\n[…]\nPortuguese real\n[…]\n\"The Invention of the Real\"—This American Life"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Símbolos nacionais do Brasil",
      "descricao": "Os quatro símbolos oficiais da República Federativa do Brasil definidos pela Lei 5.700 de 1971."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Bandeira, hino e armas nacionais são três dos quatro símbolos oficiais do Brasil. Qual é o quarto?",
    "resposta": "Selo Nacional",
    "fonte": [
      "https://www.planalto.gov.br/ccivil_03/leis/l5700.htm",
      "https://pt.wikipedia.org/wiki/S%C3%ADmbolos_nacionais_do_Brasil"
    ],
    "trechos": [
      {
        "url": "https://www.planalto.gov.br/ccivil_03/leis/l5700.htm",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/S%C3%ADmbolos_nacionais_do_Brasil",
        "situacao": "ok",
        "texto": "Símbolos do Brasil são símbolos nacionais que representam oficialmente a nação brasileira, que, conforme a Lei dos Símbolos Nacionais, são quatro símbolos oficiais: a Bandeira, o Brasão de Armas, o Hino e o Selo. Pela lei n.º 5 700, de 1.º de setembro de 1971, são consideradas as cores nacionais o verde e o amarelo, que podem ser usadas sem quaisquer restrições, inclusive associadas a azul e branc\n[…]\nPorém, trabalhos mais aprofundados em heráldica brasileira afirmam que Deodoro não havia encomendado o desenho, e o que verdadeiramente teria acontecido foi que a gráfica Laemert, onde Zauer trabalhava, apresentou o símbolo ao marechal Deodoro, que de pronto aprovou e o oficializou como brasão nacional.\n[…]\nO Selo Nacional foi adotado junto com a bandeira e as armas nacionais e é formado por um círculo representando uma esfera celeste, idêntica à da bandeira nacional, tendo em volta as palavras \"República Federativa do Brasil\". Seu uso é obrigatório para autenticar os atos de governo, os diplomas e certificados expedidos por escolas oficiais ou reconhecidas.\n[…]\nA Lei dos Símbolos Nacionais do Brasil, rege os Símbolos Nacionais Oficiais Pétreos, ou seja, aqueles que estão na Constituição. A cultura nacional conta ainda com os símbolos nacionais institucionais e ou de ocasiões. Que somados neste caso seriam:\n[…]\nBrasão de Armas Nacionais do Brasil\n[…]\nBandeira presidencial do Brasil, é um exemplo de símbolo nacional de reserva institucional\n[…]\nSelo Nacional do Brasil\n[…]\nTope Nacional do Brasil\n[…]\nFlor do ipê-amarelo é a flor símbolo-nacional\n[…]\nSabiá-laranjeira é considerada ave símbolo-nacional\n[…]\nPau-brasil é a árvore símbolo-nacional\n[…]\nFeijoada, prato nacional do Brasil\n[…]\nHerói nacional do Brasil\n[…]\nLei dos Símbolos Nacionais do Brasil\n[…]\nA História dos Símbolos Nacionais – Brasília: Senado Federal, 2005. 210 p.\n[…]\nSímbolos nacionais – Brasília: Câmara dos Deputados, Edições Câmara, 2009. 65 p. (Série cadernos do Museu; n. 9)"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Bandeira do Rio Grande do Sul",
      "descricao": "Bandeira do estado do Rio Grande do Sul, com faixas diagonais verde, vermelha e amarela e o brasão estadual."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Que lema de três palavras, herdado da república farroupilha, aparece no brasão da bandeira gaúcha?",
    "resposta": "Liberdade, Igualdade, Humanidade",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Bandeira_do_Rio_Grande_do_Sul",
      "https://pt.wikipedia.org/wiki/Bras%C3%A3o_do_Rio_Grande_do_Sul"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Bandeira_do_Rio_Grande_do_Sul",
        "situacao": "ok",
        "texto": "A bandeira do estado do Rio Grande do Sul é um dos símbolos oficiais do estado brasileiro do Rio Grande do Sul.\n[…]\nZambeccari teria criado a bandeira em Buenos Aires, entre 1833 e 1835, com uma ordem diferente de cores: quando foi proclamada a República Rio-Grandense, em 1836, o vermelho foi deslocado para o meio.\n[…]\nAlgumas das características da bandeira do Rio Grande do Sul são de evidente inspiração maçônica, como as duas colunas que ladeiam o losango invertido são idênticas às encontradas em todos os Templos maçônicos. O lema da bandeira é Liberdade, Igualdade e Humanidade.\n[…]\nA bandeira rio grandense apresenta a proporção 7:10 (largura:comprimento), as mesmas utilizadas na bandeira nacional. Seu desenho é especificado através do artigo 6 da lei citada, cujo texto é o seguinte:\n[…]\nIII - A elipse referida no inciso II do artigo 4º terá setenta módulos de alto, no sentido da largura da Bandeira e sessenta módulos de largo, no sentido do comprimento da Bandeira;\n[…]\nSabe-se que o lema escrito na bandeira do estado, tanto quanto os símbolos, estão diretamente ligados ao Positivismo, haja vista que a elite gaúcha militar e política à época era, em sua maioria, ligada as orientações da Religião da Humanidade, através do Positivismo de Auguste Comte. Sendo seu grande discípulo o Dr. Júlio de Castilhos, Governador do Estado e autor da sua constituição, a quem coube a colocação do termo Humanidade.\n[…]\nDurante o período do Império do Brasil, a bandeira da então província do Rio Grande do Sul era dividida em quatro partes diagonais, alternadas nas cores azul e branco.\n[…]\nBrasão do Rio Grande do Sul"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bras%C3%A3o_do_Rio_Grande_do_Sul",
        "situacao": "ok",
        "texto": "O brasão do Rio Grande do Sul é o emblema heráldico e um dos símbolos oficiais do estado.\n[…]\nPossui uma elipse vertical em pano branco, onde está inserido o brasão. Circundado por um lenço nas cores do Estado. Sob o brasão, Lê-se o lema \"Liberdade, Igualdade, Humanidade\". Lema esse que tem origem na Maçonaria e na Revolução Francesa. No centro está um barrete frígio, um símbolo republicano desde a Queda da Bastilha.\n[…]\nO brasão rio-grandense é o mesmo da época dos farrapos com algumas pequenas modificações. Por isso possui a inscrição \"República Rio-Grandense\", junto com a data do início da Revolução Farroupilha, 20 de setembro de 1835, data amplamente comemorada no estado.\n[…]\nO Brasão foi adotado pela mesma Lei que instituiu o Hino e a Bandeira do Estado.\n[…]\nBandeira do Rio Grande do Sul"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Nota de cem dólares",
      "descricao": "Cédula de 100 dólares americanos, a de maior valor emitida atualmente pelos Estados Unidos."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Que inventor e diplomata americano, que nunca foi presidente, tem o retrato estampado na nota de cem dólares?",
    "resposta": "Benjamin Franklin",
    "fonte": [
      "https://en.wikipedia.org/wiki/United_States_one-hundred-dollar_bill"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/United_States_one-hundred-dollar_bill",
        "situacao": "ok",
        "texto": "The United States one-hundred-dollar bill (US$100) is a denomination of United States currency. The first United States Note with this value was issued in 1862, and the Federal Reserve Note version was first produced in 1914. Inventor and U.S. Founding Father Benjamin Franklin has been featured on the obverse of the bill since 1914, which now also contains stylized images of the Declaration of Ind\n[…]\nThe bills are also informally referred to as \"Benjamins\", in reference to the use of Benjamin Franklin's portrait by the French painter Joseph Duplessis on the denomination, as \"C-Notes\" or \"Century Notes\", based on the Roman numeral for 100, or as \"blue faces\", based on the blue security features in the current design. The bill is one of two denominations printed today that does not feature a president of the United States, the other being the $10 bill, featuring Alexander Hamilton.\n[…]\n1914: The first $100 Federal Reserve Note was issued with a portrait of Benjamin Franklin on the obverse and allegorical figures representing labor, plenty, America, peace, and commerce on the reverse.\n[…]\nIn addition to design changes introduced in 1996, the obverse features the brown quill that was used to sign the Declaration of Independence; faint phrases from the Declaration of Independence; the Syng inkstand's inkwell; a bell within the inkwell's image that appears and disappears depending on the angle at which the bill is viewed using optically variable ink (OVI) and changes from copper to green; teal background color; a borderless portrait of Benjamin Franklin; a blue \"3D security ribbon\" (trademarked \"Motion\" by Crane Currency) on which images of Liberty Bells shift into numerical designations of '100' as the note is tilted; and to the left of Franklin, small yellow '100's whose zeros form the EURion constellation.\n[…]\n$100 Note – USCurrency.gov"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/C%C3%A9dula_de_cem_d%C3%B3lares_dos_Estados_Unidos",
        "situacao": "ok",
        "texto": "A nota de cem dólares dos Estados Unidos (US$100) é a maior denominação atual do dólar americano. O anverso apresenta um retrato de Benjamin Franklin, o político, cientista e inventor americano, e o verso mostra uma imagem do Independence Hall. É a nota de valor mais elevado em circulação nos Estados Unidos desde 1969, altura em que foram retiradas as notas de 500, 1.000, 5.000 e 100.000 dólares.\n[…]\n1914: A primeira nota de 100 dólares da Reserva Federal foi emitida com um retrato de Benjamin Franklin no anverso e figuras alegóricas representando o trabalho, a abundância, a América, a paz e o comércio no reverso.\n[…]\n1929: Ao abrigo da Lei da Série de 1928, as notas dos Estados Unidos foi alterada para o seu tamanho atual, menores, e começou a apresentar um desenho normalizado. Todas as versões da nota de 100 dólares apresentavam o mesmo retrato de Benjamin Franklin no anverso e o mesmo desenho de rebordo no verso, com um desenho do Independence Hall, o famoso monumento situado em Filadélfia.\n[…]\nAs Notas de 100 dólares dos Estados Unidos foram impressas pela última vez em 1969 e emitidas pela última vez em 1971.\n[…]\nPara além das alterações de design introduzidas em 1996, o anverso apresenta a pena castanha que foi utilizada para assinar a Declaração de Independência; frases tênues da Declaração de Independência; o tinteiro do tinteiro Syng; um sino dentro da imagem do tinteiro que aparece e desaparece dependendo do ângulo em que a nota é vista utilizando tinta oticamente variável (OVI) e muda de cobre para verde; uma cor de fundo azul-petróleo; um retrato sem margens de Benjamin Franklin; uma “fita de segurança 3D” azul (marca registada “Motion” da Crane Currency), na qual as imagens dos sinos da Liberdade se transformam em designações numéricas de “100” quando a nota é inclinada; e, à esquerda de Franklin, pequenos 100s amarelos, cujos zeros formam a constelação EURion.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Hino à Liberdade",
      "descricao": "Hino nacional da Grécia e de Chipre, baseado num poema de Dionysios Solomos de 1823."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Com cento e cinquenta e oito estrofes, qual país tem o hino nacional de letra mais longa do mundo?",
    "resposta": "Grécia",
    "distratores": [
      "Uruguai",
      "França",
      "Itália"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Hymn_to_Liberty"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hymn_to_Liberty",
        "situacao": "ok",
        "texto": "The \"Hymn to Liberty\", also known as the \"Hymn to Freedom\", is a Greek poem written by Dionysios Solomos in 1823 and set to music by Nikolaos Mantzaros in 1828. Consisting of 158 stanzas in total, its two first stanzas officially became the national anthem of Greece in 1864 and Cyprus in 1966.\n[…]\n\"Hymn to Liberty\" recounts the misery of the Greeks under the Ottomans and their hope for freedom. He describes different events of the War, such as the execution of Patriarch Gregory V of Constantinople, the reaction of the Great Powers, extensively the Siege of Tripolitsa and the Christian character of the struggle.\n[…]\nThe following are the first eight verses of the \"Hymn to Liberty,\" from the first edition of 1825.\n[…]\nAn adapted version was used during the short-lived Cretan State as the Cretan Anthem. The \"Hymn to Liberty\" had been the Greek royal anthem between 1864 and 1924, and again between 1935 and 1973; in both cases, it was discontinued as a royal anthem due to the abolition of the monarchy itself.\n[…]\n\"Hymn to Liberty\" has been the national anthem of Cyprus since 1966.\n[…]\n\"Hymn to Liberty\" has been performed at every closing ceremony of the Olympic Games, to pay tribute to Greece as the birthplace of the Olympic Games. Most renditions performed during the closing ceremonies are instrumental. Some of the Olympic games the Greek anthem was sung included Sydney, Athens (as Greece was the host country), and Vancouver.\n[…]\nShort 30 min Version Full version Versions of the Hymn at YouTube\n[…]\nMichał Bzinkowski, Eleuthería ē Thánatos!: The idea of freedom in modern Greek poetry during the war of independence in 19th century. Dionysios Solomos’ “Hymn to Liberty”\n[…]\nThe Hymn with all 158 stanzas (in Greek & English)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Imnos_is_tin_Eleftherian",
        "situacao": "ok",
        "texto": "Imnos is tin Eleftherian (em grego: Ύμνος εις την Ελευθερίαν, \"Hino à Liberdade\") é o hino nacional da Grécia e de Chipre. Foi extraído de um longo poema de 158 estrofes, porém somente as duas primeiras são parte oficial da composição musical. O texto foi escrito por Dionýsios Solomós e musicado por Nikolaos Mantzaros, tendo sido oficialmente adotado em 1865. Trata-se duma ode à liberdade alcançad\n[…]\nO hino é tocado em todas as cerimónias de encerramento de Jogos Olímpicos como tributo à Grécia por ser o seu berço histórico e primeiro país a organizar os Jogos na era moderna.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Bandeira de Ohio",
      "descricao": "Bandeira do estado americano de Ohio, em forma de flâmula com duas pontas."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Em forma de flâmula com duas pontas, qual é a única bandeira estadual americana fora do formato retangular?",
    "resposta": "Ohio",
    "fonte": [
      "https://en.wikipedia.org/wiki/Flag_of_Ohio"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Flag_of_Ohio",
        "situacao": "ok",
        "texto": "The flag of Ohio, also known as the Ohio Burgee, is a red, white, and blue U.S. state flag with a distinctive triangular swallowtail shape. The flag's elements symbolize the state's natural features and order of admission into the Union. A prominent disc at the flag's hoist suggests the letter O, the first letter in Ohio's name.\n[…]\nOhio's flag is the only non-rectangular U.S. state flag. It is a rare example of a non-quadrilateral civil flag. According to vexillologist Whitney Smith, it may be loosely based upon cavalry flags of the Civil War and Spanish–American War. The flag has been officially defined as a \"burgee\" since 2002, even though burgees are typically used as maritime flags. Its shape, lack of text, and mirror symmetry allow it to be flown or hung in various orientations without affecting legibility.\n[…]\nIn 1902, State Representative William S. McKinnon, a member of the Ohio Pan-American Exposition Commission, introduced House Bill 213 designating Eisenmann's design as the official flag. It became law on May 9, making it the 20th U.S. state flag or banner. (Eisenmann had assigned his patent, which had a term of three and a half years, to the State of Ohio on April 24.)\n[…]\nA number of municipalities and counties in Ohio have adopted pennants and swallowtails based on the state burgee. Adams County and the cities of Marysville and Mentor have flags that essentially replace the annulus with a seal and modify the pattern of stars in the triangular union. Additionally, the city of Green uses a burgee for the city flag, altering the colors to green and white stripes, as opposed to the original red and white on the Ohio state flag.\n[…]\nSeal of Ohio\n[…]\nOhio's State Flag (1901) – Ohio History Central\n[…]\nOhio Flag folding instructions in PDF form Archived 2017-04-13 at the Wayback Machine\n[…]\nOhio county flags – Ohio Statehouse"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bandeira_do_Ohio",
        "situacao": "ok",
        "texto": "A bandeira de Ohio foi adotada em 1902 e desenhada por John Eisenmann, para a Exposição Pan-Americana de 1901. O grande triângulo azul representa os vales e colinas de Ohio, e as faixas representam as estradas e as vias aquáticas. As dezessete estrelas simbolizam que Ohio foi o 17º estado admitido pela União. O círculo branco com seu interior vermelho não só representa a primeira letra do nome do \n[…]\nDesenhada por John Eisemann, arquiteto e designer do estado de Ohio para a Comissão da Exposição Panamericana, esta é a única bandeira estadual estadunidense não retangular e uma das duas únicas bandeiras civis oficiais não retangulares, no mesmo nível ou acima, do mundo – a outra é a bandeira do Nepal. Seu desenho lembra as bandeiras de cavalarias da Guerra Civil Americana e da Guerra Hispano-Americana.\n[…]\nA bandeira forma a base do logo da equipe de hóquei no gelo de Columbus, capital de Ohio: Columbus Blue Jackets.\n[…]\nÉ a única bandeira estadual norte-americana que não possui formato quadrangular.\n[…]\n«125º Assembléia Geral de Ohio» (em inglês)\n[…]\n«Bandeira do estado de Ohio» (em inglês)\n[…]\n«Instruções para dobrar a bandeira de Ohio» (PDF) (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Bandeira do Catar",
      "descricao": "Bandeira nacional do Catar, cor de vinho com uma faixa branca serrilhada junto à haste."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Branca e cor de vinho, qual bandeira nacional é a mais comprida em proporção à sua altura?",
    "resposta": "Bandeira do Catar",
    "fonte": [
      "https://en.wikipedia.org/wiki/Flag_of_Qatar"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Flag_of_Qatar",
        "situacao": "ok",
        "texto": "The flag of Qatar (Arabic: عَلَمْ قَطَرْ) is in the ratio of 11:28. It is maroon with a broad white serrated band of nine points at the hoist. It was adopted shortly before the country declared independence from the United Kingdom on 3 September 1971 as a slight color change from an earlier flag adopted from 1949. The triangular edges represent Qatar as the 9th \"reconciled emirate\".\n[…]\nThe flag is similar to the flag of Bahrain, which has fewer points, a 3:5 proportion, and a red colour instead of maroon. Qatar's flag is the only national flag having a width more than twice its height.\n[…]\nSeveral additions were made to the Qatari flag in 1932, with the nine-pointed serrated edge, diamonds, and the word \"Qatar\" being integrated into its design. The maroon colour was standardised in 1936. In the 1960s, Sheikh Ali Al Thani removed the wording and diamonds from the flag. The flag was officially adopted on 9 July 1971 and was virtually identical to the 1960s flag, except the height-to-width proportion.\n[…]\nMohammed bin Thani, who ruled from 1847 to 1876, proposed the creation of a flag with a purple-red colour in order to unify the state, and to highlight its historic role in the production of dye. In 1932, the British Navy suggested an official flag should be designed. According to the Qatari government, the British proposed that the flag be white and red, but Qatar rejected the red colouring and continued using a mixture of purple and red instead.\n[…]\nQatar National Day\n[…]\nEmblem of Qatar\n[…]\nFlag of Qatar\n[…]\nal-adaam (qatar flag) Archived 2020-10-21 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bandeira_do_Catar",
        "situacao": "ok",
        "texto": "A bandeira do Catar é um dos símbolos oficiais do Catar. Foi adotada em 9 de julho de 1971.\n[…]\nSeu desenho consiste em um retângulo de proporção largura-comprimento-largura de 11:28, mas sendo comum o uso das proporções 2:3 ou 3:5. É Bordô com uma faixa vertical branca com formato de serra (nove pontos brancos) no lado da tralha. É similar à bandeira do Barém com proporções e cores diferentes, além de que a bandeira do Catar tem mais recortes. Dizem que a cor era vermelha, mas depois que foi pintada, foi deixada para secar na luz do sol e a cor se tornou púrpura.\n[…]\nA cor púrpura atraiu quem fez a bandeira e ela foi modificada.\n[…]\nOs elementos presentes na bandeira simbolizam:\n[…]\nA cor branca é um símbolo da paz reconhecido internacionalmente.\n[…]\nA cor púrpura representa o derramamento de sangue dos muçulmanos carijitas durante as muitas guerras pelas quais o Catar passou, particularmente na segunda metade do século XIX.\n[…]\nA linha serrada de nove pontos indica que o Catar é o nono membro dos \"Emirados reconciliados\" do Golfo Pérsico na conclusão do o Tratado entre o Catar e a Inglaterra em 1916. Os nove emirados são, incluindo o próprio Catar, os sete que formaram os Emirados Árabes Unidos, além do Barém.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Libra esterlina",
      "descricao": "Moeda oficial do Reino Unido, representada por um L cortado."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Usada há mais de mil e duzentos anos, qual é a moeda mais antiga do mundo ainda em uso contínuo?",
    "resposta": "Libra esterlina",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pound_sterling"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pound_sterling",
        "situacao": "ok",
        "texto": "Sterling (symbol: £; code: GBP) is the currency of the United Kingdom and nine of its dependent territories and formerly of the Kingdom of England. The pound is the base unit of sterling, and the word pound is also used to refer to the British currency generally, often qualified in international contexts as the British pound or pound sterling. Since 1971, each pound has been divided into 100 pence\n[…]\n) placed before the numerals, or an italic l. after them, was used in newspapers, books and letters. The Royal Mint was still using this style of notation as late as 1939. Use of the letter ⟨L⟩ for pound derives from medieval Latin documents: \"L\" was the abbreviation for libra, the Roman pound (weight), which in time became an English unit of weight defined as the tower pound. A \"pound sterling\" was literally a tower pound (weight) of sterling silver.\n[…]\nThe penny was abbreviated to \"d\" –  from denarius, the Roman equivalent of the penny; the shilling to \"s\" –  from solidus (written with a long s, ſ, later evolving into a simple slash, /), another Roman coin; and the pound to \"L\" (subsequently £) –  from Libra, the Roman pound weight.\n[…]\nUnder continuing economic pressure, and despite months of denials that it would do so, on 19 September 1949 the government devalued the pound by 30.5% to US$2.80. The 1949 sterling devaluation prompted several other currencies to be devalued against the dollar.\n[…]\nHowever, sterling was decimalised in various British colonial territories before the United Kingdom (and in several cases in line with William Brown's proposal that the pound be divided into 1,000 parts, called mils). These included Hong Kong from 1863 to 1866; Cyprus from 1955 until 1960 (and continued on the island as the division of the Cypriot pound until 1983); and the Palestine Mandate from 1926 until 1948.\n[…]\nPound Sterling – BBC News (Foreign exchange market news)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Libra_esterlina",
        "situacao": "ok",
        "texto": "A libra esterlina ou simplesmente libra (em inglês pound, plural pounds, informal pound sterling, ou pounds sterling, formal) é a moeda oficial do Reino Unido. Desde 15 de fevereiro de 1971 e da adoção do sistema decimal, ela é dividida em 100 pence (singular: penny). Antes dessa data, uma libra esterlina valia 20 shillings (que valiam por sua vez 12 pence cada um), ou 240 pence.\n[…]\nA palavra libra (pound) era um termo utilizado pelas unidades monetárias de várias regiões da Europa. A palavra deriva do baixo latim libra (século X). Originalmente, esse valor correspondia a uma libra de prata.\n[…]\nA palavra esterlina (sterling) vem do francês antigo esterlin, que originou o termo em inglês antigo stière (forte, duro, indestrutível), nome dos dinheiros escoceses do rei David I da Escócia (1123 a 1153) e do novo dinheiro inglês do rei Henrique II em 1180. Caracterizando-se, a partir dessa data, como sendo moeda cunhada em 8 gramas de ouro, sendo sua conversão real do seu valor correspondente em cédula.\n[…]\nUm aspecto importante da libra é o fato de ser emitida por mais de um banco, uma vez que o padrão é único, ou seja, os bancos da Inglaterra e da Escócia operam em coordenação, embora o comando e controle da política monetária sejam definidos somente pelo Banco da Inglaterra.\n[…]\nA libra esterlina é considerada uma das moedas mais valorizadas do mundo, superando inclusive o euro e o dólar, abaixo apenas de dinar kuwaitiano, dinar bareinita, rial omanense e dinar jordano.\n[…]\n«Notas de libra esterlina da Escócia» (em inglês e alemão)\n[…]\n«Notas de libra esterlina da Irlanda do Norte» (em inglês e alemão)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Bandeira da Dinamarca",
      "descricao": "Bandeira nacional atual da Dinamarca, vermelha com cruz escandinava branca, chamada Dannebrog."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Segundo o Guinness, que país tem a bandeira nacional mais antiga ainda em uso contínuo?",
    "resposta": "Dinamarca",
    "fonte": [
      "https://en.wikipedia.org/wiki/Flag_of_Denmark"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Flag_of_Denmark",
        "situacao": "ok",
        "texto": "The Dannebrog (Danish pronunciation: [ˈtænəˌpʁoˀ], lit. 'Red cloth') is the flag of the Kingdom of Denmark. The flag is red with a white Nordic cross, which means that the cross extends to the edges of the flag and that the vertical part of the cross is shifted to the hoist side.\n[…]\nThe elongated Nordic cross, which represents Christianity, reflects its use as a maritime flag in the 18th century. The flag became popular as a national flag in the early 16th century. Its private use was outlawed in 1834 but again permitted by a regulation of 1854. The flag holds the Guinness world record of being the oldest continuously used national flag, that is since 1625.\n[…]\nAccording to the regulation of 11 June 1748, the color was simply red, which is common known today as \"Dannebrog rød\" (\"Dannebrog red\"). The only red fabric dye then available was made of madder root, which can be processed to produce a brilliant red dye and was used historically for British and Danish and soldiers' jackets. A regulation of 4 May 1927 once again stated that Danish merchant ships had to fly flags according to the regulation of 1748.\n[…]\nThe Splitflag and Orlogsflag have similar shapes but different sizes and shades of red. Legally, they are two different flags. The Splitflag is a Danish flag ending in a swallow-tail, it is Dannebrog red and is used on land. The Orlogsflag is an elongated Splitflag with a deeper red color and is used only at sea.\n[…]\nDanmarks-Samfundet – several rules and customs about the use of Dannebrog\n[…]\nDannebrog, Helga Bruhn, Forlaget Jespersen og Pios, Copenhagen 1949\n[…]\nDannebrog – Vort Flag, Lieutenant Colonel Thaulow, Forlaget Codan, Copenhagen 1943"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bandeira_da_Dinamarca",
        "situacao": "ok",
        "texto": "A bandeira nacional da Dinamarca é mais comumente conhecida como Dannebrog. O nome significa \"Pano honorável\". O Dannebrog é vermelho com uma cruz que se estende até as bordas da bandeira; a parte vertical da cruz é deslocada para a borda do arriamento ou tralha e a parte inferior para o batente, sendo que os lados direito e esquerdo, respectivamente para as bordas superior e inferior do pano.\n[…]\nO design da cruz da bandeira dinamarquesa foi subsequentemente adotado por outros países nórdicos: Suécia, Noruega, Finlândia e Islândia.\n[…]\nA bandeira nacional dinamarquesa é considerada a mais antiga bandeira nacional em uso contínuo. De acordo com a antiga tradição, a bandeira não foi feita por humanos mas caiu dos céus durante a Batalha de Reval (a cidade moderna de Tallinn na Estônia), em 1219. A bandeira da Letônia, embora não represente uma cruz, também traça as origens das cores para a batalha de Reval.\n[…]\nOs historiadores têm uma explicação menos pitoresca para a origem da bandeira: ela provavelmente é derivada das antigas bandeiras das cruzadas da época. O antigo brasão de Lübeck era vermelho com uma cruz branca, e o rei dinamarquês Érico da Pomerânia, conhecido por uma bandeira com uma cruz branca, também era rei de Lübeck.\n[…]\nA cruz no Dannebrog é semelhante a cruz de São Filipe,  o Apóstolo.\n[…]\nA bandeira civil e emblema tem proporções de 28:37. A bandeira de estado e emblema é um retângulo de 28:31 com rabos de andorinha dando a ele um proporção geral de 10:19. A bandeira de guerra e emblemas são os mesmo exceto que o emblema de guerra usa um tom de vermelho mais escuro. A largura da cruz é de um sétimo do arriamento; o arriamento é portanto dividido em 12:4:12 enquanto que o hasteamento é dividido em 12:4:21 (12:4:15 para a parte retangular da bandeira de estado).\n[…]\nBandeira das Ilhas Feroé\n[…]\nBandeira da Gronelândia",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Bandeira da Estônia",
      "descricao": "Bandeira nacional da Estônia, tricolor horizontal azul, preta e branca."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Qual dos três países bálticos tem uma faixa preta na bandeira nacional?",
    "resposta": "Estônia",
    "fonte": [
      "https://en.wikipedia.org/wiki/Flag_of_Estonia",
      "https://en.wikipedia.org/wiki/Flag_of_Latvia",
      "https://en.wikipedia.org/wiki/Flag_of_Lithuania"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Flag_of_Estonia",
        "situacao": "ok",
        "texto": "The national flag of Estonia (Eesti lipp) is a tricolour featuring three equal horizontal bands of blue at the top, black in the middle, and white at the bottom. The flag is called sinimustvalge (lit. 'blue-black-white') in Estonian.\n[…]\nIn the 1820s, in the University of Tartu (Dorpat), three eponymous German-speaking student corporations (corps) were established for each of the three Baltic provinces (Estonia, Livonia and Curonia). Each of them selected their own \"colours\" which, in turn, over time, became flags and informal visual representations of the corresponding province.\n[…]\nThe Act specifies that the \"Estonian flag is used as the ethnic and the national flag\".\n[…]\n3 January: Commemoration Day of Combatants of the Estonian War of Independence\n[…]\nSeveral Nordic cross designs were proposed already in 1919, prior to the official adoption of the Estonian state flag. In 2001, journalist Kaarel Tarand made a similar suggestion again – that the flag design be changed from a tricolour to a Nordic cross with the same three colours. Supporters of this idea have claimed that the cross, instead of a tricolour design, would better symbolise Estonia's links with Nordic countries.\n[…]\nAdvocates for a Nordic flag have stated that Estonians consider themselves a Nordic nation rather than Baltic, based on their cultural and historical ties with Sweden, Denmark, and particularly Finland.\n[…]\nNational symbols of Estonia\n[…]\nCoat of arms of Estonia\n[…]\nFlags of Estonian counties\n[…]\nList of Estonian flags\n[…]\nMedia related to National flag of Estonia at Wikimedia Commons\n[…]\nEstonia at Flags of the World\n[…]\nEstonian Flag: History\n[…]\n\"Feature: First Estonian flag, hidden for decades, turns 140\" ERR News, 4 June 2024"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Flag_of_Latvia",
        "situacao": "ok",
        "texto": "The national flag of Latvia (Latvian: Latvijas karogs) is a triband featuring two wide horizontal stripes of red at the top and bottom, separated by a twice narrower white centre stripe. It was used as the national flag after Latvia became an independent country in 1918. After the Soviet Union invaded and occupied Latvia in 1940, its use was suppressed by the Soviet government."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Flag_of_Lithuania",
        "situacao": "ok",
        "texto": "The national flag of Lithuania (Lithuanian: Lietuvos vėliava) consists of a horizontal tricolour of yellow, green, and red. It was adopted on 25 April 1918 during Lithuania's first period of independence (1918–1940), which ceased with the occupation first by the Soviet Union, and then by Nazi Germany (1941–1944).\n[…]\nThe only exception is when the congress or meeting held in Lithuanian dictates a different language to be used for sorting. The flag of Europe has been hoisted since Lithuania became a member of the European Union. While not mentioned by name in the law, the flag of NATO can be used in Lithuania, since it belongs to that organization as well. It is also common to fly the flags of Estonia and Latvia during certain occasions, mainly the celebration of independence of the three Baltic states."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bandeira_da_Est%C3%B3nia",
        "situacao": "ok",
        "texto": "A bandeira nacional da Estónia (português europeu) ou bandeira nacional da Estônia (português brasileiro) contém três listras horizontais iguais de azul (no topo), preto e branco.\n[…]\nSurgiu pela primeira vez aos olhos do público como a bandeira da Associação de Estudantes da Universidade Estoniana na Universidade de Tartu (em estoniano Tartu Ülikool, fundada em 1632), consagrada no salão do pastoriato de Otepää a 4 de Junho de 1884. Mais tarde ficou associada ao nacionalismo estoniano e foi usada como bandeira nacional quando a Estónia se tornou independente a 24 de Fevereiro de 1918. Foi formalmente adotada a 21 de Novembro de 1918.\n[…]\nDurante a ocupação alemã de 1941 — 1944, a bandeira foi aceite como a bandeira étnica dos estonianos mas não como a bandeira nacional. Quando os alemães se retiraram em Setembro de 1944, a bandeira da Estónia voltou a ser hasteada. A 22 de Setembro, a bandeira vermelha foi-lhe simplesmente adicionada, mas pouco tempo depois a bandeira azul-preta-branca desapareceu.\n[…]\nA bandeira permaneceu escondida até chegar a perestroika no fim dos anos 80 quando, a 24 de Fevereiro de 1989, a bandeira foi de novo hasteada na torre Pikk Hermann em Tallinn. Foi readotada como bandeira nacional a 7 de Agosto de 1990, pouco depois de a Estónia ter readquirido a plena independência.\n[…]\nO azul simboliza o céu, os lagos e o mar da Estónia e simboliza a lealdade às ideias nacionalistas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Bandeira da Líbia de 1977",
      "descricao": "Bandeira nacional da Líbia entre 1977 e 2011, no governo de Muammar Kadafi, inteiramente verde."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "De mil novecentos e setenta e sete a dois mil e onze, qual país teve a única bandeira nacional de uma só cor, inteiramente verde?",
    "resposta": "Líbia",
    "fonte": [
      "https://en.wikipedia.org/wiki/Flag_of_Libya"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Flag_of_Libya",
        "situacao": "ok",
        "texto": "The national flag of Libya (Arabic: علم ليبيا) was originally introduced in 1951, following the creation of the Kingdom of Libya. It was designed by Omar Faiek Shennib and approved by King Idris Al Senussi who comprised the UN delegation representing the three regions of Cyrenaica, Fezzan, and Tripolitania at UN unification discussions.\n[…]\nUnder Muammar Gaddafi's leadership, Libya had a red-white-black flag from 1969 to 1977, and it was replaced by the all-green flag from 1977 to 2011, during which it was the only national flag in the world to have one colour and no design (except for a brief period from 1996–1997, when Afghanistan used an all-white national flag)."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bandeira_da_L%C3%ADbia",
        "situacao": "ok",
        "texto": "A bandeira da Líbia é uma bandeira tricolor composta por três faixas horizontais, sendo vermelha a superior, preta a central e verde a inferior. No centro da faixa preta, de proporção maior que as outras, aparecem uma lua crescente e uma estrela de cinco pontas, ambas de cor branca. A bandeira foi desenhada em 1950 por Omar Faiek Shennib, um amigo do rei Idris I da Líbia, e adotada pela primeira v\n[…]\nEm 1969, com o fim da monarquia da Líbia, a bandeira caiu em desuso. Porém, com a Primavera Árabe em 2011, esta bandeira foi adotada pelo grupo opositor do coronel Muammar al-Gaddafi, e, com a queda de Trípoli na oposição em Agosto desse ano, se tornou a bandeira da Líbia novamente. As três cores das faixas representam as três regiões históricas da Líbia: vermelha por Fezã, preta por Cirenaica, e verde por Tripolitânia. A cor branca da lua e da estrela formam as cores pan-árabes.\n[…]\nAdotada em 1951, foi a primeira bandeira da Líbia, após se tornar independente da Itália. Voltou a ser usada em 2011, depois da Primavera Árabe.\n[…]\nEm 1969, muda o nome oficial da Líbia para Al-Jumhuriya al-Arabiya al-Libiya (República Árabe Líbia), e a bandeira é remodelada, assimilando-se a Revolta Árabe.\n[…]\nEm 1972, a Líbia adere à Federação das Repúblicas Árabes, mudando sua bandeira, tornando-a parecida com a do Egito e da Síria.\n[…]\nUso da bandeira monocromática verde, cor símbolo do Islã. Foi considerada a bandeira mais simples do planeta.\n[…]\nRebeldes voltaram a usar bandeira da Monarquia (1951-1969).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Bandeira do Havaí",
      "descricao": "Bandeira do estado americano do Havaí, com oito listras e a bandeira britânica no canto superior."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Qual estado americano é o único a trazer a bandeira britânica, o Union Jack, na sua própria bandeira?",
    "resposta": "Havaí",
    "fonte": [
      "https://en.wikipedia.org/wiki/Flag_of_Hawaii"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Flag_of_Hawaii",
        "situacao": "ok",
        "texto": "The flag of Hawaii (Hawaiian: Ka Hae Hawaiʻi), also known as the Hawaiian flag, is the official flag of the U.S. state of Hawaii. It consists of a field of eight horizontal stripes, in the sequence of white, red, blue, white, red, blue, white, red, with a British Union Jack depicted as a canton in the upper-left corner. The flag has been in use since 1845.\n[…]\nThe use of the Union Jack is a legacy of the British Royal Navy's historical relations with the Kingdom of Hawaiʻi and, in particular, the pro-British sentiment of its first ruler, King Kamehameha I. The kingdom was never formally part of the British Empire. The flag design was retained after the overthrow of the Hawaiian monarchy in 1893, after U.S. annexation in 1898, and after statehood in 1959.\n[…]\nVancouver believed that the agreement reached meant Hawaiʻi island was being ceded to Great Britain, but historians have argued that the Hawaiians saw the agreement as establishing a protectorate. After the proceedings on Vancouver's vessel, a British flag was presented, taken ashore and raised. The flag was either a British Union Jack, or a Red Ensign as used by the Royal Navy, which features a Union Jack in the canton.\n[…]\nIn 1801, the British Union Jack added a Saint Patrick's Cross when Ireland joined with Great Britain in a political union. Both pre- and post-1801 versions of the Red Ensign served as the unofficial flag of the Kingdom of Hawaiʻi until 1816.\n[…]\nIn 1990, Governor of Hawaii John Waiheʻe proclaimed July 31 to be Lā Hae Hawaiʻi, the Hawaiian Flag Day. It has been celebrated each year since then. It is the same date as Lā Hoʻihoʻi Ea, Sovereignty Restoration Day, a holiday of the Kingdom of Hawaiʻi that is celebrated by proponents of the Hawaiian sovereignty movement.\n[…]\nSeal of Hawaii\n[…]\nConstitutional Provisions for the Display of Ka Hae Hawaii\n[…]\nHawaii at Flags of the World"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bandeira_do_Hava%C3%AD",
        "situacao": "ok",
        "texto": "A Bandeira do Havaí é o estandarte oficial simbolizando o Havaí como um reino, protetorado, república, território e estado dos Estados Unidos da América. A Bandeira do Havaí é a única bandeira dos Estados Unidos que foi utilizada por várias formas de governo.\n[…]\n«Provisões Constitucionais para a disposição da Ka Hae Hawaiʻi» (em inglês)\n[…]\n«Bandeiras do Mundo: Havai» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Cruzeiro real",
      "descricao": "Moeda brasileira que circulou de agosto de 1993 a junho de 1994, antecessora imediata do real."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Das moedas que o Brasil teve no século vinte, qual durou menos, circulando por menos de um ano, entre 1993 e 1994?",
    "resposta": "Cruzeiro real",
    "distratores": [
      "Cruzado",
      "Cruzado novo",
      "Cruzeiro novo"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Cruzeiro_real",
      "https://en.wikipedia.org/wiki/Brazilian_cruzeiro_real"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Cruzeiro_real",
        "situacao": "ok",
        "texto": "O cruzeiro real (CR$) foi o padrão monetário no Brasil entre 1 de agosto de 1993 a 30 de junho de 1994, quando foi substituído pelo Real, a atual moeda oficial brasileira.\n[…]\nAs altas taxas de inflação que marcaram a vigência do terceiro cruzeiro entre os anos de 1990 de 1993 fizeram com que os preços dos produtos de consumo cotidiano fossem expressos em milhares de cruzeiros e os salários fossem contabilizados em milhões de cruzeiros, sendo que isto levou o governo Itamar Franco a editar, em 28 de julho de 1993, a Medida Provisória 336 e convertida posteriormente em 27 de agosto para a Lei 8 697, que criou o cruzeiro real, equivalente a mil cruzeiros.\n[…]\nA cédula de 10 000 cruzeiros reais chegou a ter seu desenho aprovado mas não chegou a entrar em circulação, frente à iminente implantação do Plano Real.\n[…]\nEm substituição às cédulas mais antigas do padrão anterior, foram lançadas inicialmente as moedas de 5 e 10 cruzeiros reais, e mais adiante foram lançadas também as moedas de 50 e 100 cruzeiros reais.\n[…]\nO nome \"cruzeiro real\" não aparece nas moedas; ele foi substituído pelo símbolo CR$. No anverso (ou \"cara\"), as moedas possuem figuras de animais ameaçados de extinção, a exemplo das moedas de 100, 500 e 1000 cruzeiros do padrão anterior.\n[…]\nEm 1994, todas as cédulas e moedas desse padrão foram recolhidas na troca pelas novas cédulas do padrão Real, que entrou em circulação em 1 de julho daquele ano. As cédulas e moedas do cruzeiro real, assim como boa parte dos valores ainda em circulação do cruzeiro, padrão monetário que o precedeu, perderam seu valor legal em 15 de setembro de 1994."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Brazilian_cruzeiro_real",
        "situacao": "ok",
        "texto": "The cruzeiro real (\n[…]\n, plural: cruzeiros reais) was the short-lived currency of Brazil between 1 August 1993 and 1 July 1994. It was subdivided in 100 centavos; however, this subunit was used only for accounting purposes, and coins and banknotes worth 10 to 500 of the preceding cruzeiro remained valid and were used for the purpose of corresponding to centavos of the cruzeiro real, especially when the redenomination was carried out. The currency had the ISO 4217 code BRR.\n[…]\nThe cruzeiro real was replaced with the current Brazilian real as part of the Plano Real.\n[…]\nStandard circulation stainless-steel coins were issued in 1993 and 1994 in denominations of 5, 10, 50 and 100 cruzeiros reais. The reverse of the coins portrayed iconic animals of the Brazilian fauna. Coins worth 10 or more of the previous cruzeiro were retained to correspond to smaller denominations, such as the 1,000-cruzeiro coin for a single cruzeiro real, but became scarce by the end of 1993.\n[…]\nNo commemorative coins were issued for the Cruzeiro Real.\n[…]\nThe macaw and jaguar were represented again in the Real's R$10 and R$50 bills, respectively, after their introduction in 1994, and the maned wolf was later portrayed in the R$200 bill since its introduction in late 2020.\n[…]\nThe 10,000 cruzeiros reais banknote was designed and scheduled to be put into circulation in the first months of 1994, but inflation and the impending release of a new economic plan put its release on hold and only the 50,000 Cruzeiro real banknote was released."
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Dia da Bandeira",
      "descricao": "Data comemorativa brasileira dedicada à bandeira nacional, celebrada em 19 de novembro."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Pela lei brasileira, o que deve ser feito no Dia da Bandeira com as bandeiras nacionais em mau estado?",
    "resposta": "Devem ser incineradas",
    "fonte": [
      "https://www.planalto.gov.br/ccivil_03/leis/l5700.htm"
    ],
    "trechos": [
      {
        "url": "https://www.planalto.gov.br/ccivil_03/leis/l5700.htm",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Lei dos Símbolos Nacionais",
      "descricao": "Lei brasileira número 5.700, de 1971, que regula a forma e o uso dos símbolos nacionais."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Pela lei brasileira, a bandeira nacional pode ficar hasteada durante a noite, desde que cumpra qual condição?",
    "resposta": "Estar iluminada",
    "fonte": [
      "https://www.planalto.gov.br/ccivil_03/leis/l5700.htm"
    ],
    "trechos": [
      {
        "url": "https://www.planalto.gov.br/ccivil_03/leis/l5700.htm",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Bandeira da Irlanda",
      "descricao": "Bandeira nacional da República da Irlanda, tricolor vertical verde, branca e laranja."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Na bandeira da Irlanda, o verde representa a tradição católica. Que grupo religioso o laranja representa?",
    "resposta": "Protestantes",
    "fonte": [
      "https://en.wikipedia.org/wiki/Flag_of_Ireland"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Flag_of_Ireland",
        "situacao": "ok",
        "texto": "The national flag of Ireland (Irish: bratach na hÉireann), frequently referred to in Ireland as \"the tricolour\" (an trídhathach) and elsewhere as the Irish tricolour, is a vertical tricolour of green (at the hoist), white and orange. The proportions of the flag are 1:2 (that is to say, flown horizontally, the flag is half as high as it is wide).\n[…]\nThe green pale of the flag symbolises Roman Catholics and the orange represents the minority Protestants who were supporters of William of Orange. His title came from the Principality of Orange, but his power came from his leadership as Stadtholder of the Netherlands, a Protestant bastion from the 16th century. The white in the centre signifies a lasting peace and hope for union between Protestants and Catholics in Ireland.\n[…]\nThe flag, as a whole, is intended to symbolise the inclusion and hoped-for union of the people of different traditions on the island of Ireland, which is expressed in the Constitution as the entitlement of every person born in Ireland to be part of the independent Irish nation, regardless of ethnic origin, religion or political conviction. (Green was also used as the colour of such Irish bodies as the mainly-Protestant and non-sectarian Friendly Brothers of St. Patrick, established in 1751.)\n[…]\nNeither the colours nor the arrangement of the early tricolours were standardised, with some invention and variation evident. In 1850 a flag of green for the Roman Catholics, orange for the Protestants of the Established Church and blue for the Presbyterians was adopted by the Tenant League. In 1883, a Parnellite tricolour of yellow, white and green, arranged horizontally, was recorded.\n[…]\nSome institutions in Great Britain, such as the BBC, have previously and mistakenly used the tricolour to represent Northern Ireland."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bandeira_da_Irlanda",
        "situacao": "ok",
        "texto": "A Bandeira da Irlanda (em irlandês: An Bhratach Náisiúnta), também conhecida como a tricolor, é uma bandeira tricolor vertical, com as cores verde, branco e laranja. A proporção da bandeira é 1:2 (comprimento duas vezes a largura). O verde representa uma tradição gaélica e os católicos, enquanto o laranja representa os adeptos de Guilherme de Orange e os protestantes. O branco no centro significa \n[…]\nPrimeiramente introduzida por Thomas Francis Meagher em 1848, foi na Revolta da Páscoa de 1916, quando foi levantada no General Post Office, juntamente com uma bandeira verde com as palavras República da Irlanda, em Dublin, que o tricolor chegou a ser considerado como a bandeira nacional.\n[…]\nA bandeira foi adotada em 1919 pela República da Irlanda durante a guerra da independência, e posteriormente pelo Estado Livre Irlandês (1922-1937), mais tarde ser adotada ao abrigo do estatuto constitucional da Constituição de 1937 na Irlanda. O tricolor é considerado por muitos nacionalistas como a bandeira nacional de toda a ilha da Irlanda.\n[…]\nA bandeira da Costa do Marfim tem as mesmas cores que a bandeira irlandesa, mas em ordem invertida.\n[…]\nBandeira da Irlanda do Norte",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Jana Gana Mana",
      "descricao": "Hino nacional da Índia, escrito por Rabindranath Tagore."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Em que língua Rabindranath Tagore escreveu originalmente o poema que virou o hino nacional da Índia?",
    "resposta": "Bengali",
    "distratores": [
      "Hindi",
      "Urdu",
      "Tâmil"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Jana_Gana_Mana"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Jana_Gana_Mana",
        "situacao": "ok",
        "texto": "\"Jana Gana Mana\" is the national anthem of the Republic of India. It was originally composed as \"Bharoto Bhagyo Bidhata\" in Sādhu Bhāṣā, a 19th-century Sankritised register of the Bengali language, written by polymath, activist and country's first Nobel laureate Rabindranath Tagore on 11 December 1911.\n[…]\nThe National Anthem of India is officially titled \"Jana Gana Mana\". The song was originally composed in Bengali by India's first Nobel laureate Rabindranath Tagore on 11 December 1911. The parent song, \"Bharoto Bhagyo Bidhata\", is a  religious hymn originally composed for the monotheistic Brahma Samaj that has five verses of which only the first verse was adopted as the national anthem.\n[…]\nOn the occasion of India attaining freedom, the Indian Constituent Assembly assembled for the first time as a sovereign body at midnight on 14 August 1947; the session closed with a unanimous performance of \"Jana Gana Mana\".\n[…]\n\"The proceedings of the Congress party session started with a prayer in Bengali to praise God (song of benediction). This was followed by a resolution expressing loyalty to King George V. Then another song was sung welcoming King George V.\" (Amrita Bazar Patrika, 28 December 1911)\"The annual session of Congress began by singing a song composed by the great Bengali poet Rabindranath Tagore. Then a resolution expressing loyalty to King George V was passed.\n[…]\nOn 10 November 1937, Tagore wrote a letter to Pulin Bihari Sen about the controversy. That letter in Bengali can be found in Tagore's biography Rabindrajibani, volume II page 339 by Prabhatkumar Mukherjee.\n[…]\n\"Banglar Mati Banglar Jol\" – the state song of West Bengal, also written by Rabindranath Tagore\n[…]\nThe Morning Song of India  – via Wikisource.English translation of the hymn \"Jana Gana Mana\" in Tagore's handwriting"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jana_Gana_Mana",
        "situacao": "ok",
        "texto": "Jana Gana Mana é o hino nacional da Índia, composto e escrito por Rabindranath Tagore, o mesmo autor do hino de Bangladesh, em 1911. A primeira estrofe do poema \"Bharoto Bhagyo Bidhata\" de Tagore, originalmente em bengali, corresponde à letra oficial do hino, que foi adotado oficialmente pela Assembleia Constituinte da Índia em 24 de janeiro de 1950. Uma reprodução oficial do hino dura 52 segundos\n[…]\nFoi cantando pela primeira vez em 27 de dezembro de 1911 na sessão de Calcutá do Congresso Nacional Indiano.\n[…]\nO Hino Nacional da Índia é tocado ou cantado em diversas ocasiões. Por diversas vezes foram emitidas instruções sobre as versões corretas do hino, as ocasiões em que elas devem ser tocadas ou cantadas, e sobre a necessidade de demonstrar respeito ao hino através do decoro apropriado em tais ocasiões. Essas instruções têm sido incluídas no folheto de informações e orientações gerais emitido pelo governo da Índia.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "O Canada",
      "descricao": "Hino nacional do Canadá, composto em 1880 por Calixa Lavallée."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Composto em mil oitocentos e oitenta, o hino nacional canadense teve a letra original escrita em qual idioma?",
    "resposta": "Francês",
    "fonte": [
      "https://en.wikipedia.org/wiki/O_Canada"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/O_Canada",
        "situacao": "ok",
        "texto": "\"O Canada\" (French: \"Ô Canada\") is the national anthem of Canada. The song was originally commissioned by Lieutenant Governor of Quebec Théodore Robitaille for the 1880 Saint-Jean-Baptiste Day ceremony; Calixa Lavallée composed the music, after which French-language words were written by the poet and judge Sir Adolphe-Basile Routhier.\n[…]\n\"O Canada\" is a 28-bar song in 4/4 time, to be played \"maestoso è risoluto\" (\"majestic and resolved\"). The original manuscript has been lost.\n[…]\nThe French lyrics of \"O Canada\" were written by Sir Adolphe-Basile Routhier, to music composed by Calixa Lavallée, as a French Canadian patriotic song for the Saint-Jean-Baptiste Society and first performed on June 24, 1880, at a Saint-Jean-Baptiste Day banquet in Quebec City.\n[…]\nThe tune was thought to have become the de facto national anthem after King George VI remained at attention during its playing at the dedication of the National War Memorial in Ottawa, Ontario, on May 21, 1939; though George was actually following a precedent set by his brother, Edward, the previous king of Canada, when he dedicated the Canadian National Vimy Memorial in France in 1936.\n[…]\nIn the 1950s, the melody of \"O Canada\" was adapted for the school anthem of the Ateneo de Manila University. Titled \"A Song for Mary\" or \"The Ateneo de Manila Graduation Hymn\", the lyrics were written by James B. Reuter, SJ, and the original tune adapted by Col. José Manela Campaña, bandmaster of the defunct Philippine Constabulary Band.\n[…]\n\"Ô Canada\": Scores at the International Music Score Library Project\n[…]\nFree scores by \"O Canada\" in the Choral Public Domain Library (ChoralWiki)\n[…]\nAnthems of Canada, Department of Canadian Heritage\n[…]\nO Canada without lyrics\n[…]\n\"Canadiana – The Bizarre History of 'O Canada'\", August 14, 2017, thisiscanadiana.com\n[…]\nO Canada public domain audiobook at LibriVox"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/O_Canada",
        "situacao": "ok",
        "texto": "O Canada é o hino oficial do Canadá. Não confundir com God Save the King, que é o hino real do país, e que foi o hino oficial do Canadá até 1980, quando foi substituído pelo O Canada.\n[…]\nComposto por Calixa Lavallée em 1880, O Canada foi tocado pela primeira vez na Saint-Jean-Baptiste Society, em Quebec, naquele mesmo ano, como canção patriótica franco-canadense. A versão em inglês só foi escrita dez anos depois.\n[…]\nA música foi aos poucos se tornando conhecida popularmente como um canto patriótico canadense, tanto no Quebec (onde foi originalmente criada em francês), como também nas outras províncias anglófonas do Canadá. A canção se tornou de fato um hino nacional em 1939, quando da visita do rei George VI a Ottawa e foi adotada de maneira oficial por um ato parlamentar datado de 1º de julho de 1980.\n[…]\nAs letras da versão em inglês foram alteradas em 1968 por uma comissão mista do Senado e da Câmara dos Deputados, nada sendo afetada na versão francesa.\n[…]\nEm 2002, quando da visita ao Canadá do Papa João Paulo II, ele cantou os terceiro e quarto versos do hino \"Já que vosso braço pode segurar a espada, Ele pode segurar a cruz\" (em português) para lembrar das origens cristãs do país e do hino.\n[…]\nEm 2018, O Parlamento do Canadá aprovou um projeto de lei para tornar a versão anglofônica mais neutra em termos de gênero. A  mudança foi na segunda linha do hino onde antes era \"em todos os teus filhos comanda\", para \"em todos nós comanda\".\n[…]\nTexto completo dos poemas em francês e inglês\n[…]\nO Canada arquivo MIDI",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Hino Nacional Brasileiro",
      "descricao": "Hino oficial do Brasil, com música de Francisco Manuel da Silva e letra de Joaquim Osório Duque-Estrada"
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "No Hino Nacional, o verso lábaro que ostentas estrelado usa a palavra lábaro para se referir a qual símbolo?",
    "resposta": "A bandeira",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Hino_Nacional_Brasileiro",
      "https://pt.wikipedia.org/wiki/L%C3%A1baro"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Hino_Nacional_Brasileiro",
        "situacao": "ok",
        "texto": "O Hino Nacional Brasileiro é um dos quatro símbolos oficiais da República Federativa do Brasil, conforme estabelece o art. 13, § 1.º, da Constituição do Brasil. Os outros símbolos da República são a Bandeira Nacional, as Armas Nacionais e o Selo Nacional. Tem letra de Joaquim Osório Duque-Estrada (1870–1927) e música de Francisco Manuel da Silva (1795–1865).\n[…]\nDe acordo com o Capítulo V da Lei 5 700 (01/09/1971), a Lei dos Símbolos Nacionais do Brasil, durante a execução do Hino Nacional, todos devem tomar atitude de respeito, de pé e em silêncio. Civis do sexo masculino com a cabeça descoberta e os militares em continência, segundo os regulamentos das respectivas corporações.\n[…]\nLábaro — Sinônimo de bandeira. \"Lábaro\" era um antigo estandarte usado pelos romanos;\n[…]\nEsse trecho seria a letra do início do Hino Nacional Brasileiro, onde, atualmente, é mantido apenas de forma instrumental.\n[…]\nHás de, Brasil,\n[…]\nEm 1908 ou 1909, foi feita a primeira gravação vocal do Hino Nacional, mas surpreendentemente, não por um brasileiro; e sim por um cantor europeu de identidade desconhecida (identificado apenas como A. de Souza, um possível pseudônimo) para a companhia francesa Aérophone.\n[…]\nGrande Fantasia Triunfal sobre o Hino Nacional Brasileiro foi composta por Louis Moreau Gottschalk e sua estreia se deu em concerto em 1869, tendo sido executada por 650 músicos, no Rio de Janeiro. Dedicada à \"Sua Alteza Imperal, a senhora Condessa d'Eu\", a princesa Isabel, a obra se trata de variações, especialmente em piano, da música de Francisco Manuel da Silva. Foi muito executada por Guiomar Novais e por Eudóxia de Barros.\n[…]\nHino à Bandeira\n[…]\nSímbolos do Brasil\n[…]\nLei dos Símbolos Nacionais do Brasil\n[…]\nHino Nacional do BrasilArquivo em mp3.\n[…]\nHino Nacional BrasileiroArquivo *.wav.\n[…]\nLei nº 5 700, de 1º de setembro de 1971Lei que trata dos Símbolos Nacionais, entre eles o Hino Nacional."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/L%C3%A1baro",
        "situacao": "ok",
        "texto": "Lábaro (em latim: labarum, em grego clássico: λάβαρον lábaron) era um vexilo ou estandarte militar romano, em especial o que Constantino fez foi colocar o monograma do nome de Cristo em grego Chi Rho (em grego:  ΧΡΙΣΤΟΣ, ou Χριστός) — Chi (χ) e Rho (ρ), após sua vitória sobre Maxêncio em Ponte Mílvia, no lábaro romano (ficando este conhecido como o lábaro de Constantino).\n[…]\nAlém da sua proveniência do latim labarum, a etimologia da palavra não é clara. Alguns a derivam do latim /labāre/ 'a balançar, oscilar' (no sentido de \"oscilar\" uma bandeira ao vento) ou laureum [vexillum] (\"estandarte de glória\"). De acordo com a Real Academia Espanhola, o relacionado lábaro cántabro também é derivado do latim labărum mas não oferece mais derivação a partir do latim, assim como o Dicionário de Inglês Oxford.\n[…]\nTambém se postulou uma origem de empréstimo para o latim de uma língua celta ou  Basca. Há um símbolo tradicional basco chamado lauburu; embora o nome só é atestado a partir do século XIX em diante o motivo ocorre em gravuras datadas já no século II."
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Colón costarriquenho",
      "descricao": "Moeda oficial da Costa Rica."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O colón, moeda da Costa Rica, tem esse nome em homenagem a qual navegador?",
    "resposta": "Cristóvão Colombo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Costa_Rican_col%C3%B3n"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Costa_Rican_col%C3%B3n",
        "situacao": "ok",
        "texto": "The colón (plural: colones; sign: ₡; code: CRC) is the currency of Costa Rica. It was named after Christopher Columbus, known as Cristóbal Colón in Spanish. A colón is divided into one hundred céntimos.\n[…]\nThe colón was introduced in 1896, replacing the peso at par. The colón is divided into 100 céntimos, although, between 1917 and 1919, coins were issued using the name centavo for the 1/100 subunit of the colón. Colones were issued by a variety of banks in the first half of the twentieth century, but since 1951 have been produced solely by the Central Bank of Costa Rica.\n[…]\nIn 1935, the International Bank of Costa Rica issued cupro-nickel coins in denominations of 25 and 50 centimos and 1 colón. These bore the initials B.I.C.R.\n[…]\nFour private banks, the Banco Anglo–Costarricense, the Banco Comercial de Costa Rica, the Banco de Costa Rica and the Banco Mercantil de Costa Rica, issued notes between 1864 and 1917.\n[…]\nIn 1937, the Banco Nacional de Costa Rica took over paper money issuing and issued notes for 1, 2, 5, 10, 20, 50 and 100 colones until 1949. Many of the early notes were provisional issues overprinted on notes of the Banco Internacional, including the 1 colón notes which were briefly issued.\n[…]\nSince October 17, 2006, the colón is no longer bound to controlled devaluations (known in Costa Rica as minidevaluaciones) by the Central Bank of Costa Rica. With the new system, sistema cambiario de bandas, the exchange rates posted by the Central Bank are a \"reference\" and each authorized financial institution can determine their value independently in hopes that the free market will provide a mechanism to keep them reasonable.\n[…]\nCoins of Costa Rica Archived 2015-05-25 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Col%C3%B3n_costa-riquenho",
        "situacao": "ok",
        "texto": "O colón ou, nas suas formas em português, colombo, colom ou colone costa-riquenho, costarriquenho, costa-riquense, costarriquense, costa-ricense ou costarricense (plurais respetivos em português: colombos, colons ou colones) é a moeda da República da Costa Rica. O seu código ISO é CRC. Subdivide-se em cem cêntimos.\n[…]\n«CambioDelDolar.com - taxa de câmbio do colón costa-riquense em dólares americanos para cada instituição financeira autorizada (que pode variar muito) e notícia sobre a economia da Costa Rica». (em espanhol e em inglês)\n[…]\n«Notas atuais e históricas da Costa Rica» (em alemão e inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Quetzal (moeda)",
      "descricao": "Moeda oficial da Guatemala, batizada com o nome da ave nacional do país."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A moeda da Guatemala tem o nome de uma ave de longas penas verdes, que também aparece na bandeira do país. Que ave é essa?",
    "resposta": "Quetzal",
    "fonte": [
      "https://en.wikipedia.org/wiki/Guatemalan_quetzal",
      "https://en.wikipedia.org/wiki/Flag_of_Guatemala"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Guatemalan_quetzal",
        "situacao": "ok",
        "texto": "The quetzal (locally [keˈtsal]; code: GTQ) is the currency of Guatemala, named after the national bird of Guatemala, the resplendent quetzal. In ancient Mayan culture, the quetzal bird's tail feathers were used as currency. It is divided into 100 centavos, or len (plural lenes) in Guatemalan slang. The plural is quetzales.\n[…]\nThe quetzal was introduced in 1925 during the term of President José María Orellana, whose image appears on the obverse of the one-quetzal bill. It replaced the Guatemalan peso at the rate of 60 pesos = 1 quetzal. Until 1987, the quetzal was pegged to and domestically equal to the United States dollar. The currency was named after the country's famous bird, the Quetzal, which is also on the flag of Guatemala.\n[…]\n1 quetzal: a stylized dove, the word \"Paz (Peace)\", and the date “29 de Diciembre de 1996 (29 December 1996)”\n[…]\nThe first banknotes were issued by the Central Bank of Guatemala in denominations of 1, 2, 5, 10, 20 and 100 quetzales, with 1⁄2 quetzal notes added in 1933. In 1946, the Bank of Guatemala took over the issuance of paper money, with the first issues being overprints on notes of the Central Bank. Except for the introduction of 50 quetzal notes in 1967, the denominations of banknotes remained unchanged until 1⁄2 and 1 quetzal coins replaced notes at the end of the 1990s.\n[…]\nThe Bank of Guatemala has introduced a polymer banknote of 1 quetzal on August 20, 2007, followed by a 5 quetzal polymer banknote on November 14, 2011. Both the 1 and 5 quetzal notes are once again on a paper substrate as of 2024.\n[…]\nThe fifty-cent quetzal bill is out of circulation, but it still has value.\n[…]\nEconomy of Guatemala\n[…]\nBanco de Guatemala (in Spanish)\n[…]\nBanco de Guatemala currency in circulation Archived 2015-10-01 at the Wayback Machine\n[…]\nThe banknotes of Guatemala (in English, German, and French)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Flag_of_Guatemala",
        "situacao": "ok",
        "texto": "The flag of Guatemala, often referred to as the National Pavilion (Pabellón nacional) or the Blue-and-White (Azul y Blanco), features two colors: sky blue and white. According to decree, the two sky blue stripes represents strength, justice, truth and loyalty. The white color signifies purity, integrity, firmness and light. The blue and white colors, like those of several other countries in the re\n[…]\nIn the center of the flag is the Guatemalan coat of arms. It includes the resplendent quetzal, the national bird of Guatemala that symbolizes liberty; a parchment scroll bearing the date of Central America's independence from Spain, 15 September 1821; crossed  Remington Rolling Block  rifles, indicating Guatemala's willingness to defend itself by force if need be; a bay laurel crown, the symbol for victory; and crossed swords, representing honor.\n[…]\nThe resplendent quetzal previously appeared in the 1830s in the flag of Los Altos, the sixth state in the Federal Republic.\n[…]\nIn 2008 a flag called the Bandera de Los Pueblos (Flag of indigenous peoples) was adopted by law and is shown together with the national flag of Guatemala in all events featuring the President of Guatemala since then. The flag is divided in four parts, red, yellow, white and black, each colour representing Xinca people, Garifuna people, Maya people, and Ladino people, respectively.\n[…]\nThese colours are also part of the Qʼanil, a Maya symbol in which each color represents a point of the compass, an element of nature and a part of the human being. Qʼanil means \"seed\" in K'iche', and is also one of the 20 days of the Tzolk'in Maya calendar. Aimed at promoting \"interculturality\" in Guatemala, the Bandera de los Pueblos was received with disinterest by the leaders of the peoples, who do not seem to have been consulted.\n[…]\nThe Guatemalan flag has changed throughout history, arriving to its current design in 1997."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Quetzal_%28moeda%29",
        "situacao": "ok",
        "texto": "O quetzal (plural em português: quetzais; código ISO 4217: GTQ) é a moeda nacional da Guatemala. Recebeu o nome da ave da Guatemala, o quetzal. Divide-se em 100 centavos. O plural é quetzales. Na antiga Civilização Maia, as penas da cauda do quetzal eram usadas como moeda. Ela se subdivide em 100 centavos, que na gíria local são chamados de lenes.\n[…]\nEsta moeda foi introduzida em 1925, durante o mandato do presidente José María Orellana, cuja imagem aparece no anverso da nota de 1 quetzal. Substituiu o antigo peso guatemalteco. Até 1987, o quetzal era indexado ao de valor interno igual ao dólar americano e antes de ser indexado ao dólar era indexado ao franco francês, assim como utilizava ao padrão ouro.\n[…]\n1 quetzal\n[…]\nAs primeiras cédulas foram emitidas pelo Banco Central da Guatemala nas denominações de 1, 2, 5, 10, 20 e 100 quetzales, com a inclusão da nota de ½ quetzal em 1933. Em 1946, o Banco da Guatemala assumiu a emissão de papel-moeda, remarcando as antigas cédulas emitidas pelo Banco Central da Guatemala.\n[…]\nO Banco da Guatemala introduziu a nota de 1 quetzal em polímero, impressa na Canadian Banknote Company em 20 de agosto de 2007.\n[…]\nA adoção das cédulas de 500 e 1 000 quetzales estão em estudo no congresso nacional. Sua aparência pode ser presumida no site :\n[…]\nA cédula de 500 quetzales terá como tema principal uma alegoria maia do mito de Popol Vuh e literatura guatemalteca, enquanto Miguel Ángel Asturias aparecerá na outra face. A cor predominante deverá ser cinza.\n[…]\nA cédula de 1 000 quetzales terá como tema no reverso a alegoria representando as raízes guatemaltecas. O anverso mostrará imagens de quatro povos pertencentes às \"raças guatemaltecas\" (Povo Ladino, Civilização Maia, Garifuna e povo Xinca). A cor predominante deverá ser Ocre.\n[…]\nConvert Guatemalan quetzal to British Pounds - Em Inglês\n[…]\nBanco de Guatemala - Em Espanhol",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Bandeira da Inglaterra",
      "descricao": "Bandeira da Inglaterra, branca com uma cruz vermelha."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A bandeira da Inglaterra, uma cruz vermelha sobre fundo branco, leva o nome de qual santo?",
    "resposta": "São Jorge",
    "fonte": [
      "https://en.wikipedia.org/wiki/Flag_of_England"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Flag_of_England",
        "situacao": "ok",
        "texto": "The national flag of England, a constituent country of the United Kingdom, is derived from Saint George's Cross (heraldic blazon: Argent, a cross gules). The association of the red cross as an emblem of England can be traced back to the Late Middle Ages when it was gradually, increasingly, used alongside the Royal Banner.\n[…]\nFurther use of this cross as a maritime flag alongside royal banners, is found in 1545.\n[…]\nCry 'God for Harry, England, and Saint George!\"\n[…]\nThe flag of the City of London is based on the English flag, having a centred St George's Cross on a white background, with a red sword in the upper hoist canton (the top left quarter). The sword is believed to represent the sword that was used to behead Saint Paul, who is the patron saint of the city.\n[…]\nThe flag used by the British Royal Navy (the White Ensign) is also based on the flag of England, consisting of St George's Cross with a Union Flag in the canton. In addition to the United Kingdom, several countries in the Commonwealth of Nations also have variants of the White Ensign with their own national flags in the canton, with St George's Cross sometimes being replaced by a naval badge.\n[…]\nChurches belonging to the Church of England which have a pole may fly St George's Cross. A desirable variant (per an order from the Earl Marshal in 1938) is for the church to fly the flag with the arms of the diocese in the left-hand upper corner.\n[…]\nDue to the spread of the British Empire, the flag of England is currently, and was formerly used on various flags and coats of arms of different countries, states and provinces throughout the territories of the British Empire. St George's Cross is also used as the city flag of some northern Italian cities, such as Bologna, and other countries such as Georgia.\n[…]\nSt George's Day in England"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bandeira_da_Inglaterra",
        "situacao": "ok",
        "texto": "A bandeira da Inglaterra é derivada da Cruz de São Jorge (brasão heráldico: Argent, a cross gules). A associação da cruz vermelha como emblema da Inglaterra pode ser rastreada até o final da Idade Média, quando foi gradualmente, cada vez mais, usada ao lado da bandeira real. Tornou-se a única bandeira de santo permitida a ser hasteada em público como parte da Reforma Inglesa e, ao mesmo tempo, tor\n[…]\nNos Atos de União de 1707, que uniam o Reino da Escócia e o Reino da Inglaterra para se tornar o Reino da Grã-Bretanha, foi declarado que \"as Cruzes de São Jorge e Santo André sejam unidas, da maneira que Sua Majestade achar adequado, e usadas em todas as bandeiras, banners, estandartes e insígnias, tanto no mar quanto na Terra.\"\n[…]\nA partir de 1801, para simbolizar a união do Reino da Grã-Bretanha com o Reino da Irlanda, um novo desenho que incluía a Cruz de São Patrício foi adotado para a bandeira do Reino Unido da Grã-Bretanha e Irlanda. A bandeira do Reino Unido, tendo permanecido inalterada após a partição da Irlanda em 1921 e a criação do Estado Livre Irlandês e da Irlanda do Norte, continua a ser usada como bandeira do Reino Unido da Grã-Bretanha e Irlanda do Norte\n[…]\nA bandeira da cidade de Londres é baseada na bandeira inglesa, tendo uma cruz de São Jorge centrada em um fundo branco, com uma espada vermelha no cantão da talha superior (o quarto superior esquerdo). Acredita-se que a espada represente a espada que decapitou São Paulo, que é o santo padroeiro da cidade.\n[…]\nA bandeira usada pela Marinha Real Britânica (o White Ensign) também é baseada na bandeira da Inglaterra, consistindo na Cruz de São Jorge e uma bandeira da União no cantão. Além do Reino Unido, vários países da Comunidade das Nações também têm variantes da Bandeira Branca com suas próprias bandeiras nacionais no cantão, com a Cruz de São Jorge às vezes sendo substituída por um distintivo naval.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Rupia indiana",
      "descricao": "Moeda oficial da Índia."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome rupia, moeda da Índia, vem de uma palavra sânscrita ligada a qual metal?",
    "resposta": "Prata",
    "distratores": [
      "Ouro",
      "Cobre",
      "Bronze"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Indian_rupee"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Indian_rupee",
        "situacao": "ok",
        "texto": "The Indian rupee (symbol: ₹; code: INR) is the official currency of India and the erstwhile Dominion of India and British Raj. The rupee is subdivided into 100 paise (singular: paisa). The issuance of the currency is controlled by the Reserve Bank of India. The Reserve Bank derives this role from powers vested in it by the Reserve Bank of India Act, 1934. It is the world's eleventh-most-traded cur\n[…]\nThe history of the Indian rupee traces back to ancient India around the 6th century BCE; ancient India was one of the earliest issuers of coins in the world, alongside the Chinese wen and Lydian staters.\n[…]\nAs the Straits Settlements were originally an outpost of the British East India Company, the Indian rupee was made the sole official currency of the Straits Settlements in 1837, as it was administered as part of British India. This attempt was resisted by the locals. However, Spanish dollars continued to circulate and 1845 saw the introduction of coinage for the Straits Settlements using a system of 100 cents = 1 dollar, with the dollar equal to the Spanish dollar or Mexican peso.\n[…]\nAfter the Partition of India, the Pakistani rupee came into existence, initially using Indian coins and Indian currency notes simply over-stamped with \"Pakistan\". Previously the Indian rupee was an official currency of other countries, including Aden, Oman, Dubai, Kuwait, Bahrain, Qatar, the Trucial States, Kenya, Tanganyika, Uganda, the Seychelles and Mauritius.\n[…]\nThe Indian government introduced the Gulf rupee as a replacement for the Indian rupee for circulation outside the country with the Reserve Bank of India (Amendment) Act of 1 May 1959. The creation of a separate currency was an attempt to reduce the strain on India's foreign reserves from gold smuggling.\n[…]\n\"Gallery of Indian Rupee Notes introduced till date\". Reserve Bank of India. Retrieved 9 January 2015.\n[…]\nBanknotes catalog of India (in English)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rupia_indiana",
        "situacao": "ok",
        "texto": "A rupia indiana (ISO 4217: INR símbolo = ₹ ) é a moeda corrente oficial da Índia. A palavra rupiah deriva do sânscrito rupya, que significa prata. Paisa (para moedas) deriva da palavra em sânscrito padamsah, que significa um quarto ou quarta parte.\n[…]\nO nome \"rupia\" é também utilizado para as moedas oficiais de outros países, como a Indonésia, Maldivas, Nepal, Paquistão, Sri Lanca, Seicheles, entre outros.\n[…]\nUma rupia divide-se em cem paisas. Existem moedas de cinco, dez, vinte, 25 e cinquenta paisas e de uma, duas e cinco rupias. Existem notas de uma, duas, cinco, dez, vinte, cinquenta e cem rupias.\n[…]\nO símbolo (₹) para o código INR (rupia indiana) pode ser escrito Rs, e IRs.\n[…]\nA Rúpia Digital (e₹) ou eINR ou E-Rupee é uma versão digital tokenizada da Rúpia Indiana, emitida pelo Reserve Bank of India (RBI) como uma moeda digital do banco central (CBDC). A Rúpia Digital foi proposta em janeiro de 2017 e lançada em 1º de dezembro de 2022. A Digital Rupee está usando blockchain tecnologia de contabilidade distribuída.\n[…]\nRupia da Índia Portuguesa\n[…]\nEconomia da Índia\n[…]\nMedia relacionados com a Rupia indiana no Wikimedia Commons\n[…]\nHeiko Otto (ed.). «Notas históricas e actuais da Índia» (em inglês e alemão). Consultado em 30 de maio de 2017",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Mil-réis",
      "descricao": "Unidade monetária usada no Brasil até 1942, equivalente a mil unidades da antiga moeda portuguesa e brasileira."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome da antiga moeda brasileira mil-réis vem do plural de qual unidade monetária de origem portuguesa?",
    "resposta": "Real",
    "fonte": [
      "https://en.wikipedia.org/wiki/Brazilian_real_(old)",
      "https://en.wikipedia.org/wiki/Portuguese_real"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Brazilian_real_(old)",
        "situacao": "ok",
        "texto": "The first official currency of Brazil was the real (pronounced [ʁeˈaw]; pl. réis), with the symbol Rs$. As the currency of the Portuguese empire, it was in use in Brazil from the earliest days of the colonial period, and remained in use until 1942, when it was replaced by the cruzeiro.\n[…]\nThe name \"real\" was resurrected in 1994 for the new currency unit (but with the new plural form \"reais\"). This currency is still in use. One modern real is equivalent to 2.75 × 1018 (2.75 quintillion) of the old réis.\n[…]\nUntil 1747 the Brazilian real was the same as the Portuguese real, with the gold peça of 13.145 g fine gold worth 6,400 réis or 6400. After that date, however, the Brazilian real started to become a separate currency unit when the value of the peça was raised by 10% in Brazil (but not in Portugal) to 7,040 réis. The values of both units diverged further in the 19th century, with the peça becoming 8,000 Portuguese réis in 1837 versus 16,000 Brazilian réis in 1846.\n[…]\nIn the 1750s, copper coins were in circulation in denominations of 5, 10, 20 and 40 réis, silver coins for 75, 150, 300 and 600 réis, and gold coins for 1,000, 2,000, 4,000 and 6,400 réis. The silver coinage was reformed in 1778, with the introduction of 80, 160, 320 and 640 real coins. Between 1780 and 1782, gold 800, 1,600 and 3,200 réis were added.\n[…]\nIn 1809, older copper and silver coins were counterstamped with the Portuguese arms, doubling the value of 5, 10, 20 and 40 real pieces and increasing the value of 75, 150, 300 and 600 real coins to 80, 160, 320 and 640 réis. From 1810, Spanish 8 real coins (\"Spanish dollars\") were overstruck to produce 960 real coins. Copper 80 réis were introduced in 1811."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Portuguese_real",
        "situacao": "ok",
        "texto": "The real (Portuguese pronunciation: [ʁiˈal], meaning \"royal\", plural: réis or [archaic] reais) was the unit of currency of Portugal and the Portuguese Empire from around 1430 until 1911. It replaced the dinheiro at the rate of 1 real = 3+1⁄2 libras = 70 soldos = 840 dinheiros and was itself replaced by the escudo (as a result of the Republican revolution of 1910) at a rate of 1 escudo = 1000 réis.\n[…]\nDue to the historically low value of the real, large sums were usually expressed in milréis (or  mil-réis) of 1,000 réis, a term that has been in use since at least the 1760s. In figures, a mil-réis was written as 1$000, with the cifrão or $ sign functioning as a decimal point for monetary amounts, so that 60,500 réis would be written as 60$500 or 60.5 milréis.\n[…]\nIn 1911, the escudo replaced the real at the rate of 1 escudo = 1,000 réis as the Portuguese currency unit (not to be confused with the gold escudo worth 1$600). One million réis (or one thousand mil-réis, written 1.000$000) was known as a conto de réis. This term survived the introduction of the escudo to mean 1,000 escudos and is now used to mean five euros, almost exactly the converted value of 1,000 escudos or one million réis (1 conto is approximately €4.98798).\n[…]\nCoins and banknotes were also issued denominated in réis for use in the different parts of the Portuguese Empire. See: Angolan real, Azorean real, Brazilian real, Cape Verde real, Mozambican real, Portuguese Guinea real and São Tomé and Príncipe real. Brazil has revived the real as the denomination of its present currency.\n[…]\nIn 1847, the Banco de Portugal introduced notes for 10$000 and 20$000 réis. 5$000 réis notes were issued from 1883, followed by 50$000 réis in 1886. In 1891, the Casa de Moeda introduced notes for 50 and 100 réis, and the Banco de Portugal introduced notes for 200, 500, 1$000 and 2$500 réis, followed by 100$000 real notes in 1894."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Real_%28antiga_moeda_brasileira%29",
        "situacao": "ok",
        "texto": "Real (plural réis) foi a unidade monetária utilizada no Brasil desde sua colonização até 5 de outubro de 1942, quando foi substituída pelo cruzeiro na razão de 1 cruzeiro por 1 mil-réis.\n[…]\nComo essa unidade monetária não era fracionável (diferente do Real adotado em 1994, que se fraciona em centavos) o uso do termo réis, no plural, era predominante. Um real na realidade seria equivalente a um centavo, 100 réis é que seria equivalente a 1 real (a moeda atual, lembrando que esta comparação não é no sentido de conversão de moeda). O réis funcionava de maneira similar ao iene, moeda moderna que não é fracionária.\n[…]\nO real, cujo plural é \"réis\", foi a primeira moeda oficial do Brasil, utilizada desde o período colonial pelos portugueses, até 1 de novembro de 1942. No entanto, durante grande parte do período colonial, o Brasil utilizava uma mistura de moedas, incluindo a moeda espanhola (o peso), e até mesmo o ouro em pó, como meio de troca. A história do real está profundamente entrelaçada com a evolução econômica e política do país.\n[…]\nCom a independência do Brasil em 1822, o país continuou a utilizar o Real como sua unidade monetária oficial. Durante o século XIX, o governo brasileiro começou a cunhar suas próprias moedas em reais, consolidando a moeda como símbolo da soberania nacional. A moeda de mil-réis, que equivalia a 1 000 réis, tornou-se uma denominação comum e amplamente utilizada no comércio e nas transações diárias.\n[…]\nEm 1 de novembro de 1942, o Real foi finalmente substituído pelo Cruzeiro, na razão de 1 Cruzeiro para cada 1 000 mil-réis. Esta mudança marcou o fim da longa história do Real como moeda oficial do Brasil.\n[…]\n400 réis (1901)\n[…]\nReal (moeda portuguesa)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Lev búlgaro",
      "descricao": "Moeda tradicional da Bulgária, usada antes da adoção do euro."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome do lev, a moeda tradicional da Bulgária, é uma forma antiga da palavra búlgara para qual animal?",
    "resposta": "Leão",
    "distratores": [
      "Lobo",
      "Urso",
      "Águia"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Bulgarian_lev"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bulgarian_lev",
        "situacao": "ok",
        "texto": "The lev (лев; plural: лева, левове; lev, leva, levove; ISO 4217 code: BGN) was the currency of Bulgaria from 1880 to 2025. The euro replaced the lev on 1 January 2026; during the cash changeover period (1–31 January 2026), the lev and the euro circulated in parallel for cash payments, and from 1 February 2026 the euro became the sole legal tender in Bulgaria.\n[…]\nThe lev was introduced as Bulgaria's currency in 1881 with a value equal to the French franc. The gold standard was suspended between 1899 and 1906 and suspended again in 1912. Until 1916, Bulgaria's silver and gold coins were issued to the same specifications as those of the Latin Monetary Union. Banknotes issued until 1928 were backed by gold (leva zlato / zlatni, лева злато / златни) or silver (leva srebro / srebarni, лева сребро / сребърни).\n[…]\nIn 1885, the Bulgarian National Bank introduced notes for 20 and 50 gold leva, followed in 1887 by 100 gold leva and, in 1890, by 5 and 10 gold leva notes. In 1899, 5, 10 and 50 silver leva notes were issued, followed by 100 and 500 silver leva in 1906 and 1907, respectively. 500 gold leva notes were also introduced in 1907.\n[…]\nAfter the fall of communism, Bulgaria experienced several episodes of drastic inflation and currency devaluation. In order to change this, in 1997, the lev was pegged to the Deutsche Mark, with 1,000 leva equal to 1 DM (one lev equal to 0.1 pfennig).\n[…]\nOn 5 July 1999 the lev was redenominated at 1000:1 with 1 new lev equal to 1 Deutsche Mark. The ISO 4217 currency code for the new Bulgarian lev is BGN. The lev is pegged at €1 = 1.95583 leva (previously DEM 1 = BGN 1, continuing the fixed exchange rate from the third lev).\n[…]\nBulgarian National Bank: Non-periodical Publications: Catalogues\n[…]\nBulgarian Lev: Catalog of Banknotes\n[…]\nHistorical and current banknotes of Bulgaria\n[…]\nHistorical banknotes of the People's Republic of Bulgaria"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lev_b%C3%BAlgaro",
        "situacao": "ok",
        "texto": "O lev ou, na sua forma portuguesa, leve (lv; plural em português para as duas formas: leves), oficialmente lev ou leve búlgaro (búlgaro: лев, lev; plural: лева, leva ou левове, levove) foi a moeda da Bulgária utilizada de 1880 até 2025, quando foi substituída pelo euro.\n[…]\nDesde 1997, o lev esteve num acordo de Comité monetário com inicialmente o Marco Alemão a uma taxa fixa de BGL 1000 a 1 DEM. Após a introdução do euro e a redenominação do lev em 1999, isto resultou numa taxa fixa para o euro de BGN 1,95583: EUR 1. Desde 2020, o lev tem sido parte do Mecanismo Europeu de Taxas de Câmbio (MTC II). Em novembro de 2023, os desenhos das moedas de euro búlgaras foram revelados e aprovados pelo Banco Nacional da Bulgária.\n[…]\n«Catálogo e Galeria de notas na Bulgária»\n[…]\n«Galeria do papel-moeda Búlgaro»\n[…]\n«Banco nacional da Bulgária»\n[…]\n«Notas e moedas búlgaras em circulação»\n[…]\n«Galeria das notas da Bulgária»  («incluindo a República Popular da Bulgária» (em alemão, inglês, e francês) )",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Efígie da República",
      "descricao": "Busto feminino que personifica a República brasileira, presente nas cédulas do real."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O rosto feminino que simboliza a República nas cédulas do real se inspira em qual símbolo nacional francês?",
    "resposta": "Marianne",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Ef%C3%ADgie_da_Rep%C3%BAblica",
      "https://en.wikipedia.org/wiki/Effigy_of_the_Republic"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Ef%C3%ADgie_da_Rep%C3%BAblica",
        "situacao": "ok",
        "texto": "Em muitos países, a efígie ou imagem da República é a personificação do regime republicano e do próprio Estado onde esse regime vigora. Geralmente a imagem da República é representada, iconograficamente, por um ser de sexo feminino ostentando um barrete.\n[…]\nMarianne é a figura alegórica de uma mulher que representa a República Francesa, sendo portanto uma personificação nacional.\n[…]\nSob a aparência de uma mulher usando um barrete frígio, Marianne encarna a República Francesa e representa a permanência dos valores da república e dos cidadãos franceses: Liberté, Égalité, Fraternité (Liberdade, Igualdade e Fraternidade). Marianne é a representação simbólica da mãe pátria, simultaneamente enérgica, guerreira, pacífica, protetora e maternal.\n[…]\nA obra A Liberdade guiando o povo, onde Marianne é retratada, foi inspiração para a Efígie da República do Brasil, que está estampada nas cédulas de Real do país.\n[…]\nA Efígie da República é a representação simbólica de uma mulher que personifica a República Brasileira, inspirada na Marianne, símbolo da República francesa, cuja imagem, com o seu Barrete Frígio (carapuça vermelha), está estampada em diferentes símbolos do país, como brasões e bandeiras de municípios e estados brasileiros. Este símbolo também é utilizado impresso em todas as cédulas do Real (unidade monetária nacional), e cunhado na moeda de R$ 1,00.\n[…]\nEfígie da República conhecida também na Argentina como Efígie da Liberdade, figurou em muitas moedas argentinas e foi criada pelo artista francês Eugène-André Oudiné. Representada com o perfil sereno e cabelo abundante soltos ao vento e um barrete frígio como tocado.\n[…]\nSímbolos do Brasil\n[…]\nReal no site Portal Brasil"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Effigy_of_the_Republic",
        "situacao": "inexistente",
        "texto": ""
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Bandeira da Suíça",
      "descricao": "Bandeira nacional da Suíça, vermelha com uma cruz branca no centro."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que formato raro entre as bandeiras nacionais a bandeira da Suíça compartilha com a do Vaticano?",
    "resposta": "Quadrado",
    "fonte": [
      "https://en.wikipedia.org/wiki/Flag_of_Switzerland"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Flag_of_Switzerland",
        "situacao": "ok",
        "texto": "The national flag of Switzerland displays a white Greek cross in the centre of a red field. The white cross is known as the Swiss cross or the federal cross. Its arms are rectangular, with a ratio of height to width of 7:6 for the vertical arms and 6:7 for the horizontal arms. The size of the cross in relation to the field was set in 2017 as 5:8. The Swiss flag is square, instead of the rectangula\n[…]\nThe white cross has been used as the field sign (attached to the clothing of combatants and to the cantonal war flags in the form of strips of linen) of the Old Swiss Confederacy since its formation in the late 13th or early 14th century. Its symbolism was described by the Swiss Federal Council in 1889 as representing \"at the same the Christian cross symbol and the field sign of the Old Confederacy\".\n[…]\nThis decision remained in force after the formation of the federal state in 1848, as was recognized by the Federal Council in 1889."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bandeira_da_Su%C3%AD%C3%A7a",
        "situacao": "ok",
        "texto": "A bandeira da Suíça foi posta pela Constituição Suíça em 1848. Consiste em uma cruz grega branca grossa e equilátera, inserida no centro de um quadrado vermelho. O comprimento de cada braço da cruz é 1/6 maior do que a sua largura.\n[…]\nE ao lado da Bandeira do Vaticano, são as únicas bandeiras nacionais quadradas do mundo.\n[…]\nO símbolo da cruz branca sobre fundo vermelho aparece pela primeira vez na história suíça como emblema do cantão de Schwytz, um dos cantões fundadores da Confederação Suíça, em 1291. A bandeira deste cantão ainda hoje tem a cruz branca no ângulo superior direito do seu fundo vermelho. O símbolo do crucifixo simbolizava a liberdade concedida pelo império aos habitantes daquele cantão.\n[…]\nMais tarde, durante o século XV, as tropas de diversos cantões da antiga confederação combateram sob os seus estandartes cantonais respectivos, nos quais figurava todavia a cruz branca sobre fundo vermelho, signo da sua aliança e promessa de vitória. A partir da guerra da Suábia e ao longo do século XVI, as tropas compostas por regimentos de diferentes cantões combateram no estrangeiro sob a bandeira vermelha com a cruz branca.\n[…]\nDurante os séculos XVII e XVIII, os diferentes emblemas comunais e cantonais foram substituídos por bandeiras com as cores cantonais em forma de labaredas que rodeavam a cruz branca.\n[…]\nTodavia, só no século XIX, após a criação do Estado federal em 1848, a atual bandeira suíça se tornou o estandarte oficial da Confederação.\n[…]\nQuanto à bandeira do movimento internacional da Cruz Vermelha, criada em fins do século XIX por iniciativa do genebrino Henri Dunant, é uma transposição da bandeira suíça, traduzindo assim tanto a origem do fundador do movimento como as tradições humanitárias do país.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Bandeira do Chade",
      "descricao": "Bandeira nacional do Chade, com três faixas verticais azul, amarela e vermelha."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "A bandeira do Chade, com faixas verticais azul, amarela e vermelha, é quase idêntica à de qual país europeu?",
    "resposta": "Romênia",
    "fonte": [
      "https://en.wikipedia.org/wiki/Flag_of_Chad"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Flag_of_Chad",
        "situacao": "ok",
        "texto": "The national flag of Chad is a vertical tricolour of indigo, yellow, and red. It was adopted on 6 November 1959, almost a year after the founding of the autonomous Republic of Chad. Since the 1990s, its similarity to the flag of Romania has caused international discussion.\n[…]\nWhen the legislative commission in Chad first proposed a design for their national flag in June 1959, it featured a vertical tricolor of green, yellow, and red similar to the Flag of Mali. They changed the original green stripe to blue for the final design adopted in November 1959 to avoid confusion with Mali, which were already using the same Pan-African colors.\n[…]\nThe flag was adopted in 1959 for the autonomous republic and retained on independence in 1960, and in the constitution of 1962. Despite many political upheavals within Chad since independence, the flag has not been changed. This may be because the flag is not associated with any of the main power rivals within Chad, which had no sense of national identity before independence, and little after independence.\n[…]\nThe flag of Chad is almost identical to the national flag of Romania, although the colours in Chad flags may vary more than those specified for Romania. Romania has used the flag since 1866, which appeared for the first time in its current form in Wallachia. It was officially in use from 1866 until 1948, when it was superseded by the flag of the Socialist Republic of Romania. Chad began to use its present flag in 1960, after it achieved independence from France."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bandeira_do_Chade",
        "situacao": "ok",
        "texto": "A bandeira nacional do Chade (em francês: Drapeau du Tchad) é uma bandeira tricolor vertical de índigo, amarelo e vermelho. Foi adoptado em 6 de novembro de 1959, quase um ano após a fundação da República Autónoma do Chade. Desde a década de 1990, sua semelhança com a bandeira da Roménia tem causado discussão internacional.\n[…]\nA bandeira do Chade é uma bandeira tricolor vertical composta (da esquerda para a direita) por uma coluna índigo, uma amarela e uma vermelha . As cores da bandeira chadiana deveriam ser uma combinação das cores azul, branco e vermelho, como visto na bandeira da França, com as cores pan-africanas de verde, amarelo e vermelho, como visto na bandeira da Etiópia.\n[…]\nCada cor no design tem um profundo significado simbólico enraizado na geografia, história e identidade do Chade.\n[…]\nA bandeira do Chade é quase idêntica à bandeira nacional da Roménia, embora as cores nas bandeiras do Chade possam variar mais do que aquelas especificadas para a Romênia. A Romênia usa a bandeira desde 1866, que apareceu pela primeira vez em sua forma atual na Valáquia. Foi oficialmente usada de 1866 até 1948, quando foi substituída pela bandeira da República Socialista da Roménia. O Chade começou a usar sua bandeira atual em 1960, depois de conquistar a independência da França.\n[…]\nA questão de Romênia e Chade compartilharem bandeiras semelhantes preocupou o governo chadiano em algumas ocasiões; em 2004, eles solicitaram que as Nações Unidas examinassem a questão. Em resposta, o presidente romeno Ion Iliescu declarou que nenhuma mudança ocorreria na bandeira, já que a existência do tricolor da Romênia é anterior à existência do Chade como um todo: \"O tricolor nos pertence. Não desistiremos do tricolor.\"\n[…]\nBrasão de armas do Chade\n[…]\nBandeira da Roménia",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Bandeira da Irlanda",
      "descricao": "Bandeira nacional da República da Irlanda, tricolor vertical verde, branca e laranja."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "A bandeira da Irlanda tem as mesmas três cores, em ordem invertida, da bandeira de qual país africano?",
    "resposta": "Costa do Marfim",
    "fonte": [
      "https://en.wikipedia.org/wiki/Flag_of_Ireland",
      "https://en.wikipedia.org/wiki/Flag_of_Ivory_Coast"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Flag_of_Ireland",
        "situacao": "ok",
        "texto": "The national flag of Ireland (Irish: bratach na hÉireann), frequently referred to in Ireland as \"the tricolour\" (an trídhathach) and elsewhere as the Irish tricolour, is a vertical tricolour of green (at the hoist), white and orange. The proportions of the flag are 1:2 (that is to say, flown horizontally, the flag is half as high as it is wide).\n[…]\nThe tricolour's marine status was formalised by the Merchant Shipping Act 1947.\n[…]\nDespite its original symbolism, in Northern Ireland the tricolour, along with most other markers of either British or Irish identity, has come to be a symbol of division. The Ulster Unionist Party Government of Northern Ireland adopted the Ulster Banner (based on the flag of Ulster) in 1953. Thus it is this flag and the Union Flag that are flown by unionists and loyalists, while the tricolour is flown by nationalists and republicans.\n[…]\nNationalists maintain that the Agreement means that the use of the Union Flag for official purposes should be restricted, or that the tricolour should be flown alongside the UK's flag on government buildings. However the tricolour is never flown from official buildings, alone or alongside the UK's flag. A Sinn Féin Lord Mayor of Belfast, Alex Maskey, displayed both flags in his own offices causing some controversy.\n[…]\nSome institutions in Great Britain, such as the BBC, have previously and mistakenly used the tricolour to represent Northern Ireland.\n[…]\nThe tricolour is draped across the coffins of Presidents of Ireland (including former presidents), soldiers and Garda Síochána personnel killed in the line of duty, and other notables accorded state funerals, such as Roger Casement in 1965, or Kevin Barry in 2001. Care should be taken at all times to ensure that the national flag does not touch the ground, trail in water or become entangled in trees or other obstacles."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Flag_of_Ivory_Coast",
        "situacao": "ok",
        "texto": "The national flag of Ivory Coast (or Côte d'Ivoire) is a vertical tricolour of orange, white, and green, with a 2:3 width-to-length ratio. It was adopted on 3 December 1959 with the passing of law no. 59-240 by the Ivorian Legislative Assembly, and is defined in Article 48 of the country's 2016 constitution. It is similar to the flag of Ireland, but with the tricolour reversed and with less oblong\n[…]\n59-240, passed by the Ivorian Legislative Assembly on 3 December 1959, just before the first anniversary of the country's autonomy. The French commissioner had suggested a red, white, and blue tricolour with stars, but Ivorians wanted a greater departure from the flag of their former colonial ruler.\n[…]\nConversely, the vexillologist Whitney Smith claimed that, in contrast to neighbouring post-colonial states, Ivory Coast rejected the pan-African colours of green, yellow, and red for its national flag because of its close ties to France.\n[…]\nThe design of the flag is defined in Article 48 of the Constitution of Ivory Coast (2016) as a \"tricolour flag of orange, white, and green in vertical bands and of equal dimensions\". The width-to-length ratio of the flag is 2:3. The London Organising Committee of the Olympic and Paralympic Games (LOCOG) used Pantone codes PMS 151 for orange and PMS 347 for green in their manual for the 2012 Summer Olympics. The Millennium Challenge Corporation (MCC), a U.S.\n[…]\nThe flag of Ivory Coast is similar to the flag of Ireland, which is the exact same tricolour but reversed (the green being on the hoist side) and with a width-to-length ratio of 1:2 rather than 2:3. Due to the similarity of the two flags, Ulster loyalists in Northern Ireland have sometimes desecrated the Ivorian flag, mistaking it for the Irish flag. For example, during Ulster celebrations of the Twelfth in 2013, large Ivorian flags were burned in a bonfire in Belfast instead of Irish ones."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bandeira_da_Irlanda",
        "situacao": "ok",
        "texto": "A Bandeira da Irlanda (em irlandês: An Bhratach Náisiúnta), também conhecida como a tricolor, é uma bandeira tricolor vertical, com as cores verde, branco e laranja. A proporção da bandeira é 1:2 (comprimento duas vezes a largura). O verde representa uma tradição gaélica e os católicos, enquanto o laranja representa os adeptos de Guilherme de Orange e os protestantes. O branco no centro significa \n[…]\nPrimeiramente introduzida por Thomas Francis Meagher em 1848, foi na Revolta da Páscoa de 1916, quando foi levantada no General Post Office, juntamente com uma bandeira verde com as palavras República da Irlanda, em Dublin, que o tricolor chegou a ser considerado como a bandeira nacional.\n[…]\nA bandeira foi adotada em 1919 pela República da Irlanda durante a guerra da independência, e posteriormente pelo Estado Livre Irlandês (1922-1937), mais tarde ser adotada ao abrigo do estatuto constitucional da Constituição de 1937 na Irlanda. O tricolor é considerado por muitos nacionalistas como a bandeira nacional de toda a ilha da Irlanda.\n[…]\nA bandeira da Costa do Marfim tem as mesmas cores que a bandeira irlandesa, mas em ordem invertida.\n[…]\nBandeira da Irlanda do Norte",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Bandeira de Liechtenstein",
      "descricao": "Bandeira do Principado de Liechtenstein, azul e vermelha com uma coroa dourada no canto."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Nos Jogos Olímpicos de 1936, Liechtenstein descobriu que sua bandeira era igual à de qual país, e acrescentou uma coroa?",
    "resposta": "Haiti",
    "fonte": [
      "https://en.wikipedia.org/wiki/Flag_of_Liechtenstein"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Flag_of_Liechtenstein",
        "situacao": "ok",
        "texto": "The national flag of the Principality of Liechtenstein (German: Flagge Liechtensteins) consists of two horizontal bands, one blue and one red, charged with a gold crown in the canton. In use since 1852 and officially enshrined into the nation's constitution in 1921, it has been the flag of the principality since that year. The crown was added to the flag in 1937, after the country discovered at th\n[…]\nLiechtenstein was established as a principality of the Holy Roman Empire in 1719 and gained its complete independence from the German Confederation in 1866. Within this period, the new livery colours of blue and red, were first utilized by Prince Joseph Wenzel I in 1764.\n[…]\nIn 1852, these colours were selected to be featured on the flag, instead of the gold and red from the coat of arms which were customarily employed with two horizontal bands and was used as the national flag from Liechtenstein’s creation until 1852, when the yellow was swapped out for blue.\n[…]\nA new constitution for the Principality was formulated and proclaimed in October 1921. It made the blue and red banner the national flag by granting it \"official status\". Fifteen years later, during the 1936 Summer Olympics, the country came to the realization that its flag was identical to the flag of Haiti (Haiti took part in the Opening Ceremony but its sole athlete did not compete). Because of this finding, the government added the prince's crown to the canton.\n[…]\nThis change served two purposes – to signify Liechtenstein's position as a principality, and to distinguish its flag from Haiti's. This modified design was adopted on 24 June 1937. A design with a modified crown was adopted on 30 June 1982.\n[…]\nLiechtenstein at Flags of the World"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bandeira_de_Liechtenstein",
        "situacao": "ok",
        "texto": "A bandeira de Liechtenstein (em alemão: Flagge Liechtensteins) consiste em duas faixas horizontais, uma azul e uma vermelha, carregadas com uma coroa de ouro no cantão. Em uso desde 1852 e oficialmente consagrada na Constituição do país em 1921, é a bandeira nacional do principado desde então. A coroa foi adicionada à bandeira em 1937, após o país descobrir, durante os Jogos Olímpicos de Verão rea\n[…]\nUm desenho com uma coroa modificada foi adotado em 30 de junho de 1982.\n[…]\nEm 1852, essas cores foram escolhidas para compor a bandeira, em vez do ouro e do vermelho do brasão de armas, que haviam sido tradicionalmente utilizados em uma bandeira de duas faixas horizontais desde a criação de Liechtenstein até 1852, quando o amarelo foi substituído pelo azul.\n[…]\nUma nova Constituição para o principado foi elaborada e promulgada em outubro de 1921. Ela transformou a bandeira azul e vermelha na bandeira nacional, conferindo-lhe \"estatuto oficial\". Quinze anos depois, durante os Jogos Olímpicos de Verão de 1936, o país percebeu que sua bandeira era idêntica à do Haiti (o Haiti participou da cerimônia de abertura, mas seu único atleta não competiu). Em resposta a essa descoberta, o governo acrescentou a coroa do príncipe ao cantão.\n[…]\nEssa mudança teve dois objetivos: destacar o status de Liechtenstein como um principado e distinguir sua bandeira da do Haiti. Esse desenho modificado foi adotado em 24 de junho de 1937. Um modelo com uma coroa modificada foi adotado em 30 de junho de 1982.\n[…]\nAs cores e os símbolos da bandeira possuem significados culturais, políticos e regionais. O azul representa o céu, enquanto o vermelho alude às \"fogueiras noturnas\" acesas nas casas em todo o país. A coroa é de cor dourada, segundo algumas fontes, ou amarela, segundo outras.\n[…]\nCada um dos onze municípios possui sua própria bandeira, todas hasteadas na vertical.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Bandeira do México",
      "descricao": "Bandeira nacional do México, tricolor vertical verde, branca e vermelha com o brasão da águia no centro."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Sem o brasão da águia, a bandeira do México teria as mesmas cores e faixas verticais da bandeira de qual país europeu?",
    "resposta": "Itália",
    "fonte": [
      "https://en.wikipedia.org/wiki/Flag_of_Mexico"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Flag_of_Mexico",
        "situacao": "ok",
        "texto": "The national flag of Mexico (Spanish: bandera nacional de México) is a vertical tricolor of  green, white, and red with the national coat of arms charged in the center of the white stripe. While the meaning of the colors has changed over time, these three colors were adopted by Mexico following independence from Spain during the country's War of Independence, and subsequent First Mexican Empire.\n[…]\nThe reasoning is that without the coat of arms, the flag would become nearly identical to the Italian flag.\n[…]\nThe Mexican tricolour (green, white, red) has been continuously used for a longer time than the Italian one. At the time of the Mexican flag's adoption, the similarly toned Italian tricolor had not been used by any sovereign nation in Europe. Napoleon's puppet state Cisalpine Republic in what would become northern Italy adopted it in 1797, but with horizontal stripes and different proportions from the modern Italian flag.\n[…]\nDue to the common arrangement of the colours, at first sight, it seems that the only difference between the Italian and the Mexican flag is only the coat of arms of Mexico present in the latter. Both flags use the same colours (green, white, and red), but the Mexican flag has darker shades of green and red (particularly green).\n[…]\nAdditionally, these flags present a different aspect ratio (proportions): the Italian flag aspect ratio is 2:3 (1 to 1.5), more squarish in shape, while the Mexican flag aspect ratio is 4:7 (1 to 1.75), a longer shape.\n[…]\nThe similarity between the two flags posed a serious problem in maritime transport, given that originally the Mexican mercantile flag was devoid of arms and consequently identical to the Italian Republican tricolour of 1946; to obviate the inconvenience, at the request of the International Maritime Organization, both Italy and Mexico adopted naval flags with different crests.\n[…]\nMexico at Flags of the World"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bandeira_do_M%C3%A9xico",
        "situacao": "ok",
        "texto": "A Bandeira do México é uma tricolor vertical com verde, branco e vermelho com o brasão nacional do México colocado no centro da faixa central. Apesar do significado das cores ter mudado com o tempo, estas três cores foram adotadas pelo México logo após a conquista da independência relativamente à Espanha. A bandeira atual foi adotada em 1968, mas o desenho global tem sido usado desde 1821, quando \n[…]\nArt. 3: A Bandeira Nacional é um rectângulo dividido em três faixas verticais equidimensionais, com as cores dispostas da seguinte forma, da tralha para o batente: verde, branco e vermelho. Centrado na faixa branca, o Brasão Nacional tem um diâmetro igual a três quartos da largura da faixa branca. A proporção da bandeira é 4 por 7. Poderá levar laço com as mesmas cores junto à ponteira.\n[…]\nUma possível razão para as alterações da bandeira e brasão em 1968 terá sido o facto da Cidade do México receber os Jogos Olímpicos de 1968 Por esta mesma altura, a bandeira tricolor simples que o México usava como insígnia da marinha mercante foi também legalmente abandonada. O raciocínio por detrás deste abandono era o de que sem o brasão de armas, esta bandeira não era a bandeira do México; tornar-se-ia a bandeira da Itália.[carece de fontes]?\n[…]\nQuando o brasão nacional é reproduzido no reverso da bandeira nacional, a Águia Mexicana aparecerá apoiada na sua pata direita, segurando com a esquerda e com o bico uma serpente curvada.\n[…]\nExistem duas variantes da bandeira nacional permitidas pela lei mexicana, sobretudo para uso pelos governos estaduais e federal. A diferença entre a bandeira nacional e as variantes são os desenhos do brasão de armas. Na primeira variante, utilizada pelo Presidente do México e secretarias de organismos federais, o brasão de armas é totalmente dourado, com excepção da fita tricolor (que é verde, branca e vermelha) e da rocha, lago e patas da águia  que são prateados.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Bandeira olímpica",
      "descricao": "Bandeira branca com os cinco anéis olímpicos entrelaçados, hasteada nas cerimônias dos Jogos."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Segundo Coubertin, por que a bandeira olímpica usa o fundo branco e os anéis azul, amarelo, preto, verde e vermelho?",
    "resposta": "Toda bandeira nacional tinha uma delas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Olympic_symbols"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Olympic_symbols",
        "situacao": "ok",
        "texto": "The International Olympic Committee (IOC) uses icons, flags, and symbols to represent and enhance the Olympic Games. These symbols include those commonly used during Olympic competitions such as the flame, fanfare, and theme as well as those used both during and outside competition, such as the Olympic flag.\n[…]\nAlthough the colors of the rings were later said to be representations of individual continents, Coubertin originally only meant the number of rings to \"represent the five parts of the world now won over to Olympism.\" According to Coubertin, the colours of the rings, along with the white background, represented the colours of every competing country's flag at the time. Upon its initial introduction, Coubertin stated the following in the August 1913 edition of Olympique:\n[…]\nIn his article published in November 1992 in the Olympic Revue, the official magazine of the IOC, American historian Robert Barney explained that the idea of the interlaced rings came to Coubertin when he was in charge of the USFSA. This association was founded by the union of two French sports associations and, until 1925, was responsible for representing the IOC in France. The emblem of the USFSA was two interlaced rings.\n[…]\nThe 1949–50 edition of the IOC's \"Green Booklet\" stated that each colour corresponded to a particular continent except for Antarctica: \"blue for Europe, yellow for Asia, black for Africa, green for Australia, and red for North America and South America. This assertion was reversed in 1951 because there was no evidence that Coubertin had intended it: \"at the very most he might perhaps have admitted it afterwards\".\n[…]\nPierre de Coubertin created the Olympic flag in 1913.\n[…]\nPierre de Coubertin Medal"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/An%C3%A9is_ol%C3%ADmpicos",
        "situacao": "ok",
        "texto": "Os anéis olímpicos são um símbolo dos Jogos Olímpicos composto por cinco arcos entrelaçados, com as cores azul, amarelo, preto, verde e vermelho sobre um fundo branco. Este foi originalmente concebido em 1913 pelo Barão Pierre de Coubertin, fundador dos Jogos Olímpicos modernos.\n[…]\nO emblema foi escolhido para ilustrar e representar o Congresso mundial de 1914: cinco anéis entrelaçados com cores diferentes - azul, amarelo, preto, verde e vermelho - são colocados no campo em branco do papel. Esses cinco anéis representam as cinco partes do mundo, que agora são conquistados para Olimpismo e dispostas a aceitar uma concorrência saudável.\n[…]\nAs cores utilizadas nos cinco anéis da bandeira foram escolhidas e representadas por Pierre de Coubertin devido à frequência em que aparecem nas bandeiras das diversas nações no mundo. Pelo menos uma das demais cores está presente em cada bandeira, dessa forma, integra todos os países, fornecendo um sentido universal para as Olimpíadas.\n[…]\nHá uma versão de que cada anel representaria um continente (sendo o anel azul correspondente à Europa, o anel amarelo à Ásia, o preto à África, o verde à Oceania e o vermelho à América), porém essa versão é oficialmente tida como equivocada.\n[…]\nO desenho foi feito em 1913 por Pierre de Coubertin recorrendo a grafite e guache em papel, medindo 21 por 27,5 centímetros.\n[…]\nO projeto foi entregue por Pierre de Coubertin a um homem suíço, tendo ficado na família ao longo dos tempos até que um colecionador o comprou e colocou-o à venda em 2020.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Bandeira da Grécia",
      "descricao": "Bandeira nacional da Grécia, com nove listras azuis e brancas e uma cruz branca no canto azul."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Segundo a tradição popular, as nove listras azuis e brancas da bandeira grega correspondem às sílabas de qual lema?",
    "resposta": "Liberdade ou morte",
    "fonte": [
      "https://en.wikipedia.org/wiki/Flag_of_Greece"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Flag_of_Greece",
        "situacao": "ok",
        "texto": "The national flag of Greece, popularly referred to as the Blue-and-White (Γαλανόλευκη, Galanólefki) or the Cyan-and-White (Κυανόλευκη, Kyanólefki), is officially recognised by Greece as one of its national symbols and has 9 horizontal stripes of alternating blue and white. There is a blue canton in the upper hoist-side corner bearing a white cross; the cross symbolises Christianity. The blazon of \n[…]\nWhile the nine stripes do not have any official meaning, the most popular interpretation says that they represent the syllables of the phrase Ελευθερία ή Θάνατος (Freedom or Death): the five blue stripes for the syllables in Ελευθερία, the four white for those of ή Θάνατος. White and blue might symbolize the colours of the Greek sky and sea. Furthermore, these stripes can also represent each of the nine geographical regions.\n[…]\nThe tetragrammatic cross flag, as it appears in quarters II and III in this design, is well documented. In the same Spanish atlas this \"plain\" tetragrammatic cross flag is presented as (among other places in the Empire) \"the Flag of Salonika\" and \"the real Greece and Empire of the Greeks (la vera Grecia e el imperio de los griegos)\". The (quartered) arrangement that includes the Cross of St.\n[…]\nAs such, not only were the regional councils abolished in favour of a central administration, but it was decided to abolish all revolutionary flags and adopt a universal national flag. The reasons why the particular arrangement (white cross on blue) was selected, instead of the more popular blue cross on a white field, remain unknown."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bandeira_da_Gr%C3%A9cia",
        "situacao": "ok",
        "texto": "A bandeira da Grécia baseia-se em nove listras horizontais iguais de azul que alternam com branco. Existe um quadrado azul no canto superior esquerdo da tralha, designado por cantão, que contém uma cruz branca. A cruz simboliza a ortodoxia grega, a religião tradicional do país, e cada uma das nove listras corresponde a uma sílaba da frase \"Liberdade ou Morte\" (Ελευθερία ή θάνατος). As proporções o\n[…]\nO esquema de cores de azul e branco foi pela primeira vez usado na década de 1820, mas a forma atual só foi adaptada como bandeira nacional em 1978. Anteriormente, num azul mais escuro, a bandeira era apenas usada no mar e pela marinha mercante, e a bandeira nacional era uma simples cruz branca em fundo azul.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Bandeira do Irã",
      "descricao": "Bandeira nacional do Irã, tricolor verde, branca e vermelha com emblema vermelho e inscrições nas bordas das faixas."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "A frase Deus é grande, em árabe, se repete vinte e duas vezes na bandeira do Irã. Esse número lembra a data de quê?",
    "resposta": "Vitória da Revolução Islâmica",
    "fonte": [
      "https://en.wikipedia.org/wiki/Flag_of_Iran"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Flag_of_Iran",
        "situacao": "ok",
        "texto": "The national flag of the Islamic Republic of Iran is a tricolour of equal horizontal bands of green, white, and red, featuring the Islamic emblem in red centred on the white band, and the Takbir written 11 times each in white Kufic script along the edges of the green and red bands.\n[…]\nThe first official flag of Iran was adopted on 14 August 1905. Following the 1979 Islamic Revolution, the Iranian flag was changed into its current form in July 1980.\n[…]\nFollowing the Iranian Revolution, the Interim Government of Iran removed the crown from the naval ensign. The old state and national flags remained unchanged until July 1980, when the modern Iranian flag was adopted.\n[…]\nHowever, the post-revolutionary Iranian government had viewed the Lion and Sun symbol as representing the \"oppressive Westernising monarchy\" that had to be replaced, despite the emblem's traditional Shi'a meanings and the lion's association with Ali, the first Imam of the Shi'a. For that reason, the name of the Red Lion and Sun Society was changed to Red Crescent Society.\n[…]\nCurrently, the Lion and Sun flag is used by many Iranian opposition groups as a protest against the Islamic Republic. Some political groups in Iran, including monarchists, continue to use it as well.\n[…]\nIn Los Angeles, California and other cities with large Iranian expatriate communities, the Lion and Sun, as a distinguishing marker, appears on Iranian flags and souvenirs to an extent that far surpasses its display during the years of monarchy in its homeland, where the plain tricolour was usually used even prior to the revolution. After the Islamic Revolution in Iran and the replacement of the lion and sun flag with the new flag, new designs of this flag were still presented.\n[…]\nFlags of the Islamic Republic of Iran Armed Forces"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bandeira_do_Ir%C3%A3o",
        "situacao": "ok",
        "texto": "A bandeira nacional da República Islâmica do Irã (em persa: پرچم ایران), também conhecida como tricolor (em persa: پرچم سه رنگ ایران), é uma bandeira tricolor com as cores pan-iranianas, compreendendo faixas horizontais iguais de verde, branco e vermelho com o emblema nacional (\"Alá\") em vermelho centrado na faixa branca e o takbir escrito 11 vezes cada na Escrita cúfica em branco, na parte inferi\n[…]\nApós a Revolução Iraniana de 1979, a bandeira atual foi adotada em 29 de julho de 1980.\n[…]\nMuitos exilados iranianos que se opõem ao governo iraniano também usam a bandeira tricolor da monarquia iraniana com o Leão e o Sol no centro ou a tricolor sem emblemas adicionais.\n[…]\nDepois da Revolução Islâmica liderada pelo aiatolá Ruhollah Khomeini, a bandeira foi reformulada: se eliminaram a faixa branca o símbolo do leão e o sol, sendo trocado por uma figura que representa quatro meia luas rodeando uma espada e que também representa tulipa vermelha.\n[…]\nAssim mesmo, se colocou as faixas verde e vermelha, nas partes que limitam com a faixa branca, a frase Allah O Akbar (em árabe Deus é Grande) onze vezes em cada faixa, representando que foi o dia 22 do décimo primeiro mês (Bahman) quando o Xá Mohammed Reza Pahlavi uniu o país.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Bandeira da Turquia",
      "descricao": "Bandeira nacional da Turquia, vermelha com uma lua crescente e uma estrela brancas."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Segundo uma lenda, onde a lua crescente e a estrela da bandeira turca apareceram refletidas depois de uma batalha?",
    "resposta": "Numa poça de sangue",
    "fonte": [
      "https://en.wikipedia.org/wiki/Flag_of_Turkey"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Flag_of_Turkey",
        "situacao": "ok",
        "texto": "The national flag of Turkey, officially the Turkish flag (Turkish: Türk bayrağı), features a white crescent and star in a red background on its emblem, based on the 18th-century flag of the Ottoman Empire. The flag is often called \"the red flag\" (al bayrak), and is referred to as \"the red banner\" (al sancak) in the Turkish national anthem. The measures, geometric proportions, and exact tone of red\n[…]\nThe star and crescent design appears on Ottoman flags beginning in the late 18th or early 19th century. The white star and crescent moon on red as the flag of the Ottoman Empire were introduced in 1844.\n[…]\nThe specification below, given by Turkish Flag Law, implies that the distance between (the left edge of) the inner circle of the crescent and a vertical line connecting the two pointed ends of the crescent is 279⁄800 G = 0.34875 G; thus, the left point of the star intrudes about 0.0154 G beyond that line."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bandeira_da_Turquia",
        "situacao": "ok",
        "texto": "A origem exata da Bandeira da Turquia é desconhecida. Sabe-se que seu emblema, uma lua crescente e uma estrela, ambas da cor branca ficam localizadas perto do centro da bandeira de cor vermelha, adotados em 1876. São basicamente os símbolos do islã, religião predominante e utilizado em vários lugares da Ásia Menor, muitos anos antes. É provável que sua estética tenha sido idealizada de acordo com \n[…]\nJá o fundo vermelho é razoável, uma vez que é uma cor predominante na história turca, um país marcado por centenas de conflitos violentos ao longo dos anos, sobretudo as batalhas sangrentas da Guerra de Independência Turca.\n[…]\nNo princípio, a bandeira turca era apenas uma lua média sobre um campo verde, modificada em 1793 quando o sultão Selim III trocou o fundo verde por vermelho. Só em 1844, acrescentou-se a estrela, que, segundo algumas teorias, remonta a época do imperador romano Constantino (fundador de Constantinopla, atual Istambul, considerada na época, o símbolo da Virgem Maria.\n[…]\nCuriosamente, há muitas lendas a respeito do significado da bandeira turca.\n[…]\nA lenda mais aceita pela população turca, no entanto, é a que conta que Mustafa Kemal Atatürk, o fundador da república turca, caminhava pelo campo na noite seguinte ao combate vitorioso durante a Guerra de Independência Turca, e percebeu o reflexo da lua crescente no hemisfério norte (que invertida, como vista na poça de sangue, passou a ser minguante) e da estrela sobre um vasto fundo de sangue no terreno de uma colina de Sakarya, surgindo assim, o significado da atual bandeira da Turquia.\n[…]\nBandeira do Império Otomano",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Real (moeda)",
      "descricao": "Moeda oficial do Brasil, criada pelo Plano Real."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Criado para acabar com a hiperinflação, o real, moeda brasileira, começou a circular em que ano?",
    "resposta": "1994",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Real_(moeda)"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Real_(moeda)",
        "situacao": "desambiguacao",
        "texto": "Real pode referir-se a:\n\n\n== Economia ==\nReal (plural: \"reais ou réis\") é a denominação de várias moedas:\n\nReal (moeda brasileira) — moeda atual do Brasil\nReal (moeda portuguesa) — moeda de Portugal até 1911\nReal (antiga moeda brasileira) — antiga moeda do Brasil\nReal espanhol — antiga moeda da Espanha\n\n\n== Natureza e ciências ==\nRealidade — estado das coisas como elas existem, em vez de como elas"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Hino Nacional Brasileiro",
      "descricao": "Hino oficial do Brasil, com música de Francisco Manuel da Silva e letra de Joaquim Osório Duque-Estrada"
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "A melodia do Hino Nacional é do século dezenove, mas a letra de Osório Duque-Estrada só foi oficializada em que ano?",
    "resposta": "1922",
    "distratores": [
      "1889",
      "1909",
      "1937"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Hino_Nacional_Brasileiro"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Hino_Nacional_Brasileiro",
        "situacao": "ok",
        "texto": "O Hino Nacional Brasileiro é um dos quatro símbolos oficiais da República Federativa do Brasil, conforme estabelece o art. 13, § 1.º, da Constituição do Brasil. Os outros símbolos da República são a Bandeira Nacional, as Armas Nacionais e o Selo Nacional. Tem letra de Joaquim Osório Duque-Estrada (1870–1927) e música de Francisco Manuel da Silva (1795–1865).\n[…]\nUm concurso realizado em 1909 escolheu a letra que deveria acompanhar a composição já aceita como a oficial do Hino; perfeccionista, Duque-Estrada efetuou daquele ano até sua oficialização em 1922, alterações em nove passagens sobre a versão inicial.\n[…]\nAtualmente, o manuscrito da letra, que é datado de 3 de agosto de 1922, integra o acervo da Academia Brasileira de Letras (ABL).\n[…]\nSempre Brilhar.”O fato é que até antes de 6 de setembro de 1922, data em que o poema de Joaquim Osório Duque Estrada foi oficializado, o Hino de Francisco Manuel da Silva permanecia sem um poema oficial, era entoado com as mais diferentes adaptações de uma localidade para outra, e não raro refletia um regionalismo contrário ao ideal de federalismo e unidade nacional.\n[…]\nEm 1917 o cantor Vicente Celestino foi o primeiro brasileiro a gravar o Hino Nacional, tendo por acompanhamento a Banda do Batalhão Naval e, nas passagens de refrão, também por um coro; esta versão, em si bemol, deu um tom de difícil interpretação pelas pessoas; a Banda deu andamento mais lento e solene nas passagens do cantor, enquanto mantinha o estilo tradicional (mais rápido e vibrante) apenas durante os refrões - o que veio a motivar apreciação oficial por uma comissão de reavaliação do Hino em 1936 e, durante algum tempo, insatisfação por parte das bandas militares da época; a despeito disso essa versão foi oficializada em 1922.\n[…]\nHino da Independência do Brasil\n[…]\nHino Nacional do BrasilArquivo em mp3.\n[…]\nHino Nacional BrasileiroArquivo *.wav."
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Bandeira da Malásia",
      "descricao": "Bandeira nacional da Malásia, com listras vermelhas e brancas e um crescente com estrela amarela num cantão azul."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "As listras da bandeira da Malásia e as pontas de sua estrela amarela existem na mesma quantidade. Qual é esse número?",
    "resposta": "Catorze",
    "distratores": [
      "Treze",
      "Doze",
      "Dezesseis"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Flag_of_Malaysia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Flag_of_Malaysia",
        "situacao": "ok",
        "texto": "The national flag of Malaysia, also known as the Stripes of Glory (Jalur Gemilang, also \"Stripes of Excellence\"), is composed of a field of 14 alternating red and white stripes along the fly, and a blue canton bearing a crescent and a 14-point star known as the Bintang Persekutuan (Federal Star).\n[…]\nIn 1997, when Malaysians were invited to name the flag, then Prime Minister Mahathir Mohamad picked the name Jalur Gemilang to project the country's onward drive toward continuous growth and success.\n[…]\nDuring the National Day celebrations, everyone is encouraged to fly the Jalur Gemilang at their homes, office buildings, shops and corporate premises.\n[…]\nThe flag anthem is written as dedication and pride of the Malaysian national flag. It is performed on the nation's independence day, also known as Hari Merdeka or Hari Kemerdekaan in Malay on 31 August every year. The original anthem Benderaku was written by Malaysian songwriter Tony Fonseka. After the flag was given the name Jalur Gemilang, the flag anthem was updated in 1997 to reflect this change.\n[…]\nGovernment vessels use the Jalur Gemilang as the state ensign. The following is a table of the other ensigns used in Malaysia with the national flag inside.\n[…]\nMuhamad Razif Nasruddin; Zarul Nazli bin Zulkhurnain (2012). \"The History and Design Chronology of Jalur Gemilang\" (PDF). Malaysia Design Archive. Make Condition Design."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bandeira_da_Mal%C3%A1sia",
        "situacao": "ok",
        "texto": "A Bandeira Nacional da Malásia foi criada em 1947 pelo designer Mohamed Hamzah. Ele foi o vencedor de um concurso. Dato' Onn Jaafar, após a vitória, sugeriu a estrela de 14 pontas. Em 19 de maio de 1950 a bandeira foi aprovada pelo rei Jorge VI. Em 26 de maio de 1950 ela foi hasteada pela primeira vez em frente a Istana Selangor. No dia 16 de setembro de 1963 foi adotada.\n[…]\nEm 31 agosto de 1997 a Bandeira da Malásia foi batizada de Jalur Gemilang, listas gloriosas, pelo primeiro ministro Tun Mahathir bin Mohammad , é semelhante a bandeira dos Estados Unidos.\n[…]\nSeu design foi baseado na Bandeira da Companhia Britânica das Índias Orientais. Possui 7 listras vermelhas em um campo branco. No canto superior direito uma lua crescente e uma estrela sobre um campo Azul.\n[…]\nAs 14 faixas representam os 13 estados da Malásia e o Território nacional. As 14 pontas da estrela tem a mesma simbologia. O campo azul representa a unidade do povo Malaio. O Amarelo presente na lua e estrela é a cor da família real. A lua crescente é um símbolo tradicional do Islã.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Bandeira do Uruguai",
      "descricao": "Bandeira nacional do Uruguai, com listras horizontais brancas e azuis e o Sol de Maio num cantão branco."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Ao lado do Sol de Maio, quantas listras horizontais, brancas e azuis, tem a bandeira do Uruguai?",
    "resposta": "Nove",
    "fonte": [
      "https://en.wikipedia.org/wiki/Flag_of_Uruguay"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Flag_of_Uruguay",
        "situacao": "ok",
        "texto": "The national flag of Uruguay (bandera nacional de Uruguay), officially known as the National Pavilion (Pabellón Nacional), is the most important of the three official flags of Uruguay along with the Artigas flag and the flag of the Treinta y Tres. It has a field of nine equal horizontal stripes alternating white and blue. The canton is white, charged with the Sun of May, from which 16 rays extend,\n[…]\nThe current flag is derived from the flags used by the Patriot party during the dissolution of the Spanish Empire in America. In the region of present-day Uruguay, the first patriotic flag was introduced in 1814 by José Gervasio Artigas, the organizer of the League of the Free Peoples. The Artigas flag used the white stripe between two blue stripes from the flag created in 1812 by Manuel Belgrano for the Army of the North commanded by him in the service of the United Provinces.\n[…]\nArtigas added red to the flag to symbolize the fight for federalism. From 1815 the main flag of the League had a red bend, but the individual provinces belonging to the league used their own combinations of blue, white and red. Uruguay, then called the Eastern Province because it covers the eastern bank of the Uruguay River, began using a horizontal tricolor of red on the top, white in the middle, and blue on the bottom.\n[…]\nThe new flag was approved on 16 December 1828. The national flag was defined as white with nine horizontal, alternating light blue stripes, leaving a white square in the upper corner, on the hoisting side, in which the Sun of May would be placed. The nine light blue stripes represented the departments into which Uruguayan territory was then divided: Canelones, Cerro Largo, Colonia, Durazno, Maldonado, Montevideo, Paysandú, San José, and Soriano.\n[…]\nList of Uruguayan flags\n[…]\nCoat of arms of Uruguay\n[…]\nUruguay at Flags of the World"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bandeira_do_Uruguai",
        "situacao": "ok",
        "texto": "A Bandeira do Uruguai ou Pavilhão Nacional é um dos símbolos nacionais do Uruguai. Adotada pelas leis de 16 de dezembro de 1828 e 12 de julho de 1830. Suas cores são o branco e o azul, apresentando um sol dourado na extremidade superior esquerda, que é a parte mais famosa da bandeira uruguaia.\n[…]\nA bandeira possui as seguintes proporções: 3x2, comprimento por largura, e o espaço que contém o sol consiste em um quadro na parte superior, junto ao mastro, que chega até a sexta faixa, exclusiva, de cor azul. A primeira listra e a última são de cor branca. O sol consiste num círculo radiante, com face, circundado por dezesseis raios, com um diâmetro de 11/15 do quadro branco. Quanto ao significado das cores, elas expressam os ideais revolucionários de Liberdade, Igualdade e Fraternidade.\n[…]\nA disposição dos elementos que compõem a bandeira do Uruguai é inspirada na bandeira dos Estados Unidos. O cantão está ocupado pelo Sol de Maio, símbolo que historicamente faz referência à independência do Vice-Reino do Rio da Prata da Espanha. As nove listras, azuis que se distribuem pelo retângulo branco representam os primeiros nove departamentos.\n[…]\nTodo cidadão natural ou legal uruguaio está, ao menos uma vez na vida, obrigado a prestar juramento de fidelidade à bandeira, em ato público e solene. Será feita a seguinte indagação ao cidadão:\n[…]\nO Uruguai é um dos poucos países no mundo que adotou três bandeiras como símbolo nacional.\n[…]\nPor sua vez, as forças da sitiada Montevidéu, leais ao Partido Colorado, dirigidos por Fructuoso Rivera, cuja cor do distintivo antes da Batalha de Carpintería a cor celeste, empunhavam uma versão da bandeira uruguaia com azul celeste bem claro, sendo apoiados por todos os Unitários de Buenos Aires no exílio.\n[…]\nLista de bandeiras do Uruguai",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Hino nacional da África do Sul",
      "descricao": "Hino nacional sul-africano adotado em 1997, que combina Nkosi Sikelel' iAfrika e Die Stem van Suid-Afrika."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "O hino nacional da África do Sul, adotado depois do apartheid, mistura quantos idiomas diferentes na letra?",
    "resposta": "Cinco",
    "fonte": [
      "https://en.wikipedia.org/wiki/National_anthem_of_South_Africa"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/National_anthem_of_South_Africa",
        "situacao": "ok",
        "texto": "The national anthem of South Africa was adopted in 1997 and is a hybrid song combining extracts of the 19th century Xhosa hymn \"Nkosi Sikelel' iAfrika\" (English: \"God Bless Africa\", lit. '\"Lord Bless Africa\"') and the Afrikaans song that was used as the South African national anthem during the apartheid era, \"Die Stem van Suid-Afrika\" (English: \"The Voice of South Africa\"), with new English lyrics\n[…]\nThe South African government adopted both songs as dual national anthems in 1994, when they were performed at Nelson Mandela's inauguration.\n[…]\nDuring the drafting of the new national anthem, it was requested by South African president Nelson Mandela that it be not more than one minute and 48 seconds in length (which was the average length of other countries' anthems being used for reference). The new English lyrics were adapted from the last four lines of the first stanza of \"Die Stem van Suid-Afrika\" (English: \"The Call of South Africa\"), with the changes made to reflect hope in post-apartheid South African society.\n[…]\nLines borrowed from the two previous national anthems were modified to be more inclusive, omitting overt reference to specific groups of the country's population groups. Thus, lines from the apartheid-era national anthem's first stanza referencing the Voortrekkers' Great Trek were omitted, as \"this was the experience of only one section of\" South African society.\n[…]\nIn recent years, the South African national anthem has come under criticism for its Afrikaans verse as it was originally part of the national anthem of South Africa that was used during the apartheid era, with some such as the Economic Freedom Fighters  calling for the verse to be removed, supposedly because of this connection.\n[…]\nNational Anthem of South Africa – Streaming audio, lyrics and information (archive link)\n[…]\nThe South African national anthem in MIDI format\n[…]\nThe South African national anthem in MP3 format"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hino_nacional_da_%C3%81frica_do_Sul",
        "situacao": "ok",
        "texto": "O hino nacional da África do Sul é uma canção híbrida, que combina versos do hino popular do Congresso Nacional Africano e outras organizações negras que atuaram na resistência contra o apartheid, Nkosi Sikelel' iAfrika (\"Deus Abençoe a África\"); seguido de versos do hino nacional anterior, utilizado durante a era do apartheid, Die Stem van Suid-Afrika (\"O Chamado da África do Sul\"). Isto o torna \n[…]\nAmbas as canções eram utilizadas como hino desde 1994, como uma medida conciliatória após o fim do apartheid, e em 1997 foram combinadas em uma peça híbrida para encurtar e unificar sua execução.\n[…]\nSua letra inclui cinco das onze línguas oficiais da África do Sul, sendo ela escrita por Enoch Sontonga e Cornelis Jacobus Langenhoven, com a nova letra da estrofe em inglês escrita por Jeanne Zaidel-Rudolph para refletir a nova era de liberdade do país.\n[…]\nO hino é, por vezes, referido incorretamente apenas como Nkosi Sikelel' iAfrika, e foi alvo de críticas pela associação de Die Stem ao regime do apartheid, por combinar canções de estilos musicais diferentes, e por ser considerado difícil de cantar.\n[…]\n«Hino nacional». Página oficial do Governo da África do Sul",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Hino à Bandeira",
      "descricao": "Hino brasileiro em homenagem à bandeira nacional, com música de Francisco Braga, que começa com Salve, lindo pendão da esperança."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que poeta parnasiano escreveu a letra do Hino à Bandeira, que começa com salve, lindo pendão da esperança?",
    "resposta": "Olavo Bilac",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Hino_%C3%A0_Bandeira_Nacional"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Hino_%C3%A0_Bandeira_Nacional",
        "situacao": "inexistente",
        "texto": ""
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "O Navio Negreiro",
      "descricao": "Poema abolicionista de Castro Alves, de 1868, que cita a bandeira brasileira como auriverde pendão."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Num poema contra a escravidão, que poeta baiano chamou a bandeira do Brasil de auriverde pendão da minha terra?",
    "resposta": "Castro Alves",
    "fonte": [
      "https://pt.wikipedia.org/wiki/O_Navio_Negreiro"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/O_Navio_Negreiro",
        "situacao": "ok",
        "texto": "O Navio Negreiro (Tragédia no Mar) é um poema de Castro Alves e um dos mais conhecidos da literatura brasileira. O poema descreve com imagens e expressões terríveis a situação dos africanos arrancados de suas terras, separados de suas famílias e tratados como animais nos navios negreiros que os traziam para ser propriedade de senhores e trabalhar sob as ordens dos feitores.\n[…]\nAfrânio Peixoto, na edição de sua Obras Completas de Castro Alves, informa que sua versão fora feita de acordo com manuscrito pertencente ao cunhado do poeta, Augusto Álvares Guimarães e cópia mantida por sua irmã e esposa deste, Adelaide, e que fora publicado originalmente na edição número 200 do Jornal da Tarde, em 23 de junho de 1870.\n[…]\nSegundo Manuel Bandeira este poema, junto a \"Vozes d'África\", deveria pertencer ao livro Os Escravos e que ambos são os \"poemas em que o Poeta atingiu a maior altura de seu estro\". Completa sua análise informando que nele \"evoca o Poeta os sofrimentos dos negros na travessia da África para o Brasil.\n[…]\nSabe-se que os infelizes vinham amontoados no porão e só subiam ao convés uma vez ao dia para o exercício higiênico, a dança forçada sob o chicote dos capatazes\", situação que Castro Alves sublimou nos versos:\n[…]\nAinda no século XIX foi feita alusão de que o poeta teria feito ali uma \"versão, ou transposição, ou reminiscência\" dos versos de Henri Heine em \"O Negreiro\"; já em 1896 Múcio Teixeira rebateu tais \"insinuações\" na seu livro \"Vida e obras de Castro Alves\", corroborado por Afrãnio Peixoto: \"Além de uma cena terrível do tráfico de escravos (que nem Heine, nem Castro Alves, inventaram) a ideia que domina nos dois é o contraste trágico da dança dos desgraçados, ainda a chicote, para distração da nostalgia que os fazia morrer.\n[…]\nCertamente realidade contada por algum negreiro, que inspirou a ironia de Heine, como a piedade de Castro Alves.\""
      }
    ]
  }
]

---

# MANIFESTO

# Manifesto de Perguntas — Mestre2

> **Versão preliminar 0.73 — 2026-10-19**
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
- no máximo **2 perguntas por âncora** em cada lote, nunca com o mesmo ângulo;
- no máximo **2 perguntas com o mesmo ângulo** para uma mesma âncora, no banco inteiro;
- no máximo **3 perguntas por âncora** no banco inteiro, somando texto e figura, e no máximo **2 com figura**. As exclusivas de uma coleção têm conta à parte (§6, "Coleções");
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
- **Resposta que é um ano ou uma data: sempre `multipla`.** Quando a resposta é um ano específico ("1969") ou uma data mais detalhada ("15 de novembro de 1889", "2 de fevereiro"), a pergunta é obrigatoriamente de múltipla escolha, com ou sem figura. Os distratores são anos (ou datas) próximos e críveis, no mesmo formato da resposta, nenhum deles também correto. A regra vale só quando **a resposta é o próprio ano ou a data**: século e década ("século dezenove", "década de 1970") e respostas em que o ano identifica outra coisa, como uma edição de Olimpíada ou de Copa ("Londres 2012", "1970, no México"), podem continuar abertas.

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

### Coleções

Uma **coleção** é um conjunto de perguntas sobre um mesmo universo, com um modo de jogo próprio (decidido em 2026-10-13). Cada coleção tem um documento próprio com as diretrizes dela; a única até agora é a de **pokémon**, do modo Pokémon, em [`modo_pokemon.md`](modo_pokemon.md).

- A pergunta da coleção tem o campo `colecao`. O modo da coleção sorteia só as perguntas dela, de qualquer tema.
- **Exclusiva** (campo `exclusiva`): a pergunta sai **só no modo da coleção**, nunca no jogo original (Master, Trilha da Vida, Linear).
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
- **Saturação:** o áudio conta no limite de 3 perguntas por âncora, e cada âncora tem no máximo 1 pergunta com áudio.
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
- No máximo **2 perguntas por âncora**, nunca com o mesmo ângulo (§4).
- **Prefira âncoras novas.** O gerador recebe a lista das âncoras e perguntas já existentes no subtema, para não repetir.

**No banco, por subtema:**
- `conexao` + `nome` somam pelo menos **20%**.
- A distribuição por ângulo e por âncora é acompanhada pelo relatório do pipeline, e os lotes seguintes são **encomendados para preencher as lacunas**.
