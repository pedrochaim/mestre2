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
      "nome": "Queda do Império Romano do Ocidente",
      "descricao": "Fim do poder imperial romano no Ocidente, marcado pela deposição de Rômulo Augusto pelo chefe germânico Odoacro."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "O início da Idade Média costuma ser marcado pela deposição de Rômulo Augusto, último imperador romano do Ocidente. Em que ano isso aconteceu?",
    "resposta": "476",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Queda_do_Império_Romano_do_Ocidente",
      "https://en.wikipedia.org/wiki/Fall_of_the_Western_Roman_Empire"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Queda_do_Império_Romano_do_Ocidente",
        "situacao": "ok",
        "texto": "Queda do Império Romano do Ocidente (também chamada de Queda do Império Romano ou Queda de Roma) foi o processo de declínio do Império Romano do Ocidente, quando ele não conseguiu mais impor seu domínio e seu vasto território foi dividido em várias comunidades políticas sucessoras. O Império Romano perdeu as forças que permitiram-lhe exercer um controle efetivo de grande parte da Europa, do Norte \n[…]\nPor 476, quando Odoacro depôs o imperador Rómulo Augusto, o Imperador Romano do Ocidente exercia poder militar, político ou financeiro insignificante e não tinha o controle efetivo sobre os dispersos domínios ocidentais que ainda poderiam ser descritas como romanos.\n[…]\nPelo menos desde o tempo de Henri Pirenne, estudiosos têm descrito a continuidade da cultura e da legitimidade política romanas, muito tempo depois de 476. Pirenne adiou o fim da civilização clássica ao século VIII. Ele desafiou a noção de que os povos germânicos causaram o fim do Império Romano do Ocidente e se recusou a equiparar o fim do Império Romano do Ocidente com o fim do cargo de imperador em Itália.\n[…]\nQuando o último imperador romano do Ocidente, Rômulo Augusto, foi deposto em 476, por um grupo de mercenários, poucos territórios (e tropas) restavam ao seu serviço. Os comandantes e chefes que tentavam manter o Estado Romano nos últimos anos também eram, na maioria dos casos, de origem bárbara. Só faltava que um decidisse tomar a púrpura, coisa que não sucedeu.\n[…]\nOs aliados de Orestes (hérulos e rúgios) depois se desentenderam com seu patrono e, sob as ordens de Odoacro, depuseram Rômulo Augústulo. Observa-se que a deposição do último imperador não foi um acontecimento repentino e que trouxesse mudança social drástica, mas sim foi o resultado de um longo processo que se desenrolava há quase um século.\n[…]\nIdade Média\n[…]\nLegado romano"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Fall_of_the_Western_Roman_Empire",
        "situacao": "ok",
        "texto": "The fall of the Western Roman Empire, also called the fall of the Roman Empire or the fall of Rome, was the loss of central political control in the Western Roman Empire, a process in which the Empire failed to enforce its rule, and its vast territory was divided among several successor polities.\n[…]\nIn 476, the Germanic barbarian king Odoacer deposed the last emperor of the Western Roman Empire in Italy, Romulus Augustulus, and the Senate sent the imperial insignia to the Eastern Roman emperor Zeno.\n[…]\nGibbon was uncertain about when decline began. \"In the first paragraph of his text, Gibbon wrote that he intended to trace the decline from the golden age of the Antonines\"; later text has it beginning about A.D. 180 with the death of Marcus Aurelius; while in chapter 7, he pushes the start of the decline to about 52 B.C., the time of Julius Caesar and Pompey and Cicero. Gibbon placed the western empire's end with the removal of the man Gibbon referred to as \"the helpless Augustulus\" in 476.\n[…]\nAs one convenient marker for the end, 476 has been used since Gibbon, but other key dates for the fall of the Roman Empire in the West include the Crisis of the Third Century, the Crossing of the Rhine in 406 (or 405), the sack of Rome in 410, and the death of Julius Nepos in 480.\n[…]\nBy convention, the Western Roman Empire is deemed to have ended on 4 September 476, when Odoacer deposed Romulus Augustulus and proclaimed himself ruler of Italy. This convention is subject to many qualifications. In Roman constitutional theory, the Empire was still simply united under one emperor, implying no abandonment of territorial claims.\n[…]\nComparative studies of the Roman and Han empires\n[…]\nDecline of the Byzantine Empire (Fall of the Eastern Roman Empire)\n[…]\nHistoriography of the fall of the Western Roman Empire"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Maomé",
      "descricao": "Profeta do islamismo, nascido em Meca e morto em Medina em 632."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "O profeta Maomé, figura central do islamismo, nasceu na cidade de Meca por volta de que século?",
    "resposta": "Século seis",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Maomé",
      "https://en.wikipedia.org/wiki/Muhammad"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Maomé",
        "situacao": "ok",
        "texto": "Maomé, em árabe مُحَمَّدُ, Muḥammad, também chamado Muhammad ou Mohammed, foi um líder religioso, político e militar árabe da tribo dos Coraixitas. Sua pregação deu origem ao islã, e a primeira comunidade muçulmana viveu sob sua liderança em Medina. Na tradição islâmica, ele nasceu em Meca, por volta de 570, e morreu em Medina, em 632.\n[…]\nEm 628, Maomé partiu em peregrinação a Meca com um grupo estimado pela tradição em 1.400 pessoas. Apresentou-se como peregrino em paz, mas os habitantes da cidade recusaram o acesso ao santuário. As duas partes assinaram então a trégua de Hudaibia. A inclusão da peregrinação no culto islâmico preservou o movimento de peregrinos e sua importância econômica para Meca. Também reduziu a oposição das elites coraixitas, e figuras como Calide ibne Alualide e Anre ibne Alás aderiram a Maomé.\n[…]\nRelatos religiosos escritos muito antes da medicina moderna não permitem diagnosticar Maomé retrospectivamente com epilepsia, esquizofrenia ou qualquer outra condição. As interpretações psicológicas dizem mais sobre a história dessas leituras do que sobre um diagnóstico clínico. Elas costumam partir de dois elementos da biografia tradicional. Maomé teria ficado órfão aos seis anos e se casado com Cadija por volta dos 25, permanecendo monogâmico até a morte dela.\n[…]\nGrande parte da arte islâmica prefere a abstração e evita o retrato. Artistas da Pérsia, Índia, Ásia Central e Turquia ainda assim retrataram Maomé em épocas diferentes, sob costumes locais. Poucas cenas o retratam sozinho. As cenas narram uma ação ou um episódio de sua vida, e nem todas lhe dão uma figura humana.\n[…]\nImaginava que, sem a obrigação de reconhecer Maomé como profeta, o teísmo islâmico, centrado num Deus todo-poderoso, seria tão puro quanto a religião racional que admirava na China.\n[…]\nCaaba, santuário de Meca presente em sua pregação."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Muhammad",
        "situacao": "ok",
        "texto": "Muhammad (c. 570 CE – 8 June 632 CE) was an Arab religious, military, and political leader, and the founder of Islam. According to Islam, he was the final prophet of God who was divinely inspired to preach and confirm the monotheistic teachings of Adam, Noah, Abraham, Moses, Jesus, and other prophets in Islam. He is believed by Muslims to be the Seal of the Prophets, and along with the Quran, his \n[…]\nMuhammad's message transformed society and moral orders of life in the Arabian Peninsula; society focused on the changes to perceived identity, worldview, and the hierarchy of values. Economic reforms addressed the plight of the poor, which was becoming an issue in pre-Islamic Mecca. The Quran requires payment of an alms tax (zakat) for the benefit of the poor; as Muhammad's power grew he demanded that tribes who wished to ally with him implement the zakat in particular.\n[…]\nIan Almond says that German Romantic writers generally held positive views of Muhammad: \"Goethe's 'extraordinary' poet-prophet, Herder's nation builder (...) Schlegel's admiration for Islam as an aesthetic product, enviably authentic, radiantly holistic, played such a central role in his view of Mohammed as an exemplary world-fashioner that he even used it as a scale of judgement for the classical (the dithyramb, we are told, has to radiate pure beauty if it is to resemble 'a Koran of poetry')\".\n[…]\nThe sunnah contributed much to the development of Islamic law, particularly from the end of the first Islamic century. Muslim mystics, known as Sufis, who were seeking for the inner meaning of the Quran and the inner nature of Muhammad, viewed the prophet of Islam not only as a prophet but also as a perfect human being. All Sufi orders trace their chain of spiritual descent back to Muhammad.\n[…]\nMuhammad is honored by Sikhs as one of the divine messengers sent to mankind, along with Moses, Jesus and others."
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Hégira",
      "descricao": "Migração de Maomé e seus seguidores de Meca para Medina em 622, marco inicial do calendário islâmico."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em 622, Maomé deixou Meca numa migração que marca o ano um do calendário islâmico. Para que cidade ele foi?",
    "resposta": "Medina",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Hégira",
      "https://en.wikipedia.org/wiki/Hijrah"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Hégira",
        "situacao": "ok",
        "texto": "Hégira (em árabe: هجرة; romaniz.: Hijraʰ; lit: \"exílio\", \"separação\") foi a fuga de Maomé de Meca para Medina, que marca o ano inicial do calendário islâmico.\n[…]\nMaomé, natural de Meca, tinha mais de cinquenta anos de idade quando se tornou famoso por seus ensinamentos. Como mensageiro de Alá, ele pregava reformas tanto na religião judaica quanto no cristianismo, além de atacar o paganismo de seu país. Os cidadãos de Meca tornaram-se tão hostis que, em 622, Maomé foi obrigado a se refugiar em Medina.\n[…]\nDurante a fuga, a 5 km de Medina, Maomé e seus seguidores ergueram um templo, a Mesquita de Quba, considerada a primeira mesquita.\n[…]\nA data da Hégira costuma ser incorretamente datada na sexta-feira, dia 16 de julho de 622 (pelo calendário juliano), ou, como o dia começa no pôr do sol, no dia anterior, 15 de julho.. Essa data é a época do calendário islâmico.\n[…]\nA data da Hégira costuma ser calculada de formas diferentes por diversos autores.\n[…]\nA chegada de Maomé a Iatrebe (Medina) ocorreu no dia 12 do antigo mês Rabia, que corresponde a 24 de setembro de 622 pelo calendário juliano, e sua fuga de Meca no dia 1 do mês Rabia. John Bruno Hare calcula da data da fuga de Meca em 20 de setembro de 622.\n[…]\nBURLOT, Joseph. A Civilização Islâmica."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Hijrah",
        "situacao": "ok",
        "texto": "The Hijrah, (Arabic: الهجرة, romanized: al-Hijrah, lit. 'migration') also Hegira (from Medieval Latin), was the journey the Islamic prophet Muhammad and his followers took from Mecca to Medina. The year in which the Hijrah took place is also identified as the epoch of the Lunar Hijri and Solar Hijri calendars; its date equates to 16 July 622 in the Julian calendar.\n[…]\nIn May 622, after having convened twice with members of the Medinan tribes of Aws and Khazraj at al-'Aqabah near Mina, Muhammad secretly left his home in Mecca to emigrate to their city, along with his friend, father-in-law and companion Abu Bakr.\n[…]\nOne of the main tenets of this pledge was to renounce idols and affirm Allah as the only deity, with Muhammad as their leader. Muhammad then entrusted Mus'ab ibn Umayr to accompany them on their return to Medina to promote Islam.\n[…]\nIn the pilgrimage season of 622, Muhammad had another meeting in al-Aqabah with the Medinan converts; this time, there were 75 of them, including 2 women. Muhammad's uncle al-Abbas, who accompanied him, made a speech at the beginning, declaring that Muhammad was \"the most respected person among his kinsmen.\" This is quite in contrast with the fact that Muhammad had received strong opposition from his other uncle, Abu Lahab, as well as Abu Jahl and other Quraysh leaders.\n[…]\nThe second Rashidun Caliph, Umar ibn Al-Khattab, designated the Muslim year during which the Hegira occurred the first year of the Islamic calendar in 638 or the 17th year of the Hegira. This was later Latinized to Anno Hegirae, the abbreviation of which is still used to denote Hijri dates today. Burnaby states that: \"Historians in general assert that Muhammad fled from Mecca at the commencement of the third month of the Arabian year, Rabi 'u-l-awwal. They do not agree as to the precise day.\n[…]\nIslamiCity.com article on the Hijrah"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Lindisfarne",
      "descricao": "Ilha de maré no nordeste da Inglaterra, sede de um mosteiro saqueado pelos vikings em 793."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "O saque viking ao mosteiro de Lindisfarne, na costa da Inglaterra, costuma marcar o início da Era Viking. Em que século ele ocorreu?",
    "resposta": "Século oito",
    "fonte": [
      "https://en.wikipedia.org/wiki/Lindisfarne",
      "https://en.wikipedia.org/wiki/Viking_Age"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lindisfarne",
        "situacao": "ok",
        "texto": "Lindisfarne, also known as Holy Island, is a tidal island off the northeast coast of England, which constitutes the civil parish of Holy Island in Northumberland. Holy Island has a recorded history from the 6th century AD; it was an important centre of Celtic Christianity under Saints Aidan, Cuthbert, Eadfrith, and Eadberht of Lindisfarne.\n[…]\nIt was thought the Scottish ships might try to burn Lindisfarne, so orders were given to repair the decayed bulwark or blockhouse at Holy Island.\n[…]\nThe Muscle Shoals, Alabama based shoegaze duo Sister Ray Davies' 2025 album Holy Island (released by Sonic Cathedral) was inspired by Lindisfarne , with songs referencing names (such as Aidan) and events in the island's history, up to and including the 793 AD Viking raid.\n[…]\nMost of LJ Ross's crime novel Holy Island (2015) is set on Lindisfarne. Much of Ann Cleeves's mystery novel The Rising Tide is also located here and was filmed on the island for the TV series Vera based on the lead character in Cleeves' novels, DCI Vera Stanhope as played by Brenda Blethyn.\n[…]\nThe Viking raid appeared in the Big Finish Productions Doctor Who audio story Escape from Holy Island (2024), starring the Sixth Doctor and his companion Peri Brown.\n[…]\nDanny Boyle's film 28 Years Later (2025) is partly set on Lindisfarne – referencing its history as a fortified island – with extensive filming taking place there, including locals as extras. In the film, a community lives on Holy Island decades after a devastating epidemic, protected from 'infected' on the British mainland by a heavily fortified causeway.\n[…]\nSimpson, Ray (2013), A Holy Island Prayer Book: Prayers and Readings from Lindisfarne, UK: Canterbury Press, ISBN 978-1-85311-474-8\n[…]\nChurch of St Mary the Virgin, Holy Island of Lindisfarne\n[…]\nHoly Island Safe Crossing Times\n[…]\nVideo: Holy Island Causeway information"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Viking_Age",
        "situacao": "ok",
        "texto": "The Viking Age (about 800–1050 CE) was the period during the Middle Ages when Norsemen known as Vikings undertook large-scale raiding, colonising, conquest, and trading throughout Europe and reached North America. The Viking Age applies not only to their homeland of Scandinavia but also to any place significantly settled by Scandinavians during the period.\n[…]\nLindisfarne was different. The Viking devastation of Northumbria's Holy Island was reported by the Northumbrian scholar Alcuin of York, who wrote: \"Never before in Britain has such a terror appeared\". Vikings were portrayed as wholly violent and bloodthirsty by their enemies. Robert of Gloucester's Chronicle, c. 1300, mentions Viking attacks on the people of East Anglia wherein they are described as \"wolves among sheep\".\n[…]\nThe beginning of the Viking Age in the British Isles is often set at 793. It was recorded in the Anglo–Saxon Chronicle that the Northmen raided the important island monastery of Lindisfarne (the generally accepted date is actually 8 June, not January):\n[…]\nThese tremendous tokens were soon followed by a great famine: and not long after, on the sixth day before the ides of January in the same year, the harrowing inroads of heathen men made lamentable havoc in the church of God in Holy-island (Lindisfarne), by rapine and slaughter.\n[…]\nWhile few records are known, the Vikings are thought to have led their first raids in Scotland on the holy island of Iona in 794, the year following the raid on the other holy island of Lindisfarne, Northumbria.\n[…]\nThese islands were probably important trade settlements. Consistent with historical records, the study found evidence of a major influx of Danish Viking ancestry into England, a Swedish influx into Estonia and Finland; and Norwegian influx into Ireland, Iceland and Greenland during the Viking Age.\n[…]\nFaroe Islands\n[…]\nThe Danish Viking Age"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lindisfarne",
        "situacao": "ok",
        "texto": "Lindisfarne (também chamada de Lindesfarne ou Holy Island, Ilha Sagrada) é uma ilha de maré (acessível com a maré baixa) na costa nordeste da Inglaterra, que é ligada à terra firme de Northumberland por uma estrada a pique. De acordo com o censo de 2001, possuía uma população de 162 habitantes.\n[…]\nA abadia de Lindisfarne foi fundada pelo irlandês Santo Edano, que fora mandado da Abadia de Iona, localizada na Ilha de Iona, na costa oeste da Escócia, para a Nortúmbria, a pedido do rei Osvaldo (Oswald), por volta de 635. O lugar transformou-se na base para a conversão ao cristianismo no norte da Inglaterra, e também mandou uma missão evangelizadora para a Mércia.\n[…]\nO mosteiro foi saqueado e pilhado por vikings dinamarqueses em 8 de junho de 793, num episódio considerado pelos historiadores como o início da era das invasões vikings na Europa.\n[…]\nCastelo de Lindisfarne\n[…]\nEvangelhos de Lindisfarne",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Althing",
      "descricao": "Assembleia nacional da Islândia, criada pelos colonos nórdicos em 930 em Þingvellir."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "O Althing, assembleia dos colonos vikings da Islândia e um dos parlamentos mais antigos do mundo, foi fundado em que século?",
    "resposta": "Século dez",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Althing",
      "https://en.wikipedia.org/wiki/Althing"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Althing",
        "situacao": "ok",
        "texto": "O Parlamento da Islândia (Alþingi Íslendinga, em islandês, transliterado como Althingi ou Althing) é o órgão que detém o poder legislativo na Islândia. Fundado em 930, na região de Þingvellir, é o parlamento nacional mais antigo da história da humanidade em atividade.\n[…]\nO Alþingi foi estabelecido no ano de 930 como uma assembleia ao ar livre, situada em Kvosin, na Praça Domkirkja. Com sua formação, foi estabelecido o Estado Livre Islandês. As reuniões aconteciam em torno do Lögberg (islandês: \"rocha da lei\"), onde se sentava o legífero (lögsögumaður ou \"relator da lei\") para presidir a assembleia.\n[…]\nA constituição islandesa estabelece seis círculos eleitorais (kjördæmi), com a possibilidade de criar um sétimo. Cada uma destas divisões territoriais elege nove membros. Além destes 54 parlamentares, cada um dos grupos políticos recebe uma quantidade de lugares proporcional à percentagem obtida a nível nacional. Para poder recorrer a este círculo extra, o partido em causa deverá ter tido mais de 5% de todos os votos válidos no processo eleitoral.\n[…]\nO Althing afirma ser o parlamento mais antigo do mundo. Seu estabelecimento como uma assembleia ao ar livre ou coisa realizada nas planícies de Þingvellir ('Campos de Coisa' ou 'Campos de Assembleia') por volta de 930, lançou as bases para uma existência nacional independente na Islândia. Para começar, o Althing era uma assembleia geral da Comunidade Islandesa , onde os líderes mais poderosos do país (goðar) se reuniam para decidir sobre legislação e administrar justiça .\n[…]\nPolítica da Islândia\n[…]\nEleições na Islândia\n[…]\nSite oficial em islandês"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Althing",
        "situacao": "ok",
        "texto": "The Alþingi (Icelandic: [ˈalˌθiɲcɪ]; Icelandic for 'general meeting', anglicised as Althing or Althingi) is the national legislature of Iceland, which is also known in the English language as the Icelandic Parliament or as the Parliament of Iceland. Established in 930, it is the oldest legislature in the world.\n[…]\nHis responsibilities included reciting aloud the laws in effect at the time. It was his duty to proclaim the procedural law of the Althing to those attending the assembly each year.\n[…]\nA royal decree providing for the establishment of a new Althing was issued on 8 March 1843. Elections were held the following year and the assembly finally met on 1 July 1845 in Reykjavík. Some Icelandic nationalists (the Fjölnir group) did not want Reykjavík as the location for the newly established Althing due to the perception that the city was too influenced by Danes. Jón Sigurðsson claimed that the situating of the Althing in Reykjavík would help make the city Icelandic.\n[…]\nA supplementary session was first held in 1886, and these became more frequent in the 20th century. The Althing met from 1881 in the newly built Parliament House. The Governor-General (landshöfðingi) was the highest representative of the government in Iceland and was responsible to the Advisor for Iceland (Íslandsráðgjafi) in Copenhagen.\n[…]\nThe Act of Union (which took effect on 1 December 1918) made Iceland a state in personal union with the Kingdom of Denmark. It was set to expire after 25 years, when either state could choose to leave the union. The Althing was granted unrestricted legislative power. In 1920, the number of members of the Althing was increased to 42. Since 1945, the Althing has customarily assembled in the autumn.\n[…]\nThe dictionary definition of Althing at Wiktionary\n[…]\nAlthingi's English website"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Sutra do Diamante",
      "descricao": "Texto budista impresso em xilogravura na China em 868, encontrado nas grutas de Dunhuang."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Encontrado numa caverna chinesa, o Sutra do Diamante é o livro impresso com data mais antigo que se conhece. Em que século foi impresso?",
    "resposta": "Século nove",
    "distratores": [
      "Século cinco",
      "Século doze",
      "Século quatorze"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Diamond_Sutra"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Diamond_Sutra",
        "situacao": "ok",
        "texto": "The Diamond Sūtra (Sanskrit: Vajracchedikā Prajñāpāramitā Sūtra) is a Mahāyāna Buddhist sutra from the genre of Prajñāpāramitā ('perfection of wisdom') sutras. Translated into a variety of languages over a broad geographic range, the Diamond Sūtra is one of the most influential Mahayana sutras in East Asia, and it is particularly prominent within the Chan (or Zen) tradition, along with the Heart S\n[…]\nThe exact date of the composition of the Diamond Sūtra in Sanskrit is uncertain—arguments for the 2nd and 5th centuries have been made. The first Chinese translation dates to the early 5th century, but, by this point, the 4th or 5th century monks Asanga and Vasubandhu seem to have already authored authoritative commentaries on its content.The Vajracchedika sutra was an influential work in the Mahayana Buddhist tradition.\n[…]\nCopying and recitation of the Diamond Sutra was a widespread devotional practice, and stories attributing miraculous powers to these acts are recorded in Chinese, Japanese, Tibetan, and Mongolian sources.\n[…]\nThe Vajracchedikā Prajñāpāramitā Sutra contains the discourse of the Buddha to a senior monk, Subhuti. Its major themes are anatman (not-self), the emptiness of all phenomena (though the term 'śūnyatā' itself does not appear in the text), the liberation of all beings without attachment and the importance of spreading and teaching the Diamond Sūtra itself.\n[…]\nIn 2010, the English writer and historian Frances Wood, the head of the Chinese section at the British Library; Mark Barnard, a conservator at the British Library; and Ken Seddon, a professor of chemistry at Queen's University, Belfast, were involved in the restoration of its copy of the book. The British Library website allows readers to view the Diamond Sūtra in its entirety.\n[…]\nDiamond Sutra and Heart Sutra public domain audiobook at LibriVox\n[…]\nThe Diamond Sūtra encoded as synthetic DNA (Sutra2DNA)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sutra_do_Diamante",
        "situacao": "ok",
        "texto": "O Sutra do Diamante (sânscrito: Vajracchedikā Prajñāpāramitā Sūtra) é um sutra Mahāyāna (budista) do gênero dos sutras Prajñāpāramitā ('perfeição da sabedoria'). Traduzido para uma variedade de idiomas em uma ampla faixa geográfica, a Sutra do Diamante é um dos sutras Mahayana mais influentes no leste da Ásia e é particularmente proeminente na tradição Chan (ou Zen), junto com o Sutra do Coração.\n[…]\nUma cópia da dinastia Tang - versão chinesa do Sutra do Diamante foi encontrada entre os manuscritos de Dunhuang em 1900 pelo monge taoísta Wang Yuanlu e vendida para Aurel Stein em 1907. Eles são datados de 11 de maio de 868. É é, nas palavras da Biblioteca Britânica, \"o livro impresso mais antigo\".\n[…]\nÉ também o primeiro trabalho criativo conhecido com uma dedicatória explícita de domínio público, já que seu colofão no final afirma que foi criado \"para distribuição gratuita universal\".\n[…]\n«O Sutra do Diamante em português»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Grande Cisma do Oriente",
      "descricao": "Ruptura de 1054 entre a Igreja de Roma e a Igreja de Constantinopla, que separou católicos e ortodoxos."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Em que ano a cristandade se dividiu entre as igrejas de Roma e de Constantinopla, no chamado Grande Cisma do Oriente?",
    "resposta": "1054",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Grande_Cisma_do_Oriente",
      "https://en.wikipedia.org/wiki/East–West_Schism"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Grande_Cisma_do_Oriente",
        "situacao": "ok",
        "texto": "Grande Cisma foi o evento que causou a ruptura da Igreja Católica, separando-a em duas: Igreja Católica Apostólica Romana e Igreja Católica Apostólica Ortodoxa, a partir do ano 1054, quando os líderes da Igreja de Constantinopla e da Igreja de Roma se excomungaram mutuamente.\n[…]\nComo foi uma excomunhão mútua, isto é, bilateral, a nomenclatura neutra para este evento é Grande Cisma, apesar de fontes católicas romanas frequentemente apontarem para Cisma do Oriente. Algumas fontes ocidentais antigas utilizam Grande Cisma para falar do Cisma do Ocidente, de tal forma que alguns autores chegaram mesmo a preferir a nomenclatura Cisma Oriente-Ocidente ou simplesmente Cisma de 1054.\n[…]\nO distanciamento entre as duas igrejas cristãs tem formas culturais e políticas muito profundas, cultivadas ao longo de séculos.\n[…]\nEm 1054, o legado papal viajou a Constantinopla a fim de repudiar a Cerulário o título de \"Patriarca Ecumênico\" e insistir que ele reconheça a alegação de Roma de ser a mãe das Igrejas. O principal propósito do legado papal foi procurar ajuda do Império Bizantino em vista da conquista normanda do sul da Itália, e lidar com recentes ataques por Leão de Ácrida contra o uso de pão não fermentado e outros costumes ocidentais, ataques que tinham apoio de Cerulário.\n[…]\nEm 12 de fevereiro de 2016 o Papa Francisco tem um encontro histórico com o Patriarca de Moscou, Cirilo I, em Cuba. Os dois líderes se reúnem privadamente no aeroporto de Havana por duas horas e apresentam uma declaração conjunta, na presença do presidente Raul Castro. Um dos principais motivos para o encontro de reaproximação das igrejas é a violência que ameaça extinguir a presença de cristãos — católicos e ortodoxos — no Oriente médio e na África.\n[…]\nIgrejas orientais"
      },
      {
        "url": "https://en.wikipedia.org/wiki/East–West_Schism",
        "situacao": "ok",
        "texto": "The East–West Schism, also known as the Great Schism or the Schism of 1054, is the break of communion between the Catholic Church and the Eastern Orthodox Church since 1054. A series of ecclesiastical differences, theological disputes and geopolitical tensions between the Greek East and Latin West preceded the formal split in 1054.\n[…]\nThis action has been described as sowing the seed for the ecclesiastical rivalry between Constantinople and Rome which was ultimately a factor leading to the schism between East and West.\n[…]\nThis canon would remain a constant source of friction between East and West until the mutual excommunications of 1054 made it irrelevant in that regard; but controversy about its applicability to the authority of the patriarchate of Constantinople still continues.\n[…]\nIt is estimated that in 1054, a slim majority of Christians worldwide were Eastern Christians; most of the rest were Western Christians. Few of these would have noticed any difference as noted by Timothy Ware: \"Even after 1054 friendly relations between East and West continued. The two parts of Christendom were not yet conscious of a great gulf of separation between them. ... The dispute remained something of which ordinary Christians in East and West were largely unaware\".\n[…]\nIn 1261, the Byzantine emperor, Michael VIII Palaiologos brought the Latin Empire to an end. However, the Western attack on the heart of the Byzantine Empire is seen as a factor that led eventually to its conquest by Ottoman Muslims in the 15th century. Some scholars believe that the 1204 sacking of Constantinople contributed more to the schism than the events of 1054.\n[…]\nEncyclopædia Britannica: Schism of 1054\n[…]\nEast–West Schism, Orthodox Church in the Philippines{{citation}}:  CS1 maint: deprecated archival service (link).\n[…]\nThe Great Schism, Orthodox SCOBA."
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Universidade de Bolonha",
      "descricao": "Universidade da cidade italiana de Bolonha, fundada em 1088."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "A Universidade de Bolonha, na Itália, é considerada a universidade mais antiga em funcionamento contínuo. Em que século ela foi fundada?",
    "resposta": "Século onze",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Universidade_de_Bolonha",
      "https://en.wikipedia.org/wiki/University_of_Bologna"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Universidade_de_Bolonha",
        "situacao": "ok",
        "texto": "A Universidade de Bolonha (Università di Bologna, em italiano) é considerada uma das universidades mais antigas do mundo, tendo sido fundada em Bolonha, na Itália, em 1088. Constantemente é classificada entre as melhores do mundo, figurando entre as Universidades de Elite Mundial segundo indicadores como o ARWU, QS World, THE e US News.\n[…]\nEm 2020, a Alma Mater sobe três posições e faz história ao se tornar a universidade europeia mais preparada para o futuro e 6ª no ranking mundial do Times Higher Education, que monitora o impacto das universidades na sociedade usando os parâmetros indicados pela ONU.\n[…]\nO período após o nascimento da Itália como estado unitário é para a Universidade de Bolonha um tempo de grande avivamento, em que se destacam as figuras de Giovanni Cappellini, Giosuè Carducci, Giovanni Pascoli, Augusto Righi, Federico Enriquez, Giacomo Ciamician e Augusto Murri.\n[…]\nEm 1999, a universidade faz história por ser palco da Declaração de Bolonha, marcando uma mudança em relação às políticas ligadas ao ensino superior dos países envolvidos e  estabeleceu em comum um Espaço Europeu de Ensino Superior a partir do comprometimento dos países signatários em promover reformas dos seus sistemas de ensino. A declaração reconhece a importância da educação para o desenvolvimento sustentável de sociedades tolerantes e democráticas.\n[…]\nChamada oficialmente Alma mater studiorum, a universidade de Bolonha é uma instituição que hoje oferece cursos de Artes, Direito, Medicina, Farmácia, Matemática, Engenharia, Agronomia, Medicina Veterinária, Arquitetura, Física e Pedagogia.\n[…]\nO semiólogo e escritor italiano Umberto Eco era o titular da cadeira de Semiótica nessa universidade. O ex-primeiro-ministro da Itália, Romano Prodi, é professor do departamento de Economia.\n[…]\nUniversidades mais antigas do mundo"
      },
      {
        "url": "https://en.wikipedia.org/wiki/University_of_Bologna",
        "situacao": "ok",
        "texto": "The University of Bologna (Italian: Alma Mater Studiorum – Università di Bologna; abbreviated Unibo) is a public research university in Bologna, Italy. It is the oldest university in continuous operation in the world, and the first degree-awarding institution of higher learning. Teaching began around 1088, with the university becoming organised as universitas scholarium or guilds of students by th\n[…]\nThe university's emblem carries the motto Alma Mater Studiorum (Latin for 'Nourishing mother of studies') and the date A.D. 1088. With over 90,000 students, the University of Bologna is one of the largest universities in Europe.\n[…]\nThe university saw the first woman to earn a university degree and teach at a university (Bettisia Gozzadini), and the first woman to earn both a doctorate in science and a salaried position as a university professor (Laura Bassi). The University of Bologna had a central role in the sciences during the medieval age and the Italian Renaissance, when it housed and educated Nicholas Copernicus in addition to numerous other Renaissance mathematicians.\n[…]\nThe date of the University of Bologna's founding is uncertain. The university was granted a charter (Authentica habita) by Holy Roman Emperor Frederick I Barbarossa in 1158, but in the 19th century, a committee of historians led by Giosuè Carducci traced the founding of the university back to 1088, which would make it the oldest continuously operating university in the world. However, the development of the institution at Bologna into a university was a gradual process.\n[…]\nOrto Botanico dell'Università di Bologna\n[…]\nBologna Process\n[…]\nList of medieval universities\n[…]\nList of universities in Italy\n[…]\nMedieval university\n[…]\nUniversity of Bologna in Buenos Aires (in Spanish) (Translate to English: Google, Bing, Yandex)\n[…]\nScholars and Literati at the University of Bologna (1088–1800), in Repertorium Eruditorum Totius Europae (RETE)"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Catedral de Notre-Dame de Paris",
      "descricao": "Catedral gótica medieval na Île de la Cité, em Paris."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Na ilha da Cidade, no meio do rio Sena, a construção da Catedral de Notre-Dame de Paris começou em que século?",
    "resposta": "Século doze",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Catedral_de_Notre-Dame_de_Paris",
      "https://en.wikipedia.org/wiki/Notre-Dame_de_Paris"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Catedral_de_Notre-Dame_de_Paris",
        "situacao": "ok",
        "texto": "A Catedral de Notre-Dame de Paris (em francês: Cathédrale Notre-Dame de Paris; em português: \"Catedral de Nossa Senhora de Paris\") é uma das mais antigas catedrais francesas em estilo gótico. Iniciada sua construção no ano de 1163, é dedicada à Virgem Maria e situa-se na Île de la Cité em Paris, rodeada pelas águas do rio Sena.\n[…]\nO local da catedral contava já, antes da construção do edifício, com um sólido historial relativo ao culto religioso. Os celtas teriam aqui celebrado as suas cerimônias onde, mais tarde, os romanos erigiriam um templo de devoção ao deus Júpiter. Também neste local existiria uma das primeiras igrejas do cristianismo de Paris, a Basílica de Saint-Etienne, projetada por Quildeberto I por volta de 528 d.C..\n[…]\nEm substituição desta obra surge uma igreja românica que permanecerá até 1163, quando se dá o impulso na construção da catedral.\n[…]\nEm 1871, com a curta ascensão da Comuna de Paris, a catedral torna-se novamente pano de fundo a turbulências sociais, durante as quais se crê ter sido quase incendiada. Em 1965, em consequência de escavações para a construção de um parque subterrâneo na praça da catedral, foram descobertas catacumbas que revelaram ruínas romanas, da catedral merovíngia do século VI e de habitações medievais.\n[…]\nO tímpano, que representa a Virgem Maria com o menino Jesus, transparece ainda uma forte ligação à escultura do românico tardio pela sua frontalidade, rigidez do vestuário e pouca volumetria. Na proximidade da Virgem está um rei ajoelhado, que se crê ser o rei Luís VII e, na frente deste, um bispo, que poderá ser o impulsionador da construção da catedral, o bispo Maurice de Sully.\n[…]\nÉ possível visitar a torre norte de onde, após uma subida de 386 degraus, se pode vislumbrar a cidade de Paris, os pináculos e os gárgulas da catedral que povoaram o romance de Victor Hugo."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Notre-Dame_de_Paris",
        "situacao": "ok",
        "texto": "Notre-Dame de Paris (French: Cathédrale Notre-Dame de Paris French: [nɔtʁ(ə) dam də paʁi] : \"Cathedral of Our Lady of Paris\"), often referred to simply as Notre-Dame, is a medieval Catholic cathedral and basilica on the Île de la Cité (an island in the River Seine), in the 4th arrondissement of Paris, France. It is the cathedral church of the Roman Catholic Archdiocese of Paris.\n[…]\nDuring the late 12th and early 13th centuries, while the present Gothic cathedral was under construction, Notre-Dame de Paris became the birthplace and leading centre of the Notre-Dame school of polyphony.\n[…]\nShortly after the fire, French clockmaker Jean-Baptiste Vior discovered an almost identical 1867 Collin-Wagner movement in storage at Sainte-Trinité Church in northern Paris. Olivier Chandez, who had been responsible for the upkeep of Notre-Dame's clock, described the find as \"almost a miracle.\" The clock cannot be installed in Notre-Dame, but it was hoped that the clock could be used to create a new clock for Notre-Dame to the same specifications as the one which was destroyed.\n[…]\nUntil the French Revolution, Notre-Dame was the property of the archbishop of Paris and therefore the Catholic Church. It was nationalized on 2 November 1789 and since then has been the property of the French state. Under the Concordat of 1801, use of the cathedral was returned to the Church, but not ownership. Legislation from 1833 and 1838 clarified that cathedrals were maintained at the expense of the French government.\n[…]\nMusée de Notre Dame de Paris\n[…]\nNotre-Dame du Calvaire, Paris\n[…]\nOfficial website of Friends of Notre-Dame de Paris\n[…]\nOfficial site of Music at Notre-Dame de Paris (in English) also (in French)\n[…]\nNotre-Dame de Paris Cathedral Fire  Archived 1 June 2022 at the Wayback Machine\n[…]\nTridentine Mass celebrated in Notre-Dame in 2017\n[…]\nRe-opening ceremony for Notre Dame in Paris, 2024 on C-SPAN"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Catedral de Colônia",
      "descricao": "Catedral gótica da cidade alemã de Colônia, iniciada em 1248 e concluída em 1880."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "A construção da Catedral de Colônia, na Alemanha, começou em 1248, mas ficou parada por séculos. Em que século ela foi finalmente concluída?",
    "resposta": "Século dezenove",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Catedral_de_Colônia",
      "https://en.wikipedia.org/wiki/Cologne_Cathedral"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Catedral_de_Colônia",
        "situacao": "ok",
        "texto": "A Catedral de Colônia (português brasileiro) ou Colónia (português europeu) (alemão: Kölner Dom), localizada na cidade alemã de Colônia, é uma igreja católica de estilo gótico, o marco principal da cidade e seu símbolo não oficial.\n[…]\nÉ a quinta igreja mais alta do mundo e foi classificada como património da humanidade em 1996. O símbolo da cidade atrai seis milhões de turistas por ano, sendo o local turístico mais visitado da Alemanha. Em 1164, foram trazidas de Milão as supostas relíquias dos Três Reis Magos.\n[…]\nSua história se inicia em 1164, quando o imperador alemão Frederico Barba Ruiva saqueou Milão, transferindo para a cidade de Colônia os supostos restos mortais dos Três Reis Magos: Baltazar, Melchior e Gaspar. Colônia então transformou-se em local de peregrinação, e a afluência de fiéis era tão grande que a catedral da época não a comportava.\n[…]\nA construção da igreja gótica começou no século XIII (1248) e levou, com as interrupções, mais de 600 anos para ser completada. As duas torres possuem 157 metros de altura, com a catedral possuindo comprimento de 144 metros e largura de 86 metros. Quando foi concluída em 1880, era o prédio mais alto do mundo. A catedral é dedicada a São Pedro e a Nossa Senhora.\n[…]\nFoi construída no local de um templo romano do século IV, um edifício quadrado conhecido como a \"mais velha catedral\" e administrada por São Materno, o primeiro bispo cristão de Colônia. Uma segunda igreja foi construída no local, a chamada \"Velha Catedral\", cuja construção foi completada em 818, que acabou queimada em 30 de abril de 1248. São Severino foi bispo desta catedral.\n[…]\n«Catedral de Colônia - sítio oficial» (em inglês)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Cologne_Cathedral",
        "situacao": "ok",
        "texto": "Cologne Cathedral (German: Kölner Dom, pronounced [ˌkœlnɐ ˈdoːm] ) is a Catholic cathedral in Cologne, North Rhine-Westphalia, Germany. It is the seat of the Archbishop of Cologne and of the administration of the Archdiocese of Cologne. It is a renowned monument of German Catholicism and Gothic architecture and was declared a World Heritage Site in 1996. It is Germany's most visited landmark, attr\n[…]\nConstruction of Cologne Cathedral began in 1248, but was halted in the years around 1560. Attempts to complete construction began around 1814, but the project was not properly funded until the 1840s. The edifice was completed to its original medieval plan in 1880. The towers for its two huge spires give the cathedral the largest façade of any church in the world.\n[…]\nIn Carolingian times, the Old Cathedral was built on Cologne Cathedral Hill and consecrated in 870. The cathedral is now known as Hildebold Cathedral after Bishop Hildebold, who was a close advisor to Charlemagne and died in 818. However, it is unclear how much the bishop contributed to the building. He probably started the new construction, which Charlemagne also generously supported. The bishop's residence was originally located next to the cathedral.\n[…]\nWithin the construction of the Gothic cathedral in 1248, the Old Cathedral was to be demolished step by step. However, careless demolition work and fire destroyed not only the east choir, but almost the entire cathedral; the Shrine of the Three Kings  was saved from the fire. The western parts of Hildebold Cathedral were provisionally rebuilt and were only taken down after 1322, when the Gothic choir was completed and construction of the Gothic nave began.\n[…]\nWolff, Arnold, Cologne Cathedral. Its History – Its Works of Arts, Verlag (editor) Kölner Dom, Cologne: 2nd edition 2003, ISBN 978-3-7743-0342-3\n[…]\nCologne Cathedral at Structurae\n[…]\n5 Gigapixels GigaPan of Cologne Cathedral"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Queda de Granada",
      "descricao": "Rendição do Emirado Nacérida de Granada aos Reis Católicos, que encerrou a Reconquista na Península Ibérica."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Os Reis Católicos tomaram Granada, último reino muçulmano da Península Ibérica, no mesmo ano da primeira viagem de Colombo. Que ano foi esse?",
    "resposta": "1492",
    "fonte": [
      "https://en.wikipedia.org/wiki/Fall_of_Granada",
      "https://en.wikipedia.org/wiki/Granada_War"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fall_of_Granada",
        "situacao": "ok",
        "texto": "The Granada War was a series of military campaigns between 1482 and 1492 during the reign of the Catholic Monarchs, Isabella I of Castile and Ferdinand II of Aragon, against the Nasrid dynasty's Emirate of Granada. It ended with the defeat of Granada and its annexation by Castile, ending the last remnant of Islamic rule on the Iberian peninsula.\n[…]\nOn 2 January 1492, Muhammad XI of Granada (King Boabdil) surrendered the Emirate of Granada, the city of Granada, and the Alhambra palace to the Castilian forces.\n[…]\nThe aftermath of war brought to an end coexistence between religions in the Iberian peninsula: Jews were forced to convert to Christianity or be exiled in 1492, and by 1501, all of Granada's Muslims were obliged to convert to Christianity, become slaves, or be exiled; by 1526 this prohibition spread to the rest of Spain. \"New Christians\" (conversos) came to be accused of crypto-Islam and crypto-Judaism.\n[…]\nMorisco Rebellions in Granada\n[…]\nBorder of Granada\n[…]\nDelgado, Cristóbal Torres (1997). El Reino Nazarí de Granada (1482 - 1492): Muerte y Resurrección?. Granada: Albaida. ISBN 978-84-86521-38-7.\n[…]\nGarcía de Gabiola, Javier (2015). \"La guerra que puso fin al medievo, Granada (1482-1492)\". Arqueología, historia y viajes sobre el mundo medieval. No. 55. pp. 8–17. ISSN 1698-0387.\n[…]\nGabiola, Javier García de (2015). \"Los ejércitos en la guerra de Granada (1482-1492): la génesis del estado moderno\". Medievalia (in Spanish) (47): 34–42. doi:10.19130/medievalia.47.2015.305 (inactive 2 September 2025). ISSN 2448-8232.{{cite journal}}:  CS1 maint: DOI inactive as of September 2025 (link)\n[…]\nPrescott, William Hickling (1995). McJoynt, Albert D. (ed.). The Art of War in Spain: The Conquest of Granada, 1481-1492. London : Pennsylvania: Greenhill Books; Stackpole Books. ISBN 978-1-85367-193-7."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Granada_War",
        "situacao": "ok",
        "texto": "The Granada War was a series of military campaigns between 1482 and 1492 during the reign of the Catholic Monarchs, Isabella I of Castile and Ferdinand II of Aragon, against the Nasrid dynasty's Emirate of Granada. It ended with the defeat of Granada and its annexation by Castile, ending the last remnant of Islamic rule on the Iberian peninsula.\n[…]\nOn 2 January 1492, Muhammad XI of Granada (King Boabdil) surrendered the Emirate of Granada, the city of Granada, and the Alhambra palace to the Castilian forces.\n[…]\nThe aftermath of war brought to an end coexistence between religions in the Iberian peninsula: Jews were forced to convert to Christianity or be exiled in 1492, and by 1501, all of Granada's Muslims were obliged to convert to Christianity, become slaves, or be exiled; by 1526 this prohibition spread to the rest of Spain. \"New Christians\" (conversos) came to be accused of crypto-Islam and crypto-Judaism.\n[…]\nMorisco Rebellions in Granada\n[…]\nBorder of Granada\n[…]\nDelgado, Cristóbal Torres (1997). El Reino Nazarí de Granada (1482 - 1492): Muerte y Resurrección?. Granada: Albaida. ISBN 978-84-86521-38-7.\n[…]\nGarcía de Gabiola, Javier (2015). \"La guerra que puso fin al medievo, Granada (1482-1492)\". Arqueología, historia y viajes sobre el mundo medieval. No. 55. pp. 8–17. ISSN 1698-0387.\n[…]\nGabiola, Javier García de (2015). \"Los ejércitos en la guerra de Granada (1482-1492): la génesis del estado moderno\". Medievalia (in Spanish) (47): 34–42. doi:10.19130/medievalia.47.2015.305 (inactive 2 September 2025). ISSN 2448-8232.{{cite journal}}:  CS1 maint: DOI inactive as of September 2025 (link)\n[…]\nPrescott, William Hickling (1995). McJoynt, Albert D. (ed.). The Art of War in Spain: The Conquest of Granada, 1481-1492. London : Pennsylvania: Greenhill Books; Stackpole Books. ISBN 978-1-85367-193-7."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Guerra_de_Granada",
        "situacao": "ok",
        "texto": "Guerra de Granada foi o conjunto de campanhas militares que decorreram entre 1482 e 1492, durante o reinado dos Reis Católicos, no interior do reino de Granada.\n[…]\nQuando, terminada a guerra, o próprio Papa foi o valenciano Alexandre VI, da família Borgia, Isabel e Fernando receberam o título de Católicos (1496), num reconhecimento da ascensão da Espanha como potência europeia homologável, ao que também não era alheia a política de \"máximo religioso\" dos Reis, que tinha produzido a expulsão dos judeus em 1492, pouco depois da tomada de Granada.\n[…]\nEssa expansão pôde ver-se no exterior que, em conjunto com os eventos dinásticos que reuniram diversos territórios europeus, formou o que se acabou por se conhecer como Império espanhol: a simultânea conquista das Ilhas Canárias, e a posterior Conquista da América (descoberta em 12 de Outubro de 1492, na expedição prevista nas Capitulações de Santa Fé assinadas por Colombo e pelos Reis frente à assediada Granada); da toma pontual de praças do norte de África; além da conquista do cristão reino de Navarra em 1512.\n[…]\nAbu Abedalá Maomé XII «Boabdil» também chamado o Menino (1482-1483 e 1486-1492), filho do anterior. É o mais implicado com os Reis Católicos, com quem tinha acordado a entrega de Granada se lhe fosse garantido um senhorio nas Alpujarras.\n[…]\nReino de Granada\n[…]\nRicardo Córdova de la Llave e José Luis del Pino García Los servicios sustitutivos en la guerra de Granada: el caso de Córdova (1460-1492), em Relaciones exteriores del Reino de Granada: actas IV del Coloquio de Historia Medieval Andaluza (coord.: Cristina Segura Graiño), 1988, ISBN 84-86862-00-0 , págs. 185-210",
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
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Carlos Magno, imperador dos francos, morreu em 814 e foi sepultado na catedral de que cidade, hoje na Alemanha?",
    "resposta": "Aachen (Aquisgrano)",
    "fonte": [
      "https://en.wikipedia.org/wiki/Aachen_Cathedral",
      "https://en.wikipedia.org/wiki/Charlemagne"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Aachen_Cathedral",
        "situacao": "ok",
        "texto": "Aachen Cathedral (German: Aachener Dom) is a Catholic church in Aachen, Germany, and the cathedral of the Diocese of Aachen.\n[…]\nOne of the oldest cathedral buildings in Europe, it was constructed as the royal chapel of the Palace of Aachen of Emperor Charlemagne, who was buried there in 814. From 936 to 1531, the original Palatine Chapel saw the coronation of thirty-one German kings. Later, much expanded, it was a minster and collegiate church, becoming a cathedral briefly from 1803 to 1825, and again in 1930 when the Diocese of Aachen was revived.\n[…]\nA foundry was brought to Aachen near the end of the 8th century and was utilized to cast multiple bronze pieces, from doors and the railings, to the horse and bear statues. Charlemagne was buried in the chapel in 814. It suffered a large amount of damage in a Viking raid in 881, and was restored in 983.\n[…]\nThe core of Aachen Cathedral, the Carolingian octagon, was originally erected as Charlemagne's palace chapel and was also his grave. After his death, on 28 January 814, he was buried in his church; the exact spot is unknown, because of the lack of documentation and the ambiguity of the physical evidence. However, it is probable that he was buried in the Persephone sarcophagus under the west tower at the entrance to the octagon.\n[…]\nThe German impressionist painter August von Brandis painted Aachen Cathedral in several works. Act III of Giuseppe Verdi's Ernani is set at the tomb of Charlemagne.\n[…]\nThe Domwache (Cathedral watch), a youth self-help group, has been operated since 1957 by the Catholic students association of K.D.St.V. Franconia Aachen."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Charlemagne",
        "situacao": "ok",
        "texto": "Charlemagne ( SHAR-lə-mayn; 2 April 748 – 28 January 814) was King of the Franks from 768, King of the Lombards from 774, and Emperor of what is now known as the Carolingian Empire from 800. He united most of Western and Central Europe and was the first recognised emperor to rule from the west after the fall of the Western Roman Empire approximately three centuries earlier.\n[…]\nCharlemagne died in 814 and was buried at the Palatine Chapel (now part of Aachen Cathedral) in Aachen, his imperial capital city. Charlemagne's influence on the Middle Ages and on the territory he ruled has led him to be called the \"Father of Europe\" by many historians. He is seen as a founding figure by multiple European states, and several historical royal houses of Europe trace their lineage back to him.\n[…]\nOther authors have instead taken the place of Charlemagne's education and main residence of Aachen to postulate that Charlemagne most likely spoke a form of Moselle- or Ripuarian Franconian.\n[…]\nCharlemagne became ill in the autumn of 813 and spent his last months praying, fasting, and studying the gospels. He developed pleurisy and was bedridden for seven days before dying on the morning of 28 January 814. Thegan, a biographer of Louis, records the emperor's last words as \"Into your hands, Lord, I commend my spirit\". Charlemagne's body was prepared and buried in the chapel at Aachen by his daughters and palace officials that day.\n[…]\nSince 1949, Aachen has awarded an international prize (the Karlspreis der Stadt Aachen) in honour of Charlemagne. It is awarded annually to those who promote European unity. Recipients of the prize include Richard von Coudenhove-Kalergi (founder of the pan-European movement), Alcide De Gasperi, and Winston Churchill.\n[…]\nWorks by or about Charlemagne at the Internet Archive\n[…]\nAn interactive map of Charlemagne's travels"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Catedral_de_Aachen",
        "situacao": "ok",
        "texto": "A Catedral de Aachen (em alemão: Aachener Dom) localiza-se em Aachen, estado da Renânia do Norte-Vestfália, Alemanha. Erigida originalmente a mando de Carlos Magno por volta de 790 (onde em 814 foi sepultado), a catedral é hoje o resultado dos acrescentos e modificações de que foi sendo alvo ao longo dos séculos.\n[…]\nCarlos Magno, filho de Pepino, irá manter essas boas relações com o poder papal e, após unir territorialmente a Europa Central, será coroado pelo papa como imperador do Sacro Império Germânico.\n[…]\nTambém em Aachen o imperador Carlos Magno vai mandar erigir um palácio a ser ocupado apenas durante as suas estadias, mas o seu gosto pela região, a grande extensão de florestas, a caça abundante e as águas termais, já muito utilizadas para curas pelos antigos romanos, levaram a que este local se transformasse na sua residência permanente e, consequentemente, no centro cultural e religioso do Império.\n[…]\nAo longo das suas várias viagens a Itália, o imperador contacta de perto com os testemunhos da arquitectura da Antiguidade Clássica, principalmente com a herança de Constantino em Roma. Influenciado pelo estilo clássico e bizantino, Carlos Magno vai querer importar para o seu império (e iniciando pela sua residência em Aachen) o que até então tinha permanecido desconhecido à arte germânica.\n[…]\nUma pequena construção, foi erguida, por ordem de Pepino, o Breve (rei da dinastia carolíngia e pai do futuro imperador Carlos Magno), presumidamente pouco antes de seu falecimento em 768, na região denominada, à época, Aquisgrano(atual Aachen), para ser abrigo de uma relíquia sacra à cultura e fé cristã, a capa (em latim: capella) de São Martinho. A construção passa a ser conhecida como capela, o que acaba por levar à disseminação genérica do termo capela como um pequeno oratório privado.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Quarta Cruzada",
      "descricao": "Cruzada de 1202 a 1204 que, desviada de seu objetivo, terminou no saque de Constantinopla."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em 1204, a Quarta Cruzada desviou-se do caminho para a Terra Santa e saqueou que grande cidade cristã?",
    "resposta": "Constantinopla",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Quarta_Cruzada",
      "https://en.wikipedia.org/wiki/Fourth_Crusade"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Quarta_Cruzada",
        "situacao": "ok",
        "texto": "A Quarta Cruzada (1202–1204) foi uma expedição armada cristã latina convocada pelo Papa Inocêncio III. A intenção declarada da expedição era recapturar a cidade de Jerusalém, controlada pelos muçulmanos, derrotando primeiro o poderoso Sultanato Aiúbida do Egito. No entanto, uma sequência de eventos econômicos e políticos culminou no cerco de Zara em 1202 e no saque de Constantinopla em 1204 pelo e\n[…]\nEm agosto de 1203, após o cerco de Constantinopla, Aleixo foi coroado coimperador. No entanto, em janeiro de 1204, ele foi deposto por uma revolta popular, privando os cruzados dos pagamentos prometidos. Após o assassinato de Aleixo em 8 de fevereiro, os cruzados decidiram pela conquista total da cidade. Em abril de 1204, eles capturaram e saquearam a imensa riqueza da cidade. Apenas um punhado dos cruzados continuou para a Terra Santa depois disso.\n[…]\nOs cruzados tomaram completamente a cidade em 13 de abril.\n[…]\nO Império Bizantino foi dividido entre Veneza e os líderes da Cruzada de acordo com um tratado; estabelecendo o Império Latino baseado em Constantinopla.\n[…]\nO bizantinista Jonathan Harris escreveu que, quando a decisão foi tomada para desviar para Constantinopla, \"Uma proporção considerável [de Cruzados] deixou o exército e seguiu seu próprio caminho para a Terra Santa. Aqueles que permaneceram só concordaram muito relutantemente com o desvio quando submetidos a uma mistura de chantagem financeira e emocional.\n[…]\nO proeminente medievalista Sir Steven Runciman escreveu em 1954: \"Nunca houve um crime contra a humanidade maior do que a Quarta Cruzada.\" Segundo o historiador Martin Arbagi, \"O desvio da Quarta Cruzada em 1204 foi uma das grandes atrocidades da história medieval, e o Papa Inocêncio III colocou a maior parte da culpa em Veneza\". A controvérsia que cercou a Quarta Cruzada levou a opiniões divergentes na academia sobre se seu objetivo era de fato a captura de Constantinopla."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Fourth_Crusade",
        "situacao": "ok",
        "texto": "The Fourth Crusade (1202–1204) was a Latin Christian armed expedition called by Pope Innocent III. The stated intent of the expedition was to recapture the Muslim-controlled city of Jerusalem, by first defeating the powerful Egyptian Ayyubid Sultanate. However, a sequence of economic and political events culminated in the Crusader army's 1202 siege of Zara and the 1204 sack of Constantinople, rath\n[…]\nThe Nicaean Empire eventually brought about the  Reconquest of Constantinople and restored the Byzantine Empire in July 1261.\n[…]\nThe prominent medievalist Sir Steven Runciman wrote in 1954: \"There was never a greater crime against humanity than the Fourth Crusade.\" According to historian Martin Arbagi, \"The diversion of the Fourth Crusade in 1204 was one of the great atrocities of medieval history, and Pope Innocent III placed most of the blame on Venice\". The controversy that has surrounded the Fourth Crusade has led to diverging opinions in academia on whether its objective was indeed the capture of Constantinople.\n[…]\nConstantinople was considered as a bastion of Christianity that defended Europe from Muslim invasion, and the Fourth Crusade's sack of the city dealt an irreparable blow to this eastern bulwark. Although the Greeks retook Constantinople after 57 years of Latin rule, the Crusade crippled the Byzantine Empire. Reduced to Constantinople, north-western Anatolia, and a portion of the southern Balkans, the empire fell when the Ottoman Muslims captured the city in 1453.\n[…]\nThe fact that they were Latin Christians fills Catholics with deep regret.\" In 2004, while Bartholomew I, Patriarch of Constantinople, was visiting the Vatican, John Paul II asked, \"How can we not share, at a distance of eight centuries, the pain and disgust.\" This has been regarded as an apology to the Greek Orthodox Church for the massacres perpetrated by the warriors of the Fourth Crusade.\n[…]\nThird Crusade"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Saladino",
      "descricao": "Sultão curdo do Egito e da Síria no século doze, fundador da dinastia aiúbida e adversário dos cruzados."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "O sultão Saladino nasceu na cidade iraquiana em cujos arredores, oito séculos depois, nasceu Saddam Hussein. Que cidade é essa?",
    "resposta": "Tikrit",
    "distratores": [
      "Bagdá",
      "Mossul",
      "Basra"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Saladin",
      "https://en.wikipedia.org/wiki/Tikrit"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Saladin",
        "situacao": "ok",
        "texto": "Salah ad-Din Yusuf ibn Ayyub (c. 1137 – 4 March 1193), commonly known as Saladin, was the founder of the Ayyubid dynasty and the first sultan of both Egypt and Syria. A Sunni Muslim ruler of Kurdish origin, Saladin was an important figure of the Third Crusade and spearheaded the Muslim military effort against the Crusader states in the Levant. At the height of his power, the Ayyubid realm spanned \n[…]\nSaladin was born in Tikrit in present-day Iraq. His personal name was \"Yusuf\"; \"Salah ad-Din\" is a laqab, an honorific epithet, meaning \"Righteousness of the Faith\". His parents were of Kurdish Rawadiya ancestry, and had originated from the village of Ajdanakan near the city of Dvin in central Armenia. He was the son of a Kurdish mercenary Najm ad-Din Ayyub. The Rawadiya tribe from which his family hailed was originally of Arab descent but later became Kurdicized.\n[…]\nIn Saladin's era, no scholar had more influence than sheikh Abdul Qadir Gilani, and Saladin was strongly influenced and aided by him and his pupils. In 1132, the defeated army of Zengi, Atabeg of Mosul, found their retreat blocked by the Tigris River opposite the fortress of Tikrit, where Saladin's father, Najm ad-Din Ayyub served as the warden. Ayyub provided ferries for the army and gave them refuge in Tikrit.\n[…]\nMujahid ad-Din Bihruz, a former Greek slave who had been appointed as the military governor of northern Mesopotamia for his service to the Seljuks, reprimanded Ayyub for giving Zengi refuge, and in 1137 banished Ayyub from Tikrit after his brother Asad ad-Din Shirkuh killed a friend of Bihruz. According to Baha ad-Din ibn Shaddad, Saladin was born the same night his family left Tikrit.\n[…]\nHe appears in Crusader Kings III, with his name being Salah al-Din Yusuf leading the Ayyubid Sultanate in the \"Swords of Faith\" campaign in 1178.\n[…]\nBattles of Saladin\n[…]\nRichard and Saladin: Warriors of the Third Crusade"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Tikrit",
        "situacao": "ok",
        "texto": "Tikrit (Arabic: تِكْرِيت, romanized: Tikrīt [ˈtɪkriːt]), historically romanized as Tekrit, is a city in Iraq, located 140 kilometers (87 mi) northwest of Baghdad and 220 kilometers (140 mi) southeast of Mosul on the Tigris River. It is the administrative center of the Saladin Governorate. In 2012, it had a population of approximately 160,000. Tikrit is widely regarded as the cultural capital of Ir\n[…]\nOriginally created as a fort during the Assyrian empire, Tikrit was the birthplace of Muslim military leader Saladin. Many Iraqi government officials during the Ba'athist period (1968–2003) were from Tikrit; former president Saddam Hussein was born in the village of Al-Awja, 13 km south of the city.\n[…]\nIn the opening weeks of the 2003 US-led invasion, many observers speculated that Hussein would return to Tikrit as his \"last stronghold\". The city was subjected to intense aerial bombardment meant to throw Hussein's elite Republican Guard troops out of the city. On 13 April 2003, several thousand U.S. Marines and other coalition members aboard 300 armored vehicles converged on the town, meeting little or no resistance. With the fall of Tikrit, U.S.\n[…]\nAfter the fall of Baghdad, Hussein was in and around Tikrit. He was hidden by relatives and supporters for about six months. During his final period in hiding, he lived in a small hole just outside the town of ad-Dawr, 15 kilometres (9 mi) south of Tikrit on the eastern bank of the Tigris, a few kilometers southeast of Al-Awja (although the story of having been found in a hole specifically has come into question as being a piece of war-time propaganda).\n[…]\nBarzan al-Tikriti (1951 – 2007), one of three half-brothers of Saddam Hussein, and a leader of the Mukhabarat\n[…]\nTikrit Stadium is a multi-use facility used mostly for football matches and serves as the home stadium of Salah ad Din FC. It holds 10,000 people."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Saladino",
        "situacao": "ok",
        "texto": "Nácer Saladim Iúçufe ibne Aiube (em árabe: صلاح الدين يوسف بن أيوب; romaniz.: Ṣalāḥ ad-Dīn Yūsuf ibn Ayyūb; em curdo: سه‌لاحه‌دین ئه‌یوبی; romaniz.: Selah'edînê Eyubî; c. 1138 – 4 de março de 1193), mais conhecido como Saladino (em latim: Saladinus), foi um chefe militar curdo muçulmano que se tornou sultão do Egito e da Síria e liderou a oposição islâmica aos cruzados europeus no Levante. No auge\n[…]\nNasceu em Ticrite (no atual território do Iraque) em 1138, e morreu em Damasco, hoje capital da Síria, em 1193. Foi o responsável por restaurar o sunismo no Egito. Saladino distinguiu-se pela primeira vez nas campanhas do Egito, sendo nomeado vizir. Sultão do Egito a partir de 1175, sucedeu a Atabegue de Moçul, em nome de quem partiu à conquista do Egito. Unificou o país (1164-1174), a Síria (1174-1187) e a Mesopotâmia, tornando-se um poderoso dirigente.\n[…]\nSaladino consultou seu conselho e esses termos foram aceitos. Um resgate deveria ser pago por cada franco na cidade, fosse homem, mulher ou criança. Saladino permitiu que muitos partissem sem ter a quantia exigida por resgate para outros. De acordo com Imad al-Din, aproximadamente sete mil homens e oito mil mulheres não puderam pagar por seu resgate e foram tornados escravos.\n[…]\nBea Adim descreve uma cena particularmente horrenda envolvendo dois francos capturados nesse período: \"Enquanto estávamos lá eles trouxeram ao sultão (Saladino) dois francos que haviam sido aprisionados pela guarda avançada. Ele os decapitou ali mesmo.\" Os exércitos de Saladino engajaram-se em combate com os exércitos rivais do rei Ricardo I de Inglaterra na Batalha de Arçufe (ou de Apolónia), em 7 de setembro de 1191, na qual Saladino foi derrotado.\n[…]\nEle está enterrado no Mausoléu de Saladino, no complexo da Mesquita dos Omíadas, em Damasco, e é uma atração popular.\n[…]\n«Exclusive Medieval Articles - Richard and Saladin: Warriors of the Third Crusade»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Cerco de Jerusalém de 1187",
      "descricao": "Cerco e tomada de Jerusalém pelas forças de Saladino, que levou à convocação da Terceira Cruzada."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1187, que sultão muçulmano retomou Jerusalém dos cruzados, provocando a convocação da Terceira Cruzada?",
    "resposta": "Saladino",
    "fonte": [
      "https://en.wikipedia.org/wiki/Siege_of_Jerusalem_(1187)",
      "https://en.wikipedia.org/wiki/Third_Crusade"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Siege_of_Jerusalem_(1187)",
        "situacao": "ok",
        "texto": "The siege of Jerusalem lasted from 20 September to 2 October 1187, when Balian of Ibelin surrendered the city to the forces of the Ayyubid Sultanate under sultan Saladin. Earlier that summer, Egyptian forces under Saladin had defeated the kingdom's army and conquered several cities. Balian was charged with organizing a defense. The city was full of refugees but had few soldiers. Despite this fact,\n[…]\nThe Kingdom of Jerusalem, weakened by internal disputes, was defeated at the Battle of Hattin on 4 July 1187. Most of the nobility were taken prisoner, including King Guy. Thousands of Muslim slaves were freed. By mid-September, Saladin had taken Acre, Nablus, Jaffa, Toron, Sidon, Beirut, and Ascalon. The survivors of the battle and other refugees fled to Tyre, the only city able to hold out against Saladin, due to the fortuitous arrival of Conrad of Montferrat.\n[…]\nBalian found the situation in Jerusalem dire. The city was filled with refugees fleeing Saladin's conquests, with more arriving daily. There were fewer than fourteen knights in the whole city, so he created sixty new knights from the ranks of the squires (knights in training) and burgesses. He prepared for the inevitable siege by storing food and money.\n[…]\nThe armies of Syria and Egypt assembled under Saladin, and after conquering Acre, Jaffa, and Caesarea (though he unsuccessfully besieged Tyre), the sultan arrived outside Jerusalem on September 20.\n[…]\nMeanwhile, news of the disastrous defeat at Hattin was brought to Europe by Joscius, Archbishop of Tyre, as well as other pilgrims and travellers, while Saladin was conquering the rest of the kingdom throughout the summer of 1187. Plans were immediately made for a new crusade; on October 29, Pope Gregory VIII issued the bull Audita tremendi, even before hearing of the fall of Jerusalem. In England and France, the Saladin tithe was enacted in order to finance expenses."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Third_Crusade",
        "situacao": "ok",
        "texto": "The Third Crusade (1189–1192) was an attempt led by King Philip II of France, King Richard I of England, and Emperor Frederick Barbarossa to reconquer the Holy Land following the capture of Jerusalem by the Ayyubid sultan Saladin in 1187. For this reason, the Third Crusade is also known as the Kings' Crusade.\n[…]\nAfter the failure of the Second Crusade of 1147–1149, the Zengid dynasty controlled a unified Syria and engaged in a conflict with the Fatimid rulers of Egypt. Saladin ultimately brought both the Egyptian and Syrian forces under his own control, and employed them to reduce the Crusader states and to recapture Jerusalem in 1187.\n[…]\nOn 27 October 1187, just over three weeks after Saladin's capture of Jerusalem, Pope Gregory VIII sent letters to the German episcopate announcing his election and ordering them to win the German nobility over to a new crusade. Around 23 November, Frederick received letters that had been sent to him from the rulers of the Crusader states in the East urging him to come to their aid. By 11 November, Cardinal Henry of Marcy had been appointed to preach the crusade in Germany.\n[…]\nNeither side was entirely satisfied with the results of the war. Though Richard's military victories had deprived the Muslims of important coastal territories and re-established a viable Frankish state in The Holy Land, many Christians in the Latin West felt disappointed that he had elected not to pursue the recapture of Jerusalem. Likewise, many in the Islamic world felt disturbed that Saladin had failed to drive the Christians out of Syria and the Holy Land.\n[…]\nSaladin's scholar and biographer Baha al-Din recounted Saladin's distress at the successes of the Crusaders:\n[…]\nIn 1193, Saladin died of yellow fever. His heirs would quarrel over the succession and ultimately fragment his conquests."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cerco_de_Jerusal%C3%A9m_%281187%29",
        "situacao": "ok",
        "texto": "O Cerco de Jerusalém foi uma decisiva batalha travada pelo controle de Jerusalém, entre 20 de setembro a 2 de outubro de 1187, quando os homens de Balião de Ibelin renderam a cidade a Saladino, um poderoso sultão muçulmano. Esta derrota para os cristãos assinalou o fim do primeiro Reino de Jerusalém.\n[…]\nO Reino de Jerusalém, que perdurava fazia quase um século, sofria com disputas internas. O recém coroado rei, Guido de Lusignan, enviou boa parte dos exércitos da cidade para enfrentar as forças de Saladino, Sultão do Egito e Síria. Os dois confrontaram-se na Batalha de Hatim (4 de julho de 1187), que acabou sendo um fracasso humilhante para os cruzados. O exército de Jerusalém fora praticamente destruído ou dispersado, e boa parte da nobreza local, incluindo o rei Guido, acabou sendo capturada.\n[…]\nEm setembro, os muçulmanos já dominavam boa parte das regiões vizinhas de Jerusalém. As tropas de Saladino já haviam assumido o controle das fortalezas cruzadas em Acre, Nablus, Jafa, Toron, Sídon, Beirute e Ascalão.\n[…]\nApesar das negociações, ambos os lados se preparavam para a guerra. Saladino exigia a rendição da cidade, mas Balião queria negociar em uma posição mais favorável. Em 20 de setembro a cidade já estava completamente cercada. Por dias, os muçulmanos começaram a bombardear Jerusalém com disparos de catapultas e manganelas. Pedras e outros meios eram disparados por pesados trabucos. Por pelo menos seis dias, escaramuças se seguiram com poucos resultados.\n[…]\nTemia-se que o sultão também massacrasse os habitantes que não haviam conseguido fugir, contudo Saladino acabou tratando os povos conquistados com surpreendente generosidade.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Peste Negra",
      "descricao": "Pandemia de peste bubônica que devastou a Europa, a Ásia e o Norte da África em meados do século quatorze."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Segundo relatos da época, a peste negra chegou à Europa em 1347 em navios genoveses vindos de Caffa, porto de que península do mar Negro?",
    "resposta": "Crimeia",
    "fonte": [
      "https://en.wikipedia.org/wiki/Black_Death",
      "https://en.wikipedia.org/wiki/Siege_of_Caffa"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Black_Death",
        "situacao": "ok",
        "texto": "The Black Death was a plague pandemic that occurred in Europe from 1346 to 1353. It was one of the most fatal pandemics in human history, leading to the death of up to 50 million people, around 30% to 60% of the European population and approximately 33% of the Middle Eastern population.\n[…]\nThe pandemic was reportedly first introduced to Europe during the siege of the Genoese trading port of Caffa in Crimea by the Golden Horde army of Jani Beg in 1347. From Crimea, it was most likely carried by fleas living on the black rats that travelled on Genoese ships, spreading through the Mediterranean Basin and reaching North Africa, West Asia, and the rest of Europe via Constantinople, Sicily, and the Italian Peninsula.\n[…]\nThis confirms that the Yersinia pestis strain found in Kyrgyzstan predates and was the direct ancestor of the Black Death strains that devastated Europe and the Middle East starting in 1346–1347.\n[…]\nDemographic historians estimate that China's population fell by at least 15 per cent, and perhaps as much as a third, between 1340 and 1370. This population loss coincided with the Black Death that ravaged Europe and much of the Islamic world in 1347–52. However, there is a conspicuous lack of evidence for pandemic disease on the scale of the Black Death in China at this time.\n[…]\nThe Black Death killed about 40% of Egypt's population. In Cairo, with a population numbering as many as 600,000, and possibly the largest city west of China, between one third and 40% of the inhabitants died within eight months. By the 18th century, the population of Cairo was halved from its numbers in 1347.\n[…]\nThe trade disruptions in the Mongol Empire caused by the Black Death was one of the reasons for its collapse.\n[…]\nBlack Death on In Our Time at the BBC\n[…]\nBlack Death at BBC History"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Siege_of_Caffa",
        "situacao": "ok",
        "texto": "The siege of Caffa was a 14th-century military encounter when Jani Beg of the Golden Horde besieged the city of Caffa (modern-day Feodosia), between two periods in the 1340s. The city of Caffa, a Genoese colony, was a vital trading hub located in Crimea. The city was then part of Gazaria, a group of seven ports located in Crimea and belonging to the maritime empire of the Republic of Genoa.\n[…]\nThe siege of Caffa was characterized by intense military tactics from both sides. After several years of siege, the armies of the Horde were forced to withdraw. The siege is famous for a story recounted by Italian notary Gabriel de Mussis, which attributed the subsequent spread of the Black Death to plague-infested corpses having been launched over the walls at the end of the siege.\n[…]\nCaffa (modern-day Feodosia) was a thriving port city on the Crimean Peninsula, established by Genoese merchants in 1266 by a purchase agreement with the Khan of the Golden Horde. The city was strategically situated on the Black Sea, serving as a critical link in the trade routes between Europe and Asia. Caffa's prosperity made it a coveted target for various powers, including the Mongol Empire.\n[…]\nIt is now believed that the Black Death spread to Europe in grain shipments that were restarted after the wartime embargoes between Venetian, Genoan, and Golden Horde merchants had been lifted.\n[…]\nThe spread of the plague from Caffa to Europe had catastrophic consequences. The Black Death is estimated to have killed between 30% and 60% of Europe's population over the next few years. The pandemic caused massive social, economic, and political upheaval, altering the course of European history. The rapid and widespread transmission of the disease demonstrated the vulnerability of interconnected trade networks to the spread of infectious diseases."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Peste_Negra",
        "situacao": "ok",
        "texto": "Peste Negra (também conhecida como Grande Peste, Peste ou Praga) foi uma das pandemias mais devastadoras registadas na história humana, tendo resultado na morte de 25 a 75 milhões de pessoas na Eurásia, atingindo o pico na Europa entre os anos de 1347 e 1351. Acredita-se que a bactéria Yersinia pestis, que resulta em várias formas de peste (septicémica, pneumónica e, a mais comum, bubónica), tenha\n[…]\nA Peste Negra foi o primeiro grande surto europeu de peste e a segunda pandemia da doença. A praga criou uma série de convulsões religiosas, sociais e económicas, com efeitos profundos no curso da história da Europa.\n[…]\nA Peste Negra provavelmente teve a sua origem na Ásia Central ou na Ásia Oriental, de onde viajou ao longo da Rota da Seda, atingindo a Crimeia em 1343. De lá, era provavelmente transportada por pulgas que viviam nos ratos que viajavam em navios mercantes genoveses, espalhando-se por toda a bacia do Mediterrâneo, atingindo o resto da Europa através da península italiana.\n[…]\nSegundo diversos relatos, a peste foi introduzida pela primeira vez na Europa por comerciantes genoveses da cidade portuária de Kaffa, na Crimeia, em 1347. Durante um prolongado cerco à cidade pelo exército mongol sob Jani Beg, cujo exército sofria da doença, o exército catapultou cadáveres infectados sobre as muralhas da cidade de Kaffa para infectar os habitantes dentro da cidade.\n[…]\nParece ter havido várias introduções na Europa. A peste atingiu a Sicília em outubro de 1347, transportada por doze galés genovesas e rapidamente se espalhou por toda a ilha. As galés de Kaffa chegaram a Génova e Veneza em janeiro de 1348, mas foi o surto em Pisa, algumas semanas depois, que marcou o ponto de entrada para o norte da Itália. No final de janeiro, uma das galés expulsas da Itália chegou a Marselha.\n[…]\nEstima-se que 60 mil pessoas morreram durante a peste de Caragea em 1813–1814, 20 a 30 mil delas em Bucareste.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Joana d'Arc",
      "descricao": "Heroína e santa francesa que liderou tropas na Guerra dos Cem Anos e foi queimada em 1431."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Depois de capturada e condenada por heresia, Joana d'Arc foi queimada em 1431 em que cidade da Normandia?",
    "resposta": "Ruão (Rouen)",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Joana_d'Arc",
      "https://en.wikipedia.org/wiki/Joan_of_Arc"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Joana_d'Arc",
        "situacao": "ok",
        "texto": "Joana d’Arc (em francês:  Jeanne d’Arc, IPA: [ʒan daʁk]; em francês médio: Jehanne Darc, IPA: [ʒəˈãnə ˈdark]; Domrémy-la-Pucelle, ca. 1412 – Ruão, 30 de maio de 1431) foi uma camponesa e santa francesa canonizada pela Igreja Católica, considerada uma heroína da França pelos seus feitos durante a Guerra dos Cem Anos. Nasceu filha de Jacques d’Arc e Isabelle Romée, numa família camponesa, em Domrémy\n[…]\nApós o pagamento do resgate, os ingleses transferiram Joana para Rouen, sua principal sede na França. Não há evidências de que Carlos tenha tentado salvar Joana após sua transferência para os ingleses.\n[…]\nJoana foi julgada por heresia em Rouen em 9 de janeiro de 1431. Ela foi acusada de blasfemar por usar roupas masculinas, de agir com base em visões demoníacas e de se recusar a submeter suas palavras e ações à igreja, pois afirmava que seria julgada apenas por Deus. Os captores de Joana minimizaram os aspectos seculares do julgamento, submetendo-a a um tribunal eclesiástico, mas o julgamento foi politicamente motivado.\n[…]\nCom cerca de dezenove anos, Joana foi executada em 30 de maio de 1431. Pela manhã, ela foi autorizada a receber os sacramentos, apesar do processo judicial exigir que fossem negados aos hereges. Em seguida, foi levada ao Vieux-Marché (Mercado Velho) de Rouen, onde sua sentença de condenação foi lida publicamente.\n[…]\nA firme crença de Joana na divindade de suas visões fortaleceu sua confiança, permitiu que ela confiasse em si mesma e lhe deu esperança durante sua captura e julgamento.\n[…]\nA Igreja Santa Joana d’Arc (em francês, Église Sainte-Jeanne-d'Arc) está localizada na Place du Vieux-Marché, no centro da cidade de Ruão,, França, onde Joana d’Arc foi queimada na fogueira em 1431. é uma das mais emblemáticas construções dedicadas à santa. Localizada na Place du Vieux Marché, esta igreja moderna foi inaugurada em 1979 e projetada pelo arquiteto Louis Arretche."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Joan_of_Arc",
        "situacao": "ok",
        "texto": "Joan of Arc (French: Jeanne d'Arc [ʒan daʁk] ; Middle French: Jehanne Darc [ʒəˈãnə ˈdark]; c. 1412 – 30 May 1431) is a patron saint of France, honored as a defender of the French nation for her role in the siege of Orléans and securing the coronation of Charles VII of France during the Hundred Years' War. Claiming to be acting under divine guidance, she became a military leader who gained recognit\n[…]\nAfter the English paid the ransom, they moved Joan to Rouen, their main headquarters in France. There is no evidence that Charles tried to save Joan once she was transferred to the English.\n[…]\nJoan was put on trial for heresy in Rouen on 9 January 1431. She was accused of having blasphemed by wearing men's clothes, of acting upon visions that were demonic, and of refusing to submit her words and deeds to the church because she claimed she would be judged by God alone. Joan's captors downplayed the secular aspects of her trial by submitting her judgment to an ecclesiastical court, but the trial was politically motivated.\n[…]\nAt about the age of nineteen, Joan was executed on 30 May 1431. In the morning, she was allowed to receive the sacraments despite the court process requiring they be denied to heretics. She was then taken to Rouen's Vieux-Marché (Old Marketplace), where she was publicly read her sentence of condemnation.\n[…]\nThe rehabilitation trial began on 7 November 1455 at Notre Dame Cathedral when Joan's mother publicly delivered a formal request for her daughter's rehabilitation, and ended on 7 July 1456 at Rouen Cathedral, having heard from about 115 witnesses. The court found that the original trial was unjust and deceitful; Joan's abjuration, execution and their consequences were nullified.\n[…]\nSoon after the siege of Orléans was lifted, Jean Gerson said that Joan's male clothes and haircut were appropriate for her calling, as she was a warrior and men's clothes were more practical."
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Castelo de Malbork",
      "descricao": "Fortaleza de tijolos construída pela Ordem Teutônica a partir do século treze, às margens do rio Nogat."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "O Castelo de Malbork, gigantesca fortaleza de tijolos construída pelos cavaleiros da Ordem Teutônica, fica hoje em que país?",
    "resposta": "Polônia",
    "distratores": [
      "Alemanha",
      "Lituânia",
      "Rússia"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Castelo_de_Malbork",
      "https://en.wikipedia.org/wiki/Malbork_Castle"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Castelo_de_Malbork",
        "situacao": "ok",
        "texto": "O Castelo de Malbork (Zamek w Malborku, em polaco; Ordensburg Marienburg, em alemão) é um castelo construído pela Ordem dos Cavaleiros Teutónicos, uma ordem religiosa católica romana alemã de cruzados. Situa-se cerca de 60 quilómetros a sudeste de Gdansk, na cidade polaca de Malbork. A ordem chamou-lhe Marienburg (Castelo de Maria), o mesmo nome que receberia a cidade que cresceu à sua volta.\n[…]\nNestes terrenos, os cavaleiros da Ordem construíram numerosos castelos. A edificação do Castelo de Malbork teve início em 1270. O seu propósito principal era fortalecer o seu próprio controle da área depois da supressão pela Ordem, em 1274, do Grande Levantamento Prussiano das tribos bálticas.\n[…]\nQuando a sua última fortaleza das cruzadas ocidentais caiu para os árabes muçulmanos, a Ordem moveu o seu quartel-general para Veneza antes de chegar à Polónia. Malbork tornou-se mais importante em consequência da conquista pelos cavaleiros teutónicos de Gdańsk  (Danzig) e da Pomerânia em 1308. O centro administrativo da Ordem mudou-se de Elbląg (Elbing) para Malbork.\n[…]\nNo dia 7 de Junho de 1457, o Rei da Polónia entrou no Marienburg; o Grão-Mestre fugiu para Königsberg, actual Kaliningrado. No Segundo Tratado de Toruń (1466), o castelo e a cidade teutónicos entraram finalmente para a Coroa polaca. Passaram a pertencer desde então à Prússia Real (ou seja, eram parte da Polónia) e, assim, à Rzeczpospolita a partir de 1599, não pertencendo mais ao Estado da Ordem Teutónica.\n[…]\nO Castelo de Malbork, que tinha anteriormente sido construído e ampliado pelos Cavaleiros da Ordem Teutónica, reencontrou as suas funções originais com o domínio polaco. Foram investidos muitíssimos soldos na restauração desta vasta fortaleza gótica e os fundos destinados a este fim eram pouquíssimos. A resposta a este facto pode ser encontrada nas escrituras realizadas pelos serventes que trabalharam no castelo."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Malbork_Castle",
        "situacao": "ok",
        "texto": "The Castle of the Teutonic Order in Malbork, commonly known as Malbork Castle (Polish: Zamek w Malborku; German: Ordensburg Marienburg), is a Brick Gothic castle complex located in the town of Malbork, Poland, built in the 13th and significantly expanded in the 14th century. It is the largest castle in the world measured by land area and a UNESCO World Heritage Site.\n[…]\nIt was constructed by the Teutonic Order, a German Catholic religious order of crusaders, in the form of an Ordensburg fortress and named Marienburg in honour of Mary, mother of Jesus. In 1457, during the Thirteen Years' War, the castle was sold by Bohemian mercenaries to King Casimir IV of Poland in lieu of indemnities.\n[…]\nMalbork became more important in the aftermath of the Teutonic Knights' conquest of Gdańsk (Danzig) and Eastern Pomerania in 1308. The Order's administrative centre was moved to Marienburg from Elbing (now Elbląg). The Grand Master of the Teutonic Knights, Siegfried von Feuchtwangen, who arrived in Marienburg from Venice, undertook the next phase of the fortress' construction.\n[…]\nWith the rise of Adolf Hitler to power in the early 1930s, the Nazis used the castle as a destination for annual pilgrimages of both the Hitler Youth and the League of German Girls. The Teutonic Castle at Marienburg served as a blueprint for the Order Castles of the Third Reich built under Hitler's reign. Between January 1945 and the retreat of the last German troops from the castle grounds on 9 March 1945, more than half the castle had been destroyed during fighting with Red Army forces.\n[…]\nMalbork Castle remains the largest brick complex in Europe.\n[…]\nTrakai Island Castle, similar architecture\n[…]\nList of castles in Poland\n[…]\nMalbork Castle Museum\n[…]\n\"Malbork\", Castles of Poland\n[…]\nHistory and photos of the Malbork castle (in Polish)\n[…]\nThe Association of Castles and Museums around the Baltic Sea"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Garfo",
      "descricao": "Talher com dentes usado para levar comida à boca, que se difundiu na Europa a partir de Bizâncio e da Itália."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "No início do século onze, uma sobrinha do imperador bizantino escandalizou que cidade italiana ao comer com um garfo de ouro?",
    "resposta": "Veneza",
    "fonte": [
      "https://en.wikipedia.org/wiki/Fork",
      "https://en.wikipedia.org/wiki/Maria_Argyropoulina"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fork",
        "situacao": "ok",
        "texto": "In cutlery or kitchenware, a fork (from Latin: furca 'pitchfork') is a utensil, now usually made of metal, whose long handle terminates in a head that branches into several narrow and often slightly curved tines with which one can spear foods either to hold them to cut with a knife or to lift them to the mouth.\n[…]\nBy the 11th century, the table fork had become increasingly prevalent in the Italian Peninsula because of historical ties with the Eastern Roman Empire and, as pasta became a greater part of the Italian diet, continued to gain popularity, displacing the long wooden spike formerly used since the fork's three spikes proved better suited to gathering the noodles. By the 14th century the table fork had become commonplace in Italy, and by 1600 was almost universal among the merchant and upper classes.\n[…]\nAlthough in Portugal forks were first used around 1450 by Infanta Beatrice, Duchess of Viseu, King Manuel I of Portugal's mother, only by the 16th century, when they had become part of Italian etiquette, did forks enter into common use in southwestern Europe, gaining some currency in Spain, and gradually spreading to France. The rest of Europe did not adopt the fork until the 18th century.\n[…]\nThe fork's adoption in northern Europe was slower. Its use was first described in English by Thomas Coryat in a volume of writings on his Italian travels (1611), but for many years it was viewed as an unmanly Italian affectation. Some writers of the Roman Catholic Church expressly disapproved of its use; St. Peter Damian seeing it as \"excessive delicacy\".\n[…]\nTerrapin fork: A specialized spoon-fork for eating terrapin dishes, a predecessor of the spork.\n[…]\nFork etiquette\n[…]\nWilson, B. (2012). Consider the Fork: A History of How We Cook and Eat. Basic Books. ISBN 978-0-465-02176-5. Retrieved 5 June 2024."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Maria_Argyropoulina",
        "situacao": "ok",
        "texto": "Maria Argyra (also Argyre or Argyropoulina) (Greek: Μαρία Ἀργυρή or Ἀργυροπουλίνα; died 1006 or 1007), of the Argyros family, was the great-granddaughter of the Byzantine emperor Romanos I Lakapenos, cousin of the emperors Basil II and Constantine VIII, and sister to the Byzantine emperor Romanos III Argyros.\n[…]\nHalf a century after her death, she was criticised by Peter Damian for her use of a fork for eating (forks being unfamiliar in Western Europe at the time), perfumes, and dew for bathing, although these criticisms were later mistakenly believed to be aimed at another Byzantine princess, the dogaressa Theodora Doukaina.\n[…]\nTăpkova-Zaimova, Vasilka (2017). \"CHAPTER 5 Latin, French and Italian Sources\". Bulgarians by Birth : The Comitopuls, Emperor Samuel and Their Successors According to Historical Sources and the Historiographic Tradition. Translated by Pavel Murdzhev. Leiden: Brill. p. 155. doi:10.1163/9789004352995_007. ISBN 978-90-04-35299-5. ISSN 1872-8103."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Garfo",
        "situacao": "ok",
        "texto": "Garfo é um utensílio culinário utilizado pela civilização ocidental moderna para a alimentação. Serve principalmente para segurar alimentos rígidos e levá-los à boca, mas também se usa na cozinha para segurar os produtos a cozinhar e para pisar, por exemplo, batatas ou cenouras cozidas, em puré.\n[…]\nO garfo de mesa foi inventado no Império Bizantino pelos anos 300. No século VIII estava disseminado no Oriente. Os cronistas medievais registraram o espanto que a princesa Teofânia Esclerina causou aos ocidentais, porque ela usava um garfo em vez de suas mãos enquanto fazia a refeição na corte de seu marido Otão II do Sacro Império Romano-Germânico a partir de 972. Outras princesas do Império Bizantino contraíram núpcias com reis da Europa e também trouxeram seus garfos.\n[…]\nA princesa Maria Argyropoulina, casada  Giovanni Orseolo, filho de Pietro II Orseolo, causou escândalo público em Veneza no ano 1004, quando se recusou a utilizar-se de seus próprios dedos para levar o alimento à boca, no que foi severamente criticada por São Pedro Damião, Doutor da Igreja, que escreveu:\n[…]\nA princesa Teodora, filha de Constantino VIII Imperador do Oriente, que veio de Constantinopla para casar com o Doge de Veneza Domenico Selvo também trouxe seu garfo de ouro com dois dentes, como o qual comia frutas cristalizadas. No entanto, pouco depois a população dessa cosmopolita cidade da época assimilou o garfo. Esse costume se espalhou para Milão e Florença e daí para o resto da Europa. O talher já era bem conhecido na Itália do século XV.\n[…]\nGarfo de mesa\n[…]\nGarfo de trinchar ou de cozinha.\n[…]\nDe sobremesa - para comer doces ou frutas após a refeição\n[…]\nDe desopercular - Garfo desoperculador\n[…]\nÉ conhecido como tridente de Netuno, garfo com poderes mágicos quando em domínio do Rei do mar.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "L'Anse aux Meadows",
      "descricao": "Sítio arqueológico na ilha de Terra Nova com ruínas de um assentamento nórdico de cerca do ano mil."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "O sítio arqueológico de L'Anse aux Meadows, com ruínas de casas vikings de cerca do ano mil, fica em que país?",
    "resposta": "Canadá",
    "fonte": [
      "https://pt.wikipedia.org/wiki/L'Anse_aux_Meadows",
      "https://en.wikipedia.org/wiki/L'Anse_aux_Meadows"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/L'Anse_aux_Meadows",
        "situacao": "ok",
        "texto": "L'Anse aux Meadows é um sítio arqueológico, escavado pela primeira vez na década de 1960, que preserva os vestígios de um assentamento nórdico datado de aproximadamente mil anos atrás. O local fica próximo à cidade de St. Anthony, na ponta mais ao norte da ilha de Terra Nova, na província canadense de Terra Nova e Labrador, no Canadá.\n[…]\nCom estimativas por datação por radiocarbono situadas entre os anos 990 e 1050 d.C. (com média em 1014) e datação por anéis de árvores indicando o ano de 1021 , L'Anse aux Meadows é o único sítio comprovado de contato transoceânico pré-colombiano entre europeus e as Américas fora da Groenlândia.\n[…]\nAbrangendo cerca de 8 mil hectares de terra e mar, o sítio contém os restos de oito edificações construídas com blocos de turfa sobre estruturas de madeira. Mais de 800 objetos de origem nórdica foram encontrados no local , incluindo artefatos de bronze, osso e pedra, além de evidências da produção de ferro. O sítio foi designado Sítio Histórico Nacional do Canadá em 1968 e reconhecido como Patrimônio Mundial pela UNESCO em 1978, sendo atualmente administrado pela Parks Canada.\n[…]\nAntes da chegada dos nórdicos à Terra Nova, há evidências de que cinco grupos indígenas ocuparam o sítio de L'Anse aux Meadows, sendo a ocupação mais antiga datada de aproximadamente 6 mil anos atrás. Nenhum desses grupos foi contemporâneo da presença nórdica. A ocupação anterior mais significativa foi a do povo Dorset, que esteve no local cerca de 300 anos antes dos nórdicos.\n[…]\nSegundo um estudo publicado em 2019 n revista Proceedings of the National Academy of Sciences of the United States of America, pode ter havido atividade nórdica em L'Anse aux Meadows por até um século. Não há como saber qual era a população do sítio em determinado momento, embora as habitações pudessem acomodar entre 30 e 160 pessoas."
      },
      {
        "url": "https://en.wikipedia.org/wiki/L'Anse_aux_Meadows",
        "situacao": "ok",
        "texto": "L'Anse aux Meadows is an archaeological site, first excavated in the 1960s, of a Norse settlement dating to approximately 1,000 years ago. The site is located near St. Anthony on the northernmost tip of the island of Newfoundland in the Canadian province of Newfoundland and Labrador.\n[…]\nSpanning 8,000 hectares (31 sq mi) of land and sea, the site contains the remains of eight buildings constructed of sod over a wood frame, with over 800 Norse objects unearthed, including bronze, bone, and stone artifacts, and evidence of iron production. The site was designated a National Historic Site of Canada in 1968 and a World Heritage Site by UNESCO in 1978, and is managed by Parks Canada.\n[…]\nAccording to a 2019 Proceedings of the National Academy of Sciences of the United States of America study, there may have been Norse activity in L'Anse aux Meadows for as long as a century.\n[…]\nIn November 1968, the Government of Canada named the archaeological site a National Historic Site of Canada. The site was also named a World Heritage Site in 1978 by UNESCO. After L'Anse aux Meadows was named a national historic site, the area, and its related tourist programs, have been managed by Parks Canada. After the first excavation was completed, two more excavations of the site were ordered by Parks Canada.\n[…]\nCampbell, Claire Elizabeth (2017). Nature, Place, and Story: Rethinking Historic Sites in Canada. Montreal and Kingston: McGill-Queen's University Press. ISBN 9780773551251.\n[…]\nLogan, F. Donald (2005). The Vikings in History (third ed.). New York: Routledge. ISBN 0-415-32755-5. ISBN 0-415-32756-3 (paperback).\n[…]\nL'Anse aux Meadows National Historic Site, Parks Canada\n[…]\nL'Anse aux Meadows National Historic Site by UNESCO\n[…]\nThe Vinland Mystery on YouTube by the National Film Board of Canada"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Papado de Avignon",
      "descricao": "Período de 1309 a 1377 em que os papas residiram em Avignon, no sul da França, em vez de Roma."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Entre 1309 e 1377, os papas deixaram Roma e passaram a viver em que cidade do sul da França?",
    "resposta": "Avignon (Avinhão)",
    "fonte": [
      "https://en.wikipedia.org/wiki/Avignon_Papacy"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Avignon_Papacy",
        "situacao": "ok",
        "texto": "The Avignon Papacy (Occitan: Papat d'Avinhon; French: Papauté d'Avignon) was the period from 1309 to 1376 during which seven successive popes resided in Avignon (at the time within the Kingdom of Arles, part of the Holy Roman Empire, now part of France) rather than in Rome. The situation arose from the conflict between the papacy and the French crown, culminating in the death of Pope Boniface VIII\n[…]\nFollowing the subsequent death of Pope Benedict XI, Philip pressured a deadlocked conclave to elect the archbishop of Bordeaux as Pope Clement V in 1305. Clement refused to move to Rome, and in 1309 he moved his court to the papal enclave at Avignon, where it remained for the next 67 years. This absence from Rome is sometimes referred to as the \"Babylonian captivity\" of the papacy (cf. Italian cattività avignonese, i.e. \"Avignonese captivity\").\n[…]\nClement VI was also pope during the Black Death, the epidemic that swept through Europe between 1347 and 1350 and is believed to have killed about one-third of Europe's population. Also during his reign in 1348, the Avignon papacy bought the city of Avignon from the Angevins.\n[…]\nAs noted, the \"captivity\" of the popes at Avignon lasted about the same amount of time as the exile of the Jews in Babylon, making the analogy convenient and rhetorically potent. The Avignon papacy has been and is often today depicted as being totally dependent on the French kings, and sometimes as even being treacherous to its spiritual role and its heritage in Rome.\n[…]\nIn the period of the Schism, the power struggle in the papacy became a battlefield of the major powers, with France supporting the antipopes in Avignon and England supporting the popes in Rome. During the Schism, papal allegiance increasingly followed political and dynastic divisions, with France generally supporting the Avignon line and England supporting the Roman line."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Papado_de_Avinh%C3%A3o",
        "situacao": "ok",
        "texto": "O Papado de Avinhão, conhecido também como \"Cativeiro de Avignon\" ou ''Papado de Avignon'', diz respeito a um período da história do papado e da Igreja Católica, compreendido entre 1309 e 1377, quando a residência do papa foi alterada de Roma para Avinhão. À medida que o poder real foi se fortalecendo na França, surgiram conflitos com a Igreja. Durante o reinado de Filipe IV de França, o Belo (128\n[…]\nO Papa não permitia que o rei cobrasse tributos da igreja francesa. O sucessor do Papa Bonifácio VIII, Clemente V, foi levado (sem possibilidade de debate) pelo rei francês a residir em Avinhão, dando origem aos papas franceses que viveram naquela cidade.\n[…]\nEste episódio é conhecido como a \"Crise de Avinhão\", dando início ao período chamado de \"cativeiro babilônico dos papas\" (ou da Igreja), uma alusão ao exílio bíblico de Israel na Babilônia. Este apelido é controverso pelo que se refere à crítica expressa do facto de a prosperidade da Igreja deste tempo ter sido acompanhada de um profundo compromisso da integridade espiritual do papado, especialmente no que toca à alegada submissão dos poderes da Igreja às ambições do rei francês.\n[…]\nPor coincidência, o \"cativeiro\" dos papas em Avinhão durou aproximadamente o mesmo tempo que o exílio dos Judeus na Babilônia, (ver: Cativeiro Babilônico) tornando a analogia ainda mais conveniente e retoricamente poderosa.\n[…]\nO rei Filipe IV de França conseguiu que fosse eleito papa um francês em 1305 (que adotou o nome de Clemente V) e, em 1309, persuadiu-o a deslocar a sede papal de Roma para Avinhão, às margens do rio Ródano.\n[…]\nSete papas residiram em Avinhão:\n[…]\nEm 1377 a residência do papa foi transferida de volta para Roma por Gregório XI, que faleceu um ano depois, enquanto um papa rival era eleito em Avinhão.\n[…]\nArquidiocese de Avinhão",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Kinkaku-ji",
      "descricao": "Templo budista zen em Quioto, conhecido como Pavilhão Dourado, originado numa vila do xogum Ashikaga Yoshimitsu de 1397."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "O Pavilhão Dourado, templo budista coberto de folhas de ouro cuja origem remonta ao fim do século quatorze, fica em que cidade japonesa?",
    "resposta": "Quioto",
    "distratores": [
      "Nara",
      "Kamakura",
      "Tóquio"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Kinkaku-ji",
      "https://en.wikipedia.org/wiki/Kinkaku-ji"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Kinkaku-ji",
        "situacao": "ok",
        "texto": "O Kinkaku-ji (em japonês 金閣寺, Templo do Pavilhão Dourado) é o templo Rokuon-ji (鹿苑寺), situado na cidade de Quioto no Japão e rodeado pelo Kyōko-chi (lago espelhado). Todo o pavilhão, exceto o rés-de-chão (andar térreo), está coberto de folha de ouro puro e no telhado do pavilhão está uma fenghuang dourada (fénix chinesa).\n[…]\nO local onde o Pavilhão Dourado (designado formalmente por 'Shariden') se situa, foi usado por volta de 1220 como local de descanso para Kintsune Saionji, mas o pavilhão em si só foi construído em 1397, para servir como sítio de descanso para o shogun Ashikaga Yoshimitsu. O seu filho foi o responsável pela conversão num templo Zen de orientação Rinzai. Durante a Guerra de Ōnin o templo foi queimado várias vezes.\n[…]\nO neto de Yoshimitsu criou o Ginkaku-ji inspirado no Kinkaku-ji, e tencionava cobrir o novo templo budista de prata, o que acabou por não conseguir fazer.\n[…]\nEm 1950, o templo foi incendiado por um monge que sofria de perturbações mentais, sendo relatada uma versão ficcionada dos acontecimentos no livro O Templo do Pavilhão Dourado de Yukio Mishima, que foi publicado pela primeira vez em 1956. A estrutura actual data de 1955.\n[…]\nRecentemente verificou-se que o revestimento estava um pouco estragado tendo-se reparado esta situação e colocado uma nova cobertura de folha de ouro, muito mais espessa que a original. Além destas medidas também se restaurou o interior do edifício, incluindo as pinturas, sendo o telhado restaurado em 2003.\n[…]\nKinkaku-ji do Brasil"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Kinkaku-ji",
        "situacao": "ok",
        "texto": "Kinkaku-ji (金閣寺; Japanese pronunciation: [kʲiꜜŋ.ka.kɯ.dʑi], lit. 'Temple of the Golden Pavilion'), officially named Rokuon-ji (鹿苑寺; [ɾoꜜ.kɯ.oɲ.dʑi], lit. 'Deer Garden Temple'), is a Zen Buddhist temple in Kyoto, Japan and a tourist attraction. It is designated as a World Heritage Site, a National Special Historic Site, a National Special Landscape, and one of the 17 Historic Monuments of Ancient K\n[…]\nOn 2 July 1950, at 2:30 am, the pavilion was burned down by a 22-year-old novice monk, Hayashi Shoken (Kinkaku-ji arson incident), who then attempted suicide on the Daimon-ji hill behind the building. He survived, and was subsequently taken into custody. The monk was sentenced to seven years in prison, but was released because of mental illnesses (persecution complex and schizophrenia) on 29 September 1955; he died of tuberculosis in March 1956.\n[…]\nThe Golden Pavilion (金閣, Kinkaku) is a three-story building on the grounds of the Rokuon-ji temple complex. The top two stories of the pavilion are covered with pure gold leaf. The pavilion functions as a shariden (舎利殿), housing relics of the Buddha (Buddha's Ashes). The building was an important model for Ginkaku-ji (Silver Pavilion Temple) and Shōkoku-ji, which are also located in Kyoto.\n[…]\nWhen these buildings were constructed, Ashikaga Yoshimasa employed the styles used at Kinkaku-ji and even borrowed the names of its second and third floors.\n[…]\nThe pavilion successfully incorporates three distinct styles of architecture, which are shinden, samurai and zen, specifically on each floor. Each floor of the Kinkaku uses a different architectural style.\n[…]\nThe Temple of the Golden Pavilion by Yukio Mishima, a novel loosely based on the 1950 destruction of Kinkaku-ji\n[…]\nOfficial site of Kinkaku-ji\n[…]\nOriental Architecture – Kinkakuji Temple\n[…]\nOmamori Charms Amulets of Kinkaku-ji Temple\n[…]\nGeographic data related to Kinkaku-ji at OpenStreetMap"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Batalha de Tours",
      "descricao": "Batalha de 732, entre Tours e Poitiers, em que os francos detiveram o avanço do exército omíada na Gália."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 732, perto de Poitiers, que líder franco, avô de Carlos Magno, deteve o avanço dos exércitos muçulmanos na França?",
    "resposta": "Carlos Martel",
    "fonte": [
      "https://en.wikipedia.org/wiki/Battle_of_Tours",
      "https://en.wikipedia.org/wiki/Charles_Martel"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Battle_of_Tours",
        "situacao": "ok",
        "texto": "The Battle of Tours, also called the Battle of Poitiers and the Battle of the Highway of the Martyrs (Arabic: معركة بلاط الشهداء, romanized: Maʿrakat Balāṭ ash-Shuhadā'), was fought on 10 October 732, and was an important battle during the Umayyad invasion of Gaul. It resulted in victory for the Frankish and Aquitanian forces, led by Charles Martel, over the invading Umayyad forces, led by Abd al-\n[…]\nCharles Martel's family composed, for the fourth book of the Continuations of Fredegar's Chronicle, a stylized summary of the battle:\n[…]\nVictorian writer John Henry Haaren says in Famous Men of the Middle Ages \"The battle of Tours or Poitiers as it should be called is regarded as one of the decisive battles of the world. It decided that Christians and not Muslims should be the ruling power in Europe.\" Bernard Grun delivers this assessment in his \"Timetables of History\", reissued in 2004: \"In 732 Charles Martel's victory over the Arabs at the Battle of Tours stems the tide of their westward advance.\"\n[…]\nProfessor of religion Huston Smith says in The World's Religions: Our Great Wisdom Traditions \"But for their defeat by Charles Martel in the Battle of Tours in 732, the entire Western world might today be Muslim.\" Historian Robert Payne on page 142 in The History of Islam said \"The more powerful Muslims and the spread of Islam were knocking on Europe's door. And the spread of Islam was stopped along the road between the towns of Tours and Poitiers, France, with just its head in Europe.\"\n[…]\nOther historians disagree with this assessment. Alessandro Barbero writes, \"Today, historians tend to play down the significance of the battle of [Tours-Poitiers], pointing out that the purpose of the Muslim force defeated by Charles Martel was not to conquer the Frankish kingdom, but simply to pillage the wealthy monastery of St-Martin of Tours\". Similarly, Tomaž Mastnak writes:\n[…]\nBattle of Stilo"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Charles_Martel",
        "situacao": "ok",
        "texto": "Charles Martel (; c. 688 – 22 October 741), Martel being an Old French sobriquet meaning \"The Hammer\", was a Frankish political and military leader who, as Duke and Prince of the Franks and Mayor of the Palace, was the de facto ruler of the Franks from 718 until his death. He was a son of the Frankish statesman Pepin of Herstal and a noblewoman named Alpaida. Charles successfully asserted his clai\n[…]\n\"Had Charles Martel suffered at Tours-Poitiers the fate of King Roderick at the Rio Barbate, it is doubtful that a 'do-nothing' sovereign of the Merovingian realm could have later succeeded where his talented major domus had failed.\n[…]\nIndeed, as Charles was the progenitor of the Carolingian line of Frankish rulers and grandfather of Charlemagne, one can even say with a degree of certainty that the subsequent history of the West would have proceeded along vastly different currents had 'Abd al-Rahman been victorious at Tours-Poitiers in 732.\"\n[…]\n\"Today, historians tend to play down the significance of the battle of Poitiers, pointing out that the purpose of the Arab force defeated by Charles Martel was not to conquer the Frankish kingdom, but simply to pillage the wealthy monastery of St-Martin of Tours\".\n[…]\nPoke's edition of Creasy's 15 Most Important Battles Ever Fought According to Edward Shepherd Creasy \"Chapter VII. The Battle of Tours, A.D. 732.\"\n[…]\n\"The Battle of Tours\"—In Our Time, BBC Radio 4 (2014)\n[…]\nMedieval Sourcebook: Arabs, Franks, and the Battle of Tours, 732 (Archived 11 October 2014 at the Wayback Machine)\n[…]\nArabs, Franks, and the Battle of Tours, 732: Three Accounts (Archived 11 October 2014 at the Wayback Machine) from the Internet Medieval Sourcebook\n[…]\nMedieval Sourcebook: Gregory II to Charles Martel, 739 (Archived 29 April 2008 at the Wayback Machine)\n[…]\nPfister, Christian (1911). \"Charles Martel\" . Encyclopædia Britannica. Vol. 5 (11th ed.). pp. 942–943."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Batalha_de_Poitiers_%28732%29",
        "situacao": "ok",
        "texto": "A Batalha de Poitiers, também conhecida como Batalha de Tours, travou-se entre o exército do Reino Franco, liderados por Carlos Martel — prefeito do palácio de Paris, da dinastia Carolíngia, governante de facto do reino — e os mouros, do exército do Alandalus, liderado por Algafequi, governante de Córdova sob domínio do Califado Omíada de Damasco, por volta de 10 de outubro de 732.\n[…]\nO escritor vitoriano John Henry Haaren diz em Famous Men of the Middle Ages \"A batalha de Tours ou Poitiers, como deveria ser chamada, é considerada uma das batalhas decisivas do mundo. Decidiu que os cristãos e não os muçulmanos deveriam ser o poder dominante na Europa.\" Bernard Grun faz esta avaliação nos seus \"Timetables of History\", reeditado em 2004: \"Em 732, a vitória de Carlos Martel sobre os árabes na Batalha de Tours trava a maré do seu avanço para oeste.\"\n[…]\nEufórico com a vitória em Tours, Carlos Martel continuou a limpar o sul da França dos atacantes islâmicos durante décadas, unificar os reinos em guerra nas fundações do Império Carolíngio e garantir tropas prontas e fiáveis das propriedades locais.\n[…]\nOutros historiadores discordam desta avaliação. Alessandro Barbero escreve: \"Hoje, os historiadores tendem a minimizar o significado da batalha de [Tours-Poitiers], salientando que o propósito da força muçulmana derrotada por Carlos Martel não era conquistar o reino franco, mas simplesmente pilhar o rico mosteiro de St-Martin de Tours\". Da mesma forma, Tomaž Mastnak escreve:\n[…]\nOs historiadores modernos construíram um mito apresentando esta vitória como tendo salvo a Europa cristã dos muçulmanos. Edward Gibbon, por exemplo, chamou Carlos Martel de salvador da Cristandade e a batalha perto de Poitiers um encontro que mudou a história do mundo. ... Este mito sobreviveu bem até aos nossos dias. ... Os contemporâneos da batalha, no entanto, não exageraram o seu significado.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Primeira Cruzada",
      "descricao": "Expedição militar cristã de 1096 a 1099 que terminou com a tomada de Jerusalém."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1095, no Concílio de Clermont, na França, que papa convocou os cristãos para a Primeira Cruzada?",
    "resposta": "Urbano II",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Primeira_Cruzada",
      "https://en.wikipedia.org/wiki/First_Crusade"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Primeira_Cruzada",
        "situacao": "ok",
        "texto": "A Primeira Cruzada (1096–1099) foi a primeira de uma série de guerras religiosas, ou Cruzadas, iniciadas, apoiadas e às vezes dirigidas pela Igreja Católica no período medieval. O objetivo era recuperar a Terra Santa do domínio islâmico. Embora Jerusalém tenha estado sob domínio muçulmano por centenas de anos, no século XI, a conquista da região pelos seljúcidas ameaçou as populações cristãs locai\n[…]\nA primeira iniciativa da Primeira Cruzada começou em 1095, quando o imperador bizantino Aleixo I Comneno solicitou apoio militar do Concílio de Placência no conflito do império com os turcos liderados pelos seljúcidas. Isso foi seguido no final do ano pelo Concílio de Clermont, durante o qual o papa Urbano II apoiou o pedido bizantino de ajuda militar e também exortou os cristãos fiéis a empreender uma peregrinação armada a Jerusalém.\n[…]\nOs principais impulsos eclesiásticos por trás da Primeira Cruzada foram o Concílio de Placência e o subsequente Concílio de Clermont, ambos celebrados em 1095 pelo papa Urbano II, e resultaram na mobilização da Europa Ocidental para ir à Terra Santa.\n[…]\nQualquer que seja a cifra, é fato que o discurso de Urbano foi bem planejado. Havia discutido a cruzada com Ademar de Monteil e o conde Raimundo IV de Tolosa, e imediatamente a expedição teve o apoio de dois dos líderes mais importantes do sul da França. O próprio Ademar esteve presente no concílio e foi o primeiro a \"levar a cruz\".\n[…]\nDurante o resto de 1095 e em 1096, Urbano espalhou a mensagem por toda a França e exortou seus bispos e legados a pregar em suas próprias dioceses em outras partes da França, Sacro Império e Itália. No entanto, é claro que a resposta ao discurso foi muito maior do que até mesmo o papa, quanto mais Aleixo, esperava. Em sua viagem pela França, tentou proibir certas pessoas (incluindo mulheres, monges e doentes) de se juntar à cruzada, mas achou isso quase impossível."
      },
      {
        "url": "https://en.wikipedia.org/wiki/First_Crusade",
        "situacao": "ok",
        "texto": "The First Crusade (1096–1099) was the first of a series of religious wars, or Crusades, which were initiated, supported and at times directed by the Latin Church in the Middle Ages. Their aim was to return the Holy Land to Christian rule after its conquest by the Rashidun Caliphate in the 7th century.\n[…]\nThe major ecclesiastical impetuses behind the First Crusade were the Council of Piacenza and subsequent Council of Clermont, both held in 1095 by Pope Urban II, and resulted in the mobilisation of Western Europe to go to the Holy Land. Emperor Alexios, who worried about the advances of the Seljuks into his territory, sent envoys to the Council of Piacenza in March 1095 to ask Urban for aid against the invading Turks.\n[…]\nThese include multiple first-hand accounts of the Council of Clermont and the crusade itself. American historian August Krey has created a narrative The First Crusade: The Accounts of Eyewitnesses and Participants, verbatim from the various chronologies and letters which offers considerable insight into the endeavour.\n[…]\nAccording to the Routledge Companion, the three works that rank as being monumental by 20th-century standards are: René Grousset's Histoire des croisades et du royaume franc de Jérusalem; Steven Runciman's 3-volume set of A History of the Crusades, and the Wisconsin Collaborative History of the Crusades (Wisconsin History). Grousset's volume on the First Crusade was L'anarchie musulmane, 1095–1130, a standard reference in the mid-twentieth century.\n[…]\nHis work includes The First Crusade and the Idea of Crusading (1993) and The First Crusaders, 1095–1131 (1998). His doctoral students are among the most renowned in the world and he led the team that created the Database of Crusaders to the Holy Land, 1096–1149.\n[…]\nPilgrim's Road, followed by the Crusaders"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Hagia Sophia",
      "descricao": "Antiga catedral bizantina de Constantinopla, depois mesquita, em Istambul, concluída em 537."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Concluída em 537, a basílica de Santa Sofia, em Constantinopla, foi construída por ordem de que imperador bizantino?",
    "resposta": "Justiniano I",
    "fonte": [
      "https://en.wikipedia.org/wiki/Hagia_Sophia",
      "https://pt.wikipedia.org/wiki/Hagia_Sophia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hagia_Sophia",
        "situacao": "ok",
        "texto": "Hagia Sophia, officially the Hagia Sophia Grand Mosque, is a mosque and a major cultural and historical site in Istanbul, Turkey. It was formerly a church (360–1453) and a museum (1935–2020). The last of three church buildings to be successively erected on the site by the Eastern Roman Empire, it was completed in AD 537, becoming the world's largest interior space and among the first to employ a f\n[…]\nThe current structure was built by the Byzantine emperor Justinian I as the Christian basilica of Constantinople between 532–537 and was designed by the Greek geometers Isidore of Miletus and Anthemius of Tralles. It was formally called the Temple of God's Holy Wisdom, (Greek: Ναὸς τῆς Ἁγίας τοῦ Θεοῦ Σοφίας, romanized: Naòs tês Hagías toû Theoû Sophías) the third church of the same name to occupy the site, as the prior one had been destroyed in the Nika riots.\n[…]\nAt the edge of the Augustaeum was the Milion and the Regia, the first stretch of Constantinople's main thoroughfare, the Mese. Also facing the Augustaeum were the enormous Constantinian thermae, the Baths of Zeuxippus, and the Justinianic civic basilica under which was the vast cistern known as the Basilica Cistern. On the opposite side of Hagia Sophia was the former cathedral, Hagia Irene.\n[…]\nProcopius lauded the Justinianic building, writing in De aedificiis:\n[…]\nJustinian and Patriarch Menas inaugurated the new basilica on 27 December 537, 5 years and 10 months after construction started, with much pomp. Hagia Sophia was the seat of the Patriarchate of Constantinople and a principal setting for Byzantine imperial ceremonies, such as coronations. The basilica offered sanctuary from persecution to criminals, although there was disagreement about whether Justinian had intended for murderers to be eligible for asylum.\n[…]\nRunic inscriptions in Hagia Sophia\n[…]\nHagia Sophia Museum, Republic of Turkey, Ministry of Culture & Tourism"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hagia_Sophia",
        "situacao": "ok",
        "texto": "Santa Sofia (em grego: Άγια Σοφία; romaniz.: Agia Sophia, que significa \"Sagrada Sabedoria\"; em turco: Ayasofya), oficialmente Grande Mesquita de Santa Sofia (em turco:  Ayasofya-i Kebir Cami-i Şerifi), é um imponente edifício construído entre 532 e 537 pelo Império Bizantino para ser a catedral de Constantinopla (atualmente Istambul, na Turquia).\n[…]\nO edifício atual foi construído originalmente como uma igreja entre 532 e 537 por ordem do imperador bizantino Justiniano I e foi a terceira igreja de Santa Sofia a ocupar o local, as duas anteriores tendo sido destruídas em revoltas civis. Ela foi projetada pelos cientistas gregos Isidoro de Mileto, um médico, e Antêmio de Trales, um matemático.\n[…]\nO imperador, juntamente com o patriarca Eutíquio de Constantinopla, inauguraram a nova basílica em 27 de dezembro de 537 com pompa e circunstância. Contudo, os mosaicos internos só foram completados sob o reinado de Justino II (r. 565–578).\n[…]\nEsta reconstrução foi completada no ano de 562 e o poeta bizantino Paulo Silenciário compôs um longo poema (ainda existente), conhecido como Ekphrasis, onde ele a comparou a um \"campo de mármore\", tantas as cores utilizadas. A reabertura foi presidida novamente pelo patriarca Eutíquio de Constantinopla no dia 23 de dezembro de 562. A riqueza e o nível artístico da basílica teria levado Justiniano a dizer Νενίκηκά σε Σολομών (\"Salomão, eu te superei!\").\n[…]\nSanta Sofia é um dos grandes exemplos ainda existentes da arquitetura bizantina. Seu interior, decorado com pilares de mármore e mosaicos é de grande valor artístico. O próprio imperador Justiniano supervisionou a finalização da maior catedral já construída na época. Ela foi a maior conquista arquitetônica da antiguidade tardia e sua influência se espalhou pelo mundo ortodoxo, católico e islâmico."
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Cânone da Medicina",
      "descricao": "Enciclopédia médica escrita por Avicena no início do século onze, usada como manual nas universidades europeias."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Que sábio persa escreveu, no início do século onze, o Cânone da Medicina, usado nas universidades europeias por séculos?",
    "resposta": "Avicena",
    "distratores": [
      "Averróis",
      "Rasis",
      "Al-Biruni"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Canon_of_Medicine",
      "https://en.wikipedia.org/wiki/Avicenna"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Canon_of_Medicine",
        "situacao": "ok",
        "texto": "The Canon of Medicine (Arabic: القانون في الطب, romanized: al-Qānūn fī l-ṭibb) is an encyclopedia of medicine in five books compiled by Ibn Sina (ابن سینا, Avicenna) and completed in 1025. It is among the most influential works of its time. It presents an overview of the contemporary medical knowledge of the Islamic world, which had been influenced by earlier traditions including Greco-Roman medic\n[…]\nThe information presented in Book 3 of the Canon of Medicine represents some of Avicenna's most important contributions to several fields of study, including atherosclerosis, pulsology, migraines, cataracts, vasovagal syncope, and neuroscience.\n[…]\nEach of these classifications were further subdivided: for example, Avicenna also listed 23 different types of ephemeral fevers in Book 4 of the Canon of Medicine.\n[…]\nThe Canon's influence declined in the 16th century as a result of humanists' preference in medicine for ancient Greek and Roman authorities over Arabic authorities, although others defended Avicenna's innovations beyond the original classical texts. It fell out of favour in university syllabi, although it was still being taught as background literature as late as 1715 in Padua.\n[…]\nAvicenna (1999). The Canon of Medicine (al-Qānūn fī'l-ṭibb), vol. 1. Laleh Bakhtiar (ed.), Oskar Cameron Gruner (trans.), Mazhar H. Shah (trans.). Great Books of the Islamic World. ISBN 978-1-871031-67-6.\n[…]\nAvicenna, 980–1037. (1973). A treatise on the Canon of medicine of Avicenna, incorporating a translation of the first book,. Gruner, Oskar Cameron,. [New York],: [AMS Press]. ISBN 0404112315. OCLC 677548.\n[…]\nZargaran A, Zarshenas MM, Karimi A, Yarmohammadi H, Borhani-Haghighi A (2013). \"Management of stroke as described by Ibn Sina (Avicenna) in the Canon of Medicine\". Int J Cardiol. 169: 233–7. doi:10.1016/j.ijcard.2013.08.115. PMID 24063916.{{cite journal}}:  CS1 maint: multiple names: authors list (link)."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Avicenna",
        "situacao": "ok",
        "texto": "Ibn Sina (c. 980 – 22 June 1037), commonly known in the West as Avicenna, was a preeminent philosopher and physician of the Muslim world. He was a seminal figure of the Islamic Golden Age, serving in the courts of various Iranian rulers, and was influential to medieval European medical and Scholastic thought. Avicenna is considered one of the greatest thinkers and medical scholars in history.\n[…]\nOften described as the father of early modern medicine, Avicenna's most famous works are The Book of Healing, a philosophical and scientific encyclopedia, and The Canon of Medicine, a medical encyclopedia that became a standard medical text at many medieval European universities and remained in use as late as 1650.\n[…]\nDuring this period, Avicenna finished writing The Canon of Medicine and started writing his The Book of Healing.\n[…]\nAvicenna authored a five-volume comprehensive medical encyclopedia, The Canon of Medicine (Arabic: القانون في الطب, romanized: al-Qānūn fī l-ṭibb). The work is structured into five distinct books: the first covers general principles of medicine, the second outlines medicinal substances and their properties, the third discusses disease and treatments, the fourth is dedicated to health maintenance, and the fifth is about specific ailments and their cures.\n[…]\nAristotle's dominant intellectual influence among medieval European scholars meant that Avicenna's linking of Galen's medical writings with Aristotle's philosophical writings in the Canon of Medicine (along with its comprehensive and logical organisation of knowledge) significantly increased Avicenna's importance in medieval Europe in comparison to other Islamic writers on medicine.\n[…]\nAl-Qanun fi'l-tibb (The Canon of Medicine), ed. I. a-Qashsh, Cairo, 1987. (Encyclopedia of medicine.) manuscript, Latin translation, Flores Avicenne, Michael de Capella, 1508, Modern text. Ahmed Shawkat Al-Shatti, Jibran Jabbur."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/O_C%C3%A2none_da_Medicina",
        "situacao": "ok",
        "texto": "O Cânone da medicina (título original em árabe: القانون في الطب Al-Qanun fi al-Tibb) é uma enciclopédia médica de 14 volumes escrita pelo polímata muçulmano persa Ibn Sina (Avicena) em torno do ano 1020. O livro se baseava em uma combinação de sua própria experiência pessoal, de medicina islâmica medieval, dos escritos de Galeno, Sushruta e Charaka, assim como da antiga medicina persa e árabe. O C\n[…]\nConhecido também como o Qanun, que significa 'lei' no árabe e persa, O cânone da medicina foi uma autoridade da medicina até o século XVIII. Estabelece os princípios da medicina na Europa e no mundo islâmico e é uma das obras escritas mais reputadas de Avicena. Os princípios de medicina que descreveu neste livro há dez séculos seguem sendo ensinados na Universidade da Califórnia em Los Angeles e na Universidade de Yale entre outras como parte da história da medicina.\n[…]\nGeorge Sarton, o pai da história da ciência, escreveu em sua Introdução à história da ciência:\n[…]\nAvicena considerava que as causas da boa saúde e das doenças eram as seguintes:\n[…]\nO texto árabe do Qanun foi traduzido para latim como Canon medicinae por Gerardo de Cremona no século XII e no hebraico em 1279. A partir de então, o Canon foi o principal guia da ciência da medicina no ocidente e acredita-se que influenciou Leonardo da Vinci.\n[…]\nWilliam Osler, o Qanun tem sido \"uma bíblia da medicina durante mais tempo que nenhuma outra obra\". Os primeiros três livros do Canon em latim foram impressos em 1472 e em 1473 apareceu uma edição completa. A edição em hebraico de 1491 é a primeira aparição de um tratado médico em hebraico e o único publicado durante o século XV. Nos últimos 30 anos do século XV teve 15 edições em latim.\n[…]\nBiografia de Avicena (em inglês)\n[…]\nCopia escaneada del Kitab alQanun fi alTibb (Libro {del} Canon de la medicina)\n[…]\nProjeto do Museu Aga Khan (que incluirá a cópia mais antiga do Cânone da medicina) (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Julgamento dos Templários",
      "descricao": "Prisão em massa e processo contra os cavaleiros templários na França, iniciados em 13 de outubro de 1307."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Numa sexta-feira de outubro de 1307, que rei da França mandou prender todos os cavaleiros templários do reino?",
    "resposta": "Filipe IV, o Belo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Knights_Templar",
      "https://en.wikipedia.org/wiki/Philip_IV_of_France"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Knights_Templar",
        "situacao": "ok",
        "texto": "The Poor Fellow-Soldiers of Christ and of the Temple of Solomon, mainly known as the Knights Templar, was a  military order of the Catholic faith, and one of the most important military orders in Western Christianity. They were founded in 1118 to defend pilgrims on their way to Jerusalem, with their headquarters located there on the Temple Mount, and existed for nearly two centuries during the Mid\n[…]\nThe Templars were the subject of many conspiracy theories and legends. A legend is that when Louis XVI was executed, a freemason dipped a cloth in the king's blood and said, \"Jacques de Molay, you are avenged.\", the idea being that the king of France was responsible for destroying the Knights Templar back then. A theory states that they are still existent and running a secret conspiracy to preserve the bloodline of Jesus.\n[…]\nThere have been speculative popular publications surrounding the order's early occupation of the Temple Mount in Jerusalem as well as speculation about what relics the Templars may have found there. The association of the Holy Grail with the Templars has precedents even in 12th-century fiction; Wolfram von Eschenbach's Parzival calls the knights guarding the Grail Kingdom templeisen, apparently a conscious fictionalization of the templarii.\n[…]\nTemplari Cattolici d'Italia – A private Catholic lay association of the faithful living and promoting the spirituality of the Knights Templar of old\n[…]\nBrighton, Simon (2006). In Search of the Knights Templar: A Guide to the Sites in Britain. London: Orion Publishing Group. ISBN 978-0-297-84433-4.\n[…]\nUpton-Ward, Judith Mary (1992). The Rule of the Templars: The French Text of the Rule of the Order of the Knights Templar. Ipswich: Boydell Press. ISBN 978-0-85115-315-5.\n[…]\nTemplars – Encyclopedia Britannica\n[…]\nKnights Templar – World History Encyclopedia"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Philip_IV_of_France",
        "situacao": "ok",
        "texto": "Philip IV (April–June 1268 – 29 November 1314), called Philip the Fair (French: Philippe le Bel), was King of France from 1285 to 1314. By virtue of his marriage with Joan I of Navarre, he was also King of Navarre and Count of Champagne as Philip I from 1284 to 1305. Although Philip was known to be handsome, hence the epithet le Bel, his rigid, autocratic, imposing, and inflexible personality gain\n[…]\nDomestically, his reign was marked by struggles with the Jews and the Knights Templar. In heavy debt to both groups, Philip saw them as a \"state within the state\" and a recurring threat to royal power. In 1306 Philip expelled the Jews from France, followed by the total destruction of the Knights Templar in 1307. To further strengthen the monarchy, Philip tried to tax and impose state control over the Catholic Church in France, leading to a violent dispute with Pope Boniface VIII.\n[…]\nThis led to rioting in Paris on 30 December 1306, forcing Philip to briefly seek refuge in the Paris Temple, the headquarters of the Knights Templar.\n[…]\nAs the popularity of the Crusades had decreased, support for the military orders had waned, and Philip used a disgruntled complaint against the Knights Templar as an excuse to move against the entire organization as it existed in France, in part to free himself from his debts.\n[…]\nAt daybreak on Friday, 13 October 1307, hundreds of Templars in France were simultaneously arrested by agents of Philip the Fair, to be later tortured into admitting heresy in the Order. The Templars were supposedly answerable only to the Pope, but Philip used his influence over Clement V, who was largely his pawn, to disband the organization.\n[…]\nPope Clement did attempt to hold proper trials, but Philip used the previously forced confessions to have many Templars burned at the stake before they could mount a proper defence."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ordem_dos_Templ%C3%A1rios",
        "situacao": "ok",
        "texto": "A Ordem dos Pobres Cavaleiros de Cristo e do Templo de Salomão (em latim: \"Pauperes commilitones Christi Templique Salomonici\"), conhecida como Cavaleiros Templários, Ordem do Templo (em francês: Ordre du Temple ou Templiers) ou simplesmente como Templários, foi uma ordem militar de Cavalaria da Igreja Católica.\n[…]\nO sucesso dos Templários esteve vinculado ao das Cruzadas. Quando a Terra Santa foi perdida, o apoio à Ordem reduziu-se. Rumores acerca da cerimónia de iniciação secreta dos Templários criaram desconfianças, e o rei Filipe IV de França — também conhecido como Filipe, o Belo — profundamente endividado com a Ordem, começou a pressionar o papa Clemente V a tomar medidas contra eles. Em 1307, muitos dos membros da Ordem em França foram detidos e queimados publicamente.\n[…]\nEntre 19 de outubro e 24 de novembro de 1307, 138 prisioneiros Templários foram interrogados em Paris. Numa carta do papa Clemente V ao rei Filipe, datada de 27 de outubro de 1307, deixa a entender os protestos do pontífice para com os meios pelos quais os cavaleiros eram interrogados e as confissões lhe eram arrancadas.\n[…]\nApós o processo de extinção da ordem pelo papa Clemente V e a detenção dos mesmos por Filipe de França, O Belo, o rei D.\n[…]\nAo líder templário, Tiago de Molay, é imputada a maldição da Sexta-Feira 13, que ao ser queimado na fogueira teria amaldiçoado a data. Contudo, não há qualquer documento ou registro de tal maldição, além do que, De Molay, e mais 3 líderes Templários, foram queimados no dia 18 de março de 1314, e não dia 13. Tal crença se origina com a morte de seus executores no mesmo ano da morte De Molay; do papa Clemente V em 20 de Abril de 1314 e de Filipe IV de França em 29 de novembro.\n[…]\nA prisão dos Templários em França, Os Dias da História, por Paulo Sousa Pinto, Antena 2, 2016",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Reino de Portugal",
      "descricao": "Monarquia ibérica que surgiu do Condado Portucalense no século doze e durou até 1910."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "No século doze, quem fundou o Reino de Portugal e se tornou o seu primeiro rei?",
    "resposta": "Dom Afonso Henriques",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Afonso_I_de_Portugal",
      "https://en.wikipedia.org/wiki/Afonso_I_of_Portugal"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Afonso_I_de_Portugal",
        "situacao": "ok",
        "texto": "Afonso Henriques (c. 1106, 1109 ou 1111 – 6 de dezembro de 1185), cognominado \"o Conquistador\", \"Rei Fundador\", e \"o Magno\" foi o primeiro rei de Portugal. Passa a intitular-se \"Rei dos Portugueses\" a partir de 1139 e reinou de jure a partir de 5 de outubro de 1143, após a conferência de Zamora, até à sua morte. O seu papel de soberano é outorgado com a bula pontifícia Manifestis Probatum de 23 de\n[…]\nEm 1179, a corte portuguesa recebeu a bula papal Manifestis Probatum, através da qual o Papa Alexandre III reconhecia, por fim, a independência de Portugal e Afonso Henriques como o seu primeiro rei, louvando a ferocidade com que o rei se batera em defesa da cristandade contra os inimigos da fé, descrevendo como intrépido destruidor dos inimigos dos cristãos, diligente propagador da fé, bom filho da Igreja e príncipe católico, exemplo digno de imitação para os vindouros.\n[…]\nAliás, três importantes marcos da reconquista do território português coincidiram com etapas deste movimento da cristandade latina do Ocidente sobre o Médio Oriente, sendo que a conquista de Lisboa (1147, por Afonso Henriques) coincidiu com a Segunda Cruzada, que veio em auxílio do Rei de Portugal; a primeira conquista de Silves (1189, por Sancho I) teve a participação da Terceira Cruzada; e em 1217, a conquista de Alcácer do Sal (1217, por Afonso II), deu-se no contexto da Quinta Cruzada.\n[…]\nEm setembro de 1172 Fernando passa a servir o regente, segundo uma doação a Monsanto nessa data, na qual Afonso I sugere pela primeira vez uma sucessão por via feminina em Teresa. A partir de 1173, Afonso Henriques parece concretizar em parte esta possibilidade ao entregar a regência conjunta do reino a Sancho e Teresa, declarando-os co-herdeiros e com casa própria.\n[…]\n1109 – 24 de abril de 1112: Dom Afonso Henriques\n[…]\nO estilo oficial de Afonso Henriques enquanto Rei de Portugal:\n[…]\nJoão Afonso de Portugal (1156-25 de agosto de 1164)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Afonso_I_of_Portugal",
        "situacao": "ok",
        "texto": "Dom Afonso I (born Afonso Henriques; 1106/1109/1111 – 6 December 1185) nicknamed \"the Conqueror\" (Portuguese: O Conquistador), \"the Founder\" (O Fundador) and \"the Great\" (O Magno) by the Portuguese, was the first king of Portugal, from 26 July 1139 until his death on 6 December 1185. He achieved the independence of the County of Portugal, establishing a new kingdom and doubling its area with the R\n[…]\nIn 1139, Afonso renounced the suzerainty of the Kingdom of León and established the independent Kingdom of Portugal.\n[…]\nYet, contemporary documents, namely from the chancery of Afonso in his early years as count of Portucale, indicate according to Mattoso that the most likely tutor of Afonso Henriques was Egas Moniz's oldest brother, Ermígio Moniz, who, besides being the senior brother within the family of Ribadouro, became the \"dapifer\" and \"majordomus\" of Afonso I from 1128 until his death in 1135, which indicates his closer proximity to the prince.\n[…]\nIn 1122, Afonso turned fourteen, the adult age in the 12th century. In symmetry with his cousin Afonso VII, Afonso Henriques made himself a knight on his own account in the Cathedral of Zamora in 1125. After the military campaign of Alfonso VII against his mother in 1127, Afonso revolted against his own and proceeded to take control of the county from its ruler.\n[…]\nOn 6 April 1129, Afonso Henriques dictated the writ in which he proclaimed himself Prince of Portugal or Prince of the Portuguese, an act informally allowed by Alfonso VII, as it was thought to be Afonso Henriques's right by blood, as one of two grandsons of the Emperor of Hispania.\n[…]\nKing Afonso was also the father of:\n[…]\nPedro Afonso (died after 1183), Lord of Arega and Pedrógão, mayor of Abrantes in 1179, alferes of King Afonso I between 1181 and 1183, and Master of the Order of Aviz.\n[…]\nHistory of Portugal\n[…]\nAfonso Henriques Theatre\n[…]\nAvenida Dom Afonso Henriques\n[…]\nAfonso Henriques Stadium"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Abadia de Westminster",
      "descricao": "Igreja anglicana gótica em Westminster, Londres, local das coroações dos monarcas ingleses."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "No século onze, que rei anglo-saxão, mais tarde canonizado, mandou erguer a grande igreja que deu origem à Abadia de Westminster?",
    "resposta": "Eduardo, o Confessor",
    "fonte": [
      "https://en.wikipedia.org/wiki/Westminster_Abbey",
      "https://en.wikipedia.org/wiki/Edward_the_Confessor"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Westminster_Abbey",
        "situacao": "ok",
        "texto": "Westminster Abbey, formally titled the Collegiate Church of Saint Peter at Westminster, is an Anglican church in the City of Westminster, London, England. Since 1066, it has been the location of the coronations of 40 English and British monarchs and a burial site for 18 English, Scottish, and British monarchs. At least 16 royal weddings have taken place at the abbey since 1100.\n[…]\nWestminster Abbey continued to be used as a coronation site, but after Edward the Confessor, no monarchs were buried there until Henry III began to rebuild it in the Gothic style. Henry III wanted it built as a shrine to venerate Edward, to match great French churches such as Reims Cathedral and the Sainte-Chapelle, and as a burial place for himself and his family. Construction began on 6 July 1245 under Henry's master mason, Henry of Reynes.\n[…]\nIt may have been the door to the 11th-century chapter house in Edward the Confessor's abbey, and was re-used as the door to the Pyx Chamber in the 13th century. It now leads to an office.\n[…]\nThe Westminster Abbey Museum was located in the 11th-century vaulted undercroft beneath the former monks' dormitory. This is one of the oldest areas of the abbey, dating almost to the foundation of the church by Edward the Confessor in 1065.\n[…]\nThe abbey has strong connections with the royal family. It has been patronised by monarchs, been the location for coronations, royal weddings and funerals, and several monarchs have attended services there. One monarch was born and one died at Westminster Abbey. In 1413, Henry IV collapsed while praying at the shrine of Edward the Confessor. He was moved into the Jerusalem Chamber, and died shortly afterwards. Edward V was born in the abbot's house in 1470.\n[…]\nWestminster Abbey Choir School, also on the abbey grounds, educates the choirboys who sing for abbey services.\n[…]\nInformation for visitors to Westminster Abbey"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Edward_the_Confessor",
        "situacao": "ok",
        "texto": "Edward the Confessor (1003/1005 – 5 January 1066) was King of the English from 1042 until his death in 1066. He was the last reigning monarch of the House of Wessex.\n[…]\nWhen Odda of Deerhurst died without heirs in 1056, Edward seized lands which Odda had granted to Pershore Abbey and gave them to his Westminster foundation; historian Ann Williams observes that \"the Confessor did not in the 11th century have the saintly reputation which he later enjoyed, largely through the efforts of the Westminster monks themselves\".\n[…]\nHe was called 'Confessor' as the name for someone who was believed to have lived a saintly life but was not a martyr. In the 1230s, King Henry III became attached to the cult of Saint Edward, and he commissioned a new life, by Matthew Paris. Henry also constructed a grand new tomb for Edward in a rebuilt Westminster Abbey in 1269. Henry III also named his eldest son after Edward.\n[…]\nThe shrine of Saint Edward the Confessor in Westminster Abbey remains where it was after the final translation of his body to a chapel east of the sanctuary on 13 October 1269 by Henry III. The day of his translation, 13 October (his first translation had also been on that date in 1163), is an optional memorial in the Catholic dioceses of England only. Saint Edward may also be commemorated on the anniversary of his death, 5 January, the date he is inscribed in the Martyrologium Romanum.\n[…]\nLicence, Tom (2016). \"Edward the Confessor and the Succession Question: A Fresh Look at the Sources\". Anglo-Norman Studies. 39. ISBN 978-1783272211.{{cite journal}}:  CS1 maint: periodical has ISBN (link)\n[…]\nEdward the Confessor and Edith–Westminster Abbey"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Abadia_de_Westminster",
        "situacao": "ok",
        "texto": "A Abadia de Westminster, formalmente denominada Igreja Colegiada de São Pedro em Westminster, é uma grande igreja em arquitetura predominantemente gótica na cidade de Westminster, Londres, Inglaterra, a oeste do Palácio de Westminster. É um dos edifícios religiosos mais notáveis do Reino Unido e o local tradicional de coroação e sepultamento dos monarcas ingleses e, posteriormente, britânicos. O e\n[…]\nEntre 1042 e 1052, o Rei Eduardo, o Confessor, começou a reconstruir a Abadia de São Pedro para se proporcionar uma igreja real. Foi a primeira igreja na Inglaterra construída em estilo românico. O edifício foi concluído por volta de 1060 e consagrado em 28 de dezembro de 1065, apenas uma semana antes da morte de Eduardo, em 5 de janeiro de 1066. Uma semana depois, ele foi enterrado na igreja; e, nove anos depois, sua esposa Edite foi enterrada ao lado dele.\n[…]\nA abadia tornou-se o local de coroação dos reis normandos. Nenhum deles foi enterrado até que Henrique III, intensamente dedicado ao culto do Confessor, reconstruiu a abadia em estilo gótico anglo-francês como um santuário para venerar o rei Eduardo, o Confessor, e como um local propício para a tumba de Henrique, sob a mais alta nave gótica da Inglaterra. O santuário do Confessor, em seguida, desempenhou um grande papel em sua canonização.\n[…]\nAté a morte de Jorge II da Grã-Bretanha em 1760, a maioria dos reis e rainhas foram enterrados na abadia, com algumas exceções notáveis sendo eles Henrique VI, Eduardo IV, Henrique VIII e Carlos I, que estão enterrados na Capela de São Jorge no Castelo de Windsor.\n[…]\nO Museu da Abadia de Westminster está localizado numa cripta abobadada do século XI sob o dormitório dos antigos monges na Abadia de Westminster. Esta é uma das áreas mais antigas da abadia, que remonta quase à fundação da igreja por Eduardo, o Confessor em 1065. Este espaço é usado como um museu desde 1908.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Sacro Império Romano-Germânico",
      "descricao": "Entidade política da Europa central, de 962 a 1806, governada por um imperador eleito."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que filósofo iluminista francês ironizou o Sacro Império Romano-Germânico dizendo que ele não era nem sacro, nem romano, nem império?",
    "resposta": "Voltaire",
    "fonte": [
      "https://en.wikipedia.org/wiki/Holy_Roman_Empire"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Holy_Roman_Empire",
        "situacao": "ok",
        "texto": "The Holy Roman Empire, also known as the Holy Roman Empire of the German Nation after 1512, was a polity comprising and controlling much of Central Europe and Western Europe, headed by the Holy Roman Emperor and characterized by a decentralized political structure. It developed in the Early Middle Ages (beginning in either 800 or 962), and lasted for a millennium until its dissolution in 1806 duri\n[…]\nIn a famous assessment of the name, the political philosopher Voltaire remarked sardonically: \"This body which was called and which still calls itself the Holy Roman Empire was in no way holy, nor Roman, nor an empire.\" In the modern period, the Empire was often informally called the \"German Empire\" (Deutsches Reich) or \"Roman-German Empire\" (Römisch-Deutsches Reich). After its dissolution through the end of the German Empire, it was often called \"the old Empire\" (das alte Reich).\n[…]\nAccordingly, the empire could never return to its former glory, leading Voltaire to make his infamous quip that the Holy Roman Empire was \"neither Holy nor Roman nor an Empire.\"\n[…]\nSome constituencies of the Holy Roman Empire had additional royal or imperial territories that were, sometimes from the outset, outside the jurisdiction of the Holy Roman Empire. Henry VI, inheriting both German aspirations for imperial sovereignty and the Norman Sicilian kings' dream of hegemony in the Mediterranean, had ambitious design for a world empire.\n[…]\nThe later Austrian Habsburgs from Ferdinand I were careful to maintain a distinction between their dynastic empire and the Holy Roman Empire. Peter Wilson argues that the institutions and structures developed by the Imperial Reform mostly served German lands and, although the Habsburg monarchy \"remained closely entwined with the Empire\", the Habsburgs deliberately refrained from including their other territories in its framework.\n[…]\nHeraldry of the Holy Roman Empire"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sacro_Imp%C3%A9rio_Romano-Germ%C3%A2nico",
        "situacao": "ok",
        "texto": "O Sacro Império Romano-Germânico ou Sacro Império Romano, as vezes referido como Primeiro Reich, liderado pelo Sacro Imperador Romano-Germânico, desenvolveu-se na Europa Central no início da Idade Média e durou quase mil anos até à sua dissolução em 1806.\n[…]\nNuma famosa avaliação do nome, o filósofo político Voltaire observou sarcasticamente: \"Este corpo que se chamava e que ainda se chama Sacro Império Romano não era de forma alguma santo, nem romano, nem um império.\"\n[…]\nSalvo a perda de Franco-Condado em 1678, as fronteiras externas do Império não mudaram significativamente desde a Paz de Vestfália – que reconheceu a exclusão da Suíça e dos Países Baixos do Norte, e o protetorado francês sobre a Alsácia – até a dissolução do Império. No final das Guerras Napoleônicas, em 1815, a maior parte do Sacro Império Romano foi incluída na Confederação Germânica, com as principais exceções sendo os estados italianos.\n[…]\nConsequentemente, o império nunca poderia retornar à sua antiga glória, levando Voltaire a fazer a sua infame piada de que o Sacro Império Romano não era \"nem Sagrado, nem Romano, nem um Império\".\n[…]\nO Exército do Sacro Império Romano-Germânico (em alemão: Reichsarmee, em alemão: Reichsheer ou em alemão: Reichsarmatur; em latim: exercitus imperii) foi criada em 1422 e, como resultado das Guerras Napoleônicas, chegou ao fim antes mesmo do Império. Não deve ser confundido com o Exército Imperial (em alemão: Kaiserliche Armee) do Imperador.\n[…]\nLista de Estados do Sacro Império Romano-Germânico\n[…]\nLista de imperadores do Sacro Império Romano-Germânico\n[…]\nLista de rainhas da Germânia e imperatrizes do Sacro Império Romano-Germânico\n[…]\nThe Holy Roman Empire in the 17th century (map)\n[…]\nThe Holy Roman Empire in the 18th century (interactive map)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Muralha do Kremlin de Moscou",
      "descricao": "Muralha de tijolos com torres que cerca o Kremlin de Moscou, construída entre 1485 e 1495."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "No fim do século quinze, as muralhas e torres de tijolo do Kremlin de Moscou foram projetadas por arquitetos de que país?",
    "resposta": "Itália",
    "distratores": [
      "Alemanha",
      "Grécia",
      "França"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Moscow_Kremlin_Wall",
      "https://en.wikipedia.org/wiki/Moscow_Kremlin"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Moscow_Kremlin_Wall",
        "situacao": "ok",
        "texto": "The Moscow Kremlin Wall is a defensive wall that surrounds the Moscow Kremlin, recognisable by the characteristic notches and its Kremlin towers. The original walls were likely a simple wooden fence with guard towers built in 1156. The Kremlin walls, like many cathedrals in the Kremlin, were built by Italian architects.\n[…]\nBetween 1485 and 1495 a whole brigade of Italian architects took part in the erection of a new defence perimeter including Antonio Fryazin (Antonio Gilardi), Marko Fryazin (Marco Ruffo), Pyotr Fryazin (Pietro Antonio Solari) and Alexei Fryazin the Old (Aloisio da Milano). (The term Fryazin was used to refer to all people of Italian origin at this time). The new walls were erected by building on top of the older walls (some white stone can still be seen at the base in some places).\n[…]\nIn the following centuries Moscow expanded rapidly outside the Kremlin walls and as Russia's borders became more and more secure their defensive duty has all but passed. The cannons which were installed in the walls were removed after the turn of the 17th century, as was the second, smaller wall which repeated the perimeter on the outside. During the reign of Czar Alexei Romanov, the towers were built up with decorative spires and the walls were restored.\n[…]\nVarious sections of the Moscow Kremlin Wall are periodically restored and the condition of the battlements is constantly monitored. In 2015, the largest restoration in recent memory began. Brickwork and white stone decorations were repaired along the 500-metre stretch. Some of the bricks were replaced with new ones made of the same materials using the old technology. Waterproofing works were carried out. For the first time in 150 years, the Troitskaya Tower was restored.\n[…]\nKremlin Wall Necropolis\n[…]\nOfficial site of the museum of the Moscow Kremlin"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Moscow_Kremlin",
        "situacao": "ok",
        "texto": "The Moscow Kremlin, commonly known as the Kremlin, is a fortified complex (kremlin) in Moscow, Russia. Located in the historic centre of the country's capital city, the Kremlin comprises five palaces, four cathedrals, and an enclosing wall along with numerous towers. Within the complex is the Grand Kremlin Palace, which was one of the royal residences of the Tsar of Russia, and is now the residenc\n[…]\nWhen open to the public, supervised tours are offered of the Moscow Kremlin Museums.\n[…]\nThe Golden Hall, a throne room with murals painted probably after 1547, was destroyed to make place for the Kremlin Palace, commissioned by Elizabeth of Russia and designed by the Italian architect Francesco Bartolomeo Rastrelli in 1752.\n[…]\nThe Soviet government moved from Petrograd (present-day Saint Petersburg) to Moscow on 12 March 1918. Vladimir Lenin selected the Kremlin Senate as his residence. Joseph Stalin also had his personal rooms in the Kremlin. He was eager to remove all the \"relics of the tsarist regime\" from his headquarters. Golden eagles on the towers were replaced by shining Kremlin stars, while the wall near Lenin's Mausoleum was turned into the Kremlin Wall Necropolis.\n[…]\nThe existing Kremlin Wall and Kremlin towers were built by Italian masters from 1485 to 1495. The irregular triangle of the Kremlin Wall encloses an area of 275,000 square metres (2,960,000 sq ft). Its overall length is 2,235 metres (2,444 yards), but the height ranges from 5 to 19 metres (16 to 62 ft), depending on the terrain. The wall's thickness is between 3.5 and 6.5 metres (11 and 21 ft).\n[…]\nNenakormova, Irina S. (1987). Государственные музеи Московского Кремля [Art treasures from the Museums of the Moscow Kremlin] (in Russian). Moscow: Iskusstvo.\n[…]\ntour-planet.com – Sights of the Moscow Kremlin\n[…]\nHistory of the Kremlin (archived)\n[…]\nMoscow Kremlin State Historical and Cultural Museum Sanctuary\n[…]\nOpen Kremlin"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Ordem dos Templários",
      "descricao": "Ordem militar cristã fundada em Jerusalém por volta de 1119 e extinta pelo papa em 1312."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A ordem dos templários tirou seu nome do local de sua primeira sede em Jerusalém, ligado ao templo de que rei bíblico?",
    "resposta": "Salomão",
    "fonte": [
      "https://en.wikipedia.org/wiki/Knights_Templar"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Knights_Templar",
        "situacao": "ok",
        "texto": "The Poor Fellow-Soldiers of Christ and of the Temple of Solomon, mainly known as the Knights Templar, was a  military order of the Catholic faith, and one of the most important military orders in Western Christianity. They were founded in 1118 to defend pilgrims on their way to Jerusalem, with their headquarters located there on the Temple Mount, and existed for nearly two centuries during the Mid\n[…]\nThe Order's mission developed from protecting pilgrims to taking part in regular military campaigns early on, and this is shown by the fact that the first castle received by the Knights Templar was located four hundred miles north of the pilgrim road from Jaffa to Jerusalem, on the northern frontier of the Principality of Antioch: the castle of Bagras in the Amanus Mountains.\n[…]\nDistinctive architectural elements of Templar buildings include the use of the image of \"two knights on a single horse\", representing the Knights' poverty, and round buildings designed to resemble the Church of the Holy Sepulchre in Jerusalem.\n[…]\nIn the Catholic Church, there are certain associations of the Christian faithful that have modeled themselves after the Knights Templar, such as the Militia Templi. Founded by Count Marcello Alberto Cristofani della Magione in 1979, the headquarters of the Militia Templi is located in the Castello della Magione, which originally belonged to the Knights Templar.\n[…]\nThere have been speculative popular publications surrounding the order's early occupation of the Temple Mount in Jerusalem as well as speculation about what relics the Templars may have found there. The association of the Holy Grail with the Templars has precedents even in 12th-century fiction; Wolfram von Eschenbach's Parzival calls the knights guarding the Grail Kingdom templeisen, apparently a conscious fictionalization of the templarii.\n[…]\nKnights Templar – World History Encyclopedia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ordem_dos_Templ%C3%A1rios",
        "situacao": "ok",
        "texto": "A Ordem dos Pobres Cavaleiros de Cristo e do Templo de Salomão (em latim: \"Pauperes commilitones Christi Templique Salomonici\"), conhecida como Cavaleiros Templários, Ordem do Templo (em francês: Ordre du Temple ou Templiers) ou simplesmente como Templários, foi uma ordem militar de Cavalaria da Igreja Católica.\n[…]\nOs seus membros faziam votos de pobreza, castidade, devoção e obediência, usavam mantos brancos com a característica cruz vermelha, e o seu símbolo passou a ser um cavalo montado por dois cavaleiros. Tendo em conta o local onde originalmente se estabeleceram (o monte do Templo em Jerusalém, onde existira o Templo de Salomão, e onde se ergue a atual Mesquita de Al-Aqsa) assim como o voto de pobreza e de fé em Cristo, denominaram-se \"Pobres Cavaleiros de Cristo e do Templo de Salomão\".\n[…]\nEm 1312, o papa Clemente dissolveu a Ordem.\n[…]\nHugo de Payens, futuro fundador e primeiro mestre da Ordem do Templo, veio pela primeira vez à Terra Santa em 1104 para acompanhar o conde Hugues de Champagne, então em peregrinação. Regressaram em 1107 e partiram novamente em 1114, colocando-se sob a protecção e autoridade dos cónegos do Santo Sepulcro, com os seus cavaleiros que então trabalharam para defender as posses destes cónegos e para proteger o túmulo do Cristo.\n[…]\nA ordem foi fundada após a Primeira Cruzada, por Hugo de Payens, em 1118, com o apoio de mais 8 cavaleiros, entre eles André de Montbard, tio de Bernardo de Claraval e do rei Balduíno II de Jerusalém, Gondemaro e Frei Arnaldo da Rocha, que os acolheu em seu palácio em uma das esplanadas do Templo. Nasce assim os Pobres Cavaleiros de Cristo, que, por se estabelecerem no monte do Templo de Salomão, vieram a ficar conhecidos como Ordem do Templo, e por Templário quem dela participava.\n[…]\n«The Knights Templars International» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Gengis Khan",
      "descricao": "Fundador e primeiro grão-khan do Império Mongol, morto em 1227."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Antes de ser proclamado Gengis Khan, em 1206, o fundador do Império Mongol era conhecido por que nome?",
    "resposta": "Temujin",
    "fonte": [
      "https://en.wikipedia.org/wiki/Genghis_Khan"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Genghis_Khan",
        "situacao": "ok",
        "texto": "Genghis Khan (born Temüjin; c. 1162 – 18 or 25 August 1227), also known as Chinggis Khan, was the founder and first khan of the Mongol Empire. After spending most of his life uniting the Mongol tribes, he launched a series of military campaigns, conquering large parts of China and Central Asia.\n[…]\nTemüjin formally adopted the title \"Genghis Khan\", the meaning of which is uncertain, at an assembly in 1206. Carrying out reforms designed to ensure long-term stability, he transformed the Mongols' tribal structure into an integrated meritocracy dedicated to the service of the ruling family. After thwarting a coup attempt from a powerful shaman, Genghis began to consolidate his power.\n[…]\nNow sole ruler of the steppe, Temüjin held a large assembly called a kurultai at the source of the Onon River in 1206. Here, he formally adopted the title \"Genghis Khan\", the etymology and meaning of which have been much debated. Some commentators hold that the title had no meaning, simply representing Temüjin's eschewal of the traditional gurkhan title, which had been accorded to Jamukha and was thus of lesser worth.\n[…]\nFrom 1204 to 1209, Genghis Khan was predominantly focused on consolidating and maintaining his new nation. He faced a challenge from the shaman Kokechu, whose father Münglig had been allowed to marry Hö'elün after he defected to Temüjin. Kokechu, who had proclaimed Temüjin as Genghis Khan and taken the Tengrist title \"Teb Tenggeri\" (lit. \"Wholly Heavenly\") on account of his sorcery, was very influential among the Mongol commoners and sought to divide the imperial family.\n[…]\nQojin, a daughter born c. 1179, who later married Butu of the Ikires, one of Temüjin's earliest and closest supporters and the widower of Temülün."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Gengis_Khan",
        "situacao": "ok",
        "texto": "Gengis Khan (em mongol: Чингис Хаан; romaniz.: Tchingis Khaan; 1162 — 18 de agosto de 1227), também grafado como Gengis Cã, Gêngis Cã ou Gengiscão, foi estadista, governador militar e o primeiro grão-cã, fundador do Império Mongol. No início do século XIII, uniu todas as tribos nómadas das estepes da Ásia Central (Caraítas, Uigures, Naimanos, Merquites, Mongóis e Tártaros) sob a égide da identidad\n[…]\nNascido com o nome de Temujim nas proximidades do rio Onon, perto do lago Baical, inicialmente enfrentou a rejeição da sua família por seu próprio clã Borjiguim e da tribo Quiad (起延) do Império Mongol.[carece de fontes]? Reinou da primavera de 1206 a 25 de agosto de 1227, por 22 anos. Conseguiu conquistar a sua liderança, vencer os seus rivais e unificar os povos mongóis sob seu comando.\n[…]\nEm 1206, uma assembleia (korultai) entre os chefes de todas as tribos das estepes proclamou Temudjin, então com quarenta e cinco anos, como Gengis Khan, o \"cã dos cãs\", na sequência da morte de Toghril Khan e da imposição da sua força com o apoio da tribo Karaiti.\n[…]\nAntes da morte de Gengis, este estabeleceu seu filho, Ogedai Khan, como seu sucessor. Ogedai encarregou-se de expandir o território mongol ao máximo, da Síria à Indochina, da Pérsia à Sibéria, da Hungria à China. Posteriormente, o grande império foi dividido em 4 partes entre filhos e netos de Genghis, porém nenhum destes novos canatos teriam uma existência longa.\n[…]\nCom as bases lançadas por Gengis pela conquista da China, seu neto Cublai Cã em 1271 assegurou o domínio mongol sob o território chinês e lá fundou a dinastia mongólica dos Yuan, anexando a China a seu império. A primeira dinastia que não era de Etnia han a reger o território chinês, Yuan é conhecida por abrir as portas para os primeiros principais contatos europeus com o extremo da Ásia.\n[…]\nHistória de Genghizcan o Grande, Primeiro Imperador dos Antigas Moguls e Tártaros",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "El Cid",
      "descricao": "Rodrigo Díaz de Vivar, cavaleiro castelhano do século onze que conquistou Valência e virou herói da Reconquista."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O guerreiro castelhano Rodrigo Díaz de Vivar ficou famoso pelo apelido El Cid, que vem do árabe e significa o quê?",
    "resposta": "Senhor",
    "fonte": [
      "https://en.wikipedia.org/wiki/El_Cid"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/El_Cid",
        "situacao": "ok",
        "texto": "Rodrigo Díaz de Vivar (c. 1043 – 10 July 1099) was a Castilian knight and ruler in medieval Spain. Fighting with both Christian and Muslim armies during his lifetime, he earned the Arabic honorific as-Sayyid (السّیّد, \"the Lord\" or \"the Master\"), which would evolve into El Çid  (Spanish: [el ˈθið], Old Spanish: [el ˈts̻id]), and the Spanish honorific El Campeador (\"the Champion\"). He was born in V\n[…]\nDíaz de Vivar became well known for his service in the armies of both Christian and Muslim rulers. After his death, El Cid became Spain's most celebrated national hero and the protagonist of the most significant medieval Spanish epic poem, El Cantar de mio Cid, which presents him as the ideal medieval knight: strong, valiant, loyal, just, and pious.\n[…]\nHistorians have not found contemporary records referring to Rodrigo as Cid. Arab sources use instead Rudriq, Ludriq al-Kanbiyatur or al-Qanbiyatur (Rodrigo el Campeador). The title appears for the first time as Meo Çidi in the Poema de Almería, composed between 1147 and 1149.\n[…]\nThe combination of Cid Campeador is documented from 1195 in Linaje de Rodrigo Díaz (\"The Lineage of Rodrigo Díaz\") in Navarro-Aragonese, which form part of the Liber regum written as mio Cit el Campiador; and in El Cantar de mio Cid.\n[…]\nEl Cid was born Rodrigo Díaz circa 1043 in Vivar, also known as Castillona de Bivar, a small town about ten kilometers (or six miles) north of Burgos, the capital of Castile. His father, Diego Laínez, was a courtier, bureaucrat, and cavalryman who had fought in several battles. Despite the fact that El Cid's mother's family was aristocratic, in later years, the peasants would consider him one of their own.\n[…]\nCronica del muy esforçado cavallero el Cid ruy diaz campeador (1533)\n[…]\nGonzalo Martínez Díez, \"El Cid Histórico: Un Estudio Exhaustivo Sobre el Verdadero Rodrigo Díaz de Vivar\", Editorial Planeta (Spain, 1999). ISBN 84-08-03161-9"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/El_Cid",
        "situacao": "ok",
        "texto": "Rodrigo Díaz de Vivar (c. 1043 – 10 de julho de 1099) foi um cavaleiro castelhano e governante na Espanha medieval. Lutando tanto em exércitos cristãos quanto muçulmanos durante sua vida, ele ganhou o honorífico árabe as-Sayyid (\"o Senhor\" ou \"o Mestre\"), que evoluiria para El Cid (es, osp), e o honorífico espanhol El Campeador (\"o Campeão\" ou \"o Senhor do Campo de Batalha\"). Ele nasceu em Vivar, \n[…]\nEm 1086, um exército expedicionário de Almorávidas do Norte da África infligiu uma dura derrota a Castela, obrigando Afonso a superar o ressentimento que nutria contra El Cid. Os termos para o retorno de El Cid ao serviço cristão devem ter sido atraentes o suficiente, pois El Cid logo se viu lutando por seu antigo senhor.\n[…]\nO nome El Cid (es) é uma denominação espanhola moderna composta pelo artigo el que significa \"o\" e Cid, que deriva do empréstimo do antigo castelhano Çid, emprestado da palavra árabe dialetal سيد sîdi ou sayyid, que significa \"senhor\" ou \"mestre\". Os Moçárabes ou os árabes que serviam em suas fileiras podem ter se dirigido a ele dessa maneira, o que os cristãos podem ter transliterado e adotado.\n[…]\nEl Cid nasceu Rodrigo Díaz por volta de 1043 em Vivar, também conhecida como Castillona de Bivar, uma pequena cidade cerca de dez quilômetros (ou seis milhas) ao norte de Burgos, a capital de Castela. Seu pai, Diego Laínez, era um membro da corte, burocrata e homem de cavalaria que havia lutado em várias batalhas. Apesar de a família da mãe de El Cid ser aristocrática, em anos posteriores, os camponeses o considerariam um dos seus.\n[…]\nEste último, Diego Rodríguez, foi morto enquanto lutava contra os invasores muçulmanos almorávidas do Norte da África na Batalha de Consuegra em 1097. As filhas de El Cid, Cristina Rodríguez e María, casaram-se ambas em famílias nobres. Cristina casou-se com Ramiro, Senhor de Monzón e neto de Garcia Sanches III de Pamplona.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Quarentena",
      "descricao": "Isolamento de pessoas, navios ou mercadorias suspeitos de trazer doenças, criado nos portos do Mediterrâneo na época da peste."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Na época da peste, portos italianos como Veneza isolavam navios suspeitos por um número fixo de dias. Que palavra nasceu dessa prática?",
    "resposta": "Quarentena",
    "fonte": [
      "https://en.wikipedia.org/wiki/Quarantine"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Quarantine",
        "situacao": "ok",
        "texto": "A quarantine is a restriction on the movement of people, animals, and goods which is intended to prevent the spread of disease or pests. It is often used in connection to disease and illness, preventing the movement of those who may have been exposed to a communicable disease, yet do not have a confirmed medical diagnosis. It is distinct from medical isolation, in which those confirmed to be infec\n[…]\nThe People's Republic of China has employed mass quarantines – firstly of the city of Wuhan and subsequently of all of the Hubei province (population 55.5 million) – in the COVID-19 pandemic. After a few weeks, the Italian government imposed lockdowns for the entire country (more than 60 million people) in an attempt to stop the spread of the disease there. India quarantined itself from the world for a period of one month.\n[…]\nLazaretto – Quarantine station for maritime travelers\n[…]\nThis article incorporates text from a publication now in the public domain: Chisholm H, ed. (1911). \"Quarantine\". Encyclopædia Britannica (11th ed.). Cambridge University Press.\n[…]\nHoward Markel (1999). Quarantine!: East European Jewish Immigrants and the New York City Epidemics of 1892. Johns Hopkins University Press. ISBN 978-0-8018-6180-2.\n[…]\nRothstein MA (2015). \"From SARS to Ebola: Legal and Ethical Considerations for Modern Quarantine\". Indiana Health Law Review. 12: 227–280. doi:10.18060/18963.\n[…]\nFrati P (2000). \"Quarantine, trade and health policies in Ragusa-Dubrovnik until the age of George Armmenius-Baglivi\". Medicina Nei Secoli. 12 (1): 103–27. PMID 11624707.\n[…]\nQuarantine for SARS, Taiwan Archived 1 February 2020 at the Wayback Machine, February 2005, wwwnc.cdc.gov\n[…]\nHistory of quarantine (from PBS NOVA)\n[…]\nCole, Jared P. (9 October 2014). \"Federal and State Quarantine and Isolation Authority\" (PDF). Congressional Research Service. Archived from the original (PDF) on 18 April 2016. Retrieved 8 May 2016."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Quarentena",
        "situacao": "ok",
        "texto": "Quarentena é a reclusão de indivíduos ou animais sadios pelo período máximo de incubação de uma doença, contado a partir da data do último contato com um caso clínico ou portador, ou da data em que esse indivíduo sadio abandonou o local em que se encontrava a fonte de infecção (\"infeção\" em Portugal). Alguns autores substituem o termo \"reclusão\" por vigilância e observação dos comunicantes motivad\n[…]\nSegundo Leser et al., o termo quarentena originou-se da prática medieval de manter sem comunicação nos portos em que arribavam, durante quarenta dias, os navios procedentes de determinadas áreas e sobretudo do oriente. Na prática atual, a quarentena corresponde ao período máximo de incubação da doença.\n[…]\nA origem da palavra vem da língua vêneta designando o período de quarenta dias em que todos os barcos deveriam ser isolados antes que passageiros e tripulantes pudessem desembarcar durante a epidemia da peste negra nos séculos XIV e XV, sendo inspirado no trentino, período de trinta dias imposto pela primeira vez em 1377 em Ragusa, dominada por Veneza.\n[…]\nApesar de a quarentena ser considerada pelos historiadores modernos como uma das primeiras contribuições fundamentais à prática da saúde pública,  Czeresnia, assinala que no momento de sua instituição, em épocas da peste, não tinha sua devida importância reconhecida. Estava integrada à práticas de fumigamento e desinfecção junto as fogueiras purificadoras das encruzilhadas de uma cidade; desinfetar com perfumes e enxofre os indivíduos, casas, roupas e outros objetos, etc..\n[…]\nquarentena – tem origem nos primórdios da prática de vacinação antivariólica na China Antiga, segundo suas referências observava-se que as crostas extraídas dos acometidos por varíola permaneciam infectantes por cerca de 40 dias e essa observação\n[…]\ndifundiu-se como práticas culturais as mais diversas, com objetivo de purificação ou contenção da propagação de doenças.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Guerra das Rosas",
      "descricao": "Série de guerras civis pelo trono inglês, travadas entre 1455 e 1487 por dois ramos da dinastia Plantageneta."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "A Guerra das Rosas, na Inglaterra do século quinze, tem esse nome por causa dos símbolos de duas casas nobres rivais. Quais eram elas?",
    "resposta": "Lancaster e York",
    "distratores": [
      "Tudor e Stuart",
      "Plantageneta e Valois",
      "Windsor e Hanôver"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Guerra_das_Rosas",
      "https://en.wikipedia.org/wiki/Wars_of_the_Roses"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Guerra_das_Rosas",
        "situacao": "ok",
        "texto": "As Guerras das Rosas (em inglês: Wars of the Roses) conhecidas na época e nos séculos seguintes como \"as Guerras Civis\", foram uma série de guerras civis travadas pelo controle do trono inglês de 1455 a 1487. As guerras ocorreram entre os apoiadores da Casa de Lancaster e da Casa de York, dois ramos rivais da Casa Real dos Plantagenetas. O conflito resultou no fim da linhagem masculina dos Lancast\n[…]\nAs Guerras das Rosas estavam enraizadas nos problemas socioeconômicos da Inglaterra causados pela Guerra dos Cem Anos (1337–1453) contra a França, bem como pelo feudalismo bastardo quase militar resultante dos poderosos ducados criados pelo rei Eduardo III. A instabilidade mental do rei Henrique VI, da Casa de Lancaster, reacendeu o interesse de seu primo Ricardo, Duque de York, em reivindicar o trono. A guerra começou em 1455, quando York capturou Henrique na Primeira Batalha de St.\n[…]\nTudor então assumiu o trono inglês como Henrique VII e uniu as casas rivais por meio do casamento com Isabel de Iorque, a filha mais velha e herdeira de Eduardo IV. As guerras foram concluídas em 1487, com a derrota da oposição iorquista restante por Henrique VII na Batalha de Stoke Field. A Casa de Tudor governaria a Inglaterra até 1603, um período que marcou o fortalecimento da monarquia e o fim da era medieval inglesa.\n[…]\nPouco depois, Eduardo IV, agora apoiado pelo irmão, o já referido duque de Clarence, retornou à Inglaterra e venceu a Batalha de Barnet (abril de 1471), na qual Warwick morreu. Eduardo recuperou o trono. Grande parte dos líderes lancastrianos remanescentes foi morta em Tewkesbury, em maio de 1471. Henrique foi novamente capturado e encerrado na Torre. Para evitar futuros aborrecimentos, Eduardo mandou matar o rei e seu filho.\n[…]\n1464 – Eduardo IV toma os últimos castelos fiéis a Henrique VI no Norte de Inglaterra, na sequência de duas rebeliões de lancastristas"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Wars_of_the_Roses",
        "situacao": "ok",
        "texto": "The Wars of the Roses, known at the time and in the following centuries as the Civil Wars, were a series of armed confrontations, machinations, battles and campaigns fought for control of the English throne from 1455 to 1487. The conflict was fought between supporters of the House of York (whose emblem was a white rose) and the House of Lancaster (whose emblem, by 1485, was a red rose), two rival \n[…]\nThe Wars of the Roses were rooted in English socio-economic troubles caused by the Hundred Years' War (1337–1453) with France, as well as the quasi-military bastard feudalism resulting from the powerful duchies created by King Edward III (died 1377). The mental instability of the House of Lancaster's King Henry VI (first reign: 1422 to 1461) revived his cousin Richard, Duke of York's interest in a claim to the throne.\n[…]\nThe name \"Wars of the Roses\" refers to the heraldic badges associated with the two rival branches of the royal House of Plantagenet fighting for control of the English throne; the White Rose of York and the Red Rose of Lancaster. Embryonic forms of this term were used in 1727 by Bevil Higgons, who described the quarrel between the two roses and by David Hume in The History of England (1754–1761):\n[…]\nThe people, divided in their affections, took different symbols of party: the partisans of the house of Lancaster chose the red rose as their mark of distinction; those of York were denominated from the white; and these civil wars were thus known over Europe by the name of the quarrel between the two roses.\n[…]\nThey were joined by Somerset and Thomas Courtenay, 6th/14th Earl of Devon. York, his son the Earl of Rutland, and Salisbury left London to contain the Lancastrian threat in the north.\n[…]\nYorkists are those who supported the rival House of York's claims to the throne, over the incumbent Lancastrian dynasty.\n[…]\nList of English civil wars\n[…]\nDiagram of the Wars of the Roses"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Frederico Barba-Ruiva",
      "descricao": "Frederico Primeiro, imperador do Sacro Império Romano-Germânico no século doze, morto durante a Terceira Cruzada."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "O imperador Frederico Barba-Ruiva morreu em 1190, na Anatólia, a caminho da Terra Santa na Terceira Cruzada. Como ele morreu?",
    "resposta": "Afogado num rio",
    "fonte": [
      "https://en.wikipedia.org/wiki/Frederick_Barbarossa"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Frederick_Barbarossa",
        "situacao": "ok",
        "texto": "Frederick Barbarossa (December 1122 – 10 June 1190), also known as Frederick I (German: Friedrich; Italian: Federico), was the Holy Roman Emperor from 1155 until his death in 1190. He was elected King of Germany in Frankfurt on 4 March 1152 and crowned in Aachen on 9 March 1152. He was crowned King of Italy on 24 April 1155 in Pavia and emperor by Pope Adrian IV on 18 June 1155 in Rome. Two years \n[…]\nLater on, Frederick camped in Philippopolis, then in Adrianople in the autumn of 1189 to avoid the winter climate in Anatolia, in the meantime, he received imprisoned German emissaries who were held in Constantinople, and exchanged hostages with Isaac II, as a guarantee that the crusaders would not sack local settlements until they depart the Byzantine territory. In March 1190, Frederick left Adrianople for Gallipoli at the Dardanelles, to embark to Asia Minor.\n[…]\nIn Italy, the scholarly attention towards Frederick's person and his reign is also considerable, with notable contributions including Franco Cardini's sympathetic 1985 biography or the 1982 work Federico Barbarossa nel dibattito storiografico in Italia e in Germania, edited by Manselli and Riedmann, considered by Schumann to be a definite synthesis of non-nationally oriented historiography approaches (combining German and Italian research results) of the last forty years.\n[…]\nCyrus Townsend Brady's Hohenzollern; a Story of the Time of Frederick Barbarossa (1901) begins with a dedication to \"the descendants of the great Germanic race who in Europe, in America, and in the Far East rule the world\".\n[…]\nThe German broadcaster ZDF documentary Die Deutschen (The Germans), featured Frederick I in season 1, episode 3 Barbarossa und der Löwe (Barbarossa and the Lion, 2008).\n[…]\nMSN Encarta – Frederick I (Holy Roman Empire) (Archived 2009-10-31)\n[…]\nFamous Men of the Middle Ages – Frederick Barbarossa"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Frederico_I_do_Sacro_Imp%C3%A9rio_Romano-Germ%C3%A2nico",
        "situacao": "ok",
        "texto": "Frederico I (dezembro de 1122 – 10 de junho de 1190), também conhecido como Frederico Barbarossa (ou \"Barba Ruiva\"), foi o Imperador Romano-Germânico de 1155 até sua morte, em 1190. Ele foi eleito Rei da Alemanha em Frankfurt em 4 de março de 1152 e coroado em Aachen cinco dias depois. Ele se tornou o Rei da Itália em 1155 e foi formalmente coroado como o monarca supremo do Império Romano-Germânic\n[…]\nDois anos mais tarde, o termo sacrum (\"sagrado\", ou \"sacro\") foi utilizado pela primeira vez para se referir ao império. Ele foi também coroado Rei da Borgonha, na cidade de Arles, em 30 de junho de 1178. Frederico recebeu o nome de Barbarossa das cidades italianas que tentou governar: Barbarossa significa \"Barba Ruiva\" em italiano; em alemão ele era conhecido como Kaiser Rotbart (\"Imperador Barba Ruiva\").\n[…]\nO Papa Urbano III faleceu em 1187 e foi sucedido por Gregório VIII, que estava mais preocupado com as notícias turbulentas que vinham da Terra Santa do que  com as disputas de poder com Barbarossa. Após fazer as pazes com o novo papa, Frederico jurou levar a cruz de Cristo na Dieta de Mainz em 1188. Frederico embarcou então na Terceira Cruzada (1189–92), uma grande expedição conjunta com os franceses, liderados pelo rei Filipe II, e os ingleses, sob comando do rei Ricardo Coração de Leão.\n[…]\nFrederico é o tema de muitas lendas, assim como outras figuras lendárias da Idade Média, como Artur ou Brân, o Abençoado. As lendas dizem que ele não morreu, mas está apenas dormindo com seus cavaleiros em uma caverna nas montanhas Kyffhäuser em Turíngia ou em Untersberg na Baviera, e quando os corvos deixarem de voar ao redor da montanha ele levantará e restaurará a Alemanha a sua antiga glória. De acordo com essa história, sua barba ruiva cresceu através da mesa na qual ele se senta.\n[…]\nFrederico V da Suábia (Pávia, 16 de julho de 1164 – 28 de novembro de 1170).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Mosteiro da Batalha",
      "descricao": "Mosteiro gótico dominicano na vila da Batalha, em Portugal, mandado erguer por Dom João Primeiro."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "O Mosteiro da Batalha, em Portugal, foi erguido por Dom João Primeiro como agradecimento por qual vitória de 1385 contra Castela?",
    "resposta": "Batalha de Aljubarrota",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Mosteiro_da_Batalha",
      "https://en.wikipedia.org/wiki/Batalha_Monastery"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Mosteiro_da_Batalha",
        "situacao": "ok",
        "texto": "O Mosteiro de Santa Maria da Vitória, mais conhecido como Mosteiro da Batalha é um antigo mosteiro dominicano situado na vila de Batalha, no distrito de Leiria e no Centro de Portugal, província histórica da Beira Litoral e é um exemplar do Gótico flamejante em Portugal.\n[…]\nFoi mandado edificar em 1386 pelo rei D. João I de Portugal como agradecimento à Virgem Maria pela vitória contra os rivais castelhanos na batalha de Aljubarrota. Este mosteiro da Ordem de São Domingos foi construído ao longo de dois séculos até cerca de 1563, durante o reinado de sete reis de Portugal, embora desde 1388 já ali vivessem os primeiros frades dominicanos.\n[…]\nO Mosteiro da Batalha é um dos monumentos mais visitados em Portugal. Em 2022, registou 288.386 entradas.\n[…]\nData dessa altura a actual configuração da Capela do Fundador e a vulgarização do termo Mosteiro da Batalha (celebrando Aljubarrota) em detrimento de Santa Maria da Vitória, numa tentativa de erradicar definitivamente as designações que lembrassem o passado religioso do edifício.\n[…]\nEm 2016, o Mosteiro de Santa Maria da Vitória, na Batalha, passou a ter o estatuto de Panteão Nacional, sem prejuízo da prática do culto religioso, juntamente com o Mosteiro dos Jerónimos (Lisboa) à semelhança do que aconteceu em 2003 com o Mosteiro de Santa Cruz (Coimbra) relativamente ao Panteão Nacional original desde 1966 na Igreja de Santa Engrácia (Lisboa).\n[…]\nALJUBARROTA 1385 [na face direita; referência a Batalha de Aljubarrota]\n[…]\nJoão de Arruda (1485? a 1490?), sobre o qual também pouco se sabe a não ser que trabalhou em Évora e que terá sido sepultado na Igreja de Santa Maria-a-Velha da Batalha, demolida na década de 1960.\n[…]\n«Fotos do Mosteiro da Batalha»\n[…]\nO Mosteiro de uma Batalha, Património Mundial Português, Filma e Vê e RTP2, 2009"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Batalha_Monastery",
        "situacao": "ok",
        "texto": "The Monastery of Batalha (Portuguese: Mosteiro da Batalha) is a Dominican convent in the municipality of Batalha, historical Beira Litoral province, in the Centro of Portugal. Originally, and officially, known as the Monastery of Saint Mary of the Victory (Portuguese: Mosteiro de Santa Maria da Vitória), it was erected in commemoration of the 1385 Battle of Aljubarrota and would serve as the buria\n[…]\nThe monastery was built to thank the Virgin Mary for the Portuguese victory over the Castilians in the Battle of Aljubarrota in 1385, fulfilling a promise of King John I of Portugal. The battle put an end to the 1383–1385 Crisis.\n[…]\nIt took over a century to build, starting in 1386 and ending circa 1517, spanning the reign of seven kings. It took the efforts of fifteen architects (Mestre das Obras da Batalha), although for seven of them the title was merely honorary. The construction required an enormous effort, using extraordinary resources of men and material. New techniques and artistic styles, hitherto unknown in Portugal, were deployed.\n[…]\nBatalha probably had the first workshop for stained-glass windows in Portugal. The art was introduced to Portugal by German artists from the regions of Franconia and Nuremberg. The oldest windows date back to the end of the 1430s. But the Manueline, ogival stained-glass windows in the choir date from the 1520s and 1530s and were produced by Portuguese masters, among them Francisco Henriques.\n[…]\nThe architect Mateus Fernandes and his wife are buried under a marble tomb-slab close to the portal. The tomb of the knight Martim Gonçalves de Maçada, who saved the king's life during the battle at Aljubarrota, can be found close to the Capela do Fundador.\n[…]\nMonastery of Batalha: English guide, July 2005\n[…]\nMosteiro da Batalha – mosteirobatalha.gov.pt/en\n[…]\nMosteiro da Batalha on Google Arts & Culture\n[…]\nFundação Batalha de Aljubarrota – fundacao-aljubarrota.pt"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Batalha de Azincourt",
      "descricao": "Batalha de 1415, na Guerra dos Cem Anos, vencida pelo exército inglês de Henrique Quinto contra os franceses."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Em 1415, na Batalha de Azincourt, os ingleses venceram a cavalaria francesa graças sobretudo a que arma?",
    "resposta": "Arco longo",
    "distratores": [
      "Besta",
      "Canhão",
      "Lança"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Battle_of_Agincourt"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Battle_of_Agincourt",
        "situacao": "ok",
        "texto": "The Battle of Agincourt ( AJ-in-kor(t); French: Azincourt [azɛ̃kuʁ]) was an English victory in the Hundred Years' War (1337–1453). It took place on 25 October 1415 (Saint Crispin's Day) near Azincourt, in northern France. The unexpected victory of the vastly outnumbered English troops over the French army boosted English morale, crippled France, and began a new period of English dominance in the w\n[…]\nHenry's army landed in northern France on 13 August 1415, carried by a vast fleet. It was often reported to comprise 1,500 ships, but was probably far smaller. Theodore Beck also suggests that among Henry's army was \"the king's physician and a little band of surgeons\". Thomas Morstede, Henry V's royal surgeon, had previously been contracted by the king to supply a team of surgeons and makers of surgical instruments to take part in the Agincourt campaign.\n[…]\nSoon after the victory at Agincourt, a number of popular folk songs were created about the battle, the most famous being the \"Agincourt Carol\", produced in the first half of the 15th century. Other ballads followed, including \"King Henry Fifth's Conquest of France\", raising the popular prominence of particular events mentioned only in passing by the original chroniclers, such as the gift of tennis balls before the campaign.\n[…]\nThe Centre Azincourt 1415 is a museum dedicated to the battle located in the village. The museum lists the names of combatants of both sides who died in the battle.\n[…]\nThe Agincourt Battlefield Archaeology Project, Tim Sutherland (Project Director)\n[…]\nAzincourt Museum\n[…]\nBattle of Agincourt on In Our Time at the BBC – Bragg, Melvyn (presenter), with Anne Curry, Michael Jones and John Watts, 16 September 2004.\n[…]\nBattle of Agincourt on Medieval Archives Podcast\n[…]\nBattle of Agincourt animated map by David Crowther\n[…]\nLt Col John Woodford and Excavations at Azincourt (17 September 2015, Agincourt600 conference) by Tim Sutherland"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Batalha_de_Azincourt",
        "situacao": "ok",
        "texto": "A Batalha de Azincourt (em inglês: Agincourt) foi uma batalha decisiva ocorrida na Guerra dos Cem Anos em 25 de outubro de 1415 (Dia de São Crispim), no norte da França. Resultou em uma das maiores vitórias inglesas durante a guerra. O local onde a luta aconteceu foi perto de Artois, em torno de 40 km ao sul de Calais (agora em Azincourt, no norte da França).\n[…]\nApós um tempo encarando uns aos outros, o combate principal se deu na manhã de 25 de outubro de 1415. O terreno era difícil e irregular, com florestas nos flancos, o que não permitia muita manobra. Os franceses tomaram a iniciativa, mandando sua cavalaria atacar os arqueiros inimigos, mas foram repelidos com pesadas baixas. Logo em seguida, mandaram o grosso de sua infantaria. O terreno ruim, cheio de lama, atrasou este avanço e expôs os homens ao arco inglês.\n[…]\nFoi esta batalha que marcou o uso mais notável do arco longo inglês em grandes números, com arqueiros ingleses e galeses formando cerca de 80% do exército de Henrique. Esta batalha também é um dos temas centrais da peça Henry V de William Shakespeare.\n[…]\nSegundo uma lenda ou invenção muito posterior, os franceses se gabavam de sua superioridade numérica e ameaçavam os arqueiros de cortar o dedo do meio deles (fundamental para arqueiros, para armar o arco), mostrando o seu maior levantado; quando os franceses foram feitos prisioneiros, os ingleses mostraram os dedos e disseram \"Olha: os meus dedos estão aqui\".\n[…]\nEsse gesto deu origem ao gesto obsceno de \"mostrar o dedo\" de hoje em dia, nas versões francesa/continental de um dedo e na inglesa dos dois dedos.\n[…]\n«Azincourt – Centre Historique» (em francês)\n[…]\n«La bataille d'Azincourt 1415 – Mapas e desenhos»\n[…]\nA batalha de Agincourt (1415): O Triunfo Improvável de um “Bando de Irmãos”, por Félix Barreñada Martínez, University of León\n[…]\nHundred Years' War: Battle of Agincourt (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Torre de Pisa",
      "descricao": "Campanário inclinado da catedral de Pisa, na Itália."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "A Torre de Pisa começou a inclinar ainda no século doze, quando a obra chegou ao segundo andar. Qual foi a causa?",
    "resposta": "Solo mole e instável",
    "fonte": [
      "https://en.wikipedia.org/wiki/Leaning_Tower_of_Pisa"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Leaning_Tower_of_Pisa",
        "situacao": "ok",
        "texto": "The Leaning Tower of Pisa (Italian: torre pendente di Pisa [ˈtorre penˈdɛnte di ˈpiːza, - ˈpiːsa]), or simply the Tower of Pisa (torre di Pisa), is the campanile, or freestanding bell tower, of Pisa Cathedral. It is known for its nearly four-degree lean, the result of an unstable foundation. The tower is one of three structures in Pisa's Cathedral Square (Piazza del Duomo), which includes the cath\n[…]\nTwo German churches have challenged the tower's status as the world's most lopsided building: the 15th-century square Leaning Tower of Suurhusen and the 14th-century bell tower of the Oberkirche in the town of Bad Frankenhausen. Guinness World Records measured the Pisa and Suurhusen towers, finding Pisa's tilt to be 3.97 degrees.\n[…]\nIn June 2010, Guinness World Records certified the Capital Gate building in Abu Dhabi, UAE as the \"World's Furthest Leaning Man-made Tower\". It has an 18-degree slope, almost five times more than the Tower of Pisa, but was deliberately engineered to slant. The Leaning Tower of Wanaka in Wānaka, New Zealand, also deliberately built, leans at 53 degrees to the ground.\n[…]\nLeaning Tower of Niles, a replica of the Tower of Pisa\n[…]\nLeaning Tower of Zaragoza, was a famous European leaning tower\n[…]\nGreat Mosque of al-Nuri (Mosul), an ancient leaning tower that stood until 2017. Reconstruction was completed in November 2024  and an official opening was held in September 2025 in a ceremony attended by Iraqi prime minister Mohammed Shia al-Sudani.\n[…]\nThe Greyfriars Tower, the remains of a Franciscan monastery in King's Lynn, nicknamed \"The Leaning Tower of Lynn\"\n[…]\nTorre delle Milizie, a tilting medieval tower in Rome\n[…]\nPiazza dei Miracoli digital media archive (Creative Commons – licensed photos, laser scans, panoramas), data from a University of Ferrara/CyArk research partnership, includes 3D scan data from the Leaning Tower of Pisa.\n[…]\nLeaning Tower of Pisa at Structurae"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Torre_de_Pisa",
        "situacao": "ok",
        "texto": "A torre inclinada de Pisa (em italiano Torre pendente di Pisa), ou simplesmente Torre de Pisa, é um campanário (campanile ou campanário autônomo) da catedral da cidade italiana de Pisa. Está situada atrás da catedral, e é a terceira mais antiga estrutura na praça da Catedral de Pisa (Campo dei Miracoli), depois da catedral e do baptistério.\n[…]\nEmbora destinada a ficar na vertical, a torre começou a inclinar-se para sudeste logo após o início da construção, em 1173, devido a uma fundação mal construída e a um solo de fundação mal consolidado, que permitiu à fundação ficar com assentamentos diferenciais. A torre atualmente se inclina para o sudoeste.\n[…]\nA altura do solo ao topo da torre é de 55,86 metros no lado mais baixo e de 56,70 metros na parte mais alta. A espessura das paredes na base é de 4,09 metros e 2,48 metros no topo. Seu peso é estimado em 14 500 toneladas. A torre tem 296 ou 294 degraus: o sétimo andar da face norte das escadas tem dois degraus a menos. Antes do trabalho de restauração realizado entre 1990 e 2001 a torre estava inclinada com um ângulo de 5,5 graus, estando agora a torre inclinada em cerca de 3,99 graus.\n[…]\nA torre começou a inclinar-se após a progressão de construção para o terceiro andar em 1178. Isto deveu-se a uma fundação de meros três metros sobre um subsolo fraco e instável, um projecto que falhou desde o início. A construção foi posteriormente paralisada por quase um século, porque o Pisanos estavam continuamente envolvidos em batalhas com Génova, Lucca e Florença. Este tempo permitiu ao solo subjacente ajustar-se. Caso contrário, a torre de Pisa quase certamente teria sido derrubada.\n[…]\nThe Leaning Tower of Pisa - vídeos de realidade virtual\n[…]\nHow the process of inclination was stopped\n[…]\nPictures of Leaning structures\n[…]\nAprendendo a Torre de Pisa em base de dados Structurae.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Vlad, o Empalador",
      "descricao": "Vlad Terceiro, príncipe da Valáquia no século quinze, conhecido pela crueldade contra inimigos e pelo nome Drácula."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O nome de Vlad Terceiro, príncipe da Valáquia no século quinze, famoso por empalar inimigos, inspirou que personagem do escritor Bram Stoker?",
    "resposta": "Conde Drácula",
    "fonte": [
      "https://en.wikipedia.org/wiki/Vlad_the_Impaler",
      "https://en.wikipedia.org/wiki/Count_Dracula"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Vlad_the_Impaler",
        "situacao": "ok",
        "texto": "Vlad III (1428–31 – 1476/77), commonly known as Vlad the Impaler (Romanian: Vlad Țepeș [ˈvlad ˈtsepeʃ]) or Vlad Dracula ( DRAK-yuu-lə, -⁠yə-; Romanian: Vlad Drăculea [ˈdrəkule̯a]), was Voivode of Wallachia during three separate reigns (1448, 1456–1462, and 1476). He was born in the House of Drăculești, as the son of Vlad II Dracul. Vlad is chiefly remembered for his efforts to strengthen central a\n[…]\nBooks describing Vlad's cruel acts were among the first bestsellers in the German-speaking territories. In Russia, popular stories suggested that Vlad was able to strengthen his central government only by applying brutal punishments, and many 19th-century Romanian historians adopted a similar view. It is suggested that Vlad's patronymic inspired the name of Bram Stoker's literary vampire, Count Dracula. However, Vlad is not directly mentioned in Stoker's notes for the novel.\n[…]\nThe stories about Vlad made him the best-known medieval ruler of the Romanian lands in Europe. However, Bram Stoker's Dracula, which was published in 1897, was the first book to make a connection between Dracula and vampirism. Stoker had his attention drawn to the blood-sucking vampires of Romanian folklore by Emily Gerard's article about Transylvanian superstitions (published in 1885).\n[…]\nStoker \"apparently did not know much about\" Vlad the Impaler, \"certainly not enough for us to say that Vlad was the inspiration for\" Count Dracula, according to Elizabeth Miller. For instance, Stoker wrote that Dracula had been of Székely origin only because he knew about both Attila the Hun's destructive campaigns and the alleged Hunnic origin of the Székelys. Stoker's main source, Wilkinson, who accepted the reliability of the German stories, described Vlad as a wicked man.\n[…]\nLallanilla, Marc (24 October 2014). \"The Real Dracula: Vlad the Impaler\". LiveScience. Purch. Retrieved 26 July 2016."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Count_Dracula",
        "situacao": "ok",
        "texto": "Count Dracula () is a fictional character and title antagonist of Bram Stoker's gothic horror novel Dracula (1897). He is considered the prototypical and archetypal vampire in subsequent works of fiction. Some aspects of the character have been suggested to have been inspired by the 15th-century Wallachian prince Vlad III Dracula, although the identification of Stoker's Dracula with Vlad the Impal\n[…]\nIt is widely believed to be inspired by Sir Henry Irving, for whom Stoker was the personal assistant, and possibly other actors with aristocratic backgrounds whom Stoker had met during his life. Count Dracula is one of the best-known fictional figures of the Victorian era.\n[…]\nAlready in 1958, Cecil Kirtly proposed that Count Dracula shared his personal past with the historical Transylvanian-born Voivode Vlad III Dracula of Wallachia, also known as Vlad the Impaler or Vlad Țepeș. Following the publication of In Search of Dracula by Radu Florescu and Raymond McNally in 1972, this supposed connection attracted much popular attention. This work argued that Bram Stoker based his Dracula on Vlad the Impaler.\n[…]\nBut as noted by Corneel de Roos, in Chapter 25, Van Helsing and Mina drop this rudimentary connection to Vlad III and instead describe the Count's personal past as that of another of the Dracula line whom the Count had mentioned earlier to Jonathan, \"that other of his race\" who lived \"in a later age\", who had been inspired by the earlier Voivode Dracula and had also crossed the Danube river to fight the Turks.\n[…]\nAlthough Stoker may have been inspired by its romantic appearance, neither Boner, nor Mazuchelli nor Crosse (who also mention Terzburg or Törzburg) associate it with Vlad III; for the site of his fictitious Castle Dracula, Stoker preferred an empty mountain top.\n[…]\nDracula travel guide from Wikivoyage\n[…]\nBram Stoker Online – full text, PDF and audio versions of Dracula."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Vlad%2C_o_Empalador",
        "situacao": "ok",
        "texto": "Vlad III, comumente conhecido como Vlad, o Empalador (em romeno: Vlad Țepeș) ou Vlad Drácula (em romeno: Vlad Drăculea; Sighișoara, 1428/31 – Bucareste, 1476/77), foi Voivoda da Valáquia três vezes entre 1448 e sua morte em 1476/77. Ele é frequentemente considerado um dos governantes mais importantes da história da Valáquia e um herói nacional da Romênia.\n[…]\nLivros descrevendo os atos cruéis de Vlad estavam entre os primeiros bestsellers nos territórios de língua alemã. Na Rússia, histórias populares sugeriam que Vlad só conseguiu fortalecer seu governo central aplicando punições brutais, e muitos historiadores romenos do século XIX adotaram uma visão semelhante. O patronímico de Vlad inspirou o nome do vampiro literário de Bram Stoker, Conde Drácula.\n[…]\nCorvino fez de Ladislau II (filho do primo de Vlad Dracul, Dan II) o governante da Valáquia.\n[…]\nStoker \"aparentemente não sabia muito sobre\" Vlad, o Empalador, \"certamente não o suficiente para dizermos que Vlad foi a inspiração para\" o Conde Drácula, de acordo com Elizabeth Miller. Por exemplo, Stoker escreveu que Drácula era de origem Székely apenas porque ele sabia sobre as campanhas destrutivas de Átila, o Huno, e sobre a alegada origem Huna dos Székelys. A principal fonte de Stoker, Wilkinson, que aceitou a confiabilidade das histórias alemãs, descreveu Vlad como um homem perverso.\n[…]\nNa verdade, os documentos de trabalho de Stoker para seu livro não contêm referências à figura histórica, o nome do personagem sendo mencionado em todos os rascunhos, exceto nos posteriores, como 'Conde Wampyr'. Consequentemente, Stoker tomou emprestado o nome e \"fragmentos de informações diversas\" sobre a história da Valáquia ao escrever seu livro sobre o Conde Drácula.\n[…]\nConde Drácula\n[…]\nLallanilla, Marc (24 out 2014). «The Real Dracula: Vlad the Impaler». LiveScience. Purch. Consultado em 26 julho 2016",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Frederico Barba-Ruiva",
      "descricao": "Frederico Primeiro, imperador do Sacro Império Romano-Germânico no século doze, morto durante a Terceira Cruzada."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Em 1941, a invasão alemã da União Soviética recebeu como nome de código o apelido de um imperador do século doze. Que apelido era esse?",
    "resposta": "Barbarossa (Barba-Ruiva)",
    "fonte": [
      "https://en.wikipedia.org/wiki/Operation_Barbarossa",
      "https://en.wikipedia.org/wiki/Frederick_Barbarossa"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Operation_Barbarossa",
        "situacao": "ok",
        "texto": "Operation Barbarossa was the invasion of the Soviet Union by Nazi Germany and several of its European Axis allies starting on Sunday, 22 June 1941, during World War II. More than 3.8 million Axis troops invaded the western Soviet Union along a 2,900-kilometer (1,800 mi) front, with the main goal of capturing territory up to a line between Arkhangelsk and Astrakhan, known as the A–A line.\n[…]\nThe operation, code-named after the Holy Roman Emperor Frederick Barbarossa (\"red beard\"), put into action Nazi Germany's ideological goals of eradicating communism and conquering the western Soviet Union to repopulate it with Germans under Generalplan Ost, which planned for the removal of the native Slavic peoples by mass deportation to Siberia, Germanisation, enslavement, and genocide.\n[…]\nHitler also renamed the operation to Barbarossa in honor of medieval Emperor Friedrich I of the Holy Roman Empire, a leader of the Third Crusade in the 12th century. The Barbarossa Decree, issued by Hitler on 30 March 1941, supplemented the Directive by decreeing that the war against the Soviet Union would be one of annihilation and legally sanctioned the eradication of all Communist political leaders and intellectual elites in Eastern Europe. The invasion was tentatively set for May 1941.\n[…]\nOn 21 June, at 13:00 Army Group North received the codeword \"Düsseldorf\", indicating Barbarossa would commence the next morning, and passed down its own codeword, \"Dortmund\". At around 03:15 on 22 June 1941, the Axis Powers commenced the invasion of the Soviet Union with the bombing of major cities in Soviet-occupied Poland and an artillery barrage on Red Army defences on the entire front. Air-raids were conducted as far as Kronstadt near Leningrad and Sevastopol in the Crimea.\n[…]\nMarking 70 Years to Operation Barbarossa on the Yad Vashem website\n[…]\nOperation Barbarossa original reports and pictures from The Times"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Frederick_Barbarossa",
        "situacao": "ok",
        "texto": "Frederick Barbarossa (December 1122 – 10 June 1190), also known as Frederick I (German: Friedrich; Italian: Federico), was the Holy Roman Emperor from 1155 until his death in 1190. He was elected King of Germany in Frankfurt on 4 March 1152 and crowned in Aachen on 9 March 1152. He was crowned King of Italy on 24 April 1155 in Pavia and emperor by Pope Adrian IV on 18 June 1155 in Rome. Two years \n[…]\nIn 1975, Frederick's charters were published. This and the postwar abandonment of the Kyffhäuser myth have led to the publications of several new biographies. The notable recent authorities among German-speaking historians include Ferdinand Opll, Johannes Laudage, and Knut Görich. Opll's Friedrich Barbarossa (1990) presents the emperor as a pragmatic leader with a capacity of adaptation and recovery after defeat.\n[…]\nIn Italy, the scholarly attention towards Frederick's person and his reign is also considerable, with notable contributions including Franco Cardini's sympathetic 1985 biography or the 1982 work Federico Barbarossa nel dibattito storiografico in Italia e in Germania, edited by Manselli and Riedmann, considered by Schumann to be a definite synthesis of non-nationally oriented historiography approaches (combining German and Italian research results) of the last forty years.\n[…]\nCyrus Townsend Brady's Hohenzollern; a Story of the Time of Frederick Barbarossa (1901) begins with a dedication to \"the descendants of the great Germanic race who in Europe, in America, and in the Far East rule the world\".\n[…]\nThe German broadcaster ZDF documentary Die Deutschen (The Germans), featured Frederick I in season 1, episode 3 Barbarossa und der Löwe (Barbarossa and the Lion, 2008).\n[…]\nOperation Barbarossa, the codename of the German invasion of the Soviet Union in 1941, named after the emperor by Hitler\n[…]\nFamous Men of the Middle Ages – Frederick Barbarossa"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Opera%C3%A7%C3%A3o_Barbarossa",
        "situacao": "ok",
        "texto": "Operação Barbarossa (em alemão:  Unternehmen Barbarossa) foi o nome de código para a invasão da União Soviética pelas Potências do Eixo, iniciada em 22 de junho de 1941, durante a Segunda Guerra Mundial.\n[…]\nA operação recebeu o nome do imperador medieval Frederico Barbarossa do Sacro Império Romano, um líder da Terceira Cruzada no século XII. A invasão foi estabelecida para 15 de maio de 1941, embora tenha sido adiada por cerca de 7 semanas por um tempo adicional de preparação por causa da guerra nos Bálcãs e clima ruim.\n[…]\nA União Soviética tinha cerca de 23 mil tanques disponíveis, dos quais apenas 14 700 estavam preparados para combate. Cerca de 11 mil tanques estavam nos distritos militares ocidentais que enfrentavam a força de invasão alemã. Hitler declarou mais tarde a alguns de seus generais: \"Se eu soubesse sobre a força dos tanques russos em 1941, não teria atacado\".\n[…]\nA Operação Barbarossa foi a maior operação militar na história humana — nunca tantos soldados, tanques, armas e aeronaves foram usados ​​em uma única ofensiva. A invasão abriu a Frente Oriental da Segunda Guerra Mundial, o maior teatro de guerra durante esse conflito, e testemunhou confrontos violentos e destruição sem precedentes por quatro anos, que resultaram na morte de mais de 26 milhões de soviéticos.\n[…]\nPara os historiadores David Glantz e Jonathan House, a influência da Operação Barbarossa não atingiu apenas Stalin, mas os líderes soviéticos subsequentes, alegando que \"coloriu\" suas mentalidades estratégicas pelas \"próximas quatro décadas\" e instigou a criação de \"um elaborado sistema de Estados tampões e fantoches, projetados para isolar a União Soviética de qualquer possível ataque futuro\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Liga Hanseática",
      "descricao": "Associação comercial de cidades mercantis do norte da Europa, liderada por Lübeck, entre os séculos treze e dezessete."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que grande companhia aérea alemã tem no nome uma referência à Liga Hanseática, a associação medieval de cidades mercantis do norte da Europa?",
    "resposta": "Lufthansa",
    "fonte": [
      "https://en.wikipedia.org/wiki/Lufthansa",
      "https://en.wikipedia.org/wiki/Hanseatic_League"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lufthansa",
        "situacao": "ok",
        "texto": "Deutsche Lufthansa AG (German: [ˌdɔʏtʃə ˈlʊfthanzaː ʔaːˈɡeː] ), trading as Lufthansa Group, is a German aviation holding company. Its principal airline, Lufthansa German Airlines (branded as Lufthansa) is the flag carrier of Germany. Lufthansa Group is the second-largest airline group in Europe by passengers carried, as well as largest in Europe and fourth largest in the world by revenue.\n[…]\nThe modern Deutsche Lufthansa AG was founded as Aktiengesellschaft für Luftverkehrsbedarf (Luftag) on 6 January 1953 by staff of the former Deutsche Luft Hansa, Germany's national airline founded in 1926. While Deutsche Luft Hansa played a significant role in the development of commercial aviation in Germany, it was liquidated in 1951 due to its association with the Nazi regime during World War II.\n[…]\nLufthansa actively addressed its historical legacy during this period. In 1999, the airline participated in a German initiative aimed at resolving wartime misdeeds, acknowledging the use of forced labor by its predecessor, Deutsche Luft Hansa. As part of the initiative, Lufthansa also reportedly paid tens of millions of German marks. Additionally, a historical study was commissioned to shed light on this aspect of the company's past.\n[…]\nLufthansa Italia (2008–2011) – Italian airline subsidiary\n[…]\nThe Additional Businesses and Group Functions segment include Lufthansa Group's service companies, including Lufthansa Aviation Training and Lufthansa Systems, as well as the Group Functions for Lufthansa Group.\n[…]\nIn May 2022, during a New York to Frankfurt flight, the captain alerted Lufthansa security that some passengers had failed to follow crew instructions requiring the wearing of masks and barring gatherings. The company then barred over a hundred visibly Jewish passengers from the flight from boarding a connecting flight to Budapest. The majority were rebooked on other flights the same day."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Hanseatic_League",
        "situacao": "ok",
        "texto": "The Hanseatic League, commonly called The Hansa, was a medieval commercial and defensive network of merchant guilds and market towns in Central and Northern Europe.\n[…]\nIn 1979, Zwolle invited over 40 cities from West Germany, the Netherlands, Sweden and Norway with historic links to the Hanseatic League to sign the recesses of 1669, at Zwolle's 750 year city rights' anniversary in August of the next year. In 1980, those cities established a \"new Hanse\" in Zwolle, named Städtebund Die Hanse (Union of Cities THE HANSA) in German and reinstituted the Hanseatic diets.\n[…]\nThe legacy of the Hansa is reflected in several names: the German airline Lufthansa (lit. \"Air Hansa\"); F.C.\n[…]\nHansa Rostock, nicknamed the Kogge or Hansa-Kogge; Hansa-Park, one of the biggest theme parks in Germany; Hanze University of Applied Sciences in Groningen, Netherlands; Hanze oil production platform, Netherlands; the Hansa Brewery in Bergen and the Hanse Sail in Rostock; Hanseatic Trade Center in Hamburg; DDG Hansa, which was a major German shipping company from 1881 until its bankruptcy and takeover by Hapag-Lloyd in 1980; the district of New Hanza City in Riga, Latvia; and Hansabank in Estonia, which was rebranded as Swedbank.\n[…]\nIn the Metro franchise of post-apocalyptic novels and video games, a trading alliance of stations called The Commonwealth of the Stations of the Ring Line is also known as the Hanseatic League, usually shortened to Hansa or Hanza.\n[…]\nChronology of the Hanseatic League\n[…]\nHanseatic League Historical Re-enactors Archived 8 October 2007 at the Wayback Machine\n[…]\nHanseatic League related sources in the German Wikisource\n[…]\nColchester: a Hanseatic port – Gresham"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lufthansa",
        "situacao": "ok",
        "texto": "A Deutsche Lufthansa (pronúncia em alemão: [ˌdɔʏtʃə ˈlʊfthanza]), comumente abreviado para Lufthansa (alemão: [ˈlʊftˌhanza] ()), é uma empresa alemã de aviação, que opera no transporte aéreo de passageiros, com logística para manutenção, reparo e operação, fornecendo também serviços de TI. O Grupo Lufthansa inclui mais de 400 subsidiárias e empresas associadas.\n[…]\nQuando combinada com suas subsidiárias, ela é a segunda maior companhia aérea da Europa em termos de passageiros transportados, depois da Ryanair, companhia aérea de custo ultrabaixo, a maior da Europa e a quarta maior do mundo em termos de receita. A Lufthansa também é um dos cinco membros fundadores da Star Alliance, que é a maior aliança de companhias aéreas do mundo, formada em 1997.\n[…]\nDesde 2000, a empresa fez várias encomendas de aeronaves para sua frota. Em 2001, quinze aeronaves Airbus A380 são adquiridos. De 2001 a 2005, a empresa se concentra em negócios regionais, e a Star Alliance cresce com novas companhias aéreas atuando nesta. Dentro das aeronaves, a Classe Executiva das aeronaves já oferecia aos clientes conexão com banda larga à Internet. Em 2005, a SWISS é integrada ao grupo Lufthansa, consolidando a Lufthansa entre as maiores companhias aérea da Europa.\n[…]\nAs companhias aéreas Lufthansa Passenger Airlines, Swiss International Air Lines e Austrian Airlines representam o core business do Grupo Lufthansa. A carteira de companhia aérea é complementado pelas aéreas de baixo custo Germanwings e Eurowings em investimentos na rede da companhia aérea belga Brussels Airlines e da companhia aérea charter turco-alemão SunExpress.\n[…]\nA Lufthansa Cargo é a logística do Grupo Lufthansa com a maior transportadora de carga via aérea do mundo, que conta com subsidiárias espalhadas pelo mundo.\n[…]\nEm 1993, Voo Lufthansa 2904\n[…]\n«Página oficial da Lufthansa». www.lufthansa.com",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Universidade de Cambridge",
      "descricao": "Universidade inglesa da cidade de Cambridge, fundada em 1209."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "A Universidade de Cambridge nasceu em 1209, fundada por estudiosos que fugiram de conflitos com moradores de outra cidade. De que universidade eles vinham?",
    "resposta": "Oxford",
    "fonte": [
      "https://en.wikipedia.org/wiki/University_of_Cambridge"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/University_of_Cambridge",
        "situacao": "ok",
        "texto": "The University of Cambridge is a collegiate public research university in Cambridge, England. Founded in 1209, the University of Cambridge is the second-oldest university in the English-speaking world and the world's third-oldest university in continuous operation. The university's founding followed the arrival of scholars who left the University of Oxford for Cambridge after a dispute with local \n[…]\nPrior to the founding of the University of Cambridge in 1209, Cambridge and the area surrounding it already had developed a scholarly and ecclesiastical reputation largely due to the intellectual and academic contributions of monks from the nearby Ely Cathedral. The founding of the university, however, mostly originated with an incident at the University of Oxford during which two Oxford scholars, following the death of a local woman, were hanged by the town's secular authorities.\n[…]\nThe local ecclesiastical authorities, who were not consulted, would have traditionally been inclined to pardon scholars in such cases. During this time, Oxford's town authorities were in conflict with King John. Fearing more violence from Oxford townsfolk, University of Oxford scholars began leaving Oxford for more hospitable cities, including Paris, Reading, and Cambridge.\n[…]\nOther student publications include The Cambridge Student, which is funded by Cambridge Students' Union and is published fortnightly, The Tab, and The Mays Founded by two University of Cambridge students in 2009, The Tab is an online media outlet featuring light-hearted features content. The Mays is a literary anthology including student prose, poetry, and visual art from both University of Cambridge and Oxford students.\n[…]\nThe 1996 film True Blue centres around a mutiny at the time of the 1985 Oxford-Cambridge rowing race.\n[…]\nThe 2008 film The History Boys is about a group of boys applying to study history at Cambridge and Oxford."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Universidade_de_Cambridge",
        "situacao": "ok",
        "texto": "A Universidade de Cambridge (de Cantabrígia ou de Cambrígia; do inglês: University of Cambridge) é uma tradicional instituição de ensino superior pública que localiza-se na cidade de Cambridge (Reino Unido). Fundada em 1209, a Universidade de Cambridge é a terceira universidade mais antiga em operação contínua. A fundação da universidade seguiu a chegada de estudiosos que deixaram a Universidade d\n[…]\nA Universidade de Cambridge é integrante do grupo Golden Triangle de universidades britânicas de elite, em conjunto com a Universidade de Oxford, University College London, Imperial College London e London School of Economics.\n[…]\nCada escola (semelhante às Divisões na Universidade de Oxford) mantém o seu próprio Conselho Administrativo (Council of the School) com representação das faculdades e/ou departamentos incluídos no seu âmbito. Entre outras funções, os Conselhos das Escolas são responsáveis por nomear oito dos dezessete membros da Junta Geral das Faculdades, escolhidos necessariamente entre membros da Câmara Regente.\n[…]\nO sistema de supervisões, típico das Universidades de Cambridge e Oxford, consiste em sessões tutoriais organizadas pelos colégios, geralmente com uma hora de duração cada, onde grupos pequenos de alunos (entre um e cinco) se reúnem com um Supervisor (normalmente um \"Teaching Fellow\" do respectivo colégio) para discutir o material visto nas aulas.\n[…]\nAdicionalmente, a exemplo do que ocorre nas Universidades de Oxford e Dublin, mantém-se ainda a tradição arcaica de concessão do grau de cortesia (não acadêmico) de Master of Arts (MA).\n[…]\nAo contrário de outras universidades inglesas, a Universidade de Cambridge não usa um sistema de honours classification para o curso de graduação como um todo, mas desempenhos mínimos são normalmente exigidos para progressão de uma parte para outra do curso.\n[…]\nUniversidade de Oxford\n[…]\nUniversidade de Southampton\n[…]\nUniversidade Southampton Solent",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Guarda Varegue",
      "descricao": "Tropa de elite que servia de guarda pessoal aos imperadores bizantinos entre os séculos dez e quatorze."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "A Guarda Varegue, tropa de elite que protegia os imperadores bizantinos em Constantinopla, era formada sobretudo por guerreiros de que origem?",
    "resposta": "Nórdicos, os vikings",
    "fonte": [
      "https://en.wikipedia.org/wiki/Varangian_Guard"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Varangian_Guard",
        "situacao": "ok",
        "texto": "The Varangian Guard (Greek: Τάγμα τῶν Βαράγγων, romanized: Tágma tōn Varángōn) was an elite unit of the Byzantine army from the 10th to the 14th century who served as personal bodyguards to the Byzantine emperors. The Varangian Guard was known for being primarily composed of recruits from Northern Europe, including mainly Norsemen from Scandinavia but also Anglo-Saxons from England.\n[…]\nComposed primarily of Norsemen and Rus' for the first 100 years, the Guard began to see increased numbers of Anglo-Saxons after the Norman conquest of England. By the time of the Emperor Alexios Komnenos in the late 11th century, the Varangian Guard was largely recruited from Anglo-Saxons and \"others who had suffered at the hands of the Vikings and their cousins the Normans\".\n[…]\nThe Varangians relied on the broad-bladed Dane axe as their main weapon, although they were often also skilled swordsmen or archers. In some sources, such as Anna Komnene's The Alexiad, they are described as mounted; both Vikings and elite Anglo-Saxon warriors routinely used horses for strategic mobility even though they normally fought on foot. The guard was stationed primarily around Constantinople, and may have been barracked in the Bucoleon palace complex.\n[…]\nMany date to the Viking Age, and there are many associated with the Varangian Guards.\n[…]\nThe Varangians did not return home without being imprinted by Byzantine culture in one way or another, as exemplified by the Byzantine cross carved on the early eleventh century Risbyle runestone U 161, and which today is the coat-of-arms of Täby, a trimunicipal locality and the seat of Täby Municipality in Stockholm County, Sweden. The runes were made by the Viking Ulf of Borresta, see Orkesta runestone U 344, in memory of another Ulf, in Skålhamra, and at the request of the latter's father."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Guarda_varegue",
        "situacao": "ok",
        "texto": "A Guarda Varangiana (em grego: Τάγμα τῶν Βαράγγων; romaniz.: Tágma tōn Varángōn) foi uma unidade de elite do Exército Bizantino ativa entre o século X e o século XIV, servindo como guarda pessoal dos imperadores bizantinos. Essa unidade era conhecida pelo seu efetivo originário da Europa Setentrional, incluindo, em sua maioria, nórdicos da Escandinávia, mas também anglo-saxões da Inglaterra.\n[…]\nDurante esses anos, os suecos alistaram-se na Guarda Varangiana de tal modo que uma lei medieval sueca, Västgötalagen, de Västergötland, declarou que nenhum homem poderia ser herdeiro enquanto estivesse a serviço dos bizantinos em Constantinopla, visando interromper a emigração da Suécia, sobretudo diante do recrutamento de escandinavos pela corte de Londres (1013–1051), com os thingmen, e pela da Rus de Kiev (c. 980–1060).\n[…]\nComposta originalmente pelos nórdicos e rus no primeiro século de sua existência, a Guarda passou a ter efetivos anglo-saxões após a Conquista Normanda da Inglaterra, tanto que, no reinado de Aleixo I Comneno, no final do século XI, a guarda já tinha maioria anglo-saxã. Eles e os demais povos germânicos partilhavam uma tradição de lealdade, se necessário até a morte, sob juramento, e a invasão normanda resultou na perda das terras e dos senhores de muitos guerreiros.\n[…]\nA Guarda Varangiana não somente ofereceu segurança ao imperador bizantino, mas também participou de campanhas militares, tendo papel decisivo no curso das batalhas, visto a sua entrada em momentos críticos. No final do século XII, os varangianos já integraram-se aos gregos bizantinos e a organização continuou até a metade do século XIV. Em 1400, havia alguns que se colocavam como “varangianos” em Constantinopla.\n[…]\nExército bizantino\n[…]\nEnglish Refugees in the Byzantine Armed Forces: The Varangian Guard and Anglo-Saxon Ethnic Consciousness by Nicholas C.J. Pappas for De Re Militari.org",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Trivium",
      "descricao": "Grupo das três artes liberais de base do ensino medieval: gramática, retórica e lógica."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Nas escolas e universidades medievais, o trivium reunia gramática, retórica e que terceira disciplina?",
    "resposta": "Lógica, ou dialética",
    "distratores": [
      "Aritmética",
      "Música",
      "Astronomia"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Trivium",
      "https://en.wikipedia.org/wiki/Trivium"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Trivium",
        "situacao": "ok",
        "texto": "Trivium é uma banda norte-americana de heavy metal formada em 1999, originária de Orlando, Flórida. A banda já lançou dez álbuns de estúdio.\n[…]\nEm 17 de julho de 2015, a banda lançou um site \"snow.trivium.org\" provocando o novo álbum. Eles também mudaram seu perfil no Facebook para o mesmo quadro como no site, insinuando o lançamento do novo álbum.\n[…]\nEm 27 de agosto Trivium estreou o vídeo da música para o seu terceiro single \"Until the World Goes Cold\".\n[…]\nO auge deste crossover inesperado também aconteceu nesse mesmo ano, no festival VOA — Heavy Rock Festival, na Altice Arena em Lisboa, onde Toy surpreendeu o público ao subir ao palco ao vivo com os Trivium para cantar o seu hino clássico numa versão puramente metal. Diante do enorme sucesso e da reação avassaladora dos fãs, a banda lançou oficialmente a faixa de estúdio \"Coração Não Tem Idade (feat. Toy)\" mais tarde, em dezembro de 2019.\n[…]\nO Trivium é em essência uma banda de heavy metal, entretanto, têm características próprias do thrash metal, e algumas vezes, do death metal. Seu estilo evoluiu através dos anos que se passaram desde Ember to Inferno até Shogun, há uma clara influência do Metallica e um pouco do antigo In Flames.\n[…]\nO segundo álbum, Ascendancy, foi extremamente aplaudido no seu lançamento e nessa época Trivium foi fortemente rotulado de metalcore, com a terceira faixa, \"Pull Harder on the Strings of Your Martyr\" se tornando um hino e o resto do álbum o levando para um status de ouro, Ascendancy foi até nomeado \"Álbum da Década\" pela Metal Hammer."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Trivium",
        "situacao": "ok",
        "texto": "The trivium is the lower division of the seven liberal arts and comprises grammar, logic, and rhetoric.\n[…]\nEtymologically, the Latin word trivium means \"the place where three roads meet\" (tri + via); hence, the subjects of the trivium, Grammar, Logic, and Rhetoric, represents foundational knowledge, the practice of thinking and questioning, the ability to express oneself persuasively respectively, and serve as the foundation for the quadrivium, the upper (or \"further\") division of the medieval education in the liberal arts, which consists of arithmetic (numbers as abstract concepts), geometry (numbers in space), music (numbers in time), and astronomy (numbers in space and time).\n[…]\nRhetoric is the application of language in order to instruct and to persuade the listener and the reader. It is the knowledge (grammar) now understood (logic) and being transmitted outwards as wisdom (rhetoric). Its aim is to identify what is most probably true or false where logical certainty is not possible.\n[…]\nJohn Ayto wrote in the Dictionary of Word Origins (1990) that study of the trivium (grammar, logic, and rhetoric) was requisite preparation for study of the quadrivium (arithmetic, geometry, music, and astronomy). For the medieval student, the trivium was the curricular beginning of the acquisition of the seven liberal arts; as such, it was the principal undergraduate course of study. The word trivial arose from the contrast between the simpler trivium and the more difficult quadrivium.\n[…]\nSayers, Dorothy L. (1947). The Lost Tools of Learning. Essay presented at Oxford University."
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Alhambra",
      "descricao": "Palácio-fortaleza dos emires nacéridas, em Granada, na Espanha."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "No Pátio dos Leões da Alhambra, em Granada, quantas esculturas de leões sustentam a fonte central?",
    "resposta": "Doze",
    "fonte": [
      "https://en.wikipedia.org/wiki/Court_of_the_Lions",
      "https://en.wikipedia.org/wiki/Alhambra"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Court_of_the_Lions",
        "situacao": "ok",
        "texto": "The Court of the Lions (Spanish: Patio de los Leones) or Palace of the Lions (Spanish: Palacio de los Leones) is a palace in the heart of the Alhambra, a historic citadel formed by a complex of palaces, gardens and forts in Granada, Spain. It was commissioned by the Nasrid sultan Muhammad V of the Emirate of Granada in Al-Andalus. Its construction started in the second period of his reign, between\n[…]\nGranada was conquered by the Catholic Monarchs of Spain in 1492 and the Alhambra became a palace owned by the Spanish monarchy. Like much of the Alhambra, the Palace of the Lions suffered damages and underwent various repairs, restorations, and modifications over time. Under the Catholic Monarchs, it was connected to the Comares Palace by a direct passage for the first time, as it remains today.\n[…]\nThe hall consists of a central square space, acting almost like another courtyard, which is flanked by two niche-like side chambers. This kind of layout found in many other palace halls across the Alhambra. The side chambers are separate from the central space by double arches. A short corridor, passing through multiple archways, separates the hall from the Court of the Lions.\n[…]\nIn the second half of the 16th century, after the Alhambra had become a Spanish palace, the fountain was significantly modified by the addition of smaller water basins above the central spout in order to create a multi-level fountain. In 1624 sculptor Alonso de Mena repaired the fountain and cleaned it. In the early 19th century a set of spouts was added to the fountain and in 1837 another spout was added at the top of the fountain to reflect the tastes of the time.\n[…]\nPuerta Vílchez, José Miguel (2015) [2010]. Reading the Alhambra: A Visual Guide to the Alhambra Through Its Inscriptions. Translated by Trout, Jon. Edilux. ISBN 978-84-95856-30-2."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Alhambra",
        "situacao": "ok",
        "texto": "The Alhambra (, Spanish: [aˈlambɾa]; Arabic: الْحَمْرَاء, romanized: al-ḥamrāʼ ) is a palace and fortress complex located in Granada, Spain. It is one of the most famous monuments of Islamic architecture and the only well-preserved palace from the medieval Islamic world. Additionally, the palace contains notable examples of Spanish Renaissance architecture.\n[…]\nToday, the building houses the Alhambra Museum, which holds objects and artefacts relating to the Alhambra's history, as well as the Fine Arts Museum of Granada, which houses a collection of paintings from Granada dating from the 16th to 20th centuries.\n[…]\nLike the nearby mosque, the mausoleum was aligned with the qibla. It was decorated with carved stucco and tilework, remains of which have been uncovered in excavations. The windows of the central lantern were closed with wooden latticework, an example of which is preserved in the Alhambra Museum today.\n[…]\nThe main approach to the Alhambra today is through the Alhambra Woods in the valley on its south side. The outer entrance to the woods is through the Puerta de las Granadas ('Gate of the Pomegranates'), a formal Renaissance-style gate built in 1536 over the remains of an earlier Islamic-era gate.\n[…]\nThe earliest examples are dated to the late 13th or early 14th century, but the most elegant examples date from the late 14th or early 15th century. It is unclear where exactly they were produced, as there were several centres of ceramic production in the Nasrid kingdom, including Granada and Málaga. One of the best examples is the 14th-century Vase of the Gazelles, now kept at the Alhambra Museum.\n[…]\nVilla Alhambra (villa in Malta)\n[…]\nOfficial website  (Patronato of the Alhambra and Generalife)\n[…]\nMurphy, James Cavanah, 1816, The Alhamra (Alhambra) at Granada. Contains drawings of the Alhambra in the early 19th century."
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Grande Cisma do Ocidente",
      "descricao": "Crise da Igreja Católica, de 1378 a 1417, em que papas rivais disputaram a autoridade papal."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "No Grande Cisma do Ocidente, no início do século quinze, quantos papas rivais chegaram a disputar o trono de São Pedro ao mesmo tempo?",
    "resposta": "Três",
    "distratores": [
      "Dois",
      "Quatro",
      "Cinco"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Western_Schism"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Western_Schism",
        "situacao": "ok",
        "texto": "The Western Schism, also known as the Great Divide, the Great Occidental Schism, the Schism of 1378, or the Great Western Schism (Latin: Magnum schisma occidentale, Ecclesiae occidentalis schisma), was a split within the Catholic Church lasting from 20 September 1378 to 11 November 1417, in which bishops residing in Rome and Avignon simultaneously claimed to be the true pope, and were eventually j\n[…]\nThe Western Schism was, in practice, reinterpreted in 1958 when Angelo Giuseppe Roncalli chose to reuse the ordinal XXIII upon his election as Pope John XXIII, citing \"twenty-two [sic] Johns of indisputable legitimacy\".\n[…]\nBlumenfeld-Kosinski, Renate (2009). \"The Conceptualization and Imagery of the Great Schism\". In Rollo-Koster, Joëlle; Izbicki, Thomas M. (eds.). A Companion to the Great Western Schism (1378–1417). Brill. pp. 123–158.\n[…]\nFleck, Cathleen A. (2009). \"Seeking Legitimacy:Art and Manuscripts for the Popes in Avignon from 1378 to 1417\". In Rollo-Koster, Joëlle; Izbicki, Thomas M. (eds.). A Companion to the Great Western Schism (1378–1417). Brill. pp. 239–302.\n[…]\nHunyadi, Zsolt (2017). \"The Western Schism and Hungary: from Louis I to Sigismund of Luxembourg\". Chronica: Annual of the Institute of History, University of Szeged Hungary. 13: 44–53. ISSN 1588-2039.\n[…]\nRollo-Koster, Joëlle (2009). \"Civil Violence and the Initiation of the Schism\". In Rollo-Koster, Joëlle; Izbicki, Thomas M. (eds.). A Companion to the Great Western Schism (1378–1417). Brill. pp. 9–66.\n[…]\nRollo-Koster, Joëlle (2022). The Great Western Schism, 1378–1417: Performing Legitimacy, Performing Unity. Cambridge University Press.\n[…]\nStump, Philip H. (2009). \"The Council of Constance (1414-1418) and the End of the Schism\". In Rollo-Koster, Joëlle; Izbicki, Thomas M. (eds.). A Companion to the Great Western Schism (1378–1417). Brill. pp. 395–442.\n[…]\nThe Age of the Great Western Schism"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Grande_Cisma_do_Ocidente",
        "situacao": "ok",
        "texto": "O Grande Cisma do Ocidente, Cisma Papal ou simplesmente Grande Cisma foi uma crise religiosa da Igreja Católica que se estendeu de 1378 a 1417.\n[…]\nIniciava-se assim o Grande Cisma: o Papa, em Roma, e o Antipapa, em Avinhão — ambos reclamando para si o poder sobre a Igreja Católica. Posteriormente, surgiria ainda um outro Antipapa, em Pisa.\n[…]\nTanto o cardeal Roberto de Genebra, o futuro Antipapa Clemente VII de Avinhão, e Pedro de Luna de Aragão, o futuro Antipapa Bento XIII, também aprovaram sua eleição.\n[…]\nOs papas excomungaram-se mutuamente, nomeando outros cardeais para compensar as deserções, enviando mensageiros para a cristandade defendendo sua causa e estabelecendo sua própria administração. Posteriormente Bonifácio IX sucedeu a Urbano VI em Roma e Bento XIII sucedeu a Clemente em Avinhão. Vários clérigos reuniram-se em concílios regionais na França e em outros lugares, sem resultado definitivo.\n[…]\nNa época do cisma ocorriam na Península Ibérica as guerras fernandinas e a crise de 1383-1385, ambas opondo os reinos de Castela e Portugal por questões dinásticas.\n[…]\nAssim, no tempo de Fernando I de Portugal a sua desastrosa política externa levou-o a apoiar o Papa de Avinhão, que também tinha o apoio de Castela; depois da crise sucessória, como Castela continuasse a defender o Papa de Avinhão, não será de estranhar que João I de Portugal, para mostrar bem a sua independência, fosse pelo Papa romano.\n[…]\nEm 11 de novembro de 1417, o concílio elegeu Odo Colonna, que tomou o nome de Martinho V, com o que terminou o grande cisma do Ocidente e foi restabelecida a unidade.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Ordem de Cristo",
      "descricao": "Ordem militar portuguesa criada em 1319 para receber os bens e membros dos templários em Portugal."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Que ordem militar portuguesa, criada em 1319 como herdeira dos templários, tinha sua cruz pintada nas velas das naus de Cabral?",
    "resposta": "Ordem de Cristo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Order_of_Christ_(Portugal)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Order_of_Christ_(Portugal)",
        "situacao": "ok",
        "texto": "The Military Order of Christ is a Portuguese honorific order. It is the former order of Knights Templar as it was reconstituted in Portugal. Before 1910, it was known as the Royal Military Order of Our Lord Jesus Christ, and the Order of the Knights of Our Lord Jesus Christ. It was founded in 1318, with the protection of King Denis of Portugal, after the Templars were abolished on 22 March 1312 by\n[…]\nHeavily swayed by Philip IV of France, Pope Clement had the Knights Templar annihilated throughout France and most of Europe on charges of heresy, but Denis revived the Templars of Tomar as the Order of Christ, largely for their aid during the Reconquista and in the reconstruction of Portugal after the wars. Denis negotiated with Clement's successor, John XXII, for recognition of the new order and its right to inherit the Templar assets and property.\n[…]\nThe order's origins lie in the Knights Templar, founded circa 1118. The Templars were persecuted by the king of France and eventually disbanded by the pope in 1312. King Denis of Portugal created the Order of Christ in 1318 for those knights who survived their mass slaughter throughout Europe and was confirmed by the papal bull Ad ea ex quibus issued by Pope John XXII in Avignon in March 1319.\n[…]\nThe Templars' assets were thus assigned to the new order of Our Lord Jesus Christ, which had its first headquarters at the church of Santa Maria do Castelo, in Castro Marim. In 1356, the headquarters moved to the castle of Tomar, the former seat of the order of the Temple in Portugal. At the time, it was a strictly religious order, with the pope as its sovereign and its grand masters being professed knights bound by a vow of poverty.\n[…]\nThe Order of Christ, as awarded by the Portuguese government today, comes in six classes:\n[…]\nCristóvão da Gama\n[…]\nConvento de Cristo\n[…]\nOrder of Christ (Kongo)\n[…]\nGuimarães, J. Vieira, A Ordem de Cristo, Lisboa, I.N., 1936"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ordem_de_Cristo",
        "situacao": "ok",
        "texto": "A Ordem de Nosso Senhor Jesus Cristo originalmente era uma ordem religiosa e militar, criada a 14 de março de 1319 pela bula pontifícia Ad ea ex quibus cultus augeatur do Papa João XXII, que, deste modo, atendia aos pedidos do rei Dom Dinis. Recebeu o nome de Ordem dos Cavaleiros de Nosso Senhor Jesus Cristo ou Ordem da Milícia de Nosso Senhor Jesus Cristo e foi herdeira das propriedades e privilé\n[…]\nA Ordem de Cristo foi assim criada em Portugal como Ordo Militiae Jesu Christo pela bula Ad ae exquibus de 15 de março de 1319 pelo papa João XXII, sendo rei D. Dinis, pouco depois da extinção da Ordem do Templo. «Tratava-se de refundar a Ordem do Templo que anterior bula papal de Clemente V havia condenado à extinção».\n[…]\nO emblema da ordem, a Cruz da Ordem de Cristo, adornava as velas das Caravelas e Naus que exploravam os mares desconhecidos.\n[…]\nDe acordo com a legislação portuguesa de 1962 e na de 1986, a Ordem Militar de Cristo continuou associada ao exercício de funções de soberania e, em especial, à diplomacia, à magistratura e à Administração Pública.\n[…]\nAo longo do século XX foram agraciados com a Ordem Militar de Cristo os titulares dos mais altos cargos da nação portuguesa.\n[…]\nD. Gil Martins (1319–?)\n[…]\nConvento de Cristo\n[…]\nNa utilização moderna, as serifas das extremidades das hastes da cruz da Ordem de Cristo formavam ângulo de 45 graus com a sua base, não importando o comprimento das hastes.\n[…]\nTanto a Seleção Portuguesa de Futebol quanto a Seleção Brasileira de Futebol, bem como o Club de Regatas Vasco da Gama ou o Clube de Futebol Os Belenenses possuem a imagem estilizada da Cruz da Ordem de Cristo nos seus símbolos (exemplo (Seleção do Brasil)).\n[…]\nOrdens honoríficas de Portugal: Ordem Militar de Cristo\n[…]\nSilva, Manuel Luciano daInfelizmente os portugueses não sabe Estudo com hipóteses sobre as características da cruz da Ordem de Cristo.\n[…]\nObra da Ordem de Cristo na Biblioteca Nacional Digital",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Gárgula",
      "descricao": "Escultura de pedra, muitas vezes monstruosa, que projeta para fora do edifício a água das calhas do telhado."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Além de enfeitar as catedrais góticas, as gárgulas de pedra em forma de monstro tinham que função prática?",
    "resposta": "Escoar a água da chuva",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Gárgula",
      "https://en.wikipedia.org/wiki/Gargoyle"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Gárgula",
        "situacao": "ok",
        "texto": "Na arquitetura, especificamente na arquitetura gótica, uma gárgula é um ser grotesco esculpido ou formado com um bico projetado para transportar água de um telhado do lado de uma edificação, evitando que ela escorra pelas paredes de alvenaria. Os arquitetos costumavam usar várias gárgulas em um edifício para dividir o fluxo de água da chuva do telhado para minimizar os danos potenciais das tempest\n[…]\nUma calha é cortada na parte de trás da gárgula e a água da chuva normalmente sai pela boca aberta. Gárgulas são geralmente animais fantásticos alongados porque seu comprimento determina a que distância a água é direcionada da parede. Gárgulas, especialmente na Idade Média, eram ornadas com figuras monstruosas, humanas ou animalescas, comumente presentes na arquitetura gótica. O termo se origina do francês gargouille, originado de gargalo ou garganta, em Latim gurgulio, gula.\n[…]\nPalavras similares derivam da raiz gar, engolir, a palavra representando o gorgulhante som da água; em italiano: doccione; alemão: Ausguss, Wasserspeier.\n[…]\nO termo gárgula é majoritariamente aplicado ao trabalho medieval, mas através das épocas alguns significados de escoar a água do telhado, quando não conduzidos por goteiras, foram adotados. No antigo Egito, as gárgulas escoavam a água usada para lavar os vasos sagrados, o que aparentemente precisava ser feito no telhado plano dos templos. Nos templos gregos, a água dos telhados passava através da boca de leões os quais eram esculpidos ou modelados em mármore ou terracota na cornija.\n[…]\nUma das mais impressionantes coleções de gárgulas modernas pode ser encontrada na Catedral Nacional de Washington, nos Estados Unidos. A catedral iniciada em 1908 é encrustada com quimeras em pedra calcária. No século XX, o neogótico produziu muitas gárgulas modernas, notavelmente na Universidade de Princeton, Universidade de Duke e na Universidade de Chicago."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Gargoyle",
        "situacao": "ok",
        "texto": "In architecture, and specifically Gothic architecture, a gargoyle () is a carved or formed grotesque with a spout designed to convey water from a roof and away from the side of a building, thereby preventing it from running down masonry walls and eroding the mortar between. Architects often used multiple gargoyles on a building to divide the flow of rainwater off the roof to minimize potential dam\n[…]\nAlike the aforementioned gargoyles akin to the monstrous races, many human gargoyles would represent the common acts of certain sinners, such as a prostitute or moneylender. Some gargoyles depict those who are guilty of what one would call a social sin: a woman who is reading for example, as women were not expected and often shunned for attempting to engage in literature.\n[…]\nOthers believe, however, that the change to human characteristics in gargoyles created a sense of familiarity and relatability in the eyes of the everyday Church-goer.\n[…]\nJohn Taylor Arms educated the American public of gargoyles through his own etchings of various gargoyles found across Europe. Some instances include etchings of the gargoyles at Notre Dame Cathedral and Amiens Cathedral. His works were regarded as incredibly accurate in portraying the emotion in the expression of the original gargoyles.\n[…]\nGasch, W.T. (2003). Guide to Gargoyles and Other Grotesques. Washington National Cathedral. ISBN 978-0-9745299-0-5.\n[…]\nGargoyles – Dolores Herrero\n[…]\nRouen in France claims to be the origin of gargoyles, through the legend of a dragon La Gargouille\n[…]\nVIDEO about the conservation of Gargoyles\n[…]\nThe Gargoyles of Princeton University\n[…]\nChisholm, Hugh, ed. (1911). \"Gargoyle\" . Encyclopædia Britannica. Vol. 11 (11th ed.). Cambridge University Press. p. 466."
      }
    ]
  }
]

---

# MANIFESTO

# Manifesto de Perguntas — Mestre2

> **Versão preliminar 0.72 — 2026-10-17**
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
