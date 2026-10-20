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
      "nome": "Oráculo de Delfos",
      "descricao": "Santuário de Apolo na Grécia antiga, onde a sacerdotisa Pítia dava profecias."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "O oráculo de Delfos, onde a sacerdotisa Pítia falava em nome de Apolo, ficava na encosta de qual monte?",
    "resposta": "Monte Parnaso",
    "distratores": [
      "Monte Olimpo",
      "Monte Ida",
      "Monte Athos"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Delphi",
      "https://en.wikipedia.org/wiki/Pythia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Delphi",
        "situacao": "ok",
        "texto": "Delphi (; Greek: Δελφοί [ðelˈfi]), in legend previously called Pytho (Πυθώ), was an ancient sacred precinct in central Greece. It was the seat of Pythia, the major oracle who was consulted about important decisions throughout the ancient classical world. The ancient Greeks considered the centre of the world to be in Delphi, marked by the stone monument known as the Omphalos of Delphi. The term omp\n[…]\nThe sacred precinct occupies a delineated region on the southwestern slope of Mount Parnassus. It is now an extensive archaeological site, and since 1938, it has been a part of Parnassos National Park.\n[…]\nToday Delphi is a municipality of Greece as well as a modern town adjacent to the ancient precinct. The modern town was created after removing buildings from the sacred precinct so that the latter could be excavated. The two Delphis, old and new, are located on Greek National Road 48 between Amfissa in the west and Livadeia, capital of Boeotia, in the east. The road follows the northern slope of a pass between Mount Parnassus on the north and the mountains of the Desfina Peninsula on the south.\n[…]\nHomeric Hymn 3, \"To Apollo\", is the oldest of the three loci, dating to the seventh century BC (estimate). Apollo travels about after his birth on Delos seeking a place for an oracle. He is advised by Telephus to choose Crissa \"below the glade of Parnassus\", which he does, and has a temple built, having killed the serpent that guards the spring. Subsequently, some Cretans from Knossos sail up on a mission to reconnoitre Pylos. Changing into a dolphin, Apollo casts himself on deck.\n[…]\nOne tale of the sanctuary's discovery states that a goatherd, who grazed his flocks on Parnassus, one day observed his goats playing with great agility upon nearing a chasm in the rock; the goatherd noticing this held his head over the chasm causing the fumes to go to his brain; throwing him into a strange trance."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pythia",
        "situacao": "ok",
        "texto": "Pythia (; Ancient Greek: Πυθία [pyːˈtʰíaː]) was the title of the high priestess of the Temple of Apollo at Delphi in central Greece. She served as its oracle and was known as the Oracle of Delphi. Her title was sometimes historically glossed in English as the Pythoness.\n[…]\nSince the first operation of the oracle of the Temple of Delphi, it was believed that the god lived within a laurel, his holy plant, and gave oracles for the future with the rustling of the leaves. It was also said that the art of divination had been taught to the god by the three winged sisters of Parnassus, the Thriae, at the time when Apollo was grazing his cattle there.\n[…]\nIt is not known whether the Oracle participated with the Dionysian rites of the Maenads or Thyades in the Korykion cave on Mount Parnassos, although Plutarch informs us that his friend Clea was both a Priestess to Apollo and to the secret rites of Dionysus. The male priests seem to have had their own ceremonies to the dying and resurrecting god. Apollo was said to return at the beginning of spring, on the seventh day of the month of Bysios, his birthday.\n[…]\nThe Pythia would then bathe naked in the Castalian Spring, then drink the holier waters of the Cassotis, which flowed closer to the temple, where a naiad possessing magical powers was said to live. Euripides described this ritual purification ceremony, starting first with the priest Ion dancing on the highest point of Mount Parnassus, going about his duties within the temple, and sprinkling the temple floor with holy water.\n[…]\nDelphic sibyl\n[…]\nPlutarch, De defectu oraculorum (\"On the Decline of Oracles\"), De Pythiae Oraculis (\"On the Oracles of the Pythia\"), and De E apud Delphos (\"On the E at Delphi\") in Moralia, vol. 5 (Loeb Library, Harvard University Press)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Delfos",
        "situacao": "ok",
        "texto": "Delfos é uma moderna cidade grega muito conhecida por seu sítio arqueológico, que foi declarado Patrimônio Mundial pela UNESCO. Em épocas antigas, era o local dos Jogos Píticos e de um famoso oráculo (o oráculo de Delfos), que ficava dentro de um templo dedicado ao deus Apolo, elaborado por Trofônio e Agamedes. Delfos era reverenciado por todo o mundo grego como o omphalos, o centro do universo.\n[…]\nDelfos fica em um planalto semicircular conhecido como Phaedriades, junto ao monte Parnaso, e sobranceiro ao vale de Pleistos. 15 km a sudoeste de Delfos, há a cidade-porto de Kirrha, no golfo de Corinto.\n[…]\nSegundo a mitologia grega, no local a deusa Têmis era responsável pelo oráculo, que era guardado pela serpente Píton. Apolo, que havia aprendido a arte da profecia de Pã, filho de Zeus e Húbris, matou a serpente e tomou o oráculo.\n[…]\nEm Delfos havia uma fonte que emitia os vapores que permitiam ao oráculo de Delfos fazer as suas profecias. Apolo matou Píton, mas teve que ser punido por isso, dado que Píton era filha de Gaia. O altar dedicado a Apolo provavelmente foi dedicado originalmente a Gaia e depois a Posidão. O oráculo nesse tempo predizia o futuro baseado na água ondulante e no sussurro das folhas das árvores.[carece de fontes]?\n[…]\nO primeiro oráculo de Delfos era conhecido geralmente como Sibila, embora seu nome fosse Herófila. Ela cantava as predições que recebia de Gaia. Mais tarde, Sibila tornou-se um título dado a qualquer sacerdotisa devotada ao oráculo. A Sibila apresentava-se sentada na rocha sibilina, respirando os vapores vindos do chão e emitindo as suas frequentemente intrigantes e confusas predições. Pausanias afirmava que a Sibila \"nasceu entre o homem e a deusa, filha do monstro do mar e uma ninfa imortal\".\n[…]\nMuseu Arqueológico de Delfos\n[…]\n| Scientif American: A fonte do poder no Oráculo de Delfos\n[…]\nO ¨E¨ dos Delphi e do \"Conhece a ti mesmo\"",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Troia",
      "descricao": "Cidade lendária da Guerra de Troia, identificada com o sítio arqueológico de Hisarlik, na Anatólia."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Os arqueólogos identificam a Troia de Homero com ruínas na colina de Hisarlik, perto do estreito dos Dardanelos. Em que país fica esse sítio?",
    "resposta": "Turquia",
    "fonte": [
      "https://en.wikipedia.org/wiki/Troy"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Troy",
        "situacao": "ok",
        "texto": "Troy or Ilion was an ancient city located in present-day Çanakkale, Turkey. It is best known as the setting for the Greek myth of the Trojan War. The modern-day archaeological site, also known as Hisarlık, is open to the public as a tourist destination, and was added to the UNESCO World Heritage list in 1998.\n[…]\nEarly modern travellers in the 16th and 17th centuries, including Pierre Belon and Pietro Della Valle, had mistakenly identified Troy with Alexandria Troas, a ruined Hellenistic town approximately 20 kilometres (12 mi) south of Hisarlık. In the late 18th century, French scholar Jean-Baptiste le Chevalier identified a location near the village of Pınarbaşı, Ezine, a mound approximately 5 kilometres (3.1 mi) south of the currently accepted location.\n[…]\nThe next excavation at Hisarlık was conducted in 1865 by Frank Calvert, a man of English descent who owned a farm nearby. Calvert made extensive surveys of the site and correctly identified it with classical-era Ilion. This identification convinced Heinrich Schliemann that Homeric Troy should be sought beneath the classical-era remains and led to their subsequent partnership.\n[…]\nTroy VI–VII is believed to be the city referred to as Wilusa and Taruisa in Hittite records. These correspondences were first proposed in 1924 by E. Forrer on the basis of linguistic similarities, since \"Taruisa\" is a plausible correspondent of the Greek name \"Troia\" and \"Wilusa\" likewise for the Greek \"Wilios\" (later \"Ilion\"). Subsequent research on Hittite geography has made these identifications more secure, though not all scholars regard them as firmly established.\n[…]\nDardanians (Trojan)\n[…]\nTroia Projekt and CERHAS (2013). \"Welcome to Troy\". Troy. University of Cincinnati. Archived from the original on 14 May 2008. Retrieved 8 August 2013."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Troia",
        "situacao": "ok",
        "texto": "Troia AO 1990 (em grego antigo Τροία, transl. Troia, ou Ίλιον, transl. Ílion; em latim Troia ou Ilium; em hitita Wilusa ou Truwisa; em turco Truva) é uma cidade lendária, onde ocorreu a célebre Guerra de Troia, descrita na Ilíada, um dos poemas atribuídos a Homero.\n[…]\nNos anos 1870 o arqueólogo alemão Heinrich Schliemann escavou a área. As escavações revelaram várias cidades construídas em sucessão a cada outra. Uma das cidades (Troia VII) é frequentemente identificada com a Troia homérica. Enquanto uma identidade é disputada, o sítio é sucessivamente identificado com a cidade chamada Wilusa em textos hititas; Ilion (grafada originalmente como Ϝιλιον, Wilion, com a letra grega Ϝ) é tida como a versão grega daquele nome.\n[…]\nA história dos troianos começou em mito. De acordo com a mitologia grega, os troianos foram os antigos cidadãos de Troia na Anatólia, atual Turquia. Embora parte da Ásia, Troia é apresentada na lenda como parte da cultura grega de cidades-estado.Troia era conhecida por seus ricos ganhos do comércio portuário com o leste e o oeste, roupas pomposas, produção de ferro e maciças muralhas de defesa. A família real troiana partiu de Electra e Zeus, os pais de Dardano.\n[…]\nPosteriormente, Dardano desposou as filhas de Teucro, e fundou Dardânia (mais tarde governada por Eneias). Com a morte de Dardano, o reino foi passado a seu neto Tros, que chamou seus habitantes de troianos e a terra de Trôade, derivados de seu próprio nome. Ilo, filho de Tros, fundou a cidade de Ilion (Troia), nome derivado do dele próprio. Zeus deu a Ilo o paládio. Posídon e Apolo construíram as muralhas e fortificações ao redor de Troia para Laomedonte, filho mais jovem de Ilo.\n[…]\nEsta é uma lista de soberanos de Troia de acordo com a mitologia grega:",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Ulisses",
      "descricao": "Herói grego da Guerra de Troia e protagonista da Odisseia de Homero."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Na Odisseia, Ulisses passa anos tentando voltar para casa. De que ilha grega ele era rei?",
    "resposta": "Ítaca",
    "fonte": [
      "https://en.wikipedia.org/wiki/Odysseus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Odysseus",
        "situacao": "ok",
        "texto": "In Greek and Roman mythology, Odysseus ( , US also  ; Ancient Greek: Ὀδυσσεύς, Ὀδυσεύς, romanized: Odysseús, Odyseús, IPA: [o.dy(s̠).s̠ěu̯s̠]), also known by the Latin variant Ulysses (, UK also ; Latin: Ulysses, Ulixes), is a legendary Greek king of Ithaca and the hero of Homer's epic poem, the Odyssey. Odysseus also plays a key role in Homer's Iliad and other works in that same epic cycle.\n[…]\nOdysseus is one of the most recurrent characters in Western culture.\n[…]\nDante Alighieri, in the Canto XXVI of the Inferno segment of his Divine Comedy (1308–1320), encounters Odysseus (\"Ulisse\" in Italian) near the very bottom of Hell: with Diomedes, he walks wrapped in flame in the eighth ring (Counselors of Fraud) of the Eighth Circle (Sins of Malice), as punishment for his schemes and conspiracies that won the Trojan War. In a famous passage, Dante has Odysseus relate a different version of his voyage and death from the one told by Homer.\n[…]\nIn television series, he has been played by Bekim Fehmiu in Odissea (dal Poema di Omero) (1968), Armand Assante in The Odyssey (1997), Nigel Whitmey in Helen of Troy (2003), and by Joseph Mawle in Troy: Fall of a City (2018).\n[…]\nAncient sources also state that Odysseus was honored in Trampya.\n[…]\nOdysseus Unbound\n[…]\nBittlestone, Robert; Diggle, James; Underhill, John (2005). Odysseus Unbound: The Search for Homer's Ithaca. Cambridge, UK: Cambridge University Press. ISBN 0-521-85357-5. Retrieved 13 February 2021. (Odysseus Unbound Foundation)\n[…]\nBraccesi, Lorenzo (2023). Ulisse: rifrangenze poetiche [Ulysses: poetic refractions] (in Italian). Rome: L'Erma di Bretschneider. ISBN 978-88-913-2848-9.\n[…]\n\"The Unexpected World of the Odyssey: Discovering the Surprising Inspirations Behind Homer's Great Tales of the Trojan War,\" the Editors, Archaeology, May/June 2026, pgs. 22-31\n[…]\n\"Archaeological discovery in Greece may be the tomb of Odysseus\" from the Madera Tribune"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Odisseu",
        "situacao": "ok",
        "texto": "Odisseu (em grego:  Οδυσσεύς, transl.: Odysséus) ou Ulisses (em latim: Ulysses ou Ulixes) foi, na mitologia grega e na mitologia romana um personagem da Ilíada e da Odisseia, de Homero. É a personagem principal dessa última obra, e uma figura à parte na narrativa da Guerra de Troia. É um dos mais ardilosos guerreiros de toda a epopeia grega, mesmo depois da guerra, quando do seu longo retorno ao s\n[…]\nHerói grego, Odisseu era rei de Ítaca e filho de Laerte e Anticleia. Seu pai era filho único de Arcésio e sua mãe era filha de Autólico, um famoso ladrão.\n[…]\nApós a derrota dos troianos, ele iniciou uma viagem de dez anos de volta para Ítaca onde a sua mulher o espera com uma fidelidade obstinada, apesar da demora. Essa viagem mereceu a criação por Homero do poema épico Odisseia, na qual são narradas as aventuras e desventuras de Odisseu e sua tripulação desde que deixam Troia, algumas causadas por eles e outras devido à intervenção dos deuses.\n[…]\nQuando cegaram o ciclope Polifemo, despertaram a ira de Posídon, que os atormentou por anos. Depois, ainda tentado voltar para Ítaca, acabou indo para a ilha de Calipso, uma mulher que o aprisionou em sua ilha durante anos e não o soltaria de lá até que ela se casasse com ele.\n[…]\nCom a ajuda de Zeus e de outros deuses, Odisseu chegou a casa sozinho para encontrar sua esposa Penélope, importunada por pretendentes. Disfarçado como mendigo, primeiro verificou se Penélope lhe era fiel e, em seguida, matou os pretendentes à sua sucessão que a perseguiam, limpando o palácio. Com isso, iniciou-se uma batalha final contra as famílias dos homens mortos, mas a paz foi restaurada por Atena.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Labirinto de Creta",
      "descricao": "Construção lendária do rei Minos, em Creta, onde vivia o Minotauro."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "O mito do labirinto do Minotauro costuma ser associado às ruínas de qual grande palácio da Idade do Bronze?",
    "resposta": "Cnossos",
    "distratores": [
      "Micenas",
      "Tirinto",
      "Pilos"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Knossos",
      "https://en.wikipedia.org/wiki/Labyrinth"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Knossos",
        "situacao": "ok",
        "texto": "Knossos (; Ancient Greek: Κνωσσός, romanized: Knōssós; Greek: Κνωσός, romanized: Knōsós; Linear B: 𐀒𐀜𐀰 Ko-no-so) is an archaeological site and ancient urban centre in Crete, Greece. It is located within the southern periphery of Heraklion, about 5 km (3.1 mi) south of the city's historic centre. The site was occupied from the Neolithic period into the first millennium AD and became the largest and\n[…]\nKnossos is closely associated with the Greek myths of Minos, Pasiphaë, Ariadne, Theseus, Daedalus, Icarus and the Minotaur. In later Greek tradition, the complex plan of the palace was remembered as the Labyrinth. In 2025, Knossos was inscribed as part of the UNESCO World Heritage Site Minoan Palatial Centres, together with Phaistos, Malia, Zakros, Zominthos and Kydonia.\n[…]\nThe palace's complex arrangement of rooms and passages has long been associated with the later Greek tradition of the Labyrinth.\n[…]\nKnossos is one of the most visited archaeological sites in Greece. Its fame rests on the scale of the palace, its mythological associations, its reconstructed architecture and its importance in the study of European prehistory.\n[…]\nAenesidemus, philosopher associated with Pyrrhonist scepticism\n[…]\nChersiphron, architect traditionally associated with the Temple of Artemis at Ephesus\n[…]\nHood, Sinclair (1971). The Minoans: Crete in the Bronze Age. London: Thames and Hudson. ISBN 978-0-500-02073-9.\n[…]\nMacGillivray, J. A. (2000). Minotaur: Sir Arthur Evans and the Archaeology of the Minoan Myth. New York: Hill and Wang. ISBN 978-0-8090-3035-4.\n[…]\nMcEnroe, John C. (2010). Architecture of Minoan Crete: Constructing Identity in the Aegean Bronze Age. Austin: University of Texas Press. ISBN 978-0-292-72193-7.\n[…]\nMomigliano, Nicoletta, ed. (2007). Knossos Pottery Handbook: Neolithic and Bronze Age (Minoan). British School at Athens Studies. Vol. 14. British School at Athens. ISBN 978-0-904887-55-6."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Labyrinth",
        "situacao": "ok",
        "texto": "In Greek mythology, the Labyrinth (Ancient Greek: λαβύρινθος, romanized: Labúrinthos) is an elaborate, confusing structure designed and built by the mythological artificer Daedalus for King Minos of Crete at Knossos. Its function was to hold the Minotaur, the monster eventually killed by the hero Theseus. Daedalus had so cunningly made the Labyrinth that he could barely escape it after he built it\n[…]\nAlthough early Cretan coins occasionally exhibit branching (multicursal) patterns, the single-path (unicursal) seven-course \"Classical\" design without branching or dead ends became associated with the Labyrinth on coins as early as 430 BC, and similar non-branching patterns became widely used as visual representations of the Labyrinth – even though both logic and literary descriptions make it clear that the Minotaur was trapped in a complex branching maze.\n[…]\nwhere young men and women, of the age of those sent to Crete as prey for the Minotaur, would dance together. By extension, in popular legend the palace is associated with the myth of the Minotaur.\n[…]\nThe four-axis medieval patterns may have developed from the Roman model, but are more varied in how the four quadrants of the design are traced out. The Minotaur or other danger is retained in the center of several medieval examples. The Chartres pattern (named for its appearance in Chartres Cathedral) is the most common medieval design; it appears in manuscripts as early as the 9th century.\n[…]\nThe labyrinth is also treated in contemporary fine arts. Examples include Piet Mondrian's Pier and Ocean (1915), Joan Miró's Labyrinth (1923), Pablo Picasso's Minotauromachy (1935), M. C.\n[…]\nEttore Selli, Labirinti Vegetali, la guida completa alle architetture verdi dei cinque continenti, Ed. Pendragon, 2020; ISBN 9788833642222"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cnossos",
        "situacao": "ok",
        "texto": "Cnossos (em grego: Κνωσός; romaniz.: Knossós; AFI: [kno̞ˈso̞s]) é o maior sítio arqueológico da Idade do Bronze da ilha grega de Creta, provável centro cerimonial e político-cultural da Civilização Minoica. Situado próximo da cidade moderna de Heraclião, atualmente Cnossos é visitado por muitos turistas, que visitam a \"reconstrução\" imaginativa feita a partir das ruínas que existiam no local.\n[…]\nCnossos não apresentava uma altura constante, nem simetria, os cômodos eram distribuídos por setores cada qual com sua finalidade: havia as inúmeras salas compridas do armazém, ao lado muitas salas para rituais religiosos, do outro lado do palácio haviam os vários aposentos reais, acima deles, as oficinas, etc, tudo isso unido por muitas passagens e escadas. Esse aparente caos a olhos não treinados foi tido como motivo para se especular Cnossos como o Labirinto do Minotauro da mitologia minoica.\n[…]\nNos aposentos reais havia uma grande varanda com vista para o vale do Kairatos, e uma outra sala denominada “Ala dos Machados Duplos”, com desenhos de machados nas paredes, podendo indicar locais de rituais religiosos, porém a de se destacar que “O pequeno templo dos machados duplos de Cnossos é certamente do Minoico Recente III. Embora seja discutível se fazia parte integral do palácio destruído no século XIV a.C.\n[…]\nAusência de elementos arquitetônicos defensivos como fortificações e muros, segundo Cunha (2013-103) onde “Seus palácios surgem como entrepostos comerciais com aspirações sagradas e receptores das oferendas devotadas aos cultos locais”, demonstra o forte poder religioso em Cnossos, e no regime palaciano como um todo de Creta.\n[…]\n«Cnossos». no site do Ministério Helênico da Cultura\n[…]\n«O Grande Palácio de Cnossos». www.earth-history.com\n[…]\n«Cnossos». no WikiMapia",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Velocino de Ouro",
      "descricao": "Pele de carneiro dourada buscada por Jasão e os argonautas na mitologia grega."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Jasão e os argonautas navegaram até que reino, na margem leste do Mar Negro, em busca do velocino de ouro?",
    "resposta": "Cólquida",
    "distratores": [
      "Frígia",
      "Trácia",
      "Lídia"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Golden_Fleece",
      "https://en.wikipedia.org/wiki/Colchis"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Golden_Fleece",
        "situacao": "ok",
        "texto": "In Greek mythology, the Golden Fleece (Ancient Greek: Χρυσόμαλλον δέρας, romanized: Khrysómallon déras, lit. 'Golden-haired pelt') is the fleece of the golden-woolled, winged ram, Chrysomallos, which rescued Phrixus and brought him to Colchis, where Phrixus then sacrificed it to Zeus. Phrixus gave the fleece to King Aeëtes, who kept it in a sacred grove, whence Jason and the Argonauts stole it wit\n[…]\nIn the historical account, the hero Jason and his crew of Argonauts set out on a quest for the fleece by order of King Pelias in order to place Jason rightfully on the throne of Iolcus in Thessaly. Through the help of Medea, they acquire the Golden Fleece. The story is of great antiquity and was current in the time of Homer (eighth century BC). It survives in various forms, among which the details vary.\n[…]\nIn later versions of the story, the ram is said to have been the offspring of the sea god Poseidon and Themisto (less often, Nephele or Theophane). The classic telling is the Argonautica of Apollonius of Rhodes, composed in the mid-third century BC Alexandria, recasting early sources that have not survived. Another, much less-known Argonautica, using the same body of myth, was composed in Latin by Valerius Flaccus during the time of Vespasian."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Colchis",
        "situacao": "ok",
        "texto": "In classical antiquity and Greco-Roman geography, Colchis (; Ancient Greek: Κολχίς) was an exonym for the Georgian polity of Egrisi (Georgian: ეგრისი) located on the eastern coast of the Black Sea, centered in present-day western Georgia also including the region of Abkhazia.\n[…]\nColchis is known in Greek mythology as the destination of the Argonauts, as well as the home to Medea and the Golden Fleece. It was also described as a land rich with gold, iron, timber and honey that would export its resources mostly to ancient Hellenic city-states. Colchis likely had a diverse population. According to Greek and Roman sources, between 70 and 300 languages were spoken in Dioscourias (modern Sukhumi) alone.\n[…]\nFrom the fifth century BC onwards, Colchis was identified as Aea, the mythical home of Aeëtes, Medea, the Golden Fleece, and the fire-breathing Colchis bulls and was the destination of the Argonauts.\n[…]\nAccording to the Greek mythology, Colchis was a fabulously wealthy land situated on the mysterious periphery of the heroic world. Here in the sacred grove of the war god Ares, King Aeëtes hung the Golden Fleece until it was seized by Jason and the Argonauts. Colchis was also the land where the mythological Prometheus was punished by being chained to a mountain while an eagle ate at his liver for revealing to humanity the secret of fire.\n[…]\nApollonius of Rhodes named Aea as the main city (Argonautica, passim). The main mythical characters from Colchis are:"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Velo_de_ouro",
        "situacao": "ok",
        "texto": "O velo de ouro ou tosão de ouro (chamado ainda de velino ou velocino; em grego: Χρυσόμαλλον Δέρας) é na mitologia grega a lã de ouro do carneiro alado Crisómalo.\n[…]\nFrixo, filho de Atamante, por causa das artimanhas de sua madrasta, fugiu com sua irmã Hele da Grécia, nas costas de um carneiro, cujo pelo era de ouro. Na passagem da Europa para a Ásia, Hele caiu no mar, no local que passou a ser chamado de Helesponto. Frixo continuou a viagem, atravessou o Ponto e chegou à Cólquida, onde, obedecendo a um oráculo, sacrificou o carneiro e ofereceu seu pelo no templo de Ares (na versão de Higino, o carneiro foi sacrificado a Júpiter).\n[…]\nEetes, rei da Cólquida, recebeu um oráculo de que morreria se estrangeiros desembarcassem e levassem embora o velo de ouro. Por causa disto, e por sua crueldade, Eetes ordenou que os estrangeiros fossem sacrificados, para que sua fama de cruel afastasse os estrangeiros da Cólquida. Ele protegeu o santuário com um muro, e colocou guardas do Quersoneso Táurico, o que levou os gregos a inventarem vários mitos monstruosos.\n[…]\nMedeia levou os argonautas ao santuário, que ficava a 70 estádios de Síbaris, a cidade que tinha o palácio dos reis da Cólquida. Medeia falou com os guardas na língua da Táurida, e estes abriram os portões para os argonautas, que mataram vários guardas e afugentaram os demais, pegaram o velo, e fugiram para os barcos. Enquanto isto, Medeia matou o dragão que nunca dormia com venenos, e foi se encontrar com Jasão.\n[…]\nEm God of War 2, Kratos recupera o velo de ouro engolido por um cérbero, no jogo, o velo é uma espécie de bracelete para combinar melhor com o jogo/personagem/gameplay.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Tenochtitlán",
      "descricao": "Capital dos mexicas, os astecas, fundada segundo o mito onde se viu uma águia sobre um cacto."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Segundo o mito asteca, os mexicas fundaram sua capital onde viram uma águia pousada num cacto devorando uma serpente. Que cidade ocupa hoje esse lugar?",
    "resposta": "Cidade do México",
    "fonte": [
      "https://en.wikipedia.org/wiki/Tenochtitlan"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tenochtitlan",
        "situacao": "ok",
        "texto": "Tenochtitlan, also known as Mexico-Tenochtitlan, was a large Mexican altepetl in what is now the historic center of Mexico City. The exact date of the founding of the city is unclear, but the date 13 March 1325 was chosen in 1925 to celebrate the 600th anniversary of the city. The city was built on an island in what was then Lake Texcoco in the Valley of Mexico.\n[…]\nA thriving culture developed, and the Mexica civilization came to dominate other tribes around Mexico. The small natural island was perpetually enlarged as Tenochtitlan grew to become the largest and most powerful city in Mesoamerica. Commercial routes were developed that brought goods from places as far as the Gulf of Mexico, the Pacific Ocean and perhaps even the Inca Empire.\n[…]\nCortés founded the Spanish capital of Mexico City on the ruins of Tenochtitlan. Despite the extensive damage to the built environment, the site retained symbolic power and legitimacy as the capital of the Aztec empire, which Cortés sought to appropriate. For a time this ciudad de españoles, the highest rank in the Spanish hierarchy of settlement designation, was called Mexico–Tenochtitlan.\n[…]\nConcern about the health of the indigenous population in early post-conquest Mexico–Tenochtitlan led to the founding of a royal hospital for indigenous residents.\n[…]\nAnthropologist Susan Kellogg has studied colonial-era inheritance patterns of Nahuas in Mexico City, using Nahuatl- and Spanish-language testaments. On the 13th of August 1521, after over two months of fighting, Spanish conquistador Hernán Cortés succeeded in bringing about the fall of Tenochtitlan, the capital of the Aztec empire, and consequently brought an end to the Aztec empire.\n[…]\nHistory of Mexico City\n[…]\nTownsend, Camilla. Malintzin's Choices: An Indian Woman in the Conquest of Mexico. Albuquerque: University of New Mexico Press, 2006. Print."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tenochtitl%C3%A1n",
        "situacao": "ok",
        "texto": "Tenochtitlán foi uma grande cidade-estado (āltepētl) mexica situada no que é hoje o centro histórico da capital mexicana. A data exata da fundação da cidade não é clara, mas o dia 13 de março de 1325 foi escolhido em 1925 para celebrar o 600º aniversário da Cidade do México.\n[…]\nFoi construída em uma ilha no que era então o Lago de Texcoco, no Vale do México. A cidade foi a capital do crescente Império Asteca no século XV até ser conquistada pelos tlaxcaltecas e pelos espanhóis em 1521.\n[…]\nTenochtitlán foi a capital do povo mexica, fundada em 1325. A religião oficial da civilização mexica aguardava o cumprimento de uma antiga profecia: as tribos nômades encontrariam o local destinado a uma grande cidade, cuja localização seria sinalizada por uma águia com uma serpente no bico, empoleirada no topo de um cacto (Opuntia).\n[…]\nCortés fundou a capital espanhola da Cidade do México sobre as ruínas de Tenochtitlán. Apesar dos extensos danos ao ambiente construído, o local manteve o poder simbólico e a legitimidade como capital do Império Asteca, que Cortés buscava apropriar-se. Por um tempo, esta ciudad de españoles, a categoria mais alta na hierarquia espanhola de designação de assentamentos, era chamada de México-Tenochtitlán.\n[…]\nA antropóloga Susan Kellogg estudou os padrões de herança da era colonial dos náuatles na Cidade do México, usando testamentos em língua náuatle e espanhola.\n[…]\nEm agosto de 1987, arqueólogos descobriram uma mistura de 1.789 ossos humanos 5 metros abaixo do nível da rua na Cidade do México. O enterro data da década de 1480 e fica aos pés do templo principal no recinto cerimonial sagrado da capital asteca. Os ossos são de crianças, adolescentes e adultos. Um esqueleto completo de uma jovem também foi encontrado no local.\n[…]\nCivilização asteca",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Rei Artur",
      "descricao": "Rei lendário da Bretanha, líder dos cavaleiros da Távola Redonda."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Segundo as lendas britânicas, para que ilha mágica o rei Artur foi levado depois de ser ferido em sua última batalha?",
    "resposta": "Avalon",
    "fonte": [
      "https://en.wikipedia.org/wiki/Avalon",
      "https://en.wikipedia.org/wiki/King_Arthur"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Avalon",
        "situacao": "ok",
        "texto": "Avalon () is an island featured in the Arthurian legend. It first appeared in Geoffrey of Monmouth's 1136 Historia Regum Britanniae as a place of magic where King Arthur's sword Excalibur was made and later where Arthur was taken to recover from being gravely wounded at the Battle of Camlann. Since then, the island has become a symbol of Arthurian mythology, similar to Arthur's castle, Camelot.\n[…]\nConversely, the Gesta Regum Britanniae, an early rewrite of Geoffrey's Historia, states (in the present tense) that Morgan \"keeps his healed body for her very own and they now live together.\" In a similar narrative, the chronicle Draco Normannicus contains a fictional letter from King Arthur to Henry II of England, claiming Arthur having been healed of his wounds and made immortal by his \"deathless (eternal) nymph\" sister Morgan in the holy island of Avalon (Avallonis eas insula sacra) through the island's miraculous herbs.\n[…]\nIn this appearance, he might have been derived from the fairy king Gwyn ap Nudd, who in the Welsh Arthurian tradition figures as the ruler of Avalon-like Celtic Otherworld, Annwn. In Lanval by Marie de France, the protagonist's fairy lover comes from Avalon and in the end takes him there. The German Diu Crône says the Queen of Avalon is the goddess (göttin) Enfeidas, Arthur's aunt (sister of Uther Pendragon) and one of the guardians of the Grail.\n[…]\nNotably, the vale of Avalon (vaus d'Avaron) is mentioned twice in Robert de Boron's Arthurian prequel Joseph d'Arimathie as a place located in western Britannia, to where a fellowship of early Christians started by Joseph of Arimathea brought the Grail after its long journey from the Holy Land, finally delivered there by Bron, the first Fisher King.\n[…]\n\"Avalon\" . Encyclopædia Britannica. Vol. 3 (11th ed.). 1911. p. 51.\n[…]\nAvalon at The Camelot Project"
      },
      {
        "url": "https://en.wikipedia.org/wiki/King_Arthur",
        "situacao": "ok",
        "texto": "King Arthur (Welsh: Brenin Arthur; Cornish: Arthur Gernow; Breton: Roue Arzhur; French: Roi Arthur) was a legendary king of Britain. He is a folk hero and a central figure in the medieval literary tradition known as the Matter of Britain.\n[…]\nMany elements and incidents that are now an integral part of the Arthurian story appear in Geoffrey's Historia, including Arthur's father Uther Pendragon, the magician Merlin, Arthur's wife Guinevere, the sword Excalibur, Arthur's conception at Tintagel, his final battle against Mordred at Camlann, and his final rest in Avalon.\n[…]\nHe hands the crown to his kinsman Constantine and is taken to the isle of Avalon to be healed of his wounds, never to be seen again.\n[…]\nAlthough the 'Arthur of romance' was sometimes central to these new Arthurian works (as he was in Burne-Jones's \"The Sleep of Arthur in Avalon\", 1881–1898), on other occasions he reverted to his medieval status and is either marginalised or even missing entirely, with Richard Wagner's Arthurian opera Parsifal providing a notable instance of the latter. Furthermore, the revival of interest in Arthur and the Arthurian tales did not continue unabated.\n[…]\nIn the latter half of the 20th century, the influence of the romance tradition of Arthur continued, through novels such as T. H. White's The Once and Future King (1958), Mary Stewart's The Crystal Cave (1970) and its four sequels, Thomas Berger's tragicomic Arthur Rex and Marion Zimmer Bradley's The Mists of Avalon (1982), in addition to comic strips such as Prince Valiant (from 1937 onward).\n[…]\nInternational Arthurian Society\n[…]\nGreen, Thomas (October 2012). \"John Dee, King Arthur, and the Conquest of the Arctic\". The Heroic Age (15).."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Avalon",
        "situacao": "ok",
        "texto": "Avalon (provavelmente do celta abal: maçã) é uma ilha lendária da lenda arturiana, famosa por suas belas maçãs. Ele aparece pela primeira vez Historia Regum Britanniae (\"A História dos Reis da Bretanha\") de Godofredo de Monmouth como o lugar onde a espada do Rei Artur, a Excalibur foi forjada e posteriormente para onde Artur é levado para se  recuperar dos ferimentos após a Batalha de Camlann.\n[…]\nComo uma \"Ilha dos Bem-aventurados\" Avalon tem paralelo em outros lugares na mitologia indo-europeia, em particular a Tír na nÓg irlandesa e a Hespérides grega, também conhecidas por suas maçãs. Avalon foi associada há muito tempo com seres imortais, como Morgana Le Fay.\n[…]\nEm torno de 1190 Avalon tornou-se associado com Glastonbury, quando monges da Abadia de Glastonbury alegaram ter descoberto os ossos de Artur e sua rainha. É no trabalho de Giraldus Cambrensis que encontra-se a primeira conexão:",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Gilgamesh",
      "descricao": "Rei lendário de Uruk, herói da epopeia mesopotâmica que leva seu nome."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "O herói Gilgamesh foi rei de Uruk, na antiga Mesopotâmia. As ruínas dessa cidade estão no sul de qual país de hoje?",
    "resposta": "Iraque",
    "fonte": [
      "https://en.wikipedia.org/wiki/Uruk",
      "https://en.wikipedia.org/wiki/Gilgamesh"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Uruk",
        "situacao": "ok",
        "texto": "Uruk, the archeological site known today as Warka, was an ancient city in the Near East or West Asia, located east of the current bed of the Euphrates River, on an ancient, now-dried channel of the river in Muthanna Governorate, Iraq. The site lies 93 kilometers (58 miles) northwest of ancient Ur, 108 kilometers (67 miles) southeast of ancient Nippur, and 24 kilometers (15 miles) northwest of anci\n[…]\nUruk II\n[…]\nUruk I\n[…]\nThe first building of Eanna, Stone-Cone Temple (Mosaic Temple), was built in period VI over a preexisting Ubaid temple and is enclosed by a limestone wall with an elaborate system of buttresses. The Stone-Cone Temple, named for the mosaic of colored stone cones driven into the adobe brick façade, may be the earliest water cult in Mesopotamia. It was \"destroyed by force\" in Uruk IVb period and its contents interred in the Riemchen Building.\n[…]\nHe commented that other scans of that part of the site so far were a surprisingly good match for Sumerian descriptions of Uruk as it was in Gilgamesh's day, making the theory that the poem was also right about the tomb more plausible.\n[…]\nThe invasion of Iraq happened shortly after the announcement. The site at Uruk escaped looting during the war, and further investigations have been done there since then, but there has been no further public comment on the possible tomb. When asked about it by an independent researcher, Fassbinder was reticent, saying only that the media coverage had been exaggerated and that he had only said that it might be the tomb of Gilgamesh.\n[…]\nRothman, Mitchell S. (2001). Uruk, Mesopotamia & Its Neighbors. Santa Fe: School of American Research Press. p. 556. ISBN 1-930618-03-4.\n[…]\nEarliest evidence for large scale organized warfare in the Mesopotamian world (Hamoukar vs. Uruk?)\n[…]\nUruk at CDLI wiki\n[…]\nArchaeological Expedition Mapping Ancient City Of Uruk in 2002\n[…]\nDigital images of tablets from Uruk – CDLI"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Gilgamesh",
        "situacao": "ok",
        "texto": "Gilgamesh (, ; Akkadian: 𒀭𒄑𒂆𒈦, romanized: Gilgāmeš; originally Sumerian: 𒀭𒄑𒉋𒂵𒎌, romanized: Bilgames) was a hero in ancient Mesopotamian mythology and the protagonist of the Epic of Gilgamesh, an epic poem written in Akkadian during the late 2nd millennium BC. He was possibly a historical king of the Sumerian city-state of Uruk, who was posthumously deified. His rule probably would have taken place\n[…]\nGilgamesh repeatedly fails the trials set before him and returns home to Uruk, realizing that immortality is beyond his reach.\n[…]\nAlthough stories about Gilgamesh were wildly popular throughout ancient Mesopotamia, authentic representations of him in ancient art are uncommon. Popular works often identify depictions of a hero with long hair, containing four or six curls, as representations of Gilgamesh, but this identification is known to be incorrect. A few genuine ancient Mesopotamian representations of Gilgamesh do exist, however. These representations are mostly found on clay plaques and cylinder seals.\n[…]\nThe Epic of Gilgamesh exerted substantial influence on the Iliad and the Odyssey, the Homeric epic poems written in ancient Greek during the eighth century BC. According to classics scholar Barry B. Powell, early Greeks were probably exposed to and influenced by Mesopotamian oral traditions through their extensive connections to the civilizations of the ancient Near East.\n[…]\nInstead, his and later excavations unearthed much older Mesopotamian texts and showed that many of the stories in the Old Testament may be derived from earlier myths told throughout the ancient Near East. The first translation of the Epic of Gilgamesh was produced in the early 1870s by George Smith, a scholar at the British Museum, who published the Flood story from Tablet XI in 1880 under the title The Chaldean Account of Genesis. Gilgamesh's name was originally misread as Izdubar."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Uruque",
        "situacao": "ok",
        "texto": "Uruque (Uruk), Unugue (Unug), Ereque (Erech) ou Uarca (Warka) foi uma cidade antiga da Suméria – posterior Babilônia – situada a leste do Eufrates, na linha do antigo canal Nil, numa região pantanosa, a cerca de 225 quilômetros sul-sudeste de Bagdá. O próprio nome moderno Iraque é derivado de Uruque.\n[…]\nO sítio é agora chamado de Uarca, na República do Iraque um termo derivado do seu antigo nome, de origem acadiana, ele próprio derivado do nome sumério ou pré-sumério Unug, e que também deu origem ao hebraico Ereque na Bíblia.\n[…]\nUruque foi uma das mais antigas e importantes cidades da Babilônia. Era rodeada por uma muralha de aproximadamente 9 km de extensão. Dizia-se que suas muralhas haviam sido construídas por ordem de Gilgamés, que, diz-se, também mandou erguer o famoso templo de Eana, dedicado à Inana, ou Istar. Os extensos registros sobreviventes do templo, pertencentes ao Período Neobabilônico, documentam a função social do templo como um centro de redistribuição social.\n[…]\nNas palavras de A. Leo Oppenheim, em Uruque, ao sul da Mesopotâmia, a civilização suméria parece haver alcançado seu apogeu no quesito criatividade. Para este fato apontam repetidamente à cidade as referências de textos religiosos e particularmente literários, incluindo aqueles de conteúdo mitológico; isso é confirmado pela tradição histórica como foi preservada na lista de reis sumérios. De Uruque o centro de gravitação política parece ter sido transferido para Ur.\n[…]\nA. Leo Oppenheim, Ancient Mesopotamia: portrait of a dead civilization.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Zeus",
      "descricao": "Rei dos deuses do Olimpo na mitologia grega, senhor do céu e do raio."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Para escapar do pai, o titã Cronos, que devorava os próprios filhos, o bebê Zeus foi criado escondido numa caverna de que ilha?",
    "resposta": "Creta",
    "fonte": [
      "https://en.wikipedia.org/wiki/Zeus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Zeus",
        "situacao": "ok",
        "texto": "Zeus (, Ancient Greek: Ζεύς) is the supreme deity of the Greek pantheon. He is a sky and thunder god in ancient Greek religion and mythology, who rules as king of the gods on Mount Olympus.\n[…]\nZeus is the child of Cronus and Rhea. In most traditions, he is married to Hera, by whom he is usually said to have fathered Ares, Eileithyia, Hebe, and Hephaestus. At the oracle of Dodona, his consort was said to be Dione, by whom the Iliad states that he fathered Aphrodite. According to the Theogony, Zeus's first wife was Metis, by whom he had Athena. Zeus was also infamous for his erotic escapades.\n[…]\nThe motif of Zeus swallowing Metis can be seen as a continuation of the succession myth: it is prophesied that a son of Zeus will overthrow him, just as he overthrew his father, but whereas Cronos met his end because he did not swallow the real Zeus, Zeus holds onto his power because he successfully swallows the threat, in the form of the potential mother, and so the \"cycle of displacement\" is brought to an end.\n[…]\nScenes in which Zeus appears include:\n[…]\nThe Cretan Zeus Tallaios had solar elements to his cult. \"Talos\" was the local equivalent of Helios.\n[…]\nThe deuterocanonical book of 2 Maccabees 6:1–2 relates that King Antiochus IV (Epiphanes), in an attempt to stamp out the Second Temple Judaism of the era, directed that the Temple in Jerusalem be profaned and rededicated to Zeus (i.e., Jupiter Olympius).\n[…]\nAmbulia – Spartan epithet used for Athena, Zeus, and Castor and Pollux\n[…]\nHetairideia – Thessalian Festival to Zeus\n[…]\nTemple of Zeus, Olympia\n[…]\nZanes of Olympia – Statues of Zeus\n[…]\nGreek Mythology Link, Zeus stories of Zeus in myth\n[…]\nThe Warburg Institute Iconographic Database (images of Zeus)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Zeus",
        "situacao": "ok",
        "texto": "Zeus (em grego antigo: Ζεύς; transl. Zeús; em grego moderno: Δίας, transl. Días) é o pai dos deuses (πατὴρ ἀνδρῶν τε θεῶν τε, patēr andrōn te theōn te), que exercia a autoridade sobre os deuses olímpicos na antiga religião grega. É o deus dos céus, raios, relâmpagos que mantêm a ordem e justiça na mitologia grega. Seu equivalente romano é Júpiter, enquanto seu equivalente etrusco é Tinia; alguns a\n[…]\nZeus Taleu (Zeus Tallaios, \"Zeus solar\"): o Zeus que era cultuado em Creta.\n[…]\nQuando Zeus estava prestes a nascer, Reia procurou Gaia e concebeu um plano para salvá-lo, para que Cronos fosse punido por suas ações contra Urano e seus próprios filhos. Reia deu à luz Zeus na ilha de Creta, e entregou a Cronos uma pedra enrolada em roupas de bebê, que ele prontamente engoliu.\n[…]\nReia teria escondido Zeus numa caverna dos montes Dícti, em Creta. De acordo com as diversas versões da história, ele teria sido criado:\n[…]\nCom apenas uma exceção, os gregos eram unânimes em reconhecer o local de nascimento de Zeus como sendo a ilha de Creta. A Civilização Minoica contribuiu com diversos aspectos essenciais da religião grega antiga: \"através de cem canais a antiga civilização se esvaziou na nova\", observou o historiador americano Will Durant, e o Zeus cretense manteve suas feições jovens originais.\n[…]\nEm Creta, Zeus era venerado em diversas cavernas (em Cnossos, Ida e Palecastro). Durante o período helenístico um pequeno santuário dedicado a Zeus Velcano foi fundado nas proximidades da aldeia moderna de Agia Triada, sobre as ruínas de um antigo palácio minoico. Moedas do período originárias de Festo mostram a forma com a qual o deus era cultuado: um jovem sentado entre os galhos de uma árvore, com um galo sobre seus joelhos.\n[…]\nOutros exemplos é o Zeus Ênio ou Enésio (Zeus Aeneius ou Aenesius), forma com a qual era venerado na ilha de Cefalônia, onde existia um templo dedicado a si no monte Eno.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Ilíada",
      "descricao": "Poema épico grego atribuído a Homero, sobre um episódio da Guerra de Troia."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Por volta de que século antes de Cristo foi composta a Ilíada, o poema de Homero sobre a Guerra de Troia?",
    "resposta": "Século oito a.C.",
    "distratores": [
      "Século doze a.C.",
      "Século cinco a.C.",
      "Século dois a.C."
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Iliad",
      "https://en.wikipedia.org/wiki/Homer"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Iliad",
        "situacao": "ok",
        "texto": "The Iliad (  ILL-ee-əd; Ancient Greek: Ἰλιάς, romanized: Iliás [iːliás]; lit. '[a poem] about Ilion (Troy)') is one of two major surviving ancient Greek epic poems attributed to Homer. It is one of the oldest extant works of literature still widely read by modern readers. Like the Odyssey, the poem is divided into 24 books and was written in dactylic hexameter. It contains 15,693 lines in its stan\n[…]\nIn antiquity, the Greeks applied the Iliad and the Odyssey as the bases of pedagogy. Literature was central to the educational-cultural function of the itinerant rhapsode, who composed consistent epic poems from memory and improvisation and disseminated them, via song and chant, in his travels and at the Panathenaic Festival of athletics, music, poetics, and sacrifice, celebrating Athena's birthday.\n[…]\nIn The Singer of Tales (1960), Lord presents likenesses between the tragedies of the Achaean Patroclus in the Iliad and the Sumerian Enkidu in the Epic of Gilgamesh and claims to refute, with \"careful analysis of the repetition of thematic patterns\", that the Patroclus storyline upsets Homer's established compositional formulae of \"wrath, bride-stealing, and rescue\"; thus, stock-phrase reiteration does not restrict his originality in fitting story to rhyme.\n[…]\nThe 1954 Broadway musical The Golden Apple, by librettist John Treville Latouche and composer Jerome Moross, was freely adapted from the Iliad and the Odyssey, resetting the action to America's Washington state in the years after the Spanish–American War, with events inspired by the Iliad in Act One and events inspired by the Odyssey in Act Two.\n[…]\nAmbrosian Iliad\n[…]\nThe Iliad Archived 15 August 2014 at the Wayback Machine study guide, themes, quotes, teacher resources\n[…]\nDigital facsimile of the first printed publication (editio princeps) of the Iliad in Homeric Greek by Demetrios Chalkokondyles, Bayerische Staatsbibliothek"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Homer",
        "situacao": "ok",
        "texto": "Homer (; Ancient Greek: Ὅμηρος [hómɛːros], Hómēros; possibly born c. 8th century BC) was an ancient Greek poet who is traditionally credited as the author of the Iliad and the Odyssey, two epic poems that are foundational works of ancient Greek literature. Homer was highly revered in ancient Greek society and is considered one of the most influential authors in history.\n[…]\nMartin Litchfield West has argued that the Iliad echoes the poetry of Hesiod and that it must have been composed around 660–650 BC at the earliest, with the Odyssey up to a generation later. He also interprets passages in the Iliad as showing knowledge of historical events that occurred in the ancient Near East during the middle of the seventh century BC, including the destruction of Babylon by Sennacherib in 689 BC and the Sack of Thebes by Ashurbanipal in 664/663 BC.\n[…]\nComparative scholarship has also placed Homeric epic within a broader eastern Mediterranean tradition. Scholars have identified parallels in mythic motifs, narrative structures, and compositional techniques between the Iliad and the Odyssey and ancient Anatolian, Mesopotamian, and Levantine poetry; especially the Epic of Gilgamesh. Whether such parallels reflect the reception of particular Near Eastern narratives or participation in a wider oral and performative tradition remains debated.\n[…]\nThe Homeric epics are written in an artificial literary language or \"Kunstsprache\" only used in epic hexameter poetry. Homeric Greek shows features of multiple regional Greek dialects and periods but is fundamentally based on Ionic Greek, in keeping with the tradition that Homer was from Ionia. Linguistic analysis suggests that the Iliad was composed slightly before the Odyssey and that Homeric formulae preserve features older than other parts of the poems.\n[…]\nThe Iliad, W. W. Norton (2023) ISBN 9781324001805\n[…]\nIliad:"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Il%C3%ADada",
        "situacao": "ok",
        "texto": "A Ilíada (em grego antigo: Ἰλιάς, AFI: [iːliás]) é um dos dois principais poemas épicos da Grécia Antiga, de autoria atribuída ao poeta Homero, que narra os acontecimentos decorridos no período de 51 dias durante o nono e penúltimo ano dos dez anos da Guerra de Troia, conflito empreendido para a conquista de Troia, cuja gênese radica na ira (μῆνις, mênis) de Aquiles.\n[…]\nA Ilíada é um poema extenso e possui uma grande quantidade de personagens da mitologia grega. Homero assumia que seus ouvintes estavam familiarizados com esses mitos, o que pode causar confusão ao leitor moderno. Segue um resumo dos personagens que tomam parte na Ilíada:\n[…]\nHelena: Esposa de Páris, antes casada com Menelau, e pivô da guerra. Com a queda de Troia volta para Esparta e para Menelau ( esses eventos não fazem parte da Ilíada).\n[…]\nA história da Guerra de Troia em geral e da Ilíada em particular foi amplamente adaptada ao longo dos séculos, tanto na literatura quanto em outras artes. Uma das adaptações mais recentes que ganharam notoriedade é a do filme norte-americano Troia (veja IMDB) de 2004, que narra basicamente os eventos da Ilíada acrescidos de uma introdução e do desfecho da guerra. Embora tenha sido baseado na Ilíada, o filme toma uma série de liberdades em relação à história de Homero.\n[…]\nEmbora a Ilíada narre uma série de acontecimentos da guerra de Troia e se refira a uma série de outros, seu tema principal é o ciclo da ira de Aquiles, da sua causa ao seu arrefecimento. Isto fica claro logo na primeira linha do poema. A palavra grega mēnin, ira, é a primeira do poema, cuja famosa primeira linha é \"Menin aeide, Thea, Peleiadeo Aquileos\". Em português seria “A ira canta, Deusa, de Peleio Aquiles” ou, adaptando, “Canta, Deusa, a ira do filho de Peleu, Aquiles”.\n[…]\nA guerra e suas consequências também é tema central na Ilíada, sendo ricamente retratada.\n[…]\nHomero",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Saturnália",
      "descricao": "Festa religiosa da Roma antiga em honra ao deus Saturno."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Em que mês os romanos celebravam a Saturnália, festa em honra a Saturno com banquetes e troca de presentes?",
    "resposta": "Dezembro",
    "fonte": [
      "https://en.wikipedia.org/wiki/Saturnalia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Saturnalia",
        "situacao": "ok",
        "texto": "Saturnalia is an ancient Roman festival and holiday in honour of the god Saturn, held on 17 December in the Julian calendar and later expanded with festivities until 19 December. By the 1st century BC, the celebration had been extended until 23 December, for a total of seven days of festivities.\n[…]\nThe holiday was celebrated with a sacrifice at the Temple of Saturn, in the Roman Forum, and a public banquet, followed by private gift-giving, continual partying, and a carnival atmosphere that overturned Roman social norms: gambling was permitted, and masters provided table service for their slaves as it was seen as a time of liberty for both slaves and freedmen alike.\n[…]\nSaturnalia underwent a major reform in 217 BC, after the Battle of Lake Trasimene, when the Romans suffered one of their most crushing defeats by Carthage during the Second Punic War. Until that time, they had celebrated the holiday according to Roman custom (more Romano).\n[…]\nIt was after a consultation of the Sibylline Books that they adopted \"Greek rite\", introducing sacrifices carried out in the Greek manner, the public banquet, and the continual shouts of io Saturnalia that became characteristic of the celebration. Cato the Elder (234–149 BC) remembered a time before the so-called \"Greek\" elements had been added to the Roman Saturnalia.\n[…]\nThe participation of freeborn Roman women is implied by sources that name gifts for women, but their presence at banquets may have depended on the custom of their time; from the late Republic onward, women mingled socially with men more freely than they had in earlier times. Female entertainers were certainly present at some otherwise all-male gatherings. Role-playing was implicit in the Saturnalia's status reversals, and there are hints of mask-wearing or \"guising\"."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Saturn%C3%A1lia",
        "situacao": "ok",
        "texto": "A Saturnália era um festival da Antiga Roma em honra ao deus Saturno, que ocorria em 17 de dezembro no Calendário juliano e mais tarde se estendendo com festividades até 23 de dezembro. O feriado era celebrado com um sacrifício no Templo de Saturno, no Fórum Romano, com um banquete público, seguido de troca de presentes em privado, festa contínua e uma atmosfera de carnaval que derrubava as normas\n[…]\nSua comemoração se iniciava no dia 17 de dezembro e durava sete dias, no tempo de Cícero. Augusto teria limitado sua duração a três dias, para que a justiça e política não ficassem paradas por muito tempo. Já Calígula determinou uma comemoração de cinco dias. Mas Macróbio escreveu que, mesmo assim, as festividades permaneceram acontecendo no período de uma semana.\n[…]\nEste mesmo autor afirma que antes a celebração ocorria apenas no dia 19 de dezembro, mas com a reforma do calendário juliano (durante o governo de Júlio César), que acrescentou dois dias ao calendário, passou-a para o dia 17. Isso levou ao aumento de dias de comemoração, já que a data exata não ficou conhecida por toda a população.\n[…]\nBanquetes em que a imagem do deus Saturno era colocada junto à mesa – lectisternium – também podem ter ocorrido. Dava-se início, então, às festas e divertimentos.\n[…]\nLeni Ribeiro Leite afirma que a Saturnália foi comemorada até a Era Cristã, mas com o nome de Brumália (ocorria no início do inverno e era uma das festas em honra a Baco).\n[…]\nEm meados do século IV, teria sido absorvida pela comemoração do Natal, havendo uma continuidade na prática da troca presentes oriundas do festival Alguns autores também defendem a hipótese sobre haver uma relação entre a Saturnália e as comemorações do carnaval, devido ao caráter de inversão da ordem social ocorrido nos dias de festividades.\n[…]\nSaturnalia - Encyclopaedia romana (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Idades do Homem",
      "descricao": "Mito grego das eras sucessivas da humanidade, descrito por Hesíodo e Ovídio."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "No mito grego das idades da humanidade, cada era é pior que a anterior. Que metal dá nome à primeira delas?",
    "resposta": "Ouro",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ages_of_Man"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ages_of_Man",
        "situacao": "ok",
        "texto": "The Ages of Man are the historical stages of human existence according to Greek mythology and its subsequent Roman interpretation.\n[…]\nBoth Hesiod and Ovid offered accounts of the successive ages of humanity, which tend to progress from an original, long-gone age in which humans enjoyed a nearly divine existence to the current age of the writer, in which humans are beset by innumerable pains and evils. In the two accounts that survive from Ancient Greece and Rome, this degradation of the human condition over time is indicated symbolically with metals of successively decreasing value, yet increasing hardness.\n[…]\nThe Roman poet Ovid (1st century BC – 1st century AD) tells a similar myth of Four Ages in Book 1.89–150 of the Metamorphoses. His account is similar to Hesiod's, with the exception that he omits the Heroic Age.\n[…]\nThese mythological ages are sometimes associated with historical timelines. In the chronology of Saint Jerome, the Golden Age lasts c. 1710 to 1674 BC, the Silver Age 1674 to 1628 BC, the Bronze Age 1628 to 1472 BC, the Heroic Age 1460 to 1103 BC, while Hesiod's Iron Age was considered as still ongoing by Saint Jerome in the fourth century AD.\n[…]\nChristian: Six Ages of the World, dispensationalism\n[…]\nBuddhist: Three Ages\n[…]\nJ. R. R. Tolkien's fictional \"Four Ages\"\n[…]\nLebenstreppe: an artistic tradition that depicts the ages as a series of ascending and descending steps\n[…]\nThe Ages of Man at Greek Mythology Link\n[…]\n\"Five Ages of Man in Greek Mythology According to Hesiod\" by N.S. Gill\n[…]\nHendrick Goltzius engravings of the Ages of Man from the De Verda collection\""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Eras_do_homem",
        "situacao": "ok",
        "texto": "As Eras do Homem são descritas por Hesíodo, em sua obra Os trabalhos e os dias, segundo ele a raça humana depois de criada teria passado por 5 eras ou idades, cada idade com uma raça correspondente. Mais tarde, o latino Ovídio aproveita tal cronologia para compor sua mais famosa obra, Metamorfoses, suprimindo apenas a \"Era Heroica/dos Heróis\".\n[…]\nEsta característica também define quase todas as versões posteriores do mito. Esta era terminou quando Prometeu deu o segredo do fogo aos homens. Zeus puniu os homens, permitindo que Pandora abrisse sua caixa que originou todo o mal no mundo mortal, essa primeira raça foi transformada em gênios bons, guardiões dos mortais, chamados de Daímones Epictonicos, intermediários entre os deuses e os homens que agiam sobre a terra.\n[…]\nAo fim dessa idade, Astreia, deusa da justiça, abandona a Terra para não ver o sofrimento dos mortais nas próximas idades.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Doze Trabalhos de Hércules",
      "descricao": "Série de tarefas impostas ao herói Hércules, como expiação, pelo rei Euristeu."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Na ordem tradicional dos doze trabalhos de Hércules, qual foi a primeira tarefa do herói?",
    "resposta": "Leão de Nemeia",
    "distratores": [
      "Hidra de Lerna",
      "Captura de Cérbero",
      "Estábulos de Áugias"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Labours_of_Hercules",
      "https://en.wikipedia.org/wiki/Nemean_lion"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Labours_of_Hercules",
        "situacao": "ok",
        "texto": "The Labours of Hercules or Labours of Heracles (Ancient Greek: ἆθλοι, âthloi, Latin: Labores) are a series of tasks carried out by Heracles, the greatest of the Greek heroes, whose name was later romanised as Hercules. They were accomplished in the service of King Eurystheus. The episodes were later connected by a continuous narrative.\n[…]\nThe twelfth and final labour was the capture of Cerberus, the multi-headed dog that was the guardian of the gates of the underworld. To prepare for his descent into the underworld, Heracles first had to go to Eleusis in order to be initiated into the Eleusinian Mysteries. He was then able to enter the underworld, with his half-siblings, Hermes and Athena, as his guides.\n[…]\nEurystheus begged Heracles to return Cerberus to the underworld, offering in return to release him from any further labours when Cerberus disappeared back to his master.\n[…]\nAfter completing the twelve labours, one tradition says that Heracles joined Jason and the Argonauts in their quest for the Golden Fleece. However, Herodorus (c. 400 BC) disputed this and denied that Heracles ever sailed with the Argonauts. According to a separate tradition (e.g., Argonautica) Heracles accompanied the Argonauts but did not travel with them as far as Colchis.\n[…]\nAccording to Euripides's play Herakles, it is at this point after his labours are completed and he is returning home to meet his wife and family that Heracles is driven mad and kills them, after which he is exiled from Thebes and leaves for Athens.\n[…]\nSome ancient authors attempted to rationalise myths and provide euhemeristic, metaphorical, or allegorical meanings for the Labours of Heracles. For example, Heraclitus the Grammarian wrote in his Homeric Problems:\n[…]\nRostam's Seven Labours, an ancient Persian tale of another Indo-European hero showing similarities to those of Hercules"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Nemean_lion",
        "situacao": "ok",
        "texto": "The Nemean lion (; Ancient Greek: Νεμέος λέων, romanized: Neméos léōn; Latin: Leo Nemeaeus) was a mythical lion in Greek mythology that lived at Nemea. It is most famous for being one of the mythical beasts killed by Heracles (Hercules) in his 12 labours. Because its golden fur was impervious to attack, it could not be killed with mortal weapons. Its claws were sharper than mortal swords and could\n[…]\nWhen Heracles returned on the thirtieth day carrying the carcass of the lion on his shoulders, King Eurystheus was amazed and terrified. Eurystheus forbade him from ever entering the city again, and in the future, he was to display the fruits of his labours outside the city gates. After being terrified by Heracles' heroic feat, Eurystheus also had a bronze jar, large enough for him, created and had it dug into the earth so that he could hide in it when Heracles came back for future labours.\n[…]\nThe Jar can be seen in other labours such as the Erymanthian Boar and bringing Cerberus from the Underworld. After this labour, Eurystheus would only communicate to Heracles through the use of an intermediator named Copreus or the \"Dung-man\". Eurystheus warned him that the tasks set for him would become increasingly difficult and then sent Heracles off to complete his next quest: to destroy the Lernaean Hydra.\n[…]\nAccording to Alexander of Myndus, Heracles was helped in this labour by an Earth-born serpent, which followed him to Thebes and settled down in Aulis. It was later identified as the water snake which devoured the sparrows and was turned into stone in the prophecy about the Trojan War.\n[…]\nTo celebrate the heroic accomplishment of Heracles' labour, Zeus used the Nemean lion to create the constellation Leo. The Nemean Games would also later be created, honoring this labour, and like Heracles after defeating the lion, victors would crown themselves with wild celery as a garland."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Doze_trabalhos_de_H%C3%A9rcules",
        "situacao": "ok",
        "texto": "Os doze trabalhos de Hércules (em grego: Άθλοι του Ηρακλή; romaniz.: Trabalhos de Héracles) são uma série de episódios arcaicos ligados entre si por uma narrativa contínua, relativa a uma penitência que teria sido cumprida por um dos maiores heróis gregos, Héracles, mais conhecido em português pela romanização Hércules.\n[…]\nOs antigos gregos atribuíam o estabelecimento de um ciclo fixo de doze trabalhos a um poema épico, a Heracleia, já perdido, escrito por Peisândro de Rodes, e que dataria de 600 a.C.\n[…]\nO oráculo lhe contou que, como penitência, Hércules deveria executar uma série de doze tarefas, ou trabalhos, e servir doze anos a Euristeu, e ao final dos trabalhos ele se tornaria imortal. Euristeu era o homem que ele mais odiava, por haver herdado o seu direito de nascença. Foi a pitonisa quem primeiro chamou o heroi de Héracles, até então ele era conhecido pelo nome de Alcides.\n[…]\n1. No Peloponeso, estrangulou o Leão da Nemeia — maior leão do mundo, filho dos monstros Ortros e Equidna — os habitantes do local não conseguiam matar, pois a única coisa que poderia perfurar o couro era a própria garra do Leão. Na segunda tentativa de matá-lo, tendo a primeira sido infrutífera, estrangulou-o, após com ele lutar. Acabada a luta arrancou a garra do Leão e tirou o couro do Leão para utilizá-lo como peça do vestuário. A criatura converteu-se na constelação de leão.\n[…]\nO Leão da Nemeia\n[…]\nÀ medida que os feitos sobre-humanos de Hércules, sempre a vencer a morte, passaram a adquirir simbolismos [filosóficos, morais e, eventualmente, alegóricos, por trás de seus significados literais], a figura do herói passou a representar uma tradição mística interior, e os trabalhos foram interpretados em termos de uma jornada espiritual. Os últimos três trabalhos, em particular, seriam considerados metáforas sobre a morte.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Popol Vuh",
      "descricao": "Livro sagrado dos maias quichés, da Guatemala, com seus mitos de criação."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Em que século o Popol Vuh, livro sagrado dos maias quichés, foi escrito com o alfabeto latino, depois da conquista espanhola?",
    "resposta": "Século dezesseis",
    "fonte": [
      "https://en.wikipedia.org/wiki/Popol_Vuh"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Popol_Vuh",
        "situacao": "ok",
        "texto": "Popol Vuh (also  Popul Vuh or Pop Vuj) is a text recounting the mythology and history of the Kʼicheʼ people of Guatemala, one of the Maya peoples who also inhabit the Mexican states of Chiapas, Campeche, Yucatan and Quintana Roo, as well as areas of Belize, Honduras and El Salvador.\n[…]\nQuotes from the Popol Vuh are used in \"Live Gloriously\", the main theme for the video game Civilization VII.\n[…]\nFollowing the Twin Hero narrative, mankind is fashioned from white and yellow corn, demonstrating the crop's transcendent importance in Maya culture. To the Maya of the Classic period, Hun Hunahpu may have represented the maize god. Although in the Popol Vuh his severed head is unequivocally stated to have become a calabash, some scholars believe the calabash to be interchangeable with a cacao pod or an ear of corn.\n[…]\n2018. The Popol Vuh: A New Verse Translation. Bazzett, Michael (trans.). Seedbank Books. 2018. ISBN 978-1-5713-1468-0.{{cite book}}:  CS1 maint: others (link)\n[…]\nPopol Wuj Archives, sponsored by the Department of Spanish and Portuguese at The Ohio State University, Columbus, Ohio, and the Center for Latin American Studies at OSU.\n[…]\nA facsimile of the earliest preserved manuscript, in Quiché and Spanish, hosted at The Ohio State University Libraries. Learn more about this project by reading \"Decolonial Information Practices: Repatriating and Stewarding the Popol Vuh Online.\"\n[…]\nde los Monteros, Pamela Espinosa (2019-10-25). \"Decolonial Information Practices: Repatriating and Stewarding the Popol Vuh Online\". Preservation, Digital Technology & Culture. 48 (3–4): 107–119. doi:10.1515/pdtc-2019-0009. ISSN 2195-2965.\n[…]\nThe original Quiché text with line-by-line English translation Allen J. Christenson edition"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Popol_Vuh",
        "situacao": "ok",
        "texto": "O termo Popol Vuh, comumente traduzido do idioma quiché como \"livro da comunidade\", é um registro documental da cultura maia, produzido no século XVI, e que tem como tema a concepção de criação do mundo deste povo. Popol é interpretado como \"comunidade\" ou \"conselho\", e dá a ideia de algo que é de propriedade comum; e vuh ou wuj, em quiché moderno, significa \"livro\".\n[…]\nAcredita-se que o manuscrito original do Popol Vuh tenha sido escrito por volta de 1554-1558, em alfabeto latino, no idioma quiché. No entanto, esse manuscrito permanece perdido até os dias atuais. O documento foi traduzido para o castelhano pelo frei Francisco Ximénez, em 1701, e encontra-se hoje em Chicago, na Biblioteca Newberry. Em 1861, Charles Étienne Brasseur de Bourboung baseou-se em uma tradução de Carl Scherzer e publicou o texto, em francês, sob o nome de Popol vuh.\n[…]\nEscrito em forma de prosa poética, o texto aborda questões sobre a criação do mundo, dos homens e dos animais, segundo a tradição maia. O manuscrito original do Popol Vuh não era dividido em capítulos. No entanto, as edições atuais, baseadas na tradução de Brasseur, apresentam essas divisões, que foram feitas de acordo com a ordem cronológica e temática dos acontecimentos.\n[…]\nO Popol Vuh, depois das traduções de Scherzer e Brausser, encontra-se hoje traduzido em diversas línguas e permanece como uma das principais fontes de informação - não só acerca das bases da cultura maia como também do período de colonização da América, por sua dualidade de interpretações. As narrativas nele presentes ainda são preservados por tribos maias como um importante elemento constitutivo de sua identidade.\n[…]\nPopol Vuh Em espanhol, acesso 31 de maio de 2020.\n[…]\nThe Popol Vuh. Tradução ao inglês, acessado em 09 de junho de 2012.\n[…]\nO Popol Vuh. Tradução do espanhol ao português feita pelo Google. Acessado em 09 de junho de 2012.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Ragnarök",
      "descricao": "Batalha final e fim do mundo na mitologia nórdica."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Na mitologia nórdica, o Ragnarök é precedido por três invernos seguidos, sem verão entre eles. Como se chama esse período?",
    "resposta": "Fimbulvetr",
    "distratores": [
      "Ginnungagap",
      "Niflheim",
      "Muspelheim"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Fimbulwinter",
      "https://en.wikipedia.org/wiki/Ragnar%C3%B6k"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fimbulwinter",
        "situacao": "ok",
        "texto": "Fimbulwinter (Old Norse: Fimbulvetr, lit. 'mighty winter') is the immediate prelude to the events of Ragnarök in Norse mythology.\n[…]\nThe Old Norse term Fimbulvetr means \"awful, mighty winter\". The prefix fimbul-, albeit with a largely unknown etymology, means \"mighty, giant\" etc., so the literal interpretation is \"mighty winter\".\n[…]\nFimbulwinter is the harsh winter that precedes the end of the world. Fimbulwinter is three successive winters, when snow comes in from all directions, without any intervening summer. Innumerable wars follow.\n[…]\nThe event is described primarily in the Poetic Edda. In the poem Vafþrúðnismál, Odin poses the question to Vafþrúðnir as to who of mankind will survive the Fimbulwinter. Vafþrúðnir responds that Líf and Lífþrasir will survive and that they will live in the forest of Hoddmímis holt.\n[…]\nThe mythology might be related to the volcanic winter of 536, which resulted in a notable drop in temperature across northern Europe. The event has become known as the fimbulwinter of 536 in Sweden (fimbulvintern 536). There have also been several popular ideas about whether the particular piece of mythology has a connection to the climate change that occurred in the Nordic countries at the end of the Nordic Bronze Age from about 650 BC.\n[…]\nIn Denmark, Norway, Sweden, and other Nordic countries, the term Fimbulvetr still refers to an unusually cold and harsh winter.\n[…]\nRagnarök"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Ragnar%C3%B6k",
        "situacao": "ok",
        "texto": "In Norse mythology, Ragnarök (also Ragnarok;   RAG-nə-rok or  RAHG-; Old Norse: Ragnarǫk [ˈrɑɣnɑˌrɒk]) is a foretold series of impending events, including a great battle in which numerous great Norse mythological figures will perish (including the gods Odin, Thor, Týr, Freyr, Heimdall, and Loki); it will entail a catastrophic series of natural disasters, including the burning of the world, and cul\n[…]\nIn stanza 44, Odin poses the question to Vafþrúðnir as to who of mankind will survive the \"famous\" Fimbulwinter (\"Mighty Winter\"). Vafþrúðnir responds in stanza 45 that those survivors will be Líf and Lífþrasir and that they will hide in the forest of Hoddmímis holt, that they will consume the morning dew, and will produce generations of offspring. In stanza 46, Odin asks what sun will come into the sky after Fenrir has consumed the sun that exists.\n[…]\nChapter 51 provides a detailed account of Ragnarök interspersed with various quotes from Völuspá, while chapters 52 and 53 describe the aftermath of these events. In Chapter 51, High states that the first sign of Ragnarök will be Fimbulwinter, during which time three winters will arrive without a summer, and the sun will be useless. High details that, before these winters, three earlier winters will have occurred, marked with great battles throughout the world.\n[…]\nParallels have been pointed out between the Ragnarök of Norse religion and the beliefs of other related Indo-European peoples. Subsequently, theories have been put forth that Ragnarök represents a later evolution of a Proto-Indo-European belief along with other cultures descending from the Proto-Indo-Europeans. These parallels include comparisons of a cosmic winter motif between the Norse Fimbulwinter, the Iranian Bundahishn and Yima.\n[…]\nQuotations related to Ragnarök at Wikiquote\n[…]\nMedia related to Ragnarök at Wikimedia Commons\n[…]\nGuide of Norse Mythology Characters related to Ragnarök"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Fimbulvetr",
        "situacao": "ok",
        "texto": "O fimbulvetr (ou fimbulvetur em islandês e fimbulvinter em dinamarquês, norueguês e sueco), na Mitologia Nórdica, é o prelúdio imediato para os eventos do Ragnarǫk. O termo indica um período de \"três invernos sucessivos, sem nenhum intervalo de verão\", durante os quais a neve cai incessantemente, vinda de todas as direções, e uma série de inúmeras guerras assola a humanidade, levando irmãos a mata\n[…]\nNa Dinamarca, Noruega, Suécia e outros países nórdicos, o termo também é usado para se referir a um frio incomum ou um inverno rigoroso.\n[…]\nA palavra fimbulvetr significa \"inverno terrível durante vários anos, antecedendo o fim do Mundo\", e deriva de fimbul (longo) e vetr (inverno). Segundo o terceiro poema da Edda poética de Esnorro Esturleu, teria durado três anos. Na discussão e debate sobre este mito nórdico antigo, há a assinalar que hoje em dia geólogos e geógrafos confirmam ter havido uma mudança climática, por volta de 536-540.\n[…]\nDuas enormes erupções vulcânicas levaram enormes quantidades de partículas de enxofre até à alta atmosfera, refletindo os raios de sol e causando trevas durante vários anos. Um período muito frio atingiu a Europa e a Ásia, e com especial severidade a Península da Escandinávia durante uns 100 anos, causando aí más colheitas e fome generalizada, e provocando possivelmente a morte de metade da população e o abandono de inúmeros povoados.\n[…]\nIsto faz pensar na possibilidade de o mito ser um eco longínquo de uma catástrofe climática, ocorrida na Idade do Ferro, alterando o clima dos países nórdicos, até aí consideravelmente mais quentes.\n[…]\nInverno Nuclear",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Zodíaco chinês",
      "descricao": "Ciclo de doze anos associados a animais, cuja ordem é explicada pela lenda da grande corrida."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Segundo a lenda da grande corrida, que animal chegou primeiro e, por isso, abre o ciclo do zodíaco chinês?",
    "resposta": "Rato",
    "fonte": [
      "https://en.wikipedia.org/wiki/Chinese_zodiac"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Chinese_zodiac",
        "situacao": "ok",
        "texto": "The Chinese zodiac is a traditional classification scheme based on the Chinese calendar that assigns an animal and its reputed attributes to each year in a repeating twelve-year (or duodenary) cycle. The zodiac is very important in Chinese culture as a reflection of traditional Chinese philosophy. Chinese folkways held that one's personality is related to the attributes of their zodiac animal.\n[…]\n未: Old Chinese *m[ə]t-s (compare Atayal miːts)\n[…]\nThe zodiac is widely used in commercial culture, for example, in the Chinese New Year market, and popular zodiac-related products, such as crafts, toys, books, accessories, and paintings and Chinese lunar coins. The coins depict zodiac animals, inspired the Canadian Silver Maple Leaf coins, as well as varieties from Australia, South Korea, and Mongolia.\n[…]\nThe Chinese zodiac is also used in some Asian countries that were under the cultural influence of China. However, some of the animals in the zodiac may differ by country.\n[…]\nThe Vietnamese zodiac varies from the Chinese zodiac with the second animal being the Water Buffalo instead of the Ox, and the fourth animal being the Cat instead of the Rabbit.\n[…]\nThe Cham zodiac uses the same order as the Chinese zodiac.\n[…]\nIn the Persian version of the Eastern zodiac brought by Mongols during the Middle Ages, the Chinese word lóng and Mongol word lū (Dragon) was translated as nahang meaning \"water beast\", and may refer to any dangerous aquatic animal both mythical and real (crocodiles, hippos, sharks, sea serpents, etc.).\n[…]\nIn the Kyrgyz version of the Chinese zodiac (Kyrgyz: мүчөл, müçöl) the words for the Dragon (Kyrgyz: улуу, uluu), Monkey (Kyrgyz: мечин, meçin) and Tiger (Kyrgyz: барс, bars) are only found in Chinese zodiac names, other animal names include Cow, Rabbit, Snake, Horse, Sheep, Chicken, Dog and Wild boar.\n[…]\nChinese animal symbolism\n[…]\nAnimal fighting styles\n[…]\nChinese spiritual world concepts"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hor%C3%B3scopo_chin%C3%AAs",
        "situacao": "ok",
        "texto": "O Horóscopo chinês dos 12 signos é uma das referências que a Astrologia chinesa utiliza para realizar seus estudos.\n[…]\nApenas doze animais compareceram e ganharam um ano de acordo com a ordem de chegada: o Rato; O Boi ou Búfalo (Vaca, na Tailândia); o Tigre (Pantera, na Mongólia); O Coelho ou Lebre (Gato, no Vietnã); o Dragão (Crocodilo, na Pérsia); a Cobra ou Serpente (Pequeno Dragão, na Tailândia); o Cavalo; a Cabra, Bode ou Ovelha; o Macaco; o Galo ou Galinha; o Cão; o Porco ou Javali. O Cavalo de Fogo rege a cada 60 anos.\n[…]\nDe acordo com um antigo texto budista, quando os animais terminam suas meritórias tarefas, fazem um juramento solene perante os budas de que um deles estará sempre, por um dia e por uma noite, pelo mundo, pregando e convertendo, enquanto os outros onze ficam praticando o bem em silêncio. O Rato inicia sua jornada no primeiro dia da sétima Lua; procura persuadir os nativos do seu signo a praticarem boas ações e a corrigirem os defeitos de seus temperamentos.\n[…]\nOs demais bichos fazem o mesmo, sucessivamente, e o Rato reinicia seu trabalho no 13º dia. Assim, graças ao trabalho constante dos animais, os budas garantem uma certa ordem no universo .\n[…]\nRato, Dragão, Macaco:\n[…]\nGrande Yin atrai pequeno Yin; o grande Yang atrai o pequeno Yang;\n[…]\nYang: Rato, Tigre, Dragão, Cavalo, Macaco e Cão\n[…]\nEm cada ano, um dos 12 animais do zodíaco é governado por um dos cinco elementos. Deste modo, o ciclo se encerra em 60 anos. A data é comemorada pelos povos orientais que seguem o calendário chinês, e dá início a uma nova repetição de animal e elemento.\n[…]\nÁgua: Rato e Porco",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Edda em Prosa",
      "descricao": "Obra islandesa do século treze, atribuída a Snorri Sturluson, que reúne os mitos nórdicos."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "No século treze, que poeta islandês escreveu a Edda em Prosa, uma das principais fontes sobre os deuses nórdicos?",
    "resposta": "Snorri Sturluson",
    "distratores": [
      "Saxo Gramático",
      "Egill Skallagrímsson",
      "Elias Lönnrot"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Prose_Edda",
      "https://en.wikipedia.org/wiki/Snorri_Sturluson"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Prose_Edda",
        "situacao": "ok",
        "texto": "The Prose Edda, also known as the Younger Edda, Snorri's Edda (Icelandic: Snorra Edda) or, historically, simply as Edda, is an Old Norse textbook written in Iceland during the early 13th century. The work is often considered to have been to some extent written, or at least compiled, by the Icelandic scholar, lawspeaker, and historian Snorri Sturluson c. 1220.\n[…]\nThe text is generally considered to have been written or at least compiled by Snorri Sturluson. This identification is largely based on the following paragraph from a portion of Codex Upsaliensis, an early 14th-century manuscript containing the Edda:\n[…]\nHáttatal (Old Icelandic \"list of verse-forms\") is the last section of  Prose Edda. The section is composed by the Icelandic poet, politician, and historian Snorri Sturluson. Primarily using his own compositions, it exemplifies the types of verse forms used in Old Norse poetry. Snorri took a prescriptive as well as descriptive approach; he has systematized the material, often noting that the older poets did not always follow his rules.\n[…]\nThe Prose or Younger Edda commonly ascribed to Snorri Sturluson. Translated by Dasent, George Webbe. Norstedt and Sons. 1842.\n[…]\nThe Prose Edda of Snorri Sturluson; Tales from Norse Mythology. Translated by Young, Jean. Bowes & Bowes. 1954.\n[…]\nSnorri Sturluson (1998), Skáldskaparmál 1: Introduction, text and notes (PDF), Viking Society for Northern Research, ISBN 978-0-903521-36-9\n[…]\nSnorri Sturluson (1998), Skáldskaparmál 2: Glossary and index of names (PDF), Viking Society for Northern Research, ISBN 978-0-903521-38-3\n[…]\nSnorri Sturluson (2007) [1991], Háttatal (PDF) (2nd ed.), ISBN 978-0-903521-68-0\n[…]\nSnorri Sturluson (2012), The Uppsala Edda: DG 11 4to (PDF), Heimir Pálsson (ed.), Anthony Faulkes (trans.), Viking Society for Northern Research, ISBN 978-0-903521-85-7\n[…]\nEdda"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Snorri_Sturluson",
        "situacao": "ok",
        "texto": "Snorri Sturluson (Old Norse: [ˈsnorːe ˈsturloˌson]; Icelandic: [ˈstnɔrːɪ ˈstʏ(r)tlʏˌsɔːn]; 1179 – 23 September 1241) was an Icelandic historian, poet, knight, and politician. He was elected twice as lawspeaker of the Icelandic parliament, the Althing.\n[…]\nSnorri Sturluson's writings provide information and indications concerning persons and events influencing the peoples inhabiting North Europe during periods for which relevant information is scarce: thus, for example, he can be used to illuminate relations between England and Scandinavia during the 10th and 11th centuries.\n[…]\nTo an extent, the legacy of Snorri Sturluson also played a role in politics long after his death. His writings could be used in support of the claims of later Norwegian kings concerning the venerability and extent of their rule. Later, Heimskringla factored in establishing a national identity during the Norwegian romantic nationalism in mid-19th century.\n[…]\nA statue of Snorri Sturluson, by Gustav Vigeland, is located at Reykholt. The Norwegian Government donated the statue to the Icelandic nation in 1947. The original intention of donating it on the 700th anniversary of Snorri's death, was precluded by World War II (Norway and Iceland were occupied by, respectively, Germany and the United States at the time). A copy of the Reykholt statue was unveiled in Bergen, Norway during 1948.\n[…]\nBagge, Sverre (1991). Society and Politics in Snorri Sturluson's Heimskringla. (University of California Press). ISBN 0-520-06887-4.\n[…]\nProse Edda\n[…]\nWorks by Snorri Sturluson at Project Gutenberg\n[…]\nWorks by or about Snorri Sturluson at the Internet Archive\n[…]\nWorks by Snorri Sturluson at LibriVox (public domain audiobooks)\n[…]\nSnorri Sturluson, article by Jónas Kristjánsson at snorrastofa.is"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Edda_em_prosa",
        "situacao": "ok",
        "texto": "A Edda em Prosa, também conhecida como Edda Menor ou Edda de Snorri, é um manual islandês de poesia escáldica e um compêndio de mitologia nórdica.\n[…]\nO trabalho foi escrito por Snorri Sturluson, um poeta, historiador e político islandês, por volta do ano 1220. É uma fonte fundamental para a nossa compreensão da mitologia e da arte poética nórdica antiga.\n[…]\nNos nossos dias, existem 7 manuscritos sobreviventes com passagens do texto da Edda em prosa, dos quais, os 4 mais importantes são o Codex Upsaliensis (U), o mais antigo, o Codex Wormianus (W), o Codex Trajectinus (T) e sobretudo o Codex Regius (R).\n[…]\nA Edda em prosa está dividido em três partes:\n[…]\nSkáldskaparmál - Abordagem da língua figurada da poesia nórdica e das suas associações ocultas, com numerosas referências à Edda em verso.\n[…]\nSete manuscritos da Edda em Prosa sobreviveram até aos dias de hoje: seis cópias do período medieval e outra datada de 1600. Nenhum manuscrito está completo e cada um tem variações. Para além dos três fragmentos, os quatro manuscritos principais são o Codex Regius, o Codex Wormianus, o Codex Trajectinus e o Codex Upsaliensis:\n[…]\nOs outros três manuscritos são AM 748; AM 757 a 4to; e AM 738 II 4to, AM le ß fol. Embora alguns estudiosos tenham duvidado que um stemma sólido dos manuscritos possa ser criado, devido à possibilidade de os escribas se basearem em múltiplos exemplares ou redigirem com base em memória, trabalhos recentes descobriram que as principais fontes de cada manuscrito podem ser facilmente determinadas. A Edda em prosa, fora da Islândia, era desconhecida até à publicação da Edda Islandorum em 1665.\n[…]\nEdda\n[…]\nEdda em verso",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Metamorfoses (Ovídio)",
      "descricao": "Poema narrativo latino de Ovídio que reúne mitos de transformação."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que poeta romano reuniu mais de duzentos mitos de transformação, como os de Narciso e Eco, num longo poema chamado Metamorfoses?",
    "resposta": "Ovídio",
    "fonte": [
      "https://en.wikipedia.org/wiki/Metamorphoses"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Metamorphoses",
        "situacao": "ok",
        "texto": "The Metamorphoses (Latin: Metamorphoses, from Ancient Greek  μεταμορφώσεις [metamorphṓseis], lit. 'Transformations') is a Latin narrative poem from 8 CE by the Roman poet Ovid. It is considered his magnum opus. The poem chronicles the history of the world from its creation to the deification of Julius Caesar in a mythico-historical framework comprising over 250 myths, 15 books, and 11,995 lines.\n[…]\nMetamorphosis or transformation is a unifying theme amongst the episodes of the Metamorphoses. Ovid raises its significance explicitly in the opening lines of the poem: In nova fert animus mutatas dicere formas / corpora; (\"I intend to speak of forms changed into new entities;\"). Accompanying this theme is often violence, inflicted upon a victim whose transformation becomes part of the natural landscape.\n[…]\nThere is a great variety among the types of transformations that take place: from human to inanimate objects (Nileus), constellations (Ariadne's Crown), animals (Perdix), and plants (Daphne, Baucis and Philemon); from animals (ants) and fungi (mushrooms) to human; from one sex to another (hyenas); and from one colour to another (pebbles). The metamorphoses themselves are often located metatextually within the poem, through grammatical or narratorial transformations.\n[…]\nOther famous works inspired by the Metamorphoses include Pieter Brueghel's painting Landscape with the Fall of Icarus and Gian Lorenzo Bernini's sculpture Apollo and Daphne. The Metamorphoses also permeated the theory of art during the Renaissance and the Baroque style, with its idea of transformation and the relation of the myths of Pygmalion and Narcissus to the role of the artist.\n[…]\nSharrock, Alison; Möller, Daniel; Malm, Mats, eds. (2020). Metamorphic Readings: Transformation, Language, and Gender in the Interpretation of Ovid's Metamorphoses. Oxford: Oxford University Press. ISBN 9780192609595."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Metamorfoses",
        "situacao": "ok",
        "texto": "Metamorfoses é um poema épico escrito pelo poeta romano Ovídio, considerado uma das obras mais relevante da literatura ocidental. Ele narra os acontecimentos mais relevantes da mitologia greco-romana em um enredo de fluxo contínuo, sendo uma das principais fontes de referência para esses mitos.\n[…]\nAcredita-se que Ovídio tenha tido uma inimitável facilidade de metrificar, e que Metamorfoses, sua mais famosa obra, tenha sido estimada por ele mesmo como sua obra-prima, como a produção pela qual o poeta se tornaria imortal. É tido como o poeta romano que soube, ao lado de outros, imprimir em versos o tom, a cor e os sonhos da jovialidade, da alegria (ainda em Metamorfoses), e também da dor que experimentou depois do exílio.\n[…]\nA Metamorfoses de Ovídio poderia ser chamada de \"enciclopédia da mitologia clássica\" - narra os acontecimentos míticos dos personagens mais importantes e utilizados na mitologia grega e as transformações que dão nome ao livro: homens transformam-se em rios, em flores, rochas, ninfas que são transformadas em sons, deuses que se transformam em pássaros. Ovídio produz uma estratégia narrativa que \"desenha\" uma imagem global de um canto sem interrupção acerca das origens do mundo até seu tempo.\n[…]\nO sentimento que correlaciona tal cronologia e metamorfoses é aquele que Ovídio sempre escolheu para permear sua poesia, ao menos antes do exílio: o amor, quer por seu excesso, quer por seu fim, quer pelo medo que provoca. O amor é apresentado ao lado de suas consequências; pode resultar em ciúmes, que cria monstros, ou pode resultar em mais amores, produzindo pássaros e flores. No poema, o amor transforma os brutos e insensíveis em seres de natureza pura, e sua perda enlouquece os bons.\n[…]\n«Ovídio, Metamorfose». (Trad. e notas de Bocage)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Teogonia",
      "descricao": "Poema grego antigo de Hesíodo sobre a origem e a genealogia dos deuses."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que poeta grego antigo, autor também de Os Trabalhos e os Dias, narrou a origem dos deuses no poema Teogonia?",
    "resposta": "Hesíodo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Theogony",
      "https://en.wikipedia.org/wiki/Hesiod"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Theogony",
        "situacao": "ok",
        "texto": "The Theogony (Ancient Greek: Θεογονία, romanized: Theogonía, lit. 'the genealogy or birth of the gods') is a poem by Hesiod (8th–7th century BC) describing the origins and genealogies of the Greek gods, composed c. 730–700 BC. It is written in the epic dialect of Ancient Greek and contains 1,022 lines. It is one of the most important sources for the understanding of early Greek cosmology.\n[…]\nJohn Milton viewed the Theogony as inspired by Satan. Milton's view, as articulated in Paradise Lost, was that once Satan was cast out from heaven, he became the muse that inspired Hesiod. What Hesiod wrote, therefore, was a corruption of the \"actual\" events that happened in the cosmological struggle of Satan against God.\n[…]\nAthanassakis, Apostolos N., Theogony; Works and days; Shield / Hesiod; introduction, translation, and notes, Baltimore: Johns Hopkins University Press, 1983. ISBN 0-8018-2998-4.\n[…]\nCook, Thomas, The Works of Hesiod, 1728.\n[…]\nBrown, Norman O. Introduction to Hesiod: Theogony (New York: Liberal Arts Press) 1953.\n[…]\nCaldwell, Richard, Hesiod's Theogony, Focus Publishing/R. Pullins Company (June 1, 1987). ISBN 978-0-941051-00-2.\n[…]\nLamberton, Robert, Hesiod, New Haven : Yale University Press, 1988. ISBN 0-300-04068-7. Cf. Chapter II, \"The Theogony\", pp. 38–104.\n[…]\nMost, G.W., Hesiod, Theogony, Works and Days, Testimonia, Edited and translated by Glenn W. Most, Loeb Classical Library No. 57, Cambridge, Massachusetts, Harvard University Press, 2018. ISBN 978-0-674-99720-2. Online version at Harvard University Press.\n[…]\nWest, M. L. (1966), Hesiod: Theogony, Oxford University Press. ISBN 0-19-814169-6.\n[…]\nWest, M. L. (1988), Hesiod: Theogony and Works and Days, Oxford University Press. ISBN 978-0-19-953831-7.\n[…]\nWorks related to Theogony at Wikisource\n[…]\nHesiod, Theogony: text in English translation.\n[…]\nHesiod, Theogony e-text in Ancient Greek (from Perseus)\n[…]\nHesiod, Theogony e-text in English (from Perseus)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Hesiod",
        "situacao": "ok",
        "texto": "Hesiod ( HEE-see-əd or   HEH-see-əd; Ancient Greek: Ἡσίοδος Hēsíodos; fl. c. 700 BC) was an Ancient Greek poet generally thought to have been active between 750 and 650 BC, around the same time as Homer.\n[…]\nThough typical of epic, his vocabulary features some significant differences from Homer's. One scholar has counted 278 un-Homeric words in Works and Days, 151 in Theogony and 95 in Shield of Heracles. The disproportionate number of un-Homeric words in W & D is due to its un-Homeric subject matter. Hesiod's vocabulary also includes quite a lot of formulaic phrases that are not found in Homer, which indicates that he may have been writing within a different tradition.\n[…]\nWest, Martin L. (1966), Hesiod: Theogony, Oxford University Press\n[…]\nNagy, Gregory (1992). \"Authorisation and Authorship in the Hesiodic Theogony\". Ramus. 21 (2): 119–130. doi:10.1017/S0048671X00002599. S2CID 191714303.\n[…]\nAthanassakis, Apostolos N., Theogony; Works and days; Shield / Hesiod; introduction, translation, and notes, Baltimore: Johns Hopkins University Press, 1983. ISBN 0-8018-2998-4\n[…]\nMost, G.W. (2006), Hesiod: Theogony, Works and Days, Testimonia, Loeb Classical Library, vol. 57, Cambridge, MA, ISBN 978-0-674-99622-9{{citation}}:  CS1 maint: location missing publisher (link).\n[…]\nPerseus Classics Collection: Greek and Roman Materials: Text: Hesiod (Greek texts and English translations for Works and Days, Theogony, and Shield of Heracles with additional notes and cross links.)\n[…]\nThe Medieval and Classical Literature Library: Hesiod\n[…]\nSacred Texts: Classics: The Works of Hesiod (Theogony and Works and Days only)\n[…]\nHesiod Poems and Fragments including Ps-Hesiod works Astronomy and Catalogue of Women at demonax.info"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Teogonia",
        "situacao": "ok",
        "texto": "Teogonia (em grego:  Θεογονία [theos, deus + gonia, nascimento] - THEOGONIA, na transliteração), também conhecido por Genealogia dos Deuses, é um poema mitológico em 1022 versos hexâmetros escrito por Hesíodo no século VIII-VII a.C., no qual o narrador é o próprio poeta.\n[…]\nO poema se constitui no mito cosmogônico (descrição da origem do mundo) dos gregos, que se desenvolve com geração sucessiva dos deuses, e na parte final, com o envolvimento destes com os homens originando assim os heróis.\n[…]\nNa terceira geração, Cronos assume o poder e inadvertidamente dá origem a Afrodite (amor sensual) relacionando a noite (Nix) com Tânato (a morte), Hipnos (o sono) e Oniro (os sonhos). Ponto origina Fórcis pai de monstros como Górgona, Equidna, Esfinge e Nereu (o mais antigo deus do mar),  pai das nereidas.\n[…]\nNuma última etapa, Zeus destrona Cronos, seu pai, altura em que é inserida a lenda de Prometeu, dito filho de Jápeto. Mas para consolidar seu poder Zeus teria ainda que lutar e derrotar Tifão, filho de Gaia e Tártaro. Daí até o seu final, o poema trata do relacionamento dos deuses com os homens.\n[…]\nObras relacionadas com Teogonia no Wikisource (em inglês)\n[…]\nTeogonia\n[…]\nHesíodo, Teogonia - Sacred Texts (em inglês)\n[…]\nHesíodo, Teogonia - Perseus Digital Library - Tufts University (em grego)\n[…]\nHesíodo, Teogonia - Perseus Digital Library - Tufts University (em inglês)\n[…]\n«Hesíodo / Teogonia». no Portal Graecia Antiqua",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Eneida",
      "descricao": "Epopeia latina de Virgílio sobre o troiano Eneias, ancestral lendário dos romanos."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que poeta romano escreveu a epopeia sobre Eneias, o troiano que fugiu da cidade em chamas e cujos descendentes fundariam Roma?",
    "resposta": "Virgílio",
    "fonte": [
      "https://en.wikipedia.org/wiki/Aeneid"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Aeneid",
        "situacao": "ok",
        "texto": "The Aeneid (, ih-NEE-id; Latin: Aeneis [ae̯ˈneːɪs]) is a Latin epic poem that tells the legendary story of Aeneas, a Trojan who fled the fall of Troy and travelled to Italy, where he became the ancestor of the Romans. Written by the Roman poet Virgil between 29 and 19 BC, the Aeneid comprises 9,896 lines in dactylic hexameter.\n[…]\nVirgil took the disconnected tales of Aeneas' wanderings, his vague association with the foundation of Rome, and his description as a personage of no fixed characteristics other than a scrupulous pietas, and fashioned the Aeneid into a compelling founding myth or national epic that tied Rome to the legends of Troy, explained the Punic Wars, glorified traditional Roman virtues, and legitimised the Julio-Claudian dynasty as descendants of the founders, heroes, and gods of Rome and Troy.\n[…]\nVirgil; Ahl, Frederick (trans.) (2007), The Aeneid, Oxford: Oxford University Press, ISBN 978-0-19-283206-1\n[…]\nVirgil; Fitzgerald, Robert (trans.) (1983), The Aeneid, New York: Random House, ISBN 978-0-394-52827-4 Paperback reprint: Vintage Books, 1990.\n[…]\nGransden, K. W.; Harrison, Stephen J. (2003), Virgil: The Aeneid, Landmarks of World Literature (2nd ed.), Cambridge University Press, ISBN 0-521-83213-6\n[…]\nHardie, Philip R. (1986), Virgil's Aeneid: Cosmos and Imperium, Clarendon Press, ISBN 0-19-814036-3\n[…]\nLee Fratantuono, Madness Unchained: A Reading of Virgil's Aeneid, Lexington Books, 2007.\n[…]\nKenneth Quinn, Virgil's Aeneid: A Critical Description, London, 1968.\n[…]\nElena Giusti, Carthage in Virgil's Aeneid: Staging the Enemy Under Augustus, March 2018\n[…]\nFour talks by scholars on aspects of the Aeneid: Virgil's relationship to Roman history, the Rome of Caesar Augustus, the challenges of translating Latin poetry, and Purcell's opera Dido and Aeneas, delivered at the Maine Humanities Council's Winter Weekend program."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Eneida",
        "situacao": "ok",
        "texto": "Eneida (em latim: Aeneis) é um poema épico latino escrito por Virgílio no século I a.C. Conta a saga de Eneias, um troiano que é salvo dos gregos em Troia, viaja errante pelo Mediterrâneo até chegar à península Itálica. Seu destino era ser o ancestral de todos os romanos.\n[…]\nNa Eneida, do poeta romano Virgílio (séc. I AEC), o destino surge como um poder maior, acima até do que os deuses desejam. Júpiter assegura que Roma será fundada segundo o projeto divino, apesar da oposição de Juno. O destino representa a ordem cósmica e política que justifica o império romano, tornando sagrada a missão de Eneias. As ações dos deuses (Juno, Vênus e Júpiter), mostram o conflito entre desejo e obrigação, mas o destino vence como vontade inevitável dos deuses e da história.\n[…]\nAo questionar por que uma deusa possui rancor tão feroz contra um herói piedoso, Virgílio estabelece que o drama de Eneias e a fundação de Roma serão marcados pela interferência e oposição divina. Em suma, o Proêmio não é apenas um início; ele é o contrato de leitura que estabelece o enredo, a temática dual (guerra e viagem) e a moldura teológica (destino e ira divina) que conduzirão o épico até seu clímax.\n[…]\nA rainha Dido, segundo a Eneida de Virgílio, após ouvir a narração do fim de Troia e das viagens e peripécias de Eneias, influenciada por Vênus, deusa do amor e mãe de Eneias, vê-se completamente apaixonada pelo herói. Ela convida os troianos (Eneias e seus companheiros) para uma caçada. No meio de uma tempestade, abrigados em uma caverna, Dido e Eneias se amam.\n[…]\nSêneca cita frequentemente Virgílio em seus textos, especialmente em suas Cartas a Lucílio.\n[…]\n|| e os muros de Roma\n[…]\nRoma.\"\n[…]\n«eBook \"Eneida\" - Virgilio (Publio Virgilio Maronis)»\n[…]\n«Link \"Aeneid\" - Virgilio (Publio Virgilio Maronis)» (em latim)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Minotauro",
      "descricao": "Criatura com corpo de homem e cabeça de touro, presa no labirinto de Creta."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que herói ateniense entrou no labirinto e matou o Minotauro, criatura com cabeça de touro?",
    "resposta": "Teseu",
    "fonte": [
      "https://en.wikipedia.org/wiki/Minotaur",
      "https://en.wikipedia.org/wiki/Theseus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Minotaur",
        "situacao": "ok",
        "texto": "In Greek mythology, the Minotaur (Ancient Greek: Μινώταυρος, romanized: Mīnṓtauros), also known as Asterion or Asterius, is a mythical creature portrayed during classical antiquity with the head and tail of a bull and the body of a man or, as described by Roman poet Ovid, a being \"part man and part bull\". He dwelt at the center of the Labyrinth, which was an elaborate maze-like construction design\n[…]\nNathanial Hawthorne wrote short story, The Minotaur in 1918.\n[…]\nHarrison Birtwistle and David Harsent's opera, The Minotaur.\n[…]\nMinotaur, the Wild Beast of Crete, a 1960 Italian film directed by Silvio Amadio and starring Bob Mathias as Theseus.\n[…]\nMinotaur, a horror adaptation of the legend starring Tom Hardy as Theo (Theseus), was released on DVD by Lions Gate in 2006.\n[…]\nIn Immortals, a 2011 American film directed by Tarsem Singh, Minotaur is the tallest and most dangerous warrior of Hyperion, depicted as a regular man wearing a helmet in the form of bull's head.\n[…]\nThe fantasy role-playing game Dungeons & Dragons features minotaurs as opponents, where they \"retain the connotation of 'man' degraded into 'beast'\" of their traditional counterparts, but also as playable characters, translated from the singular creature of legend into a species.\n[…]\nIn the 2018 action-adventure game Assassin's Creed Odyssey, the Minotaur is a legendary creature to be defeated in a boss fight. In a series of missions various references are made to the mythical history of the Minotaur, like Theseus and the thread of Ariadne.\n[…]\nKao (bull) – a legendary chaotic bull in Meitei mythology, similar to Minotaur in character\n[…]\nMinotauria – a genus of woodlouse hunting spiders endemic to the Balkans\n[…]\nTheseus and the Minotaur – a logic game that is inspired by the myth of Theseus and the Minotaur in the Labyrinth.\n[…]\nMinotaur in Greek Myth source Greek texts and art.\n[…]\nThe Warburg Institute Iconographic Database (images of the Minotaur)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Theseus",
        "situacao": "ok",
        "texto": "Theseus (UK: , US:  ; Ancient Greek: Θησεύς, romanized: Thēseús, lit. 'the placer', 'the instituter' or 'one who establishes order', [tʰɛːsěu̯s]) was a divine hero in Greek mythology, famous for slaying the Minotaur. The myths surrounding Theseus, his journeys, exploits, and friends, have provided material for storytelling throughout the ages.\n[…]\nTheseus overpowered the Minotaur with his strength and stabbed the beast in the throat with his sword (according to one scholium on Pindar's Fifth Nemean Ode, Theseus strangled it).\n[…]\nAndré Gide's Thésée (1946) is a fictional autobiography where the mythical hero of Athens, now elderly, narrates his life story from his carefree youth to his killing of the Minotaur.\n[…]\nStephen Dobyns wrote the poem Theseus within the Labyrinth (1986) which provides a retelling of the myth of Ariadne, Theseus and the Minotaur, in particular the feelings of Ariadne.\n[…]\nIn issue No. 12 of the  Fright Night comic series, entitled Bull-Whipped, Theseus and the Minotaur are resurrected by the comic's Aunt Claudia Hinault, who is the reincarnation of Ariadne.\n[…]\nAleksey Ryabinin's book Theseus: The story of ancient gods, goddesses, kings, and warriors (2018) provides a retelling of the myths of Theseus, Aegeus, Minotaur, Ariadne, Pirithous and other personages of Greek mythology.\n[…]\nIn Gene Wolfe's Book of the New Sun, set in a very distant future, the protagonist reads a story which appears to blend the myth of Theseus with the story of Battle of Hampton Roads – presumably because of a confusion between the Minotaur and the USS Monitor. (In this version, the Theseus character is now a student's son.)\n[…]\nPrice, Anne, The Quest for Theseus (London, 1970) examines the Theseus-Minotaur-Ariadne myth and its historical basis, and later treatments and adaptations of it in Western culture."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Minotauro",
        "situacao": "ok",
        "texto": "O Minotauro (em grego: Μῑνώταυρος; em latim: Minotaurus; em etrusco: Θevrumineś) é um personagem da mitologia grega cuja representação mais tradicional entre os gregos antigos era uma criatura com a cabeça de um touro sobre o corpo de um homem. O autor romano Ovídio descreveu-o simplesmente como \"parte homem e parte touro\".\n[…]\nHabitava no centro de um Labirinto, uma elaborada construção erguida para o rei Minos de Creta e projetada pelo arquiteto Dédalo e seu filho, Ícaro, especificamente para abrigar a criatura. O sítio histórico de Cnossos, com mais de 1300 compartimentos semelhantes a labirintos, já foi identificado como o local do labirinto do Minotauro, embora não existam provas que confirmem ou desmintam tal especulação. No mito, o Minotauro posteriormente morre pelas mãos do herói ateniense Teseu.\n[…]\nNa maior parte dos relatos Ariadne dá a ele um novelo, que ele utiliza para marcar seu caminho de modo que ele possa retornar por ele. Teseu então mata o Minotauro com a espada de Egeu, e lidera os outros atenienses para fora do labirinto. Na viagem de volta, no entanto, ele se esquece de erguer as velas brancas e seu pai, ao ver o navio e imaginar que Teseu estava morto, se suicida, arremessando-se no mar que desde então leva seu nome.\n[…]\nA luta entre Teseu e o Minotauro foi representada com frequência na arte grega. Um didracma de Cnossos exibe num lado o labirinto, e no outro o Minotauro cercado por um semicírculo de pequenas bolas, provavelmente representando estrelas; um dos nomes do monstro era Astério, \"estrela\" em grego antigo.\n[…]\nAlguns mitólogos modernos veem o Minotauro como uma personificação solar, uma adaptação minoica do Baal-Moloch dos fenícios. A morte do Minotauro por Teseu, neste caso, indicaria o rompimento das relações tributárias de Atenas com a Creta minoica.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Aquiles",
      "descricao": "Herói grego da Guerra de Troia, filho da ninfa Tétis e do rei Peleu."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Na tradição grega, que príncipe troiano matou Aquiles com uma flecha guiada pelo deus Apolo?",
    "resposta": "Páris",
    "fonte": [
      "https://en.wikipedia.org/wiki/Achilles",
      "https://en.wikipedia.org/wiki/Paris_(mythology)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Achilles",
        "situacao": "ok",
        "texto": "In Greek mythology, Achilles (  ə-KIL-eez) or Achilleus (Ancient Greek: Ἀχιλλεύς, romanized: Achilleús) was a hero of the Trojan War who was known as being the greatest of all the Greek warriors. The central character in Homer's Iliad, he was the son of the Nereid Thetis and Peleus, king of Phthia and famous Argonaut. Achilles was raised in Phthia along with his childhood companion Patroclus and r\n[…]\nThe death of Achilles, even if considered solely as it occurred in the oldest sources, is a complex one, with many different versions. Starting with the oldest account in book 22 of the Iliad, Hector predicts with his last dying breath that Paris and Apollo will slay him at the Scaean Gates leading to Troy (with an arrow to the heel according to Statius).\n[…]\nBut while Priam is overseeing the private marriage of Polyxena and Achilles, Paris, who would have to give up Helen if Achilles married his sister, hides in the bushes and shoots Achilles with a divine arrow, killing him. According to Apollodorus, after his death he married Medea in the Elysian Fields.\n[…]\nEugène Delacroix painted a version of The Education of Achilles for the ceiling of the Paris Palais Bourbon (1833–1847), one of the seats of the French Parliament.\n[…]\nAchille et Polyxène (Paris 1687) is an opera begun by Jean-Baptiste Lully and finished by Pascal Collasse.\n[…]\nAchille et Déidamie (Paris 1735) is an opera composed by André Campra.\n[…]\nAchille à Scyros (Paris 1804) is a ballet by Pierre Gardel, composed by Luigi Cherubini.\n[…]\nThe 1962 film The Fury of Achilles by Gordon Mitchell\n[…]\nHélène Monsacré (1984), Les larmes d'Achille. Le héros, la femme et la souffrance dans la poésie d'Homère, Paris: Albin Michel.\n[…]\nJonathan S. Burgess (2009), The Death and Afterlife of Achilles. Baltimore: Johns Hopkins University Press.\n[…]\nGallery of the Ancient Art: Achilles\n[…]\nAchilles  – via Wikisource. Poem by Florence Earle Coates"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Paris_(mythology)",
        "situacao": "ok",
        "texto": "Paris (Ancient Greek: Πάρις, romanized: Páris), also known as Alexander (Ancient Greek: Ἀλέξανδρος, romanized: Aléxandros), is a figure from Greek mythology who appears in the numerous stories about the Trojan War, including the Iliad. He was prince of Troy, a son of King Priam and Queen Hecuba, and younger brother of Prince Hector. His elopement with the Spartan queen Helen sparks the Trojan War,\n[…]\nHector and Achilles engage in a duel in Book 22, with the Greek hero emerging victorious. Immediately before his death, Hector prophesies that Achilles will meet his own demise at the hands of Paris and the god Apollo. In the Aethiopis, a lost epic that chronologically followed the Iliad, Achilles's death at the hands of Paris and Apollo was described. In the poem, he was probably killed by an arrow that was shot at his heel, the only part of his body susceptible to injury.\n[…]\nThe Judgement of Paris and its aftermath are the subject of Michael Tippett's 1962 opera King Priam.\n[…]\nIn the 2004 Hollywood film Troy, the character Paris was played by actor Orlando Bloom. He is not killed by Philoctetes in this version, but leaves the falling city of Troy together with Helen and survives. Paris is portrayed as an irresponsible prince who put his romance before his family and country.\n[…]\nAlaksandu of Wilusa, a 13th-century BC Anatolian king who has been associated with Paris\n[…]\nBrown, Andrew, \"Paris\", in Oxford Classical Dictionary, edited by Tim Whitmarsh, New York, Oxford University Press, 2016. ISBN 9780199381135.\n[…]\nStoevesandt, Magdalene, \"Paris\", in Brill's New Pauly: Encyclopaedia of the Ancient World. Antiquity, Volume 10, Obl – Phe, edited by Hubert Cancik and Helmuth Schneider, Leiden, Brill, 2007. ISBN 9789004142152.\n[…]\nThe Judgement of Paris by William Etty at the Lady Lever Art Gallery\n[…]\nChisholm, Hugh, ed. (1911). \"Paris (legend)\" . Encyclopædia Britannica (11th ed.). Cambridge University Press."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Aquiles",
        "situacao": "ok",
        "texto": "Aquiles (em grego:  Ἀχιλλεύς, transl.: Achilléus), na mitologia grega, foi um herói da Grécia, um dos participantes da Guerra de Troia e o protagonista e maior guerreiro da Ilíada, de Homero.\n[…]\nComo havia sido previsto por Heitor, em seu último suspiro, Aquiles foi morto posteriormente por Páris, com uma flecha envenenada (no calcanhar, de acordo com a versão de Estácio). Em certas versões do mito, o próprio deus Apolo teria guiado a seta de Páris.\n[…]\nEnquanto o rei organizava os preparativos para o matrimônio, no entanto, Páris - que teria de abandonar Helena se Aquiles se casasse com sua irmã, escondeu-se em arbustos próximos a Aquiles e o matou com uma flecha divina. Páris teria então sido morto por Filoctetes, com o arco e as flechas de Héracles.\n[…]\nSegundo Pompônio Mela, Aquiles estaria enterrado na ilha chamada de Aquileia (Achillea), entre o Borístenes e o Istro.\n[…]\nO dramaturgo trágico grego Ésquilo é autor de uma trilogia de peças sobre Aquiles, que receberam o nome de Achilleis por estudiosos modernos. Estas tragédias relatam os feitos de Aquiles durante a Guerra de Troia, incluindo a sua vitória sobre Heitor, e sua morte, quando uma flecha disparada por Páris e guiada por Apolo o atingiu no calcanhar.\n[…]\nApesar da valentia e dos feitos de Aquiles, a fatalidade não podia deixar de acontecer. A morte do grande herói da Antiguidade é apresentada em várias versões, porém a mais aceita relata que ele morreu ferido no calcanhar por uma flecha certeira, poderosa e assassina, atirada pelo príncipe Páris e guiada por Apolo. Páris, nesse ato, consegue vingar-se da morte de seu irmão Heitor e simultaneamente vingar a morte do filho do deus Apolo, Tenes.\n[…]\nMitologia grega",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Esfinge de Tebas",
      "descricao": "Monstro da mitologia grega com corpo de leão e cabeça de mulher que propunha um enigma aos viajantes de Tebas."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Na mitologia grega, quem decifrou o enigma da Esfinge de Tebas, levando o monstro a se matar?",
    "resposta": "Édipo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Sphinx",
      "https://en.wikipedia.org/wiki/Oedipus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sphinx",
        "situacao": "ok",
        "texto": "A sphinx ( SFINKS; Ancient Greek: σφίγξ, pronounced [spʰíŋks]; pl. sphinxes or sphinges ) is a mythical creature with the head of a human, the body of a lion, and the wings of an eagle.\n[…]\nThe Sphinx motif present within the novel is established through the enigmatic creature of Murakami's design, Oshima: a mysterious, omnipotent being who has the protagonist grapple with the concept of a meaningless existence in turn of searching for authenticity by disconnecting from societal conventions of wealth and status. He tests the durability of character of the novel's protagonists through a series of tests that may challenge their perception of truth regarding their existence."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Oedipus",
        "situacao": "ok",
        "texto": "Oedipus (UK: , also US:  ; Ancient Greek: Οἰδίπους Oidípous, lit. 'swollen foot') was a mythical Greek king of Thebes. A tragic hero in Greek mythology, Oedipus unwittingly fulfilled a prophecy that he would end up killing his father and marrying his mother, thereby bringing disaster to his city and family. The story of Oedipus is the subject of Sophocles's tragedy Oedipus Rex, which is followed i"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Esfinge",
        "situacao": "ok",
        "texto": "Esfinge é uma imagem icônica de um leão estendido com a cabeça de um falcão ou de uma pessoa, presente tanto na mitologia grega, quanto na arquitetura egípcia.\n[…]\nHera ou Ares mandaram a esfinge de sua casa na Etiópia (os gregos lembraram a origem estrangeira da esfinge) para Tebas e, em Édipo Rei de Sófocles, pergunta a todos que passam o quebra-cabeça mais famoso da história, conhecido como o \"enigma da esfinge\", decifra-me ou devoro-te: Que criatura pela manhã tem quatro pés, ao meio-dia tem dois, e à tarde tem três? Ela estrangulava qualquer inábil a responder, daí a origem do nome esfinge, que deriva do grego  σφίγξ, transl.\n[…]\nSphígks, 'monstro que estrangulava'.\n[…]\nÉdipo resolveu o quebra-cabeça: O homem — engatinha como bebê, anda sobre dois pés na idade adulta, e usa um arrimo (bengala) quando é ancião. Furiosa com tal resposta, a esfinge teria cometido suicídio, atirando-se de um precipício. O quebra-cabeça exato perguntado pela esfinge não foi especificado por vários contadores da história e não foi padronizado como o dado sobre até muito mais tarde na história grega.\n[…]\nAssim Édipo pode ser reconhecido como um limiar ou figura de solado de porta, ajudando efeito a transição entre as velhas práticas religiosas, representadas pela esfinge, e novas, unidade olímpica.[carece de fontes]?\n[…]\nAs esfinges eram um tema frequente no rococó, mas tenderam a desaparecer do repertório artístico europeu - até reviver no século XIX com o advento do romantismo, e depois no simbolismo. Muitas destas esfinges aludiam à esfinge grega do mito de Édipo, mais do que à egípcia.[carece de fontes]?\n[…]\nHíbrido (mitologia)\n[…]\nAs páginas clássicas : Édipo & a esfinge",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Muralhas de Troia",
      "descricao": "Muralhas lendárias da cidade de Troia, erguidas segundo o mito por deuses a serviço do rei Laomedonte."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Segundo o mito grego, que dois deuses, castigados por Zeus, serviram ao rei Laomedonte e ergueram as muralhas de Troia?",
    "resposta": "Poseidon e Apolo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Laomedon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Laomedon",
        "situacao": "ok",
        "texto": "In Greek mythology, Laomedon (; Ancient Greek: Λαομέδων, romanized: Lāomédōn, lit. 'ruler of the people' or 'lord of the people') was a Trojan king, son of Ilus and thus nephew of Ganymede and Assaracus.\n[…]\nZeus sent Poseidon and Apollo to serve Laomedon as punishment for a conspiracy against Zeus. The two gods built walls around Troy, but Laomedon refused to pay them, leading to a pestilence and a sea monster attacking the city. To end the calamities, Laomedon had to sacrifice his daughter Hesione to the sea monster. Heracles arrived and agreed to save Hesione in exchange for the magical horses, but Laomedon went back on his promise, causing Heracles to wage war on Troy.\n[…]\nLaomedon's mother was variously identified as Eurydice, Leucippe or Batia. Thus, his possible siblings are Themiste, Telecleia and sometimes, even Tithonus.\n[…]\nWhen Poseidon and Apollo entered a conspiracy to put Zeus in bonds, the supreme god being offended, sent them to serve with King Laomedon as punishment for their nefarious design. In other sources, the two gods simply tested the wantonness of the Laomedon. As ordered by Laomedon who promised wages, the two deities assuming the likeness of men undertook to build huge walls around the city. But when they had finished, the king refused to fulfill their agreement of reward.\n[…]\nIn vengeance, before the Trojan War, Apollo sent a pestilence to Troy while Poseidon released a sea monster which, carried up by a flood, snatched away the  people of the plain.\n[…]\nThe siege once laid, Telamon was the first to breach the wall and enter the city, and after him Heracles. When the son of Zeus had taken the city, he shot down Laomedon and his sons, except Podarces."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Laomedonte",
        "situacao": "ok",
        "texto": "Na mitologia grega, Laomedonte foi um rei de Troia, pai de Príamo, Lampo, Hicetaon, Hesíone, Proclia, Étila, Astíoque, Medesicaste e Titono.\n[…]\nExistem várias versões sobre com quem Laomedonte se casou:\n[…]\nSeu filho Titono foi levado pela deusa Eos (Aurora) para a Etiópia, onde eles tiveram dois filhos: Emátio e Memnon.\n[…]\nPosídon e Apolo quiseram testar Laomedonte, e, assumindo uma forma humana, se ofereceram para fortificar Troia por um preço. Porém, quando tudo foi concluído, Laomedonte recusou-se a dar-lhes o prêmio prometido e Apolo enviou uma praga e Posidão um monstro marinho, que devastaram a região.\n[…]\nAconselhados por um oráculo, os troianos ofereceram Hesíone, a filha de Laomedonte, que foi amarrada às rochas à beira do mar. Aconteceu que Héracles estava a regressar da sua expedição contra as Amazonas, e ele prometeu salvar Hesíone matando o monstro marinho, se lhe fosse prometido que Laomedonte lhe daria os cavalos divinos que possuía, oferecidos por Zeus em troca de Ganímedes. Laomedonte concordou, e Héracles matou o monstro, mas a promessa foi quebrada.\n[…]\nHéracles voltou a Troia, depois de terminas seus doze trabalhos e de passar um tempo servindo a Ônfale,  e matou Laomedonte e os seus filhos, à excepção de Podarge, que lhe deu um véu dourado, oferecido pela sua irmã Hesíone. Esta foi depois dada a Télamo e Podarge a partir desse dia ficou conhecido como Príamo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Atlântida",
      "descricao": "Ilha lendária que teria afundado no mar, descrita nos diálogos de Platão."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "O relato mais antigo sobre a ilha perdida de Atlântida está nos diálogos Timeu e Crítias. Que filósofo grego os escreveu?",
    "resposta": "Platão",
    "fonte": [
      "https://en.wikipedia.org/wiki/Atlantis"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Atlantis",
        "situacao": "ok",
        "texto": "Atlantis (Ancient Greek: Ἀτλαντὶς νῆσος, romanized: Atlantìs nêsos, lit. 'island of Atlas') is a fictional island mentioned in Plato's works Timaeus and Critias as part of an allegory on the hubris of nations. By describing Atlantis as a naval empire from the west that had conquered most of Europe and Libya, Plato purposely created a literary contrast with the Achaemenid Empire, the great land-bas\n[…]\nThe four people appearing in those two dialogues are the politicians Critias and Hermocrates as well as the philosophers Socrates and Timaeus of Locri, although only Critias speaks of Atlantis. In his works Plato makes extensive use of the Socratic method in order to discuss contrary positions within the context of a supposition.\n[…]\nKenneth Feder points out that Critias's story in the Timaeus provides a major clue. In the dialogue, Critias says, referring to Socrates' hypothetical society:\n[…]\nIn order to give his account of Atlantis verisimilitude, Plato mentions that the story was heard by Solon in Egypt, and transmitted orally over several generations through the family of Dropides, until it reached Critias, a dialogue speaker in Timaeus and Critias. Solon had supposedly tried to adapt the Atlantis oral tradition into a poem (that if published, was to be greater than the works of Hesiod and Homer). While it was never completed, Solon passed on the story to Dropides.\n[…]\nIn the new era, the third century AD Neoplatonist Zoticus wrote an epic poem based on Plato's account of Atlantis. Plato's work may already have inspired parodic imitation, however. Writing only a few decades after the Timaeus and Critias, the historian Theopompus of Chios wrote of a land beyond the ocean known as Meropis. This description was included in Book 8 of his Philippica, which contains a dialogue between Silenus and King Midas.\n[…]\nThe dictionary definition of atlantis at Wiktionary"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Atl%C3%A2ntida",
        "situacao": "ok",
        "texto": "Atlântida (em grego clássico: Ἀτλαντὶς νῆσος – trad.: “ilha de Atlas”) é uma ilha fictícia mencionada nas obras Timeu e Crítias do filósofo grego Platão como parte de uma alegoria sobre a arrogância das nações. Na história, Atlântida é descrita como um império naval que governava todas as partes ocidentais do chamado mundo conhecido, tornando-a a contra-imagem literária do Império Aquemênida.\n[…]\nAs únicas fontes primárias sobre Atlântida são os diálogos Timeu e Crítias do filósofo grego Platão; todas as outras menções à ilha são baseadas nestas referências. Os diálogos afirmam citar Sólon, que teria visitado o Egito entre 590 e 580 a.C. onde teria traduzido registros egípcios sobre Atlântida. Platão introduziu Atlântida no Timeu, escrito em 360 a.C.:\n[…]\nO filósofo Crantor, aluno de Xenócrates, que foi aluno de Platão, é frequentemente citado como exemplo de escritor que pensava que a história era um fato histórico. Sua obra, um comentário sobre Timeu, está perdida, mas Proclo, um neoplatonista do século V d.C., fez um relato sobre ela.\n[…]\nPara dar verossimilhança ao seu relato de Atlântida, Platão menciona que a história foi ouvida por Sólon no Egito, que teria sido transmitida oralmente ao longo de várias gerações através da família de Dropides, até chegar a Crítias, um orador de diálogo nas obras Timeu e Crítias. Sólon supostamente tentou adaptar a tradição oral da Atlântida em um poema (que, se publicado, seria maior que as obras de Hesíodo e Homero).\n[…]\nNa nova era, o neoplatônico Zótico, do século III, escreveu um poema épico baseado no relato de Platão. Contudo, a obra de Platão já pode ter inspirado paródias. Escrevendo apenas algumas décadas após Timeu e Crítias, o historiador Teopompo de Quios escreveu sobre uma terra além do oceano conhecida como Meropis. Esta descrição foi incluída no Livro 8 de sua Filípicas, que contém um diálogo entre Sileno e o rei Midas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Pomo da Discórdia",
      "descricao": "Maçã de ouro da mitologia grega, destinada à mais bela, que provocou a disputa entre Hera, Atena e Afrodite."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Que deusa grega, excluída de um casamento, jogou entre as convidadas o pomo de ouro que acabaria levando à Guerra de Troia?",
    "resposta": "Éris",
    "distratores": [
      "Hera",
      "Nêmesis",
      "Hécate"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Apple_of_Discord",
      "https://en.wikipedia.org/wiki/Eris_(mythology)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Apple_of_Discord",
        "situacao": "ok",
        "texto": "In Greek mythology, the Apple of Discord (Ancient Greek: μῆλον τῆς Ἔριδος) was a golden apple thrown by Eris, the goddess of strife, at the wedding of Peleus and Thetis. She was not invited to the wedding and threw it out of anger to ruin the gathering (after showing up uninvited). It sparked a vanity-fueled dispute among Hera, Athena, and Aphrodite that led to the Judgement of Paris and ultimatel\n[…]\nIn common parlance, the \"apple of discord\" is the core, kernel, or crux of an argument, or a small matter that could lead to a bigger dispute.\n[…]\nIn the Eixample district of Barcelona, there is a block nicknamed in Spanish La manzana de la discordia (Catalan: Illa de la Discòrdia). The reason for this usage is that the word manzana means both \"apple\" and \"city block\" in Spanish. It was so named (\"block of discord\") because it features four different interpretations of Modernisme architecture: Antoni Gaudí's Casa Batlló, Lluís Domènech i Montaner's Casa Lleó Morera, Josep Puig i Cadafalch's Casa Amatller, and Enric Sagnier's Casa Mulleras.\n[…]\nIn some later sources, Eris inscribed on the apple \"for the fairest\" or \"to the most beautiful\" before tossing it. The most popular version of the inscription in Greek is τῇ καλλίστῃ (transliterated: tē(i) kallistē(i), \"for/to the most beautiful\"). Καλλίστῃ is the dative singular of the feminine superlative of καλός, \"beautiful\". In Latin sources, the word is formosissima.\n[…]\nIn an attempt to rationalize the myth, Ptolemaeus Chennus wrote that instead of an apple, the three goddesses fought over which would get a man named Melus (\"apple\") as her priest, with Paris deciding in favour of Aphrodite.\n[…]\nDiscordianism"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Eris_(mythology)",
        "situacao": "ok",
        "texto": "In Greek mythology, Eris (Ancient Greek: Ἔρις, romanized: Eris, lit. 'Strife') is the goddess and personification of strife and discord, particularly in war, and in the Iliad (where she is the \"sister\" of Ares the god of war). According to Hesiod she was the daughter of primordial Nyx (Night), and the mother of a long list of undesirable personified abstractions, such as Ponos (Toil), Limos (Famin\n[…]\nEris initiated a quarrel between Hera, Athena and Aphrodite, which led to the Judgement of Paris and ultimately the Trojan War. Eris's Roman equivalent is Discordia. According to Hesiod, there was another Eris, separate and distinct from Eris the daughter of Nyx, who was beneficial to men.\n[…]\nThe fifth-century BC playwright Euripides describes the Judgement of Paris several times with no mention of either Eris or an apple. Later accounts include details, such as the golden Apple of Discord, which may or may not have come from the Cypria. According to the Fabulae of Hyginus, composed somewhere between the first century BC and the late second century AD, all the gods had been invited to the wedding except Eris.\n[…]\nAntoninus Liberalis, in his Metamorphoses, involves Eris in the story of Polytechnus and Aëdon, who claimed to love each other more than Hera and Zeus. This angered Hera, so she sent Eris to wreak discord upon them. Eris is mentioned many times in Quintus Smyrnaeus' Posthomerica, which covers the period between the end of the Iliad and the beginning of his Odyssey.\n[…]\nEris is the principal figure of worship in the modern Discordian religion invented as an \"absurdist joke\" in 1957 by two school friends Gregory Hill and Kerry Wendell Thornley. As mythologized in the religion's satirical text Principia Discordia, written by Hill with Thornely and others, Eris (apparently) spoke to Hill and Thornley in an all-night bowling alley, in the form of a chimpanzee."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pomo_da_disc%C3%B3rdia",
        "situacao": "ok",
        "texto": "A Guerra de Troia começou durante o casamento de Peleu e Tétis, no Olimpo: Éris, a deusa da discórdia, que naturalmente não tinha sido convidada, resolveu acabar com a alegria reinante e entregou anonimamente aos olímpicos uma linda maçã, toda de ouro, com a inscrição \"Para a mais bela\".\n[…]\nTodas tentaram persuadi-lo com oportunidades infinitamente gloriosas. Em troca da maçã de ouro, Atena ofereceu a Páris a chefia de uma histórica e vitoriosa guerra. Já Hera ofereceu também a ele a glória de ser o Rei absoluto de toda a Europa e Ásia. E Afrodite por sua vez, garantiu mais uma vez a ele o amor da mais bela mulher do mundo.\n[…]\nAuxiliados por Afrodite, Helena e Páris fugiram para Troia. Assim que soube da traição, Menelau enfurecido foi pedir auxílio ao seu inescrupuloso irmão, o rei Agamenon para junto com ele persuadir todos os grandes generais e reis da Grécia numa marcha colossal contra os troianos (inclusive o rei da província de Ítaca, Odisseu, arquiteto do plano com o Cavalo de Troia e posteriormente famoso pela Odisseia).\n[…]\nAgamenon viu no infortúnio do irmão a oportunidade perfeita para conquistar Troia, até então conhecida como impenetrável. E foi a partir desse momento que começava a mundialmente conhecida Guerra de Troia. No fim Páris cumpriu a missão perdendo a guerra e causando a destruição de Troia.\n[…]\nE a famosa maçã passou a ser conhecida como pomo da discórdia — que hoje indica qualquer coisa que faça as pessoas brigarem entre si.\n[…]\nEm um adendo moderno de 1965, no livro Principia Discordia, é dito que após ela jogar a maçã de ouro dentro do salão do banquete ela saiu e foi comer um cachorro quente. Sendo este pelos adeptos do discordianismo a causa da \"Esnobada original\".\n[…]\nO pomo da discórdia é um símbolo sagrado para os discordianos.\n[…]\nPomo de ouro\n[…]\nÉris",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Egeu (rei de Atenas)",
      "descricao": "Rei mítico de Atenas, pai de Teseu, que deu nome ao Mar Egeu."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Segundo o mito, um rei de Atenas se jogou ao mar ao ver velas pretas no navio do filho, que julgou morto. Que mar ganhou o nome desse rei?",
    "resposta": "Mar Egeu",
    "fonte": [
      "https://en.wikipedia.org/wiki/Aegeus",
      "https://en.wikipedia.org/wiki/Aegean_Sea"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Aegeus",
        "situacao": "ok",
        "texto": "Aegeus ( , ; Ancient Greek: Αἰγεύς, romanized: Aigeús, lit. 'goat', 'shield' or 'protector') was one of the kings of Athens in Greek mythology, who gave his name to the Aegean Sea, was the father of Theseus, and founded Athenian institutions.\n[…]\nAegeides (Αἰγείδης), was a patronymic from Aegeus and especially used to designate Theseus.\n[…]\nWhen Theseus arrived, he did not reveal his true identity. He was welcomed by Aegeus, who was suspicious about the stranger who came to Athens. Medea tried to have Theseus killed by encouraging Aegeus to ask him to capture the Marathonian Bull, but Theseus succeeded. She tried to poison him, but at the last second, Aegeus recognized his son and knocked the poisoned cup out of Theseus' hand. Father and son were thus reunited, and Medea was sent away to Asia.\n[…]\nTheseus departed for Crete. Upon his departure, Aegeus told him to put up white sails when returning if he was successful in killing the Minotaur. However, when Theseus returned, he forgot these instructions.\n[…]\nWhen Aegeus saw the black sails coming into Athens, mistaken in his belief that his son had been slain, he killed himself by jumping from a height: according to some, from the Acropolis or another unnamed rock; according to some Latin authors, into the sea which was therefore known as the Aegean Sea.\n[…]\nSophocles' tragedy Aegeus has been lost, but Aegeus features in Euripides' Medea.\n[…]\nAt Athens, the traveller Pausanias was informed in the second-century CE that the cult of Aphrodite Urania above the Kerameikos was so ancient that it had been established by Aegeus, whose sisters were barren, and he still childless himself.\n[…]\nChisholm, Hugh, ed. (1911). \"Aegeus\" . Encyclopædia Britannica (11th ed.). Cambridge University Press."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Aegean_Sea",
        "situacao": "ok",
        "texto": "The Aegean Sea is an elongated embayment of the Mediterranean Sea between Europe and Asia. It is located between the Balkans and Anatolia, and covers an area of some 215,000 km2 (83,000 sq mi). In the north, the Aegean is connected to the Marmara Sea, which in turn connects to the Black Sea, by the straits of the Dardanelles and the Bosphorus, respectively. The Aegean Islands are located within th\n[…]\nAegeus, the father of Theseus, who is said to have drowned himself in the sea. According to the story, Aegeus instructed Theseus to raise white sails if he succeeded in killing the Minotaur, when Theseus forgot to do so, Aegeus believed his son had died and leapt into the sea."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Egeu_%28mitologia%29",
        "situacao": "ok",
        "texto": "Egeu, (em grego clássico: Αἰγεύς; romaniz.: Aigeús) na mitologia grega, era filho de Pandião II, pai de Teseu e rei de Atenas. Em algumas versões, ele não é o pai de Teseu, que seria filho de Posidão.\n[…]\nOs filhos de Pandião retornaram a Atenas e expulsaram os metiônidas,  recuperando o reino para Egeu ou dividindo o reino em quatro, com Egeu com o poder supremo.\n[…]\nNa volta para Atenas, Egeu se hospedou em Trezena, cujo rei Piteu, filho de Pélope, compreendendo o oráculo, fez Egeu se embebedar, e deitar com sua filha Etra. Na mesma noite, porém, Posidão também se deitou com Etra.\n[…]\nTeseu estava em Trezena quando Medeia veio para Atenas e se casou com Egeu. Medeia tentou assassinar Teseu, mas sua tramóia foi descoberta, e ela fugiu.\n[…]\nAndrogeu, filho de Minos, rei de Creta, venceu todas as provas dos jogos panatenaicos suscitando a inveja do rei Egeu, que o convidou a matar o touro de Maratona. Androgeu foi morto pelo animal e seu pai, Minos, invadiu a Ática.\n[…]\nMinos não conseguiu tomar Atenas, e rezou a Zeus pedindo vingança, que fez Atenas sofrer fome e peste. Com a derrota do rei Egeu, Minos impôs um tributo de sete rapazes e sete raparigas que deviam ser sacrificados ao Minotauro de nove em nove anos.\n[…]\nTeseu chegou em Atenas e expulsou Medeia.\n[…]\nEgeu pede a Teseu que vá matar o Minotauro. Combinou com seu filho que ele fosse com as velas negras e, caso voltasse vivo, erguesse as velas brancas. Se morresse, a tripulação levaria o corpo com as velas negras erguidas. Teseu vai a Creta e mata o Minotauro, mas, na volta, cheio de felicidade por ter derrotado o monstro, ele deixa as velas negras, e Egeu, achando que Teseu tinha morrido, se mata, jogando-se no mar que passou a se chamar mar Egeu.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Campos Elísios (mitologia)",
      "descricao": "Paraíso da mitologia grega reservado às almas dos heróis e dos justos."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Que famosa avenida de Paris tem o nome do paraíso grego reservado às almas dos heróis?",
    "resposta": "Champs-Élysées",
    "fonte": [
      "https://en.wikipedia.org/wiki/Elysium",
      "https://en.wikipedia.org/wiki/Champs-%C3%89lys%C3%A9es"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Elysium",
        "situacao": "ok",
        "texto": "Elysium ( or  ih-LIZ(H)-ee-əm), otherwise known as the Elysian Fields (Ancient Greek: Ἠλύσιον πεδίον, Ēlýsion pedíon), Elysian Plains or Elysian Realm, is a conception of the afterlife that developed over time and was maintained by some Greek religious and philosophical sects and cults. It was initially separated from the Greek underworld—the realm of Hades. Only mortals related to the gods and ot\n[…]\nIn Homer's Odyssey, Elysium is described as a paradise:\n[…]\nIn the Renaissance, the heroic population of the Elysian Fields tended to outshine its formerly dreary pagan reputation; the Elysian Fields borrowed some of the bright allure of paradise. In Paris, the Champs-Élysées retain their name of the Elysian Fields, first applied in the late 16th century to a formerly rural outlier beyond the formal parterre gardens behind the royal French palace of the Tuileries.\n[…]\nThe Champs-Élysées in Paris is French for \"Elysian Fields\". The nearby Élysée Palace houses the President of the French Republic, for which reason \"l'Élysée\" frequently appears as a metonym for the French presidency, similar to how \"the White House\" can metonymically refer to the American presidency, and \"No.10 Downing Street\" the British prime minister.\n[…]\nElysium appears in the Fate of Atlantis DLC of the 2018 video game, Assassin's Creed Odyssey. In the first part of this DLC, The Fields of Elysium, the misthios travels to Elysium which is ruled by members of the precursor civilisation known as the Isu which were then worshipped as the gods of the Greek pantheon.\n[…]\nElysian Beach in Antarctica and Elysium Mons on Mars are named after the Elysian Fields, as is the aforementioned avenue des Champs-Élysées.\n[…]\nFortunate Isles, mythical islands associated with Elysium\n[…]\nMedia related to Elysium at Wikimedia Commons\n[…]\nQuotations related to Elysium at Wikiquote\n[…]\n\"Elysium\" . Encyclopædia Britannica. Vol. VIII (9th ed.). 1878. p. 156."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Champs-%C3%89lys%C3%A9es",
        "situacao": "ok",
        "texto": "The Avenue des Champs-Élysées (UK: , US: ; French: [av(ə)ny de ʃɑ̃z‿elize] ; \"Avenue of the Elysian Fields\"), usually shortened to the Champs-Élysées, is an avenue in the 8th arrondissement of Paris, France. The avenue is 1.9 kilometres (1.2 mi) long and 70 metres (230 ft) wide, running between the Place de la Concorde in the east and the Place Charles de Gaulle in the west, where the Arc de Triom\n[…]\nIn 1860, the merchants joined to form the Syndicat d'Initiative et de Défense des Champs-Élysées, an association to promote commerce along the avenue. In 1980, the group changed its name to the Comité des Champs-Élysées and to Comité Champs-Élysées in 2008. It is the oldest standing committee in Paris.\n[…]\nParis Métro Line 1 runs under the Champs-Élysées. Several stations are located along it; stations from west to east are: Charles de Gaulle – Étoile at the street's west end at Arc de Triomphe, George V by the Hôtel George-V, Franklin D. Roosevelt at the rond-point des Champs-Élysées, Champs-Élysées – Clemenceau at place Clemenceau and Concorde at the southern end of the avenue, where the Place de la Concorde is located.\n[…]\nAt the beginning of 2021, the Mayor of Paris, Anne Hidalgo, announced that the city would transform the Champs-Élysées into an \"extraordinary garden\" which will reduce the space for auto traffic by half, add more pedestrian space, and create \"tunnels of trees\" for improved air quality. A walkway will connect over 200 acres of green space stretching between the Arc de Triomphe, the Place de la Concorde, and the Tuileries Gardens.\n[…]\nOfficial website of the Champs-Élysées Paris since 1996 (All events, news, shops, restaurants, hotels… and the largest database of images about the avenue: more than 10,000 photos in the gallery) Archived 18 September 2014 at the Wayback Machine\n[…]\nChamps-Élysées Directory and Images\n[…]\nChamps-Élysées Paris, official Fan Page on Facebook."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Campos_El%C3%ADsios",
        "situacao": "ok",
        "texto": "Os Campos Elísios (em grego:  Ἠλύσιον πέδιον, transl.: Ēlýsion pédion) são o paraíso na mitologia grega, um lugar do mundo dos mortos governado por Hades, oposto ao Tártaro (lugar de eterno tormento e sofrimento). Nos Campos Elísios, os homens virtuosos repousavam dignamente após a morte, rodeados por paisagens verdes e floridas, dançando e se divertindo noite e dia, descrição semelhante ao céu do\n[…]\nApenas mortais relacionados aos deuses e outros heróis podiam ser admitidos além do rio Estige. Mais tarde, a concepção de quem poderia entrar foi expandida para incluir aqueles escolhidos pelos deuses, os justos e os heróicos. Permaneceriam nos Campos Elísios após a morte, para viver uma vida após a morte abençoada e feliz e se entregar a tudo o que haviam desfrutado na vida.\n[…]\nEm algumas versões, é cercado por um muro gigantesco, para separá-lo do Tártaro. Certas versões obsoletas colocam o juiz Radamanto como um dos \"protetores\" dos Campos Elísios, e um de seus servos seria Cronos (anteriormente o líder dos titãs e pai de Zeus), um titã maligno e cruel. Mesmo assim, Cronos nunca incomodou ninguém no paraíso.\n[…]\nAlguns estudiosos também sugeriram que o Elísio grego pode ter origem no termo egípcio ialu (anteriormente iaru), que significava \"juncos\", numa referência específica aos \"campos de junco\" (em egípcio sekhet iaru/ialu), uma terra paradisíaca de fartura onde os mortos esperavam passar a eternidade.\n[…]\nOs Campos Elísios descritos por Homero não seriam abaixo da Terra, no mundo dos mortos de Hades, mas sim na parte ocidental da Terra, perto do Oceano, sendo descrito como uma terra feliz, sem neve, sem frio, sem chuva e sempre com a presença da brisa refrescante de Zéfiro. Já em Hesíodo, os Campos Elísios seriam nas Ilhas dos Eleitos ou Ilhas Afortunadas, no Oceano Ocidental, que foi de onde surgiu a lenda da Ilha de Atlântida.\n[…]\nParaíso",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Quetzalcóatl",
      "descricao": "Divindade mesoamericana cultuada por astecas e outros povos do México."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome do deus mesoamericano Quetzalcóatl, cultuado pelos astecas, costuma ser traduzido de que maneira?",
    "resposta": "Serpente emplumada",
    "fonte": [
      "https://en.wikipedia.org/wiki/Quetzalcoatl"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Quetzalcoatl",
        "situacao": "ok",
        "texto": "Quetzalcoatl () (Nahuatl: \"Feathered Serpent\") is a deity in Aztec culture and literature. Among the Aztecs, he was related to wind, the planet Venus, the Sun, merchants, arts, crafts,  knowledge, and learning. He was also the patron god of the Aztec priesthood. He is also a god of wisdom, learning and intelligence. He was one of several important gods in the Aztec pantheon, along with the gods Tl\n[…]\nCholula remained the most important center of worship of Quetzalcoatl, the Aztec/Nahua version of the feathered-serpent deity, in the post-classic period.\n[…]\nRepresented as the plumed serpent, Quetzalcoatl was also seen as a manifestation of the wind, one of the most powerful forces of nature; a text in the Nahuatl language captures this relationship:\n[…]\nIn Xochicalco, depictions of the feathered serpent accompany the image of a seated, armed ruler and the hieroglyph for the day sign 9 Wind. The date 9 Wind is known to be associated with fertility, Venus and war among the Maya and frequently occurs in relation to Quetzalcoatl in other Mesoamerican cultures.\n[…]\nTo the Aztecs, Quetzalcoatl was, as his name indicates, a feathered serpent. He was a creator deity having contributed essentially to the creation of mankind. He also had anthropomorphic forms, for example in his aspects as Ehecatl the wind god. Among the Aztecs, the name Quetzalcoatl was also a priestly title, as the two most important priests of the Aztec Templo Mayor were called \"Quetzalcoatl Tlamacazqui\".\n[…]\nA 2012 exhibition at the Los Angeles County Museum of Art and the Dallas Museum of Art, \"The Children of the Plumed Serpent: the Legacy of Quetzalcoatl in Ancient Mexico\", demonstrated the existence of a powerful confederacy of Eastern Nahuas, Mixtecs and Zapotecs, along with the peoples they dominated throughout southern Mexico between 1200 and 1600 (Pohl, Fields, and Lyall 2012, Harvey 2012, Pohl 2003)."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Quetzalc%C3%B3atl",
        "situacao": "ok",
        "texto": "Quetzalcoatl é uma divindade na cultura e na literatura mesoamericanas cujo nome vem da Língua náuatle e significa \"serpente emplumada\" ou \"serpente de penas quetzal\". A adoração de uma Serpente Emplumada foi documentada pela primeira vez no Teotihuacan no primeiro século a.C. ou no primeiro século d.C.. Esse período situa-se no período do pré-clássico até o início do período clássico (400 a.C.\n[…]\nCholula é conhecido por ter permanecido como o mais importante centro de culto a Quetzalcoatl, a versão asteca/nahua da divindade serpente emplumada, no período pós-clássico.\n[…]\nTem sido sugerido que essas histórias lembram a disseminação do culto da serpente emplumada nos períodos epi-clássico e pós-clássico.\n[…]\nEm Xochicalco, as representações da serpente emplumada são acompanhadas pela imagem de um soberano armado sentado e o hieróglifo do signo do dia do Vento. Sabe-se que o dia do vento é associado com fertilidade, Vênus e com a guerra entre os maias, frequentemente ocorrendo em relação a Quetzalcoatl em outras culturas mesoamericanas.\n[…]\nCom base na iconografia da divindade da serpente emplumada em locais como Teotihuacan, Xochicalco, Chichén Itzá, Tula e Tenochtitlan combinados com certas fontes etnohistóricas, o historiador David Carrasco argumentou que a função preeminente da deidade serpente emplumada em toda a história mesoamericana era ser a divindade padroeira do centro urbano, um deus da cultura e civilização.\n[…]\nPara os astecas, Quetzalcoatl era, como seu nome indica, uma serpente emplumada, um réptil voador (muito parecido com um dragão), que era um fazedor de fronteiras (e transgressor) entre a terra e o céu. Ele era uma divindade criadora, tendo contribuído essencialmente para a criação da Humanidade. Ele também tinha formas antropomórficas, por exemplo em seus aspectos como Ehecatl, o deus do vento.\n[…]\nMitologia asteca na cultura popular\n[…]\nTopetzin Ce Acatl Quetzalcoatl",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Aracne",
      "descricao": "Tecelã da mitologia grega transformada em aranha por Atena."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A tecelã grega Aracne desafiou Atena e foi transformada em aranha. Que classe de animais, que inclui escorpiões e carrapatos, compartilha a origem do nome dela?",
    "resposta": "Aracnídeos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Arachne",
      "https://en.wikipedia.org/wiki/Arachnid"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Arachne",
        "situacao": "ok",
        "texto": "Arachne ( ; from Ancient Greek: Ἀράχνη, romanized: Arákhnē, lit. 'spider', cognate with Latin araneus) is the protagonist of a tale in classical mythology known primarily from the version told by the Roman poet Ovid (43 BCE–17 CE). In Book Six of his epic poem Metamorphoses, Ovid recounts how the talented mortal Arachne challenged the goddess Minerva (the Roman equivalent of Athena) to a weaving c\n[…]\nWhen Minerva found that Arachne's tapestry mocked the gods, the goddess, though approving of Arachne's talent, became enraged and beat the girl with her shuttle. After Arachne hanged herself out of shame, she was transformed into a spider out of pity by Minerva. The myth both provided an etiology of spiders' web-spinning abilities and was a cautionary tale about hubris only leading to one's downfall.\n[…]\nShaken and embarrassed, Arachne killed herself by hanging.\n[…]\nMinerva wove a tapestry with themes of hubris being punished by the gods, as a warning to Arachne against what she was doing, in each of its four corners. Those were Juno and Jupiter transforming Rhodope and Haemus into the eponymous mountain ranges, Juno transforming Queen Gerana into a crane for daring to boast of being more beautiful than the queen of the gods, Juno again turning Antigone into a stork for competing with her, and finally Cinyras' daughter being petrified.\n[…]\nArachne meanwhile chose to include several tales of male gods tricking and deceiving women by assuming other forms instead of their own. She depicted Jupiter transformed into: a bull for Europa, an eagle for Asteria, a swan for Leda, a satyr for Antiope, Amphitryon for Alcmene, golden shower for Danaë, flame for Aegina, a shepherd for Mnemosyne, and a snake for Proserpina.\n[…]\n407 Arachne, an asteroid named after Arachne\n[…]\nHejduk, Julia D. (2012). \"Arachne's Attitude: Metamorphoses 6.25\". Mnemosyne. 65 (4/5): 764–768. doi:10.1163/156852512X585241. JSTOR 41725255."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Arachnid",
        "situacao": "ok",
        "texto": "Arachnids are arthropods in the class Arachnida () of the subphylum Chelicerata. Arachnida includes, among others, spiders, scorpions, ticks, mites, pseudoscorpions, harvestmen, camel spiders, whip spiders and vinegaroons.\n[…]\nArachnids may have one or two gonads, which are located in the abdomen. The genital opening is usually located on the underside of the second abdominal segment. In most species, the male transfers sperm to the female in a package, or spermatophore. The males in harvestmen and some mites have a penis. Complex courtship rituals have evolved in many arachnids to ensure the safe delivery of the sperm to the female. Members of many orders exhibit sexual dimorphism.\n[…]\nThe subdivisions of the arachnids are usually treated as orders. Historically, mites and ticks were treated as a single order, Acari. However, molecular phylogenetic studies suggest that the two groups do not form a single clade, with morphological similarities being due to convergence. They are now usually treated as two separate taxa – Acariformes (mites) and Parasitiformes (ticks) – which may be ranked as orders or superorders.\n[…]\nThe arachnid subdivisions are listed below alphabetically; numbers of species are approximate.\n[…]\n†Haptopoda – extinct arachnids apparently part of the Tetrapulmonata, the group including spiders and whip scorpions (1 species)\n[…]\n†Phalangiotarbida – extinct arachnids of uncertain affinity (30 species)\n[…]\n†Uraraneida – extinct spider-like arachnids, but with a \"tail\" and no spinnerets (2 species)\n[…]\nIt is estimated that 110,000 arachnid species have been described, and that there may be over a million in total.\n[…]\nArachnophobia\n[…]\nList of extinct arachnids\n[…]\nArachnid, Natural History Museum, London"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Aracne",
        "situacao": "ok",
        "texto": "Aracne, na mitologia grega, era uma jovem lídia de extraordinária habilidade na arte de tecer. Seus trabalhos eram perfeitos e admirados, chamando a atenção de todos: as ninfas deixavam os córregos e os vinhedos; os camponeses, a labuta. Devido a tanta admiração de todos, Aracne começou a comparar-se à deusa Atena na qualidade de seus trabalhos. Quando a notícia chegou ao Olimpo, Atena ficou furio\n[…]\nSentiu-se desafiada e resolveu então promover uma competição contra Aracne, para ver quem merecia, de fato, ser considerada a melhor na arte de tecer. Quando foram conferir os trabalhos, Atena viu que Aracne tinha tecido as traições amorosas de Zeus, seu pai. Furiosa, deu um golpe na cabeça de Aracne e rasgou seu tecido. Aracne ficou decepcionada com o que aconteceu e decidiu se enforcar, mas Atena chegou a tempo e salvou-a.\n[…]\nEm seguida transformou a corda, em que Aracne se encontrava em uma teia, transformando-a em aranha, porque assim a tecelagem perfeita de Aracne ficaria viva para sempre.\n[…]\nOutra versão diz que as pessoas ficaram em dúvida quanto às tecelagens, então Atena, com raiva, transformou Aracne em aranha.\n[…]\nE ainda há outra, que diz que Aracne fez uma peça a um rei, que, deslumbrado, disse que só Atena faria melhor. Aracne então decidiu desafiá-la para ver quem era a melhor. Atena aceitou e assim foi. Durante o desafio Atena viu que não tinha chance de vencer, então disse que se Aracne desistisse a tornaria a maior fiadeira e tecelã de todos os tempos, e Aracne aceitou.\n[…]\nNo entanto, em vez de Atena a transformar no que dissera, transformou-a em aranha, tornando-se assim a tecedeira (tecelã) dos deuses.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Ceres (mitologia)",
      "descricao": "Deusa romana da agricultura e das colheitas, equivalente à grega Deméter."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Que palavra usada para grãos como trigo, arroz e milho vem do nome da deusa romana da agricultura?",
    "resposta": "Cereal",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ceres_(mythology)",
      "https://en.wikipedia.org/wiki/Cereal"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ceres_(mythology)",
        "situacao": "ok",
        "texto": "In ancient Roman religion, Ceres ( SEER-eez, Latin: [ˈkɛreːs]) was a goddess of agriculture, grain crops, fertility, and motherly relationships. She was originally the central deity in Rome's so-called plebeian or Aventine Triad, then was paired with her daughter Proserpina in what Romans described as \"the Greek rites of Ceres\". Her seven-day April festival of Cerealia included the popular Ludi Ce\n[…]\nThe Roman poet Vergil, in his Georgics (1.212), describes this as Cereale papaver, or \"Ceres's poppy\", which eases pain and brings sleep - the deepest sleep of all being death. Poppies are often woven into Ceres's wheat-stalk crown, the corona spicea, worn by her priestesses and devotees.\n[…]\nAn inscription at Capua names a male sacerdos Cerialis mundalis, a priest dedicated to Ceres's rites of the mundus. The plebeian aediles had minor or occasional priestly functions at Ceres's Aventine Temple and were responsible for its management and financial affairs including collection of fines, the organisation of ludi Cerealia and probably the Cerealia itself.\n[…]\nRoman tradition credited Ceres's eponymous festival, Cerealia, to Rome's second king, the semi-legendary Numa. Ceres's senior, male priesthood was a minor flaminate whose establishment and rites were supposedly also innovations of Numa. Her affinity and joint cult with Tellus, also known as Terra Mater (Mother Earth) may have developed at this time.\n[…]\nThe word cereal derives from Ceres's association with edible grains. Whereas Ceres represents food, her son Liber (later indistinguishable from Bacchus) represents wine and \"good living\". The Roman comedian Terence (c. 195/185 – c. 159 BC) uses the line sine Cerere et Baccho friget Venus which at its simplest translates as \"without food and drink, love freezes\" or \"love needs food and wine to thrive\" - probably proverbial and widespread in his own day."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Cereal",
        "situacao": "ok",
        "texto": "A cereal is a grass  (family Poaceae) cultivated for its edible grain. Cereals are the world's largest crops, and are therefore staple foods. They include rice, wheat, rye, oats, barley, millet, and maize (US: corn). Edible grains from other plant families, such as amaranth, buckwheat and quinoa, are pseudocereals. Most cereals are annuals, producing one crop from each planting, though rice is som\n[…]\nIn these agricultural regions, religion was often shaped by the divinity associated with the grain and harvests. In the Mesopotamian creation myth, an era of civilization is inaugurated by the grain goddess Ashnan. The Roman goddess Ceres presided over agriculture, grain crops, fertility, and motherhood; the term cereal is derived from Latin cerealis, \"of grain\", originally meaning \"of [the goddess] Ceres\".\n[…]\nComplex civilizations arose where cereal agriculture created a surplus, allowing for part of the harvest to be appropriated from farmers, allowing power to be concentrated in cities.\n[…]\nOther cereals not included in the U.N.'s Food and Agriculture Organization statistics include wild rice, which is grown in small amounts in North America, and teff, an ancient grain that is a staple in Ethiopia. Teff is grown in sub-Saharan Africa as a grass primarily for feeding horses. It is high in fiber and protein. Its flour is often used to make injera. It can be eaten as a warm breakfast cereal like farina with a chocolate or nutty flavor.\n[…]\nThe table shows the annual production of cereals in 1961, 1980, 2000, 2010, and 2024.\n[…]\nCereals are traded as futures on world commodity markets, helping to mitigate the risks of changes in price for example, if harvests fail.\n[…]\nRosentrater, Kurt August; Evers, Anthony D. (2018). Kent's Technology of Cereals: An Introduction for Students of Food Science and Agriculture (5th ed.). Duxford, England: Woodhead Publishing. ISBN 978-0-08-100532-3. OCLC 1004672994."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ceres_%28mitologia%29",
        "situacao": "ok",
        "texto": "Ceres, na mitologia romana, equivalente à deusa grega, Deméter, filha de Saturno e Ops, amante e irmã de Júpiter, irmã de Juno, Vesta, Netuno e Plutão, e mãe de Proserpina com Júpiter.\n[…]\nCeres era a deusa das plantas que brotam (particularmente dos grãos) e do amor maternal. Diz-se que foi adotada pelos romanos em 496 a.C. durante uma fome devastadora, quando os livros Sibilinos avisaram para que se adotassem a deusa grega Deméter, Prosérpina (Perséfone) e Dionísio.\n[…]\nA deusa era personificada e celebrada por mulheres em rituais secretos no festival de Ambarvália, em Maio. Existia um templo dedicado a Ceres no monte Aventino em Roma. O seu primeiro festival era a Cereália ou \"Jogos Ceriais\" (Ludi Ceriales), instituídos no século III a.C. e celebrados anualmente de 12 de abril a 19 de abril. A veneração de Ceres ficou associada às classes plebeias, que dominavam o comércio de cereais.\n[…]\nCeres era retratada na arte com um cetro, um cesto de flores e frutos e tinha uma coroa feita de espigas de trigo.\n[…]\nA palavra cereal deriva de Ceres, comemorando a associação da deusa com os grãos comestíveis. O nome Ceres provém de \"ker\", de raiz Indo-Europeia e que significa \"crescer\", também é a raiz das palavras \"criar\" e \"incrementar\". O asteroide Ceres levou o nome desta deusa, o mesmo aconteceu com o elemento químico Cério.\n[…]\nCeres também é relacionada à cerveja, que em latim é grafada \"Cerevisia\" ou Cervisiae, batizada pelos celtas na antiga Gália (atual França) em homenagem à deusa. Empresta seu nome também à famosa levedura da cerveja cujo nome científico é Saccharomyces cerevisiae.\n[…]\nA deusa era homenageada pela população romana na chamada Cerialia.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Nice (mitologia)",
      "descricao": "Deusa grega alada que personifica a vitória."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Que marca esportiva americana tem o nome da deusa grega alada da vitória?",
    "resposta": "Nike",
    "fonte": [
      "https://en.wikipedia.org/wiki/Nike_(mythology)",
      "https://en.wikipedia.org/wiki/Nike,_Inc."
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Nike_(mythology)",
        "situacao": "ok",
        "texto": "In Greek mythology and ancient religion, Nike (Ancient Greek: Νίκη, lit. 'Victory') is the personification of the abstract concept of victory. She was the goddess of victory in battle, as well as in other kinds of contests. According to Hesiod's Theogony, she is the daughter of Styx and the Titan Pallas, and the sister of similar personifications: Zelus, Kratos, and Bia (i.e. Rivalry, Strength, an\n[…]\nOr like Athena, Nike could be thought of as the daughter of Zeus himself.\n[…]\nNike can appear in any context where victory is being alluded to, from the grand to the mundane. As part of the great mythological victory of the gods over the Giants, she can be shown driving Zeus's chariot. She is frequently depicted crowning victors, or otherwise glorifying the deeds of great heroes such as Heracles, Theseus, Achilles, and Diomedes.\n[…]\nFor example, on coins (and gems), a diminutive Nike stands on the hand of an enthroned Zeus or Athena.\n[…]\nSeveral examples, from as early as the third century BC, depict Nike striding forward on the prow of a ship, perhaps reflecting the increasing importance of naval battles during the wars between the Diadochi. Coins of the Macedonian king Demetrios Poliorketes (r. 301–285), depict such a striding Nike blowing into a military trumpet (salpinx). The Nike of Samothrace (\"Winged victory\"), a masterpiece of Hellenistic sculpture, also shows such a Nike on the prow of a warship.\n[…]\nNike is depicted on the second-century BC Pergamon Altar alongside Athena in the Gigantomachy, the war of the gods against the Giants. On the right side of the East frieze, Athena grabs a winged Giant (usually identified as Alcyoneus) by the hair. Below and to the right of Athena, the giant's mother Gaia rises from the ground, touching Athena's robe in supplication. Above Gaia, a winged Nike flies in to crown the victorious Athena.\n[…]\nThe Warburg Institute Iconographic Database (images of Nike)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Nike,_Inc.",
        "situacao": "ok",
        "texto": "Nike, Inc. is an American athletic footwear and apparel corporation headquartered near Beaverton, Oregon. It is the world's largest supplier of athletic shoes and apparel and a major manufacturer of sports equipment, with revenue in excess of US$46 billion in its fiscal year 2022.\n[…]\nNike was criticized for its use of the Beatles song \"Revolution\" in a 1987 commercial against the wishes of Apple Records, the Beatles' recording company. Nike paid US$250,000 to Capitol Records Inc., which held the North American licensing rights to the recordings, for the right to use the Beatles' rendition for a year.\n[…]\nIn 2012, Nike is listed as a partner of the (PRODUCT)RED campaign together with other brands such as Girl, American Express, and Converse. The campaign's mission is to prevent the transmission of HIV from mother to child. The campaign's byline is \"Fighting For An AIDS Free Generation\". The company's goal is to raise and send funds, for education and medical assistance to those who live in areas heavily affected by AIDS.\n[…]\nIn July 2023, a study by Kantar found that Americans consider Nike as the Most Inclusive Brands (alongside other top brands like Amazon, and Disney).\n[…]\nIn September 2018, Nike announced it had signed former American football quarterback Colin Kaepernick, noted for his controversial decision to kneel during the playing of the US national anthem, to a long-term advertising campaign. According to Charles Robinson of Yahoo! Sports, Kaepernick and Nike agreed to a new contract despite the fact Kaepernick has been with the company since 2011 and said that \"interest from other shoe companies\" played a part in the new agreement.\n[…]\nNike timeline\n[…]\nBreaking2 – A project by Nike to break the 2 hour marathon barrier.\n[…]\nBusiness data for Nike, Inc.:"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Nice_%28mitologia%29",
        "situacao": "ok",
        "texto": "Nice (em grego: Νίκη; romaniz.: Níkē ou Niké; \"Vitória\") é uma deusa grega que personifica a vitória, força e velocidade, representada por uma mulher alada, filha de Palas e Estige. Os romanos designaram o nome de Victória para Nice. Nice também pode ser representada com asas.\n[…]\nNos Jogos Olímpicos de Verão de 2004, em Atenas, a imagem da deusa veio cunhada nas medalhas (ouro, prata e bronze) com referência à Deusa Atena. A Deusa da estratégia e das batalhas. Sua imagem é obrigatória em todas as medalhas dos Jogos Olímpicos de Verão. Essa imagem da deusa nas medalhas vem de uma escultura em mármore do século V a.C., da autoria de Peônio. A mais famosa imagem de deusa é a de Samotrácia, exposta no Museu do Louvre, em Paris.\n[…]\nA deusa se encontra na mão direita de Atena, dando assim à deusa certeza de vitória em todas as batalhas travadas. Atena, em sua história, várias vezes já travou grandes batalhas contra deuses que desejavam para si a Nice, e, graças à deusa alada, Atena sempre as venceu.\n[…]\nQuando Zeus, a divindade dominante do panteão grego, estava organizando a guerra contra os titãs, Estige e seus filhos Nice, Bia, Cratos e Zelo foram seus aliados. Aos deuses, guerreiros e heróis, Bia dava a força, Cratos o poder e Nice coroava a vitória. Porém qualquer um que fosse vencedor também deveria saber lidar com Zelo - o ciúme, algo que sempre ronda quem tem sucesso.\n[…]\nA marca de roupas Nike teve seu nome inspirado na deusa homônima, Vitória de Samotrácia. Uma imagem de bronze dessa deusa encontra-se no Museu do Louvre; assim, o símbolo da marca () é semelhante a uma asa em homenagem à deusa alada da vitória.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Europa (mitologia)",
      "descricao": "Princesa fenícia raptada por Zeus disfarçado de touro e levada para Creta."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Segundo a tradição grega, que continente deve o nome a uma princesa fenícia raptada por Zeus disfarçado de touro?",
    "resposta": "Europa",
    "fonte": [
      "https://en.wikipedia.org/wiki/Europa_(consort_of_Zeus)",
      "https://en.wikipedia.org/wiki/Europe"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Europa_(consort_of_Zeus)",
        "situacao": "ok",
        "texto": "In Greek mythology, Europa (; Ancient Greek: Εὐρώπη, romanized: Eurṓpē; Attic Greek pronunciation: [eu̯.rɔ̌ː.pɛː]) was a Phoenician princess said to have been abducted by Zeus in the form of a bull. She was the mother of the Cretan king Minos.\n[…]\nSources differ in details regarding Europa's family, but agree that she is Phoenician, and from an Argive lineage that ultimately descended from the princess Io, the mythical nymph beloved of Zeus, who was transformed into a heifer. She is generally said to be the daughter of Agenor, the Phoenician King of Tyre. The Syracusan poet Moschus makes her mother Queen Telephassa (\"far-shining\"). Elsewhere, her mother is Argiope (\"silver-faced\").\n[…]\nRoman mythology adopted the tale of the Raptus, also known as \"The Abduction of Europa\" and \"The Seduction of Europa\", substituting the god Jupiter for Zeus.\n[…]\nThere were two competing myths relating how Europa came into the Hellenic world, but they agreed that she came to Crete (Kríti), where the sacred bull was paramount. In the more familiar telling she was seduced by the god Zeus in the form of a bull, who breathed from his mouth a saffron crocus and carried her away to Crete on his back—to be welcomed by Asterion.\n[…]\nIn the 8th century, ecclesiastical uses of \"Europa\" for the imperium of Charlemagne provide the source for the modern geographical term. The first use of the term Europenses, to describe peoples of the Christian, western portion of the continent, appeared in the Hispanic Latin Chronicle of 754, sometimes attributed to an author called Isidore Pacensis in reference to the Battle of Tours fought against Muslim forces.\n[…]\nWarburg Institute Iconographic Database (images of Europa)\n[…]\n\"Europa\" . New International Encyclopedia. 1905."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Europe",
        "situacao": "ok",
        "texto": "Europe is a continent located entirely in the Northern Hemisphere and mostly in the Eastern Hemisphere. It is bordered by the Arctic Ocean to the north, the Atlantic Ocean to the west, the Mediterranean Sea to the south, and Asia to the east. Europe shares the landmass of Eurasia with Asia, and of Afro-Eurasia with both Africa and Asia.\n[…]\nIn classical Greek mythology, Europa (Ancient Greek: Εὐρώπη, Eurṓpē) was a Phoenician princess. One view is that her name derives from the Ancient Greek elements εὐρύς (eurús) 'wide, broad', and ὤψ (ōps, gen. ὠπός, ōpós) 'eye, face, countenance', hence their composite Eurṓpē would mean 'wide-gazing' or 'broad of aspect'. Broad has been an epithet of Earth herself in the reconstructed Proto-Indo-European religion and the poetry devoted to it.\n[…]\nMost major world languages use words derived from Eurṓpē or Europa to refer to the continent. Chinese, for example, uses the word Ōuzhōu (歐洲/欧洲), which is an abbreviation of the transliterated name Ōuluóbā zhōu (歐羅巴洲) (zhōu means \"continent\"); a similar Chinese-derived term Ōshū (欧州) is also sometimes used in Japanese, such as in the Japanese name of the European Union, Ōshū Rengō (欧州連合), despite the katakana Yōroppa (ヨーロッパ) being more commonly used.\n[…]\nThe Flora Europaea adopted a boundary along the Terek and Kuban rivers, so southwards from the Kuma and the Manych, but still with the Caucasus entirely in Asia. However, most geographers in the Soviet Union favoured the boundary along the Caucasus crest, and this became the common convention in the later 20th century, although the Kuma–Manych boundary remained in use in some 20th-century maps.\n[…]\nLewis, Martin W.; Wigen, Kären (1997). The Myth of Continents: A Critique of Metageography. University of California Press. ISBN 978-0-520-20743-1."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Europa_%28mitologia%29",
        "situacao": "ok",
        "texto": "Europa (em grego:  Εὐρώπη), na mitologia grega, era filha do rei da Fenícia, Agenor, e irmã de Cadmo. Foi raptada por Zeus que se disfarçou de touro para que sua ciumenta mulher, Hera, não percebesse. Ele levou Europa para a ilha Creta, o que levou Cadmo a procurá-la e, na jornada, fundar a cidade de Tebas. Em Creta, Europa teve três filhos: Minos, Radamanto e Sarpedão.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Ícaro",
      "descricao": "Filho de Dédalo que fugiu de Creta voando com asas artificiais e caiu no mar."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Por que Ícaro caiu no mar quando voava com as asas que o pai, Dédalo, construiu para a fuga dos dois?",
    "resposta": "O Sol derreteu a cera",
    "fonte": [
      "https://en.wikipedia.org/wiki/Icarus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Icarus",
        "situacao": "ok",
        "texto": "In Greek mythology, Icarus ( ; Ancient Greek: Ἴκαρος, romanized: Íkaros, pronounced [ǐːkaros]) was the son of the master craftsman Daedalus, the architect of the labyrinth of Crete, and his wife Naucrate. After Theseus, king of Athens and enemy of King Minos, escaped from the labyrinth, Minos suspected that Icarus and Daedalus had revealed the labyrinth's secrets and thus imprisoned the two, eithe\n[…]\nIcarus and Daedalus escaped using wings Daedalus constructed from birds' molted feathers, threads from blankets, the leather straps from their sandals, and beeswax. Before escaping, Daedalus warned Icarus not to fly too low or the water would soak the feathers and not to fly too close to the Sun or the heat would melt the wax. Icarus ignored Daedalus' instructions not to fly too close to the Sun, causing the beeswax in his wings to melt.\n[…]\nIn the psychiatric mind, features of disease were perceived in the shape of the pendulous emotional ecstatic-high and depressive-low of bipolar disorder. Henry Murray having proposed the term Icarus complex, apparently found symptoms particularly in mania where a person is fond of heights, fascinated by both fire and water, narcissistic and observed with fantastical or far-fetched imaginary cognition.\n[…]\nSeth Godin's 2012 The Icarus Deception, points to the historical change in how Western culture both propagated and interpreted the Icarus myth arguing that \"We tend to forget that Icarus was also warned not to fly too low, because seawater would ruin the lift in his wings. Flying too low is even more dangerous than flying too high, because it feels deceptively safe.\"\n[…]\nBladud, a legendary king of the Britons, purported to have met his death when his constructed wings failed\n[…]\nEtana, a sort of \"Babylonian Icarus\"\n[…]\nKid Icarus, a Nintendo video game series based on the Icarus myths\n[…]\nThe Warburg Institute Iconographic Database (images of Daedalus and Icarus)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/%C3%8Dcaro",
        "situacao": "ok",
        "texto": "Na mitologia grega, Ícaro ( [ˈɪkəɹəs] em grego clássico: Ἴκαρος; romaniz.: Íkaros, pronúncia [ǐːkaros] ) foi o filho do mestre artesão Dédalo, o arquiteto do labirinto de Creta . Depois que Teseu, rei de Atenas e inimigo de Minos, escapou do labirinto, o rei Minos suspeitou que Ícaro e Dédalo haviam revelado os segredos do labirinto e os aprisionaram - seja em uma grande torre com vista para o oce\n[…]\nÍcaro e Dédalo escaparam usando as asas que Dédalo construiu com penas, fios de cobertores, roupas e cera de abelha . Dédalo alertou Ícaro primeiro sobre a complacência e depois sobre a arrogância, instruindo-o a não voar nem muito baixo nem muito alto, para que a umidade do mar não obstruísse suas asas ou o calor do sol as derretesse. Ícaro ignorou as instruções de Dédalo para não voar muito perto do sol, fazendo com que a cera de abelha em suas asas derretesse.\n[…]\nDédalo fabricou dois pares de asas para ele e seu filho, feitas de penas de metal presas a uma moldura de couro com cera de abelha. Antes de tentar escapar da ilha, Dédalo alertou o filho para seguir sua rota de voo - não voar muito perto do sol ou muito perto do mar -, mas, dominado pela vertigem durante o voo, Ícaro desobedeceu ao pai e subiu mais alto no céu. O calor do sol derreteu a cera de abelha, fazendo com que as asas se quebrassem enquanto ele voava.\n[…]\nDe acordo com os escólios de Eurípides, Ícaro se tornou maior que Hélios, o próprio Sol, e o deus o puniu direcionando seus poderosos raios para ele, derretendo a cera de abelha. Depois, foi Hélio quem deu ao Mar Icário o nome de Ícaro.\n[…]\nOs escritores helenísticos fornecem variantes evemerizantes em que a fuga de Creta foi na verdade por barco, fornecido por Pasífae, para o qual Dédalo inventou as primeiras velas, para ultrapassar as galeras perseguidoras de Minos, que Ícaro caiu ao mar a caminho da Sicília e se afogou, e que Héracles ergueu um túmulo para ele.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Sísifo",
      "descricao": "Rei de Corinto da mitologia grega condenado a rolar eternamente uma pedra morro acima."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Na versão mais conhecida do mito, que ousadia fez Sísifo ser condenado a empurrar eternamente uma pedra morro acima?",
    "resposta": "Enganar a morte",
    "fonte": [
      "https://en.wikipedia.org/wiki/Sisyphus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sisyphus",
        "situacao": "ok",
        "texto": "In Greek mythology, Sisyphus or Sisyphos ( ; Ancient Greek: Σίσυφος, romanized: Sísyphos) is the founder and king of Ephyra (now known as Corinth). He reveals Zeus's abduction of Aegina to the river god Asopus, thereby incurring Zeus's wrath. His subsequent cheating of death earns him eternal punishment in the underworld, once he dies of old age.\n[…]\nSisyphus betrayed one of Zeus's secrets by revealing the whereabouts of the Asopid Aegina to her father, the river god Asopus, in return for creating an Eternal spring to flow on the Corinthian acropolis.\n[…]\nOvid, the Roman poet, makes reference to Sisyphus in the story of Orpheus and Eurydice. When Orpheus descends and confronts Hades and Persephone, he sings a song so that they will grant his wish to bring Eurydice back from the dead. After this song is sung, Ovid shows how moving it was by noting that Sisyphus, emotionally affected for just a moment, stops his eternal task and sits on his rock, the Latin wording being inque tuo sedisti, Sisyphe, saxo (\"and you sat, Sisyphus, on your rock\").\n[…]\nThe philosopher Richard Clyde Taylor uses the myth of Sisyphus as a representation of a life made meaningless because it consists of bare repetition.\n[…]\nWolfgang Mieder has collected cartoons that build on the image of Sisyphus, many of them editorial cartoons.\n[…]\nHollis Robbins, reading Ovid against Camus, proposes that the punishment was not a punishment but a recognition and making legible of Sisyphus's essential nature: his compulsion to push against the rules.\n[…]\nAbsurdism – philosophical theory that that states the universe is irrational and that people that try to find meaning are analogous to Sisyphus's punishment by Hades\n[…]\n\"Sisyphus\" . Encyclopædia Britannica (11th ed.). 1911.\n[…]\n\"Sisyphus\" . New International Encyclopedia. 1905."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/S%C3%ADsifo",
        "situacao": "ok",
        "texto": "Na mitologia grega, Sísifo (em grego:  Σίσυφος, transl.: Sísyphos), filho do rei Éolo, da Tessália, e Enarete, era considerado o mais astuto de todos os mortais.\n[…]\nNo entanto, o que ele não sabia era que a grande águia que carregara Egina era na verdade Zeus. Assim, ele despertou a raiva do rei do Olimpo, que enviou o deus da Morte, Tânato, para levá-lo ao submundo. Porém o esperto Sísifo conseguiu enganar o enviado de Zeus. Elogiou sua beleza e pediu-lhe para deixá-lo enfeitar seu pescoço com um colar. O colar, na verdade, não passava de uma coleira, com a qual Sísifo manteve a Morte aprisionada e conseguiu driblar seu destino.\n[…]\nDurante um tempo não morreu mais ninguém. Sísifo soube enganar a Morte, mas arrumou novas encrencas. Desta vez com Hades, o deus dos mortos, e com Ares, o deus da guerra, que precisava dos préstimos da Morte para consumar as batalhas.\n[…]\nTão logo teve conhecimento, Hades libertou Tânato e ordenou-lhe que trouxesse Sísifo imediatamente para as mansões da morte. Quando Sísifo se despediu de sua mulher, teve o cuidado de pedir secretamente que ela não enterrasse seu corpo.\n[…]\nJá no inferno, Sísifo reclamou com Hades da falta de respeito de sua esposa em não o enterrar. Então suplicou por mais um dia de prazo, para se vingar da mulher ingrata e cumprir os rituais fúnebres. Hades lhe concedeu o pedido. Sísifo então retomou seu corpo e fugiu com a esposa. Havia enganado a Morte pela segunda vez.\n[…]\nSísifo também seduziu Anticleia, filha de Autólico, que mais tarde se casou com o rei de Ítaca, Laerte; por este motivo, Odisseu é considerado, por alguns autores, como filho de Sísifo.\n[…]\nO mito de Sísifo, livro de Albert Camus",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Balder",
      "descricao": "Deus nórdico da luz e da beleza, filho de Odin e Frigg, morto por artimanha de Loki."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Quase tudo no mundo jurou não ferir o deus nórdico Balder, menos uma planta, que Loki usou para matá-lo. Que planta era essa?",
    "resposta": "Visco",
    "distratores": [
      "Azevinho",
      "Carvalho",
      "Teixo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Baldr"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Baldr",
        "situacao": "ok",
        "texto": "Baldr in Old Norse (later Balder in Mainland Nordic, Baldur in Insular Nordic), Bældæġ in Old English, Balder or Palter in Old High German, is a god in Germanic mythology. In Norse mythology, he is a son of the god Odin and the goddess Frigg, and has numerous brothers, such as Thor and Váli.\n[…]\nWhen Loki, the mischief-maker, heard of this, he made a magical spear from this plant (in some later versions, an arrow). He hurried to the place where the gods were indulging in their new pastime of hurling objects at Baldr, which would bounce off without harming him. Loki gave the spear to Baldr's brother, the blind god Höðr, who then inadvertently killed his brother with it (other versions suggest that Loki guided the arrow himself).\n[…]\nUpon Frigg's entreaties, delivered through the messenger Hermod, Hel promised to release Baldr from the underworld if all objects alive and dead would weep for him. All did, except a giantess, Þökk (often presumed to be the god Loki in disguise), who refused to mourn the slain god. Thus Baldr had to remain in the underworld, not to emerge until after Ragnarök, when he and his brother Höðr would be reconciled and rule the new earth together with Thor's sons.\n[…]\nWriting during the end of the 12th century, the Danish historian Saxo Grammaticus tells the story of Baldr (recorded as Balderus) in a form that professes to be historical. According to him, Balderus and Høtherus were rival suitors for the hand of Nanna, daughter of Gewar, King of Norway. Balderus was a demigod and common steel could not wound his sacred body. The two rivals encountered each other in a terrific battle.\n[…]\nIn Copenhagen, there is also a Baldersgade, or \"Balder's Street\". A street in downtown Reykjavík is called Baldursgata (Baldur's Street)."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Balder",
        "situacao": "ok",
        "texto": "Balder ou Baldur (em nórdico antigo: Balðr), também citado como Baeldaeg (n. 243) em algumas fontes históricas, é uma divindade da mitologia nórdica. É relacionado com a justiça e a sabedoria, e todos os deuses o louvam pela sua beleza. Segundo algumas fontes, este deus seria filho de Odin e Frigga, segundo outras seria apenas um \"protegido\" destes.\n[…]\nPorém, Loki se disfarça de mulher e tem uma conversa com Frigga, descobrindo que todos os seres, à exceção de uma pequena planta, o visco, prestaram juramento, pois Frigga a julgara pequena e inofensiva por esta ser ainda muito jovem.\n[…]\nAconteceu então uma festa, na qual todos os deuses se divertiam atirando toda sorte de coisas em Balder, que sempre se esquivava. Havia um comensal, porém, que não participava da brincadeira, Hoder (ou Hod), o irmão cego de Balder. Loki, disfarçado, pergunta a Hod por que ele também não participa da festa, e este responde que não sabia em que direção atirar. Hoder então aceita a sugestão de Loki, Hod atira uma flecha feita de um ramo de visco, atingindo Balder no coração, que cai morto.\n[…]\nNão obstante, esperava-se que Balder retornasse após uma grande catástrofe mundial (o Ragnarok) e governasse um mundo novo. A semelhança dessas expectativas pode ter ajudado na difusão inicial do cristianismo entre os nórdicos.\n[…]\nBaseado no deus nórdico, a Marvel criou o personagem Balder, O Bravo, que aparece pela primeira vez na 85° edição da série em quadrinhos Journey Into Mystery, em 1962. Nos quadrinhos, Balder, O Bravo, é um grande amigo de Thor e, assim como na mitologia, é o catalisador cuja morte desencadeará o início do Ragnarök. Para prevenir que isso aconteça, Odin lança vários feitiços que o tornam invulnerável (pelo menos dentro dos limites de Asgard).\n[…]\nMedia relacionados com Balder no Wikimedia Commons",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Orfeu",
      "descricao": "Músico e poeta da mitologia grega que desceu ao mundo dos mortos para resgatar Eurídice."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Por que Orfeu perdeu a amada Eurídice para sempre, quando os dois já estavam saindo do mundo dos mortos?",
    "resposta": "Olhou para trás",
    "fonte": [
      "https://en.wikipedia.org/wiki/Orpheus",
      "https://en.wikipedia.org/wiki/Eurydice"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Orpheus",
        "situacao": "ok",
        "texto": "In Greek mythology, Orpheus ( ; Ancient Greek: Ὀρφεύς, classical pronunciation: [or.pʰeú̯s]) was a Thracian bard, legendary musician and prophet. He was also a renowned poet and, according to legend, travelled with Jason and the Argonauts in search of the Golden Fleece, and descended into the underworld to recover his lost wife, Eurydice.\n[…]\nThe most famous story in which Orpheus figures is that of his wife Eurydice (sometimes referred to as Euridice and also known as Argiope). While walking among her people, the Cicones, in tall grass at her wedding, Eurydice was set upon by a satyr. In her efforts to escape the satyr, Eurydice fell into a nest of vipers and suffered a fatal bite on her heel. Her body was discovered by Orpheus who, overcome with grief, played such sad and mournful songs that all the nymphs and gods wept.\n[…]\nOvid recounts that Orpheus\n[…]\nThe Orpheus motif has permeated Western culture and has been used as a theme in all art forms. Early examples include the Breton lai Sir Orfeo from the early 13th century and musical interpretations like Jacopo Peri's Euridice (1600, though titled with his wife's name, the libretto is based entirely upon books X and XI of Ovid's Metamorphoses and therefore Orpheus' viewpoint is predominant).\n[…]\nVinicius de Moraes’s play Orfeu da Conceição (1956), later adapted by Marcel Camus in the 1959 film Black Orpheus, tells the story in the modern context of a favela in Rio de Janeiro during Carnaval. Jean Cocteau's Orphic Trilogy – The Blood of a Poet (1930), Orpheus (1950) and Testament of Orpheus (1959) – was filmed over thirty years, and is based in many ways on the story. Philip Glass adapted the second film into the chamber opera Orphée (1991), part of an homage triptych to Cocteau.\n[…]\nGreek Mythology Link, Orpheus\n[…]\nThe Warburg Institute Iconographic Database (images of Orpheus)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Eurydice",
        "situacao": "ok",
        "texto": "Eurydice ( ; Ancient Greek: Εὐρυδίκη 'wide justice', classical pronunciation: [eu̯.ry.dí.kɛː]) was a character in Greek mythology and the wife of Orpheus, whom Orpheus tried to bring back from the dead with his enchanting music.\n[…]\n\"Orpheus. Eurydice. Hermes.\" (1904), a poem retelling the journey from the underworld by Rainer Maria Rilke\n[…]\nOrfeu Negro (1959), an adaptation of the classic myth filmed in Brazil by Marcel Camus\n[…]\nEuridice (1600), an opera by Jacopo Peri, the first genuine opera whose music survives to this day\n[…]\nOrfeo ed Euridice, an opera by Christoph Willibald Gluck\n[…]\nLe Retour d’Euridice aux enfers (1717) by Charles Piroye\n[…]\nOrfeo ed Euridice (1996), a new production of Gluck's opera by choreographer Mark Morris and the Handel and Haydn Society conducted by Christopher Hogwood.\n[…]\nOrpheus and Eurydice: A Myth Underground  (2011), a theatre production written by Molly Davies with music by James Johnston, Nick Cave and the Bad Seeds for the National Youth Theatre at the Old Vic Tunnels, directed by James Dacre\n[…]\nHadestown (2010), an ensemble album by Anaïs Mitchell, featuring Mitchell as Eurydice, Justin Vernon as Orpheus and Ani DiFranco among others, retelling the myth as a 'folk opera' in a post-apocalyptic Depression era America. The album inspired a Broadway musical of the same name, which opened in 2019 and went on to win 8 Tony awards. Featuring Eva Noblezada as Eurydice and Reeve Carney as Orpheus\n[…]\nIn Hades, a rogue-like game developed by Supergiant Games, Eurydice is a character who resides in Asphodel. Her appearance is that of an oak nymph, and she has an afro composed of tree branches. The player, Zagreus, is given the option of reuniting Eurydice and Orpheus after meeting them both."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Orfeu",
        "situacao": "ok",
        "texto": "Orfeu (em grego:  Oρφεύς, transl.: Orphéus, pronúncia clássica: [or.pʰeú̯s]) é um personagem da mitologia grega, conhecido por seus incríveis talentos musicais com a lira e por sua tentativa de resgatar sua amada Eurídice do submundo. É uma das figuras mais significativas da cultura ocidental, retratada em inúmeras obras artísticas e literárias como um arquétipo da inspiração artística.\n[…]\nSeu corpo foi descoberto por Orfeu que, subjugado pela dor, tocou canções tão tristes e lamentosas que todas as ninfas e deuses choraram. Seguindo o conselho deles, Orfeu viajou para o submundo. Sua música suavizou os corações de Hades e Perséfone, que concordaram em permitir que Eurídice voltasse com ele para a terra com uma condição: ele deveria andar na frente dela e não olhar para trás até que ambos tivessem alcançado o mundo superior.\n[…]\nO mitema de não olhar para trás, uma precaução essencial na invocação de Jasão da ctônica Brimo Hécate sob a orientação de Medeia, é refletida na história bíblica da esposa de Ló quando escapa de Sodoma. Mais diretamente, a história de Orfeu é semelhante aos antigos contos gregos de Perséfone capturada por Hades e histórias semelhantes de Adônis cativo no submundo.\n[…]\nA lira de Orfeu foi carregada para o céu pelas Musas e colocada entre as estrelas. As Musas também recolheram os fragmentos de seu corpo e os enterraram em Leibetra abaixo do Monte Olimpo, onde os rouxinóis cantavam sobre seu túmulo. Depois que o rio Sis inundou Leibetra, os macedônios levaram seus ossos para Dion. A alma de Orfeu voltou para o mundo subterrâneo, para os campos dos Abençoados, onde ele finalmente se reuniu com sua amada Eurídice.\n[…]\nPor causa da difusão do mito de Orfeu, muitas interpretações estão em diálogo com interpretações anteriores também: a ópera-dança Orpheus und Euridike de Pina Bausch exibe coreografia original ambientada em Orfeo ed Euridice de Gluck .",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Castor e Pólux",
      "descricao": "Irmãos gêmeos da mitologia grega, filhos de Leda, conhecidos como Dióscuros."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que constelação do zodíaco representa os irmãos Castor e Pólux, filhos de Leda?",
    "resposta": "Gêmeos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Castor_and_Pollux",
      "https://en.wikipedia.org/wiki/Gemini_(constellation)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Castor_and_Pollux",
        "situacao": "ok",
        "texto": "Castor and Pollux (or Polydeuces) are twin half-brothers in Greek and Roman mythology, known together as the Dioscuri or Dioskouroi.\n[…]\nThere is much contradictory information regarding the parentage of the Dioscuri. In the Homeric Odyssey, they are the sons of Tyndareus alone, but they were sons of Zeus in the Hesiodic Catalogue of Women. The conventional account (attested first in Pindar's Nemean Odes) combined these paternities so that only Pollux was fathered by Zeus, while Leda and her husband Tyndareus conceived Castor. This explains why they were granted an alternative immortality.\n[…]\nReturning to the dying Castor, Pollux was given the choice by Zeus of spending all his time on Mount Olympus or giving half his immortality to his mortal brother. He opted for the latter, enabling the twins to alternate between Olympus and Hades. The brothers became the two brightest stars in the constellation Gemini (\"the twins\"): Castor (Alpha Geminorum) and Pollux (Beta Geminorum).\n[…]\nCastor and Pollux are also represented in the Circus Maximus by the use of eggs as lap counters.\n[…]\nThe New Testament scholar Dennis MacDonald identifies Castor and Pollux as models for James son of Zebedee and his brother John in the Gospel of Mark. MacDonald cites the origin of this identification to 1913 when J. Rendel Harris published his work Boanerges, a Greek version probably of an Aramaic name meaning \"Sons of Thunder\", thunder being associated with Zeus, father of Pollux, in what MacDonald calls a form of early Christian Dioscurism.\n[…]\nThe Warburg Institute Iconographic Database (images of Castor and Pollux—the Dioscuri)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Gemini_(constellation)",
        "situacao": "ok",
        "texto": "Gemini is one of the constellations of the zodiac and is located in the northern celestial hemisphere. It was one of the 48 constellations described by the 2nd-century AD astronomer Ptolemy, and is one of the 88 modern constellations. Its name is Latin for twins, and it is associated with the twins Castor and Pollux in Greek mythology. Its old astronomical symbol is  (♊︎).\n[…]\nIn doing so, an imaginary line that is relatively close to the ecliptic is drawn, a line which intersects Gemini roughly at the midpoint of the constellation, just below Castor and Pollux.\n[…]\nIn Greek mythology, Gemini was associated with the myth of Castor and Pollux, the children of Leda and Argonauts both. Pollux was the son of Zeus, who seduced Leda, while Castor was the son of Tyndareus, king of Sparta and Leda's husband. Castor and Pollux were also mythologically associated with St. Elmo's fire in their role as the protectors of sailors.\n[…]\nGemini is dominated by Castor and Pollux, two bright stars that appear relatively very closely together forming an o shape, encouraging the mythological link between the constellation and twinship. The twin above and to the right (as seen from the Northern Hemisphere) is Castor, whose brightest star is α Gem; it is a second-magnitude star and represents Castor's head.\n[…]\nγ Gem is of the second magnitude, while δ and ξ Gem are of the third magnitude. Castor's torso is represented by the star τ Gem, Castor's left hand by ι Gem (which he shares with Pollux), Castor's right hand by θ Gem; all three of these stars are of the fourth magnitude. Castor's pelvis is represented by the star ε Gem, Castor's left foot by ν Gem, and Castor's right foot by μ Gem and η Gem; ε, μ, and η Gem are of the third magnitude. The brightest star in this constellation is Pollux.\n[…]\nThe Deep Photographic Guide to the Constellations: Gemini\n[…]\nWikiSky: Gemini constellation"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Castor_e_P%C3%B3lux",
        "situacao": "ok",
        "texto": "Castor (em latim: Castōr; em grego:  Κάστωρ, Kastōr, lit. \"castor\") e Pólux (em latim: Pollūx) ou Polideuces (em grego: Πολυδεύκης, Poludeukēs, \"vinho muito doce\") são dois irmãos gêmeos da mitologia grega e romana, filhos de Leda com Tíndaro e Zeus, respectivamente, irmãos de Helena de Troia e Clitemnestra, e meio-irmãos de Timandra, Febe, Héracles e Filónoe.\n[…]\nEram conhecidos coletivamente em grego como Dióscuros (em grego: Διόσκουροι, Dioskouroi, \"filhos de Zeus\"; em latim: Dioscūrī) e em latim como os Gêmeos (Gemini) ou Castores. Por vezes também são referidos como Tindáridas (em grego: Τυνδαρίδαι, Tundaridai; em latim: Tyndaridae), uma referência ao pai de Castor e pai adotivo de Pólux. Em algumas versões, Pólux era mortal, mas sendo filho de Zeus, recebeu o dom da imortalidade.\n[…]\nNo mito, os gêmeos partilham a mesma mãe, porém têm pais diferentes — o que significa que Pólux, por ser filho de Zeus, era imortal, enquanto Castor não o era. Com a morte deste, Pólux pediu a seu pai que deixasse seu irmão partilhar da mesma imortalidade, e assim teriam sido transformados na constelação de Gêmeos.\n[…]\nExiste outra versão na qual Zeus transforma Castor e Pólux na constelação de Gêmeos.\n[…]\nA grande batalha que determinaria os seus destinos aconteceu contra dois outros irmãos gêmeos: Idas e Linceu, herdeiros do reino da Messênia e noivos de Hilária e Febe. Os Dióscuros se apaixonaram perdidamente pelas duas jovens e tentam raptá-las, enfrentando assim a fúria dos messênios. No combate entre as duas duplas, Idas desfere um golpe de lança fatal em Castor, que morre.\n[…]\nPara celebrar tamanha prova de amor fraterno, Zeus catasterizou os Dióscuros na constelação de Gêmeos, onde não poderiam ser separados nem pela morte.\n[…]\nGêmeos (astrologia)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Eros",
      "descricao": "Deus grego do amor e do desejo."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que deus romano, sempre com arco e flechas, corresponde ao grego Eros?",
    "resposta": "Cupido",
    "fonte": [
      "https://en.wikipedia.org/wiki/Eros",
      "https://en.wikipedia.org/wiki/Cupid"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Eros",
        "situacao": "ok",
        "texto": "Eros (UK: , US:  ; Ancient Greek: Ἔρως, lit. 'Love, Desire') is the Greek god of love and sex. The Romans referred to him as Cupid or Amor. In the earliest account, he is a primordial god, while in later accounts he is the child of Aphrodite.\n[…]\nSappho writes of Artemis that \"limb-loosening Eros never goes near her.\"\n[…]\nTheocritus, coming a bit later during the fourth century BC, expanded the anecdote a little in his Idylls (Idyll XIX). Little Eros is stung by bees when he attempts to steal honey from their beehive. The bees pierce all of his fingers. He runs to his mother crying, and muses how creatures this small and cause pain so big. Aphrodite smiles and compares him to the bees, as he too is small, and causes pain much greater than his size.\n[…]\nPontianus of Nicomedia, a character in Deipnosophistae by Athenaeus, asserts that Zeno of Citium thought that Eros was the god of friendship and liberty.\n[…]\nErxias (Ἐρξίας) wrote that the Samians consecrated a gymnasium to Eros. The festival instituted in his honour was called the Eleutheria (Ἐλευθέρια), meaning \"liberty\".\n[…]\nThe Lacedaemonians offered sacrifices to Eros before they went into battle, thinking that safety and victory depend on the friendship of those who stand side by side in the battle. In addition, the Cretans offered sacrifices to Eros in their line of battle.\n[…]\nEros (concept)\n[…]\n\"Eros.\" Cassells's Encyclopedia of Queer Myth, Symbol and Spirit Gay, Lesbian, Bisexual and Transgender Lore, 1997.\n[…]\nSmith, William; Dictionary of Greek and Roman Biography and Mythology, London (1873). \"Eros\"\n[…]\nMedia related to Eros at Wikimedia Commons\n[…]\nWarburg Institute Iconographic Database (ca 1940 images of Eros)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Cupid",
        "situacao": "ok",
        "texto": "In classical mythology, Cupid  (Latin: Cupīdō [kʊˈpiːdoː], meaning \"passionate desire\") is the god of desire, erotic love, attraction and affection. He is often portrayed as the son of the love goddess Venus and the god of war Mars. He is also known as Amor  (Latin: Amor, \"love\"). His Greek counterpart is Eros.\n[…]\nThe name Cupīdō ('passionate desire') is a derivative of Latin cupiō, cupĕre ('to desire'), itself from Proto-Italic *kup-i-, which may reflect *kup-ei- ('to desire'; cf. Umbrian cupras, South Picene kuprí). The latter ultimately stems from the Proto-Indo-European verbal stem *kup-(e)i- ('to tremble, desire'; cf. Old Irish accobor 'desire', Sanskrit prá-kupita- 'trembling, quaking', Old Church Slavonic kypĕti 'to simmer, boil').\n[…]\nAs a winged figure, Cupido shared some characteristics with the goddess Victoria. On coinage issued by Sulla the dictator, Cupid bears the palm branch, the most common attribute of Victory. \"Desire\" in Roman culture was often attached to power as well as to erotic attraction. Roman historians criticize cupido gloriae, \"desire for glory\", and cupido imperii, \"desire for ruling power\".\n[…]\nIn Latin philosophical discourse, cupido is the equivalent of Greek pothos, a focus of reflections on the meaning and burden of desire. In depicting the \"pious love\" (amor pius) of Nisus and Euryalus in the Aeneid, Vergil has Nisus wonder:Is it the gods who put passion in men's mind, Euryalus, or does each person's fierce desire (cupido) become his own God?\n[…]\nIn Lucretius' physics of sex, cupido can represent human lust and an animal instinct to mate, but also the impulse of atoms to bond and form matter. An association of sex and violence is found in the erotic fascination for gladiators, who often had sexualized names such as Cupido."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Eros",
        "situacao": "ok",
        "texto": "Eros (em grego clássico: Ἔρως; romaniz.: Érōs; 'Amor, Desejo') é o deus grego do amor e do sexo. Os romanos se referiam a ele como Cupido ou Amor. Nos primeiros relatos, ele é um deus primordial, enquanto em relatos posteriores ele é filho de Afrodite.\n[…]\nA história de Eros e Psiquê tem uma longa tradição como conto popular do antigo mundo greco-romano, muito antes de ser incorporada à literatura no romance latino de Apuleio, O Asno de Ouro. O romance em si é escrito em um estilo romano picaresco, mas Psiquê mantém seu nome grego, embora Eros e Afrodite sejam chamados por seus nomes latinos (Cupido e Vênus). Além disso, Cupido é retratado como um jovem adulto, em vez de uma criança gorda e alada (putto amorino).\n[…]\nEm outra ocasião, quando Eros assumiu sua aparência infantil e tentou dobrar seu arco, o deus Apolo, que também era um deus arqueiro, zombou dele, dizendo que ele deveria deixar as armas para os deuses mais velhos, e se gabou de ter matado Píton. Eros ficou furioso e imediatamente atingiu Apolo com uma flecha de amor, fazendo-o apaixonar-se por Dafne, uma ninfa virgem das florestas.\n[…]\nEros é imaginado como um belo jovem que carrega um arco e flechas poderosas, que usa para fazer qualquer um se apaixonar perdidamente. Ovídio, um autor romano, discorre sobre o arsenal de Eros e especifica que ele carrega dois tipos de flechas; a primeira são suas flechas de ouro, que induzem um poderoso sentimento de amor e afeição no alvo. O segundo tipo é feito de chumbo e tem o efeito oposto: torna as pessoas avessas ao amor e enche seus corações de ódio.\n[…]\nPonciano de Nicomédia, personagem de Deipnosophistae de Ateneu, afirma que Zenão de Cítio pensava que Eros era o deus da amizade e da liberdade.\n[…]\nEros (conceito)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Hermes",
      "descricao": "Deus grego mensageiro do Olimpo, protetor dos viajantes, dos comerciantes e dos ladrões."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Além de mensageiro, o grego Hermes tinha uma função em comum com o egípcio Anúbis. Que função era essa?",
    "resposta": "Guiar as almas dos mortos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Psychopomp",
      "https://en.wikipedia.org/wiki/Hermes"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Psychopomp",
        "situacao": "ok",
        "texto": "Psychopomps (from the Greek word ψυχοπομπός, psychopompós, literally meaning the 'guide of souls') are creatures, spirits, angels, demons, or deities in many religions whose responsibility is to escort newly deceased souls from Earth to the afterlife.\n[…]\nClassical examples of a psychopomp are the ancient Egyptian god Anubis, the deity Pushan in Hinduism, the Greek ferryman Charon, the goddess Hecate, and god Hermes, the Roman god Mercury, the Norse Valkyries, the Aztec Xolotl, the Slavic goddess Morana, and the Etruscan Vanth."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Hermes",
        "situacao": "ok",
        "texto": "Hermes (; Ancient Greek: Ἑρμῆς) is an Olympian deity in ancient Greek religion and mythology considered the herald of the gods. He is also widely considered the protector of human heralds, travelers, thieves, merchants, and orators. He is able to move quickly and freely between the worlds of the mortal and the divine aided by his winged sandals. Hermes plays the role of the psychopomp or \"soul gui\n[…]\nIn Roman mythology and religion many of Hermes's characteristics belong to Mercury, a name derived from the Latin merx, meaning \"merchandise\", and the origin of the words \"merchant\" and \"commerce.\"\n[…]\nThe Romans identified the Germanic god Odin with Mercury, and there is evidence that Germanic peoples who had contact with Roman culture also accepted this identification. Odin and Mercury/Hermes share several attributes in common. For example, both are depicted carrying a staff and wearing a wide-brimmed hat, and both are travelers or wanderers.\n[…]\nA further Roman Imperial-era syncretism came in the form of Hermanubis, the result of the identification of Hermes with the Egyptian god of the dead, Anubis. Hermes and Anubis were both psychopomps the primary attribute leading to their conflation as the same god. Hermanubis depicted with a human body and a jackal head, holding the caduceus. In addition to his function of guiding souls to the afterlife, Hermanubis represented the Egyptian priesthood the investigation of truth.\n[…]\nTradition holds that his first temple was built by Lycaon. From there, the Hermes cult would have been taken to Athens, from which it radiated to the whole of Greece. In the Roman period, additional temples to Hermes (Mercury) were constructed across the Empire, including several in modern-day Tunisia. Mercury's temple in Rome was situated in the Circus Maximus, between the Aventine and Palatine hills, and was built in 495 BC.\n[…]\nMedia related to Hermes at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Psicopompo",
        "situacao": "ok",
        "texto": "Psicopompo (da palavra grega ψυχοπομπός, psychopompós, que significa literalmente o 'guia das almas') são criaturas, espíritos, anjos ou divindades em muitas religiões cuja responsabilidade é escoltar as almas recém-falecidas da Terra para a vida após a morte. Seu papel não é julgar o falecido, mas simplesmente guiá-lo.\n[…]\nDe sua origem grega, a palavra psychopompós, junção de psyche (alma) e pompós (guia), designa um ente cuja função é guiar ou conduzir a percepção de um ser humano entre dois ou mais eventos significantes. Guia interior, o psicopompo pode ser de natureza humana, (Ariadne), animal (coelho de Alice no País das Maravilhas) ou espiritual (Hermes, Daimon).\n[…]\nSegundo o Dicionário Crítico de Análise Junguiana: \"A figura que guia a alma em ocasiões de iniciação e transição: uma função tradicionalmente atribuída a Hermes no mito grego, pois ele, além de mensageiro dos deuses, era o deus que acompanhava as almas dos mortos, sendo capaz de transitar entre as polaridades (não somente a morte e a vida, mas também a  noite e o dia, o céu e a terra)\".\n[…]\nExemplos clássicos de psicopompo são o antigo deus egípcio Anúbis, a divindade Yama no hinduísmo, o barqueiro grego Caronte  e o deus Hermes, o deus romano Mercúrio, as Valquírias nórdicas, o Xolotl asteca , a Morana eslava e o Vanto etrusco.\n[…]\nTanto na série dramática de TV da BBC Life on Mars quanto em Ashes to Ashes, o personagem de DCI Gene Hunt é um psicopompo para policiais mortos e moribundos. Isso não é revelado até o episódio final da última série de Ashes to Ashes.\n[…]\nTanto na série de quadrinhos quanto na série de filmes de 1994 The Crow, vários corvos são descritos como psicopompos que carregam as almas dos mortos para a vida após a morte e os guiam de volta ao mundo mortal para se vingar das pessoas que os mataram.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Hefesto",
      "descricao": "Deus grego do fogo, da forja e dos metais, ferreiro dos deuses."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que deusa era casada com Hefesto, o deus ferreiro manco, e o traía com Ares, o deus da guerra?",
    "resposta": "Afrodite",
    "fonte": [
      "https://en.wikipedia.org/wiki/Hephaestus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hephaestus",
        "situacao": "ok",
        "texto": "Hephaestus (UK:  hih-FEE-stəs, US:  hih-FES-təs; eight spellings; Ancient Greek: Ἥφαιστος, romanized: Hḗphaistos) is the Greek god of artisans, blacksmiths, carpenters, craftsmen, fire, metallurgy, metalworking, sculpture, and volcanoes. In Greek mythology, Hephaestus was the son of Hera, either on her own or by her husband Zeus.\n[…]\nThe Thebans told that the union of Ares and Aphrodite produced Harmonia, but that of the union of Hephaestus with Aphrodite, there was usually no issue. Because Harmonia was conceived during Aphrodite's marriage to Hephaestus, for revenge, on Harmonia's wedding day to Cadmus, Hephaestus gifted her with a finely worked but cursed necklace that brought immense suffering to her descendants, culminating in the story of Oedipus.\n[…]\nThe author of Octavia (traditionally attributed to Seneca, but now agreed to not be his) writes that \"[we] delude ourselves that [Eros] was born from Venus and sprung from the loins of Vulcan\", implying the notion that Eros/Cupid was the son of Vulcan/Hephaestus was a decently common one in late antiquity.\n[…]\nNonnus also seemingly presents Eros as the son of Aphrodite and Hephaestus, but it has been suggested that the use of πολυφράδμων (a word that can mean both 'wise' and 'cunning') to describe Aphrodite and the emphasis given in Hephaestus fearing that Eros would be born crippled like him, only for the child to be able-bodied, strongly implies that Nonnus means for Ares to be understood as the real father, while Aphrodite passed her son as Hephaestus'.\n[…]\nThe protein hephaestin has a role in oxidising iron absorbed by intestinal cells to facilitate its transport.\n[…]\nHephaestus in popular culture\n[…]\nGreek Mythology Link, Hephaestus summary of the myths of Hephaestus\n[…]\nThe Warburg Institute Iconographic Database (images of Hephaestus)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hefesto",
        "situacao": "ok",
        "texto": "Hefesto (em grego:  Ἥφαιστος , transl.: Hēphaistos) é um deus da mitologia grega, cujo equivalente na mitologia romana era Vulcano. Filho de Zeus e Hera, rei e rainha dos deuses ou, de acordo com alguns relatos, apenas de Hera, era o deus da tecnologia, dos ferreiros, artesãos, escultores, metais, metalurgia, fogo, dos vulcões e do lume. Como outros ferreiros mitológicos, porém ao contrário dos ou\n[…]\nHefesto foi o único deus que retornou ao Olimpo depois de ter sido exilado.\n[…]\nHefesto, sendo o mais decidido dos deuses, recebeu de Zeus a mão de Afrodite para evitar que os outros deuses travassem disputas por ela. Afrodite, no entanto, não aceitou a ideia do casamento arranjado com o feio Hefesto, iniciou um relacionamento amoroso com Ares, deus da guerra, narrado no canto VIII da Odisseia. Hefesto ficou sabendo da traição de Afrodite por meio de Hélio, o Sol onividente, e planejou uma armadilha para eles durante uma de suas escapadas.\n[…]\nEnquanto Afrodite e Ares estavam juntos na cama, Hefesto envolveu-os com uma rede de cota de malha inquebrável, tão fina que era praticamente invisível, e levou-os ao monte Olimpo para humilhá-los diante dos outros deuses. Estes, no entanto, apenas riram diante da visão dos amantes nus, e Posídon conseguiu persuadir Hefesto a libertá-lo como troca de uma garantia de que Ares pagaria uma multa pelo adultério. Na Odisseia Hefesto afirma que devolveria Afrodite a seu pai e exigiria dele seu dote.\n[…]\nOs tebanos acreditavam que a união entre Ares e Afrodite teria resultado em Harmonia, tão bela quanto uma segunda Afrodite. Não se tem, no entanto, qualquer relato de algum fruto desta união, a menos que Virgílio tenha afirmado a sério que Eros seria seu filho. Autores posteriores explicam esta declaração afirmando que o deus do amor seria filho de Ares, mas entregue a Hefesto para que este o criasse como seu próprio filho.\n[…]\nAfrodite:",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Thor",
      "descricao": "Deus nórdico do trovão, filho de Odin, que empunha o martelo Mjölnir."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "A quinta-feira homenageia Thor em inglês, no nome thursday, e Júpiter em espanhol, no nome jueves. Que fenômeno os dois deuses controlavam?",
    "resposta": "O trovão",
    "fonte": [
      "https://en.wikipedia.org/wiki/Thursday",
      "https://en.wikipedia.org/wiki/Thor"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Thursday",
        "situacao": "ok",
        "texto": "Thursday is the day of the week between Wednesday and Friday. According to the ISO 8601 international standard, it is the fourth day of the week. In countries which adopt the \"Sunday-first\" convention, it is the fifth day of the week.\n[…]\nIn most Romance languages, the day is named after the Roman god Jupiter, who was the god of sky and thunder. In Latin, the day was known as Iovis Dies, \"Jupiter's Day\". In Latin, the genitive or possessive case of Jupiter was Iovis/Jovis and thus in most Romance languages it became the word for Thursday: Italian giovedì, Spanish jueves, French jeudi, Sardinian jòvia, Catalan dijous, Galician xoves and Romanian joi. This is also reflected in the p-Celtic Welsh dydd Iau.\n[…]\nThe astrological and astronomical sign of the planet Jupiter (♃ ) is sometimes used to represent Thursday.\n[…]\nGreek uses a number for this day:  Πέμπτη Pémpti \"fifth,\" as does Portuguese: quinta-feira \"fifth day,\" Hebrew: יום חמישי (Yom Khamishi – day fifth) often written 'יום ה (\"Yom Hey\" – 5th letter Hey day), and Arabic: يوم الخميس (\"Yaum al-Khamīs\" – fifth day). Rooted from Arabic, the Indonesian word for Thursday is \"Kamis\", similarly \"Khamis\" in Malaysian and \"Kemis\" in Javanese.\n[…]\nIn Catholic liturgy, Thursday is referred to in Latin as feria quinta. Portuguese, unlike other Romance languages, uses the word quinta-feira, meaning \"fifth day of liturgical celebration\", that comes from the Latin feria quinta used in religious texts where it was not allowed to consecrate days to pagan gods.\n[…]\nAdditionally, local elections are usually held on the first Thursday in May.\n[…]\nThursday is aligned by the planet Jupiter and the astrological signs of Pisces and Sagittarius."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Thor",
        "situacao": "ok",
        "texto": "Thor (from Old Norse: Þórr) is a prominent god in Germanic paganism. In Norse mythology, he is a hammer-wielding god associated with thunder, storms, strength, protection, fertility, and farmers. Besides Old Norse Þórr, the deity occurs in Old English as Thunor, in Old Frisian as Thuner, in Old Saxon as Thunar, and in Old High German as Donar, all ultimately stemming from the Proto-Germanic theony\n[…]\nThe English weekday name Thursday comes from Old English Þunresdæg, meaning 'day of Þunor', with influence from Old Norse Þórsdagr. The name is cognate with Old High German Donarestag. All of these terms derive from a Late Proto-Germanic weekday name along the lines of *Þunaresdagaz ('Day of *Þun(a)raz'), a calque of Latin Iovis dies ('Day of Jove'; compare modern Italian giovedì, French jeudi, Spanish jueves).\n[…]\nThe earliest records of the Germanic peoples were recorded by the Romans, and in these works Thor is frequently referred to—via a process known as interpretatio romana (where characteristics perceived to be similar by Romans result in identification of a non-Roman god as a Roman deity)—as either the Roman god Jupiter (also known as Jove) or the Greco-Roman god Hercules.\n[…]\nIn the 11th century, chronicler Adam of Bremen records in his Gesta Hammaburgensis Ecclesiae Pontificum that a statue of Thor, who Adam describes as \"mightiest\", sits in the Temple at Uppsala in the center of a triple throne (flanked by Woden and \"Fricco\") located in Gamla Uppsala, Sweden. Adam details that \"Thor, they reckon, rules the sky; he governs thunder and lightning, winds and storms, fine weather and fertility\" and that \"Thor, with his mace, looks like Jupiter\".\n[…]\nIn the fields of science and technology, Swedish chemist Jöns Jacob Berzelius (1779–1848) discovered a chemical element that he named after Thor – thorium. Thor is also the namesake of the PGM-17 Thor missile."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Quinta-feira",
        "situacao": "ok",
        "texto": "A quinta-feira ou quinta é um dia útil da semana considerado o quinto dia da semana, seguindo a quarta-feira e precedendo a sexta-feira.\n[…]\nPor ordenação de trabalho e lazer e pela normalização ISO, a quinta-feira é considerada o quarto dia da semana, sendo assim na maioria dos calendários em todo o mundo.\n[…]\nA palavra é originária do latim Quinta Feria, que significa \"quinta feira\", e de mesma acepção existe em galego (quinta feira), mirandês (quinta) e tétum (loron-kinta).Povos pagãos antigos reverenciavam seus deuses dedicando este dia ao astro Júpiter, o que originou outras denominações, em português antigo joves,[carece de fontes]? em espanhol diz-se jueves, no italiano giovedì e em francês jeudi, com os significados de \"Júpiter\" e \"dia de Júpiter\".\n[…]\nEm inglês diz-se Thursday, \"dia de Thor\" e em alemão Donnerstag, \"dia de Donner\".\n[…]\nPara a Igreja Católica, a quinta-feira é o dia de devoção ao Santíssimo Sacramento, em memória à Última Ceia de Jesus Cristo.\n[…]\nOs nomes dos dias da semana em português têm a sua origem na liturgia católica. Na maior parte das outras línguas românicas, a sua origem são nomes de deuses pagãos romanos aos quais os dias eram dedicados, neste caso a quinta-feira era dedicada a divindade romana Júpiter (este por sua vez inspirado no deus grego Zeus).\n[…]\nNo caso de muitas línguas germânicas, como o inglês, houve um processo de interpretação germânica do significado do termo em latim \"Iovis dies\" (\"dia de Júpiter\") que levou o deus germânico Thor (também chamado Donar) ser equiparado a Júpiter.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Ymir",
      "descricao": "Gigante primordial da mitologia nórdica, de cujo corpo os deuses fizeram o mundo."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Na mitologia nórdica, Odin e os irmãos criaram o mundo com o corpo do gigante Ymir. Que parte dele virou o céu?",
    "resposta": "O crânio",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ymir"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ymir",
        "situacao": "ok",
        "texto": "In Norse mythology, Ymir (), also called Aurgelmir, Brimir, or Bláinn, is the ancestor of all jötnar. Ymir is attested in the Poetic Edda, compiled in the 13th century from earlier traditional material, in the Prose Edda, written by Snorri Sturluson in the 13th century, and in the poetry of skalds.\n[…]\nAs the verbal battle continues, a few more exchanges directly refer to or may allude to Ymir. Odin asks what ancient jötun is the eldest of \"Ymir's kin\", and Vafþrúðnir responds that long, long ago it was Bergelmir, who was Þrúðgelmir's son and Aurgelmir's grandson. In the next stanza, Odin asks where Aurgelmir came from so long ago, to which Vafþrúðnir responds that venom dropped from Élivágar, and that these drops grew until they became a jötunn, and from this being descends the jötnar.\n[…]\nIn the poem Grímnismál, the god Odin (disguised as \"Grímnir\") imparts in the young Agnarr cosmological knowledge. In one stanza, Odin mentions Ymir as he recalls the fashioning of the world from his body:\n[…]\nLater in Skáldskaparmál poetic terms for the earth are provided, including \"Ymir's flesh\", followed by a section for poetic terms for \"sea\", which provides a portion of a work by the skald Ormr Barreyjarskáld where the sea is referred to as \"Ymir's blood\". Both the names Aurgelmir and Ymir appear in a list of jötnar in the Nafnaþulur section of Skáldskaparmál.\n[…]\nConsidering how Ymir (Aurgelmir) was said to have taken shape, both Snorri and the Vafþrúðnismál, we may think that Snorri followed the better version of Vǫluspá\" and, regarding Snorri's account of the cosmogenesis in general, that \"from these sketches of the poetic sources from which he chiefly drew it is obvious that Snorri described several incidents which cannot be traced to them, at least in their extant forms\"."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/%C3%8Dmer",
        "situacao": "ok",
        "texto": "Imer, Ymir, Ymer ou Ímer, segundo a mitologia nórdica, foi a primeira criatura viva, criada diretamente do Ginungagap pelo calor de Muspelheim e pelo gelo de Niflheim, que se derreteu e as gotas deram origem ao gigante ancestral das criaturas do universo; que dormiu e, do seu suor nasceram todos os seres, inclusive demônios e duendes, chamados de tróis. Teve Thrudgelmir, Bolthorn, seus filhos Giga",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Quimera",
      "descricao": "Monstro da mitologia grega que cuspia fogo, morto pelo herói Belerofonte."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "A Quimera, monstro morto pelo herói Belerofonte, tinha a frente de leão, uma cabeça de cabra no meio e a cauda de que animal?",
    "resposta": "Serpente",
    "distratores": [
      "Escorpião",
      "Peixe",
      "Crocodilo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Chimera_(mythology)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Chimera_(mythology)",
        "situacao": "ok",
        "texto": "The Chimera, Chimaera, Chimæra, or Khimaira ( ky-MEER-ə, kih-, -⁠MAIR-; Ancient Greek: Χίμαιρα, romanized: Chímaira, lit. 'she-goat') was a monstrous fire-breathing hybrid creature in Greek mythology, said to be from Lycia, Asia Minor, and composed of different animal parts. Typically, it is depicted as a lion with a goat's head protruding from its back and a tail ending with a snake's head. Some \n[…]\nThe term \"chimera\" has come to describe any mythical or fictional creature with parts taken from various animals.\n[…]\nHomer described the Chimera in the Iliad, saying that \"she was of divine stock not of men, in the fore part a lion, in the hinder a serpent, and in the midst a goat, breathing forth in terrible wise the might of blazing fire.\" Hesiod and Apollodorus gave similar descriptions: a three-headed creature with a lion in front, a fire-breathing goat in the middle, and a serpent in the rear.\n[…]\nAfter some early hesitation, the Corinthian type was fixed in the 670s BC; the variations in the pictorial representations suggest multiple origins to Marilyn Low Schmitt. The fascination with the monstrous devolved by the end of the seventh century into a decorative Chimera motif in Corinth, while the motif of Bellerophon on Pegasus took on a separate existence alone.\n[…]\nA separate Attic tradition, where the goats breathe fire and the animal's rear is serpentine, begins with the confidence that Marilyn Low Schmitt is convinced that there must be unrecognized or undiscovered local precursors. Two vase painters employed the motif so consistently they were given the pseudonyms the Bellerophon Painter and the Chimaera Painter.\n[…]\nIn the Indus Valley Civilisation, the Chimera is depicted in many seals. There are different kinds of Chimera composed of animals from the Indian subcontinent. This Chimera has been called the Harappan Chimera."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Quimera",
        "situacao": "ok",
        "texto": "Quimera (em grego:  Χίμαιρα, transl.: Chímaira) é uma figura mística caracterizada por uma aparência híbrida de dois ou mais animais e a capacidade de lançar fogo pelas narinas, sendo, portanto, uma fera ou besta mitológica.\n[…]\nOriunda da Anatólia e cujo tipo surgiu na Grécia durante o século VII a.C., sempre exerceu atração sobre o imaginário popular. De acordo com a versão mais difundida da lenda, a quimera era um monstruoso produto da união entre Equidna — metade mulher, metade serpente — e o gigantesco Tifão.\n[…]\nOutras lendas a fazem filha da hidra de Lerna e do leão da Nemeia, mortos por Hércules. Criada pelo rei da Cária, mais tarde assolaria este reino e o de Lícia bafejando fogo incessantemente, até que o herói Belerofonte, montado no cavalo alado Pégaso, conseguiu matá-la.\n[…]\nCom o passar do tempo, chamou-se genericamente quimera a todo monstro fantástico empregado na decoração arquitetônica.\n[…]\nNa Alquimia, é um ser artificial (assim como o homúnculo), criado a partir da fusão de um ser humano e animal.carece de fontes.\n[…]\nFigurativamente ou em linguagem popular mais ampla, o termo quimera alude a qualquer composição fantástica, absurda, monstruosa ou incoerente, constituída de elementos disparatados ou incongruentes, significando também utopia. A palavra quimera, por derivação de sentido, significa também o produto da imaginação, um sonho ou fantasia (por exemplo: A Quimera de Ouro).\n[…]\nCabeça de leão, cauda de dragão e corpo de cabra.\n[…]\nLança fogo pelas narinas e tem uma cauda de serpente e outra de leão.\n[…]\nApós a Idade Média, com a expansão da ideia do dragão, a quimera perdeu espaço. Visivelmente, claro nas Igrejas Católicas atualmente, com São Jorge matando um Dragão substituindo Belerofonte e a quimera.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Trimúrti",
      "descricao": "Tríade de deuses hindus formada por Brahma, Vishnu e Shiva."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "A trindade hindu, a Trimúrti, reúne Brahma, o criador, Vishnu, o preservador, e que deus destruidor?",
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
    "indice": 46,
    "ancora": {
      "nome": "Ulisses",
      "descricao": "Herói grego da Guerra de Troia e protagonista da Odisseia de Homero."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Somando a Guerra de Troia e a longa viagem de volta, quantos anos Ulisses passou longe de casa e da esposa, Penélope?",
    "resposta": "Vinte",
    "fonte": [
      "https://en.wikipedia.org/wiki/Odysseus",
      "https://en.wikipedia.org/wiki/Odyssey"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Odysseus",
        "situacao": "ok",
        "texto": "In Greek and Roman mythology, Odysseus ( , US also  ; Ancient Greek: Ὀδυσσεύς, Ὀδυσεύς, romanized: Odysseús, Odyseús, IPA: [o.dy(s̠).s̠ěu̯s̠]), also known by the Latin variant Ulysses (, UK also ; Latin: Ulysses, Ulixes), is a legendary Greek king of Ithaca and the hero of Homer's epic poem, the Odyssey. Odysseus also plays a key role in Homer's Iliad and other works in that same epic cycle.\n[…]\nWhen the contest of the bow begins, none of the suitors are able to string the bow. After all the suitors have given up, the disguised Odysseus asks to participate. Though the suitors refuse at first, Penelope intervenes and allows the \"stranger\" (the disguised Odysseus) to participate. Odysseus easily strings his bow and wins the contest.\n[…]\nwith Penelope: Poliporthes and Arcesilaus\n[…]\nReturn to Ithaca (1946) by Eyvind Johnson is a retelling of the events that adds a psychological study of the characters of Odysseus, Penelope and Telemachus. Thematically, it uses Odysseus's backstory and struggle as a metaphor for dealing with the aftermath of war (the novel being written immediately after the end of the Second World War).\n[…]\nVolodymyr Yermolenko, Ukrainian philosopher and essayist, wrote Ocean Catcher: The Story of Odysseus, Stary Lev, 2017, which is loose adaptation of the Odyssey, where after coming back home to Ithaca, where he cannot find either Penelope or Telemachus, he decides to have a reverse trip to Troy.\n[…]\nIn television series, he has been played by Bekim Fehmiu in Odissea (dal Poema di Omero) (1968), Armand Assante in The Odyssey (1997), Nigel Whitmey in Helen of Troy (2003), and by Joseph Mawle in Troy: Fall of a City (2018).\n[…]\nIn folkloristics, the story of Odysseus's journey back to his native Ithaca and wife Penelope corresponds to the tale type ATU 974, \"The Homecoming Husband\", of the international Aarne–Thompson–Uther Index for folktale classification.\n[…]\nOdysseus Unbound"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Odyssey",
        "situacao": "ok",
        "texto": "The Odyssey (, ODD-iss-ee; Ancient Greek: Ὀδύσσεια, romanized: Odýsseia [odyˈsːeːˌja]) is one of two major epics of ancient Greek literature attributed to Homer. It is one of the oldest surviving works of literature and remains popular with modern audiences. Like the Iliad, the Odyssey is divided into 24 books. It follows the heroic king of Ithaca, Odysseus, also known by the Latin variant Ulysses\n[…]\nAfter reaching Ithaca, Athena transforms Odysseus into a beggar so he can test the loyalty of his wife Penelope.\n[…]\nFor example, Telemachus wishes for vengeance and for Odysseus to be home, Penelope wishes for Odysseus's return, and the suitors wish for the death of Telemachus.\n[…]\nModern writers have revisited the Odyssey to highlight the poem's female characters. Canadian writer Margaret Atwood adapted parts of the Odyssey for her novella The Penelopiad (2005). The novella focuses on Penelope and the twelve female slaves hanged by Odysseus at the poem's ending, an image which haunted Atwood. Atwood's novella comments on the original text, wherein Odysseus's successful return to Ithaca entails the restoration of a patriarchal system.\n[…]\nThe Odyssey (1997) is a television miniseries directed by Andrei Konchalovsky and starring Armand Assante as Odysseus and Greta Scacchi as Penelope.\n[…]\nThe Return (2024) is a film based on Books 13–24, directed by Uberto Pasolini and starring Ralph Fiennes as Odysseus and Juliette Binoche as Penelope.\n[…]\nThe Odyssey (2026) is a film written and directed by Christopher Nolan, starring Matt Damon as Odysseus and Anne Hathaway as Penelope.\n[…]\nIl ritorno d'Ulisse in patria, first performed in 1640, is an opera by Claudio Monteverdi based on the second half of the Odyssey.\n[…]\nGabriel Fauré's opera Pénélope, likewise based on the latter portions of the Odyssey, was premiered in 1913.\n[…]\n\"Homer's Odyssey: A Commentary\" by Denton Jaques Snider on Project Gutenberg"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Odisseu",
        "situacao": "ok",
        "texto": "Odisseu (em grego:  Οδυσσεύς, transl.: Odysséus) ou Ulisses (em latim: Ulysses ou Ulixes) foi, na mitologia grega e na mitologia romana um personagem da Ilíada e da Odisseia, de Homero. É a personagem principal dessa última obra, e uma figura à parte na narrativa da Guerra de Troia. É um dos mais ardilosos guerreiros de toda a epopeia grega, mesmo depois da guerra, quando do seu longo retorno ao s\n[…]\nDa união com Penélope nasceu Telêmaco, seu querido filho, do qual teve de se afastar muito cedo para lutar ao lado de outros nobres gregos em Troia. Foi um dos elementos mais atuantes no cerco de Troia, no qual se destacou principalmente por sua prudência e astúcia.\n[…]\nDurante a Guerra de Troia, os gregos venceram muitas batalhas a conselho de Odisseu, sendo este mesmo um grande guerreiro, apesar de sua baixa estatura (algumas lendas diziam mesmo que era anão). Tentou convencer Aquiles a cessar sua ira contra Agamemnon, ao lado de Ájax, filho de Télamo e de Fênix, filho de Amintor, mas sem obter sucesso.\n[…]\nApós a derrota dos troianos, ele iniciou uma viagem de dez anos de volta para Ítaca onde a sua mulher o espera com uma fidelidade obstinada, apesar da demora. Essa viagem mereceu a criação por Homero do poema épico Odisseia, na qual são narradas as aventuras e desventuras de Odisseu e sua tripulação desde que deixam Troia, algumas causadas por eles e outras devido à intervenção dos deuses.\n[…]\nCom a ajuda de Zeus e de outros deuses, Odisseu chegou a casa sozinho para encontrar sua esposa Penélope, importunada por pretendentes. Disfarçado como mendigo, primeiro verificou se Penélope lhe era fiel e, em seguida, matou os pretendentes à sua sucessão que a perseguiam, limpando o palácio. Com isso, iniciou-se uma batalha final contra as famílias dos homens mortos, mas a paz foi restaurada por Atena.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Guerra de Troia",
      "descricao": "Guerra lendária entre gregos e troianos, narrada na Ilíada e em outros poemas."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Segundo a tradição grega, por quantos anos os gregos sitiaram Troia antes de entrar na cidade escondidos no cavalo de madeira?",
    "resposta": "Dez",
    "fonte": [
      "https://en.wikipedia.org/wiki/Trojan_War"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Trojan_War",
        "situacao": "ok",
        "texto": "The Trojan War was a legendary conflict in Greek mythology that took place around the thirteenth or early twelfth century BC. The war was waged by the Achaeans (Greeks) against the city of Troy after Paris of Troy took Helen from her husband Menelaus, king of Sparta. The war is one of the most important events in Greek mythology, and it has been narrated through many works of Greek literature, mos\n[…]\nFormerly under the Hittites, the Assuwa confederation defected after the battle of Kadesh between Egypt and the Hittites (c. 1274 BC). In 1230 BC Hittite king Tudhaliya IV (c. 1240–1210 BC) campaigned against this federation. Under Arnuwanda III (c. 1210–1205 BC) the Hittites were forced to abandon the lands they controlled on the coast of the Aegean. It is possible that the Trojan War was a conflict between the king of Ahhiyawa and the Assuwa confederation.\n[…]\nNowadays the interpretation followed by most scholars is that the Achaean leaders driven out of their lands by the turmoil at the end of the Mycenaean era preferred to claim descent from exiles of the Trojan War.\n[…]\nThe Trojan War has remained a popular subject since the classical period. Famous adaptations include Troädes by Euripides, Troilus and Criseyde by Geoffrey Chaucer, Troilus and Cressida by William Shakespeare, Iphigenia and Polyxena by Samuel Coster, Palamedes by Joost van den Vondel and Les Troyens by Hector Berlioz. Modern-day adaptions include Helen of Troy (1956), The Trojan Horse (1961), Troy (2004), The Song of Achilles (2011), and The Odyssey (2026).\n[…]\nThe Legend of the Trojan War. Archived from the original on 28 October 2007.\n[…]\nMortal Women of the Trojan War. Archived from the original on 19 December 2014.\n[…]\nThe Historicity of the Trojan War The location of Troy and possible connections with the city of Teuthrania. Archived from the original on 23 November 2011."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Guerra_de_Troia",
        "situacao": "ok",
        "texto": "Guerra de Troia foi um conflito lendário da mitologia grega que ocorreu por volta do século XIII ou início do século XII a.C. A guerra foi travada pelos aqueus (gregos) contra a cidade de Troia depois que Páris de Troia raptou Helena de seu marido Menelau, rei de Esparta. A guerra é um dos eventos mais importantes da mitologia grega e foi narrada em muitas obras da literatura grega, principalmente\n[…]\nOs antigos gregos acreditavam que Troia estava localizada perto dos Dardanelos e que a Guerra de Troia foi um evento histórico ocorrido nos séculos XII ou XIII a.C. Em meados do século XIX d.C., tanto a guerra quanto a cidade eram amplamente vistas como não históricas. Em 1868, o arqueólogo alemão Heinrich Schliemann conheceu Frank Calvert, que convenceu Schliemann de que Troia estava no que é hoje Hisarlık, na Turquia moderna.\n[…]\nFinalmente, a cidade foi tomada graças ao artifício concebido por Odisseu (Ulisses): fingindo terem desistido da guerra, os gregos embarcaram em seus navios, deixando na praia um enorme cavalo de madeira, que os troianos decidiram levar para o interior de sua cidade, como símbolo de sua vitória, apesar das advertências de Cassandra.\n[…]\nÀ noite, quando todos dormiam, os soldados gregos, que se escondiam dentro da estrutura oca de madeira do cavalo, saíram e abriram os portões para que todo o exército (cujos navios haviam retornado, secretamente, à praia) invadisse a cidade.\n[…]\nTanto os épicos homéricos quanto o Ciclo Épico têm origem na tradição oral. Mesmo após a composição da Ilíada, Odisseia e Épicos Cíclicos, os mitos da Guerra de Troia foram transmitidos oralmente em muitos gêneros de poesia e através de narrativas não poéticas. Eventos e detalhes da história que só são encontrados em autores posteriores podem ter sido transmitidos através da tradição oral e podem ser tão antigos quanto os poemas homéricos.\n[…]\nLa guerra di Troia — Itália, 1961\n[…]\nTroia — EUA, 2004",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Anúbis",
      "descricao": "Deus egípcio dos mortos, ligado à mumificação e à proteção dos túmulos."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "O deus egípcio Anúbis, protetor dos túmulos e ligado à mumificação, era retratado com cabeça de que animal?",
    "resposta": "Chacal",
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
        "texto": "Anúbis ([əˈnjuːbᵻs]; em grego clássico: Ἄνουβις) ou Anupo é, no panteão do Antigo Egito, o deus dos mortos e moribundos, que guiava e conduzia as almas ao mundo dos mortos. É representado com cabeça de chacal, embora os egiptólogos mais conservadores afirmem que não há como saber com certeza o animal que o representa.\n[…]\nÉ um local onde Anúbis exerce sua proteção sobre cadáveres, em processo de transformação durante a mumificação. O baú que representa um templo ou um naos e no qual Anúbis é freqüentemente retratado deitado é talvez uma representação do seh netjer.\n[…]\nAo longo XX século XX Século XX, muitos especialistas estimam que o animal de Anúbis é um ser híbrido, cão-lobo, lobo-chacal, chacal-cão, etc  Segundo George Hart, escritor e conferencista do Museu Britânico \"o cão Anubis é provavelmente um chacal[...] Mas outros cães, por exemplo o pária cor de ferrugem, podem ter servido como protótipo. Anubis talvez represente o epítome dos cães do deserto\".\n[…]\nA assimilação de Anubis ao chacal é baseada em um critério comportamental: este canino noturno é conhecido por assombrar cemitérios à noite, e mais particularmente em torno de sepulturas recém-cavadas, a fim de desenterrar e devorar cadáveres. Esse comportamento teria sido associado pelos antigos egípcios à morte e, por extensão, à mumificação e às cerimônias fúnebres.\n[…]\nOs antigos egípcios certamente não deixaram de notar esse comportamento em seus cães de caça ou nos caninos que conheciam, como o chacal dourado ( Canis aureus ), a raposa vermelha ( Vulpes vulpes ), o feneco ( Vulpes zerda ) ou o selvagem africano. Cão ( Lycaon pictus ). O deus Anúbis pode ter sido representado na forma canina por causa desse comportamento escavador, sendo o principal papel de uma divindade funerária esconder os restos mortais da vista dos vivos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Atena",
      "descricao": "Deusa grega da sabedoria, da estratégia na guerra e dos ofícios, padroeira de Atenas."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Que ave, até hoje usada como símbolo de sabedoria, acompanhava a deusa grega Atena?",
    "resposta": "Coruja",
    "fonte": [
      "https://en.wikipedia.org/wiki/Owl_of_Athena"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Owl_of_Athena",
        "situacao": "ok",
        "texto": "In Greek mythology, a little owl (Athene noctua) traditionally represents or accompanies Athena, the virgin goddess of wisdom, or Minerva, her syncretic incarnation in Roman mythology. Because of such association, the bird—often referred to as the \"owl of Athena\" or the \"owl of Minerva\"—has been used as a symbol of knowledge, wisdom, perspicacity and erudition throughout the  Western world.\n[…]\nThe owl of Athena even became the common obverse of the Athenian tetradrachms after 510 BC and according to Philochorus, the Athenian tetradrachm was known as glaux (γλαύξ, little owl) throughout the ancient world and \"owl\" in present-day numismatics.\n[…]\nThey were not, however, used exclusively by them to represent Athena and were even used for motivation during battles by other Greek cities, such as in the victory of Agathocles of Syracuse over the Carthaginians in 310 BC—in which owls flying through the ranks were interpreted as Athena's blessing—or in the Battle of Salamis, chronicled in Plutarch's biography of Themistocles.\n[…]\nThe association between the owl and the goddess continued through Minerva in Roman mythology, although the latter sometimes simply adopts it as a sacred or favorite bird. For example, in Ovid’s Metamorphoses, Corone the crow complains that her spot as the goddess' sacred bird is occupied by the owl, which in that particular story turns out to be Nyctimene, a cursed daughter of Epopeus, king of Lesbos.\n[…]\nIn affirmative contrast, the 19th-century German idealist philosopher Georg Wilhelm Friedrich Hegel famously noted that \"the owl of Minerva spreads its wings only with the falling of the dusk\"; philosophy comes to understand a historical condition just as it passes away. Philosophy appears only in the \"maturity of reality\", because it understands in hindsight.\n[…]\nThe owl of Minerva takes its flight only when the shades of night are gathering."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Coruja_de_Atena",
        "situacao": "ok",
        "texto": "Na mitologia grega, o mocho-galego (Athene noctua) tradicionalmente representa ou acompanha Atena, a deusa virgem da sabedoria, ou Minerva, sua encarnação sincrética na mitologia romana. Devido a esta associação, a ave muitas vezes referida como a \"coruja de Atena\" ou \"coruja de Minerva\" — tem sido utilizada como um símbolo do conhecimento, sabedoria, perspicácia e erudição em todo o mundo ocident\n[…]\nAs razões por trás da associação de Atena e da coruja perderam-se no tempo. Alguns mitógrafos, como David Kinsley e Martin P. Nilsson sugerem que ela possa descender da deusa do palácio minoico, associado com aves,  e Marija Gimbutas afirma que Atena originou-se como a deusa-serpente e pássaro na Europa Antiga.\n[…]\nPor outro lado, Cynthia Berger teoriza sobre o apelo de algumas características das corujas, tais como a sua capacidade de enxergar no escuro, utilizada como símbolo da sabedoria, enquanto outros, como William Geoffrey Arnott, propõe uma simples associação entre mitos fundadores de Atenas e o número significativo de mocho-galegos na região (um facto observado desde a antiguidade por Aristófanes em As Aves e Lisístrata).\n[…]\nA associação entre a coruja e a deusa continuou através de Minerva na mitologia romana, embora esta última por vezes adopte o animal como uma ave sagrada ou favorita. Por exemplo, em Metamorfoses de Ovídio, Coronis o corvo reclama que seu lugar como ave sagrada da deusa é ocupado por uma coruja, que nessa história em particular acaba por ser Nyctimene, a filha do amaldiçoado Epopeu, rei de Lesbos.\n[…]\nO filósofo idealista do século XIX, Georg Wilhelm Friedrich Hegel notou de forma célebre que \"a coruja de Minerva abre suas asas somente com o início do crepúsculo\", o que significa que a filosofia passa a compreender a condição histórica, da mesma forma que passa longe. A filosofia não pode ser prescritiva, porque entende apenas em retrospectiva.\n[…]\nMitologia grega",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Górgonas",
      "descricao": "Três irmãs monstruosas da mitologia grega, Esteno, Euríale e Medusa."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Na mitologia grega, as górgonas eram três irmãs com serpentes nos cabelos. Qual delas era a única mortal?",
    "resposta": "Medusa",
    "fonte": [
      "https://en.wikipedia.org/wiki/Gorgon",
      "https://en.wikipedia.org/wiki/Medusa"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Gorgon",
        "situacao": "ok",
        "texto": "The Gorgons ( GOR-gənz; Ancient Greek: Γοργόνες), in Greek mythology, are three monstrous sisters, Stheno, Euryale, and Medusa, said to be the daughters of Phorcys and Ceto. They lived near their sisters, the Graeae, and were able to turn anyone who looked at them to stone. Euryale and Stheno were immortal, but Medusa was not and was slain by the hero Perseus.\n[…]\nPherecydes notes that Medusa's face turned men to stone, and Pindar describes Medusa's severed head as \"stony death\". In Prometheus Bound, it says that no mortal can look at them and live. According to Apollodorus, all three of the Gorgons could turn to stone anyone who saw them.\n[…]\nStheno and Euryale were immortal, whereas Medusa was mortal. According to Apollodorus' version of their story, Perseus was ordered by Polydectes (his enemy) to bring back the head of Medusa. So, guided by Hermes and Athena, he sought out the sisters of the Gorgons, the Graeae, who had only one eye and one tooth, which they shared. Perseus managed to steal their eye and tooth, and refused to return them, unless they would show him the way to the nymphs, which they did.\n[…]\n... in her essence Medusa is a head and nothing more; her potency only begins when her head is severed, and that potency resides in the head; she is in a word a mask with a body later appended. The primitive Greek knew that there was in his ritual a horrid thing called a Gorgoneion, a grinning mask with glaring eyes and protruding beast-like tusks and pendent tongue. How did this Gorgoneion come to be? A hero had slain a beast called the Gorgon, and this was its head.\n[…]\nMack, Rainer, \"Facing Down Medusa (An aetiology of the gaze)\", Art History vol. 25, 2002, pp. 571–604.\n[…]\nWilk, Stephen R., Medusa : Solving the Mystery of the Gorgon, Oxford University Press, New York, 2000. ISBN 0-19-512431-6. Internet Archive. Google Books."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Medusa",
        "situacao": "ok",
        "texto": "In Greek mythology, Medusa (; Ancient Greek: Μέδουσα, romanized: Médousa, lit. 'guardian, protectress'), also called Gorgo (Ancient Greek: Γοργώ) or the Gorgon, was one of the three Gorgons. Medusa is generally described as a woman with living snakes in place of hair; her appearance was so hideous that anyone who looked upon her was turned to stone. Medusa and her Gorgon sisters Euryale and Stheno\n[…]\nSince Medusa was the only one of the three Gorgons who was mortal, Perseus was able to slay her; he did so while looking at the reflection from the mirrored shield he received from Athena. During that time, Medusa was pregnant by Poseidon. When Perseus beheaded her, Pegasus, a winged horse, and Chrysaor, a giant wielding a golden sword, sprang from her body.\n[…]\nThe Gorgon/Medusa image has been rapidly adopted by large numbers of feminists who recognize her as one face of our own rage.\" Griselda Pollock analyses the passage from horrorism to compassion in the figure of the Medusa through Adriana Cavarero's philosophy and Bracha Ettinger's art and Matrixial theory.\n[…]\nThe \"Rondanini Medusa\", a Roman copy of the Gorgoneion on the aegis of Athena; later used as a model for the Gorgon's head in Antonio Canova's marble Perseus with the Head of Medusa (1798–1801)\n[…]\nThe head of Medusa is featured on some regional symbols. One example is that of the flag and emblem of Sicily, together with the three-legged trinacria. The inclusion of Medusa in the center implies the protection of the goddess Athena, who wore the Gorgon's likeness on her aegis, as said above. Another example is the coat of arms of Dohalice village in the Czech Republic.\n[…]\nWilk, Stephen (2000). Medusa: Solving the Mystery of the Gorgon. New York: Oxford University Press. ISBN 9780195124316.\n[…]\nAncient coins depicting Medusa\n[…]\nTheoi Project, Medousa & the Gorgones References to Medusa and her sisters in classical literature and art"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/G%C3%B3rgona",
        "situacao": "ok",
        "texto": "Uma Górgona (em grego clássico: Γοργών/Γοργώ; romaniz.: Gorgṓn/Gorgṓ) é uma criatura da mitologia grega. As Górgonas aparecem nos primórdios da literatura grega. Embora as descrições de Górgonas variem, o termo mais comumente se refere a três irmãs que são descritas como tendo cabelos feitos de cobras vivas e venenosas e rostos horríveis que transformavam em pedra aqueles que as viam.\n[…]\nTradicionalmente, duas das Górgonas, Esteno e Euríale, eram imortais, mas sua irmã Medusa não era e foi morta pelo semideus e herói Perseu.\n[…]\nVários estudiosos dos primeiros clássicos interpretaram o mito da Medusa como uma memória quase histórica ou \"sublimada\" de uma invasão real.\n[…]\nA lenda de Perseu decapitando Medusa significa, especificamente, que \"os helenos invadiram os principais santuários da deusa\" e \"despojaram suas sacerdotisas de suas máscaras de Górgona\", sendo estas últimas faces apotropaicas usadas para assustar os profanos.Ou seja, ocorreu no início do século XIII a.C.\n[…]\nNos mitos tardios, Medusa era a única das três Górgonas que não era imortal. O rei Polidectes enviou Perseu para matar Medusa na esperança de tirá-lo do caminho, enquanto ele perseguia a mãe de Perseu, Dânae. Alguns desses mitos relatam que Perseu estava armado com uma foice de Hermes e um espelho (ou escudo) de Atena. Perseu poderia seguramente cortar a cabeça de Medusa sem virar pedra olhando apenas para seu reflexo no escudo.\n[…]\nDe acordo com outros relatos, ele ou Atena usaram a cabeça para transformar Atlas em pedra, transformando-o na Cordilheira do Atlas que sustentavam o céu e a terra. Ele também usou a Górgona contra Ceto (ao salvar Andrômeda) e um pretendente concorrente, Fíneas, primo de Andrômeda. Por fim, ele a usou contra o rei Polidectes. Quando Perseu voltou à corte do rei, Polidectes perguntou se ele tinha a cabeça da Medusa.",
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
