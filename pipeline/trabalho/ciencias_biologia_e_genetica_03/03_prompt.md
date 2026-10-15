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
7. **Distratores** (só em `multipla`): críveis, da mesma categoria da resposta e com no máximo 4 palavras (MANIFESTO §6). Uma pergunta `aberta` cuja resposta é um ano ou uma data deve ser reescrita como `multipla`, com 3 anos ou datas próximos e críveis (MANIFESTO §6).
8. **Duplicatas:** se duas perguntas do lote perguntam o mesmo fato, mantenha a melhor e descarte a outra.

Devolva exatamente uma avaliação para cada pergunta, usando o `indice` informado.

# Lote

[
  {
    "indice": 1,
    "ancora": {
      "nome": "Vacúolo",
      "descricao": "Organela das células, especialmente desenvolvida nas plantas, que armazena água, sais e outras substâncias."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Nas células das plantas, qual organela cheia de líquido costuma ser a maior de todas, ocupando boa parte do volume da célula?",
    "resposta": "Vacúolo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Vacuole"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Vacuole",
        "situacao": "ok",
        "texto": "A vacuole () is a membrane-bound organelle which is present in plant and fungal cells and some protist, animal, and bacterial cells. Vacuoles are essentially enclosed compartments which are filled with water containing inorganic and organic molecules including enzymes in solution, though in certain cases they may contain solids which have been engulfed. Vacuoles are formed by the fusion of multipl\n[…]\nAllowing plants to support structures such as leaves and flowers due to the pressure of the central vacuole\n[…]\nThe vacuole probably evolved several times independently, even within the Viridiplantae.\n[…]\nTurgor pressure exerted by vacuoles is also required for cellular elongation: as the cell wall is partially degraded by the action of expansins, the less rigid wall is expanded by the pressure coming from within the vacuole. Turgor pressure exerted by the vacuole is also essential in supporting plants in an upright position. Another function of a central vacuole is that it pushes all contents of the cell's cytoplasm against the cellular membrane, and thus keeps the chloroplasts closer to light.\n[…]\nA contractile vacuole is a specialized osmoregulatory organelle that is present in many free-living protists. The contractile vacuole is part of the contractile vacuole complex which includes radial arms and a spongiome. The contractile vacuole complex works periodically contracts to remove excess water and ions from the cell to balance water flow into the cell.\n[…]\nWhen the contractile vacuole is slowly taking water in, the contractile vacuole enlarges, this is called diastole and when it reaches its threshold, the central vacuole contracts then contracts (systole) periodically to release water.\n[…]\nFood vacuoles (also called digestive vacuole) are organelles found in certain protists, such as ciliates, amoeboids and Plasmodium falciparum, a protozoan parasite that causes malaria."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Vac%C3%BAolo",
        "situacao": "ok",
        "texto": "Os vacúolos (do latim \"vaccuus\" - vácuo) são estruturas celulares, muito abundantes nas células vegetais, contidas no citoplasma da célula, com formato mais ou menos esférico ou ovalado, geradas pela própria célula ao criar uma membrana fechada que isola um certo volume celular do resto do citoplasma. Seu conteúdo é fluido e armazenam produtos de nutrição ou de excreção, podendo conter enzimas lis\n[…]\nAs células vegetais imaturas contêm um grande número de pequenos vacúolos que aumentam de tamanho e fundem-se num grande (geralmente chamado de \"vacúolo central\") à medida que a célula cresce. Na maioria das células maduras, este enorme vacúolo central ocupa a maior parte do volume celular, atingindo os 80% em certos tipos de células e em determinadas circunstâncias. Neste caso, o citoplasma é reduzido a uma camada muito fina pressionada contra a parede celular.\n[…]\nOutras funções são a desintegração das macromoléculas e a reciclagem dos seus componentes no interior da célula. Todas as organelas celulares, ribossomass, mitocôndriass e plastídeos podem ser depositadas e serão degradadas em vacúolos. Devido à sua grande atividade digestiva, os vacúolos das células vegetais são comparados aos lisossomas das células animais.\n[…]\nPara além do armazenamento, a principal função do vacúolo central é manter o turgor da célula pressionando parede celular. Por osmose, a água difunde-se no vacúolo, regulando a pressão na parede celular. A pressão osmótica é diretamente proporcional à quantidade de moléculas e iões dissolvidos. No vacúolo, a pressão osmótica é sempre superior à pressão atmosférica (de 2 a 20 atm).\n[…]\nEmbora ricos em aminoácidos, os vacúolos são relativamente pobres em proteínas. Não contêm mais de 5% do total de proteínas da célula (quando representam 80% do seu volume). São todas proteínas hidrolíticas (proteasess, esterases etc.), capazes de degradar moléculas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Cromossomo 21",
      "descricao": "Um dos 23 pares de cromossomos humanos, o menor deles em tamanho."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Os cromossomos humanos foram numerados mais ou menos do maior para o menor, mas a ordem saiu trocada no fim. Qual é, de fato, o menor?",
    "resposta": "Cromossomo 21",
    "distratores": [
      "Cromossomo 22",
      "Cromossomo Y",
      "Cromossomo 20"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Chromosome_21"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Chromosome_21",
        "situacao": "ok",
        "texto": "Chromosome 21 is one of the 23 pairs of chromosomes in humans. Chromosome 21 is both the smallest human autosome and chromosome, with 46.7 million base pairs (the building material of DNA) representing about 1.5 percent of the total DNA in cells. Most people have two copies of chromosome 21, while those with three copies of chromosome 21 (trisomy 21) have Down syndrome.\n[…]\nDuplication in amyloid precursor protein (APP) locus (duplicated segment varies in length but includes APP) on chromosome 21 was found to cause early onset familial Alzheimer's disease in a French family set and a Dutch family set. Compared to Alzheimer's caused by missense mutations in APP, the frequency of the Alzheimer's caused by APP duplications is significant.\n[…]\nAntonarakis SE, Lyle R, Dermitzakis ET, Reymond A, Deutsch S (2004). \"Chromosome 21 and down syndrome: from genomics to pathophysiology\". Nat Rev Genet. 5 (10): 725–38. doi:10.1038/nrg1448. PMID 15510164. S2CID 5487794.\n[…]\nAntonarakis SE, Lyle R, Deutsch S, Reymond A (2002). \"Chromosome 21: a small land of fascinating disorders with unknown pathophysiology\". Int J Dev Biol. 46 (1): 89–96. PMID 11902692.\n[…]\nAntonarakis SE (2001). \"Chromosome 21: from sequence to applications\". Curr Opin Genet Dev. 11 (3): 241–6. doi:10.1016/S0959-437X(00)00185-4. PMID 11377958.\n[…]\nGilbert F (1997). \"Disease genes and chromosomes: disease maps of the human genome. Chromosome 21\". Genet Test. 1 (4): 301–6. doi:10.1089/gte.1997.1.301. PMID 10464663.\n[…]\n\"The DNA sequence of human chromosome 21\". Nature. 405 (6784): 311–9. Bibcode:2000Natur.405..311H. doi:10.1038/35012518. PMID 10830953.\n[…]\nNational Institutes of Health. \"Chromosome 21\". Genetics Home Reference. Archived from the original on 2011-06-05. Retrieved 2017-05-06.\n[…]\n\"Chromosome 21\". Human Genome Project Information Archive 1990–2003. Retrieved 2017-05-06."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cromossomo_21",
        "situacao": "ok",
        "texto": "O cromossomo 21 é um dos 23 pares de cromossomos do cariótipo humano. Este cromossomo aparece normalmente em duplicado nos humanos, sendo o menor cromossomo humano.\n[…]\nTrissomia 21 (ou Síndrome de Down)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Par de bases",
      "descricao": "Ligação entre duas bases nitrogenadas complementares que une as duas fitas do DNA, adenina com timina e citosina com guanina."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "No DNA, a adenina se liga à timina, e a citosina à guanina. Qual desses dois pares se une com mais força?",
    "resposta": "Citosina e guanina",
    "fonte": [
      "https://en.wikipedia.org/wiki/Base_pair"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Base_pair",
        "situacao": "ok",
        "texto": "A base pair (bp) is a fundamental unit of double-stranded nucleic acids consisting of two nucleobases bound to each other by hydrogen bonds. They form the building blocks of the DNA double helix and contribute to the folded structure of both DNA and RNA.\n[…]\nIntramolecular base pairs can occur within single-stranded nucleic acids. This is particularly important in RNA molecules (e.g., transfer RNA), where Watson–Crick base pairs (guanine–cytosine and adenine-uracil) permit the formation of short double-stranded helices, and a wide variety of non–Watson–Crick interactions (e.g., G–U or A–A) allow RNAs to fold into a vast range of specific three-dimensional structures.\n[…]\nChemical analogs of nucleotides can take the place of proper nucleotides and establish non-canonical base-pairing, leading to errors (mostly point mutations) in DNA replication and DNA transcription. This is due to their isosteric chemistry. One common mutagenic base analog is 5-bromouracil, which resembles thymine but can base-pair to guanine in its enol form.\n[…]\nkb (= kbp) = kilo–base-pair = 1,000 bp\n[…]\nMb (= Mbp) = mega–base-pair = 1,000,000 bp\n[…]\nGb (= Gbp) = giga–base-pair = 1,000,000,000 bp\n[…]\nTo distinguish between units of computer storage and bases, kbp, Mbp, Gbp, etc. may be used for base pairs.\n[…]\nAn unnatural base pair (UBP) is a designed subunit (or nucleobase) of DNA which is created in a laboratory and does not occur in nature. DNA sequences have been described which use newly created nucleobases to form a third base pair, in addition to the two base pairs found in nature, A•T (adenine – thymine) and G•C (guanine – cytosine). A few research groups have been searching for a third base pair for DNA, including teams led by Steven A. Benner, Philippe Marliere, Floyd E."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Par_de_bases",
        "situacao": "ok",
        "texto": "Em genética e biologia molecular um par de bases consiste em dois nucleotídeos opostos e complementares nas cadeias de ADN e ARN que estão conectadas por ligações de hidrogênio (frequentemente chamadas pb ou do inglês base pair, bp).\n[…]\nNa canônica paridade de bases Watson-Crick, adenina (A) forma um par de base com timina (T), como a guanina (G) faz par com a citosina (C) no DNA. No ARN, a timina é substituída pelo uracilo (U), conectando-se este com a adenosina. A paridade de base não nos moldes Watson-Crick com alternados padrões de ligações de hidrogênio também ocorre, especialmente no RNA; tais padrões comuns são os pares de bases Hoogsteen.\n[…]\nUma quilobase (em algumas obras kilobase) é uma unidade de medida em biologia molecular significando 1 000 pares de bases de DNA ou RNA.\n[…]\nUm sequência de DNA de bases em paridade:\n[…]\nA correspondente sequência de RNA de bases em paridade, na qual uracilo é substituído por timina:\n[…]\npar de bases (da inglês base pair) — um bp corresponde a aproximadamente 3,4 Å de comprimento ao longo da cadeia\n[…]\nkilo (quilo) pares de bases = 1 000 bp\n[…]\nmega pares de bases = 1 000 000 bp\n[…]\ngiga pares de bases = 1 000 000 000 bp\n[…]\nNo caso de cadeias isoladas de DNA/RNA nós falamos sobre nucleotídeos, abreviados nt (ou knt, Mnt, Gnt), proporcionais aos pares de bases, como eles não estão em pares.\n[…]\nPara distinção entre unidade de armazenamento de dados em computação e bases kbp, Mbp, Gbp, etc., devem ser usados para desambiguação.\n[…]\nO centimorgan é frequentemente usado por implicar comprimento ao longo de um cromossomo, mas o número de pares de bases ao qual corresponde varia grandemente. No genoma humano é equivalente a aproximadamente 1 milhão de pares de bases.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Cebola",
      "descricao": "Planta Allium cepa, hortaliça de bulbo muito usada na culinária e em aulas de microscopia."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Muito usada nas aulas para observar células ao microscópio, que hortaliça tem um genoma cerca de cinco vezes maior que o humano?",
    "resposta": "Cebola",
    "fonte": [
      "https://en.wikipedia.org/wiki/Onion_test"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Onion_test",
        "situacao": "ok",
        "texto": "The onion test is a way of assessing the validity of an argument for a functional role for junk DNA. It relates to the paradox that would emerge if the majority of eukaryotic non-coding DNA were assumed to be functional and the difficulty of reconciling that assumption with the diversity in genome sizes among species. The term \"onion test\" was originally proposed informally in a blog post by T. Ry\n[…]\nWhatever your proposed function, ask yourself this question: Can I explain why an onion needs about five times more non-coding DNA for this function than a human?Onions and their relatives vary dramatically in their genome sizes, without changing their ploidy, and this gives an exceptionally valuable window on the genomic expansion of junk DNA. Since the onion (Allium cepa) is a diploid organism having a haploid genome size of 15.9 Gb, it has 4.9x as much DNA as does a human genome (3.2 Gb).\n[…]\nOther species in the genus Allium vary hugely in DNA content without changing their ploidy. Allium schoenoprasum (chives) for example has a haploid genome size of 7.5 Gb, less than half that of onions, yet Allium ursinum (wild garlic) has a haploid genome size of 30.9 Gb, nearly twice (1.94x) that of onion and over four times (4.1x) that of chives.\n[…]\nThis extreme size variation between closely related species in the genus Allium is also part of the extended onion test rationale as originally defined:Further, if you think perhaps onions are somehow special, consider that members of the genus Allium range in genome size from 7 pg to 31.5 pg. So why can A. altyncolicum make do with one fifth as much regulation, structural maintenance, protection against mutagens, or [insert preferred universal function] as A. ursinum?\n[…]\nFreeling et al. proposed a genome balance hypothesis that presumably accounts for the C-Value Paradox and passes the Onion Test."
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Besouro",
      "descricao": "Inseto da ordem Coleoptera, de asas anteriores endurecidas, a ordem de animais com mais espécies descritas."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Que grupo de insetos reúne mais espécies descritas do que qualquer outro grupo de animais?",
    "resposta": "Besouros",
    "distratores": [
      "Formigas",
      "Borboletas",
      "Moscas"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Beetle"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Beetle",
        "situacao": "ok",
        "texto": "Beetles are insects that form the order Coleoptera (), in the superorder Holometabola. Their front pair of wings are hardened into wing-cases, elytra, distinguishing them from most other insects. The Coleoptera, with about 400,000 described species, is the largest of all orders, constituting almost 40% of described arthropods and 25% of all known animal species; new species are discovered frequent\n[…]\nSeveral species of dung beetle, especially the sacred scarab, Scarabaeus sacer, were revered in Ancient Egypt. The hieroglyphic image of the beetle may have had existential, fictional, or ontologic significance. Images of the scarab in bone, ivory, stone, Egyptian faience, and precious metals are known from the Sixth Dynasty and up to the period of Roman rule. The scarab was of prime significance in the funerary cult of ancient Egypt.\n[…]\nBeetles are mentioned as a symbol of the sun, as in ancient Egypt, in Plutarch's 1st century Moralia. The Greek Magical Papyri of the 2nd century BC to the 5th century AD describe scarabs as an ingredient in a spell.\n[…]\nPliny the Elder discusses beetles in his Natural History, describing the stag beetle: \"Some insects, for the preservation of their wings, are covered with an erust (elytra)—the beetle, for instance, the wing of which is peculiarly fine and frail.\n[…]\nBeetle collecting became extremely popular in the Victorian era. The naturalist Alfred Russel Wallace collected (by his own count) a total of 83,200 beetles during the eight years described in his 1869 book The Malay Archipelago, including 2,000 species new to science.\n[…]\nSeveral coleopteran adaptations have attracted interest in biomimetics with possible commercial applications. The bombardier beetle's powerful repellent spray has inspired the development of a fine mist spray technology, claimed to have a low carbon impact compared to aerosol sprays.\n[…]\nBeetle Monuments\n[…]\nBeetles – Coleoptera"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Besouro",
        "situacao": "ok",
        "texto": "Os besouros são os insetos que formam a ordem dos coleópteros (Coleoptera), pertencente à superordem dos holometábolos. Seu par frontal de asas é endurecido em élitros, distinguindo-os da maioria dos outros insetos.\n[…]\nOs besouros são, de longe, a maior ordem de insetos: as aproximadamente 400 mil espécies representam cerca de 40% de todas as espécies de artrópodes descritas até o momento e cerca de 25% de todas as espécies animais.\n[…]\nOs élitros de besouros representam cerca de 40% de todos os fósseis de insetos encontrados, tornando a ordem o grupo mais abundante do depósito. Os ortópteros ocupam o segundo lugar, com aproximadamente 22% dos espécimes. No total, já foram reconhecidas 66 espécies distribuídas em 11 ordens. Assim como nos depósitos jurássicos de Dorset, ortópteros e coleópteros estão entre os grupos mais abundantes.\n[…]\nComo muitas outras ordens de insetos, possuem garras, geralmente um par, na extremidade do último segmento tarsal de cada perna. Dada a diversidade do grupo, as pernas de muitos coleópteros apresentam ampla diversidade de modificações funcionais. Besouros-aquáticos, incluindo os ditiscídeos, haliplídeos e muitas espécies de hidrofilídeos, têm as pernas, frequentemente o último par, modificadas para natação, tipicamente com fileiras de pelos longos.\n[…]\nCerca de 90% das espécies de besouros entram em um período de diapausa adulta, uma fase de repouso com metabolismo reduzido para suportar condições ambientais desfavoráveis. A diapausa adulta é a forma mais comum de diapausa em coleópteros.\n[…]\nA Alemanha testou seu programa de armamento com esse escaravelho ao sul de Francoforte, liberando 54 mil besouros.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Cetáceos",
      "descricao": "Ordem de mamíferos aquáticos que reúne as baleias, os golfinhos e os botos."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Segundo os estudos de DNA, qual é o parente vivo mais próximo das baleias e dos golfinhos?",
    "resposta": "Hipopótamo",
    "distratores": [
      "Peixe-boi",
      "Foca",
      "Morsa"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Cetacea",
      "https://en.wikipedia.org/wiki/Whippomorpha"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cetacea",
        "situacao": "ok",
        "texto": "Cetaceans are marine mammals belonging to the infraorder Cetacea (), a secondarily aquatic clade under the order Artiodactyla that include whales, dolphins, porpoises and extinct groups such as Basilosaurus. Most cetaceans live in marine environments, particularly the pelagic zone, but some reside solely in brackish or fresh water. Having a cosmopolitan distribution, they can be found in some rive\n[…]\nIn the 10th edition of Systema Naturae (1758), Swedish biologist and taxonomist Carl Linnaeus asserted that cetaceans were mammals and not fish. His groundbreaking binomial system formed the basis of modern whale classification.\n[…]\nAs of 2006, 30 belugas lived in Canada and 28 in the United States. 42 deaths in captivity had been reported. A single specimen can reportedly fetch up to US$100,000 (£64,160). The beluga's popularity is due to its unique color and its facial expressions. The latter is possible because while most cetacean \"smiles\" are fixed, the extra movement afforded by the beluga's unfused cervical vertebrae allows a greater range of apparent expression.\n[…]\nAggression among captive orcas is common. They attack each other and their trainers as well. In 2013, SeaWorld's treatment of orcas in captivity was the basis of the movie Blackfish, which documents the history of Tilikum, an orca at SeaWorld Orlando, who had been involved in the deaths of three people. The film led to proposals by some lawmakers to ban captivity of cetaceans, and led SeaWorld to announce in 2016 that it would phase out its orca program.\n[…]\nCetacea at Wikibooks\n[…]\n\"Cetacea\" . Encyclopædia Britannica. Vol. 5 (11th ed.). 1911.\n[…]\n\"Cetaceans\". Encyclopedia of Earth.\n[…]\nScottish Cetacean Research & Rescue – see page on Taxonomy\n[…]\nFutuyma, Douglas J. (1998). \"Cetacea Evolution\". Archived from the original on 2008-05-29. Retrieved 2007-03-23.\n[…]\nEIA Cetacean campaign: Reports and latest info."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Whippomorpha",
        "situacao": "ok",
        "texto": "Whippomorpha is a clade of Artiodactyla that contains all living cetaceans (whales) and Hippopotamidae. This makes it a crown group. Whippomorpha is a suborder within the order Artiodactyla (even-toed ungulates). The placement of Whippomorpha within Artiodactyla is a matter of some contention, as hippopotamuses were previously considered to be more closely related to Suidae (pigs) and Tayassuidae \n[…]\nThere is strong resemblance between the dentition of primitive cetaceans and primitive ungulates, which seemingly cements the position of Cetacea within Artiodactyla. Also, both cetaceans and artiodactyls have two distinct components in their ear, the involucrum and sigmoid process. Similar features are considered responsible for the ability of cetaceans to hear underwater.\n[…]\nCetaceans also have an extensive history with humans. The main threats to cetaceans are direct danger (whaling), and indirect damage to habitat (through pollution and overfishing). Commercial shipping, oil drilling and coastal development can disrupt cetacean habitats. Thousands of cetaceans are affected by bycatching every year. Some evidence also exists that human-generated sound may account for increases in the rate of whale stranding.\n[…]\nCetaceans are revered for their immense size, intelligent and playful dispositions, displays of speed in water, and contributions to scientific research.\n[…]\nWhales have been kept in captivity by humans for research and entertainment for centuries. Particularly popular are killer whales. Conservation and animal rights organizations have been vehemently opposed to the captivity of these cetaceans. It is common for captive killer whales to display aggression toward other whales and their trainers. Bottlenose dolphins are also popular, due to their friendly behavior. They also fare better in captivity than other cetaceans."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cet%C3%A1ceos",
        "situacao": "ok",
        "texto": "Os cetáceos (latim científico: Cetacea) constituem uma infraordem de animais predominantemente marinhos e pertencentes à classe dos mamíferos. O nome da ordem deriva do grego ketos que significa monstro marinho.\n[…]\nOs cetáceos estão divididos em duas parvordens:\n[…]\nEm termos cladísticos, Cetacea é um clado e costuma ser considerado um grupo-total que inclui as parvordens Odontoceti e Mysticeti, além de todos os animais extintos mais próximos dessas parvordens que de qualquer outro animal vivo. Por sua vez, Odontoceti e Mysticeti formam o clado Neoceti, o grupo-coroa de Cetacea. A antiga infra ordem Archaeoceti agrupava todos os animais extintos pertencentes a Cetacea, mas não a Neoceti.\n[…]\nRecentemente foram encontrados no Paquistão fósseis de animais terrestres adaptados à vida aquática, e os cientistas acreditam que eles são realmente os ancestrais dos atuais Cetáceos, pois o crânio destes animais só encontra similaridades com os crânios de baleias e golfinhos. Mesmo as baleias desdentadas descendem de animais terrestres.\n[…]\nA maioria das espécies de grandes cetáceos está em perigo de extinção, como resultado da caça à baleia. No entanto, as espécies mais afetadas são as dos golfinhos de rio, por causa de alterações nos rios em que vivem.\n[…]\nA descrição dos seres coincide com a descrição de baleias, do ponto de vista de um representante do povo árabe que ainda não tinha contato com cetáceos. Não há clareza sobre a possível agressividade das baleias. O relato completo da viagem de Fadlane foi roteirizado por Michael Crichton na novela Devoradores de Mortos, que mais tarde seria adaptado para o filme O 13º Guerreiro.\n[…]\nCetacea\n[…]\n«Uma baleia consegue viver em água doce?». no ComoTudoFunciona.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Arcossauros",
      "descricao": "Grupo de répteis que reúne os crocodilianos, os dinossauros extintos e as aves."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "As aves descendem dos dinossauros. Entre os répteis que vivem hoje, quais são os parentes mais próximos delas?",
    "resposta": "Crocodilianos (crocodilos e jacarés)",
    "fonte": [
      "https://en.wikipedia.org/wiki/Archosaur"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Archosaur",
        "situacao": "ok",
        "texto": "Archosauria or archosaurs () is a clade of diapsid sauropsid tetrapods, with birds and crocodilians being the only known extant representatives. Although broadly classified as reptiles, which traditionally exclude birds, the cladistic sense of the term includes all living and extinct relatives of birds and crocodilians such as non-avian dinosaurs, pterosaurs, phytosaurs, aetosaurs and rauisuchians\n[…]\nModern paleontologists define Archosauria as a crown group that includes the most recent common ancestor of living birds and crocodilians, and all of its descendants.\n[…]\nOrnithodira and Crurotarsi are both node-based clades, meaning that they are defined to include the last common ancestor of two or more taxa and all of its descendants. Ornithodira includes the last common ancestor of pterosaurs and dinosaurs (which include birds), while Crurotarsi includes the last common ancestor of living crocodilians and three groups of Triassic archosaurs: ornithosuchids, aetosaurs, and phytosaurs.\n[…]\nNon-avian dinosaurs and pterosaurs perished in the Cretaceous–Paleogene extinction event, which occurred approximately 66 million years ago, but crown-group birds (the only remaining dinosaur group) and many crocodyliforms survived. Both are descendants of archosaurs, and are therefore archosaurs themselves under phylogenetic taxonomy.\n[…]\nArchosaurs are ancestrally superprecocial as evidenced in various dinosaurs, pterosaurs, and crocodylomorphs. However, parental care did evolve independently multiple times in crocodilians, dinosaurs, and aetosaurs. In most such species the animals bury their eggs and rely on temperature-dependent sex determination. The notable exception are Neornithes which incubate their eggs and rely on genetic sex determination – a trait that might have given them a survival advantage over other dinosaurs.\n[…]\n2022 in archosaur paleontology\n[…]\nMikko's Phylogeny Archive Archosauria"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Archosauria",
        "situacao": "ok",
        "texto": "Archosauria é o nome dado a um grupo monofilético de vertebrados diapsídeos, formado pelas ordens atuais Dinosauria que inclui as aves e Crocodylomorpha (Hay, 1930) que atualmente inclui os crocodilos, jacarés e gaviais, e por diversas extintas como Pterosauromorpha, Ornithischia, Saurosuchus, Sauropodomorpha entre outros. A linhagem surge entre o fim do Permiano (após a extinção Permo-Triássica) \n[…]\nO clado Archosauria em si corresponde à junção de dois grandes grupos que deram origem aos crocodilos (Pseudosuchia) e seus descendentes extintos e aos dinossauros e seus descendentes, as aves (Avemetatarsalia). Foi neste clado que observamos o máximo da variação de postura dos membros, com formas bípedes representadas pelos dinossauros e formas aladas como as aves e pterossauros.\n[…]\nÉ o grupo que inclui todos os descendentes do ancestral arcossauro que divergiu em aves e crocodilos. Assim, o clado inclui todos táxons extintos e viventes que divergiram, porém apresenta grandes conflitos filogenéticos, principalmente devido a baixa resolução na posição de táxons extintos.\n[…]\nApesar de muitas propostas das relações filogenéticas e posições entre os clados, a hipótese mais sustentada e aceita hoje é de que as Aves formam um grupo monofilético vivo mais próximo de Crocodylia, pois compartilham muitos caracteres osteológicos e moleculares.\n[…]\nCrocodylidae (Cuvier, 1807), os crocodilos propriamente ditos: distribuem-se entre os ambientes de água doce, salgada e salobra da África, Indo-Pacífico, Oceania, sul da América do Norte (Yucatán e Flórida), América Central e norte da América do Sul (porém sem representantes atuais no território brasileiro). Possuem focinho mais afilado do que os jacarés, com uma chanfradura para o encaixe do quarto dente inferior, que é bastante desenvolvido e visível dorsalmente.\n[…]\nDinossauros\n[…]\nAves\n[…]\nCrocodilos",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Uracila",
      "descricao": "Base nitrogenada presente no RNA, que ocupa o lugar da timina do DNA."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "No RNA, a uracila ocupa o lugar de uma das quatro bases do DNA. De qual delas?",
    "resposta": "Timina",
    "fonte": [
      "https://en.wikipedia.org/wiki/Uracil"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Uracil",
        "situacao": "ok",
        "texto": "Uracil () (symbol U or Ura) is one of the four nucleobases in the nucleic acid RNA. The others are adenine (A), cytosine (C), and guanine (G). In RNA, uracil binds to adenine via two hydrogen bonds. In DNA, the uracil nucleobase is replaced by thymine (T). Uracil is a demethylated form of thymine.\n[…]\nUracil-DNA glycosylase excises uracil bases from double-stranded DNA. This enzyme would therefore recognize and cut out both types of uracil – the one incorporated naturally, and the one formed due to cytosine deamination, which would trigger unnecessary and inappropriate repair processes.\n[…]\nPhotodehydrogenation of 5,6-diuracil, which is synthesized by beta-alanine reacting with urea, produces uracil.\n[…]\nUracil can also be used in the synthesis of caffeine. Uracil has also shown potential as a HIV viral capsid inhibitor. Uracil derivatives have antiviral, anti-tubercular and anti-leishmanial activity.\n[…]\nUracil can be used to determine microbial contamination of tomatoes. The presence of uracil indicates lactic acid bacteria contamination of the fruit. Uracil derivatives containing a diazine ring are used in pesticides. Uracil derivatives are more often used as antiphotosynthetic herbicides, destroying weeds in cotton, sugar beet, turnips, soya, peas, sunflower crops, vineyards, berry plantations, and orchards.\n[…]\nUracil derivatives can enhance the activity of antimicrobial polysaccharides such as chitosan.\n[…]\nIn yeast, uracil concentrations are inversely proportional to uracil permease.\n[…]\nMixtures containing uracil are also commonly used to test reversed-phase HPLC columns. As uracil is essentially unretained by the non-polar stationary phase, this can be used to determine the dwell time (and subsequently dwell volume, given a known flow rate) of the system.\n[…]\nUracil MS Spectrum"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Uracilo",
        "situacao": "ok",
        "texto": "Na bioquímica, o uracilo ou uracila (símbolo: \"U\") é uma base nitrogenada exclusiva do RNA (não ocorre no DNA) com anel simples, um composto orgânico pirimídico, que realiza duas ligações de hidrogênio (assim como a timina). Substitui a timina na transcrição genética do DNA para RNA, de modo a ser complementar ao composto adenina.\n[…]\nO termo \"uracila\" foi cunhado em 1885, pelo químico alemão Robert Behrend ao realizar experimentos que buscavam sintetizar derivados do ácido úrico. Isolado em 1900, por hidrólise de um núcleo de levedura, também foi encontrado no timo e no baço de bovinos, no esperma de arenques e no germe de trigo. O uracilo é uma substância planar e insaturada que é capaz de absorver luz.\n[…]\nCom base nas proporções isotópicas de 12C e 13C, encontradas no meteorito de Murchison, acredita-se que uracila, xantina moléculas similares também podem ser formadas em regiões extraterrestres.\n[…]\nEm 2012, análises de dados da Missão Cassini mostraram a existência de uracila na possível composição da superfície de Titã, uma das sessenta e duas luas de Saturno.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Arqueias",
      "descricao": "Domínio de microrganismos unicelulares, Archaea, distinto das bactérias e comum em ambientes extremos."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Por fora, as arqueias parecem bactérias. Mas, na árvore da vida, elas são mais aparentadas com qual outro grande grupo de seres vivos?",
    "resposta": "Eucariontes",
    "fonte": [
      "https://en.wikipedia.org/wiki/Archaea"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Archaea",
        "situacao": "ok",
        "texto": "Archaea (  ar-KEE-ə) is a domain of organisms. Traditionally, Archaea included only its prokaryotic members, but has since been found to be paraphyletic, as eukaryotes are known to have evolved from archaea. Even though the domain Archaea cladistically includes eukaryotes, the term archaea (sing. archaeon  ar-KEE-on; from Ancient Greek  ἀρχαῖον arkhaîon 'ancient') in English still generally refers\n[…]\nHalophiles, including the genus Halobacterium, live in extremely saline environments such as salt lakes and outnumber their bacterial counterparts at salinities greater than 20–25%. Thermophiles grow best at temperatures above 45 °C (113 °F), in places such as hot springs; hyperthermophilic archaea grow optimally at temperatures greater than 80 °C (176 °F). The archaeal Methanopyrus kandleri Strain 116 can even reproduce at 122 °C (252 °F), the highest recorded temperature of any organism.\n[…]\nIt has been demonstrated that in all oceanic surface sediments (from 1,000- to 10,000-m water depth), the impact of viral infection is higher on archaea than on bacteria and virus-induced lysis of archaea accounts for up to one-third of the total microbial biomass killed, resulting in the release of ~0.3 to 0.5 gigatons of carbon per year globally.\n[…]\nConsequently, the counterparts of bacterial or eukaryotic enzymes from extremophile archaea are often used in structural studies.\n[…]\nArchaea host a new class of potentially useful antibiotics. A few of these archaeocins have been characterized, but hundreds more are believed to exist, especially within Halobacteria and Sulfolobus. These compounds differ in structure from bacterial antibiotics, so they may have novel modes of action. In addition, they may allow the creation of new selectable markers for use in archaeal molecular biology.\n[…]\nComparative Analysis of Archaeal Genomes Archived 16 February 2013 at the Wayback Machine (at DOE's IMG system)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Archaea",
        "situacao": "ok",
        "texto": "Archaea (singular: archaeon; do grego: ἀρχαῖος; archaĩos, antigo), em português:  arquea, arqueiaAO 1990 ou arquaia, é um domínio que agrupa microrganismos unicelulares procariontes (i.e. sem núcleo celular), morfologicamente semelhantes a bactérias, mas genética e bioquimicamente tão distintas destas como dos eucariontes.\n[…]\nEstes organismos foram inicialmente classificadas como um tipo ancestral de bactérias, recebendo o nome Archaebacteria, classificação agora considerada obsoleta, tendo o grupo sido renomeado para esclarecer que os seus membros estão filogeneticamente mais próximos dos eucariontes do que das bactérias. Porem, as moléculas de DNA das arqueias são organizadas em cromossomas circulares presentes no citoplasma, sem membrana envolvente, como equivalente nuclear.\n[…]\nO grupo glicerol ao qual a cadeia hidrofóbica se encontra ligada tem estereoquímica diferente nas arqueias (G1P), comparativamente às bactérias e aos eucariotas (G3P).\n[…]\nAinda assim, apesar das semelhanças morfológicas com as bactérias, as arqueias possuem genes e várias vias metabólicas que estão mais intimamente relacionadas com as dos eucariotas, nomeadamente no que concerne as enzimas envolvidas na transcrição e tradução genômica. Outros aspectos da bioquímica das arqueias são únicos, como a dependência de éteres lipídicos na estruturação das membranas celulares, incluindo a presença de di-éteres do grupo arqueol (ou archaeol).\n[…]\nEmbora arqueias tenham apenas um tipo de RNA polimerase, a sua estrutura e função na transcrição parecem ser próximas às da RNA polimerase II eucariótica, com montagens de proteínas semelhantes (os factores de transcrição gerais) direcionando o ligação da RNA polimerase a um gene promotor, mas outros fatores de transcrição arqueanos estão mais próximos daqueles que são encontrados em bactérias.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Fungo",
      "descricao": "Reino de seres vivos que inclui cogumelos, bolores e leveduras."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "A parede das células das plantas é feita de celulose. A dos fungos é feita de qual substância, a mesma da carapaça dos insetos?",
    "resposta": "Quitina",
    "fonte": [
      "https://en.wikipedia.org/wiki/Fungus",
      "https://en.wikipedia.org/wiki/Chitin"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fungus",
        "situacao": "ok",
        "texto": "A fungus (pl.: fungi or funguses) is any member of the group of eukaryotic organisms that includes yeasts, molds, and mushrooms. These organisms are classified in the biological kingdom Fungi.\n[…]\nMycology is the branch of biology concerned with the systematic study of fungi, including their genetic and biochemical properties, their taxonomy, and their use to humans as a source of medicine, food, and psychotropic substances consumed for religious purposes, as well as their dangers, such as poisoning or infection. The field of phytopathology, the study of plant diseases, is closely related because many plant pathogens are fungi.\n[…]\nMycology became a systematic science after the development of the microscope in the 17th century. Although fungal spores were first observed by Giambattista della Porta in 1588, the seminal work in the development of mycology is considered to be the publication of Pier Antonio Micheli's 1729 work Nova plantarum genera. Micheli not only observed spores but also showed that, under the proper conditions, they could be induced into growing into the same species of fungi from which they originated.\n[…]\nExtending the use of the binomial system of nomenclature introduced by Carl Linnaeus in his Species plantarum (1753), the Dutch Christiaan Hendrik Persoon (1761–1836) established the first classification of mushrooms with such skill as to be considered a founder of modern mycology. Later, Elias Magnus Fries (1794–1878) further elaborated the classification of fungi, using spore color and microscopic characteristics, methods still used by taxonomists today.\n[…]\nM. C. Cooke (1875), Fungi: Their Nature and Uses, (2009)\n[…]\nFUNGI in BoDD – Botanical Dermatology Database"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Chitin",
        "situacao": "ok",
        "texto": "Chitin (C8H13O5N)n ( KY-tin) is a long-chain polymer of N-acetylglucosamine, an amide derivative of glucose. Chitin is the second most abundant polysaccharide in nature (behind only cellulose); an estimated 1 billion tons of chitin are produced each year in the biosphere.\n[…]\nIt is a primary component of cell walls in fungi (especially filamentous and mushroom-forming fungi), the exoskeletons of arthropods such as crustaceans and insects, the radulae, cephalopod beaks and gladii of molluscs and in some nematodes and diatoms.\n[…]\nPlants also have receptors that can cause a response to chitin, namely chitin elicitor receptor kinase 1 and chitin elicitor-binding protein. The first chitin receptor was cloned in 2006. When the receptors are activated by chitin, genes related to plant defense are expressed, and jasmonate hormones are activated, which in turn activate systemic defenses. Commensal fungi have ways to interact with the host immune response that, as of 2016, were not well understood."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Fungi",
        "situacao": "ok",
        "texto": "O reino Fungi é um grupo de organismos eucariotas (ou eucariontes), que inclui micro-organismos tais como as leveduras, os bolores, bem como os mais familiares cogumelos.\n[…]\nOs fungos são classificados num reino separado das plantas, animais e bactérias. Uma grande diferença é o fato de as células dos fungos terem paredes celulares que contêm quitina e glucanos, ao contrário das células vegetais, que contêm celulose. Estas e outras diferenças mostram que os fungos formam um só grupo de organismos relacionados entre si, denominado Eumycota (fungos verdadeiros ou Eumycetes), e que partilham um ancestral comum (um grupo monofilético).\n[…]\nCom as plantas: os fungos possuem uma parede celular e vacúolos. Reproduzem-se por meios sexuados e assexuados, e tal como os grupos basais de plantas (como os fetos e musgos) produzem esporos. Tal como os musgos e algas, os fungos têm núcleos tipicamente haploides.\n[…]\nA parede celular dos fungos é composta por glicanos e quitina; enquanto os primeiros são também encontrados em plantas e a última no exosqueleto dos artrópodes, os fungos são os únicos organismos que combinam estas duas moléculas estruturais na sua parede celular. Ao contrário das plantas e dos Oomycetes, as paredes celulares dos fungos não contêm celulose.\n[…]\nPor causa das semelhanças morfológicas e de modo de vida, Myxomycetes e Oomycetes eram anteriormente classificados no reino Fungi. Ao contrário do que sucede com os fungos verdadeiros, as paredes celulares destes organismos contêm celulose e não têm quitina. Os Myxomycetes são unicontes como os fungos, mas são agrupados em Amoebozoa. Os Oomycetes são bicontes, agrupados no reino Chromalveolata.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Líquen",
      "descricao": "Organismo formado pela associação simbiótica de um fungo com uma alga ou cianobactéria."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Um líquen não é uma planta, mas uma parceria de um fungo com qual outro tipo de ser vivo?",
    "resposta": "Alga (ou cianobactéria)",
    "fonte": [
      "https://en.wikipedia.org/wiki/Lichen"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lichen",
        "situacao": "ok",
        "texto": "A lichen ( LY-kən, UK also  LITCH-ən) is a hybrid colony of algae or cyanobacteria living symbiotically among filaments of multiple fungus species, along with bacteria embedded in the cortex, or \"skin\", in a mutualistic relationship. Lichens are the lifeform that first brought the term symbiosis (as Symbiotismus) into biological context.\n[…]\nLichens are known in which there is one fungus associated with multiple photobionts, such as a species of alga and a cyanobacteria involved in the same relationship, or multiple genotypes of the same alga.\n[…]\nThe lichen association is a close symbiosis. It extends the ecological range of both partners but is not always obligatory for their growth and reproduction in natural environments, since many of the algal symbionts can live independently. A prominent example is the alga Trentepohlia, which forms orange-coloured populations on tree trunks and suitable rock faces.\n[…]\nBy convention, lichens are still called \"species\" anyway, and are classified according to the species of their fungus, not the species of the algae or cyanobacteria. Lichens are given the same scientific name (binomial name) as the fungus in them, which may cause some confusion. The alga bears its own scientific name, which has no relationship to the name of the lichen or fungus.\n[…]\nThere is also debate as to the appropriateness of giving the same binomial name to the fungus, and to the lichen that combines that fungus with an alga or cyanobacterium (synecdoche). This is especially the case when combining the same fungus with different algae or cyanobacteria produces dramatically different lichen organisms, which would be considered different species by any measure other than the DNA of the fungal component.\n[…]\nLichenology\n[…]\nLichens and nitrogen cycling\n[…]\nThe dictionary definition of lichen at Wiktionary"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/L%C3%ADquen",
        "situacao": "ok",
        "texto": "Um líquen ou fungo liquenizado é um organismo composto que surge de algas ou cianobactérias que vivem entre filamentos de várias espécies de fungos em uma relação de mutualismo. Os líquenes têm propriedades diferentes daquelas de seus organismos componentes. Eles vêm em muitas cores, tamanhos e formas e às vezes são semelhantes a plantas, apesar de não serem.\n[…]\nO parceiro fúngico protege a alga retendo água, servindo como uma área maior de captação de nutrientes minerais e, em alguns casos, fornece minerais obtidos do substrato. Se uma cianobactéria está presente, como parceiro primário ou outro simbionte além de uma alga verde como em certos líquenes tripartidos, eles podem fixar nitrogênio atmosférico, complementando as atividades da alga verde.\n[…]\nA combinação de líquen de alga ou cianobactéria com um fungo tem uma forma (morfologia), fisiologia e bioquímica muito diferentes do que o componente fungo, alga ou cianobactéria crescendo por si só, naturalmente ou em cultura. O corpo (talo) da maioria dos líquenes é diferente do do fungo ou da alga que cresce separadamente. Quando cultivado em laboratório na ausência de seu fotobionte, um fungo líquen se desenvolve como uma massa indiferenciada e sem estrutura de filamentos fúngicos (hifas).\n[…]\nO fungo envolve as células de algas, muitas vezes encerrando-as dentro de tecidos fúngicos complexos exclusivos de associações de líquenes. Em muitas espécies, o fungo penetra na parede celular da alga, formando pinos de penetração (haustoria) semelhantes aos produzidos por fungos patogênicos que se alimentam de um hospedeiro. As cianobactérias em ambientes de laboratório podem crescer mais rapidamente quando estão sozinhas do que quando fazem parte de um líquen.\n[…]\nOs liquens emergiram independentemente de fungos associados a algas e cianobactérias várias vezes ao longo da história.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Fotossíntese",
      "descricao": "Processo pelo qual plantas, algas e cianobactérias usam a luz para produzir açúcares a partir de gás carbônico e água."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Na fotossíntese, as plantas liberam oxigênio. De qual substância, absorvida por elas, vem esse oxigênio?",
    "resposta": "Da água",
    "fonte": [
      "https://en.wikipedia.org/wiki/Photosynthesis"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Photosynthesis",
        "situacao": "ok",
        "texto": "Photosynthesis is a system of biological processes by which photopigment-bearing autotrophic organisms, such as most plants, algae and cyanobacteria, convert light energy—typically from sunlight—into the chemical energy necessary to fuel their metabolism. The term photosynthesis usually refers to oxygenic photosynthesis, a process that releases oxygen as a byproduct of water splitting.\n[…]\nRobert Emerson discovered two light reactions by testing plant productivity using different wavelengths of light. With the red alone, the light reactions were suppressed. When blue and red were combined, the output was much more substantial. Thus, there were two photosystems, one absorbing up to 600 nm wavelengths, the other up to 700 nm. The former is known as PSII, the latter is PSI.\n[…]\nA is the electron acceptor. Therefore, in light, the electron acceptor is reduced and oxygen is evolved. Samuel Ruben and Martin Kamen used radioactive isotopes to determine that the oxygen liberated in photosynthesis came from the water.\n[…]\nThe process of photosynthesis provides the main input of free energy into the biosphere, and is one of four main ways in which radiation is important for plant life.\n[…]\nPhosphoglycolate is quickly metabolized to glycolate that is toxic to a plant at a high concentration; it inhibits photosynthesis.\n[…]\nA collection of photosynthesis pages for all levels from a renowned expert (Govindjee)\n[…]\nIn depth, advanced treatment of photosynthesis, also from Govindjee\n[…]\nScience Aid: Photosynthesis Article appropriate for high school science\n[…]\nMetabolism, Cellular Respiration and Photosynthesis – The Virtual Library of Biochemistry and Cell Biology\n[…]\nOverall examination of Photosynthesis at an intermediate level\n[…]\nOverall Energetics of Photosynthesis\n[…]\nThe source of oxygen produced by photosynthesis Interactive animation, a textbook tutorial"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Fotoss%C3%ADntese",
        "situacao": "ok",
        "texto": "Fotossíntese é o processo pelo qual plantas, algas e algumas bactérias captam parte da energia da luz e a guardam em substâncias orgânicas. Essa energia permite que produzam matéria para crescer e chega aos demais seres vivos pelas cadeias alimentares.\n[…]\nNa forma realizada por plantas, algas e cianobactérias, a água e o dióxido de carbono participam da formação de matéria orgânica, e o oxigênio é liberado. Quase todo o oxigênio livre da atmosfera e das águas tem essa origem. Outras bactérias aproveitam a luz sem liberar oxigênio porque retiram elétrons de substâncias diferentes da água, em uma forma chamada fotossíntese anoxigênica.\n[…]\nNa forma geral acima, H2A representa H2O ou H2S, mas todas as algas e plantas terrestres verdes utilizam apenas água nessa função, assim como as cianobactérias em seu modo principal de fotossíntese. Nesse caso, A é o oxigênio da água, liberado como produto de sua oxidação na forma de oxigênio molecular. O oxigênio da atmosfera e da hidrosfera é produzido pela fotossíntese oxigênica.\n[…]\nO potencial da bacterioclorofila não é suficiente para decompor água, e esses organismos não têm o complexo que realiza essa reação. A água não pode fornecer elétrons à fotossíntese anoxigênica, que não libera oxigênio molecular.\n[…]\nTraçadores isotópicos acompanham a origem e o destino dos átomos durante a fotossíntese e nos sinais que ela deixa nas rochas. O oxigênio-18 confirmou que o O2 liberado vem da água, e o carbono-14 permitiu reconstruir o ciclo de Calvin-Benson-Bassham. Razões entre isótopos estáveis de carbono ajudam a reconhecer modos de fixação e a investigar rochas antigas, mas não distinguem sozinhas a fotossíntese de outras formas de autotrofia.\n[…]\nBotânica I: fotossíntese, animação da Fundação Cecierj.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Esboço da árvore evolutiva de Darwin",
      "descricao": "Diagrama em forma de árvore desenhado por Charles Darwin em 1837 no seu Caderno B, sobre a transmutação das espécies."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em 1837, num caderno, Darwin rabiscou sua primeira árvore evolutiva. Que duas palavras em inglês ele escreveu logo acima do desenho?",
    "resposta": "I think (eu acho)",
    "fonte": [
      "https://en.wikipedia.org/wiki/Inception_of_Darwin%27s_theory"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Inception_of_Darwin%27s_theory",
        "situacao": "ok",
        "texto": "The inception of Darwin's theory occurred during an intensively busy period which began when Charles Darwin returned from the survey voyage of the Beagle, with his reputation as a fossil collector and geologist already established.\n[…]\nlet him look at savage...naked, artless, not improving yet improvable & let him dare to boast of his proud preeminence.\" Here Darwin was drawing on his experience of the natives of Tierra del Fuego and daring to think that there was little gulf between man and animals despite the theological doctrine that only humanity possessed a soul.\n[…]\n\"I hope I may be able to work on right hard during the next three years, otherwise I shall never have finished, – but I find the noddle & the stomach are antagonist powers, and that it is a great deal more easy to think too much in a day, than to think too little – What thought has to do with digesting roast beef, – I cannot say, but they are brother faculties.\"\n[…]\nDarwin's cousin William Darwin Fox gave helpful answers to his questions about crossing domestic breeds, and in his reply of 15 June, Darwin admitted for the first time that \"It is my prime hobby & I really think some day, I shall be able to do something on that most intricate subject species & varieties.\"\n[…]\nHe jotted down further thoughts, then concluded \"My God, it is intolerable to think of spending ones whole life, like a neuter bee, working, working, & nothing after all. – No, no won't do. – Imagine living all one's day solitarily in smoky dirty London House. – Only picture to yourself a nice soft wife on a sofa with good fire, & books & music perhaps – Compare this vision with the dingy reality of Grt. Marlbro' St. Marry–Marry–Marry Q.E.D.\""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Concep%C3%A7%C3%A3o_da_teoria_de_Darwin",
        "situacao": "ok",
        "texto": "A concepção da teoria de Darwin ocorreu durante um período de actividade intenso que começou quando Charles Darwin regressou da segunda viagem do Beagle, com a sua reputação como coleccionador de fósseis e geólogo já estabelecida.\n[…]\nDurante a estreia geológica de Darwin, o relatório do anatomista Richard Owen sobre os fósseis mostrou que espécies extintas estavam relacionadas com espécies actuais na mesma localidade, e o ornitólogo John Gould mostrou que espécimes de aves das Ilhas Galápagos eram espécies distintas relacionadas com lugares, não apenas variedades. Estes pontos convenceram Darwin que a transmutação das espécies tinha de estar a ocorrer, e no seu Caderno Vermelho ele anotou as suas primeiras ideias evolutivas.\n[…]\nEle começou cadernos especificamente sobre transmutação com especulações sobre variação nos descendentes \"para adaptar e alterar a raça num mundo em mudança\", e esquematizou uma árvore evolutiva única com ramos genealógicos \"ramificados irregularmente\".\n[…]\nDarwin, Charles (1837), Notebook B: [Transmutation of species], Darwin Online, CUL-DAR121, consultado em 20 de dezembro de 2008\n[…]\nSulloway, Frank J. (1982), «Darwin and His Finches: The Evolution of a Legend» (pdf), Journal of the History of Biology, 15 (1), pp. 1–53, doi:10.1007/BF00132004, consultado em 9 de dezembro de 2008\n[…]\nvan Wyhe, John (2008b), Darwin: The Story of the Man and His Theories of Evolution, ISBN 0-233-00251-0, London: Andre Deutsch Ltd (publicado em 1 de setembro de 2008)\n[…]\nObras de Charles Darwin (em inglês) no Projeto Gutenberg; domínio público.\n[…]\nEste artigo foi inicialmente traduzido, total ou parcialmente, do artigo da Wikipédia em inglês cujo título é «Inception of Darwin's theory», especificamente desta versão.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Nucleotídeo",
      "descricao": "Unidade básica dos ácidos nucleicos, DNA e RNA, formada por uma base nitrogenada, um açúcar e um grupo fosfato."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Cada nucleotídeo, a unidade que forma o DNA, junta uma base nitrogenada, um açúcar e qual terceiro componente?",
    "resposta": "Um grupo fosfato",
    "fonte": [
      "https://en.wikipedia.org/wiki/Nucleotide"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Nucleotide",
        "situacao": "ok",
        "texto": "Nucleotides are organic molecules composed of a nitrogenous base, a pentose sugar and a phosphate. They serve as monomeric units of the nucleic acid polymers – deoxyribonucleic acid (DNA) and ribonucleic acid (RNA),  both of which are essential biomolecules within all life-forms on Earth. Nucleotides are obtained in the diet and are also synthesized from common nutrients by the liver.\n[…]\nIn nucleic acids, nucleotides contain either a purine or a pyrimidine base—i.e., the nucleobase molecule, also known as a nitrogenous base—and are termed ribonucleotides if the sugar is ribose, or deoxyribonucleotides if the sugar is deoxyribose. Individual phosphate molecules repetitively connect the sugar-ring molecules in two adjacent nucleotide monomers, thereby connecting the nucleotide monomers of a nucleic acid end-to-end into a long chain.\n[…]\nThe de novo synthesis of purine nucleotides by which these precursors are incorporated into the purine ring proceeds by a 10-step pathway to the branch-point intermediate IMP, the nucleotide of the base hypoxanthine. AMP and GMP are subsequently synthesized from this intermediate via separate, two-step pathways. Thus, purine moieties are initially formed as part of the ribonucleotides rather than as free bases.\n[…]\nAn unnatural base pair (UBP) is a designed subunit (or nucleobase) of DNA which is created in a laboratory and does not occur in nature. Examples include d5SICS and dNaM. These artificial nucleotides bearing hydrophobic nucleobases, feature two fused aromatic rings that form a (d5SICS–dNaM) complex or base pair in DNA. E. coli have been induced to replicate a plasmid containing UBPs through multiple generations.\n[…]\nNucleotide (abbreviated \"nt\") is a common unit of length for single-stranded nucleic acids, similar to how base pair is a unit of length for double-stranded nucleic acids."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Nucle%C3%B3tido",
        "situacao": "ok",
        "texto": "Em biologia molecular e bioquímica, nucleotídeo(pt-BR) ou nucleótido (pt-PT?) é o bloco construtor dos ácidos nucleicos, o DNA (deoxyribonucleic ) e o RNA (ribonucleic), formado pela reação de esterificação entre o ácido fosfórico e os nucleosídeos; é derivado da base azotada/nitrogenada.\n[…]\nÉ formado pela reação de esterificação entre o ácido fosfórico e os nucleosídeos, que entram na reação como o álcool, reagindo com a hidroxila na posição 3 ou 5. Assim, é derivado de bases azotadas, tendo como bloco a purina ou a pirimidina, em que um grupo ribosil, desoxirribosil ou, mais raramente, outros derivados de açúcares, se liga a um grupo amina da base azotada.\n[…]\nA maioria dos alimentos, sendo de origem celular, contém ácidos nucleicos (DNA e RNA). Esses ácidos da dieta podem ser degradados em produtos residuais e excretados ou podem ser recuperados como componentes de nucleotídeos. Esses compostos iônicos, são hidrolisados a nucleosídeos por uma variedade de enzimas, chamadas de nucleotidases e fosfatases, para que possam passar pela membrana e entrarem nas células.\n[…]\nOs nucleosídeos de purina e pirimidina podem ser diretamente absorvidos pela mucosa intestinal ou sofrer ainda mais degradação até tornarem-se bases livres e ribose ou ribose-1-fosfato pela ação de enzimas chamadas de nucleosidases e nucleosídeo-fosforilases.\n[…]\nO primeiro passo da degradação dos nucleotídeos de purina é a perda de seu fosfato pela ação da enzima 5'-nucleotidase. A adenosina, é primeiro metabolizada em inosina pela enzima adenosina desaminase e então a metabolizada em hipoxantina pela enzima purina-nucleosídeo-fosforilase (PNP). A hipoxantina é então oxidada para formar xantina e depois ácido úrico através da ação da xantina oxidase.\n[…]\nSalvamento de nucleotídeos",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Cromossomo",
      "descricao": "Estrutura do núcleo celular formada por DNA e proteínas, que carrega os genes."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Dentro dos cromossomos, o longo fio de DNA fica enrolado, como linha num carretel, em torno de quais proteínas?",
    "resposta": "Histonas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Histone"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Histone",
        "situacao": "ok",
        "texto": "In biology, histones are highly-basic proteins abundant in lysine and arginine residues that are found in eukaryotic cell nuclei and in most Archaeal phyla. They act as spools around which DNA winds to create structural units called nucleosomes. Nucleosomes in turn are wrapped into 30-nanometer fibers that form tightly packed chromatin. Histones prevent DNA from becoming tangled and protect it fro\n[…]\nThe following is a list of human histone proteins, genes and pseudogenes:\n[…]\nThis occurs when Whi5 is phosphorylated by Cdc8 which is a G1/S Cdk. Suppression of histone gene expression outside of S phases is dependent on Hir proteins which form inactive chromatin structure at the locus of histone genes, causing transcriptional activators to be blocked.\n[…]\nNuclear protein ataxia-telangiectasia (NPAT), also known as nuclear protein coactivator of histone transcription, is a transcription factor which activates histone gene transcription on chromosomes 1 and 6 of human cells. NPAT is also a substrate of cyclin E-Cdk2, which is required for the transition between G1 phase and S phase. NPAT activates histone gene expression only after it has been phosphorylated by the G1/S-Cdk cyclin E-Cdk2 in early S phase.\n[…]\nIn the early 1960s, before the types of histones were known and before histones were known to be highly conserved across taxonomically diverse organisms, James F. Bonner and his collaborators began a study of these proteins that were known to be tightly associated with the DNA in the nucleus of higher organisms. Bonner and his postdoctoral fellow Ru Chih C.\n[…]\nUntil the early 1990s, histones were dismissed by most as inert packing material for eukaryotic nuclear DNA, a view based in part on the models of Mark Ptashne and others, who believed that transcription was activated by protein-DNA and protein-protein interactions on largely naked DNA templates, as is the case in bacteria."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Histona",
        "situacao": "ok",
        "texto": "As histonas são proteínas responsáveis por interagir com o DNA de modo a dispor da organização da dupla fita, nos três níveis de condensação, de modo favorável à célula, bem como também ter parte junto à modulação da expressão gênica, eis que, por exemplo, no caso dos nucleossomos, o primeiro nível de condensação do DNA, certas histonas compõem a “conta” da estrutura de “colar de contas”.\n[…]\nHistonas de Archaea são semelhantes as dos eucariotos.\n[…]\nAs histonas de ligação H1 unem-se ao nucleossoma e aos pontos de entrada e saída do ADN do octâmero, de maneira a fixarem o ADN no seu lugar, o que permite a formação de uma estrutura de ordem superior. A mais básica dessas estruturas é a fibra de 10 nm da cromatina ou conformação em \"colar de contas\". Isto implica o enrolamento do ADN em torno dos nucleossomas deixando um trecho de ADN de aproximadamente 50 pares de bases que separa cada dois nucleossomas, chamado ADN ligador ou espaçador.\n[…]\nO conjunto das histonas montadas e o ADN chama-se cromatina. As estruturas de ordem superior que a cromatina pode formar são a fibra cromatínica de 30 nm (que forma um zigue-zague irregular) e a fibra de 100 nm, que se podem encontrar em células interfásicas. Durante a mitose e a meiose, uma maior condensação da cromatina origina os cromossomas, formados pelas interações entre os nucleossomas e outras proteínas reguladoras.\n[…]\nA seguinte é uma lista das proteínas histonas humanas:\n[…]\nAs histonas funcionam como a matriz na qual o DNA se enrola. Têm um papel importante na regulação dos genes. Por meio do seu enrolar exibir zonas de DNA ligante que são mais propícias à transcrição do que zonas que compõem o nucleossomo, bem como o seu “recolher” de DNA ligante implica em silenciamento. Ao compactarem o DNA, permitem que os genomas eucarióticos de grandes dimensões caibam dentro do núcleo das células. Podem sofrer modificações pós-traducionais.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Ribossomo",
      "descricao": "Estrutura celular, presente em todos os seres vivos celulares, que fabrica proteínas lendo o RNA mensageiro."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Os ribossomos, as fábricas de proteínas da célula, são feitos de proteínas e de qual outra molécula?",
    "resposta": "RNA (RNA ribossômico)",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ribosome"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ribosome",
        "situacao": "ok",
        "texto": "A ribosome () is a ribonucleoprotein particle found in all cells that synthesizes proteins by translating genetic information encoded in messenger RNA (mRNA). During translation, the ribosome decodes successive codons in an mRNA molecule and, with the aid of transfer RNA (tRNA), links amino acids into a polypeptide chain. Each ribosome comprises a small and a large subunit, each composed of one or\n[…]\nThe sequence of RNA that encodes the sequence of the amino acids in a protein is transcribed into a messenger RNA (mRNA) chain. Ribosomes bind to the messenger RNA molecules and use the RNA's sequence of nucleotides to determine the sequence of amino acids needed to generate a protein. Amino acids are selected and carried to the ribosome by transfer RNA (tRNA) molecules, which enter the ribosome and bind to the messenger RNA chain via an anticodon stem loop.\n[…]\nDuring translation the synthesis of proteins from their building blocks takes place in four stages: initiation, elongation, termination, and ribosome recycling. The start codon in all mRNA molecules has the sequence AUG. The stop codon may either be UAA, UAG, or UGA; since there are no tRNA molecules that recognize these codons, the ribosome recognizes that translation is complete.\n[…]\nIn all domains, a polysome of two or more ribosomes may move along a single mRNA chain at one time, each reading a specific sequence and producing a corresponding protein molecule.\n[…]\nA ribosome is a ribonucleoprotein particle made from complexes of ribosomal RNAs and proteins, arranged into two ribosomal subunits, one large and the other small. Ribosomes are complex molecular machines present in all cells both prokaryotic, and eukaryotic. The ribosomal subunits of prokaryotes and eukaryotes are quite similar.\n[…]\nRole of the Ribosome, Gwen V. Childs, copied here\n[…]\nRibosome in Proteopedia—The free, collaborative 3D encyclopedia of proteins & other molecules"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ribossoma",
        "situacao": "ok",
        "texto": "Ribossomas (português europeu) ou ribossomos (português brasileiro) são as estruturas nas quais são produzidas as proteínas das células. Encontram-se livres no citoplasma tanto nas células eucariontes como nas procariontes. Nas eucariontes, eles também podem estar aderidos ao retículo endoplasmático.\n[…]\nOs ribossomas reúnem as vinte moléculas específicas de aminoácidos para formar proteínas determinadas por sequências de moléculas de ARN. Visíveis apenas ao microscópio eletrónico, com um tamanho de 29 nm. em células procariotas e 32 nm. em eucariotas. Estão presentes em todas as células, exceto nos espermatozoides.\n[…]\nSua função é sintetizar fitas proteicas de RNA complementares às já existentes e produzir enzimas. As proteínas produzidas pelos polirribossomas geralmente permanecem dentro da célula para uso interno. Já as enzimas produzidas pelos ribossomas aderidos à parede do retículo endoplasmático são armazenadas em vesículas que são transportadas para o complexo de Golgi, onde são \"empacotadas\" e enviadas para fora da célula.\n[…]\nO Ribo-T, um ribossoma artificial, foi criado para conduzir uma melhor compreensão de\n[…]\ncomo funcionam os ribossomas.\n[…]\nNeste tipo de célula, elas são criadas a partir de proteínas e RNA ribossômico específicos, por um processo de auto-construção, ou seja, os ribossomos procariontes, constroem-se sozinhos a partir de seus componentes.\n[…]\nO ribossomo une outros componentes importantes na síntese de proteínas, as moléculas de RNA, para traduzir as sequências de aminoácidos de uma proteína. As tríades de ácidos nucléicos (anticódons) do RNA são utilizadas pelo ribossomo para a geração de uma sequência de aminoácidos. O sítios de ligação para o RNA (no ribossomo) estão na sua subunidade menor. Existem três sítios de ligação para moléculas de RNA.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Sistema de cinco reinos",
      "descricao": "Classificação dos seres vivos proposta por Robert Whittaker em 1969."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No sistema de cinco reinos, ensinado por décadas nas escolas, as bactérias formavam qual reino?",
    "resposta": "Monera",
    "fonte": [
      "https://en.wikipedia.org/wiki/Monera"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Monera",
        "situacao": "ok",
        "texto": "Monera  (/məˈnɪərə/) (Greek: μονήρης (monḗrēs), \"single\", \"solitary\") is historically a biological kingdom that is made up of unicellular prokaryotes: single-celled organisms that lack a nucleus.\n[…]\nSuccessively, Cohn created the Schizophyta of Plants, which contained the non-photrophic bacteria in the family Schizomycetes and the phototrophic bacteria (blue green algae/Cyanobacteria) in the Schizophyceae This union of blue green algae and Bacteria was much later followed by Haeckel, who classified the two families in a revised phylum Monera in the Protista.\n[…]\nThe anthropic importance of the crown group of animals, plants and fungi was hard to depose; consequently, several other megaclassification schemes ignored on the empire rank but maintained the kingdom Monera consisting of bacteria, such Copeland in 1938 and Whittaker in 1969. The latter classification system was widely followed, in which Robert Whittaker proposed a five kingdom system for classification of living organisms.\n[…]\nIn 1977, a PNAS paper by Carl Woese and George Fox demonstrated that the archaea (initially called archaebacteria) are not significantly closer in relationship to the bacteria than they are to eukaryotes. The paper received front-page coverage in The New York Times, and great controversy initially. The conclusions have since become accepted, leading to replacement of the kingdom Monera with the two domains Bacteria and Archaea.\n[…]\nBacterial cell structure\n[…]\nWoese CR (June 1987). \"Bacterial evolution\". Microbiol. Rev. 51 (2): 221–71. doi:10.1128/MMBR.51.2.221-271.1987. PMC 373105. PMID 2439888. Woese reviewed the historical steps leading to the use of the term \"Monera\" and its later abandonment."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Monera",
        "situacao": "ok",
        "texto": "Monera é um reino biológico que inclui todos os organismos vivos que possuem uma organização celular procariótica, como bactérias, cianobactérias e arqueobactérias. O termo Monera na classificação atual encontra-se obsoleto, e seus integrantes foram divididos entre os reinos Eubacteria e Archaea, no sistema de três domínios e/ou de seis/oito reinos. Algumas vezes o reino Monera, era chamado de \"Pr\n[…]\nNa influente classificação de Lynn Margulis, o termo Monera significava o mesmo que Procarionte, e deste modo continua sendo usada em muitos manuais, livros e textos.\n[…]\nEm 1866, Ernest Haeckel propôs o sistema de três reinos que adicionou o grupo Protista como um novo reino que continha os organismos microscópicos. Uma das oito divisões do novo reino Protista foi chamada de Moneres (Monera), e incluía todas as bactérias então conhecidas. O reino Protista de Haeckel também incluía diversos organismos eucariontes, o que comprometeu o reconhecimento do grupo nos anos seguintes.[carece de fontes]?\n[…]\nEm 1974, o Bergey's Manual publicou uma nova edição cunhando o termo cianobactéria para se referir as então algas cianofíceas ou algas azuis, marcando a aceitação deste grupo dentro dos Monera.\n[…]\nEm 1969, Robert Whittaker, publicou o sistema de cinco reinos para a classificação dos seres vivos. O sistema de Whittaker colocou quase todos os seres unicelulares ou no grupo procarionte Monera ou no grupo eucarionte Protista. Ele, entretanto, não acreditava que todos os seus reinos fossem monofiléticos.\n[…]\nEm 1977, Carl Woese e George Fox demonstram que as arqueas (inicialmente chamadas de arqueobactérias) e bactérias não aparentam ser mais próximos um do outro do que dos eucariontes. Inicialmente muito controversa, a hipótese tem sido bem aceita, e o antigo reino Monera foi substituído pelos reinos Eubacteria e Archaea.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "A Origem das Espécies",
      "descricao": "Livro de Charles Darwin, publicado em 1859, que apresenta a teoria da evolução por seleção natural."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "O primeiro capítulo de A Origem das Espécies trata da seleção feita por criadores. Que aves, que ele próprio criava, Darwin usou como grande exemplo?",
    "resposta": "Pombos",
    "fonte": [
      "https://en.wikipedia.org/wiki/On_the_Origin_of_Species"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/On_the_Origin_of_Species",
        "situacao": "ok",
        "texto": "On the Origin of Species by Means of Natural Selection, or the Preservation of Favoured Races in the Struggle for Life is a work of scientific literature by the English naturalist Charles Darwin that is considered to be the foundation of evolutionary biology. It was published on 24 November 1859.\n[…]\nIn the final chapter of On the Origin of Species, \"Recapitulation and Conclusion\", Darwin briefly highlights the human implications of his theory:\n[…]\nIn On the Origin of Species, Chapter VI: \"Difficulties on Theory\", Darwin mentions this in the context of \"slight and unimportant variations\":\n[…]\nWorldwide commemorations of the 150th anniversary of the publication of On the Origin of Species and the bicentenary of Darwin's birth were scheduled for 2009. They celebrated the ideas which \"over the last 150 years have revolutionised our understanding of nature and our place within it\".\n[…]\nPechenik, Jan A. (2023), The Readable Darwin: The Origin of Species Edited for Modern Readers (2 ed.), Oxford University Press, ISBN 978-0-19-757526-0\n[…]\nCarpenter, William Benjamin (1859), \"Darwin on the Origin of Species\", National Review, vol. 10, no. December 1859, pp. 188–214. Published anonymously.\n[…]\nHuxley, Thomas Henry (1859), \"Time and Life: Mr Darwin's Origin of Species\", Macmillan's Magazine, 1: 142–148.\n[…]\nHuxley, Thomas Henry (1859), \"Darwin on the Origin of Species\", The Times (26 December 1859): 8–9. Published anonymously.\n[…]\nMurray, Andrew (1860), \"On Mr Darwin's Theory of the Origin of Species\", Proceedings of the Royal Society of Edinburgh, 4: 274–291, doi:10.1017/S0370164600034246.\n[…]\nOwen, Richard (1860), \"Review of Darwin's Origin of Species\", Edinburgh Review, 3 (April 1860): 487–532. Published anonymously.\n[…]\nDarwin's notes on the creation of On the Origin of Species digitised in Cambridge Digital Library"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/A_Origem_das_Esp%C3%A9cies",
        "situacao": "ok",
        "texto": "A Origem das Espécies (ou, mais completamente, A Origem das Espécies por Meio da Seleção Natural, ou Preservação das Raças Favorecidas na Luta pela Vida) é uma obra de literatura científica escrita por Charles Darwin, que é considerada a base da biologia evolutiva. Publicado em 24 de novembro de 1859, ele introduziu a teoria científica de que as formas de vida evoluem ao longo das gerações por mei\n[…]\nO Capítulo I cobre a criação de animais e a de plantas, voltando ao Antigo Egito. Darwin discute as opiniões contemporâneas sobre as origens de diferentes raças cultivadas para argumentar que muitas foram produzidas a partir de ancestrais comuns por meio de reprodução seletiva. Como ilustração da seleção artificial, ele descreve a criação de pombos, observando que \"[a] diversidade das raças é algo surpreendente\", mas que todas descendiam de uma espécie de pombo-doméstico.\n[…]\nDarwin viu dois tipos distintos de variação: (1) mudanças abruptas raras que ele chamou de \"esportes\" ou \"monstruosidades\" (exemplo: ovelha ancon com pernas curtas) e (2) pequenas diferenças onipresentes (exemplo: bico de pombos ligeiramente mais curto ou mais longo). Ambos os tipos de alterações hereditárias podem ser usados por criadores. No entanto, para Darwin, as pequenas mudanças foram mais importantes na evolução.\n[…]\nO capítulo então trata se a seleção natural poderia produzir estruturas especializadas complexas e os comportamentos para usá-las, quando seria difícil imaginar como as formas intermediárias poderiam ser funcionais. Darwin disse:Em segundo lugar, é possível que um animal tendo, por exemplo, a estrutura e os hábitos de um morcego, pudesse ter sido formado pela modificação de algum animal com hábitos totalmente diferentes?\n[…]\nA Origem das Espécies, texto completo com áudio incorporado\n[…]\nNotas de Darwin sobre a criação de On the Origin of Species digitalizado na Biblioteca Digital de Cambridge",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Nada em Biologia Faz Sentido Exceto à Luz da Evolução",
      "descricao": "Ensaio de 1973 do geneticista Theodosius Dobzhansky, cujo título virou frase célebre da biologia."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em 1973, o geneticista Theodosius Dobzhansky escreveu uma frase famosa: nada em biologia faz sentido, exceto à luz de quê?",
    "resposta": "Da evolução",
    "fonte": [
      "https://en.wikipedia.org/wiki/Nothing_in_Biology_Makes_Sense_Except_in_the_Light_of_Evolution"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Nothing_in_Biology_Makes_Sense_Except_in_the_Light_of_Evolution",
        "situacao": "ok",
        "texto": "\"Nothing in Biology Makes Sense Except in the Light of Evolution\" is an essay by the evolutionary biologist Theodosius Dobzhansky, criticizing anti-evolution creationism and espousing theistic evolution. The essay was first published in American Biology Teacher in 1973.\n[…]\nDobzhansky notes that in 1966, Shaikh Abdul Aziz bin Baz espoused the geocentric view that the Sun revolves around the Earth. The sheik said that the heliocentric model was “a mere theory”. Dobzhansky notes that it is a theory with explanatory power, in that it makes sense of things that would be inexplicable otherwise. He goes on to show that the same is true of evolution.\n[…]\nDobzhnsky shows that evolution is  unifying theme in biology, accounting for the unity and diversity of life. The fact that evolution occurs explains the interrelatedness of the various facts of biology, and so makes biology make sense. The concept has become firmly established as a unifying idea in biology education.\n[…]\nThe notion of the \"light of evolution\" came originally from the vitalist Jesuit priest Pierre Teilhard de Chardin, whom Dobzhansky much admired. In the last paragraph of the article, Dobzhansky quotes from de Chardin's 1955 The Phenomenon of Man:\n[…]\nThe phrase \"nothing in biology makes sense except in the light of evolution\" has come into common use by those opposing creationism. While the essay argues (following de Chardin) that Christianity and evolutionary biology are compatible, a position described as theistic evolution, the phrase is also used by those who consider a creator to be unnecessary, such as Richard Dawkins, who published The Selfish Gene just three years later.\n[…]\nPDF as published by The American Biology Teacher, Vol. 35, No. 3 (Mar., 1973)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Nothing_in_Biology_Makes_Sense_Except_in_the_Light_of_Evolution",
        "situacao": "ok",
        "texto": "\"Nothing in Biology Makes Sense Except in the Light of Evolution\" (pt: \"Nada na Biologia Faz Sentido Excepto à Luz da Evolução\") é um ensaio de 1973 escrito pelo biólogo evolutivo e membro da Igreja Ortodoxa Russa Theodosius Dobzhansky, criticando o criacionismo anti-evolução e abraçando o Evolucionismo teísta. Este ensaio foi publicado pela primeira vez na revista American Biology Teacher, volume\n[…]\nDobzhansky publicou pela primeira vez a afirmação num artigo de 1964 na American Zoologist, \"Biology, Molecular and Organismic\", para afirmar a importância do estudo da biologia a nível do organismo em resposta ao desafio colocado pela subida de popularidade da biologia molecular.\n[…]\nEste artigo foi inicialmente traduzido, total ou parcialmente, do artigo da Wikipédia em inglês cujo título é «Nothing in biology makes sense except in the light of evolution».",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Johanna Döbereiner",
      "descricao": "Agrônoma brasileira nascida na Tchecoslováquia (1924–2000), pesquisadora da Embrapa pioneira na fixação biológica de nitrogênio."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "A pesquisadora da Embrapa Johanna Döbereiner estudou bactérias que permitem à soja crescer sem tanto adubo químico. O que essas bactérias fazem?",
    "resposta": "Fixam o nitrogênio do ar",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Johanna_D%C3%B6bereiner",
      "https://en.wikipedia.org/wiki/Johanna_D%C3%B6bereiner"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Johanna_D%C3%B6bereiner",
        "situacao": "ok",
        "texto": "Johanna Liesbeth Kubelka Döbereiner (Aussig, 28 de novembro de 1924 – Seropédica, 5 de outubro de 2000) foi uma engenheira agrônoma brasileira, pioneira em biologia do solo. É a sétima cientista brasileira mais citada pela comunidade científica mundial e a primeira entre as mulheres, segundo levantamento de 1995 da Folha de S.Paulo.\n[…]\nSuas pesquisas, fundamentais para que o Brasil desenvolvesse o Programa Nacional do Álcool e se tornasse o segundo produtor mundial de soja, poupam ao país um gasto anual próximo a 1,5 bilhão de dólares e tiveram impacto direto na economia nacional. Seu trabalho com fixação biológica do nitrogênio permitiu que milhares de pessoas consumissem alimentos mais baratos e saudáveis, o que lhe valeu a indicação ao Prêmio Nobel em 1997. No entanto, a cientista é pouco conhecida no Brasil.\n[…]\nPor ocasião da introdução da soja no Brasil na década de 60, Johanna tomou partido em favor do aproveitamento das associações entre plantas e bactérias fixadoras de nitrogênio, opondo-se a utilização de adubação nitrogenada obrigatória, desenvolvendo uma tecnologia capaz de diminuir ou até mesmo eliminar nossa dependência dela, poupando atualmente entre um e dois bilhões de dólares por ano.\n[…]\nTal tecnologia faz com que o Brasil tenha o menor custo de produção de soja do mundo, se estabelecendo como um dos maiores produtores. Johanna também é conhecida por primeiro descrever em 1974 a ocorrência de uma associação entre bactérias fixadoras de nitrogênio do gênero Azospirillum e a gramínea Paspalum notatum. Posteriormente bactérias do mesmo gênero foram descritas para milho e forrageiras.\n[…]\nJohanna com seus estudos levaram à descoberta de 9 espécies de bactérias fixadoras de nitrogênio associadas a gramíneas, cereais e tuberosas.\n[…]\nEm 1997, Johanna Döbereiner foi indicada para o Prêmio Nobel"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Johanna_D%C3%B6bereiner",
        "situacao": "ok",
        "texto": "Johanna Liesbeth Kubelka Döbereiner (28 November 1924 – 5 October 2000) was a Brazilian agronomist and pioneer in soil biology.\n[…]\nDöbereiner was born in Ústí nad Labem in Czechoslovakia (now in the Czech Republic) on 28 November 1924. Her family were German Czechs. Her father was Professor Paul Kubelka and her mother Margarethe Kubelka. Her name Döbereiner came from her husband Jürgen Döbereiner, whom she met in Munich. Interestingly, her name became similar to the famous chemist Johann Wolfgang Döbereiner, who was born in Hof, Bavaria, in the border with Bohemia.\n[…]\nJohanna Döbereiner received her degree from the Ludwig-Maximilians-Universität München (LMU), but settled in Brazil and became a Brazilian citizen in 1956. Her early work includes studies of Azospirillum and other bacteria that could be useful to Brazilian soil. She later played an important role in Brazil's soybean production by encouraging a reliance on varieties that solely depended on biological nitrogen fixation.\n[…]\nAs a consequence of her research and ideas, numerous soybean plantations in Brazil are now completely supplied for nitrogen (N) by rhizobia and not using any N-fertilizers. This movement has had big benefits, because Brazil, together with the U.S., are the main producers of soybean in the world (ca. 50% world production).\n[…]\nThis was one of the reasons that Johanna Döbereiner was indicated for the Nobel Prize in the 1990s.\n[…]\nThe Johanna Döbereiner Biological Resources Center was named in her honour in 2017."
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Peixe-zebra",
      "descricao": "Pequeno peixe de água doce, Danio rerio, muito usado como organismo-modelo em pesquisas."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "O peixe-zebra virou estrela dos laboratórios porque seus embriões têm uma característica que deixa ver os órgãos se formando. Qual?",
    "resposta": "São transparentes",
    "fonte": [
      "https://en.wikipedia.org/wiki/Zebrafish"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Zebrafish",
        "situacao": "ok",
        "texto": "The zebrafish (Danio rerio) is a species of danionin belonging to the genus Danio in the suborder Cyprinoidei. Native to South Asia, it is a popular, hardy aquarium fish, frequently sold under the trade name zebra danio (thus often mislabeled as a \"tropical fish\", even though they also inhabit subtropical and temperate waters).\n[…]\nUpon release, embryonic development begins; in absence of sperm, growth stops after the first few cell divisions. Fertilized eggs almost immediately become transparent, a characteristic that makes D. rerio a convenient research model species. Sex determination of common laboratory strains was shown to be a complex genetic trait, rather than to follow a simple ZW or XY system.\n[…]\nZebrafish have been used to make several transgenic models of cancer, including melanoma, leukemia, pancreatic cancer and hepatocellular carcinoma. Zebrafish expressing mutated forms of either the BRAF or NRAS oncogenes develop melanoma when placed onto a p53 deficient background. Histologically, these tumors strongly resemble the human disease, are fully transplantable, and exhibit large-scale genomic alterations.\n[…]\nAs the immune system is relatively conserved between zebrafish and humans, many human infectious diseases can be modeled in zebrafish. The transparent early life stages are well suited for in vivo imaging and genetic dissection of host-pathogen interactions. Zebrafish models for a wide range of bacterial, viral and parasitic pathogens have already been established; for example, the zebrafish model for tuberculosis provides fundamental insights into the mechanisms of pathogenesis of mycobacteria.\n[…]\nThe combination of transparent zebrafish larva, light sheet fluorescence microscopy, and optical calcium indicators such as GCaMP, allow the monitoring of all neurons in an awake, behaving animal."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Danio_rerio",
        "situacao": "ok",
        "texto": "O peixe-zebra (Danio rerio) é um peixe tropical de água doce,  teleósteo, cipriniforme, da família dos ciprinídeos. É uma espécie ovípara ornamental, muito apreciada por aquariófilos, com tempo de vida médio entre três e cinco anos. Também é conhecido pelos nomes de bandeirinha, danio-zebra, paulistinha, bandeira-paulista e zebrafish.\n[…]\nAs fêmeas são capazes de produzir centenas de ovos a cada fecundação. Após a liberação, o desenvolvimento embrionário se inicia, sendo os ovos transparentes logo após a postura (característica importante para a utilização da espécie como modelo de pesquisa).\n[…]\nComo um organismo biológico modelo, o peixe-zebra possui inúmeras características que favorecem o seu estudo em diversas áreas do conhecimento. O seu genoma foi completamente sequenciado e é amplamente estudado por apresentar muitos genes com funções semelhantes ao da espécie humana; comportamentos de desenvolvimento facilmente observáveis ​​e testáveis. O seu desenvolvimento embrionário é muito rápido, e seu embrião é relativamente grande, transparente e com desenvolvimento externo.\n[…]\nO Danio rerio apresenta grande similaridade anatômica com outros vertebrados durante seu estágio embrionário, sendo passível de utilização como modelo para o estudo de tópicos relacionados à biologia do desenvolvimento. Origem e morfologia de orgãos e tecidos são algumas das frentes de pesquisa abordadas, assim como o surgimento e desenvolvimento de doenças em humanos.\n[…]\nO embrião de peixe-zebra se desenvolve rapidamente, com precursores de todos os principais órgãos aparecendo dentro de 36 horas após a fecundação. O embrião de D. rerio e da maioria dos peixes, assim como o embrião de aves, apresenta grande quantidade de vitelo, substância responsável por garantir o aporte de alimento na fase embrionária.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Sistema ZW de determinação do sexo",
      "descricao": "Sistema cromossômico das aves e de alguns répteis e insetos, em que as fêmeas têm dois cromossomos sexuais diferentes."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Nos mamíferos, é o pai quem define o sexo dos filhos. E nas aves, quem define?",
    "resposta": "A mãe",
    "fonte": [
      "https://en.wikipedia.org/wiki/ZW_sex-determination_system"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/ZW_sex-determination_system",
        "situacao": "ok",
        "texto": "The ZW sex-determination system is a chromosomal system that determines the sex of offspring in birds, some fish and crustaceans such as the giant river prawn, some insects (including butterflies and moths), the Schistosomatidae family of flatworms, and some reptiles, e.g. majority of snakes, lacertid lizards and monitors, including Komodo dragons.\n[…]\nSnakes' W chromosomes show different levels of decay compared to their Z chromosomes. This allows for tracking the shrinking of W chromosomes (analogous to the shrinking of Y chromosomes) by comparing across species. Mapping of specific genes reveals that the snake system is different from the bird system. It is not yet known which gene is the sex-determining one in snakes. One thing that stood out was that pythons show little signs of \"W-shrinking\".\n[…]\nBoa and Python families are now known to probably have an XY sex-determination system. Interest in looking into this came from female family members capable of parthenogenesis, or producing offspring without mating. In 2010 a female Boa constrictor that produced 22 female offspring in this manner was found in the wild. By then it was presumed that such a pattern was produced by WW chromosomes.\n[…]\nTrionychidae turtles possess a ZZ-ZW sex determinate system, which originated sometime between the beginning of the Jurassic and the Early Cretaceous.\n[…]\nAmong the approximately 5% of plant species that have separate male and female individuals (dioecious), several are known to have a ZW system of sex determination. These include pistachio, several species of strawberry such as Fragaria virginiana and Fragaria chiloensis, and several species of willow including Salix viminalis and Salix purpurea.\n[…]\nMedia related to ZW sex-determination system at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sistema_ZW_de_determina%C3%A7%C3%A3o_do_sexo",
        "situacao": "ok",
        "texto": "Em biologia do desenvolvimento e genética, o sistema ZW de determinação do sexo é o sistema que determina o sexo de aves, alguns peixes, répteis (como o dragão-de-komodo) e insetos (incluindo borboletas e traças).\n[…]\nEm animais, os cromossomos são encontrados nas células em pares, e por isso são chamados de diploides. O sexo e os traços sexuais secundários dos animais são determinado, simplificadamente, pelo conjunto de pares de cromossomos sexuais, cada um transmitido de um dos progenitores através dos gametas. No sistema ZW, o gameta feminino (isto é, o óvulo) que determina o sexo da descendência.\n[…]\nIsto ocorre porque o óvulo pode carregar um cromossomo Z ou W, enquanto o gameta masculino (espermatozoide) pode carregar apenas o cromossomo Z. Este sistema contrasta com o sistema XY e o sistema X0, nos quais o gameta masculino determina o sexo da descendência, pois pode carregar um cromossomo X ou Y.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Telômero",
      "descricao": "Sequência repetitiva de DNA que protege as pontas dos cromossomos."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Os telômeros protegem as pontas dos cromossomos. O que acontece com eles a cada divisão de uma célula comum do corpo?",
    "resposta": "Ficam mais curtos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Telomere"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Telomere",
        "situacao": "ok",
        "texto": "A telomere (;  from Ancient Greek  τέλος (télos) 'end' and  μέρος (méros) 'part') is a region of repetitive nucleotide sequences associated with specialized proteins at the ends of linear chromosomes (see Sequences). Telomeres are a widespread genetic feature most commonly found in eukaryotes.\n[…]\nFlow-FISH is used to quantify the length of telomeres in human white blood cells. A semi-automated method for measuring the average length of telomeres with Flow FISH was published in Nature Protocols in 2006.\n[…]\nAge and telomere length often negatively correlate in vertebrates, but this decline is variable among taxa and is influenced by the method used for estimating telomere length. In contrast, the available information shows no sex differences in telomere length across vertebrates. Phylogeny and life history traits such as body size or the pace of life can also affect telomere dynamics. For example, it has been described across species of birds and mammals.\n[…]\nA meta-analysis has confirmed that exposure to various stressors (e.g. pathogen infection, competition, reproductive effort and high activity level) was associated with shorter telomeres across different animal taxa.\n[…]\nStudies on ectotherms, and other non-mammalian organisms, show that there is no single universal model of telomere erosion; rather, there is wide variation in relevant dynamics across Metazoa, and even within smaller taxonomic groups these patterns appear diverse.\n[…]\nTelomere-binding protein\n[…]\nTelomeres and Telomerase: The Means to the End Nobel Lecture by Elizabeth Blackburn, which includes a reference to the impact of stress, and pessimism on telomere length\n[…]\nTelomerase and the Consequences of Telomere Dysfunction Nobel Lecture by Carol Greider"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tel%C3%B4mero",
        "situacao": "ok",
        "texto": "Os telômeros (português brasileiro) ou telómeros (português europeu) (do grego telos, final, e meros, parte) são estruturas constituídas por fileiras repetitivas de proteínas e DNA não codificante que formam as extremidades dos cromossomos. Sua principal função é impedir o desgaste do material genético e manter a estabilidade estrutural do cromossoma.\n[…]\nComo estes não se regeneram, chega a um ponto em que não permitem mais a correta replicação dos cromossomos e a célula perde completa ou parcialmente a sua capacidade de divisão, pois a DNApolimerase não é capaz de replicar o material genético. O encurtamento dos telômeros também pode eliminar certos genes que são indispensáveis à sobrevivência da célula ou silenciar genes próximos.\n[…]\nOs telômeros funcionam como um protetor para os cromossomos, assegurando que a informação genética (DNA) relevante seja perfeitamente copiada quando a célula se duplica. Os telômeros também protegem os cromossomas, de uma forma geral, da degradação, da recombinação e da translocação robertsoniana.\n[…]\nOs telômeros foram identificados pela primeira vez por Hermann Joseph Muller, na década de 30 do século XX. Mais tarde, em 1965, Leonard Hayflick fez a primeira observação direta do fenômeno de morte celular sem pré-replicação. Em homenagem ao cientista, o comprimento mínimo que os telômeros podem alcançar antes de causar problemas à divisão celular passou a ser chamado de Limite de Hayflick.\n[…]\nO telômero permite a estabilidade do cromossoma e por consequência a sobrevivência da célula: a par de um centrômero para poder haver segregação cromossomática, de uma origem para poder haver a iniciação da replicação do cromossoma; a existência do telómero é um dos elementos mais básicos para a existência do cromossoma. A junção destes três elementos foi já testada no âmbito da produção de cromossomas artificiais.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Milho Bt",
      "descricao": "Milho transgênico que recebeu genes da bactéria Bacillus thuringiensis."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "O milho Bt recebeu genes de uma bactéria. Contra o que esses genes protegem a planta?",
    "resposta": "Insetos-praga, como lagartas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Bt_corn"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bt_corn",
        "situacao": "ok",
        "texto": "Genetically modified maize (corn) is a genetically modified crop. Specific maize strains have been genetically engineered to express agriculturally-desirable traits, including resistance to pests and to herbicides. Maize strains with both traits are now in use in multiple countries. GM maize has also caused controversy with respect to possible health effects, impact on other insects and impact on \n[…]\nBt maize/Bt corn is a variant of maize that has been genetically altered to express one or more proteins from the bacterium Bacillus thuringiensis including Delta endotoxins. The protein is poisonous to certain insect pests. Spores of the bacillus are widely used in organic gardening, although GM corn is not considered organic. The European corn borer causes about a billion dollars in damage to corn crops each year.\n[…]\nIn 1996, the first GM maize producing a Bt Cry protein was approved, which killed the European corn borer and related species; subsequent Bt genes were introduced that killed corn rootworm larvae.\n[…]\nApproved Bt genes include single and stacked (event names bracketed) configurations of: Cry1A.105 (MON89034), CryIAb (MON810), CryIF (1507), Cry2Ab (MON89034), Cry3Bb1 (MON863 and MON88017), Cry34Ab1 (59122), Cry35Ab1 (59122), mCry3A (MIR604), and Vip3A (MIR162), in both corn and cotton. Corn genetically modified to produce VIP was first approved in the US in 2010.\n[…]\nIn 2013 Monsanto launched the first transgenic drought tolerance trait in a line of corn hybrids called DroughtGard. The MON 87460 trait is provided by the insertion of the cspB gene from the soil microbe Bacillus subtilis; it was approved by the USDA in 2011 and by China in 2013.\n[…]\nIn 2005, aid sent by the UN and the US to Central American nations also contained some StarLink corn. The nations involved, Nicaragua, Honduras, El Salvador and Guatemala refused to accept the aid."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Milho_geneticamente_modificado",
        "situacao": "ok",
        "texto": "O milho geneticamente modificado é uma cultura de milho geneticamente modificada. Linhagens específicas de milho foram geneticamente modificadas para expressar características desejáveis para a agricultura, incluindo resistência a pragas e a herbicidas. As linhagens de milho com ambas as características estão sendo usadas atualmente em vários países.\n[…]\nO milho Bt é uma variante do milho que foi geneticamente alterada para expressar uma ou mais proteínas da bactéria Bacillus thuringiensis, incluindo as endotoxinas Delta. A proteína é venenosa para determinadas pragas de insetos. Os esporos do bacilo são amplamente utilizados em cultivos orgânicos, embora o milho transgênico não seja considerado orgânico. A broca europeia do milho causa cerca de um bilhão de dólares em danos às plantações de milho a cada ano.\n[…]\nEm 1996, foi aprovado o primeiro milho transgênico que produzia uma proteína Bt Cry, que matou a broca europeia do milho e espécies relacionadas; foram introduzidos genes Bt subsequentes que mataram as larvas da lagarta do milho.\n[…]\nIsso pode ser especialmente devastador em países em desenvolvimento com padrões climáticos drásticos, como altas temperaturas, que favorecem o desenvolvimento de fungos tóxicos. Além disso, níveis mais altos de micotoxinas levam à rejeição do mercado ou à redução dos preços de mercado do grão. As plantações de milho transgênico sofrem menos ataques de insetos e, portanto, têm concentrações mais baixas de micotoxinas.\n[…]\nOs críticos afirmam que as proteínas Bt podem atingir insetos predadores e outros insetos benéficos ou inofensivos, bem como a praga visada. Essas proteínas têm sido usadas como sprays orgânicos para o controle de insetos na França desde 1938 e nos EUA desde 1958, sem nenhum efeito nocivo ao meio ambiente.\n[…]\nUm estudo de 2004 encontrou proteína Bt em grãos de milho de refúgio.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Flagelo bacteriano",
      "descricao": "Apêndice longo que muitas bactérias usam para nadar, movido por um motor molecular na membrana."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "O flagelo do espermatozoide ondula como um chicote. E o flagelo das bactérias, de que jeito ele se move?",
    "resposta": "Gira como uma hélice",
    "fonte": [
      "https://en.wikipedia.org/wiki/Flagellum"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Flagellum",
        "situacao": "ok",
        "texto": "A flagellum (; pl.: flagella) (Latin for 'whip' or 'scourge') is a hair-like appendage that protrudes from certain plant and animal sperm cells, from fungal spores (zoospores), and from a wide range of microorganisms to provide motility. Many protists with flagella are known as flagellates.\n[…]\nThe flagella in eukaryotes have dynein and microtubules that move with a bending mechanism. Bacteria and archaea do not have dynein or microtubules in their flagella, and they move using a rotary mechanism.\n[…]\nThrough use of their flagella, bacteria are able to move rapidly towards attractants and away from repellents, by means of a biased random walk, with runs and tumbles brought about by rotating its flagellum counterclockwise and clockwise, respectively. The two directions of rotation are not identical (with respect to flagellum movement) and are selected by a molecular switch. Clockwise rotation is called the traction mode with the body following the flagella.\n[…]\nPeritrichous bacteria have flagella projecting in all directions (e.g., E. coli).\n[…]\nSpirochetes, in contrast, have flagella called endoflagella arising from opposite poles of the cell, and are located within the periplasmic space as shown by breaking the outer-membrane and also by electron cryotomography microscopy. The rotation of the filaments relative to the cell body causes the entire bacterium to move forward in a corkscrew-like motion, even through material viscous enough to prevent the passage of normally flagellated bacteria.\n[…]\nBacterial flagella are thicker than archaella, and the bacterial filament has a large enough hollow \"tube\" inside that the flagellin subunits can flow up the inside of the filament and get added at the tip; the archaellum is too thin (12-15 nm) to allow this.\n[…]\nCell Image Library - Flagella"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Flagelo",
        "situacao": "ok",
        "texto": "Flagelo (do latim: flagellum; \"chicote\") é a designação dada em diversos campos da Biologia aos apêndices móveis com forma de chicote presentes em muitos organismos unicelulares e em algumas células de organismos pluricelulares.\n[…]\nOs flagelos de Eukarya (os das células de protistas, animais e plantas) são projecções celulares que oscilam ritmicamente gerando um movimento helicoidal. Os flagelos de Bacteria, por sua parte, são complexos mecanismos em que o filamento roda como uma hélice impulsado por um microscópico motor giratório proteico. Por último, os flagelos de Archaea são superficialmente similares aos bacterianos, mas diferem em múltiplos aspectos, sendo considerados como não homólogos.\n[…]\nO flagelo bacteriano é um tubo oco, com 20 nanómetros de espessura, composto pela proteína flagelina, de forma helicoidal com uma dobra à saída da membrana celular chamada \"gancho\", que faz com que a hélice fique virada para o exterior da célula. Entre o gancho e a estrutura basal existe uma bainha que passa através de anéis de proteína na membrana celular, que funcionam como “rolamentos”.\n[…]\nDevido à falta de homologia entre o flagelo bacteriano e o flagelo arqueano, em 2012 foi sugerido que o flagelo arqueano seja referido como \"arcaelo\" (ou, em inglês, archaellum).\n[…]\nDe modo semelhante ao flagelo, o arcaelo consiste num filamento helicoidal rígido que se localiza no exterior da célula e que se encontra ancorado à parede celular por um nanomotor. Este nanomotor é responsável pela construção do filamento e, posteriormente, pela sua rotação. A rotação do filamento, à semelhança da hélice de um barco ou de um avião, propele as arqueias em meio líquido.\n[…]\nPhysics Today introdução ao flagelo bacteriano por Howard Berg",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Clone",
      "descricao": "Organismo ou célula geneticamente idêntico a outro, obtido por reprodução assexuada ou por clonagem."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A palavra clone foi criada no começo do século vinte, a partir de um termo grego. O que esse termo significa?",
    "resposta": "Galho (ramo)",
    "fonte": [
      "https://en.wikipedia.org/wiki/Cloning"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cloning",
        "situacao": "ok",
        "texto": "Cloning is the process of producing individual organisms with identical genomes, by either natural or artificial means. In nature, some organisms produce clones through asexual reproduction; this reproduction of an organism by itself without a mate is known as parthenogenesis. In the field of biotechnology, cloning is the process of creating cloned organisms of cells and of DNA fragments.\n[…]\nCloning of any DNA fragment essentially involves four steps\n[…]\nGrafting can be regarded as cloning, since all the shoots and branches coming from the graft are genetically a clone of a single individual, but this particular kind of cloning has not come under ethical scrutiny and is generally treated as an entirely different kind of operation.\n[…]\nIn 2018, scientists declared they had no intention of trying to clone people, and they believed their results should spark a wider discussion about the laws and regulations the world needs to regulate cloning.\n[…]\nCloning humans from body parts is also a common theme in science fiction. Cloning features strongly among the science fiction conventions parodied in Woody Allen's Sleeper, the plot of which centres around an attempt to clone an assassinated dictator from his disembodied nose. In the 2008 Doctor Who story \"Journey's End\", a duplicate version of the Tenth Doctor spontaneously grows from his severed hand, which had been cut off in a sword fight during an earlier episode.\n[…]\nIn the 2013 television series Orphan Black, cloning is used as a scientific study on the behavioral adaptation of the clones. In a similar vein, the book The Double by Nobel Prize winner José Saramago explores the emotional experience of a man who discovers that he is a clone.\n[…]\n'Cloning' Freeview video by the Vega Science Trust and the BBC/OU\n[…]\nClick and Clone. Try it yourself in the virtual mouse cloning laboratory, from the University of Utah's Genetic Science Learning Center"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Clonagem",
        "situacao": "ok",
        "texto": "Clonagem é a produção de indivíduos geneticamente iguais. É um processo de reprodução assexuada que resulta na obtenção de cópias geneticamente idênticas de um mesmo ser vivo – micro-organismo, vegetal ou animal.\n[…]\nA clonagem induzida é o método artificial / em laboratório de se fazer uma clonagem, a partir de um processo no qual é retirado de uma célula somática o núcleo, e de um óvulo a membrana. O que é feito depois depende se é uma clonagem reprodutiva ou terapêutica, onde na reprodutiva a junção dos dois é colocada numa barriga de aluguel, e na terapêutica se reproduz em laboratório durante um curto período de tempo para poder coletar as células tronco.\n[…]\nA Clonagem é um processo de reprodução assexuada, onde são obtidos indivíduos geneticamente iguais (micro organismo, vegetal ou animal) a partir de uma célula-mãe. É um mecanismo comum de propagação de espécies de plantas, bactérias e protozoários. Em humanos, os clones naturais são gêmeos univitelinos, seres que compartilham do mesmo DNA, ou seja, do mesmo material genético originado pela divisão do óvulo fertilizado.\n[…]\nAntes da clonagem da ovelha Dolly, os investigadores tinham chegado a clonar ovelhas a partir de células embrionárias. Em fevereiro de 1997, um grupo de cientistas escoceses, liderado pelo inglês Ian Wilmut, anuncia a realização da primeira cópia genética (clonagem) de um mamífero adulto de seis anos, a partir de uma célula somática: a ovelha da raça Finn Dorset, batizada como Dolly.\n[…]\nJorge M. Canhoto, Biotecnologia Vegetal da Clonagem de Plantas à Transformação Genética; Imprensa da Univ. de Coimbra, 2010, ISBN 9-892-60065-7",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Lisossomo",
      "descricao": "Organela das células animais que contém enzimas digestivas e decompõe materiais da célula."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Por guardarem enzimas capazes de digerir a própria célula, os lisossomos ganharam qual apelido sombrio?",
    "resposta": "Bolsas suicidas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Lysosome"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lysosome",
        "situacao": "ok",
        "texto": "A lysosome (/ˈlaɪsəˌsoʊm/) is a membrane-bound organelle that is found in all animal cells (except red blood cells), and rarely in plant cells. There are normally hundreds of lysosomes in the cytosol, where they function as the cell's degradation center. Their primary responsibility is for catabolic degradation of proteins, polysaccharides and lipids into their respective building-block molecules:\n[…]\nSome lysosomotropic drugs can interfere with lysosomal enzymes like acid sphingomyelinase. Ambroxol, a mucolytic, promotes lysosomal exocytosis by neutralizing lysosomal pH and releasing stored calcium. This action may underlie its observed benefits in diseases linked to lysosomal dysfunction, including Parkinson's disease and lysosomal storage disorders.\n[…]\nAs a result, immune complexes in the lysosome recycle to the surface of macrophages causing an accumulation of DNA fragments and nuclear complexes which triggers an immune response from the body which is leads to the multiple lupus-associated pathologies.\n[…]\nThere are over 50 different types of hydrolytic enzymes in lysosomes, the table below shows a few of the main types and their substrates. It is important to keep in mind that each category below has multiple different types of enzymes.\n[…]\n3D structures of proteins associated with lysosome membrane\n[…]\nHide and Seek Foundation For Lysosomal Research\n[…]\nLysosomal Disease Network, a research consortium funded by the NIH through its NCATS/Rare Diseases Clinical Research Network\n[…]\nKang, Changsoo; Riazuddin, Sheikh; Mundorff, Jennifer; Krasnewich, Donna; Friedman, Penelope; Mullikin, James C.; Drayna, Dennis (25 February 2010). \"Mutations in the Lysosomal Enzyme–Targeting Pathway and Persistent Stuttering\". New England Journal of Medicine. 362 (8): 677–685. doi:10.1056/NEJMoa0902630. PMC 2936507. PMID 20147709.\n[…]\nAnimation showing how lysosomes are made, and their function"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lisossomo",
        "situacao": "ok",
        "texto": "Lisossomas (português europeu) ou lisossomos (português brasileiro) são organelas celulares citoplasmáticos que possuem a capacidade de degradar partículas. A partir disso, elas desempenham uma importante função de reciclagem de componentes celulares envelhecidos, além de defesa contra agentes externos e participação no processo de autofagia. Os lisossomos estão ainda envolvidos em outros processo\n[…]\nTodas essas enzimas são produzidas no retículo endoplasmático rugoso, transferidas para as bolsas (português europeu) ou cisternas (português brasileiro) do Complexo de Golgi e depois armazenadas nos endossomos tardios, de onde irão para lisossomos maduros (ou continuarão lá até o endossomo amadurecer em um lisossomo). Elas possuem atividade ótima em pH ácido (aproximadamente 5,0) o qual é mantido com eficiência no interior do lisossomo.\n[…]\nOriginalmente, De Duve havia chamado as organelas de \"bolsas suicidas\" da célula, pelo seu hipotetizado papel na apoptose. Porém, tem sido demonstrado que participam pouco no processo de morte celular.\n[…]\nAssim como os próprios lisossomos e os endolisossomos, que não possuem distinção real entre si, apenas pelos diferentes estágios no ciclo, já que todos eles são compartimentos com meio ácido (pH baixo) e que possuem enzimas hidrolíticas para degradação de moléculas na digestão celular.\n[…]\nAinda pode haver associação de lisossomos primários, aqueles que contêm apenas enzimas hidrolíticas, e não possuem material para degradação em seu interior, com endossomos tardios, formando lisossomos secundários. Endossomos terciários são aqueles que contêm apenas resíduos não digeridos no processo de digestão celular.\n[…]\nAlém disso, algumas células especializadas são capazes de realizar uma variante desse processo, denominado fagocitose.\n[…]\nCélula",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Mimivírus",
      "descricao": "Vírus gigante descoberto dentro de amebas, de tamanho comparável ao de pequenas bactérias."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O mimivírus, um vírus gigante, ganhou esse nome porque ao microscópio parecia imitar outro tipo de micróbio. Qual?",
    "resposta": "Bactéria",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mimivirus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mimivirus",
        "situacao": "ok",
        "texto": "Mimivirus is a genus of giant viruses, in the family Mimiviridae. It is believed that Amoeba serve as their natural hosts. It also refers to a group of phylogenetically related large viruses.\n[…]\nIn colloquial speech, Acanthamoeba polyphaga mimivirus (APMV) is more commonly referred to as just \"mimivirus\". Mimivirus, short for \"mimicking microbe\", is so called to reflect its large size and apparent Gram-staining properties.\n[…]\nAPMV was discovered accidentally in 1992 within the amoeba Acanthamoeba polyphaga, after which it is named, during research into legionellosis by researchers from Marseille and Leeds. The virus was observed in a Gram stain and mistakenly thought to be a Gram-positive bacterium. As a consequence it was named Bradfordcoccus, after Bradford, England, where the amoeba had originated.\n[…]\nIn 2003, researchers at the Université de la Méditerranée in Marseille, France, published a paper in Science identifying the micro-organism as a virus. It was given the name \"mimivirus\" (for \"mimicking microbe\") as it resembles a bacterium on Gram staining.\n[…]\nMimivirus shares several morphological characteristics with all members of the NCLDV group of viruses. The condensed central core of the virion appears as a dark region under the electron microscope. The large genome of the virus resides within this area. An internal lipid layer surrounding the central core is present in all other NCLDV viruses, so this features may also be present in mimivirus.\n[…]\nMycoplasma genitalium—one of the smallest bacteria\n[…]\nPelagibacter ubique—possesses one of the smallest bacterial genomes\n[…]\nThe webpage for Mimivirus\n[…]\nRadiolab.org Shrink on the discovery of Mimivirus Thursday, July 30, 2015 - 08:54 PM."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mimiv%C3%ADrus",
        "situacao": "ok",
        "texto": "Mimivirus é uma espécie singular de vírus gigante, parasita obrigatório de protozoários (Classe Rhyzopoda ou Sarcodina) Acanthamoeba polyphaga, por isso seu nome científico é Acanthamoeba polyphaga mimivirus (APMV). Popularmente o APMV é mais conhecido apenas como “mimivírus”.\n[…]\nFoi descoberto em 1992 na Acanthamoeba polyphaga, porém, na época, acreditava-se ser uma bactéria do gênero Legionella. O vírus foi observado através de coloração do tipo Gram, por isso foi erradamente considerado uma bactéria gram-positiva. A consequência deste erro foi o nome que lhe deram, \"Bradfordcoccus\", devido ao distrito onde foi recolhido a ameba (Bradford na Inglaterra).\n[…]\nO mimivírus tem um capsídeo protéico no tamanho de 390 nm (nanômetros) e os filamentos protéicos de 100 nm, totalizando 600 nm, é um dos maiores vírus conhecidos (ficando atrás dos mamavirus e do Megavirus chilensis), sendo maior que algumas bactérias (que possuem 400 nm).\n[…]\nO mimivírus é um vírus de DNA, e possui no seu genoma 1 181 404 pares de bases, maior do que o de muitas bactérias (algumas bactérias têm apenas 400 genes), ele contém 911 genes codificadores de proteínas, muito acima do número mínimo de 4 genes necessários para um vírus existir.\n[…]\nO mimivírus tem a capacidade de produzir proteínas pelos seus próprios meios e a capacidade de reparação do seu próprio genoma, sendo que todas estas propriedades nunca foram vistas em outros vírus.\n[…]\nO gigantesco Mimivírus se defende de invasores utilizando semelhante ao sistema CRISPR implementado por bactérias e outros microorganismos. O sistema de defesa do Mimivírus pode levar a descoberta de novas ferramentas de edição de genoma.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Deinococcus radiodurans",
      "descricao": "Bactéria extremamente resistente a radiação, frio, desidratação e ácidos."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Por resistir a doses enormes de radiação, a bactéria Deinococcus radiodurans ganhou o apelido de qual herói da ficção?",
    "resposta": "Conan, o Bárbaro",
    "distratores": [
      "Hércules",
      "Hulk",
      "Super-Homem"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Deinococcus_radiodurans"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Deinococcus_radiodurans",
        "situacao": "ok",
        "texto": "Deinococcus radiodurans is a bacterium, an extremophile and one of the most radiation-resistant organisms known. It can survive cold, dehydration, vacuum, and acid, and therefore is known as a polyextremophile. The Guinness Book Of World Records listed it in January 1998 as the world's most radiation-resistant bacterium and most radiation-resistant lifeform.\n[…]\nThe genus name Deinococcus comes from Ancient Greek δεινός (deinós), meaning \"terrible\", and κόκκος (kókkos), meaning \"berry\". The specific epithet radiodurans comes from radius and durare, meaning \"radiation\" and \"surviving\" respectively. The species was formerly called Micrococcus radiodurans. As a consequence of its hardiness, it has been nicknamed \"Conan the Bacterium\", in reference to Conan the Barbarian.\n[…]\nIn 2016, Massimiliano Peana et al. reported a spectroscopic study through NMR, EPR, and ESI-MS techniques on the Mn(II) interaction with two peptides, DP1 (DEHGTAVMLK) and DP2 (THMVLAKGED), whose amino acid composition was selected to include the majority of the most prevalent amino acids present in a Deinococcus radiodurans bacterium cell-free extract that contains components capable of conferring extreme resistance to ionizing radiation.\n[…]\nA team of Russian and American scientists proposed that the radioresistance of D. radiodurans had a Martian origin. They suggested that evolution of the microorganism could have taken place on the Martian surface until it was delivered to Earth on a meteorite. However, apart from its resistance to radiation, Deinococcus is genetically and biochemically very similar to other terrestrial life forms, arguing against a unique extraterrestrial origin.\n[…]\n\"Meet Conan the Bacterium – Humble microbe could become  'The Accidental (Space) Tourist'\"\n[…]\nType strain of Deinococcus radiodurans at BacDive –  the Bacterial Diversity Metadatabase"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Deinococcus_radiodurans",
        "situacao": "ok",
        "texto": "A Deinococcus radiodurans é uma bactéria que consegue sobreviver muito bem à radiação ultravioleta do espaço, em ambientes extremamente frios e oxidativos, assim como severamente ionizados e a vácuo.\n[…]\nO nome Deinococcus radiodurans tem deriva do Grego Antigo: δεινός (deinos) e κόκκος (kokkos) significa \"grão terrível\" e os termos em Latim, radius e durare, \"sobrevivente à radiação\".\n[…]\nA D. radiodurans foi descoberta em 1956 por Arthur W. Anderson em Corvallis, Oregon. Eram realizados experimentos para determinar se comida enlatada podia ser esterilizada usando altas doses de radiação gama, que consistiam em expor um pedaço de carne a uma dose de radiação capaz de matar qualquer forma de vida então conhecida. No entanto, mesmo assim a carne estragou, o que possibilitou aos cientistas isolar a D. radiodurans.\n[…]\nA sequência completa do DNA da D. radiodurans foi publicada em 1999 pelo TIGR(The Institute for Genomic Research).\n[…]\nA bactéria Deinococcus radiodurans tem uma capacidade única de reparar suas fitas simples e duplas de DNA. Quando um dano nas fitas é aparente à célula, ela as transforma em uma estrutura anelar, na qual o DNA é reparado.\n[…]\nSão extremamente resistentes a radiações ionizantes, luz ultravioleta, dessecação, oxidação e a agentes eletrófilos.\n[…]\nO genoma da D. radiodurans é composto por dois cromossomos circulares, com 2,65 milhões e 412 mil pares de pases, assim como um megapasmídeo e um plasmídeo com 177 mil e 46 mil pares de bases respectivamente. Há por volta de 3.195 genes. Na fase estacionária, cada célula bacteriana contém quatro cópias do genoma; quando estão na se multiplicando rapidamente, cada bactéria contém de 8 a 10 cópias do genoma.\n[…]\nRadiação gama",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Pikachurina",
      "descricao": "Proteína da retina descoberta em 2008 por cientistas japoneses, importante para a transmissão dos sinais visuais."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Em 2008, cientistas japoneses deram a uma proteína da retina, ligada à visão, o nome de qual personagem?",
    "resposta": "Pikachu",
    "distratores": [
      "Sonic",
      "Mario",
      "Doraemon"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pikachurin"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pikachurin",
        "situacao": "ok",
        "texto": "Pikachurin, also known as  AGRINL  (AGRINL) and EGF-like, fibronectin type-III and laminin G-like domain-containing protein (EGFLAM), is a protein that in humans is encoded by the EGFLAM gene.\n[…]\nA non-correct binding between pikachurin and DG is associated with muscular dystrophies that often involve eye abnormalities.\n[…]\nPikachurin is an extracellular matrix-like retinal protein first discovered in 2008 in Japan by Shigeru Sato et al. and named after Pikachu, a species of the Pokémon franchise. The name of this protein was inspired by Pikachu's \"lightning-fast moves\".\n[…]\nIt is clear that Pikachurin, an extracellular matrix–like retinal protein, is localized to the synaptic cleft in the photoreceptor ribbon synapse. It is demonstrated that with a lack of Pikachurin, there is an improper apposition of the bipolar cell dendritic tips to the photoreceptor ribbon synapses, resulting in alterations in synaptic signal transmission and visual function.\n[…]\nPrecise interactions between the photoreceptor ribbon synapse and the bipolar dendrites which are realized due to Pikachurin may advance our understanding of the molecular mechanisms underlying the retinal electrophysiological abnormalities observed in muscular dystrophy patients. The muscle-eye-brain dystrophy is caused by mutations in POMGnT1 or LARGE.\n[…]\nSince pikachurin seems to provide better visual acuity, Sato et al. of the Osaka Bioscience Institute believe that the protein could be used to develop a treatment for retinitis pigmentosa and other eye disorders.\n[…]\nLightning-Fast Vision Protein Named After Pikachu Archived 2017-07-11 at the Wayback Machine - July 24, 2008"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pikachurina",
        "situacao": "ok",
        "texto": "Pikachurina, também conhecido como AGRINL (AGRINL) e EGF-like, fibronectin type-III and laminin G-like domain-containing protein (EGFLAM) (fibronectina do tipo III como EGF e proteína laminina contendo domínio como G, em tradução livre), é uma proteína que em humanos é codificada pelo gene EGFLAM.\n[…]\nPikachurina é uma proteína da retina como uma matriz extracelular primeiramente descrita em 2008 no Japão por Shigeru Sato et al., e nomeado em homenagem ao Pikachu, um personagem da franquia Pokémon. O nome desta \"ágil\" proteína foi inspirado nos \"movimentos à velocidade de um relâmpago e efeitos de choques elétricos\" do Pikachu.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Hipótese da Rainha Vermelha",
      "descricao": "Hipótese evolutiva de Leigh Van Valen, de 1973, segundo a qual as espécies precisam evoluir sem parar para não serem superadas pelas rivais."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Uma hipótese diz que as espécies precisam evoluir sem parar só para não ficarem para trás. Ela se chama Rainha Vermelha por causa de qual livro?",
    "resposta": "Alice através do espelho",
    "fonte": [
      "https://en.wikipedia.org/wiki/Red_Queen_hypothesis"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Red_Queen_hypothesis",
        "situacao": "ok",
        "texto": "The Red Queen hypothesis is a hypothesis in evolutionary biology proposed in 1973, that species must constantly adapt, evolve, and proliferate in order to survive while pitted against ever-evolving opposing species.\n[…]\nVan Valen named the hypothesis \"Red Queen\" because under his hypothesis, species have to \"run\" or evolve in order to stay in the same place, or else go extinct. As the Red Queen said to Alice in Lewis Carroll's Through the Looking-Glass in her explanation of the nature of Looking-Glass Land:Now, here, you see, it takes all the running you can do, to keep in the same place.\n[…]\nIn multi-host and multi-parasite coevolution, the Red Queen dynamics could affect what host and parasite types will become dominant or rare.\n[…]\nA review of numerous genetic studies on plant disease resistance failed to uncover a single example consistent with the assumptions of the Red Queen hypothesis.\n[…]\nThe Red Queen hypothesis has been invoked by some authors to explain evolution of aging. The main idea is that aging is favored by natural selection since it allows faster adaptation to changing conditions, especially in order to keep pace with the evolution of pathogens, predators and prey.\n[…]\nThe Black Queen hypothesis is a theory of reductive evolution that suggests natural selection can drive organisms to reduce their genome size. In other words, a gene that confers a vital biological function can become dispensable for an individual organism if its community members express that gene in a \"leaky\" fashion. Like the Red Queen hypothesis, the Black Queen hypothesis is a theory of co-evolution.\n[…]\nRed King hypothesis\n[…]\nPearson, Paul N. (2001) Red Queen hypothesis Encyclopedia of Life Sciences http://www.els.net"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rainha_Vermelha_%28biologia%29",
        "situacao": "ok",
        "texto": "A Hipótese da Rainha Vermelha, Rainha Vermelha ou corrida da Rainha Vermelha é uma hipótese evolutiva. O termo advém da corrida da Rainha Vermelha no livro de Lewis Carroll Alice através do espelho. A Rainha Vermelha diz, \"It takes all the running you can do, to keep in the same place.\" (\"É preciso correr o máximo possível, para permanecermos no mesmo lugar.\") O princípio da Rainha Vermelha pode s\n[…]\nNum panorama macroevolutivo, a observação de que a probabilidade de grupos de espécies (geralmente famílias) é constante dentro de cada grupo e aleatória entre grupos deu suporte à hipótese no nível microevolutivo.\n[…]\nA aplicação da Hipótese da Rainha Vermelha para entender a evolução do sexo e da reprodução não foi parte do trabalho de Van Valen, que abordou apenas evolução acima do nível de espécies. A versão microevolutiva da Hipótese da Rainha Vermelha foi proposta por Bell (1982), também citando Lewis Carrol, porém sem citar Van Valen (ver abaixo).\n[…]\nO escritor Matt Ridley popularizou o termo \"Rainha Vermelha\" associado a seleção sexual em seu livro \"The Red Queen\". No livro, Riddley aborda o debate da biologia teórica acerca do benefício adaptativo da reprodução sexuada nas espécies nas quais está presente. A relação entre a Rainha Vermelha e este debate vem do fato de que a teoria aceita tradicionalmente (Vicar of Bray) apenas vantagem adaptativa ao nível de espécie ou grupo, não ao nível do gene.\n[…]\nPor outro lado, uma teoria como a da Rainha Vermelha, que traz a ideia de uma corrida armamentista evolutiva entre espécies que estão co-evoluindo, pode explicar a importância da reprodução sexuada ao nível de gene. Neste caso, o papel do sexo seria preservar genes que são desvantajosos no presente, mas que podem ser vantajosos junto a uma futura população do sistema de espécies co-evoluído.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Paulo Vanzolini",
      "descricao": "Zoólogo e compositor paulista (1924–2013), diretor do Museu de Zoologia da USP e autor de sambas famosos."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O zoólogo Paulo Vanzolini, que dirigiu o Museu de Zoologia da USP, compôs qual samba que termina numa cena de sangue num bar da Avenida São João?",
    "resposta": "Ronda",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Paulo_Vanzolini"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Paulo_Vanzolini",
        "situacao": "ok",
        "texto": "Paulo Emílio Vanzolini (São Paulo, 25 de abril de 1924 – São Paulo, 28 de abril de 2013) foi um zoólogo e compositor brasileiro, autor de famosas canções como \"Ronda\", \"Volta por Cima\", \"Moda da Onça\" e \"Na Boca da Noite\".\n[…]\nEm 1945, serviu na cavalaria do Exército, e fazia patrulha em regiões de prostituição no centro de São Paulo, o que lhe rendeu inspiração para compor o samba-canção Ronda, que só seria gravada 8 anos mais tarde, no disco de Inezita Barroso.Formou-se em medicina em 1947, profissão a qual nunca exerceu, e casou-se em 1948, com Ilze, com quem teria cinco filhos. No ano seguinte, foi para Boston, nos Estados Unidos, onde obteve o doutorado em zoologia pela Universidade Harvard.\n[…]\nEm 1959, o violonista José Henrique, dono da boate Zelão, mostrou o samba \"Volta por Cima\" ao cantor Noite Ilustrada, que o lançou em 1963, pela Philips, com estrondoso sucesso. Nesse mesmo ano, Paulo Vanzolini foi nomeado diretor do Museu de Zoologia, cargo que exerceu durante trinta anos. Mesmo depois de se aposentar em 1993, continuou trabalhando na instituição. \"É a única coisa de que gosto, a única coisa que sei fazer\", declarou à revista Scientific American Brasil em 2002.\n[…]\nEm novembro de 1967, Luís Carlos Paraná, da boate Jogral, e Marcus Pereira, dono de uma agência de publicidade, resolveram produzir um LP chamado \"Onze Sambas e uma Capoeira\" com as composições inéditas de Paulo Vanzolini, conhecidas apenas por seus amigos frequentadores das mesmas rodas de samba.\n[…]\nEm dezembro de 2022, foram realizadas reformas no cruzamento da Avenida Ipiranga e a São João, com colocação de estátuas em homenagem aos representantes do samba paulista, Adoniran Barbosa e Paulo Vanzolini.\n[…]\n1974: A Música de Paulo Vanzolini"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Bertha Lutz",
      "descricao": "Bióloga e ativista brasileira (1894–1976), pesquisadora do Museu Nacional especializada em anfíbios e líder do movimento feminista."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Bertha Lutz, bióloga do Museu Nacional especialista em sapos e pererecas, liderou no Brasil a luta por qual direito?",
    "resposta": "Voto feminino",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Bertha_Lutz",
      "https://en.wikipedia.org/wiki/Bertha_Lutz"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Bertha_Lutz",
        "situacao": "ok",
        "texto": "Bertha Maria Júlia Lutz (São Paulo, 2 de agosto de 1894 – Rio de Janeiro, 16 de setembro de 1976) foi uma ativista feminista, bióloga, educadora, diplomata e política brasileira. Era filha de Adolfo Lutz, cientista e pioneiro da medicina tropical. Foi uma das figuras mais significativas do feminismo e da educação no Brasil do século XX.\n[…]\nO movimento sufragista brasileiro teve uma grande vitória em 24 de fevereiro de 1932, data em que o presidente Getúlio Vargas, por meio do Decreto n.º 21 076, instalou o novo Código Eleitoral e garantiu o direito de voto feminino no país.\n[…]\nDurante seus anos de maior atuação, o movimentou liderou conquistas como a criação da União Universitária Feminina, o ingresso de meninas no Colégio Pedro II, o voto feminino e leis de proteção à mulher e à criança. Com campanhas pela ampliação dos direitos civis e políticos das mulheres, entre suas maiores bandeiras estavam o voto feminino universal - conquistado em 1932 - e o acesso à educação.\n[…]\nEla foi a segunda mulher a ocupar o cargo de deputada no Brasil, na primeira legislatura com presença feminina após a primeira Constituição a dar direito de voto às mulheres\n[…]\nEm 2021, Lutz foi homenageada no nome de uma nova espécie de dinossauro terópode brasileiro, Berthasaura leopoldinae.\n[…]\nEm 2021, a HBO lançou o documentário Bertha Lutz — A mulher na carta da ONU, sobre o importante papel da bióloga e feminista brasileira em assegurar que questões de gênero fossem contempladas nas bases da Organização das Nações Unidas (ONU). A ideia do documentário surgiu a partir das pesquisas da argelina Fatima Sator e da norueguesa Elise Luhr Dietrichson, que estudavam na Universidade de Londres quando encontraram uma série de cartas escritas por Bertha Lutz.\n[…]\nO voto feminino no Brasil\n[…]\n\"Berta Lutz: cientista e feminista em luta pela emancipação da mulher\""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Bertha_Lutz",
        "situacao": "ok",
        "texto": "Bertha Maria Júlia Lutz (2 August 1894 – 16 September 1976) was a Brazilian zoologist, politician, and diplomat. Lutz became a leading figure in both the Pan American feminist movement and human rights movement. She was instrumental in gaining women's suffrage in Brazil and represented her country at the United Nations Conference on International Organization, signing her name to the United Nation\n[…]\nAfter gaining organizational experience, Bertha Lutz cofounded a new organization, the Liga para a Emancipação Intelectual da Mulher (The League for Intellectual Emancipation of Women), with Maria Lacerda da Moura in 1920. This organization advocated for the inclusion of women in scientific areas. In 1922, Lutz established Federação Brasileira pelo Progresso Feminino (the Brazilian Federation for the Advancement of Women, FBPF).\n[…]\nLutz's advocacy for the rights of women did not end with the right to vote, and she continued to play a prominent role in feminist campaigns. In 1933, after obtaining her law degree from the Federal University of Rio de Janeiro Faculty of Law, Lutz introduced several proposals for gender equity at the Inter-American Conference of Montevideo, Uruguay. Most notable of these proposals was her call for the Inter-American Commission of Women to focus on issues of gender equality in the workplace.\n[…]\nAfter returning to Brazil in 1918, Lutz dedicated herself to the study of amphibians, especially poison dart frogs and frogs of the family Hylidae. In 1919, she was hired by the Museu Nacional do Rio de Janeiro. She later became a naturalist at the Section of Botany.\n[…]\nBertha Lutz's collections held at the Museu Nacional in Rio de Janeiro were destroyed in the fire that devastated most of the museum's collections in September 2018.\n[…]\nFeminism in Brazil\n[…]\nBertha Lutz: Photographs from LIFE Magazine, three black-and-white photos, captioned in English"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Cianobactéria",
      "descricao": "Grupo de bactérias que realizam fotossíntese liberando oxigênio, antigamente chamadas de algas azuis."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Segundo a teoria mais aceita, os cloroplastos das plantas descendem de qual grupo de bactérias?",
    "resposta": "Cianobactérias",
    "fonte": [
      "https://en.wikipedia.org/wiki/Cyanobacteria",
      "https://en.wikipedia.org/wiki/Chloroplast"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cyanobacteria",
        "situacao": "ok",
        "texto": "Cyanobacteria ( sy-AN-oh-bak-TEER-ee-ə) are a group of autotrophic gram-negative bacteria of the phylum Cyanobacteriota that can obtain biological energy via oxygenic photosynthesis. Cyanobacteria originated in a freshwater or terrestrial environment, and first appeared in the middle Archean eon. They are probably the most numerous taxon to have ever existed on Earth.\n[…]\nFormerly, some bacteria, like Beggiatoa, were thought to be colorless Cyanobacteria.\n[…]\nThe botanical and bacteriological communities disagree on the name and scope of this phylum or division. Specifically, the bacteriological community prefer the name Cyanobacteriota not necessarily including the non-photosynthetic Vampirovibrionophyceae, while the botanical community prefers the name Cyanobacteria and the inclusion of Vampirovibrionophyceae.\n[…]\nSome bacteriologists refer to Vampirovibrionophyceae as a phylum Melainabacteria or Melainobacteriota.In the dedrograms below, botanical (ICNafp) names are put above the line, and bacteriological (ICNP) names below the line if it differs from the botanical. In addition, a popular bacteriological synonym for Cyanobacteriota s.s. is Cyanobacteria.\n[…]\nGTDB uses Cyanobacteriota s.l. with three classes, the added one being Sericytochromatia. The bacteriological class suffix -ia is used, hence Cyanobacteriia and Vampirovibrionia.\n[…]\nAlgaeBase uses Cyanobacteria with only Cyanophyceae.\n[…]\nCyanobacteria may possess the ability to produce substances that could one day serve as anti-inflammatory agents and combat bacterial infections in humans. Cyanobacteria's photosynthetic output of sugar and oxygen has been demonstrated to have therapeutic value in rats with heart attacks.\n[…]\nSome cyanobacteria can produce neurotoxins, cytotoxins, endotoxins, and hepatotoxins (e.g., the microcystin-producing bacteria genus microcystis), which are collectively known as cyanotoxins."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Chloroplast",
        "situacao": "ok",
        "texto": "A chloroplast ( KLOR-ə-plast, -⁠plahst) is a type of organelle known as a plastid that conducts photosynthesis mostly in plant and algal cells. Chloroplasts have a high concentration of chlorophyll pigments which capture the energy from sunlight, convert it to chemical energy and decompose water to release oxygen. The chemical energy created is then used to make sugar and other organic molecules f\n[…]\nChloroplasts are one of many types of organelles in photosynthetic eukaryotic cells. They evolved from cyanobacteria through a process called organellogenesis. Cyanobacteria are a diverse phylum of gram-negative bacteria capable of carrying out oxygenic photosynthesis. Like chloroplasts, they have thylakoids. The thylakoid membranes contain photosynthetic pigments, including chlorophyll a.\n[…]\nThis early divergence is supported by both phylogenetic studies and physical features present in glaucophyte chloroplasts and cyanobacteria, but not the red and green chloroplasts. First, glaucophyte chloroplasts have a peptidoglycan wall, a type of cell wall otherwise only in bacteria (including cyanobacteria).\n[…]\nThere are some common misconceptions about the outer and inner chloroplast membranes. The fact that chloroplasts are surrounded by a double membrane is often cited as evidence that they are the descendants of endosymbiotic cyanobacteria.\n[…]\nCryptophyte chloroplasts and some cyanobacteria don't have their phycobilin pigments organized into phycobilisomes, and keep them in their thylakoid space instead.\n[…]\nChloroplasts are a special type of a plant cell organelle called a plastid, though the two terms are sometimes used interchangeably. There are many other types of plastids, which carry out various functions. All chloroplasts in a plant are descended from undifferentiated proplastids found in the zygote, or fertilized egg. Proplastids are commonly found in an adult plant's apical meristems."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cyanobacteria",
        "situacao": "ok",
        "texto": "O filo Cyanobacteria (cianobactérias), ou divisão Cyanophyta (cianófitas), é um grupo de bactérias que obtêm energia por fotossíntese. O nome \"cianobactéria\" vem de sua cor (do grego: κυανός (kyanós) = azul). São chamadas também de algas azuis ou algas verde-azuladas, embora alguns autores considerem estes nomes inadequados, uma vez que cianobactérias são procariontes, e algas deveriam ser apenas \n[…]\nacinetos, especializados na acumulação de substâncias de reserva (por exemplo, o amido cianobacteriano).\n[…]\nHistoricamente, as bactérias foram inicialmente classificadas como plantas que constituem a classe dos Schizomycetes, que juntamente com os Schizophyceae (algas azuis/verde-azuladas/cianobactérias) formaram o filo Schizophyta. Em seguida, no filo Monera no reino Protista por Haeckel em 1866, compreendendo Protogens, Protamaeba, Vampyrella, Protomonae e Vibrio, mas não Nostoc e outras cianobactérias, que foram classificados com as algas mais tarde reclassificadas como procariontes por Chatton.\n[…]\nA nomenclatura das cianobactérias está regida por dois códigos, o Código Internacional de Nomenclatura Bacteriana e o Código Internacional de Nomenclatura Botânica; esta duplicidade de nomenclatura causa uma grande confusão.\n[…]\nAs cianobactérias são um grupo muito heterogêneo, e sua classificação responde mais a critérios didáticos que sistemáticos. A taxonomia está atualmente em revisão. A classificação que segue, com nomenclatura botânica, é proposta por Cavalier-Smith em 2002:\n[…]\nDivisão Cyanobacteria\n[…]\nAs cianobactérias foram os principais produtores primários da biosfera durante mais ou menos 1.500 milhões de anos, e continuam sendo nos oceanos. A Terra continha pouco ou nenhum oxigênio naquela época. Alguns cientistas consideram que a atmosfera primitiva continha apenas 0,0001% de oxigênio. O mais importante é que através da fotossíntese elas encheram a atmosfera de oxigênio.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Brassica oleracea",
      "descricao": "Espécie de planta da qual o ser humano selecionou repolho, couve, brócolis, couve-flor e couve-de-bruxelas."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Do ponto de vista da biologia, o que repolho, couve, brócolis e couve-flor têm em comum?",
    "resposta": "São a mesma espécie",
    "fonte": [
      "https://en.wikipedia.org/wiki/Brassica_oleracea"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Brassica_oleracea",
        "situacao": "ok",
        "texto": "Brassica oleracea, also known as wild cabbage in its uncultivated form, is a plant of the family Brassicaceae.\n[…]\nWild Brassica oleracea is a tall biennial or perennial plant that forms a stout rosette of large leaves in its first year. The grayish-green leaves are fleshy and thick, helping the plant store water and nutrients in difficult environments. In its second year, a woody spike grows up to 1.5 metres (5 ft) tall, from which branch off stems with long clusters of four-petaled yellow flowers.\n[…]\nAccording to the triangle of U theory, B. oleracea is very closely related to five other species of the genus Brassica. A 2021 study suggests that Brassica cretica, native to the Eastern Mediterranean, particularly Greece and the Aegean Islands, was the closest living relative of cultivated B. oleracea, thus supporting the view that its cultivation originated in the Eastern Mediterranean region, with later admixture from other Brassica species.\n[…]\nBufe, B. (2005). \"The Molecular Basis of Individual Differences in Phenylthiocarbamide and Propylthiouracil Bitterness Perception\". Current Biology. 15 (4): 322–7. Bibcode:2005CBio...15..322B. doi:10.1016/j.cub.2005.01.047. PMC 1400547. PMID 15723792.\n[…]\nMennella, Vito; et al. (20 February 2005). \"Functionally Distinct Kinesin-13 Family Members Cooperate to Regulate Microtubule Dynamics during Interphase\". Nature Cell Biology. 7 (3): 235–45. doi:10.1038/ncb1222. PMID 15723056. S2CID 6501199.\n[…]\nPROTAbase on Brassica oleracea (Brussels sprouts)\n[…]\nPROTAbase on Brassica oleracea (cauliflower and broccoli)\n[…]\nVideo Overview of Brassica oleracea: from Untamed Science"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Couve",
        "situacao": "ok",
        "texto": "Couve é o nome vulgar, genérico, das diversas variedades cultivares da espécie Brassica oleracea L., (ou Brassica sylvestris (L.) Mill.) da família das Brassicaceae, a que também pertence o nabo e a mostarda. É uma planta muito utilizada como verdura na cozinha, para sopas (como a couve-galega para o caldo verde) e conservas (como o repolho para o chucrute), entre outros acompanhamentos, como a co\n[…]\nBrassica oleracea, Grupo Acephala - ou couves, propriamente ditas, com grandes semelhanças à espécie-tipo - como a couve-galega;\n[…]\nBrassica oleracea grupo Alboglabra - couve-chinesa-kairan, bróculos chineses ou Kai-lan;\n[…]\nBrassica oleracea, grupo Botrytis - couve-flor e brócolis romanesco;\n[…]\nBrassica oleracea, grupo Capitata - ou repolhos;\n[…]\nBrassica oleracea, grupo Capitata Rubra (Repolho-de-erfurte ou couve-roxa)\n[…]\nBrassica oleracea, grupo Costata - couve-portuguesa ou tronchuda.\n[…]\nBrassica oleracea, grupo Gemmifera - ou couve-de-bruxelas;\n[…]\nBrassica oleracea, grupo Gongylodes - ou couve-rábano, couve-nabo ou couve-naba;\n[…]\nBrassica oleracea, grupo Italica - brócolis ou bróculos;\n[…]\nBrassica oleracea, grupo Medullosa - couve-cavaleiro, couve-forrageira ou couve-repolho-branca;\n[…]\nSubgrupo Rubra - couve-repolho-vermelha ou couve-forrageira-vermelha;\n[…]\nBrassica oleracea, grupo Nanofimbriata - couve-frisada-anã;\n[…]\nBrassica oleracea, grupo Palmifolia - couve-palmeira;\n[…]\nSubgrupo Laciniato - também incluído nos grupos Viridis e Sabellica - ainda que pertença indubitavelmente à Brassica oleracea acephala;\n[…]\nBrassica oleracea, grupo Ramosa- outro tipo de couve-cavaleiro;\n[…]\nBrassica oleracea, grupo Sabauda - couve-lombarda, lombardo, couve-crespa, couve-de-sabóia ou couve-de-milão;\n[…]\nBrassica oleracea, grupo Sabellica - couve-frisada ( bem como a couve-galega, ambas pertencentes também ao tipo Acephala, nem sempre consideradas como grupo, mas como \"variante\");\n[…]\nBrassica oleraceae, grupo Viridis - couve-forrageira;",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Thomas Henry Huxley",
      "descricao": "Biólogo inglês (1825–1895), defensor ardoroso da teoria de Darwin."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O biólogo Thomas Huxley, apelidado de buldogue de Darwin, tinha que parentesco com Aldous Huxley, autor de Admirável Mundo Novo?",
    "resposta": "Avô",
    "fonte": [
      "https://en.wikipedia.org/wiki/Thomas_Henry_Huxley"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Thomas_Henry_Huxley",
        "situacao": "ok",
        "texto": "Thomas Henry Huxley (4 May 1825 – 29 June 1895) was an English biologist and anthropologist who specialised in comparative anatomy. He has become known as \"Darwin's Bulldog\" for his advocacy of Charles Darwin's theory of evolution.\n[…]\nThomas Henry Huxley was born in Ealing, then a village in Middlesex. He was the second youngest of eight children of George Huxley and Rachel Withers. His parents were members of the Church of England, but he sympathized with nonconformists. Like some other British scientists of the nineteenth century such as Alfred Russel Wallace, Huxley was brought up in a literate middle-class family which had fallen on hard times.\n[…]\nThis largely morphological program of comparative anatomy remained at the core of most biological education for a hundred years until the advent of cell and molecular biology and interest in evolutionary ecology forced a fundamental rethink. It is an interesting fact that the methods of the field naturalists who led the way in developing the theory of evolution (Darwin, Alfred Russel Wallace, Fritz Müller, Henry Bates) were scarcely represented at all in Huxley's program.\n[…]\nIrvine, William. Thomas Henry Huxley. Longmans, London 1960.\n[…]\nHuxley, Thomas Henry. Autobiography and Selected Essays. The Riverside Press Houghton Mifflin Company, Cambridge 1909.\n[…]\nStephen, Leslie (1898). \"Thomas Henry Huxley\" . Studies of a Biographer. Vol. 3. London: Duckworth & Co. pp. 188–219.\n[…]\nHuxley, Thomas Henry (1825–1895) National Library of Australia, Trove, People and Organisation record for Thomas Huxley\n[…]\nWorks by Thomas Henry Huxley at Project Gutenberg\n[…]\nWorks by or about Thomas Henry Huxley at the Internet Archive\n[…]\nWorks by Thomas Henry Huxley at LibriVox (public domain audiobooks)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Thomas_Henry_Huxley",
        "situacao": "ok",
        "texto": "Thomas Henry Huxley (Ealing, Middlesex, 4 de maio de 1825 — Eastbourne, Sussex, 29 de junho de 1895) foi um biólogo e filósofo britânico que ficou conhecido como \"O Buldogue de Darwin\", por ser o principal defensor público da teoria da evolução de Charles Darwin e um dos principais cientistas ingleses do século XIX. É ainda reconhecido por ser o criador do termo \"agnóstico\" para representar um pos\n[…]\nComo Darwin nunca foi um grande orador e preferiu morar no interior da Inglaterra, longe dos debates e repercussões da sua teoria, coube a Thomas Huxley o papel de principal defensor da Evolução. Orador perspicaz e feroz, além de possuir um humor cínico, traços que lhe valeram o apelido. Como disse ao estudante Henry Fairfield Osborn, \"Você sabe que eu tenho que tomar conta dele - de fato, eu sempre tenho sido o buldogue de Darwin\".\n[…]\nAnos depois, disse ao professor Marsh: \"Huxley é o rei dos homens\", que contou ao próprio Huxley, que respondeu: \"Agora você pode entender por que todos nós que conhecemos Darwin temos grande afeição por ele, e quando seus inimigos insultam esse nobre homem, por que é meu direito ser tão duro em sua defesa\".\n[…]\nEm 1870, Huxley saiu do mundo das pesquisas científicas para assumir compromissos políticos. Foi Secretário Executivo da Royal Society de 1871 a 1880, e Presidente desta sociedade entre 1881 e 1885.\n[…]\nHuxley é o patriarca de uma distinta família de acadêmicos britânicos, incluindo seus netos Aldous Huxley (o escritor), Sir Julian Huxley (o primeiro diretor da UNESCO e fundador do World Wildlife Fund), e Sir Andrew Huxley (o fisiologista e ganhador do Prêmio Nobel). Foi laureado com a medalha Wollaston concedida pela Sociedade Geológica de Londres, em 1876.\n[…]\nLife and Letters of Thomas Henry Huxley, Vol. 1, Vol. 2, Vol. 3\n[…]\n«The Huxley File» (em inglês). na Clark University\n[…]\nObras de Thomas Henry Huxley na Open Library\n[…]\nAgnosticismo. Livro de Thomas Huxley.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Cromossomo 2 humano",
      "descricao": "Segundo maior cromossomo humano, formado pela fusão de dois cromossomos que continuam separados nos outros grandes primatas."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Chimpanzés e gorilas têm quarenta e oito cromossomos, e o ser humano tem quarenta e seis. O que explica essa diferença?",
    "resposta": "Dois cromossomos se fundiram em um",
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
    "indice": 38,
    "ancora": {
      "nome": "Zangão",
      "descricao": "Macho das abelhas sociais, cuja função é fecundar a rainha."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Por que, numa colmeia, o zangão tem mãe, mas não tem pai?",
    "resposta": "Nasce de óvulo não fecundado",
    "fonte": [
      "https://en.wikipedia.org/wiki/Drone_(bee)",
      "https://en.wikipedia.org/wiki/Haplodiploidy"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Drone_(bee)",
        "situacao": "ok",
        "texto": "A drone is a male honey bee. Unlike the female worker bee, a drone has no stinger. It does not gather nectar or pollen and cannot feed without assistance from worker bees. Its only role is to mate with a maiden queen in nuptial flight, and often dies after doing so.\n[…]\nDrones fly in abundance in the early afternoon and are known to congregate in drone congregation areas a good distance away from the hive.\n[…]\nA single drone visits multiple congregation areas during his lifetime, often taking multiple trips per afternoon. A drone's mating flight averages 20–25 minutes, before he must return to the colony to refuel with honey. While at the site, the drones fly around passively, waiting for the arrival of a virgin. When the virgin queen arrives to the congregation area, the drones locate her by visual and olfactory cues.\n[…]\nAt this point, it is a race to mate with the virgin queen, to be genetically represented in the newly founded colony. The swarming drones, as they actively follow the queen, reportedly resemble a \"drone comet\", dissolving and reforming as the drones chase the virgin queen. Drones greatly outnumber the quantity of virgin queens produced per season, so even with multiple mating by the queen, very few drones mate successfully (estimated at less than one in 1,000).\n[…]\nVarroa destructor, a parasitic mite, propagates within the brood cell of bees. The Varroa mite prefers drone brood as it guarantees a longer development period, which is important for its own propagation success. The number of Varroa mites can be kept in check by removing the capped drone brood and either freezing the brood comb or heating it.\n[…]\nClose-up Video of a Drone bee\n[…]\nDrone"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Haplodiploidy",
        "situacao": "ok",
        "texto": "Haplodiploidy is a sex-determination system in which males develop from unfertilized eggs and are haploid with one set of chromosomes, and females develop from fertilized eggs and are diploid with two sets of chromosomes.\n[…]\nSex determination in honey bees is initially due to a single locus, the complementary sex determiner (csd) gene. Bee embryos that are heterozygous for the csd gene develop into females, while those that are hemizygous (only one copy of csd is present) or homozygous for the csd gene develop into males. Individuals homozygous at this gene locus are the rare instances of diploid males. There are rare instances of diploid drone larvae.\n[…]\nBatches of worker bees are short-lived and are constantly being replaced by the next batch, so this kin selection could be a strategy to ensure the proper working of the hive. However, since queens usually mate with a dozen drones or more, not all workers are full sisters. In many other species of bees, including bumblebees, the queen mates with only one drone."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Zang%C3%A3o",
        "situacao": "ok",
        "texto": "O zangão, zângão ou abelhão é o macho das diversas espécies de abelhas sociais, especialmente da abelha-europeia. Caracteriza-se pelo porte superior às obreiras e pela ausência de ferrão. Alheio às atividades de manutenção da colmeia, não produz mel porque não possui os órgãos essenciais para tais atividades. Sua única função é a de fecundar a abelha rainha, ação que acontece durante o voo nupcial\n[…]\nO zangão nasce de ovos não fecundados: este fenômeno, que é um exemplo de partenogênese, consiste no desenvolvimento de um embrião sem necessidade de fertilização; a rainha, neste caso, não utiliza o sémen do macho (zangão) e põe ovos que contêm apenas o seu material genético. O zangão não possui órgãos de defesa nem de trabalho. Dotado de excepcional visão e olfato, é capaz de detectar rainhas virgens até dez quilômetros de distância.\n[…]\nA árvore genealógica dos zangões é um exemplo claro da Sequência de Fibonacci. Devido ao fato do zangão não possuir pai, apenas mãe, na primeira geração há um membro (o zangão), uma geração antes há um membro (a mãe), duas gerações atrás há dois membros (a mãe e o pai da mãe), tres gerações atrás há tres membros (a mãe do avô e o pai e a mãe da avó), quatro gerações atrás há cinco membros, cinco gerações atrás há oito membros.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "August Weismann",
      "descricao": "Biólogo alemão (1834–1914) que combateu a herança de características adquiridas e propôs a teoria do plasma germinativo."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Para testar a herança de características adquiridas, August Weismann cortou o rabo de camundongos por várias gerações. O que aconteceu com os filhotes?",
    "resposta": "Nasciam com rabo normal",
    "fonte": [
      "https://en.wikipedia.org/wiki/August_Weismann"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/August_Weismann",
        "situacao": "ok",
        "texto": "August Friedrich Leopold Weismann (German: [ˈvaɪsman]; 17 January 1834 – 5 November 1914) was a German evolutionary biologist. Fellow German Ernst Mayr ranked him as the second most notable evolutionary theorist of the 19th century, after Charles Darwin. Weismann became the Director of the Zoological Institute and the first Professor of Zoology at Freiburg.\n[…]\nWeismann used this theory to explain Lamark's original examples for \"use and disuse\", such as the tendency to have degenerate wings and stronger feet in domesticated waterfowl.\n[…]\nErnst Mayr judged Weismann to be the most important evolutionary thinker between Darwin and the evolutionary synthesis around 1930–1940, and \"one of the great biologists of all time\".\n[…]\nChurchill, Frederick B. (1 March 1968). \"August Weismann and a break from tradition\". Journal of the History of Biology. 1 (1): 91–112. doi:10.1007/BF00149777. S2CID 84694824.\n[…]\nChurchill, Frederick B. (1 December 1970). \"Hertwig, Weismann, and the Meaning of Reduction Division circa 1890\". Isis. 61 (4): 429–457. doi:10.1086/350680. PMID 4942056. S2CID 46321527.\n[…]\nLöther, Rolf 1990. Wegbereiter der Genetik: Gregor Johann Mendel und August Weismann. Verlag Harri Deutsch, Frankfurt am Main. ISBN 3-8171-1130-4\n[…]\nRisler H. 1968. August Weismann 1834–1914. In: Berichte der Naturforschenden Gesellschaft Freiburg im Breisgau. 77–93\n[…]\nRisler H. 1985. August Weismanns Leben und Wirken nach Dokumenten aus seinem Nachlass. In: Freiburger Universitätsblätter Heft 87/88, Freiburg. 23–42\n[…]\nRomanes, George John 1893. An Examination of Weismannism. London, Longmans.\n[…]\nMedia related to August Weismann at Wikimedia Commons\n[…]\nWorks by or about August Weismann at Wikisource\n[…]\nWorks by August Weismann at Project Gutenberg\n[…]\nWorks by or about August Weismann at the Internet Archive\n[…]\nNewspaper clippings about August Weismann in the 20th Century Press Archives of the ZBW"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/August_Weismann",
        "situacao": "ok",
        "texto": "Friedrich Leopold August Weismann (Frankfurt am Main, 17 de janeiro de 1834 — Freiburg im Breisgau, 5 de novembro de 1914) foi um biólogo alemão. Foi classificado por Ernst Mayr como o segundo teórico evolucionista mais notável do século XIX depois de Charles Darwin. Weismann tornou-se o Diretor do Instituto Zoológico e o primeiro professor de zoologia na Freiburg.\n[…]\nSeu filho Julius Weismann (1879-1950) foi um compositor.\n[…]\nPrimeira rejeição da herança de traços adquiridos de Weismann foi em uma palestra em 1883, intitulado \"Sobre herança\" ( \"Über die Vererbung\"). Novamente, como em seu tratado sobre a criação versus evolução, ele tenta explicar exemplos individuais com qualquer teoria. Por exemplo, a existência de castas não reprodutivas das formigas, como os trabalhadores e soldados, não pode ser explicada pela herança de caracteres adquiridos. Teoria germoplasma, por outro lado, faz isso sem esforço.\n[…]\nA ideia de que as células germinativas contêm informações que passam a cada geração sem serem afetadas pela experiência e independentemente das células do corpo, passou a ser conhecida como a barreira Weismann, e é frequentemente citada como colocando um ponto final na teoria de Lamarck e da herança de características adquiridas.\n[…]\nWeismann conduziu o experimento de remover a cauda de 68 ratos brancos ao longo de 5 gerações, relatando então que nenhum rato nasceu sem uma cauda ou mesmo com uma cauda mais curta.\n[…]\nWeismann foi condecorado com a Medalha da sociedade Lineana Darwin-Wallace, em Londres, em 1908.\n[…]\nTexto inicialmente baseado na tradução dos artigos «August_Weismann» na Wikipédia em castelhano e «August_Weismann» na Wikipédia em inglês.\n[…]\nRegistro de membro de Prof. Dr. August Weismann (com imagem) na Academia de Ciências da Baviera.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Arroz dourado",
      "descricao": "Variedade de arroz geneticamente modificada para produzir betacaroteno nos grãos."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "O arroz dourado foi modificado geneticamente para combater, em países pobres, a falta de qual vitamina?",
    "resposta": "Vitamina A",
    "fonte": [
      "https://en.wikipedia.org/wiki/Golden_rice"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Golden_rice",
        "situacao": "ok",
        "texto": "Golden rice is a variety of rice (Oryza sativa) produced through genetic engineering to biosynthesize beta-carotene, a precursor of vitamin A, in the edible parts of the rice. It is intended to produce a fortified food to be grown and consumed in areas with a shortage of dietary vitamin A. Genetically modified golden rice can produce up to 23 times as much beta-carotene as the original golden rice\n[…]\nIn 2019, golden rice was approved for use as human food and animal feed or for processing in the Philippines. On 21 July 2021, the Philippines became the first country to officially issue the biosafety permit for commercially propagating vitamin A-infused golden rice. The approval came as the first commercial propagation authorisation of genetically engineered rice in South and Southeast Asia.\n[…]\nAs many children in VAD-affected countries rely on rice as a staple food, genetic modification to make rice produce the vitamin A precursor beta-carotene was seen as a simple and less expensive alternative to ongoing vitamin supplements or an increase in the consumption of green vegetables or animal products.\n[…]\nIn 2008, WHO malnutrition expert Francesco Branca cited the lack of real-world studies and uncertainty about how many people will use golden rice, concluding \"giving out supplements, fortifying existing foods with vitamin A, and teaching people to grow carrots or certain leafy vegetables are, for now, more promising ways to fight the problem\".\n[…]\nIn December 2021, an opinion piece in Proceedings of the National Academy of Sciences of the United States of America called on regulators to \"allow Golden Rice to save lives\", which the authors say has been delayed due to \"fear and false accusations\", leading to estimated 266,000 lives lost per year due to vitamin A deficiency.\n[…]\nArtificial rice -  grain product made to resemble rice, often made from broken rice and vitamin-fortified."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Arroz%23Arroz_dourado",
        "situacao": "ok",
        "texto": "O arroz  é uma planta da família das gramíneas e gênero Oryza, que alimenta mais de metade da população humana do mundo. É a terceira maior cultura cerealífera do mundo, apenas ultrapassada pelas de milho e trigo. É rico em hidratos de carbono. A maior parte do arroz provém da espécie Oryza sativa (por vezes chamado arroz asiático), mas o chamado arroz africano provém da espécie Oryza glaberrima.\n[…]\nPara poder ser cultivado com sucesso, o arroz necessita de água em abundância, para manter a temperatura ambiente dentro de intervalos adequados, e, nos sistemas tradicionais, de mão de obra intensiva. Desenvolve-se bem mesmo em terrenos muito inclinados [carece de fontes]? e é costume, nos países do sudeste asiático, encontrarem-se socalcos onde é cultivado. Em qualquer dos casos, a água mantém-se em constante movimento, embora circule a velocidade muito reduzida.\n[…]\nA produção mundial de arroz concentra-se, quase exclusivamente, na Ásia, com cerca de 90 % da produção nesta área, essencialmente na China e na Índia.\n[…]\nPortugal é o maior consumidor de arroz da Europa com valores superiores a 15 kg/capita/ano.\n[…]\nO arroz dourado é uma variedade do Oryza sativa produzida por engenharia genética para que biossintetizasse o betacaroteno.\n[…]\nMas os seus grãos rosados, longos e estriados, contêm menos amido e mais vitamina B2 e colina que outras variedades.\n[…]\nA sequência genética da Zostera marina revela ideias inovadoras para as perdas e os ganhos envolvidos na realização das adaptações estruturais, fisiológicas e genômicas necessárias para plantas com flores terrestres mudarem o seu estilo de vida para a vida marinha, indiscutivelmente a mudança de habitat mais severa realizada por algumas plantas com flores Pesquisadores, usando tecnologia CRISPR/Cas, estão tentando transferir os genes responsáveis pela tolerância ao sal para outras plantas, em especial, o arroz.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Ovelha Dolly",
      "descricao": "Ovelha nascida em 1996 na Escócia, primeiro mamífero clonado a partir de uma célula adulta."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "A ovelha Dolly foi o único cordeiro a sobreviver entre quantas tentativas de clonagem?",
    "resposta": "277",
    "distratores": [
      "12",
      "50",
      "1.000"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Dolly_(sheep)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Dolly_(sheep)",
        "situacao": "ok",
        "texto": "Dolly (5 July 1996 – 14 February 2003) was a female Finn-Dorset sheep and the first mammal that was cloned from an adult somatic cell. She was cloned by associates of the Roslin Institute in Scotland, using the process of nuclear transfer from a cell taken from a mammary gland (somatic cell nuclear transfer). Her cloning proved that a cloned organism could be produced from a mature cell from a spe\n[…]\nThe reprogramming process that cells need to go through during cloning is not perfect and embryos produced by nuclear transfer often show abnormal development. Making cloned mammals was highly inefficient in 1996; Dolly was the only lamb that survived to adulthood from 277 attempts. Wilmut, who led the team that created Dolly, announced in 2007 that the nuclear transfer technique may never be sufficiently efficient for use in humans.\n[…]\nThe Brazilian telenovela O Clone (2001) drew inspiration for its central plot from the cloning of Dolly, exploring the subject of human cloning through the character played by Murilo Benício, the story's protagonist. The production is one of the major successes of its creator, Glória Perez.\n[…]\nIn 2003 the Belgian artist Dominique Goblet published a short comic strip about Dolly with the title: \"2004 Apparition de Dolly dans la campagne anglaise\".\n[…]\nIn re Roslin Institute (Edinburgh) – US court decision that determined that Dolly could not be patented\n[…]\nDolly the Sheep at the National Museum of Scotland, Edinburgh\n[…]\nCloning Dolly the Sheep Dolly the Sheep and the importance of animal research\n[…]\nAnimal cloning and Dolly\n[…]\nAntiques Roadshow, Series 45, Brodie Castle 3, Dolly the Sheep. BBC (3' video clip). 6 April 2023. Episode where several items appertaining to Dolly, including wool from a shearing and scientific instruments, were appraised."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ovelha_Dolly",
        "situacao": "ok",
        "texto": "A ovelha Dolly (Easter Bush, 5 de julho de 1996 — Easter Bush, 14 de fevereiro de 2003) foi o primeiro mamífero a ser clonado com sucesso a partir de uma célula somática adulta.\n[…]\nDepois que a clonagem foi demonstrada com sucesso através da produção de Dolly, muitos outros grandes mamíferos foram clonados, incluindo porcos, veados, cavalos e touros. A tentativa de clonar argali (ovelha da montanha) não produziu embriões viáveis. A tentativa de clonar um touro banteng teve mais sucesso, assim como as tentativas de clonar o muflão (uma forma de ovelha selvagem), ambas resultando em descendentes viáveis.\n[…]\nO processo de reprogramação pelo qual as células precisam passar durante a clonagem não é perfeito e os embriões produzidos por transferência nuclear frequentemente apresentam desenvolvimento anormal. Fazer mamíferos clonados foi altamente ineficiente - em 1996, Dolly foi a única ovelha que sobreviveu à idade adulta de 277 tentativas.\n[…]\nA primeira clonagem bem-sucedida de uma espécie de primata usando o mesmo método para produzir Dolly foi relatada em janeiro de 2018. Dois clones idênticos de um macaco, Zhong Zhong e Hua Hua, foram criados por pesquisadores na China e nasceram no final de 2017.\n[…]\nEm janeiro de 2019, cientistas na China relataram a criação de cinco macacos clonados idênticos com edição de genes, usando a mesma técnica de clonagem que foi usada com Zhong Zhong e Hua Hua - os primeiros macacos clonados - e a ovelha Dolly, e a mesma técnica gene-edição CRISPR-Cas9 supostamente usada por He Jiankui na criação dos primeiros bebês humanos modificados por genes, Lulu e Nana. Os clones de macacos foram feitos para estudar várias doenças médicas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Caenorhabditis elegans",
      "descricao": "Verme nematoide microscópico de vida livre, usado como organismo-modelo em biologia."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "No verme de laboratório Caenorhabditis elegans, todo adulto tem praticamente o mesmo número de células no corpo. Aproximadamente quantas?",
    "resposta": "Cerca de mil",
    "distratores": [
      "Cerca de cem",
      "Cerca de cem mil",
      "Cerca de um milhão"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Caenorhabditis_elegans"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Caenorhabditis_elegans",
        "situacao": "ok",
        "texto": "Caenorhabditis elegans () is a free-living transparent nematode about 1 mm in length that lives in temperate soil environments. It is the type species of its genus. The name is a blend of the Greek caeno- 'recent', rhabditis 'rod-like', and Latin elegans 'elegant'. In 1900, Maupas initially named it Rhabditis elegans. Osche placed it in the subgenus Caenorhabditis in 1952, and in 1955, Dougherty r\n[…]\nelegans can survive on a diet of a variety of bacteria, but its wild ecology is largely unknown. Most laboratory strains were taken from artificial environments such as gardens and compost piles. More recently, C. elegans has been found to thrive in other kinds of organic matter, particularly rotting fruit.\n[…]\nThe Orsay virus is a virus that affects C. elegans, as well as the Caenorhabditis elegans Cer1 virus and the Caenorhabditis elegans Cer13 virus.\n[…]\nWild isolates of Caenorhabditis elegans are regularly found with infections by Microsporidia fungi. One such species, Nematocida parisii, replicates in the intestines of C. elegans.\n[…]\nEnvironmental RNAi uptake is much worse in other species of worms in the genus Caenorhabditis. Although injecting RNA into the body cavity of the animal induces gene silencing in most species, only C. elegans and a few other distantly related nematodes can take up RNA from the bacteria they eat for RNAi. This ability has been mapped down to a single gene, sid-2, which, when inserted as a transgene in other species, allows them to take up RNA for RNAi as C. elegans does.\n[…]\nC. elegans II – a free online textbook.\n[…]\nWormWeb Neural Network – an online tool for visualizing and navigating the connectome of C. elegans\n[…]\nC. elegans movies – a visual introduction to C. elegans\n[…]\nCaenorhabditis elegans at eppo.int (EPPO code CAEOEL)\n[…]\nCylinder, Drew (2022). Using C. elegans to study anesthesia. Visualise Your Thesis. doi:10.6084/m9.figshare.20963590.v1."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Caenorhabditis_elegans",
        "situacao": "ok",
        "texto": "Caenorhabditis elegans é uma espécie de nematódeo da família Rhabditidae que mede cerca de 1 milímetro de comprimento, e vive em ambientes temperados. Tornou-se um importante modelo para o estudo da biologia, especialmente a biologia do desenvolvimento, desde a década de 1970 .\n[…]\nC. elegans foi o primeiro animal multicelular a ter seu genoma sequenciado. É um excelente organismo modelo para estudos de biologia do desenvolvimento (embriologia), pois é pequeno (aproximadamente 1 mm), de fácil criação, com ciclo de vida curto (de ovo a adulto em aproximadamente quatro dias), apresenta poucas células e sua manipulação genética é relativamente simples .\n[…]\nO número de núcleos somáticos se torna fixo ao final da fase larval e o crescimento ocorre pelo aumento das células (evento chamado de eutelia), sendo que o hermafrodita apresenta 959 células e o macho 1031 .\n[…]\nO segundo Prêmio Nobel de Fisiologia e Medicina diretamente ligado ao C. elegans foi o de 2006, atribuído aos cientistas Andrew Fire e Craig Mello. Eles descobriram os mecanismos de silenciamento genético por RNA de interferência (RNAi) nesses animais. No caso, foi observado que a injeção de RNAi poderia alterar a expressão gênica das células do verme, alternado seu fenótipo .\n[…]\nO genoma completo de C. elegans foi o primeiro de um organismo multicelular a ser sequenciado . Uma característica muito importante decorrente desse sequenciamento foi a descoberta de muitos genes homólogos a genes de mamíferos, inclusive genes humanos, com os quais possuem cerca de 35% de homologia . Todas essas informações estão contidas na base de dados online Wormbase, que compila todos os achados recentes relacionados ao genoma deste organismo modelo .\n[…]\nC. elegans Movies",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Cão doméstico",
      "descricao": "Canídeo domesticado pelo ser humano, classificado como Canis familiaris ou Canis lupus familiaris."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "O ser humano tem quarenta e seis cromossomos em cada célula. E o cão doméstico, quantos tem?",
    "resposta": "78",
    "distratores": [
      "38",
      "46",
      "64"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/List_of_organisms_by_chromosome_count"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/List_of_organisms_by_chromosome_count",
        "situacao": "ok",
        "texto": "The list of organisms by chromosome count describes the numbers of chromosomes in the cells of various plants, animals, protists, and other living organisms. This number, along with the visual appearance of the chromosome, is known as the karyotype, and can be found by looking at the chromosomes through a microscope. Attention is paid to their length, the position of the centromeres, banding patte"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Drosophila melanogaster",
      "descricao": "Mosca-da-fruta usada como organismo-modelo em genética."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "A mosca-da-fruta, uma das campeãs dos laboratórios de genética, tem quantos pares de cromossomos?",
    "resposta": "Quatro",
    "distratores": [
      "Dois",
      "Oito",
      "Vinte e três"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Drosophila_melanogaster"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Drosophila_melanogaster",
        "situacao": "ok",
        "texto": "Drosophila melanogaster is a species of fly (an insect of the order Diptera) in the family Drosophilidae. The species is often referred to as the fruit fly or lesser fruit fly, or less commonly the \"vinegar fly\", \"pomace fly\", or \"banana fly\". D. melanogaster is attracted to rotting fruit and fermenting beverages and is often found in orchards, kitchens, and pubs.\n[…]\nDrosophila melanogaster is typically used in research owing to its rapid life cycle, relatively simple genetics with only four pairs of chromosomes, and large number of offspring per generation. It was originally an African species, with all non-African lineages having a common origin. Its geographic range includes all continents, including islands. D. melanogaster is a common pest in homes, restaurants, and other places where food is served.\n[…]\nD. melanogaster had historically been used in laboratories to study genetics and patterns of inheritance. However, D. melanogaster also has importance in environmental mutagenesis research, allowing researchers to study the effects of specific environmental mutagens.\n[…]\nw: white – Drosophila melanogaster wild type typically expresses a brick-red eye color. The white eye mutation in fruit flies is caused due to the absence of two pigments associated with red and brown eye colors; peridines (red) and ommochromes (brown). In January 1910, Thomas Hunt Morgan first discovered the white gene and denoted it as w. The discovery of the white-eye mutation by Morgan brought about the beginnings of genetic experimentation and analysis of Drosophila melanogaster.\n[…]\n\"A quick and simple introduction to Drosophila melanogaster\". Drosophila Virtual Library.\n[…]\n\"Bloomington Drosophila Stock Center\" – collects, maintains and distributes Drosophila melanogaster strains for research\n[…]\n\"NCBI Map Viewer – Drosophila melanogaster\". Archived from the original on June 5, 2003."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Drosophila_melanogaster",
        "situacao": "ok",
        "texto": "Drosophila melanogaster é uma espécie de mosca (ordem taxonômica Diptera) na família Drosophilidae. A espécie também é conhecida como mosca-das-frutas (mosca-da-fruta em Portugal) ou mosca-do-vinagre.\n[…]\nDesde que Charles W. Woodworth propôs o uso desta mosca como organismo modelo para realizar estudos científicos, a D. melanogaster é amplamente utilizada na investigação biológica em estudos de genética, fisiologia, patogênese microbiana e evolução. A espécie é normalmente utilizada em pesquisas devido ao seu ciclo de vida rápido, genética relativamente simples com apenas quatro pares de cromossomos e grande número de descendentes por geração.\n[…]\nExistem muitos motivos pelos quais a mosca da fruta é uma escolha popular como organismo modelo:\n[…]\nPossui apenas quatro pares de cromossomos - três autossomos e um par de cromossomos sexuais.\n[…]\nO genoma de D. melanogaster (sequenciado em 2000) contém quatro pares de cromossomos - um par X/Y e três autossomos rotulados 2, 3 e 4. O quarto cromossomo é tão minúsculo, que muitas vezes é ignorado, com exceção de seu importante gene eyeless (sem olhos). O genoma sequenciado de D. melanogaster possui 139,5 milhões de pares de bases, e contém cerca de 15.682 genes de acordo com a versão 73 do Ensemble.\n[…]\nCada folículo ovariano de Drosophila é constituído por 16 células germinativas conectadas por canais em anel. Duas dessas células adquirem quatro canais de comunicação e são denominadas de pró-ovócitos, e por competição somente uma terminará a meiose I e será o futuro ovócito. As demais 15 células se tornarão nutridoras poliploides, que se especializam em transcrever RNAs mensageiros importantes para o futuro desenvolvimento embrionário.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Quadro de Punnett",
      "descricao": "Diagrama criado pelo geneticista Reginald Punnett para prever as combinações genéticas dos filhos de um cruzamento."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Num quadro de Punnett, dois pais carregam o mesmo gene recessivo sem manifestá-lo. Que fração dos filhos tende a manifestar o traço?",
    "resposta": "Um quarto",
    "distratores": [
      "Metade",
      "Três quartos",
      "Um oitavo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Punnett_square"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Punnett_square",
        "situacao": "ok",
        "texto": "The Punnett square is a square diagram that is used to predict the genotypes of a particular cross or breeding experiment. It is named after Reginald C. Punnett, who devised the approach in 1905. The diagram is used by biologists to determine the probability of an offspring having a particular genotype. The Punnett square is a tabular summary of possible combinations of maternal alleles with pater\n[…]\nThe Punnett square is a visual representation of Mendelian inheritance, a fundamental concept in genetics discovered by Gregor Mendel. For multiple traits, using the \"forked-line method\" is typically much easier than the Punnett square.\n[…]\nThe way in which the B and b alleles interact with each other to affect the appearance of the offspring depends on how the gene products (proteins) interact (see Mendelian inheritance). This can include lethal effects and epistasis (where one allele masks another, regardless of dominant or recessive status).\n[…]\nMore complicated crosses can be made by looking at two or more genes. The Punnett square works, however, only if the genes are independent of each other, which means that having a particular allele of gene \"A\" does not alter the probability of possessing an allele of gene \"B\". This is equivalent to stating that the genes are not linked, so that the two genes do not tend to sort together during meiosis.\n[…]\nThe forked-line method (also known as the tree method and the branching system) can also solve dihybrid and multi-hybrid crosses. A problem is converted to a series of monohybrid crosses, and the results are combined in a tree. However, a tree produces the same result as a Punnett square in less time and with more clarity. The example below assesses another double-heterozygote cross using RrYy x RrYy.\n[…]\nOnline Punnett Square Calculator\n[…]\nOnline Punnett Square Calculator, monohybrid and dihybrid, autosomal and sex-linked"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Quadro_de_Punnett",
        "situacao": "ok",
        "texto": "Um quadro de Punnett ou quadrado de Punnett ou xadrez mendeliano, é um diagrama que permite determinar a herança genética resultada de um cruzamento entre pais. Este diagrama tem o nome do cientista Reginald Punnett que estabeleceu estes princípios.\n[…]\nEste quadro pode ser usado também para qualquer população, permitindo ilustrar o cálculo da frequência esperada dos diversos genótipos possíveis, na hipótese que diz respeito à lei de Hardy-Weinberg, considerando as frequências alelas a, b, c,..., n dos alelos A, B, C,..., N de um gene com cromossomos homólogos, por exemplo.\n[…]\nEste quadro se aplica também para os genes portados pelo cromossomo X nas mulheres XX, mas não pode ser aplicado aos homens que são XY, e a frequência genotípica ligada aos cromossomos sexuais é estritamente idêntica à frequência alela.\n[…]\nPor exemplo, para o daltonismo, o gene mutante está presente no cromossomo X a uma frequência de 0,07 e o gene selvagem dele a 0,93, observamos 7% dos homens afetados, e apenas 5 mulheres afetadas em 1000, seria os 0,70*0,07 homozigotos, os 2*0,07*0,93 heterozigotos não sendo daltônicos, o gene normal compondo o gene afetado.\n[…]\nNa verdade menos mulheres são afetadas, pois este raciocínio é simplificado, e não leva em consideração o fato que existe diversos tipos de daltonismo ligados ao cromossomo X (pronatopia, deuteranopia, etc.) a presença de um gene de pronatopia pode compensar um gene de deuteranopia e inversamente, nas mulheres..., independentemente de uma grande variabilidade individual. E também há a pleiotropia e o heredograma.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Ensaio sobre o Princípio da População",
      "descricao": "Livro de 1798 que argumenta que a população tende a crescer mais depressa que a produção de alimentos."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Darwin e Wallace chegaram à ideia da seleção natural depois de ler o mesmo ensaio sobre o crescimento da população humana. Quem o escreveu?",
    "resposta": "Thomas Malthus",
    "fonte": [
      "https://en.wikipedia.org/wiki/An_Essay_on_the_Principle_of_Population"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/An_Essay_on_the_Principle_of_Population",
        "situacao": "ok",
        "texto": "The book An Essay on the Principle of Population was first published anonymously in 1798, but the author was soon identified as Thomas Robert Malthus. The book warned of future difficulties, on an interpretation of the population increasing in geometric progression (so as to double every 25 years) while food production increased in an arithmetic progression, which would leave a difference resultin\n[…]\nMalthus himself claimed:\n[…]\nMalthus died in 1834 leaving this as his final word on the Principle of Population.\n[…]\nWilliam Godwin criticized Malthus's criticisms of his own arguments in his book Of Population (1820). Other theoretical and political critiques of Malthus and Malthusian thinking emerged soon after the publication of the first Essay on Population, most notably in the work of Robert Owen, of the essayist William Hazlitt (1807) and of the economist Nassau William Senior, and moralist William Cobbett. True Law of Population (1845) was by politician Thomas Doubleday, an adherent of Cobbett's views.\n[…]\nMalthus, An Essay On The Principle Of Population (1798 1st edition, plus excerpts 1803 2nd edition), Introduction by Philip Appleman, and assorted commentary on Malthus edited by Appleman. Norton Critical Editions. ISBN 0-393-09202-X.\n[…]\nMalthus, Thomas Robert (1798). An Essay on the Principle of Population as it affects the future improvement of society. With remarks on the speculations of Mr. Godwin, M. Condorcet and other writers.\n[…]\nMalthus, Thomas Robert (1803). An Essay on the Principle of Population or, a View of its Past and Present Effects on Human Happiness; with an enquiry into our Prospects respecting the Future Removal or Mitigation of the Evils which it occasions (second ed.).\n[…]\nDarwin Online, Malthus, Thomas. 1826. An essay on the principle of population 6th edition. London: John Murray. Volume 1, Volume 2, free online access, full searchable text plus pdf views of each page."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/An_Essay_on_the_Principle_of_Population",
        "situacao": "ok",
        "texto": "O livro An Essay on the Principle of Population foi primeiramente publicado sob anonimato em 1798, pelo editor J. Johnson (London).\n[…]\nO autor foi tempo depois identificado como sendo Thomas Robert Malthus.\n[…]\nNão foi o primeiro livro sobre a temática da população, mas tornou-se numa das obras mais influentes da sua época. A sua 6ª edição foi independentemente citada como uma influência chave em Charles Darwin e Alfred Russel Wallace, no desenvolvimento da teoria da selecção natural.\n[…]\nUma parte principal do livro foi dedicada ao que é conhecido como Iron Law of Population.[carece de fontes]? Esta teoria sugeria que taxas de crescimento populacional contribuiriam para um aumento de oferta de trabalho que iria de maneira inevitável baixar os salários. Em essência, Malthus temia que o crescimento continuado da população iriam levar à pobreza.\n[…]\nUm dos impactos imediatos do livro de Malthus foi o de acender o debate sobre o tamanho da população na Grã-Bretanha e ter levado ao Ato do Parlamento denominado Census Act 1800. Este ato permitiu que se fizesse um censo nacional na Inglaterra, Gales e Escócia, começando em 1801 e continuando todos os dez anos até ao presente.\n[…]\nEm 1803, Malthus publicou um revisão maior da sua primeira edição. A sua versão final, a 6ª edição, foi publicada em 1826. No entanto, em 1830, Malthus publicou uma versão condensada como A Summary View on the Principle of Population, que também incluía materiais sobre o criticismo ao livro principal.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Equilíbrio pontuado",
      "descricao": "Teoria evolutiva de 1972 segundo a qual as espécies passam longos períodos estáveis, interrompidos por mudanças rápidas."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1972, que dois paleontólogos americanos propuseram que a evolução alterna longos períodos de estabilidade com mudanças rápidas, a teoria do equilíbrio pontuado?",
    "resposta": "Stephen Jay Gould e Niles Eldredge",
    "fonte": [
      "https://en.wikipedia.org/wiki/Punctuated_equilibrium"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Punctuated_equilibrium",
        "situacao": "ok",
        "texto": "In evolutionary biology, punctuated equilibrium (also called punctuated equilibria) is a theory that proposes that once a new species appears in the fossil record, the population will become stable, showing little evolutionary change for most of its geological history. This state of little or no morphological change is called stasis.\n[…]\nIn 1972, paleontologists Niles Eldredge and Stephen Jay Gould published a landmark paper developing their theory and called it punctuated equilibria. Their paper built upon Ernst Mayr's model of geographic speciation, I. M. Lerner's theories of developmental and genetic homeostasis,\n[…]\nA year before his and Gould's 1972 paper, Niles Eldredge published a paper in the journal Evolution which suggested that gradual evolution was seldom seen in the fossil record and argued that Ernst Mayr's standard mechanism of allopatric speciation might suggest a possible resolution.\n[…]\nGould recalls that \"Eldredge's 1971 publication [on Paleozoic trilobites] had presented the only new and interesting ideas on the paleontological implications of the subject—so I asked Schopf if we could present the paper jointly.\" According to Gould \"the ideas came mostly from Niles, with yours truly acting as a sounding board and eventual scribe.\n[…]\nI coined the term punctuated equilibrium and wrote most of our 1972 paper, but Niles is the proper first author in our pairing of Eldredge and Gould.\" In his book Time Frames Eldredge recalls that after much discussion the pair \"each wrote roughly half. Some of the parts that would seem obviously the work of one of us were actually first penned by the other—I remember for example, writing the section on Gould's snails. Other parts are harder to reconstruct.\n[…]\nPunctuated Equilibrium - by Stephen Jay Gould\n[…]\nScholarpedia: Punctuated equilibria - by Bruce Lieberman and Niles Eldredge"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Equil%C3%ADbrio_pontuado",
        "situacao": "ok",
        "texto": "Equilíbrio pontuado é uma teoria evolutiva proposta pelos paleontólogos norte-americanos Niles Eldredge e Stephen Jay Gould em 1972, que propõe que a maior parte das populações de organismos de reprodução sexuada experimentam pouca mudança ao longo do tempo geológico e, quando mudanças evolutivas no fenótipo ocorrem, elas se dão de forma rara e localizada em eventos rápidos de especiação denominad\n[…]\nO trabalho de Eldredge e Gould baseava-se na teoria de especiação alopátrica proposta por Ernst Mayr, nas teorias de homeostase genética e do desenvolvimento de I. Michael Lerner, assim como na pesquisa empírica dos autores.\n[…]\nEldredge e Gould propuseram que o nível de gradualismo considerado por Charles Darwin era praticamente inexistente no registro fóssil, e que a estabilidade morfológica dominava a história da maioria das espécies fósseis, o que exigiu explicações para o que foi chamado de \"paradoxo da estase morfológica\"  na literatura científica.\n[…]\nO equilíbrio pontuado surgiu como uma extensão do conceito de revoluções genéticas por especiação alopátrica e especialmente especiação peripátrica, de Ernst Mayr. Apesar de ter sido proposto e desenvolvido por Mayr em 1954, esse conceito se tornou amplamente conhecido após o trabalho de Niles Eldredge e Stephen Jay Gould de 1972. Esse trabalho foi considerado o documento fundador de um novo programa de pesquisa séria em paleontologia.\n[…]\nO equilíbrio pontuado diferia da proposta de Mayr simplesmente pela ênfase dada à estase evolutiva por parte de Eldredge e Gould, enquanto Mayr estava mais interessado em explicar a descontinuidade morfológica no registro fóssil.\n[…]\nSegundo Gould, \"a publicação de Eldredge de 1971 (sobre trilobitas do Paleozóico) apresentava as únicas idéias novas e interessantes sobre as implicações paleontológicas no tema - então eu perguntei a Schopf se nós podíamos apresentar o trabalho em parceria.\"",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Organismo geneticamente modificado",
      "descricao": "Ser vivo cujo material genético foi alterado por engenharia genética, como os transgênicos."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Em que década cientistas americanos criaram, por engenharia genética, o primeiro organismo transgênico, uma bactéria?",
    "resposta": "Anos setenta",
    "fonte": [
      "https://en.wikipedia.org/wiki/Genetically_modified_organism"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Genetically_modified_organism",
        "situacao": "ok",
        "texto": "A genetically modified organism (GMO) is any organism whose genetic material has been altered using genetic engineering techniques. The exact definition of a genetically modified organism and what constitutes genetic engineering varies, with the most common being an organism altered in a way that \"does not occur naturally by mating and/or natural recombination\". A wide variety of organisms have be\n[…]\nSystems have been developed to create transgenic organisms in a wide variety of other animals. Chickens have been genetically modified for a variety of purposes. This includes studying embryo development, preventing the transmission of bird flu and providing evolutionary insights using reverse engineering to recreate dinosaur-like phenotypes. A GM chicken that produces the drug Kanuma, an enzyme that treats a rare condition, in its egg passed US regulatory approval in 2015.\n[…]\nThe nematode Caenorhabditis elegans is one of the major model organisms for researching molecular biology. RNA interference (RNAi) was discovered in C. elegans and could be induced by simply feeding them bacteria modified to express double stranded RNA. It is also relatively easy to produce stable transgenic nematodes and this along with RNAi are the major tools used in studying their genes.\n[…]\nBacteria were the first organisms to be genetically modified in the laboratory, due to the relative ease of modifying their chromosomes. This ease made them important tools for the creation of other GMOs. Genes and other genetic information from a wide range of organisms can be added to a plasmid and inserted into bacteria for storage and modification. Bacteria are cheap, easy to grow, clonal, multiply quickly and can be stored at −80 °C almost indefinitely.\n[…]\nWhen applied to crops they can compete with the non-modified bacteria and confer some frost resistance.\n[…]\nGMO-Compass: Information on genetically modified organisms"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Organismos_geneticamente_modificados",
        "situacao": "ok",
        "texto": "Organismos Geneticamente Modificados, frequentemente referidos pela sigla OGM, são organismos manipulados geneticamente de modo a favorecer características desejadas, como a cor, tamanho, etc. Os OGMs possuem alteração em trechos do genoma realizadas através da tecnologia do RNA/DNA recombinante ou engenharia genética.\n[…]\nUm transgênico é um organismo que possui uma sequência de DNA (ou parte do DNA) de outro organismo, que pode até ser de uma espécie diferente. Já um OGM é um organismo que foi modificado geneticamente mas não necessariamente recebeu uma região de outro organismo. Por exemplo, uma bactéria pode ser modificada para expressar um gene por mais vezes. Isso não quer dizer que ela seja uma bactéria transgênica, mas apenas um OGM, já que não foi necessário inserir material externo.\n[…]\nOGM é, segundo o artigo 3º, inciso V, da Lei Federal brasileira nº 11.105, de 24 de março de 2005, OGM é \"o organismo cujo material genético (DNA/RNA) tenha sido modificado por qualquer técnica de engenharia genética\".\n[…]\nExistem grandes diferenças na aceitação dos organismos geneticamente modificados pelos consumidores, os europeus vejam os alimentos geneticamente modificados de maneira negativa mais frequentemente do que os norte-americanos.\n[…]\nEssa tinha várias desvantagens, como a óbvia necessidade de se ter de matar um elevadíssimo número de porcos para obter uma quantidade significativa de insulina, juntando o facto de esta ainda poder originar alergias no receptor.O primeiro organismo geneticamente modificado foi uma bactéria chamada Eschericia coli. Esta foi modificada de modo a integrar o gene humano responsável pela produção de insulina.\n[…]\n«Genetically Modified Organisms» (em inglês). . Informações detalhadas sobre transgênicos e testes de transgênicos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Nucleína",
      "descricao": "Nome dado por Friedrich Miescher, em 1869, à substância do núcleo celular hoje conhecida como DNA."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em 1869, o suíço Friedrich Miescher isolou o DNA pela primeira vez, a partir de glóbulos brancos. De onde ele tirou essas células?",
    "resposta": "Do pus de curativos de hospital",
    "fonte": [
      "https://en.wikipedia.org/wiki/Friedrich_Miescher"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Friedrich_Miescher",
        "situacao": "ok",
        "texto": "Johannes Friedrich Miescher (13 August 1844 – 26 August 1895) was a Swiss physician and biologist. He was the first scientist to isolate nucleic acid in 1869. Miescher also identified protamine and made several other discoveries.\n[…]\nLymphocytes were difficult to obtain in sufficient numbers to study, while neutrophils were known to be one of the main and first components in pus and could be obtained from bandages at the nearby hospital. However, the problem was washing the cells off the bandages without damaging them.\n[…]\nOstrowski, W (1970). \"From nucleic acids to DNA. On the 100th anniversary of the discovery of nucleic acids by Friedrich Miescher\". Postepy Biochemii. 16 (4): 581–7. ISSN 0032-5422. PMID 4921671.\n[…]\nBernhard, K (Jan 1971). \"Jonhannes Friedrich Miescher Symposium. 100th anniversary of the discovery of nucleic acids. Welcome\". Bulletin der Schweizerischen Akademie der Medizinischen Wissenschaften. 25 (1–2): 32–4. ISSN 0036-7494. PMID 4908661.\n[…]\nMiescher, Friedrich (1871). \"Ueber die chemische Zusammensetzung der Eiterzellen\". Medicinisch-chemische Untersuchungen. 4: 441–460.\n[…]\nGreenstein JP (1943). \"Friedrich Miescher, 1844-1895\". The Scientific Monthly. 57 (5): 523–532. Bibcode:1943SciMo..57..523G. JSTOR 18231.\n[…]\nVeigl, Harman, Lamm, \"Friedrich Miescher's Discovery in the Historiography of Genetics\", Journal of the History of Biology 53:3, 2020\n[…]\nFMI – Friedrich Miescher Institute\n[…]\nThe Friedrich Miescher Laboratory of the Max Planck Society\n[…]\nWolf, George (2003). Friedrich Miescher, the man who discovered DNA. U.C.Berkeley.\n[…]\nEhud Lamm, Oren Harman, Sophie Juliane Veigl (2020). Before Watson and Crick in 1953 Came Friedrich Miescher in 1869. Genetics, 2020 Jun;215(2):291-296. doi:10.1534/genetics.120.303195."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Johann_Friedrich_Miescher",
        "situacao": "ok",
        "texto": "Johann Friedrich Miescher (Basileia, 13 de agosto de 1844 – Davos, 26 de agosto de 1895) foi um bioquímico suíço que descobriu o ácido desoxirribonucleico em 1869.\n[…]\nO laboratório de Hoppe-Seyler era o primeiro da Alemanha a dar foco em química tecidual. Numa época onde cientistas debatiam o conceito de “célula”, Hoppe-Seyler em seu laboratório já isolava moléculas provindas de células. Miescher recebeu então de Hoppe-Seyler, a tarefa de pesquisar a composição de células linfóides – células da linhagem branca do sangue.\n[…]\nEssas células eram difíceis de serem extraídas de glândulas linfáticas, mas elas eram encontradas em grande quantidade em amostras de pus em infecções. Observando isso, Miescher foi até uma clínica próxima, coletou bandagens já utilizadas em pacientes e fez um lavado do pus presente nelas. Então, através de experimentos, isolou uma molécula nova, presente no núcleo das células, que chamou de nucleína.\n[…]\nEle observou que a nucleína, era composta de hidrogênio, oxigênio, nitrogênio e fósforo e que existia uma única ligação entre o fósforo e o nitrogênio. Além disso, Miescher conseguiu isolar a nucleína de outros tipos de célula. Sua pesquisa sobre a nucleína foi publicada apenas em 1871. Pelo fato da nucleína ser uma molécula tão única, Hoppe-Seyler estava cético e preferiu confirmar os resultados de Miescher antes da publicação.\n[…]\nMiescher acreditava, por si mesmo, que proteínas eram moléculas da hereditariedade. Através de seus estudos, lançou as bases para diversas descobertas moleculares. Friedrich Miescher morreu em 1895, após contrair uma tuberculose.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Proteína verde fluorescente",
      "descricao": "Proteína que brilha em verde sob luz azul ou ultravioleta, usada como marcador em biologia molecular."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "A proteína verde fluorescente, que faz brilhar animais transgênicos nos laboratórios, foi descoberta em qual animal marinho?",
    "resposta": "Água-viva",
    "fonte": [
      "https://en.wikipedia.org/wiki/Green_fluorescent_protein"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Green_fluorescent_protein",
        "situacao": "ok",
        "texto": "The green fluorescent protein (GFP) is a protein that exhibits green fluorescence when exposed to light in the blue to ultraviolet range. The label GFP traditionally refers to the protein first isolated from the jellyfish Aequorea victoria and is sometimes called avGFP. However, GFPs have been found in other organisms including corals, sea anemones, zoanithids, copepods and lancelets.\n[…]\nGreen fluorescent protein may be used as a reporter gene.\n[…]\nGreen fluorescent pigs, known as Noels, were bred by a group of researchers led by Wu Shinn-Chih at the Department of Animal Science and Technology at National Taiwan University. A Japanese-American Team created green-fluorescent cats as proof of concept to use them potentially as model organisms for diseases, particularly HIV. In 2009 a South Korean team from Seoul National University bred the first transgenic beagles with fibroblast cells from sea anemones.\n[…]\nJulian Voss-Andreae, a German-born artist specializing in \"protein sculptures\", created sculptures based on the structure of GFP, including the 1.70 metres (5 feet 7 inches)  tall \"Green Fluorescent Protein\" (2004) and the 1.40 metres (4 feet 7 inches) tall \"Steel Jellyfish\" (2006). The latter sculpture is located at the place of GFP's discovery by Shimomura in 1962, the University of Washington's Friday Harbor Laboratories.\n[…]\nProtein tag\n[…]\nYellow fluorescent protein\n[…]\nVideo of 2008 Nobel Prize lecture of Roger Tsien on fluorescent proteins\n[…]\nExcitation and emission spectra for various fluorescent proteins\n[…]\nGreen Fluorescent Protein Chem Soc Rev themed issue dedicated to the 2008 Nobel Prize winners in Chemistry, Professors Osamu Shimomura, Martin Chalfie and Roger Y. Tsien\n[…]\nGreen Fluorescent Protein on FPbase, a fluorescent protein database\n[…]\nOverview of all the structural information available in the PDB for UniProt: P42212 (Green fluorescent protein) at the PDBe-KB."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Prote%C3%ADna_verde_fluorescente",
        "situacao": "ok",
        "texto": "A proteína verde fluorescente, mais conhecida por GFP (abreviatura do inglês green fluorescent protein), é uma proteína produzida pelo cnidário Aequorea victoria que emite fluorescência na zona verde do espectro visível. O gene que codifica esta proteína foi já isolado e é actualmente usado na produção de proteínas de fusão, constituídas por um gene de interesse fundido com o da GFP, de modo a mon\n[…]\nRecentemente, outras proteínas fluorescentes foram já identificadas, como por exemplo a proteína fluorescente amarela (abreviatura do inglês: YFP) e vermelha (RFP), entre outras. Para além disso, estas proteínas originais foram também modificadas, de modo a melhorar o seu desempenho em sistemas vivos. Um dos resultados deste tipo de engenharia é a proteína verde fluorescente melhorada, em inglês enhanced green florescent protein ou EGPF.\n[…]\nAs proteínas fluorescentes, entre as quais a GFP, são muito versáteis e têm sido utilizadas em diversos campos da biologia, como microbiologia, engenharia genética e fisiologia, por exemplo. Este tipo de sonda é ubíquo, e como tal, é extremamente útil para estudo de expressão génica em culturas de células ou de tecidos, assim como em sistemas vivos (animais, plantas, bactérias...).\n[…]\nUma enorme variedade de técnicas está hoje disponível para a construção de proteínas de fusão com base em proteínas fluorescentes e para aumentar a sua expressão em animais e plantas. Os veículos de eleição para a introdução deste tipo de genes nos organismos são plasmídeos bacterianos, vectores virais, biolística, entre outros. O gene de fusão pode então ser integrado nos cromossomas do organismo em estudo.\n[…]\nSite de microscopia sobre vários tipos de proteínas florescentes\n[…]\nArtigo sobre utilização da GFP em plantas - Stewart C. N. 2001. The utility of green fluorescent protein in transgenic plants. Plant Cell Reports 20 (5): 376-382",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  }
]

---

# MANIFESTO

# Manifesto de Perguntas — Mestre2

> **Versão preliminar 0.67 — 2026-10-13**
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
- As perguntas da coleção seguem todas as regras desta Parte I: tema e subtema, âncora, saturação e fontes. Podem ser com ou sem figura.
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
