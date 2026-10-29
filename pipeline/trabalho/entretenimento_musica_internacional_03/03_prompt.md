Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Música Internacional** (tema **Entretenimento**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "The Beatles",
      "descricao": "Banda de rock britânica formada em Liverpool em 1960 por John Lennon, Paul McCartney, George Harrison e, depois, Ringo Starr"
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Dos quatro Beatles da formação clássica, quem era o mais velho?",
    "resposta": "Ringo Starr",
    "distratores": [
      "John Lennon",
      "Paul McCartney",
      "George Harrison"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Ringo_Starr",
      "https://en.wikipedia.org/wiki/John_Lennon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ringo_Starr",
        "situacao": "ok",
        "texto": "Sir Richard Starkey (born 7 July 1940), known as Ringo Starr, is an English musician, singer, songwriter and actor who achieved international fame as the drummer for the Beatles. He sometimes sang lead vocals on the group's recordings, usually for one song on each album; these include \"Yellow Submarine\" and \"With a Little Help from My Friends\". He also wrote and sang the Beatles songs \"Don't Pass \n[…]\nStarr said of his drumming: \"I'm no good on the technical things [...] I'm your basic offbeat drummer with funny fills [...] because I'm really left-handed playing a right-handed kit. I can't roll around the drums because of that.\" Beatles producer George Martin said: \"Ringo hit good and hard and used the tom-tom well, even though he couldn't do a roll to save his life\", but later said, \"He's got tremendous feel.\n[…]\nStarr influenced various modern drumming techniques, such as the matched grip, tuning the drums lower, and using muffling devices on tonal rings. According to Ken Micallef and Donnie Marshall, co-authors of Classic Rock Drummers: \"Ringo's fat tom sounds and delicate cymbal work were imitated by thousands of drummers.\"\n[…]\nStarr is credited as the sole composer of two Beatles songs: \"Don't Pass Me By\" and \"Octopus's Garden\", the latter written with assistance from Harrison. While promoting the Abbey Road album in 1969, Harrison recognised Starr's lyrics to \"Octopus's Garden\" as an unwittingly profound message about finding inner peace, and therefore an example of how \"Ringo writes his cosmic songs without knowing it.\" Starr is also credited as a co-writer of \"What Goes On\", \"Flying\" and \"Dig It\".\n[…]\nRingo Starr's Drummerworld profile\n[…]\nRingo Starr at AllMusic\n[…]\nRingo Starr discography at Discogs\n[…]\nRingo Starr at IMDb\n[…]\nRingo Starr at the TCM Movie Database (archived)\n[…]\nRingo Starr in the Hollywood Walk of Fame Directory\n[…]\nRingo Starr Artwork Archived 13 April 2009 at the Wayback Machine"
      },
      {
        "url": "https://en.wikipedia.org/wiki/John_Lennon",
        "situacao": "ok",
        "texto": "John Winston Ono Lennon (born John Winston Lennon; 9 October 1940 – 8 December 1980) was an English musician, songwriter and activist. He gained global fame as the founder of the Beatles, in which he was the co-lead vocalist and played rhythm guitar, later adopting lead and bass guitar, keyboards and other instruments. Lennon's songwriting partnership with Paul McCartney remains the most successfu\n[…]\nLennon initially resisted his attempts to encourage the band to present a professional appearance, but eventually complied, saying \"I'll wear a bloody balloon if somebody's going to pay me.\" McCartney took over on bass after Sutcliffe decided to stay in Hamburg, and Best was replaced with drummer Ringo Starr; this completed the four-piece line-up that would remain until the group's break-up in 1970. The band's first single, \"Love Me Do\", was released in October 1962 and reached No.\n[…]\nAs Lennon was about to record Mind Games in 1973, he and Ono decided to separate. The ensuing 18-month period apart, which he later called his \"lost weekend\" in reference to the film of the same name, was spent in Los Angeles and New York City in the company of May Pang. Mind Games, credited to the \"Plastic U.F.Ono Band\", was released in November 1973. Lennon also contributed \"I'm the Greatest\" to Starr's album Ringo (1973), released the same month.\n[…]\nHe wrote \"Cookin' (In the Kitchen of Love)\" for Starr's Ringo's Rotogravure (1976), travelling to Los Angeles in May to play on the recording, in what would be his last professional studio session until 1980.\n[…]\nWhile Lennon remained consistently friendly with Starr during the years that followed the Beatles' break-up in 1970, his relationships with McCartney and Harrison varied. He was initially close to Harrison, but the two drifted apart after Lennon moved to the US in 1971.\n[…]\nOutline of the Beatles\n[…]\nThe Beatles timeline\n[…]\nCultural impact of the Beatles"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ringo_Starr",
        "situacao": "ok",
        "texto": "Richard Starkey (Liverpool, 7 de julho de 1940), mais conhecido pelo seu nome artístico Ringo Starr, é um instrumentista, cantor, compositor e ator britânico, que obteve reconhecimento como baterista da banda The Beatles. Além de atuar como baterista, foi intérprete de vários sucessos do grupo, como \"Yellow Submarine\", \"With a Little Help from My Friends\", \"Good Night\" e as regravações de \"Boys\" e\n[…]\nMais ou menos nessa época, ele adotou o nome artístico Ringo Starr, derivado dos anéis que ele usava e também porque implicava uma influência do country e do western. Seus solos de bateria foram chamados de Starr Time.\n[…]\nStarr tocou pandeiro em \"Love Me Do\" e maracas em \"P.S. I Love You\". Preocupado com seu status nos Beatles, ele pensou: \"Esse é o fim, estão fazendo comigo o que fizeram com Pete Best\". Martin esclareceu mais tarde: \"Simplesmente não sabia como era o Ringo e não estava preparado para correr riscos\".\n[…]\nEm 19 de maio de 1980, Starr e Barbara Bach sobreviveram a um acidente de carro em Surrey, Inglaterra.\n[…]\nEm uma história muitas vezes repetida, mas apócrifa, Lennon, questionado se Starr era o melhor baterista do mundo, brincou que ele \"não era nem o melhor baterista dos Beatles\". A fala, na verdade, vem de um episódio da série de comédia Radio Active, de 1981, embora tenha ganhado mais destaque quando usada pelo comediante Jasper Carrott em 1983, três anos após a morte de Lennon. Em setembro de 1980, Lennon disse à Rolling Stone: \"Ringo era uma estrela em Liverpool antes mesmo de nos conhecermos.\n[…]\nStarr é vegetariano e medita diariamente. Segundo Mary McCartney, ele é alérgico a alho e cebola. Seu slogan e lema de vida é \"paz e amor\". No seu período com os Beatles, Ringo, assim como seus colegas, se considerava ateu. Porém, em 2010, revelou acreditar em Deus, sem detalhar uma religião específica. Ele se autodescreveu como \"um hindu cristão com tendências budistas\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "The Beatles",
      "descricao": "Banda de rock britânica formada em Liverpool em 1960 por John Lennon, Paul McCartney, George Harrison e, depois, Ringo Starr"
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Antes de Ringo Starr entrar nos Beatles, em 1962, quem era o baterista da banda?",
    "resposta": "Pete Best",
    "distratores": [
      "Stuart Sutcliffe",
      "Charlie Watts",
      "Keith Moon"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pete_Best"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pete_Best",
        "situacao": "ok",
        "texto": "Randolph Peter Best (né Scanland; born 24 November 1941) is a British retired musician who was the drummer for the Beatles from 1960 to 1962. He was dismissed shortly before the band attained global fame and is one of several people referred to as a fifth Beatle.\n[…]\nOn 11 September 1962, at the third EMI recording session, Martin used session musician Andy White on the drums for the whole session instead of Starr, as Martin had already booked White after the first session with Best. Starr played the tambourine on some songs while White played the drums. Starr told biographer Hunter Davies years later that he had thought, \"That's the end. They're pulling a Pete Best on me.\"\n[…]\nIn an issue of Bill Harry's Mersey Beat music publication in Liverpool, dated 31 August 1961, Bob Wooler reported on the Beatles' local musical impact and singled out Best for particular praise, calling the group \"musically authoritative and physically magnetic, example the mean, moody magnificence of drummer Pete Best – a sort of teenage Jeff Chandler\".\n[…]\nDavies recalled that while working with the Beatles on their authorised biography in 1968, \"when the subject of Pete Best came up, they seemed to cut off as if he had never touched their lives.\n[…]\nPete Best is a main character in David Harrower's 2001 play Presence, premiered at the Royal Court Theatre, London, dramatising the Beatles' time in Hamburg.\n[…]\nAndrew Games portrayed Pete Best in BestBeat, which was performed at the Unity Theatre in 2018. The play depicted Best's dismissal in 1962.\n[…]\nThe Pete Best Combo: Beyond the Beatles 1964–1966 (1 February 1996)\n[…]\nBest (18 August 1998)\n[…]\nComplete Pete Best Discography\n[…]\nPete Best interview from NPR Fresh Air program\n[…]\nPete Best Interview at NAMM Oral History Collection (2018)\n[…]\nPete Best at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pete_Best",
        "situacao": "ok",
        "texto": "Randolph Peter \"Pete\" Best (nascido Randolph Peter Scanland; Madras, 24 de novembro de 1941) é um músico, compositor e servidor público britânico. Ele é mais conhecido por ser integrante original e primeiro baterista dos Beatles. Após ser demitido do grupo em 1962, ele começou a sua própria banda The Pete Best Four, e participou de muitas outras bandas ao longo dos anos. Ele é uma das várias pesso\n[…]\nRingo Starr havia tocado anteriormente com Rory Storm and the Hurricanes - a banda alternativa no Kaiserkeller - e havia substituído Best quando este estava doente ou incapaz de tocar em Hamburgo e Liverpool. Harry relatou a demissão de Best na primeira página da revista Mersey Beat, perturbando muitos fãs dos Beatles. O grupo sofreu alguns protestos na rua e no palco por semanas, com alguns fãs gritando: \"Pete forever, Ringo never!\" (\"Pete para sempre, Ringo nunca!\").\n[…]\nMcCartney finalmente declarou, em seu documentário Wingspan em maio de 2001, que a saída de Best não tinha nada a ver com sua habilidade como baterista. Explicando porque Geoff Britton, ex-baterista de sua banda subsequente, Wings, \"não durou muito\" naquele grupo, McCartney disse: \"É como nos Beatles, nós tivemos Pete Best.\n[…]\nEm sua primeira passagem pelo Brasil, em novembro de 2009, Best fez apresentações, junto de sua Pete Best Band, no Rio de Janeiro e em São Paulo. Pete Best esteve no dia 9 de janeiro de 2011 em Vitória, no Espírito Santo, a convite da banda cover Clube Big Beatles, juntamente com o baterista João Barone. A apresentação contou ainda com a banda da Polícia Militar do Espírito Santo.\n[…]\nVoltou ao Brasil em 24 de setembro de 2015 para o show comemorativo de 25 anos do Clube Big Beatles, que também contou com Andreas Kisser, Ivan Lins e Jerry Adriani. Em 12 de fevereiro de 2021, a banda cover Clube Big Beatles lançou gravação ao vivo da canção \"My Bonnie\" com Pete Best na bateria.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "The Beatles",
      "descricao": "Banda de rock britânica formada em Liverpool em 1960 por John Lennon, Paul McCartney, George Harrison e, depois, Ringo Starr"
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Em abril de que ano Paul McCartney anunciou publicamente que deixava os Beatles, marcando o fim da banda?",
    "resposta": "1970",
    "distratores": [
      "1968",
      "1969",
      "1971"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Breakup_of_the_Beatles"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Breakup_of_the_Beatles",
        "situacao": "ok",
        "texto": "The Beatles were an English rock band, active from 1960 to 1970. From 1962 onwards, the band's members were John Lennon, Paul McCartney, George Harrison and Ringo Starr.\n[…]\nTheir disbandment is attributed to numerous factors, including the strain of the Beatlemania phenomenon, the 1967 death of their manager Brian Epstein, bandmates' discontent with McCartney's leadership of the band, Lennon's heroin use and his relationship with Yoko Ono, Harrison's increasingly prolific songwriting, the floundering of Apple Corps, the Get Back project (renamed Let It Be in 1970), and managerial disputes.\n[…]\nOn 20 September, Lennon privately informed his bandmates at a meeting at Apple, without Harrison present, that he was leaving the Beatles, although it was unclear to the other members whether his departure was permanent. On 10 April 1970, McCartney said in a press release that he was no longer working with the group, which sparked a widespread media reaction and worsened the tensions between him and his bandmates.\n[…]\nAnticipating the suit, Klein suggested that the other Beatles invite McCartney to a recording session in October where Lennon and Harrison were due to work on Starr's song \"Early 1970\". Klein reasoned that if McCartney attended, it would show that the Beatles' musical partnership was still active and undermine McCartney's case. McCartney did not accept the invitation. In December, Harrison and McCartney met in New York to discuss their differences but the meeting went badly.\n[…]\nMore than 20 years after Harrison's death in 2001, \"Now and Then\" was completed by McCartney and Starr, and was released as a new Beatles single in 2023.\n[…]\nThe Beatles timeline"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Separa%C3%A7%C3%A3o_de_The_Beatles",
        "situacao": "ok",
        "texto": "A separação de The Beatles foi um processo cumulativo marcado por rumores e comentários ambíguos de seus membros em respeito ao próprio futuro enquanto integrantes da banda. John Lennon, Paul McCartney, George Harrison e Ringo Starr começaram a tocar juntos como banda em 1962. Em setembro de 1969, Lennon reservadamente informou a seus companheiros de banda que estava deixando o grupo.\n[…]\nNo entanto, o fato não se tornou público até 10 de abril de 1970, quando McCartney também anunciou sua saída do grupo.\n[…]\nO rancor de McCartney com o episódio contribuiu para que ele anunciasse publicamente a sua saída dos Beatles. Ele mais tarde citou o tratamento dado por Spector a algumas canções do álbum Let It Be, em particular \"The Long and Winding Road\", como outro fator. A relevância cronológica desta última afirmação é discutida por Starr, que declarou que quando os acetatos do álbum foram enviados a cada um dos Beatles para aprovação, em 2 de abril de 1970: \"Todos nós dissemos sim.\n[…]\nEm 10 de abril, estando dentre aquele que receberam o questionário, Don Short do The Daily Mirror fez uma reportagem sobre a saída de McCartney dos Beatles sob a manchete de primeira página \"Paul Quits The Beatles\" (Paul deixa os Beatles). Jornais em todo o mundo interpretaram os comentários de McCartney como um anúncio de que a banda se separara.\n[…]\nMcCartney resolveu assim cortar seus laços com a Apple e com os Beatles, como único modo de se libertar de Klein.\n[…]\nO desejo de McCartney de dissolver a parceira era problemático, uma vez que isto exporia todos a grandes alíquotas tributárias e suas súplicas para ser dispensado da Apple foram ignorados por Lennon, Harrison e Starr. Em 31 de dezembro de 1970, McCartney entrou com um processo contra os outros três Beatles na Alta Corte de Justiça de Londres, com vistas à dissolução contratual da parceria da banda.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Michael Jackson",
      "descricao": "Cantor e dançarino americano conhecido como Rei do Pop"
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "No fim dos anos sessenta, quando os Jackson 5 estouraram na Motown, quem era o irmão mais novo do grupo?",
    "resposta": "Michael Jackson",
    "distratores": [
      "Jermaine Jackson",
      "Marlon Jackson",
      "Tito Jackson"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Jackson_5"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Jackson_5",
        "situacao": "ok",
        "texto": "The Jackson 5, currently known as The Jacksons, is an American pop band composed of members of the Jackson family. The group was formed in Gary, Indiana, in 1964, and originally consisted of brothers Jackie, Tito, Jermaine, Marlon, and Michael. They were managed by their father Joe Jackson. The group were among the first African American performers to attain a following across multiple genres.\n[…]\nIn March 1983, with Jermaine, the Jacksons performed on Motown 25: Yesterday, Today, Forever, the same show where Michael debuted the moonwalk during a solo performance of \"Billie Jean\".\n[…]\nThey were also honored with a 90-minute tribute concert featuring Jackson 5, the Jacksons, Michael Jackson, Janet Jackson and Rebbie Jackson hits, with guest appearances by Blue Note saxophonist David McMurray and Herschel Boone for Kid Rock's Twisted Brown Trucker Band. The concert finale was Michael Jackson's \"Don't Stop 'Til You Get Enough\" with Greg Phillinganes, a Detroit native who worked with the Jacksons as a session player and tour musical director.\n[…]\nThe rise of the Jackson 5 in the 1960s and 1970s coincided with the rise of a similar musical family, the Osmonds. The white Mormon brothers from Utah, were thought to be an imitation of the black Jackson 5. Michael and Donny, the lead singers from each group developed a friendship. They both went on to pursue successful solo careers.\n[…]\nOn June 15, 2018, the Jacksons accepted plaques bearing the keys to Detroit city. Detroit police chief James Craig, who presented the honors, declared the Motown group \"truly Detroiters\". They were also honored with a 90-minute tribute concert featuring Jackson 5, the Jacksons, Michael Jackson, Janet Jackson and Rebbie Jackson hits.\n[…]\nMichael Jackson – lead vocals, percussion (1964–1984, 2001; died 2009)\n[…]\nAs the Jackson 5\n[…]\nJackson 5 at Houston Livestock Show & Rodeo (1974) from Texas Archive of the Moving Image"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/The_Jackson_5",
        "situacao": "ok",
        "texto": "The Jackson 5 (também chamados de The Jackson Five, Jackson Five, The Jackson 5ive, Jackson 5ive e The Jacksons) é um grupo musical estadunidense, formado em Gary, Indiana em 1964, e originalmente consistia nos irmãos Jackie, Tito, Jermaine, Marlon e Michael Jackson. Eles eram empresariados por seu pai Joe Jackson. O grupo estava entre os primeiros artistas afro-americanos a realizar um crossover \n[…]\nOs Jackson 5 gravaram quinze álbuns para a Motown, e Michael, Jermaine e Jackie ainda gravaram álbuns solo como parte da \"franquia\" Jackson Five. Muitos dos sucessos dos Jackson Five foram produzidos por produtores da Motown – Berry Gordy, Freddie Perren, Alphonzo Mizell, Deke Richards e Hal Davis.\n[…]\nO grupo The Jacksons gravaria o álbum \"The Jacksons Live\", em 1981, e depois fez um intervalo. Jermaine regressou para a gravação e turnê do álbum Victory de 1984. Michael e Mick Jagger participam na música \"State of Shock\", que foi o maior êxito desse disco.\n[…]\nEm 1984, fizeram uma turnê de encerramento da banda, já que Michael Jackson decidiu seguir apenas como artista solo, pois entendia que sua carreira estava mais bem-sucedida que a carreira em grupo. A turnê Victory Tour, que passou por várias cidades dos Estados Unidos e Canadá, foi a última e mais famosa turnê dos The Jacksons, marcando o fim da banda.\n[…]\nEm setembro de 2010, Jermaine Jackson realizou seu próprio concerto de \"tributo\" para Michael em Las Vegas. Em 2011, Jackie Jackson lançou um single solo para o iTunes, enquanto Jermaine lançou seu primeiro álbum solo em 21 anos, I Wish U Love. Após o lançamento de um álbum solo, Marlon deixou o mundo da música em 1989 e investiu em imóveis. Randy não é ativo na indústria desde que ele se separou do grupo Randy & the Gypsys em 1991.\n[…]\nMichael Jackson – vocais principais, conga, pandeiro, percussão (1965–1984, 2001; morreu em 2009)\n[…]\n«The Jackson 5 Biography» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Michael Jackson",
      "descricao": "Cantor e dançarino americano conhecido como Rei do Pop"
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Em 1983, no especial de TV Motown 25, Michael Jackson apresentou que passo de dança em que parece deslizar para trás?",
    "resposta": "Moonwalk",
    "distratores": [
      "Robô",
      "Running man",
      "Twist"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Moonwalk_(dance)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Moonwalk_(dance)",
        "situacao": "ok",
        "texto": "The moonwalk, or backslide, is a popping dance move in which the performer glides backwards but their body actions suggest forward motion. It became popular around the world when American singer Michael Jackson performed the move during the performance of \"Billie Jean\" on Motown 25: Yesterday, Today, Forever, which was broadcast in 1983; he later incorporated it in tours and live performances. Jac\n[…]\nAnother early moonwalker was popper and singer Jeffrey Daniel, who moonwalked in a performance of Shalamar's \"A Night to Remember\" on Top of the Pops in the UK in 1982 and was known to perform backslides in public performances (including weekly Soul Train episodes) as far back as 1974. Michael Jackson was a fan of Jeffrey Daniel's dancing and would eventually seek him out.\n[…]\nAt this point, Ron Wiesner Jackson's management contacted Caszper to arrange private dance lessons for Jackson in June 1981. Caszper, who claims to have a copy of the check and original contract, spent one week privately instructing Jackson how to perform the moonwalk. Jackson first danced in public on March 25, 1983, during the television special, Motown 25: Yesterday, Today, Forever, in front of a live audience at the Pasadena Civic Auditorium.\n[…]\nMoonwalking received widespread attention, and from then on, the moonwalk became Jackson's signature move for his song \"Billie Jean\". Nelson George said that Jackson's rendition \"combined Jackie Wilson's athleticism with James Brown's camel walk\". Following the Motown 25 special, Jackson contacted Daniel to master the technique further once Daniel returned from tour.\n[…]\nIn the 1984 movie Streets of Fire, actor and performer Stoney Jackson executed a moonwalk as the leader of a fictional group, The Sorels, who lip-synced to the Dan Hartman song \"I Can Dream About You\". The movie was filmed in the northern spring of 1983, also predating the iconic Michael Jackson moonwalk."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Moonwalk",
        "situacao": "ok",
        "texto": "O moonwalk ou backslide é um passo de dança do popping (funk) em que o dançarino se move para trás enquanto parece caminhar para frente. Tornou-se notório após o cantor Michael Jackson executa-lo no especial de TV em 1983.\n[…]\nExistem relatados do moonwalk e passos semelhantes executados pelo cantor Cab Calloway na década de 1930. Em 1985, este disse que naquela época o passo era chamado de \"The Buzz\".\n[…]\nExistem diversas instâncias registradas do moonwalk; passos semelhantes, feitos pelo cantor norte-americano Cab Calloway, foram relatados já em 1932. Em 1985, Calloway disse que o passo era chamado de \"The Buzz\" quando ele e outros artistas o faziam na década de 1930.\n[…]\nEm 1944, Judy Garland e Margaret O'Brien fizeram algo similar ao moonwalk em sua performance de \"Under the Bamboo Tree\", no filme Meet Me in St. Louis, mas o passo não cria a ilusão criada pelo verdadeiro moonwalk.\n[…]\nEm 1958, o dançarino-comediante mexicano Adalberto Martínez \"Resortes\" também realizou o moonwalk no filme Colegio de Verano (Escola de Verão).\n[…]\nEm um episódio da série de TV H.R. Pufnstuf, de novembro de 1969, Judy the Frog ensina a todos uma nova dança chamada \"The Moonwalk\", que inclui duas instâncias de um moonwalk estacionário.\n[…]\nEm 1972, no episódio 9 da 5ª temporada da série Here's Lucy, chamado \"Lucy e Jim Bailey\", Lucie Arnaz faz o moonwalk enquanto canta \"Fever\" com Jim Bailey.\n[…]\nO passo tornou-se conhecido mundialmente após o cantor norte-americano Michael Jackson executa-lo durante apresentação de \"Billie Jean\" no especial de TV Motown 25: Yesterday, Today, Forever, ocorrido em 25 de março de 1983, e transmitido em 16 de maio de 1983. Posteriormente, este veio a tornar-se o passo mais famoso do cantor.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Spice Girls",
      "descricao": "Grupo pop feminino britânico formado em 1994, de Wannabe"
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Quando as Spice Girls estouraram com Wannabe, em 1996, qual delas, com apenas vinte anos, era a caçula do grupo?",
    "resposta": "Emma Bunton",
    "distratores": [
      "Melanie Chisholm",
      "Melanie Brown",
      "Geri Halliwell"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Emma_Bunton",
      "https://en.wikipedia.org/wiki/Spice_Girls"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Emma_Bunton",
        "situacao": "ok",
        "texto": "Emma Lee Bunton (born 21 January 1976) is an English singer, actress and media personality. She rose to fame in the mid-1990s as a member of the pop group the Spice Girls, in which she was nicknamed Baby Spice, due to the fact that she was the youngest member and \"wore pigtails and sucked a lollipop\". With over 100 million records sold worldwide, the Spice Girls are the best-selling female group i\n[…]\nEmma Lee Bunton was born on 21 January 1976 in Finchley, Barnet, London. Her parents, Pauline, a karate instructor, and Trevor Bunton, a milkman, split when she was 11, after which she stayed with her mother. She has a younger brother, Paul James. As stated in a TV interview with Eamonn Holmes and Ruth Langsford on This Morning during August 2016, Bunton's maternal family originate from County Wexford, Ireland. Bunton went to St Theresa's Roman Catholic Primary School in Finchley.\n[…]\nOn 12 August 2012, after much speculation, Bunton and the Spice Girls performed a medley of \"Wannabe\" and \"Spice Up Your Life\" at the 2012 Summer Olympics closing ceremony, reuniting as a quintet for the last time for the event.\n[…]\nIn November 2018, Bunton reunited with the Spice Girls to announce a UK and Ireland Stadium tour, Spice World - 2019 Tour, which began at Croke Park, Dublin on 24 May 2019 and ended in London, England on 15 June 2019.\n[…]\nThe inclusive theater company, Chickenshed, of which Bunton has been a patron for many years, also joined her onstage for a rendition of the Spice Girls song \"Mama\".\n[…]\nBunton left Heart London Breakfast at Christmas 2018 to focus on the 2019 Spice Girls Tour. She currently still presents the Sunday Evening Heart Show, Hearts Feel Good Weekend with Emma Bunton.\n[…]\nEmma Bunton's Christmas Party - Live at the Royal Albert Hall (2019)\n[…]\nEmma Bunton and Friends (2022)\n[…]\nEmma Bunton on Heart Radio\n[…]\nEmma Bunton at IMDb"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Spice_Girls",
        "situacao": "ok",
        "texto": "The Spice Girls were an English girl group, formed in 1994, consisting of Mel B (\"Scary Spice\"), Melanie C (\"Sporty Spice\"), Emma Bunton (\"Baby Spice\"), Geri Halliwell (\"Ginger Spice\"), and Victoria Beckham (\"Posh Spice\"). They have sold more than 100 million records worldwide, making them the best-selling girl group in history. With their \"girl power\" slogan, the Spice Girls redefined the girl gr\n[…]\nHeart Management turned to the group's vocal coach, Pepi Lemer, to find a replacement. After Lemer's first recommendation declined the offer, Lemer recommended her former pupil Emma Bunton, who auditioned for the Herberts and joined as the fifth member.\n[…]\nEmma Bunton: As Baby Spice, she was the youngest member of the group, wore her long blonde hair in pigtails, wore pastel (particularly pink) babydoll dresses and platform sneakers, had an innocent smile and a girly girl personality.\n[…]\nLady Gaga performed as Emma Bunton (Baby Spice) in high school talent shows and Emma Stone chose the name \"Emma\" inspired by Emma Bunton after she previously used the name Riley Stone. The group have also been noted for the memorable outfits they have worn, the most iconic being Halliwell's Union Jack dress from the 1997 Brit Awards.\n[…]\nThe Spice Girls became media icons in Great Britain and a regular feature of the British press. During the peak of their worldwide fame in 1997, the paparazzi were constantly seen following them everywhere to obtain stories and gossip about the group, such as a supposed affair between Emma Bunton and manager Simon Fuller, or constant split rumours which became fodder for numerous tabloids.\n[…]\nEmma Bunton / \"Baby Spice\" (1994–2000, 2007–2008, 2012, 2016, 2018–2019)\n[…]\nSpice Girls (1997). Emma \"Baby Talking\": Official Spice Girls Pocket Books. Carlton Books. ISBN 0-233-99322-3.\n[…]\nSinclair, David (2008). Spice Girls Revisited (2nd ed.). Omnibus Press. ISBN 978-1-84609-068-4."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Emma_Bunton",
        "situacao": "ok",
        "texto": "Emma Lee Bunton (Finchley, 21 de janeiro de 1976) é uma cantora, compositora, atriz e personalidade da mídia britânica. Ela alcançou a fama na década de 1990 como integrante do grupo Spice Girls, do qual era apelidada de Baby Spice, refletindo o fato de ser a integrante mais jovem. Com mais de 100 milhões de discos vendidos mundialmente, Spice Girls é o grupo feminino mais vendido de todos os temp\n[…]\nEm 28 de junho de 2007, Emma Bunton aparece com Geri Halliwell, Melanie B, Victoria Beckham e Melanie C Spice Girls andando inesperadamente pelas ruas de Londres anunciando o retorno das Spice Girls depois de 6 anos separadas e 9 sem Geri Halliwell. Em uma coletiva de imprensa em Londres, anunciaram um Greatest Hits e uma turnê mundial. Cerca de 1.000.000 fãs se registraram para comprar ingressos no site do grupo apenas no primeiro dia, o que ocasionou o acréscimo de novas datas para a turnê.\n[…]\nEm 26 de junho de 2012, Emma se reuniu com todas as Spice Girls numa conferência de imprensa em Londres, para promover o lançamento de Viva Forever! (um musical) no teatro, que estreou no final do mesmo ano, em temporada única. Em 12 de agosto, após várias especulações, Bunton e as Spice Girls se apresentaram na Cerimônia de encerramento dos Jogos Olímpicos de Verão de 2012, onde performaram um medley com \"Wannabe\" e \"Spice Up Your Life\".\n[…]\nEm 2016, foi confirmada uma nova reunião de Emma com as Spice Girls, em comemoração aos 20 anos de lançamento do single de estreia \"Wannabe\". Uma turnê também foi cogitada, mas apenas com a participação de Geri, Emma e Mel B, sendo chamada de Spice Girls GEM. No começo de 2017, tal apresentação foi cancelada, devido à gravidez de Geri Halliwell; com Emma voltando-se novamente ao seu trabalho na televisão e rádio.\n[…]\n«Página Oficial de Emma Bunton» (em inglês)\n[…]\nEmma Bunton no Myspace",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Bee Gees",
      "descricao": "Grupo pop formado pelos irmãos Barry, Robin e Maurice Gibb, astros da era disco"
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Entre os três irmãos Gibb que formavam os Bee Gees, qual era o primogênito?",
    "resposta": "Barry Gibb",
    "distratores": [
      "Robin Gibb",
      "Maurice Gibb",
      "Andy Gibb"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Barry_Gibb",
      "https://en.wikipedia.org/wiki/Bee_Gees"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Barry_Gibb",
        "situacao": "ok",
        "texto": "Sir Barry Alan Crompton Gibb (born 1 September 1946) is a British musician. Along with his younger fraternal twin brothers, Robin and Maurice, he rose to global fame as a founder of the Bee Gees, one of the most commercially successful groups in the history of popular music, and is its only surviving member. Gibb is well known for his wide vocal range, including a far-reaching high-pitched falsett\n[…]\n1 on the US Adult contemporary chart. In 1981, the Bee Gees released Living Eyes. Songs from the album were not disco and the album was not a commercial success. In 1982, Clive Davis asked Gibb to write for Dionne Warwick, who was on his Arista label. Barry produced Warwick's Heartbreaker. The songs were all written by Gibb except \"Our Day Will Come\". In August 1983, after Gibb met Kenny Rogers who asked for some songs, Gibb recorded his first demo for Rogers entitled \"Eyes That See in the Dark\".\n[…]\nOn 10 July 2009, Gibb was made a Freeman of the Borough of Douglas (Isle of Man). The award was also bestowed upon his brother Robin and posthumously upon his brother Maurice. In late 2009, Barry and Robin announced plans to record and perform together once again as the Bee Gees.\n[…]\nBarry's son Steve was also on stage as lead guitarist and sang a Maurice composition, \"On Time\". On 20 May 2012, Robin Gibb died, making Barry the sole surviving Gibb brother.\n[…]\nBarry was honoured at the 46th Annual Kennedy Center Honors in December 2023. In 2024, Gibb focused his attention on pre-production of the planned Bee Gees biopic, serving as executive producer.\n[…]\nIn 2007 Gibb was ranked by Q magazine at No. 38 on its list of '100 Greatest Singers'.\n[…]\nAustralian musician David Campbell, praising Gibb, compared the Beach Boys and the Bee Gees: 'And like Brian Wilson, Barry Gibb's melodies made the songs timeless.'\n[…]\nBarry Gibb official website\n[…]\nBarry Gibb at IMDb\n[…]\nBarry Gibb discography at Discogs"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Bee_Gees",
        "situacao": "ok",
        "texto": "The Bee Gees ( BEE jeez)\n[…]\nIn late 2020, a documentary titled The Bee Gees: How Can You Mend a Broken Heart was released on HBO Max; it was received with positive reviews and won an Emmy award. A few months later, an as-yet-untitled biopic about the Bee Gees was announced to be in development at Paramount, with Kenneth Branagh directing and Barry Gibb serving as an executive producer.\n[…]\nAfter Maurice's death, the Bee Gees were also inducted into the Dance Music Hall of Fame in 2001, they were made Ivor Novello fellows and inducted into London's Walk of Fame in 2006 and the Musically Speaking Hall Of Fame in 2008. On 15 May 2007, the Bee Gees were named BMI Icons at the 55th annual BMI Pop Awards. Collectively, Barry, Maurice and Robin Gibb have earned 109 BMI Pop, Country and Latin Awards.\n[…]\nOn 14 February 2013, Barry Gibb unveiled a statue of the Bee Gees as well as unveiling \"Bee Gees Way\" (a walkway filled with photos and videos of the Bee Gees) in honour of the Bee Gees in Redcliffe, Queensland, Australia. On 27 June 2018, Barry Gibb, the last surviving member of the Bee Gees, was knighted by Prince Charles after being named on the Queen's New Year's Honours List. The statue of the Bee Gees in Douglas, Isle of Man, was installed in 2021.\n[…]\nIn 2022, Barry Gibb was made an Honorary Companion of the Order of Australia which is Australia's highest national honour. In 2023, Barry became a Kennedy Center Honoree for being a \"pop music pioneer\".\n[…]\nBarry Gibb – vocals, rhythm guitar (1958–2003, 2006, 2009–2012)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Barry_Gibb",
        "situacao": "ok",
        "texto": "Sir Barry Alan Crompton Gibb Kt, CBE (Douglas, 1 de setembro de 1946) é um cantor, compositor, produtor e guitarrista britânico. Tornou-se mundialmente famoso como um dos membros dos Bee Gees, do qual é o único integrante ainda vivo.\n[…]\nNa década de 1980, os Bee Gees deixaram a carreira como cantores um pouco de lado e investiram na produção de discos para outros artistas. Barry produziu After Dark para o irmão caçula Andy Gibb, e Guilty para Barbra Streisand, que vendeu mais de vinte milhões de cópias no mundo inteiro. Em um último trabalho como produtor, Barry Gibb assinou a trilha sonora do filme Hawks.\n[…]\nEm 14 de fevereiro de 2009 se apresentou no Love and Hope Ball, interpretando os sucessos dos Bee Gees, com participações de Olivia Newton-John e seu filho Steve Gibb. Em março de 2009, Barry se apresentou no Sound Relief em Sydney, na Austrália, interpretando os grandes sucessos dos Bee Gees, novamente ao lado de Olivia Newton-John, show que ainda conta com apresentações de vários artistas como a banda Coldplay.\n[…]\nBarry Gibb também está em quarto lugar entre os produtores com mais canções que ficaram em primeiro lugar com 14 músicas e também aparece na quarta colocação entre os compositores com mais canções que ficaram em primeiro lugar, com 16 músicas ao todo, perdendo apenas para Paul McCartney (32), John Lennon (26) e Mariah Carey (17).\n[…]\nEmbora seja canhoto, Barry toca guitarra com a mão direita.\n[…]\nEm 2009, Barry lamentou publicamente a morte do astro Michael Jackson, declarando que este era \"um amigo de total confiança\" e que perdeu um membro muito importante de sua família. Michael Jackson também era padrinho de Michael Gibb, o quarto filho de Barry e Linda.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Queen",
      "descricao": "Banda de rock britânica formada em Londres em 1970, de Freddie Mercury e Brian May"
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Na formação clássica do Queen, qual integrante nasceu por último?",
    "resposta": "John Deacon",
    "distratores": [
      "Roger Taylor",
      "Brian May",
      "Freddie Mercury"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/John_Deacon",
      "https://en.wikipedia.org/wiki/Roger_Taylor_(Queen_drummer)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/John_Deacon",
        "situacao": "ok",
        "texto": "John Richard Deacon (born 19 August 1951) is an English retired musician who was the bass guitarist for the rock band Queen. He wrote several songs for the group, including Top 10 hits \"You're My Best Friend\", \"Another One Bites the Dust\" and \"I Want to Break Free\"; and co-wrote \"Under Pressure\", \"Friends Will Be Friends\" and \"One Vision\".\n[…]\nDeacon was inducted into the Rock and Roll Hall of Fame as a member of Queen in 2001 and into the Songwriters Hall of Fame in 2003.\n[…]\nOn Queen's first album (1973) he was credited as \"Deacon John\", to make him \"sound more interesting\". He asked to be credited under his real name, which was done on all albums from Queen II (1974) onwards.\n[…]\nDeacon played bass on Mercury's single with Montserrat Caballe \"How Can I Go On\" and also worked with Elton John and Hot Chocolate's Errol Brown.\n[…]\nIn a 2014 interview with Rolling Stone magazine regarding the forthcoming Queen + Adam Lambert North American tour with Adam Lambert, May and Taylor said that they no longer had much contact with Deacon except regarding finances, with Taylor stating that Deacon had \"completely retired from any kind of social contact\" and describing him as \"a little fragile\". May added, however, \"he still keeps an eye on the finances, though. John Deacon is still John Deacon.\n[…]\nDeacon usually played the bass with his fingers, only using a plectrum on some songs. He counted his influences as Chic, Michael Jackson and Stevie Wonder. His favourite bass players were Chris Squire of the progressive rock band Yes and The Who's John Entwistle. A trademark of Deacon's playing is his bass runs. A 1975 review of Sheer Heart Attack said, \"Only at the end would a new initiate to Queen recognize John Deacon's unmistakable trademark...\n[…]\nQueen songs Deacon wrote that were released as singles:\n[…]\nSelected Queen album tracks:"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Roger_Taylor_(Queen_drummer)",
        "situacao": "ok",
        "texto": "Roger Meddows Taylor (born 26 July 1949) is an English musician, songwriter and record producer. He achieved international fame as the drummer and backing vocalist for the rock band Queen. As a drummer, Taylor was recognised early in his career for his unique sound and was voted the eighth-greatest drummer in classic rock music history in a listener poll conducted by Planet Rock in 2005. He was in\n[…]\nBulsara convinced the remaining two members of Smile to continue and he eventually joined the band, which he renamed Queen. In 1971, they recruited bassist John Deacon, before going on to release their self-titled debut album in 1973. Taylor is the third most credited songwriter for the band, usually contributing one or two tracks per album.\n[…]\nTaylor's next solo venture, Strange Frontier, came in June 1984. The three singles from the album were the title track, \"Beautiful Dreams\" (in Portugal only) and \"Man on Fire\", the latter becoming a live favourite for him in later years. No attempts to promote the singles were made since Queen was touring to promote The Works, with Taylor not even performing on any TV shows. Strange Frontier included guest appearances by bandmates Freddie Mercury, Brian May and John Deacon.\n[…]\nOn 5 and 6 September 2015, Taylor, along with Led Zeppelin's John Paul Jones, joined Foo Fighters on stage in Milton Keynes to perform a cover of the Queen and David Bowie song \"Under Pressure\". Taylor released a new single called \"Gangsters Are Running This World\" on 1 April 2019, and on 8 April released a more rocking version of this song called \"Gangsters Are Running This World-Purple Version\". Both versions became available for streaming on 8 April 2019.\n[…]\nQueen in Cornwall – includes an extensive description of Roger Taylor's early career"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/John_Deacon",
        "situacao": "ok",
        "texto": "John Richard Deacon (Leicester, 19 de agosto de 1951) é um músico britânico aposentado, mais conhecido por ter sido o baixista e um dos compositores da banda de rock Queen. Foi o último dos quatro membros a entrar para o grupo em 1971 e também o mais jovem, tendo apenas 19 anos quando foi efetivado.\n[…]\nDepois do show Freddie Mercury Tribute Concert, em 1992, o baixista se apresentou com o Queen e mais o amigo de Mercury, Elton John, em apenas uma única música: \"The Show Must Go On\"  (Elton John inicialmente tinha cantado a faixa com a banda no tributo a Freddie Mercury). Deacon contribuiu para outra música do Queen: \"No-One But You (Only The Good Die Young)\", lançado em 1997 no álbum Queen Rocks - depois disso ele se aposentou da indústria da música.\n[…]\nJohn Richard Deacon nasceu em Leicester em 19 de agosto de 1951, filho de Arthur Henry e Lilian Molly Deacon. Sua irmã mais nova, Julie, nasceu cinco anos depois. Seu pai trabalhou na companhia de seguros Norwich Union e em 1960 a família se mudou para a cidade dormitório de Oadby. Deacon era conhecido pelos amigos e companheiros de banda como 'Deaks' ou 'Deaky' e estudou na Linden Junior School em Leicester, Gartree High School e Beauchamp Grammar School em Oadby.\n[…]\nDeacon geralmente tocava baixo com os dedos, em vez de usar uma palheta. Ele diz que suas maiores influências são Chic, Michael Jackson e Stevie Wonder. Seus baixistas favoritos são Chris Squire da banda de rock progressivo Yes e John Entwistle do The Who. Uma crítica de 1975 do Sheer Heart Attack disse \"Somente no final há uma nova iniciativa para o Queen reconhecer a inconfundível marca registrada de John Deacon ...\n[…]\nCom o Queen\n[…]\nCanções do Queen que Deacon escreveu que foram lançadas como singles:\n[…]\nPágina de John Deacon no QueenOnline, site oficial do Queen (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Violino",
      "descricao": "Instrumento de cordas friccionadas com arco, o menor e mais agudo da família do violino."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Das quatro cordas do violino, qual é a de som mais grave?",
    "resposta": "Sol",
    "distratores": [
      "Ré",
      "Lá",
      "Mi"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Violino",
      "https://en.wikipedia.org/wiki/Violin"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Violino",
        "situacao": "ok",
        "texto": "O violino é um instrumento musical, classificado como Instrumento de cordas ou cordofone. Foi inventado por Gasparo de Salò, um italiano que viveu entre os anos 1540 e 1609. O termo \"violino\" foi introduzido na língua portuguesa no século XX. Até então, a designação do instrumento era rabeca, palavra que ainda se utiliza em muitos lugares.\n[…]\nÉ o menor e mais agudo dos instrumentos de sua família  (que ainda possui a viola, o violoncelo e o contrabaixo) e corresponde ao Soprano da voz humana. O violino possui quatro cordas percutidas, com afinação da mais aguda à mais grave: O timbre do violino é agudo, brilhante e estridente, mas dependendo do encordoamento utilizado e da forma que é tocado, podem-se produzir timbres mais aveludados. O som geralmente é produzido pela ação de friccionar as cerdas de um arco de madeira sobre as cordas.\n[…]\nA extensão do violino é do Sol 3 (mais grave e a última corda solta), ao Si 6 (3 notas antes da mais aguda que se pode ouvir).\n[…]\nPizzicato (beliscado) [produzido pela mão direita]: Os violinistas nem sempre usam o arco quando tocam. O pizzicato consiste em tocar as cordas com os dedos, dando pequenos puxões ou beliscadas (o dedo indicador é o mais comumente utilizado). Às vezes, em partes de orquestra ou de música solo virtuosa, o pizzicato com a mão esquerda é indicado na partitura por um sinal de “+” abaixo ou acima da nota.\n[…]\nNeste caso, quando três ou quatro notas simultâneas são tocadas, o violinista geralmente “divide” o acorde, escolhendo tocar primeiro a nota ou notas mais baixas antes de imediatamente continuar para as notas mais altas, com a ressonância natural do instrumento produzindo um efeito semelhante ao de se tocar todas as quatro notas. Quando há velocidade e pressão suficientes, é possível tocar 3 cordas ao mesmo tempo.\n[…]\nHistória do violino\n[…]\n«Partes do violino em detalhes»"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Violin",
        "situacao": "ok",
        "texto": "The violin, sometimes referred to as a fiddle, is a wooden chordophone, and is the smallest, and thus highest-pitched instrument (soprano) in regular use in the violin family. Smaller violin-type instruments exist, including the violino piccolo and the pochette, but these are virtually unused.\n[…]\nThe Swiss-Cuban violinist Yilian Cañizares mixes jazz with Cuban music.\n[…]\nViolins also appear in ensembles supplying orchestral backgrounds to many jazz recordings.\n[…]\nAs well as the Arabic rababah, the violin has been used in Arabic music.\n[…]\nViolin authentication is the process of determining the maker and manufacture date of a violin. This can be an important process as significant value may be attached to violins made either by specific makers or at specific times and locations. Analysis on design, model, wood characteristics, and varnish texture can be used to authenticate a violin. Forgery and other methods of fraudulent misrepresentation can be used to inflate the value of an instrument.\n[…]\nLalitha, Muthuswamy (2004). Violin techniques in Western and South Indian classical music: a comparative study. Sundeep Prakashan. ISBN 9788175741515. OCLC 57671835.\n[…]\nSchoenbaum, David, The Violin: A Social History of the World's Most Versatile Instrument, New York, New York : W.W. Norton & Company, December 2012. ISBN 9780393084405.\n[…]\nYoung, Diana. A Methodology for Investigation of Bowed String Performance Through Measurement of Violin Bowing Technique. PhD Thesis. M.I.T., 2007.\n[…]\nEnglish-speaking violin organizations\n[…]\nViolin Society of America Archived 2024-11-10 at the Wayback Machine\n[…]\nBeare's International Violin Society\n[…]\nHarrison, Robert William Frederick (1911). \"Violin\" . Encyclopædia Britannica. Vol. 28 (11th ed.). pp. 102–107.\n[…]\nThe violin: provenance, value and appraisal"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Violino",
      "descricao": "Instrumento de cordas friccionadas com arco, o menor e mais agudo da família do violino."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "O arco do violino é tradicionalmente encordoado com pelos da crina de que animal?",
    "resposta": "Cavalo",
    "distratores": [
      "Cabra",
      "Camelo",
      "Boi"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Bow_(music)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bow_(music)",
        "situacao": "ok",
        "texto": "In music, a bow () is a tensioned stick which has hair (usually horse-tail hair) coated in rosin (to facilitate friction) affixed to it. It is moved across some part (generally some type of strings) of a musical instrument to cause vibration, which the instrument emits as sound. The vast majority of bows are used with string instruments, such as the violin, viola, cello, and bass, although some bo\n[…]\nSlightly different bows, varying in weight and length, are used for the violin, viola, cello, and double bass.\n[…]\nThe underlying reasons for the change from the old Corelli-Tartini model to the Cramer and, finally, to the Tourte were naturally related to musical demands on the part of composers and violinists.\n[…]\nA Stradivari bow, The King Charles IV Violin Bow attributed to the Stradivari Workshop, is currently in the collection of the National Music Museum Object number: 04882, at the University of South Dakota in Vermillion, South Dakota. The Rawlins Gallery violin bow, NMM 4882, is attributed to the workshop of Antonio Stradivari, Cremona, c. 1700.\n[…]\nIn the 20th century, violinists and cellists used a so-called Curved Bow to enable polyphonic sounds on string instruments. Renowned string instrumentalists such as Emil Telmányi, Rudolf Gaehler, Tossy Spivakovsky, Lorin Maazel, Michael Bach, Gustav Rivinius, Janos Starker and Mstislav Rostropovich, as well as composers such as John Cage, Dieter Schnebel, Walter Zimmermann, Hans Zender and Michael Bach Bachtischa have dealt with this innovation in string instrument playing.\n[…]\nIn vernacular speech, the bow is occasionally called a fiddlestick. Bows for particular instruments are often designated as such: violin bow, cello bow, and so on.\n[…]\nYoung, Diana. A Methodology for Investigation of Bowed String Performance Through Measurement of Violin Bowing Technique. PhD Thesis. M.I.T., 2007.\n[…]\nThe violin bow: a brief depiction of its history"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Arco_%28m%C3%BAsica%29",
        "situacao": "ok",
        "texto": "O arco é um dispositivo utilizado para produção de som em idiofones ou cordas a partir da fricção destes com um feixe de crina.\n[…]\nO arco é feito de madeira (especialmente de pau-brasil) e fios de crina de cavalo (ou de plástico tipo nylon), que são ajustados às duas extremidades da peça de madeira, longa e curva. A crina tem ajuste de tensão feito por um parafuso colocado no talão, extremidade que é segurada pela mão direita do músico (a outra extremidade do arco denomina-se ponta).\n[…]\nUm fabricante de arcos, ou archetier, geralmente utiliza entre 150 e 200 crinas da cauda de um cavalo para um arco de violino. Arcos para outros membros da família do violino normalmente têm uma faixa de crina mais larga, utilizando mais fios.\n[…]\nExiste uma crença amplamente difundida entre instrumentistas de cordas — ainda não comprovada ou refutada cientificamente — de que a crina branca produz um som mais “suave”, enquanto a crina preta (usada principalmente em arcos de contrabaixo) é mais grossa e, portanto, produz um som mais “áspero”. Arcos de qualidade inferior (baratos) muitas vezes utilizam nylon ou crina sintética, e alguns usam crina de cavalo descolorida para simular maior qualidade.\n[…]\nAté hoje, os pelos de cauda de cavalo usados para arcos são obtidos de lugares com climas rigorosamente frios, incluindo a Mongólia, pois esses pelos oferecem melhor aderência às cordas. A breu, essencial para produzir som mesmo com pelos mais ásperos, é usada por arqueiros tradicionais para manter a integridade da corda e (misturada com cera de abelha) para proteger o acabamento do arco.\n[…]\nGuitarra com arco",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "The Rolling Stones",
      "descricao": "Banda de rock britânica formada em Londres em 1962, de Mick Jagger e Keith Richards"
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Que fundador dos Rolling Stones foi encontrado morto na piscina de casa em 1969, semanas depois de deixar a banda?",
    "resposta": "Brian Jones",
    "distratores": [
      "Charlie Watts",
      "Bill Wyman",
      "Ronnie Wood"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Brian_Jones"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Brian_Jones",
        "situacao": "ok",
        "texto": "Lewis Brian Hopkin Jones (28 February 1942 – 3 July 1969) was an English musician and one of the founders of the Rolling Stones. Initially a slide guitarist, he went on to play electric guitar, sing backing vocals and play a wide variety of instruments on Rolling Stones recordings and in concerts.\n[…]\nWyman said in 2002, \"As the years go by, I become even more convinced that he's entitled to a free pardon. Brian Jones is a legend, and his legacy is there for all to hear. While the Rolling Stones damaged all of us in some way, Brian was the only one that died.\"\n[…]\nThe Psychic TV song \"Godstar\" is about Jones's death, as are Robyn Hitchcock's \"Trash\", the Drovers' \"She's as Pretty as Brian Jones Was\", Jeff Dahl's \"Mick and Keith killed Brian\", Ted Nugent's \"Death by Misadventure\", Cameron Winter's \"The Rolling Stones\", and Salmonblaster's \"Brian Jones\".\n[…]\nThe 2005 film Stoned is a fictionalised account of Jones's death and his role in the Rolling Stones, partly based on Geoffrey Giuliano's book Paint It Black: The Murder of Brian Jones (1994). The part of Brian was played by English actor Leo Gregory.\n[…]\nJones's musicianship and contribution to the band are featured heavily in the documentary Crossfire Hurricane. Another documentary, Rolling Stone: Life and Death of Brian Jones, directed by Danny Garcia and distributed by Dudeski and Chip Baker Films, was released in 2020.\n[…]\nLet It Bleed (1969)\n[…]\nGered Mankowitz, Brian Jones: Like a Rollin' Stone\n[…]\nTerry Rawlings (1994), Who Killed Christopher Robin?: The Life and Death of Brian Jones, ISBN 978-0-7522-0989-0\n[…]\nAlan Clayson, Brian Jones, ISBN 978-1-86074-544-7\n[…]\nMandy Aftel, Death of a Rolling Stone: The Brian Jones Story (Delilah Books, 1982) ISBN 978-0-933328-37-2\n[…]\nBrian Jones interviewed on the Pop Chronicles (1969)\n[…]\nBrian Jones discography at Discogs"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Brian_Jones",
        "situacao": "ok",
        "texto": "Lewis Brian Hopkin Jones (Cheltenham, Gloucestershire, 28 de fevereiro de 1942 – Hartfield, 3 de julho de 1969) foi um músico inglês e membro-fundador da banda The Rolling Stones.\n[…]\nNa primavera de 1962, Jones convidou Jagger e Richards para formar uma banda, que se chamaria The Rolling Stones, inspirado no trecho de uma canção de Muddy Waters (Rollin' Stone) que dizia: \"… pedras rolantes não criam musgo…\", e cujo nome foi utilizado oficialmente, pela primeira vez, em sua apresentação no Marquee Club de Londres em 12 de julho de 1962. Posteriormente Brian e o então promotor da banda, Andrew Loog Oldham, a rebatizaram, chamando-a de Rolling Stones.\n[…]\nNo dia 3 de julho de 1969, aos 27 anos de idade, Jones foi encontrado pela sua namorada afogado no fundo de sua piscina. No final do filme Stoned, realizado em 2005, supõe-se que sua morte foi causada por Frank Thorogood, um dos empreiteiros que trabalhava em reformas na casa de Brian. Encontra-se sepultado no Cheltenham Cemetery and Crematorium, Cheltenham, Gloucestershire na Inglaterra.\n[…]\nEm agosto de 2009, a Polícia de Sussex decidiu realizar uma revisão do caso da morte de Jones pela primeira vez desde 1969, após novas evidências serem entregues a eles por Scott Jones, um jornalista investigativo, que havia rastreado muitas das pessoas que estavam na casa de Brian Jones na noite em que ele morreu. O jornalista também descobriu arquivos policiais não vistos mantidos nos Arquivos Nacionais.\n[…]\nBarbara aparece no documentário de 2019 Rolling Stone: Life and Death of Brian Jones, que defende a teoria do assassinato.\n[…]\n1965 - Rolling Stones Now!\n[…]\n1964 - Stewed And Keefed (Brian's Blues)\n[…]\nBrian Jones (em inglês) no Find a Grave",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "The Rolling Stones",
      "descricao": "Banda de rock britânica formada em Londres em 1962, de Mick Jagger e Keith Richards"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Os Rolling Stones tiraram o nome de uma canção de que bluesman americano?",
    "resposta": "Muddy Waters",
    "distratores": [
      "B.B. King",
      "Robert Johnson",
      "Howlin' Wolf"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Rolling_Stones",
      "https://en.wikipedia.org/wiki/Rollin%27_Stone"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Rolling_Stones",
        "situacao": "ok",
        "texto": "The Rolling Stones are an English rock band formed in 1962. Active for over six decades, they are one of the most popular, influential, and enduring bands of the rock era. In the early 1960s, the band pioneered the gritty, rhythmically driven sound that came to define hard rock.\n[…]\nThe Rolling Stones' first US tour in June 1964 was \"a disaster\", according to Wyman. \"When we arrived, we didn't have a hit record [there] or anything going for us.\" When the band appeared on the variety show The Hollywood Palace, that week's guest host, Dean Martin, mocked both their hair and their performance. During the tour they recorded for two days at Chess Studios in Chicago, meeting many of their most important influences, including Muddy Waters.\n[…]\nThe Rolling Stones reached No. 20 on the Billboard Hot 100 in 1982 with \"Hang Fire\". Their 1981 American Tour was their biggest, longest, and most colourful production to date. It was the highest-grossing tour of that year. It included a concert at Chicago's Checkerboard Lounge with Muddy Waters, in one of his last performances before his death in 1983. Some of the shows were recorded. This resulted in the 1982 live album Still Life (American Concert 1981) which reached No. 4 in the UK and No.\n[…]\nThey pioneered the \"raw, blues-based sound\" that came to define hard rock and has been viewed as the musical \"vanguard of a major transfusion\" of various cultural attitudes, making them accessible to youth in Britain and the rest of the world. Muddy Waters was quoted as saying that the Rolling Stones and other English bands piqued the interest of American youth in blues musicians.\n[…]\nThe Rolling Stones at AllMusic\n[…]\nThe Rolling Stones discography at Discogs\n[…]\nThe Rolling Stones discography at MusicBrainz"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Rollin%27_Stone",
        "situacao": "desambiguacao",
        "texto": "Rolling Stone is an American magazine focusing on popular culture.\nRolling Stone or Rolling Stones may also refer to:\n\n\n== Music ==\nThe Rolling Stones, a rock band\n\n\n=== Albums and EPs ===\nThe Rolling Stones (album), 1964, by the Rolling Stones\nThe Rolling Stones (EP), 1964, by the Rolling Stones\nRollin' Stone, 2012, by Stevie Stone\nRolling Stone (album), 2024, by D-Block Europe\n\n\n=== Songs ===\n\"R"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/The_Rolling_Stones",
        "situacao": "ok",
        "texto": "The Rolling Stones é uma banda de rock britânica formada em Londres no ano de 1962. Ativos por mais de seis décadas, são uma das bandas mais populares, influentes e duradouras da era do rock. No início dos anos 1960, a banda foi pioneira no som cru e ritmicamente marcante que viria a definir o hard rock.\n[…]\nForam convidados pelo guitarrista Brian Jones em 1962 a montar a definitiva banda de R&B branca, que se chamaria The Rolling Stones, inspirado no nome de uma canção de Muddy Waters, Rollin' Stone, cujo nome foi utilizado oficialmente, pela primeira vez, em sua apresentação no Marquee Club de Londres em 12 de julho de 1962.\n[…]\nOs primeiros singles, um cover de uma canção de Chuck Berry e Muddy Waters de cada lado, Come On/I Want To Be Loved, e uma gravação para uma composição da dupla John Lennon e Paul McCartney, I Wanna Be Your Man, foram bem aceitos. O primeiro álbum, chamado simplesmente The Rolling Stones, saiu em abril de 1964, contendo apenas uma composição de Jagger e Richards.\n[…]\nCom a excursão americana no mesmo ano, os Rolling Stones definitivamente inauguram a moda de shows gigantescos de duração de três horas, palcos móveis e desmontáveis e toneladas de equipamentos de som e luz.\n[…]\nEm 2020 os Rolling Stones celebraram o 58º aniversário de criação da banda, que ostenta o título do conjunto de rock mais antigo ainda em atividade.\n[…]\nOs Rolling Stones assinalam o 60.º aniversário da banda com uma série documental, divida em quatro partes e exibida no canal EPIX, que se foca nos membros mais icónicos do grupo britânico.\n[…]\nEm 1 de Junho em Madrid, os Rolling Stones iniciaram a digressão europeia Sixty.\n[…]\nSegue abaixo uma lista de todas as turnês realizadas pelos The Rolling Stones, e os shows realizados no Brasil e em Portugal:\n[…]\nRolling Stones no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "The Rolling Stones",
      "descricao": "Banda de rock britânica formada em Londres em 1962, de Mick Jagger e Keith Richards"
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Em 1963, o segundo single dos Rolling Stones, I Wanna Be Your Man, foi composto por dois integrantes de que outra banda britânica?",
    "resposta": "The Beatles",
    "distratores": [
      "The Kinks",
      "The Who",
      "The Animals"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/I_Wanna_Be_Your_Man"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/I_Wanna_Be_Your_Man",
        "situacao": "ok",
        "texto": "\"I Wanna Be Your Man\" is a Lennon–McCartney-penned song first recorded and released as a single by the Rolling Stones, and then recorded by the Beatles for their second studio album With the Beatles. The song was primarily written by Paul McCartney, and finished by\n[…]\nThe B-side of the second single was \"Stoned\", a \"Green Onions\"–influenced instrumental composed by Nanker/Phelge, the early collective pseudonym for the group. Additionally, it included the \"Sixth Stone\" pianist Ian Stewart, making it the first released self-penned composition, with added spoken asides by Mick Jagger. Some original 1963 copies were issued with the misprinted title as \"Stones\", making it doubly collectable as a rarity.\n[…]\nOn 1 January 1964, the Stones' \"I Wanna Be Your Man\" was performed on the first episode of the BBC's Top of the Pops, making them the first band to appear on the show. A performance of the song on The Arthur Haynes Show recorded on 7 February 1964 appears in the 1995 docu-series The Beatles Anthology and as part of the bonus material on the 2012 documentary film Crossfire Hurricane.\n[…]\nThe Beatles' version was sung by Ringo Starr and appeared on the group's second UK album, With the Beatles, released 22 November 1963 and on the US release Meet the Beatles!, released on 20 January 1964. It was driven by a heavily tremoloed, open E-chord on a guitar played through a Vox AC30 amplifier. John Lennon was dismissive of the song in 1980, saying:\n[…]\nThe song was parodied in 1964 by the Barron Knights on their hit single \"Call Up the Groups (Medley)\" (Columbia DB.7317), in which they imitated the Rolling Stones' version. It was also recorded by Les Baronets in French as \"Oh!\n[…]\nI wanna be your lover, baby, I wanna be your man."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/I_Wanna_Be_Your_Man",
        "situacao": "ok",
        "texto": "\"I Wanna Be Your Man\" é uma canção composta pela dupla Lennon/McCartney e gravada separadamente pelos Beatles e pelos Rolling Stones, sendo a versão dos Stones lançada semanas mais cedo. Tal música foi primeiramente escrita por Paul McCartney, sendo finalizada por ele e John Lennon no canto de um quarto enquanto Mick Jagger e Keith Richards conversavam.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Pink Floyd",
      "descricao": "Banda britânica de rock progressivo formada em Londres em 1965"
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Que fundador e primeiro líder do Pink Floyd deixou a banda em 1968, afetado por problemas de saúde mental?",
    "resposta": "Syd Barrett",
    "distratores": [
      "Roger Waters",
      "David Gilmour",
      "Richard Wright"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Syd_Barrett"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Syd_Barrett",
        "situacao": "ok",
        "texto": "Roger Keith \"Syd\" Barrett (6 January 1946 – 7 July 2006) was an English singer, guitarist and songwriter who co-founded the rock band Pink Floyd in 1965. Until his departure in 1968, he was Pink Floyd's frontman and primary songwriter, known for his whimsical style of psychedelia and stream-of-consciousness writing. As a guitarist, he was influential for his free-form playing and for employing eff\n[…]\nBarrett was musically active for just over ten years. With Pink Floyd, he recorded the first three singles, their debut album, The Piper at the Gates of Dawn (1967), part of their second album, A Saucerful of Secrets (1968), and several songs that were not released until later. He departed in April 1968 amid speculation of mental illness and his use of psychedelic drugs.\n[…]\nBarrett's decline had a profound effect on Waters' songwriting, and the theme of mental illness permeated the later Pink Floyd albums The Dark Side of the Moon (1973), Wish You Were Here (1975) and The Wall (1979). The reference to a \"steel rail\" in the song \"Wish You Were Here\"—\"can you tell a green field from a cold steel rail?\"—references a recurring theme in Barrett's song \"If It's In You\" from The Madcap Laughs.\n[…]\nBut I'll say the psychedelic experience might well have acted as a catalyst. Still, I just don't think he could deal with the vision of success and all the things that went with it.\" According to Gilmour in a 1974 interview, the other members of Pink Floyd approached the psychiatrist R. D. Laing with the \"Barrett problem\". After hearing a tape of a Barrett conversation, Laing declared him \"incurable\".\n[…]\nBarrett (1970)\n[…]\nThe Pink Floyd and Syd Barrett Story (2003)\n[…]\nHave You Got It Yet? The Story of Syd Barrett and Pink Floyd (2023)\n[…]\nThe Syd Barrett Archives\n[…]\nOfficial trailer for Have You Got It Yet? The Story of Syd Barrett and Pink Floyd\n[…]\nSyd Barrett at AllMusic\n[…]\nSyd Barrett discography at Discogs"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Syd_Barrett",
        "situacao": "ok",
        "texto": "Roger Keith \"Syd\" Barrett (Cambridge, 6 de janeiro de 1946 — Cambridge, 7 de julho de 2006) foi um cantor, produtor, poeta, guitarrista e pintor inglês, mais lembrado como um dos fundadores do Pink Floyd. Vieram de Barrett as principais ideias musicais e estilísticas daquela que, então, era uma banda de rock psicadélico. Todavia, especulações sobre sua deterioração mental, agravada pelo exagerado \n[…]\nDe acordo com os jornais locais, Barrett deixou aproximadamente £ 1,7 milhões para seus dois irmãos e duas irmãs. Esta soma foi, aparentemente, adquirida amplamente a partir de royalties de compilações do Pink Floyd e gravações ao vivo com músicas que ele escreveu enquanto estava com a banda.\n[…]\nUm concerto de homenagem chamado \"Games for May\" foi realizado em Barbican Center, em Londres, a 10 de maio de 2007, com Robyn Hitchcock, Captain Sensible, Damon Albarn, Chrissie Hynde, Kevin Ayers e seus colegas de banda Pink Floyd atuando. Uma série de eventos chamado The City Wakes foi realizada em Cambridge em outubro de 2008 para celebrar a vida, a arte e a música de Barrett. A irmã de Barrett, Rosemary Breen, apoiou esta, a primeira série de eventos oficiais em memória de seu irmão.\n[…]\nEm 1988, a EMI Records (após a pressão constante de Malcolm Jones) lançou um álbum do estúdio de Barrett e um material inédito registrado de 1968 a 1970 sob o título Opel. O disco foi originalmente configurado para incluir as músicas inéditas de Barrett no Pink Floyd, \"Scream Thy Last Scream\" e \"Vegetable Man\", que foram remixadas para o álbum por Jones, mas a banda puxou as duas músicas antes de Opel ser finalizado.\n[…]\nDe acordo com Gilmour em uma entrevista a Nick Kent, os outros membros do Pink Floyd se aproximaram do psiquiatra R. D. Laing com o \"problema Barrett\". Depois de ouvir uma fita de uma conversa de Barrett, Laing o declarou \"incurável\".\n[…]\n1970: Barrett\n[…]\nThe Pink Floyd and Syd Barrett Story (2003)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Led Zeppelin",
      "descricao": "Banda britânica de hard rock formada em 1968 por Jimmy Page, Robert Plant, John Paul Jones e John Bonham"
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Que integrante do Led Zeppelin morreu em 1980, levando os outros três a encerrar a banda?",
    "resposta": "John Bonham",
    "distratores": [
      "Jimmy Page",
      "Robert Plant",
      "John Paul Jones"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/John_Bonham",
      "https://en.wikipedia.org/wiki/Led_Zeppelin"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/John_Bonham",
        "situacao": "ok",
        "texto": "John Henry Bonham (31 May 1948 – 25 September 1980) was an English musician who was the drummer of the rock band Led Zeppelin. Noted for his speed, power, fast single-footed kick drumming, distinctive sound, and feel for groove, he is regarded as one of the greatest and most influential drummers in history.\n[…]\nBonham was born in 1948 in Redditch, Worcestershire, and took up drums at age 5, receiving a snare drum at age 10 and a full drum set at age 15. He played with multiple local bands both at school and following school, eventually playing in two different bands with Robert Plant. Following the demise of the Yardbirds in 1968, Bonham joined Plant, guitarist Jimmy Page and bass guitarist John Paul Jones to form Led Zeppelin.\n[…]\nIn 1969, Bonham appeared on The Family Dogg's A Way of Life, with Page and Led Zeppelin bassist John Paul Jones. Bonham also played for Screaming Lord Sutch on Lord Sutch and Heavy Friends in 1970. He played on Lulu's 1971 single \"Everybody Clap\", written by Maurice Gibb and Billy Lawrie. In 1972, he played on a Maurice Gibb-produced album by Jimmy Stevens called Don't Freak Me Out in the UK and Paid My Dues in the US, credited as \"Gemini\" (his star sign).\n[…]\nThe surviving members of Led Zeppelin reunited to play Live Aid in 1985 and employed two drummers, Phil Collins and Tony Thompson, to take his place. In June 2017, John Bonham's childhood home received a blue plaque in his honour.\n[…]\nBonham, Mick (2003). Bonham by Bonham: My Brother John. Solihull: Icarus Publications. ISBN 0-9545717-0-3.\n[…]\nBonham, Mick (2005). John Bonham: The Powerhouse Behind Led Zeppelin. Southbank Publishing. ISBN 1-904915-11-6.\n[…]\nKushins, C. M. (2021). Beast: John Bonham and the Rise of Led Zeppelin. Hachette Books. ISBN 978-0306846687.\n[…]\nThe 23 John Henry Bonham Drum Outtakes\n[…]\nJohn Bonham at IMDb"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Led_Zeppelin",
        "situacao": "ok",
        "texto": "Led Zeppelin were  an English rock band formed in London in 1968. The band comprised vocalist Robert Plant, guitarist Jimmy Page, bass-guitarist and keyboardist John Paul Jones and drummer John Bonham. Their combination of a heavy electric-guitar sound with elements of blues and folk music popularised album-oriented rock and stadium rock and established them as the progenitor of hard rock and heav\n[…]\nOne involved John Bonham riding a motorcycle through a rented floor of the Riot House, while another involved the destruction of a room in the Tokyo Hilton, leading to the group being banned from that establishment for life. Although Led Zeppelin developed a reputation for trashing their hotel suites and throwing television sets out of the windows, some suggest that these tales have been exaggerated.\n[…]\nAfter the 23 July show at the Day on the Green festival at the Oakland Coliseum in Oakland, California, Bonham and members of Led Zeppelin's support staff were arrested after a member of promoter Bill Graham's staff was badly beaten during the band's performance by Zeppelin manager Peter Grant and one of his security staff, John Bindon. The following day's second Oakland concert was the group's final live appearance in the United States.\n[…]\nAfter midnight, Bonham, who had fallen asleep, was taken to bed and placed on his side. At 1:45 pm the next day, Benji LeFevre (Led Zeppelin's new tour manager) and John Paul Jones found Bonham dead. The cause of death was asphyxiation from vomit; the finding was accidental death. An autopsy found no other recreational drugs in Bonham's body.\n[…]\nPlant then added lyrics before Page and Bonham developed their parts.\n[…]\nJohn Paul Jones – bass, keyboards (1968–1980, 1985, 1988, 1995, 2007)\n[…]\nJohn Bonham – drums, percussion (1968–1980; died 1980)\n[…]\nJason Bonham – drums, percussion, backing vocals (1988, 1995, 2007)\n[…]\nLed Zeppelin (1969)\n[…]\nLed Zeppelin's channel on YouTube"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/John_Bonham",
        "situacao": "ok",
        "texto": "John Henry Bonham (Redditch, 31 de maio de 1948 – Clewer, 25 de setembro de 1980) foi um músico e compositor inglês, mais conhecido por ter sido o baterista da banda Led Zeppelin. Aclamado pela crítica e sendo reconhecido como um dos melhores bateristas do mundo até os dias atuais, Bonham era admirado por sua velocidade, potência, sons característicos, e sensibilidade para o groove.\n[…]\nJohn Henry Bonham nasceu em 31 de maio de 1948 em Redditch, Worcestershire, Inglaterra. Quando era muito pequeno costumava a batucar em caixotes e latas de café quando tinha apenas 5 anos, imitando os movimentos dos seus ídolos Gene Krupa e Buddy Rich (Vale lembrar que Bonham era um baterista autodidata). Aos quinze anos recebeu a sua primeira bateria a sério: uma Premier. Quando ele deixou a escola, para ajudar seu pai em uma empresa de construção.\n[…]\nJason Bonham, filho de John Bonham, tocou bateria na primeira apresentação da formação \"original\" do Led Zeppelin após 27 anos.\n[…]\nJohn Bonham tinha dois irmãos: o seu irmão mais novo, Mick Bonham (1951-2000), foi um discotecário, autor e fotógrafo e sua irmã mais nova, Deborah Bonham (nascida em 1962), é cantora e compositora.\n[…]\nOs restos mortais de Bonham foram cremados e suas cinzas sepultadas em 12 de outubro de 1980 no cemitério da Igreja de São Miguel, Rushock , Worcestershire.\n[…]\nNa opinião dos fãs da banda, é o melhor baterista de todos os tempos, influenciando vários bateristas, desde os mais conhecidos até os menos. John Bonham utilizava baterias da marca Ludwig, de vários modelos, porém, os de destaque foram: Green Sparkle (1972) e Amber Vistalite (1973-1975).\n[…]\n1970 - Led Zeppelin III\n[…]\n1971 - Led Zeppelin IV\n[…]\nBonham, Mick (2003). Bonham by Bonham: My Brother John. Solihull: Icarus Publications. ISBN 0-9545717-0-3\n[…]\nWelch, Chris & Nicholls, Geoff (2001). John Bonham: A Thunder of Drums. San Francisco: Backbeat Books. ISBN 0-87930-658-0",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "The Doors",
      "descricao": "Banda de rock americana formada em Los Angeles em 1965, liderada pelo vocalista Jim Morrison"
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "A banda The Doors não tinha baixista fixo. Quem fazia as linhas de baixo nos shows?",
    "resposta": "Tecladista Ray Manzarek",
    "distratores": [
      "Guitarrista Robby Krieger",
      "Baterista John Densmore",
      "Vocalista Jim Morrison"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Ray_Manzarek",
      "https://en.wikipedia.org/wiki/The_Doors"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ray_Manzarek",
        "situacao": "ok",
        "texto": "Raymond Daniel Manzarek Jr. ( man-ZAYR-ik; né Manczarek; February 12, 1939 – May 20, 2013) was an American keyboardist, vocalist, and music producer. He is best known as a member of the rock band the Doors, co-founding the group in 1965 with fellow UCLA Film School graduate Jim Morrison. Manzarek is credited for his innovative playing and abilities on organ-style keyboard instruments.\n[…]\nManzarek's brothers Rick and Jim Manczarek are musicians, who all played together for Rick & the Ravens. Manzarek removed the 'C' from his surname Manczarek around when the Doors started playing gigs in 1965.\n[…]\nHe was surrounded by his wife and brothers. Krieger said upon hearing the news of his death, \"I was deeply saddened to hear about the passing of my friend and bandmate Ray Manzarek today. I'm just glad to have been able to have played Doors songs with him for the last decade. Ray was a huge part of my life, and I will always miss him.\" Densmore said, \"There was no keyboard player on the planet more appropriate to support Jim Morrison's words. Ray, I felt totally in sync with you musically.\n[…]\nIn April 2018, the film Break On Thru: A Celebration of Ray Manzarek and the Doors premiered at the 2018 Asbury Park Music & Film Festival. The film highlights the 2016 concert in honor of what would have been Manzarek's 79th birthday, including new footage and interviews. The film won the APMFF Best Film Feature Award at the festival.\n[…]\nLook Each Other in The Ears. Hen House Studio Album includes The Doors : Ray Manzarek, Robby Krieger, and John Densmore. 2014\n[…]\nFor director Oliver Stone's film The Doors (1991), Manzarek was portrayed by Kyle MacLachlan.\n[…]\nManzarek, Ray (1999). Light My Fire: My Life with the Doors. New York City: Berkley Boulevard Books. ISBN 0-425-17045-4.\n[…]\nRay Manzarek official website\n[…]\nRay Manzarek at IMDb\n[…]\nRay Manzarek Interview at NAMM Oral History Collection December 8, 2008"
      },
      {
        "url": "https://en.wikipedia.org/wiki/The_Doors",
        "situacao": "ok",
        "texto": "The Doors were an American rock band formed in Los Angeles in 1965, comprising vocalist Jim Morrison, keyboardist Ray Manzarek, guitarist Robby Krieger, and drummer John Densmore. They are considered one of the most innovative, influential and eclectic rock bands in history, primarily due to their pioneering experimentation with a great variety of musical styles and techniques and Morrison's poeti\n[…]\nIn late 1965, after Manzarek's two brothers left, guitarist Robby Krieger joined.\n[…]\nDue to legal battles with Densmore and the Morrison estate over use of the Doors name, they changed their name several times and ultimately toured under the name \"Manzarek–Krieger\" or \"Ray Manzarek and Robby Krieger of the Doors\". The group toured extensively throughout their career. In July 2007, Densmore announced he would not reunite with the Doors unless Eddie Vedder of Pearl Jam was the lead singer.\n[…]\nIn the book The Doors, Manzarek states, \"That Oliver Stone thing did real damage to the guy I knew: Jim Morrison, the poet.\" In addition, Manzarek claims that he wanted the movie to be about all four members of the band, not only Morrison. Densmore asserts, \"A third of it's fiction.\" In the same volume, Krieger agrees with the other two, but also says, \"It could have been a lot worse.\" The film's soundtrack album reached No.\n[…]\nThe 2018 Asbury Park Music & Film Festival has announced the film submission award winners. The ceremony was held on Sunday, April 29 at the Asbury Hotel hosted by Shelli Sonstein, two-time Gracie Award winner, co-host of the Jim Kerr Rock and Roll Morning Show on Q104.3 and APMFF Board member. The film Break on Thru: Celebration of Ray Manzarek and The Doors, won the best length feature at the festival.\n[…]\nManzarek, Ray (1998). Light My Fire: My Life With the Doors. New York: Putnam. ISBN 978-0-399-14399-1.\n[…]\nRay Manzarek Interview at NAMM Oral History Library December 8, 2008"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ray_Manzarek",
        "situacao": "ok",
        "texto": "Raymond Daniel Manzarek Jr. (nascido Manczarek; 12 de fevereiro de 1939 – 20 de maio de 2013) foi um tecladista americano. Ele é mais conhecido como membro da banda de rock The Doors, co-fundando a banda em 1965 com Jim Morrison, também estudante da UCLA Film School. Junto com Alan Price do The Animals, Manzarek é creditado por suas habilidades em instrumentos de teclado estilo órgão, sendo pionei\n[…]\nManzarek foi incluído no Hall da Fama do Rock and Roll em 1993 como membro do Doors. Ele foi membro cofundador da Nite City de 1977 a 1978, e da Manzarek-Krieger de 2001 até sua morte em 2013. O USA Today o descreveu como \"um dos melhores tecladistas de todos os tempos\".\n[…]\nO Doors não tinha um baixista (exceto durante as sessões de gravação), então, para apresentações ao vivo, Manzarek tocava as partes do baixo em um teclado de piano Fender Rhodes. Seu som característico era o do órgão combo Vox Continental, um instrumento usado por muitas outras bandas de rock psicodélico da época. Ele também usou um órgão combo Gibson G-101 Kalamazoo (que parece um Farfisa) para os álbuns posteriores da banda.\n[…]\nFord. Ele também trabalhou extensivamente com o roteirista de Hearts of Fire e ex-líder do SRC, Scott Richardson, em uma série de gravações de blues e palavra falada intitulada \"Tornado Souvenirs\". Manzarek produziu os primeiros quatro álbuns da banda punk seminal X, também contribuindo ocasionalmente nos teclados. Dois deles também foram incluídos na lista dos 500 Melhores Álbuns de Todos os Tempos da Rolling Stone.\n[…]\nEm 2009, Manzarek colaborou com \"Weird Al\" Yankovic tocando teclado no single \"Craigslist\", que é um pastiche dos Doors. No dia da morte de Manzarek, Yankovic publicou um vídeo pessoal desta sessão de estúdio que ele disse ter sido uma \"extrema honra\" e \"um dos pontos altos absolutos da minha vida\". Em maio de 2010, Manzarek gravou com o guitarrista de slide Roy Rogers.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Thriller",
      "descricao": "Álbum de Michael Jackson produzido por Quincy Jones"
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Na faixa-título do álbum Thriller, de Michael Jackson, a narração assustadora e a risada final são de que astro do cinema de terror?",
    "resposta": "Vincent Price",
    "distratores": [
      "Christopher Lee",
      "Boris Karloff",
      "Peter Cushing"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Thriller_(song)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Thriller_(song)",
        "situacao": "ok",
        "texto": "\"Thriller\" is a song by the American singer Michael Jackson. It was released by Epic Records on November 11, 1983, in the UK and on January 23, 1984, in the US, as the seventh and final single from his sixth album of the same name (1982).\n[…]\n\"Thriller\" is a disco song featuring a synthesizer bassline, lyrics, and sound effects evoking horror films. It includes a spoken-word poem performed by the horror actor Vincent Price. It was produced by Quincy Jones and written by Rod Temperton, who wanted to write a theatrical song to suit Jackson's love of film.\n[…]\nWith the title decided, Temperton wrote lyrics within \"a couple of hours\". The intro features sound effects such as a creaking door, thunder, footsteps, winds, and howling wolves. For the ending, Temperton envisioned a spoken-word sequence, but did not know what form it should take. It was decided to have a famous voice from the horror genre perform it, and Jones's then-wife, Peggy Lipton, suggested her friend Vincent Price.\n[…]\nTo record the howls, Swedien set up tape recorders around his dog in a barn overnight, but it never howled. Instead, Jackson recorded the wolf howls himself, combined with sound library effects. For the creaking doors, Swedien rented doors designed for sound effects from the Universal Studios Lot and recorded the hinges. Vincent Price recorded his part in two takes; Jones, acknowledging that doing a voice-over for a song is difficult, praised Price and described his takes as \"fabulous\".\n[…]\nJackson's record company refused to finance it, believing Thriller had peaked, so a making-of documentary, Making Michael Jackson's Thriller, was produced to receive financing from television networks.\n[…]\nMichael Jackson's Thriller\n[…]\nThriller (viral video)\n[…]\nThrill the World"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Thriller_%28can%C3%A7%C3%A3o%29",
        "situacao": "ok",
        "texto": "\"Thriller\" é uma canção de 1982 pelo cantor e compositor americano Michael Jackson como parte de seu sexto álbum de estúdio, Thriller. Foi lançada como o sétimo e último single do álbum em 12 de novembro de 1983.\n[…]\nA canção foi produzida por Quincy Jones e escrita por Rod Temperton, que queria escrever uma canção teatral para se adequar ao amor de Jackson pelo cinema. A música e as letras evocam filmes de terror, com efeitos sonoros como trovões, passos e uivos. A canção termina com uma sequência falada pelo ator de filmes de terror Vincent Price, que a encerra emitindo uma risada memorável.\n[…]\nDepois de uma perseguição pela floresta, a cena se abre e percebe-se que a história na verdade era um filme de terror chamado Thriller e estrelado por Vincent Price. Assustada, a namorada de Jackson sai do cinema e ele a segue. Na rua, Michael a provoca, cantando boa parte da canção. Os dois passam em frente a um cemitério e zumbis começam a sair de suas covas. Eles seguem o casal, que se vê cercado por eles. De repente, Michael também se transforma em zumbi.\n[…]\nA coreografia foi filmada e colocada no YouTube, recebendo mais de 14 milhões de dowloads em menos de um mês. Recentemente uma companhia de teatro européia colocou em cartaz o musical Thriller Live que conta toda a história de Michael, desde a época dos Jackson Five até o álbum Invincible.\n[…]\nMichael Jackson - Thriller no YouTube",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Abbey Road",
      "descricao": "Álbum dos Beatles lançado em 1969, com a capa da banda atravessando uma faixa de pedestres em Londres"
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Na famosa capa de Abbey Road, com os Beatles atravessando a faixa de pedestres, qual deles aparece descalço?",
    "resposta": "Paul McCartney",
    "distratores": [
      "John Lennon",
      "George Harrison",
      "Ringo Starr"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Abbey_Road"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Abbey_Road",
        "situacao": "ok",
        "texto": "Abbey Road is the eleventh studio album by the English rock band the Beatles, released on 26 September 1969 by Apple Records. It is the last album the group recorded – although Let It Be had mostly been recorded earlier, its release was delayed due to production issues. Abbey Road was mostly recorded in April, July and August 1969, and topped the record charts in both the United States and the Uni\n[…]\nThe second engineer, John Kurlander, had been instructed not to throw out anything, so after McCartney left, he attached the track to the end of the master tape after 20 seconds of silence. The Beatles liked this effect and included it on the album; Kurlander recalls, \"I'm only assuming this, but ... [Paul] must have liked hearing 'Her Majesty' tacked on the end. The Beatles always picked up on accidental things. It came as a nice surprise there at the end.\"\n[…]\nThe cover image has been parodied on several occasions, including by Booker T. & the M.G.'s McLemore Avenue (1970), Kanye West's Late Orchestration (2006) and by McCartney on his 1993 live album Paul Is Live. On the cover of its October 1977 issue, the satirical magazine National Lampoon depicted the four Beatles flattened along the zebra crossing, with a road roller driving away up the street. The Red Hot Chili Peppers' The Abbey Road E.P.\n[…]\nWhile matching albums such as Sgt. Pepper in terms of popularity, Abbey Road failed to repeat the Beatles' earlier achievements in galvanising their rivals to imitate them. In author Peter Doggett's description, \"Too contrived for the rock underground to copy, too complex for the bubblegum pop brigade to copy, the album influenced no one – except [Paul McCartney]\", who spent years trying to emulate its scope in his solo career.\n[…]\nBeatles comments on each song\n[…]\nBeatles engineer Geoff Emerick on Abbey Road – A track-by-track walkthrough\n[…]\nThe Beatles y la foto de la portada de Abbey Road"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Abbey_Road",
        "situacao": "ok",
        "texto": "Abbey Road é o décimo primeiro álbum de estúdio da banda britânica de rock The Beatles, lançado em 26 de setembro de 1969 pela Apple Records. É o último álbum que o grupo gravou, embora Let It Be (1970) tenha sido o último álbum concluído antes da separação da banda em abril de 1970. Foi gravado principalmente em abril, julho e agosto de 1969, e liderou as paradas de discos nos Estados Unidos e no\n[…]\nA capa do álbum, com os Beatles atravessando a faixa de pedestres ao lado de fora do Abbey Road Studios (até então oficialmente chamado de EMI Studios), é uma das mais famosas e imitadas de todos os tempos.\n[…]\nDurante as sessões para o medley, Paul gravou \"Come and Get It\", tocando todos os instrumentos. Foi assumido que era uma gravação demo para outro artista, mas McCartney disse mais tarde que originalmente pretendia adicioná-la em Abbey Road. Em vez disso, foi regravada por Badfinger, enquanto a gravação original de Paul apareceu em Anthology 3.\n[…]\nThe Abbey Road E.P., de Red Hot Chili Peppers, parodia a capa, com a banda caminhando quase nua em uma faixa de pedestres semelhante. Em 2003, várias empresas de cartazes dos EUA removeram o cigarro de McCartney da imagem sem a permissão da Apple ou de Paul. Em 2013, a Polícia de Calcutá lançou um anúncio de sensibilização para a segurança no trânsito contra a travessia indevida, usando a capa e uma legenda que dizia: \"Se eles podem, por que você não pode?\".\n[…]\nEmbora igualasse álbuns como Sgt. Pepper em termos de popularidade, Abbey Road falhou em repetir as conquistas anteriores dos Beatles em galvanizar seus rivais para imitá-los. Na descrição do autor Peter Doggett, \"Muito artificial para o underground do rock copiar, muito complexo para a brigada do bubblegum pop copiar, o álbum não influenciou ninguém – exceto (Paul McCartney), que passou anos tentando emular seu escopo em sua carreira solo\".\n[…]\nThe Beatles",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Hip hop",
      "descricao": "Gênero musical e movimento cultural surgido entre jovens negros e latinos do Bronx, em Nova York"
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "A cultura hip hop costuma ser descrita por quatro elementos: o rap, o DJ, o breakdance e qual arte visual?",
    "resposta": "Grafite",
    "distratores": [
      "Tatuagem",
      "Fotografia",
      "Pintura corporal"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Hip_hop"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hip_hop",
        "situacao": "ok",
        "texto": "Hip-hop (also known as rap music or simply rap) is a genre of popular music that emerged in the early 1970s alongside an associated subculture in New York City. The musical style is a synthesis of a wide range of techniques, but rapping is frequent enough that it has become a defining characteristic. Other key markers of the genre are the disc jockey (DJ), turntablism, scratching, beatboxing, and \n[…]\nAs rappers began to dominate hip-hop, the terms became synonymous. However, hip-hop's definition has always applied to its entire culture. Its four principal elements include rapping, DJing, breakdancing, and graffiti art. Knowledge is sometimes described as a fifth element, underscoring its role in shaping the values and promoting empowerment and consciousness-raising through music.\n[…]\nKRS-One identified additional elements: self-expression, street fashion, street language, street knowledge, and street entrepreneurialism. He also recognized girls' Double Dutch jump rope as a key stylistic component of breakdancing.\n[…]\nRock Steady Crew were a group of breakdancers which included members from Puerto Rico.\n[…]\nSouth African hip-hop overlaps with kwaito, a music genre that emphasizes African culture and social issues. Rappers such as Pope Troy have harnessed the use of socio-economic issues plaguing the political spheres of South Africa and hip-hop as a whole whilst balancing his lingual approach in order to communicate with the masses about the technical aspects that are creating the issues, South African hip-hop has evolved into a prominent presence in mainstream South African music.\n[…]\nDeflem, Mathieu. \"Rap, Rock, and Censorship: Popular Culture and the Technologies of Justice.\" Paper presented at the annual meeting of the Law and Society Association, Chicago, May 27–30, 1993\n[…]\nKRS gives 9 elements of Hip Hop at Harvard, video of 1999 Harvard lecture at YouTube."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hip-hop",
        "situacao": "ok",
        "texto": "O hip-hop (também conhecido como rap) é um gênero de música popular que surgiu no início da década de 1970 ao lado de uma subcultura associada nas comunidades afro-americanas e hispânicas da cidade de Nova Iorque. O estilo musical é caracterizado pela síntese de uma ampla gama de técnicas, mas o rapping é frequente o suficiente para se tornar uma característica definidora. Outros marcadores-chave \n[…]\nA relação entre o grafite e a cultura rap music surgiu quando novas formas de pintura foram sendo realizadas em áreas onde a prática dos outros três pilares do hip hop eram frequentes, com uma forte sobreposição entre escritores de grafite e quem praticava os outros elementos.\n[…]\nO pioneiro do hip hop Afrika Bambaataa reconhece Starski como a primeira pessoa a utilizar o termo \"hip hop\", para se referir a esta cultura.\n[…]\nO DJ e produtor Afrika Bambaataa, reconhecido como o criador do movimento Hip-Hop, estabeleceu os quatro pilares essenciais dessa cultura: rap (música), Disc jockey (animador), breakdance (dança), graffiti (arte) e, beatbox (instrumental) Outros elementos incluem o MC, a moda hip hop e as gírias.\n[…]\nExpressão plástica, o grafite representa desenhos, apelidos ou mensagens sobre qualquer assunto, feitas com spray, rolinho e pincel em muros ou paredes. Sendo considerado por muitos uma forma de arte e é usado por muitos como forma de expressão e denúncia. Apenas no Brasil considera-se o ato de \"pichar\" diferente do ato de \"grafitar\". Nos Estados Unidos, por exemplo, onde o grafite surgiu, existe um nome para a modalidade \"pichação\" que é conhecido como \"tag\".\n[…]\nGeralmente, as roupas utilizadas no hip hop são largas, para que os movimentos fiquem maiores, dando mais efeito visual para a dança. Também são utilizados bonés, muitas vezes virados para trás ou de lado. Costumam ser usados shorts e, na maioria das vezes, as roupas são vistosas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Live Aid",
      "descricao": "Megashow beneficente realizado em 13 de julho de 1985 em Londres e na Filadélfia"
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "No Live Aid, que cantor se apresentou em Londres e, horas depois, na Filadélfia, cruzando o Atlântico de Concorde?",
    "resposta": "Phil Collins",
    "distratores": [
      "Sting",
      "Elton John",
      "Bono"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Live_Aid"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Live_Aid",
        "situacao": "ok",
        "texto": "Live Aid was a two-venue benefit concert and music-based fund-raising initiative held on Saturday, 13 July 1985. The event was organised by Bob Geldof and Midge Ure to raise further funds for relief of the 1983–1985 famine in Ethiopia, a movement that started with the release of the successful charity single \"Do They Know It's Christmas?\" in December 1984. Billed as the \"global jukebox\", Live Aid \n[…]\nPhil Collins performed at both Wembley Stadium and JFK, travelling from Wembley by helicopter (piloted by UK television personality Noel Edmonds) to London Heathrow Airport, then took a British Airways Concorde flight to New York City, before taking another helicopter to Philadelphia. As well as his own set at both venues, he also played the piano for Sting in London, then drums for Eric Clapton, and played with the reuniting surviving members of Led Zeppelin at JFK.\n[…]\nAccording to Ultimate Classic Rock, Phil Collins also \"performed an especially crowd-pleasing selection of songs\", and John Illsley of Dire Straits recalled: \"It was a very special feeling to be part of something so unique. Live Aid was a unique privilege for all of us. It's become a fabulous memory.\"\n[…]\nBut then we'd all be talking about why Phil Collins walked off Live Aid – so I just stuck it out... I turned up and I was a square peg in a round hole. Robert was happy to see me, but Jimmy wasn't.\"\n[…]\nPhil Collins – introduced Led Zeppelin\n[…]\nMany artists and performers at Live Aid gained prominence and positive commercial influence. For all the cultural, charitable, and technological significance of 1985's Live Aid, its most immediate impact was on the charts. In the UK, for example, No Jacket Required by Phil Collins and Madonna's Like a Virgin leapt back into the top ten. Queen's three-year-old Greatest Hits rose fifty-five places into the top twenty, followed by Freddie Mercury's Mr. Bad Guy.\n[…]\nLive Aid at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Live_Aid",
        "situacao": "ok",
        "texto": "Live Aid foi um concerto realizado em 13 de julho de 1985. O evento foi organizado por Bob Geldof e Midge Ure com o objetivo de arrecadar fundos a fim de acabar com a fome na Etiópia. Os shows foram realizados no Wembley Stadium em Londres (com uma plateia de aproximadamente 82 000 pessoas) e no John F. Kennedy Stadium na Filadélfia (aproximadamente 99 000 pessoas). Alguns artistas apresentaram-se\n[…]\nPhil Collins se apresentou tanto no Wembley quanto no JFK, utilizando um Concorde para viajar de Londres à Filadélfia. Além de seu próprio set, ele também se apresentou como baterista de Eric Clapton e do Led Zeppelin no JFK. Durante o vôo, Phil se encontrou com a cantora Cher, que não estava sabendo sobre os shows. Ela pode ser vista se apresentando nos EUA com o USA For Africa na conclusão do concerto na Filadélfia.\n[…]\nPhil Collins - \"Against All Odds (Take a Look at Me Now)\", \"In the Air Tonight\" (W 15:27);\n[…]\nSting e Phil Collins (com Branford Marsalis) - \"Long Long Way To Go\", \"Every Breath You Take\" (W 15:32);\n[…]\nPhil Collins e Steve Blacknell - entrevista ao vivo no Concorde (W 20:27);\n[…]\nGeorge Thorogood and the Destroyers / Bo Diddley / Albert Collins - \"Who Do You Love\", \"The Sky Is Crying\", \"Madison Blues\" (JFK 18:26);\n[…]\nEric Clapton (com Phil Collins) - \"White Room\", \"She's Waiting\", \"Layla\" (JFK 00:39);\n[…]\nPhil Collins (após tomar um Concorde da Inglaterra para os EUA) - \"Against All Odds (Take a Look at Me Now)\", \"In the Air Tonight\" (JFK 01:04);\n[…]\nLed Zeppelin (com Tony Thompson, Paul Martinez e Phil Collins) - \"Rock and Roll\", \"Whole Lotta Love\", \"Stairway to Heaven\" (JFK 01:10);\n[…]\nUma caixa oficial de quatro DVDs com os concertos do Live Aid foi lançado em 8 de novembro de 2004. Contém 10 horas de filmagens parciais da apresentação de 16 horas. O DVD foi produzido pela empresa de Geldof, a Woodcharm Ltd., e distribuído pela Warner Music Company.\n[…]\nLive 8\n[…]\n«Site não-oficial do DVD Live Aid»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Beat It",
      "descricao": "Canção de Michael Jackson do álbum Thriller, lançada como single em 1983"
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Que guitarrista de hard rock gravou, sem cobrar nada, o solo de guitarra de Beat It, de Michael Jackson?",
    "resposta": "Eddie Van Halen",
    "distratores": [
      "Slash",
      "Jimmy Page",
      "Steve Vai"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Beat_It"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Beat_It",
        "situacao": "ok",
        "texto": "\"Beat It\" is a song by American singer Michael Jackson from his sixth studio album, Thriller (1982). It was written and composed by Jackson, produced by Quincy Jones, and co-produced by Jackson. Jones encouraged Jackson to include a rock song similar to \"My Sharona\" on the album. Jackson later said: \"I wanted to write a song, the type of song that I would buy if I were to buy a rock song...\n[…]\nJackson performed \"Beat It\" live with his brothers during the Jacksons' Victory Tour. On July 13, 1984, the brothers were joined on stage by Eddie Van Halen, who played the guitar in his solo spot. The song became one of Jackson's signature songs; he performed it on all of his world tours: Bad, Dangerous and HIStory. The October 1, 1992 Dangerous Tour performance, including \"Beat It\", was included in the Michael Jackson: The Ultimate Collection box set.\n[…]\nJackson's \"Beat It\" has been cited as one of the most successful, recognized, awarded, and celebrated songs in the history of pop music; both the song and video had a large impact on pop culture. The song is said to be a \"pioneer\" in black rock music and is considered one of the cornerstones of the Thriller album. Eddie Van Halen has been praised for adding \"the greatest guitar solo\", helping \"Beat It\" become one of the best-selling singles of all time.\n[…]\nPaul Jackson Jr. – rhythm guitar\n[…]\nEddie Van Halen – guitar solo\n[…]\nIn early 2008, it was announced that Fall Out Boy were to cover \"Beat It\" for their Live in Phoenix album. The band had previously performed the song at venues such as Coors Amphitheatre and festivals such as the Carling Weekend in Leeds. Bassist Pete Wentz, who has claimed to have an obsession with Jackson, stated that prior to recording the song, he would only watch Moonwalker. It was also announced that John Mayer was to add the guitar solo previously played by Eddie Van Halen."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Beat_It",
        "situacao": "ok",
        "texto": "\"Beat It\" é uma canção do cantor americano Michael Jackson, presente em seu sexto álbum de estúdio, Thriller (1982). Foi escrita e composta por Jackson, produzida por Quincy Jones e coproduzida por Jackson. Jones incentivou Jackson a incluir no álbum uma canção de rock semelhante a \"My Sharona\". Jackson afirmou posteriormente: \"Eu queria escrever uma canção, o tipo de canção que eu compraria se fo\n[…]\nEddie Van Halen, guitarrista principal da banda de hard rock Van Halen, foi convidado a adicionar um solo de guitarra. Quando foi inicialmente contatado por Jones, Van Halen pensou que estava recebendo um trote. Após confirmar que a ligação era genuína, utilizou um amplificador Marshall alugado, configurado para uso com sua guitarra Frankenstrat e um Echoplex, e gravou duas tomadas do solo gratuitamente. \"Fiz isso como um favor\", disse o músico mais tarde.\n[…]\nNuma crítica da revista Rolling Stone, Christopher Connelly descreveu \"Beat It\" como \"talvez a melhor música\" de Thriller, acrescentando que é \"uma faixa AOR que não tem nada a ver com disco, se é que já ouvi alguma\". Ele observa sobre a \"música dançante e bacana\": \"a voz de Jackson se eleva por toda a melodia, Eddie Van Halen entra com um solo de guitarra arrasador, você poderia construir um centro de convenções na batida\".\n[…]\nJackson apresentou \"Beat It\" ao vivo com os seus irmãos durante a turnê Victory dos Jacksons. Em 13 de julho de 1984, os irmãos foram acompanhados no palco por Eddie Van Halen, que tocou guitarra em seu solo. A música se tornou uma das mais marcantes da carreira de Jackson, apresentada em todas as suas turnês mundiais: Bad, Dangerous e HIStory. A apresentação da Dangerous Tour de 1.º de outubro de 1992, incluindo \"Beat It\", foi incluída no box set Michael Jackson: The Ultimate Collection.\n[…]\nBeat It foi interpretada por vários artistas famosos, como:",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "AC/DC",
      "descricao": "Banda de hard rock fundada em 1973 pelos irmãos Malcolm e Angus Young"
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Que integrante do AC/DC ficou famoso por se apresentar vestido de uniforme escolar, com bermuda, gravata e boné?",
    "resposta": "Angus Young",
    "distratores": [
      "Malcolm Young",
      "Bon Scott",
      "Brian Johnson"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Angus_Young"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Angus_Young",
        "situacao": "ok",
        "texto": "Angus McKinnon Young (born 31 March 1955) is an Australian musician, best known as the co-founder, lead guitarist, songwriter, and the only continuous member of the hard rock band AC/DC. He is known for his energetic performances, school uniform-style stage outfits, and his own version of Chuck Berry's duckwalk. Young was ranked 38th in the 2023 edition of Rolling Stone's 250 greatest guitarists o\n[…]\nAngus McKinnon Young was born on 31 March 1955 in Glasgow, Scotland. In the 1950s, Young's father, William Young (1911–1985), his mother, Margaret (1913–1988; maiden name also Young), and his elder seven siblings lived at 6 Skerryvore Road in the Cranhill district of Glasgow in Scotland. Cranhill was a tough, working-class suburb with high unemployment.\n[…]\nPrior to forming AC/DC, Angus Young played in a local group called Kantuckee. Kantuckee's line-up included Bob McGlynn (vocals), Angus Young (guitar), Jon Stevens (bass) and Trevor James (drums). The band split and was later called Tantrum with the following line up: Mark Sneddon (vocals-guitar), Angus Young (guitar), Jon Stevens (bass) and Trevor James (drums).\n[…]\nOn 30 September 2020, the band's official Twitter account announced the pending release of a new album, Power Up, with the lineup of Angus Young, Stevie Young, Brian Johnson, Cliff Williams and Phil Rudd.\n[…]\nYoung and Gibson Guitar Corporation have collaborated to make the Angus Young SG. It features a pick-up designed by Young himself, the Angus Young Signature Humbucker, in the bridge position, and a '57 Classic Humbucker in the neck. The neck has \"lightning bolt\" inlays.\n[…]\nYoung occasionally provides backing vocals along with Malcolm on songs such as \"T.N.T.\" and \"Dirty Deeds Done Dirt Cheap\".\n[…]\nYoung was advised by older brother George that, if he ever tripped over his guitar cable, to keep playing and make it look like part of the act.\n[…]\nACDC.com – official website"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Angus_Young",
        "situacao": "ok",
        "texto": "Angus McKinnon Young (Glasgow, 31 de março de 1955) é um guitarrista e compositor escocês naturalizado na Austrália, conhecido por ser guitarrista solo, compositor, líder e co-fundador da banda de hard rock australiana AC/DC. No ano de 2003, foi introduzido juntamente de Malcolm Young, Brian Johnson e outros membros do AC/DC no Rock and Roll Hall of Fame.\n[…]\nApós tocar com a banda por um tempo, Angus desenvolveu a imagem de Schoolboy (garoto de escola). Antes de ter a imagem de Schoolboy, Angus tentou outras imagens como Spider-Man, Zorro, Gorilla e uma paródia do Superman, nomeado de Super-Ang. A imagem de Schoolboy veio a ser uma marca registrada de Angus Young. O uniforme original foi retirado de sua escola secundária, Ashfield Boys High School, em Sydney.\n[…]\nMais a ideia de Angus tocar com o uniforme escolar veio de Margareth Young, irmã de Angus, tendo em vista que toda vez que o mesmo chegava da escola, a primeira coisa que fazia era ir direto ao seu quarto e tocar sua guitarra, sem nem mesmo antes tirar o uniforme.\n[…]\nAngus usou Marshalls: JTM45s, JTM50s, JMP50s e Superleads. Seu amplificador principal é o DDJ45, Costuma usá-lo ao vivo e em estúdio. Quando Young toca ao vivo, ele o usa através de uma caixa de isolação que fica sob o palco e alimenta diretamente o sistema de PA. No estúdio, Angus usa frequentemente 100w Marshall Plexi para riffs e um pequeno Plexi (jmp50, jtm50, ou jtm45) para solos.\n[…]\nNa maioria das listas sobre melhores guitarristas da história, Angus Young aparece entre os 10 primeiros. É considerado o melhor riffer de todos os tempos, seus riffs e solos pesados, massivos e extremamente rápidos o tornaram um dos melhores guitarristas da história.\n[…]\nMalcolm Young",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Bob Marley",
      "descricao": "Cantor e compositor jamaicano de reggae, líder dos Wailers"
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Bob Marley era seguidor de que movimento religioso surgido na Jamaica nos anos trinta?",
    "resposta": "Rastafári",
    "distratores": [
      "Vodu",
      "Candomblé",
      "Santeria"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Bob_Marley"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bob_Marley",
        "situacao": "ok",
        "texto": "Robert Nesta Marley (6 February 1945 – 11 May 1981) was a Jamaican reggae singer, songwriter, and guitarist. Considered one of the pioneers of the genre, he was renowned for his distinctive vocal and songwriting style. Marley increased the visibility of Jamaican music worldwide and became a global figure in popular culture. He became known as a Rastafarian icon, and he infused his music with a sen\n[…]\nDuring the time that he was a Rastafarian, Marley supported the legalisation of cannabis or \"ganja\", which Rastafarians believe is an aid to meditation. Marley began to use cannabis when he converted to the Rastafari faith from Catholicism in 1966. Marley was arrested in 1968 after being caught with cannabis but continued to use marijuana in accordance with his religious beliefs. Of his marijuana usage, Marley said, \"When you smoke herb, herb reveal yourself to you.\n[…]\nMarley was a pan-Africanist and believed in the unity of African people worldwide. His beliefs were rooted in his Rastafari religious beliefs. Marley was substantially inspired by Marcus Garvey and had anti-imperialist and pan-Africanist themes in many of his songs, such as \"Zimbabwe\", \"Exodus\", \"Survival\", \"Blackman Redemption\", and \"Redemption Song\". The lattermost draws influence from a 1937 speech given by Marcus Garvey in Nova Scotia.\n[…]\nOn 21 May 1981, Marley was given a state funeral in Jamaica that combined elements of Ethiopian Orthodoxy, as well as Rastafari tradition. He was buried in a chapel near his birthplace in Nine Mile; Marley's casket contained his red Gibson Les Paul guitar, a Bible opened at Psalm 23, and a stalk of cannabis placed there by his widow Rita Marley. Prime Minister Edward Seaga delivered the final funeral eulogy to Marley, saying:\n[…]\nFabian Marley\n[…]\nJohnson, Anitra (30 August 2024). \"Reggae legend Bob Marley's home in Wilmington Delaware\". Delawareonline.com. Retrieved 2 September 2024."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bob_Marley",
        "situacao": "ok",
        "texto": "Robert Nesta \"Bob\" Marley OM (Nine Mile, 6 de fevereiro de 1945 – Miami, 11 de maio de 1981) foi um cantor, compositor, multi-instrumentista jamaicano e o mais conhecido músico de reggae de todos os tempos, famoso por popularizar internacionalmente o gênero. Já vendeu mais de 75 milhões de discos e, em 1978, três anos antes de sua morte, foi condecorado pela ONU com a \"Medalha da Paz do Terceiro M\n[…]\nBob Marley & The Wailers apresentaram-se em 18 e 19 de abril na festa de independência, em Harare, no Zimbabwe.\n[…]\nBob Marley converteu-se em 1966 à fé rastafári, movimento religioso afrojamaicano que proclama Haile Selassie, o último imperador da Etiópia, como a reencarnação de Jesus Cristo ou como a própria representação de Deus (Jeová, costumeiramente chamado pela forma abreviada \"Jah\"). Responsável pela propagação internacional da religião rastafári, a vida e a música de Marley foram profundamente influenciadas por sua fé.\n[…]\nDesse modo, um dos traços mais marcantes da prática religiosa de Bob é o uso religioso da maconha - um dos nomes para a Cannabis - já que, segundo os rastafáris, o consumo sacramental da planta estaria fundamentado em diversas passagens da Bíblia. No entanto, no movimento, o consumo de nenhuma outra droga é permitido. Assim, de acordo com o seu credo, Marley era vegetariano e não consumia álcool, uma vez que o consumo de carne e de bebidas alcoólicas é proibido.\n[…]\nApesar da vocalização do desejo de Rita, até hoje o túmulo de Bob continua na Jamaica.\n[…]\nNa Jamaica, é muito comum a existência de mães solteiras e de filhos sem o nome paterno na certidão de nascimento. Além de ser um traço cultural, o movimento rastafári também incentiva que os homens tenham muitos filhos. Assim, o casamento de Bob e Rita não impedia que Marley tivesse outras parceiras. Especialmente quando ele começou a viajar para a Inglaterra perseguindo uma carreira internacional.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Taylor Swift",
      "descricao": "Cantora e compositora americana, autora de 1989 e Fearless."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Antes de migrar para o pop, Taylor Swift começou a carreira em que gênero musical?",
    "resposta": "Country",
    "distratores": [
      "Gospel",
      "R&B",
      "Rock alternativo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Taylor_Swift"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Taylor_Swift",
        "situacao": "ok",
        "texto": "Taylor Alison Swift (born December 13, 1989) is an American singer-songwriter. An influential figure in popular culture, Swift is known for her autobiographical songwriting and artistic reinventions. She is the highest-grossing live music artist, the wealthiest female musician, and one of the best-selling music artists of all time.\n[…]\nThe albums feature a country pop sound defined by instruments such as the six-string banjo, mandolin, and fiddle, a slight twang in Swift's vocals, and pop rock melodies; Speak Now expanded this sound with 1970s and 1980s rock influences, including pop-punk and arena rock. Some critics argued that country signified Swift's songwriting more than her musical style, and accused her of causing mainstream country to stray from its roots.\n[…]\nSwift's success in country music has been credited with popularizing the genre beyond the US and introducing it to adolescent women, a previously ignored demographic. The critic Kelefa Sanneh described her as the biggest country star since Garth Brooks, \"and maybe since before him, too\". Swift's guitar performances has resulted in increasing sales of guitars among women, which the media dubbed the \"Taylor Swift factor\".\n[…]\nHer transition from country to pop has been credited as the catalyst for poptimism, and her songwriting and musical transitions have been credited with influencing a new generation of artists.\n[…]\nSwift is a supporter of the arts. A benefactor of the Nashville Songwriters Hall of Fame, she has donated $75,000 to Hendersonville High School to help refurbish its auditorium; $4 million to the Country Music Hall of Fame and Museum in Nashville—the largest donation the museum had received from an artist—to establish the Taylor Swift Education Center, an exhibit and classroom space that opened in 2013; and $100,000 to the Nashville Symphony."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Taylor_Swift",
        "situacao": "ok",
        "texto": "Taylor Alison Swift (Reading, 13 de dezembro de 1989) é uma cantora, compositora, produtora musical, diretora e empresária americana. Conhecida por suas composições narrativas que geralmente concentram-se em sua vida pessoal, ao qual recebem ampla cobertura midiática. Nascida em West Reading, Pensilvânia, Swift mudou-se para Nashville, Tennessee, aos 14 anos, para seguir uma carreira na música cou\n[…]\nSwift atraiu-se pelo aspecto narrativo da música country, e foi introduzida ao gênero ouvindo \"as grandes artistas country dos anos 90\" - Shania Twain, Faith Hill e Dixie Chicks. Twain, como compositora e intérprete, foi sua maior influência musical. Hill foi o modelo de infância de Swift: \"Tudo o que ela disse, fez, usou, eu tentei copiá-la\". Ela admirava a atitude desafiadora das Dixie Chicks e sua capacidade de tocar seus próprios instrumentos.\n[…]\nA música de Swift consiste principalmente em elementos de pop, synth-pop, country, country pop e rock. Seus trabalhos posteriores se baseiam em gêneros como indie folk, rock alternativo, R&B, EDM, hip hop e trap. Swift se descreveu como uma artista country até o lançamento de 1989 (2014), que ela caracterizou como seu primeiro \"álbum sonoramente pop\". A Rolling Stone escreveu: \"[Swift] pode ser tocado na estação country, mas ela é uma das poucas estrelas do rock genuínas que temos hoje em dia\".\n[…]\nEntre os apelidos honoríficos usados para descrever Swift estão \"Titã do Pop\" e \"Rainha do Country\". Ela foi creditada por ajudar a música country a se tornar mais popular em todo o mundo, com a Billboard escrevendo que \"o cenário do país é muito diferente hoje, em parte graças a Swift e sua insistência em seguir um plano de jogo que muitos consideravam pouco ortodoxo\" e notou as opiniões favoráveis em relação ao gênero desde a sua estreia.\n[…]\nTaylor Swift no Instagram\n[…]\nTaylor Swift no Facebook\n[…]\nTaylor Swift no Twitter\n[…]\nTaylor Swift no Threads",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Lady Gaga",
      "descricao": "Cantora e atriz americana, nascida Stefani Germanotta"
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Na premiação VMA de 2010, Lady Gaga causou polêmica com um vestido feito de quê?",
    "resposta": "Carne crua",
    "distratores": [
      "Papel reciclado",
      "Bolhas de plástico",
      "Folhas de alface"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Meat_dress_of_Lady_Gaga"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Meat_dress_of_Lady_Gaga",
        "situacao": "ok",
        "texto": "On September 12, 2010, American singer Lady Gaga wore a dress to the 2010 MTV Video Music Awards made entirely out of raw beef. Designed by Franc Fernandez and styled by Nicola Formichetti, the dress was condemned by animal rights groups, while named by Time as the top fashion statement of 2010.\n[…]\nAnother controversy surrounding the dress was the question of its originality. Meat dresses have featured in art and music for decades prior to Lady Gaga's version.\n[…]\nThe Daily Telegraph noted the similarity of Lady Gaga's meat dress to the cover of Northern Irish band The Undertones' 1983 compilation album All Wrapped Up, which showed a female model wearing a dress and gloves made of cuts of meat (mostly bacon) held in place with plastic wrap and accessorized with a sausage necklace. The photograph was taken in early 1983 as part of a B.A. degree in graphic design by British artist John Pretious.\n[…]\nBrooks Barnes of The New York Times claimed that Lady Gaga's dress was \"derived\" from Incarnation, a 2009 painting of a white-haired girl wearing a meat dress by American artist Mark Ryden. Sharon Clott of MTV also noted the similarity between Lady Gaga's dress and Ryden's painting. Ryden was reportedly upset that Gaga did not say she took inspiration from his work.\n[…]\nAlthough it was Gaga's third costume change at the 2010 MTV Video Music Awards, the meat dress was immediately described as the \"most outrageous fashion moment\" of the evening. A poll by website MyCelebrityFashion.co.uk placed the dress as the most iconic outfit of 2010, beating Catherine Middleton's engagement dress into second place. In summing up 2010 through a series of lists, Time voted the meat dress as its top fashion statement of 2010."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Vestido_de_carne_de_Lady_Gaga",
        "situacao": "ok",
        "texto": "Em 12 de setembro de 2010, a cantora americana Lady Gaga usou um vestido para o MTV Video Music Awards de 2010 feito inteiramente de carne bovina crua. Desenhado por Franc Fernandez e estilizado por Nicola Formichetti, o vestido foi condenado por grupos de direitos dos animais, enquanto foi eleito pela Time como a principal tendência de moda de 2010.\n[…]\nApesar de ter sido a terceira troca de roupa de Lady Gaga no MTV Video Music Awards de 2010, o vestido de carne foi imediatamente descrito como o \"momento mais ultrajante de moda\" da tarde. Uma enquete do site MyCelebrityFashion.co.uk destacou o vestido como a roupa mais icônica de 2010, à frente do vestido de noivado de Catherine Middleton, que ficou em segundo lugar. Através de uma série de listas, a revista Time destacou o vestido como a principal tendência de moda de 2010.\n[…]\nFernandez creditou ao vestido uma reviravolta em sua carreira, dizendo: \"eu sinto que agora tenho voz como um artista e como um designer\". O artista já havia criado itens para Lady Gaga, inclusive uma fantasia para seu clipe de \"Bad Romance\". Também trabalhou, posteriormente, em um chapéu que Gaga vestiu no Grammy Awards de 2011.\n[…]\nO jogo Yakuza 5, lançado originalmente em 2012, satiriza o vestido de carne e o amor de Lady Gaga à cultura japonesa, através de uma missão em que o jogador faz o papel de guia turístico para uma cantora famosa mundialmente conhecida por \"Daddy Papa\", que usa um vestido feito de alga marinha, que o personagem descreve como um \"monte de lixo\" que \"cheira como o oceano\".[carece de fontes]?\n[…]\nQuando \"Weird Al\" Yankovic fez uma paródia da música \"Born This Way\", chamada \"Perform This Way\", ele incluiu uma referência ao vestido de carne; o vídeo musical da paródia apresenta uma dançarina vestida com uma roupa similar.==Referências==",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Bob Dylan",
      "descricao": "Cantor e compositor americano de folk e rock, nascido Robert Zimmerman"
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Para tocar violão e soprar ao mesmo tempo, Bob Dylan usava um suporte no pescoço que segurava que instrumento?",
    "resposta": "Gaita",
    "distratores": [
      "Flauta doce",
      "Kazoo",
      "Ocarina"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Bob_Dylan",
      "https://en.wikipedia.org/wiki/Harmonica"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bob_Dylan",
        "situacao": "ok",
        "texto": "Bob Dylan (legally Robert Dylan; born Robert Allen Zimmerman, May 24, 1941) is an American singer-songwriter. Described as one of the greatest songwriters of all time, Dylan has been a major figure in popular culture over his 69-year career. Dylan added increasingly sophisticated lyrical techniques to the folk music of the early 1960s, infusing it \"with the intellectualism of classic literature an\n[…]\nBob Dylan was born Robert Allen Zimmerman (his Hebrew name being Shabtai Zisl ben Avraham; שבתאי-זיסל בן אברהם) on May 24, 1941, at St. Mary's Hospital, in Duluth, Minnesota. Dylan's paternal grandparents, Anna Kirghiz and Zigman Zimmerman, emigrated from Odessa in the Russian Empire (now Ukraine) to the United States after the 1905 pogroms against Jews. His maternal grandparents, Florence and Ben Stone, were Lithuanian Jews who had arrived in the US in 1902.\n[…]\nIn 1959, Dylan's high school yearbook carried the caption \"Robert Zimmerman: to join 'Little Richard'\". That year, as Elston Gunnn, he performed twice with Bobby Vee, playing piano and clapping. In September 1959, Dylan enrolled at the University of Minnesota. and began to perform at the Ten O'Clock Scholar, a coffeehouse near campus, becoming part of the Dinkytown folk music circuit. His focus on rock and roll gave way to American folk music, as he explained in a 1985 interview:\n[…]\nOn August 9, 1962, Dylan legally changed his name to Robert Dylan in the St. Louis County Court, Hibbing. His father, Abraham Zimmerman, was the witness. That month, Dylan signed a management contract with Albert Grossman. Grossman remained Dylan's manager until 1970, and was known for his sometimes confrontational personality and protective loyalty. Dylan said, \"He was kind of like a Colonel Tom Parker figure ...\n[…]\nExpecting Rain – Dylan news and events, updated daily\n[…]\nBob Dylan at IMDb\n[…]\nBob Dylan on Nobelprize.org"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Harmonica",
        "situacao": "ok",
        "texto": "The harmonica, also known as a French harp or mouth organ, is a free reed wind instrument used worldwide in many musical genres, notably in blues, American folk music, classical music, jazz, country, and rock. The many types of harmonica include diatonic, chromatic, tremolo, octave, orchestral, and bass versions. The harmonica is played by using the lips and tongue to direct air into or out of one\n[…]\nFrontiersmen Wyatt Earp and Billy the Kid played the instrument, and it became a fixture of the American musical landscape.\n[…]\nThe concertina, diatonic and chromatic accordions and the melodica are all free-reed instruments that developed alongside the harmonica. Indeed, the similarities between harmonicas and so-called \"diatonic\" accordions or melodeons is such that in German the name for the former is \"Mundharmonika\" and the latter \"Handharmonika\", which translate as \"mouth harmonica\" and \"hand harmonica\".\n[…]\nIn Scandinavian languages, an accordion is called variants of \"trekkspill\" (pull play) or \"trekkharmonika\" whereas a harmonica is called \"munnspill\" (mouth play) or \"mundharmonika\" (mouth harmonica). The names for the two instruments in the Slavic languages are also either similar or identical. The harmonica shares similarities to all other free-reed instruments by virtue of the method of sound production.\n[…]\nThe glass harmonica, invented by Benjamin Franklin in 1761, has the word \"harmonica\" in its name, but it is not related to free-reed instruments. The glass harmonica is a musical instrument formed from a nested set of graduated glass cups mounted sideways on an axle. Each of the glass cups is tuned to a different note, and they are arranged in a scalar order. It is played by touching the rotating cups with wetted fingers, causing them to vibrate and produce a sustained \"singing\" tone."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bob_Dylan",
        "situacao": "ok",
        "texto": "Bob Dylan (legalmente Robert Dylan; nascido Robert Allen Zimmerman, em 24 de maio de 1941) é um cantor e compositor norte-americano. Descrito como um dos maiores compositores de todos os tempos, Dylan tem sido uma figura de destaque na cultura popular ao longo de sua carreira de 69 anos. Dylan acrescentou técnicas líricas cada vez mais sofisticadas à música folk do início da década de 1960, impreg\n[…]\nNaquele mês, Dylan tocou gaita no terceiro álbum da cantora folk Carolyn Hester, o que chamou a atenção do produtor do álbum, John Hammond, que contratou Dylan para a Columbia Records. O álbum de estreia de Dylan, Bob Dylan, lançado em 19 de março de 1962, consistia em material tradicional de folk, blues e gospel, com apenas duas composições originais, \"Talkin' New York\" e \"Song to Woody\". O álbum vendeu 5 000 cópias em seu primeiro ano, apenas o suficiente para cobrir os custos.\n[…]\nO segundo lado do álbum continha quatro canções longas nas quais Dylan se acompanhava ao violão acústico e à gaita. \"Mr. Tambourine Man\" tornou-se uma de suas canções mais conhecidas quando The Byrds gravou uma versão elétrica que chegou ao primeiro lugar nos Estados Unidos e no Reino Unido. As duas últimas canções do álbum, \"It's All Over Now, Baby Blue\" e \"It's Alright, Ma (I'm Only Bleeding)\", estão entre as composições mais importantes de Dylan.\n[…]\nDylan realizou turnês pela Austrália e pela Europa em abril e maio de 1966. Cada apresentação era dividida em duas partes. Dylan se apresentava sozinho na primeira metade, acompanhando-se com violão acústico e gaita. Na segunda, acompanhado pelos Hawks, tocava música eletricamente amplificada. Esse contraste provocou muitos fãs, que vaiavam e faziam aplausos lentos.\n[…]\nJohnny Cash, ao apresentar \"Wanted Man\", disse: \"Não preciso dizer a vocês quem é Bob Dylan — o maior compositor de nosso tempo.\"\n[…]\nBob Dylan no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Shakira",
      "descricao": "Cantora e compositora colombiana de pop latino, nascida Shakira Isabel Mebarak Ripoll"
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Por herança da família do pai, de origem libanesa, Shakira incorpora em seus shows que dança?",
    "resposta": "Dança do ventre",
    "distratores": [
      "Flamenco",
      "Tango",
      "Salsa"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Shakira"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Shakira",
        "situacao": "ok",
        "texto": "Shakira Isabel Mebarak Ripoll (  shə-KEER-ə, Spanish: [ʃaˈkiɾa isaˈβel meβaˈɾak riˈpol]; born 2 February 1977), known mononymously as Shakira, is a Colombian singer-songwriter, dancer, and record producer. Referred to as the \"Queen of Latin Music\", she has had a significant impact on the musical landscape of Latin America and has been credited with popularizing Hispanophone music globally, contrib\n[…]\nIn October 1995, Shakira commenced Tour Pies Descalzos, her first international tour. Its about one hundred shows in Latin America, the U.S. and Spain took two years to complete.\n[…]\nThe Las Mujeres Ya No Lloran World Tour commenced in February 2025, Shakira's first tour since 2018. Initially planned to begin in North America in November 2024, it was rescheduled to begin in February 2025 in South America, reportedly due to demand for larger venues in the U.S. A number of dates were added across multiple countries and over 100 shows were eventually scheduled.\n[…]\nFrom her early teens, Shakira was influenced by rock music, listening heavily to such bands and performers as Led Zeppelin, Metallica, Nirvana, The Beatles, the Police, The Cure, Tom Petty, and Aerosmith. According to Shakira, \"Underneath Your Clothes\" (2001) is where she shows her devotion to music of the Beatles. Her other influences included Madonna, Sheryl Crow, Alanis Morissette, Janis Joplin, Billie Holiday, Marc Anthony, and Van Morrison.\n[…]\nI just thought my curls looked cool with a blonde, beachy style\". However, a fan wrote: \"she's got to dye her hair blond and bare her body ... to succeed in the United States\". Between Shakira's MTV Unplugged (1999) and Roseland Ballroom (2001) Manhattan shows, with the Tour Anfibio transition intervening in 2000, her stage appearance and style changed dramatically.\n[…]\nVH1 Driven: Shakira (article)\n[…]\nVH1 Driven: Shakira (video)\n[…]\nShakira at AllMusic\n[…]\nShakira at IMDb\n[…]\nShakira's channel on YouTube"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Shakira",
        "situacao": "ok",
        "texto": "Shakira Isabel Mebarak Ripoll (Barranquilla, 2 de fevereiro de 1977) é uma cantora, compositora, empresária e filantropa colombiana. Conhecida como \"A Rainha da Música Latina\", ela teve um impacto significativo no cenário musical da América Latina e é reconhecida por popularizar a música hispanófona globalmente e por abrir as portas do mercado internacional para outros artistas latinos.\n[…]\nAlém de se dedicar à música, Shakira também se dedica à dança. Ela atribuiu seus movimentos, muitos deles derivados da dança do ventre, o mérito de tê-la ajudado a superar a timidez. Seu estilo característico combina danças latinas com a dança do ventre do Oriente Médio, à qual teve contato devido à sua herança libanesa. Conforme a cantora disse, \"como meu pai é 100% de ascendência libanesa, sou devota aos gostos e sons árabes\".\n[…]\nEla contou à MTV que aprendeu a dançar dança do ventre tentando jogar uma moeda para o ar com a barriga. Seu rebolado é mencionado, por exemplo, na música \"Brave Honest Beautiful\" (2015), do Fifth Harmony, onde as integrantes do grupo estadunidense afirmam que podem \"dançar como Beyoncé\" e \"rebolar como Shakira\".\n[…]\nEm 26 de dezembro de 2023 foi inaugurada uma outra estátua da cantora em Barranquilla, dessa vez de bronze e em um parque às margens do Rio Magdalena. A estátua mede 6,5 metros e retrata a artista num momento de dança do ventre.\n[…]\nQuando lançou seu primeiro material em inglês no final de 2001, tornou-se uma sensação pop instantânea, graças ao seu senso poético peculiar e a uma imagem sensual em seus vídeos, construída sobre seus movimentos de dança do ventre com rebolado\". \"Com sua ascendência libanesa e canções em inglês — como seu grande sucesso bilíngue 'Hips Don't Lie', feita com o cantor haitiano-americano Wyclef Jean, por exemplo — Shakira mostrou o quão universal uma artista latina poderia ser.\n[…]\nShakira no Instagram\n[…]\nShakira no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Björk",
      "descricao": "Cantora e compositora islandesa, ex-vocalista do grupo The Sugarcubes"
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Na cerimônia do Oscar de 2001, Björk chamou atenção com um vestido que imitava que ave?",
    "resposta": "Cisne",
    "distratores": [
      "Pavão",
      "Flamingo",
      "Coruja"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Swan_dress"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Swan_dress",
        "situacao": "ok",
        "texto": "The swan dress is a dress resembling a mute swan designed by Marjan Pejoski and worn by the Icelandic music artist Björk at the 73rd Academy Awards on March 25, 2001, as well as on the cover of her album Vespertine. A Debenhams poll published in The Daily Telegraph in 2008 voted it the ninth-most iconic red carpet dress of all time.\n[…]\nBjörk said \"It was a tribute to Busby Berkeley and that sort of elegance.\"\n[…]\nThe dress was later emulated by Ellen DeGeneres at the 53rd Primetime Emmy Awards. Kevin James wore a version of it at the 2002 People's Choice Awards. In 2006, at the 78th Academy Awards, host Jon Stewart remarked \"Björk couldn't be here tonight...She was trying on her Oscar dress and Dick Cheney shot her.\" in a reference to the Dick Cheney hunting incident.\n[…]\nIn 2007, the gown was proposed to take part in the year's Oscar fashion show, highlighting the signature gowns from the red carpets of the Oscars from the past years. However, according to Oscar producer Laura Ziskin, Björk's team refused to let the dress take part.\n[…]\nIn her 2005 comedy CD album Assassin, Margaret Cho lauded the swan dress for its originality, stating, \"And all of the fashion magazines said she was the worst dressed, but when they say you're the worst, that means you're the best.\" She classed Björk with the \"great divas\" of Hollywood for wearing it. She also cited the swan dress as an inspiration for her own choice to wear a peacock feather gown by Narcisse to the 2004 Grammy Awards and her pleasure at similarly being named \"worst dressed.\"\n[…]\nOn Halloween 2023, Spain-based singer Rosalía wore a costume of Björk’s \"swan dress\" look, ahead of her and Björk's release of the song \"Oral,\" which she was featured on."
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Paul McCartney",
      "descricao": "Músico e compositor inglês, baixista e vocalista dos Beatles."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "O baixo Höfner, usado por Paul McCartney nos tempos dos Beatles, tem o corpo no formato de que instrumento?",
    "resposta": "Violino",
    "distratores": [
      "Violão",
      "Bandolim",
      "Alaúde"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/H%C3%B6fner_500/1"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/H%C3%B6fner_500/1",
        "situacao": "ok",
        "texto": "The Höfner 500/1 Violin Bass (sometimes nicknamed the \"Beatle Bass\") is a model of electric bass manufactured by Höfner under several varieties. It was introduced in 1955 and gained fame during the 1960s as the primary bass used by Paul McCartney of the Beatles.\n[…]\nFollowing the popularity of the Violin Bass created by its use by Paul McCartney, Höfner began producing a similar alternative in terms of sound and size with a different shaped body, the Höfner 500/2 Club Bass, in 1964.\n[…]\n\"I remember going along there, and there was this bass which was quite cheap. I couldn't afford a Fender. Fenders even then seemed to be about £100. All I could really afford was about £30 ... so for about £30, I found this Hofner violin bass. And to me, it seemed like, because I was left-handed, it looked less daft because it was symmetrical. Didn't look as bad as a cutaway which was the wrong way. So I got into that.\"\n[…]\nViolin Bass Artist (available in sunburst and black; based on McCartney's '63 Hofner 500/1)\n[…]\nViolin Bass Rooftop '69 (based on the condition of McCartney's '63 Hofner 500/1 at The Beatles' rooftop concert in 1969)\n[…]\nDue to the cost of the official Höfner bass, several guitar companies offer more affordable versions of the \"violin bass\". These include Greco, Epiphone, Tokai, El Dégas, Jay Turser, Duesenberg, Rogue, Douglas, Harley Benton and Eko. Carl Wilson and Al Jardine of The Beach Boys occasionally played a Höfner imitation bass during the late 1960s, most notably at the 1967 concerts in Honolulu, Hawaii, that produced the long-unreleased live album Lei'd in Hawaii.\n[…]\nThe Lost Bass the search for Paul McCartney's original Höfner\n[…]\nOfficial Höfner website: A Short History of the Höfner 500/1 Violin Bass Archived 2022-12-17 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/H%C3%B6fner_500/1",
        "situacao": "ok",
        "texto": "O Höfner 500/1 violino baixo (apelidado de \"Beatle bass\" ou \"bass Cavern\") é uma guitarra-baixo-corpo oco fabricado pela Höfner sob diversas variedades.\n[…]\nFoi introduzido em meados dos anos 1950 e ganhou status de celebridade durante a década de 1960 como uma das bases primária utilizada por Paul McCartney dos Beatles.\n[…]\nEm julho de 1961, depois que Stuart Sutcliffe decidiu deixar os Beatles, emprestou a McCartney seu baixo até que este ganhasse o suficiente para comprar um baixo Höfner 500/1 em junho de 1961.\n[…]\nEle pode ser visto usando este baixo na \"Revolução\" video promo, estranhamente com a alça anexado ao topo do cabeçote em vez do botão correia do calcanhar pescoço. Ele continuou a usar regularmente o baixo violino até 1965, quando ele mudou para um Rickenbacker 4001; porém , ele continuou a utilizar os dois modelos, os revezando, Paul usou o Höfner do ano de 1962 na aparição do The Beatle no concerto na cobertura Apple. Ele voltou para o Rickenbacker para a gravação de Abbey Road.\n[…]\n500/1 Aniversário 125 'Black Violin Bass\n[…]\nDevido ao custo do baixo Höfner oficial, várias empresas de guitarra oferecem versões mais acessíveis do \"baixo violino\". Estes incluem Greco, Epiphone, Tokai, El Degas, Jay Turser, Duesenberg, Vampira, Douglas, Harley Benton e Eko. Estes variam de US $ 200 a US $ 1.500. [9]\n[…]\nO Höfner 500/1 apareceu em Guitar Hero II, enquanto o Epiphone Viola apareceu em Guitar Hero: Aerosmith. Uma réplica do baixo Höfner usado por McCartney (embora destro) é usado como a base para um controlador de guitarra, incluído com o pacote de edição especial de The Beatles: Rock Band\n[…]\nDetailed information on guitars used by The Beatles",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Adele",
      "descricao": "Cantora e compositora britânica, autora dos álbuns 19, 21 e 25."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Os títulos numéricos dos álbuns de Adele, como 19, 21 e 25, se referem a quê?",
    "resposta": "A idade dela na época",
    "distratores": [
      "Número de faixas",
      "Anos de lançamento",
      "Endereços em Londres"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Adele"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Adele",
        "situacao": "ok",
        "texto": "Adele Laurie Blue Adkins ( ə-DEL; born 5 May 1988) is an English singer and songwriter. Regarded as a British cultural icon, she is known for her mezzo-soprano vocals and sentimental songwriting. Her accolades include 16 Grammy Awards, 12 Brit Awards (including three for British Album of the Year), an Academy Award, a Primetime Emmy Award, and a Golden Globe Award.\n[…]\nOn 30 November 2021, Adele announced a Las Vegas residency, Weekends with Adele, to run from 21 January 2022 until 16 April 2022 at the Colosseum at Caesars Palace. On 20 January 2022, Adele announced the residency was postponed due to \"delivery delays\" and the COVID-19 pandemic. On 8 February, 30 won British Album of the Year at the 42nd Brit Awards, making Adele the first solo artist in history to win the honour three times.\n[…]\nHaving referred to 21 as a \"break-up record\", Adele labelled her third studio album, 25, a \"make-up record\", adding it is about \"Making up for lost time. Making up for everything I ever did and never did.\" The New York Times wrote that on 30, \"production on some songs feels in conversation with contemporary R&B\".\n[…]\nIn February 2022, it was reported that Adele had bought Sylvester Stallone's 21,000-square-foot (2,000 m2) former mansion in Beverly Park, Los Angeles, for $58 million.\n[…]\nAt the 51st Annual Grammy Awards in 2009, 21-year-old Adele won awards in the categories of Best New Artist and Best Female Pop Vocal Performance. She was also nominated for Record of the Year and Song of the Year. The success of her debut album 19 saw Adele nominated for three Brit Awards in the categories of British Female Solo Artist, British Single of the Year and British Breakthrough Act.\n[…]\nAt one point in 2011, a copy of Adele's 21 and 19 albums was sold every seven seconds in the UK.\n[…]\nAdele – official site\n[…]\nAdele at AllMusic\n[…]\nAdele discography at Discogs\n[…]\nAdele at Grammys\n[…]\nAdele at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Adele",
        "situacao": "ok",
        "texto": "Adele Laurie Blue Adkins MBE (Londres, 5 de maio de 1988) é uma cantora, compositora e musicista britânica. Nascida e criada no distrito de Tottenham, em Londres, começou a cantar aos quatro anos de idade e iniciou sua carreira artística em 2006, após se graduar em música na  BRIT School e assinar um contrato com a XL Recordings. Adele foi descoberta pela gravadora por demos musicais postadas em s\n[…]\nAdele cantou \"Chasing Pavements\" e \"Cold Shoulder\" no dia seguinte e 19 liderou as paradas do iTunes e ficou no Top 5 da Amazon.com, enquanto \"Chasing Pavements\" subiu para o Top 25. O álbum alcançou o décimo primeiro lugar na Billboard 200, como resultado, um salto de trinta e cinco lugares ao longo da semana anterior. O álbum foi certificado como ouro em fevereiro de 2009, pela Recording Industry Association of America. O nome do álbum, faz referência a idade que Adele tinha quando o compôs.\n[…]\nEu sinto falta de tudo, do meu passado, o bom e o ruim, mas apenas porque não posso voltar atrás. Quando eu estava lá, queria sair. Tão típico”. Adele também acredita que 25 será seu último álbum com a idade dela como título, acreditando que 25 seria o fim de uma trilogia. Logo depois, por meio de sua conta no Instagram, a cantora pronunciou-se sobre o lançamento do single \"Hello\", que seria lançando no dia 23, às quatro horas da manhã, deste mesmo mês.\n[…]\nTendo se referido ao 21 como um \"disco de separação\", Adele rotulou seu terceiro álbum de estúdio, 25, um \"registro de conciliação\", acrescentando que era sobre \"compensar o tempo perdido. Compensando tudo que eu fiz e nunca fiz\". Seu anseio por seu antigo eu, sua nostalgia e melancolia sobre a passagem do tempo, é uma característica do disco 25, com Adele afirmando: \"Eu tenho me arrependido de algumas coisas desde que fiz 25 anos. [...] Essa idade foi determinante para mim.\n[…]\n25 (2015)\n[…]\nAdele no IMDb\n[…]\nAdele (em inglês) no AllMusic\n[…]\nAdele no Grammy",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Ringo Starr",
      "descricao": "Músico inglês, baterista dos Beatles, nascido Richard Starkey"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O apelido Ringo, adotado pelo baterista Richard Starkey, veio do hábito de usar o quê?",
    "resposta": "Anéis",
    "distratores": [
      "Chapéus de caubói",
      "Óculos escuros",
      "Relógios"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Ringo_Starr"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ringo_Starr",
        "situacao": "ok",
        "texto": "Sir Richard Starkey (born 7 July 1940), known as Ringo Starr, is an English musician, singer, songwriter and actor who achieved international fame as the drummer for the Beatles. He sometimes sang lead vocals on the group's recordings, usually for one song on each album; these include \"Yellow Submarine\" and \"With a Little Help from My Friends\". He also wrote and sang the Beatles songs \"Don't Pass \n[…]\nIn 1973 and 1974, Starr had two number one hits in the US: \"Photograph\", a UK number eight hit co-written with Harrison, and \"You're Sixteen\", written by the Sherman Brothers. Starr's third million-selling single in the US, \"You're Sixteen\" was released in the UK in February 1974 where it peaked at number four. Both tracks appeared on Starr's debut rock album, Ringo, produced by Richard Perry and featuring further contributions from Harrison as well as a song each from Lennon and McCartney.\n[…]\nOne of the pair's first collaborations was \"Oh My My\". Over half of the songs on Ringo the 4th were Starkey–Poncia compositions, but the partnership produced just two more songs, released on Bad Boy in 1978.\n[…]\nStarr played the Pope in Ken Russell's Lisztomania (1975), and a fictionalised version of himself in McCartney's Give My Regards to Broad Street in 1984. Starr appeared as himself and a downtrodden alter-ego Ognir Rrats in Ringo (1978), an American-made television comedy film based loosely on The Prince and the Pauper. For the 1979 documentary film on the Who, The Kids Are Alright, Starr appeared in interview segments with fellow drummer Keith Moon.\n[…]\nStarr and His All-Starr Band\n[…]\nRingo Starr's Drummerworld profile\n[…]\nRingo Starr at AllMusic\n[…]\nRingo Starr discography at Discogs\n[…]\nRingo Starr at IMDb\n[…]\nRingo Starr at the TCM Movie Database (archived)\n[…]\nRingo Starr in the Hollywood Walk of Fame Directory\n[…]\nRingo Starr Artwork Archived 13 April 2009 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ringo_Starr",
        "situacao": "ok",
        "texto": "Richard Starkey (Liverpool, 7 de julho de 1940), mais conhecido pelo seu nome artístico Ringo Starr, é um instrumentista, cantor, compositor e ator britânico, que obteve reconhecimento como baterista da banda The Beatles. Além de atuar como baterista, foi intérprete de vários sucessos do grupo, como \"Yellow Submarine\", \"With a Little Help from My Friends\", \"Good Night\" e as regravações de \"Boys\" e\n[…]\nSeu estilo de tocar, que enfatizava o sentimento sobre o virtuosismo técnico, influenciou muitos bateristas a reconsiderar sua forma de tocar de uma perspectiva composicional. Ele também influenciou várias técnicas modernas de bateria, como a empunhadura combinada, afinação da bateria mais baixa e uso de dispositivos de abafamento em anéis tonais. Foi incluído no Hall da Fama da revista Modern Drummer em 1998.\n[…]\nMais ou menos nessa época, ele adotou o nome artístico Ringo Starr, derivado dos anéis que ele usava e também porque implicava uma influência do country e do western. Seus solos de bateria foram chamados de Starr Time.\n[…]\nTjinder Singh, da banda de indie rock Cornershop, destacou o ex-beatle como um baterista pioneiro, acrescentando: \"Houve um tempo em que o consenso comum era que Ringo não sabia tocar. Como assim? Ele é totalmente único, sem igual, e o hip hop tem muito que lhe agradecer\". Em seu livro The Complete Beatles Recording Sessions, Mark Lewisohn confirmou que Starr era proficiente e consistente.\n[…]\nEle influenciou várias técnicas modernas de bateria, como a empunhadura combinada, afinando a bateria mais baixo, usando dispositivos de amortecimento em anéis tonais e colocando a bateria em altos degraus para visibilidade como parte da banda. Ele é muito reconhecido por sentar em uma posição mais alta do que outros bateristas comumente fazem. Isso facilita o acesso ao tom-tom e aos címbalos, além de ajudar no rimshot.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Louis Armstrong",
      "descricao": "Músico e cantor americano de jazz, nascido em Nova Orleans, intérprete de What a Wonderful World"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O apelido Satchmo, de Louis Armstrong, vem de uma brincadeira com que parte do corpo dele?",
    "resposta": "A boca",
    "distratores": [
      "O nariz",
      "As orelhas",
      "As mãos"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Louis_Armstrong"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Louis_Armstrong",
        "situacao": "ok",
        "texto": "Louis Daniel Armstrong (August 4, 1901 – July 6, 1971), nicknamed \"Satchmo\", \"Satch\", and \"Pops\", was an American jazz and blues trumpeter and vocalist. Among the most influential figures in jazz, his career spanned five decades and several eras in the history of the genre. Armstrong received numerous accolades, including the Grammy Award for Best Male Vocal Performance for \"Hello, Dolly!\" in 1965\n[…]\nIn 1991, an asteroid was named 9179 Satchmo in Armstrong's honor. In the summer of 2001, in commemoration of the centennial of his birth, New Orleans's main airport was renamed Louis Armstrong New Orleans International Airport. The entrance to the airport's former terminal building houses a statue depicting Armstrong playing his cornet.\n[…]\nArmstrong, Louis (1954). Satchmo: My Life in New Orleans. ISBN 0306802767.\n[…]\nBrothers, Thomas (2014). Louis Armstrong: Master of Modernism. New York: W. W. Norton & Company.\n[…]\nGiddins, Gary (1988). Satchmo: The Genius of Louis Armstrong. Da Capo Press.\n[…]\nJones, Max, and Chilton, John (1988). Louis: The Louis Armstrong Story, 1900–1971. Da Capo Press. ISBN 978-0306803246.\n[…]\nRiccardi, Ricky (2012). What a Wonderful World: The Magic of Louis Armstrong's Later Years. New York: Vintage. ISBN 9780307473295. OCLC 798285020.\n[…]\n—— (2020). Heart Full of Rhythm: The Big Band Years of Louis Armstrong. New York: Oxford University Press. ISBN 9780190914110. OCLC 1137836373.\n[…]\n—— (2025). Stomp off, Let's Go: The Early Years of Louis Armstrong. New York: Oxford University Press. ISBN 9780197614488. OCLC 1427941152.\n[…]\nStorb, Ilse (1999). Louis Armstrong: The Definitive Biography. ISBN 0820431036.\n[…]\nWillems, Jos (2006). All of Me: The Complete Discography of Louis Armstrong. Scarecrow Press. ISBN 978-0810857308.\n[…]\nLouis Armstrong House Museum\n[…]\nLouis Armstrong at IMDb\n[…]\nLouis Armstrong discography at Discogs\n[…]\nLouis Armstrong collected news and commentary at The New York Times"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Louis_Armstrong",
        "situacao": "ok",
        "texto": "Louis Daniel Armstrong (Nova Orleans, 4 de agosto de 1901 — Queens, 6 de julho de 1971), apelidado \"Satchmo\", \"Satch\" e \"Pops\", foi um músico e vocalista americano. Ele é considerado uma das figuras mais influentes e importantes do jazz, com uma longa carreira de cinco décadas, sendo notório por suas habilidades como trompetista, cornetista, saxofonista.\n[…]\nEm 19 de março de 1918, Satchmo (a alcunha de Armstrong) desposou Daisy Parker de Gretna, Louisiana. Eles adotaram uma criança de 3 anos, Clarence Armstrong, cuja mãe, a prima de Louis, Flora, morrera no parto. Clarence Armstrong era doente mental (resultado de uma pancada em tenra idade) e Louis passaria o resto da sua vida a tomar conta dela. Louis divorciou-se de Daisy e pouco depois, esta faleceu.\n[…]\nNa Carrol Dickerson Orchestra, com Earl Hines no piano, que rapidamente foi transformada na Louis Armstrong's Stompers, Armstrong fez amizade vitalícia com Hines e dirigiu, pela primeira vez, um grupo musical.\n[…]\nLouis Armstrong in Prague Lucerna Hall 1965 (Panton, 1979) – relançado em CD em 2000 pela Columbia\n[…]\nLouis Armstrong's All Time Greatest Hits (MCA, 1994)\n[…]\nLouis Armstrong Hot Five and Hot Seven Sessions\n[…]\nThe Complete Ella Fitzgerald & Louis Armstrong on Verve (1997) – reembalagem de Ella and Louis, Ella and Louis Again, e Porgy and Bess\n[…]\nLouis Armstrong and Duke Ellington: The Great Summit/Complete Sessions (2000) – inclui CD adicional\n[…]\nThe Complete Decca Studio Recordings of Louis Armstrong and the All-Stars (Mosaic Records, 1993)\n[…]\nThe Complete Louis Armstrong Decca Sessions 1935–1946 (Mosaic Records, 2009)\n[…]\nThe Columbia & RCA Victor Live Recordings of Louis Armstrong & The All-Stars (Mosaic Records, 2013)\n[…]\nThe Complete Louis Armstrong Columbia & RCA Victor Studio Sessions 1946–66 (Mosaic Records, 2021)\n[…]\nLouis In London (Verve Records/UMe, 2024)\n[…]\nLouis Armstrong no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Ray Charles",
      "descricao": "Cantor e pianista americano, pioneiro da soul music"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Ray Charles nasceu Ray Charles Robinson e deixou de usar o sobrenome para não ser confundido com que boxeador?",
    "resposta": "Sugar Ray Robinson",
    "distratores": [
      "Muhammad Ali",
      "Joe Louis",
      "Rocky Marciano"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Ray_Charles"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ray_Charles",
        "situacao": "ok",
        "texto": "Ray Charles Robinson (September 23, 1930 – June 10, 2004) was an American singer, songwriter, and pianist. He is regarded as one of the most influential musicians of the 20th century and was often referred to by contemporaries as \"The Genius\". Among friends and fellow musicians, Charles preferred being called \"Brother Ray\". He lost his vision as a child, possibly due to glaucoma, and consequently \n[…]\nWith Charles on piano, McKee on guitar, and Milton Garred on bass, The McSon Trio (named for McKee and Robinson) started playing the 1–5 A.M. shift at the Rocking Chair. Publicity photos of this trio are some of the earliest known photographs of Charles. In April 1949, he and his band recorded \"Confession Blues\", which became his first national hit, soaring to the second spot on the Billboard R&B chart.\n[…]\nFounded in 1986, the Ray Charles Foundation maintains the mission statement of financially supporting institutions and organizations in the research of hearing disorders. Originally known as The Robinson Foundation for Hearing Disorders, it was renamed in 2006 and has provided financial donations to numerous institutions involved in hearing loss research and education.\n[…]\nCharles met his second wife, Della Beatrice Howard Robinson (called \"Bea\" by Charles), in Texas in 1954. They married the following year, on April 5, 1955. Their first child, Ray Charles Robinson Jr., was born in 1955. Charles was not in town for the birth because he was playing a show in Texas. The couple had two more sons, David and Robert, and raised their children in View Park, California. Charles felt that his heroin addiction took a toll on Della during their marriage.\n[…]\nRay Charles Robinson Jr., born May 25, 1955 (son with wife Della Bea Robinson)\n[…]\nSheila Robinson, born in 1963 (daughter with Sandra Jean Betts)\n[…]\nRyan Corey Robinson den Bok, born in 1987 (son with Mary Anne den Bok)\n[…]\nRay Charles at Rolling Stone"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ray_Charles",
        "situacao": "ok",
        "texto": "Ray Charles Robinson (Albany, 23 de setembro de 1930 – Los Angeles, 10 de junho de 2004) foi um pianista norte-americano. Ele é considerado um dos cantores mais icônicos e influentes da história, e foi frequentemente referido pelos contemporâneos como \"O Gênio\". Entre amigos e colegas músicos ele preferia ser chamado \"Brother Ray\" (Irmão Charles). Charles ficou cego durante a infância, possivelmen\n[…]\nSeu nome de batismo, Ray Charles Robinson, foi encurtado para Ray Charles quando entrou na indústria do entretenimento para não ser confundido com o famoso boxeador Sugar Ray Robinson.\n[…]\nEra filho de Aretha Williams: esta trabalhava na área rural, e Bailey Robinson: um reparador de ferrovia, mecânico e biscateiro. Os dois nunca se casaram. A família mudou-se para Greenville, Flórida, quando Ray era um bebê. Bailey teve mais três famílias, Aretha cuidava da família sozinha.\n[…]\nRay Charles teve dois casamentos e foi pai de doze filhos com várias mulheres. Sua primeira filha foi Evelyn, nascida em 1949, fruto de sua relação com Louise Flowers. Seu primeiro casamento foi com Eileen Williams Robinson em 31 de julho de 1951, tendo se separado pouco mais de um ano depois.\n[…]\nO segundo casamento foi com Della Beatrice Howard Robinson, carinhosamente apelidada de \"B\", em 5 de abril de 1955. O casamento durou 22 anos e gerou três filhos: Ray Jr. (nascido em 1955), David (nascido em 1958) e Robert (nascido em 1960). Durante o casamento, Charles sentiu que seus problemas com heroína afetaram a esposa.\n[…]\nPosteriormente, o cantor teve um relacionamento de seis anos com Margie Hendricks, uma de suas Raelettes, da qual teve Charles Wayne (nascido em 1959). Seu caso com Mae Mosley Lyles resultou em outra filha, Raenee, nascida em 1961. Em 1963, Charles e Sandra Betts tiveram uma filha, batizada Sheila Jean Robinson. Em 1966, mais duas filhas nasceram ao cantor: Aretha e Alexandra.\n[…]\nRay Charles no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "David Bowie",
      "descricao": "Cantor, compositor e ator britânico, criador do personagem Ziggy Stardust, morto em 2016"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "David Bowie nasceu David Jones e trocou de nome para não ser confundido com o cantor de que banda?",
    "resposta": "The Monkees",
    "distratores": [
      "The Kinks",
      "The Hollies",
      "The Animals"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/David_Bowie"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/David_Bowie",
        "situacao": "ok",
        "texto": "David Robert Jones (8 January 1947 – 10 January 2016), known as David Bowie, was an English singer, songwriter and actor. Regarded as among the most influential musicians of the 20th century, he was known for his frequent reinvention and visual presentation, and is often referred to as the \"chameleon of rock\". His music, stagecraft and fashion have had a significant impact on popular culture.\n[…]\nDavid Robert Jones was born on 8 January 1947 in Brixton, London. His mother, Margaret Mary \"Peggy\" (née Burns), was born at Shorncliffe Army Camp, Kent. She was a waitress at a cinema in Royal Tunbridge Wells. His father, Haywood Stenton \"John\" Jones, was from Doncaster, Yorkshire, and was a promotions officer for the children's charity Barnardo's. The family lived at 40 Stansfield Road in the south London borough of Lambeth.\n[…]\nHis new manager, Ralph Horton, later instrumental in his transition to solo artist, helped secure him a contract with Pye Records. Publicist Tony Hatch signed Bowie on the basis that he wrote his own songs. Dissatisfied with Davy (and Davie) Jones, which in the mid-1960s invited confusion with Davy Jones of the Monkees, he took on the stage name David Bowie after the 19th-century American pioneer James Bowie and the knife he had popularised.\n[…]\nOn 7 January 2017, the BBC broadcast the documentary David Bowie: The Last Five Years. The biopic Stardust was announced on 31 January 2019, with Johnny Flynn as Bowie. Written by Christopher Bell and directed by Gabriel Range, the film follows Bowie on his first trip to the US in 1971. Bowie's son Duncan Jones spoke out against the film, saying he was not consulted and that the film would not have permission to use Bowie's music.\n[…]\nDavid Bowie discography at Discogs\n[…]\nDavid Bowie at the Internet Broadway Database\n[…]\n\"David Bowie\". Rock and Roll Hall of Fame.\n[…]\nPortraits of David Bowie at the National Portrait Gallery, London"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/David_Bowie",
        "situacao": "ok",
        "texto": "David Bowie, nome artístico de David Robert Jones (Londres, 8 de janeiro de 1947 — Nova Iorque, 10 de janeiro de 2016), foi um cantor, compositor, ator e produtor musical britânico.\n[…]\nDavid Bowie nasceu como David Robert Jones em Brixton, Londres, em 8 de janeiro de 1947. Sua mãe, Margaret Mary \"Peggy\", era descendente de irlandeses e trabalhava como arrumadeira de cinema, enquanto seu pai, Haywood Stenton \"John\" Jones, era oficial de promoções da Barnardo's. A família vivia no número 40 da Stansfield Road, próximo da fronteira das zonas londrinas do sul de Brixton e Stockwell.\n[…]\nLeslie Conn logo começou a promover o trabalho de David Bowie. O primeiro single do cantor, \"Liza Jane\", creditado à David Jones e os King Bees, não logrou nenhum sucesso comercial. Desapontado com os King Bees e o repertório blues de Howlin' Wolf e Willie Dixon, Bowie deixou a banda a menos de um mês depois de entrar para a Manish Boys, banda com levada blues, mas que também incorporava elementos do folk e soul: \"Eu costumava sonhar em ser o Mick Jagger deles\", recordaria Bowie anos mais tarde.\n[…]\nInsatisfeito com seu nome artístico, na época Davy (e Davie) Jones, que em meados da década de 1960 permitia confusão com o ator Davy Jones do The Monkees, o jovem músico renomeou seu nome artístico baseado no sobrenome de um americano do século XIX chamado Jim Bowie e também à faca que ele popularizou. Seu nome também pode ser uma referência ao personagem David Bowman de 2001: A Space Odyssey, famoso filme que inspirou a canção Space Oddity.\n[…]\n1967: David Bowie\n[…]\n1969: David Bowie\n[…]\nDavid Bowie no Myspace\n[…]\nDavid Bowie (em inglês) no AllMusic\n[…]\nDavid Bowie no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Beyoncé",
      "descricao": "Cantora, compositora e atriz americana, ex-vocalista do Destiny's Child."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Em 2008, Beyoncé lançou um álbum com o nome de seu alter ego de palco, mais ousado. Como se chama esse alter ego?",
    "resposta": "Sasha Fierce",
    "distratores": [
      "Roxy Lane",
      "Mrs. Carter",
      "Diva Storm"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/I_Am..._Sasha_Fierce"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/I_Am..._Sasha_Fierce",
        "situacao": "ok",
        "texto": "I Am... Sasha Fierce is the third studio album by American singer Beyoncé. It was released on November 12, 2008, by Columbia Records and Music World Entertainment. The album was recorded from November 2007 to August 2008, with production handled by Darkchild, Toby Gad, Jim Jonsin, Rico Love, Stargate, Tricky Stewart, Ryan Tedder of OneRepublic, and The-Dream, among others.\n[…]\nThe album was titled I Am... Sasha Fierce to showcase the difference between Beyoncé and her alter ego Sasha Fierce; the first disc is titled I Am... while the second is titled Sasha Fierce.\n[…]\nBeyoncé promoted I Am... Sasha Fierce through various televised appearances and awards ceremonies, performing songs from the album from late 2008 to early 2010. Beyoncé's father and then-manager Mathew Knowles held a listening party for the album in New York City on October 22, 2008. She first promoted \"Single Ladies (Put a Ring on It)\" at a concert organized by the Power 105.1 radio station on October 29.\n[…]\nI Am... Sasha Fierce debuted at number one on the U.S. Billboard 200, selling 482,000 copies in its first week and giving Beyoncé her third consecutive number-one album in the United States, fourth overall, including Destiny's Child's Survivor (2001). With the debut, Beyoncé became the third female artist of the 2000s to have her first three solo albums debut atop the U.S. Billboard 200. Having sold 1,459,000 copies in six weeks of release by the end of 2008, I Am...\n[…]\nSasha Fierce has sold 8.12 million album-equivalent units in the United States. In the United Kingdom, the album debuted at number ten on November 29, 2008, becoming Beyoncé's lowest-debuting album despite having higher first-week sales than her previous album, B'Day (2006). Following her performance at The X Factor fifth season finale with winner Alexandra Burke, the album moved up to number nine on December 27, 2008."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/I_Am..._Sasha_Fierce",
        "situacao": "ok",
        "texto": "I Am... Sasha Fierce é o terceiro álbum de estúdio da artista musical estadunidense Beyoncé. O seu lançamento ocorreu em 12 de novembro de 2008, através das gravadoras Columbia Records e Music World Music. Com o término das atividades promocionais de B'Day (2006), ela deu início ao desenvolvimento de I Am... Sasha Fierce em dezembro de 2007. Em fevereiro de 2008, a artista publicou uma carta direc\n[…]\nO álbum introduz a personalidade alternativa da cantora, Sasha Fierce. Ela revelou que Sasha nasceu durante a produção de seu single de estreia \"Crazy in Love\". Em entrevista à Emmet Sullivan, da revista People, Beyoncé afirmou que sua personalidade alternativa é usada estritamente para o palco, com Sullivan descrevendo Sasha Fierce como a personalidade sensual e agressiva de Knowles.\n[…]\nEm Sasha Fierce, o álbum lento mostrou muito mais minha habilidade vocal. E há também a parte animada para mostrar a dança\".\n[…]\nMas é o trabalho mais ousado na discografia de Beyoncé\". Braulio Lorentz, do Jornal do Brasil, expressou que \"o terceiro álbum da neo-diva é conceitual: um dos CDs tem faixas melosas e meio-amargas numa tentativa de mostrar seu amadurecimento; no outro, a persona Sasha Fierce se apresenta por meio de dançantes petardos, sem fugir do hip hop de cantoras como Mariah Carey, Rihanna e (...) Beyoncé\".\n[…]\nVocais: Beyoncé Knowles\n[…]\nVocais de apoio: Beyoncé Knowles, Rico Love\n[…]\nNos Estados Unidos, I Am... Sasha Fierce estreou no topo da Billboard 200, vendendo 482 mil unidades em sua primeira semana. Esse feito deu à Beyoncé seu terceiro álbum consecutivo em carreira solo a alcançar o posto e a tornou a terceira artista feminina que debutou nos anos 2000 a ter seus três primeiros discos a estrearem no topo da tabela. Com 1 milhão e 459 mil cópias comercializadas em apenas seis semanas de lançamento, emergiu como o décimo álbum mais adquirido de 2008 no país.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Elton John",
      "descricao": "Cantor, compositor e pianista britânico, nascido Reginald Dwight."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Em 1994, Elton John compôs, com letras de Tim Rice, as canções de que animação da Disney?",
    "resposta": "O Rei Leão",
    "distratores": [
      "Aladdin",
      "Pocahontas",
      "A Bela e a Fera"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Lion_King",
      "https://en.wikipedia.org/wiki/Can_You_Feel_the_Love_Tonight"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Lion_King",
        "situacao": "ok",
        "texto": "The Lion King is a 1994 American animated musical drama film directed by Roger Allers and Rob Minkoff and written by Irene Mecchi, Jonathan Roberts, and Linda Woolverton. Produced by Walt Disney Feature Animation, it features an ensemble voice cast consisting of Matthew Broderick, James Earl Jones, Jeremy Irons, Jonathan Taylor Thomas, Moira Kelly, Niketa Calame, Madge Sinclair, Nathan Lane, Ernie\n[…]\nWoolverton, the screenwriter for Disney's Beauty and the Beast (1991), drafted early scripts for The Lion King before Mecchi and Roberts were hired to revise once Woolverton left to prioritize other projects. Scribner departed due to disagreements over the studio's decision to reimagine the film as a musical, with original songs by Elton John and Tim Rice. Minkoff was hired to replace him in April 1992. Throughout production, the creative team visited Kenya for research and inspiration.\n[…]\nLyricist Tim Rice, who was working with composer Alan Menken on songs for Aladdin (1992), was invited to write songs for The Lion King, and accepted on the condition of bringing in a composing partner. As Menken was unavailable, the producers accepted Rice's suggestion of Elton John, after Rice's invitation of ABBA fell through due to Benny Andersson's commitments to the stage musical Kristina från Duvemåla.\n[…]\nWalt Disney Theatrical produced a musical stage adaptation of the same name, which premiered in Minneapolis, Minnesota in July 1997, and later opened on Broadway in October 1997 at the New Amsterdam Theatre. The Lion King musical was directed by Julie Taymor and featured songs from both the movie and Rhythm of the Pride Lands, along with three new compositions by Elton John and Tim Rice. Mark Mancina did the musical arrangements and new orchestral tracks.\n[…]\nThe Lion King at Disney A to Z"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Can_You_Feel_the_Love_Tonight",
        "situacao": "ok",
        "texto": "\"Can You Feel the Love Tonight\" is a song from Disney's 1994 animated feature film The Lion King composed by British musician Elton John with lyrics by Tim Rice. With John's version released as a single in May 1994, by Hollywood, Walt Disney and Mercury Records, the song was a hit in the UK, peaking at number 14 on the UK singles chart, and achieved success in the United States, reaching number fo\n[…]\nThe song, written by Elton John and Tim Rice, was performed in the film by Kristle Edwards (also known as Kristle Murden), Joseph Williams, Sally Dworsky, Nathan Lane, and Ernie Sabella, while another version used in the film's closing credits was performed by John. It won the 1994 Academy Award for Best Original Song, and the Golden Globe Award for Best Original Song. It also earned John the Grammy Award for Best Male Pop Vocal Performance.\n[…]\nWithin around one and a half months before the film was released in June 1994, John's recording was released throughout radio stations as a commercial single and entered the US Billboard Hot 100. The music video of John's recording, directed by Matthew Amos, contains montages of John performing the song and scenes from the film.\n[…]\nAugusto from Cash Box commented, \"From Hollywood's The Lion King soundtrack comes the always welcome voice of Elton John, who takes a stab at reclaiming his talent for crossover hitmaking with this orchestrated ballad, his most affecting single choice in years.\" He added, \"Moving performance and a heady theme add up to hits radio action as well the usual adult formats and even some classic rock attention.\n[…]\nElton John – piano, lead vocals\n[…]\nElton John; Bernie Taupin (4 October 1997). \"Elton John: 30 Years of Music with Bernie Taupin\". Billboard (Interview). Interviewed by Timothy White; Craig Rosen. Retrieved 27 November 2017.\n[…]\n\"Can You Feel the Love Tonight\" composed by Elton John Piano sheet music | pdf"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/O_Rei_Le%C3%A3o",
        "situacao": "ok",
        "texto": "The Lion King (bra/prt: O Rei Leão) é o 32.º longa-metragem animado produzido pela Walt Disney Feature Animation e pela Walt Disney Pictures e distribuído pela Buena Vista Pictures. Foi dirigido por Roger Allers e Rob Minkoff, com roteiro creditado a Linda Woolverton, Irene Mecchi e Jonathan Roberts, e música de Elton John com letras de Tim Rice.\n[…]\nO Rei Leão foi lançado em 15 de junho de 1994 e foi aclamado pela crítica e público, que elogiou o filme pela sua música, enredo e animação, ganhando dentre os vários prêmios, o Oscar de Melhor Trilha Sonora Original (Hans Zimmer) e Melhor Canção Original (\"Can You Feel the Love Tonight\", de Elton John e Tim Rice), e o Globo de Ouro de Melhor Filme Comédia ou Musical. O filme foi considerado a maior clássico da era do Renascimento da Disney e a maior animação de todos os tempos.\n[…]\nO letrista Tim Rice, que estava trabalhando com o compositor Alan Menken em canções para Aladdin, foi chamado para escrever as letras, aceitando com a condição de encontrar um parceiro de composição. Como Menken estava trabalhando em Pocahontas, os produtores aceitaram a sugestão de Rice, que foi Elton John, após o convite aos integrantes do ABBA não ter dado certo, porque Benny Andersson estava ocupado com o musical Kristina från Duvemåla.\n[…]\nJohn e Rice escreveram cinco canções originais para o filme (\"Circle of Life\", \"I Just Can't Wait to Be King\", \"Be Prepared\", \"Hakuna Matata\" e \"Can You Feel the Love Tonight\") e \"Can You Feel the Love Tonight\" é executada pelo cantor durante créditos finais. O lançamento em IMAX e DVD acrescentou outra canção, \"The Morning Report\", que foi baseado em uma canção descartada durante a produção original e que eventualmente foi destaque no musical de O Rei Leão.\n[…]\nSite Brasileiro do Rei Leão",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Lady Gaga",
      "descricao": "Cantora e atriz americana, nascida Stefani Germanotta"
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Lady Gaga ganhou o Oscar de canção original com Shallow, que canta com Bradley Cooper. De que filme é essa canção?",
    "resposta": "Nasce uma Estrela",
    "distratores": [
      "Casa Gucci",
      "Bohemian Rhapsody",
      "Rocketman"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Shallow_(Lady_Gaga_and_Bradley_Cooper_song)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Shallow_(Lady_Gaga_and_Bradley_Cooper_song)",
        "situacao": "ok",
        "texto": "\"Shallow\" is a song performed by American singer Lady Gaga and American actor and filmmaker Bradley Cooper. It was released through Interscope Records on September 27, 2018, as the lead single from the soundtrack to the 2018 musical romantic drama film A Star Is Born. \"Shallow\" was written by Gaga with Mark Ronson, Anthony Rossomando and Andrew Wyatt, and produced by Gaga with Benjamin Rice.\n[…]\nSeveral critics felt that \"Shallow\" was worthy of a nomination for the Academy Award for Best Original Song. Pitchfork's Eve Barlow commended Gaga's performance, noting the theme \"may prove to be Gaga's own apex in the spotlight, her completion into superstar of charts and screen\". She wrote that although Cooper did not have \"the deep growl of Kris Kristofferson (who played the lead male character in the 1976 film) [he] pulls off the earnestness required to hand over [to Gaga]\".\n[…]\nStevens compared Gaga's vocals to those in Fleetwood Mac songs for their \"raw, guttural, powerful\" delivery and the ill-fated romance it heralds. Spin's Maggie Serota felt Cooper was convincing \"as a grizzled, whiskey-throated troubadour\", and that the ballad \"gives Lady Gaga a chance to show off her impressive pipes\". Maeve McDermott of the Chicago Sun-Times praised \"Shallow\" for elevating A Star Is Born \"from normal blockbuster fare to a masterwork of the form\".\n[…]\nAt the 61st Annual Grammy Awards on February 10, 2019, Gaga was joined onstage by Ronson, Rossomando and Wyatt, while Cooper was attending the 72nd British Academy Film Awards in London. Gaga wore a sparkling skin-tight bodysuit and high platform shoes, described as reminiscent of her looks from her The Fame-era. She also carried a bedazzled microphone stand. Brittany Spanos from Rolling Stone thought that Gaga and Ronson \"stole the Grammy Awards show with a rocked-up performance\" of \"Shallow\".\n[…]\nMixed at Electric Lady Studios (New York City)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Shallow",
        "situacao": "ok",
        "texto": "\"Shallow\" é uma canção gravada pela cantora, compositora e atriz norte americana Lady Gaga e pelo ator e diretor Bradley Cooper para o filme A Star Is Born. Lançada em 27 de setembro de 2018, a canção é vencedora do Oscar, Globo de Ouro e 2 Grammys, além de ter atingido a posição número 1 da Billboard Hot 100. É o single principal da trilha sonora da obra.\n[…]\nNo filme, depois de conhecer o personagem de Gaga, Ally, o personagem de Bradley Cooper, Jackson Maine, fala com ela sobre suas músicas e sonhos. Ally confessa que escreveu uma música e canta brevemente para Jackson. Suas letras se tornam a base de \"Shallow\", cuja versão completa é usada em uma sequência quando Jackson entra no palco do espaço musical Greek Theatre, em Los Angeles, e canta os versos iniciais da canção.\n[…]\nBrian Truitt, do jornal USA Today, escreveu: \"É uma canção dramática e cativante que não só deve concorrer como Oscar de melhor canção original - honestamente, o filme terá algumas músicas para a consideração da Academia - como também pode ser um hit inevitável e favorito nos bares de karaokê de todos os lugares.\" O portal de notícias brasileiro G1 disse: \"No clipe de \"Shallow\", Lady Gaga mostrou quais são os seus trunfos para ganhar seu primeiro Oscar.\n[…]\n\"Shallow\" também atingiu a primeira posição da Canadian Digital Songs, caracterizando a quinta entrada de Lady Gaga na parada desde \"Born This Way\" (2011). Consecutivamente, estreou na 16ª posição da Canadian Hot 100.\n[…]\nDesse modo, a canção é a primeira vencedora do Oscar de Melhor Canção Original a atingir o topo da parada desde \"Lose Yourself\", de Eminem, do filme 8 Mile (2002), e a primeira entrada de Bradley Cooper na mesma tabela. Permanecendo por 45 semanas consecutivas, consagrou-se como a canção vencedora do Oscar de Melhor Canção Original a passar mais tempo na tabela musical.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Adele",
      "descricao": "Cantora e compositora britânica, autora dos álbuns 19, 21 e 25."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Em 2013, Adele ganhou o Oscar de canção original com o tema de que filme de James Bond?",
    "resposta": "007 Operação Skyfall",
    "distratores": [
      "007 Contra Spectre",
      "Cassino Royale",
      "Quantum of Solace"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Skyfall_(Adele_song)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Skyfall_(Adele_song)",
        "situacao": "ok",
        "texto": "\"Skyfall\" is a song recorded by the English singer Adele for the James Bond film of the same name. She co-wrote the song with its producer Paul Epworth, and it features orchestration from J. A. C. Redford. Eon Productions invited the singer to work on the theme song in early 2011, a task that Adele accepted after reading the film's script.\n[…]\nDuring an interview at their post-Academy Award for Best Original Song win at the 85th Academy Awards in February 2013, Adele revealed that the first draft of the song was written in 10 minutes. After Adele underwent throat microsurgery for vocal problems, she recorded a demo of the track and sent it to Mendes, who was doing the principal photography of Skyfall. The director in turn played the demo for film producer Barbara Broccoli and James Bond actor Daniel Craig, both of whom \"shed a tear\".\n[…]\n\"Skyfall\" is an orchestral pop and pop-soul song with a duration of four minutes and 46 seconds. Epworth stated that although \"Skyfall\" is an original composition, he and Adele had worked to capture \"the James Bond feeling\" of previous theme songs. The song intentionally references Monty Norman's \"James Bond Theme\" after the first chorus.\n[…]\nAfter Skyfall was released in cinemas in North America, Adele's song saw a sales increase of 66%. In January 2013, unofficial remixes also warranted the song an inclusion on the Billboard Hot Dance Club Songs chart, peaking at the 10th spot. After Adele won the Oscar for the song, sales in the US increased by 56% with 56,000 downloads. The following week, \"Skyfall\" sold an additional 103,000 downloads and climbed 28 spots on the Billboard Hot 100.\n[…]\nIn 2013, New Hampshire-based band Our Last Night included a cover version of \"Skyfall\" on the deluxe edition of their third album entitled Age of Ignorance.\n[…]\nOutline of James Bond"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Skyfall_%28can%C3%A7%C3%A3o%29",
        "situacao": "ok",
        "texto": "\"Skyfall\" é a música temática do filme homônimo de 2012, o 23.º da franquia cinematográfica de James Bond, interpretada pela cantora e compositora inglesa Adele. A canção foi escrita por Adele e pelo produtor Paul Epworth e contém orquestração de J. A. C. Redford. A produtora cinematográfica EON Productions convidou a cantora para trabalhar na música no início de 2011 e Adele aceitou a tarefa após\n[…]\n\"Skyfall\" se tornou a primeira canção tema de James Bond a ganhar o Globo de Ouro, o Brit Award, o Grammy Award e o Oscar. Adele cantou a música ao vivo pela primeira vez durante a cerimônia do Oscar 2013.\n[…]\n\"Skyfall\" é um pop orquestral de duração de quatro minutos e quarenta e seis segundos. Epworth afirmou que apesar da canção ser uma composição original, ele e Adele tentaram capturar \"o sentimento James Bond\" dos temas anteriores. A música intencionalmente usa o \"James Bond Theme\" de Monty Norman após o primeiro refrão.\n[…]\n\"Skyfall\" venceu o Oscar de Melhor Canção Original; foi o primeiro tema de Bond a conseguir uma indicação desde \"For Your Eyes Only\" em 1982 e o primeiro a vencer. Também venceu o Critics' Choice Award de Melhor Canção, o Globo de Ouro de Melhor Canção Original e o Prêmio Brit de Melhor Single Britânico do Ano. O discurso de agradecimento de Adele no último prêmio foi feito através de uma mensagem de vídeo já que ela estava em Los Angeles se preparando para sua performance no Oscar.\n[…]\nAdele interpretou \"Skyfall\" ao vivo pela primeira vez na cerimônia do Oscar 2013 em 24 de fevereiro, antes de receber seu prêmio. Para se preparar para a performance , a cantora foi aconselhada por Ayda Field, esposa de Robbie Williams, sobre técnicas de respiração para combater medo de palco. Antes na cerimônia, Shirley Bassey havia interpretado outro tema de Bond, \"Goldfinger\", do filme homônimo.\n[…]\n\"Skyfall\" – 4:46\n[…]\n\"Skyfall\" – 4:46\n[…]\n\"Skyfall\" (instrumental) – 4:46",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Whitney Houston",
      "descricao": "Cantora e atriz americana, estrela de O Guarda-Costas, morta em 2012"
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "No filme O Guarda-Costas, de 1992, Whitney Houston contracenou com que ator, no papel do seu segurança?",
    "resposta": "Kevin Costner",
    "distratores": [
      "Mel Gibson",
      "Harrison Ford",
      "Richard Gere"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Bodyguard_(1992_film)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Bodyguard_(1992_film)",
        "situacao": "ok",
        "texto": "The Bodyguard is a 1992 American romantic thriller drama film directed by Mick Jackson, and written by Lawrence Kasdan, who produced it with Kevin Costner and Jim Wilson. Starring Costner, Whitney Houston (in her feature film acting debut), Gary Kemp, Bill Cobbs, and Ralph Waite, the film follows Frank Farmer, a former United States Secret Service agent turned bodyguard, who is hired to protect Ra\n[…]\nAfter Kasdan made his successful directorial debut with Body Heat, he was asked to direct The Bodyguard, but was reluctant, preferring to make The Big Chill, where he met aspiring actor Kevin Costner; the two became friends and when Kasdan prepared for the western film, Silverado, he hired Costner to be one of the stars on the film. It was while on break from shooting the film in 1985 that Costner read the script of The Bodyguard and became enthusiastic about it.\n[…]\nDue to Houston doing the I'm Your Baby Tonight World Tour at the time, Costner and Kasdan set up filming for that November.\n[…]\nIt received seven Golden Raspberry Award nominations, including Worst Picture, Worst Actor (Costner), Worst Actress (Houston), Worst Screenplay (Kasdan) and Worst Original Song (\"Queen of the Night\") at the 13th Golden Raspberry Awards. Houston was also nominated for Worst New Star as was Kevin Costner's haircut, however the film did not win in any category.\n[…]\nThe musical adaptation of the film, written by Alexander Dinelaris, produced by David Ian and directed by Thea Sharrock, opened at the Adelphi Theatre in London's West End on December 5, 2012, after previews at the same theatre on November 6 and closed on August 29, 2014. Prior to producing the musical, Ian won stage rights from Kevin Costner and Lawrence Kasdan to produce it. The musical featured songs by Houston, both from the actual film and also from her own extensive catalog."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/O_Guarda-Costas",
        "situacao": "ok",
        "texto": "The Bodyguard (bra/prt: O Guarda-Costas) é um filme de suspense e drama romântico americano de 1992 dirigido por Mick Jackson, escrito por Lawrence Kasdan e estrelado por Kevin Costner, Whitney Houston (em sua estreia como atriz), Gary Kemp, Bill Cobbs e Ralph Waite. O filme segue um ex-agente do Serviço Secreto dos Estados Unidos que se tornou um guarda-costas contratado para proteger uma atriz e\n[…]\nDepois que Kasdan fez sua estreia como diretor em Body Heat, que se tornou um sucesso, ele foi convidado a dirigir The Bodyguard, mas ele relutou, preferindo fazer The Big Chill. Kevin Costner leu o roteiro ao fazer Silverado com Kasdan e ficou entusiasmado com ele. Os dois então decidiram produzi-lo juntos. Depois que Costner se tornou uma grande estrela com o sucesso de Os Intocáveis ​​e Robin Hood - O Príncipe dos Ladrões, ele ganhou mais influência durante a realização de O Guarda-Costas.\n[…]\nEm abril de 1991, Costner anunciou que estrelaria o filme ao lado da cantora Whitney Houston, que iria fazer sua estreia como atriz no filme.\n[…]\nO filme também recebeu sete indicações ao prêmio Framboesa de Ouro, incluindo Pior Filme, Pior Ator (para Costner) e Pior Atriz (para Houston); Houston também foi indicada para categoria Pior Nova Estrela, assim como Pior Penteado pelo corte de cabelo de Kevin Costner. Porém, não conseguiu vencer em nenhuma categoria.\n[…]\nOs Simpsons: no episódio \"Mayored to the Mob\", Homer Simpson recebe treinamento de guarda-costas de um instrutor que canta \"I Will Always Love You\" após a formatura da turma. Também no episódio, Mark Hamill é carregado por Homer de uma forma que parodia a maneira como Costner carrega Houston no filme.\n[…]\nBulletproof: há uma cena do filme que parodia O Guarda-Costas com o personagem de Adam Sandler cantando \"I Will Always Love You\" e comentando que o personagem de Damon Wayans sempre pode ser seu guarda-costas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "David Bowie",
      "descricao": "Cantor, compositor e ator britânico, criador do personagem Ziggy Stardust, morto em 2016"
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Os olhos de David Bowie pareciam ter cores diferentes porque uma pupila ficou sempre dilatada. O que causou isso?",
    "resposta": "Um soco na adolescência",
    "distratores": [
      "Uma doença congênita",
      "Um acidente de carro",
      "Uma queimadura no palco"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/David_Bowie"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/David_Bowie",
        "situacao": "ok",
        "texto": "David Robert Jones (8 January 1947 – 10 January 2016), known as David Bowie, was an English singer, songwriter and actor. Regarded as among the most influential musicians of the 20th century, he was known for his frequent reinvention and visual presentation, and is often referred to as the \"chameleon of rock\". His music, stagecraft and fashion have had a significant impact on popular culture.\n[…]\nDavid Robert Jones was born on 8 January 1947 in Brixton, London. His mother, Margaret Mary \"Peggy\" (née Burns), was born at Shorncliffe Army Camp, Kent. She was a waitress at a cinema in Royal Tunbridge Wells. His father, Haywood Stenton \"John\" Jones, was from Doncaster, Yorkshire, and was a promotions officer for the children's charity Barnardo's. The family lived at 40 Stansfield Road in the south London borough of Lambeth.\n[…]\nHis new manager, Ralph Horton, later instrumental in his transition to solo artist, helped secure him a contract with Pye Records. Publicist Tony Hatch signed Bowie on the basis that he wrote his own songs. Dissatisfied with Davy (and Davie) Jones, which in the mid-1960s invited confusion with Davy Jones of the Monkees, he took on the stage name David Bowie after the 19th-century American pioneer James Bowie and the knife he had popularised.\n[…]\nOn 7 January 2017, the BBC broadcast the documentary David Bowie: The Last Five Years. The biopic Stardust was announced on 31 January 2019, with Johnny Flynn as Bowie. Written by Christopher Bell and directed by Gabriel Range, the film follows Bowie on his first trip to the US in 1971. Bowie's son Duncan Jones spoke out against the film, saying he was not consulted and that the film would not have permission to use Bowie's music.\n[…]\nDavid Bowie discography at Discogs\n[…]\nDavid Bowie at the Internet Broadway Database\n[…]\n\"David Bowie\". Rock and Roll Hall of Fame.\n[…]\nPortraits of David Bowie at the National Portrait Gallery, London"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/David_Bowie",
        "situacao": "ok",
        "texto": "David Bowie, nome artístico de David Robert Jones (Londres, 8 de janeiro de 1947 — Nova Iorque, 10 de janeiro de 2016), foi um cantor, compositor, ator e produtor musical britânico.\n[…]\nAinda no mesmo ano, ele fez uma aparição no filme alemão Christiane F., uma história baseada em fatos reais sobre uma adolescente viciada em drogas na Berlim da década de 1970. A trilha sonora, constituída principalmente por canções já escritas anteriormente por Bowie, foi lançada como Christiane F. meses depois. Bowie interpretou o papel principal de uma adaptação televisiva de 1981 da peça Baal de Bertolt Brecht.\n[…]\nTony Visconti, produtor musical de Bowie, disse:\n[…]\nNa recente biografia David Bowie - A Biografia, escrita por Marc Spitz, lançada originalmente em 2009 e em 2010 no Brasil, o biógrafo revela que, em sua adolescência, Bowie teve muitas experiências homossexuais (e cita uma frase que o cantor disse na entrevista de 76 da Playboy: \"Quando fiz 14 anos, o sexo, de repente, se tornou relevante. Não importava realmente com quem ou como era, contanto que fosse uma experiência sexual.\n[…]\nO biógrafo David Buckley considera que, nessa época, ele surgiu como a última estrela pop de todos os tempos e que nenhuma outra veio a existir após dele; sua produção musical durante a década criou um dos maiores cultos da cultura pop. De acordo com diversos autores, por exemplo, ao incorporar personas andróginas como Ziggy Stardust e Aladdin Sane na era do glam rock nos anos 70, Bowie recriou uma classe adolescente independente na época e também auxiliou movimentos como a libertação gay.\n[…]\n1967: David Bowie\n[…]\n1969: David Bowie\n[…]\nDavid Bowie no Myspace\n[…]\nDavid Bowie (em inglês) no AllMusic\n[…]\nDavid Bowie no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Elvis Presley",
      "descricao": "Cantor e ator americano conhecido como o Rei do Rock and Roll."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Em 1957, no programa de Ed Sullivan, por que Elvis Presley foi filmado só da cintura para cima?",
    "resposta": "Rebolado considerado indecente",
    "distratores": [
      "Calça rasgada no palco",
      "Machucou a perna",
      "Exigência do empresário"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Elvis_Presley"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Elvis_Presley",
        "situacao": "ok",
        "texto": "Elvis Aaron Presley (January 8, 1935 – August 16, 1977) was an American singer and actor. Referred to as the \"King of Rock and Roll\", he is widely regarded as one of the most culturally significant figures of the 20th century. Presley's energetic and sexually provocative performance style, combined with a mixture of influences across color lines during a transformative era in race relations, broug\n[…]\nWith a series of successful television appearances and chart-topping records, Presley became the leading figure of the newly popular rock and roll, though his performing style and promotion of the then-marginalized sound of African Americans led to his being widely considered a threat to the moral well-being of white American youth.\n[…]\nIn January, Neal signed a formal management contract with Presley and brought him to the attention of Colonel Tom Parker, whom he considered the best promoter in the music business. Having successfully managed the top country star Eddy Arnold, Parker was working with the new number-one country singer, Hank Snow. Parker booked Presley on Snow's February tour.\n[…]\nThe pathologists conducting the autopsy considered it possible that he had suffered \"anaphylactic shock brought on by the codeine pills he had gotten from his dentist, to which he was known to have had a mild allergy\". Lab reports filed two months later strongly suggested that polypharmacy was the primary cause of death; one reported \"fourteen drugs in Elvis' system, ten in significant quantity\".\n[…]\nAs a teenager, Presley's musical interests were wide-ranging, and he was deeply informed about both white and African-American musical idioms. Though he never had any formal training, he had a remarkable memory, and his musical knowledge was already considerable by the time he made his first professional recordings aged 19 in 1954.\n[…]\nElvis (1968)\n[…]\nElvis in Concert (1977)\n[…]\nPersonal relationships of Elvis Presley"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Elvis_Presley",
        "situacao": "ok",
        "texto": "Elvis Aaron Presley (Tupelo, 8 de janeiro de 1935 – Memphis, 16 de agosto de 1977) foi um cantor, músico e ator estadunidense. Apelidado de \"Rei do Rock and Roll\" ou simplesmente \"O Rei\", é considerado um dos ícones culturais mais significativos do século XX. Com uma série de aparições bem-sucedidas na televisão e sucessos no topo das paradas tornou-se a principal figura do rock and roll.\n[…]\nA equipe de compositores efetivamente produziu as sessões de Jailhouse e desenvolveu uma estreita relação de trabalho com Presley, que passou a considerá-las como seu \"amuleto da sorte\". \"Ele foi rápido\", disse Leiber. \"Qualquer demonstração dada, ele decorava em dez minutos\".\n[…]\nEm 1967, os contratos de Parker renderam-lhe metade da maior parte dos ganhos do artista com gravações, filmes e mercadorias. A partir de fevereiro de 1972, recebeu um terço do lucro das aparições ao vivo; um acordo de janeiro de 1976 também lhe dava metade disso. Priscilla Presley observou que \"Elvis detestava o lado comercial de sua carreira. Ele assinava um contrato sem nem mesmo lê-lo\". O amigo do cantor, Marty Lacker, considerava seu empresário um \"traficante e um vigarista.\n[…]\nMas Parker continuou jogando tudo para o chão\". A atitude predominante pode ter sido melhor resumida pela resposta que Leiber e Stoller receberam quando trouxeram um projeto de filme sério para o artista, Parker e os proprietários de Hill and Range para sua consideração. No relato de Leiber, Jean Aberbach advertiu-os a nunca mais \"tentar interferir nos negócios ou trabalhos artísticos do processo conhecido como Elvis Presley\".\n[…]\nPresley também anunciou o alcance amplamente expandido das celebridades na era da comunicação de massa: aos 21 anos, dentro de um ano de sua primeira aparição na rede estadunidense de televisão, já era considerado uma das pessoas mais famosas do mundo.\n[…]\nElvis Presley no IMDb\n[…]\nElvis Presley no Instagram",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Wind of Change",
      "descricao": "Balada da banda alemã Scorpions, do álbum Crazy World, de 1990"
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "A balada Wind of Change, sucesso da banda alemã Scorpions no início dos anos noventa, foi inspirada em que processo histórico?",
    "resposta": "O fim da Guerra Fria",
    "distratores": [
      "A Guerra do Golfo",
      "O fim do apartheid",
      "A Guerra das Malvinas"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Wind_of_Change_(Scorpions_song)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Wind_of_Change_(Scorpions_song)",
        "situacao": "ok",
        "texto": "\"Wind of Change\" is a song by German rock band Scorpions, recorded for their 11th studio album, Crazy World (1990). A power ballad, it was composed and written by the band's lead singer, Klaus Meine, and produced by Keith Olsen and the band.\n[…]\nKlaus Meine and Rudolf Schenker are owners of the trade mark Wind of Change.\n[…]\n\"Wind of Change\" opens with a clean guitar introduction played by Matthias Jabs, which is played alongside Klaus Meine's flat whistle. The guitar solo is played by Rudolf Schenker.\n[…]\nAs of 2022, the Scorpions still perform the song live but with lyrical changes in light of the 2022 Russian invasion of Ukraine. The opening lines are changed to \"Now listen to my heart / It says Ukrainia, waiting for the wind to change.\" Meine stated, \"It's not the time with this terrible war in Ukraine raging on, it's not the time to romanticize Russia.\"\n[…]\nIn February 2023, the official music video hit one billion views on YouTube. During the COVID-19 pandemic, the Scorpions collaborated with Japanese rock star Yoshiki to perform \"Wind of Change\" for the documentary film Yoshiki: Under the Sky. This was the first time the band came together to perform the Ukraine version of the song. The performance was later released as a music video on YouTube.\n[…]\nAs of 2024, the Scorpions have changed the opening lyrics again to adopt a more neutral tone, displaying these on the video screens at gigs: \"Now listen to my heart, it still believes in love, waiting for the wind to change. A dark and lonely night, our dreams will never die, waiting for the wind to change.\" In November 2025, \"Wind of Change\"  hit one billion streams on Spotify.\n[…]\nScorpions\n[…]\n\"Wind of Change\" music video on YouTube"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Wind_of_Change",
        "situacao": "ok",
        "texto": "'Wind of Change em português europeu: Vento de Mudança, em português brasileiro: Vento da Mudança é uma canção de 1990 escrita por Klaus Meine, vocalista da banda de hard rock alemã Scorpions. Klaus Meine inspirou-se nos \"ventos de mudança\" que atingiam a Europa, com a Guerra Fria terminando, o fim da União Soviética e a queda do Muro de Berlim.\n[…]\nA música foi lançada no álbum Crazy World em 1990, mas não se tornou um sucesso em todo o mundo até 1991, quando liderou as paradas na Alemanha e em toda a Europa, e atingiu o número 4 nos Estados Unidos e 2 no Reino Unido. Foi regravada nos álbuns posteriores Live Bites (álbum ao vivo de 1995), Moment of Glory, que teve participação da Orquestra Filarmónica de Berlim, e no álbum de 2001, Acoustica.\n[…]\nA banda também gravou uma versão em russo da música, sob o título Ветер перемен (Veter Peremen) e uma versão em espanhol chamada Vientos de Cambio.\n[…]\nEm todo o mundo, este single vendeu mais de 14 milhões de cópias, tornando-o um do top cinquenta de melhores venda de singles de todos os tempos. O Scorpions detêm o recorde para o single mais vendido por um artista e banda alemã.\n[…]\nO vídeo de \"Wind of Change\" foi visto mais de 1 bilhão de vezes no YouTube até o momento. Com isso, o Scorpions é a primeira banda alemã a quebrar a marca de 100 milhões de visualizações.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Zombie",
      "descricao": "Canção da banda irlandesa The Cranberries lançada em 1994"
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "A canção Zombie, da banda irlandesa The Cranberries, foi escrita como protesto depois de que acontecimento?",
    "resposta": "Um atentado do IRA",
    "distratores": [
      "A Guerra do Golfo",
      "O desastre de Chernobyl",
      "A fome na Etiópia"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Zombie_(The_Cranberries_song)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Zombie_(The_Cranberries_song)",
        "situacao": "ok",
        "texto": "\"Zombie\" is a protest song by Irish alternative rock band the Cranberries. It was written by the lead singer, Dolores O'Riordan, about the young victims of a bombing in Warrington, England, during the Troubles in Northern Ireland. The song was released on 19 September 1994 by Island Records as the lead single from the Cranberries' second studio album, No Need to Argue (1994).\n[…]\nIt goes with Zombie's primal fury; slicker lyrics would have diluted the song's rawness.\"\n[…]\nThe Cranberries kept \"Zombie\" in their concert setlists throughout their career. On 11 November 1994, the Cranberries featured as the musical guest on US talk show Late Show with David Letterman, performing the lead single one month after No Need to Argue was released. Junkee music editor Jules LeFevre, wrote that the footage captured \"O'Riordan's extraordinary voice\" and considered the live performance as \"straight-up sublime\".\n[…]\nOn 25 February 1995, the Cranberries played \"Zombie\" on their appearance on the US show Saturday Night Live, in a slow tempo performance that British author Dave Thompson called \"one of the most powerful performances that the show has ever seen\". The episode came a week after record producer Denny Cordell, an early mentor to the Cranberries, had died.\n[…]\nIt's always a jarring thing to take on someone's piece of work: especially as The Cranberries were a massive band, and 'Zombie' was probably their biggest song\". On Christmas Eve 2017, Waite sent a text message to Vext that said O'Riordan had offered to \"sing on it\". Vext described the situation as \"one of my childhood dreams come true\", while the others musicians \"almost didn't believe it\".\n[…]\nIn 2024, Bambie Thug released a cover of \"Zombie\" as promotion for their Eurovision Song Contest 2024 performance, claiming the song was relevant to protest the Gaza war."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Zombie_%28can%C3%A7%C3%A3o%29",
        "situacao": "ok",
        "texto": "\"Zombie\" é uma canção da banda irlandesa de rock alternativo The Cranberries, lançada em 1994 como um single. A música foi escrita por Dolores O'Riordan e é um lamento aos conflitos envolvendo a questão protestante na Irlanda do Norte. O riff da canção é bem pesado, comparado a outros singles da banda. Ficou em primeiro lugar nas paradas de alguns países como Austrália, Bélgica, Dinamarca e Aleman\n[…]\nA música foi escrita em resposta à morte de Johnathan Ball com apenas 3 anos, e Tim Parry, de 12, mortos no atentado do IRA em Warrington ,noroeste da Inglaterra , quando dois dispositivos escondidos em lixeiras foram detonados. Johnathan Ball morreu no local do ataque como resultado de seus ferimentos causados ​​por estilhaços e, cinco dias depois, Tim Parry perdeu a vida como resultado de ferimentos fatais na cabeça. outros 54 ficaram feridos, alguns gravemente.\n[…]\nA letra e os acordes de \"Zombie\" foram escritos inicialmente em um violão na Irlanda por Dolores O'Riordan sozinha tarde da noite, durante a turnê inglesa do Cranberries 'em 1993. Mas então O'Riordan levou-a para ensaios e foi traduzida para uma guitarra elétrica. A música foi gravada no Windmill Lane Studios, em Dublin, em 1994, com o produtor Stephen Street,e eles passaram muito tempo trabalhando para acertar as configurações da guitarra para dar um som adequadamente expansivo.\n[…]\nEm 10 de setembro de 1995, a banda Faith No More tocou a canção no festival \"Monsters of Rock\" no Estadio Ferrocarril Oeste em Buenos Aires, Argentina.\n[…]\nEm 2008, a banda Animal (formada por Randy Piper, ex-guitarrista do W.A.S.P) fez uma versão da música\n[…]\nEm 2023, os DJs Illenium, Excision e Wooli fizeram um remix de \"Zombie\" com vocais de Valerie Broussard.\n[…]\nEm 2024, Bambie Thug gravou uma versão de \"Zombie\" como promoção de sua participação no Festival Eurovisão da Canção 2024, declarando ser um protesto contra a guerra Israel-Hamas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Jazz",
      "descricao": "Gênero musical surgido entre afro-americanos no sul dos Estados Unidos no início do século vinte"
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "No início do século vinte, o jazz nasceu em que cidade americana, perto da foz do rio Mississippi?",
    "resposta": "Nova Orleans",
    "distratores": [
      "Chicago",
      "Memphis",
      "Saint Louis"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Jazz"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Jazz",
        "situacao": "ok",
        "texto": "Jazz is a music genre that originated in the African-American communities of New Orleans, Louisiana, in the late 19th and early 20th centuries. Its roots are in blues, ragtime, European harmony, African rhythmic rituals, spirituals, hymns, marches, vaudeville song, and dance music. Since the 1920s Jazz Age, it has been recognized as a major form of musical expression in both traditional and popula\n[…]\nIn New Orleans, a white bandleader named Papa Jack Laine integrated blacks and whites in his marching band. He was known as \"the father of white jazz\" because of the many top players he employed, such as George Brunies, Sharkey Bonano, and future members of the Original Dixieland Jass Band. During the early 1900s, jazz was mostly performed in African-American and mulatto communities due to segregation laws.\n[…]\nStoryville brought jazz to a wider audience through tourists who visited the port city of New Orleans. Many jazz musicians from African-American communities were hired to perform in bars and brothels. These included Buddy Bolden and Jelly Roll Morton in addition to those from other communities, such as Lorenzo Tio and Alcide Nunez. Louis Armstrong started his career in Storyville and found success in Chicago. Storyville was shut down by the U.S. government in 1917.\n[…]\nThe bossa nova style was pioneered by Brazilians João Gilberto and Antônio Carlos Jobim and was made popular by Elizete Cardoso's recording of \"Chega de Saudade\" on the Canção do Amor Demais LP. Gilberto's initial releases, and the 1959 film Black Orpheus, achieved significant popularity in Latin America; this spread to North America via visiting American jazz musicians.\n[…]\nWhile bossa nova has been labeled as jazz by music critics, namely those from outside of Brazil, it has been rejected by many prominent bossa nova musicians such as Jobim, who once said \"Bossa nova is not Brazilian jazz.\"\n[…]\nJazz at Lincoln Center"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jazz",
        "situacao": "ok",
        "texto": "O jazz (pronuncia-se [ʤæz]) é uma manifestação artístico-musical originária de comunidades de Nova Orleans, nos Estados Unidos. Tal manifestação teria surgido por volta do final do século XIX, tendo origem na cultura popular e na criatividade das comunidades negras que ali viviam, um de seus espaços de desenvolvimento mais importantes.\n[…]\nEm meados da década de 1930, amantes do jazz de Nova Orleans criticaram as \"inovações\" da era do swing como contrárias a improvisação coletiva, eles pensavam nisso como essencial para a natureza do \"verdadeiro\" jazz.\n[…]\nUma década mais tarde Thomas Jefferson similarmente notou \"o banjar, que foi trazido da distante África\". Foi feita de cabaça, como a bânia senegalesa ou como a akonting do África Ocidental. Festas de abundância com danças africanas, ao som de tambores, eram organizadas aos domingos em Place Congo, Nova Orleans, até 1843, com uma festa similar em Nova Iorque.\n[…]\nAs work songs e field hollers incorporaram um estilo que poderia ser ainda encontrado em penitenciárias dos anos 1960, e em um caso eram parecidas com uma canção nativa ainda utilizada em Senegal. No porto de Nova Orleans, estivadores negros ficaram famosos pelas suas canções de trabalho. Essas canções mostravam complexidade rítmica com características de polirrítmica do jazz.\n[…]\nDe 1904, ele fez tours com shows vaudeville, em torno das cidades do sul, também tocando em Chicago e Nova Iorque.\n[…]\nNesse período, em 1922, a Original Creole Jazz Band se tornou a primeira banda de jazz de músicos negros de Nova Orléans a fazer gravações. No entanto, era Chicago o novo centro do desenvolvimento do Dixieland, porque lá se juntaram King Oliver e Bill Jonhson. Naquele ano Bessie Smith, famosa cantora de blues, também gravou pela primeira vez.\n[…]\nDicionário do Jazz",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Fado",
      "descricao": "Gênero musical português de canto melancólico, acompanhado pela guitarra portuguesa"
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Além do fado de Lisboa, que cidade portuguesa tem uma tradição própria de fado, cantado por estudantes universitários de capa preta?",
    "resposta": "Coimbra",
    "distratores": [
      "Porto",
      "Braga",
      "Évora"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Fado"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fado",
        "situacao": "ok",
        "texto": "Fado (Portuguese pronunciation: [ˈfaðu]; \"destiny, fate\") is a music genre which can be traced to the 1820s in Lisbon, Portugal, but probably has much earlier origins. Fado historian and scholar Rui Vieira Nery states that \"the only reliable information on the history of fado was orally transmitted and goes back to the 1820s and 1830s at best. But even that information was frequently modified with\n[…]\nThe fado style of Coimbra is traditionally linked to the city's university and the style of medieval serenading troubadours. It is sung exclusively by men; both the singers and musicians wear the academic outfit (traje académico): dark robe, cape and leggings. Dating to the troubadour tradition of medieval times, it is sung at night, almost in the dark, in city squares or streets. Typical venues are the steps of the Santa Cruz Monastery and the Old Cathedral of Coimbra.\n[…]\nAs in Lisbon, Coimbra fado is accompanied by the guitarra portuguesa and viola (a type of guitar). The Coimbra guitar has evolved into an instrument different from that of Lisbon, with its own tuning, sound colouring, and construction. Artur Paredes, a progressive and innovative singer, revolutionised the tuning of the guitar and the style with which it accompanied Coimbra fado. Artur Paredes was the father of Carlos Paredes.\n[…]\nSome of the most famous fados of Coimbra include: Fado Hilário, Saudades de Coimbra (\"Do Choupal até à Lapa\"), Balada da Despedida (\"Coimbra tem mais encanto, na hora da despedida\" – the first phrases are often more recognizable than the song titles), O meu menino é d'oiro, and Samaritana. The \"judge-singer\" Fernando Machado Soares is an important figure, being the author of some of those famous fados.\n[…]\nIt is not a Coimbra fado, but a popular song that is the best known title referring to this city: Coimbra é uma lição, which had success with titles such as April in Portugal."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Fado",
        "situacao": "ok",
        "texto": "O fado é um estilo musical português. Embora a sua origem seja objeto de debate, enquanto canção popular urbana, desenvolveu-se sobretudo a partir de Lisboa, no final do século XIX. Geralmente é cantado por uma só pessoa (fadista) acompanhado por uma guitarra clássica (nos meios fadistas denominada viola) e uma guitarra portuguesa.\n[…]\nJá José Alberto Sardinha defende a origem portuguesa do fado relacionando a génese deste estilo musical com a evolução do romanceiro tradicional. Segundo Sardinha, o fado deriva destas canções narrativas, disseminadas em Lisboa maioritariamente por músicos cegos que mendigavam pela cidade.\n[…]\nMuito ligado às tradições académicas da respectiva Universidade, o Fado de Coimbra tem as suas origens trovadoresca nos estudantes de todo o país que levavam as suas guitarras para Coimbra e, como ainda hoje se assiste, é exclusivamente cantado por homens e tanto os cantores como os músicos usam o traje académico: calças e batina pretas, cobertas por capa de fazenda de lã igualmente preta. Canta-se à noite, quase às escuras, em praças ou ruas da cidade.\n[…]\nO Fado de Coimbra é acompanhado igualmente por uma guitarra de Coimbra e uma guitarra clássica (também aqui chamada \"viola\"). No entanto, a afinação e a sonoridade da guitarra portuguesa são, em Coimbra, diferentes das do fado de Lisboa na medida em que as cordas são afinadas um tom abaixo, e a técnica de execução é diferente por forma a projetar o som do instrumento nos espaços exteriores, que são o palco privilegiado desta canção. Também a guitarra clássica se deve afinar um tom abaixo.\n[…]\nA canção mais conhecida é Coimbra é uma lição, que teve um êxito assinalável em todo o mundo com títulos como Avril au Portugal ou April in Portugal, levada pelas mãos de Amália.\n[…]\nFado tradicional dos bairros típicos de Lisboa\n[…]\nHistória do Fado (Portugal Glorioso)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Festival de Woodstock",
      "descricao": "Festival de música realizado em agosto de 1969 numa fazenda em Bethel, no estado de Nova York"
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Apesar do nome, o Festival de Woodstock não aconteceu na cidade de Woodstock, mas numa fazenda de que cidade de Nova York?",
    "resposta": "Bethel",
    "distratores": [
      "Albany",
      "Saugerties",
      "Ithaca"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Woodstock"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Woodstock",
        "situacao": "ok",
        "texto": "The Woodstock Music and Art Fair, commonly referred to as Woodstock, was a music festival held from August 15 to 18, 1969, on Max Yasgur's dairy farm in Bethel, New York, 60 miles (95 km) southwest of the town of Woodstock. Billed as \"an Aquarian Exposition: 3 Days of Peace & Music\", it attracted an audience of more than 460,000. Thirty-two acts performed outdoors despite overcast skies and sporad\n[…]\nThe influx of people to the rural concert site in Bethel created a huge traffic jam. The town of Bethel did not enforce its codes, fearing chaos as crowds flowed to the site. Radio and television descriptions of the traffic jams eventually discouraged people from setting off to the festival. Arlo Guthrie made an announcement that was included in the film saying that the New York State Thruway was closed, although the director of the Woodstock museum said that this did not happen.\n[…]\n(The site of the original stage is vacant except for a commemorative plaque which was placed in 1984.) In June 2008 the Bethel Woods Center opened a museum dedicated to the experience and cultural significance of the Woodstock festival.\n[…]\nThe scheduled date for the \"Bethel Woods Music and Culture Festival: Celebrating the golden anniversary at the historic site of the 1969 Woodstock festival\" was August 16–18, 2019. Bethel Woods described the festival as a \"pan-generational music, culture and community event\" (including some live performances and talks by) \"leading futurists and retro-tech experts\".\n[…]\nWoodstock still acts as an economic engine for the local economy. A Bethel Woods report from 2018 indicates that $560.82 million of spending has been generated in New York. With 2.9 million visitors since 2006 and 214,405 visitors in 2018, an equivalent of 172 full-time jobs exist as a result, which includes direct wages of $5.1 million from Bethel Woods in Sullivan County.\n[…]\nWoodstock Festival Gallery"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Festival_de_Woodstock",
        "situacao": "ok",
        "texto": "Woodstock Music & Art Fair (conhecido informalmente como Woodstock ou Festival de Woodstock) foi um festival de música realizado entre os dias 15 e 18 de agosto de 1969 na fazenda de gado leiteiro de 600 acres de Max Yasgur, próximo à região de White Lake, na cidade de Bethel, no estado de Nova York, nos Estados Unidos. O local se localizava a setenta quilômetros a sudoeste da cidade de Woodstock.\n[…]\nEste influxo repentino provocou congestionamentos imensos, bloqueando a Via Expressa do Estado de Nova York e eventualmente transformando Bethel em uma \"área de calamidade pública\". As instalações do festival não foram equipadas para providenciar saneamento ou primeiros-socorros para tal multidão, e centenas de pessoas se viram tendo que lutar contra mau tempo, racionamento de comida e condições mínimas de higiene.\n[…]\nOs eleitores de Bethel substituíram seu governante em uma eleição em novembro de 1969 por ele ter ajudado a trazer o festival para a cidade. O estado de Nova Iorque e a cidade de Bethel aprovaram leis proibindo a realização de novos festivais.\n[…]\nForam feitas tentativas para impedir que as pessoas visitassem o local. Os proprietários espalharam estrume de galinha e, em um aniversário, tratores e carros da polícia estadual bloquearam a estrada. 20 000 pessoas se reuniram no local em 1989 em uma improvisada celebração do vigésimo aniversário do festival. Em 1997, um grupo pôs uma placa de boas-vindas no local. Ao contrário de Bethel, a cidade de Woodstock fez numerosas tentativas de ganhar dinheiro com a notoriedade do festival.\n[…]\nA data programada para o \"Festival de música e cultura de Bethel Woods: celebrando o aniversário de ouro do local histórico do festival de Woodstock de 1969\" era 16-18 de agosto de 2019. Parceiros do evento são Live Nation Entertainment e INVNT.\n[…]\nO filme Taking Woodstock (2009), de Ang Lee, dramatiza a realização do festival.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Elvis Presley",
      "descricao": "Cantor e ator americano conhecido como o Rei do Rock and Roll."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Elvis Presley morreu em Graceland, sua mansão em Memphis, em agosto de que ano?",
    "resposta": "1977",
    "distratores": [
      "1975",
      "1979",
      "1981"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Elvis_Presley"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Elvis_Presley",
        "situacao": "ok",
        "texto": "Elvis Aaron Presley (January 8, 1935 – August 16, 1977) was an American singer and actor. Referred to as the \"King of Rock and Roll\", he is widely regarded as one of the most culturally significant figures of the 20th century. Presley's energetic and sexually provocative performance style, combined with a mixture of influences across color lines during a transformative era in race relations, broug\n[…]\nIn 1968, he returned to the stage in the acclaimed NBC television comeback special Elvis, which led to an extended Las Vegas concert residency and several highly profitable tours. In 1973, Presley gave the first concert by a solo artist to be broadcast around the world, Aloha from Hawaii. Many years of substance abuse and unhealthy eating severely compromised his health, and Presley died in August 1977 at his Graceland estate at the age of 42.\n[…]\nHis last appearance in public occurred during the early morning hours of August 8, 1977, when he rented the entire Libertyland amusement park in Memphis for himself and about ten others.\n[…]\nOn August 16, 1977, Presley was scheduled for an evening flight from Memphis to Portland, Maine, to begin another tour. That afternoon, his fiancée, Ginger Alden, discovered him unresponsive on the bathroom floor of his Graceland mansion. Attempts to revive him failed, and he was pronounced dead at Baptist Memorial Hospital at 3:30 pm; he was 42.\n[…]\nSince 1977, a false and discredited conspiracy theory has circulated that Presley may have faked his own death. Numerous people have incorrectly claimed to have seen him alive after August 16, 1977. These \"Elvis sightings\" and the conspiracy theory in general have persisted both as an ironic, humorous meme and for some a genuinely-believed theory, though the latter demographic declined in numbers after the early 1990s.\n[…]\nElvis (1968)\n[…]\nElvis in Concert (1977)\n[…]\nPersonal relationships of Elvis Presley"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Elvis_Presley",
        "situacao": "ok",
        "texto": "Elvis Aaron Presley (Tupelo, 8 de janeiro de 1935 – Memphis, 16 de agosto de 1977) foi um cantor, músico e ator estadunidense. Apelidado de \"Rei do Rock and Roll\" ou simplesmente \"O Rei\", é considerado um dos ícones culturais mais significativos do século XX. Com uma série de aparições bem-sucedidas na televisão e sucessos no topo das paradas tornou-se a principal figura do rock and roll.\n[…]\nEm 1968, após uma pausa de sete anos sem se apresentar ao vivo, retornou ao palco no aclamado especial televisivo Elvis, o qual levou a uma estendida residência em Las Vegas e a uma série de turnês altamente lucrativas. Em 1973 tornou-se o primeiro artista solo a ter um show transmitido ao redor do mundo, Aloha from Hawaii. Anos de abuso de medicamentos prescritos comprometeram gravemente sua saúde, morrendo repentinamente aos 42 anos de idade, no ano de 1977, em Graceland, sua propriedade.\n[…]\nApesar das preocupações da RCA e Parker, entre julho de 1973 e outubro de 1976, o cantor gravou praticamente todo o conteúdo de seis álbuns. Embora ele não fosse mais uma presença importante nas paradas pop, cinco desses álbuns entraram no top cinco da parada country e três foram para o número um: Promised Land (1975), From Elvis Presley Boulevard, Memphis, Tennessee (1976) e Moody Blue (1977).\n[…]\nNa noite de terça-feira, 16 de agosto de 1977, estava programado que o artista decolasse de Memphis para começar outra turnê. Naquela tarde, Ginger Alden o encontrou inconsciente no chão do banheiro de sua mansão, Graceland. De acordo com o relato de sua testemunha ocular, \"parecia que seu corpo inteiro havia congelado completamente na posição sentada enquanto usava o banheiro e depois caiu para a frente, nessa posição fixa\".\n[…]\nEntre 1977 e 1981, seis dos singles lançados postumamente do cantor foram os dez maiores sucessos dos Estados Unidos.\n[…]\nElvis (1968)\n[…]\nElvis in Concert (1977)\n[…]\nElvis Presley no Instagram",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Imagine",
      "descricao": "Canção de John Lennon lançada no álbum homônimo de 1971"
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Imagine, o hino pacifista de John Lennon gravado depois do fim dos Beatles, foi lançada em que ano?",
    "resposta": "1971",
    "distratores": [
      "1969",
      "1973",
      "1975"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Imagine_(John_Lennon_song)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Imagine_(John_Lennon_song)",
        "situacao": "ok",
        "texto": "\"Imagine\" is a song by the English musician John Lennon from his 1971 album of the same name. The lyrics encourage listeners to imagine a world of peace, beginning with living without religion and its concepts, without economic materialism, and without borders separating nations. Shortly before his death, Lennon said that much of the song's lyrics and content came from his wife, Yoko Ono; in 2017,\n[…]\nAn original piano musical motif, later called \"John's Piano Piece\", close to the final one was created in January 1969 during the Let It Be sessions. Lennon finished composing \"Imagine\" one morning in early 1971, on a Steinway piano, in a bedroom at his Tittenhurst Park estate in Ascot, Berkshire, England. Ono watched as he composed the melody, chord structure and almost all the lyrics, nearly completing the song in one brief writing session.\n[…]\nIssued by Apple Records in the United States in October 1971, \"Imagine\" became the best-selling single of Lennon's solo career. It peaked at number three on the Billboard Hot 100 and reached number one in Canada on the RPM national singles chart, remaining there for two weeks. Upon its release the song's lyrics upset some religious groups, particularly the line: \"Imagine there's no heaven\".\n[…]\nPut your political message across with a little honey.\" In an open letter to Paul McCartney published in Melody Maker, Lennon said that \"Imagine\" was \"'Working Class Hero' with sugar on it for conservatives like yourself\". On 30 November 1971, the Imagine LP reached number one on the UK chart. It became the most commercially successful and critically acclaimed album of Lennon's solo career.\n[…]\nJohn Lennon – vocals, piano\n[…]\n\"Imagine - John Lennon & The Plastic Ono Band (w The Flux Fiddlers) (Ultimate Mix 2018) - 4K REMASTER\" on YouTube\n[…]\n\"Imagine (Remastered 2010)\" on YouTube\n[…]\n\"Train - \"Imagine\"\" on YouTube"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Imagine_%28can%C3%A7%C3%A3o_de_John_Lennon%29",
        "situacao": "ok",
        "texto": "\"Imagine\" é uma canção do músico inglês John Lennon do seu álbum homônimo de 1971. O single mais vendido de sua carreira solo, a letra incentiva os ouvintes a imaginar um mundo de paz, sem materialismo, sem fronteiras separando nações e sem religião. Pouco antes de sua morte, Lennon disse que grande parte da letra e do conteúdo da música veio de sua esposa, Yoko Ono, e em 2017, ela recebeu um créd\n[…]\nUm motivo musical original para piano, mais tarde chamado de \"Peça para Piano de John\", próximo ao final, foi criado em janeiro de 1969 durante as sessões de Let It Be . Lennon terminou de compor \"Imagine\" em uma manhã no início de 1971, em um piano Steinway, em um quarto em sua propriedade em Tittenhurst Park, em Ascot, Berkshire, Inglaterra. Ono observou enquanto ele compunha a melodia, a estrutura dos acordes e quase todas as letras, quase completando a música em uma breve sessão de escrita.\n[…]\nLançado pela Apple Records nos Estados Unidos em outubro de 1971, \"Imagine\" se tornou o single mais vendido da carreira solo de Lennon. Alcançou a terceira posição na Billboard Hot 100  e alcançou a primeira posição no Canadá na parada nacional de singles da RPM, permanecendo lá por duas semanas. Após seu lançamento, a letra da música irritou alguns grupos religiosos, principalmente o verso: \"Imagine que não existe céu\".\n[…]\nTransmita sua mensagem política com um pouco de mel.\"  Em uma carta aberta a Paul McCartney publicada na Melody Maker, Lennon disse que \"Imagine\" era \"'  Working Class Hero' com açúcar para conservadores como você\". Em 30 de novembro de 1971, o LP Imagine alcançou o primeiro lugar na parada do Reino Unido. Tornou-se o álbum de maior sucesso comercial e aclamado pela crítica da carreira solo de Lennon.\n[…]\nJohn Lennon – vocais, piano\n[…]\n\"Imagine - John Lennon & The Plastic Ono Band (w The Flux Fiddlers) (Ultimate Mix 2018) - 4K REMASTER\" no YouTube\n[…]\n\"Train - \"Imagine\"\" no YouTube",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Piano de cauda",
      "descricao": "Piano de formato horizontal, com cordas dispostas em estrutura em forma de asa."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Somando as brancas e as pretas, quantas teclas tem um piano de cauda moderno padrão?",
    "resposta": "88",
    "distratores": [
      "72",
      "76",
      "92"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Piano"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Piano",
        "situacao": "ok",
        "texto": "A piano is a keyboard instrument that produces sound when its keys are pressed, activating an action mechanism where hammers strike strings. Modern pianos have a row of 88 black and white keys—with the exception of the Bosendörfer and Stuart & Sons pianos—and tuned to a chromatic scale in equal temperament. A musician who specializes in piano is called a pianist.\n[…]\nMost modern pianos have 52 white keys and 36 black keys, for a total of 88 keys (seven octaves plus a minor third, from A0 to C8). Some older pianos only have 85 keys (seven octaves from A0 to A7).\n[…]\nIn 2018, Australian manufacturer Stuart & Sons created a piano with 108 keys, going from C0 to B8, covering nine full octaves. Stuart & Sons also built a model with 112 keys (A−1 to C9, one full octave both below and above the range of a standard 88-key piano) between 2022 and 2024, delivered to Rockford, USA in October 2024. The extra keys are the same as the other keys in appearance.\n[…]\nA rare variant of the piano called the Emánuel Moór Pianoforte has double keyboards, one lying above the other. It was invented by Hungarian composer and pianist Emánuel Moór. The lower keyboard has the usual 88 keys, whilst the upper keyboard has 76 keys. When the upper keyboard is played, an internal mechanism pulls down the corresponding key on the lower keyboard, but an octave higher. This lets a pianist reach two octaves with one hand, impossible on a conventional piano.\n[…]\nAt a 2023 auction in Sotheby's in London, Mercury's Yamaha baby grand piano, which he used to compose \"Bohemian Rhapsody\" among other Queen songs, sold for £1.7 million ($2.1 million), which Sotheby's state is a record for a composer's piano. Modernist styles of music have also appealed to composers writing for the modern grand piano, including John Cage and Philip Glass.\n[…]\nList of piano composers\n[…]\nGallery of Piano Plates and Medallions"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Piano",
        "situacao": "ok",
        "texto": "Piano, apócope derivado do italiano pianoforte, é um instrumento musical de cordas percussivas, segundo o sistema de classificação de Hornbostel-Sachs.\n[…]\nOs pianos modernos, embora não se diferenciem dos mais antigos no que se refere aos tons, trazem novos formatos estéticos e de materiais que compõem o instrumento. Um piano comum tem, geralmente, oito lás, oito sis bemóis, oito sis, oito dós, sete dós sustenidos, sete rés, sete mis bemóis, sete mis, sete fás, sete fás sustenidos, sete sóis e sete sóis sustenidos, formando um total de 88 notas musicais.\n[…]\nExistem duas versões do piano acústico moderno: o piano de cauda e o piano vertical (piano de armário).\n[…]\nPraticamente todos os pianos modernos têm 88 teclas (sete oitavas mais uma terça menor, desde o Lá-2 (ou A0 científico) (27,5 Hz) ao Dó 7 (ou C8 científico) (4 186 Hz)). Muitos pianos mais antigos têm 84 teclas (exatamente sete oitavas, desde o Lá-2 (A0 científico) (27,5 Hz) ao Lá 6 (A7 científico) (3 520 Hz). Também existem pianos com oito oitavas, da marca austríaca Bösendorfer ou de marca francesa Stephen Paulello.\n[…]\nTradicionalmente, as teclas das notas naturais (dó, ré, mi, fá, sol, lá e si) são brancas, e as teclas dos acidentes (dó ♯, ré ♯, fá ♯, sol ♯ e lá ♯ na ordem dos sustenidos e as correspondentes ré ♭, mi ♭, sol ♭, lá ♭ e si ♭ na ordem dos bemóis) são da cor preta, feitas de madeira, sendo as pretas revestidas geralmente por ébano e as brancas de marfim (já em desuso e proibido no mundo) ou de material plástico.\n[…]\nPiano elétrico\n[…]\nHistória do Piano",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Madonna",
      "descricao": "Cantora, compositora e atriz americana conhecida como a Rainha do Pop."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Que estilista francês criou o famoso corpete com sutiã em forma de cone usado por Madonna na turnê Blond Ambition, de 1990?",
    "resposta": "Jean Paul Gaultier",
    "distratores": [
      "Thierry Mugler",
      "Yves Saint Laurent",
      "Christian Lacroix"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Blond_Ambition_World_Tour"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Blond_Ambition_World_Tour",
        "situacao": "ok",
        "texto": "The Blond Ambition World Tour (billed as Blond Ambition World Tour 90) was the third concert tour by American singer Madonna, launched in support of her fourth studio album, Like a Prayer (1989), and the Dick Tracy soundtrack album I'm Breathless (1990). Comprising 57 shows, the tour visited Asia, Europe, and North America and ran from April 13, 1990, at Chiba Marine Stadium in Chiba, Japan, to Au\n[…]\nThe production was structured around five thematic acts—Metropolis, Religious, Dick Tracy, Art Deco, and an encore—each blending music, choreography, and visual storytelling. Art direction was overseen by Christopher Ciccone, with costumes designed by Jean-Paul Gaultier. Drawing inspiration from German expressionist cinema, Catholic imagery, cabaret, and early Hollywood aesthetics, the show was praised for its production, theatricality, and Madonna's onstage presence.\n[…]\nFor the tour's wardrobe, Madonna enlisted French designer Jean Paul Gaultier, as she was drawn to his irreverence and sense of humor. She contacted him directly with a handwritten letter asking him to design the costumes. Gaultier, already an admirer of the singer, accepted immediately, later observing that even before achieving fame Madonna had used clothing provocatively—wearing visible bras, sheer fabrics, and religious symbols as jewelry.\n[…]\nCritics have framed Blond Ambition as the blueprint for the modern pop concert. Writing for Billboard, Sal Cinquemani described it as \"the mother of the modern pop concert\" citing the Gaultier–designed costumes, Broadway-style sets, and quasi-narrative arc.\n[…]\nWriting for W magazine, Brooke Marine argued that while the tour is often remembered for Gaultier's cone bra, its cultural power rested equally with Madonna's dancers—particularly queer men of color—stating that without them, Blond Ambition \"would not have been as effective or as subversive\"."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Blond_Ambition_World_Tour",
        "situacao": "ok",
        "texto": "Blond Ambition World Tour (ou Blond Ambition World Tour 90) foi a terceira turnê da cantora estadunidense Madonna, feita em suporte ao seu quarto álbum de estúdio Like a Prayer e a trilha sonora do filme Dick Tracy, I'm Breathless.\n[…]\nA Blond Ambition World Tour foi dirigida pela própria cantora e contou com a direção de arte de seu irmão, Christopher Ciccone, figurinos concebidos por Jean-Paul Gaultier e coreografia realizada por Vincent Paterson.\n[…]\nA cantora entrou em contato com o estilista francês Jean Paul Gaultier para criar os figurinos da turnê, cativada por sua \"irreverência e humor\", e enviou-lhe uma carta escrita à mão solicitando seus designs. Gaultier aceitou com alegria, afirmando que admirava Madonna e seu estilo ousado.\n[…]\nNiki Haris, cantora de apoio e dançarina da turnê, relembrou que Madonna sempre priorizava as roupas e os sapatos. Foram produzidos dois corpetes com copas cônicas, um em cor de pêssego e outro em dourado sólido. Gaultier teve a ideia quando criança, ao ver um espartilho em uma exposição com sua avó, apaixonando-se pela cor da pele, o cetim salmão e a renda, e \"o sutiã cônico dourado foi uma extensão dessa inspiração\".\n[…]\nPara Adam Geczy e Vicki Karaminas, a artista \"se reinventou diversas vezes em uma única década\", complementando que \"antes dela, apenas Bowie havia se reinventado\". O corpete também foi recriado para a MDNA Tour e Gaultier explicou que: \"É uma homenagem em três dimensões do sutiã de cone da Blond Ambition, agora em couro metálico no interior e couro envernizado no exterior\". Tal inspirou artistas contemporâneas como Lady Gaga, Katy Perry e Rihanna a recriarem o traje.\n[…]\n«Sobre a turnê no site oficial de Madonna» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  }
]

---

# MANIFESTO

# Manifesto de Perguntas — Mestre2

> **Versão preliminar 0.83 — 2026-10-27**
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
- **Resposta que é um ano ou uma data: sempre `multipla`.** Quando a resposta é um ano específico ("1969") ou uma data mais detalhada ("15 de novembro de 1889", "2 de fevereiro"), a pergunta é obrigatoriamente de múltipla escolha, com ou sem figura. Os distratores são anos (ou datas) próximos e críveis, no mesmo formato da resposta, nenhum deles também correto. A regra vale só quando **a resposta é o próprio ano ou a data**: século e década ("século dezenove", "década de 1970") e respostas em que o ano identifica outra coisa, como uma edição de Olimpíada ou de Copa ("Londres 2012", "1970, no México"), podem continuar abertas.
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
- No máximo **3 perguntas por âncora**, nunca com o mesmo ângulo (§4).
- **Prefira âncoras centrais e conhecidas**, mesmo que já tenham perguntas, a âncoras novas e obscuras (desde 2026-10-27; antes, "prefira âncoras novas"). O gerador recebe a lista das âncoras e perguntas já existentes no subtema, para aprofundá-las com fatos e ângulos novos, sem repetir fatos.
- **Tentar incluir uma âncora nova a cada 50 perguntas**, tão conhecida quanto as centrais, para manter alguma variedade. Se for difícil achar uma assim, o lote fica sem: uma âncora nova obscura não vale a troca.

**No banco, por subtema:**
- `conexao` + `nome` somam pelo menos **20%**.
- A distribuição por ângulo e por âncora é acompanhada pelo relatório do pipeline, e os lotes seguintes são **encomendados para preencher as lacunas**.
