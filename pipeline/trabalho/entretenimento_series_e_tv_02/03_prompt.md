Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Séries e TV** (tema **Entretenimento**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "The Office (série americana)",
      "descricao": "Sitcom americana exibida de 2005 a 2013, em estilo de falso documentário, sobre os funcionários de uma filial da empresa de papel Dunder Mifflin."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Na versão americana de The Office, a filial da empresa de papel Dunder Mifflin fica em que cidade da Pensilvânia?",
    "resposta": "Scranton",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Office_(American_TV_series)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Office_(American_TV_series)",
        "situacao": "ok",
        "texto": "The Office is an American mockumentary sitcom television series. It is based on the BBC series The Office created by Ricky Gervais and Stephen Merchant, and adapted for NBC by Greg Daniels. The show depicts the everyday work lives of office employees at the Scranton, Pennsylvania branch of the fictional Dunder Mifflin Paper Company. It aired from March 24, 2005, to May 16, 2013, for a total of nin\n[…]\nAfter this and a stint in rehab, he again eventually ends up as a temporary worker at the Scranton branch.\n[…]\nWhile Wallace and other executives are let go, the Scranton office survives due to its relative success within the company. Michael Scott is now the highest-level employee at Dunder Mifflin. In the season finale, Dwight buys the office park. Michael agrees to make an announcement to the press regarding a case of faulty printers. When Jo Bennett, Sabre CEO, asks how she can repay him, Michael responds that she could bring Holly back to the Scranton branch.\n[…]\nThe city of Scranton, long known mainly for its industrial past as a coal mining and rail center, has embraced, and ultimately has been redefined by the show. \"We're really hip now\", said the mayor's assistant. The Dunder Mifflin logo is on a lamppost banner in front of Scranton City Hall, as well as the pedestrian bridge to The Mall at Steamtown. In 2007, the Pennsylvania Paper & Supply Company, whose tower is shown in the opening credits, planned to add it to the tower as well.\n[…]\nNewspapers in other Northeastern cities have published travel guides to Scranton locations for tourists interested in visiting places mentioned in the show. Scranton has become identified with the show outside the United States as well. In a 2008 St. Patrick's Day speech in its suburb of Dickson City, former Taoiseach (the Irish Head of Government) Bertie Ahern identified the city as the home of Dunder Mifflin.\n[…]\nThe Office at Rotten Tomatoes"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/The_Office_%28Estados_Unidos%29",
        "situacao": "ok",
        "texto": "The Office é uma série de televisão norte-americana em formato de mocumentário criada por Greg Daniels e exibida pela NBC. É baseada na sitcom homônima britânica, transmitida entre 2001–2003 pela BBC e concebida por Ricky Gervais e Stephen Merchant. O programa retrata o cotidiano dos funcionários da filial da empresa de papel Dunder Mifflin em Scranton, Pensilvânia, e foi ao ar de 24 de março de 2\n[…]\nO tema é tocado sobre imagens de Scranton, na Pensilvânia, incluindo a torre da Pennsylvania Paper and Supply Company. O ator John Krasinski realizou as filmagens da abertura quando soube que havia sido escalado como Jim. Ele visitou a cidade para pesquisa e entrevistou funcionários de empresas de papel reais. Alguns episódios usam uma versão abreviada da música-tema. A partir da quarta temporada, ela também é tocada sobre os créditos finais, que antes passavam em silêncio.\n[…]\nMuitos papéis de The Office são baseados em personagens da série original. Embora esses geralmente tenham as mesmas atitudes e percepções que seus equivalentes britânicos, foram modificados para se adequarem ao público estadunidense. The Office é conhecido por seu elenco relativamente grande e muitos de seus atores e atrizes são notórios, em particular, pelo trabalho de improvisação. Steve Carell estrela como Michael Scott, gerente regional da filial da Dunder Mifflin em Scranton.\n[…]\nJornais do Nordeste dos Estados Unidos publicaram guias de viagem para turistas interessados em visitar lugares mencionados no programa. A cidade passou a ser identificada também internacionalmente. Em um discurso no Dia de São Patrício em 2008 no distrito de Dickson City, o ex-taoiseach (chefe de governo irlandês) Bertie Ahern identificou Scranton como o lar da Dunder Mifflin.\n[…]\nEste artigo foi inicialmente traduzido, total ou parcialmente, do artigo da Wikipédia em inglês cujo título é «The Office (American TV series)».",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Família Soprano",
      "descricao": "Série dramática americana de 1999 sobre o mafioso Tony Soprano, exibida pela HBO."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "A série Família Soprano, sobre o mafioso Tony Soprano, se passa principalmente em que estado americano, vizinho de Nova York e banhado pelo rio Hudson?",
    "resposta": "Nova Jersey",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Sopranos"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Sopranos",
        "situacao": "ok",
        "texto": "The Sopranos is an American crime drama television series created by David Chase for HBO. The series follows Tony Soprano (James Gandolfini), a New Jersey Mafia boss. Suffering from panic attacks, he reluctantly begins seeing psychiatrist Dr. Jennifer Melfi (Lorraine Bracco), who encourages him to open up about his difficulties balancing his family life with his criminal activities.\n[…]\nHe drew heavily from his personal life and his experiences growing up in an Italian-American family in New Jersey, and has stated that he tried to apply his own \"family dynamic to mobsters\". For instance, the tumultuous relationship between series protagonist Tony Soprano and his mother Livia is partially based on Chase's relationship with his own mother. He was also in psychotherapy at the time and modeled the character of Jennifer Melfi after his own psychiatrist.\n[…]\nTony mulls over the decision to let him back into the crew, as well as whether to let him live. When Tony fails to act, Phil intervenes and brutally executes Vito. When one of the members of the New York family, Fat Dom Gamiello, pays a visit to the Jersey office and won't stop making jokes about Vito and his death, Silvio Dante and Carlo Gervasi kill Fat Dom out of anger at his disrespect. Once more, it appears that the families are on the verge of an all-out war.\n[…]\nIn 2000, officials in Essex County, New Jersey, denied producers permission to film scenes in the South Mountain Reservation, which is county-owned property, by Essex County, New Jersey Executive James Treffinger, who argued that the show depicts Italian Americans \"in stereotypical fashion\". In 2002, organizers of the New York City Columbus Day Parade won an injunction preventing Mayor Michael Bloomberg from inviting cast members of The Sopranos to participate in the parade.\n[…]\nWise Guy: David Chase and the Sopranos – 2024 American documentary film"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/The_Sopranos",
        "situacao": "ok",
        "texto": "The Sopranos (no Brasil, Família Soprano e em Portugal, Os Sopranos) foi uma premiada série de televisão dramática americana criada por David Chase e produzida pela HBO. A série acompanha a vida de Tony Soprano (James Gandolfini), um mafioso ítalo-americano de Nova Jersey que depois de uma crise de pânico, procura ajuda profissional. É a Dra. Jennifer Melfi (Lorraine Bracco) quem o ajuda a lidar c\n[…]\nFoi filmado quase toda no Silvercup Studios em Nova Iorque, e em locações de Nova Jersey. Seus produtores executivos foram David Chase, Brad Grey, Robin Green, Mitchell Burgess, Ilene S. Landress, Terence Winter e Matthew Weiner.\n[…]\nAnthony \"Tony\" Soprano (James Gandolfini): personagem principal. No início da série é capitão e ascende a chefe da família em substituição ao seu tio. Sofre de síndrome do pânico. É um mafioso da velha guarda, guardião dos antigos costumes da Máfia.\n[…]\nCom a demora que Tony leva para decidir, Phil Leotardo intervém e mata Spatafore. Quando um dos membros da família de Nova Iorque, \"Fat Dom\" Gamiello, faz uma visita a Newark e conta várias piadas sobre Vito e sua morte, os dois capos Sopranos presentes matam Fat Dom, com raiva pela falta de respeito. Com isso, fica claro que as famílias estão a poucos passos de uma guerra.\n[…]\nEle ordena as execuções de Bobby Baccalieri, que é alvejado até a morte, Silvio, que entra em coma, e Tony, que consegue se esconder. A direção da família Lupertazzi insubordina-se contra Phil, e ignora a ordem para matar Tony, dando-lhe uma oportunidade para ir atrás de Phil. Um agente do FBI informa a localização de Phil. Tony suspeita que Carlo, um capo de Nova Jérsei, tornou-se informante para livrar o filho, que recentemente fora preso por traficar de drogas.\n[…]\nQuando Meadow entra no restaurante, a tela se volta para o rosto de Tony e a série se encerra, deixando o destino tanto seu como de sua família como um mistério.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Downton Abbey",
      "descricao": "Série britânica criada por Julian Fellowes sobre a aristocrática família Crawley e seus criados, no início do século vinte."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Que castelo inglês fez o papel da mansão da família Crawley nas gravações de Downton Abbey?",
    "resposta": "Castelo de Highclere",
    "fonte": [
      "https://en.wikipedia.org/wiki/Highclere_Castle",
      "https://en.wikipedia.org/wiki/Downton_Abbey"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Highclere_Castle",
        "situacao": "ok",
        "texto": "Highclere Castle  is a Grade I listed country house built in 1679 and largely renovated during the 1840s, with a park designed by Capability Brown in the 18th century. The 5,000-acre (2,000-hectare) estate is in Highclere, Hampshire, England, about five miles (eight kilometres) south of Newbury, Berkshire, and 9+1⁄2 miles (15 kilometres) north of Andover, Hampshire. The 19th-century renovation is \n[…]\nHighclere Castle has been used as a filming location for several films and television series, including the 1990s comedy series Jeeves and Wooster. It achieved international fame as the main location for the ITV historical drama series Downton Abbey (2010–2015) and the 2019, 2022 and 2025 films based on it.\n[…]\nThe castle was used as the main filming location for the ITV/PBS drama series Downton Abbey, which brought the castle international fame. The increased numbers of visitors to the castle have allowed for repairs on Highclere's turrets and its interior. The family now live in Highclere Castle at various times throughout the year, but return to their cottage when the castle is open to the public. A Lego set based on the castle's appearance in Downton Abbey is set to be released in October 2026.\n[…]\nThe hybrid holly Ilex x altaclerensis (Highclere holly) was developed here in 1835 by hybridising the Madeiran Ilex perado (grown in a greenhouse) with the local native Ilex aquifolium. This hybrid and its offspring are still used as garden plants almost 200 years later.\n[…]\nHighclere Castle launched its own gin brand in 2019 called Highclere Castle Gin. It is the first gin to earn a perfect score, 100 points from the Major League Spirits Association (MLSA)\n[…]\nHighclere Castle entry from The DiCamillo Companion to British & Irish Country Houses\n[…]\nHighclere Castle on The Internet Movie Database\n[…]\nLady Almina and the Real Downton Abbey: The Lost Legacy of Highclere Castle"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Downton_Abbey",
        "situacao": "ok",
        "texto": "Downton Abbey is a British historical drama television series set in the early 20th century, created and co-written by Julian Fellowes. It first aired in the United Kingdom on ITV on 26 September 2010 and in the United States on PBS, which supported its production as part of its Masterpiece Classic anthology, on 9 January 2011. The show ran for fifty-two episodes across six series, including five \n[…]\nThe filming location, Highclere Castle, in reality served as a convalescent home during World War I.\n[…]\nHighclere Castle in north Hampshire is used for exterior shots of Downton Abbey and most of the interior filming. The kitchen, servants' quarters and working areas, and some of the \"upstairs\" bedrooms were constructed and filmed at Ealing Studios.\n[…]\nThe 2019 film of Downton Abbey uses many of the television locations such as Highclere Castle and Bampton, as well as exterior shots filmed at Beamish Museum. The North Yorkshire Moors Railway was used for railway scenes.\n[…]\nA \"tremendous amount of research\" went into recreating the servants' quarters at Ealing Studios because Highclere Castle, where many of the upstairs scenes are filmed, was not adequate for representing the \"downstairs\" life at the fictional manor house.\n[…]\nMrs Beeton's Book of Household Management is an important guide to the food served in the series, but Highclere owner, and author of Lady Almina and the Real Downton Abbey: The Lost Legacy of Highclere Castle, Lady Carnarvon, states that dinner parties in the era \"would have been even more over the top\" than those shown.\n[…]\nJulian Fellowes's The Gilded Age, which debuted on HBO in 2022, portrays New York in the 1880s and how its old New York society coped with the influx of newly wealthy families. While a separate series, Fellowes hinted in interviews that some members of Downton's Crawley family, as well as Martha Levinson, Cora's mother, could appear in the new show."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Castelo_de_Highclere",
        "situacao": "ok",
        "texto": "O Castelo de Highclere (Highclere Castle) é uma casa senhorial, cujo estilo jacobita atual foi criado pelo arquiteto inglês Charles Barry, com um parque projetado pelo paisagista britânico Capability Brown. A propriedade de 5.000 acres (2.000 ha) fica na cidade de Highclere, no condado de Hampshire, na Inglaterra, cerca de 8 km ao sul de Newbury, Berkshire. Ela é a sede do Conde de Carnarvon, um r\n[…]\nO Castelo de Highclere foi um local de filmagem da série de comédia britânica Jeeves and Wooster, a qual era estrelada pelos comediantes Hugh Laurie e Stephen Fry. A propriedade também foi usada como o principal local de filmagem da série britânica Downton Abbey. O grande salão, a sala de jantar, a biblioteca, a sala de música, a sala de estar, o salão e vários dos quartos localizados no interior também foram utilizados nas filmagens.\n[…]\nApós a descoberta de documentos entre o 4º Conde e John A. Macdonald, mostrando oito semanas de correspondência quase diária, Janice Charette, a Alta Comissária Canadense no Reino Unido, reconheceu em 11 de janeiro de 2018 o papel central do 4º Conde na criação do Canadá, plantando uma árvore de bordo no gramado do castelo.\n[…]\nDurante a Segunda Guerra Mundial, o castelo forneceu uma casa para dezenas de crianças evacuadas. A propriedade foi o local de várias colisões de aeronaves aliadas, incluindo a de um Boeing B-17 Flying Fortress, cujas algumas partes são agora de posse de Highclere.\n[…]\nNo final de 2012, Lord e Lady Carnarvon afirmaram que um aumento dramático no número de visitantes pagantes permitiu que eles iniciassem grandes reparos nas torres de Highclere e em seu interior. A família atribui esse aumento de interesse às filmagens no local da série britânica Downton Abbey. A família vive agora em Highclere durante os meses de inverno, mas retornam à sua cabana no verão, quando o castelo encontra-se aberto ao público.\n[…]\nCastelo de Highclere",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Arquivo X",
      "descricao": "Série americana de ficção científica criada por Chris Carter e estreada em 1993, sobre os agentes do FBI Mulder e Scully, que investigam casos paranormais."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "As primeiras temporadas de Arquivo X, com os agentes Mulder e Scully, foram gravadas em que cidade canadense?",
    "resposta": "Vancouver",
    "distratores": [
      "Toronto",
      "Montreal",
      "Calgary"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/The_X-Files"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_X-Files",
        "situacao": "ok",
        "texto": "The X-Files is an American science fiction drama television series created by Chris Carter. The original series aired from September 10, 1993, to May 19, 2002, on Fox, spanning nine seasons, with 202 episodes. A tenth season of six episodes ran from January to February 2016. Following the ratings success of this revival, The X-Files returned for an eleventh season of ten episodes, which ran from J\n[…]\nWith the move to Los Angeles, many changes behind the scenes occurred, as much of the original The X-Files crew was gone. New production designer Corey Kaplan, editor Lynne Willingham, writer David Amann and director and producer Michael Watkins joined and stayed for several years. Bill Roe became the show's new director of photography and episodes generally had a drier, brighter look due to California's sunshine and climate, as compared with Vancouver's rain, fog and temperate forests.\n[…]\nAlthough the sixth through ninth seasons were filmed in Los Angeles, the series' second movie, The X-Files: I Want to Believe (2008), was filmed in Vancouver, According to Spotnitz, the film's script was written for the city and surrounding areas. The 2016 revival was also shot there.\n[…]\nThey're not necessarily going to have to deal with the mythology.\" Bowman, who had directed various episodes of The X-Files in the past as well as the 1998 film, expressed an interest in the sequel, but Carter took the job. Spotnitz co-authored the script with Carter. The X-Files: I Want to Believe became the second film based on the series, after 1998's The X-Files: Fight the Future. Filming began in December 2007 in Vancouver and finished on March 11, 2008.\n[…]\nA crossover graphic novel between The X-Files and 30 Days of Night was published by WildStorm in 2010. It follows Mulder and Scully to Alaska as they investigate a series of murders that may be linked to vampires.\n[…]\nThe X-Files at IMDb\n[…]\nThe X-Files at epguides.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/The_X-Files",
        "situacao": "ok",
        "texto": "The X-Files (Brasil: Arquivo X / Portugal: Ficheiros Secretos) é uma série de televisão norte-americana de ficção científica criada por Chris Carter. A série foi exibida originalmente entre 10 de setembro de 1993 e 19 de maio de 2002, no canal norte-americano Fox, e em um reavivamento de duas temporadas adicionais exibidas entre 24 de janeiro de 2016 e 21 de março de 2018.\n[…]\nNovos atores foram adicionados ao elenco principal: Os agentes do FBI John Doggett (Robert Patrick) e Monica Reyes (Annabeth Gish), e também o chefe de Mulder e Scully, Diretor-Assistente Walter Skinner (Mitch Pileggi) foi promovido ao elenco principal. As primeiras cinco temporadas foram filmadas em Vancouver e a partir da sexta temporada a produção se deu em Los Angeles. Para a produção do segundo filme e do reavivamento da série, a produção voltou a Vancouver.\n[…]\nA décima temporada foi exibida entre 24 de janeiro de 2016 e 22 de fevereiro de 2016, e a décima primeira temporada foi exibida entre 3 de janeiro de 2018 e 21 de março de 2018.\n[…]\nPara ter um conceito mais estável que o de Kolchak, Carter resolveu se basear em The Silence of the Lambs e firmar a série a partir de dois agentes do FBI que resolveriam casos não totalmente resolvidos, Fox Mulder — batizado com o nome de um vizinho de infância e o sobrenome de solteira de sua mãe — e Dana Scully — com o sobrenome inspirado pelo locutor de beisebol Vin Scully (e o parceiro de Scully, Jerry Doggett, batizaria o substituto de Mulder na oitava temporada, John Doggett).\n[…]\nNa tentativa de invalidar as suas investigações e fechar o arquivo x, o FBI recruta a agente Dana Scully, uma agente que, além de médica, cientista e legista, é cética e deve reportar e dar uma explicação científica para os estranhos casos que Mulder e ela vão investigar, mais ou menos como uma espiã.\n[…]\n«Página sobre X-Files» (em inglês). no sítio da BBC",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Chiquititas (1997)",
      "descricao": "Primeira versão brasileira da telenovela infantil Chiquititas, sobre meninas de um orfanato, exibida pelo SBT de 1997 a 2001."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Exibida pelo SBT a partir de 1997, a primeira versão brasileira da novela infantil Chiquititas era gravada em que capital estrangeira?",
    "resposta": "Buenos Aires",
    "distratores": [
      "Montevidéu",
      "Santiago",
      "Assunção"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Chiquititas_(1997)",
      "https://pt.wikipedia.org/wiki/Chiquititas"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Chiquititas_(1997)",
        "situacao": "ok",
        "texto": "Chiquititas é uma telenovela brasileira exibida SBT entre 28 de julho de 1997 e 17 de janeiro de 2001, em 786 capítulos, divididos em cinco temporadas, sendo co-produzida pela produtora argentina Telefe.\n[…]\nEm 1997, após a experiência com dramatugia infantil em Colégio Brasil (1996), Silvio Santos decidiu continuar investindo no gênero e comprou os direitos do Disney Club e da telenovela argentina Chiquititas. A primeira temporada teve um orçamento estimado de 7 milhões de reais. Originalmente pensou-se em chamar a novela de \"Pequeninas\" ou \"Cantinho de Luz\", porém decidiu-se manter o título em espanhol.\n[…]\nComo a Chiquititas original ainda estava sendo gravada, o SBT firmou uma parceria com a emissora argentina Telefe para que a versão brasileira também fosse gravada em Buenos Aires, aproveitando os cenários e equipe já disponível e evitando assim gastos para montar a mesma estrutura no Brasil. Em maio de 1997, o produtor Roberto Monteiro e todo o elenco se mudaram para Buenos Aires.\n[…]\nEm agosto de 2012 foi anunciado que Chiquititas ganharia uma segunda versão, readaptada pela autora Iris Abravanel para substituir Carrossel. A obra estreou em 15 de julho de 2013 e ficou no ar até 2015, tendo duas temporadas. Diferente de 1997, que era fiel à original argentina, a versão de 2013 teve os rumos da história alterados e eliminou alguns personagens centrais da primeira versão, como Fran e Estrela.\n[…]\nNo entanto, a partir da quarta temporada a audiência começou a cair. A quinta temporada foi decisiva para o encerramento da novela: Enquanto Uga Uga da Rede Globo, registrava 43 pontos no mesmo horário, Chiquititas marcava apenas 10."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Chiquititas",
        "situacao": "desambiguacao",
        "texto": "Chiquititas é o nome de uma telenovela Argentina criada por Cris Morena em 1995 e que possui adaptações em diversos países.\nAssim, o termo pode se referir a:\n\n\n== Telenovelas ==\nChiquititas (1995) - telenovela original infanto-juvenil argentina produzida de 1995 a 2001 e em 2006\nChiquititas (1997) - telenovela Chiquititas na versão brasileira produzida pela Telefe de 1997 a 2001\nChiquititas (1999)"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Gabriela (telenovela de 1975)",
      "descricao": "Telenovela da Rede Globo de 1975, adaptada do romance Gabriela, Cravo e Canela, de Jorge Amado, com Sônia Braga no papel-título."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "A novela Gabriela, de 1975, com Sônia Braga no papel-título, se passa em que cidade baiana enriquecida pelo cacau?",
    "resposta": "Ilhéus",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Gabriela_(telenovela_de_1975)",
      "https://pt.wikipedia.org/wiki/Gabriela,_Cravo_e_Canela"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Gabriela_(telenovela_de_1975)",
        "situacao": "ok",
        "texto": "Gabriela é uma telenovela brasileira produzida e exibida pela TV Globo de 14 de abril a 24 de outubro de 1975, em 132 capítulos. Substituiu O Rebu e foi substituída por O Grito, sendo a 21.ª \"novela das dez\" exibida pela emissora.\n[…]\nConta com as atuações de Sônia Braga, Armando Bógus, José Wilker, Nívea Maria, Fúlvio Stefanini, Dina Sfat, Elizabeth Savalla, Marcos Paulo, Eloísa Mafalda e Paulo Gracindo nos papéis principais.\n[…]\nEm 1925, uma grande seca no Nordeste obriga populações famintas a abandonarem o campo rumo ao sul. A cidade de Ilhéus, na Bahia, começava a se transformar graças às lucrativas lavouras de cacau, que faziam crescer as fortunas dos fazendeiros donos de terras. Entre os retirantes, está a jovem Gabriela, órfã desde menina, que chega à cidade acompanhada de um tio e dois homens que trabalharão nas fazendas de cacau.\n[…]\nEm Ilhéus, os senhores do cacau pensam em unir as forças religiosas da população para pedir aos céus que lavem as plantações castigadas pela seca. O lugarejo ferve com a preparação da procissão anual de São Jorge dos Ilhéus, que unirá o que havia de mais representativo na igreja: os protegidos de São Sebastião (os ricos), os de São Jorge (os pobres) e os de Santa Madalena (os boêmios e as prostitutas).\n[…]\nA ideia é do velho Coronel Ramiro Bastos, líder político que dita as regras na região. Porém, ele sente que os tempos mudaram e sabe que a frágil união conseguida na procissão não será suficiente para garantir seu poder e o dos coronéis do cacau, seus aliados. O velho coronel entra em conflito com o recém-chegado Mundinho Falcão, um jovem exportador que vem a Ilhéus cheio de ideias progressistas e renovadoras.\n[…]\nSão Jorge dos Ilhéus - Alceu Valença\n[…]\n«Gabriela em Memória Globo»"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Gabriela,_Cravo_e_Canela",
        "situacao": "ok",
        "texto": "Gabriela, Cravo e Canela é um dos mais célebres romances do escritor brasileiro Jorge Amado, publicado em 1958.\n[…]\nRepresenta um momento de mudança na produção literária do autor, que até então abordava temas sociais. Nesta fase faz uma crônica de costumes, marcada por tipos populares, poderosos coronéis e mulheres sensuais. \"A crítica aponta Gabriela, cravo e canela, que tem ambiência em Ilhéus, como o divisor de águas da obra amadiana. Além de Gabriela, Cravo e Canela, os romances Dona Flor e seus dois maridos, Tieta do Agreste e Teresa Batista cansada de guerra são representativos deste tempo.\n[…]\nA obra narra o caso de amor entre o árabe Nacib e a sertaneja Gabriela, como pano de fundo o período áureo do cacau na região de Ilhéus, descrevendo as alterações profundas da vida social da Bahia da década de 1920, que inclui a abertura do porto aos grandes navios, levando à ascensão do exportador carioca Mundinho Falcão e ao declínio dos coronéis, como Ramiro Bastos.\n[…]\nNessas duas primeiras partes iniciais a narrativa tem como foco principal dois personagens: Mundinho Falcão e Nacib. Ao término da segunda parte a personagem protagonista Gabriela aparece, retirante que tem como objetivo morar em Ilhéus e trabalhar como cozinheira ou doméstica. Ainda na segunda, o autor narra a solidão de Glória.\n[…]\nGabriela - telenovela da Rede Globo de Televisão, 1975, com adaptação de Walter George Durst e com Sônia Braga no papel principal. Fez grande sucesso no Brasil e em Portugal.\n[…]\nGabriela, cravo e canela, filme dirigido por Bruno Barreto, de 1983, com Sônia Braga no papel principal.\n[…]\nciclo do cacau"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "South Park",
      "descricao": "Série animada americana criada por Trey Parker e Matt Stone em 1997, sobre quatro meninos de uma pequena cidade das montanhas."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Stan, Kyle, Cartman e Kenny vivem numa cidadezinha das Montanhas Rochosas. Em que estado americano fica South Park?",
    "resposta": "Colorado",
    "fonte": [
      "https://en.wikipedia.org/wiki/South_Park"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/South_Park",
        "situacao": "ok",
        "texto": "South Park is an American  animated sitcom created by Trey Parker and Matt Stone for Comedy Central. The series revolves around four boys—Stan Marsh, Kyle Broflovski, Eric Cartman, and Kenny McCormick—and their adventures in and around the title's Colorado town. South Park also features many recurring characters. The series became infamous for its profanity and dark, surreal humor that satirizes a\n[…]\nSouth Park centers around four boys: Stan Marsh, Kyle Broflovski, Eric Cartman and Kenny McCormick. The boys live in the fictional small town of South Park, located within the real-life South Park basin in the Rocky Mountains of central Colorado, approximately a one-hour drive from Denver. The town is also home to an assortment of other characters, including students, families, and elementary school staff.\n[…]\nThe film was created by animating construction paper cutouts with stop motion, and features prototypes of the main characters of South Park, including a character resembling Cartman but named \"Kenny\", an unnamed character resembling what is today Kenny, and two near-identical unnamed characters who resemble Stan and Kyle. Fox Broadcasting Company executive and mutual friend Brian Graden commissioned Parker and Stone to create a second short film as a video Christmas card.\n[…]\nIn 2016, a New York Times study of the 50 TV shows with the most Facebook Likes found that \"perhaps unsurprisingly, South Park ... is most popular in Colorado\". Subsequent seasons saw substantially lower ratings, though after taking on Donald Trump directly in season 27, ratings jumped to over 6.2 million viewers cross-platform, the show's highest since 2018.\n[…]\nSouth Park (Park County, Colorado)\n[…]\nSouth Park City\n[…]\nRyan Parker (September 14, 2016). \"'South Park' History: Trey Parker, Matt Stone on Censors, Tom Cruise and Scientology's Role in Isaac Hayes Quitting\". The Hollywood Reporter. Retrieved February 21, 2022."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/South_Park",
        "situacao": "ok",
        "texto": "South Park é uma série animada de comédia americana criada por Trey Parker e Matt Stone, e desenvolvida por Brian Graden para a Comedy Central. A série gira em torno de quatro garotos — Stan Marsh, Kyle Broflovski, Eric Cartman e Kenny McCormick — e as suas aventuras na cidade titular do Colorado. A série também conta com muitos personagens recorrentes, e tornou-se famosa por seu uso de palavrões \n[…]\nAs cinco primeiras temporadas da série mostravam as façanhas de Stan Marsh, Kyle Broflovski, Eric Cartman e Kenny McCormick. No final da quinta temporada, Butters Stotch ganhou o seu próprio episódio para preparar o público para o papel mais importante que ele iria ter em temporadas sucessivas. Suas aventuras ocorrem na cidade de South Park, município interiorano fictício localizado no verdadeiro vale de South Park nas Montanhas Rochosas, Colorado.\n[…]\nA cidade é também o lar de diversos personagens recorrentes da série, como estudantes, famílias, funcionários da escola e moradores variados, que tendem a considerar South Park um lugar tranquilo e pacato de se viver. Entre os locais de destaque no programa estão a escola, o ponto de ônibus, várias lojas e residências e a paisagem enevoada de Colorado, tudo baseado em locais verdadeiros da cidade de Fairplay.\n[…]\nLogo após de se conhecerem na turma de cinema da Universidade de Colorado em 1992, Trey Parker e Matt Stone criaram um curta de animação chamado The Spirit of Christmas. Para a produção do filme foi utilizada a técnica de animação de recortes, trazendo protótipos dos personagens principais de South Park, incluindo um personagem parecido com Eric⁣, mas chamado \"Kenny\", um personagem anônimo com características de Kenny e dois personagens quase idênticos com a aparência de Stan e Kyle.\n[…]\nSouth Park está envolvido em diversas polêmicas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Peaky Blinders",
      "descricao": "Série britânica estreada em 2013 sobre a família Shelby e sua gangue, no período após a Primeira Guerra Mundial."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Depois da Primeira Guerra, a família Shelby, de Peaky Blinders, comanda uma gangue em que cidade industrial inglesa?",
    "resposta": "Birmingham",
    "distratores": [
      "Manchester",
      "Liverpool",
      "Londres"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Peaky_Blinders_(TV_series)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Peaky_Blinders_(TV_series)",
        "situacao": "ok",
        "texto": "Peaky Blinders is a British historical crime drama television series created by Steven Knight. Set in Birmingham, it follows the exploits of the Peaky Blinders crime gang in the direct aftermath of the First World War. The fictional gang is loosely based on an urban youth gang active in the city from the 1880s to the 1920s.\n[…]\nPeaky Blinders is a crime drama centred on a family of mixed Irish Traveller and Romani origins based in Birmingham, England, starting in 1919, several months after the end of the First World War. It centres on the Peaky Blinders street gang and their ambitious, cunning crime boss Tommy Shelby.\n[…]\nThe second series has the Peaky Blinders expand their criminal organisation in the \"South and North while maintaining a stronghold in their Birmingham heartland\". It begins in 1921 and ends with a climax at Epsom racecourse on 31 May 1922, Derby Day.\n[…]\nBríd Brennan as Audrey Changretta (series 3–4), Changretta's mother, wife of Vicente Changretta, head of the Italian crime family in Birmingham, the enemy of the Peaky Blinders.\n[…]\nThroughout its run, Peaky Blinders received widespread critical acclaim. David Renshaw of The Guardian summarised the series as a \"riveting, fast-paced tale of post-first world war Birmingham gangsters\", praising Murphy as the \"ever-so-cool Tommy Shelby\" and the rest of the cast for their \"powerful performances\". Sarah Crompton of The Telegraph gave the series four out of five, praising the show for its originality and \"taking all of our expectations and confounding them\".\n[…]\nIn September 2022, Rambert Dance presented a dance production based on the series titled Peaky Blinders: The Redemption of Thomas Shelby directed and choreographed by Benoit Swan Pouffer, written by Knight. It premiered at the Birmingham Hippodrome, before touring the UK and was filmed for the BBC."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Peaky_Blinders_%28s%C3%A9rie_de_televis%C3%A3o%29",
        "situacao": "ok",
        "texto": "Peaky Blinders é uma série de televisão britânica de drama criada por Steven Knight. Situado em Birmingham, na Inglaterra, segue as façanhas da gangue criminosa Peaky Blinders logo após a Primeira Guerra Mundial. A gangue fictícia é vagamente baseada em uma gangue urbana de jovens reais de mesmo nome que esteve ativa na cidade de 1890 a 1910.\n[…]\nOs Peaky Blinders são uma organização criminosa de origem cigana que se passa na cidade de Birmingham, Inglaterra, em 1919, formada vários meses após o final da Primeira Guerra Mundial (1914–1918). A história é centrada na ambição do líder da gangue inglesa, Thomas \"Tommy\" Shelby (Cillian Murphy).\n[…]\nEm 1921, a família Shelby expande sua organização criminosa no \"Sul e Norte, mantendo uma fortaleza no coração de Birmingham.\" Em 1924, Tommy e sua família entram em situações mais perigosas à medida que os negócios se expandem novamente, envolvendo também organizações anticomunistas. Após ter que lidar com a greve geral no Reino Unido (1926) e disputas com a máfia ítalo-americana, Tommy torna-se membro do Parlamento Inglês em 1927.\n[…]\nElliot Cowan (5ª temporada) como Michael Levitt, um jornalista de Birmingham.\n[…]\nDavid Renshaw do The Guardian resumiu a série como um \"conto fascinante e acelerado dos gângsteres de Birmingham pós-primeira guerra mundial\", elogiando Murphy como o \"Tommy Shelby sempre tão legal\" e o resto do elenco por suas \"atuações poderosas.\" Sarah Compton do The Daily Telegraph deu à série uma classificação de 4/5, elogiando-a por sua originalidade e \"pegando todas as nossas expectativas e confundindo-as.\" Alex Fletcher da Digital Spy acredita que \"Peaky Blinders começou afiado como um dardo,\" enquanto Den of Geek chamou a série de \"o drama da BBC mais inteligente, estiloso e cativante dos últimos anos\".\n[…]\nPeaky Blinders no IMDb\n[…]\nPeaky Blinders Brasil (em português)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Primeira transmissão em cores da TV brasileira",
      "descricao": "Transmissão oficial inaugural da televisão em cores no Brasil, feita em fevereiro de 1972, mostrando a Festa da Uva."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em 1972, a primeira transmissão oficial em cores da TV brasileira mostrou a Festa da Uva, em que cidade gaúcha?",
    "resposta": "Caxias do Sul",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Televis%C3%A3o_no_Brasil",
      "https://pt.wikipedia.org/wiki/Festa_da_Uva"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Televis%C3%A3o_no_Brasil",
        "situacao": "ok",
        "texto": "A televisão no Brasil tem início comercialmente em 18 de setembro de 1950, quando foi inaugurada a TV Tupi em São Paulo, com equipamentos trazidos por Assis Chateaubriand, fundando assim o primeiro canal de televisão no país. Cinco meses depois, em 20 de janeiro de 1951, entrou no ar a TV Tupi Rio de Janeiro. Desde então, a televisão cresceu no país e hoje representa um fator importante na cultura\n[…]\nO início da transmissão em cores de forma contínua aconteceria em 1972, por uma imposição do governo militar, que não via razão para o Brasil não se equiparar aos países que já possuíam o sistema implantado. A primeira transmissão foi da Festa da Uva de Caxias do Sul em 10 de fevereiro de 1972, pela TV Difusora de Porto Alegre, com apoio técnico da TV Rio, TV Gaúcha e TV Piratini.\n[…]\nCom a aquisição em 1970 do jornal Zero Hora pelo grupo formado pela Rádio Gaúcha e a TV Gaúcha e também a inauguração da TV Caxias em Caxias do Sul, inicia-se a RBS - Rede Brasil Sul de Comunicação, continuando as emissoras de televisão associadas à TV Globo.\n[…]\nEm 19 de fevereiro de 1972, é feita a primeira transmissão em cores da televisão brasileira com o sistema oficial adotado no Brasil, sistema PAL-M, a Festa da Uva direto de Caxias do Sul no Rio Grande do Sul, transmissão ainda para testes.\n[…]\nEm 31 de março de 1972, aniversário de oito anos do Golpe militar de 1964, coincidido com o feriado da Sexta-Feira Santa, é inaugurada oficialmente a TV em cores no Brasil. Um pronunciamento do Ministro das Comunicações Hygino Corsetti, inaugurava o sistema de transmissão em cadeia nacional, e logo após, também em cadeia nacional, é apresentada a \"Paixão de Cristo\", um longa metragem produzido pelo Vaticano, com atores italianos famosos na época.\n[…]\nEm 10 de agosto de 1972, é inaugurada oficialmente a Rede Amazônica, em Manaus, com seu sinal transmitido em cores.\n[…]\nLista de redes de televisão do Brasil"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Festa_da_Uva",
        "situacao": "ok",
        "texto": "A Festa da Uva, oficialmente Festa Nacional da Uva, é uma feira e uma festa comunitária brasileira realizada atualmente a cada dois anos em Caxias do Sul, no estado do Rio Grande do Sul, comemorando a história, a cultura e a produção agroindustrial da cidade e da região. A Festa da Uva, como hoje é conhecida, evoluiu a partir de uma série de feiras agroindustriais realizadas entre 1881 e 1931, que\n[…]\nHoje a Festa da Uva é o maior e mais dinâmico símbolo de Caxias do Sul e o principal sustentáculo da sua identidade coletiva, tem uma sede permanente num grande parque de exposições e é um dos maiores eventos temáticos do Brasil, atraindo em cada edição quase um milhão de visitantes, desempenhando um papel fundamental para a divulgação da cidade, para a dinamização do turismo regional, e para o resgate e conhecimento da história e das tradições, sendo ainda uma plataforma importante para o aquecimento da economia caxiense, estabelecendo-se muitos negócios através da Feira Agroindustrial, que é parte essencial de sua estrutura desde o início.\n[…]\nA importância da festa se refletiu sobre o Governo Federal, que providenciou a filmagem do evento, e sobre o Governo do Estado, que estreitou sua relação com a cidade, e criou também uma nova solidariedade com os municípios vizinhos, que nasceram sob condições muito semelhantes àquelas que deram origem a Caxias.\n[…]\nAs edições desta fase se sucederam sem grandes novidades em relação à proposta que havia sido inaugurada em 1950, mas ganham um certo destaque as edições de 1965, quando foi realizado um concurso nacional para a confecção do cartaz oficial, e a de 1972, pela cobertura televisiva do evento, sendo a primeira transmissão a cores da televisão no Brasil.\n[…]\nAs rainhas da Festa da Uva por ano foram:\n[…]\nCaxias do Sul\n[…]\nHistória de Caxias do Sul\n[…]\n«Página oficial»"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Bonanza",
      "descricao": "Série americana de faroeste exibida de 1959 a 1973, sobre a família Cartwright e sua fazenda Ponderosa."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Na série de faroeste Bonanza, a fazenda Ponderosa, da família Cartwright, ficava em que estado americano?",
    "resposta": "Nevada",
    "fonte": [
      "https://en.wikipedia.org/wiki/Bonanza"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bonanza",
        "situacao": "ok",
        "texto": "Bonanza is an American Western television series that ran on NBC from September 12, 1959, to January 16, 1973. Lasting 14 seasons and 431 episodes, Bonanza is NBC's longest-running Western, the second-longest-running Western series on American network television (behind CBS's Gunsmoke), and one of the longest-running, live-action American series. The show continues to air in syndication.\n[…]\nIn 2002, Bonanza was ranked No. 43 on TV Guide's 50 Greatest TV Shows of All Time, and in 2013 TV Guide included it in its list of The 60 Greatest Dramas of All Time. The time period for the television series is roughly between 1861 (Season 1) and 1867 (Season 13) during and shortly after the American Civil War, coinciding with the period Nevada Territory became a U.S. state.\n[…]\nThe family lived on a thousand-square-mile (2,600 km2) ranch called the Ponderosa on the eastern shore of Lake Tahoe in Nevada opposite California on the edge of the Sierra Nevada range. The vast size of the Cartwrights' land was quietly revised to \"half a million acres\" (2,000 km2) in Lorne Greene's 1964 song, \"Saga of the Ponderosa\". The ranch name refers to the Pinus ponderosa (ponderosa pine), common in the West.\n[…]\nNBC kept it because Bonanza was one of the first series to be filmed and broadcast in color, including scenes of picturesque Lake Tahoe, Nevada. NBC's corporate parent, Radio Corporation of America (RCA), used the show to spur sales of RCA-manufactured color television sets (RCA was also the primary sponsor of the series during its first two seasons).\n[…]\nThe Nevada Territory did not split from the Utah Territory until 1861, meaning that until at least the 5th season (the episode \"Enter Thomas Bowers\" establishes that year as 1857), Bonanza is also set in what in real life would have been Utah Territory.\n[…]\nBonanza at IMDb\n[…]\nBonanza episode videos at the Internet Archive\n[…]\nBonanza: Scenery of The Ponderosa"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bonanza",
        "situacao": "ok",
        "texto": "Bonanza é uma série de TV, do gênero western, exibida originalmente na emissora de televisão americana NBC, de 12 de setembro de 1959 a 16 de janeiro de 1973.\n[…]\nO seriado narra a saga do rancheiro viúvo Ben Cartwright (Lorne Greene), um homem de propósitos, e de seus três filhos de mães diferentes, na defesa de seu rancho Ponderosa, em Nevada. Além de Greene, outro ator da série que fez bastante sucesso foi Michael Landon, que depois estrelou os seriados Os pioneiros e O Homem que veio do céu. Lorne Greene também apareceria em outras séries, como Battlestar Galactica.\n[…]\nO filme piloto foi escrito por David Dortort, também produtor da série. Ele criaria outras séries e filmes de TV similares, como The Restless Gun, The High Chaparral, The Cowboys e a prequela de Bonanza, chamada Ponderosa.\n[…]\nAs histórias baseam-se nas aventuras da família Cartwright, constituída pelo viúvo Ben Cartwright e de seus três filhos: Adam Cartwright, o arquiteto da casa onde eles moram; o amável e gigantesco Eric, mais conhecido pelo apelido de \"Hoss\"; e o caçula impetuoso Joseph ou \"Little Joe\". A família tem como cozinheiro o imigrante chinês Hop Sing.\n[…]\nTodos vivem no rancho \"Ponderosa\", em Lake Tahoe, Nevada. Próximo do rancho fica a cidade de Virginia City, onde encontram-se o xerife Roy Coffee e seu auxiliar Clem Foster.\n[…]\nForam feitos os seguintes filmes baseados em Bonanza: Bonanza: The Next Generation (1988), Bonanza: The Return (1993) e Bonanza: Under Attack (1995). Em 2001 foi produzia Ponderosa, dirigida por Kevin James Dobson e filmada na Austrália.\n[…]\nJoseph Cartwright \"Little Joe\" (Michael Landon): Rodney Gomes\n[…]\nBonanza no IMDb\n[…]\nBonanza na Rede NGT (em português)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "TV Globo",
      "descricao": "Emissora de televisão brasileira fundada por Roberto Marinho, inaugurada no Rio de Janeiro e cabeça da Rede Globo."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "A TV Globo foi inaugurada no mesmo ano em que a cidade do Rio de Janeiro completou quatrocentos anos. Que ano foi esse?",
    "resposta": "1965",
    "fonte": [
      "https://pt.wikipedia.org/wiki/TV_Globo",
      "https://pt.wikipedia.org/wiki/Rio_de_Janeiro"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/TV_Globo",
        "situacao": "ok",
        "texto": "TV Globo (estilizado tvglobo) é uma rede de televisão comercial aberta brasileira. Possui 122 emissoras próprias e afiliadas, além da transmissão no exterior pela TV Globo Internacional e de serviço mediante assinatura no país. Seu sinal também é disponibilizado na internet pelo serviço de vídeo sob demanda Globoplay. É assistida por mais de 200 milhões de pessoas diariamente, sejam elas no Brasil\n[…]\nApesar de em janeiro de 1951, durante o Governo Eurico Gaspar Dutra, a Rádio Globo ter requerido pela primeira vez uma concessão de televisão, foi somente em julho de 1957, que o então presidente Juscelino Kubitschek aprovou sua concessão; no fim de dezembro do mesmo ano, o Conselho Nacional de Telecomunicações publicou um decreto que concedeu o canal 4 do Rio de Janeiro à TV Globo Ltda. Em 26 de abril de 1965 a emissora começou a funcionar e foi fundada pelo jornalista Roberto Marinho.\n[…]\nSeus principais estúdios de produção denominados Estúdios Globo, localizam-se em Jacarepaguá, na Zona Oeste da cidade do Rio de Janeiro, que compreende o maior complexo televisivo da América Latina.\n[…]\nO primeiro logotipo foi criado com a fundação da emissora em 1965. Inicialmente, era uma rosa-dos-ventos, cujas pontas lembram o número quatro, número da emissora no Rio de Janeiro. Foi criado por Aloísio Magalhães, um dos grandes responsáveis pela expansão do design no Brasil. Ele foi substituído em 1966, dando lugar a um círculo com três linhas geográficas, que faziam alusão a um \"globo\", que foi utilizado até 1976.\n[…]\nA TV Globo tem o seu principal complexo de produção no Rio de Janeiro. Inaugurado em 1995, os Estúdios Globo (anteriormente chamado Projac e oficialmente chamado de Central Globo de Produção) é onde as suas telenovelas são produzidas e é um dos maiores centros de produção televisiva do mundo; atualmente, é o maior da América Latina.\n[…]\nTV Globo no Threads\n[…]\nTV Globo no X\n[…]\nTV Globo no YouTube"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rio_de_Janeiro",
        "situacao": "ok",
        "texto": "Rio de Janeiro, simplesmente referido como Rio, é a capital do estado brasileiro do Rio de Janeiro. Um dos maiores destinos turísticos internacionais no Brasil, na América Latina e também do Hemisfério Sul, é uma das primeiras cidades do país. É a segunda maior metrópole do Brasil (depois de São Paulo), a sétima maior da América e a décima oitava do mundo. Sua população segundo o censo de 2022 do \n[…]\nEm 1965, a cidade ganha o Museu da Imagem e do Som e o Parque Brigadeiro Eduardo Gomes, o famoso Aterro do Flamengo. Em 1967, foram inaugurados o Canecão e o túnel Rebouças, que possibilitou uma ligação direta entre as zonas norte e sul do Rio de Janeiro. Em 26 de junho do ano seguinte, ocorre a Passeata dos Cem Mil, um protesto contra o regime militar que reuniu uma multidão de cem mil pessoas desde o centro da cidade até a Assembleia Legislativa da Guanabara, passando pela igreja da Candelária.\n[…]\nEm 2015, o Rio de Janeiro completou 450 anos de sua fundação, ocasião em que foi inaugurado o Túnel Rio450. No final daquele ano, a cidade ganharia o Museu do Amanhã, na Praça Mauá. Em 2016, o senador Marcelo Crivella foi eleito prefeito do município, administrando-o 2017 até 2020. Em 2018, um incêndio de grandes proporções atinge o Museu Nacional, que resultou na perda de milhares de documentos históricos.\n[…]\nO Rio de Janeiro também tem as diárias de hotel mais caras do Brasil. Com o mesmo valor pago por uma diária em hotéis de duas estrelas na cidade, é possível se hospedar em hotéis quatro estrelas em cidades como Pequim, Buenos Aires, Amsterdã e Barcelona, ou em um hotel da categoria de três estrelas na cidade de São Paulo.\n[…]\nApós a privatização de grande parte das linhas e o fim da Rede Ferroviária Federal (RFFSA), o sistema ferroviário da cidade ficou dividido somente entre os ramais de subúrbios e o transporte de cargas, vindo de outros estados rumo ao Porto do Rio de Janeiro."
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Fantástico",
      "descricao": "Programa dominical da Rede Globo, misto de jornalismo e variedades, conhecido como o Show da Vida."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "O Fantástico, a revista eletrônica dos domingos da Globo, foi ao ar pela primeira vez em que década?",
    "resposta": "Anos 1970 (em 1973)",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Fant%C3%A1stico"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Fant%C3%A1stico",
        "situacao": "ok",
        "texto": "Fantástico (originalmente  Fantástico: O Show da Vida) é um programa de televisão brasileiro, apresentado aos domingos pela TV Globo. É apresentado por Poliana Abritta e Maria Júlia Coutinho, com a participação de Alex Escobar no quadro fixo Gols do Fantástico.\n[…]\nCom a proposta de ser um programa diferente do que havia na televisão brasileira, o Fantástico, o Show da Vida estreou em  5 de agosto de 1973, como uma revista eletrônica de variedades, reunindo jornalismo e entretenimento.\n[…]\nEm 4 de junho de 1976, um incêndio no prédio da TV Globo no Rio de Janeiro destruiu os rolos de filme do material das primeiras edições da revista eletrônica Fantástico. O incêndio foi provocado por um curto-circuito no sistema de ar condicionado. Um livro, que preserva boletins de programações antigos, era o o único registro que sobrou da estreia do programa.\n[…]\nO Show da Vida é Fantástico foi um bloco de quadros do Fantástico com duração de dez minutos, apresentado de 19 de maio a 14 de novembro de 2014 no Canal Viva.\n[…]\nDesde sua estréia, em 5 de agosto de 1973, a revista eletrônica é líder de audiência absoluta aos domingos, sendo raramente ameaçada por um programa concorrente. A primeira ameaça que enfrentou foi em 1976, o programa humorístico Os Trapalhões, da Rede Tupi, estava crescendo na audiência e começando a encostar na TV Globo, o que fez a emissora contratar Renato Aragão e seus companheiros (Mussum, Dedé Santana e Zacarias), no mesmo ano para reverter o embate, o que se concretizou.\n[…]\nPorém a primeira derrota veio mesmo em 2001, quando o reality show Casa dos Artistas do SBT, que de 12 edições que teve, venceu o Fantástico em 11. No dia 24 de dezembro de 2017, registrou a pior audiência desde a estreia em 1973, atingindo apenas 11,6 pontos."
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Xou da Xuxa",
      "descricao": "Programa infantil matinal da Rede Globo apresentado por Xuxa Meneghel, com as Paquitas e a nave espacial."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Com a nave espacial e as Paquitas, o Xou da Xuxa estreou nas manhãs da Globo em que ano?",
    "resposta": "1986",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Xou_da_Xuxa"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Xou_da_Xuxa",
        "situacao": "ok",
        "texto": "Xou da Xuxa foi um programa infantil de variedades apresentado por Xuxa Meneghel e produzido e exibido pela TV Globo de 30 de junho de 1986 até 31 de dezembro de 1992, com 2000 edições concluídas. A atração substituiu o programa do Balão Mágico e o TV Mulher.\n[…]\nO uniforme das Paquitas era inspirado em trajes de Balizas estilizadas, com jaquetas azuis e vermelhas, franjas douradas nos ombros, chapéus decorados, saias (usadas somente nos primórdios do programa Xou da Xuxa, em 1986), shorts e botas brancas, enquanto o personagem Dengue, um enorme mosquito cheio de braços, vestia-se de amarelo e vermelho dos pés à cabeça, e o baixinho Praga, usava uma fantasia de tartaruga e as Irmãs Metralha usavam uniformes listrados em alusão aos uniformes de prisioneiras e os Paquitos usavam smoking (terno e gravata) e raramente usavam as famosas fardinhas, que eram usadas somente na hora das apresentações.\n[…]\nEm 30 de junho de 1986, estreava o primeiro Xou da Xuxa.\n[…]\nO modelo da nave (que viria ser a marca registrada da apresentadora) era rosa clara em formato médio, tinham janelas redondas e não tinham portas no centro. Ela descia ao som de “Amiguinha Xuxa” (1986 – “Xou Da Xuxa”) (Messias Correa/ Rogério Endé). O microfone tinha um enfeite verde de rostinho desenhado a mão. Era colocada na cabeça do microfone na época. Algum tempo depois, as carinhas verdes foram refeitas e sem os pompons amarelos.\n[…]\nPaquitas\n[…]\nPaquitos\n[…]\nXuxa Cidade\n[…]\nNo Natal de 1986, a apresentadora recebeu seu oitavo disco de platina, prêmio concedido a cada 250 mil cópias vendidas. O LP Xou da Xuxa, da gravadora Som Livre, já havia vendido até então mais de dois milhões de cópias, batendo o recorde sul-americano de vendagem de um só disco. Xuxa vendeu mais do que Roberto Carlos naquele ano."
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Sua Vida Me Pertence",
      "descricao": "Telenovela da TV Tupi considerada a primeira telenovela brasileira, escrita e estrelada por Walter Forster."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Considerada a primeira telenovela brasileira, Sua Vida Me Pertence foi exibida pela TV Tupi em que ano?",
    "resposta": "1951",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Sua_Vida_Me_Pertence"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Sua_Vida_Me_Pertence",
        "situacao": "ok",
        "texto": "Sua Vida Me Pertence é uma telenovela brasileira produzida e exibida pela extinta TV Tupi de 21 de dezembro de 1951 a 8 de fevereiro de 1952, sendo a primeira telenovela do Brasil e do mundo. Foi exibida no horário das 20 horas e teve 15 capítulos. Foi escrita e dirigida por Wálter Forster, que também protagonizou a história ao lado de Vida Alves.\n[…]\nO conceito partiu de uma sugestão do então diretor artístico da TV Tupi São Paulo, Cassiano Gabus Mendes, que sugeriu uma produção que assemelhava ao cinema, ou a dramaturgia. Wálter Forster foi o primeiro a falar em \"telenovela\", uma versão para televisão da radionovela, que já era sucesso. O produto começou acanhado, apresentado ainda ao vivo e, duas vezes por semana.\n[…]\nA princípio uma produção menor, que foi crescendo com tempo e, se tornou o produto televisivo de maior importância no cenário nacional, atualmente. Não era exibida diariamente, mas duas vezes por semana, às terças e quintas-feiras. Os capítulos tinham vinte minutos e eram apresentadas ao vivo. Contou com dois cenários: um reproduzindo um quarto e o outro, um jardim de uma praça.\n[…]\nNessa produção também ocorreu o primeiro beijo da televisão brasileira. Não era um beijo cenográfico como nas cenas atuais, mas apenas um \"encostar de lábios\" entre os protagonistas, interpretados por Wálter Forster e Vida Alves que, recém casada, precisou da autorização do marido para realizar a cena.\n[…]\nNas palavras de Wálter Forster, \"A história básica (da trama) era um homem que estava apaixonado por uma mulher e ela não dava bola para ele. E ele, então, disse a ela: eu vou te conquistar e você vai me amar porque a sua vida me pertence!\""
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Escrava Isaura (telenovela de 1976)",
      "descricao": "Telenovela da Rede Globo baseada no romance de Bernardo Guimarães, com Lucélia Santos, vendida para dezenas de países."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Sucesso exportado para dezenas de países, a novela Escrava Isaura, com Lucélia Santos, estreou na Globo em que ano?",
    "resposta": "1976",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Escrava_Isaura_(telenovela_de_1976)",
      "https://pt.wikipedia.org/wiki/A_Escrava_Isaura"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Escrava_Isaura_(telenovela_de_1976)",
        "situacao": "ok",
        "texto": "Escrava Isaura é uma telenovela brasileira produzida e exibida pela TV Globo de 11 de outubro de 1976 até 5 de fevereiro de 1977, em 100 capítulos. Substituiu O Feijão e o Sonho e foi substituída por À Sombra dos Laranjais, sendo a 10.ª \"novela das seis\" produzida pela emissora.\n[…]\nA história teve como cenário o distrito de Conservatória, na cidade de Valença, estado do Rio de Janeiro e fazendas da região. As gravações de cenas no interior eram realizadas nos estúdios da TV Educativa e Herbert Richers, ambos na capital fluminense. Os da TV Globo, também no Rio, foram atingidos por um incêndio em junho de 1976, tornando inviáveis filmagens no local.\n[…]\nA novela começou a ser exportada em 1979 para Suíça e Itália. Logo, emissoras de outros países da Europa exibiram a produção, que posteriormente obteria sucesso em outros continentes. Em janeiro de 2016, a trama estava na quinta colocação no ranking de programas da TV Globo e do Brasil mais vendidos ao mercado internacional, com licenciamento a 104 países.\n[…]\nEscrava Isaura é até então a novela mais reprisada da TV Globo. No entanto, curiosamente, ela nunca foi exibida no Vale a Pena Ver de Novo, o bloco de reprises mais tradicional da emissora.\n[…]\nFoi reprisada no Viva 70, a versão fast do canal Viva de 21 de maio a 7 de outubro de 2024, substituindo A Sucessora e sendo substituída por Pecado Capital. Com essa reprise, a trama havia empatado com A Viagem e Por Amor no ranking de novelas mais reexibidas da Globo (incluindo todas as plataformas, apesar de ser a mais reapresentada da emissora na TV aberta). No entanto, A Viagem ultrapassaria Por Amor e Escrava Isaura no ranking após a Globo ter decidido reprisar a novela em 2025.\n[…]\nCapa: Escravos trabalhando para mulher branca\n[…]\nEscrava Isaura no IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/A_Escrava_Isaura",
        "situacao": "ok",
        "texto": "A Escrava Isaura é um romance do escritor brasileiro Bernardo Guimarães, publicado em 1875 pela editora B. L. Garnier, no Rio de Janeiro. Inserida no contexto do Romantismo no Brasil, a obra aborda a temática da escravidão a partir da história de uma jovem escravizada de origem branca, enfatizando valores como a moral cristã, a sensibilidade sentimental e a denúncia das injustiças sociais.\n[…]\nEscrito em plena campanha abolicionista (1875), o livro conta as desventuras de Isaura, escrava branca e educada, de caráter nobre, vítima de um senhor devasso.\n[…]\nRosa, escrava bonita, porém sente inveja da atenção que todos dão a Isaura, fazendo de tudo para tentar prejudicá-la.\n[…]\nMesmo assim, o pai de Isaura, Miguel, conversa com o pai de Leôncio e faz um trato no qual ele dará 10 contos de réis pela liberdade de sua filha. Ao chegar com a quantia na casa onde Isaura é escrava, eis que chega uma carta dizendo que o pai de Leôncio morreu, dando uma desculpa para Leôncio não libertar sua escrava.\n[…]\nCom sua habilidade ao piano e sua beleza exótica, Elvira encanta todos no baile, menos Martinho, sujeito baixo e ganancioso que vê em Elvira a escrava Isaura descrita em um folheto anexado a um jornal, uma chance de ganhar o dinheiro da recompensa.\n[…]\nQuando chegam novamente na fazenda e Leôncio prende Isaura em total isolamento, inicia-se a terceira fase da narrativa. Agora seu algoz inventa um plano maquiavélico para continuar a ter a sua escrava favorita por perto sem deixar sua mulher, Malvina, enciumada: ele coloca como condição para a liberdade de Isaura seu casamento com o jardineiro da fazenda, Belchior.\n[…]\nA escrava Isaura (1917), filme;\n[…]\nA escrava Isaura (1922), filme;\n[…]\nA escrava Isaura (1929), filme;\n[…]\nA escrava Isaura (1949), filme;\n[…]\nEscrava Isaura (1976), telenovela;\n[…]\nA escrava Isaura (2004), telenovela.\n[…]\n«Texto integral de A Escrava Isaura, Universidade da Amazônia (UNAMA).» 🔗"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Vila Sésamo",
      "descricao": "Programa infantil educativo americano, Sesame Street, com bonecos como o Garibaldo e o Come-Come, que ganhou versões brasileiras."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "O programa infantil Vila Sésamo, com o Garibaldo e o Come-Come, estreou nos Estados Unidos no mesmo ano da chegada do homem à Lua. Que ano?",
    "resposta": "1969",
    "fonte": [
      "https://en.wikipedia.org/wiki/Sesame_Street"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sesame_Street",
        "situacao": "ok",
        "texto": "Sesame Street is an American educational children's television series that combines live-action, sketch comedy, animation, and puppetry. It is produced by Sesame Workshop (known as the Children's Television Workshop until June 2000) and was created by Joan Ganz Cooney and Lloyd Morrisett. It features Jim Henson's Muppets, and includes short films, with humor and cultural references. It premiered o\n[…]\nSesame Street was officially announced at a press conference on May 6, 1969. Joan Ganz Cooney, Children's Television Workshop's executive director, said that Sesame Street would use the techniques of commercial television programs to teach young children. Live shorts and animated cartoons would teach young children the alphabet, numbers, vocabulary, shapes, and basic reasoning skills.\n[…]\nWhen Sesame Street premiered on November 10, 1969, it aired on only 67.6% of American televisions, but it earned a 3.3 Nielsen rating, which totaled 1.9 million households. By the show's tenth anniversary in 1979, nine million American children under the age of 6 were watching Sesame Street daily. According to a 1993 survey conducted by the U.S. Department of Education, out of the show's 6.6 million viewers, 2.4 million kindergartners regularly watched it.\n[…]\nSesame Street was praised from its debut in 1969. Newsday reported that several newspapers and magazines had written \"glowing\" reports about the CTW and Cooney. The press overwhelmingly praised the new show; several popular magazines and niche magazines lauded it. In 1970, Sesame Street won twenty awards, including a Peabody Award, three Emmys, an award from the Public Relations Society of America, a Clio, and a Prix Jeunesse.\n[…]\nSesame Street at The Interviews: An Oral History of Television\n[…]\nAbdelfatah, Rund; Ramtin Arablouei; et al. (September 15, 2022). \"Getting to Sesame Street\". Throughline. National Public Radio. Retrieved September 25, 2022."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sesame_Street",
        "situacao": "ok",
        "texto": "Sesame Street (bra: Vila Sésamo; prt: Rua Sésamo) é uma série de televisão educativa estadunidense para crianças que combina live-action, comédia de esquetes, animação e marionetes. É produzida pela Sesame Workshop (anteriormente conhecida como Children's Television Workshop até junho de 2000) e foi criada por Joan Ganz Cooney e Lloyd Morrisett. É conhecida por suas imagens comunicadas através do \n[…]\nEstreou em 10 de novembro de 1969, recebendo críticas positivas, alguma controvérsia e uma grande audiência. A série é transmitida pela PBS, a emissora nacional de televisão pública dos Estados Unidos, desde sua estreia, e sua primeira exibição passou para o canal premium HBO em 16 de janeiro de 2016, e posteriormente para o serviço de streaming Max em 2020. Sesame Street é um dos programas mais duradouros do mundo.\n[…]\nNaquela época, Sesame Street era o 15.º programa de televisão infantil com maior audiência nos Estados Unidos. Uma pesquisa de 1996 constatou que 95% de todas as crianças em idade pré-escolar nos Estados Unidos haviam assistido ao programa até completarem três anos. Em 2018, estimava-se que 86 milhões de americanos haviam assistido ao programa quando crianças. Até 2022, o programa havia ganhado 222 Emmy Awards e 11 Grammy Awards, mais do que qualquer outro programa infantil.\n[…]\nComo resultado da proposta inicial de Cooney em 1968, o Instituto Carnegie concedeu a ela uma bolsa de US$1 milhão para criar um novo programa de televisão infantil e estabelecer a CTW, renomeada em junho de 2000 para Sesame Workshop (SW). Cooney e Morrisett obtiveram subsídios adicionais de vários milhões de dólares do governo federal dos Estados Unidos, das Fundações Arthur Vining Davis, da CPB e da Fundação Ford.\n[…]\nEste artigo foi inicialmente traduzido, total ou parcialmente, do artigo da Wikipédia em inglês cujo título é «Sesame Street».\n[…]\nSesame Street no IMDb\n[…]\n«Sesame Workshop»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Jornada nas Estrelas (série original)",
      "descricao": "Série americana de ficção científica criada por Gene Roddenberry, com o capitão Kirk e o senhor Spock a bordo da nave Enterprise."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "A série original de Jornada nas Estrelas, com o capitão Kirk e o senhor Spock, estreou na TV americana em que ano?",
    "resposta": "1966",
    "distratores": [
      "1959",
      "1972",
      "1979"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Star_Trek:_The_Original_Series"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Star_Trek:_The_Original_Series",
        "situacao": "ok",
        "texto": "Star Trek is an American science fiction television series created by Gene Roddenberry that follows the adventures of the starship USS Enterprise (NCC-1701) and its crew. It acquired the retronym of Star Trek: The Original Series (TOS) to distinguish the show within the media franchise that it began.\n[…]\nNorway Productions and Desilu Productions produced the series from September 1966 to December 1967. Paramount Television produced the show from January 1968 to June 1969. Star Trek aired on NBC from September 8, 1966, to June 3, 1969. It was first broadcast on September 6, 1966, on Canada's CTV network. While on NBC, Star Trek's Nielsen ratings were low and the network canceled it after three seasons and 79 episodes.\n[…]\nNBC made the unusual decision to pay for a second pilot, using the script called \"Where No Man Has Gone Before\". Only the character of Spock, played by Leonard Nimoy, was retained from the first pilot, and only two cast members, Majel Barrett and Nimoy, were carried forward into the series. This second pilot proved to be satisfactory to NBC, and the network selected Star Trek to be in its upcoming television schedule for the fall of 1966.\n[…]\nNBC ordered 16 episodes of Star Trek, besides \"Where No Man Has Gone Before\". The first regular episode of Star Trek, \"The Man Trap\", aired on Thursday, September 8, 1966, from 8:30 to 9:30 as part of an NBC \"sneak preview\" block.\n[…]\nEpisodes of the Original Series were among the first television series to be released on the VHS and laserdisc formats in North America. The first episode on VHS for sale to the public was Space Seed released in June 1982 (to celebrate the release of the second Star Trek film, The Wrath of Khan) at a price of $29.95, as prior to this titles were rental only.\n[…]\nStar Trek: The Original Series at Memory Beta"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Star_Trek_%28s%C3%A9rie_original%29",
        "situacao": "ok",
        "texto": "Star Trek (bra: Jornada nas Estrelas; prt: O Caminho das Estrelas) é uma série de televisão norte-americana de ficção científica criada por Gene Roddenberry, produzida pela Desilu Productions (mais tarde pela Paramount Television) e exibida pela NBC de 8 de setembro de 1966 até 3 de junho de 1969.\n[…]\nApesar de seu título ser Star Trek, adquiriu o retrônimo de Star Trek: The Original Series (prt: Star Trek - A Série Original) para se diferenciar de suas sequências e do universo ficcional criado. Ela se passa no século XXIII. A série segue as aventuras da tripulação da nave estelar USS Enterprise, comandada pelo Capitão James T. Kirk, o Primeiro Oficial Comandante Spock e o Oficial Médico Chefe Leonard McCoy.\n[…]\nQuando Star Trek estreou na NBC em 1966 não foi um sucesso. Inicialmente, seus Nielsen Ratings foram baixos. Antes do final da primeira temporada, alguns executivos da NBC queriam cancelar o programa devido aos seus índices baixos de audiência.\n[…]\nO novo piloto foi aprovado pela NBC e Star Trek foi agendado para estrear no outono de 1966.\n[…]\nA NBC encomendou 16 episódios de Star Trek, além de \"Where No Man Has Gone Before\". O primeiro episódio regular de Star Trek estreou em uma terça-feira, 8 de setembro de 1966 das 20:30 até 21:30.\n[…]\nEm 1987, Roddenberry criou uma segunda série de Star Trek chamada Star Trek: The Next Generation, que se passava abordo da nave estelar USS Enterprise (NCC-1701-D), mais de 70 anos após a série original. Diferentemente da série original, que refletia a filosofia intervencionista americana, a The Next Generation tinha uma mensagem menos agressiva e mais liberal. Este programa, diferente de seu predecessor, foi transmitido por sindicação e vendido a várias transmissoras de TV ao invés de uma única.\n[…]\n120 CDs e 40 videogames com o título de Star Trek.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "SBT",
      "descricao": "Sistema Brasileiro de Televisão, rede de TV fundada pelo apresentador e empresário Silvio Santos."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "O SBT, a rede de televisão de Silvio Santos, entrou no ar em que ano?",
    "resposta": "1981",
    "distratores": [
      "1976",
      "1985",
      "1990"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/SBT"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/SBT",
        "situacao": "ok",
        "texto": "SBT (acrônimo para Sistema Brasileiro de Televisão) é uma rede de televisão comercial brasileira inaugurada em 19 de agosto de 1981 pelo apresentador e empresário Silvio Santos. Seu surgimento deu-se através do vencimento de uma licitação do governo federal que cedeu parte dos canais anteriormentes outorgados à Rede Tupi, cassados em 1980 por problemas financeiros.\n[…]\nSilvestre; dois dias mais tarde estreava o telejornal Noticentro, que representava os 5% exigidos pela lei, e com o know-how da TVS, o Programa Silvio Santos que ocupava 10 horas da grade de domingo. Ainda em 1981, estreava Alegria 81, primeiro programa humorístico do SBT, com outro programa, o Reapertura, uma sátira à \"abertura política\" pela qual a política brasileira estava passando.\n[…]\nNesses dois anos de existência, a audiência cresceu 25% e agregou 21 emissoras à sua rede.\n[…]\nCom isso, Silvio Santos seria o apresentador fixo do concurso por nove anos. Na \"era SBT\", o Brasil obteve resultados pífios no Miss Universo, uma finalista e três semifinalistas, fora as premiações especiais de traje típico concedidas em 1981, 1987 e 1989. O Miss Brasil 1985 é considerado um marco para a emissora, pois pela primeira vez na história a emissora fazia uma transmissão em rede para todo o país.\n[…]\nComo explicação, foi dito que o dono do canal 11 no Rio de Janeiro era Silvio Santos e quem venceu a licitação que englobava o canal 9, era o Sistema Brasileiro de Televisão, que não tinha Silvio Santos no seu rol acionário e sim Carmen Abravanel (cunhada de Silvio Santos) e Carlos Marcelino Machado de Carvalho (filho de Paulo Machado de Carvalho, da TV Record).\n[…]\nNo dia 23 de maio de 2020, Silvio Santos cancelou a edição do jornal SBT Brasil daquele dia, que havia noticiado o vídeo da reunião ministerial de 22 de abril do Governo Bolsonaro, e a substituiu por uma reprise do programa Triturando."
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Doctor Who",
      "descricao": "Série britânica de ficção científica da BBC, sobre um alienígena viajante do tempo chamado Doutor."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "A série britânica Doctor Who estreou na BBC em novembro de 1963, um dia depois de que acontecimento histórico?",
    "resposta": "O assassinato de John Kennedy",
    "fonte": [
      "https://en.wikipedia.org/wiki/Doctor_Who",
      "https://en.wikipedia.org/wiki/An_Unearthly_Child"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Doctor_Who",
        "situacao": "ok",
        "texto": "Doctor Who is a British science fiction television series first broadcast by the BBC in 1963. The series, created by Sydney Newman, C. E. Webber and Donald Wilson, follows the adventures of the Doctor, an extraterrestrial being from a humanoid species known as Time Lords. The Doctor travels through space and time using a time travelling spaceship called the TARDIS, which has an exterior that resem\n[…]\nDoctor Who was originally intended to appeal to a family audience as an educational programme using time travel as a means to explore scientific ideas and famous moments in history. The programme first appeared on the BBC Television Service at 17:16:20 GMT on 23 November 1963; this was eighty seconds later than the scheduled programme time, because of announcements concerning the previous day's assassination of John F. Kennedy.\n[…]\nIt has been claimed that the transmission of the first episode was delayed by ten minutes due to extended news coverage of the assassination of US President John F. Kennedy the previous day; in fact, it went out after a delay of eighty seconds. The BBC believed that coverage of the assassination, as well as a series of power blackouts across the country, had caused many viewers to miss this introduction to a new series, and it was broadcast again on 30 November 1963, just before episode two.\n[…]\nPremiering the day after the assassination of John F. Kennedy, the first episode of Doctor Who was repeated with the second episode the following week. Doctor Who has always appeared initially on the BBC's mainstream BBC One channel, where it is regarded as a family show, drawing audiences of many millions of viewers; The programme's popularity has waxed and waned over the decades, with three notable periods of high ratings, but has become a significant part of British popular culture.\n[…]\nDoctor Who at BBC Worldwide\n[…]\nDoctor Who at IMDb: 1963, 1996, 2005, 2023"
      },
      {
        "url": "https://en.wikipedia.org/wiki/An_Unearthly_Child",
        "situacao": "ok",
        "texto": "An Unearthly Child (sometimes referred to as 100,000 BC) is the first serial of the British science fiction television series Doctor Who. It was first broadcast on BBC TV in four weekly parts from 23 November to 14 December 1963.\n[…]\nThe show's launch was overshadowed by the assassination of American President John F. Kennedy the previous day, resulting in a repeat of the first episode the following week. The serial received mixed reviews, and the four episodes attracted an average of six million viewers. Retrospective reviews of the serial are favourable. It later received several print adaptations and home media releases.\n[…]\nThe first episode was transmitted at 5:16:20 p.m. on Saturday 23 November 1963. The assassination of U.S. President John F. Kennedy the previous day overshadowed the launch of the series; as a result, the first episode was repeated a week later, on 30 November, preceding the second episode.\n[…]\nHowe and Stephen James Walker lauded Hartnell's performance and the reveal of the TARDIS interior in the first episode, and felt that the following three episodes were lesser in quality but remained \"intense\" and \"highly dramatic\". In A Critical History of Doctor Who (1999), John Kenneth Muir called the serial \"an unqualified success as drama\", applauding the writing, cinematic style, and production techniques.\n[…]\nA verbatim transcript of the transmitted version of this serial, edited by John McElroy and titled The Tribe of Gum, was published by Titan Books in January 1988. It was the first in an intended series of Doctor Who script books. In 1994, a phonecard with a photomontage of the episode was released by Jondar International Promotions.\n[…]\nAn Unearthly Child on Tardis Wiki, the Doctor Who Wiki"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Doctor_Who",
        "situacao": "ok",
        "texto": "Doctor Who (bra: Doctor Who; prt: Doctor Who ou Dr. Who) é uma série de ficção científica britânica, produzida e transmitida pela British Broadcasting Corporation (BBC) desde 1963.\n[…]\nDoctor Who apareceu pela primeira vez na televisão pela BBC em 23 de novembro de 1963 às 17h16min20, no horário padrão de Londres, porém o episódio teve de ser reprisado na semana seguinte, pois na data do lançamento original, a BBC estava cobrindo o Assassinato de John Kennedy.\n[…]\nDesde 1963, mais de 60 personagens já foram apresentados como companheiros do Doutor, alguns viajando a bordo da TARDIS por diversas temporadas, enquanto outros não duraram sequer mais de um episódio. Os acompanhantes originais do Primeiro Doutor eram sua neta Susan Foreman (Carole Ann Ford) e os professores Barbara Wright (Jacqueline Hill) e Ian Chesterton (William Russell). A única história da série clássica em que o Doutor viaja sozinho é na 14.ª temporada, na história \"The Deadly Assassin\".\n[…]\nDoctor Who possui um série de audiodramas, produzido pela Big Finish Productions, que apresentam atores ainda vivos da série clássica (como Tom Baker, Peter Davison, Colin Baker, Sylvester McCoy, e Paul McGann) reprisando seus papéis em novas histórias.\n[…]\nApós o sucesso da série em 2005, a BBC encomendou uma produção de uma série de 13 episódios intitulada Torchwood (um anagrama de \"Doctor Who\"), se passando na atual Cardiff e investigando atividades e crimes alienígenas. A série estreou na BBC Three, em 22 de outubro de 2006. John Barrowman reprisou seu papel de Jack Harkness, que havia aparecido em Doctor Who, outras atrizes que protagonizam a série são Eve Myles como Gwen Cooper e Naoko Mori.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Seinfeld",
      "descricao": "Sitcom americana exibida de 1989 a 1998, estrelada pelo comediante Jerry Seinfeld, ambientada em Nova York."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "O comediante Jerry Seinfeld criou a sitcom Seinfeld em parceria com que outro comediante?",
    "resposta": "Larry David",
    "fonte": [
      "https://en.wikipedia.org/wiki/Seinfeld"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Seinfeld",
        "situacao": "ok",
        "texto": "Seinfeld ( SYNE-feld) is an American television sitcom created by Larry David and Jerry Seinfeld. It originally aired on NBC from July 5, 1989, to May 14, 1998, with a total of nine seasons consisting of 180 episodes.\n[…]\nAs a rising comedian in the late 1980s, Jerry Seinfeld was presented with an opportunity to create a show with NBC. He asked Larry David, a fellow comedian and friend, to help create a premise for a sitcom. The series was produced by West/Shapiro Productions and Castle Rock Entertainment and is distributed in syndication by Sony Pictures Television. It was largely written by David and Seinfeld along with scriptwriters.\n[…]\nAlso, at this time, the use of Jerry's stand-up act slowly declined, and the stand-up segment in the middle of Seinfeld episodes was cut.\n[…]\nSeinfeld is suffused with postmodern themes. To begin with, the boundary between reality and fiction is frequently blurred: this is illustrated in the central device of having Jerry Seinfeld play the character Jerry Seinfeld. In the show's fourth season, several episodes revolved around the narrative of Jerry and George (whose character is co-creator Larry David's alter ego) pitching 'a show about nothing' based on the everyday life of a stand-up comedian to NBC.\n[…]\nShows specifically cited regarding the Seinfeld curse are Julia Louis-Dreyfus's Watching Ellie, Jason Alexander's Bob Patterson and Listen Up, and Michael Richards's The Michael Richards Show. This phenomenon was mentioned throughout the second season of Larry David's HBO program Curb Your Enthusiasm, which aired in 2001. In real life, David has repeatedly dismissed the idea of a curse, saying, \"It's so completely idiotic. It's very hard to have a successful sitcom.\""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Seinfeld",
        "situacao": "ok",
        "texto": "Seinfeld é uma sitcom exibida originalmente nos Estados Unidos pela rede NBC por nove temporadas, entre 5 de julho de 1989 e 14 de maio de 1998. Foi criada por Larry David e Jerry Seinfeld, este último estrelando o programa como uma versão fictícia de si mesmo.\n[…]\nOs personagens principais e muitos dos secundários foram modelados em conhecidos de Jerry Seinfeld e Larry David na vida real. Outros personagens recorrentes foram baseados em contrapartes famosas, como Jacopo Peterman do catálogo J. Peterman (nominalmente baseado em John Peterman) e George Steinbrenner, proprietário do New York Yankees.\n[…]\nMuitos episódios de Seinfeld foram baseados em experiências cotidianas de seus roteiristas. Pode-se citar como exemplo \"The Revenge\" (segunda temporada), baseado no trabalho de Larry David como roteirista do Saturday Night Live; após ter apenas um de seus roteiros levados ao ar, David resolveu se demitir mas, arrependendo-se de sua atitude, voltou ao trabalho no dia seguinte como se nada tivesse acontecido.\n[…]\nA média de audiência do programa permaneceu forte durante suas duas últimas temporadas, mas as opiniões da crítica já não eram mais tão favoráveis. Larry David deixou a produção no final da sétima temporada e seu lugar foi assumido por Seinfeld, o que deu à série um passo mais dinâmico.\n[…]\nA Sony Pictures Home Entertainment lançou todas as nove temporadas de Seinfeld em DVD nas regiões 1, 2 e 4 entre 2004 e 2007. Em 6 de novembro de 2007 a caixa Seinfeld: The Complete Series foi lançada em DVD. O disco individual da última temporada e o pacote com a série completa trouxeram como bônus uma reunião realizada em 2007 entre Larry David e os quatro protagonistas.\n[…]\nSeinfeld no IMDb\n[…]\nSeinfeld (em inglês) no TV.com\n[…]\n«Seinfeld» (em inglês)  no Metacritic",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Avenida Brasil (telenovela)",
      "descricao": "Telenovela da Rede Globo de 2012, sobre a vingança de Nina contra a madrasta Carminha."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "A novela Avenida Brasil, de 2012, com a vilã Carminha, foi escrita por qual autor?",
    "resposta": "João Emanuel Carneiro",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Avenida_Brasil_(telenovela)"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Avenida_Brasil_(telenovela)",
        "situacao": "ok",
        "texto": "Avenida Brasil é uma telenovela brasileira produzida e exibida pela TV Globo, em 26 de março até 19 de outubro de 2012, em 179 capítulos originais. Substituiu Fina Estampa e sendo substituída por Salve Jorge, foi a 3.ª \"novela das nove\" transmitida pela emissora.\n[…]\nOriginalmente, o autor João Emanuel Carneiro queria Giovanna Antonelli como a antagonista Carminha, repetindo a parceria com ela de Da Cor do Pecado, mas a atriz recusou o convite porque estava comprometida com a novela Salve Jorge, de Gloria Perez, e não poderia assumir outro projeto simultaneamente.\n[…]\nEm 19 de outubro de 2012, o último capítulo de *Avenida Brasil* fez história com 52 pontos no IBOPE, batendo recordes de audiência e gerando grande repercussão. A novela de João Emanuel Carneiro não apenas se destacou nas telas, mas também teve impacto em eventos políticos e na infraestrutura do país.\n[…]\nNa época, a rede de supermercados Extra chegou a realizar um comercial com uma promoção de pen drives, fazendo piada com o caso para atrair a atenção dos fãs da novela: “Pen Drive para guardar milhares de fotos, viu Nina?”. Em entrevista à época, o autor João Emanuel Carneiro pediu desculpas e atribuiu esse erro ao fato de ser \"analfabeto virtual\".\n[…]\nEm 6 de novembro de 2025, o Portal Léo Dias revelou que a TV Globo estaria desenvolvendo uma continuação de Avenida Brasil para 2027, como uma forma de celebrar os 15 anos da novela. A trama será exibida como a substituta de Quem Ama Cuida na fila do horário das nove e teria Ricardo Villamarim como diretor e João Emmanuel Carneiro como autor. Os primeiros nomes sondados foram os de Adriana Esteves e Murilo Benício, que teriam aceitado o convite.\n[…]\nAvenida Brasil no Memória Globo"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Dancin' Days",
      "descricao": "Telenovela da Rede Globo de 1978, com Sônia Braga, que levou a moda das discotecas a todo o Brasil."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Que novelista escreveu Dancin' Days, a novela de 1978 que espalhou a moda das discotecas pelo Brasil?",
    "resposta": "Gilberto Braga",
    "distratores": [
      "Janete Clair",
      "Manoel Carlos",
      "Cassiano Gabus Mendes"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Dancin%27_Days"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Dancin%27_Days",
        "situacao": "ok",
        "texto": "Dancin' Days é uma telenovela brasileira produzida e exibida pela TV Globo, de 10 de julho de 1978 a 27 de janeiro de 1979, em 174 capítulos. Foi a 21ª novela das oito exibida pela emissora, substituiu O Astro e foi substituída por Pai Herói.\n[…]\nBetty Faria foi o primeiro nome cogitado para viver a protagonista Júlia. Porém, Betty estava prestes a estrear o programa musical Brasil Pandeiro e recusou o papel. Inicialmente, Gilberto Braga queria Yoná Magalhães, mas Daniel Filho apostou em Sônia Braga, apesar de ela ser jovem para o papel, uma vez que a atriz tinha 28 anos, enquanto a personagem tinha 34. Para o papel de Hélio, Gilberto havia pensado no próprio diretor de Dancin' Days, Daniel Filho.\n[…]\nA trilha sonora nacional de Dancin' Days foi lançada em meados de 1978 pela Som Livre. O repertório ficou a cargo de Guto Graça Mello e não agradou Gilberto Braga, que a partir de então passou a sempre estar presente na escolha das músicas de suas novelas. O autor comentou:\n[…]\nSônia Braga com sua personagem Júlia, influenciou a moda no Brasil, com suas roupas de cetim e meias soquetes de lurex. As meias eram meio fosforescentes, listradas e coloridas, com sandálias de tiras e salto alto. Dancin' Days foi tema, em 1978, de uma reportagem da revista americana Newsweek que destacou a influência da novela sobre os hábitos de consumo dos telespectadores.\n[…]\nEm 2010, Sônia Braga e Antônio Fagundes se reencontraram em cena no episódio \"A Adúltera da Urca\" da série As Cariocas, inspirada no livro homônimo de Sérgio Porto. Seus personagens foram batizados de Júlia e Cacá, assim como em Dancin’ Days, numa homenagem do diretor Daniel Filho à novela de Gilberto Braga.\n[…]\nDancin' Days no IMDb"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Pica-Pau",
      "descricao": "Pássaro de desenho animado, de risada característica, que estreou nos cinemas em 1940 e fez sucesso na TV."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "O Pica-Pau, de risada inconfundível, estreou nos cinemas em 1940. Que animador americano criou o personagem?",
    "resposta": "Walter Lantz",
    "fonte": [
      "https://en.wikipedia.org/wiki/Woody_Woodpecker"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Woody_Woodpecker",
        "situacao": "ok",
        "texto": "Woody Woodpecker is a cartoon character created by American animators Walter Lantz and Ben \"Bugs\" Hardaway. He appeared in theatrical short films produced by Walter Lantz Productions and Universal Pictures' animation studio from 1940 until 1972.\n[…]\nWalter Lantz and movie pioneer George Pal were good friends. Woody Woodpecker cameos in nearly every film that Pal produced or directed; for example, during the 1966 sequence in The Time Machine (1960), a little girl drops her Woody Woodpecker doll as she goes into an air raid shelter. In Doc Savage: The Man of Bronze (1975), Grace Stafford cameos, carrying a Woody Woodpecker doll.\n[…]\nIn 2007, Universal Pictures Home Entertainment released The Woody Woodpecker and Friends Classic Cartoon Collection, a three-disc DVD boxed set compilation of Walter Lantz \"Cartunes\". The first forty-five Woody Woodpecker shorts from Knock Knock to The Great Who-Dood-It were presented in the box set in chronological order of release, with various Chilly Willy, Andy Panda, Swing Symphonies, and other Lantz shorts also included.\n[…]\nWoody was the star of a number of comic book series published in the U.S. and around the world. The main title, Walter Lantz Woody Woodpecker, ran from 1952 to 1983.\n[…]\nWalter Lantz Woody Woodpecker became an independent comic book (starting with issue #16 to reflect the earlier appearances in Four Color) in Dec. 1952-Jan. 1953. It ran for 201 issues, published by Dell and then Western Publishing (Whitman/Gold Key), lasting until 1983.\n[…]\nWalter Lantz Productions\n[…]\nList of Walter Lantz cartoon characters\n[…]\nWoody Woodpecker profile at the Walter Lantz Cartune Encyclopedia\n[…]\nWatch Woody Woodpecker in the public domain Pantry Panic (1941)\n[…]\nWoody Woodpecker on the Internet Movie Database"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pica-Pau_%28personagem%29",
        "situacao": "ok",
        "texto": "Pica-Pau (no original em inglês Woody Woodpecker e denominada em Portugal O Pica-Pau) é um personagem da série estadunidense de mesmo nome, um pica-pau antropomórfico (animal com corpo e características humanas), que estrelou vários curta-metragens de animação produzidos pelo estúdio de Walter Lantz e distribuídos pela Universal Pictures.\n[…]\nEntão, Kreisler pediu a Walter Lantz novos episódios, como se nada tivesse acontecido. Depois do sucesso do Pica-Pau como coadjuvante no desenho do Andy Panda, eles resolveram fazer um desenho onde o personagem apareceria sozinho e seria o astro. Então, Lantz precisou de um nome para o Pica-Pau e decidiu chamá-lo de \"Woody Woodpecker\", que foi também o título do primeiro desenho animado do Pica-Pau.\n[…]\nO desenho animado Woody de 1943, The Dizzy Acrobat, foi nomeado para o Oscar de Melhor Curta (Cartoons) de 1944, que perdeu para o desenho animado de Tom e Jerry da MGM, The Yankee Doodle Mouse. A estreia de Woody Woodpecker também marcou uma mudança no estilo de direção do estúdio Walter Lantz, já que o personagem foi fortemente inspirado pelo personagem Patolino criado por Tex Avery, Looney Tunes, da Warner Bros. em termos de humor, e foi isso que deu fama ao estúdio Walter Lantz.\n[…]\nO próprio Blanc forneceu a voz para os três primeiros curtas do Pica-Pau até o episódio \"'Pantry Panic\" em 1941, mas depois disso Blanc assinou um contrato de exclusividade com a Warner Bros, que só permitia que ele fizesse as vozes dos personagens da Warner, e ele não pode continuar a fazer a voz do Pica-Pau, e foi substituído por Ben Hardaway e também pela própria esposa de Walter Lantz, Grace Stafford, porém a risada que Blanc havia gravado foi usada até o final dos anos 1940 e em 1951 os outros atores de voz tiveram que adaptar a risada com suas próprias vozes.\n[…]\nWoody Woodpecker (2018- )\n[…]\nWalter Lantz",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Grey's Anatomy",
      "descricao": "Série médica americana estreada em 2005, sobre os médicos de um hospital de Seattle, com Meredith Grey como protagonista."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "A série médica Grey's Anatomy, estreada em 2005, foi criada por qual roteirista e produtora americana?",
    "resposta": "Shonda Rhimes",
    "fonte": [
      "https://en.wikipedia.org/wiki/Grey%27s_Anatomy"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Grey%27s_Anatomy",
        "situacao": "ok",
        "texto": "Grey's Anatomy is an American medical drama television series focusing on the personal and professional lives of surgical interns, residents, and attendings at the fictional Seattle Grace Hospital (later renamed Seattle Grace Mercy West Hospital, and finally Grey Sloan Memorial Hospital). The series premiered on March 27, 2005, on ABC as a mid-season replacement and has been renewed annually for t\n[…]\nIts title is a mixture of the protagonist's surname and the name of the classic human anatomy textbook Gray's Anatomy. Writer Shonda Rhimes developed the pilot and served as showrunner, head writer, and executive producer until stepping down in 2015. Set in Seattle, Washington, the series is filmed primarily in Los Angeles, California.\n[…]\nBy any standards, Grey's Anatomy has been successful television, ranking highly in the ratings for nine seasons and entering the cultural lexicon via phrases as cloying yet catchy as 'McDreamy', the show has had its periods of being intensely irritating, and it has had its periods when it seems as if Shonda Rhimes has taken leave of her faculties, but it's also got an amazingly high batting average, particularly with every solid season that passes along in this second act of its run.\" The site lauded the show saying, \"On average, it's been very good TV, filled with interesting, driven characters who run the gamut of professions within the show's hospital setting.\n[…]\nObviously, Shonda Rhimes didn't reinvent the wheel with the series, but there's no denying its popularity.\" adding, \"I understand its significance in the pop culture sphere.\" He also stated that the show could go higher in the ranks with the upcoming season stating, \"Apparently, Grey's Anatomy fans are passionate about their show, although it seems like they've been closeted for the last few years.\n[…]\nGrey's Anatomy at IMDb\n[…]\nGrey's Anatomy at epguides.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Grey%27s_Anatomy",
        "situacao": "ok",
        "texto": "Grey's Anatomy (no Brasil, A Anatomia de Grey ou Grey's Anatomy - Portugal, Anatomia de Grey) é um drama médico norte-americano exibido no horário nobre da rede ABC. Seu episódio piloto foi transmitido pela primeira vez em 27 de março de 2005 nos Estados Unidos. A série foca na vida de médicos cirurgiões internos, residentes e atendentes; e como eles evoluem na sua profissão ao tentar manter a vid\n[…]\nO título da série é uma brincadeira com Anatomia de Gray, um renomado livro de anatomia humana escrito por Henry Gray. A ideia original foi de Shonda Rhimes, que além de idealizadora, é, produtora executiva, juntamente com Betsy Beers, Mark Gordon, Krista Vernoff, Rob Corn, Mark Wilding e Allan Heinberg. Embora se passe no ficcional Grey Sloan Memorial Hospital (anteriormente Seattle Grace Mercy West) em Seattle, Washington, as gravações são realizadas principalmente em Los Angeles, Califórnia.\n[…]\nA premissa de Grey's Anatomy não foi aceita de primeira pelos executivos da rede ABC. Shonda Rhimes, a criadora do drama médico, lembrou um encontro que teve com a cúpula da emissora, reunião na qual lhe disseram que a série iria ser um fracasso, pois ninguém iria assistir.\n[…]\nShonda Rhimes, queria fazer uma série que ela gostaria de assistir e pensou que seria interessante criar uma série sobre \"mulheres inteligentes competindo umas contra as outras\". Quando perguntada como decidiu criar um drama médico, ela respondeu:\n[…]\nGrey's Anatomy é produzido pela ShondaLand, em associação com The Mark Gordon Company e ABC Studios (anteriormente Touchstone Television). Rhimes, Betsy Beers, Krista Vernoff, Mark Gordon, Rob Corn e Mark Wilding estão sendo, ao longo das temporadas, os produtores executivos. Nas temporadas subsequentes, Steve Mulholland, Kent Hodder, Nancy Bordson, James D. Parriott e Peter Horton também foram produtores executivos e Allan Heinberg juntou-se a série em 2006.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "The Crown",
      "descricao": "Série dramática da Netflix, estreada em 2016, sobre o reinado da rainha Elizabeth II."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "The Crown foi criada pelo roteirista que antes escreveu o filme A Rainha, de 2006. Quem é ele?",
    "resposta": "Peter Morgan",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Crown_(TV_series)",
      "https://en.wikipedia.org/wiki/Peter_Morgan"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Crown_(TV_series)",
        "situacao": "ok",
        "texto": "The Crown is a historical drama television series about the reign of Queen Elizabeth II, created and principally written by Peter Morgan and produced by Left Bank Pictures and Sony Pictures Television for Netflix. Morgan developed the series from his film The Queen (2006) and his stage play The Audience (2013), which also focused on Elizabeth.\n[…]\nIn November 2014, it was announced that Netflix was to adapt the 2013 stage play The Audience into a television series. Peter Morgan, who wrote the 2006 film The Queen and the play, is the main scriptwriter for The Crown. The directors of the first season are Stephen Daldry, Philip Martin, Julian Jarrold, and Benjamin Caron. The first 10-part season was the most expensive drama produced by Netflix and Left Bank Pictures, costing at least £100 million.\n[…]\nMorgan said that when the storylines were being discussed for season five, \"it soon became clear that in order to do justice to the richness and complexity of the story we should go back to the original plan and do six seasons\". He added that the final two seasons would enable them \"to cover the same period in greater detail\". As of 2020, the estimated production budget of The Crown has been reported to be $260 million, making it one of the most expensive television series ever.\n[…]\nIn April 2022, it was reported that Netflix and Left Bank were having preliminary conversations about a prequel. It is believed that the series will span a period of nearly 50 years, starting with the death of Queen Victoria in 1901 and ending around the wedding of Princess Elizabeth in 1947, covering the reigns of Edward VII, George V, Edward VIII, and George VI. In April 2026 the prequel was confirmed, with Morgan expected to return.\n[…]\nThe Crown on X\n[…]\nThe Crown at Metacritic\n[…]\nThe Crown at Rotten Tomatoes\n[…]\n\"The Crown: Masterclass\". BAFTA Guru. 28 February 2018."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Peter_Morgan",
        "situacao": "ok",
        "texto": "Peter Julian Robin Morgan  (born 10 April 1963) is a British playwright and screenwriter. Known for his work for stage and screen, he often writes about history or figures such as Elizabeth II, whom he has covered extensively in all major media. He has received numerous accolades including five BAFTA Awards, two Primetime Emmy Awards, and four Golden Globe Awards, in addition to nominations for tw\n[…]\nIn February 2017, Morgan was awarded a British Film Institute Fellowship.\n[…]\nMorgan is also known for his work in television writing the ITV series The Jury (2002), the Channel 4 film The Deal (2003), and the HBO films Longford (2006), and The Special Relationship (2010). He served as creator and show-runner of the Netflix series The Crown (2016–2023).\n[…]\nAlso in 2006, Morgan's first play, Frost/Nixon, was staged at the Donmar Warehouse theatre in London. Starring Michael Sheen as David Frost and Frank Langella as Richard Nixon, the play concerns the series of televised interviews that the disgraced former president granted Frost in 1977. These ended with his tacit admission of guilt regarding his role in the Watergate scandal. The play was directed by Michael Grandage and opened to enthusiastic reviews.\n[…]\nMorgan is the creator and writer of the Netflix fictional historical drama series The Crown, a biographical story about the reign of Queen Elizabeth II. The first season starred Claire Foy, Matt Smith, Vanessa Kirby, as Queen Elizabeth II, Prince Philip, and Princess Margaret, respectively. Jared Harris and John Lithgow made supporting turns as King George VI and Winston Churchill.\n[…]\nMorgan received three Primetime Emmy Award for Outstanding Writing for a Drama Series nominations for writing the episodes, \"Assassins\" (2016), \"Mystery Man\" (2017), and \"Aberfan\" (2019).\n[…]\nPeter Morgan at IMDb\n[…]\nPeter Morgan: Screenwriting Lecture part of the BAFTA Screenwriters on Screenwriting series."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/The_Crown",
        "situacao": "ok",
        "texto": "The Crown é uma série de televisão via streaming de origem britânica-americana do gênero drama biográfico, criada e escrita por Peter Morgan para a Netflix. A série conta a trajetória da rainha Elizabeth II do Reino Unido, desde o seu casamento em 1947 ao inicio dos anos 2000.\n[…]\nEm novembro de 2014, foi anunciado que a Netflix adaptaria a peça de teatro de 2013, The Audience, em uma série de televisão. Peter Morgan, que escreveu o filme de 2006 A Rainha, é o principal roteirista de The Crown. Os diretores da série de televisão que também estiveram envolvidos na produção teatral são Stephen Daldry, Philip Martin, Julian Jarrold e Benjamin Caron.\n[…]\nÉ feito com base no desejo de transmitir uma mensagem específica que só pode ser transmitida por invenção.\" Um exemplo de tal desvio é a trama da primeira temporada em que a Rainha e o governo se opõem ao desejo da princesa Margaret de se casar com Peter Townsend, o que exigia a permissão do monarca de acordo com a Lei de Casamentos Reais de 1772; na realidade, foi feito um plano para alterar a lei para permitir o casamento e, ao mesmo tempo, remover Margaret e seus filhos da linha de sucessão.\n[…]\nSimon Jenkins, escrevendo para o The Guardian, descreveu-o como \"história falsa\", \"realidade sequestrada como propaganda e um abuso covarde de licença artística\" que fabricou a história para se adequar à sua própria narrativa preconcebida, e argumentou que \"Morgan poderia ter feito seu ponto de vista com verdade\".\n[…]\nA lista abaixo apresenta as premiações mais populares onde tanto a equipe, quanto a série de The Crown, foram indicados.\n[…]\nThe Crown no IMDb\n[…]\nThe Crown no Instagram\n[…]\nThe Crown no X\n[…]\nThe Crown no Rotten Tomatoes\n[…]\n«The Crown: Masterclass». BAFTA Guru. 28 de fevereiro de 2018",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Black Mirror",
      "descricao": "Série britânica de antologia estreada em 2011, com histórias independentes sobre os efeitos sombrios da tecnologia."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Que roteirista britânico criou Black Mirror, a série de histórias sombrias sobre a tecnologia?",
    "resposta": "Charlie Brooker",
    "distratores": [
      "Steven Moffat",
      "Ricky Gervais",
      "Russell T Davies"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Black_Mirror"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Black_Mirror",
        "situacao": "ok",
        "texto": "Black Mirror is a British anthology television series created by Charlie Brooker. Most episodes are speculative fiction, set in near-future dystopias containing sci-fi technology. The series is inspired by The Twilight Zone and uses the themes of technology and media to comment on contemporary social issues. Most episodes are written by Brooker with involvement by the executive producer Annabel Jo\n[…]\nSome writers believe that Black Mirror episodes are set in a shared universe, due to the abundance of Easter eggs, or tonal and thematic connections across the programme as a whole. Fans and journalists have attempted to establish concrete chronologies between episodes. The series creator Charlie Brooker's comments on this topic changed over time. He initially described the programme's setting as an \"artistic universe\" or \"psychologically shared universe\".\n[…]\nThe series's inception was in 2010. Brooker and Jones had begun to work together on Charlie Brooker's Screenwipe, a television review programme which aired from 2006 to 2008. The first pitch for Black Mirror, to the head of comedy at Channel 4, was for eight half-hour episodes by different authors. Technology was a lesser focus, and the worlds were larger and more detailed, which Jones said was not possible to execute properly in the short runtime.\n[…]\nAccording to Variety, this left Brooker and Jones unable to produce additional series unless new agreements were put in place.\n[…]\nIn June 2018, the oral history companion book Inside Black Mirror was announced. Brooker, Jones and Jason Arnopp are the credited writers. The book features sections on the 19 episodes in the first four series, each consisting of conversational interviews from cast and crew along with stills and behind-the-scenes images. The book was released in the UK on 1 November 2018 and in the US on 20 November 2018 from Penguin Random House.\n[…]\nBlack Mirror at epguides.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Black_Mirror",
        "situacao": "ok",
        "texto": "Black Mirror é uma série de televisão de antologia britânica criada por Charlie Brooker. A maioria dos episódios são do gênero de ficção especulativa, ambientados em distopias num futuro próximo com tecnologia de ficção científica. A série possui inspiração em The Twilight Zone e utiliza os temas da tecnologia e da mídia para comentar questões sociais contemporâneas. A maioria dos episódios é escr\n[…]\nCharlie Brooker expressou relutância em fazer uma sequência para o episódio \"San Junipero\", que foi bastante aclamado pela crítica.\n[…]\nCharlie Brooker explicou a abertura da série para o jornal The Guardian: \"Se tecnologia é uma droga — e parece ser uma droga — então quais são, precisamente, os efeitos colaterais?\" Esta área — entre prazer e desconforto — é onde Black Mirror, minha nova série dramática, se passa. O \"espelho negro\" da abertura é o espelho que você encontrará em cada parede, em cada mesa, na palma de cada mão: a tela fria e brilhante de uma TV, de um monitor, de um smartphone\".\n[…]\nNa segunda temporada, Black Mirror continuou recebendo aclamação. Em sua crítica do episódio \"Be Right Back\", Sameer Rahim, do The Telegraph, escreveu: \"A série tocou em ideias importantes — a falsa maneira que nós, às vezes, nos apresentamos online, e nosso crescente vício em vidas virtuais — mas também foi uma exploração tocante do sofrimento. Para mim, esta é a melhor coisa que Charlie Brooker já fez\".\n[…]\nEm junho de 2017, Charlie Brooker anunciou uma série de livros baseados em Black Mirror, que apresentarão \"histórias novas, originais e obscuramente satíricas, que atingem nosso desconforto coletivo em relação ao mundo moderno\". O primeiro livro foi lançado em 1 de novembro de 2018 no Reino Unido e em 20 de novembro de 2018 nos Estados Unidos, e conta com curtas histórias antológicas, escritas por diferentes autores.\n[…]\nBlack Mirror no Channel 4\n[…]\nBlack Mirror no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Futurama",
      "descricao": "Série animada americana estreada em 1999, sobre Fry, um entregador de pizza que acorda mil anos no futuro."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que desenhista criou Futurama, o desenho de 1999 sobre um entregador de pizza que fica congelado por mil anos?",
    "resposta": "Matt Groening",
    "fonte": [
      "https://en.wikipedia.org/wiki/Futurama"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Futurama",
        "situacao": "ok",
        "texto": "Futurama is an American animated science fiction sitcom created by Matt Groening and developed by Groening and David X. Cohen for the Fox Broadcasting Company, and later revived by Comedy Central and then Hulu. The series follows Philip J. Fry, a young man who is cryogenically preserved for 1,000 years and revived on December 31, 2999. Fry finds work at the interplanetary delivery company Planet E\n[…]\nThe television network Fox expressed a strong desire in the mid-1990s for Matt Groening to create a new series after the success of his previous series, The Simpsons; Groening began conceiving Futurama during this period. In 1996, he enlisted David X. Cohen, then a writer and producer for The Simpsons, to assist in developing the show. The two spent time researching science fiction books, television shows, and films.\n[…]\nInitially, Fox did not want this logo to be used on the show, but when creator Matt Groening purchased the rights to the logo, the network had a change of heart and allowed the altered version to be aired.\n[…]\nOn July 25, 2026, Matt Groening, the series’ executive producers and cast announced during a panel discussion at the 2026 San Diego Comic-Con that Hulu had ordered 3 new extended-length specials, ahead of the season eleven premiere. Hulu would confirm this as well. The first of these new specials, set to have a Christmas theme, will premiere in 2027.\n[…]\nWhen Comedy Central began negotiating for the rights to air Futurama reruns, Fox suggested that there was a possibility of also creating new episodes. Negotiations were already underway with the possibility of creating two or three direct-to-DVD films. When Comedy Central committed to sixteen new episodes, it was decided that four films would be produced. On April 26, 2006, Groening noted in an interview that co-creator David X.\n[…]\nIn 2012, an app inspired by the head in a jar gag was launched by Matt Groening."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Futurama",
        "situacao": "ok",
        "texto": "Futurama é   uma sitcom animada americana de ficção científica criada por Matt Groening o mesmo criador dos Os Simpsons e desenvolvida por ele e David X. Cohen para a FOX. A série acompanha as aventuras de Philip J. Fry, um rapaz novaiorquino entregador de pizza do final do século XX que, após ser \"acidentalmente\" congelado criogenicamente por mil anos, consegue um emprego na Planet Express, uma e\n[…]\nBender Bending Rodríguez (John DiMaggio): um robô alcoólatra, fumante, cleptomaníaco, misantropo, egocêntrico, de boca suja e pavio curto desenvolvido pela Mom's Friendly Robot Company em Tijuana, no México.[carece de fontes]? Seu visual passou por várias alterações antes de atingir seu estado final. Uma das decisões que Matt Groening tomou, consideradas particularmente difíceis, era saber se a cabeça de Bender deveria ser quadrada ou redonda.\n[…]\nMatt Groening começou a conceber Futurama em meados da década de 1990. Em 1996, ele recrutou David X. Cohen, então roteirista e produtor do Simpsons, para ajudar no desenvolvimento do programa. Os dois passaram um tempo pesquisando livros de ficção científica, programas de televisão e filmes antigos. Quando apresentaram o projeto para a Fox em abril de 1998, Groening e Cohen já haviam desenvolvido muitos dos personagens e enredos. Durante este primeiro encontro, a Fox encomendou treze episódios.\n[…]\nEm 28 de setembro de 2026, a série foi cancelada novamente, por um motivo da Hulu não ter mais planos para as futuras temporada da série, mas o Groening tem planos pro futuro de Futurama. Mas os 3 especiais longos ainda estão a caminho começando com o primeiro que chegará no Natal de 2027.\n[…]\nEm 2012, um aplicativo inspirado na piada das cabeças em frascos foi lançado por Matt Groening.\n[…]\nO licenciamento para jogos móveis ocorreu em 2016 com Futurama: Game of Drones e em 2017 com Futurama: Worlds of Tomorrow, lançado para Android e iOS naquele mesmo ano.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Bob Esponja Calça Quadrada",
      "descricao": "Série animada americana estreada em 1999, sobre uma esponja-do-mar amarela que trabalha numa lanchonete no fundo do mar."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "O desenho Bob Esponja foi criado por um ex-professor de biologia marinha. Qual é o nome dele?",
    "resposta": "Stephen Hillenburg",
    "fonte": [
      "https://en.wikipedia.org/wiki/Stephen_Hillenburg",
      "https://en.wikipedia.org/wiki/SpongeBob_SquarePants"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Stephen_Hillenburg",
        "situacao": "ok",
        "texto": "Stephen McDannell Hillenburg (August 21, 1961 – November 26, 2018) was an American animator, writer, producer, director, voice actor, and marine biology educator. He is best known for creating the animated television series SpongeBob SquarePants for Nickelodeon in 1999. The show has become the fourth longest-running American animated series. He also provided the original voice of Patchy the Pirate\n[…]\nWhen an interviewer asked Stephen Hillenburg what he was like as a child, he replied that he was \"probably well-meaning and naive like all kids.\" His passion for sea life can be traced to his childhood, when films by Jacques Cousteau, a French oceanographer, made a strong impression on him. Hillenburg said that Cousteau \"provided a view into that world\", which he had not known existed.\n[…]\nFortunately, Joe Murray saw my film ... and he took a huge chance.\", Hillenburg related.\n[…]\nSome evidence shows that the idea for SpongeBob SquarePants dates back to 1986, during Hillenburg's time at the Orange County Marine Institute.\n[…]\nIn education, they have donated to schools, including the Polytechnic School in Pasadena (which their son attended), CalArts, and Humboldt State University. Donations to the latter helped fund the HSU Marine Lab and the Stephen Hillenburg Marine Science Research Award Endowment, which the couple created in 2018 to support the university's marine-science research students.\n[…]\nThe previous year, the Princess Grace Foundation introduced the Stephen Hillenburg Animation Scholarship, an annual grant from the Hillenburgs to emerging animators.\n[…]\nThe marine demosponge species Clathria hillenburgi, known from mangrove habitats off the coast of Paraíba, Brazil, was named in honor of Stephen Hillenburg.\n[…]\nStephen Hillenburg at IMDb\n[…]\nStephen Hillenburg at the TCM Movie Database (archived)\n[…]\nStephen Hillenburg at the Nickelodeon Animation Studio website"
      },
      {
        "url": "https://en.wikipedia.org/wiki/SpongeBob_SquarePants",
        "situacao": "ok",
        "texto": "SpongeBob SquarePants, also known simply as SpongeBob, is an American animated comedy television series created by marine science educator and animator Stephen Hillenburg for Nickelodeon. It follows the adventures of SpongeBob SquarePants, an anthropomorphic yellow sea sponge, and his aquatic friends in the underwater city of Bikini Bottom.\n[…]\nHillenburg departed the series after the first three seasons and the production of The SpongeBob SquarePants Movie (2004), but returned in 2015 until his death in 2018.\n[…]\nSeries creator Stephen Hillenburg became fascinated with the ocean as a child and began developing his artistic abilities at a young age. Although these interests would not overlap for some time—the idea of drawing fish seemed boring to him—Hillenburg pursued both during college, majoring in marine biology and minoring in art at Humboldt State University.\n[…]\nThe 32-page bimonthly comic book series, SpongeBob Comics, was announced in November 2010 and debuted the following February. Before this, SpongeBob SquarePants comics had been published in Nickelodeon Magazine, and episodes of the television series had been adapted by Cine-Manga, but SpongeBob Comics was the first American comic book series devoted solely to SpongeBob SquarePants. It also served as SpongeBob SquarePants creator Stephen Hillenburg's debut as a comic book author.\n[…]\nChris Duffy, the former senior editor of Nickelodeon Magazine, serves as managing editor of SpongeBob Comics. Hillenburg and Duffy met with various cartoonists—including James Kochalka, Hilary Barta, Graham Annable, Gregg Schigiel, and Jacob Chabot—to contribute to each issues. Retired horror comics writer and artist Stephen R. Bissette returned to write a special Halloween issue in 2012, with Tony Millionaire and Al Jaffee.\n[…]\nSpongeBob SquarePants at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Stephen_Hillenburg",
        "situacao": "ok",
        "texto": "Stephen McDannell Hillenburg (Lawton, 21 de agosto de 1961 — San Marino, 26 de novembro de 2018) foi um animador, roteirista, cartunista e biólogo marinho americano, mais conhecido por ser o criador do desenho animado Bob Esponja Calça Quadrada, além de trabalhar com Joe Murray no desenho A vida moderna de Rocko, e com Arlene Klasky em Rugrats (Os anjinhos) como roteirista.\n[…]\nNascido em Lawton, Oklahoma e criado em Anaheim, Califórnia, Hillenburg ficou fascinado com o oceano quando criança e desenvolveu um interesse em arte.\n[…]\nEm 1994, Hillenburg começou a desenvolver personagens e conceitos da Zona Intertidal para o que se tornou o Bob Esponja Calça Quadrada. O programa foi ao ar continuamente desde sua estreia em 1999. Ele também dirigiu o primeiro filme, Bob Esponja, O Filme (2004), que ele originalmente pretendia ser o final da série. No entanto, a Nickelodeon queria produzir mais episódios, então Hillenburg renunciou ao cargo de protagonista.\n[…]\nEle voltou a fazer curtas-metragens na Hollywood Blvd., EUA, em 2013, mas continuou a ser creditado como produtor executivo de Bob Esponja Calça Quadrada. Hillenburg co-escreveu a história para a segunda adaptação cinematográfica da série, Bob Esponja - Um Herói Fora D' Água, lançado em 2015.\n[…]\nStephen foi um biólogo marinho que se interessou por esponjas do mar, como um suporte para ele criar o desenho. Stephen mudou a forma da esponja do mar para uma esponja de louças. E assim surgiu o personagem principal do desenho, com o tempo, surgiram outros. E \"Spongebob Squarepants\" tornou-se um sucesso, e posteriormente foi reconhecido como o desenho na Nickelodeon há mais tempo no ar.\n[…]\nEm março de 2017, Hillenburg foi diagnosticado com esclerose lateral amiotrófica. Morreu a 26 de novembro de 2018, aos 57 anos, devido a complicações desta doença neurodegenerativa, progressiva e rara.\n[…]\nStephen Hillenburg no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "O Auto da Compadecida (minissérie)",
      "descricao": "Minissérie da Rede Globo de 1999, dirigida por Guel Arraes, sobre as aventuras de João Grilo e Chicó no sertão, depois lançada como filme."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "A minissérie O Auto da Compadecida, de 1999, com as aventuras de João Grilo e Chicó, adapta a peça de qual escritor?",
    "resposta": "Ariano Suassuna",
    "fonte": [
      "https://pt.wikipedia.org/wiki/O_Auto_da_Compadecida_(filme)",
      "https://pt.wikipedia.org/wiki/Auto_da_Compadecida"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/O_Auto_da_Compadecida_(filme)",
        "situacao": "ok",
        "texto": "O Auto da Compadecida é um filme brasileiro de comédia dramática, lançado em 2000, dirigido por Guel Arraes, com roteiro de Adriana Falcão, João Falcão e do próprio Arraes, e baseado na peça teatral Auto da Compadecida de 1955 de Ariano Suassuna, com elementos de O Santo e a Porca, Torturas de um Coração e A Pena e a Lei, ambas do mesmo autor, além de influências de Decamerão, de Giovanni Boccacci\n[…]\nSelton Mello como Chicó: sujeito covarde e ingênuo, que sempre acaba embarcando nos planos de João Grilo, seu melhor amigo.\n[…]\nDiogo Vilela como Eurico: proprietário da padaria Miramar e patrão de João Grilo e Chicó.\n[…]\nO Auto da Compadecida nasceu originalmente como uma peça teatral escrita por Ariano Suassuna em 1955 e encenada pela primeira vez em 1956. Em 1999, foi adaptada como uma minissérie exibida pela TV Globo que continha mais tramas paralelas que acabaram por ser removidas do filme. Nessa época, o diretor Guel Arraes procurou Suassuna para que ele fizesse uma adaptação cinematográfica da peça, acrescentando cenas de outras de suas peças, O Santo e a Porca e Torturas de um Coração.\n[…]\nEntre as passagens omitidas no filme estão o gato que \"discome\", na qual João Grilo e Chicó tentam enganar Dora apresentando-lhe um gato que evacuava moedas de prata; e a primeira invasão dos cangaceiros à cidade de Taperoá.\n[…]\nOs atores escolhidos pelo diretor agradaram Suassuna, que disse que Matheus Nachtergaele foi o melhor intérprete para João Grilo. Ele afirmou: \"Sua atuação é impecável, pois consegue passar toda a esperteza do personagem, que luta contra o patriarcado rural, a burguesia urbana, a polícia, o cangaceiro, e até contra o diabo\". Elogiando as demais atuações, Suassuna disse que a melhor atriz do filme foi Fernanda Montenegro, no papel de Nossa Senhora.\n[…]\nO Auto da Compadecida (minissérie que deu origem ao filme)\n[…]\nO Auto da Compadecida 2 (filme de 2024)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Auto_da_Compadecida",
        "situacao": "ok",
        "texto": "Auto da Compadecida é uma peça teatral em forma de auto, em três atos, escrita pelo autor brasileiro Ariano Suassuna em 1955. Sua primeira encenação aconteceu em 1956, no Recife, em Pernambuco. A peça também foi encenada em 1974, com direção de João Cândido. Em 2 de outubro de 1957 a peça foi publicada em forma de livro pela editora Agir no Rio de Janeiro.\n[…]\nNa escrita, apresenta traços de linguagem oral, demonstrando na fala do personagem sua classe social. Há também regionalismos nordestinos, região natural de Suassuna e cenário da peça.\n[…]\nDa literatura de cordel, Suassuna pegou emprestado o personagem João Grilo, personagem folclórico presente tanto no Brasil, quanto em Portugal. Também buscou inspiração em dois folhetos de Leandro Gomes de Barros (1865-1918), O Dinheiro, também chamado de O testamento do cachorro e O cavalo que defecava dinheiro.\n[…]\nO Auto da Compadecida projetou Suassuna em todo o país e foi considerada por Sábato Magaldi, em 1962, \"o texto mais popular do moderno teatro brasileiro\".\n[…]\nA peça foi adaptada para o cinema pela primeira vez em 1969, com o filme A Compadecida. A segunda adaptação veio em 1987, com o filme Os Trapalhões no Auto da Compadecida.\n[…]\nEm 1999, foi apresentada como uma minissérie pela Rede Globo de Televisão, que inclusive foi a responsável pela inclusão do artigo \"O\" antes do nome original. A adaptação de maior sucesso, foi editada em 2000 para exibição nos cinemas, contando com alguns personagens, como o Cabo Setenta, Rosinha e Vicentão, que não fazem parte da peça original. Esses personagens adicionais fazem parte da obra Torturas de um Coração, além de elementos de O Santo e a Porca, ambas de autoria de Ariano Suassuna.\n[…]\nO Auto da Compadecida (minissérie de 1999)\n[…]\nO Auto da Compadecida (teatro de 2017)\n[…]\nO Auto da Compadecida 2 (filme de 2024)\n[…]\nO Auto da Compadecida, montagem do Grupo Maria Cutia (2025)"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Mad Men",
      "descricao": "Série dramática americana exibida de 2007 a 2015, sobre publicitários de uma agência de Nova York nos anos sessenta."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O título da série Mad Men brinca com o nome de qual avenida de Nova York, sede das grandes agências de publicidade?",
    "resposta": "Avenida Madison",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mad_Men"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mad_Men",
        "situacao": "ok",
        "texto": "Mad Men is an American period drama television series created by Matthew Weiner for AMC. It ran from July 19, 2007 until May 17, 2015, with seven seasons and 92 episodes. The series title is allegedly borrowed from the phrase advertisers working on Madison Avenue used to refer to themselves, although the only documented use of the phrase may derive from the late-1950s work of James Kelly, an adver\n[…]\nThe series covers the advertising industry centered on Madison Avenue in New York City in the 1960s, primarily following the professional and personal life of protagonist Don Draper, a creative director and partner at a Manhattan firm. The plotlines also follow the personal and professional lives of Draper's family and co-workers as they relate to him and each other.\n[…]\nColby also pointed to an exposé published in a 1963 issue of Ad Age that revealed that \"out of over 20,000 employees, the report identified only 25 blacks working in any kind of professional or creative capacity, i.e., nonclerical or custodial.\" Colby wrote, \"Mad Men isn't cowardly for avoiding race. Quite the opposite. It's brave for being honest about Madison Avenue's cowardice.\"\n[…]\nAndrew Cracknell, author of The Real Mad Men: The Renegades of Madison Avenue and the Golden Age of Advertising, also thought the show lacked authenticity, stating, \"One thing of which they [...] are all equally contemptuous\", in regards to the industry's elite, \"is the output of Sterling Cooper. But then they have every right. None of them would ever have wanted to work for Draper and none of his departments would have got a job at any of their agencies. Particularly Draper himself. Too phony.\"\n[…]\nSeeing History in Mad Men, an interactive timeline as of 2010 by The New York Times"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mad_Men",
        "situacao": "ok",
        "texto": "Mad Men (no Brasil, Mad Men: Inventando Verdades) é uma série de televisão dramática estadunidense criada e produzida por Matthew Weiner. Foi exibida às noites de domingo pelo AMC, canal de televisão por assinatura, com produção da Lionsgate Television. O seu primeiro episódio foi para o ar em 19 de julho de 2007. A sétima e última temporada teve 14 episódios e foi dividida em duas partes de sete \n[…]\nA série passa-se na década de 1960, inicialmente na agência de publicidade fictícia Sterling Cooper, localizada na Madison Avenue, em Nova York. O foco da série é o personagem Don Draper (Jon Hamm), diretor de criação da Sterling Cooper, bem como as pessoas que fazem parte de seu círculo social. A trama tem como foco a parte profissional das agências de publicidade e as vidas pessoais das personagens que trabalham nelas, à luz das mudanças sociais ocorridas nos Estados Unidos da época.\n[…]\nRobert Morse foi escalado para o papel do sócio sênior Bertram Cooper; Morse havia participado de dois filmes de 1967 sobre homens de negócios inescrupulosos, A Guide for the Married Man (1967), uma fonte de inspiração para Weiner, e How to Succeed in Business without Really Trying (1967), no qual Morse reprisou o papel que havia feito na peça homônima da Broadway de 1961, por sua vez baseada num romance satírico escrito por um antigo executivo da agência publicitária nova-iorquina Benton & Bowles, Inc.\n[…]\nEntre as pessoas que trabalhavam no ramo da publicidade na década de 1960, as opiniões diferem quanto ao realismo de Mad Men. Jerry Della Femina, que trabalhava como redator na época e mais tarde fundou sua própria agência, disse \"Imagine um bando de bêbados conversando entre si através de uma nuvem de fumaça – assim que eram os anos 1960\". Mas Allen Rosenshine, outro redator que mais tarde foi comandar a BBDO, chamou o programa de \"fabricação total\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Saramandaia (telenovela de 1976)",
      "descricao": "Telenovela da Rede Globo de 1976, escrita por Dias Gomes, marcada pelo realismo fantástico, com personagens como um homem que cria asas."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Na novela Saramandaia, de 1976, parte dos moradores queria rebatizar a cidade com esse nome. Como a cidade se chamava?",
    "resposta": "Bole-Bole",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Saramandaia_(telenovela_de_1976)",
      "https://pt.wikipedia.org/wiki/Saramandaia"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Saramandaia_(telenovela_de_1976)",
        "situacao": "ok",
        "texto": "Saramandaia é uma telenovela brasileira produzida e exibida pela TV Globo de 3 de maio a 31 de dezembro de 1976, em 160 capítulos. Substituiu O Grito e foi substituída pela reprise de O Bem-Amado até a estréia de Nina, sendo a 23ª \"novela das dez\" exibida pela emissora.\n[…]\nAmbientada na zona canavieira de Pernambuco, a história se situa no fictício município de Bole-Bole, o qual passa por um plebiscito para a mudança do nome.\n[…]\nO movimento é encabeçado por duas facções: os tradicionalistas, liderados pelo coronel Zico Rosado, que usam argumentos históricos para manter o nome atual, Bole-Bole; e os mudancistas, liderados pelo coronel Tenório Tavares e pelo vereador João Gibão — este último irmão do prefeito Lua Viana —, que alegam vergonha do nome, querendo mudá-lo para Saramandaia.\n[…]\nCésar Augusto - Policial de Bole-Bole\n[…]\nPara escrever a trama, Dias Gomes inspirou-se num fato verídico: no início dos anos 70, a cidade gaúcha de Não-Me-Toque mudou de nome para Campo Real, depois de um movimento popular que alegava que a cidade era alvo de brincadeiras das cidades vizinhas por causa do nome inusitado (anos depois um novo plebiscito decidiu pela volta do nome antigo). O realismo mágico também foi uma das inspirações do autor.\n[…]\nEste estilo literário estava em alta naquela época e tinha Gabriel García Márquez como seu maior expoente. Saramandaia foi vista como uma espécie de vingança de Dias Gomes aos censores do governo militar. Porém, mesmo com um texto afiado de críticas disfarçadas, a novela não conseguiu passar ilesa perante os censores, e quase todos os capítulos da história sofreram cortes.\n[…]\nBole-Bole - Wálter Queiróz"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Saramandaia",
        "situacao": "ok",
        "texto": "Saramandaia é uma telenovela brasileira produzida e exibida pela TV Globo de 3 de maio a 31 de dezembro de 1976, em 160 capítulos. Substituiu O Grito e foi substituída pela reprise de O Bem-Amado até a estréia de Nina, sendo a 23ª \"novela das dez\" exibida pela emissora.\n[…]\nAmbientada na zona canavieira de Pernambuco, a história se situa no fictício município de Bole-Bole, o qual passa por um plebiscito para a mudança do nome.\n[…]\nO movimento é encabeçado por duas facções: os tradicionalistas, liderados pelo coronel Zico Rosado, que usam argumentos históricos para manter o nome atual, Bole-Bole; e os mudancistas, liderados pelo coronel Tenório Tavares e pelo vereador João Gibão — este último irmão do prefeito Lua Viana —, que alegam vergonha do nome, querendo mudá-lo para Saramandaia.\n[…]\nCésar Augusto - Policial de Bole-Bole\n[…]\nPara escrever a trama, Dias Gomes inspirou-se num fato verídico: no início dos anos 70, a cidade gaúcha de Não-Me-Toque mudou de nome para Campo Real, depois de um movimento popular que alegava que a cidade era alvo de brincadeiras das cidades vizinhas por causa do nome inusitado (anos depois um novo plebiscito decidiu pela volta do nome antigo). O realismo mágico também foi uma das inspirações do autor.\n[…]\nEste estilo literário estava em alta naquela época e tinha Gabriel García Márquez como seu maior expoente. Saramandaia foi vista como uma espécie de vingança de Dias Gomes aos censores do governo militar. Porém, mesmo com um texto afiado de críticas disfarçadas, a novela não conseguiu passar ilesa perante os censores, e quase todos os capítulos da história sofreram cortes.\n[…]\nBole-Bole - Wálter Queiróz"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Chacrinha",
      "descricao": "Abelardo Barbosa, apresentador brasileiro de rádio e TV, o Velho Guerreiro, comandante de programas de auditório como o Cassino do Chacrinha."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O apelido do apresentador Abelardo Barbosa, o Chacrinha, veio de um programa de rádio transmitido de que tipo de propriedade?",
    "resposta": "Uma chácara",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Chacrinha"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Chacrinha",
        "situacao": "ok",
        "texto": "José Abelardo Barbosa de Medeiros (Surubim, 30 de setembro de 1917 – Rio de Janeiro, 30 de junho de 1988), mais conhecido como Chacrinha ou simplesmente Abelardo Barbosa, foi um comunicador de rádio e televisão brasileiro, apresentador de programas de auditório de grande sucesso das décadas de 1950 a 1980.\n[…]\nFoi o autor da célebre frase: \"Na televisão, nada se cria, tudo se copia\". Em seus programas de televisão, foram revelados para o país inteiro cantores como Roberto Carlos, Clara Nunes, Roberto Leal, Paulo Sérgio, Raul Seixas, Perla, entre muitos outros. Desde a década de 1970, era chamado de Velho Guerreiro, após uma homenagem feita a ele pelo cantor Gilberto Gil, que assim se referiu a Chacrinha em sua canção \"Aquele Abraço\".\n[…]\nEm 1943, lança na Rádio Clube Fluminense um programa de marchinhas de carnaval chamado Rei Momo na Chacrinha, que faz muito sucesso. Passa então a ser conhecido como Abelardo \"Chacrinha\" Barbosa. Nos anos 1950, comandaria o programa Cassino da Chacrinha, no qual viria a lançar vários sucessos da música popular brasileira como \"Estúpido Cupido\", da cantora paulista Celly Campelo, e \"Coração de Luto\", do artista gaúcho Teixeirinha.\n[…]\nChacrinha apareceu em vários filmes brasileiros, geralmente interpretando ele mesmo. No filme Na Onda do Iê-iê-iê, de 1966, ele encena seu programa de calouros \"A Hora da Buzina\", exibido na TV Excelsior. Dentre os calouros, estavam os cantores Paulo Sérgio (como ele mesmo) e Sílvio César (que interpretava o personagem César Silva). Chacrinha diz diversos de seus bordões: \"Vai para o trono ou não vai?\", \"Como vai, vai bem? Veio a pé ou veio de trem?\", \"Cheguei, baixei, saravei\".\n[…]\nChacrinha no IMDb\n[…]\n«Adeus a Chacrinha reúne 30 mil no Rio (2/07/1988) - Banco de Dados - Folha de S.Paulo»"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Sitcom",
      "descricao": "Gênero de série de comédia de TV com personagens fixos em situações do dia a dia, geralmente em episódios curtos."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A palavra sitcom, usada para séries como Friends e Seinfeld, é a abreviação de que expressão em inglês?",
    "resposta": "Situation comedy",
    "fonte": [
      "https://en.wikipedia.org/wiki/Sitcom",
      "https://pt.wikipedia.org/wiki/Sitcom"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sitcom",
        "situacao": "ok",
        "texto": "A sitcom (short for situation comedy or situational comedy) is a genre of comedy produced for radio and television, that centers on a recurring cast of characters as they navigate humorous situations within a consistent setting, such as a home, workplace, or community. Unlike sketch comedy, which features different characters and settings in each skit, sitcoms typically maintain plot continuity ac\n[…]\nAlthough there have been several notable exceptions, relatively few Canadian sitcoms attained notable success in Canada or internationally. Canadian television has had much greater success with sketch comedy and dramedy series.\n[…]\nOther noteworthy recent sitcoms have included: Call Me Fitz, Schitt's Creek, Letterkenny, and Kim's Convenience, all of which have been winners of the Canadian Screen Award for Best Comedy Series.\n[…]\nSitcoms, or situation comedies, made their debut in the United States in 1926 with the radio show Sam 'n' Henry. The subsequent success of Amos 'n' Andy, also created by Freeman Gosden and Charles Correll, solidified the sitcom's place in American radio programming.\n[…]\nSitcoms have had such a profound impact on American television entertainment that aspects of it even appear in other broadcasting formats; including the radio and television comedy series The Jack Benny Program, Western series Gunsmoke, war comedy drama M*A*S*H, fantasy horror series Supernatural, contemporary Western crime media franchise Breaking Bad, and reality television show Duck Dynasty.\n[…]\nBlack sitcom\n[…]\nAsplin, Richard (2004). Gagged (A Thriller with Jokes). Arrow books. ISBN 0-09-941685-9. A contemporary comic thriller set in London and Los Angeles that covers the financing, production, creation, ratings, and marketing of a modern American network half-hour situation comedy.\n[…]\nSituation Comedy Bibliography (via UC Berkeley)—mostly US programs\n[…]\nSitcoms Online\n[…]\nBritish Comedy Guide (archived 4 April 2005)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sitcom",
        "situacao": "ok",
        "texto": "Sitcom (substantivo masculino no português brasileiro e feminino nas restantes variantes da língua portuguesa), abreviatura da expressão inglesa situation comedy (\"comédia de situação\", numa tradução livre), é um estrangeirismo usado para designar uma série de televisão com personagens comuns onde existem uma ou mais histórias de humor encenadas em ambientes comuns como família, grupo de amigos, l\n[…]\nAs situation comedy surgiram no Reino Unido, na época de ouro do rádio, mas atualmente ocupam um lugar fundamental na grade de programação da maioria dos canais televisivos.\n[…]\nAté 2006, a sitcom com maior tempo de exibição foi a britânica Last of the Summer Wine, exibida entre 1973 e 2010.\n[…]\nO formato Three Camera foi popularizado pela sitcom I Love Lucy e fez sucesso entre os anos 1980 e 2000, com séries como Friends, Cheers, Frasier, Seinfeld, Kenan & Kel, Full House e Father Ted. No começo da década de 2000, o formato Single Cam retorna com o surgimento de sitcoms como Malcom, The Bernie Mac Show, The Office, Two and a Half Man, Arrested Development e The Big Bang Theory.\n[…]\nA primeira sitcom televisiva é Pinwright's Progress, série de dez episódios transmitidos pela BBC no Reino Unido entre 1946 e 1947. Nos Estados Unidos, o diretor e produtor William Asher foi creditado como sendo o \"homem que inventou a sitcom\", tendo dirigido mais de duas dezenas das principais, incluindo I Love Lucy a partir da década de 1950 até à década de 1970.\n[…]\n\"Pinwright's Progress\". comedy.co.uk.\n[…]\n«SITCOM: qual é o significado e a tradução desse anglicismo?». SAP\n[…]\n\"William Asher - The Man Who Invented the Sitcom\", Palm Springs Life dezembro 1999\n[…]\nSitcom ou Como escrever uma boa série de comédia Tertúlia Narrativa\n[…]\nThe Evolution Of The Sitcom: The Age of the Single Camera\", Set. 24, 2014, Jack Picone, New York Film Academy"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Tom e Jerry",
      "descricao": "Dupla de desenhos animados formada por um gato e um rato, criada por William Hanna e Joseph Barbera na MGM em 1940."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "No primeiro desenho da dupla Tom e Jerry, lançado em 1940, o gato ainda tinha outro nome. Qual era?",
    "resposta": "Jasper",
    "distratores": [
      "Butch",
      "Frajola",
      "Lúcifer"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Puss_Gets_the_Boot",
      "https://en.wikipedia.org/wiki/Tom_and_Jerry"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Puss_Gets_the_Boot",
        "situacao": "ok",
        "texto": "Puss Gets the Boot is a 1940 American animated short film and the first short in what would become the Tom and Jerry cartoon series, though neither are yet referred to by these names. It was directed by William Hanna and Joseph Barbera, and produced by Rudolf Ising. It is based on the Aesop's Fable The Cat and the Mice. As was the practice of MGM shorts at the time, only Rudolf Ising is credited. \n[…]\nIn this short, the cat is named Jasper, and appears to be a scruffy, battle-hardened street cat, more malicious than the character that Tom would develop into over time. The unnamed mouse (referred to as Pee-Wee in an official MGM magazine), is similar to who would become the Jerry character, albeit slightly thinner.\n[…]\nThe maid once again enters the room in frustration just as the mouse swims in Jasper's milk bowl, uses his tail as a towel and finally kicks Jasper, causing him to drop all of the dishes, creating a huge mess and framing him for making it. The mouse flees the scene and dives into his hole just as the maid hits Jasper with a broom, throws him out of the house and slams the door shut.\n[…]\nAs Jasper is dragged away, the mouse waves to him, sticks his tongue out, puts a HOME SWEET HOME sign (seen earlier in the hole on the wall trick) in front of his hole, and enters it.\n[…]\nHarry E. Lang as Jasper and an unnamed mouse (vocal effects) (uncredited)\n[…]\nThe short, Puss Gets the Boot, featured a cat named Jasper and an unnamed mouse, and an African American housemaid. Leonard Maltin described it as \"very new and special [...] that was to change the course of MGM cartoon production\" and established the successful Tom and Jerry formula of comical cat and mouse chases with slapstick gags.\n[…]\nTom and Jerry: The Golden Era Anthology, Disc 1\n[…]\nTom & Jerry's 50th Birthday Classics\n[…]\nThe Art of Tom and Jerry Volume 1, Disc 1, Side 1\n[…]\nTom & Jerry Classics\n[…]\nTom and Jerry, Volume 2"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Tom_and_Jerry",
        "situacao": "ok",
        "texto": "Tom and Jerry (also known as Tom & Jerry) is an American animated media franchise and series of comedy short films created in 1940 by William Hanna and Joseph Barbera. Best known for its 161 theatrical short films produced by Metro-Goldwyn-Mayer, the series centers on the rivalry between a cat named Tom and a mouse named Jerry. Many shorts also feature several recurring characters.\n[…]\nTom, named \"Jasper\" in his debut appearance, is a gray and white domestic shorthair cat. \"Tom\" is a generic name for a male cat. He is usually but not always portrayed as living a comfortable, or even pampered life, while Jerry, whose name is not explicitly mentioned in his debut appearance, is a small, brown house mouse who always lives in close proximity to Tom. Despite being very energetic, determined and much larger, Tom is no match for Jerry's wits.\n[…]\nThe first short, Puss Gets the Boot, features a cat named Jasper and an unnamed mouse, named Jinx in pre-production, and an African American housemaid named Mammy Two Shoes. Leonard Maltin described it as \"very new and special [...] that was to change the course of MGM cartoon production\" and established the successful Tom and Jerry formula of comical cat and mouse chases with slapstick gags. It was released onto the theatre circuit on February 10, 1940.\n[…]\nIn April 2004, Warner Home Video released Tom and Jerry: The Classic Collection in Regions 2 and 4; a six disc double-sided DVD box-set in the United Kingdom, and 12 single-layer individual DVD volumes issued throughout Western Europe and Australia. The set includes almost every single Tom and Jerry cartoon released between 1940 and 1967 in chronological order; with the exceptions of The Million Dollar Cat and Busy Buddies, which were not included for unexplained reasons.\n[…]\nAdams, T.R. (1991). Tom and Jerry: Fifty Years of Cat and Mouse. Crescent Books. ISBN 0-517-05688-7."
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Pantera Cor-de-Rosa",
      "descricao": "Personagem animado de felino rosa, surgido na abertura do filme A Pantera Cor-de-Rosa, de 1963, e depois estrela de desenhos na TV."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "No filme de 1963 que lançou a Pantera Cor-de-Rosa, o título se referia a que objeto?",
    "resposta": "Um diamante",
    "distratores": [
      "Uma estátua",
      "Um quadro",
      "Um vaso"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Pink_Panther_(1963_film)",
      "https://en.wikipedia.org/wiki/Pink_Panther_(character)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Pink_Panther_(1963_film)",
        "situacao": "ok",
        "texto": "The Pink Panther is a 1963 American comedy film directed by Blake Edwards, who co-wrote the script with Maurice Richlin. Produced by The Mirisch Company and distributed by United Artists, it is the first installment in The Pink Panther franchise and stars an ensemble cast led by David Niven, Peter Sellers, Robert Wagner, Capucine and Claudia Cardinale.\n[…]\nThe Pink Panther was initially released on December 18, 1963, in Italy followed by the United States release on March 18, 1964. It grossed $10.9 million in the United States and Canada, making it the ninth-highest grossing film of 1964. The film received mixed reviews from critics upon its release, but would later see a positive critical reappraisal.\n[…]\nBecause the later movies were identified so closely with Clouseau, it's easy to forget that he was merely one in an ensemble at first, sharing screen time with Niven, Capucine, Robert Wagner and Claudia Cardinale. If not for Sellers' hilarious pratfalls, The Pink Panther could be mistaken for a luxuriant caper movie like Topkapi ... which is precisely what makes the movie so funny. It acts as the straight man, while Sellers gets to play mischief-maker.\n[…]\nThe film holds an approval rating of 89% on the review aggregator site Rotten Tomatoes based on 37 reviews, with an average rating of 7.4/10. The website's critical consensus says, \"Peter Sellers is at his virtuosically bumbling best in The Pink Panther, a sophisticated caper blessed with an unforgettably slinky score by Henry Mancini.\" The American Film Institute listed The Pink Panther as No. 20 in its 100 Years of Film Scores.\n[…]\nList of American films of 1963\n[…]\nThe Pink Panther (series)\n[…]\nThe Pink Panther at IMDb\n[…]\nThe Pink Panther at AllMovie\n[…]\nThe Pink Panther at the AFI Catalog of Feature Films\n[…]\nThe Pink Panther at the TCM Movie Database (archived)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pink_Panther_(character)",
        "situacao": "ok",
        "texto": "The Pink Panther is a fictional animated character who appears in the opening or closing credit sequences of every film in The Pink Panther series (except for A Shot in the Dark and Inspector Clouseau). In the storyline of the original film, \"Pink Panther\" is the name of a valuable pink diamond named for a flaw that shows a \"figure of a springing panther\" when held up to the light in a certain way\n[…]\nAll of the animated Pink Panther shorts utilized the distinctive jazzy theme music composed by Henry Mancini for the 1963 feature film, with additional scores composed by Walter Greene or William Lava.\n[…]\nIn Spain and Portugal, a Pantera Rosa cake is sold. It is coated in pink icing.\n[…]\nThe Pink Panther in: Pink at First Sight (1981, Valentine's Day special)\n[…]\nWithin these limitations, the Pink Panther made creative use of absurd and surreal themes and visual puns and an almost completely wordless pantomime style, set to the ubiquitous Pink Panther theme and its variations by Henry Mancini. The overall approach is reminiscent of the classic silent movies of Charlie Chaplin and Buster Keaton.\n[…]\nCultural references were more muted and stylized, resulting in a cartoon with longer-term, more cross-cultural appeal not shared by contemporaries such as Yogi Bear and The Flintstones, with their greater reliance on contemporary American pop culture. The Pink Panther also remained constrained to the classic six-minute form of theatrical shorts, while contemporaries expanded into longer, sitcom-like storylines, up to a full 30 minutes of broadcast TV in the case of The Flintstones.\n[…]\nFreleng's colleagues credit his sense of creative timing as a key element to the cartoon's artistic success. Freleng himself regarded the Pink Panther as his finest achievement and the character he most identified with, according to family and colleagues interviewed on the 2006 DVD release.\n[…]\nList of The Pink Panther cartoons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/A_Pantera_Cor-de-rosa_%28filme_de_1963%29",
        "situacao": "ok",
        "texto": "The Pink Panther (bra/prt: A Pantera Cor-de-rosa) é um filme estadunidense de 1963 do gênero comédia dirigido por Blake Edwards e distribuído pela United Artists. Foi escrito por Maurice Richlin e Blake Edwards.\n[…]\nEm uma revisão de 2004 de The Pink Panther Film Collection, uma coleção de DVDs que incluía o filme, o The A.V. Club escreveu:\n[…]\nComo os filmes posteriores foram tão intimamente identificados com Clouseau, é fácil esquecer que ele era apenas um em um conjunto no início, dividindo o tempo na tela com Niven, Capucine, Robert Wagner e Claudia Cardinale. Se não fosse pelas hilariantes quedas de Sellers, A Pantera Cor-de-Rosa poderia ser confundido com um luxuoso filme de alcaparras como Topkapi  ... que é precisamente o que torna o filme tão engraçado.\n[…]\nO filme detém um índice de aprovação de 89% no site agregador de críticas Rotten Tomatoes com base em 35 críticas, com uma classificação média de 7,4/10. O consenso crítico do site diz: \"Peter Sellers está em seu melhor virtuosismo desajeitado em The Pink Panther, uma alcaparra sofisticada abençoada com uma trilha sonora inesquecivelmente furtiva de Henry Mancini.\".\n[…]\nA Shot in the Dark, o segundo filme da série, de 1964\n[…]\nThe Return of the Pink Panther, o quarto filme da série, de 1975\n[…]\nThe Pink Panther Strikes Again, o quinto filme da série, de 1976\n[…]\nRevenge of the Pink Panther, o sexto filme da série, de 1978\n[…]\nTrail of the Pink Panther, o sétimo filme da série, de 1982\n[…]\nCurse of the Pink Panther, o oitavo filme da série, de 1983\n[…]\nSon of the Pink Panther, o nono filme da série, de 1993\n[…]\nThe Pink Panther, filme de 2006, com Steve Martin no papel anteriormente interpretado por Peter Sellers\n[…]\nThe Pink Panther 2, filme de 2008",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Chapolin Colorado",
      "descricao": "Seriado humorístico mexicano de 1973 sobre um atrapalhado super-herói vestido de vermelho."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "No nome original do herói, El Chapulín Colorado, a palavra chapulín designa que inseto no espanhol do México?",
    "resposta": "Gafanhoto",
    "fonte": [
      "https://en.wikipedia.org/wiki/El_Chapul%C3%ADn_Colorado"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/El_Chapul%C3%ADn_Colorado",
        "situacao": "ok",
        "texto": "El Chapulín Colorado (Spanish pronunciation: [el tʃapuˈliŋ koloˈɾaðo], transl. The Red Grasshopper) is a Mexican superhero television comedy series that aired from 1973 to 1979 and parodied superhero shows. It was created by actor and comedian Roberto Gómez Bolaños, who also played the main character. It was first aired by Televisa in 1973 in Mexico, and then was aired across Latin America and Spa\n[…]\nIn May 2024, it has been reported that a new animated series based on the show, originally titled Los Colorado, was in development. The series centers on El Chapulín Colorado as he struggles with both his crimefighting activities and his duties as husband and father.\n[…]\nIn the early 1990s with the high popularity of the products of the Chespirito characters in Brazil, two series of children's comics were made in partnership with the Editora Globo, with a new art style different from Mexican comics. These comics were Chaves & Chapolim (1990–1993) and Chapolim & Chaves (1991–1992), both comics features stories both with El Chavo del Ocho and El Chapulín Colorado.\n[…]\nEl Chapulín Colorado is also extremely popular in Brazil. The company, Tec Toy, responsible for distributing the Sega consoles in Brazil, published a video game for the Sega Master System called Chapolim x Drácula: Um duelo assustador (Chapulín vs. Dracula: A Frightening Duel). It was a localization of another existing SMS title, Ghost House, with the hero's graphics changed to Chapulín's.\n[…]\nThe Simpsons creator Matt Groening has said that he created the Bumblebee Man character after watching El Chapulín Colorado in a motel on the United States–Mexico border.\n[…]\nThe DC film Blue Beetle (2023) features an homage to El Chapulín Colorado. Director Ángel Manuel Soto and writer Gareth Dunnet-Alcocer incorporated the homage due to having watched the original series while growing up.\n[…]\nAbout the movie of El Chapulín Colorado"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/El_Chapul%C3%ADn_Colorado",
        "situacao": "ok",
        "texto": "El Chapulín Colorado (bra: Chapolin) é um seriado de televisão de comédia mexicano criado, escrito, dirigido e protagonizado por Roberto Gómez Bolaños. Produzido pela Televisa e exibido por suas emissoras de 28 de fevereiro de 1973 a 26 de setembro de 1979, com sete temporadas e 290 episódios, o seriado apresenta Chapulín Colorado, uma sátira de super-herói que aparece quando é chamado por quem pr\n[…]\nChapolin Colorado surgiu para satirizar os heróis estadunidenses com seus \"superpoderes\" e fazer uma crítica social em relação à América Latina. É um herói \"sem dinheiro, sem recursos, sem inventos sensacionais, débil e tonto\". O personagem surgiu em um momento de grande visibilidade para a América Latina. A estreia da série, foi em 1970, ano da Copa do Mundo de Futebol, realizada no México.\n[…]\nBaseado na cor escolhida Bolaños teve a ideia de fazer do super-herói um gafanhoto. Isso porque, no México, há uma espécie de gafanhoto vermelho conhecido como chapulín, que é usado na alimentação. A palavra chapulín vem do náuatle, língua dos astecas, e significa \"grilo, gafanhoto\". Em se tratando de super-heróis, é comum que tenham estampada em seus uniformes a primeira letra de seus nomes, mas Chapolin tem duas: (CH).\n[…]\nA Marvel Comics lançou, dentro do novo título dos Campeões, a super-heroína Red Locust, criada por Mark Waid e Humberto Ramos como uma homenagem ao Chapolin; o nome dela significa \"gafanhoto vermelho\".\n[…]\nEm 2019, a Playtronic lançou o game para Android do Chapolin, chamado Chapolin Colorado – The Minigame.\n[…]\nO filme Blue Beetle (2023), parte do universo de filmes da DC, traz uma homenagem a El Chapulín Colorado na forma de uma animação original em 3D. O diretor Angel Manuel Soto e o roteirista Gareth Dunnet-Alcocer incorporaram a homenagem por terem assistido ao seriado original enquanto cresciam.\n[…]\n«Chespirito.com» (em espanhol)\n[…]\nEl Chapulín Colorado no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Lima Duarte",
      "descricao": "Ator brasileiro de teatro, cinema e televisão, com papéis marcantes em novelas da Tupi e da Globo."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O matador Zeca Diabo, de O Bem-Amado, e o fazendeiro Sinhozinho Malta, de Roque Santeiro, foram vividos pelo mesmo ator. Qual?",
    "resposta": "Lima Duarte",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Lima_Duarte"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Lima_Duarte",
        "situacao": "ok",
        "texto": "Lima Duarte, nome artístico de Ariclenes Venâncio Martins (Sacramento, 29 de março de 1930), é um ator, diretor de televisão, radialista, apresentador e dublador brasileiro. Reconhecido como um dos pioneiros da televisão brasileira, esteve presente desde sua inauguração e é amplamente considerado um dos mais prestigiados e influentes atores do país, tendo alcançado a fama por meio de diversos papé\n[…]\nSua mãe atuava em apresentações de circo-teatro, e foi nesse ambiente que Lima Duarte teve seus primeiros contatos com a interpretação. O próprio ator afirma que suas experiências no Desemboque permaneceram como referência para sua trajetória artística e para a construção de personagens ao longo da carreira.\n[…]\nEm 1985, ele interpreta outro personagem antológico da história da telenovela brasileira que foi o Sinhozinho Malta de Roque Santeiro, novela escrita por Dias Gomes e Aguinaldo Silva um sujeito autoritário que era o que ditava as ordens da pequena Asa Branca, personagem esse que junto com a novela já era pro Lima ter interpretado em 1975 porém a novela foi censurada pela ditadura militar.\n[…]\nLima foi casado entre os anos 1951 a 1961, com a atriz Marisa Sanches. Tornou-se pai adotivo da também atriz Débora Duarte. Entre 1965 e 1968, foi casado com Martha Godoy de Freitas. Entre os anos de 1970 e 1989, foi casado com Mara Martins, com quem teve os filhos Julia, Mônica e Pedro. É avô das atrizes Paloma Duarte e Daniela Duarte.\n[…]\nLima declarou abertamente ser ateu. Politicamente, o ator é filiado ao Partido da Social Democracia Brasileira (PSDB).\n[…]\nComo ator\n[…]\nLima Duarte também se destacou por dublar alguns personagens de desenho animado da produtora Hanna-Barbera entre 1962 a 1964:\n[…]\nLima Duarte no IMDb\n[…]\nLima Duarte no Facebook\n[…]\nLima Duarte no Instagram\n[…]\nLima Duarte no X\n[…]\nCanal de Lima Duarte no YouTube\n[…]\n«Lima Duarte em Memória Globo»\n[…]\nLima Duarte - adorocinemabrasileiro.com.br"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Orlando Drummond",
      "descricao": "Ator e dublador brasileiro, voz do Scooby-Doo no Brasil por décadas e intérprete do Seu Peru na Escolinha do Professor Raimundo."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que ator foi por décadas a voz brasileira do Scooby-Doo e também viveu o Seu Peru na Escolinha do Professor Raimundo?",
    "resposta": "Orlando Drummond",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Orlando_Drummond"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Orlando_Drummond",
        "situacao": "ok",
        "texto": "Orlando Drummond Cardoso (Rio de Janeiro, 18 de outubro de 1919 – Rio de Janeiro, 27 de julho de 2021) foi um ator, dublador, comediante e radialista brasileiro.\n[…]\nOrlando é conhecido pelo personagem \"Seu Peru\", da Escolinha do Professor Raimundo, bem como por dublar os personagens Scooby Doo, Alf (de Alf: O ETeimoso), Popeye, Vingador (de Caverna do Dragão), Gato Guerreiro (de He-Man), Puro Osso (de As Terríveis Aventuras de Billy e Mandy), entre outros.\n[…]\nEm janeiro de 2021, Orlando participou da cerimônia de início da vacinação contra a Covid-19, no Rio de Janeiro, sendo uma das primeiras pessoas da cidade a receber a vacina.\n[…]\nEm 24 de julho de 2021, Orlando apresentou perda de memória e de apetite, deixou de se alimentar e de reconhecer pessoas. Três dias depois, em 27 de julho de 2021, faleceu aos 101 anos, em sua casa no Rio de Janeiro, por falência múltipla de órgãos. Deixou sua esposa, Glória Drummond, dois filhos, cinco netos e três bisnetos. No dia seguinte, seu corpo foi cremado.\n[…]\nApenas três dias depois do falecimento de Orlando Drummond, o dublador Mário Monjardim, grande amigo de Drummond e conhecido por dublar o Salsicha, em Scooby-Doo, e o Pernalonga, no Brasil, morreu aos 86 anos. Ele havia sofrido um AVC que o deixou com sequelas. Em 4 de setembro de 2022, a viúva de Drummond, Glória Drummond, faleceu aos 89 anos.\n[…]\nOrlando foi casado desde 1951 com Glória Drummond e com ela teve dois filhos. Sua descendência direta conta com cinco netos, dos quais três também são dubladores (Felipe, Alexandre e Eduardo) é também avô  do ator Álamo Facó, e três bisnetos.\n[…]\nOrlando Drummond no IMDb"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Mark Hamill",
      "descricao": "Ator americano, intérprete de Luke Skywalker em Star Wars e dublador de desenhos animados."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O ator que viveu Luke Skywalker em Star Wars ficou famoso nos desenhos animados de Batman como a voz de qual vilão?",
    "resposta": "Coringa",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mark_Hamill"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mark_Hamill",
        "situacao": "ok",
        "texto": "Mark Richard Hamill (; born September 25, 1951) is an American actor. He rose to fame as Luke Skywalker in the original Star Wars trilogy (1977–1983), leading to further lead parts in films like Corvette Summer (1978) and Samuel Fuller's The Big Red One (1980).\n[…]\nEditions of Joseph Campbell's The Hero with a Thousand Faces (which influenced Lucas as he was developing the films) issued after the release of Star Wars in 1977 used the image of Hamill as Luke Skywalker on the cover.\n[…]\nHamill attended several conventions as part of Star Wars Celebration as a guest.\n[…]\nIn an interview in May 2025, Hamill said that he would not portray Luke Skywalker again saying, \"I had my time. I'm appreciative of that, but I really think they should focus on the future and all the new characters.\" Despite this, it was announced in August 2025 that he would make a guest appearance in LEGO Star Wars: Rebuild the Galaxy: Pieces of the Past.\n[…]\nAfter the success of Star Wars, Hamill found that audiences identified him very closely with Luke Skywalker. He became a teen idol, appearing on the cover of teen magazines such as Tiger Beat. He attempted to avoid being typecast by appearing in the 1978 film Corvette Summer and the 1980 World War II film The Big Red One. He also appeared in The Night the Lights Went Out in Georgia (1981) and Britannia Hospital (1982).\n[…]\nIn-character as Luke Skywalker, Hamill voices the English versions of the Ukrainian air raid warning app. The alerts are not only performed in Skywalker's cadence but, after the alert is over, he signs off with \"May the Force be with you\". Hamill has raised funds for the Ukrainian war relief effort by signing Star Wars-themed posters to be raffled off.\n[…]\nMark Hamill at IMDb\n[…]\nMark Hamill on X\n[…]\nMark Hamill on Bluesky"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mark_Hamill",
        "situacao": "ok",
        "texto": "Mark Richard Hamill (Oakland, 25 de setembro de 1951) é um ator, dublador e escritor norte-americano conhecido por interpretar Luke Skywalker na saga de ficção científica Star Wars e por dar voz ao personagem Joker em Batman: The Animated Series e na série de videojogos Batman: Arkham, além de vários outros personagens em outros desenhos.\n[…]\nMark Hamill no AdoroCinema\n[…]\nMark Hamill no IMDb\n[…]\nMark Hamill (em inglês) no Internet Broadway Database\n[…]\nMark Hamill (em inglês) no Rotten Tomatoes",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Wagner Moura",
      "descricao": "Ator baiano conhecido como o Capitão Nascimento de Tropa de Elite e o Pablo Escobar da série Narcos."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O Capitão Nascimento, de Tropa de Elite, e o traficante Pablo Escobar, da série Narcos, foram interpretados por qual ator brasileiro?",
    "resposta": "Wagner Moura",
    "fonte": [
      "https://en.wikipedia.org/wiki/Wagner_Moura"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Wagner_Moura",
        "situacao": "ok",
        "texto": "Wagner Maniçoba de Moura ( VAHG-nər MOR-ə, MOHR-ə; Portuguese pronunciation: [ˈvaɡneʁ mɐ̃niˈsɔbɐ dʒi ˈmowɾɐ]; born June 27, 1976) is a Brazilian actor and filmmaker. His accolades include a Golden Globe, a Cannes Film Festival Award, and five Brazilian Academy Film Awards, in addition to nominations for an Academy Award, an Annie Award, and two Critics' Choice Award. Time magazine named him one of\n[…]\nAfter establishing himself in Brazil with a leading role as Captain Nascimento in the crime film Elite Squad (2007) and its 2010 sequel, Moura expanded into American cinema with a supporting role in the science fiction film Elysium (2013), finding himself part of the movement that seeks positive representation for South Americans in Hollywood.\n[…]\nWagner Moura was born in Salvador and raised in Rodelas, 540 kilometres (340 mi) from the capital. His father was in the military so the family, including his mother and his younger sister Lediane (who now works as a pediatrician), became used to moving around. His relationship with acting started thanks to a schoolmate who had a passion for the arts.\n[…]\nWagner Moura's feature directing debut, Marighella, had its world premiere at the 69th Berlin International Film Festival, and a delayed theatrical release in Brazil in 2021. The film is a biopic of Carlos Marighella, a politician and guerrilla fighter facing the heinous crimes torture and censorship during the military dictatorship in Brazil.\n[…]\nMoura's native language is Portuguese, but he also speaks English and Spanish fluently. He did not speak Spanish prior to his casting as Pablo Escobar in Narcos, and spent several weeks in Medellín, Colombia learning the language to prepare for the role. He practices Transcendental Meditation, Muay Thai and Brazilian Jiu-Jitsu. In December 2023, Moura was promoted to brown belt in Brazilian Jiu-Jitsu by Rigan Machado.\n[…]\nWagner Moura at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Wagner_Moura",
        "situacao": "ok",
        "texto": "Wagner Maniçoba de Moura (Salvador, 27 de junho de 1976) é um ator, diretor, roteirista, produtor e músico brasileiro. Reconhecido por suas atuações em filmes e séries nacionais e internacionais, é um dos atores brasileiros mais aclamados fora do país.\n[…]\nNa mesma época, o filme Tropa de Elite, no qual atua como o policial do BOPE, Capitão Nascimento, começa a ser amplamente repercutido. Tropa 1 inicialmente teria o aspirante Mathias como o protagonista do filme; porém, durante a edição, foi percebido que mostrar o ponto de vista de Nascimento daria o tom e energia que a produção buscava. A partir disso a sinopse foi alterada, a produção foi remontada e Wagner precisou gravar a narração às pressas.\n[…]\nEm 2012, foi o vocalista convidado para o \"MTV ao vivo Tributo à Legião Urbana\" realizado no Espaço das Américas (SP) e transmitido ao vivo pela própria MTV. Wagner Moura não escondia a satisfação, pois o mesmo afirmou em várias entrevistas ser grande fã da banda.\n[…]\nEm agosto do mesmo ano, Narcos estreou na Netflix, com Wagner interpretando o traficante de drogas colombiano Pablo Escobar. A atuação foi elogiada pela crítica americana, e lhe rendeu uma indicação ao Globo de Ouro 2016. No geral, a série foi muito bem aceita por público e especialistas, apesar de críticas ao sotaque espanhol do ator como o ponto negativo.\n[…]\nEm 2025, o ator Wagner Moura protagonizou o filme O Agente Secreto, dirigido por Kleber Mendonça Filho. Ambientado no Recife durante a década de 1970, o longa conta a história de Marcelo, um especialista em tecnologia que retorna à sua cidade natal em busca de paz, mas acaba confrontado por segredos do passado e pela repressão do regime militar.\n[…]\nEntrevista de Wagner Moura à Revista TPM",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Cid Moreira",
      "descricao": "Locutor e jornalista brasileiro, apresentador do Jornal Nacional por quase três décadas, de voz grave característica."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que locutor, por décadas no Jornal Nacional, também narrava os quadros do mágico mascarado Mister M no Fantástico?",
    "resposta": "Cid Moreira",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Cid_Moreira",
      "https://pt.wikipedia.org/wiki/Mister_M"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Cid_Moreira",
        "situacao": "ok",
        "texto": "Cid Moreira (Taubaté, 29 de setembro de 1927 – Petrópolis, 3 de outubro de 2024) foi um locutor, narrador, apresentador e influenciador digital brasileiro. Dono de uma das vozes mais marcantes da televisão do país, tornou-se conhecido por ser o primeiro apresentador do Jornal Nacional, trabalho que exerceu de 1969 a 1996.\n[…]\nFilho do bibliotecário Isauro Moreira e da dona de casa Elza Moreira, era irmão do locutor Célio Moreira, que trabalhou na equipe inicial da Globo. Formou-se em contabilidade em 1944. Naquele ano, admirado com as imitações que Cid Moreira fazia ao microfone nas festas regionais da cidade, um amigo – cujo pai era diretor da Rádio Difusora Taubaté – o convenceu a fazer um teste de locução.\n[…]\nA última edição de Cid Moreira como âncora do Jornal Nacional ocorreu em 29 de março de 1996, ao lado de Sérgio Chapelin. A alegação do então diretor de jornalismo da Globo, Evandro Carlos de Andrade, para a saída de Cid Moreira era de que a empresa procurou trocar os locutores por jornalistas, como ocorria em outros telejornais. Em 1999 foi para o Fantástico, onde narrou quadros famosos como Mister M e Padre Quevedo.\n[…]\nEm 1975, Cid Moreira provê narração para o documentário Brasil: Ontem, hoje e amanhã, material de propaganda do governo que comemorou os onze anos de ditadura militar no Brasil. Cid é célebre também pelo áudio da Bíblia cristã na íntegra e em linguagem atual, gravado em 2011. Os CDs com sua locução alçaram um enorme sucesso de vendas, chegando hoje a 33 milhões de cópias.\n[…]\nAos 87 anos e 70 de carreira, Cid publicou sua biografia Boa Noite, título que remete à frase \"boa noite!\", com a qual encerrava o Jornal Nacional.\n[…]\n1999 - A Bíblia Sagrada em CD - Novo Testamento Narrado por Cid Moreira (24 discos) (TV Line)\n[…]\nCid Moreira no IMDb\n[…]\nCanal de Cid Moreira no YouTube\n[…]\nCid Moreira no Instagram"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mister_M",
        "situacao": "ok",
        "texto": "Val Valentino (nascido Leonard Montano; Los Angeles, 14 de junho de 1956), conhecido mundialmente como Masked Magician, no Brasil como Mister M e em Portugal como Mágico da Máscara, é um ilusionista e ator estadunidense. Mágico desde criança, ficou mundialmente famoso por revelar na prática os segredos dos truques de ilusionismo. O nome Mister M é conhecido apenas no Brasil.\n[…]\nOs especiais de Mister M foram exibidos no Brasil a partir de 3 de janeiro de 1999, dentro de um quadro do programa Fantástico, exibido pela Rede Globo, onde, oculto atrás de uma máscara (a qual ganhou bastante fama) e mantendo secreta sua identidade, revelou os segredos de diversos truques de mágica. O quadro contava com os textos de Luiz Petry e a narração do locutor Cid Moreira.\n[…]\nComo no seu país de origem, as revelações dos truques no programa também geraram alguns processos judiciais contra a Rede Globo. A Associação dos Mágicos Vítimas do Programa Fantástico, liderada por Tio Tony, entrou na justiça em Porto Alegre contra o quadro do Mister M.\n[…]\nO sucesso do quadro levou Mister M a fazer uma turnê com seu show de mágica pelo Brasil. Depois do show em Belo Horizonte, foi intimado e teve de dar depoimentos à Polícia Civil a pedido da Academia Mineira de Ilusionismo, que o acusava de violar o artigo 154 do Código Penal de revelar segredo profissional sem justa causa e assim prejudicar mágicos. O procedimento foi arquivado porque não havia provas suficientes.\n[…]\nMister M retornou à televisão brasileira em 2007, na Rede Record, com o quadro \"A Volta do Mágico Mascarado\", no programa Tudo é Possível, apresentado, na época, por Eliana.\n[…]\nEm 20 de agosto de 2023, Mister M se reencontrou com Cid Moreira no terceiro episódio do documentário 50 anos do Fantástico.\n[…]\nVibe (como o Mágico Mascarado)\n[…]\nDiagnosis Murder - \"Trash TV\" (como o Mágico Mascarado e também como ele mesmo)"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Dallas (série de 1978)",
      "descricao": "Série americana exibida de 1978 a 1991 sobre os Ewing, família rica do petróleo no Texas."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Na série Dallas, o personagem Bobby Ewing morreu e reapareceu na temporada seguinte. Que explicação a série deu para a volta?",
    "resposta": "A temporada anterior fora um sonho",
    "fonte": [
      "https://en.wikipedia.org/wiki/Dallas_(1978_TV_series)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Dallas_(1978_TV_series)",
        "situacao": "ok",
        "texto": "Dallas is an American prime time soap opera that aired on CBS from April 2, 1978, to May 3, 1991. The series revolved around an affluent and feuding Texas family, the Ewings, who owned the independent oil company Ewing Oil and the cattle-ranching land of Southfork. The series originally focused on the marriage of Bobby Ewing and Pam Ewing, whose families were sworn enemies. As the series progresse\n[…]\nGayle Hunnicutt (seasons 12–14) as Vanessa Beaumont, mother of James and J.R.'s sweetheart, later temporarily his fiancé.\n[…]\nOctober 15, 1978 – January 14, 1979: Sundays, 10:00/9:00 pm\n[…]\nThe new series, which premiered on June 13, 2012, focused primarily on John Ross and Christopher Ewing, the now-grown sons of J.R. and Bobby. Larry Hagman, Patrick Duffy and Linda Gray returned in full-time capacity, reprising their original roles. The series was produced by Warner Horizon Television, a subsidiary of Warner Bros., which holds the rights to the Dallas franchise through its acquisition of Lorimar Television and is a sister company to TNT, both under the ownership of Time Warner.\n[…]\nShe responded, \"I tried to be really, really respectful of the original Dallas because it was really clear to me that the people who love Dallas are [like] Trekkies, really committed to that show and I really did not understand that before, so I never wanted to violate anything that had happened in the past. On the other hand that was the past, twenty years had gone by, so at the same time I think we're properly balanced between the characters of Bobby Ewing, J.R. and Sue Ellen.\n[…]\nIn 1985, Dallas: The Complete Ewing Family Saga by Laura Van Wormer was published by Doubleday.\n[…]\nThe popularity of Dallas in Romania is the subject of the 2016 experimental documentary Hotel Dallas, directed by artist duo Ungur & Huang and starring Patrick Duffy, who plays a surreal double of the Bobby Ewing character.\n[…]\nDallas at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dallas_%28teless%C3%A9rie%29",
        "situacao": "ok",
        "texto": "Dallas é uma longa série de televisão estadunidense (português brasileiro) ou norte-americana (português europeu) de horário nobre que foi exibida originalmente entre 2 de abril de 1978 a 3 de maio de 1991, pela estação televisiva norte-americana CBS. A série centra-se à volta de uma grande e rica família do Texas, os Ewings, donos da empresa privada de petróleo Ewing Oil (Petrolífera Ewing) e do \n[…]\nA morte de Bobby Ewing no final da temporada oito, juntamente com a sua ausência durante a temporada seguinte, foi explicada imediatamente no início da temporada dez como tendo sido um sonho de Pamela Ewing, tendo como resultado, a eliminação de todos os acontecimentos durante a temporada nove. O ator Patrick Duffy saiu da série em busca de outras oportunidades para a sua carreira mas, devido à baixa de audiências da série, foi convencido a regressar pela Lorimar, a produtora, e por Larry Hagman.\n[…]\nEm nível de história, o regresso de Patrick Duffy é explicado como tendo toda a nona temporada sido, afinal, um sonho da personagem de Victoria Principal, Pamela Ewing, fazendo com que desaparecessem todos os eventos ocorridos no ano anterior em que o envolvimento de Katzman fora minimizado.\n[…]\nO vínculo contínuo entre as duas séries foi cortado, eventualmente, em 1986 quando na estreia da décima temporada de Dallas se decidiu que a morte de Bobby Ewing no ano anterior havia sido afinal de contas, um sonho. A morte de Bobby Ewing teve um grande impacto, tanto em Dallas como no enredo de Knots Landing (como por exemplo, o nome do novo filho de Gary se ter chamado “Bobby” em memória do seu falecido tio, causando igualmente o regresso ao alcoól de Gary).\n[…]\nContrariamente aos produtores de Dallas, os de Knots Landing não estavam dispostos a eliminar a sua temporada anterior, fazendo com que as duas séries se distanciassem definitivamente, nunca mais se cruzando novamente.\n[…]\nTemporada 2 (1978-79)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Dick York",
      "descricao": "Ator americano, o primeiro intérprete de Darrin, marido da bruxa Samantha na série A Feiticeira."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1969, o ator Dick York deixou o papel do marido de Samantha na série A Feiticeira. Por que ele saiu?",
    "resposta": "Graves problemas nas costas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Dick_York",
      "https://en.wikipedia.org/wiki/Bewitched"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Dick_York",
        "situacao": "ok",
        "texto": "Richard Allen York (September 4, 1928 – February 20, 1992) was an American actor. He was the first actor to play Darrin Stephens on the ABC fantasy sitcom Bewitched. He played teacher Bertram Cates in the film Inherit the Wind (1960).\n[…]\nIn 1964, York began playing Darrin Stephens in the sitcom Bewitched as Samantha's (Elizabeth Montgomery) mortal husband. The show was a huge success and York was nominated for an Emmy Award in 1968.\n[…]\nFrom York's hospital bed, he and director William Asher discussed York's future. \"Do you want to quit?\" Asher asked. \"If it's all right with you, Billy\", York replied. With that, York left the sitcom to devote himself to recovery, never to return. Dick Sargent replaced York in the role of Darrin Stephens, taking over the role at the start of the series's sixth season (1969–1970) and continuing in the part until the series ended after its eighth season (1971–1972).\n[…]\nDespite the scripted antagonism between characters Darrin and his mother-in-law Endora, in reality Dick York and Agnes Moorehead enjoyed a very close friendship off screen. Moorehead was very upset when it was confirmed that York would be leaving the show and replaced by Dick Sargent.\n[…]\nYork died of complications from emphysema at Blodgett Hospital in East Grand Rapids, Michigan, on February 20, 1992, at age 63. He is buried at Plainfield Cemetery in Rockford, Michigan.\n[…]\nYork, Dick. The Seesaw Girl and Me (New Path Press, 2004) Published Posthumously.\n[…]\nYork, Dick. The Seesaw Girl and Me (New Path Press, 2004) pp. 15–16, 100–105.\n[…]\nDick York at IMDb\n[…]\nDick York at the Internet Broadway Database\n[…]\nDick York at the TCM Movie Database (archived)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Bewitched",
        "situacao": "ok",
        "texto": "Bewitched is an American fantasy sitcom television series that originally aired for eight seasons on ABC from September 17, 1964, to March 25, 1972. It is about a witch who marries an ordinary mortal man and vows to lead the life of a typical suburban housewife. The show was popular, finishing as the second-highest-rated show in America during its debut season, staying in the top 10 for its first \n[…]\nBewitched was created by Sol Saks under executive producer Harry Ackerman and starred Elizabeth Montgomery as Samantha Stephens, Dick York (1964–1969) as Darrin Stephens, and Agnes Moorehead as Endora, Samantha's mother. Dick Sargent replaced an ailing York for the final three seasons (1969–1972).\n[…]\nFirst-season producer and head writer Danny Arnold set the initial style and tone of the series, and he also helped to develop supporting characters such as Larry Tate and the Kravitzes. Arnold, who wrote for McHale's Navy and other shows, thought of Bewitched essentially as a romantic comedy about a mixed marriage; his episodes kept the magic element to a minimum. One or two magical acts drove the plot, but Samantha often solved problems without magic.\n[…]\nThe fifth season of Bewitched (1968–1969) proved to be a turning point for the series, most notably with the midseason departure of Dick York and the record eight episodes that were filmed without him afterwards (although aired out of order with previously filmed episodes). York was suffering from recurring back problems, the result of an accident during the filming of They Came to Cordura (1959).\n[…]\nThe 1965 episode of The Flintstones titled \"Samantha\" (1965) featured Dick York and Elizabeth Montgomery as Darrin and Samantha Stephens, who have just moved into the neighborhood. This crossover was facilitated by both series being broadcast on ABC.\n[…]\nSpencer, Beth. \"Samantha every witch way but lose.\" The Age, 25 June 2005."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dick_York",
        "situacao": "ok",
        "texto": "Richard Allen York, mais conhecido como Dick York (Fort Wayne, 4 de setembro de 1928 — Grand Rapids, 20 de fevereiro de 1992) foi um ator nascido nos Estados Unidos, célebre por sua participação no seriado A Feiticeira, como Darrin Stephens, marido da personagem Samantha, interpretada por Elizabeth Montgomery.\n[…]\nDick York sofreu um acidente durante as filmagens de Heróis de Barro em 1959, e a partir daí passou a sentir fortes dores na coluna. Para amenizar as dores, ele viciou-se em calmantes e tranquilizantes, que escondia em vários locais do camarim. Com o agravamento do problema, York começou a faltar nas gravações e vários episódios foram reescritos, sem seu personagem. No final da 4ª temporada, ele começou a faltar e na 5ª, era evidente a sua ausência. Ele temia ser substituído.\n[…]\nA desculpa dada no desenrolar da trama era a de que ele estava viajando a negócios. Com muitas ausências, os produtores decidiram que o ator titular deveria ser substituído imediatamente. O seu último trabalho na série foi Os Magos das Olimpíadas no encerramento da 5ª temporada. Como num passe de mágica, a partir da 6ª temporada, o ator Dick Sargent assumiu seu personagem até o fim da série.\n[…]\nAnteriormente, Dick York participou de outras séries de TV, como Cidade Nua e Além da Imaginação.\n[…]\nDick York faleceu em 20 de fevereiro de 1992, aos 63 anos, de enfisema pulmonar. Ele foi fumante até o fim de sua vida. Dick York foi sepultado em Plainfield Cemetery, Condado de Kent, Michigan no Estados Unidos.\n[…]\nO ator escolhido para ser James Stephens da série deveria ser Dick Sargent, mas como Sargent estava envolvido em outro projeto, os produtores tiveram que fazer uma maratona de testes onde o vencedor foi Dick York.\n[…]\nDick York no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Teletransporte (Jornada nas Estrelas)",
      "descricao": "Aparelho fictício da franquia Jornada nas Estrelas que desmaterializa pessoas e as transporta da nave para outro local."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em Jornada nas Estrelas, os produtores inventaram o teletransporte para evitar o custo de filmar o quê?",
    "resposta": "Os pousos da nave",
    "fonte": [
      "https://en.wikipedia.org/wiki/Transporter_(Star_Trek)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Transporter_(Star_Trek)",
        "situacao": "ok",
        "texto": "A transporter is a fictional teleportation machine used in the Star Trek universe. Transporters allow for teleportation by converting a person or object into an energy pattern (a process called \"dematerialization\"), then sending (\"beaming\") it to a target location or else returning it to the transporter, where it is reconverted into matter (\"rematerialization\"). The command often used to request a\n[…]\nAccording to dialogue in the Star Trek: Enterprise (ENT) episode \"Daedalus\", the transporter was invented in the early 22nd century by Dr. Emory Erickson, who also became the first human to be successfully transported. Although the Enterprise (NX-01) has a transporter, the crew does not routinely use it for moving biological organisms. Instead, they generally prefer using shuttlepods or other means of transportation unless no other means of transportation are possible or feasible.\n[…]\nIn season three of Star Trek: Discovery, set in the 32nd century, personal transporters are used.\n[…]\nIn August 2008, physicist Michio Kaku predicted in Discovery Channel Magazine that a teleportation device similar to those in Star Trek would be invented within 100 years. Physics students at  University of Leicester calculated that to \"beam up\" just the genetic information of a single human cell (not the positions of the atoms, just the gene sequences) together with a \"brain state\" would take 4,850 trillion years assuming a 30 gigahertz microwave bandwidth.\n[…]\nPersonal identity, relating to philosophical discussions of transporting a person\n[…]\nTeletransportation paradox\n[…]\nTransporter at Memory Alpha\n[…]\nTransporter psychosis at Memory Alpha\n[…]\n\"Transporters, Replicators and Phasing FAQ\" by Joshua Bell\n[…]\nStarTrek.com: transporter psychosis Archived 2006-09-10 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Teletransportador",
        "situacao": "ok",
        "texto": "O teletransportador refere-se a uma máquina de ficção que permite teleportação.\n[…]\nEla é amplamente utilizado na literatura de ficção científica e fantasia e em exemplos filosóficos. É importante ressaltar que  o teletransportador da ficção científica, não tem relação com teletransporte quântico, um termo técnico-científico utilizado na Física quântica.\n[…]\nTeletransporte quântico",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "The Muppet Show",
      "descricao": "Programa de variedades de Jim Henson exibido de 1976 a 1981, com Caco, o Sapo, Miss Piggy e outros bonecos."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Por que The Muppet Show, de Jim Henson, com Caco, o Sapo, acabou sendo produzido na Inglaterra?",
    "resposta": "As redes americanas recusaram o programa",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Muppet_Show"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Muppet_Show",
        "situacao": "ok",
        "texto": "The Muppet Show is a variety sketch comedy family television series created by Jim Henson and starring the Muppets. It is presented as a variety show, featuring recurring sketches and musical numbers interspersed with ongoing plot-lines with running gags taking place backstage and in other areas of the venue.\n[…]\nHenson produced two pilot episodes for ABC in 1974 and 1975, but neither went forward as a series. While other networks in the United States rejected Henson's proposals, British producer Lew Grade expressed enthusiasm for the project and agreed to co-produce The Muppet Show for ATV, part of the UK ITV network. The Muppet Show was produced by ITC Entertainment and Henson Associates with programmes produced and recorded at the ATV Elstree Studios in Borehamwood, Hertfordshire.\n[…]\nSince its debut in 1969, Sesame Street had given Jim Henson's Muppet characters exposure. However, he began to perceive that he was becoming typecast as a children's entertainer. Subsequently, he began to conceive a programme for a more adult audience. Two television specials, The Muppets Valentine Show (1974) and The Muppet Show: Sex and Violence (1975), were produced for ABC and are considered pilots for The Muppet Show. Neither of them were ordered to series.\n[…]\nMeanwhile, Henson's Muppets were featured in The Land of Gorch skits during the first season (1975–76) of the American comedy television programme Saturday Night Live. Although they did not last due to conflicts with the show's writers and producers, Henson and his team gained institutional knowledge about adapting and quickly creating a television programme within a seven-day period. Henson also gained friendships with multiple celebrities through his work on Saturday Night Live.\n[…]\nThe Muppet Show at The Interviews: An Oral History of Television"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/The_Muppet_Show",
        "situacao": "ok",
        "texto": "The Muppet Show (Muppet Show no Brasil e Os Marretas em Portugal) é uma série de televisão britânica-americana do gênero comédia-variedade, criado por Jim Henson e estrelado pelos Muppets. A série teve origem em dois episódios pilotos produzidos por Henson para American Broadcasting Company em 1974 e 1975, respectivamente.\n[…]\nEmbora nenhum dos episódios tenha progredido como uma série e outras redes estadunidenses rejeitaram as propostas de Henson, o produtor britânico Lew Grade expressou entusiasmo pelo projeto e concordou em co-produzir The Muppet Show para o canal britânico ATV. Teve cinco temporadas, totalizando 120 episódios, foram transmitidas pela ATV e outras franquias da ITV no Reino Unido e posteriormente distribuído pela CBS nos Estados Unidos em 1976 a 1981.\n[…]\nA série foi produzido e gravado no Elstree Studios, na Inglaterra.\n[…]\nO programa ganhou notoriedade por sua tendência ao estilo pastelão e suas paródias humorísticas. Cada episódio era estrelado por um convidado famoso. Conforme a atração recebia maior popularidade, mais celebridades participavam nas produções televisivas e cinematográficas dos Muppets.\n[…]\nThe Muppet Show foi produzida pela ITC Entertainment e Henson Associates, e estreou originalmente no Reino Unido em 5 de setembro de 1976 e encerrou em 23 de maio de 1981. Os direitos da série são atualmente na propriedade do The Muppets Studio (a subsidiária da The Walt Disney Company), tendo sido adquirido da The Jim Henson Company em fevereiro de 2004.\n[…]\nCaco, o Sapo: Nelson Batista, Orlando Viggiani, Armando Braga, Sérgio Moreno\n[…]\nEm 1985, a Playhouse Video nos Estados Unidos lançou uma coleção de compilações de vídeo sob o banner Jim Henson's Muppet Video. Contém Dez vídeos foram lançados, apresentando material de ligação original, além de clipes do programa.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Mulheres de Areia (telenovela de 1993)",
      "descricao": "Telenovela da Rede Globo de 1993, escrita por Ivani Ribeiro, sobre duas irmãs gêmeas vividas por Glória Pires."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Na novela Mulheres de Areia, de 1993, Glória Pires viveu duas irmãs gêmeas de personalidades opostas. Como elas se chamavam?",
    "resposta": "Ruth e Raquel",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Mulheres_de_Areia_(1993)",
      "https://pt.wikipedia.org/wiki/Gl%C3%B3ria_Pires"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Mulheres_de_Areia_(1993)",
        "situacao": "ok",
        "texto": "Mulheres de Areia é uma telenovela brasileira produzida pela TV Globo, em coprodução com a SIC de Portugal, e exibida de 1º de fevereiro a 24 de setembro de 1993, em 203 capítulos. Substituiu Despedida de Solteiro e foi substituída por Sonho Meu, sendo a 44ª \"novela das seis\" exibida pela emissora.\n[…]\nUm de seus maiores passatempos é atormentar o deficiente mental Tonho da Lua, destruindo as suas esculturas de areia e o ameaçando. Tonho é perdidamente apaixonado por Ruth, a quem chama carinhosamente de \"Rutinha\". Esta lhe dá aulas de natação e tenta a todo custo protegê-lo das insistentes provocações de Raquel\n[…]\nDe imediato, por seu trabalho como as gêmeas Ruth e Raquel na versão original, Eva Wilma foi convidada por Ivani para compor o elenco, porém por estar no ar na novela Pedra sobre Pedra, não aceitou o convite. A autora queria somente Glória Pires para protagonizar a novela, porém como ela engravidou na época não pôde aceitar o convite. Cogitaram-se, então, Lúcia Veríssimo e Maria Padilha, que tinha acabado de sair da telenovela O Dono do Mundo em 1991.\n[…]\nA modelo Mônica Carvalho, que ainda não havia estreado como atriz, foi a estrela da abertura, cujo tema musical era \"Sexy Iemanjá\", canção de Pepeu Gomes. Na abertura, Mônica surge nua, ora da água, ora da areia, simbolizando a personalidade das gêmeas Ruth e Raquel: o azul das águas representava a suavidade de Ruth, já o tom vermelho das areias representava a intensidade de Raquel.\n[…]\nMulheres de Areia conta com direção musical de Mariozinho Rocha, produção musical de Roger Henri, e masterização de Sérgio Seabra. A capa do álbum é estampada por Glória Pires como a gêmea boa da novela, Ruth, enquanto a contracapa é estampada por Glória Pires como a gêmea má da novela, Raquel.\n[…]\nPrêmio TV Press (1993)\n[…]\nMelhor Atriz - Glória Pires"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Gl%C3%B3ria_Pires",
        "situacao": "ok",
        "texto": "Glória Maria Cláudia Pires de Morais, mais conhecida como Glória Pires (Rio de Janeiro, 23 de agosto de 1963), é uma atriz e empresária brasileira. Com uma carreira iniciada ainda na infância, destacou-se por sua capacidade de construir personagens de grande complexidade dramática, consolidando-se indústria do cinema e na teledramaturgia nacional e tornando-se uma das atrizes mais bem pagas do Bra\n[…]\nGlória também se destacou atuando nos remakes de Mulheres de Areia (1993), Anjo Mau (1997) e Éramos Seis (2019), como as gêmeas Ruth e Raquel, a babá Nice, e a sofredora Dona Lola, respectivamente.\n[…]\nEm 1993, fez um de seus trabalhos mais marcantes ao interpretar as gêmeas Ruth e Raquel Araújo na novela Mulheres de Areia. A atriz recebeu ampla aclamação ao dar vida a duas personagens de personalidades opostas simultaneamente, recebendo o Troféu Imprensa e sendo eleita pela Associação Paulista de Críticos de Arte a Melhor Atriz em Televisão, e cita a produção como uma das mais trabalhosas de sua carreira. \"Nunca, em toda a minha carreira, um trabalho exigiu tanto de mim quanto essa novela.\n[…]\nApós quatro anos dedicados ao cinema, em 2011 Glória retornou às novelas em Insensato Coração, de Gilberto Braga e Ricardo Linhares como a vingativa Norma Pimentel, uma simples técnica de enfermagem que após ser vitima de um golpe e ir para a prisão injustamente, torna-se uma mulher perigosa e obcecada por vingança. Seu retorno foi elogiado e prestigiado pelo público, que passou a torcer por sua personagem.\n[…]\nA atriz retornou às novelas em 2023 em uma parceria com o autor Walcyr Carrasco como a grande vilã Irene La Selva em Terra e Paixão. Sua personagem é uma mulher ardilosa e que gosta de tudo que é relacionado a dinheiro. A novela marcou o reencontro de Glória Pires com Tony Ramos, repetindo mais um casal em cena.\n[…]\nGlória Pires no IMDb\n[…]\nGloria Pires em Memória Globo"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Seinfeld",
      "descricao": "Sitcom americana exibida de 1989 a 1998, estrelada pelo comediante Jerry Seinfeld, ambientada em Nova York."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Na sitcom Seinfeld, Jerry divide as confusões com os amigos George e Elaine e com qual vizinho excêntrico?",
    "resposta": "Kramer",
    "fonte": [
      "https://en.wikipedia.org/wiki/Cosmo_Kramer",
      "https://en.wikipedia.org/wiki/Seinfeld"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cosmo_Kramer",
        "situacao": "ok",
        "texto": "Cosmo Kramer, usually referred to simply as Kramer, is a fictional character in the American television sitcom Seinfeld (1989–1998) played by Michael Richards. The character is loosely based on the comedian Kenny Kramer, a former neighbor of Seinfeld co-creator Larry David. The character Kramer is the neighbor of the series' main character, Jerry Seinfeld, and is friends with George Costanza and E\n[…]\nKramer was estranged for a long period from his mother, Babs Kramer, who works as a restroom matron at an upscale restaurant. Unlike George and Jerry, Kramer's character does not have a well-developed network of family members shown in the sitcom. He is the only main character on the show whose father never makes an appearance; in \"The Chinese Woman\", Kramer mentions that he is the last male member of his family, implying that his father had died.\n[…]\nKramer was originally envisioned as a recluse who never left his apartment except to visit Jerry. This was the original reason behind why Kramer helps himself to Jerry's possessions and food without any pushback and also why he is absent from the season two episode \"The Chinese Restaurant\", which takes place entirely outside of the building. However, in season three Kramer starts to join Jerry, Elaine, and George in various scenes outside of the building.\n[…]\nThe character of Kramer was originally based on the real-life Kenny Kramer, a neighbor of co-creator Larry David from New York. However, Michael Richards did not in any way base his performance on the real Kramer, to the point of refusing to meet him. This was later parodied in \"The Pilot\" when the actor that is cast to play him in Jerry and George's sitcom refuses to base the character on the real Cosmo Kramer.\n[…]\nKramer is also occasionally called \"the K-Man\" (\"The Barber\", \"The Bizarro Jerry\", \"The Busboy\", \"The Note\", \"The Hamptons\", \"The Scofflaw\" and \"The Soup Nazi\")."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Seinfeld",
        "situacao": "ok",
        "texto": "Seinfeld ( SYNE-feld) is an American television sitcom created by Larry David and Jerry Seinfeld. It originally aired on NBC from July 5, 1989, to May 14, 1998, with a total of nine seasons consisting of 180 episodes.\n[…]\nKramer is friends with Newman, and they work well together despite their differences. He often provides slapstick gags.\n[…]\nMany characters have made multiple appearances, notably Jerry's parents, Morty and Helen Seinfeld, who reside in Florida; George's parents, the overbearing Frank and Estelle Costanza; George's on-again, off-again fiancée Susan Ross; Jerry's Uncle Leo; Elaine's variety of bosses, Mr. Lippman, Mr. Pitt and J. Peterman; Elaine's on-again, off-again boyfriend David Puddy; and Kramer's friend, Newman, a mail carrier who lives in the same building and is Jerry's nemesis.\n[…]\nSeason 4 marked the sitcom's entry into the Nielsen ratings Top 30. It contains several of the most popular episodes, such as \"The Bubble Boy\", in which George and the bubble boy argue over Trivial Pursuit, and \"The Junior Mint\" in which Jerry and Kramer accidentally fumble a mint in the operating room. This was the first season to use a story arc of Jerry and George creating their own sitcom, Jerry.\n[…]\nWilliam Irwin has edited an anthology of scholarly essays on philosophy in Seinfeld and Philosophy: A Book about Everything and Nothing. Some entries include \"The Jerry Problem and the Socratic Problem\", \"George's Failed Quest for Happiness: An Aristotelian Analysis\", \"Elaine's Moral Character\", \"Kramer the 'Seducer'\", \"Making Something Out of Nothing: Seinfeld, Sophistry and the Tao\", \"Seinfeld, Subjectivity, and Sartre\", \"Mr.\n[…]\nSeinfeld  at Rotten Tomatoes\n[…]\nSeinfeld at epguides.com\n[…]\nSeinfeld Emmys"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cosmo_Kramer",
        "situacao": "ok",
        "texto": "Cosmo Kramer é uma personagem da sitcom americana Seinfeld interpretada por Michael Richards. Esta personagem foi baseada numa pessoa real, vizinho do roteirista Larry David. Ele tem vários apelidos ao longo do seriado (série), mas o mais usado é simplesmente \"Kramer\". Durante várias temporadas não se soube o primeiro nome dele, até que George Costanza ouviu a mãe dele chamá-lo de Cosmo e revelou \n[…]\nKramer, vizinho do personagem Jerry Seinfeld no seriado, é o mais extravagante e estranho dos quatro personagens principais. Seu caráter é meio infantil e desastrado, parcialmente alienado e descuidado, porém Kramer poderia ser considerado como o mais humano das personagens do seriado.\n[…]\nOu melhor, a água de colónia funcionaria, se não lhe tivessem roubado a ideia; mas, mais tarde, no mesmo episódio em que é revelado que Kramer teve a ideia da água de colónia, vai ao escritório de Calvin Klein e, em troca de a personagem não dizer que lhe roubaram a ideia, faz um anúncio do mesmo perfume.\n[…]\nEle é muito torpe fisicamente, e faz movimentos exagerados, principalmente quando se expressa ou quando entra no apartamento do Jerry Seinfeld, num movimento característico dele, \"arrombando\" a porta e entrando de rompante. É um tanto supersticioso e delirante, e também parece apresentar uma concepção bastante paranoica da realidade. Nas palavras do George: \"A vida do Kramer é como um campo de fantasia\".\n[…]\nEle também faz menção de alguns amigos dele, que nunca aparecem na tela, como Bob Saccamano. Com as mulheres, Kramer não tem problema algum, já que possui o que ele chama de \"kavorka\", qualidade mística que provoca uma intensa atração sexual nas mulheres em volta dele. Segundo George: \"Eu levo as mulheres para o lesbianismo, ele as traz de volta\". Contudo, sua atitude imatura e atrapalhada impede que ele tenha relacionamentos muito sérios.\n[…]\n«Kramer em Seinfeldonline.com»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Corrida Maluca",
      "descricao": "Desenho animado da Hanna-Barbera de 1968, sobre uma série de corridas com carros excêntricos e o trapaceiro Dick Vigarista."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "No desenho Corrida Maluca, de 1968, quantos carros disputavam as provas, contando o de Dick Vigarista?",
    "resposta": "Onze",
    "distratores": [
      "Oito",
      "Dez",
      "Doze"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Wacky_Races_(1968_TV_series)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Wacky_Races_(1968_TV_series)",
        "situacao": "ok",
        "texto": "Wacky Races is an American animated comedy television series produced by Hanna-Barbera Productions in association with Heatter-Quigley Productions. It aired on CBS as part of its Saturday-morning schedule from September 14, 1968, to January 4, 1969, and then reruns the next season. The series features 11 different cars racing against each other in various road rallies throughout North America, wit\n[…]\nThe show gave the results of each race at the end of each episode (the first, second, and third placings are given by the narrator, and the narrative sometimes saw some or all of the other cars cross the finish line) as well as what happened with Dick Dastardly after his last scheme's failure. The show never indicated a particular scoring system or way to determine who won the Wacky Races as a whole.\n[…]\nIn 1990, a cartoon segment in Wake, Rattle and Roll named Fender Bender 500 was produced. The show followed the same premise as Wacky Races, but had racers drive monster trucks and races took place on various parts of the world. Only Dick Dastardly and Muttley returned from among the original Wacky Races cast; all other racers were from other Hanna-Barbera shows such as Yogi Bear and Augie Doggie and Doggie Daddy.\n[…]\nWacky Races (2000)\n[…]\nWacky Races: Crash and Dash\n[…]\nIn 1993, Sega released a medal game based on the series, exclusively in Japan. It was a racing game, but the outcome of the race depended entirely on luck. The PS2 game Wacky Races: Starring Dastardly and Muttley is notable for allowing players to have Dick Dastardly finally win a race. The narrator is taken aback or disgusted and Dastardly is happy and surprised at winning a race. In 2007, Heiwa released a pachinko game titled Kenken Aloha de Hawaii.\n[…]\nIt's the Wacky Races!\n[…]\nWacky Races at IMDb\n[…]\nCartoon Network: DOC – Wacky Races – cached copy from Internet Archives\n[…]\nThe Cartoon Scrapbook – Profile on Wacky Races\n[…]\nWacky Races on Flickr"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Wacky_Races",
        "situacao": "ok",
        "texto": "Wacky Races (no Brasil: Corrida Maluca e em Portugal: A Mais Louca Corrida do Mundo) é uma série de desenho animado produzida pela Hanna-Barbera e lançada pela CBS que foi produzida entre 14 de setembro de 1968 a 4 de janeiro de 1969, rendendo 34 episódios. Os competidores buscavam o título mundial de \"Corredor Mais Louco do Mundo\".\n[…]\nPor ironia, a Máquina do Mal era aparentemente o carro mais veloz e mais bem equipado do desenho e mesmo assim Dick Vigarista jamais chegou a vencer a corrida: mesmo liderando com larga vantagem, Dick sempre parava no meio da corrida para montar suas armadilhas, mas seus planos invariavelmente falhavam e faziam-no acabar em último lugar. Alguns anos mais tarde, a dupla teve direito a um desenho animado solo, chamado Dastardly & Muttley In Their Flying Machines.\n[…]\nCarro 5: O Gato Compacto (em Portugal), Carrinho pra frente no Brasil, era um carro guiado por Penélope Pitstop (em Portugal), Penélope Charmosa no Brasil. Era um carro rosa com linhas femininas, que possuía várias engenhocas que ajudavam Penélope a manter-se bonita durante as corridas. Assim como Dick Vigarista e Muttley, Penélope teve direito a um desenho animado solo, The Perils of Penelope Pitstop.\n[…]\nDick Vigarista, Clyde: Paul Winchell\n[…]\nDick Vigarista (1ª voz): Paulo Gonçalves\n[…]\nDick Vigarista (2ª voz): Allan Lima\n[…]\nDick Vigarista (3ª voz), os Irmãos Rocha, Medonho: Domício Costa\n[…]\nUm Gorila na Corrida\n[…]\nCorrida Quente em Chillicothe\n[…]\nA Máquina do Mal/Dick Vigarista e Muttley: Nenhuma. Dick chegou a vencer a corrida da Cidade Fantasma, mas foi desclassificado pelos juízes por ter trapaceado na chegada; e a corrida de Washington quase ganha na reta final e de cuja vitória abriu mão só para \"dar um autógrafo\" para Muttley.\n[…]\nA Máquina do Mal/Dick Vigarista e Muttley: Nenhum.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "A Família Sol-Lá-Si-Dó",
      "descricao": "Sitcom americana exibida de 1969 a 1974, The Brady Bunch, sobre uma família formada pela união de um pai e uma mãe com filhos de casamentos anteriores."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Na série A Família Sol-Lá-Si-Dó, um viúvo e uma mulher se casam e reúnem os filhos dos dois. Quantas crianças são ao todo?",
    "resposta": "Seis",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Brady_Bunch"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Brady_Bunch",
        "situacao": "ok",
        "texto": "The Brady Bunch is an American sitcom created by Sherwood Schwartz that aired five seasons from September 26, 1969, to March 8, 1974, on ABC. The series revolves around a large blended family of six children, with three boys and three girls, that also featured an ensemble cast, starring Robert Reed, Florence Henderson, as Mike and Carol Brady and Ann B. Davis as Alice Nelson, the housekeeper. Afte\n[…]\nThe use of this innovation here became so familiar through the sitcom's popularity that it was referred to in the press as the \"Brady Bunch effect\".\n[…]\nA sequel, A Very Brady Sequel, was released in 1996. The cast of the first film returned for the sequel. Another sequel, The Brady Bunch in the White House, was made-for-television and aired on Fox in 2002. Gary Cole and Shelley Long returned for the third film, while the Brady kids and Alice were recast.\n[…]\nThe third episode of the Disney+ miniseries WandaVision, \"Now in Color\", pays homage to 1970s sitcoms, including The Brady Bunch, and uses a similar intro for the virtual WandaVision in-show program.\n[…]\nAn unauthorized stage show, The Real Live Brady Bunch, was created by siblings Joey Soloway and Faith Soloway at Chicago's Annoyance Theatre in 1991. The cast, including Andy Richter as Mike, Jane Lynch as Carol, and Melanie Hutsell as Jan, performed original Brady Bunch scripts verbatim on stage. The show became a phenomenon in Chicago, with \"new\" episodes transcribed and performed every two weeks.\n[…]\nChristmas with The Brady Bunch, an album released by Paramount Records in 1970\n[…]\nIt's a Sunshine Day: The Best of The Brady Bunch—1993 compilation album\n[…]\nTam Spiva, a Brady Bunch script writer\n[…]\nThe Brady Bunch at IMDb\n[…]\n\"The Brady Bunch Cast: Where are they now?\" - ABC News, 2010 (includes some editorial errors)\n[…]\nThe Brady Bunch at The Interviews: An Oral History of Television\n[…]\nThe Real Brady Bros on Apple Podcasts - The Real Brady Bros Podcast"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/The_Brady_Bunch",
        "situacao": "ok",
        "texto": "The Brady Bunch (bra: A Família Brady / A Família Sol-Lá-Si-Dó (Retrô Channel)) foi uma sitcom estadunidense criada por Sherwood Schwartz e exibida originalmente entre 26 de Setembro de 1969 e 8 de Março de 1974 pela ABC. A história girava em torno de uma grande família com seis filhos.\n[…]\nEm 1966, após o sucesso de sua série Gilligan's Island, Sherwood Schwartz concebeu a ideia para The Brady Bunch após ler no The Los Angeles Times que \"30% dos casamentos nos Estados Unidos tem filhos de casamentos anteriores.\" Ele começou a trabalhar no roteiro de um episódio piloto de uma série de TV chamada provisoriamente Mine and Yours (Meus e Seus). Schwartz, em seguida, desenvolveu o roteiro para incluir três crianças para cada um dos pais.\n[…]\nMike Brady (Robert Reed), um arquiteto viúvo com três filhos, Greg (Barry Williams), Peter (Christopher Knight), e Bobby (Mike Lookinland), casa-se com Carol Martin (Florence Henderson), uma mãe de três garotas: Marcia (Maureen McCormick), Jan (Eve Plumb) e Cindy (Susan Olsen). A esposa e as filhas adotam o sobrenome do pai, \"Brady\". Ainda integram à família a governanta Alice Nelson (Ann B. Davis) e o cão Tiger.\n[…]\nLloyd Schwartz, filho do criador e produtor executivo Sherwood Schwartz, admitiu mais tarde que o personagem mexeu com o equilíbrio da sitcom e que os fans o consideraram como um \"intruso\". Oliver apareceu nos últimos seis episódios da quinta temporada, que acabou sendo a última quando a ABC cancelou a série em 1974. O termo \"Síndrome do Primo Oliver\" tem sido usado para descrever a adição de novos personagens em uma série em uma tentativa de salvá-la do cancelamento.\n[…]\nImogene Coca (conhecido por Your Show of Shows) como Jenny, tia-avó das meninas Brady em \"Jan's Aunt Jenny\" (temporada 3)\n[…]\nThe Brady Bunch no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Lassie",
      "descricao": "Cadela collie fictícia, heroína de filmes e de uma longa série de TV americana iniciada em 1954."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "A heroína Lassie, a cadela collie da série de TV, era interpretada por cães de que sexo?",
    "resposta": "Machos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pal_(dog)",
      "https://en.wikipedia.org/wiki/Lassie"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pal_(dog)",
        "situacao": "ok",
        "texto": "Pal (Pal von Glamis) (June 4, 1940 – June 18, 1958) was a male Rough Collie performer and the first in a line of such dogs to portray the fictional female collie Lassie in film, on radio, and on television. In 1992, The Saturday Evening Post said Pal had \"the most spectacular canine career in film history\".\n[…]\nPal's big break into the movies came in 1943 during the filming of the Metro-Goldwyn-Mayer film Lassie Come Home. The studios had decided to use a show collie trained by Frank Inn in the movie. A decision was made to take advantage of a massive flooding of the San Joaquin River in central California in order to obtain some spectacular footage for the film. Pal performed exceptionally well and the scene was completed in one take. Owner/trainer Rudd Weatherwax said director Fred M.\n[…]\nWilcox was so impressed with Pal during the sequence that he had \"tears in his eyes.\" In response, producers released the female collie and hired Pal in her stead, reshooting the first six weeks of the filming with Pal now portraying Lassie. Other sources say that the female collie was replaced because she began to shed excessively during shooting of the film in the summer.\n[…]\nAfter several years of stand-in collies that were not related to the line, Classic Media contracted with Carol Riggins, who had been co-trainer with Robert Weatherwax, and her 9th generation dog HeyHey, who had played the role of Lassie during the last 13 episodes of the Canada Lassie series under the Weatherwax Trained Dogs banner. Carol Riggins continues today as the official owner and trainer of Lassie with another \"Pal\", a 10th generation direct descendant of the original Pal."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Lassie",
        "situacao": "ok",
        "texto": "Lassie is a fictional female Rough Collie dog and is featured in a 1938 short story by Eric Knight that was later expanded to a 1940 full-length novel, Lassie Come-Home. Knight's portrayal of Lassie bears some features in common with another fictional female collie of the same name, featured in the British writer Elizabeth Gaskell's 1859 short story \"The Half Brothers\".\n[…]\nThe fictional character of Lassie was created by English author Eric Knight in Lassie Come-Home, first published as a short story in the Dec. 17, 1938 issue of The Saturday Evening Post and later as a full-length novel in 1940. Set in the Depression-era England, the novel depicts the lengthy journey a Rough Collie makes to be reunited with her young Yorkshire master after her family is forced to sell her for money.\n[…]\nFrom 1954 to 1973, the television series Lassie was broadcast, with Lassie initially residing on a farm with a young male master. In the eleventh season, it changed to U.S. Forest Service rangers as her companions, then the collie was on her own for a season, before ending the series with Lassie residing at a ranch for orphaned children. The series was the recipient of two Emmy Awards before it was canceled in 1973. Lassie won several PATSY Awards (an award for animal actors).\n[…]\nIn 2005, the show business journal Variety named Lassie one of the \"100 Icons of the Century\"—the only animal star on the list.\n[…]\nA Lassie PS2 game was released in 2002.\n[…]\nA comic series ran from May 1950 to 1969 and lasted 70 issues. It was titled M-G-M's Lassie until issue #37, then just Lassie until the end of its run. It was published by Dell Comics until issue #59 Oct 1962, then by Gold Key.\n[…]\nBessy, a Belgian comic strip inspired by the success of \"Lassie\" and which also featured a collie."
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
