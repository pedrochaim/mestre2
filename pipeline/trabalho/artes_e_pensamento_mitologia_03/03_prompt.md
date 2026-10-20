Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Mitologia** (tema **Artes e Pensamento**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Urano (mitologia)",
      "descricao": "Deus primordial grego do céu, marido de Gaia e pai dos titãs."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Entre os planetas do Sistema Solar com nome de deuses, qual é o único que homenageia uma divindade grega, e não romana?",
    "resposta": "Urano",
    "fonte": [
      "https://en.wikipedia.org/wiki/Uranus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Uranus",
        "situacao": "ok",
        "texto": "Uranus is the seventh planet from the Sun. It is a gaseous cyan-coloured ice giant. Most of the planet is made of water, ammonia, and methane in a supercritical phase of matter, which astronomers call \"ice\" or \"volatiles\". The planet's atmosphere has a complex layered cloud structure, and has the lowest minimum temperature (49 K (−224 °C; −371 °F)) of all of the Solar System's planets. It has a ma\n[…]\nThe discovery of Uranus also effectively doubled the size of the known Solar System because Uranus is around twice as far from the Sun as the planet Saturn.\n[…]\nheat) part of the spectrum is 1.06±0.08 times the solar energy absorbed in its atmosphere. Uranus's heat flux is only 0.042±0.047 W/m2, which is lower than the internal heat flux of Earth of about 0.075 W/m2. The lowest temperature recorded in Uranus's tropopause is 49 K (−224.2 °C; −371.5 °F), making Uranus the coldest planet in the Solar System.\n[…]\nAt ultraviolet and visible wavelengths, Uranus's atmosphere is bland in comparison to the other giant planets, even to Neptune, which it otherwise closely resembles. When Voyager 2 flew by Uranus in 1986, it observed a total of 10 cloud features across the entire planet. One proposed explanation for this dearth of features is that Uranus's internal heat is markedly lower than that of the other giant planets, being the coldest planet in the Solar System.\n[…]\nStudies of Voyager 2 data in 2017 suggest that this asymmetry causes Uranus's magnetosphere to connect with the solar wind once a Uranian day, opening the planet to the Sun's particles. In comparison, the magnetic field of Earth is roughly as strong at either pole, and its \"magnetic equator\" is roughly parallel with its geographical equator. The dipole moment of Uranus is 50 times that of Earth.\n[…]\nUranus at NASA's Solar System Exploration site\n[…]\nUranus at Jet Propulsion Laboratory's planetary photojournal (photos)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Urano_%28planeta%29",
        "situacao": "ok",
        "texto": "Urano (português brasileiro) ou Úrano (português europeu) é o sétimo planeta a partir do Sol, o terceiro maior e o quarto mais massivo dos oito planetas do Sistema Solar. Foi nomeado em homenagem ao deus grego do céu, Urano. Embora seja visível a olho nu em boas condições de visualização, não foi reconhecido pelos astrônomos antigos como um planeta devido a seu pequeno brilho e lenta órbita.\n[…]\nUrano é o único planeta cujo nome é derivado de uma figura da mitologia grega ao invés da mitologia romana: o grego \"Οὐρανός\" foi transformado na forma em latim \"Ūranus\", sendo o adjetivo \"Uraniano\". Seu símbolo astronômico é , que é um híbrido ente os símbolos de Marte e do Sol porque Urano era o Céu na mitologia grega, o qual se imaginava ser dominado pelos poderes do Sol e Marte. Seu símbolo astrológico é , que foi sugerido por Lalande em 1784.\n[…]\nUrano tem uma inclinação axial de 97,77 graus, ou seja, seu eixo de rotação é aproximadamente paralelo ao plano do Sistema Solar, o que faz o planeta girar de lado, como se fosse uma bola rolando numa superfície. Isto provoca mudanças sazonais completamente diferentes das observadas nos outros planetas. Próximo ao solstício uraniano, um dos polos é iluminado continuamente pelo Sol enquanto o outro está em escuridão.\n[…]\nA menor temperatura registrada na tropopausa de Urano foi de 49 K, tornando-o o planeta mais frio do Sistema Solar.\n[…]\nA possibilidade de enviar a sonda Cassini a Urano foi avaliada em 2009 num plano de prolongar a missão da sonda. Ela levaria cerca de 20 anos para chegar ao sistema uraniano após deixar Saturno. Uma sonda e satélite uranianos foram recomendados pelo projeto Planetary Science Decadal Survey de 2013-2022 publicado em 2011; a proposta inclui o lançamento entre 2020-2023 e uma viagem de 13 anos até o planeta. A Agência Espacial Europeia avaliou uma missão de \"classe-média\" chamada Uranus Pathfinder.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Saturno (mitologia)",
      "descricao": "Deus romano da agricultura e das sementes, identificado com o titã grego Cronos."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Em inglês, os nomes de terça, quarta, quinta e sexta-feira homenageiam deuses germânicos. Que dia da semana tem o nome de um deus romano?",
    "resposta": "Sábado (Saturday)",
    "fonte": [
      "https://en.wikipedia.org/wiki/Saturday"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Saturday",
        "situacao": "ok",
        "texto": "Saturday is the day of the week between Friday and Sunday. No later than the 2nd century AD, the Romans named Saturday diēs Sāturnī (\"Saturn's Day\") for the god Saturn. His planet, Saturn, controlled the first hour of that day, according to Vettius Valens.\n[…]\nThe Germanic peoples adapted the system introduced by the Romans and placed their indigenous gods over the Roman deities in a process known as interpretatio germanica. In the case of Saturday, however, the Roman name was borrowed directly by West Germanic peoples, apparently because none of the Germanic gods was considered to be a counterpart of the Roman god Saturn. Otherwise Old Norse and Old High German did not borrow the name of the Roman god (Icelandic laugardagur, German Samstag).\n[…]\nIn Eastern Indian languages like Bengali Saturday is called  শনিবার, Shonibar meaning Saturn's Day and is the first day of the Bengali Week in the Bengali calendar.\n[…]\nIn Japanese, the word Saturday is 土曜日, doyōbi, meaning 'soil day' and is associated with 土星, dosei: Saturn (the planet), literally meaning \"soil star\". Similarly, in Korean the word Saturday is 토요일, tho yo il, also meaning earth day. The element Earth was associated with the planet Saturn in Chinese astrology and philosophy.\n[…]\nIn astrology, Saturn is associated with Saturday, its planet's symbol , and the astrological signs Capricorn and Aquarius.\n[…]\n\"One More Saturday Night\" is a Grateful Dead song.\n[…]\nSaturday Morning RPG\n[…]\nAfter Saturday comes Sunday\n[…]\nBlack Saturday bushfires, a 2009 series of bushfires in Victoria, Australia that occurred on a Saturday.\n[…]\nFirst Saturday Devotions, a day to honor Our Lady of Fatima\n[…]\nHoly Saturday, the day before Easter\n[…]\nLazarus Saturday, the day before Palm Sunday; part of the Holy Week\n[…]\nWorking Saturday"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/S%C3%A1bado",
        "situacao": "ok",
        "texto": "O sábado, por fundamentação bíblica e etimológica, é considerado o sétimo dia da semana, seguindo a sexta-feira e precedendo o domingo, é um dia de oração e de descanso para judeus e cristãos sabatistas.\n[…]\nPovos pagãos antigos reverenciavam seus deuses, dedicando o dia de Sábado ao deus Saturno, o que originou em inglês a denominação Saturn's day, posteriormente abreviada para Saturday, e no holandês Zaterdag, com o significado de \"Dia de Saturno\".\n[…]\nOs nomes dos dias da semana em português têm a sua origem na liturgia católica. Na maior parte das outras línguas românicas, a sua origem são nomes de deuses pagãos romanos aos quais os dias eram dedicados, neste caso o sábado era dedicado a divindade romana Saturno (este por sua vez equivalente ao deus grego Cronos).\n[…]\nOs povos germânicos adaptaram o sistema introduzido pelos romanos, mas substituíram os deuses romanos por seus deuses em um processo conhecido como interpretatio germanica. No caso do sábado, no entanto, o nome romano foi emprestado diretamente pelos povos germânicos ocidentais (como pode ser visto na palavra inglesa Saturday e na palavra holandesa Zaterdag), aparentemente porque nenhum dos deuses germânicos eram considerados contrapartes do deus romano Saturno.\n[…]\nO Império Romano considerava o sábado um dia de descanso consagrado a Saturno, ao qual atribuem a origem de Roma, construindo-lhe um templo e um altar à entrada Fórum, no Capitólio. Atribui-se ainda a Saturno a criação de divindades como Juno, Hércules e de heróis como Rómulo. Homenageava-se Saturno com a Festa das Saturnálias, onde todos descansavam dos seus trabalhos.\n[…]\nAbençoou  — Deus abençoou o dia de sábado.\n[…]\nSemana\n[…]\nDias da semana",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Moiras",
      "descricao": "Três deusas gregas do destino que fiavam, mediam e cortavam o fio da vida de cada mortal."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "As três Moiras gregas fiavam, mediam e cortavam o fio da vida de cada pessoa. Qual delas cortava o fio?",
    "resposta": "Átropos",
    "distratores": [
      "Cloto",
      "Láquesis",
      "Nêmesis"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Moirai",
      "https://pt.wikipedia.org/wiki/Moiras"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Moirai",
        "situacao": "ok",
        "texto": "In ancient Greek religion and mythology, the Moirai ()—often known in English as the Fates—were the personifications of destiny. In certain accounts, they were considered as three sisters: Clotho (the spinner), Lachesis (the allotter), and Atropos (the inevitable, a metaphor for death), though their number and names varied over time according to the author. Their Roman equivalents are the Parcae.\n[…]\nWhen they were three, the Moirai were:\n[…]\nIn the Republic of Plato, the three Moirai sing in unison with the music of the Seirenes. Lachesis sings the things that were, Clotho the things that are, and Atropos the things that are to be. Pindar in his Hymn to the Fates, holds them in high honour. He calls them to send their sisters, the Hours: Eunomia (\"lawfulness\"), Dike (\"right\"), and Eirene (\"peace\"), to stop the internal civil strife.\n[…]\nThe figure who came to be known as Atropos had her origins in the pre-Greek Mycenaean religion as a daemon or spirit called Aisa. Much of the Mycenaean religion survived into classical Greece, but it is not known to what extent classical religious belief is Mycenaean, nor how much is a product of the Greek Dark Ages or later. Moses I. Finley detected only few authentic Mycenaean beliefs in the 8th-century Homeric world.\n[…]\nThe Moirai were three sisters: Clotho (the spinner), Lachesis (the allotter), and Atropos (the inevitable, a metaphor for death). But according to a Latin verse, their roles and functions were somewhat different: \"Clotho, the youngest of the sisters, presided over the moment in which we are born, and held a distaff in her hand; Lachesis spun out all the events and actions of our life; and Atropos, the eldest of the three, cut the thread of human life with a pair of scissors.\"\n[…]\nThe asteroids (97) Klotho, (120) Lachesis, and (273) Atropos are named for the Three Fates.\n[…]\nThe Warburg Institute Iconographic Database (images of the Moirai)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Moiras",
        "situacao": "ok",
        "texto": "Na mitologia grega, as Moiras (em grego:  Μοῖραι, que significa literalmente: \"partilha, sina, destino\")  eram três irmãs-deusas que determinavam o destino tanto dos deuses quanto dos seres humanos. Eram três mulheres lúgubres, responsáveis por fabricar, tecer e cortar aquilo que seria o fio da vida de todos os indivíduos. Durante o trabalho, as moiras fazem uso da Roda da Fortuna, que é o tear ut\n[…]\nAs moiras eram filhas de Nix a deusa da noite. Moira, no singular, era inicialmente o destino. Na Ilíada, representava uma lei que pairava sobre deuses e homens, pois nem Zeus estava autorizado a transgredi-la sem interferir na harmonia cósmica. Na Odisseia aparecem as fiandeiras.\n[…]\nO mito grego predominou entre os romanos a tal ponto que os nomes das divindades caíram em desuso. Entre eles eram conhecidas por Parcas chamadas Nona, Décima e Morta, que tinham respectivamente as funções de presidir a gestação e o nascimento, o crescimento e desenvolvimento, e o final da vida; a morte; notar entretanto, que essa regência era apenas \"sobre os humanos\".\n[…]\nOs poetas da antiguidade descreviam as moiras como donzelas de aspecto sinistro, de grandes dentes e longas unhas. Nas artes plásticas, ao contrário, aparecem representadas como lindas donzelas. As Moiras eram:\n[…]\nCloto (Κλωθώ; klothó) em grego significa \"fiar\", segurava o fuso e tecia o fio da vida. Junto de Ilícia, Ártemis e Hécate, Cloto atuava como deusa dos nascimentos e partos.\n[…]\nLáquesis (Λάχεσις; láchesis) em grego significa \"sortear\", puxava e enrolava o fio tecido, Láquesis atuava junto com Tique, Pluto, Moros e outros, sorteando o quinhão de atribuições que se ganhava em vida.\n[…]\nÁtropos (Ἄτροπος; átropos) em grego significa \"afastar\", ela cortava o fio da vida. Átropos, juntamente a Tânato, Moros e as queres, determinava o fim da vida."
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Ájax",
      "descricao": "Herói grego da Guerra de Troia, filho de Télamon, famoso pela força e pelo escudo enorme."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Na Ilíada, que herói grego de enorme estatura, que lutava com um escudo gigante, é descrito como o melhor guerreiro grego depois de Aquiles?",
    "resposta": "Ájax",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ajax_the_Great"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ajax_the_Great",
        "situacao": "ok",
        "texto": "Ajax () or Aias (; Ancient Greek: Αἴας, romanized: Aíās [aí̯.aːs], gen. Αἴαντος Aíantos) is a Greek mythological hero, the son of King Telamon and Periboea, and the half-brother of Teucer. He plays an important role in the Trojan War, and is portrayed as a towering figure and a warrior of great courage in Homer's Iliad and in the Epic Cycle, a series of epic poems about the Trojan War, being secon\n[…]\nKnown as the \"bulwark of the Achaeans\", he was trained by the centaur Chiron (who had trained Ajax's father Telamon and Achilles' father Peleus and later died of an accidental wound inflicted by a poison arrow belonging to Heracles). He was described as fearless, strong, and powerful but also with a very high level of combat intelligence. Ajax commands his army wielding a huge shield made of seven cowhides with a layer of bronze.\n[…]\nMost notably, Ajax is not wounded in any of the battles described in the Iliad, and he is the only principal character on either side who does not receive substantial assistance from any of the gods (except for Agamemnon) who take part in the battles, although, in book 13, Poseidon strikes Ajax with his staff, renewing his strength.\n[…]\nLike Achilles, he is represented (although not by Homer) as living after his death on the island of Leuke at the mouth of the Danube. Ajax, who in the post-Homeric legend is described as the grandson of Aeacus and the great-grandson of Zeus, was the tutelary hero of the island of Salamis, where he had a temple and an image, and where a festival called Aianteia was celebrated in his honour.\n[…]\nAjax then became an Attic hero; he was worshipped at Athens, where he had a statue in the market-place, and the tribe Aiantis was named after him. Pausanias also relates that a gigantic skeleton, its kneecap 5 inches (13 cm) in diameter, appeared on the beach near Sigeion, on the Trojan coast; these bones were identified as those of Ajax."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/%C3%81jax",
        "situacao": "ok",
        "texto": "Ájax (em grego clássico: Αἴας; romaniz.: Aias) é um dos personagens da mitologia grega, participante da Guerra de Troia. Frequentemente é referido como Ájax, o Grande, para distingui-lo do homônimo Ájax, filho de Ileu. De acordo com Homero, na obra Ilíada, Ájax era \"o mais valente e o mais belo de todos os Dânaos guerreiros, se excetuarmos, apenas, o herói impecável, Aquiles.\"\n[…]\nÁjax era filho de Telamon e Peribeia; seu pai era filho de Éaco e Endeis e sua mãe era filha de Alcatos, filho de Pélope.\n[…]\nO filho de Telamon e Peribeia ganhou o nome Ájax porque Héracles rezou para que eles tivessem um filho homem, e neste momento apareceu uma águia  (aietos). Telamon também teve um filho com Hesíone, filha de Laomedonte, que ele recebeu como espólio da guerra que Héracles fez contra Troia; o filho de Hesíone foi Teucro.\n[…]\nÁjax era filho de Telamon (rei de Salamina) e, ao lado de Diomedes, tido como um dos mais fortes e habilidosos guerreiros gregos depois de Aquiles. Meio-irmão de Teucro, era praticamente imbatível e graças a ele os gregos conquistaram várias vitórias contra os troianos. Ao lado de Ájax, lutava outro Ájax, o lócrio. Quando ambos lutavam juntos somente os deuses podiam resistir à sua investida. Ájax também era conhecido como Ájax de Salamina.\n[…]\nHomero descreveu Ájax como uma muralha, muito mais alto do que os outros homens, com um escudo na forma de torre e uma lança comprida. Utilizava pedras colossais para combater seus oponentes. Quando Aquiles se retirou da luta, Ájax enfrentou Heitor em um único combate. Os dois heróis lutaram o dia inteiro e só Heitor sofreu pequenos ferimentos. Após a morte de Aquiles, Ájax disputou com Odisseu a armadura do herói morto. Odisseu provou ser melhor orador e ganhou o prêmio.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Monte Olimpo",
      "descricao": "Montanha mais alta da Grécia, considerada pelos gregos antigos a morada dos deuses olímpicos."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Qual é a montanha mais alta da Grécia, onde os gregos antigos imaginavam a morada dos seus principais deuses?",
    "resposta": "Monte Olimpo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mount_Olympus",
      "https://pt.wikipedia.org/wiki/Monte_Olimpo"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mount_Olympus",
        "situacao": "ok",
        "texto": "Mount Olympus (, Greek: Όλυμπος, romanized: Ólympos, IPA: [ˈoli(m)bos]) is an extensive massif near the Thermaic Gulf of the Aegean Sea, in Greece, located on the border between Thessaly and Macedonia, between the regional units of Larissa and Pieria, about 80 km (50 mi) southwest from Thessaloniki. Mount Olympus has 52 peaks and deep gorges.\n[…]\nThe list of 23 local endemic plants at Mount Olympus from the Olympus National Park Management Agency:\n[…]\nIn June 2016 the Olympus National Park Information Center, located at Litochoro, opened its gates. It informs their visitors about geology, archaeological sites, mythology, monasteries, plants, animals and other subjects affecting Mount Olympus. Hikers will find help from professional rangers, a guide provides tours for groups in the mountain area.\n[…]\nOlympus's massif is found about in the middle of Continental Greece and is easy to approach from the national railway network on the Athens-Thessaloniki line and the secondary roads that connect towns and villages around the mountain, with the principal base for excursions being the town of Litochoro, where there are many hotels and taverns. In addition, on Pieria's coastal zone there are many camp sites and lodgings.\n[…]\nThe official list of the refuges at Mount Olympus is maintained by the Olympus National Park Management Agency.\n[…]\nMount Olympus and the national Park around it were selected as the main motif for the Greek National Park Olympus commemorative coin, minted in 2005. On the reverse, the War of the Titans on Mount Olympus is portrayed along with flowering branches on the lower part of the coin. Above the scene is written, in Greek, \"National Park Olympus\".\n[…]\nMount Olympus Water & Theme Park\n[…]\nLive From Mount Olympus\n[…]\nDigital library Olympus Alpine Biblioteca (in Greek)\n[…]\nRevisiting the determination of Mount Olympus Height (Greece)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Monte_Olimpo",
        "situacao": "ok",
        "texto": "O monte Olimpo (em grego: Όλυμπος; romaniz.: Ólympos, ou όρος  Όλυμπος, também transliterado como óros Ólympos em mapas modernos) é a mais alta montanha da Grécia, com 2 917,727 metros de altitude máxima e 2 355 m de proeminência topográfica. É uma das mais altas montanhas da Grécia, em altitude absoluta da base até o topo. Está situado a cerca de 100 km de distância de Salonica, a segunda maior c\n[…]\nO seu ponto mais alto é designado Miticas (Μύτικας, Mýtikas) e ele é reconhecido pela sua flora, a qual é muito rica, sobretudo devido à presença de espécies endêmicas.\n[…]\nQualquer um que queira escalar o monte Olimpo começa a partir da cidade de Litochoro (Λιτόχωρος, Litókhôros), que acabou também por receber o nome Cidade dos deuses, devido à sua localização próxima à base do monte Olimpo.\n[…]\nNa mitologia grega, o monte Olimpo é a morada dos Doze deuses do Olimpo, os principais deuses do panteão grego. Os gregos pensavam nisto como uma mansão de cristais que estes deuses (como Zeus) habitavam. Sabe-se também que, quando Gaia deu origem aos Titãs, eles fizeram das montanhas gregas, inclusive as do monte Olimpo, seus tronos, pois eram tão grandes que mal cabiam na crosta terrestre.\n[…]\nA etimologia de \"Olimpo\" é desconhecida, mas possui grandes traços de semelhança com a cultura dos dóricos.\n[…]\nOlimpo é um nome popular para montanhas em todo o mundo. Além do monte Olimpo na Tessália, há mais quatro com esse nome nas regiões de influência grega: o Olimpo da Mísia e o da Cilícia (regiões do antigo Império Bizantino, atualmente na Turquia), o da Arcádia e da Élida.\n[…]\nAinda há um com o mesmo nome e que é o ponto mais alto da ilha de Chipre (monte Olimpo), um na antiga região da já extinta região de Frígia e outros dois nos estados norte-americanos de Utah e Washington, além de um vulcão em Marte (Olympus Mons)."
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Calíope",
      "descricao": "Musa grega da poesia épica e da eloquência, mãe de Orfeu em algumas versões."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Das nove musas gregas, qual era a da poesia épica, chamada por Hesíodo de a principal de todas elas?",
    "resposta": "Calíope",
    "distratores": [
      "Clio",
      "Érato",
      "Tália"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Calliope"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Calliope",
        "situacao": "ok",
        "texto": "In Greek mythology, Calliope ( kə-LY-ə-pee; Ancient Greek: Καλλιόπη, romanized: Kalliópē, lit. 'beautiful-voiced') is the Muse who presides over eloquence and epic poetry, so called from the ecstatic harmony of her voice. Hesiod and Ovid called her the \"Chief of all Muses\".\n[…]\nCalliope had two famous sons, Orpheus and Linus, by either Apollo or King Oeagrus of Thrace. She taught Orpheus verses for singing. According to Hesiod, she was also the wisest of the Muses, as well as the most assertive. Calliope married Oeagrus in Pimpleia, a town near Mount Olympus. She is said to have defeated the daughters of Pierus, king of Thessaly, in a singing match, and then, to punish their presumption, turned them into magpies.\n[…]\nCalliope is usually shown with a writing tablet in her hand. At times, she is depicted carrying a roll of paper or a book, or wearing a gold crown. She is also depicted with her children.\n[…]\nThe Italian poet Dante Alighieri, in his Divine Comedy, refers to Calliope:\n[…]\nCalliope Beach in Antarctica is named after the muse, as is the calliope hummingbird of North and Central America, and the calliope steam organ. Calliope Saddle is part of the Thisbe Valley Track in the Catlins Forest, South Otago, NZ. The Queensland town of Calliope is another location named after the muse, and is located in central Queensland.\n[…]\nHesiod, Theogony from The Homeric Hymns and Homerica with an English Translation by Hugh G. Evelyn-White, Cambridge, MA., Harvard University Press; London, William Heinemann Ltd. 1914. Online version at the Perseus Digital Library. Greek text available from the same website.\n[…]\nMedia related to Calliope at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cal%C3%ADope",
        "situacao": "ok",
        "texto": "Calíope (em grego clássico: Καλλιόπη; romaniz.: Kalliopē; lit. \"a da Bela Voz\") foi a primeira das nove musas da mitologia grega, filhas de Zeus e Mnemosine.\n[…]\nFoi a musa da poesia épica, da ciência em geral e da eloquência e a mais velha e sábia dentre as musas, considerada, por vezes, a rainha destas.\n[…]\nUm mito conta que Calíope era amante do deus da guerra Ares, e deu a ele vários filhos: Mygdon, Edonus, Biston e Odomantus (ou Odomas), respectivamente os fundadores das tribos trácias conhecidas como Mygdones, Edones, Bistones, e Odomantes.\n[…]\nCalíope também teve dois filhos famosos, Orfeu e Linus. Ela ensinou a Orfeu versos para cantar. De acordo com Hesíode, ela era a mais sábia das Musas, e a mais assertiva. Calíope casou-se com Oeagrus, perto de Pimpleia, Olimpo. Acredita-se que ela tenha derrotado as filhas de Pierus, rei da Tessalônia, numa disputa de canto, e então, para punir a sua presunção, transformou-as em tagarelas. (ver Ovídio, Metamorphoses 6.294-340, 662-78)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Hel (mitologia)",
      "descricao": "Deusa nórdica, filha de Loki, que governa o reino dos mortos de mesmo nome."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Na mitologia nórdica, Loki teve três filhos com uma giganta. Qual deles governava o reino dos mortos?",
    "resposta": "Hel",
    "distratores": [
      "Fenrir",
      "Jörmungandr",
      "Sleipnir"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Hel_(mythological_being)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hel_(mythological_being)",
        "situacao": "ok",
        "texto": "Hel (Old Norse) is a female being in Norse mythology who is said to preside over an underworld realm of the same name, where she receives a portion of the dead. Hel is attested in the Poetic Edda, compiled in the 13th century from earlier traditional sources, and the Prose Edda, written in the 13th century. In addition, she is mentioned in poems recorded in Heimskringla and Egils saga that date fr\n[…]\nHel receives notable mention in the Prose Edda. In chapter 34 of the book Gylfaginning, Hel is listed by High as one of the three children of Loki and Angrboða; the wolf Fenrir, the serpent Jörmungandr, and Hel.\n[…]\nLater in the chapter, after the female jötunn Þökk refuses to weep for the dead Baldr, she responds in verse, ending with \"let Hel hold what she has\". In chapter 51, High describes the events of Ragnarök, and details that when Loki arrives at the field Vígríðr \"all of Hel's people\" will arrive with him.\n[…]\nIn chapter 12 of the Prose Edda book Skáldskaparmál, Hel is mentioned in a kenning for Baldr (\"Hel's companion\"). In chapter 23, \"Hel's [...] relative or father\" is given as a kenning for Loki. In chapter 50, Hel is referenced (\"to join the company of the quite monstrous wolf's sister\") in the skaldic poem Ragnarsdrápa.\n[…]\nSome B-class bracteates showing three godly figures have been interpreted as depicting Baldr's death, the best known of these is the Fakse bracteate. Two of the figures are understood to be Baldr and Odin while both Loki and Hel have been proposed as candidates for the third figure. If it is Hel she is presumably greeting the dying Baldr as he comes to her realm.\n[…]\nHel was the inspiration for the Marvel comic book character Hela, created by Stan Lee and Jack Kirby; Hela first appeared in Journey into Mystery #102 (March 1964). In the widely popular Thor: Ragnarok (2017), Hela is portrayed as \"violent, vicious, brutal and cruel\"."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hela",
        "situacao": "ok",
        "texto": "Na mitologia nórdica, Hela (Hel ou Hell) é a deusa do Reino dos Mortos, igualmente designado por Hel.\n[…]\nÉ filha de Loki e da gigante Angrboda, irmã mais nova de Fenrir e da serpente Jörmungund, do oceano que circunda Midgard.\n[…]\nComo agradecimento por fazê-la governante do mundo inferior, Hela deu a Odin os seus dois corvos Hugin e Munin , que são os mensageiros entre Asgard e os outros reinos.\n[…]\nSeu palácio chama-se Helvidner, sua mesa era a Fome, sua faca, a Inanição, o Atraso, seu criado, a Vagareza, sua criada, o Precipício, sua porta, a Preocupação, sua cama, e os Sofrimentos formavam as paredes de seus aposentos. O reino de Hela era guardado pelo cão Garm.\n[…]\nDe acordo com as lendas, Hela não podia ser derrotada em seu mundo e nenhum deus se dispunha a enfrentá-la em seus domínios, nem mesmo Odin ou Thor.\n[…]\nDe acordo com as lendas, Hela também não teve participação no Ragnarök (fim do mundo da mitologia nórdica), preferindo ficar em seus domínios e não tomar partido nenhum, porém Hela liberou todos os mortos para servir de exército para Loki na batalha contra Odin em Ragnarök.\n[…]\nNo filme \"Thor: Ragnarok\" (2017), Hela é retratada como filha mais velha de Odin e irmã de Thor e Loki (diferentemente da lenda original).\n[…]\nAparece um pouco na Trilogia de Rick Riordan, fantasioso sobre os nórdicos, Espada do Verão.\n[…]\nNo famoso MMORPG World of Warcraft pode-se perceber uma relação entre Hela (mitologia) e Helya (World of Warcraft) na expansão Legion. No jogo, Helya é encarregada do submundo Helheim, sendo guardada pelo cachorro de três cabeças, Guarm.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Anúbis",
      "descricao": "Deus egípcio com cabeça de chacal, ligado aos mortos, à mumificação e aos túmulos."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "No panteão egípcio, cheio de deuses com cabeça de animal, quem tinha cabeça de chacal e protegia os túmulos?",
    "resposta": "Anúbis",
    "fonte": [
      "https://en.wikipedia.org/wiki/Anubis"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Anubis",
        "situacao": "ok",
        "texto": "Anubis ( ; Ancient Greek: Ἄνουβις), also known as Inpu, Inpw, Jnpw, or Anpu in Ancient Egyptian (Coptic: ⲁⲛⲟⲩⲡ, romanized: Anoup), is the god of funerary rites, protector of graves, and guide to the underworld in ancient Egyptian religion, usually depicted as a canine or a man with a canine head.\n[…]\nIn Egypt's Early Dynastic period (c. 3100 – c. 2686 BC), Anubis was portrayed in full animal form, with a \"jackal\" head and body. A jackal god, probably Anubis, is depicted in stone inscriptions from the reigns of Hor-Aha, Djer, and other pharaohs of the First Dynasty. Since Predynastic Egypt, when the dead were buried in shallow graves, jackals had been strongly associated with cemeteries because they were scavengers that uncovered human bodies and ate their flesh.\n[…]\nAlthough the Greeks and Romans typically scorned Egyptian animal-headed gods as bizarre and primitive (Anubis was mockingly called \"Barker\" by the Greeks), Anubis was sometimes associated with Sirius in the heavens and Cerberus and Hades in the underworld. In his dialogues, Plato often has Socrates utter oaths \"by the dog\" (Greek: kai me ton kuna), \"by the dog of Egypt\", and \"by the dog, the god of the Egyptians\", both for emphasis and to appeal to Anubis as an arbiter of truth in the underworld.\n[…]\nIn the early dynastic period, he was depicted in animal form, as a black canine. Anubis's distinctive black color did not represent the animal, rather it had several symbolic meanings. It represented \"the discolouration of the corpse after its treatment with natron and the smearing of the wrappings with a resinous substance during mummification.\" Being the color of the fertile silt of the River Nile, to Egyptians, black also symbolized fertility and the possibility of rebirth in the afterlife."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/An%C3%BAbis",
        "situacao": "ok",
        "texto": "Anúbis ([əˈnjuːbᵻs]; em grego clássico: Ἄνουβις) ou Anupo é, no panteão do Antigo Egito, o deus dos mortos e moribundos, que guiava e conduzia as almas ao mundo dos mortos. É representado com cabeça de chacal, embora os egiptólogos mais conservadores afirmem que não há como saber com certeza o animal que o representa.\n[…]\nAo longo XX século XX Século XX, muitos especialistas estimam que o animal de Anúbis é um ser híbrido, cão-lobo, lobo-chacal, chacal-cão, etc  Segundo George Hart, escritor e conferencista do Museu Britânico \"o cão Anubis é provavelmente um chacal[...] Mas outros cães, por exemplo o pária cor de ferrugem, podem ter servido como protótipo. Anubis talvez represente o epítome dos cães do deserto\".\n[…]\nA assimilação de Anubis ao chacal é baseada em um critério comportamental: este canino noturno é conhecido por assombrar cemitérios à noite, e mais particularmente em torno de sepulturas recém-cavadas, a fim de desenterrar e devorar cadáveres. Esse comportamento teria sido associado pelos antigos egípcios à morte e, por extensão, à mumificação e às cerimônias fúnebres.\n[…]\nOs antigos egípcios certamente não deixaram de notar esse comportamento em seus cães de caça ou nos caninos que conheciam, como o chacal dourado ( Canis aureus ), a raposa vermelha ( Vulpes vulpes ), o feneco ( Vulpes zerda ) ou o selvagem africano. Cão ( Lycaon pictus ). O deus Anúbis pode ter sido representado na forma canina por causa desse comportamento escavador, sendo o principal papel de uma divindade funerária esconder os restos mortais da vista dos vivos.\n[…]\nAnúbis é pai de Qeb-hwt, também conhecido como Kebechet. Em épocas mais tardias, Anúbis foi combinado com o deus grego Hermes,surgindo assim Hermanúbis.\n[…]\nGrenier, J.-C. (1977). Anubis alexandrin et romain (em francês). [S.l.]: E. J. Brill. ISBN 978-90-04-04917-8",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Quíron",
      "descricao": "Centauro sábio da mitologia grega, mestre de heróis como Aquiles e Asclépio."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Ao contrário dos outros centauros, conhecidos pela selvageria, que centauro grego era famoso pela sabedoria e foi mestre de heróis como Aquiles?",
    "resposta": "Quíron",
    "fonte": [
      "https://en.wikipedia.org/wiki/Chiron"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Chiron",
        "situacao": "ok",
        "texto": "In Greek mythology, Chiron, also Cheiron or Kheiron, (Ancient Greek: Χείρων, romanized: Kheírōn, lit. 'hand'; pronounced /ˈkaɪrən/ or /ˈkaɪrɒn/, KY-rən, KY-ron, Kye-ron or Kee-ron) was held to be the superlative centaur amongst his brethren since he was called the \"wisest and justest of all the centaurs\".\n[…]\nLike satyrs, centaurs were notorious for being wild, lusty, overly indulgent drinkers and carousers, violent when intoxicated. Chiron, by contrast, was intelligent, civilized, and kind because he was not related directly to the other centaurs due to his parentage. He was the son of the Titan Cronus and the Oceanid Philyra, and thus possible brother to Dolops and Aphrus, the ancestor and eponym of the Aphroi, i.e. the native Africans.\n[…]\nAlthough a centaur, Chiron's physical appearance often differs somewhat from other centaurs, demonstrating his status and heritage. In traditional Greek representations of Chiron his front legs are human, rather than equine. This is in contrast to the traditional representation of centaurs, which have the entire lower body of a horse. This clearly sets Chiron apart from the other centaurs, making him easily identifiable.\n[…]\nIgnorant of what they had done, the hunting dogs came to the cave of Chiron seeking their master and the Centaur fashioned an image of Actaeon in order to soothe their grief.\n[…]\nThere is a clear contrast here in the hardship and insults Chiron is directing at his pupil compared to his previous kindness. However, this duality can be seen as a demonstration of a traditional Roman education, especially a noble one; learning both military and refined arts. Centaurs in antiquity were often remembered for their battle with the Lapiths.\n[…]\nMedia related to Chiron at Wikimedia Commons\n[…]\nCHIRON from The Theoi Prokect"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Qu%C3%ADron",
        "situacao": "ok",
        "texto": "Quíron (em grego: Χείρων, transliterado Kheíron, \"mão\"), na mitologia grega, era uma divindade centauro, considerado superior por seus próprios pais. Ao contrário do resto dos centauros que, como os sátiros, eram notórios por serem bebedores contumazes e indisciplinados, delinquentes sem cultura e propensos à violência quando ébrios, Quíron era inteligente, civilizado e bondoso, e célebre por seu \n[…]\nGrande curandeiro, astrólogo e um respeitado oráculo, Quíron era tido como o último dos centauros, e altamente reverenciado como professor e tutor. Entre seus pupilos, estavam diversos heróis, como Asclépio, Aristeu, Ajax, Enéas, Actéon, Ceneu, Teseu, Aquiles, Jasão, Peleu, Télamon, Héracles, Ileu, Fênix, e em algumas versões do mito, Dioniso.\n[…]\nQuíron salvou a vida de Peleu quando Acasto tentou matá-lo, roubando sua espada e deixando-o dentro de uma mata, para ser morto pelos centauros. Quíron teria retornado a espada a Peleu. Algumas fontes especulam que Quíron seria originalmente um deus exclusivo da Tessália, posteriormente absorvido pelo panteão grego na forma de um centauro.\n[…]\nPeleu - pai de Aquiles, foi, certa vez, resgatado por Quíron: Acasto, filho de Pélias, purificou Peleu por ter matado, inadvertidamente, seu cunhado, Êuricíon. A esposa de Acasto, no entanto, Astidâmia, apaixonou-se por Peleu; ao perceber que não era correspondida, passou a tramar contra ele, acusando-o, pelas costas, de tentar estuprá-la.\n[…]\nAcasto, sem poder matar o homem que acabara de purificar, levou-o para uma caçada no Monte Pélion; à noite, quando Peleu adormeceu, abandonou-o e escondeu sua espada. Ao despertar, os centauros haviam cercado seu acampamento e o teriam matado não fosse a intervenção providencial de Quíron, que também lhe devolveu a espada após procurar e encontrá-la. Quíron promoveu então o casamento de Peleu com Tétis, criando Aquiles por ela.\n[…]\n2060 Chiron (Corpo menor do sistema solar)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Trimurti",
      "descricao": "Trindade de deuses do hinduísmo formada por Brahma, Vishnu e Shiva."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Na Trimurti, a trindade hindu, Brahma é o criador e Vishnu é o preservador. Que deus completa o trio no papel de destruidor?",
    "resposta": "Shiva",
    "fonte": [
      "https://en.wikipedia.org/wiki/Trimurti"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Trimurti",
        "situacao": "ok",
        "texto": "The Trimurti is the triple deity of supreme divinity in Hinduism, in which the cosmic functions of creation, preservation, and destruction are personified as a triad of deities. Typically, the designations are that of Brahma the creator, Vishnu the preserver, and Shiva the destroyer.\n[…]\nThe following is a well-known section from the Vishnu Purana (1:2:66) that mentions Brahma, Vishnu, and Shiva together in a single verse, highlighting their roles within the cosmic functions of creation, preservation, and destruction:\n[…]\nTranslation: In this way, the one supreme entity divides itself into three forms—Brahma, Vishnu, and Mahesh (Shiva)—taking on different aspects. It creates, preserves, and destroys the universe in various ages.\n[…]\nThe word ‘trimurti’ means ‘three forms’. In the trimurti, Brahma is the creator, Vishnu is the preserver and Shiva is the destroyer.\n[…]\nThus, Brahma, Vishnu and Rudra are not deities different from Shiva, but rather are forms of Shiva. As Brahma/Sadyojata, Shiva creates. As Vishnu/Vamadeva, Shiva preserves. As Rudra/Aghora, he dissolves. This stands in contrast to the idea that Shiva is the \"God of destruction.\" Shiva is the supreme God and performs all actions, of which destruction is only but one. Ergo, the Trimurti is a form of Shiva Himself for Shaivas.\n[…]\nThe female-centric Shaktidharma denomination assigns the eminent roles of the three forms (Trimurti) of Supreme Divinity not to masculine gods but instead to feminine goddesses: Mahasarasvati (Creatrix), Mahalaxmi (Preservatrix), and Mahakali (Destructrix). This feminine version of the Trimurti is called Tridevi (\"three goddesses\"). The masculine gods (Brahma, Vishnu, Shiva) are then relegated as auxiliary agents of the supreme feminine Tridevi.\n[…]\nMedia related to Trimurti at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Trim%C3%BArti",
        "situacao": "ok",
        "texto": "A Trimurti é a divindade tripla da divindade suprema no Hinduísmo, na qual as funções cósmicas de criação, preservação e destruição são personificadas como uma tríade de divindades. Tipicamente, as designações são de Brama o criador, Vixnu o preservador, e Xiva o destruidor.\n[…]\nO símbolo Om do Hinduísmo é considerado como tendo uma alusão à Trimurti, onde os fonemas A, U e M da palavra são considerados para indicar criação, preservação e destruição, somando-se para representar Brâman. A Tridevi é a trindade das consortes deusas da Trimurti.\n[…]\nA seguir está um verso bem conhecido do Vishnu Purana (1.2.66) que menciona Brama, Vixnu e Xiva juntos em um único verso, destacando seus papéis dentro das funções cósmicas de criação, preservação e destruição.rūpāṇi trīṇi tatraiva mūrttibheda-vibhāgataḥ |\n[…]\nA palavra 'trimurti' significa 'três formas'. Na trimurti, Brama é o criador, Vixnu é o preservador e Xiva é o destruidor.\n[…]\nAssim, Brama, Vixnu e Rudra não são divindades diferentes de Xiva, mas sim formas de Xiva. Como Brama/Sadyojata, Xiva cria. Como Vixnu/Vamadeva, Xiva preserva. Como Rudra/Aghora, ele dissolve. Isto contrasta com a ideia de que Xiva é o \"Deus da destruição\". Xiva é o Deus supremo e realiza todas as ações, das quais a destruição é apenas uma. Portanto, a Trimurti é uma forma do próprio Xiva para os Xivaítas.\n[…]\nA denominação Shaktidharma centrada no feminino atribui os papéis eminentes das três formas (Trimurti) da Divindade Suprema não aos deuses masculinos, mas sim às deusas femininas: Mahasarasvati (Criadora), Mahalaxmi (Preservadora) e Mahakali (Destruidora). Esta versão feminina da Trimurti é chamada Tridevi (\"três deusas\"). Os deuses masculinos (Brama, Vixnu, Xiva) são então relegados como agentes auxiliares da suprema Tridevi feminina.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Argonautas",
      "descricao": "Heróis gregos que navegaram com Jasão no navio Argo em busca do velocino de ouro."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Que herói grego, famoso pela força descomunal e por doze trabalhos, embarcou com Jasão no navio Argo em busca do velocino de ouro?",
    "resposta": "Hércules",
    "fonte": [
      "https://en.wikipedia.org/wiki/Argonauts"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Argonauts",
        "situacao": "ok",
        "texto": "The Argonauts ( AR-gə-nawt; Ancient Greek: Ἀργοναῦται, romanized: Argonaûtai, lit. 'Argo sailors') were a band of heroes in Greek mythology, who in the years before the Trojan War (around 1300 BC) accompanied Jason to Colchis in his quest to find the Golden Fleece. Their name comes from their ship, Argo, named after its builder, Argus. They were sometimes called Minyans, after a prehistoric tribe \n[…]\nThe other Argonauts consorted with the Lemnian women, and their descendants were called Minyans, since some among them had previously emigrated from Minyan Orchomenus to Iolcus. (Later, these Minyans were driven out from the island and came to Lacedaemon). The Lemnian women gave the names of the Argonauts to the children they had conceived by them. Delayed many days there, they were chided by Hercules and departed.\n[…]\nHowever, though the bulls were yoked, Aeëtes did not give Jason the fleece for he wished to burn down the Argo and kill the crew. But before he could do so, Medea brought Jason by night to the shrine. Having lulled the dragon that guarded it to sleep with her drugs, she possessed herself of the fleece. In Jason's company, she came to the Argo, and the Argonauts put to sea by night to set off to their country.\n[…]\nHe sent out many of the Colchians to search for the Argo, threatening that if they did not bring Medea to him, they should suffer the punishment due to her; so they separated and pursued the search in diverse places. When the Argonauts were already sailing past the Eridanus river, Zeus, in his anger at the murder of Apsyrtus, sent a furious storm upon them which drove them out of their course.\n[…]\nCannella, Francesca (2015). \"\"The Heroes of the Fabulous History and the Inventions Ennobled by Them\": The Myth of the Argonauts between Visual Sources and Literary inventio\". Music in Art: International Journal for Music Iconography. 40 (1–2): 191–202. ISSN 1522-7464."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Argonautas",
        "situacao": "ok",
        "texto": "Os argonautas (em grego clássico: \"Ἀργοναῦται Argonautai\"), na mitologia grega, eram tripulantes da nau Argo que, segundo a lenda grega, foi até a Cólquida (actual Geórgia) em busca do Tosão de ouro (ou Velocino de ouro).\n[…]\nA saga dos argonautas descreve a perigosa expedição rumo a Cólquida em busca do Velocino de Ouro. Conta o mito que Éson havia sido destronado por Pélias, seu meio irmão. Seu filho Jasão, exilado na Tessália aos cuidados do centauro Quíron, retornou ao atingir a maioridade para reclamar ao trono que por direito lhe pertencia. Pélias então, que tencionava livrar-se do intruso, resolveu enviá-lo em busca do Velocino de Ouro, tarefa muito arriscada.\n[…]\nCastor e Pólux, gêmeos filhos de Zeus e Leda, atraíram a proteção do pai durante a tempestade que a nau foi obrigada a enfrentar. Destacavam-se ainda entre os heróis: Admeto, filho do rei Feres; Ídmon e Anfiarau, célebres adivinhos; Teseu, considerado o maior herói grego; Hércules que não completou a expedição; Etálides, filho de Hermes que atuou como arauto; os irmãos Idas, Linceu, e Jasão, chefe e comandante da expedição.\n[…]\nAo todo eram cinquenta argonautas. Os que ficaram conhecidos na literatura eram:\n[…]\nJasão tirou proveito dos feitiços e encantamentos da feiticeira e sem esforço partiu da Cólquida levando consigo o Velo de Ouro. Os argonautas ainda passaram por alguns percalços mas enfim chegaram a seu destino final onde entregaram a Pélias o velocino. Jasão partiu para Corinto, onde consagrou a embarcação ao deus Posídon.\n[…]\nA lenda foi relatada por Apolónio de Rodes, em seu poema épico A Argonáutica (ou Os Argonautas - c. 250 a.C.), cuja tradução em português diretamente do grego foi feita por José Maria da Costa e Silva, em 1852.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Odisseia",
      "descricao": "Poema épico grego atribuído a Homero sobre a longa volta de Ulisses para Ítaca."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Na Odisseia, quando Ulisses volta a Ítaca disfarçado de mendigo, que animal o reconhece e morre logo em seguida?",
    "resposta": "O cão Argos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Argos_(dog)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Argos_(dog)",
        "situacao": "ok",
        "texto": "In Homer's Odyssey, Argos (; Ancient Greek: Ἄργος), sometimes referred to as Argus, is Odysseus's faithful dog. Bred to be a hunting dog before Odysseus leaves for the Trojan War, Argos is neglected after Odysseus is presumed dead. Twenty years later, Odysseus returns to Ithaca and finds him lying in piles of manure, immobile from old age and neglect, and infested with parasites. When Argos sees O\n[…]\nLaertes wears a goat-leather helmet (κυνέη [kunéē], which is derived from κύων [kúōn] 'dog') and suffers miserably like Argos in Odysseus's absence.\n[…]\nBernhard Frank argues, using Argos's destitution as a representation of Odysseus's, that Argos's death symbolizes the end of Odysseus's decline. Odysseus's restraint demonstrates his resolve to complete his mission: \"thereby released from his weak self-image and the dangers of sentimentality [...] he is now free to move on\".\n[…]\nIn 2016, HarperCollins published Argos: The Story of Odysseus as Told by His Loyal Dog, a point-of-view retelling by Ralph Hardy whose prose is an homage to the literary traditions of Ancient Greek. In her Bulletin of the Center for Children's Books review, April Spisak found the book \"odd but compelling\" and the titular canine \"memorable\".\n[…]\nHowever, she added that \"much of the urgency, passion, strife, and drama of the original story is muted or lost altogether\" through its focus on the animal characters. The staff of Kirkus offered similar views as regarded Argos himself, and found the story \"disjointed\". Reviewers recommended it as an accessible version of the myth for young readers, but criticized its lack of a glossary.\n[…]\nArgos appeared in the 2026 film adaptation of the Odyssey. Its director, Christopher Nolan, referred to the Odyssey as \"the ultimate dog story\", and cited Argos as one of the main motivations for creating the film.\n[…]\nMedia related to Argos (dog) at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Argos_%28c%C3%A3o%29",
        "situacao": "ok",
        "texto": "Argos (grego: Άργος) é o fiel cão de Odisseu/Ulisses na Odisseia de Homero. Após 20 anos fora de casa, Ulisses finalmente alcança Ítaca, sua terra natal, levando dez anos só na jornada de retorno. Na sua ausência, alguns pretendentes invadiram sua casa na esperança de se casarem com sua esposa Penélope.\n[…]\nA fim de, secretamente reentrar em sua casa, em última análise para atacar de surpresa os pretendentes, Odisseu disfarça-se de mendigo (apenas seu filho Telêmaco e a velha ama descobrem sua verdadeira identidade). Assim que Odisseu se aproxima de sua casa pela primeira vez em 20 anos, ele encontra Argos deitado, negligenciado em uma pilha de estrume de vaca, infestado de piolhos, velho e muito cansado.\n[…]\nEste é um nítido contraste com o cão que Ulisses deixou para trás; Argos costumava ser conhecido por sua velocidade e força, e suas habilidades superiores de rastreamento. Argos reconhece Ulisses de uma só vez, e ele tem apenas a força suficiente para mexer seus ouvidos e abanar a cauda, mas não pode se levantar para cumprimentar seu mestre. Assim que Ulisses passa (mas não sem derramar uma lágrima por seu lindo cão deitado em adubo) e entra em sua sala, Argos morre.\n[…]\nIsto é importante porque se Argos vivesse, ele sem dúvida iria chamar a atenção de Odisseu e arruinar seu plano de matar os invasores. A simplicidade das relações entre Argos e Ulisses permite a sua reunião em ser imediata e sincera. Ao contrário de seu relacionamento com a esposa Penélope, Odisseu não precisa se preocupar em como os 20 anos de distância afetaram seu relacionamento com Argos.\n[…]\nergue a cabeça e as orelhas; era Argos que, outrora, o valoroso Odisseu\n[…]\nao salão, aí encontrou os pretendentes. Já então Argos recebera a negra morte,\n[…]\nArgos, o Galgo de Ulisses\n[…]\nTexto da morte de Argos em grego - Portal Grécia Antiga",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Grifo",
      "descricao": "Criatura lendária com corpo de leão e cabeça e asas de águia."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Na arte e nas lendas antigas, o grifo combina o corpo de um leão com a cabeça e as asas de que ave?",
    "resposta": "Águia",
    "fonte": [
      "https://en.wikipedia.org/wiki/Griffin"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Griffin",
        "situacao": "ok",
        "texto": "The griffin, griffon, or gryphon (Ancient Greek: γρύψ, romanized: grýps; Classical Latin: gryps or grypus; Late and Medieval Latin: gryphes, grypho etc.; Old French: griffon) is a legendary creature with the body, tail, and back legs of a lion, and the head and wings of an eagle with its talons on the front legs.\n[…]\nGriffin-type creatures combining raptor heads and mammalian bodies were depicted in the Levant, Syria, and Anatolia during the Middle Bronze Age, dated at about 1950–1550 BC.\n[…]\nThe College of William and Mary in Virginia changed its mascot to Griffin in April 2010. The griffin was chosen because it is the combination of the British lion and the American eagle, a transition that faced some controversy and was even commented upon by alumnus comedian Jon Stewart.\n[…]\nIn the 1969 movie Latitude Zero, a creature called \"Griffin\" is made by inserting a woman's brain into a lion–condor hybrid.\n[…]\nThe latest fighter produced by the Saab Group bears the name \"Gripen\" (Griffin), as a result of public competition.\n[…]\nDuring World War II, the Heinkel firm named its heavy bomber design for the Luftwaffe after the legendary animal, as the Heinkel He 177 Greif, the German form of \"griffin\". General Atomics has used the term \"Griffin Eye\" for its intelligence surveillance platform based on a Hawker Beechcraft King Air 35ER civilian aircraft.\n[…]\nSome large species of Old World vultures are called griffines, including the griffon vulture (Gyps fulvus). The scientific name for the Andean condor is Vultur gryphus, Latin for \"griffin-vulture\". The Catholic Douay-Rheims version of the Bible uses griffon for a creature referred to as vulture or ossifrage in other English translations (Leviticus 11:13).\n[…]\nGriffin bones at amnh.org\n[…]\n\"Griffin\" . Encyclopædia Britannica. Vol. XI (9th ed.). 1880. p. 195."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Grifo",
        "situacao": "ok",
        "texto": "Grifo ([ˈɡɾɪfu]; Grego Antigo: γρύψ, gryps; Latim Clássico: grȳps or grȳpus; Latim Tardio e Medieval: gryphes, grypho etc.; Francês Antigo: griffon) é uma criatura lendária de origens asiáticas milenares. Sua descrição mais corrente o mostra como um híbrido metade águia e metade leão, mas foi uma imagem comum em uma ampla gama de civilizações do Oriente e Ocidente, onde sua representação e atribut\n[…]\nA figura foi introduzida na cultura minoica provavelmente através da Síria por meio de imagens em tecidos, e na Grécia continental se consolidou a imagem clássica ocidental do grifo como um híbrido de águia e leão, com a cabeça, asas e patas dianteiras da ave e a parte posterior do corpo e cauda leoninos. Pode ter chifres, orelhas ou uma crista ao longo do pescoço. Nos séculos VII e VI a.C.\n[…]\n\"[...] quadrúpedes como um leão, têm garras de enorme força que se parecem com as do leão. Usualmente os relatos os mostram com asas, as penas de seu dorso são negras, e as da frente são vermelhas, enquanto que as asas são brancas. Clésias disse que seu pescoço é decorado com penas de um azul escuro, que seu bico é como o da águia, assim como a cabeça, da forma como os artistas os retratam na pintura e escultura. Os olhos, diz ele, são como fogo.\n[…]\nMandeville, por exemplo, disse que embora tivessem corpo de leão e águia, eram maiores e mais fortes que oito leões e mais poderosos do que cem águias juntas.\n[…]\nNa filosofia cristã foi muitas vezes interpretado positivamente como um símbolo de coragem e poder, reunindo as melhores qualidades dos mundos celeste e terrestre, já que a águia era vista como a rainha dos animais voadores e o leão como o rei dos animais pedestres, ou como uma alegoria da natureza ao mesmo tempo humana e divina de Jesus, e é neste sentido que ele é figurado na arte cristã medieval e na Divina Comédia de Dante, onde levam a heroína Beatriz para o céu.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Golem",
      "descricao": "Criatura do folclore judaico moldada em barro e animada por meios místicos, famosa pela lenda do rabino de Praga."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Segundo a lenda judaica, de que material um rabino de Praga moldou o golem, o gigante que protegia o bairro judeu da cidade?",
    "resposta": "Barro",
    "fonte": [
      "https://en.wikipedia.org/wiki/Golem"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Golem",
        "situacao": "ok",
        "texto": "A golem (  GOH-ləm; Hebrew: גּוֹלֶם, romanized: gōlem) is an animated anthropomorphic being in Jewish folklore that is created entirely from inanimate matter, usually clay or mud. The most famous golem narrative involves Rabbi Judah Loew ben Bezalel, the late-16th-century rabbi of Prague. According to Moment magazine, \"the golem is a highly mutable metaphor with seemingly limitless symbolism. It c\n[…]\nThe word golem occurs once in the Bible, in Psalm 139, which uses the word גׇּלְמִ֤י (golmi; 'my golem', 'my light form', 'raw material') to connote the unfinished human being before God's eyes. Pirkei Avot 5:9 uses the term to refer to someone who is unsophisticated: \"[There are] seven things [characteristic] in a clod, and seven in a wise man\" (שִׁבְעָה דְבָרִים בַּגֹּלֶם וְשִׁבְעָה בֶחָכָם).\n[…]\nBilski, Emily B. (1988). Golem! Danger, Deliverance and Art. New York: The Jewish Museum. ISBN 978-0873340496.\n[…]\nFaucheux, Michel (2008). Norbert Wiener, le golem et la cybernétique. Paris: Editions du Sandre.\n[…]\nGoldsmith, Arnold L. (1981). The Golem Remembered 1909–1980: Variations of a Jewish Legend. Detroit: Wayne State University Press. ISBN 0814316832.\n[…]\nIdel, Mosche (1990). Golem: Jewish Magical and Mystical Traditions on the Artificial Anthropoid. Albany, NY: State University of New York Press. ISBN 0-7914-0160-X.\n[…]\nRosenberg, Yudl (2008). The Golem and the Wondrous deeds of the Maharal of Prague. Translated by Leviant, Curt. Yale University Press. ISBN 978-0-300-12204-6. First English translation of original in Hebrew, Pietrkow, Poland, 1909.\n[…]\nSalfellner, Harald (2016). The Prague Golem: Jewish Stories of the Ghetto. Prague: Vitalis. ISBN 978-80-7253-188-2.\n[…]\nWinkler, Gershon (1980). The Golem of Prague: A New Adaptation of the Documented Stories of the Golem of Prague. New York: Judaica Press. ISBN 0-910818-25-8.\n[…]\n\"Golem of Prague, Fact or Ficton?\" on Yutorah.org"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Golem",
        "situacao": "ok",
        "texto": "Golem é um ser artificial místico, análogo a um autômato ou robô, associado à tradição mística do judaísmo, particularmente à cabala, que pode ser trazido à vida através de um processo divino.\n[…]\nA mais famosa narrativa com um golem envolve o rabino Judá Loew ben Betzalel, de Praga, durante o século XVI. Diz-se que ele teria criado um golem para defender o gueto de Josefov em Praga contra ataques antissemitas. A primeira publicação da história do golem apareceu em 1847 em uma coleção de contos judaicos intitulada Galerie der Sippurim, publicada por Wolf Pascheles, de Praga.\n[…]\nCerca de 60 anos mais tarde, um conto de ficção foi publicado por Yudl Rosenberg (1909). De acordo com a lenda, o golem teria sido feito com a argila do rio Moldava que banha Praga. Seguindo as orações específicas, o rabino construiu o golem e fez com que ele ganhasse vida recitando um hino especial em hebraico e escrevendo na sua testa a palavra emet, que em hebraico significa \"verdade\". O golem deveria obedecer ao rabino, ajudando e protegendo o gueto judaico.\n[…]\nIsaac Bashevis Singer, vencedor do Prêmio Nobel de Literatura, escreveu a sua versão da lenda do Golem em 1969.\n[…]\nEm jogos de RPG de mesa como Dungeons & Dragons e jogos eletrônicos como Minecraft, entre muitos outros, um golem é um ser artificial (frequentemente classificado pelo jogo como \"monstro\" ou \"criatura\") feito para servir ao seu criador, sendo que vários tipos de golens podem ser construídos a partir de diferentes tipos de materiais (enquanto o golem judaico medieval era feito de barro ou argila, outros tipos de golens desses tais jogos podem ser feitos de carne humana, neve, pedra, metal, entre outros materiais).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Baba Yaga",
      "descricao": "Bruxa do folclore eslavo que vive numa cabana na floresta."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "No folclore eslavo, a bruxa Baba Yaga mora numa cabana na floresta que se ergue sobre pernas de que animal?",
    "resposta": "Galinha",
    "distratores": [
      "Cabra",
      "Avestruz",
      "Cavalo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Baba_Yaga"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Baba_Yaga",
        "situacao": "ok",
        "texto": "Baba Yaga is a female character (or one of a trio of sisters of the same name) from Slavic folklore who has two contrasting roles. In some narratives, she is described as a repulsive or ferocious-looking old woman who fries and eats children, while in others she is depicted as a nice old woman who helps the hero. Both versions often depict her as a witch. She is often associated with forest wildli\n[…]\nThe first clear reference to Baba Yaga (Iaga baba) occurs in 1755 in Mikhail V. Lomonosov's Russian Grammar. In Lomonosov's grammar book, Baba Yaga is mentioned twice among other figures largely from Slavic tradition. The second of the two mentions occurs within a list of Slavic gods and beings next to their presumed equivalents in Roman mythology (the Slavic god Perun, for example, appears equated with the Roman god Jupiter).\n[…]\nThe Scooby-Doo franchise has featured Baba Yaga:\n[…]\n\"Baba Yaga\" and \"Bogeyman\" are nicknames for Keanu Reeves's character John Wick.\n[…]\nMore fictional characters named Baba Yaga are listed in Baba Yaga (disambiguation) § Fictional characters\n[…]\nHenry, C. (2022). Ryan, L. (ed.). Into the Forest: Tales of the Baba Yaga. Black Spot Books. ISBN 978-1-64548-123-2.\n[…]\nJohns, Andreas (1998). \"Baba Yaga and the Russian Mother\". The Slavic and East European Journal. 42 (1). American Association of Teachers of Slavic and East European Languages: 21–36. doi:10.2307/310050. JSTOR 310050.\n[…]\nJohns, Andreas (2004). Baba Yaga: The Ambiguous Mother and Witch of the Russian Folktale. New York: Peter Lang. ISBN 978-0-8204-6769-6.\n[…]\nNess, Mari (13 August 2021). \"Chicken Feet and Fiery Skulls: Tales of the Russian Witch Baba Yaga\". Tor.com. Retrieved 29 September 2023.\n[…]\nCooper, Brian (1997). \"Baba-Yaga, the Bony-Legged: A Short Note on the Witch and Her Name\". New Zealand Slavonic Journal: 82–88. JSTOR 23806796. Accessed 31 Aug. 2024.\n[…]\nBaba Yaga: The greatest 'wicked witch' of all?, BBC"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Baba_Yaga",
        "situacao": "ok",
        "texto": "No folclore eslavo Baba Yaga (em russo: Баба-яга; romaniz.: Baba-yaga; também chamada Baba Jaga em polonês, jězě em tcheco e eslovaco e Jaga Baba em esloveno) é um ser sobrenatural (ou um trio de irmãs com o mesmo nome) que tem a aparência de uma mulher deformada e/ou feroz e que voa pelos céus montada num almofariz, apagando os rastros que deixa com sua vassoura.\n[…]\nMora no interior da floresta numa casa apoiada sobre pés de galinha (ou apenas sobre um pé, em algumas versões), e cuja fechadura é uma boca cheia de dentes. A Baba Yaga pode ajudar ou dificultar aqueles que a encontram ou a procuram. Ela às vezes desempenha um papel maternal, e também tem associações com a vida selvagem da floresta.\n[…]\nNas narrativas em que Baba Yaga aparece, ela exibe uma variedade de atributos típicos: uma cabana giratória, com pernas de galinha; um almofariz, um pilão, e às vezes uma vassoura ou um esfregão. Baba Yaga frequentemente carrega o epíteto de \"perna óssea\" (em russo: Баба-Яга Костяная Нога; romaniz.: Baba Iaga Kostianaya Noga), e quando está dentro de sua moradia, ela pode ser encontrada estendida sobre o forno, alcançando de um canto a outro da cabana.\n[…]\nNo primeiro jogo da série Quest for Glory, Baba Yaga é uma das principais vilãs, e, tal como a personagem folclórica, habita na floresta, numa casa de madeira apoiada por um par de patas de galinha.\n[…]\nNo MMORPG RuneScape há uma velha chamada Baga Yaga que vive numa casa móvel com pés de galinha.\n[…]\nBlacktail - O jogo é fortemente influenciado pelo folclore eslavo, com a lenda de Baba Yaga como ponto central da narrativa.\n[…]\nEstudiosos identificaram uma variedade de seres no folclore e mitologia que compartilham semelhanças de extensão variável com Baba Yaga. Essas semelhanças podem ser devidas à relação direta ou por contato cultural entre os eslavos e outros povos circunvizinhos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Valhala",
      "descricao": "Salão de Odin, em Asgard, para onde vão os guerreiros mortos em combate na mitologia nórdica."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Segundo os poemas nórdicos, o Valhala, salão de Odin para os guerreiros mortos, tinha o telhado coberto de quê?",
    "resposta": "Escudos",
    "distratores": [
      "Ossos",
      "Peles de urso",
      "Escamas de dragão"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Valhalla"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Valhalla",
        "situacao": "ok",
        "texto": "In Norse mythology, Valhalla ( val-HAL-ə, US also  vahl-HAH-lə; Old Norse: Valhǫll [ˈwɑlhɒlː], lit. 'Hall of the Slain') is described as a majestic hall located in Asgard and presided over by the god Odin.\n[…]\nIn chapter 38, Gangleri says: \"You say all men who have fallen in battle from the beginning of the world are now with Odin in Valhalla. With what does he feed them?\n[…]\nHorses played a critical role in the burial and funeral processions of Viking burials. They were seen to be the dead's main transportation to Valhalla. In Egils saga Skallagrímssonar, for instance, Skallagrímr is buried with his horse, weapons, and smith’s tools, illustrating the belief in the horse’s importance for the deceased’s passage to Odin’s hall. It is also noted that Old Norse sources mention only horses, not ships, as a means of traveling to and from Valhalla.\n[…]\nDeath chants were poetic compositions made to appease Odin and to earn a dead loved one's place in Valhalla. These death chants recorded a loved one's deed and accounted their victories to prove their worthiness to the hall of heroes. The witnesses of these death chants were often daughters of the dying Vikings who acted at intermediaries by recording these poems in runes or orally.\n[…]\nThe video game Apex Legends features a character named Bloodhound, who often references Valhalla and the Allfather, a commonly used kenning for the Norse god Odin. Valhalla is also referenced in the manga 'Heart Gear' by Tsuyoshi Takaki as a battle ground where the 'combat' gears take turns in fighting each other to the death as their leader, Odin, observes. Another video game, Overwatch 2, features two in game cosmetic skins that were inspired by Valhalla's Valkyries."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Valhala",
        "situacao": "ok",
        "texto": "Valhala (/vælˈhælə/, do nórdico antigo Valhöll: \"Salão dos Mortos\", em alemão: Walhala) ou Palácio dos Einherjar (em português \"Palácio dos mortos heróicos\"), na mitologia nórdica e nas religiões pagãs nórdicas, como a popular Ásatrú, é um palácio com enorme salão com 540 quartos — situado em Asgard e dominado pelo deus Odin — no qual metade dos guerreiros mais nobres e destemidos mortos em batalh\n[…]\nAntes do salão ergue-se a árvore dourada Glasir, e o teto da sala está repleto com escudos de ouro. Várias criaturas vivem em torno do salão, como o veado Eikþyrnir e o bode Heidrun, ambos descritos como estando no topo de Valhala e consumindo a folhagem da árvore Læraðr.\n[…]\nValhala tem uma lança-eixos de vigas, um telhado de palha com escudos; malhas de armaduras estão espalhadas ao longo dos seus bancos; um lobo pendurado na frente de suas portas a oeste, e uma águia paira acima dele.\n[…]\nA narrativa afirma que o Æsir previa sua chegada e tinha preparado grandes ilusões para ele, de modo que quando Gangerli entra na fortaleza, ele vê um salão de uma altura tão grande que ele têm dificuldade de ver o seu teto, e percebe que este é feito de escudos de ouro, como se fossem telhas. Snorri, em seguida, cita uma estrofe pelo escaldo Tiodolfo de Hvinir (c. 900).\n[…]\nValhala é mencionada de forma evemerizada e como um elemento restante do paganismo nórdico em Heimskringla. No capítulo 8 da Saga dos Inglingos, o histórico  Odin é descrito como a ordenação de leis de sepultamento em seu país. Essas leis incluem que todos os mortos devem ser queimados em uma pira em um túmulo com suas posses, e suas cinzas devem ser levadas para o mar ou enterrados na terra.\n[…]\nO salão teve influência na cultura popular moderna, diretamente influenciado pelo conceito da mitologia nórdica ou simplesmente se referindo a um encontro dos mortos escolhidos, ou uma sala em homenagem a eles.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Epopeia de Gilgamesh",
      "descricao": "Poema épico da antiga Mesopotâmia sobre o rei Gilgamesh de Uruk."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Na Epopeia de Gilgamesh, o rei encontra uma planta que devolve a juventude. Que animal rouba essa planta dele?",
    "resposta": "Uma serpente",
    "fonte": [
      "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh",
        "situacao": "ok",
        "texto": "The Epic of Gilgamesh () is an epic from ancient Mesopotamia that is the world's oldest surviving example of narrative literature. The literary history of Gilgamesh begins with five Sumerian poems about Gilgamesh, king of Uruk, some of which may date to the Third Dynasty of Ur (c. 2100 BCE). These independent stories were later used as source material for a combined epic in Akkadian.\n[…]\nWhen Gilgamesh stops to bathe, it is stolen by a serpent, who sheds its skin as it departs. Gilgamesh weeps at the futility of his efforts, because he has now lost all chance of immortality. He returns to Uruk, where the sight of its massive walls prompts him to praise this enduring work to Urshanabi.\n[…]\nGeorge, Andrew R. (2003). The Babylonian Gilgamesh Epic: Introduction, Critical Edition and Cuneiform Texts, 2 Vols. Oxford: Oxford University Press. (Translation for scholars)\n[…]\nJackson, Danny (1997). The Epic of Gilgamesh. Wauconda, IL: Bolchazy-Carducci Publishers. ISBN 978-0-86516-352-2.\n[…]\nGeorge, Andrew R. (1999). The Epic of Gilgamesh: The Babylonian Epic Poem and Other Texts in Akkadian and Sumerian. London: Penguin Press. (Translation for general readership)\n[…]\nGeorge, Andrew R. (2003). The Babylonian Gilgamesh Epic: Introduction, Critical Edition and Cuneiform Texts, 2 Vols. Oxford: Oxford University Press. (Translation for scholars)\n[…]\nDamrosch, David (2007). The Buried Book: The Loss and Rediscovery of the Great Epic of Gilgamesh. Henry Holt and Co. ISBN 978-0-8050-8029-2.\n[…]\nKluger, Rivkah (1991). The Gilgamesh Epic: A Psychological Study of a Modern Ancient Hero. Daimon. ISBN 978-3-85630-523-9.\n[…]\nGilgamesh and Aga\n[…]\nThe death of Gilgamesh\n[…]\nAn Old Babylonian Version of the Gilgamesh Epic by Anonymous at Project Gutenberg, edited by Morris Jastrow, translated by Albert T. Clay\n[…]\nThe Epic of Gilgamesh, Complete Academic Translation by R. Campbell Thompson\n[…]\nThe Epic of Gilgamesh by Kovacs, M.G."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Epopeia_de_Gilgam%C3%A9s",
        "situacao": "ok",
        "texto": "Epopeia de Gilgamés é uma poesia épica da antiga Mesopotâmia. A história literária de Gilgamés começa com cinco poemas sumérios sobre ele (anteriormente lido como sumério \"Bilgames\"), rei de Uruque, alguns dos quais podem datar da Terceira Dinastia de Ur (c. 2100 a.C.). Essas histórias independentes foram posteriormente usadas como material de origem para uma epopeia combinada escrita em língua ac\n[…]\nGilgamés recebeu conhecimento sobre como adorar os deuses, por que a morte foi ordenada para os seres humanos, o que faz um bom rei e como viver uma boa vida. A história de Utnapistim, o herói do mito do dilúvio, também pode ser encontrada na epopeia babilônica de Atra-Hasis. A versão padrão também é conhecida como iškar Gilgāmeš, \"Série de Gilgamés\".\n[…]\nEm ambas as histórias, o homem aceita comida da mulher, cobre sua nudez e precisa deixar seu antigo lar, sem poder retornar. A presença de uma serpente que rouba uma planta da imortalidade do herói mais tarde na epopeia é outro ponto de semelhança.\n[…]\nGilgamés é mencionado em uma versão do Livro dos Gigantes, que está relacionada ao Livro de Enoque. A versão do Livro dos Gigantes encontrada em Qumran menciona o herói sumério Gilgamés e o monstro Humbaba com os Vigilantes e gigantes.\n[…]\nNo Romance de Alexandre e em muitas lendas subsequentes, Alexandre, o Grande, está em busca da Fonte da Vida para se tornar imortal. Isso foi inspirado nos mitos da busca de Gilgamés pela juventude eterna diante de sua mortalidade; apesar da influência, existem duas diferenças principais. A primeira é que Gilgamés busca a planta da juventude, enquanto Alexandre busca a água da vida.\n[…]\nA segunda é que o motivo da serpente que troca de pele na lenda de Gilgamés é substituído na lenda de Alexandre por um peixe que retorna à vida ao ser lavado na fonte. As razões para essas diferenças devem-se à força cristianizadora envolvida na adaptação das lendas de Gilgamés.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Caduceu",
      "descricao": "Bastão alado com duas serpentes enroladas, símbolo do deus grego Hermes."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "O caduceu, bastão com asas carregado pelo deus Hermes, tem duas criaturas enroladas em volta. Que animais são esses?",
    "resposta": "Serpentes",
    "fonte": [
      "https://en.wikipedia.org/wiki/Caduceus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Caduceus",
        "situacao": "ok",
        "texto": "The caduceus (☤; ; from Latin  cādūceus, from Ancient Greek  κηρύκειον (kērúkeion) 'herald's wand, staff') is the herald's staff carried by Hermes in Greek mythology and consequently by Hermes Trismegistus in Greco-Egyptian mythology. The same staff was borne by other heralds like Iris, the messenger of Hera. The short staff is entwined by two serpents, sometimes surmounted by wings. In Roman icon\n[…]\nThe Homeric Hymn to Hermes relates how his half brother Apollo was enchanted by Hermes's music from his lyre fashioned from a tortoise shell, which Hermes kindly gave to him. Apollo in return gave Hermes the caduceus as a gesture of friendship. The association with the serpent thus connects Hermes to Apollo, as later the serpent was associated with Asclepius, the \"son of Apollo\".\n[…]\nThe association of Apollo with the serpent is a continuation of the older Indo-European dragon-slayer motif. Wilhelm Heinrich Roscher (1913) pointed out that the serpent as an attribute of both Hermes and Asclepius is a variant of the \"pre-historic semi-chthonic serpent hero known at Delphi as Python\", who in classical mythology is slain by Apollo.\n[…]\nAnother myth suggests that Hermes (or Mercury) saw two serpents entwined in mortal combat. Separating them with his wand he brought about peace between them, and as a result the wand with two serpents came to be seen as a sign of peace.\n[…]\nFor use in documents prepared on computer, the symbol has code point in Unicode, at U+2624 ☤ CADUCEUS. There is a similar glyph encoded at U+269A ⚚ STAFF OF HERMES, an alchemical symbol at U+1F750 🝐 ALCHEMICAL SYMBOL FOR CADUCEUS, and an astrological one at U+2BDA ⯚ HYGIEA. [For information on how to enter the symbol, see Unicode input (or copy/paste it directly).] These symbols are not provided in all fonts, especially older ones.\n[…]\nIris and Infant Hermes with Caduceus\n[…]\nFenkl, Heinz Insu, Caduceus"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Caduceu",
        "situacao": "ok",
        "texto": "O caduceu ☤ ou emblema de Hermes (Mercúrio) é um bastão em torno do qual se entrelaçam duas serpentes e cuja parte superior é adornada com asas. É um antigo símbolo, cuja imagem pode ser vista na taça do rei Gudea de Lagash, 2.600 anos a.C., e sobre as tábuas de pedra denominadas, na Índia, nagakals. Esotericamente, está associado ao equilíbrio moral, ao caminho de iniciação e ao caminho de ascens\n[…]\nA serpente da direita é chamada Od, que representa a vida livremente dirigida; a da esquerda Ob, vida fatal e o globo dourado no cimo Aur, que representa a luz equilibrada. Estas duas serpentes opostas figuram forças contrárias que podem se associar mas não se confundir. É frequentemente confundido com o símbolo da contabilidade que possui chapéu significando pensamento elevado, no lugar da bola, o bordão de Esculápio ou bastão de Asclépio.\n[…]\nO caduceu, do Grego κηρύκειον kērukeion \"bastão dos arautos\".\n[…]\nAs duas serpentes entrelaçadas do caduceu também representam o número oito (8) e são o símbolo do equilíbrio entre as forças antagônicas, representando também o eterno movimento cósmico, base de regeneração e de infinito. É a verticalidade formal do símbolo do Infinito (∞).\n[…]\nO caduceu é também apresentado como símbolo do comércio. De fato, pela extensão com a associação de Mércurio/Hermes, o caduceu é reconhecido como o mensageiro, símbolo do comércio e da negociação. É utilizado como emblema em diversas instituições dedicadas ao estudo e ensino das ciências contábeis.\n[…]\nMas, segundo Fulcanelli, o caduceu simboliza o mercúrio filosófico. Ou seja, o resultado da absorção poderosa do enxofre metálico pelo mercúrio em estado líquido, que não pode ser desfeita uma vez juntos. A serpente simboliza o mercúrio a se apoderar do enxofre metálico, que por sua vez é o caduceu, o cajado de ouro de Abraão.\n[…]\nSerpente\n[…]\n«A antiguidade, inclusive a grega, atribuiu poder mágico ao caduceu.»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Freya",
      "descricao": "Deusa nórdica do amor, da beleza e da fertilidade."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Na mitologia nórdica, a deusa Freya, ligada ao amor e à fertilidade, andava numa carruagem puxada por quais animais?",
    "resposta": "Gatos",
    "distratores": [
      "Lobos",
      "Bodes",
      "Cavalos"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Freyja"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Freyja",
        "situacao": "ok",
        "texto": "In Norse mythology, Freyja (Old Norse '(the) Lady') is a goddess associated with love, beauty, fertility, war, gold, and seiðr (magic for seeing and influencing the future). Freyja is the owner of the necklace Brísingamen, rides a chariot pulled by two cats, is accompanied by the boar Hildisvíni, and possesses a cloak of falcon feathers to allow her to shift into falcon hamr. By her husband Óðr, s\n[…]\nAlong with her twin brother Freyr, her father Njörðr, and her mother (Njörðr's sister, unnamed in sources), she is a member of the Vanir. Stemming from Old Norse Freyja, modern forms of the name include Freya, Freyia, and Freja.\n[…]\nHowever, Freyja did not disappear. In Iceland, Freyja was called upon for assistance by way of Icelandic magical staves as late as the 18th century; and as late as the 19th century, Freyja is recorded as retaining elements of her role as a fertility goddess among rural Swedes.\n[…]\nMany Asatru practitioners today mostly honor Freyja as a goddess of fertility, abundance and beauty. A common rite for modern Freya worshippers is to bake foods that have some connection to love in one way or another, such as chocolate. Freyja is also called upon for protection, usually when it comes to a domestic violence situation.\n[…]\nThe pendant may represent Freyja herself.\n[…]\nGustav Neckel, writing in 1920, connects Freyja to the Phrygian goddess Cybele. According to Neckel, both goddesses can be interpreted as \"fertility goddesses\" and other potential resemblances have been noted. Some scholars have suggested that the image of Cybele subsequently influenced the iconography of Freyja, the lions drawing the former's chariot becoming large cats.\n[…]\nThe 19th century German composer Richard Wagner's Der Ring des Nibelungen opera cycle features Freia, the goddess Freyja combined with the apple-bearing goddess Iðunn.\n[…]\nMedia related to Freyja at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Freia",
        "situacao": "ok",
        "texto": "Freia (em norueguês:  Frøya, em nórdico antigo: Freyja) é uma das deusas mais antigas da mitologia nórdica. Foram preservados numerosos relatos descrevendo e envolvendo-a, visto que as fontes mais bem documentadas desta tradição religiosa foram transmitidas ou alteradas por historiadores cristãos medievais e, em muitos casos, escritas até um século e meio mais tarde. Ela é associada ao amor, ferti\n[…]\nFrey, Freya, Freia derivam de palavras germânicas cujo significado são \"senhor\" e \"senhora\" (em nórdico antigo: Freyja, também grafado Freya, Freja, Freyia, e Frøya) é a deusa mãe da dinastia de Vanir na mitologia nórdica.\n[…]\nFilha de Njord, o deus do mar e um mítico rei da Suécia, e Skadi, a deusa do gelo, também irmã de Frey, e é associada ao amor, beleza, sexualidade, sensualidade, fertilidade, atração, luxúria, ouro, guerra, morte, música e às flores.\n[…]\nVöluspá é o primeiro e um dos principais poemas da Edda poética. No poema Völva nos dá muita informação sobre os eventos futuros e passados ao deus Odin, Freia é citada brevemente no poema, sendo mencionada quando os deuses se reúnem para romper o acordo com o construtor das muralhas de Asgard. A deusa é citada ainda nesta composição como a noiva de Óðr.\n[…]\nNa tradição germânica, Freia e dois outros Vanirs (deuses da natureza) se mudaram para Asgard para viver com os Aesir (deuses de guerra) como símbolo da amizade criada depois de uma guerra.\n[…]\nNo próprio nome de Heimdall, a palavra dallr (luz) e é o masculino de döll e \"heim\" terra. Esta é talvez uma das histórias que se perderam  na busca de Freia por seu esposo.\n[…]\nFreia frequentemente conduzia um carro de guerra, puxado por um par de Linces.\n[…]\nOs felinos são sagrados para Freia, assim como os corvos e os lobos para Odin.\n[…]\nFreia compartilhava os mortos de guerra com Odin. Metade dos homens e todas as mulheres mortas em batalha iriam para seu salão, Fólkvangr.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Idun",
      "descricao": "Deusa nórdica que guarda os frutos que mantêm os deuses jovens."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Na mitologia nórdica, os deuses de Asgard se mantinham sempre jovens comendo que fruta, guardada pela deusa Idun?",
    "resposta": "Maçãs",
    "fonte": [
      "https://en.wikipedia.org/wiki/I%C3%B0unn"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/I%C3%B0unn",
        "situacao": "ok",
        "texto": "In Norse mythology, Iðunn is a goddess associated with apples and youth. Iðunn is attested in the Poetic Edda, compiled in the 13th century from earlier traditional sources, and the Prose Edda, written in the 13th century by Snorri Sturluson. In both sources, she is described as the wife of the skaldic god Bragi, and in the Prose Edda, also as a keeper of apples and granter of eternal youthfulness\n[…]\nThe name Iðunn has been variously explained as meaning 'ever young', 'rejuvenator', or 'the rejuvenating one'. As the modern English alphabet lacks the eth (ð) character, Iðunn is sometimes anglicized as Idhunn, Idunn, Idun, or Ithun. An -a suffix is sometimes appended to denote femininity, resulting in forms such as Iduna and Idunna.\n[…]\nThe Æsir begin to grow grey and old at the disappearance of Idunn. The Æsir assemble at a thing where they ask one another when Iðunn had been seen last. The Æsir realize that the last time that Iðunn was seen was when she was going outside of Asgard with Loki, and so they have Loki arrested and brought to the thing. Loki is threatened with death and torture. Terrified, Loki says that if the goddess Freyja will lend him her \"falcon shape\" he will search for Iðunn in the land of Jötunheimr.\n[…]\nEhrenberg, Idun and the Apples (1890) by J. Doyle Penrose, Brita as Iduna (1901) by Carl Larsson, Loki och Idun (1911) by John Bauer, Idun (watercolor, 1905) by B. E. Ward, and Idun (1901) by E. Doepler.\n[…]\nThe asteroid 176 Iduna was named after the men's association Sällskapet Idun. Idunn Mons, a mons of the planet Venus, is named after Iðunn.\n[…]\nIn 2024, the Swedish Maritime Administration renamed a recently acquired second-hand icebreaker Idun to reflect how the ship, decades younger than the other Swedish icebreakers, would \"rejuvenate\" the aging state-owned fleet."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Iduna",
        "situacao": "ok",
        "texto": "Iduna (também conhecida como Idun ou Iðunn) era, na mitologia nórdica, esposa de Bragi e deusa da poesia. De acordo com o Edda em prosa ela era a guardiã do pomar sagrado cuja maçã permite aos Æsir restaurarem a sua juventude pela eternidade. Ela é responsável pela imortalidade dos deuses, fornecendo uma maçã por dia, vinda de seu cofre de madeira de freixo, que mantém a juventude e força.\n[…]\nNa \"Altercação de Loki\", das baladas édicas, ela é acusada de adultério por Loki: \"Iduna aperta em seus braços o assassino de seu irmão\". Em outras fontes da Mitologia Nórdica temos o episódio no qual o gigante Tiazi por ela se apaixona, sequestrando-a metamorfoseado em uma águia.\n[…]\nAo que parece, Iduna não tinha culto regular entre os nórdicos, era deusa mais figurativa.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Yggdrasil",
      "descricao": "Árvore cósmica da mitologia nórdica que sustenta e liga os mundos."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Segundo os textos nórdicos medievais, que espécie de árvore é Yggdrasil, a árvore cósmica da mitologia nórdica?",
    "resposta": "Freixo",
    "distratores": [
      "Carvalho",
      "Pinheiro",
      "Bétula"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Yggdrasil"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Yggdrasil",
        "situacao": "ok",
        "texto": "Yggdrasil (from Old Norse  Yggdrasill) is an immense and central sacred tree in Norse cosmology. Around it exists all else, including the Nine Worlds.\n[…]\nDavidson comments that \"the position of the tree in the centre as a source of luck and protection for gods and men is confirmed\" by these rituals to Warden Trees. Davidson notes that the gods are described as meeting beneath Yggdrasil to hold their things, and the related Irminsul, which may have been a pillar, was also symbolic of the center of the world.\n[…]\nKen Dowden comments that behind Irminsul, Thor's Oak in Geismar, and the sacred tree at Uppsala \"looms a mythic prototype, an Yggdrasil, the world-ash of the Norsemen\".\n[…]\nModern works of art depicting Yggdrasil include Die Nornen (painting, 1888) by K. Ehrenberg; Yggdrasil (fresco, 1933) by Axel Revold, located in the University of Oslo library auditorium in Oslo, Norway; Hjortene beiter i løvet på Yggdrasil asken (wood relief carving, 1938) on the Oslo City Hall by Dagfin Werenskiold; and the bronze relief on the doors of the Swedish Museum of National Antiquities (around 1950) by B. Marklund in Stockholm, Sweden.\n[…]\nPoems mentioning Yggdrasil include Vårdträdet by Viktor Rydberg and Yggdrasill by J. Linke.\n[…]\nIn Overlord, a Japanese light novel series written by Kugane Maruyama, Yggdrasil is the name of a popular DMMORPG, where the protagonist got trapped after its shutdown.\n[…]\nYggdrasil is a common motif in Marvel Cinematic Universe media, appearing in Thor, Captain America: The First Avenger, Thor: The Dark World, Loki, and Avengers: Doomsday.\n[…]\nYggdrasil Linux/GNU/X"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Yggdrasil",
        "situacao": "ok",
        "texto": "Na mitologia nórdica, Yggdrasil (ou no nórdico antigo: Yggdrasill) é uma árvore colossal (algumas fontes dizem que é um freixo, outras que é um teixo), que é o eixo do mundo.\n[…]\nLocalizada no centro do Universo, ligava os nove mundos da cosmologia nórdica, cujas raízes mais profundas estão situadas em Niflheim, um mundo sombrio onde ficavam várias árvores assombradas e solo onde não se produzia nada, escuridão profunda com gigantes e terríveis monstros.\n[…]\nConta-se que nas frutas de Yggdrasil estão as respostas das grandes perguntas da humanidade. Por esse motivo ela sempre é guardada por uma centúria de valquírias, denominadas protetoras, e somente os deuses podem visitá-la. Nas lendas nórdicas, dizia-se que as folhas de Yggdrasil podiam trazer pessoas de volta à vida e um de seus frutos apenas curaria qualquer doença e até mesmo salvaria a pessoa à beira da morte.\n[…]\nOs nove mundos contidos na Yggdrasil são:\n[…]\nSe fôssemos levar em conta os mundos nórdicos apresentados, o valor seria de 10. Os mundos Helheim, Svartalfheim, Jotunheim, Niflheim e Nidavellir possuem variações.\n[…]\nFaur, Mirella. Mistérios Nórdicos - Deuses, Runas, Magias, Rituais. São Paulo: Editora Pensamento, 2007.\n[…]\nCosmologia nórdica",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Jörmungandr",
      "descricao": "Serpente gigante da mitologia nórdica, filha de Loki, que envolve o mundo dos humanos."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "A serpente de Midgard, da mitologia nórdica, é tão grande que dá a volta no mundo inteiro e consegue morder o quê?",
    "resposta": "A própria cauda",
    "fonte": [
      "https://en.wikipedia.org/wiki/J%C3%B6rmungandr"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/J%C3%B6rmungandr",
        "situacao": "ok",
        "texto": "In Norse mythology, Jörmungandr (Old Norse: Jǫrmungandr, see Etymology), also known as the Midgard Serpent or World Serpent (Old Norse: Miðgarðsormr, \"worm of Midgard\"), is an unfathomably large and monstrous sea serpent (or \"worm\", see Germanic dragon) who dwells in the world sea, encircling the Earth (Midgard) and biting his own tail, an example of an ouroboros. As a result of him surrounding Mi\n[…]\nJörmungandr is said to be the middle child of the god Loki and the jötunn Angrboða. According to the Prose Edda, Odin took Loki's three children by Angrboða – the wolf Fenrir, underworld ruler Hel, and the serpent Jörmungandr – and removed them from Asgard (the world of the Æsir). The serpent Jörmungandr was tossed into the great ocean that encircles Midgard. There the serpent grew so large that he was able to surround the Earth and grasp his own tail.\n[…]\nHere is where the last meeting between the serpent and Thor is predicted to occur. He will eventually kill Jörmungandr but will fall dead after walking nine paces, having been poisoned by the serpent's deadly venom. Thor's final battle with Jörmungandr has been identified, with other scenes of Ragnarök, on the Gosforth Cross.\n[…]\nThor's fishing for Jörmungandr has been taken as one of the similarities between him and the Hindu god Indra, who in Vedic mythology slays the dragon Vritra, and has also been related to a Balto-Slavic motif of the storm god combatting a serpent. An alternative analysis of the episode by Preben Meulengracht Sørensen is that it was a youthful indiscretion on the part of Thor, retold to emphasize the order and balance of the cosmos, in which Jörmungandr played a vital role.\n[…]\nAsteroid 471926 Jörmungandr was named after the mythological sea serpent. The official naming citation was published by the Minor Planet Center on 25 September 2018 (M.P.C. 111804)."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/J%C7%ABrmungandr",
        "situacao": "ok",
        "texto": "Na mitologia nórdica, Jǫrmungandr é o segundo filho do deus Loki com a gigante Angrboða. Tem como irmãos o lobo Fenrir e a deusa Hela. Jǫrmungandr tem o aspecto de uma gigantesca serpente.\n[…]\nDe acordo com a Edda em Prosa, Odin raptou os três filhos de Loki, sendo Jǫrmungandr jogado no grande oceano que circula Miðgarðr, tendo aí vivido desde então. A serpente cresceu tanto que seria capaz de cobrir a Terra e morder sua própria cauda. Como resultado disso, ganhou o nome alternativo de Serpente de Miðgarðr (Midgårdsormen) ou Serpente do Mundo. O arqui-inimigo de Jǫrmungandr é o deus Tor, que durante o Ragnarǫk, a matará e morrerá no processo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Penélope",
      "descricao": "Esposa de Ulisses na Odisseia, símbolo de fidelidade, que esperou por ele em Ítaca."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Na Odisseia, para adiar a escolha de um novo marido enquanto esperava Ulisses, o que Penélope desfazia toda noite?",
    "resposta": "A mortalha que tecia de dia",
    "fonte": [
      "https://en.wikipedia.org/wiki/Penelope"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Penelope",
        "situacao": "ok",
        "texto": "Penelope ( pə-NEL-ə-pee; Ancient Greek: Πηνελόπη, IPA: [pɛː.ne.ló.pɛː]) is the legendary wife of Odysseus and queen of Ithaca in Homer's Odyssey. She is the daughter of Spartan king Icarius, and the mother of Telemachus. Different sources describe her as the mother of figures such as Poliporthes, Arcesilaus, Italus, Mamilia, and the god Pan.\n[…]\nAs so often, it is Athena who takes the initiative in giving the story a new direction ... Usually the motives of mortal and god coincide, here they do not: Athena wants Penelope to fan the Suitors' desire for her and (thereby) make her more esteemed by her husband and son; Penelope has no real motive ... she simply feels an unprecedented impulse to meet the men she so loathes ... adding that she might take this opportunity to talk to Telemachus (which she will indeed do).\n[…]\nKatz, Marylin Arthur (1991), Penelope's Renown: Meaning and Indeterminacy in the Odyssey. Princeton: Princeton University Press.\n[…]\nMarquardt, Patricia A. (1985), ‘Penelope “ΠΟΛΥΤΡΟΠΟΣ”’, American Journal of Philology 106, 32–48.\n[…]\nNelson, Thomas J. (2021), ‘Intertextual Agōnes in Archaic Greek Epic: Penelope vs. the Catalogue of Women’, Yearbook of Ancient Greek Epic 5, 25–57.\n[…]\nReece, Steve, \"Penelope's ‘Early Recognition’ of Odysseus from a Neoanalytic and Oral Perspective,\" College Literature 38.2 (2011) 101-117. Penelopes_Early_Recognition_of_Odysseus\n[…]\nRoisman, Hanna M. (1987), ‘Penelope's indignation’, Transactions of the American Philological Association 117, 59–68.\n[…]\nZerba, Michelle (2009), ‘What Penelope knew: doubt and scepticism in the Odyssey’, Classical Quarterly 59, 295–316.\n[…]\nPenelope Unravelling Her Web – a painting of Penelope by Joseph Wright of Derby (from the Getty Museum)\n[…]\nPenelope and the Suitors, a painting by John William Waterhouse; explore other paintings depicting Penelope"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pen%C3%A9lope",
        "situacao": "ok",
        "texto": "Penélope (em grego antigo: Πηνελόπεια, Pēnelópeia ou Πηνελόπη, Pēnelópē), é uma personagem da Odisseia de Homero. Ela era a rainha de Ítaca e filha do rei espartano Icário e de Asterodia. A Penélope mitológica é conhecida por sua fidelidade ao marido Ulisses, apesar da atenção de mais de cem pretendentes durante sua ausência. Em outras fontes, Penélope também é designada como Arnacia ou Arnaea.\n[…]\nPor vinte anos, Penélope esperou a volta de seu marido Ulisses, da Guerra de Troia. A longa viagem de retorno de Ulisses é o tema da Odisseia, de Homero.\n[…]\nIcário, seu pai, era um corredor campeão e não iria permitir que ninguém se casasse com sua filha, a menos que pudesse vencê-lo em uma corrida. Ulisses o fez e casou-se com Penélope. Após o casamento, Icário tentou convencer Ulisses a permanecer em Esparta, porém este foi embora com Penélope. Icário seguiu-os, implorando a sua filha para ficar. Ulisses disse que ela devia escolher se desejava ficar com o pai ou com o marido. Penélope não respondeu, mas modestamente cobriu o rosto com um véu.\n[…]\nApós a guerra, os anos passaram e não havia notícia de Ulisses, nem se estaria vivo ou morto. Assim, o pai de Penélope sugeriu que sua filha se casasse novamente. Penélope, fiel ao seu marido, recusou, dizendo que esperaria a sua volta.\n[…]\nDiante da insistência do pai e para não desagradá-lo, ela resolveu aceitar a corte dos pretendentes à sua mão, estabelecendo a condição de que o novo casamento somente aconteceria depois que terminasse de tecer um sudário para Laerte, pai de Ulisses. Com esse estratagema, ela esperava adiar o evento o máximo possível.\n[…]\nDurante o dia, aos olhos de todos, Penélope tecia, e à noite, secretamente, ela desmanchava todo o trabalho. E foi assim até uma de suas servas descobrir o ardil e contar toda a verdade.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Hórus",
      "descricao": "Deus egípcio do céu e da realeza, filho de Ísis e Osíris."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Que ave dava a cabeça ao deus egípcio Hórus, filho de Ísis e Osíris, nas pinturas e estátuas do Egito Antigo?",
    "resposta": "Falcão",
    "fonte": [
      "https://en.wikipedia.org/wiki/Horus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Horus",
        "situacao": "ok",
        "texto": "Horus (), also known as Heru, Har, Her, or Hor () in Ancient Egyptian, is one of the most significant ancient Egyptian deities. He is known as the Ancient Egyptian god of kingship, healing, protection, the sun, and the sky. He was worshipped from at least the late prehistoric Egypt until the Ptolemaic Kingdom and Roman Egypt. Different descriptions of Horus are recorded in history, and these are t\n[…]\n\"son of Isis\" and Harsiese \"Horus, Son of Isis\".\n[…]\nPlutarch also records a variant tradition that assigns different fathers to Nut's children: Osiris and Heru-ur are attributed to Nut and Ra, Isis to Nut and Thoth, while Nephthys and Set are said to be the children of Nut and Geb. Additionally, similar to other manifestations of Horus, Heru-ur is sometimes regarded as the child of Isis and Osiris, conceived by the pair while still within the womb of Nut.\n[…]\nHorus-wer is also sometimes referred to as the son of Osiris and Isis, and 'wer' is a common epithet for ancient Egyptian gods and does not imply a separation between older and younger deities into two different generations.\n[…]\nHis first known depiction dates to a stele from Mendes, erected during the reign of Sheshonq III (22nd Libyan Dynasty), commemorating a donation by the flutist Ânkhhorpakhered. Initially, Harpocrates originated as a duplicate of Khonsu-pa-khered, providing a child-god figure for the funerary gods Osiris and Isis. Unlike Horus, who was traditionally depicted as an adult, Khonsu, the lunar god, was inherently associated with youth.\n[…]\nThe merging of local Theban beliefs with the Osiris cult endowed Harpocrates with dual ancestry, as seen in inscriptions at Wadi Hammamat which name him 'Horus-the-child, son of Osiris and Isis, the Elder, the first-born of Amun.' The Osirian tradition solidified Harpocrates as the archetype of child-gods, firmly integrated into the Osirian family.\n[…]\nWay of Horus"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/H%C3%B3rus",
        "situacao": "ok",
        "texto": "Hórus ou Horo (ou Heru-sa-Aset, Her'ur, Hrw, Hr, Hor-Hekenu ou Ra-Hoor-Khuit) é, no panteão do Antigo Egito, o deus dos céus e dos vivos. É representado geralmente como filho de Ísis e Osíris, e desempenha um papel fundamental no mito de Osíris como seu herdeiro e como rival de Set, o assassino e irmão de Osíris. Em outras versões, Hathor é considerada mãe de Hórus, e às vezes sua esposa.\n[…]\nÉ retratado como um falcão ou como um homem com cabeça de falcão, cujos olhos representam o Sol e a Lua. Na mitologia egípicia, matou Set, tanto por vingança pela morte do pai, Osíris, como pela disputa do comando do Egito.\n[…]\nDe acordo com uma lenda difundida no Antigo Egito, Hórus foi concebido por Isis, quando Osíris, seu pai, já estava morto. A lenda sugere que a fecundação ocorreu quando Isis, na forma de um pássaro, pousou sobre a múmia do esposo, que estava deitado em um sofá.\n[…]\nque protegeu o seu irmão Osíris,\n[…]\nHórus foi o Deus solar e o redentor dos egípcios.\n[…]\nHórus é a segunda pessoa da divina família egípcia, composta por Osíris, o pai, Hórus, o filho e Ísis, a mãe.\n[…]\nNa religião cristã, a Virgem Maria concebeu Jesus através da ação do Espírito Santo, permanecendo, segundo a tradição católica, sempre virgem. Já Hórus, segundo a mitologia egípcia, era filho de Isis com Osíris, e teria nascido depois que sua mãe ter feito um pênis com a mão, por não ter encontrado essa parte do corpo do falecido companheiro.\n[…]\nDiferente de algumas alegações, o nascimento de Hórus não teria sido anunciado por nenhuma estrela no Oriente. Outro ponto de destaque é que Hórus nunca chegou a sair do Egito (até porque lá seria o seu país natal), diferente de Jesus, que segundo os evangelhos foi ao Egito e depois retornou a Israel. Outro mito é que Hórus foi batizado por Anúbis, contudo, não existem referências a tal personagem, bem como não havia o costume do batismo nas águas no Egito antigo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Caronte",
      "descricao": "Personagem da mitologia grega que levava as almas dos mortos através do rio do mundo inferior."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "O planeta anão Plutão tem uma grande lua chamada Caronte. Que função esse personagem tinha no mundo dos mortos da mitologia grega?",
    "resposta": "Barqueiro das almas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Charon_(mythology)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Charon_(mythology)",
        "situacao": "ok",
        "texto": "In Greek mythology, Charon or Kharon (  KAIR-on, -⁠ən; Ancient Greek: Χάρων Ancient Greek pronunciation: [kʰá.rɔːn]) is the ferryman of the Greek underworld. He transports the souls of those who have been given funeral rites across the river (often called Acheron or Styx) that borders the underworld.\n[…]\nIn the 14th century, Dante Alighieri described Charon in his Divine Comedy, drawing from Virgil's depiction in Aeneid 6. Charon is the first named mythological character Dante meets in the underworld, in Canto III of the Inferno. Dante depicts him as having eyes of fire.\n[…]\nThe French artist Gustave Dore depicted Charon in two of his illustrations for Dante's Divine Comedy. The Flemish painter Joachim Patinir depicted Charon in his Crossing the River Styx. And the Spanish painter Jose Benlliure y Gil portrayed Charon in his La Barca de Caronte.\n[…]\nMost accounts, including Pausanias (10.28) and later Dante's Inferno (3.78), associate Charon with the swamps of the river Acheron. Ancient Greek literary sources such as Pindar, Aeschylus, Euripides, Plato, and Callimachus also place Charon on the Acheron. Roman poets, including Propertius, Ovid, and Statius, name the river as the Styx, perhaps following the geography of Virgil's underworld in the Aeneid, where Charon is associated with both rivers.\n[…]\nCharon, the largest moon of the dwarf planet Pluto, is named after him.\n[…]\nThe hadrosaurid Charonosaurus is named in Charon's honor because it was found along the banks of the Amur River in the Far East.\n[…]\nCharun – in many respects, an Etruscan equivalent to Charon\n[…]\nSmith, William (1873). \"Charon\". Dictionary of Greek and Roman Biography and Mythology. London.\n[…]\nThe Warburg Institute Iconographic Database (images of Charon)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Caronte",
        "situacao": "ok",
        "texto": "Na mitologia grega, Caronte (em grego:  Χάρων, transl.: Chárōn) é o barqueiro de Hades, que carrega as almas dos recém-mortos sobre as águas do rio Estige e Aqueronte, que dividiam o mundo dos vivos do mundo dos mortos. Uma moeda para pagá-lo pelo trajeto, geralmente um óbolo ou dânaca, era por vezes colocado dentro ou sobre a boca dos cadáveres, de acordo com a tradição funerária da Grécia Antiga\n[…]\nCaronte era uma divindade, filho de Nix (a Noite) e Érebo (a Escuridão). Era também irmão de Hipnos (o Sono) e Tânatos (a Morte).\n[…]\nNo mitema da catábase, ou descida ao mundo dos mortos, alguns heróis — como Héracles, Orfeu, Enéas, Dioniso e Psiquê — conseguem viajar até o mundo inferior e retornar ainda vivos, trazidos pela barca de Caronte.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Ariadne",
      "descricao": "Princesa de Creta, filha do rei Minos, que ajudou Teseu a sair do labirinto."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Que princesa de Creta, filha do rei Minos, deu a Teseu o novelo de linha que o guiou para fora do labirinto?",
    "resposta": "Ariadne",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ariadne"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ariadne",
        "situacao": "ok",
        "texto": "In Greek mythology, Ariadne ( ; Ancient Greek: Ἀριάδνη, romanized: Ariádnē) was a Cretan princess as the daughter of King Minos. There are multiple variations of Ariadne's myth, but she is best known for helping Theseus escape from the Minotaur and being abandoned by him on the island of Naxos. There, Dionysus saw Ariadne sleeping, fell in love with her, and later married her.\n[…]\nAriadne's father was Minos, king of Crete and son of Zeus and Europa. Her mother was most commonly named as Pasiphaë, queen of Crete and the daughter of Helios and Perse. Some authors alternately named her mother as Crete, the daughter of Asterius and Europa.\n[…]\nMinos put Ariadne in charge of the labyrinth where sacrifices were made as part of reparations either to Poseidon or Athena, depending on the version of the myth; later, she helped Theseus conquer the Minotaur and save the children from sacrifice. In other narrations she was the bride of Dionysus; her status as mortal or divine varying in those accounts.\n[…]\nBecause ancient Greek myths were orally transmitted, like other myths, that of Ariadne has many variations. According to an Athenian version, Minos attacked Athens after his son, Androgeus, was killed there. The Athenians asked for terms and were required to sacrifice 7 young men and 7 maidens to the Minotaur every 1, 7 or 9 years (depending on the source). One year, the sacrificial party included Theseus, the son of King Aegeus, who volunteered in order to kill the Minotaur.\n[…]\nBacchus, Venus, and Ariadne (1576-77 oil painting)\n[…]\nAriadne musica (1702 collection of organ music)\n[…]\nAriadne (2021 novel by Jennifer Saint)\n[…]\nBarthes, Roland, \"Camera Lucida\". Barthes quotes Nietzsche, \"A labyrinthine man never seeks the truth, but only his Ariadne,\" using Ariadne in reference to his mother, who had recently died.\n[…]\nThe Warburg Institute Iconographic Database (images of Ariadne)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ariadne",
        "situacao": "ok",
        "texto": "Ariadne (em grego \"Ἀριάδνη\"), na mitologia grega, é a princesa de Creta, filha do rei Minos e da rainha Pasífae. Conhecida por ter se apaixonado pelo herói Teseu e ser esposa do deus Dioniso. Ariadne é descrita como \"a loira Ariadne\" por Hesíodo na Teogonia.\n[…]\nAriadne, a filha do rei Minos, lhe disse que o ajudaria se este a levasse a Atenas para que ela se casasse com ele. Teseu reconheceu aí a única chance de vitória e aceitou. Ariadne, então, deu-lhe uma espada e um fio de lã (Fio de Ariadne), para que ele pudesse achar o caminho de volta, e deste fio ficaria segurando uma das pontas. Teseu saiu vitorioso e partiu de volta à sua terra com Ariadne, embora o amor dele por ela não fosse o mesmo que o dela por ele.\n[…]\nTeseu parte sem Ariadne, e Dioniso a leva para a montanha chamada de Drius. Depois disso, os dois desaparecem, e Ariadne nunca mais foi vista.\n[…]\nAriadne se apaixonou por ele à primeira vista, e o ajudou dando-lhe uma espada e um novelo de lã vermelha que ela estava fiando, para que ele pudesse achar seu caminho de volta do labirinto do minotauro.\n[…]\nAriadne fugiu com Teseu após ele ter atingido seu objetivo, mas de acordo com Homero \"ele não tinha alegria nela\". Homero não se extende sobre a natureza da acusação de Dioniso, mas o Dicionário Classificatório de Oxford teoriza que ela já havia se casado com Dioniso quando Teseu fugiu com ela.\n[…]\nKarl Kerenyi (e Robert Graves) teorizam que Ariadne (a quem eles derivam de uma forma greco-cretense para arihagne, \"totalmente pura\" ) era uma deusa da fertilidade de Creta, \"a primeira personagem divina da mitologia grega a ser imediatamente reconhecida em Creta\",) logo que a arqueologia começou.\n[…]\nFio de Ariadne (lógica)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Polifemo",
      "descricao": "Ciclope da Odisseia, filho de Poseidon, cegado por Ulisses."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Na Odisseia, Ulisses engana o ciclope Polifemo dizendo um nome falso, para que os outros ciclopes não o socorram. Que nome era esse?",
    "resposta": "Ninguém",
    "fonte": [
      "https://en.wikipedia.org/wiki/Polyphemus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Polyphemus",
        "situacao": "ok",
        "texto": "Polyphemus ( ; Ancient Greek: Πολύφημος, romanized: Polúphēmos, Epic Greek: [polypʰɛːmos]; Latin: Polyphēmus [pɔlʏˈpʰeːmʊs]) is the one-eyed giant son of Poseidon and Thoosa in Greek mythology, one of the Cyclopes described in Homer's Odyssey. His name can mean either \"abounding in songs and legends\", \"many-voiced\", or \"very famous\".\n[…]\nThere have also been two Spanish musical items that reference Polyphemus's name. Reginald Smith Brindle's four fragments for guitar, El Polifemo de Oro (1956), takes its title from Federico García Lorca's poem, \"The riddle of the guitar\". That speaks of six dancing maidens (the guitar strings) entranced by 'a golden Polyphemus' (the one-eyed sound-hole). The Spanish composer Andres Valero Castells takes the inspiration for his Polifemo i Galatea from Gongora's work.\n[…]\nA species of burrowing tortoise, Gopherus polyphemus, is named after Polyphemus because of their both using subterranean retreats.\n[…]\nPolyphemus and Galatea depicted in statues with a golden harpsichord by Michele Todini, Rome, 1675 at The Metropolitan Museum of Art\n[…]\nPolyphemus standing at the top of a cliff, Jean-Léon Gérôme, 1902, at Wikipaintings\n[…]\n\"Odysseus Deriding Polyphemus\", J.M.W. Turner, 1829, at Wikipaintings\n[…]\nGalatea Acis e Polifemo, Pietro Dandini, c. 1630, at Art Value Archived 2 February 2014 at the Wayback Machine\n[…]\nPolyphemus with a massive club, Corneille Van Clève, 1681, at Web Gallery of Art\n[…]\nPolyphemus meditates, at French Government culture site\n[…]\nstatue of Polyphemus, Auguste Rodin, 1888, at French Government culture site\n[…]\nA wrathful Polyphemus, Annibale Carracci, at Web Gallery of Art\n[…]\nA wrathful Polyphemus, Lucas Auger, at French Government culture site\n[…]\nA wrathful Polyphemus, Carle van Loo, at First Art Gallery\n[…]\nA wrathful Polyphemus, Jean-Francois de Troy, 18th-century, at Tribes"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Polifemo",
        "situacao": "ok",
        "texto": "Polifemo, na mitologia grega, era um ciclope, filho de Poseídon (também são aceitas as grafias Poseidon, Posidão, Posêidon ou Possêidon), e da ninfa Teosa, vivia uma existência solitária em uma caverna próxima à Sicília (junto ao Etna), cuidando de ovelhas.\n[…]\nTexto baseado em Homero, Odisseia, Livro IX\n[…]\nOdisseu então arranja um plano para todos escaparem e oferece vinho a Polifemo, que pergunta quem lhe oferece a bebida, ao que Odisseu responde: \"foi Ninguém\".\n[…]\nQuando Polifemo adormece devido à bebida, Odisseu e seus homens afiam uma vara e a espetam no olho do cíclope, cegando-o.\n[…]\nNo dia seguinte, Polifemo abre a caverna para deixar sair as ovelhas, verificando com o tacto se são realmente ovelhas ou os prisioneiros. Porém estes escondem-se, segurando-se por baixo das ovelhas, conseguindo escapar. Polifemo, ao aperceber-se da fuga, grita que \"Ninguém tinha-o cegado\" aos seus companheiros ciclopes, mas estes ignoram-no.\n[…]\nJá em seu navio Odisseu zomba de Polifemo e revela seu nome (grita que não tinha sido \"Ninguém\" a feri-lo, mas sim Odisseu). Polifemo, furioso, atira grandes rochas ao acaso para o mar, que quase atingem a embarcação.\n[…]\nO ciclope pede a seu pai Posídon que se vingue de Odisseu, amaldiçoando os gregos. Posídon atende, atormentando Odisseu durante o resto da viagem.\n[…]\nSegundo uma rápida passagem da Eneida, de Virgílio, os troianos passaram pela ilha dos ciclopes aparentemente poucas semanas depois de Odisseu. E lá encontraram Aquemênides, um soldado de Odisseu que foi deixado para trás enquanto os outros fugiam. Ele narra aos troianos o que se passou entre seu rei e Polifemo, mas interrompe a narrativa quando vê que o próprio Polifemo, agora cego, vem caminhando na direção da praia para lavar seu olho ferido.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Quetzalcóatl",
      "descricao": "Divindade dos astecas e de outros povos da Mesoamérica, representada como uma serpente emplumada."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome do deus Quetzalcóatl, cultuado pelos astecas e por outros povos do México antigo, significa serpente coberta de quê?",
    "resposta": "Penas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Quetzalcoatl"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Quetzalcoatl",
        "situacao": "ok",
        "texto": "Quetzalcoatl () (Nahuatl: \"Feathered Serpent\") is a deity in Aztec culture and literature. Among the Aztecs, he was related to wind, the planet Venus, the Sun, merchants, arts, crafts,  knowledge, and learning. He was also the patron god of the Aztec priesthood. He is also a god of wisdom, learning and intelligence. He was one of several important gods in the Aztec pantheon, along with the gods Tl\n[…]\nRepresented as the plumed serpent, Quetzalcoatl was also seen as a manifestation of the wind, one of the most powerful forces of nature; a text in the Nahuatl language captures this relationship:\n[…]\nThere is no question that the legend of Quetzalcoatl played a significant role in the colonial period. However, this legend likely has a foundation in events that took place immediately prior to the arrival of the Spaniards.\n[…]\nA 2012 exhibition at the Los Angeles County Museum of Art and the Dallas Museum of Art, \"The Children of the Plumed Serpent: the Legacy of Quetzalcoatl in Ancient Mexico\", demonstrated the existence of a powerful confederacy of Eastern Nahuas, Mixtecs and Zapotecs, along with the peoples they dominated throughout southern Mexico between 1200 and 1600 (Pohl, Fields, and Lyall 2012, Harvey 2012, Pohl 2003).\n[…]\nThe Tlaxcalteca, along with other city-states across the Plain of Puebla, then supplied the auxiliary and logistical support for the conquests of Guatemala and West Mexico while Mixtec and Zapotec caciques (Colonial indigenous rulers) gained monopolies in the overland transport of Manila galleon trade through Mexico, and formed highly lucrative relationships with the Dominican order in the new Spanish imperial world economic system that explains so much of the enduring legacy of indigenous life-ways that characterize southern Mexico and explain the popularity of the Quetzalcoatl legends that continued through the colonial period to the present day."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Quetzalc%C3%B3atl",
        "situacao": "ok",
        "texto": "Quetzalcoatl é uma divindade na cultura e na literatura mesoamericanas cujo nome vem da Língua náuatle e significa \"serpente emplumada\" ou \"serpente de penas quetzal\". A adoração de uma Serpente Emplumada foi documentada pela primeira vez no Teotihuacan no primeiro século a.C. ou no primeiro século d.C.. Esse período situa-se no período do pré-clássico até o início do período clássico (400 a.C.\n[…]\nCholula é conhecido por ter permanecido como o mais importante centro de culto a Quetzalcoatl, a versão asteca/nahua da divindade serpente emplumada, no período pós-clássico.\n[…]\nPara os astecas, Quetzalcoatl era, como seu nome indica, uma serpente emplumada, um réptil voador (muito parecido com um dragão), que era um fazedor de fronteiras (e transgressor) entre a terra e o céu. Ele era uma divindade criadora, tendo contribuído essencialmente para a criação da Humanidade. Ele também tinha formas antropomórficas, por exemplo em seus aspectos como Ehecatl, o deus do vento.\n[…]\nSmith (2001) entre outros, consideram o \"mito de Quetzalcoatl-Cortés\" como um dos muitos mitos sobre a conquista espanhola que surgiram no período inicial pós-conquista. Deve-se notar que a ideia de que Cortés ou os Espanhóis como grupo ou indivíduos representava um deus específico (por exemplo, Quetzalcoatl) ou deuses em geral não está presente entre outros povos mesoamericanos (Zapotecas, Mixtecas, Maya, Quiche, Tzeltal, Tzotzil, etc.).\n[…]\nUma exposição de 2012 no Museu de Arte do Condado de Los Angeles e no Museu de Arte de Dallas, \"Os Filhos da Serpente Emplumada: o Legado de Quetzalcoatl no México Antigo\", demonstrou a existência de uma poderosa confederação de nahuas orientais, mixtecas e zapotecas juntamente com os povos que dominaram em todo o sul do México entre 1200-1600 (Pohl, Fields e Lyall 2012, Harvey 2012, Pohl 2003).\n[…]\nCinco Sóis, um dos Quetzalcōātl e a lenda de seus irmãos.\n[…]\nTopetzin Ce Acatl Quetzalcoatl",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Psiquê",
      "descricao": "Jovem mortal da mitologia greco-romana que se casou com Eros, o deus do amor."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Na mitologia, a bela jovem Psiquê se casa com Eros, o deus do amor. O que significa o nome dela em grego?",
    "resposta": "Alma",
    "fonte": [
      "https://en.wikipedia.org/wiki/Psyche_(mythology)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Psyche_(mythology)",
        "situacao": "ok",
        "texto": "In classical mythology, Psyche (; Greek: Ψυχή, romanized: Psykhḗ Ancient Greek: [psyːkʰɛ̌ː]; Greek pronunciation: [psiˈçi]) is the immortal wife of Cupid, Roman god of erotic love and desire. She is often represented as a beautiful woman with butterfly wings.\n[…]\nPsyche is featured in the creation myth found in the ancient Gnostic text known as On the Origin of the World. Here she appears as a lover of Eros who pours her blood upon him and also upon the Earth, which causes the first rose to grow from a thorn bush.\n[…]\nLove in Color by Bolu Babalola is a collection of works that features a story about Psyche and Eros.\n[…]\nPsyche, a semi-opera by Matthew Locke\n[…]\nCupid and Psyche\n[…]\nGagné, Laurie Brands (2000). \"Inanna, Demeter, and Psyche\". The Uses of Darkness: Women's Underworld Journeys, Ancient and Modern. University of Notre Dame Press. pp. 23–62. doi:10.2307/j.ctvpj7c20.5. ISBN 978-0-268-15958-0. JSTOR j.ctvpj7c20.5.\n[…]\nHaskins, Susan L. (2014). \"A Gendered Reading for the Character of Psyche in Apuleius' 'Metamorphoses'\". Mnemosyne. 67 (2): 247–269. doi:10.1163/1568525X-12341201. hdl:2263/39814. JSTOR 24521701.\n[…]\nKatz, Phyllis B. (1976). \"The Myth of Psyche: A Definition of the Nature of the Feminine?\". Arethusa. 9 (1): 111–118. JSTOR 26307539. ProQuest 1307034369.\n[…]\nMakowski, John F. (1985). \"Persephone, Psyche, and the Mother-Maiden Archetype\". The Classical Outlook. 62 (3): 73–78. JSTOR 43934919.\n[…]\nMcCreight, Thomas (2006). \"Psyche's Sisters as Medicae?: Allusions to Medicine in Cupid and Psyche\". In Keulen, W.H.; Nauta, R.R.; Panayotakis, S. (eds.). Lectiones Scrupulosae: Essays on the Text and Interpretation of Apuleius' Metamorphoses in Honour of Maaike Zimmerman. Vol. 6. Barkhuis. pp. 123–167. ISBN 978-90-77922-16-3. JSTOR j.ctt13wwxg3.14."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Psiqu%C3%AA",
        "situacao": "ok",
        "texto": "Psiquê ou Psique (em grego clássico: Ψυχή; romaniz.: Psychē, \"alma\", ou também em alguns contextos \"borboleta\"), na mitologia grega, é uma divindade que representa a personificação da alma. Seu mito sobrevive escrito na história latina O Asno de Ouro, de Apuleio. Porém sua figura já era representada séculos antes, muitas vezes com asas de borboleta e associada a Eros ou Cupido, pelo menos desde o \n[…]\nDepois que se tornou imortal, casou-se com Eros e teve com ele Hedonê. Sua história foi frequentemente vista como uma alegoria à alma humana. Embora Psiquê seja referida na história em latim de Apuleio pelo seu nome grego, seu nome romano, por tradução direta, é Anima. Isso pode indicar um tropo comum à literatura latina, de que o nome grego poderia evocar uma expectativa de transformação animal que corresponde ao outro significado de seu nome: borboleta.\n[…]\nPsiquê está indo de volta a Afrodite, quando pensa que sua beleza havia se desgastado depois de tantos trabalhos, não resiste e resolve abrir a caixa. Cai em sono profundo. Eros, já curado de sua queimadura vai ao socorro de sua amada, põe de volta o conteúdo na caixa, desperta Psiquê e ordena-lhe que entregue a caixa à mãe dele.\n[…]\nEnquanto Psiquê entrega a caixa a Afrodite, Eros vai a Zeus e suplica que advogue em sua causa. Zeus concede esse pedido e posteriormente consegue a concordância de Afrodite. Hermes leva Psiquê à Assembleia celestial e ela é tornada imortal. Finalmente, Psiquê ficou unida a Eros e mais tarde tiveram uma filha, cujo nome foi Hedonê a deusa do prazer.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Prometeu",
      "descricao": "Titã grego que roubou o fogo dos deuses para dá-lo aos humanos."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Em grego, qual é o significado do nome do titã Prometeu, que roubou o fogo dos deuses para os humanos?",
    "resposta": "O que pensa antes",
    "distratores": [
      "O que pensa depois",
      "Portador da luz",
      "Filho do fogo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Prometheus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Prometheus",
        "situacao": "ok",
        "texto": "In Greek mythology, Prometheus (; Ancient Greek: Προμηθεύς [promɛːtʰěu̯s]) is a Titan who is responsible for creating and aiding humanity in its earliest days. He defied the Olympian gods by stealing fire from them and giving it to humanity.\n[…]\nSome two dozen other Greek and Roman authors retold and further embellished the Prometheus myth from as early as the 5th century BC (Diodorus, Herodorus) into the 4th century AD. The most significant detail added to the myth found in, e.g., Sappho, Aesop and Ovid was the central role of Prometheus in the creation of the human race. According to these sources, Prometheus fashioned humans out of clay.\n[…]\nIn Georgian mythology, Amirani is a cultural hero who challenged the chief god and, like Prometheus, was chained on the Caucasian mountains where birds would eat his organs. This aspect of the myth had a significant influence on the Greek imagination. It is recognisable from a Greek gem roughly dated to the time of the Hesiod poems, which show Prometheus with hands bound behind his body and crouching before a bird with long wings.\n[…]\nIn the Book of Job, significant comparisons can be drawn between the sustained suffering of Job in comparison to that of eternal suffering and torment represented in the Prometheus myth. With Job, the suffering is at the acquiescence of heaven and at the will of the demonic, while in Prometheus the suffering is directly linked to Zeus as the ruler of Olympus.\n[…]\nGoethe's Prometheus is significant for the contrast it evokes with the biblical text of Corinthians rather than for its similarities.\n[…]\nSaturn's moon Prometheus is named after him.\n[…]\nPrometheism\n[…]\nThe Warburg Institute Iconographic Database (images of Prometheus)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Prometeu",
        "situacao": "ok",
        "texto": "Prometeu (em grego:  Προμηθεύς, transl.: Promēthéus, \"antevisão\"), na mitologia grega, é um titã (da segunda geração), filho de Jápeto (filho de Urano; um incesto entre Urano e Gaia) e irmão de Atlas, Epimeteu e Menoécio. Algumas fontes citam sua mãe como sendo Tétis, enquanto outras, como Pseudo-Apolodoro, apontam para Ásia oriental, também chamada de Clímene, filha de Oceano.\n[…]\nEste então roubou o fogo dos deuses e deu-o aos homens. Isto assegurou a superioridade dos homens sobre os outros animais. Todavia o fogo era exclusivo dos deuses. Como castigo a Prometeu, Zeus ordenou a Hefesto que o acorrentasse no cume do monte Cáucaso, onde todos os dias uma águia (ou abutre) dilacerava seu fígado que, todos os dias, regenerava-se. Esse castigo devia durar 30 000 anos.\n[…]\nZeus escolheu a segunda, abrindo assim um precedente para os futuros sacrifícios, e a partir de então os humanos teriam passado a ficar com a carne dos animais que sacrificavam, dedicando aos deuses apenas os ossos, envoltos numa camada de gordura. O truque enfureceu Zeus, que retirou o fogo dos humanos como forma de retribuição. Prometeu, por sua vez, roubou o fogo dentro de um gigantesco caule de funcho, devolvendo-o à humanidade.\n[…]\nNo diálogo Protágoras, o personagem-título afirma que os deuses criaram os humanos e todos os outros animais, porém coube a Prometeu e seu irmão, Epimeteu, dar a cada um deles as características definitivas. Como nenhuma característica física ainda existia quando chegou a vez dos humanos, Prometeu decidiu lhes dar o fogo e outras artes da civilização.\n[…]\nAo longo de séculos, vários autores retomaram a história de Prometeu e o colocaram como figura que representa a vontade humana por conhecimento (mesmo tendo que passar por cima dos deuses). A captura do fogo é visto como a busca do conhecimento pela ciência.\n[…]\nPrometeísmo",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Édipo",
      "descricao": "Rei mítico de Tebas que decifrou o enigma da Esfinge e, sem saber, matou o pai e se casou com a mãe."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Abandonado bebê com os tornozelos furados, o rei tebano Édipo ganhou um nome que, em grego, significa o quê?",
    "resposta": "Pés inchados",
    "distratores": [
      "Olhos cegos",
      "Filho da sorte",
      "Rei sem pátria"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Oedipus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Oedipus",
        "situacao": "ok",
        "texto": "Oedipus (UK: , also US:  ; Ancient Greek: Οἰδίπους Oidípous, lit. 'swollen foot') was a mythical Greek king of Thebes. A tragic hero in Greek mythology, Oedipus unwittingly fulfilled a prophecy that he would end up killing his father and marrying his mother, thereby bringing disaster to his city and family. The story of Oedipus is the subject of Sophocles's tragedy Oedipus Rex, which is followed i\n[…]\nOedipus was the son of Laius and Jocasta, king and queen of Thebes. Having been childless for some time, Laius consulted the Oracle of Apollo at Delphi. The Oracle prophesied that any son born to Laius would kill him. In an attempt to prevent this prophecy's fulfillment, when Jocasta indeed bore a son, Laius had his son's ankles pierced and tethered together so that he could not crawl; Jocasta then gave the boy to a servant to abandon (\"expose\") on the nearby mountain.\n[…]\nOedipus was a figure who was also used in the Latin literature of ancient Rome. Julius Caesar wrote a play on Oedipus, but it has not survived into modern times. Ovid included Oedipus in Metamorphoses, but only as the person who defeated the Sphinx. He makes no mention of Oedipus's troubled experiences with his father and mother. Seneca the Younger wrote his own play on the story of Oedipus in the first century AD. It differs in significant ways from the work of Sophocles.\n[…]\nDallas, Ian, Oedipus and Dionysus, Freiburg Press, Granada 1991. ISBN 1-874216-02-9.\n[…]\nLowell, Edmunds, Oedipus. (Gods and Heroes of the Ancient World), London/New York:  Routledge, 2006. ISBN 978-0-415-32935-4.\n[…]\nGaillard, T. Tony, Transgenerational Healing of Oedipus at Colonus, Genesis Editions (2020), Geneva, ISBN 9782940540358, Excerpt on academia.edu Archived 18 August 2022 at the Wayback Machine\n[…]\nLewis E 164 Oedipi et Sphingis dialogus (Dialogues between Oedipus and the Sphinx) at OPenn"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/%C3%89dipo",
        "situacao": "ok",
        "texto": "Édipo (em grego clássico: Οἰδίπους; romaniz.: Oidípous, \"pés inchados\") é um herói da mitologia grega que matou o pai, resolveu o enigma da esfinge que atacava a cidade grega de Tebas, e desposou a mãe. Em função deste incesto, foi ao mesmo tempo pai e irmão de Etéocles, Ismênia, Antígona e de Polinices.\n[…]\nÉdipo era descendente de Cadmo, fundador de Tebas. Seu bisavô foi Polidoro e seu avô Lábdaco, também reis da cidade.\n[…]\nAterrorizados e querendo frustrar a profecia, Laio e Jocasta resolveram encarregar um servo de deixar o filho na encosta da montanha de Cinterão, com os pés amarrados e trespaçados por uma correia na altura dos tornozelos, para ser devorado pelos lobos. O servo, no entanto, apiedou-se do bebê e o entregou a um pastor que levou a criança para a cidade de Corinto. Ao chegar, Édipo foi recebido e adotado pelo rei Pólibo, pois a rainha Mérope havia recentemente gerado um natimorto.\n[…]\nAnos depois, para acabar com uma praga em Tebas, Édipo procurou investigar quem havia matado Laio e acabou descobrindo, por intermédio do adivinho Tirésias, que ele mesmo era o responsável. Jocasta, ao perceber que havia se casado com o próprio filho, se enforcou. Em desespero, Édipo retirou dois alfinetes de vestido da mãe e com eles perfurou os próprios olhos, afirmando ter sido cego por não reconhecer o verdadeiro presságio anunciado pelo oráculo.\n[…]\nEsta passagem do mito é o mais conhecido, mas a vida de Édipo segue em frente, com ele tornando-se um mendigo e esmolando por Tebas, guiado por sua filha Antígona. Mais tarde o cego assiste os filhos Etéocles e Polinices brigarem pelo trono das duas cidades, Tebas e Corinto.\n[…]\nComplexo de Édipo\n[…]\nKury, Mario da Gama (1999). «Édipo». Dicionário da Mitologia Grega e Romana. São Paulo: Zahar",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Aquiles",
      "descricao": "Herói grego da Guerra de Troia, filho da ninfa Tétis e do rei Peleu."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O tendão que liga os músculos da panturrilha ao osso do calcanhar leva o nome de qual herói da Guerra de Troia?",
    "resposta": "Aquiles",
    "fonte": [
      "https://en.wikipedia.org/wiki/Achilles_tendon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Achilles_tendon",
        "situacao": "ok",
        "texto": "The Achilles tendon, or the heel cord, also known as the calcaneal tendon, is a tendon at the back of the lower leg, and is the thickest in the human body. It serves to attach the plantaris, gastrocnemius (calf) and soleus muscles to the calcaneus (heel) bone. These muscles, acting via the tendon, cause plantar flexion of the foot at the ankle joint, and (except the soleus) flexion at the knee.\n[…]\nThe Achilles tendon is also known as the \"tendo calcaneus\" (Latin for \"calcaneal tendon\"). Because eponyms (names relating to people) have no relationship to the subject matter, most anatomical eponyms also have scientifically descriptive terms. The term calcaneal comes from the Latin calcaneum, meaning heel.\n[…]\nThe Achilles tendon connects muscle to bone, like other tendons, and is located at the back of the lower leg. The Achilles tendon connects the gastrocnemius and soleus muscles to the calcaneal tuberosity on the calcaneus (heel bone). The tendon begins near the middle of the calf, and receives muscle fibers on its inner surface, particularly from the soleus muscle, almost to its lower end. Gradually thinning below, it inserts into the middle part of the back of the calcaneus bone.\n[…]\nThe tendon is covered by the fascia and skin, and stands out prominently behind the bone; the gap is filled up with areolar and adipose tissue. A bursa (Achilles bursa) lies between the tendon and the upper part of the calcaneus. It is about 15 centimetres (6 in) long.\n[…]\nTendon xanthomas are cholesterol deposits that commonly develop in the Achilles tendon of people with lipid metabolism disorders such as familial hypercholesterolemia.\n[…]\nMid-portion: Occurs approximately 2–7 cm proximal from the Achilles insertion into the calcaneus. Characterized by a combination of pain and swelling at this level. It has associated a remarkable impaired performance.\n[…]\nMedia related to Achilles tendon at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tend%C3%A3o_calc%C3%A2neo",
        "situacao": "ok",
        "texto": "Tendão calcâneo ou como é popularmente chamado tendão de Aquiles é um tendão da perna posterior.\n[…]\nSegundo a mitologia grega, o herói Aquiles tinha um único ponto vulnerável no seu corpo. Um ponto fraco herdado pela humanidade ao batizar o tendão de Aquiles. Tendão é um tecido fibroso, composto primeiramente por colágeno, que conecta o músculo ao osso, sendo responsável pela transferência de força entre os dois gerando o movimento da articulação. O tendão de Aquiles é o mais resistente do corpo humano, e o mais suscetível que cruza duas articulações: o joelho e o tornozelo.\n[…]\nÉ importante diferenciar 4 lesões diferentes, que podem ser vistas como 4 estágios evolutivos da mesma patologia. A tendinite (estágio inicial) é um processo inflamatório que leva a dor na face posterior do tornozelo. Essa inflamação, cronicamente, leva ao enfraquecimento do tendão, tornando-o suscetível a lesões parciais. As causas mais comuns da tendinite aquileana são:\n[…]\nTrauma, secundário a contração vigorosa da musculatura da panturrilha;\n[…]\nEncurtamento do tendão de aquiles;\n[…]\nE dores músculares sentidas na região do tornozelo.\n[…]\nPara finalizar, seguem seis medidas que devem diminuir a incidência da tendinite calcânea nos seus treinos:\n[…]\nEscolha seu tênis com cuidado, dando especial atenção a absorção de impacto no calcâneo.\n[…]\nFaça um programa de fortalecimento para panturrilha e face anterior da perna.\n[…]\nReflexo aquileu",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Chang'e",
      "descricao": "Deusa da Lua na mitologia chinesa, que vive no astro depois de tomar o elixir da imortalidade."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O programa chinês de exploração da Lua, que levou sondas ao lado oculto do satélite, tem o nome de qual deusa da mitologia chinesa?",
    "resposta": "Chang'e",
    "fonte": [
      "https://en.wikipedia.org/wiki/Chinese_Lunar_Exploration_Program",
      "https://en.wikipedia.org/wiki/Chang%27e"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Chinese_Lunar_Exploration_Program",
        "situacao": "ok",
        "texto": "The Chinese Lunar Exploration Program (CLEP; Chinese: 中国探月工程; pinyin: Zhōngguó Tànyuè Gōngchéng), also known as the Chang'e Project (Chinese: 嫦娥工程; pinyin: Cháng'é Gōngchéng) after the Chinese Moon goddess Chang'e, is the first and ongoing series of robotic Moon missions by the China National Space Administration (CNSA), part of the Chinese space program.\n[…]\nChang'e 7, expected to launch in 2027, is a mission that will explore the south pole for resources. The mission will include an orbiter, a lander, and a mini-flying probe.\n[…]\nIn addition, the Chang'e probes had to carry out many attitude maneuvers during their flights to the Moon and during operations in lunar orbit. The distance across China from east to west is 5,000 kilometers (3,100 miles), forming another challenge to TT&C continuity. At present, the combination of the TT&C system and the Chinese astronomical observation network has met the needs of the Chang'e program, but only by a small margin.\n[…]\nChang'e-4: The first mission to land and explore the far side of the Moon, with four international scientific payloads from the Netherlands, Germany, Sweden, and Saudi Arabia. It also received support from NASA's LRO team, Russia's radioisotope heat source, China's deep space station in Argentina, and the European Space Agency;s tracking station.\n[…]\nChang'e-5: The first mission to return lunar samples since 1976, with international cooperation in telemetry, tracking, and command from the European Space Agency, Argentina, Namibia, Pakistan, and other countries and organizations. It also carried a French magnetic field detector. Scientists from various countries, including Australia, Russia, France, the United States, the United Kingdom, and Sweden, have participated in scientific research involving Chinese lunar samples.\n[…]\nExploration of the Moon – Missions to the Moon\n[…]\nChinese space program"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Chang%27e",
        "situacao": "ok",
        "texto": "In Chinese mythology, Chang'e ( CHAHNG-ə; Chinese: 嫦娥; pinyin: Cháng'é), originally called Heng'e (姮娥; Héng'é), is the goddess of the Moon and wife of Hou Yi, the great archer. Renowned for her beauty, Chang'e is also known for ascending to the Moon with her pet Yu Tu, the Moon rabbit and living in the Moon Palace (廣寒宮). She is one of the most prominent goddesses in Chinese folk religion, Chinese \n[…]\nIn modern times, Chang'e is the namesake of the Chinese Lunar Exploration Program.\n[…]\nThe original poem in Traditional Chinese:\n[…]\nIn Strange Stories from a Chinese Studio (1766), while Chang'e remains a celestial being from heaven, her character undergoes a transformation as she descends to the mortal realm, shedding her divinity.\n[…]\nChang'e was mentioned in a conversation between Houston CAPCOM and the Apollo 11 crew just before the first Moon landing in 1969:  Ronald Evans (CC): Among the large headlines concerning Apollo this morning, there's one asking that you watch for a lovely girl with a big rabbit. An ancient legend says a beautiful Chinese girl named Chang-O has been living there for 4,000 years. It seems she was banished to the Moon because she stole the pill of immortality from her husband.\n[…]\nOn 3 January 2019, Chang'e 4 touched down on the far side of the Moon and deployed the Yutu-2 rover. Likewise all Chinese landers since then are named as Chang'e.\n[…]\nChang'e and her story is the main theme of the 2020 American-Chinese animated feature film Over the Moon produced by Netflix. The goddess is voiced by Phillipa Soo.\n[…]\nList of Chinese mythology\n[…]\nLaing, Ellen Johnston, \"From Thief to Deity: The Pictorial Record of the Chinese Moon Goddess, Chang E\" in Kuhn, Dieter & Stahl, Helga, The Presence of Antiquity: Form and Function of References to Antiquity in the Cultural Centers of Europe and East Asia. Wuerzburg, 2001, pp. 437–54. ISBN 3927943223\n[…]\nMedia related to Chang'e at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Programa_Chin%C3%AAs_de_Explora%C3%A7%C3%A3o_Lunar",
        "situacao": "ok",
        "texto": "Programa Chinês de Exploração Lunar, também conhecido como Programa Chang'e, é um programa espacial de missões robóticas e humanas à Lua realizado pela Administração Espacial Nacional da China (AENC), a agência espacial chinesa. O programa se utiliza de sondas orbitais Chang'e, módulos de alunissagem, rovers e espaçonaves de retorno de amostras, lançados de foguetes Longa Mancha, do Centro Espacia\n[…]\nA primeira espaçonave do programa lunar foi a sonda não-tripulada Chang'e 1, lançada em 24 de outubro de 2007 e que completou sua missão com sucesso. A segunda,  Chang'e 2, lançada em 1 de outubro de 2010, também obteve sucesso em sua missão. A terceira, Chang'e 3, e primeira da segunda fase, foi uma sonda para alunissagem, que transportou o primeiro rover lunar chinês, o \"Coelho de Jade\" (Yutu), lançada em 1 de dezembro de 2013 e que se encontra a caminho do satélite.\n[…]\nImpacto programado    Aterragem suave programada\n[…]\nNesta fase de operações, duas sondas equipadas com módulos de alunissagem pousam na superfície lunar e desembarcam no satélite um rover de exploração do terreno. A primeira delas, Chang'e 3, foi lançada do Centro Espacial de Xichang em 1 de dezembro de 2013 e leva consigo o rover \"Coelho de Jade\" para uma missão de exploração de três meses. A Chang'e 4, foi Lançada Em 2018 Para Explorar o Lado oculto Da Lua e Teve Seu Pouso No Início de 2019.\n[…]\nApós as experiências com sondas não-tripuladas, se bem-sucedidas, o programa prevê o primeiro pouso de uma nave tripulada por chineses na superfície lunar entre 2025 e 2030.\n[…]\nTOs Objetivos Científicos do Projeto de Exploração Lunar Chinesa de Ouyang Ziyuan\n[…]\nSūn Huīxiān (孙辉先); Dài Shùwǔ (代树武); Yáng Jiànfēng (杨建峰); Wú Jì (吴季); Jiāng Jǐngshān (姜景山) (2005). «\"Objetivos científicos e cargas úteis do satélite lunar Chang'E-1\"» (PDF). Journal of Earth System Science. 114 (6): 789–794. Bibcode:2005JESS..114..789H. doi:10.1007/BF02715964",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Níobe",
      "descricao": "Rainha de Tebas da mitologia grega, filha de Tântalo, que perdeu os filhos por se gabar diante de Leto."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O metal nióbio tem o nome de Níobe porque se parece quimicamente com outro metal, batizado em homenagem ao pai dela. Que metal é esse?",
    "resposta": "Tântalo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Niobium",
      "https://en.wikipedia.org/wiki/Niobe"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Niobium",
        "situacao": "ok",
        "texto": "Niobium is a chemical element; it has symbol Nb (formerly columbium, Cb) and atomic number 41. It is a light grey, crystalline transition metal. Pure niobium has a Mohs hardness rating similar to pure titanium, and it has similar ductility to iron. Niobium oxidizes in Earth's atmosphere very slowly, hence its application in jewelry as a hypoallergenic alternative to nickel. Niobium is found in the\n[…]\nThis conclusion was disputed in 1846 by German chemist Heinrich Rose, who argued that there were two different elements in the tantalite sample, and named them after children of Tantalus: niobium (from Niobe) and pelopium (from Pelops). This confusion arose from the minimal observed differences between tantalum and niobium. The claimed new elements pelopium, ilmenium, and dianium were in fact identical to niobium or mixtures of niobium and tantalum.\n[…]\nChristian Wilhelm Blomstrand was the first to prepare the metal in 1866, when he reduced niobium chloride by heating it in an atmosphere of hydrogen. Although de Marignac was able to produce tantalum-free niobium on a larger scale by 1866, it was not until the early 20th century that niobium was used in incandescent lamp filaments, the first commercial application. This use quickly became obsolete through the replacement of niobium with tungsten, which has a higher melting point.\n[…]\nIn many ways, niobium is similar to tantalum and zirconium. It reacts with most nonmetals at high temperatures; with fluorine at room temperature; with chlorine at 150 °C (302 °F) and hydrogen at 200 °C (392 °F); and with nitrogen at 400 °C (752 °F), with products that are frequently interstitial and nonstoichiometric. The metal begins to oxidize in air at 200 °C (392 °F). It resists corrosion by acids, including aqua regia, hydrochloric, sulfuric, nitric and phosphoric acids.\n[…]\nTantalum-Niobium International Study Center"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Niobe",
        "situacao": "ok",
        "texto": "Niobe (; Ancient Greek: Νιόβη, romanized: Nióbē pronounced [ni.óbɛː]) was in Greek mythology a daughter of Tantalus and of either Dione or of Eurythemista or Euryanassa. She was the wife of Amphion and the sister of Pelops and Broteas.\n[…]\nHer father was the ruler of a city located near Manisa in today's Aegean Turkey that was called \"Tantalis\" or \"the city of Tantalus\", or \"Sipylus\". The city was located at the foot of Mount Sipylus and its ruins were reported to be still visible at the beginning of the 1st century AD, although few traces remain today. Pliny reports that Tantalis was destroyed by an earthquake and the city of Sipylus (Magnesia ad Sipylum) was built in its place.\n[…]\nIn the Fabulae Dione, identified in the text as a daughter of Atlas, becomes the wife of Tantalus and mother of Pelops, though Niobe herself is not mentioned. In Ovid's account of the story, Niobe names her father as Tantalus and her mother as a sister of the Pleiades and a daughter of Atlas. Although she gives no name it is assumed to be Dione. The Hyades are traditionally the sisters of the Pleiades and daughters of Atlas, and in the account of Pherecydes, Dione numbers among them.\n[…]\nThe element niobium was so named as an extension of the inspiration which had led earlier to the naming of the element tantalum by Anders Gustaf Ekeberg. On the basis of his argument according to which there were two different elements in the tantalite sample, Heinrich Rose named them after children of Tantalus—niobium and pelopium—although the argument was later contested as far as pelopium was concerned.\n[…]\nFour successive ships of the British Royal Navy were called HMS Niobe.\n[…]\nThe Warburg Institute Iconographic Database (images of Niobe and the Niobids)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ni%C3%B3bio",
        "situacao": "ok",
        "texto": "O nióbio é um elemento químico, de símbolo Nb, número atômico 41 (41 prótons e 41 elétrons) e massa atômica 92,9 u. É um elemento de transição pertencente ao grupo 5 (anteriormente denominado 5B) da classificação periódica dos elementos. O nome deriva da deusa grega Níobe, filha de Dione e Tântalo — este último, por sua vez, nomeou outro elemento do grupo 5, o tântalo.[carece de fontes]? É usado p\n[…]\nEm 1846, o químico alemão Heinrich Rose estabeleceu que os minérios de tântalo continham um segundo elemento que foi batizado como nióbio. Entre 1864 e 1865, ficou esclarecido que \"nióbio\" e \"colúmbio\" eram dois nomes do mesmo elemento, sendo assim, por quase um século adotados esses termos de forma intercambiável. O nióbio foi oficialmente reconhecido como um elemento químico em 1949, mas o termo colúmbio ainda é utilizado na metalurgia estadunidense.\n[…]\nO nióbio (mitologia grega: Níobe, filha de Tântalo) foi descoberto pelo químico inglês Charles Hatchett em 1801. Ele encontrou um novo mineral extraído na Inglaterra por volta de 1734 por John Winthrop (filho de John Winthrop, o jovem que foi o primeiro governador de Connecticut), que nomeou o mineral como columbita e o novo elemento como colúmbio, homenageando a personagem poética estadunidense Colúmbia. O colúmbio descoberto por Hatchett era provavelmente uma mistura de nióbio e tântalo.\n[…]\nEssa conclusão foi questionada em 1846 pelo químico alemão Heinrich Rose, argumentando que havia dois elementos químicos diferentes na tantalita, que nomeou em homenagem à criança de Tantalus: nióbio (de Níobe), e pelônio (de Pelops). Estas disputas ocorreram devido às mínimas diferenças existentes entre o tântalo e o nióbio. A afirmação dos elementos pelônio, ilmênio e diânio foi semelhante à do nióbio ou nas misturas de nióbio e tântalo.\n[…]\nOs compostos de nióbio-germânio (\n[…]\n«Nióbio - vídeos e imagens»\n[…]\nTantalum-Niobium International Study Center",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Rama",
      "descricao": "Herói do épico indiano Ramayana, venerado no hinduísmo como encarnação de Vishnu."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Na tradição hindu, o que têm em comum Rama, herói do épico Ramayana, e Krishna, figura central do Mahabharata?",
    "resposta": "São avatares de Vishnu",
    "fonte": [
      "https://en.wikipedia.org/wiki/Rama",
      "https://en.wikipedia.org/wiki/Dashavatara"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rama",
        "situacao": "ok",
        "texto": "Rama (; Sanskrit: राम, IAST: Rāma, Sanskrit: [ˈraːmɐ] ), also known as Ram, is a major deity in Hinduism, who is worshipped as one of the prominent avatars of Vishnu. Rama is considered an ideal man (maryāda puruṣottama) and is the heroic protagonist of the Hindu epic Ramayana. In Rama-centric Hindu traditions, he is considered the Supreme Being.\n[…]\nRama is especially important to Vaishnavism, being the seventh avatar of Vishnu. He is the central figure in the ancient epic Ramayana, a text historically popular in the South Asian and Southeast Asian cultures. His ancient legends have attracted bhashya (commentaries) and extensive secondary literature and inspired performance arts.\n[…]\nThe Vishnu avatar named Rama is also known by other names. He is called Ramachandra (beautiful, lovely moon), or Dasarathi (son of Dasaratha), or Raghava (descendant of Raghu, solar dynasty in Hindu cosmology).\n[…]\nRama appears in the Puranas namely the Vishnu Purana and Padma Purana (as an avatar of Vishnu), the Matsya Purana (as form of Bhagavan), the Linga Purana (as form of Vishnu), the Kurma Purana,Agni Purana, Garuda Purana (as Rama), the Skanda Purana and the Shiva Purana. Additionally, the Rama story is included in the Vana Parva of the Mahabharata, which has been a part of evidence that the Ramayana is likely more ancient, and it was summarised in the Mahabharata epic in ancient times.\n[…]\nSri Rama Temple, Ramapuram, Kerala.\n[…]\nRama is mentioned as one of twenty four divine incarnations of Vishnu in the Chaubis Avtar, a composition in Dasam Granth traditionally and historically attributed to Guru Gobind Singh. The discussion of Rama and Krishna avatars is the most extensive in this section of the secondary Sikh scripture. The name of Rama is mentioned more than 2,500 times in the Guru Granth Sahib and is considered an avatar along with the Krishna."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Dashavatara",
        "situacao": "ok",
        "texto": "The Dashavatara (Sanskrit: दशावतार, IAST: daśāvatāra) are the ten primary avatars of Vishnu, a principal Hindu god. Vishnu is said to descend in the form of an avatar to restore cosmic order. The word Dashavatara derives from daśa, meaning \"ten\", and avatāra, roughly equivalent to \"incarnation\".\n[…]\nGautama Buddha, the founder of Buddhism, is commonly included as an avatar of Vishnu in Hinduism. Buddha is sometimes depicted in Hindu scriptures as a preacher who deludes and leads asuras and heretics away from the path of the Vedic scriptures, but another view praises him a compassionate teacher who preached the path of ahimsa (non-violence).\n[…]\nIn Maharashtra and Goa, Vithoba's image replaces Buddha as the ninth avatar of Vishnu in some temple sculptures and Hindu astrological almanacs.\n[…]\nThe adoption of Buddha as an avatar in Bhagavatism was a catalyzing factor in Buddhism's assimilation into Vaishnavism's mythic hierarchy. By the 8th century CE, the Buddha was included as an avatar of Vishnu in several Puranas. This assimilation is indicative of the Hindu ambivalence toward the Buddha and Buddhism, and there is also a tradition that there were two Buddhas. According to this tradition, the first was the ninth avatar of Vishnu, while the second was the historical Buddha.\n[…]\nJayadeva, in his Pralaya Payodhi Jale from the Gita Govinda, includes Balarama and Buddha where Krishna is equated with Vishnu and the source of all avatars. The words from the poem describing ten avataras (translated) are as follows:\n[…]\nThirty-nine avatars are mentioned in the Pañcaratra including the likes of Garuda. However, despite these lists, the commonly accepted number of ten avatars for Vishnu was fixed well before the 10th century CE.\n[…]\nAvatars (Incarnations or Descents) of Vishnu"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rama",
        "situacao": "ok",
        "texto": "Rama (/ˈrɑː mə /; Sânscrito: राम , IAST: Rāma, Sânscrito: [ˈraːmɐ]) é uma divindade importante no hinduísmo. Ele é adorado como o sétimo e um dos avatares de Vishnu. Nascentradas em Rama, ele é considerado o Ser Supremo. Também considerado o homem ideal (maryāda puruṣottama), Rama é o protagonista masculino da epopeia hindu Ramayana.\n[…]\nLendas de Rama também são encontradas nos textos do Jainismo e do Budismo, embora ele às vezes seja chamado de Pauma ou Padma nesses textos, e seus detalhes variam significativamente das versões hindus. Os textos jainistas também mencionam Rama como o oitavo balabhadra entre os 63 salakapurusas. No Sikhismo, Rama é mencionado como o vigésimo dos  vinte e quatro avatares divinos de Vishnu no Chaubis Avtar no Dasam Granth.\n[…]\nA iconografia de Rama compartilha elementos dos avatares de Vishnu, mas possui vários elementos distintivos. Ele tem duas mãos, segurando uma bana (flecha) na mão direita e um dhanus (arco) na esquerda. O ícone mais recomendado para ele é aquele em pé na postura tribhanga (forma de \"S\" dobrado três vezes). Ele é representado em preto, azul ou escuro, tipicamente vestindo roupas avermelhadas.\n[…]\nEle tem a clavícula escondida e é conhecido pelo povo como Rama. Possui uma voz grave, semelhante ao som de um tambor, e pele brilhante.\n[…]\nParashu-rama , o sexto avatar de Vishnu. Ele está ligado ao Rama Jamadagnya , famoso no Rigveda .\n[…]\nRama-chandra , como o sétimo avatar de Vishnu e da antiga história do Ramayana .\n[…]\nBala-rama , também chamado Halayudha, é o irmão mais velho de Krishna, e ambos aparecem nas lendas do hinduísmo, budismo e jainismo.\n[…]\nO avatar de Vishnu chamado Rama também é conhecido por outros nomes. Ele é chamado Ramachandra (lua bela e adorável), ou Dasarathi (filho de Dasaratha), ou Raghava (descendente de Raghu, dinastia solar na cosmologia hindu).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Hades",
      "descricao": "Deus grego do mundo dos mortos, irmão de Zeus e Poseidon."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O grego Hades e a nórdica Hel, que governavam os mortos, têm uma curiosidade em comum ligada aos seus nomes. Qual é?",
    "resposta": "Também nomeiam o reino dos mortos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Hades",
      "https://en.wikipedia.org/wiki/Hel_(location)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hades",
        "situacao": "ok",
        "texto": "Hades (; Ancient Greek: ᾍδης, romanised: Hā́idēs, Attic Greek: [háːi̯dεːs], later [háːdeːs]), in the ancient Greek religion and mythology, is the god of the dead and riches and the King of the underworld, with which his name became synonymous. Hades was the eldest son of Cronus and Rhea, although this also made him the last son to be regurgitated by his father.\n[…]\nThe origin of Hades's name is uncertain but has generally been seen as meaning \"the unseen one\" since antiquity. An extensive section of Plato's dialogue Cratylus is devoted to the etymology of the god's name, in which Socrates is arguing for a folk etymology not from \"unseen\" but from \"his knowledge (eidenai) of all noble things\". Modern linguists have proposed the Proto-Greek form *Awides (\"unseen\"). The earliest attested form is Aḯdēs (Ἀΐδης), which lacks the proposed digamma.\n[…]\nof your infinite anger. Hades isn't an unsuitable\n[…]\nThe first region of Hades comprises the Fields of Asphodel, described in Odyssey xi, where the shades of heroes wander despondently among lesser spirits, who twitter around them like bats. Only libations of blood offered to them in the world of the living can reawaken in them for a time the sensations of humanity.\n[…]\nIn the Sibylline oracles, a curious hodgepodge of Greco-Roman and Judaeo-Christian elements, Hades again appears as the abode of the dead, and by way of folk etymology, it even derives Hades from the name Adam (the first man), saying it is because he was the first to enter there. Owing to its appearance in the New Testament of the Bible, Hades also has a distinct meaning in Christianity.\n[…]\nFelisi, Claudio, Hadès aux multiples noms: Histoire onomastique d'un dieu grec d'Homère à Platon, Paris, Classiques Garnier, 2026. ISBN 9782406187691.\n[…]\nHADES from Greek Mythology Link\n[…]\nDiscourse to the Greeks Concerning Hades by Flavius Josephus"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Hel_(location)",
        "situacao": "ok",
        "texto": "Hel (Old Norse: [ˈhel]) is an afterlife location in Norse mythology and paganism. It is ruled over by a being of the same name, Hel. In late Icelandic sources, varying descriptions of Hel are given and various figures are described as being buried with items that will facilitate their journey to Hel after their death. In the Poetic Edda, Brynhildr's trip to Hel after her death is described and Odi"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hades",
        "situacao": "ok",
        "texto": "Hades (em grego clássico: Ἅιδης ou Άͅδης; romaniz.: Haides ou Hades), na mitologia grega, é o deus do mundo inferior e dos mortos. Equivalente ao deus romano Plutão, que significa o rico e que era também um dos seus epítetos gregos, seu nome era usado frequentemente para designar tanto o deus quanto o reino que governa, nos subterrâneos da Terra. Consta também ser chamado Serápis (deus de obscura \n[…]\nMais tarde Hades desposa Perséfone (a Prosérpina dos romanos, também chamada Core ou Kore), filha de sua irmã Deméter (Ceres, para os romanos), e que ao seu lado tornou-se a rainha dos mortos. O casal não teve filhos.\n[…]\nEsse deus tinha que possuir um duplo caráter: primeiro, como fonte de todas as riquezas (o que é sugerido por seu nome latino Plutão), depois como monarca do obscuro reino, morado pela sombras dos mortos (sugerido pelo nome grego Hades).\n[…]\nAmbos se auxiliariam na tarefa, mas Teseu — então aos cinquenta anos, encontra Helena ainda impúbere, e a esconde. Junto a Pirítoo, desce ao Reino dos Mortos.\n[…]\nAlém do próprio reino dos mortos, duas outras regiões se apresentavam: os Campos Elísios, onde uma ilha de bem-aventurança recebia as almas felizes e o Tártaro — tão profundo que distava da terra tanto quanto esta dos céus. Na ilha de Erítia, onde Gerião mantinha seu rebanho sob os cuidados do pastor Eurítion e do cão Ortro — alvo de um dos trabalhos hercúleos — o pastor Menetes cuidava dos rebanhos de Hades.\n[…]\nQuando finalmente entram no Reino dos Mortos Lobato descreve o palácio subterrâneo e suas paisagens. Diante de Hades a boneca Emília sente medo - \"Foi uma das raras vezes em que realmente teve medo.\"\n[…]\nO animê (e também sua variante em mangá) Cavaleiros do Zodíaco traz uma série de episódios intitulada Saga de Hades, com capítulos tais como Mundo dos mortos, com personagens conhecidos por Espectros de Hades, criados por Masami Kurumada e Shiori Teshirogi.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Midgard",
      "descricao": "Na mitologia nórdica, o mundo habitado pelos seres humanos."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que mundo inventado por Tolkien, cenário de O Senhor dos Anéis, tem nome ligado a Midgard, a terra dos humanos na mitologia nórdica?",
    "resposta": "Terra-média",
    "fonte": [
      "https://en.wikipedia.org/wiki/Middle-earth",
      "https://en.wikipedia.org/wiki/Midgard"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Middle-earth",
        "situacao": "ok",
        "texto": "Middle-earth is the setting of much of the English writer J. R. R. Tolkien's fantasy. The term is equivalent to the Miðgarðr of Norse mythology and Middangeard in Old English works, including Beowulf. Middle-earth is the oecumene (i.e. the human-inhabited world, or the central continent of Earth) in Tolkien's imagined mythological past. His most widely read works, The Hobbit and The Lord of the Ri\n[…]\nTolkien's biographer Humphrey Carpenter states that Tolkien's Middle-earth is the known world, \"recalling the Norse Midgard and the equivalent words in early English\", noting that Tolkien made it clear that this was \"our world ... in a purely imaginary ... period of antiquity\".\n[…]\nTolkien explained in a letter to his publisher that it \"is just a use of Middle English middle-erde (or erthe), altered from Old English Middangeard: the name for the inhabited lands of men 'between the seas'.\" There are allusions to a similarly or identically named world in the work of other writers both before and after him. William Morris's 1870 translation of the Völsunga Saga calls the world \"Midgard\".\n[…]\nJ.R.R. Tolkien bibliography\n[…]\nTolkien, J. R. R. (1954a). The Fellowship of the Ring. The Lord of the Rings. Boston: Houghton Mifflin. OCLC 9552942.\n[…]\nTolkien, J. R. R. (1954). The Two Towers. The Lord of the Rings. Boston: Houghton Mifflin. OCLC 1042159111.\n[…]\nTolkien, J. R. R. (1955). The Return of the King. The Lord of the Rings. Boston: Houghton Mifflin. OCLC 519647821.\n[…]\nTolkien, J. R. R. (1980). Christopher Tolkien (ed.). Unfinished Tales. Boston: Houghton Mifflin. ISBN 978-0-395-29917-3.\n[…]\nGarth, John (2020). The Worlds of J. R. R. Tolkien: The Places that Inspired Middle-earth. London: Frances Lincoln Publishers. ISBN 978-0-71124-127-5.\n[…]\nHammond, Wayne G.; Scull, Christina (2004) [1995]. J. R. R. Tolkien: Artist and Illustrator. HarperCollins. ISBN 0-261-10322-9."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Midgard",
        "situacao": "ok",
        "texto": "In Germanic cosmology, Midgard (an anglicised form of Old Norse Miðgarðr; Old English Middangeard, Old Saxon Middilgard, Old High German Mittilagart, and Gothic Midjun-gards; \"middle yard\", \"middle enclosure\") is the name for Earth (equivalent in meaning to the Greek term οἰκουμένη : oikouménē, \"inhabited\") inhabited by and known to humans in early Germanic cosmology. The Old Norse form plays a no\n[…]\nAlthough most surviving instances of the word Midgard refer to spiritual matters, it was also used in more mundane situations, as in the Viking Age runestone poem from the inscription Sö 56 from Fyrby:\n[…]\nThe Danish and Swedish form Midgård or Midgaard, the Norwegian Midgard or Midgård, as well as the Icelandic and Faroese form Miðgarður, all derive from the Old Norse term.\n[…]\nThe name middangeard occurs six times in the Old English epic poem Beowulf, and is the same word as Midgard in Old Norse. The term is equivalent in meaning to the Greek term Oikoumene, as referring to the known and inhabited world.\n[…]\nThe concept of Midgard occurs many times in Middle English. The association with earth (OE eorðe) in Middle English middellærd, middelerde is by popular etymology; the modern English cognate of geard \"enclosure\" is yard. An early example of this transformation is from the Ormulum:\n[…]\nThe usage of \"Middle-earth\" as a name for a setting was popularized by Old English scholar J. R. R. Tolkien in his The Lord of the Rings and other fantasy works; he was originally inspired by the references to middangeard and Éarendel in the Old English poem Crist A.\n[…]\nMoon falls, Midgard burns\n[…]\nUpper world (Greek mythology) – Location in Greek mythology (Ancient Greek equivalent to Midgard, the world of the living).\n[…]\nAshihara no Nakatsukuni – Japanese mythological place (Shinto equivalent to Midgard, the world of the living)."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Terra_M%C3%A9dia",
        "situacao": "ok",
        "texto": "Terra-média é a terra antiga e fictícia de J. R. R. Tolkien, onde a maioria dos contos do seu imaginário ocorrem. Terra-média é a tradução literal do termo anglo-saxão middangeard, referindo-se a este mundo, o reino dos humanos. Tolkien traduziu \"Terra-média\" como Endor (algumas vezes Endórë) e Ennor nas línguas élficas quenya e sindarin.\n[…]\nA história da Terra-média está dividida em várias Eras: O Hobbit e O Senhor dos Anéis lidam exclusivamente com eventos relacionados com o fim da Terceira Era, enquanto que O Silmarillion trata principalmente da Primeira Era. O seu mundo era originalmente plano mas foi tornado redondo perto do fim da Segunda Era por Eru Ilúvatar, o Criador.\n[…]\nO termo \"Terra-média\" (\"Middle-earth\" em inglês) não foi inventado por Tolkien. Ele já existia no anglo-saxão como middanġeard e no inglês médio como midden-erd ou middel-erd e em norueguês antigo como Midgard. É em inglês aquilo que os Gregos chamaram o οικουμένη (oikoumenē) ou \"o local permanente dos homens\", o mundo físico como oposto dos mundos invisíveis (As Cartas de J. R. R. Tolkien, 151). A palavra Mediterrâneo provém de duas raízes latinas, medi, meio, e terra.\n[…]\nJ. R. R. Tolkien nunca finalizou a geografia de todo o mundo associado a O Hobbit e a O Senhor dos Anéis. Em The Shaping of Middle-earth, volume IV da História da Terra Média, Christopher Tolkien publicou vários mapas de referência, tanto da original terra plana como do mundo redondo, que seu pai tinha criado no final dos anos 30.\n[…]\nA série se passa na Segunda Era da Terra-média antes dos acontecimentos do romance e dos filmes de O Senhor dos Anéis. A Amazon Studios é responsável pela produção em cooperação com a Tolkien Estate, Tolkien Trust, HarperCollins e New Line Cinema. Payne e McKay atuam como os showrunners do projeto.\n[…]\nJ. R. R. Tolkien\n[…]\nTolkien e raça\n[…]\n«Enciclopédia Tolkien»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Mjölnir",
      "descricao": "Martelo do deus nórdico Thor."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Segundo a Edda em Prosa, por que o martelo de Thor saiu da forja com o cabo curto demais?",
    "resposta": "Loki atrapalhou o ferreiro",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mj%C3%B6lnir"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mj%C3%B6lnir",
        "situacao": "ok",
        "texto": "Mjölnir (UK:  MYOL-neer, US:  MYAWL-neer; from Old Norse Mjǫllnir [ˈmjɔlːnir]) is the hammer of the thunder god Thor in Norse mythology, used both as a devastating weapon and as a divine instrument to provide blessings. The hammer is attested in numerous sources, including the 11th century runic Kvinneby amulet, the Poetic Edda, a collection of eddic poetry compiled in the 13th century, and the Pr\n[…]\nIn a tale recounted by Third, the gods Loki and Thor, along with Thor's servants Þjálfi and Röskva, encounter an enormous forest when they arrive in Jötunheimr. The group has difficulty finding lodging until they encounter a huge and peculiar building with a very wide entrance. They decide to spend the night in the structure. At midnight they experience an earthquake and decide to search the building. They find nothing.\n[…]\nThe large man says that his name is Skrýmir and reveals that Thor, Loki, Þjálfi, and Röskva had slept not in a hall but rather in Skrýmir's glove.\n[…]\nLater Skrýmir reveals that this had all been an illusion: For example, the enormous Skrýmir was in fact the sorcerer Útgarða-Loki and the blows Thor landed terrified him: He details that had they hit him, they would have killed him, and that his blows had hammered a deep valley in the landscape.\n[…]\nThe final mention of the hammer in Skáldskaparmál offers an explanation of its manufacture by the dwarf brothers Eitri and Brokkr. In this narrative, Loki cuts the goddess Sif's hair. Upon discovering this, Thor grabs Loki and threatens to crush every bone in his body if he does not come up with a solution. Loki goes to the svartálfar, and for him the Sons of Ivaldi make three special items: Sif's hair of gold, Freyr's ship Skíðblaðnir, and Odin's spear Gungnir.\n[…]\nSeeing this, Loki wagers his head with the dwarf Brokkr on whether his brother Eitri can make three more items of equal quality."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mj%C3%B6lnir",
        "situacao": "ok",
        "texto": "Mjölnir   ([ˈmjɒlnɪər] ou [ˈmjɒlnər] MIOL-n(i)er; também Mjǫlnir, Mjollnir, Mjölner, Mjølner, Mjølnir ou Mjølne; em português:  aquilo que esmaga; pronúncia: Miólnir, Miólnier ou Milmiun), na religião nórdica, é o martelo do deus Thor, um deus filho do principal deus nórdico Odin (pai de todos) associado com o trovão naquele sistema mitológico.\n[…]\nTalhado de forma bem característica com semelhança a uma bigorna, o instrumento é representado como uma das armas mais temíveis, capaz de aplainar montanhas. Embora geralmente reconhecido e ilustrado como um martelo, Mjölnir é algumas vezes mencionado como um machado ou um porrete. No século XIII, no Edda em Prosa, Snorri Sturluson relata que os Svartálfar Sindri e Brokk produziram o mjölnir por ordem de Loki. Ele teria sido criado pelos filhos de Ivaldi numa aposta contra o deus Loki.\n[…]\nO Edda em Prosa dá um sumário das qualidades especiais do mjölnir quando Thor o usa:\n[…]\nNo Anime e Mangá Soul Eater existe uma personagem chamada Marie Mjölnir que pode se transformar em uma arma parecida com um martelo, em clara referencia ao martelo Mjölnir de Thor.\n[…]\nO herói da Marvel Comics, Thor brande uma versão de Mjölnir que só pode ser carregado por aqueles que sejam considerados dignos de fazê-lo.\n[…]\nO Mjölnir e seu dono Thor fazem uma aparição no anime Sword Art Online, no arco Caliber\n[…]\nNo jogo Grand Chase, Mjolnir é a capital dos anões aonde Aron o chefe da missão \"Mjölnir\" no continente de Arquimídia, empunha um martelo muito parecido com o do Deus asgardiano.\n[…]\nNo jogo God of War (2018), Thor e seu Martelo Mjölnir além de serem citados, também aparecem no final do jogo.\n[…]\nNo jogo Assassin's Creed Valhalla (2020), Mjonir é um artefato tecnologico de uma antiga civilização, no qual Eivor precisa juntar todas as peças da armadura de Thor para poder levantá-lo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Hidra de Lerna",
      "descricao": "Serpente de muitas cabeças da mitologia grega, morta por Hércules num de seus doze trabalhos."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Na luta de Hércules contra a Hidra de Lerna, o que acontecia toda vez que ele cortava uma das cabeças do monstro?",
    "resposta": "Nasciam duas no lugar",
    "fonte": [
      "https://en.wikipedia.org/wiki/Lernaean_Hydra"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lernaean_Hydra",
        "situacao": "ok",
        "texto": "The Lernaean Hydra or Hydra of Lerna (Ancient Greek: Λερναῖα ὕδρα, romanized: Lernaîa Húdrā), more often known simply as the Hydra, is a serpentine lake monster in Greek mythology and Roman mythology. Its lair was the lake of Lerna in the Argolid, which was also the site of the myth of the Danaïdes. Lerna was reputed to be an entrance to the underworld, and archaeology has established it as a sacr\n[…]\nIn the canonical Hydra myth, the monster is killed by Heracles (Hercules) as the second of his Twelve Labours.\n[…]\nEurystheus, the king of the Tiryns, sent Heracles (or Hercules) to slay the Hydra, which Hera had raised just to slay Heracles. Upon reaching the swamp near Lake Lerna, where the Hydra dwelt, Heracles covered his mouth and nose with a cloth to protect himself from the poisonous fumes. He shot flaming arrows into the Hydra's lair, the spring of Amymone, a deep cave from which it emerged only to terrorize neighboring villages.\n[…]\nThe Hydra's one immortal head was cut off with a golden sword given to Heracles by Athena. Heracles placed the head—still alive and writhing—under a great rock on the sacred way between Lerna and Elaius, and dipped his arrows in the Hydra's poisonous blood. Thus, his second task was complete.\n[…]\nBoth Strabo and Pausanias report that the stench of the river Anigrus in Elis, making all the fish of the river inedible, was reputed to be due to the Hydra's poison, washed from the arrows Heracles used on the centaur.\n[…]\nPiccardi, Luigi (2005). The head of the Hydra of Lerna (Greece). Archaeopress, British Archaeological Reports, International Series N° 1337/2005, 179-186.\n[…]\n\"Hydra\" . Encyclopædia Britannica. Vol. 14 (11th ed.). 1911. pp. 33–34.\n[…]\n\"Statue of Heracles battling the Lernaean Hydra at the southern entrance to the Hofburg (Imperial Palace) in Vienna\". Britannica Encyclopaedia.\n[…]\n\"Statue of the Hydra battling Hercules at the Louvre\". cartelen.louvre.fr. 1525."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hidra_de_Lerna",
        "situacao": "ok",
        "texto": "A Hidra de Lerna (em grego clássico:  Ὕδρα), na mitologia grega, era um monstro, filho de Tifão e Equidna, que habitava um pântano junto ao lago de Lerna, na Argólida, hoje o que equivaleria à costa leste da região do Peloponeso. A Hidra tinha corpo de dragão e várias cabeças de serpente. Segundo a lenda, as cabeças da Hidra podiam se regenerar; algumas versões dizem que, quando se cortava uma cab\n[…]\nA Hidra foi derrotada por Héracles (Hércules, na mitologia romana), em seu segundo trabalho. Inicialmente Héracles tentou esmagar as cabeças, mas a cada uma que cortava surgiam duas no lugar. Decidiu então mudar de tática e, para que as cabeças não se regenerassem, pediu ao sobrinho Iolau para que as queimasse com um tição logo após o corte, cicatrizando desta forma a ferida. Sobrou então apenas a cabeça do meio, considerada imortal.\n[…]\nHéracles cortou e enterrou a última cabeça com uma enorme pedra. Assim, o monstro foi morto.\n[…]\nSegundo a tradição, o monstro foi criado por Hera para matar Héracles. Quando percebeu que Héracles iria matar a serpente, Hera enviou-lhe a ajuda de um enorme caranguejo, mas Héracles pisou-o e o animal converteu-se na constelação de caranguejo (ou Câncer).\n[…]\nInstruído por Atena, Héracles, após matar a Hidra, aproveitou para banhar suas flechas no sangue do monstro, para torná-las venenosas. Euristeu não considerou este trabalho válido (Héracles deveria cumprir dez trabalhos, e não doze), pois o herói teve ajuda.\n[…]\nOs mitógrafos contam que a Hidra de Lerna e o caranguejo foram postos no céu depois que Herácles os matasse. Hera pôs o caranguejo no Zodíaco para seguir ao Leão, criando a constelação de câncer. Quando o sol está no signo de câncer, ao começar oficialmente o verão boreal, a constelação de Hydra tem suas cabeças próximas.[carece de fontes]?",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Loki",
      "descricao": "Deus trapaceiro da mitologia nórdica, capaz de mudar de forma."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Segundo a Edda em Prosa, Loki foi acorrentado numa rocha com veneno de serpente pingando no rosto. Que fenômeno natural acontece quando ele se contorce?",
    "resposta": "Terremotos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Loki"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Loki",
        "situacao": "ok",
        "texto": "Loki is a god in Norse mythology. Loki engineers the death of the beloved god Baldr and is bound by the gods and suffers from serpent venom. His wife Sigyn collects the venom in a bowl. However, she must empty the bowl when it is full and the venom that drips in the meantime causes Loki to writhe in pain, thereby causing earthquakes.\n[…]\nHence, it is natural that Loki is the inventor of the fishnet, which consists of loops and knots, and that the word loki (lokke, lokki, loke, luki) is a term for makers of cobwebs: spiders and the like.\" Though not prominent in the oldest sources, this identity as a \"tangler\" may be the etymological meaning of Loki's name.\n[…]\nIn the Poetic Edda, Loki appears (or is referenced) in the poems Völuspá, Lokasenna, Þrymskviða, Reginsmál, Baldrs draumar, and Hyndluljóð.\n[…]\nIn his study of Loki's appearance in Scandinavian folklore in the modern period, Danish folklorist Axel Olrik cites numerous examples of natural phenomena explained by way of Lokke in popular folk tradition, including rising heat. An example from 1841 reads as follows:\n[…]\nMany scholars, including Jan de Vries and Georges Dumézil, have also identified Lóðurr as being the same deity as Loki. Scholar Haukur Þorgeirsson suggests that Loki and Lóðurr were different names for the same deity based on that Loki is referred to as Lóður in the rímur Lokrur. Þorgeirsson argues that the writer must have had information about the identification from either a tradition or that the author drew the conclusion based on the Prose Edda, as Snorri does not mention Lóðurr.\n[…]\nSince the contents of the Poetic Edda are assumed to have been forgotten around 1400 when the rímur was written, Haukur argues for a traditional identification. Þorgeirsson also points to Þrymlur where the same identification is made with Loki and Lóðurr."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Loki",
        "situacao": "ok",
        "texto": "Loki é um deus da mitologia nórdica. É um deus da trapaça e da travessura e do fogo, também está ligado à magia e pode assumir a forma que quiser. Ele não pertence aos Aesir, embora viva com eles. É frequentemente considerado um símbolo da maldade, traiçoeiro, de pouca confiança; e, embora suas artimanhas geralmente causem problemas a curto prazo aos deuses, estes frequentemente se beneficiam, no \n[…]\nEsposa de Loki, Sigyn senta-se junto a ele e começa a coletar o veneno em defesa de seu esposo. Com o enchimento da vasilha, ela constantemente deixa o local para despejar o líquido, e durante esse período o líquido tóxico cai sobre ele, causando-o tamanha dor que toda a terra treme com o seu grito, gerando, assim, os terremotos.\n[…]\nNo Edda em prosa, Loki aparece principalmente em Gylfaginning e Skáldskaparmál.\n[…]\nA primeira referência a Loki no Edda em prosa está no vigésimo capítulo do livro Gylfaginning. Posteriormente, há uma descrição sobre o personagem. Ele é chamado \"caluniador dos deuses\", \"origem da enganação\" e \"desgraça dos deuses e homens\". Diz-se que seu nome alternativo é Lopt, que ele é filho dos gigantes Fárbauti e Laufey, e irmão de Helblindi e Býleistr. Ele possui boa aparência, amigável, mas sua natureza é maligna. Ele é calculista e malicioso, mas também heróico.\n[…]\nQuando os deuses descobrem que a giganta era ninguém mais que Loki sob disfarce, eles o perseguem e o prendem a três rochas. Eles prendem uma cobra sobre sua cabeça, que pinga veneno sobre seu rosto. A esposa de Loki, Sigyn evita que isso aconteça armazenando o veneno numa vasilha, mas de tempos em tempos ela era obrigada a retirar o objeto para esvaziá-lo.\n[…]\nO líquido tóxico, ao cair sobre o rosto de Loki, causava-lhe tanta dor que a terra inteira tremia com seu grito, o que passou a se chamar terremoto. Eventualmente, Loki consegue se libertar a tempo de lutar contra os deuses no Ragnarök.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Argos Panoptes",
      "descricao": "Gigante de cem olhos da mitologia grega, vigia a serviço de Hera, morto por Hermes."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Depois que Hermes matou o gigante Argos, que tinha cem olhos, a deusa Hera espalhou esses olhos na cauda de qual ave?",
    "resposta": "Pavão",
    "fonte": [
      "https://en.wikipedia.org/wiki/Argus_Panoptes"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Argus_Panoptes",
        "situacao": "ok",
        "texto": "Argus or Argos Panoptes (Ancient Greek: Ἄργος Πανόπτης, \"All-seeing Argos\") is a many-eyed giant, son of Gaia, in Greek mythology. Known for his perpetual vigilance, he served the goddess Hera as a watchman. His most famous task was guarding Io, a priestess of Hera, whom Zeus had transformed into a heifer. Argus's constant watch, with some of his eyes always open, made him a formidable guardian.\n[…]\nThe epithet Panoptes was applied to the god of the Sun, Helios, and was taken up as an epithet by Zeus, Zeus Panoptes. \"In a way,\" Walter Burkert observes, \"the power and order of Argos the city are embodied in Argos the neatherd, lord of the herd and lord of the land, whose name itself is the name of the land.\"The epithet Panoptes, reflecting his mythic role, set by Hera as a very effective watchman of Io, was described in a fragment of a lost poem Aigimios, attributed to Hesiod:\n[…]\nArgos was meant to be the perfect guardian. She charged him to \"Tether this cow safely to an olive-tree at Nemea\". Hera knew that the heifer was in reality Io, one of the many nymphs Zeus was coupling with to establish a new order. To free Io, Zeus had Argus slain by Hermes. The messenger of the Olympian gods, disguised as a shepherd, first put all of Argus' eyes asleep with spoken charms, then slew him.\n[…]\nAccording to Ovid, Argus had a hundred eyes. Hera had Argus' hundred eyes preserved forever in a peacock's tail so as to immortalise her faithful watchman. In another version, Hera transformed the whole of Argus into a peacock.\n[…]\nArgus Panoptes is referenced in the scientific names of at least eight animals, each of which bears a pattern of eye spots: reptiles Cnemaspis argus, Eremias argus, Sibon argus, Sphaerodactylus argus, and the Argus monitor Varanus panoptes; the pheasant Argusianus argus; the fish Cephalopholis argus and the cowry Arestorides argus."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Argos_Panoptes",
        "situacao": "ok",
        "texto": "Argos Panoptes (em grego:   Ἄργος Πανόπτης, \"Argos Omnividente [que tudo vê]\"), na mitologia grega, era um gigante cujo corpo era coberto por olhos ou que tinha cem olhos, foi gerado pela deusa Hera (Juno) para vigiar Io que havia sido transformada em uma novilha por seu marido, o deus Zeus (Júpiter). Enquanto dormia, metade dos olhos se fechava e descansava enquanto a outra metade vigiava.\n[…]\nPara acalmar o gigante, Hermes tocou uma melodia tão linda em sua lira que todos os olhos do gigante se fecharam. Uma vez em que Argos Panoptes estava dormindo, Hermes cortou sua cabeça para impedi-lo de reviver e informar Hera (Juno) sobre o que ocorreu; isso permitiu que Zeus (Júpiter) tivesse seu encontro. Hera (Juno), para homenagear a morte de seu guardião favorito, colocou os olhos de Argos Panoptes na cauda de seu pássaro favorito, o pavão.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Dafne",
      "descricao": "Ninfa da mitologia grega perseguida por Apolo e transformada em árvore."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Para escapar do deus Apolo, a ninfa Dafne foi transformada em que árvore, cujas folhas viraram símbolo do deus?",
    "resposta": "Loureiro",
    "fonte": [
      "https://en.wikipedia.org/wiki/Daphne"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Daphne",
        "situacao": "ok",
        "texto": "Daphne (; DAFF-nee; Ancient Greek: Δάφνη, Dáphnē, lit. 'laurel'), a figure in Greek mythology, was in various retellings a mortal woman or a nymph, daughter of a river god. The god Apollo fell in love with Daphne and chased her against her wishes, but before he caught her, Daphne prayed for escape, and was transformed into a laurel tree. Thenceforth Apollo developed a special reverence for laurel.\n[…]\nAccording to Pausanias the reason for this was \"simply and solely because the prevailing tradition has it that Apollo fell in love with the daughter of Ladon\" (Daphne). Most artistic depictions of the myth focus on the moment of Daphne's transformation.\n[…]\nElated with sudden love, Apollo chased Daphne continually. He tried to make her cease her flight by saying he did not wish to hurt her. When she kept fleeing, Apollo lamented that even though he had the knowledge of medicinal herbs, he had failed to cure himself from the wound of Cupid's arrow. When Apollo finally caught up with her, Daphne prayed for help to her father, the river god Peneus of Thessaly, who immediately commenced her transformation into a laurel tree (Laurus nobilis):\n[…]\nPhilostratus in his Life of Apollonius of Tyana says the Assyrians, who worshipped Apollo Daphnaeus (\"Apollo of the Laurel\") place the site of Daphne's transformation from Arcadia to Antioch (modern day Antakya in Turkey).\n[…]\nDie Dafne (1627), lost opera by Heinrich Schütz to a libretto by Martin Opitz, a translation of Rinuccini's libretto\n[…]\nDaphne (1938), opera by Richard Strauss about the legend based on accounts by both Ovid and Euripides\n[…]\nIn the WEBTOON comic Lore Olympus, Daphne is a fashion model, yoga instructor, and social media influencer who's dating Thanatos, the god of death.\n[…]\nDAPHNE from the Theoi Project\n[…]\nApollo and Daphne – statue by Gian Lorenzo Bernini\n[…]\nThe Warburg Institute Iconographic Database (ca 260 images of Daphne)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dafne",
        "situacao": "ok",
        "texto": "Na mitologia grega, Dafne (do grego Δάφνη, que significa \"loureiro\")  era uma ninfa, filha do rio-deus Peneu e primeiro amor de Apolo. Apolo foi induzido a se apaixonar por ela ao ser atingido por uma flecha de ouro de Eros, que também acertou Dafne com uma flecha de chumbo, o que fez a ninfa rejeitar um amor de Apolo. Apolo, porém, começou a persegui-la e ela se sentiu horrorizada ao pensar em am\n[…]\nApolo a perseguiu suplicando por seu amor, mas a mesma continuou a fugir, inebriada pela flecha de Eros. Cansada de fugir, pediu ao pai que a livrasse da situação. Ele, então, a transformou em loureiro. Apolo disse: \"Se não podes ser minha mulher, serás minha árvore sagrada\". A partir de então, o deus sempre trazia consigo um ramo de louros.\n[…]\nApolo e Dafne - escultura de Bernini",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Pesagem do coração",
      "descricao": "Julgamento dos mortos na religião egípcia, em que o coração do falecido era pesado numa balança."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "No julgamento egípcio dos mortos, o que acontecia com o coração que pesasse mais que a pena colocada no outro prato da balança?",
    "resposta": "Era devorado por Ammit",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ammit"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ammit",
        "situacao": "ok",
        "texto": "Ammit (; Ancient Egyptian: ꜥm-mwt, \"Devourer of the Dead\"; also rendered Ammut or Ahemait) was an ancient Egyptian goddess with the forequarters of a lion, the hindquarters of a hippopotamus, and the head of a crocodile—the three largest \"man-eating\" animals known to ancient Egyptians. In ancient Egyptian religion, Ammit played an important role during the funerary ritual, the Judgment of the Dead\n[…]\nIn the Papyrus of Ani, Ammit is adorned with a tri-colored nemes, which were worn by pharaohs as a symbol of kingship.\n[…]\nAfter the declarations are recited, their heart is weighed. If the heart weighed less than the feather of Ma'at, the deceased was ruled to be pure. Thoth recorded the result and Osiris would allow the deceased to continue their voyage toward Aaru and immortality. If the heart was heavier than the feather of Ma'at, the deceased was deemed impure. Ammit would devour their heart, leaving the deceased without a soul.\n[…]\nAmmit is often depicted sitting in a crouched position near the scale, ready to eat the heart. Ancient Egyptians were buried with a copy of the Book of the Dead, guaranteeing they would be successful at the Judgment of the Dead. Thus, Ammit was left hungry without any hearts to eat, and the consecrated dead was then able to bypass the Lake of Fire, featured in Chapter 126 of the Book of the Dead.\n[…]\nSaba Mubarak portrays Ammit in the Marvel Cinematic Universe (MCU) television series Moon Knight (2022). In the Mummies Alive! cartoon series, the main villain Scarab accidentally summons Ammut, and she sticks around. In the show, she is a dog-like and rather small-sized pet who does not speak. In Rick Riordan's series The Kane Chronicles, Ammit is portrayed.\n[…]\nIn Primeval, Ammit was a Pristichampsus that came through an Anomaly (a gateway in time) to ancient Egypt, where people believed it to be a god.\n[…]\nMedia related to Ammit at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ammit",
        "situacao": "ok",
        "texto": "Ammit (pronúncia em português: [ˈamit]; \"devoradora\" ou \"comedora de almas\"; também conhecida como Ammut, Amut ou Ahemait - sendo \"Ahmait\" a pronúncia) , na mitologia egípcia, era um demónio fêmea na religião no Antigo Egito, a personificação da retribuição divina para todos os males realizados em vida. Ammit devora aqueles que eram julgados como pecadores, punindo os que não eram aceitos em Ament\n[…]\nUma fera com corpo misto de leão, hipopótamo e crocodilo (Descobertas recentes indicam que Ammit não possuía a cabeça de crocodilo e as patas dianteiras de leão, mas sim ao contrário) — os três maiores animais \"comedores de homens\" conhecidos pelos antigos egípcios.\n[…]\nEra conhecida como o \"Devoradora de Corações\", \"A Devoradora\" e \"Grande Morte\" porque ser um demónio de punição, uma divindade. A cadela do salão do julgamento dos mortos que, por suas vezes , após a morte eram julgados sua bondade por meio do seu coração na balança de Osíris  e dado o peso equivalente a seus atos em vida.\n[…]\nSe o coração do falecido pesasse mais que uma pena de avestruz, símbolo de Ma'at, a personificação da verdade e da justiça, a fera devorava o seu corpo, destruindo por completo a sua imagem. Sendo considerada culpada, a alma era destruída por Ammit, devorada e engolida, deixando definitivamente de existir. Existem papiros de autores desconhecidos que contêm orações para deixá-la longe na hora.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Osíris",
      "descricao": "Deus egípcio dos mortos e da ressurreição, marido de Ísis e pai de Hórus."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que deus egípcio, invejoso do irmão Osíris, o matou e espalhou os pedaços do corpo dele pelo Egito?",
    "resposta": "Set",
    "fonte": [
      "https://en.wikipedia.org/wiki/Osiris_myth"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Osiris_myth",
        "situacao": "ok",
        "texto": "The Osiris myth is the most elaborate and influential story in ancient Egyptian mythology. It concerns the murder of the god Osiris, a primeval king of Egypt, and its consequences. Osiris's murderer, his brother Set, usurps his throne. Meanwhile, Osiris's wife Isis restores her husband's body, allowing him to posthumously beget their son, Horus.\n[…]\nThus, Osiris was not only believed to enable rebirth for the dead; he renewed the sun, the source of life and maat, and thus renewed the world itself.\n[…]\nIn temple offering rituals, the officiating priest took on the role of Horus, the gifts to the deity became the Eye of Horus, and whichever deity received these gifts was momentarily equated with Osiris.\n[…]\nThe Greek and Roman cult of Isis developed a series of initiation rites dedicated to Isis and Osiris, based on earlier Greco-Roman mystery rites but colored by Egyptian afterlife beliefs. The initiate went through an experience that simulated descent into the underworld. Elements of this ritual resemble Osiris's merging with the sun in Egyptian funerary texts.\n[…]\nIsis's Greek and Roman devotees, like the Egyptians, believed that she protected the dead in the afterlife as she had done for Osiris, and they said that undergoing the initiation guaranteed to them a blessed afterlife. It was to a Greek priestess of Isis that Plutarch wrote his account of the myth of Osiris.\n[…]\nThrough the work of classical writers such as Plutarch, knowledge of the Osiris myth was preserved even after the middle of the first millennium AD, when Egyptian religion ceased to exist and knowledge of the writing systems that were originally used to record the myth were lost. The myth remained a major part of Western impressions of ancient Egypt.\n[…]\nPlutarch: Isis and Osiris, on LacusCurtius. Full text of On Isis and Osiris as translated by Frank Cole Babbitt."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mito_de_Os%C3%ADris",
        "situacao": "ok",
        "texto": "O Mito de Osíris é a mais elaborada e influente história da mitologia do antigo Egito. A história trata do assassinato do deus Osíris, um primitivo rei do Egito, e das suas consequências. O assassino de Osíris, o seu irmão Set, usurpou o seu trono. Entretanto, a esposa de Osíris, Ísis reconstituiu o corpo do seu marido permitindo, deste modo, a concepção póstuma de um filho com ela.\n[…]\nO mito, com o seu complexo simbolismo, é uma parte integrante das concepções egípcias da realeza e sucessão, conflito entre ordem e caos, e, em particular, morte e vida após a morte. Também mostra as características essenciais da personalidade de cada uma das quatro divindades, e muitos elementos da sua adoração na religião no Antigo Egito têm origem neste mito.\n[…]\nO mito de Osíris foi concebido por volta do século XXIV a.C., ou mesmo antes. Muitos dos seus elementos tiveram origem em ideias religiosas, mas o conflito entre Hórus e Set poderá ter sido parcialmente inspirado por lutas regionais durante a história ou pré-história do Egito. Os historiadores tentaram decifrar a natureza exata dos eventos que terão dado origem à história, mas sem chegar a conclusões concretas.\n[…]\nAlgumas partes do mito surgem numa vasta variedade de textos egípcios, textos funerários, feitiços e pequenos contos. Desta forma, o mito de Osíris é mais detalhado e coerente do que outros mitos antigos. No entanto, não existe nenhuma fonte que dê um relato completo do mito, e as fontes existentes variam muito nas suas versões dos acontecimentos.\n[…]\nO'Connor, David (2009). Abydos: Egypt's First Pharaohs and the Cult of Osiris. [S.l.]: Thames & Hudson. ISBN 0-500-39030-4\n[…]\nSmith, Mark (2008). Dieleman, Jacco; Wendrich, Willeke, eds. «Osiris and the Deceased». UCLA Encyclopedia of Egyptology. Department of Near Eastern Languages and Cultures, UC Los Angeles. Consultado em 5 de junho de 2012",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Pandora",
      "descricao": "Primeira mulher da mitologia grega, segundo Hesíodo, que libertou os males no mundo."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Segundo o poeta Hesíodo, que deus ferreiro moldou Pandora com terra e água, a mando de Zeus?",
    "resposta": "Hefesto",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pandora"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pandora",
        "situacao": "ok",
        "texto": "In Greek mythology, Pandora was the first human woman, created by Hephaestus on the instructions of Zeus. As Hesiod related it, each deity cooperated by giving her unique gifts. Her other name—inscribed against her figure on a white-ground kylix in the British Museum—is Anesidora.\n[…]\nThe Pandora myth first appeared in lines 560–612 of Hesiod's poem in epic meter, the Theogony (c. 8th–7th centuries BCE), without ever giving the woman a name. After humans received the stolen gift of fire from Prometheus, an angry Zeus decides to give humanity a punishing gift to compensate for the boon they had been given. He commands Hephaestus to mold from earth the first woman, a \"beautiful evil\" whose descendants would torment the human race.\n[…]\nAs the life-bringing goddess Pandora is eclipsed, the death-bringing human Pandora arises.\" Thus, Harrison concludes \"in the patriarchal mythology of Hesiod her great figure is strangely changed and diminished. She is no longer Earth-Born, but the creature, the handiwork of Olympian Zeus.\" (Harrison 1922:284). Robert Graves, quoting Harrison, asserts of the Hesiodic episode that \"Pandora is not a genuine myth, but an anti-feminist fable, probably of his own invention.\" H. J.\n[…]\nBeall, E. \"The Contents of Hesiod's Pandora Jar: Erga 94–98,\" Hermes 117 (1989) 227–30.\n[…]\nVerdenius, Willem Jacob, A Commentary on Hesiod Works and Days vv 1–382 (Leiden: E.J. Brill, 1985). ISBN 90-04-07465-1. This work has a very in-depth discussion and synthesis of the various theories and speculations about the Pandora story and the jar. Cf. p. 62 and onwards.\n[…]\nZarecki, Jonathan P., \"Pandora and the Good Eris in Hesiod\", Greek, Roman, and Byzantine Studies 47 (2007) 5–29\n[…]\nThe Warburg Institute Iconographic Database (images of Pandora)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pandora",
        "situacao": "ok",
        "texto": "Pandora (em grego clássico: Πανδώρα, \"a que tudo dá\", \"a que possui tudo\", \"a que tudo tira\"), na mitologia grega, foi a primeira mulher, criada por Hefesto e Atena a pedido de Zeus com o fim de agradar aos homens.\n[…]\nSegundo o mito, Zeus ficou enfurecido com os humanos, que receberam a arte de fazer o fogo de Prometeu, e decidiu dar à humanidade um \"presente\" que resultaria em punição, para compensar a vantagem que eles receberam de Prometeu. Desse modo, ordenou a Hefesto (artista celestial, deus do fogo, dos metais e da metalurgia) que moldasse da terra a primeira mulher, uma \"bela maldade\", cujos descendentes atormentariam a raça humana.\n[…]\nNesta versão também, por ordem de Zeus, Hefesto molda em barro uma adorável moça, Atena lhe ensina as artes da tecelagem, Afrodite a embeleza, e Hermes lhe dá \"uma mente despudorada e uma natureza enganosa\" (67-8). As cárites e as horas a adornaram, e por fim Hermes lhe deu a voz e um nome, Pandora, porque \"todos os que habitam o Olimpo lhe deram um presente, uma praga para aqueles que comem pão\" (81-2). E Hermes a leva a Epimeteu, que a recebe.\n[…]\nUma ânfora do século V a.C., mostra Pandora subindo da terra (anodos) na presença de Hefesto, Hermes e Zeus. Essa representação era comum para a deusa da terra (como Gaia ou outra de suas formas).\n[…]\n\"Pandora é, no ritual e na mitologia matriarcal, a terra como Kore, mas na mitologia patriarcal de Hesíodo sua grande figura é estranhamente transformada e diminuída.\"\n[…]\nHesíodo. Os Trabalhos e os Dias São Paulo: Iluminuras, 1990.\n[…]\nALVARENGA CHANOCA, Tatiana. \"O lugar do mito de Pandora nos poemas de Hesíodo: Teogonia 570-612 e Os trabalhos e os dias 54-104.\" Ágora: Estudos Clássicos em Debate 21 (2019).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Cavalo de Troia",
      "descricao": "Cavalo de madeira oco usado pelos gregos para entrar em Troia e conquistar a cidade."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Segundo a tradição, que herói grego famoso pela astúcia teve a ideia do cavalo de madeira que levou à queda de Troia?",
    "resposta": "Ulisses",
    "fonte": [
      "https://en.wikipedia.org/wiki/Trojan_Horse"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Trojan_Horse",
        "situacao": "ok",
        "texto": "In Greek mythology, the Trojan Horse (Greek: δούρειος ἵππος, romanized: doureios hippos, lit. 'wooden horse') was a wooden horse said to have been used by the Greeks during the Trojan War to sneak into the city of Troy and win the war. The Trojan Horse is not mentioned in Homer's Iliad, with the poem ending before the war is concluded, and it is only briefly mentioned in the Odyssey.\n[…]\nA more speculative theory, originally proposed by Fritz Schachermeyr, is that the Trojan Horse is a metaphor for a destructive earthquake that damaged the walls of Troy and allowed the Greeks inside. In his theory, the horse represents Poseidon, who as well as being god of the sea was also god of horses and earthquakes.\n[…]\nOther early depictions are found on two relief pithoi from the Greek islands Mykonos and Tinos, both generally dated between 675 and 650 BC. The one from Mykonos (see figure at the top of this article) is known as the Mykonos vase. Historian Michael Wood dates the Mykonos vase to the eighth century BC, before the written accounts attributed by tradition to Homer, and posits this as evidence that the story of the Trojan Horse existed before those accounts were written.\n[…]\nOther archaic representations of the Trojan horse are found on a Corinthian aryballos dating back to 560 BC (see figure), on a vase fragment to 540 BC (see figure), and on an Etruscan carnelian scarab. An Attic red-figure fragment from a kalyx-krater dated to around 400 BC depicts the scene where the Greeks are climbing down the Trojan Horse,  represented by the wooden hatch door.\n[…]\nThe term \"Trojan horse\" is used metaphorically for any tactic that lures a target into admitting a concealed threat into a protected space by disguising harmful intent behind a benign exterior and enabling deception or subversion from within.\n[…]\nMedia related to Trojan horse at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cavalo_de_Troia",
        "situacao": "ok",
        "texto": "O Cavalo de Troia foi um grande cavalo de madeira supostamente construído pelos gregos durante a Guerra de Troia, como um estratagema decisivo para a conquista da cidade fortificada de Troia, cujas ruínas estão em terras hoje turcas. Tomado pelos troianos como um símbolo de sua vitória, foi carregado para dentro das muralhas, sem saberem que em seu interior se ocultava o inimigo.\n[…]\nAssim, o ardiloso diz considerar-se livre da lealdade para com sua antiga pátria, invoca os deuses como testemunha e, amaldiçoando os gregos, acrescenta que o cavalo havia sido construído por ordem expressa de Atena, para desagravar a profanação do paládio troiano, imagem consagrada à deusa e roubada antes por Ulisses e Diomedes, crime pelo qual não teriam sucesso na guerra.\n[…]\nA história foi repetida com variações por escritores tardios, como Quinto de Esmirna, Higino e João Tzetzes. Quinto disse que no cavalo penetraram trinta homens, e o Pseudo-Apolodoro, que foram cinquenta. Apolodoro também deu outros detalhes: atribuiu a Ulisses a ideia de construir o cavalo, e a Apolo o envio das serpentes; disse que o cavalo portava a inscrição \"Para seu regresso à pátria, os gregos dedicam este cavalo a Atena\", e mudou um pouco a ordem dos eventos.\n[…]\nEmbora seja bastante possível que a Guerra de Troia tenha ocorrido, o famoso cavalo, na forma como ele foi descrito pelos antigos, provavelmente é uma lenda, mas pode ter sido algum aparato real transformado fantasiosamente pela tradição. Na Antiguidade o \"cavalo\" era uma derivação de uma máquina de guerra, o aríete, muitas vezes construído na forma de um animal. Os assírios costumavam usar máquinas deste tipo, e é possível que o exemplo tenha sido tomado pelos gregos.\n[…]\nOperação Cavalo de Troia é o título de uma série de nove livros ficcionais de Juan José Benítez, que alcançou considerável sucesso internacional.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Dioniso",
      "descricao": "Deus grego do vinho, das festas e do teatro, filho de Zeus e da mortal Sêmele."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Quando a mãe de Dioniso morreu durante a gravidez, Zeus costurou o bebê em que parte do próprio corpo até ele nascer?",
    "resposta": "Coxa",
    "fonte": [
      "https://en.wikipedia.org/wiki/Dionysus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Dionysus",
        "situacao": "ok",
        "texto": "In ancient Greek religion and myth, Dionysus ( ; Ancient Greek: Διόνυσος Diónysos) is the god of wine-making, orchards, fruit, vegetation, fertility, festivity, insanity, ritual madness, religious ecstasy, and theatre. He was also known as Bacchus ( or ; Ancient Greek: Βάκχος Bacchos) by the Greeks (a name later adopted by the Romans) for a frenzy he is said to induce called baccheia.\n[…]\nWhen Zeus decided it was time to impose a new order on humanity, for it to \"pass from the nomadic to a more civilized mode of life\", he sent his son Dionysus from India as a god made visible, spreading his worship and giving the vine as a symbol of his manifestation among mortals.\n[…]\nAnother version is that Dionysus was taken to the rain-nymphs of Nysa, who nourished his infancy and childhood, and for their care Zeus rewarded them by placing them as the Hyades among the stars (see Hyades star cluster). In yet another version of the myth, he is raised by his cousin Macris on the island of Euboea.\n[…]\nAs it is, the Greek story has it that no sooner was Dionysus born than Zeus sewed him up in his thigh and carried him away to Nysa in Ethiopia beyond Egypt; and as for Pan, the Greeks do not know what became of him after his birth. It is therefore plain to me that the Greeks learned the names of these two gods later than the names of all the others, and trace the birth of both to the time when they gained the knowledge.\n[…]\nAnother account about Dionysus's parentage indicates that he is the son of Zeus and Gê (Gaia), also named Themelê (foundation), corrupted into Semele.\n[…]\nPindar describes the \"pure light of high summer\" as closely associated with Dionysus and possibly even an embodiment of the god himself. An image of Dionysus's birth from Zeus's thigh calls him \"the light of Zeus\" (Dios phos) and associates him with the light of Sirius.\n[…]\nIconographic Themes in Art: Bacchus |Dionysos"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dioniso",
        "situacao": "ok",
        "texto": "Dioniso ou Dionísio (em grego:  Διόνυσος, transl.: Dionysos) ou Baco (em grego:  Βάκχος, transl.: Bákchos) é na antiga religião grega o deus dos ciclos vitais, das festas, do vinho, da insânia, do teatro, dos ritos religiosos e, sobretudo, da intoxicação que funde o bebedor com a deidade. Foi o último deus aceito no Olimpo, filho de Zeus e da princesa Sêmele, também foi o único olimpiano filho de \n[…]\nZeus engravidou Sêmele, sem o conhecimento de Hera, e prometeu a Sêmele que esta poderia pedir o que quisesse; enganada por Hera, ela pediu que Zeus se mostrasse a ela na sua forma real, como ele se mostrava para Hera. Sem poder recusar, Zeus aparece em uma carruagem de raios e trovões, e Sêmele morre, por causa do susto; Zeus pega o bebê prematuro de seis meses, e o cria na sua coxa.\n[…]\nZeus retirou do fogo a criança abortada no sexto mês de gestação e coseu-o na sua coxa. No momento oportuno, Zeus desfez os pontos de costura e deu à luz Dioniso. Confiou-o a Hermes, e este passou-o a Ino, irmã de Sêmele e Athamas, que os criou. Quando Hera soube da localização de Dioniso, fez o casal enlouquecer, levando-os a matar a si mesmos e os próprios filhos.\n[…]\nNa mitologia romana, Dioniso tornou-se Baco, que se transforma em leão para lutar e devorar os gigantes que escalavam o céu e depois foi considerado por Zeus como o mais poderoso dos deuses.\n[…]\nAlém da versão romana Baco (Baccus) também era chamado: Dendrites (\"aquele das árvores\", referente a fertilidade atribuída a ele), Bromios ( \"aquele que faz trovejar\" ou \"aquele que grita alto\"), Lesbos Enorches ou apenas Enorches (\"nos testículos\", em referência ao mito de que Dioniso, após a morte de sua mãe ainda grávida dele, terminou de ser gerado nas coxas de seu pai Zeus, ou seja, próximo aos seus testículos), Eleutherios ( \"o libertador\", epíteto tanto para Dioniso quanto para Eros).\n[…]\nFestas dionisíacas\n[…]\nApolíneo e Dionisíaco",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Rômulo e Remo",
      "descricao": "Irmãos gêmeos da lenda da fundação de Roma, amamentados por uma loba."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Segundo a lenda da fundação de Roma, os gêmeos Rômulo e Remo foram abandonados ainda bebês num cesto às margens de qual rio?",
    "resposta": "Tibre",
    "fonte": [
      "https://en.wikipedia.org/wiki/Romulus_and_Remus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Romulus_and_Remus",
        "situacao": "ok",
        "texto": "In Roman mythology, Romulus and Remus (Latin: [ˈroːmʊlʊs], [ˈrɛmʊs]) are twin brothers whose story tells of the events that led to the founding of the city of Rome and the Roman Kingdom by Romulus, following his fratricide of Remus. The image of a she-wolf suckling the twins in their infancy has been a symbol of the city of Rome and the ancient Romans since at least the 3rd century BC.\n[…]\nThis work contains a variety of versions of the story. In one, there is a reference to a woodpecker bringing the boys food during the time they were abandoned in the wild. In one account of the conflict with Amulius, the capture of Remus is not mentioned. Instead, Romulus, upon being told of his true identity and the crimes suffered by him and his family at the hands of the Alban king, simply decided to avenge them.\n[…]\nThe Franks Casket, an Anglo-Saxon ivory box (early 7th century AD), shows Romulus and Remus in an unusual setting, two wolves instead of one, a grove instead of one tree or a cave, four kneeling warriors instead of one or two gesticulating shepherds. According to one interpretation, and as the runic inscription (\"far from home\") indicates, the twins are cited here as the Dioscuri, helpers at voyages such as Castor and Polydeuces.\n[…]\nAlien: Romulus, a 2024 horror science fiction film drawing on the mythology of Romulus and Remus.\n[…]\nRomulus of Fiesole, a 1st-century saint who was also abandoned in the wild and nursed by a she-wolf.\n[…]\nTennant, PMW (1988). \"The Lupercalia and the Romulus and Remus Legend\" (PDF). Acta Classical. XXXI: 81–93. ISSN 0065-1141. Archived from the original (PDF) on 10 May 2017. Retrieved 19 November 2016.\n[…]\nPlutarch, the Life of Romulus\n[…]\nRomulus and Remus (Romwalus and Reumwalus) and two wolves on the Franks Casket: Franks Casket, Helpers on the way to war\n[…]\nRomulous and Remus on the Ara Pacis Augustae"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/R%C3%B4mulo_e_Remo",
        "situacao": "ok",
        "texto": "Rômulo (português brasileiro) ou Rómulo (português europeu) e Remo são, segundo a mitologia romana, dois irmãos gêmeos, um dos quais, Rômulo, foi o fundador da cidade de Roma e seu primeiro rei. Segundo a lenda, eram filhos de Marte e de Reia Sílvia.\n[…]\nCerca de 400 anos depois, o filho e legítimo herdeiro do décimo-segundo rei de Alba Longa, Numitor, é deposto por um estratagema de seu irmão Amúlio. Para garantir o trono, Amúlio assassina os descendentes varões de Numitor e obriga sua sobrinha, Reia Sílvia, a tornar-se vestal (sacerdotisa virgem, consagrada à deusa Vesta). No entanto, Reia Sílvia engravida do deus Marte, gerando os gêmeos Rômulo e Remo. Como punição, Amúlio prende Reia Sílvia em um calabouço e manda jogar seus filhos no Tibre.\n[…]\nPercebendo que não teriam futuro na cidade, os gêmeos decidem partir junto com todos os indesejáveis, para fundarem uma nova cidade, no local onde haviam sido abandonados. Rômulo queria chamá-la Roma e edificá-la no Palatino, enquanto Remo desejava nomeá-la Remora e fundá-la sobre o Aventino. Como forma de decidir foi estabelecido que se deveria indicar, através dos auspícios, quem seria escolhido para dar o nome à nova cidade e reinar depois da fundação.\n[…]\nEm uma outra versão Rômulo é assassinado por ordem do senado romano.\n[…]\nEm novembro de 2007, arqueólogos italianos anunciaram que tinham descoberto a caverna em que os romanos celebravam a festa da Lupercália e onde, segundo a lenda, Rômulo e Remo supostamente viveram. O especialista Andrea Carandini disse que isto é um dos maiores achados arqueológicos já feitos. A identificação da caverna não foi unânime. No entanto, arqueólogos como Fausto Zevi consideram que é na verdade, uma dependência do palácio imperial.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Kitsune",
      "descricao": "Raposa mágica do folclore japonês, capaz de mudar de forma."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "No folclore japonês, a raposa mágica kitsune ganha caudas à medida que envelhece e fica mais sábia. Quantas caudas tem a mais poderosa delas?",
    "resposta": "Nove",
    "distratores": [
      "Sete",
      "Cinco",
      "Doze"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Kitsune"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Kitsune",
        "situacao": "ok",
        "texto": "The kitsune (狐, きつね; IPA: [kʲi̥t͡sɨne̞] ), in popular Japanese folklore, is a fox or fox spirit which possesses the supernatural ability to shapeshift or bewitch other life forms.\n[…]\nKitsune, though literally a 'fox', becomes in folklore a 'fox spirit', and a type of yōkai. They are ascribed intelligence and magical or supernatural powers, especially with long-living foxes.\n[…]\nTales distinguish kitsune gifts from kitsune payments. If a kitsune offers a payment or reward that includes money or material wealth, part or all of the sum will consist of old paper, leaves, twigs, stones, or similar valueless items under a magical illusion. True kitsune gifts are usually intangibles, such as protection, knowledge, or long life.\n[…]\nAs aforementioned, the fox wife in the Nihon ryōiki tale gave rise to the ancestral line of the Kitsune-no-atae clan, and a woman of great strength named \"Mino kitsune\" belonged to that heritage.\n[…]\nIt is held that the fox jewel is necessary for the fox to change shape, or use its magical power. Another tradition is that the pearl represents the kitsune's soul; the kitsune will die if separated from it for too long.\n[…]\nIn the popular manga and anime series Naruto, the protagonist Naruto Uzumaki has a nine-tailed fox, also called kyubi or Kurama, sealed inside him, which he uses in combat. Beginning in Super Mario 3D Land (2011), the playable character Luigi can collect a power-up known as the Super Leaf to transform into Kitsune Luigi.\n[…]\nJapanese metal idol band Babymetal refer to the kitsune myth in their lyrics and include the use of fox masks, hand signs, and animation interludes during live shows.\n[…]\nMedia related to Kitsune at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Kitsune",
        "situacao": "ok",
        "texto": "Kitsune (AFI: [kitsɯne]) japonês: 狐;  é a palavra japonesa para raposa. Raposas são um tema recorrente no folclore japonês; kitsune refere-se geralmente a isso neste contexto. As histórias as descrevem como seres inteligentes e dotados de capacidades mágicas que aumentam com a sua idade e sabedoria. Entre esses poderes mágicos, destaca-se a habilidade de assumir a forma humana — geralmente a de um\n[…]\nKitsune é uma palavra arcaica; no japonês moderno, o som emitido por uma raposa é transcrito como kon kon ou gon gon.\n[…]\nMuitos dos mitos de raposas do Japão podem ser encontrados no folclore da China, da Coreia ou da Índia. Esses mitos populares contam histórias de raposas capazes de ter até nove caudas. Várias dessas histórias foram registradas no Konjaku Monogatari, uma coleção do século XI de narrativas chinesas, indianas e japonesas.\n[…]\nFisicamente, as kitsune são reconhecidas por possuírem nove caudas. Em geral, um maior número de caudas indica uma raposa mais velha e mais poderosa; segundo os folclores, uma nova cauda crescerá a cada 100 anos de vida. Um, cinco, sete e nove caudas são os números mais comuns nas histórias. Quando uma kitsune recebe sua nona cauda, sua pelagem torna-se prateada ou dourada.\n[…]\nEssas Kyūbi no Kitsune (九尾の狐; raposas de nove caudas) ganham a capacidade de ver e ouvir qualquer coisa em qualquer parte do mundo, adquirindo também sabedoria infinita (onisciência).\n[…]\nEm Tales of Symphonia, Corine, o espírito que deveria ter sido criado pelo homem que acompanha Sheena Fujibayashi, tem aparência de raposa com três caudas. Após sua morte causada pelo espírito do relâmpago, Volt, Corine torna-se Vérius, o espírito do coração, com aparência de uma kitsune adulta de nove caudas.\n[…]\nNo jogo League of Legends, a campeã Ahri é uma raposa fêmea de nove caudas.\n[…]\nNo anime Yu Yu Hakusho, Youko Kurama pode se transformar em uma raposa de nove caudas.\n[…]\nKoryo: Kitsune amaldiçoada.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Cérbero",
      "descricao": "Cão monstruoso da mitologia grega que guardava a entrada do mundo dos mortos."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Na forma mais conhecida, quantas cabeças tinha Cérbero, o cão que guardava a entrada do mundo dos mortos grego?",
    "resposta": "Três",
    "fonte": [
      "https://en.wikipedia.org/wiki/Cerberus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cerberus",
        "situacao": "ok",
        "texto": "In Greek mythology, Cerberus (  or ; Ancient Greek: Κέρβερος Kérberos [ˈkerberos]), often referred to as the hound of Hades, is a multi-headed dog that guards the gates of the underworld to prevent the dead from leaving. He was the offspring of the monsters Echidna and Typhon, and was usually described as having three heads, a serpent for a tail, and snakes protruding from his body. Cerberus is pr\n[…]\nThe etymology of Cerberus' name is uncertain. Daniel Ogden refers to attempts to establish an Indo-European etymology as \"not yet successful\". It has been claimed to be related to the Sanskrit word सर्वरा sarvarā, used as an epithet of one of the dogs of Yama, from a Proto-Indo-European word *k̑érberos, meaning \"spotted\". Lincoln (1991), among others, critiques this etymology. This etymology was also rejected by Manfred Mayrhofer, who proposed an Austro-Asiatic origin for the word, and by Beekes.\n[…]\nLincoln notes a similarity between Cerberus and the Norse mythological dog Garmr, relating both names to a Proto-Indo-European root *ger- \"to growl\" (perhaps with the suffixes -*m/*b and -*r). However, as Ogden observes, this analysis actually requires Kerberos and Garmr to be derived from two different Indo-European roots (*ker- and *gher- respectively), and so does not actually establish a relationship between the two names.\n[…]\nFinally, there is a version where Cerberus eats Pirithous.\n[…]\nIn 1988 the Massachusetts Institute of Technology (MIT) developed Kerberos, a computer-network authentication protocol, named after Cerberus.\n[…]\nOf the 2023 European heatwaves, the most significant was named the \"Cerberus Heatwave\", which brought the hottest temperatures ever recorded in Europe.\n[…]\nMedia related to Cerberus (mythology) at Wikimedia Commons\n[…]\nThe dictionary definition of Cerberus at Wiktionary\n[…]\nChisholm, Hugh, ed. (1911). \"Cerberus\". Encyclopædia Britannica (11th ed.). Cambridge University Press."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/C%C3%A9rbero",
        "situacao": "ok",
        "texto": "Cérbero (em grego clássico: Κέρβερος; romaniz.: Kerberos – trad.: “demónio do poço”; em latim: Cerberus), na mitologia grega, era um monstruoso cão de três cabeças que guardava a entrada do mundo inferior, o reino subterrâneo dos mortos, deixando as almas entrarem, mas jamais saírem e despedaçando os mortais que por lá se aventurassem.\n[…]\nCérbero era um cão com várias cabeças, não se têm um número certo, mas na maioria das vezes é descrito como tricéfalo (três cabeças). Sua cauda também não é sempre descrita da mesma forma, às vezes como de dragão, como de cobra ou mesmo de cão. Às vezes, junto com sua cabeça são encontradas serpentes cuspidoras de fogo saindo de seu pescoço, e até mesmo de seu tronco.\n[…]\nPara acalmar a fúria de Cérbero, os mortos que residiam no submundo jogavam-lhe um bolo de farinha e mel que os seus entes queridos haviam deixado no túmulo.\n[…]\nA deusa Atena, e Hermes, mensageiro dos deuses, apresentaram-se a ele, acompanhando-o até à sombria caverna, pelo túnel longo e escuro que levava às portas a um maldito e obscuro mundo infinito (inferno). Ao percebê-los, as três cabeças de Cérbero puseram-se a uivar de maneira horrível, o que chamou a atenção de Hades; mas ao ver um deus e uma deusa em companhia de Héracles, perguntou-lhes o que procuravam.\n[…]\nEntão Héracles aproximou-se de Cérbero e, apesar de suas três enormes bocarras guarnecidas de dentes afiados e cruéis, ergueu o animal aos ombros e subiu pelo caminho que levava da caverna tenebrosa à luz do dia. O caminho era longo, áspero e íngreme, e pesada a sua carga; as três cabeças rosnavam e mordiam, durante todo o trajeto, porém Héracles, concentrando-se no pensamento de próxima libertação, não lhes dava atenção. Afinal chegou a Micenas.\n[…]\nOrtros (cão de duas cabeças, irmão de Cérbero)\n[…]\nCérbero - Encyclopedia Mythica (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
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
