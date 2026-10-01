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
7. **Distratores** (só em `multipla`): críveis, da mesma categoria da resposta e com no máximo 4 palavras (MANIFESTO §6).
8. **Duplicatas:** se duas perguntas do lote perguntam o mesmo fato, mantenha a melhor e descarte a outra.

Devolva exatamente uma avaliação para cada pergunta, usando o `indice` informado.

# Lote

[
  {
    "indice": 1,
    "ancora": {
      "nome": "ABBA",
      "descricao": "Grupo pop sueco formado em 1972 por Agnetha, Björn, Benny e Anni-Frid"
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome do grupo sueco ABBA foi formado a partir de quê?",
    "resposta": "Das iniciais dos quatro integrantes",
    "fonte": [
      "https://en.wikipedia.org/wiki/ABBA"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/ABBA",
        "situacao": "ok",
        "texto": "ABBA (  AB-ə, Swedish: [ˈâbːa]) were a Swedish pop music group formed in Stockholm in 1972 by Agnetha Fältskog, Björn Ulvaeus, Benny Andersson and Anni-Frid Lyngstad. They are among the most renowned and commercially successful musical groups in history.\n[…]\nRogan, James (director) ABBA: Against The Odds. Rogan Productions, 2024\n[…]\nABBA The Museum\n[…]\nABBA City Walks at Stockholm City Museum\n[…]\nList of ABBA tribute albums\n[…]\nPalm, Carl Magnus (2001). Bright Lights, Dark Shadows: The Real Story of ABBA. London: Omnibus. ISBN 978-0-7119-8389-2.\n[…]\n\"ABBA – 5 Years\". Billboard. 8 September 1979. pp. 23–46.\n[…]\nBenny Andersson, Björn Ulvaeus, Judy Craymer: Mamma Mia! How Can I Resist You?: The Inside Story of Mamma Mia! and the Songs of ABBA. Weidenfeld & Nicolson, 2006\n[…]\nCarl Magnus Palm. ABBA – The Complete Recording Sessions (1994)\n[…]\nCarl Magnus Palm (2000). From \"ABBA\" to \"Mamma Mia!\" ISBN 1-85227-864-1\n[…]\nElisabeth Vincentelli: ABBA Treasures: A Celebration of the Ultimate Pop Group. Omnibus Press, 2010, ISBN 9781849386463\n[…]\nOldham, Andrew, Calder, Tony & Irvin, Colin (1995) \"ABBA: The Name of the Game\", ISBN 0-283-06232-0\n[…]\nPotiez, Jean-Marie (2000). ABBA – The Book ISBN 1-85410-928-6\n[…]\nSimon Sheridan: The Complete ABBA. Titan Books, 2012, ISBN 9781781164983\n[…]\nAnna Henker (ed.), Astrid Heyde (ed.): Abba – Das Lexikon. Northern Europe Institut, Humboldt-University Berlin, 2015 (German)\n[…]\nSteve Harnell (ed.): Classic Pop Presents Abba: A Celebration. Classic Pop Magazine (special edition), November 2016\n[…]\n\"ABBA\". Rock and Roll Hall of Fame.\n[…]\nThe Secret Majesty of ABBA. Variety, 22 July 2018\n[…]\nABBA's Essential, Influential Melancholy. NPR, 23 May 2015\n[…]\nWhat's Behind ABBA's Staying Power?. Smithsonian, 20 July 2018\n[…]\nABBA – The Articles – ABBA news from throughout the world\n[…]\nABBA at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/ABBA",
        "situacao": "ok",
        "texto": "ABBA é um grupo sueco de música pop formado em Estocolmo em 1972 por Agnetha Fältskog, Björn Ulvaeus, Benny Andersson, e Anni-Frid Lyngstad. O nome do grupo é um acrônimo formado pelas iniciais do primeiro nome de cada membro. Tornaram-se um dos grupos de maior sucesso comercial na história da música, liderando as paradas mundiais de 1974 a 1982. Os ABBA venceram o Eurovision Song Contest 1974 no \n[…]\nÀ medida que os integrantes começaram a buscar novos projetos, o grupo foi gradualmente se afastando definitivamente. Benny e Björn colaboraram com Tim Rice na composição do musical Chess. Agnetha e Frida partiram para carreiras-solo.\n[…]\nEm 20 de janeiro de 2016, todos os quatro integrantes originais do ABBA fizeram uma aparição pública no restaurante Mamma Mia! The Party em Estocolmo.\n[…]\nEm 1994, dois filmes australianos chamaram a atenção da mídia mundial, por terem focados as músicas do ABBA: Priscilla, A Rainha do Deserto e O Casamento de Muriel. No mesmo ano, Thank You for the Music, um box com quatro discos e com todos os hits do grupo, foi lançado com o envolvimento de todos os quatro membros.\n[…]\nEm 2004, a semifinal do Festival Eurovisão da Canção, realizado em Istambul, 30 anos após o ABBA ter ganho o concurso em Brighton, todos os quatro membros do ABBA apareceram rapidamente em um vídeo de comédia especial feita para o intervalo, intitulado \"Our Last Video Ever\". Cada um dos quatro membros do grupo fez uma breve participação especial.\n[…]\nOs ABBA estavam a considerar uma reunião em 2014, em jeito de celebração do 40º aniversário do tema Waterloo, o primeiro êxito do coletivo. Em entrevista a uma jornal alemão, Agnetha Faltskog revelou que uma reunião poderia acontecer no próximo ano, para marcar as quatro décadas passadas desde que o tema valeu ao grupo a vitória na edição de 1974 do festival da Eurovisão.\n[…]\nABBA (1975)\n[…]\nLista de canções de ABBA\n[…]\n4 x ABBA\n[…]\n«ABBA World» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Led Zeppelin",
      "descricao": "Banda britânica de hard rock formada em 1968 por Jimmy Page, Robert Plant, John Paul Jones e John Bonham"
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome Led Zeppelin vem de uma piada de que a banda afundaria como um balão feito de que material?",
    "resposta": "Chumbo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Led_Zeppelin"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Led_Zeppelin",
        "situacao": "ok",
        "texto": "Led Zeppelin were  an English rock band formed in London in 1968. The band comprised vocalist Robert Plant, guitarist Jimmy Page, bass-guitarist and keyboardist John Paul Jones and drummer John Bonham. Their combination of a heavy electric-guitar sound with elements of blues and folk music popularised album-oriented rock and stadium rock and established them as the progenitor of hard rock and heav\n[…]\nIn 1997, Atlantic released a single edit of \"Whole Lotta Love\" in the US and the UK, the only single the band released in their homeland, where it peaked at number 21. November 1997 saw the release of Led Zeppelin BBC Sessions, a two-disc set largely recorded in 1969 and 1971. Page and Plant released another album called Walking into Clarksdale in 1998, featuring all new material, but after disappointing sales, the partnership dissolved before a planned Australian tour.\n[…]\nThe year 2003 saw the release of the triple live album How the West Was Won, and Led Zeppelin DVD, a six-hour chronological set of live footage that became the best-selling music DVD in history. In July 2007, Atlantic/Rhino and Warner Home Video announced three Zeppelin titles to be released that November: Mothership, a 24-track best-of spanning the band's career; a reissue of the soundtrack The Song Remains the Same, including previously unreleased material; and a new DVD.\n[…]\nPage, Jones and Jason Bonham were reported to be willing to tour and to be working on material for a new Zeppelin project. Plant continued his touring commitments with Alison Krauss, stating in September 2008 that he would not record or tour with the band. \"I told them I was busy and they'd simply have to wait,\" he recalled in 2014. \"I would come around eventually, which they were fine with – at least to my knowledge. But it turns out they weren't.\n[…]\nLed Zeppelin III (1970)\n[…]\nLed Zeppelin on the Internet Archive\n[…]\nLed Zeppelin's channel on YouTube"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Led_Zeppelin",
        "situacao": "ok",
        "texto": "Led Zeppelin foi uma banda britânica de rock formada em Londres, em 1968. É um dos artistas mais vendidos e influentes da história, e reconhecido como um dos fundadores do heavy metal, junto das bandas Black Sabbath e Deep Purple. Graças a seu som pesado e violento de guitarra, enraizado no blues e música psicodélica de seus dois primeiros álbuns, a banda ganhou aclamação da crítica e do público, \n[…]\nApós a conclusão do disco, a banda foi forçada a mudar seu nome após Dreja emitir uma carta de anulação, afirmando a Page que foi permitido apenas o uso do apelido de New Yardbirds para os concertos escandinavos. Um relato de como o nome da nova banda foi escolhida considerou que Moon e Entwistle tinham sugerido que o supergrupo com Page e Beck cairia como um \"balão de chumbo\" (lead balloon), uma expressão para resultados desastrosos.\n[…]\nPrimeiro foi Mothership, uma coletânea de 24 faixas abrangendo a carreira da banda, seguido de uma reedição da trilha sonora The Song Remains the Same, que incluiu material inédito, e um novo DVD. O Led Zeppelin também montou seu catálogo legalmente disponível para download digital, tornando-se uma das últimas grandes bandas de rock a fazê-lo.\n[…]\nCríticos musicais elogiaram a performance da banda e houve especulações sobre uma reunião completa. Page, Jones e Jason Bonham relataram sobre estarem dispostos a uma turnê, e estavam trabalhando em material para um novo projeto do Led Zeppelin. Plant continuou seus compromissos de turnê com Alison Krauss, afirmando em setembro de 2008 que ele não estaria gravando ou em turnê com a banda.\n[…]\nAlém de listar cinco de seus álbuns entre os \"500 Maiores Álbuns de Todos os Tempos\", a revista Rolling Stone nomeou a banda o 14º maior artista de todos os tempos em 2004, em uma matéria com Dave Grohl os descrevendo como \"a maior banda de rock and roll de todos os tempos\" e \"a maior banda dos anos 70\".\n[…]\nLed Zeppelin (1969)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Pink Floyd",
      "descricao": "Banda britânica de rock progressivo formada em Londres em 1965"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome Pink Floyd junta os prenomes de dois músicos americanos pouco conhecidos. De que gênero musical eles eram?",
    "resposta": "Blues",
    "distratores": [
      "Jazz",
      "Country",
      "Folk"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pink_Floyd"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pink_Floyd",
        "situacao": "ok",
        "texto": "Pink Floyd are an English rock band formed in London in 1965 by Syd Barrett (guitar, vocals), Nick Mason (drums), Roger Waters (bass guitar, vocals) and Richard Wright (keyboards, vocals). David Gilmour (guitar, vocals) joined in 1967. Gaining an early underground following as one of the first British psychedelic groups, Pink Floyd were distinguished by their extended compositions, sonic experimen\n[…]\nForced to cancel Pink Floyd's appearance at the National Jazz and Blues Festival, as well as several other shows, King informed the music press that Barrett was suffering from nervous exhaustion. Waters arranged a meeting with psychiatrist R. D. Laing, and though Waters personally drove Barrett to the appointment, Barrett refused to come out of the car. A stay in Formentera with Sam Hutt, a doctor well established in the underground music scene, led to no visible improvement.\n[…]\nIn 1968, Pink Floyd returned to Abbey Road Studios to complete their second album, A Saucerful of Secrets, which they had begun in 1967 under Barrett's leadership. The album included Barrett's final contribution to their discography, \"Jugband Blues\". Waters developed his own songwriting, contributing \"Set the Controls for the Heart of the Sun\", \"Let There Be More Light\", and \"Corporal Clegg\". Wright composed \"See-Saw\" and \"Remember a Day\".\n[…]\nGilmour later stated that Wright's presence \"would make us stronger legally and musically\", and Pink Floyd employed him with weekly earnings of $11,000.\n[…]\nAuthor Mike Cormack argued that Pink Floyd likely have \"the greatest range in all of rock music\", encompassing styles including disco, ambient, meta rock, folk, country and western, blues, freeform, chamber pop, and freeform psychedelia.\n[…]\nPink Floyd at AllMusic\n[…]\nPink Floyd at IMDb\n[…]\nPink Floyd companies grouped at OpenCorporates\n[…]\nPink Floyd at Rolling Stone\n[…]\nPink Floyd tour dates at Songkick"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pink_Floyd",
        "situacao": "ok",
        "texto": "Pink Floyd foi uma banda britânica de rock formada em Londres em 1965. Ganhando seguidores como um grupo de rock psicodélico, eles se destacaram por suas composições longas, pela experimentação sonora, pelas letras filosóficas e pelas apresentações ao vivo criativas, o que levou a se tornarem uma banda líder do gênero do rock progressivo. Eles são um dos grupos mais bem-sucedidos comercialmente e \n[…]\nBarrett criou o nome no momento em que descobriu que outra banda, também chamada de Tea Set, se apresentaria no mesmo local que seu grupo. O nome deriva dos nomes de dois músicos de blues cujos registros do Piedmont blues Barrett tinha em sua coleção: Pink Anderson e Floyd Council.\n[…]\nConsiderado um dos primeiros grupos de música psicodélica do Reino Unido, a banda começou sua carreira na vanguarda da cena musical underground de Londres. De acordo com a Rolling Stone: \"Em 1967, eles haviam desenvolvido um som inconfundivelmente psicodélico, realizando composições longas e altas, semelhantes às que tocavam hard rock, blues, country, folk e música eletrônica\". Lançada em 1968, a música \"Careful with That Axe, Eugene\" ajudou a galvanizar sua reputação como um grupo de art rock.\n[…]\n\"Raramente você encontrará Floyd tocando ganchos cativantes, músicas suficientemente curtas para tocar no ar ou progressões previsíveis de blues com três acordes; e você nunca os encontrará gastando muito tempo no habitual álbum pop de romance, festa ou autoexaltação. O universo sonoro deles é expansivo, intenso e desafiador ...\n[…]\nVirei-me para olhar, mas se foi, não posso colocar meu dedo agora, a criança está crescida, o sonho se foi.\" Barrett se referiu ao conceito de não-ser em sua contribuição final ao catálogo da banda, \"Jugband Blues\": \"Sou muito grato a você por deixar claro que não estou aqui\".\n[…]\nA banda de rock inglesa Mostly Autumn \"funde as músicas de Genesis e Pink Floyd\" em seu som.\n[…]\nPink Floyd no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Bono",
      "descricao": "Cantor irlandês, vocalista da banda U2, nascido Paul Hewson"
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O apelido do vocalista do U2, Bono, veio do nome de uma loja de Dublin que vendia o quê?",
    "resposta": "Aparelhos auditivos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Bono"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bono",
        "situacao": "ok",
        "texto": "Paul David Hewson (born 10 May 1960), known by the nickname Bono ( BON-oh), is an Irish singer-songwriter and activist. He is a founding member, the lead vocalist, and primary lyricist of the rock band U2. Bono is known for his impassioned vocal style as well as his grandiose songwriting and performance style. His lyrics frequently include social and political themes, and religious imagery inspire\n[…]\nPaul David Hewson was born in the Rotunda Hospital in Dublin on 10 May 1960, the second child of Iris (née Rankin) and Brendan Robert \"Bob\" Hewson, then living in Stillorgan on Dublin's Southside. His brother, Norman, is eight years older than he is. Bono's family moved to a new house on Cedarwood Road, between the Northside suburbs of Finglas and Ballymun when he was six weeks old, and he grew up there.\n[…]\nThe nickname was given by Guggi; Bono initially disliked it but after learning of its translation, he accepted it. Hewson has been known as \"Bono\" since the age of 14 or 15. In addition to it being his stage name, close family, friends and fellow band members also refer to him as Bono.\n[…]\nAfter leaving the Howth peninsula,  Bono and Ali bought a Martello tower in Bray in northern County Wicklow, south of Dublin. Since the 1980s, they have maintained a primary home on Vico Road, in the affluent Dublin suburb of Killiney. The house, Temple Hill, is located on the slopes of Killiney Hill and has views of Killiney Bay. Bono's childhood friend Gavin Friday lives next door.\n[…]\nIn January 1996, Bono was aboard a Grumman HU-16 aeroplane flown by musician Jimmy Buffett named Hemisphere Dancer that was shot at by Jamaican police, who believed the craft to be smuggling marijuana. The aircraft, which sustained minimal damage, was also carrying Ali Hewson, her and Bono's two daughters, Chris Blackwell, and co-pilot Bill Dindy. The Jamaican government acknowledged the mistake and apologized."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bono",
        "situacao": "ok",
        "texto": "Paul David Hewson (Dublin, 10 de maio de 1960), conhecido por seu nome artístico Bono (pronunciação em inglês: /ˈbɒnoʊ/ BON-oh) é um cantor, filantropo, compositor e empresário irlandês. É o vocalista principal da banda de rock U2.\n[…]\nBono nasceu em Dublin, em 10 de maio de 1960, e foi criado em Glasnevin com o seu irmão, Norman Hewson, pela sua mãe Iris (nascida Rankin), e seu pai, Brendan Robert (Bob Hewson). Seus pais inicialmente decidiram que o primeiro filho seria criado na Igreja Anglicana e Bono, o segundo filho, na Igreja Católica. Apesar de Bono ser o segundo filho, ele também participou de serviços na Igreja da Irlanda com a mãe e o irmão.\n[…]\nBono Vox é uma alteração de Bonavox, uma expressão latina que significa \"boa voz\", sendo apelidado por seu amigo Gavin Friday. Inicialmente, Bono não gostou do nome. Mas quando soube que a tradução é um elogio, ele aceitou. Hewson é conhecido como Bono desde o final da década de 1970. A família e os integrantes da banda também o chamam por esse apelido.\n[…]\nGeldof e Bono, mais tarde colaboraram para organizar em 2005 o projeto Live 8, onde o U2 também se apresentou.\n[…]\nEm contraste, em 2005, Bono falou sobre a CBC Radio, alegando então ao primeiro-ministro do Canadá, Paul Martin, que estava sendo lento sobre o aumento de ajuda externa do Canadá. Ele era um candidato ao prêmio Nobel da Paz em 2003, 2005 e 2006 por sua filantropia.\n[…]\nEm 2007, Bono foi nomeado no Reino Unido, pelo Sistema de honras britânico como um honorário comendador da Ordem do Império Britânico. Ele foi formalmente concedido título de cavaleiro em 29 de março de 2007, em uma cerimônia na residência do embaixador britânico David Reddaway, em Dublin, Irlanda.\n[…]\n«Bono no Letras»\n[…]\n«Bono no Allmovie» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Lady Gaga",
      "descricao": "Cantora e atriz americana, nascida Stefani Germanotta"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome artístico Lady Gaga foi inspirado na canção Radio Ga Ga. De que banda é essa canção?",
    "resposta": "Queen",
    "distratores": [
      "The Beatles",
      "Led Zeppelin",
      "The Police"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Lady_Gaga"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lady_Gaga",
        "situacao": "ok",
        "texto": "Stefani Joanne Angelina Germanotta (born March 28, 1986), known professionally as Lady Gaga, is an American singer, songwriter, and actress. An influential figure in popular music, she is known for her image reinventions, flamboyant fashion, and versatility across the entertainment industry. With estimated sales of 124 million records, she is one of the best-selling music artists of all time.\n[…]\nHe collaborated with Gaga, helping her develop songs and compose new material. He said they began dating in May 2006, and claimed he was the first person to call her \"Lady Gaga\", which was derived from the Queen song \"Radio Ga Ga\". According to Fusari, the name was coined when he attempted to call her \"Radio Ga Ga\" in a text message, with his phone's spell checker autocorrecting \"Radio\" to \"Lady\". Their relationship lasted until January 2007.\n[…]\nGaga was the most awarded artist at the 2010 Brit Awards, winning in three categories.\n[…]\nGaga grew up listening to artists such as Michael Jackson, the Beatles, Stevie Wonder, Queen, Bruce Springsteen, Pink Floyd, Led Zeppelin, Whitney Houston, Elton John, Prince, En Vogue, TLC, Christina Aguilera, Janet Jackson, and Blondie, who have all influenced her music.\n[…]\nShe has called herself \"a little bit of a feminist\" and asserted that she is \"sexually empowering women\". Billboard ranked her sixth on its list of \"The 100 Greatest Music Video Artists of All Time\" in 2020, stating that \"the name 'Lady Gaga' will forever be synonymous with culture-shifting music videos\".\n[…]\nGaga was named the \"Queen of Pop\" in a 2011 ranking by Rolling Stone based on record sales and social media metrics. In 2012, she ranked fourth in VH1's Greatest Women in Music, and became a feature of the temporary exhibition The Elevated. From the Pharaoh to Lady Gaga, which marked the 150th anniversary of the National Museum in Warsaw.\n[…]\nLady Gaga at Rotten Tomatoes"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lady_Gaga",
        "situacao": "ok",
        "texto": "Stefani Joanne Angelina Germanotta (Nova Iorque, 28 de março de 1986), mais conhecida como Lady Gaga, é uma cantora, compositora e atriz norte-americana. Por sua versatilidade em gêneros musicais, apresentações chamativas, moda e estética extravagante, Gaga se tornou uma das maiores artistas musicais de âmbito global da atualidade.\n[…]\nO produtor musical Rob Fusari, que ajudou-a a compor umas de suas primeiras canções, comparou as suas habilidades vocais às de Freddie Mercury. Fusari ajudou-a a criar o apelido Gaga, a partir da canção \"Radio Ga Ga\" da banda Queen. Germanotta estava no processo de criar um nome artístico, quando recebeu uma mensagem de texto de Fusari em que lia-se \"Lady Gaga\". Ele explicou:\n[…]\nGaga cresceu ouvindo artistas como os Beatles, Stevie Wonder, Queen, Bruce Springsteen, Pink Floyd, Mariah Carey, Grateful Dead, Led Zeppelin, Whitney Houston, Elton John, Christina Aguilera, Blondie e Garbage, todos a influenciaram musicalmente em algum ponto.\n[…]\nGaga foi nomeada a \"Queen of Pop\" em um ranking de 2011 pela Rolling Stone (baseado em vendas de discos e métricas de mídia social), e ela ficou em quarto lugar na lista de Maiores Mulheres da Música em 2012, pelo VH1. Em 2012, ela se tornou uma característica de uma exposição temporária The Elevated. From the Pharaoh to Lady Gaga, comemorando o 150º aniversário do Museu Nacional em Varsóvia.\n[…]\nLady Gaga: Queen of Pop é uma biografia de Lady Gaga, escrita por Emily Herbert (pseudônimo de Virginia Blackburn), e publicada no Reino Unido pela John Blake Publishing Ltd.. Foi publicado pela Overlook Press nos Estados Unidos, com o título Lady Gaga: Behind the Fame. Versões adicionais foram publicadas em 2010 pela Wilkinson Publishing em Melbourne, Victoria, e pela Gardners Books no Reino Unido.\n[…]\nLady Gaga no X\n[…]\nLady Gaga no Spotify\n[…]\nCanal de Lady Gaga no YouTube",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Sting",
      "descricao": "Cantor e baixista britânico, ex-vocalista do The Police, nascido Gordon Sumner"
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Gordon Sumner ganhou o apelido Sting por usar uma blusa listrada de preto e amarelo. Ela lembrava que bicho?",
    "resposta": "Abelha",
    "fonte": [
      "https://en.wikipedia.org/wiki/Sting_(musician)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sting_(musician)",
        "situacao": "ok",
        "texto": "Gordon Matthew Thomas Sumner (born 2 October 1951), known as Sting, is an English musician, songwriter and actor. He was the lead vocalist, principal songwriter and bassist for the rock band the Police (1977–1984, 2007–2008). He began a solo career in 1985, after leaving the Police, and has included elements of rock, jazz, reggae, classical, new-age, and worldbeat in his music.\n[…]\nSting performed jazz in the evenings, at weekends, and during breaks from college and teaching, playing with the Phoenix Jazzmen, Newcastle Big Band and Last Exit. He gained his nickname during his time with the Phoenix Jazzmen, when bandleader Gordon Solomon remarked that Sumner's habitual black-and-yellow striped jumper made him look like a wasp.\n[…]\nSting's fourth album, Ten Summoner's Tales, peaked at two in the UK and US album charts in 1993 and went triple platinum in just over a year. The album was recorded at his Elizabethan country home, Lake House in Wiltshire. Ten Summoner's Tales was nominated for the Mercury Prize in 1993 and for the Grammy for Album of the Year in 1994. The title is a wordplay on his surname, Sumner and \"The Summoner's Tale\", one of The Canterbury Tales by Geoffrey Chaucer.\n[…]\nSting married actress Frances Tomelty on 1 May 1976. They had two children: Joseph (b. 23 November 1976), and Fuschia Katherine \"Kate\" (b. 17 April 1982) Sumner. In 1980, Sting became a tax exile in Galway, Ireland.\n[…]\nSting married Styler at Camden Register Office on 20 August 1992, and the couple had their wedding blessed two days later in the twelfth-century parish church of St Andrew in Great Durnford, Wiltshire, south-west England. Sting and Styler have four children, three of whom were born before their marriage: Brigitte Michael \"Mickey\" (b. 19 January 1984), Jake (b. 24 May 1985), Eliot Paulina \"Coco\" (b. 30 July 1990), and Giacomo Luke (b. 17 December 1995) Sumner.\n[…]\nSting"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sting_%28m%C3%BAsico%29",
        "situacao": "ok",
        "texto": "Gordon Matthew Thomas Sumner, CBE (Wallsend, 2 de outubro de 1951), mais conhecido pelo seu nome artístico, Sting, é um vocalista, cantor e ator britânico.\n[…]\nSting é o filho primogênito de Ernest Sumner, revendedor de leite, e sua esposa Audrey Cowell, cabeleireira. O jovem Sumner muitas vezes ajudou o pai com o seu trabalho. Ele foi educado na religião católica, devido à influência da avó paterna irlandesa. Sting abandonou uma promissora carreira como atleta quando alcançou o terceiro lugar numa competição chamada 100 Yard Sprint National Junior Championship.\n[…]\nSting levou uma banda apelidada de \"The Secret Police\" formada por Eric Clapton, Jeff Beck, Phil Collins, Bob Geldof e Midge Ure. Afora Beck, todos trabalharam com Sting no concerto Live Aid.\n[…]\nFields of Gold: The Best of Sting 1984–1994 (1994)\n[…]\nThe Very Best of... Sting & The Police (1997)\n[…]\nEm 2001, Sting participou do festival Rock in Rio.\n[…]\nEm 22 de novembro de 2009, Sting se apresentou no festival Nós About Us, realizado na Chácara do Jockey, em São Paulo. A apresentação contou com a presença do cacique Raoni durante o bis.\n[…]\nEm fevereiro de 2025, voltou ao Brasil, apresentando a turnê \"Sting 3.0\" na Farmasi Arena, no Rio de Janeiro; na plateia externa do Auditório Ibirapuera, em São Paulo; e na Pedreira Paulo Leminski, em Curitiba.\n[…]\nSting actuou em 1 de agosto de 1993 no estádio José de Alvalade (Sporting CP). E em 3 de Junho de 2000 no Estádio Nacional.\n[…]\nSting actuou a solo em Portugal no ano de 2004, na primeira edição do Rock in Rio Lisboa. Regressou em 2006, para a segunda edição do Rock in Rio Lisboa, no Parque da Bela Vista.\n[…]\nSting no IMDb\n[…]\n«Sting»  no NNDB",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "BTS",
      "descricao": "Grupo sul-coreano de K-pop formado em Seul em 2013"
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome coreano do grupo BTS significa escoteiros à prova de quê?",
    "resposta": "Balas",
    "fonte": [
      "https://en.wikipedia.org/wiki/BTS"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/BTS",
        "situacao": "ok",
        "texto": "BTS (Korean: 방탄소년단; RR: Bangtan sonyeondan; lit. 'Bulletproof Boy Scouts'), also known as the Bangtan Boys, is a South Korean boy band formed in 2010. The band consists of Jin, Suga, J-Hope, RM, Jimin, V, and Jung Kook, who co-write or co-produce much of their material.\n[…]\nBTS stands for the Korean phrase Bangtan Sonyeondan (Korean: 방탄소년단), which translates literally to 'Bulletproof Boy Scouts'. According to J-Hope, the name signifies the group's desire \"to block out stereotypes, criticisms, and expectations that aim on adolescents like bullets\". In Japan, they are known as Bōdan Shōnendan (防弾少年団). In July 2017, BTS announced that their name would also stand for \"Beyond the Scene\" as part of their new brand identity.\n[…]\nThat same month, BTS starred in their own variety show, SBS MTV's Rookie King Channel Bangtan, in which members parodied variety shows such as VJ Special Forces and MasterChef Korea. At the end of the year, BTS was recognized with several New Artist of the Year awards in South Korea.\n[…]\nBTS have cited Seo Taiji and Boys, Nas, Eminem, Kanye West, Drake, Post Malone, Charlie Puth, and Danger as musical inspirations. They have also cited Queen as an influence, saying they \"grew up watching videos of Live Aid\". During their concert at Wembley Stadium in London, Jin paid tribute to Queen by leading the crowd in a version of Freddie Mercury's \"ay-oh\" chant."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/BTS",
        "situacao": "ok",
        "texto": "BTS (coreano: 방탄소년단; hanja: 防彈少年團; RR: Bangtan Sonyeondan; MR: Pangt'an Sonyǒndan; lit. \"Escoteiros à prova de balas\"), também conhecido como Bangtan Boys, é um grupo masculino sul-coreano formado em 2010. O grupo consiste em sete integrantes: Jin, Suga, J-Hope, RM, Jimin, V e Jungkook, os quais coescrevem e coproduzem grande parte do seu material.\n[…]\nO nome do grupo, BTS, significa, em coreano, Bangtan Sonyeondan (coreano: 방탄소년단; Hanja: 防彈少年團), que significa literalmente \"Escoteiros à prova de balas\". De acordo com um dos membros, J-Hope, o nome 'Bangtan' que dizer \"ser resistente a balas, então significa bloquear estereótipos, críticas e expectativas que visam adolescentes como balas, para preservar os valores e o ideal dos adolescentes de hoje\". No Japão, eles são conhecidos como Bōdan Shōnendan (防弾少年団), cuja tradução é da mesma forma.\n[…]\nO grupo debutou como Bangtan Boys oficialmente no dia 11 de junho de 2013 com o videoclipe de \"No More Dream\", single do álbum 2 COOL 4 SKOOL. Em 16 de julho, foi lançado o videoclipe da música \"We Are Bulletproof Pt.2\". E, em 11 de Setembro, lançaram seu primeiro mini-álbum O!RUL8,2?, promovendo-o com o single \"N.O\".\n[…]\nEm 14 de agosto, a faixa título 'Fake Love' conquistou para o grupo o terceiro certificado de ouro nos EUA.\n[…]\nOs sete jovens que compõem o grupo têm falado o que pensam desde a sua estreia, discutindo abertamente os direitos LGBTQ, a saúde mental e a pressão para o sucesso - todos assuntos tabu na Coreia do Sul. Sua postura é particularmente ousada, dada a história do governo coreano de manter um olho em temas controversos na música pop.\n[…]\nO grupo canta sobre a saúde mental, leva escavações na cena do \"ídolo\" coreano-pop e entrega um hino feminino, assunto incomum na cultura conservadora da Coreia do Sul, onde a maioria dos atos se atém a temas seguros como festas e separações.\"",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Yesterday",
      "descricao": "Canção dos Beatles composta por Paul McCartney e lançada em 1965"
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Antes de ter letra, a melodia de Yesterday, dos Beatles, tinha um título provisório que era um prato de café da manhã. Qual?",
    "resposta": "Ovos mexidos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Yesterday_(Beatles_song)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Yesterday_(Beatles_song)",
        "situacao": "ok",
        "texto": "\"Yesterday\" is a song by the English rock band the Beatles, written by Paul McCartney and credited to Lennon–McCartney. It was first released on the album Help! in August 1965, except in the United States, where it was issued as a single in September. The song reached number one on the US Billboard Hot 100 chart. It subsequently appeared on the UK EP Yesterday in March 1966 and made its US album d\n[…]\nMcCartney originally claimed he had written \"Yesterday\" during the Beatles' tour of France in 1964; however, the song was not released until the summer of 1965. During the intervening time, the Beatles released two albums, A Hard Day's Night and Beatles for Sale, either of which could have included \"Yesterday\".\n[…]\n\"Yesterday\" was released on the album A Collection of Beatles Oldies, a compilation album released in the United Kingdom in December 1966, featuring hit singles and other songs issued by the group between 1963 and 1966.\n[…]\nOn 8 March 1976, \"Yesterday\" was released by Parlophone as a single in the UK, featuring \"I Should Have Known Better\" on the B-side. The single peaked at number 8 on the UK Singles Chart. The release came about due to the expiration of the Beatles' contract with EMI, which allowed the company to repackage the Beatles' recordings as they wished. EMI reissued all 22 of the Beatles' UK singles, plus \"Yesterday\", on the same day, leading to six of them placing on the UK chart.\n[…]\n\"Yesterday\" won the Ivor Novello Award for \"Outstanding Song of 1965\", and came second in the \"Most Performed Work of the Year\" category, behind the Lennon–McCartney composition \"Michelle\". More recently, Rolling Stone ranked \"Yesterday\" at number 13 on its 2004 list \"The 500 Greatest Songs of All Time\" and fourth on its 2010 list of \"The Beatles' 100 Greatest Songs\".\n[…]\nThe Beatles\n[…]\nYesterday on YouTube\n[…]\nYesterday at SecondHandSongs"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Yesterday_%28can%C3%A7%C3%A3o_de_The_Beatles%29",
        "situacao": "ok",
        "texto": "\"Yesterday\" (em português: ontem) é uma canção composta por Paul McCartney (creditada a Lennon/McCartney), gravada em 1965 para o álbum Help!. Segundo o Guinness World Records, \"Yesterday\" é a canção com mais transmissões em rádios em todo o mundo, com mais de seis milhões de emissões nos Estados Unidos. \"Yesterday\" é também a música com mais covers na história da música popular, com cerca de mil \n[…]\nDepois de se convencer de que não havia tomado a melodia de outra composição, McCartney começou a compor a letra para acompanhar a melodia. Originalmente, a canção foi intitulada \"Scrambled Eggs\" (em português: \"Ovos Mexidos\"), mas McCartney encontrou um título mais apropriado em uma carta. Posteriormente, ele disse:\n[…]\n\"A canção foi em torno de meses e meses antes de finalmente ser concluída. Cada vez que nós nos reunimos para escrever canções destinadas a uma sessão de gravação, esta (\"Yesterday\") reaparecia. E quase tivemos ela em um álbum. Paul escreveu quase toda a letra, mas não encontramos o título adequado. Chamamos-a de \"Scrambled Eggs\", por causa de uma brincadeira entre nós. Decidimos que o título deveria ter apenas uma palavra, mas não encontramos nenhum adequado.\n[…]\nEm uma manhã, Paul se levantou, terminou a letra e encontrou o título. Entristeceu-me um pouco, porque tivemos muitos momentos engraçados em sua custa\".\n[…]\nEm julho de 2003, musicólogos britânicos encontraram importantes semelhanças na letra e no esquema rítmico de \"Yesterday\" e a canção \"Answer Me, My Love\" de Nat King Cole (originalmente uma canção alemã de Gerhard Winkler e Fred Rauch llamada Mütterlein), resultando em especulações de que McCartney tinha sido influenciado por essa canção. Publicistas de McCartney negaram qualquer semelhança entre as canções.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Smells Like Teen Spirit",
      "descricao": "Canção do Nirvana lançada em 1991, faixa de abertura do álbum Nevermind"
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "No título Smells Like Teen Spirit, do Nirvana, Teen Spirit era a marca de que produto?",
    "resposta": "Desodorante",
    "fonte": [
      "https://en.wikipedia.org/wiki/Smells_Like_Teen_Spirit"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Smells_Like_Teen_Spirit",
        "situacao": "ok",
        "texto": "\"Smells Like Teen Spirit\" is a song by the American rock band Nirvana. It is the opening track and lead single from Nirvana's second album, Nevermind (1991), released on DGC Records. Having sold over 13 million copies worldwide, it is one of the best-selling songs of all time. The success propelled Nevermind to the top of several albums charts and is often marked as the point when grunge entered t\n[…]\nIn 2000, the Guinness World Records named \"Smells Like Teen Spirit\" the most played video on MTV Europe.\n[…]\nThe video was parodied in \"Weird Al\" Yankovic's music video for \"Smells Like Nirvana\" and referenced in Bob Sinclar's 2006 music video for \"Rock This Party (Everybody Dance Now)\". \"Smells Like Teen Spirit\" had reached one billion YouTube views by December 25, 2019, and two billion by June 12, 2025.\n[…]\nWhen Top of the Pops was cancelled in 2006, The Observer listed Nirvana's performance of \"Smells Like Teen Spirit\" as the third greatest in the show's history. This performance can be found on the 1994 home video Live! Tonight! Sold Out!!.\n[…]\nDubbed an \"anthem for apathetic kids\" of Generation X, in the years following Cobain's 1994 suicide and Nirvana's breakup, \"Smells Like Teen Spirit\" has continued to garner critical acclaim, and is often listed as one of the greatest songs of all time. It was inducted into the Rock and Roll Hall of Fame's list of \"The Songs That Shaped Rock and Roll\" in 1997.\n[…]\nTori Amos recorded the song and released it in 1992 on her \"Crucify\" EP single. Dave Grohl commented on Nirvana covers in 1996: \"There are a few bands that go out there and do Nirvana covers and it's absolutely ridiculous, That's almost like desecration, that's what I think of it as. Tori Amos' take on it (Smells Like Teen Spirit) was fine. I mean that was pretty hilarious.\n[…]\nNirvana\n[…]\nSmells Like Teen Spirit  at MusicBrainz\n[…]\n\"Smells Like Teen Spirit\" (official music video) on YouTube"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Smells_Like_Teen_Spirit",
        "situacao": "ok",
        "texto": "\"Smells Like Teen Spirit\" é uma canção da banda grunge norte-americana Nirvana, sendo a faixa de abertura e primeiro single do segundo álbum da banda, Nevermind, lançado em 1991. Escrita por Kurt Cobain, a canção usa o formato verso-refrão, e o riff principal é usado durante a introdução e refrão para criar uma dinâmica de alternância entre as secções de maior e menor violência sonora.\n[…]\nContudo, o que Hanna na verdade pretendia dizer era que Cobain cheirava a um desodorizante chamado Teen Spirit, que a sua então namorada Tobi Vail usava. Cobain afirmou mais tarde que não fazia ideia que era uma marca de desodorizante até descobrir meses depois do single ter sido lançado.\n[…]\n\"Smells Like Teen Spirit\" era, juntamente com \"Come as You Are,\" uma das poucas novas canções que estavam escritas desde as primeiras sessões de gravação dos Nirvana com o produtor Butch Vig em 1990. Antes do início das gravações do Nevermind, a banda enviou a Vig uma demo em cassete com ensaios de várias canções, entre as quais \"Teen Spirit\".\n[…]\nO The New York Times observou que \"'Smells Like Teen Spirit' poderia ser a versão desta geração do single de 1976 dos Sex Pistols, 'Anarchy in the U.K.', se não fosse pela infeliz ironia que invade o seu título\", e acrescentou, \"Como os Nirvana sabem muito bem, o 'espírito jovem' é habitualmente engarrafado, embalado e vendido.\" A banda cresceu desconfortavelmente com o sucesso da canção, e em vários concertos posteriores chegou a excluí-la da setlist.\n[…]\nO que imaginei era um pouco melhor (pelo menos, mais gratificante) do que os Nirvana na verdade cantaram [?] Pior de tudo, não tenho a certeza que saiba mais sobre [o significado de] 'Smells Like Teen Spirit' agora do que antes de me ter atirado para a versão oficial dos factos.\n[…]\n\"Smells Like Teen Spirit\" (edit)\n[…]\n«Artigo sobre impacto cultural de Smells Like Teen Spirit» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Ramones",
      "descricao": "Banda punk americana formada em Nova York em 1974"
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Todos os integrantes dos Ramones adotaram o sobrenome Ramone, inspirado num pseudônimo usado no início da carreira por qual Beatle?",
    "resposta": "Paul McCartney",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ramones"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ramones",
        "situacao": "ok",
        "texto": "The Ramones were an American punk rock band formed in the New York City neighborhood Forest Hills, Queens, in 1974. Known for helping establish the punk movement in the United States and elsewhere, the Ramones are often recognized as one of the first bands of the genre. Although they never achieved significant commercial success during their existence, the band is highly influential in punk cultur\n[…]\nAll members adopted pseudonyms ending with the surname Ramone, although none were biologically related; they were inspired by Paul McCartney, who used the stage name Paul Ramon when the Beatles were still calling themselves The Silver Beetles. The Ramones performed 2,263 concerts, touring virtually nonstop for 22 years, and released fourteen studio albums. In 1996, after a tour as part of the Lollapalooza music festival, they played a farewell concert in Los Angeles and disbanded.\n[…]\nHowever, after only a few rehearsals it became clear that Stern could not play bass, so the group parted ways with him and became a trio, with Colvin switching from guitar to bass in addition to singing while Cummings became the only guitarist. Colvin was the first to adopt the name \"Ramone\", calling himself Dee Dee Ramone. He was inspired by Paul McCartney's use of the pseudonym Paul Ramon during his Silver Beetles days.\n[…]\nThe members of Motörhead later composed the song \"R.A.M.O.N.E.S.\" as a tribute, and Lemmy performed at the final Ramones concert in 1996. Paul Di'Anno, who sang on Iron Maiden's first two albums called the Ramones his \"favorite band\", and often performed Ramones material in his live shows.\n[…]\nRamones (1976)\n[…]\nList of Ramones concerts\n[…]\nRamones Museum\n[…]\nSandford, Christopher (2006). McCartney. Century. ISBN 1-84413-602-7.\n[…]\n1985 Ramones Interview;  V.O.M. Fanzine, Canada / Ragged Edge Collection at the Internet Archive\n[…]\nRamones at AllMusic\n[…]\nRamones discography at Discogs\n[…]\nRamones at IMDb\n[…]\nRamones on Facebook"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ramones",
        "situacao": "ok",
        "texto": "Ramones foi uma banda norte-americana de punk rock formada em Forest Hills, no distrito de Queens, Nova York, no ano de 1974. Considerada como precursora do estilo e uma das bandas mais influentes e importantes da história do rock.\n[…]\nQuando Douglas Colvin e John Cummings decidiram montar uma banda, chamaram para a bateria um conhecido de Douglas, Jeffrey Hyman. Nos primeiros ensaios John tocava guitarra e Douglas tocava o baixo e cantava. Batizaram a banda de Ramones, e todos passaram a utilizar o sobrenome \"Ramone\" , como se fizessem parte de uma família. Na verdade tratava-se de uma brincadeira com o fato de Paul McCartney se registrar em hotéis sob o pseudônimo de \"Paul Ramon\".\n[…]\nEm uma tentativa de alcançar o sucesso comercial, a gravadora e os Ramones havia chamado o produtor Phil Spector para produzir o próximo disco da banda. Spector se tornou famoso na década de 1960 produzindo discos de bandas como The Ronettes e Crystals, e na década de 1970 produziu diversos discos da carreira solo dos ex-Beatles John Lennon e George Harrison.\n[…]\nFoi neste clima que, em maio de 1988, foi lançado Ramonesmania, uma compilação de trinta músicas englobando todos os dez álbuns que já tinham gravado.\n[…]\nNo ano de 1990, foi lançado \"Lifestyle of the Ramones\", uma compilação de todos os vídeos que a banda tinha feito, até a data.\n[…]\nOs Ramones, em especial Joey e Johnny, tiveram diversas influências, a maioria da época de 60. Desde pequenos admiravam bandas como Beatles, Stones, The Doors e The Who, além dos ídolos rockabilly e da surf music, como The Beach Boys, The Turtles, The Ventures, Kinks, Kansas, Trashmen e Elvis Presley.\n[…]\nLista de concertos dos Ramones\n[…]\n«Sítio oficial dos Ramones» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Ukulele",
      "descricao": "Pequeno instrumento de cordas popularizado no Havaí no século dezenove"
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome do ukulele, instrumento havaiano, costuma ser traduzido como que inseto saltitante?",
    "resposta": "Pulga",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ukulele"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ukulele",
        "situacao": "ok",
        "texto": "The ukulele ( YOO-kə-LAY-lee; Hawaiian: [ʔukulele]), also called a uke (informally), is a member of the lute (ancestor of the guitar) family of instruments. The ukulele is of Portuguese origin and was popularized in Hawaii. The tone and volume of the instrument vary with size and construction. Ukuleles commonly come in four sizes: soprano, concert, tenor, and baritone.\n[…]\nDeveloped in the 1880s, the ukulele is based on several small, guitar-like instruments of Portuguese origin, the machete, cavaquinho and rajão, introduced to the Hawaiian Islands by Portuguese immigrants from Madeira, the Azores, and Cape Verde. Three immigrants in particular, Madeiran cabinet makers Manuel Nunes, José do Espírito Santo, and Augusto Dias, are generally credited as the first ukulele makers.\n[…]\nBass ukuleles are tuned similarly to the bass guitar and double bass: E1–A1–D2–G2 for U-Bass style instruments (sometimes called contrabass), or an octave higher, E2–A2–D3–G3, for Ohana type metal-string basses.\n[…]\nUkulele varieties include hybrid instruments such as the guitalele (also called guitarlele), banjo ukulele (also called banjolele), harp ukulele, lap steel ukulele, and the ukelin. It is very common to find ukuleles mixed with other stringed instruments because of the number of strings and the easy playing ability. There is also an electrically amplified variant of the ukulele.\n[…]\nClose cousins of the ukulele include the Portuguese forerunners, the cavaquinho (also commonly known as machete or braguinha) and the slightly larger rajão. Other relatives include the Venezuelan cuatro, the Colombian and North American tiples, the timple of the Canary Islands, the Spanish vihuela, the Mexican requinto jarocho, and the Andean charango traditionally made of an armadillo shell. In Indonesia, a similar Portuguese-inspired instrument is the kroncong.\n[…]\nUnveiling the Electric Ukulele"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ukulele",
        "situacao": "ok",
        "texto": "Ukulele ou uquelele (ukulele, /ˈʔu.ku.ˈlɛ.lɛ/, em português: \"pulga saltitante\", \"presente que veio de muito longe\"), é um instrumento musical de cordas (cordofone) originário do estado norte-americano do Havaí tocado pelo uquelelista, inspirado em instrumentos portugueses (machete, braguinha e cavaquinho).\n[…]\nNo idioma havaiano, ʻukulele quer dizer, dentre as interpretações possíveis, “pulga saltitante”, por causa do movimento das mãos de quem toca o instrumento. Já na interpretação da rainha Liliʻuokalani, significa \"presente que veio de muito longe\", numa referência às origens do instrumento. Outra hipótese é que a palavra ʻukulele seja derivada de ʻūkēkē, um arco musical nativo do Havaí.\n[…]\nAlém de ser utilizado na música tradicional havaiana, o ukulele foi bastante utilizado na música popular norte-americana. No pré-Segunda Guerra Mundial, foi utilizado por músicos de vaudeville como Roy Smeck e Cliff Edwards. Por ser portátil e relativamente barato, foi muito popular entre jovens músicos amadores durante a década de 1920, evidenciado pela impressão de diagramas de acorde para o instrumento nas partituras de música popular publicadas na época.\n[…]\nO interesse no ukulele caiu até meados dos anos 90, quando sua popularidade voltou a crescer. O conjunto The Ukulele Orchestra of Great Britain, formado no final dos anos 80, faz versões de músicas pop no ukulele. O músico havaiano Israel Kamakawiwo'ole também ajudou a popularizar o instrumento, especialmente com seu pot-pourri de \"Over the Rainbow\" e \"What a Wonderful World\".\n[…]\ncom /E/ abertos, ou seja: Ú-ku-LÉ-lé (AFI: [ˈʔukuˈlɛlɛ], X-SAMPA: /\"?uku\"lElE/). No Brasil, costuma-se pronunciar ukulele como uma palavra oxítona, devido a analogia com palavras de origem africana, como maculelê, não relacionada ao instrumento.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Duran Duran",
      "descricao": "Banda britânica de new wave formada em Birmingham em 1978"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "A banda britânica Duran Duran tirou o nome de um vilão de que filme de ficção científica dos anos sessenta?",
    "resposta": "Barbarella",
    "distratores": [
      "Planeta dos Macacos",
      "Fahrenheit 451",
      "Viagem Fantástica"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Duran_Duran"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Duran_Duran",
        "situacao": "ok",
        "texto": "Duran Duran () are an English pop rock band. Formed in Birmingham in 1978 by keyboardist Nick Rhodes, guitarist (later bassist) John Taylor and singer/bassist Stephen Duffy. The band went through several early changes before the band's line-up settled in May 1980 as Rhodes, Taylor, singer Simon Le Bon, guitarist Andy Taylor and drummer Roger Taylor.\n[…]\nChildhood friends John Taylor and Nick Rhodes formed Duran Duran in 1978 in Birmingham, England, together with Taylor's art school friend Stephen Duffy, naming their band after \"Dr. Durand Durand\", Milo O'Shea's character from the science fiction film Barbarella (1968), the day after the film was broadcast on BBC on 20 October 1978.\n[…]\nThe track \"Out of My Mind\" was used as the theme song for the film The Saint (1997), but the only true single to be released in the United States was the quirky \"Electric Barbarella\", which is one of the first singles ever to be sold online. The music video for this single, featuring a sexy robot purchased and played with by band members, had to be censored before airing on MTV, but there was little of the controversy that had surrounded \"Girls on Film\".\n[…]\n\"Electric Barbarella\" peaked at number 52 in the US in October 1997. Although Medazzaland was released in the US in October 1997, the album was never released in the UK. \"Electric Barbarella\" was later released in the UK as a single from the 1998 Greatest compilation album and peaked at number 23 on the UK chart in January 1999. The group played a set at the Princess Diana Tribute Concert on 27 June 1998 by special request of her family.\n[…]\nDavid, Maria (1984). Duran Duran. Colour Library Books Ltd. ISBN 978-0-86283-251-3.\n[…]\nMartin, Susan N. (1984). Duran Duran. Wanderer Books/Simon & Schuster. ISBN 978-0-671-53099-0.\n[…]\nDuran Duran at AllMusic\n[…]\nDuran Duran discography at Discogs\n[…]\nDuran Duran at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Duran_Duran",
        "situacao": "ok",
        "texto": "Duran Duran é uma banda inglesa de new wave  formada no ano de 1978 em Birmingham por John Taylor e Nick Rhodes, que começaram a tocar em um clube em que trabalhavam. John era um segurança de balada e Nick era o DJ do grupo. É a mais bem-sucedida banda do estilo new romantic, sendo uma das mais importantes da década de 1980. Duran Duran era a banda favorita da Princesa Diana.\n[…]\nO nome da banda foi escolhido dentre muitos, numa tentativa de fugir da obviedade. Segundo John, nada que começasse com \"The\" seria uma boa opção, tendo em vista o número incontável de grupos que se utilizavam do artigo definido em seus nomes. Assim, em referência ao filme francês de ficção científica Barbarella – e ao vilão Dr. Durand Durand, interpretado por Milo O'Shea – surgiu aquele que seria o nome de uma das bandas que mais teve protagonismos nas décadas seguintes.\n[…]\nO grupo acabou negando o convite, o que levou a cantora Sheryl Crow a assumir a trilha sonora do longa. A canção que seria usada para 007 acabou sendo aproveitada para outro filme, \"The Saint (O Santo)\", e se chama \"Out of my Mind\", o primeiro single do Medazzaland. Essa música não atingiu sucesso nas paradas, o que só foi obtido a partir do segundo single do álbum, \"Electric Barbarella\" (#52 nos Estados Unidos), a primeira canção da história a ser disponibilizada para download na internet.\n[…]\nMedazzaland foi lançado em Outubro de 1997 apenas para os EUA, e nunca foi lançado oficialmente no Reino Unido. Incompreendido pela crítica, o álbum não obteve o sucesso esperado. \"Barbarella\" foi lançada como single no Reino Unido apenas em 1998, juntamente com o lançamento da coletânea \"Greatest\". A canção chegou à posição #23 das paradas britânicas.\n[…]\nOs internautas da UOL elegeram o Duran Duran como melhor show internacional de 2008, deixando a banda na frente de nomes como Cyndi Lauper, Madonna e R.E.M.\n[…]\nDuran Duran (1993)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Rick Allen",
      "descricao": "Baterista britânico da banda de hard rock Def Leppard"
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Por que o baterista Rick Allen, do Def Leppard, passou a tocar numa bateria adaptada, com pedais eletrônicos?",
    "resposta": "Perdeu um braço num acidente de carro",
    "fonte": [
      "https://en.wikipedia.org/wiki/Rick_Allen_(drummer)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rick_Allen_(drummer)",
        "situacao": "ok",
        "texto": "Richard John Cyril Allen (born 1 November 1963) is an English musician who has been the drummer of the hard rock band Def Leppard since 1978. He overcame the amputation of his left arm in 1985 and continued to play with the band, which went on to its most commercially successful phase. Known as \"The Thunder God\" by fans, he is ranked No. 7 on Gigwise in The Greatest Drummers of All Time list.\n[…]\nAllen was born on 1 November 1963 in Dronfield, Derbyshire to Kathleen Moore and Geoffrey Allen, and started playing drums at the age of nine. He performed in the bands Grad, Smokey Blue, Rampant, and the Johnny Kalendar Band. When he was 14, his mother replied on his behalf to an advertisement placed by a band called Def Leppard looking for a drummer to replace Tony Kenning (\"Leppard loses skins\" was the advertisement's headline).\n[…]\nInitially, Allen felt \"defeated,\" but, buoyed by \"family, friends and hundreds of thousands of letters from all over the planet,\" he decided to continue playing drums with Def Leppard, and he adopted a specially designed electronic drum kit.\n[…]\nAllen and his wife Lauren Monroe are the co-founders of the Raven Drum Foundation, a charity. Allen also formed the One Hand Drum Company to provide funding for the Raven Drum Foundation. The company primarily sells merchandise featuring \"Stik Rick\", an illustrated character representing Allen.\n[…]\nOn the weekend of 12 March 2023, while standing in the parking valet area of the Four Seasons Hotel in Fort Lauderdale, Florida, where he was staying for a performance at the Seminole Hard Rock Hotel & Casino Hollywood, Allen was attacked by a \"spring-breaker\" who intentionally ran toward and collided with him, knocking him to the ground. He sustained a head injury. The attacker was apprehended and charged with several crimes.\n[…]\nRick Allen @ DefLeppard.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rick_Allen",
        "situacao": "ok",
        "texto": "Def Leppard é uma banda de rock formada na cidade de Sheffield, Inglaterra, em 1977. Fez parte da geração chamada NWOBHM, porém tem outros estilos, como hard rock. É considerada uma das bandas mais populares do mundo e já vendeu mais de 100 milhões de álbuns mundialmente.\n[…]\nAté hoje dizem que essa mudança de nome foi para soar parecido com o nome de outra grande banda, o Led Zeppelin. O Def Leppard sempre negou o fato, embora jamais tenham escondido seu respeito e admiração pela banda. Steve Clark se junta ao grupo em 1978 ao mesmo tempo em que Tony Kenning deixa o grupo. É substituído por Frank Noon, que fica pouco tempo, sendo por sua vez substituído pelo jovem baterista Rick Allen, de apenas quinze anos.\n[…]\nHavia uma grande expectativa, tanto dos fãs quanto da própria banda a respeito dessas apresentações na famosa cidade brasileira. No final de dezembro de 1984, o baterista Rick Allen sofre um terrível acidente de carro e tem o braço esquerdo amputado. Os médicos tentam o reimplante do membro, mas sem sucesso. Todos os compromissos profissionais são imediatamente cancelados e a banda se retira por quatro anos.\n[…]\nApós cinco anos sem gravar, o Def Leppard retorna com o álbum Hysteria, em 1987. É o disco de maior sucesso da banda, com mais de vinte milhões de cópias vendidas (principalmente nos Estados Unidos e Inglaterra). Rick Allen participa das gravações com uma bateria especial na qual os controles de ritmo estão todos nos pés.\n[…]\nO Def Leppard, entretanto, expressou seu desagrado à indústria \"glam metal\", assim como pensaram que a mesma não descreve com precisão seu estilo musical ou aparência.\n[…]\nDef Leppard - 2015",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Tony Iommi",
      "descricao": "Guitarrista britânico, fundador do Black Sabbath"
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Por que o guitarrista Tony Iommi, do Black Sabbath, toca usando pontas de dedos artificiais?",
    "resposta": "Perdeu as pontas dos dedos numa fábrica",
    "fonte": [
      "https://en.wikipedia.org/wiki/Tony_Iommi"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tony_Iommi",
        "situacao": "ok",
        "texto": "Anthony Frank Iommi Jr. (; born 19 February 1948) is an English musician. He co-founded the pioneering heavy metal band Black Sabbath in 1968, and was the guitarist, leader, main composer, and only constant member during the band's existence for over fifty years, playing guitar on all of their releases. He has been referred to as the \"Godfather of Heavy Metal\".\n[…]\nIn 2009, Iommi signed with Mike Fleiss's movie production company Next Films to score a series of horror films titled Black Sabbath.\n[…]\nHe has been credited as the forerunner of other styles: Martin Popoff defined him as \"the godfather of stoner rock\"; Jeff Kitts and Brad Tolinski of Guitar World assert that \"grunge, goth, thrash, industrial, death, doom... whatever. None of it would exist without Tony Iommi\". According to Hawaii Public Radio: \"it is hard to imagine Nirvana, Soundgarden, Pearl Jam or Alice in Chains without Black Sabbath, and without Tony Iommi.\n[…]\nA 1965 Gibson SG Special in red finish fitted with a Gibson P-90 pick-up in the bridge position and a custom-wound John Birch Simplux, a P-90 style single coil in the neck position. The guitar became Iommi's main instrument after his white Stratocaster's neck pick-up failed during the recording of Black Sabbath's self-titled album. It is currently on permanent display at the New York City Hard Rock Cafe .\n[…]\nA Gibson Tony Iommi Signature Pick Up has been available for the past two decades. The pick-up got its first 'blooding' on the Black Sabbath reunion/Ozzfest tour in the summer of 1997, loaded into an SG that J.T. Riboloff of Gibson built. They also feature in the two SGs (one black and one red) that the Gibson Custom Shop built for Iommi in late 1997, as prototypes for the Tony Iommi special Custom Shop model. The pick-up is still in production, and available in silver, gold or black covers.\n[…]\nTony Iommi at AllMusic"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tony_Iommi",
        "situacao": "ok",
        "texto": "Anthony Frank \"Tony\" Iommi Jr. MBE (Birmingham, 19 de fevereiro de 1948) é um músico britânico. Ele é conhecido mundialmente por ser guitarrista e membro fundador da banda britânica de metal Black Sabbath e do projeto Heaven & Hell com o vocalista Dio. Foi considerado o 25º melhor guitarrista de todos os tempos pela revista norte-americana Rolling Stone. É amplamente considerado o principal contri\n[…]\nTony Iommi é conhecido principalmente por seus riffs vigorosos e pesados e por basear a maioria dos seus solos em Pentatônica menor. Começou a se interessar por música na adolescência, quando tomou algumas aulas de piano, mas logo perdeu o interesse pelo instrumento e decidiu aprender guitarra. Segundo ele, o grupo que mais o inspirou foi a banda de Hank Marvin The Shadows.\n[…]\nPor causa de um acidente de trabalho a trajetória musical de Iommi ameaçou a terminar logo na juventude. O fato ocorreu na fábrica onde trabalhara quando ele foi chamado para operar uma prensa mecânica no lugar de um colega que havia faltado. Num momento de distração acabou colocando a mão direita na máquina que puxou de volta num reflexo de retração, decepando a falange distal dos dedos do meio e anelar.\n[…]\nA motivação para continuar tocando foi reencontrada ao receber de presente do dono da empresa onde sofreu o acidente um disco do guitarrista belga de Jazz Django Reinhardt, que tocava apenas usando os dedos indicador e médio. Empolgado com o fato, Tony Iommi começou a usar encaixes improvisados de plástico derretido nas pontas dos dedos para poder tocar, que foram depois substituídos por próteses.\n[…]\nDesde início do Black Sabbath até os dias atuais, Tony utiliza a guitarra Gibson SG.\n[…]\nEPIPHONE TONY IOMMI G-400 (assina como endorser, não a utiliza em palco)\n[…]\nThe Story of the Gibson Tony Iommi Signature Pick-up by Mike Clement\n[…]\nThe Tony Iommi/Laney collaboration By Mike Clement\n[…]\nLa Bella TI832 Tony Iommi Signature 8-32",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Michael Jackson",
      "descricao": "Cantor e dançarino americano conhecido como Rei do Pop"
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1984, durante a gravação de um comercial da Pepsi, o cabelo de Michael Jackson pegou fogo. O que causou o acidente?",
    "resposta": "Fogos pirotécnicos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Michael_Jackson"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Michael_Jackson",
        "situacao": "ok",
        "texto": "Michael Joseph Jackson (August 29, 1958 – June 25, 2009) was an American singer, songwriter, dancer, and philanthropist. Dubbed the \"King of Pop\", he is widely regarded as one of the most culturally significant figures of the 20th century. His musical achievements broke American racial barriers and made him a dominant figure worldwide.\n[…]\nOn January 27, 1984, Michael and other members of the Jacksons filmed a Pepsi commercial at the Shrine Auditorium in Los Angeles, overseen by Phil Dusenberry, a BBDO ad agency executive, and Alan Pottasch, Pepsi's Worldwide Creative Director. During a simulated concert before a full audience, pyrotechnics accidentally set Jackson's hair on fire, causing second-degree burns to his scalp. He underwent treatment to conceal the scars and had his third rhinoplasty shortly afterward.\n[…]\nKatherine Jackson said this might have been because some Witnesses strongly opposed the Thriller video, which Michael denounced in a Witness publication in 1984. While former members are usually shunned by their families, Jackson's mother remained in contact with him. In 2001, Jackson told an interviewer he was still a Jehovah's Witness.\n[…]\nJackson had been taking painkillers for reconstructive scalp surgeries administered after the 1984 Pepsi commercial accident, and became dependent on them to cope with the stress of the allegations. On November 12, 1993, Jackson canceled the remainder of the Dangerous World Tour due to health problems, stress from the allegations, and painkiller addiction. He thanked his friend Elizabeth Taylor for her support. The end of the tour concluded his sponsorship deal with Pepsi.\n[…]\nMichael Jackson's Journey from Motown to Off the Wall (2016)\n[…]\nPersonal relationships of Michael Jackson\n[…]\nHow Michael Jackson Changed Dance History – biography.com\n[…]\nMichael Jackson at the FBI's website"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Michael_Jackson",
        "situacao": "ok",
        "texto": "Michael Joseph Jackson (Gary, 29 de agosto de 1958 – Los Angeles, 25 de junho de 2009) foi um cantor, compositor, dançarino e filantropo estadunidense. Apelidado de \"Rei do Pop\", ele é considerado uma das figuras culturais mais significantes do século XX e um dos maiores artistas da história da música. Ao longo de uma carreira de quatro décadas, suas conquistas musicais ao redor do mundo e sua vid\n[…]\nEm 27 de janeiro de 1984, Michael Jackson sofreu um acidente enquanto gravava o segundo comercial para a televisão do contrato de cinco milhões de dólares que havia assinado para ser garoto-propaganda da Pepsi. O cabelo do astro foi incendiado por fogos de artifício. Ele teve queimaduras de segundo grau no couro cabeludo. Michael foi liberado do hospital um dia depois da internação.\n[…]\nHouve uma explosão e o \"Rei do Pop\" saiu pulando do chão acompanhado de fogos. Ele pousou e ficou imóvel em sua famosa postura de estátua por vários minutos, enquanto a multidão ia ao delírio. Uma chuva de fogos caía sobre o astro, que estava com seu tradicional óculos de sol, bracelete, roupa de militar com detalhes em ouro. Ele virou o rosto e lentamente começou a tirar os óculos, jogou-os e começou a cantar e dançar. Michael cantou três canções: \"Jam\", \"Billie Jean\" e \"Black or White\".\n[…]\nDurante a rápida divulgação do álbum ficaram explícitas as divergências entre Michael e o então chefe da Sony Music, Tommy Mottola. Os problemas começaram em 2000, quando Jackson tentou retirar a licença das gravações originais do catálogo dele da gravadora para lançamento independente. Assim Michael não precisaria dividir os lucros com a Sony. Entretanto, os advogados de Jackson encontraram cláusulas no contrato dele com a gravadora que impediam a transação.\n[…]\nMaking Michael Jackson's Thriller (1984)\n[…]\nMichael Jackson's Moonwalker (1989)\n[…]\nMichael Jackson: The Experience (2010)\n[…]\nPlanet Michael (2011)\n[…]\nMichael Jackson no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Bob Dylan",
      "descricao": "Cantor e compositor americano de folk e rock, nascido Robert Zimmerman"
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1965, no Festival Folk de Newport, Bob Dylan foi vaiado por parte do público. O que ele fez para provocar isso?",
    "resposta": "Tocou com guitarra elétrica",
    "fonte": [
      "https://en.wikipedia.org/wiki/Electric_Dylan_controversy"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Electric_Dylan_controversy",
        "situacao": "ok",
        "texto": "In 1965, Bob Dylan, the leading songwriter of the American folk music revival, began recording and performing with electric instruments, generating controversy in the folk music community.\n[…]\nDylan performed two songs on acoustic guitar for the audience: \"Mr Tambourine Man\" followed by \"It's All Over Now, Baby Blue.\" The crowd exploded with applause, calling for more. Dylan did not return to the Newport festival for 37 years. In an enigmatic gesture, Dylan performed at Newport in 2002 sporting a wig and fake beard.\n[…]\nIn July 2012, an episode of the PBS series History Detectives recounted the story of New Jersey resident Dawn Peterson, who said she had the Fender Stratocaster Dylan played at Newport. She explained that Dylan had left the guitar on a plane piloted by her father, Victor Quinto, in 1965. An instrument specialist was convinced that the guitar was genuine, and lyrics of songs in the guitar case were identified as Dylan's work by a memorabilia collector.\n[…]\nDylan and Peterson settled a legal dispute over the guitar, and in December 2013 it was sold by Christie's auction house in New York for $965,000. It was purchased by Jim Irsay, owner of the Indianapolis Colts football team. On July 26, 2015, the guitar was publicly played for the first time in 50 years during a tribute set at the Newport Folk Festival honoring the 50th anniversary of Dylan's performance at Newport.\n[…]\nThe tribute set included Gillian Welch, Dave Rawlings, Willie Watson, the New Orleans Preservation Hall Jazz Band, Jason Isbell, and several others. Isbell played Dylan's guitar during the tribute set and Newport Folk Festival producer Jay Sweet was quoted as saying \"Dylan's guitar is home\"."
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Live Aid",
      "descricao": "Megashow beneficente realizado em 13 de julho de 1985 em Londres e na Filadélfia"
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1985, os shows do Live Aid, em Londres e na Filadélfia, foram organizados para arrecadar dinheiro contra que tragédia?",
    "resposta": "A fome na Etiópia",
    "fonte": [
      "https://en.wikipedia.org/wiki/Live_Aid"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Live_Aid",
        "situacao": "ok",
        "texto": "Live Aid was a two-venue benefit concert and music-based fund-raising initiative held on Saturday, 13 July 1985. The event was organised by Bob Geldof and Midge Ure to raise further funds for relief of the 1983–1985 famine in Ethiopia, a movement that started with the release of the successful charity single \"Do They Know It's Christmas?\" in December 1984. Billed as the \"global jukebox\", Live Aid \n[…]\nBruce Springsteen decided not to appear at Live Aid despite his huge global popularity in 1985. Geldof had originally scheduled the event for 6 July but moved the date to the 13th, especially to accommodate Springsteen. Springsteen later expressed regret at turning down Geldof's invitation, stating that he \"simply did not realise how big the whole thing was going to be\" and regretted not performing an acoustic set.\n[…]\nOn 12 September 2018, YouTube launched the Official Live Aid channel with a total of 87 videos from the Live Aid 1985 concert. According to the channel, all earnings from viewings go to the Band Aid Trust. As with the digital download release, a few notable performances are not included for unknown reasons, although Queen's set was uploaded to the channel with its inclusion on the digital download.\n[…]\nMany artists and performers at Live Aid gained prominence and positive commercial influence. For all the cultural, charitable, and technological significance of 1985's Live Aid, its most immediate impact was on the charts. In the UK, for example, No Jacket Required by Phil Collins and Madonna's Like a Virgin leapt back into the top ten. Queen's three-year-old Greatest Hits rose fifty-five places into the top twenty, followed by Freddie Mercury's Mr. Bad Guy.\n[…]\nLive Aid: World Wide Concert Book – Peter Hillmore with Introduction by Bob Geldof, ISBN 0-88101-024-3, Copyright 1985, The Unicorn Publishing House, New Jersey.\n[…]\nPhilly.com: Live Aid Philadelphia Photo Gallery"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Live_Aid",
        "situacao": "ok",
        "texto": "Live Aid foi um concerto realizado em 13 de julho de 1985. O evento foi organizado por Bob Geldof e Midge Ure com o objetivo de arrecadar fundos a fim de acabar com a fome na Etiópia. Os shows foram realizados no Wembley Stadium em Londres (com uma plateia de aproximadamente 82 000 pessoas) e no John F. Kennedy Stadium na Filadélfia (aproximadamente 99 000 pessoas). Alguns artistas apresentaram-se\n[…]\nPhil Collins se apresentou tanto no Wembley quanto no JFK, utilizando um Concorde para viajar de Londres à Filadélfia. Além de seu próprio set, ele também se apresentou como baterista de Eric Clapton e do Led Zeppelin no JFK. Durante o vôo, Phil se encontrou com a cantora Cher, que não estava sabendo sobre os shows. Ela pode ser vista se apresentando nos EUA com o USA For Africa na conclusão do concerto na Filadélfia.\n[…]\nO repórter Tim Russet, ao entrevistar Bono no programa Meet The Press na época dos comentários de O'Reilly, direcionou as preocupações do apresentador ao cantor pop. Bono respondeu que é a corrupção, e não doenças ou fome, o principal problema da África, concordando com a ideia de que organizações estrangeiras deveriam decidir o futuro das doações. Por outro lado, o cantor disse que era melhor continuar investindo em prol dos necessitados do que abandoná-los com medo de um provável roubo.\n[…]\nOutros críticos argumentaram que doações para organizações de caridade acabam também sendo usadas por governos corruptos. Grande parte dos fundos angariados pelo Live Aid foram para ONGs na Etiópia, algumas sob a influência ou controle da junta militar de Derg.\n[…]\nEntretanto apenas o DVD oficial reverte seus lucros diretamente para organizações em prol do combate à fome, causa que o concerto pretendia originalmente ajudar.\n[…]\nFome de 1984-1985 na Etiópia\n[…]\nLive Earth\n[…]\nLive Aid: Rockin' All Over the World - Documentário da BBC TV sobre a organização do evento.\n[…]\n«Site não-oficial do DVD Live Aid»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Smoke on the Water",
      "descricao": "Canção do Deep Purple lançada em 1972 no álbum Machine Head"
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "A canção Smoke on the Water, do Deep Purple, descreve a fumaça de que acontecimento em Montreux, na Suíça, em 1971?",
    "resposta": "Incêndio do cassino num show de Frank Zappa",
    "fonte": [
      "https://en.wikipedia.org/wiki/Smoke_on_the_Water"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Smoke_on_the_Water",
        "situacao": "ok",
        "texto": "\"Smoke on the Water\" is a song by English rock band Deep Purple, released on their 1972 studio album Machine Head. The song's lyrics are based on true events, chronicling the 1971 fire at Montreux Casino in Montreux, Switzerland. It is considered the band's signature song and its guitar riff is considered to be one of the most iconic in rock history.\n[…]\nOn the eve of the recording session, a concert with Frank Zappa and the Mothers of Invention was held in the Montreux casino's theatre. This was the theatre's final concert before the casino complex closed down for its annual winter renovations, which would allow Deep Purple to record there.\n[…]\nBecause of the incident and the exposure Montreux received when \"Smoke on the Water\" became an international hit, Deep Purple formed a lasting bond with the town. The song was honoured in Montreux by a sculpture along the lake shore (right next to the statue of Queen frontman Freddie Mercury on the concrete wall right below the marché couvert de Montreux) with the band's name, the song title, and the riff in musical notes.\n[…]\nOn 3 March 2024, to celebrate the Super Deluxe Edition of Machine Head, Deep Purple released its first official music video to \"Smoke on the Water\" after 52 years. The song was remixed by Dweezil Zappa, son of musician Frank Zappa, and the animated music video was directed by Dan Gibling and Luke McDonnell of Chiba Film.\n[…]\n\"Smoke on the Water\" has received the following rankings:\n[…]\nSwiss Cheese/Fire!, a recording of the concert in which the Montreux Casino fire occurred (included in Frank Zappa's Beat the Boots! II compilation)\n[…]\n\"Smoke on the Water - the story\". Deep-Purple.net.\n[…]\nOfficial Deep Purple website\n[…]\nSmoke on the Water review and back story Archived 10 February 2021 at the Wayback Machine at Eat Sleep Guitar Repeat"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Smoke_on_the_Water",
        "situacao": "ok",
        "texto": "\"Smoke on the Water\" é uma canção da banda britânica de rock Deep Purple. Foi lançada pela primeira vez no seu álbum Machine Head, de 1972. A música é famosa por ter um dos riffs de guitarra mais conhecidos e tocados da história do rock.\n[…]\nA letra da canção fala de uma história verídica: em 4 de dezembro de 1971, o Deep Purple chegou em Montreux, na Suíça, para gravar um álbum usando um estúdio de gravação móvel (alugado dos Rolling Stones, e conhecido como Rolling Stones Mobile Studio, chamado de \"Rolling truck Stones thing\" e \"the mobile\" na letra da música) no complexo de entretenimento que fazia parte do Cassino de Montreux (chamado de \"the gambling house\", \"casa de apostas\", na letra).\n[…]\nNa véspera da sessão de gravação um show de Frank Zappa e The Mothers of Invention foi realizado no teatro do cassino e, durante o show, um incêndio se iniciou; no meio do solo de sintetizador de \"King Kong\", alguém na plateia disparou um sinalizador (flare gun) no teto de ratã, incendiando-o (o que é mencionado no verso \"some stupid with a flare gun\", \"um idiota com um sinalizador\"). O incêndio destruiu todo o complexo do cassino, juntamente com todo o equipamento do Mothers.\n[…]\nA \"fumaça na água\" que se tornou o título da canção (creditado ao baixista Roger Glover) referia-se à fumaça vinda do fogo, que se espalhou pelo lago de Genebra (também conhecido como lago Léman) a partir do cassino em chamas, enquanto os membros da banda o assistiam de seu hotel, do outro lado do lago. O \"Funky Claude\" que, segundo a letra, \"entrava e saía correndo\" (running in and out) é Claude Nobs, diretor do Festival de Jazz de Montreux, que ajudou parte da plateia a fugir das chamas.\n[…]\nSmoke on the water",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Tears in Heaven",
      "descricao": "Canção de Eric Clapton e Will Jennings lançada em 1992"
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Eric Clapton compôs Tears in Heaven após que tragédia pessoal, em 1991?",
    "resposta": "A morte do filho de quatro anos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Tears_in_Heaven"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tears_in_Heaven",
        "situacao": "ok",
        "texto": "\"Tears in Heaven\" is a song by the English guitarist, singer, and songwriter Eric Clapton and the American songwriter Will Jennings, released on the soundtrack for the film Rush (1991). It was written about the death of Clapton's four-year-old son Conor.\n[…]\nOn 20 March 1991, Clapton's four-year-old son, Conor, whom he had with Lory Del Santo, died after falling from the 53rd-floor window of a New York City apartment belonging to a friend of Conor’s mother. After isolating himself for a period, Clapton began working again, writing music for the film Rush (1991). He dealt with his grief by writing \"Tears in Heaven\" with Will Jennings for the soundtrack. Clapton said he admired Jennings' work with Steve Winwood.\n[…]\nIn Sweden, \"Tears in Heaven\" reached number four on the Sverigetopplistan singles chart, where it spent a total of 30 weeks on chart.\n[…]\nAt last, \"Tears in Heaven\" peaked at number eight on Asociación Colombiana de Productores de Fonogramas (ASINCOL)'s physical format singles chart in Colombia. It also reached number thirty-eight on the country's year-end chart of 1992, compiled by ASINCOL, and is Clapton's only charting single in the country.\n[…]\nEric Clapton – vocals, acoustic and electric guitars, Dobro\n[…]\nClapton made numerous public service announcements to raise awareness for childproofing windows and staircases. In 2004 Clapton stopped performing \"Tears in Heaven\" as well as the song \"My Father's Eyes\", stating: \"I didn't feel the loss anymore, which is so much a part of performing those songs. I really have to connect with the feelings that were there when I wrote them. They're kind of gone and I really don't want them to come back, particularly. My life is different now."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tears_in_Heaven",
        "situacao": "ok",
        "texto": "\"Tears in Heaven\" é uma canção composta por Eric Clapton juntamente com Will Jennings. A letra fala sobre a dor e perda que Clapton sentiu após a morte de seu filho Conor de quatro anos de idade, que caiu da janela do 53º andar de um apartamento de um amigo de sua mãe, em Nova Iorque em 20 de março de 1991. Clapton, que chegou ao apartamento pouco depois do acidente, ficou visivelmente desesperado\n[…]\nWill Jennings, co-autor da música, relutou no início para ajudá-lo a compor uma canção pessoal. A composição foi inicialmente lançada na trilha sonora do filme Rush, seguido pelo álbum acústico Unplugged (1992). \"Tears in Heaven\" ganhou três Grammys dos seis que Clapton levou, sendo: Gravação do Ano, Canção do Ano e Melhor Performance Vocal Pop Masculina no Grammy Award de 1993. Ele também ganhou um prêmio no MTV Video Music Award de Melhor Videoclipe Masculino em 1992.\n[…]\nEm 20 de março de 1991, seu filho, Conor, caiu do 53° andar e morreu. Após isolar-se por um tempo, Clapton começou a trabalhar novamente, compondo uma música para um filme sobre toxicodependência chamado Rush. Eric Clapton compôs a canção \"Tears in Heaven\" para o seu filho Conor, que foi lançada no álbum Unplugged. Unplugged fez sucesso nas paradas e foi indicado a nove prêmios Grammy no ano que foi lançado.\n[…]\nEm 2005, Ozzy Osbourne e Sharon Osbourne montaram um elenco de estrelas para colaborar junto a Eric Clapton em \"Tears in Heaven\". O lucro das vendas da gravação beneficiou o apelo do Disasters Emergency Committee para ajudar as vítimas do Terremoto e Tsunami no Sudeste Asiático. A formação incluia;  Gwen Stefani, Mary J. Blige, Pink, Slash, Steven Tyler, Elton John, Andrea Bocelli, Katie Melua, Josh Groban, Robbie Williams, Scott Weiland e Rod Stewart.\n[…]\nOutras gravações de \"Tears in Heaven\":",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Jimi Hendrix",
      "descricao": "Guitarrista e cantor americano de rock, morto em 1970"
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Por que Jimi Hendrix tocava guitarras feitas para destros viradas de cabeça para baixo?",
    "resposta": "Era canhoto",
    "fonte": [
      "https://en.wikipedia.org/wiki/Jimi_Hendrix"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Jimi_Hendrix",
        "situacao": "ok",
        "texto": "James Marshall \"Jimi\" Hendrix (born Johnny Allen Hendrix; November 27, 1942 – September 18, 1970) was an American guitarist, singer, and songwriter. He is widely regarded as one of the greatest and most influential guitarists of all time. He was inducted into the Rock and Roll Hall of Fame in 1992 as a part of his band, the Jimi Hendrix Experience; the institution describes him as \"arguably the gr\n[…]\nJohnny Allen Hendrix was born on November 27, 1942, in Seattle; he was the first of Lucille's five children. In 1946, Johnny's parents changed his name to James Marshall Hendrix, in honor of Al and his late brother Leon Marshall.\n[…]\nIn 2005, his debut album, Are You Experienced, was one of 50 recordings added that year to the US National Recording Registry in the Library of Congress, \"[to] be preserved for all time ... [as] part of the nation's audio legacy\". In Seattle, November 27, 1992, which would have been Hendrix's 50th birthday, was made Jimi Hendrix Day, largely due to the efforts of his boyhood friend, guitarist Sammy Drain.\n[…]\nThe Electric Lady Studio Guitar, a sculpture depicting Hendrix playing a Stratocaster, stands near the corner of Broadway and Pine Streets in Seattle. In May 2006, the city renamed a park near its Central District Jimi Hendrix Park, in his honor. In 2012, an official historic marker was erected on the site of the July 1970 Second Atlanta International Pop Festival near Byron, Georgia.\n[…]\nThe United States Postal Service issued a commemorative postage stamp honoring Hendrix in 2014. On August 21, 2016, Hendrix was inducted into the Rhythm and Blues Music Hall of Fame in Dearborn, Michigan. The James Marshall \"Jimi\" Hendrix United States Post Office in Renton Highlands near Seattle, about a mile from Hendrix's grave and memorial, was renamed for Hendrix in 2019.\n[…]\nJimi Hendrix at AllMusic\n[…]\nFBI Records: The Vault – James Marshall \"Jimi\" Hendrix at vault.fbi.gov"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jimi_Hendrix",
        "situacao": "ok",
        "texto": "James Marshall \"Jimi\" Hendrix (nascido Johnny Allen Hendrix; Seattle, 27 de novembro de 1942 – Londres, 18 de setembro de 1970) foi um guitarrista, cantor e compositor norte-americano. Na grande maioria das listas já publicadas de melhores guitarristas da história, ocupa o primeiro lugar, é um dos mais influentes músicos de sua era, em diversos gêneros musicais.\n[…]\nSegundo Wright, o empresário do guitarrista, Mike Jeffrey, confessou que contratou um grupo que teria invadido o quarto de hotel e forçado Jimi Hendrix a tomar vinho e soníferos.\n[…]\nParte do estilo único de Hendrix se deve ao facto de ele ter sido canhoto. Embora ele tivesse e usasse diversos modelos de guitarra durante sua carreira (incluindo uma Gibson Flying V que ele decorara com motivos psicodélicos), sua guitarra preferida, e que será sempre associada a ele, era a Fender Stratocaster, ou \"Strat\". Ele comprou sua primeira Strat por volta de 1965, e usou-as quase constantemente durante o resto de sua vida.\n[…]\nHendrix foi também um revolucionário no desenvolvimento da amplificação e dos efeitos com a guitarra moderna. Sua alta energia no palco e volume elevado com o qual tocava requeriam amplificadores robustos e potentes. Durante os primeiros meses de sua turnê inicial ele usou amplificadores Vox e Fender, mas ele rapidamente descobriu que eles não podiam aguentar o rigor de um show do Experience.\n[…]\nFelizmente ele descobriu o alcance dos amplificadores de guitarra de alta potência fabricados pelo engenheiro de áudio inglês Jim Marshall e eles se mostraram perfeitos para as necessidades de Jimi. Assim como ocorreu com a Strat, Hendrix foi o principal promotor da popularidade das \"Pilhas Marshall\" e os amplificadores Marshall foram cruciais na modelagem do seu som pesado e saturado, habilitando-o a controlar o uso criativo de \"feedback\" (N.T. microfonia) como efeito musical.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Van Halen",
      "descricao": "Banda americana de hard rock fundada pelos irmãos Eddie e Alex Van Halen"
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Por que a banda Van Halen exigia, nos camarins, uma tigela de confeitos de chocolate coloridos sem nenhum marrom?",
    "resposta": "Para testar se o contrato foi lido",
    "fonte": [
      "https://en.wikipedia.org/wiki/Van_Halen"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Van_Halen",
        "situacao": "ok",
        "texto": "Van Halen ( van HAY-len) was an American rock band formed in Pasadena, California, in 1972. Credited with restoring hard rock to the forefront of the music scene, Van Halen was known for their energetic live performances and the virtuosity of their guitarist, Eddie Van Halen.\n[…]\nThe band was working on a compilation album. This led to conflicts with Hagar and the group's new manager, Ray Danniels (Ed Leffler's replacement and Alex Van Halen's former brother-in-law), even though it was Leffler who had renewed their contract with Warner Bros. Records and had added of a greatest hits album option years before.\n[…]\nVan Halen's next lead singer was Gary Cherone, former frontman of the Boston-based band Extreme, a group which had enjoyed some popular success in the early 1990s. The result was the album Van Halen III. Many songs were longer and more experimental than Van Halen's earlier work. It was a notable contrast from their previous material, with more focus on ballads than traditional rock songs (\"How Many Say I\", with Eddie on vocals).\n[…]\nThe complex technical demands of a Van Halen tour ultimately had a notable side-effect on modern pop music tours, especially via the concert's technical contract rider. The band used contract riders to verify the venue's power availability, security, structural and weight distribution details. Their riders specified that a bowl of M&M's candies was to be placed in their dressing room and, separately, in a different area of the contract, that all of the brown M&M's were to be removed.\n[…]\nAccording to manager Noel Monk and Roth, this was listed in the technical portion of the contract as a test to see if the electrical, structural, security, and safety requirements in the rider had been thoroughly observed.\n[…]\nVan Halen III (1998)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Van_Halen",
        "situacao": "ok",
        "texto": "Van Halen foi uma banda de hard rock norte-americana formada em 1972. Foi fundada pelos irmãos Eddie Van Halen e Alex Van Halen, que mais tarde juntou o cantor David Lee Roth e o baixista Michael Anthony. Van Halen rapidamente chegou à fama com seu primeiro álbum de mesmo nome em 1978, e é amplamente considerada como um marco nas vendas de rock nos EUA, ocupando a 19ª posição na lista dos maiores \n[…]\nContudo, Eddie não se sentia confortável em ocupar-se dos vocais além da guitarra. David Lee Roth, de uma banda que os Van Halen sempre encontravam e que subsequentemente alugava seu sistema de som para os irmãos, foi eventualmente convidado para se tornar vocalista. Em 1974 a banda decidiu substituir Stone por Michael Anthony, o baixista e vocalista da banda local Snake. Após uma jam session que durou toda a noite, ele foi contratado para baixo e backing vocals.\n[…]\nDesde então, veio continuamente lutando contra a doença. Sua morte ocorreu apenas 10 dias após Mark Stone, baixista original do Van Halen, também falecer de câncer. Mark Stone esteve na banda entre 1972 e 1974, quando a banda ainda se chamava Mammoth. Stone foi substituido em 1974 por Michael Anthony, o qual se consolidou como baixista do Van Halen até 2006. Em novembro, Wolfgang confirmou que a banda estava encerrando as atividades, declarando que \"não existe Van Halen sem Eddie\".\n[…]\nEm julho de 1986, David lança o primeiro álbum com o seu supergrupo (The David Lee Roth Band), que fora montado para concorrer com o Van Halen, com o nome Eat 'Em and Smile (em português, Coma-os e sorria). O álbum seguinte do Van Halen, OU812 (1987), supostamente também seria uma réplica ao título, visto que pode ser lido como \"Oh you ate one too\" (em português, Oh você comeu um também).\n[…]\nAlex Van Halen – bateria, percussão (1974–2020)\n[…]\nWolfgang Van Halen – baixo, backing vocals (2006–2020)\n[…]\nVan Halen (1978)\n[…]\nVan Halen II (1979)\n[…]\nVan Halen III (1998)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Freddie Mercury",
      "descricao": "Cantor britânico, vocalista do Queen, nascido Farrokh Bulsara"
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1991, o vocalista Freddie Mercury morreu de complicações de que doença?",
    "resposta": "AIDS",
    "fonte": [
      "https://en.wikipedia.org/wiki/Freddie_Mercury"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Freddie_Mercury",
        "situacao": "ok",
        "texto": "Freddie Mercury (born Farrokh Bulsara; 5 September 1946 – 24 November 1991) was a British singer and songwriter who achieved global fame as the lead vocalist and pianist of the rock band Queen. Regarded as one of the greatest singers in the history of rock music, he is known for his flamboyant stage persona and four-octave vocal range. Mercury defied the conventions of a rock frontman with his the\n[…]\nMercury was diagnosed with AIDS in 1987. He continued to record with Queen, and was posthumously featured on their final album, Made in Heaven (1995). In 1991, the day after publicly announcing his diagnosis, he died from complications of the disease at the age of 45. In 1992, a concert in tribute to him was held at Wembley Stadium, in benefit of AIDS awareness.\n[…]\nMercury exhibited HIV/AIDS symptoms as early as 1982.\n[…]\nAs the first major rock star to die of AIDS-related complications, Mercury's death represented an important event in the history of the disease. In April 1992, the remaining members of Queen founded The Mercury Phoenix Trust and organised The Freddie Mercury Tribute Concert for AIDS Awareness, to celebrate the life and legacy of Mercury and raise money for AIDS research, which took place on 20 April 1992. The Mercury Phoenix Trust has since raised millions of pounds for various AIDS charities.\n[…]\nThe documentary Freddie Mercury - The Final Act aired on BBC Two in 2021 and The CW in the US in April 2022. It covered Mercury's last days, how his bandmates and friends put together the tribute concert at Wembley, and interviewed medical professionals, people who tested HIV positive, and others who knew someone who died of AIDS. At the 50th International Emmy Awards in 2022, it won the International Emmy Award for Best Arts Programming.\n[…]\nFreddie Mercury discography at Discogs\n[…]\nFreddie Mercury at AllMusic\n[…]\nFreddie Mercury at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Freddie_Mercury",
        "situacao": "ok",
        "texto": "Farrokh Bulsara (Cidade de Pedra, 5 de setembro de 1946 – Londres, 24 de novembro de 1991), mais conhecido pelo nome artístico Freddie Mercury, foi um cantor, pianista e compositor britânico, conhecido pelo seu trabalho com a banda britânica de rock Queen, que integrou como vocalista de 1970 até o ano de sua morte, 1991. É considerado como um dos maiores cantores de todos os tempos.\n[…]\nMercury morreu de broncopneumonia, acarretada pela AIDS, em 1991, um dia depois de ter assumido a doença publicamente.\n[…]\nPouco tempo depois, o cantor se envolveu com a atriz austríaca Barbara Valentin, que inclusive foi uma das figurantes no videoclipe da canção \"It's a Hard Life\", e em 1985 iniciou outro sério romance com o cabeleireiro Jim Hutton, com quem Freddie viveu até o fim de sua vida; Hutton não deixou Mercury durante sua doença e estava ao lado dele na cama quando o cantor morreu. Jim morreu vítima de câncer em 2010.\n[…]\nEm seus últimos dias, Freddie perdeu a visão e não conseguia sair da cama, por isso decidiu parar de tomar sua medicação em 10 de novembro de 1991, e passou a esperar pela morte. Em 22 de novembro, Freddie chamou o empresário do Queen, Jim Beach, e pediu que ele fizesse um comunicado à imprensa para divulgar sua doença, que foi lançado no dia seguinte. Cerca de vinte e quatro horas após o comunicado ser feito, durante a noite, Mercury morreu de broncopneumonia, acarretada pela AIDS.\n[…]\nEm 1987, Freddie descobriu ser portador do vírus da AIDS, e sua saúde física se deteriorou rapidamente, por isso o Queen se aposentou dos palcos, sendo que o concerto final da Magic Tour, em Knebworth, no dia 9 de agosto de 1986, foi o último momento de Freddie no palco.\n[…]\nEm celebração dos sessenta e cinco anos de Mercury, o Google o homenageou com seu logotipo em sua página online de pesquisas, que por algumas semanas mostrava uma animação de Freddie cantando \"Don't Stop Me Now\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Freddie Mercury",
      "descricao": "Cantor britânico, vocalista do Queen, nascido Farrokh Bulsara"
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Freddie Mercury nasceu em que ilha africana do Oceano Índico, hoje parte da Tanzânia?",
    "resposta": "Zanzibar",
    "fonte": [
      "https://en.wikipedia.org/wiki/Freddie_Mercury"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Freddie_Mercury",
        "situacao": "ok",
        "texto": "Freddie Mercury (born Farrokh Bulsara; 5 September 1946 – 24 November 1991) was a British singer and songwriter who achieved global fame as the lead vocalist and pianist of the rock band Queen. Regarded as one of the greatest singers in the history of rock music, he is known for his flamboyant stage persona and four-octave vocal range. Mercury defied the conventions of a rock frontman with his the\n[…]\nMercury was born Farrokh Bulsara in Stone Town in the British protectorate of Zanzibar (now part of Tanzania), in East Africa on 5 September 1946. He was born with four extra incisors, to which some have attributed his enhanced vocal range. His parents, Bomi and Jer Bulsara, were Indian Gujarati Parsi, from western India. He had a younger sister, Kashmira (b. 1952).\n[…]\nThe family had moved to Zanzibar so that Bomi could continue his job as a cashier at the British Colonial Office. As Parsis, the Bulsaras practised Zoroastrianism. As Zanzibar was a British protectorate until 1963, Mercury was born a British subject, and on 2 June 1969 was registered a citizen of the United Kingdom and Colonies after the family had emigrated to England.\n[…]\nA friend recalls that he had \"an uncanny ability to listen to the radio and replay what he heard on piano\". It was also at St. Peter's where he began to call himself \"Freddie\". In February 1963, he moved back to Zanzibar where he joined his parents at their flat.\n[…]\nIn the spring of 1964, Mercury and his family fled to England from Zanzibar to escape the violence of the revolution against the Sultan of Zanzibar and his mainly Arab government, in which thousands of ethnic Arabs and Indians were killed. They moved to 19 Hamilton Close, Feltham, Middlesex, a town 13 miles (21 km) west of central London. The Bulsaras briefly relocated to 122 Hamilton Road, before settling into a small house at 22 Gladstone Avenue in late October.\n[…]\nFreddie Mercury at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Freddie_Mercury",
        "situacao": "ok",
        "texto": "Farrokh Bulsara (Cidade de Pedra, 5 de setembro de 1946 – Londres, 24 de novembro de 1991), mais conhecido pelo nome artístico Freddie Mercury, foi um cantor, pianista e compositor britânico, conhecido pelo seu trabalho com a banda britânica de rock Queen, que integrou como vocalista de 1970 até o ano de sua morte, 1991. É considerado como um dos maiores cantores de todos os tempos.\n[…]\nFreddie Mercury, com seu verdadeiro nome Farrokh Bulsara, nasceu na colônia britânica Cidade de Pedra, em Zanzibar (hoje parte da Tanzânia), primeiro filho de Bomi e Jer Bulsara, parsis zoroastrianos de Guzerate, na Índia. A família Bulsara se mudou da Índia para Zanzibar para que Bomi pudesse manter seu emprego no Banco Colonial Inglês, e lá o casal também teve sua segunda filha, Kashmira.\n[…]\nQuando Freddie tinha dezessete anos, a família Bulsara, assustada com a Revolução Civil de Zanzibar de 1964, mudou-se para a capital inglesa, Londres, onde ele passou a estudar arte na Escola Politécnica Isleworth, posteriormente ganhando seu diploma como designer gráfico através da Ealing Art College.\n[…]\nEm 2013, o epíteto genérico da espécie de anfíbio indiana Mercurana myristicapalustris foi nomeado em sua homenagem, por ter passado a maior parte de sua infância no local onde é encontrada, Panchagni, no norte dos Gates Ocidentais. A libélula brasileira da espécie Heteragrion freddiemercuryi, também descoberta em 2013 recebeu, igualmente, seu nome científico em homenagem ao cantor, devido ao fato de seu descobridor ser um grande fã da banda Queen.\n[…]\nEm setembro de 2012, foi lançado em DVD e Blu-ray pela Eagle Rock Entertainment, o documentário Freddie Mercury: The Great Pretender, exibido no mesmo ano pela rede britânica BBC One, e vencedor de um Emmy Internacional de melhor programa artístico.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Ritchie Valens",
      "descricao": "Cantor americano de rock, intérprete de La Bamba, morto em 1959"
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que tragédia de 1959 une os destinos de Buddy Holly e Ritchie Valens, o cantor de La Bamba?",
    "resposta": "Morreram na mesma queda de avião",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Day_the_Music_Died",
      "https://en.wikipedia.org/wiki/Ritchie_Valens"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Day_the_Music_Died",
        "situacao": "ok",
        "texto": "On February 3, 1959, American rock and roll musicians Buddy Holly, Ritchie Valens, and \"The Big Bopper\" J. P. Richardson were killed in a plane crash near Clear Lake, Iowa, together with pilot Roger Peterson. The event later became known as \"The Day the Music Died\" after singer-songwriter Don McLean referred to it as such in his 1971 song \"American Pie\".\n[…]\nRegarding the original tour schedule and distances, Mueller called the order they followed \"an incredibly grueling tour\". In 2008, Tommy Allsup joined Mueller (as Holly), Ray Anthony (as Ritchie Valens) and J. P. Richardson, Jr. (as his father).\n[…]\nwas among the participating artists, and Bob Hale was the master of ceremonies, as he was at the 1959 concert. After the death of Richardson's son in August 2013, the Big Bopper was portrayed by Linwood Sasser. On February 3, 2021, McLean performed at the Surf Ballroom to kick off his American Pie 50th Anniversary tour on the first night of the Winter Dance Party tribute. The recreation and live show is endorsed by the estates of Buddy Holly, Ritchie Valens, and Richardson.\n[…]\nRichardson (son of the singer) on a 1954 Chevrolet Bel Air, Connie Alvarez and Irma Padilla (sisters of Valens) on a 1980 Ford Mustang, and the parents of Roger Peterson together with his re-married widow DeAnn Johnson. The ceremony also included the renaming of a road originating near the Surf Ballroom to \"Buddy Holly Place\", as well as the turn-over of Richardson's watch to his son.\n[…]\nThe accident closes the 1978 biographical film The Buddy Holly Story starring Gary Busey; the film ends as the Clear Lake concert concludes, and a freeze-frame shot is followed with a caption revealing their deaths later that night. The run-up to the accident and its aftermath are depicted in the 1987 Valens biopic La Bamba.\n[…]\n1959: Buddy Holly killed in air crash"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Ritchie_Valens",
        "situacao": "ok",
        "texto": "Richard Steven Valenzuela (May 13, 1941 – February 3, 1959), better known by his stage name Ritchie Valens, was an American guitarist, singer, and songwriter. A rock and roll pioneer and a forefather of the Chicano rock movement, Valens died in a plane crash just eight months after his breakthrough.\n[…]\nOn February 3, 1959, on what has become known as \"The Day the Music Died\", Valens died in a plane crash in Iowa, an accident that also claimed the lives of fellow musicians Buddy Holly and J. P. \"The Big Bopper\" Richardson, as well as pilot Roger Peterson. Valens was 17 years old at the time of his death. His eponymous debut album was released nine days later and his second album Ritchie was released later that year in October.\n[…]\nValenzuela also attended San Fernando High School.\n[…]\nValens was one of the five acts billed for the Winter Dance Party tour, performing with Buddy Holly, \"The Big Bopper\" J. P. Richardson, Dion and the Belmonts, and Frankie Sardo beginning on January 23, 1959, in Milwaukee, Wisconsin. The tour was plagued by subzero temperatures and numerous logistical problems. The unheated tour buses twice broke down in freezing weather, with Valens and Richardson experiencing flu-like symptoms throughout the tour.\n[…]\nValens was portrayed by Gilbert Melgar in the final scene of the 1978 film The Buddy Holly Story.\n[…]\nOn February 2, 2009, Surf Ballroom held a 50th anniversary honoring the last concert of Buddy Holly, J.P. \"The Big Bopper\" Richardson, and Valens. The event lasted one week and had performances that honored the memories of the three men. Family members and friends of the stars made appearances.\n[…]\nRitchie Valens at IMDb\n[…]\nOfficial Ritchie Valens webpage\n[…]\n\"Ritchie Valens\". Rock and Roll Hall of Fame.\n[…]\nRAB Hall of Fame: Ritchie Valens Archived May 9, 2017, at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/The_Day_the_Music_Died",
        "situacao": "ok",
        "texto": "The Day the Music Died (pt: O Dia em Que a Música Morreu) é uma designação usada para referir o acidente aéreo ocorrido nos Estados Unidos, no dia 3 de fevereiro de 1959, que resultou na morte dos músicos Buddy Holly, Ritchie Valens e The Big Bopper, além do piloto Roger Peterson.\n[…]\nEm 3 de fevereiro de 1959, um avião monomotor modelo Beechcraft Bonanza B35 caiu próximo de Clear Lake, Iowa, matando os músicos norte-americanos de rock and roll Buddy Holly, aos 22 anos, Ritchie Valens, com 17 anos,  e J. P. \"The Big Bopper\" Richardson, que tinha 28 anos, assim como o piloto Roger Peterson, de 21 anos. Este dia seria definido posteriormente por Don McLean, em sua canção American Pie, como \"o dia em que a música morreu\".\n[…]\nRitchie Valens, que nunca viajara de avião antes, pediu pelo lugar de Tommy Allsup, que respondeu que isso seria decidido em um jogo de cara ou coroa. Bob Hale, radialista da KRIB-AM, estava trabalhando no concerto como DJ naquela noite, e jogou a moeda pouco antes dos músicos partirem para o aeroporto. Valens venceu, ganhando o assento na aeronave.\n[…]\nOs corpos de Holly e Valens caíram próximos ao avião, Richardson foi arremessado através da cerca e dentro da plantação de milho do vizinho de Juhl, Oscar Moffett, enquanto Peterson ficou preso à cabine. Carroll Anderson, o gerente do Surf Ballroom que levara os músicos ao aeroporto da cidade vizinha e presenciara a decolagem do avião, foi o primeiro a identificar as vítimas.\n[…]\nAutópsias posteriores indicaram que todos os quatro morreram instantaneamente com o impacto. O laudo do legista detalhou os ferimentos múltiplos sofridos por Holly, demonstrando como ele morreu na queda:",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Clube dos 27",
      "descricao": "Nome popular para o grupo de músicos famosos que morreram aos 27 anos"
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Jimi Hendrix, Janis Joplin, Jim Morrison, Kurt Cobain e Amy Winehouse formam um clube triste. O que eles têm em comum?",
    "resposta": "Morreram aos 27 anos",
    "fonte": [
      "https://en.wikipedia.org/wiki/27_Club"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/27_Club",
        "situacao": "ok",
        "texto": "The 27 Club is an informal list consisting mostly of popular musicians who died at age 27. As a pop-cultural phenomenon, it is closely linked to the urban myth that musicians' deaths are unusually common at 27. Although this claim has been refuted by scientific research, it remains a common cultural conception that the phenomenon exists, with many celebrities who die at 27 noted for their high-ris\n[…]\nThe original basis for the notion was a cluster of prominent musicians' deaths at the age of 27 between 1969 and 1971, including Brian Jones, Jimi Hendrix, Janis Joplin, and Jim Morrison; but only after the death of Kurt Cobain in 1994 was the notion of a \"club\" established, and the death of Amy Winehouse in 2011 enhanced its prominence. Different write-ups include a number of other musicians and sometimes other celebrities.\n[…]\nBrian Jones, Jimi Hendrix, Janis Joplin, and Jim Morrison all died at the age of 27 between 1969 and 1971. At the time, the coincidence gave rise to some comment, but, according to Charles R. Cross, a biographer of Hendrix and Kurt Cobain, \"it wasn't until Kurt Cobain took his own life in 1994 that the idea of the 27 Club arrived in the popular zeitgeist.\" Cross claims that the \"launch of the Club concept\" can be traced to two factors.\n[…]\nJPEGMafia's debut studio album Black Ben Carson (2016) includes a song titled \"The 27 Club\", which the song refers to the club. He references members Jimi Hendrix, Janis Joplin, and Kurt Cobain.\n[…]\n27 Club graffiti in Tel Aviv\n[…]\nSounes, Howard (2013). 27: A History of the 27 Club through the Lives of Brian Jones, Jimi Hendrix, Janis Joplin, Jim Morrison, Kurt Cobain, and Amy Winehouse. Da Capo Press. ISBN 978-0-306-82168-4. pp. 304, 306.\n[…]\nDunning, Brian (October 24, 2023). \"Skeptoid #907: The Science of the 27 Club\". Skeptoid."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Clube_dos_27",
        "situacao": "ok",
        "texto": "O Clube dos 27 é um termo que se refere à crença de que um número anormalmente alto de músicos da música popular morreram aos 27 anos.\n[…]\nMúsicos notórios por fazerem parte do Clube dos 27 são: Robert Leroy Johnson, Brian Jones (The Rolling Stones), Jimi Hendrix (The Jimi Hendrix Experience), Janis Joplin (Big Brother and the Holding Company), Jim Morrison (The Doors), Pete Ham (Badfinger), Jean-Michel Basquiat, Kurt Cobain (Nirvana) e Amy Winehouse.\n[…]\nBrian Jones, Jimi Hendrix, Janis Joplin, e Jim Morrison morreram todos aos 27 anos entre 1969 e 1971. Na altura, a coincidência deu crescimento a algum comentário, mas, segundo o biógrafo de Hendrix e Kurt Cobain, Charles R. Cross, \"Não foi até Kurt Cobain tirar a própria vida em 1994 que a ideia do Clube dos 27 chegou ao zeitgeist popular\".\n[…]\nA canção de Daughtry \"Love Live Rock & Roll\" do seu álbum de 2013 Baptized faz uma referência ao clube com a letra \"têm para sempre 27 – Jimi, Janis, Brian Jones\".\n[…]\nO rapper Watsky faz referência ao clube na sua canção de 2014 \"All You Can Do\" com a letra, \"Eu tentei juntar-me ao Clube dos 27; eles expulsaram-me.\" A canção faz também referência aos membros do clube; Amy Winehouse, Janis Joplin, Jimi Hendrix, Kurt Cobain, Jim Morrison, e Brian Jones.\n[…]\nO cartoonista Luke McGarry criou a banda desenhada O Clube dos 27 para a MAD Magazine, estreando em 2018. A banda desenhada apresenta Jimi Hendrix, Janis Joplin, Brian Jones, Robert Johnson, Amy Winehouse, Jim Morrison, e Kurt Cobain como estrelas pop paranormais a descenderem até ao céu do Rock & Roll para salvar o planeta com a ajuda do médium mortal Keith Richards\n[…]\n27 club Movie.com",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Genesis",
      "descricao": "Banda britânica de rock progressivo e pop formada em 1967"
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Antes de fazerem sucesso solo, Peter Gabriel e Phil Collins foram vocalistas de que mesma banda britânica?",
    "resposta": "Genesis",
    "fonte": [
      "https://en.wikipedia.org/wiki/Genesis_(band)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Genesis_(band)",
        "situacao": "ok",
        "texto": "Genesis were an English rock band formed in 1967 at Charterhouse School in Godalming, Surrey. The band's longest-lasting and most commercially successful line-up consisted of keyboardist Tony Banks, bassist/guitarist Mike Rutherford and drummer/singer Phil Collins. In the 1970s, during which the band also included singer Peter Gabriel and guitarist Steve Hackett, Genesis were among the pioneers of\n[…]\nWith time to spare before working on a new Genesis album, Collins rejoined Brand X for the album Product, played the drums on former bandmate Peter Gabriel's third album and started writing his own first solo album, Face Value, at his home in Shalford, Surrey.\n[…]\nThe band's autobiography Genesis Chapter & Verse was published in 2007 as a full colour 359 page hardback book. The writing credits were Tony Banks, Phil Collins, Peter Gabriel, Steve Hackett and Mike Rutherford, edited by Philip Dodd.\n[…]\nIn 2014, Gabriel, Banks, Rutherford, Collins and Hackett reunited for Genesis: Together and Apart, a BBC documentary about the band's history and the various solo albums the members have released over the course of their careers. Although he participated in the documentary and promoted it, Hackett was very critical following its broadcast, saying that it was biased and did not give him editorial involvement, adding that it ignored his solo work despite his speaking at length about it.\n[…]\nThe Daily Telegraph chief rock music critic Neil McCormick said that Genesis were \"a daring and groundbreaking band (certainly in their early career)\", described Collins as \"an outstanding drummer\" and stated that \"after Gabriel left, he stepped up to prove himself a charismatic frontman with a very distinctive vocal character\".\n[…]\nBanks, Tony; Collins, Phil; Gabriel, Peter; Hackett, Steve; and Rutherford, Mike; edited by Dodd, Philip (2007). Genesis Chapter & Verse, Weidenfeld & Nicolson. ISBN 978 0 297 844341."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Genesis",
        "situacao": "ok",
        "texto": "Genesis foi uma banda de rock inglesa formada na Charterhouse School, em Godalming, Surrey, em 1967. A formação mais duradoura e de maior sucesso comercial da banda era composta pelo tecladista Tony Banks, o baixista/guitarrista Mike Rutherford e o baterista/vocalista Phil Collins. Na década de 1970, período em que a banda também contou com o vocalista Peter Gabriel e o guitarrista Steve Hackett, \n[…]\nApós a turnê Lamb, Hackett gravou seu primeiro álbum solo, Voyage of the Acolyte, pois não tinha certeza se o Genesis sobreviveria após a saída de Gabriel. Ele se reuniu com os membros restantes do grupo em Londres, em julho de 1975. Durante esse período, Collins começou a tocar bateria com a banda instrumental de jazz rock Brand X, da qual seria um membro semi-regular sempre que o Genesis estivesse em hiato pelos próximos cinco anos.\n[…]\nCom tempo livre antes de trabalhar em um novo álbum do Genesis, Collins voltou ao Brand X para o álbum Product, tocou bateria no terceiro álbum de seu ex-companheiro de banda Peter Gabriel e começou a escrever seu primeiro álbum solo, Face Value, em sua casa em Shalford, Surrey.\n[…]\nA autobiografia da banda, Genesis Chapter & Verse, foi publicada em 2007 como um livro de capa dura totalmente colorido com 359 páginas. Os créditos de escrita foram Tony Banks, Phil Collins, Peter Gabriel, Steve Hackett e Mike Rutherford, editado por Philip Dodd.\n[…]\nEm 2014, Gabriel, Banks, Rutherford, Collins e Hackett reuniram-se para Genesis: Together and Apart, um documentário da BBC sobre a história da banda e os vários álbuns solo que os membros lançaram ao longo de suas carreiras. Embora tenha participado do documentário e o promovido, Hackett foi muito crítico após sua exibição, dizendo que era tendencioso e não lhe deu participação editorial, acrescentando que ignorou seu trabalho solo, apesar de ele ter falado longamente sobre ele.\n[…]\nGenesis (1983)\n[…]\nGenesis no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Foo Fighters",
      "descricao": "Banda americana de rock formada em 1994 em Seattle"
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que músico liga o Nirvana, onde era baterista, ao Foo Fighters, que fundou como vocalista?",
    "resposta": "Dave Grohl",
    "fonte": [
      "https://en.wikipedia.org/wiki/Foo_Fighters"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Foo_Fighters",
        "situacao": "ok",
        "texto": "The Foo Fighters are an American rock band formed in Seattle in 1994. Initially founded as a one-man project by former Nirvana drummer Dave Grohl, the band comprises vocalist/guitarist Grohl, bassist Nate Mendel, guitarists Pat Smear and Chris Shiflett, keyboardist Rami Jaffee and drummer Ilan Rubin. Guitarist Franz Stahl and drummers William Goldsmith, Taylor Hawkins, and Josh Freese are former m\n[…]\nIn 1990, Dave Grohl joined the grunge band Nirvana as the drummer. During tours, he took a guitar with him and wrote songs, but was too intimidated to share them with the band. He was \"in awe\" of the songs written by Nirvana's frontman, Kurt Cobain. Grohl occasionally booked studio time to record demos and covers, and released an album of demos, Pocketwatch, under the pseudonym Late! in 1992.\n[…]\nDuring September and October 2005, the band toured with Weezer on what was billed as the Foozer Tour. The Foo Fighters played a headline performance at the 2005 Reading and Leeds Festivals. On June 17, 2006, the Foo Fighters performed their largest non-festival headlining concert to date at London's Hyde Park. Motörhead's Lemmy joined the band on stage to sing \"Shake Your Blood\" from Dave Grohl's Probot album.\n[…]\nDave Grohl's injury initially led to speculation that the band would drop out of the event but they later confirmed they would perform; however, the injury did prevent them from headlining the 2015 Glastonbury Festival. The band performed for 48,000 people with Grohl in a custom-built moving throne which he claimed to have designed himself while on painkillers.\n[…]\nThe Foo Fighters has been described as alternative rock, post-grunge, hard rock, power pop and pop rock, while their early work has been characterized as grunge. They were initially compared to Grohl's previous group, Nirvana.\n[…]\nFoo Fighters discography at Discogs\n[…]\nFoo Fighters discography at MusicBrainz\n[…]\nFoo Fighters at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Foo_Fighters",
        "situacao": "ok",
        "texto": "Foo Fighters é uma banda americana de rock formada em 1994, em Seattle, Washington. A banda foi fundada pelo ex-baterista do Nirvana, Dave Grohl, como um projeto de um homem só, após a dissolução do Nirvana, devido ao suicídio de Kurt Cobain. O projeto recebeu o nome de Foo Fighter, um apelido cunhado pelos pilotos de aviões estadunidenses para OVNIs e outros fenômenos aéreos. Ao longo de sua carr\n[…]\nAntes do lançamento do álbum de estreia, em 1995, Foo Fighters, que apresentava Dave Grohl como o único membro oficial, recrutou o baixista Nate Mendel e o baterista William Goldsmith, ambos ex-Sunny Day Real Estate, e também o guitarrista de turnê do Nirvana, Pat Smear. A banda começou com apresentações em Portland, Oregon.\n[…]\nEm 1990, Dave Grohl entrou para a banda grunge Nirvana como baterista. Nesse período, ele levava uma guitarra com ele e compunha músicas, mas ficava muito intimidado para compartilhá-las com a banda; ele era \"incrédulo\" com a qualidade com as músicas escritas pelo vocalista Kurt Cobain. Grohl as vezes reservava tempo de estúdio para gravar demos e covers, lançando um álbum de demos, Pocketwatch, sob o pseudônimo \"Late!\" em 1992.\n[…]\nEm 23 de novembro de 2015, o Foo Fighters lançou um novo EP, intitulado Saint Cecilia. Este EP homenageia as vitímas dos Atentados de 13 de novembro, na cidade de Paris, principalmente na casa de shows Bataclan, onde tocava a banda Eagles of Death Metal, com a qual Dave Grohl, vocalista da banda tem relação. Tal EP pode ser baixado de graça.\n[…]\nDigerindo a morte de Hawkins e de sua mãe, Virginia, o vocalista Dave Grohl reuniu a banda para gravar But Here We Are, com sonoridade inspirada no álbum original e letras refletindo essas perdas. Produzido por Greg Kurstin e com Grohl na bateria, o disco foi lançado em junho de 2023, tendo Josh Freese sido anunciado como baterista um mês antes.\n[…]\nFoo Fighters no Myspace\n[…]\nFoo Fighters no Instagram",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Waterloo",
      "descricao": "Canção do ABBA que venceu o Festival Eurovisão da Canção de 1974"
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que nome é comum à derrota final de Napoleão e à canção com que o ABBA venceu o Eurovision de 1974?",
    "resposta": "Waterloo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Waterloo_(ABBA_song)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Waterloo_(ABBA_song)",
        "situacao": "ok",
        "texto": "\"Waterloo\" is a song recorded by Swedish pop music group ABBA, with music composed by Benny Andersson and Björn Ulvaeus and lyrics written by Stikkan Anderson. It is the first single of the group's second album of the same name, and their first under the Atlantic label in the United States. This was also the first single to be credited to the group performing under the name ABBA. The title and lyr\n[…]\nIn 1974, after winning the 14th edition of the Melodifestivalen, \"Waterloo\" represented Sweden in the 19th edition of the Eurovision Song Contest held in Brighton, England, winning the contest and beginning ABBA's path to worldwide fame. It topped the charts in several countries, and reached the top 10 in the United States.\n[…]\nOn 9 February 1974, ABBA competed with the Swedish-language version of \"Waterloo\" in the Melodifestivalen final. The song won the competition with 302 points, beating the 211 points of the runner-up. As that Melodifestivalen was organised by Sveriges Radio (SR) to select its song and performer for the 19th edition of the Eurovision Song Contest, the song became the Swedish entrant, and ABBA the performers, for Eurovision.\n[…]\nOn 6 April 1974, the Eurovision Song Contest was held at The Dome in Brighton hosted by the British Broadcasting Corporation (BBC), and broadcast live throughout the continent. ABBA performed the English-language version of \"Waterloo\" eighth on the evening, following \"Generacija '42\" by Korni Grupa from Yugoslavia and preceding \"Bye Bye I Love You\" by Ireen Sheer from Luxembourg.\n[…]\nOn 11 July 2023, at the celebrations for the 175th anniversary of London Waterloo station, where ABBA were photographed following their win at the 1974 Eurovision Song Contest, a choir performed Waterloo as part of a selection of songs.\n[…]\nHarry Witchel, physiologist and music expert at the University of Bristol, named \"Waterloo\" the quintessential Eurovision song."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Waterloo_%28can%C3%A7%C3%A3o%29",
        "situacao": "ok",
        "texto": "\"Waterloo\" é uma canção do grupo ABBA lançada no álbum Waterloo em 4 de março de 1974 na Suécia. A canção venceu o Festival Eurovisão da Canção 1974, sendo a primeira vitória da Suécia com 24 pontos. A letra é de autoria de Stikkan Anderson, a música é de Benny Andersson e Björn Ulvaeus e foi orquestrada na noite do festival  por Sven-Olof Walldoff.\n[…]\n\"Waterloo\" foi o primeiro sucesso mundial do ABBA e em 2005 eleita a melhor canção dos 50 anos da história do Festival Eurovisão.\n[…]\n\"Waterloo\" foi originalmente escrita como uma canção para o Festival Eurovisão da Canção de 1974, depois que o grupo terminou em terceiro lugar com \"Ring Ring\" no ano anterior. A letra da canção \"Waterloo\" é sobre uma mulher que se rende a um homem e promete amá-lo, fazendo-e  referência à Batalha de Waterloo ocorrida em 1815 e onde Napoleão foi derrotado e se viu a obrigado a render-se e exilar-se na Ilha de Santa Helena.\n[…]\n\"Waterloo\" foi originalmente escrita como uma música rock e batidas simultâneas de jazz (até então, incomum para uma música do ABBA), o que foi mais tarde descartado.\n[…]\nEm 1994, \"Waterloo\" (juntamente com vários outros sucessos ABBA) foi incluída na trilha sonora do filme O Casamento de Muriel. Foi relançada em 2004 para comemorar seu 30º aniversário, atingindo a 20ª posição nas paradas do Reino Unido. Assim como, em 22 de outubro de 2005, durante a celebração dos 50 anos do Festival Eurovisão da Canção, \"Waterloo\" foi escolhida como a melhor canção na história da competição.\n[…]\n\"Waterloo\" (versão em francês) - gravado em 18 de abril de 1974 em Paris, França.\n[…]\nO videoclipe de \"Waterloo\" foi gravado em 1974 (na mesma época de \"Ring Ring\"), nos estúdios da Sveriges Television. O ABBA aparece dublando a canção, e usa os trajes usados no dia em que venceram o Festival Eurovisão da Canção. Foi dirigido por Lasse Hallström.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Lisa Marie Presley",
      "descricao": "Cantora americana, filha única de Elvis Presley"
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Ao se casar com Lisa Marie Presley, em 1994, Michael Jackson passou a ter que parentesco com Elvis Presley?",
    "resposta": "Genro",
    "fonte": [
      "https://en.wikipedia.org/wiki/Lisa_Marie_Presley"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lisa_Marie_Presley",
        "situacao": "ok",
        "texto": "Lisa Marie Presley (February 1, 1968 – January 12, 2023) was an American singer-songwriter. The daughter of singer and actor Elvis Presley and actress Priscilla Presley, she became the sole heir to her father's estate following the deaths of her grandfather and great-grandmother. She was also known for her marriage to Michael Jackson, which lasted from 1994 to 1996.\n[…]\nLisa Marie Presley was born on February 1, 1968, at Baptist Memorial Hospital-Memphis in Memphis, Tennessee, the only child of Elvis and Priscilla Presley. She was born nine months to the day after her parents' wedding.\n[…]\nWhen Lisa Marie was four years old, her parents separated, and their divorce was finalized in October 1973. She lived with her mother in Los Angeles and frequently stayed with her father at Graceland in Memphis. When Elvis died in August 1977, nine-year-old Lisa Marie became a joint heir to his estate along with her 61-year-old grandfather, Vernon Presley, and her 87-year-old great-grandmother Minnie Mae (Hood) Presley. Through Vernon, she was a descendant of the Harrison family of Virginia.\n[…]\nOn the CBS primetime special The Presleys: Elvis, Lisa Marie and Riley, which aired on October 8, 2024, Presley's daughter Riley told Oprah Winfrey that Presley's final years had been marked by profound grief, with the loss of her son Benjamin leaving her without the will to keep living.\n[…]\nAfter Elvis's death at Graceland on August 16, 1977, his will appointed his father, Vernon, as executor and trustee. The beneficiaries of the trust were Vernon, Elvis's grandmother Minnie Mae, and Lisa Marie, whose inheritance was to be held in trust until her 25th birthday. After Vernon's death in 1979, Elvis's former wife Priscilla was named as one of three trustees; the others were the National Bank of Commerce in Memphis and Joseph Hanks, the Presleys' accountant."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lisa_Marie_Presley",
        "situacao": "ok",
        "texto": "Lisa Marie Presley (Memphis, 1 de fevereiro de 1968 – Calabasas, 12 de janeiro de 2023) foi uma cantora, compositora, instrumentista e filantropa norte-americana. Era a única filha do cantor Elvis Presley e mãe da atriz Riley Keough.\n[…]\nLisa Marie Presley nasceu em 1º de fevereiro de 1968 no Baptist Memorial Hospital-Memphis em Memphis, Tennessee, sendo filha única do casamento de  Elvis e Priscilla Presley. Ela teve que crescer e formar sua personalidade no meio desse verdadeiro \"furacão\". Era às vezes mimada pelo pai e muitas vezes repreendida pela mãe.\n[…]\nLisa Marie passou por quatro casamentos. O primeiro deles ocorreu em 1988, com o músico Danny Keough. Teve com ele dois filhos: a modelo Danielle Riley Keough, nascida em 29 de maio e Benjamin Storm Presley Keough, nascido em 21 de outubro de 1992, em 12 de julho de 2020 Benjamin cometeu suicidio. O casamento durou pouco mais de seis anos, terminando em 1994.\n[…]\nLogo depois, no dia 26 de maio de 1994, após vinte dias de seu divórcio sair, Lisa Marie casou-se com o cantor Michael Jackson na República Dominicana. A cerimônia durou quinze minutos e então Lisa e Michael, que já se conheciam há alguns anos, selaram o matrimônio.\n[…]\nLisa e Michael se apresentaram como casal em setembro de 1994 no MTV Music Awards, quando os dois seguiram por uma passarela e logo depois se beijaram. O casamento durou 1 ano e 7 meses, com a separação acontecendo em dezembro de 1995. Lisa Presley entrou com um pedido de divórcio no ano de 1996, alegando ser impossível a reconciliação do casal, sendo o divórcio oficializado em 20 de agosto de 1996.\n[…]\nElvis by the Presleys (com Priscilla Presley) (2005) (ISBN 0-307-23741-9)\n[…]\nLisa Marie Presley no Instagram",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "O Clube do Mickey",
      "descricao": "Programa infantil de variedades da Disney exibido de 1989 a 1994 com o título The All-New Mickey Mouse Club"
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Britney Spears, Christina Aguilera e Justin Timberlake trabalharam juntos ainda crianças em que programa de TV da Disney?",
    "resposta": "O Clube do Mickey",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_All-New_Mickey_Mouse_Club"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_All-New_Mickey_Mouse_Club",
        "situacao": "ok",
        "texto": "The Mickey Mouse Club is an American variety television show that aired intermittently from 1955 to 1996 and briefly returned to social media in 2017. Created by Walt Disney and produced by Walt Disney Productions, the program was first televised for four seasons, from 1955 to 1959, by ABC. This original run featured a regular, but ever-changing cast of mostly child, tween or teen performers.\n[…]\nReruns of the original The Mickey Mouse Club began airing on Disney Channel with its 1983 launch. While the show was popular with younger audiences, Disney Channel executives felt it had become dated over the years, particularly due it being aired in black-and-white. Their answer was to create a brand-new, rebooted version of the club, one targeted at contemporary audiences. The all-new \"club members\" wore Mouseketeer varsity jackets instead of \"Mickey's ears\"-shaped hats.\n[…]\nThis version of the series features a number of cast members who later established careers in the entertainment industry, including Ryan Gosling, Justin Timberlake, JC Chasez, Britney Spears, Christina Aguilera, Keri Russell, Deedee Magno, Rhona Bennett, Chase Hampton, and Nikki DeLoach.\n[…]\nThe series was produced by Disney Digital Network. No new episodes or music videos have been produced since 2018, as DDN had undergone financial difficulties and shut down the year after, effectively canceling Club Mickey Mouse.\n[…]\nNatasya left the show in 2018, and was replaced by Ellya. Charis and Dheena both left the show in 2020, and Disney Channel Asia subsequently cast two new Mouseketeers, Eric and Melynna, from an audition. Following the shutdown of the channel, season four of Club Mickey Mouse aired in 2021 exclusively on Disney+ Hotstar, instead, and SKTV Kids in 2023.\n[…]\nWalt Disney Treasures: The Mickey Mouse Club at UltimateDisney.com\n[…]\nMickey Mouse Club: Best of Britney, Justin & Christina at UltimateDisney.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mickey_Mouse_Club",
        "situacao": "ok",
        "texto": "The Mickey Mouse Club (br.: O Clube do Mickey) é um programa de televisão estadunidense surgido em 1955, produzido pela Walt Disney Productions e exibido pela rede ABC, apresentado por um elenco regular de crianças e adolescentes. O programa foi relançado e reformatado várias vezes. Essa foi a primeira produção da Walt Disney no segmento de séries de televisão. A outra era uma antologia de séries \n[…]\nWalt Disney usou essas séries para ajudarem a financiar e promover a construção do parque temático da Disneylândia. Ocupado com esse megaprojeto de construção, Disney passou o The Mickey Mouse Club para Bill Walsh, que criou e desenvolveu o formato. O resultado foi um programa variado para crianças, que reunia um tipo de noticiário, um desenho animado, esquetes, além de música e piadas.\n[…]\nEssa versão foi exibido no Brasil pela TV Tupi dentro do programa Clube do Capitão Aza, pelo nome de Clube do Mickey, com o patrocínio da Estrela. Após a falência da emissora em 1980, passou a ser exibido na TVS (SBT). O estúdio BKS era responsável pela dublagem brasileira do programa.\n[…]\nNotavelmente, os novos \"membros do clube\" usariam jaquetas do time do colégio Mouseketeer, mas sem as clássicas orelhas do Mickey Mouse.\n[…]\nEm 24 de abril de 1989, o Disney Channel lançou a nova versão do programa, chamado de The New Mickey Mouse Club (mais conhecido como \"MMC\"), gravado com plateia nos estúdios da Disney-MGM (ás vezes no Walt Disney World Resort). Esta foi a primeira versão do clube a ter platéia no estúdio. A série trazia os Mousequeteiros cantando versões de músicas populares. Este se tornou um dos segmentos mais populares.\n[…]\nJustin Timberlake\n[…]\nCapas e artigos da Revista Clube do Mickey Mouse de Walt Disney/Revista de Walt Disney (Inverno de 1956-outubro de 1959)\n[…]\nThe Mickey Mouse Club no IMDb  (versão dos anos de 1950)\n[…]\nThe New Mickey Mouse Club no IMDb  (versão dos anos de 1970)\n[…]\nNew Mickey Mouse Club.com",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Bohemian Rhapsody",
      "descricao": "Canção do Queen composta por Freddie Mercury e lançada em 1975"
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que comédia de 1992 levou Bohemian Rhapsody de volta às paradas, com amigos balançando a cabeça dentro de um carro?",
    "resposta": "Quanto Mais Idiota Melhor (Wayne's World)",
    "fonte": [
      "https://en.wikipedia.org/wiki/Bohemian_Rhapsody"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bohemian_Rhapsody",
        "situacao": "ok",
        "texto": "\"Bohemian Rhapsody\" is a song by British rock band Queen from their fourth studio album, A Night at the Opera. The lead single from the album, it is a suite composed of five main elements: an introduction, a ballad, an opera, a hard rock segment, and a reflective coda. Released in 1975, it is one of the few progressive rock songs of the 1970s to reach a mainstream audience and is now regarded as t\n[…]\nIn the United States, the song peaked at number nine in 1976, but reached a new peak of number two after appearing in the 1992 film Wayne's World. In 2004, the song was inducted into the Grammy Hall of Fame. Following the release of the 2018 biopic Bohemian Rhapsody, it became the most streamed song from the 20th century. In 2021, it was certified diamond in the US for combined digital sales/streams equal to 10 million units.\n[…]\nThe narrator bids the world goodbye announcing he has \"got to go\" and prepares to \"face the truth\" admitting \"I don't want to die / I sometimes wish I'd never been born at all\". This is where the guitar solo enters.\n[…]\nThe Wayne's World video version of \"Bohemian Rhapsody\" won Queen its only MTV Video Music Award for \"Best Video from a Film\". When remaining members Brian May and Roger Taylor took the stage to accept the award, Brian May was overcome with emotion and said that \"Freddie would be tickled.\" In the final scene of the video, a pose of the band from the video from the original \"Bohemian Rhapsody\" clip morphs into an identically posed 1985 photo, first featured in the \"One Vision\" video.\n[…]\nIn the 2018 Queen biopic feature film Bohemian Rhapsody, Myers makes a cameo as a fictional record executive who pans the song and refuses to release it as a single, proclaiming that it is too long for radio and that it is not a song that \"teenagers can crank up the volume in their car and bang their heads to\", a reference to the aforementioned scene in Wayne's World."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bohemian_Rhapsody",
        "situacao": "ok",
        "texto": "\"Bohemian Rhapsody\" é uma canção composta em 1975 por Freddie Mercury, integrante da banda britânica Queen e incluída no seu álbum A Night at the Opera. Esta canção não possui refrão. Nela, Freddie Mercury, Roger Taylor e Brian May cantam respectivamente nas tessituras média, aguda e grave. May toca a guitarra, Taylor toca bateria, tímpano e gongo, e John Deacon toca o baixo elétrico.\n[…]\nNos Estados Unidos, o single foi um sucesso (apesar de numa escala menor do que no Reino Unido). O single original, lançado no início de 1976, alcançou a nona posição na Billboard Hot 100, enquanto que no relançamento em 1992 (programado para sair junto ao filme no qual aparecia, Wayne's World) alcançou a segunda posição.\n[…]\nO single também recebeu disco de ouro por vender mais de um milhão de cópias nos EUA. Com o público canadense o single se saiu melhor, alcançando a primeira posição nas paradas nacionais em 1 de maio de 1976.\n[…]\nApesar de ter se tornado uma das mais reverenciadas músicas na história da música popular, algumas reações críticas iniciais foram fracas. Mesmo assim, a música recebeu numerosos prêmios, e tem sido parodiada e interpretada por muitos artistas. Em 1977, apenas dois anos depois de seu lançamento, a British Phonographic Industry nomeou \"Bohemian Rhapsody\" como o melhor single britânico no período de 1952-1977.\n[…]\n\"Bohemian Rhapsody\" conseguiu sempre bons lugares nas paradas musicais. A canção atingiu a primeira posição da tabela musical britânica UK Singles Chart em 1975. No ano seguinte, alcançou a mesma posição em três países: Canadá, Nova Zelândia e Países Baixos, e se posicionou nas dez melhores colocações da tabela americana Billboard Hot 100. Em 1992, ano após a morte de Freddie Mercury, a música re-entrou na tabela dos Estados Unidos e alcançou uma melhor posição, a segunda.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Bohemian Rhapsody",
      "descricao": "Canção do Queen composta por Freddie Mercury e lançada em 1975"
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Na parte operística de Bohemian Rhapsody, que nome de cientista italiano é repetido várias vezes?",
    "resposta": "Galileu",
    "fonte": [
      "https://en.wikipedia.org/wiki/Bohemian_Rhapsody"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bohemian_Rhapsody",
        "situacao": "ok",
        "texto": "\"Bohemian Rhapsody\" is a song by British rock band Queen from their fourth studio album, A Night at the Opera. The lead single from the album, it is a suite composed of five main elements: an introduction, a ballad, an opera, a hard rock segment, and a reflective coda. Released in 1975, it is one of the few progressive rock songs of the 1970s to reach a mainstream audience and is now regarded as t\n[…]\n\"Bohemian Rhapsody\" was totally insane, but we enjoyed every minute of it. It was basically a joke, but a successful joke. [laughs] We had to record it in three separate units. We did the whole beginning bit, then the whole middle bit and then the whole end. It was complete madness. The middle part started off being just a couple of seconds, but Freddie kept coming in with more \"Galileos\" and we kept on adding to the opera section, and it just got bigger and bigger. We never stopped laughing ...\n[…]\nLyrical references in this passage include Scaramouche, the fandango, Galileo Galilei, Figaro, and Beelzebub, with cries of \"Bismillah! [Arabic: \"In the name of God!\"] We will not let you go!\", as rival factions fight over his soul, some wishing to \"let [him] go\" and \"spare him his life from this monstrosity\", with others sending him \"thunderbolts and lightning – very, very frightening [to him]\".\n[…]\nUsing the 24-track technology available at the time, the \"opera\" section took about three weeks to finish. Baker said, \"Every time Freddie came up with another Galileo, I would add another piece of tape to the reel.\" Baker recalls that they kept wearing out the tape, which meant having to do transfers.\n[…]\nSince 2012, May and Taylor have toured with former American Idol contestant Adam Lambert under the name Queen + Adam Lambert (following two one-off performances together in 2009 and 2011), with \"Bohemian Rhapsody\" regularly included at the end of their set.\n[…]\nList of Bohemian Rhapsody cover versions"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bohemian_Rhapsody",
        "situacao": "ok",
        "texto": "\"Bohemian Rhapsody\" é uma canção composta em 1975 por Freddie Mercury, integrante da banda britânica Queen e incluída no seu álbum A Night at the Opera. Esta canção não possui refrão. Nela, Freddie Mercury, Roger Taylor e Brian May cantam respectivamente nas tessituras média, aguda e grave. May toca a guitarra, Taylor toca bateria, tímpano e gongo, e John Deacon toca o baixo elétrico.\n[…]\nReferências líricas nesta passagem incluem Scaramouche, o fandango, Galileo Galilei, o Figaro, e Bismilá, enquanto facções rivais lutam pela alma do narrador. Peraino chamou a sequência tanto de \"um julgamento em quadrinhos\" e \"um rito de passagem... um coro acusa, outro defende, enquanto o herói se apresenta a si mesmo como pacífico e astuto.\" A introdução da música é lembrada em \"I'm just a poor boy, nobody loves me\".\n[…]\nA linha de Mercury \"Nothing really matters...\" aparece novamente, \"embalado por leves arpejos de piano, sugerindo tanto a resignação (tonalidades menores) quanto um novo sentido de liberdade no amplo leque vocal.\" Depois que a linha \"nothing really matters\" é repetida várias vezes, a música finalmente acaba em mi bemol maior. A última parte da letra, cantada calmamente, \"Any way the wind blows\" é seguida pela batida de um gongo, que marca o fim da música.\n[…]\nA música se tornou a número um do Natal de 1975 nas paradas do Reino Unido, mantendo a posição por nove semanas. \"Bohemian Rhapsody\" foi a primeira música a alcançar a primeira posição duas vezes com a mesma versão e também foi o único \"single\" a ter sido número um de Natal no Reino Unido duas vezes com a mesma versão. A segunda vez foi no seu relançamento (junto com \"These Are the Days of Our Lives\") em 1991, logo após a morte de Mercury, ficando no primeiro lugar por cinco semanas.\n[…]\nNa seção operística o cenário volta às posições do \"Queen II\", depois do que eles retornam ao palco durante a parte de rock.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Hallelujah",
      "descricao": "Canção de Leonard Cohen lançada em 1984"
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que filme de animação de 2001, da DreamWorks, ajudou a tornar mundialmente famosa a canção Hallelujah, de Leonard Cohen?",
    "resposta": "Shrek",
    "fonte": [
      "https://en.wikipedia.org/wiki/Hallelujah_(Leonard_Cohen_song)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hallelujah_(Leonard_Cohen_song)",
        "situacao": "ok",
        "texto": "\"Hallelujah\" is a song written by Canadian singer Leonard Cohen, originally released on his album Various Positions (1984). Achieving little initial success, the song found greater popular acclaim through a new version recorded by John Cale in 1991. Cale's version inspired a 1994 recording by Jeff Buckley which in 2004 was ranked number 259 on Rolling Stone's list of the 500 Greatest Songs of All \n[…]\nThe song achieved widespread popularity after Cale's version of it was featured in the 2001 film Shrek. Many other arrangements have been performed in recordings and in concert, with more than 300 versions known as of 2008. The song has been used in film and television soundtracks and televised talent contests.\n[…]\nNoting its inclusion in the 2001 animated movie Shrek and performance in numerous singing competition reality shows, New York Times movie reviewer A. O. Scott wrote that \"Hallelujah is one of those rare songs that survives its banalization with at least some of its sublimity intact\".\n[…]\nCale's version forms the basis of most subsequent performances, including Cohen's performances during his 2008–09 world tour. Cale's version is used in the film Shrek (2001), but Rufus Wainwright's version appears on the soundtrack album. Cale's also appears on the first soundtrack album for the TV series Scrubs and as the ending song of the Cold Case episode \"Death Penalty, Final Appeal\".\n[…]\nCanadian-American musician and singer Rufus Wainwright had briefly met Jeff Buckley and recorded a tribute song to him after his 1997 death. That song, \"Memphis Skyline\", referenced Buckley's version of \"Hallelujah\", which Wainwright would later record, though using piano and a similar arrangement to Cale's. Wainwright's version is included on the album Shrek: Music from the Original Motion Picture, although it was Cale's version that was used in the film itself.\n[…]\nHallelujah Guitar chords on Chordlines"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hallelujah_%28can%C3%A7%C3%A3o_de_Leonard_Cohen%29",
        "situacao": "ok",
        "texto": "\"Hallelujah\" é uma música do cantor e compositor canadense Leonard Cohen. Foi gravada originalmente para o álbum Various Positions (1984), a canção já obteve inúmeras versões cantadas por diversos artistas como: Gabriela Rocha, K. D. Lang, Il Divo, Bon Jovi, Damien Rice, John Cale, Jeff Buckley, o tenor João Mendonza, Rufus Wainwright, Pentatonix, Juninho Vox, Raul Blum, Ondiekson Lenke, wes tucke\n[…]\n\"Hallelujah\" foi originalmente composta por Leonard Cohen ao longo de um ano, que confessou ter sido um processo difícil e frustrante. Ele disse que escreveu pelo menos oitenta versos, descartando a maior parte deles no processo  elaborativo da canção.\n[…]\n\"Eu estava lendo uma resenha de um filme chamado Watchmen que dizia: 'Podemos ter, por favor, uma moratória sobre utilizar 'Hallelujah' em filmes e programas de televisão?' Eu o sinto também. Acho que esta é uma boa canção, mas muitas pessoas já a cantaram\".\n[…]\nO compositor e músico canadense-estadunidense Rufus Wainwright conheceu brevemente Jeff Buckley e gravou-lhe um tributo após sua morte em 1997. Essa canção, \"Memphis Skyline\", referiu a versão de Buckley de \"Hallelujah\", que Wainwright viria também a gravar, embora com piano e um arranjo semelhante a de Cale. A versão de Wainwright foi destaque no álbum Shrek: Music from the Original Motion Picture, embora tenha sido a versão de Cale, que foi usada no filme em si.\n[…]\nA trilha sonora de Shrek, contendo cover de Wainwright, foi certificada dupla platina nos Estados Unidos em 2003 como a realização de vendas de mais de dois milhões de cópias.\n[…]\nRufus Wainwright, sua irmã Martha Wainwright, e Joan Wasser cantaram a música no filme \"Leonard Cohen: I'm Your Man\".\n[…]\nA versão de Cale deu formas a base dos espectáculos mais subsequentes, incluindo performances de Cohen durante sua turnê mundial de 2008-2009.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "My Way",
      "descricao": "Canção eternizada por Frank Sinatra em 1969, versão em inglês de uma canção francesa"
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "A letra em inglês de My Way, eternizada por Frank Sinatra, foi escrita por que cantor canadense?",
    "resposta": "Paul Anka",
    "fonte": [
      "https://en.wikipedia.org/wiki/My_Way"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/My_Way",
        "situacao": "ok",
        "texto": "\"My Way\" is an English-language lyrical adaptation of the French song \"Comme d'habitude\", released by Frank Sinatra in 1969. The original song was written by Jacques Revaux, Gilles Thibaut, and Claude François, and was first recorded by the latter in 1967. The English-language version and lyrics were written by Paul Anka.\n[…]\nPaul Anka heard the French original while on vacation in the south of France. He flew to Paris to negotiate the rights to the song. He acquired adaptation, recording, and publishing rights for the nominal, but formal, consideration of one dollar, subject to the provision that the three songwriters would retain their original share of royalty rights with respect to whatever versions Anka or his designates created or produced.\n[…]\nSometime later, Anka had a dinner in Florida with Frank Sinatra and \"a couple of Mob guys\" during which Sinatra said: \"I'm quitting the business. I'm sick of it; I'm getting the hell out.\"\n[…]\nBack in New York, Anka re-wrote the original French song for Sinatra, subtly altering the melodic structure and changing the lyrical theme: At one o'clock in the morning, I sat down at an old IBM electric typewriter and said, 'If Frank were writing this, what would he say?' And I started, metaphorically, 'And now the end is near.' I read a lot of periodicals, and I noticed everything was 'my this' and 'my that'. We were in the 'me generation' and Frank became the guy for me to use to say that.\n[…]\nPresley's version is featured in the climax of the 2001 film 3000 Miles to Graceland (Paul Anka appears in a cameo as a casino pit boss who loathes Presley).\n[…]\nInterviewed in 2007, Paul Anka said he had been \"somewhat destabilized by the Sex Pistols' version. It was kind of curious, but I felt he [Sid Vicious] was sincere about it.\""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/My_Way_%28can%C3%A7%C3%A3o_de_Frank_Sinatra%29",
        "situacao": "ok",
        "texto": "\"My Way\" é uma versão em língua inglesa da canção francesa \"Comme d'habitude\", que foi lançada pela primeira vez pelo autor, Claude François, em 1967, na França. Em 1968, Frank Sinatra lançou sua versão em inglês, adaptada por Paul Anka e que virou um de seus maiores clássicos. Entretanto, a letra não tem relação com a versão original em francês. É uma das músicas populares mais gravadas da histór\n[…]\nEm 16 de julho de 1994, no show realizado no Dodge Stadium de Los Angeles, Os Três Tenores Luciano Pavarotti, Plácido Domingo e José Carreras gravam \"My Way\", estando Frank Sinatra na plateia. No filme do grupo de punk rock inglês Sex Pistols, The Great Rock 'n' Roll Swindle, de 1980, o baixista da banda, Sid Vicious, canta uma versão da música.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "I Will Always Love You",
      "descricao": "Canção lançada em 1974 e regravada por Whitney Houston em 1992 para o filme O Guarda-Costas"
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Antes de virar sucesso na voz de Whitney Houston, I Will Always Love You foi composta e gravada por que estrela country?",
    "resposta": "Dolly Parton",
    "fonte": [
      "https://en.wikipedia.org/wiki/I_Will_Always_Love_You"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/I_Will_Always_Love_You",
        "situacao": "ok",
        "texto": "\"I Will Always Love You\" is a song written and originally recorded in 1973 by American singer-songwriter Dolly Parton. Written as a farewell to her business partner and mentor Porter Wagoner, expressing Parton's gratitude and also her decision to pursue a solo career, the country single was released in 1974.\n[…]\nCountry music singer-songwriter Dolly Parton wrote the song in 1973 for her mentor Porter Wagoner, from whom she was separating professionally after a seven-year partnership. She recorded it in RCA Studio B in Nashville on June 12, 1973.\n[…]\nDuring an interview on The Bobby Bones Show, Dolly Parton revealed how she wrote her signature song \"Jolene\" on the same day she wrote \"I Will Always Love You\". Parton clarified later how early demo versions of both songs were recorded on the same cassette tape and might have been written “a few days apart”.\n[…]\nSeveral times (long before Whitney Houston recorded the song), Dolly Parton suggested to singer Patti LaBelle that she record \"I Will Always Love You\" because she felt LaBelle could have sung it so well. However, LaBelle admitted she kept putting off the opportunity to do so and later deeply regretted it after she heard Whitney Houston's rendition.\n[…]\nIn 2021, \"I Will Always Love You\" was listed at number 94 on the updated list of Rolling Stone's 500 Greatest Songs of All Time. In 2023, \"I Will Always Love You\" was listed at number 60 on Billboard's list of the 500 Best Pop Songs of All Time, Houston's second highest-ranked song on the list. Parton herself publicly stated she liked Houston's cover of her song better than her own.\n[…]\n\"I Will Always Love You\" was covered by American actress and singer Kristin Chenoweth as a duet with Dolly Parton. It was released on August 9, 2019, as the first single from Chenoweth's album, For the Girls."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/I_Will_Always_Love_You",
        "situacao": "ok",
        "texto": "\"I Will Always Love You\" é uma música da cantora norte-americana Dolly Parton. Escrita em 1973 e gravada em 1974, \"I Will Always Love You\" foi um grande sucesso na parada country.\n[…]\n\"I Will Always Love You\" — 2:53\n[…]\nEm 1992 Whitney Houston regravou a canção de Dolly Parton para a trilha sonora do filme O Guarda-Costas, onde atua como atriz ao lado de Kevin Costner. Originalmente a gravadora de Whitney não queria que \"I Will Always Love You\" fosse o primeiro single da trilha sonora do filme, principalmente por causa do intro \"a capella\". Mas Whitney e Kevin insistiram no lançamento da canção e no intro \"Acapella\", o que acabou acontecendo. O solo de saxofone tenor foi interpretado por Kirk Whalum.\n[…]\nAlém da versão de Whitney, no filme podemos ouvir a versão de John Doe em um Jukebox. A Versão de Houston tornou-se um enorme sucesso em todo o mundo, aparecendo na posição 68 da lista da Billboard de \"As Melhores Músicas de Todos os Tempos (Greatest Songs of All Time)\", foi eleita a canção feminina mais bem sucedida da história e apresentou a grande qualidade vocal de Whitney.\n[…]\nCarter Show de 2013 a 2014, Beyoncé cantava o intro \"a capella\" de antes de Halo como forma de homenagem a Whitney.\n[…]\nO vídeo da música foi dirigido por Alan Smithee e começa com a performance de Houston no final de O Guarda-Costas. O vídeo corta e então Houston aparece vestindo um terno azul escuro, sentada em um teatro vazio, com luzes brilhando sobre ela, enquanto canta para seu amor. O vídeo é intercalado com cenas de O Guarda-Costas e dá ao espectador a experiência de reviver os melhores momentos do filme com Whitney. No vídeo Whitney fica sentada o tempo todo devido a sua gravidez.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Respect",
      "descricao": "Canção de soul lançada em 1965 e consagrada por Aretha Franklin em 1967"
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "O hino Respect, consagrado por Aretha Franklin em 1967, foi escrito e lançado dois anos antes por quem?",
    "resposta": "Otis Redding",
    "distratores": [
      "Ray Charles",
      "Sam Cooke",
      "James Brown"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Respect_(song)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Respect_(song)",
        "situacao": "ok",
        "texto": "\"Respect\" is a song by American soul singer-songwriter Otis Redding, originally recorded and released by himself in 1965 as a single from his third album Otis Blue/Otis Redding Sings Soul. After it became a crossover hit for Redding,  Aretha Franklin (the \"Queen of Soul\") in 1967 rearranged, rephrased, and covered it, resulting in her breakout hit and her signature song.\n[…]\nThe song was included on Redding's third studio album, Otis Blue (1965). The album became widely successful, even outside of his largely rhythm and blues (R&B) and blues fan base. When released in the summer of 1965, the song reached the top five on Billboard's Black Singles Chart, and crossed over to pop radio's white audience, peaking at number 35 there.\n[…]\nThe song also became a hit internationally, reaching number 10 in the United Kingdom, and helped to transform Franklin from a domestic star into an international one. Otis Redding himself was impressed with the performance of the song. At the Monterey Pop Festival in the summer of the cover's release, he was quoted as playfully describing \"Respect\" as the song \"that a girl took away from me, a friend of mine, this girl she just took this song\".\n[…]\nWritten by Otis Redding\n[…]\nBecause Franklin made \"Respect\" a hit, many who sample or cover the song refer to her version rather than Redding's. The Supremes and the Temptations were the two most successful acts signed to Berry Gordy Jr.'s Motown record label. Gordy decided to pair them up on a collaborative LP titled Diana Ross & the Supremes Join The Temptations. To accompany the release of the LP, Gordy organized a prime-time special TV program entitled TCB, a commonly used abbreviation for \"Taking Care of Business\".\n[…]\nRedding, Otis (1992) The Very Best of Otis Redding. Rhino/Atlantic Recording Corporation.\n[…]\nAretha Franklin - Respect on YouTube\n[…]\nRespect on Spotify"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Respect",
        "situacao": "ok",
        "texto": "\"Respect\" é uma canção escrita e originalmente gravada pelo cantor de soul americano Otis Redding. Foi lançado em 1965 como um single de seu terceiro álbum Otis Blue/Otis Redding Sings Soul e se tornou um sucesso cruzado para Redding.\n[…]\nA canção foi incluída no terceiro álbum de estúdio de Redding, Otis Blue (1965). O álbum se tornou um grande sucesso, mesmo fora de sua base de fãs de R&B e blues. Quando lançada no verão de 1965, a canção alcançou o top cinco na Black Singles Chart, e passou para o público branco da rádio pop, chegando ao número 35 lá. Na época, a música se tornou o segundo maior hit crossover de Redding (depois de \"I've Been Loving You Too Long\") e abriu caminho para uma futura presença nas rádios americanas.\n[…]\nRedding a apresentou no Monterey Pop Festival.\n[…]\n\"TCB\" é uma abreviação, comumente usada nas décadas de 1960 e 1970, que significa \"cuidar dos negócios\", gíria afro-americana para agradar o parceiro. \"TCB in a flash\" mais tarde se tornou o lema e a assinatura de Elvis Presley. \"RESPECT\" e \"TCB\" não estão presentes na versão de Redding de 1965, mas ele incorporou as ideias de Franklin em suas apresentações posteriores com os Bar-Kays.\n[…]\nA música também se tornou um sucesso internacional, alcançando a 10ª posição no Reino Unido. O próprio Otis Redding ficou impressionado com a performance da música. No Monterey Pop Festival no verão do lançamento da capa, ele foi citado descrevendo de brincadeira \"Respect\" como a música \"que uma garota tirou de mim, um amigo meu, essa garota que ela acabou de pegar essa música\".\n[…]\nEscrito por Otis Redding\n[…]\nRedding, Otis (1992) O melhor de Otis Redding . Rhino/Atlantic Recording Corporation.\n[…]\nAretha Franklin - Respect no YouTube",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Prêmio Nobel de Literatura de 2016",
      "descricao": "Edição de 2016 do Prêmio Nobel de Literatura, concedida pela Academia Sueca"
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 2016, a Academia Sueca deu o Nobel de Literatura a um cantor e compositor americano. Quem?",
    "resposta": "Bob Dylan",
    "fonte": [
      "https://en.wikipedia.org/wiki/2016_Nobel_Prize_in_Literature",
      "https://en.wikipedia.org/wiki/Bob_Dylan"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/2016_Nobel_Prize_in_Literature",
        "situacao": "ok",
        "texto": "The 2016 Nobel Prize in Literature was awarded to the American singer-songwriter Bob Dylan (born 1941) \"for having created new poetic expressions within the great American song tradition\". The prize was announced by the Swedish Academy on 13 October 2016. He is the 12th Nobel laureate from the United States.\n[…]\nThe Nobel Prize committee announced on October 13, 2016, that it would be awarding Dylan the Nobel Prize in Literature \"for having created new poetic expressions within the great American song tradition\". Dylan remained silent for days after receiving the award, before telling journalist Edna Gundersen that getting the award was \"amazing, incredible. Who ever dreams about something like that?\"\n[…]\nThe Swedish Academy announced in November 2016 that Dylan would not travel to Stockholm for the Nobel Prize Ceremony due to \"pre-existing commitments\". At the Nobel Banquet in Stockholm on December 10, 2016, Dylan's speech was given by Azita Raji, U.S. Ambassador to Sweden. Patti Smith performed his song \"A Hard Rain's A-Gonna Fall\" to orchestral accompaniment.\n[…]\nThe 2016 choice of Bob Dylan was the first time a musician and songwriter won the Nobel for Literature. The New York Times reported: \"Mr. Dylan, 75, is the first musician to win the award, and his selection on Thursday is perhaps the most radical choice in a history stretching back to 1901.\"\n[…]\nDylan's reception of the Nobel Prize caused controversy, particularly among writers who argued that the literary merits of Dylan's work were not equal to those of more traditional authors. Writer Rabih Alameddine tweeted, \"Bob Dylan winning a Nobel in Literature is like Mrs Fields being awarded 3 Michelin stars.\" The French writer Pierre Assouline described the decision as \"contemptuous of writers\"."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Bob_Dylan",
        "situacao": "ok",
        "texto": "Bob Dylan (legally Robert Dylan; born Robert Allen Zimmerman, May 24, 1941) is an American singer-songwriter. Described as one of the greatest songwriters of all time, Dylan has been a major figure in popular culture over his 69-year career. Dylan added increasingly sophisticated lyrical techniques to the folk music of the early 1960s, infusing it \"with the intellectualism of classic literature an\n[…]\nIn 1996, Gordon Ball of the Virginia Military Institute nominated Dylan for the Nobel Prize in Literature, initiating a campaign that lasted for 20 years. On October 13, 2016, the Nobel committee announced that it would award Dylan the prize \"for having created new poetic expressions within the great American song tradition\".\n[…]\nLiterary critic Christopher Ricks published Dylan's Visions of Sin, an appreciation of Dylan's work. After Dylan's Nobel win, Ricks reflected: \"I'd not have written a book about Dylan, to stand alongside my books on Milton and Keats, Tennyson and T.S.\n[…]\nThe sale of Dylan's archive of about 6,000 notebooks, drafts of lyrics, recordings, and correspondence to the George Kaiser Family Foundation and the University of Tulsa was announced in March 2016. The sale price was \"an estimated $15 million to $20 million\". To house the archive, the Bob Dylan Center in Tulsa, Oklahoma opened on May 10, 2022.\n[…]\nIn November 2016, the Halcyon Gallery featured a collection of artworks by Dylan. The exhibition, The Beaten Path, depicted American landscapes and urban scenes, inspired by Dylan's travels across the US. The show was reviewed by Vanity Fair and Asia Times Online. In October 2018, the Halcyon Gallery mounted an exhibition of Dylan's drawings, Mondo Scripto. The works consisted of Dylan hand-written lyrics of his songs, with each song illustrated by a drawing.\n[…]\nExpecting Rain – Dylan news and events, updated daily\n[…]\nBob Dylan at IMDb\n[…]\nBob Dylan on Nobelprize.org"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Nothing Compares 2 U",
      "descricao": "Balada que virou sucesso mundial em 1990 na voz da irlandesa Sinéad O'Connor"
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "A balada Nothing Compares To You, sucesso da irlandesa Sinéad O'Connor em 1990, foi composta por que astro americano?",
    "resposta": "Prince",
    "fonte": [
      "https://en.wikipedia.org/wiki/Nothing_Compares_2_U"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Nothing_Compares_2_U",
        "situacao": "ok",
        "texto": "\"Nothing Compares 2 U\" is a 1985 song written by American musician Prince for his project, The Family, featured on its 1985 debut album. It was popularized when Irish singer and songwriter Sinéad O'Connor covered it for her 1990 studio album, I Do Not Want What I Haven't Got. The song's lyrics expressing an abandoned lover's feelings of longing.\n[…]\n\"Nothing Compares 2 U\" became O'Connor's signature song, and though it sparked some controversy between O'Connor and Prince, they came to amicable terms in the years before his death in 2016. Prince went on to perform the song regularly during his live performances, with live performances being included on The Hits/The B-Sides, Rave Un2 the Year 2000, and One Nite Alone... Live!. A solo version by Prince was later released in 2018.\n[…]\n\"Nothing Compares 2 U\" was written by the American musician Prince, who recorded a demo in 1984. In 1985, Prince's funk band the Family released its sole studio album, The Family, including \"Nothing Compares 2 U\". It was not released as a single and received little recognition. Prince's demo was released in 2018.\n[…]\nSinéad O'Connor covered \"Nothing Compares 2 U\" for her 1990 studio album, I Do Not Want What I Haven't Got, and was produced by O'Connor and Nellee Hooper.\n[…]\nSinéad O'Connor recorded \"Nothing Compares 2 U\" with a new arrangement by her and the producer Nellee Hooper. O'Connor's version is in the key of F major.\n[…]\n\"Nothing Compares 2 U\" – 5:09\n[…]\nChris Cornell posted a link to his version the day after Prince's death. In an accompanying message, he wrote: \"Prince's music is the soundtrack to the soulful and beautiful universe he created, and we have all been privileged to be part of that amazing world. I performed his song 'Nothing Compares 2 U' for the first time a couple months ago. It has a timeless relevance for me and practically everyone I know."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Nothing_Compares_2_U",
        "situacao": "ok",
        "texto": "Nothing Compares 2 U é uma canção escrita por Prince, para a banda The Family, em 1985. Em 1990, a regravação da canção feita pela cantora e compositora irlandesa, Sinéad O'Connor, para seu segundo álbum de estúdio, I Do Not Want What I Haven't Got, se tornou um sucesso mundial e chegou ao topo da parada da Billboard Hot 100, onde permaneceu por quatro semanas. Em abril de 1990, foi certificado co\n[…]\nSeu famoso videoclipe filmado em Paris, recebeu destaque na programação da MTV. Ganhou três prêmios no MTV Video Music Awards de 1990: Vídeo do Ano (O'Connor foi a primeira artista feminina a receber o prêmio), Melhor Vídeo Feminino e Melhor Vídeo Pós-Moderno. Foi indicado para Vídeo Revelação, Escolha da Audiência e Escolha da Audiência Internacional.\n[…]\nEm 1993, Prince lançou uma versão ao vivo de \"Nothing Compares 2 U\", com Rosie Gaines, em seu álbum de compilação The Hits/The B-Sides. Prince também lançou outras versões ao vivo da música em seu filme-concerto Rave Un2 the Year 2000, e em seu álbum ao vivo de 2002, One Nite Alone... Live!. A demo de 1984, de Prince foi lançada como single em 2018 em conjunto com seu espólio.\n[…]\nEm outubro de 2014, Aretha Franklin lançou seu 38º e último álbum de estúdio, Aretha Franklin Sings the Great Diva Classics, no qual ela fez covers de várias músicas de outras artistas femininas, incluindo uma versão jazz de \"Nothing Compares 2 U\".\n[…]\nA revista Time incluiu \"Nothing Compares 2 U\" em sua lista de 2011 das \"100 músicas de todos os tempos\".\n[…]\nNo dia 22 de maio de 2016, Madonna cantou a canção durante o Billboard Music Awards, em um tributo ao Prince.\n[…]\nEm 2020, o site Cleveland.com classificou \"Nothing Compares 2 U\" como a melhor música número um da Billboard Hot 100 da década de 1990, chamando-a de \"uma das maiores canções de amor já escritas\".\n[…]\n\"Nothing Compares 2 U\" (5:08)\n[…]\n\"Nothing Compares 2 U\" (5:08)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Tango",
      "descricao": "Gênero musical e dança surgidos na região do Rio da Prata, entre Buenos Aires e Montevidéu"
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Que instrumento de fole, de origem alemã, virou a alma do tango argentino?",
    "resposta": "Bandoneón",
    "fonte": [
      "https://en.wikipedia.org/wiki/Bandoneon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bandoneon",
        "situacao": "ok",
        "texto": "The bandoneon (Spanish: bandoneón) or bandonion is a type of concertina particularly popular in Argentina and Uruguay, used in most tango ensembles. As with other members of the concertina family, it is held between the hands, and played by pulling and pushing air through bellows, routing it through sets of tuned metal reeds by pressing the instrument's buttons.\n[…]\nThe Bandonion, so named by the German instrument dealer Heinrich Band (1821–1860), was originally intended as an instrument for religious and popular music of the day, in contrast to its predecessor, the German concertina (Konzertina), which had predominantly been used in folk music. It is believed that around 1870, German and Italian emigrants and sailors brought the instrument to Argentina, where it was adopted into the nascent genre of tango music, a descendant of the earlier milonga.\n[…]\nOriginal instruments can be seen in a number of German museums, such as the Preuss family's Bandoneon Museum in Lichtenberg and the Steinhart family's collection in Kirchzarten, Freiburg, which has now been moved to the Tango- and Bandoneon museum in Staufen since July 2014.\n[…]\nThe Argentinian bandleader, composer, arranger, and tango performer Aníbal Troilo was a leading 20th-century proponent of the bandoneon. The bandoneon player and composer Ástor Piazzolla played and arranged in Troilo's orchestra from 1939 to 1944. Piazzolla's \"Fugata\" from 1969 showcases the instrument, which plays the initial fugue subject on the 1st statement, then moves on to the outright tango after the introduction.\n[…]\nWith his solos and accompaniment on the bandoneon, Piazzolla combined a musical composition much derived from classical music (which he had studied intensively in his formative years) with traditional instrumental tango, to form nuevo tango, his new interpretation of the genre.\n[…]\nChristian's Bandoneon Page"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bandoneon",
        "situacao": "ok",
        "texto": "O bandoneon é um instrumento musical de palhetas livres, semelhante a uma concertina, utilizado principalmente na região do Rio da Prata, Uruguai e Argentina, onde é o principal instrumento da orquestra de tango. O executante do bandoneon é chamado de bandoneonista.\n[…]\nApesar disso, existem desde badoneões de estudo com apenas uma chapa por nota até bandoneões com quatro chapas. Os modelos diferentes do de duas chapas não são utilizados no tango por não terem o som característico do instrumento, senão que mais bem soam como um acordeão.\n[…]\nEstes bandoneões não são apropriados para a execução do tango, pois seu timbre é muito estridente em comparação com os bandoneões alemães. Porém, bem servem para outros estilos, como o chamamé ou a música alemã. São instrumentos bastante resistentes e mais novos que os bons instrumentos alemães.\n[…]\nDentre as fábricas de bandoneón alemãs, destacam-se a ELA (Ernest Louis Arnold), Alfred Arnold (AA ou Doble A), Arno Arnold (não confundir com AA), Meinel & Herold e F. Lange. Esta última não chegou a produzir bandoneões de tamanho padrão (71 botões) porém seus bandoneões pequenos são muito apreciados pelos executantes de música alemã. As fábricas ELA e AA fabricaram instrumentos com inúmeras marcas diferentes. A ELA fabricou dentre muitos outros, os modelos Tango, Cardenal, América, Echo, E.L.\n[…]\nOs materiais que compõem o bandoneón são basicamente madeira, couro, papelão, alpaca, zinco/alumínio, aço e galatita. O fole é confeccionado em papelão, tendo os cantos recobertos por couro (marroquim) e cantoneiras externas de alpaca. Pode também ser enfeitado com outros adornos em alpaca (que muitos insistem em dizer ser \"prata alemã\").\n[…]\nTango\n[…]\npágina de Christian Mensing sobre tango e bandoneón\n[…]\nBandoneões Pigini",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Fleetwood Mac",
      "descricao": "Banda anglo-americana de rock formada em Londres em 1967"
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em 1975, que cantora entrou no Fleetwood Mac junto com o namorado, o guitarrista Lindsey Buckingham?",
    "resposta": "Stevie Nicks",
    "fonte": [
      "https://en.wikipedia.org/wiki/Fleetwood_Mac",
      "https://en.wikipedia.org/wiki/Stevie_Nicks"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fleetwood_Mac",
        "situacao": "ok",
        "texto": "Fleetwood Mac were a British and American  rock band formed in London in 1967. They have sold more than 120 million records worldwide, making them one of the world's best-selling musical acts. Their 1977 album, Rumours, is one of the best-selling albums of all time and won the Grammy Award for Album of the Year in 1978.\n[…]\nFleetwood and the McVies recruited singer/guitarist Lindsey Buckingham and singer Stevie Nicks at the end of that year, and the first album with this line-up, Fleetwood Mac (1975), topped the Billboard 200 chart in the US, followed by Rumours.\n[…]\nIn 1998, Fleetwood Mac were inducted into the Rock and Roll Hall of Fame. Members inducted were the 1968–1970 band—Mick Fleetwood, John McVie, Peter Green, Jeremy Spencer, and Danny Kirwan—and Rumours-era members Christine McVie, Stevie Nicks, and Lindsey Buckingham. Bob Welch was not included, despite his key role in keeping the band alive during the early 1970s. The Rumours-era version of the band performed both at the induction ceremony and at the Grammy Awards programme that year.\n[…]\nIn March 2008, it was mooted that Sheryl Crow might work with Fleetwood Mac in 2009. Crow and Stevie Nicks had collaborated in the past and Crow had stated that Nicks had been a great teacher and inspiration to her. Later, Buckingham said that the potential collaboration with Crow had \"lost its momentum\" and the idea was abandoned.\n[…]\nIn early 2015, Lindsey Buckingham suggested that the ongoing tour and a planned new album could represent the band's final major phase, while still emphasizing that work on the Fleetwood Mac album would continue and solo projects would become a lower priority for a period. Mick Fleetwood later said the record could take several years to complete, citing Stevie Nicks' ambivalence at the time about committing to a full album."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Stevie_Nicks",
        "situacao": "ok",
        "texto": "Stephanie Lynn Nicks (born May 26, 1948) is an American singer-songwriter, known for her work with the band Fleetwood Mac and as a solo artist.\n[…]\nAfter starting her career as a duo with her then-boyfriend Lindsey Buckingham, releasing the album Buckingham Nicks to little success, the pair joined Fleetwood Mac in 1975, helping the band to become one of the best-selling music acts of all time with over 120 million records sold worldwide. Rumours, the band's second album with Nicks, became one of the best-selling albums worldwide, being certified 21× platinum in the US.\n[…]\nAfter the tour concluded, Nicks left the group over a dispute with Mick Fleetwood, who would not allow her to release the 1977 track \"Silver Springs\" on her album Timespace: The Best of Stevie Nicks, because of his plans to save it for release on a forthcoming Fleetwood Mac box set. Fleetwood knew that the song would be valuable as a selling point for the box set, since over the years, it had gained interest among the band's fans.\n[…]\nOn the 10th anniversary of her solo career debut, Nicks released Timespace: The Best of Stevie Nicks on September 3, 1991. The following year, Fleetwood Mac also released a four-disc box set, 25 Years – The Chain, which included \"Silver Springs\".\n[…]\nNicks has started a charity foundation titled Stevie Nicks's Band of Soldiers, which is used for the benefit of wounded military personnel.\n[…]\nBuckingham Nicks (1973)\n[…]\nStevie Nicks at IMDb\n[…]\nStevie Nicks discography at Discogs\n[…]\nStevie Nicks at AllMusic\n[…]\nFive audio interview segments with Stevie Nicks discussing her album Bella Donna\n[…]\nBiography – Stevie Nicks: Visions, Dreams & Rumors (book at Goodreads)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Fleetwood_Mac",
        "situacao": "ok",
        "texto": "Fleetwood Mac foi uma banda anglo-americana de rock formada em Londres no ano de 1967, formada pelo guitarrista e cantor Peter Green. Green nomeou a banda combinando os sobrenomes do baterista Mick Fleetwood e do baixista John McVie, que permaneceram na banda durante as muitas mudanças de formação. Fleetwood vendeu mais de 120 milhões de discos mundialmente, sendo uma das bandas de maior sucesso c\n[…]\nEnquanto Mike Fleetwood estava visitando estúdios em Los Angeles, ele escutou o duo norte-americano de folk-rock Buckingham Nicks, formado pelo guitarrista e cantor Lindsey Buckingham e a cantora Stevie Nicks. Em dezembro de 1974, ele pediu a Buckingham para se juntar ao Fleetwood Mac, com Buckingham concordando, com a condição de que Nicks  pudesse se juntar.\n[…]\nA partir daí, novos ventos sopraram sobre o verdadeiro grupo: o casal Nicks e Buckingham se associou ao grupo e, com nova formação (Christine McVie nos vocais e teclados, Mick Fleetwood na bateria, John McVie no baixo, Stevie Nicks nos vocais e Lindsey Buckigham na guitarra), o grupo voltou a ocupar seu lugar nas paradas de sucesso e a ganhar discos de ouro e platina.\n[…]\nEm 2018, a banda foi premiada com o MusiCares Person of the Year. Após isso, Buckingham foi expulso do grupo. A princípio, os motivos não foram revelados pela banda, enquanto Lindsey queixou em entrevistas de que Stevie Nicks estaria responsável por isso. Mick Fleetwood disse que Lindsey não queria fazer uma turnê com o Fleetwood Mac antes de uma turnê solo, enquanto o guitarrista afirmou que a afirmação não procedia.\n[…]\nNo mesmo ano, o cantor entrou com um processo contra o conjunto, o qual foi resolvido com um acordo entre ambas as partes. Em 2019, Christine McVie afirmou a Mojo que a expulsão de Lindsey se deu por um impasse na sua relação com Stevie Nicks.\n[…]\nStevie Nicks – vocal, pandeiro (1975–1991, 1997–2022)\n[…]\n1968: Fleetwood Mac\n[…]\n1975: Fleetwood Mac",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Festival de Woodstock",
      "descricao": "Festival de música realizado em agosto de 1969 numa fazenda em Bethel, no estado de Nova York"
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "O festival de Woodstock aconteceu no mesmo verão de que feito histórico da corrida espacial?",
    "resposta": "Chegada do homem à Lua",
    "fonte": [
      "https://en.wikipedia.org/wiki/Woodstock",
      "https://en.wikipedia.org/wiki/Apollo_11"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Woodstock",
        "situacao": "ok",
        "texto": "The Woodstock Music and Art Fair, commonly referred to as Woodstock, was a music festival held from August 15 to 18, 1969, on Max Yasgur's dairy farm in Bethel, New York, 60 miles (95 km) southwest of the town of Woodstock. Billed as \"an Aquarian Exposition: 3 Days of Peace & Music\", it attracted an audience of more than 460,000. Thirty-two acts performed outdoors despite overcast skies and sporad\n[…]\nMusical events bearing the Woodstock name were planned for anniversaries, including the 10th, 20th, 25th, 30th, 40th, and 50th. In 2004, Rolling Stone magazine listed it as number 19 of the 50 moments that changed the history of rock and roll. In 2017, the festival site became listed on the National Register of Historic Places.\n[…]\nThe scheduled date for the \"Bethel Woods Music and Culture Festival: Celebrating the golden anniversary at the historic site of the 1969 Woodstock festival\" was August 16–18, 2019. Bethel Woods described the festival as a \"pan-generational music, culture and community event\" (including some live performances and talks by) \"leading futurists and retro-tech experts\".\n[…]\nMichael Lang told a reporter that he also had \"definite plans\" for a 50th anniversary concert that would \"hopefully encourage people to get involved with our lives on the planet\" with a goal of re-capturing the \"history and essence of what Woodstock was\". On January 9, 2019, Lang announced that the official Woodstock 50th anniversary festival would take place on August 16–18, 2019 in Watkins Glen, New York.\n[…]\nWoodstock '99, a rebooted version of the festival held in Rome, New York\n[…]\nKirkpatrick, Rob (August 5, 2009). \"Pot, Skinny-Dipping, and Freedom Rock: Woodstock and the Year of the Outdoor Music Festival\". PopMatters.\n[…]\n\"Michael Lang. The man behind the most important Music Festival in the History, Woodstock 1969\". La Escuela Superior de Audio y Acústica.\n[…]\nWoodstock Festival Gallery"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Apollo_11",
        "situacao": "ok",
        "texto": "Apollo 11 (July 16–24, 1969) was the American spaceflight that first landed humans on the Moon, and the fifth crewed mission of NASA's Apollo program. The mission was crewed by Commander Neil Armstrong, Command Module Pilot Michael Collins, and Lunar Module Pilot Edwin \"Buzz\" Aldrin, all of whom were on their second and final spaceflight.\n[…]\nArmstrong's moonwalk was broadcast live to an estimated 600 million viewers, roughly one-fifth of the world's population, making it among the most-watched television events in history.\n[…]\nThis included Space Center Houston from October 14, 2017, to March 18, 2018, the Saint Louis Science Center from April 14 to September 3, 2018, the Senator John Heinz History Center in Pittsburgh from September 29, 2018, to February 18, 2019, and its last location at Museum of Flight in Seattle from March 16 to September 2, 2019. Continued renovations at the Smithsonian allowed time for an additional stop for the capsule, and it was moved to the Cincinnati Museum Center.\n[…]\nThe Smithsonian Institute's National Air and Space Museum and NASA sponsored the \"Apollo 50 Festival\" on the National Mall in Washington DC. The three-day (July 18 to 20, 2019) outdoor festival featured hands-on exhibits and activities, live performances, and speakers such as Adam Savage and NASA scientists.\n[…]\nAs part of the festival, a projection of the 363-foot (111 m) tall Saturn V rocket was displayed on the east face of the 555-foot (169 m) tall Washington Monument from July 16 to the 20th from 9:30 pm until 11:30 pm (EDT). The program  included a 17-minute show that combined full-motion video projected on the Washington Monument to recreate the assembly and launch of the Saturn V rocket."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Festival_de_Woodstock",
        "situacao": "ok",
        "texto": "Woodstock Music & Art Fair (conhecido informalmente como Woodstock ou Festival de Woodstock) foi um festival de música realizado entre os dias 15 e 18 de agosto de 1969 na fazenda de gado leiteiro de 600 acres de Max Yasgur, próximo à região de White Lake, na cidade de Bethel, no estado de Nova York, nos Estados Unidos. O local se localizava a setenta quilômetros a sudoeste da cidade de Woodstock.\n[…]\nJohn Sebastian — não estava na programação, estava apenas assistindo ao festival. Foi chamado para tocar pois muitos dos artistas programados ainda não haviam chegado.\n[…]\nNo dia 12 de agosto, a banda assistiu à apresentação de Elvis Presley no International Hotel, em Las Vegas. O grupo embarcou em uma bem-sucedida turnê de verão, tocando no mesmo final de semana do festival de Woodstock no Asbury Park Convention Hall em Nova Jérsia.\n[…]\nThe Byrds: foram convidados, mas escolheram não participar pensando que Woodstock não teria nada de diferente dos outros festivais musicais que estavam acontecendo naquele verão. Também estavam preocupados com o cachê, de acordo com declarações do baixista John York: \"Estávamos indo pra um show e Roger McGuinn chegou e disse que um cara estava organizando um festival no norte de Nova York, mas que naquele ponto já não estavam mais pagando as bandas.\n[…]\nJá em janeiro de 1975, na Fazenda Santa Virgínia, em Iacanga, no interior de São Paulo, aconteceu o primeiro \"Festival de Águas Claras\", também anunciado como o pretenso \"Woodstock brasileiro\".\n[…]\nQuem talvez tenha chegado mais perto foi o Festival Psicodália, que teve início na Lapa (PR) em 2001, depois foi transferido para São Martinho (SC) e se consolidou em Rio Negrinho (SC), onde permaneceu por nove anos até firmar parceria com o Morrostock, que acontecia no Rio Grande do Sul.\n[…]\nO filme Taking Woodstock (2009), de Ang Lee, dramatiza a realização do festival.\n[…]\n«The Woodstock Project (arquivado)». (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Thriller",
      "descricao": "Álbum de Michael Jackson produzido por Quincy Jones"
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Em que ano foi lançado o álbum Thriller, de Michael Jackson?",
    "resposta": "1982",
    "distratores": [
      "1979",
      "1984",
      "1987"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Thriller_(album)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Thriller_(album)",
        "situacao": "ok",
        "texto": "Thriller is the sixth studio album by the American singer and songwriter Michael Jackson. It was released on November 29, 1982, through Epic Records. It was produced by Quincy Jones, who produced Jackson's previous album, Off the Wall (1979). Recording took place from April to November 1982 at Westlake Recording Studios in Los Angeles, California, with a budget of $750,000 (equivalent to $2,502,15\n[…]\nJackson reunited with Off the Wall producer Quincy Jones to record his sixth studio album, his second under the Epic label. They collaborated on 30 songs, nine of which were featured on the album. Thriller was recorded at Westlake Recording Studios in Los Angeles, California, with a production budget of $750,000. The first official recording took place on April 14, 1982, at noon with Jackson and Paul McCartney recording \"The Girl Is Mine\".\n[…]\nAfter Jones completed Donna Summer's self-titled album, the rest of the album was completed between August and November 8, 1982.\n[…]\nThriller was released on November 29, 1982, through Epic Records and internationally by CBS Records. Originally, the label planned to issue the album in time for a Christmas release, before pushing it into the following January to allow Jones and Jackson more time to complete the tracks. However, copies of Thriller were leaked to radio stations early, and the label decided to rush-release the album on November 29.\n[…]\nAuthor, music critic and journalist Nelson George wrote in 2004, \"It's difficult to hear the songs from Thriller and disengage them from the videos. For most of us the images define the songs. In fact it could be argued that Michael is the first artist of the MTV age to have an entire album so intimately connected in the public imagination with its imagery\". Short films like Thriller largely remained unique to Jackson, while the group dance sequence in \"Beat It\" has been frequently imitated."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Thriller_%28%C3%A1lbum%29",
        "situacao": "ok",
        "texto": "Thriller é o sexto álbum de estúdio em carreira solo do artista estadunidense Michael Jackson, lançado em 30 de novembro de 1982, através da Epic Records. Assim como o álbum anterior do cantor, Off the Wall (1979), que foi aclamado e bem-sucedido comercialmente, Thriller foi inteiramente produzido por Quincy Jones e coproduzido por Jackson. As gravações do projeto ocorreram entre 14 de abril a 8 d\n[…]\nA gravação do álbum teve início às 12h00 (15h00 em horário sul-americano) do dia 14 de abril de 1982, com Jackson e Paul McCartney gravando \"The Girl Is Mine\"; o disco foi concluído em 8 de novembro de 1982, último dia em que foi mixado. Vários membros da banda Toto se envolveram na gravação e na produção do álbum. Jackson compôs e co-produziu \"Wanna Be Startin' Somethin'\", \"The Girl Is Mine\", \"Beat It\" e \"Billie Jean\".\n[…]\nThriller foi lançado em 30 de novembro de 1982 nos Estados Unidos, no Canadá, no Reino Unido, na Austrália e no Japão. No dia seguinte, foi disponibilizado no resto do continente europeu, oceânico e asiático. Dois dias depois, foi disponibilizado no resto do mundo. Foram lançados sete singles do disco.\n[…]\n\"Who Do You Know?\" (Michael Jackson) (lançada no álbum Thriller 40)\n[…]\n\"Got the Hots\" (Rod Temperton, Michael Jackson, Quincy Jones) (Lançado exclusivamente na edição japonesa de Thriller 25)\n[…]\n\"Behind the Mask\" (Michael Jackson, Chris Mosdell, Ryuichi Sakamoto) (Lançado no primeiro álbum póstumo de Michael Jackson, Michael)\n[…]\n\"Somewhere in Time\" (Michael Jackson) (versão de 1982) (cogitada para os álbuns: Triumph dos Jacksons e Thriller)\n[…]\n\"Don't Be Messin' 'Round\" (original version 1982) (Michael Jackson) (Versão de 1986 lançado na edição de Bad 25)\n[…]\n\"Sunset Driver\" (Michael Jackson) (versão de 1982 lançada no álbum The Ultimate Collection)\n[…]\n\"Who Is the Girl with Her Hair Down\" (???) (versão de 1982) (cogitada para os álbuns: Off the Wall, Triumph dos Jacksons e Thriller)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Sex Pistols",
      "descricao": "Banda punk britânica formada em Londres em 1975"
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Apesar da enorme influência no punk, quantos álbuns de estúdio os Sex Pistols lançaram?",
    "resposta": "Um",
    "distratores": [
      "Dois",
      "Três",
      "Cinco"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Sex_Pistols",
      "https://en.wikipedia.org/wiki/Never_Mind_the_Bollocks,_Here%27s_the_Sex_Pistols"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sex_Pistols",
        "situacao": "ok",
        "texto": "The Sex Pistols are an English punk rock band formed in London in 1975. Although their initial career lasted just two and a half years, they became culturally influential in popular music. The band initiated the punk movement in the United Kingdom, with their clothes and hairstyles becoming a significant influence on the punk subculture and fashion.\n[…]\nWhile the Ramones are regarded as seminal to the growth of English punk rock, and Cook and Jones were fans of the band, Lydon has repeatedly rejected that they influenced the Sex Pistols, claiming that they \"were all long-haired and of no interest to me. I didn't like their image, what they stood for, or anything about them\". Cook also denied being influenced by their music, stating, \"the Ramones and the Pistols were different animals, with a different flavour.\n[…]\nAfter leaving the Pistols, Rotten reverted to his birth name of Lydon and formed the influential post-punk band Public Image Ltd. Cook, Jones and Vicious did not play live together again after his departure, but over the next several months, McLaren arranged for recordings in Brazil (with Jones and Cook), Paris (with Vicious) and London; they and others stepped in as lead vocalists on tracks.\n[…]\nCalling the band \"immensely influential\", a London College of Music study notes that \"many styles of popular music, such as grunge, indie, thrash metal and even rap owe their foundations to the legacy of ground breaking punk bands—of which the Sex Pistols was the most prominent.\"\n[…]\nThe Sex Pistols were defined by ambitions that went beyond the musical—indeed, McLaren was at times openly contemptuous of the band's music and punk rock generally. \"Christ, if people bought the records for the music, this thing would have died a death long ago\", he said in 1977.\n[…]\nNever Mind the Bollocks, Here's the Sex Pistols (1977)\n[…]\nSex Pistols at AllMusic"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Never_Mind_the_Bollocks,_Here%27s_the_Sex_Pistols",
        "situacao": "ok",
        "texto": "Never Mind the Bollocks, Here's the Sex Pistols (often shortened to Never Mind the Bollocks) is the only studio album by the English punk rock band the Sex Pistols. It was released on 28 October 1977 through Virgin Records. As a result of the Sex Pistols' volatile internal relationships, the band's lineup saw changes during the recording of the album. Original bass guitarist Glen Matlock left the \n[…]\nThe album has influenced many bands and musicians, and the industry in general. In particular, the album's raw energy, and Johnny Rotten's sneering delivery and \"half-singing\", are often considered game-changing. It is frequently listed as the most influential punk album, and one of the greatest and most important albums of all time. In 1987, Rolling Stone magazine named the album the second best of the previous 20 years, behind only the Beatles' Sgt. Pepper's Lonely Hearts Club Band.\n[…]\nThe time spent in the studio recording the album was, for Steve Jones, the \"best part of being in the Pistols\". Jones spent many hours doing guitar overdubs with producer Chris Thomas and—repudiating punk's occasional embrace of musical sloppiness—has stated that both he and drummer Paul Cook \"weren't just having a laugh\" and were \"really dedicated in the studio\".\n[…]\nNever Mind the Bollocks changed everything. There had never been anything like it before and really there's never been anything quite like it since. The closest was probably Nirvana, a band very heavily influenced by the Sex Pistols.\n[…]\nThis UMG box set (SEXPISSBOX1977) and the 2002 Virgin box set (SEXBOX1) together contain almost the entire Sex Pistols studio/demo sessions – omitting only three of the June 1976 Dave Goodman demos which can be found on the 2006 officially released remaster of the \"Spunk\" bootleg.\n[…]\nSex Pistols\n[…]\nNever Mind the Bollocks, Here's the Sex Pistols at Discogs (list of releases)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sex_Pistols",
        "situacao": "ok",
        "texto": "The Sex Pistols são uma banda inglesa de punk rock formada em Londres em 1975. Embora sua carreira inicial tenha durado apenas dois anos e meio, eles se tornaram culturalmente influentes na música popular. A banda iniciou o movimento punk no Reino Unido e, posteriormente, inspirou muitos músicos de punk, pós-punk e rock alternativo, enquanto suas roupas e penteados foram uma influência significati\n[…]\nApós deixar os Pistols, Rotten voltou a usar seu nome de nascimento, Lydon, e formou a influente banda pós-punk Public Image Ltd. com o ex-membro do The Clash, Keith Levene, e seu amigo de escola, Jah Wobble. A banda alcançou o top 10 do Reino Unido com seu single de estreia, \"Public Image\", de 1978.\n[…]\nOs Sex Pistols são amplamente considerados como um dos atos mais influentes da história da música popular. Sua entrada no Trouser Press Record Guide afirma que \"sua importância - tanto para a direção da música contemporânea quanto para a cultura pop de forma mais geral - dificilmente pode ser exagerada\". O crítico musical Dave Marsh os chamou de \"inquestionavelmente a banda de rock mais radical dos anos 70\".\n[…]\nEmbora não seja a primeira banda punk, Never Mind the Bollocks é regularmente citado como um dos maiores álbuns de todos os tempos: em 2006, foi eleito o nº 28 na revista Q \"100 Greatest Albums Ever\", enquanto a Rolling Stone o listou em nº 2 em sua lista \"Top 100 Albums of the Last 20 Years\" de 1987. Ele passou a ser reconhecido como um dos discos mais influentes da história do rock. De acordo com a AllMusic, o álbum é \"um dos maiores e mais inspiradores discos de rock de todos os tempos\".\n[…]\nChamando a banda de \"imensamente influente\", um estudo do London College of Music observa que \"muitos estilos de música popular, como grunge, indie, thrash metal e até mesmo rap, devem suas fundações ao legado de bandas punk inovadoras - das quais os Sex Pistols foram os mais proeminentes.\"",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Bob Marley",
      "descricao": "Cantor e compositor jamaicano de reggae, líder dos Wailers"
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Bob Marley morreu em 1981, vítima de câncer. Com que idade?",
    "resposta": "36 anos",
    "distratores": [
      "27 anos",
      "33 anos",
      "42 anos"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Bob_Marley"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bob_Marley",
        "situacao": "ok",
        "texto": "Robert Nesta Marley (6 February 1945 – 11 May 1981) was a Jamaican reggae singer, songwriter, and guitarist. Considered one of the pioneers of the genre, he was renowned for his distinctive vocal and songwriting style. Marley increased the visibility of Jamaican music worldwide and became a global figure in popular culture. He became known as a Rastafarian icon, and he infused his music with a sen\n[…]\nNorval, who provided little financial support for his wife and child and rarely saw them, died when Marley was 10 years old. Some sources state that Marley's birth name was Nesta Robert Marley, with a story that when Marley was still a boy, a Jamaican passport official reversed his first and middle names because Nesta sounded like a girl's name. Marley's maternal grandfather, Omariah, known as a Myal, was an early musical influence on Marley.\n[…]\nAfter eight months of the alternative treatment failing to effectively treat his advancing cancer, Marley boarded a plane for his home in Jamaica. During the flight, his vital functions worsened. The flight was diverted to Miami, Florida, where he was taken to Cedars of Lebanon Hospital (now the University of Miami Hospital). He died there shortly afterwards on 11 May 1981, at the age of 36, due to the spread of cancer to his lungs and brain.\n[…]\nOn 21 May 1981, Marley was given a state funeral in Jamaica that combined elements of Ethiopian Orthodoxy, as well as Rastafari tradition. He was buried in a chapel near his birthplace in Nine Mile; Marley's casket contained his red Gibson Les Paul guitar, a Bible opened at Psalm 23, and a stalk of cannabis placed there by his widow Rita Marley. Prime Minister Edward Seaga delivered the final funeral eulogy to Marley, saying:\n[…]\nBob Marley discography at Discogs\n[…]\nJohnson, Anitra (30 August 2024). \"Reggae legend Bob Marley's home in Wilmington Delaware\". Delawareonline.com. Retrieved 2 September 2024."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bob_Marley",
        "situacao": "ok",
        "texto": "Robert Nesta \"Bob\" MarleyOM (Nine Mile, 6 de fevereiro de 1945 – Miami, 11 de maio de 1981) foi um cantor, compositor, multi-instrumentista jamaicano e o mais conhecido músico de reggae de todos os tempos, famoso por popularizar internacionalmente o gênero. Já vendeu mais de 75 milhões de discos e, em 1978, três anos antes de sua morte, foi condecorado pela ONU com a \"Medalha da Paz do Terceiro Mu\n[…]\nAo invés disso, o artista jamaicano recorreu ao tratamento naturalista e polêmico da clínica Ringberg, do Dr. Josef Issels, na Alemanha, entre o final de 1980 e o início de 1981, pela indicação do Dr. Carl Fraser, um dos médicos favoritos entre os rastafáris na época. Durante algum tempo, o estado de Marley parecia ter se estabilizado e o músico e sua família chegaram a acreditar que poderia haver esperanças de uma recuperação.\n[…]\nFinalmente, no início de maio de 1981, o Dr. Issels avisou que nada mais poderia ser feito e Bob Marley, já abatido pela doença, decidiu que era hora de retornar para sua casa na Jamaica para passar seus últimos dias junto à família e aos amigos. Entretanto, ele não conseguiu completar a viagem: o cantor passou muito mal no avião a caminho do país caribenho tendo que ser internado às pressas em um hospital de Miami quando o voo fez escala no aeroporto da cidade.\n[…]\nSua mãe e alguns parentes e amigos residiam na cidade e fizeram companhia a ele naqueles últimos momentos. O artista morreu pouco antes do meio-dia de 11 de maio de 1981, menos de 40 horas depois de deixar a Alemanha e pouco mais de 3 meses após completar 36 anos de idade.\n[…]\nA última filha de Bob Marley, Makeda Jahnesta Marley, nasceu em Miami, no dia 30 de maio de 1981, semanas após a morte do ídolo do reggae mundial, fruto da relação do cantor com Yvette Crichton. Ela formou-se em administração na Universidade da Pensilvânia.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Brian May",
      "descricao": "Guitarrista britânico, integrante fundador do Queen"
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "O guitarrista Brian May, do Queen, concluiu um doutorado em que área científica?",
    "resposta": "Astrofísica",
    "distratores": [
      "Química",
      "Medicina",
      "Geologia"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Brian_May"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Brian_May",
        "situacao": "ok",
        "texto": "Sir Brian Harold May (born 19 July 1947) is an English musician, animal welfare activist, and astrophysicist. He achieved global fame as the lead guitarist and backing vocalist of the rock band Queen, which he co-founded with singer Freddie Mercury and drummer Roger Taylor. His guitar work and songwriting contributions helped Queen become one of the most successful acts in music history.\n[…]\nFormer Van Halen vocalist Sammy Hagar stated, \"I thought Queen were really innovative and made some great sounding records... I like the rockin' stuff. I think Brian May has one of the great guitar tones on the planet, and I really, really love his guitar work.\" Justin Hawkins, lead guitarist of the Darkness, cites May as his earliest influence, saying \"I really loved his tone and vibrato and everything. I thought his playing sounded like a singing voice. I wanted to be able to do that.\n[…]\nWhenever I went to guitar lessons, I was always asking to learn Queen stuff.\"\n[…]\nMay is a long-term champion of woodland as a haven and \"corridor\" for wildlife—both in Surrey, where he has a house, and elsewhere. In 2012, he bought land threatened by building development at Bere Regis, Dorset, and, in 2013 and with the enthusiastic support of local villagers, initiated a project to create an area of woodland, now called May's Wood (or \"the Brian May Wood\").\n[…]\nIn May 2013, May teamed up with actor Brian Blessed and Flash cartoonist Jonti \"Weebl\" Picking, as well as animal welfare groups including the RSPCA, to form Team Badger, a \"coalition of organisations that have teamed up to fight the planned cull of badgers\". With Weebl and Blessed, May recorded a single, \"Save the Badger Badger Badger\"—a mashup of Weebl's viral 2003 Flash cartoon meme, \"Badger Badger Badger\", and Queen's \"Flash\", featuring vocals by Blessed.\n[…]\nWith Queen\n[…]\nMedia related to Brian May at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Brian_May",
        "situacao": "ok",
        "texto": "Sir Brian Harold May CBE (Hampton Hill, 19 de julho de 1947) é um músico e astrofísico inglês, famoso por integrar a banda britânica de rock Queen, como guitarrista e compositor. Também construiu uma guitarra elétrica conhecida como Red Special. Algumas de suas composições para o grupo são \"We Will Rock You\", \"Tie Your Mother Down\", \"The Show Must Go On\", \"I Want It All\", \"Who Wants to Live Foreve\n[…]\nEm dezembro de 2005, Brian foi homenageado com um CBE Commander, Medalha da Ordem do Império Britânico, por Sua Majestade a Rainha, em reconhecimento dos seus serviços para a música e obras de caridade. Após isso, concluiu seu doutorado em astrofísica no Imperial College, em 2007. Foi ainda chanceler da Liverpool John Moores University entre os anos de 2008 e 2013. É também defensor ativo dos direitos dos animais.\n[…]\nEm 2007, após uma pausa de 30 anos nos estudos universitários (estava atuando em sua carreira musical), Brian voltou ao Imperial College, de Londres, para se inscrever para completar a sua tese de doutorado em Astrofísica, e em um ano, submeteu com sucesso a nova versão da sua tese sobre poeira interplanetária.\n[…]\nNo ano de 1997, Brian May tocou em várias ocasiões com Joe Satriani & Steve Vai.\n[…]\nBrian May graduou-se bacharel em física pelo Imperial College London, com honras de ser o segunda classe. Entre 1970 e 1974, cursou doutorado no Imperial College London. Quando o Queen começou a ter sucesso internacional em 1974, ele abandonou seus estudos de doutorado, mas foi co-autor de duas pesquisa publicadas em periódicos científicos de grande respeito, a Nature e Monthly Notices of the Royal Astronomical Society.\n[…]\nCom o Queen\n[…]\nQueen\n[…]\n«Guitarrista do Queen tentará completar doutorado em astronomia»\n[…]\nBrian May, guitarrista do Queen revela que sobreviveu a um ataque cardíaco\n[…]\n«Red Special: uma lenda criada por Brian May»\n[…]\n«Site oficial da Brian May Guitars Brasil»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Video Killed the Radio Star",
      "descricao": "Canção do duo britânico The Buggles lançada em 1979"
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Que canção do grupo britânico The Buggles foi o primeiro clipe exibido pela MTV, em 1981?",
    "resposta": "Video Killed the Radio Star",
    "fonte": [
      "https://en.wikipedia.org/wiki/Video_Killed_the_Radio_Star"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Video_Killed_the_Radio_Star",
        "situacao": "ok",
        "texto": "\"Video Killed the Radio Star\" is a song written by Trevor Horn, Geoff Downes, and Bruce Woolley in 1979. It was recorded concurrently by Bruce Woolley and the Camera Club (with Thomas Dolby on keyboards) for their debut studio album, English Garden, and by British new wave/synth-pop group the Buggles, which consisted of Horn and Downes (and initially Woolley).\n[…]\nThe Buggles' version of \"Video Killed the Radio Star\" is a new wave and synth-pop song. It performs like an extended jingle, sharing its rhythm characteristics with disco. The piece plays in common time at a bright tempo of 132 beats per minute. It is in the key of D♭ major, and six basic chords are used in the song's chord progression.\n[…]\nZimmer recalled in 2001 that the video drew criticism from some viewers who watched it before it aired on MTV, due to being \"'too violent' because we blew up a television.\" The music video for Video Killed the Radio Star is notable as the first video ever played on MTV, when the US channel began broadcasting at 12:01 AM on 1 August 1981. On 27 February 2000, it became the one millionth video to be broadcast on MTV. It also opened MTV Classic in the UK and Ireland.\n[…]\nIn November 2006, the Producers played at their first gig in Camden Town. A video clip can be seen on ZTT Records of Horn singing lead vocals and playing bass in a performance of \"Video Killed the Radio Star\". Tina Charles appears on a YouTube video singing \"Slave to the Rhythm\" with the Producers and Horn reveals that Charles was the singer and originator of the \"Oh Ah-Oh Ah-Oh\" part of the song; fellow 5000 Volt member Martin Jay was also a session musician on The Buggles record.\n[…]\nThe song's name will be used for the upcoming British horror film Video Killed the Radio Star, which takes place in 1979, the same year the song was recorded and released in.\n[…]\nVideo Killed the Radio Star (film)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Video_Killed_the_Radio_Star",
        "situacao": "ok",
        "texto": "\"Video Killed The Radio Star\" é uma canção da banda de pop rock inglesa The Buggles incluída no primeiro disco da banda, The Age of Plastic (1980). Foi também o primeiro e o último videoclipe a ser exibido na MTV.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Céline Dion",
      "descricao": "Cantora canadense de língua francesa e inglesa, intérprete de My Heart Will Go On"
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Em 1988, a canadense Céline Dion venceu o Eurovision representando que país europeu?",
    "resposta": "Suíça",
    "distratores": [
      "França",
      "Bélgica",
      "Luxemburgo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/C%C3%A9line_Dion",
      "https://en.wikipedia.org/wiki/Ne_partez_pas_sans_moi"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/C%C3%A9line_Dion",
        "situacao": "ok",
        "texto": "Céline Marie Claudette Dion (born 30 March 1968) is a Canadian singer, entrepreneur and philanthropist. Dubbed the \"Queen of Power Ballads\", she is known for her impact on popular music through powerful, technically skilled vocals and commercially successful works. With over 200 million records sold worldwide, Dion is the best-selling Canadian recording artist, the best-selling French-language art\n[…]\nBorn into a large family in Charlemagne, Quebec, Dion was discovered by her future manager and husband, René Angélil, and emerged as a teen star in her home country with eight French-language albums during the 1980s. She gained international recognition by winning the Eurovision Song Contest 1988, where she represented Switzerland with the song \"Ne partez pas sans moi\".\n[…]\nBy 1983, in addition to becoming the first Canadian artist to receive a gold record in France for the single \"D'amour ou d'amitié\" (\"Of Love or of Friendship\"), Dion had also won several Félix Awards, including \"Best Female performer\" and \"Discovery of the Year\". Further success came when she represented Switzerland in the Eurovision Song Contest 1988 with the song \"Ne partez pas sans moi\" and won the contest by a close margin.\n[…]\nTheir professional relationship eventually turned romantic after Dion's win at the Eurovision Song Contest 1988, when she was 20. The romance was known to only family and friends for five years, though Dion nearly revealed it in a tearful 1992 interview with journalist Lise Payette. Many years later, Payette penned the song \"Je cherche l'ombre\" for Dion's 2007 album D'elles.\n[…]\nCeline Dion Paris 2026–2027\n[…]\nCéline Dion. The Canadian Encyclopedia. Retrieved 2 July 2006\n[…]\nMichaels, Sean (22 July 2011). \"Celine Dion shuts down parody website\". The Guardian. London. Retrieved 22 July 2011.\n[…]\nCeline Dion on the Internet Archive\n[…]\nCeline Dion at AllMusic\n[…]\nCeline Dion at Billboard.com\n[…]\nCeline Dion at IMDb"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Ne_partez_pas_sans_moi",
        "situacao": "ok",
        "texto": "\"Ne partez pas sans moi\" (lit. 'Don't leave without me') is a song recorded by Canadian singer Celine Dion, with music by Atilla Şereftuğ and lyrics by Nella Martinetti. It represented Switzerland in the Eurovision Song Contest 1988, held in Dublin, where it won. It remains the most recent French-language entry to win the contest.\n[…]\nOn 30 April 1988, the Eurovision Song Contest took place at the RDS Simmonscourt Pavilion in Dublin. It was hosted by Radio Telefís Éireann (RTÉ) and broadcast live across Europe. Dion performed \"Ne partez pas sans moi\" ninth on the night. Şereftuğ conducted the orchestra for the Swiss entry. The broadcast was watched by an estimated 600 million viewers worldwide.\n[…]\n\"Ne partez pas sans moi\" is often regarded as one of the most recognisable Eurovision entries, partly due to Dion's later international career. It was included on Dion's 1988 album The Best of Celine Dion, released in selected European countries in May 1988. In Canada, the song appeared as the B-side to \"D'abord, c'est quoi l'amour\". It also appeared on the French edition of Dion's album Incognito. In 2005, it was added to her French compilation album On ne change pas.\n[…]\nAs the winning broadcaster, the European Broadcasting Union (EBU) assigned SRG SSR the responsibility of hosting the following edition of the Eurovision Song Contest. The event, held on 6 May 1989, opened with Dion performing \"Ne partez pas sans moi\" and the premiere of her first English-language single \"Where Does My Heart Beat Now\". She also presented the trophy to the winner.\n[…]\nAlthough the single sold 200,000 copies in Europe within two days and over 300,000 copies overall, it is regarded as one of the less commercially successful Eurovision winners. It was also the first winning song not released in the United Kingdom or Ireland.\n[…]\nEuropean 7-inch single"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/C%C3%A9line_Dion",
        "situacao": "ok",
        "texto": "Céline Marie Claudette Dion (Charlemagne, 30 de março de 1968) é uma cantora, compositora, empresária e filantropa canadense. Apelidada de \"Rainha das Power Ballads\", ela é conhecida por sua voz poderosa e tecnicamente impecável, além de seus trabalhos de grande sucesso comercial, que tiveram um impacto significativo na música popular.\n[…]\nNascida em uma família numerosa em Charlemagne, Quebec, Dion foi descoberta por seu futuro empresário e marido, René Angélil, e emergiu como uma estrela adolescente em seu país natal com oito álbuns em francês durante a década de 1980. Ela alcançou reconhecimento internacional ao vencer o Festival Eurovisão da Canção de 1988, onde representou a Suíça com a canção \"Ne partez pas sans moi\".\n[…]\nEm 1983, ela se tornou a primeira artista canadense a receber um disco de ouro na França pelo single \"D'amour ou d'amitié\". Além disso, Dion ganhou diversos Félix Awards, incluindo \"Melhor Performance Feminina\" e \"Descoberta do Ano\". O sucesso na Europa veio quando Dion representou a Suiça no Festival Eurovisão da Canção 1988, com a música \"Ne partez pas sans moi\" e venceu o concurso. Em 1989, ela passou por uma cirurgia dentária para melhorar sua aparência.\n[…]\nEm 2009, Céline engravidou mas sofreu um aborto espontâneo nos primeiros meses de gestação. Após este aborto, Dion engravidou novamente, dando à luz os gêmeos Nelson e Eddy no dia 23 de outubro de 2010.\n[…]\nLoved Me Back to Life recebeu certificado de Ouro na Bélgica, Suíça, Polônia, Hungria e África do Sul, e vendeu 1,5 milhão de cópias em todo o mundo.\n[…]\nEm 13 de maio de 2025, Dion apareceu em uma mensagem de vídeo durante a primeira semifinal do Festival Eurovisão da Canção 2025 em Basileia, Suíça, antes de uma apresentação de tributo de sua canção vencedora do Eurovision \"Ne partez pas sans moi\".\n[…]\nCéline Dion no Allmusic\n[…]\nCéline Dion no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "At Folsom Prison",
      "descricao": "Álbum ao vivo de Johnny Cash gravado em 1968"
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em 1968, Johnny Cash gravou um de seus discos ao vivo mais famosos num lugar inusitado da Califórnia. Qual?",
    "resposta": "Prisão de Folsom",
    "fonte": [
      "https://en.wikipedia.org/wiki/At_Folsom_Prison"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/At_Folsom_Prison",
        "situacao": "ok",
        "texto": "At Folsom Prison is the first live album by American singer-songwriter Johnny Cash, released by Columbia Records on May 6, 1968. It was recorded at Folsom State Prison, California, on January 13, 1968.\n[…]\nJohnny Cash became interested in Folsom State Prison, California, while serving in the United States Air Force Security Service. In 1953, his unit watched Crane Wilbur's 1951 film Inside the Walls of Folsom Prison. The film inspired Cash to write a song that reflected his perception of prison life. The result was \"Folsom Prison Blues\", Cash's second single on Sun Records. The song became popular among inmates, who would write to Cash, requesting him to perform at their prisons.\n[…]\nCash's first prison performance was at Huntsville State Prison in 1957. Satisfied by the favorable reception, he performed at several other prisons in the years leading up to the Folsom performance in 1968.\n[…]\nOn January 10, 1968, Cash and his future wife, singer June Carter, registered at the El Rancho Motel in Sacramento, California. They were later accompanied by the Tennessee Three, Carl Perkins, the Statler Brothers, Johnny's father Ray Cash, Reverend Floyd Gressett, pastor of Avenue Community Church in Ventura, California (where Cash often attended services), who counseled inmates at Folsom and helped facilitate the concert and producer Johnston.\n[…]\nJohnny Cash – vocals, guitar, harmonica\n[…]\nStreissguth, Michael (2004). Johnny Cash at Folsom Prison: The Making of a Masterpiece (1st ed.). Cambridge, MA: Da Capo Press. ISBN 0-306-81453-6.\n[…]\nStreissguth, Michael (May 7, 2018). \"Johnny Cash's 'At Folsom Prison' at 50: An Oral History\". Rolling Stone. Retrieved October 1, 2023."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/At_Folsom_Prison",
        "situacao": "ok",
        "texto": "At Folsom Prison é um álbum ao vivo de Johnny Cash, lançado em 1968.\n[…]\n1. Folsom Prison Blues",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Show no telhado dos Beatles",
      "descricao": "Apresentação improvisada dos Beatles em 30 de janeiro de 1969 no alto do prédio da Apple, em Londres"
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em janeiro de 1969, onde os Beatles fizeram seu último show público, que terminou com a chegada da polícia?",
    "resposta": "No telhado do prédio da Apple, em Londres",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Beatles%27_rooftop_concert"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Beatles%27_rooftop_concert",
        "situacao": "ok",
        "texto": "On 30 January 1969, the Beatles performed a concert from the rooftop of their Apple Corps headquarters at 3 Savile Row, in central London's office and fashion district. Joined by guest keyboardist Billy Preston, the band played a 42-minute set before the Metropolitan Police arrived and told them to reduce the volume. It was the final public performance of their career.\n[…]\nFootage was later used in the 2021 documentary series The Beatles: Get Back. On 28 January 2022, the audio of the performance was released by Apple Corps, Capitol Records, and Universal Music Enterprises to streaming services under the title Get Back – The Rooftop Performance. In February 2022, Disney released the concert sequence from The Beatles: Get Back in IMAX as The Beatles: Get Back – The Rooftop Concert.\n[…]\nAlthough the rooftop concert was unannounced, the original intention behind the Beatles' Get Back project had been for the band to stage a comeback as live performers. The idea of a large public show was sidelined, however, as one of George Harrison's conditions for returning to the group after he had walked out of the filmed rehearsals on 10 January.\n[…]\nThe first releases were in May 1970. Let It Be, the band's 12th and final studio album, includes the first performance of \"I've Got a Feeling\" and the recordings of \"One After 909\" and \"Dig a Pony\". Footage of the concert was included in Let It Be, the documentary film directed by Michael Lindsay-Hogg for the Beatles' Apple Corps media company.\n[…]\nOn 28 January 2022, the audio of the performance was released by Apple Corps, Capitol Records, and Universal Music Enterprises to streaming services under the title Get Back – The Rooftop Performance.\n[…]\nOutline of the Beatles\n[…]\nThe Beatles timeline\n[…]\nList of the Beatles' live performances\n[…]\nDon't Let Me Down from the rooftop\n[…]\nFormer Apple executive Ken Mansfield's recollections of the concert"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rooftop_Concert",
        "situacao": "ok",
        "texto": "Rooftop Concert (\"concerto do terraço\", em tradução literal) foi a última apresentação pública da banda de rock inglesa The Beatles, com a participação do tecladista Billy Preston. Iniciando-se ao meio-dia de 30 de janeiro de 1969, no terraço do edifício da Apple Corps (empresa fundada pela banda), terminou em confusão, ameaças e discussões com a Polícia Metropolitana de Londres, que pediu o encer\n[…]\nOs Beatles compraram o prédio da Apple Corps na 3 Savile Row em 1968, instalando um estúdio no porão, onde foram gravadas as sessões \"Get Back\" (que mais tarde se tornariam o álbum Let It Be). A banda havia realizado sua última apresentação pública, até então, no Candlestick Park, São Francisco, em 1966.\n[…]\nEles conceberam a ideia de retornar às apresentações públicas no início de janeiro de 1969 e conversavam em estúdio sobre lugares inusitados para realizar este concerto, como um barco em movimento, um anfiteatro grego ou ainda no centro de artes cênicas Roundhouse, em Londres, dentre outros. De acordo com o autor e historiador Mark Lewisohn, não se sabe ao certo quem teve a ideia do concerto no terraço.\n[…]\nEm 42 minutos, o concerto consistiu em nove tomadas de cinco músicas dos Beatles: três tomadas de \"Get Back\"; duas tomadas de \"Don't Let Me Down\" e \"I've Got a Feeling\"; e uma tomada de \"One After 909\" e \"Dig a Pony\". Em 28 de janeiro de 2022, o áudio da apresentação completa no telhado foi lançado nos serviços de streaming como The Beatles: Get Back — The Rooftop Performance. O conjunto foi realizado na seguinte ordem:\n[…]\nA banda indie James fez um show semelhante no 22.º aniversário da versão original, em 30 de janeiro de 1991, no terraço de um hotel na rua Piccadilly, em Londres. Eles tocaram cinco músicas, antes que, supostamente, os dedos do guitarrista Larry Gott congelassem-se no braço de seu instrumento.\n[…]\n\"Don't Let Me Down\" - ao vivo no Rooftop Concert",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Cajón",
      "descricao": "Instrumento de percussão em forma de caixa de madeira, sobre o qual o músico se senta"
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "O cajón, caixa de madeira que virou marca do flamenco, nasceu em que país sul-americano?",
    "resposta": "Peru",
    "distratores": [
      "Argentina",
      "Chile",
      "Colômbia"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Caj%C3%B3n"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Caj%C3%B3n",
        "situacao": "ok",
        "texto": "A cajón (Spanish: [kaˈxon] ka-KHON; \"box, crate, drawer\") is a box-shaped percussion instrument originally from Peru, played by slapping the front or rear faces (generally thin plywood) with the hands, fingers, or sometimes implements such as brushes, mallets, or sticks.\n[…]\nCajóns are primarily played in Afro-Peruvian music (specifically música criolla), but have made their way into flamenco as well. The term cajón is also applied to other box drums used in Latin American music, such as the Cuban cajón de rumba and the Mexican cajón de tapeo.\n[…]\nThe cajón is the most widely used Afro-Peruvian musical instrument since the late 19th century. Enslaved people of west and central African origin in the Americas are considered to be the source of the cajón drum. Currently, the instrument is common in musical performance throughout some of the Americas and Spain. The cajón was developed during the periods of slavery in coastal Peru.\n[…]\nWhile early 20th century versions of the festejo appeared to have been performed without the cajón, especially due to the influence of Perú Negro, a musical ensemble founded in 1969, the cajón began to be more important than the guitar and, indeed, became \"a new symbol of Peruvian blackness\".\n[…]\nIn 2001, the cajón was declared National Heritage by the Peruvian National Institute of Culture. In 2014, the Organization of American States declared the cajón an \"Instrument of Peru for the Americas\".\n[…]\nOn the other hand, it also restricts the player's standard cajón-playing position, as when the cajón is placed on the ground, in the bass drum location, it is hard for the performer to slap it with their hands.\n[…]\nEl Cajon (disambiguation)\n[…]\nHow to Build a Cajón"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Caj%C3%B3n",
        "situacao": "ok",
        "texto": "Na música, o cajón (aumentativo da palavra espanhola \"caja\": \"caixa\", \"gaveta\"), é um instrumento de percussão que teve sua origem no contexto do Peru Colonial, onde os escravos africanos, separados de seus instrumentos de percussão pelos feitores da época, utilizaram-se de caixas de madeira e gavetas (outra tradução para cajón) para tocarem seus ritmos. Daí dizer que sua origem é afro-peruana. Co\n[…]\nO cajón atravessou as fronteiras do Peru e tem encontrado espaço nas expressões musicais de diferentes culturas no mundo. Paco de Lucia foi um dos principais responsáveis pela introdução do instrumento na música flamenca. Com uma sonoridade tida como ideal para acompanhar as palmas, sapateado e a sonoridade das guitarras flamencas, o cajón popularizou-se. Hoje é tão comum a presença do instrumento nas apresentações flamencas que muitos imaginam que sua origem é espanhola.\n[…]\nO cajón é o instrumento musical afro-peruano mais amplamente utilizado desde o final do século XIX. Pessoas escravizadas de origem africana ocidental e centro-africana nas Américas são consideradas a fonte do cajón. Atualmente, o instrumento é comum em apresentações musicais em partes das Américas e da Espanha. O cajón foi desenvolvido durante os períodos de escravidão na costa do Peru.\n[…]\nEnquanto versões do festejo do início do século XX pareciam ser executadas sem cajón — especialmente devido à influência do grupo musical Perú Negro, fundado em 1969 —, o cajón passou gradualmente a se tornar mais importante do que o violão e, de fato, tornou-se “um novo símbolo da negritude peruana”.\n[…]\nEm 2001, o cajón foi declarado Patrimônio Nacional pelo Instituto Nacional de Cultura do Peru. Em 2014, a Organização dos Estados Americanos declarou o cajón um “Instrumento do Peru para as Américas”.==Referências==",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  }
]

---

# MANIFESTO

# Manifesto de Perguntas — Mestre2

> **Versão preliminar 0.34 — 2026-10-01**
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
- no máximo **2 perguntas com o mesmo ângulo** para uma mesma âncora, no banco inteiro.

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

> **Por enquanto, o gerador automático não cria perguntas com figura.** Elas só são escritas por quem tem a imagem em mãos e a examinou. Uma pergunta sem o campo `imagem` nunca se refere a uma foto ou figura.

- **A figura é a pergunta.** A resposta sai de **reconhecer o que a imagem mostra**: "Que cidade é esta?", "Que animal é este?", "Qual é este pokémon?", "Quem pintou este quadro?", "Em que museu fica este quadro?". Teste: se trocar "este animal" pelo nome dele deixasse a pergunta igualmente boa, a figura é só enfeite, e a pergunta está errada.
- **O enunciado é curto** e diz o que se deve reconhecer (cidade, animal, monumento). Pode trazer uma pista que ajude, desde que não entregue a resposta.
- **Âncora e ângulo:** a âncora é o que aparece na figura. Perguntar o que ela é dá o ângulo `identidade`; perguntar algo que só se sabe depois de reconhecê-la usa o ângulo correspondente (`autoria` para o pintor, `lugar` para o museu). As regras de variedade (§9), que limitam `identidade`, valem para os lotes do gerador e não para as perguntas com figura.
- **Tipos de figura:** lugares (cidades, monumentos, paisagens), animais, plantas, objetos e artesanato, festas populares, contornos de mapa, personagens de lendas e obras de arte em domínio público (pinturas, gravuras). Obras com direitos autorais, como as de Tarsila do Amaral, Portinari ou Dalí, ficam de fora.
- **Um único assunto por imagem:** nada de montagens nem pranchas com várias espécies. Vale foto; ilustração ou escultura só para o que não pode ser fotografado, como os personagens de lendas (Saci, Mula sem cabeça).
- **Pessoas:** figuras públicas, ou brincantes e participantes de festas públicas (Parintins, bumba meu boi, cavalhadas). Fotos de pessoas comuns em outros contextos continuam proibidas.
- **Recorte permitido:** uma placa ou legenda que entregue a resposta pode ser cortada da imagem, já que as licenças livres permitem obras derivadas.
- **Só imagens do Wikimedia Commons**, com licença livre (CC BY, CC BY-SA ou domínio público). Autor e licença são sempre registrados.
- **Exceção, Pokémon:** a arte oficial, com o crédito "© Nintendo / Creatures / GAME FREAK", e a Bulbapedia como fonte da âncora e da pergunta. A imagem vem do Bulbagarden Archives ou, como a Bulbapedia bloqueia acesso automatizado, da mesma arte oficial no repositório público do PokéAPI (`raw.githubusercontent.com/PokeAPI/sprites`), que fica registrado em `origem`. É uso privado, num jogo entre amigos, e não licença livre.
- **Proibido:** capas de álbuns, pôsteres, logotipos e fotos de imprensa.

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
- num lote de figuras de um tema, **pelo menos três famílias** e **pelo menos três catálogos**;
- nenhum catálogo passa de **40%** das perguntas com figura do seu tema;
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
