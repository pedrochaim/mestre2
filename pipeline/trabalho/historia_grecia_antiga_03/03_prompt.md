Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Grécia Antiga** (tema **História**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Ordem dórica",
      "descricao": "A mais antiga e sóbria das ordens clássicas da arquitetura grega, de coluna sem base e capitel liso, usada no Partenon."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Das três ordens clássicas da arquitetura grega, qual tem o capitel mais simples, sem volutas nem folhas de acanto?",
    "resposta": "Ordem dórica",
    "fonte": [
      "https://en.wikipedia.org/wiki/Doric_order",
      "https://pt.wikipedia.org/wiki/Ordem_dórica"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Doric_order",
        "situacao": "ok",
        "texto": "The Doric order (Latin: Ordo Doricus) is one of the three orders of ancient Greek and later Roman architecture; the other two canonical orders were the Ionic and the Corinthian. The Doric is most easily recognized by the simple circular capitals at the bottom of the columns. Originating in the western Doric region of Greece, it is the earliest and, in its essence, the simplest of the orders, thoug\n[…]\nThe relatively uncommon Roman and Renaissance Doric retained these, and often introduced thin layers of moulding or further ornament, as well as often using plain columns. More often, they used versions of the Tuscan order, elaborated for nationalistic reasons by Italian Renaissance writers, which is in effect a simplified Doric, with unfluted columns and a simpler entablature with no triglyphs or guttae.\n[…]\nThe Parthenon is in the Doric order, and in antiquity and subsequently has been recognized as the most perfect example of the evolved order. It was most popular in the Archaic Period (750–480 BC) in mainland Greece, and also found in Magna Graecia (southern Italy), as in the three temples at Paestum. These are in Archaic Doric, where the capitals spread wide from the column compared to later Classical forms, as exemplified in the Parthenon.\n[…]\nA classic statement of the Greek Doric order is the Temple of Hephaestus in Athens, built about 447 BC. The contemporary Parthenon, the largest temple in classical Athens, represents the peak of perfection of Doric order architecture, although the sculptural enrichment is more familiar in the Ionic order: the Greeks were never as doctrinaire in the use of the Classical vocabulary as Renaissance theorists or Neoclassical architects.\n[…]\nAncient Greek, Classical\n[…]\nAlexander Tzonis, Classical Architecture: The Poetics of Order (Alexander Tzonis website)\n[…]\nMedia related to Doric columns at Wikimedia Commons\n[…]\nClassical orders and elements"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ordem_dórica",
        "situacao": "ok",
        "texto": "A ordem dórica é uma das ordens arquitetônicas clássicas, sendo a mais rústica das três, dado que, de acordo com Vitrúvio, é quase certo que esta ordem se originou de um tipo primitivo de construção em madeira. Entre as suas características é possível citar as colunas desprovidas de base, assentando no último degrau ou estilóbato; capitel despojado, arquitrave lisa, friso com métopas e tríglifos, \n[…]\nA coluna de estilo dórico surgiu nas costas do Peloponeso, ao sul, no início do século VII a.c. A ordem dórica, a mais antiga das existentes na arte grega, apresenta formas geométricas, regras rígidas, uma elegância formal e um equilíbrio de proporções. É principalmente empregada no exterior de templos dedicados a divindades masculinas e é a mais simples das três ordens gregas definindo um edifício em geral baixo e de caráter sólido.\n[…]\nA coluna não tem base, tem entre quatro e oito módulos de altura, o fuste é raramente monolítico e apresenta vinte estrias ou sulcos verticais denominados de caneluras. O capitel é formado pelo equino, ou coxim, que se assemelha a uma almofada e por um elemento quadrangular, o ábaco. O friso é intercalado por módulos compostos de três estrias verticais, os tríglifos, com dois painéis consecutivos lisos ou decorados, as métopas.\n[…]\nA versão romana transmite, em geral, maior leveza através das suas dimensões mais reduzidas.\n[…]\nOrdem jônica\n[…]\nOrdem coríntia"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Ordem jônica",
      "descricao": "Ordem clássica da arquitetura grega surgida na Jônia, reconhecível pelo capitel com duas volutas em espiral."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "A ordem jônica, de capitel com volutas, deve seu nome à Jônia, região grega antiga no litoral de que país atual?",
    "resposta": "Turquia",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ionic_order",
      "https://en.wikipedia.org/wiki/Ionia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ionic_order",
        "situacao": "ok",
        "texto": "The Ionic order (Latin: Ordo Ionicus) is one of the three canonic orders of classical architecture, the other two being the Doric and the Corinthian. There are two other orders, developed by the Romans: the Tuscan (a plainer Doric), and the rich variant of Corinthian called the Composite order. Of the three classical canonic orders, the Corinthian order has the narrowest columns, followed by the I\n[…]\nIt stood for only a decade before it was leveled by an earthquake. A longer-lasting 6th century Ionic temple was the Temple of Artemis at Ephesus, one of the Seven Wonders of the Ancient World. The Parthenon, although it conforms mainly to the Doric order, also has some Ionic elements. A more purely Ionic mode to be seen on the Athenian Acropolis is exemplified in the Erechtheum.\n[…]\nFollowing the conquests of Alexander the Great in the east, a few examples of the Ionic order can be found as far as Pakistan with the Jandial temple near Taxila. Several examples of capitals displaying Ionic influences can be seen as far away as Patna, India, especially with the Pataliputra capital, dated to the 3rd century BC, and seemingly derived from the design of the Ionic anta capital, or the Sarnath capital, which has been described as \"Perso-Ionic\", or \"quasi-Ionic\".\n[…]\nRenaissance architectural theorists took his hints to interpret the Ionic order as matronly in comparison to the Doric order, though not as wholly feminine as the Corinthian order. The Ionic is a natural order for post-Renaissance libraries and courts of justice, learned and civilized.\n[…]\nAeolic order\n[…]\nIonic order exemplified in architecture of Buffalo, New York\n[…]\nIonic order, after Vitruvius Archived from the original on August 26, 2005\n[…]\n\"Understanding buildings\" website: Ionic order\n[…]\nDenis Andrey and Mirko Galli, \"Geometric methods of the 1500s for laying out the ionic volute\"\n[…]\nEarly Development and Formal Definition of the Ionic Capital"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Ionia",
        "situacao": "ok",
        "texto": "Ionia ( eye-OH-nee-ə; Greek: Ιωνία) was an ancient region encompassing the central part of the western coast of Anatolia. It consisted of the northernmost territories of the Ionian League of Greek settlements. Never a unified state, it was named after the Ionians who had settled in the region before the archaic period.\n[…]\nPhocaea was founded by a group of Phocians from near Delphi, led by Philogenes and Damon of Athens and then received Deoetes, Periclus and Abartus, descendants of Codrus, as their kings in order to gain recognition as Ionians.\n[…]\nThe twelve Ionian cities formed a religious and cultural (as opposed to a political or military) confederacy, the Ionian League, of which participation in the Pan-Ionic festival was a distinguishing characteristic. This festival took place on the north slope of Mt. Mycale in a shrine called the Panionium. The foundation took place late in the Archaic period, but the exact date is unclear. This is also when stories of the Ionian migration are first attested.\n[…]\nIn the conflict that broke out between Alexander's successors after his death in 323 BC and throughout the Hellenistic Age that followed, Ionia was a contested territory, divided between the Antigonid, Seleucid, and Ptolemaic kingdoms. Cities were regularly forced to switch allegiance from one monarch to another, but they were also able to play the kings off against one another in order to get better terms for themselves."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ordem_j%C3%B4nica",
        "situacao": "ok",
        "texto": "A ordem jônica é uma das ordens arquitetônicas clássicas. Suas colunas possuem capitéis ornamentados com duas volutas, altura nove vezes maior que seu diâmetro, arquitrave ornamentada com frisos e base simples. Possui vinte e quatro linhas verticais.\n[…]\nO capitel acentua a analogia vegetal da coluna pela criação de um elemento novo entre o coxim e o ábaco de caráter fitomórfico. Este elemento dispõe de dois “rolos” consideravelmente projetados para os lados, as volutas. O friso passa a ter elemento único decorado em continuidade.\n[…]\nA ordem jónica percorreu uma lenta evolução desde a sua criação (séc. VI a.C.) até à sua constituição final no período clássico.\n[…]\nA ordem jónica é caracterizada pela existência de: uma base seguida ou não de um plinto ; tem igualmente um fuste delgado, na generalidade feito por uma só pedra, que possui mais caneluras, do que as existentes na ordem dórica; estas apresentam-se mais profundas e semicirculares, não possuem quaisquer arestas vivas e a sua ênfase mostra-se pouco notória; do mesmo modo apresenta um capitel muito característico com faces iguais duas a duas (normalmente são quatro volutas ou espirais unidas por linhas curvas); apresenta ainda uma arquitrave composta por três faixas progressivamente salientes e um friso contínuo e decorado.\n[…]\nTemos como exemplos de templos estritamente ligados com a ordem jónica: o Templo de Atena Níké, o Tesouro de Delfos e o Parténon.\n[…]\nA junção da ordem dórica e da ordem jónica originou o que designamos por propileus, ou seja, a entrada monumental dos antigos edifícios gregos\n[…]\nOrdem dórica\n[…]\nOrdem coríntia",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Sófocles",
      "descricao": "Dramaturgo ateniense do século cinco a.C., autor de tragédias como Édipo Rei e Antígona."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Dos grandes dramaturgos de Atenas, qual venceu mais vezes os concursos de teatro das Dionísias?",
    "resposta": "Sófocles",
    "distratores": [
      "Ésquilo",
      "Eurípides",
      "Aristófanes"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Sophocles"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sophocles",
        "situacao": "ok",
        "texto": "Sophocles (; Ancient Greek: Σοφοκλῆς, pronounced [so.pʰo.klɛ̂ːs], Sophoklễs; c. 497/496 – winter 406/405 BC) was an ancient Greek tragedian, one of three from whom at least two plays have survived in full. His first plays were written later than, or contemporary with, those of Aeschylus and earlier than, or contemporary with, those of Euripides.\n[…]\nSophocles wrote more than 120 plays, but only seven have survived in a complete form: Ajax, Antigone, Women of Trachis, Oedipus Rex, Electra, Philoctetes, and Oedipus at Colonus. For almost 50 years, Sophocles was the most celebrated playwright in the dramatic competitions of the city-state of Athens, which took place during the religious festivals of the Lenaea and the Dionysia. He competed in 30 competitions, won 24, and was never judged lower than second place.\n[…]\nSophocles is known for innovations in dramatic structure; deeper development of characters than earlier playwrights; and, if it was not due to Aeschylus, the addition of a third actor, which further reduced the role of the chorus, and increased opportunities for development and conflict. Aeschylus, who dominated Athenian playwriting during Sophocles's early career, adopted the third actor into his own work.\n[…]\nSophocles (crater), a crater on Mercury.\n[…]\nSophocles. Sophocles I: Oedipus the King, Oedipus at Colonus, Antigone. 2nd ed. Grene, David, and Lattimore, Richard, eds. Chicago: University of Chicago, 1991.\n[…]\nWorks by Sophocles in eBook form at Standard Ebooks\n[…]\nWorks by Sophocles at Project Gutenberg\n[…]\nWorks by Sophocles at Faded Page (Canada)\n[…]\nWorks by or about Sophocles at the Internet Archive\n[…]\nWorks by Sophocles at LibriVox (public domain audiobooks)\n[…]\nWorks by Sophocles at the Perseus Digital Library (Greek and English)\n[…]\nSORGLL: Sophocles, Electra 1126–1170; read by Rachel Kitzinger Archived 19 October 2017 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/S%C3%B3focles",
        "situacao": "ok",
        "texto": "Sófocles (em grego: Σοφοκλῆς, Sophoklês; 497 ou 496 a.C.- inverno de 406 ou 405 a.C ) foi um dramaturgo grego, um dos mais importantes escritores de tragédia ao lado de Ésquilo e Eurípedes, dentre aqueles cujo trabalho sobreviveu. Suas peças retratam personagens nobres e da realeza. Filho de um rico mercador, nasceu em Colono, perto de Atenas, na época do governo de Péricles, o apogeu da cultura h\n[…]\nSuas primeiras peças foram escritas depois que as de Ésquilo e antes que as de Eurípedes. De acordo com a Suda, uma enciclopédia do século X, Sófocles escreveu 123 peças durante sua vida, mas apenas sete sobreviveram em uma forma completa. Por quase 50 anos, Sófocles foi o mais celebrado dos dramaturgos nos concursos dramáticos da cidade-estado de Atenas, que aconteciam durante as festas religiosas Leneana e Dionísia.\n[…]\nO primeiro triunfo artístico de Sófocles foi em 468 a.C., quando obteve o primeiro prêmio na competição de teatro Dionísia, vencendo o mestre então reinante do drama ateniense, Ésquilo. De acordo com Plutarco, a vitória veio em circunstâncias incomuns. Em vez de seguir o costume de escolher os juízes por sorteio, o arconte pediu a Címon e aos outros estrategos presentes para decidir o vencedor do concurso.\n[…]\nSófocles se tornou um homem de grande importância nos salões públicos de Atenas, bem como nos teatros. Foi escolhido para liderar o canto de triunfo, um canto coral a um deus, aos 16 anos, comemorando a vitória marítima decisiva dos gregos sobre os persas na Batalha de Salamina. Esta pequena informação existente sobre a vida cívica de Sófocles mostra que ele era um homem bem quisto que participava de atividades na sociedade e mostrava habilidade artística notável.\n[…]\nAlém destes, há uma grande quantidade de trabalhos de Sófocles que sobreviveram apenas em fragmentos, incluindo:\n[…]\nObras de Sófocles no Internet Archive\n[…]\nFilmes baseados em peças de Sófocles - IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Eurípides",
      "descricao": "Dramaturgo ateniense do século cinco a.C., o mais jovem dos três grandes trágicos, autor de Medeia e As Troianas."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Ésquilo e Sófocles têm só sete tragédias inteiras preservadas cada um. Que trágico ateniense tem mais que o dobro disso?",
    "resposta": "Eurípides",
    "fonte": [
      "https://en.wikipedia.org/wiki/Euripides",
      "https://en.wikipedia.org/wiki/Aeschylus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Euripides",
        "situacao": "ok",
        "texto": "Euripides (; Ancient Greek: Eὐριπίδης, romanized: Eurīpídēs, pronounced [eu̯.riː.pí.dɛːs]; c. 480 – c. 406 BC) was a Greek tragedian of classical Athens. Along with Aeschylus and Sophocles, he is one of the three authors of Greek tragedy whose name is ascribed to surviving plays. Some ancient scholars attributed ninety-five plays to him, but the Suda says it was ninety-two at most.\n[…]\nHowever, \"his plays continued to be applauded even after those of Aeschylus and Sophocles had come to seem remote and irrelevant\"; they became school classics in the Hellenistic period (as mentioned in the introduction) and, due to Seneca's adaptation of his work for Roman audiences, \"it was Euripides, not Aeschylus or Sophocles, whose tragic muse presided over the rebirth of tragedy in Renaissance Europe.\"\n[…]\nAugust Wilhelm's Vienna lectures on dramatic art and literature went through four editions between 1809 and 1846; and, in them, he opined that Euripides \"not only destroyed the external order of tragedy but missed its entire meaning\". This view influenced Friedrich Nietzsche, who seems, however, not to have known the Euripidean plays well.\n[…]\nClassicists such as Arthur Verrall and Ulrich von Wilamowitz-Moellendorff reacted against the views of the Schlegels and Nietzsche, constructing arguments sympathetic to Euripides, which involved Wilamowitz in this restatement of Greek tragedy as a genre: \"A [Greek] tragedy does not have to end 'tragically' or be 'tragic'.\n[…]\nIn fact, the very existence of the Alphabet plays, or rather the absence of an equivalent edition for Sophocles and Aeschylus, could distort our notions of distinctive Euripidean qualities—most of his least \"tragic\" plays are in the Alphabet edition; and, possibly, the other two tragedians would appear just as genre-bending as this \"restless experimenter\", if we possessed more than their \"select\" editions."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Aeschylus",
        "situacao": "ok",
        "texto": "Aeschylus (UK: , US: ; Ancient Greek: Αἰσχύλος Aischýlos; c. 525/524 – c. 456/455 BC) was an ancient Greek tragedian, often described as the father of tragedy. Academic knowledge of the genre begins with his work, and understanding of earlier Greek tragedy is largely based on inferences made from reading his surviving plays. According to Aristotle, he expanded the number of characters in the theat\n[…]\nAeschylus married and had two sons, Euphorion and Euaeon, both of whom became tragic poets. Euphorion won first prize in 431 BC in competition against both Sophocles and Euripides. A nephew of Aeschylus, Philocles (his sister's son), was also a tragic poet, and won first prize in the competition against Sophocles's Oedipus Rex. Aeschylus had at least two brothers, Cynegeirus and Ameinias.\n[…]\nThe Alexandrian Life of Aeschylus claims that he won the first prize at the City Dionysia thirteen times. This compares favorably with Sophocles's reported eighteen victories (with a substantially larger catalogue, an estimated 120 plays), and dwarfs the five victories of Euripides, who is thought to have written roughly 90 plays.\n[…]\nEugene O'Neill's Mourning Becomes Electra (1931), a trilogy of three plays set in America after the Civil War, is modeled after the Oresteia. Before writing his acclaimed trilogy, O'Neill had been developing a play about Aeschylus, and he noted that Aeschylus \"so changed the system of the tragic stage that he has more claim than anyone else to be regarded as the founder (Father) of Tragedy.\"\n[…]\nSommerstein, Alan H. (2010). Aeschylean Tragedy (2nd ed.). London: Duckworth. ISBN 978-0-7156-3824-8.\n[…]\nLesky, Albin (1979). Greek Tragedy. London: Benn.\n[…]\nMurray, Gilbert (1978). Aeschylus: The Creator of Tragedy. Oxford: Clarendon Press.\n[…]\nPodlecki, Anthony J. (1966). The Political Background of Aeschylean Tragedy. Ann Arbor: University of Michigan Press."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Eur%C3%ADpides",
        "situacao": "ok",
        "texto": "Eurípides (também grafado Eurípedes; do grego antigo: Εὐριπίδης) (Salamina, ca. 480 a.C. — Pela, Macedônia, 406 a.C.) foi um poeta trágico grego, do século V a.C., o mais jovem dos três grandes expoentes da tragédia grega clássica, que ressaltou em suas obras as agitações da alma humana e em especial a feminina.\n[…]\nPara Eurípides, os mitos (elementos vitais da tragédia) eram apenas coleções de histórias cuja função era perpetuar crenças sobre concepções primitivas. Por tal motivo, opta por relatar em suas tragédias a história dos negados e/ou vencidos, podendo citar como exemplo a obra As Troianas, em que o autor relata a história das mulheres da cidade de Troia (lembrando que na época as mulheres não eram consideradas como membros da sociedade).\n[…]\nEmbora premiado poucas vezes (cinco) nos concursos trágicos de Atenas (Dionísias Urbanas, Lenéias), (apesar de ter escrito cerca de 92 peças), no final do século V a.C., desfrutou de grande popularidade nos séculos subseqüentes, é atualmente muito mais popular que Ésquilo ou Sófocles.\n[…]\nEurípedes  foi o último dos três grandes autores trágicos da Atenas clássica (os outros dois foram Ésquilo e Sófocles). Especialistas estimam que Eurípedes tenha escrito 95 peças, embora quatro delas provavelmente tenham sido escritas por Crítias. Ele foi autor do maior número de peças trágicas da Grécia que chegaram até nós: dezoito no total (de Ésquilo e Sófocles sobreviveram, de cada um, sete peças completas).\n[…]\nEsta tragédia, de acordo com a maior parte dos eruditos modernos, não é de Eurípides, e sim de um tragediógrafo anônimo do século IV a.C..\n[…]\nKovacs, D. Euripidea. Leiden: Brill, 1994.\n[…]\n«Eurípides». no Portal Graecia Antiqua\n[…]\nTradução, com comentário, da tragédia Reso para Português\n[…]\nEdição e Tradução dos fragmentos das peças de Eurípides, volume I",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Siracusa",
      "descricao": "Cidade da Sicília fundada por colonos de Corinto no século oito a.C., a mais poderosa das colônias gregas do Ocidente."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Segundo o orador romano Cícero, qual era a maior e a mais bela de todas as cidades gregas?",
    "resposta": "Siracusa",
    "distratores": [
      "Atenas",
      "Corinto",
      "Alexandria"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Syracuse,_Sicily"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Syracuse,_Sicily",
        "situacao": "ok",
        "texto": "Syracuse is a city and comune (municipality), capital of the free municipal consortium of the same name, located in the autonomous island region of Sicily in southern Italy. As of 2026, with a population of 115,515, it is the 4th-largest city in Sicily, following Palermo, Catania, and Messina.\n[…]\nAround the 13th century, with the so-called Sicilian School, the islanders unified their language, passing their content and phonetic patterns to the Tuscans, thus laying the first foundation for the birth of the Italian language. The leading figure of this linguistic school was a resident of the Siracusan area: Giacomo da Lentini. The centuries-long presence of the Spanish in the city was particularly influential on the local dialect: many Syracusan words derive from the Spanish language.\n[…]\nAmong its most famous foods are olives, fish, various PAT and IGP products such as the Siracusa lemon, Sicilian red orange, Syracuse new potato, Monti Iblei olive oil, Syracuse watermelon, and the strawberry of Cassibile.\n[…]\nIn the Syracuse area, there is the leading lemon-producing district in Italy and the European Union, with the production of Siracusa lemon, which records increasingly significant sales figures. Other significant productions in the area include Sicilian cheeses, the Syracuse new potato, which accounts for three-quarters of Sicilian production and is exported both within Italy and abroad, the Monti Iblei extra virgin olive oil, the Syracuse watermelon, and other agricultural products.\n[…]\nThe municipality is served by the Siracusa railway station, located at km 312+176 of the Messina-Syracuse railway and the Siracusa–Gela–Canicattì railway. To the southwest is the Syracuse Locomotive Depot.\n[…]\nSicilian Wars\n[…]\nSiracusa railway station\n[…]\nCoins from ancient Syracuse and Sicily"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Siracusa",
        "situacao": "ok",
        "texto": "Siracusa (em siciliano Saraùsa) é uma comuna italiana da região da Sicília, província de Siracusa, com cerca de 121 000 habitantes. Estende-se por uma área de 204 km², tendo uma densidade populacional de 593 hab/km². Faz fronteira com Avola, Canicattini Bagni, Floridia, Melilli, Noto, Palazzolo Acreide, Priolo Gargallo, Solarino. Siracusa é cidade natal de Santa Luzia, que teria nascido nesta loca\n[…]\nSiracusa foi fundada por Árquias de Corinto, a comando do oráculo de Delfos. Árquias, um heráclida, havia causado um tumulto que levou ao assassinato de Acteão (filho de Melisso), e, como os coríntios não puniram os assassinos, Melisso se matou em protesto. Para debelar a cólera do deus Posidão, Árquias foi para a Sicília e fundou Siracusa. A fundação da cidade foi em cerca de 734 a.C..\n[…]\nFoi cidade-Estado até ser conquistada pelos romanos em 212 a.C.. Arquimedes, o matemático e inventor grego, morreu no massacre que se seguiu à rendição da cidade.\n[…]\nOs monarcas de Siracusa são quase sempre chamados de tiranos e não de basileus (reis); uma exceção foi Agátocles de Siracusa, que tinha o título de rei.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Palácio de Cnossos",
      "descricao": "Grande complexo palaciano da Idade do Bronze em Creta, centro da civilização minoica."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Na Creta da Idade do Bronze, qual era o maior dos palácios da civilização minoica?",
    "resposta": "Cnossos",
    "distratores": [
      "Festo",
      "Mália",
      "Zakros"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Knossos"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Knossos",
        "situacao": "ok",
        "texto": "Knossos (; Ancient Greek: Κνωσσός, romanized: Knōssós; Greek: Κνωσός, romanized: Knōsós; Linear B: 𐀒𐀜𐀰 Ko-no-so) is an archaeological site and ancient urban centre in Crete, Greece. It is located within the southern periphery of Heraklion, about 5 km (3.1 mi) south of the city's historic centre. The site was occupied from the Neolithic period into the first millennium AD and became the largest and\n[…]\nEvans established \"Minoan\" as the archaeological designation for the Bronze Age civilisation of Crete, drawing on the myth of King Minos. His work made Knossos central to the study of Aegean prehistory. Finds from the excavations included fresco fragments, pottery, sealings, figurines, stone vessels, metal objects and thousands of Linear B tablets.\n[…]\nThe Linear B tablets from Knossos were central to the decipherment of Linear B by Michael Ventris and John Chadwick. Their decipherment showed that the tablets recorded an early form of Greek, changing the understanding of Late Bronze Age Crete and the Mycenaean world.\n[…]\nIn 2025, Knossos was inscribed on the UNESCO World Heritage List as part of the serial property Minoan Palatial Centres. The property includes six Cretan palatial sites: Knossos, Phaistos, Malia, Zakros, Zominthos and Kydonia. UNESCO recognised the sites under criteria ii, iii, iv and vi for their evidence of Minoan civilisation, early urban development, monumental architecture, writing systems, maritime networks and enduring mythological influence.\n[…]\nEvans, Arthur (1921–1935). The Palace of Minos: A Comparative Account of the Successive Stages of the Early Cretan Civilization as Illustrated by the Discoveries at Knossos. London: Macmillan.\n[…]\nMomigliano, Nicoletta, ed. (2007). Knossos Pottery Handbook: Neolithic and Bronze Age (Minoan). British School at Athens Studies. Vol. 14. British School at Athens. ISBN 978-0-904887-55-6.\n[…]\nKnossos Urban Landscape Project"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cnossos",
        "situacao": "ok",
        "texto": "Cnossos (em grego: Κνωσός; romaniz.: Knossós; AFI: [kno̞ˈso̞s]) é o maior sítio arqueológico da Idade do Bronze da ilha grega de Creta, provável centro cerimonial e político-cultural da Civilização Minoica. Situado próximo da cidade moderna de Heraclião, atualmente Cnossos é visitado por muitos turistas, que visitam a \"reconstrução\" imaginativa feita a partir das ruínas que existiam no local.\n[…]\nAusência de elementos arquitetônicos defensivos como fortificações e muros, segundo Cunha (2013-103) onde “Seus palácios surgem como entrepostos comerciais com aspirações sagradas e receptores das oferendas devotadas aos cultos locais”, demonstra o forte poder religioso em Cnossos, e no regime palaciano como um todo de Creta.\n[…]\nA própria monumentalidade da arquitetura de Cnossos é uma característica que comunica o poder e a autoridade ali existentes, pois segundo León (2008-61) “La arquitectura monumental sirve, de este modo, para reforzar la autoridad y el poder de la elite que, además de desempeñar otras funciones, constituye un centro común integrador.” E a todas essas características de Cnossos soma-se outro aspecto importante, que pode fazer parte da vida religiosa ou mesmo econômica e política em Cnossos, que são os aspectos astronômicos, que segundo Cunha (2017-69) “as características que as edificações apresentam e os artefatos rituais nelas encontrados sugerem que essas construções tinham uma função de culto associada ao domínio de um saber astronômico.”, ainda segundo Cunha (2017-86) “O domínio de tecnologias para a marcação de estações do ano através das observações celestes e os movimentos de seus corpos é perceptível na sociedade minoica e na constituição de seus palácios e templos.\n[…]\nArte minoica\n[…]\n«Cnossos». no site do Ministério Helênico da Cultura\n[…]\n«O Grande Palácio de Cnossos». www.earth-history.com\n[…]\n«Cnossos». no WikiMapia",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Esparta",
      "descricao": "Cidade-Estado grega do Peloponeso, famosa por sua sociedade militarizada."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em Esparta, as terras dos cidadãos eram cultivadas por uma população dominada e sem liberdade. Como se chamavam esses servos?",
    "resposta": "Hilotas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Helots",
      "https://pt.wikipedia.org/wiki/Hilotas"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Helots",
        "situacao": "ok",
        "texto": "The helots (; Greek: εἵλωτες, heílotes) were a subjugated group that constituted a majority of the population of Laconia and Messenia – the territories ruled by Sparta in Ancient Greece. There has been controversy since antiquity as to their exact characteristics, such as whether they constituted an Ancient Greek tribe, a social class, or both. For example, Critias described helots as \"slaves to t\n[…]\nUprisings and attempts to improve the lot of the helots did occur, such as the conspiracy of Cinadon of 399 BC. Plato on the other hand does not mention the killings by the Crypteia at all in  Laws. The population was largely liberated by the Theban commander Epaminondas following the Theban-Spartan War.\n[…]\nThe absence of a formal census prevents an accurate assessment of the helot population, but estimates are possible. According to Herodotus, helots were seven times as numerous as Spartans during the Battle of Plataea in 479 BC. The long Peloponnesian War drained Sparta of so many of its citizens that by the time of the conspiracy of Cinadon, the beginning of the 4th century BC, only forty Peers, or citizens, could be counted in a crowd of 4,000 at the agora (Xenophon, Hellenica, III, 3, 5).\n[…]\nSince the helot population was not technically chattel, their population was reliant on native birth rates, as opposed to prisoners of war or purchased slaves. Helots were encouraged by the Spartans to impose a eugenics doctrine similar to that which they, themselves, practiced. This would, according to Greek beliefs of the period, ensure not only genetic but also acquired favourable characteristics be passed along to successive generations.\n[…]\nPomeroy, Sarah B. Spartan Women, Oxford University Press, Oxford, 2002. ISBN 0-19-513067-7\n[…]\nTalbert, R.J.A. \"The Role of the Helots in the Class Struggle at Sparta\", Historia: Zeitschrift für Alte Geschichte, Vol. 38, No. 1 (1st Qtr., 1989), pp. 22–40."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hilotas",
        "situacao": "ok",
        "texto": "Os hilotas (em grego Εἱλῶται, \"Heílotai\" ou \"Heílotes\") eram os servos da Grécia. Diferentemente dos escravos, os hilotas eram propriedade do Estado, que administrava a produção econômica. Durante a Cripteia um grupo de jovens espartanos era designado para assassinar líderes em potencial entre os hilotas.\n[…]\nExistem diversas teorias quanto à origem da palavra. Pausânias (geógrafo) deriva o nome da cidade de Helos (atual Elos): \"Seus habitantes (de Helos) tornaram-se os primeiros escravos do estado lacedemônio e foram os primeiros a serem chamados de helotas, pois de fato o eram. Os escravos adquiridos posteriormente, embora fossem dórios de Messênia, também foram chamados de helotas.\".\n[…]\n\"aqueles lacedemônios que não participaram da expedição foram feitos escravos e chamados de helotas\", enquanto Teopompo (fragmento 122), citado por Ateneu de Náucrate (VI, 416c), afirmou que \"[…] e enquanto uma nação chamava seus escravos de helotas, a outra chamava de penestas […]\".\n[…]\nPara os primeiros hilotas, a situação é menos clara. De acordo com Teopompo eles eram os descendentes dos primeiros aqueus, conquistados pelos dórios. Na época, porém, nem todos os aqueus foram reduzidos ao helotismo; a vila de Amiclas, terra do festival da Jacíntia, gozava de um status especial, assim como outras.\n[…]\nAutores contemporâneos propõem teorias alternativas; de acordo com Antíoco de Siracusa eles eram os lacedemônios que não tinham participado das Guerras Messênias. Para Éforo de Cime, eles eram os periecos (\"moradores das comunidades periféricas\") de Helos, escravizados depois de uma revolta mal-sucedida. A historiografia moderna favorece a hipótese de Antíoco.\n[…]\nEsparta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Esparta",
      "descricao": "Cidade-Estado grega do Peloponeso, famosa por sua sociedade militarizada."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Segundo Plutarco, para desestimular a ganância, Esparta usava um dinheiro pesado e de pouco valor. De que metal ele era feito?",
    "resposta": "Ferro",
    "fonte": [
      "https://en.wikipedia.org/wiki/Lycurgus_of_Sparta",
      "https://en.wikipedia.org/wiki/Sparta"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lycurgus_of_Sparta",
        "situacao": "ok",
        "texto": "Lycurgus (; Ancient Greek: Λυκοῦργος Lykourgos) was the legendary lawgiver of Sparta, credited with the formation of its eunomia ('good order'), involving political, economic, and social reforms to produce a military-oriented Spartan society in accordance with the Delphic oracle. The Spartans in the historical period honoured him as a god.\n[…]\nThe education of Spartan boys in the agoge, less anachronistically the paideia, was also attributed to an initiative of Lycurgus to equalise Spartan citizens socially, by raising them without outside family and clan loyalties. Though the story is rejected by Plutarch, Lycurgus is also said to have instituted the crypteia, a group of young men tasked with clandestinely killing helots in the night.\n[…]\nThe Plutarchian comparison between the paired lives of Lycurgus and Numa (the early Roman lawgiver and king), for example, judged Lycurgus favourably compared to the Roman by emphasising Lycurgan education and pronatalism. Another argument for Lycurgan superiority was also that Sparta declined as it supposedly deviated from Lycurgus' settlements while Rome flourished as it similarly deviated from Numa's ideals.\n[…]\nCharles Rollin, a French educator, produced an enduring and admiring conception of Lycurgus as having created the rule of law, the mixed constitution, equality, and universal education. The philosopher Jean-Jacques Rousseau, who derived most of his knowledge of Lycurgus from Plutarch's biography, viewed the figure positively as standing for an austere civil morality acting for the collective good. This view of Lycurgus and Sparta saw him associate Lycurgus' reforms with the \"general will\".\n[…]\nDevereaux, Bret (30 August 2019). \"This. Isn't. Sparta. Part III: Spartan Women\". A Collection of Unmitigated Pedantry. Retrieved 31 May 2024."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Sparta",
        "situacao": "ok",
        "texto": "Sparta was a prominent ancient Greek polis in Laconia. In classical antiquity, the state was known as Lacedaemon (Λακεδαίμων, Lakedaímōn), while Sparta referred to its capital, a group of villages in the valley of the Evrotas River in Laconia, in southeastern Peloponnese. During the 7th century BC, it rose to become the most prominent land military power in the Greek world, a status it retained un\n[…]\nOne of the most persistent myths about Sparta is the notion that Spartan mothers were without feelings toward their off-spring and helped enforce a militaristic lifestyle on their sons and husbands. The myth can be traced back to Plutarch, who includes no less than 17 \"sayings\" of \"Spartan women\", all of which paraphrase or elaborate on the theme that Spartan mothers rejected their own offspring if they showed any kind of cowardice.\n[…]\nPlutarch reports the peculiar customs associated with the Spartan wedding night:\n[…]\nPlutarch's Moralia contains a collection of \"Sayings of Spartan Women\", including a laconic quip attributed to Gorgo: when asked by a woman from Attica why Spartan women were the only women in the world who could rule men, she replied \"Because we are the only women who are mothers of men\". In 396, Cynisca, sister of the Eurypontid king Agesilaus II, became the first woman in Greece to win an Olympic chariot race.\n[…]\nWith the revival of classical learning in Renaissance Europe, Laconophilia re-appeared, for example in the writings of Machiavelli. The Elizabethan English constitutionalist John Aylmer compared the mixed government of Tudor England to the Spartan republic, stating that \"Lacedemonia [was] the noblest and best city governed that ever was\". He commended it as a model for England.\n[…]\nMedia related to Sparta at Wikimedia Commons\n[…]\nSparta on In Our Time at the BBC\n[…]\n\"The Fierce Women of Sparta Wrestled, Danced, and Drank\", August 20, 2019, Atlas Obscura"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Licurgo_de_Esparta",
        "situacao": "ok",
        "texto": "Licurgo foi um lendário legislador da pólis de Esparta. Nada se sabe seguramente sobre a existência deste personagem. Heródoto fala dele em meados do século V a.C., mas a vida do legislador deve ter decorrido no século VIII a.C., mas a sua memória seria correntemente mencionada na Esparta do século V, pois os seus habitantes nessa época sentiam a necessidade de atribuir a organização estatal que o\n[…]\nA organização estatal atribuída a Licurgo se compunha de rígido regime de formação possuía um caráter de obrigação social e imposição estatal, com o objetivo primordial de treinar cidadãos masculinos à vida militar espartana. A exceção da regra compreendia a primogenitura das casas reais.\n[…]\nPlutarco, em sua biografia no livro Vidas Paralelas, comenta que, à sua época, havia várias versões contraditórias sobre a vida de Licurgo, e que ele procurou fazer uma síntese, escolhendo os autores antigos que menos se contradiziam.\n[…]\nConta a lenda que ao terminar o conjunto de leis que regeriam Esparta, o legislador solicitou um pedido e uma promessa do rei. Com a concordância e sabedor da fraqueza humana frente às injunções políticas de momento, pediu a promessa que as Leis só seriam alteradas com o aval dele (Licurgo) e pediu sua condenação ao Ostracismo, para que as Leis sobrevivessem aos homens. Licurgo também foi o estadista responsável pelas leis de Esparta.\n[…]\nA Lei de Licurgo determinava a educação dos jovens pela cidade de Esparta a partir dos 7 anos de idade e também a educação rígida para esses garotos que ficavam nesse \"acampamento\" até completarem 18 anos e servirem mais 10 anos no exército de Esparta.\n[…]\nGraças a Licurgo, Esparta se potencializou em seu poder econômico, político e principalmente, bélico.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Falange grega",
      "descricao": "Formação de batalha das cidades gregas, um bloco cerrado de soldados de infantaria pesada com escudos e lanças."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "A falange, formação de batalha das cidades gregas, era um bloco cerrado de soldados de infantaria pesada. Que nome recebiam esses soldados?",
    "resposta": "Hoplitas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Phalanx",
      "https://en.wikipedia.org/wiki/Hoplite"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Phalanx",
        "situacao": "ok",
        "texto": "The phalanx (IPA: /ˈfa.laŋks/; pl.: phalanges or phalanxes) was a rectangular mass military formation, usually composed entirely of heavy infantry armed with spears, pikes, sarissas, or similar polearms tightly packed together. The term is used today to describe the use of this formation in ancient Greek warfare, but ancient Greek writers used it more broadly to describe any massed infantry format\n[…]\nIn this status, the phalanx had twice the normal depth and each hoplite had to occupy about 1.8–2 metres (5 ft 11 in – 6 ft 7 in) in width. When enemy infantry was approaching, a rapid switch to the pycne (spelled also pucne) formation (dense or tight formation) was necessary. In that case, each man's space was halved and the formation depth returned to normal.\n[…]\nHowever, even a reduced-depth phalanx proved unstoppable to the lightly armed Persian infantry. After routing the Persian wings, the hoplites on the Athenian wings wheeled inwards, destroying the elite troop at the Persian centre, resulting in a crushing victory for Athens. Throughout the Greco-Persian Wars the hoplite phalanx was to prove superior to the Persian infantry (e.g., the battles of Thermopylae and Plataea).\n[…]\nThe hoplite phalanx was weakest when facing an enemy fielding lighter and more flexible troops without its own such supporting troops. An example of this would be the Battle of Lechaeum, where an Athenian contingent led by Iphicrates routed an entire Spartan mora (a unit of 500–900 hoplites).\n[…]\nThe Macedonian phalanx had weaknesses similar to its hoplitic predecessor. Theoretically indestructible from the front, its flanks and rear were very vulnerable, and once engaged it may not easily disengage or redeploy to face a threat from those directions. Thus, a phalanx facing non-phalangite formations required some sort of protection on its flanks – lighter or at least more mobile infantry, cavalry, etc."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Hoplite",
        "situacao": "ok",
        "texto": "Hoplites ( HOP-lytes; Ancient Greek: ὁπλῖται, romanised: hoplîtai [hoplîːtai̯]) were citizen-soldiers of Ancient Greek city-states who were primarily armed with spears and shields. Hoplite soldiers used the phalanx formation to be effective in war with fewer soldiers. The formation discouraged the soldiers from acting alone, for this would compromise the formation and minimise its strengths.\n[…]\nDuring the Greco-Persian Wars (499–448 BC), alliances between groups of cities (whose composition varied over time) fought against the Persians. This drastically altered the scale of warfare and the numbers of troops involved. The hoplite phalanx proved itself far superior to the Persian infantry at such conflicts as the Battle of Marathon, Thermopylae, and the Battle of Plataea.\n[…]\nMany famous personalities, philosophers, artists, and poets fought as hoplites.\n[…]\nLater in the hoplite era, more sophisticated tactics were developed, in particular by the Theban general Epaminondas. These tactics inspired the future king Philip II of Macedon, who was at the time a hostage in Thebes, to develop a new type of infantry, the Macedonian phalanx. After the Macedonian conquests of the 4th century BC, the hoplite was slowly abandoned in favour of the phalangite, armed in the Macedonian fashion, in the armies of the southern Greek states.\n[…]\nThe Greek armies of the Hellenistic period mostly fielded troops in the fashion of the Macedonian phalanx. Many armies of mainland Greece retained hoplite warfare. Besides classical hoplites Hellenistic nations began to field two new types of hoplites, the Thureophoroi and the Thorakitai. They developed when Greeks adopted the Galatian Thureos shield, of an oval shape that was similar to the shields of the Romans, but flatter.\n[…]\nAssociation of Greek Hoplites Historic Studies Club \"KORYVANTES\"\n[…]\nSparta Pages – web page on Sparta and the Hoplite.\n[…]\nThe Phalanx Hoplite"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Falange_%28infantaria%29",
        "situacao": "ok",
        "texto": "Falange (em grego: φάλαγξ; romaniz.: phálanx), no contexto militar, é uma formação retangular de infantaria grega antiga, tipicamente composta por lanceiros.\n[…]\nOs falangistas mantinham uma formação cerrada, com as armas das primeiras linhas (o número exato dependia do comprimento das lanças, projetadas para a frente, de modo que seria impossível atingir qualquer homem da formação sem ser perfurado por alguma lança). Além disso, a segunda defesa seria a barreira de escudos empunhados pelos soldados, que primavam a defesa de uns aos outros.\n[…]\nAs primeiras falanges aparecem em inscrições sumérias (meio do terceiro milênio a.C.), e dominaram os campos de batalha por milênios. Tornam-se famosas, assim como os soldados que as constituíam (Hoplitas), nas Guerras Greco-Persas, em batalhas como a de Maratona, Termópilas ou Plateia. Viriam a alcançar seu apogeu com a falange macedônia criada pelo rei Filipe II e seria uma parte fundamental, dos exércitos de Alexandre, o Grande e seus sucessores.\n[…]\nQuando formadas por soldados bem treinados, as falanges constituíam uma defesa frontal virtualmente indestrutível, mas tinham grandes dificuldades em avançar mantendo a linha. Além disso, como cada lança estava voltada para frente e espremida entre os outros homens da formação, as falanges eram vulneráveis e lentas demais para conter um ataque lateral. Dessa maneira, como visto com alguns generais, as falanges eram protegidas por cavalaria nos flancos, e muitas vezes recebiam apoio de arqueiros.\n[…]\nFalange foi também o nome utilizado pela Espanha de Franco para o seu exército. Este nome foi inspirado nas falanges gregas de que se fala acima.\n[…]\nHoplita",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Dracma",
      "descricao": "Moeda de prata da Grécia Antiga, usada em Atenas e em outras cidades gregas."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "O dracma, moeda da Grécia antiga, valia seis moedinhas menores, iguais às que se punham na boca dos mortos. Que moeda era essa?",
    "resposta": "Óbolo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Obol_(coin)",
      "https://en.wikipedia.org/wiki/Charon%27s_obol"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Obol_(coin)",
        "situacao": "ok",
        "texto": "The obol or obolus (Ancient Greek: ὀβολός obolós, also ὀβελός obelós, ὀβελλός obellós, ὀδελός odelós; lit. 'nail; metal spit'; Latin: obolus) was a form of ancient Greek currency and weight.\n[…]\nExcavations at Argos discovered several dozen of these early obols, dated well before 800 BC; they are now displayed at the Numismatic Museum of Athens. Archaeologists today describe the iron spits as \"utensil-money\" since excavated hoards indicate that during the Late Geometric period they were exchanged in handfuls (drachmae) of six spits; they were not used for manufacturing artifacts as metallurgical analyses suggest, but they were most likely used as token-money.\n[…]\nIn Classical Athens, obols were traded as silver coins. Six obols made up the drachma. There were also coins worth two obols (\"diobol\") and three obols (\"triobol\"). By the 5th century BC, variations on obols expanded to include coins worth one and one-half (\"trihemiobol\") obols and half obols (\"hemiobol\"). The 4th century BC diversified further with some minted obols worth as little as one-eighth obol, equivalent to a single copper.\n[…]\nIn ancient Greece, it was generally reckoned as 1⁄6 drachma (c. 0.72 grams or 11 grains). Under Roman rule, it was defined as 1⁄48 Roman ounce or about 0.57 g (9 gr). The apothecaries' system also reckoned the obol or obolus as 1⁄48 ounce or 1⁄2 scruple. While 0.72 grams was the weight of a standard Greek obol, the actual amount of silver that went into making the currency could vary from region to region.\n[…]\nHow we came to know about the iron obols, the antecedents of the drachma"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Charon%27s_obol",
        "situacao": "ok",
        "texto": "Charon's obol is an allusive term for the coin placed in or on the mouth of a dead person before burial. Greek and Latin literary sources specify the coin as an obol, and explain it as a payment or bribe for Charon, the ferryman who conveyed souls across the river that divided the world of the living from the world of the dead. Archaeological examples of these coins, of various denominations in pr\n[…]\nThe coin for Charon is conventionally referred to in Greek literature as an obolós (ὀβολός), one of the basic denominations of ancient Greek coinage, worth one-sixth of a drachma. Among the Greeks, coins in actual burials are sometimes also a danakē (δανάκη) or other relatively small-denomination gold, silver, bronze or copper coin in local use. In Roman literary sources the coin is usually bronze or copper.\n[…]\nCharon's obol is usually regarded as Hellenic, and a single coin in burials is often taken as a mark of Hellenization, but the practice may be independent of Greek influence in some regions. The placing of a coin in the mouth of the deceased is found also during Parthian and Sasanian times in what is now Iran. Curiously, the coin was not the danake of Persian origin, as it was sometimes among the Greeks, but usually a Greek drachma."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/%C3%93bolo",
        "situacao": "ok",
        "texto": "Óbolo (em grego antigo: ὀβολός, obolós; plural ὀβολοί, oboloí; pelo latim obolus, obolos; literalmente \"haste de ferro\") foi uma unidade de massa na Grécia Antiga correspondente a cerca de 0,5 grama. Como esses pesos eram usados para medir a quantidade de metal precioso numa moeda, óbolo também se tornou uma moeda de menor valor, correspondendo à sexta parte de uma dracma, pesando 0,5 grama de pra\n[…]\nCorrespondia a 1/48 da onça romana (0,57 g), mas nunca foi usada como uma moeda durante o sistema monetário dos primeiros anos da república.\n[…]\nEra costume grego colocar uma moeda, chamada óbolo, sob a língua do cadáver, para pagar Caronte pela viagem. Se a alma não pudesse pagar ficaria forçosamente na margem do Aqueronte para toda a eternidade, e os gregos temiam que pudesse regressar para perturbar os vivos.\n[…]\nNa Grécia moderna óbulo representa um decigrama (0,1 g). Mas, num sentido figurado, um óbulo também é tratado como uma pequena contribuição em dinheiro.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Estátua de Zeus em Olímpia",
      "descricao": "Estátua colossal de Zeus sentado, feita por Fídias no século cinco a.C. para o templo de Olímpia, uma das sete maravilhas do mundo antigo."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "A estátua de Zeus em Olímpia, uma das sete maravilhas do mundo antigo, tinha estrutura de madeira revestida de que dois materiais preciosos?",
    "resposta": "Marfim e ouro",
    "fonte": [
      "https://en.wikipedia.org/wiki/Statue_of_Zeus_at_Olympia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Statue_of_Zeus_at_Olympia",
        "situacao": "ok",
        "texto": "The Statue of Zeus at Olympia was a giant seated figure, about 12.4 m (41 ft) tall, made by the Greek sculptor Phidias around 435 BC at the sanctuary of Olympia, Greece, and erected in the Temple of Zeus there. Zeus is the sky and thunder god in ancient Greek religion, who rules as king of the gods on Mount Olympus.\n[…]\nThe sculptor also was reputed to have immortalized Pantarkes, the winner of the boys' wrestling event at the eighty-sixth Olympiad who was said to have been his \"beloved\" (eromenos), by carving Pantarkes kalos (\"Pantarkes is beautiful\") into Zeus's little finger, and by placing a relief of the boy crowning himself at the feet of the statue.\n[…]\nThe approximate date of the statue (the third quarter of the 5th century BC) was confirmed in the rediscovery in 1954–1958 of Phidias' workshop, approximately where Pausanias said the statue of Zeus was constructed. Archaeological finds included tools for working gold and ivory, ivory chippings, precious stones and terracotta moulds. Most of the latter were used to create glass plaques, and to form the statue's robe from sheets of glass, naturalistically draped and folded, then gilded.\n[…]\nGeorge Washington, 1840 statue\n[…]\nGreat Buddha of Kyoto Lost giant statue of Japan, like Zeus at Olympia\n[…]\nMcWilliam, Janette (2011). \"The statue of Zeus at Olympia in Western imagination via the Internet\". In McWilliam, Janette; Puttock, Sonia; Stevenson, Tom (eds.). The Statue of Zeus at Olympia: New Approaches. Cambridge Scholars Publishing. pp. 209–222. ISBN 978-1-4438-3032-4.\n[…]\nWorld History Encyclopedia – Statue of Zeus at Olympia\n[…]\nColin Delaney, \"A Wonder to Behold: The Statue of Olympian Zeus\"\n[…]\n(Ellen Papakyriakou) Olympia: Art: the chryselephantine statue of Zeus\n[…]\nMichael Lahanas, \"The colossal Zeus statue of Pheidias\" Archived 2013-04-03 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Est%C3%A1tua_de_Zeus_em_Ol%C3%ADmpia",
        "situacao": "ok",
        "texto": "Estátua de Zeus em Olímpia era uma figura sentada gigante, com cerca de 13 metros de altura, feita pelo escultor grego Fídias por volta de 435 a.C. no santuário de Olímpia, Grécia, e erguida no Templo de Zeus. A escultura tinha placas de marfim e painéis de ouro sobre uma estrutura de madeira, que representava o deus Zeus sentado em um trono de madeira de cedro ornamentado com ébano, marfim, ouro \n[…]\nUma das Sete Maravilhas do Mundo Antigo, ela foi perdida e destruída durante o século V sem nenhuma cópia, sendo que seus detalhes e forma são conhecidos apenas através de antigas descrições e representações gregas em moedas.\n[…]\nA estátua media de 12 a 15 metros de altura — o equivalente a um prédio de cinco andares —  era toda de marfim e ébano. Seus olhos eram pedras preciosas. Fídias esculpiu Zeus sentado num trono. Ele esculpiu a estátua com material de joalheiro. Na mão direita levava a estatueta de Nice, deusa da Vitória; na esquerda, uma esfera sob a qual se debruçava uma águia. Supõe-se que, como em representações de outros artistas, o Zeus de Fídias também mostrasse o cenho franzido.\n[…]\nA lenda dizia que quando Zeus franzia a fronte o Olimpo todo tremia. Quando a estátua foi construída, a rivalidade entre Atenas e Esparta pela hegemonia no Mediterrâneo e na Grécia continental mergulhou os gregos numa sucessão de guerras. Os combates, no entanto, não prejudicaram as realizações culturais e artísticas da época. Ao contrário, o século V a.C. ficou conhecido como o século de ouro na história grega devido ao extraordinário florescimento da arquitetura, escultura e outras artes.\n[…]\nFrancis popozan M.A.. 1950. super zeus (New Haven: Yale University Press)\n[…]\nNate Whirt 1965. zeus, a estátua (Princeton: D. Van Nostrand Company)\n[…]\nMedia relacionados com Estátua de Zeus em Olímpia no Wikimedia Commons",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Estátua de Zeus em Olímpia",
      "descricao": "Estátua colossal de Zeus sentado, feita por Fídias no século cinco a.C. para o templo de Olímpia, uma das sete maravilhas do mundo antigo."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que escultor ateniense, o mesmo que dirigiu a decoração do Partenon, criou a estátua de Zeus em Olímpia, uma das sete maravilhas?",
    "resposta": "Fídias",
    "fonte": [
      "https://en.wikipedia.org/wiki/Statue_of_Zeus_at_Olympia",
      "https://en.wikipedia.org/wiki/Phidias"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Statue_of_Zeus_at_Olympia",
        "situacao": "ok",
        "texto": "The Statue of Zeus at Olympia was a giant seated figure, about 12.4 m (41 ft) tall, made by the Greek sculptor Phidias around 435 BC at the sanctuary of Olympia, Greece, and erected in the Temple of Zeus there. Zeus is the sky and thunder god in ancient Greek religion, who rules as king of the gods on Mount Olympus.\n[…]\nThe statue of Zeus was commissioned by the Eleans, custodians of the Olympic Games, in the latter half of the fifth century BC for their newly constructed Temple of Zeus. Seeking to outdo their Athenian rivals, the Eleans employed sculptor Phidias, who had previously made the massive statue of Athena Parthenos in the Parthenon.\n[…]\nThe sculptor also was reputed to have immortalized Pantarkes, the winner of the boys' wrestling event at the eighty-sixth Olympiad who was said to have been his \"beloved\" (eromenos), by carving Pantarkes kalos (\"Pantarkes is beautiful\") into Zeus's little finger, and by placing a relief of the boy crowning himself at the feet of the statue.\n[…]\nOlympic Oration or On Man's First Conception of God\n[…]\nGeorge Washington, 1840 statue\n[…]\nGreat Buddha of Kyoto Lost giant statue of Japan, like Zeus at Olympia\n[…]\nMcWilliam, Janette (2011). \"The statue of Zeus at Olympia in Western imagination via the Internet\". In McWilliam, Janette; Puttock, Sonia; Stevenson, Tom (eds.). The Statue of Zeus at Olympia: New Approaches. Cambridge Scholars Publishing. pp. 209–222. ISBN 978-1-4438-3032-4.\n[…]\nWorld History Encyclopedia – Statue of Zeus at Olympia\n[…]\nColin Delaney, \"A Wonder to Behold: The Statue of Olympian Zeus\"\n[…]\nArchaeopaedia: Statue of Zeus With bibliography\n[…]\n(Ellen Papakyriakou) Olympia: Art: the chryselephantine statue of Zeus\n[…]\nMichael Lahanas, \"The colossal Zeus statue of Pheidias\" Archived 2013-04-03 at the Wayback Machine\n[…]\nDavid Fenzl \"Recreating Olympic Statuary\"[link removed]"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Phidias",
        "situacao": "ok",
        "texto": "Phidias or Pheidias (; Ancient Greek: Φειδίας, Pheidias; c. 480 – c. 430 BC) was an Ancient Greek sculptor, painter, and architect, active in the 5th century BC. His Statue of Zeus at Olympia was one of the Seven Wonders of the Ancient World.\n[…]\nPhidias supposedly weighed the gold robe of the Athena Parthenos to prove his innocence, but was then accused of impiously portraying himself and Pericles on the shield of the statue, which was apparently true.\n[…]\nAccording to Philochorus, as quoted by a scholiast on Aristophanes, Phidias was put to death by the Eleans after he completed the Statue of Zeus at Olympia for them.\n[…]\nFrom the late 5th century BC, small copies of the statue of Zeus were found on coins from Elis, which give a general notion of the pose and the character of the head. The god was seated on a throne, every part of which was used for sculptural decoration. His body was of ivory, his robe of gold. His head was of a somewhat archaic type; the bust of Zeus found at Otricoli, which used to be regarded as a copy of the head of the Olympian statue, is certainly more than a century later in style.\n[…]\nA significant advancement in the knowledge of Phidias's working methodology came during 1954–1958 with the excavation of the workshop at Olympia where he created the Statue of Zeus. Tools, terracotta molds and pottery were found, just where Pausanias said the statue was constructed. An important find was a cup inscribed on the bottom \"Φειδίου εἰμί\" (Pheidíou eimí) – \"I belong to Phidias\"; literally: \"of Phidias I am\", although the inscription's authenticity is disputed.\n[…]\nThe discovery has enabled archaeologists to re-create the techniques used to make the statue."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Est%C3%A1tua_de_Zeus_em_Ol%C3%ADmpia",
        "situacao": "ok",
        "texto": "Estátua de Zeus em Olímpia era uma figura sentada gigante, com cerca de 13 metros de altura, feita pelo escultor grego Fídias por volta de 435 a.C. no santuário de Olímpia, Grécia, e erguida no Templo de Zeus. A escultura tinha placas de marfim e painéis de ouro sobre uma estrutura de madeira, que representava o deus Zeus sentado em um trono de madeira de cedro ornamentado com ébano, marfim, ouro \n[…]\nUma das Sete Maravilhas do Mundo Antigo, ela foi perdida e destruída durante o século V sem nenhuma cópia, sendo que seus detalhes e forma são conhecidos apenas através de antigas descrições e representações gregas em moedas.\n[…]\nA estátua media de 12 a 15 metros de altura — o equivalente a um prédio de cinco andares —  era toda de marfim e ébano. Seus olhos eram pedras preciosas. Fídias esculpiu Zeus sentado num trono. Ele esculpiu a estátua com material de joalheiro. Na mão direita levava a estatueta de Nice, deusa da Vitória; na esquerda, uma esfera sob a qual se debruçava uma águia. Supõe-se que, como em representações de outros artistas, o Zeus de Fídias também mostrasse o cenho franzido.\n[…]\nDe acordo com Suetônio, o imperador romano Calígula \"deu ordens que tais estátuas dos deuses que eram especialmente famosos por sua santidade ou por seu mérito artístico, incluindo a de Zeus em Olímpia, deveriam ser trazidos da Grécia, a fim de remover suas cabeças e colocar a sua própria no lugar.\" Antes que isto pudesse acontecer, o imperador foi assassinado (no ano 41); sua morte iminente foi supostamente predita pela estátua, que \"de repente soltou uma tal risada que o andaime caiu e os operários caíram em seus calcanhares.\"\n[…]\nFrancis popozan M.A.. 1950. super zeus (New Haven: Yale University Press)\n[…]\nNate Whirt 1965. zeus, a estátua (Princeton: D. Van Nostrand Company)\n[…]\nMedia relacionados com Estátua de Zeus em Olímpia no Wikimedia Commons",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Pancrácio",
      "descricao": "Modalidade de luta dos Jogos Olímpicos da Antiguidade, com quase nenhuma regra, que misturava golpes e agarramentos."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "O pancrácio, luta das Olimpíadas antigas em que quase tudo era permitido, combinava quais duas modalidades?",
    "resposta": "Boxe e luta",
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
    "indice": 14,
    "ancora": {
      "nome": "Ânfora panatenaica",
      "descricao": "Vaso de cerâmica decorado, dado como prêmio aos vencedores das competições das Panateneias, em Atenas."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Nas Panateneias, grande festival de Atenas, os atletas vencedores ganhavam ânforas decoradas cheias de quê?",
    "resposta": "Azeite de oliva",
    "fonte": [
      "https://en.wikipedia.org/wiki/Panathenaic_amphora"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Panathenaic_amphora",
        "situacao": "ok",
        "texto": "Panathenaic amphorae were the amphorae, large ceramic vessels, that contained the olive oil given as a prize in the Panathenaic Games. Some were ten imperial gallons (12 US gal; 45 L) and 60–70 cm (24–28 in) high. This oil came from the sacred grove of Athena at Akademia.\n[…]\nThe amphorae which held it had the distinctive form of tight handles, narrow neck and feet, and they were decorated with consistent symbols, in a standard form using the black figure technique, and continued to be so, long after the black figure style had fallen out of fashion.\n[…]\nSome Panathenaic amphorae depicted Athena Promachos, goddess of war, advancing between columns brandishing a spear and wearing the aegis, and next to her the inscription τῶν Ἀθήνηθεν ἄθλων \"(one) of the prizes from Athens\". On the back of the vase was a representation of the event for which it was an award. Sometimes roosters are depicted perched on top of the columns. The significance of the roosters remains a mystery.\n[…]\nThe survival rate of Greek pottery as a whole may be calculated from the remnant of panathenaic amphorae that exist. After approximately 350 BC at least 1,450 vases were awarded every four years in the greater Panathenaia.\n[…]\nAssuming the number of events was consistent throughout the history of the games and that all prizes were in the form of decorated amphora, dividing the number of unique vases known by the total production run, gives the figure of between 0.5% and 1% of all Greek vases awarded are still extant.\n[…]\nNeils, Jenifer (1992). Goddess and Polis: The Panathenaic Festival in Ancient Athens. Hood Museum of Art and Art and Princeton University Press.\n[…]\nMedia related to Panathenaic amphoras at Wikimedia Commons\n[…]\nhttps://kerameikos.org/id/panathenaic_amphora"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/%C3%82nfora_panatenaica",
        "situacao": "ok",
        "texto": "Ânforas panatenaicas são grandes vasilhames de cerâmicas, feitas de terracota, que continham o óleo que era dado como prêmio aos vencedores das competições esportivas dos Jogos Panatenaicos, de 60 a 70 centímetros de altura.As imagens encontradas nas ânforas panatenaicas são normalmente alegorias à realização de exercícios físicos, uma espécie de culto ao corpo que ressoa com o que se conhece da c\n[…]\nCamila Miranda Martins. Cultura material e iconografia: um estudo das ânforas gregas do festival das Panateneias. V. VIII, n°15/16. Pelotas, RS: Editora da UFPEL, 2011.\n[…]\nCamila Miranda Martins. Cultura material e imagem: um estudo da iconografia das ânforas panatenaicas. p. 147-169. 2014.\n[…]\nJenifer Neils:Goddess and Polis: The Panathenaic Festival in Ancient Athens, Hood Museum of Art, 1992.\n[…]\nMartin Bentz: Panathenäische Preisamphoren: eine athenische Vasengattung und ihre Funktion vom 6. - 4. Jahrhundert v. Chr. Basel, Vereinigung der Freunde Antiker Kunst 1998. (Antike Kunst: Beihefte; 18) ISBN 3-909064-18-3\n[…]\nMartin Bentz; Norbert Eschbach (Hrsg.): Panathenaïka : Symposion zu den Panathenäischen Preisamphoren, Rauischholzhausen 25.11. - 29.11.1998. Mainz, Zabern 2001. ISBN 3-8053-2708-0\n[…]\nPeter Brönsted.On panathenaic vases, and on the holy oil contained in them: which particular reference to some vases of that description now in London. – Letter addressed to W.R. Hamilton, by Chev. P. O. Bröndsted. London: A. J. Valpy, M. A., Printer to the Society, p. 6-17. 1832.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Trirreme",
      "descricao": "Navio de guerra grego movido a remos dispostos em três níveis, base do poder naval de Atenas no século cinco a.C."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Ao contrário da imagem das galés movidas por escravos, quem remava em geral nas trirremes da frota de Atenas?",
    "resposta": "Cidadãos pobres livres",
    "fonte": [
      "https://en.wikipedia.org/wiki/Trireme",
      "https://en.wikipedia.org/wiki/Thetes"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Trireme",
        "situacao": "ok",
        "texto": "A trireme ( TRY-reem; from Latin  trirēmis 'with three banks of oars'; cf. Ancient Greek: τριήρης, romanized: triḗrēs, lit. 'three-rower') was an ancient vessel and a type of galley that was used by the ancient maritime civilizations of the Mediterranean Sea, especially the Phoenicians, ancient Greeks and Romans.\n[…]\nThe Spartan General Brasidas summed up the difference in approach to naval warfare between the Spartans and the Athenians: \"Athenians relied on speed and maneuverability on the open seas to ram at will clumsier ships; in contrast, a Peloponnesian armada might win only when it fought near land in calm and confined waters, had the greater number of ships in a local theater, and if its better-trained marines on deck and hoplites on shore could turn a sea battle into a contest of infantry.\" In addition, compared to the high-finesse of the Athenian navy (superior oarsmen who could outflank and ram enemy triremes from the side), the Spartans (as well as their allies and other enemies of Athens) would focus mainly on ramming Athenian triremes head on.\n[…]\nMorrison, John S.; Coates, John F.; Rankov, N. Boris (2000). The Athenian Trireme: The History and construction of an ancient Greek warship (2nd ed.). Cambridge University Press. ISBN 0-521-56419-0.\n[…]\nWallinga, Herman T. (1993). Ships and Sea-Power Before the Great Persian War: The Ancestry of the Ancient Trireme. E.J. Brill. ISBN 90-04-09225-0.\n[…]\nWelsh, Frank (1988). Building the Trireme. Constable and Company Limited. ISBN 9780094668805.\n[…]\n\"Age of the Trireme\", special issue of Ancient Warfare, 2/2 (2008)\n[…]\nHellenic Navy web page for the reconstructed Olympias trireme\n[…]\nHistory and archeology of the ship – lecture notes – 26. Triremes, from the Centre for Maritime Archaeology of the University of Southampton\n[…]\nThe Trireme Trust"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Thetes",
        "situacao": "ok",
        "texto": "The Solonian constitution was created by Solon in the early 6th century BC. At the time of Solon, the Athenian State was almost falling to pieces in consequence of dissensions between the parties into which the population was divided. Solon wanted to revise or abolish the older laws of Draco. He promulgated a code of laws embracing the whole of public and private life, the salutary effects of whic"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Trirreme",
        "situacao": "ok",
        "texto": "A trirreme (trieres, em grego, trireme em latim) era uma antiga embarcação grega da Antiguidade impelida por remos. A origem desse navio de guerra é incerta, a despeito de autores como Tucídides apontarem seu uso desde o século VIII a.C.\n[…]\nNuma península coalhada por cerca de 3 mil ilhas, o uso de trirremes era intenso e decisivo. Eles eram a maior parte das marinhas do Mediterrâneo a partir de 500 a.C. Esse navio de escravos a remo impulsionou as cidades-estado gregas clássicas e, em particular, Atenas como forças navais. Durante as guerras com a Pérsia, Atenas comandava sozinha mais de 200 desses navios. Foi com trirremes que os gregos obtiveram sua vitória decisiva contra os persas, na Batalha de Salamina.\n[…]\nContudo, em grego existe outra forma de referir às Trirremes, através do termo \"Kontoros\", precedido pelo número de remadores; assim as Trirremes são \"Triakontoros\" (30 remos).\n[…]\nO Olímpia (Ολυμπιάς) é uma reconstrução moderna de uma trirreme grega, construída na década de 1980 para estudar a engenharia e as capacidades navais das antigas embarcações de guerra gregas. Projetada com base em evidências arqueológicas e descrições históricas, a embarcação possui cerca de 37 metros de comprimento e 5,5 metros de largura, sendo movida por aproximadamente 170 remadores dispostos em três fileiras de remos.\n[…]\nConstruída em madeira de carvalho e pinho, a trirreme foi testada em diversas ocasiões, demonstrando sua velocidade de até 9 nós (aproximadamente 17 km/h) e a eficácia das táticas navais utilizadas na Antiguidade, como o diekplous e o periplous. Em 2004, o Olímpia participou da cerimônia de abertura dos Jogos Olímpicos de Atenas, reafirmando sua importância cultural e histórica.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Metecos",
      "descricao": "Estrangeiros livres que residiam em Atenas, pagavam imposto e serviam no exército, mas não tinham direitos políticos."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Além de cidadãos e escravos, Atenas tinha muitos estrangeiros livres que moravam ali, pagavam imposto e não votavam. Que nome recebiam?",
    "resposta": "Metecos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Metic",
      "https://pt.wikipedia.org/wiki/Meteco"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Metic",
        "situacao": "ok",
        "texto": "In ancient Greece, a metic (Ancient Greek: μέτοικος, métoikos: from μετά, metá, indicating change, and οἶκος, oîkos 'dwelling') was a resident of Athens and some other cities who was a citizen of another polis. They held a status broadly analogous to modern permanent residency, being permitted indefinite residence without political rights.\n[…]\nThe history of foreign migration to Athens dates back to the archaic period. Solon was said to have offered Athenian citizenship to foreigners who would relocate to his city to practice a craft. However, metic status did not exist during the time of Solon.\n[…]\nScholars have tended to date the development of metic status to the reforms of Cleisthenes in 508 BC. However, the rate of the increase in the Athenian population in the years following 480 BC is difficult to explain by purely natural growth – suggesting that immigrants to Athens could still become Athenians citizens at this point, and metic status did not yet exist. The first known use of the word metoikos is in Aeschylus' play Persians, first performed in 472 BC.\n[…]\nMetics were subject to a tax called the metoikion, assessed at twelve drachmas per year for metic men and their households, and six for independent metic women. In addition to the metoikion, non-Athenians wishing to sell goods in the agora, including metics, seem to have been liable to another tax known as the xenika.\n[…]\nThe term metic began to lose its distinctive legal status in 4th century BC, when metics were allowed to act in the court without a prostate (patron) and came to an end in Hellenistic Athens, when the purchase of citizenship became very frequent. The census of Demetrius Phalereus in ca. 317 BC gave 21,000 citizens, 10,000 metics and 400,000 slaves (Athenaeus, vi. p. 272 B).\n[…]\nWhitehead D. 1977,  The ideology of the Athenian metic. Cambridge."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Meteco",
        "situacao": "ok",
        "texto": "Metecos (em grego: Μέτοικος) eram os estrangeiros residentes nas Pólis (sing. polis) gregas de Atenas.\n[…]\nExistiam em várias cidades, exceto em Esparta, que não recebia estrangeiros. Atenas, por sua riqueza e preponderância cultural, atraiu muitos estrangeiros que exerciam ofícios como professor, artesão, artista, comerciante. De fato, grande parcela da economia ateniense era realizada pelos metecos.\n[…]\no facto de pertencer à categoria trazia uma série de impedimentos legais, como o de participar da Assembléia, de comandar navios (havia exceções), de adquirir a propriedade da terra, de dirigir cultos públicos, entre outros, além de os metecos serem obrigados a pagar um imposto anual, a metoikia, equivalente a um dia de trabalho.\n[…]\no estatuto de meteco não significa discriminação econômica: os registros de custos de algumas obras públicas atenienses, conservados em pedra, revelam que metecos, escravos e cidadãos recebiam o mesmo valor pelo dia de trabalho.\n[…]\nOutro exemplo é o filósofo Aristóteles, que, sendo cidadão em Estagira, viveu como meteco em Atenas por mais de 40 anos. Um último exemplo é o historiador Heródoto de Halicarnasso, autor da primeira História (livro que narra a guerra entre gregos e persas, assim como faz descrições de vários povos mediterrânicos), também meteco ateniense.\n[…]\nROMÁN, C. G. (1979). \"Los metecos atenienses: un punto de vista sobre las clases sociales en la antigua Atenas\". In: MOSSÉ, Claude, VIDAL-NAQUET, P. Clases y lucha de clases en la Grecia antigua. Madrid, 1979, p. 129 e seguintes.\n[…]\nMOSSÉ, Claude. (1979). Atenas: a história de uma democracia. Brasília, UnB."
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Sete Sábios da Grécia",
      "descricao": "Grupo tradicional de sete pensadores e governantes gregos dos séculos sete e seis a.C., célebres por sua sabedoria prática."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Ao lado de Tales de Mileto, que legislador ateniense era contado entre os Sete Sábios da Grécia?",
    "resposta": "Sólon",
    "distratores": [
      "Péricles",
      "Clístenes",
      "Drácon"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Seven_Sages_of_Greece"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Seven_Sages_of_Greece",
        "situacao": "ok",
        "texto": "The Seven Sages or, alternatively, the Seven Wise Men were the honorary title(s) given to seven philosophers, statesmen, and law-givers of the 7th–6th centuries BCE who were especially renowned for their wisdom.\n[…]\nThe list of the seven sages given in Plato's Protagoras comprises:\n[…]\nSolon of Athens (c. 638 BCE – c. 558 BCE) was a famous legislator and reformer from Athens, framing the laws that shaped the Athenian democracy.\n[…]\nDiogenes Laërtius writes in his account of the life of Pyrrho, the founder of Pyrrhonism, that the Seven Sages of Greece were considered to be precursors of Pyrrho's philosophical skepticism because the Delphic Maxims were skeptical. \"The maxims of the Seven Wise Men, too, they call skeptical; for instance, 'Observe the Golden Mean', and 'A pledge is a curse at one's elbow', meaning that whoever plights his troth steadfastly and trustfully brings a curse on his own head.\"\n[…]\nAccording to a number of moralistic stories, there was a golden tripod (or, in some versions of the story, a bowl or cup) which was to be given to the wisest. Allegedly, it passed in turn from one of the seven sages to another, beginning with Thales, until one of them (either Thales or Solon, depending on the story) finally dedicated it to Apollo who was held to be wisest of all.\n[…]\nSeven Sages of the Bamboo Grove, seven Chinese scholars and mystics\n[…]\nLaërtius, Diogenes. \"Book I: The Seven Sages\" . Lives of the Eminent Philosophers. Vol. 1:1. Translated by Hicks, Robert Drew (Two volume ed.). Loeb Classical Library.\n[…]\nSeven Sages of Greece with illustrations and further links.\n[…]\nJona Lendering's article Seven Sages includes a chart of various canonical lists.\n[…]\nSentences of the Seven Sages"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sete_S%C3%A1bios_da_Gr%C3%A9cia",
        "situacao": "ok",
        "texto": "Os Sete Sábios da Grécia era o título dado a sete filósofos dos séculos VII e VI a.C que eram conhecidos por sua sabedoria e ideias revolucionárias para a época porém é válido ressaltar que a lista mudava com o tempo\n[…]\nFora do âmbito mítico, vinte e dois homens foram citados como pertencentes ao grupo dos sete sábios, sendo eles: Tales, Pítaco, Bias, Sólon, Quilon de Esparta, Cleobulo, Periandro, Míson, Aristodemo, Epiménides, Leofanto, Pitágoras, Anacarses, Epicarmo, Acusilau, Orfeu, Pisístrato, Ferécides de Siro, Hermióneo, Laso, Panfilo e Anaxágoras. Nunca houve um consenso entre os historiadores, os únicos que sempre pertenceram ao grupo são os quatro primeiros da lista.\n[…]\nNo texto atribuído a Higino, os sete sábios são: Pítaco de Mitilene, Periandro de Corinto, Tales de Mileto, Sólon de Atenas, Quílon de Esparta, Cleóbulo de Lindos e Bias.\n[…]\nPlutarco lista os sete sábios como Tales, Bias, Pítaco, Solon, Quílon, Cleóbulo e Anacarses.\n[…]\nPlatão, no diálogo intitulado Protágoras, expõe a seguinte lista: Tales, Pítacos, Bias, Solon, Cleóbulo, Mison e Quílon.\n[…]\nComo características, os sábios eram muito sintéticos em suas afirmações. De Sólon, temos: \"Se sabes, cala\"; de Bias: \"Odeia o falar ligeiro\"; de Cleobulo: \"Ser ávido de escutar e não de falar\" e de Quilon de Esparta: \"Que a tua língua não corra à frente do teu pensamento\". De Bias temos a seguinte máxima: \"A maioria dos homens é perversa\".\n[…]\nTales de Mileto\n[…]\nSólon de Atenas",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "A Escola de Atenas",
      "descricao": "Afresco de Rafael, pintado entre 1509 e 1511 no Palácio Apostólico do Vaticano, que reúne filósofos da Grécia Antiga."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No centro do afresco A Escola de Atenas, pintado por Rafael no Vaticano, aparecem lado a lado quais dois filósofos gregos?",
    "resposta": "Platão e Aristóteles",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_School_of_Athens"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_School_of_Athens",
        "situacao": "ok",
        "texto": "The School of Athens (Italian: Scuola di Atene) is a fresco by the Italian Renaissance artist Raphael. It was painted between 1509 and 1511 as part of a commission by Pope Julius II to decorate the rooms now called the Stanze di Raffaello in the Apostolic Palace in Vatican City.\n[…]\nBy contrast, Aristotle, slightly ahead of him, is in mature manhood, wearing sandals and gold-trimmed robes, and the youths about them seem to look his way. In addition, these two central figures gesture along different dimensions: Plato vertically, upward along the picture-plane, into the vault above; Aristotle on the horizontal plane at right-angles to the picture-plane (hence in strong foreshortening), initiating a flow of space toward viewers.\n[…]\nIt is popularly thought that their gestures indicate central aspects of their philosophies: for Plato, his Theory of Forms, and for Aristotle, an emphasis on concrete particulars. Many interpret the painting to show a divergence of the two philosophical schools of classical Western philosophy. Plato argues a sense of timelessness whilst Aristotle looks into the physicality of life and the visible world.\n[…]\nRowe and Rees 1956 suggested that both statue groups share a similar subject to the Plato's Academy mosaic, with the Saqqara figures identified as: \"(1) Pindare, (2) Démétrios de Phalère, (3) x (?), (4) Orphée (?) aux oiseaux, (5) Hésiode, (6) Homère, (7) x (?), (8) Protagoras, (9) Thalès, (10) Héraclite, (11) Platon, (12) Aristote (?).\" However, there have been other suggestions (e.g. Mattusch 2008). Plato and Thales are commonly identified as central figures.\n[…]\n3 Cool Things You Might Not Know About Raphael's School of Athens\n[…]\nThe School of Athens in Britannica.\n[…]\nMedia related to The School of Athens by Raphael at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Escola_de_Atenas",
        "situacao": "ok",
        "texto": "A Escola de Atenas (Scuola di Atene no original) é uma das mais famosas pinturas do renascentista italiano Rafael e representa a Academia de Atenas. Foi pintada entre 1509 e 1510 na Stanza della Segnatura sob encomenda do Vaticano. A pintura já foi descrita como \"a obra-prima de Rafael e a personificação perfeita do espírito clássico da Renascença\".\n[…]\nA \"Escola de Atenas\" é um dos painéis que compõem um grupo de quatro afrescos principais que retratam ramos distintos do conhecimento. Cada tema é identificado acima por um tondo em separado contendo uma figura feminina majestosa sentada nas nuvens, com putti carregando frases como: “Buscar o conhecimento das causas”, “Inspiração Divina”, “Conhecimento das coisas divinas” (Disputa), “Para cada um o que lhe é devido”.\n[…]\nNo entanto, o afresco foi até recentemente interpretado como uma exortação à filosofia e, de maneira mais profunda, como uma representação visual do papel do amor em elevar as pessoas para o conhecimento superior, em grande parte em dívida com as teorias contemporâneas de Marsilio Ficino e outros pensadores neoplatônicos ligados a Rafael.\n[…]\nA identidade de alguns dos filósofos como Platão ou Aristóteles, são inegáveis. Além disso, as identificações de figuras de Rafael tem sido sempre hipotéticas. Para complicar, além de Vasari alguns receberam múltiplas identificações, não só com antigos, mas também com figuras contemporâneas a Rafael.\n[…]\nLuitpold Dussler conta entre aqueles que podem ser identificados com alguma certeza: Platão, Aristóteles, Sócrates, Pitágoras, Euclides, Ptolomeu, Zoroastro, o próprio Rafael, Il Sodoma e Diógenes. Outras identificações ele assegura serem \"mais ou menos especulativas\".\n[…]\n14: Platão segurando o Timeu (Leonardo da Vinci).\n[…]\n15: Aristóteles segurando Ética a Nicômaco\n[…]\nR: Apeles (Rafael).\n[…]\nSalas de Rafael\n[…]\nPinturas de Rafael",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Filipe II da Macedônia",
      "descricao": "Rei da Macedônia de 359 a 336 a.C., pai de Alexandre, o Grande, que impôs o domínio macedônio sobre a Grécia."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Durante o cerco de uma cidade grega, Filipe II da Macedônia, pai de Alexandre, foi atingido por uma flecha. Que parte do corpo perdeu?",
    "resposta": "Um olho",
    "fonte": [
      "https://en.wikipedia.org/wiki/Philip_II_of_Macedon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Philip_II_of_Macedon",
        "situacao": "ok",
        "texto": "Philip II of Macedon (Ancient Greek: Φίλιππος, romanized: Phílippos; 382 BC – October 336 BC) was the king (basileus) of Macedon from 359 BC until his death in 336 BC.\n[…]\nKing Philip was assassinated in October 336 BC (perhaps 25 October) at Aigai, the ancient capital of the kingdom of Macedon. Philip and his royal court were gathered in order to celebrate the marriage of Alexander I of Epirus and Cleopatra of Macedon, Philip's daughter by his fourth wife Olympias. While the king was entering into the town's theatre, he was unprotected in order to appear approachable to the Greek diplomats and dignitaries who were present at that time.\n[…]\nAs asserted by some modern historians, had the older and more settled Philip been the one in charge of the war against Persia, he might have been content to make relatively moderate conquests, e.g., making Anatolia into a Macedonian province, and, unlike his son Alexander, not have wanted to push further into an overall conquest of Persia and further campaigns in India.\n[…]\nThe heroon at Vergina in Macedonia (the ancient city of Aegae – Αἰγαί) is thought to have been dedicated to the worship of the family of Alexander the Great and may have housed the cult statue of Philip. It is probable that he was regarded as a hero or deified on his death. Though the  Macedonians did not consider Philip a god, he did receive other forms of recognition from other Greeks, e.g.\n[…]\nFredric March portrayed Philip II of Macedon in the film Alexander the Great (1956).\n[…]\nVal Kilmer portrayed Philip II of Macedon in Oliver Stone's 2004 biopic Alexander.\n[…]\nPhilip II appears in the Battle of Chaeronea in Rome: Total War: Alexander"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Filipe_II_da_Maced%C3%B3nia",
        "situacao": "ok",
        "texto": "Filipe II da Macedônia (português brasileiro) ou Macedónia (português europeu) (em grego clássico: Φίλιππος; 382 a.C. – outubro de 336 a.C.) foi o rei (basileus) da Macedônia de 359 a.C. até sua morte em 336 a.C. A ascensão da Macedônia, de um reino inicialmente na periferia dos assuntos da Grécia clássica, a um poder que passou a dominar a Grécia Antiga no espaço de menos de 25 anos, deveu-se em \n[…]\nEm 355–354 a.C., ele sitiou Metone, a última cidade no Golfo Termaico controlada por Atenas. Durante o cerco, Filipe foi ferido no olho direito, que foi posteriormente removido cirurgicamente. Apesar da chegada de duas frotas atenienses, a cidade caiu em 354 a.C. Filipe também atacou Abdera e Maroneia, na costa trácia (354–353 a.C.).\n[…]\nO rei Filipe foi assassinado em outubro de 336 a.C. (talvez 25 de outubro) em Egas, a antiga capital do reino da Macedônia. Filipe e sua corte real estavam reunidos para celebrar o casamento de Alexandre I do Épiro e Cleópatra da Macedônia, filha de Filipe com sua quarta esposa Olímpias. Quando o rei estava entrando no teatro da cidade, ele estava desprotegido para parecer acessível aos diplomatas e dignitários gregos que estavam presentes naquela época.\n[…]\nAlém disso, os restos do crânio mostram danos no olho direito causados pela penetração de um objeto (historicamente registrado como uma flecha).\n[…]\nO herôon em Vergina, na Macedônia (a antiga cidade de Egas – Αἰγαί), é considerado dedicado ao culto da família de Alexandre, o Grande, e pode ter abrigado a estátua de culto de Filipe. É provável que ele fosse considerado um herói ou divinizado em sua morte.\n[…]\nVal Kilmer interpretou Filipe II da Macedônia na cinebiografia de Oliver Stone de 2004, Alexandre.\n[…]\nPlutarco: Vida de Alexandre\n[…]\nCrepúsculo da Pólis e a ascensão da Macedônia (Filipe, Demóstenes e a Queda da Pólis). Cursos da Universidade de Yale, Aula 24. (Introdução à História Grega Antiga)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Teatro da Grécia Antiga",
      "descricao": "Tradição teatral grega dos séculos seis a quatro a.C., com tragédias, comédias e dramas satíricos encenados em festivais."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "No teatro da Grécia Antiga, quem interpretava as personagens femininas, como Medeia e Antígona?",
    "resposta": "Atores homens",
    "fonte": [
      "https://en.wikipedia.org/wiki/Theatre_of_ancient_Greece"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Theatre_of_ancient_Greece",
        "situacao": "ok",
        "texto": "A theatrical culture flourished in ancient Greece from 700 BC. At its centre was the city-state of Athens, which became a significant cultural, political, and religious place during this period, and the theatre was institutionalised there as part of a festival called the Dionysia, which honoured the god Dionysus. Tragedy (late 500 BC), comedy (490 BC), and the satyr play were the three dramatic ge\n[…]\nModern Western theatre comes, in large measure, from the theatre of ancient Greece, from which it borrows technical terminology, classification into genres, and many of its themes, stock characters, and plot elements.\n[…]\nEffectively, the mask transformed the actor as much as memorization of the text. Therefore, performance in ancient Greece did not distinguish the masked actor from the theatrical character.\n[…]\nThe modern method to interpret a role by switching between a few simple characters goes back to changing masks in the theatre of ancient Greece.\n[…]\nLoscalzo, Donato, Il pubblico a teatro nella Grecia antica, Roma 2008\n[…]\nPadilla, Mark William (editor), \"Rites of Passage in Ancient Greece: Literature, Religion, Society\", Bucknell University Press, 1999. ISBN 0-8387-5418-X\n[…]\nWise, Jennifer, Dionysus Writes: The Invention of Theatre in Ancient Greece, Ithaca 1998. review\n[…]\nAncient Greek theatre history and articles\n[…]\nDrama lesson 1: The ancient Greek theatre\n[…]\nAncient Greek Theatre\n[…]\nThe Ancient Theatre Archive, Greek and Roman theatre architecture – Dr. Thomas G. Hines, Department of Theatre, Whitman College\n[…]\nGreek and Roman theatre glossary\n[…]\nSearchable database of monologues for actors from Ancient Greek Theatre\n[…]\nLogeion: A Journal of Ancient Theatre with free access which publishes original scholarly articles including its reception in modern theatre, literature, cinema and the other art forms and media, as well as its relation to the theatre of other periods and geographical regions."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Teatro_na_Gr%C3%A9cia_Antiga",
        "situacao": "ok",
        "texto": "O teatro na Grécia antiga teve suas origens ligadas a Dionísio, divindade da vegetação, da fertilidade e do vinho, cujos rituais tinham um caráter orgiástico. Durante as celebrações, que duravam seis dias, em honra ao deus, em meio a procissões e com o auxílio de fantasias e máscaras, eram entoados cantos líricos, os ditirambos, que mais tarde evoluíram para a forma de representação plenamente cên\n[…]\nOutros autores que se destacaram nesta época são Quérilo, Pratinas e Frínico, cada qual introduzindo mudanças no estilo da representação. Destes, Frínico é o mais conhecido, vencedor de competições e autor de tragédias com temas explorados mais tarde na era dourada do teatro grego, como As Danaides, As Mulheres da Fenícia e Alceste, sendo o primeiro a introduzir personagens femininos. Foi ainda o primeiro a abordar um tema contemporâneo com a peça A Queda de Mileto, produzida em 493 a.C.\n[…]\nOs atores do teatro grego eram todos homens, e interpretavam vários papéis durante o mesmo espectáculo. Na tragédia existiam três atores e na comédia quatro. Os atores utilizavam máscaras e fatos que poderiam ser pesados. Na tragédia os atores utilizavam uma túnica até aos pés, chamado quíton, e o coturno; na comédia usavam-se roupas próximas às utilizadas pelos cidadãos e calçavam-se sandálias.\n[…]\nEmbora sejam registrados muitos autores especialmente na época áurea do teatro grego, somente de quatro nos chegaram peças integrais, todos eles de Atenas: Ésquilo, Sófocles e Eurípedes na tragédia, e Aristófanes na comédia. Suas criações, e mais referências de fontes secundárias como Aristóteles, são a base para o conhecimento do teatro da Grécia Antiga.\n[…]\nDos teatros da Antiga Grécia alguns dos mais importantes são o Teatro de Epidauro, o Teatro de Dodona, o Odeon de Herodes Ático, o Teatro de Delfos, o Teatro de Segesta, o Teatro de Siracusa e o Teatro de Dionísio.\n[…]\nTeatro da Roma Antiga",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Cerâmica de figuras vermelhas",
      "descricao": "Técnica de pintura de vasos surgida em Atenas por volta de 530 a.C., em que as figuras ficam na cor do barro."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Na cerâmica ateniense de figuras vermelhas, as figuras ficam com a cor do barro. E de que cor é pintado o fundo do vaso?",
    "resposta": "Preto",
    "fonte": [
      "https://en.wikipedia.org/wiki/Red-figure_pottery"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Red-figure_pottery",
        "situacao": "ok",
        "texto": "Red-figure pottery (Ancient Greek: ἐρυθρόμορφα, romanized: erythrómorpha) is a style of ancient Greek pottery in which the background of the pottery is painted black while the figures and details are left in the natural red or orange color of the clay.\n[…]\nIt developed in Athens around 520 BC and remained in use until the late 3rd century AD. It replaced the previously dominant style of black-figure pottery within a few decades. Its modern name is based on the figural depictions in red color on a black background, in contrast to the preceding black-figure style with black figures on a red background. The most important areas of production, apart from Attica, were in Southern Italy. The style was also adopted in other parts of Greece.\n[…]\nAttic red-figure vases were exported throughout Greece and beyond. For a long time, they dominated the market for fine ceramics. Few centers of pottery production could compete with Athens in terms of innovation, quality and production capacity. Of the red-figure vases produced in Athens alone, more than 40,000 specimens and fragments survive today. From the second-most important production center, Southern Italy, more than 20,000 vases and fragments are preserved.\n[…]\nAbout 65,000 red-figure vases and vase fragments are known to have survived. The study of ancient pottery and of Greek vase painting began already in the Middle Ages. Restoro d'Arezzo dedicated a chapter (Capitolo delle vasa antiche) of his description of the world to ancient vases (Della composizione del mondo, libro VIII, capitolo IV). He considered especially the clay vessels as perfect in terms of shape, colour, and artistic style.\n[…]\nSparkes, Brian A. 1996. The Red and the Black: Studies In Greek Pottery. London: Routledge."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cer%C3%A2mica_de_figuras_vermelhas",
        "situacao": "ok",
        "texto": "A cerâmica de figuras vermelhas ou registro de pintura vermelha em cerâmica é um estilo de cerâmica grega, depois adotado também na Magna Grécia, em que o fundo é pintado de preto, enquanto a figura em si não é pintada. Assim, as figuras tomam o tom avermelhado do barro ateniense depois que ele é cozido na presença de oxigênio.\n[…]\nEsta técnica foi desenvolvida por volta de 530 a.C., pelo Pintor de Andócides substituindo o mais antigo registro de pintura negra em cerâmica grega, com exceção das ânforas panatenaicas, pois o novo processo permitia mais detalhes intrincados nos elementos pintados. Quando progrediu, foi uma de várias técnicas que os artistas experimentaram.\n[…]\nAs técnicas e convenções de registros de pintura vermelha foram desenvolvidas por um grupo de artistas conhecido como Grupo Pioneiro, entre eles Eufrônio e Eutimidas. Tornou-se a técnica predominante e permaneceu popular até o século IV a.C.\n[…]\nO registro de pintura vermelha em cerâmica grega é considerado o ápice da cerâmica grega, e a maioria dos vasos ou taças hoje famosos por suas pinturas requintadas, são pintados no estilo de registro de pintura vermelha.\n[…]\nCriar uma peça completa com um registro em figuras vermelhas requeria colaboração estreita entre o oleiro e o pintor. O oleiro moldava a peça em argila e a entregava ao pintor enquanto o barro ou a argila  ainda estava úmida. O pintor pintava o vaso usando um instrumento como uma bolsa de pastel com um bico de seringa de osso ou madeira para expor as linhas de detalhes finos e cores de fundo.\n[…]\nCerâmica de figuras negras\n[…]\nJarro de água com pintura vermelha no Museu Britânico;",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Hoplitódromo",
      "descricao": "Corrida dos Jogos Olímpicos da Antiguidade em que os atletas corriam com equipamento de soldado."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "No hoplitódromo, uma das corridas dos Jogos de Olímpia, os atletas corriam carregando que equipamento de guerra?",
    "resposta": "Escudo e capacete",
    "fonte": [
      "https://en.wikipedia.org/wiki/Hoplitodromos"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hoplitodromos",
        "situacao": "ok",
        "texto": "The hoplitodromos or hoplitodromia (Greek: ὁπλιτόδρομος, ὁπλιτοδρομία, English translation: \"race of the hoplites\") was an ancient foot race, part of the Olympic Games and the other Panhellenic Games. It was the last foot race to be added to the Olympics, first appearing at the 65th Olympics in 520 BC, and was traditionally the last foot race to be held.\n[…]\nUnlike the other races, which were generally run in the nude, the hoplitodromos required competitors to run wearing the hopla, the helmet, greaves and heavy shield (aspis) from which the hoplite infantryman took its name, bringing the total encumbrance to at least 6 kg (12 pounds). As the hoplitodromos was one of the shorter foot races, the heavy armor and shield were less a test of endurance than one of sheer muscular strength.\n[…]\nAt Olympia and Athens, the hoplitodromos track, like that of the diaulos, was a single lap of the stadium (or two stades; about 350–400 m). Since the track made a hairpin turn at the end of the stadium, there was a turning post called a kampter (καμπτήρ) at each end of the track to assist the sprinters in negotiating the tight turn—a task complicated by the shield carried in the runner's off hand.\n[…]\nThe hoplitodromos, with its military accoutrements, was as much a military training exercise as an athletic contest. Encounters with units of expert Persian archers, first occurring shortly before the hoplitodromos was introduced in 520 BC, must have suggested the need for training the Greek armored infantry in fast \"rushing\" maneuvers during combat to minimize the time spent exposed to Persian arrows.\n[…]\nAdditionally, the original 400-meter length of the hoplitodromos coincides well with the effective area of the Persian archers' zone of fire, suggesting an explicit military purpose for this type of training.\n[…]\nTübingen Hoplitodromos Runner"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hoplit%C3%B3dromo",
        "situacao": "ok",
        "texto": "Hoplitódromo (do grego hoplítés, \"armado\" e dromos, \"corrida\") foi uma modalidade de corrida da Grécia Antiga em que os participantes competiam vestidos com a panóplia, mas sem a couraça. Foi incorporada ao 65° Jogos Olímpicos no ano de 520 a.C. e a outros Jogos Pan-helênicos em 498 a.C. O primeiro vencedor olímpico foi Damareto de Heraea.\n[…]\nOs hoplitas competiam portando um escudo, elmo e cnêmides, sendo que o uso das grevas acabou abolido após 450 a.C. O prêmio do vencedor era de valor simbólico em vez financeiro, e consistia na tradicional coroa de oliveira. Longe de ser meramente esportivo, encontros com arqueiros de elite do exército persa talvez foram um incentivo à criação do hoplitódromo, já que este deixava a infantaria treinada e mais ágil para manobras evasivas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Policromia na escultura grega",
      "descricao": "Prática de pintar com cores as estátuas e os templos da Grécia Antiga, cujos pigmentos se perderam com o tempo."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Hoje vemos templos e estátuas gregas no branco do mármore. Como eles eram originalmente, na Antiguidade?",
    "resposta": "Pintados com cores vivas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Polychrome"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Polychrome",
        "situacao": "ok",
        "texto": "Polychrome is the \"practice of decorating architectural elements, sculpture, etc., in a variety of colors.\" The term is used to refer to certain styles of architecture, pottery, or sculpture in multiple colors.\n[…]\nSimilarly to the ancient art of other regions, Ancient Near Eastern art was polychrome, bright colours being often present. Many sculptures no longer have their original colouring today, but there are still examples that keep it. One of the best is the Ishtar Gate, the eighth gate to the inner city of Babylon (in the area of present-day Hillah, Babil Governorate, Iraq). It was constructed in c. 575 BC by the order of King Nebuchadnezzar II on the north side of the city.\n[…]\nIn Wallachia, during the late 17th and early 18th centuries, the Brâncovenesc style was popular in architecture and decorative arts. It is named after Prince Constantin Brâncoveanu, during whose reign it was developed. Some of the churches in this style have polychrome facades, decorated with murals, like the church of the Stavropoleos Monastery in Bucharest, Romania.\n[…]\nThe term polychromatic means having several colors. It is used to describe light that exhibits more than one color, which also means that it contains radiation of more than one wavelength. The study of polychromatics is particularly useful in the production of diffraction gratings.\n[…]\nEncarnación Spanish form of polychrome sculpture\n[…]\nMonochrome (opposite of polychrome)\n[…]\nFortenberry, Diane (2017). The Art Museum (Revised ed.). London: Phaidon Press. ISBN 978-0-7148-7502-6. Archived from the original on April 23, 2021. Retrieved April 23, 2021.\n[…]\nResearch in the field of ancient polychrome sculpture In German\n[…]\nPolychromatic, Reference.com's definition."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Policromia",
        "situacao": "ok",
        "texto": "Policromia (do grego antigo πολυχρωμία, πολύ (poly) = muitos ; χρώμα (khrôma) = cores) é o estado de um corpo ou sistema cujas partes têm várias cores. Nesse sentido é mais que uma cor, ou seja, não é um estado de monocromia (uma cor = monocromático). No período histórico denominado 'antiguidade', povos, como os Assírios e os Caldeus pintavam as estátuas e as paredes de algumas construções com dis\n[…]\nPolicromia é a arte feita com várias cores. É o emprego de várias cores no mesmo trabalho, \"qualidade de um corpo com diversas cores\".\n[…]\nAlguns termos derivados ou relacionados a Policromia são: policresto, policroísmo, policroíta, policromado, policromar, policrmoasia, policromático (utilizado como adjetivo, por exemplo para designar o conjunto de cores utilizados na elaboração de selos postais e outros documentos filatélicos), policromismo, policromizar, policromo.\n[…]\nA policromia pode ser obtida através da combinação das três cores primárias (amarelo; azul; vermelho) a mistura dessas cores pode formar novas e o preto e o branco fazem novas tonalidades, mas basicamente um trabalho policromatico é um trabalho com muitas cores. As ilustrações aparecem com cores bonitas. Tonalidades e matizes dão uma agradável sensação a quem olha. Mas, para imprimir, as cores foram separadas.\n[…]\nNão resta dúvida de que, para se obter um resultado harmônico da combinação de cores, é necessário um certo critério, bom-senso e um mínimo de conhecimento do uso dos materiais de pintura mas a experiência pessoal é ainda mais decisiva e é o que alimenta a revolução constante da arte.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Clepsidra",
      "descricao": "Relógio de água usado na Grécia Antiga, entre outras funções, para marcar o tempo dos discursos nos tribunais de Atenas."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Nos tribunais de Atenas, o tempo de fala da acusação e da defesa era controlado por um relógio que funcionava com o quê?",
    "resposta": "Água",
    "fonte": [
      "https://en.wikipedia.org/wiki/Water_clock"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Water_clock",
        "situacao": "ok",
        "texto": "A water clock, or clepsydra (from Ancient Greek  κλεψύδρα (klepsúdra) 'pipette, water clock'; from  κλέπτω (kléptō) 'to steal' and  ὕδωρ (hydor) 'water'; lit. ' water thief'), is a timepiece by which time is measured by the regulated flow of liquid into (inflow type) or out from (outflow type) a vessel, and where the amount of liquid can then be measured.\n[…]\nThe word \"clepsydra\" comes from the Greek meaning \"water thief\". The Greeks considerably advanced the water clock by tackling the problem of the diminishing flow. They introduced several types of the inflow clepsydra, one of which included the earliest feedback control system. Ctesibius invented an indicator system typical for later clocks such as the dial and pointer. The Roman engineer Vitruvius described early alarm clocks, working with gongs or trumpets.\n[…]\nA commonly used water clock was the simple outflow clepsydra. This small earthenware vessel had a hole in its side near the base. In both Greek and Roman times, this type of clepsydra was used in courts for allocating periods of time to speakers. In important cases, such as when a person's life was at stake, it was filled completely, but for more minor cases, only partially.\n[…]\nIn 718, Unified Silla established the system of clepsydra for the first time in Korean history, imitating the Tang Dynasty. In 1434, during Joseon rule, Chang Yŏngsil (Korean: 장영실; Hanja: 蔣英實), a palace guard and later chief court engineer, constructed the Borugak Jagyeongnu or self-striking water clock of Borugak Pavilion for Sejong the Great.\n[…]\nTherefore, a water clock with such a nozzle that keeps good time at some given temperature would gain or lose about half an hour per day if it were one degree Celsius warmer or cooler. To make it keep time within one minute per day would require its temperature to be controlled within 1⁄30°C (about 1⁄17°F)."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Clepsidra",
        "situacao": "ok",
        "texto": "A clepsidra ou relógio de água foi um dos primeiros sistemas criados pela humanidade para medir o tempo. Trata-se de um dispositivo movido a água, que funciona com o auxílio da força da gravidade. Atribui-se ao inventor grego Ctésibios a criação de um mecanismo de controle realimentado para regulação do nível de fluido do equipamento, tornando este um dos primeiros dispositivos automáticos, rudime\n[…]\nAssocia-se a clepsidra a duas fontes gregas Os textos acerca da clepsidra são bastante numerosos. Pausânias de Esparta indica claramente a situação diante da gruta de Pan e de Apolo, ao pé das descida da Acrópole de Atenas e quase sob o Propileu. O viajante grego cita (IV, 31 et 33) uma outra fonte do nome \"clepsidra\", situada na Acrópole do monte Ithome e cuja água alimentava a fonte Arsinoe, na praça do mercado de Messene:\n[…]\nEm Messene, a fonte Clepsidra (conforme Pausânias, a fonte em cujas águas as ninfas Itome e Neda, que amamentaram Zeus, o lavaram depois que os deuses Curetes salvaram Zeus da barbárie de seu pai Cronos (Saturno (mitologia), tempo). Essa é a água de Arsinoe já citada.: A fonte Clepsidra fica no ponto mais baixo da estrada que vai ao santuário de Zeus' Ithomatos, bem próximo ao templo de Ártemis Laphria .\n[…]\nEm Atenas sob a Acrópole, a água da fonte Clepsidra alimentava a enorme Clepsidra Torre dos Ventos - relógio hidráulico da Ágora.\n[…]\nClepsidras mais aperfeiçoadas vieram a ser feitas pelos árabes. Eram instrumentos com função mais decorativa do que de medição do tempo. Por exemplo, em 801, o califa de Bagdá, Harune Arraxide, presenteou, por meio de seu embaixador e dois monges de Jerusalém, uma clepsidra ao Imperador do Sacro Império Romano-Germânico, Carlos Magno. Tratava-se de uma peça movida a vazão de água, feita em bronze adamascado de ouro com um mostrador.\n[…]\nAs impurezas da água\n[…]\nA temperatura da água\n[…]\nRelógio\n[…]\nHistória dos dispositivos de medição do tempo",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Liturgia (Grécia Antiga)",
      "descricao": "Serviço público em Atenas, como equipar um navio de guerra ou custear um coro de teatro, financiado por um cidadão."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Em Atenas, a liturgia, palavra hoje ligada aos cultos religiosos, era um serviço público, como equipar um navio de guerra. Quem pagava por ele?",
    "resposta": "Os cidadãos ricos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Liturgy_(ancient_Greece)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Liturgy_(ancient_Greece)",
        "situacao": "ok",
        "texto": "The liturgy (Greek: λειτουργία or λῃτουργία, leitourgia, from λαός / Laos, \"the people\" and the root ἔργο / ergon, \"work\" ) was in ancient Greece a public service established by the city-state whereby its richest members (whether citizens or resident aliens) more or less voluntarily financed the State with their personal wealth. It took its legitimacy from the idea that \"personal wealth is possess\n[…]\nThe liturgist (λειτουργός / leitourgós),  the person in charge of a liturgy, was appointed by the magistrates. They started by asking for volunteers, and then designated those who seemed most able to take charge. In Athens, at the time of Aristotle, it fell to the eponymous archon to designate the religious choregoi for all holidays, except the Lenaia comedy competition, which was in the archon basileus's competency. The trierarchs were selected by the strategos responsible for the symmoriai.\n[…]\n\"It was an enterprise of which every citizen could be proud, and, if he was politically engaged, which allowed him to triumph over his audience, especially if he was the defendant in a political trial.\" (\"C'était une entreprise dont tout citoyen aimait à s'enorgueillir et, s'il était politiquement engagé, dont il se prévalait devant son auditoire, surtout s'il était l'accusé d'un process politique.\") The honorific inscriptions available show that, regularly, some wealthy citizens or resident aliens \"had eagerly discharged them [their public services] all\", by volunteering (ἐθελοντής), as Demosthenes had in 349 BC., for sometimes very expensive liturgies which they could escape.\n[…]\nAs a result, to avoid breaking the bonds between social groups,  the desire of the richest to show off their wealth (itself the cause of social tension)  was channeled into the transformation of the liturgies into a system of public philanthropy."
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Helenos",
      "descricao": "Nome que os gregos antigos davam a si mesmos, derivado de Heleno, ancestral mítico; a Grécia era a Hélade."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome gregos foi dado pelos romanos. Como os gregos antigos chamavam a si mesmos?",
    "resposta": "Helenos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Names_of_the_Greeks",
      "https://en.wikipedia.org/wiki/Hellenes"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Names_of_the_Greeks",
        "situacao": "ok",
        "texto": "The Greeks (Greek: Έλληνες) have been identified by many ethnonyms. The most common native ethnonym is Hellene (Ancient Greek: Ἕλλην), pl. Hellenes (Ἕλληνες); the name Greeks (Latin: Graeci) was used by the ancient Romans and gradually entered the European languages through its use in Latin.\n[…]\nAlcman mentions that the mothers of Hellenes were Graikoi.\n[…]\nMichael Psellos thought it a compliment when Emperor Romanos III praised him for being raised \"in the Hellenic way\" and a weakness for Emperor Michael IV for being completely devoid of a Hellenic education, while Anna Komnene claimed that she had \"carried the study of Hellenic to the highest pitch\".\n[…]\nThe classicist trend was soon balanced by the Greek Great Idea that sought to recover Constantinople and reestablish the Byzantine Empire for all Greeks. As the Prime Minister, Ioannis Kolettis, proclaimed in front of Parliament in 1844, \"The Kingdom of Greece is not Greece; it is only part of it, a small and poor part of Greece […]. There are two great centers of Hellenism. Athens is the capital of the Kingdom. Constantinople is the great capital, the City, dream and hope of all Greeks.\"\n[…]\nSome of the children ran to see what Greek soldiers looked like; \"What are you looking at?\", one of them asked; \"At Hellenes\", the children replied; \"Are you not Hellenes yourselves?\", a soldier retorted; \"No, we are Romans\", the children replied; which might seem odd at a first glance, but indicates that in parts of Greece the locals self-identified as a continuation of the Eastern, Greek-speaking part of the Roman Empire (Ρωμιοί), along with their Greek identity.\n[…]\nHellen\n[…]\nSteven Runciman, \"Byzantine and Hellene in the 14th century\"\n[…]\nAntonios Hatzis, Elle, Hellas, Hellene, Athens, 1935–1936\n[…]\nJ. Juthner, Hellenen und Barbaren, Leipzig, 1923"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Hellenes",
        "situacao": "ok",
        "texto": "Greeks or Hellenes (; Greek: Έλληνες, Éllines [ˈelines]) are an ethnic group indigenous to what is now Greece, Cyprus, Turkey, parts of Egypt and Syria, southern Italy, southern Albania, and to a lesser extent, other countries surrounding the Eastern Mediterranean and the Black Sea. They form a nation within Greece and Cyprus and a significant diaspora (omogenia) around the world.\n[…]\nThese largely rhetorical expressions of Hellenic identity were confined within intellectual circles, but were continued by Byzantine intellectuals who participated in the Italian Renaissance.\n[…]\nNotable modern Greek politicians include Ioannis Kapodistrias, founder of the First Hellenic Republic, reformist Charilaos Trikoupis, Eleftherios Venizelos, who marked the shape of modern Greece, social democrats Georgios Papandreou and Alexandros Papanastasiou, Konstantinos Karamanlis, founder of the Third Hellenic Republic, and socialist Andreas Papandreou.\n[…]\nWith respect to personal names, the two main influences are Christianity and classical Hellenism; ancient Greek nomenclatures were never forgotten but have become more widely bestowed from the 18th century onwards. As in antiquity, children are customarily named after their grandparents, with the first born male child named after the paternal grandfather, the second male child after the maternal grandfather, and similarly for female children.\n[…]\nWorld Council of Hellenes Abroad (SAE), Umbrella Diaspora Organization\n[…]\nWaterloo Institute for Hellenistic Studies\n[…]\nHellenic Canadian Board of Trade\n[…]\nHellenic Canadian Lawyers Association\n[…]\nHellenic Canadian Congress of British Columbia\n[…]\nHellenic-American Chamber of Commerce\n[…]\nHellenic-Argentine Chamber of Industry and Commerce (C.I.C.H.A.)\n[…]\nAHEPA – American Hellenic Educational Progressive Association\n[…]\nHellenic Heritage Foundation\n[…]\nHellenic Home for the Aged\n[…]\nHellenic Hope Center\n[…]\nHellenic Scholarships"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Nomes_dos_gregos",
        "situacao": "ok",
        "texto": "Os gregos são conhecidos por diversos nomes, tanto por eles próprios quanto por outros povos. O etnônimo mais comumente utilizado é helenos (em grego:  Έλληνες).\n[…]\nEm Homero, \"Hélade\" (Eλλάς) e \"helenos\" eram nomes de uma tribo na Tessália, que seguiu Aquiles durante a Guerra de Troia. Na Antiguidade Tardia os gregos referiam-se a si próprios como Rhomaioi (Ῥωμαῖοι)  ou Romyym (Ρωμιοί), \"romanos\", já que após 212 d.M. praticamente todos os gregos eram cidadãos romanos. Após o estabelecimento do cristianismo como religião oficial do Império Romano, com Teodósio I, o termo \"heleno\" passou a ser aplicado aos seguidores da religião politeísta (\"pagã\").\n[…]\nNas línguas faladas no Oriente Médio e da Ásia Meridional, a raiz comum do nome utilizado é \"yun\" ou \"ywn\", que por sua vez vem do grego \"Jônia\", Iônia, nome dado à região habitada pelos gregos na Ásia Menor.\n[…]\nA terceira raiz a ser utilizada é \"hl\", usada por alguns idiomas ao redor do mundo, incluindo os próprios gregos:",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Ágora",
      "descricao": "Praça pública central das cidades gregas antigas, lugar de mercado, reunião e vida política."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Que palavra, usada para o medo de espaços abertos e lugares cheios de gente, vem do nome da praça pública das cidades gregas?",
    "resposta": "Agorafobia",
    "fonte": [
      "https://en.wikipedia.org/wiki/Agoraphobia",
      "https://en.wikipedia.org/wiki/Agora"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Agoraphobia",
        "situacao": "ok",
        "texto": "Agoraphobia is an anxiety disorder characterized by symptoms of anxiety in situations where people perceive their environment to be unsafe with no way to escape. These situations can include public transit, shopping centers, crowds and queues, or simply being outside their home on their own. Being in these situations may result in a panic attack. Those affected will go to great lengths to avoid th\n[…]\nThe term agoraphobia was coined in German in 1871 by pioneering German psychologist Karl Friedrich Otto Westphal (1833–1890) in his article \"Die Agoraphobie, eine neuropathische Erscheinung\" ('Agoraphobia: A Neuropathological Phenomenon') in the journal Archiv für Psychiatrie und Nervenkrankheiten, Berlin, 1871–72; 3: 138–161. It is derived from Greek ἀγορά (agorā́), meaning 'place of assembly' or 'market-place' and -φοβία (-phobía), meaning 'fear'.\n[…]\nAgoraphobia is a condition where individuals become anxious in unfamiliar environments or where they perceive that they have little control. Triggers for this anxiety may include wide-open spaces, crowds (social anxiety), or traveling (even short distances). Agoraphobia is often, but not always, compounded by a fear of social embarrassment, as a person experiencing agoraphobia fears the onset of a panic attack and appearing distraught in public.\n[…]\nThese have helped develop the expansion of public space and the contraction of private space, thus creating a conflict in the minds of agoraphobic individuals.\n[…]\nThis article incorporates public domain material from websites or documents of the National Institute of Mental Health.\n[…]\nSouth African Depression and Anxiety group (National Charity) Archived 13 October 2010 at the Wayback Machine Counseling, mental health awareness programs: media & public speaking outreach & rural outreach initiatives"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Agora",
        "situacao": "ok",
        "texto": "The agora (English:  or ; Ancient Greek: ἀγορά, romanized: agorá, meaning \"market\" in Modern Greek) was a central public space in ancient Greek city-states. The literal meaning of the word \"agora\" is \"gathering place\" or \"assembly\". The agora was the centre of the athletic, artistic, business, social, spiritual, and political life in the city. The Ancient Agora of Athens is the best example.\n[…]\nEarly in Greek history (10th–4th centuries BC), free-born citizens would gather in the agora for military duty or to hear statements of the ruling king or council. Later, the agora also served as a marketplace, where merchants kept stalls or shops to sell their goods amid arcades. This attracted artisans who built workshops nearby.\n[…]\nFrom these twin functions of the agora as a political and a commercial spot came the two Greek verbs ἀγοράζω, agorázō, \"I shop\", and ἀγορεύω, agoreúō, \"I speak in public\".\n[…]\nOther temples priorly standing in the agora include honour for Zeus, Athena, Apollo, and Ares.\n[…]\nThe agora was usually located in the middle of a city or near the harbour. Agoras were built of colonnades, or rows of long columns, and contained stoae, also known as a long open walkway below the colonnades. They were beautifully decorated with fountains, trees, and statues. When the Athenian agora was rebuilt after the Greco-Persian Wars, colonnades and stoae were not incorporated.\n[…]\nThe term agoraphobia denotes a phobic condition in which the sufferer becomes anxious in unfamiliar environments – for instance, places where they perceive that they have little control. Such anxiety may be triggered by wide-open spaces, crowds, or public situations, and the psychological term derives from the agora as a large and open gathering place.\n[…]\nOfficial Athenian agora excavations\n[…]\nAgora in Athens: photos"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Agorafobia",
        "situacao": "ok",
        "texto": "Agorafobia é um transtorno de ansiedade caracterizado pelos sintomas de ansiedade em situações onde a pessoa percebe os ambientes como inseguros ou com rotas de escape difíceis Essas situações podem incluir trânsito, shopping centers, multidões, filas, ou simplesmente estar fora de suas casa por conta própria. Essas situações também podem resultar em um ataque de pânico. As pessoas afetadas poder \n[…]\nO termo agorafobia foi cunhado na Alemanha em 1871 pelo psicólogo pioneiro alemão Karl Friedrich Otto Westphal (1833-1890), em seu artigo \"Die Agoraphobie, eine neuropathische Erscheinung\". Archiv für Psychiatrie und Nervenkrankheiten, Berlin, 1871–72; 3: 138–161. É derivado do grego  ἀγορά (agorá), que significa 'local de reunião' ou 'local de negociação' e -φοβία (-phobia), que significa 'medo'.\n[…]\nA agorafobia é uma condição onde os indivíduos se tornam ansiosos em um ambiente não familiar ou onde eles percebem que tem um pequeno controle. Gatilhos para sua ansiedade podem incluir espaços abertos, multidões (ansiedade social) ou viagem (mesmo distâncias pequenas). Agorafobia é normalmente, mas não sempre, composto por um medo de vergonha social, como uma pessoa vive com os medos da agorafobia, o desenvolvimento de um ataque de pânico e aparição angustiada em público.\n[…]\nEsses fatores tem ajudado a desenvolver a expansão do espaço público e a restrição do espaço privado, por conseguinte um conflito na mente dos indivíduos com agorafobia.\n[…]\nOutro ponto de vista na psicologia evolutiva é que a agorafobia primária é mais incomum sem ataques de pânico, podem ser devido a um mecanismo diferente para a agorafobia com ataques de pânico. A agorafobia primária sem ataques de pânico pode ser uma fobia específica explicada, uma vez que tenha sido evolutivamente vantajosa para evitar exposição, em espaços amplos, abertos e sem cobertura ou camuflagem.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Ginásio (Grécia Antiga)",
      "descricao": "Local de treinamento físico e de convívio dos jovens nas cidades gregas antigas."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A palavra ginásio vem de um termo grego que lembra como os atletas treinavam na Antiguidade. O que esse termo significa?",
    "resposta": "Nu",
    "fonte": [
      "https://en.wikipedia.org/wiki/Gymnasium_(ancient_Greece)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Gymnasium_(ancient_Greece)",
        "situacao": "ok",
        "texto": "The gymnasium (Ancient Greek: γυμνάσιον, romanized: gymnásion) in Ancient Greece functioned as a training facility for competitors in public games. It was also a place for socializing and engaging in intellectual pursuits. The name comes from the Ancient Greek term gymnós, meaning \"naked\" or \"nude\".\n[…]\nAntisthenes founded a school at the Cynosarges, from which some say the name Cynic derives; Plato founded a school that gathered at the Academy, after which the school was named, making the gymnasium famous for hundreds of years; and at the Lyceum, Aristotle founded the Peripatetic school.\n[…]\nPaedotribae and gymnastae were responsible for teaching the methods involved in the various exercises, as well as choosing suitable athletics for the youths. The gymnastae were also responsible for monitoring the constitution of the pupils and prescribing remedies for them if they became unwell. The aleiptae oiled and dusted the bodies of the youths, acted as surgeons, and administered any drugs prescribed.\n[…]\nGymnasia were typically large structures containing spaces for each type of exercise as well as a stadium, palaestra, baths, outer porticos for practice in bad weather, and covered porticos where philosophers and other \"men of letters\" gave public lectures and held disputations. Most Athenian gymnasia were located in suburban areas due to the large amount of level space required for construction.\n[…]\nGymnasium at Delphi\n[…]\nFor modern uses of the term \"gymnasium\", see Gymnasium (school) and gym.\n[…]\nThis article incorporates text from a publication now in the public domain: McNeill, Ronald John (1911). \"Gymnastics and Gymnasium\". In Chisholm, Hugh (ed.). Encyclopædia Britannica. Vol. 12 (11th ed.). Cambridge University Press. pp. 752–753."
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
    "indice": 29,
    "ancora": {
      "nome": "Maiêutica",
      "descricao": "Método de Sócrates de levar o interlocutor, por meio de perguntas, a descobrir por si mesmo o conhecimento."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Sócrates chamava seu método de perguntas de maiêutica, comparando-o ao ofício da própria mãe. Qual era esse ofício?",
    "resposta": "Parteira",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Maiêutica",
      "https://en.wikipedia.org/wiki/Phaenarete"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Maiêutica",
        "situacao": "ok",
        "texto": "A maiêutica socrática tem como significado “dar à luz”, “dar parto”, “parir” o conhecimento (em grego, μαιευτικη — maieutike — significa “arte de partejar”). É um método ou técnica que pressupõe que \"a verdade está latente em todo ser humano, podendo aflorar aos poucos na medida em que se responde a uma série de perguntas simples, quase ingênuas, porém perspicazes\".\n[…]\nSócrates conduzia este “parto” em duas etapas:\n[…]\nNa primeira, levava o interlocutor a duvidar de seu próprio saber sobre determinado assunto, revelando as contradições presentes em sua atual forma de pensar, normalmente baseadas em valores e preconceitos sociais.\n[…]\nOu seja: a maiêutica primeiro demole, depois ajuda a reconstruir conceitos, transitando do básico ao elaborado, “parindo” noções cada vez mais complexas.\n[…]\nA autorreflexão, expressa no nosce te ipsum — \"conhece a ti mesmo\" — põe o Homem na procura das verdades universais que são o caminho para a prática do bem e da virtude. A maiêutica, criada por Sócrates no século IV a.C., tem seu nome inspirado na profissão de sua mãe, Phaenarete, que era parteira. Sócrates esclarece isso no famoso diálogo Teeteto.\n[…]\nVale ressaltar que a maiêutica é, até nossos dias, um importante componente pedagógico, ao estimular o estudante a construir o seu próprio conhecimento por meio do uso e direcionamento de perguntas e respostas formuladas pelo mestre. Há certa divergência historiográfica sobre o uso de tal método por Sócrates. Historiadores afirmam que a denominação e associação de tal método ao filósofo decorre da narração, não necessariamente fiel, da vida de Sócrates por Platão.\n[…]\nMétodo socrático\n[…]\nSócrates - Raízes Gnosiológicas do Problema do Ensino"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Phaenarete",
        "situacao": "ok",
        "texto": "Phaenarete (Greek Φαιναρέτη, born c. 484 BC), wife of Sophroniscus, was the mother of the Greek philosopher Socrates and his half-brother, Patrocles. (Since Sophroniscus had died before 424 BC, he was probably Phaenarete's first husband, while Chaeredemus, father of Patrocles, was her second.) Historian of philosophy Debra Nails puts Phaenarete's birthdate around 484 BC, as she must have been old \n[…]\nVery little is known of the life of Phaenarete. In Plato's Theaetetus, Socrates compares his own work as a philosopher with hers as a maia (midwife). According to John Burnet, the role of maia was \"performed by women of good family\"."
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Mármores de Elgin",
      "descricao": "Esculturas do Partenon retiradas de Atenas no início do século dezenove e expostas no Museu Britânico, em Londres."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Parte das esculturas do Partenon está em Londres e é conhecida pelo título do diplomata britânico que as levou, no início do século dezenove. Qual?",
    "resposta": "Lorde Elgin",
    "fonte": [
      "https://en.wikipedia.org/wiki/Elgin_Marbles"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Elgin_Marbles",
        "situacao": "ok",
        "texto": "The Elgin Marbles ( EL-ghin) are a collection of Ancient Greek sculptures from the Parthenon and other structures from the Acropolis of Athens, removed from Ottoman Greece in the early 19th century and shipped to Britain by agents of Thomas Bruce, 7th Earl of Elgin, and now held in the British Museum in London. The majority of the sculptures were created in the 5th century BC under the direction o\n[…]\nIn 1836, King Otto of the newly independent Greece formally asked the British government to return some of the Elgin Marbles (the four slabs of the frieze of the Temple of Athena Nike). In 1846, following a request from Greece, Britain sent a complete set of casts of the Parthenon frieze, and in 1890 the city of Athens unsuccessfully requested the return of the original frieze. In 1927, the Greek minister in London unsuccessfully asked for the return of some architectural fragments.\n[…]\nIn 2000, the Greek government commissioned the construction of a new Acropolis Museum, which opened in 2009. The museum was, in part, designed to arrange the surviving Parthenon sculptures (including those in the Elgin collection) as they originally stood on the Parthenon itself, and to counter arguments that the Elgin Marbles would be better preserved and displayed in the British Museum.\n[…]\nThe Guardian published an editorial in 2020 reiterating its support for the return of the Parthenon marbles. In January 2022, The Times reversed its long-standing support for retaining the marbles, publishing an editorial calling for their return to Greece. The Daily Telegraph published an editorial in January 2023 arguing that any decision on the return of the Elgin Marbles to Greece should be made by the British parliament.\n[…]\nStallings, A. E. (2025). Frieze Frame: How Poets, Painters, and their Friends Framed the Debate Around Elgin and the Marbles of the Parthenon. Philadelphia: Paul Dry Books. ISBN 9781589882003."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/M%C3%A1rmores_de_Elgin",
        "situacao": "ok",
        "texto": "Os Mármores de Elgin, também conhecidos como Mármores do Partenon, são uma grande coleção de esculturas em mármore levadas da Grécia para a Grã-Bretanha em 1806 por Thomas Bruce, Lord Elgin, na época embaixador junto ao império Otomano. Valendo-se do domínio deste sobre os territórios da Grécia, obteve uma autorização do sultão para removê-los do Partenon. As esculturas encontram-se no Museu Britâ\n[…]\nOs Mármores de Elgin incluem algumas esculturas dos pendimentos, os painéis da Metópe descrevendo as batalhas entre os lápios e os centauros, bem como o friso que decorava o rodateto exterior da cela, no interior da arquitrave do templo. Representam mais da metade das esculturas sobreviventes da decoração do Partenon: 247 pés dos 524 originais do friso; 15 das 92 métopas; 17 figuras parciais dos pendimentos, bem como outras peças isoladas.\n[…]\nA páginas tantas, Elgin resolveu mudar seus planos e dedicar-se antes a \"salvar\" os frisos.\n[…]\nSegundo alguns, o poeta inglês Lord Byron teria sido a primeira voz culta e desinteressada a denunciar o saque do Parthenon. Byron não foi, de forma alguma, o primeiro a criticar Elgin, embora tenham ficado célebres versos seus directamente apontados ao antigo embaixador britânico em Constantinopla:\n[…]\nDesde o início, os aristocratas londrinos, apesar do seu hábito de recolher souvenires clássicos onde quer que fossem, tiveram a impressão de que Elgin havia ido longe demais. O ataque, tão feroz que até incluiu dúvidas sobre a autoria grega das esculturas, foi liderado por Richard Payne Knight, figura destacada da Society of Dilettanti, uma espécie de grémio de ditadores do gosto artístico inglês da época.\n[…]\nDepois de retirar os mármores, Lord Elgin teria passado pela Itália, onde consultou Canova, que, horrorizado, se recusou a participar, afirmando: \"Seria um sacrilégio se algum homem os  tocasse com seu cinzel\".\n[…]\nParthenon",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Idiotes",
      "descricao": "Termo grego antigo para o indivíduo particular, leigo nos assuntos públicos, que deu origem à palavra idiota."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Na Grécia antiga, a palavra idiotes, que deu origem a idiota, não era um insulto. Que tipo de pessoa ela designava?",
    "resposta": "Um particular, leigo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Idiot"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Idiot",
        "situacao": "ok",
        "texto": "An idiot, in modern use, is a stupid or foolish person. Idiot was formerly a technical term in legal and psychiatric contexts for some kinds of profound intellectual disability where the mental age is two years or less, and the person cannot guard themself against common physical dangers. The term was gradually replaced by \"profound mental retardation\", which has since been replaced by other terms\n[…]\nMany political commentators, starting as early as 1856, have interpreted the word \"idiot\" as reflecting the Ancient Athenians' attitudes to civic participation and private life, combining the ancient meaning of 'private citizen' with the modern meaning 'fool' to conclude that the Greeks used the word to say that it is selfish and foolish not to participate in public life.\n[…]\nThis interpretation was foreshadowed in 1846, when Julius Hare wrote that the meaning of idiotes as \"rude, ignorant person\" bore witness to the \"Greek notion of the indispensableness of public life\".\n[…]\nBut this is not how the Greeks used the word. It is certainly true that the Greeks valued civic participation and criticized non-participation. Thucydides quotes Pericles' Funeral Oration as saying: \"[we] regard... him who takes no part in these [public] duties not as unambitious but as useless\" (Ancient Greek: τόν τε μηδὲν τῶνδε μετέχοντα οὐκ ἀπράγμονα, ἀλλ᾽ ἀχρεῖον νομίζομεν).\n[…]\nHowever, neither he nor any other ancient author uses the word \"idiot\" to describe non-participants, or in a derogatory sense; its most common use was simply a private citizen or amateur as opposed to a government official, professional, or expert. Indeed, the word idiotes sometimes meant \"the ideal Athenian citizen who exercised his political rights\"."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Idiotia",
        "situacao": "ok",
        "texto": "Oligofrenia (do grego ὀλίγος, \"pouco” e  -ϕρενία, do tema de ϕρήν, ϕρενός, \"mente\") designa a gama de casos em que há um déficit de inteligência no ser humano, compondo a chamada erroneamente de tríade oligofrênica: debilidade, imbecilidade e idiotia, portanto, o termo não é adequado para denominar portadores de condições neurológicas.\n[…]\nGrau máximo de oligofrenia. Os indivíduos portadores possuem o menor grau de desenvolvimento intelectual. A palavra idiota, do grego idiótes, referenciava-se originalmente apenas ao homem privado em oposição ao homem de Estado. Segundo Ajuriaguerra refere-se a uma forma grave de dano cerebral que deixa o indivíduo com comportamentos equivalentes a o de uma criança com dois anos (idade mental), situando-se na escala de Q.I. com valores iguais ou inferiores a 20.\n[…]\nO idiota não desenvolve a fala, sendo incapaz de articular as palavras. É incapaz de assimilar noções de higiene pessoal ou mesmo de desenvolver o pudor.\n[…]\nO idiota completo apresenta portanto, uma capacidade intelectual infra-humana: não fala, nem compreende as palavras; tem seus instintos e capacidades vitais muito prejudicados aproximando-se dos estados comatosos.\n[…]\nO idiota incompleto ou de segundo grau, aprende algumas palavras, desenvolvendo instintos como o de conservação e relações afetivas simples. Contudo muitos autores tem descrito nessas crianças uma sintomatologia de aspecto psicótico, catatônico, autístico com mutismo e modificações emocionais (fase de raiva e gritos) maneirismo postural etc. (Ajuriaguerra o.c. p. 574)\n[…]\nEstado mórbido produzido pela ausência da glândula tireóide, ou pela insuficiência muito acentuada de funcionamento dela, possuindo o sentido pejorativo de: Lorpa, pacóvio, idiota.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Anaximandro",
      "descricao": "Filósofo pré-socrático do século seis a.C., discípulo de Tales, autor da ideia do ápeiron, o ilimitado, como princípio de tudo."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Os filósofos Anaximandro e Anaxímenes nasceram na mesma cidade grega da Ásia Menor que o mestre deles, Tales. Que cidade era essa?",
    "resposta": "Mileto",
    "distratores": [
      "Éfeso",
      "Samos",
      "Halicarnasso"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Milesian_school"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Milesian_school",
        "situacao": "ok",
        "texto": "The Ionian school of pre-Socratic philosophy refers to Ancient Greek philosophers, or a school of thought, in Ionia in the 6th century BC, the first in the Western tradition.\n[…]\nThe first three philosophers (Thales, Anaximander, and Anaximenes) were all centred in the mercantile city of Miletus on the Maeander River and are collectively referred to as the Milesian school. They sought to explain nature by finding its fundamental element called the arche. They seemed to think although matter could change from one form to another, all matter had something in common that did not change. Aristotle thus characterized them as material monists.\n[…]\nAnaximander (Greek: Ἀναξίμανδρος, Anaximandros) (c. 610 – c. 546 BCE) wrote a cosmological work, little of which remains. From the few extant fragments, we learn that he believed the beginning or first principle (arche, a word first found in Anaximander's writings, and which he probably invented) is an endless, unlimited mass (apeiron), subject to neither old age nor decay, which perpetually yields fresh materials from which everything we can perceive is derived.\n[…]\nAnaximenes of Miletus (Greek: Ἀναξιμένης ὁ Μιλήσιος; c. 585 – c. 528 BCE), like others in his school of thought, practiced material monism and believed that air is the arche.\n[…]\nHeraclitus (Greek: Ἡράκλειτος, Hērakleitos) of Ephesus (c. 535 – c. 475 BCE) disagreed with Thales, Anaximander, and Pythagoras about the nature of the ultimate substance and claimed instead that everything is derived from the Greek classical element fire, rather than from air, water, or earth. This led to the belief that change is real and stability illusory."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Escola_j%C3%B4nica",
        "situacao": "ok",
        "texto": "A escola jônica foi uma escola localizada na cidade de Mileto, na Jônia, nos séculos VI e V a.C.. Embora a Jônia tenha sido o centro da filosofia ocidental, os filósofos que ela produziu, incluindo Tales, Anaximandro, Anaximenes, Heráclito, Anaxágoras, Arquelau e Diógenes de Apolônia, tinham pontos de vista tão divergentes que não se pode dizer que tenham pertencido, stricto sensu, a uma escola fi\n[…]\nAristóteles os chamou de physiologoi, significando \"aqueles que discursavam sobre a natureza\", porém jamais os classificou numa \"escola jônica\". A classificação foi feita pela primeira vez por Sócion, historiador da filosofia do século II. Por vezes são designados como cosmologistas, já que quase todos eram fisicalistas que tentavam explicar a natureza da matéria.\n[…]\nEnquanto alguns dos filósofos classificados nesta escola também são incluídos na escola milésia de filosofia, outros têm uma classificação mais problemática.\n[…]\nA maior parte dos cosmologistas acredita que embora a matéria possa mudar de uma forma para outra, toda a matéria tem algo em comum, inalterável. Não concordavam no que seria isto, partilhado por todas as coisas, e nem faziam experimentos para descobrir, mas utilizavam-se da racionalização abstrata, no lugar da religião ou da mitologia, para se explicar, tornando-se assim os primeiros filósofos da tradição ocidental.\n[…]\nFilósofos posteriores ampliaram seus estudos, incluindo outras áreas do pensamento. A escola eleática, por exemplo, também estudava a epistemologia; os jônicos, no entanto, foram o primeiro grupo de filósofos a se ter notícia, e daí vem sua importância histórica.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Batalha das Termópilas",
      "descricao": "Batalha de 480 a.C. em que gregos liderados pelo rei espartano Leônidas enfrentaram o exército persa de Xerxes."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que filme de 2006, baseado nos quadrinhos de Frank Miller, retrata a resistência de Leônidas e seus espartanos nas Termópilas?",
    "resposta": "300",
    "fonte": [
      "https://en.wikipedia.org/wiki/300_(film)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/300_(film)",
        "situacao": "ok",
        "texto": "300 is a 2006 epic historical fantasy action film directed by Zack Snyder, who co-wrote the screenplay with Kurt Johnstad and Michael B. Gordon. Based on the 1998 Dark Horse Comics limited series of the same name by Frank Miller and Lynn Varley, the film, like its source material, is a retelling of the Battle of Thermopylae in the Greco-Persian Wars.\n[…]\nProducer Gianni Nunnari was not the only person planning a film about the Battle of Thermopylae, as director Michael Mann had already planned a film of the battle based on the book Gates of Fire. Nunnari discovered Frank Miller's graphic novel 300, which impressed him enough to acquire the film rights. 300 was jointly produced by Nunnari and Mark Canton while Michael B. Gordon wrote the script.\n[…]\nSnyder used this narrative technique to show the audience that the surreal \"Frank Miller world\" of 300 was told from a subjective perspective. By using Dilios' gift of storytelling, he was able to introduce fantasy elements into the film, explaining that \"Dilios is a guy who knows how not to wreck a good story with truth\". Snyder also added the subplot in which Queen Gorgo attempts to rally support for Leonidas.\n[…]\nMichael M. Chemers, author of \"'With Your Shield, or on It': Disability Representation in 300\" in the Disability Studies Quarterly, said that the film's portrayal of the hunchback and his story \"is not mere ableism: this is anti-disability\". Frank Miller, commenting on areas in which he lessened the Spartan cruelty for narrative purposes, said: \"I have King Leonidas very gently tell Ephialtes, the hunchback, that they can't use him [as a soldier], because of his deformity.\n[…]\nMiller, Gerri (March 2, 2007). \"Inside 300\". HowStuffWorks.\n[…]\n300 production notes\n[…]\nMiller, Neil (February 14, 2007). \"Interview: Director Zach Snyder talks 300\". Archived from the original on May 15, 2008."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/300_%28filme%29",
        "situacao": "ok",
        "texto": "300 é um filme de fantasia e guerra norte-americano de 2007, co-escrito e dirigido por Zack Snyder. É baseado na série de quadrinhos homônima de Frank Miller e Lynn Varley, publicada pela Dark Horse Comics em 1998. Ambos são releituras fictícias da Batalha de Termópilas durante as Guerras Persas. Miller serviu como produtor executivo e consultor do filme.\n[…]\nO produtor Gianni Nunnari não era o único cineasta que estava planejando um filme sobre a Batalha das Termópilas: o diretor Michael Mann já tinha planos de um filme da batalha baseado no livro Gates of Fire. Nunnari descobriu a história em quadrinhos 300 de Frank Miller, que o impressionou o suficiente para adquirir os direitos cinematográficos. 300 foi produzido em conjunto por Nunnari e Mark Canton, enquanto Michael B. Gordon escreveu o roteiro.\n[…]\nA história em quadrinhos original de Frank Miller, 300, foi inspirada no filme The 300 Spartans (1962), que Miller viu pela primeira vez aos seis anos.\n[…]\nO filme foi parodiado diversas vezes em outros filmes para o cinema, além de programas de televisão e outras mídias. A frase \"This is Sparta!\" (\"Isto é Esparta!\"), dita por Leônidas, virou um meme da internet. Esquetes humorísticas baseadas no filme foram apresentadas no Saturday Night Live e Robot Chicken, com este último imitando o estilo visual de 300 em uma paródia ambientada durante a Guerra Revolucionária Americana, intitulada \"1776\".\n[…]\nEm junho de 2008, os produtores Mark Canton, Gianni Nunnari e Bernie Goldmann revelaram que o trabalho para uma continuação de 300 havia começado. A Legendary Pictures anunciou que Frank Miller começou a escrever a história em quadrinhos seguinte com Zack Snyder estando interessado em dirigir a adaptação desta enquanto ele estava a desenvolvendo e dirigindo o reboot de Superman, Man of Steel.\n[…]\n300 no IMDb\n[…]\n«300» (em inglês)  no Rotten Tomatoes",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Esopo",
      "descricao": "Fabulista grego do século seis a.C., a quem se atribuem fábulas como A Cigarra e a Formiga."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Segundo Platão, enquanto esperava a execução na prisão, Sócrates passou a pôr em versos as fábulas de que autor?",
    "resposta": "Esopo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Aesop",
      "https://en.wikipedia.org/wiki/Phaedo"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Aesop",
        "situacao": "ok",
        "texto": "Aesop ( EE-sop; Ancient Greek: Αἴσωπος, Aísōpos; c. 620 – 564 BCE; usually written Æsop in the 19th century and Esop before then) was a Greek fabulist and storyteller credited with a number of fables now collectively known as Aesop's Fables. Although his existence remains unclear and no writings by him survive, numerous tales credited to him were gathered across the centuries and in many languages\n[…]\nSocrates, while in prison, turned some of the fables into verse, of which Diogenes Laërtius records a small fragment. The early Roman playwright and poet Ennius also rendered at least one of Aesop's fables in Latin verse, of which the last two lines still exist.\n[…]\nThere had already been an example of Asian acculturation in 17th-century Japan. There Portuguese missionaries had introduced a translation of the fables (Esopo no Fabulas, 1593) that included the biography of Aesop. This was then taken up by Japanese printers and taken through several editions under the title Isopo Monogatari.\n[…]\nList of Aesop's Fables\n[…]\nGibbs, Laura. \"Life of Aesop: The Wise Fool and the Philosopher\", Journey to the Sea (online journal), issue 9, 1 March 2009.\n[…]\nPerry, Ben Edwin, 1936. Studies in the text history of the life and fables of Aesop. Haverford (PA), American Philological Association\n[…]\nWorks by Aesop in eBook form at Standard Ebooks\n[…]\nWorks by Aesop at Project Gutenberg\n[…]\nWorks by or about Aesop at the Internet Archive\n[…]\nWorks by Aesop at LibriVox (public domain audiobooks)\n[…]\nVita Aesopi Online resources for the Life of Aesop\n[…]\nWorks by Aesop at Open Library\n[…]\nCarlson Fable Collection at Creighton University includes 10,000 books and thousands of fable-related images and objects under the heading \"Aesop's Artifacts\"\n[…]\nObjects related to Aesop in the Urus : Techniques and Reception of Graphic Art in Central and Eastern Europe (15th–18th centuries) database"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Phaedo",
        "situacao": "ok",
        "texto": "Phaedo ( ; Ancient Greek: Φαίδων, Phaidōn) is a  dialogue written by Plato, in which Socrates discusses the immortality of the soul and the nature of the afterlife with his friends in the hours leading up to his death. Socrates explores various arguments for the soul's immortality with the Pythagorean philosophers Simmias and Cebes of Thebes in order to show that there is an afterlife in which the\n[…]\nCebes, on behalf of Socrates' friend Evenus, asks Socrates about the poetry he has been writing while in prison, and Socrates relates how, bidden by a recurring dream to \"make and cultivate music\", he wrote a hymn and then began writing poetry based on Aesop's Fables.\n[…]\nIn order to alleviate Cebes's worry that the soul might perish at death, Socrates introduces four arguments for the soul's immortality:\n[…]\nSeeing that the Affinity Argument has possibly failed to show the immortality of the soul, Phaedo pauses his narration. Phaedo remarks to Echecrates that, because of this objection, those present had their \"faith shaken\", and that there was introduced \"a confusion and uncertainty\". Socrates too pauses following this objection and then warns against misology, the hatred of argument.\n[…]\nSocrates then proceeds to give his final proof of the immortality of the soul by showing that the soul is immortal as it is the cause of life. He begins by showing that \"if there is anything beautiful other than absolute beauty it is beautiful only insofar as it partakes of absolute beauty\".\n[…]\nThe Last Days of Socrates, translation of Euthyphro, Apology, Crito, Phaedo. Hugh Tredennick, 1954. ISBN 978-0140440379. Made into a BBC radio play in 1986.\n[…]\nNails, Debra (15 November 2002). The People of Plato: A Prosopography of Plato and Other Socratics. Hackett Publishing. ISBN 978-1-60384-027-9. Retrieved 10 May 2025.\n[…]\nGuides to the Socratic Dialogues, a beginner's guide\n[…]\nThe grammatical puzzles of Socrates' Last Words"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Esopo",
        "situacao": "ok",
        "texto": "Esopo  (Nessebar, 620 a.C. – Delfos, 564 a.C.) foi um escritor da Grécia Antiga a quem são atribuídas várias fábulas populares. A ele se atribui a paternidade da fábula como gênero literário. Sua obra, que constitui as Fábulas de Esopo, serviu como inspiração para outros escritores ao longo dos séculos, como Fedro e La Fontaine.\n[…]\nAs fábulas de Esopo e outras possivelmente a ele atribuídas foram reunidas pela primeira vez por Demétrio de Faleros, no início do século III a.C.\n[…]\nAristóteles afirmou na Retórica que Esopo teria uma vez discursado na Assembleia de Samos em defesa de um demagogo. Platão cita o nome de Esopo no diálogo Fédon (60c-61a), o que faz muitos concluírem que suas fábulas eram muito conhecidas nesse momento histórico posterior.\n[…]\nAs fábulas que lhe são atribuídas sugerem normas de conduta que são exemplificadas pela ação dos animais (mas também de homens, deuses e mesmo coisas inanimadas). Esopo partia da cultura popular para compor seus escritos. Os seus animais falam, cometem erros, são sábios ou tolos, maus ou bons, exatamente como os homens. A intenção de Esopo, em suas fábulas, era mostrar como os seres humanos podiam agir, para bem ou para mal.\n[…]\nAVELEZA, Manuel. As Fábulas de Esopo (Texto Bilíngüe). Rio de Janeiro: Thex, 1999, ISBN 8585575956.\n[…]\n(em português) Fábulas de Esopo - Drummond, Regina. Editora Paulus, ISBN 8534905452.\n[…]\nO PENSADOR, site, Pesquisado na Internet. Disponível em <http://pensador.uol.com.br/autor/esopo/biografia/> 5 de novembro de 2015, . Acesso em 5 de novembro de 2015.\n[…]\nObras de Esopo no Project Gutenberg USA\n[…]\nEsopo no site sitio da Bibliotheca Augustana (Augsburgo) (em grego)\n[…]\nAesopica.net Mais de 600 fábulas de Esopo em Inglês, acrescido de textos em latim e grego - (em inglês)\n[…]\nAesop's Fables - Introduction and notes by D.L.Ashliman (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Peste de Atenas",
      "descricao": "Epidemia que devastou Atenas a partir de 430 a.C., no início da Guerra do Peloponeso, descrita por Tucídides."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O historiador Tucídides descreveu em detalhes a peste que atingiu Atenas em 430 antes de Cristo. Que experiência pessoal ele teve com ela?",
    "resposta": "Pegou a doença e sobreviveu",
    "fonte": [
      "https://en.wikipedia.org/wiki/Plague_of_Athens",
      "https://en.wikipedia.org/wiki/Thucydides"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Plague_of_Athens",
        "situacao": "ok",
        "texto": "The Plague of Athens (Ancient Greek: Λοιμὸς τῶν Ἀθηνῶν, Loimos tôn Athênôn) was an epidemic that devastated the city-state of Athens in ancient Greece during the second year (430 BC) of the Peloponnesian War when an Athenian victory still seemed within reach. The plague killed an estimated 75,000 to 100,000 people, around 25% of the population, and is believed to have entered Athens through Piraeu\n[…]\nUnfortunately, the strategy also resulted in massive migration from the Attic countryside into an already highly populated city, generating overpopulation and resource shortage. Due to the close quarters and poor hygiene exhibited at that time, Athens became a breeding ground for disease, and many citizens died. In the history of epidemics in wartime, the 'Plague' of Athens is remarkable for the limitation of the affliction to one side as well as for its influence on the outcome of the war.\n[…]\nHistorians have long tried to identify the disease behind the Plague of Athens. The disease has traditionally been considered an outbreak of the bubonic plague in its many forms, but a reconsideration of the reported symptoms and epidemiology have led scholars to advance alternative explanations: these include typhus, smallpox, measles, and toxic shock syndrome.\n[…]\nIn January 1999, the University of Maryland devoted their fifth annual medical conference, dedicated to notorious case histories, to the Plague of Athens. They concluded that the disease that killed the Greeks was typhus. \"Epidemic typhus fever is the best explanation,\" said Dr. David Durack, consulting professor of medicine at Duke University.\n[…]\nWhile none of the original works of Acron, a physician, are extant, it is reported that he died c. 430 BC after traveling from Sicily to Athens to assist against the plague.\n[…]\nWomen in Classical Athens\n[…]\nThomas Hobbes, Thucydides and Thomas Sprat (1665), The Plague of Athens at Project Gutenberg."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Thucydides",
        "situacao": "ok",
        "texto": "Thucydides ( thew-SID-ih-deez; Ancient Greek: Θουκυδίδης, romanised: Thoukudídēs [tʰuːkydǐdɛːs]; c. 460 – c. 400 BC) was an Athenian historian and general. His History of the Peloponnesian War recounts the 5th century BC war between Sparta and Athens until the year 411 BC.\n[…]\nHe survived the Plague of Athens, which killed Pericles and many other Athenians. There is a first observation of acquired immunity. He also records that he owned gold mines at Scapte Hyle (literally \"Dug Woodland\"), a coastal area in Thrace, opposite the island of Thasos.\n[…]\nStylistically, the placement of this passage also serves to heighten the contrast with the description of the plague in Athens immediately following it, which graphically emphasises the horror of human mortality, thereby conveying a powerful sense of verisimilitude,\n[…]\nFor Canadian historian Charles Norris Cochrane (1889–1945), Thucydides's fastidious devotion to observable phenomena, focus on cause and effect and strict exclusion of other factors anticipates twentieth-century scientific positivism. Cochrane, the son of a physician, speculated that Thucydides generally (and especially in describing the plague in Athens) was influenced by the methods and thinking of early medical writers such as Hippocrates of Kos.\n[…]\nIn his book The Open Society and Its Enemies, Karl Popper writes that Thucydides was the \"greatest historian, perhaps, who ever lived\". Thucydides's work, Popper goes on to say, represents \"an interpretation, a point of view; and in this we need not agree with him\". In the war between Athenian democracy and the \"arrested oligarchic tribalism of Sparta\", we must never forget Thucydides's \"involuntary bias\", and that \"his heart was not with Athens, his native city.\""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Peste_de_Atenas",
        "situacao": "ok",
        "texto": "A Peste de Atenas, a Praga de Atenas ou a Peste do Egito foi uma epidemia que ocorreu pela primeira vez em 430 a.C. em Atenas, Grécia, durante o segundo ano da Guerra do Peloponeso.\n[…]\nTucídides descreveu a doença que atingiu a polis Atenas em uma primeira onda entre 430 e 429 a.C. e depois, na segunda onda, em 427 a.C. durante o cerco das tropas espartanas, em plena Guerra do Peloponeso.\n[…]\nNão se sabe ao certo quantas pessoas morreram vítimas da peste. No entanto, em seu relato, Tucídides aduz que tal peste matou, durante os três anos, cerca de 4.400 hoplitas e 300 cavaleiros, equivalendo, aproximadamente, de um quarto a um terço das tropas, e a mesma proporção de mortes para o restante da população, cerca de 75.000-100.000 pessoas.\n[…]\nA epidemia originou-se na Etiópia, alcançando o porto de Pireu em 430 a.C. e rapidamente espalhou-se pela população de Atenas que, durante o cerco espartano, estava confinada em péssimas condições atrás das muralhas.\n[…]\nTal confinamento fazia parte da estratégia de guerra de Péricles, o general que governava Atenas na época da peste. Péricles entregou os campos atenienses aos espartanos e confinou todos os habitantes de Atenas atrás das muralhas, acreditando que os espartanos não teriam recursos para prolongar o cerco.\n[…]\nApesar de Tucídides descrever os sintomas da doença, os patólogos especulavam ser peste bubônica, tifo, varíola ou gripe. Quando, em janeiro de 2006, pesquisadores da Universidade de Atenas analisaram dentes recuperados de uma sepultura coletiva debaixo da cidade, confirmaram a presença de bactérias da febre tifóide.\n[…]\nSegundo Tucídides, a doença começou a mostrar sintomas na cabeça enquanto avançava pelo resto do corpo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Aristides, o Justo",
      "descricao": "Político e general ateniense do século cinco a.C., herói das Guerras Médicas, exilado por ostracismo por volta de 482 a.C."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Segundo Plutarco, um eleitor analfabeto pediu ao próprio Aristides que escrevesse o nome dele num caco, para exilá-lo. Que motivo o homem deu?",
    "resposta": "Cansou de ouvi-lo chamado de Justo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Aristides"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Aristides",
        "situacao": "ok",
        "texto": "Aristides ( ARR-ih-STY-deez; Ancient Greek: Ἀριστείδης, romanized: Aristeídēs, Attic Greek: [aristěːdɛːs]; 530–468 BC) was an ancient Athenian statesman. Nicknamed \"the Just\" (δίκαιος, díkaios), he flourished at the beginning of Athens' Classical period and is remembered for his generalship in the Persian War. The ancient historian Herodotus cited him as \"the best and most honourable man in Athens\n[…]\nAccording to Plutarch, citing the philosopher Ariston of Ceos, the rivalry between Aristides and Themistocles began in their youth when they competed over the love of a boy: \"... they were rivals for the affection of the beautiful Stesilaus of Ceos, and were passionate beyond all moderation.\" The conflict between the two leaders ended in the ostracism of Aristides at a date variously given between 485 and 482 BC.\n[…]\nHerodotus is not the only ancient author to evaluate Aristides' life. He is also the subject of one of Plutarch's Parallel Lives (in which he is compared to Cato the Elder), although Plutarch, writing during the Roman Empire, was several centuries removed. Aristides is praised by Socrates in Plato's dialogues Gorgias and Meno as an exceptional instance of good leadership.\n[…]\nTuci, Paolo A. (2018). \"Aristide 'imperialista' nell’Athenaion Politeia aristotelica\", in C. Bearzot – M. Canevaro – T. Gargiulo – E. Poddighe (eds.), Athenaion Politeiai tra storia, politica e sociologia: Aristotele e Pseudo-Senofonte (Milan 2018) 231–251.\n[…]\nZaccarini, Matteo (2020). \"Aristide il Giusto e l’arche ateniese: la giustizia al potere\", Rivista di Filologia e Istruzione Classica 148 (2020) 5–33.\n[…]\nPlutarch's Life of Aristides in English Translation\n[…]\nPlutarch's Life of Aristides in English Translation at the Internet Classics Archive\n[…]\nPlutarch's Life of Aristides in English Translation at the Perseus Project"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Aristides_%28estratego%29",
        "situacao": "ok",
        "texto": "Aristides de Atenas (em grego:  Ἀριστείδης; Atenas, ca. 535 a.C. – Atenas, ca. 468 a.C.) foi um estadista e estratego ateniense. Foi cognominado de o Justo. Destacou-se no contexto das Guerras Médicas e pela sua defesa de Atenas permanecer como um poder terrestre, contrapondo-se à proposta naval de Temístocles.\n[…]\nAristides destaca-se pela primeira vez na vida política ateniense durante a batalha de Maratona, em que comandou a tribo Antíoco. Finda a batalha, é eleito arconte para o período de 490 – 489 a.C., como sucessor de Fênipo. De acordo com Demétrio de Falero, citado e contestado por Plutarco, Aristides só se tornou arconte pouco antes de morrer.\n[…]\nSeguindo uma política conservadora, que visava manter Atenas como potência terrestre, Aristides acabou por conflitar-se com a política naval de Temístocles. O conflito entre os dois líderes resultou no ostracismo de Aristides, ocorrido, não se sabe ao certo, em 485 ou 482 a.C. Conta-se de Aristides que, nessa ocasião dele se acercou um cidadão, pedindo-lhe que escrevesse \"Aristides\" no óstraco. “Que mal te fez esse homem?”, indagou.\n[…]\n“Nem sequer o conheço, mas meus ouvidos já se cansam de ouvir chamarem-lhe Justo”, respondeu-lhe. Arístides acabou por atender o pedido e escrever o nome.\n[…]\nHeródoto não é o único autor antigo a avaliar a vida de Aristides. Ele também é o tema de uma das Vidas Paralelas de Plutarco, embora Plutarco, escrevendo durante o Império Romano, tenha sido removido por vários séculos. Aristides é elogiado por Sócrates nos diálogos de Platão Górgias e Mênon como um exemplo excepcional de boa liderança.\n[…]\nLife of Aristides in English Translation de Plutarco\n[…]\nLife of Aristides in English Translation de Plutarco - the Internet Classics Archive\n[…]\nLife of Aristides in English Translation de Plutarco - the Perseus Project",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Batalha de Maratona",
      "descricao": "Batalha de 490 a.C. em que os atenienses venceram a invasão persa na planície de Maratona."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Segundo Heródoto, os espartanos aceitaram ajudar Atenas contra os persas em Maratona, mas não partiram logo. Por quê?",
    "resposta": "Esperavam a lua cheia, por lei religiosa",
    "fonte": [
      "https://en.wikipedia.org/wiki/Battle_of_Marathon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Battle_of_Marathon",
        "situacao": "ok",
        "texto": "The Battle of Marathon took place in 490 BCE during the first Persian invasion of Greece. It was fought between the citizens of Athens, aided by Plataea, against a Persian force commanded by Datis and Artaphernes. The battle was the culmination of the first attempt by Persia under King Darius I to subjugate Greece. The Greek army inflicted a crushing defeat on the more numerous Persians, marking a\n[…]\nWhen the messenger arrived in Sparta, the Spartans were already involved in a religious festival and gave this as a reason for not coming to help the Athenians.\n[…]\nThere does, however, seem to have been a delay between the Athenian arrival at Marathon and the battle; Herodotus, who evidently believed that Miltiades was eager to attack, may have made a mistake while seeking to explain this delay.\n[…]\nThe first theory is that the Persian cavalry left Marathon for an unspecified reason, and that the Greeks moved to take advantage of this by attacking. This theory is based on the absence of any mention of cavalry in Herodotus' account of the battle, and an entry in the Suda dictionary. The entry χωρίς ἱππέων (\"without cavalry\") is explained thus: The cavalry left.\n[…]\nThe Persian strategy, in contrast, was probably principally determined by tactical considerations. The Persian infantry was evidently lightly armoured, and no match for hoplites in a head-on confrontation (as would be demonstrated at the later battles of Thermopylae and Plataea.) Since the Athenians seem to have taken up a strong defensive position at Marathon, the Persian hesitance was probably a reluctance to attack the Athenians head-on.\n[…]\nNike of Marathon\n[…]\nBattle of Marathon (in Greek) by e-marathon.gr.\n[…]\nThe Battle of Marathon September 490 BC, by Major General Dimitris Gedeon, HEAR.\n[…]\nDigital representation of the Battle of Marathon 490 BC.\n[…]\nDoenges, N. A. \"The Campaign and Battle of Marathon\". Historia, vol. 47 (1998): 1–17."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Batalha_de_Maratona",
        "situacao": "ok",
        "texto": "A batalha de Maratona (em grego: Μάχη τοῡ Μαραθῶνος; romaniz.: Māche tou Marathōnos) ocorreu durante a Primeira Guerra Médica, em setembro de 490 a.C., numa planície a leste de Atenas.\n[…]\nO general helênico Milcíades, avisado do desembarque persa, incumbiu os atenienses de lhe fazerem frente. Ao mesmo tempo, enviou Fidípides a Esparta para solicitar ajuda, o que o fez correr cerca de 200 quilômetros em menos de um dia. Os espartanos prometeram acatar o pedido, mas argumentaram que devido a razões religiosas (encontravam-se no nono dia do mês lunar) não poderiam fazê-lo antes de seis dias.\n[…]\nMilcíades, contudo, não podia esperar tanto tempo, e se lançou ao ataque contra os persas com os efetivos que dispunha.\n[…]\nDurante a batalha, os gregos cercaram os persas, que responderam com uma chuva de flechas, levando os gregos a precipitarem contra o inimigo e forçando a disposição das tropas em formações fechadas, o que impedia o uso da cavalaria.\n[…]\nEsta ação foi determinante, pois os persas não podiam fazer muito contra as largas lanças das forças gregas preparadas para um combate corpo a corpo, já que seus arcos não os serviam e as espadas, punhais e espadas curtas não podiam fazer grande dano aos gregos protegidos com couraça. Os persas ofereceram grande resistência, conseguindo romper por um momento o cerco grego, que logo foi reagrupado.\n[…]\nSegundo conta a lenda, Fidípides recebeu de Milcíades a ordem de correr os 42 quilômetros (250 estádios) que separavam a cidade de Maratona da cidade de Atenas, a fim de comunicar a vitória grega. Após tê-la anunciado com a frase \"Alegrai-vos, atenienses, nós vencemos!\", teria caído morto devido ao esforço.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Delos",
      "descricao": "Pequena ilha grega das Cíclades, grande santuário de Apolo na Antiguidade e primeira sede da Liga de Delos."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Por volta de 426 antes de Cristo, Atenas proibiu que alguém nascesse ou morresse na ilha de Delos. Por quê?",
    "resposta": "Para manter pura a ilha sagrada",
    "fonte": [
      "https://en.wikipedia.org/wiki/Delos"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Delos",
        "situacao": "ok",
        "texto": "Delos or Dilos (; Greek: Δήλος [ˈðilos]; Attic Greek: Δῆλος Dêlos, Doric Greek: Δᾶλος Dâlos), is a small Greek island near Mykonos, close to the centre of the Cyclades archipelago. Though only 3.43 km2 (1.32 sq mi) in area, it is one of the most important mythological, historical, and archaeological sites in Greece.\n[…]\nDelos was eventually abandoned around the eighth century AD.\n[…]\nThe Terrace of the Lions, also was dedicated to Apollo by the people of Naxos shortly before 600 BC. It originally had 9–12 squatting, snarling marble guardian lions along the Sacred Way; one was removed and is presently situated over the main gate of the Venetian Arsenal. The lions create a monumental avenue comparable to Egyptian avenues of sphinxes. (A Greek sphinx is in the Delos Museum.) Today, only seven of the original lions remain.\n[…]\nThe Stoivadeion dedicated to Dionysus bears a statue of the god of wine and the life-force. On either side of the platform, a pillar supports a colossal phallus, the symbol of Dionysus. The southern pillar, which is decorated with relief scenes from the Dionysiac circle, was erected around 300 BC to celebrate a winning theatrical performance. The statue of Dionysus was originally flanked by those of two actors impersonating Paposilenoi (conserved in the Archaeological Museum of Delos).\n[…]\nThe \"Delos Synagogue\", the ruins of what was once believed to be an ancient Samaritan synagogue.\n[…]\nHellenic Ministry of Culture site: Delos\n[…]\nDelos UNESCO Collection on Google Arts and Culture\n[…]\nEfA website with history of the Delos Archaeological site (in French)\n[…]\nEnglish translations of inscriptions from Delos\n[…]\nDelos Island on WikiMapia\n[…]\nThe Barrington Atlas Directory notes: Delos GRE\n[…]\n\"Delos\" . Encyclopædia Britannica. Vol. VII (9th ed.). 1878. p. 51."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Delos",
        "situacao": "ok",
        "texto": "A pequena ilha de Delos ou Delo (grego: Δήλος, Dilos), com apenas 3,14 km², situa-se no centro de um grupo de ilhas, chamadas Cíclades, no sul do Mar Egeu, tendo sido um dos principais portos em importância da região durante o período helenístico. Além disso, a ilha também foi o berço de nascimento de duas divindades do panteão grego, sendo elas o deus Apolo e a deusa Ártemis.\n[…]\nNo período clássico, durante o que ficou conhecido como as Guerras Médicas, foi a sede da Liga de Delos e inicialmente guardou o tesouro da liga. A ilha ficou sob controle de Atenas em dois momentos distintos, separados por um período de independência (314-167 a.C.). Em 167 a.C., o Senado Romano concedeu a ilha a Atenas e declarou o porto franco, iniciando um período de prosperidade econômica e de crescimento urbano em Delos.\n[…]\nA ilha é rochosa e contém pequenas colinas, separadas por pequenas áreas planas. O Monte Cinto é o ponto mais alto de Delos e alcança 112 metros. Delos continha um rio intermitente conhecido como Inopos, serviu como principal curso de água na ilha e, por isso, foi sujeito a diversas obras para seu aproveitamento.\n[…]\nNa súplica de Leto, nota-se a descrição de características físicas de Delos, ressaltando a pobreza do solo e a impossibilidade de constituir bons pastos. Além disso, ela destaca que a prosperidade na ilha, a alimentação de seus habitantes, proveria dos estrangeiros.\"Delos, prouvera quereres tornar-te um assento a meu filho,\n[…]\nDesde o século XVII da nossa era, um número crescente de europeus visitou Delos atraídos pelas ruínas. Em 1873 arqueólogos franceses começaram as escavações que desenterraram um amplo setor onde um dia existiu uma cidade completa, elegante, rica e influente. As ruínas revelaram, esparramadas por toda ilha, pequenos templos dóricos e jônicos, portos, mercados, ginásios, um teatro, praças e imponentes residências.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Síbaris",
      "descricao": "Rica colônia grega do sul da Itália, fundada no século oito a.C. e destruída em 510 a.C., origem da palavra sibarita."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "A palavra sibarita, para quem vive no luxo, vem de uma riquíssima cidade grega antiga. Em que país atual ela ficava?",
    "resposta": "Itália",
    "fonte": [
      "https://en.wikipedia.org/wiki/Sybaris"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sybaris",
        "situacao": "ok",
        "texto": "Sybaris (Ancient Greek: Σύβαρις; Italian: Sibari) was an important ancient Greek city situated on the coast of the Gulf of Taranto in modern Calabria, Italy.\n[…]\nThe ruins of Sybaris/Thurii/Copia became forgotten as they were buried by sediment from the Crati river. The ruins were rediscovered and excavated from 1932. Today they can be found southeast of Sibari in the Province of Cosenza, Calabria, Italy.\n[…]\nSybaris was founded in 720 BC by Is  [sic] of Helice, a city in Achaea in the northern Peloponnese. The Achaeans were accompanied by a number of Troezenians who were eventually expelled by the more numerous Achaeans. The Achaean colonisation was the second great migratory wave from Greece  towards the West after that of the Euboeans, concentrating instead on the Ionian coast (Metapontum, Poseidonia, Sibaris, Kroton).\n[…]\nThe city received a new democratic constitution which made provisions for ten tribes, but which did not include the Sybarites.\n[…]\nA fragment of the comedian Metagenes he quotes has a Sybarite boasting about literal rivers of food flowing through the city.\n[…]\nClaudius Aelianus attributes the fall of Sybaris to its luxury and the murder of a lutenist at the altar of Hera.\n[…]\nThe location of the city which had been buried over time by more than 6 m of alluvial sediment from the Crati river  was found only after a massive core drilling project from the early 1960s. It also lies below present groundwater level. It was also found that the later cities of Thurii and Copia were built partially above Sybaris.\n[…]\nOfficial website (in Italian)\n[…]\nCoins of Sybaris on WildWinds.com\n[…]\nCoins of Sybaris on Magna Graecia Coins"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/S%C3%ADbaris",
        "situacao": "ok",
        "texto": "Síbaris (em grego:  Σύβαρις; em italiano:  Sibari) foi uma antiga cidade grega às margens do golfo de Taranto. Foi fundada em 720 a.C. O comércio intenso a tornou não apenas rica como também uma das mais importantes cidades da Magna Grécia. O vocábulo sibarita consagrou-se como adjetivo de pessoa dada aos prazeres da vida, tendo em vista a opulência de Síbaris.\n[…]\nSíbaris era situada perto do mar e ficava entre os rios Crathis e Síbaris (a partir do qual a cidade deriva seu nome). Pesquisa mais modernas colocaram a cidade em um cume de uma laguna costeira perto de zonas úmidas. Atualmente, é um pequeno vilarejo (frazione) do comune italiano de Cassano allo Ionio.\n[…]\nSíbaris foi fundada em 720 a.C., de acordo com Pseudo-Scymnus. Estrabão menciona que era uma colônia dos aqueus e que seu fundador era de Helice, uma cidade na Acaia. Aristóteles escreveu que os aqueus foram acompanhados por um número de cidadãos de Trezena, mas eles acabaram sendo expulsos pelos mais diversos aqueus. Segundo a lenda, a cidade foi fundada por Sagaris, filho de Ájax, o Menor.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Liga de Delos",
      "descricao": "Aliança de cidades gregas liderada por Atenas, criada em 478 a.C. contra o Império Persa."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em 454 antes de Cristo, o tesouro da Liga de Delos, aliança grega contra os persas, saiu da ilha de Delos e foi levado para que cidade?",
    "resposta": "Atenas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Delian_League"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Delian_League",
        "situacao": "ok",
        "texto": "The Delian League was a confederacy of Greek city-states, numbering between 150 and 330, founded in 478 BC under the hegemony of Athens, whose purpose was to continue fighting the Persian Empire after the Greek victory in the Battle of Plataea at the end of the Second Persian invasion of Greece. The League functioned as a dual—offensive and defensive—alliance (symmachia) of autonomous states, simi\n[…]\nBy 454 Athens moved the treasury of the Delian League from the Island of Delos to the Parthenon in Athens. Benefitting greatly from the influx of cash coming out of the 150-330 members, Athens used the money to reinforce its own naval supremacy and used the remaining funds to embellish the city with art and architecture. In order to maintain the new synoecism, Athens began using its greatly expanded military to enforce membership in the League.\n[…]\nIn 454 BC, the Athenian general Pericles moved the Delian League's treasury from Delos to Athens, allegedly to keep it safe from Persia. However, Plutarch indicates that many of Pericles's rivals viewed the transfer to Athens as usurping monetary resources to fund elaborate building projects. Athens also switched from accepting ships, men and weapons as dues from league members, to only accepting money.\n[…]\nBy 454 BC, the Delian League could be fairly characterised as an Athenian Empire; a key event of 454 BC was the moving of the treasury of the Delian League from Delos to Athens. This era is often seen as a key marker of the transition from alliance to empire, but while it is significant, it is important to view the period as a whole when considering the development of Athenian imperialism, and not to focus on a single event as being the main contributor to it.\n[…]\nLendering, Jona (2020) [2005]. \"Delian League\". Livius.org.\n[…]\nMitchell, John Malcolm (1911). \"Delian League\" . Encyclopædia Britannica. Vol. 7 (11th ed.). pp. 958–962."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Liga_de_Delos",
        "situacao": "ok",
        "texto": "A Liga de Delos foi uma liga militar organizada por Atenas durante as Guerras Médicas. Tinha como  principal objetivo a defesa das cidades gregas de um ataque persa. Sua sede era na cidade de Delos. O ateniense Aristides, o Justo, organizou a força marítima da liga em 476 a.C.\n[…]\nEsparta e suas aliadas do Peloponeso no primeiro momento entraram na liga, mas depois consideraram que o perigo tinha passado e a abandonaram.\n[…]\nAs grandes cidades forneceram tropas e navios, enquanto as menores pagaram uma contribuição (phoros) ao tesouro de Delos. Depois da vitória contra os persas, Atenas forçou as cidades-estado aliadas a continuarem na liga, e transformou a contribuição de dinheiro em impostos (syntaxes).\n[…]\nEm 450 a.C., o tesouro da liga foi transferido de Delos para Atenas. Parte do dinheiro da liga foi gasto na reconstrução de Atenas, que atingiu seu máximo esplendor  e transformou-se num império marítimo e comercial durante o governo de Péricles, que também foi responsável pela construção do Partenon.\n[…]\nLiga do Peloponeso",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Expedição à Sicília",
      "descricao": "Campanha militar ateniense de 415 a 413 a.C., durante a Guerra do Peloponeso, que terminou com a destruição da frota e do exército de Atenas."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Durante a guerra contra Esparta, Atenas sofreu um desastre em 413 antes de Cristo ao tentar conquistar que grande ilha do Mediterrâneo?",
    "resposta": "Sicília",
    "fonte": [
      "https://en.wikipedia.org/wiki/Sicilian_Expedition"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sicilian_Expedition",
        "situacao": "ok",
        "texto": "The Sicilian Expedition was an Athenian military campaign in Sicily from 415 to 413 BC during the Peloponnesian War. It pitted Athens and its allies against Syracuse, supported by Sparta and Corinth. The expedition ended in a devastating defeat for the Athenians and severely weakened their position in the war.\n[…]\nAt the Congress of Gela, the Sicilian cities made peace on the basis of \"Sicily for the Sicilians\", and the Athenian fleet left for home.\n[…]\nFor instance, the Spurinna family of Tarquinia possibly continued to honor their involvement in the Sicilian Expedition for centuries.\n[…]\nIn 411 BC, the Athenian democracy was overthrown in favour of an oligarchy, and Persia joined the war on the Spartan side. Although things looked grim for Athens, they were able to recover for a few years. The oligarchy was soon overthrown, and Athens won the Battle of Cynossema; however, the defeat of the Sicilian expedition was essentially the beginning of the end for Athens. In 404 BC they were defeated and occupied by Sparta.\n[…]\nJohn Fletcher's 90 minute radio play The Sicilian Expedition – Ancient Athenian War Drama with Iraq War, which was broadcast on BBC Radio 3 in December 2005, is based on real events from the Peloponnesian War, particularly the Sicilian Expedition. Fletcher implies a parallel between U.S. involvement in the Iraq war and the Athenian aggression against Sicily, which in his view were both disastrous abroad and at home.\n[…]\nThis expedition is portrayed in the real-time strategy video game Age of Empires II DE and its DLC Chronicles: Battle for Greece.\n[…]\nRahe, Paul A. (2023). Sparta's Sicilian Proxy War: the Grand Strategy of Classical Sparta, 418-413 B.C. New York: Encounter Books. ISBN 9781641773379.\n[…]\nSicilian expedition"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Expedi%C3%A7%C3%A3o_Siciliana",
        "situacao": "ok",
        "texto": "Expedição Siciliana foi uma expedição militar ateniense à ilha da Sicília, que ocorreu entre 415–413 a.C. durante a Guerra do Peloponeso entre Atenas de um lado e Esparta, Siracusa e Corinto do outro. A expedição terminou numa derrota devastadora para as forças atenienses, o que teve um forte impacto na cidade.\n[…]\nSiracusa, assim como Esparta e seus aliados do Peloponeso, era uma cidade dórica, enquanto a maioria dos aliados de Atenas na ilha eram jônicos. Outra fonte de conflito era a estreita relação de Siracusa e outras cidades dóricas do oeste com a grande rival comercial de Atenas, a cidade de Corinto. Para os atenienses, a Sicília era uma ameaça – uma Siracusa desimpedida poderia enviar grãos ou outro tipo de ajuda aos peloponesos – bem como um local para possíveis conquistas.\n[…]\nEm resposta, Alcibíades rejeitou o ataque, apontando para o bem que tinha feito a Atenas como cidadão e líder público. Ele também refutou as advertências de Nícias sobre o plano da expedição, lembrando aos atenienses de sua obrigação para com seus aliados sicilianos, apelando ao espírito empreendedor que conquistou o império de Atenas e apontando que muitos estados na Sicília apoiariam Atenas em suas operações na ilha.\n[…]\nA assembleia estava claramente inclinada para o lado de Alcibíades, por isso Nícias, julgando improvável que cancelassem a expedição se argumentasse diretamente contra ela, escolheu uma tática diferente. Ele descreveu a riqueza e o poder das cidades sicilianas que Atenas seria um desafio e afirmou que seria necessária uma expedição maior do que a aprovada anteriormente, esperando que a perspectiva de aprovar uma despesa tão grande se revelasse pouco atraente para os cidadãos.\n[…]\nEm Esparta, Alcibíades deu aos membros da Liga do Peloponeso informações críticas sobre o Império Ateniense.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Alegoria da caverna",
      "descricao": "Alegoria de Platão sobre prisioneiros acorrentados numa caverna que só conhecem sombras projetadas na parede."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em que obra de Platão aparece a alegoria da caverna, sobre prisioneiros que só conhecem sombras projetadas na parede?",
    "resposta": "A República",
    "fonte": [
      "https://en.wikipedia.org/wiki/Allegory_of_the_cave"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Allegory_of_the_cave",
        "situacao": "ok",
        "texto": "The allegory of the cave is an allegory presented by the Greek philosopher Plato in his work Republic (514a–520a, Book VII) to compare \"the effect of education (παιδεία) and the lack of it on our nature\". It is written as a dialogue between Plato's brother Glaucon and his mentor Socrates and is narrated by the latter. The allegory is presented after the analogy of the Sun (508b–509c) and the analo\n[…]\n(See also Plato's analogy of the Sun, which occurs near the end of The Republic, Book VI.)\n[…]\nVarious scholars also debate the possibility of a connection between the work in the allegory of the cave and the work done by Plato considering the analogy of the divided line and the analogy of the Sun. The divided line is a theory presented to us in Plato's work the Republic.\n[…]\nMcNeill, William (5 January 2003). \"The Essence of Human Freedom: An Introduction to Philosophy and The Essence of Truth: On Plato's Cave Allegory and Theaetetus\". Notre Dame Philosophical Reviews.\n[…]\nMitta, Dimitra (1 January 2003). \"Reading Platonic Myths from a Ritualistic Point of View: Gyges' Ring and the Cave Allegory\". Kernos (16): 133–141. doi:10.4000/kernos.815.\n[…]\nMurphy, N. R. (April 1932). \"The 'Simile Of Light' in Plato's Republic\". The Classical Quarterly. 26 (2): 93–102. doi:10.1017/S0009838800002366. S2CID 170223655.\n[…]\nZamosc, Gabriel (2017). \"The Political Significance of Plato's Allegory of the Cave\". Ideas y Valores. 66 (165). doi:10.15446/ideasyvalores.v66n165.55201. ProQuest 1994433580.\n[…]\nAllegory of the cave at PhilPapers\n[…]\nAnimated interpretation of Plato's Allegory of the Cave at YouTube\n[…]\nTED-Ed: Plato's Allegory of the Cave at YouTube\n[…]\nPlato: The Republic, Book VII at Project Gutenberg\n[…]\nPlato: The Allegory of the Cave, from The Republic at University of Washington – Faculty\n[…]\nPlato: Book VII of The Republic, Allegory of the Cave at Shippensburg University"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Alegoria_da_Caverna",
        "situacao": "ok",
        "texto": "A alegoria da caverna, também conhecida como parábola da caverna, mito da caverna ou prisioneiros da caverna, é uma alegoria de intenção filósofo-pedagógica, escrita pelo filósofo grego Platão. Encontra-se na obra intitulada A República (Livro VII), e pretende exemplificar como o ser humano pode se libertar da condição de escuridão, que o aprisiona, por meio da luz da verdade, em que o filósofo di\n[…]\nPessoas acorrentadas, sem poderem se mover, forçados a olhar somente a parede do fundo da caverna, sem poder ver uns aos outros ou a si próprios. Atrás dos prisioneiros há uma fogueira, separada deles por uma parede baixa, por detrás da qual passam pessoas carregando objetos que representam \"homens e outras coisas viventes\". As pessoas caminham por detrás da parede de modo que os seus corpos não projetam sombras, mas sim os objetos que carregam.\n[…]\nOs prisioneiros não podem ver o que se passa atrás deles e veem apenas as sombras que são projetadas na parede em frente a eles. Pelas paredes da caverna também ecoam os sons que vêm de fora, de modo que os prisioneiros, associando-os, com certa razão, às sombras, pensam ser eles as falas das mesmas. Desse modo, os prisioneiros julgam que essas sombras sejam a realidade.\n[…]\nNa alegoria, o Sol representa a Ideia do Bem (toú agathoú idéa), citada anteriormente em A República (7:517c) como sendo o conhecimento máximo (em grego, megiston mathema) que:\n[…]\n(Platão. A República. Livro VII)\n[…]\n\"A princípio, os prisioneiros da caverna encaram a parede dos fundos. Atrás deles arde uma fogueira a partir de cuja luz eles veem projetadas nas paredes as sombras de fantoches carregados entre eles e a fogueira, e assumem essas sombras como se fossem toda a realidade. Quando se viram, podem ver a fogueira, pela qual têm que passar para sair da caverna. Acredito que a fogueira representa o eu, a velha psique não regenerada, aquela grande fonte de energia e calor.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Taranto",
      "descricao": "Cidade do sul da Itália fundada no século oito a.C. por colonos gregos com o nome de Taras."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "A cidade de Taranto, no sul da Itália, foi fundada no século oito antes de Cristo por colonos vindos de que cidade grega?",
    "resposta": "Esparta",
    "distratores": [
      "Atenas",
      "Corinto",
      "Tebas"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Taranto"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Taranto",
        "situacao": "ok",
        "texto": "Taranto (Italian: [ˈtaːranto] ; Tarantino: Tarde), historically also called Tarent in English, is a coastal city in Apulia, Southern Italy. It is the capital of the province of Taranto, serving as an important commercial port as well as the main base of the Italian navy. With a population of 185,112 as of 2026, Taranto is the second-largest city in Apulia.\n[…]\nThe Greek colonists from Sparta called the city Taras (Τάρᾱς, gen. Τάραντος Tárantos) after the mythical hero Taras, while the Romans, who connected the city to Rome with an extension of the Appian Way, called it Tarentum.\n[…]\nTaras was also the centre of a thriving decorated Greek pottery industry during the 4th century BC. Most of the South Italian Greek vessels known as Basilican ware were made in different workshops in the city.\n[…]\nA very important ingredient of the cuisine of Taranto is mussels. They are grown in the Big Sea and, above all, in the Little Sea (see above). They have been inserted in the list of Traditional Food Products by the Italian Ministry of Agricultural, Food and Forestry Policies.\n[…]\nSome of the most traditional dishes of Taranto are mussels alla puppitegna (with garlic, extra-virgin olive oil and parsley) or the impepata (\"full of pepper\" in Italian) or spaghetti with mussels, or Tubettini with mussels.\n[…]\nEvery year the city is exposed to 2.7 t (2.7 long tons; 3.0 short tons) of carbon monoxide and 57.7 t (56.8 long tons; 63.6 short tons) of carbon dioxide. In 2014, the Italian National Institute of Emissions and their Sources, stated that Taranto stands third in the world behind China's Linfen, and Copşa Mică in Romania, the most polluted cities in the world due to factories' emissions.\n[…]\nTaranto is twinned with:\n[…]\nBattle of Taranto (1940 AD)\n[…]\nTarantella (folk dance)\n[…]\nTourism in Taranto\n[…]\nMARTA: Museo nazionale ARcheologico TAranto (Taranto Archaeological National Museum)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tarento",
        "situacao": "ok",
        "texto": "Tarento (em italiano: Taranto) é uma comuna italiana, capital da província homônima, na região da Apúlia.\n[…]\nSegundo Pausânias, a cidade foi fundada por Taras, filho de Possêidon e uma ninfa local, mas foi conquistada pelos lacedemônios, liderados por Falanto.\n[…]\nSegundo outra versão, citada por Diodoro Sículo e Estrabão, a cidade foi fundada pelos partênias (partheniae) de Esparta. Durante a Primeira Guerra Messênia, que durou vinte anos, os lacedemônios juraram não retornar a Esparta até que tivessem capturado a Messênia.\n[…]\nEles deixaram em Esparta apenas os jovens e os velhos, mas, no décimo ano da guerra, as mulheres lacedemônias reclamaram que eles estavam fazendo guerra contra os Messênios em termos desiguais, pois estes, em casa, estavam tendo filhos, enquanto que os espartanos, deixando suas esposas como viúvas, iriam deixar a pátria com falta de homens.\n[…]\nSegundo outra versão, os lacedemônios os convenceram a fundar uma colônia, e eles fundaram Taras ou Tarento.\n[…]\nTarento foi uma das principais cidades da Magna Grécia, chamada pelos gregos de Taras. Teve seu apogeu no século IV a.C., sob o comando de Arquitas. Foi conquistada pelos cônsules romanos Lúcio Papírio Cursor e Espúrio Carvílio Máximo em 272 a.C. e a cidade foi por eles chamada de Tarento (em latim: Tarentum). A partir de então, entrou em decadência.\n[…]\nPágina oficial (em italiano)\n[…]\nMuseu Arqueológico Nacional de Taranto  (em italiano)\n[…]\nA Semana Santa em Taranto (em italiano)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Batalha de Queroneia",
      "descricao": "Batalha de 338 a.C. em que a Macedônia derrotou Atenas e Tebas, impondo seu domínio sobre a Grécia."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 338 antes de Cristo, na Batalha de Queroneia, que rei macedônio derrotou Atenas e Tebas e passou a dominar a Grécia?",
    "resposta": "Filipe II da Macedônia",
    "fonte": [
      "https://en.wikipedia.org/wiki/Battle_of_Chaeronea_(338_BC)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Battle_of_Chaeronea_(338_BC)",
        "situacao": "ok",
        "texto": "The Battle of Chaeronea was fought in 338 BC, near the city of Chaeronea in Boeotia, between Macedonia under Philip II and an alliance of Greek city-states led by Athens and Thebes. The battle was the culmination of Philip's final campaigns in 339–338 BC and resulted in a decisive victory for the Macedonians and their allies.\n[…]\nAfter several months of stalemate, Philip finally advanced into Boeotia in an attempt to march on Thebes and Athens. Opposing him, and blocking the road near Chaeronea, was the allied army, similar in size and occupying a strong position. Details of the ensuing battle are scarce, but after a long fight the Macedonians crushed both flanks of the allied line, which then dissolved into a rout.\n[…]\nOn the allied left, the Athenians followed Philip, their line becoming stretched and disordered; the Macedonians then turned, attacked and routed the tired and inexperienced Athenians. The southern Greek right wing, under the assault of the Macedonian troops under Alexander's command, then attacked, ending the battle.\n[…]\nHowever, some Macedonian cavalry squadrons in wedged formation, a tactical deployment Philip designed for his cavalry for just such a purpose, could have penetrated the gaps which opened amid the Greek lines, gaps which are mentioned by Diodorus in his brief account. Plutarch says that Alexander was the \"first to break the ranks of the Sacred Band of the Thebans\", the elite of the Theban infantry, who were stationed on the extreme right of the battle line.\n[…]\nThis, together with the improbability that a head-on cavalry charge against the spear-armed Thebans could have succeeded, has led Gaebel and others to suggest that Alexander must have been commanding a portion of the Macedonian phalanx at Chaeronea."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Batalha_de_Queroneia_%28338_a.C.%29",
        "situacao": "ok",
        "texto": "A Batalha de Queroneia foi uma batalha disputada por Filipe II, rei da Macedônia, contra o exército formado pela coligação entre as cidades gregas de Atenas e Tebas no ano de 338 a.C..\n[…]\nFilipe lutou contra uma nobreza turbulenta, as ligas lideradas por Atenas e Tebas, episódio que ficou conhecido para a posteridade como a batalha de Queroneia e que representou o fim da democracia ateniense e por arrastamento das outras cidades gregas, e de uma certa concepção de liberdade e uma revolução na arte da guerra.\n[…]\nNo dia 2 de agosto de 338 a.C., Filipe II da Macedônia dispôs suas forças de infantaria e cavalaria diante da coalizão grega na planície de Queroneia. Filipe contava com cerca de 25 mil infantes e 5 mil cavaleiros.\n[…]\nMesmo com todos os esforços dos tebanos para livrá-los do cerco, as primeiras formações dos macedônios já haviam se infiltrado entre as primeiras linhas atenienses e o extremo flanco esquerdo tebano. Filipe conseguira separar os dois exércitos, e agora ordenava o ataque com muito cuidado, para que a vitória não lhe escapasse.\n[…]\nNo centro, o primeiro batalhão macedônio já avançava com velocidade. No primeiro desnível, os pezeteros se deram contra os tebanos e os desbarataram sem mesmo entrar em contato com eles. Filipe ordenou o ataque da cavalaria, chamada de \"Ponta\". Esta se atirou, sob o comando de Alexandre, na direção do Batalhão Sagrado dos tebanos.\n[…]\nO Batalhão Sagrado, temido entre todos os outros, logo fincou as ponteiras das lanças no chão, a fim de suportar a carga de cavalaria, porém os macedônios soltaram uma saraivada de dardos em rápida sucessão, o que os forçou a lutar sem proteção (já que os seus escudos já estavam crivados de dardos).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Dinastia ptolemaica",
      "descricao": "Dinastia de origem macedônia que governou o Egito de 305 a 30 a.C., da morte de Alexandre até Cleópatra."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "A dinastia que governou o Egito até Cleópatra foi fundada por um general macedônio de Alexandre, o Grande. Qual era o nome dele?",
    "resposta": "Ptolomeu",
    "distratores": [
      "Seleuco",
      "Antígono",
      "Cassandro"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Ptolemaic_dynasty"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ptolemaic_dynasty",
        "situacao": "ok",
        "texto": "The Ptolemaic dynasty (; Ancient Greek: Πτολεμαῖοι, Ptolemaioi), also known as the Lagid dynasty (Λαγίδαι, Lagidai; after Ptolemy I's father, Lagus), was a Macedonian Greek royal house which the Ptolemaic Kingdom based in Egypt during the Hellenistic period. Reigning from Alexandria for 275 years, the Ptolemaic was the longest and last dynasty of ancient Egypt from 305 BC until its incorporation i\n[…]\nPtolemy, a general and one of the somatophylakes (bodyguard companions) of Alexander the Great, was appointed satrap of Egypt after Alexander's death in 323 BC. In 305 BC he declared himself Pharaoh Ptolemy I, later known as Sōtēr \"Saviour\". The Egyptians soon accepted the Ptolemies as the successors to the pharaohs of independent Egypt. The new dynasty showed respect to local traditions by adopting the Egyptian titles and iconography, while also preserving their own Greek language and culture.\n[…]\nCleopatra II Philometor Soteira (170–116 BC), co-ruler with Ptolemy VI, VIII, IX and Cleopatra III, briefly expelled Ptolemy VIII from Alexandria and ruled as sole pharaoh\n[…]\nPtolemy X Alexander I (107–88 BC) married Cleopatra Selene I, then Berenice III; ruled with Cleopatra III till 101 BC\n[…]\nAlexander Helios (born 40 BC) – elder son of Mark Antony and Cleopatra VII\n[…]\nPtolemy of Mauretania (c. 10 BC–AD 40) – client king and ruler of Mauretania for Rome. Son of King Juba II of Numidia and Mauretania and Cleopatra Selene II, daughter of Cleopatra VII and Mark Antony.\n[…]\nThe first child-producing incestuous marriage in the Ptolemaic dynasty was that of Ptolemy IV and Arsinoe III, who were succeeded as co-pharaohs by their son Ptolemy V, born 210 BC. The best-known Ptolemaic pharaoh, Cleopatra VII, was at different times married to and ruled with two of her brothers (Ptolemy XIII until 47 BC and then Ptolemy XIV until 44 BC), and their parents were also likely to have been siblings or possibly cousins."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dinastia_ptolemaica",
        "situacao": "ok",
        "texto": "A dinastia ptolemaica (ou ptolomaica) foi uma dinastia macedónica que governou o Egito de 303 a.C. a 30 a.C. Recebe a designação devido ao facto dos seus soberanos terem assumido o nome Ptolomeu (ou Ptolemeu, do grego Ptolemaios). É também conhecida como dinastia lágida em função do nome do pai do fundador da dinastia. Ptolemeu foi um dos generais de Alexandre, o Grande.\n[…]\nA dinastia insere-se no período helenístico, época que decorre entre a morte de Alexandre e a ascensão do Império Romano, durante a qual se assistiu à difusão da civilização grega pela bacia do mar Mediterrâneo, criando novas formas artísticas, religiosas e políticas. Embora tivesse uma origem estrangeira, a dinastia ptolemaica respeitou a cultura egípcia, revivendo alguns dos seus aspectos do passado e adotando as suas divindades.\n[…]\nOs faraós desta dinastia foram responsáveis por várias construções, entre as quais se destacam a cidade de Alexandria (com o seu farol e biblioteca), o templo de Hórus em Edfu e o templo de Ísis em Filas.\n[…]\nSob a égipe dos ptolomeus, o Egito experimentou um grande progresso. Sua poderosa e ágil marinha o transformou no mais poderoso reino grego.\n[…]\nReino Ptolemaico",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Partenon",
      "descricao": "Templo dórico dedicado a Atena, na Acrópole de Atenas, construído no século V a.C."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Quantas colunas tem a fachada principal do Partenon, voltada para o leste?",
    "resposta": "Oito",
    "distratores": [
      "Seis",
      "Dez",
      "Doze"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Parthenon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Parthenon",
        "situacao": "ok",
        "texto": "The Parthenon (; Ancient Greek: Παρθενών, romanised: Parthenōn [par.tʰe.nɔ̌ːn]; Greek: Παρθενώνας, romanised: Parthenónas [parθeˈnonas]) is a former temple on the Athenian Acropolis, Greece, that was dedicated to the goddess Athena. Its decorative sculptures are considered some of the high points of classical Greek art, and the Parthenon is considered an enduring symbol of ancient Greece, Western \n[…]\nScholars have proposed several explanations for the curvatures found in Parthenon. The primary explanation is based on the Optical Correction or Irradiance Theory, proposed in An Investigation of the Principles of Athenian Architecture by Francis Penrose in 1851. The theory asserts that convex adjustments were made to counteract the concave appearance silhouetted objects can have to the human eye.\n[…]\nToday it attracts millions of tourists every year, who travel up the path at the western end of the Acropolis, through the restored Propylaea, and up the Panathenaic Way to the Parthenon, which is surrounded by a low fence to prevent damage.\n[…]\nThe last remaining slabs from the western section of the Parthenon frieze were removed from the monument in 1993 for fear of further damage. They have now been transported to the new Acropolis Museum. Until cleaning of the remaining sculptures was completed in 2005, black crusts and coatings were present on the marble surface.\n[…]\nSince the 19th century, the Parthenon's exterior has been encased in various extents of scaffolding until September 2025, when the scaffolding on the western side was removed temporarily. The Greek government says that it intends to remove all scaffolding from the monument altogether by 2026 after the completion of restoration works. The Parthenon's fully restored west pediment was unveiled in June 2026."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Partenon",
        "situacao": "ok",
        "texto": "Partenon (em grego antigo: Παρθενών, transl Parthenōn; em grego moderno Παρθενώνας, transl. Parthenónas) foi um templo dedicado à deusa grega Atena, construído no século V a.C.\n[…]\nO Partenon foi convertido em igreja cristã nos tempos do Império Bizantino, dedicado ao culto da Virgem Maria (Parthena Maria) e Mãe de Deus (Teótoco). Na conversão do templo em igreja, foram retiradas as colunas internas e algumas paredes da cela. Foi também criada uma abside no lado leste, o que levou à remoção de algumas esculturas. Esses deuses depostos eram ou reinterpretados de acordo com um tema cristão ou destruídos.\n[…]\nséculo VI — Conversão em igreja Ortodoxa Grega. Monges retiram colunas internas, destroem esculturas consideradas pagãs e criam uma capela na fachada leste\n[…]\nO templo foi construído na ordem dórica, considerado o representante máximo desse estilo. O Partenon é um templo dórico períptero e octostilico com alguns elementos da ordem jônica. Ergue-se sobre uma plataforma ou estilóbata de três degraus. Como outros templos gregos, possui frontão e lintel sustentados por colunas (períptero) suportando um entablamento. Oito colunas na fachada da frente e oito na fachada dos fundos, e dezessete em cada lado. Há uma fileira dupla de colunas em cada extremidade.\n[…]\nEspecula-se que as dimensões do edifício expressem a razão dourada, proposta por Pitágoras no século anterior. Está cercado por uma colunata (peristilo) em octoestilo dórico, com oito colunas frontais em vez de seis como era costume na época, e dezessete de cada lado perfazendo um total de 46 colunas, se diminuirmos as comuns entre as fachadas e as laterais.\n[…]\nPartenon (Nashville)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Tragédia grega",
      "descricao": "Gênero teatral surgido em Atenas no século seis a.C., encenado nos festivais de Dionísio, com atores mascarados e coro."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Na tragédia grega clássica, além do coro, no máximo quantos atores com falas podiam estar ao mesmo tempo em cena?",
    "resposta": "Três",
    "distratores": [
      "Dois",
      "Quatro",
      "Cinco"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Three-actor_rule",
      "https://en.wikipedia.org/wiki/Greek_tragedy"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Three-actor_rule",
        "situacao": "inexistente",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Greek_tragedy",
        "situacao": "ok",
        "texto": "Greek tragedy (Ancient Greek: τραγῳδία, romanized: tragōidía) is one of the three principal theatrical genres from Ancient Greece and Greek-inhabited Anatolia, along with comedy and the satyr play. It reached its most significant form in Athens in the 5th century BC, the works of which are sometimes called Attic tragedy.\n[…]\nThe origin of Greek tragedy is one of the unsolved problems of classical scholarship. Ruth Scodel notes that, due to lack of evidence and doubtful reliability of sources, we know nearly nothing about tragedy's origin. Still, R.P. Winnington-Ingram points out that we can easily trace various influences from other genres.\n[…]\nApproaching antiquity from a contemporary outlook, especially with regard to the construction and form of the plays, hinders any understanding of classical Greek society.\n[…]\nThe idea behind this Greek tragedy is that Prometheus is punished by Zeus not only for the crime of giving humanity divine knowledge but also for believing that by doing so, humanity would, in some way, praise Prometheus as a champion for justice and see Zeus as nothing more than a tyrant.\n[…]\nEasterling e.a. (eds.) (1989) The Cambridge History of Classical Literature Vol. 1 Pt. 2: Greek Drama (Cambridge: Cambridge University Press).\n[…]\nGregory, J. (2005). A Companion to Greek Tragedy. Oxford: Blackwell Publishing.\n[…]\nHarvey, A. E. (1955) \"The Classification of Greek Lyric Poetry\" in: Classical Quarterly 5.\n[…]\nLey, G. (2015) 'Acting Greek Tragedy' (Exeter: University of Exeter Press).\n[…]\nHall, Edith (2010). Greek Tragedy: Suffering Under the Sun. Oxford, UK: Oxford University Press. ISBN 978-0199232512. Further reading section includes extensive references to commentaries and interpretations for all extant ancient Greek tragedies.\n[…]\nGilbert Norwood (1920), Greek tragedy, Methuen & Co. Ltd."
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Sócrates",
      "descricao": "Filósofo grego de Atenas (c. 470–399 a.C.), mestre de Platão."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Sócrates é um dos filósofos mais influentes da história ocidental. Quantos livros ele deixou escritos?",
    "resposta": "Nenhum",
    "fonte": [
      "https://en.wikipedia.org/wiki/Socrates"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Socrates",
        "situacao": "ok",
        "texto": "Socrates (; Ancient Greek: Σωκράτης, romanized: Sōkrátēs; c. 470 – 399 BC) was an ancient Greek philosopher from Classical Athens, perhaps the first Western moral philosopher, and a major inspiration on his student Plato, who largely founded the tradition of Western philosophy. An enigmatic figure, Socrates authored no texts and is known mainly through the posthumous accounts of classical writers,\n[…]\nGenerally, logoi Sokratikoi cannot help us to reconstruct the historical Socrates even in cases where their narratives overlap, as authors may have influenced each other's accounts.\n[…]\nWhat is certain is that by the age of 45, Socrates had already captured the interest of Athenians as a philosopher. It is not clear whether Aristophanes's work is useful in reconstructing the historical Socrates.\n[…]\nLater, ancient philosophy scholar Gregory Vlastos suggested that the early Socratic dialogues of Plato were more compatible with other evidence for a historical Socrates than his later writings, an argument that is based on inconsistencies in Plato's own evolving depiction of Socrates. Vlastos totally disregarded Xenophon's account except when it agreed with Plato's. More recently, Charles H.\n[…]\nKahn has reinforced the skeptical stance on the unsolvable Socratic problem, suggesting that only Plato's Apology has any historical significance.\n[…]\nSocratic doctrines were altered to match Islamic faith: according to Muslim scholars, Socrates made arguments for monotheism and for the temporality of this world and rewards in the next life. His influence in the Arabic-speaking world continues to the present day.\n[…]\nIn the 18th century, German idealism revived philosophical interest in Socrates, mainly through Hegel's work. For Hegel, Socrates marked a turning point in the history of humankind by the introduction of the principle of free subjectivity or self-determination.\n[…]\nList of cultural depictions of Socrates"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/S%C3%B3crates",
        "situacao": "ok",
        "texto": "Sócrates (em grego:  Σωκράτης, AFI: [sɔːkrátɛːs], transl. Sōkrátēs; Alópece, c. 470 a.C. – Atenas, 399 a.C.) foi um filósofo ateniense do período clássico da Grécia Antiga. Creditado como um dos fundadores da filosofia ocidental, é até hoje uma figura enigmática, conhecida principalmente através dos relatos em obras de escritores que viveram mais tarde, especialmente dois de seus alunos, Platão e \n[…]\nFoi o Sócrates de Platão que fez contribuições importantes e duradouras aos campos da epistemologia e da lógica, e a influência de suas ideias e de seu método continuam a ser importantes alicerces para boa parte dos filósofos ocidentais que se seguiram a ele.\n[…]\nSócrates, então, deixou o tribunal e foi para a prisão. Como existia uma lei que exigia que nenhuma execução acontecesse durante a viagem votiva de um navio sagrado a Delos, Sócrates ficou a ferros por 30 dias, sob custódia de onze magistrados encarregados em Atenas da polícia e da administração penitenciária.\n[…]\nSócrates provocou uma ruptura sem precedentes na história da Filosofia grega, por isso ela passou a considerar os filósofos entre pré-socráticos e pós-socráticos. Enquanto os filósofos pré-Socráticos, chamados de naturalistas, procuravam responder a questões do tipo: \"O que é a natureza ou o fundamento último das coisas?\" Sócrates, por sua vez, procurava responder à questão: \"O que é a natureza ou a realidade última do homem?\".\n[…]\nAcreditava que os seres humanos possuíam certas virtudes, tanto filosóficas quanto intelectuais. Dizia que a virtude era a mais importante de todas as coisas.\n[…]\n[Sócrates] ensinou aos seus companheiros a desprezar as leis estabelecidas insistindo na loucura de nomeação de funcionários públicos por sorteio, quando nenhum iria escolher um piloto ou construtor ou flautista por sorteio, nem qualquer outro artesão de trabalho em que os erros são muito menos desastrosos do que erros na arte de governar.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Jogos Olímpicos da Antiguidade",
      "descricao": "Festival esportivo e religioso realizado no santuário de Olímpia, na Grécia Antiga."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Segundo a tradição grega, em que ano foram disputados os primeiros Jogos de Olímpia?",
    "resposta": "776 a.C.",
    "distratores": [
      "753 a.C.",
      "812 a.C.",
      "704 a.C."
    ],
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
        "texto": "Os Jogos Olímpicos da Antiguidade eram um festival religioso e atlético da Grécia Antiga, que se realizava de quatro em quatro anos no santuário de Olímpia, em honra de Zeus. A data tradicional atribuída à primeira edição dos Jogos Olímpicos é 776 a.C..\n[…]\nOs próximos a celebrarem jogos em Olímpia foram Pélope, Amitaão, filho de Creteu, os irmãos Neleu e Pélias, Augias e Héracles, filho de Anfitrião. Óxilo foi o último desta era a celebrar os jogos, que não voltaram a ser celebrados até seu descendente Ífito de Élida.\n[…]\nNão poderiam participar nos jogos os estrangeiros (os \"bárbaros\" segundo a mitologia grega), os escravos e as mulheres - sugere-se que somente a sacerdotisa de Deméter poderia estar presente no altar em homenagem à deusa. As mulheres que violassem a regra seriam atiradas do alto do Monte Tipéon. Havia uma competição exclusivamente feminina, a Heraea, nome dado em homenagem à Hera, mulher de Zeus.\n[…]\nEste tipo de prova incluía as corridas de bigas ou de cavalo de sela. Nas primeiras poderiam usar-se dois cavalos (bigas) ou quatro cavalos (quadrigas). As quadrigas teriam sido introduzidas nos Jogos Olímpicos pela primeira vez em 680 a.C. e as corridas de cavalo de sela em 648 a.C.. Uma corrida de carros consistia em doze voltas ao hipódromo, tendo cada volta entre 823 e 914 metros; a corrida de cavalo era uma volta do hipódromo.\n[…]\n776 a.C.: Estádio (stadio)\n[…]\nCerimonias no santuário de Pélops, identificado pela tradição como o primeiro vencedor dos jogos. Reconstituição das suas cerimônias fúnebres.\n[…]\nCerimônias dos Jogos Olímpicos\n[…]\nSwaddling, Judith (2000). The Ancient Olympic Games. Texas: University of Texas Press. ISBN 0292777515\n[…]\nOs Jogos Olímpicos na Grécia Antiga\n[…]\n«A verdadeira história dos Jogos Olímpicos» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Templo de Zeus Olímpico (Atenas)",
      "descricao": "Colossal templo de Atenas, iniciado no século seis a.C. e concluído pelo imperador romano Adriano no século dois d.C."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Começado no século seis antes de Cristo e só concluído pelo imperador romano Adriano, que templo de Atenas era ainda maior que o Partenon?",
    "resposta": "Templo de Zeus Olímpico",
    "fonte": [
      "https://en.wikipedia.org/wiki/Temple_of_Olympian_Zeus,_Athens"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Temple_of_Olympian_Zeus,_Athens",
        "situacao": "ok",
        "texto": "The Temple of Olympian Zeus (Ancient Greek: Ναὸς τοῦ Ὀλυμπίου Διός, Naós tou Olympíou Diós), also known as the Olympieion or Columns of the Olympian Zeus, is a colossal temple in the centre of Athens, now in ruins. It was dedicated to \"Olympian\" Zeus, a name originating from his position as head of the Olympian gods.\n[…]\nBefore the entrance to the sanctuary of Zeus Olympios [in Athens] – Hadrian the Roman emperor dedicated the temple and the statue, one worth seeing, which in size exceeds all other statues save the colossi at Rhodes and Rome, and is made of ivory and gold with an artistic skill which is remarkable when the size is taken into account – before the entrance, I say, stand statues of Hadrian, two of Thasian stone, two of Egyptian.\n[…]\nBefore the pillars stand bronze statues which the Athenians call ‘colonies.’ The whole circumference of the precincts is about four states, and they are full of statues; for every city has dedicated a likeness of the emperor Hadrian, and the Athenians have surpassed them in dedicating, behind the temple, the remarkable colossus. Within the precincts are antiquities: a bronze Zeus, a temple of Kronos and Rhea and an enclosure of Gaia (Earth) surnamed Olympias.\n[…]\nThe ancient sanctuary of Zeus Olympios the Athenians say was built by Deukalion, and they cite as evidence that Deukalion lived at Athens a grave which is not far from the present temple. Hadrian constructed other buildings also for the Athenians: a temple of Hera and Zeus Panellenios (Common to all Greeks).\n[…]\nList of Ancient Greek temples\n[…]\nHellenic Ministry of Culture: Temple of Olympian Zeus website\n[…]\nTemple of Zeus photos\n[…]\nNASA Astronomy Picture of the Day: The Analemma and the Temple of Olympian Zeus (23 December 2006)\n[…]\nTemple of Olympian Zeus: Description in English, Photos, Opening Hours, Ticket prices"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Templo_de_Zeus_Ol%C3%ADmpico",
        "situacao": "ok",
        "texto": "Nota: se procura o templo de mesmo nome em Agrigento consulte Templo de Zeus Olímpico (Agrigento)\n[…]\nO templo de Zeus Olímpico, também conhecido como Olimpeu (em grego: Ολυμπείων; romaniz.: Olympeion; em latim: Olympeum), é a ruína monumental de um antigo templo dedicado a Zeus em sua qualidade de rei dos deuses do Olimpo. Está localizado no centro de Atenas, na Grécia. Sua construção começou no século VI a.C. e só foi concluída no reinado de Adriano. Em seu apogeu foi um dos maiores e mais famosos templos gregos.\n[…]\nNo saque de Atenas por Lúcio Cornélio Sula em 86 a.C. a construção foi espoliada, e algumas de suas colunas acabaram sendo usadas no templo de Júpiter Capitolino, em Roma. Augusto tentou terminar a obra, mas somente Adriano o conseguiria. Ele acrescentou um prescinto, uma enorme estátua de ouro e marfim de Zeus, e o adornou de estátuas de deuses e personificações das províncias romanas.\n[…]\nEm gratidão o povo de Atenas ergueu uma estátua colossal do imperador atrás do templo, que foi consagrado em 132, ocasião em que Adriano adotou o título de Panhellenios (de todos os gregos).\n[…]\nRecentemente o Terceiro Eforado de Antiguidades Pré-históricas e Clássicas, órgão responsável pela administração arqueológica local, unificou a área do templo com outras ruínas localizadas nas proximidades, e hoje o sítio do Olimpeu inclui o templo de Zeus propriamente dito, o templo de Apolo Delfínio, o pequeno templo de Reia e Cronos, termas romanas, residências clássicas, uma basílica do século V e parte dos antigos muros da cidade.\n[…]\nO famoso Arco de Adriano está localizado imediatamente ao lado.",
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
