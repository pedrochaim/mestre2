Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Lutas e Artes Marciais** (tema **Esportes**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Judô",
      "descricao": "Arte marcial e esporte olímpico japonês criado por Jigoro Kano no fim do século dezenove."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O que significa, ao pé da letra, o nome japonês da arte marcial judô?",
    "resposta": "Caminho suave",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Jud%C3%B4",
      "https://en.wikipedia.org/wiki/Judo"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Jud%C3%B4",
        "situacao": "ok",
        "texto": "Judô(pt-BR) ou judo(pt-PT?) (柔道, Jūdō; caminho suave, ou caminho da suavidade) é uma arte marcial japonesa, praticada como esporte de combate e fundada por Jigoro Kano em 1882. Os seus principais objetivos são fortalecer o físico, a mente e o espírito de forma integrada, além de desenvolver técnicas de defesa pessoal.\n[…]\nO Judô é uma arte marcial esportiva. Foi criado no Japão, em 1882, pelo professor Jigoro Kano. Ao criar esta arte marcial, Kano tinha como objetivo criar uma técnica de defesa pessoal, além de desenvolver o físico, espírito e mente. Esta arte marcial chegou ao Brasil no ano de 1922, em pleno período da imigração japonesa no país. O judô foi incluído nas Olimpíadas em 1972, após ter sido disputado em 1964, em Tóquio, por ser o esporte mais popular do país-sede.\n[…]\nChamando o seu novo sistema de Judo, ele pretendeu elevar o termo \"jutsu\" (arte ou prática) para \"do\", ou seja, para caminho ou via, dando a entender que não se tratava apenas de mudança de nomes, mas que o seu novo sistema repousava sobre uma fundamentação filosófica.\n[…]\nEm fevereiro de 1882, no templo de Eishoji de Kita Inaritcho, bairro de Shimoya em Tóquio, Jigoro Kano inaugura sua primeira escola de Judo, denominada Kodokan (Instituto do Caminho da Fraternidade), já que \"Ko\" significa fraternidade, irmandade; \"Do\" significa caminho, via; e \"Kan\", instituto.\n[…]\nEnquanto atuava na agricultura, crescia a fama de sua técnica como judoca e frequentemente era convidado a ensinar a arte marcial em Suzano. Em 1934, após um ano de trabalho na plantação de Naito, Terazaki compra um terreno no Bairro da Vila Urupês, em Suzano, onde abriu uma academia de judô e também fazia atendimento a todos os casos de fratura óssea e técnica ortopédica em geral de forma voluntária.\n[…]\n(+) Todo judoca inicia no judô nesta faixa"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Judo",
        "situacao": "ok",
        "texto": "Judo (Japanese: 柔道, Hepburn: Jūdō; lit. 'gentle way') is an unarmed modern Japanese martial art, combat sport, Olympic sport (since 1964), Paralympic sport (since 1988) and Commonwealth Games sport (since 1990). Judo is the most prominent form of Samurai throws and self-defense competed internationally.\n[…]\nJudo practitioners typically devote a portion of each practice session to ukemi (受け身; break-falls), in order that nage-waza can be practiced without significant risk of injury. Several distinct types of ukemi exist, including ushiro ukemi (後ろ受身; rear breakfalls); yoko ukemi (横受け身; side breakfalls); mae ukemi (前受け身; front breakfalls); and zenpo kaiten ukemi (前方回転受身; rolling breakfalls)\n[…]\nJudo has become a top sport in Israel only recently.\n[…]\nJudo is a hierarchical art, where seniority of judoka is designated by what is known as the kyū (級, kyū) -dan (段, dan) ranking system. This system was developed by Jigoro Kano and was based on the ranking system in the board game Go.\n[…]\nAkira Kurosawa, Sanshiro Sugata (姿三四郎, Sugata Sanshirō; a.k.a. Judo Saga), 1943.\n[…]\nAkira Kurosawa, Sanshiro Sugata Part II (續姿三四郎, Zoku Sugata Sanshirō; a.k.a. Judo Saga II), 1945.\n[…]\nThe manga was adapted into 124 episode anime by Madhouse Studio, airing from 1989 to 1992, and saw one live action movie and one animated movie released in its name. Ryoko Tani (谷 亮子, Tani Ryōko) a real-life Judoka who participated in the Olympics of Barcelona 1992 was famously nicknamed \"Yawara-chan\" for her skilled display of Judo at the summer Olympics.\n[…]\nJudo by country\n[…]\nList of judo techniques, partial list of judo techniques\n[…]\nList of World Champions in Judo\n[…]\nInternational Judo Federation (IJF)—The worldwide governing body for judo\n[…]\nKodokan Judo Institute—Headquarters of judo (Kano Jigoro's school)"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Judô",
      "descricao": "Arte marcial e esporte olímpico japonês criado por Jigoro Kano no fim do século dezenove."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1882, ao abrir o Instituto Kodokan em Tóquio, que educador japonês fundou o judô?",
    "resposta": "Jigoro Kano",
    "fonte": [
      "https://en.wikipedia.org/wiki/Kan%C5%8D_Jigor%C5%8D",
      "https://pt.wikipedia.org/wiki/Jud%C3%B4"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Kan%C5%8D_Jigor%C5%8D",
        "situacao": "ok",
        "texto": "Kanō Jigorō (嘉納 治五郎; 10 December 1860 – 4 May 1938) was a Japanese judoka, educator, politician, and the founder of judo. Judo was one of the first Japanese martial arts to gain widespread international recognition, and the first to become an official Olympic sport since 1964 (for men) and 1992 (for women), as well as the Commonwealth Games sport in 1990.\n[…]\nKanō, Jigorō. (Jan. 1915 – December 1918). Jūdō.\n[…]\nKanō, Jigorō. (1937). \"Jujutsu and Judo; What Are They?\" Tokyo: Kodokwan.\n[…]\nKanō, Jigorō. (Undated). Jujutsu Becomes Judo.\n[…]\nKanō, Jigorō. (1972). Kanō Jigorō, watakushi no shōgai to jūdō. Tokyo: Shin Jinbutsu Oraisha. ISBN 978-4820542414\n[…]\nKanō, Jigorō. (1986). Kodokan judo/Jigorō Kanō; edited under the supervision of the Kodokan Editorial Committee. Tokyo and New York: Kodansha International.\n[…]\nKanō, Jigorō. (1995). Kanō Jigorō taikei/kanshū Kōdōkan. Tokyo: Hon no Tomosha.\n[…]\nKanō, Jigorō. (2013). Mind over muscle – writings from the founder of judo Kodansha USA, English translation from Japanese anthology 2005 ISBN 978-1568364971\n[…]\nWatson, Brian N. (2000). The father of judo : a biography of Jigoro Kano (1st ed.). Tokyo: Kodansha. ISBN 978-4770025302.\n[…]\nStevens, John (2013). The way of judo : a portrait of Jigoro Kano and his students (First ed.). Boston: Shambhala. ISBN 978-1590309162.\n[…]\nCommittee for the Commemoration of the 150th Anniversary of the Birth of Jigoro Kano (2020). The legacy of Kano Jigoro : judo and education (First English ed.). Tokyo, Japan: Japan Publishing Industry Foundation for Culture. ISBN 978-4-86658-136-1. Archived from the original on 7 June 2021. Retrieved 25 March 2021.{{cite book}}:  CS1 maint: numeric names: authors list (link)\n[…]\nArticles by and about Kano Jigoro\n[…]\nThe life and Writings of Jigoro Kano, Founder of Judo. (thejudopodcast.eu)\n[…]\nThe life and Writings of Jigoro Kano, Founder of Judo. Part 2 (thejudopodcast.eu)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jud%C3%B4",
        "situacao": "ok",
        "texto": "Judô(pt-BR) ou judo(pt-PT?) (柔道, Jūdō; caminho suave, ou caminho da suavidade) é uma arte marcial japonesa, praticada como esporte de combate e fundada por Jigoro Kano em 1882. Os seus principais objetivos são fortalecer o físico, a mente e o espírito de forma integrada, além de desenvolver técnicas de defesa pessoal.\n[…]\nO Judô é uma arte marcial esportiva. Foi criado no Japão, em 1882, pelo professor Jigoro Kano. Ao criar esta arte marcial, Kano tinha como objetivo criar uma técnica de defesa pessoal, além de desenvolver o físico, espírito e mente. Esta arte marcial chegou ao Brasil no ano de 1922, em pleno período da imigração japonesa no país. O judô foi incluído nas Olimpíadas em 1972, após ter sido disputado em 1964, em Tóquio, por ser o esporte mais popular do país-sede.\n[…]\nPelas suas ideias, Jigoro Kano era desafiado e desacatado insistentemente pelos educadores da época, mas não mediu esforços para idealizar o novo jujutsu, diferente, mais completo, mais eficaz, muito mais objetivo e racional, denominado de Judo.\n[…]\nEm fevereiro de 1882, no templo de Eishoji de Kita Inaritcho, bairro de Shimoya em Tóquio, Jigoro Kano inaugura sua primeira escola de Judo, denominada Kodokan (Instituto do Caminho da Fraternidade), já que \"Ko\" significa fraternidade, irmandade; \"Do\" significa caminho, via; e \"Kan\", instituto.\n[…]\nPortanto, ensinava um estilo que não era exatamente o Kodokan Judo, o que não diminui sua enorme contribuição ao começo do Judô no Brasil. Daí por diante disseminaram-se a cultura e os ensinamentos do mestre Jigoro Kano e em 18 de março de 1969 era fundada a Confederação Brasileira de Judô, sendo reconhecida por decreto em 1972. Hoje em dia o judô é ensinado em academias desportivas e clubes e reconhecido como um esporte saudável que não está relacionado à violência."
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Caratê",
      "descricao": "Arte marcial de golpes de mãos e pés surgida em Okinawa, hoje parte do Japão."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Traduzido do japonês, o nome da arte marcial caratê quer dizer o quê?",
    "resposta": "Mão vazia",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Carat%C3%AA",
      "https://en.wikipedia.org/wiki/Karate"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Carat%C3%AA",
        "situacao": "ok",
        "texto": "Karaté (português europeu) ou caratê (português brasileiro), e facultativamente com menor expressão caraté (português europeu) ou karatê (português brasileiro), é uma arte marcial japonesa desenvolvida a partir de uma arte marcial indígena de Okinawa sob influência da arte da guerra chinesa (chuan fa), das lutas tradicionais japonesas (koryu) e das disciplinas guerreiras japonesas (budō).\n[…]\nO termo denota a forte influência chinesa e, na era do nacionalismo japonês xintoísta, em que a própria arte marcial foi bastante alterada e padronizada, alterou-se a grafia para a atual, em japonês: 空手; romaniz.: karate, de pronúncia homófona, que significa antes \"mão vazia\", por forma a demarcar a arte marcial das suas próprias raízes autóctone-chinesas. Hoje, assume também o termo em japonês: 空手道; romaniz.: 'karate-dō', \"O caminho da mão vazia\".\n[…]\nEntrementes, somente durante a década de 1930 foi que a Associação Japonesa de Artes Marciais, Butoku-kai, reconheceu oficialmente o caratê como arte marcial nipônica e requereu que todas as escolas fizessem registro na entidade, exigindo para esse registro que cada uma delas indicasse os nomes de seus estilos.\n[…]\nDa mesma forma como sucedeu com outras artes marciais japonesas, o caratê foi introduzido no Brasil com a chegada de imigrantes japoneses no começo do século XX. Mas somente no ano de 1956, o sensei Mitsuke Harada (Shotokan) instala o primeiro dojô em São Paulo.\n[…]\nSensei Anko Itosu, quando se dirigiu aos administradores japoneses, no fito de divulgar o caratê por todo o Japão, referiu-se à sua arte marcial em forma de princípios que poderiam ser facilmente compreendidos. Assim, tal conjunto de princípios ficou conhecido como Tode jukun, ou os Dez Princípios do Tode.\n[…]\nO caratê desenvolveu-se paralelamente às demais artes marciais japonesas, em Oquinaua, onde há uma língua própria. Todavia, o vocabulário é basicamente em japonês."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Karate",
        "situacao": "ok",
        "texto": "Karate (空手) (; Japanese pronunciation: [kaɾate] ; Okinawan pronunciation: [kaɾati]), also karate-do (空手道, Karate-dō), is a martial art developed in the Ryukyu Kingdom. It developed from the indigenous Ryukyuan martial arts (called te (手), \"hand\"; tī in Okinawan) under the influence of Chinese martial arts. While modern karate is primarily a striking art that uses punches and kicks, traditional kar\n[…]\nThe World Karate Federation was first introduced to Oceania as the Oceanian Karate Federation 1973.\n[…]\nThe first video game to feature fist fighting was Heavyweight Champ in 1976, but it was Karate Champ that popularized the one-on-one fighting game genre in arcades in 1984. In 1987, Capcom released Street Fighter, featuring multiple Karateka characters.\n[…]\nKarate Kommandos is an animated children's show, with Chuck Norris appearing to reveal the moral lessons contained in every episode.\n[…]\nDragon Ball (1984–present) is a Japanese media franchise (Anime) whose characters use a variety and hybrid of east Asian martial arts styles, including Karate and Wing Chun (Kung fu). Dragon Ball was originally inspired by the classical 16th-century Chinese novel Journey to the West, combined with elements of Hong Kong martial arts films, with influences of Jackie Chan and Bruce Lee.\n[…]\nIn the film series The Matrix, Neo uses a variety of martial arts styles. Neo's skill in martial arts was shown as having been downloaded into his brain, which granted combat abilities equivalent to a martial artist with decades of experience. Kenpo Karate is one of the many styles Neo learns as part of his computerised combat training. As part of the preparation for the movie, Yuen Woo-ping had Keanu Reeves undertake four months of martial arts training in a variety of different styles.\n[…]\nComparison of karate styles\n[…]\nKarate World Championships\n[…]\nKarate at the Summer Olympics\n[…]\nKarate at the World Games\n[…]\nWorld Karate Federation"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Caratê",
      "descricao": "Arte marcial de golpes de mãos e pés surgida em Okinawa, hoje parte do Japão."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "O caratê nasceu em que ilha, sede do antigo Reino de Ryukyu e hoje parte do Japão?",
    "resposta": "Okinawa",
    "distratores": [
      "Hokkaido",
      "Kyushu",
      "Shikoku"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Karate",
      "https://pt.wikipedia.org/wiki/Carat%C3%AA"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Karate",
        "situacao": "ok",
        "texto": "Karate (空手) (; Japanese pronunciation: [kaɾate] ; Okinawan pronunciation: [kaɾati]), also karate-do (空手道, Karate-dō), is a martial art developed in the Ryukyu Kingdom. It developed from the indigenous Ryukyuan martial arts (called te (手), \"hand\"; tī in Okinawan) under the influence of Chinese martial arts. While modern karate is primarily a striking art that uses punches and kicks, traditional kar\n[…]\nThere is also the \"Keichō import theory,\" which states that karate was brought to Ryukyu after the invasion of Ryukyu by the Satsuma Domain (Keichō 14, 1609), as well as the theory that it was introduced by Kōshōkun (Okinawan: Kūsankū) based on the description in Ōshima Writing.\n[…]\nKarate began as a common fighting system known as te (Okinawan: tī) among the Ryukyuan samurai class. There were few formal styles of te, but rather many practitioners with their own methods. One surviving example is Motobu Udundī (lit. 'Motobu Palace Hand'), which has been handed down to this day in the Motobu family, one of the branches of the former Ryukyu royal family.\n[…]\nIt is known that in \"Ōshima Writing\" (1762), written by Yoshihiro Tobe, a Confucian scholar of the Tosa Domain, who interviewed Ryukyuan samurai who had drifted to Tosa (present-day Kōchi Prefecture), there is a description of a martial art called kumiai-jutsu (組合術) performed by Kōshōkun (Okinawan:Kūsankū). It is believed that Kōshōkun may have been a military officer on a mission from Qing that visited Ryukyu in 1756, and some believe that karate originated with Kōshōkun.\n[…]\nMotobu's emphasis on kumite attracted Ōtsuka and Konishi, who later studied Okinawan kumite under him.\n[…]\nKarate is divided into many styles, each with their different training methods, focuses, and cultures; though they mainly originate from the historical Okinawan parent styles of Naha-te, Tomari-te and Shuri-te.\n[…]\nKarate at the World Games\n[…]\nWorld Karate Federation"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Carat%C3%AA",
        "situacao": "ok",
        "texto": "Karaté (português europeu) ou caratê (português brasileiro), e facultativamente com menor expressão caraté (português europeu) ou karatê (português brasileiro), é uma arte marcial japonesa desenvolvida a partir de uma arte marcial indígena de Okinawa sob influência da arte da guerra chinesa (chuan fa), das lutas tradicionais japonesas (koryu) e das disciplinas guerreiras japonesas (budō).\n[…]\nO arquipélago de Oquinaua (沖縄, Okinawa) localiza-se quase que exatamente a meio caminho entre Japão e China, no Mar da China Oriental. Por causa de sua posição geográfica, a região sempre despertou a cobiça dos dois países, os quais não pouparam esforços para estenderem suas influências (culturais e econômicas), tornando a existência de um governo local submetida à conjugação de interesses e política externos.\n[…]\nNesse meio tempo, sem olvidar altercações sínicas, o cenário político mudou porquanto da anexação final de Ryukyu, em 1875, por parte do Japão, fazendo com que o provecto reino se transmutasse na província de Oquinaua. Todavia, o que poderia ser o fim tornou-se uma oportunidade, pois terminou com o isolamento da população do arquipélago, incorporados de vez à população nipônica.\n[…]\nEm 1980, foi fundada a Associação Portuguesa de Karate-Do (Shotokai)[1], cuja génese se reporta a uma parte importante do núcleo inicial dos praticantes da Academia de Budo.\n[…]\nKata (型) significa \"forma\" ou \"modelo\". Um kata pretende ser uma luta simulada, formatada para que o carateca consiga praticar sozinho; são movimentos coreografados que visam dar desenvoltura frente a situações reais de enfrentamento, contra um ou vários adversários imaginários. A prática do kata foi introduzida desde cedo no caratê, quando a influência de mestres chineses se fez peremptória, desde quando se tratava de luta tipicamente de Oquinaua (Okinawa-te)."
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Kung fu",
      "descricao": "Termo chinês popularizado no Ocidente como nome genérico das artes marciais chinesas."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Em chinês, a expressão kung fu não se refere só a lutas. O que ela significa originalmente?",
    "resposta": "Habilidade adquirida com esforço",
    "distratores": [
      "Punho de ferro",
      "Caminho do guerreiro",
      "Força do tigre"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Kung_fu_(term)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Kung_fu_(term)",
        "situacao": "ok",
        "texto": "Kung fu (  or kungfu ; pinyin: gōngfu pronounced [kʊ́ŋfu]) refers to the Chinese martial arts, also called quanfa. In China, it refers to any study, learning, or practice that requires patience, energy, and time to complete. In its original meaning, kung fu can refer to any discipline or skill achieved through hard work and practice, not necessarily martial arts, such as the discipline of tea maki\n[…]\nThe Oxford English Dictionary defines the term \"kung-fu\" as \"a primarily unarmed Chinese martial art resembling karate\" and attributes the first use of \"kung fu\" in print to Punch magazine in 1966. This illustrates how the meaning of this term has been changed in English. The origin of this change can be attributed to the misunderstanding or mistranslation of the term through movie subtitles or dubbing.\n[…]\nThe term gongfu in Chinese simply means \"discipline;\" it came to mean \"martial arts\" in English in the late nineteenth century, and the earliest English mention of \"kung fu\" dates to 1869.\n[…]\nReferences to the concepts and use of Chinese martial arts can be found in popular culture. Historically, the influence of Chinese martial arts can be found in books and in the performance arts specific to Asia. Recently, those influences have extended to the movies and television that targets a much wider audience. As a result, Chinese martial arts have spread beyond their national roots and have a global appeal.\n[…]\nIn modern times, Chinese martial arts have spawned the genre of cinema known as the kung fu film. The films of Bruce Lee were instrumental in the initial burst of Chinese martial arts' popularity in the West in the 1970s, following a famous demonstration of \"Chinese Boxing\" to the US karate community the Long Beach International Karate Championships in 1964. Martial artists and actors such as Jackie Chan, Jet Li and Donnie Yen have continued the appeal of movies of this genre."
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Muay thai",
      "descricao": "Arte marcial e esporte de combate tradicional da Tailândia, também chamado de boxe tailandês."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Por permitir golpes com punhos, cotovelos, joelhos e canelas, o muay thai ganhou que apelido?",
    "resposta": "Arte das oito armas",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Muay_thai",
      "https://en.wikipedia.org/wiki/Muay_Thai"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Muay_thai",
        "situacao": "ok",
        "texto": "Muay thai (em tailandês: มวยไทย; RTGS: muai thai; AFI: [muɛ̄j tʰɑ̄j]; lit. arte marcial tailandesa) ou boxe tailandês, é uma arte marcial originária da Tailândia, onde é considerado desporto nacional.\n[…]\nEsta disciplina física e mental que inclui golpes de combate em pé, é conhecida como \"a arte das oito armas (membros)\", pois caracteriza-se pelo uso combinado de punhos, cotovelos, joelhos, canelas e pés, estando associada a uma boa preparação física e mental que a torna uma luta de contato total bastante eficiente.\n[…]\nÉ um processo a longo prazo, sem interrupções. Ela deve ser sempre aperfeiçoada, dependendo muito da condição de preparação física do praticante. As técnicas do muay thai são consideradas pelos mestres desta arte, das mais eficazes formas de combate sem elementos associados, seja pois sem armas brancas, porretes entre outros.\n[…]\nA articulação óssea formada pela extremidade distal do fémur, pela extremidade proximal da tíbia (e pela patela (rótula)) consiste numa arma ofensiva de grande importância no muay thai. As técnicas de joelhos são parte essencial desta arte tailandesa. O joelho é uma das armas mais letais deste estilo de luta. A sua eficiência compara-se com a do cotovelo quando o atleta o utiliza devidamente.\n[…]\nAs técnicas de cotovelos utilizadas no muay thai são um elemento importante no que caracteriza esta arte marcial. Consideradas enquanto armas de significante perigo, os cotovelos podem causar graves lesões. Nenhuma outra técnica do muay thai se compara ao cotovelo devido à sua grande capacidade de contusão. A utilização dos cotovelos nesta arte tailandesa, caracteriza diferentemente o muay thai de todas as demais artes marciais.\n[…]\nKon Kae Sok' = cotovelos"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Muay_Thai",
        "situacao": "ok",
        "texto": "Muay Thai or Muaythai (Thai: มวยไทย, RTGS: muai thai, pronounced [mūaj tʰāj] ), sometimes referred to as Thai boxing, the Art of Eight Limbs or the Science of Eight Limbs, is a Thai martial art and full-contact combat sport that uses stand-up striking, sweeps, and various clinching techniques. The name \"Art of Eight Limbs\" refers to the combined use of fists, elbows, knees and shins.\n[…]\nStrikes to the groin were permitted in Muay Thai boxing until the late 1980s, and are still permitted in Thailand itself, and in club or competition events that abide to the traditional rules. While competitors do wear groin protection, such as cups, the rules for club level sparring and competition events may vary regarding the protective gear that may or may not be worn.\n[…]\nAdisak Plitapolkarnpim, director of CSIP, was indirectly quoted (in 2016) as having said that muay Thai practitioners \"younger than 15 years old are being urged to avoid 'head contact' to reduce the risk of brain injuries, while children aged under nine should be banned from the combat fight\"; furthermore, the Boxing Act's minimum age to compete professionally was largely being flouted; furthermore, quoted indirectly, \"Boxers aged between 13 and 15\" should still be permitted to compete, but \"with light contact to the head and face\".\n[…]\nMuay Lerdrit\n[…]\nMuay Lao\n[…]\nKraitus, Panya (1992). Muay Thai: The Most Distinguished Art of Fighting. Phuket, Thailand: Transit Press. ISBN 974-86841-9-9.\n[…]\nMoore, Tony. Muay Thai The Essential Guide to the Art of Thai Boxing. New Holland. ISBN 1 84330 596 8.\n[…]\nPrayukvong, Kat (2006). Muay Thai: A Living Legacy. Bangkok, Thailand: Spry Publishing Co., Ltd. ISBN 974-92937-0-3.\n[…]\nWei, Lindsey (2020). Path of the Spiritual Warrior: Life and Teachings of Muay Thai Fighter Pedro Solana. Auckland, NZ: Purple Cloud Press, ISBN 979-8651807901\n[…]\nMedia related to Muay Thai (category) at Wikimedia Commons"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Yokozuna",
      "descricao": "Posto mais alto da hierarquia dos lutadores profissionais de sumô."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O título de yokozuna, o mais alto do sumô, deve o nome a que objeto amarrado à cintura do campeão?",
    "resposta": "Uma corda",
    "fonte": [
      "https://en.wikipedia.org/wiki/Yokozuna"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Yokozuna",
        "situacao": "ok",
        "texto": "Makuuchi (幕内), or makunouchi (幕の内), is the top division of the six divisions of professional sumo. Since 2004 its size is fixed at 42 wrestlers (rikishi), ordered into five ranks according to their ability as defined by their performance in previous tournaments.\n[…]\nFor many purposes, sekiwake and the komusubi rank are treated together as the junior san'yaku ranks, as opposed to ōzeki and yokozuna. For example, records of number of tournaments ranked in junior san'yaku are often referred to collectively in sumo publications.\n[…]\nFor many purposes, this and the sekiwake rank are treated together as the junior san'yaku ranks, as opposed to ōzeki and yokozuna, where extremely stringent promotion criteria exist. For example, records of number of tournaments ranked in junior san'yaku are often referred to collectively in sumo publications.\n[…]\nFor wrestlers reaching this rank, the benefits are a salary increase and also appearing to flank the chairman of the Sumo Association during the speeches he makes on opening and closing days of the official tournaments, held six times a year. He may also be called on to represent the wrestlers on behalf of the Sumo Association at other events, especially if the number of ōzeki and yokozuna are low.\n[…]\nWhen a maegashira defeats a yokozuna, it is called a gold star or kinboshi and he is rewarded monetarily for the victory for the remainder of his career. A bout where a wrestler earns a kinboshi by defeating a yokozuna generally causes great excitement at a sumo venue and it used to be common for audience members to throw their seat cushions into the ring (and onto the wrestlers) after such a bout, though this is technically prohibited and has significantly decreased in recent times.\n[…]\nJapan Sumo Association"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Makuuchi",
        "situacao": "ok",
        "texto": "No sumô, Makuuchi (幕内) representa o  topo da hierarquia dos praticantes profissionais do esporte. Esta categoria comporta um número fixo de 42 lutadores, divididos em diversos rankings.\n[…]\nO ranking mais elevado é o de Yokozuna, abaixo dele esta o restante do san'yaku, sendo eles komusobi, sekiwake e ozeki. Lutadores fora do san'yaku são chamados de Maegashira, que são classificados numericamente do 1 a baixo, podendo variar a quantidade a depender do numero de lutadores classificados nos rankings acima\n[…]\nO sumotori (lutador de sumo em Japonês) ao atingir a primeira divisão, inicia no ranking Maegashira. Tendo um recorde positivo no torneio (kachi-koshi), o sumotori é promovido.\n[…]\nSão realizados 6 torneios por ano, sendo que em cada torneio os sumotoris têm de lutar 15 vezes, uma vez por dia. Ao vencer a maioria das lutas, isto é, mais de 8 lutas, o sumotori obtém o Kachi-koshi que é uma espécie de salvo - a condição para ser promovido no ranking. Caso tenha mais derrotas que vitórias (make-koshi) o lutador cai no ranking.\n[…]\nContinuando em carreira ascendente, é promovido a Komusubi, depois a Sekiwake e finalmente a Ozeki.Como Ozeki, pode ser promovido a Yokozuna, o ranking mais alto do sumô profissional.\n[…]\nDeve haver ao menos um sekiwake e um komusobi de cada lado do banzuke. Não há necessidade de haver um Yokozuna. Caso tenha mais de um Yokozuna e somente um Ozeki, um dos lutadores classificados como yokozuna serão designados como  yokozuna-ozeki\n[…]\nGlossário de termos de sumô",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Éder Jofre",
      "descricao": "Boxeador paulistano, campeão mundial dos pesos-galo e dos pesos-pena."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Bicampeão mundial de boxe, o paulistano Éder Jofre ficou eternizado por que apelido?",
    "resposta": "Galo de Ouro",
    "fonte": [
      "https://pt.wikipedia.org/wiki/%C3%89der_Jofre",
      "https://en.wikipedia.org/wiki/%C3%89der_Jofre"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/%C3%89der_Jofre",
        "situacao": "ok",
        "texto": "Éder Jofre (São Paulo, 26 de março de 1936 – Embu das Artes, 2 de outubro de 2022) foi um pugilista brasileiro. Usualmente é considerado como o maior boxeador peso-galo de todos os tempos do mundo, e o maior boxeador da história do Brasil. Também é frequentemente visto como um dos maiores lutadores de boxe que já existiu no mundo, considerando todas as categorias.\n[…]\nConhecido pela alcunha \"Galo de Ouro\", concedida pelo escritor Benedito Ruy Barbosa, foi tricampeão mundial de boxe, campeão peso-pena pelo Conselho Mundial de Boxe (WBC), e campeão do peso-galo pelo Conselho Mundial de Boxe (WBC) e pela NBA (National Boxing Association), posterior Associação Mundial de Boxe (WBA). Lutava, quando amador, sob as cores do São Paulo Futebol Clube.\n[…]\nProfissionalmente, começou em 1957 na categoria \"peso-galo\". No ano seguinte, era já um campeão brasileiro em sua categoria. Em 1960, contra o argentino Ernesto Miranda, conquistou o título sul-americano dos \"galos\", começando assim, a escrever o seu nome na história do boxe mundial.\n[…]\nEm 1961, muda-se para os Estados Unidos e torna-se campeão mundial pela National Boxing Association, a mesma que se tornou a Associação Mundial de Boxe (WBA) em 1962, vencendo, por nocaute, o mexicano Eloy Sanchez no Olympic Auditorium. Um ano depois, unificou os títulos da categoria \"peso galo\", vencendo o irlandês Johnny Caldwell, campeão da versão europeia. Eder conseguiu manter o seu título mundial até 1965, ganhando todas as lutas por nocaute.\n[…]\nCampeão Mundial Pesos-Galo -CMB( primeiro campeão mundial dos galos dessa entidade)\n[…]\nMelhor \"peso galo\" de todos os tempos Conselho Mundial de Boxe (CMB)\n[…]\nPugilistas que defenderem com sucesso consecutivamente a partir de 5 vezes o título mundial dos pesos-galo pela Associação Mundial de Boxe (A.M.B) recebem o cinturão de super campeão denominado \" Eder Jofre\"."
      },
      {
        "url": "https://en.wikipedia.org/wiki/%C3%89der_Jofre",
        "situacao": "ok",
        "texto": "Eder Jofre (Portuguese pronunciation: [ˈɛdeʁ ˈʒofɾi]; 26 March 1936 – 2 October 2022) was a Brazilian professional boxer and architect who was both bantamweight and featherweight world champion. He is considered by many to be the greatest bantamweight boxer of all time.\n[…]\nÉder Jofre, a son of Aristides Jofre, whose nicknames (Eder's) were \"Galinho de Ouro\" (=\"Golden Bantam\") and \"Jofrinho\", made his professional debut on 23 March 1957, beating Raul Lopez by knockout in five rounds. He had twelve fights in 1957, including two each against Lopez, Osvaldo Perez, and Ernesto Miranda, the last of whom against whom Jofre sustained his first two record stains: two ten-round draws (ties).\n[…]\nJofre worked in politics, serving as an alderman for the city of São Paulo for 16 years. He then worked for DERSA, a state-owned company, working with the highways of São Paulo. In 2004, a DVD of Jofre's life titled \"O Grande Campeão\" was released. On Jofre's 85th birthday, in 2021, the first English language biography of his life was released. The book titled \"Eder Jofre: Brazil's First Boxing World Champion\", by family friend and author Christopher J.\n[…]\nJofre suffered from chronic traumatic encephalopathy. He was hospitalized in March 2022 at a clinic in Embu das Artes because of pneumonia. He died on 2 October due to complications from the disease. He was 86.\n[…]\nJofre was ranked as the number 1 bantamweight of all time by the International Boxing Research Organization in 2006.\n[…]\nÉder Jofre is depicted in the 2018 biographical film 10 Segundos Para Vencer. He was portrayed by Brazilian actor Daniel de Oliveira.\n[…]\nEder Jofre\n[…]\nBoxing record for Éder Jofre from BoxRec (registration required)\n[…]\nEder Jofre - CBZ Profile"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Mitsuyo Maeda",
      "descricao": "Judoca japonês que se fixou em Belém do Pará e ensinou sua luta à família Gracie."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O judoca japonês Mitsuyo Maeda, que viveu no Brasil, ficou famoso usando que título de nobreza?",
    "resposta": "Conde Koma",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Mitsuyo_Maeda",
      "https://en.wikipedia.org/wiki/Mitsuyo_Maeda"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Mitsuyo_Maeda",
        "situacao": "ok",
        "texto": "Mitsuyo Maeda (前田光世, Maeda Mitsuyo), conhecido também como Conde Koma (Hirosaki, 18 de novembro de 1878 – Belém do Pará, 28 de novembro de 1941), foi um judoca japonês, naturalizado brasileiro como Otávio Maeda (pronúncia em português: [oˈtavju mɐˈedɐ]`). Junto com Antônio Soishiro Satake, outro japonês naturalizado brasileiro, foi pioneiro do judô em países como Brasil e Reino Unido, entre outros\n[…]\nEm junho de 1908, Maeda foi para a Espanha acompanhado por Fujisake, Ono, e Hirano. Em Barcelona, Maeda participou de lutas contra Sadakazu Uyenishi e Taro Miyake. Neste país Maeda começou a usar a alcunha de \"Conde Koma\" (em português: “combate”, “confusão”).\n[…]\nFoi durante a viagem para a Península Ibérica, que Maeda adotou o nome artístico de Conde Koma. Existem muitas teorias explicando sua origem. Poderia ser uma alusão ao Komaru, que em japonês significa \"incomodado\", e forneceu uma referência irônica ao fato de sempre estar sem dinheiro. Maeda, certa vez, afirmou a um jornal europeu:\n[…]\nEm 3 de janeiro de 1916, no Theatro Politheama, Maeda finalmente lutou contra Nagib Assef, que foi jogado por Conde Koma, para fora do palco. Em 8 de janeiro de 1916, Maeda, Okura e Shimitsu embarcaram no SS Antony, que partiu para Liverpool. Ito Tokugoro foi para Los Angeles. Satake e Laku ficaram em Manaus, onde ensinariam ju-jutsu. Após 15 anos juntos, Maeda e Satake haviam finalmente se separado. Desta última viagem, pouco se sabe.\n[…]\nEm 1921, Maeda fundou sua primeira academia judô no Brasil no Clube do Remo, bairro da cidade velha, e sua construção foi num galpão de 4m x 4m. Mais tarde, a escola foi transferida para a sede do Corpo de Bombeiros, e depois para a sede da Igreja de Nossa Senhora de Aparecida. Desde 1991, a Academia funcionou no SESI, foi dirigida pelo sensei Alfredo Mendes Coimbra, da terceira geração de descendentes do Conde Koma."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Mitsuyo_Maeda",
        "situacao": "ok",
        "texto": "Otávio Maeda (born Mitsuyo Maeda [Japanese: 前田 光世]; November 18, 1878 – November 28, 1941) was a Japanese and Brazilian judōka, catch wrestler, and prizefighter who is considered one of the fathers of Brazilian Jiu-jitsu. He was commonly known by the nickname Conde Koma.\n[…]\nAccording to the Atlanta papers, Maeda listed his residence as the YMCA in Selma, Alabama.\n[…]\nIn 1908, Maeda toured Spain with Sadakazu Uyenishi. Around this time, he earned the nickname \"Conde Koma\" (literally \"Count Combat\" in Spanish and Portuguese). According to the Japanese National Diet Library:\n[…]\nWhen he had difficulty hitting upon a good name, he first thought of the name, \"Komaru Maeda\" from the Japanese word \"Komaru\" which means \"to be in difficultly\" as he was in financial difficulty at the time, and at last he decided to take up \"Koma\" alone from \"Komaru\" and to add \"Conde\" which means \"count\" in Spanish in front of it. Thus his nickname, \"Conde Koma\" was given birth.\n[…]\nHe offered a challenge under the name \"Conde Koma\", but his opponent soon found the challenger was Maeda and called off the bout.\n[…]\nLater, it was moved to the Fire Brigade headquarters and then to the church of N.S. de Aparecida. In 1991, the academy was located in the SESI and was run by Alfredo Mendes Coimbra, of the third generation of Conde Koma's descendants.\n[…]\nAlvarez defeated Satake and Yako Okura—the latter being billed as a former instructor at the Chilean Naval Academy—before being himself beaten by Maeda. Maeda also defeated a Cuban boxer called Jose Ibarra, and a French wrestler called Fournier. The Havana papers attributed Maeda with a Cuban student called Conde Chenard.\n[…]\nVirgílio, Stanlei (2002). Conde Koma – O invencível yondan da história (in Portuguese). Editora Átomo. ISBN 85-87585-24-X."
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Mitsuyo Maeda",
      "descricao": "Judoca japonês que se fixou em Belém do Pará e ensinou sua luta à família Gracie."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em que capital brasileira Mitsuyo Maeda ensinou as primeiras técnicas de luta ao jovem Carlos Gracie?",
    "resposta": "Belém",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Mitsuyo_Maeda",
      "https://en.wikipedia.org/wiki/Mitsuyo_Maeda"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Mitsuyo_Maeda",
        "situacao": "ok",
        "texto": "Mitsuyo Maeda (前田光世, Maeda Mitsuyo), conhecido também como Conde Koma (Hirosaki, 18 de novembro de 1878 – Belém do Pará, 28 de novembro de 1941), foi um judoca japonês, naturalizado brasileiro como Otávio Maeda (pronúncia em português: [oˈtavju mɐˈedɐ]`). Junto com Antônio Soishiro Satake, outro japonês naturalizado brasileiro, foi pioneiro do judô em países como Brasil e Reino Unido, entre outros\n[…]\nMaeda gostava do nome, e começou a usá-lo para promover a sua arte, posteriormente.\n[…]\nDe acordo com uma cópia do passaporte de Maeda fornecido por Gotta Tsutsumi, presidente da Associação Paramazônica Nipako de Belém, Maeda chegou ao Brasil pela cidade de Porto Alegre, estado do Rio Grande do Sul, em 14 de novembro de 1914, porém a história contada no sitio da CBJJ que foi na cidade de Santos São Paulo onde ele desembarcou primeiro ao chegar no Brasil(de acordo com publicação do jornal Correio Paulistano, Maeda realizou uma demonstração de Ju-jutsu no Teatro Variedades - Largo do Paissandu na cidade de Santos em 24 de Setembro de 1914).\n[…]\nNa década de 20 Maeda se envolveu na ajuda a imigrantes japoneses perto de Tomé-Açu, quando teve início o processo da imigração japonesa, participou ativamente do projeto servindo como intérprete e mediador do interesse japonês e do governo do estado. Em dezembro de 1928 quando foi fundada em Belém a Companhia Nipônica de Plantações do Brasil S/A, fez parte da sua diretoria assumindo o cargo de conselheiro fiscal.\n[…]\nEm maio de 1927, naturalizou-se como cidadão brasileiro. Maeda continuou também a ensinar o judô, principalmente para os filhos dos imigrantes japoneses. Consequentemente, em 1929, o Kodokan lhe promoveu ao sexto dan. E em 27 de novembro de 1941, ao sétimo dan (póstumo). Mas Maeda nunca soube desta promoção, porque faleceu em Belém, em 28 de novembro de 1941. A causa da morte foi doença renal, sendo sepultado no cemitério Santa Isabel."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Mitsuyo_Maeda",
        "situacao": "ok",
        "texto": "Otávio Maeda (born Mitsuyo Maeda [Japanese: 前田 光世]; November 18, 1878 – November 28, 1941) was a Japanese and Brazilian judōka, catch wrestler, and prizefighter who is considered one of the fathers of Brazilian Jiu-jitsu. He was commonly known by the nickname Conde Koma.\n[…]\nHe offered a challenge under the name \"Conde Koma\", but his opponent soon found the challenger was Maeda and called off the bout.\n[…]\nAccording to the newspaper Correio Paulistano, Maeda did a Judo demonstration at Teatro Variedades, Largo do Paissandu, Santos on September 24, 1914. According to a copy of Maeda's passport provided by Gotta Tsutsumi, head of Belém's Associação Paramazônica Nipako, Maeda arrived in Porto Alegre on November 14, 1914.\n[…]\nOn December 20, 1915, the first demonstration in Belém took place at the Theatro Politheama. The O Tempo newspaper announced the event, stating that Conde Koma would show the main jiu-jitsu techniques, excepting the prohibited ones. He also would demonstrate self-defense techniques. After that, the troupe would be accepting challenges from the crowd, and there would be the first sensational match of jiu-jitsu between Shimitsu (champion of Argentina) and Laku (Peruvian military professor).\n[…]\nConsequently, in 1929, the Kodokan promoted him to 6th dan, and on November 27, 1941, to 7th dan. Maeda never knew of this final promotion, because he died in Belém on November 28, 1941. The cause of death was kidney disease.\n[…]\nGastão Gracie was a business partner of the American Circus in Belém. In 1916, Italian-Argentine circus Queirolo Brothers staged shows there and presented Maeda. In 1917, Carlos Gracie, the 14‑year-old son of Gastão Gracie, watched a demonstration by Maeda at the Da Paz Theatre and decided to learn judo."
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Krav maga",
      "descricao": "Sistema de defesa pessoal criado por Imi Lichtenfeld e adotado pelas forças armadas de Israel."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Adotado pelas forças armadas de Israel, o krav maga tem um nome hebraico que significa o quê?",
    "resposta": "Combate de contato",
    "fonte": [
      "https://en.wikipedia.org/wiki/Krav_Maga"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Krav_Maga",
        "situacao": "ok",
        "texto": "Krav Maga ( KRAHV mə-GAH; Hebrew: קְרַב מַגָּע, IPA: [ˈkʁav maˈɡa]; lit. 'contact combat') is an Israeli self-defence system. Developed for the Israel Defense Forces (IDF), it is known for its focus on real-world situations.\n[…]\nThe term krav maga in Hebrew is literally translated as 'contact combat' – the three letter root of the first word is q-r-b (קרב), and the noun derived from this root means either \"combat\" or \"battle\", while the second word is a participle form derived from the verb root n-g-‘ (נגע), that literally means either \"contact\" or \"touch\".\n[…]\nLichtenfeld quickly discovered, however, that actual fighting was very different from competition fighting, and although boxing and wrestling were good sports, they were not always practical for the aggressive and brutal nature of street combat. It was then that he started to re-evaluate his ideas about fighting and started developing the skills and techniques that would eventually become Krav Maga.\n[…]\nIn 1948, when the State of Israel was founded and the IDF was formed, Lichtenfeld became Chief Instructor for Physical Fitness and Krav Maga at the IDF School of Combat Fitness. He served in the IDF for about 20 years, during which time he developed and refined his unique method for self-defense and hand-to-hand combat. Self-defense was not a new concept, since nearly all martial arts had developed some form of defensive techniques in their quest for tournament or sport dominance.\n[…]\nOther organizations that teach Krav Maga in and outside of Israel use similar grading systems.\n[…]\nThe Grand Theft Auto IV protagonist, Niko Bellic, uses Krav Maga in physical combat.\n[…]\nClose-quarters combat\n[…]\nCombatives\n[…]\nMedia related to Krav Maga at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Krav_mag%C3%A1",
        "situacao": "ok",
        "texto": "Krav Maga (em hebraico:   קרב מגע, \"combate de contato\") é um sistema de combate corpo a corpo, desenvolvido em Israel, que envolve técnicas de luta, torções, defesa contra armas como armas de fogo, bastões, facas e golpes como socos, chutes, cotoveladas e joelhadas.\n[…]\nO nome em hebraico significa \"combate de Contato.\". Krav (em hebraico:  קרב) significa \"combate\" e Magá (em hebraico:  מגע) significa \"contato\".\n[…]\nAté 1980, todos os especialistas em Krav Maga viveram em Israel e treinaram na Israeli Krav Maga Association (IKMA). Aquele ano marca o começo do contato entre especialistas israelenses de Krav Maga e estudantes interessados, nos Estados Unidos. Em 1981, um grupo de seis instrutores de Krav Maga viajaram para os EUA para demonstrar o seu sistema, primeiro para Centros Comunitários Judaicos locais.\n[…]\nKrav Magá também é ensinado a civis, militares, agências de imposição da lei e agências de segurança ao redor do mundo. O exército sueco utiliza Krav Magá ligeiramente no treinamento de combate corpo-a-corpo para guerras urbanas.\n[…]\nA Federação Internacional de Krav Magá em Netanya, fora de Israel treina alguns dos melhores guarda-costas do mundo, que utilizam Krav Magá como uma arte de combate comercial, já que ela inclui vários exercícios para evacuar pessoas importantes através de uma multidão hostil. Além disso, as táticas para executar vários oponentes rapidamente é vital para agentes de proteção pessoal.\n[…]\nEm Portugal, o Krav Magá integra de forma oficial o currículo de formação dos Oficiais da Força Aérea Portuguesa desde 2008, sob a responsabilidade técnica da Israeli Krav Maga Association, sendo também utilizado por diversas forças de segurança e unidades especiais não só da Polícia como das Forças Armadas.\n[…]\n«Krav Magá Belo Horizonte»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Krav maga",
      "descricao": "Sistema de defesa pessoal criado por Imi Lichtenfeld e adotado pelas forças armadas de Israel."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Na Bratislava dos anos 1930, o criador do krav maga, Imi Lichtenfeld, usava suas técnicas nas ruas com que objetivo?",
    "resposta": "Defender judeus de grupos fascistas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Imi_Lichtenfeld",
      "https://en.wikipedia.org/wiki/Krav_Maga"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Imi_Lichtenfeld",
        "situacao": "ok",
        "texto": "Imre \"Imi\" Lichtenfeld (Hebrew: אימריך \"אימי\" ליכטנפלד; Hungarian: Lichtenfeld Imre; 26 May 1910 – 9 January 1998), also known as Imi Sde-Or (אימי שדאור), was a Hungarian-born Israeli martial artist. He is widely recognized for developing Krav Maga, an Israeli martial art.\n[…]\nIn the late 1930s, antisemitic riots threatened the Jewish population of Bratislava in Europe. Together with other Jewish boxers and wrestlers, Lichtenfeld helped to defend his Jewish neighborhood against fascist gangs. He quickly realized that sport has little in common with real-life combat and began developing a system of techniques for practical self-defense in life-threatening situations.\n[…]\nAfter he finished his active duty, Lichtenfeld modified Krav Maga to fit the needs of police forces and ordinary civilians. The method was formulated to suit everyone—man and woman, boy or girl—who might need it to survive an attack while sustaining minimal harm. To disseminate his method, Lichtenfeld established two training centers, one in Tel Aviv and the other in Netanya. He trained teams of Krav Maga instructors, who were accredited by him and the Israeli Ministry of Education.\n[…]\nHe also created the Israeli Krav Maga Association (IKMA) on 22 October 1978 and the International Krav Maga Federation in 1995. On 9 January 1998, Lichtenfeld died in Netanya, Israel, at the age of 87. He is buried at Netanya Shikun Vatikim Cemetery on Section פ.\n[…]\nLichtenstein, Kobi. Lichtenstein, Sandra. Krav Maga: o Legado de Imi Lichtenfeld. ISBN 978-6586485066.\n[…]\nLo Presti, Gaetano. Krav Maga Borè srl, 2013. ISBN 978-8891103352.\n[…]\nLo Presti, Gaetano. Imi Lichtenfeld – The Grand Master of Krav Maga Borè srl, 2015. ASIN B00VXZXG7K."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Krav_Maga",
        "situacao": "ok",
        "texto": "Krav Maga ( KRAHV mə-GAH; Hebrew: קְרַב מַגָּע, IPA: [ˈkʁav maˈɡa]; lit. 'contact combat') is an Israeli self-defence system. Developed for the Israel Defense Forces (IDF), it is known for its focus on real-world situations.\n[…]\nKrav Maga was originally developed by Hungarian-born Israeli martial artist Imi Lichtenfeld. Having grown up in Bratislava during a time of antisemitic unrest, Lichtenfeld used his training as a boxer and wrestler to defend Jewish neighborhoods against attackers in the mid-to-late 1930s, becoming an experienced street fighter.\n[…]\nStudents learn to defend against a variety of attacks and are taught to counter efficiently.\n[…]\nIn the mid-1930s, antisemitic riots began to threaten the Jews of Bratislava, Czechoslovakia. Lichtenfeld became the leader of a group of Jewish boxers and wrestlers who took to the streets to defend Jewish neighborhoods against the growing numbers of antisemitic Nazis.\n[…]\nKAMI is a parallel discipline to the original Krav Maga. Eli retired as the Chief Krav Maga instructor in 1987 and Boaz Aviram became the third person to hold the position, being the last head instructor to have studied directly with both Lichtenfeld and Avikzar.\n[…]\nUpon Imi Lichtenfeld's retirement from the IDF, he decided to open a school and teach Krav Maga to civilians.\n[…]\nMost of the Krav Maga organizations in Israel use Imi Lichtenfeld's colored belt grading system which is based upon the Judo ranking system. It starts with a white belt, and then yellow, orange, green, blue, brown and black belts. Black belt students can move up the ranks from 1st to 9th Dan. The time and requirements for advancing have some differences between the organizations.\n[…]\nDefendu\n[…]\nMedia related to Krav Maga at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Imi_Lichtenfeld",
        "situacao": "ok",
        "texto": "Emrich \"Imi\" Lichtenfeld (em hebraico Imi Sde-or) (Budapeste, Império Austro-Húngaro, 26 de maio de 1910 — Netânia, Israel, 9 de janeiro de 1998) foi um judeu-húngaro, mais tarde israelense, criador da arte marcial israelense para defesa pessoal, o Krav Maga.\n[…]\nA partir de meados dos anos trinta a vida em Bratislava já não era a mesma. Pouco a pouco, grupos fascistas e anti-semitas ganhavam espaço e transformavam a vida do país. Confrontos de rua, perseguições e morte eram a nova realidade. Imi tornou-se líder de um grupo de resistência que lutava contra os grupos fascistas. Entre os anos 1936 e 40, participou de inúmeros e violentos confrontos, sozinho ou em equipe.\n[…]\nTreinou pessoalmente guerreiros de grupos de elite das forças armadas israelenses; pessoas que participaram de operações e guerras que ali ocorreram. Saindo da ativa como instrutor do Tzahal, adaptou e adequou a técnica do Krav Maga para o mundo civil.\n[…]\nNa mesma carta é dito que a qualidade do Krav Maga é resultado do valor humanitário de Imi estruturado na simplicidade, objetividade, autocontrole, segurança máxima no treinamento e no combate, honestidade e respeito para com o adversário, mesmo ele sendo um inimigo.\n[…]\nPara a tristeza de toda a família Krav Maga, Imi Lichtenfeld faleceu no dia 10 de Janeiro de 1998.\n[…]\nMas sua obra vive. Seu sonho de vida atravessou fronteiras e já chegou a mais de 40 países. Aqueles que nunca o conheceram pessoalmente ou os horrores das guerras que ele enfrentou, abraçam seu caminho de vida. Suas palavras de sabedoria e simplicidade ainda são ditas nas salas de aula do mundo inteiro. A opção de ser autônomo, romper barreiras, de defender-se de qualquer ameaça; se ainda não sabe qual o caminho, conheça o Krav Maga.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Sensei",
      "descricao": "Termo japonês de tratamento usado para professores e mestres, inclusive nas artes marciais."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Ao pé da letra, a palavra japonesa sensei, usada para tratar os mestres de artes marciais, significa o quê?",
    "resposta": "Aquele que nasceu antes",
    "distratores": [
      "Mão que guia",
      "Espírito do guerreiro",
      "Coração sereno"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Sensei"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sensei",
        "situacao": "ok",
        "texto": "The term \"先生\", read sensei in Japanese, xiansheng in Chinese, seonsaeng in Korean, and tiên sinh in Vietnamese, is an honorific used in the Sinosphere. In Japanese, the term literally means \"person born before another\" or \"one who comes before\". It is generally used after a person's name and means \"teacher\".\n[…]\nPrior to the development of the modern vernacular, xiansheng was used to address teachers of both genders; this has fallen out of usage in Standard Chinese, though it is retained in some southern Chinese Chinese varieties such as Cantonese, Hokkien, Wu, Teochew and Hakka, where it still has the meaning \"teacher\" or \"doctor\". In Japanese, sensei is still used to address people of both genders.\n[…]\nIt is likely both the current Southern Chinese and Japanese usages are more reflective of its Middle Chinese etymology. For Hokkien and Teochew communities in Singapore and Malaysia, \"sensei\" is the proper word to address school teachers. Traditional physicians in the Malay Peninsular and Singapore are addressed among locals with the Hokkien variant sinseh.\n[…]\nIn Sanbo Kyodan-related Zen schools, sensei is used to refer to ordained teachers below the rank of rōshi. However, other schools of Buddhism in Japan use the term for any priest regardless of seniority; for example, the title is also used for Jōdo Shinshū ministers in the United States, whether they are ethnically Japanese or not. In the Kwan Um School of Zen, according to Zen master Seungsahn, the Korean title ji do poep sa nim is much like the Japanese title \"sensei\".\n[…]\nWhat is a Sensei in Judo?\n[…]\nKarate: What is a Sensei in Karate? Archived 2018-08-21 at the Wayback Machine"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Regras do Marquês de Queensberry",
      "descricao": "Código de regras publicado na Inglaterra em 1867 que deu origem ao boxe moderno com luvas."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "As regras do boxe moderno, publicadas em Londres em 1867, levam o nome de que nobre britânico?",
    "resposta": "Marquês de Queensberry",
    "fonte": [
      "https://en.wikipedia.org/wiki/Marquess_of_Queensberry_Rules"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Marquess_of_Queensberry_Rules",
        "situacao": "ok",
        "texto": "The Marquess of Queensberry Rules (also known as the Marquis of Queensbury rules or Queensberry Rules) are a set of generally accepted rules governing the sport of boxing. Drafted by Welsh sportsman John Graham Chambers in London in 1865 and published in 1867, the code was so named due to its public endorsement by John Douglas, 9th Marquess of Queensberry. They were the first to require the use of\n[…]\nThe boxing code was written by John Graham Chambers, a Welshman from Llanelli, Carmarthenshire, and drafted in London in 1865, before being published in 1867 as \"the Queensberry rules for the sport of boxing\". At the time, boxing matches were conducted under the London Prize Ring Rules, written in 1838 and revised in 1853.\n[…]\nBare-knuckle fights under the London Prize Rules continued for the next several decades, although the Queensberry Rules would eventually become the standard set of rules under which all boxing matches were governed. This version persuaded boxers that \"you must not fight simply to win; no holds barred is not the way; you must win by the rules\".\n[…]\nOne early prize fighter who fought under Marquess of Queensberry rules was Jem Mace, former English heavyweight champion, who defeated Bill Davis in Virginia City, Nevada, under these rules in 1876, with Mace's enthusiasm for gloved fighting doing much to popularise the Queensberry rules.\n[…]\nIn addition to professional boxing, amateur boxing adopted the Queensberry rules. In 1880, the Amateur Boxing Association (ABA), the sport's first amateur governing body, was formed in Britain, and in the following year the ABA staged its first official amateur championships. The Amateur Athletic Union (AAU) of the US was formed in 1888 and instituted its annual championships in boxing the same year.\n[…]\nThe contest in all other respects to be governed by revised London Prize Ring Rules.\n[…]\nLondon Prize Ring Rules"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Regras_do_Marqu%C3%AAs_de_Queensberry",
        "situacao": "ok",
        "texto": "As Regras do Marquês de Queensberry deram início à base do que hoje se chama de boxe moderno.\n[…]\nEntão, no intuito de enfim tornar o boxe aceito pela sociedade, em fins do século XIX, foram introduzidas as Regras do Marquês de Queensberry, que ao contrário do que o nome possa sugerir, não foram elaboradas pelo Marquês de Queensberry, mas sim por John Graham Chambers.\n[…]\nAmigo de Chambers e também um entusiasta do boxe, John Douglas, o 9.º Marquês de Queensberry, apenas fez a cortesia de emprestar seu nome às regras, utilizando-se de toda sua fama para dar maior credibilidade às novas mudanças planejadas por Chambers.\n[…]\nAntes da elaboração das Regras do Marquês de Queensberry, o boxe era praticado sob as Regras de London Prize, quando os lutadores se enfrentavam sem o uso de luvas, em um combate com um número indefinido de assaltos.\n[…]\nConsiderada uma prática ilegal, em muitas localidades da Inglaterra, e também em outros países, não era raro acontecer de uma luta de boxe acabar sendo interrompida por uma batida policial. Devido à brutalidade dos combates, o boxe não era bem-aceito como uma prática esportiva.\n[…]\nDesta forma, em 1865, John Graham Chambers, um esportista e grande entusiasta do boxe, elaborou as Regras do Marquês de Queensberry, mais tarde publicadas em 1867. Rejeitadas pelos lutadores de boxe inicialmente, as Regras de Queensberry aos poucos foram sendo introduzidas nos combates, até se solidificarem por volta de 1885 a 1891, pondo um fim de vez às lutas sob as regras de London Prize.\n[…]\nOs pugilistas deverão usar luvas de boxe, novas e de boa qualidade.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Ringue de boxe",
      "descricao": "Espaço quadrado cercado por cordas onde se disputam as lutas de boxe."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Por que o espaço quadrado das lutas de boxe se chama ringue, palavra inglesa para anel?",
    "resposta": "As lutas antigas eram num círculo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Boxing_ring"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Boxing_ring",
        "situacao": "ok",
        "texto": "A boxing ring, often referred to simply as a ring or the squared circle, is the space in which a boxing match occurs. A modern ring consists of a square raised platform with a post at each corner. Four ropes are attached to the posts and pulled parallel under tension with turnbuckles to form the boundary of the competition area.\n[…]\nAs there are a number of professional boxing organizations, the standards of construction vary. A standard ring is between 16 and 24 feet (4.9 and 7.3 m) to a side between the ropes with another 2 feet (0.61 m) outside. The platform of the ring is generally 3 to 4 feet (0.91 to 1.22 m) from the ground and is covered by about 1 inch (25 mm) of padding topped by stretched canvas.\n[…]\nConstruction of the ring environment extends to maximization of lighting in the ring, minimization of heat of the lighting, and a complete as possible cut-off of illumination at the ringside.\n[…]\nConstruction differs from the similar wrestling ring. A wrestling ring sports only three ropes (which may be sheathed steel cable) and is constructed to provide a more flexible mat surface than a boxing ring.\n[…]\nFor these and other reasons, the boxing ring is commonly referred to as the \"squared circle\". The term \"ringside seat\" dates as far back as the 1860s.\n[…]\nBoxing rules also define situations in which a boxer leaves the ring during a bout. Under the Unified Rules of Boxing used by the Association of Boxing Commissions, a boxer who is knocked out of the ring receives a 20-second count and must return to the ring without assistance; assistance may result in a point deduction or disqualification at the referee's discretion.\n[…]\nSome promotions hold fights in other types of rings, like a four-rope circular ring (BKFC) or a triangular one (BYB Extreme Fighting Series).\n[…]\nRing girl\n[…]\n\"Equipment–Ring\". AIBA. Retrieved January 10, 2013."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ringue",
        "situacao": "ok",
        "texto": "Um ringue é um tablado elevado a cerca de 1 metro do solo e cercado por cordas que delimitam os seus respectivos lados. É, portanto o local onde decorrem lutas desportivas como o boxe, Muay Thai, Kickboxing, Jiu-jitsu, Luta greco-romana, Luta livre entre outras modalidades de combate.\n[…]\nO ringue moderno é definido por uma plataforma elevada, um quadrado com um poste em cada canto em que quatro fileiras paralelas de cordas se conectam com um tensor. Ao contrário do ringue de Wrestling, o de boxe possui as cordas cerca de 91 centímetros para o interior, ou seja, o pavimento deve ter uma extensão mínima de 91 centímetros além das cordas. Os postes que se encontram nos cantos do ringue apresentam um diâmetro de 10 a 12,70 centímetros e devem estar sempre almofadados.\n[…]\nUm ringue de boxe tem sempre 4 cantos. Já no de luta livre, é utilizado um rigue em forma de um hexágono, ou seja, um anel de 6 lados e 6 cantos. No mundo do MMA, o ringue foi usado pelos eventos Pride FC, DREAM, Pancrase e Shooto.\n[…]\nO termo ring (\"ringue\") vem da época em que as lutas eram realizadas em um círculo desenhado de forma rudimentar no chão. Esse nome foi mantido nos Regulamentos do Ringue de Londres de 1743, que especificavam um pequeno círculo no centro da área de luta, onde os boxeadores ficavam no início de cada round.24 pés (7,3 m)  O primeiro ringue quadrado foi introduzido pela Sociedade Pugilística em 1838. Esse ringue media 7,3 metros quadrados e era cercado por duas cordas.\n[…]\nPor esses e outros motivos, o ringue de boxe é comumente conhecido como \"círculo quadrado\". O termo \"assento à beira do ringue\" data da década de 1860.\n[…]\nCage é como é chamado o ringue usado em eventos de artes marciais mistas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Sumô",
      "descricao": "Luta tradicional japonesa em que se tenta tirar o adversário do círculo."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Antes de cada combate de sumô, por que os lutadores atiram sal sobre a arena?",
    "resposta": "Para purificá-la",
    "fonte": [
      "https://en.wikipedia.org/wiki/Sumo"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sumo",
        "situacao": "ok",
        "texto": "Sumo (Japanese: 相撲, Hepburn: sumō; pronounced [sɯmoː], lit. 'striking one another') is a form of competitive full-contact wrestling where a rikishi (wrestler) attempts to force his opponent out of a dohyō (circular ring) or into touching the ground with any body part other than the soles of his feet (usually by throwing, shoving or pushing him down).\n[…]\nSumo originated in Japan, the only country where it is practised professionally and where it is considered the national sport. It is considered a gendai budō, which refers to modern Japanese martial arts, but the sport has a history spanning many centuries. Many ancient traditions have been preserved in sumo, and even today the sport includes many ritual elements, such as the use of salt purification, from Shinto.\n[…]\nWith the collapse of the Emperor's central authority, sumo lost its importance in the court; during the Kamakura period, sumo was repurposed from a ceremonial struggle to a form of military combat training among samurai. By the Muromachi period, sumo had fully left the seclusion of the court and became a popular event for the masses, and among the daimyō it became common to sponsor wrestlers. Sumotori who successfully fought for a daimyō's favor were given generous support and samurai status.\n[…]\nSumo was a feature of the World Games, an Olympics-recognized event for non-Olympic sports, from 2001 until 2022; it was removed from future World Games programs due to poor sportsmanship and organization. It has additionally been a feature of the World Combat Games since their inception in 2010.\n[…]\nList of years in sumo\n[…]\nNaki Sumo Crying Baby Festival\n[…]\nRobot-sumo, robot competition inspired by sumo\n[…]\nSumo jinku\n[…]\nNihon Sumo Kyokai Official Grand Sumo Home Page\n[…]\nLive-Stream and Video-on-Demand from Grand Sumo Tournament on NHK Japan (english)\n[…]\nSumo FAQ\n[…]\nSearchable Sumo Database\n[…]\nSumo News and Analysis"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sum%C3%B4",
        "situacao": "ok",
        "texto": "Sumô (português brasileiro) ou Sumo (português europeu) sumō (相撲) é um desporto de luta competitiva de contato no qual um rikishi (lutador) tenta forçar outro lutador para fora de um ringue circular (dohyō) ou tocar o solo com qualquer parte do corpo que não as solas dos pés. O esporte originou-se no Japão, o único país no qual ele é praticado profissionalmente. Qualquer competição realizada fora \n[…]\nMuitas tradições antigas foram preservadas no sumô e mesmo hoje o esporte inclui muitos rituais, como o uso da purificação pelo sal, da época quando o sumô era usado na religião xintoísta. A vida de um lutador é altamente rígida, com regras definidas pela Associação do Sumô.\n[…]\nMetade dos últimos seis lutadores promovidos a ōzeki foram estrangeiros, sendo que não há um yokozuna japonês desde 2003. Isto e outras questões posteriormente levaram a Associação de Sumô a limitar o número de estrangeiros permitidos em cada centro de treinamento para somente um em cada.\n[…]\nCada dia é estruturado de modo que os combatentes de nível mais alto compitam no fim do dia. Assim, as lutas começam de manhã com os lutadores jonokuchi e terminam às seis horas da tarde com lutas envolvendo o yokozuna. O lutador que vence a maioria das lutas nos quinze dias vence o campeonato (yūshō) da divisão. Se dois lutadores empatam no topo, eles lutam entre si e o vencedor leva o título. Empates com três lutadores são raros, pelo menos na primeira divisão.\n[…]\nAs lutas de cada dia do torneio são anunciados com um dia de antecedência. Elas são determinadas pelos ex-lutadores de sumô que são membros da divisão de julgamento da Associação de Sumô. Como há muito mais lutadores em cada divisão do que lutas durante o torneio, cada lutador compete apenas contra uma seleção de oponentes da mesma divisão, embora possa haver uma pequena intersecção entre duas divisões.\n[…]\nGlossário de termos de sumô\n[…]\n«Sumo Reference» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Muhammad Ali",
      "descricao": "Boxeador americano, campeão mundial dos pesos-pesados."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Aos doze anos, em Louisville, o futuro Muhammad Ali foi parar numa academia de boxe depois de que incidente?",
    "resposta": "O roubo de sua bicicleta",
    "fonte": [
      "https://en.wikipedia.org/wiki/Muhammad_Ali"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Muhammad_Ali",
        "situacao": "ok",
        "texto": "Muhammad Ali ( ah-LEE; born Cassius Marcellus Clay Jr.; January 17, 1942 – June 3, 2016) was an American professional boxer and activist. A global cultural icon, widely known by the nickname \"the Greatest\", he is often regarded as the greatest heavyweight boxer of all time. He held the Ring magazine heavyweight title from 1964 to 1970, was the undisputed champion from 1974 to 1978, and was the WBA\n[…]\nCassius Marcellus Clay Jr. () was born on January 17, 1942, in Louisville, Kentucky, to Odessa Grady Clay and Cassius Marcellus Clay Sr. Clay Sr. was named after the 19th-century Republican politician and abolitionist Cassius Marcellus Clay. He was a descendant of slaves of the antebellum South, and was predominantly of African descent, with Irish and English heritage.\n[…]\nHis father was a sign and billboard painter, and his mother a domestic helper. Although Cassius Sr. was a Methodist, he allowed Odessa to bring up both Muhammad and his younger brother Rudolph (later renamed Rahaman Ali), as Baptists. Ali attended Central High School in Louisville and was dyslexic, which led to difficulties in reading and writing.\n[…]\nSoon after the Liston fight, Clay changed his name to Cassius X, and then later to Muhammad Ali upon converting to the Nation of Islam.\n[…]\nThen-Louisville mayor Greg Fischer stated, \"Muhammad Ali belongs to the world. But he only has one hometown.\"\n[…]\nIn January 2026, the U.S. Postal Service announced it would release a Muhammad Ali Forever stamp, featuring a 1974 photograph. The first-day-of-issue ceremony took place on January 15, 2026, in Louisville, Kentucky. A total of 22 million stamps will be printed for public use and collectors.\n[…]\nMuhammad Ali at IMDb\n[…]\nCassius Clay Guilty (1967), Texas Archive of the Moving Image\n[…]\nMuhammad Ali at Olympics.com\n[…]\nMuhammad Ali at Olympedia\n[…]\n\"Cassius Clay: Before He Was Ali\". Life. Archived from the original on October 21, 2009."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Muhammad_Ali",
        "situacao": "ok",
        "texto": "Muhammad Ali-Haj, nascido Cassius Marcellus Clay Jr. (Louisville, 17 de janeiro de 1942 – Scottsdale, 3 de junho de 2016), foi um desportista pugilista estadunidense. É considerado um dos melhores da história do esporte, eleito \"O Desportista do Século\" pela revista estadunidense Sports Illustrated em 1999.\n[…]\nCassius Marcellus Clay, Jr., nasceu em 17 de janeiro de 1942 em Louisville, Kentucky, Estados Unidos. O mais velho de dois irmãos, tinha o mesmo nome do pai, Cassius Marcellus Clay, Sr., que fora nomeado em homenagem ao político abolicionista homônimo e era pintor de outdoors. Sua mãe, Odessa O'Grady Clay, era empregada doméstica. Cassius Sr. era metodista, mas aceitou que Odessa convertesse Cassius Jr. e seu irmão Rudolph \"Rudy\" Clay (depois renomeado Rahman Ali) à Igreja Batista.\n[…]\nClay teve seu primeiro contato com o boxe por intermédio do chefe de polícia e técnico de boxe Joe E. Martin, em Louisville, que o encontrou com 12 anos batendo em um ladrão que estava roubando sua bicicleta. Disse ao oficial que estava fazendo \"whup\" no ladrão. O oficial lhe disse para aprender boxe. Nos seus últimos quatro anos de carreira amadora, Clay tinha treinado com Chuck Bodak.\n[…]\nUm evento público, com a presença de cerca de 20 mil pessoas foi realizado à tarde, no centro de Louisville.\n[…]\nFlip Schulke; Matt Schudel (2000). Muhammad Ali: The Birth of a Legend, Miami, 1961–1964. [S.l.]: St. Martin's Press. ISBN 978-0-312-20340-5\n[…]\nMorre Muhammad Ali aos 74 anos\n[…]\nMuhammad Ali no IMDb\n[…]\nBarrow Neurological Institute: Muhammad Ali Parkinson Center\n[…]\nWLRN: Muhammad Ali: Made in Miami\n[…]\nRevista Life: Cassius Clay: antes de ser Ali (ensaio fotográfico)\n[…]\nServiços Genealógicos de William Addams Reitwiesner: Ancestrais de Muhammad Ali\n[…]\nUOL Carros. Muhammad Ali esteve no Brasil e negociou Puma e Miura em 1987",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Holyfield contra Tyson II",
      "descricao": "Revanche pelo título dos pesos-pesados entre Evander Holyfield e Mike Tyson, em Las Vegas, em 1997."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1997, por que Mike Tyson foi desclassificado na revanche contra Evander Holyfield?",
    "resposta": "Mordeu as orelhas do adversário",
    "fonte": [
      "https://en.wikipedia.org/wiki/Evander_Holyfield_vs._Mike_Tyson_II"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Evander_Holyfield_vs._Mike_Tyson_II",
        "situacao": "ok",
        "texto": "Evander Holyfield vs. Mike Tyson II, billed as The Sound and the Fury and afterwards infamously referred to as The Bite Fight, was a professional boxing match contested between the champion Evander Holyfield and the challenger Mike Tyson on June 28, 1997, for the WBA World Heavyweight Championship. It achieved notoriety as one of the most bizarre fights in boxing history after Tyson bit off a part\n[…]\nHolyfield leapt into the air in pain and spun in a circle, bleeding profusely from the bite wound. Lane stopped the action, but Tyson managed to rush Holyfield from behind and shove him into his corner. Lane separated the men, moved Tyson to a neutral corner, and went back to check on an enraged Holyfield. The fight would be delayed for the next few minutes as Lane decided on what to do.\n[…]\nOnce Homansky cleared Holyfield to continue the fight, Lane decided to allow the bout to continue, but not before penalizing Tyson with a two-point deduction for the bite, as per rules regarding any intentional foul causing an injury. As Lane explained the decision to Tyson and his cornermen, Tyson asserted that the injury to Holyfield's ear was the result of a punch. \"Bullshit,\" Lane retorted.\n[…]\nTwenty-five minutes after the brawl ended, announcer Jimmy Lennon Jr. read the decision: \"Ladies and gentlemen, this bout has been stopped at the end of round number three. The referee in charge, Mills Lane, disqualifies Mike Tyson for biting Evander Holyfield in both ears, the winner by way of disqualification and still the WBA Heavyweight Champion of the World, Evander 'the Real Deal' Holyfield!\" As a result, Holyfield remained the WBA World Heavyweight Champion.\n[…]\nThe fight was featured as part of the series 30 for 30 episode, \"Chasing Tyson.\"\n[…]\nGeorge Willis, The Bite Fight: Tyson, Holyfield, and the Night that Changed Boxing Forever, (Chicago: Triumph Books), 2013. ISBN 978-1-60078-790-4"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Hélio Gracie",
      "descricao": "Lutador brasileiro, um dos criadores do jiu-jítsu brasileiro."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Segundo a história da família, por que Hélio Gracie adaptou o jiu-jítsu para depender mais de alavancas que de força?",
    "resposta": "Era franzino e fisicamente frágil",
    "fonte": [
      "https://en.wikipedia.org/wiki/H%C3%A9lio_Gracie",
      "https://pt.wikipedia.org/wiki/H%C3%A9lio_Gracie"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/H%C3%A9lio_Gracie",
        "situacao": "ok",
        "texto": "Hélio Gracie (October 1, 1913 – January 29, 2009) was a Brazilian martial artist who together with his brothers Oswaldo, Gastao Jr, George and Carlos Gracie founded and developed the self-defense martial art system of Gracie jiu-jitsu, also known as Brazilian jiu-jitsu (BJJ).\n[…]\nOswaldo Fadda represents a non-Gracie line of Brazilian jiu-jitsu. He was trained by Luiz França who was a student of Mitsuyo Maeda around the same time as Carlos and Hélio Gracie. Fadda was known for training the poor in Rio de Janeiro, and for the use of leg locks, which the Gracies considered low class. He trained a number of students and challenged Gracie's academy in 1953. Fadda's academy won the majority of the matches.\n[…]\nA dispute between Gracie's brother Carlos and Manoel Rufino dos Santos worsened after Dos Santos won a public bout against Carlos in August 1932. Subsequently, the conflict then moved to the newspapers, where Rufino criticized Carlos's skill and dismissed his jiu-jitsu credentials, leading Carlos, George and Hélio Gracie to assault him in front of his teaching place at the Tijuca Tênis Clube on October 18.\n[…]\nGracie's son, Rorion Gracie, was among the first Gracie family members to bring Gracie Jiu-Jitsu to the US. Royce Gracie, Rorion's younger brother, went on to become the first UFC champion in the organization's history; Helio coached Royce from outside the cage at UFC 1 and UFC 2.\n[…]\nIn his late years, Gracie was quoted as saying: \"I never loved any woman because love is a weakness, and I don't have weaknesses.\"\n[…]\nList of Brazilian jiu-jitsu practitioners\n[…]\nAcademia Gracie de Jiu Jitsu\n[…]\nGastão and Hélio Gracie talk about Gracie Jiu-Jitsu – interviewed in 1997 for Gracie Jiu-Jitsu Videos\n[…]\nInterview with Helio Gracie from Brazilian Playboy February 2001[link removed]"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/H%C3%A9lio_Gracie",
        "situacao": "ok",
        "texto": "Hélio Gracie (Belém do Pará, 1 de outubro de 1913 – Petrópolis, 29 de janeiro de 2009) foi o patriarca da família Gracie. Foi responsável pela difusão do Jiu-Jitsu no Brasil e idealizador do estilo de arte marcial brasileira conhecido como Jiu-jitsu brasileiro. Hélio Gracie foi grão-mestre em jiu-jitsu brasileiro, faixa vermelha 10º grau.\n[…]\nUtilizando essas adaptações técnicas, praticantes fisicamente menores ou com menor força passaram a dispor de recursos que lhes permitiam defender-se com maior eficiência e, em determinadas circunstâncias, superar adversários fisicamente mais fortes.Carlos e Hélio Gracie desempenharam papel fundamental no desenvolvimento e na difusão dessa abordagem do jiu-jítsu, introduzindo métodos e conceitos que contribuíram para sua consolidação no Brasil e para sua posterior projeção internacional.\n[…]\nHélio puxou para a guarda e neutralizou as investidas do adversário durante todo o combate, que terminou sem vencedor. Embora vaiada pelo público acostumado a lutas coreografadas, a performance de Hélio foi significativa, demonstrando a eficácia do jiu-jitsu contra um oponente muito mais experiente e fisicamente superior.\n[…]\nGracie perdeu a luta ao ser desqualificado por usar uma técnica proibida. Gracie também enfrentou Erwin Klausner em 1937. Klausner era principalmente um boxeador (embora também conhecido como lutador de luta livre), mas a luta foi disputada sob as regras usuais do jiu-jitsu. Gracie venceu por chave de braço no segundo round.\n[…]\nO filho de Gracie, Rorion Gracie, esteve entre os primeiros membros da família Gracie a trazer o Jiu-Jitsu Gracie para os Estados Unidos. Royce Gracie, irmão mais novo de Rorion, tornou-se o primeiro campeão do UFC na história da organização; Hélio orientou Royce de fora do cage no UFC 1 e UFC 2."
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Judogi azul",
      "descricao": "Quimono azul adotado em competições de judô para que um dos lutadores use azul e o outro branco."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Por que as competições de judô passaram a vestir um lutador de quimono azul e o outro de branco?",
    "resposta": "Para distinguir os dois lutadores",
    "fonte": [
      "https://en.wikipedia.org/wiki/Judogi"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Judogi",
        "situacao": "ok",
        "texto": "Judogi (柔道着 or 柔道衣), also called keikogi or dogi, is the formal Japanese name for the traditional uniform used for Judo practice and competition.\n[…]\nIn competition, judogi sizes and fit are strictly defined by the IJF rules of judo (see below). These rules define sleeve and pant length as well as the looseness of the fit; in competition, the referee can disqualify a competitor for wearing an ill-fitting judogi that may be used for advantage. In addition, various organizations and events oversee such matters as the attachment of commercial and team/national patches and competitors' names.\n[…]\nIn official national or international competition only white or blue judogi are allowed. Competitors must have available both colors because one contestant in each match is designated to wear a blue gi while the other wears a white gi. Most judo classes will permit students to wear either color, although white is the traditional color that is often preferred and white fits in better with the traditions of judo and Japanese culture.\n[…]\nFor IJF competitions judoka had to wear a Judogi with a blue label from January 1, 2011 to March 2015.\n[…]\nThis blocked the opponent from gripping there, which in 2005 caused the International Judo Federation to ban the use of a judogi with back seam area wider than 3 cm (a little more than one inch) in international competition. Wider designs could still be permitted in local competitions depending on national rules. Single-weave jackets usually have no back seam, or a narrow one which only joins two fabric sections without interfering with grips.\n[…]\nIJF Judogi Official suppliers\n[…]\nOther Judo Gi Supplier\n[…]\nSingle Weave Judo Gi"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Judogi",
        "situacao": "ok",
        "texto": "O judogi (柔道 着 ou 柔道 衣; \"uniforme de prática do caminho suave\", variação de dōgi', 道着) é termo japonês do uniforme tradicional e exclusivo usado no treino/prática e competição de judô, com algumas semelhanças com o uniforme karate-gi (空手着 ou 空手衣; derivação do japonês keikogi), pois compartilha uma origem comum.\n[…]\nO educador japonês Jigoro Kano constituiu a principal vestimenta de prática do judô, por volta do século XX derivou este uniforme do kimono (着: \"roupa\") e outras peças de vestuário japonesas, como tal, o judogi foi o primeiro uniforme moderno de treinamento de artes marciais.\n[…]\nAo longo dos anos, as mangas e calças foram alongadas, o material e o ajuste mudaram, o tradicional algodão cru agora é um branco branqueado e o judogi na cor azul tornou-se disponível; no entanto, o uniforme ainda está semelhante ao usado há 100 anos. Outras artes marciais, notadamente o karatê, adotaram mais tarde o estilo de uniforme de treinamento que é usado no judô.\n[…]\nO judogi é confeccionado normalmente em algodão com tecido trançado, sendo formado por três partes: o casaco chamado wagi, a calça chamada de shitabaki/zubon e, a faixa de graduação chamada obi.\n[…]\n«Federação Internacional de Judô» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Luta da Longa Contagem",
      "descricao": "Revanche de 1927 entre Gene Tunney e Jack Dempsey pelo título dos pesos-pesados, em Chicago."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Na revanche de 1927 entre Gene Tunney e Jack Dempsey, por que o juiz demorou a contar quando Tunney caiu?",
    "resposta": "Dempsey não foi ao canto neutro",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Long_Count_Fight"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Long_Count_Fight",
        "situacao": "ok",
        "texto": "Gene Tunney vs. Jack Dempsey II, retroactively known as Long Count Fight, or the Battle of the Long Count, was a professional boxing match contested on September 22, 1927, for the undisputed heavyweight championship.\n[…]\nIt was a 10-round rematch between world heavyweight champion Tunney and former champion Dempsey, which Tunney won in a unanimous decision. The fight took place at Soldier Field in Chicago. \"Long Count\" is applied to the fight because, when Tunney was knocked down in the seventh round, the count was delayed due to Dempsey's failure to go to and remain in a neutral corner. Whether this \"long count\" actually affected the outcome remains a subject of debate.\n[…]\nTo this day, however, boxing fans argue over whether Dempsey could or should have won the fight. What is not in dispute is that the public's affection for Dempsey grew in the wake of his two losses to Tunney. \"In defeat, he gained more stature,\" wrote the Washington Post's Shirley Povich. \"He was the loser in the battle of the long count, yet the hero.\"\n[…]\nTunney said that he had picked up the referee's count at \"two,\" and could have gotten up at any point after that, preferring to wait until \"nine\" for obvious tactical reasons. Dempsey said, \"I have no reason not to believe him. Gene's a great guy.\"\n[…]\nDempsey later joined the United States Coast Guard, and he and Tunney became good friends who visited each other frequently. Tunney and Dempsey are both members of the International Boxing Hall of Fame. In March 2011, the family of Gene Tunney donated the gloves he wore in the fight to The Smithsonian's National Museum of American History."
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "UFC 1",
      "descricao": "Primeiro evento do Ultimate Fighting Championship, realizado em Denver em novembro de 1993."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "O primeiro evento do UFC, em 1993, foi organizado para tirar que dúvida entre praticantes de lutas?",
    "resposta": "Qual arte marcial era a mais eficaz",
    "fonte": [
      "https://en.wikipedia.org/wiki/UFC_1"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/UFC_1",
        "situacao": "ok",
        "texto": "The Ultimate Fighting Championship (later renamed UFC 1: The Beginning) was the first mixed martial arts event by the Ultimate Fighting Championship (UFC), held at the McNichols Sports Arena in Denver, Colorado, United States, on November 12, 1993. The event was broadcast live on pay-per-view and later released on home video.\n[…]\nUnlimited five-minute rounds with one-minute rest period in between. (Changed to no time limits for UFC 2 since no UFC 1 fight lasted five minutes.)\n[…]\nMcNichols Sports Arena in Denver, at an elevation above mean sea level of approximately one mile (1.6 km), had been chosen because Colorado had no athletic commission and thus no governing body from which they would need to get approval for bare-knuckle fighting. The arena had hosted only two fight cards in its history, both of minor significance, occurring earlier in 1993.\n[…]\nThe tournament featured fights with no weight classes, rounds, or judges. The three rules – no biting, no eye gouging, and no groin shots – were to be enforced only by a $1,500 fine. The match only ended by submission, knockout, or the fighter's corner throwing in the towel, although the referee stopped the first fight at 26 seconds. Gloves were allowed, as Art Jimmerson showed in his quarterfinal bout against Royce Gracie, which he fought with one boxing glove.\n[…]\nRoyce Gracie won the tournament by defeating Gerard Gordeau via submission due to a rear naked choke. The referees for UFC 1 were João Alberto Barreto and Hélio Vigio, two veteran vale tudo referees from Brazil.\n[…]\n1993 in UFC\n[…]\nUFC 1 results at Sherdog.com\n[…]\nUFC 1 fights reviews\n[…]\nMMA Mental History UFC 1\n[…]\nMMA Origins: UFC 1 Archived 2017-02-18 at the Wayback Machine\n[…]\nThe Brutal Beginnings of the UFC Archived 2014-03-16 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/UFC_1",
        "situacao": "ok",
        "texto": "The Ultimate Fighting Championship (mais tarde renomeado UFC 1: The Beginning) foi o primeiro evento de artes marciais mistas promovido pelo Ultimate Fighting Championship, ocorrido em 12 de novembro de 1993 no McNichols Sports Arena em Denver, Colorado. O evento foi transmitido ao vivo em pay-per-view e mais tarde lançado em VHS.\n[…]\nEmbora o evento fosse o mais baixo para os padrões contemporâneos (o local estava menos do que meio lotado, o grande prêmio do torneio era tão grande quanto o salário bianual de um sparring regular, os principais observadores de artes marciais e colunistas não se preocuparam em aparecer, a imprensa em geral negligenciou o evento, lutadores de renome recusaram as ofertas para participar ou fazer uma aparição especial na plateia), foi o pioneiro nos confrontos interestilísticos entre os praticantes de diferentes artes marciais, e definir o padrão para os futuros eventos esportivos do gênero.\n[…]\nO UFC 1 foi co-criado por Rorion Gracie e o promotor, Art Davie, que decidiu levar as famosas lutas Gracie Garage Challenge contra os artistas marciais da Califórnia a um novo nível, televisionado nacionalmente, com os oponentes escolhidos internacionalmente.\n[…]\nRoyce Gracie venceu o torneio ao derrotar Gerard Gordeau por finalização com um mata-leão. Os árbitros do UFC 1 foram João Alberto Barreto e Hélio Vigio, dois veteranos árbitros de vale tudo do Brasil.\n[…]\nO evento e seu resultado catapultaram o Gracie Jiu-Jitsu (também conhecido como jiu-jitsu brasileiro) a novos patamares nos Estados Unidos e no mundo. Suas compras de ingresso e pay-per-view garantiram que haveria mais UFCs em um futuro próximo, o que provou ser o caso. O evento vendeu quase 90.000 compras de pay-per-view ao vivo, além de atrair novos públicos por meio de locadoras de vídeo, como a Blockbuster.\n[…]\nPágina oficial do evento",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "UFC 1",
      "descricao": "Primeiro evento do Ultimate Fighting Championship, realizado em Denver em novembro de 1993."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Finalizando adversários bem mais pesados, que brasileiro foi o campeão do primeiro UFC, em 1993?",
    "resposta": "Royce Gracie",
    "fonte": [
      "https://en.wikipedia.org/wiki/UFC_1",
      "https://en.wikipedia.org/wiki/Royce_Gracie"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/UFC_1",
        "situacao": "ok",
        "texto": "The Ultimate Fighting Championship (later renamed UFC 1: The Beginning) was the first mixed martial arts event by the Ultimate Fighting Championship (UFC), held at the McNichols Sports Arena in Denver, Colorado, United States, on November 12, 1993. The event was broadcast live on pay-per-view and later released on home video.\n[…]\nUFC 1 was co-created by Rorion Gracie and the Torrance-based UFC promoter Art Davie, who decided to take locally famous Gracie Garage Challenge fights versus California's martial artists to a new level, televised nationally, with the opponents picked internationally.\n[…]\nThe tournament featured fights with no weight classes, rounds, or judges. The three rules – no biting, no eye gouging, and no groin shots – were to be enforced only by a $1,500 fine. The match only ended by submission, knockout, or the fighter's corner throwing in the towel, although the referee stopped the first fight at 26 seconds. Gloves were allowed, as Art Jimmerson showed in his quarterfinal bout against Royce Gracie, which he fought with one boxing glove.\n[…]\nRoyce Gracie won the tournament by defeating Gerard Gordeau via submission due to a rear naked choke. The referees for UFC 1 were João Alberto Barreto and Hélio Vigio, two veteran vale tudo referees from Brazil.\n[…]\nThe event and its outcome catapulted Gracie Jiu-Jitsu (also known as Brazilian jiu-jitsu) to new heights in the United States and worldwide. Its gate and pay-per-view buys ensured that there would be more UFCs in the near future, which proved to be the case. The event sold nearly 90,000 live pay-per-view buys, in addition to drawing new audiences through video rental stores such as Blockbuster Video.\n[…]\nFight of the Night: Royce Gracie vs. Ken Shamrock\n[…]\nSubmission of the Night: Royce Gracie def. Gerard Gordeau\n[…]\nUFC 1 fights reviews\n[…]\nMMA Mental History UFC 1"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Royce_Gracie",
        "situacao": "ok",
        "texto": "Royce Gracie (Portuguese: [ˈʁɔjsi ˈɡɾejsi]; born 12 December 1966) is a Brazilian former professional mixed martial artist. Gracie gained fame for his success in the Ultimate Fighting Championship (UFC). He is a member of the Gracie jiu-jitsu family, a UFC Hall of Famer, and is considered to be one of the most influential figures in the history of mixed martial arts (MMA). He also competed in PRID\n[…]\nIn K-1, Royce Gracie competed on K-1's Dynamite!! series, which featured both kickboxing and MMA matches on their cards. On December 31, 2004, Gracie entered the K-1 scene at the K-1 PREMIUM 2004 Dynamite!! event inside the Osaka Dome, facing off against former sumo wrestler and MMA newcomer Akebono Tarō aka. Chad Rowan under special MMA rules (Two 10-minute rounds; the match would end as a draw if there was no winner after the two rounds).\n[…]\nOn November 15, 2013, at UFC 167 on the 20th Anniversary of the UFC, Royce Gracie confirmed to MMA journalist Ariel Helwani that he had retired from competing in mixed martial arts.\n[…]\nDespite being a 7th degree coral belt, Gracie wears a dark blue belt when training in Brazilian jiu-jitsu paying homage to his father, Hélio Gracie, who primarily wore a dark blue belt despite having the highest possible rank, red belt. Hélio Gracie died in 2009, and Royce said he does not want to be promoted by anybody else.\n[…]\nOn April 1, 2015, the IRS sent Royce Gracie and his wife a Notice of Deficiency claiming they owe $657,114 in back taxes and $492,835.25 in penalties for Civil Fraud, based on IRC 6663(a). The case was settled on March 31, 2023, and Royce Gracie agreed to pay $461,611.80 to the US government.\n[…]\nKano Jigoro → Tomita Tsunejiro → Mitsuyo Maeda  → Carlos Gracie  → Hélio Gracie  → Royce Gracie\n[…]\nFighter of the Year (1993)\n[…]\nRodrigo Gracie\n[…]\nRoyce Gracie at IMDb\n[…]\nProfessional MMA record for Royce Gracie from Sherdog\n[…]\nRoyce Gracie at UFC"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/UFC_1",
        "situacao": "ok",
        "texto": "The Ultimate Fighting Championship (mais tarde renomeado UFC 1: The Beginning) foi o primeiro evento de artes marciais mistas promovido pelo Ultimate Fighting Championship, ocorrido em 12 de novembro de 1993 no McNichols Sports Arena em Denver, Colorado. O evento foi transmitido ao vivo em pay-per-view e mais tarde lançado em VHS.\n[…]\nO UFC 1 foi co-criado por Rorion Gracie e o promotor, Art Davie, que decidiu levar as famosas lutas Gracie Garage Challenge contra os artistas marciais da Califórnia a um novo nível, televisionado nacionalmente, com os oponentes escolhidos internacionalmente.\n[…]\nO torneio contou com lutas sem categorias de peso, rounds ou juízes. As três regras - sem morder, sem golpes nos olhos e na virilha - seriam aplicadas apenas por uma multa de US$ 1.500. A luta só terminou por finalização, nocaute ou desistência jogando a toalha, embora o árbitro tenha parado a primeira luta aos 26 segundos. Luvas foram permitidas, como Art Jimmerson mostrou em sua luta nas quartas de final contra Royce Gracie, que lutou com uma luva de boxe.\n[…]\nRoyce Gracie venceu o torneio ao derrotar Gerard Gordeau por finalização com um mata-leão. Os árbitros do UFC 1 foram João Alberto Barreto e Hélio Vigio, dois veteranos árbitros de vale tudo do Brasil.\n[…]\nO evento e seu resultado catapultaram o Gracie Jiu-Jitsu (também conhecido como jiu-jitsu brasileiro) a novos patamares nos Estados Unidos e no mundo. Suas compras de ingresso e pay-per-view garantiram que haveria mais UFCs em um futuro próximo, o que provou ser o caso. O evento vendeu quase 90.000 compras de pay-per-view ao vivo, além de atrair novos públicos por meio de locadoras de vídeo, como a Blockbuster.\n[…]\nLuta da Noite: Royce Gracie vs. Ken Shamrock\n[…]\nFinalização da Noite: Royce Gracie def. Gerard Gordeau",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Joe Louis contra Max Schmeling",
      "descricao": "Revanche de boxe de 1938, em Nova York, entre o americano Joe Louis e o alemão Max Schmeling."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Por que a revanche entre Joe Louis e Max Schmeling, em 1938, virou um símbolo político?",
    "resposta": "EUA contra Alemanha nazista",
    "distratores": [
      "Disputa por vaga olímpica",
      "Arrecadação para veteranos",
      "Pedido de paz europeu"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Joe_Louis_vs._Max_Schmeling"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Joe_Louis_vs._Max_Schmeling",
        "situacao": "ok",
        "texto": "Joe Louis vs. Max Schmeling was a professional boxing match contested on June 19, 1936.\n[…]\nAlthough the political aspect of the first Louis-Schmeling bout would later be dwarfed by the crucible of the later 1938 rematch, brewing political sentiment would inevitably attach itself to the fight. Adolf Hitler had become chancellor of Germany three years previously and, although the United States and Germany were not yet political or military enemies, there was some tension building among the two countries as the Nazi Party began asserting its supremacist ideologies.\n[…]\nThe two fights came to embody the broader political and social conflict of the time. As the most significant African American athlete of his age and the most successful black fighter since Jack Johnson, Louis was a focal point for African American interest in the 1930s. Moreover, as a contest between representatives of the United States and Nazi Germany during the 1930s, the fights came to symbolize the struggle between democracy and fascism.\n[…]\nThe rivalry between Louis and Schmeling gave rise to the Louis–Schmeling paradox, a concept in sports economics. It was first identified and named by Walter C. Neale, in his article \"The peculiar economics of professional sports\", published in the Quarterly Journal of Economics in February 1964. The paradox, as identified by Neale, is that the general rule that monopoly is the \"ideal market position of a firm\" does not hold for professional sports.\n[…]\nVideo of 1936 Louis-Schmeling Bout"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Rocky, um Lutador",
      "descricao": "Filme americano de 1976, escrito e estrelado por Sylvester Stallone, sobre o boxeador Rocky Balboa."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Sylvester Stallone escreveu o roteiro de Rocky inspirado por que luta de 1975 pelo título dos pesos-pesados?",
    "resposta": "Muhammad Ali contra Chuck Wepner",
    "fonte": [
      "https://en.wikipedia.org/wiki/Rocky",
      "https://en.wikipedia.org/wiki/Chuck_Wepner"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rocky",
        "situacao": "ok",
        "texto": "Rocky is a 1976 American sports drama film directed by John G. Avildsen and written by and starring Sylvester Stallone. It is the first installment in the Rocky film series and also stars Talia Shire, Burt Young, Carl Weathers, and Burgess Meredith. In the film, Rocky Balboa (Stallone), a poor small-time club fighter and loanshark debt collector from Philadelphia, gets an unlikely once in a lifeti\n[…]\nSylvester Stallone as Robert \"Rocky\" Balboa\n[…]\nSylvester Stallone wrote the screenplay for Rocky in three and a half days, shortly after watching the championship match between Muhammad Ali and Chuck Wepner that took place at Richfield Coliseum in Richfield, Ohio, on March 24, 1975. Wepner was TKO'd in the 15th round of the match by Ali, with few expecting him to last as long as he did. Despite the match motivating Stallone to begin work on Rocky, he has denied Wepner provided any inspiration for the script.\n[…]\nOther inspiration for the film may have included characteristics of real-life boxers Rocky Marciano and Joe Frazier, as well as Rocky Graziano's autobiography Somebody Up There Likes Me and the movie of the same name. Wepner sued Stallone, and eventually settled for an undisclosed amount.\n[…]\nEventually, they secured a meeting with Winkler-Chartoff productions (no relation to Henry Winkler). After repeated negotiations with Rumar and Kubik, Winkler-Chartoff agreed to a contract for Stallone to be the writer and also star in the lead role for Rocky. Stallone offered the script to Ralph Bakshi to direct, because he loved Bakshi's 1973 film Heavy Traffic, but Bakshi turned it down because he didn't want to leave animation, and John G. Avildsen signed on to direct instead.\n[…]\nIn July 2019, Stallone said in an interview that there have been ongoing discussions about a prequel to the original film based on the life of a young Rocky Balboa.\n[…]\nThe Making of Rocky by Sylvester Stallone"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Chuck_Wepner",
        "situacao": "ok",
        "texto": "Charles Wepner (born February 26, 1939) is an American former professional boxer. He fell just nineteen seconds short of a full fifteen rounds against world heavyweight champion Muhammad Ali in a 1975 championship fight. Wepner also scored notable wins over Randy Neumann and former world heavyweight champion Ernie Terrell. He was also the last man to fight former undisputed world heavyweight champ\n[…]\nWepner's boxing career, and fight with Ali, inspired the 1976 film Rocky, and other life events were chronicled in the 2016 film, Chuck. He was also the subject of the 2019 film The Brawler.\n[…]\nAfter the Ali-Wepner bout, Sylvester Stallone wrote the script for Rocky, which was released in theatres in 1976. Like Wepner, (Rocky) Balboa lasts 15 rounds, but unlike Wepner, he actually \"goes the distance\". For years after Rocky was released, Stallone denied that Wepner provided inspiration for the movie, though he eventually admitted it.\n[…]\nESPN aired a documentary titled The Real Rocky on October 25, 2011, The ESPN film features a clip of Wepner's ninth round knockdown of Muhammad Ali in their 1975 world heavyweight title bout. Michael Tollin, who was a producer on the ESPN documentary, would also be a producer of the first of the two films about Wepner's career, which was released in 2016.\n[…]\nSylvester Stallone's character Rocky Balboa and portions of the Rocky film series were inspired by the life of Chuck Wepner. For instance, it was speculated that a scene from the 1982 film Rocky III had been influenced by Wepner's fight against Andre the Giant, as the movie features a match versus wrestler Hulk Hogan as \"Thunderlips\", who throws Rocky out of the ring.\n[…]\nLiev Schreiber played Wepner in the 2016 sports film, Chuck.\n[…]\nBoxing record for Chuck Wepner from BoxRec (registration required)\n[…]\nChuck Wepner – The Real Rocky, by Peter Hossli, January 1, 2007.\n[…]\nChuck Wepner at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rocky",
        "situacao": "ok",
        "texto": "Rocky (bra: Rocky, um Lutador) é um filme americano de 1976 do gênero drama esportivo dirigido por John G. Avildsen, e escrito e estrelado por Sylvester Stallone. É o primeiro filme da franquia Rocky, sendo também estrelado por Talia Shire, Burt Young, Carl Weathers e Burgess Meredith.\n[…]\nSylvester Stallone escreveu o roteiro de Rocky em três dias e meio, logo após assistir à uma luta entre Muhammad Ali e Chuck Wepner que aconteceu no Richfield Coliseum em Richfield, Ohio, em 24 de março de 1975. Wepner foi nocauteado por Ali no 15º round da luta, com poucos esperando que ele durasse tanto quanto durou. Apesar da luta ter motivado Stallone a começar a trabalhar em Rocky ele negou que Wepner tenha fornecido qualquer inspiração para o roteiro.\n[…]\nO boxeador da vida real Ken Norton foi inicialmente procurado para o papel de Apollo Creed, mas ele desistiu e o papel foi finalmente dado a Carl Weathers. Norton, em quem Creed foi vagamente baseado, lutou contra Muhammad Ali três vezes. De acordo com o livro The Rocky Scrapbook, Carrie Snodgress foi originalmente escolhida para interpretar Adrian, mas sua reivindicação por um salário alto forçou os produtores a procurar outra atriz.\n[…]\nO boxeador Joe Frazier, da Filadélfia, tem uma aparição especial no filme. Muhammad Ali, que lutou contra Frazier três vezes, influenciou o personagem de Apollo Creed. Durante a 49ª cerimônia do Oscar em 1977, Ali e Stallone encenaram um breve confronto cômico para mostrar que o filme não ofendeu Ali.\n[…]\nO pôster visto acima do ringue antes da luta de Rocky contra Apollo Creed mostra Rocky vestindo shorts vermelhos com uma listra branca quando, na verdade, ele usa shorts brancos com uma listra vermelha. Quando Rocky reclama disso, o promotor George Jergens diz a ele: \"Isso não importa, não é?\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Masahiko Kimura",
      "descricao": "Judoca japonês dos anos 1950 que dá nome à chave de ombro conhecida como kimura."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "A chave de braço chamada kimura homenageia um judoca japonês que, em 1951, no Maracanã, derrotou que lutador brasileiro?",
    "resposta": "Hélio Gracie",
    "fonte": [
      "https://en.wikipedia.org/wiki/Masahiko_Kimura"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Masahiko_Kimura",
        "situacao": "ok",
        "texto": "Masahiko Kimura (木村 政彦, Kimura Masahiko; 10 September 1917 – 18 April 1993) was a Japanese judoka and professional wrestler. He won the All-Japan Judo Championships three times in a row for the first time in history and had never lost a judo match from 1936 to 1950. In submission grappling, the reverse ude-garami arm lock is often called the \"Kimura\", due to his famous victory over Gracie jiu-jits\n[…]\nKato was the first to accept the challenge, drawing with Hélio Gracie in their match at the Maracana stadium. However, he lost to Gracie by gi choke in the rematch at the Ibirapuera Park in São Paulo. Hélio proposed to continue with the challenge, and Yamaguchi appointed himself the next to fight. Kimura, however, volunteered to fight in his place.\n[…]\nAfter a number of holds by the Japanese, including kesa-gatame, sankaku-jime and do-jime, the Brazilian looked unable to breathe under Kimura, but he persevered until he tried to switch position by pushing with his arm. At that moment, Kimura seized the limb and executed gyaku-ude-garami. Hélio did not surrender, and Kimura rotated the arm until it broke. As Gracie still refused to give up, Masahiko twisted the arm further and broke it again.\n[…]\nKimura went to Brazil again in 1959 to conduct his last professional wrestling tour, and he was challenged by Waldemar Santana to a \"real\" (not choreographed) submission match. Santana, a champion in jiu-jitsu and capoeira managed by Carlson Gracie, was 27 years old, 6 feet tall, and weighed 205 lb, 40 lbs more than Masahiko, and had knocked out Hélio Gracie in a fight lasting more than three hours.\n[…]\nHélio Gracie recalls the famous challenge match against Kimura[link removed] - interviewed in 1994 by Nishi Yoshinori from Kakutou Striking Spirit\n[…]\nDo you know Masahiko Kimura? on YouTube - Long TV documentary of Japan\n[…]\nAikido and Judo – Interview with Gozo Shioda and Masahiko Kimura"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Masahiko_Kimura",
        "situacao": "ok",
        "texto": "Masahiko Kimura (Kumamoto, 10 de setembro de 1917 – Tóquio, 18 de abril de 1993) foi um judoca japonês.\n[…]\nKimura ficou famoso por vencer o criador do Jiu-Jitsu brasileiro — Hélio Gracie — com um golpe (reverse ude-garami) que mais tarde seria nomeado como kimura em sua homenagem.\n[…]\nKimura é considerado no Japão como o maior judoca de todos os tempos.\n[…]\nKimura morreu no dia 18 de Abril de 1993, aos 75 anos, vítima de um Câncer de pulmão. Conta-se que mesmo hospitalizado, pouco depois de uma cirurgia, Kimura foi encontrado exercitando-se, fazendo várias flexões.\n[…]\nHélio Gracie x Masahiko Kimura",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Jiu-jítsu brasileiro",
      "descricao": "Arte marcial de luta no chão desenvolvida no Brasil pela família Gracie."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Apesar do nome, o jiu-jítsu brasileiro deriva diretamente de que outra arte marcial japonesa, trazida ao país no começo do século vinte?",
    "resposta": "Judô",
    "fonte": [
      "https://en.wikipedia.org/wiki/Brazilian_jiu-jitsu"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Brazilian_jiu-jitsu",
        "situacao": "ok",
        "texto": "Brazilian jiu-jitsu (Portuguese: jiu-jitsu brasileiro [ʒiw ˈʒitsu bɾaziˈlejɾu, ʒu -]), commonly abbreviated as BJJ, is a self-defense system, martial art, and combat sport based on grappling, ground fighting, and submission holds. It is primarily a ground-based fighting style and involves taking one's opponent down to the ground, gaining a dominant position, and then using a number of techniques t\n[…]\nBrazilian jiu-jitsu was first developed by the Brazilian brothers Carlos, Oswaldo, Gastão Jr., and Hélio Gracie around 1925, after Carlos was taught judo in 1917 by either Mitsuyo Maeda, a travelling Japanese judoka, or one of Maeda's students Jacyntho Ferro. Later, the Gracie family developed their own self-defense system that they named Gracie jiu-jitsu.\n[…]\nIn Brazil, Maeda's demonstrations of \"Kano jiu-jitsu\"—a term then synonymous with judo—laid the groundwork for what would become Brazilian jiu-jitsu. In 1916, the American Circus in Belém, where Gastão Gracie was a business partner, hosted performances by the Queirolo Brothers, an Italian-Argentine circus troupe, who introduced Maeda to the audience.\n[…]\nIt was not until 1925 that the Japanese government itself officially mandated that the correct name for the martial art taught in the Japanese public schools should be \"judo\" rather than \"jujutsu\". In Brazil, the art is still called \"jiu-jitsu\". When the Gracies went to the United States and spread jiu-jitsu, they used the terms \"Gracie jiu-jitsu\", while non-Gracies used the term \"Brazilian jiu-jitsu\" to differentiate from the already present styles using similar-sounding names.\n[…]\nIn a 1994 interview with Yoshinori Nishi, Hélio Gracie said that he did not even know the word judo itself until the sport came in the 1950s to Brazil, because he heard that Mitsuyo Maeda called his style \"jiu-jitsu\".\n[…]\nBrazil portal\n[…]\n\"Wrestling Impact on Brazilian Jiu Jitsu\" by Patrick Cox (blog)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jiu-j%C3%ADtsu_brasileiro",
        "situacao": "ok",
        "texto": "Jiu-jítsu brasileiro (em japonês:  ブラジリアン柔術, Burajirian jūjutsu) ou BJJ (do inglês, Brazilian Jiu-Jitsu) é uma arte marcial brasileira e esporte de combate, desenvolvido pela família Gracie, no início do século XX, que se tornou a forma mais difundida e praticada do \"Jiu-jitsu\" (após o judô) no mundo, principalmente depois das primeiras edições dos torneios de Vale Tudo e artes marciais mistas (MM\n[…]\nSe não foram originais em adaptar uma arte marcial provecta, haja vista que no Japão isso já há muito ocorrera com o aiquidô e o próprio judô, oriundos do ju-jutsu, com o caratê, oriundo do te-jutsu de Okinawa, ou mesmo no resto do mundo como o krav maga (Israel) ou a capoeira regional (Brasil), Carlos Gracie e depois Hélio Gracie foram originais em criar um paradigma que prima pela efetividade.\n[…]\nMitsuyo Maeda, conhecido como \"Conde Koma\", foi um praticante notável de Judô, sendo aluno de Jigoro Kano, o fundador do Judô.\n[…]\nUm ano depois, conheceu Gastão Gracie. Gastão era pai de oito filhos, sendo cinco homens, tornou-se entusiasta do judô e levou seu filho Carlos Gracie para aprender a luta japonesa.\n[…]\nCarlos começou a praticar o judô (na época, ainda conhecido como \"Kano jiu-jitsu\"). Com dezenove anos de idade, transferiu-se para o Rio de Janeiro com a família, sendo professor dessa arte marcial e lutador. Viajou por outros estados brasileiros, ministrando aulas e vencendo adversários mais fortes fisicamente.\n[…]\nAo modificar as regras internacionais do judô e jiu-jítsu japonês nas lutas que ele e os irmãos realizavam, Carlos Gracie iniciou o primeiro caso de estilo, ou esporte, reconhecido na história de modalidades brasileiras exportadas para o mundo anos depois, a arte marcial passou a ser denominada de Gracie Jiu-jitsu e depois veio a surgir o Brazilian Jiu-jitsu, sendo exportada para o mundo todo, até mesmo para o Japão.\n[…]\nAtos Jiu-Jitsu\n[…]\nConfederação Brasileira de Jiu-Jitsu Esportivo",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Ip Man",
      "descricao": "Mestre chinês de artes marciais de Hong Kong, professor de Bruce Lee."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Que estilo de kung fu liga o mestre chinês Ip Man ao seu aluno mais famoso, Bruce Lee?",
    "resposta": "Wing Chun",
    "distratores": [
      "Tai chi chuan",
      "Garra de Águia",
      "Louva-a-deus"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Ip_Man",
      "https://en.wikipedia.org/wiki/Bruce_Lee"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ip_Man",
        "situacao": "ok",
        "texto": "Ip Man (born Ip Kai-man; 1 October 1893 – 2 December 1972), also known as Yip Man, was a Chinese martial arts grandmaster. He became a teacher of the martial art of Wing Chun when he was 20. He had several students who later became martial arts masters in their own right, the most famous among them being Bruce Lee.\n[…]\nIp began teaching Wing Chun in the early 1950s, to escape poverty and to allegedly feed his opium addiction. His earliest students\n[…]\nOne of his former students, Duncan Leung, claimed that Ip used tuition money to support his opium addiction. Ip's mistress died of cancer in 1968, and their son later became a Wing Chun practitioner, as did his half-brothers.\n[…]\nIp's notable students include Bruce Lee, Leung Sherng (梁相), Moy Yat, Chu Shong-tin, Lok Yiu (駱耀), Wong Shun-leung, Jiu Wan (招允), Ho Kam-ming, Victor Kan, Lo Man-kam, William Cheung, Ip Ching, Ip Chun and Leung Ting. Ip wrote a history of Wing Chun. Many artefacts of his life are on display in the Ip Man Museum on the Foshan Ancestral Temple grounds. Ip Man is portrayed in many films based on his life.\n[…]\nThe Wing Chun lineage according to Ip Man.\n[…]\nIn the 1976 film, Bruce Lee: The Man, The Myth, Ip Man's eldest son, Ip Chun, portrayed his father in a minor role as Bruce Lee's Wing Chun Sifu.\n[…]\nIn the 1999 film, What You Gonna Do, Sai Fung? (a.k.a. 1959 某日某), he was portrayed by his son, Ip Chun, again as a special appearance.\n[…]\nThe sequel, Ip Man 2, focused on Ip's beginnings in Hong Kong and his students, including Bruce Lee. Ip Man has taught many other people. Amid a surge of Ip Man–related film projects in production, Donnie Yen told the Chinese media in March 2010 that after Ip Man 2, he would no longer play the Wing Chun master, stating, \"I would never ever touch any films related to Ip Man. This will be my final film on the subject."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Bruce_Lee",
        "situacao": "ok",
        "texto": "Bruce Lee (born Lee Jun-fan; November 27, 1940 – July 20, 1973) was a Hong Kong and American martial artist, actor, and filmmaker. He was the founder of Jeet Kune Do, a hybrid martial arts philosophy, which was formed from his experiences in unarmed fighting and self-defense—as well as eclectic, Zen Buddhist, and Taoist philosophies—as a new school of martial arts thought.\n[…]\nIn 1953, Lee's friend William Cheung introduced him to Ip Man. According to Cheung, Lee's European background on his mother's side led him to be rejected, initially, from learning Wing Chun kung fu under Ip Man because of the long-standing rule in the Chinese martial arts world not to teach foreigners. Cheung spoke on his behalf and Lee was accepted into the school and began training in Wing Chun with Ip Man.\n[…]\nAfter a year of his training with Ip Man, most of the other students refused to train with Lee. They had learned of his mixed ancestry, and the Chinese were generally against teaching their martial arts techniques to non-Asians. Lee's sparring partner, Hawkins Cheung, states, \"Probably fewer than six people in the whole Wing Chun clan were personally taught, or even partly taught, by Ip Man\".\n[…]\nHowever, Lee showed a keen interest in Wing Chun and continued to train privately with Ip Man, William Cheung, and Wong Shun-leung.\n[…]\nIn 1959, Lee started to teach martial arts. He called what he taught Jun Fan Gung Fu (literally Bruce Lee's Kung Fu). It was his approach to Wing Chun. Lee taught friends he met in Seattle, starting with Judo practitioner Jesse Glover, who continued to teach some of Lee's early techniques. Lee's early student group was the most racially diverse group of practitioners of Chinese martial arts until that time. During this time period, Lee invented his one-inch punch.\n[…]\nThe Legend of Bruce Lee – Chinese television series\n[…]\nBruce Lee discography at Discogs"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Yip_Man",
        "situacao": "ok",
        "texto": "Yip Man, também conhecido como Ip Man, (Em chinês: 葉問; Foshan, na China da Dinastia Qing, 1 de outubro de 1893 - Hong Kong, 1 de dezembro de 1972) era um artista de artes marciais e professor mestre do estilo Wing Chun do Kung Fu. Ensinou a diversos alunos que futuramente se tornaram mestres notórios, sendo o mais famoso deles Bruce Lee.\n[…]\nNasceu em uma família abastada, cujo templo era dirigido pelo mestre Chan Wah-shun, \"Wah, o Trocador de Dinheiro\", do estilo Wing Chun (ou Ving Tsun ) de Kung Fu.\n[…]\nRefinado e sem grandes dotes físicos, teve muita dificuldade para arranjar emprego, e teve que dar aulas para poder sobreviver. Finalmente, foi convencido por um amigo a dar aulas de Kung Fu na Associação dos Trabalhadores em Restaurantes de Hong Kong. Com o passar do tempo, juntou um punhado de discípulos, com os quais fundou sua primeira academia desportiva. Seus alunos, entre eles o famoso Bruce Lee, enfrentaram muitos desafios que tornaram o Wing Chun famoso e muito procurado.\n[…]\nFaleceu em 2 de Dezembro de 1972, no número 149 da rua Tung Shoi, vitimado por um câncer na laringe devido ao hábito de fumar,apenas sete meses antes da morte de seu aluno mais famoso, Bruce Lee. Ele foi enterrado em Wo Hop Shek, em Hong Kong. O legado de Ip é a prática mundial de wing chun. Ip Chun, o filho mais velho de Ip Man, foi escolhido em 2014 como representante oficial do estilo.\n[…]\nEsta é a linhagem do wing chun, de acordo com Ip Manː\n[…]\nA história de Yip Man e, consequentemente, do Wing Chun, foi retratada na cronologia Ip Man, iniciada em 2008 e estrelada por Donnie Yen.\n[…]\nTORRES, José Augusto Maciel, Kung Fu: a milenar arte macial chinesa: águia, bêbado, louva-a-deus, tai chi chuan, tigre, wing chun. São Paulo, On Line, 2011.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Grill George Foreman",
      "descricao": "Grelha elétrica de dupla face lançada nos anos 1990 com o nome do boxeador George Foreman."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Depois de deixar os ringues, o campeão dos pesos-pesados George Foreman emprestou o nome a que eletrodoméstico de sucesso?",
    "resposta": "Uma grelha elétrica",
    "fonte": [
      "https://en.wikipedia.org/wiki/George_Foreman_Grill"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/George_Foreman_Grill",
        "situacao": "ok",
        "texto": "The George Foreman Lean Mean Fat-Reducing Grilling Machine, also commonly referred to as simply the George Foreman grill, is a portable double-sided electrically heated grill manufactured by Spectrum Brands. It was promoted by two-time world heavyweight boxing champion George Foreman. Since its introduction in 1994, over 100 million George Foreman grills have been sold worldwide.\n[…]\nThe worldwide popularity of the George Foreman grill has resulted in sales of over 100 million units since it was first launched, a feat that was achieved in a little over 15 years. Although Foreman never confirmed exactly how much he earned from the endorsement, Salton, Inc. paid him $138 million in 1999 in order to buy out the right to use his name.\n[…]\nThe success of the George Foreman Grill spawned a variety of similar celebrity-endorsed products, such as the Evander Holyfield Real Deal Grill, for which Holyfield starred in a 2007 infomercial, and the Carl Lewis Health Grill. None of these imitators, however, achieved the level of success of the Foreman Grill. The Jackie Chan Grill is the same grill as the George Foreman grill, but targets the Asian market, and has been marketed by both Chan and Foreman.\n[…]\nProfessional wrestler Hulk Hogan famously claimed that he was the first choice for the grill but missed out because he did not answer his phone. However, the story has been heavily debunked by the product's creators. Hogan said he was busy picking up his kids from school, and by the time he returned the call, his agent told him that because he was unavailable, the grill had already been given to George Foreman. Hogan told the story over the years, including on his reality show Hogan Knows Best."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/George_Foreman_Grill",
        "situacao": "ok",
        "texto": "George Foreman Grill é uma grelha portátil aquecida eletricamente de dupla face fabricada pela Spectrum Brands. É promovida pelo bicampeão mundial de boxe George Foreman. Desde sua introdução em 1994, mais de 100 milhões de unidades foram vendidas em todo o mundo.\n[…]\nUm vídeo foi exibido, mostrando gordura pingando da grelha para a bandeja de coleta. Eles apresentaram o produto como \"The Fajita Express\". A grelha foi promovida em feiras do setor no início da década de 1990, mas atraiu pouco interesse inicialmente. Em 1994, começou a ser promovida por George Foreman. Os comerciais se tornaram um sucesso, alavancando as vendas. Na Ásia, o produto foi endossado por Foreman e Jackie Chan.\n[…]\nA grelha atingiu mais de 100 milhões de unidades vendidas desde seu lançamento, um feito que foi alcançado em pouco mais de 15 anos. Embora Foreman nunca tenha confirmado exatamente quanto ganhou com os comerciais, a Salton, Inc. revelou ter pago a ele US$ 138 milhões em 1999 para utilizar seu nome. Antes disso, ele recebia cerca de 40% dos lucros de cada grelha vendida, o que lhe rendia US$ 4,5 milhões por mês no auge. Portanto, estima-se que tenha arrecadado um total de mais de US$ 200 milhões.\n[…]\nO sucesso da George Foreman Grill gerou uma variedade de produtos semelhantes apoiados por celebridade. Nenhum dos concorrentes, no entanto, afetou o predomínio da marca.\n[…]\nEste artigo foi inicialmente traduzido, total ou parcialmente, do artigo da Wikipédia em inglês cujo título é «George Foreman Grill».",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "George Foreman",
      "descricao": "Boxeador americano, campeão olímpico em 1968 e duas vezes campeão mundial dos pesos-pesados."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "O boxeador George Foreman deu o próprio nome, George, a quantos de seus filhos homens?",
    "resposta": "Cinco",
    "distratores": [
      "Dois",
      "Três",
      "Quatro"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/George_Foreman"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/George_Foreman",
        "situacao": "ok",
        "texto": "George Edward Foreman (January 10, 1949 – March 21, 2025) was an American professional boxer, businessman, minister, and author. In boxing, he competed between 1967 and 1997, and was nicknamed \"Big George\". He was a two-time world heavyweight champion and an Olympic gold medalist. He is the namesake of the George Foreman Grill.\n[…]\nGeorge Foreman and Joel Engel (2000). By George: The Autobiography of George Foreman. ISBN 978-0743201124.\n[…]\nGeorge Foreman (2003). George Foreman's Guide to Life: How to Get Up Off the Canvas When Life Knocks You. Simon & Schuster. ISBN 9780743224994.\n[…]\nGeorge Foreman (2004). Great Grilling Recipes! The Next Grilleration. Pascoe Publishing. ISBN 9781929862412.\n[…]\nGeorge Foreman (2004). George Foreman's Indoor Grilling Made Easy: More Than 100 Simple, Healthy Ways to Feed Family and Friends. Simon & Schuster. ISBN 978-0743266741.\n[…]\nGeorge Foreman (2005). The George Foreman Next Grilleration G5 Cookbook: Inviting. Pascoe Publishing. ISBN 978-1929862511.\n[…]\nGeorge Foreman and Fran Manushkin (2005). Let George Do It!. Simon & Schuster Children's Publishing ISBN 978-0689878077.\n[…]\nGeorge Foreman and Ken Abraham (2007). God in My Corner: A Spiritual Memoir. Thomas Nelson. ASIN: B00FDYTJS2.\n[…]\nBoxing record for George Foreman from BoxRec (registration required)\n[…]\nGeorge Foreman profile at Cyber Boxing Zone\n[…]\nBoxing's Greatest Fighters: George Foreman – ESPN\n[…]\nGeorge Foreman amateur boxing record\n[…]\nGeorge Foreman at the Team USA Hall of Fame (archive April 4, 2023)\n[…]\nGeorge Foreman at Olympics.comGeorge Foreman at Olympic.org (archived)\n[…]\nGeorge Foreman at Olympedia\n[…]\nGeorge Foreman at IMDb\n[…]\nGeorge Foreman discography at Discogs\n[…]\nGeorge Foreman and the Church of the Lord Jesus Christ from the Texas Archive of the Moving Image\n[…]\nInterview with George Foreman from the Texas Archive of the Moving Image"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/George_Foreman",
        "situacao": "ok",
        "texto": "George Edward Foreman (Marshall, 10 de janeiro de 1949 – Houston, 21 de março de 2025) foi um pugilista e empreendedor norte-americano, duas vezes campeão mundial de boxe na categoria peso-pesado e medalhista de ouro nos Jogos Olímpicos de 1968.\n[…]\nEm 2007, Foreman foi nomeado o 25.º melhor lutador dos últimos 80 anos pela revista The Ring e o 20.º melhor lutador de todos os tempos pelo canal de televisão ESPN. Apelidado de \"Big George\", tornou-se um homem de negócios bem-sucedido e um ministro cristão ordenado que tem sua própria igreja.\n[…]\nForeman teve 10 filhos, e cinco deles são chamados George: George Jr., George III, George IV, George V, e George VI. Seus três filhos mais velhos são distinguidos entre si pelos apelidos \"Monk\", \"Big Wheel\" e \"Little George\". Após encerrar sua carreira esportiva, tornou-se um rosto popular para o público das novas gerações, quando passou a dedicar-se à promoção de grelhas com seu nome na televisão.\n[…]\nEm 1972, sua sequência de vitórias continuou com uma série de cinco lutas consecutivas, nas quais ele derrotou cada oponente em dentro de três rounds.\n[…]\nFrazier vai à lona!\" Antes da luta, Frazier tinha um recorde de 29–0 (25 KO) e Foreman de 37–0 (34 KO). Igualmente memorável foi o soco final de George, um soco feito com tanta força que levantou Frazier do chão, antes de enviá-lo para a lona pela sexta vez. Frazier conseguiu se levantar, como ele tinha feito nas anteriores cinco derrubadas, porém o árbitro Arthur Mercante deu um fim à luta no segundo round.\n[…]\nGeorge Foreman era casado e teve doze filhos, sendo cinco homens e sete mulheres. Todos os filhos dele também possuem o nome de George. Uma de suas filhas, Freeda Foreman, morreu no dia 9 de março de 2019, no que aparentou ser um suicídio.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Kill Bill: Volume 1",
      "descricao": "Filme de 2003 dirigido por Quentin Tarantino e estrelado por Uma Thurman."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O macacão amarelo com faixas pretas usado por Uma Thurman em Kill Bill homenageia que astro das artes marciais?",
    "resposta": "Bruce Lee",
    "fonte": [
      "https://en.wikipedia.org/wiki/Kill_Bill:_Volume_1"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Kill_Bill:_Volume_1",
        "situacao": "ok",
        "texto": "Kill Bill: Volume 1 is a 2003 American martial arts film written and directed by Quentin Tarantino. It stars Uma Thurman as the Bride, a mercenary who swears revenge on a group of assassins (Lucy Liu, Daryl Hannah, Vivica A. Fox and Michael Madsen) and their leader, Bill (David Carradine), after they try to kill her and her unborn child. Her mission takes her to Tokyo, where she battles the yakuza\n[…]\nOutside the United States and Canada, Kill Bill: Volume 1 was released in 20 territories. The film outperformed its main competitor Intolerable Cruelty in Norway, Denmark and Finland, though it ranked second in Italy. Volume 1 had a record opening in Japan, though expectations were higher due to the film being partially set there and because of its homages to Japanese martial arts cinema.\n[…]\nOn the review aggregator Rotten Tomatoes, Kill Bill: Volume 1 has a score of 85% based on reviews from 238 critics. Its consensus reads: \"Kill Bill is admittedly little more than a stylish revenge thriller – albeit one that benefits from a wildly inventive surfeit of style.\" At Metacritic, which assigns a weighted average score 69 out of 100 based on 43 reviews from mainstream critics, indicating \"generally favorable\" reviews.\n[…]\nManohla Dargis of the Los Angeles Times called Kill Bill: Volume 1 a \"blood-soaked valentine to movies. ... It's apparent that Tarantino is striving for more than an off-the-rack mash note or a pastiche of golden oldies.\n[…]\nUma Thurman received a Golden Globe Best Actress nomination in 2004. She was also nominated in 2004 for a BAFTA Award for Best Actress in a Leading Role, in addition with four other BAFTA nominations. Kill Bill: Volume 1 was placed in Empire Magazine's list of the 500 Greatest Films of All Time at number 325 and the Bride was also ranked number 66 in Empire magazine's \"100 Greatest Movie Characters\".\n[…]\nKill Bill: Volume 1 at IMDb"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Mike Tyson's Punch-Out!!",
      "descricao": "Jogo de boxe lançado pela Nintendo em 1987 para o console de oito bits."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "No videogame de oito bits da Nintendo, o jogo de boxe Punch-Out trazia como último adversário que campeão real?",
    "resposta": "Mike Tyson",
    "distratores": [
      "Evander Holyfield",
      "George Foreman",
      "Larry Holmes"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Punch-Out!!_(NES)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Punch-Out!!_(NES)",
        "situacao": "ok",
        "texto": "Punch-Out!!, originally titled Mike Tyson's Punch-Out!!, is a 1987 boxing video game developed and published by Nintendo for the Nintendo Entertainment System (NES). Part of the Punch-Out!! series, it is an adaptation of the arcade video games Punch-Out!! (1984) and Super Punch-Out!! (1984). Differences from the arcades include the addition of former undisputed world heavyweight champion Mike Tyso\n[…]\nThis transaction was something of a risk for Nintendo, as it occurred before Tyson won the World Boxing Council (WBC) heavyweight championship from Trevor Berbick on November 22, 1986, which greatly increased the profit for the game. Nintendo would release the Mike Tyson version of Punch-Out!! in Japan soon after its North American release.\n[…]\nMike Tyson's Punch-Out!! was rebranded to simply Punch-Out!!, and re-released in the U.S. and Europe in 1990 and 1991, respectively. When Nintendo's license had expired with Mike Tyson, his likeness was replaced by a fictional character named Mr. Dream. This version of the game was used in all major re-releases, including the Virtual Console, Animal Crossing for GameCube, the NES Classic Edition, and on the Nintendo Classics service (which Mike Tyson humorously contested).\n[…]\nGamesRadar ranked it the 11th best NES game ever made, calling it a \"brilliant puzzle game [disguised] as a sports game\". Game Informer ranked Mike Tyson's Punch-Out!! as its 14th favorite game ever in 2001. The staff noted that no boxing game since has been as \"beloved\". IGN named it the 7th best NES game. Official Nintendo Magazine ranked the game 74th in a list of greatest Nintendo games.\n[…]\nPunch-Out!! at MobyGames\n[…]\nMike Tyson's Punch-Out!! at NinDB\n[…]\nHacked Nintendo Punch-Out!! Game Finally Lets You Fight Mike Tyson Using Motion Controls by Gizmodo\n[…]\nPunch-Out!! on the Famicom 40th Anniversary page (in Japanese)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Punch-Out%21%21_%28NES%29",
        "situacao": "ok",
        "texto": "Punch-Out!! (パンチアウト!!, Panchiauto!!), conhecido originalmente como Mike Tyson's Punch-Out!!, é um jogo eletrônico de boxe desenvolvido e publicado pela Nintendo para o NES em 1987, em que o pugilista Mike Tyson aparece como chefe final. O jogo foi relançado para os serviços de Virtual Console do Wii em 2007 e do Nintendo 3DS em 2012.\n[…]\nEm 2016, 29 anos após o lançamento do jogo, um Easter Egg, foi descoberto. Trata-se de um super-soco que derruba os oponentes mais dificílimos de uma só vez. Ele só pode ser usado nos segundos duelos contra os lutadores Piston Honda e Bald Bull. O segredo está em prestar atenção no único espectador de barba que aparece na primeira fileira de arquibancada, perto do corner esquerdo do alto da tela. O barbudo passa o jogo inteiro imóvel, mas, nas lutas em questão, vez ou outra ele abre um sorriso.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Ronda Rousey",
      "descricao": "Lutadora americana, primeira campeã feminina do UFC e medalhista olímpica."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Antes de virar estrela do UFC, a americana Ronda Rousey ganhou medalha olímpica em que esporte?",
    "resposta": "Judô",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ronda_Rousey"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ronda_Rousey",
        "situacao": "ok",
        "texto": "Ronda Jean Rousey ( ROW-zee; born February 1, 1987) is an American actress, retired professional wrestler, former judoka, and former mixed martial artist. She is best known for her tenures in the Ultimate Fighting Championship (UFC) and WWE.\n[…]\nRonda Jean Rousey was born in Riverside, California, on February 1, 1987, the youngest of three daughters of AnnMaria De Mars (née Waddell) and Ronald John Rousey, after whom she was named. Her mother, a decorated judoka, was the first American to win a World Judo Championship (in 1984, as AnnMaria Burns).\n[…]\nIn August 2008, Rousey competed at the 2008 Olympic Games in Beijing, China. She lost her quarterfinal to the Dutch ex-world champion Edith Bosch but qualified for a bronze medal match through the repechage bracket. Rousey defeated Annett Boehm by Yuko to win a bronze medal (Judo offers two bronze medals per weight class). With the victory, Rousey became the first American to win an Olympic medal in women's judo since its inception as an Olympic sport in 1992.\n[…]\nRousey ultimately compiled a competition judo record of 56 wins and 19 losses.\n[…]\nWhen Rousey started learning judo, her mother took her to judo clubs run by her old teammates. Rousey went to North Hollywood, Los Angeles Hayastan MMA Academy, which was run by Armenian-American Gokor Chivichyan, where she trained with fellow future MMA fighters Manny Gamburyan and Karo Parisyan.\n[…]\nInternational Judo Federation\n[…]\n2004 World Judo Championships Junior Gold Medalist\n[…]\nUSA Judo\n[…]\nList of Olympic medalists in judo\n[…]\nRonda Rousey (Archived August 17, 2012, at the Wayback Machine) at USA Judo\n[…]\nRonda Rousey at Judo Vision\n[…]\nOhlenkamp, Neil; Wilson, Jerrod (2006). \"Ronda Rousey – Judo Champion\". Judo Info. Archived from the original on May 13, 2010."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ronda_Rousey",
        "situacao": "ok",
        "texto": "Ronda Jean Rousey ([ˈraʊzi]; Riverside, 1 de fevereiro de 1987) é uma atriz, dubladora e lutadora de luta livre profissional, artes marciais mistas e judô.\n[…]\nRousey foi a primeira americana a ganhar uma medalha olímpica no judô (bronze), conquistada nos Jogos Olímpicos de Verão de 2008 em Pequim. Ela também é ex-campeã do peso-galo do UFC, bem como foi a última campeã feminina do peso-galo do Strikeforce. Ela venceu 12 lutas de AMM consecutivas, seis delas no Ultimate Fighting Championship (UFC), perdendo posteriormente para Holly Holm em novembro de 2015. Onze dessas lutas Rousey venceu no primeiro assalto, nove delas por finalização.\n[…]\nEm Fevereiro de 2007, subiu para categoria até 70 kg, onde foi classificada como uma das três melhores lutadoras do mundo. No mesmo ano, ela ganhou a medalha de prata, na categoria peso médio, no Campeonato Mundial de Judô e a medalha de ouro nos Jogos Pan-americanos.\n[…]\nEm Agosto de 2008, participou dos Jogos Olímpicos de Pequim, na China. Foi derrotada nas Quartas de Final pela holandesa ex-campeã mundial Edith Bosch, porém se qualificou para disputar a medalha de bronze através da repescagem. Rousey derrotou Annett Boehm por Yuko conquistando a medalha de bronze (Nota: O Judô oferece duas medalhas de bronze por categoria de peso).\n[…]\nCom a vitória, se tornou a primeira americana a conquistar uma medalha olímpica no Judô feminino desde sua inclusão como esporte olímpico, em 1992.\n[…]\n2006 Pan American Judo Championships Women's Championships Senior Medalha de Prata\n[…]\n2005 Pan American Judo Championships Women's events Championships Senior Medalha de Ouro\n[…]\n2004 World Judo Championships Medalha de Ouro\n[…]\nUSA Judô",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Jackie Chan",
      "descricao": "Ator, dublê e artista marcial de Hong Kong, famoso por filmes de ação com comédia."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Na infância, Jackie Chan estudou por anos numa escola de que arte cênica chinesa, onde aprendeu acrobacias e luta?",
    "resposta": "Ópera de Pequim",
    "distratores": [
      "Teatro de sombras",
      "Dança do leão",
      "Teatro de marionetes"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Jackie_Chan"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Jackie_Chan",
        "situacao": "ok",
        "texto": "Chan Kong-sang (born 7 April 1954), also known as Fang Shilong and known professionally as Jackie Chan and Sing Lung, is a Hong Kong martial artist, actor and filmmaker, known for his slapstick, acrobatic fighting style, comic timing, and innovative stunts, which he typically performs himself. With a film career spanning seven decades, he is regarded as one of the most iconic and influential marti\n[…]\nIn 1960, his father emigrated to Canberra, Australia to work as the head cook for the American embassy, and Chan was sent to the China Drama Academy, a Peking Opera School run by Master Yu Jim-yuen. Chan trained rigorously for the next decade, excelling in martial arts and acrobatics. He eventually became part of the Seven Little Fortunes, a performance group made up of the school's best students, gaining the stage name Yuen Lo (元樓) in homage to his master.\n[…]\nChan produced a number of action comedy films with his opera school friends Sammo Hung and Yuen Biao. The three co-starred together for the first time in 1983 in Project A, which introduced a dangerous stunt-driven style of martial arts that won it the Best Action Design Award at the third annual Hong Kong Film Awards. Over the following two years, the \"Three Brothers\" appeared in Wheels on Meals and the original Lucky Stars trilogy.\n[…]\nChan had vocal lessons while at the Peking Opera School in his childhood. He began producing records professionally in the 1980s and has gone on to become a successful singer in Hong Kong and Asia. He has released 20 albums since 1984 and has performed vocals in Cantonese, Mandarin, Japanese, Taiwanese and English. He often sings the theme songs of his films, which play over the closing credits.\n[…]\nHong Kong action cinema\n[…]\nJackie Chan Hill – Neighbourhood in Banda Aceh, Indonesia\n[…]\nJackie Chan at IMDb\n[…]\nJackie Chan at the Hong Kong Movie Database\n[…]\nJackie Chan at Rotten Tomatoes"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jackie_Chan",
        "situacao": "ok",
        "texto": "Chan Kong-sang (成龍 ou 房仕龍) (Victoria Peak, Hong Kong, 7 de abril de 1954), mais conhecido como Jackie Chan, é um ator, produtor, roteirista, coreógrafo, diretor de cinema, cantor e especialista em artes marciais honconguês, tendo estudado hapkido, Karatê e vários estilos de Kung Fu, como Drunken Fist, Wing Chun, Shaolin do Norte, Monkey Style e Wushu moderno.\n[…]\nJackie Chan (conhecido em Hong Kong como \"Dragão Chan\", em pin yin \"cheng long\" 成龙) nasceu numa família extremamente pobre, por isso Chan quase foi vendido para um rico casal britânico quando era bebê. Por volta de 1960, seu pai, Charles Chan Chi-Ping, e sua mãe, Lee-Lee Chan Yuet-Wing, fugiram para Camberra, na Austrália, como refugiados da Guerra Civil Chinesa. Antes de deixar a República Popular da China, Lee-Lee era empregada doméstica e Charles era mordomo.\n[…]\nChan, quando criança, foi apelidado por sua mãe de Pao-Pao (\"Bola de canhão\" em chinês) por ser uma criança com muita energia e estar sempre rolando pelo chão afora e por, aos cinco anos, pesar quase 50 Kg. Aos sete anos, Jackie Chan deu seu primeiro passo rumo à carreira artística, matriculando-se na Escola de Ópera de Pequim. O treinamento na ópera de Pequim era rigoroso; lá, os alunos aprendiam dança, canto e outros tipos de arte.\n[…]\nPassado algum tempo, um cineasta local visitou a ópera e convidou Jackie Chan para fazer uma pequena participação no seu longa-metragem. Jackie Chan se destacava entre os demais dublês e figurantes, assim novos convites surgiram.\n[…]\nA primeira performance pública de Jackie Chan foi num grupo chamado Seven Little Fortunes, composto pelos melhores alunos de sua escola. Os membros do grupo incluíam também Yuen Biao, Sammo Hung e Yuen Wah.\n[…]\n1988 - Jackie Chan\n[…]\nEm 2021, Jackie Chan anunciou que gostaria de se tornar membro do Partido Comunista Chinês.\n[…]\nJackie Chan no IMDb\n[…]\nJackie Chan no AdoroCinema",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Jake LaMotta",
      "descricao": "Boxeador americano, campeão mundial dos pesos-médios, retratado no filme Touro Indomável."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Que boxeador americano, apelidado de Touro do Bronx, foi interpretado por Robert De Niro em Touro Indomável?",
    "resposta": "Jake LaMotta",
    "fonte": [
      "https://en.wikipedia.org/wiki/Jake_LaMotta",
      "https://en.wikipedia.org/wiki/Raging_Bull"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Jake_LaMotta",
        "situacao": "ok",
        "texto": "Giacobbe \"Jake\" LaMotta (July 10, 1922 – September 19, 2017) was an American professional boxer who was world middleweight champion between 1949 and 1951. Nicknamed \"the Bronx Bull\" or \"Raging Bull\" for his technique of constant stalking, brawling and inside fighting, he developed a reputation for being a \"bully\"; he was what is often referred to today as a swarmer and a slugger.\n[…]\nAs LaMotta wrote,\n[…]\nLaMotta appeared in more than 15 films, including The Hustler (1961) with Paul Newman and Jackie Gleason, in which he had a role as a bartender. He appeared in several episodes of the NBC police comedy Car 54 Where Are You? (1961–63). A lifelong baseball fan, he organized the Jake LaMotta All-Star Team in the Bronx. The LaMotta team played in Sterling Oval which was located between 165th and 164th Streets between Clay and Teller Avenue.\n[…]\nHollywood executives approached LaMotta with the idea of a movie about his life, based on his 1970 memoir Raging Bull: My Story. The film, Raging Bull, released in 1980, was a box-office bomb, but eventually received overwhelming critical acclaim for both director Martin Scorsese and actor Robert De Niro, who gained about 60 pounds during the shooting of the film to play the older LaMotta in later scenes.\n[…]\nLaMotta is the subject of a documentary directed and produced by Greg Olliver. The film features an appearance by Mike Tyson among other notable athletes, actors and Jake's family and friends. Also in production was a sequel to Raging Bull, although MGM filed suit to halt the project, saying that LaMotta did not have the right to make a sequel. The lawsuit was settled on July 31, 2012, when LaMotta agreed to change the title of the film to The Bronx Bull.\n[…]\nBoxing record for Jake LaMotta from BoxRec (registration required)\n[…]\nWhitney Martin (AP), \"Lamotta Near End Of Trail\", Lewiston Daily Sun, January 3, 1953\n[…]\nJake LaMotta at IMDb"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Raging_Bull",
        "situacao": "ok",
        "texto": "Raging Bull is a 1980 American biographical sports drama film directed by Martin Scorsese from a screenplay by Paul Schrader and Mardik Martin, which adapts Jake LaMotta's 1970 memoir Raging Bull: My Story. Robert De Niro stars as LaMotta, a former middleweight boxing champion whose turbulent personal life is beset by rage and jealousy. Scorsese dedicated the film to Armenian-American NYU film pro\n[…]\nRaging Bull was initiated when Robert De Niro read the autobiography while he was on the set of The Godfather Part II. Although disappointed by the book's writing style, De Niro became fascinated by the character of Jake LaMotta. He showed the book to Martin Scorsese on the set of Alice Doesn't Live Here Anymore, with the hope that he would consider the project.\n[…]\nThe scenes with the heftier Jake LaMotta—which include announcing his retirement from boxing and LaMotta in a Florida cell—were completed seven-to-eight weeks later when approaching Christmas 1979, so as not to aggravate the health issues that were affecting De Niro's posture, breathing and talking.\n[…]\nThe final sequence, in which Jake LaMotta is in front of his mirror, was filmed on the last day of shooting, requiring 19 takes, with only the 13th being used for the film. Scorsese wanted to have an atmosphere that would be so cold that the words would have an impact as he tries to come to terms with his relationship with his brother.\n[…]\nIn 2006, Variety reported that Sunset Pictures was developing a combination sequel and prequel film entitled Raging Bull II: Continuing the Story of Jake LaMotta, chronicling LaMotta's life before and after the events of the original film, as told in the memoir of the same name. Filming began on June 15, 2012, with William Forsythe as the older LaMotta and Mojean Aria as the younger version (before the events of the first film).\n[…]\nRaging Bull at Rotten Tomatoes\n[…]\nRaging Bull at Metacritic"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jake_LaMotta",
        "situacao": "ok",
        "texto": "Giacobbe \"Jake\" La Motta (Bronx, Nova York, 10 de julho de 1922 – Miami, 19 de setembro de 2017), também apelidado de \"The Bronx Bull\" e \"The Raging Bull\", foi um boxeador norte-americano. Foi campeão mundial na categoria peso médio durante 1 ano e 7 meses. Quando perdeu o título dos médios, subiu para os meio-pesados mas não obteve bons resultados.\n[…]\nDescendente de imigrantes italianos,  nasceu no bairro do Bronx, em Nova York, e começou a lutar boxe ainda muito novo, quando seu pai o fez lutar com crianças da vizinhança para  divertimento dos adultos. Em 1941, aos 19 anos, ele começou a lutar boxe profissionalmente.\n[…]\nCom 83 vitórias (30 nocautes), 19 derrotas e 4 empates, LaMotta foi o primeiro homem a vencer Sugar Ray Robinson, criando uma rivalidade que renderia seis lutas memoráveis. Ele foi suspenso por suspeita de fraude em uma derrota para Billy Fox. Posteriormente,  admitiria ter perdido de propósito para ganhar prestígio com a máfia. Fora dos ringues, LaMotta era  conhecido como um homem violento como mostra o filme sobre sua vida,  e por diversas vezes agrediu sua esposa .\n[…]\nDepois da aposentadoria, ele comprou alguns bares e virou ator e comediante. Apareceu em mais de 15 filmes, incluindo The Hustler, com Paul Newman, em que interpretou o bartender.\n[…]\nSua história virou filme dirigido por Martin Scorsese e estrelado por Robert De Niro. O filme, Touro Indomável é baseado na autobiografia de LaMotta, chamada Raging Bull: My Story. Robert De Niro engordou 27 quilos para interpretar Jake LaMotta depois da aposentadoria.\n[…]\nDecadente após a aposentadoria, Jake LaMotta foi preso, perdeu um filho e lançou vários livros sobre sua carreira e suas lutas com Sugar Ray Robinson.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Karatê Kid",
      "descricao": "Filme americano de 1984 sobre o jovem Daniel e seu mestre de caratê, o Sr. Miyagi."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "No filme Karatê Kid, de 1984, o Sr. Miyagi treina Daniel mandando-o fazer que tarefa repetitiva nos carros?",
    "resposta": "Passar e tirar cera",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Karate_Kid"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Karate_Kid",
        "situacao": "ok",
        "texto": "The Karate Kid is a 1984 American martial arts drama film directed by John G. Avildsen and written by Robert Mark Kamen. It is the first film in The Karate Kid franchise. The film stars Ralph Macchio, Pat Morita, Elisabeth Shue and William Zabka. The story follows Daniel LaRusso (Macchio), an Italian-American teenager from New Jersey who moves with his widowed mother to the Reseda neighborhood of \n[…]\nThe film spawned a franchise of related items and memorabilia such as action figures, headbands, posters, T-shirts, and a video game. A novelization was made by B. B. Hiller and published in 1984. The novel had a scene that was in the rehearsal when Daniel encounters Johnny during school at lunch. Also, at the end, there was a battle between Miyagi and Kreese in the parking lot after the tournament which was the original ending for the film and used as the beginning of The Karate Kid Part II.\n[…]\nIn 2015, toy company Funko revived The Karate Kid action figures. Two versions of LaRusso, a version of Lawrence and a version of Miyagi were part of the line. The toys were spotted at retailers Target and Amazon.com.\n[…]\nAside from the film series, an animated series based on the film, also called The Karate Kid, aired on NBC in the fall of 1989. Consisting of thirteen episodes, the series abandoned the karate tournament motif and followed Daniel and Miyagi, voiced by Joey Dedio and Robert Ito, respectively, in an adventure/quest setting.\n[…]\nIn January 2020, a musical theatre adaptation of The Karate Kid was revealed to be in development. Amon Miyamoto served as the director, with an accompanying novel being written by the original film's screenwriter Robert Mark Kamen. Drew Gasparini is the lyricist and composer of the score, while Keone and Mari Madrid choreographed the musical. The premiere cast included Jovanni Sy as Mr. Miyagi, John Cardoza as Daniel, Kate Baldwin as Lucille, Alan H."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/The_Karate_Kid",
        "situacao": "ok",
        "texto": "The Karate Kid (bra: Karatê Kid: A Hora da Verdade; prt: Momento da Verdade) é um filme de artes marciais e drama romântico norte-americano de 1984 do diretor John G. Avildsen e escrito por Robert Mark Kamen, estrelado por Ralph Macchio e Noriyuki \"Pat\" Morita e Elisabeth Shue. É uma história underdog no molde de um sucesso anterior de Avildsen de 1976, o filme Rocky.\n[…]\nPorém, a situação de Daniel se complica quando o ex-namorado de Ali, Johnny Lawrence (William Zabka), e seus amigos começam a atormentá-lo. Um dia, quando é cercado pelos amigos de Johnny, ele é salvo por Kesuke Miyagi (Pat Morita), um velho mestre de caratê. Disposto a ajudar Daniel, Miyagi resolve passar-lhe os ensinamentos de sua arte marcial, para que ele possa se defender dos amigos de Johnny, que também lutam caratê. Então ele enfrenta os seus adversários em uma competição de luta.\n[…]\nO filme é famoso por mostrar o ensaio de artes marciais por Daniel San por meio de atividades cotidianas do dia a dia, como limpar o carro ou pintar uma parede.\n[…]\nA partir daí, nunca mais o êxito do filme teve limite em terras de Afonso Henriques. Durante muitos anos, já mais tarde, a SIC ou a TVI passaram a reexibir este filme em ocasiões especiais, e estrearam as suas continuações na televisão.\n[…]\nThe Karate Kid Part II, filme de 1986 em que Daniel acompanha Miyagi em uma viagem de volta para Okinawa, onde se reúne com os entes queridos, e é desafiado por um antigo adversário.\n[…]\nThe Karate Kid Part III, filme de 1989 em que Martin Kove reaparece como Kreese, buscando vingança contra Daniel e Miyagi, com a ajuda de aliados desempenhados por Thomas Ian Griffith e Sean Kanan.\n[…]\nThe Next Karate Kid, filme de 1994 em que Hilary Swank aparece como nova aluna de Mr. Miyagi, Julie Pierce.\n[…]\nThe Karate Kid, remake de 2010 estrelando Jackie Chan e Jaden Smith.\n[…]\nThe Karate Kid (em inglês) em Fast Rewind",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Capoeira",
      "descricao": "Arte marcial afro-brasileira que combina luta, dança, música e acrobacia."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "A capoeira virou crime no Código Penal criado logo após a Proclamação da República. De que ano é esse código?",
    "resposta": "1890",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Capoeira",
      "https://en.wikipedia.org/wiki/Capoeira"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Capoeira",
        "situacao": "ok",
        "texto": "A capoeira ou capoeiragem é uma expressão cultural e esporte afro-brasileiro que mistura arte marcial, dança e música. Acredita-se que foi desenvolvida no Brasil através do Engolo, arte marcial angolana introduzida no Brasil por escravizados africanos.\n[…]\nEm pouco tempo, mais especificamente em 1890, a República Brasileira decretou a proibição da capoeira em todo o território nacional, vista a situação caótica da capital brasileira e a notável vantagem que um capoeirista levava no confronto corporal contra um policial. Código Penal da República, adapto pelo estado brasileiro em 1890, considerou a capoeira ilegal debaixo o artigo 402 que disse que uma pessoa vista participando da capoeira pode pegar de dois a seis anos de prisão.\n[…]\nApós a abolição da escravidão, para proteger a princesa Isabel de retaliações de quem tinha escravos, principalmente dos republicanos, foi formada a Guarda Negra que continha ótimos capoeiristas. Essa Guarda atuou contra os republicanos para defesa de Isabel e para a liberdade. Ato contínuo, os republicanos dão um golpe de Estado em 1889, e por vingança, logo no ano seguinte, estabelecem a capoeira como crime.\n[…]\nEm 1937, Bimba fundou o centro de Cultura Física e Luta Regional, com alvará da secretaria da Educação, Saúde e Assistência de Salvador. Seu trabalho obteve aceitação social, passando a ensinar para as elites econômicas, políticas, militares e universitárias. Finalmente, em 1940, a capoeira saiu do código Penal brasileiro e deixou definitivamente a ilegalidade. Começou, então, um longo processo de desmarginalização da capoeira.\n[…]\nAssociação Brasileira de Capoeira Angola (ABCA)\n[…]\nFederação Internacional de Capoeira (FICA)\n[…]\nConfederação Brasileira de Capoeira (CBC)\n[…]\nA História da Capoeira - Buenas Ideias"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Capoeira",
        "situacao": "ok",
        "texto": "Capoeira (Portuguese pronunciation: [kapuˈe(j)ɾɐ]) is an Afro-Brazilian martial art and game that includes elements of dance, acrobatics, music, and spirituality.\n[…]\nIn other case, a police officer in Rio had been murdered with a headbutt, whose upper body \"had been flattened as if the implement of death had been a mallet\". This historical form of capoeira became known as capoeira carioca, referring to its association with Rio de Janeiro. Capoeira was listed as a crime in the Brazilian penal code of 1890.\n[…]\nFollowing the batizado the new graduation, generally in the form of a cord, is given. Traditionally, the batizado is the moment when the new practitioner gets or formalizes their apelido (nickname). This tradition was created back when capoeira practice was considered a crime. To avoid having problems with the law, capoeiristas would present themselves in the capoeira community only by their nicknames.\n[…]\nCapoeira movements are generally circular, rather than striking head on.\n[…]\nCapoeira is slave mandinga, desirous of freedom.\n[…]\nHowever, Nestor agrees that the Senzala style had become stultifying, and welcomes the greater diversity and emphasis on anti-racism adopted in the mid-1980s. Capoeiristas of different traditions who may have philosophical disagreements play the game with one another, despite variations in method and understanding.\n[…]\nMason, Paul H. (2013). \"Intracultural and Intercultural Dynamics of Capoeira\" (PDF). Global Ethnographic. 1: 1–8.\n[…]\nMerrell, Floyd (2005). Capoeira and Candomblé: Conformity and Resistance in Brazil. Princeton: Markus Wiener. ISBN 978-1-55876-349-4.\n[…]\nCapoeira history\n[…]\nCapoeira lyrics"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Roda de capoeira",
      "descricao": "Círculo de pessoas, música e canto no qual se joga capoeira, reconhecido como patrimônio cultural imaterial."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Na roda de capoeira, que instrumento de arco e cabaça comanda o ritmo e o tipo de jogo?",
    "resposta": "Berimbau",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Berimbau",
      "https://en.wikipedia.org/wiki/Capoeira"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Berimbau",
        "situacao": "ok",
        "texto": "O berimbau(português brasileiro) ou hungo(português angolano) é um instrumento de corda com origem em Angola e tradicional da Bahia.\n[…]\nO berimbau é um elemento fundamental na capoeira, sendo reverenciado pelos capoeiristas antes de iniciarem um jogo. Alguns o consideram um instrumento sagrado. Ele comanda a roda de capoeira, dita o ritmo e o estilo de jogo. São dados nomes às variações de toques mais conhecidas, e quando se toca repetidamente um mesmo toque, diz-se que está jogando a capoeira daquele estilo. As variações mais comuns são \"Angola\" e \"São Bento Grande\".\n[…]\nO gunga toca a linha grave, raramente com improvisações. O tocador de berra-boi no começo de uma roda de capoeira geralmente é seu líder, sendo seguido pelos outros instrumentos. O tocador principal do gunga geralmente também lidera a cantoria, além de convidar os jogadores ao \"pé do berimbau\" (para inciarem o jogo).\n[…]\nNão há muitas regras formais no toque do berimbau na capoeira, sendo que cada mestre de roda determina a interação entre seus músicos. Alguns preferem todos os instrumentos em uníssono, ao passo que outros dividem os tocadores entre iniciantes e avançados, requerendo dos últimos variações mais complexas.\n[…]\nA afinação na capoeira é escassamente definida. O berimbau é um instrumento microtonal, e pode ser afinado na mesma altura, variando apenas no timbre. A nota baixa do médio é afinada com a nota alta do gunga, o mesmo se procedendo em relação ao violinha para com o médio. Outros gostam de afinar o instrumento em quarteto (dó-fá-si) ou em tríade (dó-mi-sol). No geral, a afinação depende da aprovação do mestre de roda.\n[…]\nArco musical"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Capoeira",
        "situacao": "ok",
        "texto": "Capoeira (Portuguese pronunciation: [kapuˈe(j)ɾɐ]) is an Afro-Brazilian martial art and game that includes elements of dance, acrobatics, music, and spirituality.\n[…]\nMain proponents of the fighting-oriented capoeira of Rio de Janeiro were Mestre Sinhozinho and Mestre Zuma. In this period, capoeiristas usually carried knives and bladed weapons with them, or hid blades in unusual places such as umbrellas or the berimbau (a traditional musical instrument).\n[…]\nMusic sets the tempo and style of game that is to be played within the roda; rhythms (toques) are controlled by an instrument called a berimbau, which has become the symbol of capoeira. The second most important instrument in capoeira is a pandeiro, a type of tambourine.\n[…]\nCapoeira instruments are disposed in a row called bateria. Traditionally, it includes berimbaus, pandeiros, atabaques, and an agogô; the format may vary depending on the capoeira group's traditions or the roda style. The berimbau is the leading instrument, determining the tempo and style of the music and game played; the other instruments must follow the berimbau's rhythm, free to vary and improvise a little, depending upon the capoeira group's musical style.\n[…]\nMusical instruments connect the living, the deceased, and the gods; African dances customarily commence by paying homage to the primary instrument. This practice of tribute to the gods is mirrored in the capoeira tradition of kneeling before the berimbau during the ladainha. In Bantu religion, kalûnga represents the idea that, in the realm of the living everything is reversed from the realm of the ancestors. Inhabitants of the ancestral realm are inverted compared to us."
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Capoeira regional",
      "descricao": "Estilo de capoeira sistematizado em Salvador na primeira metade do século vinte."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em Salvador, na primeira metade do século vinte, que mestre baiano criou o estilo conhecido como capoeira regional?",
    "resposta": "Mestre Bimba",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Mestre_Bimba",
      "https://en.wikipedia.org/wiki/Mestre_Bimba"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Mestre_Bimba",
        "situacao": "ok",
        "texto": "Manoel dos Reis Machado, também conhecido como Mestre Bimba (Salvador, 23 de novembro de 1900 – Goiânia, 5 de fevereiro de 1974), foi um mestre brasileiro de capoeira e, criador da Luta Regional Baiana, mais tarde chamada de capoeira regional.\n[…]\nMestre Bimba nasceu em Salvador em 1900. Trabalhou como minerador de carvão antes de criar a capoeira regional.\n[…]\nAo perceber que a capoeira estava perdendo seu valor cultural e enfraquecendo enquanto luta, Mestre Bimba misturou elementos da Capoeira Tradicional com o batuque (luta do Nordeste Brasileiro extinta com o passar do tempo) criando assim um novo estilo de luta com praticidade na vida, com movimentos mais rápidos e acompanhada de música. Assim conquistou todas as classes da sociedade.\n[…]\nNo vídeo \"Relíquias da Capoeira: Depoimento do Mestre Bimba\", um documento audiovisual em VHS produzido por Bruno Farias, onde Bimba comenta os motivos que o fizeram se mudar para Goiânia, onde ele conseguiu mais apoio financeiro. Posteriormente, em uma reunião de especialistas em capoeira no Rio de Janeiro, explica-se mais sobre o nome do esporte, sobre a criação da capoeira regional e sobre este mestre.\n[…]\nA Fundação Mestre Bimba é a principal instituição de capoeira regional de Salvador. Responsável pela manutenção do legado do Mestre Bimba, a fundação está sediada no Centro Histórico de Salvador, e foi criada em 30 de novembro de 1993, sendo oficializada em 30 de novembro de 1994.==Referências==\n[…]\nQuem foi Mestre Bimba que recebe um Google Doodle\n[…]\nMestre Bimba - A Capoeira Iluminada\n[…]\nMestre Bimba e a história da Capoeira\n[…]\nMestres - Manoel dos Reis Machado\n[…]\nMANOEL DOS REIS MACHADO, O MESTRE BIMBA\n[…]\nBiografia - MESTRE BIMBA[ligação inativa]\n[…]\nCapoeira Regional - Mestre Bimba"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Mestre_Bimba",
        "situacao": "ok",
        "texto": "Manuel dos Reis Machado, commonly called Mestre Bimba (Portuguese pronunciation: [ˈmɛstɾi ˈbĩbɐ]; November 23, 1899 or 1900  – February 5, 1974), was a Brazilian capoeira mestre and the founder of the capoeira regional style. He was initially a street fighter and learned the batuque style from his father. Subsequently, he learned traditional capoeira; in the 1910s and 1920s, he reformed it into hi\n[…]\nOther sources, among them Mestre Itapoan, believe that Bimba made virtually no additions from other martial arts to capoeira, and that all its movements came from batuque or itself; moreover, there are reports of capoeira techniques similar to those from judo as far back as 1888, before Eastern martial arts came to Brazil.\n[…]\nMestre Pastinha established a new style closer to the traditional origins preceding some of Bimba's reforms, named capoeira Angola; the two men became respectful competitors. Bimba's Capoeira Regional academy was geographically near Pastinha's Capoeira Angola school.\n[…]\nIn 1949, the regional school toured São Paulo in order to show their art. However, their promoter would force them to work full exhibition matches (marmeladas, a word also used for professional wrestling), which Mestre Bimba didn't approve of. During this tour, they received two challenges to fight for real (pra valer), one by Brazilian catch wrestlers led by Piragibe and another one by capoeira carioca leader Mestre Sinhozinho.\n[…]\nAs of 2023, Bimba's son, Mestre Nenel, continues to teach capoeira in his father's style in Bahia.\n[…]\nBimba developed a capoeira teaching method with commandments, principles and traditions, which are still part of the capoeira regional up to this day. Some of his commandments are:\n[…]\nMestre Bimba: A Capoeira Illuminada (2006) is a documentary about Mestre Bimba and Capoeira.\n[…]\nOfficial Blog of the Fundação Mestre Bimba\n[…]\nDocumentary, Mestre Bimba: A Capoeira Illuminada (2006)"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Judô nos Jogos Olímpicos de 1964",
      "descricao": "Estreia do judô no programa olímpico, nos Jogos de Tóquio, em 1964."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Na estreia do judô olímpico, em Tóquio, em 1964, que holandês venceu a categoria livre e silenciou a torcida japonesa?",
    "resposta": "Anton Geesink",
    "fonte": [
      "https://en.wikipedia.org/wiki/Judo_at_the_1964_Summer_Olympics",
      "https://en.wikipedia.org/wiki/Anton_Geesink"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Judo_at_the_1964_Summer_Olympics",
        "situacao": "ok",
        "texto": "The judo competition at the 1964 Summer Olympics was the first time the sport was included in the Summer Olympic Games. As a result, decades of judo being officially banned as an \"imperialist sport\" in the Soviet Union ended shortly before the Games started, as Soviet authorities prioritized winning medals above all else. The medals were awarded in 4 classes, and competition was restricted to men \n[…]\n\"Olympic Medal Winners\". International Olympic Committee. Retrieved 2006-11-18.\n[…]\nTokyo Organizing Committee (1964). The Games of the XVIII Olympiad: Tokyo 1964, vol. 2.\n[…]\nVideos of the 1964 Judo Summer Olympics\n[…]\njudo at the 1964 Summer Olympics at the International Judo Federation\n[…]\njudo at the 1964 Summer Olympics at JudoInside.com"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Anton_Geesink",
        "situacao": "ok",
        "texto": "Antonius Johannes Geesink (6 April 1934 – 27 August 2010) was a Dutch 10th dan judoka. He was the first non-Japanese judoka to win gold at the World Judo Championships, a feat he accomplished in 1961 and 1965. He was also an Olympic Champion, having won gold at the 1964 Summer Olympics in Japan, and won a record 21 European Judo Championships during his career.\n[…]\nJudo debuted as an official sport at the 1964 Summer Olympics, held in the sport's home country, Japan. Although Japan dominated three of the four weight divisions (light, middle, and heavy), Anton Geesink won the final of the open weight division, defeating Akio Kaminaga in front of his home crowd.\n[…]\nAnton Geesink was one of the few 10th Dan grade judoka (jūdan) recognized by the IJF but not by the Kodokan Institute at that rank. Promotions from 6th to 10th Dan are awarded for services to the sport of judo. In 2010 there are three living 10th dan grade judoka (jūdan) recognized by Kodokan: Toshiro Daigo, Ichiro Abe and Yoshimi Osawa. The Kodokan has not awarded the 10th Dan to anybody outside Japan.\n[…]\nAt the 1964 Tokyo Olympics, Mr. Geesink won the gold medal in the open class as the first non-Japanese. Since then, with the spirit of budō, he has contributed to the international peace and promoted the cultural exchange and friendship between the people of the Netherlands and of Japan. Furthermore, he explored judo in light of education and somatology and has been devoted to its diffusion and development.\n[…]\nAnton Geesink at the International Judo Federation\n[…]\nAnton Geesink at JudoInside.com\n[…]\nAnton Geesink at the International Wrestling Database\n[…]\nAnton Geesink at CageMatch worker\n[…]\nAnton Geesink at Internet Wrestling Database\n[…]\nAnton Geesink at Olympics.com\n[…]\nAnton Geesink at Olympedia\n[…]\nAnton Geesink at InterSportStats\n[…]\nAnton Geesink at The-Sports.org\n[…]\nAnton Geesink at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jud%C3%B4_nos_Jogos_Ol%C3%ADmpicos_de_Ver%C3%A3o_de_1964",
        "situacao": "ok",
        "texto": "Esporte muito popular no Japão, o judô fez parte do programa dos Jogos Olímpicos de Verão de 1964 pela primeira vez em Olimpíadas. Realizada na arena Nippon Budokan em Tóquio, a modalidade contou com quatro categorias, todas restritas apenas a homens.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Aurélio Miguel",
      "descricao": "Judoca paulistano, campeão olímpico na categoria até 95 kg em 1988."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em 1988, Aurélio Miguel conquistou o primeiro ouro olímpico do judô brasileiro em que cidade?",
    "resposta": "Seul",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Aur%C3%A9lio_Miguel",
      "https://en.wikipedia.org/wiki/Aur%C3%A9lio_Miguel"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Aur%C3%A9lio_Miguel",
        "situacao": "ok",
        "texto": "Aurélio Fernández Miguel (São Paulo, 10 de março de 1964) é um judoca brasileiro.\n[…]\nFilho de imigrante catalães, foi campeão olímpico na categoria meio-pesado nos Jogos Olímpicos de Seul 1988 e medalha de bronze em Atlanta 1996.\n[…]\nObteve três medalhas do Campeonato Mundial de Judô (duas pratas em 1993 e 1997, e um bronze em 1987), e também obteve a medalha de ouro nos Jogos Pan-americanos de Indianápolis 1987 e a prata nos Jogos Pan-americanos de Caracas 1983.\n[…]\nEm 2013, foi acusado pelo Ministério Público do Estado de São Paulo (MP-SP) por participar em um suposto esquema de fraudes no Imposto sobre Serviços de Qualquer Natureza (ISS). Uma investigação aberta na Corregedoria da Câmara Municipal foi arquivada oito dias depois por falta de provas. Aurélio publicou uma carta aberta em seu site, se dizendo vítima de perseguição política:\n[…]\nAurélio decidiu não se candidatar a reeleição em 2016. Em entrevista para o UOL em 2019, revelou ter sofrido um infarto no ano de 2014 devido ao caso, diz ter sido investigado por sete anos e inocentado, mas considera que, apesar disso, sua \"reputação foi comprometida\".\n[…]\nAurélio Miguel no Sports Reference (em inglês)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Aur%C3%A9lio_Miguel",
        "situacao": "ok",
        "texto": "Aurélio Fernández Miguel (born 10 March 1964) is a Brazilian judoka and Olympic champion, and later politician. Among his best sporting achievements are his gold medal at the 1988 Summer Olympics in Seoul, and a bronze medal at the 1996 Summer Olympics in Atlanta.\n[…]\nAurélio Miguel was born on March 10, 1964, in São Paulo. Due to asthma and the insistence of his father, Aurélio Marin, Aurélio Fernández Miguel began training in judo at the age of four years. Initially, Aurélio disliked judo, and as a child, was terrified of the roughness of the competitions and tournaments. As time passed, he became fond of the sport, and eventually won his first title in 1972.\n[…]\nAurélio Miguel then won the Paulista tournament many times, and by the year 1980, he was recognized as the best judoka in the state. Afterwards, Miguel started to compete internationally, winning the silver medal at the 1983 Pan American Games in Caracas, Venezuela. He won the gold medal in the 1987 Pan American Games, again fighting in the under 95 kg category. In 1987 he also won a bronze medal at the World Judo Championships.\n[…]\nAurélio successfully ran for the city council of São Paulo in October 2004, representing the Partido Liberal party, being reelected for a second term in 2008 under the banner of the Republic Party.\n[…]\nMedia related to Aurélio Miguel at Wikimedia Commons\n[…]\nAurélio Miguel at the International Judo Federation\n[…]\nAurélio Miguel at JudoInside.com\n[…]\nAurélio Miguel at Olympics.com\n[…]\nAurélio Miguel at the Brazilian Olympic Committee (in Portuguese)\n[…]\nAurélio Miguel at Olympedia\n[…]\nAurélio Miguel at InterSportStats\n[…]\nAurélio Miguel at The-Sports.org\n[…]\nAurélio Miguel at the Câmara de Vereadores de São Paulo website (archived)"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Rafaela Silva",
      "descricao": "Judoca brasileira nascida em 1992, campeã mundial em 2013 e olímpica em 2016 na categoria até 57 kg."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "A judoca Rafaela Silva cresceu e começou a treinar em que comunidade carioca, que também dá nome a um filme famoso?",
    "resposta": "Cidade de Deus",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Rafaela_Silva",
      "https://en.wikipedia.org/wiki/Rafaela_Silva"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Rafaela_Silva",
        "situacao": "ok",
        "texto": "Rafaela Lopes Silva (Rio de Janeiro, 24 de abril de 1992) é uma judoca campeã olímpica e mundial brasileira.\n[…]\nRafaela Silva cresceu na favela carioca da Cidade de Deus. O primeiro esporte de que gostou foi o futebol, praticando contra outros meninos em um campo de terra próximo a sua casa, em Jacarepaguá. Preocupados com o tempo gasto brincando na rua, quando Rafaela tinha sete anos seus pais, Luiz Carlos e Zenilda Silva, a inscreveram junto da irmã, Raquel, para aulas de judô no Instituto Reação, recém montado na Cidade de Deus pelo ex-atleta Flávio Canto.\n[…]\n2013 foi um ano de glórias para a judoca. Em abril, conseguiu a medalha de ouro no Pan Americano de Judô. Em agosto, Rafaela entrou para a história do Judô brasileiro ao tornar-se a primeira brasileira a se sagrar campeã Mundial de Judô,\n[…]\nNo final de abril de 2017, Rafaela conquistou, com a Seleção Brasileira de judô feminino, a medalha de ouro no Pan-Americano realizado no Panamá.\n[…]\nRafaela também conquistou o ouro nos Jogos Pan-Americanos de 2019 realizados em Lima, no Peru em agosto, conquista esta que foi invalidada no mês seguinte. Depois da competição, em 9 de agosto, a atleta foi submetida a exame antidoping, que acusou resultado positivo para a substância fenoterol, que age como broncodilatador.\n[…]\nEm outubro de 2023, Rafaela conquistou a medalha de ouro nos Jogos Pan-americanos de Santiago na categoria até 57 quilos. Com esse título, ela se tornou a primeira judoca a conquistar os Jogos Pan-americanos, o campeonato mundial e Olimpíadas.\n[…]\nRafaela Silva em Olympics.com"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Rafaela_Silva",
        "situacao": "ok",
        "texto": "Rafaela Lopes Silva (born 24 April 1992) is a Brazilian judoka. She won gold medals at the World Judo Championships of 2013 and 2022 and at the 2016 Summer Olympics in the –57 kg weight division. Currently, she occupies the rank of graduation third sergeant in the Navy of Brazil and integrates the Center of Physical Education Admiral Nunes (CEFAN), the Military Sports Department.\n[…]\nRafaela Silva grew up in the Rio de Janeiro slum known as Cidade de Deus. The first sport she liked was football, practicing against other children in a dirt field near her home in Jacarepagua. Because they were concerned about fights and violence in the streets, when Rafaela was 7 years old her parents Luiz Carlos and Zenilda Silva signed her up, together with her sister, Raquel, for judo classes at the Institute Reaction, newly established at Cidade de Deus by the former athlete Flávio Canto.\n[…]\nBeing temporarily banned from judo, Silva opted to transition to mixed martial arts. She is currently training at PFL athlete Joilton Santos' gym Peregrino Fight Academy with UFC athlete Cláudio Silva and is expected to compete in the flyweight division.\n[…]\nIn an interview with Globo Esporte, Rafaela came out as lesbian. She spoke about her girlfriend Thamara Cezar, whom she met via judo.\n[…]\nMedia related to Rafaela Silva at Wikimedia Commons\n[…]\nRafaela Silva at the International Judo Federation\n[…]\nRafaela Silva at JudoInside.com\n[…]\nRafaela Silva at Olympics.com\n[…]\nRafaela Silva at the Brazilian Olympic Committee (in Portuguese)\n[…]\nRafaela Silva at Olympedia\n[…]\nRafaela Silva at InterSportStats\n[…]\nRafaela Silva at the Paris 2024 Summer Olympics (archived, alternate link)\n[…]\nRafaela Silva at the Lima 2019 Pan American Games (archived)\n[…]\nRafaela Silva on Instagram"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Rumble in the Jungle",
      "descricao": "Luta de 1974 entre Muhammad Ali e George Foreman pelo título mundial dos pesos-pesados, disputada no então Zaire."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em 1974, Muhammad Ali recuperou o cinturão dos pesos-pesados nocauteando George Foreman em que cidade africana?",
    "resposta": "Kinshasa",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Rumble_in_the_Jungle"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Rumble_in_the_Jungle",
        "situacao": "ok",
        "texto": "George Foreman vs. Muhammad Ali, billed as The Rumble in the Jungle, was a heavyweight championship boxing match on October 30, 1974, at the 20th of May Stadium in Kinshasa, Zaire (now Democratic Republic of the Congo), between undefeated and undisputed heavyweight champion George Foreman and  Muhammad Ali. The event had an attendance of 60,000 people and was one of the most watched televised even\n[…]\nThe fight was originally named, \"From Slaveship to Championship.\" This name was chosen by Don King to appeal to Black American audiences, who were a major target for travel packages from the United States to Zaire. The name was eventually changed to the \"Rumble in the Jungle\", after Ali created the phrase at a press conference. Foreman and Ali spent much of the middle of 1974 training in Zaire, getting acclimated to its tropical African climate.\n[…]\nIn 2012, The Daily Telegraph reported Foreman's declaration: \"We fought in 1974, that was a long time ago. After 1981 we became the best of friends. By 1984, we loved each other. I am not closer to anyone else in this life than I am to Muhammad Ali.\" Foreman also stated: \"Then, in 1981, a reporter came to my ranch and asked me: 'What happened in Africa, George?' I had to look him in the eye and say, 'I lost.\n[…]\nBig George Foreman (2023) is a biographical feature film that depicts The Rumble in the Jungle.\n[…]\nMuhammad Ali discusses The Rumble in the Jungle in his autobiography The Greatest: My Own Story.\n[…]\nGeorge Foreman and Joel Engel discuss The Rumble in the Jungle, the controversies, and the lasting impact it had on Foreman in his autobiography By George: The Autobiography of George Foreman.\n[…]\nOrchestre G.O. Malebo, a Zairean band of the 1970s, composed the song \"Foreman Ali Welcome to Kinshasa\" in honor of the event.\n[…]\nA theatrical recreation of the fight and its buildup, Rumble In The Jungle Rematch, ran in London in 2023."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/The_Rumble_in_the_Jungle",
        "situacao": "ok",
        "texto": "George Foreman vs. Muhammad Ali, chamado de The Rumble in the Jungle (em português:  A luta na floresta) foi uma famosa superluta de boxe que ocorreu em 30 de outubro de 1974, no Estádio 20 de Maio (atualmente chamado de Stade Tata Raphaël) em Quinxassa, no Zaire (atual República Democrática do Congo), entre o campeão invicto e indiscutível dos pesos pesados George Foreman e Muhammad Ali.\n[…]\nO público pagante na luta foi de 60 000 pessoas, e é estimado que quase 60% da população mundial ligou a televisão para ver um pouco da luta em pelo menos um momento. Ali venceu por nocaute no oitavo round. O evento foi parcialmente custeado pelo ditador congolês Mobutu Sese Seko, que desejava a publicidade que um evento tão importante para ajudar na imagem do seu regime.\n[…]\nFoi chamado de, discutivelmente, \"o maior evento esportivo do século XX\", com a luta sendo considerada uma grande \"zebra\", com Ali sendo considerado um \"azarão\" por uma margem de 4—1 contra o invícto Foreman. A luta é famosa pela introdução de Ali de sua tática rope-a-dope.\n[…]\nAlgumas fontes estimam que a luta foi assistida por até um bilhão de telespectadores em todo o mundo, tornando-se a transmissão de televisão ao vivo mais assistida do mundo na época. Isso incluiu um recorde estimado de cinquenta milhões de telespectadores assistindo a luta pelo pay-per-view ou circuito fechado de televisão. A luta arrecadou cerca de US$ 100 milhões de dólares (US$ 500 milhões ajustado pela inflação) em renda pelo mundo.\n[…]\nDécadas depois, a luta seria tema do documentário When We Were Kings, que acabou vencendo o Óscar.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Bruce Lee",
      "descricao": "Ator e artista marcial sino-americano, astro do cinema de ação de Hong Kong nos anos 1970."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Astro do cinema de Hong Kong, Bruce Lee nasceu em 1940 em que cidade americana?",
    "resposta": "São Francisco",
    "fonte": [
      "https://en.wikipedia.org/wiki/Bruce_Lee"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bruce_Lee",
        "situacao": "ok",
        "texto": "Bruce Lee (born Lee Jun-fan; November 27, 1940 – July 20, 1973) was a Hong Kong and American martial artist, actor, and filmmaker. He was the founder of Jeet Kune Do, a hybrid martial arts philosophy, which was formed from his experiences in unarmed fighting and self-defense—as well as eclectic, Zen Buddhist, and Taoist philosophies—as a new school of martial arts thought.\n[…]\nBorn in San Francisco and raised in Hong Kong, Lee was introduced to the Hong Kong film industry as a child actor by his father, Lee Hoi-chuen. Lee's early martial arts experience included Wing Chun (trained under Ip Man), tai chi, boxing (winning a Hong Kong boxing tournament), and frequent street fighting (neighborhood and rooftop fights). He moved to Seattle in 1959, enrolling at the University of Washington in 1961.\n[…]\nLee's birth name was Lee Jun-fan. His father, Lee Hoi-chuen, was a Cantonese opera singer based in Hong Kong. His mother, Grace Ho, was born in Shanghai, China. In December 1939, the couple traveled to California for an international opera tour in San Francisco's Chinatown neighborhood. Lee was born there on November 27, 1940. Due to the country's jus soli citizenship laws, his birth there allowed him to claim United States citizenship.\n[…]\nLee was trained in boxing, between 1956 and 1958, by Brother Edward, coach of the St. Francis Xavier's College boxing team. Lee went on to win the Hong Kong Schools boxing tournament in 1958 while scoring knockdowns against the previous champion Gary Elms in the final. After moving to the United States, Lee was heavily influenced by heavyweight boxing champion Muhammad Ali, whose footwork he studied and incorporated into his style in the 1960s.\n[…]\nIn 2024, there was a proposal to erect a statue of Bruce Lee in San Francisco. Lee's daughter is in favor, stating, \"the Bay Area is a very rich and vital part of our legacy.\""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bruce_Lee",
        "situacao": "ok",
        "texto": "Lee Jun-fan (chinês: 李振藩; São Francisco, 27 de novembro de 1940 – Kowloon, 20 de julho de 1973), conhecido mundialmente como Bruce Lee, foi um artista marcial, ator, diretor de cinema, produtor cinematográfico, roteirista, instrutor de artes marciais, filósofo e autor sino-americano.\n[…]\nFilho da estrela de ópera cantonesa Lee Hoi-chuen, Bruce Lee nasceu na área de Chinatown, em São Francisco, nos Estados Unidos. Seus pais eram de Hong Kong (então, colônia britânica), por isso foi criado com sua família lá, em Kowloon. Ele foi apresentado à indústria cinematográfica por seu pai e apareceu em vários filmes como ator infantil.\n[…]\nNo ano e na hora do lendário dragão chinês, Bruce Lee nascia no Hospital Chinês de Chinatown, em São Francisco, na Califórnia, durante uma turnê de ópera chinesa, da qual seus pais eram integrantes. Voltou para Hong Kong (colônia britânica até 1997) com apenas três meses de idade, cresceu e viveu lá até o fim de sua adolescência. Seu pai se chamava Lee Hoi-chuen, e sua mãe, Grace Ho. Bruce foi o quarto de cinco filhos.\n[…]\nO pai de Bruce, Lee Hoi-cuen, foi um dos maiores intérpretes de ópera cantonesa e ator do cinema chinês. Completou um ano de turnê com a ópera cantonesa nas vésperas da invasão japonesa em Hong Kong durante a Segunda Guerra Mundial. Lee Hoi-chuen ficou em turnê nos Estados Unidos por muitos anos, realizando apresentações em inúmeras comunidades chinesas. Lee Hoi-chuen decidiu voltar para Hong Kong depois que sua esposa deu à luz Bruce, em 1940.\n[…]\nSe a situação fosse inversa, e uma estrela americana viesse para Hong Kong, e eu fosse o homem com o dinheiro, eu teria minhas próprias preocupações sobre se a aceitação estaria lá\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Robson Conceição",
      "descricao": "Boxeador baiano, campeão olímpico na categoria peso-leve nos Jogos do Rio de Janeiro."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "O baiano Robson Conceição deu ao Brasil o primeiro ouro olímpico do boxe em que ano?",
    "resposta": "2016",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Robson_Concei%C3%A7%C3%A3o",
      "https://en.wikipedia.org/wiki/Robson_Concei%C3%A7%C3%A3o"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Robson_Concei%C3%A7%C3%A3o",
        "situacao": "ok",
        "texto": "Robson Donato Conceição (Salvador, 25 de outubro de 1988) é um pugilista brasileiro. Foi campeão olímpico da categoria peso-leve (até 60 kg) e é o atual campeão superpena (até 59 kg) pelo Conselho Mundial de Boxe (CMB).\n[…]\nGanhou medalha de ouro na categoria até 60 kg nos Jogos Olímpicos do Rio de Janeiro de 2016, conquistando o primeiro ouro olímpico do boxe brasileiro.\n[…]\nQuatro anos depois, já mais experiente e com medalha no Pan de Guadalajara, no México, participou da edição seguinte, nos Jogos Olímpicos de Londres de 2012, porém também foi derrotado na estreia. Apesar das derrotas precoces nas duas Olimpíadas anteriores, Robson é um dos principais nomes do boxe brasileiro.\n[…]\nRobson foi eleito o melhor boxeador do Brasil pelo Comitê Olímpico nos anos de 2014 e 2015. Também foi campeão Mundial Militar em 2011 e escolhido como o pugilista do mês de dezembro de 2015 pela Associação Internacional de Boxe.\n[…]\nEm 2016, Conceição foi o primeiro campeão olímpico da história do boxe brasileiro, ganhou medalha de ouro na categoria dos pesos-leves (até 60 quilos) nos Jogos Olímpicos do Rio de Janeiro de 2016, derrotando o francês Sofiane Oumiha por decisão unânime dos jurados (30-27, 29-28 e 29-28) e conquistando o primeiro ouro olímpico do boxe brasileiro.\n[…]\nRobson integra o programa de desenvolvimento esportivo das Forças Armadas do Brasil e tem a graduação de terceiro-sargento da Marinha.\n[…]\nApós a Olimpíada, Robson Conceição revelou que abandonaria o boxe amador. Assinou com a promotora Top Rank, e em sua estreia como pugilista profissional, em novembro, derrotou o norte-americano Clay Burns em Las Vegas.\n[…]\n2016\n[…]\n«Perfil de Robson Conceição» (em inglês). arquivado do sítio Sports-Reference.com"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Robson_Concei%C3%A7%C3%A3o",
        "situacao": "ok",
        "texto": "Robson Donato Conceição ( kon-say-SOWN; Portuguese pronunciation: [kõsejˈsɐ̃w̃]; born 25 October 1988) is a Brazilian professional boxer who has held the World Boxing Council (WBC) super featherweight title in 2024. As an amateur, he became the first Brazilian boxer to win an Olympic gold medal at the 2016 Olympics.\n[…]\nIn the 2012 Summer Olympics in London, Conceição again lost his first match. Hoping to take part in the 2016 Summer Olympics that would be hosted in Brazil, Conceição did not turn professional, instead signing with the Brazilian Navy to gain the scholarship and training facilities reserved for military sportspersons. Conceição won a silver and a bronze medal at the 2013 and 2015 tournaments, the latter guaranteeing him the Olympic spot.\n[…]\nAfter the 2016 Olympics, Conceição signed a professional promotion contract with Top Rank. He finished his amateur career with a record of 405–15.\n[…]\nConceição's professional debut happened on November 5, 2016 in Las Vegas, as one of the undercards in the Manny Pacquiao vs. Jessie Vargas event. He won the fight by unanimous decision, with two scorecards of 60–54 and one scorecard of 60–53. Conceição next faced Aaron Ely on January 27, 2017. He won the fight by a second-round knockout, the first stoppage victory of his career. Conceição was then booked to face the over-matched Aaron Hollis on March 17, 2017.\n[…]\nConceição challenged IBF lightweight champion Raymond Muratalla at The Theater at Virgin Hotels in Las Vegas on August 1, 2026, losing by unanimous decision.\n[…]\nBoxing record for Robson Conceição from BoxRec (registration required)\n[…]\nRobson Conceição at Box.Live\n[…]\nRobson Conceição at Olympedia\n[…]\nRobson Conceição at Olympics.com\n[…]\nRobson Conceição at the Comitê Olímpico do Brasil  (in Portuguese)"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Boxe nos Jogos Olímpicos de 2012",
      "descricao": "Torneio de boxe dos Jogos Olímpicos de Londres, em 2012, o primeiro com provas femininas."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Depois de mais de um século de boxe só masculino, em que edição dos Jogos Olímpicos as mulheres estrearam no ringue?",
    "resposta": "Londres 2012",
    "fonte": [
      "https://en.wikipedia.org/wiki/Boxing_at_the_2012_Summer_Olympics"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Boxing_at_the_2012_Summer_Olympics",
        "situacao": "ok",
        "texto": "The boxing tournaments at the 2012 Olympic Games in London were held from 28 July to 12 August at the ExCeL Exhibition Centre.\n[…]\nA total of 286 competitors took part in 13 events. For the first time at an Olympic Games, women competed in three boxing events. The first Olympic gold medal in women's boxing was awarded to Nicola Adams from Great Britain, who won the flyweight tournament on 9 August 2012.\n[…]\n2011 World Amateur Boxing Championships – Baku, Azerbaijan, 16 September – 1 October, in which 10 athletes for all categories, six athletes for the heavyweight and super heavyweight categories, qualified for the Olympics.\n[…]\n2012 AIBA Women's World Boxing Championships – Qinhuangdao, China, 9–22 May 2012\n[…]\nContinental Olympic qualifying events during 2012\n[…]\nThere were two sessions of competition on most days of the 2012 Olympics Boxing program, an afternoon session (A), starting at 13:30 BST (except for 9 August when it started at 16:30 BST), and an evening session (E), starting at 20:30 BST.\n[…]\nSubsequently, the AIBA rejected any allegations of corruption, stating “Any suggestion that the loan was made in return for promises of gold medals at the 2012 Olympics is preposterous and utterly untrue\".\n[…]\nThere were several events in boxing in the 2012 Summer Olympics:\n[…]\nMedia related to Boxing at the 2012 Summer Olympics at Wikimedia Commons\n[…]\nBoxing at the 2012 Summer Olympics. London2012.com. at the UK Government Web Archive (archived 28 February 2013)\n[…]\nOfficial results book – Boxing. London2012.com. at the Wayback Machine (archived 11 May 2013)\n[…]\nBoxing at the 2012 Summer Olympics at SR/Olympics (archived)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Boxe_nos_Jogos_Ol%C3%ADmpicos_de_Ver%C3%A3o_de_2012",
        "situacao": "ok",
        "texto": "As competições de boxe nos Jogos Olímpicos de Verão de 2012 foram realizadas no ExCeL em Londres, entre 28 de julho e 12 de agosto. Foram disputados treze eventos, sendo dez masculinos e três femininos, determinadas por categorias de peso. Pela primeira vez em Olimpíadas foram incluídas categorias do boxe feminino.\n[…]\nMasculino\n[…]\n«Pagina oficial da Federação Internacional de Boxe Amador (AIBA)» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Pancrácio",
      "descricao": "Esporte de combate dos Jogos Olímpicos da Grécia Antiga, quase sem restrições de golpes."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "O pancrácio, luta dos Jogos Olímpicos da Grécia Antiga, combinava técnicas de que duas modalidades?",
    "resposta": "Boxe e luta livre",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pankration"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pankration",
        "situacao": "ok",
        "texto": "Pankration (; Ancient Greek: παγκράτιον [paŋkráti.on]) was an unarmed combat sport introduced into the Greek Olympic Games in 648 BC. The athletes used boxing and wrestling techniques but also others, such as kicking, holds, joint locks, and chokes on the ground, making it similar to modern mixed martial arts. The term comes from the Ancient Greek word παγκράτιον (pankrátion), meaning \"all of powe\n[…]\nPankration, as practiced in historical antiquity, was an athletic event that combined techniques of both boxing (pygmē/pygmachia – πυγμή/πυγμαχία) and wrestling (palē – πάλη), as well as additional elements, such as the use of strikes with the legs, to create a broad fighting sport similar to today's mixed martial arts competitions. There is evidence that, although knockouts were common, most pankration competitions were decided on the basis of submission (yielding to a submission or joint lock).\n[…]\nBy the Imperial Period, the Romans had adopted the Greek combat sport (spelled in Latin as pancratium) into their Games. In 393 AD, the pankration, along with gladiatorial combat and all pagan festivals, was abolished by edict by the Christian Byzantine Emperor Theodosius I.\n[…]\nFrom 2010-2025, modern pankration had a ruleset resembling amateur MMA, divided into two rulesets:\n[…]\nThe change was introduced in conjunction with a revised ruleset and the creation of UWW's first Senior Amateur MMA World Championships, held in Novi Sad, Serbia, in October 2025. The 2025 Pankration World Championships in Loutraki, Greece, were consequently restricted to U15 and U17 competitors. UWW's Amateur MMA rules describe the discipline as being rooted in ancient Pankration and as an attempt to reconnect modern mixed martial arts with its ancient Olympic heritage.\n[…]\n\"Pankration\" or \"Pancration\" matches – Perseus Digital Library, Tufts University\n[…]\nInternational Federation of Pankration Athlima"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pancr%C3%A1cio",
        "situacao": "ok",
        "texto": "Pancrácio (em grego: Παγκράτιον; romaniz.: Pankrátion) foi uma antiga arte marcial e antigo desporto de combate sem armas, que segundo a mitologia grega teve início com os heróis Héracles e Teseu.[carece de fontes]?Uma mistura de boxe clássico e luta olímpica com golpes e técnicas de lutas que incluem socos, chutes, cotoveladas, joelhadas, cabeçadas, estrangulamentos, agarramentos, quedas, arremes\n[…]\nA origem do pancrácio o credencia como o “tataravô do MMA”. Suas regras foram desenvolvidas a partir do wrestling (luta livre) e do pugilato (antecedente do boxe), acrescidas de outras ferramentas que lhe deram um tom mais agressivo e menos elegante que suas artes de origem.\n[…]\nAntenor, de Atenas ou de Mileto, foi um dos grandes vencedores do pancrácio, na 118.a olimpíada (308 a.C.).\n[…]\nNa 142.a olimpíada (212 a.C.), Capro de Élida venceu tanto o pancrácio quanto o pále (luta), assim como Héracles havia feito, e foi coroado como o segundo depois de Héracles.\n[…]\nNa 156.a olimpíada (156 a.C.), Aristômenes de Rodes vence o pancrácio e o pále, sendo o terceiro, após Héracles, a vencer as duas competições. O quarto foi Protófanes da Magnésia no Meandro, que venceu na 172.a olimpíada (92 a.C.).\n[…]\nNa 178.a olimpíada (68 a.C.), Estratônico de Alexandria, filho de Corrago, venceu o pancrácio e o pále, o quinto depois de Héracles. Nos jogos Nemeus, ele havia vencido quatro coroas no mesmo dia, competindo nu nas competições de crianças e jovens, mas, como ele havia vencido com o favor dos seus amigos e dos reis, foi desqualificado.\n[…]\nO sexto a vencer o pancrácio e o pále, depois de Héracles, foi Marião de Alexandria, filho e Marião, na 182.a olimpíada (52 a.C.). O sétimo foi Arísteas de Estratoniceia ou Menandro, na 198.a olimpíada (13 d.C.).\n[…]\nApenas oito homens venceram tanto o pancrácio e o pále. O último foi Nicóstrato de Egas, na 204.a olimpíada (37).\n[…]\nLuta greco-romana",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Shinai",
      "descricao": "Espada de treino e competição usada no kendô, a esgrima japonesa."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "No kendô, a esgrima japonesa, a espada usada em treinos e combates, chamada shinai, é feita tradicionalmente de quê?",
    "resposta": "Bambu",
    "distratores": [
      "Carvalho",
      "Aço sem fio",
      "Couro prensado"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Shinai"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Shinai",
        "situacao": "ok",
        "texto": "A shinai (竹刀) is a Japanese sword typically made of bamboo used for practice and competition in kendō. Shinai are also used in other martial arts, but may be styled differently from kendō shinai, and represented with different characters. The light, soft wood used in a shinai distinguishes it from other wooden swords such as a bokuto (木刀), usually called a bokken (木剣) outside Japan, which is gener\n[…]\nIn kendo, it is most common to use a single shinai, sometimes called ittō (一刀) style. Some kendōka choose to use two shinai. This kendō style is usually called ni-tō (二刀), a style that has its roots in the two-sword schools of swordsmanship such as Hyōhō Niten Ichi-ryū. A ni-tō combatant uses a long shinai called the daitō (大刀), which is usually held in the right hand, and a shorter shinai, called the shōtō (小刀), which is usually held in the left hand.\n[…]\nIn kendo competitions that follow the FIK rules, there are regulated weights and lengths for the use of shinai.\n[…]\nShinai are weighed complete with leather fittings, but without tsuba or tsuba-dome. The full length is measured. Maximum diameter of the tsuba is 9cm.\n[…]\nThe ancestor of the modern kendo shinai is the fukuro-shinai (袋竹刀), which is still in use in koryū kenjutsu. This is a length of bamboo, split multiple times on one end, and covered by a leather sleeve. This explains the name fukuro, which means bag, sack or pouch. Sometimes the older and rarer kanji tō (韜) is used, but has the same meaning as fukuro.\n[…]\nShinai are commonly used as a weapon in professional wrestling, where they are often referred to as kendo sticks or Singapore canes. Wrestlers are typically struck across the back, stomach, legs and arms, though some are struck in the head or face, sometimes depending upon the wrestling promotion where the match is taking place.\n[…]\nMedia related to Kendo shinai at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Shinai",
        "situacao": "ok",
        "texto": "Shinai é uma espada de bambu, feita para se poder praticar artes marcais como Kendo e Kenjutsu, sem causar grandes lesões ao adversário. É feita com quatro segmentos de bambu unidos por uma tira de couro, para permitir flexibilidade e absorção do impacto do golpe. Também conhecida como Singapore Cane no mundo da luta livre, a Shinai sempre foi usada e característica de Sandman. Essa arma oriental ",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Peso-mosca",
      "descricao": "Categoria de peso do boxe para lutadores leves, abaixo do peso-galo."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Qual destas categorias do boxe reúne os lutadores mais leves?",
    "resposta": "Peso-mosca",
    "distratores": [
      "Peso-galo",
      "Peso-pena",
      "Peso-leve"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Flyweight",
      "https://en.wikipedia.org/wiki/Bantamweight"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Flyweight",
        "situacao": "ok",
        "texto": "Flyweight is a weight class in combat sports.\n[…]\nIn kickboxing, a flyweight fighter generally weighs 53 kg (116 lb) or under. The International Kickboxing Federation (IKF) Flyweight division (professional and amateur) is 112.1 lb. – 117 lb. or 50.95 kg – 53.18 kg.\n[…]\nIn ONE Championship, the flyweight division is up to 61.2 kg (135 lb).\n[…]\nThe limit for flyweight generally differs among promotions in bare knuckle boxing:\n[…]\nIn Bare Knuckle Fighting Championship, the flyweight division has an upper limit of 125 lb (57 kg).\n[…]\nIn BKB™, the flyweight division has an upper limit of 70 kg (154 lb).\n[…]\nThe flyweight division in mixed martial arts – as defined by the Nevada State Athletic Commission combat sports doctrine and by the Association of Boxing Commissions – groups together all competitors 125 lb (57 kg) and below. It sits between Strawweight (106 lb-115 lb) and Bantamweight (126 lb-135lb). The weight limit for Women's MMA is also 125 lb (56.7 kg).\n[…]\nThe flyweight division in mixed martial arts refers to a number of different weight classes:\n[…]\nThe UFC's flyweight division, which groups competitors within 116 to 125 lb (53 to 57 kg)\n[…]\nThe Pancrase light flyweight division with an upper limit of 54 kg (119 lb)\n[…]\nThe Shooto flyweight division with an upper limit of 114.6 lb (52 kg)\n[…]\nThe ONE Championship's flyweight division, with upper limit at 61.2 kg (134.9 lb)\n[…]\nThe Road FC's flyweight division, with upper limit at 125 lb (57 kg)\n[…]\nList of current MMA Flyweight Champions\n[…]\nList of Road FC Flyweight Champions\n[…]\nList of current MMA Women's Flyweight Champions"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Bantamweight",
        "situacao": "ok",
        "texto": "Bantamweight is a weight class in combat sports and weightlifting. For boxing, the range is above 115 lb (52.2 kg) and up to 118 lb (53.5 kg). In kickboxing, a bantamweight fighter generally weighs between 53 and 55 kilograms (117 and 121 lb). In MMA, bantamweight is 126–135 lb (57.2–61.2 kg)."
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Nocaute",
      "descricao": "Fim de uma luta quando um lutador derrubado não se levanta antes do fim da contagem do árbitro."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "No boxe, até quanto o árbitro conta antes de declarar nocauteado um lutador que caiu?",
    "resposta": "Dez",
    "fonte": [
      "https://en.wikipedia.org/wiki/Knockout"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Knockout",
        "situacao": "ok",
        "texto": "A knockout (abbreviated to KO or K.O.) is a fight-ending, winning criterion in several full-contact combat sports, such as boxing, kickboxing, Muay Thai, mixed martial arts, karate, some forms of taekwondo and other sports involving striking, as well as fighting-based video games. A full knockout is considered any legal strike or combination thereof that renders an opponent unable to continue figh\n[…]\nA technical knockout (TKO or T.K.O.), stoppage, or referee stopped contest (RSC) is declared when the referee decides during a round that a fighter cannot safely continue the match for any reason. Certain sanctioning bodies also allow the official attending physician at ringside to stop the fight as well.\n[…]\nIn amateur boxing, and in many regions professionally, including championship fights sanctioned by the World Boxing Association (WBA), a TKO is declared when a fighter is knocked down three times in one round (called an \"automatic knockout\" in WBA rules). Furthermore, in amateur boxing, a boxer automatically wins by TKO if his opponent is knocked down four times in an entire match.\n[…]\nIn amateur boxing, a double knockout result is determined based on the round of competition. In all contests except the final, both fighters are declared to have lost the contest and are eliminated, since a boxer is suspended 30-540 days for a knockout under boxing regulations. In the final, where there must be a winner, the contest ends as if the bell sounded at the end of the final round, and the round is scored, with the winner determined by points.\n[…]\nA fighter who becomes unconscious from a strike with sufficient knockout power is referred to as having been knocked out or KO'd (kay-ohd). Losing balance without losing consciousness is referred to as being knocked down (\"down but not out\")."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Nocaute",
        "situacao": "ok",
        "texto": "Um nocaute (do inglês knockout, também chamado de K.O.) é um critério de vitória e encerramento de combate válido em vários esportes de combate de contato completo, tais como pugilismo, kickboxing, muay thai, artes marciais mistas, caratê e outros esportes envolvendo golpe. É considerado um nocaute completo qualquer golpe ou combinação legal de golpes que torne o oponente incapaz de continuar luta\n[…]\nEm competições de artes marciais mistas, não há contagem dada após a queda, pois o esporte permite submissão. Se um lutador é derrubado e perde a consciência, ou não se defende imediatamente, ele é declarado como nocauteado.\n[…]\nUm lutador que sofre de concussão e perde a consciência em um ataque com poder de nocaute suficiente é dito por ter sido nocauteado (knocked out) ou \"queioado\" (kayoed, KO'd). Perder o equilíbrio sem perder a consciência é dito por ser uma derrubada (\"queda sem desligamento\"). Golpes repetidos à cabeça causam danos cerebrais graduais e permanentes. Em casos graves, pode ocasionar em AVCs ou paralisias. Por causa disso, vários médicos aconselham a não praticar esportes que envolvam nocaute.\n[…]\nLutadores que perdem por nocaute (pela contagem de dez ou por nocaute técnico) são suspensos automaticamente por 30 dias; três meses caso seja o segundo nocaute dentro de três meses; ou um ano se for o terceiro nocaute em um ano. Em competições AIBA, isto não se aplica caso o lutador seja desclassificado por nocaute técnico quando o lutador estiver atrás em mais de 20 pontos – 15 para níveis júnior – em qualquer assalto, exceto o último.\n[…]\nUma \"derrubada rápida\" é uma derrubada na qual o lutador atinge a lona, mas se recupera rapidamente, antes mesmo de a contagem iniciar.\n[…]\nEstatísticas de nocaute de Mike Tyson, Wladimir Klitschko, Earnie Shavers, George Foreman e outros pugilistas de peso-pesado (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  }
]

---

# MANIFESTO

# Manifesto de Perguntas — Mestre2

> **Versão preliminar 0.42 — 2026-10-02**
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
