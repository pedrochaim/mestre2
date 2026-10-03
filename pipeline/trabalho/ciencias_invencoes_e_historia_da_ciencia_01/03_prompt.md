Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Invenções e História da Ciência** (tema **Ciências**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Velcro",
      "descricao": "Sistema de fechamento por ganchos e laçadas inventado pelo engenheiro suíço George de Mestral nos anos 1940."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome velcro junta duas palavras francesas. Uma é velours, que quer dizer veludo. Qual é a outra?",
    "resposta": "Crochet, que significa gancho",
    "fonte": [
      "https://en.wikipedia.org/wiki/Velcro"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Velcro",
        "situacao": "ok",
        "texto": "Velcro is a brand of versatile fastening devices, known as hook-and-loop fasteners, hook-and-pile fasteners, or touch fasteners, that allow two surfaces to be repeatedly attached and detached with ease. A trademark of Velcro Companies, the brand name is often used generically to refer to this type of fastener. Invented in the mid-20th century, it is widely used in clothing, accessories, and variou\n[…]\nThe original hook-and-loop fastener was conceived in 1941 by Swiss engineer George de Mestral, which he named velcro. The word Velcro is a portmanteau of two French words: \"velours\" meaning velvet, and \"crochet\" meaning hook. The idea came to him one day after he returned from a hunting trip with his dog in the Alps. He took a close look at the burs of burdock that kept sticking to his clothes and his dog's fur.\n[…]\nNASA makes significant use of hook-and-loop fasteners. Each Space Shuttle flew equipped with ten thousand inches of a special fastener made of Teflon loops, polyester hooks, and glass backing. Hook-and-loop fasteners are widely used, from the astronauts' suits, to anchoring equipment. In the near weightless conditions in orbit, hook-and-loop fasteners are used to temporarily hold objects and keep them from floating away.\n[…]\nThere is a silent version of hook-and-loop fasteners, sometimes called Quiet Closures.\n[…]\nASTM D5170-98 (2010) Standard Test Method for Peel Strength (\"T\" Method) of Hook and Loop Touch Fasteners\n[…]\nVelcro jumping is a game where people wearing hook-covered suits take a running jump and hurl themselves as high as possible at a loop-covered wall. The wall is inflated, and looks similar to other inflatable structures. It is not necessarily completely covered in the material—often there will be vertical strips of hooks. Sometimes, instead of a running jump, people use a small trampoline.\n[…]\nMedia related to Hook-and-loop fasteners at Wikimedia Commons"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Velcro",
      "descricao": "Sistema de fechamento por ganchos e laçadas inventado pelo engenheiro suíço George de Mestral nos anos 1940."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "O que grudou no pelo do cachorro do engenheiro suíço George de Mestral, depois de um passeio, e lhe deu a ideia do velcro?",
    "resposta": "Carrapichos de bardana",
    "fonte": [
      "https://en.wikipedia.org/wiki/Velcro",
      "https://en.wikipedia.org/wiki/George_de_Mestral"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Velcro",
        "situacao": "ok",
        "texto": "Velcro is a brand of versatile fastening devices, known as hook-and-loop fasteners, hook-and-pile fasteners, or touch fasteners, that allow two surfaces to be repeatedly attached and detached with ease. A trademark of Velcro Companies, the brand name is often used generically to refer to this type of fastener. Invented in the mid-20th century, it is widely used in clothing, accessories, and variou\n[…]\nThe original hook-and-loop fastener was conceived in 1941 by Swiss engineer George de Mestral, which he named velcro. The word Velcro is a portmanteau of two French words: \"velours\" meaning velvet, and \"crochet\" meaning hook. The idea came to him one day after he returned from a hunting trip with his dog in the Alps. He took a close look at the burs of burdock that kept sticking to his clothes and his dog's fur.\n[…]\nVelcro Corporation products were displayed at a fashion show at the Waldorf-Astoria hotel in New York in 1959, and the fabric got its first break when it was used in the aerospace industry to help astronauts maneuver in and out of bulky space suits. However, this use reinforced the view among the populace that hook-and-loop was something with very limited utilitarian uses.\n[…]\nVelcro jumping is a game where people wearing hook-covered suits take a running jump and hurl themselves as high as possible at a loop-covered wall. The wall is inflated, and looks similar to other inflatable structures. It is not necessarily completely covered in the material—often there will be vertical strips of hooks. Sometimes, instead of a running jump, people use a small trampoline.\n[…]\n2002 – The Star Trek: Enterprise episode \"Carbon Creek\" portrays Velcro as being introduced to human society by Vulcans in 1957. One of the Vulcans in the episode is named \"Mestral\", after the fastener's actual inventor and founder of the brand.\n[…]\nMedia related to Hook-and-loop fasteners at Wikimedia Commons"
      },
      {
        "url": "https://en.wikipedia.org/wiki/George_de_Mestral",
        "situacao": "ok",
        "texto": "George de Mestral ((1907-06-19)19 June 1907 – (1990-02-08)8 February 1990) was a Swiss electrical engineer who invented the hook and loop fastener which he named Velcro.\n[…]\nDe Mestral died in Commugny, Switzerland, where he is buried. The municipality posthumously named an avenue, L'avenue George de Mestral, in his honour.\n[…]\nHe was inducted into the National Inventors Hall of Fame in 1999 for inventing hook and loop fasteners.\n[…]\nDe Mestral first conceptualised hook and loop after returning from a hunting trip with his dog in the Alps in 1941. After removing several of the burdock burrs (seeds) that kept sticking to his clothes and his dog's fur, he became curious as to how it worked. He examined them under a microscope, and noted hundreds of \"hooks\" that caught on anything with a loop, such as clothing, animal fur, or hair.\n[…]\nDe Mestral gave the name Velcro, a portmanteau of the French words velours (\"velvet\"), and crochet (\"hook\"), to his invention as well as his company, which continues to manufacture and market the fastening system.\n[…]\nHowever, hook and loop's integration into the textile industry took time, partly because of its appearance. Hook and loop in the early 1960s looked like it had been made from left-over bits of cheap fabric, an unappealing aspect for clothiers. The first notable use for Velcro® brand hook and loop came in the aerospace industry, where it helped astronauts manoeuvre in and out of bulky space suits. Eventually, skiers noted the similar advantages of a suit that was easier to get in and out of.\n[…]\n\"George de Mestral\" in  German, French and Italian in the online Historical Dictionary of Switzerland."
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "R.U.R.",
      "descricao": "Peça de teatro de ficção científica do escritor tcheco Karel Čapek, de 1920, que popularizou a palavra robô."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "A palavra robô, popularizada por uma peça de teatro tcheca de 1920, vem de um termo que significava o quê?",
    "resposta": "Trabalho forçado",
    "distratores": [
      "Homem mecânico",
      "Servo de metal",
      "Boneco animado"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/R.U.R.",
      "https://en.wikipedia.org/wiki/Robot"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/R.U.R.",
        "situacao": "ok",
        "texto": "R.U.R. is a 1920 science fiction play by the Czech writer Karel Čapek. \"R.U.R.\" stands for Rossumovi Univerzální Roboti (Rossum's Universal Robots, a phrase that has been used as a subtitle in English versions).\n[…]\nHelena, the daughter of the president of a major industrial power, arrives at the island factory of Rossum's Universal Robots. Here, she meets Domin, the General Manager of R.U.R., who relates to her the history of the company. Rossum had come to the island in 1920 to study marine biology. In 1932, Rossum had invented a substance like organic matter, though with a different chemical composition. He argued with his nephew about their motivations for creating artificial life.\n[…]\nIn secret, Helena burns the formula required to create robots. The revolt of the robots reaches Rossum's island as the act ends.\n[…]\nThe robots described in Čapek's play are not robots in the popularly understood sense of an automaton. They are not mechanical devices, but rather artificial\n[…]\nIn the two-part Batman: The Animated Series episode \"Heart of Steel\", the scientist that created the HARDAC machine is named Karl Rossum. HARDAC created mechanical replicants to replace existing humans, with the ultimate goal of replacing all humans. One of the robots is seen driving a car with \"RUR\" as the license plate number.\n[…]\nIn the Norwegian TV series Blindpassasjer (1978), Rossum is the name of a planet ruled by robots.\n[…]\nThe Blake's 7 radio play The Syndeton Experiment (1999) included a character named Dr. Rossum who turned humans into robots.\n[…]\nIn Howard Chaykin's Time² graphic novels, Rossum's Universal Robots is a powerful corporation and maker of robots.\n[…]\nR.U.R. (Rossum's Universal Robots) at Project Gutenberg"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Robot",
        "situacao": "ok",
        "texto": "A robot is a machine, especially one programmable via a computer, capable of automatically carrying out a complex series of actions. A robot can be guided by an external or internal control device. Robots may be humanoid, but most are task-performing machines prioritizing functionality over aesthetics.\n[…]\nThe term robot came from the Czech language in 1923. The word was coined by Czech author Karel Capek, first used in his play R.U.R. (translated as Rossum's Universal Robots). The term comes from the Czech word robotník ('forced worker'), from robota 'forced labor, compulsory service, drudgery,' from robotiti 'to work, drudge', from an Old Czech source akin to Old Church Slavonic rabota (работа) 'servitude,' from rabu 'slave'.\n[…]\nThe word robot was introduced to the public by the Czech interwar writer Karel Čapek in his play R.U.R. (Rossum's Universal Robots), published in 1920. The play begins in a factory that uses a chemical substitute for protoplasm to manufacture living, simplified people called robots. The play does not focus in detail on the technology behind the creation of these living creatures, but in their appearance they prefigure modern ideas of androids, creatures who can be mistaken for humans.\n[…]\nThe collaborative robots most widely used in industries today are manufactured by Universal Robots in Denmark.\n[…]\nThey looked like real women and could not only speak and use their limbs but were endowed with intelligence and trained in handwork by the immortal gods.\" The words \"robot\" or \"android\" are not used to describe them, but they are nevertheless mechanical devices human in appearance. \"The first use of the word Robot was in Karel Čapek's play R.U.R. (Rossum's Universal Robots) (written in 1920)\". Writer Karel Čapek was born in Czechoslovakia (Czech Republic)."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/R.U.R.",
        "situacao": "ok",
        "texto": "R. U. R. é uma peça teatral de ficção científica de 1920 escrita pelo tcheco Karel Čapek. R. U. R. significa Rossumovi Univerzální Roboti (Robôs Universais de Rossum). A frase em inglês \"Rossum's Universal Robots\" foi usada como legenda na versão checa original. A peça estreou no dia 25 de janeiro de 1921, e introduziu a palavra \"robô\" em variados idiomas e na ficção científica como um todo.\n[…]\nA peça começa em uma fábrica que faz pessoas artificiais, chamadas de roboti (robôs), a partir de matéria orgânica sintética. Elas não são exatamente robôs na definição atual do termo: elas são criaturas de carne e osso que estão mais próximas do conceito moderno de clones do que de máquinas. Elas podem ser confundidas com humanos e podem pensar por si mesmas. Elas parecem felizes em trabalhar para os seres humanos inicialmente, mas uma rebelião de robôs leva à extinção da raça humana.\n[…]\nRobôs\n[…]\nA peça introduziu a palavra robô, que deslocou palavras mais antigas como \"automaton\" ou \"android\" em idiomas de todo o mundo. Em um artigo na Lidové noviny, Karel Capek nomeou seu irmão Josef Čapek (1887-1945) como o verdadeiro inventor da palavra. Em checo, robota significa trabalho forçado do tipo que os servos tinham que executar nas terras de seus mestres e é derivado de rab, que significa \"escravo\".\n[…]\nEm 2021, por meio de um financiamento coletivo, a editora Madrepérola lançou o livro RUR: Robôs Universais de Rossum, traduzido pelo autor de ficção científica Rogério Pietro. Nesta obra, além da tradução da peça de teatro, o autor escreveu a adaptação de RUR em forma de romance, sendo esta a primeira vez no mundo que a peça foi adaptada para o gênero narrativo. A tradução foi feita diretamente a partir do manuscrito original em tcheco.\n[…]\nNo romance gráfico de Howard Chaykin, Time2 (1987), a Rossum's Universal Robots é uma poderosa corporação criadora de robôs.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Vacina",
      "descricao": "Preparado biológico que estimula o sistema imunológico a criar proteção contra uma doença, cuja história começa com Edward Jenner e a varíola."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A palavra vacina vem do latim e lembra os experimentos de Edward Jenner contra a varíola. Ela deriva do nome de que animal?",
    "resposta": "Vaca",
    "fonte": [
      "https://en.wikipedia.org/wiki/Vaccine"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Vaccine",
        "situacao": "ok",
        "texto": "A vaccine is a biological preparation that provides active acquired immunity to a particular infectious or malignant disease. The safety and effectiveness of vaccines has been widely studied and verified. A vaccine typically contains an agent that resembles a disease-causing microorganism and is often made from weakened or killed forms of the microbe, its toxins, or one of its surface proteins.\n[…]\nThe terms vaccine and vaccination are derived from Variolae vaccinae (smallpox of the cow), the term devised by Edward Jenner (who both developed the concept of vaccines and created the first vaccine) to denote cowpox. He used the phrase in 1798 for the long title of his Inquiry into the Variolae vaccinae Known as the Cow Pox, in which he described the protective effect of cowpox against smallpox.\n[…]\nIn 1881, to honor Jenner, Louis Pasteur proposed that the terms should be extended to cover the new protective inoculations then being developed. The science of vaccine development and production is termed vaccinology.\n[…]\nVaccinations of animals are used both to prevent their contracting diseases and to prevent transmission of disease to humans. Both animals kept as pets and animals raised as livestock are routinely vaccinated. In some instances, wild populations may be vaccinated. This is sometimes accomplished with vaccine-laced food spread in a disease-prone area and has been used to attempt to control rabies in raccoons.\n[…]\nIn 1796, the physician Edward Jenner took pus from the hand of a milkmaid with cowpox, scratched it into the arm of an 8-year-old boy, James Phipps, and six weeks later variolated the boy with smallpox, afterwards observing that he did not catch smallpox. Jenner extended his studies and, in 1798, reported that his vaccine was safe in children and adults, and could be transferred from arm-to-arm, which reduced reliance on uncertain supplies from infected cows."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Vacina",
        "situacao": "ok",
        "texto": "Vacina é uma preparação biológica que fornece imunidade adquirida ativa para uma doença particular. Uma vacina tipicamente contém um agente que se assemelha a um microrganismo causador de doenças e é muitas vezes feita de formas enfraquecidas ou mortas do micróbio, das suas toxinas ou de uma das suas proteínas de superfície.\n[…]\nOs termos \"vacina\" e \"vacinação\" são derivados de Variolae vaccinae (varíola da vaca), o termo inventado por Edward Jenner para denotar a varíola bovina. Em 1881, para homenagear Jenner, Louis Pasteur propôs que os termos fossem estendidos para cobrir as novas inoculações protetoras então em desenvolvimento.\n[…]\nEm algum momento durante o final da década de 1760, enquanto servia de aprendiz de cirurgião/boticário, Edward Jenner soube da história, comum nas áreas rurais, de que os trabalhadores de laticínios nunca teriam a doença, muitas vezes fatal ou desfigurante, porque já haviam tido varíola bovina, que tem um efeito muito suave em seres humanos.\n[…]\nO século XX viu a introdução de várias vacinas bem-sucedidas, incluindo as contra a difteria, sarampo, caxumba e rubéola. As principais realizações incluíram o desenvolvimento da vacina contra a pólio na década de 1950 e a erradicação da varíola durante os anos 1960 e 1970. Maurice Hilleman foi o mais prolífico dos desenvolvedores das vacinas no século XX. À medida que as vacinas se tornaram mais comuns, muitas pessoas começaram a tomá-las como garantias.\n[…]\nTambém conhecida como vacina heteróloga ou \"vacinas de jennerianas\", são aquelas em que os patógenos são oriundos de outros animais, que não causam a doença ou causam apenas sintomas leves que podem ser tratados. Um exemplo clássico foi o uso da varíola bovina por Jenner quando testou sua hipótese sobre a imunização das ordenhadeiras.\n[…]\n«Vacinas.com.pt». Site português sobre vacinas",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "William Whewell",
      "descricao": "Filósofo e historiador da ciência inglês do século dezenove, professor em Cambridge."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "No século dezenove, o britânico William Whewell propôs uma palavra nova para designar os estudiosos da natureza, que usamos até hoje. Que palavra?",
    "resposta": "Cientista",
    "fonte": [
      "https://en.wikipedia.org/wiki/William_Whewell",
      "https://en.wikipedia.org/wiki/Scientist"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/William_Whewell",
        "situacao": "ok",
        "texto": "William Whewell ( HEW-əl; 24 May 1794 – 6 March 1866) was an English polymath. He was Master of Trinity College, Cambridge. In his time as a student there, he achieved distinction in both poetry and mathematics.\n[…]\nLaw of three stages for Whewell's opposition to Auguste Comte's positivism\n[…]\nYeo, Richard. \"Whewell, William (1794–1866)\". Oxford Dictionary of National Biography (online ed.). Oxford University Press. doi:10.1093/ref:odnb/29200. (Subscription, Wikipedia Library access or UK public library membership required.)\n[…]\nYeo, R. (1991), Defining Science: William Whewell, Natural Knowledge and Public Debate in Early Victorian Britain, Cambridge: Cambridge University Press.\n[…]\nZamecki, Stefan, Komentarze do naukoznawczych poglądów Williama Whewella (1794–1866):  studium historyczno-metodologiczne [Commentaries to the Logological Views of William Whewell (1794–1866):  A Historical-Methodological Study], Warsaw, Wydawnictwa IHN PAN, 2012, ISBN 978-83-86062-09-6, English-language summary: pp. 741–43.\n[…]\nWilliam Whewell (1794–1866) by Menachem Fisch, from The Routledge Encyclopedia of Philosophy\n[…]\nWilliam Whewell by Laura J. Snyder, from Stanford Encyclopedia of Philosophy\n[…]\nWilliam Whewell from History of Economic Thought\n[…]\nPapers of William Whewell Archived 17 March 2019 at the Wayback Machine\n[…]\n\"William Whewell\" at The MacTutor History of Mathematics archive\n[…]\nSharon Carleton (23 June 2018). \"William Whewell – coined osmosis, conductivity, ion and scientist!\". The Science Show (mp3 podcast). ABC News (Australia).\n[…]\nWorks by William Whewell at Project Gutenberg\n[…]\nWorks by or about William Whewell at the Internet Archive\n[…]\nPortraits of William Whewell at the National Portrait Gallery, London\n[…]\nWilliam Whewell at Find a Grave"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Scientist",
        "situacao": "ok",
        "texto": "A scientist is an expert in one or more specific fields of science and who habitually uses scientific methods in carrying out scientific research to advance knowledge in science.\n[…]\n624–545 BC) was arguably the first scientist for describing how cosmic events may be seen as natural, not necessarily caused by gods, it was not until the 19th century that the term scientist came into regular use: it was coined by the theologian, philosopher, and historian of science William Whewell to describe Mary Somerville.\n[…]\nEnglish philosopher and historian of science William Whewell coined the term scientist in 1833. It first appeared in print in his anonymous 1834 review of Mary Somerville's On the Connexion of the Physical Sciences, published in the Quarterly Review.\n[…]\nWhewell reported that members of the British Association for the Advancement of Science had expressed concern over the absence of a suitable collective term for \"students of the knowledge of the material world.\" Referring indirectly to himself, he noted that \"some ingenious gentleman\" had proposed the word scientist by analogy with artist, arguing that similar formations such as economist and atheist were already in use. The suggestion, however, was not immediately well received.\n[…]\nWhewell later proposed the term again, more explicitly, in his 1840 work The Philosophy of the Inductive Sciences.\n[…]\nSome scientists have a desire to apply scientific knowledge for the benefit of people's health, the nations, the world, nature, or industries (academic scientist and industrial scientist). A 2025 study found a fraction of scientists prioritize ideology over truth or report self-censorship in their work."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/William_Whewell",
        "situacao": "ok",
        "texto": "William Whewell (Lancaster, 24 de maio de 1794 — Cambridge, 6 de março de 1866) foi um inglês polímata, cientista, padre anglicano, filósofo, teólogo e historiador da ciência. Ele foi mestre do Trinity College, Cambridge. Em seu tempo como estudante lá, ele alcançou distinção tanto em poesia quanto em matemática.\n[…]\nWhewell morreu em Cambridge em 1866 como resultado de uma queda de seu cavalo.\n[…]\nWhewell analisou o raciocínio indutivo em três etapas:\n[…]\nWhewell explicou que novas hipóteses são 'coletadas dos fatos' (Filosofia das Ciências Indutivas, 1849, 17)\". Em suma, a descoberta científica é um processo parcialmente empírica e parcialmente racional; a \"descoberta das concepções não é conjectura nem mera questão de observações\", inferimos mais do que vemos.\n[…]\nUm dos maiores dons de Whewell para a ciência foi a arte de escrever. Ele frequentemente se correspondia com muitos em seu campo e os ajudava a encontrar novos termos para suas descobertas. Na verdade, Whewell criou o próprio termo cientista em 1833, e foi publicado pela primeira vez na revisão anônima de Whewell de 1834 de Mary Somerville, On the Connexion ofthe Physical Sciences, publicada na Quarterly Review.\n[…]\nWhewell era proeminente não apenas em pesquisa científica e filosofia, mas também em administração de universidades e faculdades. Seu primeiro trabalho, An Elementary Treatise on Mechanics (1819), cooperou com os de George Peacock e John Herschel na reforma do método de Cambridge de ensino matemático. Seu trabalho e publicações também ajudaram a influenciar o reconhecimento das ciências morais e naturais como parte integrante do currículo de Cambridge.\n[…]\nSeu trabalho está associado à \"tendência científica\" dos escritores arquitetônicos, junto com Thomas Rickman e Robert Willis.\n[…]\nWilliam Whewell (em inglês) no Mathematics Genealogy Project",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Mayday",
      "descricao": "Sinal de socorro em radiotelefonia usado por aviões e navios, criado em 1923 por um radiotelegrafista de Londres."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O pedido de socorro mayday, usado no rádio por aviões e navios, foi adaptado de uma expressão de que idioma?",
    "resposta": "Francês",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mayday"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mayday",
        "situacao": "ok",
        "texto": "Mayday is an emergency procedure word used internationally as a distress signal in voice-procedure radio communications.\n[…]\nThe \"mayday\" procedure word was conceived as a distress call in the early 1920s by Frederick Stanley Mockford, officer-in-charge of radio at Croydon Airport, England. He had been asked to think of a word that would indicate distress and would easily be understood by all pilots and ground staff in an emergency. Since much of the air traffic at the time was between Croydon and Le Bourget Airport in Paris, he proposed the term \"mayday\", the phonetic equivalent of the French m'aider.\n[…]\nIf a mayday call cannot be sent because a radio is not available, a variety of other distress signals and calls for help can be used. Additionally, a mayday call can be sent on behalf of one vessel by another; this is known as a mayday relay.\n[…]\n\"Seelonce mayday\" (using an approximation of the French pronunciation of silence) is a demand that the channel only be used by the vessel/s and authorities involved with the distress. The channel may not be used for normal working traffic until \"seelonce feenee\" is broadcast. \"Seelonce mayday\" and \"seelonce feenee\" may only be sent by the controlling station in charge of the distress. The expression \"stop transmitting – mayday\" is an aeronautical equivalent of \"seelonce mayday\".\n[…]\nThe format for the \"seelonce feenee\" is MAYDAY, All stations x3, this is [controlling station] x3, date and time in UTC, distressed vessel's MMSI number, distressed vessel's name, distressed vessel's call sign, SEELONCE FEENEE.\n[…]\nTransport Canada: Radio Distress Procedures Card TP9878"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mayday",
        "situacao": "ok",
        "texto": "Mayday é uma palavra de procedimento de emergência utilizada internacionalmente como sinal de socorro em comunicações de rádio por voz.\n[…]\nA palavra de procedimento \"mayday\" foi concebida como um sinal de socorro no início da década de 1920 por Frederick Stanley Mockford, oficial encarregado do rádio no Aeroporto de Croydon, em Londres. Ele foi solicitado a criar um termo que indicasse perigo e fosse facilmente compreendido por pilotos e equipes de solo em emergências.\n[…]\nComo grande parte do tráfego aéreo na época ocorria na rota entre Croydon e o Aeroporto de Le Bourget, em Paris, ele propôs \"mayday\", o equivalente fonético do francês m'aider.\n[…]\nEmbora não tenha relação com o mês de maio(May em inglês), a expressão funciona como uma forma abreviada de venez m'aider (\"venha me ajudar\"). Apesar de a gramática francesa exigir tecnicamente o termo aidez-moi para uso isolado, a adaptação priorizou a comunicabilidade e o reconhecimento entre os idiomas. Conforme destacado pela revista Superinteressante, o uso de uma expressão em francês com boa sonoridade em inglês foi uma solução prática e eficiente.\n[…]\noficializou o \"mayday\" como o padrão radiotelefônico mundial para situações de emergência com risco de vida.==Referências==\n[…]\nVídeos da National Geographic Mayday! Desastres Aéreos",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Robert Hooke",
      "descricao": "Cientista inglês do século dezessete, autor do livro Micrographia, sobre observações ao microscópio."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Em 1665, ao ver cortiça no microscópio, Robert Hooke deu às cavidades um nome que lembrava os quartinhos de um mosteiro. Que nome?",
    "resposta": "Célula",
    "fonte": [
      "https://en.wikipedia.org/wiki/Robert_Hooke",
      "https://en.wikipedia.org/wiki/Micrographia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Robert_Hooke",
        "situacao": "ok",
        "texto": "Robert Hooke (; 18 July 1635 – 3 March 1703) was an English polymath who was active as a physicist ('natural philosopher'), astronomer, geologist, meteorologist, and architect. He is credited as one of the first scientists to investigate living things at microscopic scale in 1665, using a compound microscope that he designed. Hooke was an impoverished scientific inquirer in young adulthood who wen\n[…]\nHooke was a Fellow of the Royal Society and from 1662, he was its first Curator of Experiments. From 1665 to 1703, he was also Professor of Geometry at Gresham College. Hooke began his scientific career as an assistant to the physical scientist Robert Boyle. Hooke built the vacuum pumps that were used in Boyle's experiments on gas law and also conducted experiments. In 1664, Hooke identified the rotations of Mars and Jupiter.\n[…]\nHooke's 1665 book Micrographia, in which he coined the term cell, encouraged microscopic investigations. Investigating optics –  specifically light refraction –  Hooke inferred a wave theory of light. His is the first-recorded hypothesis of the cause of the expansion of matter by heat, of air's composition by small particles in constant motion that thus generate its pressure, and of heat as energy.\n[…]\nIn 1663 and 1664, Hooke made his microscopic, and some astronomic, observations, which he collated in Micrographia in 1665. His book, which describes observations with microscopes and telescopes, as well as original work in biology, contains the earliest-recorded observation of a microorganism, the microfungus Mucor.\n[…]\nLost manuscript of Robert Hooke discovered – from The Guardian\n[…]\nRobert Hooke's Books, a searchable database of books that belonged to or were annotated by Robert Hooke\n[…]\nWestfall, Richard S. \"Robert Hooke\". Rice University (The Galileo Project). Retrieved 16 February 2008.\n[…]\nThe Robert Hooke Trail on the Isle of Wight. (Robert Hooke Society, Freshwater)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Micrographia",
        "situacao": "ok",
        "texto": "Micrographia: or Some Physiological Descriptions of Minute Bodies Made by Magnifying Glasses. With Observations and Inquiries Thereupon is a historically significant book by Robert Hooke about his observations through various lenses. It was the first book to include illustrations of insects and plants as seen through microscopes.\n[…]\nHooke most famously describes a fly's eye and a plant cell (where he coined that term because plant cells, which are walled, reminded him of the cells of a monastery). Known for its spectacular copperplate of the miniature world, particularly its fold-out plates of insects, the text itself reinforces the tremendous power of the new microscope.\n[…]\nHooke also selected several objects of human origin; among these objects were the jagged edge of a honed razor and the point of a needle, seeming blunt under the microscope. His goal may well have been to contrast the flawed products of mankind with the perfection of nature (and hence, in the spirit of the times, of biblical creation).\n[…]\nHooke built up his images from numerous observations made from multiple vantage points, under varying lighting conditions, and with lenses of differing powers. Similarly, his specimens required a great deal of manipulation and preparation in order to make them visible through the microscope.\n[…]\nAdditionally: \"Hooke often enclosed the objects he presented within a round frame, thus offering viewers an evocation of the experience of looking through the lens of a microscope.\"\n[…]\nRobert Hooke. Micrographia: or, Some physiological descriptions of minute bodies made by magnifying glasses. London: J. Martyn and J. Allestry, 1665. (first edition).\n[…]\nTranscribing the Hooke Folio Archived 23 October 2011 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Robert_Hooke",
        "situacao": "ok",
        "texto": "Robert Hooke (Freshwater, Ilha de Wight, 18 de julho de 1635 – Londres, 3 de março de 1703) foi um polímata e cientista experimental inglês do século XVII, uma das figuras-chave da revolução científica.\n[…]\nHooke formulou também a teoria do movimento planetário, a primeira teoria sobre as propriedades elásticas da matéria, descreveu a estrutura celular da cortiça e publicou o livro Micrographia, abordando suas descobertas sobre suas análises dos efeitos do prisma, esferas e lâminas com a utilização do microscópio, instrumento esse que rendeu grande contribuição ao estudo da estrutura da célula.\n[…]\nRobert Hooke fez vários aperfeiçoamentos técnicos no microscópio, como a abertura e o modo como o espécime era iluminado. Também popularizou o instrumento com sua obra Micrographia, publicada em 1665.\n[…]\nHooke utilizou o seu microscópio aprimorado para observar cortes de cortiça e identificar o que hoje conhecemos como parede celular vegetal. Acredita-se que a invenção do microscópio deve-se a Zacharias Jansen e seu pai Hans Jansen, e mesmo sem ter grande relevância na época, a invenção permitiu a evolução do equipamento, que hoje é essencial para o estudo da ciência.\n[…]\nA observação de Robert Hooke permitiu visualizar as paredes celulares mortas da cortiça, mesmo sem saber o que a imagem representava exatamente, e sem relacionar os seres vivos a uma composição celular.\n[…]\nAo observar as cavidades vazias, Hooke atribuiu vários nomes para descrevê-la como caixas, bolhas de ar, poros, celas e, inclusive, célula, termo utilizado até hoje e de grande importância na biologia, designando, atualmente, uma estrutura complexa composta por membrana, núcleo, citoplasma, organelas e parede, no caso dos vegetais.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Irmãos Lumière",
      "descricao": "Auguste e Louis Lumière, irmãos franceses que criaram o cinematógrafo e fizeram as primeiras sessões públicas de cinema, em 1895."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Auguste e Louis, os irmãos franceses que criaram o cinematógrafo, tinham um sobrenome que significa o quê em português?",
    "resposta": "Luz",
    "fonte": [
      "https://en.wikipedia.org/wiki/Auguste_and_Louis_Lumi%C3%A8re",
      "https://en.wiktionary.org/wiki/lumi%C3%A8re"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Auguste_and_Louis_Lumi%C3%A8re",
        "situacao": "ok",
        "texto": "The Lumière brothers (UK: , US: ; French: [lymjɛːʁ]), Auguste Marie Louis Nicolas Lumière (19 October 1862 – 10 April 1954) and Louis Jean Lumière (5 October 1864 – 6 June 1948), were French manufacturers of photography equipment, best known for their Cinématographe motion picture system and the short films they produced between 1895 and 1905, which places them among the earliest filmmakers.\n[…]\nThe Lumière brothers were born in Besançon, France, to Charles-Antoine Lumière (1840–1911) and Jeanne Joséphine Costille Lumière, who were married in 1861 and moved to Besançon, setting up a small photographic portrait studio. Here were born Auguste, Louis and their daughter Jeanne. They moved to Lyon in 1870, where their two other daughters were born: Mélina and Francine. Auguste and Louis both attended La Martiniere, the largest technical school in Lyon.\n[…]\nThey patented several significant processes leading up to their film camera, most notably film perforations (originally implemented by Émile Reynaud) as a means of advancing the film through the camera and projector. The original cinématographe had been patented by Léon Guillaume Bouly on 12 February 1892. The cinématographe—a three-in-one device that could record, copy, and project motion pictures—was further developed by the Lumières. The brothers patented their own version on 13 February 1895.\n[…]\nThe date of the recording of their first film is in dispute. In an interview with Georges Sadoul given in 1948, Louis claimed that he shot the film in August 1894—before the arrival of the kinetoscope in France. This is questioned by historians, who consider that a functional Lumière camera did not exist before the beginning of 1895.\n[…]\nLouis Lumière at IMDb\n[…]\nAuguste Lumière at IMDb\n[…]\nLouis Lumière at Who's Who of Victorian Cinema\n[…]\nAuguste Lumière at Who's Who of Victorian Cinema\n[…]\nLe musée Lumière – Lumière Museum"
      },
      {
        "url": "https://en.wiktionary.org/wiki/lumi%C3%A8re",
        "situacao": "ok",
        "texto": "lumière - Wiktionary, the free dictionary\n[…]\nInherited from Middle French lumiere , from Old French lumiere , from Late Latin lūmināria , plural of neuter lūmināre reinterpreted as a feminine noun, ultimately from Latin lūmen . Doublet of luminaire .\n[…]\nAudio ( France ( Paris ) ) ; “ la lumière ” : ( file )\n[…]\n“ lumière ”, in Trésor de la langue française informatisé [ Digitized Treasury of the French Language ], 2012\n[…]\nRetrieved from \" https://en.wiktionary.org/w/index.php?title=lumière&oldid=92542039 \""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Auguste_e_Louis_Lumi%C3%A8re",
        "situacao": "ok",
        "texto": "Os irmãos Lumière (em francês: [lymjɛːʁ]), Auguste Marie Louis Nicolas Lumière (19 de outubro de 1862 – 10 de abril de 1954) e Louis Jean Lumière (5 de outubro de 1864 – 6 de junho de 1948), foram fabricantes franceses de equipamentos de fotografia, mais conhecidos por seu sistema de imagens em movimento Cinématographe e pelos curtas-metragens que produziram entre 1895 e 1905, o que os coloca entr\n[…]\nOs irmãos Lumière nasceram em Besançon, França, filhos de Charles-Antoine Lumière (1840–1911) e Jeanne Joséphine Costille Lumière, que se casaram em 1861 e se mudaram para Besançon, estabelecendo um pequeno estúdio de retratos fotográficos. Ali nasceram Auguste, Louis e sua irmã Jeanne. Eles se mudaram para Lyon em 1870, onde nasceram suas outras duas filhas: Mélina e Francine. Auguste e Louis frequentaram La Martiniere, a maior escola técnica de Lyon.\n[…]\nEles patentearam vários processos significativos que levaram à sua câmera de filme, mais notavelmente as perfurações de filme (originalmente implementadas por Émile Reynaud) como meio de avançar o filme através da câmera e do projetor. O Cinématographe original havia sido patenteado por Léon Guillaume Bouly em 12 de fevereiro de 1892. O cinématographe — um dispositivo três em um que podia gravar, revelar e projetar imagens em movimento — foi posteriormente desenvolvido pelos Lumière.\n[…]\nOs irmãos Lumière viam o cinema como uma novidade e se retiraram do negócio cinematográfico em 1905. Eles passaram a desenvolver o primeiro processo fotográfico prático em cores, o Autocromo Lumière.\n[…]\nKardozi, Karzan (2019). 100 Years of Cinema, 100 Directors, Vol 1: The Lumière Brothers. [S.l.]: Xazalnus Publication  – via The Moving Silent\n[…]\nRittaud-Hutinet, Jacques. Le cinéma des origines (em francês). Seyssel, France: Champ Vallon, 1985. ISBN 2-903528-43-8.\n[…]\nLouis Lumière no IMDb\n[…]\nAuguste Lumière no IMDb\n[…]\nLe musée Lumière – Museu Lumière",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Teclado QWERTY",
      "descricao": "Disposição de letras dos teclados criada para as máquinas de escrever de Christopher Sholes, no século dezenove."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "De onde vem o nome do teclado QWERTY, herdado das antigas máquinas de escrever?",
    "resposta": "Das seis primeiras letras da fileira de cima",
    "fonte": [
      "https://en.wikipedia.org/wiki/QWERTY"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/QWERTY",
        "situacao": "ok",
        "texto": "QWERTY ( KWUR-tee) is a keyboard layout for Latin-script alphabets; the name comes from the order of the first six keys on the top letter row of the keyboard: QWERTY. The design evolved for the quick typing of English on typewriters.\n[…]\nTo address the ergonomics issue of QWERTY, EurKEY Colemak-DH was also developed as a Colmak-DH version with the EurKEY design principles.\n[…]\nSeveral alternatives to QWERTY have been developed over the years, claimed by their designers and users to be more efficient, intuitive, and ergonomic. Nevertheless, none have seen widespread adoption, partly due to the sheer dominance of available keyboards and training.\n[…]\nThe most widely used such alternative is the Dvorak keyboard layout; another alternative is Colemak, which is based partly on QWERTY and is claimed to be easier for an existing QWERTY typist to learn while offering several supposed optimisations.\n[…]\nComparisons have been made between Dvorak, Colemak, QWERTY, and other keyboard input systems, namely stenotype or its electronic implementations. However, stenotype is a fundamentally different system, which relies on phonetics and simultaneous key presses or chords.\n[…]\nA half QWERTY keyboard is a combination of an alpha-numeric keypad and a QWERTY keypad, designed for mobile phones. In a half QWERTY keyboard, two characters share the same key, which reduces the number of keys and increases the surface area of each key, useful for mobile phones that have little space for keys. It means that 'Q' and 'W' share the same key and the user must press the key once to type 'Q' and twice to type 'W'.\n[…]\nArticle on QWERTY and Path Dependence from EH.NET's Encyclopedia\n[…]\nQWERTY Keyboard History\n[…]\nQWERTY Keyboard in Mobiles\n[…]\nAndroid phones with QWERTY keyboards"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/QWERTY",
        "situacao": "ok",
        "texto": "Em tecnologia, QWERTY é um layout de teclado para o alfabeto latino utilizado em máquinas de escrever, computadores e smartphones. O nome vem da sequência de seis letras presente na primeira linha do teclado (QWERTY).\n[…]\nNesse layout, a ordem das letras no teclado é apenas uma cópia do padrão da máquina de escrever, criada e patenteada pelo editor de jornais americano Christopher Sholes.\n[…]\nO formato adotado tinha o objetivo de organizar as teclas separando os pares de letras mais usados na língua inglesa para diminuir a quantidade de possíveis travamentos das teclas da máquina de escrever mecânica. Scholes aperfeiçoou a ideia de James Densmore, seu parceiro comercial, e criou o teclado QWERTY, nome dado devido à disposição das primeiras seis teclas.\n[…]\nO primeiro modelo construído por Sholes usava um teclado semelhante a um piano com duas fileiras de caracteres organizados em ordem alfabética, conforme mostrado abaixo: - 3 5 7 9 N O P Q R S T U V W X Y Z\n[…]\nEm novembro de 1868, ele mudou a disposição da segunda metade do alfabeto, de N a Z, da direita para a esquerda Em abril de 1870, ele chegou a um teclado de quatro fileiras de letras maiúsculas que se aproximava do padrão QWERTY moderno, movendo seis letras vogais, A, E, I, O, U e Y, para a fileira superior da seguinte forma:2 3 4 5 6 7 8 9 -\n[…]\nO layout QWERTY se tornou popular com o sucesso da Remington No. 2 de 1878, a primeira máquina de escrever a incluir letras maiúsculas e minúsculas, usando a tecla Shift.\n[…]\nO teclado \"Ideal\" da antiga Blickensderfer também não era QWERTY, mas tinha a sequência \"DHIATENSOR\" na linha inicial, sendo que essas 10 letras eram capazes de compor 70% das palavras do idioma inglês.\n[…]\nThe Sholes (QWERTY) Keyboard",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Thomas Edison",
      "descricao": "Inventor e empresário americano (1847–1931), conhecido pela lâmpada incandescente e pelo fonógrafo."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Por causa do laboratório que montou numa pequena localidade de Nova Jersey, Thomas Edison ganhou que apelido?",
    "resposta": "O Mago de Menlo Park",
    "fonte": [
      "https://en.wikipedia.org/wiki/Thomas_Edison"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Thomas_Edison",
        "situacao": "ok",
        "texto": "Thomas Alva Edison (February 11, 1847 – October 18, 1931) was an American inventor and businessman known for his work on the incandescent light bulb, the phonograph, electric power distribution and early motion pictures. The merger of the Edison General Electric Company and the competitor Thomson-Houston Electric Company resulted in the formation of General Electric. Edison registered 1,093 patent\n[…]\nEdison expanded, developing Menlo Park, now considered the first industrial research laboratory. Edison, known as \"The Wizard of Menlo Park\", drove his staff extremely hard and constantly worked himself and his associates to exhaustion. The inventor also drove up investment and publicity. He rose to international fame with the invention of the phonograph which took many years to turn into a commercial success. He later built a larger research lab in West Orange, New Jersey.\n[…]\nIn Menlo Park, New Jersey, Edison established the first industrial laboratory concerned with creating knowledge and then controlling its application. Built in 1876, in Raritan Township (now named Edison Township in his honor) the construction was funded by the sale of Edison's quadruplex telegraph. His staff was generally told to carry out his directions in conducting research, and he drove them hard to produce results.\n[…]\nBy 1887, Edison felt he had outgrown Menlo Park. He put Batchelor in charge of constructing a new laboratory complex in West Orange, which when finally constructed was more than ten times the size of the old lab.\n[…]\nThomas Alva Edison Jr. (1876–1935)\n[…]\nMarion, Thomas's eldest daughter, often came to the laboratory at Menlo park during her childhood. As an adult, she did not get along with Mina and moved to Germany in 1894. She returned in 1924, after divorcing her unfaithful husband.\n[…]\nTen months later, Hoover traveled with Edison and Ford to Ford's reconstruction of Menlo Park.\n[…]\nThomas Edison at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Thomas_Edison",
        "situacao": "ok",
        "texto": "Thomas Alva Edison (11 de fevereiro de 1847 – 18 de outubro de 1931) foi um inventor e empresário norte-americano que trabalhou com a lâmpada incandescente, o fonógrafo, a distribuição de energia elétrica e os primeiros filmes. A fusão da Edison General Electric Company com a concorrente Thomson-Houston Electric Company deu origem à General Electric. Edison registrou 1.093 patentes nos Estados Uni\n[…]\nO primeiro fonógrafo registrava o som numa folha de estanho enrolada em torno de um cilindro com sulcos, o que limitava a qualidade e a durabilidade das gravações. A notícia do aparelho começou a circular em novembro. Edison deu demonstrações públicas e procurou os jornalistas para divulgá-lo. Aos olhos de muita gente, a máquina parecia quase mágica, e ele ganhou o apelido de \"Mágico de Menlo Park\".\n[…]\nPara mostrar que o sistema podia distribuir energia em escala maior, os empregados estenderam fios e instalaram lâmpadas em Menlo Park. Em fevereiro de 1880, visitantes iam ver a chamada \"Vila da Luz\". Em 1883, Edison também abriu um negócio de construção desses sistemas para pequenas cidades dos Estados Unidos.\n[…]\nEm 1887, Edison considerou pequeno o laboratório de Menlo Park e encarregou Batchelor de construir outro complexo em West Orange. Quando ficou pronto, era mais de dez vezes maior que o anterior.\n[…]\nThomas Alva Edison Jr. (1876–1935)\n[…]\nMarion, a filha mais velha de Edison, visitava o laboratório de Menlo Park quando criança. Na vida adulta, não se dava bem com Mina e foi morar na Alemanha em 1894. Retornou em 1924 depois de se divorciar do marido, que lhe fora infiel.\n[…]\nDez meses depois, Hoover acompanhou Edison e Ford à reconstrução do laboratório de Menlo Park feita por Ford.\n[…]\n«Thomas Alva Edison, Jr.». Thomas Edison National Historical Park. U.S. National Park Service. Cópia arquivada em 18 de fevereiro de 2026\n[…]\nA pesquisa de Edison em Menlo Park, Pesquisa FAPESP.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Bartolomeu de Gusmão",
      "descricao": "Padre e inventor nascido em Santos, no Brasil colonial, que demonstrou um pequeno balão de ar quente em Lisboa em 1709."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Nascido em Santos, o padre Bartolomeu de Gusmão fez subir um pequeno balão diante do rei, em Lisboa, em 1709. Por que apelido ficou conhecido?",
    "resposta": "Padre Voador",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Bartolomeu_de_Gusm%C3%A3o",
      "https://en.wikipedia.org/wiki/Bartolomeu_de_Gusm%C3%A3o"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Bartolomeu_de_Gusm%C3%A3o",
        "situacao": "ok",
        "texto": "Bartolomeu Lourenço de Gusmão (Santos, dezembro de 1685 — Toledo, 18 de novembro de 1724), cognominado o padre voador, foi um sacerdote secular, cientista e inventor nascido no Brasil, considerado o primeiro cientista do continente americano, onde foi autor da primeira patente de invenção. É conhecido como o pioneiro da aviação moderna, por ter inventado o primeiro aeróstato operacional.\n[…]\nFoi batizado simplesmente com o nome de Bertolameu Lourenço, em 19 de dezembro de 1685, na Igreja Paroquial da vila de Santos pelo padre António Correia Peres. Eventualmente altera o prenome para \"Bartolomeu\", e mais tarde, em 1718, adota a si, tal como o irmão Alexandre, o apelido \"de Gusmão\", em homenagem ao preceptor e protetor, o jesuíta Alexandre de Gusmão.\n[…]\nNa capital portuguesa o padre Bartolomeu Lourenço pediu patente ou \"petição de privilégio\" para um “instrumento para se andar pelo ar” – que se revelaria ser, mais tarde, o que hoje se conhece por aeróstato ou balão –, a qual foi concedida no dia 19 de Abril de 1709. O fato causou celeuma na cidade e a notícia rapidamente se espalhou para alguns reinos europeus.\n[…]\nAs primeiras ilustrações da Passarola haviam sido na verdade elaboradas pelo filho primogênito do 3.º Marquês de Fontes, D. Joaquim Francisco de Sá Almeida e Meneses, com a conivência de Bartolomeu. O 8.º Conde de Penaguião e futuro 2.º Marquês de Abrantes contava 14 anos em 1709 e era, então, aluno de matemática do padre, sendo a única pessoa à qual ele permitia livre acesso ao recinto em que o engenho voador era guardado.\n[…]\nARRUDÃO, Matias. Bartolomeu Lourenço de Gusmão. São Paulo: Fundação Santos Dumont, 1959.\n[…]\n«Padre ensina Europa a voar em balão». www.novomilenio.inf.br\n[…]\n«Bartolomeu de Gusmão»\n[…]\nCel Av R1 Manuel Bezerra Barreto Reale, Padre Bartolomeu Lourenço de Gusmão PRECURSOR DA AERONÁUTICA - PATRONO DO INCAER, INCAER - Instituto Histórico-Cultural da Aeronáutica"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Bartolomeu_de_Gusm%C3%A3o",
        "situacao": "ok",
        "texto": "Bartolomeu Lourenço de Gusmão (December 1685 – 18 November 1724) was a Portuguese Catholic priest and naturalist born in colonial Brazil, who was a pioneer of lighter-than-air aerostat design, being among the first scholars at that time to understand the operational principles of the hot air  balloon and to build a functional prototype of such a device. He is also one of the main characters in Nob\n[…]\nGusmão was born at Santos, then part of the Portuguese colony of Brazil.\n[…]\nThey add, that several learned men, French and English, who had been at Lisbon to verify the fact, had made enquiries at the Carmelite monastery, where Gusmao had a brother, who had preserved some of his manuscripts on the manner of constructing aerostatic machines. Various living persons affirm that they were present at the Jesuit's experiments, and that he received the surname of Voador, or Flying-man.\n[…]\nContemporary documents do attest that information was laid before the Inquisition against Gusmão, but on quite another charge. The inventor fled to Spain and fell ill of a fever, of which he died in Toledo.\n[…]\nAdelir Antônio de Carli, aka Padre Baloeiro, a Brazilian priest who died during an attempt at cluster ballooning in 2008\n[…]\nGusmao, Bartolomeu de. Reproduction fac-similé d'un dessin à la plume de sa description et de la pétition adressée au Jean V. (de Portugal) en langue latine et en écriture contemporaine (1709) retrouvés récemment dans les archives du Vatican du célèbre aéronef de Bartholomeu Lourenco de Gusmão \"l'homme volant\" portugais, né au Brésil (1685–1724) précurseur des navigateurs aériens et premier inventeur des aérostats. 1917 (Lausanne : Impr. Réunies S.A.) in French and Latin.\n[…]\nBartolomeu Lourenço de Gusmão 1685–1724 \"Translated from the article which appeared on the Bartolomeu Lourenço de Gusmão page of the Brazilian Air Force website.\""
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Estetoscópio",
      "descricao": "Instrumento médico para ouvir sons do coração e dos pulmões, inventado pelo francês René Laennec em 1816."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1816, o médico francês René Laennec inventou o estetoscópio para evitar que situação constrangedora?",
    "resposta": "Encostar o ouvido no peito de uma paciente",
    "fonte": [
      "https://en.wikipedia.org/wiki/Stethoscope",
      "https://en.wikipedia.org/wiki/Ren%C3%A9_Laennec"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Stethoscope",
        "situacao": "ok",
        "texto": "The stethoscope (from Ancient Greek στῆθος (stêthos) 'breast' and σκοπέω (skopéō) 'to look') is a medical device for auscultation, or listening to internal sounds of an animal or human body. It typically has a small disc-shaped resonator that is placed against the naked skin, with either one or two tubes connected to two earpieces. A stethoscope can be used to listen to the sounds made by the hear\n[…]\nIn combination with a manual sphygmomanometer, it is commonly used when measuring blood pressure. It was invented in 1816 by René Laennec and the binaural version by Arthur Leared in 1851.\n[…]\nThe stethoscope was invented in France in 1816 by René Laennec at the Necker-Enfants Malades Hospital in Paris. It consisted of a wooden tube and was monaural. Laennec invented the stethoscope because he was not comfortable placing his ear directly onto a woman's chest in order to listen to her heart. He observed that a rolled piece of paper, placed between the individual's chest and his ear, could amplify heart sounds without requiring physical contact.\n[…]\nLaennec's device was similar to the common ear trumpet, a historical form of hearing aid; indeed, his invention was almost indistinguishable in structure and function from the trumpet, which was commonly called a \"microphone\". Laennec called his device the \"stethoscope\" (stetho- + -scope, \"chest scope\"), and he called its use \"mediate auscultation\", because it was auscultation with a tool intermediate between the individual's body and the physician's ear.\n[…]\nRotating the tube 180 degrees in the head connects it to the diaphragm. This two-sided stethoscope was invented by Rappaport and Sprague in the early part of the 20th century.\n[…]\n\"The invention of the stethoscope: A milestone in cardiology\", analysis of Laennec's text (1819) on BibNum [click 'à télécharger' for English version]."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Ren%C3%A9_Laennec",
        "situacao": "ok",
        "texto": "René-Théophile-Hyacinthe Laennec (French: [laɛnɛk]; 17 February 1781 – 13 August 1826) was a French medical doctor and musician. His skill at carving his own wooden flutes led him to invent the stethoscope in 1816, while working at the Hôpital Necker. He pioneered its use in diagnosing various chest conditions.\n[…]\nRené Laennec wrote in the classic treatise De l'Auscultation Médiate,\n[…]\nMedical terms named after Laennec:\n[…]\nA Rene Laennec appears in Rudyard Kipling's Rewards and Fairies, the second of two books where two children, Dan and Una, encounter past inhabitants of England. In the short section \"Marlake Witches\", set during the Napoleonic Wars, Una meets a consumptive young lady who speaks of being treated by a French doctor, a prisoner on parole, one Rene Laennec.\n[…]\nThis prisoner discusses with a local herbalist the use of 'wooden trumpets' for listening to patients' chests, much to the distrust of the local doctor. Obviously, Kipling was aware of Laennec's work and invented an English connection.\n[…]\nBon, H. (1925). Laennec (1781–1826). Dijon, FR: Lumière.\n[…]\nDuffin, Jacalyn (1998). To See with a Better Eye: The life of R.T.H. Laennec. Princeton, NJ: Princeton University Press.\n[…]\nLaennec, R.T.H. (1819). De l'Auscultation Médiate ou Traité du Diagnostic des Maladies des Poumons et du Coeur. Paris, FR: Brosson & Chaudé. — The complete title of this book, often referred to as the 'Treatise' is De l'Auscultation Médiate ou Traité du Diagnostic des Maladies des Poumons et du Coeur (On Mediate Auscultation or Treatise on the Diagnosis of the Diseases of the Lungs and Heart).\n[…]\nLaennec, R.T.H. (1819). De l'Auscultation Médiate ... (online and analyzed ed.) – via BibNum.Education.FR. – [click 'à télécharger' for the English version].\n[…]\nRouxeaux, U. (1920) [1912]. Laennec. Paris, FR: Baillière."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Estetosc%C3%B3pio",
        "situacao": "ok",
        "texto": "Estetoscópio (do grego στηθοσκόπιο, de στήθος, stéthos - peito e σκοπή, skopé - exame) é um instrumento utilizado por diversos profissionais, como médicos, fisioterapeutas, enfermeiros, nutricionistas e veterinários, para amplificar sons corporais de humanos ou animais. É geralmente constituído de um ressonador em forma de disco e dois tubos conectados a olivas auriculares.\n[…]\nO estetoscópio foi uma invenção revolucionária do início do século XIX. Criado em 1816 pelo médico francês René Laënnec, enquanto trabalhava no Hospital Necker, em Paris, ele substituiu a prática de encostar o ouvido diretamente no peito do paciente por um tubo.Que deixou o trabalho dos médicos mais profissional, higiênico e respeitoso. Atualmente, o estetoscópio é considerado símbolo da profissão médica e parte do equipamento básico de propedêutica clínica.\n[…]\nEstetoscópios acústicos são familiares para a maioria das pessoas, e operam na transmissão de som do dispositivo peitoral, através de tubos ocos cheios de ar, para as orelhas do ouvinte. O tórax geralmente consiste em dois lados que podem ser colocados contra o paciente para detectar o som; um diafragma (disco de plástico) ou sino (copo oco).\n[…]\nVendo a necessidade de um instrumento que pudesse amplificar sons internos do corpo,como pulmão e coração sem a necessidade de colocar o ouvido diretamente na pele do paciente, René Laennec, inventou o estetoscópio. A ideia veio a partir de duas crianças brincando com um pedaço de madeira, enquanto uma ouvia na extremidade e a outra produzia ruídos na outra, a partir disso, ele usou folhas de papel enroladas para amplificar sons para facilitar a ausculta.\n[…]\nBLOCH, H. The inventor of the stethoscope: Rene Laennec. Disponível em: O inventor do estetoscópio (em inglês)\n[…]\nBiografia de René Laennec[ligação inativa] (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Sacarina",
      "descricao": "Adoçante artificial descoberto em 1879 pelo químico Constantin Fahlberg, na Universidade Johns Hopkins."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1879, como o químico Constantin Fahlberg percebeu, por acaso, que a substância que hoje chamamos de sacarina era doce?",
    "resposta": "Sentiu gosto doce na própria mão",
    "fonte": [
      "https://en.wikipedia.org/wiki/Saccharin",
      "https://en.wikipedia.org/wiki/Constantin_Fahlberg"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Saccharin",
        "situacao": "ok",
        "texto": "Saccharin, also called saccharine, benzosulfimide, or E954, or used in saccharin sodium or saccharin calcium forms, is a non-nutritive artificial sweetener. Saccharin is a sultam that is about 500 times sweeter than sucrose, but has a bitter or metallic aftertaste, especially at high concentrations. It is used to sweeten products, such as drinks, candies, baked goods, tobacco products, excipients,\n[…]\nSaccharin was produced first in 1879, by Constantin Fahlberg, a chemist working on coal tar derivatives in Ira Remsen's laboratory at Johns Hopkins University. Fahlberg noticed a sweet taste on his hand one evening, and connected this with the compound benzoic sulfimide on which he had been working that day. Fahlberg and Remsen published articles on benzoic sulfimide in 1879 and 1880.\n[…]\nIn 1884, then working on his own in New York City, Fahlberg applied for patents in several countries (including German patents 35211 and 113720), describing methods of producing this substance that he named saccharin. Two years later, he began production of the substance in a factory in a suburb of Magdeburg in Germany. Fahlberg soon grew wealthy, while Remsen believed he deserved credit for substances produced in his laboratory. On the matter, Remsen commented, \"Fahlberg is a scoundrel.\n[…]\nSaccharin can be produced in various ways. The original route by Remsen and Fahlberg starts with toluene; another route begins with o-chlorotoluene. Sulfonation of toluene by chlorosulfonic acid gives the ortho and para substituted sulfonyl chlorides. The ortho isomer is separated and converted to the sulfonamide with ammonia. Oxidation of the methyl substituent gives the carboxylic acid, which cyclicizes to give saccharin free acid:\n[…]\nSaccharin is a versatile precursor useful in the synthesis of the following drug molecules:\n[…]\nMedia related to Saccharin at Wikimedia Commons"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Constantin_Fahlberg",
        "situacao": "ok",
        "texto": "Constantin Fahlberg (Russian: Константин Фальберг; 22 December 1850 in Tambov – 15 August 1910 in Nassau) was a Russian chemist who discovered the sweet taste of anhydroorthosulphaminebenzoic acid  in 1877–78 when analysing the chemical compounds in coal tar at Johns Hopkins University for Professor Ira Remsen (1846–1927, aged 81). Later Fahlberg gave this chemical \"body\" the trade name Saccharin.\n[…]\nU.S. patent 326,281, U.S. patent 496,112, U.S. patent 496,113 and U.S. patent 564,784. Four patents by Fahlberg on the synthesis of saccharin."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sacarina",
        "situacao": "ok",
        "texto": "A Sacarina é um dos mais antigos adoçantes. Descoberto em 1879 por Ira Remsen e Constantine Fahlberg da Universidade Johns Hopkins\n[…]\nQuímicamente é uma Imida o-sulfobenzóica, cuja fórmula química é C7H5O3NS · 2H2O. É uma substância artificial derivada do petróleo (tolueno mais ácido cloro-sulfônico). O nome escolhido Sacarina, derivado da palavra latina saccharum, que significava açúcar.\n[…]\nÉ usada como adoçante não-calórico, e na medicina quando é contraindicada a ingestão de açúcar. É trezentas vezes mais doce que a sacarose. A sacarina não é metabolizada, e é excretada sem alterações pelo organismo. Não existe comprovação da sua toxicidade em humanos, apesar de químicos não descartarem a possibilidade do consumo em excesso de sacarina estar ligado a casos de câncer.\n[…]\nEm 1884, Fahlberg patenteou nos Estados Unidos e na Alemanha um método de produção em grandes quantidades. Em 1886, Fahlberg iniciou em Nova Iorque a produção de 5 kg de sacarina por dia.\n[…]\nAtualmente, a sacarina é muito utilizada como adoçante em refrigerantes de baixo valor calórico.\n[…]\nSacarina - Molécula do dia",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Mauveína",
      "descricao": "Corante roxo sintético obtido por acaso pelo químico inglês William Perkin em 1856."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1856, o jovem químico William Perkin obteve por acaso o corante roxo mauveína. Que remédio contra a malária ele tentava fabricar?",
    "resposta": "Quinino",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mauveine",
      "https://en.wikipedia.org/wiki/William_Henry_Perkin"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mauveine",
        "situacao": "ok",
        "texto": "Mauveine, also known as aniline purple and Perkin's mauve, was one of the first synthetic dyes. It was discovered serendipitously by William Henry Perkin in 1856 while he was attempting to synthesise the phytochemical quinine for the treatment of malaria. It is also among the first chemical dyes to have been mass-produced.\n[…]\nIn 1856, William Henry Perkin, then age 18, was given a challenge by his professor, August Wilhelm von Hofmann, to synthesize quinine. In one attempt, Perkin oxidized aniline using potassium dichromate, whose toluidine impurities reacted with the aniline and yielded a black solid, suggesting a \"failed\" organic synthesis. Cleaning the flask with alcohol, Perkin noticed purple portions of the solution.\n[…]\nSuitable as a dye of silk and other textiles, it was patented by Perkin, who the next year opened a dyeworks mass-producing it at Greenford on the banks of the Grand Union Canal in Middlesex. It was originally called aniline purple. In 1859, it was named mauve in England via the French name for the mallow flower, and chemists later called it mauveine. Between 1859 and 1861, mauve became a fashion must have.\n[…]\nBy 1870, demand succumbed to newer synthetic colours in the synthetic dye industry launched by mauveine.\n[…]\nIn the early 20th century, the U.S. National Association of Confectioners permitted mauveine as a food colouring with a variety of equivalent names: rosolan, violet paste, chrome violet, anilin violet, anilin purple, Perkin's violet, indisin, phenamin, purpurin and lydin.\n[…]\nIn 1906, on the 50th anniversary of his discovery, Perkins was knighted, and the Perkins Medal was established in his honour; it remains a leading award in applied chemistry.\n[…]\nPerkin anniversary website Archived 2006-11-11 at the Wayback Machine\n[…]\nRotatable 3D models of mauveine are available using Jmol"
      },
      {
        "url": "https://en.wikipedia.org/wiki/William_Henry_Perkin",
        "situacao": "ok",
        "texto": "Sir William Henry Perkin (12 March 1838 – 14 July 1907) was an English chemist and entrepreneur best known for his serendipitous discovery of the first commercial synthetic organic dye, mauveine, made from aniline. Though he failed in trying to synthesise quinine for the treatment of malaria, he became successful in the field of dyes after his first discovery at the age of 18.\n[…]\nHofmann had published a hypothesis on how it might be possible to synthesise quinine, an expensive natural substance much in demand for the treatment of malaria. Having become one of Hofmann's assistants, Perkin embarked on a series of experiments to try to achieve this end.\n[…]\nPerkin, who had an interest in painting and photography, immediately became enthusiastic about this result and carried out further trials with his friend Arthur Church and his brother Thomas. Since these experiments were not part of the work on quinine which had been assigned to Perkin, the trio carried them out in a hut in Perkin's garden to keep them secret from Hofmann.\n[…]\nThey satisfied themselves that they might be able to scale up production of the purple substance and commercialise it as a dye, which they called mauveine. Their initial experiments indicated that it dyed silk in a way which was stable when washed or exposed to light. They sent some samples to a dye works in Perth, Scotland, and received a very promising reply from the general manager of the company, Robert Pullar. Perkin filed for a patent in August 1856, when he was still only 18.\n[…]\nIn 2013, the William Perkin Church of England High School opened in Greenford, Middlesex. The school is operated by the Twyford Church of England Academies Trust (which also operates Twyford Church of England High School). The school is named after William Perkin, and has adopted a mauve uniform and colour scheme, in tribute to his discovery of mauveine."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mauve%C3%ADna",
        "situacao": "ok",
        "texto": "A mauveína, também conhecida como anilina púrpura e  malva, foi o primeiro corante químico orgânico sintético, descoberto por acaso em 1856 por William Perkin enquanto tentava sintetizar o fitoquímico quinina para o tratamento da malária. Foi o primeiro corante a ser produzido em escala industrial.\n[…]\nA nomenclatura química da mauveína é\n[…]\nA mauveína consiste em uma mistura de quatro compostos aromáticos relacionados que podem possuir diferentes posições e quantidades de grupos metila. Por exemplo, a Mauveína A é formada por duas moléculas de anilina, uma de p-toluidina e uma de o-toluidina. Já a Mauveína B é formada por uma molécula de anilina, uma de p-toluidina e duas de o-toluidina.\n[…]\nHeinrich Caro desenvolveu mauveína a partir de um processo diferente do realizado por Perkin e obteve a Pseudo-mauveína, que se caracteriza pela ausência de grupos metila.\n[…]\nDesde 2008 já foram identificados 12 tipos de mauveínas diferentes.\n[…]\nPerkin anniversary website\n[…]\nRotatable 3D models of mauveine are available using Jmol",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Teflon",
      "descricao": "Nome comercial do politetrafluoretileno, plástico antiaderente descoberto por Roy Plunkett na DuPont em 1938."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1938, o químico Roy Plunkett descobriu o teflon por acaso, enquanto pesquisava novos gases para que tipo de aparelho?",
    "resposta": "Geladeiras",
    "fonte": [
      "https://en.wikipedia.org/wiki/Polytetrafluoroethylene",
      "https://en.wikipedia.org/wiki/Roy_J._Plunkett"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Polytetrafluoroethylene",
        "situacao": "ok",
        "texto": "Polytetrafluoroethylene (PTFE) is a synthetic fluoropolymer of tetrafluoroethylene, and has numerous applications because it is heat resistant and chemically inert. The commonly known brand name of PTFE-based composition is Teflon by Chemours, a spin-off from DuPont, which originally invented the compound in 1938.\n[…]\nPolytetrafluoroethylene (PTFE) was accidentally discovered in 1938 by Roy J. Plunkett while he was working in Chemours Chambers Works plant in New Jersey for DuPont. A team of DuPont chemists attempted to make a new refrigerant, called tetrafluoroethylene. The gas in its pressure bottle stopped flowing before the bottle's weight had dropped to the point signaling \"empty\". John J. Beall (chemist), noticing a weight differential in his test cylinder, brought it to the attention of Roy Plunkett.\n[…]\nPTFE is used to make bookbinding tools for folding, scoring, and separating sheets of paper. These are typically referred to as Teflon bone folders.\n[…]\nWhile PTFE is stable at lower temperatures, it begins to deteriorate at temperatures of about 260 °C (500 °F), it decomposes above 350 °C (662 °F), and pyrolysis occurs at temperatures above 400 °C (752 °F). The main decomposition products are fluorocarbon gases and a sublimate, including tetrafluoroethylene (TFE) and difluorocarbene radicals (RCF2).\n[…]\nAs a result of the lawsuits concerning the PFOA class-action lawsuit, DuPont began to use GenX, a similarly fluorinated compound, as a replacement for perfluorooctanoic acid in the manufacture of fluoropolymers, such as Teflon-brand PTFE. However, the EPA has classified GenX as more toxic than PFOA and it has proven to be a \"regrettable substitute\"; its effects may be equally harmful or even more detrimental than those of the chemical it was meant to replace.\n[…]\nSurface treatment of PTFE"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Roy_J._Plunkett",
        "situacao": "ok",
        "texto": "Roy Joseph Plunkett (June 26, 1910 – May 12, 1994) was an American chemist. He discovered polytetrafluoroethylene (PTFE), better known as Teflon, in 1938.\n[…]\nPlunkett died of cancer on May 12, 1994, at his Texas home at the age of 83.\n[…]\nIn 1938, while attempting to make a new chlorofluorocarbon refrigerant, Plunkett's laboratory team discovered polytetrafluoroethylene (PTFE), better known as Teflon. In New York City in April 1986, Plunkett shared the story of his accidental discovery at the spring meeting of the American Chemical Society national meeting in the History of Chemistry section. His story was published in the Symposium Proceedings:\n[…]\nIn 1951, Plunkett received the John Scott Medal from the city of Philadelphia for an invention promoting the \"comfort, welfare, and happiness of humankind\". Attendees were given a Teflon-coated muffin tin to take home. Other awards and honors followed. Plunkett was inducted into the Plastics Hall of Fame in 1973 and the National Inventors Hall of Fame in 1985.\n[…]\nGeorge B. Kauffman. \"Plunkett, Roy Joseph\" in American National Biography (1999) [www.anb.org/viewbydoi/10.1093/anb/9780198606697.article.1302553  online]\n[…]\nRaymond B. Seymour and Charles H. Fisher. \"Roy J. Plunkett,\" in Profiles of Eminent American Chemists, ed. Sylvia Tascher (1988), pp. 381–84.\n[…]\nCenter for Oral History. \"Roy J. Plunkett\". Science History Institute. Retrieved 21 February 2018.\n[…]\nBohning, James J. (27 May 1986). Roy J. Plunkett, Transcripts of Interviews Conducted by James J. Bohning in New York City and Philadelphia on 14 April and 27 May 1986 (PDF). Philadelphia, PA: Beckman Center for the History of Chemistry."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Politetrafluoretileno",
        "situacao": "ok",
        "texto": "O politetrafluoretileno (PTFE) é um fluoropolímero sintético do tetrafluoroetileno que possui inúmeras aplicações,comumente conhecido pelo seu nome comercial,  Teflon, nomeado pela Chemours em 1938, empresa que viria a se tornar a DuPont.\n[…]\nO Politetrafluoretileno (abreviação: PTFE) foi descoberto acidentalmente em 1938 por Roy J. Plunkett, enquanto trabalhava para a DuPont. Plunkett estava tentando fazer um novo refrigerante sem gás de clorofluorocarbono, quando o gás tetrafluoretileno parou de fluir da garrafa em que ele fazia o experimento antes que o peso do conteúdo da mesma sinalizasse que ela estava vazia. Ao abrir a garrafa, Plunkett encontrou o seu interior revestido com um material branco e escorregadio.\n[…]\nO politetrafluoretileno é um polímero similar ao polietileno, (com os átomos de hidrogênio substituídos por flúor) e, logo, é classificado como um fluoropolímero. O PTFE pode ser produzido pela polimerização dos radicais livres do tetrafluoretileno. A fórmula química do monômero, o tetrafluoretileno, é 2FC=CF2, e o polímero -(2FC-CF2)n-.\n[…]\nO politetrafluoretileno é utilizado em diversas aplicações, nas quais se aproveitam suas propriedades elétricas, químicas e mecânicas. Essas aplicações podem ser industriais, no cotidiano e, até mesmo, da área da saúde.\n[…]\nDemais, o ácido perfluorooctanóico (AFPO ou PFOA em inglês, também conhecido como C8), um produto químico usado para fabricar o Teflon, é problemático para o meio ambiente porque não se degrada ou muito dificilmente. Faz parte da família dos PFAS que são poluentes orgânicos persistentes ou químicos eternos. Alguns estudos mostram que o teflon pode entrar em contato com o organismo dos seres humanos e permanecer nele por toda a vida.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Post-it",
      "descricao": "Bloco de papeizinhos com cola fraca e reposicionável, lançado pela empresa americana 3M."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "O post-it nasceu porque um funcionário da três ême queria marcadores de página que não caíssem de que livro?",
    "resposta": "Do hinário do coral da igreja",
    "fonte": [
      "https://en.wikipedia.org/wiki/Post-it_note"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Post-it_note",
        "situacao": "ok",
        "texto": "A Post-it note (or sticky note) is a small piece of paper with a re-adherable strip of glue on its back, made for temporarily attaching notes to documents and other surfaces. A low-tack pressure-sensitive adhesive allows the notes to be easily attached, removed, and even re-posted elsewhere without leaving residue. The Post-it's signature adhesive was discovered accidentally by a scientist at 3M.\n[…]\nIn 2019, the Post-it App was relaunched.\n[…]\nIn 2010, the creators of the Post-it note joined the National Inventors Hall of Fame as a result of the widespread success of the Post-it note.\n[…]\nPost-it notes may have a positive effect on how people interact with information presented to them. This is backed up by research that aimed to determine how attaching a blank Post-it note to a survey affected participation in the survey. The research found that the surveys with affixed Post-it notes were more likely to be completed and returned, and that the participants were more likely to write higher quality responses to the questions.\n[…]\nIn 2000, the 20th anniversary of Post-it notes was celebrated by having artists create artworks on the notes. One such work, by the artist R. B. Kitaj, sold for £640 in an auction, making it the most valuable Post-it note on record.\n[…]\nSidewalks Labs, a Google-owned company that focuses on urban innovation, opened a public workspace in Quayside, Toronto, that supports public engagement in the city-planning process. Plans are presented here and the public can freely share their ideas, opinions, and feedback on potential projects, often in the form of Post-it note annotations.\n[…]\nPost-it homepage\n[…]\n\"Sticking around – the Post-it note is 20\". BBC News. 2000-04-06.\n[…]\nPost-it Note History by 3M\n[…]\nStavroula Karapapa, (2019). Post-it note. In Claudy Op den Kamp and Dan Hunter (eds.), A History of Intellectual Property in 50 Objects, Cambridge University Press."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Post-it",
        "situacao": "ok",
        "texto": "Um post-it (ou nota adesiva) é um pequeno pedaço de papel com uma tira de cola re-adesiva no verso, feito para anexar notas temporariamente a documentos e outras superfícies. Um adesivo sensível à pressão de baixa aderência permite que as notas sejam facilmente anexadas, removidas e até recolocadas em outro lugar sem deixar resíduos. Originalmente pequenos quadrados amarelos, os post-its e produto\n[…]\nAté 2019, existem pelo menos 26 cores documentadas de post-its.\n[…]\nEm 1974, um colega que havia participado de um de seus seminários, Art Fry, teve a ideia de usar o adesivo para ancorar seu marcador em seu hinário. Fry então utilizou a política de \"bootlegging permitido\" da 3M para desenvolver a ideia. A cor amarelo-pálido das notas originais foi escolhida por acaso, a partir da cor do papel de rascunho usado pelo laboratório ao lado da equipe do Post-It.\n[…]\nEm 2018, a 3M lançou o \"Post-It Extreme Notes\", que são mais duráveis ​​e resistentes à água e que aderem à madeira e outros materiais em ambientes industriais.\n[…]\nAlan Amron afirmou ter sido o inventor real em 1973 que divulgou a tecnologia Post-it para a 3M em 1974. Seu processo de 1997 contra a 3M foi resolvido com um pagamento da 3M para Amron. Como parte do acordo, a Amron concordou em não fazer reclamações futuras contra a empresa, a menos que o acordo fosse violado. No entanto, em 2016, ele abriu um novo processo contra a 3M, afirmando que a 3M estava alegando erroneamente ser a inventora e pedindo quatrocentos milhões de dólares em danos.\n[…]\nEm julho de 2016, um ex-funcionário do departamento de marketing da 3M, Daniel Dassow, admitiu que em 1974 Alan Amron havia divulgado sua invenção de notas adesivas Press-on para a 3M.\n[…]\nPost-it homepage\n[…]\nBBC news article on 20th anniversary of Post-it Notes\n[…]\nThe Rake magazine article on 25th anniversary of Post-it notes\n[…]\nPost-it Note History by 3M",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Radioatividade",
      "descricao": "Emissão espontânea de radiação por núcleos atômicos instáveis, descoberta por Henri Becquerel em 1896."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1896, o francês Henri Becquerel percebeu a radioatividade porque sais de urânio, guardados no escuro, marcaram o quê?",
    "resposta": "Chapas fotográficas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Henri_Becquerel",
      "https://en.wikipedia.org/wiki/Radioactive_decay"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Henri_Becquerel",
        "situacao": "ok",
        "texto": "Antoine Henri Becquerel (15 December 1852 – 25 August 1908) was a French experimental physicist who shared the 1903 Nobel Prize in Physics with Marie and Pierre Curie for his discovery of radioactivity.\n[…]\nThere followed a period of intense research into radioactivity, including the determination that the element thorium is also radioactive and the discovery of additional radioactive elements polonium and radium by Marie Curie and her husband, Pierre Curie. The intensive research of radioactivity led to Becquerel publishing seven papers on the subject in 1896.\n[…]\nAs simultaneity often happens in science, radioactivity came close to being discovered nearly four decades earlier in 1857, when Abel Niépce de Saint-Victor, who was investigating photography under Michel Eugène Chevreul, observed that uranium salts emitted radiation that could darken photographic emulsions. By 1861, Niepce de Saint-Victor realized that uranium salts produce \"a radiation that is invisible to our eyes\". Niepce de Saint-Victor knew Edmond Becquerel, Henri Becquerel's father.\n[…]\nDescribing them to the French Academy of Sciences on 27 February 1896, he said:\n[…]\nHenri Becquerel on Nobelprize.org  including the Nobel Lecture, \"On Radioactivity, a New Property of Matter\", 11 December 1903\n[…]\nAnnotated bibliography for Henri Becquerel from the Alsos Digital Library for Nuclear Issues\n[…]\nHenri Becquerel, SI-derived unit of radioactivity\n[…]\n\"Henri Becquerel: The Discovery of Radioactivity\", Becquerel's 1896 articles online and analyzed on BibNum [click 'à télécharger' for English version].\n[…]\n\"Episode 4 – Henri Becquerel\". École polytechnique. 30 January 2019. Archived from the original on 11 December 2021 – via YouTube."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Radioactive_decay",
        "situacao": "ok",
        "texto": "Radioactive decay (also known as nuclear decay, radioactivity, radioactive disintegration, or nuclear disintegration) is the process by which an unstable atomic nucleus loses energy by radiation. A material containing unstable nuclei is considered radioactive. Three of the most common types of decay are alpha, beta, and gamma decay. The weak force is the mechanism that is responsible for beta deca\n[…]\nHenri Poincaré laid the seeds for the discovery of radioactivity through his interest in and studies of X-rays, which significantly influenced physicist Henri Becquerel. Radioactivity was discovered in 1896 by Becquerel while working with phosphorescent materials. These materials glow in the dark after exposure to light, and Becquerel suspected that the glow produced in cathode-ray tubes by X-rays might be associated with phosphorescence.\n[…]\nThe International System of Units (SI) unit of radioactive activity is the becquerel (Bq), named in honor of the scientist Henri Becquerel. One Bq is defined as one transformation (or decay or disintegration) per second.\n[…]\nIf an artifact is found to have radioactivity of 4 dpm per gram of its present C, we can find the approximate age of the object using the above equation:\n[…]\nThe Lund/LBNL Nuclear Data Search – Contains tabulated information on radioactive decay types and energies.\n[…]\nBeach, Chandler B., ed. (1914). \"Becquerel Rays\" . The New Student's Reference Work . Chicago: F. E. Compton and Co.\n[…]\nAnnotated bibliography for radioactivity from the Alsos Digital Library for Nuclear Issues Archived 7 October 2010 at the Wayback Machine\n[…]\n\"Henri Becquerel: The Discovery of Radioactivity\", Becquerel's 1896 articles online and analyzed on BibNum [click 'à télécharger' for English version].\n[…]\n\"Radioactive change\", Rutherford & Soddy article (1903), online and analyzed on Bibnum [click 'à télécharger' for English version]"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Antoine_Henri_Becquerel",
        "situacao": "ok",
        "texto": "Antoine-Henri Becquerel (Paris, 15 de dezembro de 1852 — Le Croisic, 25 de agosto de 1908) foi um físico francês. Becquerel foi o responsável pelos estudos que levaram à descoberta do fenômeno da radioatividade. Era filho de Alexandre-Edmond Becquerel.\n[…]\nEm 1895 descobriu acidentalmente uma nova propriedade da matéria que, posteriormente, denominou de radioatividade. Ao colocar sais de urânio sobre uma placa fotográfica em local escuro, verificou que a placa enegrecia. Os sais de urânio emitiam uma radiação capaz de atravessar papéis negros e outras substâncias opacas a luz. Estes raios foram denominados, a princípio, de Raios B em sua homenagem.\n[…]\nOs primeiros trabalhos de Becquerel foram realizados com base nos estudos de polarização de plano de luzes, com o fenômeno da fosforescência e com a absorção de luz por cristais e também o magnetismo terrestre. Após o descobrimento do raio X por Wilhelm Conrad Röntgen, Antoine foi levado a estudar o fenômeno com sais de urânio e a forma como eles são afetados pela luz. Por acidente, Henri descobriu que os raios urânicos emitidos eram capazes de penetrar e imprimir imagens em chapas fotográficas.\n[…]\nHenri fez diversos estudos para investigar se uma substância fluorescente poderia emitir raios X quando era submetida à luz do sol. Ele expôs ao sol uma chapa fotográfica coberta com papel opaco e pedras de sais de urânio, após um determinado tempo foi constatado que a chapa foi manchada pelos sais. Concluiu-se que a radiação não propagava pelo efeito da luz do Sol, mas por alguma propriedade dos sais utilizados no experimento, no caso, sais de Urânio.\n[…]\nMedia relacionados com Antoine Henri Becquerel no Wikimedia Commons\n[…]\nAntoine Henri Becquerel em Nobelprize.org",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Alfred Nobel",
      "descricao": "Químico e industrial sueco (1833–1896), inventor da dinamite e criador do Prêmio Nobel."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Segundo uma história famosa, que erro de um jornal francês, em 1888, teria levado Alfred Nobel a repensar o próprio legado?",
    "resposta": "Publicar o obituário dele por engano",
    "fonte": [
      "https://en.wikipedia.org/wiki/Alfred_Nobel"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Alfred_Nobel",
        "situacao": "ok",
        "texto": "Alfred Bernhard Nobel ( noh-BEL; Swedish: [ˈǎlːfrɛd nʊˈbɛlː] ; 21 October 1833 – 10 December 1896) was a Swedish chemist, inventor, engineer, and businessman. Nobel is known for inventing dynamite, as well as having bequeathed his fortune to establish the Nobel Prizes. He worked on various important contributions and inventions to science, holding 355 patents during his life.\n[…]\nThere is a well-known story about the origin of the Nobel Prize, although historians have been unable to verify it, and some dismiss the story as a myth. In 1888, the death of his brother Ludvig supposedly caused several newspapers to publish obituaries of Alfred in error.\n[…]\nAlfred Nobel, who became rich by finding ways to kill more people faster than ever before, died yesterday.\" Nobel read the obituary and was appalled at the idea that he would be remembered in this way. His decision to posthumously donate the majority of his wealth to found the Nobel Prize has been credited to him wanting to leave behind a better legacy. However, it has been questioned whether or not the obituary in question actually existed.\n[…]\nAn actual obituary (pictured) stated \"A man who can only with the utmost difficulty be considered a benefactor of mankind has died yesterday at Cannes. It is Mr. Nobel, inventor of dynamite. Mr.\n[…]\nFor example, the 1984 public artwork Nobel Metamorphoses in Troisdorf, Germany – at the time the location of the Dynamit Nobel headquarters – contrasts war death statistics to peace prize recipients since the latter's inauguration in 1901 through a critical lens.\n[…]\nAlfred Nobel US Patent No 78,317, dated 26 May 1868\n[…]\nThe Man Behind the Prize – Alfred Nobel\n[…]\nBiography at the Norwegian Nobel Institute\n[…]\nNewspaper clippings about Alfred Nobel in the 20th Century Press Archives of the ZBW\n[…]\nWorks by or about Alfred Nobel at the Internet Archive\n[…]\nAlfred Nobel and his unknown coworker"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Alfred_Nobel",
        "situacao": "ok",
        "texto": "(Estocolmo, 21 de outubro de 1833 – Sanremo, 10 de dezembro de 1896) foi um químico, engenheiro, inventor, empresário e filantropo sueco. Ele é mais conhecido por ter deixado sua fortuna para estabelecer o Prêmio Nobel, embora também tenha feito várias contribuições importantes para a ciência, mantendo 355 patentes em sua vida.\n[…]\nFoi publicado na Suécia em 2003 e foi traduzido para o esloveno, francês, italiano e espanhol.\n[…]\nEm 1888, a morte de seu irmão Ludvig fez com que vários jornais publicassem obituários de Alfredo por engano. Um jornal francês o condenou por sua invenção de explosivos militares – e não, como é comumente citado, dinamite, que era usado principalmente para aplicações civis – e dizem que o levou a decidir deixar um legado melhor após sua morte.[carece de fontes]? O obituário dizia, Le marchand de la mort est mort (\"O mercador da morte está morto\"), e continuou dizendo, \"Dr.\n[…]\nAlfred Nobel, que ficou rico encontrando maneiras de matar mais pessoas mais rápido do que nunca, morreu ontem\". Nobel leu o obituário e ficou chocado com a ideia de que ele seria lembrado dessa maneira. Sua decisão de doar postumamente a maior parte de sua riqueza para fundar o Prêmio Nobel foi creditada, pelo menos em parte, a ele querer deixar um legado melhor.\n[…]\nEm 1969 criou-se um novo prémio na área da Economia (financiado pelo Banco da Suécia), o Prémio de Ciências Económicas em memória de Alfred Nobel. Mas de fato, esse prêmio não tem ligação com Alfred Nobel, não sendo pago com o dinheiro privado da Fundação Nobel, mas com dinheiro público do banco central sueco, embora os ganhadores sejam também escolhidos pela Academia Real das Ciências da Suécia. O vencedor do Prêmio Nobel recebe uma medalha Nobel em ouro e um diploma Nobel.\n[…]\nMedia relacionados com Alfred Nobel no Wikimedia Commons",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "SOS",
      "descricao": "Sinal internacional de socorro do código Morse, formado por três pontos, três traços e três pontos."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "O sinal de socorro esse ó esse não é sigla de nada. Por que essas letras foram escolhidas para o código Morse?",
    "resposta": "Formam uma sequência fácil de transmitir e reconhecer",
    "fonte": [
      "https://en.wikipedia.org/wiki/SOS"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/SOS",
        "situacao": "ok",
        "texto": "SOS is a Morse code distress signal ( ▄ ▄ ▄ ▄▄▄ ▄▄▄ ▄▄▄ ▄ ▄ ▄ ), used internationally, originally established for maritime use. In formal notation SOS is written with an overscore line (SOS), to indicate that the Morse code equivalents for the individual letters of \"SOS\" are transmitted as an unbroken sequence of three dots / three dashes / three dots, with no spaces between the letters.\n[…]\nIn International Morse Code three dots form the letter \"S\" and three dashes make the letter \"O\", so \"S O S\" became a common way to remember the order of the dots and dashes.\n[…]\nIn both the 1 April 1905 German law and the 1906 international regulations, the distress signal is specified as a continuous Morse code sequence of three dots / three dashes / three dots, with no mention of any alphabetic equivalents.\n[…]\nAdditional warning and distress signals followed the introduction of SOS. On 20 January 1914, the London International Convention on Safety of Life at Sea adopted as the \"Safety Signal\" the Morse code sequence \"TTT\"  ▄▄▄  ▄▄▄  ▄▄▄  (three \"T's\" ( ▄▄▄ ))—spaced normally as three letters so as not to be confused with the three dashes of the letter O ( ▄▄▄ ▄▄▄ ▄▄▄ )—and used for messages to ships \"involving safety of navigation and being of an urgent character\" but short of an emergency.\n[…]\nWith the development of audio radio transmitters, there was a need for a spoken distress phrase, and \"Mayday\" (from French m'aider \"help me\") was adopted by the 1927 International Radio Convention as the spoken equivalent of SOS. For \"TTT\", the equivalent spoken signal is \"Sécurité\" (from French sécurité \"safety\") for navigational safety, while \"Pan-pan\" (from French panne \"breakdown\"; Morse \"XXX\") signals an urgent but not immediately dangerous situation.\n[…]\nProsigns for Morse code"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/SOS",
        "situacao": "ok",
        "texto": "A palavra SOS é um sinal informativo de telecomunicações utilizado para solicitar auxílio em situações de necessidade de socorro. Quando no formato de código Morse, esse sinal é grafado (▄ ▄ ▄ ▄▄▄ ▄▄▄ ▄▄▄ ▄ ▄ ▄) e transmitido segundo esse padrão.\n[…]\nAssim como ocorria na telegrafia usada em terra, o código Morse também era o método usado pelos operadores de comunicações das embarcações para a transmissão sem fio de informações diversas. Mas qual sinal de socorro era universalmente entendido?\n[…]\nFoi inclusive por esta razão que em 15 de abril de 1912 uma enorme embarcação transmitiu o sinal CQD-MGY em modo broadcast: o grupo de letras \"MGY\" era o código de identificação do navio Titanic.\n[…]\nA guarda costeira britânica respondeu imediatamente, embora inicialmente acreditando tratar-se de uma brincadeira: era noite de réveillon, há muitos anos ninguém ali havia escutado um código Morse de \"SOS\", e de repente eles estavam escutando um \"SOS\" exatamente no final do último dia do seu uso oficial. Felizmente, toda a tripulação do MV Oak conseguiu se deslocar para os botes salva-vidas e aguardar o resgate, após haverem transmitido o último \"SOS\" dos 90 anos de história desse sinal.\n[…]\nO SOS ainda é reconhecido como um sinal de socorro padrão que pode ser usado com qualquer método de sinalização. Ele tem sido usado como um sinal visual de socorro, consistindo em três curtos/três longos/três curtos flashes de luz, como de um espelho de sobrevivência. Em alguns casos, as letras individuais \"S O S\" foram soletradas, por exemplo, estampadas em um banco de neve ou formadas de troncos em uma praia.\n[…]\n\"S O S\" sendo legível de cabeça para baixo, bem como do lado direito para cima (como um ambigrama) é uma vantagem para o reconhecimento visual.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Óculos bifocais",
      "descricao": "Óculos com lentes divididas em duas partes, uma para enxergar de longe e outra de perto, atribuídos a Benjamin Franklin."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O para-raios e as lentes bifocais, que ajudam a enxergar de perto e de longe, são atribuídos ao mesmo inventor. Quem?",
    "resposta": "Benjamin Franklin",
    "fonte": [
      "https://en.wikipedia.org/wiki/Bifocals",
      "https://en.wikipedia.org/wiki/Lightning_rod"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bifocals",
        "situacao": "ok",
        "texto": "Bifocals are eyeglasses with two distinct optical powers correcting vision at both long and short distances. Bifocals are commonly prescribed to people with presbyopia who also require a correction for myopia, hyperopia or astigmatism.\n[…]\nBenjamin Franklin is generally credited with the invention of bifocals. One account states that Franklin cut his lenses in half so that he could follow speakers of French at court by reading their lips.\n[…]\nHistorians have produced some evidence to suggest that others may have come before him in the invention; however, a correspondence between George Whatley and John Fenno, editor of the Gazette of the United States, suggested that Franklin had indeed invented bifocals, and perhaps 50 years earlier than had been originally thought. However, the College of Optometrists concluded:\n[…]\nUnless further evidence emerges all we can say for certain is that Franklin was one of the first people to wear split bifocals and this act of wearing them caused his name to be associated with the type from an early date. This no doubt contributed greatly to their popularisation. The evidence implies, however, that when he sought to order lenses of this type the London opticians were already familiar with them.\n[…]\nOther members of Franklin's circle of British friends may have worn them even earlier, from the 1760s, but it is at best uncertain (and arguably improbable?) that split bifocal lenses had a famous gentleman inventor. Since many inventions are developed independently by more than one person, it is possible that the invention of bifocals may have been such a case.\n[…]\nJohn Isaac Hawkins, the inventor of trifocal lenses, coined the term bifocals in 1824 and credited Benjamin Franklin."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Lightning_rod",
        "situacao": "ok",
        "texto": "A lightning rod or lightning conductor (British English) is a metal rod mounted on a structure and intended to protect it from a lightning strike. If lightning hits the structure, it is most likely to strike the rod and be conducted to ground through a wire, rather than passing through the structure, where it could start a fire or cause electrocution. In technical documents, lightning rods are gen\n[…]\nThe first proper lightning rod was assembled by Father Prokop Diviš, a Czech priest and scientist, who erected a grounded lightning rod in 1754. Diviš's design involved a vertical iron rod topped with a grounded wire, intended to attract lightning strikes and safely conduct them to the ground. His experimental apparatus, known as the weather machine predated Benjamin Franklin's more widely recognized experiments.\n[…]\nIn what later became the United States, the pointed lightning rod conductor (not grounded), also called a lightning attractor or Franklin rod, was conceived by Benjamin Franklin in 1749 as part of his groundbreaking exploration of electricity. Although not the first to suggest a correlation between electricity and lightning, Franklin was the first to propose a workable system for testing his hypothesis.\n[…]\nThe Nevyansk Tower was built between 1721 and 1745, on the orders of industrialist Akinfiy Demidov. The Nevyansk Tower was built 28 years before Benjamin Franklin's experiment and scientific explanation. However, the true intent behind the metal rooftop and rebars remains unknown.\n[…]\nThe apparatus was, however, mounted on a free-standing pole and probably better grounded than Franklin's lightning rods at that time, so it served the purpose of a lightning rod. After local protests, Diviš had to cease his weather experiments around 1760."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lente_bifocal",
        "situacao": "ok",
        "texto": "Lentes bifocais são óculos com dois distintos potências ópticas. Lentes bifocais são normalmente prescritas para pessoas com presbiopia que também requer uma correção para miopia, hipermetropia e/ou astigmatismo.\n[…]\nBenjamin Franklin é creditado geralmente pela invenção da lente bifocal. Historiadores obtiveram algumas evidências sugerindo que outras pessoas podem ter chegado antes de Franklin à invenção; contudo, uma correspondência entre George Whatley e John Fenno, editor do Gazette of the United States, sugere que Franklin inventou realmente a lente bifocal, e talvez 50 anos antes do que se pensava originalmente.\n[…]\nComo diversas invenções são desenvolvidas independentemente por mais de uma pessoa, é possível que a invenção das lentes bifocais seja um destes casos. No entanto, Benjamin Franklin foi um dos primeiros a usar lentes bifocais, e as correspondências de Franklin levam a crer que ele inventou-as independentemente, indiferentemente de ser o primeiro a apresentar tal invenção.\n[…]\nJohn Isaac Hawkins, inventor das lentes trifocais, cunhou o termo bifocal em 1824 e o creditou ao Dr. Franklin.\n[…]\nLetocha, Charles E. (1990). «The Invention and Early Manufacture of Bifocals». Survey of Ophthalmology. 35 (3): 226–235. PMID 2274850. doi:10.1016/0039-6257(90)90092-A\n[…]\nFranklin's letters to Whatley concerning double spectacles.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Alberto Santos-Dumont",
      "descricao": "Aviador e inventor brasileiro (1873–1932), que voou com o 14-bis em Paris em 1906."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que acessório o joalheiro Louis Cartier criou para o amigo Santos-Dumont ver as horas sem tirar as mãos dos controles da aeronave?",
    "resposta": "Relógio de pulso",
    "fonte": [
      "https://en.wikipedia.org/wiki/Alberto_Santos-Dumont",
      "https://en.wikipedia.org/wiki/Cartier_(jeweler)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Alberto_Santos-Dumont",
        "situacao": "ok",
        "texto": "Alberto Santos-Dumont (self-stylised as Alberto Santos=Dumont; 20 July 1873 – 23 July 1932) was a Brazilian aeronaut, sportsman, inventor, and one of the few people to have contributed significantly to the early development of both lighter-than-air and heavier-than-air aircraft. The heir of a wealthy family of coffee producers, he dedicated himself to aeronautical study and experimentation in Pari\n[…]\nIn 1904, renowned French jeweller Louis Cartier debuted the Santos-Dumont, a watch designed for the aviator himself. It was the first wristwatch the Maison made, and the collection retails to this day.\n[…]\nSantos-Dumont's friend Louis Cartier created a wristwatch for him in 1904. Up to that point, only women had wristwatches as they were considered a jewelry or fashion item only suitable for women; men only carried pocket watches. But Santos-Dumont needed both hands for flying and so Cartier created a wristwatch with a leather strap for him and called it the Cartier-Santos-Dumont.\n[…]\n(...) Hoffman did not understand the customs and values of the time and saw everything with the distorted view that was held at that time in the United States.\" Also, in his article \"Alberto Santos-Dumont: Pioneiro da Aviação,\" Barros notes that Santos-Dumont had a media-heralded engagement to Edna Powers, daughter of an American millionaire. Cosme Degenar Drumond, writer of \"Alberto Santos-Dumont: Novas Revelações,\" says that in France Santos-Dumont has \"a reputation as a conqueror\".\n[…]\nNicolaou, Stéphane (1997). Santos Dumont – Dandy et Génie de l'Aéronautique (in French). Le Bourget: Musée de l'Air et de l'Espace.\n[…]\nWorks by Alberto Santos-Dumont at LibriVox (public domain audiobooks)\n[…]\nWorks by or about Alberto Santos-Dumont at the Internet Archive\n[…]\nAlberto Santos Dumont Article by writer Patricia Nell Warren.\n[…]\nAviation Pioneer Santos-Dumont, Technological Institute of Aeronautics (ITA)."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Cartier_(jeweler)",
        "situacao": "ok",
        "texto": "Cartier ( KAR-tee-ay, French: [kaʁtje] ) is a French luxury goods conglomerate that designs, manufactures, distributes and sells jewelry, watches, leather goods, sunglasses and eyeglasses. Founded in 1847 by Louis-François Cartier (1819–1904) in Paris, France, the company remained under family control until 1964. The company is headquartered in Paris and is currently a subsidiary of the Swiss Rich\n[…]\nIn 1904, Brazilian pioneer aviator, Alberto Santos-Dumont complained to his friend Louis Cartier of the unreliability and impracticality of using pocket watches while flying. Cartier designed a flat wristwatch with a distinctive square bezel that was favored by Santos-Dumont and many other customers. This was the first and only time the brand would name a watch after its original wearer. The \"Santos\" watch was Cartier's first men's wristwatch.\n[…]\n1978 – Creation of the Santos de Cartier watch with a gold and steel bracelet. Creation of the first Cartier scarf collection.\n[…]\n1981 – Launch of the Must de Cartier and Santos de Cartier perfumes.\n[…]\nFrom its inception, Empress Eugénie was a valued client of Louis-François Cartier and Alfred Cartier, which solidified the reputation of the jeweler. Princess Mathilde, a relative of Napoleon and cousin of Emperor Napoleon III, made her initial purchase in 1856 and maintained her loyalty as a customer. The diamond tiara adorned with olive leaf motifs that Princess Marie Bonaparte wore highlighted the splendor of the Bonaparte family.\n[…]\nGrace Kelly possessed a diverse collection of jewelry, including her engagement ring from Prince Rainier III in 1955, princely emblems, various brooches, and clips she wore at the birth of Prince Albert. The Duchess of Cambridge wore a Cartier tiara from 1936 on her wedding day, which was originally commissioned by King George VI for his wife and later gifted to Princess Elizabeth on her 18th birthday.\n[…]\nCartier Tank"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Santos_Dumont",
        "situacao": "ok",
        "texto": "Alberto Santos Dumont (Palmira, 20 de julho de 1873 – Guarujá, 23 de julho de 1932) foi um aeronauta, esportista, autodidata e inventor brasileiro. Santos Dumont projetou, construiu e voou os primeiros balões dirigíveis com motor a gasolina. Esse mérito lhe é garantido internacionalmente pela conquista do Prêmio Deutsch em 1901, quando em um voo contornou a Torre Eiffel com o seu dirigível Nº 6, t\n[…]\nO avião havia sido inventado, mas ainda era uma máquina muito precária. Para disputar o Prêmio do Aeroclube da França, Santos Dumont inseriu entre as asas duas superfícies octogonais (ailerons rudimentares) com as quais esperava obter melhor controle da direção e criou o Oiseau de Proie III. Dumont foi pioneiro ao implementar os ailerons em sua aeronave.\n[…]\nA Lei 7 243, de 4 de novembro de 1984, concedeu-lhe o título de Patrono da Aeronáutica Brasileira. Em 13 de outubro de 1997, o então presidente dos Estados Unidos, Bill Clinton em visita ao Brasil, discursou no Palácio Itamaraty, se referindo a Santos Dumont como o \"pai da aviação\".\n[…]\nEm 2012, a Cartier produziu uma série de relógios com o nome do piloto brasileiro, celebrando a parceria entre a marca e Santos Dumont, responsável pelo desenho que até hoje é característico da empresa; como peça publicitária foi realizado um premiado filme pela francesa Quad Productions France com animação digital a mesclar-se em locações reais, em que aparece o piloto brasileiro interagindo com um leopardo, figura central da peça — intitulada L'Odyssée de Cartier.\n[…]\nAlém disso, em seu artigo \"Alberto Santos-Dumont: pioneiro da aviação\", Barros nota que Dumont chegou a ter um noivado anunciado pela mídia com Edna Powers, filha de um milionário americano. Além disso, Cosme Degenar Drumond, escritor de \"Alberto Santos-Dumont: Novas Revelações\", diz que na França Dumont tem \"fama de conquistador\".\n[…]\n«Histórias do Brasil - Santos Dumont»  — TV Senado",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Alexander Graham Bell",
      "descricao": "Inventor e cientista nascido na Escócia, a quem se atribui a primeira patente prática do telefone."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Em 1876, na exposição do centenário dos Estados Unidos, que monarca ficou espantado ao ouvir o telefone de Graham Bell?",
    "resposta": "Dom Pedro II",
    "fonte": [
      "https://en.wikipedia.org/wiki/Alexander_Graham_Bell",
      "https://en.wikipedia.org/wiki/Pedro_II_of_Brazil"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Alexander_Graham_Bell",
        "situacao": "ok",
        "texto": "Alexander Graham Bell ( ; born Alexander Bell; March 3, 1847 – August 2, 1922) was a  Scottish-born Canadian-American inventor, scientist, and engineer who is credited with patenting the first practical telephone. He also co-founded the American Telephone and Telegraph Company (AT&T) in 1885.\n[…]\nBell began a series of public demonstrations and lectures to introduce the new invention to the scientific community as well as the general public. A short time later, his demonstration of an early telephone prototype at the 1876 Centennial Exposition in Philadelphia brought the telephone to international attention. Influential visitors to the exhibition included Emperor Pedro II of Brazil.\n[…]\nPedro II of Brazil was the first person to buy stock in the Bell Telephone Company. One of the first telephones in a private residence was installed in his palace in Petrópolis, his summer retreat forty miles (sixty-four kilometres) from Rio de Janeiro.\n[…]\nOn October 9, 1876, Alexander Graham Bell and Thomas A. Watson talked by telephone to each other over a two-mile wire stretched between Cambridge and Boston. It was the first wire conversation ever held. Yesterday afternoon [on January 25, 1915], the same two men talked by telephone to each other over a 3,400-mile wire between New York and San Francisco. Dr. Bell, the veteran inventor of the telephone, was in New York, and Mr. Watson, his former associate, was on the other side of the continent.\n[…]\nAlexander Graham Bell portrayed by John Bach (1992). The Sound and the Silence (Television production). Canada, New Zealand, Ireland: Atlantis Films.\n[…]\nThe Animated Hero Classics: Alexander Graham Bell (1995) at IMDb\n[…]\nGray, Charlotte (May 2013). \"We Had No Idea What Alexander Graham Bell Sounded Like. Until Now\". Smithsonian."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pedro_II_of_Brazil",
        "situacao": "ok",
        "texto": "Dom Pedro II (Pedro de Alcântara João Carlos Leopoldo Salvador Bibiano Francisco Xavier de Paula Leocádio Miguel Gabriel Rafael Gonzaga; 2 December 1825 – 5 December 1891), known as \"the Magnanimous\" (Portuguese: O Magnânimo), was the second and final emperor of the Empire of Brazil. He reigned from 1831 until his deposition in the military coup of 1889, presiding over the longest and most stable \n[…]\nOnce again, the Emperor traveled abroad, this time going to the United States for the Centennial Exposition of the Declaration of Independence. He was accompanied by his faithful servant Rafael, who had raised him from childhood. Pedro II arrived in New York City on 15 April 1876, and set out from there to travel throughout the country; going as far as San Francisco in the west, New Orleans in the south, Washington, D.C., and north to Toronto, Ontario, Canada.\n[…]\nA national holiday was declared and the return of the Emperor as a national hero was celebrated throughout the country. Thousands attended the main ceremony in Rio de Janeiro where, according to historian Pedro Calmon, the \"elderly people cried. Many knelt down. All clapped hands. There was no distinction between republicans and monarchists. They were all Brazilians.\" This homage marked the reconciliation of Republican Brazil with its monarchical past.\n[…]\nIn a manner similar to methods which were used by republicans, historians point to the Emperor's virtues as an example to be followed, although none go so far as to advocate a restoration of the monarchy. Historian Richard Graham noted that \"[m]ost twentieth-century historians, moreover, have looked back on the period [of Pedro II's reign] nostalgically, using their descriptions of the Empire to criticize—sometimes subtly, sometimes not—Brazil's subsequent republican or dictatorial regimes.\"\n[…]\nThe ancestry of Emperor Pedro II:\n[…]\nWorks by or about Pedro II of Brazil at Wikisource"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Alexander_Graham_Bell",
        "situacao": "ok",
        "texto": "Alexander Graham Bell (Edimburgo, 3 de março de 1847 – Beinn Bhreagh, 2 de agosto de 1922) foi um cientista, inventor e fonoaudiólogo britânico, naturalizado estadounidense, fundador da Bell Telephone Company, a empresa protagonista dos primeiros passos da implantação do telefone como meio de comunicação de massa à escala internacional.\n[…]\nCom financiamento do seu sogro americano, em 7 de Março de 1876, o Escritório de Patentes dos Estados Unidos concedeu-lhe a patente número 174 465 que cobre \"o método de, e o instrumento para, transmitir sons vocais ou outros telegraficamente, causando ondulações eléctricas, similares às vibrações do ar que acompanham o som vocal\", ou seja o telefone.\n[…]\nBell patenteou o seu telefone nos Estados Unidos no início de 1876, e por estranha coincidência, Elisha Gray submeteu no mesmo dia uma outra patente do mesmo género. O transmissor de Gray é suposto ter sido inspirado num dispositivo muito antigo conhecido como 'telefone dos amantes', no qual dois diafragmas são unidos por um fio esticado, e a voz é transmitida unicamente pela vibração mecânica do fio.\n[…]\nA Bell Telephone Company foi fundada em 1877, pelo sogro de Alexander Graham Bell, Gardiner Greene Hubbard, que também ajudou a organizar a New England Telephone and Telegraph Company. Em 1879, a Bell Company comprou da Western Union as patentes do microfone de carbono (grafite ou antracite), criado por Thomas Edison. Isto tornou o telefone mais eficiente para chamadas de longa distância - não era mais necessário gritar para ser ouvido.\n[…]\nDom Pedro II, imperador do Brasil, foi a primeira pessoa a comprar ações da Bell Telephone Company. Um dos primeiros telefones em residência privada foi instalado no palácio imperial de Petrópolis, sua residência de verão, a cerca de 65 quilômetros do Rio de Janeiro.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Joseph Swan",
      "descricao": "Físico e químico inglês (1828–1914), pioneiro da lâmpada elétrica e sócio de Edison na empresa Ediswan."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O britânico Joseph Swan e o americano Thomas Edison acabaram fundando uma empresa juntos por terem desenvolvido a mesma invenção. Qual?",
    "resposta": "Lâmpada incandescente",
    "fonte": [
      "https://en.wikipedia.org/wiki/Joseph_Swan"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Joseph_Swan",
        "situacao": "ok",
        "texto": "Sir Joseph Wilson Swan (31 October 1828 – 27 May 1914) was an English physicist, chemist, and inventor. He is known as an independent early developer of a successful incandescent light bulb, and is responsible for developing the first use of incandescent lights used to illuminate homes and public buildings, including the Savoy Theatre, London, in 1881.\n[…]\nThe Savoy, a state-of-the-art theatre in the City of Westminster, London, was the first public building in the world lit entirely by electricity. Swan supplied about 1,200 incandescent lamps, powered by an 88.3-kilowatt (118.4-horsepower) generator on open land near the theatre.\n[…]\nThe first private residence, other than the inventor's, lit by the new incandescent lamp was that of his friend, Sir William Armstrong at Cragside, near Rothbury, Northumberland. Swan personally supervised the installation there in December 1880. Swan had formed \"The Swan Electric Light Company Ltd\" with a factory at Benwell, Newcastle, and had established the first commercial manufacture of incandescent lightbulbs by the beginning of 1881.\n[…]\nThe first ship to use Swan's invention was The City of Richmond, owned by the Inman Line. She was fitted with incandescent lamps in June 1881. The Royal Navy also introduced them to its ships soon after; with HMS Inflexible having the new lamps installed in the same year. An early employment in engineering was during the digging of the Severn Tunnel, where the contractor Thomas Walker installed \"20-candlepower lamps\" in the temporary pilot tunnels.\n[…]\nIn what are considered to be independent lines of inquiry, Swan's incandescent electric lamp was developed at the same time that Thomas Edison was working on his incandescent lamp, with Swan's first successful lamp and Edison's lamp both patented in 1880.\n[…]\n\"Swan, Sir Joseph Wilson\" . Encyclopædia Britannica (11th ed.). 1911."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Joseph_Wilson_Swan",
        "situacao": "ok",
        "texto": "Sir John Anthony Pople (31 de outubro de 1925 – 15 de março de 2004) foi um químico teórico britânico que foi premiado com o Prêmio Nobel de Química com Walter Kohn em 1998 por seu desenvolvimento de métodos computacionais em química quântica.\n[…]\nApós obter seu PhD, foi pesquisador no Trinity College, Cambridge e, a partir de 1954, professor na faculdade de matemática de Cambridge. Em 1958, mudou-se para o National Physical Laboratory, perto de Londres, como chefe da nova divisão de física básica. Mudou-se para os Estados Unidos da América em 1964, onde viveu o resto de sua vida, embora tenha mantido a cidadania britânica.\n[…]\nPople foi pioneiro no desenvolvimento de métodos computacionais mais sofisticados, chamados métodos de química quântica ab initio, que usam conjuntos de base de orbitais do tipo Slater ou orbitais gaussianos para modelar a função de onda. Embora nos primeiros dias esses cálculos fossem extremamente caros para serem realizados, o advento de microprocessadores de alta velocidade os tornou muito mais viáveis hoje.\n[…]\nEm 1991, Pople parou de trabalhar no Gaussian e, vários anos depois, ele desenvolveu (com outros) o programa de química computacional Q-Chem. A partida do Prof. Pople do Gaussian, juntamente com a subsequente proibição de muitos cientistas proeminentes, inclusive ele mesmo, de usar o software, deu origem a uma controvérsia considerável entre a comunidade de química quântica.\n[…]\nPople recebeu o Prêmio Wolf de Química em 1992 e o Prêmio Nobel de Química em 1998. Ele foi eleito Membro da Royal Society (FRS) em 1961. Foi nomeado Cavaleiro Comandante (KBE) da Ordem do Império Britânico em 2003. Foi membro fundador da International Academy of Quantum Molecular Science.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Thomas Edison",
      "descricao": "Inventor e empresário americano (1847–1931), conhecido pela lâmpada incandescente e pelo fonógrafo."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que industrial americano, grande amigo de Thomas Edison, teria pedido que o último suspiro do inventor fosse guardado num tubo de ensaio?",
    "resposta": "Henry Ford",
    "fonte": [
      "https://en.wikipedia.org/wiki/Thomas_Edison"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Thomas_Edison",
        "situacao": "ok",
        "texto": "Thomas Alva Edison (February 11, 1847 – October 18, 1931) was an American inventor and businessman known for his work on the incandescent light bulb, the phonograph, electric power distribution and early motion pictures. The merger of the Edison General Electric Company and the competitor Thomson-Houston Electric Company resulted in the formation of General Electric. Edison registered 1,093 patent\n[…]\nDespite his own experiments with AC, Edison was out-competed and AC became the industry standard. He began to be marginalized in his own company. In 1890 he told president Henry Villard he thought it was time to retire from the lighting business. Cut-throat competition and patent battles were bleeding off cash in the competing companies and the idea of a merger was being put forward in financial circles.\n[…]\nHenry Ford first met Edison in 1896, while working for the Edison Illuminating Company. Edison encouraged Ford's nascent automobile tinkering and Ford resigned in 1899 to start his first motor company. By 1908, with the Model T on the road, gasoline cars were taking over the market. Edison did not demonstrate a mature battery until 1910: a very efficient and durable nickel-iron-battery with lye as the electrolyte.\n[…]\nEdison and Henry Ford were friends until Edison's death; Ford lived a few hundred feet away from Edison at his winter retreat in Fort Myers. They undertook annual motor camping trips from 1914 to 1924, also with Harvey Firestone and naturalist John Burroughs. The trips functioned as a moving advertisement for Ford cars, Firestone tires, and whatever Edison had going on at the time. A team of reporters joined to ensure word spread.\n[…]\nUpon Edison's death, his son Charles Edison requested that several test tubes near him be sealed. One of these was sent to Henry Ford, being labelled as \"Edison's last breath\". The test tube is on display at the Henry Ford Museum."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Thomas_Edison",
        "situacao": "ok",
        "texto": "Thomas Alva Edison (11 de fevereiro de 1847 – 18 de outubro de 1931) foi um inventor e empresário norte-americano que trabalhou com a lâmpada incandescente, o fonógrafo, a distribuição de energia elétrica e os primeiros filmes. A fusão da Edison General Electric Company com a concorrente Thomson-Houston Electric Company deu origem à General Electric. Edison registrou 1.093 patentes nos Estados Uni\n[…]\nHenry Ford conheceu Edison em 1896, quando trabalhava para a Edison Illuminating Company. Edison incentivou suas experiências com automóveis, e Ford deixou o emprego em 1899 para fundar a primeira empresa de veículos. Com o Model T nas ruas em 1908, os carros a gasolina ganhavam mercado. Edison só apresentou em 1910 uma bateria de níquel-ferro durável e eficiente, com uma solução alcalina como eletrólito. Como bateria para automóveis elétricos, a tecnologia não alcançou grande sucesso.\n[…]\nEdison e Henry Ford foram amigos até a morte do inventor. Ford tinha uma casa de inverno a poucas centenas de metros da dele em Fort Myers. Entre 1914 e 1924, viajaram anualmente de carro para acampar, muitas vezes acompanhados pelo empresário Harvey Firestone e pelo naturalista John Burroughs. As viagens também divulgavam os automóveis de Ford, os pneus de Firestone e os negócios de Edison. Jornalistas acompanhavam o grupo.\n[…]\nApós sua morte, Charles Edison pediu que alguns tubos de ensaio próximos do pai fossem fechados. Um deles foi enviado a Henry Ford com o rótulo \"último suspiro de Edison\" e está exposto no Museu Henry Ford.\n[…]\nAdair, Gene (1996). Thomas Alva Edison : Inventing the Electric Age. [S.l.]: Oxford University Press. ISBN 0195087992\n[…]\n«Test Tube, \"Edison's Last Breath,\" 1931». The Henry Ford. Consultado em 15 de julho de 2026. Cópia arquivada em 16 de julho de 2026\n[…]\nWinchell, Mike. The Electric War: Edison, Tesla, Westinghouse, And The Race To Light The World (Henry Holt, 2019)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Nikola Tesla",
      "descricao": "Engenheiro e inventor sérvio-americano (1856–1943), pioneiro da corrente alternada."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Ao chegar a Nova York em 1884, Nikola Tesla foi trabalhar para que inventor, que depois se tornaria seu rival?",
    "resposta": "Thomas Edison",
    "fonte": [
      "https://en.wikipedia.org/wiki/Nikola_Tesla"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Nikola_Tesla",
        "situacao": "ok",
        "texto": "Nikola Tesla (10 July 1856 – 7 January 1943) was a Serbian-American engineer, futurist, and inventor. He is known for his contributions to the design of the modern alternating current (AC) electricity supply system.\n[…]\nHistorian W. Bernard Carlson notes Tesla may have met company founder Thomas Edison only a couple of times. One of those times was noted in Tesla's autobiography where, after staying up all night repairing the damaged dynamos on the ocean liner SS Oregon, he ran into Batchelor and Edison, who made a quip about their \"Parisian\" being out all night. After Tesla told them he had been up all night fixing the Oregon, Edison commented to Batchelor that \"this is a damned good man\".\n[…]\nIn his autobiography, Tesla stated the manager of the Edison Machine Works offered a $50,000 bonus to design \"twenty-four different types of standard machines\", \"but it turned out to be a practical joke\". Later versions of this story have Thomas Edison himself offering and then reneging on the deal, quipping: \"Tesla, you don't understand our American humor\".\n[…]\nAIEE Edison Medal (Institute of Electrical and Electronics Engineers, U.S., 1916)\n[…]\nTesla could be harsh at times and openly expressed disgust for overweight people, such as when he fired a secretary because of her weight. He was quick to criticize clothing; on several occasions, Tesla directed a subordinate to go home and change her dress. When Thomas Edison died in 1931, Tesla contributed the only negative opinion to The New York Times. He became a vegetarian in his later years, living on only milk, bread, honey, and vegetable juices.\n[…]\nWorks by or about Nikola Tesla at the Internet Archive\n[…]\nWorks by Nikola Tesla at LibriVox (public domain audiobooks)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Nikola_Tesla",
        "situacao": "ok",
        "texto": "Nikola Tesla (em sérvio: Никола Тесла; pronunciação sérvia: [nǐkola têsla]; Smiljan, 10 de julho de 1856 — Nova Iorque, 7 de janeiro de 1943) foi um inventor, físico experimental, engenheiro eletricista e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada (CA).\n[…]\nBernard Carlson observa que Tesla pode ter se encontrado com o fundador da empresa, Thomas Edison, apenas algumas vezes. Um desses momentos foi anotado na autobiografia de Tesla, onde, depois de ficar acordado a noite toda reparando os dínamos danificados no transatlântico SS Oregon, ele encontrou Batchelor e Edison, que fizeram uma piada sobre o fato de o \"parisiense\" estar trabalhando a noite toda.\n[…]\nEm 6 de novembro de 1915, um relatório da agência de notícias Reuters em Londres dizia que o Prêmio Nobel de Física de 1915 seria concedido a Thomas Edison e Nikola Tesla; no entanto, em 15 de novembro, uma reportagem da Reuters de Estocolmo afirmou que o prêmio naquele ano seria concedido a Sir William Henry Bragg e William Lawrence Bragg \"por seus serviços na análise da estrutura de cristal por meio de raios-X\". Havia rumores infundados na época de que Tesla ou Edison haviam recusado o prêmio.\n[…]\nMedalha AIEE Edison (Instituto de Engenheiros Elétricos e Eletrônicos, EUA, 1917)\n[…]\nÀs vezes, Tesla podia ser duro e expressava abertamente o desgosto por pessoas obesas, como quando ele demitiu uma secretária por causa do peso dela. Ele era rápido em criticar as roupas; em várias ocasiões, Tesla instruiu um subordinado a ir para casa e trocar de roupa. Quando Thomas Edison morreu, em 1931, Tesla contribuiu com a única opinião negativa para The New York Times, enterrada em uma extensa cobertura da vida de Edison:\n[…]\nMuseu Nikola Tesla\n[…]\nFBI. «Nikola Tesla» (PDF). Main Investigative File",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "John Logie Baird",
      "descricao": "Engenheiro e inventor escocês (1888–1946), pioneiro da televisão mecânica."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Graham Bell, do telefone, e John Logie Baird, pioneiro da televisão, nasceram no mesmo país. Qual?",
    "resposta": "Escócia",
    "distratores": [
      "Inglaterra",
      "Irlanda",
      "País de Gales"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/John_Logie_Baird",
      "https://en.wikipedia.org/wiki/Alexander_Graham_Bell"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/John_Logie_Baird",
        "situacao": "ok",
        "texto": "John Logie Baird (; 13 August 1888 – 14 June 1946) was a Scottish inventor, electrical engineer and innovator who demonstrated the world's first mechanical television system on 26 January 1926. He went on to invent the first publicly demonstrated colour television system and the first viable purely electronic colour television picture tube.\n[…]\nCommercially Baird's contemporaries, such as George William Walton and William Stephenson, were ultimately more successful as their patents underpinned the early television system used by Scophony Limited who operated in Britain up to WWII and then in the US. \"Of all the electro-mechanical television techniques invented and developed by the mid 1930s, the technology known as Scophony had no rival in terms of technical performance.\" In 1948 Scophony acquired John Logie Baird Ltd.\n[…]\nAustralian television's Logie Awards were named in honour of John Logie Baird's contribution to the invention of the television.\n[…]\nBaird, John Logie, Television and Me: The Memoirs of John Logie Baird. Edinburgh: Mercat Press, 2004. ISBN 1-84183-063-1\n[…]\nBurns, Russell, John Logie Baird, television pioneer. London: The Institution of Electrical Engineers, 2000. ISBN 0-85296-797-7\n[…]\nKamm, Antony, and Malcolm Baird, John Logie Baird: A Life. Edinburgh: NMS Publishing, 2002. ISBN 1-901663-76-0\n[…]\nMcArthur, Tom; Waddell, Peter (1986). The Secret Life of John Logie Baird. London: Hutchinson. ISBN 0-09-158720-4.\n[…]\nRowland, John, The Television Man: The Story of John Logie Baird. New York: Roy Publishers, 1967.\n[…]\nJohn Logie Baird official website (the Baird family)\n[…]\nJohn Logie Baird biography at BFI Screenonline\n[…]\nJohn Logie Baird's entry on Helensburgh Heroes web site Archived 26 September 2020 at the Wayback Machine\n[…]\nJohn Logie Baird's colour television Archived 14 February 2016 at the Wayback Machine at National Museum of Scotland"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Alexander_Graham_Bell",
        "situacao": "ok",
        "texto": "Alexander Graham Bell ( ; born Alexander Bell; March 3, 1847 – August 2, 1922) was a  Scottish-born Canadian-American inventor, scientist, and engineer who is credited with patenting the first practical telephone. He also co-founded the American Telephone and Telegraph Company (AT&T) in 1885.\n[…]\nJohn Tench portrays Bell five times in the Canadian television period detective series Murdoch Mysteries. Bell appeared in \"Invention Convention\" (April 24, 2012), \"Murdoch in Toyland\" (May 8, 2012), \"8 Footsteps\" (October 9, 2017), \"Staring Blindly into the Future\" (January 13, 2020) and \"Murdoch and the Sonic Boom\" (October 24, 2022).\n[…]\nAlexander Graham Bell Family Papers at the Library of Congress\n[…]\nAlexander Graham Bell—Biographical Memoirs of the National Academy of Sciences\n[…]\nScience.ca profile: Alexander Graham Bell\n[…]\nWorks by Alexander Graham Bell at Project Gutenberg\n[…]\nAlexander Graham Bell's notebooks at the Internet Archive\n[…]\n\"Téléphone et photophone : les contributions indirectes de Graham Bell à l'idée de la vision à distance par l'électricité\" at the Histoire de la télévision\n[…]\nNewspaper clippings about Alexander Graham Bell in the 20th Century Press Archives of the ZBW\n[…]\nAlexander Graham Bell and the Aerial Experiment Association Photograph Collection Archived April 21, 2023, at the Wayback Machine at The Museum of Flight (Seattle, Washington).\n[…]\nAlexander Graham Bell at The Biography Channel\n[…]\nThe Story of Alexander Graham Bell (1939) at IMDb\n[…]\nAlexander Graham Bell portrayed by John Bach (1992). The Sound and the Silence (Television production). Canada, New Zealand, Ireland: Atlantis Films.\n[…]\nThe Animated Hero Classics: Alexander Graham Bell (1995) at IMDb\n[…]\nGray, Charlotte (May 2013). \"We Had No Idea What Alexander Graham Bell Sounded Like. Until Now\". Smithsonian."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/John_Logie_Baird",
        "situacao": "ok",
        "texto": "John Logie Baird, FRSE (Helensburgh, 14 de agosto de 1888 – Bexhill, 14 de junho de 1946) foi um engenheiro escocês e o primeiro a construir um sistema de televisão viável, transmitindo, pela primeira vez, em fevereiro de 1924, imagens estáticas através de um sistema mecânico de televisão analógica, sendo, então, o primeiro a alcançar este feito.\n[…]\nJohn Logie Baird nasceu no dia 14 de agosto de 1888, em Helensburgh na costa oeste da Escócia. John era filho de um clérigo e teve problemas de saúde durante a maior parte da sua vida. Os seus estudos em Glasgow foram interrompidos pela Primeira Guerra Mundial. Rejeitado como incapaz para o exército, atuou como um engenheiro superintendente da Clyde Valley Electrical Power Company. Quando a guerra terminou estabeleceu-se em negócios, com resultados variados.\n[…]\nEm 26 de janeiro de 1926, John deu a primeira demonstração de uma verdadeira televisão diante de 50 cientistas. Em 1927, demonstrou pela primeira vez a televisão a 438 milhas (700 quilômetros) de distância através da linha telefônica entre Glasgow e Londres, e formou a Baird Television Development Company (BTDC). No ano seguinte, sua empresa fez a primeira transmissão transatlântica entre Londres e Nova Iorque e a primeira transmissão até um navio no meio do Atlântico.\n[…]\nEmbora tivesse investido mais em sistemas mecânicos, a fim de alcançar os primeiros resultados, Baird esteve também explorando sistemas eletrônicos em uma fase inicial.\n[…]\nPor essa altura, um comité de investigação da BBC, em 1935, pôs lado a lado o sistema de televisão de Baird, e o de Marconi de televisão totalmente eletrônica, que trabalhou em 405 linhas contra as 240 de Baird. Baird morreu em 14 de junho de 1946 em Bexhill-on-Sea em Sussex.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Galvanismo",
      "descricao": "Contração de músculos provocada por corrente elétrica, estudada por Luigi Galvani no século dezoito."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Experimentos que faziam músculos de animais mortos se contraírem com eletricidade inspiraram que romance de 1818?",
    "resposta": "Frankenstein",
    "fonte": [
      "https://en.wikipedia.org/wiki/Galvanism",
      "https://en.wikipedia.org/wiki/Frankenstein"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Galvanism",
        "situacao": "ok",
        "texto": "Galvanism is a term coined by the late 18th-century physicist and chemist Alessandro Volta to refer to the generation of electric current by chemical action. The term also came to refer to the discoveries of its namesake, Luigi Galvani, specifically the generation of electric current within biological organisms and the contraction/convulsion of biological muscle tissue upon contact with electric c\n[…]\nOn March 27, 1791, Galvani published a book about his work on animal electricity. It contained comprehensive details of his 11 years of research and experimentation on the topic.\n[…]\nGalvani from Bologna was the first to observe muscular motions elicited by the contact between two different metals; after him, the phenomena of this sort were termed and included under the name of Galvanism.\n[…]\nMary Shelley's Frankenstein, wherein a man forms a human body from previously inert flesh and brings it to life, was inspired in part by the theory and demonstrations of Galvanism which may have been conducted by James Lind.\n[…]\nAlthough the Creature was described in later works as a composite of whole body parts grafted together from cadavers and reanimated by the use of electricity, this description is not consistent with Shelley's work; both the use of electricity and the cobbled-together image of Frankenstein's monster were the result of James Whale's popular 1931 film adaptation of a stage play loosely based on the story.\n[…]\nGalvanism influenced metaphysical thought in the domain of abiogenesis, the underlying process of the generation of living forms. In 1836, Andrew Crosse recorded what he referred to as \"the perfect insect, standing erect on a few bristles which formed its tail,\" as having appeared during an experiment wherein he used electricity to produce mineral crystals.\n[…]\nHallerian physiology, for a counter-theory to Galvanism\n[…]\nThe history of galvanism Archived 2023-05-30 at the Wayback Machine"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Frankenstein",
        "situacao": "ok",
        "texto": "Frankenstein; or, The Modern Prometheus is an 1818 Gothic novel written by English author Mary Shelley. It tells the story of Victor Frankenstein, a young scientist who creates a sapient creature from different body parts in an unorthodox scientific experiment. Shelley started writing the story when she was 18 and staying in Bath, and the first edition was published anonymously in London on 1 Janu\n[…]\nShelley travelled through Europe in 1815, moving along the river Rhine in Germany, and stopping in Gernsheim, 17 kilometres (11 mi) away from Frankenstein Castle, where, about a century earlier, Johann Konrad Dippel, an alchemist, had engaged in experiments. She then journeyed to the region of Geneva, Switzerland, where much of the story takes place. Galvanism and occult ideas were topics of conversation for her companions, particularly for her lover and future husband, Percy Bysshe Shelley.\n[…]\nAfter thinking for days, Shelley was inspired to write Frankenstein after imagining a scientist who created life and was horrified by what he had made. The novel was first published anonymously in 1818, and in 1831, a revised edition was published under Mary Shelley's name. This version included significant stylistic revisions, a new preface describing the story's conception, and a more explicitly moral tone.\n[…]\nShelley's personal experiences also influenced the themes within Frankenstein. The themes of loss, guilt, and the consequences of defying nature present in the novel all developed from Mary Shelley's own life. The loss of her mother, the relationship with her father, and the death of her first child are thought to have inspired the monster and his separation from parental guidance.\n[…]\nFrankenstein: The 1818 Text (Penguin Books, 2018). Edited with an introduction by Charlotte Gordon.\n[…]\nFrankenstein; or, The Modern Prometheus 1818 edition at Project Gutenberg\n[…]\nFrankenstein at Standard Ebooks"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Galvanismo",
        "situacao": "ok",
        "texto": "Galvanismo é um termo inventado pelo físico e químico italiano, Alessandro Volta (1745-1827), para se referir à geração de corrente elétrica por ações químicas. O termo também passou a se referir às descobertas de seu homônimo, Luigi Galvani, se referindo à geração de corrente elétrica, dentro de organismos biológicos, e à contração/convulsão do tecido muscular, ao entrar em contato com uma corren\n[…]\nEnquanto Volta teorizou, e, depois, demonstrou que o fenómeno do \"Galvanismo\" era replicável com materiais inertes, Galvani pensou que a sua descoberta era uma confirmação da existência de uma \"eletricidade animal\", que seria uma força vital que dava vida à matéria orgânica.\n[…]\nSegundo a lenda popular, Galvani descobriu os efeitos da eletricidade no tecido muscular ao investigar um fenômeno não relacionado que exigia a esfola de rãs, nas décadas de 1780 e 1790. Alega-se que seu assistente tocou, acidentalmente, um bisturi, no nervo ciático do sapo, e isso resultou em uma faísca e na animação em suas pernas. Isto foi baseado nas teorias de Giovanni Battista Beccaria, Felice Fontana, Leopoldo Marco Antonio Caldani e Tommaso Laghi.\n[…]\nEm seu laboratório, Galvani descobriu, mais tarde, que poderia replicar esse fenômeno ao tocar eletrodos de metal de latão conectados à medula espinhal do sapo, em uma placa de ferro. Ele concluiu que esta era a prova da “eletricidade animal”, a energia elétrica que ''animava os seres vivos''.\n[…]\nAlessandro Volta, um físico contemporâneo, acreditava que o efeito não era explicável por qualquer força vital, mas sim pela presença de dois metais diferentes que geravam a eletricidade. Volta demonstrou sua teoria criando a primeira bateria elétrica química. Apesar das diferenças de opinião, Volta chamou o fenômeno dessa ''geração química'' de eletricidade de \"Galvanismo\", em homenagem a Galvani.\n[…]\nFisiologia Halleriana, uma contra-teoria ao Galvanismo",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Forno de micro-ondas",
      "descricao": "Eletrodoméstico que aquece alimentos com micro-ondas, desenvolvido por Percy Spencer na empresa Raytheon nos anos 1940."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O forno de micro-ondas nasceu nos anos quarenta, de pesquisas com que equipamento militar?",
    "resposta": "Radar",
    "fonte": [
      "https://en.wikipedia.org/wiki/Microwave_oven",
      "https://en.wikipedia.org/wiki/Percy_Spencer"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Microwave_oven",
        "situacao": "ok",
        "texto": "A microwave oven, or simply microwave, is an electric oven that heats and cooks food by exposing it to electromagnetic radiation in the microwave frequency range. This induces polar molecules in the food to rotate and produce thermal energy (heat) in a process known as dielectric heating. Microwave ovens heat food quickly and efficiently; the heating effect is fairly uniform in the outer 25–38 mm \n[…]\nThe development of the cavity magnetron in the United Kingdom made possible the production of electromagnetic waves of a small enough wavelength (microwaves) to efficiently heat up water molecules. American electrical engineer Percy Spencer is generally credited with developing and patenting the world's first commercial microwave oven, the Raytheon \"Radarange\", which was first sold in 1947. He based it on British radar technology which had been developed before and during World War II.\n[…]\nThe invention of the cavity magnetron made possible the production of electromagnetic waves of a small enough wavelength (microwaves). The cavity magnetron was a crucial component in the development of short wavelength radar during World War II. In 1937–1940, a multi-cavity magnetron was built by British physicist Sir John Turton Randall, FRSE and coworkers, for the British and American military radar installations in World War II.\n[…]\nIn 1945, the heating effect of a high-power microwave beam was independently and accidentally discovered by Percy Spencer, an American self-taught engineer from Howland, Maine. While employed at Raytheon, he noticed that microwaves from an active radar set he was working on started to melt a candy bar he had in his pocket. The first food deliberately cooked by Spencer was popcorn, and the second was an egg, which exploded in the face of one of the experimenters."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Percy_Spencer",
        "situacao": "ok",
        "texto": "Percy LaBaron Spencer (July 19, 1894, Howland, Maine, U.S – September 8, 1970, Newton, Massachusetts, U.S.) was an American physicist, electrical engineer, and inventor of the microwave oven. As a boy he was twice orphaned and began work at a young age, never finishing grammar school. During the night shift, he taught himself topics such as calculus, trigonometry, physics, and chemistry, establish\n[…]\nBy 1939, Spencer was one of the world's leading experts in radar tube design. He was appointed chief of the power tube division at Raytheon, a U.S. Department of Defense contractor, and his division grew from 15 to more than 1000 staff. Spencer developed a more efficient way to manufacture magnetrons, increasing production from 100 to 2600 magnetrons per day.\n[…]\nWith his reputation and expertise, Spencer helped Raytheon win a government contract to develop and produce combat radar equipment for M.I.T.’s Radiation Laboratory. This was of huge importance to the Allies of World War II and became the military's second-highest priority project during World War II, behind the Manhattan Project. For his work, he was awarded the Distinguished Public Service Award by the U.S. Navy.\n[…]\nAccording to legend, one day while building magnetrons, Spencer was standing in front of an active radar set when he noticed the candy bar he had in his pocket melted. Spencer was not the first to notice this phenomenon, but he was the first to investigate it. He decided to experiment using food, including popcorn kernels, which became the world's first microwaved popcorn. In another experiment, an egg was placed in a tea kettle, and the magnetron was placed directly above it.\n[…]\nRaytheon Integrated Defense Systems, which deals extensively in radar systems, named a building after Spencer in the Woburn, Massachusetts facility. An early Radarange model sits in the lobby, across from the dining center."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Forno_de_micro-ondas",
        "situacao": "ok",
        "texto": "O forno de micro-ondas (também conhecido como forno micro-ondas ou simplesmente micro-ondas) é um eletrodoméstico utilizado principalmente na cozinha e que permite a preparação ou aquecimento rápido de alimentos.\n[…]\nA ideia de usar micro-ondas para cozinhar alimentos foi descoberta por Percy Spencer que trabalhava na empresa Raytheon, fabricando magnetrons para aparelhos de radar. Diz que um dia estava dirigindo com seu carro e passou num aparelho de radar ativo quando observou uma sensação repentina e estranha, e viu que uma barra de chocolate que carregava no bolso tinha derretido.\n[…]\nA exposição direta às micro-ondas é incomum, pois as micro-ondas emitidas pela fonte em um forno de micro-ondas são confinadas pelo material com o qual o este é construído. Além disso, os fornos estão equipados com fechaduras de segurança, que removem a energia do magnetron se a porta for aberta. Este mecanismo de segurança é exigido pelas regulamentações federais dos Estados Unidos.\n[…]\nOs fornos micro-ondas são frequentemente usados ​​para reaquecer restos de alimentos e a contaminação bacteriana pode não ser reprimida se o forno micro-ondas for usado incorretamente. Se a temperatura segura não for atingida, isso pode resultar em doenças de origem alimentar, como acontece com outros métodos de reaquecimento.\n[…]\nO forno micro-ondas pode causar câncer?\n[…]\nOs fornos micro-ondas são frequentemente usados ​​para reaquecer restos de alimentos e a contaminação bacteriana pode não ser reprimida se o forno micro-ondas for usado incorretamente. Se a temperatura segura não for atingida, isso pode resultar em doenças de origem alimentar, como acontece com outros métodos de reaquecimento.\n[…]\nForno cadinho\n[…]\nForno crematório\n[…]\nForno solar",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Eolípila",
      "descricao": "Turbina a vapor simples, uma esfera que gira quando a água do recipiente é aquecida, descrita por Heron de Alexandria."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que engenheiro grego do primeiro século descreveu a eolípila, uma esfera que gira movida a vapor?",
    "resposta": "Heron de Alexandria",
    "fonte": [
      "https://en.wikipedia.org/wiki/Aeolipile"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Aeolipile",
        "situacao": "ok",
        "texto": "An aeolipile, aeolipyle, or eolipile, also known as a Hero's (or Heron's) engine, is a simple, bladeless radial steam turbine which spins when the central water container is heated. Torque is produced by steam jets exiting the turbine. The Greek-Egyptian mathematician and engineer Hero of Alexandria described the device in the 1st century CE, and many sources give him the credit for its invention.\n[…]\nBoth Hero and Vitruvius draw on the much earlier work by Ctesibius (285–222 BCE), also known as Ktēsíbios or Tesibius, who was an inventor and mathematician in Alexandria, Ptolemaic Egypt. He wrote the first known treatises on the science of compressed air and its uses in pumps.\n[…]\nVitruvius (c. 80 BCE – c. 15 BCE) mentions aeolipiles by name:\n[…]\nIt is not known whether the aeolipile was put to any practical use in ancient times, and if it was seen as a pragmatic device, a whimsical novelty, an object of reverence, or some other thing. A source described it as a mere curiosity for the ancient Greeks, or a \"party trick\". Hero's drawing shows a standalone device, and was presumably intended as a \"temple wonder\", like many of the other devices described in Pneumatica.\n[…]\nVitruvius, on the other hand, mentions use of the aeolipile for demonstrating the physical properties of the weather. He describes them as:\n[…]\nIt is proposed that de Garay used Hero's aeolipile and combined it with the technology used in Roman boats and late medieval galleys. Here, de Garay's invention introduced an innovation where the aeolipile had practical usage, which was to generate motion to the paddlewheels, demonstrating the feasibility of steam-driven boats. This claim was denied by Spanish authorities.\n[…]\nKeyser, Paul (1 June 1992). \"A New Look at Heron's \"Steam Engine\"\" (PDF). University of Notre Dame. Retrieved 25 March 2023."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Eol%C3%ADpila",
        "situacao": "ok",
        "texto": "Eolípila, do grego Æolipile, também denominada de Máquina de Heron ou Máquina Térmica de Heron, é uma esfera oca, abastecida por uma bacia com água, que é  aquecida para produzir vapor, fazendo com que este produza movimento.\n[…]\nO aparelho consiste de uma câmara (normalmente uma esfera ou um cilindro) com tubos curvados, por onde o vapor é expelido. A força resultante faz com que o aparelho gire. Normalmente, a água é aquecida numa bacia, que está ligada à câmara giratória por um par de tubos que também servem como eixo para a câmara. No entanto, a água também pode ser aquecida na própria câmara como demonstra a ilustração abaixo.\n[…]\nFoi desenhada no século I d.c. por Heron de Alexandria, sendo considerada a primeira máquina a vapor documentada.\n[…]\nO vapor que sai da eolípila por ambos os furos tem a mesma pressão, já que estaria em equilíbrio se os furos fossem tampados; logo, o que o faz mover é justamente a pressão do vapor sobre o corpo - como a causada por ventos, o que Heron desejava elucidar com a invenção.\n[…]\nO platonista inglês Thomas Burnet  propôs que a forma primordial da Terra, antes do Dilúvio, era uma eolípila, com uma superfície lisa, e que a forma atual é uma ruína da forma anterior.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Caneta esferográfica",
      "descricao": "Caneta com uma pequena esfera na ponta que espalha tinta de secagem rápida, patenteada por László Bíró em 1938."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que jornalista húngaro, inspirado pela tinta de secagem rápida dos jornais, patenteou em 1938 uma caneta esferográfica?",
    "resposta": "László Bíró",
    "fonte": [
      "https://en.wikipedia.org/wiki/L%C3%A1szl%C3%B3_B%C3%ADr%C3%B3",
      "https://en.wikipedia.org/wiki/Ballpoint_pen"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/L%C3%A1szl%C3%B3_B%C3%ADr%C3%B3",
        "situacao": "ok",
        "texto": "László József Bíró (Hungarian: [ˈlaːsloː ˈjoːʒɛf ˈbiːroː]; né Schweiger; 29 September 1899 – 24 October 1985), Hispanicized as Ladislao José Biro, was an Argentine, Hungary-born inventor who patented the first commercially successful modern ballpoint pen. The first ballpoint pen had been invented roughly 50 years earlier by John J. Loud, but it was not a commercial success.\n[…]\nBíró presented the first production of the ballpoint pen at the Budapest International Fair in 1931. Working with his brother György, a chemist, he developed a new tip consisting of a ball that was free to turn in a socket, and as it turned it would pick up a special viscous ink from a cartridge and then roll to deposit it on the paper. Bíró patented the invention in Paris in 1938.\n[…]\nOn 17 June 1943, the brothers filed another patent, issued in the US as \"US Patent 2,390,636 Writing Instrument\" and formed Biro Pens of Argentina (in Argentina and Uruguay the ballpoint pen is known as birome, a portmanteau of the brothers' surname with that of their business partner, Juan Jorge Meyne). This new design was supposedly licensed for production in the United Kingdom for supply to Royal Air Force aircrew.\n[…]\nIn 1931, Bíró married to Erzsébet Schick in Terézváros. In 1938, Bíró and his wife converted to Lutheranism.\n[…]\nLászló Bíró died in Buenos Aires, Argentina, on October 24, 1985.\n[…]\nHargittai, Istvan; Hargittai, Balazs (2023). \"Ladislao José Biro\". Brilliance in Exile: The Diaspora of Hungarian Scientists from John von Neumann to Katalin Karikó. Central European University Press. pp. 154–156. doi:10.7829/j.ctv2vdbvm7. ISBN 978-963-386-625-2. JSTOR 10.7829/j.ctv2vdbvm7. Retrieved 25 December 2024."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Ballpoint_pen",
        "situacao": "ok",
        "texto": "A ballpoint pen is a pen that dispenses ink (usually in paste form) over a hard ball rolling in its point. The materials commonly used are steel, brass, or tungsten carbide. The design was conceived and developed as a cleaner and more reliable alternative to dip pens and fountain pens. It is now the world's most-used writing instrument, with millions manufactured and sold daily. It has influenced \n[…]\nLászló Bíró, a Hungarian newspaper editor (later a naturalized Argentine) frustrated by the amount of time that he wasted filling up fountain pens and cleaning up smudged pages, noticed that inks used in newspaper printing dried quickly, leaving the paper dry and smudge-free. He decided to create a pen using the same type of ink. Bíró enlisted the help of his brother György, a dentist with useful knowledge of chemistry, to develop viscous ink formulae for new ballpoint designs.\n[…]\nBíró's innovation successfully coupled viscous ink with a ball-and-socket mechanism that allowed controlled flow while preventing ink from drying inside the reservoir. Bíró filed for a British patent on 15 June 1938.\n[…]\nIn 1941, the Bíró brothers and a friend, Juan Jorge Meyne, fled Germany and moved to Argentina, where they formed \"Bíró Pens of Argentina\" and filed a new patent in 1943. Their pen was sold in Argentina as the \"Birome\", from the names Bíró and Meyne, which is how ballpoint pens are still known in that country. This new design was licensed by the British engineer Frederick George Miles and manufactured by his company Miles Aircraft, to be used by Royal Air Force aircrew as the \"Biro\".\n[…]\nBíró's patent, and other early patents on ballpoint pens, often used the term \"ball-point fountain pen\".\n[…]\nFascinating facts about the invention of the Ballpoint Pen by Ladislas Biro in 1935 (archived 13 September 2019)\n[…]\nLaszlo Biro on Jewish.hu's list of famous Hungarians (archived 22 May 2013)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/L%C3%A1szl%C3%B3_B%C3%ADr%C3%B3",
        "situacao": "ok",
        "texto": "László József Bíró (em húngaro:  Bíró László József; em castelhano:  Ladislao José Biro) (Budapeste, 29 de setembro de 1899 – Buenos Aires, 24 de outubro de 1985) foi um inventor húngaro naturalizado argentino. Era judeu, tal como a restante família.\n[…]\nInventou a moderna caneta esferográfica.\n[…]\nBíró nasceu em Budapeste, Áustria-Hungria, em 1899. Apresentou sua primeira versão da caneta esferográfica na Feira Internacional de Budapeste, em 1931. Quando trabalhava como jornalista na Hungria, percebeu que a tinta usada na impressão de jornais secava rapidamente, deixando a folha impressa seca e sem manchas. Tentou usar a mesma tinta em uma caneta-tinteiro, percebendo que a tinta não fluía para a ponta da mesma, pois era muito viscosa.\n[…]\nTrabalhando juntamente com seu irmão Georg, um químico, desenvolveu uma nova ponta, consistindo de uma esfera que girava livremente na ponta da caneta, e assim que a mesma fosse colocada na posição de escrever a esfera era molhada na tinta de um cartucho, esfera esta que rotacionada devido ao atrito com uma folha de papel deixava uma trilha de tinta. Biró patenteou a invenção em Paris, em 1938.\n[…]\nBrief biography of Bíró by Budapest Pocket Guide\n[…]\nQuem foi Ladislao José Biro e porque a Google lhe dedica um doodle",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Máquina de escrever",
      "descricao": "Máquina mecânica com teclas que imprime caracteres no papel por meio de uma fita de tinta."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Em 1873, que fabricante americano de armas assumiu a produção da máquina de escrever de Christopher Sholes?",
    "resposta": "Remington",
    "distratores": [
      "Winchester",
      "Colt",
      "Smith e Wesson"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Sholes_and_Glidden_typewriter",
      "https://en.wikipedia.org/wiki/E._Remington_and_Sons"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sholes_and_Glidden_typewriter",
        "situacao": "ok",
        "texto": "The Sholes and Glidden typewriter (also known as the Remington No. 1) was the first commercially successful typewriter. Principally designed by the American inventor Christopher Latham Sholes, it was developed with the assistance of fellow printer Samuel W. Soule and amateur mechanic Carlos S. Glidden. Work began in 1867, but Soule left the enterprise shortly thereafter, replaced by James Densmore\n[…]\nBenedict was impressed by the novelty and encouraged company president Philo Remington to pursue the device.\n[…]\nAn improved model, the Remington No. 2, was also introduced in 1878. The new machine was able to type upper and lowercase characters, thus remedying a significant drawback of its predecessor. As the only typewriter manufacturer, Remington maintained a monopoly position until the American Writing Machine Company introduced a typewriter to compete with the Remington machines in 1881.\n[…]\nIn response to the new competition, Remington lowered the price of the Sholes and Glidden (referred to in sales literature as the Remington No. 1) to $80, and negotiated an agreement with the marketing firm Wyckoff, Seamans & Benedict to take all the machines produced. The arrangement marked the beginning of the typewriter's commercial success, as the agency's marketing prowess led to the sale of 1,200 machines in its first year.\n[…]\nThe association of women with the typewriter may be linked to the way in which it was marketed. Before the typewriter was acquired by Remington, Sholes' daughter was employed to demonstrate the device and to appear in promotional images, which served as the basis for early advertisements. Remington's sales agents later marketed the machine with tactics including the use of attractive women to demonstrate the device at trade shows and in hotel lobbies.\n[…]\nAmerican Typewriter, a modern font based on the Sholes and Glidden typewriter font"
      },
      {
        "url": "https://en.wikipedia.org/wiki/E._Remington_and_Sons",
        "situacao": "ok",
        "texto": "E. Remington & Sons (1816–1888) was a manufacturer of firearms and typewriters. Founded in 1816 by Eliphalet Remington II in Ilion, New York, on March 1, 1873, it became known for manufacturing the first commercial typewriter.\n[…]\nRemington and Sons (then famous as a manufacturer of sewing machines) to commercialize what was known as the Sholes and Glidden Type-Writer. Remington started production of their first typewriter on March 1, 1873, in Ilion, New York.\n[…]\nThe Type-Writer introduced the QWERTY, designed by Sholes, and the success of the follow-up Remington No. 2 of 1878 – the first typewriter to include both upper and lower case letters via a shift key – led to the popularity of the QWERTY layout.\n[…]\nIt fulfilled a contract to manufacture 100 Baxter steam cars (steam-powered streetcars capable of producing 25 horsepower and traveling in excess of 15 miles per hour). Remington later became the first company to manufacture a Baxter canal steamboat. The company built the first 100 velocipedes produced in the United States, marking an early milestone for the American bicycle manufacturing. Remington later offered tandem bicycle and two-seater bicycle models.\n[…]\nThe Standard Typewriter Manufacturing Company merged with the Rand Kardex Corporation in 1927 to form Remington-Rand. They continued to be a major manufacturer in the typewriter industry throughout the 20th century. The company continued to manufacture office equipment, and later became a major computer company, as well as manufacturing electric razors. In 1955, it was acquired by Sperry to form Sperry Rand. Among the divisions of the company that later were spun off was Remington Products.\n[…]\nList of Remington models"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/M%C3%A1quina_de_escrever_Sholes_e_Glidden",
        "situacao": "ok",
        "texto": "A máquina de escrever Sholes e Glidden (também conhecida como Remington n.º 1) foi a primeira máquina de escrever de sucesso comercial. Projetada principalmente pelo inventor americano Christopher Latham Sholes, ela foi desenvolvida com a ajuda do colega impressor Samuel W. Soule e do mecânico amador Carlos S. Glidden.\n[…]\nFabricante de armas que buscava diversificar, a Remington refinou ainda mais a máquina de escrever antes de finalmente colocá-la no mercado em 1º de julho de 1874.\n[…]\nSholes acabou recebendo um pagamento em dinheiro de US$ 12.000. Glidden manteve seu direito de um décimo da patente. Densmore consultou George W. N. Yost, um fabricante que ele conhecia, que sugeriu mostrar a máquina para a E. Remington and Sons. A Remington, um fabricante de armas que buscava diversificar após a Guerra de Secessão, possuía o equipamento de usinagem e os mecânicos qualificados necessários para desenvolver a complexa máquina.\n[…]\nA Remington dedicou uma ala de sua fábrica à máquina de escrever e passou vários meses reequipando e reformulando o dispositivo; a produção começou em setembro e a máquina entrou no mercado em 1º de julho de 1874. A produção da máquina de escrever foi amplamente supervisionada por Jefferson Clough e William K. Jenne, gerente da divisão de máquinas de costura da Remington.\n[…]\nUm modelo aprimorado, a Remington No. 2, também foi lançado em 1878. A nova máquina era capaz de digitar caracteres maiúsculos e minúsculos, corrigindo assim uma desvantagem significativa de sua antecessora. Como a única fabricante de máquinas de escrever, a Remington manteve uma posição de monopólio até que a American Writing Machine Company lançou uma máquina de escrever para competir com as máquinas Remington em 1881.\n[…]\nMedia relacionados com Máquina de escrever Sholes e Glidden no Wikimedia Commons",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Vista da janela em Le Gras",
      "descricao": "Fotografia heliográfica feita por volta de 1826 na França, a mais antiga feita com câmera que se preservou."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que inventor francês fez, por volta de 1826, a mais antiga fotografia com câmera que se preservou, a vista de uma janela?",
    "resposta": "Nicéphore Niépce",
    "fonte": [
      "https://en.wikipedia.org/wiki/View_from_the_Window_at_Le_Gras",
      "https://en.wikipedia.org/wiki/Nic%C3%A9phore_Ni%C3%A9pce"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/View_from_the_Window_at_Le_Gras",
        "situacao": "ok",
        "texto": "View from the Window at Le Gras (French: Point de vue du Gras) is the oldest surviving photograph. It was created by French inventor Nicéphore Niépce between June 4 and July 18, 1827, in Saint-Loup-de-Varennes, France, and shows parts of the buildings and surrounding countryside of his estate, Le Gras, as seen from a high window.\n[…]\nThe image was created by heliography, a process which Niépce had invented around 1822, and which uses the hardening of bitumen in light to record an image after washing off the remaining unhardened material.\n[…]\nIn September 1827, Niépce visited the United Kingdom. He showed this and several other specimens of his work to botanical illustrator Francis Bauer. View from the Window at Le Gras was the only example of a camera photograph; the rest were contact-exposed copies of artwork. Bauer encouraged him to present his \"heliography\" process to the Royal Society.\n[…]\nAfter the pioneering photographic processes of Louis Daguerre and Henry Fox Talbot were publicly announced in January 1839, Bauer championed Niépce's right to be acknowledged as the first inventor of a process for making permanent photographs. On March 9, 1839, the specimens were finally exhibited at the Royal Society. After Bauer died in 1840, they passed through several hands and were occasionally exhibited as historical curiosities.\n[…]\nHistorians Helmut Gernsheim and his wife, Alison Gernsheim, tracked down the photograph in 1952 and brought it to prominence, reinforcing the claim that Niépce is the inventor of photography. They had an expert at the Kodak Research Laboratory make a modern photographic copy. Still, it proved extremely difficult to produce an adequate representation of all that could be seen when inspecting the actual plate.\n[…]\nThe Niépce Heliograph at the Harry Ransom Center\n[…]\n\"Introducing The Niépce Heliograph\""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Nic%C3%A9phore_Ni%C3%A9pce",
        "situacao": "ok",
        "texto": "Joseph Nicéphore Niépce (French: [nisefɔʁ njɛps]; 7 March 1765 – 5 July 1833) was a French inventor and one of the pioneers of photography. Niépce developed heliography, a technique he used to create the world's oldest surviving products of a photographic process. In the mid-1820s, he used a primitive camera to produce the oldest surviving photograph of a real-world scene.\n[…]\nNicéphore Niépce died of a stroke on 5 July 1833, his death recorded on 6 July 1833, financially ruined such that his grave in the cemetery of Saint-Loup de Varennes was financed by the municipality. The cemetery is near the family house where he had experimented and had made the world's oldest surviving photographic image.\n[…]\nHe named it the \"daguerréotype\", after himself. In 1839 he managed to get the government of France to purchase his invention on behalf of the people of France. The French government agreed to award Daguerre a yearly stipend of 6,000 francs for the rest of his life, and to give the estate of Niépce 4,000 francs yearly. This arrangement rankled Niépce's son, who claimed Daguerre was reaping all the benefits of his father's work.\n[…]\nIn 1818 Niépce became interested in the ancestor of the bicycle, a Laufmaschine invented by Karl von Drais in 1817. He built himself a model and called it the vélocipède (fast foot) and caused quite a sensation on the local country roads. Niépce improved his machine with an adjustable saddle and it is now exhibited at the Niépce Museum. In a letter to his brother Nicéphore contemplated motorizing his machine.\n[…]\nNicéphore Niépce at IMDb\n[…]\nA French invention on YouTube at Nicéphore Niépce (in French)\n[…]\nWebsite about Niépce (in French)\n[…]\nWebsite about Niépce\n[…]\nThe history men: Helmut Gernsheim and Nicéphore Niépce on Photo Histories Archived 20 January 2023 at the Wayback Machine\n[…]\nDocumentary video on restoration of Nicephore Niepce's home on YouTube"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Vista_da_Janela_em_Le_Gras",
        "situacao": "ok",
        "texto": "Vista da Janela em Le Gras (em francês intitulado Point de vue du Gras) é uma imagem heliográfica considerada a primeira fotografia permanente do mundo. Foi criada por Joseph Nicéphore Niépce em 1826 ou 1827 em Saint-Loup-de-Varennes, na França, e mostra partes dos edifícios e paisagem vizinhos de sua propriedade, Le Gras. Em 2003, a revista Life a incluiu na lista das \"100 Fotografias que Mudaram",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Soro antiofídico",
      "descricao": "Medicamento à base de anticorpos que neutraliza o veneno de serpentes, desenvolvido no Brasil por Vital Brazil."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que médico brasileiro, na virada para o século vinte, mostrou que cada tipo de serpente exige um soro antiofídico específico?",
    "resposta": "Vital Brazil",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Vital_Brazil",
      "https://en.wikipedia.org/wiki/Vital_Brazil"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Vital_Brazil",
        "situacao": "ok",
        "texto": "Vital Brazil Mineiro da Campanha (Campanha, 28 de abril de 1865 – Rio de Janeiro, 8 de maio de 1950) foi um médico cientista, filantropo, imunologista e pesquisador biomédico brasileiro de renome internacional.\n[…]\nAlém do seu trabalho como médico, Vital Brazil também criou uma das primeiras escolas do Brasil que alfabetizavam crianças de dia e adultos à noite. Desenvolveu materiais de informação, especialmente voltados para a população do campo, sobre como se proteger das cobras e outros animais peçonhentos.\n[…]\nVital Brazil tornar-se-ia mundialmente conhecido pela descoberta da especificidade do soro antiofídico, do soro contra picadas de aranha, do soro antitetânico e antidiftérico e do tratamento para picada de escorpião.\n[…]\nA descoberta de Vital Brazil sobre a especificidade dos soros antipeçonhentos estabeleceu um novo conceito na imunologia, e seu trabalho sobre a dosagem dos soros antiofídicos gerou tecnologia inédita. A criação dos soros antipeçonhentos específicos e o antiofídico polivalente ofereceu à Medicina, pela primeira vez, um produto realmente eficaz no tratamento do acidente ofídico que, sem substituto, permanece salvando centenas de vidas nos últimos cem anos.\n[…]\nA Casa da Moeda do Brasil expediu uma cédula no valor de Cr$ 10 000,00 (dez mil cruzeiros) cujo anverso era a efígie do cientista Vital Brazil, tendo a esquerda, gravura que representa cena clássica de extração do veneno, tarefa básica para a produção de soros, e o reverso um painel calcográfico mostrando um antigo serpentário, com destaque para a cena de cobra muçurana devorando uma jararaca;\n[…]\nBrazil, Lael Vital \"Vital Brazil Mineiro da Campanha – uma genealogia brasileira\".\n[…]\nVital Brazil\n[…]\nMuseu Vital Brazil, Campanha MG"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Vital_Brazil",
        "situacao": "ok",
        "texto": "Vital Brazil Mineiro da Campanha (April 28, 1865 – May 8, 1950), was a Brazilian physician, biomedical scientist and immunologist, known for the discovery of the polyvalent anti-ophidic serum used to treat bites of venomous snakes of the Crotalus,  Bothrops and Elaps genera. He went on to be also the first to develop anti-scorpion and anti-spider serums.\n[…]\nApplying the same techniques (which involved gradual immunization of horses and sheep by administering small doses of venoms, and then extracting, purifying and freeze-drying the antibody portion from the blood of injected animals), Vital Brazil and his coworkers were able to discover the first sera against two species of scorpions' (1908) and spiders' (1925) venoms.\n[…]\nIn the USA, Vital Brazil's name made the headlines when he used his serum to save the life of a worker in the Bronx Zoo in New York City who was bitten by a rattlesnake.\n[…]\nAccording to Bernardo Houssay, who wrote a well-cited biography of Vital Brazil in 1966, his contributions went further than herpetology:\"Vital Brazil and his collaborators have studied several actions of the venoms, (such as) coagulant, anticoagulant, hemolytic, agglutinant, cytotoxic, proteolytic, etc.\n[…]\n(...) The (animal) poisons contain numerous enzymes which have been isolated and studied with interest in all parts since they explain many of the symptoms and constitute interesting biochemical reagents, Vital Brazil studied also the ophiophagous serpents, such as the mussurana, the ophiophagous mammals, such as the skunk-like Conepatus chilensis and others, the ophiophagous birds and certain spiders.\n[…]\nVital Brazil is commemorated in the scientific names of four species of South American snakes:\n[…]\nChironius brazili Hamdan & Fernandes, 2015\n[…]\nScience and Technology in Brazil\n[…]\nInstituto Vital Brazil Website.\n[…]\nBiblioteca Virtual Vital Brazil (In Portuguese)."
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Prensa de Gutenberg",
      "descricao": "Prensa de tipos móveis metálicos desenvolvida por Johannes Gutenberg em meados do século quinze."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Por volta de 1450, Johannes Gutenberg pôs em funcionamento sua prensa de tipos móveis em que cidade alemã?",
    "resposta": "Mainz (Mogúncia)",
    "fonte": [
      "https://en.wikipedia.org/wiki/Johannes_Gutenberg",
      "https://en.wikipedia.org/wiki/Printing_press"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Johannes_Gutenberg",
        "situacao": "ok",
        "texto": "Johannes Gensfleisch zur Laden zum Gutenberg (c. 1393–1406 – 1468) was a German inventor and craftsman who invented the movable-type printing press. Though movable type was already in use in East Asia, Gutenberg's invention of the printing press enabled a much faster rate of printing. The printing press later spread across the world, and led to an information revolution and the unprecedented mass-\n[…]\nBetween 1450 and 1455, Gutenberg printed several texts, some of which remain unidentified; his texts did not bear the printer's name or date, so attribution is possible only from typographical evidence and external references. Certainly church documents including a papal letter and two indulgences were printed, one of which was issued in Mainz. In view of the value of printing in quantity, seven editions in two styles were ordered, resulting in several thousand copies being printed.\n[…]\nThere are many statues of Gutenberg in Germany, including one by Bertel Thorvaldsen (1837) at Gutenbergplatz in Mainz, home to the eponymous Johannes Gutenberg University of Mainz and Gutenberg Museum on the history of early printing. The latter publishes the Gutenberg-Jahrbuch, the leading periodical in the history of printing, and the book.\n[…]\nTwo operas based on Gutenberg are G, Being the Confession and Last Testament of Johannes Gensfleisch, also known as Gutenberg, Master Printer, formerly of Strasbourg and Mainz, from 2001, with music by Gavin Bryars; and La Nuit de Gutenberg, with music by Philippe Manoury, premiered in 2011 in Strasbourg. Project Gutenberg, the oldest digital library, commemorates Gutenberg's name. The Mainz Johannisnacht (St. John's Night), has commemorated Gutenberg in his native city since 1968.\n[…]\nGutenberg-Museum Mainz, Germany – English homepage\n[…]\nGutenberg Bible Archived 10 June 2023 at the Wayback Machine at the British Library"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Printing_press",
        "situacao": "ok",
        "texto": "A printing press is a machine that applies pressure to transfer ink onto a surface made of paper, cloth, or a similar material. Its workers are known as printing press operators. It marked a significant improvement on earlier methods, in which the paper was rubbed by hand to transfer applied ink to the printing surface.\n[…]\nGutenberg is also credited with introducing an oil-based ink, which was more durable than the previously used water-based inks. He used both paper and vellum (high-quality parchment) in his printing. He created a trial of color printing for a few of the page headings in the Gutenberg Bible, present only in some copies. The Mainz Psalter of 1453, likely designed by Gutenberg, featured elaborate red and blue printed initials and was published by his successors Johann Fust and Peter Schöffer.\n[…]\nGutenberg's mechanical movable-type printing press, alongside consumer demand for printed copies of Bibles and other religious works, precipitated the widespread growth of the printing industry across Europe. Gutenberg's print shop in Mainz was originally the only one in Europe, but by the end of the 15th century around 270 European cities were involved in printing.\n[…]\nQuantitative work in economics has tested some of these claims. Jeremiah Dittmar has shown that cities where printing was established in the fifteenth century grew around 60 percent faster than comparable cities without presses between 1500 and 1600. Separate regressions using distance from Mainz as an instrument for press adoption support that finding.\n[…]\nBorsa, Gedeon (1977), \"Drucker in Italien vor 1601\", Gutenberg-Jahrbuch (in German): 166–169\n[…]\nHanebutt-Benz, Eva-Maria (2000), \"Gutenbergs Erfindungen\", Gutenberg. Aventur und Kunst: Vom Geheimunternehmen zur ersten Medienrevolution (in German), Mainz: Stadt Mainz, pp. 158–189"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Johannes_Gutenberg",
        "situacao": "ok",
        "texto": "Para outros significados de Gutenberg, veja Gutenberg (desambiguação).\n[…]\nPor volta de 1450, a prensa já funcionava e havia produzido um poema alemão, talvez seu primeiro impresso. Gutenberg recebeu cerca de 800 florims do financiador Johannes Fust por volta de 1449–1450. Peter Schöffer, que mais tarde se casaria com a filha de Fust, também entrou no negócio. Ele havia trabalhado como copista em Paris e possivelmente desenhou alguns dos primeiros tipos de letra.\n[…]\nNo livro Batavia, escrito por volta de 1568 e publicado postumamente em 1588, o holandês Hadrianus Junius atribuiu a invenção dos tipos móveis a Laurens Janszoon Coster. Segundo seu relato, um empregado chamado Johannes, que Junius supunha ser Johannes Fust, teria roubado o conhecimento e o equipamento da oficina em Haarlem e fugido para Mogúncia. Não há comprovação documental de que Coster imprimisse livros.\n[…]\nA cidade de Mogúncia fundou o Museu Gutenberg em 1900. A Sociedade Internacional Gutenberg foi criada em 1901 e publica, desde 1926, o Gutenberg-Jahrbuch, periódico dedicado à história do livro e da impressão. A universidade local passou a se chamar Universidade Johannes Gutenberg de Mogúncia quando foi reaberta, em 1946. Desde 1968, a cidade e a sociedade concedem o Prêmio Gutenberg por realizações artísticas, técnicas ou científicas na área da impressão.\n[…]\nDesde 1968, a Johannisnacht, festa realizada em Mogúncia, celebra o nome de Gutenberg.\n[…]\nGutenberg Museum (2000). Gutenberg: Man of the Millennium. Mogúncia: City of Mainz. OCLC 44850118 .\n[…]\nMuseu Gutenberg, em Mogúncia (em alemão).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Óculos",
      "descricao": "Armação com lentes usada diante dos olhos para corrigir a visão, surgida no fim do século treze."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Os primeiros óculos de correção de que se tem notícia surgiram por volta de 1290 no território de que país atual?",
    "resposta": "Itália",
    "distratores": [
      "França",
      "China",
      "Alemanha"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Glasses"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Glasses",
        "situacao": "ok",
        "texto": "Glasses, also known as eyeglasses, spectacles, or colloquially as specs, are vision eyewear with clear or tinted lenses mounted in a frame that holds them in front of a person's eyes, typically utilizing a bridge over the nose and hinged arms, known as temples or temple pieces, that rest over the ears for support.\n[…]\nThe earliest ancestors of modern eyeglasses were 13th-century Italian \"reading stones\". Due to the objects having no arms, wearers had to hold these magnifying spheres directly over their books. The familiar temple arms that hook over a wearer's ears were not invented until the 1700s.\n[…]\nPeople who need glasses to see often have corrective lens restrictions on their driver's licenses that require them to wear their glasses every time they drive or risk fines or jail time.\n[…]\nIn the early 20th century, Moritz von Rohr and Zeiss (with the assistance of H. Boegehold and A. Sonnefeld) developed the Zeiss Punktal spherical point-focus lenses that dominated the eyeglass lens field for many years. In 2008, Joshua Silver designed eyewear with adjustable corrective glasses. They work by using a built-in syringe to pump a silicone solution into a flexible lens.\n[…]\nDespite the popularity of contact lenses and laser corrective eye surgery, glasses remain very common, as their technology has improved. For instance, it is now possible to purchase frames made of special memory metal alloys that return to their correct shape after being bent. Other frames have spring-loaded hinges. Either of these designs offer dramatically better ability to withstand the stresses of daily wear and the occasional accident.\n[…]\nThe availability of glasses to ordinary people is still an ongoing problem, with between 1 and 2.5 billion people worldwide lacking access to vision correction.\n[…]\nGI glasses\n[…]\nRimless glasses\n[…]\nWindsor glasses"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/%C3%93culos",
        "situacao": "ok",
        "texto": "Os óculos são dispositivos ópticos utilizados para a compensação de ametropias, e/ou proteção dos olhos, ou ainda por motivos estéticos, utilizados na parte superior da face, próximos aos olhos, mas sem entrar em contacto físico com estes, constituídos geralmente por duas lentes oftálmicas e uma armação. Atualmente, quase todos os modelos de óculos são usados diante do rosto repousando sobre o nar\n[…]\nSomente no século I d.C surgiram as primeiras lentes corretivas, que eram feitas com pedras semipreciosas cortadas em tiras finas e davam origem aos óculos de grau para perto.\n[…]\nEm 1785, Benjamin Franklin inventou os primeiros óculos bifocais, com duas lentes a frente de cada olho unidas pela armação, possibilitando enxergar de longe e de perto em um único acessório.\n[…]\nEnquanto que os primeiros óculos eram usados principalmente para auxílio da leitura, hoje em dia os óculos são mais do que simples próteses de correção de deformidades visuais, sendo que, são agora um dos principais acessórios de moda das sociedades modernas.\n[…]\nO design foi inspirado nas primeiras máscaras criadas para pilotos de avião. Foi baptizado como Anti-Glare Aviator e somente em 1937 passou a ser chamado de Ray Ban (do inglês Ray-Banner ou Raios Banidos), ganhou armação dourada e as ruas do mundo inteiro. Mas foi através do cinema que o Ray Ban obteve grande sucesso. Desde 1999, a marca pertence à empresa italiana Luxottica Group Spa.\n[…]\nPor isso, é um material que perdeu a popularidade no mercado e atualmente é mais comum ser utilizado somente nas hastes da armação. O Optyl é um material resistente ao calor, e pode ser encontrado em diversas cores e modelos. Além disso, é hipoalergênico, ajustável e adaptado à transpiração da pele. Esse material é patenteado pela marca Carrera e produzido e usado exclusivamente pelo SAFILO GROUP, Itália.\n[…]\nÓculos de sol\n[…]\nÓculos de natação\n[…]\nÓculos de segurança",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "William Addis",
      "descricao": "Empresário inglês do século dezoito que criou um modelo de escova de dentes produzido em série."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Por volta de 1780, o inglês William Addis teve a ideia de uma escova de dentes que virou negócio de família. Onde ele estava?",
    "resposta": "Na prisão",
    "fonte": [
      "https://en.wikipedia.org/wiki/William_Addis",
      "https://en.wikipedia.org/wiki/Toothbrush"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/William_Addis",
        "situacao": "desambiguacao",
        "texto": "William Addis may refer to:\n\nWilliam Addis (colonial administrator) (1901–1978), British governor of Seychelles\nWilliam Addis (entrepreneur) (1734–1808), English inventor of the first mass-produced toothbrush\nWilliam Edward Addis (1844–1917), Scottish-born Australian colonial clergyman\nWilliam Adyes or Addis (1520–1558/9), English politician, MP for Worcester"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Toothbrush",
        "situacao": "ok",
        "texto": "A toothbrush is a special type of brush used to clean the teeth, gums, and tongue. It consists of a head of tightly clustered bristles, onto which toothpaste is applied, mounted on a handle that facilitates cleaning hard-to-reach areas of the mouth. They should be used in conjunction with tools that clean between the teeth―where toothbrush bristles cannot reach―such as floss, tape, interdental bru\n[…]\nIn the UK, William Addis is believed to have made the first mass-produced toothbrush in 1780. In 1770, he was jailed for causing a riot. While in prison he decided that using a rag with soot and salt on the teeth was ineffective and could be improved.\n[…]\nHertford Museum in Hertford, UK, holds approximately 5000 brushes that make up part of the Addis Collection. The Addis factory on Ware Road was a major employer in the town until 1996. Since the closure of the factory, Hertford Museum has received photographs and documents relating to the archive, and collected oral histories from former employees."
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Hercule Florence",
      "descricao": "Inventor e desenhista francês (1804–1879) radicado no Brasil, pioneiro da fotografia no país."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em que cidade paulista o francês Hercule Florence fez, nos anos 1830, experimentos pioneiros de fotografia?",
    "resposta": "Campinas",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Hercule_Florence",
      "https://en.wikipedia.org/wiki/Hercule_Florence"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Hercule_Florence",
        "situacao": "ok",
        "texto": "Antoine Hercule Romuald Florence, conhecido como Hercule Florence ou Hércules Florence, (Nice, 29 de fevereiro de 1804 – Campinas, 27 de março de 1879), foi um inventor, desenhista e polígrafo monegasco-brasileiro, além de pioneiro da fotografia.\n[…]\nApós seu retorno da expedição, contraiu núpcias com Maria Angélica A. M. Vasconcelos, filha de importante político paulista, fixando residência na pacata vila de São Carlos (atual Campinas), um dos polos culturais mais importantes do Estado de São Paulo. Florence havia conhecido sua futura esposa dias antes da partida da viagem que mudaria a sua vida, na cidade de Porto Feliz, situada na região de Itu e Sorocaba.\n[…]\nKarl Von Engler, um médico austríaco amigo de Florence e radicado na atual cidade de Indaiatuba, próxima a Campinas, terá relatado, segundo o relato de sua bisneta, a historiadora Chloé Almeida Engler, que as sucessivas falhas em propagar suas ideias e a modéstia característica do francês, fizeram-no perder o posto de inventor para os europeus:\n[…]\nFlorence foi ainda pioneiro da imprensa em Campinas ao fundar, em 1836, O Paulista, primeiro jornal do interior da Província de São Paulo. A proliferação em Campinas de bilhetes falsos de banco induziu-o a inventar um novo método de impressão para evitar falsificações, sobre o que publicou um folheto de 14 páginas.\n[…]\nFLORENCE, Antoine Hercule Romuald. Ensaio sobre a impressão das notas de banco por um processo totalmente inimitável, precedido por algumas observações sobre a gravura das mesmas notas, e o modo de se conhecer as que são falsas. Campinas: Tipografia de Costa Silveira, 1841.\n[…]\nKOSSOY, Boris. Hercules Florence - 1833 - a descoberta isolada da fotografia no Brasil (2ª ed.). São Paulo: Duas Cidades, 1980."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Hercule_Florence",
        "situacao": "inexistente",
        "texto": ""
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Bússola",
      "descricao": "Instrumento de orientação com agulha magnetizada que aponta para o norte magnético."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "A bússola magnética, que séculos depois guiaria as Grandes Navegações, foi inventada em que país?",
    "resposta": "China",
    "fonte": [
      "https://en.wikipedia.org/wiki/Compass"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Compass",
        "situacao": "ok",
        "texto": "A compass is a device that shows the cardinal directions used for navigation and geographic orientation. It typically consists of a magnetized needle or another element, such as a compass card or compass rose, that pivots to align itself with magnetic north. Other methods may be used, including gyroscopes, magnetometers, and GPS receivers.\n[…]\nSome claims state that the first devices utilising lodestone's natural magnetic properties were in ancient Han dynasty China. The earliest mention of a needle's attraction appears in a work composed between 20 and 100 AD, the Lunheng (Balanced Inquiries): \"A lodestone attracts a needle.\" In the 2nd century BC, Chinese geomancers were experimenting with the magnetic properties of lodestone to make a \"south-pointing spoon\" for divination.\n[…]\nThe first compasses used for navigation appeared in China by 1088 during the Song dynasty, as described by Shen Kuo. These compasses were made of iron needles, magnetized by striking them with a lodestone. Dry compasses began to appear around 1300 in Medieval Europe and the Islamic world. This was supplanted in the early 20th century by the liquid-filled magnetic compass.\n[…]\nIf a needle is rubbed on a lodestone or other magnet, the needle becomes magnetized. When it is inserted in a cork or piece of wood, and placed in a bowl of water it becomes a compass. Such devices were universally used as compasses until the invention of the box-like compass with a \"dry\" pivoting needle, sometime around 1300.\n[…]\nOriginally, many compasses were marked only as to the direction of magnetic north, or to the four cardinal points (north, south, east, west). Later, these were divided, in China into 24, and in Europe into 32 equally spaced points around the compass card. For a table of the thirty-two points, see compass points.\n[…]\nHand compass – Compact magnetic compass"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/B%C3%BAssola",
        "situacao": "ok",
        "texto": "Uma bússola é um instrumento que mostra os pontos cardeais usados na navegação e na orientação geográfica. Em geral, consiste em uma agulha magnetizada ou outro elemento, como um cartão de bússola ou uma rosa dos ventos, que gira até se alinhar com o norte magnético. Outros métodos também podem ser usados, entre eles giroscópios, magnetômetros e receptores do sistema de posicionamento global.\n[…]\nEntre as quatro grandes invenções chinesas, a bússola magnética surgiu primeiro como instrumento de adivinhação, já durante a China da Dinastia Han, a partir de cerca de 206 a.C., e passou a ser usada na navegação pelos chineses da Dinastia Sung no século XI. O primeiro uso registrado de uma bússola na Europa Ocidental ocorreu por volta de 1190 e, no mundo islâmico, no século XIII.\n[…]\nAlgumas interpretações situam os primeiros instrumentos que exploravam as propriedades magnéticas naturais da pedra-imã na China da Dinastia Han. A menção mais antiga à atração de uma agulha está no Lunheng (Investigações equilibradas), obra escrita entre 20 e 100 d.C.: \"Uma pedra-imã atrai uma agulha.\" No século II a.C., geomantes chineses experimentavam as propriedades magnéticas da pedra-imã para produzir uma \"colher que aponta para o sul\" usada em adivinhação.\n[…]\nNo início, muitas bússolas marcavam apenas a direção do norte magnético ou os quatro pontos cardeais, norte, sul, leste e oeste. Mais tarde, o cartão foi dividido em 24 pontos na China e em 32 pontos igualmente espaçados na Europa. Os 32 pontos aparecem na rosa dos ventos.\n[…]\nBússolas giroscópicas ainda são usadas para fins militares, sobretudo em submarinos, onde bússolas magnéticas e GPS são inúteis. Em aplicações civis, foram em grande parte substituídas por bússolas GPS com bússolas magnéticas de reserva.\n[…]\nSistema de navegação inercial, método de navegação que não depende de referência magnética externa\n[…]\nHandbook of Magnetic Compass Adjustment",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Fax",
      "descricao": "Sistema de transmissão de imagens e documentos por fio, cuja primeira patente foi do escocês Alexander Bain."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Em que década o escocês Alexander Bain patenteou o primeiro sistema de fax, antes mesmo da invenção do telefone?",
    "resposta": "Década de 1840",
    "distratores": [
      "Década de 1870",
      "Década de 1900",
      "Década de 1930"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Fax",
      "https://en.wikipedia.org/wiki/Alexander_Bain_(inventor)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fax",
        "situacao": "ok",
        "texto": "Fax (short for facsimile), sometimes called telecopying or telefax (short for telefacsimile), is the telephonic transmission of scanned printed material (both text and images), normally to a telephone number connected to a printer or other output device.\n[…]\nScottish inventor Alexander Bain worked on chemical-mechanical fax-type devices and in 1846 Bain was able to reproduce graphic signs in laboratory experiments. He received British patent 9745 on May 27, 1843, for his \"Electric Printing Telegraph\". Frederick Bakewell made several improvements on Bain's design and demonstrated a telefax machine. The Pantelegraph was invented by the Italian physicist Giovanni Caselli.\n[…]\nHe introduced the first commercial telefax service between Paris and Lyon in 1865, some 11 years before the invention of the telephone.\n[…]\nIn 1880, English inventor Shelford Bidwell constructed the scanning phototelegraph that was the first telefax machine to scan any two-dimensional original, not requiring manual plotting or drawing. An account of Henry Sutton's \"telephane\" was published in 1896.\n[…]\nIn 1964, Xerox Corporation introduced (and patented) what many consider to be the first commercialized version of the modern fax machine, under the name (LDX) or Long Distance Xerography. This model was superseded two years later with a unit that would set the standard for fax machines for years to come. Up until this point facsimile machines were very expensive and hard to operate. In 1966, Xerox released the Magnafax Telecopiers, a smaller, 46 lb (21 kg) facsimile machine."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Alexander_Bain_(inventor)",
        "situacao": "ok",
        "texto": "Alexander Bain (12 October 1810 – 2 January 1877) was a Scottish inventor and engineer who was first to invent and patent the electric clock. He created the first fax machine, known as Bain's facsimile. Bain also installed the railway telegraph lines between Edinburgh and Glasgow.\n[…]\nIn 1840, desperate for money to develop his inventions, Bain mentioned his financial problems to the editor of the Mechanics Magazine, who introduced him to Sir Charles Wheatstone. Bain demonstrated his models to Wheatstone, who, when asked for his opinion, said \"Oh, I shouldn't bother to develop these things any further! There's no future in them.\" Three months later Wheatstone demonstrated an electric clock to the Royal Society, claiming it was his own invention.\n[…]\nBain's first patent was dated 11 January 1841, and was in the names of John Barwise, chronometer maker, and Alexander Bain, mechanist. It describes his electric clock which uses a pendulum kept moving by electromagnetic impulses. He improved on this in later patents, including a proposal to derive the required electricity from an \"earth battery\", which consisted of plates of zinc and copper buried in the ground.\n[…]\nAlexander Bain, A Short History of the Electric Clocks\n[…]\nGunn, Robert P., Alexander Bain of Watten. Genius of the North, Wick 1976\n[…]\nHackmann, W. D., Alexander Bain's Short History of the Electric Clock (1852), London: Turner & Devereux 1973.\n[…]\nAked, C. K., Alexander Bain. The father of electric horology, Antiquarian Horology December, 1974.\n[…]\nU.S. patent 006,837\n[…]\nSignificant Scots: Alexander Bain, electricscotland.com.\n[…]\nAlexander Bain 1811-1877, visitdunkeld.com.\n[…]\nHistory of the Fax Machine: Alexander Bain received the first patent for a fax machine in 1843 Archived 15 March 2009 at Archive-It, inventors.about.com."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Fax",
        "situacao": "ok",
        "texto": "Fax, faxe, telefax (abreviaturas do termo latino facsimile e telefacsimile) ou telecópia é uma tecnologia das telecomunicações usada para a transferência remota de documentos através da rede telefônica.\n[…]\nA ideia de transmitir e reproduzir documentos à longa distância foi patenteada por Alexander Bain, em 1843. Da união da ideia de Bain com aparelho telefônico criado por Alexander Graham Bell, o primeiro protótipo do fac-símile, mais conhecido como fax, foi criado nos Laboratórios Bell, em 1926.\n[…]\nEm 1947, Gabriel Casotti, especialista em telegrafia sem fio, produziu o primeiro aparelho de fax, com a ajuda da agência de notícias Associated Newspapers.\n[…]\nEm 1949, a Muirhead instalou o primeiro sistema de fax no Japão. E no ano 1973, este começou a ser produzido em grande escala.\n[…]\nUma \"máquina de fax\" normalmente consiste de um scanner, um modem, uma impressora e uma linha telefônica em um só equipamento. O scanner converte o arquivo impresso em uma imagem digital; o modem envia esta imagem pela linha telefônica para outra máquina de fax; e a impressora desta máquina produz uma cópia do documento recebido.\n[…]\nEm muitos ambientes corporativos, as máquinas de fax foram substituídas pelos servidores de fax e outros sistemas computadorizados capazes de receber e armazenar fax eletrônicos que podem ser impressos ou reenviados via e-mail para terceiros. Tais sistemas têm a vantagem de reduzir custos, uma vez que diminuem impressões desnecessárias e gastos com ligações telefônicas das máquinas de fax.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Abridor de latas",
      "descricao": "Utensílio para abrir latas de conserva, surgido décadas depois da própria lata."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Depois da invenção da lata de conserva, em 1810, ela foi aberta por décadas com martelo e formão. Em que década surgiu o abridor de latas?",
    "resposta": "Década de 1850",
    "fonte": [
      "https://en.wikipedia.org/wiki/Can_opener"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Can_opener",
        "situacao": "ok",
        "texto": "A can opener (North American and Australian English) or tin opener (British English) is a mechanical device used to open metal tin cans. Although preservation of food using tin cans had been practiced since at least 1772 in the Netherlands, the first can openers were not patented until 1855 in England and 1858 in the United States. These early openers were basically variations of a knife, though t\n[…]\nFood preserved in tin cans was in use by the Dutch Navy from at least 1772. Before 1800, there was already a small industry of canned salmon in the Netherlands. Freshly caught salmon were cleaned, boiled in brine, smoked and placed in tin-plated iron boxes. This canned salmon became known outside the Netherlands, and in 1797 a British company supplied one of their clients with 13 cans of it. Preservation of food in tin cans was patented by Peter Durand in 1810."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Abridor_de_latas",
        "situacao": "ok",
        "texto": "Abridor de latas (português brasileiro) ou abre-latas (português europeu) é um utensílio que serve para abrir latas. Ele faz parte dos utensílios culinários, uma vez que há muitos alimentos que são vendidos enlatados, mas também é utilizado em muitas oficinas e estações de serviço para abrir latas de óleos, cola e outros produtos.\n[…]\nA instrução nessas latas dizia \"Corte em volta da parte superior perto da borda externa com um cinzel e um martelo.\" A lacuna de décadas entre a invenção do abridor e lata pode ser atribuída à funcionalidade das ferramentas existentes versus o custo e esforço de uma nova ferramenta.\n[…]\nOs abridores de lata de uso geral apareceram pela primeira vez na década de 1850 e tinham um design primitivo em forma de garra ou \"tipo alavanca\". Em 1855, Robert Yeates, um fabricante de talheres e instrumentos cirúrgicos de Trafalgar Place West, Middlesex, no Reino Unido, concebeu o primeiro abridor de lata com uma ferramenta manual que regateava o topo das latas de metal.\n[…]\nO abridor era feito de ferro fundido e tinha uma construção muito semelhante ao abridor de Yeates, mas apresentava um formato mais artístico e foi o primeiro passo para melhorar a aparência do abridor de latas. O desenho com cabeça de touro foi produzido até a década de 1930 e também foi oferecido com o formato de cabeça de peixe.\n[…]\nUm novo estilo de abridor de latas surgiu na década de 1980. Enquanto a maioria dos outros abridores removem a tampa cortando a tampa pela parte superior logo dentro da borda, removendo a parte superior e deixando a borda presa à lata, eles usam um rolo e uma roda de corte para cortar a costura externa da lata. A lata é deixada com uma borda relativamente segura e não recortada, e o topo pode ser colocado de volta no topo como uma tampa, embora não forneça uma vedação.\n[…]\nLata",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Edward Jenner",
      "descricao": "Médico inglês (1749–1823) que criou a vacina contra a varíola a partir da varíola bovina."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Em que século o médico inglês Edward Jenner fez seu famoso teste de vacina contra a varíola?",
    "resposta": "Século dezoito",
    "distratores": [
      "Século dezesseis",
      "Século dezessete",
      "Século dezenove"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Edward_Jenner"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Edward_Jenner",
        "situacao": "ok",
        "texto": "Edward Jenner (17 May 1749 – 26 January 1823) was an English physician and scientist who pioneered the concept of vaccines and created the smallpox vaccine, the world's first vaccine. The terms vaccine and vaccination are derived from Variolae vaccinae (\"pustules of the cow\"), the term devised by Jenner to denote cowpox. He used it in 1798 in the title of his Inquiry into the Variolae vaccinae kno\n[…]\nJenner married Catherine Kingscote in March 1788 (she died of tuberculosis in 1815). He might have met her while he and other fellows were experimenting with balloons. Jenner's trial balloon descended into Kingscote Park, Gloucestershire, owned by Catherine's father, Anthony Kingscote. They had three children together: Edward Robert (1789–1810), Catherine Fitzhardinge (1794–1833), and Robert Fitzhardinge (1797–1854), who was 11 months old when Edward Jenner inoculated him with his cowpox vaccine.\n[…]\nJenner inoculated Phipps through two small cuts on his arm that day; this led to a fever and some uneasiness, but no full-blown infection. On 1 July 1796, Jenner injected Phipps with variolous material, the routine method of immunisation at that time, and again no disease followed. Phipps was later challenged with variolous material and again showed no sign of infection. There were no unexpected side effects, and neither Phipps nor any other recipients underwent any future 'breakthrough' cases.\n[…]\nThe Edward Jenner Institute for Vaccine Research is an infectious disease vaccine research centre, also the Jenner Institute part of the University of Oxford.\n[…]\nA section at Gloucestershire Royal Hospital is known as the Edward Jenner Unit; it is where blood is drawn.\n[…]\nVariolation\n[…]\nWorks by Edward Jenner at Project Gutenberg\n[…]\nWorks by Edward Jenner at LibriVox (public domain audiobooks)\n[…]\nWorks by or about Edward Jenner at the Internet Archive\n[…]\nDr Jenner's House, Museum and Garden, Berkeley"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Edward_Jenner",
        "situacao": "ok",
        "texto": "Edward Jenner FRS (Berkeley, 17 de maio de 1749 – 26 de janeiro de 1823) foi um naturalista e médico franco-inglês pioneiro no conceito de vacinas incluindo a invenção da vacina contra a varíola, em 1796.\n[…]\nTal conexão é vista hoje, onde muitas vacinações atuais incluem partes de animais de vacas, coelhos e ovos de galinha, o que pode ser atribuído ao trabalho de Jenner e sua vacinação contra a varíola bovina e varíola humana.\n[…]\nEm 1768, o médico inglês John Fewster percebeu que uma infecção prévia pela varíola bovina levava a uma imunidade da pessoa contra a varíola. Na década de 1770, pelo menos cinco pesquisadores da Inglaterra e da Alemanha (Sevel, Jensen, Jesty 1774, Rendell, Plett 1791) fizeram testes em humanos, com sucesso, utilizando a vacina bovina contra varíola humana.\n[…]\nO sucesso de sua descoberta logo se espalhou pela Europa e foi usado \"em massa\" na Operação Balmis, na Espanha (1803-1806), uma missão de três anos às Américas, Filipinas, Macau e China, liderada pelo médico Francisco Javier de Balmis com o objetivo de dar a milhares de pessoas a vacina contra a varíola, iniciativa que foi elogiada pelo próprio Jenner.\n[…]\nRetornando a Londres, em 1811, Jenner notou um número significativo de casos de varíola após a vacinação. Ele descobriu que, nesses casos, a gravidade da doença diminuía notavelmente com a vacinação anterior. Em 1821, ele foi nomeado médico especial do rei Jorge IV e também foi nomeado prefeito de Berkeley e juiz de paz.\n[…]\nObras de Edward Jenner (em inglês) no Projeto Gutenberg\n[…]\nObras de ou sobre Edward Jenner no Internet Archive\n[…]\nAs três publicações originais sobre a vacinação contra a varíola\n[…]\nCasa do Dr. Jenner’s, Museue e Jardins, em Berkeley",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Bíblia de Gutenberg",
      "descricao": "Bíblia em latim impressa por Johannes Gutenberg em Mainz, o primeiro grande livro europeu feito com tipos móveis."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "A Bíblia de Gutenberg, primeiro grande livro impresso com tipos móveis na Europa, ficou pronta em que década?",
    "resposta": "Década de 1450",
    "distratores": [
      "Década de 1350",
      "Década de 1550",
      "Década de 1650"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Gutenberg_Bible"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Gutenberg_Bible",
        "situacao": "ok",
        "texto": "The Gutenberg Bible, also known as the 42-line Bible, the Mazarin Bible or the B42, is the earliest major book printed in Europe using mass-produced metal movable type. It marked the start of the \"Gutenberg Revolution\" and the age of printed books in the West. The book is valued and revered for its high aesthetic and artistic qualities and its historical significance.\n[…]\nPreparation of the Bible probably began soon after 1450, and the first finished copies were available in 1454 or 1455. It is not known exactly how long the Bible took to print. The first precisely datable printing is Gutenberg's 31-line Indulgence which certainly existed by 22 October 1454.\n[…]\nThe Gutenberg Bible is printed in the blackletter type styles that would become known as Textualis (Textura) and Schwabacher. The name Textura refers to the texture of the printed page: straight vertical strokes combined with horizontal lines, giving the impression of a woven structure. Gutenberg already used the technique of justification, that is, creating a vertical, not indented, alignment at the left and right-hand sides of the column.\n[…]\nThe Munich copy of the Gutenberg Bible on bavarikon\n[…]\nThe Gutenberg Bible at the Beinecke Archived 2020-07-27 at the Wayback Machine Podcast from the Beinecke Library, Yale University\n[…]\nThe Gutenberg Leaf—Image and information about a single \"Noble Fragment\" held by the McCune Collection in Vallejo, California\n[…]\nHistory in the Headlines: 7 Things You May Not Know About the Gutenberg Bible History.com, February 23, 2015\n[…]\nFragment of the Gutenberg Bible, Biblia Latina [Armoire S], at the Library of Trinity College Dublin\n[…]\nFragment of the Gutenberg Bible, A Noble Fragment: Being a Leaf of the Gutenberg Bible (1450–55), at the Clark Library of the University of California, Los Angeles\n[…]\nFragment of the Gutenberg Bible at the John Carter Brown Library of the Early Americas"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/B%C3%ADblia_de_Gutenberg",
        "situacao": "ok",
        "texto": "A Bíblia de Gutenberg (também conhecida como Bíblia de Mazari ou Bíblia de 42 linhas) é o incunábulo impresso da tradução em latim da Bíblia, por Johannes Gutenberg, em Mogúncia (atual Mainz), Alemanha. A produção da Bíblia começou em 1450, tendo Gutenberg usado uma prensa de tipos móveis. Calcula-se que tenha terminado em 1455. Essa Bíblia é considerada o incunábulo mais importante, pois marca o \n[…]\nO custo inicial do equipamento e dos materiais de impressão, bem como do trabalho necessário para que a Bíblia estivesse pronta para venda, sugere que Gutenberg pode ter começado seus trabalhos de publicação com textos mais lucrativos, incluindo vários documentos religiosos, um poema alemão e algumas edições da Ars Grammatica de Élio Donato, um popular livro de gramática latina.\n[…]\nA preparação da Bíblia provavelmente começou logo após 1450, e os primeiros exemplares finalizados ficaram prontos em 1454 ou 1455. Não se sabe exatamente quanto tempo levou para imprimir a Bíblia. A primeira impressão com data precisa é a Indulgência de Gutenberg, com 31 linhas, que certamente existia em 22 de outubro de 1454.\n[…]\nA Bíblia de 42 linhas foi impressa em um papel do tamanho conhecido como 'Real'. Uma folha inteira de papel Real mede 42 cm × 60 cm (17 pol × 24 pol) e uma única folha fólio não aparada mede 42 cm × 30 cm (17 pol × 12 pol). Um único exemplar completo da Bíblia de Gutenberg tem 1.288 páginas (4×322 = 1288) (geralmente encadernado em dois volumes); com quatro páginas por folha fólio, são necessárias 322 folhas de papel por exemplar.\n[…]\nInicialmente, as rubricas — os títulos antes de cada livro da Bíblia — eram impressas em vermelha, mas essa prática foi rapidamente abandonada em data desconhecida, e espaços foram deixados para que as rubricas fossem adicionadas à mão. Um guia do texto a ser adicionado a cada página, impresso para uso dos rubricadores, sobreviveu.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Irmãos Montgolfier",
      "descricao": "Joseph-Michel e Jacques-Étienne Montgolfier, franceses que criaram o balão de ar quente em 1783."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em 1783, antes de levar pessoas, um balão dos irmãos Montgolfier subiu em Versalhes com um pato, um galo e que outro animal?",
    "resposta": "Uma ovelha",
    "fonte": [
      "https://en.wikipedia.org/wiki/Montgolfier_brothers"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Montgolfier_brothers",
        "situacao": "ok",
        "texto": "The Montgolfier brothers – Joseph-Michel Montgolfier (French: [ʒozɛf miʃɛl mɔ̃ɡɔlfje]; 26 August 1740 – 26 June 1810) and Jacques-Étienne Montgolfier ([ʒak etjɛn mɔ̃ɡɔlfje]; 6 January 1745 – 2 August 1799) – were aviation pioneers, balloonists and paper manufacturers from the commune Annonay in Ardèche, France. They invented the Montgolfière-style hot air balloon, globe aérostatique, which launche\n[…]\nHe believed that the smoke itself was the buoyant part and contained within it a special gas, which he called \"Montgolfier Gas\", with a special property he called levity, which is why he preferred smoldering fuel.\n[…]\nÉtienne Montgolfier was the first human to lift off the Earth in a balloon, making a tethered test flight from the yard of the Réveillon workshop in the Faubourg Saint-Antoine, most likely on 15 October 1783. A little while later on that same day, physicist Pilâtre de Rozier became the second to ascend into the air, to an altitude of 25 metres (82 ft), which was the length of the tether.\n[…]\nIn December 1783, father Pierre Montgolfier was elevated to the nobility and the hereditary appellation of de Montgolfier by King Louis XVI.\n[…]\nOn 1 December 1783, a few months after the Montgolfiers' first flight, Jacques Alexandre César Charles rose to an altitude of about 3 km (1.9 mi) near Paris in a hydrogen-filled balloon he had developed.\n[…]\nIn 1797, Montgolfier's friend Matthew Boulton took out a British patent on his behalf.\n[…]\nThe Montgolfier Company in Annonay still exists under the name Canson. It produces fine art papers, school drawing papers and digital fine art and photography papers sold in 150 countries.\n[…]\nIn 1983, the Montgolfier brothers were inducted into the International Air & Space Hall of Fame at the San Diego Air & Space Museum.\n[…]\nAdélaïde de Montgolfier\n[…]\n\"Lighter than air: the Montgolfier brothers\"\n[…]\n\"Balloons and the Montgolfier brothers\""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Irm%C3%A3os_Montgolfier",
        "situacao": "ok",
        "texto": "Os Irmãos Montgolfier: Joseph-Michel (Annonay, 26 de agosto de 1740 — Balaruc-les-Bains, 26 de junho de 1810) e Jacques-Étienne (Annonay, 6 de janeiro de 1745 — Neuchâtel, 2 de agosto de 1799), foram dois irmãos inventores franceses, que construíram o primeiro balão tripulado do Mundo, que elevou Étienne aos céus em 5 de junho de 1783.\n[…]\nDevido a esse feito, em dezembro de 1783, o pai deles, Pierre, foi elevado à nobreza com brasão próprio e o sobrenome de Montgolfier passou a ser hereditário, por decreto do Rei Luís XVI.\n[…]\nDecididos a fazer uma demonstração pública para reivindicar a autoria do invento, os irmãos Montgolfier construíram um balão em forma de esfera feito de serapilheira com três camadas de papel no interior, com capacidade de 790 m³ de ar pesando 225 kg, constituído de quatro partes (o topo e mais três laterais) seguras por 1,8 mil botões e uma rede de pesca reforçada.\n[…]\nNa semana seguinte, em 19 de setembro de 1783, em frente ao Palácio de Versalhes perante um público que incluiu o Rei Luis XVI e a Rainha Maria Antonieta, o Aérostat Réveillon voou com os primeiros seres vivos a bordo: uma ovelha, um pato e um galo (apesar de o Rei ter proposto enviar dois criminosos). Este voo durou cerca de 8 minutos, se estendeu por 3 km chegando a cerca de 460 m de altitude e pousando em segurança.\n[…]\nAo que se sabe, Étienne Montgolfier foi o primeiro ser humano a levantar voo do solo, fazendo no mínimo um voo seguro por cordas do pátio da oficina de Réveillon no subúrbio de Paris conhecido como Faubourg Saint-Antoine, na provável date de 15 de outubro de 1783. Mais tarde naquele mesmo dia, Pilâtre de Rozier tornou-se o segundo ser humano a voar num balão atingindo cerca de 24 m de altitude, que era o comprimento da corda.\n[…]\nBalão de ar quente\n[…]\nPortrait des frères Montgolfier\n[…]\nMusée des papeteries Canson et Montgolfier",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Bi Sheng",
      "descricao": "Artesão chinês do século onze, criador da primeira técnica conhecida de impressão com tipos móveis."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Por volta de 1040, quatro séculos antes de Gutenberg, o chinês Bi Sheng criou tipos móveis feitos de que material?",
    "resposta": "Argila cozida",
    "distratores": [
      "Bronze",
      "Ferro",
      "Chumbo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Bi_Sheng",
      "https://en.wikipedia.org/wiki/Movable_type"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bi_Sheng",
        "situacao": "ok",
        "texto": "Bi Sheng (died 1051) was a Chinese artisan and engineer during the Song dynasty (960–1279), who invented the world's first movable type. Bi's system used fired clay tiles, one for each Chinese character, and was invented between 1039 and 1048. Printing was one of the Four Great Inventions. Because Bi was a commoner, not an educated person, little is known about his life besides this invention.\n[…]\nBi Sheng's invention was only recorded in the Dream Pool Essays by Chinese scholar-official and polymath Shen Kuo (1031–1095). The book provides a detailed description of the technical details of Bi Sheng's invention of movable type printing:\n[…]\nBi Sheng also developed wooden movable type, but it was abandoned in favor of ceramic types due to the presence of wood grains and the unevenness of the wooden type after being soaked in ink.\n[…]\nThe next mention of movable type occurred in 1193 when a Southern Song chief counselor, Zhou Bida (周必大), attributed the movable-type method of printing to Shen Kuo. However Shen Kuo did not invent the movable type but credited it to Bi Sheng in his Dream Pool Essays. The ceramic movable type was also mentioned by Kublai Khan's councilor Yao Shu, who convinced his pupil Yang Gu to print language primers using this method.\n[…]\nThe government official Wang Zhen (fl. 1290–1333) improved Bi Sheng's clay types by innovation through the wood, as his process increased the speed of typesetting as well.\n[…]\nBisheng Subdistrict (畢昇社區) in Wenquan, Huanggang, Hubei is named for Bi Sheng. The Bi Sheng crater located in the LAC-7 quadrant near the northern pole on the far side of the Moon was named after Bi Sheng by the IAU on August 2, 2010.\n[…]\nJohannes Gutenberg"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Movable_type",
        "situacao": "ok",
        "texto": "Movable type (US English; moveable type in British English) is the system and technology of printing and typography that uses movable components to reproduce the elements of a document (usually individual alphanumeric characters or punctuation marks) usually on the medium of paper.\n[…]\nThe world's first movable type printing technology for paper books was made of porcelain materials and was invented around 1040 AD in China during the Northern Song dynasty by the inventor Bi Sheng (990–1051). The earliest printed paper money with movable metal type to print the identifying code of the money was made in 1161 during the Song dynasty. In 1193, a book in the Song dynasty documented how to use the copper movable type.\n[…]\nBi Sheng (畢昇) (990–1051) developed the first known movable-type system for printing in China around 1040 AD during the Northern Song dynasty, using ceramic materials. As described by the Chinese scholar Shen Kuo (沈括) (1031–1095):\n[…]\nBi Sheng (990–1051) of the Song dynasty also pioneered the use of wooden movable type around 1040 AD, as described by the Chinese scholar Shen Kuo (1031–1095). However, this technology was abandoned in favour of clay movable types due to the presence of wood grains and the unevenness of the wooden type after being soaked in ink.\n[…]\nAccording to a tradition in Feltre and Lombardy, an Italian engraver named Panfilo Castaldi (1398–1490) introduced movable type to Europe after having seen Chinese books brought by Marco Polo. Inspired by the Chinese prints, Castaldi started using wooden movable type and he printed several broadsides at Venice in 1426. The tradition tracing movable type to Castaldi also states that Johannes Gutenberg's wife saw Chinese printing blocks in Venice, which inspired their own invention of printing."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bi_Sheng",
        "situacao": "ok",
        "texto": "Bi Shēng (990-1051 dC) foi um artesão e inventor chinês que ficou conhecido pela primeira tecnologia de tipo móvel do mundo, uma das Quatro Grandes Invenções da China Antiga.\n[…]\nO sistema de Bi Sheng foi feito de porcelana chinesa e foi inventado entre 1041 e 1048 durante a dinastia Sung medieval.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Draisiana",
      "descricao": "Veículo de duas rodas movido com os pés no chão, criado pelo alemão Karl Drais em 1817, ancestral da bicicleta."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "A draisiana, ancestral da bicicleta criada na Alemanha em 1817, era empurrada com os pés no chão porque não tinha que peça?",
    "resposta": "Pedais",
    "fonte": [
      "https://en.wikipedia.org/wiki/Dandy_horse",
      "https://en.wikipedia.org/wiki/Karl_Drais"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Dandy_horse",
        "situacao": "ok",
        "texto": "The dandy horse, an English nickname for what was first called a Laufmaschine ('running machine' in German), then a vélocipède or draisienne (in French and then English), and then a pedestrian curricle or hobby-horse, or swiftwalker, is a human-powered vehicle that, as the first two-wheeled vehicle, is regarded as the first bicycle. The dandy horse is powered by the rider's feet on the ground inst\n[…]\nIt was invented by Karl Drais, who called it a Laufmaschine German: [ˈlaʊfmaˌʃiːnə] 'running machine' in 1817, and patented by him in France in February 1818 as a vélocipède. It is also known as a Draisine (German: [dʁaɪˈziːnə]  in German, a term used in English only for light auxiliary railcars regardless of their form of propulsion), and as a draisienne (French: [drɛzjɛn] in French and English.\n[…]\nThe dandy-horse was a two-wheeled vehicle, with both wheels in line, propelled by the rider pushing along the ground with the feet as in regular walking or running. The front wheel and handlebar assembly was hinged to allow steering. The dandy horse was capable of more than doubling the average walking speed, to around 10 mph (16 km/h) on level ground.\n[…]\nIn the 1860s in France, the vélocipède bicycle was created by attaching rotary cranks and pedals to the front-wheel hub of a dandy-horse.\n[…]\nThe dandy horse has been adapted as a starter bicycle for children, and is called a balance bike, or a run bike.\n[…]\nH.E.Lessing: How sophisticated was the draisine? The Boneshaker #159 (2002)\n[…]\nC.Reynaud: L'Ère de la Draisienne en France 1818-1870, Éditions Musée Vélo-Moto, Domazan 2015"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Karl_Drais",
        "situacao": "ok",
        "texto": "Karl Freiherr von Drais (full name: Karl Friedrich Christian Ludwig Freiherr Drais von Sauerbronn; 29 April 1785 – 10 December 1851) was a noble German forest official and significant inventor in the Biedermeier period. He is regarded as \"the father\" and as the inventor of the bicycle.\n[…]\nDrais was a prolific inventor, who invented the Laufmaschine (\"running machine\"), also later called the velocipede, draisine (English) or draisienne (French), also nicknamed the hobby horse or dandy horse. This was his most popular and widely recognized invention. It incorporated the two-wheeler principle that is basic to the bicycle and motorcycle and was the beginning of mechanized personal transport. This was the earliest form of a bicycle, without pedals.\n[…]\nIn 1842, he developed a foot-driven human powered railway vehicle whose name \"draisine\" is used even today for railway handcars.\n[…]\nIn 1839, after surviving a murderous attack in 1838, he moved to the village of Waldkatzenbach in the hills of Odenwald and remained there until 1845. During this period, he invented the railway handcar (later known as the draisine). Finally, he moved back to his place of birth, Karlsruhe. In 1849, and still a fervent radical, Drais gave up his title of Baron and dropped the \"von\" from his name. Subsequently, after the revolution collapsed, he was in a very bad position.\n[…]\nIn 2017, Germany issued a commemorative postage stamp (0.70 Euro) in remembrance of the 200th anniversary of Karl Drais's first run of his \"running machine\" on 12 June 1817. The stamp shows the machine plus as its shadow, a bicycle."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Draisiana",
        "situacao": "ok",
        "texto": "Draisiana, ou dresina, é um veículo de duas rodas inventado em 1817, precursor da bicicleta, e que foi chamado de draisiana em homenagem ao seu inventor, o barão Karl Drais.\n[…]\nA draisiana é a primeira definição viável do uso prático de uma bicicleta. Foi o primeiro veículo desse tipo que obteve êxito comercial em sua época, por ser dirigível e com grande interação homem-máquina. Na draisiana a tração era fornecida pelos próprios pés, por meio de empurrões do condutor contra o solo, semelhantemente ao que se faz num patinete, mas com a alternância das pernas. Não tardou que fosse desenvolvido um modelo com pedal na roda dianteira, que se denominou por velocípede.\n[…]\nEm 1817, o barão alemão Karl Christian Ludwig Drais von Sauerbronn inventou o primeiro veículo de duas rodas em linha, a que chamou Laufmaschine (\"máquina andante\"), precursora da bicicleta e da motocicleta. A laufmaschine consistia em um marco de madeira ao qual se ligavam duas rodas, alinhadas no sentido do giro, um banco e uma alavanca que fazia as vezes de guidão.\n[…]\nPara mover-se, o condutor, sentado sobre o banco, com as pernas pendentes uma de cada lado, empurrava alternadamente com os pés no chão, num movimento semelhante a um patinador. Com esse impulso, o veículo adquiria uma velocidade considerável. Os braços apoiavam-se em apoios laterais enquanto as mãos operavam a alavanca que permitia direcionar a roda dianteira de acordo com a necessidade de fazer curvas.\n[…]\nH.E.Lessing: How sophisticated was the draisine? The Boneshaker #159 (2002)\n[…]\nC.Reynaud: L'Ère de la Draisienne en France 1818-1870, Éditions Musée Vélo-Moto, Domazan 2015",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Escala Celsius",
      "descricao": "Escala de temperatura proposta pelo astrônomo sueco Anders Celsius em 1742, baseada no congelamento e na fervura da água."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Na escala de temperatura proposta por Anders Celsius em 1742, o que acontecia com a água a zero grau?",
    "resposta": "Ela fervia",
    "fonte": [
      "https://en.wikipedia.org/wiki/Celsius",
      "https://en.wikipedia.org/wiki/Anders_Celsius"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Celsius",
        "situacao": "ok",
        "texto": "The degree Celsius is the unit of temperature on the Celsius temperature scale (originally known as the centigrade scale in English), one of two temperature scales used in the International System of Units (SI), the other being the closely related Kelvin scale. The degree Celsius (symbol: °C) can refer to a specific point on the Celsius temperature scale or to a difference or range between two tem\n[…]\nIt is named after the Swedish astronomer Anders Celsius (1701–1744), who proposed the first version of it in 1742. The unit was called centigrade in several languages (from the Latin centum, which means 100, and gradus, which means steps) for many years. In 1948, the International Committee for Weights and Measures renamed it to honor Celsius and also to remove confusion with the term for one hundredth of a gradian in some languages.\n[…]\nIn 1742, Swedish astronomer Anders Celsius (1701–1744) created a temperature scale that was the reverse of the scale now known as \"Celsius\": 0 represented the boiling point of water, while 100 represented the freezing point of water. In his paper Observations of two persistent degrees on a thermometer, he recounted his experiments showing that the melting point of ice is essentially unaffected by pressure.\n[…]\nThis boiling-point difference of 16.1 millikelvins between the Celsius temperature scale's original definition and the previous one (based on absolute zero and the triple point) has little practical meaning in common daily applications because water's boiling point is very sensitive to variations in barometric pressure. For example, an altitude change of only 28 cm (11 in) causes the boiling point to change by one millikelvin.\n[…]\nHistory of the Celsius temperature scale—The Uppsala Astronomical Observatory\n[…]\nThe International System of Units (SI) brochure, section 2.1.1.5, \"Unit of thermodynamic temperature\"—International Bureau of Weights and Measures"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Anders_Celsius",
        "situacao": "ok",
        "texto": "Anders Celsius (Swedish: [ˈânːdɛʂ ˈsɛ̌lːsɪɵs]; 27 November 1701 – 25 April 1744) was a Swedish astronomer, physicist and mathematician. He was professor of astronomy at Uppsala University from 1730 to 1744, but traveled from 1732 to 1735 visiting notable observatories in Germany, Italy and France. He founded the Uppsala Astronomical Observatory in 1741, and in 1742 proposed (an inverted form of) t\n[…]\nAs the son of an astronomy professor, Nils Celsius, nephew of botanist Olof Celsius and the grandson of the mathematician Magnus Celsius and the astronomer Anders Spole, Celsius chose a career in science. He was a talented mathematician from an early age. Anders Celsius studied at Uppsala University, where his father was a teacher, and in 1730 he, too, became a professor of astronomy there. Noted Swedish dramatic poet and actor Johan Celsius was also his uncle.\n[…]\nHe made observations of eclipses and various astronomical objects and published catalogues of carefully determined magnitudes for some 300 stars using his own photometric system (mean error=0.4 mag). In 1742 he proposed the Celsius temperature scale in a paper to the Royal Society of Sciences in Uppsala, the oldest Swedish scientific society, founded in 1710. His thermometer was calibrated with a value of 0 for the boiling point of water and 100 for the freezing point.\n[…]\nIn 1725 he became secretary of the Royal Society of Sciences in Uppsala, and served at this post until his death from tuberculosis in 1744. He supported the formation of the Royal Swedish Academy of Sciences in Stockholm in 1739 by Linnaeus and five others, and was elected a member at the first meeting of this academy. It was in fact Celsius who proposed the new academy's name.\n[…]\nCelsius family\n[…]\nJohan Celsius - Historical records and family trees at MyHeritage"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Grau_Celsius",
        "situacao": "ok",
        "texto": "A escala Celsius (unidade °C), também conhecida como a escala centígrada, é uma escala termométrica do sistema métrico usada na maioria dos países do mundo. Teve origem a partir do modelo proposto pelo astrônomo sueco Anders Celsius (1701-1744).\n[…]\nEnquanto os valores de congelamento e evaporação da água estão aproximadamente corretos, a definição original não é apropriada como um padrão formal pois ela depende da definição de pressão atmosférica padrão, que por sua vez depende da própria definição de temperatura. A definição oficial atual de grau Celsius define 0,01 °C como o ponto triplo da água, e 1 grau Celsius como sendo 1/273,16 da diferença de temperatura entre o ponto triplo da água e o zero absoluto.\n[…]\nEsta definição garante que 1 grau Celsius apresente a mesma variação de temperatura que 1 kelvin.\n[…]\nNeste trabalho, Celsius considerou que uma substância pura muda de estado físico à temperatura constante e baseado nisso, propôs uma nova escala termométrica, a escala de graus centígrados, na qual definiu a temperatura 0 como sendo a temperatura medida no termômetro equivalente à temperatura em que a água entra em ebulição e 100 sendo a temperatura equivalente ao ponto em que o gelo derrete.\n[…]\nAnteriormente ao modelo proposto por Celsius, já existiam outras escalas baseadas nos estados físicos da água, como a escala Réaumur. Mas devido à sua simplicidade, a escala centígrada tornou-se mundialmente conhecida, inclusive servindo de base para a criação de outros modelos, como é o caso da escala Kelvin.\n[…]\nDeve ser notado que, de acordo com esta regra, o símbolo \"°C\" para o grau Celsius deve ser precedido por um espaço quando expressar uma temperatura na escala Celsius, conforme representado abaixo:\n[…]\nAnders Celsius\n[…]\nZero absoluto",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Samuel Morse",
      "descricao": "Inventor americano (1791–1872), criador do código Morse e um dos desenvolvedores do telégrafo elétrico."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Antes de se dedicar ao telégrafo e ao código que leva seu nome, o americano Samuel Morse era conhecido em que profissão?",
    "resposta": "Pintor",
    "fonte": [
      "https://en.wikipedia.org/wiki/Samuel_Morse"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Samuel_Morse",
        "situacao": "ok",
        "texto": "Samuel Finley Breese Morse (April 27, 1791 – April 2, 1872) was an American inventor and painter. After establishing his reputation as a portrait painter, Morse, in his middle age, contributed to the invention of a single-wire telegraph system based on European telegraphs. He was a co-developer and the namesake of Morse code in 1837 and helped to develop the commercial use of telegraphy.\n[…]\nMorse received a patent for the telegraph in 1847, at the old Beylerbeyi Palace (the present Beylerbeyi Palace was built in 1861–1865 on the same location) in Istanbul, which was issued by Sultan Abdülmecid, who personally tested the new invention. He was elected an Associate Fellow of the American Academy of Arts and Sciences in 1849. The original patent went to the Breese side of the family after the death of Samuel Morse.\n[…]\nLind purchased the Hacienda from his sister when she became a widow. Morse, who often spent his winters at the Hacienda with his daughter and son-in-law, set a two-mile telegraph line connecting his son-in-law's Hacienda to their house in Arroyo. The line was inaugurated on March 1, 1859, in a ceremony flanked by the Spanish and American flags. The first words transmitted by Samuel Morse that day in Puerto Rico were:\n[…]\nBellis, Mary (2009a), Samuel Morse and the Invention of the Telegraph, retrieved April 27, 2020\n[…]\nMcEwen, Neal (1997), Morse Code or Vail Code? Did Samuel F. B. Morse Invent the Code as We Know it Today?, The Telegraph Office, retrieved October 17, 2009\n[…]\nMorse, Samuel F. B. (June 20, 1840), U.S. Patent No. 1647, Telegraph Signs, archived from the original on December 5, 2021, retrieved April 7, 2021\n[…]\nMabee, Carleton, The American Leonardo: A Life of Samuel F. B. Morse, (1943, reissued 1969); William Kloss, Samuel F. B. Morse (1988); Paul J. Staiti, Samuel F. B. Morse (1989) (Knopf, 1944) (Pulitzer Prize winner for biography for 1944)."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Samuel_Morse",
        "situacao": "ok",
        "texto": "Samuel Finley Breese Morse (27 de abril de 1791 – 2 de abril de 1872) foi um inventor e pintor norte-americano. Após estabelecer sua reputação como retratista, Morse, em sua meia-idade, contribuiu para a invenção de um sistema de telégrafo de fio único baseado em telégrafos europeus. Foi um dos desenvolvedores do Código Morse em 1837 e ajudou a desenvolver o uso comercial da telegrafia.\n[…]\nEle deixou a Inglaterra em 21 de agosto de 1815, para retornar aos Estados Unidos e iniciar sua carreira em tempo integral como pintor. A década de 1815-1825 marcou um crescimento significativo no trabalho de Morse, à medida que ele buscava capturar a essência da cultura e da vida americana. Ele pintou o ex-presidente federalista John Adams (1816). Os federalistas e anti-federalistas entraram em conflito sobre o Dartmouth College.\n[…]\nCom o tempo, o Código Morse que ele desenvolveu se tornaria a principal linguagem da telegrafia no mundo. Ainda é o padrão para transmissão rítmica de dados. Enquanto isso, William Cooke e o professor Charles Wheatstone haviam tomado conhecimento do telégrafo eletromagnético de Wilhelm Weber e Carl Gauss em 1833. Eles haviam chegado ao estágio de lançar um telégrafo comercial antes de Morse, apesar de terem começado mais tarde.\n[…]\nMorse recebeu uma patente para o telégrafo em 1847, no antigo Palácio do Beilerbei (o atual Palácio do Beilerbei foi construído em 1861-1865 no mesmo local) em Istambul, que foi emitida pelo Abdul Majide I, que pessoalmente testou a nova invenção. Ele foi eleito um membro associado da Academia Americana de Artes e Ciências em 1849. A patente original foi para o lado Breese da família após a morte de Samuel Morse.\n[…]\nMorse, Samuel F. B. (20 junho 1840), U.S. Patent No. 1647, Telegraph Signs, consultado em 7 abril 2021, cópia arquivada em 5 dezembro 2021\n[…]\nObras de ou sobre Samuel Morse no Internet Archive",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Wright Flyer",
      "descricao": "Avião dos irmãos Wright que voou em Kitty Hawk, nos Estados Unidos, em 17 de dezembro de 1903."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Em 17 de dezembro de 1903, o primeiro voo do Flyer, avião dos irmãos Wright, durou cerca de quantos segundos?",
    "resposta": "Doze segundos",
    "distratores": [
      "Três segundos",
      "Quarenta segundos",
      "Noventa segundos"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Wright_Flyer"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Wright_Flyer",
        "situacao": "ok",
        "texto": "The Wright Flyer (also known as the Kitty Hawk, Flyer I or the 1903 Flyer) made the first sustained flight by a manned heavier-than-air powered and controlled aircraft on December 17, 1903. Invented and flown by brothers Orville and Wilbur Wright, it marked the beginning of the pioneer era of aviation.\n[…]\nThe Wright Flyer was put on display in the Arts and Industries Building of the Smithsonian on December 17, 1948, 45 years to the day after the aircraft's only successful flights. (Orville did not live to see this, as he had died that January.) In 1976, it was moved to the Milestones of Flight Gallery of the new National Air and Space Museum.\n[…]\nAs the 100th anniversary on December 17, 2003, approached, the U.S. Centennial of Flight Commission along with other organizations opened bids for companies to recreate the original flight. The Wright Experience, led by Ken Hyde, won the bid and painstakingly recreated reproductions of the original Wright Flyer, plus many of the prototype gliders and kites and subsequent Wright aircraft.\n[…]\nThe Los Angeles Section of the American Institute of Aeronautics and Astronautics (AIAA) built a full-scale replica of the 1903 Wright Flyer between 1979 and 1993 using plans from the original Wright Flyer published by the Smithsonian Institution in 1950. Constructed in advance of the 100th anniversary of the Wright Brothers' first flight, the replica was intended for wind tunnel testing to provide a historically accurate aerodynamic database of the Wright Flyer design.\n[…]\nWright Model B\n[…]\nWrightflyer.org Archived February 27, 2021, at the Wayback Machine\n[…]\nWrightexperience.com\n[…]\n\"Under The Hood of A Wright Flyer\" Air & Space Magazine\n[…]\n1942 Smithsonian Annual Report acknowledging primacy of the Wright Flyer\n[…]\nHistory of the Wright Flyer Wright State University Library"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Wright_Flyer",
        "situacao": "ok",
        "texto": "O Wright Flyer (também frequentemente referenciado como Flyer I ou 1903 Flyer) foi a primeira aeronave construída pelos Irmãos Wright. Eles voaram com ele por quatro vezes em 17 de Dezembro de 1903, próximo à Kill Devil Hills, Carolina do Norte, cerca de 6,4 km ao Sul de Kitty Hawk, Estados Unidos. Hoje a aeronave está em exibição no Museu do Ar e Espaço em Washington, D.C.\n[…]\nEm rodízio, os irmãos Wright fizeram quatro voos curtos em baixa altitude naquele dia. A rota dos voos foi essencialmente reta; curvas não foram tentadas. Cada voo terminou num \"pouso\" em forma de queda não intencional. O último voo, conduzido por Wilbur percorreu 260 m em 59 segundos, bem mais que os três primeiros de 36, 53 e 61 m respectivamente. O \"pouso\" do último voo quebrou o profundor frontal, que os irmãos Wright esperavam consertar para um possível voo de 6 km até a vila de Kitty Hawk.\n[…]\nEssa mudança de atitude da Smithsonian também foi alvo de controvérsia – o Flyer foi vendido à Smithsonian sob várias condições contratuais, numa das quais se lê:\"Nem a Smithsonian Institution ou seus sucessores nem qualquer museu ou outra agência, birô ou instalação, administrada pelos Estados Unidos da América, pela Smithsonian Institution ou seus sucessores, podem publicar ou permitir ser exibida uma declaração ou identificação ligada à ou a respeito de qualquer modelo de aeronave ou desenho de data anterior ao da aeronave Wright de 1903, afirmando que tal aeronave era capaz de carregar um homem por seus próprios meios em um voo controlado.\"Os autores: O'Dwyer e Randolph afirmam que essa cláusula fornece um forte incentivo para que a Smithsonian se abstenha de reconhecer qualquer voo de aeronave tripulada, motorizada e controlada de antes do voo dos Wright de 17 de dezembro de 1903.\n[…]\nIrmãos Wright\n[…]\nWright Flyer II\n[…]\nWright Flyer III\n[…]\nUnder The Hood of A Wright Flyer  Air & Space Magazine",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Antonie van Leeuwenhoek",
      "descricao": "Comerciante e cientista holandês do século dezessete, pioneiro da microbiologia com microscópios que ele mesmo fabricava."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Os microscópios com que o holandês Antonie van Leeuwenhoek observou bactérias, no século dezessete, tinham quantas lentes?",
    "resposta": "Uma só",
    "fonte": [
      "https://en.wikipedia.org/wiki/Antonie_van_Leeuwenhoek"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Antonie_van_Leeuwenhoek",
        "situacao": "ok",
        "texto": "Antonie Philips van Leeuwenhoek ( AHN-tə-nee vahn LAY-vən-hook, -⁠huuk; Dutch: [ˈɑntoːni vɑn ˈleːu.ə(n)ˌɦuk] ; 24 October 1632 – 26 August 1723) was a Dutch microbiologist and microscopist in the Golden Age of Dutch art, science and technology. A largely self-taught man in science, he is commonly known as \"the Father of Microbiology\", and one of the first microscopists and microbiologists.\n[…]\nHe was also the first to document microscopic observations of muscle fibers, bacteria, spermatozoa, red blood cells, and crystals in gouty tophi, and was among the first to see blood flow in capillaries. Although Van Leeuwenhoek did not write any books, he described his discoveries in chaotic letters to the Royal Society, which published many of his letters in their Philosophical Transactions.\n[…]\nVan Leeuwenhoek was one of the first people to observe cells, much like Robert Hooke. He also corresponded with Antonio Magliabechi.\n[…]\nVan Leeuwenhoek has been recognized as the first person to use a histological stain to color specimens observed under the microscope using saffron. He used this technique only once.\n[…]\nIn 1981, the British microscopist Brian J. Ford found that Van Leeuwenhoek's original specimens had survived in the collections of the Royal Society of London. They were found to be of high quality, and all were well preserved. Ford carried out observations with a range of single-lens microscopes, adding to our knowledge of Van Leeuwenhoek's work.\n[…]\nThe Leeuwenhoek Medal, Leeuwenhoek Lecture, Leeuwenhoek crater, Leeuwenhoeckia, Levenhookia (a genus in the family Stylidiaceae), Leeuwenhoekiella (an aerobic bacterial genus), and the scientific publication Antonie van Leeuwenhoek: International Journal of General and Molecular Microbiology are named after him.\n[…]\nMicroscopic scale\n[…]\nPayne, Alma Smith (1970). The Cleere Observer: A biography of Antoni van Leeuwenhoek. London: Macmillan."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Anton_van_Leeuwenhoek",
        "situacao": "ok",
        "texto": "Anton van Leeuwenhoek (Delft, 24 de outubro de 1632 – Delft, 26 de agosto de 1723) foi um comerciante de tecidos, cientista e construtor de microscópios holandês.\n[…]\nAnton van Leeuwenhoek é conhecido pelas suas contribuições para o melhoramento do microscópio, além de ter contribuído com as suas observações para a biologia celular (descreveu a estrutura celular dos vegetais, chamando as células de \"glóbulos\").\n[…]\nUtilizando um microscópio feito por si mesmo (possuía a maior coleção de lentes do mundo, cerca de 250 microscópios), foi o primeiro a observar e descrever fibras musculares, bactérias, protozoários e o fluxo de sangue nos capilares sanguíneos de peixes.\n[…]\nO microscópio utilizado por Leeuwenhoek para as suas descobertas era constituído por uma lente biconvexa que tinha a capacidade de aumentar a imagem cerca de 1 000 vezes.\n[…]\nOs microscópios de lente única de Anton van Leeuwenhoek eram feitos com armações de prata ou cobre, relativamente pequenos, com cerca de 5 cm de comprimento. Eles eram utilizados colocando-se a lente bem perto do olho, enquanto se olhava em direção ao sol. O outro lado do microscópio possuía um alfinete, onde era fixado uma amostra, para ser ampliada e analisada.\n[…]\nAnton van Leeuwenhoek usou amostras para estimar o número de micro-organismos em unidade de água. Esse trabalho estabeleceu firmemente seu lugar na história como um dos primeiros e mais importantes exploradores do mundo microscópico. Van Leeuwenhoek foi uma das primeiras pessoas a observar células, assim como Robert Hooke.\n[…]\nBactérias (por exemplo, grandes Selenomonas na boca humana), em 1683.\n[…]\nMedalha Leeuwenhoek\n[…]\nBiografia de Antoni van Leeuwenhoek",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Relógio de sol",
      "descricao": "Instrumento com um gnômon que projeta sombra sobre um mostrador marcado com horas."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Qual destes instrumentos de medir o tempo é o mais antigo?",
    "resposta": "Relógio de sol",
    "distratores": [
      "Ampulheta",
      "Relógio de pêndulo",
      "Relógio de bolso"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Sundial",
      "https://en.wikipedia.org/wiki/Hourglass"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sundial",
        "situacao": "ok",
        "texto": "A sundial is a horological device that tells the time of day (referred to as civil time in modern usage) when direct sunlight shines by the apparent position of the Sun in the sky. In the narrowest sense of the word, it consists of a flat plate (the dial) and a gnomon, which casts a shadow onto the dial. As the Sun appears to move through the sky, the shadow aligns with different hour-lines, which\n[…]\nis defined positive in the clockwise sense w.r.t. the upper vertical hour angle; and that its conversion to the equivalent solar hour requires careful consideration of which quadrant of the sundial that it belongs in.\n[…]\nThe intersection of the two threads' shadows gives the local solar time.\n[…]\nA horizontal line aligned on a meridian with a gnomon facing the noon-sun is termed a meridian line and does not indicate the time, but instead the day of the year. Historically, they were used to accurately determine the length of the solar year. Examples are the Bianchini meridian line in Santa Maria degli Angeli e dei Martiri in Rome, and the Cassini line in San Petronio Basilica at Bologna.\n[…]\nIf a horizontal-plate sundial is made for the latitude in which it is being used, and if it is mounted with its plate horizontal and its gnomon pointing to the celestial pole that is above the horizon, then it shows the correct time in apparent solar time.\n[…]\nConversely, if the directions of the cardinal points are initially unknown, but the sundial is aligned so it shows the correct apparent solar time as calculated from the reading of a clock, its gnomon shows the direction of True north or south, allowing the sundial to be used as a compass. The sundial can be placed on a horizontal surface, and rotated about a vertical axis until it shows the correct time.\n[…]\nThis allows the directions of the cardinal points and the apparent solar time to be determined simultaneously, without requiring a clock."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Hourglass",
        "situacao": "ok",
        "texto": "An hourglass (or sandglass, sand timer, or sand clock) is a device used to measure the passage of time. It comprises two glass bulbs connected vertically by a narrow neck that allows a regulated flow of a substance (historically sand) from the upper bulb to the lower one due to gravity. Typically, the upper and lower bulbs are symmetric.\n[…]\nWhile hourglasses were insufficiently accurate to be compared against solar noon for the determination of a ship's longitude (as an error of just four minutes would correspond to one degree of longitude), they were sufficiently accurate to be used in conjunction with a chip log to enable the measurement of a ship's speed in knots.\n[…]\nHourglasses were an early dependable and accurate measure of time. The rate of flow of the sand is independent of the depth in the upper reservoir, and the instrument will not freeze in cold weather. From the 15th century onwards, hourglasses were being used in a range of applications at sea, in the church, in industry, and in cookery.\n[…]\nGuye, Samuel; Henri, Michel; Dolan, D.; Mitchell, S. W. (1970). Time and space: Measuring Instruments from the Fifteenth to the Nineteenth century. New York: Praeger Publishers. Bibcode:1971tsmi.book.....G."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rel%C3%B3gio_de_sol",
        "situacao": "ok",
        "texto": "Um relógio de sol é um instrumento de horologia que indica as horas do dia pela posição aparente [en] do Sol no céu, quando recebe luz solar direta. No uso civil, as horas são expressas em hora civil [en]. Em sentido estrito, o instrumento consiste em uma placa plana, o mostrador, e um gnômon, que projeta uma sombra sobre ela. À medida que o Sol parece se deslocar pelo céu, a sombra passa pelas li\n[…]\nA órbita da Terra não é perfeitamente circular, e seu eixo de rotação não é perpendicular ao plano orbital. Por isso, a hora solar indicada pelo instrumento difere da hora de um relógio comum em pequenas quantidades que mudam ao longo do ano. Essa correção, que pode chegar a 16 minutos e 33 segundos, é dada pela equação do tempo. Um relógio de sol mais elaborado, com estilo ou linhas horárias curvas, pode incorporá-la.\n[…]\nComo 24 horas de tempo solar correspondem a uma volta de 360° do ângulo horário, as linhas de um relógio equatorial ficam separadas por 15°, pois 360 ÷ 24 = 15.\n[…]\nOs relógios solares mais simples indicam apenas o instante exato do meio-dia. Em séculos anteriores, eram usados para acertar relógios mecânicos, que podiam adiantar ou atrasar bastante em um único dia. Nas versões mais simples, uma sombra passa por uma marca. Um almanaque permite converter a hora solar local e a data em hora civil, usada para acertar o relógio. Outras marcas incorporam uma figura em oito baseada na equação do tempo e dispensam o almanaque.\n[…]\nEm algumas casas do período colonial dos Estados Unidos, havia uma marca do meio-dia entalhada no piso ou no parapeito de uma janela. Ela fornecia uma referência simples e precisa para acertar os relógios da casa. O instrumento típico tinha uma lente sobre uma placa com um analema, uma figura em oito que relacionava a equação do tempo à declinação solar. Quando a borda da imagem do Sol tocava a parte da figura correspondente ao mês, era meio-dia.",
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
