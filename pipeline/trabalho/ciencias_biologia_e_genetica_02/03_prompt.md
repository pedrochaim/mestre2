Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Biologia e Genética** (tema **Ciências**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Modelo da dupla hélice do DNA",
      "descricao": "Modelo da estrutura do DNA em duas fitas enroladas, publicado na revista Nature em 1953."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1953, na Universidade de Cambridge, que dupla de cientistas propôs o modelo em dupla hélice para a molécula de DNA?",
    "resposta": "James Watson e Francis Crick",
    "fonte": [
      "https://en.wikipedia.org/wiki/Molecular_Structure_of_Nucleic_Acids:_A_Structure_for_Deoxyribose_Nucleic_Acid",
      "https://en.wikipedia.org/wiki/Francis_Crick"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Molecular_Structure_of_Nucleic_Acids:_A_Structure_for_Deoxyribose_Nucleic_Acid",
        "situacao": "ok",
        "texto": "\"Molecular Structure of Nucleic Acids: A Structure for Deoxyribose Nucleic Acid\" was the first article published to describe the discovery of the double helix structure of DNA, using X-ray diffraction and the mathematics of a helix transform. It was published by Francis Crick and James D. Watson in the scientific journal Nature on pages 737–738 of its 171st volume (dated 25 April 1953).\n[…]\nLinus Pauling was a chemist who was very influential in developing an understanding of the structure of biological molecules. In 1951, Pauling published the structure of the alpha helix, a fundamentally important structural component of proteins. In early 1953, Pauling published a triple helix model of DNA, which subsequently turned out to be incorrect. Both Crick, and particularly Watson, thought that they were racing against Pauling to discover the structure of DNA.\n[…]\nCrick, Watson, and Maurice Wilkins won the 1962 Nobel Prize for Medicine in recognition of their discovery of the DNA double helix structure.\n[…]\nFrom the DNA double helix model, it was clear that there must be some correspondence between the linear sequences of nucleotides in DNA molecules to the linear sequences of amino acids in proteins. The details of how sequences of DNA instruct cells to make specific proteins was worked out by molecular biologists during the period from 1953 to 1965. Francis Crick played an integral role in both the theory and analysis of the experiments that led to an improved understanding of the genetic code.\n[…]\nFranklin, on the other hand, rejected the first molecular model building approach proposed by Crick and Watson: the first DNA model, which in 1952 Watson presented to her and to Wilkins in London, had an obviously incorrect structure with hydrated charged groups on the inside of the model, rather than on the outside. Watson explicitly admitted this in his book The Double Helix."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Francis_Crick",
        "situacao": "ok",
        "texto": "Francis Harry Compton Crick (8 June 1916 – 28 July 2004) was an English molecular biologist, biophysicist, and neuroscientist. He, James Watson, Rosalind Franklin, and Maurice Wilkins played crucial roles in deciphering the helical structure of the DNA molecule.\n[…]\nLate in 1951, Crick started working with James Watson at Cavendish Laboratory at the University of Cambridge, England. Using \"Photo 51\" (the X-ray diffraction results of Rosalind Franklin and her graduate student Raymond Gosling of King's College London, given to them by Gosling and Franklin's colleague Wilkins), Watson and Crick together developed a model for a helical structure of DNA, which they published in 1953.\n[…]\nThe University of Cambridge Graduate School of Biological, Medical and Veterinary Sciences hosts The Francis Crick Graduate Lectures. The first two lectures were by John Gurdon and Tim Hunt.\n[…]\nThe inscription on the helices of a DNA sculpture (which was donated by James Watson) outside Thirkill Court, Clare College, Cambridge, reads: \"The structure of DNA was discovered in 1953 by Francis Crick and James Watson while Watson lived here at Clare.\" and on the base: \"The double helix model was supported by the work of Rosalind Franklin and Maurice Wilkins.\"\n[…]\nJohn Bankston, Francis Crick and James D. Watson; Francis Crick and James Watson: Pioneers in DNA Research (Mitchell Lane Publishers, Inc., 2002) ISBN 1-58415-122-6.\n[…]\nEdward Edelson, Francis Crick And James Watson: And the Building Blocks of Life, Oxford University Press, 2000, ISBN 0-19-513971-2.\n[…]\nCrick papers\n[…]\nListen to Francis Crick and James Watson talking on the BBC in 1962, 1972, and 1974.\n[…]\n100 Scientists and Thinkers: James Watson and Francis Crick from Time magazine.\n[…]\nFrancis Crick tells his life story at Web of Stories"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Modelo da dupla hélice do DNA",
      "descricao": "Modelo da estrutura do DNA em duas fitas enroladas, publicado na revista Nature em 1953."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "O modelo da dupla hélice do DNA foi publicado no ano da coroação de Elizabeth Segunda e da primeira escalada do Everest. Que ano?",
    "resposta": "1953",
    "distratores": [
      "1945",
      "1949",
      "1961"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Molecular_Structure_of_Nucleic_Acids:_A_Structure_for_Deoxyribose_Nucleic_Acid",
      "https://en.wikipedia.org/wiki/Coronation_of_Elizabeth_II",
      "https://en.wikipedia.org/wiki/1953_British_Mount_Everest_expedition"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Molecular_Structure_of_Nucleic_Acids:_A_Structure_for_Deoxyribose_Nucleic_Acid",
        "situacao": "ok",
        "texto": "\"Molecular Structure of Nucleic Acids: A Structure for Deoxyribose Nucleic Acid\" was the first article published to describe the discovery of the double helix structure of DNA, using X-ray diffraction and the mathematics of a helix transform. It was published by Francis Crick and James D. Watson in the scientific journal Nature on pages 737–738 of its 171st volume (dated 25 April 1953).\n[…]\nLinus Pauling was a chemist who was very influential in developing an understanding of the structure of biological molecules. In 1951, Pauling published the structure of the alpha helix, a fundamentally important structural component of proteins. In early 1953, Pauling published a triple helix model of DNA, which subsequently turned out to be incorrect. Both Crick, and particularly Watson, thought that they were racing against Pauling to discover the structure of DNA.\n[…]\nFrom the DNA double helix model, it was clear that there must be some correspondence between the linear sequences of nucleotides in DNA molecules to the linear sequences of amino acids in proteins. The details of how sequences of DNA instruct cells to make specific proteins was worked out by molecular biologists during the period from 1953 to 1965. Francis Crick played an integral role in both the theory and analysis of the experiments that led to an improved understanding of the genetic code.\n[…]\nThe austere beauty of the structure and the practical implications of the DNA double helix combined to make Molecular structure of Nucleic Acids; A Structure for Deoxyribose Nucleic Acid one of the most prominent biology articles of the twentieth century.\n[…]\nBy November 1951, Watson had acquired little training in X-ray crystallography, by his own admission, and thus had not fully understood what Franklin was saying about the structural symmetry of the DNA molecule.\n[…]\nAccess Excellence Classic Collection article on DNA structure."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Coronation_of_Elizabeth_II",
        "situacao": "ok",
        "texto": "The coronation of Elizabeth II as queen of the United Kingdom and the other Commonwealth realms took place on 2 June 1953 at Westminster Abbey in London. Elizabeth acceded to the throne at the age of 25 upon the death of her father, George VI, on 6 February 1952, being proclaimed queen by her privy and executive councils shortly afterwards. The coronation was held more than one year later because \n[…]\nElizabeth's grandmother Queen Mary had died on 24 March 1953, having stated in her will that her death should not affect the planning of the coronation, and the event went ahead as scheduled. It was estimated to cost £1.57 million (c£. 52,900,000 in 2024), which included stands along the procession route to accommodate 96,000 people, lavatories, street decorations, outfits, car hire, repairs to the state coach, and alterations to the Queen's regalia.\n[…]\nOn 15 July 1953, the Queen attended a review of the Royal Air Force at RAF Odiham in Hampshire. The first part of the review was a march past by contingents representing the various commands of the RAF, with Bomber Command leading. This was followed by four de Havilland Venoms of the Central Fighter Establishment making the Royal Cypher in skywriting. After lunch, the Queen in an open car toured the lines of some 300 aircraft that were arranged in a static display.\n[…]\n1953 Coronation Honours\n[…]\nThe Queen's Beasts, heraldic statues placed outside Westminster Abbey representing Elizabeth's genealogy\n[…]\nAll the Elizabeths\n[…]\nÖrnebring, Henrik. \"Revisiting the Coronation: a Critical Perspective on the Coronation of Queen Elizabeth II in 1953.\" Nordicom Review 25, no. 1-2 online(2004)\n[…]\nShils, Edward, and Michael Young. \"The meaning of the coronation.\" The Sociological Review 1.2 (1953): 63–81.\n[…]\nOrder of Service of the Coronation of Queen Elizabeth II\n[…]\nCanada at the Coronation (1953)\n[…]\nElizabeth is Queen (1953)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/1953_British_Mount_Everest_expedition",
        "situacao": "ok",
        "texto": "The 1953 British Mount Everest expedition was the ninth mountaineering expedition to attempt the first ascent of Mount Everest, and the first confirmed to have succeeded when Tenzing Norgay and Edmund Hillary reached the summit on 29 May 1953 at 11:30 a.m. Led by Colonel John Hunt, it was organised and financed by the Joint Himalayan Committee. News of the expedition's success reached London in ti\n[…]\nThe \"Icefall party\" reached Base Camp at 17,900 ft (5455 m) on 12 April 1953. A few days were then taken up, as planned, in establishing a route through the Khumbu Icefall, and once this had been opened teams of Sherpas moved tonnes of supplies up to Base.\n[…]\nOn 27 May, the expedition made its second assault on the summit with the second climbing pair, the New Zealander Edmund Hillary and Sherpa Tenzing Norgay from Nepal. Norgay had previously ascended to a record high point on Everest as a member of the Swiss expedition of 1952. They left Camp IX at 6.30 am, reached the South Summit at 9 am, and reached the summit at 11:30 am on 29 May 1953, climbing the South Col route.\n[…]\nThe expedition's cameraman, Tom Stobart, produced a film called The Conquest of Everest, which appeared later in 1953  and was nominated for an Academy Award for Best Documentary Feature.\n[…]\nHunt, John (1953). The Ascent of Everest. London: Hodder & Stoughton; Mountaineers' Books. ISBN 0-89886-361-9. {{cite book}}: ISBN / Date incompatibility (help) (American edition titled: The Conquest of Everest)\n[…]\nIncludes – Chapter 16: Hilary, Edmund (1953). \"The Summit\". The Ascent of Everest. pp. 197–209\n[…]\nNoyce, Wilfrid (1955) [1954]. South Col: One Man's Adventure on the Ascent of Everest 1953. New York: William Sloane Associates.\n[…]\nConefrey, Mick (2012). Everest 1953: The Epic Story of the First Ascent. Oxford: Oneworld Publications. ISBN 978-1-85168-946-0. OCLC 798411567.\n[…]\nBBC article: \"The 1953 technology used to climb Everest\""
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Teoria celular",
      "descricao": "Teoria biológica segundo a qual todos os seres vivos são formados por células, formulada no século dezenove."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Na década de 1830, que dois cientistas alemães propuseram que plantas e animais são todos formados por células?",
    "resposta": "Schleiden e Schwann",
    "distratores": [
      "Hooke e Leeuwenhoek",
      "Pasteur e Koch",
      "Virchow e Haeckel"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Teoria_celular",
      "https://en.wikipedia.org/wiki/Cell_theory"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Teoria_celular",
        "situacao": "ok",
        "texto": "A teoria celular é um dos conhecimentos fundamentais da biologia. Agora universalmente aceita, a teoria celular afirma que todos os seres vivos são compostos por células, a unidade estrutural e organizacional básica de todos os organismos e que todas as células vêm de células preexistentes.\n[…]\nSeus idealizadores foram Matthias Jakob Schleiden e Theodor Schwann.\n[…]\nO crédito pelo desenvolvimento da teoria celular costuma ser dado a dois cientistas: Theodor Schwann e Matthias Jakob Schleiden.\n[…]\nEm 1838, o botânico Matthias Jakob Schleiden sugeriu que cada elemento estrutural das plantas é composto por células, ou o produto delas. No entanto, Schleiden também sugeriu que as células eram produzidas por um processo de cristalização dentro de outras células ou no exterior, o que foi refutado na década de 1850, por Robert Remak, Rudolf Virchow e Albert Kolliker.\n[…]\nEm 1839, o zoólogo alemão Theodor Schwann publicou a obra Investigações Microscópicas sobre a Estrutura e Crescimento dos Animais e das Plantas, onde sugeriu que todos os tecidos animais e vegetais são formados células. Ele se baseou no fato da presença do núcleo em todos os tipos de células, e na obediência a um processo básico comum de formação comandado pelo núcleo.\n[…]\nAs conclusões de Schleiden e Schwann são consideradas a formulação oficial do que hoje é conhecido como \"teoria celular\". Este foi um grande avanço no campo da biologia, uma vez que pouco se sabia sobre a estrutura animal até este ponto em comparação com as plantas.\n[…]\nA partir dessas conclusões sobre plantas e animais, dois dos três princípios da teoria celular foram postulados.\n[…]\nA teoria celular moderna adicionou vários pontos ao que tinha sido anteriormente proposto por Schwann, Schleiden e Virchow. Assim, ela postula que:\n[…]\nCélulas eucarióticas"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Cell_theory",
        "situacao": "ok",
        "texto": "In biology, cell theory is a scientific theory first formulated in the mid-nineteenth century, that living organisms are made up of cells, that they are the basic structural/organizational unit of all organisms, and that all cells come from pre-existing cells. Cells are the basic unit of structure in all living organisms and also the basic unit of reproduction.\n[…]\nTo further support his theory, Matthias Schleiden and Theodor Schwann both also studied cells of both animal and plants. What they discovered were significant differences between the two types of cells. This put forth the idea that cells were not only fundamental to plants, but animals as well.\n[…]\nCredit for developing cell theory is usually given to two scientists: Theodor Schwann and Matthias Jakob Schleiden. While Rudolf Virchow contributed to the theory, he is not as credited for his attributions toward it. In 1839, Schleiden suggested that every structural part of a plant was made up of cells or the result of cells. He also suggested that cells were made by a crystallization process either within other cells or from the outside. However, this was not an original idea of Schleiden.\n[…]\nThe cell was  first discovered by Robert Hooke in 1665 using a microscope. The first cell theory is credited to the work of Theodor Schwann and Matthias Jakob Schleiden in the 1830s. In this theory the internal contents of cells were called protoplasm and described as a jelly-like substance, sometimes called living jelly. At about the same time, colloidal chemistry began its development, and the concepts of bound water emerged.\n[…]\nGerm theory of disease\n[…]\nTurner, W. (January 1890). \"The Cell Theory Past and Present\". Journal of Anatomy and Physiology. 24 (Pt 2): 253–87. PMC 1328050. PMID 17231856.\n[…]\nMallery, C. (2008-02-11). \"Cell Theory\". Archived from the original on 2018-12-25. Retrieved 2008-11-25."
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Omnis cellula e cellula",
      "descricao": "Máxima latina segundo a qual toda célula se origina de outra célula preexistente."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "No século dezenove, que médico alemão popularizou a frase latina segundo a qual toda célula vem de outra célula?",
    "resposta": "Rudolf Virchow",
    "fonte": [
      "https://en.wikipedia.org/wiki/Rudolf_Virchow",
      "https://en.wikipedia.org/wiki/Cell_theory"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rudolf_Virchow",
        "situacao": "ok",
        "texto": "Rudolf Ludwig Carl Virchow ( VEER-koh, FEER-khoh; German: [ˈʁuːdɔlf ˈvɪʁço, - ˈfɪʁço]; 13 October 1821 – 5 September 1902) was a German physician, anthropologist, pathologist, prehistorian, biologist, writer, editor, and politician. He is known as \"the father of modern pathology\" and as the founder of social medicine, and to his colleagues, the \"Pope of medicine\".\n[…]\nRudolf Virchow was also a collector. Several museums in Berlin emerged from Virchow's collections: the Märkisches Museum, the Museum of Prehistory and Early History, the Ethnological Museum and the Museum of Medical History. In addition, Virchow's collection of anatomical specimens from numerous European and non-European populations, which still exists today, deserves special mention. The collection is owned by the Berlin Society for Anthropology and Prehistory.\n[…]\nVirchow Hill in Antarctica is named after Rudolf Virchow.\n[…]\nRather LJ, ed. Disease, Life and Man: Selected Essays by Rudolf Virchow (Stanford University Press; 1958).\n[…]\nZimmerman, Andrew. \"Anti-Semitism as Skill: Rudolf Virchow's Schulstatistik and the Racial Composition of Germany,\" Central European History 32 (1999): 409-429.\n[…]\nBecher (1891). Rudolf Virchow, Berlin. in German\n[…]\nPagel, J. L. (1906). Rudolf Virchow, Leipzig. in German\n[…]\nVirchow, Rudolf (1870). Menschen- und Affenschadeh Vortrag gehalten am 18. Febr. 1869 im Saale des Berliner Handwerkervereins. Berlin: Luderitz,\n[…]\nWorks by Rudolf Virchow at Project Gutenberg\n[…]\nWorks by or about Rudolf Virchow at the Internet Archive\n[…]\nWorks by Rudolf Virchow at LibriVox (public domain audiobooks)\n[…]\nSome places and memories related to Rudolf Virchow\n[…]\nArticle on Rudolf Virchow in Nautilus Archived 29 October 2020 at the Wayback Machine retrieved on 28 January 2017.\n[…]\nNewspaper clippings about Rudolf Virchow in the 20th Century Press Archives of the ZBW\n[…]\n\"Rudolf Ludwig Karl Virchow\", FamilySearch"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Cell_theory",
        "situacao": "ok",
        "texto": "In biology, cell theory is a scientific theory first formulated in the mid-nineteenth century, that living organisms are made up of cells, that they are the basic structural/organizational unit of all organisms, and that all cells come from pre-existing cells. Cells are the basic unit of structure in all living organisms and also the basic unit of reproduction.\n[…]\nCredit for developing cell theory is usually given to two scientists: Theodor Schwann and Matthias Jakob Schleiden. While Rudolf Virchow contributed to the theory, he is not as credited for his attributions toward it. In 1839, Schleiden suggested that every structural part of a plant was made up of cells or the result of cells. He also suggested that cells were made by a crystallization process either within other cells or from the outside. However, this was not an original idea of Schleiden.\n[…]\nSchleiden's theory of free cell formation through crystallization was refuted in the 1850s by Robert Remak, Rudolf Virchow, and Albert Kolliker. In 1855, Rudolf Virchow added the third tenet to cell theory. In Latin, this tenet states Omnis cellula e cellula. This translated to:\n[…]\nHowever, the idea that all cells come from pre-existing cells had already been proposed by Robert Remak; it has been suggested that Virchow plagiarized Remak. Remak published observations in 1852 on cell division, claiming Schleiden and Schawnn were incorrect about generation schemes. He instead said that binary fission, which was first introduced by Dumortier, was how reproduction of new animal cells were made. Once this tenet was added, classical cell theory was complete.\n[…]\nCellular differentiation"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rudolf_Virchow",
        "situacao": "ok",
        "texto": "Rudolf Ludwig Karl Virchow (Schievelbein/ Świdwin, 13 de outubro de 1821 — Berlim, 5 de setembro de 1902) foi um médico, antropólogo, patologista, pré-historiador, biólogo, escritor, editor e político alemão. É considerado o pai da patologia moderna e da medicina social, além de antropólogo e político liberal (Partido Progressista Alemão e Partido Livre-Pensador Alemão).\n[…]\nSua cidade natal Schievelbein, no leste da Pomerânia, Prússia, hoje está situada na Polônia, com o nome Świdwin. Ele era o filho único de Carl Christian Siegfried Virchow (1785-1865) e Johanna Maria - nascida Hesse (1785-1857). Seu pai era fazendeiro e tesoureiro da cidade. Academicamente brilhante, ele se tornou fluente em alemão, latim, grego, hebraico, inglês, árabe, francês, italiano e holandês.\n[…]\nEle desenvolveu o primeiro método sistemático de autópsia, e introduziu a análise do cabelo na investigação forense. Virchow criticou Ignaz Semmelweis e sua ideia de desinfecção, que disse dele, \"Exploradores da natureza não reconhecem bicho-papão além de indivíduos que especulam\". Ele criticou o que descreveu como \"misticismo nórdico\" em relação à raça ariana. Como um antievolucionista, ele chamou Charles Darwin de \"ignorante\" e seu próprio aluno Ernst Haeckel de \"tolo\".\n[…]\nVirchow foi um escritor prolífico. Algumas de suas obras são:\n[…]\nTríade de Virchow\n[…]\nNodo de Virchow\n[…]\nObras de Rudolf Virchow (em inglês) no Projeto Gutenberg\n[…]\nObras de ou sobre Rudolf Virchow no Internet Archive\n[…]\nStudents and Publications of Virchow Arquivado em 18 julho 2010 no Wayback Machine\n[…]\nUma biografia de Virchow pela American Association of Neurological Surgeons que trata de seu trabalho inicial em patologia cerebrovascular\n[…]\nSome places and memories related to Rudolf Virchow\n[…]\nArticle on Rudolf Virchow in Nautilus Arquivado em 29 outubro 2020 no Wayback Machine recuperado em 28 de janeiro de 2017.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Reação em cadeia da polimerase",
      "descricao": "Técnica de laboratório que copia milhões de vezes um trecho de DNA, conhecida pela sigla PCR."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1983, que bioquímico americano concebeu a técnica que copia trechos de DNA milhões de vezes, a base dos testes de PCR?",
    "resposta": "Kary Mullis",
    "fonte": [
      "https://en.wikipedia.org/wiki/Kary_Mullis",
      "https://en.wikipedia.org/wiki/Polymerase_chain_reaction"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Kary_Mullis",
        "situacao": "ok",
        "texto": "Kary Banks Mullis (December 28, 1944 – August 7, 2019) was an American biochemist. In recognition of his role in the invention of the polymerase chain reaction (PCR) technique, he shared the 1993 Nobel Prize in Chemistry with Michael Smith and was awarded the Japan Prize in the same year.\n[…]\nDespite little experience in molecular biology, Mullis worked as a DNA chemist at Cetus for seven years, ultimately serving as head of the DNA synthesis lab under White, then the firm's director of molecular and biological research; it was there, in 1983, that Mullis invented the polymerase chain reaction (PCR) procedure.\n[…]\nMullis's 1985 paper with Saiki and Erlich, \"Enzymatic Amplification of β-globin Genomic Sequences and Restriction Site Analysis for Diagnosis of Sickle Cell Anemia\" — the polymerase chain reaction invention (PCR) — was honored by a Citation for Chemical Breakthrough Award from the Division of History of Chemistry of the American Chemical Society in 2017.\n[…]\nMullis, Kary B. (April 1990). \"The Unusual Origin of the Polymerase Chain Reaction\". Scientific American. 262 (4): 56–65. Bibcode:1990SciAm.262d..56M. doi:10.1038/scientificamerican0490-56. ISSN 0036-8733. PMID 2315679.\n[…]\nMullis, Kary B.; Ferré, François; Gibbs, Richard A., eds. (1994). The Polymerase Chain Reaction. Boston: Birkhäuser Boston. ISBN 978-0-8176-3750-7 – via Google Books.\n[…]\nMullis, Kary B. (1998). Dancing Naked in the Mind Field. New York: Pantheon Books. ISBN 978-0-679-44255-4.\n[…]\nLiversidge, Anthony (April 1992). \"Kary Mullis, the great gene machine\". Omni. ISSN 0149-8711. Archived from the original on January 21, 2001.\n[…]\nKary B. Mullis on Nobelprize.org\n[…]\n\"Patent Portfolio of Kary Mullis\". DirectoryInventor.{{cite web}}:  CS1 maint: deprecated archival service (link)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Polymerase_chain_reaction",
        "situacao": "ok",
        "texto": "The polymerase chain reaction (PCR) is a laboratory method widely used to amplify copies of specific DNA sequences rapidly, to enable detailed study. PCR was invented in 1983 by American biochemist Kary Mullis at Cetus Corporation. Mullis and biochemist Michael Smith, who had developed other essential ways of manipulating DNA, were jointly awarded the Nobel Prize in Chemistry in 1993.\n[…]\nA 1971 paper in the Journal of Molecular Biology by Kjell Kleppe and co-workers in the laboratory of H. Gobind Khorana first described a method of using an enzymatic assay to replicate a short DNA template with primers in vitro. However, this early manifestation of the basic PCR principle did not receive much attention at the time and the invention of the polymerase chain reaction in 1983 is generally credited to Kary Mullis.\n[…]\nHe was playing in his mind with a new way of analyzing changes (mutations) in DNA when he realized that he had instead invented a method of amplifying any DNA region through repeated cycles of duplication driven by DNA polymerase. In Scientific American, Mullis summarized the procedure: \"Beginning with a single molecule of the genetic material DNA, the PCR can generate 100 billion similar molecules in an afternoon. The reaction is easy to execute.\n[…]\nThe PCR technique was patented by Kary Mullis and assigned to Cetus Corporation, where Mullis worked when he invented the technique in 1983. The Taq polymerase enzyme was also covered by patents. There have been several lawsuits related to the technique brought by DuPont. The Swiss pharmaceutical company Hoffmann-La Roche purchased the rights to the patents in 1992. The last of the commercial PCR patents expired in 2017.\n[…]\nPfu DNA polymerase\n[…]\nHistory of the Polymerase Chain Reaction from the Smithsonian Institution Archives"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Kary_Mullis",
        "situacao": "ok",
        "texto": "Kary Banks Mullis (Lenoir, 28 de dezembro de 1944 – Newport Beach, Califórnia, 7 de agosto de 2019) foi um bioquímico estadunidense. Foi laureado com o Nobel de Química de 1993, pela invenção da reação em cadeia da polimerase (PCR), junto com Michael Smith.\n[…]\nEm 1983, Mullis trabalhava para a Cetus Corporation como químico. Mullis lembrou que, enquanto dirigia nas proximidades de sua casa de campo no Condado de Mendocino (com sua namorada, que também era química na Cetus), ele teve a ideia de usar um par de iniciadores para delimitar a sequência de DNA desejada e copiá-la usando DNA polimerase; uma técnica que permitiria a rápida amplificação de um pequeno trecho de DNA e se tornaria um procedimento padrão em laboratórios de biologia molecular.\n[…]\nSeus colegas na Cetus contestaram a noção de que Mullis era o único responsável pela ideia de usar a Taq polimerase na PCR.[carece de fontes]? No entanto, o bioquímico Richard T. Pon escreveu que o \"pleno potencial [da PCR] não foi percebido\" até o trabalho de Mullis em 1983, e o jornalista Michael Gross afirma que os colegas de Mullis não conseguiram ver o potencial da técnica quando ele a apresentou a eles.\n[…]\nMullis, Kary B. (abril de 1990). «The Unusual Origin of the Polymerase Chain Reaction». Scientific American. 262 (4): 56–65. Bibcode:1990SciAm.262d..56M. ISSN 0036-8733. PMID 2315679. doi:10.1038/scientificamerican0490-56\n[…]\nMullis, Kary B. (1998). Dancing Naked in the Mind Field. Nova Iorque: Pantheon Books. ISBN 978-0-679-44255-4\n[…]\n1994: Golden Plate Award da American Academy of Achievement\n[…]\nHistória do método da reação em cadeia da polimerase\n[…]\nLiversidge, Anthony (abril de 1992). «Kary Mullis, the great gene machine». Omni. ISSN 0149-8711. Cópia arquivada em 21 de janeiro de 2001",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Sequenciamento de Sanger",
      "descricao": "Método de leitura da sequência de bases do DNA desenvolvido em 1977 por Frederick Sanger."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que bioquímico britânico ganhou duas vezes o Nobel de Química, a segunda delas por um método de ler a sequência de letras do DNA?",
    "resposta": "Frederick Sanger",
    "fonte": [
      "https://en.wikipedia.org/wiki/Frederick_Sanger",
      "https://en.wikipedia.org/wiki/Sanger_sequencing"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Frederick_Sanger",
        "situacao": "ok",
        "texto": "Frederick Sanger (; 13 August 1918 – 19 November 2013) was a British biochemist who received the Nobel Prize in Chemistry twice.\n[…]\nFrederick Sanger was born on 13 August 1918 in Rendcomb, a small village in Gloucestershire, England, the second son of Frederick Sanger, a general practitioner, and his wife, Cicely Sanger (née Crewdson). He was one of three children. His brother, Theodore, was only a year older, while his sister May (Mary) was five years younger. His father had worked as an Anglican medical missionary in China but returned to England because of ill health.\n[…]\nBy 1967 Sanger's group had determined the nucleotide sequence of the 5S ribosomal RNA from Escherichia coli, a small RNA of 120 nucleotides.\n[…]\nIn 1977 Sanger and colleagues introduced the \"dideoxy\" chain-termination method for sequencing DNA molecules, also known as the \"Sanger method\". This was a major breakthrough and allowed long stretches of DNA to be rapidly and accurately sequenced. It earned him his second Nobel prize in Chemistry in 1980, which he shared with Walter Gilbert and Paul Berg.\n[…]\nThe new method was used by Sanger and colleagues to sequence human mitochondrial DNA (16,569 base pairs) and bacteriophage λ (48,502 base pairs). The dideoxy method was eventually used to sequence the entire human genome.\n[…]\nPortraits of Frederick Sanger at the National Portrait Gallery, London\n[…]\nFrederick Sanger interviewed by Alan Macfarlane, 24 August 2007 (video), also available on Video on YouTube. Duration 57 minutes.\n[…]\nFrederick Sanger archive collection – Wellcome Library finding aid for the digitised collection.\n[…]\nFrederick Sanger on Nobelprize.org"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Sanger_sequencing",
        "situacao": "ok",
        "texto": "Sanger sequencing is a method of DNA sequencing that involves electrophoresis and is based on the random incorporation of chain-terminating dideoxynucleotides by DNA polymerase during in vitro DNA replication. After first being developed by Frederick Sanger and colleagues in 1977, it became the most widely used sequencing method for approximately 40 years. An automated instrument using slab gel el\n[…]\nSanger methods achieve maximum read lengths of approximately 800 bp (typically 500–600 bp with non-enriched DNA). The longer read lengths in Sanger methods display significant advantages over other sequencing methods especially in terms of sequencing repetitive regions of the genome.\n[…]\nThe device consists of three functional units, each corresponding to the Sanger sequencing steps. The thermal cycling (TC) unit is a 250-nanoliter reaction chamber with integrated resistive temperature detector, microvalves, and a surface heater. The movement of reagent between the top all-glass layer and the lower glass-PDMS layer occurs through 500-μm-diameter via-holes.\n[…]\nThe Apollo 100 platform (Microchip Biotechnologies Inc., Dublin, California) integrates the first two Sanger sequencing steps (thermal cycling and purification) in a fully automated system. The manufacturer claims that samples are ready for capillary electrophoresis within three hours of the sample and reagents being loaded into the system. The Apollo 100 platform requires sub-microliter volumes of reagents.\n[…]\nMaxam–Gilbert sequencing\n[…]\nSecond-generation sequencing\n[…]\nThird-generation sequencing\n[…]\nSanger F, Coulson AR, Barrell BG, Smith AJ, Roe BA (October 1980). \"Cloning in single-stranded bacteriophage as an aid to rapid DNA sequencing\". Journal of Molecular Biology. 143 (2): 161–178. Bibcode:1980JMBio.143..161S. doi:10.1016/0022-2836(80)90196-5. PMID 6260957.\n[…]\nMBI Says New Tool That Automates Sanger Sample Prep Cuts Reagent and Labor Costs"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Frederick_Sanger",
        "situacao": "ok",
        "texto": "Frederick Sanger ([ˈsæŋər]; 13 de agosto de 1918 – 19 de novembro de 2013) foi um bioquímico britânico que recebeu o Prêmio Nobel de Química duas vezes.\n[…]\nFinalmente, como as cadeias A e B são fisiologicamente inativas sem as três ligações dissulfeto de ligação (duas intercadeias, uma intracadeia na A), Sanger e seus colaboradores determinaram suas atribuições em 1955. A principal conclusão de Sanger foi que as duas cadeias polipeptídicas da proteína insulina tinham sequências de aminoácidos precisas e, por extensão, que toda proteína tinha uma sequência única. Foi essa conquista que lhe rendeu seu primeiro Prêmio Nobel de Química em 1958.\n[…]\nEm 1977, Sanger e seus colegas introduziram o método de terminação de cadeia \"didesoxi\" para sequenciar moléculas de DNA, também conhecido como o \"Método de Sanger\". Essa foi uma grande descoberta e permitiu que longos trechos de DNA fossem sequenciados de forma rápida e precisa. Isso lhe rendeu seu segundo Prêmio Nobel de Química em 1980, que compartilhou com Walter Gilbert e Paul Berg.\n[…]\nSanger é uma das únicas duas pessoas a terem sido premiadas com o Prêmio Nobel de Química duas vezes (sendo a outra Karl Barry Sharpless em 2001 e 2022), e uma das apenas cinco pessoas laureadas com dois Prêmios Nobel: As outras quatro foram Marie Curie (Física, 1903 e Química, 1911), Linus Pauling (Química, 1954 e Paz, 1962), John Bardeen (duas vezes Física, 1956 e 1972) e Karl Barry Sharpless (duas vezes Química, 2001 e 2022).\n[…]\nFred Sanger Documentário em vídeo de 2001 por The Vega Science Trust\n[…]\nColeção do arquivo de Frederick Sanger – Auxílio de pesquisa da Wellcome Library para a coleção digitalizada.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Gene",
      "descricao": "Unidade básica da hereditariedade, um trecho do material genético que carrega uma informação herdável."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Em 1909, que botânico dinamarquês criou a palavra gene?",
    "resposta": "Wilhelm Johannsen",
    "distratores": [
      "Hugo de Vries",
      "William Bateson",
      "August Weismann"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Wilhelm_Johannsen",
      "https://en.wikipedia.org/wiki/Gene"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Wilhelm_Johannsen",
        "situacao": "ok",
        "texto": "Wilhelm Johannsen (3 February 1857 – 11 November 1927) was a Danish pharmacist, botanist, plant physiologist, and geneticist. He is best known for coining the terms gene, phenotype and genotype, and for his 1903 \"pure line\" experiments in genetics.\n[…]\nHe coined the terms phenotype and genotype, first using them in his book in German as Elemente der exakten Erblichkeitslehre (Elements of the exact theory of heredity). This book was based in large part on Om arvelighed i samfund og i rene linier (\"On heredity in society and in pure lines\") and in his book Arvelighedslærens Elementer. It was in this book Johannsen also introduced the term gene.\n[…]\nAlso in 1905, Johannsen was appointed professor of plant physiology at the University of Copenhagen, becoming vice-chancellor in 1917. In December 1910, Johannsen was invited to give an address before the American Society of Naturalists. This talk was printed in the American Naturalist. In 1911, he was invited to give a series of four lectures at Columbia University.\n[…]\nJohannsen was a corresponding member of the Academy of Natural Sciences of Philadelphia (elected 1915). He was elected to the American Philosophical Society in 1916.\n[…]\nAnker, Jean (1932) Wilhelm Johannsen, pp. 177–180 in: Meisen, V. Prominent Danish Scientists through the Ages. University Library of Copenhagen 450th Anniversary. Levin & Munksgaard, Copenhagen.\n[…]\nKim, Kyung-Man (1991) On the Reception of Johannsen's Pure Line Theory: Toward a Sociology of Scientific Validity. Social Studies of Science 21 (4): 649–679. JSTOR 285343\n[…]\nWilhelm Johannsen Centre for Functional Genome Research\n[…]\n6 min silent movie showing Johannsen in action as teacher and scientist"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Gene",
        "situacao": "ok",
        "texto": "In biology, the word gene has two meanings. The Mendelian gene is a basic unit of heredity. The molecular gene is a sequence of nucleotides in DNA that is transcribed to produce RNA. There are two types of molecular genes: protein-coding genes and non-coding genes. During gene expression (the synthesis of RNA or protein from a gene), DNA is first copied into RNA. RNA can be directly functional or \n[…]\nAlthough he did not use the term gene, he explained his results in terms of discrete inherited units that give rise to observable physical characteristics. This description prefigured Wilhelm Johannsen's distinction between genotype (the genetic makeup of an organism) and phenotype (the observable traits of that organism).\n[…]\nIn 1906, William Bateson coined \"genetics\" (from Greek, γενετικός genetikos meaning \"genitive\"/\"generative\").\" In 1909, Johannsen introduced the term \"gene\" (from the Greek: γόνος, gonos, meaning offspring and procreation). Eduard Strasburger, among others, still used the term \"pangene\" for the fundamental physical and functional unit of heredity.\n[…]\nGenetic engineering is the modification of an organism's genome through biotechnology. Since the 1970s, a variety of techniques have been developed to specifically add, remove and edit genes in an organism. Recently developed genome engineering techniques use engineered nuclease enzymes to create targeted DNA repair in a chromosome to either disrupt or edit a gene when the break is repaired.\n[…]\nGenetic engineering is now a routine research tool with model organisms. For example, genes are easily added to bacteria and lineages of knockout mice with a specific gene's function disrupted are used to investigate that gene's function. Many organisms have been genetically modified for applications in agriculture, industrial biotechnology, and medicine."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Wilhelm_Johannsen",
        "situacao": "ok",
        "texto": "Wilhelm Ludvig Johannsen (Helsingør, 3 de fevereiro de 1857 - Copenhaga, 11 de Novembro de 1927) foi um botânico dinamarquês, fisiologista vegetal e geneticista. Em 1909 criou o termo gene. Também desenvolveu a Teoria das Linhas Puras, observando que a seleção só era efetiva quando baseada em diferenças genéticas (genótipo), e não ambientais (fenótipo).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Célula-tronco pluripotente induzida",
      "descricao": "Célula adulta reprogramada em laboratório para voltar ao estado de célula-tronco, técnica criada em 2006."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Em 2006, que cientista japonês reprogramou células adultas de camundongo para que voltassem a ser células-tronco?",
    "resposta": "Shinya Yamanaka",
    "distratores": [
      "Tasuku Honjo",
      "Yoshinori Ohsumi",
      "Susumu Tonegawa"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Shinya_Yamanaka",
      "https://en.wikipedia.org/wiki/Induced_pluripotent_stem_cell"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Shinya_Yamanaka",
        "situacao": "ok",
        "texto": "Shinya Yamanaka (山中 伸弥, Yamanaka Shin'ya; born September 4, 1962) is a Japanese stem cell researcher and a Nobel Prize laureate.\n[…]\nHe is a professor and the director emeritus of the Center for iPS Cell (induced Pluripotent Stem Cell) Research and Application, Kyoto University; as well as a senior investigator at the UCSF-affiliated Gladstone Institutes in San Francisco, California, and a professor of anatomy at the University of California, San Francisco (UCSF). Yamanaka is also a past president of the International Society for Stem Cell Research (ISSCR).\n[…]\nThe Center for iPS Cell Research and Application (CiRA) at Kyoto University responded to allegations of image manipulation in several studies co-authored by Nobel laureate Shinya Yamanaka. CiRA stated that questioning Yamanaka's integrity without sufficient evidence was “completely unacceptable.”\n[…]\nShinya Yamanaka found that introduction of a small set of transcription factors into a differentiated cell was sufficient to revert the cell to a pluripotent state.\n[…]\nYamanaka focused on factors that are important for maintaining pluripotency in embryonic stem (ES) cells. This was the first time an intact differentiated somatic cell could be reprogrammed to become pluripotent.\n[…]\nIn May 2010, Yamanaka was given \"Doctor of Science honorary degree\" by Mount Sinai School of Medicine.\n[…]\nShinya Yamanaka, Center for iPS Cell Research and Application (CiRA), Kyoto University\n[…]\n\"Shinya Yamanaka 2010 Balzan Prize for Stem Cells: Biology and Potential Applications\". International Balzan Prize Foundation. 2010.\n[…]\nShinya Yamanaka   on Charlie Rose\n[…]\nShinya Yamanaka on Nobelprize.org"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Induced_pluripotent_stem_cell",
        "situacao": "ok",
        "texto": "Induced pluripotent stem cells (also known as iPS cells or iPSCs) are a type of pluripotent stem cell that can be generated directly from a somatic cell. The iPSC technology was pioneered by Shinya Yamanaka and Kazutoshi Takahashi in Kyoto, Japan, who together showed in 2006 that the introduction of four specific genes (named c-Myc, Oct4, Sox2 and KLF4), collectively known as Yamanaka factors, enc\n[…]\nShinya Yamanaka was awarded the 2012 Nobel Prize along with Sir John Gurdon \"for the discovery that mature cells can be reprogrammed to become pluripotent.\"\n[…]\nYamanaka named iPSCs with a lower case \"i\" due to the popularity of the iPod and other Apple products.\n[…]\nInduced pluripotent stem cells were first generated by Shinya Yamanaka and Kazutoshi Takahashi at Kyoto University, Japan, in 2006. They hypothesized that genes important to embryonic stem cell (ESC) function might be able to induce an embryonic state in adult cells. They chose twenty-four genes previously identified as important in ESCs and used retroviruses to deliver these genes to mouse fibroblasts.\n[…]\nReprogramming of human cells to iPSCs was reported in November 2007 by two independent research groups: Shinya Yamanaka of Kyoto University, Japan, who pioneered the original iPSC method, and James Thomson of University of Wisconsin-Madison who was the first to derive human embryonic stem cells.\n[…]\nA multipotent mesenchymal stem cell, when induced into pluripotence, holds great promise to slow or reverse aging phenotypes. Such anti-aging properties were demonstrated in early clinical trials in 2017. In 2020, Stanford University researchers concluded after studying elderly mice that old human cells when subjected to the Yamanaka factors, might rejuvenate and become nearly indistinguishable from their younger counterparts.\n[…]\n20Minute Video / The Discovery and Future of Induced Pluripotent Stem (iPS) Cells by Yamanaka 8 January 2008"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Shinya_Yamanaka",
        "situacao": "ok",
        "texto": "Shinya Yamanaka (山中 伸弥, Yamanaka Shin'ya) (Higashiosaka, 4 de setembro de 1962) é um médico japonês, pesquisador de células-tronco adultas.\n[…]\nFoi laureado com o Nobel de Fisiologia ou Medicina de 2012, juntamente com John Gurdon, \"pela descoberta de que células maduras podem ser reprogramadas de modo a tornarem-se pluripotentes\".\n[…]\nThe Discovery and Future of Induced Pluripotent Stem (iPS)\n[…]\nNature Reports Stem Cells Q&A with Shinya Yamanaka",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Protista",
      "descricao": "Grupo de seres eucariontes, em geral unicelulares, que não são plantas, animais nem fungos."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1866, que zoólogo alemão propôs um terceiro reino, o dos protistas, para seres que não pareciam nem plantas nem animais?",
    "resposta": "Ernst Haeckel",
    "fonte": [
      "https://en.wikipedia.org/wiki/Protist",
      "https://en.wikipedia.org/wiki/Ernst_Haeckel"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Protist",
        "situacao": "ok",
        "texto": "A protist ( PROH-tist) or protoctist is any eukaryotic organism that is not an animal, land plant, or fungus. Protists do not form a natural group, or clade, but are a paraphyletic group encompassing the entire eukaryote tree of life, from which land plants, animals, and fungi evolved. They are primarily single-celled, exhibiting a wide range of forms such as amoebae, ciliates, thick-walled microa\n[…]\nDuring the 19th century, after several waves of naturalist studies, it became clear that these microorganisms were distinct from animals and plants. John Hogg and Ernst Haeckel proposed a separate kingdom of life, named Protoctista or Protista, respectively, to accommodate the predominantly unicellular eukaryotes, and initially bacteria, which were later excluded.\n[…]\nCertain protists have acidic organelles known as acidocalcisomes, which store high concentrations of phosphorus, calcium, and enzymes related to their metabolism. Among their proposed functions are osmoregulation and maintenance of pH and calcium homeostasis.\n[…]\nAlkaliphilic protists, primarily represented by ciliates, resist up to pH 10.48, higher than the most alkalophilic bacterium.\n[…]\nSoil protists, particularly testate amoebae, contribute to the silica cycle as much as forest trees through the biomineralization of their shells.\n[…]\nMirroring the animal radiation, there was a radiation of phytoplanktonic protists (acritarchs) around 520–510 Ma, followed by a decrease in diversity around 500 Ma. The surviving acritarchs expanded in diversity and morphological innovation due to a decrease in predation from benthic animals, which suffered extinction due to various proposed environmental factors such as anoxia.\n[…]\nProtistology\n[…]\nGlossary of protistology\n[…]\nProtist locomotion\n[…]\nTsukii, Y. (1996). Protist Information Server (database of protist images). Laboratory of Biology, Hosei University. Protist Information Server. Updated: March 22, 2016."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Ernst_Haeckel",
        "situacao": "ok",
        "texto": "Ernst Heinrich Philipp August Haeckel (; German: [ɛʁnst ˈhɛkl̩]; 16 February 1834 – 9 August 1919) was a German zoologist, naturalist, eugenicist, philosopher, physician, professor, marine biologist and artist. He discovered, described and named thousands of new species, mapped a genealogical tree relating all life forms and coined many terms in biology, including ecology, phylum, phylogeny, ontog\n[…]\nThe Jena Declaration, published by the German Zoological Society, rejects the idea of human \"races\" and distances itself from the racial theories of Ernst Haeckel and other 20th century scientists. It claims that genetic variation between human populations is smaller than within them, demonstrating that the biological concept of \"races\" is invalid. The statement highlights that there are no specific genes or genetic markers that match with conventional racial categorizations.\n[…]\nIn 2013, Ernstia, a genus of calcareous sponges in the family Clathrinidae. The genus was erected to contain five species previously assigned to Clathrina. The genus name honors Ernst Haeckel for his contributions towards sponge taxonomy and phylogeny.\n[…]\nErnst Haeckel's popularization of palingenesis made an impact on politicians from both end of the spectrum—from Friedrich Engels's 1876 essay (Gould, 1977, p. 136) and Marxism to palingenetic ultranationalism.\n[…]\nHaeckel's Tale\n[…]\nErnst Haeckel – Evolution's controversial artist. A slide-show essay\n[…]\nErnst Haeckel Haus and Museum in Jena\n[…]\nSchmidt, H. (1934). Ernst Haeckel: Denkmal eines grossen Lebens (PDF) (in German). Jena: Walter Biedermann.\n[…]\nWorks by Ernst Haeckel at Project Gutenberg\n[…]\nWorks by or about Ernst Haeckel at the Internet Archive\n[…]\nWorks by Ernst Haeckel at LibriVox (public domain audiobooks)\n[…]\nNewspaper clippings about Ernst Haeckel in the 20th Century Press Archives of the ZBW\n[…]\nErnst Haeckel's Radiolarians and Medusa – article on Haeckel in Villefranche-sur-Mer"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Protista",
        "situacao": "ok",
        "texto": "Um protista ou protoctista é qualquer organismo eucarionte que não seja um animal, uma planta terrestre ou um fungo. Os protistas constituem um grupo parafilético, que se estende por toda a árvore evolutiva dos eucariontes e do qual surgiram as plantas terrestres, os animais e os fungos. Por isso, não formam um clado, ou grupo natural. A maioria é unicelular, com formas que vão de amebas e ciliado\n[…]\nNo uso consensual, o termo \"protista\" exclui os animais, as embriófitas, ou plantas terrestres, e todos os fungos. Por essa definição, todas as algas eucarióticas são protistas. Os opistosporídios pertencem a um reino dos fungos de delimitação mais abrangente, embora sejam estudados por protistólogos e micólogos.\n[…]\nNos séculos XVII e XVIII, após a descoberta dos seres microscópicos por Antonie van Leeuwenhoek, a classificação dos protistas unicelulares se baseava sobretudo em observações ao microscópio óptico. Eles foram incorporados à divisão tradicional de todos os seres vivos entre plantas e animais. As algas imóveis ficaram no reino vegetal e os demais protistas no reino animal. Eram chamados popularmente de \"animais de infusão\" ou infusórios, junto com bactérias e pequenos invertebrados.\n[…]\nNo século XIX, após sucessivas investigações de naturalistas, ficou claro que esses microrganismos eram distintos de animais e plantas. John Hogg e Ernst Haeckel propuseram um reino separado, chamado Protoctista e Protista, respectivamente, para reunir os eucariontes predominantemente unicelulares. Inicialmente, o grupo também incluía as bactérias, que depois foram retiradas.\n[…]\nProtistas semelhantes a fungos e mixomicetos, como oomicetos, mixomicetos propriamente ditos e acrasídeos, são abundantes como saprótrofos. Os parasitas mais frequentes em terra são os apicomplexos de animais e os oomicetos e plasmodioforídeos de plantas.\n[…]\nProtistologia, estudo dos protistas",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Drosophila melanogaster",
      "descricao": "Mosca-da-fruta usada como organismo-modelo em genética."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que geneticista americano, Nobel de Medicina de 1933, usou moscas-da-fruta para mostrar que os genes ficam nos cromossomos?",
    "resposta": "Thomas Hunt Morgan",
    "fonte": [
      "https://en.wikipedia.org/wiki/Thomas_Hunt_Morgan"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Thomas_Hunt_Morgan",
        "situacao": "ok",
        "texto": "Thomas Hunt Morgan  (September 25, 1866 – December 4, 1945) was an American evolutionary biologist, geneticist, and embryologist. In 1933, he won the Nobel Prize in Physiology or Medicine for discoveries on the role of chromosomes in heredity.\n[…]\nThe Thomas Hunt Morgan School of Biological Sciences at the University of Kentucky is named for him.\n[…]\nThe Genetics Society of America annually awards the Thomas Hunt Morgan Medal, named in his honor, to one of its members who has made a significant contribution to the science of genetics.\n[…]\nThomas Hunt Morgan's discovery was illustrated on a 1989 stamp issued in Sweden, showing the discoveries of eight Nobel Prize-winning geneticists.\n[…]\nAllen, Garland E. (2000). \"Morgan, Thomas Hunt\". American National Biography. Oxford University Press.\n[…]\nShine, Ian B; Sylvia Wrobel (1976). Thomas Hunt Morgan: Pioneer of Genetics. University Press of Kentucky. ISBN 0-8131-0095-X.\n[…]\nStephenson, Wendell H. (April 1946). \"Thomas Hunt Morgan: Kentucky's Gift to Biological Science\" (PDF). Filson Club History Quarterly. 20 (2). Retrieved 2025-09-22.\n[…]\nSturtevant, Alfred H. (1959). \"Thomas Hunt Morgan\" (PDF). Biographical Memoirs of the National Academy of Sciences. 33: 283–325.\n[…]\nThomas Hunt Morgan on Nobelprize.org  including the Nobel Lecture on June 4, 1934 The Relation of Genetics to Physiology and Medicine\n[…]\nThomas Hunt Morgan Biological Sciences Building at University of Kentucky\n[…]\nThomas Hunt Morgan\n[…]\nThomas Hunt Morgan – Biographical Memoirs of the National Academy of Sciences\n[…]\nWorks by Thomas Hunt Morgan at Project Gutenberg\n[…]\nWorks by or about Thomas Hunt Morgan at the Internet Archive\n[…]\nWorks by Thomas Hunt Morgan at LibriVox (public domain audiobooks)\n[…]\nWorks by Thomas Hunt Morgan at the Biodiversity Heritage Library"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Thomas_Hunt_Morgan",
        "situacao": "ok",
        "texto": "Thomas Hunt Morgan (25 de setembro de 1866 – 4 de dezembro de 1945) foi um biólogo evolutivo, geneticista e embriologista americano. Em 1933, recebeu o Prêmio Nobel de Fisiologia ou Medicina por suas descobertas sobre o papel dos cromossomos na hereditariedade.\n[…]\nA Thomas Hunt Morgan School of Biological Sciences, da Universidade do Kentucky, recebeu seu nome em sua homenagem.\n[…]\nA Genetics Society of America concede anualmente a Medalha Thomas Hunt Morgan, denominada em sua homenagem, a um de seus membros que tenha feito uma contribuição significativa à ciência da genética.\n[…]\nA descoberta de Thomas Hunt Morgan foi representada em um selo postal emitido na Suécia em 1989, que mostrava as descobertas de oito geneticistas vencedores do Prêmio Nobel.\n[…]\nAllen, Garland E. (1978). Thomas Hunt Morgan: The Man and His Science. [S.l.]: Princeton University Press. ISBN 978-0-691-08200-4\n[…]\nShine, Ian B; Sylvia Wrobel (1976). Thomas Hunt Morgan: Pioneer of Genetics. [S.l.]: University Press of Kentucky. ISBN 0-8131-0095-X\n[…]\nStephenson, Wendell H. (1946). «Thomas Hunt Morgan: Kentucky's Gift to Biological Science» (PDF). Filson Club History Quarterly. 20 (2). Consultado em 22 de setembro de 2025\n[…]\nSturtevant, Alfred H. (1959). «Thomas Hunt Morgan» (PDF). Biographical Memoirs of the National Academy of Sciences. 33: 283–325\n[…]\nThomas Hunt Morgan Biological Sciences Building na Universidade do Kentucky\n[…]\nThomas Hunt Morgan\n[…]\nThomas Hunt Morgan – Biographical Memoirs da Academia Nacional de Ciências dos Estados Unidos\n[…]\nObras de Thomas Hunt Morgan (em inglês) no Projeto Gutenberg\n[…]\nObras de ou sobre Thomas Hunt Morgan no Internet Archive\n[…]\nObras de Thomas Hunt Morgan (em inglês) no LibriVox (livros falados em domínio público)\n[…]\nObras por Thomas Hunt Morgan em Biodiversity Heritage Library",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Sobrevivência do mais apto",
      "descricao": "Expressão criada no século dezenove para resumir a seleção natural."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que filósofo inglês criou a expressão sobrevivência do mais apto, que Darwin depois adotou em A Origem das Espécies?",
    "resposta": "Herbert Spencer",
    "fonte": [
      "https://en.wikipedia.org/wiki/Survival_of_the_fittest",
      "https://en.wikipedia.org/wiki/Herbert_Spencer"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Survival_of_the_fittest",
        "situacao": "ok",
        "texto": "\"Survival of the fittest\" is a phrase that originated from Darwinian evolutionary theory as a way of describing the mechanism of natural selection. The biological concept of fitness is defined as reproductive success. In Darwinian terms, the phrase is best understood as \"survival of the form that in successive generations will leave most copies of itself.\"\n[…]\nHerbert Spencer first used the phrase, after reading Charles Darwin's On the Origin of Species, in his Principles of Biology (1864), in which he drew parallels between his own economic theories and Darwin's biological ones: \"This survival of the fittest, which I have here sought to express in mechanical terms, is that which Mr. Darwin has called 'natural selection', or the preservation of favoured races in the struggle for life.\"\n[…]\nBy his own account, Herbert Spencer described a concept similar to \"survival of the fittest\" in his 1852 \"A Theory of Population\". He first used the phrase – after reading Charles Darwin's 1859 book On the Origin of Species – in his Principles of Biology of 1864 in which he drew parallels between his economic theories and Darwin's biological, evolutionary ones, writing, \"This survival of the fittest, which I have here sought to express in mechanical terms, is that which Mr.\n[…]\nDarwin wrote on page six of The Variation of Animals and Plants Under Domestication published in 1868, \"This preservation, during the battle for life, of varieties which possess any advantage in structure, constitution, or instinct, I have called Natural Selection; and Mr. Herbert Spencer has well expressed the same idea by the Survival of the Fittest.\n[…]\nThough Spencer's conception of organic evolution is commonly interpreted as a form of Lamarckism, Herbert Spencer is sometimes credited with inaugurating Social Darwinism.\n[…]\nCA002: Survival of the fittest implies that \"might makes right\""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Herbert_Spencer",
        "situacao": "ok",
        "texto": "Herbert Spencer (27 April 1820 – 8 December 1903) was an English polymath active as a philosopher, psychologist, biologist, sociologist, and anthropologist. Spencer originated the expression \"survival of the fittest\", which he coined in Principles of Biology (1864) after reading Charles Darwin's 1859 book On the Origin of Species. The term strongly suggests natural selection, yet Spencer saw evolu\n[…]\nFor many, the name of Herbert Spencer is virtually synonymous with Social Darwinism, a social theory that applies the law of the survival of the fittest to society and is integrally related to the nineteenth-century rise in scientific racism.\n[…]\nAuberon Herbert\n[…]\nBurrow, J. W. \"Herbert Spencer: The Philosopher of Evolution\" History Today (1958) 8#10 pp. 676–683 online\n[…]\nHarrison, Frederic (1905). The Herbert Spencer lecture  (1 ed.). Oxford: Clarendon Press.\n[…]\nEbeling, Richard M., \"Herbert Spencer on Equal Liberty and the Free Society,\" American Institute for Economic Research, 24 April 2020\n[…]\nOffer, John, ed. (2000). Herbert Spencer: Critical Assessments. 2. Taylor & Francis. p. 137. ISBN 978-0415181853.\n[…]\nOffer, John (2010), 'Herbert Spencer and Social Theory'. Palgave Macmillan.\n[…]\nWeinstein, David (1998). Equal Freedom and Utility: Herbert Spencer's Liberal Utilitarianism. \"Land nationalization and property\". Cambridge University Press. pp. 181–209. ISBN 978-0521622646.\n[…]\nWeinstein, David (27 February 2008). \"Herbert Spencer\". In Zalta, Edward N. (ed.). Stanford Encyclopedia of Philosophy. ISSN 1095-5054. OCLC 429049174.\n[…]\nSweet, William, Herbert Spencer entry in the Internet Encyclopedia of Philosophy.\n[…]\nWorks by Herbert Spencer at the Biodiversity Heritage Library\n[…]\nWorks by Herbert Spencer at Project Gutenberg\n[…]\nWorks by or about Herbert Spencer at the Internet Archive\n[…]\nWorks by Herbert Spencer at LibriVox (public domain audiobooks)\n[…]\n\"The Right to Ignore the State\" by Herbert Spencer."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sobreviv%C3%AAncia_do_mais_apto",
        "situacao": "ok",
        "texto": "Sobrevivência do mais apto é uma frase que resume um conceito relativo à competição pela sobrevivência ou predominância. Originalmente aplicada por Herbert Spencer no seu livro Principles of Biology (Princípios da Biologia) de 1864, Spencer traçou paralelos entre as suas ideias de economia com as teorias de Charles Darwin sobre evolução por aquilo que Darwin chamava de seleção natural.\n[…]\nEmbora Darwin tenha usado a frase \"sobrevivência do mais apto\" como sinónimo de \"seleção natural\", os biólogos atuais preferem a última expressão. A frase é uma metáfora, e não uma descrição científica.\n[…]\nSão muito obscuras as causas que impedem à multiplicação natural das espécies. Darwin, em seu livro “A Origem das Espécies”, descreve alguns pontos importantes que podem ser considerados como barreiras à restrição da multiplicação dos indivíduos e determinar a sobrevivência do mais apto:\n[…]\nDarwin, em suas observações durante a viagem no Beagle, percebeu que as espécies diminuem nas regiões setentrionais e, consequentemente, os seus concorrentes. Isto se deve diretamente pela ação do clima. Nestas regiões, somente as espécies mais aptas podem sobreviver a essas condições, o que são bem restritas.\n[…]\nApós ressaltarmos sobre a luta pela sobrevivência dos seres vivos, podemos fazer a mesma pergunta que Darwin levantou: Qual é a influência que esta luta pela sobrevivência possui sobre a transformação?\n[…]\nUm último ponto em que podemos levantar não é a disputa entre indivíduos de espécies diferentes, mas sim entre indivíduos de um mesmo sexo, principalmente machos, os quais asseguram a posse do sexo oposto. Este é um tipo de mecanismo promovido nas espécies que Darwin denominou de seleção sexual. Em geral, esta seleção é menos rigorosa que a seleção natural, pois não requer a morte do outro concorrente, mas favorece os machos que conseguem deixar mais descendentes.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Ovelha Dolly",
      "descricao": "Ovelha nascida em 1996 na Escócia, primeiro mamífero clonado a partir de uma célula adulta."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Em que ano nasceu a ovelha Dolly, o primeiro mamífero clonado a partir de uma célula adulta?",
    "resposta": "1996",
    "fonte": [
      "https://en.wikipedia.org/wiki/Dolly_(sheep)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Dolly_(sheep)",
        "situacao": "ok",
        "texto": "Dolly (5 July 1996 – 14 February 2003) was a female Finn-Dorset sheep and the first mammal that was cloned from an adult somatic cell. She was cloned by associates of the Roslin Institute in Scotland, using the process of nuclear transfer from a cell taken from a mammary gland (somatic cell nuclear transfer). Her cloning proved that a cloned organism could be produced from a mature cell from a spe\n[…]\nDolly was cloned by Keith Campbell, Ian Wilmut and colleagues at the Roslin Institute, part of the University of Edinburgh, Scotland, and the biotechnology company PPL Therapeutics, based near Edinburgh. The funding for Dolly's cloning was provided by PPL Therapeutics and the Ministry of Agriculture. She was born on 5 July 1996. She has been called \"the world's most famous sheep\" by sources including BBC News and Scientific American.\n[…]\nDolly was born on 5 July 1996 and had three mothers: one provided the egg, another the DNA, and a third carried the cloned embryo to term. She was created using the technique of somatic cell nuclear transfer, where the cell nucleus from an adult cell is transferred into an unfertilised oocyte (developing egg cell) that has had its cell nucleus removed. The hybrid cell is then stimulated to divide by an electric shock, and when it develops into a blastocyst it is implanted in a surrogate mother.\n[…]\nThe reprogramming process that cells need to go through during cloning is not perfect and embryos produced by nuclear transfer often show abnormal development. Making cloned mammals was highly inefficient in 1996; Dolly was the only lamb that survived to adulthood from 277 attempts. Wilmut, who led the team that created Dolly, announced in 2007 that the nuclear transfer technique may never be sufficiently efficient for use in humans.\n[…]\nCloning Dolly the Sheep Dolly the Sheep and the importance of animal research\n[…]\nAnimal cloning and Dolly"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ovelha_Dolly",
        "situacao": "ok",
        "texto": "A ovelha Dolly (Easter Bush, 5 de julho de 1996 — Easter Bush, 14 de fevereiro de 2003) foi o primeiro mamífero a ser clonado com sucesso a partir de uma célula somática adulta.\n[…]\nO nome Dolly é uma referência ao nome da atriz e cantora Dolly Parton. Dolly foi clonada a partir das células da glândula mamária de uma ovelha adulta com cerca de seis anos, através de uma técnica conhecida como transferência somática de núcleo.\n[…]\nDepois que a clonagem foi demonstrada com sucesso através da produção de Dolly, muitos outros grandes mamíferos foram clonados, incluindo porcos, veados, cavalos e touros. A tentativa de clonar argali (ovelha da montanha) não produziu embriões viáveis. A tentativa de clonar um touro banteng teve mais sucesso, assim como as tentativas de clonar o muflão (uma forma de ovelha selvagem), ambas resultando em descendentes viáveis.\n[…]\nO processo de reprogramação pelo qual as células precisam passar durante a clonagem não é perfeito e os embriões produzidos por transferência nuclear frequentemente apresentam desenvolvimento anormal. Fazer mamíferos clonados foi altamente ineficiente - em 1996, Dolly foi a única ovelha que sobreviveu à idade adulta de 277 tentativas.\n[…]\nEm janeiro de 2019, cientistas na China relataram a criação de cinco macacos clonados idênticos com edição de genes, usando a mesma técnica de clonagem que foi usada com Zhong Zhong e Hua Hua - os primeiros macacos clonados - e a ovelha Dolly, e a mesma técnica gene-edição CRISPR-Cas9 supostamente usada por He Jiankui na criação dos primeiros bebês humanos modificados por genes, Lulu e Nana. Os clones de macacos foram feitos para estudar várias doenças médicas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Filosofia Zoológica",
      "descricao": "Livro de Jean-Baptiste de Lamarck, publicado em 1809, que expõe sua teoria da evolução."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Lamarck publicou sua teoria da evolução, no livro Filosofia Zoológica, no mesmo ano em que Darwin nasceu. Que ano foi esse?",
    "resposta": "1809",
    "distratores": [
      "1789",
      "1831",
      "1859"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Philosophie_zoologique",
      "https://en.wikipedia.org/wiki/Charles_Darwin"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Philosophie_zoologique",
        "situacao": "ok",
        "texto": "Philosophie zoologique (\"Zoological Philosophy, or Exposition with Regard to the Natural History of Animals\") is an 1809 book by the French naturalist Jean-Baptiste Lamarck, in which he outlines his pre-Darwinian theory of evolution, part of which is now known as Lamarckism.\n[…]\nHowever, he is mainly remembered for the theory that now bears his name, Lamarckism, and in particular his view that the environment (called by Lamarck the conditions of life) gave rise to permanent, inherited, evolutionary changes in animals. He described his theory in his 1802 Recherches sur l'organisation des corps vivants, and in his 1809 Philosophie zoologique, and later in his Histoire naturelle des animaux sans vertèbres, (1815–1822).\n[…]\nIn the French-speaking world in his lifetime, Lamarck and his theories were rejected by the major zoologists of the day, including Cuvier. However, he made more of an impact outside France and after his death, where leading scientists such as Ernst Haeckel, Charles Lyell and Darwin himself recognised him as a major zoologist, with theories that presaged Darwinian evolution.\n[…]\nWith respect to the Philosophie Zoologique, it is no reproach to Lamarck to say that the discussion of the Species question in that work, whatever might be said for it in 1809, was miserably below the level of the knowledge of half a century later.\n[…]\nI do not think that any impartial judge who reads the Philosophie Zoologique now, and who afterwards takes up Lyell's trenchant and effectual criticism (published as far back as 1830), will be disposed to allot to Lamarck a much higher place in the establishment of biological evolution than that which Bacon assigns to himself in relation to physical science generally,—buccinator tantum.\n[…]\nLamarck: Contents\n[…]\n1809, vol. I:  (Oxford)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Charles_Darwin",
        "situacao": "ok",
        "texto": "Charles Robert Darwin ( DAR-win; 12 February 1809 – 19 April 1882) was an English naturalist, geologist, and biologist, widely known for his contributions to evolutionary biology. His proposition that all species of life have descended from a common ancestor is now generally accepted and considered a fundamental scientific concept.\n[…]\nCharles Robert Darwin was born on 12 February 1809 at his family's home, The Mount, in Shrewsbury, Shropshire. He was the fifth of six children of wealthy society doctor and financier Robert Darwin and Susannah Darwin (née Wedgwood). His grandfathers Erasmus Darwin and Josiah Wedgwood were both prominent abolitionists.\n[…]\nBoth families were largely Unitarian, though the Wedgwoods were adopting Anglicanism. Robert Darwin, a freethinker, had baby Charles baptised in November 1809 in the Anglican St Chad's Church, Shrewsbury, but Charles and his siblings attended the local Unitarian Church with their mother. The eight-year-old Charles already had a taste for natural history and collecting when he joined the day school run by its preacher in 1817. That July, his mother died.\n[…]\nHe had expected to be buried in St Mary's churchyard at Downe, but at the request of Darwin's colleagues, after public and parliamentary petitioning, William Spottiswoode (President of the Royal Society) arranged for Darwin to be honoured by burial in Westminster Abbey, close to John Herschel and Isaac Newton. The funeral, held on Wednesday, 26 April, was attended by thousands of people, including family, friends, scientists, philosophers, and dignitaries.\n[…]\nWorks by Charles Darwin at LibriVox (public domain audiobooks)\n[…]\nScientific American, 29 April 1882, pp. 256, Obituary of Charles Darwin\n[…]\nFieser, James; Dowden, Bradley (eds.). \"Charles Darwin\". Internet Encyclopedia of Philosophy. ISSN 2161-0002. OCLC 37741658."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Philosophie_Zoologique",
        "situacao": "ok",
        "texto": "Philosophie Zoologique ou Filosofia Zoológica (formalmente Philosophie zoologique ou exposition des considérations relatives à l'histoire naturelle des animaux) é um livro do naturalista francês Jean-Baptiste de Lamarck publicado em 1809, no qual esboça sua teoria pré-darwiniana da evolução, hoje conhecida como lamarquismo.\n[…]\nLamarck foi largamente ignorado pelo grande zoólogo francês Georges Cuvier, mas atraiu muito mais interesse no exterior. O livro foi lido cuidadosamente, mas sua tese foi rejeitada por cientistas do século XIX, incluindo o geólogo Charles Lyell e o anatomista comparativo Thomas Henry Huxley. Charles Darwin reconheceu Lamarck como um zoólogo importante, e sua teoria como uma precursora da evolução darwiniana por seleção natural.\n[…]\nEle determinou a posição e afinidades de milhares de formas, melhorou a classificação existente de Linnaeus e Cuvier e lançou as bases para a paleontologia de invertebrados. Ele descreveu sua teoria nas obras Recherches sur l'organisation des corps vivants de 1802, e seu Philosophie Zoologique de 1809, e mais tarde em Histoire naturelle des animaux sans vertèbres (1815–1822).\n[…]\nCom respeito à Philosophie Zoologique, não é nenhuma vergonha para Lamarck dizer que a discussão da questão das Espécies nesse trabalho, seja o que for que fosse dito em 1809, estava miseravelmente abaixo do nível de conhecimento meio século mais tarde.\n[…]\nNão creio que nenhum juiz imparcial que leia Philosophie Zoologique agora, e que depois retome a crítica incisiva e eficaz de Lyell (publicada já em 1830), estará disposto a atribuir a Lamarck um lugar muito mais elevado no estabelecimento da evolução biológica do que aquele que Bacon atribui a si próprio em relação à ciência física em geral —, o buccinator tantum.\n[…]\nLamarck: Conteúdo\n[…]\n1809, vol. I:  (Oxford)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Tomate Flavr Savr",
      "descricao": "Tomate geneticamente modificado para amolecer mais devagar, vendido nos Estados Unidos a partir de 1994."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Em que década o tomate Flavr Savr, primeiro alimento transgênico aprovado para consumo humano, chegou aos supermercados?",
    "resposta": "Anos noventa",
    "fonte": [
      "https://en.wikipedia.org/wiki/Flavr_Savr"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Flavr_Savr",
        "situacao": "ok",
        "texto": "Flavr Savr (also known as CGN-89564-2; pronounced \"flavor saver\"), is a genetically modified tomato that was the first commercially grown genetically engineered food to be granted a license for human consumption. It was developed by the Californian company Calgene in the 1980s. The tomato has an improved shelf-life, increased fungal resistance, and a slightly increased viscosity compared to its un\n[…]\nAn improved flavor, later achieved through traditional breeding of Flavr Savr and better-tasting varieties, would contribute to selling Flavr Savr at a premium price at the supermarket.\n[…]\nFlavr Savr tomatoes were still labeled as genetically altered, though it was not a requirement. The FDA's no-label policy was criticized because people believed that consumers deserved the right to know what was in their food. Safety concerns were also cited. Thousands of comments were sent to the FDA asking for a change to the labeling guidelines. However, the FDA still did not implement mandatory labeling of foods derived from biotechnology until January 2022.\n[…]\nJeremy Rifkin, an antibiotechnology activist, said, \"It may be benign, but [the Flavr Savr] may turn out to be toxic.\" He founded the Pure Food Campaign, which opposed the introduction of genetically modified foods into consumer markets.\n[…]\nThe failure of the Flavr Savr has been attributed to Calgene's inexperience in the business of growing and shipping tomatoes.\n[…]\n\"Test Tube Tomato\" A ten minute long video providing an overview of the Flavr Savr and its controversy.\n[…]\n\"The transgenic tomato\" \"Purpose: To show a general reading audience (perhaps readers of a popular science magazine) that genetically engineered crops are needed and safe to consume by discussing the development of a successful genetically engineered crop, the FLAVR SAVR tomato.\""
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Transposon",
      "descricao": "Sequência de DNA capaz de mudar de posição no genoma, os chamados genes saltadores."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Barbara McClintock descobriu os genes saltadores nos anos quarenta, mas só recebeu o Nobel décadas depois. Em que ano?",
    "resposta": "1983",
    "distratores": [
      "1962",
      "1975",
      "1995"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Barbara_McClintock"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Barbara_McClintock",
        "situacao": "ok",
        "texto": "Barbara McClintock (June 16, 1902 – September 2, 1992) was an American cytogeneticist who was awarded the 1983 Nobel Prize in Physiology or Medicine. McClintock received her PhD in botany from Cornell University in 1927. There, she started her career as the leader of the development of maize cytogenetics, the focus of her research for the rest of her life. From the late 1920s, McClintock studied c\n[…]\nAwards and recognition for her contributions to the field followed, including the Nobel Prize in Physiology or Medicine, awarded to her in 1983 for the discovery of genetic transposition; as of 2025, she remains the only woman who has received an unshared Nobel Prize in that category.\n[…]\nMost notably, she received the Nobel Prize for Physiology or Medicine in 1983, the first woman to win that prize unshared, and the first American woman to win any unshared Nobel Prize in the sciences. It was given to her by the Nobel Foundation for discovering \"mobile genetic elements\"; this was more than 30 years after she initially described the phenomenon of controlling elements.\n[…]\nDuring her final years, McClintock led a more public life, especially after Evelyn Fox Keller's 1983 biography of her, A Feeling for the Organism, brought McClintock's story to the public. She remained a regular presence in the Cold Spring Harbor community, and gave talks on mobile genetic elements and the history of genetics research for the benefit of junior scientists.\n[…]\nAn anthology of her 43 publications The Discovery and Characterization of Transposable Elements: The Collected Papers of Barbara McClintock was published in 1987.\n[…]\nIn 2024, From Chromosomes to Mobile Genetic Elements: The Life and Work of Nobel Laureate Barbara McClintock, a biography by Lee B. Kass, was released.\n[…]\nBarbara McClintock archive on New Scientist\n[…]\nBarbara McClintock on Nobelprize.org\n[…]\nBarbara McClintock on Pnas.org"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Barbara_McClintock",
        "situacao": "ok",
        "texto": "Barbara McClintock (Hartford, 16 de junho de 1902 — Huntington, 2 de setembro de 1992) foi uma citogeneticista estadunidense, doutora em botânica e vencedora do prêmio Nobel de Fisiologia ou Medicina de 1983 pela descoberta dos elementos genéticos móveis, que causam o fenômeno conhecido como transposição genética.\n[…]\nEmpreendeu uma das mais espetaculares descobertas da genética, os genes saltadores ou transposões. Na década de 1940, Barbara realizou experiências com variantes de milho e descobriu que \"a informação genética não é imóvel\", e que genes podem \"ligar\" e \"desligar\" a manifestação física de certos fenótipos.\n[…]\nDevido ao ceticismo de outros cientistas em relação às suas descobertas e suas implicações, McClintock parou de publicar seus dados em 1953. Os mecanismos de regulação genética só passaram a ser melhor compreendidos nas décadas de 60 e 70, de forma que passaram-se mais de trinta anos entre sua descoberta, fundamental para a genética, e o seu reconhecimento, com o recebimento do Prêmio Nobel em 1983.\n[…]\nBarbara passou seus últimos anos, após o Nobel, como líder e pesquisadora no Cold Spring Harbor Laboratory em Long Island, Nova York.\n[…]\nÉ amplamente reconhecida por sua descoberta dos transposons, ou “genes saltadores”, que revolucionaram a genética moderna e a compreensão da regulação genética em organismos vivos.Apesar de inicialmente seu trabalho ter sido questionado ou incompreendido, McClintock recebeu o Prêmio Nobel de Fisiologia ou Medicina em 1983, consolidando sua posição como pioneira na genética\n[…]\nKolata, Gina (4 de setembro de 1992), «Dr. Barbara McClintock, 90, Gene Research Pioneer, Dies», The New York Times, consultado em 28 de dezembro de 2012\n[…]\n«Perfil no sítio oficial do Nobel de Fisiologia ou Medicina 1983» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Experimento de Miller-Urey",
      "descricao": "Experimento que produziu aminoácidos simulando a atmosfera da Terra primitiva com descargas elétricas num frasco."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Em que década foi feito o famoso experimento que obteve aminoácidos num frasco, simulando a Terra primitiva com descargas elétricas?",
    "resposta": "Anos cinquenta",
    "fonte": [
      "https://en.wikipedia.org/wiki/Miller%E2%80%93Urey_experiment"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Miller%E2%80%93Urey_experiment",
        "situacao": "ok",
        "texto": "The Miller–Urey experiment, or Miller experiment, was an experiment in chemical synthesis carried out in 1952 that simulated the conditions thought at the time to be present in the atmosphere of the early, prebiotic Earth. It is seen as one of the first successful experiments demonstrating the synthesis of organic compounds from inorganic constituents in an origin of life scenario. The experiment \n[…]\nIt is regarded as a groundbreaking experiment, and the classic experiment investigating the origin of life (abiogenesis). It was performed in 1952 by Stanley Miller, supervised by Nobel laureate Harold Urey at the University of Chicago, and published the following year. At the time, it supported Alexander Oparin's and J. B. S. Haldane's hypothesis that the conditions on the primitive Earth favored chemical reactions that synthesized complex organic compounds from simpler inorganic precursors.\n[…]\nWhile the prebiotic atmosphere could have had a different redox condition than that of the Miller–Urey atmosphere, the modified Miller–Urey experiments described in the above section demonstrated that amino acids can still be abiotically produced in less-reducing atmospheres under specific geochemical conditions.\n[…]\nThe Miller–Urey experiment was proof that the building blocks of life could be synthesized abiotically from gases, and introduced a new prebiotic chemistry framework through which to study the origin of life. Simulations of protein sequences present in the last universal common ancestor (LUCA), or the last shared ancestor of all extant species today, show an enrichment in simple amino acids that were available in the prebiotic environment according to Miller–Urey chemistry.\n[…]\nThe Miller–Urey experiment website, a simulation of the Miller–Urey Experiment along with a video interview with Stanley Miller] by Scott Ellis from CalSpace (UCSD)\n[…]\nMiller–Urey experiment explained"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Experi%C3%AAncia_de_Miller_e_Urey",
        "situacao": "ok",
        "texto": "A experiência de Miller e Urey foi uma experiência científica concebida para testar a hipótese de Oparin e Haldane sobre a origem da vida.\n[…]\nSegundo o experimento, as condições na Terra primitiva favoreciam a ocorrência de reações químicas que transformavam compostos inorgânicos em compostos orgânicos precursores da vida. Em 1953, Stanley L. Miller e Harold C. Urey da Universidade de Chicago realizaram uma experiência para testar a hipótese de Oparin e Haldane que ficou conhecida pelos nomes dos cientistas. Esta experiência tornou-se na experiência clássica sobre a origem da vida.\n[…]\nA experiência de Miller consistiu basicamente em simular as condições da Terra primitiva postuladas por Oparin e Haldane. Para isso, criou um sistema fechado, sem oxigênio gasoso, onde inseriu os principais gases atmosféricos, tais como hidrogênio, amônia, metano, além de vapor d'água. Através de descargas elétricas, e ciclos de aquecimento e condensação de água, obteve após algum tempo, diversas moléculas orgânicas (aminoácidos).\n[…]\nAbaixo é a tabela de aminoácidos produzidos e identificados no \"clássico\" experimento de 1952, como publicado por Miller em 1953, the 2008 re-analysis of vials from the volcanic spark discharge experiment, and the 2010 re-analysis of vials from the H2S-rich spark discharge experiment.\n[…]\n«Um pioneiro no estudo da Terra pré-biónica, Felipe A. P. L. Costa, La Insignia.»\n[…]\n«Aminoácidos, João Gonçalves Filho.»\n[…]\n«The Miller Volcanic Spark Discharge Experiment.» (PDF) (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Experimento de Redi",
      "descricao": "Experimento de Francesco Redi com frascos de carne cobertos e descobertos, que contestou a geração espontânea de larvas."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Em que século o italiano Francesco Redi cobriu frascos de carne com gaze e mostrou que as larvas não nascem da carne podre?",
    "resposta": "Século dezessete",
    "fonte": [
      "https://en.wikipedia.org/wiki/Francesco_Redi"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Francesco_Redi",
        "situacao": "ok",
        "texto": "Francesco Redi (18 February 1626 – 1 March 1697) was an Italian physician, naturalist, biologist, and poet. He is referred to as the \"founder of experimental biology\", and as the \"father of modern parasitology\". He was the first person to challenge the theory of spontaneous generation by demonstrating that maggots come from eggs of flies.\n[…]\nHe possibly originated the use of the control, the basis of experimental design in modern biology. A collection of his poems first published in 1685 Bacco in Toscana (Bacchus in Tuscany) is considered among the finest works of 17th-century Italian poetry, and for which the Grand Duke Cosimo III gave him a medal of honour.\n[…]\nRedi continued his experiments by capturing the maggots and waiting for them to metamorphose, which they did, becoming flies. Also, when dead flies or maggots were put in sealed jars with dead animals or veal, no maggots appeared, but when the same thing was done with living flies, maggots did. His interpretations were always based on biblical passages, such as his famous adage: omne vivum ex vivo (\"All life comes from life\").\n[…]\nThe larval stage of parasitic fluke called \"redia\" is named after Redi by another Italian zoologist, Filippo de Filippi, in 1837.\n[…]\nAltieri Biagi; Maria Luisa (1968). Lingua e cultura di Francesco Redi, medico. Florence: L. S. Olschki. ASIN B00A30Z37W.\n[…]\nBucchi, Gabriele; Mangani, Lorella (2016). \"REDI, Francesco\". Dizionario Biografico degli Italiani (in Italian). Vol. 86: Querenghi–Rensi. Rome: Istituto dell'Enciclopedia Italiana. ISBN 978-88-12-00032-6. Retrieved 19 June 2025.\n[…]\nBiographical Website of Francesco Redi\n[…]\nRediʼs Experiment Archived 4 October 2013 at the Wayback Machine\n[…]\nFrancisco Redi at The Free Dictionary\n[…]\nFrancisco Redi at Infoplease\n[…]\nSpontaneous generation and Francesco Redi Archived 4 October 2013 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Francesco_Redi",
        "situacao": "ok",
        "texto": "Francesco Redi (Arezzo, 18 de fevereiro de 1626 – Pisa, 1 de março de 1697) foi um biólogo italiano. Conhecido pelo seu experimento realizado em 1668 que se considera um dos primeiros passos para a queda de reputação da geração espontânea. O saber do seu tempo considerava que as larvas se formavam naturalmente a partir de carne em putrefação. Na sua experiência, Redi utilizou mais de 8 frascos, no\n[…]\nSelou fortemente a metade deles, deixou outra metade aberta e cobriu a outra metade com gaze. Desenvolveram-se larvas no frasco aberto e sobre a gaze do frasco correspondente. Não se desenvolveram larvas em nenhuma parte do frasco selado. Porém seu experimento não satisfez os abiogênicos, que seguiam os conceitos que a vida surgia espontaneamente da matéria bruta, que para Aristóteles continha um princípio ativo capaz de gerar a vida.\n[…]\nE falaram que no frasco selado, não continha a matéria bruta principal, o ar. Assim, disseram que apenas as larvas nasciam de seres preexistentes. Essa experiência acabou gerando muita polêmica mas hoje não traz dúvidas. A nova teoria de Redi (biogênese) generalizou suas conclusões afirmando que todos os seres vivos, vem sempre de outros seres vivos. Esses animais a qual Redi se referiu não são, de fato, animais do grupo Vermes.\n[…]\nSão na verdade, larvas de moscas, que surgem de ovos postos na carne por fêmeas adultas fecundadas. Essas larvas crescem e se desenvolvem, tornando-se pupas imóveis envolvidas por uma casca externa resistente. Depois de passar por grandes transformações, cada pupa origina uma nova mosca adulta. Com isso comprovou a experiência da biogênese.\n[…]\nCom tudo isso pode se afirmar que Redi provou que os defensores da teoria da abiogêneses estavam totalmente errados sobre o princípio ativo e a geração espontânea. Foi um importante cientista na história.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Perfil genético",
      "descricao": "Técnica de identificação de pessoas pelo DNA, criada por Alec Jeffreys e usada em perícias e testes de paternidade."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Em que década o britânico Alec Jeffreys inventou a identificação de pessoas pelo DNA, hoje usada em testes de paternidade?",
    "resposta": "Anos oitenta",
    "fonte": [
      "https://en.wikipedia.org/wiki/Alec_Jeffreys",
      "https://en.wikipedia.org/wiki/DNA_profiling"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Alec_Jeffreys",
        "situacao": "ok",
        "texto": "Sir Alec John Jeffreys (born 9 January 1950) is a British geneticist known for developing techniques for genetic fingerprinting and DNA profiling which are now used worldwide in forensic science to assist police detective work and to resolve paternity and immigration disputes.\n[…]\nJeffreys says he had a \"eureka moment\" in his lab in Leicester after looking at the X-ray film image of a DNA experiment on 10 September 1984, which unexpectedly showed both similarities and differences between the DNA of different members of his technician's family. Within about half an hour, he continued, he realised the possible scope of DNA fingerprinting, which uses variations in the genetic information to identify individuals.\n[…]\nIn 1992, Jeffreys's methods were used to confirm the identity for German prosecutors of the body of Josef Mengele, who had died in 1979, by comparing DNA obtained from a femur bone of his exhumed skeleton, with DNA from his mother and son, in a similar way to paternity testing.\n[…]\nDNA profiling, based on typing individual highly variable minisatellites in the human genome, was also developed by Alec Jeffreys and his team in 1985, with the term (DNA fingerprinting) being retained for the initial test that types many minisatellites simultaneously. By focusing on just a few of these highly variable minisatellites, DNA profiling made the system more sensitive, more reproducible and amenable to computer databases.\n[…]\nIt soon became the standard forensic DNA system used in criminal case work and paternity testing worldwide.\n[…]\nJeffreys has opposed the current use of DNA profiling, where the government has access to that database, and has instead proposed a database of all people's DNA, access to which would be controlled by an independent third party."
      },
      {
        "url": "https://en.wikipedia.org/wiki/DNA_profiling",
        "situacao": "ok",
        "texto": "DNA profiling (also called DNA fingerprinting and genetic fingerprinting) is the process of determining an individual's deoxyribonucleic acid (DNA) characteristics. DNA analysis intended to identify a species, rather than an individual, is called DNA barcoding.\n[…]\nDNA profiling has also been used in the study of animal and plant populations in the fields of zoology, botany, and agriculture. DNA profiling was discovered by British geneticist Sir Alec Jeffreys in 1984 while he was working at the University of Leicester. He developed the technique of genetic fingerprinting by realizing that some regions of DNA have highly variable repetitive sequences that are unique to each individual.\n[…]\nBritish geneticist Sir Alec Jeffreys independently developed a process for DNA profiling in 1984 while working in the Department of Genetics at the University of Leicester. Jeffreys discovered that a DNA examiner could establish patterns in unknown DNA. These patterns were a part of inherited traits that could be used to advance the field of relationship analysis. These discoveries led to the first use of DNA profiling in a criminal case.\n[…]\nDNA profiling has been applied to the identification of microbial, fungal, plant and animal individuals. A variant of PCR, arbitrarily amplified DNA, has been particularly useful in DNA fingerprinting applications. For example, random amplified polymorphic DNA (RAPD), arbitrarily primed PCR (AP-PCR), DNA amplification fingerprinting (DAF) use arbitrary primers to target anonymous regions in a genome generating unique genetic fingerprints.\n[…]\nDNA profiling databases in Plants:\n[…]\n\"Making Sense of Forensic Genetics\". Sense about Science. 25 January 2017. Retrieved 19 April 2020."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Alec_Jeffreys",
        "situacao": "ok",
        "texto": "Alec John Jeffreys, FRS (Oxford, 9 de janeiro de 1950) é um geneticista britânico.\n[…]\nDesenvolveu técnicas de impressão de ADN e perfil de ADN usadas em todo o mundo em ciência forense para ajudar o trabalho policial e também para resolver casos de paternidade ou relacionados com imigração. É professor de genética na Universidade de Leicester.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "HMS Beagle",
      "descricao": "Navio da Marinha Real britânica em que Charles Darwin viajou ao redor do mundo entre 1831 e 1836."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "No fim de fevereiro de 1832, o Beagle chegou a uma cidade brasileira onde Darwin escreveu maravilhado sobre a floresta tropical. Que cidade?",
    "resposta": "Salvador",
    "fonte": [
      "https://en.wikipedia.org/wiki/Second_voyage_of_HMS_Beagle"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Second_voyage_of_HMS_Beagle",
        "situacao": "ok",
        "texto": "The second survey expedition of HMS Beagle took place from 27 December 1831 to 2 October 1836. Robert FitzRoy, the newest commander of Beagle, had thought of the advantages of having someone onboard who could investigate geology, and sought a naturalist to accompany them as a supernumerary. At the age of 22, the graduate Charles Darwin hoped to see the tropics before becoming a parson, and accepte\n[…]\nFitzRoy set up tents and an observatory on Quail Island to determine the exact position of the islands, while Darwin collected numerous sea animals, delighting in vivid tropical corals in tidal pools, and investigating the geology of Quail Island. Though Daubeny's book in Beagle's library described the volcanic geology of the Canary Islands, it said that the structure of the Cape Verde Islands was \"too imperfectly known\". Darwin saw Quail Island as his key to understanding the structure of St.\n[…]\nDue to heavy surf, they only stayed at Fernando de Noronha for a day to make the required observations, then FitzRoy pressed on to Bahia de Todos Santos, Brazil, to rate the chronometers and take on water. They reached the continent and arrived at the port on 28 February. Darwin was thrilled at the magnificent sight of \"the town of Bahia or St Salvador\", with large ships at harbour scattered across the bay.\n[…]\nBeagle reached Ascension Island on 19 July 1836, and Darwin was delighted to receive letters from his sisters with news that Sedgwick had written to Dr. Butler: \"He is doing admirably in S.\n[…]\nRookmaaker, Kees (2009), Darwin's itinerary on the voyage of the Beagle, Darwin Online, retrieved 18 August 2009\n[…]\n\"Darwin and the Beagle voyage\". Darwin Correspondence Project. 11 February 2021. Retrieved 20 December 2021.\n[…]\nWorks by Charles Darwin at Project Gutenberg; public domain\n[…]\nDarwin Correspondence Project Text and notes for most of his letters\n[…]\nDarwin in Galapagos: Footsteps to a New World"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Fritz Müller",
      "descricao": "Naturalista alemão (1822–1897) radicado no Brasil, defensor da teoria de Darwin e descritor do mimetismo mülleriano."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "O naturalista alemão Fritz Müller, que apoiou Darwin com estudos feitos no Brasil, viveu por décadas em qual estado brasileiro?",
    "resposta": "Santa Catarina",
    "distratores": [
      "Rio Grande do Sul",
      "Paraná",
      "Espírito Santo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Fritz_M%C3%BCller",
      "https://pt.wikipedia.org/wiki/Fritz_M%C3%BCller"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fritz_M%C3%BCller",
        "situacao": "ok",
        "texto": "Johann Friedrich Theodor Müller (German pronunciation: [ˈjoːhan ˈfʁiːdʁɪç ˈteːodoːɐ̯ ˈmʏlɐ]; 31 March 1822 – 21 May 1897), better known as Fritz Müller (Brazilian Portuguese: [ˈfɾits ˈmileʁ]), and also as Müller-Desterro, was a German biologist who emigrated to southern Brazil, where he lived in and near the city of Blumenau, Santa Catarina. There he studied the natural history of the Atlantic for\n[…]\nMüller was disappointed by the failure of the Prussian Revolution in 1848, fearing implications for his life and career. As a result, he emigrated to Brazil in 1852, with his brother August and their wives, to join Hermann Blumenau's new colony in the State of Santa Catarina. In Brazil, Müller became a farmer, doctor, teacher and biologist. During this time, he studied the natural history of the sub-tropical Atlantic forest, around the Itajaí River valley.\n[…]\nMüller became a strong supporter of Charles Darwin. He wrote Für Darwin in 1864, arguing that  Darwin's theory of evolution by natural selection was correct, and that Brazilian crustaceans and their larvae could be affected by adaptations at any growth stage. Müller sent a copy to Darwin, who had the book privately translated for his own use. A later translation into English, with some additional material by Müller, was made by W.S.\n[…]\nCezar Zillig, 1997. Dear Mr. Darwin. A intimidade da correspondência entre Fritz Müller e Charles Darwin. Sky/Anima Comunicação e Design, São Paulo, 241 pp. [letters between Müller and Darwin, with very interesting comments on the life of Fritz Müller. In Portuguese]\n[…]\nDavid A. West, 2003. Fritz Müller: A Naturalist in Brazil. Blacksburg: Pocahontas Press. ISBN 0-936015-92-6 [modern, and most welcome, though the biographical information rests almost entirely on Möller's book. West adds excellent summaries and assessments of Müller's biological work]\n[…]\nFritz Müller on mimicry"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Fritz_M%C3%BCller",
        "situacao": "ok",
        "texto": "Johann Friedrich Theodor Müller, também conhecido como Fritz Müller e Müller-Desterro (Erfurt, Alemanha, 31 de março de 1822 – Blumenau, Santa Catarina, 21 de maio de 1897), foi um naturalista, botânico e professor de matemática e ciências naturais teuto-brasileiro.\n[…]\nEstes estudos foram realizados no litoral de Santa Catarina, mais especificamente na “Praia de Fora”, em Florianópolis (antiga Desterro), praia esta hoje tomada pela Avenida Beira Mar Norte. Em seu estudo pioneiro com crustáceos, Fritz Müller realizou uma série de observações extraordinárias, que culminaram com o descobrimento de muitos fatos novos, principalmente no que se refere ao seu desenvolvimento.\n[…]\nO fechamento do laboratório foi parte do combate ao Colégio Liceo realizada em sua maioria por comerciantes e políticos locais, que temiam o fato de haver luteranos (Ricardo Becker, Carlos Parucher, Bukart e Fritz Müller) ministrando aulas, em um colégio laico subsidiado pelo governo da Província de Santa Catarina.\n[…]\nFritz Müller trocou cartas com diversos cientistas de todo o mundo. Foi reconhecido mundialmente pela publicação “Für Darwin” (Para Darwin - ano 1864), cinco anos após Charles Darwin publicar “A origem das espécies”. No livro, Fritz Müller apresenta argumentos que corroboram a teoria evolucionista, através de um estudo empírico sobre crustáceos na Ilha de Santa Catarina.\n[…]\nFritz Müller (1859). Polypen und Quallen von Santa Catharina (em alemão). [S.l.: s.n.]\n[…]\nDIAS, Thiago Cancelier, DALLABRIDA, Norberto. O Liceu da Província de Santa Catarina no Jogo do Poder (1857-1864). Revista Atos de Pesquisa em Educação (FURB),Vol. 4, No 1 (2009).\n[…]\nPAULI, Evaldo. Sentido catarinense e brasileiro de Fritz Müller. Blumenau: Fundação “Casa Dr. Blumenau” publ. Nº 2, 1973."
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Mimetismo batesiano",
      "descricao": "Forma de mimetismo em que uma espécie inofensiva imita a aparência de outra tóxica ou perigosa."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "O inglês Henry Bates descreveu borboletas inofensivas que imitam espécies tóxicas depois de passar onze anos explorando qual região?",
    "resposta": "Amazônia",
    "fonte": [
      "https://en.wikipedia.org/wiki/Batesian_mimicry",
      "https://en.wikipedia.org/wiki/Henry_Walter_Bates"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Batesian_mimicry",
        "situacao": "ok",
        "texto": "Batesian mimicry is a form of mimicry wherein a harmless species has evolved to imitate the warning signals of a harmful species in order to benefit from these signals' tendency to deter their mutual predators. It is named after the English naturalist Henry Walter Bates, who worked on butterflies in the rainforests of Brazil.\n[…]\nHenry Walter Bates (1825–1892) was an English explorer-naturalist who surveyed the Amazon rainforest with Alfred Russel Wallace in 1848. While Wallace returned in 1852, Bates remained for over a decade. Bates's field research included collecting almost a hundred species of butterflies from the families Ithomiinae and Heliconiinae, as well as thousands of other insects specimens. In sorting these butterflies into similar groups based on appearance, inconsistencies began to arise.\n[…]\nShortly after his return to England, he read a paper on his theory of mimicry at a meeting of the Linnean Society of London on 21 November 1861, which was then published in 1862 as 'Contributions to an Insect Fauna of the Amazon Valley' in the society's Transactions. He elaborated on his experiences further in The Naturalist on the River Amazons.\n[…]\nA case somewhat similar to Batesian mimicry is that of mimetic weeds, which imitate agricultural crops. In weed or Vavilovian mimicry, the weed survives by having seeds which winnowing machinery identifies as belonging to the crop. Vavilovian mimicry is not Batesian, because humans and crops are not enemies.\n[…]\nKin selection may enforce poor mimicry.\n[…]\nPhylogenetics of mimicry\n[…]\nLocomotor mimicry\n[…]\nWickler, W. (1968) Mimicry in Plants and Animals (Translated from the German) McGraw-Hill, New York. ISBN 0-07-070100-8 Especially the first two chapters.\n[…]\nReview of Contributions to an insect fauna of the Amazon valley by Charles Darwin The Complete Works of Charles Darwin Online."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Henry_Walter_Bates",
        "situacao": "ok",
        "texto": "Henry Walter Bates (8 February 1825 – 16 February 1892) was an English naturalist and explorer who gave the first scientific account of mimicry in animals. He was most famous for his expedition to the rainforests of the Amazon with Alfred Russel Wallace, starting in 1848. Wallace returned in 1852, but lost his collection on the return voyage when his ship caught fire.\n[…]\nWhen Bates arrived home in 1859 after a full eleven years, he had sent back over 14,712 species (mostly of insects) of which 8,000 were (according to Bates, but see Van Wyhe) new to science. Bates wrote up his findings in his best-known work, The Naturalist on the River Amazons (1863). Batesian mimicry is named in his honor.\n[…]\nBates's work on Amazonian butterflies led him to develop the first scientific account of mimicry, especially the kind of mimicry which bears his name: Batesian mimicry. This is the mimicry by a palatable species of an unpalatable or noxious species. A common example seen in temperate gardens is the hover-fly, many of which – though bearing no sting – mimic the warning colouration of hymenoptera (wasps and bees).\n[…]\nDickenson, John. 1992. \"The Naturalist on the River Amazons and a wider world: reflections on the centenary of Henry Walter Bates\". The Geographical Journal, 158(2): 207–214. (Fine tribute to Bates on the centenary of his death.)\n[…]\nWoodcock G 1969. Henry Walter Bates, Naturalist of the Amazons. Faber & Faber, London. (This, the only book-length biography, is by an author who was not a biologist. It gives a weak account of Bates's work on mimicry, says nothing about Müller, and remarks about Wallace are undistinguished. It is good on Bates's early life and his marriage, and on the travel aspects of the Amazon. The author dismisses Bates's later life too abruptly.)\n[…]\nWorks by Henry Walter Bates at LibriVox (public domain audiobooks)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mimetismo_batesiano",
        "situacao": "ok",
        "texto": "Mimetismo batesiano é uma forma de mimetismo em que uma espécie evolui características morfológicas ou outras que a fazem parecer com outra espécie considerada repugnante pelo predador, concedendo-lhe uma certa protecção contra predação. O mecanismo foi proposto por Henry Walter Bates, após o seu trabalho nas florestas tropicais do Brasil.\n[…]\nAlgumas espécies exibem uma coloração aposemática, mas não possuem qualidades nocivas por trás desse aviso. Esse fenômeno é chamado de Mimetismo Batesiano, em homenagem ao naturalista Henry Walter Bates, que primeiro descreveu esse tipo de mimetismo ao observar borboletas na América do Sul.\n[…]\nBates observou que as espécies de uma família de borboletas que possuíam um cheiro muito desagradável confundiam-se com outras sem essa propriedade e que pertenciam a outra família. As borboletas era tão parecidas morfologicamente que apenas era possível distingui-las depois de examinar cada detalhe. Henry W. Bates chegou à conclusão que as borboletas inofensivas eram protegidas por parecerem com as de odor desagradável, e elas não eram atacadas por seus predadores habituais.\n[…]\nPapilio dardanus (Papilionidae) é um dos lepidópteros polimórficos mais conhecidos. Esta espécie está restrita à região Etiópica, havendo oito raças ao longo de sua distribuição. O polimorfismo existente em P. dardanus é interpretado com uma estratégia antipredatória, pois as diferentes formas são mímicos batesianos de outras espécies de borboletas que vivem no mesmo ambiente e que são altamente impalatáveis.\n[…]\n«mimetismo - Infopédia». Consultado em 15 de setembro de 2010\n[…]\nARANGO, L. Identificación de las especies miméticas de mariposas em la Reserva Natural Karagabí y el Jardim Botânico de Pueblo Rico (Pueblo Rico, Risaralda, Colombia) Parte I. p. 317-327. Boletín Museo de Historia Natural. Pueblo Rico, Colombia.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Linha de Wallace",
      "descricao": "Fronteira biogeográfica traçada por Alfred Russel Wallace que separa a fauna asiática da australiana."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "A Linha de Wallace, fronteira entre a fauna asiática e a australiana, passa entre as ilhas de Bali e Lombok. Em que país?",
    "resposta": "Indonésia",
    "distratores": [
      "Malásia",
      "Filipinas",
      "Papua-Nova Guiné"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Wallace_Line"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Wallace_Line",
        "situacao": "ok",
        "texto": "The Wallace Line or Wallace's Line is a faunal boundary line drawn in 1859 by the British naturalist Alfred Russel Wallace and named by the English biologist Thomas Henry Huxley.\n[…]\nIt separates the biogeographic realms of Asia and 'Wallacea', a transitional zone between Asia and Australia formerly also called the Malay Archipelago and the Indo-Australian Archipelago (present day Indonesia). To the west of the line are found organisms related to Asiatic species; to the east, a mixture of species of Asian and Australian origins is present. Wallace noticed this clear division in both land mammals and birds during his travels through the East Indies in the 19th century.\n[…]\nThe line runs through Indonesia, such as Makassar Strait between Borneo and Sulawesi (Celebes), and through the Lombok Strait between Bali and Lombok, where the distance is strikingly small, only about 35 kilometers (22 mi), but enough for a contrast between the species present on the two islands.\n[…]\nWallace's Line is one of the many boundaries drawn by naturalists and biologists since the mid-1800s intended to delineate constraints on the distribution of the fauna and flora of the archipelago.\n[…]\nLydekker's line (1896)\n[…]\n(2020), in a different attempt, studied the fauna of Christmas Island and indicated that most of the ancestral colonizers of the island's land mammals and amphibians disappeared from the Lombok Strait. Therefore, they propose a re-conformation of Wallace's Line so that Christmas Island would be sited on the Australasian side of the biogeographical divide, instead of the oriental side.\n[…]\nGeography of Indonesia\n[…]\nvan Oosterzee, Penny (1997). Where Worlds Collide: Wallace line."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Linha_de_Wallace",
        "situacao": "ok",
        "texto": "A Linha de Wallace é uma fronteira que separa as regiões zoogeográficas da Ásia e da Australásia. A oeste e a norte da linha estão os organismos relacionados ao ecossistema asiático; a leste e a sul, os relacionados às espécies australasiáticas ou oceânicas. A linha foi identificada pelo naturalista Alfred Russel Wallace, e foi em sua homenagem que foi assim designada.\n[…]\nAlfred Wallace foi o primeiro a notar a divisão entre os dois ecossistemas durante suas viagens pelas Índias Orientais no século XIX. A linha atravessa o Arquipélago Malaio, entre Bornéu e Celebes, e entre Bali (a oeste) e Lombok (a leste). Evidências da divisória já haviam sido notadas 300 anos antes por Antonio Pigafetta nos contrastes biológicos entre as Filipinas e as Ilhas das Especiarias, durante a viagem de Fernão de Magalhães em 1521.\n[…]\nA distância entre Bali e Lombok é pequena, apenas cerca de 35 km. As distribuições de várias espécies de aves observam a linha, já que vários pássaros se recusam a atravessar até mesmo os menores estreitos de mar aberto. Vários mamíferos voadores (morcegos) se distribuem em dos dois lados da Linha de Wallace, mas as espécies que não voam geralmente se limitam a um lado ou outro com raras exceções (como os roedores Hystrix).\n[…]\nA Australásia não se encerra em nenhuma área zoológica una, já que a fauna da Nova Zelândia é completamente diferente daquela na Austrália. Alguns zoólogos sugerem um termo para uma sub-área distinta compreendendo a Austrália, a Tasmânia e a Nova Guiné, dominada por marsupiais. Os nomes sugeridos para essa área são \"Meganésia\", \"Sahul\" ou \"Australínea\".\n[…]\nAustrália-Nova Guiné\n[…]\nWallacea\n[…]\nLinha de Weber\n[…]\nLinha de Lydekker\n[…]\nvan Ooosterzee, Penny (1997). Where Worlds Collide: the Wallace Line.\n[…]\n«Wallacea e outras linhas»\n[…]\n«tectónica de placas e a criação da linha de Wallace»\n[…]\n«Wallacea.»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Células HeLa",
      "descricao": "Linhagem de células humanas cultivadas continuamente desde 1951, retiradas de um tumor de Henrietta Lacks."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "As células HeLa foram retiradas em 1951 de uma paciente do hospital Johns Hopkins. Em que cidade americana?",
    "resposta": "Baltimore",
    "fonte": [
      "https://en.wikipedia.org/wiki/HeLa",
      "https://en.wikipedia.org/wiki/Henrietta_Lacks"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/HeLa",
        "situacao": "ok",
        "texto": "HeLa () is an immortalized cell line used in scientific research. It is the oldest human cell line and one of the most commonly used. HeLa cells are durable and prolific, allowing for extensive applications in scientific study. The line is derived from cervical cancer cells taken on February 8, 1951, from Henrietta Lacks, a 31-year-old African-American woman, after whom the line is named. Lacks di\n[…]\nIn 1951, Henrietta Lacks was admitted to the Johns Hopkins Hospital with symptoms of irregular vaginal bleeding; she was subsequently treated for cervical cancer. Her original tumor, initially diagnosed as an epidermoid (squamous cell) carcinoma, was later reclassified as an adenocarcinoma of the cervix. Her first treatment was performed by Lawrence Wharton Jr., who at that time collected tissue samples from her cervix without her consent.\n[…]\nIn 1973, staff at Johns Hopkins discovered that HeLa cells could travel through the air and easily contaminate other cell cultures. When staff at Johns Hopkins realized this, a staff physician contacted the Lacks family and sought DNA samples to help identify which non-HeLa cultures were contaminated with HeLa cells. The family never understood the purpose of the visit, but they were distressed by their understanding of what the researchers told them.\n[…]\nLacks's case is one of many examples of the lack of informed consent in 20th-century medicine. Communication between tissue donors and doctors was virtually nonexistent—cells were taken without patient consent, and patients were not told what the cells would be used for. Johns Hopkins Hospital, where Lacks received treatment and had her tissue harvested, was the only hospital in the Baltimore area where African American patients could receive free care.\n[…]\nHeLa Transfection and Selection Data for HeLa Cells\n[…]\nCell Centered Database – HeLa cell\n[…]\nCellosaurus entry for HeLa"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Henrietta_Lacks",
        "situacao": "ok",
        "texto": "Henrietta Lacks (née Loretta Pleasant; August 1, 1920 – October 4, 1951) was an African-American woman whose cancer cells are the source of the HeLa cell line, the first immortalized human cell line and one of the most important cell lines in medical research. An immortalized cell line reproduces indefinitely under specific conditions, and the HeLa cell line continues to be a source of invaluable \n[…]\nLacks was the unwitting source of these cells from a tumor biopsied during her treatment for cervical cancer at the Johns Hopkins Hospital in Baltimore, Maryland, in 1951. These cells were then cultured by George Otto Gey, who created the cell line known as HeLa, which is still used for medical research. As was then the practice, no consent was required to culture the cells obtained from Lacks's treatment.\n[…]\nLiving in Maryland, Henrietta and Day Lacks had three more children: David \"Sonny\" Lacks Jr. (1947–2022), Deborah Lacks (later known as Deborah Lacks Pullum, 1949–2009), and Joseph Lacks (later known as Zakariyya Bari Abdul Rahman after converting to Islam, 1950–2020). Henrietta gave birth to her last child at the Johns Hopkins Hospital in Baltimore in November 1950, four and a half months before she was diagnosed with cervical cancer.\n[…]\nOn August 8, 1951, Lacks, who was 31 years old, went to Johns Hopkins for a routine treatment session and asked to be admitted due to continued severe abdominal pain. She received blood transfusions and remained at the hospital until her death on October 4, 1951. A partial autopsy showed that the cancer had metastasized throughout her entire body.\n[…]\nThe HeLa Project, a multimedia exhibition to honor Lacks, opened in 2017 in Baltimore at the Reginald F. Lewis Museum of Maryland African American History & Culture. It included a portrait by Kadir Nelson and a poem by Saul Williams."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/HeLa",
        "situacao": "ok",
        "texto": "Uma célula HeLa (pronúncia em inglês: [ˈhiːlɑː]) ou ainda Hela ou célula hela, é um tipo de célula imortal usada ​​em pesquisas científicas. Esta é a linhagem celular humana mais antiga e mais utilizada. A linhagem foi derivada a partir de células obtidas de um câncer cervical coletadas em 8 de fevereiro de 1951 de Henrietta Lacks, uma paciente que acabou por morrer de seu câncer em 4 de outubro d\n[…]\nAs células HeLa, tal como outras linhas de células, são denominadas \"imortais\", no sentido de que se dividem um ilimitado número de vezes, em uma placa de cultura de células de laboratório enquanto encontrar condições de sobrevivência fundamentais (isto é, para serem mantidas em um ambiente adequado). Há muitas cepas de células HeLa, já que elas continuam a evoluir em cultura de células, mas todas as células HeLa são descendentes das mesmas células tumorais retiradas da senhora Lacks.\n[…]\nEm 2011, as células HeLa foram utilizadas em ensaios de corantes heptametina IR-808 e outros análogos que estão actualmente sendo explorados para as suas utilizações originais em diagnóstico médico, o desenvolvimento de terapias e diagnósticos, o tratamento individualizado de pacientes com câncer com a ajuda de terapia fotodinâmica, co-administração com outras drogas e radiação.\n[…]\nAberrações cromossômicas numéricas e estruturais identificadas pela SKY, desequilíbrios genômicos detectados por CGH, bem como FISH localização de HPV18 integração no locus c-MYC em células HeLa são comuns e representante para a fase carcinomas cervicais avançadas.\n[…]\nAlém disso, alguns pacientes terminais haviam recebido, por engano, células Hela ao invés de células normais em testes de algumas vacinas: acabaram por desenvolver lesões estranhas e vieram a falecer.\n[…]\nA incompatibilidade cromossômica das células HeLa com humanos.\n[…]\nO nicho ecológico das células HeLa.\n[…]\nEntrada do Cellosaurus para HeLa",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Células HeLa",
      "descricao": "Linhagem de células humanas cultivadas continuamente desde 1951, retiradas de um tumor de Henrietta Lacks."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Células humanas comuns morrem depois de algumas dezenas de divisões. O que as células HeLa fazem de diferente em laboratório?",
    "resposta": "Dividem-se indefinidamente",
    "fonte": [
      "https://en.wikipedia.org/wiki/HeLa"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/HeLa",
        "situacao": "ok",
        "texto": "HeLa () is an immortalized cell line used in scientific research. It is the oldest human cell line and one of the most commonly used. HeLa cells are durable and prolific, allowing for extensive applications in scientific study. The line is derived from cervical cancer cells taken on February 8, 1951, from Henrietta Lacks, a 31-year-old African-American woman, after whom the line is named. Lacks di\n[…]\nHeLa cells, like other cell lines, are termed \"immortal\" because they can divide an unlimited number of times in a laboratory cell culture plate, as long as fundamental cell survival conditions are met (i.e. being maintained and sustained in a suitable environment). There are many strains of HeLa cells, because they mutate during division in cell cultures, but all HeLa cells are descended from the same tumor cells removed from Lacks.\n[…]\nIn the 1960s, HeLa cells were sent on one of the early satellite missions to determine the long term effects of space travel on living cells and tissues. Scientists discovered that HeLa cells divide more quickly in zero gravity.\n[…]\nKaryotypic, microarray, genomic, epigenomic, and transcriptomic data have allowed researchers to appreciate the scale and effect of the divergence among the many HeLa strains stored around the world's laboratories.\n[…]\nHeLa cells were described by evolutionary biologist Leigh Van Valen as an example of the contemporary creation of a new species, dubbed Helacyton gartleri, owing to their ability to replicate indefinitely and their non-human number of chromosomes. The species was named after geneticist Stanley M. Gartler, whom Van Valen credits with discovering \"the remarkable success of this species\" (in the sense of having contaminated many other cell lines). His argument for speciation depends on these points:\n[…]\nHeLa Transfection and Selection Data for HeLa Cells\n[…]\nCell Centered Database – HeLa cell\n[…]\nCellosaurus entry for HeLa"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/HeLa",
        "situacao": "ok",
        "texto": "Uma célula HeLa (pronúncia em inglês: [ˈhiːlɑː]) ou ainda Hela ou célula hela, é um tipo de célula imortal usada ​​em pesquisas científicas. Esta é a linhagem celular humana mais antiga e mais utilizada. A linhagem foi derivada a partir de células obtidas de um câncer cervical coletadas em 8 de fevereiro de 1951 de Henrietta Lacks, uma paciente que acabou por morrer de seu câncer em 4 de outubro d\n[…]\nAs células HeLa, tal como outras linhas de células, são denominadas \"imortais\", no sentido de que se dividem um ilimitado número de vezes, em uma placa de cultura de células de laboratório enquanto encontrar condições de sobrevivência fundamentais (isto é, para serem mantidas em um ambiente adequado). Há muitas cepas de células HeLa, já que elas continuam a evoluir em cultura de células, mas todas as células HeLa são descendentes das mesmas células tumorais retiradas da senhora Lacks.\n[…]\nO escritor de ciência Michael Gold escreveu sobre o problema de contaminação de células HeLa em seu livro A Conspiração das Células. Ele descreve a identificação deste problema mundial generalizado de Nelson-Rees - afetando até mesmo os laboratórios dos melhores médicos, cientistas e pesquisadores, incluindo Jonas Salk - e muitos, possivelmente os esforços para combatê-lo.\n[…]\nAlém disso, alguns pacientes terminais haviam recebido, por engano, células Hela ao invés de células normais em testes de algumas vacinas: acabaram por desenvolver lesões estranhas e vieram a falecer.\n[…]\nDevido à sua capacidade de se replicar indefinidamente e seu número não-humano de cromossomas, a HeLa foi descrita por Leigh Van Valen como um exemplo da criação contemporânea de uma nova espécie, a Helacyton gartleri. A espécie foi nomeada em homenagem a Stanley M. Gartler, a quem Valen credita por descobrir \"o notável sucesso desta espécie.\" Seu argumento para a especiação depende destes pontos:\n[…]\nO nicho ecológico das células HeLa.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Systema Naturae",
      "descricao": "Obra de Carl Lineu, com primeira edição em 1735, que organizou a classificação dos seres vivos."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Lineu publicou a primeira edição do Systema Naturae em 1735, longe da Suécia. Em que país?",
    "resposta": "Holanda (Países Baixos)",
    "fonte": [
      "https://en.wikipedia.org/wiki/Systema_Naturae"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Systema_Naturae",
        "situacao": "ok",
        "texto": "Systema Naturae (originally in Latin written Systema Naturæ with the ligature æ) is one of the major works of Swedish botanist, zoologist, and physician Carl Linnaeus (1707–1778) and introduced the Linnaean taxonomy. Although the system, now known as binomial nomenclature, was partially developed by the Bauhin brothers, Gaspard and Johann, Linnaeus was the first to use it consistently throughout h\n[…]\nLinnaeus (later known as \"Carl von Linné\", after his ennoblement in 1761) published the first edition of Systema Naturae in 1735, during his stay in the Netherlands. As was customary for the scientific literature of its day, the book was published in Latin. In it, he outlined his ideas for the hierarchical classification of the natural world, dividing it into the animal kingdom (regnum animale), the plant kingdom (regnum vegetabile), and the \"mineral kingdom\" (regnum lapideum).\n[…]\nAfter Linnaeus' health declined in the early 1770s, publication of editions of Systema Naturae went in two directions. Another Swedish scientist, Johan Andreas Murray, issued the Regnum Vegetabile section separately in 1774 as the Systema Vegetabilium, confusingly labelled the 13th edition. Meanwhile, a 13th edition of the entire Systema appeared in parts between 1788 and 1793.\n[…]\nThe orders and classes of plants, according to his Systema Sexuale, were never intended to represent natural groups (as opposed to his ordines naturales in his Philosophia Botanica), but only for use in identification. They were used in that sense well into the 19th century.\n[…]\nGmelin's 13th (decima tertia) edition of  Systema Naturae (1788–1793) should be carefully distinguished from the more limited  Systema Vegetabilium first prepared and published  by Johan Andreas Murray in 1774 (but labelled as \"thirteenth edition\").\n[…]\n10th edition of Systema Naturae\n[…]\n12th edition of Systema Naturae\n[…]\nSystema Naturae at the Internet Archive"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Systema_Naturae",
        "situacao": "ok",
        "texto": "Systema Naturae (de nome completo: Systema naturae per regna tria naturae, secundum classes, ordines, genera, species, cum characteribus differentiis, synonymis, locis) foi um livro escrito por Lineu, no qual seu autor faz a delineação das suas ideias para uma classificação hierárquica das espécies. Lineu concebeu o seu \"Systema\" dividindo a Natureza em três reinos: Animalia, Vegetalia e Mineralia\n[…]\nFoi publicado em latim, tendo a sua primeira edição visto a luz do dia em 1735.\n[…]\nEnquanto a primeira edição continha apenas 11 páginas, a 13ª edição, em 1770, já tinha já 3000 páginas.\n[…]\nA 10ª  edição do Systema Naturae de Linnaeus, editada no ano de 1758, é o trabalho que iniciou a aplicação geral da nomenclatura binomial zoológica. Portanto, esta data é aceita como ponto de partida da nomeclatura zoológica e da lei da prioridade.\n[…]\nSystema naturae está incluído – desde 2025 – no Cânone Cultural da Suécia (Sveriges kulturkanon), uma lista oficial de obras e realizações particularmente importantes para a herança cultural do país.\n[…]\nAs ordens e classes de plantas, de acordo com a sua obra Systema Sexuale, nunca foram previstas representar grupos naturais (em oposição a ordines naturales na sua obra Philosophia Botanica) mas apenas para uso em identificação. Foram usados nesse sentido até ao século XIX. As classes lineanas para as plantas, no seu sistema sexual, eram:\n[…]\n10.ª edição de Systema Naturae\n[…]\nLineu",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Systema Naturae",
      "descricao": "Obra de Carl Lineu, com primeira edição em 1735, que organizou a classificação dos seres vivos."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No Systema Naturae, Lineu dividiu a natureza em três reinos: o animal, o vegetal e qual outro?",
    "resposta": "Mineral",
    "fonte": [
      "https://en.wikipedia.org/wiki/Systema_Naturae"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Systema_Naturae",
        "situacao": "ok",
        "texto": "Systema Naturae (originally in Latin written Systema Naturæ with the ligature æ) is one of the major works of Swedish botanist, zoologist, and physician Carl Linnaeus (1707–1778) and introduced the Linnaean taxonomy. Although the system, now known as binomial nomenclature, was partially developed by the Bauhin brothers, Gaspard and Johann, Linnaeus was the first to use it consistently throughout h\n[…]\nThe full title of the 10th edition (1758), which was the most important one, was Systema naturæ per regna tria naturæ, secundum classes, ordines, genera, species, cum characteribus, differentiis, synonymis, locis, which appeared in English in 1806 with the title: \"A General System of Nature, Through the Three Grand Kingdoms of Animals, Vegetables, and Minerals, Systematically Divided Into their Several Classes, Orders, Genera, Species, and Varieties, with their Habitations, Manners, Economy, Structure and Peculiarities\".\n[…]\nLinnaeus (later known as \"Carl von Linné\", after his ennoblement in 1761) published the first edition of Systema Naturae in 1735, during his stay in the Netherlands. As was customary for the scientific literature of its day, the book was published in Latin. In it, he outlined his ideas for the hierarchical classification of the natural world, dividing it into the animal kingdom (regnum animale), the plant kingdom (regnum vegetabile), and the \"mineral kingdom\" (regnum lapideum).\n[…]\nIn his Imperium Naturæ, Linnaeus established three kingdoms, namely Regnum Animale, Regnum Vegetabile, and Regnum Lapideum. This approach, the Animal, Vegetable, and Mineral Kingdoms, survives until today in the popular mind, notably in the form of parlour games: \"Is it animal, vegetable or mineral?\" The classification was based on five levels: kingdom, class, order, genus, and species.\n[…]\nClassis 2. Mineræ (minerals and ores)\n[…]\nSystema Vegetabilium\n[…]\nSystema Naturae at the Internet Archive"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Systema_Naturae",
        "situacao": "ok",
        "texto": "Systema Naturae (de nome completo: Systema naturae per regna tria naturae, secundum classes, ordines, genera, species, cum characteribus differentiis, synonymis, locis) foi um livro escrito por Lineu, no qual seu autor faz a delineação das suas ideias para uma classificação hierárquica das espécies. Lineu concebeu o seu \"Systema\" dividindo a Natureza em três reinos: Animalia, Vegetalia e Mineralia\n[…]\nA 10ª  edição do Systema Naturae de Linnaeus, editada no ano de 1758, é o trabalho que iniciou a aplicação geral da nomenclatura binomial zoológica. Portanto, esta data é aceita como ponto de partida da nomeclatura zoológica e da lei da prioridade.\n[…]\nSystema naturae está incluído – desde 2025 – no Cânone Cultural da Suécia (Sveriges kulturkanon), uma lista oficial de obras e realizações particularmente importantes para a herança cultural do país.\n[…]\nAs ordens e classes de plantas, de acordo com a sua obra Systema Sexuale, nunca foram previstas representar grupos naturais (em oposição a ordines naturales na sua obra Philosophia Botanica) mas apenas para uso em identificação. Foram usados nesse sentido até ao século XIX. As classes lineanas para as plantas, no seu sistema sexual, eram:\n[…]\n10.ª edição de Systema Naturae\n[…]\nLineu",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Abelha africanizada",
      "descricao": "Abelha híbrida de abelhas africanas e europeias, que se espalhou pelas Américas a partir do Brasil nos anos cinquenta."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Nos anos cinquenta, abelhas africanas trazidas para pesquisa pelo geneticista Warwick Kerr escaparam e se espalharam a partir de qual estado?",
    "resposta": "São Paulo",
    "distratores": [
      "Rio Grande do Sul",
      "Paraná",
      "Minas Gerais"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Africanized_bee"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Africanized_bee",
        "situacao": "ok",
        "texto": "The Africanized bee, also known as the Africanized honey bee (AHB) and colloquially as the \"killer bee\", is a hybrid of the western honey bee (Apis mellifera), produced originally by crossbreeding of the African honey bee (A. m. scutellata) with various European honey bee subspecies such as the Italian honey bee (A. m. ligustica) and the Iberian honey bee (A. m. iberiensis).\n[…]\nThe Africanized honey bees in the Western Hemisphere are descended from hives operated by biologist Warwick E. Kerr, who had interbred honey bees from Europe and southern Africa. Kerr was attempting to breed a strain of bees that would produce more honey in tropical conditions than the European strain of honey bee then in use throughout North, Central, and South America.\n[…]\nThe hives containing this particular African subspecies were housed at an apiary near Rio Claro, São Paulo, in the southeast of Brazil, and were noted to be especially defensive. These hives had been fitted with special excluder screens (called queen excluders) to prevent the larger queen bees and drones from leaving and mating with the local European bee population.\n[…]\nIn Puerto Rico, some bee colonies are already showing gentler behavior. This is believed to be because the gentler bees contain genetic material more similar to that of the European honey bee, although they also contain Africanized honey bee material. This degree of aggressiveness is surprisingly almost unrelated to individual genetics – instead being almost entirely determined by the entire hive's proportion of aggression genetics.\n[…]\nCollet T.; Ferreira K.M.; Arias M.C.; Soares A.E.E.; Del Lama M.A. (2006). \"Genetic structure of African honeybee populations (Apis mellifera L.) from Brazil and Uruguay viewed through mitochondrial DNA COI–COII patterns\". Heredity. 97 (5): 329–335. doi:10.1038/sj.hdy.6800875. PMID 16955114. S2CID 19266223."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Abelha_africanizada",
        "situacao": "ok",
        "texto": "A abelha africanizada ou abelha do mel africanizado, também conhecida coloquialmente como \"abelha assassina\", é uma híbrida de espécies ocidentais de abelha (Apis mellifera) com abelhas africanas (A. m. Scutellata). São produzidas originalmente por cruzamento da abelha africana, com abelhas europeias, como a abelha italiana (A. m. Ligustica) e a abelha ibérica (Apis mellifera iberiensis).\n[…]\nA abelha africanizada foi criada e introduzida pela primeira vez no Brasil na década de 1950, em um esforço para aumentar a produção de mel, mas em 1957, 26 enxames escaparam acidentalmente da quarentena. Desde então, a nova espécie híbrida se espalhou por toda a América do Sul e chegou à América do Norte em 1985. Várias colmeias da espécie foram encontradas no sul do estado americano do Texas em 1990.\n[…]\nAs abelhas africanizadas do hemisfério ocidental são descendentes de colmeias operadas pelo biólogo e geneticista brasileiro Warwick Estevam Kerr, que tinha intercorrido a abelhas da Europa e da África Austral. Kerr estava tentando criar uma cepa de abelhas que produziria mais mel e que melhor se adaptava às condições tropicais (ou seja, mais produtiva) do que a cepa europeia de abelha, atualmente em uso em toda a América do Norte, Central e do Sul.\n[…]\nAs colmeias que continham a subespécie africana em particular, estavam alojadas em quarentena num apiário perto da cidade de Rio Claro no estado de São Paulo, região sudeste do Brasil e possuíam um alto nível de segurança. Essas colmeias haviam sido equipadas com telas de proteção especiais, para evitar que abelhas e zangões maiores saíssem e acasalassem com a população local de abelhas europeias.\n[…]\nTodo apiário composto por raças de abelhas africanas ou africanizadas deve ter suas instalações sinalizadas e afastadas de qualquer residência, bem como de transeuntes, estradas ou alojamentos de animais.\n[…]\n«Abelhas Africanizadas - UFV»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Lysenkoísmo",
      "descricao": "Doutrina do agrônomo Trofim Lysenko que rejeitava a genética mendeliana e foi imposta oficialmente na União Soviética."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em que país as ideias do agrônomo Trofim Lysenko, que negavam a genética de Mendel, foram doutrina oficial até os anos sessenta?",
    "resposta": "União Soviética",
    "fonte": [
      "https://en.wikipedia.org/wiki/Lysenkoism"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lysenkoism",
        "situacao": "ok",
        "texto": "Lysenkoism was a pseudoscientific political campaign led by the Soviet biologist Trofim Lysenko against genetics and science-based agriculture in the mid-20th century, rejecting natural selection in favour of a form of Lamarckism, as well as expanding upon the techniques of vernalization and grafting.\n[…]\nGenetics was eventually banned in the Soviet Union. Over 3,000 biologists were fired, and numerous scientists were imprisoned, or executed for attempting to oppose Lysenkoism, and genetics research was effectively destroyed until the death of Stalin in 1953. Secret research facilities such as sharashka were where numerous scientists ended up imprisoned.\n[…]\nFrom 1934 to 1940, under Lysenko's admonitions and with Stalin's approval, many geneticists were executed (including Izrail Agol, Solomon Levit, Grigorii Levitskii, Georgii Karpechenko and Georgii Nadson) or sent to labor camps. The famous Soviet geneticist and president of the Agriculture Academy, Nikolai Vavilov, was arrested in 1940 and died in prison in 1943.\n[…]\nIn Communist Poland, Lysenkoism was aggressively pushed by state propaganda, signalling the newly founded Polish state's loyalty to the Soviet Union. State newspapers attacked \"damage caused by bourgeois Mendelism-Morganism\" and \"imperialist genetics\", comparing it to Mein Kampf. For example, Trybuna Ludu published an article titled \"French scientists recognize superiority of Soviet science\" by Pierre Daix, repeating Soviet propaganda claims.\n[…]\nLysenkoist theories and practices were attempted in North Vietnam, often in conjunction with the pedological theories of Vasili Williams as part of a broader diffusion of Soviet agronomy.\n[…]\nValery N. Soyfer, Lysenko and the Tragedy of Soviet Science (New Brunswick, New Jersey: Rutgers University Press, 1994). ISBN 0813520878"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lysenkoismo",
        "situacao": "ok",
        "texto": "O Lysenkoismo (do russo лысенковщина, transliterado como lysenkovshchina), também conhecido como Lysenko-Michurinismo, foi uma corrente agronômica e política desenvolvida na União Soviética sob a liderança de Trofim Lysenko durante as décadas de 1930 e 1960. O movimento exerceu forte influência sobre a biologia, a genética e a agricultura soviéticas, especialmente por meio do controle instituciona\n[…]\nAs ideias defendidas por Lysenko rejeitavam princípios fundamentais da genética mendeliana e da teoria cromossômica da hereditariedade, consideradas por ele incompatíveis com o materialismo dialético soviético. Em seu lugar, Lysenko defendia uma versão modernizada da herança de caracteres adquiridos, inspirada em interpretações do Lamarquismo e associada às ideias agrícolas de Ivan Michurin, motivo pelo qual o movimento também ficou conhecido como “Michurinismo”.\n[…]\nDurante o período stalinista, o Lysenkoismo recebeu amplo apoio político do governo soviético. Em 1948, após uma sessão da VASKhNIL apoiada por Josef Stalin, a genética clássica foi oficialmente condenada na União Soviética, e muitos geneticistas perderam seus cargos, foram perseguidos politicamente ou presos. Entre os cientistas afetados destacou-se Nikolai Vavilov, importante geneticista soviético que morreu na prisão em 1943 após ser acusado de defender teorias consideradas “burguesas”.\n[…]\nA influência do Lysenkoismo começou a declinar após a morte de Stalin em 1953, embora Lysenko tenha permanecido em posições de poder por vários anos. Em 1964, após críticas crescentes da comunidade científica soviética, Lysenko foi afastado da direção da VASKhNIL, marcando o declínio formal do movimento.\n[…]\nPesquisa reprimida na União Soviética\n[…]\n«'Lysenkoism'» , The Skeptic's Dictionary",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Debate de Oxford de 1860",
      "descricao": "Debate sobre a teoria da evolução entre Thomas Huxley e o bispo Samuel Wilberforce, em junho de 1860."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em 1860, num debate, o bispo Wilberforce teria perguntado a Thomas Huxley se ele descendia de macaco pelo avô ou pela avó. Em que cidade?",
    "resposta": "Oxford",
    "fonte": [
      "https://en.wikipedia.org/wiki/1860_Oxford_evolution_debate"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/1860_Oxford_evolution_debate",
        "situacao": "ok",
        "texto": "The 1860 Oxford evolution debate took place at the Oxford University Museum in Oxford, England, on 7 July 1860, seven months after the publication of Charles Darwin's On the Origin of Species. Several prominent British scientists and philosophers participated, including Thomas Henry Huxley, Bishop Samuel Wilberforce, Benjamin Brodie, Joseph Dalton Hooker and Robert FitzRoy.\n[…]\nHowever, what Huxley and Wilberforce actually said is uncertain, and subsequent accounts were subject to distortion since no verbatim account of the debate exists.\n[…]\nThe controversy was at the centre of attention when the British Association for the Advancement of Science (often referred to then simply as \"the BA\") convened their annual meeting at the new Oxford University Museum of Natural History in June 1860. On Thursday 28 June, Charles Daubeny read a paper \"On the final causes of the sexuality in plants, with particular reference to Mr. Darwin's work...\" Owen and Huxley were both in attendance, and a debate erupted over Darwin's theory.\n[…]\nIn the Nat. Hist. Section we had another hot Darwinian debate ... After [lengthy preliminaries] Huxley was called upon by Henslow to state his views at greater length, and this brought up the Bp. of Oxford ... Referring to what Huxley had said two days before, about after all its not signifying to him whether he was descended from a Gorilla or not, the Bp. chafed him and asked whether he had a preference for the descent being on the father's side or the mother's side?\n[…]\nOn the other hand, Oxford academic Dr Diane Purkiss says the debate \"was really the first time Christianity had ever been asked to square off against science in a public forum in the whole of its history\".\n[…]\nThomas Henry Huxley\n[…]\nHesketh, Ian (2009). Of Apes and Ancestors: Evolution, Christianity, and the Oxford Debate. Toronto: University of Toronto Press. ISBN 978-0-8020-9284-7."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Debate_evolutivo_em_Oxford_de_1860",
        "situacao": "ok",
        "texto": "O Debate sobre a evolução em Oxford em 1860 aconteceu no Museu da Universidade de Oxford em Oxford, Inglaterra, em 7 de julho de 1860, sete meses após a publicação de On the Origin of Species, de Charles Darwin. Vários cientistas e filósofos britânicos proeminentes participaram, incluindo Thomas Henry Huxley, o bispo Samuel Wilberforce, Benjamin Brodie, Joseph Dalton Hooker e Robert FitzRoy.\n[…]\nHoje em dia, o debate é mais lembrado pela troca de farpas em que, supostamente, Wilberforce perguntou a Huxley se ele reivindicava sua descendência de um macaco por parte do avô ou da avó. Diz-se que Huxley teria respondido que não se envergonharia de ter um macaco como ancestral, mas se envergonharia de estar associado a um homem que usasse seus grandes talentos para obscurecer a verdade.\n[…]\nA controvérsia foi o centro das atenções quando a British Association for the Advancement of Science (na época, muitas vezes chamada apenas de “the BA”) reuniu-se no novo Museu da Universidade de Oxford, em junho de 1860. Na quinta-feira, 28 de junho, Charles Daubeny apresentou um artigo “Sobre as causas finais da sexualidade em plantas, com referência especial à obra do Sr. Darwin...”. Owen e Huxley estavam presentes, e surgiu um debate sobre a teoria de Darwin.\n[…]\nDepois de [longos preparativos] Huxley foi convidado por Henslow a expor suas opiniões com mais detalhes, o que levou o bispo (Bp.) de Oxford a levantar-se... Fazendo referência ao que Huxley dissera dois dias antes, sobre, afinal de contas, não ter importância para ele se era descendente de um Gorila ou não, o bispo provocou-o e perguntou se ele tinha preferência de ser descendente de macaco por parte de pai ou de mãe?\n[…]\nThomas Henry Huxley\n[…]\nHesketh, Ian (2009). Of Apes and Ancestors: Evolution, Christianity, and the Oxford Debate. Toronto: University of Toronto Press. ISBN 978-0-8020-9284-7",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Charles Darwin",
      "descricao": "Naturalista inglês autor da teoria da evolução por seleção natural."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Apesar da polêmica religiosa causada por suas ideias, onde Charles Darwin foi sepultado em 1882?",
    "resposta": "Abadia de Westminster",
    "fonte": [
      "https://en.wikipedia.org/wiki/Charles_Darwin"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Charles_Darwin",
        "situacao": "ok",
        "texto": "Charles Robert Darwin ( DAR-win; 12 February 1809 – 19 April 1882) was an English naturalist, geologist, and biologist, widely known for his contributions to evolutionary biology. His proposition that all species of life have descended from a common ancestor is now generally accepted and considered a fundamental scientific concept.\n[…]\nIn a joint presentation with Alfred Russel Wallace, he introduced his scientific theory that this branching pattern of evolution resulted from a process he called natural selection, in which the struggle for existence has a similar effect to the artificial selection involved in selective breeding. Darwin has been described as one of the most influential figures in human history and was honoured by burial in Westminster Abbey.\n[…]\nHe had expected to be buried in St Mary's churchyard at Downe, but at the request of Darwin's colleagues, after public and parliamentary petitioning, William Spottiswoode (President of the Royal Society) arranged for Darwin to be honoured by burial in Westminster Abbey, close to John Herschel and Isaac Newton. The funeral, held on Wednesday, 26 April, was attended by thousands of people, including family, friends, scientists, philosophers, and dignitaries.\n[…]\n\"Archival material relating to Charles Darwin\". UK National Archives.\n[…]\nWorks by Charles Darwin at the Biodiversity Heritage Library\n[…]\nPortraits of Charles Darwin at the National Portrait Gallery, London\n[…]\nNewspaper clippings about Charles Darwin in the 20th Century Press Archives of the ZBW\n[…]\nCharles Darwin in the British horticultural press – Occasional Papers from RHS Lindley Library, volume 3 July 2010\n[…]\nScientific American, 29 April 1882, pp. 256, Obituary of Charles Darwin\n[…]\nFieser, James; Dowden, Bradley (eds.). \"Charles Darwin\". Internet Encyclopedia of Philosophy. ISSN 2161-0002. OCLC 37741658."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Charles_Darwin",
        "situacao": "ok",
        "texto": "Charles Robert Darwin FRS FGRS FLS FLZ (pronúncia em inglês: ['dɑːrwɪn]; ocasionalmente aportuguesado em Carlos Darwin. Shrewsbury, 12 de fevereiro de 1809 – Downe, 19 de abril de 1882) foi um naturalista, geólogo e biólogo britânico, célebre por seus avanços sobre evolução nas ciências biológicas.\n[…]\nSua dedicação pelas plantas resultou em várias publicações de livros, e seu último seria A formação do molde vegetal através da ação de vermes em 1881, meses antes de sua morte no ano seguinte. Em reconhecimento à importância do seu trabalho, Darwin foi enterrado na Abadia de Westminster, próximo a Charles Lyell, William Herschel e Isaac Newton. Foi uma das cinco pessoas não ligadas à família real inglesa a ter um funeral de Estado no século XIX.\n[…]\nEm seu segundo ano universitário, Darwin se juntou à Plinian Society, um grupo de história natural que defendia com fervor ideias democráticas e céticas e questionava visões ortodoxas entre religião e ciência da época.\n[…]\nA resposta da Igreja Anglicana foi mista. Os antigos tutores de Darwin, Sedgwick e Henslow, rechaçaram suas ideias, mas os clérigos liberais interpretaram a seleção natural como um instrumento do design de Deus, sendo que o clérigo Charles Kingsley via \"apenas como um conceito nobre da concepção da Deidade\".\n[…]\nEle esperava ser enterrado na Igreja de St Mary em Downe, mas por um pedido de seus colegas, após uma petição pública no parlamento, William Spottiswoode (presidente da Royal Society) conseguiu que Darwin fosse enterrado com honras na Abadia de Westminster, perto de John Herschel e Isaac Newton. O funeral aconteceu em 26 de abril, uma quarta-feira, e foi visitado por milhares de pessoas, incluindo a família, amigos, cientistas, filósofos e dignitários.\n[…]\n«Textos de Charles Darwin» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Charles Darwin",
      "descricao": "Naturalista inglês autor da teoria da evolução por seleção natural."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que presidente americano nasceu exatamente no mesmo dia que Charles Darwin?",
    "resposta": "Abraham Lincoln",
    "fonte": [
      "https://en.wikipedia.org/wiki/Charles_Darwin",
      "https://en.wikipedia.org/wiki/Abraham_Lincoln"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Charles_Darwin",
        "situacao": "ok",
        "texto": "Charles Robert Darwin ( DAR-win; 12 February 1809 – 19 April 1882) was an English naturalist, geologist, and biologist, widely known for his contributions to evolutionary biology. His proposition that all species of life have descended from a common ancestor is now generally accepted and considered a fundamental scientific concept.\n[…]\nThe Smithsonian National Museum of Natural History has a bronze statue of Charles Darwin in its Deep Time Hall, which features Darwin seated on a bench with a notebook containing his \"tree of life\" sketch. The statue was sculpted by David Clendining and was installed as the centrepiece of the hall, which focuses on Darwinian evolution.\n[…]\n\"The Complete Work of Charles Darwin Online\". Retrieved 4 March 2024.\n[…]\nWorks by Charles Darwin in eBook form at Standard Ebooks\n[…]\nWorks by Charles Darwin at Project Gutenberg\n[…]\nWorks by or about Charles Robert Darwin at the Internet Archive\n[…]\nWorks by Charles Darwin at LibriVox (public domain audiobooks)\n[…]\nThe Complete Works of Charles Darwin Online – Darwin Online; Darwin's publications, private papers and bibliography, supplementary works including biographies, obituaries and reviews\n[…]\n\"Archival material relating to Charles Darwin\". UK National Archives.\n[…]\nView books owned and annotated by Charles Darwin at the online Biodiversity Heritage Library.\n[…]\nWorks by Charles Darwin at the Biodiversity Heritage Library\n[…]\nPortraits of Charles Darwin at the National Portrait Gallery, London\n[…]\nNewspaper clippings about Charles Darwin in the 20th Century Press Archives of the ZBW\n[…]\nCharles Darwin in the British horticultural press – Occasional Papers from RHS Lindley Library, volume 3 July 2010\n[…]\nScientific American, 29 April 1882, pp. 256, Obituary of Charles Darwin\n[…]\nFieser, James; Dowden, Bradley (eds.). \"Charles Darwin\". Internet Encyclopedia of Philosophy. ISSN 2161-0002. OCLC 37741658."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Abraham_Lincoln",
        "situacao": "ok",
        "texto": "Abraham Lincoln (February 12, 1809 – April 15, 1865) was the 16th president of the United States, serving from 1861 until his assassination in 1865. He led the United States through the American Civil War, defeating the Confederacy and playing a major role in the abolition of slavery.\n[…]\nThe second child of Thomas Lincoln and Nancy Hanks Lincoln, he was a descendant of Samuel Lincoln, an Englishman who emigrated to Massachusetts in 1637 (Abraham Lincoln said that Samuel Lincoln \"came from Norwich, England, in 1638\".) His paternal grandfather and namesake, Captain Abraham Lincoln, moved the family from Virginia to Kentucky. The captain was killed in a Native American raid in 1786. The family settled in Hardin County, Kentucky, in the early 1800s.\n[…]\nMemorials in Springfield, Illinois, include the Abraham Lincoln Presidential Library and Museum, Lincoln's home, and his tomb. A carving of Lincoln appears with those of three other presidents on Mount Rushmore, which receives about 3 million visitors a year. A statue of Lincoln completed by Augustus Saint-Gaudens stands in Lincoln Park, Chicago, with recastings given as diplomatic gifts standing in Parliament Square, London, and Parque Lincoln, Mexico City.\n[…]\nWorks by Abraham Lincoln at Project Gutenberg\n[…]\nAbraham Lincoln Presidential Library and Museum\n[…]\nAbraham Lincoln Association\n[…]\nAbraham Lincoln: A Resource Guide from the Library of Congress\n[…]\nPapers of Abraham Lincoln Digital Library from Abraham Lincoln Presidential Library — A digitization of all documents written by or to Abraham Lincoln during his lifetime\n[…]\nLincoln/Net: Abraham Lincoln Historical Digitization Project – Northern Illinois University Digital Library\n[…]\n\"Writings of Abraham Lincoln\" from C-SPAN's American Writers: A Journey Through History, June 18, 2001"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Charles_Darwin",
        "situacao": "ok",
        "texto": "Charles Robert Darwin FRS FGRS FLS FLZ (pronúncia em inglês: ['dɑːrwɪn]; ocasionalmente aportuguesado em Carlos Darwin. Shrewsbury, 12 de fevereiro de 1809 – Downe, 19 de abril de 1882) foi um naturalista, geólogo e biólogo britânico, célebre por seus avanços sobre evolução nas ciências biológicas.\n[…]\nCharles Robert Darwin nasceu em Shrewsbury, Shropshire, em 12 de fevereiro de 1809, em uma propriedade da família apelidada The Mount. O quinto de seis irmãos e filho do médico e investidor Robert Darwin com Susannah Darwin (nome de solteira, Wedgwood), Charles era neto de dois proeminentes abolicionistas: Erasmus Darwin por parte de pai, e Josiah Wedgwood por parte de mãe.\n[…]\nQuando a obra Narrative, de Fitzroy, foi publicada em maio de 1839, os diários de Darwin fizeram tanto sucesso como o terceiro volume que mais tarde nesse mesmo ano foi lançado como obra separada. No início de 1842, Darwin escreveu sobre as suas ideias a Charles Lyell, que notou que o seu aliado \"nega ver um começo para os vários grupos de espécies\".\n[…]\nNa sua chegada a Terra do Fogo ele fez uma descrição generosa dos \"selvagens fueguinos\". Essa visão mudou quando conheceu o povo yagane em mais detalhes. Ao estudar os yeganes, Darwin concluiu que o conjunto básico de emoções dos diferentes grupos humanos eram o mesmo e que as capacidades mentais era basicamente as mesmas dos europeus.\n[…]\n1887: Life and Letters of Charles Darwin, (ed. Francis Darwin). Volume I, Volume II\n[…]\n1903: More Letters of Charles Darwin, (ed. Francis Darwin e A.C. Seward). Volume I, Volume II\n[…]\n«Todas as correspondências de Charles Darwin» (em inglês)\n[…]\n«Obras de Darwin no projeto Gutenberg» (em inglês)\n[…]\n«Obras de ou sobre Darwin no Internet Archive» (em inglês)\n[…]\n«Fotos do naturalista Charles Darwin»\n[…]\n«Textos de Charles Darwin» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Antonie van Leeuwenhoek",
      "descricao": "Comerciante e cientista holandês do século dezessete, pioneiro da microbiologia com microscópios que ele mesmo fabricava."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Leeuwenhoek nasceu em Delft, em 1632, no mesmo ano e na mesma cidade de qual famoso pintor holandês?",
    "resposta": "Johannes Vermeer",
    "fonte": [
      "https://en.wikipedia.org/wiki/Antonie_van_Leeuwenhoek",
      "https://en.wikipedia.org/wiki/Johannes_Vermeer"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Antonie_van_Leeuwenhoek",
        "situacao": "ok",
        "texto": "Antonie Philips van Leeuwenhoek ( AHN-tə-nee vahn LAY-vən-hook, -⁠huuk; Dutch: [ˈɑntoːni vɑn ˈleːu.ə(n)ˌɦuk] ; 24 October 1632 – 26 August 1723) was a Dutch microbiologist and microscopist in the Golden Age of Dutch art, science and technology. A largely self-taught man in science, he is commonly known as \"the Father of Microbiology\", and one of the first microscopists and microbiologists.\n[…]\nAntonie van Leeuwenhoek was born in Delft, Dutch Republic, on 24 October 1632. On 4 November, he was baptized as Thonis. His father, Philips Antonisz van Leeuwenhoek, was a basket maker who died when Antonie was five years old. His mother, Margaretha (Bel van den Berch), came from a well-to-do brewer's family. She remarried Jacob Jansz Molijn, a painter and the family moved to Warmond around 1640. Antonie had four older sisters: Margriet, Geertruyt, Neeltje, and Catharina.\n[…]\nVan Leeuwenhoek was a contemporary of another famous Delft citizen, the painter Johannes Vermeer, who was baptized just four days earlier. It has been suggested that he is the man portrayed in two Vermeer paintings of the late 1660s, The Astronomer and The Geographer, but others argue that there appears to be little physical similarity. Because they were both relatively important men in a city with only 24,000 inhabitants, living both close to the main market, it is likely they knew each other.\n[…]\nVan Leeuwenhoek acted as the executor of Vermeer's will when the painter died in 1675.\n[…]\nJohannes Vermeer\n[…]\nHuerta, Robert (2003). Giants of Delft: Johannes Vermeer and the Natural Philosophers: The Parallel Search for Knowledge during the Age of Discovery. Pennsylvania: Bucknell University Press.\n[…]\nSnyder, Laura J. (2015). Eye of the Beholder: Johannes Vermeer, Antoni van Leeuwenhoek, and the Reinvention of Seeing. New York: W. W. Norton & Company.\n[…]\nVermeer connection website\n[…]\nWorks by Antoni van Leeuwenhoek at Project Gutenberg"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Johannes_Vermeer",
        "situacao": "ok",
        "texto": "Johannes Vermeer ( vər-MEER, vər-MAIR, Dutch: [joːˈɦɑnəs fərˈmeːr]; see below; also known as Jan Vermeer; October 1632 – 15 December 1675) was a Dutch painter who specialized in domestic interior scenes of middle-class life. He is considered one of the greatest painters of the Dutch Golden Age. During his lifetime, he was a moderately successful provincial genre painter, recognized in Delft and Th\n[…]\nJohannes Vermeer was baptized within the Reformed Church on 31 October 1632. His Flemish mother, Digna Baltens (c. 1596–1670), was from Antwerp. Digna's father, Balthasar Geerts, or Gerrits (born in Antwerp in or around 1573), was a highly skilled metalworker, clockmaker, and coin-die cutter. A craftsman in these skills held a high social and economic status, and belonged to a highly educated elite of precision artists and mechanics.\n[…]\nIn 1671, Gerrit van Uylenburgh organized the auction of Gerrit Reynst's collection and offered 13 paintings and some sculptures to Frederick William, Elector of Brandenburg. Frederick accused them of being counterfeits and sent 12 back on the advice of Hendrick Fromantiou. Van Uylenburg then organized a counter-assessment, asking a total of 35 painters to pronounce on their authenticity, including Jan Lievens, Melchior de Hondecoeter, Gerbrand van den Eeckhout, and Johannes Vermeer.\n[…]\nLiedtke, Walter (2009). The Milkmaid by Johannes Vermeer. New York, USA: The Metropolitan Museum of Art. ISBN 978-1-58839-344-9.\n[…]\nSheldon, Libby; Costaros, Nicola (February 2006). \"Johannes Vermeer's 'Young woman seated at a virginal\". The Burlington Magazine (1235) (vol. CXLVIII ed.).\n[…]\nOnline Exhibition of Johannes Vermeer\n[…]\n500 pages on Vermeer and Delft\n[…]\nJohannes Vermeer, biography at Artble\n[…]\nEssential Vermeer, website dedicated to Johannes Vermeer\n[…]\nJohannes Vermeer in the Encyclopædia Britannica\n[…]\nVermeer Center Delft, center with tours about Vermeer"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Anton_van_Leeuwenhoek",
        "situacao": "ok",
        "texto": "Anton van Leeuwenhoek (Delft, 24 de outubro de 1632 – Delft, 26 de agosto de 1723) foi um comerciante de tecidos, cientista e construtor de microscópios holandês.\n[…]\nO microscópio utilizado por Leeuwenhoek para as suas descobertas era constituído por uma lente biconvexa que tinha a capacidade de aumentar a imagem cerca de 1 000 vezes.\n[…]\nHavia três parafusos para mover o pino e a amostra ao longo de três eixos: um eixo para mudar o foco e os outros dois eixos para navegar pela amostra. Durante muitos anos, ninguém foi capaz de reconstruir o design de van Leeuwenhoek, pode-se então dizer que sua obra era uma verdadeira criação, única e até então inédita da engenharia.\n[…]\nAnton van Leeuwenhoek usou amostras para estimar o número de micro-organismos em unidade de água. Esse trabalho estabeleceu firmemente seu lugar na história como um dos primeiros e mais importantes exploradores do mundo microscópico. Van Leeuwenhoek foi uma das primeiras pessoas a observar células, assim como Robert Hooke.\n[…]\nAs principais descobertas de van Leeuwenhoek são:\n[…]\nNo final da sua vida, Van Leeuwenhoek escreveu cerca de 560 cartas à Royal Society e outras instituições científicas referentes às suas descobertas. As últimas continham uma descrição precisa de sua própria doença. Ele sofria de uma doença rara, um movimento descontrolado da região da barriga, que agora é chamada de doença de van Leeuwenhoek. Ele morreu aos 90 anos, em 26 de agosto de 1723, e foi enterrado quatro dias depois em Oude Kerk, em Delft.\n[…]\nMedalha Leeuwenhoek\n[…]\nBiografia de Antoni van Leeuwenhoek",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Josiah Wedgwood",
      "descricao": "Industrial inglês do século dezoito, fundador da fábrica de louças Wedgwood."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Josiah Wedgwood, fundador de uma famosa fábrica inglesa de louças, era o que de Charles Darwin?",
    "resposta": "Avô materno",
    "fonte": [
      "https://en.wikipedia.org/wiki/Josiah_Wedgwood",
      "https://en.wikipedia.org/wiki/Charles_Darwin"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Josiah_Wedgwood",
        "situacao": "ok",
        "texto": "Josiah Wedgwood (12 July 1730 – 3 January 1795) was an English potter, entrepreneur and abolitionist. Founding the Wedgwood company in 1759, he developed improved pottery bodies by systematic experimentation, and was the leader in the industrialisation of the manufacture of European pottery.\n[…]\nWedgwood was a member of the Darwin–Wedgwood family, and he was the grandfather of Charles and Emma Darwin.\n[…]\nSusannah Wedgwood (3 January 1765 – 1817), known to the family as \"Sukey\", married Robert Darwin and became the mother of the English naturalist Charles Darwin. Charles married Emma Wedgwood, his first cousin.\n[…]\nJosiah Wedgwood II (1769–1843) (father of Emma Wedgwood Darwin, first cousin to and wife of Charles Darwin)\n[…]\nNot long after the new works opened, continuing trouble with his smallpox-afflicted knee made necessary the amputation of his right leg. In 1780, his long-time business partner Thomas Bentley died, and Wedgwood turned to Darwin for help in running the business. As a result of the close association that grew up between the Wedgwood and Darwin families, Josiah's eldest daughter would later marry Erasmus' son.\n[…]\nMcKendrick, Neil. \"Josiah Wedgwood and Factory Discipline.\" Historical Journal 4.1 (1961): 30–55. online\n[…]\nMcKendrick, Neil. \"Josiah Wedgwood and cost accounting in the Industrial Revolution.\" Economic History Review 23.1 (1970): 45–67. online\n[…]\nMcKendrick, Neil. \"Josiah Wedgwood: an eighteenth-century entrepreneur in salesmanship and marketing techniques.\" Economic History Review 12.3 (1960): 408–433. online\n[…]\nReilly, Robin, Josiah Wedgwood 1730–1795 (1992), scholarly biography\n[…]\nWedgwood, Julia, and Charles Harold Herford. The Personal Life of Josiah Wedgwood, the Potter (1915) online\n[…]\nJosiah Wedgwood Correspondence (transcripts), John Rylands Library, Manchester."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Charles_Darwin",
        "situacao": "ok",
        "texto": "Charles Robert Darwin ( DAR-win; 12 February 1809 – 19 April 1882) was an English naturalist, geologist, and biologist, widely known for his contributions to evolutionary biology. His proposition that all species of life have descended from a common ancestor is now generally accepted and considered a fundamental scientific concept.\n[…]\nCharles Robert Darwin was born on 12 February 1809 at his family's home, The Mount, in Shrewsbury, Shropshire. He was the fifth of six children of wealthy society doctor and financier Robert Darwin and Susannah Darwin (née Wedgwood). His grandfathers Erasmus Darwin and Josiah Wedgwood were both prominent abolitionists.\n[…]\nRobert Darwin objected to his son's planned two-year voyage, regarding it as a waste of time, but was persuaded by his brother-in-law, Josiah Wedgwood II, to agree to (and fund) his son's participation. Darwin took care to remain in a private capacity to retain control over his collection, intending it for a major scientific institution.\n[…]\nThe Darwins had ten children: two died in infancy, and Annie's death at the age of ten had a devastating effect on her parents. Charles was a devoted father and uncommonly attentive to his children. Whenever they fell ill, he feared that they might have inherited weaknesses from inbreeding due to the close family ties he shared with his wife and cousin, Emma Wedgwood. He examined inbreeding in his writings, contrasting it with the advantages of outcrossing in many species.\n[…]\nDarwin's views on social and political issues reflected his time and social position. He grew up in a family of Whig reformers who, like his uncle Josiah Wedgwood, supported electoral reform and the emancipation of slaves. Darwin was passionately opposed to slavery.\n[…]\nDarwin Manuscript Project\n[…]\nScientific American, 29 April 1882, pp. 256, Obituary of Charles Darwin"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Josiah_Wedgwood",
        "situacao": "ok",
        "texto": "Josiah Wedgwood (Burslem, 12 de julho de 1730 – 3 de janeiro de 1795) foi um ceramista, empresário e abolicionista inglês.\n[…]\nFundando a empresa Wedgwood em 1759, ele desenvolveu corpos de cerâmica aprimorados por meio de experimentação sistemática e foi o líder na industrialização da fabricação de cerâmica europeia.\n[…]\nA empresa de Wedgwood nunca fez porcelana durante a sua vida, mas especializado em finas louça de barro e grés que tinham muitas das mesmas qualidades, mas foram consideravelmente mais baratas. Ele fez um grande esforço para manter os designs de seus produtos em sintonia com a moda atual. Ele foi um dos primeiros a adotar a impressão por transferência, que deu efeitos semelhantes à pintura à mão por um custo muito mais baixo.\n[…]\nAtendendo às demandas da revolução do consumidor que ajudou a impulsionar a Revolução Industrial na Grã-Bretanha, Wedgwood é considerado um pioneiro do marketing moderno. Ele foi o pioneiro da mala direta, garantias de devolução do dinheiro, autoatendimento, entrega gratuita, compre um leve outro e catálogos ilustrados.Um proeminente abolicionista que lutou contra a escravidão, Wedgwood também é lembrado por seu livro Am I Not a Man And a Brother? medalhão anti-escravidão.\n[…]\nEle era um membro da família Darwin-Wedgwood e era o avô de Charles e Emma Darwin.\n[…]\nEle foi um membro ativo da Sociedade Lunar de Birmingham, frequentemente realizada na Casa Erasmus Darwin.\n[…]\nWedgwood website\n[…]\nWedgwood collection - Lady Lever Art Gallery\n[…]\nWedgwood Museum\n[…]\nThe Story of Wedgwood\n[…]\nJosiah Wedgwood Correspondence (transcripts), John Rylands Library, Manchester.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "O Que É a Vida?",
      "descricao": "Livro de 1944 do físico Erwin Schrödinger sobre a base física da vida e da hereditariedade."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que físico, famoso por um gato imaginário, escreveu O Que É a Vida?, livro que inspirou Watson e Crick?",
    "resposta": "Erwin Schrödinger",
    "fonte": [
      "https://en.wikipedia.org/wiki/What_Is_Life%3F"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/What_Is_Life%3F",
        "situacao": "ok",
        "texto": "What Is Life? The Physical Aspect of the Living Cell is a 1944 science book written for the lay reader by the physicist Erwin Schrödinger. The book was based on a course of public lectures delivered by Schrödinger in February 1943, under the auspices of the Dublin Institute for Advanced Studies, where he was Director of Theoretical Physics, at Trinity College, Dublin.\n[…]\nWhat is Life? has been widely credited with influencing the young molecular biologists James D. Watson and Francis Crick, both of whom acknowledged his work as formative in their discovery of the DNA double helix in 1953. The Dublin Institute for Advanced Studies holds a 1953 letter from Crick to Schrödinger noting that he and Watson had been influenced by the book.\n[…]\nErwin Schrödinger was speaking on the subject ‘What Is Life?’.”\n[…]\nIn Chapter VI, Schrödinger states:\n[…]\nSchrödinger concludes that \"...'I' am the person, if any, who controls the 'motion of the atoms' according to the Laws of Nature.\" However, he also qualifies the conclusion as \"necessarily subjective\" in its \"philosophical implications\".\n[…]\nSchrödinger’s What is Life? (based on his 1943 Dublin lectures) helped ignite molecular biology by framing heredity as a physical problem and popularizing the idea of an “aperiodic crystal,” effectively anticipating a genetic code. It drew physicists into biology; Sarkar notes its influence on founders such as Watson, Crick, Benzer, and Wilkins, even if some said they’d have come into the field anyway.\n[…]\nErwin Schrödinger (1944), What Is Life? and Other Scientific Essays. Based on lectures delivered under the auspices of the Dublin Institute for Advanced Studies at Trinity College, Dublin, in February 1943. Doubleday (1956) and Internet Archive.\n[…]\nQuantum Aspects of Life\n[…]\n(in Italian) Critical interdisciplinary review of Schrödinger's \"What Is life?\"\n[…]\nSchrödinger's influence on biology"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Núcleo celular",
      "descricao": "Organela das células eucariontes, envolta por membrana, que guarda a maior parte do material genético."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O núcleo das células e o movimento aleatório de partículas na água foram descritos pelo mesmo botânico escocês. Quem?",
    "resposta": "Robert Brown",
    "fonte": [
      "https://en.wikipedia.org/wiki/Robert_Brown_(botanist,_born_1773)",
      "https://en.wikipedia.org/wiki/Cell_nucleus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Robert_Brown_(botanist,_born_1773)",
        "situacao": "ok",
        "texto": "Robert Brown   (21 December 1773 – 10 June 1858) was a Scottish botanist and paleobotanist who made important contributions to botany largely through his pioneering use of the microscope.\n[…]\nRobert Brown was born in Montrose, Scotland on 21 December 1773, in a house that existed on the site where Montrose Library currently stands. He was the son of James Brown, a minister in the Scottish Episcopal Church with Jacobite convictions so strong that in 1788 he defied his church's decision to give allegiance to George III. His mother was Helen Brown née Taylor, the daughter of a Presbyterian minister.\n[…]\nIn a paper read to the Linnean society in 1831 and published in 1833, Brown named the cell nucleus. The nucleus had been observed before, perhaps as early as 1682 by the Dutch microscopist Leeuwenhoek, and Franz Bauer had noted and drawn it as a regular feature of plant cells in 1802, but it was Brown who gave it the name it bears to this day (while giving credit to Bauer's drawings).\n[…]\nAfter the division of the Natural History Department of the British Museum into three sections in 1837, Robert Brown became the first Keeper of the Botanical Department, remaining so until his death. He was succeeded by John Joseph Bennett.\n[…]\nBrown's taxonomic arrangement of Banksia\n[…]\nList of Australian plant species authored by Robert Brown\n[…]\nCharacter and description of Kingia\n[…]\nTaxa named by Robert Brown\n[…]\nClassic papers by Robert Brown PDFs of several original papers by Robert Brown are available from this webpage.\n[…]\nRobert Brown's Australian Botanical Specimens, 1801–1805 at the British Museum (BM) A comprehensive database.\n[…]\nRobert Brown's work on orchids.\n[…]\nRobert Brown on Ask.com"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Cell_nucleus",
        "situacao": "ok",
        "texto": "The cell nucleus (from Latin  nucleus or nuculeus 'kernel, seed'; pl.: nuclei) is a membrane-bound organelle found in eukaryotic cells. Eukaryotic cells usually have a single nucleus, but a few cell types, such as mammalian red blood cells, have no nuclei, and a few others including osteoclasts have many.\n[…]\nThe nucleus contains nearly all of the cell's DNA, surrounded by a network of fibrous intermediate filaments called the nuclear matrix, and is enveloped in a double membrane called the nuclear envelope. The nuclear envelope separates the fluid inside the nucleus, called the nucleoplasm, from the rest of the cell. The size of the nucleus is correlated to the size of the cell, and this ratio is reported across a range of cell types and species.\n[…]\nThe nucleus was also described by Franz Bauer in 1804 and in more detail in 1831 by Scottish botanist Robert Brown in a talk at the Linnean Society of London. Brown was studying orchids under the microscope when he observed an opaque area, which he called the \"areola\" or \"nucleus\", in the cells of the flower's outer layer. He did not suggest a potential function.\n[…]\nIn 1838, Matthias Schleiden proposed that the nucleus plays a role in generating cells, thus he introduced the name \"cytoblast\" (\"cell builder\"). He believed that he had observed new cells assembling around \"cytoblasts\". Franz Meyen was a strong opponent of this view, having already described cells multiplying by division and believing that many cells would have no nuclei.\n[…]\nThe idea that cells can be generated de novo, by the \"cytoblast\" or otherwise, contradicted work by Robert Remak (1852) and Rudolf Virchow (1855) who decisively propagated the new paradigm that cells are generated solely by cells (\"Omnis cellula e cellula\"). The function of the nucleus remained unclear.\n[…]\nNucleoid"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Robert_Brown",
        "situacao": "ok",
        "texto": "Robert Brown (Montrose, 21 de dezembro de 1773 — Soho, 10 de junho de 1858) foi um botânico e físico escocês, que se notabilizou como colector na Austrália e no sudeste asiático durante a primeira metade do século XIX. Foi também o descobridor do movimento browniano e realizou estudos pioneiros sobre o núcleo das células vegetais.\n[…]\nBrown, Robert (1828), \"A brief account of microscopical observations made on the particles contained in the pollen of plants\" - London and Edinburgh philosophical magazine and journal of science 4 :161-173.\n[…]\nNind, Scott; introduction by Robert Brown (1831), \"Description of the Natives of King George's Sound (Swan River Colony) and adjoining Country\" - Journal of the Royal Geographical Society of London, 1 (1831), pp. 21–50.\n[…]\nBrown, Robert (1849) \"Botanical appendix\" - Sturt, Charles, Narrative of an expedition into central Australia, 2, pp. 66-92\n[…]\nBrown, Robert; Bennett, John Joseph (ed.) (1866–1868) The miscellaneous botanical works of Robert Brown, Esq., D.C.L., F.R.S..\n[…]\nBrown, Robert (post.); Trimen, Henry (introd.) (1871), \"The botanical history of Angus\" - Seemann, Berthold (ed.), Journal of botany, British and foreign 9:321–327.\n[…]\nBalfour, John Hutton (1860), \"I. Biographical Sketch of the late Robert Brown\" - Botanical Journal of Scotland 6(1-4):118-128.\n[…]\nMabberley, David (1985), Jupiter botanicus: Robert Brown of the British Museum.\n[…]\nStephenson, J. (1932), \"Robert Brown's discovery of the nucleus in relation to the history of cell theory\" - Proceedings of the Linnean Society of London 144: 45–54.\n[…]\nRamsbottom, John (1932), \"Centenary of Robert Brown's discovery of the nucleus\" - Journal of botany, British and foreign 70:13–16.\n[…]\nRamsbottom, John (1932), \"Robert Brown: botanicorum facile princeps\" - Proceedings of the Linnean Society of London 144:17–36\n[…]\nRobert Brown no Ask.com",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Thomas Henry Huxley",
      "descricao": "Biólogo inglês do século dezenove, grande defensor público da teoria da evolução de Darwin."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Por defender com ferocidade a teoria da evolução, o biólogo inglês Thomas Huxley ganhou qual apelido?",
    "resposta": "Buldogue de Darwin",
    "fonte": [
      "https://en.wikipedia.org/wiki/Thomas_Henry_Huxley"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Thomas_Henry_Huxley",
        "situacao": "ok",
        "texto": "Thomas Henry Huxley (4 May 1825 – 29 June 1895) was an English biologist and anthropologist who specialised in comparative anatomy. He has become known as \"Darwin's Bulldog\" for his advocacy of Charles Darwin's theory of evolution.\n[…]\nOne effect of the debate was to hugely increase Huxley's visibility amongst educated people, through the accounts in newspapers and periodicals. Another consequence was to alert him to the importance of public debate: a lesson he never forgot. A third effect was to serve notice that Darwinian ideas could not be easily dismissed: on the contrary, they would be vigorously defended against orthodox authority.\n[…]\nHooker, John Lubbock (banker, biologist and neighbour of Darwin), Herbert Spencer (social philosopher and sub-editor of the Economist), William Spottiswoode (mathematician and the Queen's Printer), Thomas Hirst (Professor of Physics at University College London), Edward Frankland (the new Professor of Chemistry at the Royal Institution) and George Busk, zoologist and palaeontologist (formerly surgeon for HMS Dreadnought). All except Spencer were fellows of the Royal Society.\n[…]\nThis largely morphological program of comparative anatomy remained at the core of most biological education for a hundred years until the advent of cell and molecular biology and interest in evolutionary ecology forced a fundamental rethink. It is an interesting fact that the methods of the field naturalists who led the way in developing the theory of evolution (Darwin, Alfred Russel Wallace, Fritz Müller, Henry Bates) were scarcely represented at all in Huxley's program.\n[…]\nThe Huxley Lecture\n[…]\nHuxley review: Darwin on the origin of Species, Westminster Review, 17 (n.s.) April 1860 p. 541–570."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Thomas_Henry_Huxley",
        "situacao": "ok",
        "texto": "Thomas Henry Huxley (Ealing, Middlesex, 4 de maio de 1825 — Eastbourne, Sussex, 29 de junho de 1895) foi um biólogo e filósofo britânico que ficou conhecido como \"O Buldogue de Darwin\", por ser o principal defensor público da teoria da evolução de Charles Darwin e um dos principais cientistas ingleses do século XIX. É ainda reconhecido por ser o criador do termo \"agnóstico\" para representar um pos\n[…]\nT. H. Huxley foi um dos poucos confidentes a quem Charles Darwin expôs suas ideias evolucionistas antes da publicação de A Origem das Espécies e um dos principais responsáveis pelo sucesso da sua publicação.\n[…]\nLogo após conhecer e concordar com a Teoria da Evolução (apesar de não aceitar várias das ideias de Darwin, como o Gradualismo), iniciou a estratégia eficaz de substituir na cúpula científica inglesa, graças à sua influência, cientistas idosos e com ideias ultrapassadas, por uma nova classe de cientistas jovens e talentosos, abertos a novas ideias e prontos para uma \"revolução\" científica.\n[…]\nEm 1858, quando Darwin foi orientado (em parte por Huxley) a elaborar rapidamente um artigo científico sobre a Teoria da Evolução em conjunto com Alfred Russel Wallace (que havia chegado independentemente a conclusões semelhantes às de Darwin), para apresentar à Linnean Society em Londres, revigorando a comunidade científica que já era muito diferente e permeável à mudança.\n[…]\nComo Darwin nunca foi um grande orador e preferiu morar no interior da Inglaterra, longe dos debates e repercussões da sua teoria, coube a Thomas Huxley o papel de principal defensor da Evolução. Orador perspicaz e feroz, além de possuir um humor cínico, traços que lhe valeram o apelido. Como disse ao estudante Henry Fairfield Osborn, \"Você sabe que eu tenho que tomar conta dele - de fato, eu sempre tenho sido o buldogue de Darwin\".\n[…]\nCharles Darwin\n[…]\nTeoria da Evolução\n[…]\nObras de Thomas Henry Huxley na Open Library",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Enzima",
      "descricao": "Proteína que acelera reações químicas nos seres vivos."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A palavra enzima, criada no século dezenove, vem do grego e quer dizer, literalmente, dentro de quê?",
    "resposta": "Do fermento, a levedura",
    "fonte": [
      "https://en.wikipedia.org/wiki/Enzyme"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Enzyme",
        "situacao": "ok",
        "texto": "An enzyme is a biological macromolecule, usually a protein, that acts as a biological catalyst, accelerating chemical reactions without being consumed in the process. The molecules on which enzymes act are called substrates, which are converted into products. Nearly all metabolic processes within a cell depend on enzyme catalysis to occur at biologically relevant rates. A metabolic pathway is typi\n[…]\nFrench chemist Anselme Payen was the first to discover an enzyme, diastase, in 1833. A few decades later, when studying the fermentation of sugar to alcohol by yeast, Louis Pasteur concluded that this fermentation was caused by a vital force contained within the yeast cells called \"ferments\", which were thought to function only within living organisms.\n[…]\nHe wrote that \"alcoholic fermentation is an act correlated with the life and organization of the yeast cells, not with the death or putrefaction of the cells.\"\n[…]\nIn 1877, German physiologist Wilhelm Kühne (1837–1900) first used the term enzyme, which comes from Ancient Greek  ἔνζυμον (énzymon) 'leavened, in yeast', to describe this process. The word enzyme was used later to refer to nonliving substances such as pepsin, and the word ferment was used to refer to chemical activity produced by living organisms.\n[…]\nEduard Buchner submitted his first paper on the study of yeast extracts in 1897. In a series of experiments at the University of Berlin, he found that sugar was fermented by yeast extracts even when there were no living yeast cells in the mixture. He named the enzyme that brought about the fermentation of sucrose \"zymase\". In 1907, he received the Nobel Prize in Chemistry for \"his discovery of cell-free fermentation\".\n[…]\nArtificial (in vitro) evolution is now commonly used to modify enzyme activity or specificity for industrial applications (see below).\n[…]\nIndustrial enzymes\n[…]\nList of enzymes\n[…]\nMedia related to Enzymes at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Enzima",
        "situacao": "ok",
        "texto": "Enzimas são grupos de substâncias orgânicas de natureza normalmente proteica (existem também enzimas constituídas de RNA, as ribozimas), com atividade intra ou extracelular que têm funções catalisadoras, catalisando reações químicas que, sem a sua presença, dificilmente aconteceriam. Isso é conseguido através do abaixamento da energia de ativação necessária para que se dê uma reação química, resul\n[…]\nAs enzimas foram descobertas no século XIX, aparentemente por Pasteur, que concluiu que a fermentação do açúcar em álcool pela levedura é catalisada por fermentos. Ele postulou que esses fermentos (as enzimas) eram inseparáveis da estrutura das células vivas do levedo. Pasteur declarou que \"a fermentação alcoólica é um acto correlacionado com a vida e organização das células do fermento, e não com a sua morte ou putrefacção\".\n[…]\nEm 1878, Wilhelm Kühne empregou pela primeira vez o termo \"enzima\" para descrever este fermento, usando a palavra grega ενζυμον, que significa \"levedar\". O termo passou a ser mais tarde usado apenas para as proteínas com capacidade catalítica, enquanto que o termo \"fermento\" se refere à atividade exercida por organismos vivos.\n[…]\nProdução de Enzimas\n[…]\nProdução de enzimas\n[…]\nPara a produção industrial de enzimas por processos fermentativos em estado sólido, o inóculo do microrganismo selecionado é repicado a uma concentração desejada no meio com quantidades mínimas de água no reator. É feita a padronização no reator das condições físico-químicas ideias para o microrganismo e o cultivo segue por um tempo determinado.\n[…]\nApós a fermentação, ocorre a purificação, também por filtração como a fermentação submersa, mas antes de passar no filtro é adicionado um tampão no fermentado e centrifugada. Após a filtragem é feita a recuperação das enzimas produzidas e segue para produção do produto final para ir para o mercado.==Referências==",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Genoma",
      "descricao": "Conjunto completo do material genético de um organismo."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Em 1920, o botânico alemão Hans Winkler criou a palavra genoma juntando gene com qual outra palavra?",
    "resposta": "Cromossomo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Genome"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Genome",
        "situacao": "ok",
        "texto": "In the fields of molecular biology and genetics, a genome is all the genetic information of an organism. It consists of nucleotide sequences of DNA (or RNA in RNA viruses). The nuclear genome includes protein-coding genes and non-coding genes, other functional regions of the genome such as regulatory sequences (see non-coding DNA), and often a substantial fraction of junk DNA with no evident funct\n[…]\nThe term genome was created in 1920 by Hans Winkler, professor of botany at the University of Hamburg, Germany. The website Oxford Dictionaries and the Online Etymology Dictionary suggest the name is a blend of the words gene and chromosome. However, see omics for a more thorough discussion. A few related -ome words already existed, such as biome and rhizome, forming a vocabulary into which genome fits systematically.\n[…]\nThe movement of TEs is a driving force of genome evolution in eukaryotes because their insertion can disrupt gene functions, homologous recombination between TEs can produce duplications, and TE can shuffle exons and regulatory sequences to new locations.\n[…]\nResearchers compare traits such as karyotype (chromosome number), genome size, gene order, codon usage bias, and GC-content to determine what mechanisms could have produced the great variety of genomes that exist today (for recent overviews, see Brown 2002; Saccone and Pesole 2003; Benfey and Protopapas 2004; Gibson and Muse 2004; Reese 2004; Gregory 2005).\n[…]\nHorizontal gene transfer is invoked to explain how there is often an extreme similarity between small portions of the genomes of two organisms that are otherwise very distantly related. Horizontal gene transfer seems to be common among many microbes. Also, eukaryotic cells seem to have experienced a transfer of some genetic material from their chloroplast and mitochondrial genomes to their nuclear chromosomes.\n[…]\nBBC News – Final genome 'chapter' published"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Genoma",
        "situacao": "ok",
        "texto": "Em biologia, o genoma é toda a informação hereditária de um organismo que está codificada em seu DNA (ou, no caso de alguns vírus, no RNA). Isso inclui tanto genes como regiões intergénicas, DNA mitocondrial e DNA plastídico.\n[…]\n1) É o conjunto simples de cromossomos de uma célula (cariótipo). É o conjunto formado por apenas um cromossomo de cada tipo, na espécie estudada. No ser humano o genoma é constituído por 23 pares de cromossomas.\n[…]\nO termo genoma pode ser aplicado especificamente para significar o que é armazenado em um conjunto completo de DNA nuclear (ou seja, o \"genoma nuclear\"), mas também pode ser aplicado ao que é armazenado dentro de organelas que contêm seu próprio DNA, como com o \"mitocondrial Genoma \"ou o\" genoma do cloroplasto \". Além disso, o genoma pode compreender elementos genéticos não cromossômicos, como vírus, plasmídeos e elementos transponíveis.\n[…]\nNormalmente, quando se diz que o genoma de uma espécie reproduzindo sexualmente foi \"sequenciado\", ele se refere a uma determinação das seqüências de um conjunto de autossomos e um de cada tipo de cromossomo sexual, que juntos representam ambos os sexos possíveis . Mesmo em espécies que existem em apenas um sexo, o que é descrito como uma \"sequência do genoma\" pode ser uma leitura composta dos cromossomos de vários indivíduos.\n[…]\nA Poucos meses depois, o primeiro genoma eucariótico foi completado, com sequências dos 16 cromossomos da fermento em broto Saccharomyces cerevisiae, publicados como resultado de um esforço dirigido pela Europa iniciado em meados da década de 1980. A primeira sequência do genoma para um archaeon, Methanococcus jannaschii, foi completada em 1996, novamente pelo The Institute for Genomic Research.\n[…]\nProjeto Genoma",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Cromossomo X",
      "descricao": "Cromossomo sexual presente em duas cópias nas fêmeas de mamíferos e em uma cópia nos machos."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "No fim do século dezenove, por que o descobridor do cromossomo X o batizou com essa letra?",
    "resposta": "Não sabia o que ele era",
    "fonte": [
      "https://en.wikipedia.org/wiki/X_chromosome"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/X_chromosome",
        "situacao": "ok",
        "texto": "The X chromosome is one of the two sex chromosomes in many organisms, including mammals, and is found in both males and females. It is a part of the XY sex-determination system and XO sex-determination system. The X chromosome was named for its unique properties by early researchers, which resulted in the naming of its counterpart Y chromosome, for the next letter in the alphabet, following its su\n[…]\nKlinefelter syndrome is caused by the presence of one or more extra copies of the X chromosome in a male's cells.\n[…]\nThis results when each of a female's cells has one normal X chromosome and the other sex chromosome is missing or altered. The missing genetic material affects development and causes the features of the condition, including short stature and infertility.\n[…]\nAbout half of individuals with Turner syndrome have monosomy X (45,X), which means each cell in a woman's body has only one copy of the X chromosome instead of the usual two copies. Turner syndrome can also occur if one of the sex chromosomes is partially missing or rearranged rather than completely missing. Some women with Turner syndrome have a chromosomal change in only some of their cells. These cases are called Turner syndrome mosaics (45,X/46,XX).\n[…]\nXX male syndrome is a rare disorder, where the SRY region of the Y chromosome has recombined to be located on one of the X chromosomes. As a result, the XX combination after fertilization has the same effect as a XY combination, resulting in a male. However, the other genes of the X chromosome cause feminization as well.\n[…]\nIn July 2020 scientists reported the first complete and gap-less assembly of a human X chromosome.\n[…]\nY chromosome\n[…]\nNational Institutes of Health. \"X chromosome\". Genetics Home Reference. Archived from the original on 2007-07-08. Retrieved 2017-05-06.\n[…]\n\"X chromosome\". Human Genome Project Information Archive 1990–2003. Retrieved 2017-05-06."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cromossoma_X",
        "situacao": "ok",
        "texto": "O cromossoma X consiste em um dos cromossomas responsáveis pela determinação do sexo do ser humano.\n[…]\nDas 3.200 doenças hereditárias identificadas até hoje, 307 podem ser atribuídas a ocorrência de mutações ou falhas no cromossoma X, que, devido a esses problemas, interrompem a produção de algumas proteínas essenciais para o bom funcionamento do organismo.\n[…]\nNos mamíferos, machos e fêmeas variam geneticamente em seus cromossomos sexuais - XX nas fêmeas e XY nos machos. Isso leva a um desequilíbrio potencial, pois mais de mil genes no cromossomo X seriam expressos em dose dupla nas mulheres em comparação aos homens. Para manter esse desequilíbrio os embriões femininos interromperam a expressão dos genes em um de seus dois cromossomos X.\n[…]\nSabe-se que uma molécula chamada Xist (transcrição específica X-inativa) inicia o processo. Xist é um RNA longo não codificante - um tipo de molécula criada usando o DNA da célula como modelo, mas que não contém instruções para produzir uma proteína. Xist reveste o cromossomo a partir do qual é expresso e induz o silenciamento.\n[…]\nA proteína SPEN (proteína que interage com Msx2) desempenha um papel crucial no processo de inativação do cromossomo X, onde embriões de mamíferos fêmeas silenciam a expressão gênica em um de seus dois cromossomos X. Xist mobiliza e liga SPEN, que se acumula ao longo do cromossomo X. O SPEN interage com as regiões reguladoras dos genes ativos. Assim que ocorre o silenciamento genético, o SPEN é desativado. Os genes permanecem inativos pelo resto da vida útil da célula.\n[…]\nSíndrome do cromossoma X frágil",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Sonic hedgehog",
      "descricao": "Gene e proteína essenciais à formação de órgãos nos embriões, como os dedos e o sistema nervoso."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Um gene essencial para a formação dos dedos e do cérebro nos embriões foi batizado em homenagem a qual personagem de videogame?",
    "resposta": "Sonic",
    "fonte": [
      "https://en.wikipedia.org/wiki/Sonic_hedgehog_protein"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sonic_hedgehog_protein",
        "situacao": "ok",
        "texto": "Sonic hedgehog protein (SHH) is a major signaling molecule of embryonic development in planulozoan animals, encoded by the SHH gene.\n[…]\nThe SHH gene is a member of the hedgehog gene family with five variations of DNA sequence alterations or splice variants. SHH is located on chromosome seven and initiates the production of Sonic Hedgehog protein. This protein sends short- and long-range signals to embryonic tissues to regulate development. If the SHH gene is mutated or absent, the protein Sonic Hedgehog cannot do its job properly.\n[…]\nSonic hedgehog contributes to cell growth, cell specification and formation, structuring and organization of the body plan. This protein functions as a vital morphogenic signaling molecule and plays an important role in the formation of many different structures in developing embryos. The SHH gene affects several major organ systems, such as the nervous system, cardiovascular system, respiratory system and musculoskeletal system.\n[…]\nThis can lead to issues ranging from a coloboma to a single small eye to the absence of eyes altogether. Holoprosencephaly is a condition most commonly caused by a mutation of the SHH gene that causes improper separation or turn of the left and right brain and facial dysmorphia. Many systems and structures rely heavily on proper expression of the SHH gene and subsequent sonic hedgehog protein, earning it the distinction of being an essential gene to development.\n[…]\nSHH – sonic hedgehog US National Library of Medicine\n[…]\nOverview of all the structural information available in the PDB for UniProt: Q62226 (Mouse Sonic hedgehog protein) at the PDBe-KB."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sonic_hedgehog",
        "situacao": "ok",
        "texto": "Sonic hedgehog (SHH) é uma de três proteínas da família de sinalizadores chamada hedgehog, encontrada em mamíferos, sendo as outras desert hedgehog (DHH) e Indian hedgehog (IHH). SHH é o ligante mais bem estudado da via de sinalização hedgehog. Desempenha um papel importante na fina regulação da organogênese em vertebrados, como o crescimento dos dedos nos membros e a organização do cérebro.\n[…]\nO fenótipo mutante com perda de função do gene hh gera embriões cobertos de dentículos (pequenas projeções pontiagudas), lembrando um ouriço (em inglês, hedgehog).\n[…]\nPesquisas com o objetivo de encontrar um hedgehog equivalente em mamíferos revelaram três genes homólogos. Os dois primeiros a serem descobertos, desert hedgehog e Indian hedgehog, receberam o nome de espécies de ouriços, enquanto o sonic hedgehog ganhou o nome do personagem de videogame da Sega, Sonic the Hedgehog.\n[…]\nEm peixes-zebra, os ortólogos dos três genes hh de mamíferos são: shh a, shh b (antigamente descrito como tiggywinkle hedgehog, o nome da personagem de livros infantis de Beatrix Potter, Mrs. Tiggy-Winkle) e indian hedgehog b (antigamente descrito como echidna hedgehog, devido ao aspecto espinhoso da équidna, embora também possa ser uma referência divertida a Knuckles the Echidna, um outro personagem da série de jogos eletrônicos Sonic the Hedgehog).[carece de fontes]?\n[…]\nSonic Hedgehog é um morfógeno presente em diversos mecanismos do desenvolvimento, como na formação do tubo neural, definição do eixo levo-dextro crescimento dos membros e desenvolvimento dos olho, pulmões, penas, escamas e dentes; e na remodulação do epitélio intestinal durante a metamorfose de Xenophus. Sua atuação ocorre formando gradientes de concentração distintos para induzir diferentes destinos celulares de acordo com a concentração presente.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Arqueia",
      "descricao": "Domínio de microrganismos procariontes distintos das bactérias, muitos deles adaptados a ambientes extremos."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "As arqueias são microrganismos parecidos com bactérias. O nome delas vem do grego e significa o quê?",
    "resposta": "Antigas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Archaea"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Archaea",
        "situacao": "ok",
        "texto": "Archaea (  ar-KEE-ə) is a domain of organisms. Traditionally, Archaea included only its prokaryotic members, but has since been found to be paraphyletic, as eukaryotes are known to have evolved from archaea. Even though the domain Archaea cladistically includes eukaryotes, the term archaea (sing. archaeon  ar-KEE-on; from Ancient Greek  ἀρχαῖον arkhaîon 'ancient') in English still generally refers\n[…]\nRecently, several studies have shown that archaea exist not only in mesophilic and thermophilic environments but are also present, sometimes in high numbers, at low temperatures as well. For example, archaea are common in cold oceanic environments such as polar seas. Even more significant are the large numbers of archaea found throughout the world's oceans in non-extreme habitats among the plankton community (as part of the picoplankton).\n[…]\nIt has been demonstrated that in all oceanic surface sediments (from 1,000- to 10,000-m water depth), the impact of viral infection is higher on archaea than on bacteria and virus-induced lysis of archaea accounts for up to one-third of the total microbial biomass killed, resulting in the release of ~0.3 to 0.5 gigatons of carbon per year globally.\n[…]\nConsequently, the counterparts of bacterial or eukaryotic enzymes from extremophile archaea are often used in structural studies.\n[…]\nArchaea host a new class of potentially useful antibiotics. A few of these archaeocins have been characterized, but hundreds more are believed to exist, especially within Halobacteria and Sulfolobus. These compounds differ in structure from bacterial antibiotics, so they may have novel modes of action. In addition, they may allow the creation of new selectable markers for use in archaeal molecular biology.\n[…]\nBrowse any completed archaeal genome at UCSC\n[…]\nComparative Analysis of Archaeal Genomes Archived 16 February 2013 at the Wayback Machine (at DOE's IMG system)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Archaea",
        "situacao": "ok",
        "texto": "Archaea (singular: archaeon; do grego: ἀρχαῖος; archaĩos, antigo), em português:  arquea, arqueiaAO 1990 ou arquaia, é um domínio que agrupa microrganismos unicelulares procariontes (i.e. sem núcleo celular), morfologicamente semelhantes a bactérias, mas genética e bioquimicamente tão distintas destas como dos eucariontes.\n[…]\nA origem das arqueias parece ser muito antiga e as linhagens de Archaea podem ser as mais antigas que existem na Terra. A Idade da Terra é de aproximadamente 4,54 mil milhões de anos. Evidências científicas sugerem que a vida começou na Terra há pelo menos 3,5 mil milhões de anos.\n[…]\nO termo archaea tem origem no grego clássico ἀρχαῖα, palavra que significava 'coisas antigas' ou 'antiguidades', pois como os primeiros representantes do domínio Archaea fossem organismos metanogênicos assumiu-se que o seu metabolismo refletia a atmosfera primitiva da Terra (mais concretamente a atmosfera pré-biótica) e seria reflexo da antiguidade destes organismos. Contudo, à medida que novos habitats foram estudados, mais organismos foram descobertos, questionando esse entendimento.\n[…]\nAinda assim, apesar das semelhanças morfológicas com as bactérias, as arqueias possuem genes e várias vias metabólicas que estão mais intimamente relacionadas com as dos eucariotas, nomeadamente no que concerne as enzimas envolvidas na transcrição e tradução genômica. Outros aspectos da bioquímica das arqueias são únicos, como a dependência de éteres lipídicos na estruturação das membranas celulares, incluindo a presença de di-éteres do grupo arqueol (ou archaeol).\n[…]\nOutras arqueias usam\n[…]\nAs arqueias seguem um processo de reprodução assexuada por fissão binária, fragmentação ou brotamento. Ao contrário das bactérias, nenhuma espécie conhecida de Archaea forma endósporos.\n[…]\n(em inglês)  Análise comparativa de genomas de Archaea",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Gato siamês",
      "descricao": "Raça de gato originária da Tailândia, de corpo claro com extremidades escuras."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Gatos siameses têm patas, orelhas, cauda e focinho mais escuros que o resto do corpo. Por quê?",
    "resposta": "São as partes mais frias do corpo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Siamese_cat"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Siamese_cat",
        "situacao": "ok",
        "texto": "The Siamese cat (Thai: แมวไทย, Maeo Thai; แมวสยาม, Maeo Sayam; แมววิเชียรมาศ, Maeo Wichien Maat) is one of the first distinctly recognised breeds of domestic cat. It is selectively bred since the end of the 19th-century from the Wichianmat landrace, one of several varieties of cats native to Thailand (known as Siam before 1939), and is pedigreed in all major cat fancier and breeder organisations.\n[…]\nToybob – cat breed of Russian origin. It bears the Siamese colourpoint mutation gene.\n[…]\nThe \"Siamese Cat Song\" sequence (\"We are Siamese if you please\") in Walt Disney's Lady and the Tramp (1955), features the cats \"Si\" and \"Am\", both titled after the former name of Thailand, where the breed originated. The 1958 film adaptation of Bell, Book and Candle features Kim Novak's Siamese cat \"Pyewacket\", a witch's familiar.\n[…]\nThe Incredible Journey (1961) by Sheila Burnford tells the story of three pets, including the Siamese cat \"Tao\", as they travel 300 miles (480 km) through the Canadian wilderness searching for their beloved masters. The book was a modest success when first published but became widely known after 1963 when it was loosely adapted into a film of the same name by Walt Disney.\n[…]\nDisney also employed the same Siamese in the role of \"DC\" for its 1965 crime caper That Darn Cat!, with The New York Times commenting \"The feline that plays the informant, as the F.B.I. puts it, is superb. [...] This elegant, blue-eyed creature is a paragon of suavity and grace\".\n[…]\nHae Nang Maew Siamese cat procession in Southeast Asia\n[…]\nThai cat a.k.a. Old-style or Traditional Siamese\n[…]\nSiamese Yearbook Articles Archived 3 December 2019 at the Wayback Machine Old articles on the Siamese\n[…]\nSiamese and Oriental Database pedigree database with each cat's health information\n[…]\nSiamese and Oriental PRA health program Archived 21 September 2019 at the Wayback Machine."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Siam%C3%AAs_%28gato%29",
        "situacao": "ok",
        "texto": "Gato siamês é uma raça de gato oriental, caracterizada por um corpo elegante e esguio e uma cabeça marcadamente triangular. Pode ser confundido com a raça de gatos Thai que tem origem na raça siamesa mas apresenta uma morfologia bem distinta — o gato Thai é semelhante ao siamês antigo.\n[…]\nEm 1884 um casal de gatos siameses (Pho e Mia) foram transportados para a Grã-Bretanha e foi desse casal que nasceram os primeiros campeões coroados. Os gatos siameses modernos são bastante diferentes do gato siamês original(atual gato Thai), que era mais maciço e arredondado, podendo ter olhos verdes, ser mais estrábico, e ter um nó na cauda.\n[…]\nAs características mais marcantes são as zonas de coloração mais escura, que cobrem a face, orelhas, pernas, patas, cauda e no saco escrotal (no caso de ser um macho). Essas zonas, também chamadas de \"pontas\", \"marcações\", \"marcas\" ou \"sinais\" e são identificadas com o termo inglês adotado universalmente: points ou colourpoints. A cor do point contrasta com a do resto do corpo que é branco ou sombreado.\n[…]\nO siamês tem um corpo longilíneo e esbelto, de porte médio, com membros posteriores longos e finos, levemente mais altos do que os anteriores; pés pequenos e ovais; musculatura forte. As fêmeas pesam entre 3,0 e 4,0 kg e o macho entre 4,0 e 5,0 kg.\n[…]\nPrincipalmente, no período dos cios, emite miados e uivos pouco graciosos, semelhantes aos de uma criança recém-nascida. A elegância do corpo e a graça dos movimentos conquistaram ao siamês o título de \"Príncipe Dos Gatos\" (por Fernand Méry), mas é o miado forte e a personalidade incomum que realmente o distinguem. Em relação ao dono, ele se comporta mais como um cão do que como um gato — pode passear atado numa coleira e chega a exibir o comportamento típico de \"ir buscar\".\n[…]\n«Gatos Orientais»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Rosalind Franklin",
      "descricao": "Química e cristalógrafa britânica (1920–1958) cujas imagens de raios X ajudaram a revelar a estrutura do DNA."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Por que Rosalind Franklin não dividiu com Watson, Crick e Wilkins o Nobel de 1962 pela estrutura do DNA?",
    "resposta": "Já tinha morrido, em 1958",
    "fonte": [
      "https://en.wikipedia.org/wiki/Rosalind_Franklin"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rosalind_Franklin",
        "situacao": "ok",
        "texto": "Rosalind Elsie Franklin (25 July 1920 – 16 April 1958) was an English chemist and X-ray crystallographer. Her work was central to the understanding of the molecular structures of DNA (deoxyribonucleic acid), RNA (ribonucleic acid), viruses, coal, and graphite.\n[…]\nFranklin was never nominated for a Nobel Prize. Her work was a crucial part in the discovery of DNA's structure, which, along with subsequent related work, led to Francis Crick, James Watson, and Maurice Wilkins being awarded a Nobel Prize in 1962. Franklin had died in 1958, and during her lifetime, the DNA structure was not considered to be fully proven. It took Wilkins and his colleagues about seven years to collect enough data to prove and refine the proposed DNA structure.\n[…]\nMoreover, its biological significance, as proposed by Watson and Crick, was not established. General acceptance for the DNA double helix and its function did not start until late in the 1950s, leading to Nobel nominations in 1960, 1961, and 1962 for Nobel Prize in Physiology or Medicine, and in 1962 for Nobel Prize in Chemistry. The first breakthrough was from Matthew Meselson and Franklin Stahl in 1958, who experimentally showed the DNA replication of a bacterium, Escherichia coli.\n[…]\n\"Rosalind Franklin (1920–1958)\". Contributions of 20th century women to physics. UCLA.\n[…]\n\"Franklin, Rosalind Elsie (1920–1958), crystallographer\". Oxford Dictionary of National Biography (online ed.). Oxford University Press. doi:10.1093/ref:odnb/37413. (Subscription, Wikipedia Library access or UK public library membership required.) by Sir Aaron Klug\n[…]\nElkin, Lynne. \"Rosalind Elsie Franklin 1920–1958\". Jewish Women's Encyclopedia.\n[…]\n\"Rosalind Franklin 1920–1958\". Linus Pauling and the race for DNA, a documentary history."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rosalind_Franklin",
        "situacao": "ok",
        "texto": "Rosalind Elsie Franklin (Londres, 25 de julho de 1920 – Londres, 16 de abril de 1958) foi uma química britânica que contribuiu para o entendimento das estruturas moleculares do DNA, RNA, vírus, carvão mineral e grafite. Embora seus trabalhos sobre o carvão e o vírus tenham sido apreciadas em sua vida, suas contribuições para a descoberta da estrutura do DNA tiveram amplo reconhecimento póstumo.\n[…]\nFranklin é mais conhecida por seu trabalho com imagens da difração de raios-X do DNA, particularmente pela foto 51, enquanto trabalhava no King's College, em Londres, que levou à descoberta da dupla hélice do DNA, da qual James Watson, Francis Crick e Maurice Wilkins compartilharam o Prêmio Nobel de Fisiologia ou Medicina em 1962. Watson sugeriu que seria ideal que Franklin fosse premiada com um Prêmio Nobel de Química, juntamente com Wilkins, mas o Comitê Nobel não faz indicações póstumas.\n[…]\nFranklin, particularmente, a \"Foto 51\", foi utilizado para determinar corretamente a estrutura e função do DNA. As fotografias foram material de análise para o bioquímico norte-americano James Dewey Watson e britânicos Maurice Wilkins e Francis Crick confirmarem a dupla estrutura helicoidal da molécula do DNA, dando-lhes o Nobel de Fisiologia e Medicina no ano de 1962. Rosalind morreu de câncer aos 37 anos, em 1958.\n[…]\n«Rosalind Franklin (1920–1958)». Contributions of 20th century women to physics. UCLA\n[…]\n«Franklin, Rosalind Elsie (1920–1958), crystallographer». Oxford Dictionary of National Biography online ed. Oxford University Press. doi:10.1093/ref:odnb/37413  (Requer Subscrição ou ser sócio da biblioteca pública do Reino Unido.) by Sir Aaron Klug\n[…]\nElkin, Lynne. «Rosalind Elsie Franklin 1920–1958». Jewish Women's Encyclopedia\n[…]\n«Rosalind Franklin 1920–1958». Linus Pauling and the race for DNA, a documentary history\n[…]\nConlon, Anne Marie (2020). «Rosalind Franklin». New Scientist",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Xylella fastidiosa",
      "descricao": "Bactéria que ataca plantas, cujo genoma foi sequenciado por cientistas brasileiros em 2000."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 2000, cientistas paulistas publicaram o genoma da bactéria Xylella fastidiosa. Que lavoura ela ataca, causando a doença chamada amarelinho?",
    "resposta": "Laranja",
    "fonte": [
      "https://en.wikipedia.org/wiki/Xylella_fastidiosa"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Xylella_fastidiosa",
        "situacao": "ok",
        "texto": "Xylella fastidiosa is an aerobic, Gram-negative bacterium of the genus Xylella. It is a plant pathogen, that grows in the water transport tissues of plants (xylem vessels) and is transmitted exclusively by xylem sap-feeding insects such as sharpshooters and spittlebugs. Many plant diseases are due to infections of X.\n[…]\nXylella fastidiosa can infect an extremely wide range of plants, many of which do not show any symptoms of disease. Disease occurs in plant species that are susceptible due to blockage of water flow in the xylem vessels caused by several factors: bacterial obstruction, overreaction of the plant immune response (tylose formation), and formation of air embolisms. A strain of X.\n[…]\nXylella fastidiosa is rod-shaped, and at least one subspecies has two types of pili on only one pole; longer, type IV pili are used for locomotion, while shorter, type I pili assist in biofilm formation inside their hosts. As demonstrated using a PD-related strain, the bacterium has a characteristic twitching motion that enables groups of bacteria to travel upstream against heavy flow, such as that found in xylem vessels.\n[…]\nBy 2015, the disease had infected up to a million olive trees in Apulia and Xylella fastidiosa had reached Corsica, By October 2015, it had reached Mainland France, near Nice, in Provence-Alpes-Côte d'Azur, affecting the non-native myrtle-leaf milkwort (Polygala myrtifolia). This is the subspecies X. fastidiosa subsp. multiplex which is considered to be a different genetic variant of the bacterium to that found in Italy.\n[…]\nNotably, in 2016, olive leaf scorch was first detected in X. fastidiosa's native range, in Brazil.\n[…]\nBacterial leaf scorch\n[…]\nType strain of Xylella fastidiosa at BacDive - the Bacterial Diversity Metadatabase Archived 28 August 2017 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Xylella_fastidiosa",
        "situacao": "ok",
        "texto": "Xylella fastidiosa é uma bactéria Gram negativa da classe Gammaproteobacteria, família das Xanthomonadaceae, que vive e reproduz-se no xilema (aparelho condutor da seiva bruta) causadora de doenças em plantas economicamente importantes, como a praga do amarelinho que afeta laranjeiras. O género Xylella é monotípico.\n[…]\nPor estas características, o microrganismo é conhecido pelo dano grave que é capaz de causar uma variedade de culturas agrícolas, sendo a origem da doença de Pierce na videira (Pierce's disease), amarelinho dos citros (clorose variegada dos citrus) no Brasil.\n[…]\nMais de 100 espécies de plantas afetadas por Xylella spp, com doenças como a pluma ferida do pêssego, a queima das folhas de oleandro, cancro cítrico.; uma incidência significativa também foi relatada em ameixa, cereja e amêndoa.\n[…]\nO genoma de X. fastidiosa foi o primeiro de uma bactéria fitopatogênica a ser sequenciado no mundo, fruto de projeto pioneiro no Brasil lançado pela FAPESP.\n[…]\nOs sintomas de Xylella fastidiosa aparecem primeiramente nas folhas maduras da copa, surgindo pequenas manchas amareladas, espalhadas na parte lisa da folha e que correspondem a lesões de cor palha nas costas, essas manchas evoluem para lesões de cor palha dos dois lados da folha, podendo se tornar necróticas.\n[…]\nComo medidas de controle manejo temos a utilização de mudas que não possuam Xylella fastidiosa em novos plantios e em replantes, controle das cigarrinhas e das ervas invasoras com o uso de herbicidas, poda de ramos afetados, sendo realizados 20-30cm abaixo da última folha inferior que apresentar sintomas, manutenção do pomar onda haja a promoção de boas condições sanitárias e nutricionais, por fim a fiscalização e inspeções nos pomares, evitando novos focos da doença.==Referências==\n[…]\nProjeto genoma\n[…]\nXylella fastidiosa",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Formas Artísticas da Natureza",
      "descricao": "Livro de ilustrações de organismos, como radiolários e medusas, publicado por Ernst Haeckel entre 1899 e 1904."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "As ilustrações de seres marinhos do livro Formas Artísticas da Natureza, de Ernst Haeckel, influenciaram qual movimento artístico?",
    "resposta": "Art Nouveau",
    "distratores": [
      "Impressionismo",
      "Cubismo",
      "Barroco"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Kunstformen_der_Natur"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Kunstformen_der_Natur",
        "situacao": "ok",
        "texto": "Kunstformen der Natur (known in English as Art Forms in Nature) is a book of lithographic and halftone prints by German biologist Ernst Haeckel.\n[…]\nOriginally published in sets of ten between 1899 and 1904 and collectively in two volumes in 1904, it consists of 100 prints of various organisms, many of which were first described by Haeckel himself. Over the course of his career, over 1000 prints were produced based on Haeckel's sketches and watercolors; many of the best of these were chosen for Kunstformen der Natur, translated from sketch to print by lithographer Adolf Giltsch.\n[…]\nA second edition of Kunstformen, containing only 30 prints, was produced in 1914.\n[…]\nKunstformen der Natur was influential in early 20th-century art, architecture, and design, bridging the gap between science and art. In particular, many artists associated with Art Nouveau were influenced by Haeckel's images, including René Binet, Karl Blossfeldt, Hans Christiansen, and Émile Gallé. One prominent example is the Amsterdam Commodities Exchange designed by Hendrik Petrus Berlage: it was in part inspired by Kunstformen illustrations.\n[…]\nHaeckel's original classifications appear in italics.\n[…]\nBreidbach, Olaf. Visions of Nature: The Art and Science of Ernst Haeckel. Prestel Verlag: Munich, 2006.\n[…]\nMarine Biological Laboratory Library - An exhibition of material on Haeckel, including background on many Kunstformen der Natur plates.\n[…]\nUniversity Art Gallery, University of Massachusetts Dartmouth - An Ernst Haeckel exhibition from 2005 pairing prints from Kunstformen der Natur with modern sculptures.\n[…]\nKunstformen der Natur (PDF)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Kunstformen_der_Natur",
        "situacao": "ok",
        "texto": "Kunstformen der Natur (em língua portuguesa: Formas de Arte da Natureza) é um livro de ilustração científica da autoria do biólogo alemão Ernst Haeckel. A primeira edição do livro foi publicada na Alemanha em 1904 pela editora Verlag der Bibliographischen Instituts, Leipzig und Vienna. A técnica de impressão utilizada foi a cromolitografia. Haeckel trabalhou na sua concepção ao longo de cinco anos\n[…]\nKunstformen der Natur inclui 100 ilustrações de organismos muito variados, desde os radiolários e diatomáceas microscópicos a morcegos, orquídeas, e fósseis como as amonites.\n[…]\nUma segunda edição contendo apenas 30 ilustrações foi editada em 1924.\n[…]\nKunstformen der Natur influenciou a arte, arquitectura e desenho dos princípios do século XX, correlacionando ciência e arte. Em particular, muitos artistas associados com a Art Nouveau foram influenciados pelos desenhos de Haeckel, incluindo René Binet, Karl Blossfeldt, Hans Christiansen e Émile Gallé. Um exemplo deste facto é o Amsterdam Commodities Exchange, desenhado por Hendrik Petrus Berlage, que foi em parte inspirado pelas ilustrações de Kunstformen.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Cromossomo 2 humano",
      "descricao": "Segundo maior cromossomo humano, resultado da fusão de dois cromossomos ancestrais."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Chimpanzés e gorilas têm quarenta e oito cromossomos, e nós, quarenta e seis. O que aconteceu com o par que falta na linhagem humana?",
    "resposta": "Dois cromossomos se fundiram",
    "fonte": [
      "https://en.wikipedia.org/wiki/Chromosome_2"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Chromosome_2",
        "situacao": "ok",
        "texto": "Chromosome 2 is one of the twenty-three pairs of chromosomes in humans. People normally have two copies of this chromosome. Chromosome 2 is the second-largest human chromosome, spanning more than 242 million base pairs and representing almost eight percent of the total DNA in human cells.\n[…]\nThe correspondence of chromosome 2 to two ape chromosomes. The closest human relative, the chimpanzee, has nearly identical DNA sequences to human chromosome 2, but they are found in two separate chromosomes. The same is true of the more distant gorilla and orangutan.\n[…]\nIn 2026, it was reported that incomplete lineage sorting of segmental duplications defines the human chromosome 2 fusion site early during African great ape speciation.\n[…]\nThe following are some of the gene count estimates of human chromosome 2. Because researchers use different approaches to genome annotation, their predictions of the number of genes on each chromosome vary. Among various projects, the collaborative consensus coding sequence project (CCDS) takes an extremely conservative strategy. So CCDS's gene number prediction represents a lower bound on the total number of human protein-coding genes.\n[…]\nThe following is a partial list of genes on human chromosome 2. For complete list, see the link in the infobox on the right.\n[…]\nPartial list of the genes located on p-arm (short arm) of human chromosome 2:\n[…]\nPartial list of the genes located on q-arm (long arm) of human chromosome 2:\n[…]\nThe following diseases and traits are related to genes located on chromosome 2:\n[…]\nNational Institutes of Health. \"Chromosome 2\". Genetics Home Reference. Archived from the original on 9 March 2016. Retrieved 6 May 2017.\n[…]\n\"Chromosome 2\". Human Genome Project Information Archive 1990–2003. Retrieved 6 May 2017."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cromossoma_2",
        "situacao": "ok",
        "texto": "O cromossoma 2 é um dos 23 pares de cromossomas do cariótipo humano. É o segundo maior cromossoma humano. Tem cerca de 237 milhões de pares de bases e representa quase 8% do total de DNA nas células. Contém entre 1300 e 2000 genes.\n[…]\nO Cromossomo 2 é amplamente aceito como resultado de uma fusão telômero-telômero entre dois cromossomos ancestrais. As evidências disso incluem:\n[…]\nA correspondência do cromossomo 2 com dois cromossomos de símios. O parente mais próximo do homem, o chimpanzé, tem seqüências de DNA quase totalmente idênticas ao cromossomo 2 humano porém em dois cromossomos separados. O mesmo é fato para mais distantes como o gorila e o orangotango.\n[…]\nA presença de um centrômero vestigial. Normalmente um cromossomo possui apenas um centrômero mas no cromossomo 2 encontram-se vestígios de um segundo.\n[…]\nA presença de telômeros vestigiais. Esses são normalmente encontrados apenas nos finais do cromossomo mas no cromossomo 2 encontramos seqüências de telômeros no meio.\n[…]\nO cromossomo 2 é, assim, forte evidência da origem comum de humanos e outros primatas. Segundo o pesquisador J. W. IJdo:\n[…]\n\"Nós concluimos que o locus clonado nos cosmídios c8.1 e c29B é a lembrança de uma antiga fusão telômero-telômero e marca o ponto em que dois cromossomos simiescos ancestrais fundiram-se originando o cromossomo 2 humano.\"\n[…]\nAlguns dos genes localizados no cromossoma 2:\n[…]\nAlgumas das doenças relacionadas com genes localizados no cromossoma 2:\n[…]\nEsclerose lateral amiotrófica, tipo 2",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Gene",
      "descricao": "Unidade básica da hereditariedade, um trecho do material genético que carrega uma informação herdável."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Antes de 1944, quando se provou que os genes são feitos de DNA, de que tipo de molécula a maioria dos cientistas achava que eles eram feitos?",
    "resposta": "Proteínas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Avery%E2%80%93MacLeod%E2%80%93McCarty_experiment"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Avery%E2%80%93MacLeod%E2%80%93McCarty_experiment",
        "situacao": "ok",
        "texto": "The Avery–MacLeod–McCarty experiment was an experimental demonstration by Oswald Avery, Colin MacLeod, and Maclyn McCarty that, in 1944, reported that DNA is the substance that causes bacterial transformation, in an era when it had been widely believed that it was proteins that served the function of carrying genetic information (with the very word protein itself coined to indicate a belief that i\n[…]\nIn their paper \"Studies on the Chemical Nature of the Substance Inducing Transformation of Pneumococcal Types: Induction of Transformation by a Desoxyribonucleic Acid Fraction Isolated from Pneumococcus Type III\", published in the February 1944 issue of the Journal of Experimental Medicine, Avery and his colleagues suggest that DNA, rather than protein as widely believed at the time, may be the hereditary material of bacteria, and could be analogous to genes  and/or viruses in higher organisms.\n[…]\nDNA was therefore thought to be the structural component of chromosomes, whereas the genes were thought likely to be made of the protein component of chromosomes.\n[…]\nThis line of thinking was reinforced by the 1935 crystallization of tobacco mosaic virus by Wendell Stanley, and the parallels among viruses, genes, and enzymes; many biologists thought genes might be a sort of \"super-enzyme\", and viruses were shown according to Stanley to be proteins and to share the property of autocatalysis with many enzymes. Furthermore, few biologists thought that genetics could be applied to bacteria, since they lacked chromosomes and sexual reproduction.\n[…]\nFruton, Joseph S. (1999). Proteins, enzymes, genes: the interplay of chemistry and biology. New Haven, Conn: Yale University Press. ISBN 978-0-300-07608-0.\n[…]\nStegenga, Jacob (2011). \"The chemical characterization of the gene: vicissitudes of evidential assessment\". History and Philosophy of the Life Sciences. 33 (1): 105–127. PMID 21789957."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Experimento_de_Avery%E2%80%93MacLeod%E2%80%93McCarty",
        "situacao": "ok",
        "texto": "O experimento de Avery–MacLeod–McCarty foi uma demonstração experimental conduzida por Oswald Avery, Colin MacLeod e Maclyn McCarty, publicada em 1944, que revelou que o DNA é a substância responsável pela transformação bacteriana. Na época, acreditava-se amplamente que as proteínas eram as portadoras da informação genética, com o próprio termo \"proteína\" sendo criado para indicar sua função consi\n[…]\nNo artigo \"Studies on the Chemical Nature of the Substance Inducing Transformation of Pneumococcal Types: Induction of Transformation by a Desoxyribonucleic Acid Fraction Isolated from Pneumococcus Type III\", publicado na edição de fevereiro de 1944 do Journal of Experimental Medicine [en], Avery e seus colegas sugeriram que o DNA, e não a proteína como se acreditava, poderia ser o material hereditário das bactérias, com possíveis analogias a genes e/ou vírus em organismos superiores.\n[…]\nSegundo a influente \"hipótese do tetranucleotídeo [en]\" de Phoebus Levene [en], o DNA consistia em unidades repetitivas de quatro bases nucleotídicas, com baixa especificidade biológica, sendo considerado apenas um componente estrutural dos cromossomos, enquanto os genes seriam provavelmente formados pela componente proteica.\n[…]\nApesar de seus resultados experimentais serem menos precisos (eles encontraram uma quantidade não insignificante de proteína entrando nas células junto com o DNA), o experimento de Hershey–Chase não enfrentou o mesmo grau de contestação. Sua influência foi amplificada pela crescente rede do American Phage Group e, no ano seguinte, pela publicidade em torno da estrutura do DNA proposta por Watson e Crick (Watson também era membro do grupo).\n[…]\nFruton, Joseph S. (1999). Proteins, enzymes, genes: the interplay of chemistry and biology (em inglês). New Haven, Conn: Yale University Press. ISBN 978-0-300-07608-0",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "A Origem das Espécies",
      "descricao": "Livro de Charles Darwin, publicado em 1859, que apresenta a teoria da evolução por seleção natural."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "A primeira edição de A Origem das Espécies não usa a palavra evolução. Em que ponto do livro aparece a palavra evoluíram?",
    "resposta": "É a última palavra do livro",
    "fonte": [
      "https://en.wikipedia.org/wiki/On_the_Origin_of_Species"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/On_the_Origin_of_Species",
        "situacao": "ok",
        "texto": "On the Origin of Species by Means of Natural Selection, or the Preservation of Favoured Races in the Struggle for Life is a work of scientific literature by the English naturalist Charles Darwin that is considered to be the foundation of evolutionary biology. It was published on 24 November 1859.\n[…]\nThis slowly effected process results in populations changing to adapt to their environments, and ultimately, these variations accumulate over time to form new species (inference).\n[…]\nDarwin added the phrase \"by the Creator\" from the 1860 second edition onwards, so that the ultimate sentence begins \"There is grandeur in this view of life, with its several powers, having been originally breathed by the Creator into a few forms or into one\".\n[…]\nTransmutation of species\n[…]\nOn the Origin of Species – Full text at Wikisource of the 1st edition, 1859\n[…]\nThe Origin of Species – Full text at Wikisource of the 6th edition, 1872\n[…]\nTable of contents, bibliography of On the Origin of Species – links to text and images of all six British editions of The Origin of Species, the 6th edition with additions and corrections (final text), the first American edition, and translations into Danish, Dutch, French, German, Polish, Russian and Spanish\n[…]\nOn the Origin of Species at Standard Ebooks\n[…]\nOn the Origin of Species at Project Gutenberg (6th ed.)\n[…]\nOn the Origin of Species public domain audiobook at LibriVox\n[…]\nOn the Origin of Species on In Our Time at the BBC\n[…]\nOn the Origin of Species, full text with embedded audio\n[…]\nOn the Origin of Species—View online at the Biodiversity Heritage Library the 1860 American edition, D. Appleton and Company, New York, with front insert by H. E. Barker, Lincolniana\n[…]\nDarwin's notes on the creation of On the Origin of Species digitised in Cambridge Digital Library"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/A_Origem_das_Esp%C3%A9cies",
        "situacao": "ok",
        "texto": "A Origem das Espécies (ou, mais completamente, A Origem das Espécies por Meio da Seleção Natural, ou Preservação das Raças Favorecidas na Luta pela Vida) é uma obra de literatura científica escrita por Charles Darwin, que é considerada a base da biologia evolutiva. Publicado em 24 de novembro de 1859, ele introduziu a teoria científica de que as formas de vida evoluem ao longo das gerações por mei\n[…]\nCom a persuasão de Murray, o título acabou sendo aceito como On the Origin of Species, com a página do título acrescentada by Means of Natural Selection, or the Preservation of Favoured Races in the Struggle for Life. Neste título estendido (e em outras partes do livro) Darwin usou o termo biológico \"raças\" intercambiavelmente com \"variedades\", significando variedades dentro de uma espécie.\n[…]\nOn the Origin of Species foi publicado pela primeira vez na quinta-feira, 24 de novembro de 1859, ao preço de quinze xelins, com uma primeira impressão de 1 250 cópias. O livro foi oferecido a livreiros na liquidação de outono de Murray na terça-feira, 22 de novembro, e todas as cópias disponíveis foram compradas imediatamente.\n[…]\nDarwin fez extensas revisões na sexta edição da Origin (esta foi a primeira edição em que ele usou a palavra \"evolução\", que costumava ser associada ao desenvolvimento embriológico, embora todas as edições concluíssem com a palavra \"evoluído\"), e adicionou um novo capítulo VII, Miscellaneous objections, para abordar os argumentos de Mivart.\n[…]\nHouve muito menos controvérsia do que com a publicação Vestiges of Creation em 1844, que foi rejeitada pelos cientistas, mas influenciou um amplo público leitor a acreditar que a natureza e a sociedade humana eram governadas por leis naturais. A Origem das Espécies, como livro de amplo interesse geral, tornou-se associado a ideias de reforma social.\n[…]\nLivro eletrônico sobre a origem das espécies fornecido pelo Project Gutenberg",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "HMS Beagle",
      "descricao": "Navio da Marinha Real britânica em que Charles Darwin viajou ao redor do mundo entre 1831 e 1836."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "A viagem do Beagle com Darwin estava planejada para durar dois anos. Quanto tempo ela acabou durando?",
    "resposta": "Quase cinco anos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Second_voyage_of_HMS_Beagle",
      "https://en.wikipedia.org/wiki/Charles_Darwin"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Second_voyage_of_HMS_Beagle",
        "situacao": "ok",
        "texto": "The second survey expedition of HMS Beagle took place from 27 December 1831 to 2 October 1836. Robert FitzRoy, the newest commander of Beagle, had thought of the advantages of having someone onboard who could investigate geology, and sought a naturalist to accompany them as a supernumerary. At the age of 22, the graduate Charles Darwin hoped to see the tropics before becoming a parson, and accepte\n[…]\nThey rejoined Beagle at Montevideo.\n[…]\nIn Cape Town, missionaries were being accused of causing racial tension and profiteering, and after Beagle set to sea on 18 June, FitzRoy wrote an open letter to the evangelical South African Christian Recorder on the Moral State of Tahiti incorporating extracts from both his and Darwin's diaries to defend the reputation of missionaries. This was given to a passing ship that took it to Cape Town to become FitzRoy's (and Darwin's) first published work.\n[…]\nBeagle reached Ascension Island on 19 July 1836, and Darwin was delighted to receive letters from his sisters with news that Sedgwick had written to Dr. Butler: \"He is doing admirably in S.\n[…]\nDarwin was glad to see the beauties of the jungle for one last time but now compared \"the stately Mango trees with the Horse Chesnuts of England.\" The return trip was delayed for a further 11 days when weather forced Beagle to shelter further up the coast at Pernambuco, where Darwin examined rocks for signs of elevation, noted \"Mangroves like rank grass\", and investigated marine invertebrates at various depths on the sandbar. Beagle departed for home on 17 August.\n[…]\nRookmaaker, Kees (2009), Darwin's itinerary on the voyage of the Beagle, Darwin Online, retrieved 18 August 2009\n[…]\n\"Darwin and the Beagle voyage\". Darwin Correspondence Project. 11 February 2021. Retrieved 20 December 2021.\n[…]\nDarwin Correspondence Project Text and notes for most of his letters\n[…]\nDarwin in Galapagos: Footsteps to a New World"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Charles_Darwin",
        "situacao": "ok",
        "texto": "Charles Robert Darwin ( DAR-win; 12 February 1809 – 19 April 1882) was an English naturalist, geologist, and biologist, widely known for his contributions to evolutionary biology. His proposition that all species of life have descended from a common ancestor is now generally accepted and considered a fundamental scientific concept.\n[…]\nDarwin's interaction with Yaghans (Fuegians) such as Jemmy Button during the second voyage of HMS Beagle had a profound impact on his view of indigenous peoples. At his arrival in Tierra del Fuego, he made a colourful description of \"Fuegian savages\". This view changed as he came to know the Yaghan people more in detail.\n[…]\nDarwin was a prolific writer. Even without the publication of his works on evolution, he would have had a considerable reputation as the author of The Voyage of the Beagle, as a geologist who had published extensively on South America and had solved the puzzle of the formation of coral atolls, and as a biologist who had published the definitive work on barnacles.\n[…]\nGeographical features given his name include Darwin Sound and Mount Darwin, both named while he was on the Beagle voyage, and Darwin Harbour, named by his former shipmates on its next voyage, which eventually became the location of Darwin, the capital city of Australia's Northern Territory. Darwin's name was given, formally or informally, to numerous plants and animals, including many he had collected on the voyage.\n[…]\nFrom 2000 to 2017, UK£10 banknotes issued by the Bank of England featured Darwin's portrait printed on the reverse, along with a hummingbird and HMS Beagle. Darwin's bicentennial was celebrated with a series of postage stamps in the United Kingdom.\n[…]\nFieser, James; Dowden, Bradley (eds.). \"Charles Darwin\". Internet Encyclopedia of Philosophy. ISSN 2161-0002. OCLC 37741658."
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Leis de Mendel",
      "descricao": "Princípios da hereditariedade formulados por Gregor Mendel a partir de cruzamentos de ervilhas."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Nos cruzamentos de ervilhas, Mendel acompanhou quantas características diferentes, como a cor e a forma das sementes?",
    "resposta": "Sete",
    "fonte": [
      "https://en.wikipedia.org/wiki/Gregor_Mendel"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Gregor_Mendel",
        "situacao": "ok",
        "texto": "Gregor Johann Mendel (; German: [ˈmɛndl̩]; Czech: Řehoř Jan Mendel; 20 July 1822 – 6 January 1884) was an Austrian biologist, meteorologist, mathematician, Augustinian friar and abbot of St. Thomas' Abbey in Brno (Brünn), Margraviate of Moravia. Mendel was born in a German-speaking family in the Silesian part of the Austrian Empire (today's Czech Republic) and gained posthumous recognition as the \n[…]\nMendel's alleged observations, according to Fisher, were \"abominable,\" \"shocking,\"  and \"cooked.\"\n[…]\nIn 2008 Hartl and Fairbanks (with Allan Franklin and AWF Edwards) wrote a comprehensive book in which they concluded that there were no reasons to assert Mendel fabricated his results, nor that Fisher deliberately tried to diminish Mendel's legacy. Reassessment of Fisher's statistical analysis, according to these authors, also disproves the notion of confirmation bias in Mendel's results.\n[…]\nMount Mendel in New Zealand's Paparoa Range was named after him in 1970 by the Department of Scientific and Industrial Research. In celebration of his 200th birthday, Mendel's body was exhumed and his DNA sequenced.\n[…]\nMendel Museum of Genetics\n[…]\nMendel Polar Station in Antarctica\n[…]\nMendel University in Brno\n[…]\nMendelian error\n[…]\nThe Gardener of God, an Italian docudrama about the life and works of Gregor Mendel\n[…]\nWorks by Gregor Mendel at Project Gutenberg\n[…]\nWorks by or about Gregor Mendel at the Internet Archive\n[…]\nWorks by Gregor Mendel at LibriVox (public domain audiobooks)\n[…]\n1913 Catholic Encyclopedia entry, \"Mendel, Mendelism\"\n[…]\nBiography of Gregor Mendel\n[…]\nGregor Mendel (1822–1884)\n[…]\nGregor Mendel Primary Sources\n[…]\nJohann Gregor Mendel: Why his discoveries were ignored for 35 (72) years (in German)\n[…]\nMasaryk University to rebuild Mendel's greenhouse | Brno Now\n[…]\nMendel Museum of Genetics\n[…]\nMendel's Paper in English\n[…]\nOnline Mendelian Inheritance in Man\n[…]\nVillanova University Mendel Collection"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Gregor_Mendel",
        "situacao": "ok",
        "texto": "Gregor Johann Mendel OSA (Heinzendorf bei Odrau, 20 de julho de 1822 — Brno, 6 de janeiro 1884) foi um biólogo, botânico, frade agostiniano da Igreja Católica e meteorologista austríaco.\n[…]\nApós experimentos iniciais com plantas de ervilha, Mendel decidiu estudar sete características que pareciam ser herdadas independentemente de outras características: forma da semente, cor da flor, matiz do tegumento da semente, forma da vagem, cor da vagem verde, localização da flor e altura da planta. Ele primeiro se concentrou na forma da semente, que era angular ou redonda.\n[…]\nEntre 1856 e 1863 Mendel cultivou e testou cerca de 28 000 plantas, a maioria das quais eram plantas de ervilha (Pisum sativum). Este estudo mostrou que, quando diferentes variedades de reprodução verdadeira foram cruzadas entre si (por exemplo, plantas altas fertilizadas por plantas baixas), na segunda geração, uma em cada quatro plantas de ervilha tinha características recessivas de raça pura, dois em cada quatro eram híbridos e um em cada quatro era dominante de raça pura.\n[…]\nMendel também fez experiências com Hieracium e abelhas. Ele publicou um relatório sobre seu trabalho com o falcão, um grupo de plantas de grande interesse para os cientistas da época por causa de sua diversidade. No entanto, os resultados do estudo de herança de Mendel em Hieracium foram diferentes de seus resultados para ervilhas; a primeira geração era muito variável e muitos de seus descendentes eram idênticos aos pais maternos.\n[…]\n1856 — Inicia as suas experiências nos jardins do mosteiro onde cruza as ervilhas e diferentes árvores.\n[…]\n1863 — Acaba as suas experiências em animais e plantas que duraram cerca de sete anos.",
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
