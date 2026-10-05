Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Anime e Mangá** (tema **Entretenimento**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "One Piece",
      "descricao": "Mangá e anime sobre o pirata Monkey D. Luffy e sua tripulação, publicado desde 1997."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Publicado desde 1997 na revista Shonen Jump, o mangá One Piece, sobre o pirata Luffy, foi criado por quem?",
    "resposta": "Eiichiro Oda",
    "fonte": [
      "https://pt.wikipedia.org/wiki/One_Piece",
      "https://en.wikipedia.org/wiki/Eiichiro_Oda"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/One_Piece",
        "situacao": "ok",
        "texto": "One Piece (ワンピース, Wan Pīsu) é uma série de mangá escrita e ilustrada por Eiichiro Oda. Os capítulos têm sido publicados na revista Weekly Shōnen Jump, tendo sua primeira publicação em 22 de julho de 1997, com os capítulos compilados e publicados em 111 volumes tankōbon pela editora Shueisha até março de 2025. One Piece segue as aventuras de Monkey D. Luffy, um jovem cujo corpo ganhou as propriedad\n[…]\nEscrito e ilustrado por Eiichiro Oda, One Piece tem sido serializado pela Weekly Shōnen Jump desde 22 de julho de 1997. Os capítulos foram compilados em volumes tankōbon pela Shueisha desde 24 de dezembro de 1997. No total, há 1148 capítulos e 111 volumes tankōbon. Oda, em parceria com Akira Toriyama, criou um crossover de One Piece e Dragon Ball, de Toriyama.\n[…]\nO mangá de One Piece foi licenciado em inglês pela Viz Media, publicando em capítulos na revista Shonen Jump, desde o lançamento da mesma em novembro de 2002, e em volumes encadernados desde 30 de junho de 2003. Em 2009, Viz anunciou o lançamento de cinco volumes por mês durante a primeira metade de 2010 para alcançar a serialização no Japão.\n[…]\nApós a descontinuação da Shonen Jump, a Viz começou a lançar One Piece capítulo a capítulo em seu sucessor digital Weekly Shonen Jump em 30 de janeiro de 2012. No Reino Unido, os volumes foram publicados pela Gollancz Manga, começando em março de 2006, até a Viz Media assumir o controle depois do décimo quarto volume. Na Austrália e Nova Zelândia, os volumes em inglês foram distribuídos pela Madman Entertainment desde 10 de novembro de 2008.\n[…]\nSasada, Hiroko (dezembro de 2011). «The Otherness of Heroes: The Shonen as Outsider and Altruist in Oda Eiichiro's One Piece». International Research in Children's Literature. 4 (2): 192–207. doi:10.3366/ircl.2011.0026\n[…]\n«Sítio oficial do mangá». da Weekly Shōnen Jump (em japonês)\n[…]\nOne Piece (mangá) na enciclopédia do Anime News Network (em inglês)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Eiichiro_Oda",
        "situacao": "ok",
        "texto": "Eiichiro Oda (Japanese: 尾田 栄一郎, Hepburn: Oda Eiichirō; born January 1, 1975) is a Japanese manga artist and the creator of the series One Piece, the best-selling manga in history and the best-selling comic series printed in volume. With more than 600 million tankōbon copies of One Piece in circulation worldwide, Oda is one of the best-selling fiction authors. The series' popularity resulted in Oda\n[…]\nEiichiro Oda was born on January 1, 1975, in Kumamoto, Japan. At the age of four he resolved to become a manga artist in order to avoid having to get a \"real job\". His biggest influence was Akira Toriyama and his series Dragon Ball. He recalls that his interest in pirates was probably sparked by the popular TV animation series titled Vicky the Viking.\n[…]\nDuring this time, Oda drew two pirate-themed one-shot stories called \"Romance Dawn\", which were published in Akamaru Jump and Weekly Shōnen Jump respectively in late 1996. \"Romance Dawn\" featured Monkey D. Luffy as the protagonist, who then became the protagonist of One Piece.\n[…]\nIn 1997, One Piece began serialization in Weekly Shōnen Jump and has become not only one of the most popular manga in Japan, but the best-selling manga series of all time.\n[…]\nSince November 7, 2004, Eiichiro Oda has been married to Chiaki Inaba, a former model, actress and tarento. Oda met her in December 2003 during a Jump Festa 2004 where Chiaki Inaba played the role of Nami during the stage show \"One Piece Spectacle Stage\". Oda and Inaba have two daughters, one born in 2005 and the other in 2009.\n[…]\nEiichiro Oda has long been a supporter of earthquake-stricken areas, writing supportive messages, contributing art for local products, and participating in the ONE PIECE Kumamoto Revival Project.\n[…]\nWanted! Eiichiro Oda Short Stories (WANTED! 尾田栄一郎短編集, Oda Eiichirō Tanpenshū; collection of previous one-shots, 1998)\n[…]\nEiichiro Oda  at Anime News Network's encyclopedia"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Ataque dos Titãs",
      "descricao": "Mangá e anime japonês sobre a humanidade cercada por gigantes devoradores de gente, chamado Shingeki no Kyojin no original."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Quem criou o mangá Ataque dos Titãs, em que a humanidade vive cercada por gigantes que devoram gente?",
    "resposta": "Hajime Isayama",
    "fonte": [
      "https://en.wikipedia.org/wiki/Attack_on_Titan",
      "https://en.wikipedia.org/wiki/Hajime_Isayama"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Attack_on_Titan",
        "situacao": "ok",
        "texto": "Attack on Titan (Japanese: 進撃の巨人, Hepburn: Shingeki no Kyojin; lit. 'The Advancing Giant') is a Japanese manga series written and illustrated by Hajime Isayama. Set in a world where humanity is forced to live in cities surrounded by three enormous walls that protect them from gigantic man-eating humanoids referred to as Titans, the story follows Eren Yeager, an adolescent boy who vows to extermina\n[…]\nHajime Isayama created a 65-page one-shot version of Attack on Titan in 2006. Originally, he offered his work to the Weekly Shōnen Jump department at Shueisha, where the editor of the department asked him to modify a few details in the story and artwork, which Isayama refused. He then brought the manga to the Weekly Shōnen Magazine department at Kodansha. Before serialization began in 2009, he had already thought of ideas for plot twists, although they were fleshed out as the series progressed.\n[…]\nAttack on Titan is written and illustrated by Hajime Isayama. The series began in the first-ever issue of Kodansha's monthly publication Bessatsu Shōnen Magazine, released on September 9, 2009. The manga was finished after an eleven-year publication run with the release of its 139th chapter on April 9, 2021. On November 8, 2020, it was announced that the manga would receive a full color serialization.\n[…]\nCapcom announced that they were developing an Attack on Titan arcade game named Shingeki no Kyojin: Team Battle, but the game was cancelled in 2018.\n[…]\nManga artist Makoto Yukimura, creator of Vinland Saga, stated in an interview that he admired Isayama for his work on Attack on Titan, due to his ability to handle the entire plot until the end, especially from the 20th volume. As a result, he considered it one of his favorite manga during its serialization and recommended more people to read it.\n[…]\nAttack on Titan at Kodansha Comics\n[…]\nAttack on Titan (manga) at Anime News Network's encyclopedia"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Hajime_Isayama",
        "situacao": "ok",
        "texto": "Hajime Isayama (Japanese: 諫山 創, Hepburn: Isayama Hajime; born August 29, 1986) is a Japanese manga artist. His first series, Attack on Titan (2009–2021), became one of the best-selling manga series of all time with 140 million copies in circulation as of November 2023. He was awarded the Kodansha Manga Award in 2011, a Harvey Award in 2014, and was honored with the Fauve Spécial award at the 50th \n[…]\nIsayama was born in Ōyama, Ōita Prefecture, Japan, which is now part of Hita City. He was attending Hita Rinko Senior High School when he began submitting manga works to contests. After graduating, he matriculated in the manga design program of the arts department at Kyushu Designer Gakuen. In 2006, he applied for the Magazine Grand Prix known as MGP promoted by Kodansha Ltd. and a short version of Attack on Titan (Shingeki no Kyojin) was given the \"Fine Work\" award.\n[…]\nAttack on Titan is released in English by Kodansha USA and has inspired five spin-off manga series, three light novel series, a televised anime adaptation, several visual novels and video games, and a two part live-action film. The resort Bungo Oyama Hibiki no Sato in his hometown of Ōyama, ran a free exhibit displaying copies of Isayama's manuscripts for the manga in 2013.\n[…]\nA special Attack on Titan event was held in Hita on November 1, 2014, with Isayama and  approximately 2,500 spectators attending. The following day, Isayama gave a speech at the Patria Hita cultural hall and was named the Tourism Ambassador of Hita by the city's mayor Keisuke Harada.\n[…]\nIn November 2022, Isayama made his first-ever appearance in the United States at Anime NYC, an anime convention in New York City.\n[…]\nHajime Isayama official blog\n[…]\nHajime Isayama at IMDb\n[…]\nHajime Isayama at Rotten Tomatoes\n[…]\nHajime Isayama  at Anime News Network's encyclopedia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Shingeki_no_Kyojin",
        "situacao": "ok",
        "texto": "Shingeki no Kyojin (japonês: 進撃の巨人; lit. \"O Gigante de Avanço\"), também conhecido pelo título em inglês Attack on Titan, e em português Ataque dos Titãs, é uma série de mangá escrita e ilustrada por Hajime Isayama.\n[…]\nHajime Isayama disse que queria criar uma história com criaturas gigantes devoradoras de humanos que possuem uma aparência crua e grotesca que transmitisse um sentimento de insegurança. A ideia original vem tanto de uma imagem do mangá Jigoku Sensei Nūbē que mostrava a Mona Lisa canibal comendo pessoas, quanto no encontro com um cliente bêbado que o agarrou pela camisa em um cyber café em que o autor trabalhou.\n[…]\nNo Brasil, o mangá foi publicado como Ataque dos Titãs pela editora Panini Comics entre 22 de novembro de 2013 e 29 de dezembro de 2021.\n[…]\nApós esse evento, Tetsuro Araki, Tetsuya Kinoshita e o autor Hajime Isayama falaram que queriam adaptar o resto do mangá. Em outubro de 2014, George Wada, um dos produtores do anime, anunciou que uma segunda temporada estava em pré-produção. Na primeira exibição do filme de animação Shingeki no Kyojin zenpen ~Guren no yumiya~ em novembro de 2014 no Japão, com a presença dos seiyū dos personagens principais, foi anunciado a segunda temporada com previsão de ser lançada em 2016.\n[…]\nNo entanto, a série também atraiu críticas, a revista sul-coreana Electronic Times acusou Shingeki no Kyojin de passar uma mensagem militarista que serviu como inclinações políticas do primeiro-ministro japonês, Shinzō Abe. Já o ativista social de Hong Kong Wong Yeung-tat elogiou a série de Hajime Isayama e a versatilidade de Shingeki no Kyojin, que abre várias interpretações aos leitores.\n[…]\nShingeki no Kyojin (mangá) na enciclopédia do Anime News Network (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Ataque dos Titãs",
      "descricao": "Mangá e anime japonês sobre a humanidade cercada por gigantes devoradores de gente, chamado Shingeki no Kyojin no original."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Em Ataque dos Titãs, a humanidade sobrevive aos gigantes protegida por quantas grandes muralhas?",
    "resposta": "Três",
    "fonte": [
      "https://en.wikipedia.org/wiki/Attack_on_Titan"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Attack_on_Titan",
        "situacao": "ok",
        "texto": "Attack on Titan (Japanese: 進撃の巨人, Hepburn: Shingeki no Kyojin; lit. 'The Advancing Giant') is a Japanese manga series written and illustrated by Hajime Isayama. Set in a world where humanity is forced to live in cities surrounded by three enormous walls that protect them from gigantic man-eating humanoids referred to as Titans, the story follows Eren Yeager, an adolescent boy who vows to extermina\n[…]\nAn action game, titled Attack on Titan: Humanity in Chains (進撃の巨人 ～反撃の翼～, Shingeki no Kyojin ~Hangeki no Tsubasa~; subtitle lit. \"Wings of Counterattack\"), was developed by Spike Chunsoft for the Nintendo 3DS and released in Japan on December 5, 2013, North America on May 12, 2015, and Europe on July 2, 2015.\n[…]\nA smartphone social game, titled Attack on Titan: Howl Toward Freedom (Shingeki no Kyojin ~Jiyū e no Hōkō~) is in development by Mobage for iOS and Android platforms. In the game, players play as a character who has been exiled from Wall Rose. Players must build and fortify a town outside the wall and expand it by manufacturing items as well as using Titans and exploiting resources from other players.\n[…]\nCapcom announced that they were developing an Attack on Titan arcade game named Shingeki no Kyojin: Team Battle, but the game was cancelled in 2018.\n[…]\nA live-action miniseries, titled Shingeki no Kyojin: Hangeki no Noroshi (進撃の巨人 反撃の狼煙; \"Attack on Titan: Counter Rockets\") and utilizing the same actors as the films, started streaming on NTT DoCoMo's online-video service dTV on August 15, 2015. The three-episode series focuses on Zoë Hange and her research of the Titans, as well as how the Vertical Maneuvering Equipment was created.\n[…]\nAttack on Titan characters have been co-opted as symbols by the Nordic Resistance Movement.\n[…]\nAttack on Titan at Kodansha Comics\n[…]\nAttack on Titan at The Encyclopedia of Science Fiction\n[…]\nAttack on Titan (manga) at Anime News Network's encyclopedia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Shingeki_no_Kyojin",
        "situacao": "ok",
        "texto": "Shingeki no Kyojin (japonês: 進撃の巨人; lit. \"O Gigante de Avanço\"), também conhecido pelo título em inglês Attack on Titan, e em português Ataque dos Titãs, é uma série de mangá escrita e ilustrada por Hajime Isayama.\n[…]\nÉ ambientado em um mundo onde a humanidade vive dentro de cidades cercadas por três enormes muralhas que os protegem dos gigantescos humanoides devoradores de humanos chamados de Titãs; a história segue Eren Jaeger, que jura exterminar os Titãs, após um Titã causar a destruição de sua cidade natal e a morte de sua mãe.\n[…]\nComo proteção, a humanidade tem três enormes muralhas concêntricas de 50 metros de altura, sendo distantes umas das outras por cem quilômetros. A muralha mais externa é a Muralha Maria (ウォール・マリア, Wōru Maria); a intermediária é a Muralha Rose (ウォール・ローゼ, Wōru Rōze); e a central é a Muralha Sina (ウォール・シーナ, Wōru Shīna).\n[…]\nA luta contra os Titãs é organizada em torno de um exército que é dividido em três divisões. A Divisão de Reconhecimento (調査兵団, Chōsa Heidan), que é focada na pesquisa sobre os Titãs e na exploração de territórios atrás de recursos, e também é responsável pela reconquista de territórios humanos das terras infestadas de Titãs ao redor das muralhas que demarcam o reino.\n[…]\nOs volumes dois e três contam a história de Kyklo (キュクロ, Kyukuro), chamado de \"Filho de Titãs\", um rapaz que foi encontrado como um bebê no estômago de um Titã.\n[…]\nUma light novel chamada de Shingeki no Kyojin: Lost Girls, escrito por Hiroshi Seko foi publicada em 9 de dezembro de 2014, composto por três histórias curtas focadas nas personagens Mikasa e Annie Leonhart.\n[…]\nShingeki no Kyojin (mangá) na enciclopédia do Anime News Network (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Slam Dunk",
      "descricao": "Mangá e anime de basquete de Takehiko Inoue, publicado nos anos noventa."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "O mangá de basquete Slam Dunk, sucesso dos anos noventa, é obra de qual desenhista, também autor de Vagabond?",
    "resposta": "Takehiko Inoue",
    "fonte": [
      "https://en.wikipedia.org/wiki/Slam_Dunk_(manga)",
      "https://en.wikipedia.org/wiki/Takehiko_Inoue"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Slam_Dunk_(manga)",
        "situacao": "ok",
        "texto": "Slam Dunk (stylized in all caps) is a Japanese manga series written and illustrated by Takehiko Inoue. It was serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump from October 1990 to June 1996, with the chapters collected into 31 tankōbon volumes. The story follows Hanamichi Sakuragi, a brash and impulsive high school student who joins a basketball team at Shohoku High School, locate\n[…]\nTakehiko Inoue was inspired to create Slam Dunk from his love of basketball, which he has had since high school. Before starting Slam Dunk, he created a one-shot manga titled Aka ga Suki (赤が好き), which was published in Weekly Shōnen Jump Summer Special in 1990. The one-shot featured an early prototype of Hanamichi Sakuragi and Haruko Akagi, with a story and character dynamics that laid the groundwork for Slam Dunk.\n[…]\nWritten and illustrated by Takehiko Inoue, Slam Dunk was serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump from October 1, 1990, to June 17, 1996. The 276 individual chapters were originally collected in 31 tankōbon volumes under Shueisha's Jump Comics imprint, with the first being published on February 8, 1991, and the final volume on October 3, 1996. It was later reassembled into 24 kanzenban volumes under the Jump Comics Deluxe imprint from March 19, 2001, to February 2, 2002.\n[…]\nA novel depicting an original story written by Yoshiyuki Suga was published on December 2, 1994. Illustrations from Slam Dunk are included in the art book Inoue Takehiko Illustrations, which was published on June 4, 1997, and Plus/Slam Dunk Illustrations 2, which followed on April 3, 2020. Slam Dunk Shōri-gaku, a book written by sports psychologist Shuichi Tsuji on the \"Psychology of Winning\" and using Slam Dunk as a reference, was published on October 5, 2000.\n[…]\nSlam Dunk Scholarship website at Shueisha (in Japanese)\n[…]\nSlam Dunk (manga) at Anime News Network's encyclopedia"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Takehiko_Inoue",
        "situacao": "ok",
        "texto": "Takehiko Inoue (井上 雄彦, Inoue Takehiko; born 12 January 1967) is a Japanese manga artist. He is best known for the basketball series Slam Dunk (1990–1996), and the jidaigeki manga Vagabond, which are two of the best-selling manga series in history. Many of his works are about basketball, Inoue himself being a huge fan of the sport. His works sold in North America through Viz Media are Slam Dunk, Va\n[…]\nThe manga's popularity caused a surge of interest in basketball among Japanese youth, leading to Inoue and his publisher Shueisha creating the Slam Dunk Scholarship program in 2006 and Inoue receiving commendation from the Japan Basketball Association for helping popularize basketball in the country.\n[…]\nWhile still working on Vagabond, Inoue began drawing Real in 1999, his third basketball manga, which focuses on wheelchair basketball. It received an Excellence Prize at the 2001 Japan Media Arts Festival. Inoue also created character designs for the Xbox 360 RPG, Lost Odyssey, based on initial material provided by Hironobu Sakaguchi.\n[…]\nIn 2013, Inoue published an illustrated travel memoir on the life and architecture of Antoni Gaudí titled Pepita: Takehiko Inoue Meets Gaudí, detailing his thoughts and travels in Catalonia.\n[…]\nIn 2013, Takehiko Inoue was appointed by the Japanese Foreign Ministry to serve as an ambassador to celebrate Japan and Spain 400 years of goodwill until July 31, 2014.\n[…]\nIn 2022, Inoue made his directorial debut with the anime film adaptation of his Slam Dunk manga, titled The First Slam Dunk. Inoue also wrote the screenplay and story for the film. In 2024, he received the Best Director and Best Screenplay award for his work at the Tokyo Anime Award Festival. The First Slam Dunk was Japan's top-grossing domestic film of 2023, earning ¥15.74 billion ($112 million) and grossed about $281.1 million worldwide.\n[…]\nSlam Dunk (1990–1996)\n[…]\nPepita: Takehiko Inoue Meets Gaudí (2013)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Slam_Dunk",
        "situacao": "ok",
        "texto": "Slam Dunk (スラムダンク, Suramu Danku) é uma série de mangá escrita e ilustrada por Takehiko Inoue. A história é sobre um time de basquete da escola secundária japonesa Shōhoku. O mangá foi serializado na revista Weekly Shōnen Jump de 1990 até 1996, com os capítulos compilados em 31 volumes tankōbon e publicados pela editora Shueisha.\n[…]\nEm 2010, Inoue recebeu elogios especiais da Associação de Basquetebol do Japão por ajudar a popularizar o basquete no Japão.\n[…]\nInoue tornou-se inspirado para fazer Slam Dunk porque ele gostava de basquete desde seus anos de colégio. Depois que Inoue começou Slam Dunk, ele ficou surpreso quando ele começou a receber cartas de leitores que diziam que começaram a jogar o esporte devido ao mangá. Seu editor disse-lhe o mesmo \"basquete era um tabu neste mundo\". Devido a estas cartas, decidiu que queria desenhar os melhores jogos de basquete na série.\n[…]\nCom a série, Inoue queria que os leitores se sentissem realizados, bem como o amor para o esporte. Pensando que o seu sucesso como um artista de mangá era sendo em grande parte devido ao basquete, Inoue organizou um projeto intitulado Slam Dunk Scholarship que dá bolsas de estudo para estudantes japoneses, assim aumentando sua popularidade no Japão.\n[…]\nContudo, quando perguntado sobre a resposta dos leitores para o basquetebol, Inoue comentou que apesar de Slam Dunk é tecnicamente um mangá de basquete, a sua história poderia ter sido feita com outros esportes como futebol. Ele também acrescentou que a obra de arte para o mangá foi muito típico em comparação com seus trabalhos mais recentes, como Real.\n[…]\nEm 2018 recebeu uma Nova Edição Especial completa em 20 volumes contendo novas ilustrações de capa desenhadas pelo próprio Takehiko Inoue.\n[…]\nSlam Dunk (mangá) na enciclopédia do Anime News Network (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Demon Slayer",
      "descricao": "Mangá e anime japonês sobre Tanjiro Kamado, um jovem caçador de demônios, chamado Kimetsu no Yaiba no original."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Lançado em 2016, o mangá Demon Slayer, sobre um jovem caçador de demônios, foi criado por qual mangaká?",
    "resposta": "Koyoharu Gotouge",
    "fonte": [
      "https://en.wikipedia.org/wiki/Demon_Slayer:_Kimetsu_no_Yaiba",
      "https://en.wikipedia.org/wiki/Koyoharu_Gotouge"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Demon_Slayer:_Kimetsu_no_Yaiba",
        "situacao": "ok",
        "texto": "Demon Slayer: Kimetsu no Yaiba (Japanese: 鬼滅の刃, Hepburn: Kimetsu no Yaiba; rgh. 'Blade of Demon Destruction') is a Japanese manga series written and illustrated by Koyoharu Gotouge. It was serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump from February 2016 to May 2020, with its chapters collected in 23 tankōbon volumes. It has been published in English by Viz Media and simultaneou\n[…]\nWritten and illustrated by Koyoharu Gotouge, Demon Slayer: Kimetsu no Yaiba was serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump from February 15, 2016, to May 18, 2020. Shueisha collected its chapters in 23 individual tankōbon volumes, released from June 3, 2016, to December 4, 2020.\n[…]\nA second light novel, titled Demon Slayer: One-Winged Butterfly (鬼滅の刃 片羽の蝶, Kimetsu no Yaiba Katahane no Chō), by Gotouge and Yajima, was published in Japan on October 4, 2019. It details the lives of Shinobu and her sister Kanae before and soon after they joined the Demon Slayers after Gyomei saved their lives. A third light novel, titled Demon Slayer: Signs from the Wind (鬼滅の刃 風の道しるべ, Kimetsu no Yaiba: Kaze no Michishirube), centered on Sanemi, was published on July 3, 2020.\n[…]\nAn art book, titled Demon Slayer: Kimetsu no Yaiba – Koyoharu Gotouge Artbook: Ikuseisо (鬼滅の刃 吾峠呼世晴画集―幾星霜―, Kimetsu no Yaiba Gotōge Koyoharu Gashū Ikuseiso), was released on February 4, 2021.\n[…]\nFour other books were among the best-selling general books of 2021: the art book, Demon Slayer: Kimetsu no Yaiba – Koyoharu Gotouge Artbook: Ikuseisо, was third with 491,007 copies sold; Demon Slayer: Kimetsu no Yaiba – Coloring Book: Blue was seventh, with 414,523 copies sold; Demon Slayer: Kimetsu no Yaiba – Coloring Book: Red was ninth with 370,460 copies sold; and the anime's third official characters book was thirteenth, with 278,531 copies sold.\n[…]\nDemon Slayer: Kimetsu no Yaiba official manga website at Manga Plus"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Koyoharu_Gotouge",
        "situacao": "ok",
        "texto": "Koyoharu Gotouge (Japanese: 吾峠 呼世晴, Hepburn: Gotōge Koyoharu; born May 5, 1989) is the pen name of a Japanese manga artist, known for the manga series Demon Slayer: Kimetsu no Yaiba (2016–2020). By July 2025, the manga had over 220 million copies in circulation worldwide (including digital copies), making it one of the best-selling manga series of all time.\n[…]\nIn 2013, Gotouge debuted in the 70th Jump Treasure Newcomer Manga Awards with the one-shot work Kagarigari (過狩り狩り). Three more one-shots followed: Monju Shirō Kyōdai (文殊史郎兄弟), published in Jump Next! in 2014; Rokkotsu-san (肋骨さん), published in Weekly Shōnen Jump in 2014; and Haeniwa no Zigzag (蠅庭のジグザグ), published in Weekly Shōnen Jump in 2015.\n[…]\nAfter Haeniwa no Zigzag failed to become a series, Tatsuhiko Katayama (Gotouge's first editor) suggested starting a series with an \"easy-to-understand theme\". Gotouge's debut work Kagarigari would serve as a basis for Demon Slayer: Kimetsu no Yaiba. The series was published in Weekly Shōnen Jump from February 15, 2016, to May 18, 2020.\n[…]\nIn February 2021, Gotouge was included as \"Phenoms\" in Time's annual list of 100 Most Influential People, making them the first manga artist to receive the achievement. In March 2021, Gotouge won the Newcomer Award in the media fine arts category of the 2020 Minister of Education, Culture, Sports, Science and Technology Fine Arts Recommendation Awards. In 2021, Gotouge received the Special Prize of the 25th annual Tezuka Osamu Cultural Prize.\n[…]\nDemon Slayer: Kimetsu no Yaiba (鬼滅の刃, Kimetsu no Yaiba) (2016–2020; serialized in Shueisha's Weekly Shōnen Jump, and collected in 23 tankōbon volumes)\n[…]\nKoyoharu Gotouge Before Demon Slayer: Kimetsu no Yaiba (吾峠呼世晴短編集, Gotōge Koyoharu Tanpenshū) (2019; collected volume of Gotouge's four one-shots published by Shueisha)\n[…]\nKoyoharu Gotouge  at Anime News Network's encyclopedia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Kimetsu_no_Yaiba",
        "situacao": "ok",
        "texto": "Kimetsu no Yaiba (鬼滅の刃, Kimetsu no Yaiba; tradução aproximada \"Lâmina de Destruição de Demônios\"), também conhecido pelo título em língua inglesa Demon Slayer (Matador de Demônios, em português) é uma série japonesa de mangá shōnen escrita e ilustrada por Koyoharu Gotōge. O mangá foi serializado de 15 de fevereiro de 2016\n[…]\nUma paródia em mangá yonkoma baseada na série, escrita e ilustrada por Ryōji Hirano e intitulada Kimetsu no Yaiba! (きめつのあいま！; lit. \"Intervalo aniquilador de demônios!\"), é serializada através da plataforma digital Shonen Jump+ desde 7 de abril de 2019, com seus capítulos sendo publicados pós a estreia de cada episódio do anime, resumindo a história do mesmo episódio.\n[…]\nApós o final do Arco de Treinamento dos Hashira, foi confirmado que o arco final de Demon Slayer, a invasão ao Castelo do Infinito, será divido em três filmes, e o primeiro será lançado nos cinemas brasileiros no dia 11 de setembro de 2025.\n[…]\nEm 28 de setembro de 2019, imediatamente após o final do último episódio do anime, foi publicado um pequeno teaser anunciando um filme intitulado Kimetsu no Yaiba: Mugen Ressha-hen (鬼滅の刃無限列車編). A animação continuou a história original do mangá a partir do arco \"Trem do Infinito\", e estreou no Japão em 16 de outubro de 2020 arrecadando mais de 2.3 bilhões de Ienes dois dias depois de sua estreia, em novembro tornou-se o quinto nas maiores bilheterias do japão.\n[…]\n«Demon Slayer: Kimetsu No Yaiba». na editora Panini\n[…]\nKimetsu no Yaiba (mangá) na enciclopédia do Anime News Network (em inglês)\n[…]\n«Demon Slayer: Kimetsu no Yaiba» (em inglês). facebook oficial\n[…]\n«Demon Slayer: Kimetsu no Yaiba USA - @DemonSlayerUSA» (em inglês). twitter oficial (anime)\n[…]\n«Demon Slayer: Kimetsu no Yaiba». na Crunchyroll\n[…]\n«Demon Slayer: Kimetsu no Yaiba». na Funimation\n[…]\n«Kimetsu no Yaiba». na Netflix",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Demon Slayer",
      "descricao": "Mangá e anime japonês sobre Tanjiro Kamado, um jovem caçador de demônios, chamado Kimetsu no Yaiba no original."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "A história de Demon Slayer se passa em qual era japonesa, a que sucedeu a era Meiji no começo do século vinte?",
    "resposta": "Era Taishō",
    "fonte": [
      "https://en.wikipedia.org/wiki/Demon_Slayer:_Kimetsu_no_Yaiba",
      "https://en.wikipedia.org/wiki/Taish%C5%8D_era"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Demon_Slayer:_Kimetsu_no_Yaiba",
        "situacao": "ok",
        "texto": "Demon Slayer: Kimetsu no Yaiba (Japanese: 鬼滅の刃, Hepburn: Kimetsu no Yaiba; rgh. 'Blade of Demon Destruction') is a Japanese manga series written and illustrated by Koyoharu Gotouge. It was serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump from February 2016 to May 2020, with its chapters collected in 23 tankōbon volumes. It has been published in English by Viz Media and simultaneou\n[…]\nIn Taishō era Japan, a secret organization known as the \"Demon Slayer Corps\" has waged a war against demons for centuries. Demons are former humans who possess supernatural abilities such as enhanced strength, rapid regeneration, and unique powers referred to as \"Blood Demon Arts\". Demons can only be killed if they are exposed to direct sunlight, decapitated with weapons crafted from an alloy called Nichirin, or injected with a poison extracted from wisteria flowers.\n[…]\nDemon Slayer: Kimetsu no Yaiba is one of the best-selling manga series of all time. By February 2019, the series had 3.5 million copies in circulation worldwide; over 10 million copies in circulation by September 2019; over 25 million copies in circulation by December 2019; and over 40 million copies in circulation by February 2020. By the end of February 2020, it was revealed that the franchise has sold 40.3 million copies, making it the fifth best-selling manga in Oricon's history.\n[…]\nDemon Slayer: Kimetsu no Yaiba was the first series to take all top 10 positions of Oricon's weekly manga chart. The manga occupied the entire top 10 for a full month, and it was also the first series in Oricon's history to occupy the entire top 19 weekly rank. In October 2020, the twenty-two volumes, at the time, of the series occupied the top 22 spots of Oricon's weekly manga chart.\n[…]\nDemon Slayer: Kimetsu no Yaiba official manga website at Manga Plus\n[…]\nDemon Slayer: Kimetsu no Yaiba (manga) at Anime News Network's encyclopedia"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Taish%C5%8D_era",
        "situacao": "ok",
        "texto": "The Taishō era (大正時代, Taishō jidai; [taiɕoː dʑidai] ) was a period in the history of Japan dating from July 30, 1912, to December 25, 1926, coinciding with the reign of Emperor Taishō. The new emperor brought on the shift in political power from the old oligarchic group of elder statesmen (or genrō) to the Imperial Diet of Japan and the democratic parties.\n[…]\nThus, the era is considered the time of the liberal movement known as Taishō Democracy; it is usually distinguished from the preceding chaotic Meiji era and the following militaristic-driven first part of the Shōwa era.\n[…]\nThe two kanji characters in Taishō (大正) were from a passage of the Classical Chinese I Ching: 大亨以正 天之道也 (translated: \"Great prevalence is achieved through rectitude, and this is the Dao of Heaven.\") The term could be roughly understood as meaning \"great rectitude\", or \"great righteousness\".\n[…]\nOn July 30, 1912, Emperor Meiji died and Crown Prince Yoshihito succeeded to the throne as Emperor of Japan. In his coronation address, the newly enthroned Emperor announced his reign's nengō (era name) Taishō, meaning \"great righteousness\".\n[…]\n1921: Prime Minister Hara is assassinated and he is succeeded by Takahashi Korekiyo (November 4). Crown Prince Hirohito becomes regent because his father, Emperor Taishō has an illness (November 29). Four-Power Treaty is signed (December 13).\n[…]\n1926: Wakatsuki Reijirō becomes prime minister (30 January). Emperor Taishō dies; He is succeeded by his eldest son, Crown Prince Hirohito (December 25).\n[…]\nBy coincidence, Taishō year numbering is identical to that of the Republic of China calendar, and the Juche calendar of North Korea.\n[…]\nTo convert any Gregorian calendar year between 1912 and 1926 to Japanese calendar year in Taishō era, subtract 1911 from the year in question.\n[…]\nTaishō Roman\n[…]\nMeiji Taisho 1868–1926 (in Japanese)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Kimetsu_no_Yaiba",
        "situacao": "ok",
        "texto": "Kimetsu no Yaiba (鬼滅の刃, Kimetsu no Yaiba; tradução aproximada \"Lâmina de Destruição de Demônios\"), também conhecido pelo título em língua inglesa Demon Slayer (Matador de Demônios, em português) é uma série japonesa de mangá shōnen escrita e ilustrada por Koyoharu Gotōge. O mangá foi serializado de 15 de fevereiro de 2016\n[…]\nAmbientada no Japão durante o Período Taishō (1912-1926), a história gira em torno de Tanjiro Kamado, um garoto bondoso e inteligente que vive junto com sua mãe, Kie Kamado, e seus 5 irmãos mais novos, ganhando dinheiro vendendo carvão, assim como seu falecido pai, tanjuro Kamado. Certo dia, ao voltar para casa após ter ido a uma cidade vender carvão, Tanjiro descobre que perdeu toda sua família durante um ataque de onis. Uma de suas irmãs, Nezuko, é a única que sobreviveu ao ataque.\n[…]\nEm 28 de setembro de 2019, imediatamente após o final do último episódio do anime, foi publicado um pequeno teaser anunciando um filme intitulado Kimetsu no Yaiba: Mugen Ressha-hen (鬼滅の刃無限列車編). A animação continuou a história original do mangá a partir do arco \"Trem do Infinito\", e estreou no Japão em 16 de outubro de 2020 arrecadando mais de 2.3 bilhões de Ienes dois dias depois de sua estreia, em novembro tornou-se o quinto nas maiores bilheterias do japão.\n[…]\n«Demon Slayer: Kimetsu No Yaiba». na editora Panini\n[…]\n«鬼滅の刃公式 - @kimetsu_off» (em japonês). twitter oficial\n[…]\nKimetsu no Yaiba (anime) na enciclopédia do Anime News Network (em inglês)\n[…]\n«Demon Slayer: Kimetsu no Yaiba» (em inglês). facebook oficial\n[…]\n«Demon Slayer: Kimetsu no Yaiba USA - @DemonSlayerUSA» (em inglês). twitter oficial (anime)\n[…]\n«Demon Slayer: Kimetsu no Yaiba». na Crunchyroll\n[…]\n«Demon Slayer: Kimetsu no Yaiba». na Funimation\n[…]\n«Kimetsu no Yaiba». na Netflix\n[…]\nKimetsu no Yaiba: Kyōdai no Kizuna (filme) na enciclopédia do Anime News Network (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Ranma ½",
      "descricao": "Mangá e anime de Rumiko Takahashi sobre um jovem lutador que vira garota ao ser molhado com água fria."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Quem criou Ranma meio, mangá sobre um jovem lutador que vira garota sempre que é molhado com água fria?",
    "resposta": "Rumiko Takahashi",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ranma_%C2%BD",
      "https://en.wikipedia.org/wiki/Rumiko_Takahashi"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ranma_%C2%BD",
        "situacao": "ok",
        "texto": "Ranma ½ (Japanese: らんま⁠1/2⁠, Hepburn: Ranma Nibun-no-Ichi; pronounced Ranma One-Half in English) is a Japanese manga series written and illustrated by Rumiko Takahashi. It was serialized in Weekly Shōnen Sunday from August 1987 to March 1996, with the chapters collected in 38 tankōbon volumes by Shogakukan. The story revolves around a teenager named Ranma Saotome who has trained in martial arts si\n[…]\nRumiko Takahashi stated that Ranma ½ was conceived to be a martial arts manga that connects all aspects of everyday life to martial arts. Because her previous series had female protagonists, the author decided that she wanted a male this time. However, she was worried about writing a male main character, and therefore decided to make him half-female.\n[…]\nShe drew inspiration for Ranma ½ from a variety of real-world objects. Some of the places frequently seen in the series are modeled after actual locations in Nerima, Tokyo (both the home of Takahashi and the setting of Ranma ½).\n[…]\nWritten and illustrated by Rumiko Takahashi, Ranma ½ began publication in the shōnen manga anthology Weekly Shōnen Sunday issue #36 published on August 19, 1987, following the ending of her series Urusei Yatsura. From August 1987 until March 1996, the manga was published on a near weekly basis with the occasional colored page to spruce up the usually black and white stories. After nearly a decade of storylines, the final chapter was published in Weekly Shōnen Sunday issue #12 on March 6, 1996.\n[…]\nFollowing the ending of the TV series, 11 original video animations were released directly to home video, the earliest on December 7, 1993, and the eleventh on June 4, 1996. All but two are based on stories originally in the manga. Twelve years later, a Ranma animation was created for the \"It's a Rumic World\" exhibition of Rumiko Takahashi's artwork. Based on the \"Nightmare!"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Rumiko_Takahashi",
        "situacao": "ok",
        "texto": "Rumiko Takahashi (高橋 留美子, Takahashi Rumiko; born October 10, 1957) is a Japanese manga artist. With a career of several commercially successful works, beginning with Urusei Yatsura in 1978, she is one of Japan's best-known and wealthiest manga artists. Her works are known worldwide, where they have been translated into a variety of languages, with over 230 million copies in circulation; making Tak\n[…]\nTakahashi worked as an assistant for horror manga artist and Makoto-chan series creator Kazuo Umezu.\n[…]\nRumiko Takahashi started a new manga series entitled Mao in Weekly Shōnen Sunday issue #23 released on May 8, 2019.\n[…]\n2008 marked the 50th anniversary of Weekly Shōnen Sunday and the 30th anniversary of the first publication of Urusei Yatsura. Rumiko Takahashi's manga work was honoured in It's a Rumic World, a special exhibition held from July 30 to August 11 at the Matsuya Ginza department store in Tokyo.\n[…]\nArtists that have cited Takahashi and her work as an influence include Canadian Bryan Lee O'Malley on his series Scott Pilgrim, American Colleen Coover on her erotic series Small Favors, Japanese Chihiro Tamaki on her manga Walkin' Butterfly, Chinese-Australian Queenie Chan, and Thai Wisut Ponnimit. Scottish rock band Urusei Yatsura named themselves after her first work. Matt Bozon, creator of the Shantae video game series, cited Ranma ½ as a big influence on his work.\n[…]\nIn September 2026, Weekly Shōnen Sunday announced the Rumiko Takahashi Fantasy Manga Awards (高橋留美子ファンタジー漫画賞, Takahashi Rumiko Fantajī Manga-shō), which will be judged by Takahashi and a panel of the magazine's editors, with the results announced on March 24, 2027. Open to both professional and amateur manga artists, entries must contain at least one fantasy element and be no longer than 42 pages.\n[…]\nRumiko Takahashi on X\n[…]\nRumiko Takahashi  at Anime News Network's encyclopedia\n[…]\nRumiko Takahashi at Lambiek's Comiclopedia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ranma_%C2%BD",
        "situacao": "ok",
        "texto": "Ranma ½ (らんま½, Ranma Nibun no ichi,; já sua pronúncia, em português é \"Ranma Meio\") é uma série de mangá escrita e ilustrada por Rumiko Takahashi. A história gira em torno de Ranma Saotome, um jovem rapaz que treina artes marciais desde a infância. Como resultado de um acidente durante uma viagem de treinamento, ele é amaldiçoado, e torna-se uma mulher quando molhado com água fria, enquanto a água\n[…]\nRumiko Takahashi indicou, em entrevistas, que quis produzir uma história popular entre crianças e adolescentes. O público principal de Ranma ½ eram garotos até a idade do ensino secundário. Entre os fãs ocidentais, o anime é criticado por algumas inconsistências em relação ao mangá. Outra forte queixa é a adição de episódios cujo roteiro não tinha origem na história original, e por ter sido interrompido antes de apresentar o final presente no mangá.\n[…]\nNo meio do treinamento, Ranma e seu pai caem, cada um em uma fonte diferente, e acabam amaldiçoados. Depois desse incidente, toda vez que Ranma se molha com água fria, transforma-se em uma bela garota, enquanto seu pai em um enorme panda. Somente o banho com água quente pode reverter os personagens à sua forma original (ainda que temporariamente).\n[…]\nRanma ½ começou a ser publicado em setembro de 1987, aparecendo no volume 36 da Shōnen Sunday 1987, seguindo o fim do trabalho precedente de Takahashi, Urusei Yatsura.\n[…]\nAlém da série regular, Ranma ½  teve diversos lançamentos especiais. Em primeiro lugar, o The Ranma ½ Memorial Book (Livro Memorial de Ranma ½) foi publicado apenas após o fim do mangá em 1996. Servindo como um capítulo final para a série, traz várias ilustrações da série, uma entrevista com Rumiko Takahashi, e inclui detalhes sobre Ranma: sumários de suas batalhas, da programação diária, trívia e algumas ilustrações exclusivas.\n[…]\nRanma ½ (mangá) na enciclopédia do Anime News Network (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Ranma ½",
      "descricao": "Mangá e anime de Rumiko Takahashi sobre um jovem lutador que vira garota ao ser molhado com água fria."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em Ranma meio, o protagonista ganha sua maldição ao cair numa fonte encantada durante um treino em qual país?",
    "resposta": "China",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ranma_%C2%BD"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ranma_%C2%BD",
        "situacao": "ok",
        "texto": "Ranma ½ (Japanese: らんま⁠1/2⁠, Hepburn: Ranma Nibun-no-Ichi; pronounced Ranma One-Half in English) is a Japanese manga series written and illustrated by Rumiko Takahashi. It was serialized in Weekly Shōnen Sunday from August 1987 to March 1996, with the chapters collected in 38 tankōbon volumes by Shogakukan. The story revolves around a teenager named Ranma Saotome who has trained in martial arts si\n[…]\nAccording to Takahashi, the idea of making Ranma \"just kinda popped into [her] head\", and she looked for a way to make it possible for him to go back and forth between genders. It was then when she had a vision of a bathhouse's cloth entrance sign. She considered Ranma changing every time he was punched before deciding on water for initiating his changes. That decision led her to feeling that Jusenkyo had to be set in China, as it is the only place that could have such mysterious springs.\n[…]\nStudio Deen also created three theatrical films; The Battle of Nekonron, China! A Battle to Defy the Rules! on November 2, 1991; Battle at Togenkyo! Get Back the Brides on August 1, 1992; and Super Indiscriminate Decisive Battle! Team Ranma vs. the Legendary Phoenix on August 20, 1994. The first two films are feature length, but the third was originally shown in theaters with two other films: Ghost Sweeper Mikami and Heisei Dog Stories: Bow.\n[…]\nHowever, Ranma ½: Hard Battle was released in both North America and Europe unaltered.\n[…]\nHistorian Arius Raposas explored the geopolitical arena which influenced the emergence of Ranma ½ as a popular series within and outside Japan.\n[…]\nMike Toole of Anime News Network included Big Trouble in Nekronon, China at number 83 on The Other 100 Best Anime Movies of All Time, a list of \"lesser-known, lesser-loved classics\", calling it \"a solid action-comedy and a good, well-rounded example of the appeal of Ranma ½\".\n[…]\nRanma ½ (manga) at Anime News Network's encyclopedia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ranma_%C2%BD",
        "situacao": "ok",
        "texto": "Ranma ½ (らんま½, Ranma Nibun no ichi,; já sua pronúncia, em português é \"Ranma Meio\") é uma série de mangá escrita e ilustrada por Rumiko Takahashi. A história gira em torno de Ranma Saotome, um jovem rapaz que treina artes marciais desde a infância. Como resultado de um acidente durante uma viagem de treinamento, ele é amaldiçoado, e torna-se uma mulher quando molhado com água fria, enquanto a água\n[…]\nRanma Saotome foi treinado desde a infância até aos 16 anos. É estudante de artes marciais que, junto ao pai, Genma Saotome, fez uma jornada de treinamento nas Montanhas Bayankala (Bayan Har Shan) na Província de Qinghai, China. Ali há o campo de treinamento chamado Jusenkyo onde existem diversas fontes amaldiçoadas.\n[…]\nRanma ½ começou a ser publicado em setembro de 1987, aparecendo no volume 36 da Shōnen Sunday 1987, seguindo o fim do trabalho precedente de Takahashi, Urusei Yatsura.\n[…]\nApós a falência da Rede Manchete, a distribuidora Tikara ofereceu o anime para a Rede Record e o SBT, que não ficaram interessados. Em maio de 2000, a Band havia prometido exibir Ranma ½ na televisão aberta, o que não aconteceu. Em 2004, a Editora Abril lançou em VHS o primeiro filme da série, A Grande Aventura na China! (dublado no estúdio da Parisi Vídeo), como brinde da revista Heróis da TV. Entre 2001 e 2002, a revista já havia publicado filmes e OVAs de Dragon Ball.\n[…]\nUm exemplo é a característica de Ranma, que foi substituído por um homem louro com armas azuis brilhantes chamado Steven. Por outro lado, o jogo seguinte, Ranma ½: Hard Battle (Ranma ½: Bakuretsu Rantōhen em japonês; Ranma ½: A Violenta Batalha Explosiva, em tradução livre para o português), foi lançado no ocidente sem qualquer alteração estética, com exceção das vozes dubladas em inglês, já que a Viz Media já detinha os direitos de distribuição da série no ocidente.\n[…]\nRanma ½ (mangá) na enciclopédia do Anime News Network (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Yu-Gi-Oh!",
      "descricao": "Mangá e anime de Kazuki Takahashi sobre o jovem Yugi Muto e um jogo de cartas de monstros."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "O mangá Yu-Gi-Oh, que deu origem a um famoso jogo de cartas colecionáveis, foi criado por qual mangaká?",
    "resposta": "Kazuki Takahashi",
    "fonte": [
      "https://en.wikipedia.org/wiki/Yu-Gi-Oh!",
      "https://en.wikipedia.org/wiki/Kazuki_Takahashi"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Yu-Gi-Oh!",
        "situacao": "ok",
        "texto": "Yu-Gi-Oh! (Japanese: 遊☆戯☆王, Hepburn: Yū Gi Ō; lit. 'Game King') is a Japanese manga series written and illustrated by Kazuki Takahashi. It was serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump from September 1996 to March 2004, with its chapters collected in 38 tankōbon volumes. The series follows Yugi Mutou, a teenager who solves the ancient Egyptian Millennium Puzzle.\n[…]\nWritten and illustrated by Kazuki Takahashi, Yu-Gi-Oh! was serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump from September 17, 1996, to March 8, 2004. Shueisha collected its chapters in thirty-eight tankōbon volumes, released from March 4, 1997, to June 4, 2004. Shueisha republished its chapters in twenty-two bunkoban volumes from April 18, 2007, to March 18, 2008.\n[…]\nA spin-off manga titled Yu-Gi-Oh! R was illustrated by Akira Ito under Takahashi's supervision. It was serialized in V Jump between 2004 and 2007, and its chapters were collected in five volumes. Viz Media released the series in North America between 2009 and 2010.\n[…]\nYu-Gi-Oh! Character Guidebook: The Gospel of Truth (遊☆戯☆王キャラクターズガイドブック―真理の福音―, Yūgiō Kyarakutāzu Gaido Bukku Shinri no Fukuin) is a guidebook written by Kazuki Takahashi related to characters from the original Yu-Gi-Oh! manga universe. It was published on November 1, 2002, by Shueisha under their Jump Comics imprint.\n[…]\nAn art book titled, Duel Art (デュエルアート, Dyueruāto) was illustrated by Kazuki Takahashi under the Studio Dice label. The art book was released on December 16, 2011, and contains a number of illustrations done for the bunkoban releases of the manga, compilations of color illustrations found in the manga, and brand new art drawn for the book.\n[…]\nOfficial manga website at Weekly Shōnen Jump at the Wayback Machine (archived 2006-01-03) (in Japanese)\n[…]\nYu-Gi-Oh! (manga) at Anime News Network's encyclopedia"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Kazuki_Takahashi",
        "situacao": "ok",
        "texto": "Kazuo Takahashi (Japanese: 高橋 一雅, Hepburn: Takahashi Kazuo; October 4, 1961 – July 4, 2022), known professionally as Kazuki Takahashi (高橋 和希, Takahashi Kazuki), was a Japanese manga artist. He is best known as the author of Yu-Gi-Oh!, published in Weekly Shōnen Jump from 1996 to 2004. The manga spawned a trading card game of the same name, which holds the Guinness World Record for the best-selling\n[…]\nIn 1996, Takahashi launched Yu-Gi-Oh! under the pen name \"Kazuki Takahashi\" in Weekly Shōnen Jump, where it was serialized until 2004. The series became a huge success and has sold more than 40 million copies. It has also received several media adaptations, notably an anime television series and a trading card game developed by Konami, which holds the Guinness World Record for the best-selling trading card game in history, with more than 25.1 billion cards sold as of 2011.\n[…]\nFollowing the end of the original manga's serialization, Takahashi would supervise adaptions made by his assistants, such as Yu-Gi-Oh! R by Akira Itō,  Yu-Gi-Oh! GX by Naoyuki Kageyama and Yu-Gi-Oh! 5D's by Masashi Sato. He was also involved in the animation production of Yu-Gi-Oh! Bonds Beyond Time and Yu-Gi-Oh! The Dark Side of Dimensions.\n[…]\nTakahashi stated that his favorite manga from other authors included Doraemon and Mataro ga Kuru!! by Fujiko Fujio, Akira by Katsuhiro Otomo, JoJo's Bizarre Adventure by Hirohiko Araki, and Dragon Ball by Akira Toriyama. He also enjoyed reading American comics and stated that Hellboy was his favorite American comic book character. Takahashi was a great fan of wrestling and admired Antonio Inoki.\n[…]\nGeorge Morikawa, Takahashi's mahjong companion and also a manga artist of Hajime no Ippo.\n[…]\nYasuichi Oshima, the manga artist that Takahashi worked with as a manga assistant.\n[…]\nKazuki Takahashi  at Anime News Network's encyclopedia\n[…]\nKazuki Takahashi at IMDb\n[…]\nKazuki Takahashi on Instagram"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Yu-Gi-Oh%21",
        "situacao": "ok",
        "texto": "Yu-Gi-Oh! (遊☆戯☆王, Yū☆gi☆ō; lit. rei dos jogos) é uma franquia de mídia com o tema \"cartas e duelos\" de propriedade da editora Shueisha junto da fabricante Konami. A franquia nasceu como uma série de mangá sobre jogo escrita e ilustrada por Kazuki Takahashi. A série foi originalmente publicada pela editora Shueisha na revista Weekly Shōnen Jump entre 1996 e 2004.\n[…]\nNo planejamento inicial de Yu-Gi-Oh!, seu criador, Kazuki Takahashi, pensava em criar um mangá de terror. Apesar do resultado final sair um mangá sobre jogos, ficou claro que alguns elementos de terror influenciaram a história. Takahashi então decidiu usar \"batalha\" como seu tema principal. Uma vez que não tenha saído um mangá de \"luta\", ele achou difícil pensar em algo original.\n[…]\nKazuki Takahashi credita Toshimasa Takahashi na coluna \"Agradecimentos Especiais\". A versão em Inglês do mangá foi publicada pela Viz Media.\n[…]\nA 4K Media anunciou que um novo filme estava em desenvolvimento no Japão, celebrando o 20.º aniversário de Yu-Gi-Oh. O filme caracteriza uma história original pelo criador Kazuki Takahashi, que se passa seis meses após os eventos do mangá, descrevendo um duelo entre Yugi e Kaiba. O filme foi lançado em 23 abril de 2016 no Japão e teve um lançamento internacional no final de 2016. O filme será lançado em DVD e Blu-ray em 8 de março de 2017 no Japão.\n[…]\nA série de mangá e anime Yu-Gi-Oh! introduz o jogo de cartas colecionáveis original criado por Kazuki Takahashi, desenvolvido e publicado pela Konami. O jogo começou a ser produzido em 1998, e hoje é jogado no mundo inteiro. O jogo possui algumas diferenças quanto ao fictício, pois este servia para se adequar ao enredo. Takahashi começou a fazer as cartas em 1996. Em agosto de 2008, a TV Tokyo relatou que o jogo de cartas da série já vendeu mais de 18 milhões de cartas em todo o mundo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Enigma do Milênio",
      "descricao": "Quebra-cabeça dourado em forma de pirâmide usado pelo protagonista Yugi Muto em Yu-Gi-Oh!."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em Yu-Gi-Oh, o Enigma do Milênio, montado pelo jovem Yugi, guarda o espírito de um antigo rei de qual civilização?",
    "resposta": "Egito Antigo",
    "fonte": [
      "https://yugioh.fandom.com/wiki/Millennium_Puzzle",
      "https://en.wikipedia.org/wiki/Yu-Gi-Oh!"
    ],
    "trechos": [
      {
        "url": "https://yugioh.fandom.com/wiki/Millennium_Puzzle",
        "situacao": "ok",
        "texto": "Use\n[…]\nContaining  Yami Yugi 's soul\n[…]\nYugi holding his Millennium Puzzle\n[…]\nDark Yugi describes the power of the puzzle as \"the power of unity\", comparing a puzzle's pieces forming a whole to friends coming together. Yugi frequently credits the Millennium Puzzle with bringing him friendship with  Joey Wheeler . Yugi originally used the phrase \"Something that can be seen, yet cannot be seen\" to describe the Millennium Puzzle before it was completed, since even though you can see the pieces, you can't see the whole puzzle since it isn't complete.\n[…]\nYugi turning into Yami Yugi.\n[…]\nThe Puzzle grants incredible skill at strategy and allows the wielder to use ancient and powerful magic. That magic is mainly used to start and control Shadow Games. The Millennium Puzzle is the most powerful of all the Millennium Items. When Yugi activates its magic, the  Eye of Wdjat  glows on his forehead. Its most well-known power is Yugi switching his body and mind with the spirit of the Pharaoh.\n[…]\nIn the first series anime,  Shadi  entered Yugi's mind room belonging to  Dark Yugi , looking for the secret powers of the Millennium Puzzle. Dark Yugi confronted him and challenged him to a game, where he was to find the true mind room amongst the countless mazes of doors that were riddled with traps. Shadi was seemingly unable to alter the room with his Millennium Key.\n[…]\nYami Yugi also explains to Shadi that the Millennium Puzzle holds the power of unity, just as the many pieces of the Millennium Puzzle assembled and united."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Yu-Gi-Oh!",
        "situacao": "ok",
        "texto": "Yu-Gi-Oh! (Japanese: 遊☆戯☆王, Hepburn: Yū Gi Ō; lit. 'Game King') is a Japanese manga series written and illustrated by Kazuki Takahashi. It was serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump from September 1996 to March 2004, with its chapters collected in 38 tankōbon volumes. The series follows Yugi Mutou, a teenager who solves the ancient Egyptian Millennium Puzzle.\n[…]\nThis revives an ancient gambling spirit sealed inside the Puzzle, who commonly possesses Yugi to solve conflicts with various games. Yugi gradually learns of the spirit, with whom he eventually forms a friendship as he and his friends aim to discover the spirit's origin. By its later arcs, the manga largely shifts its focus to the collectible card game Duel Monsters (originally known as Magic & Wizards), where opposing players \"duel\" each other in mock battles of fantasy monsters.\n[…]\nYu-Gi-Oh! follows Yugi Mutou, a timid high schooler who is frequently bullied. Yugi loves to play games and, at the beginning of the series, is solving the Millennium Puzzle (千年パズル, Sennen Pazuru), an Ancient Egyptian artifact, hoping that it will grant him his wish of making friends. Yugi eventually completes the Puzzle, causing his body to become the host to a mysterious spirit with the personality of a gambler.\n[…]\nAs the series progresses, Yugi and his friends learn that the spirit is actually that of a nameless Pharaoh of Ancient Egypt, who had lost his memories after being sealed inside the Puzzle. As Yugi and his companions attempt to help the Pharaoh regain his memories, they find themselves going through many trials as they wager their lives facing off against those who wield the other Millennium Items (千年アイテム, Sennen Aitemu) and the dark power of the Shadow Games."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Yu-Gi-Oh%21",
        "situacao": "ok",
        "texto": "Yu-Gi-Oh! (遊☆戯☆王, Yū☆gi☆ō; lit. rei dos jogos) é uma franquia de mídia com o tema \"cartas e duelos\" de propriedade da editora Shueisha junto da fabricante Konami. A franquia nasceu como uma série de mangá sobre jogo escrita e ilustrada por Kazuki Takahashi. A série foi originalmente publicada pela editora Shueisha na revista Weekly Shōnen Jump entre 1996 e 2004.\n[…]\nA trama segue a história de um menino chamado Yugi Muto, que remonta o antigo Enigma do Milênio, e desperta um espírito dentro de seu corpo com a personalidade de um jogador e que resolve seus conflitos usando vários jogos.\n[…]\nYu-Gi-Oh! narra a história de Yugi Muto, um garoto tímido que ama todos os tipos de jogos, mas muitas vezes é intimidado ao seu redor. Um dia, ele ganha peças fragmentadas de um antigo artefato egípcio, o Enigma do Milênio Millennium Puzzle (千年パズル, Sennen Pazuru), por seu avô Sugoroku Muto (武藤双六, Mutō Sugoroku) (Solomon Muto). Ao remontar o quebra-cabeça, seu corpo acolhe um espírito misterioso com a personalidade de um jogador.\n[…]\nEnquanto a série avança, Yugi e seus amigos descobrem que esta pessoa dentro de seu enigma é realmente o espírito de um Faraó sem nome dos tempos egípcios que tinha perdido suas memórias. Como Yugi e seus companheiros tentam ajudar o faraó a recuperar suas memórias, eles encontram-se passando por muitas provações enquanto eles apostam suas vidas lutando contra os jogadores que exercem os misteriosos itens do Milênio e o poder sombrio dos Jogos das Sombras.\n[…]\nUma sétima série, Yu-Gi-Oh! Sevens, com uma mudança de público-alvo voltada para o público infantil (Kodomo) estreou em abril de 2020 sendo a primeira série animada pelo Bridge (Estúdio), após a quebra de parceria da Konami e o Studio Gallop.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "O Castelo Animado",
      "descricao": "Filme de animação de 2004 de Hayao Miyazaki, produzido pelo Studio Ghibli, sobre a jovem Sophie e o mago Howl."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "O filme O Castelo Animado, de Hayao Miyazaki, é a adaptação de um romance de qual escritora britânica?",
    "resposta": "Diana Wynne Jones",
    "distratores": [
      "J. K. Rowling",
      "Mary Norton",
      "Enid Blyton"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Howl%27s_Moving_Castle_(film)",
      "https://en.wikipedia.org/wiki/Howl%27s_Moving_Castle"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Howl%27s_Moving_Castle_(film)",
        "situacao": "ok",
        "texto": "Howl's Moving Castle is a 2004 Japanese animated fantasy film written and directed by Hayao Miyazaki, based on Diana Wynne Jones' 1986 novel. The film was produced by Toshio Suzuki, animated by Studio Ghibli, and distributed by Toho. It stars the voices of Chieko Baisho, Takuya Kimura, and Akihiro Miwa. The film is set in a fictional kingdom where both magic and early 20th-century technology are p\n[…]\nIn September 2001, Studio Ghibli announced the production of two films. The first would become The Cat Returns and the second was an adaptation of Diana Wynne Jones' novel, Howl's Moving Castle. Toshio Suzuki, who produced Howl's Moving Castle, stated that Miyazaki was inspired to make the film when he read Jones' novel, and was struck by the image of a castle moving around the countryside.\n[…]\nThe film has several differences from the novel, partly due to the different requirements of the two media. Diana Wynne Jones' novel has a very large cast of characters and several plot threads that were too complex to be transferred into the film. As a result, characters such as Sophie's second sister Martha are left out, as is the plot thread involving Markl (who is called Michael in the novel and depicted as an adolescent, rather than as a young boy) courting her.\n[…]\nLiterary scholar Matt Kimmich stated that the film came across as \"uneasy compromise between two plots and two imaginations,\" referring to Jones' original story and Miyazaki's style of animation and storytelling.\n[…]\nIn 2019, the Cité internationale de la tapisserie in Aubusson collaborated with Studio Ghibli to make five tapestries based on works by Hayao Miyazaki from 2019 to 2024; two depict scenes from Howl's Moving Castle. In 2025, the film ranked 96th on The New York Times's readers' choice list of \"The 100 Best Movies of the 21st Century\". The fashion house Loewe released a line of merchandise themed around the film in 2023."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Howl%27s_Moving_Castle",
        "situacao": "desambiguacao",
        "texto": "Howl's Moving Castle may refer to:\n\nHowl's Moving Castle (novel), 1986, by Diana Wynne Jones\nHowl's Moving Castle (film), 2004, directed by Hayao Miyazaki, loosely based on Jones' novel"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hauru_no_Ugoku_Shiro",
        "situacao": "ok",
        "texto": "Hauru no Ugoku Shiro (ハウルの動く城; (bra: O Castelo Animado; prt: O Castelo Andante)) é um filme japonês de animação e fantasia lançado em 2004, vagamente baseado no romance Howl's Moving Castle (1986) da dramaturga britânica Diana Wynne Jones. Contou com a direção junto ao roteiro de Hayao Miyazaki e foi produzido por Toshio Suzuki. O filme é ambientado num reino fictício onde tanto a magia como a tec\n[…]\nEm setembro de 2001, o Studio Ghibli anunciou a produção de dois filmes, o primeiro seria Neko no Ongaeshi e o segundo uma adaptação do romance de Diana Wynne Jones, Howl's Moving Castle. Alguns rumores apontam que o desenvolvimento de Hauru no Ugoku Shiro veio após Miyazaki visitar o mercado natalino de Christkindelsmärik em Estrasburgo.\n[…]\nO produtor Toshio Suzuki afirmou que a motivação de Miyazaki a fazer o filme surgiu após uma leitura da obra de Jones, onde ficou impressionado com a imagem de um castelo em movimento. Não é explicado como o castelo se move e o diretor estava interessado em descobrir isso, a estrutura básica do mesmo consiste em mais de oitenta elementos, tais como torres, uma língua e pernas de galinhas, que foram renderizados digitalmente.\n[…]\nA trilha sonora original de Hauru no Ugoku Shiro foi inteiramente composta por Joe Hisaishi, colaborador habitual de Miyazaki, e interpretada pela Orquestra Filarmônica Novo Japão. Um álbum contendo todas as 26 faixas do filme foi lançado no Japão em 19 de novembro de 2004, pela Tokuma Shoten. Em destaque, a canção de abertura resplandece ao cenário da era vitoriana na trama e tem uma ludicidade suntuosa que é o reflexo do carisma de Howl.\n[…]\nPor Jasmine Venegas, do portal Comic Book Resources, foi listado cinco motivos de Hauru no Ugoku Shiro ser o melhor filme do Studio Ghibli, dentre eles: o destaque da personagem Sophie, mensagens enigmáticas e o romance entre os protagonistas, entre outros.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Heidi",
      "descricao": "Anime japonês de 1974 sobre uma menina órfã que vive com o avô nos Alpes suíços, adaptado do livro de Johanna Spyri."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "O anime Heidi, de 1974, sobre uma menina nos Alpes suíços, foi dirigido por qual futuro cofundador do Studio Ghibli?",
    "resposta": "Isao Takahata",
    "fonte": [
      "https://en.wikipedia.org/wiki/Heidi,_Girl_of_the_Alps",
      "https://en.wikipedia.org/wiki/Isao_Takahata"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Heidi,_Girl_of_the_Alps",
        "situacao": "ok",
        "texto": "Heidi, Girl of the Alps (Japanese: アルプスの少女ハイジ, Hepburn: Arupusu no Shōjo Haiji) is a Japanese animated television series produced by Zuiyo Eizo and is based on the novel Heidi by Johanna Spyri.\n[…]\nIt was directed by Isao Takahata and features contributions by numerous other anime filmmakers, including Yōichi Kotabe (character design, animation director), Toyoo Ashida (co-character design, animation director), Yoshiyuki Tomino (storyboard, screenplay), and Hayao Miyazaki (scene design, layout, screenplay).\n[…]\nHeidi (ハイジ, Haiji)\n[…]\nThe Heidi, Girl of the Alps anime has been dubbed into about twenty languages. The TV series was able to reach major stardom in Asia, Europe, Latin America, the Arab world and South Africa.\n[…]\nHeidi, Girl of the Alps is still popular in Japan today—the love for Heidi has drawn thousands of Japanese tourists to the Swiss Alps. Stamps featuring Heidi have been issued by Japan Post. Japanese heavy metal rock band Animetal made a cover of the show's original theme song. In the documentary about Studio Ghibli, The Kingdom of Dreams and Madness, Miyazaki refers to Heidi as Takahata's \"masterpiece\".\n[…]\nA feature-length film was edited from the series by Zuiyo (which by then was a separate entity from Nippon Animation, which employed many of the TV series' animation staff) and released in Japanese theaters by Toho on March 17, 1979. All cast were replaced excluding Heidi and the grandfather. The film was supervised by Sumiko Nakao, with no direct involvement from Isao Takahata and Hayao Miyazaki, since they had already left both Zuiyo and Nippon Animation by 1979.\n[…]\nHeidi, Girl of the Alps at IMDb\n[…]\nHeidi, Girl of the Alps (anime) at Anime News Network's encyclopedia"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Isao_Takahata",
        "situacao": "ok",
        "texto": "Isao Takahata (高畑 勲, Takahata Isao; October 29, 1935 – April 5, 2018) was a Japanese director, screenwriter and producer. A co-founder of Studio Ghibli, he earned international critical acclaim for his work as a director of Japanese animated feature films.\n[…]\nBorn in Ujiyamada, Mie Prefecture, Takahata joined Toei Animation after graduating from the University of Tokyo in 1959. He worked as an assistant director, holding various positions over the years and eventually directing his own film, The Great Adventure of Horus, Prince of the Sun (1968). Under Nippon Animation he directed the television series Heidi, Girl of the Alps (1974), 3000 Leagues in Search of Mother (1976), and Anne of Green Gables (1979).\n[…]\nNot long afterward, Takahata, Kotabe, and Miyazaki were approached by the studio Zuiyo Enterprise to create an animated series based on the novel Heidi, which resulted in Heidi, Girl of the Alps (this also incorporated some of their work from the Pippi Longstocking concept). Takahata gave Heidi, Girl of the Alps a predominantly realistic style, that shows changing seasons, weather, rural work, cooking, and small details of the everyday life in the Alps.\n[…]\nOdell, Colin; Le Blanc, Michelle (2009). Studio Ghibli: The Films of Hayao Miyazaki & Isao Takahata. Hertfordshire, England: Kamera. ISBN 9781842432792. OCLC 299246656.\n[…]\nTakahata, Isao (July 31, 2026). \"What I Learned from Imamura Taihei\". Mechademia. 18 (2). Translated by Taylor, Christopher: 151–162. ISSN 2152-6648.\n[…]\nGhibliWorld.com: a Personal Conversation with Isao Takahata\n[…]\nIsao Takahata  at Anime News Network's encyclopedia\n[…]\nIsao Takahata at IMDb\n[…]\nIsao Takahata anime Archived October 16, 2019, at the Wayback Machine at Media Arts Database (in Japanese)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Heidi_%28anime%29",
        "situacao": "ok",
        "texto": "Heidi (アルプスの少女ハイジ, Arupusu no Shōjo Haiji) é um anime dirigido por Isao Takahata, baseado no livro Heidi de Johanna Spyri.\n[…]\nConvocado para casa para lidar com a suposta assombração, o Sr. Sesemann, com a ajuda do médico de Clara, apanha Heidi no meio da noite, enquanto sonâmbula. O médico diagnostica a condição de Heidi e convence o Sr. Sesemann a enviar a menina de volta para os Alpes, antes de morrer de saudades. Clara só se reconcilia com a promessa de que ela terá permissão para visitar Heidi nas montanhas.\n[…]\nEm Frankfurt, Clara, que tinha saudades de ver sua amiga de novo, recorda ao pai a promessa que lhe fizera, mas ele lembra-lhe que as condições nos Alpes suíços podem ser muito duras para ela. O médico é enviado para os Alpes em seu lugar, para determinar se se trata de um ambiente adequado para Clara.. Heidi, Peter, o Avô, e as limitações do terreno convencem o médico de que este pode ser o lugar certo para Clara conseguir mover as suas pernas novamente.\n[…]\nHeidi ainda é popular no Japão hoje em dia — o amor por Heidi tem atraído milhares de turistas japoneses para os Alpes suíços. Uma banda japonesa de rock heavy metal chamada Animetal fez um cover da canção original do tema de abertura.\n[…]\nIsao Takahata comentou que \"Nem Hayao Miyazaki, nem eu estamos relacionados completamente com qualquer versão de curta-metragem\" nesta obra.\n[…]\nHeidi é um dos vários títulos produzidos da World Masterpiece Theater do período da \"clássica Literatura infantojuvenil\" (1974–1997),  baseados nos contos clássicos em todo o mundo.\n[…]\nHeidi (anime) na enciclopédia do Anime News Network (em inglês)\n[…]\nHeidi no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Hokusai Manga",
      "descricao": "Coleção de livros de esboços do artista japonês Katsushika Hokusai, publicada a partir de 1814."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "No século dezenove, que mestre da gravura japonesa, autor de A Grande Onda, publicou livros de esboços com a palavra mangá no título?",
    "resposta": "Katsushika Hokusai",
    "fonte": [
      "https://en.wikipedia.org/wiki/Hokusai_Manga",
      "https://en.wikipedia.org/wiki/Hokusai"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hokusai_Manga",
        "situacao": "ok",
        "texto": "The Hokusai Manga (北斎漫画; \"Hokusai's Sketches\") is a collection of sketches of various subjects by the Japanese artist Hokusai. Subjects of the sketches include landscapes, flora and fauna, everyday life, and the supernatural.\n[…]\nBlock-printed in three colours (black, gray and pale flesh), the Hokusai Manga comprises thousands of images in ten volumes from 1814 to 1819, with five volumes added in 1834 to 1878. The first volume was published in 1814, when the artist was 55.\n[…]\nThe preface to the first volume of the work, written by Hanshū Sanjin (半洲散人), a minor artist of Nagoya, suggests that the publication of the work may have been aided by Hokusai's pupils. Part of the preface reads:\n[…]\nThe first volume of 'Manga' (Defined by Hokusai as 'Brush gone wild'), was an art instruction book published to aid his troubled finances. Shortly after he removed the text and republished it. The Manga show a dedication to artistic realism in the portrayal of people and the natural world. The work was an immediate success, and the subsequent volumes soon followed.\n[…]\nAs a forerunner to the modern comic-strip form, the Hokusai Manga also had a notable influence on several European artists, particularly Paul Gauguin, Vincent van Gogh and Claude Monet.\n[…]\nBouquillard, Jocelyn and Marquet, Christopher (2007). Nash, Liz trans. Hokusai: First Manga Master. New York: Harry N. Abrams, Inc. ISBN 0-8109-9341-4.\n[…]\nMichener, James A. (1958). Hokusai Sketchbooks: Selections from the Manga. Rutland, Vermont & Tokyo: Charles E. Tuttle Company.\n[…]\n'The Floating World of Hokusai': BBC Radio 4, broadcast 10:30am (UTC) 30 Aug 2012.\n[…]\nHokusai's Ukiyo print world  (in Japanese)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Hokusai",
        "situacao": "ok",
        "texto": "Katsushika Hokusai (葛飾 北斎; c. 31 October 1760 – 10 May 1849) was a Japanese ukiyo-e artist of the Edo period, active as a painter and printmaker. His woodblock print series Thirty-Six Views of Mount Fuji includes the iconic print The Great Wave off Kanagawa. Hokusai was instrumental in developing ukiyo-e from a style of portraiture largely focused on courtesans and actors into a much broader style\n[…]\nHokusai's date of birth is unclear, but is often stated as the 23rd day of the 9th month of the 10th year of the Hōreki era (in the old calendar, or 31 October 1760) to an artisan family, in the Katsushika[ja] district of Edo, the capital of the ruling Tokugawa shogunate (currently Katsushika-ku, Tokyo). At birth, his childhood name was Tokitarō (時太郎). It is believed his father was Nakajima Ise, a mirror-maker for the shōgun.\n[…]\nBy 1800, Hokusai was further developing his use of ukiyo-e for purposes other than portraiture. He had also adopted the name he would most widely be known by, Katsushika Hokusai, the former name referring to the part of Edo where he was born, the latter meaning 'north studio', in honour of the North Star, symbol of a deity important in his religion of Nichiren Buddhism.\n[…]\nHis youngest daughter Ei has her own manga and film called Miss Hokusai.\n[…]\nHillier, Jack (1980). Art of Hokusai in Book Illustration. Sotheby Publications, London. ISBN 978-0-520-04137-0.\n[…]\nMichener, James A. (1958). The Hokusai Sketch-Books: Selections from the 'Manga'. Charles E. Tuttle, Rutland.\n[…]\nThompson, Sarah (2019). \"Hokusai's Landscapes: The Complete Series\". MFA Publications, Boston. ISBN 978-0878468669.\n[…]\nHokusai website\n[…]\nHokusai complete works\n[…]\nUkiyo-e Prints by Katsushika Hokusai\n[…]\nHokusai's works at the University of Michigan Museum of Art Archived 11 November 2023 at the Wayback Machine\n[…]\nHokusai works at the Bibliotheque Nationale de France (Paris)\n[…]\nBiography of Katsushika Hokusai, British Museum"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hokusai_Manga",
        "situacao": "ok",
        "texto": "O mangá Hokusai (  北斎 漫画, \"Esboços de Hokusai\") é uma coleção de esboços de vários temas do artista japonês Hokusai . Assuntos dos esboços incluem paisagens, flora e fauna, vida cotidiana e o sobrenatural. A palavra mangá no título não se refere ao mangá contemporâneo de contar histórias, já que os esboços no trabalho não estão conectados um ao outro.\n[…]\nImpresso em bloco em três cores (preto, cinza e carne pálida), o Mangá compreende literalmente milhares de imagens em 15 volumes, o primeiro publicado em 1814, quando o artista tinha 55 anos . Os três volumes finais foram publicados postumamente, dois deles reunidos por seu editor. de material inédito. O volume final foi composto por trabalhos publicados anteriormente, alguns nem mesmo por Hokusai, e não é considerado autêntico pelos historiadores da arte.\n[…]\nO prefácio do primeiro volume da obra, escrito por Hanshū Sanjin ( 半 洲 散 人 ) , um artista menor de Nagoya , sugere que a publicação da obra possa ser auxiliada pelos alunos de Hokusai. Parte do prefácio diz:\n[…]\nO primeiro volume de 'Manga' (definido por Hokusai como 'Brush gone wild'), foi um livro de instruções de arte publicado para ajudar suas finanças conturbadas. Pouco depois, ele removeu o texto e o republicou. [3] O mangá evidencia uma dedicação ao realismo artístico na representação das pessoas e do mundo natural. O trabalho foi um sucesso imediato, e os volumes subsequentes logo se seguiram.\n[…]\nBouquillard, Jocelyn e Marquet, Christopher (2007). Nash, Liz trans. Hokusai: Primeiro Mestre de Manga . Nova Iorque: Harry N. Abrams, Inc. ISBN  0-8109-9341-4 .\n[…]\nMichener, James A. (1958). Sketchbooks Hokusai: Seleções do Mangá . Rutland, Vermont e Tóquio: Charles E. Tuttle Company.\n[…]\n'O Mundo Flutuante de Hokusai': BBC Radio 4, transmissão 10:30 am (UTC) 30 de agosto de 2012.\n[…]\nMundo de impressão Ukiyo de Hokusai (em japonês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Konoha",
      "descricao": "A Vila Oculta da Folha, vila ninja natal de Naruto Uzumaki no mangá e anime Naruto."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em Naruto, a Vila Oculta da Folha, terra natal do protagonista, fica em qual país fictício?",
    "resposta": "País do Fogo",
    "fonte": [
      "https://naruto.fandom.com/wiki/Konohagakure",
      "https://naruto.fandom.com/wiki/Land_of_Fire"
    ],
    "trechos": [
      {
        "url": "https://naruto.fandom.com/wiki/Konohagakure",
        "situacao": "ok",
        "texto": "Konohagakure  ( 木ノ葉隠れの里 ,  Konohagakure no Sato ,  English TV:  \"Village Hidden in the Leaves\" or \"Hidden Leaf Village\",  literally meaning:  Village Hidden by Tree Leaves) is the  hidden village  of the  Land of Fire . As the village of one of the  Five Great Shinobi Countries , Konohagakure has a  Kage  as its leader known as the  Hokage , of which there have been seven in its history.\n[…]\nAfter the end of the Third Shinobi World War, Hiruzen chose Minato to replace him as Fourth Hokage. Soon after Minato took office, however, a  masked man  kidnapped Minato's wife, the current Nine-Tails  jinchūriki   Kushina Uzumaki , after she had given birth to their son  Naruto Uzumaki  and removed it from her body, which he then used to attack Konoha. Minato was able to defeat the man, but the Nine-Tails proved more difficult.\n[…]\nMore than three years after the failed Konoha Crush, the  Six Paths of Pain  of  Akatsuki  attack Konoha in an effort to capture Naruto. Konoha's forces have some success while fighting the Pains individually, but can do nothing to stop the village's destruction by Pain's  Shinra Tensei . Naruto returns to Konoha shortly afterwards and defeats Pain before confronting  Nagato , the man behind Pain.\n[…]\nAfter Naruto convinces him that his actions were wrong, Nagato gives his life to revive everyone that died during the invasion. Tsunade is left in a coma from exhausting herself in protecting Konoha from Pain, causing  Danzō Shimura  to temporarily take office as her replacement. Danzō oversees the start of the village's lengthy rebuilding process and deals with the immediate aftermath of Pain's attack.\n[…]\nIn the  first Naruto volume , there's a sketch of downtown Konoha. In a close-up is a billboard with a cartoon version of Masashi Kishimoto holding a paintbrush.\n[…]\n↑     Naruto  chapter 436, page 8\n[…]\n↑     Konoha Hiden: The Perfect Day for a Wedding , chapter 3"
      },
      {
        "url": "https://naruto.fandom.com/wiki/Land_of_Fire",
        "situacao": "ok",
        "texto": "The Land of Fire.\n[…]\nOn the border between the Land of Fire and the  Land of Sound  sits the  Valley of the End , a large rift formed shortly after the founding of Konohagakure by the  First   Hokage  and  Madara Uchiha .\n[…]\n1   Konohagakure\n[…]\nKonohagakure   [        ]\n[…]\nKonohagakure.\n[…]\nMain article:  Konohagakure\n[…]\nKonohagakure  ( 木ノ葉隠れの里 ,  Konohagakure no Sato ,  English TV:  \"Village Hidden in the Leaves\" or \"Hidden Leaf Village\",  literally meaning:  Village Hidden by Tree Leaves) is the  hidden village  of the  Land of Fire . As the village of one of the  Five Great Shinobi Countries , Konohagakure has a  Kage  as its leader known as the  Hokage , of which there have been seven in its history.\n[…]\nKonoha resides deep within a forest at the base of a mountain known as the  Hokage Rock , which has the faces of all those who have taken the office of Hokage engraved on it.\n[…]\nTanzaku Quarters  ( 短冊街 ,  Tanzaku-gai ,  English TV:  Tanzaku Town,  literally meaning:  Poem Card Quarters) resides in the Land of Fire and is a fair distance south-west from  Konoha . It is a lively town that attracts many adults due to its gambling opportunities and fine women. Much of the  Search for Tsunade  takes place in or around Tanzaku Quarters at the same time that a festival is going on.\n[…]\n↑      Naruto: One Decade, One Hundred Ninja  , page 116"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Monkey D. Luffy",
      "descricao": "Protagonista de One Piece, pirata de chapéu de palha com corpo elástico como borracha."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em One Piece, Luffy parte de uma vila natal em qual dos mares do mundo para começar sua jornada pirata?",
    "resposta": "East Blue",
    "fonte": [
      "https://onepiece.fandom.com/wiki/Monkey_D._Luffy",
      "https://onepiece.fandom.com/wiki/East_Blue"
    ],
    "trechos": [
      {
        "url": "https://onepiece.fandom.com/wiki/Monkey_D._Luffy",
        "situacao": "ok",
        "texto": "Introduction\n[…]\nEast Blue\n[…]\nAs a pirate, Luffy has actively opposed countless regional, national, and global powers, beginning with several established  East Blue  pirates and extending to the Marines, the  Seven Warlords of the Sea ,  Cipher Pol , the  World Nobles  and  Five Elders , and even the  Four Emperors  of the  New World .\n[…]\nFurther information:  Monkey D. Luffy/Gallery\n[…]\nDuring the  Little East Blue Arc , he wears red-orange jacket exposed at the chest, and a pair of sky blue shorts.\n[…]\nAt the start of  Movie 14  (and the entire  Cidre Guild Arc ), Luffy wears a collarless red and white striped shirt with his Jolly Roger on the back, pale blue shorts, white sports bandages wrapped around his torso, and a pair of geta. Strapped to his back is a large wooden instrument. In his attendance at the  Pirates Festival , he changes into an open red button-up shirt, black shorts, and an orange sash.\n[…]\nDuring  Movie 15 , Luffy's Festival Outfit during  Uta 's concert was a red t-shirt with a white '56' on the left sleeve, and the center sporting a design of a microphone wearing his straw hat. He also wore an orange vest with yellow straps, with four fans circling around it, along blue shorts. During his flashbacks to  Foosha Village  (and the  Uta's Past Arc ), Luffy wears red shorts and a white T-shirt with a yellow 'X' on it.\n[…]\n↑   12.0     12.1      One Piece Blue Deep: Characters World  (p. 186), Luffy's profile after timeskip is revealed.\n[…]\nMonkey D. Luffy  – Wikipedia article about Monkey D. Luffy."
      },
      {
        "url": "https://onepiece.fandom.com/wiki/East_Blue",
        "situacao": "ok",
        "texto": "For other uses of this name, see  East Blue (Disambiguation) .\n[…]\nMany other powerful and world-renowned characters also hail from the East Blue:  Marine  hero and  Vice Admiral ,  Monkey D. Garp ; the  emperor   Monkey D. Luffy , the pirate of the  Worst Generation ,  Roronoa Zoro , as well as their crewmates  Nami , a  navigator , and  Usopp , a  sniper ; and the  Revolutionary Army  leader,  Monkey D. Dragon , and his right-hand man,  Sabo . Other notable pirate crews from this sea include the  Spade Pirates  and the  Barto Club .\n[…]\nHowever, their plans did not come to fruition as  Monkey D. Luffy  and his  crew  managed to defeat Arlong and his  top henchmen , thus freeing the Conomi Islands from the clutches of the Arlong Pirates. This incident led to Luffy's first ever  bounty  of        30,000,000, which made him the East Blue's most wanted man at the time.\n[…]\n↑   1.0     1.1     1.2      One Piece  Manga and Anime —  Vol. 6   Chapter 51  (p. 4) and  Episode 24 , Dracule Mihawk claims that the East Blue is the weakest ocean in the world.\n[…]\n↑   2.0     2.1      One Piece  Manga and Anime —  Vol. 0   Chapter 0  (p. 12) and  Episode 0 , Shiki calls East Blue the weakest sea, while Garp calls it a symbol of peace.\n[…]\n↑     One Piece  Movie —  One Piece Film: Strong World , The East Blue is referred as the Sea of Schemes by the citizens of Merveille.\n[…]\n↑     One Piece  Manga and Anime —  Vol. 11   Chapter 96  (p. 6) and  Episode 45 , Brannew reveals the average bounty in the East Blue and the amount that shows an impressive one."
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Goku",
      "descricao": "Protagonista de Dragon Ball, criado por Akira Toriyama."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Antes de ser mandado à Terra ainda bebê, Goku nasceu em qual planeta, lar dos saiyajins?",
    "resposta": "Planeta Vegeta",
    "fonte": [
      "https://en.wikipedia.org/wiki/Goku",
      "https://dragonball.fandom.com/wiki/Planet_Vegeta"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Goku",
        "situacao": "ok",
        "texto": "Son Goku  is a fictional character and the main protagonist of the Dragon Ball manga series created by Akira Toriyama. He is based on Sun Wukong (known as Son Gokū in Japan and the Monkey King in the West), a main character of the classic 16th-century Chinese novel Journey to the West, combined with influences from the Hong Kong action cinema of Jackie Chan and Bruce Lee.\n[…]\nBorn under the name Kakarot, as a member of the Saiyan race on Planet Vegeta, he is sent to Earth as an infant prior to his homeworld's destruction at the hands of Frieza. Upon his arrival on Earth, the infant is discovered by Son Gohan, who becomes the adoptive grandfather of the boy and gives him the name Goku. The boy is initially full of violence and aggression due to his Saiyan nature, until an accidental head injury turns him into a cheerful, carefree person.\n[…]\nIn the manga, directly after the final scene of Broly, Goku and Vegeta meet Galactic Patrol by Jaco and a mysteriously highly skilled agent named Merus in order to help stop an ancient warlock called Moro. With Moro headed to New Namek to use the Namekian Dragon Balls, the two Saiyans travel to the planet to stop him, where they are defeated by him using his magic to drain their life essences until near death.\n[…]\nIn the manga's aftermath of the film, Goku teleports Gohan, Goten, and Trunks to Beerus' planet in order to test out Gohan's new Beast transformation. This results in an epic battle royale between Goku, Gohan, Goten, Trunks, Vegeta, and Broly.\n[…]\nGoku has appeared in several \"top\" character lists.\n[…]\nBoth Goku and Vegeta were criticized for being too overpowered in Super to the point they steal the series' spotlight to the supporting cast while their strategies either lack complexity or create a plothole such as the time limit to the fusion Vegito."
      },
      {
        "url": "https://dragonball.fandom.com/wiki/Planet_Vegeta",
        "situacao": "ok",
        "texto": "Planet Vegeta   (  惑 わく   星 せい  ベジータ  ,     Wakusei Bejīta     ) , formerly known as  Planet Plant   (  惑 わく   星 せい  プラント  ,     Wakusei Puranto     ) , is the home planet of  Goku ,  Vegeta , and all other native  Saiyans ,  Tuffles  and the  Inhabitants of Plant  in the   Dragon Ball  franchise .\n[…]\n1   Planet Description\n[…]\nKakarot's departure from Planet Vegeta has several different accounts:\n[…]\nEach time Planet Vegeta is seen on a different occasion, it has a different appearance: the planet is red in   Bardock - The Father of Goku  , green/blue in a flashback in   Dragon Ball GT  , white in   Dragon Ball: Plan to Eradicate the Saiyans   and blue in its remake  Plan to Eradicate the Super Saiyans , it has rings when  Raditz  mentions it in the episode \" The New Threat ,\" and the planet looks like the Earth in  King Kai 's story as well as in  Dodoria 's story.\n[…]\nThus, in the manga and the film, he destroyed the planet out of fear of both the Super Saiyan and Super Saiyan God, both of which would later be realized by both Goku and Vegeta who go on to obtain both forms.\n[…]\n•  Clones  •  Commeson  •  Culture Fluid  •  Flying Nimbus  •  Frieza Force  •  Fu  •  God-to-Blue  •  Heart Virus   ( Heart Medicine )  •  Heeter  •  Honey  •  House of Vegeta  •  Legendary Super Saiyan (disambiguation)  •  Mecha Goku  •  New Planet Vegeta  •  Paragus' Spaceship  •  Planet Vegeta   ( Bardock's Village   ( Bardock's House )  •  Vegeta's Palace )  •  Power Pole  •  Ray Gun  •  Restraint Jacket  •  S-Cells  •  Sadala  •  Saibamen  •  Saiya Power  •  Saiyan Power  •  Scout-Scope  •  Scouter  •  Son family  •  Super Saiyan (Demon Realm Race)  •  Super Saiyan God (race)  •  Time Breaker Mind Control   ( Anti-Blutz Wave Masks )  •  Tree of Might   ( Fruit of the Tree of Might )  •  Troublemaker Education"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Goku",
        "situacao": "ok",
        "texto": "Son Goku (孫悟空, Son Gokū; mais conhecido apenas como Goku), cujo nome de nascimento é Kakarotto (カカロット, Kakarotto), é o protagonista da franquia Dragon Ball, criada por Akira Toriyama. Sua primeira aparição ocorreu no primeiro capítulo do mangá Dragon Ball, intitulado Bulma e Son Goku (japonês: ブルマと孫悟空, Hepburn: Buruma to Son Gokū), publicado na revista Weekly Shōnen Jump em 3 de dezembro de 1984.\n[…]\nOriginalmente batizado como Kakarotto (カカロット), Goku é membro de uma raça fictícia de extraterrestres, os Saiyajins. Logo após seu nascimento, Goku é enviado à Terra por seus pais Bardock e Gine para sobreviver à destruição do Planeta Vegeta, como revelado em Dragon Ball Super: Broly. Encontrado e criado pelo eremita Son Gohan, Goku passa a ter como objetivo se tornar mais forte, simplesmente pelo prazer da tarefa.\n[…]\nApós se fundir com Vegeta, formaram um guerreiro poderoso chamado Vegetto (ベジット, Bejitto) (Vegeta + Kakarotto). Dentro do corpo do demônio, a fusão se desfaz e ambos tiram todos os absorvidos de dentro do corpo de Boo, fazendo-o voltar a forma original conhecida por Kid Boo. Mesmo Kid Boo sendo pequeno na aparência deu muito trabalho a Goku, que lutou de igual para igual com ele usando o Super Saiyajin 3.\n[…]\nQuatro anos depois da batalha com Majin Boo terminar, enquanto treina no planeta do Sr. Kaioh, Goku se encontra com o Deus da Destruição Bills que pede explicações sobre o Deus Super Saiyajin. Ele tenta atacar Bills, porém não acerta nenhum golpe nem mesmo usando o Super Saiyajin 3 e é derrotado com apenas dois golpes.\n[…]\nGoku posteriormente com a ajuda de Vegeta, Gohan, Goten, Trunks e Pan (ainda no ventre de Videl), se transforma no Deus Deus Super Saiyajin (超 スーパーサイヤ人ゴッド, Sūpā Saiya-jin Goddo) e enfrenta Bills, dessa vez acertando vários golpes. Seis meses depois, ele treina com o mestre de Bills, Whis, no planeta de Bills onde Vegeta já estava treinando.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Fullmetal Alchemist",
      "descricao": "Mangá e anime de Hiromu Arakawa sobre os irmãos alquimistas Edward e Alphonse Elric."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em Fullmetal Alchemist, os irmãos Elric servem a qual país fictício, governado por militares?",
    "resposta": "Amestris",
    "fonte": [
      "https://en.wikipedia.org/wiki/Fullmetal_Alchemist",
      "https://fma.fandom.com/wiki/Amestris"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fullmetal_Alchemist",
        "situacao": "ok",
        "texto": "Fullmetal Alchemist (Japanese: 鋼の錬金術師, Hepburn: Hagane no Renkinjutsushi; lit. 'Alchemist of Steel') is a Japanese manga series written and illustrated by Hiromu Arakawa. It was serialized in Square Enix's shōnen manga anthology magazine Monthly Shōnen Gangan between July 2001 and June 2010; the publisher later collected the individual chapters in 27 tankōbon volumes.\n[…]\nFullmetal Alchemist takes place in the fictional country of Amestris (アメストリス, Amesutorisu), in which the physical setting and political system is largely inspired by general European society at the turn of the 20th century. In this world, alchemy is one of the most-practiced sciences, and can largely be contexualized as magic which follows the rules of science.\n[…]\nBandai has released two RPG titles, Fullmetal Alchemist: Stray Rondo (鋼の錬金術師 迷走の輪舞曲, Hagane no Renkinjutsushi Meisō no Rondo) and Fullmetal Alchemist: Sonata of Memory (鋼の錬金術師 想い出の奏鳴曲, Hagane no Renkinjutsushi Omoide no Sonata), for the Game Boy Advance on March 25 and July 22, 2004, respectively, and one, Dual Sympathy, for the Nintendo DS. They also released an action game, Fullmetal Alchemist: Brotherhood (鋼の錬金術師 背中を託せし者, Hagane no Renkinjutsushi: Senaka o Takuseshimono; lit.\n[…]\nFullmetal Alchemist: The Person Entrusted with his Back) for the PlayStation Portable in Japan on October 15, 2009, and in Australia and Europe on June 17 and July 1, 2010, respectively. In Japan, Bandai released an RPG Fullmetal Alchemist: To the Promised Day (鋼の錬金術師 Fullmetal Alchemist 約束の日へ, Hagane no Renkinjutsushi Fullmetal Alchemist Yakusoku no Hi e) for the PlayStation Portable on May 20, 2010. Bandai also released a fighting game, Dream Carnival, for the PlayStation 2.\n[…]\nFullmetal Alchemist (manga) at Anime News Network's encyclopedia"
      },
      {
        "url": "https://fma.fandom.com/wiki/Amestris",
        "situacao": "ok",
        "texto": "Amestris   ( アメストリス  ,   Amesutorisu     ? )  is the country that serves as the principal setting of the   Fullmetal Alchemist   series. Exclusively in the 2003 anime series, it is eventually revealed that Amestris is known as  Shamballa   ( シャンバラ  ,   Shanbara     ? )  to those who live on the other side of the  Gate .\n[…]\nIn the year 1901, in the province of  Ishval  - known to be a rogue and unstable area and, at the time, occupied by the military - an Ishvalan girl was shot by an \" Amestrian soldier \", instigating revolt from the locals and thus beginning the Ishval Civil War. The war lasted until 1908, when Führer Bradley issued  Executive Order No. 3066 , sending the military's most feared special division, the  State Alchemists , to Ishval's front, enacting the extermination of the Ishvalan people.\n[…]\nIn terms of weaponry, firearms range from simple pistols to Woodstock rifles and machine guns but the Amestrian State Military has developed a new type of weapon called a \" tank \" at the Research and Development department of their Briggs Fort.\n[…]\nMain article:  State Military\n[…]\nThe State Alchemist's crest.\n[…]\nEver since  King Bradley  was elected Führer, the military has been the country's primary focus, and has cemented its power over every aspect of Amestrian life. Its most well-known conflict is the  Ishval Civil War  which ultimately decimated the Ishval's people. The military is also engaged in border skirmishes with its neighbors  Creta  and  Aerugo . The later there’s is a good chance they annexed the later because they did not have a government .\n[…]\nIn keeping with Amestris' similarities with Germany, the German Empire (1871-1918) had a population of 56 million in 1900, close to the time period of  Fullmetal Alchemist  itself. However, it isn't known if this was intentional or unintentional."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Fullmetal_Alchemist",
        "situacao": "ok",
        "texto": "Fullmetal Alchemist (鋼の錬金術師, Hagane no Renkinjutsushi; lit. \"Alquimista de Aço\") é um mangá shōnen escrito e ilustrado por Hiromu Arakawa. Foi serializado na revista mensal japonesa Monthly Shōnen Gangan entre agosto de 2001 e junho de 2010, com os seus 108 capítulos individuais compilados em 27 volumes em formato tankōbon e publicados pela editora Square Enix. O mundo de Fullmetal Alchemist é bas\n[…]\nEdward, então se torna um Alquimista Federal (国家錬金術師, Kokka Renkinjutsushi), um alquimista contratado pelo Estado Militar de Amestris, que aniquilou a maior parte da raça Ishibaliana na década passada. Ao se tornar um Alquimista Federal, ele passa a ter acesso aos vastos recursos disponíveis àqueles que exercem o cargo. Os irmãos partem em uma busca pela Pedra Filosofal como um meio de restaurar seus corpos.\n[…]\nEle planeja usar Amestris como um círculo de transmutação gigante, a fim de transmutar todo o país por razões desconhecidas pelos Elric. Quando Edward e Alphonse descobrem os planos de Pai, eles, juntamente com outros membros do Estado Militar, partem para derrotá-lo.\n[…]\nA maioria dos eventos da história ocorrem em Amestris, um país em forma circular governado por militares.\n[…]\nFullmetal Alchemist se passa no país fictício de Amestris (アメストリス, Amesutorisu)  . Neste mundo, a alquimia é uma das ciências mais praticadas; alquimistas que trabalham para o governo são conhecidos como Alquimistas do Estado e recebem automaticamente o posto de major nas forças armadas. Os alquimistas têm a habilidade, com a ajuda de padrões chamados círculos de transmutação, de criar quase tudo o que desejarem.\n[…]\nFora Amestris, há poucos países nomeados, e nenhum é mostrado na história principal. O principal país estrangeiro é Xing . Muito semelhante à China, Xing tem um sistema complexo de clãs e imperadores, ao contrário da eleição de um Führer controlada pelo governo de Amestris.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "O Serviço de Entregas da Kiki",
      "descricao": "Filme de animação de 1989 de Hayao Miyazaki, produzido pelo Studio Ghibli, sobre uma jovem bruxa que faz entregas voando de vassoura."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "A cidade à beira-mar de O Serviço de Entregas da Kiki, do Studio Ghibli, foi inspirada em cidades de qual país europeu?",
    "resposta": "Suécia",
    "distratores": [
      "Noruega",
      "Dinamarca",
      "Holanda"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Kiki%27s_Delivery_Service"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Kiki%27s_Delivery_Service",
        "situacao": "ok",
        "texto": "Kiki's Delivery Service is a 1989 Japanese animated fantasy film written, produced, and directed by Hayao Miyazaki, based on Eiko Kadono's 1985 novel Kiki's Delivery Service. Animated by Studio Ghibli, the film stars Minami Takayama, Rei Sakuma, Kappei Yamaguchi, and Keiko Toda. The story follows Kiki (Takayama), a young witch who moves to the port city of Koriko with her cat Jiji (Sakuma) and sta\n[…]\nNear the end of Totoro's production, members of Studio Ghibli were being recruited as senior staff for Kiki's Delivery Service. The character design position was given to Katsuya Kondo, who was working with Miyazaki on Totoro. Hiroshi Ohno, who would later work on projects such as Jin-Roh, was hired as art director at the request of Kazuo Oga.\n[…]\nMiyazaki chose Sunao Katabuchi as director. Katabuchi had worked with Miyazaki on Sherlock Hound; Kiki's Delivery Service was to have been his directorial debut. Studio Ghibli hired Nobuyuki Isshiki as script writer, but Miyazaki was dissatisfied by the first draft, finding it dry and too divergent from his own vision of the film. Although the novel is set in a fictional northern European country, Miyazaki did not originally travel to Sweden for research.\n[…]\nStreamline Pictures produced the first official English dub of Kiki's Delivery Service in November 1989 for Japan Airlines international flights. It was the second Studio Ghibli dub produced by Streamline following My Neighbor Totoro earlier that year. Tokuma Shoten commissioned Streamline for the Kiki's Delivery Service dub after being satisfied with the English production of My Neighbor Totoro, but did not give Streamline the rights to distribute the film in North America.\n[…]\nOdell, Colin; Le Blanc, Michelle (2009). \"Kiki's Delivery Service (Majo no Takkyūbin) (1989)\". Studio Ghibli: The Films of Hayao Miyazaki and Isao Takahata. Oldcastle Books. ISBN 978-1-84243-358-4."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Majo_no_Takky%C5%ABbin",
        "situacao": "ok",
        "texto": "Majo no Takkyūbin (魔女の宅急便; Brasil: O Serviço de Entregas da Kiki / Portugal: Kiki, A Aprendiz de Feiticeira) é um filme japonês de animação e fantasia, lançado em 1989. Dirigido por Hayao Miyazaki e produzido pelo Studio Ghibli, o seu roteiro tem por base o romance homônimo, escrito por Eiko Kadono em 1985. Na trama, a jovem bruxa, Kiki, sai de casa aos treze anos para tornar-se independente em um\n[…]\nA história de Majo no Takkyūbin é decorrida em uma Europa romântica e idealizada. A cidade de Koriko, na qual a trama é ambientada, é uma mistura de cidades mediterrânicas (Lisboa e Nápoles), cidades do norte da Europa (Visby, Estocolmo, Paris e Amesterdã), e a cidade norte-americana São Francisco. A Suécia foi a principal inspiração para o filme, pois o diretor havia morado lá em 1971.\n[…]\nO cartaz oficial do filme, que mostra Kiki encostada atrás do balcão da padaria, foi escolhido pelo produtor associado, Toshio Suzuki. Suzuki queria que o cartaz refletisse o verdadeiro significado do roteiro; que se concentra na vida cotidiana de Kiki, e não na sua magia. Suzuki afirmou que a Nippon TV, além de teasers, retransmita os filmes anteriores do Studio Ghibli pouco antes do lançamento de Majo no Takkyūbin.\n[…]\nA trilha sonora do filme foi lançada pela primeira vez em CD, em 25 de agosto de 1989 no Japão e vendeu 240 000 cópias em seu primeiro ano, e foi posteriormente, relançada várias vezes no país. Em 1989, a editora Tokuma Shoten lançou um mangá de quatro volumes baseados na animação. Em 2013, Bungeishunjū publicou em colaboração com o Studio Ghibli, uma série de livros dedicados às produções do estúdio, cujo quinto volume é inteiramente dedicado a Majo no Takkyūbin.\n[…]\nEm particular, o dinheiro desempenha importância na busca pela independência de Kiki, o que aumenta muito o realismo da história.\n[…]\nMedia relacionados com Majo no Takkyūbin no Wikimedia Commons",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "A Princesa Mononoke",
      "descricao": "Filme de animação de 1997 de Hayao Miyazaki, produzido pelo Studio Ghibli, sobre o conflito entre humanos e deuses da floresta."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "As florestas antigas de A Princesa Mononoke, de Miyazaki, foram inspiradas nas matas de qual ilha japonesa?",
    "resposta": "Yakushima",
    "distratores": [
      "Hokkaido",
      "Okinawa",
      "Shikoku"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Princess_Mononoke",
      "https://en.wikipedia.org/wiki/Yakushima"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Princess_Mononoke",
        "situacao": "ok",
        "texto": "Princess Mononoke is a 1997 Japanese animated historical fantasy film written and directed by Hayao Miyazaki. Set in the Muromachi period of Japanese history, the film follows Ashitaka, a young Emishi prince who journeys west to cure his cursed arm and becomes embroiled in the conflict between the forest of the gods and a nearby town, as well as the feud between Lady Eboshi, the town's leader, and\n[…]\nThat month, Miyazaki took four of the art directors to visit the island of Yakushima, which had already inspired some environments in Nausicaä of the Valley of the Wind, to achieve the environmental depiction that he was seeking to portray. The island's relative lack of development informed their sketches of the film's forest of the gods. The fifth art director, Kazuo Oga, went to the Shirakami-Sanchi mountains to draw inspiration for the Emishi village.\n[…]\nPrincess Mononoke marked the first time Miyazaki explored a jidaigeki style – a period drama focusing on the lives of historic Japanese people. He particularly appreciated the works of Akira Kurosawa, who had directed several key films in the genre. The film subverts many traditional elements of the jidaigeki, such as the portrayals of the Emperor and the samurai as sacred and noble.\n[…]\nPrincess Mononoke was the first film in which Miyazaki directly referenced scholarly writing, which strongly contributed to his status in Japanese society as a bunkajin and marked his works out for further academic inquiry. Alongside Neon Genesis Evangelion (1995–1996), the film laid the foundation for anime to become the subject of study by academics and critics.\n[…]\nYoshioka suggested that Miyazaki's growing reputation may have constrained his later creations – as he never wrote a feature film in the style of his earlier action-adventure works after Princess Mononoke – and motivated him to retire from the public eye.\n[…]\nPrincess Mononoke at IMDb"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Yakushima",
        "situacao": "ok",
        "texto": "Yakushima (屋久島) is one of the Ōsumi Islands in Kagoshima Prefecture, Japan. The island, 504.88 km2 (194.94 sq mi) in area, has a population of 11,858. It is accessible by hydrofoil ferry, car ferry, or by air to Yakushima Airport.\n[…]\nIn 2017, Yakushima was struck by Typhoon Noru, causing one death.\n[…]\nAccording to a disputed theory published in a 2009 paper, airborne pollutants from China may have affected the Yakushima white pine.\n[…]\nYakushima Airport (KUM) is the only airfield serving the island. A flight to KUM from Kagoshima Airport takes approximately 40 minutes.\n[…]\nKagoshima Port, Minato Pier, Kagoshima City – Ibusuki Port (Ibusuki City) in Tanegashima, Nishinoomote Port (Nishinoomote City), Yakushima, Miyanoura Port, or Anbo Port.\n[…]\nOrita Kisen \"Ferry Yakushima 2\"\n[…]\nKagoshima Minato-ku Minami Pier-Yakushima / Miyanoura Port\n[…]\nTaniyama Port 2 Ward (Kagoshima City) – Tanegashima Nishinoomote Port (Nishinoomote City) – Yakushima Miyanoura Port\n[…]\nYakushima Town \"Ferry Taiyo\"\n[…]\nKuchinoerabujima – Yakushima / Miyanoura Port – Tanegashima / Shimama Port (Minamitanemachi)\n[…]\nThere are several onsen (hot springs) on Yakushima. They can be used for bathing or as natural spas.\n[…]\nThe forests of Yakushima inspired the forest setting in Hayao Miyazaki's film Princess Mononoke.\n[…]\nYakushima is the inspiration behind the forest of Dremuchij in Metal Gear Solid 3: Snake Eater.\n[…]\nThe fictional characters Jun and Jin Kazama of Tekken lived on Yakushima.\n[…]\nThe landscapes in Oni: Thunder God's Tale are inspired by Yakushima's forests.\n[…]\nThe main setting of episodes 1153 and 1154 of Detective Conan is Yakushima, where a murder takes place deep in the forest near the ancient Jōmon Sugi.\n[…]\nWitham, Clive. Yakushima: A Yakumonkey Guide. Siesta Press. (2009) ISBN 0956150705"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mononoke_Hime",
        "situacao": "ok",
        "texto": "Mononoke Hime (もののけ姫, Mononoke-hime; bra: Princesa Mononoke; prt: A Princesa Mononoke) é um filme de animação japonês dirigido por Hayao Miyazaki e produzido pelo Studio Ghibli. A data de estreia no Japão foi em 12 de julho de 1997 e a estreia no restante do mundo aconteceu a partir de 1999.\n[…]\nO príncipe vai conhecer também os homens que querem destruir a floresta e a pequena San, ou Princesa Mononoke.\n[…]\nCustou cerca de US$ 20 milhões figurando como uma das animações mais caras já produzidas da história do cinema animado japonês para a época em que foi feito. Sendo praxe dos trabalhos de Miyazaki, o filme foi feito da maneira mais tradicional: à mão e utilizando a computação gráfica em menor quantidade.\n[…]\nMononoke Hime foi um grande sucesso mundial arrecadando cerca de US$ 170 milhões, além de ter conseguido inúmeras críticas positivas. Foi o filme com a maior bilheteria da historia no Japão até a estreia de Titanic.\n[…]\nNo site agregador de críticas Rotten Tomatoes, 93% das 116 resenhas dos críticos são positivas, com uma classificação média de 8,1/10. O consenso do site diz: \"Com sua história épica e visuais de tirar o fôlego, Mononoke Hime é um marco no mundo da animação.\" O Metacritic, que usa uma média ponderada, atribuiu ao filme uma pontuação de 76 em 100, baseado em 29 críticos, indicando \"aclamação universal\".\n[…]\nPor tratar de temáticas ambientais, devido ao seu sucesso global e por ter como público alvo a população juvenil, a obra de Hayao Miyazaki foi estudada por pesquisadores com o objetivo de ser utilizada em escolas como um recurso pedagógico para tratar da importância do cuidado com o meio ambiente dentro da perspectiva crítica da Educação Ambiental.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Túmulo dos Vagalumes",
      "descricao": "Filme de animação de 1988 do Studio Ghibli sobre dois irmãos órfãos no fim da Segunda Guerra Mundial."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Túmulo dos Vagalumes acompanha dois irmãos órfãos em qual cidade portuária japonesa, bombardeada em 1945?",
    "resposta": "Kobe",
    "fonte": [
      "https://en.wikipedia.org/wiki/Grave_of_the_Fireflies"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Grave_of_the_Fireflies",
        "situacao": "ok",
        "texto": "Grave of the Fireflies is a 1988 Japanese animated war film written and directed by Isao Takahata. It stars the voices of Tsutomu Tatsumi, Ayano Shiraishi, Yoshiko Shinohara, and Akemi Yamaguchi. Based on Akiyuki Nosaka's 1967 semi-autobiographical short story of the same name, the film is set in Kobe shortly after its bombing by the U.S. Army Air Forces, and follows two orphaned siblings who desp\n[…]\nIn March 1945, American bombers destroy most of Kobe during the waning days of the Pacific War. 14-year-old Seita and his 4-year-old sister, Setsuko, children of an Imperial Japanese Navy captain, survive, but their mother dies. She is cremated in a mass grave outside and Seita is seen carrying a small wooden box containing her ashes. Seita conceals their mother's death from Setsuko. The siblings move in with an aunt. He hides his mother's box of ashes in the garden.\n[…]\nGrave of the Fireflies was Takahata's first animated film produced with Studio Ghibli.\n[…]\nNTV in Japan produced a live-action TV drama of Grave of the Fireflies, in commemoration of the 60th anniversary of the end of World War II. The drama aired on 1 November 2005. Like the animated film, the live-action version of Grave of the Fireflies focuses on two siblings struggling to survive the final months of the war in Kobe, Japan.\n[…]\nA second live-action version was released in Japan on 5 July 2008, featuring Reo Yoshitake as Seita, Rina Hatakeyama as Setsuko, Keiko Matsuzaka as the aunt, and Seiko Matsuda as the children's mother. Like the animated film, this live-action version of Grave of the Fireflies focuses on two siblings struggling to survive the final months of the war in Kobe, Japan.\n[…]\nGrave of the Fireflies at Nausicaa.net\n[…]\nGrave of the Fireflies at IMDb\n[…]\nHotaru no haka (Grave of the Fireflies) at Rotten Tomatoes\n[…]\nHotaru no haka (Grave of the Fireflies) (film) at Anime News Network's encyclopedia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hotaru_no_Haka",
        "situacao": "ok",
        "texto": "Hotaru no Haka (火垂るの墓 ; Brasil: Túmulo dos Vagalumes ou O Túmulo dos Vagalumes / Portugal: O Túmulo dos Pirilampos) é um filme japonês de animação e drama, lançado em 1988. Dirigido por Isao Takahata e produzido pelo Studio Ghibli, o seu roteiro é baseado no romance semi-autobiográfico de Akiyuki Nosaka. Hotaru no Haka é situada na cidade de Cobe, no Japão, e conta a dura história de dois irmãos (\n[…]\nEm seu lançamento nos cinemas, em 16 de abril de 1988, Hotaru no Haka foi lançando junto a Tonari no Totoro, de Hayao Miyazaki. Tanto Isao Takahata como Miyazaki, ambos fundadores do Studio Ghibli, queriam mostrar \"os dois lados da questão que tratavam\".\n[…]\nNota de cinco estrelas vieram de Steve Rose, do The Guardian e da revista Time Out; com o primeiro dizendo: \"esta obra-prima japonesa é uma história de guerra tão dolorosa como qualquer longa-metragem em live-action\". \"Hotaru no Haka não é um filme a ser levado de ânimo leve. Nem sequer ser apreciado. É uma obra que exige — e merece — concentração total e rendição emocional\", registrou o editorial da Time Out.\n[…]\nApós o seu lançamento internacional, notou-se que públicos diferentes interpretaram Hotaru no Haka de forma contrária devido a diferenças culturais. Por exemplo, quando o filme foi assistido pelos espectadores japoneses, a decisão de Seita de não voltar à casa da sua tia foi vista como uma decisão compreensível, pois conseguiram compreender como Seita havia sido criado para valorizar o seu orgulho e o de seu país.\n[…]\n«Grave of the Fireflies» (PDF) (em inglês)  — estudo feito sobre o filme pela Association for Asian Studies.\n[…]\n«\"Túmulo dos Vagalumes\" (Hotaru no Haka, 1988), de Isao Takahata: objetos de memória que se atualizam – esquecimentos que lampejam» (PDF)  — texto dissertativo por Rafael Colombo Martineli, da Universidade Federal de Uberlândia.\n[…]\n«Ficha técnica de Hotaru no Haka no site oficial do Studio Ghibli» (em japonês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Ikki de Fênix",
      "descricao": "Cavaleiro de Bronze da constelação de Fênix na obra Saint Seiya (Os Cavaleiros do Zodíaco)."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em Os Cavaleiros do Zodíaco, Ikki conquistou a armadura de Fênix após um treino cruel em qual ilha?",
    "resposta": "Ilha da Rainha da Morte",
    "fonte": [
      "https://en.wikipedia.org/wiki/List_of_Saint_Seiya_characters"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/List_of_Saint_Seiya_characters",
        "situacao": "ok",
        "texto": "This article comprises a list of characters that play a role in Saint Seiya (also known as Knights of the Zodiac) and its canonical sequel, Saint Seiya: Next Dimension, two manga series created, written and illustrated by Masami Kurumada.\n[…]\nA Silver Saint, disciple of Virgo Shaka along with Lotus Aghora. He tried to kill Phoenix Ikki on Canon Island. Like Shaka, Shiva was an adept of Buddhism and relied on Shingon chants and prayer to paralyze his opponents, while performing his murderous Thousand Hands Kannon's Attack (千手観音拳, Senju Shinon Ken), a lightning-fast multi-hit technique. Although a buddhist himself, Shiva was not a practitioner of his religion's peaceful and merciful doctrine and precepts. Killed by Phoenix Ikki.\n[…]\nA Silver Saint, disciple of Virgo Shaka, sent to Canon Island to kill Phoenix Ikki. In the same way as his partner Shiva, Aghora relied on a fighting style based on shingon chants of the Lotus Sutra, which proved ineffective against the Phoenix Saint, who killed him. His name is a reference to the Aghori (Sanskrit Aghora), ascetic Shaiva sadhus in Hinduism.\n[…]\nHe held much hatred against his brother Syd for all of this; yet after much convincing from Ikki (Phoenix Genma Ken included), he realized that all his actions (helping Syd to defeat Aldebaran, and later Shun when Syd was losing the battle) was due to the fact that he loved his brother very much, yet could not admit it. He then carried Syd's body into the blizzard, where Bud presumably died, wishing that he and Syd could again be brothers should they reincarnate.\n[…]\nA young girl and an elderly man from Canon Island, whose lives were endangered by the rage of Lotus Agora and Pavo Shiva. Saved by Phoenix Ikki."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_personagens_de_Saint_Seiya",
        "situacao": "ok",
        "texto": "Este artigo contém uma lista de personagens que desempenham um papel em Saint Seiya (também conhecido como Os Cavaleiros do Zodíaco) e sua continuação canônica, Saint Seiya: Next Dimension, duas séries de mangá criadas, escritas e ilustradas por Masami Kurumada.\n[…]\nIkki de Fênix (鳳凰星座（フェニックス）の一輝（イッキ）, Fenikkusu no Ikki) é o Cavaleiro de Bronze da constelação de Phoenix e irmão mais velho de Shun. Ele treinou na infernal Ilha da Rainha da Morte sob o comando de Guilty, o que o transformou em uma pessoa solitáriaa, fria e dura. Ikki aparece pela primeira vez como um antagonista, como o líder dos Cavaleiros Negros que está determinado a tomar a Armadura de Ouro de Sagitário para si e destruir os outros Cavaleiros de Bronze por vingança contra a Fundação Graad.\n[…]\nUma escrava da Ilha da Rainha da Morte que foi vendida para um fazendeiro local por apenas três sacas de grãos. Em momentos de delírios causados pelo treinamento cruel, Ikki a confundia com seu irmão Shun, porque ela e Shun tinham semblantes parecidos, exceto pela cor do cabelo e pelo sexo. Ela foi morta por Guilty, mestre de Ikki, para forçá-lo a usar o poder do seu ódio. Ela tem um histórico similar na versão do anime, porém ela é filha de Guilty.\n[…]\nMestre de Ikki de Fênix durante o seu treinamento na Ilha da Rainha da Morte. Também conhecido como Cavaleiro do Diabo, Guilty se tornou uma criatura movida a ódio puro após ser submetido ao golpe Satã Imperial do Grande Mestre. Duro, implacável e cruel, Guilty esconde seu rosto atrás de uma máscara oni. Ele aplicava métodos brutais no treinamento de Ikki, a fim de torná-lo em um ser movido a ódio puro e capaz de exercer o poder da Armadura de Fênix.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Hiromu Arakawa",
      "descricao": "Mangaká japonesa, autora de Fullmetal Alchemist e Silver Spoon."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Antes de criar Fullmetal Alchemist, Hiromu Arakawa cresceu numa fazenda de gado leiteiro em qual ilha do norte do Japão?",
    "resposta": "Hokkaido",
    "distratores": [
      "Honshu",
      "Kyushu",
      "Shikoku"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Hiromu_Arakawa"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hiromu_Arakawa",
        "situacao": "ok",
        "texto": "Hiromu Arakawa (荒川 弘, Arakawa Hiromu; born May 8, 1973) is a Japanese manga artist. She is best known as the creator of the manga series Fullmetal Alchemist (2001–2010), which became a hit both domestically and internationally, and was adapted into two anime television series. She is also known for Silver Spoon (2011–2019), the manga adaptation of The Heroic Legend of Arslan novels (since 2013), a\n[…]\nBorn on May 8, 1973, in Tokachi, Hokkaidō, Japan, Arakawa was born and raised on a dairy farm with three elder sisters and a younger brother. She aspired to be a manga artist from an early age. Throughout her school years, she would often draw on her textbooks. After graduating high school, she took oil painting classes once a month for seven years while working on her family's farm. During this time, she also created dōjinshi manga with her friends and drew yonkoma for a magazine.\n[…]\nArakawa moved to Tokyo in the summer of 1999.\n[…]\nIn July 2001, Arakawa published the first chapter of Fullmetal Alchemist in Monthly Shōnen Gangan. The series spanned 108 chapters, with the last one published in July 2010, and the series was collected in twenty-seven volumes. The series won the 49th Shogakukan Manga Award in the shōnen category in 2004.\n[…]\nFullmetal Alchemist has been adapted into two anime series by Bones. When they were creating the first, Arakawa assisted them in its early development. However, she was not involved in the making of the script, so the anime has a different ending from the manga, which she developed further.\n[…]\nIn April 2011, Arakawa began a series called Silver Spoon in Shogakukan's Weekly Shōnen Sunday. Rather than writing another fantasy series like Fullmetal Alchemist, Arakawa wanted to challenge herself by trying a more realistic story with Silver Spoon. It quickly rose among Shogakukan's best-selling titles and an anime series by A-1 Pictures began airing in July 2013."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hiromu_Arakawa",
        "situacao": "ok",
        "texto": "Hiromu Arakawa (荒川 弘, Arakawa Hiromu; 8 de maio de 1973) é uma mangaká japonesa nascida em Hokkaido. Seu mangá de renome, Fullmetal Alchemist, transformou-se num sucesso nacional e internacional, e posteriormente foi adaptado em duas séries de anime.\n[…]\nEla muitas vezes retrata a si mesma como uma vaca de óculos, pois nasceu e foi criada em uma fazenda de gado leiteiro com três irmãs mais velhas e um irmão mais novo. Seu nome de nascimento é Hiromi (弘美). O primeiro caractere de seu nome é escrito de forma idêntica ao nome masculino Hiromu. Arakawa escolheu esse nome como seu pseudônimo.\n[…]\nNascida em 8 de maio de 1973 em Hokkaido, Japão, Arakawa cresceu em uma fazenda junto com cinco irmãs. Arakawa pensava em ser uma mangaká \"desde que era pequena\", e durante seus anos de escola costumava desenhar em livros didáticos. Após concluir o ensino médio, ela teve aulas de pintura a óleo, uma vez por mês, durante sete anos, enquanto trabalhava na fazenda de sua família. Durante este período, ela também criou um mangá dojinshi junto de seus amigos e desenhou um yonkoma para uma revista.\n[…]\nEm julho de 2001, Arakawa publicou o primeiro capítulo de Fullmetal Alchemist na mesma revista. A série abrange 108 capítulos, sendo o último publicado em julho de 2010, e a série foi compilada em 27 volumes. Quando o estúdio Bones adaptou-o numa série de anime, Arakawa ajudou-os no seu desenvolvimento. Mais tarde, no entanto, ela os deixou trabalhar sozinho na realização do roteiro a fim de que ambos mangá e anime teriam finais diferentes, e também para desenvolver ainda mais o mangá.\n[…]\n2003: 49º Prêmio Shogakukan de Mangá, na categoria shōnen por Fullmetal Alchemist\n[…]\nHiromu Arakawa no Anime News Network",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Inuyasha",
      "descricao": "Mangá e anime de Rumiko Takahashi sobre uma estudante que viaja ao passado e se alia a um meio-demônio."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Em Inuyasha, a estudante Kagome cai num poço antigo e volta a qual período japonês, marcado por guerras entre senhores feudais?",
    "resposta": "Período Sengoku",
    "fonte": [
      "https://en.wikipedia.org/wiki/Inuyasha"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Inuyasha",
        "situacao": "ok",
        "texto": "Inuyasha (犬夜叉; lit. 'Dog Yaksha') is a Japanese manga series written and illustrated by Rumiko Takahashi. It was serialized in Shogakukan's shōnen manga magazine Weekly Shōnen Sunday from November 1996 to June 2008, with its chapters collected in 56 tankōbon volumes.\n[…]\nThe series follows Kagome Higurashi, a fifteen-year-old middle school girl from modern-day Tokyo who is transported to the Sengoku period after falling into a well in her family shrine, where she meets the half-dog demon, half-human Inuyasha. After the sacred Shikon Jewel re-emerges from deep inside Kagome's body, she inadvertently shatters it into dozens of fragments that scatter across Japan.\n[…]\nFive hundred years later, Kagome Higurashi lives on the grounds of her family's Shinto shrine, with her mother, grandfather and younger brother. On her fifteenth birthday, Kagome is dragged into the enshrined Bone Eater's Well (骨喰いの井戸, Honekui no Ido) by a centipede demon and sent back in time to the Sengoku period in 1546. The Shikon Jewel manifests from within the body of Kagome, who is Kikyo's reincarnation, and she desperately frees Inuyasha from the tree to kill the centipede demon.\n[…]\nIn that time, the Sengoku period changes drastically: Sango and Miroku marry and have three children together, Kohaku continues his role as a demon slayer, and Shippō trains to make his demon magic stronger. Back in the present, Kagome graduates from high school and manages to get the Bone Eater's Well in her backyard to work again. She returns to the Sengoku period, where she reunites with Inuyasha, marries him, and trains with Kaede to become a top-level priestess.\n[…]\nViz's official Inuyasha website\n[…]\nInuyasha (manga) at Anime News Network's encyclopedia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/InuYasha",
        "situacao": "ok",
        "texto": "InuYasha (犬夜叉), também conhecido como Sengoku Otogizōshi InuYasha (戦国御伽草子 犬夜叉; lit. \"Inuyasha: Contos do Período Sengoku\"), é uma série de mangá shōnen escrita e ilustrada por Rumiko Takahashi. Foi publicada na revista Weekly Shōnen Sunday entre 13 de novembro de 1996 e 18 de junho de 2008, totalizando 56 volumes tankōbon.\n[…]\nA série gira em torno de Kagome Higurashi, uma garota de quinze anos do ensino médio da atual Tóquio que é transportada para o Período Sengoku depois de cair em um poço no santuário de sua família, onde conhece o meio-yōkai Inuyasha. Depois que a sagrada Joia de Quatro Almas ressurge das profundezas do corpo de Kagome, ela inadvertidamente a quebra em dezenas de fragmentos que se espalham pelo Japão.\n[…]\nA história começa em Tóquio, no Japão, com uma garota de 15 anos chamada Kagome Higurashi. Ela vive com sua mãe, seu avô e seu irmão mais novo, Sota, nas terras de um santuário xintoísta. Quando ela vai procurar seu gato, Buyo, no poço perto de sua casa, um monstro a puxa para o Poço Come-Ossos (骨喰いの井戸, Honekui no Ido) e a leva consigo. Assim, ela reaparece no período Sengoku do Japão.\n[…]\nRumiko Takahashi escreveu InuYasha depois de terminar Ranma ½. Diferente dos seus trabalhos anteriores, que eram focados na comédia romântica, Takahashi queria fazer uma história mais sombria. Com o objetivo de retratar temas violentos de maneira simples, ela utilizou o Período Sengoku, pois as guerras eram comuns. Ela não fez nenhuma pesquisa para desenhar os samurais ou castelos, pois considerou que aquilo era um conhecimento universal.\n[…]\nPágina oficial do mangá InuYasha na Shonen Sunday (em japonês)\n[…]\nPágina oficial do anime InuYasha na Sunrise (em japonês)\n[…]\nPágina oficial do anime InuYasha na Yomiuri Television (em japonês)\n[…]\nPágina oficial do anime InuYasha: The Final Act na Sunrise (em japonês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Neon Genesis Evangelion",
      "descricao": "Anime japonês de 1995, dirigido por Hideaki Anno, sobre adolescentes que pilotam robôs gigantes contra criaturas chamadas Anjos."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Lançado em 1995, o anime Neon Genesis Evangelion mostra adolescentes pilotando robôs gigantes em qual ano, então no futuro?",
    "resposta": "2015",
    "distratores": [
      "2000",
      "2025",
      "2049"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Neon_Genesis_Evangelion"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Neon_Genesis_Evangelion",
        "situacao": "ok",
        "texto": "Neon Genesis Evangelion (Japanese: 新世紀エヴァンゲリオン, Hepburn: Shin Seiki Evangerion; lit. 'New Century Evangelion' in Japanese and lit. 'New Beginning Gospel' in Greek), also known as simply Evangelion or Eva, is a Japanese anime television series produced by Gainax and Tatsunoko Production, and directed by Hideaki Anno. It was broadcast on TV Tokyo and its affiliates from October 1995 to March 1996.\n[…]\nOn July 27, 2011, ADV sent a letter to Gainax requesting a refund, but Gainax argued that it retained the right to veto any financing it deemed unacceptable. In August 2011, ADV filed a lawsuit against Gainax. In 2015, Evangelion: Another Impact, a 3D-rendered short film directed by Shinji Aramaki that served as a collaboration between the Khara studio and the media company Dwango, was released and streamed as the twelfth anime short from the Japan Animator Expo on February 8.\n[…]\nAccording to Italian critic Guido Tavassi, Evangelion's mecha design, characterized by a greater resemblance to the human figure, and the abstract designs of the Angels, also had a significant impact on the designs of future anime productions. Nobuhiro Watsuki designed several characters in Rurouni Kenshin based on characters from Neon Genesis Evangelion, namely Uonuma Usui, Honjō Kamatari and Fuji.\n[…]\nIn 2006, Matt Greenfield stated that the franchise had earned over $2 billion. A 2007 estimate placed total sales of 6,000 related goods at over ¥150 billion. By 2015, more than two million Evangelion pachinko and pachislot machines had been sold, generating ¥700 billion in revenue.\n[…]\nSantiago Iglesias, José Andrés; Soler Baena, Ana, eds. (December 9, 2021). Anime Studies: Media-Specific Approaches to Neon Genesis Evangelion. Stockholm University Press. doi:10.16993/bbp. ISBN 978-91-7635-167-3.\n[…]\nNeon Genesis Evangelion at IMDb\n[…]\nNeon Genesis Evangelion (anime) at Anime News Network's encyclopedia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Neon_Genesis_Evangelion",
        "situacao": "ok",
        "texto": "Neon Genesis Evangelion (japonês: 新世紀エヴァンゲリオン, Hepburn: Shin Seiki Evangerion; lit. \"Evangelho do Novo Século\") é uma série de anime japonesa do gênero mecha dirigida por Hideaki Anno, produzida pelo estúdio Gainax e animada pela Tatsunoko que foi transmitida pela TV Tokyo de 4 de outubro de 1995 a 27 de março de 1996. O elenco inclui Megumi Ogata como Shinji Ikari, Kotono Mitsuishi como Misato Ka\n[…]\nNeon Genesis Evangelion foi aclamado pela crítica, mas também gerou polêmica, com destaque para os dois últimos episódios, que são particularmente controversos. Em 1997, Anno e o Gainax lançaram o longa-metragem The End of Evangelion, mostrando o final de uma perspectiva diferente. A série original levou ao renascimento da indústria do anime e se tornou um ícone cultural.\n[…]\nEm 2015, quinze anos após um cataclismo global conhecido como Segundo Impacto, o adolescente Shinji Ikari é convocado para a futurística cidade de Tokyo-3 por seu pai distante Gendo Ikari, diretor de uma força paramilitar especial chamada Nerv. Shinji testemunha as forças das Nações Unidas lutando contra um Anjo, uma criatura de uma raça de seres monstruosos gigantes cujo despertar foi predito pelos Manuscritos do Mar Morto.\n[…]\nO desenvolvimento da série Neon Genesis Evangelion foi feito com prazos apertados durante toda a sua produção. Os cortes iniciais dos dois primeiros episódios foram exibidos no segundo festival da Gainax em julho de 1995, apenas três meses antes de irem ao ar na televisão. No décimo terceiro episódio, \"Lilliputian Hitcher\", a série começou a se desviar significativamente da história original, e o projeto inicial foi abandonado.\n[…]\n«Neon Genesis Evangelion». na editora JBC\n[…]\n«Neon Genesis Evangelion Edição Especial». na editora JBC\n[…]\nNeon Genesis Evangelion (anime) na enciclopédia do Anime News Network (em inglês)\n[…]\nNeon Genesis Evangelion (mangá) na enciclopédia do Anime News Network (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Meu Amigo Totoro",
      "descricao": "Filme de animação de 1988 de Hayao Miyazaki, produzido pelo Studio Ghibli."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Lançado em 1988, Meu Amigo Totoro mostra duas irmãs no interior do Japão em qual década?",
    "resposta": "Anos cinquenta",
    "fonte": [
      "https://en.wikipedia.org/wiki/My_Neighbor_Totoro"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/My_Neighbor_Totoro",
        "situacao": "ok",
        "texto": "My Neighbor Totoro is a 1988 Japanese animated fantasy film written and directed by Hayao Miyazaki and animated by Studio Ghibli for Tokuma Shoten. It stars the voices of Noriko Hidaka, Chika Sakamoto and Hitoshi Takagi, and focuses on two young sisters who, after moving with their father to the countryside, experience interactions with friendly wood spirits in postwar Japan.\n[…]\nTokuma Shoten released My Neighbor Totoro on VHS and LaserDisc in August 1988. Buena Vista Home Entertainment Japan (now Walt Disney Japan) reissued the VHS on June 27, 1997, as part of their series Ghibli ga Ippai. Disney released the film on Blu-ray in Japan on 2012.\n[…]\nThe soundtrack for My Neighbor Totoro was first released in Japan on May 1, 1988, by Tokuma Shoten, and includes the musical score used in the film, except for five vocal pieces that were performed by Azumi Inoue, including \"Stroll\", \"A Lost Child\", and \"My Neighbor Totoro\". It had previously been released as an Image Song CD in 1987 that contains some songs that were not included in the film.\n[…]\nIn Japan in May 1988, Tokuma published a four-volume series of ani-manga books, which use color images and lines directly from My Neighbor Totoro. The series was licensed for English-language release in North America by Viz Media, which released the books from November 10, 2004, through February 15, 2005. A 111-page picture book based on the film and aimed at young children was released by Tokuma on June 28, 1988, and, in a 112-page English translation, by Viz on November 8, 2005.\n[…]\nMy Neighbor Totoro (film) at Anime News Network's encyclopedia\n[…]\nMy Neighbor Totoro at IMDb\n[…]\nJoe Hisaishi's Soundtrack for My Neighbor Totoro Archived November 1, 2020, at the Wayback Machine, book by Kunio Hara, 33-1/3 Japan Series Archived February 2, 2021, at the Wayback Machine, Bloomsbury, ISBN 9781501345128"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tonari_no_Totoro",
        "situacao": "ok",
        "texto": "Tonari no Totoro (bra: Meu Amigo Totoro; prt: O Meu Vizinho Totoro / Totoro) é um filme de animação japonês de 1988, dos gêneros fantasia, drama e aventura, dirigido e roteirizado por Hayao Miyazaki para a Studio Ghibli.\n[…]\nO filme conta a história das duas jovens filhas (Satsuki e Mei) de um professor e suas aventuras com espíritos da floresta amigáveis no Japão rural pós-segunda guerra mundial.\n[…]\nAs irmãs Mei e Satsuke mudam-se para uma nova casa e descobrem que uma floresta nas proximidades é habitada por criaturas chamadas totoros. Elas acabam se tornando amigas do mais velho deles, e ficam boa parte do tempo com ele, pois a mãe delas está num hospital e o pai sai para dar aulas. Ao mesmo tempo que mostra a elas algumas verdades da vida, o totoro lhes mostra um mundo fantástico.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Dragon Ball",
      "descricao": "Mangá de Akira Toriyama sobre Goku e a busca pelas esferas do dragão, que deu origem a vários animes."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Em que ano Akira Toriyama começou a publicar o mangá Dragon Ball na revista Shonen Jump?",
    "resposta": "1984",
    "distratores": [
      "1980",
      "1986",
      "1990"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Dragon_Ball",
      "https://pt.wikipedia.org/wiki/Dragon_Ball"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Dragon_Ball",
        "situacao": "ok",
        "texto": "Dragon Ball (Japanese: ドラゴンボール, Hepburn: Doragon Bōru) is a Japanese media franchise created by Akira Toriyama. The series follows the adventures of protagonist Son Goku from his childhood through adulthood as he trains in martial arts. Along his journey, he makes several friends, becomes a family man, discovers his alien heritage, and battles a wide variety of villains, many of whom, like him, se\n[…]\nThe original manga, written and illustrated by Toriyama, was serialized in Weekly Shōnen Jump from 1984 to 1995, with the 519 individual chapters collected in 42 tankōbon volumes by its publisher Shueisha.Dragon Ball was originally inspired by the classical 16th-century Chinese novel Journey to the West, combined with elements of Hong Kong martial arts films. Dragon Ball characters also use a variety of East Asian martial arts styles, including karate and Wing Chun (kung fu).\n[…]\nWritten and illustrated by Akira Toriyama, Dragon Ball was serialized in the manga anthology Weekly Shōnen Jump from December 3, 1984, to June 5, 1995, when Toriyama grew exhausted and felt he needed a break from drawing. The 519 individual chapters were collected in 42 tankōbon volumes by Shueisha from September 10, 1985, through August 4, 1995.\n[…]\nDuring Dragon Ball's serialization between 1984 and 1995, Weekly Shōnen Jump magazine had a total circulation of over 2.9 billion copies, with those issues generating an estimated ¥554 billion ($6.9 billion) in sales revenue.\n[…]\nThe short film Dragon Ball: Yo! Son Goku and His Friends Return!! was created for the Jump Super Anime Tour, which celebrated Weekly Shōnen Jump's 40th anniversary, and debuted on September 21, 2008. A short animated adaptation of Naho Ōishi's Bardock spinoff manga, Dragon Ball: Episode of Bardock, was shown on December 17–18, 2011, at the Jump Festa 2012 event.\n[…]\nDragon Ball (manga) at Anime News Network's encyclopedia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dragon_Ball",
        "situacao": "ok",
        "texto": "Dragon Ball (ドラゴンボール, Doragon Bōru; pronúncia japonesa do inglês Dragon Ball, lit. Bola do Dragão, em referência aos objetos que tiveram seus nomes adaptados como Esferas do Dragão no Brasil e Bolas de Cristal em Portugal, a fim de se evitar cacofonia) é uma franquia de mídia japonesa criada por Akira Toriyama. Originalmente iniciada com uma série de mangá escrita e ilustrada por Toriyama, foi ser\n[…]\nEscrito e ilustrado por Akira Toriyama, Dragon Ball foi serializado na antologia de mangá Weekly Shonen Jump de 20 de novembro de 1984 a 23 de maio de 1995, quando Toriyama ficou exausto e sentiu que precisava de uma pausa do desenho. Os 519 capítulos individuais foram publicados em 42 volumes tankōbon pela Shueisha de 10 de setembro de 1985 a 4 de agosto de 1995.\n[…]\nOutro mangá escrito por Ōishi, o Dragon Ball: Episode of Bardock de três capítulos que gira em torno de Bardock, pai de Goku, foi publicado na revista mensal V Jump de agosto até outubro de 2011.\n[…]\nEm dezembro de 2016, um mangá spin-off intitulado Dragon Ball Side Story: The Case of Being Reincarnated as Yamcha começou a ser publicado na revista digital da Shōnen Jump da Shueisha. Escrito e ilustrado por Dragon Garow Lee, trata-se de um garoto do Ensino Médio, fã de Dragon Ball que, após morrer em um acidente, acorda no corpo de Yamcha no mundo do mangá.\n[…]\nO primeiro deles, Dragon Ball: The Complete Illustrations (Daizenshuu volume 1), publicado pela primeira vez no Japão em 1995, contém todas as 264 ilustrações coloridas que Akira Toriyama desenhou para as capas, brindes de bônus e especiais da revista Weekly Shonen Jump, e todas as capas para os 42 tankōbon. Também inclui uma entrevista com Toriyama em seu processo de trabalho. Todos estão agora esgotados no Japão.\n[…]\nDragon Ball AF foi uma série sequela hipotética cuja história tem circulado na Internet há anos, mas que Toriyama sempre negou a autoria."
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Os Cavaleiros do Zodíaco",
      "descricao": "Mangá e anime de Masami Kurumada sobre guerreiros que protegem a deusa Atena, chamado Saint Seiya no Japão."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Os Cavaleiros do Zodíaco viraram febre entre as crianças brasileiras ao estrear na Rede Manchete em qual ano?",
    "resposta": "1994",
    "distratores": [
      "1990",
      "1997",
      "2000"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Os_Cavaleiros_do_Zod%C3%ADaco"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Os_Cavaleiros_do_Zod%C3%ADaco",
        "situacao": "ok",
        "texto": "Saint Seiya (聖闘士星矢（セイントセイヤ）, Seinto Seiya; Tradução Adaptada: \"O Santo Guerreiro Seiya\") ou Os Cavaleiros do Zodíaco (nos países lusófonos) é uma série japonesa de mangá e anime escrita e ilustrada por Masami Kurumada. Foi publicada originalmente na revista Weekly Shōnen Jump de dezembro de 1985 até dezembro de 1990.\n[…]\nO anime estreou no Brasil em 1 de setembro de 1994 pela Rede Manchete,  e permaneceu na programação do canal até 1997. O anime foi oferecido e recusado para a TV Globo e o SBT. A exibição foi possível graças a uma permuta com a fabricante de brinquedos Samtoy, que produziu os bonecos da série, em troca da exibição dos comerciais da empresa. O canal exibiu os primeiros 52 episódios do anime sem nenhum custo e a versão dublada foi feita pelo extinto estúdio de dublagem Gota Mágica.\n[…]\nAo longo dos anos, o clássico anime (1986/1990) gerou inúmeros produtos de merchandising, incluindo: cartões, figuras de ação representando os vários personagens, videogames, produtos escolares, camisetas, bonés, relógios, etc., comercializados em muitos países do mundo. Em 1994, no auge do sucesso da série na Rede Manchete, a Santoy, que trouxe os bonecos para o Brasil, esperava vender cerca de 80 mil bonecos. Vendeu 400 mil no natal de 1994, ou seja, cinco vezes mais.\n[…]\nNo auge do sucesso televisivo, Os Cavaleiros do Zodíaco foram criticados na imprensa brasileira. A Folha de S.Paulo escreveu que o sucesso era \"intrigante\" porque o desenho era \"uma produção mais que barata, com mera roupagem high-tech e narrativa truncada\" e concluiu: \"O fascínio que esse lucrativo amálgama de luta, melodrama e misticismo eletrônico exerce sobre as crianças permanece um mistério\". Na matéria, a jornalista ainda confundiu e afirmou que o anime passava na Rede Record.\n[…]\n«Mangá Os Cavaleiros do Zodíaco no Brasil (Oficial)»"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Os Cavaleiros do Zodíaco",
      "descricao": "Mangá e anime de Masami Kurumada sobre guerreiros que protegem a deusa Atena, chamado Saint Seiya no Japão."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Em Os Cavaleiros do Zodíaco, a deusa Atena é protegida por cavaleiros ligados a quantas constelações?",
    "resposta": "Oitenta e oito",
    "fonte": [
      "https://en.wikipedia.org/wiki/Saint_Seiya"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Saint_Seiya",
        "situacao": "ok",
        "texto": "Saint Seiya (Japanese: 聖闘士星矢（セイントセイヤ）, Hepburn: Seinto Seiya), also known as Saint Seiya: Knights of the Zodiac or simply Knights of the Zodiac (translated from the French title Les Chevaliers du Zodiaque), is a Japanese manga series written and illustrated by Masami Kurumada. It was serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump from 1985 to 1990, with its chapters collected in\n[…]\nIn North America, the series was licensed for English release by Viz Media in 2003. Under the title Saint Seiya: Knights of the Zodiac, Viz Media released its 28 volumes from January 21, 2004, to February 2, 2010.\n[…]\nAn original net animation (ONA) series titled Saint Seiya: Soul of Gold began streaming in 2015.\n[…]\nAnother ONA series, Knights of the Zodiac: Saint Seiya, premiered on Netflix, with six episodes, on July 19, 2019. Another six episodes premiered on January 23, 2020. The second season premiered on Crunchyroll on July 31, 2022.\n[…]\nThe Saint Seiya manga has sold over 25 million copies in Japan by 2007. It had over 35 million copies in circulation by 2017, and over 50 million copies in circulation by 2022.\n[…]\nIn Blood, Biceps, and Beautiful Eyes: Cultural Representations of Masculinity in Masami Kurumada's Saint Seiya, Lorna Piatti-Farnell noted that the masculinity to which Seiya, Shun, Hyoga and Shiryu subscribed—one centered on the achievement of just goals—was consistent with the narrative patterns frequently found in Weekly Shōnen Jump manga.\n[…]\nManga artist Tite Kubo cited Saint Seiya as a major inspiration for the weapon designs and battle sequences in his own series, Bleach.\n[…]\nPiatti-Farnell, Lorna (December 2013). \"Blood, Biceps, and Beautiful Eyes: Cultural Representations of Masculinity in Masami Kurumada's Saint Seiya\". The Journal of Popular Culture. 46 (6): 1133–1155. doi:10.1111/jpcu.12081.\n[…]\nSaint Seiya (manga) at Anime News Network's encyclopedia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Os_Cavaleiros_do_Zod%C3%ADaco",
        "situacao": "ok",
        "texto": "Saint Seiya (聖闘士星矢（セイントセイヤ）, Seinto Seiya; Tradução Adaptada: \"O Santo Guerreiro Seiya\") ou Os Cavaleiros do Zodíaco (nos países lusófonos) é uma série japonesa de mangá e anime escrita e ilustrada por Masami Kurumada. Foi publicada originalmente na revista Weekly Shōnen Jump de dezembro de 1985 até dezembro de 1990.\n[…]\nComo ele achava que esportes simples como judô ou karatê não seriam interessantes o suficiente, ele acrescentou aspectos da mitologia grega e constelações para torná-lo inovador. No entanto, o conceito básico de Saint Seiya era ser um mangá nekketsu com um toque de \"moda\" adicionado pelas Armaduras dos Cavaleiros.\n[…]\nEscrito e ilustrado por Masami Kurumada, Saint Seiya foi serializado na revista de mangá shōnen Weekly Shōnen Jump da Shueisha de 1 de janeiro de 1986,  a 19 de novembro de 1990. O último capítulo foi publicado na primeira edição da V Jump (lançada como uma edição extra da Weekly Shōnen Jump) em 12 de dezembro de 1990. A Shueisha coletou seus capítulos em vinte e oito volumes tankōbon, lançados de 10 de setembro de 1986,  a 10 de abril de 1991.\n[…]\nNa América do Norte, a série foi licenciada para lançamento em inglês pela Viz Media em 2003. Sob o título Saint Seiya: Knights of the Zodiac, a Viz Media lançou seus vinte e oito volumes de 21 de janeiro de 2004,  a 2 de fevereiro de 2010.\n[…]\nEm 2017, foi anunciada uma colaboração entre a Toei Animation e a produtora de Hong Kong, A Really Good Film Company. Na conferência de imprensa, os planos para um filme live-action de Saint Seiya foram detalhados,  e o diretor polonês Tomasz Bagiński foi anunciado como responsável pelas filmagens, com base na série clássica de 1986, que deveria ocorrer no verão do hemisfério norte de 2019. O título oficial do filme é Os Cavaleiros do Zodíaco - Saint Seiya: O Começo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Weekly Shōnen Jump",
      "descricao": "Revista semanal japonesa de mangás da editora Shueisha."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "A revista japonesa Weekly Shonen Jump, da editora Shueisha, foi lançada em qual década?",
    "resposta": "Anos sessenta",
    "fonte": [
      "https://en.wikipedia.org/wiki/Weekly_Sh%C5%8Dnen_Jump"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Weekly_Sh%C5%8Dnen_Jump",
        "situacao": "ok",
        "texto": "Weekly Shōnen Jump (Japanese: 週刊少年ジャンプ, Hepburn: Shūkan Shōnen Janpu; stylized in English as WEEKLY JUMP) is a weekly shōnen manga anthology published in Japan by Shueisha under the Jump line of magazines. The manga series within the magazine consist of many action scenes and a fair amount of comedy. Chapters of the series that run in Weekly Shōnen Jump are collected and published in tankōbon volu\n[…]\nWeekly Shōnen Jump, in association with parent company Shueisha, holds annual competitions for new or up and coming manga artists to create one-shot stories. The best are put to a panel of judges (including manga artists past and present) where the best are given a special award for the best of these new series. The Tezuka Award, named for manga pioneer Osamu Tezuka, is given for all different styles of stories.\n[…]\nWeekly Shōnen Jump is the bestselling manga magazine in Japan. In 1982, Weekly Shōnen Jump had a circulation of 2.55 million. By 1995, circulation numbers swelled to 6.53 million. The magazine's former editor-in-chief Masahiko Ibaraki (2003–2008) stated this was due to the magazine including \"hit titles such as Dragon Ball, Slam Dunk, and others.\" After hitting this peak, the circulation numbers continued to drop.\n[…]\nWeekly Shōnen Jump formerly ran a manga line of aizōban editions called Jump Comics Deluxe. Jump Comics+ is the imprint for all the manga series exclusively digitally released on the app and website Shōnen Jump+ after the chapters of the series get reunited and released in print in tankōbon format. Weekly Shōnen Jump has also run a line of light novels and guidebooks called Jump J-Books. Weekly Shōnen Jump has also run a line bunkobon editions called Shueisha Comic Bunko.\n[…]\nList of series run in Weekly Shōnen Jump\n[…]\nWeekly Shōnen Jump at Viz Media\n[…]\nWeekly Shōnen Jump  at Anime News Network's encyclopedia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Weekly_Sh%C5%8Dnen_Jump",
        "situacao": "ok",
        "texto": "Weekly Shōnen Jump (週刊少年ジャンプ, Shūkan Shōnen Janpu; estilizado em inglês como WEEKLY JUMP) é uma antologia semanal de mangás shōnen publicada pela editora Shueisha sob a linha de revistas \"Jump Comics\". É a revista que está há mais tempo em atividade, tendo sua primeira edição lançada em 1º de agosto de 1968.\n[…]\nWeekly Shōnen Jump foi lançada pela primeira vez pela Shueisha em 2 de julho de 1968 e passou a competir com outras editoras de sucesso como a Weekly Shōnen Magazine e a Weekly Shōnen Sunday. Antes da vigésima edição, a revista era chamada simplesmente de Shōnen Jump, que era originalmente uma revista bissemanal e só veio a se tornar semanal em 1969.\n[…]\nAté a 13.ª edição, lançada em 2018, a revista havia registrado mais de 7,5 bilhões de cópias vendidas, tornando-se a revista de quadrinhos/mangás mais vendida, à frente de concorrentes como Weekly Shōnen Magazine e Weekly Shōnen Sunday. Os meados de 1980 para os meados de 1990 representam a época em que a circulação da revista atingiu seu pico, com 6,53 milhões cópias por semana, com um total de leitores de 18 milhões de pessoas no Japão.\n[…]\nDesde então, experimentou um drástico declínio nas vendas físicas, em razão de diversos fatores como o modo de consumo de mangás que vem migrando para meios digitais desde 2014. Em 2016, houve uma circulação média de 2,2 milhões de cópias, e ao longo de 2021, a revista alcançava a média de 1,3 milhões de cópias por semana. Muitas das séries de mangás mais vendidos são originárias da Weekly Shōnen Jump.\n[…]\nA Weekly Shōnen Jump tem duas revistas-irmãs: Jump SQ (criada após a queda do Monthly Shōnen Jump) e a Saikyō Jump. A revista também tem suas publicações nos Estados Unidos, Canadá, Noruega, Suécia e Alemanha (neste último com o título de Banzai!).\n[…]\nShonen Champion\n[…]\n«Página oficial» (em japonês e inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Ash Ketchum",
      "descricao": "Treinador protagonista do anime Pokémon, chamado Satoshi no original japonês."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome japonês do treinador Ash, protagonista do anime Pokémon, é uma homenagem a qual pessoa real?",
    "resposta": "Satoshi Tajiri",
    "distratores": [
      "Shigeru Miyamoto",
      "Ken Sugimori",
      "Satoru Iwata"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Ash_Ketchum"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ash_Ketchum",
        "situacao": "ok",
        "texto": "Ash Ketchum, known as Satoshi (サトシ) in Japan, is a character in the Pokémon franchise owned by Nintendo, Game Freak, and Creatures. He was the protagonist of the Pokémon anime for the first 25 seasons, as well as the protagonist of several manga series. In Japanese, the character is voiced by Rica Matsumoto. In the English dub, he was voiced by Veronica Taylor in the first eight seasons and Sarah \n[…]\nSatoshi Tajiri, the creator of Pokémon, has stated that Ash represents the \"human aspect\" of the series, and that Ash reflects what he himself was like as a child.\n[…]\nAsh was designed by Atsuko Nishida, and named after creator Satoshi Tajiri. The character was designed to represent how Tajiri was as a child, obsessed with catching bugs.\n[…]\nTajiri noted in an interview that between Japanese and US reactions to the series, Japanese consumers focused on the character Pikachu, while the US purchased more items featuring Ash and Pikachu, his Pokémon, together. He stated that he felt the character represented the human aspect of the franchise, and was thus a necessity. The character was given a rival named Gary Oak (Shigeru Okido in the Japanese version, after Tajiri's idol/mentor Shigeru Miyamoto), loosely based on Red's rival Blue.\n[…]\nIn an interview Tajiri noted the contrast between the characters' relationship in the games and anime; while in the games they were rivals, in the anime, Shigeru represented Satoshi's master. When asked if Satoshi would equal or surpass Shigeru, Tajiri replied \"No! Never!\" Ash's character design was initially overseen by Sayuri Ichishi, replaced by Toshiya Yamada during the Diamond & Pearl series of the anime. Ash received a redesign in the Best Wishes! series, which included larger brown irises.\n[…]\nFrank, Allegra (January 3, 2017). \"Did Ash Ketchum just get his first kiss?\". Polygon. Retrieved April 15, 2024.\n[…]\nAsh Ketchum on Bulbapedia\n[…]\nAsh Ketchum on Serebii"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ash_Ketchum",
        "situacao": "ok",
        "texto": "Ash Ketchum (サトシ, Satoshi) é um personagem fictício da franquia Pokémon, propriedade das empresas Nintendo, Game Freak e Creatures.\n[…]\nCriado por Satoshi Tajiri, Ash Ketchum como é conhecido, é o protagonista da série de anime Pokémon. Ash é um treinador Pokémon cujo maior objetivo é o de se tornar o maior Mestre Pokémon do mundo.\n[…]\nSeu nome em inglês é derivado do nome japonês (como as letras 'ash' estão incluídas em 'Satoshi') e seu lema em inglês é derivado do lema japonês (como as letras \"Gotta catch 'em all!\" estão incluídas em \"Pokémon getto da ze!\"). O sonho de Ash é se tornar um Mestre Pokémon. Ele é vagamente baseado em Red, o protagonista dos jogos Pokémon Red, Green, Blue e Yellow, bem como os remakes Pokémon FireRed e LeafGreen.\n[…]\nAsh Ketchum foi mencionado pela primeira vez em um jogo eletrônico no diálogo de Pokémon Play It!, e sua primeira aparição em um jogo foi em Pokémon Puzzle League. Satoshi Tajiri, o criador de Pokémon, com quem Ash compartilha seu nome japonês, afirmou que Ash representa o 'aspecto humano' da série, e que Ash reflete como ele era quando criança.\n[…]\nNa versão japonesa, seu nome é Satoshi, derivado diretamente do nome do criador da franquia, Satoshi Tajiri. É bem provável que seu nome americano tenha sido escolhido entre os nomes disponíveis nas versões Red e Blue originais e em Pokémon Yellow, onde \"Ash\" é uma das opções de nome prontas para o personagem jogador das versões americanas, e seu sobrenome \"Ketchum\" é um trocadilho com o slogan americano da franquia, \"Gotta catch 'em all\". Na versão francesa do anime, Ash é chamado de \"Sacha\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Roronoa Zoro",
      "descricao": "Espadachim da tripulação de Luffy no mangá e anime One Piece."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome do espadachim Roronoa Zoro, de One Piece, foi inspirado em qual pirata real do século dezessete?",
    "resposta": "François l'Olonnais",
    "distratores": [
      "Henry Morgan",
      "Barba Negra",
      "Jean Lafitte"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Roronoa_Zoro"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Roronoa_Zoro",
        "situacao": "ok",
        "texto": "Roronoa Zoro (ロロノア・ゾロ, Roronoa Zoro; spelled as Zolo in some English adaptations), also known as \"Pirate Hunter\" Zoro (海賊狩りのゾロ, Kaizoku-Gari no Zoro), is a fictional character in the manga series and media franchise One Piece, created by Eiichiro Oda. The character made his first appearance in the third chapter of the series, which was first published in Japan in Shueisha's Weekly Shōnen Jump on A\n[…]\nZoro originally used two swords instead of three, and was originally planned to be part of Buggy the Clown's pirate crew before being recruited by Luffy. Zoro's surname, Roronoa, is based on the Japanese pronunciation of the name of the French pirate François l'Olonnais. In several Western adaptations, his name was spelled Zolo.\n[…]\nIn Odex's dubs of the first 104 episodes of One Piece in Singapore, Zoro was voiced by Brian Zimmerman. In 4kids Entertainment's dub of the first 104 episodes of One Piece, Zoro was renamed \"Zolo\", which was later adopted in Viz Media's adaptation of the manga; he was voiced by Marc Diraison as an adult and Andrew Rannells as a child.\n[…]\nIn One Piece volume 105, Oda revealed Zoro's family history. His father, Roronoa Arashi, was killed by pirates, and his mother, Tera, died of an illness when he was young. Zoro is a descendant of the Shimotsuki family of Wano Country through his grandmother Furiko, the older sister of Ushimaru, the daimyo of Ringo and Zoro's great-uncle. Zoro and Kuina are distant cousins, and he is a descendant of Shimotsuki Ryuma, the protagonist of the one-shot Monsters and posthumous One Piece character.\n[…]\nZoro has appeared in every One Piece licensed electronic video game to date, as well as crossover games such as Jump Super Stars, Jump Ultimate Stars, Battle Stadium D.O.N., and Jump Force.\n[…]\nList of One Piece characters\n[…]\nRoronoa Zoro's bio at One Piece's official website (in Japanese)\n[…]\n\"One Piece: Collection One\". DVDTalk."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Roronoa_Zoro",
        "situacao": "ok",
        "texto": "Roronoa Zoro (ロロノア・ゾロ, Roronoa Zoro; também conhecido como Zoro o Caçador de Piratas), é um personagem fictício da série One Piece criada por Eiichiro Oda. Na história, Zoro era um caçador de piratas que por fim se torna um quando é convencido pelo protagonista Monkey D. Luffy a ser o primeiro membro de sua tripulação, os Piratas do Chapéu de Palha. Dentro do grupo, Zoro tem a função de combatente\n[…]\nO sobrenome do personagem, Roronoa, é baseado na pronúncia japonesa do sobrenome de François L’Olonnais, um pirata francês que atuou no Caribe durante os anos 1660. Em relação a sua etnia, Zoro e seu maneirismo foram ditos pelo autor como sendo japonês caso One Piece se passasse no mundo real.\n[…]\nZoro é introduzido em One Piece amarrado a um pilar de madeira em uma base da marinha após ter arrumado confusão com Helmeppo, o filho de um capitão naval que estava aterrorizando uma cidade. Ele concorda em ficar amarrado por um mês para conseguir anistia, mas Helmeppo planejava matá-lo antes que ele conseguisse. Por conta de sua fama, o protagonista Monkey D. Luffy aparece para convidá-lo a se juntar à sua tripulação pirata.\n[…]\nTendo sido o primeiro tripulante a ser introduzido na história, Zoro vem aparecendo na maioria dos produtos de One Piece em outras mídias de entretenimento, tais como jogos, filmes e OVAs. Ele inclusive é o protagonista do quinto filme da franquia, The Cursed Holy Sword. O longa metragem envolve Zoro deixando a tripulação para ajudar seu amigo de infância Saga que está sendo controlado por uma espada amaldiçoada.\n[…]\nZoro é parceiro de Piccolo, que aqui também é um espadachim, e ambos de perdem no caminho para a festa até encontrarem Chopper e Kuririn. No especial de TV Dream 9 que junta One Piece, Dragon Ball e Toriko, Zoro participa de uma corrida com o elenco das outras obras e eventualmente luta contra Vegeta e Zebra.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "A Viagem de Chihiro",
      "descricao": "Filme de animação de 2001 de Hayao Miyazaki, produzido pelo Studio Ghibli."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Em A Viagem de Chihiro, a bruxa Yubaba toma o nome da menina e passa a chamá-la de quê?",
    "resposta": "Sen",
    "fonte": [
      "https://en.wikipedia.org/wiki/Spirited_Away"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Spirited_Away",
        "situacao": "ok",
        "texto": "Spirited Away is a 2001 Japanese animated fantasy film written and directed by Hayao Miyazaki. It was produced by Toshio Suzuki, animated by Studio Ghibli, and distributed by Toho. The film stars Rumi Hiiragi, alongside Miyu Irino, Mari Natsuki, Takashi Naito, Yasuko Sawaguchi, Tsunehiko Kamijō, Takehiko Ono, and Bunta Sugawara. It follows a young girl named  Chihiro \"Sen\" Ogino, who moves to a ne\n[…]\nHaku finds Chihiro and tells her to ask for a job from the bathhouse's boiler-man, Kamaji, a yōkai spirit. Kamaji instead asks a worker named Lin to bring Chihiro to Kamaji's master Yubaba, the witch who runs the bathhouse and who transformed Chihiro's parents. Yubaba tries to frighten Chihiro away but eventually gives her a work contract. As Chihiro signs the contract with her name (千尋), Yubaba takes away the second kanji in her name, renaming her Sen (千).\n[…]\nChihiro soon forgets her real name, and Haku explains that Yubaba controls people by taking their names; if Chihiro completely forgets her name like Haku did, she will never be able to leave the spirit world.\n[…]\nChihiro sees paper shikigami spirits attacking a dragon and recognizes the dragon as a metamorphosed Haku. When the seriously injured Haku crashes into Yubaba's penthouse, Chihiro follows him upstairs. A shikigami that stowed away on her back shapeshifts into Yubaba's twin sister Zeniba, who turns Yubaba's son, Boh, into a mouse and creates a false copy of him. Zeniba tells Chihiro that Haku has stolen a magic golden seal from her that carries a deadly curse.\n[…]\nBesides the original soundtrack, there is also an image album, titled Spirited Away Image Album (千と千尋の神隠し イメージアルバム, Sen to Chihiro no Kamikakushi Imēji Arubamu), that contains 10 tracks.\n[…]\nSpirited Away at the TCM Movie Database (archived)\n[…]\nSpirited Away (anime) at Anime News Network's encyclopedia\n[…]\nSpirited Away at the Japanese Movie Database (in Japanese)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/A_Viagem_de_Chihiro",
        "situacao": "ok",
        "texto": "A Viagem de Chihiro (千と千尋の神隠し, Sen to Chihiro no Kamikakushi; lit. O desaparecimento (escondida pelos espíritos) de Sen e Chihiro) é um filme japonês de animação, dos gêneros aventura e fantasia, lançado em 2001. O longa-metragem foi escrito e dirigido por Hayao Miyazaki, com as vozes de Rumi Hiiragi, Miyu Irino, Mari Natsuki, Takeshi Naito, Yasuko Sawaguchi, Tsunehiko Kamijō, Takehiko Ono e Bunta\n[…]\nA personagem também se encontra fora dos limites da sociedade ao se encontrar com o sobrenatural. Por sua vez, a personagem Yubaba compartilha várias semelhanças com o cocheiro de Pinóquio, já que este transforma os meninos em asnos da mesma forma que a bruxa transforma os pais em porcos. Ao conseguir emprego na casa de banhos termais, Yubaba rouba o verdadeiro nome de Chihiro (que passa a se chamar Sen), o que simbolicamente significa a morte da menina, que deve assumir então a fase adulta.\n[…]\nA cada verão Miyazaki passava suas férias em uma cabana nas montanhas com sua família e cinco jovens amigas. A Viagem de Chihiro surgiu com a ideia de criar um filme que pudesse dedicar a estas pequenas amigas. Ele tinha feito filmes como Meu amigo Totoro e Serviço de entregas da Kiki, os quais dirigiu para meninos e adolescentes, mas nunca para meninas de dez anos. Para se inspirar, leu revistas de mangá  Shōjo como Nakayoshi e Ribon, que as meninas liam na cabana.\n[…]\nA Viagem de Chihiro ganhou trinta e cinco prêmios, entre os quais incluem o Oscar de Melhor Filme de Animação em 2003. Assim, se tornou o segundo filme a receber esta condecoração, pois a categoria se iniciou em 2002, sendo o primeiro filme em língua não-inglesa a ganhar o prêmio, além de ter sido o único a atingir esse feito até 2024, onde o filme O Menino e a Garça, também dirigido por Hayao Miyazaki e produzido pelo Studio Ghibli, ganhou o Oscar de Melhor Animação de 2023.[carece de fontes]?",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Bulma",
      "descricao": "Cientista de cabelo azul, amiga de Goku desde o início de Dragon Ball e mãe de Trunks e Bra."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Em Dragon Ball, Bulma e seus filhos Trunks e Bra têm nomes inspirados em que tipo de coisa?",
    "resposta": "Roupas íntimas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Bulma"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bulma",
        "situacao": "ok",
        "texto": "Bulma (Japanese: ブルマ, Hepburn: Buruma) is a fictional character in the Dragon Ball franchise, first appearing in the original manga series created by Akira Toriyama, Goku's first friend and the eventual wife of Vegeta and mother of Trunks and Bulla. She made her appearance in the first chapter \"Bulma and Son Goku\", published in Weekly Shōnen Jump magazine on 19 June 1984, issue 51, meeting Goku an\n[…]\nAlong with creating the Dragon Radar, a device that detects the energy signal emitted by a Dragon Ball, Bulma's role as an inventor becomes important at several points in the series; including the time machine that brings her future son Trunks to the past.\n[…]\nHer name \"Buruma\" is the Japanese pronunciation of \"bloomer\", a type of gym shorts worn by Japanese girls at school. As with most characters in the Dragon Ball series, Bulma's name is consistent with those of the rest of her family. All of Bulma's family members are named after underclothing of some sort. Her father's name is Dr. Brief, while her son and daughter are named Trunks and Bra (ブラ, Bura; \"Bulla\" in the English anime dub) respectively.\n[…]\nList of Dragon Ball characters\n[…]\nMark I. West (2008). The Japanification of Children's Popular Culture: From Godzilla to Miyazaki. Scarecrow Press. p. 206. ISBN 978-0-8108-5121-4. Retrieved 27 May 2013. Productions made major changes in the Dragon Ball...mostly concerning nudity...In the Japanese version, Master Roshi asks Bulma..while in the American version...\n[…]\nBrian Camp; Julie Davis (2007). Anime Classics Zettai!: One Hundred Must-see Japanese Animation Masterpieces. STONE BRIDGE Press. p. 109. ISBN 978-1-933330-22-8. Retrieved 27 May 2013. When Bulma, a teenage girl who's a scientific genius, wants [Goku] to give up his grandfather's Dragon Ball, which she has tracked down with her dragon radar...\n[…]\nBulma's official blog"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bulma",
        "situacao": "ok",
        "texto": "Bulma (ブルマ, Buruma) é uma personagem fictícia do mangá Dragon Ball criado por Akira Toriyama, e também das adaptações em anime de tal publicação. Bulma faz sua primeira aparição no capítulo Bulma e Son Goku (ブルマと孫悟空, Buruma to Son Gokū), publicado pela primeira vez na revista Weekly Shonen Jump em 20 de novembro de 1984.\n[…]\nAs invenções de Bulma têm grande importância em certos pontos da série. Suas criações de maior destaque são o radar do dragão, um aparato que permitia que ela encolhesse, uma máquina do tempo que trouxe seu filho Trunks ao passado em Dragon Ball Z e um gerador que possibilitou que seu marido Vegeta alcançasse o nível Super Saiyajin 4 em  Dragon Ball GT.\n[…]\nAssim como a maioria dos personagens da série Dragon Ball, o nome de Bulma é consistente com os do resto de sua família, que possuem nomes referentes a roupas de baixo.\n[…]\nSuas vestimentas também se alteram a cada arco da história, tornando-a uma personagem não tão estável quanto as outras. Muitas de suas roupas apresentam o símbolo da Corporação Cápsula.\n[…]\nNos jogos da série Dragon Ball, Bulma normalmente aparece como personagem não jogável. Entretanto, ela é jogável em alguns como no jogo de Dragonball Evolution. Ela é uma personagem de suporte nos jogos Jump Super Stars e Jump Ultimate Stars. A canção \"Koi no NAZONAZO\" se foca na relação amorosa entre Bulma e Vegeta. Ela também é citada na música \"Goku\" de Soulja Boy Tell 'Em.\n[…]\nNo crossover Cross Epoch, que junta o elenco principal de Dragon Ball com o de One Piece, Bulma se encontra com Nami e as duas se tornam piratas espaciais. A personagem Wilma do mangá espanhol Dragon Fall é uma paródia de Bulma. Bulma ainda apareceu estampada nas latas de café Pokka, no Japão, durante uma parceira com a franquia Dragon Ball.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Professor Agasa",
      "descricao": "Hiroshi Agasa, inventor vizinho e aliado do protagonista no mangá Detetive Conan."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Em Detetive Conan, o nome do inventor Professor Agasa homenageia qual escritora britânica de romances policiais?",
    "resposta": "Agatha Christie",
    "fonte": [
      "https://en.wikipedia.org/wiki/List_of_Case_Closed_characters",
      "https://www.detectiveconanworld.com/wiki/Hiroshi_Agasa"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/List_of_Case_Closed_characters",
        "situacao": "ok",
        "texto": "The manga series Case Closed, also known as Detective Conan, features a large cast of fictional characters created by Gosho Aoyama. Set in modern-day Japan, it follows amateur high school detective Jimmy Kudo as he solves cases in an episodic fashion while in his childhood body and under the alias Conan Edogawa. He is joined by childhood friend Rachel Moore and her father Richard, who runs a detec\n[…]\nDr. Herschel Agasa, also officially known as Hiroshi Agasa (阿笠 博士, Agasa Hiroshi),[vol. 40, 49:character guide] appears as an absent-minded professor and neighbor to Jimmy Kudo. He is one of the few characters in the story who knows of Kudo's predicament and helps hide his identity as Conan Edogawa, inventing devices such as the voice-impersonating bowtie, tracking glasses, and badges, enhanced shoes and hoverboards, and an instant soccer ball so Conan can fend for himself.\n[…]\nVoiced by: Fumihiko Tachiki (Japanese); Kyle Hebert (Funimation), Christopher Sabat (Funimation), Edward Bosco (Bang Zoom), David Matranga (Studio Nano) (English)\n[…]\nVoiced by: Wataru Takagi (Japanese); Doug Burks (Funimation), Christopher Bevins (Bang Zoom), Diego Klock-Perez (Macias Group), Aaron Campbell (Studio Nano) (English)\n[…]\nVoiced by: Kaneto Shiozawa (1997–2000), Kazuhiko Inoue (2000–present) (Japanese); Eric Vale (Funimation), Greg Chun (Bang Zoom), Christopher Diaz (Macias Group), Phil Parsons (Studio Nano) (English)\n[…]\nVoiced by: Yuji Takada (Japanese); Christopher Diaz (English)\n[…]\nVoiced by: Shūichi Ikeda, Yuki Kaji (young) (Japanese); Keith Silverstein (Bang Zoom), Clay Cartland (Macias Group), Christopher Wehkamp (Studio Nano) (English)\n[…]\nVoiced by: Nobuyuki Hiyama (Japanese); Christian LaMonte (Bang Zoom), Alex Machado (Macias Group) (English)\n[…]\nAoyoma, Gosho. Detective Conan (名探偵コナン, Meitantei Konan) (in Japanese). Shogakukan."
      },
      {
        "url": "https://www.detectiveconanworld.com/wiki/Hiroshi_Agasa",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Doraemon",
      "descricao": "Gato-robô vindo do futuro, protagonista do mangá e anime de Fujiko F. Fujio."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome do gato-robô Doraemon vem de uma expressão japonesa para que tipo de gato?",
    "resposta": "Gato vira-lata",
    "fonte": [
      "https://en.wikipedia.org/wiki/Doraemon_(character)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Doraemon_(character)",
        "situacao": "ok",
        "texto": "Doraemon (Japanese: ドラえもん) is the titular character of the manga and anime series Doraemon, created by Fujiko Fujio. Doraemon is a male robotic cat that travels back in time from the 22nd century to aid a preteen boy named Nobita Nobi in his daily life.\n[…]\nIn India, Doraemon has become one of the most popular and recognizable animated characters among children. A 2010 study by Ormax Media found Doraemon to be the top favorite character among kids aged 6–14, ranking above classic characters like Tom and Jerry. Doraemon has a massive viewership base in India, with reports estimating it reaches over 480 million viewers nationwide, including adults.\n[…]\nPolitician Osamu Fujimura is known as the \"Doraemon of Nagatacho\" due to his figure and warm personality. Sumo wrestler Takamisugi was nicknamed \"Doraemon\" because of his resemblance to the character. ESP Guitars, has also made several Doraemon shaped guitars.\n[…]\nDuring 2014, Doraemon was featured on the cover of all 51 magazines published by Shogakukan.\n[…]\nThe Doraemon character has received criticism in mainland Chinese media outlets where they considered Doraemon to be a politically subversive character and that it was a tool of Japan's \"cultural invasion\".\n[…]\nIn 2019, a resolution was made in the Pakistan assembly to ban Doraemon claiming that it has  \"harmful impact on children\". One of the reason cited by the lawmaker is the depiction of mixed-sex education, which he labelled as incompatible with Pakistani culture and Muslim culture.\n[…]\nDoraemon official website (in Japanese)\n[…]\nDoraemon movies official website (in Japanese)\n[…]\nDoraemon official website at Asahi TV (in Japanese)\n[…]\nDoraemon (manga) at Anime News Network's encyclopedia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Doraemon_%28personagem%29",
        "situacao": "ok",
        "texto": "Doraemon (ドラえもん) (conhecido no Brasil como Doraemon: O Super Gato na versão de 1979, Doraemon: O Gato do Futuro na versão de 2005 e em Portugal como Doraemon: O Gato Cósmico)  é um mangá criado por Fujiko F. Fujio que, mais tarde, foi transformado em um  anime de sucesso. A série é sobre um gato robótico chamado Doraemon que voltou dois séculos no passado para ajudar um estudante desastrado: Nobit\n[…]\nO nome Doraemon provém da aglutinação de duas palavras: dora, de dora neko (gato de rua) e \"emon\", um sufixo arcaico em nomes masculinos japoneses, como Goemon.\n[…]\nA ideia para o desenvolvimento da série nasceu de forma totalmente aleatória: após escorregar no brinquedo de sua filha e ouvir o miado de um gato, Fujio começou a pensar em uma máquina capaz de ajudá-lo na criação de um novo mangá  Para configurar a obra e o personagem principal, o autor usou vários elementos de seu quadrinho anterior, Obake no Q-tarō, centrado em um fantasma que vive com uma família humana, repetindo a fórmula.\n[…]\nUma pesquisa realizada em 2010 pela Tokyo Polytechnic University elegeu o anime Doraemon (a par da franquia Dragon Ball ) como o produto mais adequado para expressar o conceito de Cool Japan no mundo; da mesma forma, em uma pesquisa de 2013 sobre as almas mais exportáveis fora do território japonês, Doraemon alcançou a primeira posição, obtendo 42,6% das preferências.\n[…]\nTanto o nanga e o a série Doraemon são consideradas uma das mais influentes na história da banda desenhada e animação japonesas. Eles inspiraram numerosos mangaká, incluindo Eiichiro Oda, criador de One Piece, que desenhou a inspiração para a ideia dos frutos do diabo.\n[…]\nO termo \"Doraemon\" também se tornou, limitado ao contexto japonês, um substantivo difundido para expressar algo que tem a capacidade de satisfazer vários desejos.\n[…]\nSítio oficial (em japonês)\n[…]\nDoraemon Brasil no YouTube\n[…]\nDoraemon no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Shōnen",
      "descricao": "Categoria de mangá e anime voltada ao público masculino jovem, como Dragon Ball e Naruto."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "A palavra japonesa shōnen, que dá nome à categoria de mangás como Dragon Ball e Naruto, significa o quê?",
    "resposta": "Garoto",
    "distratores": [
      "Guerreiro",
      "Aventura",
      "Coragem"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Sh%C5%8Dnen_manga"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sh%C5%8Dnen_manga",
        "situacao": "ok",
        "texto": "Shōnen manga (少年漫画; lit. \"boys' comics\", also romanized as shonen, shounen or syônen) is an editorial category of Japanese comics targeting an audience of mainly adolescent boys. It is, along with shōjo manga (targeting adolescent girls and young women), seinen manga (targeting young adult men), and josei manga (targeting adult women), one of the primary demographic categories of manga and, by ext\n[…]\nMany of the most popular and commercially successful shōnen series originated in Weekly Shōnen Jump, including Dragon Ball by Akira Toriyama, Naruto by Masashi Kishimoto, Bleach by Tite Kubo, One Piece by Eiichiro Oda, and Slam Dunk by Takehiko Inoue.\n[…]\nWeekly Shōnen Jump and similar magazines have been influential in the international spread of shōnen manga, particularly through globally successful series such as  Dragon Ball, One Piece, and Naruto.\n[…]\nWhile shōjo made gains in popularity by the 2000s, shōnen remains the most popular category of manga, both in Japan and internationally.\n[…]\nAction stories are so dominant in shōnen manga that some manga and non-manga works are occasionally designated as shōnen not because of their ostensible target group, but because of their content focus on action and adventure. Though action narratives dominate the category, there is deep editorial diversity and a significant number of genres and subgenres within shōnen manga, especially when compared to other comic cultures outside of Japan.\n[…]\nA major narrative device in shōnen manga is rivalry between the protagonist and his opponent, with a fight or a quest often appearing as a central element; Dragon Ball is among the most popular and commercially successful examples of this archetypal story.\n[…]\nThe fourth largest magazine, albeit by a significant margin, is Weekly Shōnen Champion by Akita Shoten, which was among the most popular manga magazines in the 1970s and 1980s."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sh%C5%8Dnen",
        "situacao": "ok",
        "texto": "Mangá shonen (少年漫画, Shōnen Manga) é uma categoria editorial de quadrinhos japoneses destinado ao público de adolescente masculino. É, juntamente com o shōjo, seinen, e josei, uma das principais categorias editoriais de mangá. Dessas quatro principais categorias de mangá, shonen é considerado o mais popular.\n[…]\nO mangá shōnen é caracterizado por tramas de ação e muitas vezes humorísticas com protagonistas masculinos. Temas como artes marciais, mecha, ficção científica, esportes, terror e criaturas mitológicas são comuns nessas publicações.\n[…]\nO público real de leitores de mangás shonen estende-se significativamente além do grupo alvo, incluindo todas as idades e gêneros. Em uma pesquisa de 2006 de leitoras femininas de mangá, descobriu-se que Weekly Shōnen Jump era a revista de mangás mais popular entre esta demografia, ficando à frente de revistas shōjo, destinadas a um público feminino.\n[…]\nMangás shonen são tradicionalmente publicados em revistas focadas no público jovem masculino. No auge da indústria, em meados da década de 1990, havia 23 revistas shōnen em circulação, que, coletivamente, venderam 662 milhões de cópias.\n[…]\nUma revista de mangá normalmente tem centenas de páginas e contém mais de uma dúzia de séries ou one-shots. Uma lista das principais revistas shōnen por circulação em 2015 estão presentadas abaixo:\n[…]\nEsses são alguns exemplos de animes/mangás Shonen:\n[…]\nDragon Ball\n[…]\nNaruto",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Dragon Quest",
      "descricao": "Série japonesa de videogames de RPG criada por Yuji Horii, com personagens desenhados por Akira Toriyama."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O que o mangá Dragon Ball e a série de videogames Dragon Quest têm em comum?",
    "resposta": "Os desenhos de Akira Toriyama",
    "fonte": [
      "https://en.wikipedia.org/wiki/Dragon_Quest",
      "https://en.wikipedia.org/wiki/Akira_Toriyama"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Dragon_Quest",
        "situacao": "ok",
        "texto": "Dragon Quest, previously published as Dragon Warrior in North America until 2005, is a series of role-playing video games created by Japanese game designer Yuji Horii (Armor Project), character designer Akira Toriyama (Bird Studio), and composer Koichi Sugiyama (Sugiyama Kobo) and published by Square Enix (formerly Enix).\n[…]\nDragon Quest XII will be the first mainline title released after the deaths of series music composer Koichi Sugiyama and character designer Akira Toriyama who had been involved with the series since its inception.\n[…]\nIt focuses on the creation of the series and features series creator Yuji Horii, programmer Koichi Nakamura, composer Koichi Sugiyama, artist Akira Toriyama, and producer Yukinobu Chida. Hiro Mashima drew the one-shot Dragon Quest XI S Tōzoku-tachi no Banka (ドラゴンクエストXI S 盗賊たちの挽歌), based on Dragon Quest XI, for the October issue of V Jump, which was released on August 21, 2019.\n[…]\nThe Dragon Quest series features several recurring monsters, including Slimes, Drackies, Skeletons, Shadows, Mummies, Bags o' Laughs, and Dragons. Many monsters in the series were designed by Akira Toriyama.\n[…]\nDragon Ball creator and manga artist Akira Toriyama, who knew of Horii through the manga magazine Weekly Shōnen Jump, was commissioned to illustrate the characters and monsters to separate the game from other role-playing games of the time. The primary game designs were conceived by Horii before being handed to Toriyama to re-draw under Horii's supervision.\n[…]\nWhile Toriyama would later become more widely known with the success of Dragon Ball Z in North America, when Dragon Quest was released he was relatively unknown outside Japan. While the Dragon Quest hero was drawn in a super deformed manga style, the Dragon Warrior localization had him drawn in the \"West's template of a medieval hero\"."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Akira_Toriyama",
        "situacao": "ok",
        "texto": "Akira Toriyama (Japanese: 鳥山明, Hepburn: Toriyama Akira; April 5, 1955 – March 1, 2024) was a Japanese manga artist and character designer. He is regarded as one of the greatest and most influential authors in the history of manga and created numerous highly influential and popular series, with his most famous and successful project being the Dragon Ball franchise.\n[…]\nOn March 27, 2013, the \"Akira Toriyama: The World of Dragon Ball\" exhibit opened at the Takashimaya department store in Nihonbashi, garnering 72,000 visitors in its first nineteen days. The exhibit was separated into seven areas.\n[…]\nToriyama himself said he went against the normal convention that the strongest characters should be the largest in terms of physical size, designing many of the series' most powerful characters with small statures. Thompson concluded his analysis by saying that only Akira Toriyama drew like this at the time and that Dragon Ball is \"an action manga drawn by a gag manga artist.\" James S.\n[…]\nBesides Dr. Slump (1980–1984) and Dragon Ball (1984–1995), Toriyama predominantly drew one-shot manga and short (100–200-page) pieces, including Pink (1982), Go! Go! Ackman (1993–1994), Cowa! (1997–1998), Kajika (1998), Sand Land (2000), and Jaco the Galactic Patrolman (2013). Many of his one-shots were collected in his three-volume anthology series, Akira Toriyama's Manga Theater (1983–1997).\n[…]\nToriyama also created many character designs for various video games such as the Dragon Quest series (1986–2023), Chrono Trigger (1995), Blue Dragon (2006), and some Dragon Ball video games. He also designed several characters and mascots for various manga magazines property of Shueisha, his career-long employer and Japan's largest publishing company.\n[…]\nRichard, Olivier (2011). Akira Toriyama: le maître du manga (in French). Paris: 12bis. ISBN 978-2-35648-332-4. OCLC 1020953674."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dragon_Quest",
        "situacao": "ok",
        "texto": "Dragon Quest (ドラゴンクエスト, Doragon Kuesuto), conhecido no ocidente como Dragon Warrior, é uma série de jogos eletrônicos de RPG produzido pela Square Enix, antes Enix, sendo um dos jogos de RPG mais famosos e vendidos no Japão. A série teve character design por Akira Toriyama (o criador da série Dragon Ball), música de Koichi Sugiyama e game design de Yuji Horii, a série possui onze jogos.\n[…]\nO primeiro jogo da série, lançado em 1986, conta a história do descendente do herói lendário Roto, contra o malvado Ryuou (rei dragão) e dura até a Terceira saga, onde começa a saga Tenkuu (Celeste), que dura até a sexta saga e a sétima e oitava saga com histórias totalmente novas.\n[…]\nA série Dragon Quest também tem \"sub-séries\" como o Tornekko's ou Yangar's Dungeon, ou a Dragon Quest Monster, um tipo de Pokémon com os monstros do Dragon Quest.\n[…]\nDragon Quest Monsters\n[…]\nDragon Quest Monsters 2\n[…]\nDragon Quest Monsters 3\n[…]\nDragon Quest Monsters: Caravan Heart\n[…]\nDragon Quest Monsters: Joker\n[…]\nDragon Quest Monsters: Joker 2\n[…]\nDragon Quest Monsters: Joker 3\n[…]\nSlime MoriMori Dragon Quest: Shōgeki no Shippo Dan\n[…]\nDragon Quest Heroes: Rocket Slime\n[…]\nDragon Quest: Young Yangus and the Mysterious Dungeon\n[…]\nDragon Quest I & II\n[…]\nSwordmaster Dragon Quest: Resurrection of the Legendary Sword\n[…]\nDragon Quest Swords: The Masked Queen and the Tower of Mirrors\n[…]\nDragon Quest: Monster Battle Road\n[…]\nA série gerou quatro mangás, animes e um longa na plataforma Netflix:\n[…]\nDragon Warrior: Legend of the Hero Abel\n[…]\nDragon Quest: Dai No Daibouken\n[…]\nDragon Quest Retsuden: Roto no Monshō\n[…]\nDragon Quest: Your Story\n[…]\nDragon Quest",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Interstella 5555",
      "descricao": "Filme de animação nipo-francês de 2003 feito com as músicas do álbum Discovery, do Daft Punk."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O que o pirata espacial Capitão Harlock e os clipes animados do álbum Discovery, do Daft Punk, têm em comum?",
    "resposta": "O mangaká Leiji Matsumoto",
    "fonte": [
      "https://en.wikipedia.org/wiki/Interstella_5555:_The_5tory_of_the_5ecret_5tar_5ystem",
      "https://en.wikipedia.org/wiki/Leiji_Matsumoto"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Interstella_5555:_The_5tory_of_the_5ecret_5tar_5ystem",
        "situacao": "ok",
        "texto": "Interstella 5555: The 5tory of the 5ecret 5tar 5ystem (インターステラ5555, Intāsutera Fō Faibu; \"Four Five\") is a 2003 anime musical science fiction film. It was written by Daft Punk and Cédric Hervet, produced by Toei Animation, directed by Kazuhisa Takenouchi, and supervised by Leiji Matsumoto. The film tells the story of the abduction and rescue of an extraterrestrial pop band.\n[…]\nThe idea of making a feature film to visualize Discovery came about during the album's early recording sessions. Daft Punk's concept for the story involved the merging of science fiction with entertainment industry culture. The duo had initially conceived of a live-action film featuring themes of overcoming oppression and rebelling against the machinery of life.\n[…]\nAfter the live-action approach was discarded, several styles of animation were considered before settling on that of Daft Punk's childhood hero, Leiji Matsumoto.\n[…]\nMany elements common to Matsumoto's stories, such as romanticism of noble sacrifice and remembrance of fallen friends, appear in Interstella 5555. Daft Punk revealed in an interview that Captain Harlock was a great influence on them in their childhood. They also stated, \"The music we have been making must have been influenced at some point by the shows we were watching when we were little kids.\"\n[…]\nIn December 2003, Interstella 5555 was released along with the album Daft Club, which served to promote the film and provided previously unreleased remixes of tracks from the Discovery album. The film premiered at Cannes Film Festival in 2003, with a short theatrical run and home media release following its premiere. A Blu-ray edition was released later in September 2011 and contains similar artwork packaging.\n[…]\nInterstella 5555: The 5tory of the 5ecret 5tar 5ystem (anime) at Anime News Network's encyclopedia\n[…]\nInterstella 5555: The 5tory of the 5ecret 5tar 5ystem at IMDb"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Leiji_Matsumoto",
        "situacao": "ok",
        "texto": "Leiji Matsumoto (Japanese: 松本零士, Hepburn: Matsumoto Reiji; born Akira Matsumoto (松本晟); January 25, 1938 – February 13, 2023) was a Japanese manga artist, and creator of several anime and manga series. He was best known for masterminding legendary franchises, such as Space Battleship Yamato, Space Pirate Captain Harlock, and Galaxy Express 999.\n[…]\nIn 2003, Matsumoto supervised the creation of several music videos for French house group Daft Punk, set to tracks from their album Discovery. These videos were issued end-to-end (making a full-length animated movie) on a DVD release titled Interstella 5555: The 5tory of the 5ecret 5tar 5ystem.\n[…]\nMatsumoto's stories are influenced by the Bildungsroman tradition (i.e., tales of formative education and self-discovery).\n[…]\nScholar Darren-Jon Ashmore notes that Matsumoto viewed his own space opera sagas, such as Galaxy Express 999 and Captain Harlock, as narratives of growth and transformation, where characters \"make choices for themselves and others, giving up much of themselves so that a greater goal is served.\" Ashmore further explains that Matsumoto was inspired by classic works like Charles Dickens's A Christmas Carol and Margaret Mitchell's Gone with the Wind, focusing on characters who are \"initially the product of their times and circumstances, but ultimately come to be masters of their own fate.\" The concept of \"Arcadia\", an idealized, lost paradise of youth, is a recurring motif, stemming from Matsumoto's engagement with Johann Wolfgang von Goethe's Italian Journey.\n[…]\nLeiji Matsumoto  at Anime News Network's encyclopedia\n[…]\nLeiji Matsumoto at IMDb\n[…]\nLeijiverse—The world of Leiji Matsumoto\n[…]\nLeiji Matsumoto at The Encyclopedia of Science Fiction\n[…]\nLeiji Matsumoto manga Archived March 15, 2016, at the Wayback Machine and anime at Media Arts Database (in Japanese)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Interstella_5555",
        "situacao": "ok",
        "texto": "Discovery é o segundo álbum de estúdio da dupla de french house Daft Punk, lançado em 12 de março de 2001. Este marca uma mudança no som do Chicago house, que foram anteriormente conhecidos por disco e estilos synthpop. O álbum também forneceu-se como trilha sonora para o filme em anime Interstella 5555: The 5tory of the 5ecret 5tar 5ystem, que foi uma colaboração entre os criadores do álbum, Leij\n[…]\nUm quantidade significativa de samples está presente no álbum. As faixas com sample reforça a declaração de Thomas Bangalter sobre o tema de Discovery. Ao invés de simplesmente criar novas músicas a partir de samples, Daft Punk trabalhou com eles por escrito e acrescentou diversos instrumentos.\n[…]\nLeiji Matsumoto supervisionou a criação de vários videoclipes para Discovery. Os vídeos mais tarde apareceram como cenas do longa-metragem Interstella 5555: The 5tory of the 5ecret 5tar 5ystem. Este foi criado como uma colaboração entre Matsumoto, Daft Punk, Cédric Hervet e Toei Animation. O filme apresenta o álbum inteiro como a sua trilha sonora.\n[…]\nApós o lançamento, os críticos notaram de imediato as diferenças de estilo de Discovery em relação a Homework. A alteração na estética foi uma choque para os fãs dos trabalhos anteriores de Daft Punk e inicialmente causou espanto a alguns críticos. A Q classificou o álbum com cinco estrelas, acontecimento raro para a revista.\n[…]\nVárias canções do álbum viriam a ser usadas como sample por outros artistas. A canção \"Stronger\" de Kanye West do álbum Graduation apresenta um sample vocal de \"Harder, Better, Faster, Stronger\". Este foi mais tarde realizado um show ao vivo no Grammy Awards 2008 com Daft Punk na sua marca registrada, a pirâmide, enquanto Kanye West cantava no palco. A canção \"Summertime\" de Wiley do álbum See Clear Now apresenta um sample de \"Aerodynamic\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Kimba, o Leão Branco",
      "descricao": "Mangá e anime de Osamu Tezuka sobre um filhote de leão branco na África."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Kimba, o Leão Branco, de Osamu Tezuka, é muitas vezes apontado como inspiração não assumida de qual filme da Disney de 1994?",
    "resposta": "O Rei Leão",
    "fonte": [
      "https://en.wikipedia.org/wiki/Kimba_the_White_Lion"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Kimba_the_White_Lion",
        "situacao": "ok",
        "texto": "Kimba the White Lion, known in Japan as Jungle Emperor (Japanese: ジャングル大帝, Hepburn: Janguru Taitei), is a Japanese shōnen manga series written and illustrated by Osamu Tezuka which was serialized in the Manga Shōnen magazine from November 1950 to April 1954. An anime based on the manga was created by Mushi Production and was broadcast on Fuji Television from 1965 to 1967. It was the first color an\n[…]\nIn 1989, Dr. Osamu Tezuka died at age 60 on February 9. A remake of Jungle Emperor, The New Adventures of Kimba The White Lion was broadcast in Japan from October 12, 1989, to October 11, 1990. This series bears little resemblance to the original manga or the first TV series, as the plot is extremely different and the characters have been completely reworked and changed.\n[…]\nJungle Emperor (ジャングル大帝 Jungle Taitei) is a cancelled 1990 eight-bit platform action game that was in development by Taito for the Family Computer, based on the popular manga/anime of the same name (aka Kimba the White Lion) by Osamu Tezuka. Not much is known about this game, except that it was going to be released in November 1990, but it was cancelled for unknown reasons. There were also plans for the unreleased Nintendo 64.\n[…]\nUpon the release of The Lion King in Japan, multiple Japanese cartoonists signed a letter urging The Walt Disney Company to acknowledge due credit to The Jungle Emperor in the making of The Lion King. 488 Japanese cartoonists and animators signed the petition, which drew a protest in Japan, where Tezuka and Kimba are cultural icons.\n[…]\nTezuka acknowledges that Kimba and The Lion King are two different stories with different themes, but if the latter was about a white lion who spoke with humans, then he would not be able to pardon the similarities.\n[…]\nOsamu Tezuka's Star System\n[…]\n1965 anime series at Tezuka Osamu @ World (archived)\n[…]\nJungle Emperor Leo: Hon-o-ji film at Tezuka Osamu @ World (archived)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jungle_Taitei",
        "situacao": "ok",
        "texto": "Jungle Taitei (em japonês, ジャングル大帝), mais conhecido no Ocidente como Kimba, o Leão Branco) é um mangá de Osamu Tezuka, mais tarde transformado em anime, que trata das relações entre o homem e a natureza através da história do leão branco Kimba enquanto ele tenta governar a selva. Junto com Astro Boy, estabeleceu uma das mais icônicas criações de Tezuka. Em 1965, a Mushi Productions fez uma série a\n[…]\nKimba (Leo, no original): o jovem leão branco nascido em um navio e órfão tenta voltar para o reino de seu pai aonde pretende assumir o trono, mas perde-se no caminho e vai parar em meio à península Arábica. Mais tarde, passeando por grandes cidades, aprende muitas coisas com os homens e sobre eles. Kimba retorna à África aonde obtém de volta o seu trono para tentar melhorar a vida dos animais.\n[…]\nAjuda o pequeno leão, por exemplo, quando pesquisa as origens de Kimba e descobre sua descendência de Andrópolis, um leão egípcio que bebeu uma poção da sabedoria.\n[…]\nEm 2015 a NewPOP Editora vai publicar o mangá com a arte de Osamu Tezuka. No site da editora o mangá está com a seguinte sinopse : \"A obra que serviu de inspiração para o Rei Leão!\n[…]\nFinalmente chega ao Brasil o mangá Kimba, o Leão Branco, de Osamu Tezuka pela NewPOP. A obra que invadiu as televisões brasileiras na década de 70, volta agora em sua versão em quadrinho, que gerou as adaptações, para relembrar e reconquistar os corações brasileiros!\".\n[…]\n6. Kimba fazendeiro (Jungle Thief)/\n[…]\nJungle Emperor Leo - The Brave Change The Future (Jungle Taitei - Yūki ga Mirai o Kaeru) (2009) - Terceiro e último filme, foi realizado em 2009 pela Tezuka Productions. Essa é a primeira vez que Kimba e os demais personagens foram animados com total animação japonesa. Aqui, Kimba tem olhos vermelhos em vez de azuis, Panja e Eliza estão vivos - mas o primeiro morre no final, Jonathan é um menino, e Poly foi trocado por uma pássara bem colorida.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Hikaru no Go",
      "descricao": "Mangá e anime sobre um garoto que aprende o jogo de tabuleiro go com o espírito de um antigo mestre."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O que o mangá Hikaru no Go, sobre um antigo jogo de tabuleiro, e Death Note têm em comum?",
    "resposta": "O desenhista Takeshi Obata",
    "fonte": [
      "https://en.wikipedia.org/wiki/Hikaru_no_Go",
      "https://en.wikipedia.org/wiki/Takeshi_Obata"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hikaru_no_Go",
        "situacao": "ok",
        "texto": "Hikaru no Go (ヒカルの碁, lit. 'Hikaru's Go') is a Japanese manga series based on the board game Go, written by Yumi Hotta and illustrated by Takeshi Obata. The production of the series' Go games was supervised by Go professional Yukari Umezawa. It was serialized in Shueisha's Weekly Shōnen Jump from 1998 to 2003, with its chapters collected into 23 tankōbon volumes. The story follows Hikaru, who disco\n[…]\nWritten by Yumi Hotta and illustrated by Takeshi Obata, Hikaru no Go was serialized in Weekly Shōnen Jump magazine from December 8, 1998, to July 14, 2003. Go professional Yukari Umezawa (5-dan) provided \"supervision\" for the series. The 189 chapters were collected into 23 tankōbon volumes by Shueisha; the first published on April 30, 1999, and the last on September 4, 2003. A kanzenban version was published in 20 volumes between February 4, 2009, and April 30, 2010.\n[…]\nIncluding it on a list of the best continuing manga of 2008, About.com's Deb Aoki wrote that Hikaru no Go \"pulls off a pretty amazing feat\" by taking a complex game most American manga readers have never heard of and making it \"as fun, exciting and accessible as any competitive sport.\" Reviewing the series for the School Library Journal, Lori Henderson highly recommended Hikaru no Go as a \"funny, touching, and slightly bittersweet\" coming-of-age story.\n[…]\nShe praised Hotta's diverse and interesting characters who have rather complex relationships, and Takeshi's artwork, which \"can make placing a stone on the board seem like a life or death situation.\" Henderson noted that, while some technical terms are used and explained, readers do not have to know how to play Go as the matches are more about the players than the actual mechanics of the game. She also noted that the ending of the series did not live up to its full potential.\n[…]\nHikaru no Go (manga) at Anime News Network's encyclopedia"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Takeshi_Obata",
        "situacao": "ok",
        "texto": "Takeshi Obata (小畑 健, Obata Takeshi; born February 11, 1969) is a Japanese manga artist that usually works as the illustrator in collaboration with a writer. He first gained international attention for Hikaru no Go (1999–2003) with Yumi Hotta, but is better known for Death Note (2003–2006) and Bakuman (2008–2012) with Tsugumi Ohba.\n[…]\nTakeshi Obata chose to be a manga artist because he always loved drawing. As a child he re-read Shotaro Ishinomori's Cyborg 009 over and over. His first published manga was in Higashi-Yamanoshita Elementary's school newspaper when he was in the third grade. It was about a hero who turned into a disposable pocket warmer when in trouble. Obata originally became noticed in 1985 when he took a prize in the Tezuka Award for his one-shot 500 Kōnen no Shinwa.\n[…]\nIn 2003 he teamed up with Tsugumi Ohba to create Death Note. It became his biggest hit to date, with 30 million copies in circulation, an anime adaptation, five live-action films, two live-action TV drama and a musical. Obata served as the artist of Blue Dragon Ral Grad, a manga adaptation of the fantasy video game Blue Dragon, from December 2006 to July 2007.\n[…]\nIn addition to his manga work, Obata has also done character design work for the video game Castlevania Judgment, as well as illustrating several light novels. He provided character designs for Madhouse's anime adaptations of Osamu Dazai's No Longer Human and Natsume Sōseki's Kokoro, which are parts of the Aoi Bungaku series. He drew manga manuscripts seen in the 2015 live-action film adaptation of Bakuman that were later published in the Eiga Bakuman. Takeshi Obata Illustration Works book.\n[…]\nEiga Bakuman. Takeshi Obata Illustration Works (映画バクマン。 小畑健イラストワークス) (October 2, 2015)\n[…]\n1999 Shogakukan Manga Award for Hikaru no Go\n[…]\nTakeshi Obata  at Anime News Network's encyclopedia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hikaru_no_Go",
        "situacao": "ok",
        "texto": "Hikaru no Go (ヒカルの碁; lit. \"O Go de Hikaru\") é uma série de anime e mangá criado por Yumi Hotta e arte de Takeshi Obata (também desenhista de Death Note e Bakuman) publicado no Japão pela Shonen Jump.\n[…]\nSai quer continuar em busca de seu objetivo, mas Hikaru não sabe nada de Go, além de achar o jogo muito chato. Depois da ajuda em uma prova de História, Hikaru concorda em levar Sai a um Clube de Go.\n[…]\nInseis: Nozaki, Hikaru, Waya, Isumi (venceu um jogo), Ochi (venceu dois jogos), Adachi (venceu um jogo), entre outros.\n[…]\n[ep 14] Hikaru/Sai x Akira (Torneio Anual de Inverno - 3ª edição) - Vencedor: Akira (Sai começa, mas Hikaru passa a jogar no meio do jogo)\n[…]\nDesenho - Takeshi Obata\n[…]\nHikaru no Go, um jogo de Go para Game Boy Advance lançado pela Konami, somente no Japão.\n[…]\nHikaru no Go 2, um jogo para Game Boy Advance.\n[…]\nHikaru no Go 3, um jogo para GameCube.\n[…]\nOs personagens Hikaru e Sai estiveram presentes no jogo Jump Super Stars.\n[…]\nO mangá vendeu mais de 22 milhões de cópias no Japão. Hikaru no Go aumentou drasticamente a popularidade do Go no Japão e em outros lugares, principalmente entre as crianças pequenas. A jogadora profissional de Go Yukari Umezawa serviu como conselheiro técnica para o mangá e promoveu-o em nome do Nihon Ki-in. Ela teve um curto minuto especial no final de cada episódio, instruindo as crianças sobre como jogar Go.\n[…]\nUma das razões em que ela ajudou a tornar tão popular o Go foi porque ela foi chamada de \"a mais bonita profissional de Go\". Hikaru no Go também causou um aumento na popularidade do Go em todos os outros países onde foi lido ou visto. Como resultado, muitos foram os clubes de Go iniciados por pessoas influenciadas pelo mangá.\n[…]\nNo Anime News Network (Mangá)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Wendel Bezerra",
      "descricao": "Dublador e diretor de dublagem brasileiro, voz de Goku e de Bob Esponja."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Na televisão brasileira, o que o Goku adulto, de Dragon Ball Z, e o Bob Esponja têm em comum?",
    "resposta": "O dublador Wendel Bezerra",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Wendel_Bezerra"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Wendel_Bezerra",
        "situacao": "ok",
        "texto": "Wendel Luís Bezerra da Silva (São Paulo, 18 de junho de 1974) é um ator, dublador, diretor de dublagem, locutor e youtuber brasileiro. Na área desde os oito anos de idade, Wendel é notoriamente conhecido por ser a voz do personagem Bob Esponja, da série de mesmo nome, e do personagem japonês Goku, da franquia Dragon Ball. Também é CEO e fundador do estúdio de dublagem Unidub. Tem quatro irmãos, do\n[…]\nBezerra nasceu na capital paulista em 18 de junho de 1974, embora sua certidão aponte a data 8 de junho, devido a um erro de cartório. O terceiro filho da nordestina Flora Bezerra — que teve os filhos Wellington, Washington, Ulisses, Wendel e Úrsula — e criado apenas por sua mãe, já que seu pai, motorista de caminhão e ônibus, nunca foi presente.\n[…]\nApós o fechamento da Álamo, Wendel e seu irmão Ulisses Bezerra fundaram a Unidub, focado em dublagem e mixagem. O estúdio cresceu rapidamente e está entre os principais fornecedores de dublagem do Brasil.[carece de fontes]? Além de dirigir a dublagem de filmes, séries e games, Wendel também se tornou CEO no final de 2018, passando a ser o responsável administrativo da empresa.\n[…]\nWendel Bezerra no Instagram\n[…]\nWendel Bezerra no X\n[…]\nWendel Bezerra no Facebook\n[…]\nCanal de Wendel Bezerra no YouTube"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Totoro",
      "descricao": "Criatura da floresta que dá nome ao filme Meu Amigo Totoro, de Hayao Miyazaki."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que criatura do Studio Ghibli faz uma ponta como bicho de pelúcia no filme Toy Story 3, da Pixar?",
    "resposta": "Totoro",
    "fonte": [
      "https://en.wikipedia.org/wiki/My_Neighbor_Totoro",
      "https://en.wikipedia.org/wiki/Toy_Story_3"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/My_Neighbor_Totoro",
        "situacao": "ok",
        "texto": "My Neighbor Totoro is a 1988 Japanese animated fantasy film written and directed by Hayao Miyazaki and animated by Studio Ghibli for Tokuma Shoten. It stars the voices of Noriko Hidaka, Chika Sakamoto and Hitoshi Takagi, and focuses on two young sisters who, after moving with their father to the countryside, experience interactions with friendly wood spirits in postwar Japan.\n[…]\nAfter writing and filming Nausicaä of the Valley of the Wind (1984) and Castle in the Sky (1986), Hayao Miyazaki began directing My Neighbor Totoro for Studio Ghibli. Miyazaki's production paralleled his colleague Isao Takahata's production of Grave of the Fireflies. Miyazaki's film was financed by executive producer Yasuyoshi Tokuma, and both My Neighbor Totoro and Grave of the Fireflies were released on the same bill in 1988.\n[…]\nThe company reissued My Neighbor Totoro, as well as Castle in the Sky, and Kiki's Delivery Service, with updated cover art highlighting its Studio Ghibli origins, on March 2, 2010, coinciding with the US DVD and Blu-ray debut of Ponyo. My Neighbor Totoro was re-released by Disney on Blu-Ray on May 21, 2013. GKIDS re-issued the film on Blu-ray and DVD on October 17, 2017.\n[…]\nThe Financial Times recognized the character's appeal, commenting Totoro \"is more genuinely loved than Mickey Mouse could hope to be in his wildest—not nearly so beautifully illustrated—fantasies\". Empire also commented on Totoro's appeal, ranking him at number 18 on a list of the greatest animated characters of all time. The character of Totoro later became a mascot and official logo for Studio Ghibli.\n[…]\nThe fund, started in 1990 after the film's release, held an auction in August 2008 at Pixar Animation Studios to sell over 210 original paintings, illustrations, and sculptures inspired by My Neighbor Totoro.\n[…]\nMy Neighbor Totoro at IMDb"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Toy_Story_3",
        "situacao": "ok",
        "texto": "Toy Story 3 is a 2010 American animated comedy-drama film directed by Lee Unkrich and written by Michael Arndt. Produced by Pixar Animation Studios for Walt Disney Pictures, it is the third installment in the Toy Story film series and the sequel to Toy Story 2 (1999). The film features the voices of Tom Hanks, Tim Allen, Joan Cusack, Don Rickles, Wallace Shawn, John Ratzenberger, Estelle Harris, N\n[…]\nIn 2004, following disagreements between the Walt Disney Company's CEO Michael Eisner and Pixar CEO Steve Jobs, Disney planned to make Toy Story 3 at the new Circle Seven Animation studio unit, with a tentative theatrical release date in early 2008. The script was developed in multiple versions. After Disney bought Pixar in early 2006, the Circle Seven version of the film was canceled as the result of Circle Seven's closure.\n[…]\nIn 2004, when the contentious negotiations between the two companies made a split appear likely, Michael Eisner, Disney chairman at the time, put plans in motion to produce Toy Story 3 at a new Disney studio, Circle Seven Animation. Tim Allen, the voice of Buzz Lightyear, indicated a willingness to return, even if Pixar was not on board. It was slated for a theatrical release sometime in spring 2008.\n[…]\nThe film's art director, Daisuke Tsutsumi, is married to Hayao Miyazaki's niece, who originally inspired the character Mei in Miyazaki's anime film My Neighbor Totoro (1988). Totoro makes a cameo appearance in Toy Story 3.\n[…]\nIowa brothers Morgan and Mason McGrew spent eight years recreating the film in stop motion. Titled Toy Story 3 in Real Life, the film was shot using iPhones and was uploaded to YouTube on January 25, 2020. Excluding the scenes with human characters, the shot-for-shot remake uses the film's original audio. According to Screen Crush, Pixar's parent company Walt Disney Studios gave the McGrews permission to release the film online."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tonari_no_Totoro",
        "situacao": "ok",
        "texto": "Tonari no Totoro (bra: Meu Amigo Totoro; prt: O Meu Vizinho Totoro / Totoro) é um filme de animação japonês de 1988, dos gêneros fantasia, drama e aventura, dirigido e roteirizado por Hayao Miyazaki para a Studio Ghibli.\n[…]\nO filme conta a história das duas jovens filhas (Satsuki e Mei) de um professor e suas aventuras com espíritos da floresta amigáveis no Japão rural pós-segunda guerra mundial.\n[…]\nAs irmãs Mei e Satsuke mudam-se para uma nova casa e descobrem que uma floresta nas proximidades é habitada por criaturas chamadas totoros. Elas acabam se tornando amigas do mais velho deles, e ficam boa parte do tempo com ele, pois a mãe delas está num hospital e o pai sai para dar aulas. Ao mesmo tempo que mostra a elas algumas verdades da vida, o totoro lhes mostra um mundo fantástico.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Dennō Senshi Porygon",
      "descricao": "Episódio de 1997 do anime Pokémon que provocou convulsões em centenas de crianças no Japão."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1997, um episódio do anime Pokémon mandou centenas de crianças japonesas ao hospital por causa de quê?",
    "resposta": "Luzes piscantes que causaram convulsões",
    "fonte": [
      "https://en.wikipedia.org/wiki/Denn%C5%8D_Senshi_Porygon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Denn%C5%8D_Senshi_Porygon",
        "situacao": "ok",
        "texto": "\"Dennō Senshi Porygon\" (Japanese: でんのうせんしポリゴン, Hepburn: Dennō Senshi Porigon, \"Computer Warrior Porygon\") is the 38th episode of the Pokémon anime's first season. During its sole broadcast in Japan on December 16, 1997, multiple scenes with flashing lights induced photosensitive epileptic seizures in children across the country. Over 600 people, mostly children, were taken to hospitals; many other\n[…]\n\"Dennō Senshi Porygon\" had its sole broadcast in Japan on Tuesday, December 16, 1997, at 6:30 p.m. Japan Standard Time (09:30 UTC). It held the highest ratings for its time slot, and was watched by approximately 4.6 million households.\n[…]\nAfter viewing the problematic sequence, some viewers experienced blurred vision, headaches, dizziness and nausea. Some suffered seizures, blindness, convulsions and unconsciousness. The Japanese press referred to this incident as \"Pokémon Shock\" (ポケモンショック, Pokemon Shokku).\n[…]\nThe Pokémon anime's General Director Kunihiko Yuyama said \"We used red and blue flashing for all the explosions inside our cyber space, because we wanted to give the explosions an electrical feel, that set them apart from the explosions seen elsewhere in the show. And so that's why we used those colors so much in this episode.\"\n[…]\nAfter the airing of \"Dennō Senshi Porygon\", the Pokémon anime went into a nearly four-month hiatus.\n[…]\n\"Dennō Senshi Porygon\" itself has never been aired again, in any country. The Pokémon anime has not featured Porygon or its evolutions, Porygon2 and Porygon-Z, in any subsequent episodes despite Pikachu being the one to cause the seizure-inducing strobe effect in one of these scenes. In spite of being absent from the anime, The Pokémon Company continues to feature Porygon in all other aspects of its branding.\n[…]\nBurger King Pokémon container recall\n[…]\nPokémon Go § Criticism and incidents\n[…]\n\"Dennō Senshi Porygon\" at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Denn%C5%8D_Senshi_Porygon",
        "situacao": "ok",
        "texto": "\"Dennō Senshi Porygon\" (でんのうせんしポリゴン, Dennō Senshi Porigon; literalmente \"Porygon, o soldado cibernético\", mais comummente traduzido como \"Electric Soldier Porygon\") é o trigésimo oitavo episódio da primeira temporada do anime Pokémon que foi ao ar no Japão em 16 de dezembro de 1997. Desde então não foi mais ao ar em qualquer outro lugar. No entanto, o episódio pode ser encontrado na internet.\n[…]\nO episódio ficou infame pela utilização de efeitos visuais que causaram convulsões em um número consideravelmente grande de espectadores japoneses, incidente conhecido como \"Pokémon Shock\" (ポケモンショック, Pokemon Shokku) pela imprensa japonesa. Seiscentos e oitenta e cinco espectadores foram levados para hospitais, mas apenas duas pessoas permaneceram hospitalizados por mais de duas semanas. Devido a isto, o episódio foi banido no mundo inteiro.\n[…]\nOs cientistas acreditaram que as luzes piscando desencadearam convulsões fotossensíveis em que os estímulos visuais, como luzes piscando podem causar alterações da consciência. Apesar de aproximadamente 1 em 4000 pessoas serem suscetíveis a esses tipos de crises, o número de pessoas afetadas por este episódio foi sem precedentes.\n[…]\nEnquanto estava fora do ar, cenas em outros episódios com luzes fortes piscando foram reduzidas na versão japonesa, e mais tarde pelos Estados Unidos quando o anime foi distribuído. Após a pausa, o anime teve o seu dia de exibição semanal alterado de terça para quinta-feira. A abertura também foi refeita e telas pretas mostrando vários alguns Pokémon em vários focos foram divididos em quatro imagens por tela.\n[…]\nApesar de ter sido alterado nos Estados Unidos pela 4Kids Entertainment para abrandar as luzes piscando, o episódio não foi transmitido em solo americano. As alterações também foram aplicadas nos 36 episódios anteriores.\n[…]\nA mesma cena se repete no fim do episódio, mas em tela inteira.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Ōzaru",
      "descricao": "Forma de macaco gigante em que os saiyajins com rabo se transformam em Dragon Ball."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em Dragon Ball, o que faz o pequeno Goku, que ainda tinha rabo, se transformar num macaco gigante?",
    "resposta": "Olhar para a lua cheia",
    "fonte": [
      "https://dragonball.fandom.com/wiki/Great_Ape"
    ],
    "trechos": [
      {
        "url": "https://dragonball.fandom.com/wiki/Great_Ape",
        "situacao": "ok",
        "texto": "This article is about the original transformation. For the character portrayed in live action by Justin Chatwin, see  Oozaru/Dragonball Evolution .\n[…]\n'Oozaru' in Dragon Ball signifies a transformation of Saiyan race members into a powerful primate, the Great Ape. This term is used in English-language Dragon Ball productions, notably in Dragonball Evolution (2009). During a solar eclipse, Goku is predestined to revert to Oozaru.\n[…]\nIn   Dragon Ball: The Return of Son Goku and Friends! , the special features a Great Ape during the opening animation, as it is an updated version of the original intro sequence. Also,  Tarble  has a tail, but he does not transform in the special.\n[…]\nDragon Ball Xenoverse 3\n[…]\nIn  Dragon Ball Heroes , Great Ape Goku, Great Ape Vegeta, Great Ape Gohan, Great Ape Bardock, Great Ape Evil Bardock, Great Ape King Vegeta, Golden Great Ape Goku, and Golden Great Ape Baby Vegeta are bosses and playable characters. In the JM7 trailer, Broly takes on the Great Ape form and Evil Bardock can also transform into a mind-controlled Great Ape as well, as he has the Time Breakers' crystal symbol in his head while in this form.\n[…]\nOther transformations      Power Pole Pro  •  Kaio-ken  •  Unlock Potential   ( Manipulation Sorcery   ( King of Destruction ) )  •  Culture Fluid Absorption Gigantification  •  Ultimate   ( Beast )  •  Candy Vegito  •  Dark Dragon Ball Enhancement  •  Dark Evolution  •  Dark Ki  •  Dark Magic   ( Villainous Mode  •  Supervillain ) ( Ultra )  •  Giant Form  •  Hi-Tension  •  Shenron Mode  •  Ultra Instinct Sign   ( True  •  Perfected )  •  Ultra Ego  •  Goku's Change  •  Xeno-Evolution  •  Transcended"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Yusuke Urameshi",
      "descricao": "Protagonista delinquente do mangá e anime Yu Yu Hakusho, de Yoshihiro Togashi."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Logo no início de Yu Yu Hakusho, o delinquente Yusuke Urameshi morre ao fazer o quê?",
    "resposta": "Salvar um menino de um atropelamento",
    "fonte": [
      "https://en.wikipedia.org/wiki/Yusuke_Urameshi"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Yusuke_Urameshi",
        "situacao": "ok",
        "texto": "Yusuke Urameshi (Japanese: 浦飯幽助, Hepburn: Urameshi Yūsuke) is a fictional character and the main protagonist of the manga and anime series YuYu Hakusho, created by Yoshihiro Togashi. Yusuke is a junior high school delinquent who dies while saving a child from a car accident. After seeing the grief his friends suffer following his death, Yusuke's soul works for the Underworld's detective of paranor\n[…]\nYuYu Hakusho manga author Yoshihiro Togashi created Yusuke Urameshi. With regard to the main protagonist, Togashi claimed the personality must be clearly defined from the beginning before the comrades could be added, so it is more difficult. This was mostly due to the author's desire to create antagonists who might stand out more than Yusuke. Nevertheless, he believes that after YuYu Hakusho he became unable to write like this.\n[…]\nYusuke Urameshi is a fourteen-year-old delinquent who attends Sarayashiki Junior High School. Yusuke bears affection for his childhood friend Keiko Yukimura, who initially takes a role as Yusuke's conscience, making sure he comes to class and behaves, and later becomes his romantic interest. Yusuke's alcoholic mother, Atsuko, raised him as a single parent after conceiving him as a young teen.\n[…]\nCritics praised Yusuke's portrayal as a delinquent who tries to become a better person. Animerica's considers Yusuke a \"bad character\" in the series's beginning due to his delinquent acts and considers his missions under Koenma's guide as potentially to avoid a karmic action, as seen through his egg that represents his morals, and sees his transformation into a Spirit Detective as an appealing hero.\n[…]\nIn \"Yu Yu Hakusho: Does it Hold Up?\", Anime News Network praised the way Yusuke sees himself in the series's beginning and how the feelings of his close people make him search for another attempt at life."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Yusuke_Urameshi",
        "situacao": "ok",
        "texto": "Yu Yu Hakusho é uma série de mangá escrita e ilustrada por Yoshihiro Togashi. Entre o elenco bastante diversificado de personagens fictícios está Yusuke Urameshi, protagonista, como um punk típico e aluno da escola Sarayashiki com passatempos não tão típicos. Depois de morrer e ser ressuscitado, ele se torna o detetive de eventos paranormais no mundo dos vivos.\n[…]\nYusuke Urameshi (浦飯 幽助, Urameshi Yusuke) é um aluno que frequenta a escola Sarayashiki. Tem 14 anos (17 anos na série live action) e gosta de cabular aulas no telhado da escola. Está constantemente metido em brigas e seu comportamento lhe rendeu o título de delinquente. Ele é odiado pela maioria dos seus professores e colegas, mas Yusuke demostra ser muito melhor do que muitos pensavam. Yusuke morre atropelado por um carro ao salvar uma criança pequena de ser atropelada.\n[…]\nYusuke tem um pouco de afeição por sua amiga de infância Keiko Yukimura, que inicialmente tem um papel como \"consciência\" de Yusuke (certificando-se que ele vem para a aula e que se comporte corretamente) e mais tarde torna-se o seu interesse romântico. A mãe de Yusuke, Atsuko Urameshi, é uma alcoólatra e irresponsável. Ela engravidou de Yusuke quando era uma adolescente de 14 anos e criou o menino como mãe solteira.\n[…]\nEle usou este poder da Chupeta, chamado MaFuuKan, para salvar a vida do jovem Amanuma, e também contra Sensui, mas não funcionou.\n[…]\nEle odeia a reputação dos meninos e os quer fora da escola. Ele se preocupa em excesso com a reputação da escola e acha que garotos como Yusuke e Kuwabara a degeneram. Ele não percebe que é tão ruim quanto os alunos que quer pegar.\n[…]\nMasaru é o menino salvo por Yusuke. Segundo a Botan, ele estava predestinado a ser atropelado por um carro e não sofrer nenhum arranhão sequer, seria um acontecimento milagroso... Porém Yusuke o salva e acaba morrendo no acidente!",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Hyoga",
      "descricao": "Cavaleiro de bronze russo de Os Cavaleiros do Zodíaco, mestre dos golpes de gelo."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em Os Cavaleiros do Zodíaco, por que Hyoga mergulha nas águas geladas do mar da Sibéria?",
    "resposta": "Para ver a mãe num navio naufragado",
    "fonte": [
      "https://en.wikipedia.org/wiki/List_of_Saint_Seiya_characters"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/List_of_Saint_Seiya_characters",
        "situacao": "ok",
        "texto": "This article comprises a list of characters that play a role in Saint Seiya (also known as Knights of the Zodiac) and its canonical sequel, Saint Seiya: Next Dimension, two manga series created, written and illustrated by Masami Kurumada.\n[…]\nCygnus Hyoga (白鳥星座（キグナス）の氷河, Kigunasu no Hyōga), also known as Swan Hyoga in several international adaptations, is the Bronze Saint of Cygnus. He was born in the fictional village of Kohoutek, in eastern Siberia, which, at the time when Kurumada wrote and drew his manga, was in the Soviet Union. His mastery over his Cosmo grants him the ability to create ice and snow at temperatures as low as absolute zero by stopping subatomic particles.\n[…]\nOne of Mitsumasa Kido's women in the manga and late mother of Cygnus Hyōga. After dying in a shipwreck, her remains were preserved intact by the gelid waters of the Siberian seas. She's also alternatively known, both in the manga and anime adaptation, as Hyōga's Mama (氷河の母親, Hyōga no Māma). Kurumada later introduced a character of the same name in the short story arc dedicated to Hyōga in the thirteenth volume of the manga, sister to Alexei, leader of the Blue Warriors.\n[…]\nA young boy from Kohoutek village, in Eastern Siberia, neighbor and good friend of Cygnus Hyōga. He watches over Natasha's eternal sleep when Hyōga is absent due to his responsibilities as a Saint. He helps Hyōga in various domestic tasks and also assisted the Saint in his escape from the Blue Warriors' imprisonment.\n[…]\nShe was deeply saddened for the battle, as she did not want it to come to be between Merak Hägen and Cygnus Hyōga; who was her first friend (and possible love interest) among the Bronze Saints, and Hägen was her bodyguard and best friend since childhood."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_personagens_de_Saint_Seiya",
        "situacao": "ok",
        "texto": "Este artigo contém uma lista de personagens que desempenham um papel em Saint Seiya (também conhecido como Os Cavaleiros do Zodíaco) e sua continuação canônica, Saint Seiya: Next Dimension, duas séries de mangá criadas, escritas e ilustradas por Masami Kurumada.\n[…]\nHyoga de Cisne (白鳥星座（キグナス）の氷河（ヒョウガ）, Kigunasu no Hyōga) é o Cavaleiro de Bronze da constelação de Cygnus. Ele nasceu na vila fictícia de Kohoutek, no leste da Sibéria, que, na época em que Kurumada escreveu e desenhou seu mangá, estava na União Soviética. Tendo um excelente domínio do cosmo, na Batalha das 12 Casas, superou seu mestre Camus de Aquário e alcançou o Zero Absoluto, a temperatura mais baixa que pode ser alcançada, sendo capaz de congelar armaduras de Ouro.\n[…]\nUma das mulheres de Mitsumasa Kido e falecida mãe de Hyoga de Cisne. Depois de morrer em um naufrágio, seus restos mortais foram preservados intactos pelas águas geladas dos mares siberianos. Ela também é conhecida alternativamente, tanto no mangá quanto na adaptação para anime como Mãe de Hyoga (氷河の母親, Hyōga no Māma). Kurumada mais tarde introduziu um personagem de mesmo nome no arco do conto dedicado a Hyoga no décimo terceiro volume do mangá, irmã de Alexei, líder dos Guerreiros Azuis.\n[…]\nYakov (Яков, variação russa do nome Jacob) é um menino do vilarejo Kohoutek, no leste da Sibéria. É um grande amigo e vizinho de Hyoga de Cisne e o ajuda em diversas tarefas domésticas, além de cuidar do sono eterno da mãe de Hyoga quando ele está ausente. Yakov assume um papel importante na história especial \"O Conto do Cisne - Natassia do País do Gelo\", e nos episódios fillers em que o Cavaleiro de Cristal é controlado pelo Mestre Arles.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Fujiko Fujio",
      "descricao": "Pseudônimo da dupla de mangakás Hiroshi Fujimoto e Motoo Abiko, criadores de Doraemon e outros sucessos."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "O nome Fujiko Fujio, que assinou sucessos como Doraemon, era o pseudônimo de quantos mangakás?",
    "resposta": "Dois",
    "fonte": [
      "https://en.wikipedia.org/wiki/Fujiko_Fujio"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fujiko_Fujio",
        "situacao": "ok",
        "texto": "Fujiko Fujio (藤子 不二雄) was a manga writing duo formed by Japanese manga artists Hiroshi Fujimoto (藤本 弘, Fujimoto Hiroshi; December 1, 1933 – September 23, 1996) and Motoo Abiko (安孫子 素雄, Abiko Motoo; March 10, 1934 – April 6, 2022). They debuted in 1951 as a duo under their real names. The Fujiko Fujio name was used for their respective works from 1953 until 1987, when Fujimoto became too ill to wor\n[…]\nDoraemon was created in 1969. Since around 1974, its popularity has skyrocketed among Japanese children. CoroCoro Comic released its first issue in 1977 to showcase the works of Fujiko Fujio. With syndication of Doraemon on TV Asahi in 1979, a surge of popularity saw up to a dozen collaborative and solo works by Fujimoto and Abiko picked up for publication and syndication throughout the 1980s.\n[…]\nFujiko Fujio\n[…]\n1981 – Kawasaki City's Cultural Prize (川崎市文化賞) (Fujiko Fujio)\n[…]\n1984 – \"Movie day\" Special Achievement Medal (Fujiko Fujio)\n[…]\nFujiko F. Fujio\n[…]\n1989 – \"Movie day\" Certificate of appreciation (Fujiko F. Fujio)\n[…]\n1995 – Fujimoto Award Encouragement Award (Fujiko F. Fujio (Movie Doraemon series production))\n[…]\n1996 – \"Movie day\" Special Achievement Medal (Fujiko F. Fujio)\n[…]\n1997 – The first Tezuka Osamu Cultural Prize Grand Prize (Doraemon)\n[…]\nFujiko A. Fujio\n[…]\n1990 – Fujimoto Award Special prize (Fujiko A. Fujio (Movie Shonen jidai producer))\n[…]\n1990 – Yamaji Fumiko Cultural Foundation Special Award (Fujiko A. Fujio (Shonen jidai producer))\n[…]\n2008 – Order of the Rising Sun (Fujiko A. Fujio)\n[…]\nFujiko Fujio's Serialization list\n[…]\nFujiko Fujio's One-shot list\n[…]\nProfile of Fujiko Fujio Archived January 9, 2015, at the Wayback Machine at The Ultimate Manga Guide\n[…]\nProfile of Fujiko F. Fujio at The Ultimate Manga Guide\n[…]\nProfile of Fujiko A. Fujio Archived October 26, 2013, at the Wayback Machine at The Ultimate Manga Guide\n[…]\nFujiko F. Fujio Museum Archived June 13, 2018, at the Wayback Machine in Tama Ward, Kawasaki"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Fujiko_Fujio",
        "situacao": "ok",
        "texto": "Fujiko Fujio (藤子 不二雄, Fujiko Fujio)  foi a assinatura utilizada por uma dupla de artistas japoneses de mangá. Seus nomes verdadeiros são Hiroshi Fujimoto (藤本 弘, Fujimoto Hiroshi; 1 de dezembro de 1933 - 23 de setembro de 1996) e  Motoo Abiko (安孫子 素雄, Abiko Motoo; 10 de março de 1934 - 7 de abril de 2022). Eles formaram a sua parceria em 1951, e usaram o nome Fujiko Fujio de 1954 até a dissolução d\n[…]\nEm 1987 eles se separam e passaram a se chamar de Fujiko F. Fujio (藤子・F・不二雄, Fujiko Efu Fujio) (nome usado por Fujimoto) e Fujiko Fujio A (藤子不二雄Ⓐ, Fujiko Fujio Ē) (nome usado por Abiko).\n[…]\nDoraemon (ドラえもん) (1969-1996)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Piratas do Chapéu de Palha",
      "descricao": "Tripulação pirata liderada por Monkey D. Luffy no mangá e anime One Piece."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No bando de piratas de Luffy, em One Piece, quem é o cozinheiro do navio?",
    "resposta": "Sanji",
    "fonte": [
      "https://onepiece.fandom.com/wiki/Straw_Hat_Pirates",
      "https://en.wikipedia.org/wiki/Sanji_(One_Piece)"
    ],
    "trechos": [
      {
        "url": "https://onepiece.fandom.com/wiki/Straw_Hat_Pirates",
        "situacao": "ok",
        "texto": "Main\n[…]\nIn fact, before the  Enies Lobby Arc , when  CP9  initiated the conflict by blackmailing  Nico Robin  and detaining her, the Straw Hats mostly fought only other pirates (except for  Luffy  and  Zoro , who took down the dreaded  Axe Hand Morgan  and several of his  unwilling   subordinates ,   [ 117 ]     Sanji , who beat up  Fullbody  and possibly some other unfortunate Marines before becoming an official Straw Hat,   [ 118 ]    and  Jinbe , who had numerous skirmishes during his time as a member of the  Sun Pirates ).\n[…]\nSanji -        77,000,000\n[…]\nSanji -        77,000,000   [ 10 ]\n[…]\n↑   4.0     4.1      One Piece  Manga and Anime —  Vol. 90   Chapter 903  (p. 4-5, 16-17) and  Episodes 878 – 879 , Luffy and Sanji get new bounties.\n[…]\n↑     One Piece  Manga and Anime —  Vol. 82   Chapter 822  (p. 17) and  Episode 776 , The narration boxes at the chapter's end refer to the team as Luffy's \"Sanji Retrieval Team\".\n[…]\n↑     One Piece  Manga and Anime —  Vol. 18   Chapter 162  (p. 12-13) and  Episode 97 , Luffy, Zoro and Sanji easily defeat a giant Sandora Lizard.\n[…]\n↑     One Piece  Manga and Anime —  Vol. 52   Chapter 509  (p. 3-5) and  Episode 402 , Luffy, Zoro and Sanji fight a Pacifista.\n[…]\n↑     One Piece  Manga and Anime —  Vol. 84   Chapter 846  (p. 2-8) and  Episode 811 , Luffy and Nami defeated by Big Mom's army after their battles with Cracker and Sanji.\n[…]\n↑     One Piece  Manga and Anime —  Vol. 90   Chapter 903  (p. 4, 16-17) and  Episodes 878 – 879 , Luffy and Sanji get new bounties."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Sanji_(One_Piece)",
        "situacao": "ok",
        "texto": "Sanji (サンジ, Sanji), born as Vinsmoke Sanji (ヴィンスモーク・サンジ, Vinsumōku Sanji) and also known as \"Black Leg\" Sanji (黒足のサンジ, Kuro Ashi no Sanji), is a fictional character in the One Piece franchise created by Eiichiro Oda. The character made his first appearance in the 43rd chapter of the series, which was first published in Japan in Shueisha's Weekly Shōnen Jump magazine on June 8, 1998. He is the fift\n[…]\nIn Zou, Sanji decided to leave the crew in order to confront his family and protect the Straw Hats from the Fire Tank Pirates. In Wano, Sanji asks for help from another for the first time when he asks Robin to save him.\n[…]\nIn Zou, Sanji is forced into an arranged marriage with the daughter of Big Mom, one of the Four Emperors. Sanji decides to leave the crew in order to confront his family and protect the Straw Hats from the Big Mom Pirates. The Straw Hats invades the Big Mom Pirates' Empire to save Sanji. Germa 66 places handcuffs on Sanji that will explode his hands in the event he tries leaving, and Judge threatens to kill Zeff if Sanji does not obey.\n[…]\nWhen Luffy and Nami catch up to him, Sanji attacks Luffy and proclaims he will not return. Sanji decides to go through with marrying Pudding, but discovers the latter and the Big Mom Pirates plan to kill him and his family and take their technology at the wedding. After Sanji reconciles with Luffy and confesses that he wants to remain with the crew while also being able to save Zeff and his family, Luffy devises to crash the wedding.\n[…]\nA cookbook titled One Piece: Pirate Recipes was published by Shueisha in November 2012. The book is attributed to Sanji himself and includes various One Piece-themed cooking recipes. A localization by Viz Media was announced in February 2021, and released on November 23, 2021.\n[…]\nStraw Hats\n[…]\nList of One Piece characters\n[…]\nSanji's bio at One Piece's official website (in Japanese)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sanji",
        "situacao": "ok",
        "texto": "Vinsmoke Sanji (ヴィンスモーク・サンジ, Vinsumōku Sanji; também conhecido como Sanji Perna Preta) é um personagem criado por Eiichiro Oda para o seu mangá e anime One Piece. Ele é introduzido ainda na primeira saga da história como um cozinheiro do restaurante-navio Baratie e depois passa a trabalhar para o capitão Monkey D. Luffy no seu bando dos Piratas do Chapéu de Palha.\n[…]\nAnos mais tarde, Sanji conhece o capitão Monkey D. Luffy que o convida para sua tripulação dos Piratas do Chapéu de Palha. Inicialmente relutante, Sanji acaba compartilhando seu sonho com Luffy após se unirem para expulsar os Piratas Krieg do Baratie. Encorajado por Zeff, ele então parte com seu novo bando para os mares da Grand Line à procura do tesouro One Piece.\n[…]\nPassados dois anos, os Piratas do Chapéu de Palha se reúnem em Sabaody onde Sanji descobre que seu navio foi protegido por Duval durante esse tempo. Na Ilha dos Homens-Peixe, Sanji precisa passar por uma transfusão de sangue após sofrer uma hemorragia quando ele vê a beleza das sereias e depois ajuda Jinbe, um aliado de Luffy, a resolver um conflito racial que ali acontecia.\n[…]\nComo um dos tripulantes introduzidos na primeira saga da história, Sanji sempre esteve presente em outras mídias de entretenimento da franquia, tais como jogos, filmes e OVAs. Ele também é destaque em shows com outras séries ao lado de seu bando. No curta Kyutai Panic Adventure! (球体パニックアドベンチャー!, Kyutai Panikku Adobencha!), Sanji e os Chapéus de Palha enfrentam os Piratas de Arlong enquanto Luffy e o Astro Boy ajudam Goku a lutar contra Freeza.\n[…]\nEle também aparece anualmente no festival One Piece Premier Show do parque Universal Studios Japan na atração \"Sanji's Pirates Restaurant\" onde um ator fantasiado interage com os clientes. Suas receitas culinárias já foram recriadas por fãs em redes sociais, como o seu Curry.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Sannin",
      "descricao": "Trio de ninjas lendários de Konoha no mangá e anime Naruto."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em Naruto, o trio de ninjas lendários chamado Sannin é formado por Jiraiya, Tsunade e quem?",
    "resposta": "Orochimaru",
    "fonte": [
      "https://naruto.fandom.com/wiki/Sannin"
    ],
    "trechos": [
      {
        "url": "https://naruto.fandom.com/wiki/Sannin",
        "situacao": "ok",
        "texto": "The  Sannin  ( 伝説の三忍 ,  Densetsu no Sannin ,  literally meaning:  Legendary Three Ninja) were three renowned  ninja  from  Konohagakure , hailed as the greatest of their time. [ 2 ]\n[…]\nDespite the rivalry that existed between Orochimaru and Jiraiya, the constant arguing between Jiraiya and Tsunade,   [ 4 ]    and Orochimaru's defection from Konoha placing him at odds with both Jiraiya and Tsunade,   [ 6 ]    the three nevertheless remained attached to each other: when rumours of Orochimaru's death reached Konoha, Jiraiya and Tsunade discussed it together with disbelief and sadness;   [ 13 ]    Tsunade anticipated she would have a similar reaction were anything to happen to Jiraiya,   [ 17 ]    and did indeed cry following his death.\n[…]\n[ 3 ]    When Tsunade learned that Orochimaru was still alive, she blamed him for Jiraiya's death, believing Jiraiya would still be alive had Orochimaru not betrayed Konoha. Orochimaru, though he noted remorse for Jiraiya, argued it was better that things happened as they did, otherwise Jiraiya may not have remained the quality-shinobi that he was. [ 18 ]\n[…]\nThe Sannin are named after the characters from the Japanese folktale   Jiraiya Gōketsu Monogatari  . In the story, Jiraiya is a ninja who uses toad magic, while Tsunade is his wife and a master of slug magic, and Orochimaru is his former follower who specializes in snake magic. Despite being based on these figures, only Jiraiya's name uses different kanji than his source inspiration.\n[…]\nEach of the Sannin has trained one member of  Team Kakashi :  Jiraiya  trained  Naruto ,  Tsunade  trained  Sakura , and  Orochimaru  trained  Sasuke .\n[…]\n↑     Naruto  chapter 635"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Toei Animation",
      "descricao": "Estúdio japonês de animação fundado em 1956, produtor dos animes de Dragon Ball, Sailor Moon e Os Cavaleiros do Zodíaco."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Que estúdio japonês produziu as séries animadas de Dragon Ball, Sailor Moon e Os Cavaleiros do Zodíaco?",
    "resposta": "Toei Animation",
    "fonte": [
      "https://en.wikipedia.org/wiki/Toei_Animation"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Toei_Animation",
        "situacao": "ok",
        "texto": "Toei Animation Co., Ltd. (Japanese: 東映アニメーション株式会社, Hepburn: Tōei Animēshon Kabushiki-gaisha; ) is a Japanese animation studio primarily controlled by its namesake Toei Company. It was originally founded on January 23, 1948, as Nihon Dōga by Kenzō Masaoka and Sanae Yamamoto.\n[…]\nToei Animation's anime which have won the Animage Anime Grand Prix award are Galaxy Express 999 in 1981, Saint Seiya in 1987 and Sailor Moon in 1992. In addition to producing anime for release in Japan, Toei Animation began providing animation for American films and television series during the 1960s and particularly during the 1980s.\n[…]\nOn March 6, 2022, an incident occurred in which an unauthorized third party attempted to hack Toei Animation's network, which resulted in the company's online store and internal systems becoming temporarily suspended. The company investigated the incident and stated that the hack would affect the broadcast schedules of several anime series, including One Piece. In addition, Dragon Ball Super: Super Hero was also rescheduled to June 11, 2022, due to the hack.\n[…]\nAnimated productions by foreign studios dubbed in Japanese by Toei are The Mystery of the Third Planet (1981 Russian film, dubbed in 2008); Les Maîtres du temps (1982 French-Hungarian film, dubbed in 2014), Alice's Birthday (2009 Russian film, dubbed in 2013) and Becca's Bunch (2018 television series, dubbed in 2021 to 2022).\n[…]\nBetween 2008 and 2018, Toei Animation had copyright claimed TeamFourStar's parody series, DragonBall Z Abridged. TFS stated that the parody series is protected under fair use.\n[…]\nDoga Kobo, an animation studio formed by former Toei animators Hideo Furusawa and Megumu Ishiguro.\n[…]\nToei Animation  at Anime News Network's encyclopedia\n[…]\nToei Animation at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Toei_Animation",
        "situacao": "ok",
        "texto": "A Toei Animation Co., Ltd. (東映アニメーション株式会社, Tōei Animēshon Kabushiki-gaisha) é um estúdio de animação japonesa de propriedade da Toei Company. Hayao Miyazaki, Isao Takahata e Yoichi Kotabe já trabalharam na Toei Animation. O estúdio é responsável por produzir animes como Sally the Witch (1966), GeGeGe no Kitarō (1968), Mazinger Z (1972), Cutie Honey (1973), Galaxy Express 999 (1979), Dr.\n[…]\nO estúdio foi fundado pelos animadores Kenzō Masaoka e Sanae Yamamoto em 1948 sob a denominação Japan Animated Films (日本動画映画, Nihon Dōga Eiga), frequentemente abreviada como Nichidō Eiga (日動映画). Em 1956, a Toei Company adquiriu a empresa e renomeou-a como Toei Animation Co., Ltd. (東映動画株式会社, Tōei Dōga Kabushiki-gaisha; \"dōga\" é o termo japonês clássico para \"vídeo\" ou \"animação\"). Em 1998, a razão social em japonês foi alterada para se alinhar ao nome internacional em inglês (東映アニメーション株式会社).\n[…]\nEntre as produções do estúdio agraciadas com o prêmio Anime Grand Prix da revista Animage destacam-se Galaxy Express 999 em 1981, Saint Seiya em 1987 e Sailor Moon em 1992. Além de produzir animes para o mercado japonês, a Toei Animation atuou a partir da década de 1960 e sobretudo nos anos 1980 na prestação de serviços de animação para séries e filmes norte-americanos.\n[…]\nO lançamento do filme Dragon Ball Super: Super Hero foi igualmente reprogramado para 11 de junho de 2022 em decorrência do incidente. Em 6 de abril de 2022, a Toei Animation comunicou a normalização e a retomada das transmissões dos episódios inéditos a partir de meados do mês. No dia seguinte, a rede pública japonesa NHK noticiou que a instabilidade fora provocada por um ataque direcionado de ransomware.\n[…]\nShin-Ei Animation (originalmente A Production): estúdio fundado pelo ex-animador da Toei Daikichirō Kusube.\n[…]\nDoga Kobo: estúdio fundado pelos ex-animadores da Toei Hideo Furusawa e Megumu Ishiguro.\n[…]\n«Página oficial» (em japonês)",
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
