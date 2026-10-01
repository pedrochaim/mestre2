Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Olimpíadas** (tema **Esportes**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Ginásio da Grécia Antiga",
      "descricao": "Local de treino físico dos atletas na Grécia Antiga, origem da palavra ginásio."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A palavra ginásio vem de um termo grego que lembra como os atletas treinavam e competiam na Antiguidade. O que esse termo significa?",
    "resposta": "Nu",
    "fonte": [
      "https://en.wikipedia.org/wiki/Gymnasium_(ancient_Greece)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Gymnasium_(ancient_Greece)",
        "situacao": "ok",
        "texto": "The gymnasium (Ancient Greek: γυμνάσιον, romanized: gymnásion) in Ancient Greece functioned as a training facility for competitors in public games. It was also a place for socializing and engaging in intellectual pursuits. The name comes from the Ancient Greek term gymnós, meaning \"naked\" or \"nude\".\n[…]\nAthletes competed nude, a practice which was said to encourage aesthetic appreciation of the male body, and to be a tribute to the gods. Gymnasia and palaestrae (wrestling schools) were under the protection and patronage of Heracles, Hermes and, in Athens, Theseus.\n[…]\nThe athletic contests for which the gymnasium supplied the means of training and competition formed part of the social and spiritual life of the Greeks from very early on. The contests took place in honour of heroes and gods, sometimes forming part of a periodic festival or the funeral rites of a deceased chief.\n[…]\nActive training in the gymnasiums was chiefly restricted to boys and young men. In some places, including at the Heraean Games at Olympia, footraces between unmarried girls were held, but girls were usually excluded from other activities such as wrestling, and they did not compete against boys and men when racing. While male participants were always fully nude, this was not necessarily the case for girls. At Sparta and in Attica, they raced either naked or wearing only a short skirt or trunks.\n[…]\nIn Athens ten gymnasiarchs were appointed annually, one from each tribe. These officials rotated through a series of jobs, each with unique duties. They were responsible for looking after and compensating persons training for public contests, conducting the games at the great Athenian festivals, exercising general supervision over competitor morale, and decorating and maintaining the gymnasium.\n[…]\nGymnasium at Delphi"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Gin%C3%A1sio_%28Gr%C3%A9cia_Antiga%29",
        "situacao": "ok",
        "texto": "A história do ginásio (em latim gymnasium) data da Grécia Antiga onde o significado da palavra era \"escola para exercícios nus\". Era um local utilizado não apenas para o treinamento de atletas, mas também para socialização e perseguição de objetivos intelectuais.\n[…]\nA palavra gymnasium é a versão latina do nome grego γυμνάσιον (gymnasion), \"escola ginástica\". Por sua vez \"escola\" é derivado do adjetivo γυμνός (gymnos) do grego comum e significa \"nu\", por relação com o verbo γυμνάζω (gymnazo), cujo significado é \"treinar nu\", \"treinar em exercicios de ginástica\", geralmente \"treinar, exercitar\". O verbo tinha este significado porque era hábito despirem-se para fazer exercícios físicos.\n[…]\nHistóricamente, o gymnasium era usado para exercício físico, área de banho comum e atividades escolares e filosóficas.\n[…]\nOriginariamente os ginásios eram instituições públicas, onde apenas atletas masculinos na idade de 18 anos recebiam treinamento para as competições em jogos públicos onde se opunham à palestra, instituição privada onde as escolas recebiam treinamento físico. Os ginásios gregos também realizavam palestras e discussões sobre filosofia, literatura e música, sendo que as bibliotecas públicas encontravam-se frequentemente nas proximidades do local.\n[…]\nA supervisão dos ginásios era conferidas aos pedotribais que eram os supervisores responsáveis pela conduta do esporte e jogos nos festivais públicos. Quem direcionava as escolas e supervisionava os competidores eram os gymnastai que desempenhavam a função de professores, técnicos e treinadores de atletas. Gradualmente os ginásios se transformaram em instituições de aprendizagem e escolas de cultura intelectual.\n[…]\nRUBIO, K. Atleta contemporâneo e o mito do herói. São Paulo: Casa do Psicólogo, 2001.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Olimpíada (período)",
      "descricao": "Período de quatro anos usado pelos gregos antigos para contar o tempo entre os Jogos Olímpicos."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Na origem grega, a palavra olimpíada não nomeava os jogos em si. O que ela designava?",
    "resposta": "O intervalo de quatro anos entre os Jogos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Olympiad"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Olympiad",
        "situacao": "ok",
        "texto": "An olympiad (Greek: Ὀλυμπιάς, Olympiás) is a period of four years, particularly those associated with the ancient and modern Olympic Games.\n[…]\nThis means that the count of the Olympiads continues, even if Olympic Games are cancelled: For instance, the regular intervals would have meant (summer) Olympic Games should have occurred in 1940 and 1944, but both were cancelled due to World War II.\n[…]\nFor example, the first Winter Games, in 1924, are not designated as Winter Games of the VII Olympiad, but as the I Winter Olympic Games. (The first Winter Games were termed as \"Olympic\" in a later year.)\n[…]\nSome Olympic Committees often use the term quadrennium, which they claim refers to the same four-year period. However, it indicates these quadrennia in calendar years, starting with the first year after the Summer Olympics and ending with the year the next Olympics are held. This would suggest a more precise period of four years, but, for example, the 2001–2004 Quadrennium would then not be exactly the same period as the XXVII Olympiad, which was 2000–2003.\n[…]\nThe English term is still often used popularly to indicate the games themselves, a usage that is uncommon in ancient Greek (as an Olympiad is most often the time period between and including sets of games). It is also used to indicate international competitions other than physical sports.\n[…]\nIn these cases Olympiad is used to indicate a regular event of international competition for top achieving participants; it does not necessarily indicate a four-year period.\n[…]\nThe Olympiad (L'Olimpiade) is also the name of some 60 operas set in Ancient Greece."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Olimp%C3%ADada",
        "situacao": "ok",
        "texto": "Olimpíada (do latim Olympĭas), conforme Carta Olímpica grega de 1896, é o período de quatro anos civis entre a realização de dois Jogos Olímpicos consecutivos, ou Jogos da Olimpíada. Cada Olimpíada ou Período Olímpico inicia no primeiro dia de janeiro (01/01) do primeiro ano de realização dos Jogos e segue até o trigésimo primeiro dia de dezembro do quarto ano (31/12), véspera do próximo evento.\n[…]\nPor exemplo, de 1° de janeiro de 2016 até 31 de dezembro de 2019 o mundo viveu a XXXI Olimpíada (Rio 2016). Já os Jogos Olímpicos do Rio, realizados em agosto de 2016, foram os Jogos da XXXI Olimpíada.\n[…]\nO plural - Olimpíadas - é considerado como a soma de todas as edições de Jogos Olímpicos, tanto de verão quanto de inverno, realizadas até hoje.\n[…]\nOs Jogos Olímpicos da Antiguidade tiveram início na cidade de Olímpia na Grécia antiga, os homens participavam dos jogos em honra a Zeus e as mulheres tinham seus próprios jogos em honra à Hera. O vencedor recebia uma coroa de louro ou de folhas de oliveira. Modalidades praticadas: arremesso de dardo, salto em altura, lançamento de disco, corridas, lutas e muitas outras.\n[…]\nNo ano de 776 a.C, uma aliança entre reis de diferentes regiões da Grécia foi selada no santuário de Olímpia. Eram tempos de muitas guerras, e este acordo estabeleceu a Paz Olímpica enquanto durassem as competições. A partir de então, os gregos acertaram que durante os meses do verão na Grécia (julho a agosto), os jogos aconteceriam durante o período de trégua.\n[…]\nA este período de quatro anos sem jogos, ou melhor, entre uma edição e outra, foi dado o nome de \"Olimpíada\". E aos jogos em si, de \"Jogos Olímpicos\".\n[…]\nChisholm, Hugh, ed. (1911). «Olympiad». Encyclopædia Britannica (em inglês) 11.ª ed. Encyclopædia Britannica, Inc. (atualmente em domínio público)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Agitos",
      "descricao": "Símbolo dos Jogos Paralímpicos, formado por três meias-luas em vermelho, azul e verde."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O símbolo paralímpico, com três meias-luas em vermelho, azul e verde, se chama agitos. O que essa palavra latina significa?",
    "resposta": "Eu me movo",
    "distratores": [
      "Eu venço",
      "Eu supero",
      "Eu luto"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Paralympic_symbols"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Paralympic_symbols",
        "situacao": "ok",
        "texto": "The Paralympic symbols are the icons, flags, and symbols used by the International Paralympic Committee (IPC) to promote the Paralympic Movement and the Paralympic Games."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/S%C3%ADmbolos_paral%C3%ADmpicos",
        "situacao": "ok",
        "texto": "Os símbolos paralímpicos são os ícones, bandeiras e símbolos usados pelo Comitê Paralímpico Internacional a fim de promover os Jogos Paralímpicos.\n[…]\nO símbolo dos Jogos Paralímpicos é composto por três \"agitos\", das cores vermelha, azul e verde apontando para um único ponto, em um campo branco. O agito (\"Eu me movo\" em latim) é um símbolo que expressa o movimento em linhas assimétricas. O símbolo paralímpico foi criado pela agência Scholz & Friends e aprovado em abril de 2003.\n[…]\nO primeiro logo criado especificamente para os Jogos foi o que foi usado nos Jogos Paralímpicos de Verão de 1988 em Seul e foi baseado em um componente decorativo coreano chamado de pa {Hangul: 파; Hanja: 巴}. Dois pa compõem o taegeuk, que é o símbolo central da bandeira da Coreia do Sul. Os pas estavam posicionados como os anéis olímpicos, mas não estavam interligados e a sequência das cores era a mesma dos anéis: azul, preto, vermelho, verde e amarelo.\n[…]\nAlguns dias antes dos Jogos Paralímpicos de Inverno de 1992, em Albertville, na França, o IPC divulgou uma nova versão de seu símbolo contendo três pa. Essa versão não seria usada até o encerramento dos Jogos Paralímpicos de Inverno de 1994 em Lillehammer, Noruega.\n[…]\nAs medalhas concedidas aos vencedores paralímpicos são um outro símbolo associado aos Jogos Paralímpicos. As medalhas são feitas de prata banhada a ouro (normalmente descrita como medalhas de ouro), prata ou bronze, e atribuídas aos três primeiros classificados em um evento específico. Para cada edição dos Jogos Paralímpicos, as medalhas são concebidas de forma diferente, refletindo o anfitrião dos jogos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Vinicius e Tom",
      "descricao": "Mascotes olímpico e paralímpico dos Jogos Rio 2016."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Os mascotes olímpico e paralímpico da Rio 2016 receberam nomes em homenagem a que dupla de compositores da bossa nova?",
    "resposta": "Vinicius de Moraes e Tom Jobim",
    "fonte": [
      "https://en.wikipedia.org/wiki/Vinicius_and_Tom"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Vinicius_and_Tom",
        "situacao": "ok",
        "texto": "Vinicius (Portuguese: [viˈnisjus]; Vinícius) is the official mascot of the 2016 Summer Olympics, and Tom (Portuguese: [tõw̃]) is the official mascot of the 2016 Summer Paralympics. Both events were held in Rio de Janeiro, Brazil. The mascots were created by São Paulo-based animation company Birdo, which was selected by a national tender process that began in November 2012.\n[…]\nFollowing a three-week online vote which ended on 14 December 2014, the public named the two mascots after Vinicius de Moraes and Antônio Carlos \"Tom\" Jobim, the co-writers of the 1962 bossa nova song \"The Girl from Ipanema\".\n[…]\n\"Vinicius and Tom\" – the names of musicians Vinicius de Moraes and Antônio Carlos \"Tom\" Jobim, the co-writers of the song \"The Girl from Ipanema\"\n[…]\nAccording to their fictional backstories, Vinicius and Tom \"were both born from the joy of Brazilians\" after the International Olympic Committee selected Rio de Janeiro to host the 2016 Summer Olympics and Paralympics. Brand director Beth Lula stated that the mascots are intended to reflect the diversity of Brazil's culture and people. The mascots' namesakes, Vinicius de Moraes and Tom Jobim, co-wrote the 1962 bossa nova song \"The Girl from Ipanema\".\n[…]\nIn an entry about 2000 Summer Olympics' unofficial mascot Fatso the Wombat on Slate's culture blog Brow Beat, Matthew Dessem wrote that there were no glaring issues with the mascots when compared to previous Olympic mascots: \"Like the best Olympic mascots of yore, Vinicius and Tom are well-suited to plush toys and licensing deals and will be completely forgotten within a year.\" Leila Cobo, in an article published by Billboard, praised the organizers of Rio 2016 for \"celebrating music in a most joyful and profound way\" by naming the Olympic mascot after Vinicius de Moraes.\n[…]\nBirdo Studio – official website of the studio that created the mascots"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Vin%C3%ADcius_e_Tom",
        "situacao": "ok",
        "texto": "Vinícius foi o mascote oficial dos Jogos Olímpicos, e Tom foi o mascote oficial dos Jogos Paralímpicos de Verão de 2016. Ambos os eventos foram realizados no Rio de Janeiro, Brasil. Os mascotes foram criados pela empresa de animação Birdo, com sede em São Paulo, que foi selecionada por um processo nacional de licitação iniciado em novembro de 2012. O design do Vinícius representa a vida selvagem b\n[…]\nApós uma votação on-line de três semanas que terminou em 14 de dezembro de 2014, o público nomeou os dois mascotes em homenagem a Vinicius de Moraes e Tom Jobim, os co-escritores da canção de bossa nova de 1962 \"Garota de Ipanema\".\n[…]\nDe acordo com suas histórias ficticiosas, Vinicius e Tom \"nasceram da alegria dos brasileiros\" depois que o Comitê Olímpico Internacional selecionou o Rio de Janeiro para sediar os Jogos Olímpicos e Paraolímpicos de 2016. A diretora da marca, Beth Lula, afirmou que os mascotes tinham como objetivo refletir a diversidade da cultura e das pessoas do Brasil. Os homônimos dos mascotes, Vinicius de Moraes e Tom Jobim, co-escreveram a canção de bossa nova de 1962 \"Garota de Ipanema\".\n[…]\nEm um artigo publicado sobre o mascote não oficial dos Jogos Olímpicos de Verão de 2000, Fatso the Wombat, no blog de cultura do Slate, Matthew Dessem escreveu que não havia problemas gritantes com os mascotes quando comparados aos mascotes Olímpicos anteriores: \"Como os melhores mascotes Olímpicos de outrora, Vinícius e Tom são bem adaptados para brinquedos de pelúcia e acordos de licenciamento e serão completamente esquecidos dentro de um ano.\" Leila Cobo, em um artigo publicado pela Billboard, elogiou os organizadores do Rio 2016 por \"celebrar a música de maneira alegre e profunda\" ao nomear o mascote Olímpico em homenagem a Vinicius de Moraes.\n[…]\nWenlock e Mandeville – mascotes dos Jogos Olímpicos e Paralímpicos de Verão de 2012",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Fosbury Flop",
      "descricao": "Técnica do salto em altura em que o atleta passa de costas sobre o sarrafo."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "No salto em altura, a técnica de passar de costas sobre o sarrafo leva o nome de qual campeão olímpico americano de 1968?",
    "resposta": "Dick Fosbury",
    "fonte": [
      "https://en.wikipedia.org/wiki/Fosbury_flop"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fosbury_flop",
        "situacao": "ok",
        "texto": "The Fosbury flop is a jumping style used in the track and field event of high jump. It was popularized and perfected by American athlete Dick Fosbury, whose gold medal in the 1968 Summer Olympics in Mexico City brought it to the world's attention. The flop became the dominant style of the event, surpassing the straddle technique, Western roll, Eastern cut-off, or scissors jump to clear the bar.\n[…]\nThough the backwards flop technique had been known for years before Fosbury, landing surfaces had been sandpits or low piles of matting and high jumpers had to land on their feet or at least land carefully to prevent injury. With the advent of deep foam matting, high jumpers were able to be more adventurous in their landing styles and hence more experimental with jumping styles.\n[…]\nThe approach (or run-up) in the Fosbury flop is characterized by (at least) the final four or five steps being run in a curve, allowing the athlete to lean in to the turn, away from the bar. This allows the center of gravity to be lowered even before knee flexion, giving a longer time period for the take-off thrust. Additionally, on take-off, the sudden move from inward lean to outwards produces a rotation of the jumper's body along the bar's axis, aiding clearance.\n[…]\nFosbury himself cleared the bar with his hands by his sides, whereas some athletes cross the bar with their arms held out to the side or even above their heads, optimizing their mass-distribution. Studies show that variations in approach, arm technique, and other factors can be adjusted to achieve each athlete's best performance.\n[…]\nDick Fosbury revolutionised the high jump (from the International Olympic Committee web site)\n[…]\nRotation over the bar in the Fosbury Flop analysed & explained by Dr. Jesus Dapena Archived 2 December 2008 at the Wayback Machine."
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Jesse Owens",
      "descricao": "Velocista americano, campeão de quatro provas nos Jogos de Berlim 1936."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Jesse Owens se chamava James Cleveland. Como ele se apresentava quando uma professora entendeu errado e passou a chamá-lo de Jesse?",
    "resposta": "J.C., suas iniciais",
    "fonte": [
      "https://en.wikipedia.org/wiki/Jesse_Owens"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Jesse_Owens",
        "situacao": "ok",
        "texto": "James Cleveland \"Jesse\" Owens (September 12, 1913 – March 31, 1980) was an American track and field athlete. He made history at the 1936 Olympic Games by winning four gold medals, setting individual Olympic records in each event, plus another as a member of the 400-meter relay. He is widely regarded as one of the greatest athletes in track and field history.\n[…]\nJesse Owens, originally known as J. C., on September 12, 1913. He was the youngest of ten children (three girls and seven boys) born to Henry Cleveland Owens (1881–1942), a sharecropper, and Mary Emma Fitzgerald (1876–1940) in Oakville, Alabama. He was the grandson of a slave.\n[…]\nAt age nine, he and his family moved to Cleveland, Ohio for better opportunities as part of the Great Migration (1910–70) when millions of African Americans left the segregated and rural South for the urban and industrial North. When his new teacher asked his name to enter in her roll book, he said \"J. C.\", but because of his strong Southern accent, she thought he said \"Jesse\". The name stuck, and he was known as Jesse Owens thereafter.\n[…]\nNovember 15, 2010: The city of Cleveland renamed East Roadway, between Rockwell and Superior avenues in Public Square, Jesse Owens Way.\n[…]\n2021: A horticulturally propagated tree from the original Jesse Owens Olympic Oak was planted by the Rockefeller Park Lagoon. In 2022, another was planted beside the original tree at James Ford Rhodes High School.\n[…]\nBuckley, James (2015). Who Was Jesse Owens?. Penguin Workshop. p. 112.\n[…]\nJesse Owens Museum\n[…]\nJesse Owens Information\n[…]\nJesse Owens at IMDb\n[…]\nJesse Owens video newsreel\n[…]\nJesse Owens at the United States Olympic Team at the Wayback Machine (archived July 5, 2006)\n[…]\nJesse Owens article at the Wayback Machine (archived October 6, 2013), Encyclopedia of Alabama\n[…]\nJesse Owens at the USATF Hall of Fame (archived)\n[…]\nJesse Owens at the Team USA Hall of Fame"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jesse_Owens",
        "situacao": "ok",
        "texto": "James Cleveland \"Jesse\" Owens (Oakville, 12 de setembro de 1913 — Tucson, 31 de março de 1980), foi um atleta e líder civil norte-americano. Ele participou nos Jogos Olímpicos de Verão de 1936 em Berlim, Alemanha Nazista, em que ganhou quatro medalhas de ouro nos 100 e 200 metros rasos, no salto em distância e no revezamento 4x100m. Foi o primeiro atleta a vencer quatro ouros em uma Olimpíada.\n[…]\nQuando seu novo professor perguntou o seu nome (para entrar em seu livro de anotações), ele disse que JC, mas por causa de seu forte sotaque do sul, ele pensou que ele disse \"Jesse\". O nome pegou, e ele ficou conhecido como Jesse Owens o resto de sua vida. Segundo o atleta, ele estava tímido demais para corrigir, já que era a primeira vez que entrava em uma escola mista.\n[…]\nDaí em diante entrava em cena Jesse Owens, que venceu o revezamento de 4x100m (39s8), os 100m (10s3) e 200m rasos (20s7) e o salto em distância (8,06m) - nestes dois últimos bateu o recorde mundial. Quando Owens venceu a prova dos 200m ele mirou seus olhos para o COI e não para a tribuna de Hitler, pois Hitler estava ausente no dia. Jesse Owens foi aclamado por milhares de torcedores de diversas nações naquele dia, juntamente com o alemão Lutz Long, que terminou a prova em segundo lugar.\n[…]\nApós a competição, para se manter, passou a se apresentar em troca de dinheiro, o que era considerado profissionalismo, contrário ao ideal amador do esporte. Acabou expulso da Associação Amadora de Atletismo. Ao deixar as corridas, o velocista foi monitor de crianças em jardins de infância, frentista e dono de lavanderia, até passar a se dedicar às relações públicas, em trabalhos voluntários e para programas do governo.\n[…]\nOwens morreu de cancro no pulmão em 31 de março de 1980 em Tucson.\n[…]\nPrêmio Jesse Owens\n[…]\nhttps://figurasdesporto.blogspot.com/2024/07/jesse-owens-um-simbolo-de-excelencia-e.html",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Emil Zátopek",
      "descricao": "Fundista tcheco, campeão dos 5 mil, dos 10 mil metros e da maratona em Helsinque 1952."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Campeão dos cinco mil, dos dez mil metros e da maratona em Helsinque 1952, Emil Zátopek ganhou que apelido?",
    "resposta": "Locomotiva Tcheca",
    "distratores": [
      "Relâmpago de Praga",
      "Cavalo de Ferro",
      "Foguete Vermelho"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Emil_Z%C3%A1topek"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Emil_Z%C3%A1topek",
        "situacao": "ok",
        "texto": "Emil Zátopek (Czech: [ˈɛmɪl ˈzaːtopɛk] ; 19 September 1922 – 21 November 2000) was a Czech long-distance runner who won three gold medals at the 1952 Summer Olympics in Helsinki. He came first in the 5,000 metres and 10,000 metres runs before he decided at the last minute to compete in the first marathon of his life, which he also won. Zátopek was nicknamed the \"Czech Locomotive\".\n[…]\nAt the 1952 Summer Olympics in Helsinki, Zátopek won gold in the 5,000 m, 10,000 m and marathon, breaking Olympic records in each event. Zátopek is the only person to win these three long-distance events in the same Olympic Games. His victory in the 5,000 m came after a ferocious last lap in 57.5 seconds, during which he went from fourth place to first in the final turn, passing first Alain Mimoun of France, then Herbert Schade of West Germany and finally Chris Chataway of Great Britain.\n[…]\nZátopek's running style was distinctive and very much at odds with what was considered to be efficient at the time. His head would often roll, face contorted with effort, while his torso swung from side to side. He often wheezed and panted audibly while running, which earned him the nicknames of \"Emil the Terrible\" or the \"Czech Locomotive\". When asked about his tortured facial expressions, Zátopek is said to have replied: \"It isn't gymnastics or figure skating, you know\".\n[…]\nThe song \"Czech Locomotive\" by Australian psychedelic rock band Pond off of their album 9 is about him.\n[…]\nŠkoda Transportation named its electric locomotive family 109E after him.\n[…]\nEmil Zátopek at World Athletics\n[…]\nEmil Zátopek at Olympedia\n[…]\nEmil Zátopek at Olympics.comEmil Zátopek at OlympicChannel.com (archived)Emil Zátopek at Olympic.org (archived)\n[…]\nEmil Zátopek at Olympijskytym.cz (in Czech)Emil Zátopek at Olympic.cz (in Czech) (archived)\n[…]\nEmil Zatopek at Running Times\n[…]\nEmil Zatopek Biography\n[…]\nRunning Past profile of Zatopek"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Emil_Z%C3%A1topek",
        "situacao": "ok",
        "texto": "Emil Zátopek (Kopřivnice, 19 de setembro de 1922 — Praga, 22 de novembro de 2000) foi um atleta tcheco. Em 2012, foi imortalizado no Hall da Fama do atletismo, criado no mesmo ano como parte das celebrações pelo centenário da IAAF.\n[…]\nSexto filho de uma família pobre, tornou-se um dos maiores nomes do atletismo em todos os tempos e recebeu o apelido de \"Locomotiva de Praga\" ou \"Locomotiva Humana\".\n[…]\nÉ o único homem a vencer os 5 000 metros, 10 000 metros e a maratona numa mesma Olimpíada. O feito aconteceu nos Jogos de 1952, em Helsínquia, na Finlândia.\n[…]\nZátopek já havia participado da Olimpíada de Londres de 1948, quando foi medalhado com o ouro nos 10 000 m e a prata nos 5 000 m. Mas foi em Helsínquia, aos trinta anos de idade, que conseguiu sua façanha gloriosa: venceu os 10 000 m com o novo recorde olímpico de 29 min 17 s. Quatro dias depois, conquistou a medalha de ouro nos 5 000 m com o tempo de 14 min 6 s 6. E três dias depois, enfrentava a maratona no que era a sua primeira experiência na distância.\n[…]\nZátopek foi casado com uma atleta, também checa, de Lançamento do dardo. Trata-se de Dana Zátopková, que nasceu no mesmo dia, mês e ano que ele e também foi campeã olímpica. Na tradição deles não se permitia o casamento se a mulher fosse mais velha que o homem, mas Zátopek veio a provar que Dana era mais nova que ele algumas horas, e então puderam se casar sem choque contra a cultura deles.\n[…]\nNa verdade Zátopek é uma referência no treino desportivo (no período pré-científico) por utilizar estratégias de treino nunca antes vistas. Ele utilizou o \"interval training\" pela primeira vez, fornecendo bases empíricas para as futuras pesquisas científicas sobre esse método.\n[…]\nLista de campeões olímpicos da maratona",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Rayssa Leal",
      "descricao": "Skatista brasileira, medalhista olímpica no skate street, conhecida como Fadinha."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Por que a skatista Rayssa Leal, prata em Tóquio aos treze anos, ganhou o apelido de Fadinha?",
    "resposta": "Por um vídeo andando de skate fantasiada de fada",
    "fonte": [
      "https://en.wikipedia.org/wiki/Rayssa_Leal"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rayssa_Leal",
        "situacao": "ok",
        "texto": "Jhulia Rayssa Mendes Leal (born 4 January 2008) is a Brazilian professional skateboarder who won a silver medal in women's street skateboarding at the 2020 Summer Olympics and a bronze medal at the 2024 Summer Olympics.\n[…]\nLeal was born in Imperatriz, the second largest city in Maranhão, Brazil, to parents Haraldo Oliveira Leal and Lilian Mendes. She has a younger brother, Arthur. She started skateboarding at the age of six, after getting her first skateboard as a gift from a family friend.\n[…]\nLeal first gained attention at the age of 7, when a video of her skating in a tutu and jumping off tall structures on her skateboard went viral online. Leal's mother filmed the video on September 7, 2015, and sent it to American professional skateboarder Tony Hawk. The next day, Hawk reposted on Twitter and commented: \"I don't know anything about it, but it's amazing: a fairytale-style heelflip in Brazil\". At that time, she always made a post with the best maneuver of the day.\n[…]\nShe was dubbed \"A Fadinha do Skate\", translated roughly as \"The Little Fairy of Skateboarding\".\n[…]\nIn December 2025, Leal won the 2025 SLS Super Crown in São Paulo, her forth consecutive win at SLS.\n[…]\nLeal is set to appear as one of the new playable skaters in the 2025 video game Tony Hawk's Pro Skater 3 + 4, a remake of the third and fourth entries in the series.\n[…]\nRayssa Leal at World Skate (alternative link)\n[…]\nRayssa Leal at The Boardr\n[…]\nRayssa Leal at SPoT\n[…]\nRayssa Leal at the X Games\n[…]\nRayssa Leal at Olympics.com\n[…]\nRayssa Leal at Olympedia\n[…]\nRayssa Leal at InterSportStats\n[…]\nRayssa Leal at the Comitê Olímpico do Brasil  (in Portuguese)\n[…]\nRayssa Leal on Instagram"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rayssa_Leal",
        "situacao": "ok",
        "texto": "Jhúlia Rayssa Mendes Leal (Imperatriz, 4 de janeiro de 2008) é uma skatista brasileira, vice-campeã olímpica nos Jogos Olímpicos de Verão de 2020 em Tóquio, sendo a mais jovem medalhista olímpica brasileira. Em 2024, conquistou o bronze nos Jogos Olímpicos de Paris. Além disso, é campeã pan-americana, vencendo a medalha de ouro no skate street dos Jogos Pan-Americanos de 2023, realizados em Santia\n[…]\nPopularmente chamada de “Fadinha do Skate”, Rayssa ganhou esse apelido após seu vídeo fazendo manobras de skate fantasiada de fada viralizar na internet aos sete anos de idade. Desde então, ela se tornou conhecida na cena do skate brasileira e nas redes sociais. Seu sucesso nas competições fez dela uma atleta reconhecida no skate mundial.\n[…]\nO começo de sua jornada no esporte se deu quando a jovem chamou a atenção na internet por meio de um vídeo no qual executou uma manobra de skate conhecida como heelflip ao saltar uma escada. A filmagem foi registrada por sua mãe, Lilian Mendes, em 7 de setembro de 2015. Na época, a garota tinha apenas 7 anos e estava vestida de fada para participar de um desfile cívico em sua escola.\n[…]\nRayssa fechou o ano de 2021 competindo no Skate Total Urbe (STU), realizado em dezembro na cidade de São Paulo, pela primeira vez, se tornou campeã da competição open, isto é, aberta para competidores de todos os países.\n[…]\nSeguindo a tradição americana, para um skatista receber o título de profissional (pro) naquele país, ele precisa assinar um shape de skate profissional com o seu nome. Por essa lógica, Rayssa Leal tornou-se profissional em maio de 2022, ao receber seu primeiro modelo pro da marca April Skateboards, do skatista australiano Shane O'Neill. O modelo recebido pela atleta, batizado de \"Fadinha\", relembra e exalta o início de seu carreira.\n[…]\nRayssa Leal no X\n[…]\nRayssa Leal no Facebook\n[…]\nRayssa Leal no Instagram\n[…]\nRayssa Leal no YouTube\n[…]\nRayssa Leal em Olympics.com",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Duplo twist carpado",
      "descricao": "Movimento da ginástica artística de solo que entrou no código de pontuação com o nome da ginasta brasileira que o executou primeiro."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "No código de pontuação da ginástica, o duplo twist carpado leva o sobrenome de qual ginasta brasileira?",
    "resposta": "Daiane dos Santos",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Daiane_dos_Santos",
      "https://en.wikipedia.org/wiki/Daiane_dos_Santos"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Daiane_dos_Santos",
        "situacao": "ok",
        "texto": "Daiane Garcia dos Santos (Porto Alegre, 10 de fevereiro de 1983) é uma ex-ginasta brasileira que competiu em provas de ginástica artística. Conquistou nove medalhas de ouro em etapas de copas do mundo de ginástica artística.\n[…]\nDaiane foi a primeira ginasta brasileira, entre homens e mulheres, a conquistar uma medalha de ouro em uma edição do Campeonato Mundial. Daiane dos Santos fez parte da primeira seleção brasileira completa a disputar uma edição olímpica, nos Jogos de Atenas, repetindo a presença nas edições seguintes, nas Olimpíadas de Pequim e Olimpíadas de Londres.\n[…]\nDaiane possui ainda dois movimentos nomeados após ser a primeira  ginasta no mundo a realizá-los: o duplo twist carpado, ou Dos Santos I, e a evolução deste primeiro: o duplo twist esticado, ou Dos Santos II.\n[…]\nNa sequência, competindo no Mundial de Anaheim, na Califórnia, conquistou a primeira medalha de ouro brasileira desta competição: Na final do solo, superou a romena Catalina Ponor e a espanhola Elena Gómez, executando, pela primeira vez, o movimento que recebeu seu nome – o duplo twist carpado ou Dos Santos , desenvolvido com o auxílio do técnico Oleg Ostapenko, seu treinador até então.\n[…]\nEm 2007, submeteu-se a um exame de ancestralidade genética para descobrir seus ascendentes. Assim como resposta, Daiane apresentou as proporções equilibradas entre os três principais grupos que deram origem à população brasileira. A ex-atleta gaúcha tem 39,7% de ancestralidade africana, 40,8% europeia e 19,6% ameríndia. Santos é descendente de angolanos, portugueses, italianos e indígenas.\n[…]\nDaiane dos Santos na Federação Internacional de Ginástica\n[…]\n«Página oficial». www.daianedossantos.com\n[…]\ndos Santos(habilidades vault)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Daiane_dos_Santos",
        "situacao": "ok",
        "texto": "Daiane Garcia dos Santos (born February 10, 1983) is a retired Brazilian artistic gymnast. She is the 2003 world champion on the floor apparatus. On doing so, she became the first black gymnast to ever win an event at the World Championships as well as the first Brazilian and South American to win the competition. She represented Brazil at the 2004, 2008, and 2012 Summer Olympics.\n[…]\nDaiane's breakthrough came at the 2003 World Artistic Gymnastics Championships in Anaheim, California, US. There, she won the gold medal on floor exercise, defeating Romania's Cătălina Ponor, who would become the Olympic champion on the event the following year. She opened her routine with a piked double Arabian: a half twist into a double front flip in a piked position.\n[…]\nDos Santos underwent six months of intensive treatment after the 2007 World Championship and returned to competition at the 2008 World Cups in Cottbus and Tianjin, placing 4th on floor at both. In preparation for the Olympics, she decided along with coach Oleg Ostapenko to bring back her 2004–05 floor music, the crowd-pleasing Brasileirinho. In June, she competed with the Brazilian team at friendly meets in Europe, where she performed the Dos Santos II for the first time since the 2004 Olympics.\n[…]\nDos Santos has two eponymous skills listed in the Code of Points.\n[…]\nMusic: \"Brasileirinho\"; Difficulty: 6.4\n[…]\nRound-off + back handspring + full-twisting double layout; round-off + back handspring + piked double Arabian (Dos Santos I); full turn with leg at horizontal; tour jeté 1/2; front pike + round-off + back handspring + double pike; leap jump + tour jeté 1/1; switch leap; round-off + back handspring + double layout.\n[…]\nDaiane dos Santos at World Gymnastics\n[…]\nDos Santos2 (Floor Exercise Skill)\n[…]\nDaiane dos Santos at Olympics.comDaiane dos Santos at Olympic.org (archived)\n[…]\nDaiane dos Santos at Olympedia"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Badminton",
      "descricao": "Esporte olímpico de raquete em que se rebate uma peteca sobre uma rede."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O badminton tem o nome de uma mansão inglesa onde o jogo ficou popular no século dezenove. A mansão pertencia a quem?",
    "resposta": "Duque de Beaufort",
    "distratores": [
      "Duque de Wellington",
      "Rainha Vitória",
      "Duque de Norfolk"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Badminton"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Badminton",
        "situacao": "ok",
        "texto": "Badminton is a racquet sport played using racquets to hit a shuttlecock across a net. Although it may be played with larger teams, the most common forms of the game are \"singles\" (with one player per side) and \"doubles\" (with two players per side). Badminton is often played as a casual outdoor activity in a yard or on a beach; professional games are played on a rectangular indoor court.\n[…]\nGames employing shuttlecocks have been played for centuries across Eurasia, but the modern game of badminton developed in the mid-19th century among the expatriate officers of British India as a variant of the earlier game of battledore and shuttlecock (\"battledore\" was an older term for \"racquet\"). Its exact origin remains obscure. The name is derived from the Duke of Beaufort's Badminton House in Gloucestershire, but why or when remains unclear.\n[…]\nThe game originally developed in India among the British expatriates, where it was very popular by the 1870s. Ball badminton, a form of the game played with a wool ball instead of a shuttlecock, was played in Thanjavur as early as the 1850s and was at first played interchangeably with badminton by the British, the woollen ball being preferred in windy or wet weather.\n[…]\nEarly on, the game was also known as Poona or Poonah after the garrison town of Poona (Pune), where it was particularly popular and where the first rules for the game were drawn up in 1873. By 1875, officers returning home had started a badminton club in Folkestone. Initially, the sport was played with sides ranging from 1 to 4 players, but it was quickly established that games between two or four competitors worked the best.\n[…]\nGrice, Tony (2008), Badminton: Steps to Success, Human Kinetics, ISBN 978-0-7360-7229-8\n[…]\nBadminton World Federation\n[…]\nLaws of Badminton\n[…]\nBadminton Asia Confederation\n[…]\nBadminton Pan Am\n[…]\nBadminton Oceania\n[…]\nBadminton Europe\n[…]\nBadminton Confederation of Africa (archived)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Badm%C3%ADnton",
        "situacao": "ok",
        "texto": "Badmínton (do inglês, badminton) é um desporto individual ou de pares, semelhante ao ténis e ao volei de praia, praticado com raquete e um volante ou pena que deve passar por cima de uma rede. O plural de badmínton é badmíntones e o jogador de badmínton se chama badmintonista.\n[…]\nO nome deriva de Badminton House, nome da casa de campo do Duque de Beaufort, situada no condado Gloucestershire, onde o jogo teria sido praticado pela primeira vez na Inglaterra. Já em 1860, um negociante de brinquedos de Londres, chamado Isaac Spratt, publicou um livrinho intitulado Badminton Battledore - A New Game, mas infelizmente nenhuma cópia sobreviveu.\n[…]\nO jogo pode ter-se originalmente desenvolvido entre os agentes expatriados na Índia britânica, onde era muito popular na década de 1870. O \"Badmintonbol\", uma forma de jogo jogado com uma bola de lã em vez de um volante, jogava-se em Thanjavur no início dos anos 1850 e por esta altura os britânicos praticavam-no em alternância com o seu badmínton porque preferiam a bola de lã no tempo ventoso ou molhado.\n[…]\nLogo no início, o jogo também era conhecido como Poona ou Poonah após a cidade guarnição de Pune, onde era particularmente popular e onde as primeiras regras para o jogo foram elaborados em 1873. Em 1875, os agentes regressaram e fundaram um clube de badmínton em Folkstone. Inicialmente, o esporte foi jogado com 1-4 jogadores de cada lado do campo, mas foi rapidamente estabelecido que os jogos entre dois ou quatro concorrentes funcionavam melhor.\n[…]\nInício e recomeço do jogo: Antes do início do jogo, o árbitro realiza o sorteio entre os adversários. O vencedor pode escolher entre o serviço ou o campo. Após o apito do árbitro, a equipa que escolheu ou que ficou com o serviço inicia o jogo.\n[…]\nBadmínton na Infopédia",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Anéis olímpicos",
      "descricao": "Símbolo dos Jogos Olímpicos, formado por cinco anéis entrelaçados sobre fundo branco."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Segundo o criador dos anéis olímpicos, por que foram escolhidas aquelas cores, somadas ao fundo branco da bandeira?",
    "resposta": "Juntas formam as cores de todas as bandeiras",
    "fonte": [
      "https://en.wikipedia.org/wiki/Olympic_symbols"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Olympic_symbols",
        "situacao": "ok",
        "texto": "The International Olympic Committee (IOC) uses icons, flags, and symbols to represent and enhance the Olympic Games. These symbols include those commonly used during Olympic competitions such as the flame, fanfare, and theme as well as those used both during and outside competition, such as the Olympic flag.\n[…]\nAn Olympic Rings emoji was added to WhatsApp on 24 July 2016 in version 2.16.7, it was later removed on 15 August 2016 in version 2.16.9. It consisted of five U+25EF ◯ LARGE CIRCLE characters joined with U+200D  ZERO WIDTH JOINERs, forming a joined character sequence. This was presumably part of a temporary agreement with the International Olympic Committee.\n[…]\nIn 1938, the Norwegian brewery Frydenlund patented a label for its root beer which featured the five Olympic rings. In 1952, when Norway was to host the Winter Olympics, the Olympic Committee was notified by Norway's Patent Office that it was Frydenlund that owned the rights to the rings in that country. Today, the successor company Ringnes AS owns the rights to use the patented five rings on its root beer.\n[…]\nIn addition, a few other companies have been successful in using the Olympic name, such as Olympic Paint, which has a paintbrush in the form of a torch as its logo, and the former Greek passenger carrier Olympic Airlines. The airline was, however, obliged to distinguish its logo from the Olympic rings by adding a sixth ring.\n[…]\nBob Barney co-authored the book Selling the Five Rings (2002), with Stephen Wenn and Scott Martyn, which discussed the history of corporate sponsorships and television rights for the Olympic Games. Barney argued that the Olympic torch had been commercialised since its inception in 1936, and that sponsors of the torch relay benefit from brand awareness.\n[…]\nOlympicene\n[…]\nOlympic Files - Mascots (in Russian)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/An%C3%A9is_ol%C3%ADmpicos",
        "situacao": "ok",
        "texto": "Os anéis olímpicos são um símbolo dos Jogos Olímpicos composto por cinco arcos entrelaçados, com as cores azul, amarelo, preto, verde e vermelho sobre um fundo branco. Este foi originalmente concebido em 1913 pelo Barão Pierre de Coubertin, fundador dos Jogos Olímpicos modernos.\n[…]\nO emblema foi escolhido para ilustrar e representar o Congresso mundial de 1914: cinco anéis entrelaçados com cores diferentes - azul, amarelo, preto, verde e vermelho - são colocados no campo em branco do papel. Esses cinco anéis representam as cinco partes do mundo, que agora são conquistados para Olimpismo e dispostas a aceitar uma concorrência saudável.\n[…]\nAs cores utilizadas nos cinco anéis da bandeira foram escolhidas e representadas por Pierre de Coubertin devido à frequência em que aparecem nas bandeiras das diversas nações no mundo. Pelo menos uma das demais cores está presente em cada bandeira, dessa forma, integra todos os países, fornecendo um sentido universal para as Olimpíadas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Anéis olímpicos",
      "descricao": "Símbolo dos Jogos Olímpicos, formado por cinco anéis entrelaçados sobre fundo branco."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Quem criou o símbolo dos cinco anéis olímpicos entrelaçados, apresentado em 1913?",
    "resposta": "Pierre de Coubertin",
    "fonte": [
      "https://en.wikipedia.org/wiki/Olympic_symbols",
      "https://en.wikipedia.org/wiki/Pierre_de_Coubertin"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Olympic_symbols",
        "situacao": "ok",
        "texto": "The International Olympic Committee (IOC) uses icons, flags, and symbols to represent and enhance the Olympic Games. These symbols include those commonly used during Olympic competitions such as the flame, fanfare, and theme as well as those used both during and outside competition, such as the Olympic flag.\n[…]\nThe original Olympic motto is the hendiatris \"Citius, Altius, Fortius,\" Latin for \"Faster, Higher, Stronger\" (also \"Swifter, Higher, Stronger.\") The motto was proposed by Pierre de Coubertin upon the creation of the IOC. Coubertin borrowed it from his friend Henri Didon, a Dominican priest who was an athletics enthusiast. Coubertin said that \"these three words represent a programme of moral beauty. The aesthetics of sport are intangible\".\n[…]\nThe motto was introduced at the 1924 Summer Olympics in Paris. Coubertin's Olympic ideals are expressed in the Olympic creed:\n[…]\nCoubertin got this text from a sermon by Bishop of Central Pennsylvania Ethelbert Talbot, during the 1908 London Games.\n[…]\nThe Olympic rings consist of five interlocking rings, coloured blue, yellow, black, green, and red on a white field. The symbol was originally created in 1913 by Coubertin.\n[…]\nAlthough the colors of the rings were later said to be representations of individual continents, Coubertin originally only meant the number of rings to \"represent the five parts of the world now won over to Olympism.\" According to Coubertin, the colours of the rings, along with the white background, represented the colours of every competing country's flag at the time. Upon its initial introduction, Coubertin stated the following in the August 1913 edition of Olympique:\n[…]\nPierre de Coubertin created the Olympic flag in 1913.\n[…]\nOlympicene\n[…]\nPierre de Coubertin Medal\n[…]\nPBS The Real Olympics, 2004.title/tt23985292\n[…]\nOlympic Files - Mascots (in Russian)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pierre_de_Coubertin",
        "situacao": "ok",
        "texto": "Charles Pierre de Frédy, Baron de Coubertin (French: [ʃaʁl pjɛʁ də fʁedi baʁɔ̃ də kubɛʁtɛ̃]; born Pierre de Frédy; 1 January 1863 – 2 September 1937), also known as Pierre de Coubertin and Baron de Coubertin, was a French educator and historian, co-founder of the International Olympic Committee (IOC), and its second president. He is known as the father of the modern Olympic Games. He was particula\n[…]\nThe Pierre de Coubertin Medal is a special decoration awarded by the International Olympic Committee since 1997 that \"pays tribute to institutions with a pedagogical and educational role and to people who, through their research and the creation of intellectual works in the spirit of Pierre de Coubertin, contribute to the promotion of Olympism.\"\n[…]\nThe street where the Olympic Stadium in Montreal is located (which hosted the 1976 Summer Olympic Games) was named after Pierre de Coubertin, giving the stadium the address 4549 Pierre de Coubertin Avenue. It is the only Olympic stadium in the world that lies on a street named after Coubertin. There are also two schools in Montreal named after Pierre de Coubertin.\n[…]\nMacAloon, John J. (1981). This Great Symbol: Pierre de Coubertin and the Origins of the Modern Olympic Games. Chicago: University of Chicago Press. ISBN 978-0-226-50000-3.\n[…]\nPierre de Coubertin, Olympism: selected writings, edited by Norbert Müller, Lausanne, IOC, 2000\n[…]\nMacaloon, John J (2007) [1981]. This Great Symbol. Pierre de Coubertin and the Origins of the Modern Olympic Games (New ed.). University of Chicago Press. Routledge. ISBN 978-0-415-49494-6.\n[…]\n\"This Great Symbol: Pierre de Coubertin and the Origins of the Modern Olympic Games\". International Journal of the History of Sport. 23 (3 & 4). 2006. Retrieved 19 October 2016 – via Taylor & Francis.\n[…]\nDiscourse of Pierre de Coubertin at Sorbonne announcing the restoring of the Olympic games (in French), audio)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/An%C3%A9is_ol%C3%ADmpicos",
        "situacao": "ok",
        "texto": "Os anéis olímpicos são um símbolo dos Jogos Olímpicos composto por cinco arcos entrelaçados, com as cores azul, amarelo, preto, verde e vermelho sobre um fundo branco. Este foi originalmente concebido em 1913 pelo Barão Pierre de Coubertin, fundador dos Jogos Olímpicos modernos.\n[…]\nO emblema foi escolhido para ilustrar e representar o Congresso mundial de 1914: cinco anéis entrelaçados com cores diferentes - azul, amarelo, preto, verde e vermelho - são colocados no campo em branco do papel. Esses cinco anéis representam as cinco partes do mundo, que agora são conquistados para Olimpismo e dispostas a aceitar uma concorrência saudável.\n[…]\nAs cores utilizadas nos cinco anéis da bandeira foram escolhidas e representadas por Pierre de Coubertin devido à frequência em que aparecem nas bandeiras das diversas nações no mundo. Pelo menos uma das demais cores está presente em cada bandeira, dessa forma, integra todos os países, fornecendo um sentido universal para as Olimpíadas.\n[…]\nO desenho foi feito em 1913 por Pierre de Coubertin recorrendo a grafite e guache em papel, medindo 21 por 27,5 centímetros.\n[…]\nO projeto foi entregue por Pierre de Coubertin a um homem suíço, tendo ficado na família ao longo dos tempos até que um colecionador o comprou e colocou-o à venda em 2020.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Nadia Comăneci",
      "descricao": "Ginasta romena que recebeu a primeira nota dez da ginástica olímpica, em Montreal 1976."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em Montreal 1976, quando Nadia Comaneci recebeu a primeira nota dez, o placar mostrou um vírgula zero zero. Por quê?",
    "resposta": "O placar não comportava quatro dígitos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Nadia_Com%C4%83neci"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Nadia_Com%C4%83neci",
        "situacao": "ok",
        "texto": "Nadia Elena Comăneci Conner (née Comăneci; born November 12, 1961) is a Romanian retired gymnast. She is a five-time Olympic gold medalist, all in individual events. In 1976, at age 14, Comăneci was the first gymnast to be awarded a perfect score of 10.0 at the Olympic Games. At the same Games (1976 Summer Olympics in Montreal), she earned six more perfect 10s for events en route to winning three \n[…]\nRobert Riger used it in association with slow-motion montages of Comăneci on the television program ABC's Wide World of Sports. The song became a top-10 single in the fall of 1976, and composers Barry De Vorzon and Perry Botkin Jr. renamed it as \"Nadia's Theme\" in Comăneci's honor. Comăneci never performed to \"Nadia's Theme\", however. Her floor exercise music was a medley of the songs \"Yes Sir, That's My Baby\" and \"Jump in the Line\", arranged for piano.\n[…]\nIn 1981, the Gymnastics Federation contacted Comăneci and informed her that she would be part of an official tour of the United States named \"Nadia '81\" and her coaches Béla and Márta Károlyi would lead the group. During this tour, Comăneci's team shared a bus trip with American gymnasts; it was the third time she had encountered Bart Conner. They had earlier met in 1976. She later remembered thinking, \"Conner was cute.\n[…]\n2017: an area in the Olympic Park in Montreal was renamed \"Place Nadia Comaneci\".\n[…]\nDimitriu, Dumitru (1976). Nadia Comăneci și echipa de aur. Sport-Turism. OL 4679678M.\n[…]\nNadia Comăneci at IMDb\n[…]\nNadia Comăneci makes history at the Montreal 1976 Olympics – The Olympic Channel, 2010\n[…]\nNadia Comăneci – First Olympics Perfect 10 (Uneven Bars) – Montreal 1976 Olympics – The Olympic Channel, 2015\n[…]\nNadia Comăneci – Selections from all of her routines – Montreal 1976 Olympics (overview) – The Olympic Channel, 2012\n[…]\nNadia Comaneci receives Lifetime Achievement Award from Simone Biles at Laureus Awards – NBC Sports, 2026"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Nadia_Com%C4%83neci",
        "situacao": "ok",
        "texto": "Nadia Elena Comăneci (Onești, 12 de novembro de 1961) é uma ex-ginasta romena, que disputou a modalidade artística e é ainda hoje tida como um ídolo mundial esportivo.\n[…]\nUma das primeiras alunas do treinador Béla Károlyi, enquanto atleta, conquistou nove medalhas olímpicas, cinco delas de ouro, foi a primeira ginasta a receber uma nota dez — desempenho perfeito — em um evento olímpico de ginástica artística, arquiva quatro medalhas mundiais e doze medalhas europeias. Ao lado da russa Svetlana Khorkina, Nadia é detentora do tricampeonato do individual geral continental, além de bicampeã olímpica na trave de equilíbrio.\n[…]\nForam duas as participações de Comăneci em Mundiais. Entre os anos de 1978 e 1979, a ginasta obteve quatro medalhas.\n[…]\nO Mundial da França ocorreu no mês de novembro. Em sua estreia em competições deste nível, aos dezessete anos, Nadia esteve presente em quatro finais.\n[…]\nNa competição qualificatória, realizada no dia 18 de julho, a romena executou nas paralelas assimétricas uma rotina arrojada, que agradou ao público. No final da apresentação, após análise dos árbitros, o placar mostrou a nota 1.00. Em um primeiro momento, o ginásio ficara em silêncio, sem entender como aquela técnica poderia receber um score tão baixo.\n[…]\nNas finais por aparelhos, a ginasta disputou três dos quatro. Apenas nas barras assimétricas, aparato que lhe rendeu a primeira nota dez olímpica, não disputou medalha, tendo encerrado na vigésima posição. No salto sobre o cavalo, em disputa vencida por Natalia Shaposhnikova, Comăneci encerrou na quinta colocação, com o total de 19,350.\n[…]\n«Sítio oficial de Bart Conner e Nadia Comăneci» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Nadia Comăneci",
      "descricao": "Ginasta romena que recebeu a primeira nota dez da ginástica olímpica, em Montreal 1976."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Com quantos anos a romena Nadia Comaneci tirou a primeira nota dez da história da ginástica olímpica?",
    "resposta": "Catorze",
    "fonte": [
      "https://en.wikipedia.org/wiki/Nadia_Com%C4%83neci"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Nadia_Com%C4%83neci",
        "situacao": "ok",
        "texto": "Nadia Elena Comăneci Conner (née Comăneci; born November 12, 1961) is a Romanian retired gymnast. She is a five-time Olympic gold medalist, all in individual events. In 1976, at age 14, Comăneci was the first gymnast to be awarded a perfect score of 10.0 at the Olympic Games. At the same Games (1976 Summer Olympics in Montreal), she earned six more perfect 10s for events en route to winning three \n[…]\nNadia Elena Comăneci was born on November 12, 1961, in Onești, a small town in the Carpathian Mountains, in Bacău County, Romania, in the historical region of Western Moldavia. She was born to Gheorghe (1936–2012) and Ștefania Comăneci, and has a younger brother named Adrian. Her parents separated in the 1970s and her father later moved to Bucharest, the capital. Nadia and Adrian were raised in the Romanian Orthodox Church.\n[…]\nComăneci later wrote in her memoir:\n[…]\nNadia Comăneci at World Gymnastics\n[…]\nNadia Comăneci at the International Gymnastics Hall of Fame\n[…]\nNadia Comăneci at Olympics.com\n[…]\nNadia Comăneci at Olympedia\n[…]\nNadia Comăneci at the Comitetul Olimpic și Sportiv Român (in Romanian) (archive)\n[…]\nNadia Comăneci at IMDb\n[…]\nVoices of Oklahoma interview with Bart Conner – First person interview conducted on February 28, 2013, with Bart Conner, husband of Nadia Comăneci.\n[…]\nNadia Comăneci makes history at the Montreal 1976 Olympics – The Olympic Channel, 2010\n[…]\nNadia Comăneci – First Olympics Perfect 10 (Uneven Bars) – Montreal 1976 Olympics – The Olympic Channel, 2015\n[…]\nNadia Comăneci – Selections from all of her routines – Montreal 1976 Olympics (overview) – The Olympic Channel, 2012\n[…]\nNadia Comaneci & Bart Conner Commentate on Their Perfect Olympic Routines | Take the Mic – The Olympic Channel, 2016\n[…]\nNadia Comaneci and Bart Conner, 11 Olympic Medals in this Olympic Family – The Olympic Channel, 2016\n[…]\nNadia Comaneci receives Lifetime Achievement Award from Simone Biles at Laureus Awards – NBC Sports, 2026"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Nadia_Com%C4%83neci",
        "situacao": "ok",
        "texto": "Nadia Elena Comăneci (Onești, 12 de novembro de 1961) é uma ex-ginasta romena, que disputou a modalidade artística e é ainda hoje tida como um ídolo mundial esportivo.\n[…]\nContudo, não se passou muito e logo percebeu-se a fragilidade dos placares: como um dez perfeito nunca havia sido atingido antes, não foram programados para registrar tal marca. Assim, pela primeira vez na história olímpica, uma ginasta recebia o chamado 'dez perfeito'. No dia seguinte, durante a final por equipes, Nadia atingiu suas segunda e terceira notas dez ao executar o seu exercício na trave de equilíbrio e, novamente, nas barras assimétricas.\n[…]\nHoje, este feito, mediante as novas regras estabelecidas pela Federação Internacional de Ginástica, tornou-se inviável de ser alcançado, pois a idade mínima — antes sendo de catorze anos — subiu para dezesseis e o dez perfeito foi dividido em notas A (de partida, chamada nota D de dificuldade) e B (de execução, chamada nota E).\n[…]\nNas finais por aparelhos, a ginasta disputou três dos quatro. Apenas nas barras assimétricas, aparato que lhe rendeu a primeira nota dez olímpica, não disputou medalha, tendo encerrado na vigésima posição. No salto sobre o cavalo, em disputa vencida por Natalia Shaposhnikova, Comăneci encerrou na quinta colocação, com o total de 19,350.\n[…]\nEntre os dias 20 e 22 de fevereiro de 2009, em Oklahoma, fora realizado o primeiro Torneio Internacional Nadia Comăneci, uma outra homenagem dada à ex-atleta: o evento, que não conta com a ginástica artística masculina, foi coletivamente conquistado pela equipe romena e teve como campeã do concurso geral a também romena Sandra Izbasa.\n[…]\nFederação Internacional de Ginástica",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Jim Thorpe",
      "descricao": "Atleta americano, campeão do pentatlo e do decatlo nos Jogos de Estocolmo 1912."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Campeão do pentatlo e do decatlo em 1912, o americano Jim Thorpe teve as medalhas retiradas no ano seguinte. Por quê?",
    "resposta": "Tinha jogado beisebol sendo pago",
    "fonte": [
      "https://en.wikipedia.org/wiki/Jim_Thorpe"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Jim_Thorpe",
        "situacao": "ok",
        "texto": "James Francis Thorpe (Meskwaki: Wa-Tho-Huk; May 22 or 28, 1887 – March 28, 1953) was an American athlete who won Olympic gold medals and played professional football, baseball, and basketball. A citizen of the Sac and Fox Nation, he was the first Native American to win a gold medal for the United States in the Olympics.\n[…]\nThorpe was a third-team All-American in 1908 and a first-team All-American in 1911 and 1912. Football was – and remained – Thorpe's favorite sport. He did not compete in track and field in 1910 or 1911, although this turned out to be the sport in which he gained his greatest fame.\n[…]\nIn 1910, Thorpe had the unusual status of a sought-after free agent at the major league level during the era of the reserve clause, because the minor league team that last held his contract had disbanded that year, so he was free to choose which baseball team to play for. In January 1913, he turned down a starting position with the St. Louis Browns, then at the bottom of the American League. Thorpe signed with the New York Giants baseball club in 1913, the defending 1912 National League champion.\n[…]\nBS All-American team (1912)\n[…]\nMDJ first-team All-American (1912)\n[…]\nIn July 2020, a petition from Bright Path Strong began circulating that called upon the IOC to reinstate Thorpe as the sole winner in his events in the 1912 Olympics. It was backed by Pictureworks Entertainment, which is making a film about Thorpe. The petition was supported by another Native American Olympian, Billy Mills, who won a gold medal in the 10,000 meters at the 1964 Tokyo Games.\n[…]\nMallon, Bill; Widlund, Ture (2002). \"In the Matter of Jacobus Franciscus Thorpe\". The 1912 Olympic Games: results for all competitors in all events, with commentary. Results of the early modern Olympics. Jefferson, N.C: McFarland & Company. ISBN 978-0-7864-1047-7."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jim_Thorpe",
        "situacao": "ok",
        "texto": "Jacobus Franciscus Thorpe, conhecido como Jim Thorpe (Prague, 28 de maio de 1887 – Lomita, 28 de março de 1953), foi um atleta norte-americano da primeira metade do Século XX.\n[…]\nFoi um dos atletas mais versáteis do século XX; praticava basquete, handebol, hóquei, arco e flecha, tiro, natação, canoagem, tênis, squash, hipismo, futebol americano e beisebol, tendo sido considerado um dos maiores desportistas do século.\n[…]\nNo período de 1909 e 1910, Thorpe embolsava cerca de 25 dólares semanais para disputar partidas de beisebol, à época semiprofissional. Ele utilizava o seu nome verdadeiro, indo em sentido contrário ao de outros atletas da época que se valiam do subterfúgio da utilização de pseudônimos para que não deixassem de disputar competições como atletas amadores, como as Olimpíadas.\n[…]\nTornou-se campeão olímpico do pentatlo e decatlo em 1912, foi recebido com festa em seu país, desfilando em carro aberto pela Broadway. Entretanto, por receber dinheiro pelas disputas das partidas no beisebol, foi considerado um atleta à época como profissional, algo proibido entre os atletas olímpicos, essencialmente amadores, fato que culminou com a perda de suas medalhas. Na sequência, Thorpe acaba por assinar um contrato de cinco mil dólares para tornar-se a maior estrela do New York Giants.\n[…]\nSomente em julho de 2022 o COI restabeleceu as conquistas de Thorpe, passando a ser considerado oficialmente o único vencedor das provas de pentatlo e decatlo em Estocolmo.\n[…]\nExiste uma localidade denominada Jim Thorpe no estado da Pensilvânia em homenagem ao atleta.\n[…]\n«Jim Thorpe Association» (em inglês) (em inglês)\n[…]\nJim Thorpe's U.S. Olympic Team bio(em inglês)\n[…]\nJim Thorpe no IMDB",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Boicote aos Jogos de Moscou 1980",
      "descricao": "Boicote liderado pelos Estados Unidos aos Jogos Olímpicos de Verão de 1980, em Moscou."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Os Estados Unidos e dezenas de países boicotaram os Jogos de Moscou 1980 em protesto contra a invasão soviética de que país?",
    "resposta": "Afeganistão",
    "distratores": [
      "Polônia",
      "Tchecoslováquia",
      "Hungria"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/1980_Summer_Olympics_boycott"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/1980_Summer_Olympics_boycott",
        "situacao": "ok",
        "texto": "The United States led a boycott of the 1980 Summer Olympics, held in Moscow, to protest against the Soviet invasion of Afghanistan. More than 60 countries joined the boycott to varying degrees, affecting athletes, fans, and international relations. The absence of so many competitors changed the outcomes of some events, led to alternative competitions, and provoked a retaliatory boycott by the Sovi\n[…]\nThe Western governments first considered boycotting the Moscow 1980 Summer Olympics after the Soviet invasion of Afghanistan, discussing it at a December 20, 1979, NATO meeting. Earlier in the mid-1970s, human rights groups had proposed Olympic boycotts to pressure the Soviet Union over human rights violations, but interest was limited. The idea gained traction when Soviet dissident Andrei Sakharov called for a boycott in early January 1980.\n[…]\nThe boycott of the 1980 Summer Olympics occurred against the background of heightened Cold War tensions following the Soviet invasion of Afghanistan in December 1979. The United States government stated that participation in the Moscow Games conflicted with international opposition to the Soviet military intervention. President Jimmy Carter linked the question of Olympic participation to the U.S. response to the invasion of Afghanistan.\n[…]\nThe governments of the United Kingdom, France, and Australia supported the boycott, but left any final decision over the participation of their country's athletes to their respective NOCs and the decision of their individual athletes. The United Kingdom and France sent a much smaller athletic delegation than would have originally been possible. The British associations that governed equestrian sports, hockey, shooting and yachting completely boycotted the 1980 Summer Olympics.\n[…]\nSome nations competed under the flag of their National Olympic Committee:\n[…]\n1984 Summer Olympics boycott\n[…]\nList of Olympic Games boycotts"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Boicote_aos_Jogos_Ol%C3%ADmpicos_de_Ver%C3%A3o_de_1980",
        "situacao": "ok",
        "texto": "O boicote aos Jogos Olímpicos de Verão de 1980, realizados em Moscou, na União Soviética, fez parte de um conjunto de ações das nações ocidentais destinadas a protestar contra a invasão soviética do Afeganistão ocorrida um ano antes.\n[…]\nO boicote foi liderado pelos Estados Unidos da América e seguido por mais de sessenta países.\n[…]\nAlgumas das nações que se incluíam do boicote permitiram que suas delegações disputassem os jogos, porém não permitiram fazê-lo sob a bandeira nacional do respectivo país, mas sim abaixo da bandeira olímpica, com o símbolo olímpico dos cinco continentes sobre a bandeira.\n[…]\nNo discurso de abertura dos jogos, o presidente soviético, Leonid Brezhnev, lamentou a interferência de interesses políticos no esporte, e no painel de espelhos, apresentou-se uma mensagem de paz.\n[…]\nTodos os países do bloco socialista, no entanto, estiveram presentes, assim como, ironicamente, o próprio Afeganistão, além de muitos países do continente africano, que haviam boicotado os Jogos Olímpicos de Verão de 1976, em Montreal, Canadá, no evento anterior.\n[…]\nA presença da delegação do Afeganistão nos jogos foi motivo de críticas e deboche por parte dos soviéticos, que condenaram o boicote do ocidente como não justificado.\n[…]\nAinda na cerimônia de encerramento, a tradição de se reproduzir o hino nacional do país que sediaria os jogos seguintes não foi rompida nestes jogos, uma versão curta, porém bem executada, do hino nacional dos Estados Unidos da América foi reproduzida, o que também aconteceu com o hino soviético no encerramento da olimpíada anterior, no Canadá.\n[…]\nBoicote aos Jogos Olímpicos de Inverno de 2022\n[…]\nHistory of the Olympics\n[…]\n1980 Moscow Olympic Games\n[…]\nE. Britannica 1980, Moscow - Olympic Games\n[…]\nMoscow Olympic Games Boycott",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Saudação do Black Power em 1968",
      "descricao": "Protesto de Tommie Smith e John Carlos no pódio dos 200 metros dos Jogos da Cidade do México 1968."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "No famoso protesto do pódio de 1968, por que Tommie Smith e John Carlos subiram sem sapatos, só de meias pretas?",
    "resposta": "Para simbolizar a pobreza dos negros",
    "fonte": [
      "https://en.wikipedia.org/wiki/1968_Olympics_Black_Power_salute"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/1968_Olympics_Black_Power_salute",
        "situacao": "ok",
        "texto": "During their medal ceremony in the Olympic Stadium in Mexico City on October 16, 1968, two African-American athletes, Tommie Smith and John Carlos, each raised a black-gloved fist during the playing of the US national anthem, \"The Star-Spangled Banner\". While on the podium, Smith and Carlos, who had won gold and bronze medals respectively in the 200-meter running event of the 1968 Summer Olympics,\n[…]\nBoth US athletes intended to bring black gloves to the event, but Carlos forgot his, leaving them in the Olympic Village. It was Peter Norman who suggested Carlos wear Smith's left-handed glove. For this reason, Carlos raised his left hand as opposed to his right, differing from the traditional Black Power salute. When \"The Star-Spangled Banner\" played, Smith and Carlos delivered the salute with heads bowed, a gesture which became front-page news around the world.\n[…]\nIn a 2011 speech to the University of Guelph, Akaash Maharaj, a member of the Canadian Olympic Committee and head of Canada's Olympic equestrian team, said, \"In that moment, Tommie Smith, Peter Norman, and John Carlos became the living embodiments of Olympic idealism. Ever since, they have been inspirations to generations of athletes like myself, who can only aspire to their example of putting principle before personal interest.\n[…]\nIn 2005, San Jose State University honored former students Smith and Carlos with a 22-foot-high (6.7 m)  statue of their protest titled Victory Salute, created by artist Rigo 23. A student, Erik Grotz, initiated the project; \"One of my professors was talking about unsung heroes and he mentioned Tommie Smith and John Carlos.\n[…]\nThe song \"Shivers\" by Peter Perrett, best known as the frontman of The Only Ones, features the lines \"The torch of liberty, Tommie Smith's black glove\".\n[…]\n1972 Olympics Black Power salute\n[…]\n\"This was my decision\" (Tommie Smith talks about his silent protest, August 8, 2008)"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Saudação do Black Power em 1968",
      "descricao": "Protesto de Tommie Smith e John Carlos no pódio dos 200 metros dos Jogos da Cidade do México 1968."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No pódio dos duzentos metros de 1968, dois americanos ergueram o punho com luva preta. Quem era o australiano medalha de prata ao lado deles?",
    "resposta": "Peter Norman",
    "fonte": [
      "https://en.wikipedia.org/wiki/Peter_Norman",
      "https://en.wikipedia.org/wiki/1968_Olympics_Black_Power_salute"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Peter_Norman",
        "situacao": "ok",
        "texto": "Peter George Norman (15 June 1942 – 3 October 2006) was an Australian track athlete. He won the silver medal in the 200 metres at the 1968 Summer Olympics in Mexico City, with a time of 20.06 seconds, which remained the Oceania 200 m record for more than 56 years. He was a five-time national 200-metre champion.\n[…]\nVarious commentary has claimed that, after the 1968 Olympics, Norman's career suffered greatly, e.g., a 2012 CNN profile said that \"he returned home to Australia a pariah, suffering unofficial sanction and ridicule as the Black Power salute's forgotten man. He never ran in the Olympics again.\" Norman represented Australia at the smaller-scale 1969 Pacific Conference Games in Tokyo, winning the gold medal over 200 metres, and the 1970 Commonwealth Games in Edinburgh before finishing his career.\n[…]\nFor his involvement as an ally in the 1968 Olympics Black Power salute protest, Norman has appeared in many works of public art, as well as movies on the subject.\n[…]\n(1) recognises the extraordinary athletic achievements of the late Peter Norman, who won the silver medal in the 200 metres sprint running event at the 1968 Mexico City Olympics, in a time of 20.06 seconds, which still stands as the Australian record;(2) acknowledges the bravery of Peter Norman in donning an Olympic Project for Human Rights badge on the podium, in solidarity with African-American athletes Tommie Smith and John Carlos, who gave the 'black power' salute;(3) apologises to Peter Norman for the treatment he received upon his return to Australia, and the failure to fully recognise his inspirational role before his untimely death in 2006; and (4) belatedly recognises the powerful role that Peter Norman played in furthering racial equality.\n[…]\nPeter Norman at the Australian Olympic Committee\n[…]\nPeter Norman at IMDb"
      },
      {
        "url": "https://en.wikipedia.org/wiki/1968_Olympics_Black_Power_salute",
        "situacao": "ok",
        "texto": "During their medal ceremony in the Olympic Stadium in Mexico City on October 16, 1968, two African-American athletes, Tommie Smith and John Carlos, each raised a black-gloved fist during the playing of the US national anthem, \"The Star-Spangled Banner\". While on the podium, Smith and Carlos, who had won gold and bronze medals respectively in the 200-meter running event of the 1968 Summer Olympics,\n[…]\nIn addition, Smith, Carlos, and Australian silver medalist Peter Norman all wore human-rights badges on their jackets.\n[…]\nOn the morning of October 16, 1968, US athlete Tommie Smith won the 200-meter race with a world-record time of 19.83 seconds. Australia's Peter Norman finished second with a time of 20.06 seconds (an Oceania record that stood for 56 years), and the US's John Carlos finished in third place with a time of 20.10 seconds. After the race was completed, the three went to the podium for their medals to be presented by David Cecil, 6th Marquess of Exeter.\n[…]\nBoth US athletes intended to bring black gloves to the event, but Carlos forgot his, leaving them in the Olympic Village. It was Peter Norman who suggested Carlos wear Smith's left-handed glove. For this reason, Carlos raised his left hand as opposed to his right, differing from the traditional Black Power salute. When \"The Star-Spangled Banner\" played, Smith and Carlos delivered the salute with heads bowed, a gesture which became front-page news around the world.\n[…]\nThe 2008 Sydney Film Festival featured a documentary about the protest entitled Salute. The film was written, directed, and produced by Matt Norman, a nephew of Peter Norman.\n[…]\n1972 Olympics Black Power salute\n[…]\nU.S. national anthem protests\n[…]\n\"Matt Norman, Director/Producer 'Salute'\" Archived August 7, 2011, at the Wayback Machine (podcast: nephew of Peter Norman discusses new documentary about Norman's role in the Black Power salute)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Peter_Norman",
        "situacao": "ok",
        "texto": "Peter George Norman (Melbourne, 15 de junho de 1942 – Melbourne, 3 de outubro de 2006) foi um atleta australiano. Ele ganhou a medalha de prata nos 200 metros rasos dos Jogos Olímpicos de Verão de 1968 na Cidade do México, com um tempo de 20,06 segundos, sendo o recorde australiano na modalidade até hoje. Ele foi pentacampeão australiano também na modalidade.\n[…]\nO sobrinho de Peter Matt Norman dirigiu e produziu o documentário Salute (2008) sobre os três corredores pela Paramount Pictures e pela Transmission Films. Paul Byrnes, em uma crítica para o Sydney Morning Herald, disse que o filme deixa claro o porquê de Peter ter se juntado a seus colegas. Ele escreveu que \"ele era um cristão devoto, criado no Exército da Salvação [e] acreditava apaixonadamente em igualdade para todos, independentemente de cor, credo ou religião—o código olímpico\".\n[…]\nAssociated Press (4 de outubro de 2006). «Peter Norman; Australian Medalist in '68 Games». Washington Post. Consultado em 22 de outubro de 2013\n[…]\nCarlos, John; Eastley, Tony (21 de agosto de 2012). «John Carlos: No Australian finer than Peter Norman». Australian Broadcasting Corporation. Consultado em 22 de outubro de 2013\n[…]\nFlanagan, Martin (10 de outubro de 2006). «Tell Your Kids About Peter Norman». The Age. Consultado em 28 de julho de 2014\n[…]\nHurst, Mike (8 de outubro de 2006). «Peter Norman's Olympic statement». The Courier-Mail. Consultado em 22 de outubro de 2013\n[…]\nJohnstone, Damian; Norman, Matt T. (2008). A Race to Remember: The Peter Norman Story 2008 ed. [S.l.]: JoJo Publishing. ISBN 9780980495027  - Total pages: 320\n[…]\nWhiteman, Hilary (21 de agosto de 2012). «Apology urged for Australian Olympian in 1968 black power protest». CNN. Consultado em 22 de outubro de 2013\n[…]\nPeter Norman – Athletics Australia Hall of Fame\n[…]\nPeter Norman – Sport Australia Hall of Fame\n[…]\nPeter Norman no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Eric Liddell",
      "descricao": "Velocista escocês, campeão dos 400 metros nos Jogos de Paris 1924."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em Paris 1924, por que o escocês Eric Liddell se recusou a correr as eliminatórias dos cem metros, sua prova favorita?",
    "resposta": "Eram num domingo, dia sagrado para ele",
    "fonte": [
      "https://en.wikipedia.org/wiki/Eric_Liddell"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Eric_Liddell",
        "situacao": "ok",
        "texto": "Eric Henry Liddell (; 16 January 1902 – 21 February 1945) was a Scottish sprinter, rugby player and a Christian missionary. Born in Tianjin, China to Scottish missionary parents, he attended a boarding school near London, spending time when possible with his family in Edinburgh, and afterwards attended the University of Edinburgh.\n[…]\nWhen Scotsman Allan Wells won the 100-metre sprint at the 1980 Moscow Olympics, 56 years after the 1924 Paris Olympics, he was asked if he had run the race for Harold Abrahams, the last 100-metre Olympic winner from Britain (who had died two years previously). \"No\", Wells replied. \"I would prefer to dedicate this to Eric Liddell\".\n[…]\nIn 2023 the Eric Liddell Gym, a fitness centre at the University of Edinburgh, was opened and in 2024 the University awarded Liddell a posthumous honorary doctorate to mark the 100th anniversary of his success at the Paris Olympics. The award ceremony took place in the same hall from which Liddell graduated in 1924.\n[…]\nThe 1981 film Chariots of Fire chronicles and contrasts the lives and viewpoints of Liddell and Harold Abrahams. One inaccuracy surrounds Liddell's refusal to race in the 100-metre event at the 1924 Paris Summer Olympics. The film portrays Liddell as finding out that one of the heats was to be held on a Sunday as he boards the boat that will take the British Olympic team across the English Channel to Paris.\n[…]\nWhen he appeared in the heats of the 400 m at Paris in 1924, his huge sprawling stride, his head thrown back and his arms clawing the air, moved the Americans and other sophisticated experts to ribald laughter.\" Rival Harold Abrahams said in response to criticism of Liddell's style: \"People may shout their heads off about his appalling style. Well, let them. He gets there.\"\n[…]\nEric Liddell at Olympics.com\n[…]\nEric Liddell at Olympedia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Eric_Liddell",
        "situacao": "ok",
        "texto": "Eric Henry Liddell (Tianjin, 16 de janeiro de 1902 — Weifang, 21 de fevereiro de 1945) foi um atleta e missionário presbiteriano escocês radicado com sua família na China, onde nasceu e morreu.\n[…]\nSelecionado para competir nos 100 e 200 metros pela seleção da Grã-Bretanha nos Jogos de Paris, Liddell chocou o mundo do desporto quando anunciou a sua desistência na prova do hectómetro, por motivos religiosos: as eliminatórias deveriam ser disputadas no dia 6 de julho, um domingo, o que Liddell de imediato recusou. Substituiu então essa prova pela dos 400 metros, onde viria a obter a medalha de ouro com o tempo de 47,6 segundos, à época recorde mundial.\n[…]\nEm 2002, quando os primeiros atletas foram introduzidos no Hall da Fama do Esporte Escocês, Eric Liddell liderou a votação do público para o herói esportivo mais popular que a Escócia já produziu. Liddell foi introduzido no Hall da Fama do Rúgbi Escocês em janeiro de 2022, no centenário de sua primeira internacionalização.\n[…]\nEm 2012, a Universidade de Edimburgo lançou uma bolsa de estudos para esportes de alto desempenho com o nome de Liddell. Foi anunciado durante uma visita de Patricia Russell, a filha mais velha de Liddell. Em 2023, o Eric Liddell Gym, um centro de fitness da Universidade de Edimburgo, foi inaugurado e, em 2024, a Universidade concedeu a Liddell um doutorado honorário póstumo para marcar o 100º aniversário de seu sucesso nas Olimpíadas de Paris.\n[…]\nA cerimônia de premiação ocorreu no mesmo salão onde Liddell se formou em 1924.\n[…]\nEm 2024, uma trilha no Bruntsfield Links foi renomeada para Eric Liddell Way em homenagem ao atleta.\n[…]\nThe Eric Liddell Centre (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Eric Liddell",
      "descricao": "Velocista escocês, campeão dos 400 metros nos Jogos de Paris 1924."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "A trajetória do escocês Eric Liddell, campeão dos quatrocentos metros em Paris 1924, inspirou que filme vencedor do Oscar de melhor filme?",
    "resposta": "Carruagens de Fogo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Eric_Liddell",
      "https://en.wikipedia.org/wiki/Chariots_of_Fire"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Eric_Liddell",
        "situacao": "ok",
        "texto": "Eric Henry Liddell (; 16 January 1902 – 21 February 1945) was a Scottish sprinter, rugby player and a Christian missionary. Born in Tianjin, China to Scottish missionary parents, he attended a boarding school near London, spending time when possible with his family in Edinburgh, and afterwards attended the University of Edinburgh.\n[…]\nWhen Scotsman Allan Wells won the 100-metre sprint at the 1980 Moscow Olympics, 56 years after the 1924 Paris Olympics, he was asked if he had run the race for Harold Abrahams, the last 100-metre Olympic winner from Britain (who had died two years previously). \"No\", Wells replied. \"I would prefer to dedicate this to Eric Liddell\".\n[…]\nIn 2023 the Eric Liddell Gym, a fitness centre at the University of Edinburgh, was opened and in 2024 the University awarded Liddell a posthumous honorary doctorate to mark the 100th anniversary of his success at the Paris Olympics. The award ceremony took place in the same hall from which Liddell graduated in 1924.\n[…]\nThe 1981 film Chariots of Fire chronicles and contrasts the lives and viewpoints of Liddell and Harold Abrahams. One inaccuracy surrounds Liddell's refusal to race in the 100-metre event at the 1924 Paris Summer Olympics. The film portrays Liddell as finding out that one of the heats was to be held on a Sunday as he boards the boat that will take the British Olympic team across the English Channel to Paris.\n[…]\nWhen he appeared in the heats of the 400 m at Paris in 1924, his huge sprawling stride, his head thrown back and his arms clawing the air, moved the Americans and other sophisticated experts to ribald laughter.\" Rival Harold Abrahams said in response to criticism of Liddell's style: \"People may shout their heads off about his appalling style. Well, let them. He gets there.\"\n[…]\nEric Liddell at Olympics.com\n[…]\nEric Liddell at Olympedia"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Chariots_of_Fire",
        "situacao": "ok",
        "texto": "Chariots of Fire is a 1981 historical sports drama film directed by Hugh Hudson, written by Colin Welland and produced by David Puttnam. It is based on the true story of two British athletes in the 1924 Olympics: Eric Liddell, a devout Scottish Christian who runs for the glory of God, and Harold Abrahams, an English Jew who runs to overcome prejudice.\n[…]\nWelland's original script also featured, in addition to Eric Liddell and Harold Abrahams, a third protagonist, 1924 Olympic gold medallist Douglas Lowe, who was presented as a privileged aristocratic athlete. However, Lowe refused to have anything to do with the film, and his character was written out and replaced by the fictional character of Lord Andrew Lindsay.\n[…]\nIan Charleson wrote Eric Liddell's speech to the post-race workingmen's crowd at the Scotland v. Ireland races. Charleson, who had studied the Bible intensively in preparation for the role, told director Hugh Hudson that he didn't feel the portentous and sanctimonious scripted speech was either authentic or inspiring. Hudson and Welland allowed him to write words he personally found inspirational instead.\n[…]\nJackson Scholz is depicted as handing Liddell an inspirational Bible-quotation message before the 400 metres final: \"It says in the Old Book, 'He that honors me, I will honor.' Good luck.\" In reality, the note was from members of the British team, and was handed to Liddell before the race by his attending masseur at the team's Paris hotel.\n[…]\nAnother play, Running for Glory, written by Philip Dart, based on the 1924 Olympics, and focusing on Abrahams and Liddell, toured parts of Britain from 25 February to 1 April 2012. It starred Nicholas Jacobs as Harold Abrahams and Tom Micklem as Eric Liddell.\n[…]\nChariots of Fire, a race, inspired by the film, held in Cambridge since 1991\n[…]\nGreat Britain at the 1924 Summer Olympics"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Eric_Liddell",
        "situacao": "ok",
        "texto": "Eric Henry Liddell (Tianjin, 16 de janeiro de 1902 — Weifang, 21 de fevereiro de 1945) foi um atleta e missionário presbiteriano escocês radicado com sua família na China, onde nasceu e morreu.\n[…]\nA vida de Eric Liddell, tal como a de Harold Abrahams, foi imortalizada no grande écran em Chariots of Fire (Momentos de Glória em Portugal, Carruagens de Fogo no Brasil), Óscar para o melhor filme de 1981.\n[…]\nArrecadou também, nesses Jogos, uma medalha de bronze nos 200 metros.\n[…]\nO Centro Eric Liddell foi criado em Edimburgo em 1980 para homenagear as crenças de Liddell no serviço comunitário enquanto viveu e estudou em Edimburgo. Os moradores locais dedicaram-se a inspirar, capacitar e apoiar pessoas de todas as idades, culturas e habilidades, como uma expressão de valores cristãos compassivos. O centro esportivo do Eltham College foi nomeado \"Eric Liddell Sports Centre\" em sua memória.\n[…]\nEm 2002, quando os primeiros atletas foram introduzidos no Hall da Fama do Esporte Escocês, Eric Liddell liderou a votação do público para o herói esportivo mais popular que a Escócia já produziu. Liddell foi introduzido no Hall da Fama do Rúgbi Escocês em janeiro de 2022, no centenário de sua primeira internacionalização.\n[…]\nEm 2012, a Universidade de Edimburgo lançou uma bolsa de estudos para esportes de alto desempenho com o nome de Liddell. Foi anunciado durante uma visita de Patricia Russell, a filha mais velha de Liddell. Em 2023, o Eric Liddell Gym, um centro de fitness da Universidade de Edimburgo, foi inaugurado e, em 2024, a Universidade concedeu a Liddell um doutorado honorário póstumo para marcar o 100º aniversário de seu sucesso nas Olimpíadas de Paris.\n[…]\nThe Eric Liddell Centre (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Maratona",
      "descricao": "Corrida de longa distância do atletismo, com percurso oficial de 42,195 quilômetros."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Segundo a explicação mais repetida, por que a maratona de Londres 1908 ganhou o percurso de quarenta e dois quilômetros e cento e noventa e cinco metros?",
    "resposta": "Largar em Windsor e chegar ao camarote real",
    "fonte": [
      "https://en.wikipedia.org/wiki/Marathon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Marathon",
        "situacao": "ok",
        "texto": "The marathon is a long-distance foot race with a distance of 42.195 kilometres (c. 26.22 mi), usually run as a road race, but the distance can be covered on trail routes. The marathon can be completed by running or with a run/walk strategy. There are also wheelchair divisions. More than 800 marathons are held worldwide each year, with the vast majority of competitors being recreational athletes, a\n[…]\nThe Boston Marathon began on 19 April 1897 and was inspired by the success of the first marathon competition in the 1896 Summer Olympics. It is the world's oldest annual marathon and ranks as one of the world's most prestigious road racing events. Its course runs from Hopkinton in southern Middlesex County to Boylston Street in Boston. Johnny Hayes' victory at the 1908 Summer Olympics also contributed to the early growth of long-distance running and marathoning in the United States.\n[…]\nLater that year, races around the holiday season including the Empire City Marathon held on New Year's Day 1909 in Yonkers, New York, marked the early running craze referred to as \"marathon mania\". Following the 1908 Olympics, the first five amateur marathons in New York City were held on days that held special meanings: Thanksgiving Day, the day after Christmas, New Year's Day, Washington's Birthday, and Lincoln's Birthday.\n[…]\nThe International Olympic Committee agreed in 1907 that the distance for the 1908 London Olympic marathon would be about 25 miles or 40 kilometers. The organizers decided on a course of 26 miles from the start at Windsor Castle to the royal entrance to the White City Stadium, followed by a lap (586 yards 2 feet; 536 m) of the track, finishing in front of the Royal Box.\n[…]\nThe modern 42.195 km (26.219 mi) standard distance for the marathon was set by the International Amateur Athletic Federation (IAAF) in May 1921 directly from the length used at the 1908 Summer Olympics in London."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Maratona",
        "situacao": "ok",
        "texto": "Maratona é uma corrida realizada na distância oficial de 42,195 km, normalmente em ruas e estradas. Única modalidade esportiva que se originou de uma lenda, seu nome foi instituído como uma homenagem à antiga lenda grega do soldado ateniense Fidípides, um mensageiro do exército de Atenas, que teria corrido 42 km entre o campo de batalha de Maratona até Atenas para anunciar aos cidadãos da cidade a\n[…]\nCom a largada marcada para ser em frente ao Castelo de Windsor e a linha de chegada em frente ao camarote real no Estádio Olímpico de White City, depois de uma volta inteira na pista de atletismo, o percurso inteiro mediu exatos 42,195 km. Disputada pela primeira vez nesta distância em Londres, acabou sendo assim oficializada em maio de 1921, pela Federação Internacional de Atletismo.\n[…]\nOficialmente, a IAAF reconhece a inglesa Violet Piercy como tal, que com sua marca extra-oficial de 3:40:22 na Polytechnic Marathon, entre Londres e Windsor, na Inglaterra de 1926, seria a primeira recordista mundial da distância para mulheres. Antes do reconhecimento da maratona como prova olímpica e prova oficial da IAAF, a norueguesa Grete Waitz quebrou por quatro vezes o recorde mundial.\n[…]\nA Maratona de Londres é disputada em dois hemisférios, ocidental e oriental, pois a cidade é cruzada pelo Meridiano de Greenwich, e o percurso da Detroit Free Press Marathon, nos Estados Unidos, cruza por duas vezes a fronteira entre o Canadá e os Estados Unidos.\n[…]\nA 100.ª Maratona de Boston, em 1996, teve mais de 38 mil inscritos, então um recorde mundial.\n[…]\nNormalmente, o tempo máximo de duração de uma maratona de massas é de seis horas, após o qual o percurso é fechado aos corredores e aberto ao tráfego normal e os tempos dos corredores restantes deixam de ser oficialmente marcados. Em algumas delas, pode chegar a oito horas.\n[…]\nRaid - A versão da maratona para remadores\n[…]\nMarathon42K — Maratona Ranking & Calendário",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Usain Bolt",
      "descricao": "Velocista jamaicano, recordista mundial dos 100 e 200 metros."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Por que Usain Bolt perdeu, anos depois, a medalha de ouro do revezamento quatro por cem de Pequim 2008?",
    "resposta": "Doping do colega Nesta Carter",
    "fonte": [
      "https://en.wikipedia.org/wiki/Usain_Bolt"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Usain_Bolt",
        "situacao": "ok",
        "texto": "Usain St. Leo Bolt ( YOO-sayn; born 21 August 1986) is a Jamaican retired sprinter. Widely regarded as the greatest sprinter of all time, he is an eight-time Olympic gold medalist and the world record holder in the 100 metres, 200 metres, and 4 × 100 metres relay.\n[…]\nBolt closed the championships with another gold with Jamaica in the 4 × 100 metres relay. Nesta Carter and Michael Frater joined world champions Bolt and Blake to set a world record time of 37.04 s.\n[…]\nWith that win, Bolt obtained the \"triple-triple\", three sprinting gold medals in three consecutive Olympics, and finished his Olympic career with a 100% win record in finals. However, in January 2017, Bolt was stripped of the 4 × 100 m relay gold from the Beijing Games in 2008 because his teammate Nesta Carter was found guilty of a doping violation.\n[…]\nIn 2017, the Jamaican team was stripped of the 2008 Olympics 4 × 100 metre title due to Nesta Carter's disqualification for doping offences. Bolt, who never failed a dope test, was quoted by the BBC saying that the prospect of having to return the gold was \"heartbreaking\". The banned substance in Carter's test was identified as methylhexanamine, a nasal decongestant sometimes used in dietary supplements.\n[…]\nBolt has been on three world-record-setting Jamaican relay teams. The first record, 37.10 seconds, was set in winning gold at the 2008 Summer Olympics, although the result was voided in 2017 when the team was disqualified due to his team member Nesta Carter's urine sample being retested and found positive for the prohibited substance methylhexaneamine. The second record came at the 2011 World Championships in Athletics, a time of 37.04 seconds.\n[…]\nAll of Usain Bolt's Olympic Games finals via the Olympic Channel on YouTube"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Usain_Bolt",
        "situacao": "ok",
        "texto": "Usain St. Leo Bolt OJ, OD, OLY (Trelawny, 21 de agosto de 1986) é um ex-velocista jamaicano multicampeão olímpico e mundial nessa modalidade. É o único atleta na história a tornar-se tricampeão em duas modalidades de pista em Jogos Olímpicos de forma consecutiva (100 metros rasos e 200 metros rasos) e bicampeão também de forma consecutiva na modalidade revezamento 4 x 100 metros. É também o único \n[…]\nNo último dia do atletismo, Bolt correu a terceira \"perna\" do revezamento 4x100 m junto com Asafa Powell, Nesta Carter e Michael Frater, e ganhou a terceira medalha de ouro com mais um recorde mundial — 37s10 — que pertencia aos norte-americanos desde Barcelona 1992. Depois das vitórias, ele doou US$ 50 mil dólares para as crianças de província de Sichuan, que haviam sofrido os efeitos do terremoto de Sichuan, ocorrido em maio de 2008.\n[…]\nQuase nove anos depois da prova, em janeiro de 2017, o COI fez uma reanálise das amostras de sangue de um dos atletas da equipe — Nesta Carter — e constatou a existência da substância proibida metilhexanamina. Isso causou uma reviravolta nos resultados, obrigando a equipe a devolver as medalhas de ouro conquistadas. Bolt devolveu a sua medalha dois dias depois do anúncio da desclassificação. Com a eliminação, o ouro passou a pertencer à equipe de Trinidad e Tobago.\n[…]\nNo último dia do atletismo, Bolt integrou o revezamento 4x100 m jamaicano, com Yohan Blake, Michael Frater e Nesta Carter, conquistando sua terceira medalha de ouro nos Jogos, repetindo Pequim, que quebrou o próprio recorde mundial em 36s84, o primeiro revezamento dos 100 m abaixo dos 37 segundos. Depois da prova, comemorou fazendo o \"Mobot\", a comemoração típica do campeão olímpico britânico dos 5 mil e 10 mil metros Mo Farah, em contraponto a seu \"raio\".\n[…]\nBolt Contra o Tempo\n[…]\nPerfil de Usain Bolt na Associação Internacional de Federações de Atletismo",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Desfile das nações",
      "descricao": "Entrada das delegações na cerimônia de abertura dos Jogos Olímpicos."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "No desfile das delegações na abertura dos Jogos Olímpicos, por que a Grécia tradicionalmente entra à frente de todas?",
    "resposta": "Por ser o berço dos Jogos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Parade_of_Nations"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Parade_of_Nations",
        "situacao": "ok",
        "texto": "The Olympic Games ceremonies have been held at the Olympic Games since they began in the ancient Olympics, including the opening, closing, and medal ceremonies. Their purpose is to introduce and conclude the competition, award successful competitors, and often celebrate the culture and history of the host country. The ceremonies are integral to the Games and symbolize the international cooperation\n[…]\nThe Olympic Charter determines that the opening ceremony must contain a protocol segment called the \"Parade of Nations\", during which most of the participating athletes march into the stadium, one delegation at a time. It is optional for athletes to participate in this parade. Because some Games events commonly start before the opening ceremony, any athletes competing in those early events may elect not to march with their team.\n[…]\nIn addition, national and regional issues led Spain to make an exception during the 1992 Summer Olympics in Barcelona, with consideration for the Catalan independence movement and concerns about the Spanish language gaining undue prominence over the Catalan language; all official announcements during the 1992 Games were initially made in French, followed by Spanish, Catalan, and English (with the order of these three languages interspersed); the order of teams in the Parade of Nations was based on the French names of the delegations.\n[…]\n\"On behalf of a proud, determined and grateful nation\", and then the standard formula followed.\n[…]\nThis blending of athletes, known as the \"parade of athletes\", is a tradition that began during the 1956 Summer Olympics at the suggestion of Melbourne schoolboy John Ian Wing; he thought that this parade would be a way to bring the athletes of the world together as \"one nation\". Before the 1956 Summer Games, no Olympic team had ever marched in the closing ceremony of the modern or ancient Games."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cerim%C3%B4nias_dos_Jogos_Ol%C3%ADmpicos",
        "situacao": "ok",
        "texto": "Nos Jogos Olímpicos, as cerimônias comemoram a abertura e o encerramento de uma celebração específica dos Jogos Olímpicos, e a atribuição de medalhas. Barão Pierre de Coubertin, um dos antepassados dos Jogos Modernos, queria o modelo de revitalização dos antigos Jogos Olímpicos. A visão de Coubertin era de criar um fórum não apenas, mas também para realização atlética e de expressão artística.\n[…]\nAlguns dos vários elementos das cerimônias voltam a ecoar os Jogos da Grécia Antiga a partir do qual as Olimpíadas modernas chamam a sua ascendência. Um exemplo disso é o destaque da Grécia, em ambos a abertura e encerramento. Durante os Jogos de 2004, os vencedores da medalha recebido uma coroa de ramos de oliveira, que era uma referência direta aos Jogos antigas, nas quais o prêmio do vencedor era uma coroa de ramos de oliveira.\n[…]\nA apresentação das Cerimônias de Abertura e de Encerramento continuam a aumentar o âmbito, a dimensão e os custos com cada celebração sucessiva dos Jogos, mas eles ainda estão mergulhados na tradição.\n[…]\nOs Jogos Antigos, realizados na Grécia de cerca de 776 a.C. a cerca de 393 d.C. fornecem os primeiros exemplos de cerimônias olímpicas. A celebração da vitória, cujos elementos estão em evidência nas cerimônias modernas de medalha e encerramento, muitas vezes envolvia festas elaboradas, bebidas, cantos e recitação de poesia. Quanto mais rico o vencedor, mais extravagante é a celebração.\n[…]\nHá evidências de mudanças dramáticas no formato dos Jogos Antigos ao longo dos quase 12 séculos em que foram celebrados. Eventualmente, por volta da 77ª Olimpíada, um programa padrão de 18 eventos foi estabelecido. Para abrir um jogo na Grécia antiga, os organizadores realizariam um Festival de Inauguração. Isso foi seguido por uma cerimônia em que os atletas fizeram um juramento de espírito esportivo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Jogos de Stoke Mandeville",
      "descricao": "Competição criada em 1948 num hospital inglês, considerada a origem dos Jogos Paralímpicos."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Os jogos criados em 1948 no hospital inglês de Stoke Mandeville, embrião das Paralimpíadas, tinham que objetivo?",
    "resposta": "Reabilitar veteranos de guerra com lesão medular",
    "fonte": [
      "https://en.wikipedia.org/wiki/Stoke_Mandeville_Games",
      "https://en.wikipedia.org/wiki/Ludwig_Guttmann"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Stoke_Mandeville_Games",
        "situacao": "ok",
        "texto": "The World Abilitysport Games (known as the IWAS World Games before 2023) are a parasports multi-sport event for athletes who use wheelchairs or are amputees.\n[…]\nOrganized by World Abilitysport (formerly IWAS), the Games are a successor to the original Stoke Mandeville Games founded in 1948 by Ludwig Guttmann, and specifically the International Stoke Mandeville Games—the first international sporting competition for athletes with disabilities which was held in 1952, itself an Olympic year, between British and Dutch athletes and which ultimately was the forerunner to the modern Paralympic Games.\n[…]\nThe event was first established in 1948 as the Stoke Mandeville Games by neurologist Ludwig Guttmann, who organized a sporting competition involving World War II veterans with spinal cord injuries at the Stoke Mandeville Hospital rehabilitation facility in Aylesbury, England, taking place concurrently with the first post-war Olympic Games in London.\n[…]\nThe inaugural competition, initially named \"Stoke Mandeville Games for the Paralyzed\" in 1948, was just named \"Stoke Mandeville Games\" the next year, before becoming the \"International Stoke Mandeville Games\" (ISMG) in 1952.\n[…]\nBeginning in 1960 during Summer Olympic years, the ISMG were held in the same host city as the Summer Olympics. These particular editions of the Games were retroactively recognised as being the first four Paralympic Games. The Games were otherwise hosted in Stoke Mandeville in all other years.\n[…]\nSummer Games Governance 1960 to 1992[link removed], IWAS\n[…]\n\"2012 – The Paralympics come home\", BBC, July 4, 2008. A look back at the origins of the Stoke Mandeville Games."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Ludwig_Guttmann",
        "situacao": "ok",
        "texto": "Sir Ludwig Guttmann  (3 July 1899 – 18 March 1980) was a German-British neurologist who established the Stoke Mandeville Games, the sporting event for people with disabilities (PWD) that evolved in England into the Paralympic Games. A Jewish doctor who fled Nazi Germany just before the start of the Second World War, Guttmann was a founding father of organized physical activities for people with di\n[…]\nGuttmann became a naturalised British citizen in 1945. He organised the first Stoke Mandeville Games for disabled war veterans, which was held at the hospital on 29 July 1948, the same day as the opening of the London Olympics. All participants had spinal cord injuries and competed in wheelchairs. In an effort to encourage his patients to take part in national events, Guttmann used the term Paraplegic Games.\n[…]\nGuttmann was appointed Officer of the Order of the British Empire (OBE) in the 1950 King's Birthday Honours, as \"Neurological Surgeon in charge of the Spinal Injuries Centre at the Ministry of Pensions Hospital, Stoke Mandeville\". On 28 June 1957, he was made an Associate Officer of the Venerable Order of Saint John.\n[…]\nStoke Mandeville Stadium, the National Centre for Disability Sport in the United Kingdom, was developed by him alongside the hospital. A specialist neurorehabilitation hospital in Barcelona, the Institut Guttmann, is named in his honour. In June 2012, a life-sized cast-bronze statue of Guttmann was unveiled at Stoke Mandeville Stadium as part of the run-up to the London 2012 Summer Paralympics and Olympic Games.\n[…]\nOn 3 July 2021, a Google Doodle of Guttmann was featured on the Google homepage for Guttmann's 122nd birthday. A statue of Guttman at the Stoke Mandeville Hospital was added to the Buckinghamshire's protected Local Heritage List in 2024.\n[…]\nRogan, Matt (2010). Britain and the Olympic Games: Past, Present, Legacy. Matador. ISBN 978-1-84876-575-7."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jogos_Mundiais_de_Cadeirantes_e_Amputados",
        "situacao": "ok",
        "texto": "Jogos Mundiais de Cadeirantes e Amputados, anteriormente conhecido como Stoke Mandeville Wheelchair Games, e World Wheelchair Games é um evento multiesportivo, uma competição de atletismo para atletas com deficiência múltipla.\n[…]\nOs jogos foram originalmente realizados em 1948 pelo neurologista Sir Ludwig Guttmann, que organizou uma competição esportiva envolvendo veteranos da Segunda Guerra Mundial com lesões da medula espinhal no Hospital Stoke Mandeville Hospital em Stoke Mandeville, Reino Unido, simultaneamente com os primeiros Jogos Olímpicos de Verão do pós-guerra, realizado em Londres.\n[…]\nEm 1952, os Países Baixos se juntaram no evento, criando a primeira competição internacional de esportes para portadores de deficiência. Em 1960, a nova edição dos Jogos Stoke Mandeville foram realizados em Roma, Itália, na sequência de Jogos Olímpicos daquele ano. Estes são considerados os primeiros Jogos Paraolímpicos da história.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Jogos de Stoke Mandeville",
      "descricao": "Competição criada em 1948 num hospital inglês, considerada a origem dos Jogos Paralímpicos."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que neurologista alemão, refugiado na Inglaterra, organizou em 1948 os jogos de Stoke Mandeville, embrião das Paralimpíadas?",
    "resposta": "Ludwig Guttmann",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ludwig_Guttmann"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ludwig_Guttmann",
        "situacao": "ok",
        "texto": "Sir Ludwig Guttmann  (3 July 1899 – 18 March 1980) was a German-British neurologist who established the Stoke Mandeville Games, the sporting event for people with disabilities (PWD) that evolved in England into the Paralympic Games. A Jewish doctor who fled Nazi Germany just before the start of the Second World War, Guttmann was a founding father of organized physical activities for people with di\n[…]\nGuttmann became a naturalised British citizen in 1945. He organised the first Stoke Mandeville Games for disabled war veterans, which was held at the hospital on 29 July 1948, the same day as the opening of the London Olympics. All participants had spinal cord injuries and competed in wheelchairs. In an effort to encourage his patients to take part in national events, Guttmann used the term Paraplegic Games.\n[…]\nGuttmann had a heart attack in October 1979, and died on 18 March 1980 at the age of 80. He is buried at the Bushey Jewish Cemetery, about 23 kilometres (14 mi) NW of London.\n[…]\nAfter the Games, it was moved to its permanent home at the National Spinal Injuries Centre. Guttmann's daughter, Eva Loeffler, was appointed the mayor of the London 2012 Paralympic Games athletes' village. The Sir Ludwig Guttmann Health and Wellbeing Centre is a health centre named in his honour in East Village, London, on the site of the 2012 Olympic and Paralympic village.\n[…]\nIn 2019 the National Paralympic Heritage Centre, a small accessible museum, was opened at Stoke Mandeville Stadium celebrating the birthplace of the Paralympics, sharing the collections of the early Paralympic Movement and the central role played by Professor Sir Ludwig Guttmann.\n[…]\nGoodman, Susan (1986). Spirit of Stoke Mandeville: The Story of Sir Ludwig Guttmann. London: Collins. ISBN 978-0-00-217341-4.\n[…]\nStory of Paralympics founder Sir Ludwig Guttmann – BBC News (video), 24 August 2012"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ludwig_Guttmann",
        "situacao": "ok",
        "texto": "Ludwig Guttmann (Toszek, 3 de julho de 1899 - 18 de março de 1980) foi um neurologista alemão que criou os Jogos Paraolímpicos e é um dos pioneiros no uso do esporte para reabilitação física de pessoas portadoras de deficiência.\n[…]\nEm 1952, mais de 130 competidores internacionais entraram nos Jogos Stoke Mandeville. À medida que o evento anual continuava a crescer, o espírito e os esforços de todos os envolvidos começaram a impressionar os organizadores dos Jogos Olímpicos e membros da comunidade internacional.[carece de fontes]?\n[…]\nNos Jogos de Stoke Mandeville de 1956, Guttmann foi premiado com a Copa Sir Thomas Fearnley pelo Comitê Olímpico Internacional (COI) por sua meritória conquista a serviço do movimento olímpico por meio do valor social e humano derivado dos esportes em cadeira de rodas.[carece de fontes]?\n[…]\nConhecidos na época como os 9º Jogos Anuais Internacionais de Stoke Mandeville, e organizados com o apoio da Federação Mundial de Ex-militares (um Grupo de Trabalho Internacional sobre Esportes para Pessoas com Deficiência), eles agora são reconhecidos como os primeiros Jogos Paraolímpicos. (O termo \"Jogos Paraolímpicos\" foi aplicado retroativamente pelo Comitê Olímpico Internacional em 1984.)[carece de fontes]?\n[…]\nGuttmann fundou a International Medical Society of Paraplegia (agora International Spinal Cord Society (ISCoS)) em 1961, e foi o presidente inaugural da sociedade, cargo que ocupou até 1970. Ele se tornou o primeiro editor da revista, Paraplegia. Se aposentou do trabalho clínico em 1966, mas continuou seu envolvimento com o esporte.[carece de fontes]?\n[…]\nGuttmann sofreu um ataque cardíaco em outubro de 1979 e morreu em 18 de março de 1980 aos 80 anos.[carece de fontes]?",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Adhemar Ferreira da Silva",
      "descricao": "Atleta brasileiro, bicampeão olímpico do salto triplo em 1952 e 1956."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O bicampeão olímpico do salto triplo Adhemar Ferreira da Silva também atuou num filme vencedor da Palma de Ouro e do Oscar. Qual?",
    "resposta": "Orfeu Negro",
    "fonte": [
      "https://en.wikipedia.org/wiki/Adhemar_da_Silva",
      "https://en.wikipedia.org/wiki/Black_Orpheus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Adhemar_da_Silva",
        "situacao": "ok",
        "texto": "Adhemar Ferreira da Silva (September 29, 1927 – January 12, 2001) was a Brazilian triple jumper. He won two Olympic gold medals and set five world records, the last being 16.56 metres in 1955 Pan American Games. In his early career he also competed in the long jump, placing fourth at the 1951 Pan American Games. He broke world records in triple jump on five occasions during his illustrious career.\n[…]\nIn 1959, Adhemar acted in the musical film Orfeu Negro (Black Orpheus) based on a play titled Orfeu da Conceição by Vinicius de Moraes. He portrayed the role as Death and the film received positive reviews from critics. The film also won the Golden Palm of the Cannes Film Festival and an Academy Award for Best Foreign Language Film. It was revealed that he received the film offer while he was studying for a physical education degree.\n[…]\nHe was preferred for the acting role due to his athletic body and he did not act in any other films as he did not have much interest in doing films which ultimately ended his film acting career. American anthropologist Ann Dunham who is also the mother of former American President Barack Obama insisted that Orfeu Negro was her favorite film. He is still recognized as one of only few Olympic gold medalists to have played a major role in films.\n[…]\nAdhemar's daughter Adyel initiated 'Jump for Life' project on remembrance of her father and also to help people from underprivileged and deprived areas to athletics.\n[…]\nMedia related to Adhemar da Silva at Wikimedia Commons\n[…]\nAdhemar Ferreira da Silva at World Athletics\n[…]\nAdhemar Ferreira da Silva at Olympics.com\n[…]\nAdhemar da Silva at Olympedia\n[…]\nAdhemar da Silva at InterSportStats\n[…]\nAdhemar Ferreira da Silva at the Comitê Olímpico do Brasil  (in Portuguese)\n[…]\nAdhemar Ferreira da Silva at Confederação Brasileira de Atletismo at the Wayback Machine (archived 8 January 2019)\n[…]\nAdhemar Ferreira da Silva at IMDb"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Black_Orpheus",
        "situacao": "ok",
        "texto": "Black Orpheus (Portuguese: Orfeu Negro [ɔhˈfew ˈnegɾu]) is a 1959 romantic tragedy film directed by French filmmaker Marcel Camus and starring Marpessa Dawn and Breno Mello. It is based on the play Orfeu da Conceição by Vinicius de Moraes, which set the Greek legend of Orpheus and Eurydice in a contemporary favela in Rio de Janeiro during Carnaval. The film was an international co-production among\n[…]\nWhen Serafina's sailor boyfriend Chico shows up, Orfeu offers to let Eurydice sleep in his home, while he takes the hammock outside. Eurydice invites him to her bed, and they have sex.\n[…]\nOrfeu wanders in mourning. He retrieves Eurydice's body from the city morgue and carries her in his arms across town and up the hill toward his home, where his shack is burning. A vengeful Mira flings a stone that hits him in the head and knocks him over a cliff to his death, with Eurydice still in his arms.\n[…]\nTwo children, Benedito and Zeca – who have followed Orfeu throughout the film – believe Orfeu's tale that his guitar playing causes the sun to rise every morning. After Orfeu's death, Benedito insists that Zeca pick up the guitar and play so that the sun will rise. Zeca plays, and the sun comes up. A little girl appears, gives Zeca a single flower, and the three children dance.\n[…]\nBreno Mello as Orfeu\n[…]\nAdhemar da Silva as Death\n[…]\nBreno Mello was a soccer player with no acting experience at the time he was cast as Orfeu. Mello was walking on the street in Rio de Janeiro when director Marcel Camus stopped him and asked if he would like to be in a film.\n[…]\nHowever, the film has been criticized, especially in Brazil. Vinicius de Moraes, author of the 1956 play Orfeu da Conceição upon which the film was based, was outraged and left the theater in the middle of the screening.\n[…]\nOrfeu, a 1999 film adapted from the same source material"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Adhemar_Ferreira_da_Silva",
        "situacao": "ok",
        "texto": "Adhemar Ferreira da Silva (São Paulo, 29 de setembro de 1927 – São Paulo, 12 de janeiro de 2001) foi um atleta brasileiro, primeiro bicampeão olímpico do país, primeiro atleta sul-americano bicampeão olímpico em eventos individuais, recordista mundial do salto triplo cinco vezes e primeiro atleta a quebrar a barreira dos 16m no salto triplo.\n[…]\nNo ano de 1955, o esportista chegou ao Vasco para brilhar no atletismo do clube. Depois de sagrar-se campeão olímpico em 1952, bicampeão panamericano e recordista mundial de salto triplo. Além de treinar na pista de atletismo que circundava o campo, Adhemar também estudava na Escola de Educação Física do Exército e trabalhava no jornal Última Hora.\n[…]\nEm 1956, interpretou a Morte na peça Orfeu da Conceição, de Vinicius de Moraes e no filme franco-italiano Orfeu Negro, de 1959, feito a partir do texto teatral, que venceu o Oscar de melhor filme estrangeiro[carece de fontes]? e a Palma de Ouro no Festival de Cannes. Foi revelado que ele recebeu a oferta do filme enquanto estudava educação física.\n[…]\nEle foi preferido para o papel de ator devido ao seu corpo atlético e não atuou em nenhum outro filme, pois não tinha muito interesse em fazer filmes que acabaram encerrando sua carreira de ator. A antropóloga americana Ann Dunham afirma que Orfeu Negro era o filme favorito de seu filho, o ex-presidente Barack Obama.\n[…]\nAdhemar se transferiu para o carioca Club de Regatas Vasco da Gama em 1955, conquistou o bicampeonato olímpico quando era atleta do clube carioca e por ele encerrou sua carreira em 1960. Vencedor até a sua última prova, encerrou sua última competição oficial como campeão carioca no salto triplo com a marca de 15,58 m, disputada no Estádio Célio de Barros em 1 de outubro de 1960.\n[…]\n«Adhemar Ferreira da Silva». na Confederação Brasileira de Atletismo",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Carl Lewis",
      "descricao": "Atleta americano, campeão de quatro provas nos Jogos de Los Angeles 1984."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Em Los Angeles 1984, Carl Lewis venceu cem metros, duzentos metros, revezamento e salto em distância, repetindo o feito de que atleta em 1936?",
    "resposta": "Jesse Owens",
    "fonte": [
      "https://en.wikipedia.org/wiki/Carl_Lewis"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Carl_Lewis",
        "situacao": "ok",
        "texto": "Frederick Carlton Lewis (born July 1, 1961) is an American former track and field athlete who won nine Olympic gold medals, one Olympic silver medal, and 10 World Championships medals, including eight gold. Lewis was a dominant sprinter and long jumper whose career spanned from 1979 to 1996, when he last won the Olympic long jump.\n[…]\nThough his focus was on the long jump, he was now starting to emerge as a talent in the sprints. Comparisons were beginning to be made with Jesse Owens, who dominated sprint and long jump events in the 1930s. Lewis qualified for the American team for the 1980 Olympics in the long jump and as a member of the 4 × 100 m relay team.\n[…]\nAt the 1984 Olympic Games in Los Angeles, Lewis was entered into four events with realistic prospects of winning each of them and thereby matching the achievement of Jesse Owens at the 1936 Games in Berlin.\n[…]\nLewis started his quest to match Owens with a convincing win in the 100 m, running 9.99 s to defeat his nearest competitor, fellow American Sam Graddy, by 0.2 s. In his next event, the long jump, Lewis won with relative ease. His behavior in winning this event stoked controversy, even as knowledgeable observers agreed that his tactics were correct.\n[…]\nAlthough Lewis had achieved what he had set out to do, matching Jesse Owens' feat of winning four gold medals in the same events at a single Olympic Games, he did not receive the lucrative endorsement offers that he had expected. The long jump controversy was one reason and his self-congratulatory conduct did not impress several other track stars. Further, Lewis's agent Joe Douglas compared him to pop star Michael Jackson, a comparison which did not go over well.\n[…]\nCarl Lewis at www.USATF.org\n[…]\nCarl Lewis at Olympics.com Carl Lewis at Olympic.org (archived)\n[…]\nCarl Lewis at Olympedia\n[…]\nCarl Lewis at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Carl_Lewis",
        "situacao": "ok",
        "texto": "Willian Frederick Carlton 'Carl' Lewis Embaixador(a) da boa vontade da FAO (Birmingham, 1 de julho de 1961), é um ex-atleta dos Estados Unidos que ganhou dez medalhas olímpicas, nove das quais de ouro, e dez medalhas nos campeonatos mundiais de atletismo, oito das quais de ouro, em uma carreira que se estendeu de 1979, quando ele alcançou uma posição na classificação mundial, até 1996, quando ele \n[…]\nLewis foi um velocista que liderou o ranking mundial nos 100 e 200 metros rasos, e eventos de salto em distância de 1981 ao início de 1990. Foi nomeado Atleta do Ano pela Track and Field News em 1982, 1983 e 1984. Estabeleceu recordes mundiais nos 100m, 4 por 100 metros, e 4 por 200 metros. Suas 65 vitórias no salto em distância, durante 10 anos consecutivos, são um dos maiores períodos de invencibilidade do atletismo mundial.\n[…]\nCarl Lewis foi recordista mundial dos 100 metros entre 1987 e 1994 (somente tendo perdido o recorde para Leroy Burrell entre junho e agosto de 1991).\n[…]\nNuma prova histórica do salto em distância contra Mike Powell em Tóquio, no Campeonato Mundial de Atletismo de 1991,  chegou a saltar a marca de 8,91m, que não valeria como recorde mundial apenas por causa do vento acima de 2,0 m/s (logo depois deste salto, Mike Powell bateu o recorde mundial com 8,95 m). Ainda assim, Carl Lewis detém até hoje a 3ª melhor marca da história da prova, 8,87 m.\n[…]\nO caso, normalmente, seria passível de cancelamento da marca obtida pelo atleta e julgamento para suspensão. O vencedor da prova dos 100 metros rasos, o canadense Ben Johnson, já havia sido pego no teste antidoping, com a medalha indo para Carl Lewis. Documentos divulgados por um diretor de Controle Antidoping do USOC entre 1991 e 2000, reforçaram suspeitas de que o Comitê encobriu mais de 100 casos de doping em dez anos.\n[…]\nCarl Lewis na IAAF",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Equipe jamaicana de bobsled",
      "descricao": "Seleção da Jamaica no bobsled, que estreou nos Jogos de Inverno de Calgary 1988."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "A estreia da Jamaica no bobsled, nos Jogos de Inverno de Calgary 1988, inspirou que filme da Disney?",
    "resposta": "Jamaica Abaixo de Zero",
    "fonte": [
      "https://en.wikipedia.org/wiki/Jamaica_national_bobsleigh_team",
      "https://en.wikipedia.org/wiki/Cool_Runnings"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Jamaica_national_bobsleigh_team",
        "situacao": "ok",
        "texto": "The Jamaica national bobsleigh team represents Jamaica in international bobsleighing competitions. The men's team debut in the 1988 Winter Olympic Games four-man bobsleigh in Calgary was received as underdogs in a cold weather sport represented by a nation with a tropical environment. Jamaica returned to the Winter Olympics in the two-man bobsleigh in 1992, 1994, 1998, 2002, 2014, 2022, and 2026; \n[…]\nOn 21 February, Fenlator-Victorian and Russell finished 19th in the two-woman Olympic bobsleigh event. At the 2026 Winter Olympic Games in Milan and Cortina d'Ampezzo in Italy, the Jamaican team consisted of a four-man team, a two man team, and a women's monobob. The two-man team, consisting of Junior Harris and Shane Pitter, came in 22nd out of 25 teams. Mica Moore came 14th out of 25 in the women's monobob event.\n[…]\n2026 Winter Olympic team:\n[…]\nThe 1988 team inspired the reggae parody song \"Jamaican Bobsled\" by The Rock 'n' Roll Animals, played on the GTR radio station and later released on the CD Yatta, Yatta, Yatta. The song was recorded after Jamaica had announced that they would be entering a bobsledding team into the Olympics, but before the Olympics had actually started; nevertheless, the lyrics accurately predict that the team would crash during one of their runs.\n[…]\nIn 1993,  Disney released Cool Runnings, a film loosely based on and inspired by the team's experience in the four-man Bobsleigh at the 1988 Winter Olympics event. A video game based on Jamaica's bobsleigh teams was released for the Wii on 12 October 2010. Titled Sled Shred featuring the Jamaican Bobsled Team and published by SouthPeak Games, it features characters steered by tilting the Wii Remote sliding down icy paths in varied scenery atop various sleds.\n[…]\nNigerian bobsled team\n[…]\nVisa 2010 Winter Olympics commercial on YouTube featuring photos and footage of Jamaica's debut at the 1988 Winter Olympic Games."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Cool_Runnings",
        "situacao": "ok",
        "texto": "Cool Runnings is a 1993 American sports comedy film directed by Jon Turteltaub from a screenplay by Lynn Siefert, Tommy Swerdlow, and Michael Goldberg, and a story by Siefert and Michael Ritchie. It is loosely based on the debut of the Jamaican national bobsleigh team at the 1988 Winter Olympics, and stars Leon, Doug E. Doug, Rawle D. Lewis, Malik Yoba and John Candy.\n[…]\nUpon reaching Calgary, Blitzer registers the team and borrows a rundown bobsled from Roger, one of his past teammates. The Jamaicans struggle to adapt to the cold and race conditions but improve through exercise and hard work. Derice begins to copy the techniques of the very efficient Swiss team, while the East German team – the current bobsled world record holders – constantly heckle the Jamaicans during their practices.\n[…]\nI knew about the actual event it's based on, the Jamaican bobsled team that went to the '88 Olympics, and even though it's based pretty loosely I thought it made a great yarn.\"  At the time of Doug's audition, Chechik was attached as the director. Doug told The Baltimore Sun: \"I got the offer to play Sanka, the guy I'd wanted to play from the very beginning.\"\n[…]\nThe film implies Jamaica as the only country from a tropical climate to compete in bobsleigh at the Olympics; while they were the only Caribbean country to feature in the four-man competition, Netherlands Antilles and two teams from the U.S. Virgin Islands competed in the 38-team two-man competition, who finished 29th, 35th, and 38th, respectively.\n[…]\nTwo members of the Jamaican team (Dudley Stokes and Michael White) also competed in the two-man sled competition, completing all four runs and finishing in 30th place; Stokes and White were set to compete in two-man bobsleigh event only, with the four-man team entered to compete after the two-man event had already been completed.\n[…]\nJamaica national bobsleigh team"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Dana Zátopková",
      "descricao": "Atleta tcheca, campeã olímpica do lançamento de dardo em 1952 e esposa de Emil Zátopek."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Em Helsinque 1952, no mesmo dia em que Emil Zátopek venceu os cinco mil metros, sua esposa Dana ganhou ouro em que prova?",
    "resposta": "Lançamento de dardo",
    "distratores": [
      "Arremesso de peso",
      "Lançamento de disco",
      "Salto em altura"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Dana_Z%C3%A1topkov%C3%A1"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Dana_Z%C3%A1topkov%C3%A1",
        "situacao": "ok",
        "texto": "Dana Zátopková (Czech pronunciation: [ˈdana ˈzaːtopkovaː]; née Ingrová [ˈɪŋɡrovaː], 19 September 1922 – 13 March 2020) was a Czech javelin thrower who won a gold medal at the 1952 Summer Olympics.\n[…]\nAt the 1952 Olympic Games, she won the gold medal in the javelin throw event at the 1952 Summer Olympics (only an hour after her husband, Emil Zátopek, won the 5,000 m), and the silver medal in the 1960 Summer Olympics. She was the European champion in 1954 and 1958.\n[…]\nZátopková and her husband were the witnesses at the wedding ceremony of Olympic gold medalists Olga Fikotová and Harold Connolly in Prague in 1957. Emil spoke to the Czechoslovak president Antonín Zápotocký to request help in Olga getting a permit to marry Connolly. While it is not clear how much this helped, they did receive a permit a few days later.\n[…]\nDana Ingrova-Zatopkova at Olympics.comDana Ingrova-Zatopkova at Olympic.org (archived)\n[…]\nDana Ingrová-Zátopková at Olympedia\n[…]\nDana Zátopková at World Athletics"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dana_Z%C3%A1topkov%C3%A1",
        "situacao": "ok",
        "texto": "Dana Zátopková, nascida Ingrová (Karviná, 19 de setembro de 1922 – Praga, 13 de março de 2020) foi uma atleta checa, campeã olímpica do lançamento do dardo.\n[…]\nDana foi esposa do lendário atleta e multicampeão olímpico da Checoslováquia, Emil Zátopek, a Locomotiva Humana, tendo nascido no mesmo dia que ele. Por méritos próprios, foi também campeã olímpica, como o marido, recordista mundial e atleta de primeiro nível internacional no atletismo.\n[…]\nSétima colocada no dardo feminino nos Jogos de Londres, em 1948, competição em que conheceu Zátopek, em Helsinque 1952 ela conquistou a medalha de ouro no lançamento do dardo, uma hora após seu marido vencer os 5000 metros. Nos Jogos Olímpicos de Roma, em 1960, aos 38 anos de idade, conquistou a medalha de prata na mesma prova. Campeã europeia em 1954 e 1958, neste ano estabeleceu nova marca mundial para o dardo feminino, lançando-o a 55,73 metros.\n[…]\nUm exemplo da competitiva e divertida relação entre Dana e Emil, pôde ser ouvida na conferência de imprensa acontecida após as conquistas dos dois em Helsinque, quando Emil sugeriu que sua atuação nas provas de fundo teriam servido como 'inspiração' para Dana também conseguir sua medalha de ouro, tentando ele mesmo conseguir algum crédito pela vitória da mulher, ao que ela respondeu: Verdade? Pois então vá inspirar alguma outra garota e veja se ela consegue lançar um dardo a cinquenta metros!.\n[…]\n«Perfil de Dana Zátopková» (em inglês). arquivado do sítio Sports-Reference.com",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Daniel Dias",
      "descricao": "Nadador paralímpico brasileiro, multimedalhista entre 2008 e 2020."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O nadador Daniel Dias decidiu começar na natação depois de ver na TV, nas Paralimpíadas de 2004, qual nadador brasileiro?",
    "resposta": "Clodoaldo Silva",
    "fonte": [
      "https://en.wikipedia.org/wiki/Daniel_Dias"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Daniel_Dias",
        "situacao": "ok",
        "texto": "Daniel de Faria Dias (born 24 May 1988) is a Brazilian Paralympic swimmer. Having learnt to swim in 2004 after being inspired by Clodoaldo Silva at the 2004 Summer Paralympics, he entered his first international competition two years later winning five medals. He competed in a wide range of swimming events at the 2008, 2012, 2016 and 2020 Paralympics and won 27 medals, including 14 gold medals.\n[…]\nDias was born in 1988 in Campinas, a city to the north of São Paulo. He was born with malformed upper and lower limbs. Dias began swimming at the age of 16, after being inspired by Clodoaldo Silva competing at the 2004 Summer Paralympics, and learned four styles of swimming in two months. He studied mechatronical engineering and physical education at the Universidade São Francisco.\n[…]\nDias won the Laureus Award in 2009 for Sportsperson of the Year with a Disability, being awarded it by British athlete Sebastian Coe at a ceremony in London. Dias was an ambassador for his country's bid for the 2016 Summer Olympics and Paralympics, and was present for the presentation of the Candidature File to the International Olympic Committee.\n[…]\nDias won the Sportsperson of the Year with a Disability for the second time in 2012 after winning 6 gold medals all in world record time at the 2012 Paralympic Games.\n[…]\nIn 2016 he was compared to Michael Phelps, a retired non-Paralympic American competitive swimmer. Despite such an honorable comparison Daniel Dias said that he is Daniel Dias.\n[…]\nDaniel Dias at the International Paralympic Committee Daniel Dias at IPC.InfostradaSports.com (archived)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Daniel_Dias",
        "situacao": "ok",
        "texto": "Daniel de Faria Dias (Campinas, 24 de maio de 1988) é um nadador paralímpico brasileiro e recordista mundial.\n[…]\nDaniel conquistou nove medalhas nos Jogos Paralímpicos de Pequim 2008 (4 de ouro, 4 de prata e 1 de bronze), se tornando o atleta com mais medalhas em uma única edição dos Jogos, superando  também o nadador brasileiro Clodoaldo Silva, que havia conquistado sete medalhas (seis de ouro e uma de prata) nos Jogos Paralímpicos de Atenas 2004.\n[…]\nNos Jogos Paralímpicos de Verão de 2020 Daniel garantiu três bronzes (nos 100m livre da classe S5, no revezamento 4x50m livre misto até 20 pontos e nos 200m livre da classe S5), se consagrando como o maior medalhista paralímpico brasileiro, com 27 medalhas no total. Ele se despediu das piscinas no primeiro dia de setembro de 2021, aos 33 anos, terminando a prova dos 50m livres da classe S5 em quarto lugar, com o tempo de 32s12, encerrando a sua gloriosa carreira.\n[…]\nEm 15 de junho de 2009, Daniel recebeu o troféu no Prêmio Laureus do Esporte Mundial como melhor atleta paralímpico de 2008. Sua indicação teve como motivo as suas nove medalhas conquistadas durante os Jogos Paralímpicos de Pequim. Ele venceu novamente a premiação em 2012 e em 2016, se sagrando como o único brasileiro a atingir esse feito.\n[…]\nEm 2008, Daniel Dias já havia sido indicado para o mesmo prêmio. Até então, apenas três outros brasileiros haviam recebido este prêmio: Pelé (Futebol, 2000) Ronaldo Fenômeno (Futebol, 2003) e Bob Burnquist (Skateboarding, 2002).\n[…]\n«Perfil de Daniel Dias». Perfil de Daniel Dias\n[…]\n«Nadador Daniel Dias ganha ouro e já soma 16 medalhas em Paralimpíadas»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Martine Grael",
      "descricao": "Velejadora brasileira, campeã olímpica na classe 49er FX no Rio e em Tóquio."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "A velejadora Martine Grael, campeã olímpica no Rio e em Tóquio, é filha de que velejador brasileiro, também medalhista olímpico?",
    "resposta": "Torben Grael",
    "fonte": [
      "https://en.wikipedia.org/wiki/Martine_Grael"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Martine_Grael",
        "situacao": "ok",
        "texto": "Martine Soffiatti Grael (born 12 February 1991) is a Brazilian sailor in the 49er FX class. Together with Kahena Kunze, she won the 49er FX class at the 2014 ISAF Sailing World Championships and at the 2016 Rio Olympics, and 2020 Tokyo Olympics.\n[…]\nMartine Grael was born 12 February 1991 in Niterói, Rio de Janeiro, Brazil, the daughter of Olympic sailing gold medalist Torben Grael. Her brother Marco and uncle Lars also sailed in the Olympics.\n[…]\nGrael then sailed with Kahena Kunze in the Olympic debuting 49er FX event. The two became World champions in the 49er FX class at the 2014 ISAF Sailing World Championships The duo then won the event at the 2016 Rio Olympics.\n[…]\nShe sailed with Team AkzoNobel in the 2017–18 Volvo Ocean Race. In 2024, Grael was designated captain of the debuting Brazilian team that would compete at the SailGP championship.\n[…]\nGrael and Kunze also won the 49er FX event at the 2020 Summer Olympics.\n[…]\nMartine Grael at World Sailing\n[…]\nMartine Grael at Olympics.com\n[…]\nMartine Grael at Olympedia\n[…]\nMartine Grael at the Comitê Olímpico do Brasil  (in Portuguese)\n[…]\nMartine Grael at the Lima 2019 Pan American Games (archived, alternate link)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Martine_Grael",
        "situacao": "ok",
        "texto": "Martine Soffiatti Grael (Niterói, 12 de fevereiro de 1991) é uma velejadora e engenheira ambiental brasileira, bicampeã olímpica e campeã mundial de Iatismo na classe 49er FX – junto com a parceira e proeira Kahena Kunze – eleita pela Federação Internacional de Vela  a melhor velejadora do mundo em 2014.\n[…]\nFilha do bicampeão olímpico Torben Grael, Martine, nasceu em Niterói, cidade da Região Metropolitana do Rio de Janeiro, em 1991.\n[…]\nCom a realização dos Jogos Olímpicos de Verão de 2016, no Rio de Janeiro, Martine tornou-se campeã olímpica de vela ao lado Kahena, ao vencerem a Regata das Medalhas da categoria – para a qual três barcos entraram empatados – com uma vantagem de apenas 2 segundos para as medalhistas de prata da Nova Zelândia. Com a medalha de ouro, ela e Torben Grael são os únicos pai e filha campeões olímpicos da história do esporte brasileiro.\n[…]\nEm abril de 2023, junto com sua costumeira parceira, conquistou a medalha de ouro do Trofeo Princesa Sofia Mallorca, na Espanha, primeira etapa da Copa do Mundo de Vela. Grael e Kunze também conquistaram o bicampeonato nos Jogos Pan-Americanos de 2023, realizados em Santiago, no Chile.\n[…]\nEm 2024, a terceira olimpíada de Grael e Kunze em Paris 2024 acabou tendo maus resultados, com a dupla entrando na última regata sem chance de medalha e terminando em oitavo. Grael seguiu anunciando que não continuaria a dupla, declarando-se exausta \"desse circo que é fazer campanha olímpica\". Em outubro, venceu a regata Santos-Rio junto do pai Torben e o irmão Marco.\n[…]\nEm novembro começou o torneio SailGP, onde era capitã da estreante equipe brasileira, que incluía seu irmão Marco e a ex-parceira Kunze.\n[…]\nÉ sobrinha de Axel Grael, ex-velejador e prefeito de Niterói e do também velejador olímpico Lars Grael.\n[…]\nMartine Grael em Olympics.com",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Yoshinori Sakai",
      "descricao": "Atleta japonês que acendeu a pira olímpica dos Jogos de Tóquio 1964."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O jovem que acendeu a pira de Tóquio 1964 nasceu na província de Hiroshima, em agosto de 1945, no dia de que acontecimento?",
    "resposta": "O lançamento da bomba atômica",
    "fonte": [
      "https://en.wikipedia.org/wiki/Yoshinori_Sakai"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Yoshinori_Sakai",
        "situacao": "ok",
        "texto": "Yoshinori Sakai (坂井 義則, Sakai Yoshinori; August 6, 1945 – September 10, 2014) was the Olympic flame torchbearer who lit the cauldron at the 1964 Summer Olympic Games in Tokyo.\n[…]\nSakai was born in Hiroshima on 6 August 1945, the day an atomic bomb was dropped on that city. He was chosen for the role to symbolize Japan's postwar reconstruction and peace. An enthusiastic part-time athlete, at the time of the 1964 Olympics he was a member of Waseda University's running club. The nineteen-year-old was coached in the ceremonial duty by Teruji Kogake, a triple jump world record-holder turned coach. He never actually competed in any events at the Olympics.\n[…]\nMedia related to Yoshinori Sakai at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Yoshinori_Sakai",
        "situacao": "ok",
        "texto": "Yoshinori Sakai (坂井 義則, Sakai Yoshinori), também conhecido como bebê de Hiroshima, (Miyoshi, 6 de agosto de 1945 − Tóquio, 10 de setembro de 2014) foi um atleta e jornalista japonês, conhecido por ser o encarregado de acender a pira olímpica nos Jogos Olímpicos de Verão de 1964 em Tóquio.\n[…]\nEle nasceu no mesmo dia dos ataques atômicos a Hiroshima, durante a Segunda Guerra Mundial. O Japão queria simbolizar nas Olimpíadas  o triunfo da vida sobre a morte. Yoshinori Sakai foi escolhido para acender a pira olímpica em razão das circunstâncias de seu nascimento. No evento ele simbolizava a vontade de paz e a capacidade de sobrevivência frente as tragédias.\n[…]\nYoshinori participou dos Jogos Asiáticos de 1966 em Bancoque, onde ganhou uma medalha de ouro no revezamento 4 x 400 e uma medalha de prata nos 400 metros. Ele nunca competiu nos Jogos Olímpicos. Depois que parou de competir no atletismo, Yoshinori seguiu carreira na área de jornalismo esportivo na Fuji Television.\n[…]\nFaleceu em um hospital de Tóquio em decorrência de uma hemorragia cerebral.\n[…]\n«Yoshinori Sakai, \"el bebé de Hiroshima\"» (em espanhol). docudeporte.es",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Guilherme Paraense",
      "descricao": "Atirador brasileiro, campeão olímpico de tiro com pistola nos Jogos de Antuérpia 1920."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Em Antuérpia 1920, Guilherme Paraense deu ao Brasil seu primeiro ouro olímpico, no tiro, usando uma arma emprestada por que delegação?",
    "resposta": "Estados Unidos",
    "distratores": [
      "Bélgica",
      "França",
      "Grã-Bretanha"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Guilherme_Paraense"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Guilherme_Paraense",
        "situacao": "ok",
        "texto": "Guilherme Paraense (25 June 1884 – 18 April 1968) was a Brazilian sport shooter and Olympic Champion. He was the first Brazilian to win an Olympic gold medal.\n[…]\nParaense was born in Belém. He won a gold medal at the 1920 Summer Olympics in Antwerp, in the Rapid-Fire Pistol event. He was also part of the Brazilian team which earned a bronze medal in Military Revolver.\n[…]\nParaense died in Rio de Janeiro, aged 83.\n[…]\nGuilherme Paraense at Olympics.com\n[…]\nGuilherme Paraense at the International Shooting Sport Federation\n[…]\nGuilherme Paraense at the Comitê Olímpico do Brasil  (in Portuguese)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Guilherme_Paraense",
        "situacao": "ok",
        "texto": "Guilherme Paraense (Belém, 25 de junho de 1884 — Rio de Janeiro, 18 de abril de 1968) foi o primeiro esportista brasileiro a conquistar uma medalha de ouro nos Jogos Olímpicos, na modalidade de tiro. Foi militar integrante do Exército Brasileiro, com a patente de tenente e atleta do Fluminense Football Club.\n[…]\nCom tantos percalços, a equipe brasileira de tiro (formada por Afrânio Costa (capitão), Sebastião Wolf, Dario Barbosa, Fernando Soledade, Demerval Peixoto, Mario Maurity e Guilherme Paraense) chegou aos Jogos com moral baixa, sem alimentação e sem material esportivo.\n[…]\nImpressionados com a situação dos colegas, os atiradores americanos lhes emprestaram armas e munição, modernas fabricadas especialmente pela Colt, e com elas os brasileiros derrotaram seus benfeitores, ganhando ouro, prata e bronze no Tiro. Paraense, porém, ganhou o ouro com sua própria arma, guardada até hoje por sua filha Oysis Paraense Ferreira.\n[…]\nParaense venceu a modalidade de pistola rápida na prova de desempate individual e conquistou a primeira medalha de ouro olímpica brasileira, em 3 de agosto de 1920. Sendo também medalhista de bronze por equipe na prova de pistola livre.\n[…]\nRetornando da Europa com a equipe, desta vez num navio bem mais confortável que o Curvello, depois que a notícia da façanha chegou ao Brasil, Paraense foi recebido pelo então presidente da República Epitácio Pessoa e ganhou uma placa de ouro comemorativa. Em 1989 foi homenageado pelo Exército Brasileiro, que batizou como \"Polígono de Tiro Tenente Guilherme Paraense\" o conjunto de estandes de tiro da Academia Militar das Agulhas Negras (AMAN), em Resende (RJ).\n[…]\n«Perfil de Guilherme Paraense» (em inglês). arquivado do sítio Sports-Reference.com\n[…]\n«Biografia de Guilherme Paraense feita». na revista Magnum",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Duke Kahanamoku",
      "descricao": "Nadador havaiano, campeão olímpico dos 100 metros livre em 1912."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O havaiano Duke Kahanamoku, campeão olímpico de natação em 1912, ficou mundialmente famoso por difundir que outro esporte?",
    "resposta": "Surfe",
    "fonte": [
      "https://en.wikipedia.org/wiki/Duke_Kahanamoku"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Duke_Kahanamoku",
        "situacao": "ok",
        "texto": "Duke Paoa Kahinu Mokoe Hulikohola Kahanamoku (August 24, 1890 – January 22, 1968) was a Hawaiian competition swimmer, lifeguard, and popularizer of the sport of surfing. A Native Hawaiian, he was born three years before the overthrow of the Hawaiian Kingdom. He lived to see the territory's admission as a state and became a United States citizen.\n[…]\nKahanamoku's name is also used by Duke's Canoe Club & Barefoot Bar, as of 2016 known as Duke's Waikiki, a beachfront bar and restaurant in the Outrigger Waikiki on the Beach Hotel. There is a chain of restaurants named after him in California, Florida and Hawaii called Duke's.\n[…]\nOn August 24, 2015, a Google Doodle honored the 125th anniversary of Duke Kahanamoku's birthday.\n[…]\nDuke Paoa Kahanamoku Lagoon\n[…]\nKahanamoku, Duke. \"Do's and Don't's.\" Photoplay, September 1925. Tie-in to Adventure.\n[…]\nPaniccia, Patti. \"Who Owns the Duke?: The battle for the trademark to Duke Kahanamoku’s name has been far less dignified than the man himself.\" Honolulu Magazine. November 1, 2006.\n[…]\nDavis, David (2015). Waterman: The Life and Times of Duke Kahanamoku. Lincoln: University of Nebraska Press. ISBN 978-0-8032-8514-9. OCLC 906027798.\n[…]\nWorks by or about Duke Kahanamoku at the Internet Archive\n[…]\nDuke Kahanamoku (USA) – Honor Swimmer profile at International Swimming Hall of Fame at the Wayback Machine (archived April 12, 2015)\n[…]\nDuke Kahanamoku at the Team USA Hall of Fame (archive July 20, 2023)\n[…]\nDuke Kahanamoku at Olympics.com Duke Kahanamoku at Olympic.org (archived)\n[…]\nDuke Kahanamoku at Olympedia\n[…]\nDuke Kahanamoku at IMDb\n[…]\nDuke Kahanamoku at IMDb\n[…]\nDuke Kahanamoku discography at Discogs\n[…]\nImage of Duke Kahanamoku surfing in Los Angeles, California, circa 1920. Los Angeles Times Photographic Archive (Collection 1429). UCLA Library Special Collections, Charles E. Young Research Library, University of California, Los Angeles."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Duke_Kahanamoku",
        "situacao": "ok",
        "texto": "Duke Kahanamoku (Oahu, 24 de agosto de 1890 — Honolulu, 22 de janeiro de 1968) foi um nadador, ator e surfista havaiano.\n[…]\nEle foi um dos idealizadores do surf moderno. Foi nos Jogos Olímpicos de Verão de 1912 em Estocolmo, como nadador, que começou a conquistar suas glórias olímpicas, que continuaram durante a Primeira Guerra Mundial e foram testadas mais uma vez nos Jogos Olímpicos de Verão de 1920 em Antuérpia e 1924 em Paris. No total, foram 5 medalhas conquistadas, sendo três de ouro e duas de prata.\n[…]\nDuke largou a carreira de desportista depois dos Jogos de 1924, mas no Havaí continuou muito famoso. Ele transformou o arquipélago, até o momento pouco conhecido, no lar mundialmente famoso do surf.\n[…]\nAntes de morrer, em 1968, ainda foi estrela de cinema e lançou uma grife de surfistas. Por sua causa, o surf espalhou-se pelo mundo e tornou-se um desporto muito praticado e famoso.\n[…]\nNos Jogos Olímpicos da Antuerpia-1920, Kahanamoku, então com 30 anos, tornou-se o nadador mais velho a ganhar uma medalha de ouro olímpica em provas individuais da natação. Este recorde só seria superado 96 anos depois, por Michael Phelps, que conquistou um ouro com 31 anos e 40 dias.\n[…]\nDuke Kahanamoku no IMDB",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Massacre de Munique",
      "descricao": "Ataque a atletas israelenses durante os Jogos Olímpicos de Munique 1972."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Nos Jogos de Munique 1972, atletas israelenses foram feitos reféns e mortos por militantes de que grupo palestino?",
    "resposta": "Setembro Negro",
    "fonte": [
      "https://en.wikipedia.org/wiki/Munich_massacre"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Munich_massacre",
        "situacao": "ok",
        "texto": "The Munich massacre was a terrorist attack during the 1972 Summer Olympics in Munich, West Germany, carried out by eight members of the Palestinian militant organisation Black September. The militants infiltrated the Olympic Village, killed two members of the Israeli Olympic team, and took nine other Israeli team members hostage. Those hostages were later also killed by the militants during a fail\n[…]\nBlack September commander and negotiator Luttif Afif named the operation \"Iqrit and Biram\", after two Palestinian Christian villages whose inhabitants were expelled by Israel during the 1948 Palestine war. Intelligence files suggest that some West German neo-Nazis may have assisted Black September in the 1972 Munich massacre, though the extent of their involvement remains debated.\n[…]\nReeve also writes that while Israeli officials have stated Operation Wrath of God was intended to exact vengeance for the families of the athletes killed in Munich, \"few relatives wanted such a violent reckoning with the Palestinians.\" Reeve states the families were instead desperate to know the truth of the events surrounding the Munich massacre. Reeve outlines what he sees as a lengthy cover-up by German authorities to hide the truth.\n[…]\nLod Airport massacre\n[…]\nCalahan, A. B. \"The Israeli Response to the 1972 Munich Olympic Massacre and the Development of Independent Covert Action Teams\" Archived 17 March 2021 at the Wayback Machine (1995 thesis)\n[…]\nKlein, A. J. (New York, 2005), Striking Back: The 1972 Munich Olympics Massacre and Israel's Deadly Response, Random House ISBN 978-1-920769-80-2\n[…]\nReeve, Simon. (New York, 2001), One Day in September: the full story of the 1972 Munich Olympic massacre and Israeli revenge operation \"Wrath of God\" ISBN 978-1-55970-547-9\n[…]\nThe Israeli Response to the 1972 Munich Massacre Archived 17 March 2021 at the Wayback Machine – Includes an extensive overview of the Munich massacre"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Massacre_de_Munique",
        "situacao": "ok",
        "texto": "Massacre de Munique, também conhecido como Tragédia de Munique, foi um atentado terrorista ocorrido durante os Jogos Olímpicos de 1972, em Munique, Alemanha, quando, em 5 de setembro, onze integrantes da equipe olímpica de Israel foram tomados reféns e assassinados pelo grupo terrorista palestino denominado Setembro Negro, sendo, até hoje, o maior atentado terrorista já ocorrido em um evento espor\n[…]\nNo começo da noite de 4 de setembro, vários atletas israelenses estavam assistindo a peça Um Violinista no Telhado e depois foram jantar antes de retornar para a Olympiapark (vila olímpica).\n[…]\nAs 4h30 da manhã, hora local, no dia 5 de setembro de 1972, enquanto os atletas dormiam, oito terroristas palestinos integrantes da Organização Setembro Negro, uma facção da Organização para a Libertação da Palestina (OLP), escalaram as cercas de dois metros da vila olímpica carregando mochilas que continham rifles AKM, pistolas Tokarev e granadas. Os terroristas haviam sido treinados no Líbano e na Líbia.\n[…]\nLuttif Afif, líder do grupo, perto de quatro minutos depois da meia-noite do dia 6 de setembro, se levantou do lado do primeiro helicóptero e apontou seu fuzil AK-47 para os reféns que estavam dentro dele amarrados e abriu fogo à queima roupa contra eles. Os israelenses Springer, Halfin e Friedman foram mortos na hora. Um quarto refém, Berger, morreu momentos depois devido aos ferimentos.\n[…]\nPerto de dois meses depois deste atentado, o voo 615 da Lufthansa foi sequestrado por terroristas palestinos simpatizantes do movimento Setembro Negro. Eles exigiram a soltura dos três terroristas presos após o Massacre de Munique. O governo alemão atendeu este pedido, apesar de veementes protestos das autoridades israelenses. Os três terroristas foram então para a Líbia, onde foram recebidos como heróis.\n[…]\nReportagem com imagens dos atletas israelenses assassinados e dos terroristas (em alemão)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Hóquei sobre grama",
      "descricao": "Esporte olímpico jogado com tacos curvos e uma bola pequena, na grama."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Entre 1928 e 1956, que país venceu seis vezes seguidas o torneio olímpico masculino de hóquei sobre grama?",
    "resposta": "Índia",
    "distratores": [
      "Paquistão",
      "Inglaterra",
      "Holanda"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Field_hockey_at_the_Summer_Olympics",
      "https://en.wikipedia.org/wiki/India_men%27s_national_field_hockey_team"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Field_hockey_at_the_Summer_Olympics",
        "situacao": "ok",
        "texto": "Field hockey made its debut at the Modern Olympic Games as a men's competition in the 1908 Games in London. It was removed from the Olympic schedule of the Summer Olympic Games for the 1924 Paris Games and was reintroduced in the 1928 Amsterdam Games. The Women's field hockey was introduced into the Olympic programme at the 1980 Moscow Olympics.\n[…]\nGreat Britain won the first two editions of the men's event in 1908 and 1920. India won the gold medal in seven out of eight Olympics from 1928 to 1964, with Pakistan winning three gold and silver medals each between the 1956 and 1984 Games. The matches are played on artificial turf since 1976. Since the late 1980s, European nations have dominated the field hockey events with Germany and Netherlands having won three gold medals each in the men's event.\n[…]\nStarting in 1928, India won the gold medal in seven out of eight Olympics till 1964 including six consecutive gold medals from the 1928 Olympics to 1956. Pakistan won its first gold medal in 1960 and won three gold and silver medals each in a run lasting from 1956 to 1984. West Germany won the gold medal in the 1972 Munich Olympics, for the first gold medal by a non-Asian country since 1928.\n[…]\nMost consecutive appearances :  India (18, 1928 Amsterdam – 2004 Athens)\n[…]\nMost titles:  India (8)\n[…]\nLongest winning streak: 30 matches  (India, 1928 Amsterdam – 1960 Rome)\n[…]\nFewest goals conceded in a single tournament:  India (nil, 1928 Amsterdam, 1956 Melbourne)\n[…]\nBiggest margin of victory:  India 24–1 United States (1932 Los Angeles)\n[…]\nBiggest margin of victory at an Olympic final:  India 8–1 Germany (1936 Berlin)\n[…]\nMost goals scored by a player in a match:  Roop Singh (India, 10 goals vs United States at 1932 Los Angeles)\n[…]\nMost goals scored by a player in an Olympic final:  Balbir Singh Sr. (India, 5 goals vs Netherlands at 1952 Helsinki)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/India_men%27s_national_field_hockey_team",
        "situacao": "ok",
        "texto": "The India men's national field hockey team represents India in international field hockey competitions. The team is governed by the association Hockey India.\n[…]\nThe Indian men's team is one of the most successful national field hockey teams in the world, having won a record eight Olympic gold medals. In 1928, the team won its first Olympic gold medal and then remained unbeaten at the Olympics through 1956, winning six consecutive gold medals. India had a 30–0 winning streak at the Summer Games before losing the 1960 final. India again won the gold medal at the 1964 and 1980 Olympics. India also won its first Hockey World Cup in 1975.\n[…]\nThe Indian team has the best overall record in Olympic history, with 87 victories from 142 matches. India also holds the record for scoring the most Olympic goals and is the only team to win the Olympics without conceding a single goal, having done so in 1928 and 1956.\n[…]\nIndia participated at the Olympics for the first time in 1928. In the group stage, India beat Austria 6–0, Belgium 9–0 and Switzerland 5–0 without conceding a single goal. They defeated the Netherlands 3–0 in the finals under the captaincy of Jaipal Singh Munda.\n[…]\nAt the 1956 Olympics India defeated Afghanistan 14–0, United States 16–0 and Singapore 6–0 in group stage. Then they defeated Germany 1–0 in the semi-final. In the final India faced Pakistan and won the match 1–0, which was the beginning of the biggest rivalry in field hockey. India and Pakistan again met each other in 1958 Asian Games and this time the match ended in a 0–0 draw. India also defeated Japan 8–0, South Korea 2–1 and Malaysia 6–0.\n[…]\nIndia–Malaysia field hockey record"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/H%C3%B3quei_sobre_a_grama_nos_Jogos_Ol%C3%ADmpicos",
        "situacao": "ok",
        "texto": "O hóquei sobre grama foi introduzido nos Jogos Olímpicos com a competição masculina nos Jogos de Londres, em 1908. Seis equipes participaram da primeira edição, incluindo quatro do Reino Unido da Grã-Bretanha e Irlanda. Após ausência nos jogos seguintes em Estocolmo 1912, o esporte voltou em Antuérpia 1920 com nova conquista da Grã-Bretanha. Em 1924, o hóquei sobre grama foi removido dos Jogos de \n[…]\nCom a criação da Federação Internacional de Hóquei naquele ano, o hóquei masculino tornou-se presente initerruptamente a partir dos Jogos Olímpicos de 1928, em Amsterdã.\n[…]\nPor um longo período a modalidade foi dominada por apenas duas equipes. Entre 1928 e 1956 a Índia conquistou seis medalhas de ouro olímpicas seguidas. O Paquistão com três campeonatos e três medalhas de prata rivalizou com os indianos durante bom tempo. Recentemente outras equipes como Alemanha, Austrália e Países Baixos obtiveram reconhecido sucesso.\n[…]\nO primeiro torneio feminino foi disputado nos Jogos Olímpicos de Moscou, em 1980, com a equipe do Zimbábue sagrando-se campeã. Com cinco medalhas de ouro, os Países Baixos são a mais vitoriosa equipe entre as mulheres. O hóquei olímpico é disputado sobre grama sintética desde as Olimpíadas de Montreal 1976.\n[…]\n«Informações do hóquei sobre a grama no site do COI» (em inglês)\n[…]\n«Sítio da Federação Internacional de Hóquei sobre a Grama» (em inglês)\n[…]\n«Informações do hóquei sobre a grama na Olympedia» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Estádio Nacional de Pequim",
      "descricao": "Estádio olímpico de 2008, apelidado de Ninho de Pássaro."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que artista chinês, depois famoso como crítico do governo, colaborou com os arquitetos suíços no projeto do Ninho de Pássaro?",
    "resposta": "Ai Weiwei",
    "fonte": [
      "https://en.wikipedia.org/wiki/Beijing_National_Stadium"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Beijing_National_Stadium",
        "situacao": "ok",
        "texto": "The National Stadium (国家体育场, Guójiā Tǐyùchǎng), a.k.a. the Bird's Nest (鸟巢), is a stadium at Olympic Green in Chaoyang, Beijing, China. The National Stadium, covering an area of 204,000 square meters with an 80,000 person capacity (91,000 with temporary seating), broke ground in December 2003, officially started construction in March 2004, and was completed in June 2008.\n[…]\nLeading Chinese artist Ai Weiwei was the artistic consultant on the project. The retractable roof was later removed from the design after inspiring the stadium's most recognizable aspect. Ground was broken on 24 December 2003 and the stadium officially opened on 28 June 2008. A shopping mall and a hotel are planned to be constructed to increase use of the stadium, which has had trouble attracting events, football and otherwise, after the Olympics.\n[…]\nGround was broken, at the Olympic Green, for Beijing National Stadium on 24 December 2003. At its height, 17,000 construction workers worked on the stadium. Portraits of 143 migrant workers at the construction site were featured in the book Workers (Gong Ren) by artist Helen Couchman. On 1 January 2008, The Times reported that 10 workers had died throughout construction; despite denial from the Chinese government.\n[…]\nHowever, in a story the following week, Reuters, with the support of the Chinese government, reported that only two workers had died. All 121,000 tons of steel were made in China. On 14 May 2008 the grass field of 7,811 square meters was laid in 24 hours. The field is a modular turf system by GreenTech ITM.\n[…]\nAlthough ignored by the Chinese media, design consultant Ai Weiwei has voiced his anti-Olympics views and distanced himself from the project, saying, \"I've already forgotten about it. I turn down all the demands to have photographs with it,\" and that it is part of a \"pretend smile\" of bad taste."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Est%C3%A1dio_Nacional_de_Pequim",
        "situacao": "ok",
        "texto": "O Estádio Nacional de Pequim (em chinês: 北京國家體育場; Hanyu Pinyin: Běijīng Guójiā Tǐyùchǎng), popularmente conhecido como Ninho de Pássaro (em chinês: 鳥巢), é um estádio multiuso localizado em Pequim, capital da China. Oficialmente inaugurado em 18 de abril de 2008, é o maior estádio do país em capacidade de público, conseguindo comportar até 80 000 espectadores nos dias atuais.\n[…]\nO estádio foi palco das cerimônias de abertura e encerramento dos Jogos Olímpicos de Verão de 2008 e dos Jogos Olímpicos de Inverno de 2022. Atualmente, é a principal casa onde a Seleção Chinesa de Futebol e a Seleção Chinesa de Futebol Feminino mandam suas partidas amistosas e oficiais válidas por competições continentais.\n[…]\nUm concurso internacional de design foi lançado quase imediatamente após Pequim ser escolhida como cidade-sede dos Jogos Olímpicos de Verão de 2008. Os principais arquitetos do mundo enviaram suas ideias para o estádio com capacidade para 100 000 lugares e com teto retrátil.\n[…]\nAo todo, 13 empresas de arquitetura apresentaram projetos arquitetônicos para a construção do novo estádio, saindo vencedor do concurso o projeto apresentado em conjunto pela suíça Herzog e de Meuron, a britânica Arup Sports e a chinesa China Architectural Design & Research Group.\n[…]\nO conceito do projeto vencedor consistia em colocar toda a estrutura do telhado e da fachada para fora, sem revestimento decorativo, pois a própria estrutura seria a decoração: arcos gigantes de ferro e aço montados de forma retorcida que remetiam à figura de um ninho de pássaro. E, assim como um ninho, a estrutura parece caótica e, ao mesmo tempo, muito resistente. Ela consiste em 4 segmentos quase idênticos que, juntos, criam o enorme anel de aço, pesando impressionantes 27 000 toneladas.\n[…]\nLista dos maiores estádios de futebol do mundo",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Jogos Olímpicos de Verão de 2024",
      "descricao": "Edição dos Jogos Olímpicos realizada em Paris, em 2024."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Em Paris 2024, o surfe foi disputado num território francês do outro lado do mundo, na onda de Teahupoo. Em que ilha?",
    "resposta": "Taiti",
    "distratores": [
      "Nova Caledônia",
      "Martinica",
      "Reunião"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Surfing_at_the_2024_Summer_Olympics"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Surfing_at_the_2024_Summer_Olympics",
        "situacao": "ok",
        "texto": "Surfing at the 2024 Summer Olympics took place 27 July – 5 August 2024 in Teahupoʻo reef pass, Tahiti, French Polynesia, breaking the record for the farthest away a medal competition has been staged from the host city. A total of 48 surfers (24 for the men's and women's competitions each) competed in the shortboard events, eight more than in Tokyo 2020.\n[…]\nThe surfing competition was staged in Teahupo'o, Tahiti, in the French overseas collectivity of French Polynesia in the southern Pacific. The decision was made to hold the surfing competition in the French territory instead of continental Europe because of the famous massive waves on the island suitable for the surfing competitions.\n[…]\nTahiti is 15,000 km (9,300 miles) from Paris, setting a new record for greatest physical distance of a medal event from the host city, a record that was last set in 1956 when the equestrian events of the 1956 Summer Olympics in Melbourne, Australia, had to be held in Stockholm, Sweden, because Australia had strict quarantine rules for animals coming from overseas.\n[…]\nParticipants in the surf competitions were the only ones not staying at the Paris Olympic Village on L'Île-Saint-Denis, and stayed instead on the ship M/V Aranui 5 anchored off Tahiti as the first floating Olympic village. The surfing competition was also the only event held without spectators.\n[…]\nThe qualification system for Paris 2024 built on the previous format used for Tokyo 2020, ensuring the participation of the world's best professional surfers, along with the vast promotion of geographical universal opportunities for surfers around the world at the Games. While the quota of two male and two female surfers per country remains intact, two exceptions to this rule have been introduced for the ISA World Surfing Games 2022 and 2024 team champions.\n[…]\n*   Host nation (France)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Surfe_nos_Jogos_Ol%C3%ADmpicos_de_Ver%C3%A3o_de_2024",
        "situacao": "ok",
        "texto": "As competições de surfe nos Jogos Olímpicos de Verão de 2024 estavam originalmente programados para acontecer entre 27 a 30 de julho, mas por conta das condições das ondas se estendeu até 5 de agosto de 2024 em Teahupo'o, Taiti, na Polinésia Francesa, quebrando o recorde de competição por medalhas mais longe da cidade-sede, neste caso, Paris.\n[…]\nA competição de surfe foi realizada em Teahupo'o, no Taiti, território ultramarino francês da Polinésia. A decisão de realizar a competição no sul do Oceano Pacífico ao invés da Europa continental foi por conta das famosas ondas enormes na ilha, adequadas para as competições de surfe.\n[…]\nO Taiti fica a 15 mil quilômetros (9,300 milhas) de Paris, estabelecendo um novo recorde para a maior distância física de um evento de medalha da cidade-sede, recorde que foi estabelecido pela última vez em 1956, quando os eventos equestres das Olimpíadas de Melbourne, na Austrália, tiveram que ser realizados em Estocolmo, na Suécia, por conta das regras rígidas de quarentena na Austrália para animais vindos do exterior.\n[…]\nPor conta da distância, os participantes das competições não ficaram na vila olímpica de L'Île-Saint-Denis e, em vez disso, ficaram no navio M/V Aranui 5 ancorado no Taiti, sendo essa a primeira vila olímpica flutuante. A competição de surfe também foi o único evento realizado sem espectadores.\n[…]\nVaga de universalidade – Pela primeira vez, uma vaga adicional por gênero deu direito aos CON elegíveis interessados ​​em ter seus surfistas competindo em Paris 2024. Para se inscrever em uma vaga concedida pelo princípio da universalidade, o surfista deveria terminar entre os 50 primeiros em seu respectivo evento de surfe nos ISA World Surfing Games de 2023 ou 2024.\n[…]\nSurfe nos Jogos Pan-Americanos de 2023\n[…]\n«Pagina oficial da Associação Internacional de Surfe» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Jogos Olímpicos de Verão de 1956",
      "descricao": "Edição dos Jogos Olímpicos realizada em Melbourne, na Austrália."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Nos Jogos de Melbourne 1956, as provas de hipismo foram disputadas em outro continente, por causa da quarentena exigida para cavalos. Em que cidade?",
    "resposta": "Estocolmo",
    "distratores": [
      "Londres",
      "Helsinque",
      "Roma"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/1956_Summer_Olympics",
      "https://en.wikipedia.org/wiki/Equestrian_events_at_the_1956_Summer_Olympics"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/1956_Summer_Olympics",
        "situacao": "ok",
        "texto": "The 1956 Summer Olympics, officially the Games of the XVI Olympiad and officially branded as Melbourne 1956, were an international multi-sport event held in Melbourne, Victoria, Australia, from 22 November to 8 December 1956, with the exception of the equestrian events, which were held in Stockholm, Sweden, in June 1956. The Soviet Union won the most gold and overall medals at these Games.\n[…]\nThe Olympics were first televised during the 1936 games to a domestic audience in Berlin. The 1956 Winter Olympics in Cortina d'Ampezzo were broadcast internationally with the organising committee giving the television rights gratis. While there was much interest in the games overseas, no international television or newsreel rights were awarded, as the Melbourne organising committee requested licensing payments for the broadcasting rights.\n[…]\nHowever, domestic rights to the games were hastily agreed by the then three Melbourne stations, GTV9, HSV7 and ABV2, only a week before the opening ceremony. The three Sydney stations, TCN9, ATN7 and ABN2, syndicated the Melbourne coverage. Television in Australia was new, having its beginnings in September 1956. For many Australians, their first glimpse of television were Olympic broadcasts.\n[…]\nThe 1956 Summer Olympics featured 17 different sports encompassing 23 disciplines, and medals were awarded in 151 events (145 events in Melbourne and 6 equestrian events in Stockholm). In the list below, the number of events in each discipline is noted in parentheses.\n[…]\nNations that participated in the previous games in Helsinki 1952 but were absent in Melbourne 1956 included the People's Republic of China, Gold Coast (modern-day Ghana), Guatemala, Liechtenstein, Monaco, Netherlands Antilles, Panama, and Saar. Saar joined West Germany in 1957.\n[…]\n1956 Summer Olympics – Melbourne\n[…]\n\"Melbourne - Stockholm 1956\". Olympics.com. International Olympic Committee."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Equestrian_events_at_the_1956_Summer_Olympics",
        "situacao": "ok",
        "texto": "The equestrian events at the 1956 Summer Olympics were held in Stockholm due to the Australian quarantine regulations and included dressage, eventing, and show jumping. All three disciplines had both individual and team competitions. The competitions were held from 11 to 17 June 1956 at Stockholm Olympic Stadium.\n[…]\nAlthough Melbourne was awarded the 1956 Olympic Games, Australia had a strict six-month pre-shipment quarantine on horses. A meeting in 1953 by Australian federal authorities ruled that they would not change the quarantine laws for the Olympic horses. Therefore, the equestrian competition would not be able to be held in Australia. In 1954, the IOC selected Stockholm, Sweden, as the alternate venue for the equestrian events.\n[…]\nTherefore, the equestrian events were not only separated by city or country, but also continent, with the equestrian event being held in June (summer in the Northern Hemisphere) and the other sports held in November (late spring in the Southern Hemisphere).\n[…]\nFive nations competed in the equestrian events in Stockholm, but did not attend the Games in Melbourne:\n[…]\nEgypt and Cambodia did not compete in Melbourne due to the Suez Crisis, whilst Netherlands, Spain and Switzerland all boycotted the Australian event in protest at the Soviet invasion of Hungary."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jogos_Ol%C3%ADmpicos_de_Ver%C3%A3o_de_1956",
        "situacao": "ok",
        "texto": "Jogos Olímpicos de Verão de 1956 (em inglês: 1956 Summer Olympic Games), conhecidos oficialmente como os Jogos da XVI Olimpíada foram os primeiros Jogos Olímpicos a finalmente atravessarem a linha do Equador e instalarem-se no Hemisfério Sul, mais precisamente no Melbourne Cricket Ground, na cidade de Melbourne, capital do estado de  Vitória, Austrália, que foi eleita cidade-sede por apenas um vot\n[…]\nPela primeira vez uma das modalidades esportivas dos Jogos não foram realizadas nem na cidade nem no país anfitrião, com o hipismo sendo transferido para Estocolmo, Suécia, e disputado cinco meses antes de Melbourne, graças as severas leis australianas relativas à quarentena de animais que impediam a entrada de cavalos estrangeiros no país.\n[…]\nMelbourne foi escolhida como cidade-sede da XVI Olimpíada durante a 43ª sessão do Comitê Olímpico Internacional, realizada em 28 de abril de 1949 em Roma, Itália, superando as candidaturas de Buenos Aires, Cidade do México, e mais 6 candidaturas de cidades dos Estados Unidos: Los Angeles, Detroit, Chicago, Filadélfia, São Francisco e uma candidatura conjunta de St. Paul/Minneapolis.\n[…]\nAtletas de 67 Comitês Olímpicos Nacionais foram representadas em Melbourne. Bornéu do Norte (atual Estado de Sabá, na Malásia), Etiópia, Fiji, Libéria, Federação Malaia, Quênia e Uganda competiram pela primeira vez em Olimpíadas.\n[…]\nCinco CONs competiram apenas nos eventos equestres em Estocolmo, mas não enviaram atletas para Melbourne. Egito, Iraque e Líbano não competiram em Melbourne devido a Crise de Suez, enquanto Camboja (estreando em Jogos Olímpicos), Espanha, Países Baixos e Suíça boicotaram as disputas na Austrália em protesto contra a invasão soviética na Hungria.\n[…]\nNa lista abaixo, o número entre parênteses indica o número de atletas por cada nação nos Jogos:\n[…]\nOs seguintes CONs participaram apenas das competições de hipismo, em Estocolmo:",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Jogos Olímpicos de Verão de 1916",
      "descricao": "Edição dos Jogos Olímpicos prevista para 1916 e cancelada."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Os Jogos Olímpicos de 1916, cancelados por causa da Primeira Guerra Mundial, seriam realizados em que cidade?",
    "resposta": "Berlim",
    "fonte": [
      "https://en.wikipedia.org/wiki/1916_Summer_Olympics"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/1916_Summer_Olympics",
        "situacao": "ok",
        "texto": "The 1916 Summer Olympics (German: Olympische Sommerspiele 1916), officially known as the Games of the VI Olympiad (German: Spiele der VI. Olympiade), were scheduled to be held in Berlin, Germany, but they were cancelled due to the outbreak of World War I, the first time in the twenty-year history of the Games. Berlin was selected as the host city during the 14th IOC Session in Stockholm on 4 July \n[…]\nAfter the 1916 Games were cancelled, Berlin would eventually host the 1936 Summer Olympics, twenty years later.\n[…]\nBerlin returned to Olympic bidding in 1931, when it beat Barcelona, Spain, for the right to host the 1936 Summer Olympics, the last Olympics before the outbreak of World War II.\n[…]\nAt the beginning of 1914, there were fast preparations for the upcoming Olympic Games. First, they had to build the stadium, which took a very long time. After that, Carl Diem, General Secretary of the Organising Committee for the 1916 Games, had to focus on financing the games, which was difficult because the cost would come to about 1,321 million marks (US$738,902,671).\n[…]\nOn 8 August 1915, the stadium was reopened to hold \"war competitions\" in swimming and cycling, but on 10 February 1916, the Competition Committee of the DRAfOS finally got together again, not since the beginning of the war. They had decided that there would be small games that would take place to get different athletes a chance to compete.\n[…]\nDespite the efforts of Coubertin, Diem and many others, the official games had to be canceled and only resumed in 1920, after the end of the war. The Summer Olympics ultimately took place in Berlin in 1936, twenty years after they were supposed to happen, and eighteen years after the war had ended.\n[…]\nOlympic Games abandoned due to war\n[…]\n1916 Summer Olympics\n[…]\n1940 Summer Olympics\n[…]\n1940 Winter Olympics\n[…]\n1944 Summer Olympics\n[…]\n1944 Winter Olympics"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jogos_Ol%C3%ADmpicos_de_Ver%C3%A3o_de_1916",
        "situacao": "ok",
        "texto": "Os Jogos Olímpicos de 1916 (em alemão: Olympische Spiele 1916), conhecidos oficialmente como Jogos da VI Olimpíada, seriam os sextos Jogos Olímpicos da era moderna. Deveriam ser realizados em Berlim, capital das Alemanha entre 28 de maio e 10 de julho, o que não aconteceu, devido à Primeira Guerra Mundial.\n[…]\nEm maio de 1912, o Comité Olímpico Internacional escolheu Berlim como cidade organizadora dos Jogos da VI Olimpíada, em detrimento de Alexandria, Amesterdão, Bruxelas, Budapeste e Cleveland. Quando se iniciou a primeira guerra mundial, em 1914 os preparativos dos Jogos não foram interrompidos, pois não se previa que a guerra durasse tantos anos, mas o prolongamento do conflito tornou impossível a realização do evento.\n[…]\nIsso não foi bem visto pelo COI e várias cidades dos Estados Unidos se ofereceram para sediar o evento, incluindo Chicago, Nova Iorque, Newark, Cleveland, São Francisco e Filadélfia. Amesterdão se preparou para substituir os antigos anfitriões e adiar os Jogos para agosto e setembro. Em uma carta ao The New York Times em março de 1915, Coubertin admitiu que os Jogos Olímpicos de 1916 poderiam não ser realizados, mas não seriam removidos de Berlim.\n[…]\nTempos depois o evento foi cancelado, embora a data precisa de renúncia seja imprecisa.\n[…]\nBerlim foi selecionada por aclamação na 15.ª Sessão do COI em Estocolmo, em 4 de julho de 1912. Depois de Estocolmo retirar sua candidatura, um acordo de cavalheiros estava em vigor que praticamente prometia os Jogos Olímpicos de 1916 para Berlim. Alexandria e Budapeste fizeram ofertas, mas ambas se retiraram antes da Sessão do COI. Amesterdão, Bruxelas e Cleveland retiraram seus lances em seguida.\n[…]\nLista dos Jogos Olímpicos da Era Moderna",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Curling",
      "descricao": "Esporte de inverno em que se desliza uma pedra de granito no gelo até um alvo."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "O curling, hoje esporte olímpico de inverno, surgiu no século dezesseis em lagos congelados de que país?",
    "resposta": "Escócia",
    "fonte": [
      "https://en.wikipedia.org/wiki/Curling"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Curling",
        "situacao": "ok",
        "texto": "Curling is a sport in which players slide stones on a sheet of ice towards a target area that is segmented into four concentric circles. It is related to bowls, boules, and shuffleboard. Two teams, each with four players, take turns sliding heavy, polished granite stones, also called rocks, across the ice curling sheet towards the house, a circular target marked on the ice. Each team has eight sto\n[…]\nFor a more complete listing, see Glossary of curling terms.\n[…]\nMen with Brooms is a 2002 Canadian film that takes a satirical look at curling. A TV adaptation, also titled Men with Brooms, debuted in 2010 on CBC Television.\n[…]\nThe Corner Gas episode \"Hurry Hard\" involves the townspeople of Dog River competing in a local curling bonspiel for the fictitious \"Clavet Cup\". The episode also features cameos by Canadian curlers Randy Ferbey and Dave Nedohin.\n[…]\n\"Boy Meets Curl\" is a 2010 episode from The Simpsons: Homer and Marge form a mixed curling team with Agnes and Seymour Skinner, which is chosen to play in the 2010 Winter Olympics in Vancouver, where they win the gold medal.\n[…]\nThe 2014 Canadian drama film Sweeping Forward centres on a group of troubled young women who are recruited to train and compete as a curling team.\n[…]\nIn 2021, the sitcom The Great North aired the episode \"Curl Interrupted Adventure\" in which two characters join a curling league.\n[…]\nIn 2024, the CBC published a limited-run podcast, Broomgate: A Curling Scandal, which details the controversy that unfolded in 2015 and 2016.\n[…]\nWorld Curling Federation\n[…]\nCBC Digital Archives – Curling: Sweeping the Nation\n[…]\nBonspiel! The History of Curling in Canada at Library and Archives Canada\n[…]\ncurling stones, Smithsonian Center for Folklife and Cultural Heritage.\n[…]\nThe Game Of The Magic Broom, March 1944 one of the first magazine articles to introduce the game of curling to the American public\n[…]\nSportlistings.com - World Curling Federation Directory listing"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Curling",
        "situacao": "ok",
        "texto": "O Curling é um esporte olímpico coletivo praticado em uma pista de gelo cujo objetivo é lançar pedras de granito o mais próximo possível de um alvo, utilizando para isso a ajuda de varredores. O nome do esporte origina-se do verbo em inglês \"to curl\", que significa \"curvar\", e se deve ao fato de as pedras serem levemente giradas no ato do lançamento, descrevendo uma parábola em sua trajetória.\n[…]\nCriado por volta do século XVI na Escócia, o esporte teve as primeiras regras elaboradas em 1838. Disseminado pelo mundo através de imigrantes escoceses, o curling é hoje em dia praticado principalmente no Canadá. Em Jogos Olímpicos de Inverno, teve sua primeira aparição em Chamonix 1924, embora esta só tenha sido considerada oficial em 2006. Depois de três aparições como esporte de demonstração, o curling voltou ao programa olímpico em Nagano 1998, sendo disputado até os dias atuais.\n[…]\nO curling não tem origem exata, mas admite-se que é um dos esportes mais antigos do mundo. Pinturas do artista flamengo Pieter Bruegel retratam uma atividade semelhante ao curling atual sendo praticada sobre lagos congelados. Uma referência escrita em latim no ano de 1540 fala de um desafio entre John Sclater, um monge da Abadia de Paisley, na Escócia, e Hamilton Gavin, um representante do Abade.\n[…]\nTambém na Escócia foram encontradas, em Dunblane, pedras datadas de 1511 e 1551, outra evidência da origem do curling.\n[…]\nO primeiro clube de curling oficialmente constituído foi o Kilsyth Curling Club, de Kilsyth, Escócia, em 1716. As primeiras regras também foram elaboradas na Escócia e adotadas formalmente como as \"Regras do Curling\" pelo Grand Caledonian Curling Club, clube formado em Edimburgo em 1838 e que se tornou o órgão gestor do esporte.\n[…]\nComo exemplo, eis o resultado da final do torneio masculino de curling nos Jogos Olímpicos de Inverno de 2010 nos dois formatos:",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Revezamento da tocha olímpica",
      "descricao": "Percurso em que a chama olímpica é levada de Olímpia até a cidade-sede dos Jogos."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "O revezamento que leva a chama acesa em Olímpia até a cidade-sede foi feito pela primeira vez em que ano?",
    "resposta": "1936, em Berlim",
    "fonte": [
      "https://en.wikipedia.org/wiki/Olympic_flame"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Olympic_flame",
        "situacao": "ok",
        "texto": "The Olympic flame is a symbol used in the Olympic movement. It is also a symbol of continuity between ancient and modern games. The Olympic flame is lit at Olympia, Greece. This ceremony starts the Olympic torch relay, which formally ends with the lighting of the Olympic cauldron during the opening ceremony of the Olympic Games. The flame then continues to burn in the cauldron (or in a lantern as \n[…]\nWhen the idea of a symbolic fire was introduced during the 1928 Summer Olympics, an employee of the Electric Utility of Amsterdam lit the first symbolic flame in the Marathon Tower of the Olympic Stadium in Amsterdam. The Olympic flame and the Olympic torch relay was first introduced to the Summer Olympics at the 1936 Summer Olympics in Berlin by Carl Diem. The first ever torch-lighting ceremony was held in Olympia, Greece on July 20th, 1936.\n[…]\nThe Olympic torch relay, which transports the Olympic flame from Olympia, Greece to the various designated sites of the Games, had no ancient precedent and was introduced by Carl Diem at the 1936 Summer Olympics in Berlin, Germany.\n[…]\nFor the 2014 Winter Olympics in Sochi, Russia, the cauldron was situated directly outside Fisht Olympic Stadium, the ceremonial venue for the Games. After the torch's lap around the stadium, triple gold medalists Irina Rodnina and Vladislav Tretiak carried the torch outside the stadium to light a larger version of the \"celebration cauldron\" used in the main torch relay at the center of the Olympic Park.\n[…]\nBarney argued that the Olympic torch had been commercialized since its inception in 1936, and that sponsors of the torch relay benefit from brand awareness; whereas the medal podium ceremonies which began in 1932, had not become commercialized since no advertising is allowed inside Olympic venues.\n[…]\nUniversiade Torch, a torch relay associated with the Universiade\n[…]\nThe Nazi Olympics: Berlin 1936 – online exhibition"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Chama_Ol%C3%ADmpica",
        "situacao": "ok",
        "texto": "A Chama Olímpica ou Tocha Olímpica é um dos símbolos dos Jogos Olímpicos, e evoca a lenda de Prometeu que teria roubado o fogo da forja de Hefesto para o entregar aos mortais. Durante a celebração dos Jogos Olímpicos antigos, em Olímpia, mantinha-se aceso um fogo que ardia enquanto durassem as competições. Esta tradição foi reintroduzida nos Jogos Olímpicos de Verão de 1928.\n[…]\nNos Jogos Olímpicos de Verão de 1936, pela primeira vez ocorreu uma estafeta de atletas para transportar uma tocha com a chama, desde as ruínas do templo de Hera em Olímpia até ao Estádio Olímpico de Berlim.\n[…]\nEm 1936, nos Jogos Olímpicos de Berlim, Carl Diem concebeu a cerimónia do transporte da chama Olímpica desde o antigo local de realização dos Jogos em Olímpia na Grécia, até ao estádio onde se realizavam os Jogos. Mais de 3000 atletas realizaram uma estafeta para transportar a tocha desde Olímpia até Berlim, onde o corredor Fritz Schilgen acendeu a chama na cerimónia de abertura a 1 de Agosto. A estafeta da tocha passaria a fazer parte dos Jogos Olímpicos.\n[…]\nTambém nos Jogos Olímpicos de Inverno, a chama Olímpica ardeu nos Jogos de Inverno de 1936 e de 1948, mas a primeira estafeta da tocha teve lugar no Jogos de 1952. Nessa ocasião, o fogo não foi ateado em Olímpia mas sim em Morgedal, na Noruega, na lareira da casa de Sondre Norheim, que foi o pioneiro do desporto de esqui. Foi também aí que foi ateado o fogo nos Jogos Olímpicos de Inverno de 1960 e 1994.\n[…]\nEm Seul 1988, quem adentrou o Estádio Olímpico de Seul carregando a tocha foi Sohn Kee-chung, considerado o maior herói olímpico da história da Coreia do Sul. Em Berlim 1936, enquanto a Península da Coréia estava sob o domínio do Japão, Sohn foi obrigado a fazer parte da delegação japonesa, usando o nome de Kitei Son. Ganhou a medalha de ouro na maratona e no pódio abaixou a cabeça enquanto o Kimi ga Yo era tocado.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Equipe Olímpica de Refugiados",
      "descricao": "Delegação de atletas refugiados que compete nos Jogos Olímpicos sob a bandeira olímpica."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "A Equipe Olímpica de Refugiados, formada por atletas que fugiram de seus países, estreou em que edição dos Jogos?",
    "resposta": "Rio 2016",
    "fonte": [
      "https://en.wikipedia.org/wiki/Refugee_Olympic_Team"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Refugee_Olympic_Team",
        "situacao": "ok",
        "texto": "The Refugee Olympic Team is a group made up of independent Olympic participants who are refugees. In March 2016, International Olympic Committee (IOC) President Thomas Bach announced the creation of the Refugee Olympic Athletes Team, as a symbol of hope for all refugees in the world in order to raise global awareness of the scale of the migrant crisis in Europe. In September 2017, the IOC establis\n[…]\nAt the 2016 Summer Olympics, the team used the IOC country code ROT. At the 2020 Summer Olympics, it was changed to EOR (an abbreviation of the French Équipe olympique des réfugiés). As of 2026, no Refugee Olympic athletes had participated in the Winter Olympic Games, nor Youth Olympic Games (regardless of Summer or Winter).\n[…]\nAt its meeting in Buenos Aires in October 2018, the International Olympic Committee decided to establish the Refugee Olympic Team (EOR) for the 2020 Summer Olympics. This decision built on the legacy of the Refugee Olympic Team in 2016 and was part of the IOC's commitment to play its part in addressing the global refugee crisis and in carrying the message of solidarity and hope to millions of refugee athletes around the world.\n[…]\nThe 56 Refugee Athlete Scholarship holders include the 10 athletes who were part of the first Refugee Olympic Team in 2016, new individual athletes, and a group of athletes preparing at the Tegla Loroupe Refugee Training Center in Kenya. All were assisted by Olympic Solidarity as part of its support program for refugee athletes.\n[…]\nSwimmer Yusra Mardini, who competed in the 2016 Rio Games as part of the first-ever Refugee Olympic Team, and marathon runner Tachlowini Gabriyesos were selected as flag bearers for the IOC Refugee Olympic Team at the 2020 Tokyo Games.\n[…]\nRefugee Paralympic Team\n[…]\nRunbin Wang, Gan Li (2018). Practice, Implementation and Idea Advocacy of the Rio Refugee Olympic Team in the View of Global Governance"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Equipe_Ol%C3%ADmpica_de_Refugiados_nos_Jogos_Ol%C3%ADmpicos",
        "situacao": "ok",
        "texto": "Equipe Olímpica de Refugiados (português brasileiro) ou Equipa Olímpica de Refugiados (português europeu) é um grupo formado por participantes olímpicos independentes que são refugiados. Em março de 2016, o presidente do Comitê Olímpico Internacional (COI), Thomas Bach, anunciou a criação da \"Equipe de Atletas Olímpicos de Refugiados\", como um símbolo de esperança para todos os refugiados no mundo\n[…]\nEm setembro de 2017, o COI estabeleceu a Fundação Olímpica de Refugiados para apoiar refugiados a longo prazo.\n[…]\nA bandeira olímpica e o hino olímpico são usados ​​como símbolos da equipe. Os atletas participantes marcharam na cerimônia de abertura dos Jogos Olímpicos de Verão de 2016, onde a equipe competiu pela primeira vez, entrando no estádio como a penúltima delegação, pouco antes do país anfitrião. Nas Olimpíadas de Verão de 2020 e 2024, a equipe entrou no estádio em segundo lugar, depois da Grécia.\n[…]\nEm 2016, a equipe usou o código de país do COI \"ROT\" (uma abreviação do inglês Refugee Olympic Team). Nos Jogos Olímpicos de 2020, foi alterado para EOR (do francês Équipe Olympique des Réfugiés). Nenhum atleta olímpico refugiado participou dos Jogos Olímpicos de Inverno, nem dos Jogos Olímpicos da Juventude.\n[…]\nCindy Ngamba se tornou a primeira pessoa a ganhar uma medalha olímpica para a Equipe Olímpica de Refugiados, após obter o bronze na categoria até 75 kg feminino do boxe nos Jogos Olímpicos de Verão de 2024.\n[…]\nKimia Alizadeh, que representou a Equipe Olímpica de Refugiados em 2020, ganhou o bronze no Campeonato Europeu de Taekwondo de 2022 representando a Equipe de Refugiados, após ser bronze pelo Irã nos Jogos Olímpicos de Verão de 2016 e antes de ganhar o bronze pela Bulgária nos Jogos Olímpicos de Verão de 2024.\n[…]\n«Equipe Olímpica de Refugiados» (em inglês). no site Olympics.com",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Jogos Olímpicos da Antiguidade",
      "descricao": "Festival esportivo e religioso realizado no santuário de Olímpia, na Grécia Antiga."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Segundo a data tradicional, em que ano antes de Cristo foram disputados os primeiros Jogos em Olímpia, na Grécia?",
    "resposta": "776 antes de Cristo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ancient_Olympic_Games"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ancient_Olympic_Games",
        "situacao": "ok",
        "texto": "The ancient Olympic Games (Ancient Greek: τὰ Ὀλύμπια, ta Olympia), or the ancient Olympics, were a series of athletic competitions among representatives of city-states and one of the Panhellenic Games of ancient Greece. They were held at the Panhellenic religious sanctuary of Olympia, in honor of Zeus, and the Greeks gave them a mythological origin. The originating Olympic Games are traditionally \n[…]\nAristotle reckoned the date of the first Olympics to be 776 BC, a date largely accepted by most, though not all, subsequent ancient historians. To this day, this is the conventional given date for the inception of the ancient Olympics and, while this specific date of origin cannot be verified, it is generally accepted that the games date from some time in the eighth century BC. Archaeological finds confirm, approximately, the Olympics starting at or soon after this time.\n[…]\nVarastades (boxing, Prince and future King of Armenia, last known ancient Olympic victor (boxing) during the 291st Olympic Games in the 4th century)\n[…]\nLee, Hugh M. 2001. The Program and Schedule of the Ancient Olympic Games. Nikephoros Beihefte 6. Hildesheim, Germany: Weidmann.\n[…]\nValavanis, Panos. 2004. Games and Sanctuaries in Ancient Greece: Olympia, Delphi, Isthmia, Nemea, Athens. Los Angeles: J. Paul Getty Museum.\n[…]\nSwaddling, Judith. 1984. The Ancient Olympic Games. Austin: University of Texas.\n[…]\nThe Ancient Olympic Games virtual museum (requires registration)\n[…]\nThe Ancient Olympics: A special exhibit\n[…]\nThe story of the Ancient Olympic Games Archived 1 May 2008 at the Wayback Machine\n[…]\nWebquest The ancient and modern Olympic Games\n[…]\nGoddess Nike and the Olympic Games: Excellence, Glory and Strife\n[…]\nAncient Olympic Games: Ancient Events Archived 12 May 2021 at the Wayback Machine\n[…]\nThe Games Odyssey podcast: The OG Olympic Games, Pt. 1: Ancient Origins\n[…]\nThe Games Odyssey podcast: The OG Olympic Games, Pt. 2: Eternal Glory"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jogos_Ol%C3%ADmpicos_da_Antiguidade",
        "situacao": "ok",
        "texto": "Os Jogos Olímpicos da Antiguidade eram um festival religioso e atlético da Grécia Antiga, que se realizava de quatro em quatro anos no santuário de Olímpia, em honra de Zeus. A data tradicional atribuída à primeira edição dos Jogos Olímpicos é 776 a.C..\n[…]\nSegundo algumas versões, Zeus derrotou Cronos em Olímpia, mas outras versões dizem que ele celebrou lá jogos para comemorar sua vitória. O campeão de vitórias entre os deuses foi Apolo, que venceu Hermes na corrida e Ares no pugilismo; por este motivo, a flauta é tocada quando os competidores do pentatlo estão na prova de salto, pois a flauta é sagrada a Apolo.\n[…]\nNo ano em que se celebrariam os jogos, Élide enviava por toda a Grécia arautos que anunciavam a data concreta em que se desenrolariam os jogos e que convidavam os atletas e os espectadores a participar. Os arautos anunciavam também a trégua sagrada, que proibia a guerra durante o período dos jogos e que visava proteger os espectadores e atletas durante vinda, estadia e regresso.\n[…]\nEste tipo de prova incluía as corridas de bigas ou de cavalo de sela. Nas primeiras poderiam usar-se dois cavalos (bigas) ou quatro cavalos (quadrigas). As quadrigas teriam sido introduzidas nos Jogos Olímpicos pela primeira vez em 680 a.C. e as corridas de cavalo de sela em 648 a.C.. Uma corrida de carros consistia em doze voltas ao hipódromo, tendo cada volta entre 823 e 914 metros; a corrida de cavalo era uma volta do hipódromo.\n[…]\n776 a.C.: Estádio (stadio)\n[…]\nCerimonias no santuário de Pélops, identificado pela tradição como o primeiro vencedor dos jogos. Reconstituição das suas cerimônias fúnebres.\n[…]\nJogos Nemeus\n[…]\nSwaddling, Judith (2000). The Ancient Olympic Games. Texas: University of Texas Press. ISBN 0292777515\n[…]\nOs Jogos Olímpicos na Grécia Antiga",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Polo aquático",
      "descricao": "Esporte coletivo disputado na piscina, com gols nas extremidades."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "No polo aquático, quantos jogadores cada equipe mantém dentro da piscina, contando o goleiro?",
    "resposta": "Sete",
    "fonte": [
      "https://en.wikipedia.org/wiki/Water_polo"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Water_polo",
        "situacao": "ok",
        "texto": "Water polo is a competitive team sport played in water between two teams of seven players each. The game consists of four quarters in which the teams attempt to score goals by throwing the ball into the opposing team's goal. The team with more goals at the end of the game wins the match. Each team is made up of six field players and one goalkeeper. Excluding the goalkeeper, players participate in \n[…]\nThe rules of water polo were originally developed in the late nineteenth century in Great Britain by William Wilson. Wilson is believed to have been the First Baths Master of the Arlington Baths Club in Glasgow. The first games of 'aquatic football' were played at the Arlington in the late 19th century (the club was founded in 1870), with a ball constructed of India rubber. This \"water rugby\" came to be called \"water polo\" based on the English pronunciation of the Balti word for ball, pulu.\n[…]\nGoverning bodies of water polo include World Aquatics, the international governing organization; European Aquatics, which governs international European matches; the NCAA, which governs collegiate matches in the United States; the NFHS, which governs high schools in the US, and the IOC, which governs Olympic events.\n[…]\n4x4 water polo is a variation involving a smaller field of play and only 4 active players at a time from each team. International play and world championships for 4x4 water polo are administered by World Aquatics.\n[…]\nEvery 2 to 4 years since 1973, a men's Water Polo World Championship is organized within the FINA World Aquatics Championships. Women's water polo was added in 1986. A second tournament series, the FINA Water Polo World Cup, has been held every other year since 1979. In 2002, FINA organised the sport's first international league, the FINA Water Polo World League.\n[…]\nThere is also a World Club Water Polo Challenge.\n[…]\nWater polo | fina.org – Official FINA website"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Polo_aqu%C3%A1tico",
        "situacao": "ok",
        "texto": "O polo aquático (pré-AO 1990: pólo aquático) é um desporto coletivo, semelhante no princípio básico do handebol. As equipes devem tentar jogar a bola dentro da baliza adversária, defendida pelo guarda-redes, mas é praticado dentro de uma piscina.\n[…]\nDiferentemente do futebol, onde não há limite de tempo, no polo aquático as equipes devem executar as suas jogadas em 30 segundos. O jogo é dividido em quatro partes de 8 minutos de tempo útil (o tempo para sempre que a bola sai dos limites da piscina, um técnico ou capitão pede tempo, ocorre alguma falta, ou um dos árbitros assinala alguma coisa com o apito).\n[…]\nO polo aquático é um esporte coletivo praticado em piscina e disputado por duas equipas. Este esporte foi criado no século XIX (por volta de 1870), na cidade de Londres (Inglaterra). Porém, há relatos que indicam que o esporte era praticado desde o século XVIII, principalmente na Inglaterra e na Escócia. Recebeu o nome de \"polo\", já que os primeiros jogadores atuavam montados em barris que pareciam cavalos e acertavam a bola com uma marreta.\n[…]\nAs equipes são formadas por 14 jogadores. Jogam 7 jogadores de cada equipe sendo um guarda-redes e seis jogadores de linha que podem ser substituídos durante o desenrolar da partida, durante pedidos de tempo ou quando for gol. Seis jogadores são os suplentes que podem entrar durante o desenrolar da partida, substituindo jogadores que estavam em jogo.\n[…]\nA competição de polo aquático mais importante é a Liga Mundial. O Campeonato Mundial, outra competição importante do calendário deste desporto, é realizado a cada dois anos. A Fina também realiza, a cada 4 anos, o Campeonato do Mundo de Polo Aquático. O polo aquático também faz parte do quadro de desportos dos Jogos Olímpicos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Medalha olímpica",
      "descricao": "Medalha de ouro, prata ou bronze entregue aos três primeiros colocados de cada prova olímpica."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Desde 1912, as medalhas de ouro olímpicas não são maciças. Elas são feitas, em sua maior parte, de que metal?",
    "resposta": "Prata",
    "distratores": [
      "Ouro",
      "Bronze",
      "Cobre"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Olympic_medal"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Olympic_medal",
        "situacao": "ok",
        "texto": "An Olympic medal is an honorary medal that is awarded to successful competitors at one of the Olympic Games. There are three classes of medal to be won: gold, silver, and bronze, awarded to first, second, and third place, respectively. The granting of awards is laid out in detail in the Olympic protocols.\n[…]\nFirst place (the gold medal): It is composed at least 92.5% of silver, plated with 6 grams of gold; the metal value was about US$494 in 2010. At the 2020 Summer Olympics held in 2021 in Tokyo, Japan, the medal at then-current prices was worth about $800.\n[…]\nNike was featured on the medals of the 1932 and 1936 Games but has only appeared on one medal design since then. One regular motif is the use of the snowflake, while laurel leaves and crowns appear on several designs. The Olympic motto Citius, Altius, Fortius features on four Winter Games medals but does not appear on any Summer Games medal.\n[…]\nFor three events in a row, hosts of the Winter Games included different materials in the medals: glass (1992), sparagmite (1994), and lacquer (1998). It was not until the 2008 Summer Olympics in Beijing, China that a Summer Olympic host chose to use something different, in this case, jade. While every Summer Olympic medal except for the 1900 Games has been circular, the shapes of the Winter Games have been considerably more varied.\n[…]\nAt the 1960 Summer Olympics, competitors in the Stadio Olimpico received their medals immediately after each event for the first time; competitors at other venues came to the Stadio Olimpico the next day to receive their medals. Later Games have had a victory podium at each competition venue.\n[…]\nWinter Olympic coins\n[…]\nPierre de Coubertin Medal, a special medal awarded by the International Olympic Committee for sportsmanship or exceptional service to the Olympic movement"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Jogos Olímpicos de Verão de 2020",
      "descricao": "Edição dos Jogos Olímpicos realizada em Tóquio, adiada para 2021."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "As medalhas dos Jogos de Tóquio 2020 foram feitas com metal reciclado de que objetos doados pela população japonesa?",
    "resposta": "Celulares e outros eletrônicos",
    "fonte": [
      "https://en.wikipedia.org/wiki/2020_Summer_Olympics"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/2020_Summer_Olympics",
        "situacao": "ok",
        "texto": "The 2020 Summer Olympics, officially the Games of the XXXII Olympiad and officially branded as Tokyo 2020, were an international multi-sport event held from July 23 to August 8, 2021, in Tokyo, Japan, with some of the preliminary sporting events beginning on July 21, 2021.\n[…]\nThe 2020 Summer Olympics podiums were made from plastic waste donated by the Japanese population. Artist Asao Tokolo was tasked with their design, which was produced using 3D printing technology with 400,000 laundry detergent bottles (24.5 tons) collected from stores and schools across the country for over nine months.\n[…]\nThe official emblems for the 2020 Olympics and Paralympics were unveiled on April 25, 2016; designed by Asao Tokolo, who won a nationwide design contest, it takes the form of a ring in an indigo-colored checkerboard pattern. The design was meant to \"express a refined elegance and sophistication that exemplifies Japan\". The checkered design resembles a pattern called ichimatsu moyo that was popular during the Edo period in Japan from 1603 to 1867.\n[…]\nThe Olympic Games Tokyo 2020 reached a global broadcast audience of 3.05 billion people, according to independent research conducted on behalf of the International Olympic Committee (IOC).\n[…]\nSony and Panasonic partnered with NHK to develop broadcasting standards for 8K resolution television, with a goal to release 8K television sets in time for the 2020 Summer Olympics. In early 2019, Italian broadcaster RAI announced its intention to deploy 8K broadcasting for the Games. NHK broadcast the opening and closing ceremonies, and coverage of selected events in 8K.\n[…]\n2020 Summer Paralympics\n[…]\n2020 Summer Olympics – Tokyo\n[…]\nList of LGBTQ Summer Olympians (2004–2020)\n[…]\n\"Tokyo 2020\". Olympics.com. International Olympic Committee."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jogos_Ol%C3%ADmpicos_de_Ver%C3%A3o_de_2020",
        "situacao": "ok",
        "texto": "Jogos Olímpicos de Verão de 2020 (japonês: 2020年夏季オリンピック;, Hepburn: Nisen Nijū-nen Kaki Orinpikku), conhecidos oficialmente como os Jogos da XXXII Olimpíada, mais comumente Tóquio 2020, foi um evento multiesportivo realizado durante o verão de 2021 devido à pandemia de COVID-19, na região metropolitana de Tóquio, Japão. A escolha da sede foi feita durante a 125ª Sessão do Comitê Olímpico Internaci\n[…]\nRespeitando uma das medidas propostas pela Agenda 2020 do COI, em que é solicitado o uso de materiais alternativos para a fabricação de materiais institucionais dos Jogos, o Comitê Organizador de Tóquio anunciou em fevereiro de 2017 que estaria implementando um programa de reciclagem de eletrônicos em parceria com o Centro de Saneamento Ambiental do Japão e a NTT DoCoMo.\n[…]\nCom esta campanha, as empresas estavam solicitando doações de diversos produtos eletrônicos para serem usados como o material base para a produção das medalhas. A meta da campanha era a de conseguir mais de oito toneladas de celulares. Postos de coletas foram colocados em diversos locais de grande circulação como rodoviárias, shoppings, supermercados, além das principais lojas da operadora. Um concurso nacional foi aberto para a escolha do design das medalhas foi aberto em dezembro de 2017.\n[…]\nEm 20 de março de 2020, a Confederação dos Esportes e Comitê Olímpico e Paralímpico Norueguês enviou uma carta ao Comitê Olímpico Internacional solicitando o adiamento dos Jogos Olímpicos para 2021, já que existe a possibilidade que até lá a pandemia esteja controlada. Pedidos de adiamento também vieram dos Comitês Olímpicos Nacionais da Espanha e da Itália, sob as alegações de que os seus atletas não estariam em condições de competir em igualdade com os de outros países.\n[…]\nLista dos jogos olímpicos da era moderna\n[…]\nJogos Olímpicos de Verão de 1964\n[…]\n«Página do COI sobre os Jogos Olímpicos de Tóquio 2020» (em inglês e francês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Goalball",
      "descricao": "Esporte paralímpico coletivo para atletas com deficiência visual, jogado com uma bola sonora."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No goalball, esporte paralímpico para atletas com deficiência visual, o que vai dentro da bola para que ela possa ser ouvida?",
    "resposta": "Guizos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Goalball"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Goalball",
        "situacao": "ok",
        "texto": "Goalball is a team sport designed specifically for athletes with a vision impairment. Participants compete in teams of three, and try to throw a ball with bells embedded inside it into the opponents' goal. The ball is thrown by hand and never kicked. Using ear–hand coordination, originating as a rehabilitation exercise, the sport has no able-bodied equivalent. Sighted athletes are also blindfolded\n[…]\nGoalball was originally devised in 1946 by Hans Lorenzen, a German who later taught at German Sport University Cologne, and Sepp Reindle, an Austrian, as a means of assisting the rehabilitation of visually impaired World War II veterans.\n[…]\nGoalball is played at the Paralympic Games. The number of participating teams has changed over the decades, but for the Paris 2024 Paralympic Games, this was reduced from ten to eight teams per division by the International Paralympic Committee. For the IBSA-sanctioned tournaments, athletes must have a visual impairment classification of B1, B2, or B3.\n[…]\nIn 2006, the animated series Bernard produced a three-minute clip, featuring Eva the penguin introducing the titular polar bear to goalball.\n[…]\nIn 2018 and 2024, the sport was featured in the  anime Ani x Para: Anata no Hero wa Dare desu ka. Characters played a match of goalball: KochiKame in the fourth, and Welcome to Demon School! Iruma-kun in the eighteenth. Goalball was featured in episodes 10–12 of the 2020 Japanese anime Breakers, to promote the 2020 Summer Paralympics.\n[…]\nGoalball at the Summer Paralympics\n[…]\nWorld Goalball Championships – International sport tournamentPages displaying short descriptions of redirect targets\n[…]\nGoalball at the International Paralympic Committee (IPC)\n[…]\n2008 Paralympic Goalball at the Wayback Machine (archived 23 July 2008)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Golbol",
        "situacao": "ok",
        "texto": "O Golbol (grafia alternativa Goalball, ou Goblos) é um desporto coletivo com bola, praticado por atletas que possuem deficiência visual. Foi inventado em 1946 pelo austríaco Hanz Lorenzen e pelo alemão Sett Reindle. O objetivo do jogo é arremessar uma bola com as mãos de modo a que a bola entre na baliza do adversário. Cada equipa deve jogar com três jogadores e três reservas, sendo obrigatório o \n[…]\nA percepção da posição da bola é feita usando os sentidos do tato e audição. As linhas do chão são o motivo do jogo em que o tato prevalece. A bola possui guizos para uso da audição, e assim os praticantes podem saber em que direção a bola se move. É um jogo que requer muita concentração, e por isso o silêncio dos espectadores e da equipa é de extrema importância para o jogo.\n[…]\nO Goalball foi inventado na Europa há mais de cinquenta anos, e foi criado como desporto, mas também como forma de reabilitação, por Hanz Lorenzen (austríaco) e Sett Reindle (alemão), em 1946. O Goalball, ao contrário de outras modalidades desportivas, não foi adaptado de nenhuma outra praticada por atletas sem deficiência.\n[…]\nNesta modalidade os atletas deficientes visuais das classes 1, 2 e 3, competem juntos, ou seja, do atleta completamente cego até os que possuem alguma percepção, para que não haja trapaça, eles colocam uma venda nos olhos.\n[…]\nÉ sempre lançada com as mãos, é de borracha natural, mede cerca de 24-25cm de diâmetro por 75,5-78,5cm de circunferência, pesando 1.250-+/-0.50gr, é oca, possui dois guizos no seu interior e oito orifícios (quatro no hemisfério superior e outros quatro no inferior), cada qual de aproximadamente 1 centímetro de diâmetro, para que os jogadores a possam localizar, quando se encontre em movimento.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Abebe Bikila",
      "descricao": "Maratonista etíope, campeão olímpico da maratona em Roma 1960 e Tóquio 1964."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Na maratona de Roma 1960, o etíope Abebe Bikila conquistou o ouro de um jeito que ficou para a história. Como ele correu?",
    "resposta": "Descalço",
    "fonte": [
      "https://en.wikipedia.org/wiki/Abebe_Bikila"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Abebe_Bikila",
        "situacao": "ok",
        "texto": "Shambel Abebe Bikila (Amharic: ሻምበል አበበ ቢቂላ; August 7, 1932 – October 25, 1973) was an Ethiopian marathon runner who was a back-to-back Olympic marathon champion. He was the first Ethiopian Olympic gold medalist, winning his first gold medal at the 1960 Summer Olympics in Rome while running barefoot. At the 1964 Tokyo Olympics, he won his second gold medal, making him the first athlete to successf\n[…]\nIn July 1960, Abebe won his first marathon in Addis Ababa. A month later he won again in Addis Ababa with a time of 2:21:23, which was faster than the existing Olympic record held by Emil Zátopek. Niskanen entered Abebe Bikila and Abebe Wakgira in the marathon at the 1960 Rome Olympics, which would be run on September 10. In Rome, Abebe purchased new running shoes, but they did not fit well and gave him blisters. He consequently decided to run barefoot instead.\n[…]\nAbebe received the Order of Menelik II, a Volkswagen Beetle and a house.\n[…]\nFive years after his death, the New York Road Runners inaugurated the annual Abebe Bikila Award for contributions by an individual to long-distance running. East African recipients include Mamo Wolde, Juma Ikangaa, Tegla Loroupe, Paul Tergat, and Haile Gebrselassie.\n[…]\nThe other two, also written in English, are Paul Rambali's 2007 fictional biographical novel Barefoot Runner and Tim Judah's 2009 Bikila: Ethiopia's Barefoot Olympian. According to the journalist Tim Lewis's comparative review of the two books, Judah's is a more journalistic, less-forgiving biography of Abebe. It refutes the mythical aspects of his life but recognises Abebe's athletic accomplishments.\n[…]\nAbebe Bikila at Olympics.comAbebe Bikila at Olympic.org (archived)\n[…]\nAbebe Bikila at Olympedia\n[…]\nVideo tribute to Abebe Bikila on YouTube\n[…]\nVideo footage of Abebe Bikila on YouTube at the 1960 Summer Olympics"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Abebe_Bikila",
        "situacao": "ok",
        "texto": "Abebe Bikila (Jato, 7 de agosto de 1932 – Adis Abeba, 25 de outubro de 1973) foi um maratonista etíope, filho de um pastor de ovelhas do interior da Etiópia e capitão da guarda real do imperador Hailé Selassié. Foi o primeiro homem a vencer duas maratonas olímpicas e é considerado por muitos especialistas como o maior maratonista de todos os tempos. Em 2012, foi imortalizado no Hall da Fama do atl\n[…]\nEm 1960, Bikila foi incluído na equipe de atletismo apenas no último momento, quando o avião já se preparava para partir para Roma, no lugar de outro atleta, Wami Biratu, que havia quebrado o tornozelo durante uma partida de futebol. Niskanen resolveu inscrever Bikila e Abebe Wakgira na disputa da maratona.\n[…]\nA Adidas, patrocinadora oficial dos Jogos Olímpicos de 1960, tinha apenas poucos pares disponíveis quando Bikila foi experimentar um deles para usar na corrida. Nenhum deles o deixava confortável e ele então resolveu correr descalço, a mesma maneira como sempre tinha treinado. Seu técnico, Niskanen, o havia advertido sobre os concorrentes mais fortes que iria encontrar, especificamente um corredor do Marrocos, Rhadi Ben Abdesselam, que deveria estar usando o número 26.\n[…]\nApós a corrida, entrevistado e perguntado porque havia corrido descalço, Bikila respondeu que \"queria que o mundo soubesse que meu país, a Etiópia, sempre tinha conseguido suas vitórias com heroísmo e determinação\".\n[…]\nBikila voltou à Etiópia como herói nacional. No ditado popular, a frase mais falada na época era que 'foram necessários um milhão de soldados italianos para invadir a Etiópia, mas apenas um soldado etíope para conquistar Roma\". Foi promovido a cabo e condecorado pelo imperador Haile Selassie.\n[…]\nBikila retornou novamente como herói nacional à Etiópia e foi novamente promovido pelo imperador, ganhando de presente um carro próprio, um fusca.\n[…]\nLista de campeões olímpicos da maratona",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Cabo de guerra nos Jogos Olímpicos",
      "descricao": "Modalidade de força entre duas equipes que fez parte do programa olímpico de 1900 a 1920."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Que brincadeira comum em gincanas, em que duas equipes medem força, fez parte dos Jogos Olímpicos de 1900 a 1920?",
    "resposta": "Cabo de guerra",
    "fonte": [
      "https://en.wikipedia.org/wiki/Tug_of_war_at_the_Summer_Olympics"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tug_of_war_at_the_Summer_Olympics",
        "situacao": "ok",
        "texto": "Tug of war was contested as a team event in the Summer Olympics at the Games of every Olympiad from 1900 to 1920. Originally the competition was entered by groups called clubs. A country could enter more than one club in the competition, making it possible for one country to earn multiple medals. This happened in 1904, when the United States won all three medals, and in 1908 when the podium was oc\n[…]\nDuring its time as an Olympic sport, it was considered to be part of the Olympic athletics programme, although the sports of tug of war and athletics are now considered distinct.\n[…]\nAfter the 1920 Games, the International Olympic Committee decided to streamline the Olympic program to manage the number of sports and participants. As part of this effort, Tug of War and several other sports were removed from the Olympic program in the following years.\n[…]\nTeams consisted of 6 members in 1900, 5 members in 1904, and 8 members in 1908, 1912, and 1920.\n[…]\nIn 1900, three Danish pullers and three Swedish pullers competed together as a mixed team, winning first place; the same year, one Colombian puller joined five French pullers in a mixed team that won second place. In 1904, a mixed team of one German puller and 4 United States pullers won third place.\n[…]\nList of Olympic venues in discontinued events"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cabo_de_guerra_nos_Jogos_Ol%C3%ADmpicos",
        "situacao": "ok",
        "texto": "Cabo de guerra(pt-BR) ou jogos de corda(pt-PT?) foi uma modalidade esportiva por equipes disputada nos Jogos Olímpicos entre as edições de 1900, em Paris, e 1920, em Antuérpia.\n[…]\nSem o critério de atletas defendendo seus respectivos países, inicialmente o cabo de guerra era disputado por clubes, tornando possível a um mesmo país conquistar mais de uma medalha. Isso aconteceu em 1904, quando os Estados Unidos conquistaram os três primeiros lugares, e em 1908, quando o pódio foi ocupado apenas por equipes britânicas. Apenas homens participaram na modalidade.",
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
